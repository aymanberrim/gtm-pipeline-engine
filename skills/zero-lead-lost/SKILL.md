---
name: zero-lead-lost
title: Zero lead lost
stage: 5-convert
category: RevOps
tags: [RevOps]
description: |
  Use this skill when leads die somewhere between capture and demo and nobody can say where: "leads fall through the cracks", "someone replied last week and nobody answered", "half the CRM has no next step", "the callback list lives in the rep's head", "which status should this lead be in", "he sent the brochure and will call back", "how many call attempts before we stop", "design the CRM state machine", "what do we check every morning", "the leads are still in the export", "the prospect said not now, what do we do with him". It installs three invariants (every lead in the CRM, exactly one status in a closed state machine, a dated next action on every live lead), six guards, a six-way reply classification with SLAs, and three safety-net views that must be empty at the end of every day.
---

# Zero lead lost

Applies from the second a lead exists anywhere (a scrape, a reply, a referral) until it reaches Demo booked, Lost or Off-target. Produces a closed state machine in the CRM with a mandatory next action and date on every live lead, three safety-net views that are empty at the end of each day, and a reply-handling rule set with SLAs and escalation.

## Inputs

- One lead object in the CRM, not two: a closed status list, a next action and date, an attempt counter, a source tag, a channel multi-select, and a separate overrides table.
- The dedupe key: the normalised profile URL.
- The score or tier per lead: cold, warm, hot from resource-magnet-funnel, or the tier from decision-maker-authority.
- A call log object linked to the lead: result, date, time slot, notes.
- A reply inbox that fires a webhook on every reply or, failing that, a person who reads it twice a day.

## The play

1. Write the three invariants on the wall before the first lead enters. Every lead is in the CRM (never in a CSV, a message thread, a head). Every lead has exactly one status from a closed list, and no status is a dead end except Demo booked, Lost and Off-target. Every non-terminal lead has a next action with a date. If the three hold, a lead can only be in a queue somebody empties every day; that is the whole mechanism.
2. Install guard 1, single source of truth: the record is created at capture, status Captured, before enrichment and triage; a lead missing an email is still a record. Install guard 2, the dedupe key: the same person on two posts is one record with merged source tags; an import is idempotent and its counter (imported plus already present plus off-target) equals the file total.
3. Install guard 3, the exhaustive state machine: Captured, To enrich under 24 hours, Email missing with the free social fallback, To qualify ICP under 24 hours, Off-target as a traced terminal, In sequence cold or warm, To call hot within 2 to 24 hours with the mobile bought just in time, No answer n of 4, Social manual when no email or no number is found, Answered to qualify, Dated nurture with automatic wake-up, Demo booked as terminal success with handoff, Lost with a reason and reactivable at day 90. Open references/state-machine.md for each row's entry, mandatory next action, delay and exits, and when a lead fits no row: the fix is a new row, never a free-text status.
4. Install guard 4, multichannel routing with fallback. Email safe goes to the sequence; a signal (click, reply, product test) goes to the call; no answer after 4 attempts goes to a manual social message; no result on social goes to Dated nurture with a wake-up at day 30 or day 60. The worst case for a living lead is Dated nurture, never oblivion.
5. Install guard 5, the bounded retry loop. A missed call gets a voicemail, a "tried to reach you" email, and a dated retry at day 2 in a different time slot. After 4 attempts the lead goes to Dated nurture, not to Lost: silence is not a refusal. Forbid the status "brochure sent, will call back": a brochure warms nobody, and if sent it goes alongside a dated next step, never instead of one.
6. Install guard 6, the three safety-net views: No next action (non-terminal, date empty), Overdue (date in the past), Wake up today (Dated nurture due today). If the first fills, the machine has a hole, fixed the same day. The other two are worked to zero daily.
7. Classify every reply into six categories and act within the SLA: strong positive (book now plus alert), weak positive (qualify timing), price objection (cost of not automating plus pilot), competitor objection (differentiation; 3 occurrences is a pattern alert), timing objection (dated nurture, never "we'll see"), negative (exit the sequence, Lost with a reason). An unactioned reply escalates to the safety net. Open references/reply-classification-and-slas.md for the phrases, actions, SLAs and escalation.
8. Run the morning routine in 15 minutes: the three views, the funnel counts, a pause on any sequence whose deliverability degrades (defaults to tune: open rate under 35 percent or reply rate under 3 percent after 60 sends).
9. Audit the machine against references/failure-modes-and-guards.md at setup and whenever a lead is found dead: each row names where leads die and the guard that prevents it.

## What good looks like

- One test tells you the machine holds: pick a lead at random and you can read its status, next action and date in under 10 seconds. A lead found without a next step is a bug in the machine, not a lapse by a person.
- The version that fails keeps a kanban with a "Contacted" column holding 80 leads with no date, a side sheet of "to call back", and a rep who remembers the ones that matter. "Not now" gets marked Lost; Off-target gets deleted.
- The bar, defaults to tune: 100 percent of leads in the CRM within 24 hours of first contact; 0 in No next action and 0 in Overdue at the end of every day; strong positive replies actioned within 2 hours and booked the same day, objections and weak positives within 4 business hours, negatives the same day; a hot lead called within 2 hours after a product test, within 24 hours after a click or reply; retries at day 2, at most 4 attempts before Dated nurture; a Lost lead reviewed at day 90.
- The north star is qualified demos booked per week. The funnel that explains it: Captured, Enriched, In ICP, In sequence, Signal, Reached, Qualified, Demo booked, Demo held. The step that leaks most gets the week's effort; the others wait.

## Handoff

- demo-booking-call takes over at To call: it receives the lead with score, signal, resource requested and mobile number, and returns Demo booked, Dated nurture, Lost or Off-target with the attempt logged.
- resource-magnet-funnel owns capture, enrichment, scoring and the sequence; segment-then-write owns the copy; channel-operating-cadence owns the weekly review, the 12 metrics and the CEO report. Stage 6 (close) receives Demo booked with the handoff pack.
- This skill does not write emails, run the call, decide the ICP, manage warm-up or domain health, or delete anything.

## Rules

- MUST create the CRM record at capture, before enrichment and triage; NEVER let a lead live only in a file, a chat or a person's memory.
- MUST give every non-terminal lead a next action and a date; a lead without one is a defect fixed the same day.
- MUST use one closed status list; NEVER a free-text status; NEVER "brochure sent, will call back".
- MUST route every dead channel to the next channel, ending at worst in Dated nurture; NEVER in nothing.
- MUST cap call attempts at 4 over different time slots, retry at day 2, then Dated nurture; NEVER mark silence as Lost.
- MUST keep Off-target as a traced terminal; NEVER delete it.
- MUST action every reply within its SLA; an unactioned reply escalates to the safety net.
- MUST empty the three safety-net views every day; NEVER end a day with a lead in Overdue.
- NEVER trigger a call on an open alone.
