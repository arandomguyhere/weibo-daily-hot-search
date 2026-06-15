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

1. [明晚8点上京东618领6大补贴更便宜 (It’s cheaper to go to JD.com 618 at 8pm tomorrow night to receive 6 major subsidies)](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%99%9A8%E7%82%B9%E4%B8%8A%E4%BA%AC%E4%B8%9C618%E9%A2%866%E5%A4%A7%E8%A1%A5%E8%B4%B4%E6%9B%B4%E4%BE%BF%E5%AE%9C%23) `639.9K 🔥` `NEW`
1. [男子谎称售卖高考答案被查处](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%B0%8E%E7%A7%B0%E5%94%AE%E5%8D%96%E9%AB%98%E8%80%83%E7%AD%94%E6%A1%88%E8%A2%AB%E6%9F%A5%E5%A4%84%23) `425.9K 🔥` `NEW`
1. [沙特vs乌拉圭](https://s.weibo.com/weibo?q=%23%E6%B2%99%E7%89%B9vs%E4%B9%8C%E6%8B%89%E5%9C%AD%23) `369.8K 🔥` `NEW`
1. [比利时1比1埃及](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B61%E6%AF%941%E5%9F%83%E5%8F%8A%23) `201.1K 🔥` `NEW`
1. [日系车巨头要为中国品牌代工了](https://s.weibo.com/weibo?q=%23%E6%97%A5%E7%B3%BB%E8%BD%A6%E5%B7%A8%E5%A4%B4%E8%A6%81%E4%B8%BA%E4%B8%AD%E5%9B%BD%E5%93%81%E7%89%8C%E4%BB%A3%E5%B7%A5%E4%BA%86%23) `106.3K 🔥` `NEW`
1. [A股算力两大方向大面积涨停](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E7%AE%97%E5%8A%9B%E4%B8%A4%E5%A4%A7%E6%96%B9%E5%90%91%E5%A4%A7%E9%9D%A2%E7%A7%AF%E6%B6%A8%E5%81%9C%23) `81.6K 🔥` `NEW`
1. [沙特半场1比0乌拉圭](https://s.weibo.com/weibo?q=%23%E6%B2%99%E7%89%B9%E5%8D%8A%E5%9C%BA1%E6%AF%940%E4%B9%8C%E6%8B%89%E5%9C%AD%23) `80.1K 🔥` `NEW`
1. [粤芯半导体IPO过会](https://s.weibo.com/weibo?q=%23%E7%B2%A4%E8%8A%AF%E5%8D%8A%E5%AF%BC%E4%BD%93IPO%E8%BF%87%E4%BC%9A%23) `73.2K 🔥` `NEW`
1. [孩子作文写300个哈妈妈说很勇敢](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E4%BD%9C%E6%96%87%E5%86%99300%E4%B8%AA%E5%93%88%E5%A6%88%E5%A6%88%E8%AF%B4%E5%BE%88%E5%8B%87%E6%95%A2%23) `73.2K 🔥` `NEW`
1. [TF四代突围2赛制](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E7%AA%81%E5%9B%B42%E8%B5%9B%E5%88%B6%23) `73.2K 🔥` `NEW`
1. [贺峻霖突然来了句satisfaction (He Junlin suddenly said satisfaction)](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E7%AA%81%E7%84%B6%E6%9D%A5%E4%BA%86%E5%8F%A5satisfaction%23) `73.1K 🔥` `NEW`
1. [王玉雯上迪10周年红毯造型](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E4%B8%8A%E8%BF%AA10%E5%91%A8%E5%B9%B4%E7%BA%A2%E6%AF%AF%E9%80%A0%E5%9E%8B%23) `73.1K 🔥` `NEW`
1. [曝SpaceX联手英伟达打造太空算力](https://s.weibo.com/weibo?q=%23%E6%9B%9DSpaceX%E8%81%94%E6%89%8B%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%89%93%E9%80%A0%E5%A4%AA%E7%A9%BA%E7%AE%97%E5%8A%9B%23) `73.0K 🔥` `NEW`
1. [00后做鸿蒙应用月入50万](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E5%81%9A%E9%B8%BF%E8%92%99%E5%BA%94%E7%94%A8%E6%9C%88%E5%85%A550%E4%B8%87%23) `73.0K 🔥` `NEW`
1. [西班牙0比0战平佛得角](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%990%E6%AF%940%E6%88%98%E5%B9%B3%E4%BD%9B%E5%BE%97%E8%A7%92%23) `1.5M 🔥` `+314%`
1. [佛得角门将哭了](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%E5%93%AD%E4%BA%86%23) `671.6K 🔥` `+269%`
1. [一图看懂基建六张网](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%9B%BE%E7%9C%8B%E6%87%82%E5%9F%BA%E5%BB%BA%E5%85%AD%E5%BC%A0%E7%BD%91%23) `643.4K 🔥` `+225%`
1. [世界杯开赛以来最大冷门](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%BC%80%E8%B5%9B%E4%BB%A5%E6%9D%A5%E6%9C%80%E5%A4%A7%E5%86%B7%E9%97%A8%23) `635.5K 🔥` `+335%`
1. [檀健次厚底鞋特写 (Tan Jianci thick-soled shoes close-up)](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E5%8E%9A%E5%BA%95%E9%9E%8B%E7%89%B9%E5%86%99%23) `442.1K 🔥` `+329%`
1. [北京退衣姐刑事拘留](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E9%80%80%E8%A1%A3%E5%A7%90%E5%88%91%E4%BA%8B%E6%8B%98%E7%95%99%23) `440.3K 🔥` `+692%`
1. [原来是不是教师真的好明显](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%98%AF%E4%B8%8D%E6%98%AF%E6%95%99%E5%B8%88%E7%9C%9F%E7%9A%84%E5%A5%BD%E6%98%8E%E6%98%BE%23) `273.1K 🔥` `+489%`
1. [吴越看迪丽热巴的眼神 (The way Wu Yue looks at Dilireba)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%B6%8A%E7%9C%8B%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9A%84%E7%9C%BC%E7%A5%9E%23) `238.7K 🔥` `+292%`
1. [肥胖的最新标准 (The latest standards for obesity)](https://s.weibo.com/weibo?q=%23%E8%82%A5%E8%83%96%E7%9A%84%E6%9C%80%E6%96%B0%E6%A0%87%E5%87%86%23) `221.5K 🔥` `+417%`
1. [世界杯中日韩踢得都很出色](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E4%B8%AD%E6%97%A5%E9%9F%A9%E8%B8%A2%E5%BE%97%E9%83%BD%E5%BE%88%E5%87%BA%E8%89%B2%23) `190.3K 🔥` `+290%`
1. [比利时 我不知道您这是怎么了](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B6%20%E6%88%91%E4%B8%8D%E7%9F%A5%E9%81%93%E6%82%A8%E8%BF%99%E6%98%AF%E6%80%8E%E4%B9%88%E4%BA%86%23) `182.7K 🔥` `+192%`
1. [西班牙爆冷](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E7%88%86%E5%86%B7%23) `172.2K 🔥` `+193%`
1. [亚马尔世界杯首秀](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E4%B8%96%E7%95%8C%E6%9D%AF%E9%A6%96%E7%A7%80%23) `148.5K 🔥` `+180%`
1. [从副部级降为副处级后王铁二次被查](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E5%89%AF%E9%83%A8%E7%BA%A7%E9%99%8D%E4%B8%BA%E5%89%AF%E5%A4%84%E7%BA%A7%E5%90%8E%E7%8E%8B%E9%93%81%E4%BA%8C%E6%AC%A1%E8%A2%AB%E6%9F%A5%23) `140.2K 🔥` `+361%`
1. [迪丽热巴获最佳电视剧女演员](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%8E%B7%E6%9C%80%E4%BD%B3%E7%94%B5%E8%A7%86%E5%89%A7%E5%A5%B3%E6%BC%94%E5%91%98%23) `110.1K 🔥` `+142%`
1. [美国伊朗达成和平协议 (US and Iran reach peace deal)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%BC%8A%E6%9C%97%E8%BE%BE%E6%88%90%E5%92%8C%E5%B9%B3%E5%8D%8F%E8%AE%AE%23) `110.0K 🔥` `+240%`
1. [上班最可怕的地方在于 (The scariest part about going to work is)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E6%9C%80%E5%8F%AF%E6%80%95%E7%9A%84%E5%9C%B0%E6%96%B9%E5%9C%A8%E4%BA%8E%23) `104.5K 🔥` `+243%`
1. [西班牙25脚射门0进球 (Spain scored 0 goals in 25 shots)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%9925%E8%84%9A%E5%B0%84%E9%97%A80%E8%BF%9B%E7%90%83%23) `102.8K 🔥` `+119%`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `98.8K 🔥` `+92%`
1. [西班牙真没招了](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E7%9C%9F%E6%B2%A1%E6%8B%9B%E4%BA%86%23) `98.4K 🔥` `+44%`
1. [爱情有烟火热度](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E6%9C%89%E7%83%9F%E7%81%AB%E7%83%AD%E5%BA%A6%23) `96.8K 🔥` `+205%`
1. [世界杯最悲惨的一届出现了 (The most tragic World Cup has appeared)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E6%9C%80%E6%82%B2%E6%83%A8%E7%9A%84%E4%B8%80%E5%B1%8A%E5%87%BA%E7%8E%B0%E4%BA%86%23) `87.1K 🔥` `+43%`
1. [白鹿说丞磊一看剧本要坐18集轮椅就接了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%AF%B4%E4%B8%9E%E7%A3%8A%E4%B8%80%E7%9C%8B%E5%89%A7%E6%9C%AC%E8%A6%81%E5%9D%9018%E9%9B%86%E8%BD%AE%E6%A4%85%E5%B0%B1%E6%8E%A5%E4%BA%86%23) `83.0K 🔥` `+173%`
1. [第一次见公摊面积这么大的鞋 (This is the first time I have seen shoes with such a large stall area.)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E5%85%AC%E6%91%8A%E9%9D%A2%E7%A7%AF%E8%BF%99%E4%B9%88%E5%A4%A7%E7%9A%84%E9%9E%8B%23) `82.7K 🔥` `+172%`
1. [21岁男生遗体在南太行崖底被找到](https://s.weibo.com/weibo?q=%2321%E5%B2%81%E7%94%B7%E7%94%9F%E9%81%97%E4%BD%93%E5%9C%A8%E5%8D%97%E5%A4%AA%E8%A1%8C%E5%B4%96%E5%BA%95%E8%A2%AB%E6%89%BE%E5%88%B0%23) `81.7K 🔥` `+164%`
1. [40岁佛得角门将哭了](https://s.weibo.com/weibo?q=%2340%E5%B2%81%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%E5%93%AD%E4%BA%86%23) `81.6K 🔥` `+81%`
1. [只靠4个狠招体脂降到18](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E9%9D%A04%E4%B8%AA%E7%8B%A0%E6%8B%9B%E4%BD%93%E8%84%82%E9%99%8D%E5%88%B018%23) `75.9K 🔥` `+149%`
1. [西班牙vs佛得角 (Spain vs Cape Verde)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99vs%E4%BD%9B%E5%BE%97%E8%A7%92%23) `73.3K 🔥` `+57%`
1. [佛得角40岁门神](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%9240%E5%B2%81%E9%97%A8%E7%A5%9E%23) `73.3K 🔥` `+58%`
1. [珠峰向导被遗忘在死亡区6天6夜生还](https://s.weibo.com/weibo?q=%23%E7%8F%A0%E5%B3%B0%E5%90%91%E5%AF%BC%E8%A2%AB%E9%81%97%E5%BF%98%E5%9C%A8%E6%AD%BB%E4%BA%A1%E5%8C%BA6%E5%A4%A96%E5%A4%9C%E7%94%9F%E8%BF%98%23) `73.3K 🔥` `+141%`
1. [钱菲等了王楚然三年](https://s.weibo.com/weibo?q=%23%E9%92%B1%E8%8F%B2%E7%AD%89%E4%BA%86%E7%8E%8B%E6%A5%9A%E7%84%B6%E4%B8%89%E5%B9%B4%23) `73.3K 🔥` `+101%`
1. [王玉雯裙摆塞满车](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E8%A3%99%E6%91%86%E5%A1%9E%E6%BB%A1%E8%BD%A6%23) `73.3K 🔥` `+141%`
1. [EDG胜者组对阵XLG (EDG winner group vs. XLG)](https://s.weibo.com/weibo?q=%23EDG%E8%83%9C%E8%80%85%E7%BB%84%E5%AF%B9%E9%98%B5XLG%23) `73.2K 🔥` `+140%`
1. [檀健次 现偶](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%20%E7%8E%B0%E5%81%B6%23) `73.1K 🔥` `+140%`
1. [不要低估第一年工作的消费欲 (Don’t underestimate the spending power of your first year on the job)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E4%BD%8E%E4%BC%B0%E7%AC%AC%E4%B8%80%E5%B9%B4%E5%B7%A5%E4%BD%9C%E7%9A%84%E6%B6%88%E8%B4%B9%E6%AC%B2%23) `73.1K 🔥` `+140%`
1. [佛得角铁桶阵](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%93%81%E6%A1%B6%E9%98%B5%23) `73.0K 🔥` `+140%`
1. [比利时vs埃及 (Belgium vs Egypt)](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B6vs%E5%9F%83%E5%8F%8A%23) `405.0K 🔥`
1. [卢卡库替补扳平](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E5%8D%A1%E5%BA%93%E6%9B%BF%E8%A1%A5%E6%89%B3%E5%B9%B3%23) `77.0K 🔥` `-32%`

Updated at 2026-06-16 07:12:28

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
