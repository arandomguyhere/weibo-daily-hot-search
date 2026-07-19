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

1. [美军连续第八晚袭击伊朗 (US military attacks Iran for eighth consecutive night)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E8%BF%9E%E7%BB%AD%E7%AC%AC%E5%85%AB%E6%99%9A%E8%A2%AD%E5%87%BB%E4%BC%8A%E6%9C%97%23) `469.0K 🔥` `NEW`
1. [曾沛慈老公](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E8%80%81%E5%85%AC%23) `442.9K 🔥` `NEW`
1. [伊朗称将转入全面毁灭性反击阶段](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%B0%86%E8%BD%AC%E5%85%A5%E5%85%A8%E9%9D%A2%E6%AF%81%E7%81%AD%E6%80%A7%E5%8F%8D%E5%87%BB%E9%98%B6%E6%AE%B5%23) `440.6K 🔥` `NEW`
1. [广东闹市区惊现巨蜥](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E9%97%B9%E5%B8%82%E5%8C%BA%E6%83%8A%E7%8E%B0%E5%B7%A8%E8%9C%A5%23) `428.0K 🔥` `NEW`
1. [蔡依林喊话王俊凯唱心引力](https://s.weibo.com/weibo?q=%23%E8%94%A1%E4%BE%9D%E6%9E%97%E5%96%8A%E8%AF%9D%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%94%B1%E5%BF%83%E5%BC%95%E5%8A%9B%23) `422.4K 🔥` `NEW`
1. [姆巴佩争金靴](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E4%BA%89%E9%87%91%E9%9D%B4%23) `418.4K 🔥` `NEW`
1. [德尚 坎特](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%B0%9A%20%E5%9D%8E%E7%89%B9%23) `418.2K 🔥` `NEW`
1. [伊朗袭击致美军2死1失踪](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%A2%AD%E5%87%BB%E8%87%B4%E7%BE%8E%E5%86%9B2%E6%AD%BB1%E5%A4%B1%E8%B8%AA%23) `415.2K 🔥` `NEW`
1. [姆巴佩发文送别德尚](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%8F%91%E6%96%87%E9%80%81%E5%88%AB%E5%BE%B7%E5%B0%9A%23) `405.7K 🔥` `NEW`
1. [女孩卧室囤积大量吧唧致中毒](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%8D%A7%E5%AE%A4%E5%9B%A4%E7%A7%AF%E5%A4%A7%E9%87%8F%E5%90%A7%E5%94%A7%E8%87%B4%E4%B8%AD%E6%AF%92%23) `402.8K 🔥` `NEW`
1. [地球超新鲜回应争议 (Earth Super Fresh responds to controversy)](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E7%90%83%E8%B6%85%E6%96%B0%E9%B2%9C%E5%9B%9E%E5%BA%94%E4%BA%89%E8%AE%AE%23) `398.1K 🔥` `NEW`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `388.9K 🔥` `NEW`
1. [奥利塞 助攻王](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%88%A9%E5%A1%9E%20%E5%8A%A9%E6%94%BB%E7%8E%8B%23) `386.7K 🔥` `NEW`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `383.9K 🔥` `NEW`
1. [百花奖最佳女主提名合集](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%E6%8F%90%E5%90%8D%E5%90%88%E9%9B%86%23) `381.0K 🔥` `NEW`
1. [姆巴佩10球](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A910%E7%90%83%23) `373.7K 🔥` `NEW`
1. [马来西亚将驱逐以色列人](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A%E5%B0%86%E9%A9%B1%E9%80%90%E4%BB%A5%E8%89%B2%E5%88%97%E4%BA%BA%23) `372.7K 🔥` `NEW`
1. [法国4比6英格兰](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD4%E6%AF%946%E8%8B%B1%E6%A0%BC%E5%85%B0%23) `2.3M 🔥` `+480%`
1. [中国天眼开辟宇宙研究新路径 (China's Sky Eye opens up new path for cosmic research)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A4%A9%E7%9C%BC%E5%BC%80%E8%BE%9F%E5%AE%87%E5%AE%99%E7%A0%94%E7%A9%B6%E6%96%B0%E8%B7%AF%E5%BE%84%23) `1.8M 🔥` `+63%`
1. [姆巴佩世界杯历史射手王](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E4%B8%96%E7%95%8C%E6%9D%AF%E5%8E%86%E5%8F%B2%E5%B0%84%E6%89%8B%E7%8E%8B%23) `1.4M 🔥` `+244%`
1. [黄总请你去包厢事件系误会](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%80%BB%E8%AF%B7%E4%BD%A0%E5%8E%BB%E5%8C%85%E5%8E%A2%E4%BA%8B%E4%BB%B6%E7%B3%BB%E8%AF%AF%E4%BC%9A%23) `823.3K 🔥` `+101%`
1. [白云山小柴胡护航进球欢呼时刻 (Baiyunshan Xiao Bupleurum escorts the goal cheering moment)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E4%BA%91%E5%B1%B1%E5%B0%8F%E6%9F%B4%E8%83%A1%E6%8A%A4%E8%88%AA%E8%BF%9B%E7%90%83%E6%AC%A2%E5%91%BC%E6%97%B6%E5%88%BB%23) `770.9K 🔥` `+142%`
1. [贝林厄姆让点](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E6%9E%97%E5%8E%84%E5%A7%86%E8%AE%A9%E7%82%B9%23) `621.7K 🔥` `+57%`
1. [冉莹颖过上了和妈妈一样的生活](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E8%BF%87%E4%B8%8A%E4%BA%86%E5%92%8C%E5%A6%88%E5%A6%88%E4%B8%80%E6%A0%B7%E7%9A%84%E7%94%9F%E6%B4%BB%23) `505.2K 🔥` `+45%`
1. [八仙剧本 (Eight Immortals Script)](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%E5%89%A7%E6%9C%AC%23) `467.6K 🔥` `+35%`
1. [父亲说要砍死男友女儿报警报复](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E8%AF%B4%E8%A6%81%E7%A0%8D%E6%AD%BB%E7%94%B7%E5%8F%8B%E5%A5%B3%E5%84%BF%E6%8A%A5%E8%AD%A6%E6%8A%A5%E5%A4%8D%23) `461.1K 🔥` `+32%`
1. [法国英格兰 诚信互刷](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E8%8B%B1%E6%A0%BC%E5%85%B0%20%E8%AF%9A%E4%BF%A1%E4%BA%92%E5%88%B7%23) `1.1M 🔥`
1. [曝蔡依林演唱会报酬税后仅90万](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%94%A1%E4%BE%9D%E6%9E%97%E6%BC%94%E5%94%B1%E4%BC%9A%E6%8A%A5%E9%85%AC%E7%A8%8E%E5%90%8E%E4%BB%8590%E4%B8%87%23) `507.4K 🔥`
1. [刘宇宁此事到此为止](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E6%AD%A4%E4%BA%8B%E5%88%B0%E6%AD%A4%E4%B8%BA%E6%AD%A2%23) `488.1K 🔥`
1. [王楚钦孙颖莎止步半决赛 (Wang Chuqin and Sun Yingsha stopped in the semi-finals)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E6%AD%A2%E6%AD%A5%E5%8D%8A%E5%86%B3%E8%B5%9B%23) `474.8K 🔥`
1. [法国半场0比4英格兰](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E5%8D%8A%E5%9C%BA0%E6%AF%944%E8%8B%B1%E6%A0%BC%E5%85%B0%23) `441.5K 🔥`
1. [超300款AI新品迎来全球首发 (Over 300 new AI products make their global debut)](https://s.weibo.com/weibo?q=%23%E8%B6%85300%E6%AC%BEAI%E6%96%B0%E5%93%81%E8%BF%8E%E6%9D%A5%E5%85%A8%E7%90%83%E9%A6%96%E5%8F%91%23) `438.0K 🔥`
1. [龚俊回应和刘宇宁争议](https://s.weibo.com/weibo?q=%23%E9%BE%9A%E4%BF%8A%E5%9B%9E%E5%BA%94%E5%92%8C%E5%88%98%E5%AE%87%E5%AE%81%E4%BA%89%E8%AE%AE%23) `435.8K 🔥`
1. [降低身体炎症水平的食物 (Foods that reduce inflammation levels in the body)](https://s.weibo.com/weibo?q=%23%E9%99%8D%E4%BD%8E%E8%BA%AB%E4%BD%93%E7%82%8E%E7%97%87%E6%B0%B4%E5%B9%B3%E7%9A%84%E9%A3%9F%E7%89%A9%23) `433.7K 🔥`
1. [张函瑞](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%BD%E7%91%9E%23) `429.6K 🔥`
1. [姆巴佩半场交换球衣 (Mbappe exchanges jerseys at halftime)](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%8D%8A%E5%9C%BA%E4%BA%A4%E6%8D%A2%E7%90%83%E8%A1%A3%23) `426.9K 🔥`
1. [曝演员牛犇儿子王侃去世](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%BC%94%E5%91%98%E7%89%9B%E7%8A%87%E5%84%BF%E5%AD%90%E7%8E%8B%E4%BE%83%E5%8E%BB%E4%B8%96%23) `424.1K 🔥`
1. [王橹杰](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%23) `412.3K 🔥`
1. [王俊凯演唱会退场天才](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E9%80%80%E5%9C%BA%E5%A4%A9%E6%89%8D%23) `408.9K 🔥`
1. [英格兰季军](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E5%AD%A3%E5%86%9B%23) `402.1K 🔥`
1. [空调开26度有臭味原因找到了](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E8%B0%83%E5%BC%8026%E5%BA%A6%E6%9C%89%E8%87%AD%E5%91%B3%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `398.1K 🔥`
1. [姆巴佩图赫尔聊起来了](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%9B%BE%E8%B5%AB%E5%B0%94%E8%81%8A%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `395.6K 🔥`
1. [一眼看出白鹿自己化的妆 (At a glance, Bai Lu’s own makeup can be seen)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9C%BC%E7%9C%8B%E5%87%BA%E7%99%BD%E9%B9%BF%E8%87%AA%E5%B7%B1%E5%8C%96%E7%9A%84%E5%A6%86%23) `392.7K 🔥`
1. [姆巴佩梅开二度](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%A2%85%E5%BC%80%E4%BA%8C%E5%BA%A6%23) `390.8K 🔥`
1. [上海暴雨 (Heavy rain in Shanghai)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E6%9A%B4%E9%9B%A8%23) `378.9K 🔥`
1. [爱喝酒的人天塌了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%96%9D%E9%85%92%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `376.9K 🔥`
1. [美媒称中国抹去美国在AI领域领先地位](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AA%92%E7%A7%B0%E4%B8%AD%E5%9B%BD%E6%8A%B9%E5%8E%BB%E7%BE%8E%E5%9B%BD%E5%9C%A8AI%E9%A2%86%E5%9F%9F%E9%A2%86%E5%85%88%E5%9C%B0%E4%BD%8D%23) `370.3K 🔥`
1. [法国vs英格兰 (France vs England)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BDvs%E8%8B%B1%E6%A0%BC%E5%85%B0%23) `4.9M 🔥` `-24%`
1. [法国门将身价堪比一杯蜜雪冰城 (The French goalkeeper is worth as much as a glass of ice cream)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E9%97%A8%E5%B0%86%E8%BA%AB%E4%BB%B7%E5%A0%AA%E6%AF%94%E4%B8%80%E6%9D%AF%E8%9C%9C%E9%9B%AA%E5%86%B0%E5%9F%8E%23) `497.2K 🔥` `-27%`
1. [法国 不想踢 (France doesn’t want to play)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%20%E4%B8%8D%E6%83%B3%E8%B8%A2%23) `482.7K 🔥` `-64%`
1. [姆巴佩进球](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E8%BF%9B%E7%90%83%23) `411.0K 🔥` `-32%`

Updated at 2026-07-19 08:10:57

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
