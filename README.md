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

1. [谷爱凌金牌 (Gu Ailing gold medal)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E9%87%91%E7%89%8C%23) `13.0M 🔥` `NEW`
1. [李方慧银牌](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%96%B9%E6%85%A7%E9%93%B6%E7%89%8C%23) `1.9M 🔥` `NEW`
1. [谷爱凌 大心脏](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%20%E5%A4%A7%E5%BF%83%E8%84%8F%23) `322.0K 🔥` `NEW`
1. [奖牌榜](https://s.weibo.com/weibo?q=%23%E5%A5%96%E7%89%8C%E6%A6%9C%23) `315.6K 🔥` `NEW`
1. [中国队5金4银6铜收官](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F5%E9%87%914%E9%93%B66%E9%93%9C%E6%94%B6%E5%AE%98%23) `307.3K 🔥` `NEW`
1. [李方慧第三滑93.00分](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%96%B9%E6%85%A7%E7%AC%AC%E4%B8%89%E6%BB%9193.00%E5%88%86%23) `251.0K 🔥` `NEW`
1. [极客湾 下架](https://s.weibo.com/weibo?q=%23%E6%9E%81%E5%AE%A2%E6%B9%BE%20%E4%B8%8B%E6%9E%B6%23) `207.8K 🔥` `NEW`
1. [谷爱凌空中姿态太美了](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%A9%BA%E4%B8%AD%E5%A7%BF%E6%80%81%E5%A4%AA%E7%BE%8E%E4%BA%86%23) `196.5K 🔥` `NEW`
1. [远嫁姐姐回家 47岁弟弟激动得像孩子](https://s.weibo.com/weibo?q=%23%E8%BF%9C%E5%AB%81%E5%A7%90%E5%A7%90%E5%9B%9E%E5%AE%B6%2047%E5%B2%81%E5%BC%9F%E5%BC%9F%E6%BF%80%E5%8A%A8%E5%BE%97%E5%83%8F%E5%AD%A9%E5%AD%90%23) `195.4K 🔥` `NEW`
1. [原来谷爱凌在大跳台也会怕](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%B0%B7%E7%88%B1%E5%87%8C%E5%9C%A8%E5%A4%A7%E8%B7%B3%E5%8F%B0%E4%B9%9F%E4%BC%9A%E6%80%95%23) `192.0K 🔥` `NEW`
1. [徐梦桃父亲在线催生 (Xu Mengtao’s father gave birth online)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E7%88%B6%E4%BA%B2%E5%9C%A8%E7%BA%BF%E5%82%AC%E7%94%9F%23) `191.1K 🔥` `NEW`
1. [谷爱凌李方慧 慧当凌绝顶](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E6%9D%8E%E6%96%B9%E6%85%A7%20%E6%85%A7%E5%BD%93%E5%87%8C%E7%BB%9D%E9%A1%B6%23) `177.3K 🔥` `NEW`
1. [DK拒绝被T1零封](https://s.weibo.com/weibo?q=%23DK%E6%8B%92%E7%BB%9D%E8%A2%ABT1%E9%9B%B6%E5%B0%81%23) `171.3K 🔥` `NEW`
1. [仙逆](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%23) `164.8K 🔥` `NEW`
1. [谷爱凌会飞](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E4%BC%9A%E9%A3%9E%23) `153.6K 🔥` `NEW`
1. [厚本 长剧](https://s.weibo.com/weibo?q=%23%E5%8E%9A%E6%9C%AC%20%E9%95%BF%E5%89%A7%23) `130.0K 🔥` `NEW`
1. [仙逆动画](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%E5%8A%A8%E7%94%BB%23) `118.8K 🔥` `NEW`
1. [谷爱凌U池夺金](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8CU%E6%B1%A0%E5%A4%BA%E9%87%91%23) `117.6K 🔥` `NEW`
1. [咱姨父喝的飞天茅台啊](https://s.weibo.com/weibo?q=%23%E5%92%B1%E5%A7%A8%E7%88%B6%E5%96%9D%E7%9A%84%E9%A3%9E%E5%A4%A9%E8%8C%85%E5%8F%B0%E5%95%8A%23) `106.6K 🔥` `NEW`
1. [此前U型场地谷爱凌近乎全胜](https://s.weibo.com/weibo?q=%23%E6%AD%A4%E5%89%8DU%E5%9E%8B%E5%9C%BA%E5%9C%B0%E8%B0%B7%E7%88%B1%E5%87%8C%E8%BF%91%E4%B9%8E%E5%85%A8%E8%83%9C%23) `100.1K 🔥` `NEW`
1. [谷爱凌第三滑94.75分 (Gu Ailing skated third with 94.75 points)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%AC%AC%E4%B8%89%E6%BB%9194.75%E5%88%86%23) `4.1M 🔥` `+558%`
1. [热气腾腾的中国年 (Steamy Chinese New Year)](https://s.weibo.com/weibo?q=%23%E7%83%AD%E6%B0%94%E8%85%BE%E8%85%BE%E7%9A%84%E4%B8%AD%E5%9B%BD%E5%B9%B4%23) `2.3M 🔥` `+85%`
1. [人生去留 (Stay or go in life)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%94%9F%E5%8E%BB%E7%95%99%23) `752.5K 🔥` `+164%`
1. [谷爱凌李方慧拥抱 (Hug by Gu Ailing and Li Fanghui)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E6%9D%8E%E6%96%B9%E6%85%A7%E6%8B%A5%E6%8A%B1%23) `752.3K 🔥` `+612%`
1. [韩国队抗议米兰冬奥至少4次印错国旗 (The South Korean team protested at least 4 times the wrong flag was printed at the Milan Winter Olympics)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E9%98%9F%E6%8A%97%E8%AE%AE%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E8%87%B3%E5%B0%914%E6%AC%A1%E5%8D%B0%E9%94%99%E5%9B%BD%E6%97%97%23) `562.8K 🔥` `+79%`
1. [李方慧第二滑91.50分](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%96%B9%E6%85%A7%E7%AC%AC%E4%BA%8C%E6%BB%9191.50%E5%88%86%23) `395.0K 🔥` `+103%`
1. [果然爱情公寓不是拍给当时的我们看的](https://s.weibo.com/weibo?q=%23%E6%9E%9C%E7%84%B6%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E4%B8%8D%E6%98%AF%E6%8B%8D%E7%BB%99%E5%BD%93%E6%97%B6%E7%9A%84%E6%88%91%E4%BB%AC%E7%9C%8B%E7%9A%84%23) `364.6K 🔥` `+251%`
1. [徐梦桃说太嘚瑟了结果金牌被刮花](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E8%AF%B4%E5%A4%AA%E5%98%9A%E7%91%9F%E4%BA%86%E7%BB%93%E6%9E%9C%E9%87%91%E7%89%8C%E8%A2%AB%E5%88%AE%E8%8A%B1%23) `245.9K 🔥` `+181%`
1. [唐宫奇案大结局](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AE%AB%E5%A5%87%E6%A1%88%E5%A4%A7%E7%BB%93%E5%B1%80%23) `203.5K 🔥` `+55%`
1. [孟子义李昀锐 四搭](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%20%E5%9B%9B%E6%90%AD%23) `196.4K 🔥` `+44%`
1. [李峋的vlog全是公主](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B3%8B%E7%9A%84vlog%E5%85%A8%E6%98%AF%E5%85%AC%E4%B8%BB%23) `196.2K 🔥` `+44%`
1. [大年初五8岁男童虎跳峡坠崖遇难 (An 8-year-old boy died after falling off a cliff in Tiger Leaping Gorge on the fifth day of the Lunar New Year)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B9%B4%E5%88%9D%E4%BA%948%E5%B2%81%E7%94%B7%E7%AB%A5%E8%99%8E%E8%B7%B3%E5%B3%A1%E5%9D%A0%E5%B4%96%E9%81%87%E9%9A%BE%23) `195.8K 🔥` `+47%`
1. [福州偶遇陈赫张子萱](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%B7%9E%E5%81%B6%E9%81%87%E9%99%88%E8%B5%AB%E5%BC%A0%E5%AD%90%E8%90%B1%23) `181.0K 🔥` `+39%`
1. [国际奥委会因印错韩国国旗致歉](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E5%A5%A5%E5%A7%94%E4%BC%9A%E5%9B%A0%E5%8D%B0%E9%94%99%E9%9F%A9%E5%9B%BD%E5%9B%BD%E6%97%97%E8%87%B4%E6%AD%89%23) `153.5K 🔥` `+46%`
1. [杨幂说白帆插足别人婚姻是错误的](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%AF%B4%E7%99%BD%E5%B8%86%E6%8F%92%E8%B6%B3%E5%88%AB%E4%BA%BA%E5%A9%9A%E5%A7%BB%E6%98%AF%E9%94%99%E8%AF%AF%E7%9A%84%23) `126.8K 🔥` `+48%`
1. [虞书欣粉毛cos妆造舞台 (Yu Shuxin pink hair cos makeup stage)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%B2%89%E6%AF%9Bcos%E5%A6%86%E9%80%A0%E8%88%9E%E5%8F%B0%23) `104.4K 🔥` `+24%`
1. [女子U型场地决赛 (Women's halfpipe final)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90U%E5%9E%8B%E5%9C%BA%E5%9C%B0%E5%86%B3%E8%B5%9B%23) `2.1M 🔥`
1. [淀粉肠进入瑜伽裤时代 (Starch intestine enters the era of yoga pants)](https://s.weibo.com/weibo?q=%23%E6%B7%80%E7%B2%89%E8%82%A0%E8%BF%9B%E5%85%A5%E7%91%9C%E4%BC%BD%E8%A3%A4%E6%97%B6%E4%BB%A3%23) `329.5K 🔥`
1. [曝票房15亿是镖人的回本线 (It is revealed that the box office of 1.5 billion is the return line for escorts)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%A5%A8%E6%88%BF15%E4%BA%BF%E6%98%AF%E9%95%96%E4%BA%BA%E7%9A%84%E5%9B%9E%E6%9C%AC%E7%BA%BF%23) `230.9K 🔥`
1. [冬奥会](https://s.weibo.com/weibo?q=%23%E5%86%AC%E5%A5%A5%E4%BC%9A%23) `175.8K 🔥`
1. [彩民随手扔掉千万彩票2天才发现](https://s.weibo.com/weibo?q=%23%E5%BD%A9%E6%B0%91%E9%9A%8F%E6%89%8B%E6%89%94%E6%8E%89%E5%8D%83%E4%B8%87%E5%BD%A9%E7%A5%A82%E5%A4%A9%E6%89%8D%E5%8F%91%E7%8E%B0%23) `116.4K 🔥`
1. [虹猫蓝兔七侠传回来了](https://s.weibo.com/weibo?q=%23%E8%99%B9%E7%8C%AB%E8%93%9D%E5%85%94%E4%B8%83%E4%BE%A0%E4%BC%A0%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `113.0K 🔥`
1. [输液过敏死亡独生女父母有残疾](https://s.weibo.com/weibo?q=%23%E8%BE%93%E6%B6%B2%E8%BF%87%E6%95%8F%E6%AD%BB%E4%BA%A1%E7%8B%AC%E7%94%9F%E5%A5%B3%E7%88%B6%E6%AF%8D%E6%9C%89%E6%AE%8B%E7%96%BE%23) `112.5K 🔥`
1. [徐梦桃王心迪沈阳家中的奖牌墙超震憾](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E7%8E%8B%E5%BF%83%E8%BF%AA%E6%B2%88%E9%98%B3%E5%AE%B6%E4%B8%AD%E7%9A%84%E5%A5%96%E7%89%8C%E5%A2%99%E8%B6%85%E9%9C%87%E6%86%BE%23) `97.2K 🔥`
1. [谷爱凌第二滑94.00分 (Gu Ailing skated second with 94.00 points)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%AC%AC%E4%BA%8C%E6%BB%9194.00%E5%88%86%23) `755.8K 🔥` `-89%`
1. [杨幂演技](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%BC%94%E6%8A%80%23) `195.4K 🔥` `-31%`
1. [不要在吃喝方面拿捏人](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E5%9C%A8%E5%90%83%E5%96%9D%E6%96%B9%E9%9D%A2%E6%8B%BF%E6%8D%8F%E4%BA%BA%23) `162.8K 🔥` `-30%`
1. [孟子义沈妙路透 (Mencius Shen Miao Reuters)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%B2%88%E5%A6%99%E8%B7%AF%E9%80%8F%23) `147.5K 🔥` `-29%`
1. [台湾男子在缅甸妙瓦底被殴打拔指甲](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E7%94%B7%E5%AD%90%E5%9C%A8%E7%BC%85%E7%94%B8%E5%A6%99%E7%93%A6%E5%BA%95%E8%A2%AB%E6%AE%B4%E6%89%93%E6%8B%94%E6%8C%87%E7%94%B2%23) `135.4K 🔥` `-30%`
1. [王婆说媒炫富男子实际年龄40岁](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%A9%86%E8%AF%B4%E5%AA%92%E7%82%AB%E5%AF%8C%E7%94%B7%E5%AD%90%E5%AE%9E%E9%99%85%E5%B9%B4%E9%BE%8440%E5%B2%81%23) `127.8K 🔥` `-32%`
1. [月薪多少才愿意过这样的人生 (How much monthly salary do you need to live such a life?)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA%E5%A4%9A%E5%B0%91%E6%89%8D%E6%84%BF%E6%84%8F%E8%BF%87%E8%BF%99%E6%A0%B7%E7%9A%84%E4%BA%BA%E7%94%9F%23) `119.9K 🔥` `-24%`

Updated at 2026-02-22 19:32:32

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
