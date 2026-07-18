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

1. [张凌赫阿维塔全球代言人首选07L (Zhang Linghe is the first choice for Avita’s global spokesperson 07L)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%98%BF%E7%BB%B4%E5%A1%94%E5%85%A8%E7%90%83%E4%BB%A3%E8%A8%80%E4%BA%BA%E9%A6%96%E9%80%8907L%23) `663.7K 🔥` `NEW`
1. [发现很多KTV都没有MV了](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%BE%88%E5%A4%9AKTV%E9%83%BD%E6%B2%A1%E6%9C%89MV%E4%BA%86%23) `663.6K 🔥` `NEW`
1. [白鹿海边度假](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%B5%B7%E8%BE%B9%E5%BA%A6%E5%81%87%23) `324.2K 🔥` `NEW`
1. [内存条悄然降价](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%AD%98%E6%9D%A1%E6%82%84%E7%84%B6%E9%99%8D%E4%BB%B7%23) `321.4K 🔥` `NEW`
1. [日本通过修正案拒绝女性天皇](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%80%9A%E8%BF%87%E4%BF%AE%E6%AD%A3%E6%A1%88%E6%8B%92%E7%BB%9D%E5%A5%B3%E6%80%A7%E5%A4%A9%E7%9A%87%23) `320.7K 🔥` `NEW`
1. [乒协试行为会员提供购票观赛服务](https://s.weibo.com/weibo?q=%23%E4%B9%92%E5%8D%8F%E8%AF%95%E8%A1%8C%E4%B8%BA%E4%BC%9A%E5%91%98%E6%8F%90%E4%BE%9B%E8%B4%AD%E7%A5%A8%E8%A7%82%E8%B5%9B%E6%9C%8D%E5%8A%A1%23) `319.5K 🔥` `NEW`
1. [女孩称要告父亲强奸遭杀害](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E7%A7%B0%E8%A6%81%E5%91%8A%E7%88%B6%E4%BA%B2%E5%BC%BA%E5%A5%B8%E9%81%AD%E6%9D%80%E5%AE%B3%23) `318.6K 🔥` `NEW`
1. [世界杯三四名奖金差200万美元](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E4%B8%89%E5%9B%9B%E5%90%8D%E5%A5%96%E9%87%91%E5%B7%AE200%E4%B8%87%E7%BE%8E%E5%85%83%23) `317.6K 🔥` `NEW`
1. [苏州文旅看到后天塌了](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E5%B7%9E%E6%96%87%E6%97%85%E7%9C%8B%E5%88%B0%E5%90%8E%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `315.4K 🔥` `NEW`
1. [王俊凯演唱会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%94%B1%E4%BC%9A%23) `311.0K 🔥` `NEW`
1. [26岁女子双子宫双阴道备孕3年失败 (A 26-year-old woman's pregnancy attempts failed after 3 years with double uterus and double vagina.)](https://s.weibo.com/weibo?q=%2326%E5%B2%81%E5%A5%B3%E5%AD%90%E5%8F%8C%E5%AD%90%E5%AE%AB%E5%8F%8C%E9%98%B4%E9%81%93%E5%A4%87%E5%AD%953%E5%B9%B4%E5%A4%B1%E8%B4%A5%23) `277.4K 🔥` `NEW`
1. [LV法务假扮消费者买包后起诉百货店](https://s.weibo.com/weibo?q=%23LV%E6%B3%95%E5%8A%A1%E5%81%87%E6%89%AE%E6%B6%88%E8%B4%B9%E8%80%85%E4%B9%B0%E5%8C%85%E5%90%8E%E8%B5%B7%E8%AF%89%E7%99%BE%E8%B4%A7%E5%BA%97%23) `272.2K 🔥` `NEW`
1. [小鹿老公辟谣不孕](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%BF%E8%80%81%E5%85%AC%E8%BE%9F%E8%B0%A3%E4%B8%8D%E5%AD%95%23) `267.5K 🔥` `NEW`
1. [功夫女足](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%23) `267.2K 🔥` `NEW`
1. [原来慕强是基因问题](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%85%95%E5%BC%BA%E6%98%AF%E5%9F%BA%E5%9B%A0%E9%97%AE%E9%A2%98%23) `264.7K 🔥` `NEW`
1. [八仙票房](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%E7%A5%A8%E6%88%BF%23) `237.5K 🔥` `NEW`
1. [RNGM对战DYG](https://s.weibo.com/weibo?q=%23RNGM%E5%AF%B9%E6%88%98DYG%23) `220.3K 🔥` `NEW`
1. [你所在公司不宜久待的信号](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%89%80%E5%9C%A8%E5%85%AC%E5%8F%B8%E4%B8%8D%E5%AE%9C%E4%B9%85%E5%BE%85%E7%9A%84%E4%BF%A1%E5%8F%B7%23) `207.8K 🔥` `NEW`
1. [机器人手机从概念到现实意味着什么](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%89%8B%E6%9C%BA%E4%BB%8E%E6%A6%82%E5%BF%B5%E5%88%B0%E7%8E%B0%E5%AE%9E%E6%84%8F%E5%91%B3%E7%9D%80%E4%BB%80%E4%B9%88%23) `205.0K 🔥` `NEW`
1. [张新成给丁禹兮送花篮](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%96%B0%E6%88%90%E7%BB%99%E4%B8%81%E7%A6%B9%E5%85%AE%E9%80%81%E8%8A%B1%E7%AF%AE%23) `205.0K 🔥` `NEW`
1. [中国乒协发布公告 (China Table Tennis Association releases announcement)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%B9%92%E5%8D%8F%E5%8F%91%E5%B8%83%E5%85%AC%E5%91%8A%23) `199.0K 🔥` `NEW`
1. [美国西北大学发明一种隐形无人机](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E8%A5%BF%E5%8C%97%E5%A4%A7%E5%AD%A6%E5%8F%91%E6%98%8E%E4%B8%80%E7%A7%8D%E9%9A%90%E5%BD%A2%E6%97%A0%E4%BA%BA%E6%9C%BA%23) `181.8K 🔥` `NEW`
1. [时代少年团抢票](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%8A%A2%E7%A5%A8%23) `181.6K 🔥` `NEW`
1. [曝大批演员计划开演唱会](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%A4%A7%E6%89%B9%E6%BC%94%E5%91%98%E8%AE%A1%E5%88%92%E5%BC%80%E6%BC%94%E5%94%B1%E4%BC%9A%23) `1.2M 🔥`
1. [突然意识到开车上班花销很大](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E5%BC%80%E8%BD%A6%E4%B8%8A%E7%8F%AD%E8%8A%B1%E9%94%80%E5%BE%88%E5%A4%A7%23) `858.8K 🔥`
1. [小鹿老公检查出不孕后说对不起](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%BF%E8%80%81%E5%85%AC%E6%A3%80%E6%9F%A5%E5%87%BA%E4%B8%8D%E5%AD%95%E5%90%8E%E8%AF%B4%E5%AF%B9%E4%B8%8D%E8%B5%B7%23) `665.3K 🔥`
1. [吃小龙虾尽量选蒜香的](https://s.weibo.com/weibo?q=%23%E5%90%83%E5%B0%8F%E9%BE%99%E8%99%BE%E5%B0%BD%E9%87%8F%E9%80%89%E8%92%9C%E9%A6%99%E7%9A%84%23) `664.6K 🔥`
1. [一念江南赵今麦路透 (One Thought of Jiangnan Zhao Jinmai Reuters)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%E8%B5%B5%E4%BB%8A%E9%BA%A6%E8%B7%AF%E9%80%8F%23) `664.4K 🔥`
1. [为什么要给美甲师点奶茶](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E7%BB%99%E7%BE%8E%E7%94%B2%E5%B8%88%E7%82%B9%E5%A5%B6%E8%8C%B6%23) `653.6K 🔥`
1. [邹市明拒绝上海户口说我是贵州人](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E%E6%8B%92%E7%BB%9D%E4%B8%8A%E6%B5%B7%E6%88%B7%E5%8F%A3%E8%AF%B4%E6%88%91%E6%98%AF%E8%B4%B5%E5%B7%9E%E4%BA%BA%23) `316.2K 🔥`
1. [一念江南](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%23) `315.5K 🔥`
1. [小酒窝获中韩国际声乐比赛一等奖 (Xiaodimple won the first prize in the China-Korea International Vocal Competition)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E8%8E%B7%E4%B8%AD%E9%9F%A9%E5%9B%BD%E9%99%85%E5%A3%B0%E4%B9%90%E6%AF%94%E8%B5%9B%E4%B8%80%E7%AD%89%E5%A5%96%23) `276.0K 🔥`
1. [印度总理呼吁民众自觉讲卫生 (Indian Prime Minister calls on people to consciously practice hygiene)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E6%80%BB%E7%90%86%E5%91%BC%E5%90%81%E6%B0%91%E4%BC%97%E8%87%AA%E8%A7%89%E8%AE%B2%E5%8D%AB%E7%94%9F%23) `273.7K 🔥`
1. [王安宇一念江南路透](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%E8%B7%AF%E9%80%8F%23) `270.4K 🔥`
1. [八仙](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%23) `215.9K 🔥`
1. [孙颖莎对自己说你最棒](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%AF%B9%E8%87%AA%E5%B7%B1%E8%AF%B4%E4%BD%A0%E6%9C%80%E6%A3%92%23) `206.4K 🔥`
1. [杜华坦言签了韩庚之后才开始赚钱 (Du Hua admitted that he only started making money after signing Han Geng)](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%8D%8E%E5%9D%A6%E8%A8%80%E7%AD%BE%E4%BA%86%E9%9F%A9%E5%BA%9A%E4%B9%8B%E5%90%8E%E6%89%8D%E5%BC%80%E5%A7%8B%E8%B5%9A%E9%92%B1%23) `186.3K 🔥`
1. [安排3000万元支持重庆灾后恢复](https://s.weibo.com/weibo?q=%23%E5%AE%89%E6%8E%923000%E4%B8%87%E5%85%83%E6%94%AF%E6%8C%81%E9%87%8D%E5%BA%86%E7%81%BE%E5%90%8E%E6%81%A2%E5%A4%8D%23) `666.1K 🔥` `-22%`
1. [终于理解两广地区对拖鞋的执念了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%90%86%E8%A7%A3%E4%B8%A4%E5%B9%BF%E5%9C%B0%E5%8C%BA%E5%AF%B9%E6%8B%96%E9%9E%8B%E7%9A%84%E6%89%A7%E5%BF%B5%E4%BA%86%23) `325.1K 🔥` `-48%`
1. [16岁女儿诬告父亲性侵称因管教太严](https://s.weibo.com/weibo?q=%2316%E5%B2%81%E5%A5%B3%E5%84%BF%E8%AF%AC%E5%91%8A%E7%88%B6%E4%BA%B2%E6%80%A7%E4%BE%B5%E7%A7%B0%E5%9B%A0%E7%AE%A1%E6%95%99%E5%A4%AA%E4%B8%A5%23) `324.7K 🔥` `-30%`
1. [王俊凯伴手礼](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%BC%B4%E6%89%8B%E7%A4%BC%23) `323.5K 🔥` `-35%`
1. [县长硬刚首富背后是权力傲慢 (Behind the county magistrate’s tough attack on the richest man is the arrogance of power)](https://s.weibo.com/weibo?q=%23%E5%8E%BF%E9%95%BF%E7%A1%AC%E5%88%9A%E9%A6%96%E5%AF%8C%E8%83%8C%E5%90%8E%E6%98%AF%E6%9D%83%E5%8A%9B%E5%82%B2%E6%85%A2%23) `322.2K 🔥` `-34%`
1. [重庆山体崩塌](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%B1%B1%E4%BD%93%E5%B4%A9%E5%A1%8C%23) `319.4K 🔥` `-36%`
1. [童锦程承认抛妻弃子 (Tong Jincheng admitted to abandoning his wife and son)](https://s.weibo.com/weibo?q=%23%E7%AB%A5%E9%94%A6%E7%A8%8B%E6%89%BF%E8%AE%A4%E6%8A%9B%E5%A6%BB%E5%BC%83%E5%AD%90%23) `310.6K 🔥` `-36%`
1. [KimiK3](https://s.weibo.com/weibo?q=%23KimiK3%23) `274.2K 🔥` `-43%`
1. [加好友第一件事不是看对方朋友圈 (The first thing to do when adding friends is not to look at the other person’s Moments)](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E5%A5%BD%E5%8F%8B%E7%AC%AC%E4%B8%80%E4%BB%B6%E4%BA%8B%E4%B8%8D%E6%98%AF%E7%9C%8B%E5%AF%B9%E6%96%B9%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `267.3K 🔥` `-47%`
1. [孙怡瘦到连皮靴都直往下掉 (Sun Yi is so thin that even her leather boots are falling down)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E7%98%A6%E5%88%B0%E8%BF%9E%E7%9A%AE%E9%9D%B4%E9%83%BD%E7%9B%B4%E5%BE%80%E4%B8%8B%E6%8E%89%23) `253.8K 🔥` `-45%`
1. [40天花2万精装了131平的家](https://s.weibo.com/weibo?q=%2340%E5%A4%A9%E8%8A%B12%E4%B8%87%E7%B2%BE%E8%A3%85%E4%BA%86131%E5%B9%B3%E7%9A%84%E5%AE%B6%23) `198.5K 🔥` `-26%`
1. [新冠又来了](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%86%A0%E5%8F%88%E6%9D%A5%E4%BA%86%23) `187.2K 🔥` `-60%`
1. [邹市明在朋友面前怼冉莹颖](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E%E5%9C%A8%E6%9C%8B%E5%8F%8B%E9%9D%A2%E5%89%8D%E6%80%BC%E5%86%89%E8%8E%B9%E9%A2%96%23) `183.6K 🔥` `-31%`
1. [BLG](https://s.weibo.com/weibo?q=%23BLG%23) `171.6K 🔥` `-36%`

Updated at 2026-07-18 18:51:11

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
