# Detection methods, ranked by measured recall

Purpose: the ranked table of public technical surfaces, what each one leaks, its measured recall on the source sample, and how to transpose it to a robotics or AI vendor entering Europe. Numbers come from a parallel test of about 8 methods on 8 accounts, then a blind run on 30 more (38 total). Each method ran as its own agent on the same set, so recalls are comparable.

## The ranking

| Rank | Surface | What it leaks | Measured result | Verdict |
|---|---|---|---|---|
| 1 | DNS TXT / SPF record on the root domain | The business tool that sends mail on the account's behalf (payroll, production, shipment notifications, fleet alerts) plus the SaaS periphery tokens | About 60 percent recall of business tools; 22 of the hits on 38 accounts came from SPF | Best single technical signal. One query. Run it first. |
| 2 | Certificate-transparency logs, then resolve every subdomain to IP or CNAME and match against vendor fingerprints | Self-hosted or white-label portals on a vendor's bare IP; subdomains a wordlist never guesses | About 31 hits on 38 accounts, the largest contributor; precision 100 percent on the ground-truth check | The mass discovery engine. Avoids the wildcard-DNS trap. |
| 3 | Client-portal link on the website, then the redirect chain and the CSP header | The vendor domain behind a white-label login; CSP names the vendor's auth, document, and analytics services | About 50 percent recall when a portal exists; one vendor identified by CSP alone | Identification workhorse. Also rescues accounts absent from CT logs. |
| 4 | Declarative sources: vendor partner directories, job posts, app stores | Vendors behind a CDN, invisible to every network method; white-label mobile app package names | About 5 hits on 38 accounts; the fashionable vendor over-reported 4 times, the legacy vendor 0 of 8 | Necessary for CDN-hosted vendors, marketing-biased. |
| 5 | Content mining: file names, page slugs, product-sheet titles | Niche production tools nobody else surfaces | 2 vendors found this way, both otherwise blind | Opportunistic complement. |
| 6 | Favicon hash | Confirms a portal already located | 0 of 8 on root domains (every account serves its own logo) | Confirmation only, never discovery. |
| 7 | PDF metadata (Producer field) | Nothing useful | 0 of 8 | Discard. Public PDFs are marketing files from office software, never production output. |
| 8 | DKIM selector brute-force (17 selectors) | Nothing useful | 0 of 8 for business tools; only reconfirms the mail suite | Discard. |

Two more methods were validated during the blind run: the app store lookup (rank 4) when a site is behind a WAF or unreachable, and the website-link rescue (rank 3) when the portal subdomain never appeared in the transparency logs.

## Why each surface leaks

- SPF: any tool that sends mail under the account's domain (a fleet manager emailing shift reports, a WMS emailing carriers) must be authorised there or its mail bounces. The include token or the a: host names the vendor.
- Certificate transparency: every hostname that ever got a certificate. A plant exposing `fleet.plant-domain.example` and pointing it at the vendor's hosted instance hands you the CNAME or the bare IP.
- Portal link: `/operator-login` redirects to `tenant.vendor-domain.example`; the CSP header allow-lists the vendor's auth, collaboration and analytics hosts.
- Declarative sources leak by choice, which is why they are biased.

## Vendor fingerprint layers for a robotics or AI vendor entering Europe

| Layer | Example vendors to fingerprint | Best surface |
|---|---|---|
| Warehouse or plant execution (WMS, MES) | The incumbent WMS your integration replaces or attaches to | SPF (carrier mails), CT plus CNAME (hosted tenant), portal redirect |
| Robot fleet manager, AMR orchestration | The fleet manager your robots must talk to, and your competitor's | CT plus CNAME (`fleet.`, `robots.`, `amr.` subdomains), CSP on the operator login |
| PLC and industrial cloud | The automation vendor's cloud gateway | CT, job posts (engineers list the PLC family) |
| Cloud and ML stack | Hyperscaler region, the ML platform, the vector database | CT (region-specific hostnames), job posts, app-store SDK names |
| Periphery (CRM, ticketing, marketing) | Not a hook; a maturity gauge | SPF tokens |

## Per-layer detectability

- Self-hosted on a bare IP or a dedicated CNAME: fully detectable by rank 2. Reverse-IP on the vendor's IP also yields a mass list, but only of accounts that proxy a subdomain: about 8 percent of a vendor's claimed base, biased toward larger accounts.
- Behind a shared CDN with centralised login: invisible to ranks 1 to 3, found only by rank 4, so systematically under-counted. Never read absence as "not a customer".
- Small accounts on an office suite plus a legacy on-premise tool: about 3 percent of the sample, no footprint. Accept the miss.

## Questions when the table gives an ambiguous answer

1. Did the fingerprint table contain this vendor before you ran? If not, the miss is a table gap, not a method gap.
2. Is the vendor behind a CDN? Then the network silence means nothing and only declarative evidence counts.
3. Does the account operate from a second domain (group holding, plant-specific domain, acquired brand)? Rerun ranks 1 to 3 on it before concluding.
