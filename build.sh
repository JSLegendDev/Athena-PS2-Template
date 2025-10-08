#!/usr/bin/env bash
set -euo pipefail

SCRIPT_NAME="$(basename "$0")"
TMPDIR="$(mktemp -d)"
ZIPFILE="$TMPDIR/all_files.zip"
EXTRACTDIR="$TMPDIR/extract"
OUTPUTDIR="build"
ISOFILE="$OUTPUTDIR/output.iso"

REQUIRED_CMDS=(zip unzip genisoimage)

missing=()
for c in "${REQUIRED_CMDS[@]}"; do
  if ! command -v "$c" >/dev/null 2>&1; then
    missing+=("$c")
  fi
done

if [ ${#missing[@]} -ne 0 ]; then
  echo "Missing required commands: ${missing[*]}"
  echo "Installing missing packages via apt"
  sudo apt update -y
  sudo apt install -y "${missing[@]}"
fi

if [ -d "$OUTPUTDIR" ]; then
  echo "Removing existing '$OUTPUTDIR' directory"
  rm -rf "$OUTPUTDIR"
fi

mkdir -p "$OUTPUTDIR"
mkdir -p "$EXTRACTDIR"

echo "[1/3] Creating ZIP of current directory"
zip -r "$ZIPFILE" . -x "$SCRIPT_NAME" "$OUTPUTDIR/*" >/dev/null

echo "[2/3] Extracting ZIP to temporary folder"
unzip -q "$ZIPFILE" -d "$EXTRACTDIR"

echo "[3/3] Creating ISO at '$ISOFILE'"
genisoimage -o "$ISOFILE" -V "PROJECT" -J -r "$EXTRACTDIR"

rm -rf "$TMPDIR"

echo "Done! ISO created at -> '$ISOFILE'."
