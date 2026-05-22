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

1. [王鹤棣说自己确实不舒服 (Wang Hedi said that he really felt uncomfortable)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E8%AF%B4%E8%87%AA%E5%B7%B1%E7%A1%AE%E5%AE%9E%E4%B8%8D%E8%88%92%E6%9C%8D%23) `558.6K 🔥` `NEW`
1. [山西沁源煤矿事故已致8死](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E6%B2%81%E6%BA%90%E7%85%A4%E7%9F%BF%E4%BA%8B%E6%95%85%E5%B7%B2%E8%87%B48%E6%AD%BB%23) `454.2K 🔥` `NEW`
1. [广西大桶山崖柏被砍当柴烧系谣言](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E5%A4%A7%E6%A1%B6%E5%B1%B1%E5%B4%96%E6%9F%8F%E8%A2%AB%E7%A0%8D%E5%BD%93%E6%9F%B4%E7%83%A7%E7%B3%BB%E8%B0%A3%E8%A8%80%23) `393.8K 🔥` `NEW`
1. [工作室为王鹤棣发声](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E5%AE%A4%E4%B8%BA%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%8F%91%E5%A3%B0%23) `196.7K 🔥` `NEW`
1. [马斯克SpaceX星舰V3首飞成功](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8BSpaceX%E6%98%9F%E8%88%B0V3%E9%A6%96%E9%A3%9E%E6%88%90%E5%8A%9F%23) `138.1K 🔥` `NEW`
1. [教育空间的缩小不是突然发生的](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E7%A9%BA%E9%97%B4%E7%9A%84%E7%BC%A9%E5%B0%8F%E4%B8%8D%E6%98%AF%E7%AA%81%E7%84%B6%E5%8F%91%E7%94%9F%E7%9A%84%23) `136.7K 🔥` `NEW`
1. [第一次爱的人](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%88%B1%E7%9A%84%E4%BA%BA%23) `132.8K 🔥` `NEW`
1. [黄百鸣或面临10年监禁](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%99%BE%E9%B8%A3%E6%88%96%E9%9D%A2%E4%B8%B410%E5%B9%B4%E7%9B%91%E7%A6%81%23) `132.5K 🔥` `NEW`
1. [大眼音乐节](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%9C%BC%E9%9F%B3%E4%B9%90%E8%8A%82%23) `121.5K 🔥` `NEW`
1. [浪姐淘汰](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%B7%98%E6%B1%B0%23) `1.1M 🔥` `+67%`
1. [中国U17男足2比3日本U17 (China U17 men's football team 2 to 3 Japan U17)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BDU17%E7%94%B7%E8%B6%B32%E6%AF%943%E6%97%A5%E6%9C%ACU17%23) `783.8K 🔥` `+859%`
1. [神舟二十三号已做好发射前各项准备 (Shenzhou 23 has made all preparations before launch)](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E8%88%9F%E4%BA%8C%E5%8D%81%E4%B8%89%E5%8F%B7%E5%B7%B2%E5%81%9A%E5%A5%BD%E5%8F%91%E5%B0%84%E5%89%8D%E5%90%84%E9%A1%B9%E5%87%86%E5%A4%87%23) `590.5K 🔥` `+73%`
1. [歌手排名 闹麻了](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%20%E9%97%B9%E9%BA%BB%E4%BA%86%23) `526.0K 🔥` `+72%`
1. [燃油车骨折清仓](https://s.weibo.com/weibo?q=%23%E7%87%83%E6%B2%B9%E8%BD%A6%E9%AA%A8%E6%8A%98%E6%B8%85%E4%BB%93%23) `358.4K 🔥` `+195%`
1. [人民日报评所谓碳水脸概念走红](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E6%89%80%E8%B0%93%E7%A2%B3%E6%B0%B4%E8%84%B8%E6%A6%82%E5%BF%B5%E8%B5%B0%E7%BA%A2%23) `286.5K 🔥` `+185%`
1. [ai漫剧硬通货 泡面火腿纯净水](https://s.weibo.com/weibo?q=%23ai%E6%BC%AB%E5%89%A7%E7%A1%AC%E9%80%9A%E8%B4%A7%20%E6%B3%A1%E9%9D%A2%E7%81%AB%E8%85%BF%E7%BA%AF%E5%87%80%E6%B0%B4%23) `199.4K 🔥` `+89%`
1. [丈夫高调宣布出轨有私生子妻子崩溃](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E9%AB%98%E8%B0%83%E5%AE%A3%E5%B8%83%E5%87%BA%E8%BD%A8%E6%9C%89%E7%A7%81%E7%94%9F%E5%AD%90%E5%A6%BB%E5%AD%90%E5%B4%A9%E6%BA%83%23) `192.1K 🔥` `+108%`
1. [跑男收视率 (Running man ratings)](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E6%94%B6%E8%A7%86%E7%8E%87%23) `157.5K 🔥` `+52%`
1. [上班不会为工位花一分钱 (You won’t spend a penny for your workstation when you go to work.)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E4%B8%8D%E4%BC%9A%E4%B8%BA%E5%B7%A5%E4%BD%8D%E8%8A%B1%E4%B8%80%E5%88%86%E9%92%B1%23) `139.0K 🔥` `+32%`
1. [庾澄庆合伙人](https://s.weibo.com/weibo?q=%23%E5%BA%BE%E6%BE%84%E5%BA%86%E5%90%88%E4%BC%99%E4%BA%BA%23) `138.7K 🔥` `+35%`
1. [窦颖给窦靖童和声 (Dou Ying harmonizes with Dou Jingtong)](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%A2%96%E7%BB%99%E7%AA%A6%E9%9D%96%E7%AB%A5%E5%92%8C%E5%A3%B0%23) `137.3K 🔥` `+36%`
1. [惊鸿一面 夯](https://s.weibo.com/weibo?q=%23%E6%83%8A%E9%B8%BF%E4%B8%80%E9%9D%A2%20%E5%A4%AF%23) `136.2K 🔥` `+35%`
1. [年轻人开始全款买房意味着什么](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%BC%80%E5%A7%8B%E5%85%A8%E6%AC%BE%E4%B9%B0%E6%88%BF%E6%84%8F%E5%91%B3%E7%9D%80%E4%BB%80%E4%B9%88%23) `135.5K 🔥` `+121%`
1. [伊能静 我在妻旅才是乘风破浪](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%20%E6%88%91%E5%9C%A8%E5%A6%BB%E6%97%85%E6%89%8D%E6%98%AF%E4%B9%98%E9%A3%8E%E7%A0%B4%E6%B5%AA%23) `135.3K 🔥` `+32%`
1. [张碧晨 炸场子 (Zhang Bichen blows up the scene)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%A2%A7%E6%99%A8%20%E7%82%B8%E5%9C%BA%E5%AD%90%23) `134.6K 🔥` `+165%`
1. [大爷穿着自己编织的蓑衣卖樱桃 (The old man sells cherries wearing a coir raincoat he knitted by himself)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%88%B7%E7%A9%BF%E7%9D%80%E8%87%AA%E5%B7%B1%E7%BC%96%E7%BB%87%E7%9A%84%E8%93%91%E8%A1%A3%E5%8D%96%E6%A8%B1%E6%A1%83%23) `133.9K 🔥` `+50%`
1. [小猫臂力惊人 肚肚逼人 (The kitten has amazing arm strength and a perky belly)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E8%87%82%E5%8A%9B%E6%83%8A%E4%BA%BA%20%E8%82%9A%E8%82%9A%E9%80%BC%E4%BA%BA%23) `132.1K 🔥` `+193%`
1. [李小冉 北舞大师姐发力了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E5%8C%97%E8%88%9E%E5%A4%A7%E5%B8%88%E5%A7%90%E5%8F%91%E5%8A%9B%E4%BA%86%23) `131.2K 🔥` `+105%`
1. [长沙暴雨](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E6%9A%B4%E9%9B%A8%23) `130.8K 🔥` `+46%`
1. [歌手](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%23) `129.8K 🔥` `+97%`
1. [浪姐票数 等差数列](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%A5%A8%E6%95%B0%20%E7%AD%89%E5%B7%AE%E6%95%B0%E5%88%97%23) `129.5K 🔥` `+92%`
1. [一小伙儿爆砸充电完不走车辆](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%B0%8F%E4%BC%99%E5%84%BF%E7%88%86%E7%A0%B8%E5%85%85%E7%94%B5%E5%AE%8C%E4%B8%8D%E8%B5%B0%E8%BD%A6%E8%BE%86%23) `128.5K 🔥` `+237%`
1. [范丞丞让尤长靖拿第三名 (Fan Chengcheng let You Changjing take third place)](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E8%AE%A9%E5%B0%A4%E9%95%BF%E9%9D%96%E6%8B%BF%E7%AC%AC%E4%B8%89%E5%90%8D%23) `128.0K 🔥` `+243%`
1. [结石姐 歌手袭榜 (Sister Jie Shi, singer hits the list)](https://s.weibo.com/weibo?q=%23%E7%BB%93%E7%9F%B3%E5%A7%90%20%E6%AD%8C%E6%89%8B%E8%A2%AD%E6%A6%9C%23) `127.8K 🔥` `+169%`
1. [突然理解自己为什么会高物欲了](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E7%90%86%E8%A7%A3%E8%87%AA%E5%B7%B1%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BC%9A%E9%AB%98%E7%89%A9%E6%AC%B2%E4%BA%86%23) `126.9K 🔥` `+139%`
1. [耳帝长评歌手 (Erdi’s long review of singers)](https://s.weibo.com/weibo?q=%23%E8%80%B3%E5%B8%9D%E9%95%BF%E8%AF%84%E6%AD%8C%E6%89%8B%23) `126.1K 🔥` `+134%`
1. [歌手排名 (Singer ranking)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%23) `125.5K 🔥` `+173%`
1. [美国18岁少女遭生父性侵后自杀](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD18%E5%B2%81%E5%B0%91%E5%A5%B3%E9%81%AD%E7%94%9F%E7%88%B6%E6%80%A7%E4%BE%B5%E5%90%8E%E8%87%AA%E6%9D%80%23) `125.3K 🔥` `+239%`
1. [上海男篮3比1北京男篮](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E7%94%B7%E7%AF%AE3%E6%AF%941%E5%8C%97%E4%BA%AC%E7%94%B7%E7%AF%AE%23) `124.7K 🔥` `+46%`
1. [收视率](https://s.weibo.com/weibo?q=%23%E6%94%B6%E8%A7%86%E7%8E%87%23) `123.9K 🔥` `+87%`
1. [胡彦斌破音 (Hu Yanbin broke his voice)](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%BD%A6%E6%96%8C%E7%A0%B4%E9%9F%B3%23) `123.1K 🔥` `+223%`
1. [iPhone17系列降价后销量](https://s.weibo.com/weibo?q=%23iPhone17%E7%B3%BB%E5%88%97%E9%99%8D%E4%BB%B7%E5%90%8E%E9%94%80%E9%87%8F%23) `122.1K 🔥` `+237%`
1. [尤长靖把我唱哭了](https://s.weibo.com/weibo?q=%23%E5%B0%A4%E9%95%BF%E9%9D%96%E6%8A%8A%E6%88%91%E5%94%B1%E5%93%AD%E4%BA%86%23) `120.4K 🔥` `+234%`
1. [黄金又跌破4500美元了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%8F%88%E8%B7%8C%E7%A0%B44500%E7%BE%8E%E5%85%83%E4%BA%86%23) `120.0K 🔥` `+238%`
1. [上班被领导兜底的含金量](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E8%A2%AB%E9%A2%86%E5%AF%BC%E5%85%9C%E5%BA%95%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%23) `119.2K 🔥` `+234%`
1. [美退役海军中将受访画面引争议 (Retired US Navy Lieutenant General's interview sparked controversy)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E9%80%80%E5%BD%B9%E6%B5%B7%E5%86%9B%E4%B8%AD%E5%B0%86%E5%8F%97%E8%AE%BF%E7%94%BB%E9%9D%A2%E5%BC%95%E4%BA%89%E8%AE%AE%23) `119.1K 🔥` `+232%`
1. [赵睿微笑 (Zhao Rui smiles)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E7%9D%BF%E5%BE%AE%E7%AC%91%23) `118.2K 🔥` `+224%`
1. [好想回到纸媒繁荣的时代 (I really want to go back to the era when print media was prosperous)](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E6%83%B3%E5%9B%9E%E5%88%B0%E7%BA%B8%E5%AA%92%E7%B9%81%E8%8D%A3%E7%9A%84%E6%97%B6%E4%BB%A3%23) `315.8K 🔥`
1. [窦靖童演唱那英从头哭到尾 (Dou Jingtong sang Na Ying and cried from beginning to end)](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%E6%BC%94%E5%94%B1%E9%82%A3%E8%8B%B1%E4%BB%8E%E5%A4%B4%E5%93%AD%E5%88%B0%E5%B0%BE%23) `167.5K 🔥`
1. [我年龄大到能看懂这张图 (I'm old enough to understand this picture)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%B9%B4%E9%BE%84%E5%A4%A7%E5%88%B0%E8%83%BD%E7%9C%8B%E6%87%82%E8%BF%99%E5%BC%A0%E5%9B%BE%23) `122.6K 🔥`
1. [庾澄庆淘汰](https://s.weibo.com/weibo?q=%23%E5%BA%BE%E6%BE%84%E5%BA%86%E6%B7%98%E6%B1%B0%23) `197.2K 🔥` `-39%`

Updated at 2026-05-23 07:42:02

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
