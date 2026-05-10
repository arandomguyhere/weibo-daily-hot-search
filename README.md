# Weibo Signal Tracker

Narrative signal monitoring system that tracks Weibo trending search data with velocity analysis and lifecycle detection.

## Live Demo

**[https://arandomguyhere.github.io/weibo-daily-hot-search](https://arandomguyhere.github.io/weibo-daily-hot-search)**

Browse historical trending data with status badges, velocity indicators, and category filters.

## Features

- **Signal tracking**: Scrapes Weibo trending every 5 minutes, tracks up to 100 topics per day
- **Lifecycle detection**: Each topic tagged as `NEW`, `RISING`, `HOT`, `FALLING`, or `GONE`
- **Velocity analysis**: Percentage change between scrapes shows acceleration/deceleration
- **Suppression detection**: Topics that disappear from the feed are marked as `GONE`
- **English translations**: Auto-translated via Google Translate for non-Chinese readers
- **Dark mode + filters**: Filter by status category, search by Chinese or English text
- **Engagement metrics**: Top topics enriched with likes, comments, and reposts from related posts

## Today's Hot Searches

<!-- BEGIN -->

1. [孙颖莎世乒赛个人全胜 (Sun Yingsha wins individually at World Table Tennis Championships)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E4%B8%96%E4%B9%92%E8%B5%9B%E4%B8%AA%E4%BA%BA%E5%85%A8%E8%83%9C%23) `39.4K 🔥` `NEW`
1. [国乒一晚双冠](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E4%B8%80%E6%99%9A%E5%8F%8C%E5%86%A0%23) `39.3K 🔥` `NEW`
1. [国乒男团3比0大胜日本](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A23%E6%AF%940%E5%A4%A7%E8%83%9C%E6%97%A5%E6%9C%AC%23) `1.9M 🔥` `+148%`
1. [国乒男团12连冠 (National table tennis men's team wins 12th consecutive championship)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A212%E8%BF%9E%E5%86%A0%23) `541.8K 🔥` `+93%`
1. [中国潜水器发现深海生命绿洲 (Chinese submersible discovers deep-sea oasis of life)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%BD%9C%E6%B0%B4%E5%99%A8%E5%8F%91%E7%8E%B0%E6%B7%B1%E6%B5%B7%E7%94%9F%E5%91%BD%E7%BB%BF%E6%B4%B2%23) `370.3K 🔥` `+143%`
1. [身体的炎症全部消失22个tips (22 tips to make all inflammation in your body disappear)](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BD%93%E7%9A%84%E7%82%8E%E7%97%87%E5%85%A8%E9%83%A8%E6%B6%88%E5%A4%B122%E4%B8%AAtips%23) `323.9K 🔥` `+148%`
1. [王曼昱说孙颖莎站了出来](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E8%AF%B4%E5%AD%99%E9%A2%96%E8%8E%8E%E7%AB%99%E4%BA%86%E5%87%BA%E6%9D%A5%23) `288.5K 🔥` `+97%`
1. [盼弟 来弟](https://s.weibo.com/weibo?q=%23%E7%9B%BC%E5%BC%9F%20%E6%9D%A5%E5%BC%9F%23) `243.9K 🔥` `+75%`
1. [辛芷蕾代言大众含金量飙升 (Xin Zhilei’s endorsement of Volkswagen has soared)](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%E4%BB%A3%E8%A8%80%E5%A4%A7%E4%BC%97%E5%90%AB%E9%87%91%E9%87%8F%E9%A3%99%E5%8D%87%23) `215.2K 🔥` `+105%`
1. [梁靖崑逆转张本智和](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%91%E9%80%86%E8%BD%AC%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `212.1K 🔥` `+180%`
1. [孙颖莎新世纪中国女乒单届最佳战绩](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%96%B0%E4%B8%96%E7%BA%AA%E4%B8%AD%E5%9B%BD%E5%A5%B3%E4%B9%92%E5%8D%95%E5%B1%8A%E6%9C%80%E4%BD%B3%E6%88%98%E7%BB%A9%23) `147.2K 🔥` `+59%`
1. [睫毛掉进眼睛里钙化了 (Eyelashes fell into eyes and became calcified)](https://s.weibo.com/weibo?q=%23%E7%9D%AB%E6%AF%9B%E6%8E%89%E8%BF%9B%E7%9C%BC%E7%9D%9B%E9%87%8C%E9%92%99%E5%8C%96%E4%BA%86%23) `132.6K 🔥` `+30%`
1. [阿森纳](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A3%AE%E7%BA%B3%23) `125.9K 🔥` `+65%`
1. [王楚钦回应国乒男团夺冠](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%9B%9E%E5%BA%94%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E5%A4%BA%E5%86%A0%23) `125.9K 🔥` `+238%`
1. [王曼昱哭了 (Wang Manyu cried)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%93%AD%E4%BA%86%23) `121.6K 🔥` `+60%`
1. [村民被眼镜王蛇咬伤打了13支血清](https://s.weibo.com/weibo?q=%23%E6%9D%91%E6%B0%91%E8%A2%AB%E7%9C%BC%E9%95%9C%E7%8E%8B%E8%9B%87%E5%92%AC%E4%BC%A4%E6%89%93%E4%BA%8613%E6%94%AF%E8%A1%80%E6%B8%85%23) `120.3K 🔥` `+58%`
1. [林诗栋vs户上隼辅 (Lin Shidong vs. Togami Hayabusa)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8Bvs%E6%88%B7%E4%B8%8A%E9%9A%BC%E8%BE%85%23) `115.6K 🔥` `+67%`
1. [王楚钦vs松岛辉空 (Wang Chuqin vs. Matsushima Terukong)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%23) `113.8K 🔥` `+92%`
1. [世乒赛收视率破8 (World Table Tennis Championships ratings break 8)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E4%B9%92%E8%B5%9B%E6%94%B6%E8%A7%86%E7%8E%87%E7%A0%B48%23) `95.7K 🔥` `+80%`
1. [王楚钦说一切都值得 (Wang Chuqin said everything is worth it)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%AF%B4%E4%B8%80%E5%88%87%E9%83%BD%E5%80%BC%E5%BE%97%23) `93.2K 🔥` `+67%`
1. [吃出24块鸡头顾客被免单仍想市监介入 (The customer who ate 24 pieces of chicken head was exempted from the order but still wants the city supervisor to intervene)](https://s.weibo.com/weibo?q=%23%E5%90%83%E5%87%BA24%E5%9D%97%E9%B8%A1%E5%A4%B4%E9%A1%BE%E5%AE%A2%E8%A2%AB%E5%85%8D%E5%8D%95%E4%BB%8D%E6%83%B3%E5%B8%82%E7%9B%91%E4%BB%8B%E5%85%A5%23) `88.4K 🔥` `+30%`
1. [梁靖崑vs张本智和 (Liang Jingkun vs Zhang Benzhihe)](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%91vs%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `78.1K 🔥` `+113%`
1. [汉坦病毒邮轮零号病人身份曝光 (Hantavirus cruise ship patient zero’s identity revealed)](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%E9%82%AE%E8%BD%AE%E9%9B%B6%E5%8F%B7%E7%97%85%E4%BA%BA%E8%BA%AB%E4%BB%BD%E6%9B%9D%E5%85%89%23) `77.9K 🔥` `+82%`
1. [身体有炎症要忌口4种食物 (4 foods to avoid if you have inflammation in your body)](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BD%93%E6%9C%89%E7%82%8E%E7%97%87%E8%A6%81%E5%BF%8C%E5%8F%A34%E7%A7%8D%E9%A3%9F%E7%89%A9%23) `77.8K 🔥` `+110%`
1. [水谷隼盛赞孙颖莎伟大](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E8%B0%B7%E9%9A%BC%E7%9B%9B%E8%B5%9E%E5%AD%99%E9%A2%96%E8%8E%8E%E4%BC%9F%E5%A4%A7%23) `77.3K 🔥` `+29%`
1. [主角收视率 (Protagonist ratings)](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%E6%94%B6%E8%A7%86%E7%8E%87%23) `76.2K 🔥` `+90%`
1. [中国妇女报评OPPO母亲节文案](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A6%87%E5%A5%B3%E6%8A%A5%E8%AF%84OPPO%E6%AF%8D%E4%BA%B2%E8%8A%82%E6%96%87%E6%A1%88%23) `69.9K 🔥` `+87%`
1. [孙颖莎MVP](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8EMVP%23) `58.4K 🔥` `+37%`
1. [中国男团vs日本 (Chinese men's team vs Japan)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%9B%A2vs%E6%97%A5%E6%9C%AC%23) `58.3K 🔥` `+50%`
1. [国乒女团7连冠](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A27%E8%BF%9E%E5%86%A0%23) `57.9K 🔥` `+50%`
1. [马龙许昕为孙颖莎鼓掌](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95%E4%B8%BA%E5%AD%99%E9%A2%96%E8%8E%8E%E9%BC%93%E6%8E%8C%23) `55.5K 🔥` `+75%`
1. [伊朗称国产潜艇在霍尔木兹执行任务](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%9B%BD%E4%BA%A7%E6%BD%9C%E8%89%87%E5%9C%A8%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%89%A7%E8%A1%8C%E4%BB%BB%E5%8A%A1%23) `55.4K 🔥` `+74%`
1. [要对存钱有概念](https://s.weibo.com/weibo?q=%23%E8%A6%81%E5%AF%B9%E5%AD%98%E9%92%B1%E6%9C%89%E6%A6%82%E5%BF%B5%23) `54.9K 🔥` `+64%`
1. [孙颖莎哽咽了 (Sun Yingsha choked up)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%93%BD%E5%92%BD%E4%BA%86%23) `49.9K 🔥` `+27%`
1. [梁家辉方回应接触狩谎](https://s.weibo.com/weibo?q=%23%E6%A2%81%E5%AE%B6%E8%BE%89%E6%96%B9%E5%9B%9E%E5%BA%94%E6%8E%A5%E8%A7%A6%E7%8B%A9%E8%B0%8E%23) `45.3K 🔥` `+63%`
1. [90岁外公强撑目送外孙婚车后安详离世](https://s.weibo.com/weibo?q=%2390%E5%B2%81%E5%A4%96%E5%85%AC%E5%BC%BA%E6%92%91%E7%9B%AE%E9%80%81%E5%A4%96%E5%AD%99%E5%A9%9A%E8%BD%A6%E5%90%8E%E5%AE%89%E8%AF%A6%E7%A6%BB%E4%B8%96%23) `42.8K 🔥` `+56%`
1. [永远可以相信中国乒乓 (You can always trust China Table Tennis)](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E8%BF%9C%E5%8F%AF%E4%BB%A5%E7%9B%B8%E4%BF%A1%E4%B8%AD%E5%9B%BD%E4%B9%92%E4%B9%93%23) `40.4K 🔥` `+41%`
1. [林诗栋11比9户上隼辅](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B11%E6%AF%949%E6%88%B7%E4%B8%8A%E9%9A%BC%E8%BE%85%23) `40.3K 🔥` `+46%`
1. [孙颖莎vs张本美和 (Sun Yingsha vs. Zhang Benmeihe)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Evs%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `39.4K 🔥` `+50%`
1. [伦敦赛场再奏义勇军进行曲](https://s.weibo.com/weibo?q=%23%E4%BC%A6%E6%95%A6%E8%B5%9B%E5%9C%BA%E5%86%8D%E5%A5%8F%E4%B9%89%E5%8B%87%E5%86%9B%E8%BF%9B%E8%A1%8C%E6%9B%B2%23) `39.4K 🔥` `+22%`
1. [主角 (main character)](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `39.3K 🔥` `+48%`
1. [林诗栋3比1户上隼辅](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B3%E6%AF%941%E6%88%B7%E4%B8%8A%E9%9A%BC%E8%BE%85%23) `39.3K 🔥` `+28%`
1. [国乒男女团双杀日本](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%A5%B3%E5%9B%A2%E5%8F%8C%E6%9D%80%E6%97%A5%E6%9C%AC%23) `39.3K 🔥` `+29%`
1. [马琳指导哭了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E7%90%B3%E6%8C%87%E5%AF%BC%E5%93%AD%E4%BA%86%23) `39.3K 🔥` `+49%`
1. [西汉姆联vs阿森纳](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%B1%89%E5%A7%86%E8%81%94vs%E9%98%BF%E6%A3%AE%E7%BA%B3%23) `39.3K 🔥` `+47%`
1. [国乒男团世乒赛团体冠军 (National Table Tennis Men's Team World Table Tennis Championships Team Champion)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E4%B8%96%E4%B9%92%E8%B5%9B%E5%9B%A2%E4%BD%93%E5%86%A0%E5%86%9B%23) `39.3K 🔥` `+27%`
1. [梁靖崑让二追三的神 (Liang Jingkun lets two men chase three gods)](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%91%E8%AE%A9%E4%BA%8C%E8%BF%BD%E4%B8%89%E7%9A%84%E7%A5%9E%23) `116.6K 🔥`
1. [王楚钦3比1胜松岛辉空 (Wang Chuqin defeated Matsushima Terukora 3-1)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A63%E6%AF%941%E8%83%9C%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%23) `61.0K 🔥`
1. [马龙终于松了一口气 (Malone finally breathed a sigh of relief)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E7%BB%88%E4%BA%8E%E6%9D%BE%E4%BA%86%E4%B8%80%E5%8F%A3%E6%B0%94%23) `53.0K 🔥`
1. [国乒男团做到了](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E5%81%9A%E5%88%B0%E4%BA%86%23) `50.7K 🔥`
1. [我不买开口榴莲的原因](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%B8%8D%E4%B9%B0%E5%BC%80%E5%8F%A3%E6%A6%B4%E8%8E%B2%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `39.4K 🔥`

Updated at 2026-05-11 06:25:08

<!-- END -->

## Data Reference

### Directory Structure

```
├── raw/                    # Raw JSON data
│   └── YYYY-MM-DD.json     # Daily hot search data
├── index.html              # GitHub Pages frontend
├── mod.ts                  # Scraping script (Deno)
├── bridge.py               # Data bridge to WeiboInsight/MongoDB
└── WeiboInsight/           # Submodule: Playwright-based deep analysis
```

### Data Format

Daily JSON format (`raw/YYYY-MM-DD.json`):

```json
[
  {
    "url": "/weibo?q=%23Topic%23",
    "text": "Topic",
    "textEn": "Topic in English",
    "count": 1234567,
    "firstSeen": "2026-02-07T08:15:00.000Z",
    "peakCount": 1500000,
    "prevCount": 900000,
    "status": "rising",
    "velocity": 37,
    "engagement": { "posts": 15, "likes": 45200, "comments": 3100, "reposts": 8900 }
  }
]
```

| Field | Description |
|-------|-------------|
| `url` | Weibo search link path |
| `text` | Trending topic text (Chinese) |
| `textEn` | English translation (optional) |
| `count` | Heat value from Weibo API |
| `firstSeen` | ISO timestamp when topic first appeared today |
| `peakCount` | Highest count recorded for this topic today |
| `prevCount` | Count from previous scrape cycle |
| `status` | Lifecycle stage: `new`, `rising`, `hot`, `falling`, `gone` |
| `velocity` | Percentage change from previous scrape |
| `engagement` | Post engagement metrics (top 10 topics): posts, likes, comments, reposts |

## Tech Stack

- **Runtime**: [Deno](https://deno.land/)
- **Automation**: GitHub Actions (cron)
- **Frontend**: Vanilla HTML/CSS/JavaScript
- **Hosting**: GitHub Pages

## Local Development

```bash
# Install Deno
curl -fsSL https://deno.land/install.sh | sh

# Run the scraper
deno run --allow-net --allow-read --allow-write --import-map=import_map.json mod.ts
```

## WeiboInsight Integration

This project includes [WeiboInsight](https://github.com/arandomguyhere/WeiboInsight) as a submodule for deep NLP analysis of trending topics.

**What each project does:**
- **weibo-daily-hot-search** — Lightweight Deno scraper that tracks trending topics every 5 min via JSON APIs, with lifecycle/velocity analysis
- **WeiboInsight** — Python/Playwright-based scraper with Scrapy pipelines, MongoDB storage, Jieba segmentation, LDA topic modeling, and K-Means clustering

**How they connect:**
1. This scraper collects trending topics + engagement data every 5 minutes
2. `bridge.py` imports the JSON data into MongoDB with text segmentation
3. WeiboInsight's `analyze_weibo_data.py` runs NLP analysis on the imported data

```bash
# Setup
git submodule update --init
cd WeiboInsight && pip install -r requirements.txt && cd ..
pip install pymongo jieba

# Import data into MongoDB
python bridge.py --all

# Run NLP analysis
cd WeiboInsight/scrapy_project
python analyze_weibo_data.py
```

## Related Projects

- [WeiboInsight](https://github.com/arandomguyhere/WeiboInsight) — Playwright-based Weibo CTI analysis
- [V2EX Daily Hot Topics](https://github.com/boojack/v2ex-daily-hot-topic)
- [jackylee1/weibo-daily-hot-search](https://github.com/jackylee1/weibo-daily-hot-search) — Original project

## License

MIT
