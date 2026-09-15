#!/usr/bin/env bash
# Re-encode each showcased site's own hero/background video — the files under
# public/sites/*/assets/**/*.mp4 that the frame-bank engine (see any site's
# index.html, function createClip) fetches in full before it can decode-once
# and start scrubbing. Same measured-floor discipline as optimize-media.sh,
# applied here because a handful of these were the actual root cause of sites
# reading as "stuck" on first load — not the (already small, ~300KB average)
# grid preview clips.
#
# Root cause, measured via ffprobe before touching anything:
#   cortexa/assets/video/hero.mp4 .......... 21.3 Mbps, 1080p24, 8s -> 21.4MB
#   mirage/assets/video/mirage-plate-720p.mp4 17.4 Mbps, 1080p24, 8s -> 17.4MB
#   aegis/assets/video/aegis-hero.mp4 ...... 17.2 Mbps, 1080p24, 8s -> 17.2MB
#   sorrel, helixway ....................... ~7.4 Mbps, 1080p24, 8s -> ~7.4MB
#   kiln/assets/hero-hd.mp4 ................ 5.1 Mbps -> 6.1MB
# A typical good-quality web H.264 encode of 1080p24 sits at 2-6 Mbps. These
# are mezzanine/near-lossless exports shipped as-is, not a web delivery encode
# — the file itself never got the pass the preview clips already got.
#
# Requires ffmpeg. Run from the repo root: bash scripts/optimize-hero-videos.sh
set -euo pipefail

FLOOR=0.985
OUT=${OUT:-.opt-hero}
mkdir -p "$OUT"

ssim_of() { # $1 encoded  $2 reference
  ffmpeg -v error -i "$1" -i "$2" -lavfi "ssim=stats_file=-" -f null - 2>/dev/null \
    | tail -1 | grep -o "All:[0-9.]*" | cut -d: -f2
}

encode() { # $1 src  $2 dst  $3 crf
  ffmpeg -y -v error -i "$1" -c:v libx264 -crf "$3" -preset slow \
    -pix_fmt yuv420p -an -movflags +faststart -f mp4 "$2"
}

total_o=0; total_n=0
# Collect the list first so a later step (checking against App source) can
# cross-reference exactly which files got touched.
mapfile -t files < <(find public/sites -iname "*.mp4" | sort)

for src in "${files[@]}"; do
  rel="${src#public/sites/}"
  dst="$OUT/$rel"
  mkdir -p "$(dirname "$dst")"
  kept="original"
  # Most-compressed first, same as optimize-media.sh — take the smallest file
  # that still clears the SSIM floor, only backing off toward higher quality
  # (lower crf) when a more aggressive pass doesn't hold up.
  for crf in 26 24 22 20 18; do
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
  printf "%-55s %7dKB -> %7dKB  %s\n" "$rel" $((o/1024)) $((n/1024)) "$kept"
done

echo
echo "TOTAL $((total_o/1048576))MB -> $((total_n/1048576))MB  ($((total_n*100/total_o))%)"
echo "Review $OUT/, then copy each file back over its public/sites/<id>/... original."
