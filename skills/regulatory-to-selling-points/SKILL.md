---
name: regulatory-to-selling-points
title: Regulatory to selling points
stage: 1-target
category: Positioning
tags: [Sales]
description: |
  Use this skill when European compliance keeps surfacing as an objection or a blocker and you want it working for you instead: "procurement asked for our DPA and sub-processor list", "the buyer wants to know our AI Act risk tier", "they asked if the robot is CE marked", "the works council has to approve the tool", "we need EU hosting before they sign", "NIS2 came up on a call", "turn GDPR into a selling point", "what compliance pack do we need before outbound starts". It maps each constraint to the persona who raises it, the artifact to pre-bake, the selling line that makes it a reason to choose you, and the landmine question that exposes a competitor who cannot show it. Produces a compliance-pack readiness score 0 to 100 with thresholds for when outbound may start, and a per-persona argument sheet.
---

# Regulatory to selling points

Applies when a non-EU vendor of robotics or AI software has chosen its first European market and is about to source and engage accounts. Produces a constraint-to-argument map per persona, a compliance-pack readiness score with a go or no-go for outbound, and landmine questions for competitive deals.

## Inputs

- Product facts: what it processes (personal data, images of people, operational data only), whether it decides or recommends anything about people, whether hardware ships and moves near people, where it is hosted and where support staff sit.
- The market-entry gate findings: CE status, AI Act risk memo, transfer mechanism, entity or fiscal route.
- The ICP's sector: the essential and important sectors in the NIS2 annexes, a broad set that includes manufacturing, can put the buyer itself in scope and trigger NIS2 conversations with its security team (transposition varies by member state, so confirm scope per country with counsel); manufacturing also triggers machinery safety; any product that observes workers triggers works-council co-determination, consent or consultation depending on the country.
- A counsel contact. This skill works at the level a GTM operator uses regulation; it does not replace legal review, and every artifact below ships only after counsel has seen it once.

## The play

1. List the constraints that apply. For a robot: CE marking (the Machinery Directive today, with the Machinery Regulation (EU) 2023/1230 applying from 20 January 2027; confirm which applies to your ship date with counsel), where conformity is self-declared for most robots via internal production control and a notified body is required only for specific higher-risk categories, so confirm the conformity route; functional safety per ISO 10218 parts 1 and 2 for industrial robots and, for collaborative operation, ISO/TS 15066 (check the current revision, as these standards are being consolidated); plus GDPR if operator or camera data is personal. For AI SaaS: GDPR, where the controlling transfer is the EU customer to the non-EU vendor and the mechanism is the vendor self-certifying under the EU-US Data Privacy Framework (if it is US-based and certified) or Standard Contractual Clauses (Module 2, controller-to-processor) between customer and vendor, with a DPA and a sub-processor list, and UK transfers using the UK IDTA or the UK Addendum to the SCCs; the EU AI Act; EU hosting or data residency; and works-council involvement when the tool monitors or evaluates employees. For both, NIS2 (Directive (EU) 2022/2555), whose annexes cover a broad set of essential and important sectors including manufacturing, so the buyer may itself be in scope and will push supplier-security clauses down the chain; and the Cyber Resilience Act for products with digital elements, the regime that more directly binds a robotics or AI product vendor, with obligations phasing in. Confirm the applicable set, and any load-bearing date, article or tier, with counsel before writing anything customer-facing.
2. Map each constraint to four things using references/constraint-to-argument-map.md: the persona who raises it (DPO, CISO, HSE manager, works council or HR, procurement, plant manager), the artifact to pre-bake, the selling line, and the landmine question. A constraint without all four is not ready to sell with.
3. Pre-bake the artifacts. The list: DPA template on your paper, sub-processor list with locations and change-notification process, transfer-mechanism pack, EU hosting option with region named, AI Act risk-classification memo with the reasoning, declaration of conformity and technical-file summary for hardware, risk-assessment template per ISO 10218 and ISO/TS 15066 for cobot cells, NIS2 supplier-security questionnaire pre-filled, works-council briefing pack explaining what the tool does and does not record about individuals. Each artifact gets an owner, a version, and a counsel review date.
4. Score readiness with references/compliance-pack-checklist.md, 0 to 100. Under 40, no outbound to accounts that will raise the constraint; 40 to 69, outbound to accounts where the missing artifact is not on the critical path, with a dated plan for the rest; 70 or more, full outbound and the compliance pack becomes a first-meeting asset. Robotics vendors cannot pass 70 without the declaration of conformity.
5. Write the selling lines into the messaging for each persona and put the artifacts one click from the first meeting invite. The line is never "we are compliant"; it is a specific consequence for the buyer: a shorter procurement cycle, a signed DPA in the first week, materials that move the buyer's HR and works-council process along faster, a safety file the HSE manager can attach to the plant's own assessment.
6. Arm the deal with landmine questions from references/landmine-questions.md. Each question is one the buyer asks every vendor, phrased so that a competitor who lacks the artifact has to say so. Use them in discovery and hand them to the champion for the internal evaluation; never accuse the competitor by name.
7. Log every regulatory objection raised in deals with the persona, the artifact that answered it, and the days it added to the cycle. After 10 deals, re-rank the map: the constraint that costs the most days gets the next artifact investment.

## What good looks like

- Operators who win on this treat the compliance pack as a sales asset with a readiness score, owned by the GTM lead, not as a legal task that will be "done when legal is done". They know which persona raises which constraint in which week of the cycle, and they hand the artifact over before it is requested.
- The weaker pattern is a security page on the website and a promise that "we take privacy seriously". The DPA arrives on the competitor's paper, the sub-processor list is assembled during the deal, the AI Act question gets a shrug, and the works council hears about the tool from the procurement request. Each of these adds 3 to 8 weeks; a deal with three of them is dead.
- Aim for: readiness 70 or more before outbound starts; a DPA signed within 10 business days of the first legal touch on at least 8 of 10 deals; zero deals lost on a constraint that was known before the first meeting; the works-council process moving through on the first 3 accounts in a co-determination or consent country without a second round; every selling line tied to a number a buyer cares about (days, sessions, sign-offs).
- Facts stated at the level an operator uses them. The skill says the AI Act sorts systems into prohibited practices, high-risk, transparency-obligation (often called limited-risk) and minimal; that high-risk systems carry documentation, oversight and logging duties; that an AI safety component of a product under EU harmonised safety law such as machinery is high-risk whatever Annex III says; and that workplace-monitoring AI can be high-risk and emotion recognition at work is restricted. It does not quote article numbers it cannot verify, and every constraint line and load-bearing tier carries the instruction to confirm the classification with counsel.

## Handoff

- Stage 3 (segmentation) receives the persona map so that sequences route the DPO argument to the DPO and the safety argument to the HSE manager. Stage 4 (engagement) receives the selling lines and the artifact links. Stage 5 (conversion) receives the landmine questions and the objection log format.
- The market-entry-scorecard skill supplies the gate findings this skill consumes; the stack-detection skill shows which incumbent hosts data where, which sharpens the residency argument.
- This skill does not perform the conformity assessment, write the DPA, or classify the AI system. It decides what to have ready, who asks for it, and how to sell with it.

## Rules

- MUST have counsel review every customer-facing artifact once before it ships; the skill decides the order and the urgency, not the content of the law.
- MUST score readiness before the first outbound message and re-score every time an artifact changes.
- MUST tie every selling line to a buyer consequence with a number: days saved, sessions avoided, sign-offs removed.
- MUST log every regulatory objection with persona, artifact, and days added.
- NEVER claim a certification, a marking, or a risk tier the vendor cannot show on paper the same day.
- NEVER let a robot ship into an EU site without the declaration of conformity and the site risk assessment, whatever the deal pressure.
- NEVER name a competitor in a landmine question; the question does the work.
- NEVER invent a legal citation; state the obligation at operator level and point to counsel.
