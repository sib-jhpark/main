# Two-State MBRL Media Assets Guide

Drop rendered MuJoCo videos into `public/assets/videos/` and figures into `public/assets/figures/` using the exact filenames below. Missing files automatically render informative placeholder cards; once files are added, the page switches to real media with zero code changes.

## Videos (`public/assets/videos/`)
Recommended encoding: **MP4 (H.264 / `yuv420p`)**, **720p (`1280×720`)**, **≤ 5 MB each**, muted (`-an`), fast-start (`-movflags +faststart`).

- `teaser.mp4` — Hero 16:9 teaser montage
- `polybag_central_1st.mp4` — First-Attempt Delivery (central placement)
- `polybag_corner_retry.mp4` — Same-Object Retry Recovery (corner)
- `polybag_challenging_pose.mp4` — Challenging Orientation Recovery
- `polybag_failure_case.mp4` — Representative Failure Case
- `ball_direct_pick.mp4` — Direct Target Pick (0 wrong balls)
- `ball_clutter_clearance.mp4` — Clutter Handling
- `ball_retry_recovery.mp4` — Same-Target Retry
- `crate_continuous.mp4` — Continuous H1-2 dual-hand crate transport (88/90/92 cm)
- `cylinder_9zone.mp4` — 9-zone Unitree H1 + Shadow Hand grasp-and-hold

```bash
ffmpeg -i input.mp4 -vf "scale=1280:-2" -c:v libx264 -pix_fmt yuv420p -crf 24 -an -movflags +faststart public/assets/videos/teaser.mp4
```

## Figures (`public/assets/figures/`)
- `architecture.png` — High-level Two-State MBRL concept overview (inline SVG fallback shown until provided)
- `polybag_learning_curve.png` — Polybag 10,000-round online learning curve
- `ball_learning_curve.png` — Three-Ball 10,000-round online learning curve
