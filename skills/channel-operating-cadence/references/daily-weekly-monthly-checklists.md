# Daily, weekly, monthly checklists

Purpose: the three routines in their exact order, with the time each takes and the trace it leaves. Safety-net views, then stats, then deliverability, then purchases: nothing is bought or sent on a day the channel is unhealthy.

## Daily, 15 minutes, same hour

| Minute | Step | Rule | Trace |
|---|---|---|---|
| 0 to 2 | No next action view | Must be 0. If not: fix the transition that forgot the date, then date the leads | Count and root cause |
| 2 to 6 | Overdue view | Work to 0: do the action or re-date with a reason. Reply tasks first | Start count, 0 at end |
| 6 to 8 | Wake up today view | Each lead gets a value touch (a number, a row, a case), never "have you thought about it"; then To call or a new nurture date | Count worked |
| 8 to 10 | Funnel counts | Captured, Enriched, In ICP, In sequence, Signal, Reached, Qualified, Demo booked, Demo held, week to date | The 9 counts |
| 10 to 12 | Deliverability | Per sending domain: bounces today, open and reply rate on sequences past 60 sends. Pause when open is under 35 percent, reply under 3 percent, or bounces over 3 percent. Pause first, diagnose weekly | Paused: which sequence |
| 12 to 14 | Mobile batch | To call queue, in ICP, signal under 7 days old, no number; buy under the cap, score descending. Skip if a sequence was paused for bounces | Bought, credits, found |
| 14 to 15 | Log line | One line, fixed format, posted where the CEO can see it | See below |

Log line: `date | NNA 0 (root cause or none) | overdue 7 to 0 | wake-ups 4 | funnel 340/301/212/188/20/9/5/3/2 | deliverability ok or paused: name | mobiles 6 bought, 60 credits, 5 found`.

## Weekly, 60 minutes, same slot

Open with a 30-second routine-compliance glance: five log lines present, and every safety-net view closed at 0 all week. If either failed, that is the week's fix before the seven items begin.

| Minute | Item | Question | Output |
|---|---|---|---|
| 0 to 10 | Per-segment reply rates | Per group: sends, replies, positive replies. Under 3 percent after 60 sends: re-segment or new angle, via segment-then-write. At or above 8 percent with 1 positive per 25 sends: confirmed, scale | One decision per group |
| 10 to 20 | Leakiest funnel step | Per step, gap to benchmark times volume; the largest product is the step. Open by checking whether last week's fix moved its number | One fix, one owner, one date |
| 20 to 30 | Demos booked versus held | Booked, held, no-show, rescheduled. Under 80 percent held: check the day-before (T-1) confirmation and the handoff pack | Held rate, cause of no-shows |
| 30 to 40 | Win and loss notes | Per demo: what the buyer said, which objection came up, which title held it. Feed the ICP (titles, sizes, sectors that buy) and the battlecard (new objection, phrasing that lands) | Lines added to ICP and battlecard |
| 40 to 47 | Domain health and deliverability | Authentication records intact, blacklist status, warm-up state, bounce trend | Green, amber, red per domain |
| 47 to 53 | Cost per demo | Tools invoiced plus credits plus operator hours at cost, over demos booked; against the value of a demo | The number, under the ceiling or not |
| 53 to 60 | CEO report | Five numbers with last week beside them, what changed, what was fixed, what is next | One page, delivered the same day |

Exactly one fix; when two steps compete, the one with more leads behind it wins. Written as: metric, current value, target, action, owner, date checked.

## Monthly, half a day

1. ICP refresh from won and lost: list the month's demos with title, size, sector, country, stack, outcome. Update the ICP notes in market-entry-scorecard: a profile that booked 3 demos and advanced 0 is demoted, one that advanced 2 of 2 is promoted.
2. Stack-detection sweep on every account added in the month with no stack recorded: the next sequence's hook depends on it.
3. Market-entry scorecard re-check: did the demos confirm the country, entry mode and buying centre assumed? One line per assumption: confirmed, contradicted, unknown.
4. Compliance pack refresh: every demo question the pack did not answer becomes a section; regulatory-to-selling-points owns it.
5. Idempotence test: run scoring and import twice on the month's data; the second run must change 0 records, or it is a regression fixed before the next sends.
6. Overrides audit: every override has an author, date and reason; those older than 90 days are renewed or removed.

## Worked example, a week that went wrong

Tuesday: NNA 3, root cause "import script, no date", fixed that day. Thursday: no log line, the operator was at a trade show, Overdue at 5 that evening. Friday review, the routine-compliance opener: 4 log lines out of 5. The week's fix is not a funnel step; it is "on trade-show days the account executive takes the 15 minutes". Item 3 shows held rate at 67 percent: the no-show came through the "tried to reach you" email link and skipped the day-before (T-1) confirmation. Logged as next week's candidate. One fix per week holds.
