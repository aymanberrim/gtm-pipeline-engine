# Scoring and routing

Purpose: the three-dimension score out of 100 that orders the call effort, the routing thresholds, and three worked scores. The weights are the measured defaults; retune them only with at least 100 scored leads and 20 booked demos, and retune one dimension at a time.

## The rubric

| Dimension | Criterion | Points | Notes |
|---|---|---|---|
| ICP (0 to 40) | Sector in target | 15 | From the market-entry scorecard's sector list |
| | Company size in target | 10 | Registry band or exact headcount; unknown is 0 and "to verify", not a cap |
| | Decision-maker | 10 | Level 1 or 2 from decision-maker-authority, or rung 1 |
| | Influencer (instead of decision-maker) | 5 | Level 3, or rung 2 or 3 |
| | Geography in target | 5 | Country in the entry plan |
| Intent (0 to 40) | Relevant post by the person or company under 30 days | 15 | On the problem the product solves, not on any topic |
| | Hiring for the problem | 10 | A job post for the role the product replaces or supports |
| | Funding under 6 months | 8 | Announced round or public grant |
| | Job change under 3 months | 5 | New role, new mandate, new budget |
| | Competitor mention | 10 | Names a competing or incumbent tool in a post, comment or job ad |
| Engagement (0 to 20) | Product or resource test | 20 | Used the calculator, ran the audit, started a trial |
| | Click on a sequence link | 7 | |
| | Resource page visit | 5 | |
| | Open | 3 | Weak; counts for the score, never for a call |

Positive reply: not a fixed number of points. It is a state change: the person moves to "replied, to qualify" immediately, whatever the score.

Caps: each dimension is capped at its maximum; intent signals stack (a post plus a hire plus a competitor mention is 35), engagement takes the highest single signal plus opens (a test at 20 already caps the dimension).

## Routing

| Score | State | Treatment | Phone number bought? |
|---|---|---|---|
| 0 to 39, cold | Light nurture | One value touch per month, dated; no call | No |
| 40 to 69, warm | Sequence | Emails day 0, 3, 7; social touch for top scores; call only on signal | Only on signal |
| 70 to 100, hot | Call first | Alert, call within 2 hours on a test, within 24 hours otherwise | Yes, just in time |

A cold lead is nurtured, never deleted. A lead moves up on any new signal; it moves down only through a periodic review, never as a side effect of a routine re-score.

## Worked score 1: clean, a hot lead

A head of intralogistics at a 900-person grocery distributor in the Netherlands, commented "AUDIT" on the fleet-utilisation post, then ran the audit spreadsheet on their own site (tracked download plus calculator use).

| Dimension | Signals | Points |
|---|---|---|
| ICP | Sector 15, size 10, tenure ratio 71 percent so decision-maker 10, geography 5 | 40 |
| Intent | Company posted a job for an "automation project lead" (10); the person's post on picking congestion 18 days ago (15) | 25 |
| Engagement | Resource test 20 | 20 |
| Total | | 85, hot |

Route: call within 2 hours, mobile bought now, alert to the caller with the audit result the person produced.

## Worked score 2: edge, a warm lead that looks hot

A "digital transformation manager" at a 4,000-person automotive group in Bavaria, reacted to the post, opened all three emails, clicked the link in email 2.

| Dimension | Signals | Points |
|---|---|---|
| ICP | Sector 15, size 10, role rung 4 (project) so 0 for authority, geography 5 | 30 |
| Intent | Group announced funding for a new plant 4 months ago (8) | 8 |
| Engagement | Click 7, opens 3 | 10 |
| Total | | 48, warm |

The three opens felt hot to the junior operator. They are 3 points. The click is a real signal, so the lead moves to "to call" and the mobile is bought; but the call qualifies who owns the budget, because a rung-4 person at a 4,000-person group does not sign. Expected outcome: a referral to the plant's head of logistics, who becomes a new record with the intent inherited.

## Worked score 3: went wrong, an off-target lead that was called

An "AI enthusiast and consultant" at a 3-person advisory firm commented on the AI-agent platform's benchmark post, replied to email 1 with "great resource, thanks", opened email 2 and 3.

First pass, done by hand: the reply was read as positive, the mobile was bought, two calls were made, no demo, 10 credits and 40 minutes lost.

Correct score:

| Dimension | Signals | Points |
|---|---|---|
| ICP | Company class "seller" (consultancy): sector 0, size 0, authority 0, geography 5 | 5 |
| Intent | None | 0 |
| Engagement | Opens 3 | 3 |
| Total | | 8, cold, and off-target by company class |

The reply was a thank-you, not a positive reply; the classifier bucket for it is "positive weak" at most, and the ICP filter had not been applied before the call. Correct state: "off-target", traced, source kept, no credits spent. The fix was ordering: ICP filter before any state that can spend money.

## Reply classification and the action it triggers

| Reply category | Example | Action |
|---|---|---|
| Positive strong | "interested", "book a demo" | Book now, alert |
| Positive weak | "maybe", "I will forward this" | Qualify timing, ask who owns it |
| Price objection | "what does it cost" | Frame against the cost of not automating, offer a pilot; no list price in writing |
| Competitor objection | "we use X" | Differentiate, a case; 3 times the same name is a pattern alert |
| Timing objection | "not now" | Nurture with a date; never "we will see" |
| Negative | "stop" | Out of sequence, state "lost, refused" |

A reply without an action after 4 business hours (default) shows in the safety-net view.

## Failure table

| Failure | Symptom | Fix |
|---|---|---|
| Opens read as intent | Calls nobody expected | Opens are 3 points, never a trigger |
| ICP after spend | Credits on consultants and students | Filter before any paid state |
| Score demoted on re-score | Hot leads silently cooling | Down only via review |
| One threshold for all posts | Buyer-heavy and curious-heavy posts treated alike | Read the in-ICP share per post |
