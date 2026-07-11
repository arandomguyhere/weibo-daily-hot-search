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

1. [神仙物业撤场业主们慌了 (The owners of Shenxian Property were panicked when they vacated the property)](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E4%BB%99%E7%89%A9%E4%B8%9A%E6%92%A4%E5%9C%BA%E4%B8%9A%E4%B8%BB%E4%BB%AC%E6%85%8C%E4%BA%86%23) `65.4K 🔥` `NEW`
1. [好震撼的一句话瞬间醍醐灌顶](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E9%9C%87%E6%92%BC%E7%9A%84%E4%B8%80%E5%8F%A5%E8%AF%9D%E7%9E%AC%E9%97%B4%E9%86%8D%E9%86%90%E7%81%8C%E9%A1%B6%23) `344.2K 🔥` `+189%`
1. [台风巴威二次登陆](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E4%BA%8C%E6%AC%A1%E7%99%BB%E9%99%86%23) `1.0M 🔥`
1. [上海台风](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%8F%B0%E9%A3%8E%23) `287.5K 🔥`
1. [台风巴威1小时走30到50公里](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%811%E5%B0%8F%E6%97%B6%E8%B5%B030%E5%88%B050%E5%85%AC%E9%87%8C%23) `240.5K 🔥`
1. [杭州20分钟变了4个色](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E20%E5%88%86%E9%92%9F%E5%8F%98%E4%BA%864%E4%B8%AA%E8%89%B2%23) `130.5K 🔥`
1. [桃黑黑直播回应](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E7%9B%B4%E6%92%AD%E5%9B%9E%E5%BA%94%23) `121.3K 🔥`
1. [雀骨 (bird bone)](https://s.weibo.com/weibo?q=%23%E9%9B%80%E9%AA%A8%23) `102.8K 🔥`
1. [台风巴威已登陆 (Typhoon Bavi has made landfall)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E5%B7%B2%E7%99%BB%E9%99%86%23) `1.1M 🔥` `-81%`
1. [防汛避险安全指南](https://s.weibo.com/weibo?q=%23%E9%98%B2%E6%B1%9B%E9%81%BF%E9%99%A9%E5%AE%89%E5%85%A8%E6%8C%87%E5%8D%97%23) `630.1K 🔥` `-43%`
1. [李小冉再度携手欧迪芬](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%86%8D%E5%BA%A6%E6%90%BA%E6%89%8B%E6%AC%A7%E8%BF%AA%E8%8A%AC%23) `624.7K 🔥` `-65%`
1. [手麻脚麻真的要赶紧进医院 (My hands and feet are numb and I really need to go to the hospital quickly.)](https://s.weibo.com/weibo?q=%23%E6%89%8B%E9%BA%BB%E8%84%9A%E9%BA%BB%E7%9C%9F%E7%9A%84%E8%A6%81%E8%B5%B6%E7%B4%A7%E8%BF%9B%E5%8C%BB%E9%99%A2%23) `362.8K 🔥` `-36%`
1. [原来疯狂吃零食的日子只有十年](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%96%AF%E7%8B%82%E5%90%83%E9%9B%B6%E9%A3%9F%E7%9A%84%E6%97%A5%E5%AD%90%E5%8F%AA%E6%9C%89%E5%8D%81%E5%B9%B4%23) `320.4K 🔥` `-33%`
1. [上海中心千吨阻尼器开始摆动 (Shanghai Center's kiloton damper begins to swing)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%B8%AD%E5%BF%83%E5%8D%83%E5%90%A8%E9%98%BB%E5%B0%BC%E5%99%A8%E5%BC%80%E5%A7%8B%E6%91%86%E5%8A%A8%23) `305.1K 🔥` `-36%`
1. [广西洪水](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%B4%AA%E6%B0%B4%23) `293.5K 🔥` `-77%`
1. [女孩遭前男友杀害被逼每日视频8次](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E9%81%AD%E5%89%8D%E7%94%B7%E5%8F%8B%E6%9D%80%E5%AE%B3%E8%A2%AB%E9%80%BC%E6%AF%8F%E6%97%A5%E8%A7%86%E9%A2%918%E6%AC%A1%23) `234.3K 🔥` `-27%`
1. [巴威最新位置](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E6%9C%80%E6%96%B0%E4%BD%8D%E7%BD%AE%23) `196.0K 🔥` `-40%`
1. [南非25岁世界杯参赛球员去世 (South Africa's 25-year-old World Cup player dies)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%9D%9E25%E5%B2%81%E4%B8%96%E7%95%8C%E6%9D%AF%E5%8F%82%E8%B5%9B%E7%90%83%E5%91%98%E5%8E%BB%E4%B8%96%23) `164.1K 🔥` `-45%`
1. [丁程鑫说王俊凯太能存钱了](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E8%AF%B4%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%A4%AA%E8%83%BD%E5%AD%98%E9%92%B1%E4%BA%86%23) `163.7K 🔥` `-51%`
1. [温州台风](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B7%9E%E5%8F%B0%E9%A3%8E%23) `157.2K 🔥` `-44%`
1. [海水倒灌](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%B0%B4%E5%80%92%E7%81%8C%23) `147.1K 🔥` `-52%`
1. [迪丽热巴张小斐手拉手热聊](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%BC%A0%E5%B0%8F%E6%96%90%E6%89%8B%E6%8B%89%E6%89%8B%E7%83%AD%E8%81%8A%23) `140.5K 🔥` `-46%`
1. [挪威主厨没想到会进8强](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81%E4%B8%BB%E5%8E%A8%E6%B2%A1%E6%83%B3%E5%88%B0%E4%BC%9A%E8%BF%9B8%E5%BC%BA%23) `139.5K 🔥` `-45%`
1. [台风 (typhoon)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `127.9K 🔥` `-27%`
1. [巴威对江苏影响要变大了](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E5%AF%B9%E6%B1%9F%E8%8B%8F%E5%BD%B1%E5%93%8D%E8%A6%81%E5%8F%98%E5%A4%A7%E4%BA%86%23) `125.0K 🔥` `-49%`
1. [直击巴威登陆 (Hit the Bahwe landing)](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E5%87%BB%E5%B7%B4%E5%A8%81%E7%99%BB%E9%99%86%23) `124.7K 🔥` `-40%`
1. [杭州 台风](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%20%E5%8F%B0%E9%A3%8E%23) `123.1K 🔥` `-33%`
1. [功夫女足开分9.4](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E5%BC%80%E5%88%869.4%23) `113.1K 🔥` `-40%`
1. [冉莹颖邹市明这段看窒息了](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E9%82%B9%E5%B8%82%E6%98%8E%E8%BF%99%E6%AE%B5%E7%9C%8B%E7%AA%92%E6%81%AF%E4%BA%86%23) `106.5K 🔥` `-48%`
1. [周星驰官宣星女郎雪野](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E5%AE%98%E5%AE%A3%E6%98%9F%E5%A5%B3%E9%83%8E%E9%9B%AA%E9%87%8E%23) `106.3K 🔥` `-54%`
1. [长沙市体育局干部彭某某被停职](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E5%B8%82%E4%BD%93%E8%82%B2%E5%B1%80%E5%B9%B2%E9%83%A8%E5%BD%AD%E6%9F%90%E6%9F%90%E8%A2%AB%E5%81%9C%E8%81%8C%23) `99.3K 🔥` `-35%`
1. [张小斐一番票房破10亿](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%E4%B8%80%E7%95%AA%E7%A5%A8%E6%88%BF%E7%A0%B410%E4%BA%BF%23) `96.8K 🔥` `-35%`
1. [中美特朗普模仿者线下同框](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E7%89%B9%E6%9C%97%E6%99%AE%E6%A8%A1%E4%BB%BF%E8%80%85%E7%BA%BF%E4%B8%8B%E5%90%8C%E6%A1%86%23) `96.3K 🔥` `-35%`
1. [侯明昊叫卢昱晓晓晓](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E5%8F%AB%E5%8D%A2%E6%98%B1%E6%99%93%E6%99%93%E6%99%93%23) `95.5K 🔥` `-45%`
1. [南非国脚世界杯后自杀身亡](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%9D%9E%E5%9B%BD%E8%84%9A%E4%B8%96%E7%95%8C%E6%9D%AF%E5%90%8E%E8%87%AA%E6%9D%80%E8%BA%AB%E4%BA%A1%23) `95.4K 🔥` `-37%`
1. [BW](https://s.weibo.com/weibo?q=%23BW%23) `95.3K 🔥` `-42%`
1. [巴威螺旋云系已覆盖整个浙江](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E8%9E%BA%E6%97%8B%E4%BA%91%E7%B3%BB%E5%B7%B2%E8%A6%86%E7%9B%96%E6%95%B4%E4%B8%AA%E6%B5%99%E6%B1%9F%23) `91.4K 🔥` `-24%`
1. [迪丽热巴路演未修原图](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%B7%AF%E6%BC%94%E6%9C%AA%E4%BF%AE%E5%8E%9F%E5%9B%BE%23) `89.7K 🔥` `-42%`
1. [桃黑黑回应洗衣机事件 (Tao Heihei responds to the washing machine incident)](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E5%9B%9E%E5%BA%94%E6%B4%97%E8%A1%A3%E6%9C%BA%E4%BA%8B%E4%BB%B6%23) `83.6K 🔥` `-41%`
1. [美国防部曝迄今最清晰UFO影像](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E9%98%B2%E9%83%A8%E6%9B%9D%E8%BF%84%E4%BB%8A%E6%9C%80%E6%B8%85%E6%99%B0UFO%E5%BD%B1%E5%83%8F%23) `80.8K 🔥` `-44%`
1. [章若楠直播摘假发片](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E7%9B%B4%E6%92%AD%E6%91%98%E5%81%87%E5%8F%91%E7%89%87%23) `80.2K 🔥` `-44%`
1. [巴威](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%23) `77.0K 🔥` `-35%`
1. [上海地铁运营调整](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%9C%B0%E9%93%81%E8%BF%90%E8%90%A5%E8%B0%83%E6%95%B4%23) `73.1K 🔥` `-47%`
1. [严浩翔说我算是破圈过来的](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E8%AF%B4%E6%88%91%E7%AE%97%E6%98%AF%E7%A0%B4%E5%9C%88%E8%BF%87%E6%9D%A5%E7%9A%84%23) `68.1K 🔥` `-44%`
1. [周杰伦费德勒温网合影](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E8%B4%B9%E5%BE%B7%E5%8B%92%E6%B8%A9%E7%BD%91%E5%90%88%E5%BD%B1%23) `67.6K 🔥` `-43%`
1. [谷爱凌现身温网 (Gu Ailing appears at Wimbledon)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%8E%B0%E8%BA%AB%E6%B8%A9%E7%BD%91%23) `64.6K 🔥` `-45%`
1. [台风天浙江玉环积水已过脚踝 (On the day of the typhoon, water accumulated in Yuhuan, Zhejiang, reaching ankle level)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%A4%A9%E6%B5%99%E6%B1%9F%E7%8E%89%E7%8E%AF%E7%A7%AF%E6%B0%B4%E5%B7%B2%E8%BF%87%E8%84%9A%E8%B8%9D%23) `62.1K 🔥` `-54%`
1. [巴威已登陆](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E5%B7%B2%E7%99%BB%E9%99%86%23) `61.4K 🔥` `-59%`
1. [北京9区非必要不要求员工到岗 (Beijing District 9 does not require employees to come to work unless necessary)](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC9%E5%8C%BA%E9%9D%9E%E5%BF%85%E8%A6%81%E4%B8%8D%E8%A6%81%E6%B1%82%E5%91%98%E5%B7%A5%E5%88%B0%E5%B2%97%23) `61.2K 🔥` `-49%`
1. [中国女排1比3多米尼加女排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%921%E6%AF%943%E5%A4%9A%E7%B1%B3%E5%B0%BC%E5%8A%A0%E5%A5%B3%E6%8E%92%23) `61.1K 🔥` `-48%`
1. [巴威在浙江玉环登陆](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E5%9C%A8%E6%B5%99%E6%B1%9F%E7%8E%89%E7%8E%AF%E7%99%BB%E9%99%86%23) `60.9K 🔥` `-77%`

Updated at 2026-07-12 02:34:45

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
