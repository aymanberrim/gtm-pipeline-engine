# Stage 2 · Source

Turn accounts into people who can say yes, with a verified way to reach them. The engine never guesses an email address and never trusts a job title alone.

## Input

- The account universe from stage 1 with fit class and stack tags.
- The ICP decision rule.
- The entry mode chosen in stage 1 (direct / integrator / distributor / marketplace), which decides whether integrators are prospects or partners.
- Access to a professional-network export, the national company registry, an enrichment provider and an email verifier.

## Output

- A people list where every row carries: company class (buyer / integrator / competitor), role vs the incumbent tool, an authority level (registered mandate, tenure ratio, or influencer), a tier A/B/C/D, a verified-safe email or an explicit fallback channel.
- A buying-signal layer per account (hiring, funding, job change, tech change) that feeds the intent score later.
- A launch-readiness decision from the hygiene gate: duplicates resolved, owners assigned, stale rows quarantined.

## Exit criteria

- Every Tier A row is a core role (rung 1-3) at a buyer with a proven or probable decision-maker (registry mandate or tenure ratio at 60% or above), not a title alone; a title-only core-role row sits in Tier B until verified.
- Zero email addresses inferred from patterns; every send address is verified-safe, catch-all held in reserve.
- Duplicate rate under 2% on the profile-URL key; every row has exactly one owner.
- Buyers and vendors separated: no consultancy, integrator or competing vendor in Tier A. Tier D (consultancies, integrators, competing vendors) leaves the buyer motion and is routed to the stage-7 partner motion where a partnership is relevant.

## Metrics

| Metric | Definition | Default target |
|---|---|---|
| Tier A share | Tier A rows / total rows | 20-30% of a keyword export sit at rung 1-3 in a buyer (219 of 868); those with authority proven or probable are Tier A |
| Authority proven | Tier A with mandate or tenure ratio ≥ 60% | 100% |
| Verified-safe rate | Safe emails / rows enriched | 70% (below 50% the source list is poor) |
| Duplicate rate | Duplicates found at gate / rows | under 2% |

## Skills

Original to this engine:

- [decision-maker-authority](../../skills/decision-maker-authority/) replaces the title with registry mandate, tenure ratio and headcount, classifies buyer vs vendor, and tiers the list.

From the library: `tam-builder`, `list-architect`, `signal-sourcer`, `hygiene-gated-outbound`, `never-guess-an-email`.

## Handoff to stage 3

Stage 3 receives the Tier A and B rows with authority level, role, stack tag, signals and a verified channel per row. Tier C waits or is verified 1:1; Tier D leaves the buyer motion and, where a partnership is relevant, is routed to stage 7 (partner-channel-operations).
