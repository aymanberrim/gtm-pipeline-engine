# Homogeneity test

Purpose: decide, before any copy is written, whether one message can speak to every person in a group. The test is cheap, takes 5 minutes per group, and is the single point where most outbound campaigns fail without knowing it.

## The test

1. Pick 3 people at random from the group. Random, not the 3 best fits; the point is to find the person the message will miss.
2. Write the problem sentence in the form the first paragraph will use: "As the [role], you [loop they are stuck in]."
3. For each of the 3, answer: would this person read the sentence and say "yes, that is my week"? A "sort of" counts as no.
4. 3 out of 3: the group is homogeneous, write the message. 2 out of 3: find what the third person has that the others do not; that attribute is the missing segmentation axis. 1 or 0 out of 3: the group is a list, not a segment. Re-segment.
5. Repeat with 3 new people once the message is drafted. The drafted message adds detail (the tool it plugs into, the part it takes over) that can break homogeneity a problem sentence passed.

Truth rule: if the message does not speak to someone in the group, exactly one of two things is wrong. Either the segmentation (the group is too heterogeneous, split it) or the angle (the group is fine, the problem sentence is not their problem). Softening the message so it offends nobody is not a third option; it produces a message that speaks to nobody.

## Segmentation axes, in order of how often they change the message

| Axis | Changes the message? | Example split |
|---|---|---|
| Role relative to the tool (rung 1, 2, 3 of the ladder) | Almost always | Plant director vs fleet administrator vs picking process owner |
| Which process the person owns | Often, inside rung 3 | Inbound vs picking vs replenishment vs maintenance |
| Incumbent tool (from stack detection) | Often, when the hook is "we plug into X" | Sites on WMS vendor A vs sites on WMS vendor B vs no WMS |
| Company shape (site count, automation level, 3PL vs own DC) | Sometimes | Single-site operator vs multi-site network |
| Country or language | Only the language of the message, never the argument | Same template, translated |
| First name, company name | Never | Merge fields, not segments |

## Re-segmentation moves

- Split on the axis that the failing member revealed. If the third person is a maintenance manager in a group of picking owners, "process owned" is the axis.
- Merge two small groups only if the problem sentence is true for both; a 6 plus 4 merge that fails the test is worse than two 1:1 lists.
- Demote to 1:1: a group under about 15 people, or any group where no problem sentence reaches 3 out of 3, is written by hand per person. Defaults to tune.
- Park: a group of the right size that fails on angle, not on composition, waits until an angle exists. Do not send a weak message to keep the calendar.

## Sizing defaults

| Size | Treatment | Why |
|---|---|---|
| Under 15 | 1:1 list, no template | The template costs more than the 15 messages |
| 15 to 80 | One template plus 1:1 layer | Enough to read a reply rate after 60 sends |
| Over 80 | Probably two groups; rerun the test | A single problem sentence rarely holds for 80 people across companies |

The measured campaign ran a 31-person core in 5 groups of 16, 6, 4, 3 and 2. The three smallest were, in effect, 1:1 lists that shared a template for structure. Tune the bounds once you have reply data per group size.

## The failed group

A group labelled "process owners" for an IT service-management product held incident managers, problem managers, change managers and configuration (CMDB) managers, about a dozen people. The problem sentence written for it was "As the process owner, your tickets bounce between teams before they reach the right one". True for the incident managers, marginal for the problem managers, false for the change and configuration managers, whose week is approvals and data quality, not ticket routing. One angle could not speak to all four. The group did not reply. The fix was two groups: incident and problem owners on the triage angle, change owners on the "change to knowledge base" angle, with the configuration managers demoted to 1:1.

Transposed: a warehouse-robotics vendor writing to "operations managers" at European distributors finds the same four-way split inside: inbound, picking, replenishment, maintenance. The picking owner's loop (aisle congestion, pickers waiting on replenishment) and the maintenance owner's (fleet downtime, spare parts) share no sentence.

## Worked examples

Clean: 22 fleet or WMS administrators at 3PLs across three countries. Problem sentence: "As the WMS administrator, every new automation cell means another integration you maintain by hand." 3 of 3, then 3 of 3 on the draft. One template, three languages.

Edge: 41 "operations directors" at grocery distributors. First test 2 of 3; the third runs a single-site cross-dock with no picking. Axis found: site type. Split into 33 (full DC) and 8 (cross-dock, moved to 1:1).

Went wrong: 95 people grouped as "automation contacts" from a title keyword. Test 1 of 3: one integrator's engineer (should have been excluded upstream), one plant director, one line operator. No axis fixes this; the group was never a segment. Returned to decision-maker-authority for company class and rung.

## Failure table

| Symptom | Cause | Move |
|---|---|---|
| 2 of 3 pass, cannot name the axis | The failing person's attribute is not in the data | Enrich it, retest |
| Message gets vaguer in review | Fitting a heterogeneous group | Split, do not soften |
| Group passes, no replies | Angle problem | Rewrite the loop, keep the group |
| Every group under 10 | Over-segmentation | Merge on the problem sentence, not the title |
