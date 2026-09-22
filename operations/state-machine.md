# State machine

Fourteen statuses, three of them terminal. Every non-terminal status has a mandatory next action and a delay; a lead that misses the delay appears in Overdue. Full table with entry conditions, exits and worked paths in `skills/zero-lead-lost/references/state-machine.md`.

```
Captured ──► To enrich ──► To qualify ICP ──► In sequence (cold | warm)
                │                │                    │
                ▼                ▼                    ▼ signal (click / reply / test)
          Email missing      Off-target ⛔        To call, hot ──► No answer (n of 4) ──► Dated nurture
          (social fallback)   (terminal, traced)      │                                      │ wake-up
                                                      ▼                                      ▼
                                              Answered, to qualify ──► Demo booked ✅   /  Lost ⛔ (reactivable day 90)
```

| Status | Next action | Delay |
|---|---|---|
| Captured | Enrich (email only) | day 0 |
| To enrich | Email + verification, no mobile | under 24 h |
| Email missing | Free social fallback, dated follow-up | under 24 h |
| To qualify ICP | Size, role, sector filter | under 24 h |
| In sequence, cold (score 0-39) | One value touch per month | continuous |
| In sequence, warm (40-69) | Day 0 / 3 / 7 emails | bounded |
| To call, hot (70-100 or any real signal) | Buy mobile if unknown, then call | under 2 h on a product test, under 24 h otherwise |
| No answer, n of 4 | Voicemail + email, retry in a different slot | day 2 |
| Social manual | Connection request then message, dated follow-up | day 3 |
| Answered, to qualify | Qualify and book during the call | live |
| Dated nurture | Automatic wake-up with a value touch | day 30, then day 60 |
| Demo booked ✅ | Handoff pack + day-before (T-1) confirmation | terminal success |
| Lost ⛔ | Reason logged | terminal, reactivable day 90 |
| Off-target ⛔ | None, traced | terminal |

Rules that keep it closed: a signal moves a lead up at any time; a lead moves down only through a periodic review; the mobile is bought at the transition into To call and nowhere else; no status exists outside this table (the "brochure sent, will call back" status is forbidden because it has no date and no exit).
