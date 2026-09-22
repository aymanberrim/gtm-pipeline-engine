# Reply classification and SLAs

Purpose: every reply lands in one of six categories, each with one action, one SLA and one resulting status. An unactioned reply escalates to the safety net.

## The six categories

| Category | What it sounds like | Action | SLA (default) | Status after |
|---|---|---|---|---|
| Strong positive | "interested", "let's talk", "can you show me", "book a demo" | Book the demo now: send two slots or the calendar link, alert the caller | 2 hours | To call, or Demo booked if the slot is taken in the thread |
| Weak positive | "maybe", "I will forward this", "not my area but", "send more" | Qualify timing: ask when it becomes a subject, who owns it; create urgency with one number | 4 business hours | To call if a signal follows, else Dated nurture at the date they give |
| Price objection | "too expensive", "we have no budget", "what does it cost" | Never a list price in writing. Reframe: cost of not automating, then a pilot on 20 units (tickets, picks, handling events) | 4 business hours | To call |
| Competitor objection | "we already use X", "our tool does that", "we just renewed" | Differentiation: plugs into the incumbent, per-unit cost, days not months. Log the competitor name; 3 occurrences in a segment raise a pattern alert | 4 business hours | To call, or Dated nurture with the renewal date |
| Timing objection | "not now", "after the summer", "call me in Q3", "we are mid-migration" | Dated nurture with the date they said. If they gave no date, propose one and confirm it. Never "we'll see" | 4 business hours | Dated nurture, wake-up on the stated date |
| Negative | "stop", "remove me", "not relevant", "unsubscribe" | Exit every sequence on every channel today, log their words as the reason | same day | Lost with reason, reactivable at day 90 unless they asked never to be contacted |

Two rules cut across the table. A positive reply, strong or weak, moves the lead out of the sequence immediately whatever the score. A question in a reply is answered, then the action above is taken: answering is not the action; booking, dating or closing is.

## Escalation

1. The inbox webhook creates a task on the lead at reply time, with the category and the SLA deadline. Without a webhook, a person reads the inbox at 09:00 and 16:00 and creates the task by hand; the SLA clock starts at reply time.
2. A task past its deadline appears in the Overdue view.
3. A reply whose category cannot be decided in 60 seconds is set to weak positive with a 4-business-hour SLA and a note.
4. The third occurrence of the same competitor name in one segment inside 30 days posts a pattern alert, reviewed at the weekly session.

## The three safety-net views

| View | Filter | Target at end of day | If not empty |
|---|---|---|---|
| No next action | status not in (Off-target, Demo booked, Lost) and next-action date is empty | 0, always | A hole in the machine: find which transition forgot to set a date, fix the transition, then fix the lead |
| Overdue | next-action date before today | 0 | Work it to zero today: do the action, or re-date it with a reason |
| Wake up today | status is Dated nurture and next-action date is today | 0 after the day's touches | Each lead gets its value touch and moves to To call or to a new nurture date |

## Worked example 1, clean

The AI-agent platform from Austin gets this reply from a head of customer operations at a Nordic telecom: "This is interesting, our L1 team spends most of its day re-routing. Who would I talk to?" Category strong positive. Reply within 2 hours: two slots offered, plus the calendar link. Alert to the caller. Status To call, mobile bought. The head of operations picks a slot in the thread 40 minutes later: Demo booked.

## Worked example 2, edge

Reply from a CIO at a French mid-market insurer: "We are migrating our service desk until the end of the year, come back after." Category timing objection. The tempting action is "noted, I will come back" with no date. Instead: "Understood. I will come back the first week after your cut-over; is the second week of January right?" The CIO confirms. Status Dated nurture with the date, wake-up automatic. The lead reappears in Wake up today on the agreed morning, with a value touch prepared.

## Worked example 3, gone wrong

A plant manager replies "we use the incumbent fleet software, it already does that". Category competitor objection. The reply is drafted but sits for 3 days waiting for the owner's review. No task was created because the webhook had failed silently after a CRM field rename. Found when the weekly review compared the Overdue view with the raw inbox: 6 replies in the inbox, 4 tasks in the CRM. Fix: a daily control that inbox replies equal reply tasks created, and the rule that a draft waits at most 4 working hours for review before it goes out as written.
