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

1. [法国1比0伊拉克 (France 1-0 Iraq)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD1%E6%AF%940%E4%BC%8A%E6%8B%89%E5%85%8B%23) `1.4M 🔥` `NEW`
1. [会接话是一种高级能力](https://s.weibo.com/weibo?q=%23%E4%BC%9A%E6%8E%A5%E8%AF%9D%E6%98%AF%E4%B8%80%E7%A7%8D%E9%AB%98%E7%BA%A7%E8%83%BD%E5%8A%9B%23) `599.7K 🔥` `NEW`
1. [乐道CEO称考清华比搞换电容易](https://s.weibo.com/weibo?q=%23%E4%B9%90%E9%81%93CEO%E7%A7%B0%E8%80%83%E6%B8%85%E5%8D%8E%E6%AF%94%E6%90%9E%E6%8D%A2%E7%94%B5%E5%AE%B9%E6%98%93%23) `599.3K 🔥` `NEW`
1. [夏奇拉好美](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E5%A5%87%E6%8B%89%E5%A5%BD%E7%BE%8E%23) `599.1K 🔥` `NEW`
1. [郑嘉颖破防了](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%98%89%E9%A2%96%E7%A0%B4%E9%98%B2%E4%BA%86%23) `400.9K 🔥` `NEW`
1. [姆巴佩梅开二度](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%A2%85%E5%BC%80%E4%BA%8C%E5%BA%A6%23) `353.2K 🔥` `NEW`
1. [浪姐总决赛嘉宾秀](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%80%BB%E5%86%B3%E8%B5%9B%E5%98%89%E5%AE%BE%E7%A7%80%23) `283.7K 🔥` `NEW`
1. [挪威vs塞内加尔](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81vs%E5%A1%9E%E5%86%85%E5%8A%A0%E5%B0%94%23) `239.6K 🔥` `NEW`
1. [金莎 我真的不是一米五几](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%20%E6%88%91%E7%9C%9F%E7%9A%84%E4%B8%8D%E6%98%AF%E4%B8%80%E7%B1%B3%E4%BA%94%E5%87%A0%23) `236.3K 🔥` `NEW`
1. [BBC谈日本球迷捡垃圾](https://s.weibo.com/weibo?q=%23BBC%E8%B0%88%E6%97%A5%E6%9C%AC%E7%90%83%E8%BF%B7%E6%8D%A1%E5%9E%83%E5%9C%BE%23) `226.7K 🔥` `NEW`
1. [2颗牙拔3小时把口腔鼻腔拔通了 (It took 3 hours to extract 2 teeth and clear the mouth and nose.)](https://s.weibo.com/weibo?q=%232%E9%A2%97%E7%89%99%E6%8B%943%E5%B0%8F%E6%97%B6%E6%8A%8A%E5%8F%A3%E8%85%94%E9%BC%BB%E8%85%94%E6%8B%94%E9%80%9A%E4%BA%86%23) `208.3K 🔥` `NEW`
1. [5岁男孩喝开水冲蛋感染沙门菌](https://s.weibo.com/weibo?q=%235%E5%B2%81%E7%94%B7%E5%AD%A9%E5%96%9D%E5%BC%80%E6%B0%B4%E5%86%B2%E8%9B%8B%E6%84%9F%E6%9F%93%E6%B2%99%E9%97%A8%E8%8F%8C%23) `168.9K 🔥` `NEW`
1. [姆巴佩 世界杯最快15球](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%20%E4%B8%96%E7%95%8C%E6%9D%AF%E6%9C%80%E5%BF%AB15%E7%90%83%23) `163.9K 🔥` `NEW`
1. [曝何宣林将进组万花世界](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%BD%95%E5%AE%A3%E6%9E%97%E5%B0%86%E8%BF%9B%E7%BB%84%E4%B8%87%E8%8A%B1%E4%B8%96%E7%95%8C%23) `146.2K 🔥` `NEW`
1. [阿根廷主帅回应2比0奥地利](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%B8%BB%E5%B8%85%E5%9B%9E%E5%BA%942%E6%AF%940%E5%A5%A5%E5%9C%B0%E5%88%A9%23) `145.2K 🔥` `NEW`
1. [印男子坐轮胎爆炸被炸飞5米高死亡](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E7%94%B7%E5%AD%90%E5%9D%90%E8%BD%AE%E8%83%8E%E7%88%86%E7%82%B8%E8%A2%AB%E7%82%B8%E9%A3%9E5%E7%B1%B3%E9%AB%98%E6%AD%BB%E4%BA%A1%23) `131.3K 🔥` `NEW`
1. [25年前男子偷马被打死案重新审理](https://s.weibo.com/weibo?q=%2325%E5%B9%B4%E5%89%8D%E7%94%B7%E5%AD%90%E5%81%B7%E9%A9%AC%E8%A2%AB%E6%89%93%E6%AD%BB%E6%A1%88%E9%87%8D%E6%96%B0%E5%AE%A1%E7%90%86%23) `120.3K 🔥` `NEW`
1. [薛之谦看球的精神状态](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E7%9C%8B%E7%90%83%E7%9A%84%E7%B2%BE%E7%A5%9E%E7%8A%B6%E6%80%81%23) `117.6K 🔥` `NEW`
1. [发朋友圈本质是想被看到](https://s.weibo.com/weibo?q=%23%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%E6%9C%AC%E8%B4%A8%E6%98%AF%E6%83%B3%E8%A2%AB%E7%9C%8B%E5%88%B0%23) `102.3K 🔥` `NEW`
1. [美联储今年不降息黄金恐崩](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%81%94%E5%82%A8%E4%BB%8A%E5%B9%B4%E4%B8%8D%E9%99%8D%E6%81%AF%E9%BB%84%E9%87%91%E6%81%90%E5%B4%A9%23) `102.2K 🔥` `NEW`
1. [上刀山下火海的荣耀X80ProMax (Honor X80ProMax, the ultimate hero)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%88%80%E5%B1%B1%E4%B8%8B%E7%81%AB%E6%B5%B7%E7%9A%84%E8%8D%A3%E8%80%80X80ProMax%23) `101.6K 🔥` `NEW`
1. [姆巴佩左脚世界波 (Mbappe's left foot waves the world)](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%B7%A6%E8%84%9A%E4%B8%96%E7%95%8C%E6%B3%A2%23) `9.9M 🔥` `+121%`
1. [法国vs伊拉克 好大的雨 (France vs Iraq It’s raining heavily)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BDvs%E4%BC%8A%E6%8B%89%E5%85%8B%20%E5%A5%BD%E5%A4%A7%E7%9A%84%E9%9B%A8%23) `1.9M 🔥` `+95%`
1. [端午假期国内出游1.24亿人次](https://s.weibo.com/weibo?q=%23%E7%AB%AF%E5%8D%88%E5%81%87%E6%9C%9F%E5%9B%BD%E5%86%85%E5%87%BA%E6%B8%B81.24%E4%BA%BF%E4%BA%BA%E6%AC%A1%23) `1.5M 🔥` `+71%`
1. [李金铭农村综艺那家人已败诉 (Li Jinming’s rural variety show’s family has lost the lawsuit)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%87%91%E9%93%AD%E5%86%9C%E6%9D%91%E7%BB%BC%E8%89%BA%E9%82%A3%E5%AE%B6%E4%BA%BA%E5%B7%B2%E8%B4%A5%E8%AF%89%23) `1.4M 🔥` `+94%`
1. [阿根廷2比0奥地利 (Argentina 2-0 Austria)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B72%E6%AF%940%E5%A5%A5%E5%9C%B0%E5%88%A9%23) `1.3M 🔥` `+69%`
1. [法国vs伊拉克](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BDvs%E4%BC%8A%E6%8B%89%E5%85%8B%23) `653.5K 🔥` `+80%`
1. [逐玉导演 战争戏不需要逻辑 (Director Zhuyu: War scenes don’t require logic)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%AF%BC%E6%BC%94%20%E6%88%98%E4%BA%89%E6%88%8F%E4%B8%8D%E9%9C%80%E8%A6%81%E9%80%BB%E8%BE%91%23) `616.0K 🔥` `+44%`
1. [李金铭农村综艺那家人居然还在发她](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%87%91%E9%93%AD%E5%86%9C%E6%9D%91%E7%BB%BC%E8%89%BA%E9%82%A3%E5%AE%B6%E4%BA%BA%E5%B1%85%E7%84%B6%E8%BF%98%E5%9C%A8%E5%8F%91%E5%A5%B9%23) `592.2K 🔥` `+47%`
1. [学霸真的是一种很神奇的生物](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E9%9C%B8%E7%9C%9F%E7%9A%84%E6%98%AF%E4%B8%80%E7%A7%8D%E5%BE%88%E7%A5%9E%E5%A5%87%E7%9A%84%E7%94%9F%E7%89%A9%23) `467.2K 🔥` `+150%`
1. [医生我有点不舒服我要出院](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E6%88%91%E6%9C%89%E7%82%B9%E4%B8%8D%E8%88%92%E6%9C%8D%E6%88%91%E8%A6%81%E5%87%BA%E9%99%A2%23) `419.7K 🔥` `+127%`
1. [女子暴雨躲文旅局门口遭保安驱赶 (Woman hid in front of Cultural Tourism Bureau during heavy rain but was chased away by security guards)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%9A%B4%E9%9B%A8%E8%BA%B2%E6%96%87%E6%97%85%E5%B1%80%E9%97%A8%E5%8F%A3%E9%81%AD%E4%BF%9D%E5%AE%89%E9%A9%B1%E8%B5%B6%23) `416.0K 🔥` `+124%`
1. [苏醒 预言家](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%20%E9%A2%84%E8%A8%80%E5%AE%B6%23) `390.5K 🔥` `+109%`
1. [恋与深空一直在说对不起 (Love and Deep Sky keep saying sorry)](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E4%B8%80%E7%9B%B4%E5%9C%A8%E8%AF%B4%E5%AF%B9%E4%B8%8D%E8%B5%B7%23) `379.9K 🔥` `+104%`
1. [江阴文旅局回应市民躲雨被驱赶](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E9%98%B4%E6%96%87%E6%97%85%E5%B1%80%E5%9B%9E%E5%BA%94%E5%B8%82%E6%B0%91%E8%BA%B2%E9%9B%A8%E8%A2%AB%E9%A9%B1%E8%B5%B6%23) `363.6K 🔥` `+161%`
1. [推特崩了](https://s.weibo.com/weibo?q=%23%E6%8E%A8%E7%89%B9%E5%B4%A9%E4%BA%86%23) `356.1K 🔥` `+154%`
1. [敖尹 丑 (Ao Yin ugly)](https://s.weibo.com/weibo?q=%23%E6%95%96%E5%B0%B9%20%E4%B8%91%23) `254.9K 🔥` `+82%`
1. [物理AI第一股上市首日高开302%](https://s.weibo.com/weibo?q=%23%E7%89%A9%E7%90%86AI%E7%AC%AC%E4%B8%80%E8%82%A1%E4%B8%8A%E5%B8%82%E9%A6%96%E6%97%A5%E9%AB%98%E5%BC%80302%25%23) `247.2K 🔥` `+61%`
1. [白玉兰 (magnolia)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%23) `238.6K 🔥` `+68%`
1. [双胞胎是不是骗过了神明的人 (Are the twins people who deceived the gods?)](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E8%83%9E%E8%83%8E%E6%98%AF%E4%B8%8D%E6%98%AF%E9%AA%97%E8%BF%87%E4%BA%86%E7%A5%9E%E6%98%8E%E7%9A%84%E4%BA%BA%23) `232.9K 🔥` `+457%`
1. [广德车祸司机被刑拘 (Driver in Guangde car accident detained)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%BE%B7%E8%BD%A6%E7%A5%B8%E5%8F%B8%E6%9C%BA%E8%A2%AB%E5%88%91%E6%8B%98%23) `228.6K 🔥` `+161%`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `227.6K 🔥` `+92%`
1. [孙怡到底买了多少顶老孙帽](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E5%88%B0%E5%BA%95%E4%B9%B0%E4%BA%86%E5%A4%9A%E5%B0%91%E9%A1%B6%E8%80%81%E5%AD%99%E5%B8%BD%23) `140.8K 🔥` `+148%`
1. [周冬雨说导演老说词不用背](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%86%AC%E9%9B%A8%E8%AF%B4%E5%AF%BC%E6%BC%94%E8%80%81%E8%AF%B4%E8%AF%8D%E4%B8%8D%E7%94%A8%E8%83%8C%23) `138.4K 🔥` `+127%`
1. [女子称44岁在阿里工作22年被裁](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B044%E5%B2%81%E5%9C%A8%E9%98%BF%E9%87%8C%E5%B7%A5%E4%BD%9C22%E5%B9%B4%E8%A2%AB%E8%A3%81%23) `101.9K 🔥` `+81%`
1. [恋与深空回应](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%9B%9E%E5%BA%94%23) `101.3K 🔥` `+77%`
1. [阿根廷失点 (Argentina lost points)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%A4%B1%E7%82%B9%23) `312.5K 🔥`
1. [官方通报基层教师周末参与巡查](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%9F%BA%E5%B1%82%E6%95%99%E5%B8%88%E5%91%A8%E6%9C%AB%E5%8F%82%E4%B8%8E%E5%B7%A1%E6%9F%A5%23) `141.4K 🔥`
1. [建议大家把消极口癖戒掉](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E6%8A%8A%E6%B6%88%E6%9E%81%E5%8F%A3%E7%99%96%E6%88%92%E6%8E%89%23) `105.3K 🔥`
1. [香港机场黄金劫案4人潜逃至内地 (Four people involved in the Hong Kong Airport gold robbery absconded to the mainland)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E6%9C%BA%E5%9C%BA%E9%BB%84%E9%87%91%E5%8A%AB%E6%A1%884%E4%BA%BA%E6%BD%9C%E9%80%83%E8%87%B3%E5%86%85%E5%9C%B0%23) `114.3K 🔥` `-22%`

Updated at 2026-06-23 08:20:26

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
