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

1. [全球最平整折叠屏OPPOFindN6 (OPPO Find N6, the world’s flattest folding screen)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E6%9C%80%E5%B9%B3%E6%95%B4%E6%8A%98%E5%8F%A0%E5%B1%8FOPPOFindN6%23) `43.4K 🔥` `NEW`
1. [去机场不该比坐飞机时间还长](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E6%9C%BA%E5%9C%BA%E4%B8%8D%E8%AF%A5%E6%AF%94%E5%9D%90%E9%A3%9E%E6%9C%BA%E6%97%B6%E9%97%B4%E8%BF%98%E9%95%BF%23) `44.4K 🔥` `-33%`
1. [建议高速每年1000元免费额度](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E9%AB%98%E9%80%9F%E6%AF%8F%E5%B9%B41000%E5%85%83%E5%85%8D%E8%B4%B9%E9%A2%9D%E5%BA%A6%23) `44.0K 🔥` `-33%`
1. [中国两会将为全球创造更多机遇](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%B8%A4%E4%BC%9A%E5%B0%86%E4%B8%BA%E5%85%A8%E7%90%83%E5%88%9B%E9%80%A0%E6%9B%B4%E5%A4%9A%E6%9C%BA%E9%81%87%23) `43.5K 🔥` `-34%`
1. [惊蛰无声](https://s.weibo.com/weibo?q=%23%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%23) `42.2K 🔥` `-35%`
1. [中国队金牌榜奖牌榜都是第一](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E9%87%91%E7%89%8C%E6%A6%9C%E5%A5%96%E7%89%8C%E6%A6%9C%E9%83%BD%E6%98%AF%E7%AC%AC%E4%B8%80%23) `42.0K 🔥` `-36%`
1. [我要回伊朗我要保卫我的国家 (I want to go back to Iran and I want to defend my country)](https://s.weibo.com/weibo?q=%23%E6%88%91%E8%A6%81%E5%9B%9E%E4%BC%8A%E6%9C%97%E6%88%91%E8%A6%81%E4%BF%9D%E5%8D%AB%E6%88%91%E7%9A%84%E5%9B%BD%E5%AE%B6%23) `41.3K 🔥` `-37%`
1. [恩施这类免费筛查短信全是假的 (Free screening text messages like Enshi are all fake)](https://s.weibo.com/weibo?q=%23%E6%81%A9%E6%96%BD%E8%BF%99%E7%B1%BB%E5%85%8D%E8%B4%B9%E7%AD%9B%E6%9F%A5%E7%9F%AD%E4%BF%A1%E5%85%A8%E6%98%AF%E5%81%87%E7%9A%84%23) `41.2K 🔥` `-37%`
1. [刘国梁卸任WTT董事会主席 (Liu Guoliang steps down as chairman of WTT board of directors)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%9B%BD%E6%A2%81%E5%8D%B8%E4%BB%BBWTT%E8%91%A3%E4%BA%8B%E4%BC%9A%E4%B8%BB%E5%B8%AD%23) `41.2K 🔥` `-37%`
1. [伊朗高官6种语言发帖](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%AB%98%E5%AE%986%E7%A7%8D%E8%AF%AD%E8%A8%80%E5%8F%91%E5%B8%96%23) `41.2K 🔥` `-37%`
1. [外媒记者期待与中国共享发展新机遇 (Foreign journalists look forward to sharing new development opportunities with China)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%AA%92%E8%AE%B0%E8%80%85%E6%9C%9F%E5%BE%85%E4%B8%8E%E4%B8%AD%E5%9B%BD%E5%85%B1%E4%BA%AB%E5%8F%91%E5%B1%95%E6%96%B0%E6%9C%BA%E9%81%87%23) `41.0K 🔥` `-38%`
1. [75万亿元居民存款将到期](https://s.weibo.com/weibo?q=%2375%E4%B8%87%E4%BA%BF%E5%85%83%E5%B1%85%E6%B0%91%E5%AD%98%E6%AC%BE%E5%B0%86%E5%88%B0%E6%9C%9F%23) `40.9K 🔥` `-38%`
1. [伊朗提出停火条件 (Iran proposes ceasefire conditions)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8F%90%E5%87%BA%E5%81%9C%E7%81%AB%E6%9D%A1%E4%BB%B6%23) `40.7K 🔥` `-38%`
1. [地球或将迎超级厄尔尼诺现象](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E7%90%83%E6%88%96%E5%B0%86%E8%BF%8E%E8%B6%85%E7%BA%A7%E5%8E%84%E5%B0%94%E5%B0%BC%E8%AF%BA%E7%8E%B0%E8%B1%A1%23) `40.7K 🔥` `-38%`
1. [作者一边写天灾一边处理人祸 (The author writes about natural disasters while dealing with man-made disasters)](https://s.weibo.com/weibo?q=%23%E4%BD%9C%E8%80%85%E4%B8%80%E8%BE%B9%E5%86%99%E5%A4%A9%E7%81%BE%E4%B8%80%E8%BE%B9%E5%A4%84%E7%90%86%E4%BA%BA%E7%A5%B8%23) `40.4K 🔥` `-38%`
1. [孔雪儿演技](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E6%BC%94%E6%8A%80%23) `40.4K 🔥` `-39%`
1. [把果蝇的大脑复制到电脑 (Copying a fruit fly brain to a computer)](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E6%9E%9C%E8%9D%87%E7%9A%84%E5%A4%A7%E8%84%91%E5%A4%8D%E5%88%B6%E5%88%B0%E7%94%B5%E8%84%91%23) `40.1K 🔥` `-39%`
1. [逐玉 女主职业自卑](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E5%A5%B3%E4%B8%BB%E8%81%8C%E4%B8%9A%E8%87%AA%E5%8D%91%23) `39.9K 🔥` `-39%`
1. [伊朗驻华大使谈霍尔木兹海峡通行](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%A9%BB%E5%8D%8E%E5%A4%A7%E4%BD%BF%E8%B0%88%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E9%80%9A%E8%A1%8C%23) `39.8K 🔥` `-39%`
1. [陈昊宇新剧给自己生了个弟弟](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%8A%E5%AE%87%E6%96%B0%E5%89%A7%E7%BB%99%E8%87%AA%E5%B7%B1%E7%94%9F%E4%BA%86%E4%B8%AA%E5%BC%9F%E5%BC%9F%23) `39.8K 🔥` `-39%`
1. [22个月大宝宝在院子里慵懒躺倒晒太阳](https://s.weibo.com/weibo?q=%2322%E4%B8%AA%E6%9C%88%E5%A4%A7%E5%AE%9D%E5%AE%9D%E5%9C%A8%E9%99%A2%E5%AD%90%E9%87%8C%E6%85%B5%E6%87%92%E8%BA%BA%E5%80%92%E6%99%92%E5%A4%AA%E9%98%B3%23) `39.6K 🔥` `-39%`
1. [张凌赫道歉 (Zhang Linghe apologizes)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%81%93%E6%AD%89%23) `39.4K 🔥` `-40%`
1. [李羲承退队](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BE%B2%E6%89%BF%E9%80%80%E9%98%9F%23) `39.4K 🔥` `-40%`
1. [逐玉 (Zhuyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `36.7K 🔥` `-44%`
1. [原来这些爆火的文案都是王源写的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E4%BA%9B%E7%88%86%E7%81%AB%E7%9A%84%E6%96%87%E6%A1%88%E9%83%BD%E6%98%AF%E7%8E%8B%E6%BA%90%E5%86%99%E7%9A%84%23) `30.9K 🔥` `-53%`
1. [杨紫紫色高定](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%B4%AB%E8%89%B2%E9%AB%98%E5%AE%9A%23) `30.9K 🔥` `-53%`
1. [你好星期六删除张凌赫争议片段](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%E5%88%A0%E9%99%A4%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%BA%89%E8%AE%AE%E7%89%87%E6%AE%B5%23) `30.9K 🔥` `-53%`
1. [洪欣张镐濂不像母子像姐弟 (Hong Xin and Zhang Haolian are not like mother and son, but like siblings)](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E6%AC%A3%E5%BC%A0%E9%95%90%E6%BF%82%E4%B8%8D%E5%83%8F%E6%AF%8D%E5%AD%90%E5%83%8F%E5%A7%90%E5%BC%9F%23) `30.9K 🔥` `-53%`
1. [JYP考公上岸了 (JYP’s public examination is now available)](https://s.weibo.com/weibo?q=%23JYP%E8%80%83%E5%85%AC%E4%B8%8A%E5%B2%B8%E4%BA%86%23) `30.9K 🔥` `-53%`
1. [你好星期六](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%23) `30.8K 🔥` `-53%`
1. [婆婆进卧室不敲门儿媳崩溃哭诉 (The mother-in-law entered the bedroom without knocking, and the daughter-in-law broke down and cried.)](https://s.weibo.com/weibo?q=%23%E5%A9%86%E5%A9%86%E8%BF%9B%E5%8D%A7%E5%AE%A4%E4%B8%8D%E6%95%B2%E9%97%A8%E5%84%BF%E5%AA%B3%E5%B4%A9%E6%BA%83%E5%93%AD%E8%AF%89%23) `30.8K 🔥` `-53%`
1. [突然一下就不焦虑了](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E4%B8%80%E4%B8%8B%E5%B0%B1%E4%B8%8D%E7%84%A6%E8%99%91%E4%BA%86%23) `30.8K 🔥` `-53%`
1. [刘亦菲ins更新看秀照](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2ins%E6%9B%B4%E6%96%B0%E7%9C%8B%E7%A7%80%E7%85%A7%23) `30.8K 🔥` `-53%`
1. [荣耀Magic V6 (Honor Magic V6)](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80Magic%20V6%23) `30.7K 🔥` `-53%`
1. [崔然竣 光头强](https://s.weibo.com/weibo?q=%23%E5%B4%94%E7%84%B6%E7%AB%A3%20%E5%85%89%E5%A4%B4%E5%BC%BA%23) `30.7K 🔥` `-53%`
1. [尹李灿直播时看到李羲承退队的反应 (Yin Lican's reaction when he saw Li Xicheng quit the team during the live broadcast)](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E6%9D%8E%E7%81%BF%E7%9B%B4%E6%92%AD%E6%97%B6%E7%9C%8B%E5%88%B0%E6%9D%8E%E7%BE%B2%E6%89%BF%E9%80%80%E9%98%9F%E7%9A%84%E5%8F%8D%E5%BA%94%23) `30.7K 🔥` `-53%`
1. [李在明回应萨德外调 (Lee Jae-ming responds to THAAD’s external report)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%9C%A8%E6%98%8E%E5%9B%9E%E5%BA%94%E8%90%A8%E5%BE%B7%E5%A4%96%E8%B0%83%23) `30.7K 🔥` `-53%`
1. [杨迪回复穆祉丞](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%BF%AA%E5%9B%9E%E5%A4%8D%E7%A9%86%E7%A5%89%E4%B8%9E%23) `30.7K 🔥` `-53%`
1. [blackpink的周冠宇](https://s.weibo.com/weibo?q=%23blackpink%E7%9A%84%E5%91%A8%E5%86%A0%E5%AE%87%23) `30.7K 🔥` `-53%`
1. [崔然竣MiuMiu走秀 (Cui Ranjun MiuMiu catwalk)](https://s.weibo.com/weibo?q=%23%E5%B4%94%E7%84%B6%E7%AB%A3MiuMiu%E8%B5%B0%E7%A7%80%23) `30.6K 🔥` `-53%`
1. [院士说文科生绝不会被AI替代 (Academician says liberal arts students will never be replaced by AI)](https://s.weibo.com/weibo?q=%23%E9%99%A2%E5%A3%AB%E8%AF%B4%E6%96%87%E7%A7%91%E7%94%9F%E7%BB%9D%E4%B8%8D%E4%BC%9A%E8%A2%ABAI%E6%9B%BF%E4%BB%A3%23) `30.6K 🔥` `-53%`
1. [MiuMiu直播](https://s.weibo.com/weibo?q=%23MiuMiu%E7%9B%B4%E6%92%AD%23) `30.6K 🔥` `-53%`
1. [鹿晗喝霸王茶姬 (Lu Han drinks Bawang Cha Ji)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%96%9D%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%23) `30.6K 🔥` `-53%`
1. [村民20元买彩票中100万](https://s.weibo.com/weibo?q=%23%E6%9D%91%E6%B0%9120%E5%85%83%E4%B9%B0%E5%BD%A9%E7%A5%A8%E4%B8%AD100%E4%B8%87%23) `30.6K 🔥` `-53%`
1. [杨舒予担任中国女篮队长](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%88%92%E4%BA%88%E6%8B%85%E4%BB%BB%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AE%E9%98%9F%E9%95%BF%23) `30.6K 🔥` `-54%`
1. [苏新皓跳第三个吻痕](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E8%B7%B3%E7%AC%AC%E4%B8%89%E4%B8%AA%E5%90%BB%E7%97%95%23) `30.5K 🔥` `-83%`
1. [至尊马蒂 (supreme marty)](https://s.weibo.com/weibo?q=%23%E8%87%B3%E5%B0%8A%E9%A9%AC%E8%92%82%23) `30.5K 🔥` `-53%`
1. [哈哈哈哈哈6](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%93%88%E5%93%88%E5%93%88%E5%93%886%23) `30.5K 🔥` `-53%`
1. [在医院生个孩子只花了2块5 (Giving birth to a baby in the hospital only cost 2.5 yuan)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%8C%BB%E9%99%A2%E7%94%9F%E4%B8%AA%E5%AD%A9%E5%AD%90%E5%8F%AA%E8%8A%B1%E4%BA%862%E5%9D%975%23) `30.5K 🔥` `-53%`
1. [批发商回应4.5元的1米大肉串卖20元](https://s.weibo.com/weibo?q=%23%E6%89%B9%E5%8F%91%E5%95%86%E5%9B%9E%E5%BA%944.5%E5%85%83%E7%9A%841%E7%B1%B3%E5%A4%A7%E8%82%89%E4%B8%B2%E5%8D%9620%E5%85%83%23) `30.4K 🔥` `-53%`
1. [周冠宇渴望正式席位的大眼睛](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%86%A0%E5%AE%87%E6%B8%B4%E6%9C%9B%E6%AD%A3%E5%BC%8F%E5%B8%AD%E4%BD%8D%E7%9A%84%E5%A4%A7%E7%9C%BC%E7%9D%9B%23) `30.4K 🔥` `-53%`

Updated at 2026-03-11 03:48:33

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
