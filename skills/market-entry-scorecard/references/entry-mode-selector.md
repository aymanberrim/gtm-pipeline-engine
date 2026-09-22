# Entry mode selector

Purpose: choose one entry mode per shortlisted country for the first 90 days, from thresholds on ACV, install complexity, addressable account count, and time to first reference. Thresholds are defaults to tune; the ordering is the method.

## The four modes

| Mode | What it means | Who invoices | Who installs | Who owns the relationship |
|---|---|---|---|---|
| Direct sales | Your own sellers, remote first, one local hire when the first reference is signed | You (entity or fiscal representative) | You | You |
| Partner or integrator | A system integrator or engineering firm that already installs adjacent systems at the ICP resells and deploys | Integrator, or you with an integrator services fee | Integrator, trained and certified by you | Shared; you keep the product relationship |
| Distributor | A stocking or non-stocking distributor with the ICP in its book carries the product line | Distributor | Distributor's technicians or your remote team | Distributor |
| Marketplace | Cloud or industrial marketplace listing; buyer procures on existing terms | Marketplace operator | Self-serve or remote | You, through the platform |

## Decision thresholds

Answer in order. The first row that matches selects the mode.

| Order | Condition | Mode | Why |
|---|---|---|---|
| 1 | Hardware ships and install complexity is 5 or more days on site and the vendor has no local technicians | Partner or integrator | Nobody flies technicians across continents for a first reference; the integrator's crew is the install capacity |
| 2 | ACV under 30,000, install under 2 days, addressable accounts over 500 | Marketplace, with a distributor if buyers need a local invoice | The account count justifies volume motion; ACV cannot pay a direct seller |
| 3 | ACV 30,000 to 150,000, install under 5 days, addressable accounts 150 to 500 | Distributor if the country has one with the ICP in its book at 5 or higher on channel availability; otherwise direct sales remote-first | Mid ACV needs a human but not a local office |
| 4 | ACV over 150,000, addressable accounts under 150 | Direct sales, with an integrator for installs when hardware is involved | Few large accounts; the relationship is the product; a partner margin at this ACV buys a seller instead |
| 5 | Time to first reference estimated over 26 weeks under any mode | Partner or integrator with a named joint account | A partner with an existing customer shortens proof more than any other lever |
| 6 | None of the above | Direct sales remote-first | Falls through rows 2 to 5: a Series-A SaaS vendor with mid-band ACV (30,000 to 150,000) but an account count above row 3's 500 ceiling, too pricey for the volume motion in row 2 and with too many accounts for row 3; remote-first direct, with a marketplace as the procurement path |

## Time-to-first-reference estimate

Estimate in weeks; used by row 5 and by the scorecard tie-break.

| Mode | Base | Add per condition |
|---|---|---|
| Direct sales | 20 weeks | +8 if no proof proximity in the country; +6 if hardware; +4 if local-language committees |
| Partner or integrator | 14 weeks | +10 if no partner signed yet; +4 if the partner has never sold a comparable product; -6 if the partner names a joint account at signature |
| Distributor | 24 weeks | +8 if the distributor has never carried software or robotics; -4 if it runs demos for its lines |
| Marketplace | 12 weeks | +12 if the buyers are hardware sites that cannot self-serve; -4 if the listing is live in a neighbouring country |

## Partner economics defaults

- Integrator margin: 20 to 30 percent of software, 10 to 15 percent of hardware, plus their own services. Below 20 percent nobody prioritises you; above 35 percent you fund their sales team.
- Distributor margin: 25 to 40 percent; non-stocking under 30.
- Marketplace fee: 3 to 20 percent; above 15 percent, compare it as a distributor cost.
- Exclusivity: never in the first 90 days. Country exclusivity before a first joint account is an option on your market. Offer named-account exclusivity, 6 months, renewable on a signed deal.

## Switch triggers, per mode

- Direct sales: fewer than 8 first meetings by day 60 from a list of 150 or more accounts switches to partner-led.
- Partner or integrator: no named joint account by day 45 after signature switches to a second partner or to direct.
- Distributor: no distributor-run demo by day 60 switches to direct on the top 30 accounts.
- Marketplace: under 3 trials by day 60 switches to distributor-invoiced direct outreach.

## Three quick fits

- A 40-person warehouse-robotics vendor from Shenzhen, ACV 180,000, 8 install days, 210 addressable sites in the Netherlands: row 1. Partner or integrator; the vendor's seller runs the account, the integrator's crew installs.
- A Series-A AI-agent platform from Austin, ACV 45,000, 1 remote install day, 1,520 addressable accounts in the UK and Ireland (1,400 and 120): row 6; the account count is above row 3's 500 ceiling and the ACV is above row 2's, so direct sales remote-first, with a cloud marketplace that lists adjacent tools as the procurement path.
- A Tokyo vendor of machine-vision inspection cells, ACV 90,000, 3 install days, 220 addressable plants in Germany: row 3; no distributor runs demos for vision, so direct sales remote-first with one integrator certified for installs.

## Questions when the selector gives an ambiguous answer

1. Who installs the first unit, by name? If you cannot answer, the mode is partner or integrator.
2. Who invoices the first customer with VAT handled? If you cannot answer, the mode is distributor or marketplace until the entity question is solved.
3. Which single account becomes the reference, and who introduces you? If the answer is a partner, that partner is the mode.
