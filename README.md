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

1. [黄雅琼怀孕 (Huang Yaqiong is pregnant)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%9B%85%E7%90%BC%E6%80%80%E5%AD%95%23) `2.5M 🔥` `NEW`
1. [王楚钦爆冷不敌张煜东](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%88%86%E5%86%B7%E4%B8%8D%E6%95%8C%E5%BC%A0%E7%85%9C%E4%B8%9C%23) `2.5M 🔥` `NEW`
1. [景德镇手工瓷业遗存列入世界遗产](https://s.weibo.com/weibo?q=%23%E6%99%AF%E5%BE%B7%E9%95%87%E6%89%8B%E5%B7%A5%E7%93%B7%E4%B8%9A%E9%81%97%E5%AD%98%E5%88%97%E5%85%A5%E4%B8%96%E7%95%8C%E9%81%97%E4%BA%A7%23) `2.0M 🔥` `NEW`
1. [学英语就是为了看懂这种笑话](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E8%8B%B1%E8%AF%AD%E5%B0%B1%E6%98%AF%E4%B8%BA%E4%BA%86%E7%9C%8B%E6%87%82%E8%BF%99%E7%A7%8D%E7%AC%91%E8%AF%9D%23) `854.6K 🔥` `NEW`
1. [超话夏日次元会](https://s.weibo.com/weibo?q=%23%E8%B6%85%E8%AF%9D%E5%A4%8F%E6%97%A5%E6%AC%A1%E5%85%83%E4%BC%9A%23) `848.3K 🔥` `NEW`
1. [宋威龙现偶一年双爆](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E7%8E%B0%E5%81%B6%E4%B8%80%E5%B9%B4%E5%8F%8C%E7%88%86%23) `512.4K 🔥` `NEW`
1. [丁程鑫一只手戴戒指一只手戴支具](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E4%B8%80%E5%8F%AA%E6%89%8B%E6%88%B4%E6%88%92%E6%8C%87%E4%B8%80%E5%8F%AA%E6%89%8B%E6%88%B4%E6%94%AF%E5%85%B7%23) `506.1K 🔥` `NEW`
1. [王楚钦1比2张煜东](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A61%E6%AF%942%E5%BC%A0%E7%85%9C%E4%B8%9C%23) `497.1K 🔥` `NEW`
1. [郭碧婷称你们最好永远误解](https://s.weibo.com/weibo?q=%23%E9%83%AD%E7%A2%A7%E5%A9%B7%E7%A7%B0%E4%BD%A0%E4%BB%AC%E6%9C%80%E5%A5%BD%E6%B0%B8%E8%BF%9C%E8%AF%AF%E8%A7%A3%23) `482.8K 🔥` `NEW`
1. [恋与深空敖尹](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E6%95%96%E5%B0%B9%23) `470.0K 🔥` `NEW`
1. [国羽众将祝福黄雅琼刘雨辰 (The national feather generals wish Huang Yaqiong and Liu Yuchen)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E7%BE%BD%E4%BC%97%E5%B0%86%E7%A5%9D%E7%A6%8F%E9%BB%84%E9%9B%85%E7%90%BC%E5%88%98%E9%9B%A8%E8%BE%B0%23) `464.8K 🔥` `NEW`
1. [宋威龙觉得和张婧仪缺一个婚纱照](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E8%A7%89%E5%BE%97%E5%92%8C%E5%BC%A0%E5%A9%A7%E4%BB%AA%E7%BC%BA%E4%B8%80%E4%B8%AA%E5%A9%9A%E7%BA%B1%E7%85%A7%23) `460.0K 🔥` `NEW`
1. [王腾谈携程被罚51.79亿](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%85%BE%E8%B0%88%E6%90%BA%E7%A8%8B%E8%A2%AB%E7%BD%9A51.79%E4%BA%BF%23) `278.0K 🔥` `NEW`
1. [欧盟宣布4年来最大规模对俄制裁](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E7%9B%9F%E5%AE%A3%E5%B8%834%E5%B9%B4%E6%9D%A5%E6%9C%80%E5%A4%A7%E8%A7%84%E6%A8%A1%E5%AF%B9%E4%BF%84%E5%88%B6%E8%A3%81%23) `277.8K 🔥` `NEW`
1. [武汉高官之子香港洗钱被判入狱6年多](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E9%AB%98%E5%AE%98%E4%B9%8B%E5%AD%90%E9%A6%99%E6%B8%AF%E6%B4%97%E9%92%B1%E8%A2%AB%E5%88%A4%E5%85%A5%E7%8B%B16%E5%B9%B4%E5%A4%9A%23) `277.7K 🔥` `NEW`
1. [台风红霞](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%BA%A2%E9%9C%9E%23) `277.2K 🔥` `NEW`
1. [曲婉婷点赞冰雪女王梗](https://s.weibo.com/weibo?q=%23%E6%9B%B2%E5%A9%89%E5%A9%B7%E7%82%B9%E8%B5%9E%E5%86%B0%E9%9B%AA%E5%A5%B3%E7%8E%8B%E6%A2%97%23) `277.0K 🔥` `NEW`
1. [英伟达与SK集团推出5000亿美元AI计划](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E4%B8%8ESK%E9%9B%86%E5%9B%A2%E6%8E%A8%E5%87%BA5000%E4%BA%BF%E7%BE%8E%E5%85%83AI%E8%AE%A1%E5%88%92%23) `276.8K 🔥` `NEW`
1. [TOP青岛演唱会伴手礼](https://s.weibo.com/weibo?q=%23TOP%E9%9D%92%E5%B2%9B%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BC%B4%E6%89%8B%E7%A4%BC%23) `276.7K 🔥` `NEW`
1. [苏新皓青岛演唱会现场红海](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E9%9D%92%E5%B2%9B%E6%BC%94%E5%94%B1%E4%BC%9A%E7%8E%B0%E5%9C%BA%E7%BA%A2%E6%B5%B7%23) `276.3K 🔥` `NEW`
1. [王一博排位赛结束 (Wang Yibo’s qualifying match ends)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%8E%92%E4%BD%8D%E8%B5%9B%E7%BB%93%E6%9D%9F%23) `276.2K 🔥` `NEW`
1. [邓煜母亲在菲尔兹奖现场发朋友圈](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%85%9C%E6%AF%8D%E4%BA%B2%E5%9C%A8%E8%8F%B2%E5%B0%94%E5%85%B9%E5%A5%96%E7%8E%B0%E5%9C%BA%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `272.9K 🔥` `NEW`
1. [功夫女足票房破18亿](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A5%A8%E6%88%BF%E7%A0%B418%E4%BA%BF%23) `251.7K 🔥` `NEW`
1. [10岁孩子救了一栋楼](https://s.weibo.com/weibo?q=%2310%E5%B2%81%E5%AD%A9%E5%AD%90%E6%95%91%E4%BA%86%E4%B8%80%E6%A0%8B%E6%A5%BC%23) `242.8K 🔥` `NEW`
1. [申遗成功后中方代表嘴角压不住了](https://s.weibo.com/weibo?q=%23%E7%94%B3%E9%81%97%E6%88%90%E5%8A%9F%E5%90%8E%E4%B8%AD%E6%96%B9%E4%BB%A3%E8%A1%A8%E5%98%B4%E8%A7%92%E5%8E%8B%E4%B8%8D%E4%BD%8F%E4%BA%86%23) `209.9K 🔥` `NEW`
1. [李宏毅剧宣时的表情](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%8F%E6%AF%85%E5%89%A7%E5%AE%A3%E6%97%B6%E7%9A%84%E8%A1%A8%E6%83%85%23) `201.0K 🔥` `NEW`
1. [白鹿开到荼蘼下班换常服](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%BC%80%E5%88%B0%E8%8D%BC%E8%98%BC%E4%B8%8B%E7%8F%AD%E6%8D%A2%E5%B8%B8%E6%9C%8D%23) `186.2K 🔥` `NEW`
1. [菲尔兹奖美国得主因中文太好走红](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%B0%94%E5%85%B9%E5%A5%96%E7%BE%8E%E5%9B%BD%E5%BE%97%E4%B8%BB%E5%9B%A0%E4%B8%AD%E6%96%87%E5%A4%AA%E5%A5%BD%E8%B5%B0%E7%BA%A2%23) `183.4K 🔥` `NEW`
1. [孙红雷女儿同学问刘宇宁多高](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%BA%A2%E9%9B%B7%E5%A5%B3%E5%84%BF%E5%90%8C%E5%AD%A6%E9%97%AE%E5%88%98%E5%AE%87%E5%AE%81%E5%A4%9A%E9%AB%98%23) `180.8K 🔥` `NEW`
1. [上半年规模以上工业增加值同比增长5.4%](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%8D%8A%E5%B9%B4%E8%A7%84%E6%A8%A1%E4%BB%A5%E4%B8%8A%E5%B7%A5%E4%B8%9A%E5%A2%9E%E5%8A%A0%E5%80%BC%E5%90%8C%E6%AF%94%E5%A2%9E%E9%95%BF5.4%25%23) `177.7K 🔥` `NEW`
1. [八字弱的听完得烧三天 (Those who are weak in Bazi will feel feverish for three days after listening to it.)](https://s.weibo.com/weibo?q=%23%E5%85%AB%E5%AD%97%E5%BC%B1%E7%9A%84%E5%90%AC%E5%AE%8C%E5%BE%97%E7%83%A7%E4%B8%89%E5%A4%A9%23) `177.4K 🔥` `NEW`
1. [刘宇宁王玉雯说英语](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E7%8E%8B%E7%8E%89%E9%9B%AF%E8%AF%B4%E8%8B%B1%E8%AF%AD%23) `171.5K 🔥` `NEW`
1. [TheShy回应Xiaohu](https://s.weibo.com/weibo?q=%23TheShy%E5%9B%9E%E5%BA%94Xiaohu%23) `164.5K 🔥` `NEW`
1. [凡人修仙传](https://s.weibo.com/weibo?q=%23%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0%23) `157.1K 🔥` `NEW`
1. [山西运城一路面塌陷处现大量白骨](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E8%BF%90%E5%9F%8E%E4%B8%80%E8%B7%AF%E9%9D%A2%E5%A1%8C%E9%99%B7%E5%A4%84%E7%8E%B0%E5%A4%A7%E9%87%8F%E7%99%BD%E9%AA%A8%23) `151.9K 🔥` `NEW`
1. [24岁女孩地包天做手术反成鞋拔子脸](https://s.weibo.com/weibo?q=%2324%E5%B2%81%E5%A5%B3%E5%AD%A9%E5%9C%B0%E5%8C%85%E5%A4%A9%E5%81%9A%E6%89%8B%E6%9C%AF%E5%8F%8D%E6%88%90%E9%9E%8B%E6%8B%94%E5%AD%90%E8%84%B8%23) `666.8K 🔥` `+137%`
1. [孔雪儿一个人努力好心酸](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E4%B8%80%E4%B8%AA%E4%BA%BA%E5%8A%AA%E5%8A%9B%E5%A5%BD%E5%BF%83%E9%85%B8%23) `488.1K 🔥` `+69%`
1. [夏天千万不要把食物敞开放](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E5%A4%A9%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E6%8A%8A%E9%A3%9F%E7%89%A9%E6%95%9E%E5%BC%80%E6%94%BE%23) `276.6K 🔥` `+55%`
1. [曝讲真打布洛芬 (Exposed to tell the truth about taking ibuprofen)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%AE%B2%E7%9C%9F%E6%89%93%E5%B8%83%E6%B4%9B%E8%8A%AC%23) `277.4K 🔥`
1. [郭碧婷说什么叫我给人家生孩子 (What did Guo Biting ask me to give birth to?)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E7%A2%A7%E5%A9%B7%E8%AF%B4%E4%BB%80%E4%B9%88%E5%8F%AB%E6%88%91%E7%BB%99%E4%BA%BA%E5%AE%B6%E7%94%9F%E5%AD%A9%E5%AD%90%23) `277.4K 🔥`
1. [特朗普称詹姆斯是种族主义者](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E8%A9%B9%E5%A7%86%E6%96%AF%E6%98%AF%E7%A7%8D%E6%97%8F%E4%B8%BB%E4%B9%89%E8%80%85%23) `270.0K 🔥`
1. [王冰冰再演短剧](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%86%B0%E5%86%B0%E5%86%8D%E6%BC%94%E7%9F%AD%E5%89%A7%23) `269.6K 🔥`
1. [特朗普宣布新一轮加征关税 (Trump announces new round of tariffs)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%AE%A3%E5%B8%83%E6%96%B0%E4%B8%80%E8%BD%AE%E5%8A%A0%E5%BE%81%E5%85%B3%E7%A8%8E%23) `149.4K 🔥`
1. [AI血检提前15年预警心脏病](https://s.weibo.com/weibo?q=%23AI%E8%A1%80%E6%A3%80%E6%8F%90%E5%89%8D15%E5%B9%B4%E9%A2%84%E8%AD%A6%E5%BF%83%E8%84%8F%E7%97%85%23) `148.8K 🔥`
1. [携程被罚51.79亿 (Ctrip was fined 5.179 billion)](https://s.weibo.com/weibo?q=%23%E6%90%BA%E7%A8%8B%E8%A2%AB%E7%BD%9A51.79%E4%BA%BF%23) `1.9M 🔥` `-83%`
1. [泡面 换水](https://s.weibo.com/weibo?q=%23%E6%B3%A1%E9%9D%A2%20%E6%8D%A2%E6%B0%B4%23) `1.3M 🔥` `-37%`
1. [除了玩手机还有这么多低成本爱好](https://s.weibo.com/weibo?q=%23%E9%99%A4%E4%BA%86%E7%8E%A9%E6%89%8B%E6%9C%BA%E8%BF%98%E6%9C%89%E8%BF%99%E4%B9%88%E5%A4%9A%E4%BD%8E%E6%88%90%E6%9C%AC%E7%88%B1%E5%A5%BD%23) `843.1K 🔥` `-51%`
1. [携程回应被罚51.79亿](https://s.weibo.com/weibo?q=%23%E6%90%BA%E7%A8%8B%E5%9B%9E%E5%BA%94%E8%A2%AB%E7%BD%9A51.79%E4%BA%BF%23) `242.6K 🔥` `-74%`
1. [王楚钦vs张煜东](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E5%BC%A0%E7%85%9C%E4%B8%9C%23) `179.2K 🔥` `-82%`
1. [国乒 身体透支](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%20%E8%BA%AB%E4%BD%93%E9%80%8F%E6%94%AF%23) `176.5K 🔥` `-40%`
1. [携程为何挨了最重的罚](https://s.weibo.com/weibo?q=%23%E6%90%BA%E7%A8%8B%E4%B8%BA%E4%BD%95%E6%8C%A8%E4%BA%86%E6%9C%80%E9%87%8D%E7%9A%84%E7%BD%9A%23) `155.8K 🔥` `-29%`

Updated at 2026-07-25 14:58:48

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
