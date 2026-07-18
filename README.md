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

1. [法国 不想踢 (France doesn’t want to play)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%20%E4%B8%8D%E6%83%B3%E8%B8%A2%23) `2.7M 🔥` `NEW`
1. [法国门将 没睡醒](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E9%97%A8%E5%B0%86%20%E6%B2%A1%E7%9D%A1%E9%86%92%23) `613.1K 🔥` `NEW`
1. [英格兰又进了](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E5%8F%88%E8%BF%9B%E4%BA%86%23) `517.5K 🔥` `NEW`
1. [白云山小柴胡护航进球欢呼时刻](https://s.weibo.com/weibo?q=%23%E7%99%BD%E4%BA%91%E5%B1%B1%E5%B0%8F%E6%9F%B4%E8%83%A1%E6%8A%A4%E8%88%AA%E8%BF%9B%E7%90%83%E6%AC%A2%E5%91%BC%E6%97%B6%E5%88%BB%23) `318.6K 🔥` `NEW`
1. [法国半场0比4英格兰](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E5%8D%8A%E5%9C%BA0%E6%AF%944%E8%8B%B1%E6%A0%BC%E5%85%B0%23) `270.4K 🔥` `NEW`
1. [法国 惨案](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%20%E6%83%A8%E6%A1%88%23) `140.1K 🔥` `NEW`
1. [图赫尔怎么还不上六后卫](https://s.weibo.com/weibo?q=%23%E5%9B%BE%E8%B5%AB%E5%B0%94%E6%80%8E%E4%B9%88%E8%BF%98%E4%B8%8D%E4%B8%8A%E5%85%AD%E5%90%8E%E5%8D%AB%23) `104.0K 🔥` `NEW`
1. [英格兰4球领先](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B04%E7%90%83%E9%A2%86%E5%85%88%23) `64.2K 🔥` `NEW`
1. [萨卡梅开二度](https://s.weibo.com/weibo?q=%23%E8%90%A8%E5%8D%A1%E6%A2%85%E5%BC%80%E4%BA%8C%E5%BA%A6%23) `48.5K 🔥` `NEW`
1. [国家一级保护动物蜂猴很萌但有毒](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E4%B8%80%E7%BA%A7%E4%BF%9D%E6%8A%A4%E5%8A%A8%E7%89%A9%E8%9C%82%E7%8C%B4%E5%BE%88%E8%90%8C%E4%BD%86%E6%9C%89%E6%AF%92%23) `48.5K 🔥` `NEW`
1. [法国队摆烂 (France team sucks)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E9%98%9F%E6%91%86%E7%83%82%23) `48.5K 🔥` `NEW`
1. [王俊凯演唱会卡点结束](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E5%8D%A1%E7%82%B9%E7%BB%93%E6%9D%9F%23) `48.3K 🔥` `NEW`
1. [法国vs英格兰 (France vs England)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BDvs%E8%8B%B1%E6%A0%BC%E5%85%B0%23) `5.4M 🔥` `+309%`
1. [超300款AI新品迎来全球首发 (Over 300 new AI products make their global debut)](https://s.weibo.com/weibo?q=%23%E8%B6%85300%E6%AC%BEAI%E6%96%B0%E5%93%81%E8%BF%8E%E6%9D%A5%E5%85%A8%E7%90%83%E9%A6%96%E5%8F%91%23) `1.1M 🔥` `+426%`
1. [王楚钦孙颖莎止步半决赛 (Wang Chuqin and Sun Yingsha stopped in the semi-finals)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E6%AD%A2%E6%AD%A5%E5%8D%8A%E5%86%B3%E8%B5%9B%23) `222.7K 🔥` `+46%`
1. [刘宇宁说以后会加倍注意](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E8%AF%B4%E4%BB%A5%E5%90%8E%E4%BC%9A%E5%8A%A0%E5%80%8D%E6%B3%A8%E6%84%8F%23) `157.6K 🔥` `+70%`
1. [英法大战变英法小战了](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%B3%95%E5%A4%A7%E6%88%98%E5%8F%98%E8%8B%B1%E6%B3%95%E5%B0%8F%E6%88%98%E4%BA%86%23) `153.4K 🔥` `+167%`
1. [女儿一个谎让父亲坐了两年牢](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E4%B8%80%E4%B8%AA%E8%B0%8E%E8%AE%A9%E7%88%B6%E4%BA%B2%E5%9D%90%E4%BA%86%E4%B8%A4%E5%B9%B4%E7%89%A2%23) `148.9K 🔥` `+159%`
1. [英法小战](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%B3%95%E5%B0%8F%E6%88%98%23) `120.0K 🔥` `+96%`
1. [世界杯季军将获2900万美元奖金](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%AD%A3%E5%86%9B%E5%B0%86%E8%8E%B72900%E4%B8%87%E7%BE%8E%E5%85%83%E5%A5%96%E9%87%91%23) `78.9K 🔥` `+90%`
1. [上海暴雨 (Heavy rain in Shanghai)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E6%9A%B4%E9%9B%A8%23) `76.0K 🔥` `+53%`
1. [警方调查女子称多次被黄总喊去包厢 (Police investigate woman's claim that she was called to the box by Mr. Huang many times)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E8%B0%83%E6%9F%A5%E5%A5%B3%E5%AD%90%E7%A7%B0%E5%A4%9A%E6%AC%A1%E8%A2%AB%E9%BB%84%E6%80%BB%E5%96%8A%E5%8E%BB%E5%8C%85%E5%8E%A2%23) `71.0K 🔥` `+60%`
1. [龚俊回应和刘宇宁争议](https://s.weibo.com/weibo?q=%23%E9%BE%9A%E4%BF%8A%E5%9B%9E%E5%BA%94%E5%92%8C%E5%88%98%E5%AE%87%E5%AE%81%E4%BA%89%E8%AE%AE%23) `70.8K 🔥` `+70%`
1. [空调开26度有臭味原因找到了](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E8%B0%83%E5%BC%8026%E5%BA%A6%E6%9C%89%E8%87%AD%E5%91%B3%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `70.5K 🔥` `+69%`
1. [降低身体炎症水平的食物 (Foods that reduce inflammation levels in the body)](https://s.weibo.com/weibo?q=%23%E9%99%8D%E4%BD%8E%E8%BA%AB%E4%BD%93%E7%82%8E%E7%97%87%E6%B0%B4%E5%B9%B3%E7%9A%84%E9%A3%9F%E7%89%A9%23) `69.7K 🔥` `+68%`
1. [欧文称阿根廷晋级靠运气](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E6%96%87%E7%A7%B0%E9%98%BF%E6%A0%B9%E5%BB%B7%E6%99%8B%E7%BA%A7%E9%9D%A0%E8%BF%90%E6%B0%94%23) `60.6K 🔥` `+46%`
1. [下半年过得最爽的星座 (The zodiac sign that has the best time in the second half of the year)](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E5%8D%8A%E5%B9%B4%E8%BF%87%E5%BE%97%E6%9C%80%E7%88%BD%E7%9A%84%E6%98%9F%E5%BA%A7%23) `55.4K 🔥` `+33%`
1. [阿根廷主帅不满赛事方时间安排 (Argentina coach dissatisfied with match schedule)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%B8%BB%E5%B8%85%E4%B8%8D%E6%BB%A1%E8%B5%9B%E4%BA%8B%E6%96%B9%E6%97%B6%E9%97%B4%E5%AE%89%E6%8E%92%23) `52.7K 🔥` `+27%`
1. [赖斯进球 (Rice scores a goal)](https://s.weibo.com/weibo?q=%23%E8%B5%96%E6%96%AF%E8%BF%9B%E7%90%83%23) `335.6K 🔥`
1. [爱喝酒的人天塌了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%96%9D%E9%85%92%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `94.7K 🔥`
1. [已经绝交的朋友教会我的事](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E7%BB%8F%E7%BB%9D%E4%BA%A4%E7%9A%84%E6%9C%8B%E5%8F%8B%E6%95%99%E4%BC%9A%E6%88%91%E7%9A%84%E4%BA%8B%23) `75.0K 🔥`
1. [王俊凯演唱会退场天才](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E9%80%80%E5%9C%BA%E5%A4%A9%E6%89%8D%23) `74.3K 🔥`
1. [不要向提供经济价值的人索要情绪价值 (Don’t ask for emotional value from someone who provides financial value)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E5%90%91%E6%8F%90%E4%BE%9B%E7%BB%8F%E6%B5%8E%E4%BB%B7%E5%80%BC%E7%9A%84%E4%BA%BA%E7%B4%A2%E8%A6%81%E6%83%85%E7%BB%AA%E4%BB%B7%E5%80%BC%23) `68.3K 🔥`
1. [人在幸福的时候真的会少发朋友圈吗 (Do people really post less on WeChat Moments when they are happy?)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%9C%A8%E5%B9%B8%E7%A6%8F%E7%9A%84%E6%97%B6%E5%80%99%E7%9C%9F%E7%9A%84%E4%BC%9A%E5%B0%91%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%90%97%23) `56.0K 🔥`
1. [世界上最天才的文旅宣传语一定是](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%B8%8A%E6%9C%80%E5%A4%A9%E6%89%8D%E7%9A%84%E6%96%87%E6%97%85%E5%AE%A3%E4%BC%A0%E8%AF%AD%E4%B8%80%E5%AE%9A%E6%98%AF%23) `54.6K 🔥`
1. [为什么父母觉得我们工作容易 (Why do parents think it’s easy for us to work?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%88%B6%E6%AF%8D%E8%A7%89%E5%BE%97%E6%88%91%E4%BB%AC%E5%B7%A5%E4%BD%9C%E5%AE%B9%E6%98%93%23) `48.5K 🔥`
1. [莫氏鸡煲老板晒账本回应倒闭](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E6%99%92%E8%B4%A6%E6%9C%AC%E5%9B%9E%E5%BA%94%E5%80%92%E9%97%AD%23) `48.5K 🔥`
1. [女子吃小龙虾绿松石美甲变银翘片 (Woman's turquoise manicure turns silvery after eating crayfish)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%90%83%E5%B0%8F%E9%BE%99%E8%99%BE%E7%BB%BF%E6%9D%BE%E7%9F%B3%E7%BE%8E%E7%94%B2%E5%8F%98%E9%93%B6%E7%BF%98%E7%89%87%23) `48.5K 🔥`
1. [王楚钦孙颖莎2比3袁励岑王艺迪](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E2%E6%AF%943%E8%A2%81%E5%8A%B1%E5%B2%91%E7%8E%8B%E8%89%BA%E8%BF%AA%23) `48.5K 🔥`
1. [想你了票房倒挂](https://s.weibo.com/weibo?q=%23%E6%83%B3%E4%BD%A0%E4%BA%86%E7%A5%A8%E6%88%BF%E5%80%92%E6%8C%82%23) `48.4K 🔥`
1. [发现很多KTV都没有MV了 (I found that many KTVs no longer have MVs)](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%BE%88%E5%A4%9AKTV%E9%83%BD%E6%B2%A1%E6%9C%89MV%E4%BA%86%23) `48.4K 🔥`
1. [功夫女足](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%23) `48.4K 🔥`
1. [丁程鑫王楚然认识几年了](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E7%8E%8B%E6%A5%9A%E7%84%B6%E8%AE%A4%E8%AF%86%E5%87%A0%E5%B9%B4%E4%BA%86%23) `48.4K 🔥`
1. [冉莹颖说邹市明现在不是奥运冠军了 (Ran Yingying said Zou Shiming is no longer an Olympic champion.)](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E8%AF%B4%E9%82%B9%E5%B8%82%E6%98%8E%E7%8E%B0%E5%9C%A8%E4%B8%8D%E6%98%AF%E5%A5%A5%E8%BF%90%E5%86%A0%E5%86%9B%E4%BA%86%23) `48.4K 🔥`
1. [八仙剧本 (Eight Immortals Script)](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%E5%89%A7%E6%9C%AC%23) `48.4K 🔥`
1. [富人的孩子确实更容易高配得感](https://s.weibo.com/weibo?q=%23%E5%AF%8C%E4%BA%BA%E7%9A%84%E5%AD%A9%E5%AD%90%E7%A1%AE%E5%AE%9E%E6%9B%B4%E5%AE%B9%E6%98%93%E9%AB%98%E9%85%8D%E5%BE%97%E6%84%9F%23) `48.3K 🔥`
1. [36岁女子确诊食管癌半年后去世 (36-year-old woman dies six months after being diagnosed with esophageal cancer)](https://s.weibo.com/weibo?q=%2336%E5%B2%81%E5%A5%B3%E5%AD%90%E7%A1%AE%E8%AF%8A%E9%A3%9F%E7%AE%A1%E7%99%8C%E5%8D%8A%E5%B9%B4%E5%90%8E%E5%8E%BB%E4%B8%96%23) `48.3K 🔥`
1. [袁励岑王艺迪晋级决赛 (Yuan Lizen and Wang Yidi advance to the finals)](https://s.weibo.com/weibo?q=%23%E8%A2%81%E5%8A%B1%E5%B2%91%E7%8E%8B%E8%89%BA%E8%BF%AA%E6%99%8B%E7%BA%A7%E5%86%B3%E8%B5%9B%23) `48.3K 🔥`
1. [马龙许昕晋级四强](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95%E6%99%8B%E7%BA%A7%E5%9B%9B%E5%BC%BA%23) `48.3K 🔥`
1. [重庆彭水山体崩塌搜救进展 (Progress in search and rescue of Pengshui mountain collapse in Chongqing)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%BD%AD%E6%B0%B4%E5%B1%B1%E4%BD%93%E5%B4%A9%E5%A1%8C%E6%90%9C%E6%95%91%E8%BF%9B%E5%B1%95%23) `48.3K 🔥`
1. [美媒称中国抹去美国在AI领域领先地位](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AA%92%E7%A7%B0%E4%B8%AD%E5%9B%BD%E6%8A%B9%E5%8E%BB%E7%BE%8E%E5%9B%BD%E5%9C%A8AI%E9%A2%86%E5%9F%9F%E9%A2%86%E5%85%88%E5%9C%B0%E4%BD%8D%23) `48.3K 🔥`

Updated at 2026-07-19 06:11:22

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
