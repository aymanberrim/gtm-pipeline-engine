# Operations: what running the channel looks like

The pipeline folders say what each stage must produce. This folder is the day-to-day: the routine, the state machine, the metrics, the SLAs and the handoff. Each page is a one-screen summary that links to the skill and reference page holding the full detail, so nothing is maintained twice.

| Page | What it answers | Full detail |
|---|---|---|
| [weekly-cadence.md](weekly-cadence.md) | What the operator does every morning, every Friday, every month | `skills/channel-operating-cadence/references/daily-weekly-monthly-checklists.md` |
| [state-machine.md](state-machine.md) | The 14 statuses a lead can have and the three that end its life | `skills/zero-lead-lost/references/state-machine.md` |
| [metrics.md](metrics.md) | The 12 numbers, their benchmarks, and the two that pause a campaign by themselves | `skills/channel-operating-cadence/references/metrics-and-benchmarks.md` |
| [slas.md](slas.md) | How fast each event must be acted on, and where it escalates | `skills/zero-lead-lost/references/reply-classification-and-slas.md` |
| [handoff-to-sales.md](handoff-to-sales.md) | The seven fields an account executive or CEO receives with every booked demo | `skills/demo-booking-call/references/attempts-and-handoff.md` |

## The three invariants

Everything in this folder exists to keep three statements true at every moment:

1. Every lead is in the CRM. Never in a spreadsheet, a message thread, or someone's head.
2. Every lead has exactly one status from a closed list. The only dead ends are Demo booked, Lost and Off-target.
3. Every non-terminal lead has a next action with a date. The safety-net views (no next action, overdue, wake up today) are empty at 18:00.

If these hold, a lead cannot be lost. The routine is the mechanism that keeps them true; the metrics are how a CEO sees that they are.
