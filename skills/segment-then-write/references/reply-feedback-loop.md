# Reply feedback loop

Purpose: replies are the only measurement of a segmentation. This page turns reply counts per group into one of four decisions: confirm, change the angle, re-segment, or stop. Every threshold below is a default to tune on your own data; the logic (per group, after a minimum sample, positive replies weighted above raw replies) is the method.

## What to log, per group

| Field | Definition |
|---|---|
| Sends | First emails delivered (not bounced) to safe addresses |
| Opens | Tracked opens, if tracking is on; treat as noise, never as a decision input on its own |
| Replies | Any human reply, including "no" and "wrong person" |
| Positive replies | "Interested", "send a slot", "talk to my colleague X" |
| Negatives | "Not for us", "stop" |
| Wrong-person replies | "That is not my area" |
| Demos booked | The only number that matters at the end |

Log per group, not per campaign. A campaign with 5 groups has 5 rows.

## Minimum sample

Read nothing before 60 sends per group. Below that, a 0 percent reply rate on 12 sends means nothing (the expected number of replies at 4 percent is 0.48). Groups smaller than 60 people accumulate sends across campaigns before the rule applies; until then, judge them on positive replies and wrong-person replies only, which are informative at any sample size.

## Decision table (defaults to tune)

| Reply rate after 60 sends | Positive replies | Wrong-person replies | Reading | Decision |
|---|---|---|---|---|
| At or above 8 percent | At least 1 per 25 sends | Under 10 percent of replies | Segment and angle confirmed | Scale the group, keep the template, keep personalising |
| 3 to 8 percent | At least 1 per 50 sends | Under 10 percent of replies | Segment fine, angle average | A/B a second angle on the next 60 |
| 3 to 8 percent | 0 | Any | People read it, nobody wants it | Angle problem: rewrite the loop and the offer, keep the group |
| Under 3 percent | 0 | Under 10 percent of replies | Nobody engages | Revisit: rerun the homogeneity test first; if it passes, angle; if it fails, re-segment |
| Any | Any | 30 percent or more of replies | Wrong people | Segmentation problem at the role level: back to the role ladder, not the copy |
| Any | 0 after 120 sends across 2 angles | Any | Not a market for this message | Stop the group, park it, note the reason |

Two things the table refuses to do: it never reads opens as a decision input (a 60 percent open rate with 0 replies is a subject that worked and a body that did not), and it never blames the channel ("cold email does not work in this country") before both the group and the angle have been tested.

## How the decision maps back

- Re-segment: the group goes back to the homogeneity test in references/homogeneity-test.md with the wrong-person replies as the clue. Every "not my area" reply names the axis that was missing.
- Change the angle: keep the group, write a second problem sentence, rerun the 3-of-3 test, send to the next 60. Do not resend to the first 60 with a new angle inside 30 days.
- Confirm: the template is frozen for this group, the 1:1 layer stays mandatory, sends scale up within deliverability caps.
- Stop: the group and the reason go to stage 7. A parked group is reviewed after 90 days, not deleted.

## Worked cases

Clean: 16 fleet or WMS administrators, first batch. 16 sends, 2 replies, 1 positive (a slot booked), 0 wrong-person. Under the 60-send floor, but 1 positive per 16 is above the 1 per 25 bar; the segment is provisionally confirmed and the next 44 people in the same rung are added before any conclusion is drawn.

Edge: 64 DC directors at grocery distributors. 64 sends, 5 replies (7.8 percent), 0 positive, 3 wrong-person ("talk to our head of automation"). Reply rate looks fine; the 3 wrong-person replies are 60 percent of replies. Decision: segmentation, not angle. The DC director delegates automation to a rung-2 person; the group is rebuilt at rung 2, and the 3 named people are added as 1:1.

Went wrong: the "process owners" group from the failed-group case. 12 sends across incident, problem, change and configuration owners, 0 replies. The first reading was "email is dead for this persona" and the group was pushed with a second follow-up. Correct reading: below the sample floor, and the homogeneity test had never been run. Once run, it failed at 1 of 3. The group was split; the incident-owner half replied on the next batch.

## Rates by message step

Follow-ups (step 2 and 3) usually carry 30 to 50 percent of total replies. Read the group's rate on the full sequence, not on step 1 alone. If step 3 (the "who owns this" ask) produces most of the replies, the role rung was one level too high: the people you wrote to are delegating, and the reply names the real segment.

## Failure table

| Failure | Symptom | Fix |
|---|---|---|
| Reading rates per campaign | Good and bad groups average into "meh" | Log and read per group |
| Reading opens | Subject tuned, body never fixed | Opens are noise for decisions |
| Deciding on 12 sends | Groups killed or scaled on one reply | Enforce the 60-send floor |
| Resending a new angle to the same 60 | Unsubscribe and spam complaints rise | New angle goes to the next 60 |
| Blaming the channel | Country or persona declared dead | Test group, then angle, before channel |
