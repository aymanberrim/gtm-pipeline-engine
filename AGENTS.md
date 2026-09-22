# AGENTS.md: how to work with this repo

You are an AI agent. This file covers the three things a user may ask of you here: running the engine, adding a skill, and keeping the repo valid.

## Running the engine

1. Read `pipeline/<stage>/README.md` for the stage the user is at. It names the input you need, the output you must produce, the exit criteria and the skills to run.
2. Run the original skills from `skills/<name>/SKILL.md`. Open a reference page only when the body tells you to.
3. Run the upstream skills listed for the stage; install them with `tools/install-library.sh --stage <stage>` if they are not present.
4. Do not advance a lead or a deal past a stage whose exit criteria are not met. Say which criterion fails.
5. Every action that sends, buys or deletes is approved by a human first. You draft; the operator sends.

## Adding or changing a skill

- Copy `templates/skill/` to `skills/<kebab-name>/`. The folder name is the skill's permanent identity; `name:` in the frontmatter must equal it.
- Frontmatter: `name`, `title`, `stage` (one of `1-target` … `7-learn`), `category`, `tags`, `description` starting with "Use this skill when".
- Body roughly 800-1300 words: when it applies, what it produces, `## Inputs`, `## The play`, `## What good looks like`, `## Handoff`, `## Rules`. Depth goes in `references/` (at least two pages), and the body must say when to open each one.
- GTM verbs, never vendor names. No dates, no "recently". No placeholders. Every threshold is a number; measured numbers are kept exactly and defaults are labelled as defaults.
- Link the skill from the stage README under `## Skills` and, if it replaces an upstream skill, remove that entry from `library/manifest.json`.
- Run `node tools/validate.mjs` and fix every error.

## Adding an upstream skill

Add an entry to `library/manifest.json` with `name`, `author` (their creator slug on gtmskills.com), `stage` and `why` (one sentence on why it was picked over alternatives). Run `node tools/render-library.mjs`. Never copy upstream skill files into this repo; they are installed, not vendored.

## Hard rules

- Never write a real customer, prospect or person into a skill or an example. The running example is a fictional non-European vendor entering Europe.
- Never add a skill that sends data to an endpoint the operator does not own, asks for credentials, or removes a human approval step.
- Never edit files under `library/` by hand; they are rendered from the manifest.
