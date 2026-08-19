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

1. [央视七夕晚会 (CCTV Chinese Valentine's Day Party)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E4%B8%83%E5%A4%95%E6%99%9A%E4%BC%9A%23) `842.3K 🔥` `NEW`
1. [为什么七夕朋友圈秀恩爱的变少了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%83%E5%A4%95%E6%9C%8B%E5%8F%8B%E5%9C%88%E7%A7%80%E6%81%A9%E7%88%B1%E7%9A%84%E5%8F%98%E5%B0%91%E4%BA%86%23) `481.2K 🔥` `NEW`
1. [ai漫剧行业6个月可更1000集](https://s.weibo.com/weibo?q=%23ai%E6%BC%AB%E5%89%A7%E8%A1%8C%E4%B8%9A6%E4%B8%AA%E6%9C%88%E5%8F%AF%E6%9B%B41000%E9%9B%86%23) `341.2K 🔥` `NEW`
1. [35岁程序员辞职卖肉蛋堡月入5万元](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E7%A8%8B%E5%BA%8F%E5%91%98%E8%BE%9E%E8%81%8C%E5%8D%96%E8%82%89%E8%9B%8B%E5%A0%A1%E6%9C%88%E5%85%A55%E4%B8%87%E5%85%83%23) `336.4K 🔥` `NEW`
1. [迪丽热巴陈飞宇恋情传闻时间线](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%99%88%E9%A3%9E%E5%AE%87%E6%81%8B%E6%83%85%E4%BC%A0%E9%97%BB%E6%97%B6%E9%97%B4%E7%BA%BF%23) `326.6K 🔥` `NEW`
1. [女孩买空座放零食大姐求坐被拒绝](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E4%B9%B0%E7%A9%BA%E5%BA%A7%E6%94%BE%E9%9B%B6%E9%A3%9F%E5%A4%A7%E5%A7%90%E6%B1%82%E5%9D%90%E8%A2%AB%E6%8B%92%E7%BB%9D%23) `318.7K 🔥` `NEW`
1. [马嘉祺直播](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E7%9B%B4%E6%92%AD%23) `297.9K 🔥` `NEW`
1. [桃黑黑宣布暂时休息](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E5%AE%A3%E5%B8%83%E6%9A%82%E6%97%B6%E4%BC%91%E6%81%AF%23) `210.1K 🔥` `NEW`
1. [朱一龙演技](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E6%BC%94%E6%8A%80%23) `176.1K 🔥` `NEW`
1. [做重要决定前先让AI全力反对](https://s.weibo.com/weibo?q=%23%E5%81%9A%E9%87%8D%E8%A6%81%E5%86%B3%E5%AE%9A%E5%89%8D%E5%85%88%E8%AE%A9AI%E5%85%A8%E5%8A%9B%E5%8F%8D%E5%AF%B9%23) `153.7K 🔥` `NEW`
1. [佛山一中学争议招聘多人被处理 (A middle school in Foshan was dealt with over the controversial recruitment of many people)](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%B1%B1%E4%B8%80%E4%B8%AD%E5%AD%A6%E4%BA%89%E8%AE%AE%E6%8B%9B%E8%81%98%E5%A4%9A%E4%BA%BA%E8%A2%AB%E5%A4%84%E7%90%86%23) `147.3K 🔥` `NEW`
1. [七夕 去情人节化 (Chinese Valentine's Day becomes Valentine's Day)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%20%E5%8E%BB%E6%83%85%E4%BA%BA%E8%8A%82%E5%8C%96%23) `1.1M 🔥` `+34%`
1. [丁禹兮工作室道歉](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%B7%A5%E4%BD%9C%E5%AE%A4%E9%81%93%E6%AD%89%23) `481.2K 🔥` `+47%`
1. [丁禹兮直播取消](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E7%9B%B4%E6%92%AD%E5%8F%96%E6%B6%88%23) `457.7K 🔥` `+29%`
1. [刘宇宁直播](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E7%9B%B4%E6%92%AD%23) `424.3K 🔥` `+26%`
1. [商家你要迪丽热巴返图不](https://s.weibo.com/weibo?q=%23%E5%95%86%E5%AE%B6%E4%BD%A0%E8%A6%81%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%94%E5%9B%BE%E4%B8%8D%23) `413.2K 🔥` `+21%`
1. [张恒远因黑色素瘤病逝](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%81%92%E8%BF%9C%E5%9B%A0%E9%BB%91%E8%89%B2%E7%B4%A0%E7%98%A4%E7%97%85%E9%80%9D%23) `411.7K 🔥` `+21%`
1. [青岛男子辱骂女游客](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E7%94%B7%E5%AD%90%E8%BE%B1%E9%AA%82%E5%A5%B3%E6%B8%B8%E5%AE%A2%23) `346.2K 🔥`
1. [别克爱的主打车七夕满配出发](https://s.weibo.com/weibo?q=%23%E5%88%AB%E5%85%8B%E7%88%B1%E7%9A%84%E4%B8%BB%E6%89%93%E8%BD%A6%E4%B8%83%E5%A4%95%E6%BB%A1%E9%85%8D%E5%87%BA%E5%8F%91%23) `312.3K 🔥`
1. [Angelababy拿玫瑰花自拍](https://s.weibo.com/weibo?q=%23Angelababy%E6%8B%BF%E7%8E%AB%E7%91%B0%E8%8A%B1%E8%87%AA%E6%8B%8D%23) `308.4K 🔥`
1. [甲状腺不好常吃两种水果](https://s.weibo.com/weibo?q=%23%E7%94%B2%E7%8A%B6%E8%85%BA%E4%B8%8D%E5%A5%BD%E5%B8%B8%E5%90%83%E4%B8%A4%E7%A7%8D%E6%B0%B4%E6%9E%9C%23) `304.2K 🔥`
1. [王力宏宇树 (Wang Leehom Yushu)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E5%AE%87%E6%A0%91%23) `269.2K 🔥`
1. [未来5年全民医保这样干 (This is how universal health insurance will work in the next five years)](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A55%E5%B9%B4%E5%85%A8%E6%B0%91%E5%8C%BB%E4%BF%9D%E8%BF%99%E6%A0%B7%E5%B9%B2%23) `626.5K 🔥` `-21%`
1. [男子将遗产全部留给弟弟不给妻儿 (A man leaves all his inheritance to his younger brother but not to his wife and children)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%B0%86%E9%81%97%E4%BA%A7%E5%85%A8%E9%83%A8%E7%95%99%E7%BB%99%E5%BC%9F%E5%BC%9F%E4%B8%8D%E7%BB%99%E5%A6%BB%E5%84%BF%23) `472.3K 🔥` `-40%`
1. [宇树科技上市庆功照流出 (Photos of Yushu Technology’s listing celebration leaked)](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E4%B8%8A%E5%B8%82%E5%BA%86%E5%8A%9F%E7%85%A7%E6%B5%81%E5%87%BA%23) `465.0K 🔥` `-59%`
1. [中签长鑫宇树男子回应打新技巧 (Chang Xin Yushu, the man who won the lottery, responded with new skills)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%AD%BE%E9%95%BF%E9%91%AB%E5%AE%87%E6%A0%91%E7%94%B7%E5%AD%90%E5%9B%9E%E5%BA%94%E6%89%93%E6%96%B0%E6%8A%80%E5%B7%A7%23) `459.9K 🔥` `-41%`
1. [七夕 (Chinese Valentine's Day)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%23) `450.3K 🔥` `-41%`
1. [王者新英雄王维 (King's New Hero Wang Wei)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E6%96%B0%E8%8B%B1%E9%9B%84%E7%8E%8B%E7%BB%B4%23) `443.5K 🔥` `-40%`
1. [买票占座放零食这座位能让吗](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E7%A5%A8%E5%8D%A0%E5%BA%A7%E6%94%BE%E9%9B%B6%E9%A3%9F%E8%BF%99%E5%BA%A7%E4%BD%8D%E8%83%BD%E8%AE%A9%E5%90%97%23) `433.2K 🔥` `-43%`
1. [山姆苹果干一包就是半个苹果](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E8%8B%B9%E6%9E%9C%E5%B9%B2%E4%B8%80%E5%8C%85%E5%B0%B1%E6%98%AF%E5%8D%8A%E4%B8%AA%E8%8B%B9%E6%9E%9C%23) `419.3K 🔥` `-46%`
1. [七夕 民政局](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%20%E6%B0%91%E6%94%BF%E5%B1%80%23) `247.7K 🔥` `-26%`
1. [王星被拐案新进展](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%9F%E8%A2%AB%E6%8B%90%E6%A1%88%E6%96%B0%E8%BF%9B%E5%B1%95%23) `217.3K 🔥` `-72%`
1. [2026七夕晚会节目单](https://s.weibo.com/weibo?q=%232026%E4%B8%83%E5%A4%95%E6%99%9A%E4%BC%9A%E8%8A%82%E7%9B%AE%E5%8D%95%23) `214.1K 🔥` `-35%`
1. [Selina胖了好多 (Selina has gained a lot of weight)](https://s.weibo.com/weibo?q=%23Selina%E8%83%96%E4%BA%86%E5%A5%BD%E5%A4%9A%23) `207.4K 🔥` `-38%`
1. [BIGBANG新歌 (BIGBANG new song)](https://s.weibo.com/weibo?q=%23BIGBANG%E6%96%B0%E6%AD%8C%23) `199.2K 🔥` `-43%`
1. [人到中年爱好开始逐渐离谱了 (As people reach middle age, their hobbies begin to become increasingly outrageous.)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%88%B0%E4%B8%AD%E5%B9%B4%E7%88%B1%E5%A5%BD%E5%BC%80%E5%A7%8B%E9%80%90%E6%B8%90%E7%A6%BB%E8%B0%B1%E4%BA%86%23) `198.9K 🔥` `-39%`
1. [李昀锐孟子义七夕物料不像演的 (Li Yunrui and Meng Ziyi's Chinese Valentine's Day material doesn't look like the one in the performance)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%AD%9F%E5%AD%90%E4%B9%89%E4%B8%83%E5%A4%95%E7%89%A9%E6%96%99%E4%B8%8D%E5%83%8F%E6%BC%94%E7%9A%84%23) `197.5K 🔥` `-44%`
1. [黄灿灿光脚做面筋 (Huang Cancan makes gluten with bare feet)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%85%89%E8%84%9A%E5%81%9A%E9%9D%A2%E7%AD%8B%23) `192.3K 🔥` `-40%`
1. [中国女足5比0皇马 (Chinese women's football team 5-0 Real Madrid)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E8%B6%B35%E6%AF%940%E7%9A%87%E9%A9%AC%23) `177.4K 🔥` `-41%`
1. [空枪](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%23) `161.1K 🔥` `-48%`
1. [王者新英雄王维上线体验服](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E6%96%B0%E8%8B%B1%E9%9B%84%E7%8E%8B%E7%BB%B4%E4%B8%8A%E7%BA%BF%E4%BD%93%E9%AA%8C%E6%9C%8D%23) `156.2K 🔥` `-80%`
1. [时代少年团庆七夕](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%BA%86%E4%B8%83%E5%A4%95%23) `153.2K 🔥` `-52%`
1. [白鹿被巨无霸大笔整笑了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%A2%AB%E5%B7%A8%E6%97%A0%E9%9C%B8%E5%A4%A7%E7%AC%94%E6%95%B4%E7%AC%91%E4%BA%86%23) `149.7K 🔥` `-51%`
1. [宋亚轩七夕祝福 (Song Yaxuan's Chinese Valentine's Day blessings)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E4%B8%83%E5%A4%95%E7%A5%9D%E7%A6%8F%23) `146.2K 🔥` `-54%`
1. [二搭会让内娱爆炸的男女主 (The male and female protagonist whose second partner will make domestic entertainment explode)](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E6%90%AD%E4%BC%9A%E8%AE%A9%E5%86%85%E5%A8%B1%E7%88%86%E7%82%B8%E7%9A%84%E7%94%B7%E5%A5%B3%E4%B8%BB%23) `139.3K 🔥` `-56%`
1. [乞巧节](https://s.weibo.com/weibo?q=%23%E4%B9%9E%E5%B7%A7%E8%8A%82%23) `132.7K 🔥` `-83%`
1. [易烊千玺和我的前半生交集上了 (Yi Yang Qianxi and I intersected in the first half of our lives)](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%92%8C%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%E4%BA%A4%E9%9B%86%E4%B8%8A%E4%BA%86%23) `129.3K 🔥` `-57%`
1. [老人院内晾花生遭小车进院全部碾碎](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E9%99%A2%E5%86%85%E6%99%BE%E8%8A%B1%E7%94%9F%E9%81%AD%E5%B0%8F%E8%BD%A6%E8%BF%9B%E9%99%A2%E5%85%A8%E9%83%A8%E7%A2%BE%E7%A2%8E%23) `126.2K 🔥` `-60%`
1. [A股全市场逾百股跌停](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%85%A8%E5%B8%82%E5%9C%BA%E9%80%BE%E7%99%BE%E8%82%A1%E8%B7%8C%E5%81%9C%23) `125.0K 🔥` `-58%`

Updated at 2026-08-19 20:15:42

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
