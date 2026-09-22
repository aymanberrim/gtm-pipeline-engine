#!/usr/bin/env bash
# Installs the upstream skills declared in library/manifest.json into the current agent.
# Usage: tools/install-library.sh [-a claude-code|cursor|codex] [--stage 4-engage]
# Requires: node, npx. Upstream: https://github.com/swan-gtm/gtm-skills (MIT).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
AGENT_FLAG=""; STAGE=""
while [[ $# -gt 0 ]]; do
  case "$1" in
    -a) AGENT_FLAG="-a $2"; shift 2;;
    --stage) STAGE="$2"; shift 2;;
    *) echo "unknown arg $1"; exit 1;;
  esac
done
node -e '
  const m = require(process.argv[1]);
  const stage = process.argv[2];
  for (const s of m.skills) if (!stage || s.stage === stage) console.log(s.name);
' "$ROOT/library/manifest.json" "$STAGE" | while read -r name; do
  echo ">> $name"
  npx --yes skills add swan-gtm/gtm-skills --skill "$name" $AGENT_FLAG
done
