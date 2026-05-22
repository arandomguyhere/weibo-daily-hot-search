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

1. [极狐贝塔S3惊喜上市5.98万元起 (Jihu Beta S3 surprisingly launched, starting from 59,800 yuan)](https://s.weibo.com/weibo?q=%23%E6%9E%81%E7%8B%90%E8%B4%9D%E5%A1%94S3%E6%83%8A%E5%96%9C%E4%B8%8A%E5%B8%825.98%E4%B8%87%E5%85%83%E8%B5%B7%23) `188.3K 🔥` `NEW`
1. [浪姐淘汰](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%B7%98%E6%B1%B0%23) `660.2K 🔥` `+81%`
1. [好想回到纸媒繁荣的时代 (I really want to go back to the era when print media was prosperous)](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E6%83%B3%E5%9B%9E%E5%88%B0%E7%BA%B8%E5%AA%92%E7%B9%81%E8%8D%A3%E7%9A%84%E6%97%B6%E4%BB%A3%23) `363.8K 🔥` `+182%`
1. [神舟二十三号已做好发射前各项准备](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E8%88%9F%E4%BA%8C%E5%8D%81%E4%B8%89%E5%8F%B7%E5%B7%B2%E5%81%9A%E5%A5%BD%E5%8F%91%E5%B0%84%E5%89%8D%E5%90%84%E9%A1%B9%E5%87%86%E5%A4%87%23) `342.1K 🔥` `+170%`
1. [庾澄庆淘汰](https://s.weibo.com/weibo?q=%23%E5%BA%BE%E6%BE%84%E5%BA%86%E6%B7%98%E6%B1%B0%23) `324.3K 🔥` `+166%`
1. [歌手排名 闹麻了](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%20%E9%97%B9%E9%BA%BB%E4%BA%86%23) `305.7K 🔥` `+141%`
1. [窦靖童演唱那英从头哭到尾 (Dou Jingtong sang Na Ying and cried from beginning to end)](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%E6%BC%94%E5%94%B1%E9%82%A3%E8%8B%B1%E4%BB%8E%E5%A4%B4%E5%93%AD%E5%88%B0%E5%B0%BE%23) `195.8K 🔥` `+61%`
1. [伊能静 我在妻旅才是乘风破浪](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%20%E6%88%91%E5%9C%A8%E5%A6%BB%E6%97%85%E6%89%8D%E6%98%AF%E4%B9%98%E9%A3%8E%E7%A0%B4%E6%B5%AA%23) `102.4K 🔥` `+27%`
1. [窦颖给窦靖童和声 (Dou Ying harmonizes with Dou Jingtong)](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%A2%96%E7%BB%99%E7%AA%A6%E9%9D%96%E7%AB%A5%E5%92%8C%E5%A3%B0%23) `101.3K 🔥` `+62%`
1. [惊鸿一面 夯](https://s.weibo.com/weibo?q=%23%E6%83%8A%E9%B8%BF%E4%B8%80%E9%9D%A2%20%E5%A4%AF%23) `100.6K 🔥` `+44%`
1. [人民日报评所谓碳水脸概念走红](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E6%89%80%E8%B0%93%E7%A2%B3%E6%B0%B4%E8%84%B8%E6%A6%82%E5%BF%B5%E8%B5%B0%E7%BA%A2%23) `100.4K 🔥` `+59%`
1. [长沙暴雨](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E6%9A%B4%E9%9B%A8%23) `89.7K 🔥` `+28%`
1. [大爷穿着自己编织的蓑衣卖樱桃 (The old man sells cherries wearing a coir raincoat he knitted by himself)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%88%B7%E7%A9%BF%E7%9D%80%E8%87%AA%E5%B7%B1%E7%BC%96%E7%BB%87%E7%9A%84%E8%93%91%E8%A1%A3%E5%8D%96%E6%A8%B1%E6%A1%83%23) `89.5K 🔥` `+43%`
1. [上海男篮3比1北京男篮](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E7%94%B7%E7%AF%AE3%E6%AF%941%E5%8C%97%E4%BA%AC%E7%94%B7%E7%AF%AE%23) `85.5K 🔥` `+37%`
1. [中国U17男足2比3日本U17 (China U17 men's football team 2 to 3 Japan U17)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BDU17%E7%94%B7%E8%B6%B32%E6%AF%943%E6%97%A5%E6%9C%ACU17%23) `81.8K 🔥` `+32%`
1. [网约车司机闷死小猫后跑路拉黑](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A6%E8%BD%A6%E5%8F%B8%E6%9C%BA%E9%97%B7%E6%AD%BB%E5%B0%8F%E7%8C%AB%E5%90%8E%E8%B7%91%E8%B7%AF%E6%8B%89%E9%BB%91%23) `79.0K 🔥` `+30%`
1. [窦靖童 王菲的声音唱窦唯](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%20%E7%8E%8B%E8%8F%B2%E7%9A%84%E5%A3%B0%E9%9F%B3%E5%94%B1%E7%AA%A6%E5%94%AF%23) `78.4K 🔥` `+102%`
1. [收视率](https://s.weibo.com/weibo?q=%23%E6%94%B6%E8%A7%86%E7%8E%87%23) `66.3K 🔥` `+71%`
1. [歌手](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%23) `65.9K 🔥` `+45%`
1. [年轻人开始全款买房意味着什么](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%BC%80%E5%A7%8B%E5%85%A8%E6%AC%BE%E4%B9%B0%E6%88%BF%E6%84%8F%E5%91%B3%E7%9D%80%E4%BB%80%E4%B9%88%23) `61.4K 🔥` `+59%`
1. [突然理解自己为什么会高物欲了](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E7%90%86%E8%A7%A3%E8%87%AA%E5%B7%B1%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BC%9A%E9%AB%98%E7%89%A9%E6%AC%B2%E4%BA%86%23) `53.1K 🔥` `+37%`
1. [张碧晨 炸场子 (Zhang Bichen blows up the scene)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%A2%A7%E6%99%A8%20%E7%82%B8%E5%9C%BA%E5%AD%90%23) `50.8K 🔥` `+57%`
1. [结石姐 歌手袭榜 (Sister Jie Shi, singer hits the list)](https://s.weibo.com/weibo?q=%23%E7%BB%93%E7%9F%B3%E5%A7%90%20%E6%AD%8C%E6%89%8B%E8%A2%AD%E6%A6%9C%23) `47.5K 🔥` `+35%`
1. [女孩开心跑进店将小猫扔出店外 (The girl happily ran into the store and threw the kitten out of the store)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%BC%80%E5%BF%83%E8%B7%91%E8%BF%9B%E5%BA%97%E5%B0%86%E5%B0%8F%E7%8C%AB%E6%89%94%E5%87%BA%E5%BA%97%E5%A4%96%23) `45.7K 🔥` `+41%`
1. [小猫臂力惊人 肚肚逼人](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E8%87%82%E5%8A%9B%E6%83%8A%E4%BA%BA%20%E8%82%9A%E8%82%9A%E9%80%BC%E4%BA%BA%23) `45.1K 🔥` `+40%`
1. [燃油车骨折清仓](https://s.weibo.com/weibo?q=%23%E7%87%83%E6%B2%B9%E8%BD%A6%E9%AA%A8%E6%8A%98%E6%B8%85%E4%BB%93%23) `121.4K 🔥`
1. [ai漫剧硬通货 泡面火腿纯净水](https://s.weibo.com/weibo?q=%23ai%E6%BC%AB%E5%89%A7%E7%A1%AC%E9%80%9A%E8%B4%A7%20%E6%B3%A1%E9%9D%A2%E7%81%AB%E8%85%BF%E7%BA%AF%E5%87%80%E6%B0%B4%23) `105.3K 🔥`
1. [上班不会为工位花一分钱 (You won’t spend a penny for your workstation when you go to work.)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E4%B8%8D%E4%BC%9A%E4%B8%BA%E5%B7%A5%E4%BD%8D%E8%8A%B1%E4%B8%80%E5%88%86%E9%92%B1%23) `105.2K 🔥`
1. [我年龄大到能看懂这张图 (I'm old enough to understand this picture)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%B9%B4%E9%BE%84%E5%A4%A7%E5%88%B0%E8%83%BD%E7%9C%8B%E6%87%82%E8%BF%99%E5%BC%A0%E5%9B%BE%23) `104.1K 🔥`
1. [跑男收视率 (Running man ratings)](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E6%94%B6%E8%A7%86%E7%8E%87%23) `103.4K 🔥`
1. [庾澄庆合伙人](https://s.weibo.com/weibo?q=%23%E5%BA%BE%E6%BE%84%E5%BA%86%E5%90%88%E4%BC%99%E4%BA%BA%23) `102.9K 🔥`
1. [丈夫高调宣布出轨有私生子妻子崩溃](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E9%AB%98%E8%B0%83%E5%AE%A3%E5%B8%83%E5%87%BA%E8%BD%A8%E6%9C%89%E7%A7%81%E7%94%9F%E5%AD%90%E5%A6%BB%E5%AD%90%E5%B4%A9%E6%BA%83%23) `92.5K 🔥`
1. [浪姐票数 等差数列](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%A5%A8%E6%95%B0%20%E7%AD%89%E5%B7%AE%E6%95%B0%E5%88%97%23) `67.6K 🔥`
1. [耳帝长评歌手 (Erdi’s long review of singers)](https://s.weibo.com/weibo?q=%23%E8%80%B3%E5%B8%9D%E9%95%BF%E8%AF%84%E6%AD%8C%E6%89%8B%23) `54.0K 🔥`
1. [歌手排名 (Singer ranking)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%23) `45.9K 🔥`
1. [浪姐 做局](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%20%E5%81%9A%E5%B1%80%23) `45.4K 🔥`
1. [一小伙儿爆砸充电完不走车辆](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%B0%8F%E4%BC%99%E5%84%BF%E7%88%86%E7%A0%B8%E5%85%85%E7%94%B5%E5%AE%8C%E4%B8%8D%E8%B5%B0%E8%BD%A6%E8%BE%86%23) `38.1K 🔥`
1. [胡彦斌破音](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%BD%A6%E6%96%8C%E7%A0%B4%E9%9F%B3%23) `38.1K 🔥`
1. [王菲我知道你在看](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E6%88%91%E7%9F%A5%E9%81%93%E4%BD%A0%E5%9C%A8%E7%9C%8B%23) `37.7K 🔥`
1. [歌手直播](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E7%9B%B4%E6%92%AD%23) `37.6K 🔥`
1. [范丞丞让尤长靖拿第三名 (Fan Chengcheng let You Changjing take third place)](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E8%AE%A9%E5%B0%A4%E9%95%BF%E9%9D%96%E6%8B%BF%E7%AC%AC%E4%B8%89%E5%90%8D%23) `37.3K 🔥`
1. [美国18岁少女遭生父性侵后自杀](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD18%E5%B2%81%E5%B0%91%E5%A5%B3%E9%81%AD%E7%94%9F%E7%88%B6%E6%80%A7%E4%BE%B5%E5%90%8E%E8%87%AA%E6%9D%80%23) `37.0K 🔥`
1. [那英说张碧晨是一定走到最后的 (Na Ying said that Zhang Bichen will definitely reach the end)](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E8%AF%B4%E5%BC%A0%E7%A2%A7%E6%99%A8%E6%98%AF%E4%B8%80%E5%AE%9A%E8%B5%B0%E5%88%B0%E6%9C%80%E5%90%8E%E7%9A%84%23) `36.8K 🔥`
1. [赵睿微笑 (Zhao Rui smiles)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E7%9D%BF%E5%BE%AE%E7%AC%91%23) `36.5K 🔥`
1. [iPhone17系列降价后销量](https://s.weibo.com/weibo?q=%23iPhone17%E7%B3%BB%E5%88%97%E9%99%8D%E4%BB%B7%E5%90%8E%E9%94%80%E9%87%8F%23) `36.3K 🔥`
1. [尤长靖把我唱哭了](https://s.weibo.com/weibo?q=%23%E5%B0%A4%E9%95%BF%E9%9D%96%E6%8A%8A%E6%88%91%E5%94%B1%E5%93%AD%E4%BA%86%23) `36.1K 🔥`
1. [上班被领导兜底的含金量](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E8%A2%AB%E9%A2%86%E5%AF%BC%E5%85%9C%E5%BA%95%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%23) `35.7K 🔥`
1. [黄金又跌破4500美元了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%8F%88%E8%B7%8C%E7%A0%B44500%E7%BE%8E%E5%85%83%E4%BA%86%23) `35.4K 🔥`
1. [英格兰公布世界杯26人名单 (England announces 26-man World Cup squad)](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E5%85%AC%E5%B8%83%E4%B8%96%E7%95%8C%E6%9D%AF26%E4%BA%BA%E5%90%8D%E5%8D%95%23) `35.2K 🔥`
1. [李小冉 北舞大师姐发力了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E5%8C%97%E8%88%9E%E5%A4%A7%E5%B8%88%E5%A7%90%E5%8F%91%E5%8A%9B%E4%BA%86%23) `64.0K 🔥` `-28%`
1. [美退役海军中将受访画面引争议 (Retired US Navy Lieutenant General's interview sparked controversy)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E9%80%80%E5%BD%B9%E6%B5%B7%E5%86%9B%E4%B8%AD%E5%B0%86%E5%8F%97%E8%AE%BF%E7%94%BB%E9%9D%A2%E5%BC%95%E4%BA%89%E8%AE%AE%23) `35.9K 🔥` `-29%`

Updated at 2026-05-23 06:31:51

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
