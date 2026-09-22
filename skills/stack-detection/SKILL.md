---
name: stack-detection
title: Stack detection
stage: 1-target
category: Research
tags: [Sales]
description: |
  Use this skill when you need to know which software or hardware vendor an account already runs before you write to it: "which WMS does this warehouse use", "find every plant on robot fleet manager X", "what cloud and ML stack does this company run", "tag my target list by incumbent tool", "detect the stack from the domain", "build a segment of accounts on competitor Y". It reads public technical surfaces (DNS TXT/SPF, certificate-transparency logs, subdomain-to-vendor-IP resolution, client-portal links and CSP headers, partner directories, job posts, app stores) in cost order and stops as soon as a hook exists. Produces a per-account stack profile with a confidence level per tool and tool-tagged segments for sourcing and messaging.
---

# Stack detection

Applies when a target list exists (domains resolved) and outbound needs an incumbent-tool hook before the first message. Produces a stack profile per account (tool, layer, confidence, evidence) and segments tagged by tool.

## Inputs

- A list of accounts with a resolved primary domain. If the domain came from a directory, keep the directory's partial stack claim as a candidate, not a fact.
- A vendor fingerprint table: for each vendor you care about (the WMS, the robot fleet manager, the PLC cloud, the ML platform, your competitor), the SPF include tokens, the bare IPs or CNAME targets its customer portals resolve to, its portal URL patterns, its CSP domains, its app-store package prefixes. Start it from the examples in references/detection-methods-ranked.md and grow it with every confirmed hit.
- A known-positive sample: 8 to 12 accounts you are certain run a given tool (public case studies, partner logos, a churned customer list). Without it you cannot measure recall and you will overestimate every method.

## The play

1. Resolve the domain and check for a wildcard. Query a random subdomain first; if it resolves, every subdomain will, and brute-force enumeration is worthless on this account. Certificate-transparency logs are the only safe enumerator there.
2. Pull one DNS TXT query on the root domain, with a public resolver forced so a local cache cannot lie. Read the SPF record. This is the single best technical signal: it is the only surface that leaks the business tool itself (the payroll engine, the WMS that sends shipment mails, the fleet manager that sends alerts) and it gave about 60 percent recall of business tools on the measured sample. The same record also lists the SaaS periphery (CRM, marketing, ticketing), which is a size and maturity gauge, not a hook.
3. Pull certificate-transparency logs for the domain, resolve every subdomain found, and match the resolved IP or CNAME against the vendor fingerprint table. This is the mass discovery engine for self-hosted or white-label portals: it found subdomains a wordlist misses and contributed about 31 of the hits on the 38-account sample. Prefer a CNAME match to a bare-IP match; an IP alone is high but not absolute evidence.
4. Follow the client-portal link from the website ("client area", "operator login", "fleet dashboard", "supplier portal") and read the redirect chain and the Content-Security-Policy header. This is the identification workhorse when a portal exists, about 50 percent recall alone; on one account the CSP alone named the document-management vendor. It also rescues accounts whose portal subdomain never appeared in the transparency logs.
5. Only if steps 2 to 4 leave the production layer blank, go declarative: the vendor's partner directory, job posts naming the tool, the app stores (the package name of a white-label mobile app names the vendor even when the website sits behind a WAF). Declarative sources are needed for vendors behind CDNs, which are invisible to every network method, but they are marketing-biased: they over-report the fashionable vendor and under-report the legacy one. The hypothesis that job posts crack legacy tools was refuted at 0 out of 8.
6. Mine content opportunistically: file names, page slugs, product-sheet titles. It is cheap when you are already on the site and it surfaced two vendors nobody else found.
7. Skip PDF metadata and DKIM selector brute-force. Both were tested and scored 0 out of 8 for business tools: firms publish marketing PDFs from office software, never production output, and vendor DKIM selectors never resolve. Use a favicon hash only to confirm a portal you have already located; it discovered nothing on root domains.
8. Write the profile: one row per tool with layer (production, portal, periphery, infra), confidence (certain, probable, declared), and the exact evidence string. Then tag segments by tool. Open references/pipeline-and-precision-rules.md for the stop rules, the precision rules, and the validation protocol before you run at scale; open references/worked-examples.md when a case looks odd.

## What good looks like

- The expert's tell: they measured before they claimed. Two optimistic predictions in the source work ("detectable by DNS", "near 100 percent via scraping") were refuted by measurement. The expert takes the known-positive sample, runs one method at a time on the same accounts so recalls are comparable, and stacks methods until every known positive is caught. That combination is the validated pipeline, nothing else.
- The mediocre version trusts a badge. One account advertised vendor A on its homepage and its app subdomain resolved straight to vendor B. Only the functional signal counts. The mediocre version also attributes the vendor's own CSP entries (the vendor's marketing tools) to the account, and misses infra that sits on a second domain.
- The bar: no single method exceeds about 60 percent; the stacked pipeline reached 37 of 38 accounts (97 percent) with at least one tool identified, and most accounts came back with 2 or 3 tools across layers. Ground-truth check on a vendor's published customers: 7 of 12 matched the reverse-IP list, all 7 resolved directly to the vendor IP, precision 100 percent, zero false positives. Below 90 percent on your own sample, your fingerprint table is incomplete, not the method.
- Know what reverse-IP is for. A vendor claiming about 1,200 customers surfaced about 100 by reverse-IP, roughly 8 percent: only accounts that proxy a subdomain to the vendor, biased toward larger and more mature ones. Reverse-IP is a premium confirmation layer; directories remain the mass engine.

## Handoff

- Stage 2 (sourcing) receives the tool-tagged segments and the per-account profile with confidence, so account sequencing can prioritise certain hits over declared ones. Stage 4 (engagement) receives the hook: the named incumbent and the layer it sits in, which decides the pitch (an accessible data layer means "we plug into your data"; a fragmented or legacy stack means "we automate the manual part").
- This skill does not size the account, score intent, or pick the persona; it does not scrape behind logins or touch anything that is not a public technical surface.

## Rules

- MUST validate on a known-positive sample before reporting recall; stack methods until the sample is fully caught, then freeze the pipeline.
- MUST record the evidence string with every tool claim; a profile row without evidence is deleted, not kept as "probable".
- MUST prefer a CNAME to a bare-IP match and mark IP-only matches as probable, never certain.
- NEVER attribute an entry from the vendor's own CSP or SPF to the account.
- NEVER treat a homepage badge, partner logo, or press release as the stack; only functional signals set confidence to certain.
- NEVER spend time on PDF metadata or DKIM selector scans for business tools; both scored 0 out of 8.
- NEVER assume the primary domain carries the infra; check for a second operating domain when the profile comes back empty.
