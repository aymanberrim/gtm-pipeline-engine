# Library: upstream skills the engine runs on

Source: [swan-gtm/gtm-skills](https://github.com/swan-gtm/gtm-skills) (MIT). Browse them at [gtmskills.com](https://gtmskills.com). Every skill below is written by the named author; this repo only decides where it sits in the pipeline and why.

Install everything: `tools/install-library.sh` · one stage: `tools/install-library.sh --stage 4-engage` · one skill: `npx skills add swan-gtm/gtm-skills --skill <name>`

## Stage 1-target

| Skill | Author | Why it is in the engine |
|---|---|---|
| [move-gtm-diagnostic](https://www.gtmskills.com/skill/move-gtm-diagnostic) | [sangram-vajre](https://www.gtmskills.com/sangram-vajre) | Run before any build: the 4-question MOVE audit tells you whether the company is at problem-market, product-market or platform-market fit, which decides how aggressive the channel can be. |
| [market-finder](https://www.gtmskills.com/skill/market-finder) | [uri-knorovich](https://www.gtmskills.com/uri-knorovich) | Enumerates every business of a type in a geography from directories and registries, with a coverage audit. The account universe for the chosen country. |
| [icp-matrix-builder](https://www.gtmskills.com/skill/icp-matrix-builder) | [tanyo-gochev](https://www.gtmskills.com/tanyo-gochev) | Turns the ICP into a scored decision rule the list build can be filtered against, instead of a paragraph nobody applies. |
| [competitor-positioning](https://www.gtmskills.com/skill/competitor-positioning) | [alon-goldenberg](https://www.gtmskills.com/alon-goldenberg) | Messaging matrix and white-space map of the local competitors, with battlecard inputs. Feeds the positioning of the entry message. |
| [battlecard](https://www.gtmskills.com/skill/battlecard) | [ido-goldberg](https://www.gtmskills.com/ido-goldberg) | Compact battlecard format (win conditions, objections, talk tracks) that the demo-booking call reuses. |
| [ai-pricing-model-picker](https://www.gtmskills.com/skill/ai-pricing-model-picker) | [manny-medina](https://www.gtmskills.com/manny-medina) | For AI-agent products: per agent, per action, per workflow or per outcome, with anchors. Pricing is kept out of cold outreach but must exist before the first demo. |

## Stage 2-source

| Skill | Author | Why it is in the engine |
|---|---|---|
| [tam-builder](https://www.gtmskills.com/skill/tam-builder) | [tanyo-gochev](https://www.gtmskills.com/tanyo-gochev) | Company universe deduplicated to one row per company with size band, geography and fit class, plus an honest coverage report. Companies only; people come next. |
| [list-architect](https://www.gtmskills.com/skill/list-architect) | [alex-vacca](https://www.gtmskills.com/alex-vacca) | The reference on sourcing, boolean search, qualification, contact finding and deduplication, with 19 reference pages. Used for the mechanics once the authority model has said who to look for. |
| [signal-sourcer](https://www.gtmskills.com/skill/signal-sourcer) | [alex-vacca](https://www.gtmskills.com/alex-vacca) | Buying-signal taxonomy and signal-to-play mapping (hiring, funding, job change, tech change). Supplies the Intent dimension of the scoring rubric. |
| [hygiene-gated-outbound](https://www.gtmskills.com/skill/hygiene-gated-outbound) | [ryan-iyengar](https://www.gtmskills.com/ryan-iyengar) | Launch-readiness gate on duplicates, ownership gaps and stale data before any segment goes out. Protects the single-source-of-truth invariant. |
| [never-guess-an-email](https://www.gtmskills.com/skill/never-guess-an-email) | [lucas-godtfredsen](https://www.gtmskills.com/lucas-godtfredsen) | Routing decision when no verified address exists: send, other channel, or unreachable and say so. Pattern-guessing is banned in this engine. |

## Stage 4-engage

| Skill | Author | Why it is in the engine |
|---|---|---|
| [cold-email-strategist](https://www.gtmskills.com/skill/cold-email-strategist) | [alex-vacca](https://www.gtmskills.com/alex-vacca) | Deliverability, domain warm-up, SPF/DKIM/DMARC, sequence structure and copy frameworks, 25 reference pages. The infrastructure layer under every sequence. |
| [multichannel-campaign-builder](https://www.gtmskills.com/skill/multichannel-campaign-builder) | [erwann-lefevre](https://www.gtmskills.com/erwann-lefevre) | Writes the full email plus social sequence from three candidate angles and self-checks against a copy bar. Takes the group template from segment-then-write and produces every touch. |
| [cold-email-preflight](https://www.gtmskills.com/skill/cold-email-preflight) | [imad-badreddine](https://www.gtmskills.com/imad-badreddine) | Pre-send checklist on copy, links, merge fields and infrastructure. Nothing goes out without it. |
| [trigger-based-outbound](https://www.gtmskills.com/skill/trigger-based-outbound) | [ryan-iyengar](https://www.gtmskills.com/ryan-iyengar) | Qualifies a single detected account event into send, nurture or skip, with a trigger-grounded opener. Used for signal-driven sends outside the resource-magnet flow. |

## Stage 5-convert

| Skill | Author | Why it is in the engine |
|---|---|---|
| [handle-reply](https://www.gtmskills.com/skill/handle-reply) | [ido-goldberg](https://www.gtmskills.com/ido-goldberg) | Classifies inbound replies and drafts the response or stop action without auto-sending. Pairs with the six-category reply table in zero-lead-lost. |
| [pre-call-script](https://www.gtmskills.com/skill/pre-call-script) | [dyanesh-perumal](https://www.gtmskills.com/dyanesh-perumal) | Builds the call from the account's research: opener, KPI-tied relevance frame, proof point, one ask, the two or three objections this prospect will raise. Complements demo-booking-call for cold dials. |

## Stage 6-close

| Skill | Author | Why it is in the engine |
|---|---|---|
| [discovery-to-demo-bridge](https://www.gtmskills.com/skill/discovery-to-demo-bridge) | [gal-aga](https://www.gtmskills.com/gal-aga) | Turns discovery notes into a demo that proves value instead of a feature tour. The step right after the booked demo. |
| [meddpicc-gap-audit](https://www.gtmskills.com/skill/meddpicc-gap-audit) | [amit-rotstein](https://www.gtmskills.com/amit-rotstein) | Scores what is actually missing on a deal from transcripts and threads. The qualification backbone for long-cycle robotics and enterprise AI deals. |
| [multi-thread-deals](https://www.gtmskills.com/skill/multi-thread-deals) | [ido-goldberg](https://www.gtmskills.com/ido-goldberg) | Finds single-threaded deals, names the missing stakeholders and hands contact-specific next steps back to outreach. |
| [trial-poc-conversion](https://www.gtmskills.com/skill/trial-poc-conversion) | [rutger-katz](https://www.gtmskills.com/rutger-katz) | Trials and pilots that end in a decision: success criteria contracted before access, activation instrumented, conversion clock. Essential for robots on the floor and agents in production. |
| [roi-business-case](https://www.gtmskills.com/skill/roi-business-case) | [gal-aga](https://www.gtmskills.com/gal-aga) | A business case the buyer's finance team believes, with ranges instead of one dream number. Uses the per-unit cost numbers from the battlecard. |
| [mutual-action-plan-builder](https://www.gtmskills.com/skill/mutual-action-plan-builder) | [gal-aga](https://www.gtmskills.com/gal-aga) | Buyer-evidence milestones co-owned by the buying committee, not seller activities. The instrument for security review, procurement and works-council steps. |
| [procurement-navigation](https://www.gtmskills.com/skill/procurement-navigation) | [rutger-katz](https://www.gtmskills.com/rutger-katz) | Security review, legal redlines and vendor onboarding run in parallel on a mutual close plan. The compliance pack from regulatory-to-selling-points is what it ships. |

## Stage 7-learn

| Skill | Author | Why it is in the engine |
|---|---|---|
| [onboarding-activation](https://www.gtmskills.com/skill/onboarding-activation) | [rutger-katz](https://www.gtmskills.com/rutger-katz) | Carries the why-they-bought evidence across signature to first realised value on a clock. Where the first European reference is made. |
| [win-loss-program](https://www.gtmskills.com/skill/win-loss-program) | [rutger-katz](https://www.gtmskills.com/rutger-katz) | Evidence-based win/loss from transcripts and buyer interviews. Its output feeds the monthly ICP and battlecard refresh in the operating cadence. |
| [partner-channel-operations](https://www.gtmskills.com/skill/partner-channel-operations) | [rutger-katz](https://www.gtmskills.com/rutger-katz) | Partner programme, enablement, co-selling and deal registration. Activated when the entry-mode selector chose an integrator or distributor route. |
| [expansion-revenue-architect](https://www.gtmskills.com/skill/expansion-revenue-architect) | [rutger-katz](https://www.gtmskills.com/rutger-katz) | NRR/GRR diagnostic and expansion motion once the first accounts are live. The right side of the funnel the channel eventually feeds. |

_28 upstream skills. Regenerate with `node tools/render-library.mjs`._
