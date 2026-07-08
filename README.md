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

1. [世界杯8强全部产生 (All the top 8 players in the World Cup are produced)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF8%E5%BC%BA%E5%85%A8%E9%83%A8%E4%BA%A7%E7%94%9F%23) `2.1M 🔥` `NEW`
1. [阿根廷埃及球迷爆发冲突](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%9F%83%E5%8F%8A%E7%90%83%E8%BF%B7%E7%88%86%E5%8F%91%E5%86%B2%E7%AA%81%23) `1.5M 🔥` `NEW`
1. [小米汽车新系列](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%E6%96%B0%E7%B3%BB%E5%88%97%23) `544.9K 🔥` `NEW`
1. [阿根廷埃及 需要马宁](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%9F%83%E5%8F%8A%20%E9%9C%80%E8%A6%81%E9%A9%AC%E5%AE%81%23) `499.8K 🔥` `NEW`
1. [苏醒回应阿根廷队黑赢](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%E5%9B%9E%E5%BA%94%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E9%BB%91%E8%B5%A2%23) `495.8K 🔥` `NEW`
1. [我继承了喜欢过的人身上的习惯](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%BB%A7%E6%89%BF%E4%BA%86%E5%96%9C%E6%AC%A2%E8%BF%87%E7%9A%84%E4%BA%BA%E8%BA%AB%E4%B8%8A%E7%9A%84%E4%B9%A0%E6%83%AF%23) `479.8K 🔥` `NEW`
1. [法国裁判 阿根廷](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E8%A3%81%E5%88%A4%20%E9%98%BF%E6%A0%B9%E5%BB%B7%23) `475.1K 🔥` `NEW`
1. [本届世界杯首次所有裁判来自同一国家](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%B1%8A%E4%B8%96%E7%95%8C%E6%9D%AF%E9%A6%96%E6%AC%A1%E6%89%80%E6%9C%89%E8%A3%81%E5%88%A4%E6%9D%A5%E8%87%AA%E5%90%8C%E4%B8%80%E5%9B%BD%E5%AE%B6%23) `470.5K 🔥` `NEW`
1. [台风巴威](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%23) `469.0K 🔥` `NEW`
1. [美军对伊朗发动强力打击](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E5%AF%B9%E4%BC%8A%E6%9C%97%E5%8F%91%E5%8A%A8%E5%BC%BA%E5%8A%9B%E6%89%93%E5%87%BB%23) `465.0K 🔥` `NEW`
1. [霉霉已经可以买下月球了 (Swifty Swift can already buy the moon)](https://s.weibo.com/weibo?q=%23%E9%9C%89%E9%9C%89%E5%B7%B2%E7%BB%8F%E5%8F%AF%E4%BB%A5%E4%B9%B0%E4%B8%8B%E6%9C%88%E7%90%83%E4%BA%86%23) `461.6K 🔥` `NEW`
1. [救援人员接到群众遭蛇咬求助](https://s.weibo.com/weibo?q=%23%E6%95%91%E6%8F%B4%E4%BA%BA%E5%91%98%E6%8E%A5%E5%88%B0%E7%BE%A4%E4%BC%97%E9%81%AD%E8%9B%87%E5%92%AC%E6%B1%82%E5%8A%A9%23) `460.4K 🔥` `NEW`
1. [董宇辉陪昆凌和孩子们爬长城](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%AE%87%E8%BE%89%E9%99%AA%E6%98%86%E5%87%8C%E5%92%8C%E5%AD%A9%E5%AD%90%E4%BB%AC%E7%88%AC%E9%95%BF%E5%9F%8E%23) `455.3K 🔥` `NEW`
1. [恋与深空退出BW](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E9%80%80%E5%87%BABW%23) `450.6K 🔥` `NEW`
1. [歌手2026第8期歌单](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%E7%AC%AC8%E6%9C%9F%E6%AD%8C%E5%8D%95%23) `445.5K 🔥` `NEW`
1. [村民看到房子只剩楼梯失声痛哭](https://s.weibo.com/weibo?q=%23%E6%9D%91%E6%B0%91%E7%9C%8B%E5%88%B0%E6%88%BF%E5%AD%90%E5%8F%AA%E5%89%A9%E6%A5%BC%E6%A2%AF%E5%A4%B1%E5%A3%B0%E7%97%9B%E5%93%AD%23) `440.4K 🔥` `NEW`
1. [特朗普说中国威胁论纯属危言耸听](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E4%B8%AD%E5%9B%BD%E5%A8%81%E8%83%81%E8%AE%BA%E7%BA%AF%E5%B1%9E%E5%8D%B1%E8%A8%80%E8%80%B8%E5%90%AC%23) `431.3K 🔥` `NEW`
1. [王楚然的综艺效果](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%9A%84%E7%BB%BC%E8%89%BA%E6%95%88%E6%9E%9C%23) `427.4K 🔥` `NEW`
1. [张月霸气买单](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E9%9C%B8%E6%B0%94%E4%B9%B0%E5%8D%95%23) `424.3K 🔥` `NEW`
1. [华为智驾断网里程仍涨](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E6%99%BA%E9%A9%BE%E6%96%AD%E7%BD%91%E9%87%8C%E7%A8%8B%E4%BB%8D%E6%B6%A8%23) `420.0K 🔥` `NEW`
1. [小米增程车上市节奏曝光 (Xiaomi's range-extended vehicle launch rhythm revealed)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%A2%9E%E7%A8%8B%E8%BD%A6%E4%B8%8A%E5%B8%82%E8%8A%82%E5%A5%8F%E6%9B%9D%E5%85%89%23) `417.4K 🔥` `NEW`
1. [周深还是孟子义邀请来唱的](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E8%BF%98%E6%98%AF%E5%AD%9F%E5%AD%90%E4%B9%89%E9%82%80%E8%AF%B7%E6%9D%A5%E5%94%B1%E7%9A%84%23) `415.0K 🔥` `NEW`
1. [野狗骨头对视吻](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E5%AF%B9%E8%A7%86%E5%90%BB%23) `412.1K 🔥` `NEW`
1. [詹俊谈阿根廷绝杀埃及](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E4%BF%8A%E8%B0%88%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%BB%9D%E6%9D%80%E5%9F%83%E5%8F%8A%23) `408.8K 🔥` `NEW`
1. [17年后俞灏明端木磊回来了](https://s.weibo.com/weibo?q=%2317%E5%B9%B4%E5%90%8E%E4%BF%9E%E7%81%8F%E6%98%8E%E7%AB%AF%E6%9C%A8%E7%A3%8A%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `408.0K 🔥` `NEW`
1. [阿根廷 脏 (argentina dirty)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%20%E8%84%8F%23) `14.1M 🔥` `+157%`
1. [脱口秀唐香玉拒不道歉被强执](https://s.weibo.com/weibo?q=%23%E8%84%B1%E5%8F%A3%E7%A7%80%E5%94%90%E9%A6%99%E7%8E%89%E6%8B%92%E4%B8%8D%E9%81%93%E6%AD%89%E8%A2%AB%E5%BC%BA%E6%89%A7%23) `1.4M 🔥` `+31%`
1. [探访三江源 (Visit Sanjiangyuan)](https://s.weibo.com/weibo?q=%23%E6%8E%A2%E8%AE%BF%E4%B8%89%E6%B1%9F%E6%BA%90%23) `1.7M 🔥`
1. [陈楚生苏醒张远陆虎一起看球 (Chen Chusheng wakes up, Zhang Yuan and Land Rover watch football together)](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%A5%9A%E7%94%9F%E8%8B%8F%E9%86%92%E5%BC%A0%E8%BF%9C%E9%99%86%E8%99%8E%E4%B8%80%E8%B5%B7%E7%9C%8B%E7%90%83%23) `505.9K 🔥` `-42%`
1. [5000元以下笔记本基本绝迹](https://s.weibo.com/weibo?q=%235000%E5%85%83%E4%BB%A5%E4%B8%8B%E7%AC%94%E8%AE%B0%E6%9C%AC%E5%9F%BA%E6%9C%AC%E7%BB%9D%E8%BF%B9%23) `505.2K 🔥` `-50%`
1. [现在就出发4 (Let's go now 4)](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%23) `503.1K 🔥` `-53%`
1. [埃及队抗议 (Egypt team protest)](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E9%98%9F%E6%8A%97%E8%AE%AE%23) `498.3K 🔥` `-76%`
1. [苏醒 球王这点球太臭了](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%20%E7%90%83%E7%8E%8B%E8%BF%99%E7%82%B9%E7%90%83%E5%A4%AA%E8%87%AD%E4%BA%86%23) `493.8K 🔥` `-53%`
1. [佛得角送门将劳斯莱斯加房产](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%80%81%E9%97%A8%E5%B0%86%E5%8A%B3%E6%96%AF%E8%8E%B1%E6%96%AF%E5%8A%A0%E6%88%BF%E4%BA%A7%23) `490.6K 🔥` `-53%`
1. [世界杯冠军直接颁给门将吧](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%A0%E5%86%9B%E7%9B%B4%E6%8E%A5%E9%A2%81%E7%BB%99%E9%97%A8%E5%B0%86%E5%90%A7%23) `488.0K 🔥` `-77%`
1. [四川高县5.0级地震 (5.0 magnitude earthquake in Gaoxian County, Sichuan)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E9%AB%98%E5%8E%BF5.0%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `485.7K 🔥` `-52%`
1. [瑞士4比3哥伦比亚 (Switzerland 4-3 Colombia)](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%A3%AB4%E6%AF%943%E5%93%A5%E4%BC%A6%E6%AF%94%E4%BA%9A%23) `482.5K 🔥` `-53%`
1. [现在就出发4 金晨](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%20%E9%87%91%E6%99%A8%23) `482.2K 🔥` `-55%`
1. [埃及进球取消黄牌取消不了](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E8%BF%9B%E7%90%83%E5%8F%96%E6%B6%88%E9%BB%84%E7%89%8C%E5%8F%96%E6%B6%88%E4%B8%8D%E4%BA%86%23) `477.2K 🔥` `-52%`
1. [野狗骨头把女生黄体破裂拍出来了](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E6%8A%8A%E5%A5%B3%E7%94%9F%E9%BB%84%E4%BD%93%E7%A0%B4%E8%A3%82%E6%8B%8D%E5%87%BA%E6%9D%A5%E4%BA%86%23) `466.0K 🔥` `-53%`
1. [赵丽颖张翰的咖位](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%BC%A0%E7%BF%B0%E7%9A%84%E5%92%96%E4%BD%8D%23) `457.9K 🔥` `-52%`
1. [萨拉赫 点球争议](https://s.weibo.com/weibo?q=%23%E8%90%A8%E6%8B%89%E8%B5%AB%20%E7%82%B9%E7%90%83%E4%BA%89%E8%AE%AE%23) `452.8K 🔥` `-57%`
1. [感觉江浙沪对于台风反应都很平静](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E6%B1%9F%E6%B5%99%E6%B2%AA%E5%AF%B9%E4%BA%8E%E5%8F%B0%E9%A3%8E%E5%8F%8D%E5%BA%94%E9%83%BD%E5%BE%88%E5%B9%B3%E9%9D%99%23) `446.7K 🔥` `-55%`
1. [宜宾地震](https://s.weibo.com/weibo?q=%23%E5%AE%9C%E5%AE%BE%E5%9C%B0%E9%9C%87%23) `444.0K 🔥` `-59%`
1. [阿根廷3比2埃及](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B73%E6%AF%942%E5%9F%83%E5%8F%8A%23) `437.9K 🔥` `-59%`
1. [49岁男子招嫖被骗90万气晕妻子 (A 49-year-old man was cheated of NT$900,000 for soliciting prostitution and his wife was furious.)](https://s.weibo.com/weibo?q=%2349%E5%B2%81%E7%94%B7%E5%AD%90%E6%8B%9B%E5%AB%96%E8%A2%AB%E9%AA%9790%E4%B8%87%E6%B0%94%E6%99%95%E5%A6%BB%E5%AD%90%23) `435.6K 🔥` `-53%`
1. [人一定要频繁大量记录自己 (People must record themselves frequently and extensively)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E5%AE%9A%E8%A6%81%E9%A2%91%E7%B9%81%E5%A4%A7%E9%87%8F%E8%AE%B0%E5%BD%95%E8%87%AA%E5%B7%B1%23) `433.3K 🔥` `-56%`
1. [阿根廷vs埃及 (Argentina vs Egypt)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7vs%E5%9F%83%E5%8F%8A%23) `428.0K 🔥` `-55%`
1. [广东广西洪涝](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E5%B9%BF%E8%A5%BF%E6%B4%AA%E6%B6%9D%23) `421.0K 🔥` `-56%`
1. [24元救命药涨到600元还买不到 (Life-saving medicine that costs 24 yuan has risen to 600 yuan and is still unavailable)](https://s.weibo.com/weibo?q=%2324%E5%85%83%E6%95%91%E5%91%BD%E8%8D%AF%E6%B6%A8%E5%88%B0600%E5%85%83%E8%BF%98%E4%B9%B0%E4%B8%8D%E5%88%B0%23) `405.8K 🔥` `-53%`

Updated at 2026-07-08 09:12:16

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
