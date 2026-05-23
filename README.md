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

1. [曝红果短剧收益断崖式下跌 (It is revealed that the revenue of Hongguo short drama has plummeted)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E6%94%B6%E7%9B%8A%E6%96%AD%E5%B4%96%E5%BC%8F%E4%B8%8B%E8%B7%8C%23) `1.2M 🔥` `NEW`
1. [史上颜值巅峰iPhone要来了](https://s.weibo.com/weibo?q=%23%E5%8F%B2%E4%B8%8A%E9%A2%9C%E5%80%BC%E5%B7%85%E5%B3%B0iPhone%E8%A6%81%E6%9D%A5%E4%BA%86%23) `1.2M 🔥` `NEW`
1. [岚图泰山X8上市29万起](https://s.weibo.com/weibo?q=%23%E5%B2%9A%E5%9B%BE%E6%B3%B0%E5%B1%B1X8%E4%B8%8A%E5%B8%8229%E4%B8%87%E8%B5%B7%23) `787.6K 🔥` `NEW`
1. [WAW娘在文博会](https://s.weibo.com/weibo?q=%23WAW%E5%A8%98%E5%9C%A8%E6%96%87%E5%8D%9A%E4%BC%9A%23) `659.2K 🔥` `NEW`
1. [美联储预期加息25个基点](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%81%94%E5%82%A8%E9%A2%84%E6%9C%9F%E5%8A%A0%E6%81%AF25%E4%B8%AA%E5%9F%BA%E7%82%B9%23) `541.2K 🔥` `NEW`
1. [神23航天员乘组公布](https://s.weibo.com/weibo?q=%23%E7%A5%9E23%E8%88%AA%E5%A4%A9%E5%91%98%E4%B9%98%E7%BB%84%E5%85%AC%E5%B8%83%23) `405.4K 🔥` `NEW`
1. [神23任务发布会](https://s.weibo.com/weibo?q=%23%E7%A5%9E23%E4%BB%BB%E5%8A%A1%E5%8F%91%E5%B8%83%E4%BC%9A%23) `399.6K 🔥` `NEW`
1. [神23瞄准24日23时08分发射](https://s.weibo.com/weibo?q=%23%E7%A5%9E23%E7%9E%84%E5%87%8624%E6%97%A523%E6%97%B608%E5%88%86%E5%8F%91%E5%B0%84%23) `397.7K 🔥` `NEW`
1. [庾澄庆脸色](https://s.weibo.com/weibo?q=%23%E5%BA%BE%E6%BE%84%E5%BA%86%E8%84%B8%E8%89%B2%23) `395.6K 🔥` `NEW`
1. [举报复旦副教授的家长赢了吗](https://s.weibo.com/weibo?q=%23%E4%B8%BE%E6%8A%A5%E5%A4%8D%E6%97%A6%E5%89%AF%E6%95%99%E6%8E%88%E7%9A%84%E5%AE%B6%E9%95%BF%E8%B5%A2%E4%BA%86%E5%90%97%23) `394.8K 🔥` `NEW`
1. [窦靖童把窦颖摇来了 (Dou Jingtong brought Dou Ying here)](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%E6%8A%8A%E7%AA%A6%E9%A2%96%E6%91%87%E6%9D%A5%E4%BA%86%23) `391.7K 🔥` `NEW`
1. [6年住家保姆打孩子被炒持刀威胁](https://s.weibo.com/weibo?q=%236%E5%B9%B4%E4%BD%8F%E5%AE%B6%E4%BF%9D%E5%A7%86%E6%89%93%E5%AD%A9%E5%AD%90%E8%A2%AB%E7%82%92%E6%8C%81%E5%88%80%E5%A8%81%E8%83%81%23) `388.2K 🔥` `NEW`
1. [妈妈只穿睡衣却给孩子带了奶粉床单](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%8F%AA%E7%A9%BF%E7%9D%A1%E8%A1%A3%E5%8D%B4%E7%BB%99%E5%AD%A9%E5%AD%90%E5%B8%A6%E4%BA%86%E5%A5%B6%E7%B2%89%E5%BA%8A%E5%8D%95%23) `385.7K 🔥` `NEW`
1. [山西沁源煤矿事故救援现场](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E6%B2%81%E6%BA%90%E7%85%A4%E7%9F%BF%E4%BA%8B%E6%95%85%E6%95%91%E6%8F%B4%E7%8E%B0%E5%9C%BA%23) `380.8K 🔥` `NEW`
1. [何炅让那英别聊不在场的人](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E8%AE%A9%E9%82%A3%E8%8B%B1%E5%88%AB%E8%81%8A%E4%B8%8D%E5%9C%A8%E5%9C%BA%E7%9A%84%E4%BA%BA%23) `379.0K 🔥` `NEW`
1. [女孩吃流产药后长期卧床腰臀长疮](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%90%83%E6%B5%81%E4%BA%A7%E8%8D%AF%E5%90%8E%E9%95%BF%E6%9C%9F%E5%8D%A7%E5%BA%8A%E8%85%B0%E8%87%80%E9%95%BF%E7%96%AE%23) `376.0K 🔥` `NEW`
1. [马刺vs雷霆](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%88%BAvs%E9%9B%B7%E9%9C%86%23) `373.5K 🔥` `NEW`
1. [印媒惊叹中国建成世界最大火车站](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%AA%92%E6%83%8A%E5%8F%B9%E4%B8%AD%E5%9B%BD%E5%BB%BA%E6%88%90%E4%B8%96%E7%95%8C%E6%9C%80%E5%A4%A7%E7%81%AB%E8%BD%A6%E7%AB%99%23) `367.8K 🔥` `NEW`
1. [雅戈尔二代独女接手340亿男装帝国](https://s.weibo.com/weibo?q=%23%E9%9B%85%E6%88%88%E5%B0%94%E4%BA%8C%E4%BB%A3%E7%8B%AC%E5%A5%B3%E6%8E%A5%E6%89%8B340%E4%BA%BF%E7%94%B7%E8%A3%85%E5%B8%9D%E5%9B%BD%23) `363.7K 🔥` `NEW`
1. [最好的骨盆前倾修复教学](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%A5%BD%E7%9A%84%E9%AA%A8%E7%9B%86%E5%89%8D%E5%80%BE%E4%BF%AE%E5%A4%8D%E6%95%99%E5%AD%A6%23) `361.4K 🔥` `NEW`
1. [此人的穿搭功底恐怕在我之上 (I'm afraid this person's dressing skills are better than mine.)](https://s.weibo.com/weibo?q=%23%E6%AD%A4%E4%BA%BA%E7%9A%84%E7%A9%BF%E6%90%AD%E5%8A%9F%E5%BA%95%E6%81%90%E6%80%95%E5%9C%A8%E6%88%91%E4%B9%8B%E4%B8%8A%23) `358.4K 🔥` `NEW`
1. [香港航天员将搭乘飞船升空](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E8%88%AA%E5%A4%A9%E5%91%98%E5%B0%86%E6%90%AD%E4%B9%98%E9%A3%9E%E8%88%B9%E5%8D%87%E7%A9%BA%23) `356.6K 🔥` `NEW`
1. [中国官宣第4位女航天员](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%AE%98%E5%AE%A3%E7%AC%AC4%E4%BD%8D%E5%A5%B3%E8%88%AA%E5%A4%A9%E5%91%98%23) `351.0K 🔥` `NEW`
1. [迪丽热巴感受到夏天了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%84%9F%E5%8F%97%E5%88%B0%E5%A4%8F%E5%A4%A9%E4%BA%86%23) `346.9K 🔥` `NEW`
1. [重庆暴雨](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E6%9A%B4%E9%9B%A8%23) `346.4K 🔥` `NEW`
1. [洛克王国世界](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E5%85%8B%E7%8E%8B%E5%9B%BD%E4%B8%96%E7%95%8C%23) `338.4K 🔥` `NEW`
1. [甲状腺结节4级开始存在恶变风险](https://s.weibo.com/weibo?q=%23%E7%94%B2%E7%8A%B6%E8%85%BA%E7%BB%93%E8%8A%824%E7%BA%A7%E5%BC%80%E5%A7%8B%E5%AD%98%E5%9C%A8%E6%81%B6%E5%8F%98%E9%A3%8E%E9%99%A9%23) `335.0K 🔥` `NEW`
1. [沃什宣誓就任美联储主席](https://s.weibo.com/weibo?q=%23%E6%B2%83%E4%BB%80%E5%AE%A3%E8%AA%93%E5%B0%B1%E4%BB%BB%E7%BE%8E%E8%81%94%E5%82%A8%E4%B8%BB%E5%B8%AD%23) `329.4K 🔥` `NEW`
1. [哈登季后赛抢断数超科比](https://s.weibo.com/weibo?q=%23%E5%93%88%E7%99%BB%E5%AD%A3%E5%90%8E%E8%B5%9B%E6%8A%A2%E6%96%AD%E6%95%B0%E8%B6%85%E7%A7%91%E6%AF%94%23) `324.1K 🔥` `NEW`
1. [神舟二十三号已做好发射前各项准备 (Shenzhou 23 has made all preparations before launch)](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E8%88%9F%E4%BA%8C%E5%8D%81%E4%B8%89%E5%8F%B7%E5%B7%B2%E5%81%9A%E5%A5%BD%E5%8F%91%E5%B0%84%E5%89%8D%E5%90%84%E9%A1%B9%E5%87%86%E5%A4%87%23) `864.1K 🔥` `+46%`
1. [王鹤棣说自己确实不舒服 (Wang Hedi said that he really felt uncomfortable)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E8%AF%B4%E8%87%AA%E5%B7%B1%E7%A1%AE%E5%AE%9E%E4%B8%8D%E8%88%92%E6%9C%8D%23) `779.0K 🔥` `+39%`
1. [山西沁源煤矿事故已致8死](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E6%B2%81%E6%BA%90%E7%85%A4%E7%9F%BF%E4%BA%8B%E6%95%85%E5%B7%B2%E8%87%B48%E6%AD%BB%23) `666.7K 🔥` `+47%`
1. [伊能静 我在妻旅才是乘风破浪 (Yi Nengjing, I am riding the wind and waves in my wife’s trip)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%20%E6%88%91%E5%9C%A8%E5%A6%BB%E6%97%85%E6%89%8D%E6%98%AF%E4%B9%98%E9%A3%8E%E7%A0%B4%E6%B5%AA%23) `385.3K 🔥` `+185%`
1. [跑男收视率 (Running man ratings)](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E6%94%B6%E8%A7%86%E7%8E%87%23) `374.6K 🔥` `+138%`
1. [窦靖童演唱那英从头哭到尾 (Dou Jingtong sang Na Ying and cried from beginning to end)](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%E6%BC%94%E5%94%B1%E9%82%A3%E8%8B%B1%E4%BB%8E%E5%A4%B4%E5%93%AD%E5%88%B0%E5%B0%BE%23) `368.2K 🔥` `+120%`
1. [人民日报评所谓碳水脸概念走红](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E6%89%80%E8%B0%93%E7%A2%B3%E6%B0%B4%E8%84%B8%E6%A6%82%E5%BF%B5%E8%B5%B0%E7%BA%A2%23) `365.6K 🔥` `+28%`
1. [惊鸿一面 夯](https://s.weibo.com/weibo?q=%23%E6%83%8A%E9%B8%BF%E4%B8%80%E9%9D%A2%20%E5%A4%AF%23) `354.8K 🔥` `+160%`
1. [歌手](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%23) `353.6K 🔥` `+172%`
1. [ai漫剧硬通货 泡面火腿纯净水](https://s.weibo.com/weibo?q=%23ai%E6%BC%AB%E5%89%A7%E7%A1%AC%E9%80%9A%E8%B4%A7%20%E6%B3%A1%E9%9D%A2%E7%81%AB%E8%85%BF%E7%BA%AF%E5%87%80%E6%B0%B4%23) `348.8K 🔥` `+75%`
1. [年轻人开始全款买房意味着什么](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%BC%80%E5%A7%8B%E5%85%A8%E6%AC%BE%E4%B9%B0%E6%88%BF%E6%84%8F%E5%91%B3%E7%9D%80%E4%BB%80%E4%B9%88%23) `342.7K 🔥` `+153%`
1. [李小冉 北舞大师姐发力了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E5%8C%97%E8%88%9E%E5%A4%A7%E5%B8%88%E5%A7%90%E5%8F%91%E5%8A%9B%E4%BA%86%23) `339.8K 🔥` `+159%`
1. [范丞丞让尤长靖拿第三名 (Fan Chengcheng let You Changjing take third place)](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E8%AE%A9%E5%B0%A4%E9%95%BF%E9%9D%96%E6%8B%BF%E7%AC%AC%E4%B8%89%E5%90%8D%23) `336.4K 🔥` `+163%`
1. [耳帝长评歌手 (Erdi’s long review of singers)](https://s.weibo.com/weibo?q=%23%E8%80%B3%E5%B8%9D%E9%95%BF%E8%AF%84%E6%AD%8C%E6%89%8B%23) `331.5K 🔥` `+163%`
1. [工作室为王鹤棣发声](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E5%AE%A4%E4%B8%BA%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%8F%91%E5%A3%B0%23) `330.9K 🔥` `+68%`
1. [歌手排名 (Singer ranking)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%23) `326.9K 🔥` `+160%`
1. [浪姐票数 等差数列](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%A5%A8%E6%95%B0%20%E7%AD%89%E5%B7%AE%E6%95%B0%E5%88%97%23) `322.7K 🔥` `+149%`
1. [燃油车骨折清仓](https://s.weibo.com/weibo?q=%23%E7%87%83%E6%B2%B9%E8%BD%A6%E9%AA%A8%E6%8A%98%E6%B8%85%E4%BB%93%23) `383.5K 🔥`
1. [好想回到纸媒繁荣的时代 (I really want to go back to the era when print media was prosperous)](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E6%83%B3%E5%9B%9E%E5%88%B0%E7%BA%B8%E5%AA%92%E7%B9%81%E8%8D%A3%E7%9A%84%E6%97%B6%E4%BB%A3%23) `370.1K 🔥`
1. [浪姐淘汰 (Sister Lang is eliminated)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%B7%98%E6%B1%B0%23) `666.8K 🔥` `-40%`
1. [中国U17男足2比3日本U17 (China U17 men's football team 2 to 3 Japan U17)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BDU17%E7%94%B7%E8%B6%B32%E6%AF%943%E6%97%A5%E6%9C%ACU17%23) `401.0K 🔥` `-49%`
1. [歌手排名 闹麻了](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%20%E9%97%B9%E9%BA%BB%E4%BA%86%23) `390.1K 🔥` `-26%`
1. [第一次爱的人 全场最佳](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%88%B1%E7%9A%84%E4%BA%BA%20%E5%85%A8%E5%9C%BA%E6%9C%80%E4%BD%B3%23) `343.6K 🔥` `-84%`

Updated at 2026-05-23 09:27:50

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
