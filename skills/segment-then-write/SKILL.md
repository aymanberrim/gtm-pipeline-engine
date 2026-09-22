---
name: segment-then-write
title: Segment then write
stage: 3-segment
category: Outreach
tags: [Sales]
description: |
  Use this skill when a verified list has to become outbound copy and you want one message per group instead of one message for everyone or one message per person: "split this list into groups before we write", "this email does not fit half the list", "write the cold email for the plant managers group", "our process-owners group is not replying", "how big should a segment be", "build the sequence as a draft for a human to send", "turn these 140 verified contacts into 3 campaigns". It runs the homogeneity test, writes one template per group with a role-first opener and a demo CTA, layers 1:1 facts on top before sending, and reads replies per group to decide whether to re-segment or change the angle.
---

# Segment then write

Applies when the list is tiered and the emails are verified, and the next step is copy. Produces, per group, one template message that speaks to every person in the group, the 1:1 layer per person, and a draft campaign a human activates.

## Inputs

- The tiered list from decision-maker-authority: role rung, tier, company class, plus the stack hook from stack-detection when it exists.
- Email verification status per row: safe, catch-all, invalid. Only safe rows go into the email campaign.
- The product's angle library: for each role rung, the loop that role is stuck in, what the product plugs into, and what it takes off their hands. Written once, reused per group.
- A reply log per group from previous campaigns, if any (sends, replies, positive replies).

## The play

1. Segment first, write second. Group the list on the axis that changes the message: role relative to the tool (a plant director, a fleet or WMS administrator, a picking process owner do not share a problem), then the incumbent tool when it changes the hook, then company shape when it changes the pain. Never segment on merge fields (country, first name) since they change nothing in the argument.
2. Run the homogeneity test on each group before writing a word: pick 3 people at random, state the problem in one sentence, ask whether the same sentence is true for all 3. If one of them would say "not my problem", the group is heterogeneous. The measured case: a "process owners" group mixed incident, problem, change and configuration owners; one angle could not speak to all of them and the group did not reply. Open references/homogeneity-test.md for the test, the re-segmentation moves and that case.
3. Size the groups. Under about 15 people is not a group, it is a 1:1 list: keep the group template and the personalization brief, but write and send each message by hand. Over about 80 is probably two groups hiding in one: rerun the test. Both bounds are defaults to tune; the reference campaign ran 31 contacts in five groups of 16, 6, 4, 3 and 2, the small ones as 1:1 lists.
4. Write ONE message per group. It must be true for every person in the group; if it is not, the segmentation is wrong or the angle is wrong, there is no third option. Structure: subject is the specific failure the reader lives with; paragraph 1 names the recipient's role then the loop they are stuck in ("As the fleet manager, you spend part of every shift..."); paragraph 2 says what plugs into their existing tool and takes that part; paragraph 3 offers 15 minutes on their own data. Open references/message-pattern-and-copy-rules.md for the pattern, the forbidden openers and two worked messages.
5. Exclude before writing: consultancies, integrators and competing vendors are not in any group (separate partner motion); catch-all addresses stay in reserve or go through the social channel; invalid addresses never send.
6. Layer the 1:1 personalisation on top. The group message is a template. Before sending, find 2 or 3 facts about the person or the company (a post, a hire, a new site, the tool they run) and put them in the opener or the second paragraph. No generic merge-field sends. A message that only swaps the first name and the company name is not personalised.
7. Vary the CTA across the sequence, keep the target constant. The CTA is always the demo; step 1 asks for a slot this week, step 2 offers to show one thing on their data, step 3 asks whether someone else owns it. One open question or one CTA per message, never both. No price anywhere in cold; price is for the demo.
8. Confirm the copy with the owner, build the campaign as a draft in the sequencer, and hand the send to a human. The pipeline drafts, a person activates.
9. Read replies per group after 60 sends. Reply and positive-reply rates per group validate or invalidate the segmentation; a silent group is a segmentation or angle problem to revisit, not a list to push harder. Open references/reply-feedback-loop.md for the thresholds and the decision table.

## What good looks like

- The reliable check is reading the group message aloud to any member of the group and finding nothing in it false; the expert wrote it after looking at the list, not before, and when a group fails the homogeneity test they split it rather than soften the message until it says nothing.
- The version that fails writes one email for the whole list, opens with "I am the founder of..." or with raw pain ("Your warehouse is bleeding money"), adds a price to look concrete, and sends to catch-all addresses to chase volume, then reads the resulting 1 percent reply rate as proof that "cold email does not work in Europe".
- Where the bar sits, from the measured campaign: 31 core contacts split into 5 groups (16, 6, 4, 3, 2), 28 safe addresses sent first, 3 catch-all held back, every first email opening by naming the recipient's role. Defaults to tune: a group under 3 percent replies after 60 sends is revisited; a group at or above 8 percent replies with at least 1 positive reply per 25 sends confirms the segment. A message true for 100 percent of the group and personalised on 100 percent of sends is the standard, not the stretch goal.
- The transposition test: a 40-person warehouse-robotics vendor from Shenzhen has one group of fleet or WMS administrators at European 3PLs, one group of DC directors at grocery distributors, one group of picking process owners. Three messages, three loops, one product. A Series-A AI-agent platform from Austin has service-desk tool owners, heads of customer operations, incident process managers. Same rule.

## Handoff

- Stage 4 (engagement) receives, per group: the template, the per-person 1:1 layer, the sequence with its three CTA phrasings, the draft campaign id, and the exclusion list with reasons. The resource-magnet-funnel skill reuses the same copy rules for its three-email sequence. Stage 7 receives the reply log per group.
- This skill does not verify emails, does not source contacts, does not manage deliverability (warm-up, daily caps, secondary domains), and does not send. It does not write the partner motion for excluded consultancies.

## Rules

- MUST segment before writing; NEVER write a message and then look for people it fits.
- MUST pass the homogeneity test (true for every member) before a group message is confirmed; otherwise re-segment or change the angle.
- MUST open the first email by naming the recipient's role, then the problem; NEVER lead with raw pain and NEVER with a sender self-introduction.
- MUST layer 2 or 3 person-level facts on the template before every send; NEVER send a merge-field-only message.
- MUST send only to verified-safe addresses; catch-all in reserve or via the social channel.
- MUST use one open question or one CTA per message, NEVER both; the CTA is the demo, phrased differently at each step.
- NEVER put a price in cold outreach.
- NEVER include consultancies, integrators or competing vendors in a group; they belong to the partner motion.
- NEVER activate a campaign from the pipeline; build the draft, a human sends.
