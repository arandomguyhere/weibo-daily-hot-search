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

1. [网红白冰偷税911.18万 (Internet celebrity Bai Bing evaded 9.1118 million in taxes)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E7%99%BD%E5%86%B0%E5%81%B7%E7%A8%8E911.18%E4%B8%87%23) `12.9M 🔥` `NEW`
1. [白冰回应偷税被查](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%86%B0%E5%9B%9E%E5%BA%94%E5%81%B7%E7%A8%8E%E8%A2%AB%E6%9F%A5%23) `2.2M 🔥` `NEW`
1. [网警发出五一假期网络安全指南](https://s.weibo.com/weibo?q=%23%E7%BD%91%E8%AD%A6%E5%8F%91%E5%87%BA%E4%BA%94%E4%B8%80%E5%81%87%E6%9C%9F%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8%E6%8C%87%E5%8D%97%23) `1.7M 🔥` `NEW`
1. [杨洋挪瓦全球品牌代言人](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E6%8C%AA%E7%93%A6%E5%85%A8%E7%90%83%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `1.6M 🔥` `NEW`
1. [突然意识到人一定要流动起来](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E4%BA%BA%E4%B8%80%E5%AE%9A%E8%A6%81%E6%B5%81%E5%8A%A8%E8%B5%B7%E6%9D%A5%23) `1.0M 🔥` `NEW`
1. [境外组织大力资助网红煽动躺平](https://s.weibo.com/weibo?q=%23%E5%A2%83%E5%A4%96%E7%BB%84%E7%BB%87%E5%A4%A7%E5%8A%9B%E8%B5%84%E5%8A%A9%E7%BD%91%E7%BA%A2%E7%85%BD%E5%8A%A8%E8%BA%BA%E5%B9%B3%23) `744.1K 🔥` `NEW`
1. [3只虾21块钱](https://s.weibo.com/weibo?q=%233%E5%8F%AA%E8%99%BE21%E5%9D%97%E9%92%B1%23) `607.4K 🔥` `NEW`
1. [五一假期和COA锁死了](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%81%87%E6%9C%9F%E5%92%8CCOA%E9%94%81%E6%AD%BB%E4%BA%86%23) `584.5K 🔥` `NEW`
1. [37岁女子健身2年体重不降反增](https://s.weibo.com/weibo?q=%2337%E5%B2%81%E5%A5%B3%E5%AD%90%E5%81%A5%E8%BA%AB2%E5%B9%B4%E4%BD%93%E9%87%8D%E4%B8%8D%E9%99%8D%E5%8F%8D%E5%A2%9E%23) `570.5K 🔥` `NEW`
1. [王骁田曦薇新剧定档](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%AA%81%E7%94%B0%E6%9B%A6%E8%96%87%E6%96%B0%E5%89%A7%E5%AE%9A%E6%A1%A3%23) `498.4K 🔥` `NEW`
1. [96岁奶奶回应10年还清2077万债 (96-year-old grandma responds by paying off 20.77 million debt in 10 years)](https://s.weibo.com/weibo?q=%2396%E5%B2%81%E5%A5%B6%E5%A5%B6%E5%9B%9E%E5%BA%9410%E5%B9%B4%E8%BF%98%E6%B8%852077%E4%B8%87%E5%80%BA%23) `482.4K 🔥` `NEW`
1. [本科新增38种专业](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E7%A7%91%E6%96%B0%E5%A2%9E38%E7%A7%8D%E4%B8%93%E4%B8%9A%23) `357.4K 🔥` `NEW`
1. [miumiu陷害女明星](https://s.weibo.com/weibo?q=%23miumiu%E9%99%B7%E5%AE%B3%E5%A5%B3%E6%98%8E%E6%98%9F%23) `348.9K 🔥` `NEW`
1. [淘宝 毒品直接前体](https://s.weibo.com/weibo?q=%23%E6%B7%98%E5%AE%9D%20%E6%AF%92%E5%93%81%E7%9B%B4%E6%8E%A5%E5%89%8D%E4%BD%93%23) `336.4K 🔥` `NEW`
1. [金莎否认怀孕](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E5%90%A6%E8%AE%A4%E6%80%80%E5%AD%95%23) `326.9K 🔥` `NEW`
1. [小钰 Rookie](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%92%B0%20Rookie%23) `314.5K 🔥` `NEW`
1. [迪丽热巴直播捂肚强忍疼痛](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9B%B4%E6%92%AD%E6%8D%82%E8%82%9A%E5%BC%BA%E5%BF%8D%E7%96%BC%E7%97%9B%23) `299.6K 🔥` `NEW`
1. [曝张凌赫低血糖摔倒了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%BD%8E%E8%A1%80%E7%B3%96%E6%91%94%E5%80%92%E4%BA%86%23) `272.9K 🔥` `NEW`
1. [白冰长期炫富引争议](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%86%B0%E9%95%BF%E6%9C%9F%E7%82%AB%E5%AF%8C%E5%BC%95%E4%BA%89%E8%AE%AE%23) `253.7K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `237.7K 🔥` `NEW`
1. [误闯天家歌词到底啥意思 (What do the lyrics of "Wandering into Tianjia by mistake" mean?)](https://s.weibo.com/weibo?q=%23%E8%AF%AF%E9%97%AF%E5%A4%A9%E5%AE%B6%E6%AD%8C%E8%AF%8D%E5%88%B0%E5%BA%95%E5%95%A5%E6%84%8F%E6%80%9D%23) `226.3K 🔥` `NEW`
1. [杨洋新造型帅的太客观了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E6%96%B0%E9%80%A0%E5%9E%8B%E5%B8%85%E7%9A%84%E5%A4%AA%E5%AE%A2%E8%A7%82%E4%BA%86%23) `215.0K 🔥` `NEW`
1. [Rookie疑似遭小钰自杀威胁](https://s.weibo.com/weibo?q=%23Rookie%E7%96%91%E4%BC%BC%E9%81%AD%E5%B0%8F%E9%92%B0%E8%87%AA%E6%9D%80%E5%A8%81%E8%83%81%23) `214.2K 🔥` `NEW`
1. [曝和白敬亭演爆剧小鲜肉骗婚骗财](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%92%8C%E7%99%BD%E6%95%AC%E4%BA%AD%E6%BC%94%E7%88%86%E5%89%A7%E5%B0%8F%E9%B2%9C%E8%82%89%E9%AA%97%E5%A9%9A%E9%AA%97%E8%B4%A2%23) `214.0K 🔥` `NEW`
1. [张凌赫发语音报平安](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%8F%91%E8%AF%AD%E9%9F%B3%E6%8A%A5%E5%B9%B3%E5%AE%89%23) `213.9K 🔥` `NEW`
1. [油价又大涨了](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E5%8F%88%E5%A4%A7%E6%B6%A8%E4%BA%86%23) `213.4K 🔥` `NEW`
1. [爆米花冰淇淋夯爆了](https://s.weibo.com/weibo?q=%23%E7%88%86%E7%B1%B3%E8%8A%B1%E5%86%B0%E6%B7%87%E6%B7%8B%E5%A4%AF%E7%88%86%E4%BA%86%23) `212.8K 🔥` `NEW`
1. [张慧雯三公小考成绩](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%85%A7%E9%9B%AF%E4%B8%89%E5%85%AC%E5%B0%8F%E8%80%83%E6%88%90%E7%BB%A9%23) `212.7K 🔥` `NEW`
1. [Rookie的店倒闭小钰承担了几百万债务](https://s.weibo.com/weibo?q=%23Rookie%E7%9A%84%E5%BA%97%E5%80%92%E9%97%AD%E5%B0%8F%E9%92%B0%E6%89%BF%E6%8B%85%E4%BA%86%E5%87%A0%E7%99%BE%E4%B8%87%E5%80%BA%E5%8A%A1%23) `212.0K 🔥` `NEW`
1. [蓝莓出轨](https://s.weibo.com/weibo?q=%23%E8%93%9D%E8%8E%93%E5%87%BA%E8%BD%A8%23) `211.2K 🔥` `NEW`
1. [老人从81岁到91岁还清2077万的债 (The old man paid off a debt of 20.77 million from the age of 81 to 91)](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E4%BB%8E81%E5%B2%81%E5%88%B091%E5%B2%81%E8%BF%98%E6%B8%852077%E4%B8%87%E7%9A%84%E5%80%BA%23) `210.6K 🔥` `NEW`
1. [林志玲自曝和公婆住一起](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%97%E7%8E%B2%E8%87%AA%E6%9B%9D%E5%92%8C%E5%85%AC%E5%A9%86%E4%BD%8F%E4%B8%80%E8%B5%B7%23) `210.1K 🔥` `NEW`
1. [萨摩耶接住了小猫](https://s.weibo.com/weibo?q=%23%E8%90%A8%E6%91%A9%E8%80%B6%E6%8E%A5%E4%BD%8F%E4%BA%86%E5%B0%8F%E7%8C%AB%23) `209.9K 🔥` `NEW`
1. [白冰自曝回绝过七位数探店费用](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%86%B0%E8%87%AA%E6%9B%9D%E5%9B%9E%E7%BB%9D%E8%BF%87%E4%B8%83%E4%BD%8D%E6%95%B0%E6%8E%A2%E5%BA%97%E8%B4%B9%E7%94%A8%23) `209.5K 🔥` `NEW`
1. [小钰陪了Rookie九年](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%92%B0%E9%99%AA%E4%BA%86Rookie%E4%B9%9D%E5%B9%B4%23) `209.3K 🔥` `NEW`
1. [白冰连续4年偷税](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%86%B0%E8%BF%9E%E7%BB%AD4%E5%B9%B4%E5%81%B7%E7%A8%8E%23) `208.8K 🔥` `NEW`
1. [林志玲凌晨3点给蔡康永发短信](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%97%E7%8E%B2%E5%87%8C%E6%99%A83%E7%82%B9%E7%BB%99%E8%94%A1%E5%BA%B7%E6%B0%B8%E5%8F%91%E7%9F%AD%E4%BF%A1%23) `208.4K 🔥` `NEW`
1. [低智商犯罪](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E6%99%BA%E5%95%86%E7%8A%AF%E7%BD%AA%23) `207.6K 🔥` `NEW`
1. [歌手2026](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%23) `207.3K 🔥` `NEW`
1. [全球最大钠离子电池订单](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E6%9C%80%E5%A4%A7%E9%92%A0%E7%A6%BB%E5%AD%90%E7%94%B5%E6%B1%A0%E8%AE%A2%E5%8D%95%23) `206.9K 🔥` `NEW`
1. [网红白冰买名牌包挂公司账 (Internet celebrity Bai Bing buys brand-name bags and puts them in the company's account)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E7%99%BD%E5%86%B0%E4%B9%B0%E5%90%8D%E7%89%8C%E5%8C%85%E6%8C%82%E5%85%AC%E5%8F%B8%E8%B4%A6%23) `206.4K 🔥` `NEW`
1. [曝时代少年团广州演唱会一人一个大屏](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%B9%BF%E5%B7%9E%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%80%E4%BA%BA%E4%B8%80%E4%B8%AA%E5%A4%A7%E5%B1%8F%23) `208.0K 🔥` `+91%`
1. [Rookie女友发文](https://s.weibo.com/weibo?q=%23Rookie%E5%A5%B3%E5%8F%8B%E5%8F%91%E6%96%87%23) `265.7K 🔥`
1. [王楚然高度近视但绝不眯眼](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E9%AB%98%E5%BA%A6%E8%BF%91%E8%A7%86%E4%BD%86%E7%BB%9D%E4%B8%8D%E7%9C%AF%E7%9C%BC%23) `211.7K 🔥`
1. [胖东来饺子皮包装提示被网友夸赞](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E9%A5%BA%E5%AD%90%E7%9A%AE%E5%8C%85%E8%A3%85%E6%8F%90%E7%A4%BA%E8%A2%AB%E7%BD%91%E5%8F%8B%E5%A4%B8%E8%B5%9E%23) `211.1K 🔥`
1. [俞敏洪曾称不再有主播独立成平台](https://s.weibo.com/weibo?q=%23%E4%BF%9E%E6%95%8F%E6%B4%AA%E6%9B%BE%E7%A7%B0%E4%B8%8D%E5%86%8D%E6%9C%89%E4%B8%BB%E6%92%AD%E7%8B%AC%E7%AB%8B%E6%88%90%E5%B9%B3%E5%8F%B0%23) `212.5K 🔥` `-27%`
1. [曝张月团三公小考倒数第一 (It was revealed that Zhang Yuetuan’s third son ranked last in the quiz)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BC%A0%E6%9C%88%E5%9B%A2%E4%B8%89%E5%85%AC%E5%B0%8F%E8%80%83%E5%80%92%E6%95%B0%E7%AC%AC%E4%B8%80%23) `212.2K 🔥` `-30%`
1. [杨幂脸被蒸汽眼罩烫伤了 (Yang Mi's face was burned by steam eye mask)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%84%B8%E8%A2%AB%E8%92%B8%E6%B1%BD%E7%9C%BC%E7%BD%A9%E7%83%AB%E4%BC%A4%E4%BA%86%23) `210.6K 🔥` `-28%`
1. [晚上10点睡和11点睡的三个区别 (Three differences between going to bed at 10pm and going to bed at 11pm)](https://s.weibo.com/weibo?q=%23%E6%99%9A%E4%B8%8A10%E7%82%B9%E7%9D%A1%E5%92%8C11%E7%82%B9%E7%9D%A1%E7%9A%84%E4%B8%89%E4%B8%AA%E5%8C%BA%E5%88%AB%23) `209.0K 🔥` `-28%`
1. [现货黄金](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E8%B4%A7%E9%BB%84%E9%87%91%23) `207.8K 🔥` `-29%`
1. [浪姐三公小考结果](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%B8%89%E5%85%AC%E5%B0%8F%E8%80%83%E7%BB%93%E6%9E%9C%23) `206.5K 🔥` `-74%`

Updated at 2026-04-28 12:03:43

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
