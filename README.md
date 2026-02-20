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

1. [一载有8人汽车在贝加尔湖沉没 (Car with 8 people on board sinks in Lake Baikal)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%BD%BD%E6%9C%898%E4%BA%BA%E6%B1%BD%E8%BD%A6%E5%9C%A8%E8%B4%9D%E5%8A%A0%E5%B0%94%E6%B9%96%E6%B2%89%E6%B2%A1%23) `1.1M 🔥` `NEW`
1. [贝加尔湖](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%8A%A0%E5%B0%94%E6%B9%96%23) `549.1K 🔥` `NEW`
1. [妈祖 掷圣杯](https://s.weibo.com/weibo?q=%23%E5%A6%88%E7%A5%96%20%E6%8E%B7%E5%9C%A3%E6%9D%AF%23) `548.5K 🔥` `NEW`
1. [贝加尔湖汽车落水1名中国游客获救](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%8A%A0%E5%B0%94%E6%B9%96%E6%B1%BD%E8%BD%A6%E8%90%BD%E6%B0%B41%E5%90%8D%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E8%8E%B7%E6%95%91%23) `134.3K 🔥` `NEW`
1. [女子在洗浴中心浴池门口被人录像](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9C%A8%E6%B4%97%E6%B5%B4%E4%B8%AD%E5%BF%83%E6%B5%B4%E6%B1%A0%E9%97%A8%E5%8F%A3%E8%A2%AB%E4%BA%BA%E5%BD%95%E5%83%8F%23) `133.7K 🔥` `NEW`
1. [陈雪凝回应在婚礼上唱歌](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%9B%AA%E5%87%9D%E5%9B%9E%E5%BA%94%E5%9C%A8%E5%A9%9A%E7%A4%BC%E4%B8%8A%E5%94%B1%E6%AD%8C%23) `133.5K 🔥` `NEW`
1. [情绪稳定的一家人有多重要](https://s.weibo.com/weibo?q=%23%E6%83%85%E7%BB%AA%E7%A8%B3%E5%AE%9A%E7%9A%84%E4%B8%80%E5%AE%B6%E4%BA%BA%E6%9C%89%E5%A4%9A%E9%87%8D%E8%A6%81%23) `114.7K 🔥` `NEW`
1. [张函瑞抽抽乐](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%BD%E7%91%9E%E6%8A%BD%E6%8A%BD%E4%B9%90%23) `99.7K 🔥` `NEW`
1. [香港63岁男子为救猫坠亡](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF63%E5%B2%81%E7%94%B7%E5%AD%90%E4%B8%BA%E6%95%91%E7%8C%AB%E5%9D%A0%E4%BA%A1%23) `96.1K 🔥` `NEW`
1. [特朗普赞中国仪仗队](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%B5%9E%E4%B8%AD%E5%9B%BD%E4%BB%AA%E4%BB%97%E9%98%9F%23) `90.7K 🔥` `NEW`
1. [第一集就看到黄景瑜腹肌 (In the first episode, we saw Huang Jingyu’s abdominal muscles)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E9%9B%86%E5%B0%B1%E7%9C%8B%E5%88%B0%E9%BB%84%E6%99%AF%E7%91%9C%E8%85%B9%E8%82%8C%23) `86.7K 🔥` `NEW`
1. [惊蛰无声](https://s.weibo.com/weibo?q=%23%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%23) `81.4K 🔥` `NEW`
1. [魏晨曾问公司拍戏能不能发一张专辑](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E6%99%A8%E6%9B%BE%E9%97%AE%E5%85%AC%E5%8F%B8%E6%8B%8D%E6%88%8F%E8%83%BD%E4%B8%8D%E8%83%BD%E5%8F%91%E4%B8%80%E5%BC%A0%E4%B8%93%E8%BE%91%23) `76.5K 🔥` `NEW`
1. [初一离家工作爷爷哭了孙子发声](https://s.weibo.com/weibo?q=%23%E5%88%9D%E4%B8%80%E7%A6%BB%E5%AE%B6%E5%B7%A5%E4%BD%9C%E7%88%B7%E7%88%B7%E5%93%AD%E4%BA%86%E5%AD%99%E5%AD%90%E5%8F%91%E5%A3%B0%23) `71.1K 🔥` `NEW`
1. [妈祖换人 (Mazu substitution)](https://s.weibo.com/weibo?q=%23%E5%A6%88%E7%A5%96%E6%8D%A2%E4%BA%BA%23) `8.5M 🔥` `+3290%`
1. [将门独后 天崩开局 (The only queen in the sect will start with Heavenly Collapse)](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%20%E5%A4%A9%E5%B4%A9%E5%BC%80%E5%B1%80%23) `548.1K 🔥` `+121%`
1. [镖人票房排名第二](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E7%A5%A8%E6%88%BF%E6%8E%92%E5%90%8D%E7%AC%AC%E4%BA%8C%23) `340.4K 🔥` `+40%`
1. [杨幂带火吊带条纹长裙](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%B8%A6%E7%81%AB%E5%90%8A%E5%B8%A6%E6%9D%A1%E7%BA%B9%E9%95%BF%E8%A3%99%23) `135.6K 🔥` `+21%`
1. [曝网红鹿哈师徒恋](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%BD%91%E7%BA%A2%E9%B9%BF%E5%93%88%E5%B8%88%E5%BE%92%E6%81%8B%23) `124.5K 🔥` `+33%`
1. [确实型人格](https://s.weibo.com/weibo?q=%23%E7%A1%AE%E5%AE%9E%E5%9E%8B%E4%BA%BA%E6%A0%BC%23) `114.9K 🔥` `+53%`
1. [宁忠岩金牌含金量恐怖如斯 (The gold content of Ning Zhongyan’s gold medal is so terrifying)](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BF%A0%E5%B2%A9%E9%87%91%E7%89%8C%E5%90%AB%E9%87%91%E9%87%8F%E6%81%90%E6%80%96%E5%A6%82%E6%96%AF%23) `91.1K 🔥` `+21%`
1. [谷爱凌赌上职业生涯的一跳](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E8%B5%8C%E4%B8%8A%E8%81%8C%E4%B8%9A%E7%94%9F%E6%B6%AF%E7%9A%84%E4%B8%80%E8%B7%B3%23) `780.1K 🔥`
1. [每一位中国冰雪健儿都闪闪发光 (Every Chinese ice and snow athlete shines brightly)](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E4%B8%80%E4%BD%8D%E4%B8%AD%E5%9B%BD%E5%86%B0%E9%9B%AA%E5%81%A5%E5%84%BF%E9%83%BD%E9%97%AA%E9%97%AA%E5%8F%91%E5%85%89%23) `622.4K 🔥`
1. [安踏选人眼光有多绝](https://s.weibo.com/weibo?q=%23%E5%AE%89%E8%B8%8F%E9%80%89%E4%BA%BA%E7%9C%BC%E5%85%89%E6%9C%89%E5%A4%9A%E7%BB%9D%23) `134.4K 🔥`
1. [吴佳尼自曝离婚原因 (Wu Jiani reveals the reason for divorce)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BD%B3%E5%B0%BC%E8%87%AA%E6%9B%9D%E7%A6%BB%E5%A9%9A%E5%8E%9F%E5%9B%A0%23) `134.2K 🔥`
1. [TF四代五练结束了](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E4%BA%94%E7%BB%83%E7%BB%93%E6%9D%9F%E4%BA%86%23) `134.0K 🔥`
1. [王鹤棣观众盘 (Wang Hedi audience plate)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E8%A7%82%E4%BC%97%E7%9B%98%23) `133.6K 🔥`
1. [露上牙说话和露下牙说话的区别](https://s.weibo.com/weibo?q=%23%E9%9C%B2%E4%B8%8A%E7%89%99%E8%AF%B4%E8%AF%9D%E5%92%8C%E9%9C%B2%E4%B8%8B%E7%89%99%E8%AF%B4%E8%AF%9D%E7%9A%84%E5%8C%BA%E5%88%AB%23) `108.1K 🔥`
1. [齐广璞第一跳120.80分 (Qi Guangpu’s first jump scored 120.80 points)](https://s.weibo.com/weibo?q=%23%E9%BD%90%E5%B9%BF%E7%92%9E%E7%AC%AC%E4%B8%80%E8%B7%B3120.80%E5%88%86%23) `91.0K 🔥`
1. [胡先煦cos胡先煦](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6cos%E8%83%A1%E5%85%88%E7%85%A6%23) `88.7K 🔥`
1. [镖人 (escort)](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `81.9K 🔥`
1. [穆祉丞 海口](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%20%E6%B5%B7%E5%8F%A3%23) `74.8K 🔥`
1. [男子用AI鉴定玉石8个月收入上百万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%94%A8AI%E9%89%B4%E5%AE%9A%E7%8E%89%E7%9F%B38%E4%B8%AA%E6%9C%88%E6%94%B6%E5%85%A5%E4%B8%8A%E7%99%BE%E4%B8%87%23) `141.7K 🔥` `-31%`
1. [上海小孩7万多压岁钱被爸妈弄丢 (Shanghai child lost more than 70,000 yuan as a gift to his parents)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%B0%8F%E5%AD%A97%E4%B8%87%E5%A4%9A%E5%8E%8B%E5%B2%81%E9%92%B1%E8%A2%AB%E7%88%B8%E5%A6%88%E5%BC%84%E4%B8%A2%23) `140.1K 🔥` `-64%`
1. [父亲偷拿儿子压岁钱被判返还82750元 (Father who stole his son's New Year's money was sentenced to pay back 82,750 yuan)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E5%81%B7%E6%8B%BF%E5%84%BF%E5%AD%90%E5%8E%8B%E5%B2%81%E9%92%B1%E8%A2%AB%E5%88%A4%E8%BF%94%E8%BF%9882750%E5%85%83%23) `139.5K 🔥` `-87%`
1. [妈祖 耀祖](https://s.weibo.com/weibo?q=%23%E5%A6%88%E7%A5%96%20%E8%80%80%E7%A5%96%23) `137.4K 🔥` `-45%`
1. [初中生扶人被索赔22万摔倒老人发声](https://s.weibo.com/weibo?q=%23%E5%88%9D%E4%B8%AD%E7%94%9F%E6%89%B6%E4%BA%BA%E8%A2%AB%E7%B4%A2%E8%B5%9422%E4%B8%87%E6%91%94%E5%80%92%E8%80%81%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `136.8K 🔥` `-44%`
1. [女子买20元奶茶中奖黄金约25000元](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B9%B020%E5%85%83%E5%A5%B6%E8%8C%B6%E4%B8%AD%E5%A5%96%E9%BB%84%E9%87%91%E7%BA%A625000%E5%85%83%23) `135.0K 🔥` `-46%`
1. [星期五练习生 (Friday trainee)](https://s.weibo.com/weibo?q=%23%E6%98%9F%E6%9C%9F%E4%BA%94%E7%BB%83%E4%B9%A0%E7%94%9F%23) `135.0K 🔥` `-46%`
1. [将门毒后书粉](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E6%AF%92%E5%90%8E%E4%B9%A6%E7%B2%89%23) `134.9K 🔥` `-33%`
1. [日本冰壶美女撞脸孙燕姿 (Japanese curling beauty bumps into Stefanie Sun)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%86%B0%E5%A3%B6%E7%BE%8E%E5%A5%B3%E6%92%9E%E8%84%B8%E5%AD%99%E7%87%95%E5%A7%BF%23) `134.7K 🔥` `-44%`
1. [卖霉豆腐已经有人实操上了](https://s.weibo.com/weibo?q=%23%E5%8D%96%E9%9C%89%E8%B1%86%E8%85%90%E5%B7%B2%E7%BB%8F%E6%9C%89%E4%BA%BA%E5%AE%9E%E6%93%8D%E4%B8%8A%E4%BA%86%23) `133.4K 🔥` `-46%`
1. [吴京 我的夫人姓谢 (Wu Jing My wife’s surname is Xie)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%20%E6%88%91%E7%9A%84%E5%A4%AB%E4%BA%BA%E5%A7%93%E8%B0%A2%23) `132.5K 🔥` `-41%`
1. [广东地震 (Guangdong earthquake)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E5%9C%B0%E9%9C%87%23) `131.6K 🔥` `-28%`
1. [充电器一拔又是一年 (Unplug the charger and it's another year)](https://s.weibo.com/weibo?q=%23%E5%85%85%E7%94%B5%E5%99%A8%E4%B8%80%E6%8B%94%E5%8F%88%E6%98%AF%E4%B8%80%E5%B9%B4%23) `104.5K 🔥` `-38%`
1. [齐广璞王心迪晋级决赛](https://s.weibo.com/weibo?q=%23%E9%BD%90%E5%B9%BF%E7%92%9E%E7%8E%8B%E5%BF%83%E8%BF%AA%E6%99%8B%E7%BA%A7%E5%86%B3%E8%B5%9B%23) `94.4K 🔥` `-45%`
1. [镖人票房](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E7%A5%A8%E6%88%BF%23) `92.1K 🔥` `-42%`
1. [容止 谢景行 (Rong Zhi Xie Jingxing)](https://s.weibo.com/weibo?q=%23%E5%AE%B9%E6%AD%A2%20%E8%B0%A2%E6%99%AF%E8%A1%8C%23) `86.9K 🔥` `-23%`
1. [王腾回应换iPhone17](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%85%BE%E5%9B%9E%E5%BA%94%E6%8D%A2iPhone17%23) `86.4K 🔥` `-32%`
1. [台湾上空的歼20之说或许是真的](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E4%B8%8A%E7%A9%BA%E7%9A%84%E6%AD%BC20%E4%B9%8B%E8%AF%B4%E6%88%96%E8%AE%B8%E6%98%AF%E7%9C%9F%E7%9A%84%23) `77.5K 🔥` `-37%`

Updated at 2026-02-20 19:46:19

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
