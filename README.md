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

1. [中方不认同伊朗对海合会国家攻击 (China does not agree with Iran’s attacks on GCC countries)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E4%B8%8D%E8%AE%A4%E5%90%8C%E4%BC%8A%E6%9C%97%E5%AF%B9%E6%B5%B7%E5%90%88%E4%BC%9A%E5%9B%BD%E5%AE%B6%E6%94%BB%E5%87%BB%23) `539.6K 🔥` `NEW`
1. [冰湖重生剧方道歉](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E5%89%A7%E6%96%B9%E9%81%93%E6%AD%89%23) `168.8K 🔥` `NEW`
1. [美军士兵被允许在基地携带个人枪支](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E5%A3%AB%E5%85%B5%E8%A2%AB%E5%85%81%E8%AE%B8%E5%9C%A8%E5%9F%BA%E5%9C%B0%E6%90%BA%E5%B8%A6%E4%B8%AA%E4%BA%BA%E6%9E%AA%E6%94%AF%23) `165.8K 🔥` `NEW`
1. [娱乐圈姓李的有点说法](https://s.weibo.com/weibo?q=%23%E5%A8%B1%E4%B9%90%E5%9C%88%E5%A7%93%E6%9D%8E%E7%9A%84%E6%9C%89%E7%82%B9%E8%AF%B4%E6%B3%95%23) `165.7K 🔥` `NEW`
1. [心疼朴志晟](https://s.weibo.com/weibo?q=%23%E5%BF%83%E7%96%BC%E6%9C%B4%E5%BF%97%E6%99%9F%23) `165.4K 🔥` `NEW`
1. [3000名师生凌晨徒步百里祭英烈](https://s.weibo.com/weibo?q=%233000%E5%90%8D%E5%B8%88%E7%94%9F%E5%87%8C%E6%99%A8%E5%BE%92%E6%AD%A5%E7%99%BE%E9%87%8C%E7%A5%AD%E8%8B%B1%E7%83%88%23) `164.4K 🔥` `NEW`
1. [香港女星在珠海买房](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%A5%B3%E6%98%9F%E5%9C%A8%E7%8F%A0%E6%B5%B7%E4%B9%B0%E6%88%BF%23) `164.0K 🔥` `NEW`
1. [张雪招造型总监年薪80万起不设上限](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%8B%9B%E9%80%A0%E5%9E%8B%E6%80%BB%E7%9B%91%E5%B9%B4%E8%96%AA80%E4%B8%87%E8%B5%B7%E4%B8%8D%E8%AE%BE%E4%B8%8A%E9%99%90%23) `152.1K 🔥` `NEW`
1. [黄灿灿罗予彤大学男友同届同班](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E7%BD%97%E4%BA%88%E5%BD%A4%E5%A4%A7%E5%AD%A6%E7%94%B7%E5%8F%8B%E5%90%8C%E5%B1%8A%E5%90%8C%E7%8F%AD%23) `148.6K 🔥` `NEW`
1. [伊朗媒体发布美国F35残骸照](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AA%92%E4%BD%93%E5%8F%91%E5%B8%83%E7%BE%8E%E5%9B%BDF35%E6%AE%8B%E9%AA%B8%E7%85%A7%23) `138.9K 🔥` `NEW`
1. [李楷灿 双队并行 (Lee Haechan, two teams running in parallel)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%A5%B7%E7%81%BF%20%E5%8F%8C%E9%98%9F%E5%B9%B6%E8%A1%8C%23) `137.1K 🔥` `NEW`
1. [烈士墓前全屏马赛克](https://s.weibo.com/weibo?q=%23%E7%83%88%E5%A3%AB%E5%A2%93%E5%89%8D%E5%85%A8%E5%B1%8F%E9%A9%AC%E8%B5%9B%E5%85%8B%23) `101.2K 🔥` `NEW`
1. [内蒙古十多名干部接连落马](https://s.weibo.com/weibo?q=%23%E5%86%85%E8%92%99%E5%8F%A4%E5%8D%81%E5%A4%9A%E5%90%8D%E5%B9%B2%E9%83%A8%E6%8E%A5%E8%BF%9E%E8%90%BD%E9%A9%AC%23) `99.4K 🔥` `NEW`
1. [TOP铁了心要进步](https://s.weibo.com/weibo?q=%23TOP%E9%93%81%E4%BA%86%E5%BF%83%E8%A6%81%E8%BF%9B%E6%AD%A5%23) `97.9K 🔥` `NEW`
1. [Manner涨价原因](https://s.weibo.com/weibo?q=%23Manner%E6%B6%A8%E4%BB%B7%E5%8E%9F%E5%9B%A0%23) `96.8K 🔥` `NEW`
1. [时代峰峻要钱的时候是妲己](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E8%A6%81%E9%92%B1%E7%9A%84%E6%97%B6%E5%80%99%E6%98%AF%E5%A6%B2%E5%B7%B1%23) `93.4K 🔥` `NEW`
1. [苹果天价扫荡全球手机内存](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%A4%A9%E4%BB%B7%E6%89%AB%E8%8D%A1%E5%85%A8%E7%90%83%E6%89%8B%E6%9C%BA%E5%86%85%E5%AD%98%23) `91.1K 🔥` `NEW`
1. [王力宏巡回演唱会官宣](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E5%B7%A1%E5%9B%9E%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%98%E5%AE%A3%23) `91.1K 🔥` `NEW`
1. [金银价格大跌原因找到了](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%93%B6%E4%BB%B7%E6%A0%BC%E5%A4%A7%E8%B7%8C%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `90.6K 🔥` `NEW`
1. [赵一博 受伤](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%80%E5%8D%9A%20%E5%8F%97%E4%BC%A4%23) `85.6K 🔥` `NEW`
1. [原来这就是孤独症啊 (It turns out this is autism.)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E5%B0%B1%E6%98%AF%E5%AD%A4%E7%8B%AC%E7%97%87%E5%95%8A%23) `84.7K 🔥` `NEW`
1. [虎跳峡落水男子遗体打捞失败的原因](https://s.weibo.com/weibo?q=%23%E8%99%8E%E8%B7%B3%E5%B3%A1%E8%90%BD%E6%B0%B4%E7%94%B7%E5%AD%90%E9%81%97%E4%BD%93%E6%89%93%E6%8D%9E%E5%A4%B1%E8%B4%A5%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `84.6K 🔥` `NEW`
1. [马年把马累走了 又把马克走了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%B9%B4%E6%8A%8A%E9%A9%AC%E7%B4%AF%E8%B5%B0%E4%BA%86%20%E5%8F%88%E6%8A%8A%E9%A9%AC%E5%85%8B%E8%B5%B0%E4%BA%86%23) `84.2K 🔥` `NEW`
1. [找工作烦了我就这样刻薄](https://s.weibo.com/weibo?q=%23%E6%89%BE%E5%B7%A5%E4%BD%9C%E7%83%A6%E4%BA%86%E6%88%91%E5%B0%B1%E8%BF%99%E6%A0%B7%E5%88%BB%E8%96%84%23) `252.4K 🔥` `+43%`
1. [广电总局批部分剧集演员妆容过重](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E7%94%B5%E6%80%BB%E5%B1%80%E6%89%B9%E9%83%A8%E5%88%86%E5%89%A7%E9%9B%86%E6%BC%94%E5%91%98%E5%A6%86%E5%AE%B9%E8%BF%87%E9%87%8D%23) `165.7K 🔥` `+37%`
1. [高校殡葬专业学生没毕业就被抢空](https://s.weibo.com/weibo?q=%23%E9%AB%98%E6%A0%A1%E6%AE%A1%E8%91%AC%E4%B8%93%E4%B8%9A%E5%AD%A6%E7%94%9F%E6%B2%A1%E6%AF%95%E4%B8%9A%E5%B0%B1%E8%A2%AB%E6%8A%A2%E7%A9%BA%23) `162.9K 🔥` `+58%`
1. [原来身份证不是全国统一的 (It turns out that ID cards are not uniform across the country.)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BA%AB%E4%BB%BD%E8%AF%81%E4%B8%8D%E6%98%AF%E5%85%A8%E5%9B%BD%E7%BB%9F%E4%B8%80%E7%9A%84%23) `1.1M 🔥`
1. [国乒男线仅剩王楚钦 (Only Wang Chuqin remains in the national table tennis men’s line)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E7%BA%BF%E4%BB%85%E5%89%A9%E7%8E%8B%E6%A5%9A%E9%92%A6%23) `790.7K 🔥`
1. [致敬所有隐蔽战线的无名英雄](https://s.weibo.com/weibo?q=%23%E8%87%B4%E6%95%AC%E6%89%80%E6%9C%89%E9%9A%90%E8%94%BD%E6%88%98%E7%BA%BF%E7%9A%84%E6%97%A0%E5%90%8D%E8%8B%B1%E9%9B%84%23) `603.8K 🔥`
1. [霸王茶姬疑似被日本抄袭](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E7%96%91%E4%BC%BC%E8%A2%AB%E6%97%A5%E6%9C%AC%E6%8A%84%E8%A2%AD%23) `553.7K 🔥`
1. [粉笔字为什么越写越往上飘](https://s.weibo.com/weibo?q=%23%E7%B2%89%E7%AC%94%E5%AD%97%E4%B8%BA%E4%BB%80%E4%B9%88%E8%B6%8A%E5%86%99%E8%B6%8A%E5%BE%80%E4%B8%8A%E9%A3%98%23) `192.8K 🔥`
1. [乒协提案避免王楚钦球拍受损重演](https://s.weibo.com/weibo?q=%23%E4%B9%92%E5%8D%8F%E6%8F%90%E6%A1%88%E9%81%BF%E5%85%8D%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%90%83%E6%8B%8D%E5%8F%97%E6%8D%9F%E9%87%8D%E6%BC%94%23) `165.8K 🔥`
1. [李马克解约退团 (Mark Li terminates contract and quits group)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%A9%AC%E5%85%8B%E8%A7%A3%E7%BA%A6%E9%80%80%E5%9B%A2%23) `165.8K 🔥`
1. [白宫紧急下架特朗普讲话视频](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%AE%AB%E7%B4%A7%E6%80%A5%E4%B8%8B%E6%9E%B6%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%B2%E8%AF%9D%E8%A7%86%E9%A2%91%23) `165.7K 🔥`
1. [李永钦 退团瓜](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B0%B8%E9%92%A6%20%E9%80%80%E5%9B%A2%E7%93%9C%23) `165.6K 🔥`
1. [猪精液制成的眼药水可治疗眼肿瘤](https://s.weibo.com/weibo?q=%23%E7%8C%AA%E7%B2%BE%E6%B6%B2%E5%88%B6%E6%88%90%E7%9A%84%E7%9C%BC%E8%8D%AF%E6%B0%B4%E5%8F%AF%E6%B2%BB%E7%96%97%E7%9C%BC%E8%82%BF%E7%98%A4%23) `165.6K 🔥`
1. [时代峰峻高会声明](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E9%AB%98%E4%BC%9A%E5%A3%B0%E6%98%8E%23) `165.5K 🔥`
1. [李马克退团手写信](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%A9%AC%E5%85%8B%E9%80%80%E5%9B%A2%E6%89%8B%E5%86%99%E4%BF%A1%23) `165.5K 🔥`
1. [老爸评测就优思益事件道歉](https://s.weibo.com/weibo?q=%23%E8%80%81%E7%88%B8%E8%AF%84%E6%B5%8B%E5%B0%B1%E4%BC%98%E6%80%9D%E7%9B%8A%E4%BA%8B%E4%BB%B6%E9%81%93%E6%AD%89%23) `165.5K 🔥`
1. [袁咏仪说浪姐请不到我李心洁请到 (Anita Yuen said Sister Lang couldn't invite me, Li Xinjie could.)](https://s.weibo.com/weibo?q=%23%E8%A2%81%E5%92%8F%E4%BB%AA%E8%AF%B4%E6%B5%AA%E5%A7%90%E8%AF%B7%E4%B8%8D%E5%88%B0%E6%88%91%E6%9D%8E%E5%BF%83%E6%B4%81%E8%AF%B7%E5%88%B0%23) `164.9K 🔥`
1. [范丞丞赵今麦 绝命循环](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E8%B5%B5%E4%BB%8A%E9%BA%A6%20%E7%BB%9D%E5%91%BD%E5%BE%AA%E7%8E%AF%23) `163.7K 🔥`
1. [nctdream 小拇指 (nctdream little finger)](https://s.weibo.com/weibo?q=%23nctdream%20%E5%B0%8F%E6%8B%87%E6%8C%87%23) `162.8K 🔥`
1. [张凌赫待播剧一个是医生一个是草根](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%BE%85%E6%92%AD%E5%89%A7%E4%B8%80%E4%B8%AA%E6%98%AF%E5%8C%BB%E7%94%9F%E4%B8%80%E4%B8%AA%E6%98%AF%E8%8D%89%E6%A0%B9%23) `162.4K 🔥`
1. [乐华新男团将5人出道](https://s.weibo.com/weibo?q=%23%E4%B9%90%E5%8D%8E%E6%96%B0%E7%94%B7%E5%9B%A2%E5%B0%865%E4%BA%BA%E5%87%BA%E9%81%93%23) `132.1K 🔥`
1. [小S为范玮琪浪姐打call (Little S calls for Sister Fan Weiqilang)](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E4%B8%BA%E8%8C%83%E7%8E%AE%E7%90%AA%E6%B5%AA%E5%A7%90%E6%89%93call%23) `92.2K 🔥`
1. [李荣浩 哈尔滨见](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%20%E5%93%88%E5%B0%94%E6%BB%A8%E8%A7%81%23) `91.1K 🔥`
1. [乘风2026](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%23) `91.1K 🔥`
1. [手掌太红大批网友提醒张雪及时就医](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%8E%8C%E5%A4%AA%E7%BA%A2%E5%A4%A7%E6%89%B9%E7%BD%91%E5%8F%8B%E6%8F%90%E9%86%92%E5%BC%A0%E9%9B%AA%E5%8F%8A%E6%97%B6%E5%B0%B1%E5%8C%BB%23) `97.9K 🔥` `-30%`
1. [韩国40岁导演遭围殴致死引众怒](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD40%E5%B2%81%E5%AF%BC%E6%BC%94%E9%81%AD%E5%9B%B4%E6%AE%B4%E8%87%B4%E6%AD%BB%E5%BC%95%E4%BC%97%E6%80%92%23) `97.2K 🔥` `-37%`
1. [伊朗再称击落美军F35战机 (Iran again claims it shot down US F35 fighter jet)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%86%8D%E7%A7%B0%E5%87%BB%E8%90%BD%E7%BE%8E%E5%86%9BF35%E6%88%98%E6%9C%BA%23) `91.1K 🔥` `-50%`

Updated at 2026-04-03 16:11:20

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
