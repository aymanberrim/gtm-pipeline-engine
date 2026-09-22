#!/usr/bin/env node
// Renders library/README.md from library/manifest.json so the table never drifts from the manifest.
import fs from 'node:fs';
import path from 'node:path';
const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const m = JSON.parse(fs.readFileSync(path.join(ROOT, 'library/manifest.json'), 'utf8'));
const stages = [...new Set(m.skills.map((s) => s.stage))].sort();
let out = `# Library: upstream skills the engine runs on\n\nSource: [swan-gtm/gtm-skills](${m.source}) (${m.license}). Browse them at [gtmskills.com](https://gtmskills.com). Every skill below is written by the named author; this repo only decides where it sits in the pipeline and why.\n\nInstall everything: \`tools/install-library.sh\` · one stage: \`tools/install-library.sh --stage 4-engage\` · one skill: \`${m.install}\`\n\n`;
for (const st of stages) {
  out += `## Stage ${st}\n\n| Skill | Author | Why it is in the engine |\n|---|---|---|\n`;
  for (const s of m.skills.filter((x) => x.stage === st)) out += `| [${s.name}](https://www.gtmskills.com/skill/${s.name}) | [${s.author}](https://www.gtmskills.com/${s.author}) | ${s.why} |\n`;
  out += '\n';
}
out += `_${m.skills.length} upstream skills. Regenerate with \`node tools/render-library.mjs\`._\n`;
fs.writeFileSync(path.join(ROOT, 'library/README.md'), out);
console.log(`library/README.md rendered (${m.skills.length} skills)`);
