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

1. [千问红包 (Qianwen red envelope)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E7%BA%A2%E5%8C%85%23) `864.7K 🔥` `NEW`
1. [复兴号遇见小慢车](https://s.weibo.com/weibo?q=%23%E5%A4%8D%E5%85%B4%E5%8F%B7%E9%81%87%E8%A7%81%E5%B0%8F%E6%85%A2%E8%BD%A6%23) `725.8K 🔥` `NEW`
1. [蓝羽会客厅春节档聚齐了](https://s.weibo.com/weibo?q=%23%E8%93%9D%E7%BE%BD%E4%BC%9A%E5%AE%A2%E5%8E%85%E6%98%A5%E8%8A%82%E6%A1%A3%E8%81%9A%E9%BD%90%E4%BA%86%23) `301.1K 🔥` `NEW`
1. [第一批来中国的老外过年现状](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E6%9D%A5%E4%B8%AD%E5%9B%BD%E7%9A%84%E8%80%81%E5%A4%96%E8%BF%87%E5%B9%B4%E7%8E%B0%E7%8A%B6%23) `297.7K 🔥` `NEW`
1. [千问超级免单卡再加3天](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E8%B6%85%E7%BA%A7%E5%85%8D%E5%8D%95%E5%8D%A1%E5%86%8D%E5%8A%A03%E5%A4%A9%23) `207.7K 🔥` `NEW`
1. [明星红包](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%9F%E7%BA%A2%E5%8C%85%23) `206.2K 🔥` `NEW`
1. [穆祉丞比王橹杰还急](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E6%AF%94%E7%8E%8B%E6%A9%B9%E6%9D%B0%E8%BF%98%E6%80%A5%23) `201.0K 🔥` `NEW`
1. [四川大学](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%A4%A7%E5%AD%A6%23) `198.3K 🔥` `NEW`
1. [河南春晚 没有主持人和舞台](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E6%98%A5%E6%99%9A%20%E6%B2%A1%E6%9C%89%E4%B8%BB%E6%8C%81%E4%BA%BA%E5%92%8C%E8%88%9E%E5%8F%B0%23) `198.2K 🔥` `NEW`
1. [大理一女子民宿被指歧视男性](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%90%86%E4%B8%80%E5%A5%B3%E5%AD%90%E6%B0%91%E5%AE%BF%E8%A2%AB%E6%8C%87%E6%AD%A7%E8%A7%86%E7%94%B7%E6%80%A7%23) `181.7K 🔥` `NEW`
1. [前月饼大王从市值49亿到负债10亿 (The former mooncake king went from a market capitalization of 4.9 billion to a debt of 1 billion)](https://s.weibo.com/weibo?q=%23%E5%89%8D%E6%9C%88%E9%A5%BC%E5%A4%A7%E7%8E%8B%E4%BB%8E%E5%B8%82%E5%80%BC49%E4%BA%BF%E5%88%B0%E8%B4%9F%E5%80%BA10%E4%BA%BF%23) `145.0K 🔥` `NEW`
1. [河南春晚 千问到底给了多少](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E6%98%A5%E6%99%9A%20%E5%8D%83%E9%97%AE%E5%88%B0%E5%BA%95%E7%BB%99%E4%BA%86%E5%A4%9A%E5%B0%91%23) `142.9K 🔥` `NEW`
1. [河南春晚 AI感](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E6%98%A5%E6%99%9A%20AI%E6%84%9F%23) `132.2K 🔥` `NEW`
1. [马立奥即将成为哥哥](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E7%AB%8B%E5%A5%A5%E5%8D%B3%E5%B0%86%E6%88%90%E4%B8%BA%E5%93%A5%E5%93%A5%23) `108.0K 🔥` `NEW`
1. [世界是个巨大的宋亚轩](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%98%AF%E4%B8%AA%E5%B7%A8%E5%A4%A7%E7%9A%84%E5%AE%8B%E4%BA%9A%E8%BD%A9%23) `99.7K 🔥` `NEW`
1. [白百何孩子五岁了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%99%BE%E4%BD%95%E5%AD%A9%E5%AD%90%E4%BA%94%E5%B2%81%E4%BA%86%23) `99.5K 🔥` `NEW`
1. [女子移植与亡夫胚胎遭医院拒绝](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%BB%E6%A4%8D%E4%B8%8E%E4%BA%A1%E5%A4%AB%E8%83%9A%E8%83%8E%E9%81%AD%E5%8C%BB%E9%99%A2%E6%8B%92%E7%BB%9D%23) `96.5K 🔥` `NEW`
1. [Kiin复刻Bin名场面](https://s.weibo.com/weibo?q=%23Kiin%E5%A4%8D%E5%88%BBBin%E5%90%8D%E5%9C%BA%E9%9D%A2%23) `84.5K 🔥` `NEW`
1. [鞠婧祎糖亲](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E7%B3%96%E4%BA%B2%23) `83.0K 🔥` `NEW`
1. [河南春晚 大量广告里穿插了少量节目 (Henan Spring Festival Gala has a large number of advertisements interspersed with a small number of programs)](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E6%98%A5%E6%99%9A%20%E5%A4%A7%E9%87%8F%E5%B9%BF%E5%91%8A%E9%87%8C%E7%A9%BF%E6%8F%92%E4%BA%86%E5%B0%91%E9%87%8F%E8%8A%82%E7%9B%AE%23) `1.5M 🔥` `+325%`
1. [红包 (Red envelope)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%8C%85%23) `720.0K 🔥` `+46%`
1. [川大通报王竹卿事件调查结果](https://s.weibo.com/weibo?q=%23%E5%B7%9D%E5%A4%A7%E9%80%9A%E6%8A%A5%E7%8E%8B%E7%AB%B9%E5%8D%BF%E4%BA%8B%E4%BB%B6%E8%B0%83%E6%9F%A5%E7%BB%93%E6%9E%9C%23) `603.8K 🔥` `+284%`
1. [周冬雨从不发朋友圈 (Zhou Dongyu never posts on Moments)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%86%AC%E9%9B%A8%E4%BB%8E%E4%B8%8D%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `268.7K 🔥` `+200%`
1. [刘一手承认欠款2000万](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%B8%80%E6%89%8B%E6%89%BF%E8%AE%A4%E6%AC%A0%E6%AC%BE2000%E4%B8%87%23) `224.6K 🔥` `+21%`
1. [黄子弘凡红包](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E7%BA%A2%E5%8C%85%23) `219.3K 🔥` `+24%`
1. [吃猪脚被卡喉10岁男孩现已去世](https://s.weibo.com/weibo?q=%23%E5%90%83%E7%8C%AA%E8%84%9A%E8%A2%AB%E5%8D%A1%E5%96%8910%E5%B2%81%E7%94%B7%E5%AD%A9%E7%8E%B0%E5%B7%B2%E5%8E%BB%E4%B8%96%23) `198.4K 🔥` `+26%`
1. [小酒窝做了长美甲 (My dimples got long manicure)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E5%81%9A%E4%BA%86%E9%95%BF%E7%BE%8E%E7%94%B2%23) `198.3K 🔥` `+26%`
1. [中国2银2铜暂列冬奥奖牌榜第18](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD2%E9%93%B62%E9%93%9C%E6%9A%82%E5%88%97%E5%86%AC%E5%A5%A5%E5%A5%96%E7%89%8C%E6%A6%9C%E7%AC%AC18%23) `142.9K 🔥` `+37%`
1. [这么大的架子竟然一点官都没有 (Such a big arrogance has no official status at all)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B9%88%E5%A4%A7%E7%9A%84%E6%9E%B6%E5%AD%90%E7%AB%9F%E7%84%B6%E4%B8%80%E7%82%B9%E5%AE%98%E9%83%BD%E6%B2%A1%E6%9C%89%23) `236.6K 🔥`
1. [红包分组](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%8C%85%E5%88%86%E7%BB%84%23) `226.9K 🔥`
1. [千问超级免单卡](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E8%B6%85%E7%BA%A7%E5%85%8D%E5%8D%95%E5%8D%A1%23) `211.4K 🔥`
1. [情人节 (Valentine's Day)](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BA%BA%E8%8A%82%23) `198.5K 🔥`
1. [白鹿虞书欣同款剧宣姿势](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%90%8C%E6%AC%BE%E5%89%A7%E5%AE%A3%E5%A7%BF%E5%8A%BF%23) `198.3K 🔥`
1. [王橹杰高会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E9%AB%98%E4%BC%9A%23) `198.2K 🔥`
1. [王昶钱天一情人节仪式感](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%B6%E9%92%B1%E5%A4%A9%E4%B8%80%E6%83%85%E4%BA%BA%E8%8A%82%E4%BB%AA%E5%BC%8F%E6%84%9F%23) `142.6K 🔥`
1. [哈尔滨18米雪王鸡王被连夜拆除 (The 18-meter Snow King and Chicken King in Harbin was demolished overnight)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B0%94%E6%BB%A818%E7%B1%B3%E9%9B%AA%E7%8E%8B%E9%B8%A1%E7%8E%8B%E8%A2%AB%E8%BF%9E%E5%A4%9C%E6%8B%86%E9%99%A4%23) `100.1K 🔥`
1. [河南春晚神还原樊楼飞天舞 (Henan Spring Festival Gala Gods Restore Fan Lou Feitian Dance)](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E6%98%A5%E6%99%9A%E7%A5%9E%E8%BF%98%E5%8E%9F%E6%A8%8A%E6%A5%BC%E9%A3%9E%E5%A4%A9%E8%88%9E%23) `94.8K 🔥`
1. [黄子韬回应扇了徐艺洋 (Huang Zitao responded by slapping Xu Yiyang)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E5%9B%9E%E5%BA%94%E6%89%87%E4%BA%86%E5%BE%90%E8%89%BA%E6%B4%8B%23) `83.5K 🔥`
1. [王安宇 潦草小狗](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%20%E6%BD%A6%E8%8D%89%E5%B0%8F%E7%8B%97%23) `83.3K 🔥`
1. [河南卫视春晚](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E5%8D%AB%E8%A7%86%E6%98%A5%E6%99%9A%23) `303.7K 🔥` `-61%`
1. [团圆是最好的新年礼物 (Reunion is the best New Year gift)](https://s.weibo.com/weibo?q=%23%E5%9B%A2%E5%9C%86%E6%98%AF%E6%9C%80%E5%A5%BD%E7%9A%84%E6%96%B0%E5%B9%B4%E7%A4%BC%E7%89%A9%23) `216.5K 🔥` `-66%`
1. [人民日报红包 (People's Daily red envelope)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E7%BA%A2%E5%8C%85%23) `198.4K 🔥` `-82%`
1. [米兰花滑惨案是什么级别的爆冷 (What level of upset was the Milan figure skating tragedy?)](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E8%8A%B1%E6%BB%91%E6%83%A8%E6%A1%88%E6%98%AF%E4%BB%80%E4%B9%88%E7%BA%A7%E5%88%AB%E7%9A%84%E7%88%86%E5%86%B7%23) `198.4K 🔥` `-23%`
1. [突然发现朋友圈没人晒花了 (Suddenly I found that no one in the circle of friends was showing off their flowers.)](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E6%9C%8B%E5%8F%8B%E5%9C%88%E6%B2%A1%E4%BA%BA%E6%99%92%E8%8A%B1%E4%BA%86%23) `147.8K 🔥` `-39%`
1. [千问回应大免单再加3天](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E5%9B%9E%E5%BA%94%E5%A4%A7%E5%85%8D%E5%8D%95%E5%86%8D%E5%8A%A03%E5%A4%A9%23) `115.1K 🔥` `-22%`
1. [为什么招上门女婿的女性越来越多了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%8B%9B%E4%B8%8A%E9%97%A8%E5%A5%B3%E5%A9%BF%E7%9A%84%E5%A5%B3%E6%80%A7%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%A4%9A%E4%BA%86%23) `113.6K 🔥` `-28%`
1. [女子称健身被哄骗注射药物变阴阳人 (Woman says she was tricked into injecting drugs to become intersex while working out)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E5%81%A5%E8%BA%AB%E8%A2%AB%E5%93%84%E9%AA%97%E6%B3%A8%E5%B0%84%E8%8D%AF%E7%89%A9%E5%8F%98%E9%98%B4%E9%98%B3%E4%BA%BA%23) `110.5K 🔥` `-33%`
1. [王鹤棣让黄子韬跟徐艺洋离婚 (Wang Hedi asked Huang Zitao to divorce Xu Yiyang)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E8%AE%A9%E9%BB%84%E5%AD%90%E9%9F%AC%E8%B7%9F%E5%BE%90%E8%89%BA%E6%B4%8B%E7%A6%BB%E5%A9%9A%23) `102.1K 🔥` `-35%`
1. [网友偶遇了易烊千玺 (Netizen met Yi Yang Qianxi)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%81%B6%E9%81%87%E4%BA%86%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%23) `92.4K 🔥` `-25%`
1. [辞职当守岛人女高管下岛时哭了](https://s.weibo.com/weibo?q=%23%E8%BE%9E%E8%81%8C%E5%BD%93%E5%AE%88%E5%B2%9B%E4%BA%BA%E5%A5%B3%E9%AB%98%E7%AE%A1%E4%B8%8B%E5%B2%9B%E6%97%B6%E5%93%AD%E4%BA%86%23) `88.9K 🔥` `-44%`
1. [女子998买全程票变半程警方已介入](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90998%E4%B9%B0%E5%85%A8%E7%A8%8B%E7%A5%A8%E5%8F%98%E5%8D%8A%E7%A8%8B%E8%AD%A6%E6%96%B9%E5%B7%B2%E4%BB%8B%E5%85%A5%23) `83.0K 🔥` `-56%`

Updated at 2026-02-14 21:24:34

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
