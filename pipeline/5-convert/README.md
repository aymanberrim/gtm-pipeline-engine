# Stage 5 · Convert

Turn signals into booked demos without losing anyone on the way. This is the stage a CEO judges the channel on: qualified demos per week, and a safety net that is empty every evening.

## Input

- Leads with a real signal from stage 4, scored and in the CRM.
- The authority proof and stack tag from stages 1-2, the battlecard and objection responses, and the landmine questions from regulatory-to-selling-points.
- A calendar with bookable slots and a daily budget for just-in-time mobile enrichment.

## Output

- Every reply classified into one of six categories with the matching action and SLA.
- Calls that qualify (situation → problem → implication), do not pitch, and book the demo live.
- A handoff pack per booked demo: who (authority proof), why now (signal), pain in their words, stack detected, objections raised, agreed next step.
- A closed state machine where every non-terminal lead has an owner, a status and a dated next action.

## Exit criteria

- The three safety-net views (no next action / overdue / wake up today) are empty at end of day, every day.
- Hot leads called within 2-24 h of the signal; strong-positive replies get a response within 2 h and are booked the same day.
- No call attempt beyond 4; no "brochure sent, will call back" status exists in the CRM.
- Mobile numbers bought only for in-ICP leads with a signal, within the daily cap.

## Metrics

| Metric | Definition | Default target |
|---|---|---|
| Signal-to-call within SLA | Hot leads called within SLA / hot leads | 90%+ |
| Reach rate | Leads reached / leads called | 30%+ |
| Qualified rate | Demos booked / leads reached | 50%+ |
| Demos booked per week | North star | Set per channel; trend up |
| Safety-net count | Leads with no dated next action at 18:00 | 0 |

## Skills

Original to this engine:

- [zero-lead-lost](../../skills/zero-lead-lost/) is the state machine, the guards, the reply classification and the safety net.
- [demo-booking-call](../../skills/demo-booking-call/) is the call frame, the attempt machine, the objections and the handoff pack.

From the library: `handle-reply`, `pre-call-script`.

## Handoff to stage 6

Stage 6 receives the booked demo with its handoff pack and the day-before (T-1) confirmation. The lead's state becomes the deal's stage.
