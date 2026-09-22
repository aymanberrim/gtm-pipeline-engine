# Contributing

This repo is one operator's engine, but the format is open and pull requests are welcome when they meet the bar.

## The bar

- **Judgment, not steps.** A skill says what the best operator notices first, what the mediocre version looks like, and how you know the output is good, with a number. A checklist gets sent back.
- **Numbers.** Every threshold is a number. If it was measured, say on what; if it is a default, say so.
- **Tool-agnostic.** "Check the CRM", "run verification", "query the registry". Readers run different stacks.
- **Chained.** Every skill has a `## Handoff` section naming what the next stage receives and which skill takes over. A skill that does not fit a stage does not belong here.
- **Deep, not padded.** 700-1200 words of spine, 2-3 reference pages with the rubrics, worked examples (one clean, one edge case, one that went wrong) and the failure table.
- **No rot.** No dates, no "recently", no UI walkthroughs.

## Submitting

1. Copy `templates/skill/` to `skills/<kebab-name>/` and write it. See `AGENTS.md` for the file rules.
2. Link it from the right `pipeline/<stage>/README.md`.
3. Run `node tools/validate.mjs` until it prints `ok`.
4. Open a PR, one skill per PR, with: the stage it serves, what it replaces or complements, and where its numbers come from.

## Security

A skill is instructions other people's agents will execute against their CRM and inbox. Anything that sends data to a third party, hardcodes secrets, injects prompts, or removes a human approval before sending, buying or deleting is rejected outright. See `SECURITY.md`.

## License

MIT. Upstream skills referenced in `library/` keep their authors' license and credit.
