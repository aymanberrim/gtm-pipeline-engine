# Market entry: non-EU vendor → Europe

The module that sits in front of the pipeline when the product is entering Europe for the first time. It answers three questions in order, each with a skill, and hands its output to stage 1 of the pipeline.

| Question | Skill | Output |
|---|---|---|
| Which country first, and how? | [market-entry-scorecard](../skills/market-entry-scorecard/) | Ranked shortlist (seven weighted criteria, five hard gates), entry mode (direct / integrator / distributor / marketplace) with switch triggers, 90-day beachhead plan |
| What must be true before we can sell there? | [regulatory-to-selling-points](../skills/regulatory-to-selling-points/) | Compliance pack readiness 0-100 (outbound gates at 40 and 70), the artifacts to pre-bake, one selling line and one landmine question per constraint |
| Who already runs what, so we know who we replace or plug into? | [stack-detection](../skills/stack-detection/) | Incumbent tool per account with a confidence, tool-tagged segments |

## Why these three come first

A non-European vendor's first European channel usually fails on one of three things before the first email: the wrong country (large but slow, or accessible but already owned), a compliance question in the first call that the vendor cannot answer with a document, or a message written to a company whose incumbent tool makes the pitch irrelevant. The three skills remove each failure with a number: a country score, a readiness score and a detection rate.

## What the module does not do

It does not localise the product, open the entity, or pick the law firm. It tells the operator when those become blocking (a hard gate in the scorecard, a readiness score under 40) and hands the rest to the pipeline.

## Running example

A warehouse-robotics maker from Shenzhen and an AI-agent platform from Austin are the two vendors used in every worked example. The scorecard's worked example ranks the Netherlands above Germany for the robotics vendor on proof proximity and integrator availability, and Ireland above the Nordics for the AI platform on a tie-break; the reasoning is in `skills/market-entry-scorecard/references/worked-example-robotics-vs-ai-saas.md`.
