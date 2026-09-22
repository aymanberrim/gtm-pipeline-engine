# Authority signals rubric

Purpose: replace the title with three facts. Each level below is stronger than the one under it, and a person takes the highest level they qualify for. The thresholds at level 2 and 3 are the measured ones; treat them as defaults to tune once you have 200 scored rows and a reply rate per level.

## The three levels

| Level | Signal | What it proves | Authority | Evidence string to store |
|---|---|---|---|---|
| 1 | Registered mandate in the national company registry (officer, director, managing director, board member, president of the entity) | Legal ownership or legal power to bind the company | Certain decision-maker | "mandate: <function>, registry id <id>" |
| 2 | Tenure ratio at or above 60 percent | De facto ownership: present since the start or close to it | Probable decision-maker | "ratio <n> percent, tenure <m> months, company age <a> months" |
| 3 | Tenure ratio between 35 and 60 percent | Influence without ownership: shaped the current way of working, does not own the budget | Influencer or prescriber | same as level 2 |
| none | Ratio below 35 percent, or ratio not computable | Nothing about authority | Title only, tier from role ladder | "title only" |

Level 1 beats everything. A registered managing director with 8 percent tenure ratio (hired to run the company) is certain, not "none". Level 2 and 3 are only read when the registry returns no mandate for the person.

## Tenure ratio math

ratio = months at the company / months since the company's founding date

- Use months, not years, so that young companies do not round to zero.
- Company age comes from the registry founding date of the resolved legal entity, not from the "founded" field of a social profile (often the founding of a brand or a parent).
- Tenure comes from the export's start date at the company. If the person changed roles inside the same company, count from the first role.
- Cap the ratio at 100 percent. A start date earlier than the founding date means the person came in with a predecessor entity; treat as 100 percent and add "predecessor" to the evidence string.

Worked values:

| Person | Tenure | Company age | Ratio | Level |
|---|---|---|---|---|
| Head of intralogistics, joined at creation | 36 months | 36 months | 100 percent | 2, probable |
| Plant manager, 15 years in a 60-year-old plant | 180 months | 720 months | 25 percent | none, title only |
| Automation lead, 7 years in a 12-year-old company | 84 months | 144 months | 58 percent | 3, influencer |
| Operations director, 5 years in an 8-year-old scale-up | 60 months | 96 months | 63 percent | 2, probable |
| Project lead, 2 years, but registered president | 24 months | 240 months | 10 percent | 1, certain (mandate wins) |

The second row is the rule in one line: 15 years means nothing, what matters is whether they were there from the start.

## Real headcount

Headcount does not set authority; it sets the ceiling of who can decide. In a 15-person company the founder decides everything and level 2 is enough. In a 3,000-person group, a 63 percent ratio on a 5-year-old subsidiary still means the person decides for that subsidiary only. Read headcount from the registry band or the export's exact figure, never infer it from the size of the office in a photo. Unknown headcount is "to verify", never a reason to cap.

## Edge cases

- Merger or acquisition: company age restarts at the merged entity's registration date only if the person's role moved to the new entity. Otherwise keep the original entity. Store both and flag "merger" for the human.
- Subsidiary of a foreign group: resolve the local legal entity, not the parent. The local managing director is level 1 for local budgets; the parent's VP is out of scope unless the deal is group-wide.
- Second founder joining at month 6 of a 5-year-old company: ratio 90 percent, level 2, and usually also level 1 once the registry is read. Read the registry anyway.
- Interim manager: high title, ratio under 10 percent, no mandate. Level none. Interims spend other people's budgets only with a sponsor; find the sponsor.
- Public bodies and cooperatives: mandates exist in a different register (statutes, board minutes). Level 1 requires the published board list, otherwise fall back to level 2.

## Failure table

| What went wrong | Why | Fix |
|---|---|---|
| 94 percent of B and C capped as non-decision-makers | Headcount unknown in 73 percent of rows, scorer downgraded by caution | Unknown headcount is "to verify"; add the registry pass |
| Registry returned 0 for the company | Searched by trade name | Resolve the entity by domain or directory first |
| Founder tiered as influencer | Ratio computed on the brand's "founded" year, not the entity's | Use the registry founding date |
| Long-tenured employee tiered as decision-maker | Absolute years used instead of ratio | Ratio only, no years |
| Interim CEO scored certain | Title matched the mandate keyword list | Mandates come from the registry, not from the title |

## When to retune the 60 and 35 thresholds

Only with data: after at least 200 rows scored and 60 replies, compute positive-reply rate per level. If level 3 replies as well as level 2, lower the level-2 threshold toward 50 percent. If level 2 replies like "none", raise it toward 70 percent. Retune once per quarter, not per campaign.
