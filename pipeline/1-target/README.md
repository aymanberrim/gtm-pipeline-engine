# Stage 1 · Target

Decide which market, which accounts, and what to say before a single contact is sourced. Everything downstream inherits the errors made here, so this stage ends with numbers, not opinions.

## Input

- The product, its proof (customers, references, unit economics) and its legal ability to sell in Europe.
- A candidate list of countries, or a single country already chosen by the CEO.
- Access to public directories, registries and the accounts' public technical surfaces.

## Output

- A ranked country shortlist with an entry mode (direct, integrator, distributor, marketplace) and a 90-day beachhead plan.
- A compliance pack readiness score (0-100) and the artifacts to pre-bake.
- An ICP written as a scored decision rule, and the enumerated account universe for the chosen country.
- Tool-tagged segments: which accounts already run which incumbent system, with a confidence per tool.
- A first battlecard against the two or three local competitors and the incumbent status quo.

## Exit criteria

- One country and one entry mode chosen and written down with the score that chose them.
- Compliance readiness at 70 or above (40-69 allows restricted outbound only; below 40 nothing goes out).
- Account universe enumerated with a coverage report; at least 80% of accounts carry a size band and a geography.
- Stack profile on the accounts that matter: at least one incumbent tool identified on 90% or more of the priority list.

## Metrics

| Metric | Definition | Default target |
|---|---|---|
| Country score | Weighted 0-100 across seven criteria | 55+ to enter, 70+ to commit headcount |
| Compliance readiness | Checklist 0-100 | 70+ before full outbound |
| Universe coverage | Accounts found / accounts estimated | 80%+ |
| Stack detection rate | Priority accounts with 1+ tool identified | 90%+ |

## Skills

Original to this engine:

- [market-entry-scorecard](../../skills/market-entry-scorecard/) picks the country and the entry mode.
- [regulatory-to-selling-points](../../skills/regulatory-to-selling-points/) turns GDPR, AI Act, CE marking and works-council rules into arguments and a readiness score.
- [stack-detection](../../skills/stack-detection/) finds the incumbent tools from public surfaces (DNS, certificate logs, portal links, directories) and tags the segments.

From the library (see [library/README.md](../../library/README.md)): `move-gtm-diagnostic` (run first), `market-finder`, `icp-matrix-builder`, `competitor-positioning`, `battlecard`, `ai-pricing-model-picker`.

## Handoff to stage 2

Stage 2 receives the account universe with size band, geography, fit class and stack tags, plus the ICP decision rule. It does not receive people yet.
