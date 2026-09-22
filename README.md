# gtm-pipeline-engine

A complete outbound channel for B2B tech products, run as a machine: targeting, sourcing, segmentation, engagement, conversion, close, learning. Built for robotics and AI-software vendors entering the European market, and operated end to end by one GTM owner and their agents.

Every stage is a folder with an input, an output, an exit criterion and a metric. Every method is a portable `SKILL.md` any agent can run (Claude Code, Cursor, Codex and others), and the skills chain stage to stage.

```
Target → Source → Segment → Engage → Convert → Close → Learn
  1        2         3         4         5        6       7
```

## Install

```bash
# the pipeline's skills, into your agent
npx skills add aymanberrim/gtm-pipeline-engine

# the community skills the pipeline also calls on (credited in library/)
tools/install-library.sh            # everything
tools/install-library.sh --stage 5-convert   # one stage
```

Add `-a claude-code`, `-a cursor` or `-a codex` to target one agent.

## Layout

```
pipeline/            the machine, one folder per stage, in the order a lead travels
  1-target/          country, entry mode, compliance pack, ICP rule, account universe, incumbent stack
  2-source/          people who can say yes, proven by registry and tenure, with a verified channel
  3-segment/         homogeneous groups, one message per group, replies as the test
  4-engage/          sequences, resource posts, capture, two-stage enrichment, scoring
  5-convert/         reply handling, the call that books the demo, the state machine, the safety net
  6-close/           demo, qualification gates, pilot, business case, mutual plan, procurement
  7-learn/           cadence, metrics, CEO report, win/loss back into targeting
skills/              the pipeline's skills (SKILL.md + references/)
library/             community skills the pipeline also calls on, by stage, with source and author credit
operations/          the routine, the state machine, the metrics, the SLAs, the handoff pack
market-entry/        the non-EU → Europe module: scorecard, entry mode, regulation as arguments
tools/               validator, library installer, renderer
templates/           the skill template new skills copy
```

## The skills

| Stage | Skill | What it does |
|---|---|---|
| 1 | [market-entry-scorecard](skills/market-entry-scorecard/) | Ranks candidate European countries on seven weighted criteria with hard gates, and picks the entry mode |
| 1 | [regulatory-to-selling-points](skills/regulatory-to-selling-points/) | Turns GDPR transfers, the EU AI Act tier, NIS2 and the Cyber Resilience Act, CE marking (Machinery Directive today, Regulation from 2027) and works-council rules into persona, artifact, selling line and landmine |
| 1 | [stack-detection](skills/stack-detection/) | Finds which incumbent tool an account runs, from DNS, certificate logs, portal links and directories |
| 2 | [decision-maker-authority](skills/decision-maker-authority/) | Replaces the job title with a registry mandate and a tenure ratio, separates buyers from vendors, and tiers the list A/B/C/D |
| 3 | [segment-then-write](skills/segment-then-write/) | Cuts the list into homogeneous groups and writes one message per group; replies re-cut the groups |
| 4 | [resource-magnet-funnel](skills/resource-magnet-funnel/) | Turns a resource post into captured hand-raisers, enriches email first, runs deliver / value / ask, scores and routes |
| 5 | [zero-lead-lost](skills/zero-lead-lost/) | A closed 14-state machine with three invariants, six guards and a safety net emptied daily |
| 5 | [demo-booking-call](skills/demo-booking-call/) | A call that qualifies and books live, with an attempt machine, objection handling and a handoff pack |
| 7 | [channel-operating-cadence](skills/channel-operating-cadence/) | The daily, weekly and monthly routine, twelve metrics and a one-page CEO report |

Each skill is a focused spine (roughly 800-1300 words) plus two or three reference pages with the rubrics, the worked examples and the failure tables. Read [pipeline/](pipeline/) first to see how they chain; read [operations/](operations/) to see what running the channel looks like week to week.

**See it in action:** two worked outbound messages in [segment-then-write's references](skills/segment-then-write/references/message-pattern-and-copy-rules.md), a filled one-page CEO report in [channel-operating-cadence's references](skills/channel-operating-cadence/references/ceo-weekly-report-template.md), and a booked-demo handoff pack in [demo-booking-call's references](skills/demo-booking-call/references/attempts-and-handoff.md).

## What this needs to run

In one place, day one, so nothing stalls in week two:

- The product's proof: current customers or references, and the unit economics, so the business case is real.
- A sending domain to warm (a secondary domain dedicated to outbound), and CRM access or a green light to stand one up.
- A calendar with bookable slots, and the account executive or founder who takes the demos.
- A budget line for enrichment and sending tools, with a per-day cap.
- A named legal or counsel contact to sign off the compliance pack.

## What "well-oiled" means here

- A lead has exactly one owner, one status and one dated next action at all times. The three safety-net views are empty every evening. That is the mechanism, not willpower: a lead can only sit in a queue somebody empties every day.
- Nothing is guessed: no inferred email, no title taken as authority, no incumbent tool assumed from a logo on a website.
- Money is spent late: email enrichment in bulk, the mobile number only when the lead is in ICP and has clicked, replied or tested.
- Replies are the test of segmentation. A group under 3% reply after 60 sends is re-cut, not re-written.
- Every threshold is a number, and every number is either a sensible default or one to tune on the channel it runs on.

## Quality bar

Skills encode judgment, not steps: what the best operator notices first, the trap the average one falls into, what good output looks like with a number. They speak in GTM verbs ("check the CRM", "run verification") so they work on any stack. `node tools/validate.mjs` enforces the format and runs in CI; [CONTRIBUTING.md](CONTRIBUTING.md) has the bar.

## Running example

Skills use one running example throughout: a vendor from outside Europe (a warehouse-robotics maker from Shenzhen, an AI-agent platform from Austin) entering its first European market. No real customer or prospect is named anywhere in this repo.

## License

MIT. The community skills the pipeline installs keep their own authors' MIT license and credit; see [library/README.md](library/README.md).
