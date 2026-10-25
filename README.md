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

1. [iG与TES双双晋级2-1组](https://s.weibo.com/weibo?q=%23iG%E4%B8%8ETES%E5%8F%8C%E5%8F%8C%E6%99%8B%E7%BA%A72-1%E7%BB%84%23) `240.7K 🔥` `NEW`
1. [TES战胜G2](https://s.weibo.com/weibo?q=%23TES%E6%88%98%E8%83%9CG2%23) `174.5K 🔥` `NEW`
1. [奇妙相遇 加你更好](https://s.weibo.com/weibo?q=%23%E5%A5%87%E5%A6%99%E7%9B%B8%E9%81%87%20%E5%8A%A0%E4%BD%A0%E6%9B%B4%E5%A5%BD%23) `83.7K 🔥` `NEW`
1. [众解说看TES战胜G2反应](https://s.weibo.com/weibo?q=%23%E4%BC%97%E8%A7%A3%E8%AF%B4%E7%9C%8BTES%E6%88%98%E8%83%9CG2%E5%8F%8D%E5%BA%94%23) `71.8K 🔥` `NEW`
1. [369团战拉扯助TES击败G2](https://s.weibo.com/weibo?q=%23369%E5%9B%A2%E6%88%98%E6%8B%89%E6%89%AF%E5%8A%A9TES%E5%87%BB%E8%B4%A5G2%23) `52.9K 🔥` `NEW`
1. [369瓦场悟道再立奇功](https://s.weibo.com/weibo?q=%23369%E7%93%A6%E5%9C%BA%E6%82%9F%E9%81%93%E5%86%8D%E7%AB%8B%E5%A5%87%E5%8A%9F%23) `31.6K 🔥` `NEW`
1. [强烈建议给家里老人用苹果手机](https://s.weibo.com/weibo?q=%23%E5%BC%BA%E7%83%88%E5%BB%BA%E8%AE%AE%E7%BB%99%E5%AE%B6%E9%87%8C%E8%80%81%E4%BA%BA%E7%94%A8%E8%8B%B9%E6%9E%9C%E6%89%8B%E6%9C%BA%23) `31.6K 🔥` `NEW`
1. [TES力克LEC一号种子G2](https://s.weibo.com/weibo?q=%23TES%E5%8A%9B%E5%85%8BLEC%E4%B8%80%E5%8F%B7%E7%A7%8D%E5%AD%90G2%23) `31.6K 🔥` `NEW`
1. [这么大一勺居然一点没沾到瓶子](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B9%88%E5%A4%A7%E4%B8%80%E5%8B%BA%E5%B1%85%E7%84%B6%E4%B8%80%E7%82%B9%E6%B2%A1%E6%B2%BE%E5%88%B0%E7%93%B6%E5%AD%90%23) `31.6K 🔥` `NEW`
1. [Kanavi被逮捕到无暇赴死](https://s.weibo.com/weibo?q=%23Kanavi%E8%A2%AB%E9%80%AE%E6%8D%95%E5%88%B0%E6%97%A0%E6%9A%87%E8%B5%B4%E6%AD%BB%23) `31.6K 🔥` `NEW`
1. [HLE再输就止步16强](https://s.weibo.com/weibo?q=%23HLE%E5%86%8D%E8%BE%93%E5%B0%B1%E6%AD%A2%E6%AD%A516%E5%BC%BA%23) `30.9K 🔥` `NEW`
1. [Meiko璐璐闪现变羊](https://s.weibo.com/weibo?q=%23Meiko%E7%92%90%E7%92%90%E9%97%AA%E7%8E%B0%E5%8F%98%E7%BE%8A%23) `28.7K 🔥` `NEW`
1. [曼联近6次对阵伯恩茅斯不胜](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E8%81%94%E8%BF%916%E6%AC%A1%E5%AF%B9%E9%98%B5%E4%BC%AF%E6%81%A9%E8%8C%85%E6%96%AF%E4%B8%8D%E8%83%9C%23) `28.7K 🔥` `NEW`
1. [西藏巴青地震抢险安置工作一刻没停](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E5%B7%B4%E9%9D%92%E5%9C%B0%E9%9C%87%E6%8A%A2%E9%99%A9%E5%AE%89%E7%BD%AE%E5%B7%A5%E4%BD%9C%E4%B8%80%E5%88%BB%E6%B2%A1%E5%81%9C%23) `137.3K 🔥` `+21%`
1. [iG战胜HLE晋级2-1组](https://s.weibo.com/weibo?q=%23iG%E6%88%98%E8%83%9CHLE%E6%99%8B%E7%BA%A72-1%E7%BB%84%23) `72.0K 🔥`
1. [蔡康永依旧没有说一句我是中国人](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BA%B7%E6%B0%B8%E4%BE%9D%E6%97%A7%E6%B2%A1%E6%9C%89%E8%AF%B4%E4%B8%80%E5%8F%A5%E6%88%91%E6%98%AF%E4%B8%AD%E5%9B%BD%E4%BA%BA%23) `62.2K 🔥`
1. [刘宇宁神级出场](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E7%A5%9E%E7%BA%A7%E5%87%BA%E5%9C%BA%23) `42.7K 🔥`
1. [黄子韬我结婚生子碍你事了吗](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E6%88%91%E7%BB%93%E5%A9%9A%E7%94%9F%E5%AD%90%E7%A2%8D%E4%BD%A0%E4%BA%8B%E4%BA%86%E5%90%97%23) `68.6K 🔥` `-32%`
1. [凭什么领克能拿七年十六冠](https://s.weibo.com/weibo?q=%23%E5%87%AD%E4%BB%80%E4%B9%88%E9%A2%86%E5%85%8B%E8%83%BD%E6%8B%BF%E4%B8%83%E5%B9%B4%E5%8D%81%E5%85%AD%E5%86%A0%23) `68.4K 🔥` `-79%`
1. [张智霖与前女友许秋怡世纪合体](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%99%BA%E9%9C%96%E4%B8%8E%E5%89%8D%E5%A5%B3%E5%8F%8B%E8%AE%B8%E7%A7%8B%E6%80%A1%E4%B8%96%E7%BA%AA%E5%90%88%E4%BD%93%23) `63.1K 🔥` `-37%`
1. [白桃星座一周运势](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%A1%83%E6%98%9F%E5%BA%A7%E4%B8%80%E5%91%A8%E8%BF%90%E5%8A%BF%23) `49.2K 🔥` `-58%`
1. [徐艺洋赶来安抚黄子韬的情绪](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E8%B5%B6%E6%9D%A5%E5%AE%89%E6%8A%9A%E9%BB%84%E5%AD%90%E9%9F%AC%E7%9A%84%E6%83%85%E7%BB%AA%23) `49.1K 🔥` `-33%`
1. [16岁女儿书包翻出避孕药妈妈崩溃](https://s.weibo.com/weibo?q=%2316%E5%B2%81%E5%A5%B3%E5%84%BF%E4%B9%A6%E5%8C%85%E7%BF%BB%E5%87%BA%E9%81%BF%E5%AD%95%E8%8D%AF%E5%A6%88%E5%A6%88%E5%B4%A9%E6%BA%83%23) `48.8K 🔥` `-26%`
1. [林俊杰杨幂 茉莉雨](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E6%9D%A8%E5%B9%82%20%E8%8C%89%E8%8E%89%E9%9B%A8%23) `48.6K 🔥` `-51%`
1. [24岁女子赴泰见男网友被绑往边境](https://s.weibo.com/weibo?q=%2324%E5%B2%81%E5%A5%B3%E5%AD%90%E8%B5%B4%E6%B3%B0%E8%A7%81%E7%94%B7%E7%BD%91%E5%8F%8B%E8%A2%AB%E7%BB%91%E5%BE%80%E8%BE%B9%E5%A2%83%23) `48.5K 🔥` `-37%`
1. [TheShy让队友很舒服](https://s.weibo.com/weibo?q=%23TheShy%E8%AE%A9%E9%98%9F%E5%8F%8B%E5%BE%88%E8%88%92%E6%9C%8D%23) `46.2K 🔥` `-59%`
1. [HLE](https://s.weibo.com/weibo?q=%23HLE%23) `41.6K 🔥` `-41%`
1. [曼联0比3伯恩茅斯](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E8%81%940%E6%AF%943%E4%BC%AF%E6%81%A9%E8%8C%85%E6%96%AF%23) `39.5K 🔥` `-40%`
1. [曼联vs伯恩茅斯](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E8%81%94vs%E4%BC%AF%E6%81%A9%E8%8C%85%E6%96%AF%23) `39.4K 🔥` `-81%`
1. [不上班后发现上海才是最宜居的城市](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E4%B8%8A%E7%8F%AD%E5%90%8E%E5%8F%91%E7%8E%B0%E4%B8%8A%E6%B5%B7%E6%89%8D%E6%98%AF%E6%9C%80%E5%AE%9C%E5%B1%85%E7%9A%84%E5%9F%8E%E5%B8%82%23) `39.4K 🔥` `-22%`
1. [钟文泽 小米18Fold](https://s.weibo.com/weibo?q=%23%E9%92%9F%E6%96%87%E6%B3%BD%20%E5%B0%8F%E7%B1%B318Fold%23) `39.4K 🔥` `-43%`
1. [TES对战G2](https://s.weibo.com/weibo?q=%23TES%E5%AF%B9%E6%88%98G2%23) `39.4K 🔥` `-23%`
1. [老戏骨集体飙戏 男女主像睡着了](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%88%8F%E9%AA%A8%E9%9B%86%E4%BD%93%E9%A3%99%E6%88%8F%20%E7%94%B7%E5%A5%B3%E4%B8%BB%E5%83%8F%E7%9D%A1%E7%9D%80%E4%BA%86%23) `37.8K 🔥` `-41%`
1. [长期熬夜或是甲状腺癌诱因之一](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E7%86%AC%E5%A4%9C%E6%88%96%E6%98%AF%E7%94%B2%E7%8A%B6%E8%85%BA%E7%99%8C%E8%AF%B1%E5%9B%A0%E4%B9%8B%E4%B8%80%23) `37.5K 🔥` `-41%`
1. [iG](https://s.weibo.com/weibo?q=%23iG%23) `36.2K 🔥` `-52%`
1. [周深王者荣耀共创之夜](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E5%85%B1%E5%88%9B%E4%B9%8B%E5%A4%9C%23) `33.5K 🔥` `-23%`
1. [妻子要15万备孕丈夫酒后骂去死](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E8%A6%8115%E4%B8%87%E5%A4%87%E5%AD%95%E4%B8%88%E5%A4%AB%E9%85%92%E5%90%8E%E9%AA%82%E5%8E%BB%E6%AD%BB%23) `31.6K 🔥` `-39%`
1. [卡里克 B费](https://s.weibo.com/weibo?q=%23%E5%8D%A1%E9%87%8C%E5%85%8B%20B%E8%B4%B9%23) `31.6K 🔥` `-38%`
1. [被一株三角梅燃到了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E4%B8%80%E6%A0%AA%E4%B8%89%E8%A7%92%E6%A2%85%E7%87%83%E5%88%B0%E4%BA%86%23) `31.6K 🔥` `-39%`
1. [众解说看iG战胜HLE反应](https://s.weibo.com/weibo?q=%23%E4%BC%97%E8%A7%A3%E8%AF%B4%E7%9C%8BiG%E6%88%98%E8%83%9CHLE%E5%8F%8D%E5%BA%94%23) `31.6K 🔥` `-39%`
1. [做自媒体再也不怕被熟人刷到的方法](https://s.weibo.com/weibo?q=%23%E5%81%9A%E8%87%AA%E5%AA%92%E4%BD%93%E5%86%8D%E4%B9%9F%E4%B8%8D%E6%80%95%E8%A2%AB%E7%86%9F%E4%BA%BA%E5%88%B7%E5%88%B0%E7%9A%84%E6%96%B9%E6%B3%95%23) `31.6K 🔥` `-38%`
1. [Ning为iG鸣不平](https://s.weibo.com/weibo?q=%23Ning%E4%B8%BAiG%E9%B8%A3%E4%B8%8D%E5%B9%B3%23) `31.6K 🔥` `-38%`
1. [TheShy瑞士轮克烈](https://s.weibo.com/weibo?q=%23TheShy%E7%91%9E%E5%A3%AB%E8%BD%AE%E5%85%8B%E7%83%88%23) `31.6K 🔥` `-38%`
1. [iG打HLE赛前预测](https://s.weibo.com/weibo?q=%23iG%E6%89%93HLE%E8%B5%9B%E5%89%8D%E9%A2%84%E6%B5%8B%23) `31.6K 🔥` `-38%`
1. [TheShy回应S16焦点战](https://s.weibo.com/weibo?q=%23TheShy%E5%9B%9E%E5%BA%94S16%E7%84%A6%E7%82%B9%E6%88%98%23) `31.6K 🔥` `-69%`
1. [Jiaqi发挥无懈可击](https://s.weibo.com/weibo?q=%23Jiaqi%E5%8F%91%E6%8C%A5%E6%97%A0%E6%87%88%E5%8F%AF%E5%87%BB%23) `31.3K 🔥` `-64%`
1. [新剧开播没几天就限免](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%89%A7%E5%BC%80%E6%92%AD%E6%B2%A1%E5%87%A0%E5%A4%A9%E5%B0%B1%E9%99%90%E5%85%8D%23) `29.2K 🔥` `-59%`
1. [S16瑞士轮iG对阵HLE](https://s.weibo.com/weibo?q=%23S16%E7%91%9E%E5%A3%AB%E8%BD%AEiG%E5%AF%B9%E9%98%B5HLE%23) `28.7K 🔥` `-33%`
1. [iG和TES冲击瑞士轮两连胜](https://s.weibo.com/weibo?q=%23iG%E5%92%8CTES%E5%86%B2%E5%87%BB%E7%91%9E%E5%A3%AB%E8%BD%AE%E4%B8%A4%E8%BF%9E%E8%83%9C%23) `28.7K 🔥` `-75%`
1. [温瑞博袁励岑抗议颁奖放错国旗](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E7%91%9E%E5%8D%9A%E8%A2%81%E5%8A%B1%E5%B2%91%E6%8A%97%E8%AE%AE%E9%A2%81%E5%A5%96%E6%94%BE%E9%94%99%E5%9B%BD%E6%97%97%23) `28.7K 🔥` `-43%`

Updated at 2026-10-26 05:53:00

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
