# Stage 3 · Segment

Cut the list into groups homogeneous enough that one message speaks to every person in the group, then write that one message. Replies are the test of the segmentation, not of the copywriter.

## Input

- Tier A and B rows from stage 2 with role, stack tag, authority level and signals.
- The battlecard and positioning from stage 1.
- The persona map, selling lines and landmine questions from regulatory-to-selling-points.

## Output

- Named groups (typically 15 to 80 people each) with the shared role, shared incumbent tool and shared pain written on the group card.
- One template message per group: role-first opener, the loop they are stuck in, what plugs into their existing tool, a 15-minute offer on their own data. No price.
- A personalization brief per row: two or three facts about the person or the company that go on top of the template before sending.
- A campaign built in draft, ready for a human to send.

## Exit criteria

- Homogeneity test passed on every group: the message speaks to every row, or the group was split.
- Groups of 15 to 80 by default; a smaller group is run as a 1:1 list with the same template and personalization brief (the reference campaign ran 31 contacts in five groups of 16/6/4/3/2, the small ones as 1:1 lists). Over 80 is two groups unless justified on the card.
- Every message has one CTA or one open question, never both, and the CTA points to a demo.
- Personalization layer present on 100% of Tier A rows before the campaign leaves draft.

## Metrics

| Metric | Definition | Default target |
|---|---|---|
| Groups passing the truth test | Groups where one message fits all rows | 100% before send |
| Reply rate per group | Replies / delivered | Below 3% after 60 sends = revisit the group |
| Positive reply rate per group | Positive replies / delivered | 4% (1 in 25); a group at 8% reply with at least 1 positive per 25 sends is a group to scale |
| Personalized share | Rows with a 1:1 layer / rows sent | 100% of Tier A |

## Skills

Original to this engine:

- [segment-then-write](../../skills/segment-then-write/) runs the homogeneity test, writes the group template and the copy rules, and reads replies back into the segmentation.

From the library: none required at this stage; `multichannel-campaign-builder` in stage 4 turns the template into every touch.

## Handoff to stage 4

Stage 4 receives the group cards, the template message per group, the personalization briefs and the draft campaign.
