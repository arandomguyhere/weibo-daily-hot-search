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

1. [山姆部分产品大降价 (Some Sam products are greatly reduced in price)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E9%83%A8%E5%88%86%E4%BA%A7%E5%93%81%E5%A4%A7%E9%99%8D%E4%BB%B7%23) `489.4K 🔥` `NEW`
1. [黄子韬因喘不上气暂停节目录制](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E5%9B%A0%E5%96%98%E4%B8%8D%E4%B8%8A%E6%B0%94%E6%9A%82%E5%81%9C%E8%8A%82%E7%9B%AE%E5%BD%95%E5%88%B6%23) `199.6K 🔥` `NEW`
1. [花海退役仪式](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E6%B5%B7%E9%80%80%E5%BD%B9%E4%BB%AA%E5%BC%8F%23) `188.4K 🔥` `NEW`
1. [潮汕爆火后遭避雷本地网友叫屈](https://s.weibo.com/weibo?q=%23%E6%BD%AE%E6%B1%95%E7%88%86%E7%81%AB%E5%90%8E%E9%81%AD%E9%81%BF%E9%9B%B7%E6%9C%AC%E5%9C%B0%E7%BD%91%E5%8F%8B%E5%8F%AB%E5%B1%88%23) `139.4K 🔥` `NEW`
1. [北大女生毕业后转行当短剧演员](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%A4%A7%E5%A5%B3%E7%94%9F%E6%AF%95%E4%B8%9A%E5%90%8E%E8%BD%AC%E8%A1%8C%E5%BD%93%E7%9F%AD%E5%89%A7%E6%BC%94%E5%91%98%23) `138.8K 🔥` `NEW`
1. [王曼昱4比2张本美和](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B14%E6%AF%942%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `130.6K 🔥` `NEW`
1. [雷霆掘金冲突](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E9%9C%86%E6%8E%98%E9%87%91%E5%86%B2%E7%AA%81%23) `117.7K 🔥` `NEW`
1. [金花婆婆说刘晓庆刚出道被所有人欺负](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8A%B1%E5%A9%86%E5%A9%86%E8%AF%B4%E5%88%98%E6%99%93%E5%BA%86%E5%88%9A%E5%87%BA%E9%81%93%E8%A2%AB%E6%89%80%E6%9C%89%E4%BA%BA%E6%AC%BA%E8%B4%9F%23) `111.6K 🔥` `NEW`
1. [一直娱崩了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9B%B4%E5%A8%B1%E5%B4%A9%E4%BA%86%23) `105.8K 🔥` `NEW`
1. [林诗栋vsF勒布伦](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8BvsF%E5%8B%92%E5%B8%83%E4%BC%A6%23) `102.2K 🔥` `NEW`
1. [李诚儒吐槽繁花的商战都太假 (Li Chengru complained that Fanhua’s business war is too fake)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%AF%9A%E5%84%92%E5%90%90%E6%A7%BD%E7%B9%81%E8%8A%B1%E7%9A%84%E5%95%86%E6%88%98%E9%83%BD%E5%A4%AA%E5%81%87%23) `102.1K 🔥` `NEW`
1. [睡眠不足会夺走人的温柔](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E7%9C%A0%E4%B8%8D%E8%B6%B3%E4%BC%9A%E5%A4%BA%E8%B5%B0%E4%BA%BA%E7%9A%84%E6%B8%A9%E6%9F%94%23) `99.6K 🔥` `NEW`
1. [沈月在客栈和中餐厅间选了好六](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E5%9C%A8%E5%AE%A2%E6%A0%88%E5%92%8C%E4%B8%AD%E9%A4%90%E5%8E%85%E9%97%B4%E9%80%89%E4%BA%86%E5%A5%BD%E5%85%AD%23) `95.5K 🔥` `NEW`
1. [久坐的人喝咖啡受益更大](https://s.weibo.com/weibo?q=%23%E4%B9%85%E5%9D%90%E7%9A%84%E4%BA%BA%E5%96%9D%E5%92%96%E5%95%A1%E5%8F%97%E7%9B%8A%E6%9B%B4%E5%A4%A7%23) `95.2K 🔥` `NEW`
1. [邓超借粉终于借到孙俪的了](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E5%80%9F%E7%B2%89%E7%BB%88%E4%BA%8E%E5%80%9F%E5%88%B0%E5%AD%99%E4%BF%AA%E7%9A%84%E4%BA%86%23) `92.5K 🔥` `NEW`
1. [黄金白银大涨美股大跌](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%99%BD%E9%93%B6%E5%A4%A7%E6%B6%A8%E7%BE%8E%E8%82%A1%E5%A4%A7%E8%B7%8C%23) `83.7K 🔥` `NEW`
1. [重生了4次都不知道绕路](https://s.weibo.com/weibo?q=%23%E9%87%8D%E7%94%9F%E4%BA%864%E6%AC%A1%E9%83%BD%E4%B8%8D%E7%9F%A5%E9%81%93%E7%BB%95%E8%B7%AF%23) `83.5K 🔥` `NEW`
1. [王曼昱12比14张本美和](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B112%E6%AF%9414%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `83.1K 🔥` `NEW`
1. [跑男](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%23) `458.3K 🔥` `+112%`
1. [蔡磊已进入渐冻症疾病的终末期 (Cai Lei has entered the terminal stage of ALS disease)](https://s.weibo.com/weibo?q=%23%E8%94%A1%E7%A3%8A%E5%B7%B2%E8%BF%9B%E5%85%A5%E6%B8%90%E5%86%BB%E7%97%87%E7%96%BE%E7%97%85%E7%9A%84%E7%BB%88%E6%9C%AB%E6%9C%9F%23) `1.2M 🔥`
1. [2026考研国家线发布 (2026 Postgraduate Entrance Examination National Line Released)](https://s.weibo.com/weibo?q=%232026%E8%80%83%E7%A0%94%E5%9B%BD%E5%AE%B6%E7%BA%BF%E5%8F%91%E5%B8%83%23) `872.0K 🔥`
1. [周鸿祎揭美伪造陈志案证据内幕](https://s.weibo.com/weibo?q=%23%E5%91%A8%E9%B8%BF%E7%A5%8E%E6%8F%AD%E7%BE%8E%E4%BC%AA%E9%80%A0%E9%99%88%E5%BF%97%E6%A1%88%E8%AF%81%E6%8D%AE%E5%86%85%E5%B9%95%23) `658.7K 🔥`
1. [第一个发现这个机位的是天才 (The first person to discover this location was a genius)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8F%91%E7%8E%B0%E8%BF%99%E4%B8%AA%E6%9C%BA%E4%BD%8D%E7%9A%84%E6%98%AF%E5%A4%A9%E6%89%8D%23) `413.8K 🔥`
1. [撞人族是日本特有](https://s.weibo.com/weibo?q=%23%E6%92%9E%E4%BA%BA%E6%97%8F%E6%98%AF%E6%97%A5%E6%9C%AC%E7%89%B9%E6%9C%89%23) `350.4K 🔥`
1. [小米超跑](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E8%B6%85%E8%B7%91%23) `202.6K 🔥`
1. [范丞丞方说不认识没交集](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E6%96%B9%E8%AF%B4%E4%B8%8D%E8%AE%A4%E8%AF%86%E6%B2%A1%E4%BA%A4%E9%9B%86%23) `200.2K 🔥`
1. [婚后拒同房男方讨说法已涉嫌违法](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%90%8E%E6%8B%92%E5%90%8C%E6%88%BF%E7%94%B7%E6%96%B9%E8%AE%A8%E8%AF%B4%E6%B3%95%E5%B7%B2%E6%B6%89%E5%AB%8C%E8%BF%9D%E6%B3%95%23) `195.5K 🔥`
1. [嘉行否认迪丽热巴合约到期 (Jiaxing denies that Dilireba’s contract expires)](https://s.weibo.com/weibo?q=%23%E5%98%89%E8%A1%8C%E5%90%A6%E8%AE%A4%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%90%88%E7%BA%A6%E5%88%B0%E6%9C%9F%23) `193.8K 🔥`
1. [Angelababy37岁了 (Angelababy is 37 years old)](https://s.weibo.com/weibo?q=%23Angelababy37%E5%B2%81%E4%BA%86%23) `189.7K 🔥`
1. [徐志胜当宋妍霏的面接前任电话](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%BF%97%E8%83%9C%E5%BD%93%E5%AE%8B%E5%A6%8D%E9%9C%8F%E7%9A%84%E9%9D%A2%E6%8E%A5%E5%89%8D%E4%BB%BB%E7%94%B5%E8%AF%9D%23) `141.0K 🔥`
1. [巴厘岛发现人体肢解遗骸](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%8E%98%E5%B2%9B%E5%8F%91%E7%8E%B0%E4%BA%BA%E4%BD%93%E8%82%A2%E8%A7%A3%E9%81%97%E9%AA%B8%23) `136.1K 🔥`
1. [周大福镶金发夹卖2080元](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%A4%A7%E7%A6%8F%E9%95%B6%E9%87%91%E5%8F%91%E5%A4%B9%E5%8D%962080%E5%85%83%23) `135.2K 🔥`
1. [王健林20亿售出上海项目](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%81%A5%E6%9E%9720%E4%BA%BF%E5%94%AE%E5%87%BA%E4%B8%8A%E6%B5%B7%E9%A1%B9%E7%9B%AE%23) `133.6K 🔥`
1. [金饰价涨到1625元](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E6%B6%A8%E5%88%B01625%E5%85%83%23) `125.7K 🔥`
1. [2岁女孩患癌花光积蓄妈妈离家出走 (2-year-old girl suffers from cancer and her mother runs away from home after spending all her savings)](https://s.weibo.com/weibo?q=%232%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%82%A3%E7%99%8C%E8%8A%B1%E5%85%89%E7%A7%AF%E8%93%84%E5%A6%88%E5%A6%88%E7%A6%BB%E5%AE%B6%E5%87%BA%E8%B5%B0%23) `125.5K 🔥`
1. [张雅钦有人专门为你来米兰](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E9%92%A6%E6%9C%89%E4%BA%BA%E4%B8%93%E9%97%A8%E4%B8%BA%E4%BD%A0%E6%9D%A5%E7%B1%B3%E5%85%B0%23) `124.2K 🔥`
1. [导演不喊cut黄景瑜能一直演](https://s.weibo.com/weibo?q=%23%E5%AF%BC%E6%BC%94%E4%B8%8D%E5%96%8Acut%E9%BB%84%E6%99%AF%E7%91%9C%E8%83%BD%E4%B8%80%E7%9B%B4%E6%BC%94%23) `96.0K 🔥`
1. [郭晓婷王天辰第二十八年春 (Guo Xiaoting and Wang Tianchen in the spring of the 28th year)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E5%A9%B7%E7%8E%8B%E5%A4%A9%E8%BE%B0%E7%AC%AC%E4%BA%8C%E5%8D%81%E5%85%AB%E5%B9%B4%E6%98%A5%23) `94.3K 🔥`
1. [考研查分 (Postgraduate entrance examination score check)](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%A0%94%E6%9F%A5%E5%88%86%23) `93.4K 🔥`
1. [考研下岸了 (The postgraduate entrance examination has ended)](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%A0%94%E4%B8%8B%E5%B2%B8%E4%BA%86%23) `333.8K 🔥` `-32%`
1. [男子劝朋友别醉驾走后对方车祸身亡](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8A%9D%E6%9C%8B%E5%8F%8B%E5%88%AB%E9%86%89%E9%A9%BE%E8%B5%B0%E5%90%8E%E5%AF%B9%E6%96%B9%E8%BD%A6%E7%A5%B8%E8%BA%AB%E4%BA%A1%23) `292.1K 🔥` `-30%`
1. [迪丽热巴个人工作室 (Dilireba personal studio)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%B8%AA%E4%BA%BA%E5%B7%A5%E4%BD%9C%E5%AE%A4%23) `131.8K 🔥` `-22%`
1. [TOP新专配置](https://s.weibo.com/weibo?q=%23TOP%E6%96%B0%E4%B8%93%E9%85%8D%E7%BD%AE%23) `121.5K 🔥` `-38%`
1. [王曼昱vs张本美和 (Wang Manyu vs Zhang Benmeihe)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1vs%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `119.5K 🔥` `-42%`
1. [国家线 砍一刀](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E7%BA%BF%20%E7%A0%8D%E4%B8%80%E5%88%80%23) `115.9K 🔥` `-25%`
1. [全国最快熟的蔬菜出现了](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E6%9C%80%E5%BF%AB%E7%86%9F%E7%9A%84%E8%94%AC%E8%8F%9C%E5%87%BA%E7%8E%B0%E4%BA%86%23) `101.7K 🔥` `-23%`
1. [TOP登陆少年首张实体专辑](https://s.weibo.com/weibo?q=%23TOP%E7%99%BB%E9%99%86%E5%B0%91%E5%B9%B4%E9%A6%96%E5%BC%A0%E5%AE%9E%E4%BD%93%E4%B8%93%E8%BE%91%23) `94.5K 🔥` `-29%`
1. [近视散光人群开夜车的视角](https://s.weibo.com/weibo?q=%23%E8%BF%91%E8%A7%86%E6%95%A3%E5%85%89%E4%BA%BA%E7%BE%A4%E5%BC%80%E5%A4%9C%E8%BD%A6%E7%9A%84%E8%A7%86%E8%A7%92%23) `84.2K 🔥` `-22%`

Updated at 2026-02-28 13:52:57

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
