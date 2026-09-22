# Capture and enrichment stages

Purpose: the exact rules from the post to the sequence, and the cost logic that keeps the channel profitable. Every rule exists because a lead died at that point in a real run.

## The post mechanic

| Stage | Content | Example, warehouse-robotics vendor entering Europe |
|---|---|---|
| Hook | The failure the reader recognises, one line | "Most DCs I visit run their AMR fleet at 40 percent of what the WMS could feed it." |
| The resource | What it is, with one concrete detail | "A 12-row fleet utilisation audit: the 12 checks we run on a site before quoting." |
| The ask | Comment a word or react | "Comment AUDIT and I send it." |
| The delivery | How and when | "Sent by message within 24 hours, with the spreadsheet." |

One resource is one landing page and several posts. The same audit carries a post on the utilisation number, a post on the check people fail most, a post on the method. Three posts, one capture pipeline, one source tag per post so that stage 7 can compare them.

## Capture rules

| Rule | Detail |
|---|---|
| CRM before triage | Every engaged person becomes a record at scrape time, state "captured", before enrichment or qualification |
| Reactors included | Scrape commenters and reactors (and reshares when available); cross the lists, deduplicate |
| Dedupe key | Normalised profile URL (lower case, no query string, no trailing slash). Name is a fallback only |
| Merge, do not overwrite | Same person on two posts is one record; the source tag becomes a list, the first-seen date is kept |
| Partial capture is fine | No email yet is state "to enrich", not a reason to skip |
| Source tag | resource name, post URL, date. Partner leads carry "partner: name" instead |
| Idempotent import | Rerunning the import creates no duplicate; the counter "imported plus already present plus off-target" must equal the scrape total, every run |

The measured rule: the sum must close. An import whose counters do not add up to the scrape total has lost someone.

## Stage 1 enrichment: email only, in bulk

At capture, buy the professional email only, then verify it.

```
Email found?
  yes -> verification:
           safe      -> email channel on, sequence starts
           catch-all -> email in reserve, social channel first
           invalid   -> no email, fallback below
  no  -> state "email missing" -> free fallback: manual social message
```

No mobile number at this stage. Failed lookups cost nothing on the measured provider; a found mobile costs 10 credits against 1 for an email. Buying mobiles for everyone who reacted to a post means paying 10 credits each for people who will never open, click or reply.

Deliverability guardrails at this stage: send only to safe addresses, domain warm-up done, SPF, DKIM and DMARC in place, daily volume capped, a secondary domain dedicated to cold. If the bounce rate or the spam score climbs, the campaign pauses itself before a blacklisting.

## ICP filter: after enrichment, traced, never deleted

Minimal filter before any call: company size (proxy for budget), role (decision-maker, influencer, user, out of scope), sector in the target. Three outputs:

- In target: continues.
- Off-target: terminal state "off-target", traced with the reason, never deleted. Useful later for referrals or a smaller-company motion.
- Doubt: state "ICP to qualify" for a human, with a dated next action.

The point that decides profitability: people who want a resource are often curious readers, not buyers of the product. If more than 60 percent of a post's engagement lands off-target (default to tune), change the resource so it attracts buyers, or accept a separate smaller-company motion. Decide before scaling the channel.

## Stage 2 enrichment: mobile, just in time

Triggered only when a lead moves to "to call": in ICP and a real signal (click, reply, product or resource test).

```
Lead "to call":
  mobile known?   -> call
  mobile unknown  -> buy now
        found      -> "to call, number ok" -> call
        not found  -> free fallback: manual social message, no loss
```

- Never bought upstream. A lead that never signals costs zero phone credits.
- Daily batch: group the day's "to call" queue and buy once.
- Spend cap: a maximum number of numbers per day; above it, buy by descending score.

## Verification routing summary

| Data available | Channels on | First touch |
|---|---|---|
| Safe email | Email, social | Email 1 same day |
| Catch-all email | Social first, email in reserve | Social message referencing the post |
| No email, profile only | Social | Connection request plus message |
| Mobile bought (after signal) | Phone, plus the above | Call within 2 to 24 hours |

No branch ends in "nothing". The worst state of a living lead is "nurture, dated", never silence.

## Worked cost example

A post draws 180 engaged people. Stage 1: 180 email lookups, about 120 found, 120 credits. Verification: 84 safe, 21 catch-all, 15 invalid. ICP filter: 70 in target, 38 off-target traced, 12 to qualify. Sequence to 55 safe in-target people. Signals over 10 days: 9 clicks, 4 replies, 2 resource tests. Stage 2: 13 numbers bought, 11 found, 110 credits. Total 230 credits for 13 calls. The bulk-mobile version would have bought 180 numbers at 10 each, 1,800 credits, for the same 13 calls.

## Failure table

| Where a lead dies | Guardrail |
|---|---|
| Stuck in a spreadsheet or a scraping tool | CRM at scrape time |
| Two records for one person across two posts | Dedupe on profile URL |
| Enrichment fails, lead thrown away | State "email missing" plus social fallback |
| Email in spam | Verification, warm-up, auto-pause |
| Mobiles bought for everyone | Stage 2 only on signal plus ICP |
| Off-target deleted | Traced terminal state |
| Import counters do not close | Idempotent import, sum check |
