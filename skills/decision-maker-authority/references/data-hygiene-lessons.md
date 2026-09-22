# Data hygiene lessons

Purpose: four rules learned the expensive way on a real scoring pipeline, each with the incident that produced it, and a worked example of the 51 recovered decision-makers. Apply them before the first row is scored, not after the first re-score wipes something.

## Lesson 1: the legal-name trap

A company's name on the professional network is a trade name. The registry indexes legal names. On the measured run, a registry search on the trade name returned zero results, and an attempt to resolve legal identifiers by fuzzy name matching was abandoned at 3 successes out of 40 attempts, one of which was a false positive (a homonym in another region). Three out of forty is 7.5 percent recall with a 33 percent error rate on the hits; it is worse than doing nothing.

Resolution order that works:

1. Domain to legal entity: the website's legal notice or imprint page (mandatory in most European countries) states the legal name and registration number. One fetch, deterministic.
2. Directory to legal entity: a sector directory or the professional-network company page that lists the website, then step 1.
3. Registry search by registration number, never by name.

Store the registration number on the account. Every later join (founding date, mandates, headcount band, activity code) uses it.

Transposed: a warehouse-robotics vendor entering Germany looks up a distributor called "Fresh Logistics" and finds nothing; the legal entity is a GmbH with a founder's surname in the name. The imprint page gives the registration court and number in one line.

## Lesson 2: check the enrichment API's real cost against the API

A wrapper around the enrichment provider reported "credits: 0" for a people search. The provider's own billing charged 0.25 credit per search, 1 credit per email, 10 credits per mobile number, no discount for phone-only lookups, and no charge for failed lookups. The discrepancy surfaced only because a balance circuit-breaker was in place and tripped on the third call.

Rules:

- Before the first batch, call the provider's balance endpoint, run 3 lookups, call it again. The delta is the real price.
- Put a balance check before every batch and a hard stop at a daily spend ceiling.
- Budget on the provider's ratio: at 1 credit per email and 10 per mobile, the mobile is the whole budget. This is why the funnel skills buy the mobile just in time, never in bulk.

## Lesson 3: human overrides live in their own table

18 manual exclusions ("do not contact", "left the company", "is a partner") had been written into the tier field. The tier field is recomputed on every scoring run. Every re-score wiped the 18 exclusions, and the people came back into the sequence.

Design:

| Table | Written by | Read by | Recomputed? |
|---|---|---|---|
| people | import | scoring | yes, fully |
| scores | scoring | routing | yes, fully |
| overrides | humans only | scoring, at the very end | never |

Override row: person id, decision (exclude, promote to A, demote to D, hold), reason in free text, author, date. The scoring pass joins overrides after computing the tier and applies them last. A scoring run that touches the overrides table fails the build.

## Lesson 4: idempotence is the regression test

A scoring pipeline run twice on the same input must produce the same output: second pass equals zero changes on every row. This is the test that catches silent regressions, such as a ratio computed on a moving "today" that drifts one row per month, a random tie-break, or a re-import that duplicates people whose name has a different accent.

Protocol: run, snapshot, run again, diff. Any non-empty diff blocks the handoff. Log the count of rows changed per run; a healthy pipeline logs 0 on every second pass and only non-zero when inputs changed.

## Worked example: the 51 recovered decision-makers

Starting point: about 1,400 people from a professional-network export, tiered A to D from titles and headcount. Headcount was unknown for 73 percent of rows. The scorer downgraded when headcount was unknown, so 94 percent of B and C rows carried the cap "non-decision-maker", including 88 people with the profession's highest qualification.

Registry pass:

1. Entities resolved by domain, registration number stored.
2. Founding dates retrieved for 1,421 rows from the free registry. The tenure ratio became computable on every row that had a start date.
3. Mandates read for every resolved entity and matched to people by surname plus first name, then verified by hand on ambiguous matches.

Result: 163 people held a registered mandate. 51 of them were in B or C, every one of them the managing director or president of their own company, with titles such as "project lead" or "senior consultant". Enrichable stock (rows that justified spending credits) went from 6 to 53.

What it means for a robotics vendor entering Europe: the 12-person automation-heavy warehouse whose "operations lead" is the registered managing director is a one-call deal, and a title-based scorer files it under "influencer, small, skip".

## Failure table

| Failure | Detected by | Cost if missed |
|---|---|---|
| Name-based registry lookup | 0 results on the first 10 companies | Whole registry pass silently empty |
| Wrapper says free, API charges | Balance delta after 3 calls | Budget burned in one batch |
| Overrides in a recomputed field | Excluded person reappears in the sequence | Complaint, or a partner contacted as a prospect |
| Non-idempotent scoring | Non-zero diff on second pass | Tiers drift, nobody notices for weeks |
| Downgrade on missing headcount | B and C capped above 80 percent | Decision-makers left on the table (51 here) |
