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

1. [世界杯 天台挤不下了 (World Cup rooftop can’t be crowded)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%20%E5%A4%A9%E5%8F%B0%E6%8C%A4%E4%B8%8D%E4%B8%8B%E4%BA%86%23) `2.1M 🔥` `NEW`
1. [公安部网安局公布5起银狐木马典型案例](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%AE%89%E9%83%A8%E7%BD%91%E5%AE%89%E5%B1%80%E5%85%AC%E5%B8%835%E8%B5%B7%E9%93%B6%E7%8B%90%E6%9C%A8%E9%A9%AC%E5%85%B8%E5%9E%8B%E6%A1%88%E4%BE%8B%23) `885.5K 🔥` `NEW`
1. [马宁给球迷发黄牌了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%81%E7%BB%99%E7%90%83%E8%BF%B7%E5%8F%91%E9%BB%84%E7%89%8C%E4%BA%86%23) `874.3K 🔥` `NEW`
1. [这就是世界杯扩军的意义](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B0%B1%E6%98%AF%E4%B8%96%E7%95%8C%E6%9D%AF%E6%89%A9%E5%86%9B%E7%9A%84%E6%84%8F%E4%B9%89%23) `865.1K 🔥` `NEW`
1. [男子参加幼儿园亲子马拉松猝死](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8F%82%E5%8A%A0%E5%B9%BC%E5%84%BF%E5%9B%AD%E4%BA%B2%E5%AD%90%E9%A9%AC%E6%8B%89%E6%9D%BE%E7%8C%9D%E6%AD%BB%23) `765.1K 🔥` `NEW`
1. [迪丽热巴走路腰发力](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%B5%B0%E8%B7%AF%E8%85%B0%E5%8F%91%E5%8A%9B%23) `755.4K 🔥` `NEW`
1. [沙特1比1乌拉圭](https://s.weibo.com/weibo?q=%23%E6%B2%99%E7%89%B91%E6%AF%941%E4%B9%8C%E6%8B%89%E5%9C%AD%23) `410.0K 🔥` `NEW`
1. [许嵩3首新歌](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%B5%A93%E9%A6%96%E6%96%B0%E6%AD%8C%23) `343.8K 🔥` `NEW`
1. [雷军过早吃热干面的姿势太地道了](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E8%BF%87%E6%97%A9%E5%90%83%E7%83%AD%E5%B9%B2%E9%9D%A2%E7%9A%84%E5%A7%BF%E5%8A%BF%E5%A4%AA%E5%9C%B0%E9%81%93%E4%BA%86%23) `342.4K 🔥` `NEW`
1. [女儿鼻孔塞异物爸爸嘴对嘴吹出](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E9%BC%BB%E5%AD%94%E5%A1%9E%E5%BC%82%E7%89%A9%E7%88%B8%E7%88%B8%E5%98%B4%E5%AF%B9%E5%98%B4%E5%90%B9%E5%87%BA%23) `341.0K 🔥` `NEW`
1. [美军B52坠毁初步迹象无人生还 (US military B52 crashes, initial signs show no survivors)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9BB52%E5%9D%A0%E6%AF%81%E5%88%9D%E6%AD%A5%E8%BF%B9%E8%B1%A1%E6%97%A0%E4%BA%BA%E7%94%9F%E8%BF%98%23) `340.4K 🔥` `NEW`
1. [5万欧身价零封5亿欧豪门](https://s.weibo.com/weibo?q=%235%E4%B8%87%E6%AC%A7%E8%BA%AB%E4%BB%B7%E9%9B%B6%E5%B0%815%E4%BA%BF%E6%AC%A7%E8%B1%AA%E9%97%A8%23) `336.4K 🔥` `NEW`
1. [韩国散户卖股票爆买豪宅](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%95%A3%E6%88%B7%E5%8D%96%E8%82%A1%E7%A5%A8%E7%88%86%E4%B9%B0%E8%B1%AA%E5%AE%85%23) `335.1K 🔥` `NEW`
1. [伊朗vs新西兰](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97vs%E6%96%B0%E8%A5%BF%E5%85%B0%23) `333.7K 🔥` `NEW`
1. [孟子义李昀锐尚公主十指紧扣](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E5%B0%9A%E5%85%AC%E4%B8%BB%E5%8D%81%E6%8C%87%E7%B4%A7%E6%89%A3%23) `330.0K 🔥` `NEW`
1. [产妇遭家暴发现丈夫出轨转移财产](https://s.weibo.com/weibo?q=%23%E4%BA%A7%E5%A6%87%E9%81%AD%E5%AE%B6%E6%9A%B4%E5%8F%91%E7%8E%B0%E4%B8%88%E5%A4%AB%E5%87%BA%E8%BD%A8%E8%BD%AC%E7%A7%BB%E8%B4%A2%E4%BA%A7%23) `327.1K 🔥` `NEW`
1. [吴倩张雨剑没有复婚](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%80%A9%E5%BC%A0%E9%9B%A8%E5%89%91%E6%B2%A1%E6%9C%89%E5%A4%8D%E5%A9%9A%23) `324.9K 🔥` `NEW`
1. [律师梳理朱一龙敲鼓各方责任](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E6%A2%B3%E7%90%86%E6%9C%B1%E4%B8%80%E9%BE%99%E6%95%B2%E9%BC%93%E5%90%84%E6%96%B9%E8%B4%A3%E4%BB%BB%23) `322.4K 🔥` `NEW`
1. [迪丽热巴圈内待遇](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%9C%88%E5%86%85%E5%BE%85%E9%81%87%23) `320.1K 🔥` `NEW`
1. [半导体智能制造](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E5%AF%BC%E4%BD%93%E6%99%BA%E8%83%BD%E5%88%B6%E9%80%A0%23) `318.5K 🔥` `NEW`
1. [王一博业内评价 (Wang Yibo’s industry evaluation)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%B8%9A%E5%86%85%E8%AF%84%E4%BB%B7%23) `317.1K 🔥` `NEW`
1. [上海迪士尼十周年请了林志玲](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E8%BF%AA%E5%A3%AB%E5%B0%BC%E5%8D%81%E5%91%A8%E5%B9%B4%E8%AF%B7%E4%BA%86%E6%9E%97%E5%BF%97%E7%8E%B2%23) `315.8K 🔥` `NEW`
1. [白鹿已争气争气再争气](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%B7%B2%E4%BA%89%E6%B0%94%E4%BA%89%E6%B0%94%E5%86%8D%E4%BA%89%E6%B0%94%23) `314.2K 🔥` `NEW`
1. [美国一架B52轰炸机坠毁](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%B8%80%E6%9E%B6B52%E8%BD%B0%E7%82%B8%E6%9C%BA%E5%9D%A0%E6%AF%81%23) `311.6K 🔥` `NEW`
1. [毛晓彤真公主](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E6%99%93%E5%BD%A4%E7%9C%9F%E5%85%AC%E4%B8%BB%23) `309.8K 🔥` `NEW`
1. [产子55天遭丈夫殴打最新进展](https://s.weibo.com/weibo?q=%23%E4%BA%A7%E5%AD%9055%E5%A4%A9%E9%81%AD%E4%B8%88%E5%A4%AB%E6%AE%B4%E6%89%93%E6%9C%80%E6%96%B0%E8%BF%9B%E5%B1%95%23) `307.9K 🔥` `NEW`
1. [Crisp回应TheShy复出](https://s.weibo.com/weibo?q=%23Crisp%E5%9B%9E%E5%BA%94TheShy%E5%A4%8D%E5%87%BA%23) `301.2K 🔥` `NEW`
1. [半导体牛股1分钟直线涨停](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E5%AF%BC%E4%BD%93%E7%89%9B%E8%82%A11%E5%88%86%E9%92%9F%E7%9B%B4%E7%BA%BF%E6%B6%A8%E5%81%9C%23) `296.8K 🔥` `NEW`
1. [央视曝光运营商杀熟乱象](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E8%BF%90%E8%90%A5%E5%95%86%E6%9D%80%E7%86%9F%E4%B9%B1%E8%B1%A1%23) `296.2K 🔥` `NEW`
1. [女子全副武装防晒第二天却烂脸](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%85%A8%E5%89%AF%E6%AD%A6%E8%A3%85%E9%98%B2%E6%99%92%E7%AC%AC%E4%BA%8C%E5%A4%A9%E5%8D%B4%E7%83%82%E8%84%B8%23) `294.5K 🔥` `NEW`
1. [金价大涨女子后悔880元没上车 (Gold price soared, woman regretted not getting on the bus after paying 880 yuan)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%A4%A7%E6%B6%A8%E5%A5%B3%E5%AD%90%E5%90%8E%E6%82%94880%E5%85%83%E6%B2%A1%E4%B8%8A%E8%BD%A6%23) `292.7K 🔥` `NEW`
1. [南部档案](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88%23) `289.4K 🔥` `NEW`
1. [魏大勋说的艺人是谁](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A4%A7%E5%8B%8B%E8%AF%B4%E7%9A%84%E8%89%BA%E4%BA%BA%E6%98%AF%E8%B0%81%23) `285.4K 🔥` `NEW`
1. [日本球迷赛后捡垃圾被批作秀](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%90%83%E8%BF%B7%E8%B5%9B%E5%90%8E%E6%8D%A1%E5%9E%83%E5%9C%BE%E8%A2%AB%E6%89%B9%E4%BD%9C%E7%A7%80%23) `284.6K 🔥` `NEW`
1. [高群书明涵公开求工作的明星](https://s.weibo.com/weibo?q=%23%E9%AB%98%E7%BE%A4%E4%B9%A6%E6%98%8E%E6%B6%B5%E5%85%AC%E5%BC%80%E6%B1%82%E5%B7%A5%E4%BD%9C%E7%9A%84%E6%98%8E%E6%98%9F%23) `282.9K 🔥` `NEW`
1. [五哈这股后劲太戳人了](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%93%88%E8%BF%99%E8%82%A1%E5%90%8E%E5%8A%B2%E5%A4%AA%E6%88%B3%E4%BA%BA%E4%BA%86%23) `280.6K 🔥` `NEW`
1. [云台相机影石大疆谁更强](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%8F%B0%E7%9B%B8%E6%9C%BA%E5%BD%B1%E7%9F%B3%E5%A4%A7%E7%96%86%E8%B0%81%E6%9B%B4%E5%BC%BA%23) `280.1K 🔥` `NEW`
1. [Lucky变化好大](https://s.weibo.com/weibo?q=%23Lucky%E5%8F%98%E5%8C%96%E5%A5%BD%E5%A4%A7%23) `277.1K 🔥` `NEW`
1. [世界杯开赛以来最大冷门](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%BC%80%E8%B5%9B%E4%BB%A5%E6%9D%A5%E6%9C%80%E5%A4%A7%E5%86%B7%E9%97%A8%23) `990.5K 🔥` `+56%`
1. [肥胖的最新标准 (The latest standards for obesity)](https://s.weibo.com/weibo?q=%23%E8%82%A5%E8%83%96%E7%9A%84%E6%9C%80%E6%96%B0%E6%A0%87%E5%87%86%23) `331.1K 🔥` `+49%`
1. [日系车巨头要为中国品牌代工了](https://s.weibo.com/weibo?q=%23%E6%97%A5%E7%B3%BB%E8%BD%A6%E5%B7%A8%E5%A4%B4%E8%A6%81%E4%B8%BA%E4%B8%AD%E5%9B%BD%E5%93%81%E7%89%8C%E4%BB%A3%E5%B7%A5%E4%BA%86%23) `328.7K 🔥` `+209%`
1. [从副部级降为副处级后王铁二次被查 (Wang Tie was investigated for the second time after being demoted from deputy ministerial level to deputy director level)](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E5%89%AF%E9%83%A8%E7%BA%A7%E9%99%8D%E4%B8%BA%E5%89%AF%E5%A4%84%E7%BA%A7%E5%90%8E%E7%8E%8B%E9%93%81%E4%BA%8C%E6%AC%A1%E8%A2%AB%E6%9F%A5%23) `306.4K 🔥` `+119%`
1. [不要低估第一年工作的消费欲 (Don’t underestimate the spending power of your first year on the job)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E4%BD%8E%E4%BC%B0%E7%AC%AC%E4%B8%80%E5%B9%B4%E5%B7%A5%E4%BD%9C%E7%9A%84%E6%B6%88%E8%B4%B9%E6%AC%B2%23) `305.5K 🔥` `+318%`
1. [上班最可怕的地方在于 (The scariest part about going to work is)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E6%9C%80%E5%8F%AF%E6%80%95%E7%9A%84%E5%9C%B0%E6%96%B9%E5%9C%A8%E4%BA%8E%23) `304.4K 🔥` `+191%`
1. [亚马尔世界杯首秀](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E4%B8%96%E7%95%8C%E6%9D%AF%E9%A6%96%E7%A7%80%23) `302.2K 🔥` `+104%`
1. [西班牙爆冷](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E7%88%86%E5%86%B7%23) `290.9K 🔥` `+69%`
1. [沙特vs乌拉圭](https://s.weibo.com/weibo?q=%23%E6%B2%99%E7%89%B9vs%E4%B9%8C%E6%8B%89%E5%9C%AD%23) `298.9K 🔥`
1. [原来是不是教师真的好明显](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%98%AF%E4%B8%8D%E6%98%AF%E6%95%99%E5%B8%88%E7%9C%9F%E7%9A%84%E5%A5%BD%E6%98%8E%E6%98%BE%23) `288.2K 🔥`
1. [佛得角门将哭了](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%E5%93%AD%E4%BA%86%23) `453.0K 🔥` `-33%`
1. [北京退衣姐刑事拘留](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E9%80%80%E8%A1%A3%E5%A7%90%E5%88%91%E4%BA%8B%E6%8B%98%E7%95%99%23) `337.3K 🔥` `-23%`
1. [西班牙0比0战平佛得角](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%990%E6%AF%940%E6%88%98%E5%B9%B3%E4%BD%9B%E5%BE%97%E8%A7%92%23) `323.9K 🔥` `-78%`

Updated at 2026-06-16 09:47:45

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
