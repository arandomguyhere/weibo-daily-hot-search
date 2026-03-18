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

1. [耀客一直在等孟子义 (Yaoke has been waiting for Meng Ziyi)](https://s.weibo.com/weibo?q=%23%E8%80%80%E5%AE%A2%E4%B8%80%E7%9B%B4%E5%9C%A8%E7%AD%89%E5%AD%9F%E5%AD%90%E4%B9%89%23) `466.9K 🔥` `NEW`
1. [李昀锐黄杨钿甜冰湖重生新预告](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E9%BB%84%E6%9D%A8%E9%92%BF%E7%94%9C%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E6%96%B0%E9%A2%84%E5%91%8A%23) `162.7K 🔥` `NEW`
1. [5岁孩子狂赚20亿短剧人设引争议](https://s.weibo.com/weibo?q=%235%E5%B2%81%E5%AD%A9%E5%AD%90%E7%8B%82%E8%B5%9A20%E4%BA%BF%E7%9F%AD%E5%89%A7%E4%BA%BA%E8%AE%BE%E5%BC%95%E4%BA%89%E8%AE%AE%23) `162.6K 🔥` `NEW`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `153.4K 🔥` `NEW`
1. [耀客签约AI演员](https://s.weibo.com/weibo?q=%23%E8%80%80%E5%AE%A2%E7%AD%BE%E7%BA%A6AI%E6%BC%94%E5%91%98%23) `150.5K 🔥` `NEW`
1. [以色列刺杀伊朗情报部长](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%88%BA%E6%9D%80%E4%BC%8A%E6%9C%97%E6%83%85%E6%8A%A5%E9%83%A8%E9%95%BF%23) `143.6K 🔥` `NEW`
1. [全球机票将涨价](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E6%9C%BA%E7%A5%A8%E5%B0%86%E6%B6%A8%E4%BB%B7%23) `143.4K 🔥` `NEW`
1. [过量运动会导致男性精子质量下降](https://s.weibo.com/weibo?q=%23%E8%BF%87%E9%87%8F%E8%BF%90%E5%8A%A8%E4%BC%9A%E5%AF%BC%E8%87%B4%E7%94%B7%E6%80%A7%E7%B2%BE%E5%AD%90%E8%B4%A8%E9%87%8F%E4%B8%8B%E9%99%8D%23) `132.1K 🔥` `NEW`
1. [迪丽热巴代言甄稀冰淇淋](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%BB%A3%E8%A8%80%E7%94%84%E7%A8%80%E5%86%B0%E6%B7%87%E6%B7%8B%23) `119.5K 🔥` `NEW`
1. [鱼塘主坚持2年用辣椒喂鱼](https://s.weibo.com/weibo?q=%23%E9%B1%BC%E5%A1%98%E4%B8%BB%E5%9D%9A%E6%8C%812%E5%B9%B4%E7%94%A8%E8%BE%A3%E6%A4%92%E5%96%82%E9%B1%BC%23) `116.4K 🔥` `NEW`
1. [中国学生开始卷海外考公了 (Chinese students begin to take public exams overseas)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%AD%A6%E7%94%9F%E5%BC%80%E5%A7%8B%E5%8D%B7%E6%B5%B7%E5%A4%96%E8%80%83%E5%85%AC%E4%BA%86%23) `107.5K 🔥` `NEW`
1. [烧饭阿姨把三文鱼煮了](https://s.weibo.com/weibo?q=%23%E7%83%A7%E9%A5%AD%E9%98%BF%E5%A7%A8%E6%8A%8A%E4%B8%89%E6%96%87%E9%B1%BC%E7%85%AE%E4%BA%86%23) `105.9K 🔥` `NEW`
1. [特朗普再称马克龙很快就下台了](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%86%8D%E7%A7%B0%E9%A9%AC%E5%85%8B%E9%BE%99%E5%BE%88%E5%BF%AB%E5%B0%B1%E4%B8%8B%E5%8F%B0%E4%BA%86%23) `100.5K 🔥` `NEW`
1. [钮钴禄Jennie](https://s.weibo.com/weibo?q=%23%E9%92%AE%E9%92%B4%E7%A6%84Jennie%23) `98.0K 🔥` `NEW`
1. [香港打车被提醒副驾不能玩手机](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E6%89%93%E8%BD%A6%E8%A2%AB%E6%8F%90%E9%86%92%E5%89%AF%E9%A9%BE%E4%B8%8D%E8%83%BD%E7%8E%A9%E6%89%8B%E6%9C%BA%23) `93.3K 🔥` `NEW`
1. [李佳琦自曝想出国留学](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BD%B3%E7%90%A6%E8%87%AA%E6%9B%9D%E6%83%B3%E5%87%BA%E5%9B%BD%E7%95%99%E5%AD%A6%23) `93.3K 🔥` `NEW`
1. [五十公里桃花坞6](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%8D%81%E5%85%AC%E9%87%8C%E6%A1%83%E8%8A%B1%E5%9D%9E6%23) `93.3K 🔥` `NEW`
1. [以色列本土遭伊朗黎巴嫩夹击](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%9C%AC%E5%9C%9F%E9%81%AD%E4%BC%8A%E6%9C%97%E9%BB%8E%E5%B7%B4%E5%AB%A9%E5%A4%B9%E5%87%BB%23) `93.3K 🔥` `NEW`
1. [李白杜牧辛弃疾火到韩国地铁站了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%99%BD%E6%9D%9C%E7%89%A7%E8%BE%9B%E5%BC%83%E7%96%BE%E7%81%AB%E5%88%B0%E9%9F%A9%E5%9B%BD%E5%9C%B0%E9%93%81%E7%AB%99%E4%BA%86%23) `92.1K 🔥` `NEW`
1. [耳聋小猫因为可爱被导演选中](https://s.weibo.com/weibo?q=%23%E8%80%B3%E8%81%8B%E5%B0%8F%E7%8C%AB%E5%9B%A0%E4%B8%BA%E5%8F%AF%E7%88%B1%E8%A2%AB%E5%AF%BC%E6%BC%94%E9%80%89%E4%B8%AD%23) `87.4K 🔥` `NEW`
1. [国台办回应是否趁中东局势对台行动 (Taiwan Affairs Office of the State Council responds to whether it will take advantage of the situation in the Middle East to take action against Taiwan)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%8F%B0%E5%8A%9E%E5%9B%9E%E5%BA%94%E6%98%AF%E5%90%A6%E8%B6%81%E4%B8%AD%E4%B8%9C%E5%B1%80%E5%8A%BF%E5%AF%B9%E5%8F%B0%E8%A1%8C%E5%8A%A8%23) `87.2K 🔥` `NEW`
1. [广东15岁少年颅内出血用砒霜救活](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C15%E5%B2%81%E5%B0%91%E5%B9%B4%E9%A2%85%E5%86%85%E5%87%BA%E8%A1%80%E7%94%A8%E7%A0%92%E9%9C%9C%E6%95%91%E6%B4%BB%23) `86.7K 🔥` `NEW`
1. [男子误给离世者转5万被银行划扣3万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%AF%AF%E7%BB%99%E7%A6%BB%E4%B8%96%E8%80%85%E8%BD%AC5%E4%B8%87%E8%A2%AB%E9%93%B6%E8%A1%8C%E5%88%92%E6%89%A33%E4%B8%87%23) `84.7K 🔥` `NEW`
1. [黑猫用脚夹住了橘猫的尾巴](https://s.weibo.com/weibo?q=%23%E9%BB%91%E7%8C%AB%E7%94%A8%E8%84%9A%E5%A4%B9%E4%BD%8F%E4%BA%86%E6%A9%98%E7%8C%AB%E7%9A%84%E5%B0%BE%E5%B7%B4%23) `75.0K 🔥` `NEW`
1. [小米新SU7](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%96%B0SU7%23) `1.1M 🔥` `+1188%`
1. [文身店免费给65岁以上老人文身](https://s.weibo.com/weibo?q=%23%E6%96%87%E8%BA%AB%E5%BA%97%E5%85%8D%E8%B4%B9%E7%BB%9965%E5%B2%81%E4%BB%A5%E4%B8%8A%E8%80%81%E4%BA%BA%E6%96%87%E8%BA%AB%23) `758.3K 🔥` `+110%`
1. [百花杀](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%23) `452.2K 🔥` `+135%`
1. [离职要走发现同事在窗口举牌](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E8%81%8C%E8%A6%81%E8%B5%B0%E5%8F%91%E7%8E%B0%E5%90%8C%E4%BA%8B%E5%9C%A8%E7%AA%97%E5%8F%A3%E4%B8%BE%E7%89%8C%23) `448.6K 🔥` `+136%`
1. [鹿晗鲜啤福鹿家品牌全球代言人 (Global spokesperson of Luhan Fresh Beer and Lujia Brand)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E9%B2%9C%E5%95%A4%E7%A6%8F%E9%B9%BF%E5%AE%B6%E5%93%81%E7%89%8C%E5%85%A8%E7%90%83%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `395.0K 🔥` `+26%`
1. [拉里贾尼被斩首细节披露](https://s.weibo.com/weibo?q=%23%E6%8B%89%E9%87%8C%E8%B4%BE%E5%B0%BC%E8%A2%AB%E6%96%A9%E9%A6%96%E7%BB%86%E8%8A%82%E6%8A%AB%E9%9C%B2%23) `161.0K 🔥` `+40%`
1. [再邋遢一天明天可以理发了](https://s.weibo.com/weibo?q=%23%E5%86%8D%E9%82%8B%E9%81%A2%E4%B8%80%E5%A4%A9%E6%98%8E%E5%A4%A9%E5%8F%AF%E4%BB%A5%E7%90%86%E5%8F%91%E4%BA%86%23) `110.4K 🔥` `+28%`
1. [春暖花开各地文旅持续升温 (Spring is in full bloom, and cultural tourism continues to heat up across the country)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%9A%96%E8%8A%B1%E5%BC%80%E5%90%84%E5%9C%B0%E6%96%87%E6%97%85%E6%8C%81%E7%BB%AD%E5%8D%87%E6%B8%A9%23) `599.1K 🔥`
1. [伊朗革命卫队报复行动升级 (Iran's Revolutionary Guards escalate retaliatory actions)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%9D%A9%E5%91%BD%E5%8D%AB%E9%98%9F%E6%8A%A5%E5%A4%8D%E8%A1%8C%E5%8A%A8%E5%8D%87%E7%BA%A7%23) `270.0K 🔥`
1. [樊长玉谢征 好孕赘婿](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E9%95%BF%E7%8E%89%E8%B0%A2%E5%BE%81%20%E5%A5%BD%E5%AD%95%E8%B5%98%E5%A9%BF%23) `160.2K 🔥`
1. [网传落生去世 (Internet rumors about death)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E8%90%BD%E7%94%9F%E5%8E%BB%E4%B8%96%23) `156.5K 🔥`
1. [奶奶减肥法](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E5%A5%B6%E5%87%8F%E8%82%A5%E6%B3%95%23) `146.3K 🔥`
1. [小S街头大哭](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E8%A1%97%E5%A4%B4%E5%A4%A7%E5%93%AD%23) `143.8K 🔥`
1. [高度近视吹瓶子](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%BA%A6%E8%BF%91%E8%A7%86%E5%90%B9%E7%93%B6%E5%AD%90%23) `127.0K 🔥`
1. [桃花坞第六季重庆路透](https://s.weibo.com/weibo?q=%23%E6%A1%83%E8%8A%B1%E5%9D%9E%E7%AC%AC%E5%85%AD%E5%AD%A3%E9%87%8D%E5%BA%86%E8%B7%AF%E9%80%8F%23) `88.2K 🔥`
1. [建议年轻人少去公园容易伤自尊 (It is recommended that young people go to the park less often because it may hurt their self-esteem.)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%B0%91%E5%8E%BB%E5%85%AC%E5%9B%AD%E5%AE%B9%E6%98%93%E4%BC%A4%E8%87%AA%E5%B0%8A%23) `234.7K 🔥` `-71%`
1. [油价涨了冲锋衣可能更贵](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E6%B6%A8%E4%BA%86%E5%86%B2%E9%94%8B%E8%A1%A3%E5%8F%AF%E8%83%BD%E6%9B%B4%E8%B4%B5%23) `199.5K 🔥` `-37%`
1. [果然人老了干什么都心酸 (Sure enough, when you are old, you will feel sad no matter what you do.)](https://s.weibo.com/weibo?q=%23%E6%9E%9C%E7%84%B6%E4%BA%BA%E8%80%81%E4%BA%86%E5%B9%B2%E4%BB%80%E4%B9%88%E9%83%BD%E5%BF%83%E9%85%B8%23) `161.8K 🔥` `-49%`
1. [婴儿倒挂近1分钟爸爸全程玩手机](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%84%BF%E5%80%92%E6%8C%82%E8%BF%911%E5%88%86%E9%92%9F%E7%88%B8%E7%88%B8%E5%85%A8%E7%A8%8B%E7%8E%A9%E6%89%8B%E6%9C%BA%23) `160.0K 🔥` `-29%`
1. [男二以下 AI演员 (AI actors below male 2)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E4%BA%8C%E4%BB%A5%E4%B8%8B%20AI%E6%BC%94%E5%91%98%23) `143.9K 🔥` `-54%`
1. [以色列因总理身亡传言连发3天视频](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%9B%A0%E6%80%BB%E7%90%86%E8%BA%AB%E4%BA%A1%E4%BC%A0%E8%A8%80%E8%BF%9E%E5%8F%913%E5%A4%A9%E8%A7%86%E9%A2%91%23) `143.2K 🔥` `-21%`
1. [不是私生 是公立医院出生](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E6%98%AF%E7%A7%81%E7%94%9F%20%E6%98%AF%E5%85%AC%E7%AB%8B%E5%8C%BB%E9%99%A2%E5%87%BA%E7%94%9F%23) `112.6K 🔥` `-34%`
1. [周杰伦新专辑太阳之子 (Jay Chou's new album Son of the Sun)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%B0%E4%B8%93%E8%BE%91%E5%A4%AA%E9%98%B3%E4%B9%8B%E5%AD%90%23) `96.6K 🔥` `-38%`
1. [50岁女职工被强制退休获赔94万 (A 50-year-old female employee was forced to retire and received a compensation of NT$940,000)](https://s.weibo.com/weibo?q=%2350%E5%B2%81%E5%A5%B3%E8%81%8C%E5%B7%A5%E8%A2%AB%E5%BC%BA%E5%88%B6%E9%80%80%E4%BC%91%E8%8E%B7%E8%B5%9494%E4%B8%87%23) `92.0K 🔥` `-46%`
1. [女子人脸被盗喂给AI做成短剧](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BA%BA%E8%84%B8%E8%A2%AB%E7%9B%97%E5%96%82%E7%BB%99AI%E5%81%9A%E6%88%90%E7%9F%AD%E5%89%A7%23) `85.6K 🔥` `-49%`
1. [今天才知道TFBOYS全称](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%A9%E6%89%8D%E7%9F%A5%E9%81%93TFBOYS%E5%85%A8%E7%A7%B0%23) `82.1K 🔥` `-46%`
1. [孔雪儿曾是邓凯的偶像](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E6%9B%BE%E6%98%AF%E9%82%93%E5%87%AF%E7%9A%84%E5%81%B6%E5%83%8F%23) `81.0K 🔥` `-27%`

Updated at 2026-03-18 17:06:39

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
