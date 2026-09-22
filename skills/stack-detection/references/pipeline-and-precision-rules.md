# Pipeline, stop rules, precision rules, validation protocol

Purpose: the cost-ordered pipeline per account, stop rules, precision rules that keep false positives at zero, and the ground-truth protocol.

## The cost-ordered pipeline

Stop as soon as a certain or probable tool exists on the layer your message will reference. Do not run slow steps to complete a profile you will not use.

| Step | Action | Cost | Typical yield | Stop condition |
|---|---|---|---|---|
| 0 | Resolve the domain. A directory's stack claim becomes a candidate row marked declared. | Free, instant | Domain plus a partial stack | Never stop here |
| 1 | One TXT query on the root domain, public resolver forced. Parse SPF includes and a: hosts against the fingerprint table. | Free, under 1 second | Business tool on about 60 percent of accounts | Stop if the production-layer hook is certain |
| 2 | Certificate-transparency lookup. Resolve every subdomain. Match CNAME first, IP second. Keep a second lookup service as fallback. | Free, 5 to 30 seconds | The largest source of hits | Stop if a hosted-tenant CNAME matches |
| 3 | Fetch the homepage, follow the portal link, read redirects and the CSP header. | Free, 5 to 20 seconds, may hit anti-bot | Portal and document layer | Stop if any layer hook is certain |
| 4 | Declarative lookups: partner directories of the CDN-hosted vendors, job posts, app-store package names. Content mining while on the site. | 1 to 5 minutes | Fills the CDN-hosted blind spot | Stop after 3 sources |
| Parallel | Mass layer: reverse-IP on each fingerprinted vendor IP plus every enumerable partner directory. Once per vendor, not per account. | Free, batch | Tool-tagged lists before any per-account work | Refresh monthly |

Do not run: PDF metadata, DKIM selector scans, favicon-hash discovery on root domains. All three scored 0 out of 8.

## Stop rules

- Stop at the first certain hook on the target layer. A second tool on another layer is a bonus, not a requirement.
- Stop after step 3 when the account is known to run a CDN-hosted vendor with centralised login; only step 4 can see it.
- Stop after 2 anti-bot timeouts on step 3; mark "portal unreachable" and let the directory or an archived copy fill it. The directory caught 12 of 12 known positives including those that timed out live; live fetch caught 8 of 12.
- Never stop with an empty profile before checking for a second operating domain.

## Precision rules

| Rule | Why | Example from the measured work |
|---|---|---|
| A vendor's own CSP and SPF entries belong to the vendor | Vendors allow-list their own marketing tools on every tenant login page | The portal vendor's CSP listed a marketing platform on every tenant; attributing it would have mis-tagged 16 accounts |
| Real infra may sit on a different domain | Groups, holdings, acquired brands, plant domains | One account's primary domain was clean; its portal lived on the brand's product domain |
| Prefer CNAME to bare IP | An IP can be shared or reassigned | The production vendor by IP alone rated high, not absolute; the CNAME to the vendor app host rated certain |
| A badge is not the stack | Logos outlive deployments | One account sold itself on vendor A; its app subdomain redirected to vendor B |
| Cross reverse-IP lists | Two vendors on one account reveal the layer split | One account showed production, portal and payroll vendors from three lists |
| Declared evidence never reaches certain | Directories over-report the fashionable vendor | The trendy vendor surfaced 4 times, the legacy vendor 0 times, on the same 8 accounts |

Confidence scale: certain = CNAME to vendor host, SPF include, portal redirect, CSP naming the vendor auth host; probable = bare-IP match, subdomain naming, content mining; declared = directory, job post, app store, badge. Declared segments, never states "you run X".

## Ground-truth validation protocol

1. Assemble a known-positive sample of 8 to 12 accounts per vendor from public case studies or the vendor's customer wall.
2. Run each method separately on the same sample, one agent per method, so recall is comparable. Record hits, misses, false positives.
3. Stack methods in cost order until the sample is fully caught. On the measured payroll sample: SPF caught 33 percent, adding the website link reached 67 percent, live scraping of the two hard cases failed on timeout, the directory reached 12 of 12. That stack is the validated pipeline.
4. Confirm precision the other way: check how many of the vendor's published customers appear in your reverse-IP or CT list and resolve each match. Measured: 7 of 12 matched, all 7 resolved directly to the vendor IP, zero false positives.
5. Rerun blind on 30 more accounts. Measured: 37 of 38 with at least one tool; the single miss ran only an office suite.
6. State the sample bias. Accounts pulled from reverse-IP lists are not random; their frequencies validate reliability and reveal layer composition, they are not market shares.
7. Keep the anti-optimism guard: two successive predictions ("detectable by DNS", then "near 100 percent by scraping") were refuted by measurement. No recall claim enters a plan before the number exists.

## Failure table

| Where it leaks | Guard |
|---|---|
| Wildcard DNS makes every guessed subdomain resolve | Random-subdomain test first; CT logs, never a wordlist, on wildcard domains |
| Local resolver caches an old SPF | Public resolver forced on every TXT query |
| CT lookup service returns errors | Second service as automatic fallback |
| Vendor tools attributed to the account | Per-vendor exclusion list of their own CSP and SPF entries |
| Empty profile on a holding domain | Registry trading names; try each domain |
| Recall claimed from a biased sample | Sample origin next to every percentage |
