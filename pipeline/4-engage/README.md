# Stage 4 · Engage

Put the message in front of the person on every channel available, deliver value before asking, and capture every signal. Two entry flows feed this stage: the segmented outbound from stage 3 and the hand-raisers from resource posts.

## Input

- Draft campaigns and group templates from stage 3.
- A resource worth asking for (template, benchmark, audit) and a publishing cadence on the professional network.
- Sending infrastructure with warm-up done, authentication records in place and a daily volume cap.

## Output

- Sequences live: email plus social touches, deliver → value → ask, day 0 / day 3 / day 7 by default.
- Hand-raisers captured into the CRM at the moment of engagement (commenters and reactors), deduplicated on profile URL, enriched for email only.
- Every open, click, reply and product test logged against the lead with a timestamp.
- A scored lead (ICP 0-40, intent 0-40, engagement 0-20) routed cold / warm / hot.

## Exit criteria

- Pre-flight passed on every campaign (copy, links, merge fields, authentication, volume).
- No mobile numbers bought at this stage; enrichment is email-only until a signal exists.
- Deliverability healthy: open rate 35%+ and reply rate 3%+ on the trailing window, else the campaign auto-pauses.
- 100% of captured hand-raisers are in the CRM with a status before any triage.

## Metrics

| Metric | Definition | Default target |
|---|---|---|
| Open rate | Opens / delivered | 35%+ (pause trigger below) |
| Click rate | Clicks / delivered | 5% |
| Reply rate | Replies / delivered | 3%+ (pause trigger below) |
| Capture-to-CRM latency | Engagement to CRM row (status Captured), then to enriched | CRM row immediate; enrichment under 24 h |
| Signal rate | Leads with click, reply or test / leads in sequence | 8%+ |

## Skills

Original to this engine:

- [resource-magnet-funnel](../../skills/resource-magnet-funnel/) runs the post → capture → two-stage enrichment → 3-email sequence → scoring flow.

From the library: `cold-email-strategist` (infrastructure and deliverability), `multichannel-campaign-builder` (every touch from the template), `cold-email-preflight`, `trigger-based-outbound` (signal-driven single sends).

## Handoff to stage 5

Stage 5 receives leads with a real signal (click, reply, product test), their score and their state. An open alone never crosses into stage 5.
