# Landmine questions

Purpose: questions a buyer asks every vendor, phrased so a vendor without the artifact has to say so. Each pairs with the artifact behind your one-sentence answer, the persona who asks, when to plant it, and what a weak answer sounds like. Never name a competitor.

## The questions

| Question | Persona who asks | Plant it | Your one-sentence answer requires | Weak answer sounds like |
|---|---|---|---|---|
| "Can you send your DPA today, on your paper, with sub-processors listed?" | DPO, procurement | First legal touch | DPA template plus published sub-processor list | "We usually work with the customer's DPA" or "legal will send it next week" |
| "Which of your sub-processors sit outside the EU, and under which transfer mechanism?" | DPO | Week 2 | Sub-processor list with country and mechanism per row | A list without countries, or "our cloud provider handles that" |
| "How does your engineering team outside the EU access production data, and where is that written down?" | CISO, DPO | Security review | Support-access policy with logging and time-boxing | "Only when needed" with no document |
| "Can you name the EU region and list what still leaves it?" | CISO, DPO, works council | Pilot scoping | Residency statement with the leave-region list | "Everything is in Europe" with no list; telemetry and billing usually leave |
| "Which AI Act tier does your system fall in, and can you show the memo?" | CISO, legal, AI governance lead | First technical meeting | Risk-classification memo with counsel review date | "It's not high-risk" with no reasoning, or "we're monitoring the regulation" |
| "If high-risk, where is your roadmap for documentation, logging and human oversight?" | Legal, AI governance lead | Same meeting, when the use case might be high-risk | Dated roadmap | Silence, or "our customers own the use case" |
| "What is your incident-notification commitment in hours, and where is your disclosure policy published?" | CISO at critical-infrastructure buyers | Before the first technical meeting | Pre-filled NIS2 questionnaire, published policy | "As soon as possible" with no number |
| "Can you attach the declaration of conformity to the quote?" | HSE manager, procurement, insurer | With the quote | Declaration for the exact model | "It's in progress" or a declaration for a different model or configuration |
| "Which safety functions are validated, by whom, and can we see the validation report format before the pilot?" | Safety engineer, integrator | Site design meeting | Functional-safety file per ISO 10218 parts 1 and 2, with ISO/TS 15066 for collaborative operation (check the current revision, as these standards are being consolidated) | A brochure line about "safe by design" |
| "What does your system record about a named individual, and what is your standard works-council briefing?" | HR, works council, plant manager | First plant meeting in consultation-heavy countries | Briefing pack and one-pager | "We can turn that off if needed" with nothing written |
| "Who owns each of these documents on your side, and what version are we looking at?" | Procurement | Contract | Artifact register | Documents without version or owner |

## How to use them

1. In discovery, ask the two questions your pack answers best; buyers repeat good questions to every vendor.
2. In the evaluation, give the champion the three that separate you from the field, with one-sentence answers and artifacts attached. The champion asks; you never say who might fail.
3. In the proposal, answer them before they are asked: one page of "what your legal, security and safety teams will ask, and our answers", with links.
4. Log which questions were asked, by which persona, and the days each answer removed or added. After 10 deals, drop the questions nobody asked.

## Worked cases

### Clean: an AI-agent vendor in an Irish evaluation

Three vendors shortlisted; the DPO joined in week 2. The champion asked every vendor for the DPA on the vendor's paper and the AI Act memo. The vendor with the pack sent both within a day; the DPO accepted the DPA with two redlines from the accepted list and pasted the memo into the AI register. Legal closed in 7 business days against the buyer's stated norm of 4 weeks. Logged: 2 questions, 2 artifacts, about 3 weeks saved.

### Edge: a cobot vendor whose declaration covered the wrong configuration

The HSE manager asked for the declaration with the quote. The vendor attached one for the base arm, but the quoted cell added a third-party gripper and a conveyor interface that changed the safety functions, and the HSE manager spotted the mismatch. Correct handling: say so before being asked, quote the cell as an integrator-assembled machine, name who issues the declaration for the assembled cell, attach the cell risk-assessment template. The deal survived because the answer was honest and the next artifact was in hand. Lesson: the register maps declarations to configurations, not product families. Confirm with counsel who bears responsibility for the conformity of the assembled cell and which route applies; a notified body is involved only for specific higher-risk categories.

### Went wrong: a warehouse-robotics vendor that planted a question it could not answer

A seller planted "what does your fleet record about a named operator?" expecting the competitor to stumble. The works council asked every vendor. The competitor produced a briefing pack; the seller's own dashboard exposed per-operator pick rates with no pack and no retention setting. The deal stalled 6 weeks while a pack was written; the competitor took the pilot. Rule: a question enters the champion sheet only when the vendor's own answer scores full on the checklist. Score first, plant second.

## Questions to ask yourself before planting one

1. Can you answer it in one sentence with an attachment, today?
2. Does the persona who would ask it actually appear in this buying committee?
3. If the buyer asks it of you first, does the answer help or hurt?
