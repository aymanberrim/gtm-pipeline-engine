---
name: resource-magnet-funnel
title: Resource magnet funnel
stage: 4-engage
category: Outreach
tags: [Sales]
description: |
  Use this skill when a social post offers a resource in exchange for a comment or reaction and the hand-raisers have to become demos without losing anyone: "turn the commenters on my post into a pipeline", "who do we enrich first and how much does it cost", "deliver the template then convert", "score these leads cold warm hot", "when do we call and when do we not", "partner-referred leads with commission", "one resource, several posts". It captures commenters and reactors into the CRM before any triage, enriches in two stages (email in bulk, mobile just in time), scores on ICP, intent and engagement out of 100, runs a deliver, value, ask sequence, and routes on real signals only.
---

# Resource magnet funnel

Applies when a post has gone out with "comment X and I send you the resource" and the engagement must become booked demos. Produces a CRM record per engaged person with a source tag, a score out of 100, a routing state, a three-email sequence, and a call queue fed only by real signals.

## Inputs

- A deliverable resource: a template, an audit checklist, a benchmark, a calculator. It must exist and be sendable before the post goes out.
- The scraped engagement of the post: commenters and reactors, both, with profile URL, name, title, company. A scrape that returns only commenters is incomplete; get the reactors from a second tool.
- The CRM with a source field, a state machine, and an overrides table (see decision-maker-authority for why overrides live apart).
- The ICP decision rule from stage 1 (icp-matrix-builder, refreshed monthly) and the role ladder from decision-maker-authority.
- The enrichment provider's real prices from its own balance endpoint. The measured ratio was 1 credit per email and 10 per mobile number.

## The play

1. Publish with a 4-stage mechanic: hook (the failure the reader recognises), the resource (what it is, in one line, with a concrete detail), the ask (comment a word or react), the delivery (how and when they get it). One resource is one landing page and several posts: the same benchmark can carry a post on the number, a post on the method, a post on the surprising row. Never one post per resource.
2. Capture everything into the CRM immediately, before any triage. Commenters and reactors both. Deduplicate on the normalised profile URL: the same person on two posts is one record with merged source tags. A record with no email yet is still created, state "to enrich". Nobody is dropped because a field is empty.
3. Enrich in two stages. Stage 1, in bulk and cheap: professional email only, then verification. Safe goes to the email sequence; catch-all is held in reserve with the social channel first; invalid or not found goes to the manual social-message channel, free. No mobile number is bought at this stage. Open references/capture-and-enrichment-stages.md for the routing tree and the cost logic.
4. Filter on ICP after enrichment, not before. Off-target people (curious individuals, students, companies outside the target size or sector) go to a terminal but traced state "off-target", never deleted: they feed referrals and a future smaller-company motion. Doubtful ones go to "ICP to qualify" for a human.
5. Score out of 100 on three dimensions: ICP (0 to 40), intent (0 to 40), engagement (0 to 20). Route cold (0 to 39) to light nurture, warm (40 to 69) to the sequence, hot (70 to 100) to call first. Open references/scoring-and-routing.md for the full rubric and three worked scores.
6. Run the three-email sequence in the imposed order: deliver, value, ask. Day 0 delivers the promised resource unconditionally, opens by naming the recipient's role, zero pitch. Day 3 gives one insight tied to their pain plus one proof number, under 50 words. Day 7 makes the soft demo ask, one CTA. Open references/three-email-sequence.md for two worked versions.
7. Route on real signals only. A product or resource test (they used the calculator, ran the audit) is the strongest: call within 2 hours. A reply is classified and acted on immediately. A click moves the person to "to call". An open alone never triggers a call; it stays in sequence or nurture.
8. Buy the mobile number just in time. Only when the person is in ICP and has shown a real signal, because you are now going to call, buy the number. Batch the day's "to call" queue, cap the daily spend, and prioritise by score when the cap binds. If the number is not found, fall back to a manual social message.
9. Bring partner-referred leads into the same CRM and the same state machine, with source "partner" plus the partner's name, high priority, and attribution fields (referrer, conversion, amount, commission status) for the commission calculation.

## What good looks like

- The move that marks the expert here is refusing to pay for a phone number they will not dial: on their board the cost per demo separates the cheap email credits spent on everyone from the mobile credits spent on the called few, and that second figure is always the smaller one.
- Where it goes wrong is enriching email and mobile for every reactor on day 0, burning the budget on 200 people, calling whoever opened an email, and deleting the off-target leads; a month later the CRM cannot say which post produced which demo.
- Defaults to tune for the bar: 100 percent of engaged people in the CRM within 24 hours of the scrape; the count "imported plus already present plus off-target" equals the scrape total on every run; the sequence starts the same day as the engagement peak; a hot lead is called within 2 hours of a test and within 24 hours of a click or reply, while a warm lead stays in the sequence and is called only when it produces a signal; the "no next action" view is empty at the end of every day.
- Time discipline on the sequence: day 0, day 3, day 7. Email 2 under 50 words. One CTA in email 3. Both worked versions in the reference respect this.

## Handoff

- Stage 5 (convert) receives the "to call" queue with score, signal, resource requested, and the mobile number just bought; the call qualifies and books, it does not pitch. Stage 7 receives the funnel per resource: captured, enriched, in ICP, in sequence, signalled, reached, qualified, booked. The segment-then-write copy rules govern every email here.
- This skill does not write the post's resource, does not run the call, does not manage deliverability, and does not decide the ICP. It does not delete anything.

## Rules

- MUST create the CRM record before any triage or enrichment; NEVER leave a lead in a spreadsheet or a scraping tool.
- MUST capture reactors as well as commenters.
- MUST deduplicate on the normalised profile URL and merge sources.
- MUST buy the mobile number only for a person in ICP with a real signal (test, reply, click); NEVER in bulk at capture.
- MUST deliver the promised resource in email 1 unconditionally, with zero pitch.
- MUST keep off-target leads as a traced terminal state; NEVER delete them.
- NEVER trigger a call on an open alone.
- NEVER let a non-terminal lead sit without a dated next action.
- NEVER treat a partner-referred lead outside the same state machine; attribution fields are mandatory on it.
