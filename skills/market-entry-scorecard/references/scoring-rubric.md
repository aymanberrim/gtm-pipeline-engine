# Scoring rubric

Purpose: hard gates, the seven weighted criteria (sum 100), 0 to 10 anchors, tie-break rules. Weights and anchors are defaults to tune; change them before scoring and write down why.

## Hard gates (four hard gates plus one flag, before scoring)

| Gate | Applies to | Pass condition | Fail handling |
|---|---|---|---|
| Legal ability to place the product on the market | Any hardware, any robot | CE marking obtained, or a dated conformity plan under the Machinery Directive today (the Machinery Regulation (EU) 2023/1230 applies from 20 January 2027; confirm which applies to the ship date with counsel), where conformity is self-declared via internal production control for most robots and a notified body is required only for specific higher-risk categories; for collaborative operation, a functional-safety file referencing ISO 10218 parts 1 and 2 and ISO/TS 15066 (check the current revision, as these standards are being consolidated). | Gated list; re-enters when the plan is signed. Confirm the regime and the conformity route with counsel. |
| AI Act classification | Any AI product | A written risk-tier memo (prohibited practices, high-risk, transparency-obligation often called limited-risk, or minimal). High-risk categories need a compliance roadmap before selling; prohibited uses stop the deal. An AI system that is a safety component of a product under EU harmonised safety law such as machinery is high-risk regardless of the Annex III list. | Gated until the memo exists. Confirm the classification with counsel. |
| Lawful data transfer | Personal data processed outside the EU | A transfer mechanism for the customer-to-vendor transfer (the vendor self-certifying under the EU-US Data Privacy Framework if US and certified, or SCCs Module 2 controller-to-processor between customer and vendor; the UK IDTA or Addendum for UK data) plus a DPA template. | Gated. No outbound to accounts that will process personal data until it exists. |
| Sanctions and export control | Vendors from jurisdictions with restrictions on the category | Counsel's written confirmation that product and ownership are clear for the target country. | Gated. |
| Entity or fiscal representative (flag, not a hard gate) | Vendors invoicing in the EU | A route to invoice with VAT handled: local entity, fiscal representative, or an invoicing distributor. | Not a hard fail; cost-to-serve caps at 4 until solved. |

The first four are hard gates: a fail moves the country to the gated list until the blocker has a signed plan. The fifth, the entity or fiscal-representative route, is a flag, not a hard fail; it caps cost to serve at 4 until solved rather than gating the country.

## The seven criteria

| Criterion | Weight | What it measures, and the source |
|---|---|---|
| Addressable accounts in ICP | 20 | Accounts matching hard firmographics; registry query plus association and incumbent-vendor directories |
| Buying accessibility | 15 | English tolerance, decision speed, procurement norms; 5 interviews with local sellers or partners |
| Regulatory load | 15 | Delta between what the vendor has and what buyers demand; gate findings, buyer RFP templates |
| Competitive density | 10 | Funded direct competitors with local references; funding databases, trade shows |
| Proof proximity | 15 | Reachable references: customers, pilots, partners, advisors, employees; CRM and investor network |
| Channel availability | 15 | Integrators, distributors, marketplaces already selling adjacent products to the ICP; partner directories |
| Cost to serve | 10 | Language, support hours, entity needs, travel; operator estimate plus the entity gate |

## Anchors, 0 to 10

Addressable accounts (20): 0 = under 50; 3 = 50 to 149; 5 = 150 to 399; 7 = 400 to 999; 10 = 1,000 or more. Count by method; a data-vendor filter alone caps at 5.

Buying accessibility (15): 0 = local-language-only committees, tender-driven, 12-month cycles; 3 = local language at exec level, 9-month cycles; 5 = English accepted in technical evaluation, 6-month cycles; 7 = English through to legal, 4-month cycles; 10 = English-first committees, 3-month cycles, pilot budgets under the procurement threshold. Fewer than 3 interviews caps at 5.

Regulatory load (15), inverse of burden: 0 = a gate barely passed and buyers demand more (sector certifications, local hosting, works-council sign-off per deployment); 3 = two artifacts missing; 5 = artifacts exist, untested; 7 = one buyer accepted the pack; 10 = 3 or more buyers accepted it in the country or one with the same norms.

Competitive density (10), inverse: 0 = 5 or more funded direct competitors with local references; 3 = 3 to 4; 5 = 1 to 2; 7 = competitors without a local reference; 10 = none. Clear differentiation in a dense market still caps at 5.

Proof proximity (15): 0 = nothing; 3 = an advisor or investor with introductions; 5 = a partner or pilot in an adjacent country; 7 = a pilot or a customer's sister site in the country; 10 = a paying customer in the country willing to reference.

Channel availability (15): 0 = no integrators sell to the ICP; 3 = integrators locked to a competitor; 5 = 3 to 5 independent integrators or a distributor with the ICP in its book; 7 = a marketplace or distributor lists adjacent products and will onboard; 10 = an integrator has asked to resell.

Cost to serve (10), inverse: 0 = new entity, local-language support in local hours, 2 or more time zones from support, frequent travel; 5 = fiscal representative suffices, English support accepted, one visit per install; 10 = existing entity or partner invoices, remote installs, 4 or more hours of support overlap.

## Scoring mechanics

1. Score each criterion with the closest anchor. No half points.
2. Multiply by weight, divide by 10, sum. Maximum 100.
3. Add a source column per row: registry, interview, estimate. Flip every estimate by 2 points; if the ranking changes, it is undecided until the evidence exists.
4. Publish weights before scoring. Reweighting after seeing the result is how this exercise gets gamed.

## Tie-break rules (top two within 5 points)

1. Higher proof proximity wins.
2. If equal, shorter expected time to first reference wins (estimate in weeks from the entry-mode selector).
3. If equal, smaller regulatory delta from the vendor's home market wins.
4. Market size never breaks a tie.

## Reading the total

- 70 or more: enter now, single country, 90-day plan.
- 55 to 69: enter with a partner-led mode and a cheap proof target; direct sales would burn cash.
- 40 to 54: second wave; do one thing that raises proof proximity or channel availability first.
- Under 40: not a beachhead, whatever its size.
