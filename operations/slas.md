# SLAs

Every event has a clock. When the clock runs out the item appears in Overdue, which is emptied every morning. Categories and escalation in `skills/zero-lead-lost/references/reply-classification-and-slas.md`.

| Event | Action | SLA |
|---|---|---|
| Lead captured | In the CRM with a status | immediately; under 24 h for enrichment |
| Product or resource test | Call | under 2 h |
| Reply, strong positive ("interested", "demo") | Book now, alert the owner | respond within 2 h, book same day |
| Reply, weak positive ("maybe", "forwarding it") | Qualify timing, reply | under 4 business hours (default) |
| Reply, price objection | Cost of not acting + pilot offer | under 4 business hours |
| Reply, competitor objection | Differentiation + reference; third occurrence raises a pattern alert | under 4 business hours |
| Reply, timing objection | Dated nurture with the date they gave; never "we'll see" | under 4 business hours |
| Reply, negative | Exit sequence, Lost with reason | same day |
| Click | To call | under 24 h |
| Open alone | Nothing; never triggers a call | none |
| Call, no answer | Voicemail + email, retry in a different slot | day 2, max 4 attempts |
| Demo booked | Handoff pack + confirmation | day-before (T-1) |
| Compliance artifact requested (stage 6) | Deliver from the pack | 48 h |
| Deliverability below trigger | Pause the campaign | before any other action that day |

Escalation: a reply without action past its SLA, a hot lead not called, a nurture wake-up not handled all land in the same Overdue view. The view is the escalation; there is no separate channel to check.
