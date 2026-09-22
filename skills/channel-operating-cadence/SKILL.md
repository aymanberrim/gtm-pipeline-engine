---
name: channel-operating-cadence
title: Channel operating cadence
stage: 7-learn
category: RevOps
tags: [RevOps]
description: |
  Use this skill when an outbound channel is live and it has to run as a machine and be shown to a CEO as one: "what do I do every morning", "what do we review on Friday", "which numbers prove the channel works", "is 28 percent open rate bad", "our demos are booked but not held", "what does a demo cost us", "write the weekly report for the CEO", "the re-score wiped my exclusions", "when do we refresh the ICP", "the channel feels busy but nothing closes". It fixes a 15-minute daily routine, a 60-minute weekly review, a monthly refresh, the 12 metrics with default benchmarks and the action when each is below, a one-page CEO report, and the idempotence and audit rules that keep the numbers trustworthy.
---

# Channel operating cadence

Applies once the channel has leads in the CRM, at least one sequence sending and at least one call a day; it is the routine that keeps it running and the proof that it runs. Produces a daily log line, a weekly review with one fix, a monthly refresh, a metrics board of 12 numbers with benchmarks, and a one-page CEO report every week.

## Inputs

- The CRM with the state machine and safety-net views from zero-lead-lost, and the call log from demo-booking-call.
- The sequencer's stats per segment: sends, opens, clicks, replies, positive replies.
- The email verifier's result per address and the domain health check.
- The enrichment provider's spend, from its balance endpoint, and the operator's time per week.
- The ICP decision rule from stage 1 (icp-matrix-builder, refreshed monthly), the battlecard (stage 1 library skill) as used by demo-booking-call, the compliance pack from regulatory-to-selling-points, the reply log from segment-then-write.
- The value of a demo: expected contract value times the demo-to-close rate, or the CEO's stated number until history exists.

## The play

1. Run the daily routine in 15 minutes, same hour every day, and log one line. Empty the three safety-net views: No next action to 0 (and fix the transition that filled it), Overdue to 0, Wake up today worked. Read the funnel counts. Check deliverability per sending domain; pause a sequence when open rate is under 35 percent or reply rate under 3 percent after 60 sends, or when bounces exceed 3 percent on the day. Buy the day's mobile batch for the To call queue under the cap. Open references/daily-weekly-monthly-checklists.md for the exact order and the log line format.
2. Run the weekly review in 60 minutes, same slot every week. Seven items, in order: reply and positive-reply rates per segment (a segment under 3 percent replies after 60 sends is re-segmented or gets a new angle, handed to segment-then-write); the leakiest funnel step; demos booked versus held; win and loss notes fed back into the ICP and the battlecard; deliverability and domain health; cost per demo (tools plus time) against the value of a demo; and the one-page CEO report, written before the review is 24 hours old.
3. Pick one fix per week, not five: the step with the largest gap to benchmark weighted by volume. A 10-point gap on a step with 300 leads beats a 30-point gap on a step with 12. Next week's review opens by checking whether the fix moved the number.
4. Run the monthly refresh: the ICP updated from the month's won and lost demos (which titles held and advanced, which booked and vanished), a stack-detection sweep on every account added in the month, the market-entry scorecard re-checked against what the demos said, the compliance pack refreshed when a demo raised a question it did not answer.
5. Track the 12 metrics on one board, each with definition, formula, default benchmark and the action when it is below. Open references/metrics-and-benchmarks.md for the table. Two benchmarks are measured (the auto-pause triggers, open under 35 percent and reply under 3 percent) and one is a rule (safety net 0); the rest are starting points replaced by the channel's own median after 8 weeks.
6. Write the CEO report every week on one page: 5 numbers (demos booked, demos held, positive reply rate, cost per demo, safety-net count), what changed, what was fixed, what is next. No metric without its previous week beside it. Open references/ceo-weekly-report-template.md for the template and a filled week of the running example.
7. Keep the numbers trustworthy with two audit rules. Idempotence: running the scoring or the import twice changes nothing on the second run; test it after every change to a rule or a script, and any change on the second pass is a regression. Overrides: every human decision (an exclusion, a forced tier, a do-not-contact) lives in its own table with author, date and reason, and the pipeline reads it; never in a field the pipeline recalculates. The measured case: 18 exclusions were wiped by a re-score because they lived in the scored field.
8. Verify costs at the source. The enrichment provider's wrapper reported zero cost on a search that billed 0.25 credit per call; the balance endpoint is the truth, read weekly, with a circuit breaker so a runaway script stops at the third call.

## What good looks like

- You know the cadence is working when the CEO reads the report in 3 minutes and the one question they ask is already answered on the page, the operator can name last week's fix and whether it moved the number, and the safety-net count has closed at 0 every evening for a month.
- It has gone wrong when 30 dashboard tiles sit unread, the weekly meeting is about whichever demo went badly, a re-score quietly reshuffles tiers, and the CEO asks "how is outbound going" and hears "busy".
- The bar, defaults to tune: daily routine done 5 days out of 5 with a log line; weekly review under 60 minutes with exactly one fix written down; the fix's target metric moved within 2 weeks in 60 percent of cases; monthly refresh produces at least one change to the ICP or the battlecard; CEO report delivered the same day every week; idempotence test passed after every pipeline change; 0 overrides lost in 12 months.
- Cost discipline: cost per demo from real invoices and real hours, compared with the value of a demo every week; the channel scales only while cost per demo stays under the ceiling the CEO set (default to tune: 10 percent of the expected value of a demo).

## Handoff

- Stage 1 receives the monthly ICP refresh through icp-matrix-builder and the stack-detection sweep list; the scorecard re-check goes to market-entry-scorecard; stage 3 the per-segment reply rates through segment-then-write; stage 4 the deliverability pauses; stage 5 the reach, qualified and held rates through demo-booking-call and the safety-net state through zero-lead-lost; the CEO the one-page report.
- This skill does not define the state machine, write copy, run calls, detect stacks or set the ICP; it measures them and routes the fix to the skill that owns the step.

## Rules

- MUST run the daily routine every working day and log one line; NEVER skip the safety-net views on a busy day.
- MUST pause a sequence when open rate is under 35 percent or reply rate under 3 percent after 60 sends, before diagnosing.
- MUST pick exactly one fix per weekly review, with an owner and a date; NEVER a list.
- MUST feed win and loss notes into the ICP and the battlecard every week.
- MUST compute cost per demo from real spend and real hours; NEVER from list prices.
- MUST deliver the CEO report weekly on one page with 5 numbers and their previous week.
- MUST pass the idempotence test after every scoring or import change; a second pass that changes anything is a regression.
- MUST keep human overrides in their own table; NEVER in a field the pipeline recalculates.
- MUST read costs from the provider's balance endpoint; NEVER trust a wrapper's reported cost.
- NEVER scale sends or purchases while a safety-net view is non-empty at end of day or cost per demo is above the ceiling.
