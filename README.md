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

1. [英阿大战 自由搏击 (British-Afghan War Free Fighting)](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E9%98%BF%E5%A4%A7%E6%88%98%20%E8%87%AA%E7%94%B1%E6%90%8F%E5%87%BB%23) `3.7M 🔥` `NEW`
1. [裁判 没带牌](https://s.weibo.com/weibo?q=%23%E8%A3%81%E5%88%A4%20%E6%B2%A1%E5%B8%A6%E7%89%8C%23) `1.0M 🔥` `NEW`
1. [英格兰阿根廷冲突](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%86%B2%E7%AA%81%23) `458.5K 🔥` `NEW`
1. [英格兰半场0比0阿根廷](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E5%8D%8A%E5%9C%BA0%E6%AF%940%E9%98%BF%E6%A0%B9%E5%BB%B7%23) `271.0K 🔥` `NEW`
1. [英阿大战半场19次犯规](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E9%98%BF%E5%A4%A7%E6%88%98%E5%8D%8A%E5%9C%BA19%E6%AC%A1%E7%8A%AF%E8%A7%84%23) `244.2K 🔥` `NEW`
1. [戈登破门](https://s.weibo.com/weibo?q=%23%E6%88%88%E7%99%BB%E7%A0%B4%E9%97%A8%23) `183.0K 🔥` `NEW`
1. [英格兰1比0阿根廷](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B01%E6%AF%940%E9%98%BF%E6%A0%B9%E5%BB%B7%23) `77.8K 🔥` `NEW`
1. [英阿大战火药味拉满](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E9%98%BF%E5%A4%A7%E6%88%98%E7%81%AB%E8%8D%AF%E5%91%B3%E6%8B%89%E6%BB%A1%23) `72.4K 🔥` `NEW`
1. [英格兰领先阿根廷](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E9%A2%86%E5%85%88%E9%98%BF%E6%A0%B9%E5%BB%B7%23) `49.1K 🔥` `NEW`
1. [中式折扇爆单了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%BC%8F%E6%8A%98%E6%89%87%E7%88%86%E5%8D%95%E4%BA%86%23) `41.1K 🔥` `NEW`
1. [夫妻之间不仅是真心更多的是换位思考 (There is not only sincerity between husband and wife, but also empathy)](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E4%B9%8B%E9%97%B4%E4%B8%8D%E4%BB%85%E6%98%AF%E7%9C%9F%E5%BF%83%E6%9B%B4%E5%A4%9A%E7%9A%84%E6%98%AF%E6%8D%A2%E4%BD%8D%E6%80%9D%E8%80%83%23) `31.5K 🔥` `NEW`
1. [英格兰vs阿根廷 (England vs Argentina)](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0vs%E9%98%BF%E6%A0%B9%E5%BB%B7%23) `2.8M 🔥` `+110%`
1. [打卡中国](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%8D%A1%E4%B8%AD%E5%9B%BD%23) `1.4M 🔥` `+522%`
1. [DeepSeek工资待遇太恐怖了 (DeepSeek’s salary package is terrible)](https://s.weibo.com/weibo?q=%23DeepSeek%E5%B7%A5%E8%B5%84%E5%BE%85%E9%81%87%E5%A4%AA%E6%81%90%E6%80%96%E4%BA%86%23) `148.1K 🔥` `+94%`
1. [克罗地亚长文致函FIFA](https://s.weibo.com/weibo?q=%23%E5%85%8B%E7%BD%97%E5%9C%B0%E4%BA%9A%E9%95%BF%E6%96%87%E8%87%B4%E5%87%BDFIFA%23) `80.1K 🔥` `+77%`
1. [英格兰阿根廷赢家预测](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%B5%A2%E5%AE%B6%E9%A2%84%E6%B5%8B%23) `67.7K 🔥` `+38%`
1. [中国名哨称亚马尔造点是错判 (A famous Chinese whistleblower said Yamal’s creation of a point was a misjudgment)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%90%8D%E5%93%A8%E7%A7%B0%E4%BA%9A%E9%A9%AC%E5%B0%94%E9%80%A0%E7%82%B9%E6%98%AF%E9%94%99%E5%88%A4%23) `57.6K 🔥` `+36%`
1. [曝C罗考虑参加2030年世界杯](https://s.weibo.com/weibo?q=%23%E6%9B%9DC%E7%BD%97%E8%80%83%E8%99%91%E5%8F%82%E5%8A%A02030%E5%B9%B4%E4%B8%96%E7%95%8C%E6%9D%AF%23) `263.5K 🔥`
1. [中国用户终于迎来满血iPhone](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%A8%E6%88%B7%E7%BB%88%E4%BA%8E%E8%BF%8E%E6%9D%A5%E6%BB%A1%E8%A1%80iPhone%23) `166.1K 🔥`
1. [不建议大家辞职去做自媒体](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E8%BE%9E%E8%81%8C%E5%8E%BB%E5%81%9A%E8%87%AA%E5%AA%92%E4%BD%93%23) `82.2K 🔥`
1. [中老年妇女困境](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E8%80%81%E5%B9%B4%E5%A6%87%E5%A5%B3%E5%9B%B0%E5%A2%83%23) `78.7K 🔥`
1. [医生提醒这4个小时必须睡觉 (The doctor reminds you that you must sleep during these 4 hours)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E6%8F%90%E9%86%92%E8%BF%994%E4%B8%AA%E5%B0%8F%E6%97%B6%E5%BF%85%E9%A1%BB%E7%9D%A1%E8%A7%89%23) `57.6K 🔥`
1. [河南多家NFC果汁生产车间竟无水果](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E5%A4%9A%E5%AE%B6NFC%E6%9E%9C%E6%B1%81%E7%94%9F%E4%BA%A7%E8%BD%A6%E9%97%B4%E7%AB%9F%E6%97%A0%E6%B0%B4%E6%9E%9C%23) `57.5K 🔥`
1. [日本女护士输液管中混粪便致人死亡 (Japanese female nurse dies after feces mixed with infusion tube)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A5%B3%E6%8A%A4%E5%A3%AB%E8%BE%93%E6%B6%B2%E7%AE%A1%E4%B8%AD%E6%B7%B7%E7%B2%AA%E4%BE%BF%E8%87%B4%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `44.2K 🔥`
1. [星穹铁道姬子启行](https://s.weibo.com/weibo?q=%23%E6%98%9F%E7%A9%B9%E9%93%81%E9%81%93%E5%A7%AC%E5%AD%90%E5%90%AF%E8%A1%8C%23) `41.1K 🔥`
1. [奔跑吧14 (Run 14)](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A714%23) `38.3K 🔥`
1. [功夫女足2](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B32%23) `91.1K 🔥` `-37%`
1. [白鹿新剧佛山开机 (Bailu new drama starts shooting in Foshan)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%96%B0%E5%89%A7%E4%BD%9B%E5%B1%B1%E5%BC%80%E6%9C%BA%23) `57.9K 🔥` `-34%`
1. [胖东来的西瓜原来是这样切的](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E7%9A%84%E8%A5%BF%E7%93%9C%E5%8E%9F%E6%9D%A5%E6%98%AF%E8%BF%99%E6%A0%B7%E5%88%87%E7%9A%84%23) `53.9K 🔥` `-54%`
1. [当出租屋迎来了放暑假的弟弟妹妹](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%87%BA%E7%A7%9F%E5%B1%8B%E8%BF%8E%E6%9D%A5%E4%BA%86%E6%94%BE%E6%9A%91%E5%81%87%E7%9A%84%E5%BC%9F%E5%BC%9F%E5%A6%B9%E5%A6%B9%23) `47.6K 🔥` `-37%`
1. [猴价涨疯了](https://s.weibo.com/weibo?q=%23%E7%8C%B4%E4%BB%B7%E6%B6%A8%E7%96%AF%E4%BA%86%23) `46.6K 🔥` `-31%`
1. [家长月薪3500元请大学生带娃 (Parents earn 3,500 yuan a month to hire college students to take care of their children)](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E6%9C%88%E8%96%AA3500%E5%85%83%E8%AF%B7%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%B8%A6%E5%A8%83%23) `45.3K 🔥` `-41%`
1. [至今不理解当年跟风买过的东西](https://s.weibo.com/weibo?q=%23%E8%87%B3%E4%BB%8A%E4%B8%8D%E7%90%86%E8%A7%A3%E5%BD%93%E5%B9%B4%E8%B7%9F%E9%A3%8E%E4%B9%B0%E8%BF%87%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `44.0K 🔥` `-42%`
1. [Bin 舆论 (Bin public opinion)](https://s.weibo.com/weibo?q=%23Bin%20%E8%88%86%E8%AE%BA%23) `41.0K 🔥` `-35%`
1. [王俊凯忙一天打开手机天塌了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%BF%99%E4%B8%80%E5%A4%A9%E6%89%93%E5%BC%80%E6%89%8B%E6%9C%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `40.2K 🔥` `-34%`
1. [张凌赫智性恋天菜具像化](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%99%BA%E6%80%A7%E6%81%8B%E5%A4%A9%E8%8F%9C%E5%85%B7%E5%83%8F%E5%8C%96%23) `40.2K 🔥` `-41%`
1. [快递员摔裂18.6万手镯最新进展](https://s.weibo.com/weibo?q=%23%E5%BF%AB%E9%80%92%E5%91%98%E6%91%94%E8%A3%8218.6%E4%B8%87%E6%89%8B%E9%95%AF%E6%9C%80%E6%96%B0%E8%BF%9B%E5%B1%95%23) `37.7K 🔥` `-31%`
1. [恋爱三个月定律](https://s.weibo.com/weibo?q=%23%E6%81%8B%E7%88%B1%E4%B8%89%E4%B8%AA%E6%9C%88%E5%AE%9A%E5%BE%8B%23) `34.1K 🔥` `-36%`
1. [承重柱被挖断半年后小区塌了 (The community collapsed half a year after the load-bearing columns were dug out)](https://s.weibo.com/weibo?q=%23%E6%89%BF%E9%87%8D%E6%9F%B1%E8%A2%AB%E6%8C%96%E6%96%AD%E5%8D%8A%E5%B9%B4%E5%90%8E%E5%B0%8F%E5%8C%BA%E5%A1%8C%E4%BA%86%23) `33.8K 🔥` `-24%`
1. [郑钦文赛季首进八强](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E8%B5%9B%E5%AD%A3%E9%A6%96%E8%BF%9B%E5%85%AB%E5%BC%BA%23) `33.0K 🔥` `-49%`
1. [四川一旅游车坠入河滩 (A tourist bus crashed into a river beach in Sichuan)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E4%B8%80%E6%97%85%E6%B8%B8%E8%BD%A6%E5%9D%A0%E5%85%A5%E6%B2%B3%E6%BB%A9%23) `32.9K 🔥` `-25%`
1. [张月陈瑶 我家那闺女](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E9%99%88%E7%91%B6%20%E6%88%91%E5%AE%B6%E9%82%A3%E9%97%BA%E5%A5%B3%23) `32.4K 🔥` `-24%`
1. [第一次见到这么卖金针菇的](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E5%88%B0%E8%BF%99%E4%B9%88%E5%8D%96%E9%87%91%E9%92%88%E8%8F%87%E7%9A%84%23) `32.0K 🔥` `-37%`
1. [真正的亲密是不客气](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E7%9A%84%E4%BA%B2%E5%AF%86%E6%98%AF%E4%B8%8D%E5%AE%A2%E6%B0%94%23) `31.8K 🔥` `-25%`
1. [日本阴阳菜单已蔓延至中小城市](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%98%B4%E9%98%B3%E8%8F%9C%E5%8D%95%E5%B7%B2%E8%94%93%E5%BB%B6%E8%87%B3%E4%B8%AD%E5%B0%8F%E5%9F%8E%E5%B8%82%23) `31.5K 🔥` `-26%`
1. [美国游客被拉上台遭妻子拳打脚踢](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%B8%B8%E5%AE%A2%E8%A2%AB%E6%8B%89%E4%B8%8A%E5%8F%B0%E9%81%AD%E5%A6%BB%E5%AD%90%E6%8B%B3%E6%89%93%E8%84%9A%E8%B8%A2%23) `31.5K 🔥` `-26%`
1. [有这样的爹干啥不会成功](https://s.weibo.com/weibo?q=%23%E6%9C%89%E8%BF%99%E6%A0%B7%E7%9A%84%E7%88%B9%E5%B9%B2%E5%95%A5%E4%B8%8D%E4%BC%9A%E6%88%90%E5%8A%9F%23) `31.5K 🔥` `-28%`
1. [阿根廷vs英格兰比赛前瞻](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7vs%E8%8B%B1%E6%A0%BC%E5%85%B0%E6%AF%94%E8%B5%9B%E5%89%8D%E7%9E%BB%23) `31.5K 🔥` `-27%`
1. [樊振东全锦赛夺冠含金量](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%85%A8%E9%94%A6%E8%B5%9B%E5%A4%BA%E5%86%A0%E5%90%AB%E9%87%91%E9%87%8F%23) `31.5K 🔥` `-26%`
1. [这就是街舞被删掉的齐舞 (This is the Qi Wu whose street dance was deleted)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B0%B1%E6%98%AF%E8%A1%97%E8%88%9E%E8%A2%AB%E5%88%A0%E6%8E%89%E7%9A%84%E9%BD%90%E8%88%9E%23) `31.4K 🔥` `-26%`

Updated at 2026-07-16 04:27:56

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
