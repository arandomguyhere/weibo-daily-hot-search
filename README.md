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

1. [姜珮瑶找凌玲像AI一样丝滑 (Jiang Peiyao looks for Ling Ling as silky as AI)](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E7%8F%AE%E7%91%B6%E6%89%BE%E5%87%8C%E7%8E%B2%E5%83%8FAI%E4%B8%80%E6%A0%B7%E4%B8%9D%E6%BB%91%23) `184.4K 🔥`
1. [黄金 (gold)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `181.2K 🔥`
1. [笔试前13名全淘汰 倒数5名全逆袭](https://s.weibo.com/weibo?q=%23%E7%AC%94%E8%AF%95%E5%89%8D13%E5%90%8D%E5%85%A8%E6%B7%98%E6%B1%B0%20%E5%80%92%E6%95%B05%E5%90%8D%E5%85%A8%E9%80%86%E8%A2%AD%23) `127.5K 🔥`
1. [为什么七夕朋友圈秀恩爱的变少了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%83%E5%A4%95%E6%9C%8B%E5%8F%8B%E5%9C%88%E7%A7%80%E6%81%A9%E7%88%B1%E7%9A%84%E5%8F%98%E5%B0%91%E4%BA%86%23) `125.8K 🔥`
1. [女子凌晨倒掉24瓶爱心水被拍下](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%87%8C%E6%99%A8%E5%80%92%E6%8E%8924%E7%93%B6%E7%88%B1%E5%BF%83%E6%B0%B4%E8%A2%AB%E6%8B%8D%E4%B8%8B%23) `124.0K 🔥`
1. [孟子义没有给cp让路的义务 (Meng Ziyi has no obligation to give way to CP)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%B2%A1%E6%9C%89%E7%BB%99cp%E8%AE%A9%E8%B7%AF%E7%9A%84%E4%B9%89%E5%8A%A1%23) `121.5K 🔥`
1. [说话不仅要避谶还要迎谶 (When speaking, one must not only avoid prophecies but also welcome them.)](https://s.weibo.com/weibo?q=%23%E8%AF%B4%E8%AF%9D%E4%B8%8D%E4%BB%85%E8%A6%81%E9%81%BF%E8%B0%B6%E8%BF%98%E8%A6%81%E8%BF%8E%E8%B0%B6%23) `112.2K 🔥`
1. [Jennie发长文 (Jennie posted a long post)](https://s.weibo.com/weibo?q=%23Jennie%E5%8F%91%E9%95%BF%E6%96%87%23) `100.8K 🔥`
1. [苏翊鸣](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%23) `96.6K 🔥`
1. [七夕 去情人节化](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%20%E5%8E%BB%E6%83%85%E4%BA%BA%E8%8A%82%E5%8C%96%23) `88.2K 🔥`
1. [李昀锐孟子义这是官宣还是剧宣](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%AD%9F%E5%AD%90%E4%B9%89%E8%BF%99%E6%98%AF%E5%AE%98%E5%AE%A3%E8%BF%98%E6%98%AF%E5%89%A7%E5%AE%A3%23) `88.0K 🔥`
1. [尊界撞环卫工视频系AI伪造 (The video of Zunjie hitting a sanitation worker was faked by AI)](https://s.weibo.com/weibo?q=%23%E5%B0%8A%E7%95%8C%E6%92%9E%E7%8E%AF%E5%8D%AB%E5%B7%A5%E8%A7%86%E9%A2%91%E7%B3%BBAI%E4%BC%AA%E9%80%A0%23) `86.3K 🔥`
1. [婚宴礼金里发现假钞](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%AE%B4%E7%A4%BC%E9%87%91%E9%87%8C%E5%8F%91%E7%8E%B0%E5%81%87%E9%92%9E%23) `86.3K 🔥`
1. [王者新英雄王维](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E6%96%B0%E8%8B%B1%E9%9B%84%E7%8E%8B%E7%BB%B4%23) `86.3K 🔥`
1. [空枪](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%23) `86.3K 🔥`
1. [JDG锁定夏季赛胜者组 (JDG locks in the winner group of summer split)](https://s.weibo.com/weibo?q=%23JDG%E9%94%81%E5%AE%9A%E5%A4%8F%E5%AD%A3%E8%B5%9B%E8%83%9C%E8%80%85%E7%BB%84%23) `86.3K 🔥`
1. [新郎称不共财产不共心 (The groom says he doesn’t share property and heart)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E9%83%8E%E7%A7%B0%E4%B8%8D%E5%85%B1%E8%B4%A2%E4%BA%A7%E4%B8%8D%E5%85%B1%E5%BF%83%23) `86.2K 🔥`
1. [丁禹兮工作室道歉 (Ding Yuxi Studio apologizes)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%B7%A5%E4%BD%9C%E5%AE%A4%E9%81%93%E6%AD%89%23) `86.2K 🔥`
1. [上海地铁涨价 (Shanghai subway price increases)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%9C%B0%E9%93%81%E6%B6%A8%E4%BB%B7%23) `86.2K 🔥`
1. [Xiaohu直播道歉](https://s.weibo.com/weibo?q=%23Xiaohu%E7%9B%B4%E6%92%AD%E9%81%93%E6%AD%89%23) `86.2K 🔥`
1. [孙怡魏晨合唱 (Sun Yi Wei Chen chorus)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E9%AD%8F%E6%99%A8%E5%90%88%E5%94%B1%23) `86.2K 🔥`
1. [韩国男子生活轨迹除了上班就是回家](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%94%B7%E5%AD%90%E7%94%9F%E6%B4%BB%E8%BD%A8%E8%BF%B9%E9%99%A4%E4%BA%86%E4%B8%8A%E7%8F%AD%E5%B0%B1%E6%98%AF%E5%9B%9E%E5%AE%B6%23) `86.1K 🔥`
1. [爱笑 瘟AL](https://s.weibo.com/weibo?q=%23%E7%88%B1%E7%AC%91%20%E7%98%9FAL%23) `86.1K 🔥`
1. [日本人烈日下大排长龙买中国相机](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%BA%E7%83%88%E6%97%A5%E4%B8%8B%E5%A4%A7%E6%8E%92%E9%95%BF%E9%BE%99%E4%B9%B0%E4%B8%AD%E5%9B%BD%E7%9B%B8%E6%9C%BA%23) `86.1K 🔥`
1. [甲状腺不好常吃两种水果](https://s.weibo.com/weibo?q=%23%E7%94%B2%E7%8A%B6%E8%85%BA%E4%B8%8D%E5%A5%BD%E5%B8%B8%E5%90%83%E4%B8%A4%E7%A7%8D%E6%B0%B4%E6%9E%9C%23) `86.0K 🔥`
1. [孔雪儿看汪苏泷演唱会](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E7%9C%8B%E6%B1%AA%E8%8B%8F%E6%B3%B7%E6%BC%94%E5%94%B1%E4%BC%9A%23) `86.0K 🔥`
1. [Bin重返韩服](https://s.weibo.com/weibo?q=%23Bin%E9%87%8D%E8%BF%94%E9%9F%A9%E6%9C%8D%23) `86.0K 🔥`
1. [苏翊鸣七夕晒9图](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E4%B8%83%E5%A4%95%E6%99%929%E5%9B%BE%23) `321.5K 🔥` `-28%`
1. [12306回应买票占座放零食这座位能让吗 (12306 Reply Buy a ticket, occupy a seat and put snacks on it. Can this seat be used?)](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E4%B9%B0%E7%A5%A8%E5%8D%A0%E5%BA%A7%E6%94%BE%E9%9B%B6%E9%A3%9F%E8%BF%99%E5%BA%A7%E4%BD%8D%E8%83%BD%E8%AE%A9%E5%90%97%23) `271.9K 🔥` `-26%`
1. [这6张网与你我生活息息相关 (These 6 networks are closely related to your and my life)](https://s.weibo.com/weibo?q=%23%E8%BF%996%E5%BC%A0%E7%BD%91%E4%B8%8E%E4%BD%A0%E6%88%91%E7%94%9F%E6%B4%BB%E6%81%AF%E6%81%AF%E7%9B%B8%E5%85%B3%23) `194.3K 🔥` `-35%`
1. [空枪 李嘉诚儿子绑架案](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%20%E6%9D%8E%E5%98%89%E8%AF%9A%E5%84%BF%E5%AD%90%E7%BB%91%E6%9E%B6%E6%A1%88%23) `194.3K 🔥` `-35%`
1. [难怪瘦的时候容易觉得疼 (No wonder it’s easy to feel pain when you’re thin)](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E7%98%A6%E7%9A%84%E6%97%B6%E5%80%99%E5%AE%B9%E6%98%93%E8%A7%89%E5%BE%97%E7%96%BC%23) `193.3K 🔥` `-22%`
1. [蔡徐坤起亚品牌代言人](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E8%B5%B7%E4%BA%9A%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `183.4K 🔥` `-67%`
1. [胆子真是肥嘟嘟的 (You're so brave)](https://s.weibo.com/weibo?q=%23%E8%83%86%E5%AD%90%E7%9C%9F%E6%98%AF%E8%82%A5%E5%98%9F%E5%98%9F%E7%9A%84%23) `125.2K 🔥` `-22%`
1. [汪苏泷说雨爱没报批](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E8%AF%B4%E9%9B%A8%E7%88%B1%E6%B2%A1%E6%8A%A5%E6%89%B9%23) `86.6K 🔥` `-22%`
1. [升学宴致5死主家未提前报备宴席](https://s.weibo.com/weibo?q=%23%E5%8D%87%E5%AD%A6%E5%AE%B4%E8%87%B45%E6%AD%BB%E4%B8%BB%E5%AE%B6%E6%9C%AA%E6%8F%90%E5%89%8D%E6%8A%A5%E5%A4%87%E5%AE%B4%E5%B8%AD%23) `86.6K 🔥` `-21%`
1. [金价彻底反弹了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%BD%BB%E5%BA%95%E5%8F%8D%E5%BC%B9%E4%BA%86%23) `86.6K 🔥` `-21%`
1. [旺旺官宣听劝版旺仔牛奶 (Want Want official announces advice on selling Want Want milk)](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%E5%AE%98%E5%AE%A3%E5%90%AC%E5%8A%9D%E7%89%88%E6%97%BA%E4%BB%94%E7%89%9B%E5%A5%B6%23) `86.6K 🔥` `-21%`
1. [七夕但不对劲 (Chinese Valentine's Day but something is wrong)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%E4%BD%86%E4%B8%8D%E5%AF%B9%E5%8A%B2%23) `86.6K 🔥` `-21%`
1. [长这样的5种痣最容易癌变](https://s.weibo.com/weibo?q=%23%E9%95%BF%E8%BF%99%E6%A0%B7%E7%9A%845%E7%A7%8D%E7%97%A3%E6%9C%80%E5%AE%B9%E6%98%93%E7%99%8C%E5%8F%98%23) `86.5K 🔥` `-21%`
1. [弟弟称哥哥刚确诊癌症嫂子就提离婚](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%E7%A7%B0%E5%93%A5%E5%93%A5%E5%88%9A%E7%A1%AE%E8%AF%8A%E7%99%8C%E7%97%87%E5%AB%82%E5%AD%90%E5%B0%B1%E6%8F%90%E7%A6%BB%E5%A9%9A%23) `86.5K 🔥` `-21%`
1. [七夕 (Chinese Valentine's Day)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%23) `86.5K 🔥` `-21%`
1. [情侣领证男生把婚前财产都给女生 (When a couple gets a certificate, the boy gives all his pre-marital property to the girl)](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E9%A2%86%E8%AF%81%E7%94%B7%E7%94%9F%E6%8A%8A%E5%A9%9A%E5%89%8D%E8%B4%A2%E4%BA%A7%E9%83%BD%E7%BB%99%E5%A5%B3%E7%94%9F%23) `86.5K 🔥` `-21%`
1. [女子车内出现死蛇臭了三天才发现](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%BD%A6%E5%86%85%E5%87%BA%E7%8E%B0%E6%AD%BB%E8%9B%87%E8%87%AD%E4%BA%86%E4%B8%89%E5%A4%A9%E6%89%8D%E5%8F%91%E7%8E%B0%23) `86.5K 🔥` `-21%`
1. [空枪票房](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%E7%A5%A8%E6%88%BF%23) `86.5K 🔥` `-22%`
1. [公积金此次变化意味着什么](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E6%AD%A4%E6%AC%A1%E5%8F%98%E5%8C%96%E6%84%8F%E5%91%B3%E7%9D%80%E4%BB%80%E4%B9%88%23) `86.4K 🔥` `-21%`
1. [桃黑黑宣布暂时休息 (Taoheihei announces temporary break)](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E5%AE%A3%E5%B8%83%E6%9A%82%E6%97%B6%E4%BC%91%E6%81%AF%23) `86.4K 🔥` `-21%`
1. [吉祥空姐的发型](https://s.weibo.com/weibo?q=%23%E5%90%89%E7%A5%A5%E7%A9%BA%E5%A7%90%E7%9A%84%E5%8F%91%E5%9E%8B%23) `86.4K 🔥` `-22%`
1. [女孩买空座放零食大姐求坐被拒绝](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E4%B9%B0%E7%A9%BA%E5%BA%A7%E6%94%BE%E9%9B%B6%E9%A3%9F%E5%A4%A7%E5%A7%90%E6%B1%82%E5%9D%90%E8%A2%AB%E6%8B%92%E7%BB%9D%23) `86.4K 🔥` `-21%`
1. [美国宣布扩大长期国债回购操作规模](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%AE%A3%E5%B8%83%E6%89%A9%E5%A4%A7%E9%95%BF%E6%9C%9F%E5%9B%BD%E5%80%BA%E5%9B%9E%E8%B4%AD%E6%93%8D%E4%BD%9C%E8%A7%84%E6%A8%A1%23) `86.1K 🔥` `-48%`

Updated at 2026-08-20 02:01:29

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
