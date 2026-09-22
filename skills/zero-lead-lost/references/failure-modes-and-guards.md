# Failure modes and guards

Purpose: the table of places where leads usually die, each paired with the guard that makes that death impossible, then one worked week showing the three safety-net views filling and emptying on a healthy channel. Use the table at setup and every time a dead lead is found: the dead lead is a row, and the row names the guard that was missing.

## The table

| Where a lead usually dies | The guard that prevents it |
|---|---|
| Stuck in a CSV, an export, a chat thread | Guard 1: CRM record at capture, before triage |
| Same person on two posts, two records, one forgotten | Guard 2: dedupe on the normalised profile URL, sources merged |
| Enrichment fails, the lead is thrown away | Status Email missing plus the free social fallback (guard 4) |
| Email lands in spam, lead is invisible | Verification before send, warm-up, auto-pause when open rate is under 35 percent or reply rate under 3 percent |
| Reply not seen | Inbox webhook plus reply task with SLA; unactioned reply escalates to Overdue |
| Hot lead called too late | Alert plus call SLA: 2 hours after a test, 24 hours after a click or reply |
| Call not answered, lead forgotten | Guard 5: dated retry at day 2, different slot, 4 attempts, then Dated nurture |
| "Not now" lost in limbo | Dated nurture with automatic wake-up at the stated date |
| "Brochure sent, will call back" that drags on | Forbidden status; a dated next step is mandatory |
| Off-target lead deleted, lost for referrals | Off-target is a traced terminal, never deleted |
| Two CRM objects for one person (call leads and social leads) | One lead object with a channel multi-select |
| Human exclusion overwritten by a re-score | Overrides in their own table; scoring is idempotent |
| Lead with no next action at all | Guard 6: the No next action view, emptied daily |

Every row is a mechanism, not a reminder. A guard that depends on someone remembering is not a guard.

## The self-test

At any moment, the count of non-terminal leads with an empty next-action date must be 0. Run it as a query, not as a feeling. If it is not 0, the answer is never "be more careful"; it is "which transition forgot to set the date".

## A worked week

The Shenzhen warehouse-robotics vendor has 340 live leads in the CRM after two resource posts, one operator running the channel, one account executive taking demos. Counts are the three safety-net views at 09:00 (before the routine) and at 18:00 (after).

| Day | No next action 09:00 | Overdue 09:00 | Wake up today 09:00 | What happened | All three at 18:00 |
|---|---|---|---|---|---|
| Monday | 0 | 7 | 4 | 7 overdue were Friday's call retries pushed by a long demo; called, 2 answered, 1 booked. 4 wake-ups got the benchmark row for their sector; 1 replied positive | 0, 0, 0 |
| Tuesday | 3 | 2 | 6 | 3 in No next action: a new import script set status To qualify ICP without a date. Script fixed, 3 leads dated. 2 overdue reply tasks from Monday evening, answered by 10:00 | 0, 0, 0 |
| Wednesday | 0 | 0 | 9 | Heaviest wake-up day (a batch nurtured 30 days earlier). 9 value touches; 2 replies, 1 booked demo, 1 dated to day 60 | 0, 0, 0 |
| Thursday | 0 | 5 | 2 | 5 overdue: the operator was at a trade show Wednesday afternoon. Worked in 40 minutes. 1 competitor objection logged; third occurrence of the same incumbent fleet software this month, pattern alert raised for Friday | 0, 0, 0 |
| Friday | 0 | 1 | 3 | 1 overdue: attempt 4 of 4 on a 3PL director, no answer, moved to Dated nurture day 30. 3 wake-ups. Weekly review: pattern alert leads to a battlecard update, not a copy change | 0, 0, 0 |

Week totals: 15 overdue items, 3 defects in No next action (one root cause), 24 wake-ups, 2 demos booked, 0 leads lost by oversight. The Tuesday defect is the point: the view caught a script bug within 24 hours of deployment, before a single lead aged.

## What an unhealthy week looks like

No next action above 0 for two consecutive days means a transition is broken and nobody fixed it. Overdue climbing day over day means the operator's capacity is below the channel's volume: cap the daily mobile purchases and the send volume until it comes back down, do not let the backlog grow. Wake up today at 0 for a whole week on a channel older than 30 days means nobody is being nurtured, so timing objections are being marked Lost. Each of these is read in the morning routine and fixed the same day; the weekly review in channel-operating-cadence decides whether the fix was structural.
