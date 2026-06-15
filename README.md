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

1. [比利时vs埃及 (Belgium vs Egypt)](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B6vs%E5%9F%83%E5%8F%8A%23) `342.0K 🔥` `NEW`
1. [佛得角门将哭了](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%E5%93%AD%E4%BA%86%23) `182.1K 🔥` `NEW`
1. [世界杯开赛以来最大冷门](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%BC%80%E8%B5%9B%E4%BB%A5%E6%9D%A5%E6%9C%80%E5%A4%A7%E5%86%B7%E9%97%A8%23) `146.2K 🔥` `NEW`
1. [卢卡库替补扳平](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E5%8D%A1%E5%BA%93%E6%9B%BF%E8%A1%A5%E6%89%B3%E5%B9%B3%23) `112.5K 🔥` `NEW`
1. [王源益禾堂 一拍即合式代言](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E7%9B%8A%E7%A6%BE%E5%A0%82%20%E4%B8%80%E6%8B%8D%E5%8D%B3%E5%90%88%E5%BC%8F%E4%BB%A3%E8%A8%80%23) `111.8K 🔥` `NEW`
1. [比利时 我不知道您这是怎么了](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B6%20%E6%88%91%E4%B8%8D%E7%9F%A5%E9%81%93%E6%82%A8%E8%BF%99%E6%98%AF%E6%80%8E%E4%B9%88%E4%BA%86%23) `62.5K 🔥` `NEW`
1. [世界杯最悲惨的一届出现了](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E6%9C%80%E6%82%B2%E6%83%A8%E7%9A%84%E4%B8%80%E5%B1%8A%E5%87%BA%E7%8E%B0%E4%BA%86%23) `60.8K 🔥` `NEW`
1. [西班牙爆冷](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E7%88%86%E5%86%B7%23) `58.9K 🔥` `NEW`
1. [世界杯 看力竭了](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%20%E7%9C%8B%E5%8A%9B%E7%AB%AD%E4%BA%86%23) `55.6K 🔥` `NEW`
1. [埃及进球](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E8%BF%9B%E7%90%83%23) `49.7K 🔥` `NEW`
1. [西班牙25脚射门0进球 (Spain scored 0 goals in 25 shots)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%9925%E8%84%9A%E5%B0%84%E9%97%A80%E8%BF%9B%E7%90%83%23) `46.9K 🔥` `NEW`
1. [40岁佛得角门将哭了](https://s.weibo.com/weibo?q=%2340%E5%B2%81%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%E5%93%AD%E4%BA%86%23) `45.1K 🔥` `NEW`
1. [西班牙主帅谈亚马尔替补出场](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E4%B8%BB%E5%B8%85%E8%B0%88%E4%BA%9A%E9%A9%AC%E5%B0%94%E6%9B%BF%E8%A1%A5%E5%87%BA%E5%9C%BA%23) `36.6K 🔥` `NEW`
1. [亚马尔替补出场过人最多](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E6%9B%BF%E8%A1%A5%E5%87%BA%E5%9C%BA%E8%BF%87%E4%BA%BA%E6%9C%80%E5%A4%9A%23) `34.2K 🔥` `NEW`
1. [亚马尔尼科不首发](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E5%B0%BC%E7%A7%91%E4%B8%8D%E9%A6%96%E5%8F%91%23) `30.4K 🔥` `NEW`
1. [莫离](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%23) `30.4K 🔥` `NEW`
1. [佛得角铁桶阵](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%93%81%E6%A1%B6%E9%98%B5%23) `30.4K 🔥` `NEW`
1. [世界杯首个0比0](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E9%A6%96%E4%B8%AA0%E6%AF%940%23) `30.4K 🔥` `NEW`
1. [西班牙0比0战平佛得角](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%990%E6%AF%940%E6%88%98%E5%B9%B3%E4%BD%9B%E5%BE%97%E8%A7%92%23) `362.3K 🔥` `-39%`
1. [一图看懂基建六张网](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%9B%BE%E7%9C%8B%E6%87%82%E5%9F%BA%E5%BB%BA%E5%85%AD%E5%BC%A0%E7%BD%91%23) `197.8K 🔥` `-76%`
1. [檀健次厚底鞋特写 (Tan Jianci thick-soled shoes close-up)](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E5%8E%9A%E5%BA%95%E9%9E%8B%E7%89%B9%E5%86%99%23) `103.1K 🔥` `-70%`
1. [西班牙真没招了](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E7%9C%9F%E6%B2%A1%E6%8B%9B%E4%BA%86%23) `68.3K 🔥` `-92%`
1. [吴越看迪丽热巴的眼神](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%B6%8A%E7%9C%8B%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9A%84%E7%9C%BC%E7%A5%9E%23) `60.8K 🔥` `-74%`
1. [北京退衣姐刑事拘留](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E9%80%80%E8%A1%A3%E5%A7%90%E5%88%91%E4%BA%8B%E6%8B%98%E7%95%99%23) `55.6K 🔥` `-58%`
1. [亚马尔世界杯首秀](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E4%B8%96%E7%95%8C%E6%9D%AF%E9%A6%96%E7%A7%80%23) `53.1K 🔥` `-93%`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `51.6K 🔥` `-62%`
1. [世界杯中日韩踢得都很出色](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E4%B8%AD%E6%97%A5%E9%9F%A9%E8%B8%A2%E5%BE%97%E9%83%BD%E5%BE%88%E5%87%BA%E8%89%B2%23) `48.8K 🔥` `-76%`
1. [西班牙vs佛得角 (Spain vs Cape Verde)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99vs%E4%BD%9B%E5%BE%97%E8%A7%92%23) `46.6K 🔥` `-98%`
1. [原来是不是教师真的好明显](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%98%AF%E4%B8%8D%E6%98%AF%E6%95%99%E5%B8%88%E7%9C%9F%E7%9A%84%E5%A5%BD%E6%98%8E%E6%98%BE%23) `46.4K 🔥` `-73%`
1. [佛得角40岁门神](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%9240%E5%B2%81%E9%97%A8%E7%A5%9E%23) `46.3K 🔥` `-92%`
1. [迪丽热巴获最佳电视剧女演员](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%8E%B7%E6%9C%80%E4%BD%B3%E7%94%B5%E8%A7%86%E5%89%A7%E5%A5%B3%E6%BC%94%E5%91%98%23) `45.4K 🔥` `-58%`
1. [肥胖的最新标准 (The latest standards for obesity)](https://s.weibo.com/weibo?q=%23%E8%82%A5%E8%83%96%E7%9A%84%E6%9C%80%E6%96%B0%E6%A0%87%E5%87%86%23) `42.8K 🔥` `-79%`
1. [西班牙佛得角 看睡着了](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E4%BD%9B%E5%BE%97%E8%A7%92%20%E7%9C%8B%E7%9D%A1%E7%9D%80%E4%BA%86%23) `38.0K 🔥` `-96%`
1. [钱菲等了王楚然三年](https://s.weibo.com/weibo?q=%23%E9%92%B1%E8%8F%B2%E7%AD%89%E4%BA%86%E7%8E%8B%E6%A5%9A%E7%84%B6%E4%B8%89%E5%B9%B4%23) `36.5K 🔥` `-64%`
1. [美国伊朗达成和平协议 (US and Iran reach peace deal)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%BC%8A%E6%9C%97%E8%BE%BE%E6%88%90%E5%92%8C%E5%B9%B3%E5%8D%8F%E8%AE%AE%23) `32.3K 🔥` `-57%`
1. [爱情有烟火热度](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E6%9C%89%E7%83%9F%E7%81%AB%E7%83%AD%E5%BA%A6%23) `31.8K 🔥` `-73%`
1. [21岁男生遗体在南太行崖底被找到](https://s.weibo.com/weibo?q=%2321%E5%B2%81%E7%94%B7%E7%94%9F%E9%81%97%E4%BD%93%E5%9C%A8%E5%8D%97%E5%A4%AA%E8%A1%8C%E5%B4%96%E5%BA%95%E8%A2%AB%E6%89%BE%E5%88%B0%23) `31.0K 🔥` `-78%`
1. [EDG胜者组对阵XLG (EDG winner group vs. XLG)](https://s.weibo.com/weibo?q=%23EDG%E8%83%9C%E8%80%85%E7%BB%84%E5%AF%B9%E9%98%B5XLG%23) `30.6K 🔥` `-76%`
1. [佛得角门将好厉害 (Cape Verde’s goalkeeper is amazing)](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%E5%A5%BD%E5%8E%89%E5%AE%B3%23) `30.4K 🔥` `-89%`
1. [上班最可怕的地方在于 (The scariest part about going to work is)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E6%9C%80%E5%8F%AF%E6%80%95%E7%9A%84%E5%9C%B0%E6%96%B9%E5%9C%A8%E4%BA%8E%23) `30.4K 🔥` `-50%`
1. [只靠4个狠招体脂降到18](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E9%9D%A04%E4%B8%AA%E7%8B%A0%E6%8B%9B%E4%BD%93%E8%84%82%E9%99%8D%E5%88%B018%23) `30.4K 🔥` `-49%`
1. [珠峰向导被遗忘在死亡区6天6夜生还](https://s.weibo.com/weibo?q=%23%E7%8F%A0%E5%B3%B0%E5%90%91%E5%AF%BC%E8%A2%AB%E9%81%97%E5%BF%98%E5%9C%A8%E6%AD%BB%E4%BA%A1%E5%8C%BA6%E5%A4%A96%E5%A4%9C%E7%94%9F%E8%BF%98%23) `30.4K 🔥` `-74%`
1. [西班牙首发](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%A6%96%E5%8F%91%23) `30.4K 🔥` `-88%`
1. [王玉雯裙摆塞满车](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E8%A3%99%E6%91%86%E5%A1%9E%E6%BB%A1%E8%BD%A6%23) `30.4K 🔥` `-67%`
1. [从副部级降为副处级后王铁二次被查](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E5%89%AF%E9%83%A8%E7%BA%A7%E9%99%8D%E4%B8%BA%E5%89%AF%E5%A4%84%E7%BA%A7%E5%90%8E%E7%8E%8B%E9%93%81%E4%BA%8C%E6%AC%A1%E8%A2%AB%E6%9F%A5%23) `30.4K 🔥` `-59%`
1. [第一次见公摊面积这么大的鞋 (This is the first time I have seen shoes with such a large stall area.)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E5%85%AC%E6%91%8A%E9%9D%A2%E7%A7%AF%E8%BF%99%E4%B9%88%E5%A4%A7%E7%9A%84%E9%9E%8B%23) `30.4K 🔥` `-70%`
1. [檀健次 现偶](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%20%E7%8E%B0%E5%81%B6%23) `30.4K 🔥` `-50%`
1. [郑钦文2比1萨卡里](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%872%E6%AF%941%E8%90%A8%E5%8D%A1%E9%87%8C%23) `30.4K 🔥` `-50%`
1. [白鹿说丞磊一看剧本要坐18集轮椅就接了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%AF%B4%E4%B8%9E%E7%A3%8A%E4%B8%80%E7%9C%8B%E5%89%A7%E6%9C%AC%E8%A6%81%E5%9D%9018%E9%9B%86%E8%BD%AE%E6%A4%85%E5%B0%B1%E6%8E%A5%E4%BA%86%23) `30.4K 🔥` `-61%`
1. [不要低估第一年工作的消费欲](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E4%BD%8E%E4%BC%B0%E7%AC%AC%E4%B8%80%E5%B9%B4%E5%B7%A5%E4%BD%9C%E7%9A%84%E6%B6%88%E8%B4%B9%E6%AC%B2%23) `30.4K 🔥` `-57%`
1. [尔冬升3年前看过给阿嬷的情书剧本](https://s.weibo.com/weibo?q=%23%E5%B0%94%E5%86%AC%E5%8D%873%E5%B9%B4%E5%89%8D%E7%9C%8B%E8%BF%87%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E5%89%A7%E6%9C%AC%23) `30.4K 🔥` `-57%`

Updated at 2026-06-16 05:18:36

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
