# Worked examples

Purpose: three cases run by a 40-person warehouse-robotics vendor from Shenzhen building its first European list. Its AMR fleet must integrate with the incumbent WMS, so the hooks are the WMS (production layer) and any incumbent fleet manager (robotics layer). Each row carries layer, confidence, evidence.

## Case 1, clean: a regional grocery distributor in the Netherlands

Domain resolved from the national company registry. Random subdomain test: no wildcard.

| Step | Finding | Row written |
|---|---|---|
| 1 TXT | SPF includes the mail host of a mid-market WMS vendor plus tokens for a CRM and a ticketing tool | WMS vendor, production, certain, "SPF include: vendor mail host"; CRM and ticketing, periphery, certain |
| 2 CT | 14 subdomains; `wms.` CNAMEs to the WMS vendor's hosted tenant; `fleet.` resolves to a bare IP in the fingerprint table of a competing AMR vendor | WMS confirmed; competitor fleet manager, robotics, probable, "bare IP match, no CNAME" |
| 3 Portal | The operator-login link redirects to the competitor's tenant domain | Competitor fleet manager upgraded to certain |

Stopped after step 3: both target layers certain, 25 seconds of tooling. Segment tag: "WMS vendor X plus competitor fleet Y". Message hook: coexistence with the incumbent fleet, integration already built for WMS X. No declarative lookup needed.

## Case 2, edge: an automotive tier-2 supplier in Bavaria

Domain from a partner directory that listed the company as a customer of an industrial cloud platform.

- Step 1: SPF shows only the mail suite and a marketing platform. Periphery only, maturity gauge says mid-size.
- Step 2: CT returns 40 subdomains, all resolve. Wildcard confirmed by the random subdomain test, so every guessed host is noise. Only the CT-listed hostnames count. None match a fingerprint.
- Step 3: No portal link on the corporate site. Two fetch attempts hit an anti-bot page. Stop rule: mark portal unreachable.
- Second domain check: the registry lists a trading name for the plant; its domain resolves to a separate site. Rerun steps 1 to 3 on it. Step 2 on the plant domain: `mes.plant-domain` CNAMEs to a hosted MES vendor. Certain.
- Step 4: the directory claim about the industrial cloud platform stays declared; the job posts for the plant list the PLC family from one automation vendor. PLC family, infra, declared.

Profile: MES vendor certain on the plant domain, PLC family declared, industrial cloud platform declared. The message may state the MES; it may not state the cloud platform. Segment tag: "MES vendor Z, wildcard domain, portal unreachable". Lesson: the empty profile on the primary domain was a domain problem, not a detection problem, exactly the pattern the ground-truth sample showed where the remaining misses were wrong domains and anti-bot timeouts.

## Case 3, went wrong: a 3PL operator in northern Italy

The junior operator wrote the message "we see you run fleet manager Y" and the reply was "we do not".

What happened:

1. Step 3 read the CSP of the client-portal login page and found the fleet vendor's auth host. Correct so far: the portal vendor was identified. But the same CSP also listed a marketing analytics host and a workflow tool. The operator attributed all three to the account. The analytics host and the workflow tool were the portal vendor's own tools, present on every tenant's login page. The precision rule "a vendor's own CSP entries belong to the vendor" was skipped.
2. Worse, the portal was a supplier portal, not an operator portal. Its vendor is a document-exchange platform, not a fleet manager. The fingerprint table had a stale entry mapping that auth host to the fleet vendor because both vendors had once shared an identity provider. The row was written as certain on the wrong layer.
3. The homepage badge showed a partnership with fleet vendor Y from a trade show. The operator took the badge as confirmation. One measured account advertised vendor A and ran vendor B; a badge is never confirmation.

Corrected profile after rerun: document-exchange platform, portal, certain, "CSP auth host"; no fleet manager detected; WMS vendor from SPF, production, certain. The correct hook was the WMS integration; the fleet layer was greenfield, which is a better message than a false coexistence claim.

Fixes applied: the fingerprint table now stores the layer with every hostname and flags shared identity providers as ambiguous; a per-vendor exclusion list of self-owned CSP hosts is checked before any row is written; badge and logo evidence is capped at declared.

## What the three cases share

- Under 2 minutes of tooling per account for steps 1 to 3; step 4 ran on 1 of 3.
- Certain rows become statements, probable rows become questions, declared rows become segment filters only.
- Every miss traced to the fingerprint table or the domain, never to the ranking. Grow the table with every confirmed hit and recall climbs toward the measured 97 percent.

## Questions to ask when a case looks odd

1. Is the hostname a tenant of the vendor, or the vendor itself hosting its own marketing? Check whether the CNAME target is under the vendor's app domain or its corporate domain.
2. Did the same evidence appear on a second, unrelated account? If yes, it is probably the vendor's own infrastructure leaking through, not the account's choice.
3. Would you bet the first sentence of a cold message on this row? If not, it is not certain.
