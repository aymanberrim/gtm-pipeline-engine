# Attempts and handoff

Purpose: the daily purchase batch that feeds the queue, the attempt machine for unanswered calls, and the seven-field pack the account executive or CEO receives at booking. A call that leaves no trace in the CRM did not happen.

## The daily purchase batch

| Step | Rule (default to tune) |
|---|---|
| When | Once a day, 08:45, before the first call slot |
| Who qualifies | Status To call, in ICP, signal in the last 7 days, no mobile on file |
| Cap | A daily budget in credits; at 10 credits per mobile, a cap of 150 credits buys at most 15 numbers |
| Order when the cap binds | Score descending, then signal recency; a product test outranks a reply, a reply outranks a click at equal score |
| Not found | Costs nothing; lead goes to a manual social message the same day, still To call with the channel switched |
| Never | A number without a signal or outside ICP; a purchase outside the batch, except a product test, bought and called within 2 hours |

The batch makes spend visible in one line per day: bought, credits, found, called. If the found rate falls under 60 percent, check the provider's balance endpoint and the input data before buying more.

## The attempt machine

| Attempt | What is done | Next action | Date |
|---|---|---|---|
| 1, no answer | Voicemail (20 seconds: name, the resource or reply, one sentence, "I will try again on Thursday"), plus the "tried to reach you" email | Retry in a different time slot | day 2 |
| 2, no answer | Voicemail, no second email | Retry in a third slot | day 2 after attempt 2 |
| 3, no answer | No voicemail; a short social message referencing the resource | Retry in a fourth slot | day 2 after attempt 3 |
| 4, no answer | Nothing left on voicemail | Dated nurture, wake-up day 30, note "4 attempts, slots tried" | day 30 |

The four slots, so that a shift pattern or a meeting rhythm never blocks all attempts: before 09:30, 12:00 to 14:00, after 17:30, and 10:00 to 11:30. Never call four times at the same hour.

The "tried to reach you" email, under 50 words: "I tried to reach you this morning about the benchmark you took. I will try again Thursday around lunchtime; if another time is better, this link takes 20 seconds." One CTA, the calendar link; a share of demos gets booked from this email without a second call.

Every attempt is a row in the call log: result, date, slot, notes. The attempt counter is derived from the log, never typed by hand.

Answered outcomes bypass the machine: Demo booked, Dated nurture with their date, Lost with their reason, or Off-target.

## The handoff pack, seven fields

Written during or right after the call, attached to the Demo booked status.

| Field | Content | Example (plant manager, Dutch distribution centre) |
|---|---|---|
| 1. Who | Name, role, authority proof from the model | Plant manager, tenure ratio 67 percent, no registry mandate; signs equipment under group cap, group signs above |
| 2. Why now | The signal and its date | Clicked the cost-per-pick row on day 4 of the sequence; peak season starts in 9 weeks |
| 3. Pain in their words | Verbatim, two lines maximum | "In peak the aisles jam and we put 30 temps on it, and the temps are the ones who make the picking errors" |
| 4. Stack detected | From stack-detection plus what the call confirmed | WMS confirmed by name on the call; no separate fleet tool; routing rules changed by the integrator |
| 5. Objections raised | Which ones and the response that landed | "We do not connect external tools": read-only mode accepted; security lead to attend |
| 6. Agreed next step | What the demo will show, on whose data | 30 minutes on their layout drawing, congestion zones marked; show read-only routing suggestions on one aisle |
| 7. Calendar confirmation | Invitation accepted on the call; day-before (T-1) reminder sent | Accepted at 10:42; day-before (T-1) reminder scheduled with the layout request |

An empty field is filled or marked "not obtained" with the reason. "Not obtained" on field 1 means the demo may need a second attendee; the account executive decides.

## Worked example, edge

Head of customer operations at a Nordic telecom, tenure ratio 8 percent, prescriber. She books a demo but cannot commit the CIO's calendar. The caller books a provisional slot with her, sets a dated confirmation task at day 2 to obtain the CIO's attendance, and writes in field 1: "prescriber; CIO signs; CIO attendance to confirm by Wednesday". The demo runs with both because the dated task existed.

## Worked example, gone wrong

Four attempts on a 3PL director, all at 09:00 because the caller blocks calls then. Moved to Dated nurture. On the wake-up call at 17:40 he picks up first ring: never at his desk before 10:00. Fix: the retry task proposes the next slot itself and refuses a slot already tried.
