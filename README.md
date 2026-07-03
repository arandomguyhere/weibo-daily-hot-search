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

1. [澳大利亚vs埃及 (Australia vs Egypt)](https://s.weibo.com/weibo?q=%23%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9Avs%E5%9F%83%E5%8F%8A%23) `186.3K 🔥` `NEW`
1. [网传奇葩论文实为AI恶搞杜撰](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%A5%87%E8%91%A9%E8%AE%BA%E6%96%87%E5%AE%9E%E4%B8%BAAI%E6%81%B6%E6%90%9E%E6%9D%9C%E6%92%B0%23) `79.6K 🔥` `NEW`
1. [扎发要显得头包脸教程](https://s.weibo.com/weibo?q=%23%E6%89%8E%E5%8F%91%E8%A6%81%E6%98%BE%E5%BE%97%E5%A4%B4%E5%8C%85%E8%84%B8%E6%95%99%E7%A8%8B%23) `78.3K 🔥` `NEW`
1. [外贸用AI提升几倍效率](https://s.weibo.com/weibo?q=%23%E5%A4%96%E8%B4%B8%E7%94%A8AI%E6%8F%90%E5%8D%87%E5%87%A0%E5%80%8D%E6%95%88%E7%8E%87%23) `78.0K 🔥` `NEW`
1. [孩子知道小猫曾流浪后痛哭](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E7%9F%A5%E9%81%93%E5%B0%8F%E7%8C%AB%E6%9B%BE%E6%B5%81%E6%B5%AA%E5%90%8E%E7%97%9B%E5%93%AD%23) `77.9K 🔥` `NEW`
1. [AG战胜狼队](https://s.weibo.com/weibo?q=%23AG%E6%88%98%E8%83%9C%E7%8B%BC%E9%98%9F%23) `77.6K 🔥` `NEW`
1. [歌手](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%23) `77.5K 🔥` `NEW`
1. [建议大家千万不要再熬夜了 (I suggest you never stay up late again)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E5%86%8D%E7%86%AC%E5%A4%9C%E4%BA%86%23) `204.4K 🔥`
1. [2000亿元两新设备更新资金已全部下达](https://s.weibo.com/weibo?q=%232000%E4%BA%BF%E5%85%83%E4%B8%A4%E6%96%B0%E8%AE%BE%E5%A4%87%E6%9B%B4%E6%96%B0%E8%B5%84%E9%87%91%E5%B7%B2%E5%85%A8%E9%83%A8%E4%B8%8B%E8%BE%BE%23) `184.5K 🔥` `-21%`
1. [王俊凯演唱会票价 (Wang Junkai concert ticket price)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E7%A5%A8%E4%BB%B7%23) `184.0K 🔥` `-21%`
1. [邓为拎了6袋迪奥送花少嘉宾](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%B8%BA%E6%8B%8E%E4%BA%866%E8%A2%8B%E8%BF%AA%E5%A5%A5%E9%80%81%E8%8A%B1%E5%B0%91%E5%98%89%E5%AE%BE%23) `147.8K 🔥` `-31%`
1. [歌手排名](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%23) `79.6K 🔥` `-69%`
1. [把会删Word空白页写进简历 (Write blank pages in Word that can be deleted into your resume)](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E4%BC%9A%E5%88%A0Word%E7%A9%BA%E7%99%BD%E9%A1%B5%E5%86%99%E8%BF%9B%E7%AE%80%E5%8E%86%23) `79.6K 🔥` `-66%`
1. [抗压能力差 恐惧驱动 (Poor stress tolerance and fear-driven)](https://s.weibo.com/weibo?q=%23%E6%8A%97%E5%8E%8B%E8%83%BD%E5%8A%9B%E5%B7%AE%20%E6%81%90%E6%83%A7%E9%A9%B1%E5%8A%A8%23) `79.5K 🔥` `-66%`
1. [G2向裁判抗议TES](https://s.weibo.com/weibo?q=%23G2%E5%90%91%E8%A3%81%E5%88%A4%E6%8A%97%E8%AE%AETES%23) `79.5K 🔥` `-66%`
1. [中国男篮不敌日本男篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E4%B8%8D%E6%95%8C%E6%97%A5%E6%9C%AC%E7%94%B7%E7%AF%AE%23) `79.4K 🔥` `-59%`
1. [鸭血粉丝店也遭LV起诉](https://s.weibo.com/weibo?q=%23%E9%B8%AD%E8%A1%80%E7%B2%89%E4%B8%9D%E5%BA%97%E4%B9%9F%E9%81%ADLV%E8%B5%B7%E8%AF%89%23) `79.4K 🔥` `-65%`
1. [15岁少年家中赤裸死亡父亲回应](https://s.weibo.com/weibo?q=%2315%E5%B2%81%E5%B0%91%E5%B9%B4%E5%AE%B6%E4%B8%AD%E8%B5%A4%E8%A3%B8%E6%AD%BB%E4%BA%A1%E7%88%B6%E4%BA%B2%E5%9B%9E%E5%BA%94%23) `79.3K 🔥` `-59%`
1. [买保险30年月领50万仅领1月被拒 (After buying insurance for 30 years, I received 500,000 yuan a month for only one month but was rejected.)](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E4%BF%9D%E9%99%A930%E5%B9%B4%E6%9C%88%E9%A2%8650%E4%B8%87%E4%BB%85%E9%A2%861%E6%9C%88%E8%A2%AB%E6%8B%92%23) `79.3K 🔥` `-59%`
1. [C罗拉着我进消防通道合影签名](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%8B%89%E7%9D%80%E6%88%91%E8%BF%9B%E6%B6%88%E9%98%B2%E9%80%9A%E9%81%93%E5%90%88%E5%BD%B1%E7%AD%BE%E5%90%8D%23) `79.2K 🔥` `-64%`
1. [网友推荐李清照选角](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%8E%A8%E8%8D%90%E6%9D%8E%E6%B8%85%E7%85%A7%E9%80%89%E8%A7%92%23) `79.2K 🔥` `-66%`
1. [克罗地亚媒体怒批球队被抢劫 (Croatian media angrily criticized the team for being robbed)](https://s.weibo.com/weibo?q=%23%E5%85%8B%E7%BD%97%E5%9C%B0%E4%BA%9A%E5%AA%92%E4%BD%93%E6%80%92%E6%89%B9%E7%90%83%E9%98%9F%E8%A2%AB%E6%8A%A2%E5%8A%AB%23) `79.2K 🔥` `-65%`
1. [王俊凯王源演唱会撞档](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%8E%8B%E6%BA%90%E6%BC%94%E5%94%B1%E4%BC%9A%E6%92%9E%E6%A1%A3%23) `79.1K 🔥` `-66%`
1. [何炅回应主持歌手时吃螺蛳](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E5%9B%9E%E5%BA%94%E4%B8%BB%E6%8C%81%E6%AD%8C%E6%89%8B%E6%97%B6%E5%90%83%E8%9E%BA%E8%9B%B3%23) `79.1K 🔥` `-66%`
1. [耳帝回应张远天赋言论](https://s.weibo.com/weibo?q=%23%E8%80%B3%E5%B8%9D%E5%9B%9E%E5%BA%94%E5%BC%A0%E8%BF%9C%E5%A4%A9%E8%B5%8B%E8%A8%80%E8%AE%BA%23) `79.0K 🔥` `-59%`
1. [终于有人说SML码抽纸了 (Finally someone said that SML code is out of date)](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%9C%89%E4%BA%BA%E8%AF%B4SML%E7%A0%81%E6%8A%BD%E7%BA%B8%E4%BA%86%23) `78.9K 🔥` `-59%`
1. [生理性喜欢就是电光火石](https://s.weibo.com/weibo?q=%23%E7%94%9F%E7%90%86%E6%80%A7%E5%96%9C%E6%AC%A2%E5%B0%B1%E6%98%AF%E7%94%B5%E5%85%89%E7%81%AB%E7%9F%B3%23) `78.9K 🔥` `-58%`
1. [产妇羊水栓塞丈夫在ICU拍下全家福](https://s.weibo.com/weibo?q=%23%E4%BA%A7%E5%A6%87%E7%BE%8A%E6%B0%B4%E6%A0%93%E5%A1%9E%E4%B8%88%E5%A4%AB%E5%9C%A8ICU%E6%8B%8D%E4%B8%8B%E5%85%A8%E5%AE%B6%E7%A6%8F%23) `78.9K 🔥` `-59%`
1. [丁禹兮古装跳万物生](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%8F%A4%E8%A3%85%E8%B7%B3%E4%B8%87%E7%89%A9%E7%94%9F%23) `78.8K 🔥` `-59%`
1. [白敬亭迎来了最佳赏味期](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E8%BF%8E%E6%9D%A5%E4%BA%86%E6%9C%80%E4%BD%B3%E8%B5%8F%E5%91%B3%E6%9C%9F%23) `78.8K 🔥` `-59%`
1. [林俊杰檀健次就这个双强爽 (JJ Lin and Tan Kenci are so happy with this double power)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E6%AA%80%E5%81%A5%E6%AC%A1%E5%B0%B1%E8%BF%99%E4%B8%AA%E5%8F%8C%E5%BC%BA%E7%88%BD%23) `78.7K 🔥` `-59%`
1. [张远淘汰](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%BF%9C%E6%B7%98%E6%B1%B0%23) `78.7K 🔥` `-59%`
1. [江西28岁产妇羊水栓塞丈夫不放弃](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%A5%BF28%E5%B2%81%E4%BA%A7%E5%A6%87%E7%BE%8A%E6%B0%B4%E6%A0%93%E5%A1%9E%E4%B8%88%E5%A4%AB%E4%B8%8D%E6%94%BE%E5%BC%83%23) `78.6K 🔥` `-58%`
1. [女孩摸自行车把手遭掌掴妈妈发声](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%91%B8%E8%87%AA%E8%A1%8C%E8%BD%A6%E6%8A%8A%E6%89%8B%E9%81%AD%E6%8E%8C%E6%8E%B4%E5%A6%88%E5%A6%88%E5%8F%91%E5%A3%B0%23) `78.6K 🔥` `-58%`
1. [升级版电影院要来了](https://s.weibo.com/weibo?q=%23%E5%8D%87%E7%BA%A7%E7%89%88%E7%94%B5%E5%BD%B1%E9%99%A2%E8%A6%81%E6%9D%A5%E4%BA%86%23) `78.5K 🔥` `-59%`
1. [石家庄多所高中门口家长连夜排队 (Parents queued up overnight at the gates of many high schools in Shijiazhuang)](https://s.weibo.com/weibo?q=%23%E7%9F%B3%E5%AE%B6%E5%BA%84%E5%A4%9A%E6%89%80%E9%AB%98%E4%B8%AD%E9%97%A8%E5%8F%A3%E5%AE%B6%E9%95%BF%E8%BF%9E%E5%A4%9C%E6%8E%92%E9%98%9F%23) `78.5K 🔥` `-59%`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `78.4K 🔥` `-59%`
1. [AG完成让二追三 (AG completes and lets two chase three)](https://s.weibo.com/weibo?q=%23AG%E5%AE%8C%E6%88%90%E8%AE%A9%E4%BA%8C%E8%BF%BD%E4%B8%89%23) `78.4K 🔥` `-59%`
1. [温网 (Wimbledon)](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E7%BD%91%23) `78.3K 🔥` `-58%`
1. [宇树科技影子股一字涨停](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E5%BD%B1%E5%AD%90%E8%82%A1%E4%B8%80%E5%AD%97%E6%B6%A8%E5%81%9C%23) `78.2K 🔥` `-58%`
1. [长沙暴雨](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E6%9A%B4%E9%9B%A8%23) `78.2K 🔥` `-59%`
1. [曝TES违反规则](https://s.weibo.com/weibo?q=%23%E6%9B%9DTES%E8%BF%9D%E5%8F%8D%E8%A7%84%E5%88%99%23) `78.1K 🔥` `-59%`
1. [国乒男单绝对统治力正在逐步消解 (The absolute dominance of the national table tennis men’s singles is gradually disappearing)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%8D%95%E7%BB%9D%E5%AF%B9%E7%BB%9F%E6%B2%BB%E5%8A%9B%E6%AD%A3%E5%9C%A8%E9%80%90%E6%AD%A5%E6%B6%88%E8%A7%A3%23) `78.1K 🔥` `-59%`
1. [汪苏泷眼眶怎么划破了](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E7%9C%BC%E7%9C%B6%E6%80%8E%E4%B9%88%E5%88%92%E7%A0%B4%E4%BA%86%23) `78.1K 🔥` `-58%`
1. [广东暴雨大暴雨到](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E6%9A%B4%E9%9B%A8%E5%A4%A7%E6%9A%B4%E9%9B%A8%E5%88%B0%23) `78.0K 🔥` `-66%`
1. [中国男篮世预赛小组出线形势](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E4%B8%96%E9%A2%84%E8%B5%9B%E5%B0%8F%E7%BB%84%E5%87%BA%E7%BA%BF%E5%BD%A2%E5%8A%BF%23) `77.9K 🔥` `-59%`
1. [中国船员在被韩海警扣押期间死亡](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%88%B9%E5%91%98%E5%9C%A8%E8%A2%AB%E9%9F%A9%E6%B5%B7%E8%AD%A6%E6%89%A3%E6%8A%BC%E6%9C%9F%E9%97%B4%E6%AD%BB%E4%BA%A1%23) `77.8K 🔥` `-59%`
1. [王源看见粉丝穿小绿雨衣的反应](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E7%9C%8B%E8%A7%81%E7%B2%89%E4%B8%9D%E7%A9%BF%E5%B0%8F%E7%BB%BF%E9%9B%A8%E8%A1%A3%E7%9A%84%E5%8F%8D%E5%BA%94%23) `77.8K 🔥` `-58%`
1. [茉莉奶白已成功登记四叶星著作权](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E5%B7%B2%E6%88%90%E5%8A%9F%E7%99%BB%E8%AE%B0%E5%9B%9B%E5%8F%B6%E6%98%9F%E8%91%97%E4%BD%9C%E6%9D%83%23) `77.7K 🔥` `-59%`
1. [长生MVP (Longevity MVP)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E7%94%9FMVP%23) `77.7K 🔥` `-63%`
1. [薛之谦演唱会 (Joker Xue Concert)](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%BC%94%E5%94%B1%E4%BC%9A%23) `77.6K 🔥` `-59%`

Updated at 2026-07-04 03:51:15

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
