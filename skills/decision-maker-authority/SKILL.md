---
name: decision-maker-authority
title: Decision-maker authority
stage: 2-source
category: Prospecting
tags: [Sales]
description: |
  Use this skill when a professional-network export must be turned into a list of people who can actually say yes: "who really decides at this plant", "is this VP a decision-maker or just a title", "our scoring caps everyone as non-decision-maker", "find the owner behind the trade name", "separate buyers from integrators and competing vendors in this export", "tier this list A/B/C/D", "prove authority from the company registry". It replaces the title with three factual signals (registered mandate, tenure ratio against company age, real headcount), classifies the company as buyer or seller before reading the role, and produces a tiered, idempotent, override-safe list ready for enrichment and segmentation.
---

# Decision-maker authority

Applies when a raw export of people (from the professional network, a directory, or an event list) has to become a list of decision-makers before enrichment money is spent. Produces, per person, an authority level (certain, probable, influencer, none), a company class (buyer, seller, competitor, unknown), a role rung, and a tier A to D, with the evidence string for each.

## Inputs

- The export with, per row: name, title, company display name, website or domain, the person's start date at the company, and where available the company's founding date and exact headcount. Without tenure and founding date the ratio is uncomputable; ask for a richer export, do not guess.
- Access to the national company registry of each target country (officers, directors, founding date, headcount band). Free in most European countries, no key needed in several.
- A dedicated override table (person id, decision, reason, author, date) that the pipeline reads but never writes.
- The buyer, seller and competitor keyword lists for the product. Start from references/buyer-vs-vendor-and-role-ladder.md and extend them with every misclassification found.

## The play

1. Classify the company before reading anyone's title. A title keyword filter such as "automation" or "robotics" mixes the internal end-user (a plant manager, a head of intralogistics) with the people who sell to that end-user (automation integrators, engineering consultancies, competing robot or AI vendors). On a real 868-profile export filtered on one tool keyword, only 219 people survived as Tier A; the majority were consultants, integrators and vendors. Use the domain, the registry activity code and the company description, never the person's title, to set buyer, seller, competitor or unknown.
2. Resolve the legal entity through the domain or a directory, never through the display name. The name on a social profile is a trade name, not a legal name: the registry returned zero results on a trade name, and resolving legal identifiers by name was abandoned at 3 successes out of 40 attempts, one of them a false positive. Domain first, directory second, name never.
3. Read the registry for a mandate. If the person is an officer, director, managing director or board member of the resolved entity, authority is certain. Nobody puts their mandate on a social profile: the measured case was a "project lead" who was the registered president of the company. This is the only level that requires no inference.
4. Compute the tenure ratio: person's tenure at the company divided by the company's age, both in months. Ratio at or above 60 percent is a probable decision-maker (de facto ownership, present since the start or close to it). Ratio between 35 and 60 percent is an influencer or prescriber. Below 35 percent, the title alone decides nothing. Authority is measured in proportion, never in absolute years: 15 years in a 60-year-old firm is 25 percent and proves nothing, 3 years in a 3-year-old firm is 100 percent and is the founder. Open references/authority-signals-rubric.md for the math, the thresholds and the edge cases (mergers, subsidiaries, second founders).
5. Place the person on the role ladder relative to the tool you sell: decision-maker (budget owner), tool owner or administrator (the ideal champion, operates it daily), process owner, project or programme lead, support and operations (feels the pain, cannot buy), consultant or architect (delivery side), sales (vendor side). Then tier: A is a core role (rung 1 to 3) at a buyer with authority proven (a registry mandate) or probable (a tenure ratio at or above 60 percent); a core role at a buyer that is still title-only sits in B until a signal verifies it. B is a project or support role at a buyer, or a title-only core role awaiting verification. C is a consultant inside a buyer, a prescriber, or an unidentified company, and it waits or is verified 1:1. D is a seller, a competitor or a freelancer. The trap "Consultant at a large account" is C, not A: usually an on-site contractor.
6. Never downgrade for missing data. The original scoring was blind, not wrong: headcount was unknown in 73 percent of cases, so it downgraded by caution and capped 94 percent of B and C tiers as non-decision-makers. The registry then proved 163 decision-makers, 51 of them buried in B and C, and the enrichable stock went from 6 to 53. Unknown headcount means "verify", never "assume small and cap".
7. Apply the override table last. A human exclusion or promotion lives in its own table keyed on the person, joined after scoring. In the measured run, 18 manual exclusions stored in a recomputed field were wiped by every re-score. Open references/data-hygiene-lessons.md before wiring any storage.
8. Run the pipeline twice. The second pass must produce zero changes on any row; a non-zero diff is a regression and blocks the handoff.

## What good looks like

- Judge the work by whether every A carries its evidence string. "Registered managing director, registry id", "tenure 84 months over company age 96 months, ratio 87 percent", "title only, buyer company, ratio 12 percent": those strings are what separate a proven tier from a guess, and a tier that has none is deleted rather than shipped.
- The failure to watch for is scoring the title. It is what calls a "VP Operations" at a 4,000-person group a decision-maker and a "project lead" at a 12-person firm a nobody, when the registry says that project lead is the president; it is also what drops the integrator's automation engineer into the same bucket as the plant's because both titles match the keyword.
- Numbers from the measured run set the bar: registry mandates found for 163 people on a list of roughly 1,400, 51 of them previously tiered B or C, and enrichable stock multiplied about nine times (6 to 53), with founding dates retrieved for 1,421 rows from a free registry. Read your own list against this: if fewer than 5 percent of B and C rows move up after the registry pass, either entity resolution is failing (check step 2) or the list was already clean.
- Composition rule: layer, do not replace. The professional-network export gives authority (who decides, structural, stable). Engagement signals (commenters, resource requesters, repliers) give intent (who hurts now, fresh, recurring). A raw network list is cold; every "interested" card comes from the engagement layer. Authority says whom to write to, intent says when.

## Handoff

- Stage 2 enrichment receives only Tier A and B at a buyer, with the authority level, so the cheap email lookup and verification go to certain and probable decision-makers first; no mobile number is bought here. The mobile is bought just in time only when a lead is in ICP and has produced a real signal, as resource-magnet-funnel and demo-booking-call do at the call stage. Stage 3 (segment-then-write) receives the role rung and the tier, the first two segmentation axes. Tier C (prescribers and unidentified companies) waits or is verified 1:1, never in the outbound sequence. Stage 7 (`partner-channel-operations`) receives Tier D (consultancies, integrators, competing vendors) as a separate partner motion where a partnership is relevant, never in the outbound sequence.
- This skill does not enrich contact data, score intent, or write messages. Company-level ICP fit (size, sector, geography) is set by the ICP decision rule from stage 1 (icp-matrix-builder, refreshed monthly); market-entry-scorecard consumes a draft ICP and returns the country.

## Rules

- MUST classify the company (buyer, seller, competitor, unknown) before reading any title.
- MUST resolve the legal entity through the domain or a directory; NEVER search a registry by the social-profile display name.
- MUST express tenure as a ratio of company age; NEVER use absolute years as an authority signal.
- MUST store human overrides in a dedicated table the pipeline only reads; NEVER in a field the pipeline recomputes.
- MUST run a second scoring pass and ship only when the diff is zero.
- MUST check an enrichment API's real cost against the API's own account balance, never against a wrapper's claim.
- NEVER downgrade a person because headcount or founding date is missing; mark "to verify" and look it up.
- NEVER put a consultant, integrator or competing vendor in Tier A, whatever their title says.
