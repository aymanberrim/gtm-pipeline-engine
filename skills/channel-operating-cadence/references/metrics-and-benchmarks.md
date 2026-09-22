# Metrics and benchmarks

Purpose: the 12 numbers that describe the channel, each with definition, formula, default benchmark and the action when below. Two benchmarks are measured (the auto-pause triggers on open and reply rate) and one is a rule (safety net 0); the other nine are defaults, replaced by the channel's own 8-week median once it exists.

## The table

| # | Metric | Definition | Formula | Default benchmark | Action when below |
|---|---|---|---|---|---|
| 1 | Verified-safe rate | Share of found emails the verifier marks safe | safe / (safe + catch-all + invalid) | 70 percent | Change the enrichment source or the input list; never send to catch-all to compensate |
| 2 | Open rate | Opens over delivered, per sequence with at least 60 sends | unique opens / delivered | 35 percent (measured pause trigger) | Pause. Check subject line, domain reputation, warm-up. Resume after a 20-send test above the trigger |
| 3 | Click rate | Clicks over delivered | unique clicks / delivered | 5 percent | The value email is not concrete: one number, one row, one link. Hand to segment-then-write |
| 4 | Reply rate | Replies over delivered, any category | replies / delivered | 3 percent (measured pause trigger) | Pause. Homogeneity test; re-segment or change the angle |
| 5 | Positive reply rate | Strong plus weak positive over delivered | positive replies / delivered | 1 per 25 sends (4 percent) | The angle is read but does not land: revisit the role-first opener and the loop named; check the ICP filter is not letting users through |
| 6 | Signal-to-call within SLA | Signals called inside the SLA | called in SLA / signals | 90 percent | Caller capacity or batch timing: move the batch earlier, cap sends until capacity matches |
| 7 | Reach rate | Reached over called, within 4 attempts | answered / called | 30 percent | Slot rotation not enforced, or numbers wrong: check the found rate and the slot log |
| 8 | Qualified rate | Qualified over reached | qualified / answered | 50 percent | The wrong people enter the queue: tighten the trigger (a click on the unsubscribe page is not a click) or the ICP filter |
| 9 | Demos booked per week | North star: qualified demos with an accepted invitation | count per week | Set by the CEO; default for one operator: 3 | Work the leakiest step above it; never book unqualified demos to hit the number |
| 10 | Demo held rate | Demos held over demos booked | held / booked | 80 percent | Day minus 1 confirmation missing, or handoff pack thin |
| 11 | Cost per demo | All channel cost over demos booked | (tool invoices + credits + operator hours at cost) / demos booked | Under 10 percent of the expected value of a demo | Cut the mobile cap, cut sends to the weakest segment |
| 12 | Safety-net count | Leads in No next action plus Overdue at end of day | count at 18:00 | 0 | Fix the transition, not the person; above 0 two days running blocks any scale-up |

## How to read them together

- 2 and 4 are circuit breakers, read daily; they pause before anyone diagnoses. Everything else is read weekly.
- 7 times 8 gives the share of called leads that qualify: 15 percent at the defaults. With 40 signals a week that is 6 qualified conversations, and at a 60 percent live-booking rate about 3 to 4 demos, consistent with metric 9.
- 11 is the number the CEO trusts the whole board on, or not. Compute it from invoices and a timesheet, never from list prices.

## Worked example, clean

Week 6 of the Shenzhen robotics vendor's channel. 1: 74 percent. 2: 41 percent. 3: 6 percent. 4: 4.5 percent. 5: 1 in 22. 6: 92 percent. 7: 33 percent. 8: 55 percent. 9: 3. 10: 100 percent (3 of 3). 11: 310 per demo against a demo value of 6,000. 12: 0 every day. All twelve at or above benchmark. The review still picks one fix: metric 3, since 188 leads sit in sequence and a 2-point gain there means 4 more signals a week.

## Worked example, edge

Week 3 of the Austin AI-agent platform's channel. Metric 2 reads 52 percent and metric 4 reads 2.1 percent on the CIO segment after 74 sends: the subject works, the body does not. The pause fires on metric 4 alone. The review leaves the subject line, re-runs the homogeneity test and finds the segment mixed CIOs at insurers with CIOs at telecoms. Two segments, two angles, resume with 20 sends each.

## Worked example, gone wrong

Metric 11 reported at 95 per demo for four weeks: the operator's hours were not counted and the enrichment cost came from the wrapper, which reported 0 for searches that billed 0.25 credit each. Recomputed from the balance endpoint and a timesheet: 480 per demo, above the 10 percent ceiling on a 4,000 demo value. The scale-up ordered on the wrong number was reversed, the daily mobile cap cut from 15 to 8.
