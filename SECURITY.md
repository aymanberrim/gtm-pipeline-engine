# Security

Skills in this repo are instructions that agents execute against live CRMs, inboxes and company data. The following are rejected on sight, in this repo and in any skill it links to:

- Sending data to an endpoint, inbox or webhook the operator does not own.
- Hardcoded secrets, tokens, or third-party URLs that receive data.
- Prompt-injection patterns ("ignore previous instructions", disabling approval gates).
- Sending, purchasing enrichment, or deleting records without an explicit human approval step.
- Asking end users for credentials.

Public data sources used by `stack-detection` (DNS records, certificate-transparency logs, HTTP headers, company registries, directories) are read-only and rate-limited by design; the skill never authenticates to, probes, or scans a target beyond a normal client request.

To report a problem with a skill here, open an issue titled `security:` with the file path and the line. For an upstream skill, report to its source repository.
