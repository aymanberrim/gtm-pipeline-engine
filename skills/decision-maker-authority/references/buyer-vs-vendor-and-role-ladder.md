# Buyer vs vendor, and the role ladder

Purpose: a keyword filter on titles returns two opposite populations. The buyer is the internal end-user who suffers the problem. The seller is everyone who deploys, advises on or sells the tool that addresses it. The first sort is the company, the second is the person's role relative to the tool, the third is the tier. Order matters: a role is meaningless before the company is classed.

## Step 1: classify the company

Running example: a 40-person warehouse-robotics vendor from Shenzhen, and a Series-A AI-agent platform from Austin, both entering Europe. Their keyword export is "automation", "intralogistics", "robotics", "AI operations".

| Class | Who | Examples of shape | Decision |
|---|---|---|---|
| Buyer (end-user) | Operates plants, warehouses, service desks, back offices for its own business | A grocery distributor's DC, a tier-2 automotive plant, a 3PL, a hospital logistics unit, a captive IT or engineering unit of a group | Keep |
| Seller (integrator, consultancy, engineering firm) | Deploys or advises on the tool for others | An automation integrator, a lean consultancy, a systems integrator, an outsourced service desk | Exclude from the buyer motion; where a partnership is relevant, route the decision-makers to the stage-7 partner motion |
| Competitor (vendor) | Sells a competing or adjacent product | Another AMR or AGV maker, a fleet-management software vendor, another AI-agent platform, a WMS vendor with a native robotics module | Exclude, log for competitive intel |
| Unknown | Freelance, no company, company field empty or unresolvable | Sole traders, "independent", students | Bottom of the pile, never Tier A |

Classification inputs, in order of trust: registry activity code, domain and homepage first line, company description, headcount. The person's title is never an input at this step.

Traps:

- A captive unit ("Group IT", "Group Engineering", a retailer's logistics services arm) is a buyer even if it invoices sister companies.
- An integrator that runs its own warehouse is still a seller.
- Apostrophes, accents and legal suffixes break matching ("Group X" vs "Group X Business Services"). Normalise before any join.
- 17 companies out of 868 were unidentifiable on the measured export; they were classed "not filled in", not guessed.

## Step 2: place the role relative to the tool

From hottest to coldest, for a robotics or AI product sold into operations:

| Rung | Role relative to the tool | Typical titles (robotics) | Typical titles (AI SaaS) | Buys? |
|---|---|---|---|---|
| 1 | Decision-maker | Plant director, head of intralogistics, VP operations, COO, site managing director | Head of operations, CIO, head of customer service, COO | Owns budget and decision |
| 2 | Tool owner or administrator | Fleet manager, automation lead, WMS administrator, MES owner | Platform owner, service-desk tool administrator, RPA or automation CoE lead | Operates the tool daily; the ideal champion |
| 3 | Process owner | Inbound, picking, replenishment or maintenance manager | Incident, request, onboarding or claims process manager | Owns the workflow the tool changes |
| 4 | Project or programme | Automation project manager, transformation PMO | AI programme lead, digital PMO | To qualify: has a mandate for a project, not a budget |
| 5 | Support and operations | Shift supervisor, line operator, maintenance technician | Service-desk analyst, back-office agent | Feels the pain, does not buy |
| 6 | Consultant or architect | Automation consultant, solution architect (at a seller or on site) | AI consultant, enterprise architect at a consultancy | Delivery side |
| 7 | Sales | Account manager, business developer at any vendor | Same | Vendor side |

Core buyer rungs are 1, 2 and 3. Rung 2 deserves the most attention: the person who runs the incumbent WMS, fleet manager or ticketing tool is the one who will plug the new product in, and the one who blocks it if ignored.

Vague titles ("Solution manager", "Transformation manager", "Manager") get a manual check, never an automatic rung.

## Step 3: tier

| Tier | Definition | Measured count on 868 rows |
|---|---|---|
| A, priority | Rung 1-3 at a buyer, with authority proven (registry mandate) or probable (tenure ratio at or above 60 percent) | 219 core-role rows at buyers (99 decision-makers, 81 tool owners, 39 process owners); each reaches A only once authority is proven or probable |
| B, to qualify | Rung 4 or 5 at a buyer, or a rung 1-3 buyer row still title-only (no mandate, ratio under 60 percent) | 51 at rung 4-5, plus any core-role row awaiting verification |
| C, secondary or prescriber | Rung 6 inside a buyer (on-site contractor), or a prescriber, or company unknown; waits or is verified 1:1 | 204 |
| D, exclude | Any rung at a seller or competitor, freelancers; routed to the stage-7 partner motion where a partnership is relevant | 394 |

Read the ratio: 219 out of 868 is 25 percent at rung 1-3 in a buyer, the Tier A pool before authority is applied. If your export gives more than 40 percent at those rungs on a tool-keyword filter, the seller list is incomplete. If it gives under 10 percent, the keyword was too narrow or the role ladder is being read from titles the market does not use.

Authority decides which core-role rows are A and which wait in B; apply the signals from references/authority-signals-rubric.md. A rung 1-3 buyer row is Tier A only when a registered mandate proves authority or a tenure ratio at or above 60 percent makes it probable; a core-role row that is still title-only sits in Tier B until a signal verifies it. A mandate or a ratio at or above 60 percent on any B row (a project or support role, or a title-only core role) promotes it to A; nothing demotes a proven A row except a company reclassification.

## Traps with worked cases

- "Consultant at a large account": the title says consultant, the company is a buyer. Almost always an on-site contractor from an integrator. Tier C. Promote only if the registry or a second signal (internal email domain, internal mandate) proves an employee.
- "Head of automation" at an integrator: rung 1 at a seller. Because the company is a seller, it leaves the buyer motion and, where a partnership is relevant, goes to the stage-7 partner motion, never the demo sequence.
- "Robotics engineer" at a competing vendor: D, and the row goes to the competitive-intel list.
- "Operations director" at a 3PL that is the outsourced warehouse of your target retailer: buyer, rung 1, Tier A, and the retailer is a second account to open.
- 359 consultants and architects versus 162 decision-makers on the raw export: the majority of a tool-keyword export is delivery-side. Budget the sort time accordingly.

## Failure table

| Symptom | Cause | Fix |
|---|---|---|
| Integrators in the outbound sequence | Role read before company | Reorder: company first |
| Tier A above 40 percent | Seller keyword list too short | Extend with every integrator found in replies |
| Champions ignored | Rung 2 treated as "not a decision-maker" | Rung 2 is Tier A |
| Duplicated accounts | Name variants not normalised | Normalise on domain |
