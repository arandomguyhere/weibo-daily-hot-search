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

1. [隋文静韩聪自由滑135.98分 (Sui Wenjing and Han Cong scored 135.98 points in free skate)](https://s.weibo.com/weibo?q=%23%E9%9A%8B%E6%96%87%E9%9D%99%E9%9F%A9%E8%81%AA%E8%87%AA%E7%94%B1%E6%BB%91135.98%E5%88%86%23) `61.4K 🔥` `NEW`
1. [隋文静韩聪双人自由滑](https://s.weibo.com/weibo?q=%23%E9%9A%8B%E6%96%87%E9%9D%99%E9%9F%A9%E8%81%AA%E5%8F%8C%E4%BA%BA%E8%87%AA%E7%94%B1%E6%BB%91%23) `57.3K 🔥` `NEW`
1. [谷爱凌第3跳89.00分](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%AC%AC3%E8%B7%B389.00%E5%88%86%23) `21.8K 🔥` `NEW`
1. [谷爱凌总分179.00](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E6%80%BB%E5%88%86179.00%23) `20.8K 🔥` `NEW`
1. [贺花神](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E8%8A%B1%E7%A5%9E%23) `20.3K 🔥` `NEW`
1. [春晚收视率](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E6%94%B6%E8%A7%86%E7%8E%87%23) `273.5K 🔥` `+39%`
1. [王菲接了李谷一的班 (Faye Wong took over Li Guyi's class)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E6%8E%A5%E4%BA%86%E6%9D%8E%E8%B0%B7%E4%B8%80%E7%9A%84%E7%8F%AD%23) `113.6K 🔥` `+25%`
1. [马丽单飞了 沈腾怎么办](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%B8%BD%E5%8D%95%E9%A3%9E%E4%BA%86%20%E6%B2%88%E8%85%BE%E6%80%8E%E4%B9%88%E5%8A%9E%23) `96.5K 🔥` `+24%`
1. [王菲水滴耳环 (Faye Wong drop earrings)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E6%B0%B4%E6%BB%B4%E8%80%B3%E7%8E%AF%23) `70.4K 🔥` `+36%`
1. [张万森 下机器人了 (Zhang Wansen got off the robot)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%B8%87%E6%A3%AE%20%E4%B8%8B%E6%9C%BA%E5%99%A8%E4%BA%BA%E4%BA%86%23) `49.8K 🔥` `+63%`
1. [邓超妈妈](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E5%A6%88%E5%A6%88%23) `44.0K 🔥` `+43%`
1. [林孝埈无奈摇头](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%88%E6%97%A0%E5%A5%88%E6%91%87%E5%A4%B4%23) `28.3K 🔥` `+29%`
1. [魏晨站山顶 (The top of Weichen Station)](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E6%99%A8%E7%AB%99%E5%B1%B1%E9%A1%B6%23) `25.3K 🔥` `+36%`
1. [谷爱凌大跳台银牌 (Gu Ailing silver medal in big platform)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%A4%A7%E8%B7%B3%E5%8F%B0%E9%93%B6%E7%89%8C%23) `536.7K 🔥`
1. [春晚 (Spring Festival Gala)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%23) `106.1K 🔥`
1. [田曦薇宋威龙 谁来递个本子](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%AE%8B%E5%A8%81%E9%BE%99%20%E8%B0%81%E6%9D%A5%E9%80%92%E4%B8%AA%E6%9C%AC%E5%AD%90%23) `77.2K 🔥`
1. [过年好 (Happy New Year)](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%B9%B4%E5%A5%BD%23) `71.5K 🔥`
1. [王一博这一脚用了多大力气 (How much strength did Wang Yibo use in this kick?)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%BF%99%E4%B8%80%E8%84%9A%E7%94%A8%E4%BA%86%E5%A4%9A%E5%A4%A7%E5%8A%9B%E6%B0%94%23) `71.3K 🔥`
1. [谁给迪丽热巴化的妆](https://s.weibo.com/weibo?q=%23%E8%B0%81%E7%BB%99%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%8C%96%E7%9A%84%E5%A6%86%23) `71.2K 🔥`
1. [谷爱凌创造自由式滑雪奖牌纪录](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%88%9B%E9%80%A0%E8%87%AA%E7%94%B1%E5%BC%8F%E6%BB%91%E9%9B%AA%E5%A5%96%E7%89%8C%E7%BA%AA%E5%BD%95%23) `57.6K 🔥`
1. [白鹿好美 (White deer is so beautiful)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%A5%BD%E7%BE%8E%23) `51.3K 🔥`
1. [王玉雯扛住了春晚镜头 (Wang Yuwen held the Spring Festival Gala camera)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E6%89%9B%E4%BD%8F%E4%BA%86%E6%98%A5%E6%99%9A%E9%95%9C%E5%A4%B4%23) `42.4K 🔥`
1. [魔术 比小品好笑 (Magic is funnier than sketch)](https://s.weibo.com/weibo?q=%23%E9%AD%94%E6%9C%AF%20%E6%AF%94%E5%B0%8F%E5%93%81%E5%A5%BD%E7%AC%91%23) `28.9K 🔥`
1. [新年文案](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%B9%B4%E6%96%87%E6%A1%88%23) `28.8K 🔥`
1. [支付宝口令红包](https://s.weibo.com/weibo?q=%23%E6%94%AF%E4%BB%98%E5%AE%9D%E5%8F%A3%E4%BB%A4%E7%BA%A2%E5%8C%85%23) `28.7K 🔥`
1. [花瓣落在田曦薇头顶 (The petals fell on Tian Xiwei's head)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E7%93%A3%E8%90%BD%E5%9C%A8%E7%94%B0%E6%9B%A6%E8%96%87%E5%A4%B4%E9%A1%B6%23) `28.6K 🔥`
1. [春晚导演 米莱狄](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E5%AF%BC%E6%BC%94%20%E7%B1%B3%E8%8E%B1%E7%8B%84%23) `28.6K 🔥`
1. [王一博郭富城炸场 (Wang Yibo Aaron Kwok bombing site)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E9%83%AD%E5%AF%8C%E5%9F%8E%E7%82%B8%E5%9C%BA%23) `28.5K 🔥`
1. [难忘今宵](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E5%BF%98%E4%BB%8A%E5%AE%B5%23) `28.4K 🔥`
1. [机器人假摔 (Robot dive)](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%81%87%E6%91%94%23) `28.4K 🔥`
1. [李健开净化了 (Li Jiankai purified)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%81%A5%E5%BC%80%E5%87%80%E5%8C%96%E4%BA%86%23) `28.1K 🔥`
1. [刘浩存实在美丽](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E5%AE%9E%E5%9C%A8%E7%BE%8E%E4%B8%BD%23) `28.1K 🔥`
1. [烟花](https://s.weibo.com/weibo?q=%23%E7%83%9F%E8%8A%B1%23) `28.0K 🔥`
1. [易烊千玺压得住场](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%8E%8B%E5%BE%97%E4%BD%8F%E5%9C%BA%23) `28.0K 🔥`
1. [春晚小品这个帅哥是谁 (Who is this handsome guy in the Spring Festival Gala skit?)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E5%B0%8F%E5%93%81%E8%BF%99%E4%B8%AA%E5%B8%85%E5%93%A5%E6%98%AF%E8%B0%81%23) `27.9K 🔥`
1. [秦岚李沁王楚然美成啥了 (What is so beautiful about Qin Lan, Li Qin and Wang Chu Ran?)](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%B2%9A%E6%9D%8E%E6%B2%81%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%BE%8E%E6%88%90%E5%95%A5%E4%BA%86%23) `27.9K 🔥`
1. [陈哲远 你的运气额度省下来了](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%20%E4%BD%A0%E7%9A%84%E8%BF%90%E6%B0%94%E9%A2%9D%E5%BA%A6%E7%9C%81%E4%B8%8B%E6%9D%A5%E4%BA%86%23) `27.5K 🔥`
1. [镖人](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `26.8K 🔥`
1. [范丞丞王安宇同台 (Fan Chengcheng and Wang Anyu share the stage)](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E7%8E%8B%E5%AE%89%E5%AE%87%E5%90%8C%E5%8F%B0%23) `25.3K 🔥`
1. [左肩有你](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E8%82%A9%E6%9C%89%E4%BD%A0%23) `23.2K 🔥`
1. [春晚分会场上大分 (Spring Festival Gala Branch Venue Oita)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E5%88%86%E4%BC%9A%E5%9C%BA%E4%B8%8A%E5%A4%A7%E5%88%86%23) `143.4K 🔥` `-31%`
1. [和美五粮液幸福中国年 (Happy Chinese New Year with Hemei Wuliangye)](https://s.weibo.com/weibo?q=%23%E5%92%8C%E7%BE%8E%E4%BA%94%E7%B2%AE%E6%B6%B2%E5%B9%B8%E7%A6%8F%E4%B8%AD%E5%9B%BD%E5%B9%B4%23) `116.9K 🔥` `-42%`
1. [谷爱凌刘梦婷大跳台决赛 (Gu Ailing, Liu Mengting, big platform finals)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%88%98%E6%A2%A6%E5%A9%B7%E5%A4%A7%E8%B7%B3%E5%8F%B0%E5%86%B3%E8%B5%9B%23) `107.8K 🔥` `-68%`
1. [看飞驰人生接美的好风 (Watch the beautiful scenery of flying life)](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F%E6%8E%A5%E7%BE%8E%E7%9A%84%E5%A5%BD%E9%A3%8E%23) `98.0K 🔥` `-26%`
1. [短剧上春晚了](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E4%B8%8A%E6%98%A5%E6%99%9A%E4%BA%86%23) `55.5K 🔥` `-24%`
1. [TFBOYS怎么变四个人了](https://s.weibo.com/weibo?q=%23TFBOYS%E6%80%8E%E4%B9%88%E5%8F%98%E5%9B%9B%E4%B8%AA%E4%BA%BA%E4%BA%86%23) `54.3K 🔥` `-45%`
1. [宇树科技股票 (Yushu Technology Stock)](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E8%82%A1%E7%A5%A8%23) `48.3K 🔥` `-24%`
1. [刘浩存 北舞严选](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%20%E5%8C%97%E8%88%9E%E4%B8%A5%E9%80%89%23) `48.2K 🔥` `-23%`
1. [谷爱凌第一跳90.00分 (Gu Ailing’s first jump scored 90.00 points)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%AC%AC%E4%B8%80%E8%B7%B390.00%E5%88%86%23) `47.4K 🔥` `-69%`
1. [冬奥会 (winter olympics)](https://s.weibo.com/weibo?q=%23%E5%86%AC%E5%A5%A5%E4%BC%9A%23) `28.9K 🔥` `-33%`
1. [王亚飞给迪丽热巴化的妆](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BA%9A%E9%A3%9E%E7%BB%99%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%8C%96%E7%9A%84%E5%A6%86%23) `28.8K 🔥` `-34%`
1. [王楚然 天选王昭君 (Wang Churan, Heavenly Chosen Wang Zhaojun)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%20%E5%A4%A9%E9%80%89%E7%8E%8B%E6%98%AD%E5%90%9B%23) `28.2K 🔥` `-30%`

Updated at 2026-02-17 05:40:50

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
