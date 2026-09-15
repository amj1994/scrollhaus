#!/usr/bin/env bash
# Re-encode public/previews/*.mp4 and public/banner.mp4, keeping a measured
# quality floor. Requires ffmpeg.
#
# Why a floor and not just a CRF: at crf28 five of the seventy previews dropped
# below SSIM 0.985 against their source (morphos fell to 0.929 — visible), and
# four of those were ALREADY encoded tighter than x264 could match at an
# acceptable quality, so re-encoding them made the file BIGGER. This script
# therefore measures every output and keeps the original whenever the re-encode
# either fails the quality floor or fails to save bytes.
#
# Measured result on the current set: 20.2MB -> 16.1MB (79%), no file below
# SSIM 0.985. Run from the repo root:  bash scripts/optimize-media.sh
set -euo pipefail

FLOOR=0.985
OUT=${OUT:-.opt}
mkdir -p "$OUT/previews"

ssim_of() { # $1 encoded  $2 reference
  ffmpeg -v error -i "$1" -i "$2" -lavfi "ssim=stats_file=-" -f null - 2>/dev/null \
    | tail -1 | grep -o "All:[0-9.]*" | cut -d: -f2
}

encode() { # $1 src  $2 dst  $3 crf
  ffmpeg -y -v error -i "$1" -c:v libx264 -crf "$3" -preset slow \
    -pix_fmt yuv420p -an -movflags +faststart "$2"
}

total_o=0; total_n=0
for src in public/previews/*.mp4; do
  base=$(basename "$src"); dst="$OUT/previews/$base"; kept="original"
  for crf in 28 24 22; do
    encode "$src" "$dst.try" "$crf"
    o=$(stat -c%s "$src"); n=$(stat -c%s "$dst.try")
    s=$(ssim_of "$dst.try" "$src")
    if awk "BEGIN{exit !($s >= $FLOOR && $n < $o)}"; then
      mv "$dst.try" "$dst"; kept="crf$crf (SSIM $s)"; break
    fi
    rm -f "$dst.try"
  done
  [ "$kept" = "original" ] && cp "$src" "$dst"
  o=$(stat -c%s "$src"); n=$(stat -c%s "$dst")
  total_o=$((total_o+o)); total_n=$((total_n+n))
  printf "%-28s %6dKB -> %6dKB  %s\n" "$base" $((o/1024)) $((n/1024)) "$kept"
done

# The banner is a single larger file; same rule.
encode public/banner.mp4 "$OUT/banner.mp4" 28
bs=$(ssim_of "$OUT/banner.mp4" public/banner.mp4)
bo=$(stat -c%s public/banner.mp4); bn=$(stat -c%s "$OUT/banner.mp4")
if awk "BEGIN{exit !($bs >= $FLOOR && $bn < $bo)}"; then
  printf "%-28s %6dKB -> %6dKB  crf28 (SSIM %s)\n" banner.mp4 $((bo/1024)) $((bn/1024)) "$bs"
  total_o=$((total_o+bo)); total_n=$((total_n+bn))
else
  cp public/banner.mp4 "$OUT/banner.mp4"; echo "banner.mp4 kept original (SSIM $bs)"
fi

echo
echo "TOTAL $((total_o/1048576))MB -> $((total_n/1048576))MB  ($((total_n*100/total_o))%)"
echo "Review $OUT/, then: cp -r $OUT/previews/* public/previews/ && cp $OUT/banner.mp4 public/"
