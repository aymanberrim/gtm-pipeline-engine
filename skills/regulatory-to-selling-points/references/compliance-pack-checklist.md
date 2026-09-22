# Compliance pack readiness checklist

Purpose: score the compliance pack 0 to 100 before outbound, with thresholds for when outbound may start, and two worked scorings. Points are defaults to tune; thresholds and mandatory items are the method. An artifact without a counsel review date scores at most half.

## Scoring

Each item scores 0 (missing), half (drafted, not counsel-reviewed or not tested with a buyer), or full (counsel-reviewed and accepted by one buyer). Items marked hardware or AI apply only to that product type; rescale to 100 by dividing earned points by the applicable maximum.

| Item | Points | Applies to | Full-score condition |
|---|---|---|---|
| DPA template on your paper with a redline policy | 12 | Personal data processed | Counsel reviewed; signed or accepted unchanged by one buyer |
| Sub-processor list with locations and 30-day change notification | 8 | Same | Published, versioned, and one buyer's DPO has accepted it |
| Transfer mechanism pack (customer-to-vendor mechanism, transfer impact summary, support-access policy) | 10 | Data or staff outside the EU | Customer-to-vendor transfer covered (EU-US Data Privacy Framework self-certification if the vendor is US and certified, or SCCs Module 2 controller-to-processor between customer and vendor); onward transfers to sub-processors and cloud providers covered separately; UK data on the UK IDTA or Addendum; support-access policy written |
| EU hosting option with region named and the leave-region list | 10 | AI and any SaaS | Region live, list of data leaving the region on one page |
| AI Act risk-classification memo | 12 | AI | Intended purpose; tier (prohibited practices, high-risk, transparency-obligation often called limited-risk, or minimal); reasoning, noting that AI acting as a safety component of a product under EU harmonised safety law such as machinery is high-risk regardless of the Annex III list; obligations met; counsel review date; if high-risk, a dated roadmap for documentation, logging, oversight and conformity |
| NIS2 questionnaire pre-filled, incident-notification commitment in hours, vulnerability-disclosure policy | 8 | Critical-infrastructure buyers; otherwise 4 for the questionnaire alone | Answers evidence-linked; policy published; commitment in hours |
| Declaration of conformity and technical-file summary | 15 | Hardware | Declaration issued for the exact model shipped; self-declared via internal production control for most robots, with a notified body recorded only for the specific higher-risk categories that require one; confirm the conformity route and whether the Machinery Directive or the Machinery Regulation (EU) 2023/1230 (from 20 January 2027) applies to the ship date with counsel |
| Functional-safety file: risk-assessment template, safety-function description, validation report format (ISO 10218 parts 1 and 2; ISO/TS 15066 for collaborative operation; check the current revision, as these standards are being consolidated) | 10 | Hardware | Template used at one site; report format accepted by one HSE manager or integrator |
| Works-council briefing pack and plain-language one-pager | 7 | Any product that records or evaluates individual workers | Pack accepted by one works council or HR lead without a second session |
| Security overview: architecture, access control, encryption, logging, pen-test summary | 6 | All | Document dated within 12 months, pen-test summary attached |
| Artifact register: owner, version, counsel review date, last buyer acceptance per artifact | 2 | All | Register exists and every artifact above has a row |

Maximum 100 for hardware plus AI processing personal data; 75 for AI SaaS without hardware; lower for a robot without personal data or AI. Always rescale to 100.

## Thresholds

| Rescaled score | Outbound status | What happens |
|---|---|---|
| Under 40 | No outbound to accounts that will raise the missing constraint | Build the artifacts; sourcing continues; sequences paused for personas who own the missing item |
| 40 to 69 | Restricted outbound | Only accounts where the missing artifacts are off the critical path; a dated plan per missing artifact, reviewed weekly |
| 70 or more | Full outbound | The pack is a first-meeting asset; artifacts one click from the meeting invite |
| Hardware gate | Regardless of score | No robot ships to an EU site without the declaration of conformity and the site risk assessment. A hardware vendor cannot exceed 69 without a full-score declaration of conformity |
| AI gate | Regardless of score | A high-risk system without a roadmap caps at 39 |

## Worked scoring 1: a 40-person warehouse-robotics vendor from Shenzhen

Product: AMR fleet, operator logins only, no per-operator metrics exposed, no AI component (confirmed with counsel). Applicable: DPA (12), sub-processors (8), transfer (10), hosting (10), NIS2 questionnaire only (4), declaration of conformity (15), functional-safety file (10), security overview (6), register (2). Maximum 77.

Earned: DPA half (6, not counsel-reviewed), sub-processors full (8), transfer half (5, support-access policy unwritten), hosting full (10), NIS2 half (2), declaration 0 (self-declared via internal production control, but the technical file and testing are dated 14 weeks out; a notified body would apply only if this configuration falls in a category that requires one, so confirm the route with counsel), functional-safety file half (5, template unused at a site), security overview full (6), register full (2). Total 44 of 77, rescaled 57. Hardware gate caps at 69 anyway; no unit ships. Status: restricted outbound. Engage plant and operations managers on integration and site design; no quote to HSE managers; the weekly plan tracks the declaration and the support-access policy.

## Worked scoring 2: a Series-A AI-agent platform from Austin

Product: AI agents for customer-service teams; processes conversations; agents draft, humans send; engineering in the US; the tool surfaces per-agent handling statistics. Applicable: DPA (12), sub-processors (8), transfer (10), hosting (10), AI Act memo (12), NIS2 (4), works council (7), security overview (6), register (2). Maximum 71.

Earned: DPA full (12), sub-processors full (8), transfer full (10), hosting half (5, leave-region list unwritten), AI Act memo half (6, transparency-obligation reasoning often called limited-risk, counsel review undated), NIS2 half (2), works council 0, security overview full (6), register full (2). Total 51 of 71, rescaled 72. Status: full outbound in the UK and Ireland. But works council scores 0 and the list includes consultation-heavy countries: no sequences to HR or operations leads there until the briefing pack exists, and the memo's counsel review is due before the tier appears in any deck.

## Re-scoring cadence

- Re-score on every artifact version change, counsel review, and buyer acceptance or rejection.
- After 10 deals, the item that cost the most cycle days in the objection log gets 2 to 4 more points and the next investment.

## Questions when the score is ambiguous

1. Would you send this artifact to a buyer's counsel today without a call first? If not, it is half, not full.
2. Has one buyer accepted it in writing? If not, it is half.
3. Does the persona who owns this item appear in your first-meeting invite list? If yes and the item is under half, the sequence to that persona is paused.
