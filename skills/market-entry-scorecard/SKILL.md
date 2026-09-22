---
name: market-entry-scorecard
title: Market entry scorecard
stage: 1-target
category: Research
tags: [Leadership]
description: |
  Use this skill when a non-European B2B tech vendor (robotics, AI SaaS, deep-tech) must choose which European country to enter first and how: "which country should we start with in Europe", "Germany or the Netherlands first", "rank our European markets", "do we go direct or through integrators", "should we sign a distributor for Europe", "how many accounts are really in our ICP in France", "we need a beachhead plan for the EU". It scores each candidate country on seven weighted criteria summing to 100, applies hard legal gates before any score counts, breaks ties with explicit rules, and selects an entry mode by ACV, install complexity, account count and time to first reference. Produces a ranked country shortlist, one entry mode per country, and a 90-day beachhead plan.
---

# Market entry scorecard

Applies once the ICP is written and the vendor can name its product's legal status in the EU, before any list is sourced. Produces a ranked shortlist of 2 to 3 countries, an entry mode for each, and a 90-day beachhead plan for the top one.

## Inputs

- The ICP with hard firmographics: industry codes, site count or headcount band, the incumbent systems that make an account a fit.
- Product facts: ACV band, install complexity in days on site, whether hardware ships, whether the product monitors people or makes decisions about them, where data is processed today.
- Existing European footprint: customers, pilots, partners, advisors, employees, even one. Reachable references are the cheapest asset a market has.
- A candidate list of three to six countries. Fewer than three candidates and the scorecard only confirms a prior; more than six and the account counts get sloppy.

## The play

1. Run the hard gates before scoring anything. A country where the vendor cannot legally sell scores zero regardless of market size. Robots need CE marking before the first unit ships (the Machinery Directive today, with the Machinery Regulation (EU) 2023/1230 applying from 20 January 2027; confirm which applies to your ship date with counsel, and note that conformity is self-declared for most robots, with a notified body only for specific higher-risk categories); AI products need a defensible risk classification under the EU AI Act, and an AI system that is a safety component of a product under EU harmonised safety law such as machinery is treated as high-risk regardless of the Annex III list; products handling personal data need a lawful transfer mechanism for the customer-to-vendor transfer. There are four hard gates (legal placement, AI Act classification, lawful transfer, sanctions and export control); the entity or fiscal-representative route is a flag, not a hard fail, and caps cost to serve until it is solved. If a gate fails, the country moves to a "gated" list with the date the gate can be cleared; it re-enters the scorecard when the blocker has a signed plan. Confirm gate specifics with counsel; this skill tells you when to ask, not what the law says.
2. Count addressable accounts from primary sources, not from a data vendor's headline number. Pull the national company registry by industry code and size band, cross with trade-association member lists and the incumbent-vendor directories from the stack-detection skill. Write down the count and the method. A count without a method is a guess.
3. Score each country on the seven criteria in references/scoring-rubric.md: addressable accounts in ICP (20), buying accessibility (15), regulatory load (15), competitive density (10), proof proximity (15), channel availability (15), cost to serve (10). Score 0 to 10 per criterion with the anchors in the rubric, multiply by weight, sum to 100.
4. Apply the tie-break rules when two countries land within 5 points: proof proximity wins first, then time to first reference, then the smaller regulatory delta from the vendor's home market. A tie broken by market size is a mistake; the first market is chosen to produce a reference, not revenue.
5. Select the entry mode per shortlisted country with references/entry-mode-selector.md. Direct sales, partner or integrator, distributor, marketplace: the selector keys on ACV, install complexity, account count and time to first reference. One mode per country for the first 90 days; hybrid modes come after the first reference exists.
6. Write the 90-day beachhead plan for the top country: the 30-day sourcing target (accounts in the CRM with a detected stack), the 60-day engagement target (first-meeting count), the 90-day proof target (one signed pilot or one integrator agreement with a named first joint account). Attach the two go or no-go questions that trigger a switch to the second country.
7. Sanity-check against references/worked-example-robotics-vs-ai-saas.md. The same seven criteria produce opposite answers for a robot vendor and an AI SaaS vendor; if your answer looks like the wrong one, the scoring is off.

## What good looks like

- Operators who get this right weight proof proximity as heavily as market size, because the first European reference is worth more than the largest TAM. A 40-person warehouse-robotics vendor from Shenzhen with one pilot customer's sister site in the Netherlands enters the Netherlands, not Germany, and uses the German market as the second beachhead once a reference exists to point to.
- The weaker approach ranks by GDP or by the number of companies on a data vendor's filter. It picks Germany for a robot vendor with no CE marking, discovers the conformity work takes months, and burns the first two quarters. Or it picks the UK for an AI SaaS vendor because of the language, then learns half the pipeline demands EU data residency and the entity sits outside the EU.
- Aim for: the top country has at least 150 addressable accounts counted by method, a score gap of 8 or more points over the runner-up or a tie-break recorded in writing, all hard gates passed with evidence, and a beachhead plan whose 90-day proof target is a named account type, not "traction". Entry-mode fit is explicit: an ACV under 30,000 with under 2 install days and over 500 accounts goes to a partner or marketplace, never a direct team.
- Every number in the scorecard has a source column. When the source is the operator's estimate, the row says so and the sensitivity is checked: if flipping that estimate by 2 points changes the ranking, the ranking is not decided yet.

## Handoff

- Stage 1 continues: the stack-detection skill runs on the chosen country's account list to build tool-tagged segments. Stage 2 (sourcing) receives the account count target, the registry query used to count, and the entry mode, which decides whether the first list is end accounts or integrators.
- The regulatory-to-selling-points skill takes the gate findings and turns the compliance artifacts into arguments.
- This skill does not size revenue, set pricing per country, or negotiate partner terms; it does not replace counsel on any regulatory gate.

## Rules

- MUST run hard gates before scoring and record the evidence for each pass.
- MUST count addressable accounts from a registry or directory with the query written down; a data vendor's filter count is a cross-check, not the count.
- MUST keep weights summing to 100 and publish any reweighting with the reason, before scoring, never after seeing the result.
- MUST record the tie-break rule used whenever the top two are within 5 points.
- NEVER choose the first country on market size when a smaller country holds a reachable reference.
- NEVER enter two countries in the first 90 days; the second country starts when the first reference is signed or the switch trigger fires.
- NEVER treat this scorecard as legal advice; every regulatory line is a prompt to confirm with counsel.
