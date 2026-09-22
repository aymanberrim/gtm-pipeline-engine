---
name: demo-booking-call
title: Demo booking call
stage: 5-convert
category: Sales
tags: [Sales]
description: |
  Use this skill when a lead has shown a real signal and someone has to pick up the phone and turn it into a booked demo: "he clicked, do we call", "who do we call today and in what order", "when do we buy the mobile number", "what do I say in the first 20 seconds", "how do I qualify without pitching", "he says they already have a tool", "he says it is too expensive", "no answer, when do I retry", "how many attempts", "what does the account executive need from me before the demo", "book the slot on the call". It triggers only on a click, a reply or a product test, buys the number just in time, runs a hook, situation, problem, implication, light authority check, decides whether the demo is worth it, takes the calendar slot live, and hands a complete pack to whoever runs the demo.
---

# Demo booking call

Applies when a lead is in ICP and has produced a real signal: a click, a reply, or a test of the product or resource. Produces, per call, one of four outcomes logged in the CRM (Demo booked with a handoff pack, Dated nurture, Lost with reason, Off-target) and never a lead without a dated next step.

## Inputs

- The To call queue from zero-lead-lost, sorted by score then signal recency: lead, score, signal and time, resource requested, emails already sent.
- The authority model from decision-maker-authority: registry mandate (certain decision-maker), tenure ratio at or above 60 percent (probable decision-maker), 35 to 60 percent (prescriber).
- The stack from stack-detection, when it exists: the incumbent tool the product plugs into.
- The enrichment provider's real prices from its balance endpoint: measured at 1 credit per email, 10 per mobile, failures free. A daily budget cap in credits.
- The battlecard pattern: augment, do not replace; per-unit cost against an opaque licence; days not months to value; start in read-only or suggest mode.

## The play

1. Trigger only on a real signal: a click, a reply, a product test. An open is noise and never puts a lead in the queue. A test gets the call within 2 hours, a click or reply within 24 hours.
2. Buy the mobile number just in time, in one daily batch. Each morning, take the To call queue, keep only leads in ICP with a signal, buy numbers up to the budget cap, best score first. A number not found costs nothing and routes the lead to a manual social message. A lead that never signals never costs a phone credit.
3. Prepare 3 minutes per call, not 30: the exact reply or link clicked, the authority level, the stack, one fact about the site.
4. Open with the hook that references the signal: the resource they took ("you took the fleet-utilisation benchmark, I wanted your reaction to the 3PL row") or the exact words of their reply. Never "I am calling from" first. Open references/call-frame-and-talk-tracks.md for the frame and the two talk tracks of the running example: the Shenzhen warehouse-robotics vendor calling a plant manager, the Austin AI-agent platform calling a head of operations or a CIO.
5. Qualify the pain with three questions in order: situation ("how is that handled today"), problem ("where does it break"), implication ("what does that cost the team per shift, per week"). The call qualifies; it does not pitch. If the caller has spoken more than 40 percent of the first 4 minutes, the frame has slipped.
6. Qualify authority, urgency and budget lightly. Authority comes from the model, not the title: a registry mandate or a tenure ratio at or above 60 percent means the decision-maker; 35 to 60 percent means a prescriber, so ask who signs. Urgency is one question ("is there a date this has to be better by"). Budget is one question and never a licence quote.
7. Decide whether the demo is worth it. Yes when a real pain was named in their words, a date or a driver exists, and the person decides or prescribes. Otherwise Dated nurture or Off-target, dated.
8. Book the demo during the call. Open the calendar, propose two slots, take one, send the invitation while on the line, confirm receipt before hanging up. Never "I will send you slots", never "I will call you back". If the person must check with someone, book a provisional slot and a dated confirmation.
9. Handle objections with the battlecard pattern and plant one landmine when the incumbent comes up. Open references/objections-and-landmines.md for the five responses and the questions that expose the incumbent's cost: how long a simple change takes in the current tool, whether they have costed a ticket, a pick, a handling error. Three occurrences of the same competitor objection in a segment is a pattern alert.
10. Run the attempt machine on every miss and write the handoff pack on every booking. Open references/attempts-and-handoff.md for the sequence (voicemail, "tried to reach you" email, retry at day 2 in a different slot, 4 attempts, then Dated nurture) and the seven fields the account executive or CEO receives at booking.

## What good looks like

- What marks the good caller is how the call ends: an accepted invitation on the line, a pack written in the prospect's own words, and the prospect having talked more than they did. For every lead they did not reach, they can still name the attempt number, the slot tried and the next date.
- The weak version dials everyone who opened, pitches for 6 minutes, hears "send me something", promises to call back, and bought 200 mobile numbers on day 0 because the list looked promising.
- The bar, defaults to tune: 100 percent of calls triggered by a click, reply or test; 0 numbers bought without a signal; a test called within 2 hours, a click or reply within 24 hours; at least 60 percent of qualified calls end with a slot taken live, the rest with a dated provisional slot; 4 attempts maximum, each in a different slot (before 09:30, 12:00 to 14:00, after 17:30, mid-morning), retry at day 2; a handoff pack on 100 percent of booked demos, day-before (T-1) confirmation.
- Defaults to tune: 30 percent of called leads reached within 4 attempts; 50 percent of reached leads qualified. Below those, the queue or the signal definition is wrong, not the caller.

## Handoff

- Stage 6 (close) receives Demo booked plus the pack: who (authority proof), why now (the signal), pain in their words, stack detected, objections raised, agreed next step, day-before (T-1) confirmation. zero-lead-lost receives every other outcome as a status with a date. channel-operating-cadence receives reach rate, qualified rate, demos booked and cost per demo.
- decision-maker-authority owns the authority model; stack-detection owns the stack; regulatory-to-selling-points owns the compliance landmines for European buyers; segment-then-write owns the emails.
- This skill does not run the demo, quote a licence price, decide the ICP, write the sequence, or buy numbers outside the daily batch.

## Rules

- MUST call only on a click, a reply or a product test; NEVER on an open.
- MUST buy the mobile only for a lead in ICP with a signal, in the daily batch, under the cap, best score first; NEVER in bulk at capture.
- MUST open with the resource or the exact reply; NEVER with a self-introduction or a pitch.
- MUST ask situation, problem, implication before saying what the product does.
- MUST use the authority model to decide who signs; NEVER the title alone.
- MUST take the slot live on the call; NEVER "I will send slots", NEVER "I will call you back".
- MUST log every attempt with result, date, slot and notes; retry at day 2 in a different slot; stop at 4 and move to Dated nurture, NEVER to Lost.
- MUST write the seven-field handoff pack at booking and send the day-before (T-1) confirmation.
- NEVER quote a licence price; on a booking or discovery call the per-unit cost economics (for example 40 against 2 per ticket) may be referenced, but the licence number waits for the demo and never appears in cold outreach.
