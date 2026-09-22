#!/usr/bin/env node
// Validates the gtm-pipeline-engine repo. Zero dependencies.
// Run from the repo root: node tools/validate.mjs
// Every error is one line: <path>: <what is wrong> — <how to fix it>
//
// What it checks
//   skills/<name>/SKILL.md      frontmatter (incl. tags), name == folder, mandatory sections
//                               (Inputs, The play, What good looks like, Rules, Handoff), spine length,
//                               placeholders, linkage from the stage README
//   skills/<name>/references/   at least two reference pages, each scanned for placeholders and vendor names
//   pipeline/<stage>/README.md  every stage documents input, output, exit criteria, metric, skills
//   library/manifest.json       every upstream skill has author + stage + reason, no duplicates
//   vendor names / em-dashes    skills speak in GTM verbs, not tool names, in the house voice

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const rel = (p) => path.relative(ROOT, p);
const errors = [];
const warnings = [];
const err = (f, m) => errors.push(`${rel(f)}: ${m}`);
const warn = (f, m) => warnings.push(`${rel(f)}: ${m}`);

const KEBAB = /^[a-z0-9][a-z0-9-]*$/;
const STAGES = ['1-target', '2-source', '3-segment', '4-engage', '5-convert', '6-close', '7-learn'];
const CATEGORIES = new Set(['Prospecting', 'Research', 'Positioning', 'Signals', 'Outreach', 'Deals', 'Sales', 'Pricing', 'RevOps', 'ABM']);
const REQUIRED_SECTIONS = ['## Inputs', '## The play', '## What good looks like', '## Rules'];
const PLACEHOLDER = /\{\{|\[TODO|\[bracketed|\bTKTK\b|\bLOREM\b/;
const TIME_ANCHOR = /\b(recently|last year|this year|next year|as of 20\d\d|in 20\d\d)\b/i;
const EM_DASH = /—/;
const VENDOR_WORDS = ['HubSpot', 'Salesforce', 'Apollo', 'Clay', 'Lemlist', 'Instantly', 'Outreach.io', 'Salesloft', 'Waalaxy', 'Emelia', 'FullEnrich', 'Lusha', 'ZoomInfo', 'Bouncer', 'Twenty CRM', 'ClickUp', 'Notion'];

const parseFrontmatter = (raw) => {
  if (!raw.startsWith('---\n')) return null;
  const end = raw.indexOf('\n---', 4);
  if (end === -1) return null;
  const block = raw.slice(4, end);
  const data = {};
  let last = null;
  for (const line of block.split('\n')) {
    if (!line.trim() || line.trim().startsWith('#')) continue;
    if (/^\s/.test(line)) {
      const t = line.trim();
      if (last && Array.isArray(data[last]) && t.startsWith('- ')) data[last].push(t.slice(2).trim());
      else if (last && typeof data[last] === 'string') data[last] += ` ${t}`;
      continue;
    }
    const m = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (!m) continue;
    const [, key, valueRaw] = m;
    let value = valueRaw.trim();
    if (value === '|' || value === '>' || value === '>-' || value === '|-') value = '';
    else if (value.startsWith('[') && value.endsWith(']')) value = value.slice(1, -1).split(',').map((s) => s.trim()).filter(Boolean);
    else if (value === '') value = [];
    else value = value.replace(/^["']|["']$/g, '');
    data[key] = value;
    last = key;
  }
  return { data, body: raw.slice(end + 4) };
};

const words = (s) => s.split(/\s+/).filter(Boolean).length;

// ---- skills/ ---------------------------------------------------------------
const skillsDir = path.join(ROOT, 'skills');
const skillNames = [];
for (const entry of fs.readdirSync(skillsDir, { withFileTypes: true })) {
  if (!entry.isDirectory()) { if (entry.name !== 'README.md') err(path.join(skillsDir, entry.name), 'stray file — skills/ holds only skill folders and a README'); continue; }
  const dir = path.join(skillsDir, entry.name);
  const skillFile = path.join(dir, 'SKILL.md');
  if (!KEBAB.test(entry.name)) err(dir, 'folder name must be kebab-case — rename it');
  if (!fs.existsSync(skillFile)) { err(dir, 'missing SKILL.md — every skill folder needs one'); continue; }
  skillNames.push(entry.name);
  const raw = fs.readFileSync(skillFile, 'utf8');
  const fm = parseFrontmatter(raw);
  if (!fm) { err(skillFile, 'missing YAML frontmatter — start the file with --- name: ... ---'); continue; }
  const { data, body } = fm;
  for (const k of ['name', 'title', 'description', 'category', 'stage', 'tags']) if (!data[k] || data[k].length === 0) err(skillFile, `frontmatter missing \`${k}:\``);
  if (data.name && data.name !== entry.name) err(skillFile, `frontmatter name "${data.name}" must equal folder name "${entry.name}"`);
  if (data.category && !CATEGORIES.has(data.category)) err(skillFile, `category "${data.category}" is not one of ${[...CATEGORIES].join(', ')}`);
  if (data.stage && !STAGES.includes(data.stage)) err(skillFile, `stage "${data.stage}" must be one of ${STAGES.join(', ')}`);
  if (typeof data.description === 'string') {
    if (!/^Use this skill when/i.test(data.description.trim())) err(skillFile, 'description must start with "Use this skill when" — it is what an agent reads to decide to fire the skill');
    if (data.description.length < 200) warn(skillFile, 'description is short (<200 chars) — add the phrases someone would actually say when they need this');
    if (data.description.length > 1024) err(skillFile, 'description longer than 1024 chars — move detail into the body');
  }
  for (const s of REQUIRED_SECTIONS) if (!body.includes(s)) err(skillFile, `missing mandatory section "${s}"`);
  if (!/## (Handoff|Next stage|Boundary)/.test(body)) err(skillFile, 'missing "## Handoff" section — say what the next stage receives and which skill takes over');
  const bodyWords = words(body);
  if (bodyWords < 500) err(skillFile, `body is ${bodyWords} words — the spine must be at least 500 words of judgment, not a checklist`);
  if (bodyWords > 1400) warn(skillFile, `body is ${bodyWords} words — consider moving depth into references/`);
  if (raw.split('\n').length > 500) err(skillFile, 'SKILL.md over 500 lines — move depth into references/');
  if (PLACEHOLDER.test(body)) err(skillFile, 'placeholder text left in body');
  if (TIME_ANCHOR.test(body)) warn(skillFile, 'time-anchored wording ("recently", "this year") rots — rephrase');
  if (EM_DASH.test(body)) warn(skillFile, 'em-dash in body — the house voice uses a colon, comma or full stop');
  for (const v of VENDOR_WORDS) if (new RegExp(`\\b${v.replace('.', '\\.')}\\b`).test(body)) warn(skillFile, `mentions vendor "${v}" — prefer a GTM verb ("check the CRM", "run email verification") unless naming the vendor is the point`);
  // the skill must be linked from its stage README, so a reader lands on it from the pipeline
  if (data.stage && STAGES.includes(data.stage)) {
    const stageReadme = path.join(ROOT, 'pipeline', data.stage, 'README.md');
    if (fs.existsSync(stageReadme) && !fs.readFileSync(stageReadme, 'utf8').includes(`skills/${entry.name}`)) err(skillFile, `not linked from pipeline/${data.stage}/README.md — add it under "## Skills"`);
  }
  const refDir = path.join(dir, 'references');
  const refs = fs.existsSync(refDir) ? fs.readdirSync(refDir).filter((f) => f.endsWith('.md')) : [];
  if (refs.length < 2) err(dir, 'ship at least two references/ pages — the depth (rubrics, worked examples, edge cases) is what makes a skill worth installing');
  for (const r of refs) {
    const rp = path.join(refDir, r);
    const rtxt = fs.readFileSync(rp, 'utf8');
    if (!KEBAB.test(r.replace(/\.md$/, ''))) err(rp, 'reference file name must be kebab-case');
    if (words(rtxt) < 250) warn(rp, 'reference page under 250 words — is it pulling its weight?');
    if (PLACEHOLDER.test(rtxt)) err(rp, 'placeholder text left in reference page');
    if (EM_DASH.test(rtxt)) warn(rp, 'em-dash in reference page — use a colon, comma or full stop');
    for (const v of VENDOR_WORDS) if (new RegExp(`\\b${v.replace('.', '\\.')}\\b`).test(rtxt)) warn(rp, `mentions vendor "${v}" — prefer a GTM verb`);
    if (!body.includes(r)) warn(skillFile, `body never tells the reader when to open references/${r}`);
  }
}

// ---- pipeline/ -------------------------------------------------------------
for (const stage of STAGES) {
  const f = path.join(ROOT, 'pipeline', stage, 'README.md');
  if (!fs.existsSync(f)) { err(f, 'missing stage README'); continue; }
  const txt = fs.readFileSync(f, 'utf8');
  for (const h of ['## Input', '## Output', '## Exit criteria', '## Metrics', '## Skills']) if (!txt.includes(h)) err(f, `missing section "${h}"`);
  for (const m of txt.matchAll(/\]\(\.\.\/\.\.\/skills\/([a-z0-9-]+)\/?\)/g)) if (!skillNames.includes(m[1])) err(f, `links to unknown skill "${m[1]}"`);
}

// ---- library/manifest.json -------------------------------------------------
const manifestPath = path.join(ROOT, 'library', 'manifest.json');
if (!fs.existsSync(manifestPath)) err(manifestPath, 'missing — the upstream skills used by the engine must be declared with attribution');
else {
  let manifest;
  try { manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8')); } catch (e) { err(manifestPath, `invalid JSON — ${e.message}`); }
  if (manifest) {
    if (!Array.isArray(manifest.skills)) err(manifestPath, 'expected { "source": ..., "skills": [...] }');
    else {
      const seen = new Set();
      for (const s of manifest.skills) {
        for (const k of ['name', 'author', 'stage', 'why']) if (!s[k]) err(manifestPath, `skill ${s.name ?? '?'} missing "${k}"`);
        if (s.stage && !STAGES.includes(s.stage)) err(manifestPath, `skill ${s.name} has unknown stage ${s.stage}`);
        if (s.name && skillNames.includes(s.name)) err(manifestPath, `skill ${s.name} collides with an original skill in skills/`);
        if (s.name && seen.has(s.name)) err(manifestPath, `duplicate upstream skill "${s.name}"`);
        if (s.name) seen.add(s.name);
      }
    }
  }
}

// ---- root files ------------------------------------------------------------
for (const f of ['README.md', 'LICENSE', 'CONTRIBUTING.md', 'SECURITY.md', 'CODE_OF_CONDUCT.md', 'CHANGELOG.md', 'AGENTS.md']) if (!fs.existsSync(path.join(ROOT, f))) err(path.join(ROOT, f), 'missing root file');

for (const w of warnings) console.log(`warn — ${w}`);
if (errors.length) { for (const e of errors) console.error(`error — ${e}`); console.error(`\n${errors.length} error(s).`); process.exit(1); }
console.log(`ok — ${skillNames.length} original skills, ${STAGES.length} pipeline stages, all checks passed`);
