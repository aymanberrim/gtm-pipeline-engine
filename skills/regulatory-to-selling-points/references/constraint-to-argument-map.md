# Constraint-to-argument map

Purpose: per constraint, the persona who raises it, the artifact to pre-bake, the selling line, the landmine question. Regulatory facts sit at operator level; confirm specifics with counsel before anything reaches a buyer.

## The map

| Constraint | Who raises it, when | Artifact to pre-bake | Selling line (consequence, with a number) | Landmine question |
|---|---|---|---|---|
| GDPR: data processing agreement | DPO or legal, week 2 to 4; procurement at contract | DPA on your paper, counsel-reviewed, with a redline policy of the 5 clauses you accept changes on | "Legal review took under 10 business days on 8 of our last 10 deals; the DPA is on our paper and ready today." | "Can you send your DPA today, on your paper, with sub-processors listed?" |
| GDPR: sub-processors | DPO, same window; CISO if offshore support is listed | List with entity, country, purpose, transfer mechanism, 30-day change notification | "Every sub-processor, its country, and 30 days' notice before any change: your DPO's day-one question, answered." | "Which sub-processors sit outside the EU, under which transfer mechanism?" |
| GDPR: transfer from the EU customer to the non-EU vendor | DPO, legal; CISO for support access | Transfer pack: the customer-to-vendor mechanism (the vendor self-certifying under the EU-US Data Privacy Framework if it is US and certified, or SCCs Module 2 controller-to-processor between customer and vendor; SCCs with the cloud provider cover only the onward transfer, not this one), the UK IDTA or UK Addendum for UK data, transfer impact summary, support-access policy | "The customer-to-vendor transfer is covered on our paper by the Data Privacy Framework or Module 2 clauses; support access from outside the EU is logged and time-boxed, and your transfer impact assessment starts half written." | "Under which mechanism do you receive our data, and how does your team outside the EU access it?" |
| EU hosting and data residency | CISO, DPO, sometimes the works council | EU-region option with the region named, residency statement, one-page list of what still leaves (telemetry, billing) | "Your data stays in a named EU region; what leaves is on one page, and you can veto each line." | "Can you name the EU region and list what still leaves it?" |
| EU AI Act risk tier | CISO, legal, DPO; any buyer with an AI governance policy | Risk-classification memo: intended purpose; tier (prohibited practices, high-risk, transparency-obligation systems often called limited-risk, or minimal); reasoning, noting that an AI system that is a safety component of a product under EU harmonised safety law such as machinery is high-risk regardless of the Annex III list; obligations met (transparency, logging, oversight, documentation for high-risk); counsel review date | "A 2-page memo you paste into your AI register; buyers have closed AI governance review in one session with it." | "Which AI Act tier are you in, and can you show the memo that explains why?" |
| NIS2 supplier-security clauses (Directive (EU) 2022/2555) | CISO and procurement at essential or important entities; the NIS2 annexes span many sectors including manufacturing, so the buyer may itself be in scope, and transposition varies by member state | Pre-filled supplier-security questionnaire, incident-notification commitment in hours, vulnerability-disclosure policy, patch cadence | "Answers pre-filled to the questions NIS2 pushes down the chain; your security review starts 80 percent complete." | "What is your incident-notification commitment in hours, and where is your disclosure policy published?" |
| Cyber Resilience Act (products with digital elements) | CISO, product-security lead, procurement; binds a robotics or AI product vendor more directly than NIS2 | CRA readiness note: security-by-design summary, vulnerability-handling and update policy, timeline against the phased obligations; confirm specifics and timing with counsel | "We can show we are ahead of the Cyber Resilience Act: security by design, a vulnerability-handling process and an update commitment already documented." | "How are you preparing for the Cyber Resilience Act, and can you show your vulnerability-handling and update policy?" |
| CE marking (Machinery Directive now; Machinery Regulation (EU) 2023/1230 from 20 January 2027) | HSE manager, plant manager, procurement, insurer; often the first question on a robot deal | Declaration of conformity (self-declared via internal production control for most robots; a notified body only for specific higher-risk categories, so confirm the conformity route and which regime applies to the ship date with counsel), technical-file summary, manual in the buyer's language | "The declaration ships with the quote, not the robot; HSE sign-off is one document away." | "Can you attach the declaration of conformity to the quote?" |
| Functional safety (ISO 10218 parts 1 and 2; ISO/TS 15066 for collaborative operation; check the current revision, as these standards are being consolidated) | HSE manager, safety engineer, integrator | Cell risk-assessment template, safety-function description, validation report format, integrator training record | "Our template plugs into your plant's own assessment; the last 3 sites signed off in one safety review." | "Which safety functions are validated, by whom, and can we see the validation report format before the pilot?" |
| Works-council rights for tools that can monitor or evaluate workers (co-determination and a works agreement in Germany, a consent right in the Netherlands, CSE consultation in France) | HR, works council or CSE, plant manager; surfaces late unless you bring it early, and the right differs by country | Briefing materials: what is recorded about individuals and what is not, retention, visibility, opt-outs; a plain-language one-pager that helps the buyer's HR and works-council process move faster | "The materials come to the first plant meeting; on our first accounts the buyer's works-council process moved through without a second round." | "What does your system record about a named individual, and what is your standard works-council briefing?" |

## Persona view

| Persona | Owns | Appears | Objection ends with |
|---|---|---|---|
| DPO or privacy counsel | DPA, sub-processors, transfer, residency | Week 2 to 4 | Signed DPA on your paper, list, transfer pack |
| CISO | Residency, NIS2, support access, AI Act | Week 3 to 6 | Pre-filled questionnaire, incident commitment, region named |
| HSE manager or safety engineer | CE marking, functional safety, cell risk assessment | Week 1 to 2 on robot deals | Declaration, risk-assessment template, validation report |
| HR and works council | Worker monitoring, retention, visibility | Week 4 to 8, or never if raised in week 1 | Briefing pack, one-pager, opt-outs |
| Procurement | Everything, as a checklist | At contract | Complete pack, versioned and dated |

## How to build the selling line

1. Name the artifact and the persona's task it shortens.
2. Put a number on it from your own deals: days, sessions, sign-offs. With no deals yet, use the checklist target and label it as a target, never a result.
3. Never say "compliant", "certified" or "fully covered" without the proving document in the same sentence.

## Sequencing in a deal

- Robot deal: safety persona first (declaration with the quote), then privacy if cameras or operator data are involved, then works council if the fleet reports individual metrics.
- AI SaaS deal: DPO and residency first (they gate the pilot), AI Act memo in the same pack, CISO questionnaire in parallel, works council before the pilot if employee-level data is visible.
- Critical-infrastructure buyer: NIS2 questionnaire and incident commitment before the first technical meeting; the CISO decides whether the deal exists.

## Failure table

| Where it goes wrong | Guard |
|---|---|
| DPA negotiated on the buyer's paper | Your DPA with its redline policy sent in week 1 |
| Sub-processor list assembled during the deal | List versioned and published |
| AI Act tier claimed without a memo | Counsel-reviewed memo before the tier appears in any deck |
| Robot quoted without the declaration | Empty declaration field blocks the quote template |
| Works council discovered in week 8 | Briefing pack offered at the first plant meeting |
| Selling line without a number | Rejected at messaging review until a number or labelled target exists |
