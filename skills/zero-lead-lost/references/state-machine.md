# State machine

Purpose: the closed list of statuses, with the entry condition, the mandatory next action, the delay and the allowed exits for each. Configure the CRM from this table; a lead that fits no row gets a new row, never a free-text status.

## The table

| Status | Entry | Mandatory next action | Delay | Exits |
|---|---|---|---|---|
| Captured | scrape, reply, referral, card | Enrich | day 0 | To enrich |
| To enrich | captured | Email only (1 credit) plus verification; no mobile | under 24 hours | Email missing, To qualify ICP |
| Email missing | no email found or invalid | Free social fallback: connection request plus message; no mobile purchase | under 24 hours | Social manual |
| To qualify ICP | email safe or catch-all, or social open | Size, role, sector filter; doubtful cases to a human | under 24 hours | In sequence, Off-target |
| Off-target | outside ICP | none (terminal, traced) | none | terminal, traced |
| In sequence, cold | score 0 to 39 | One dated value touch per month | continuous | In sequence warm on any signal |
| In sequence, warm | score 40 to 69 | Emails day 0, day 3, day 7 | bounded by the sequence | To call on a signal, Dated nurture at end of sequence |
| To call, hot | signal: click, reply, product test | Buy the mobile if unknown (10 credits), then call | under 2 hours on a test, under 24 hours otherwise | No answer, Answered to qualify, Social manual if the number is not found |
| No answer, n of 4 | call not picked up | Voicemail, "tried to reach you" email, dated retry in a different slot | day 2 | To call (n+1), Dated nurture after attempt 4 |
| Answered, to qualify | call picked up | Qualify and book during the call | during the call | Demo booked, Dated nurture, Lost, Off-target |
| Social manual | no email found, or the mobile number not found at To call | Connection request then message; dated follow-up | day 3 | To qualify ICP once a channel is open, Dated nurture after 2 unanswered messages |
| Dated nurture | "not now", end of sequence, 4 misses | Automatic wake-up: a value touch, not "have you thought about it" | the stated date; default day 30 then day 60 | To call on wake-up, Lost on explicit refusal |
| Demo booked | qualified and slot taken | Handoff pack plus attendance confirmation | day-before (T-1) | terminal success |
| Lost | explicit refusal | Reason logged | none | terminal; reactivable at day 90 |

Three terminal states only: Off-target, Demo booked, Lost. Every other row has a next action and a delay, so a lead either moves or appears in Overdue.

## Transition rules

- A signal moves a lead up at any time: cold to warm, warm to To call. A lead moves down only through a periodic review, never as a side effect of a re-score.
- The mobile number is bought at the transition into To call and nowhere else. A lead that never signals costs 0 credits on the phone.
- The attempt counter resets when a lead leaves Dated nurture on a wake-up: the next call series is again 1 of 4.
- A positive reply skips the score: whatever the number, the lead goes to Answered, to qualify or To call immediately.

## Worked path 1, clean

A head of intralogistics at a 600-person grocery distributor in the Netherlands reacts to the Shenzhen robotics vendor's fleet-utilisation post. Day 0: Captured, To enrich, email found and verified safe, To qualify ICP, in ICP. Score 72: To call. Number bought that afternoon, called at 16:10, no answer: No answer 1 of 4, voicemail, email, retry dated day 2 at 09:30. Day 2: picked up, Answered to qualify, pain confirmed, demo taken live for day 6. Demo booked, handoff pack written, confirmation sent day 5. Seven statuses in six days, no gap.

## Worked path 2, edge

An operations director at a 3PL in Poland comments on the post. Email not found: Email missing, connection request sent day 0 with a follow-up dated day 3. Connection accepted day 2, message sent, no reply. Day 7: no reply, Dated nurture with wake-up day 30. Day 30: wake-up view shows the lead; the benchmark row for 3PLs is sent by social message; the director replies "send me the full thing by email". Email verified, To call on the reply, number bought, called within 24 hours. No credit was spent on a mobile until the reply.

## Worked path 3, gone wrong

A plant manager at a German automotive supplier answers a call, says "send me something, I will look and call you back". The caller sets a new free-text status "brochure sent, awaiting callback" and no date. The lead vanishes from every queue: not in No next action because the status is not recognised as non-terminal, not in Overdue because there is no date. Found 41 days later in an audit. The fix: the free-text status is deleted from the CRM, the lead is set to Dated nurture with a wake-up at day 7 and the note "asked for the deck, wants to call back", and a rule is added that no status can be created outside this table.
