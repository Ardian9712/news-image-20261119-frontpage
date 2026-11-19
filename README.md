# The World in One Day — 19 November 2026

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/Ardian9712/news-image-20261119-frontpage/rank.svg)](https://make.fun/bounty/news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/Ardian9712/news-image-20261119-frontpage/reward.svg)](https://make.fun/bounty/news-image-20261119)

A colorful editorial front page headed **“THE WORLD IN ONE DAY”** and dated **Thursday, 19 November 2026**. A large diplomatic scene, two illustrated story panels, three short briefs, and a world map bring six stories into one square image.

![The World in One Day — Thursday, 19 November 2026](entry.png)

## What the image shows

1. **APEC in Shenzhen:** the hero panel depicts Donald Trump, Xi Jinping, and Vladimir Putin, with headlines about their meeting and three-way talks at the summit.
2. **GTA VI launch day:** a neon city and sports car accompany the launch-day headline and a caption naming Rockstar, PS5, and Xbox.
3. **Iran, Kuwait, and Bahrain:** a missile illustration accompanies the headline about Iran targeting US facilities in Kuwait and Bahrain; the caption connects the Gulf escalation with a US strike on Qeshm.
4. **Anthropic IPO:** a short financial brief displays **$83** and **$81.3B**.
5. **International Court of Justice:** a brief reads **“ICJ: MYANMAR COMMITTED GENOCIDE”**.
6. **Crimea bridge:** the brief reads **“Crimea bridge hit, Russia says,”** retaining the attribution to Russia.

The hero is marked **“Editorial illustration.”** Contrasting colors, bold headlines, rounded panels, and the blue world map provide visual structure for the day's mix of diplomacy, entertainment, conflict, finance, and law.

## Competition

Built for [make.fun: “Sum up 19 November's world news in one image”](https://make.fun/bounty/news-image-20261119), competition **news-image-20261119**. Entry is free, the reward pool is **$250**, and the **top 50** places are paid. The deadline is **21 November 2026, 07:00 WIB (00:00 UTC)**.

The AI pairwise judge has no news feed and reads the image alone. Its criteria emphasize that day's recognizable news and names, a visible date, selection and breadth, standalone clarity, factual restraint, and craftsmanship legible at roughly 300 pixels.

## Run

Use Node.js 22.18+ or 24+. No dependencies need installing.

```sh
npm start
# Or choose an output directory:
MAKEFUN_OUTPUT_DIR=./output node main.ts
```

`main.ts` resolves the source `entry.png` relative to its own directory, copies it byte for byte to `MAKEFUN_OUTPUT_DIR/entry.png` (default `./output/entry.png`), then reads the output's JPEG header to verify dimensions of exactly **1024×1024**. It prints the verified path, dimensions, and byte count, and makes no network calls. Relative output directories are resolved from the working directory.

The supplied `entry.png` is a **JPEG despite its filename**, measuring 1024×1024 and 434,338 bytes. Its SHA-256 is:

```text
9ab3c037cb317332028a54285feb77fbf7bb6dce943fcc8a2f5266561f2a4a27
```

Licensed under the [MIT license](LICENSE).

---

make.fun referral link: [https://make.fun/r/p8atzycs](https://make.fun/r/p8atzycs).
