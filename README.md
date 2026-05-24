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

1. [另一个天堂 视听盛宴 (Another paradise audio-visual feast)](https://s.weibo.com/weibo?q=%23%E5%8F%A6%E4%B8%80%E4%B8%AA%E5%A4%A9%E5%A0%82%20%E8%A7%86%E5%90%AC%E7%9B%9B%E5%AE%B4%23) `455.2K 🔥` `NEW`
1. [攀枝花桃子滞销烂在地里是谣言](https://s.weibo.com/weibo?q=%23%E6%94%80%E6%9E%9D%E8%8A%B1%E6%A1%83%E5%AD%90%E6%BB%9E%E9%94%80%E7%83%82%E5%9C%A8%E5%9C%B0%E9%87%8C%E6%98%AF%E8%B0%A3%E8%A8%80%23) `455.0K 🔥` `NEW`
1. [武契奇到访长城](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A5%91%E5%A5%87%E5%88%B0%E8%AE%BF%E9%95%BF%E5%9F%8E%23) `451.8K 🔥` `NEW`
1. [王欣瑜法网开门红](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AC%A3%E7%91%9C%E6%B3%95%E7%BD%91%E5%BC%80%E9%97%A8%E7%BA%A2%23) `448.1K 🔥` `NEW`
1. [死了么APP又改名了](https://s.weibo.com/weibo?q=%23%E6%AD%BB%E4%BA%86%E4%B9%88APP%E5%8F%88%E6%94%B9%E5%90%8D%E4%BA%86%23) `442.0K 🔥` `NEW`
1. [浪姐 辱追](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%20%E8%BE%B1%E8%BF%BD%23) `439.7K 🔥` `NEW`
1. [迪丽热巴在我边上做头发](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%9C%A8%E6%88%91%E8%BE%B9%E4%B8%8A%E5%81%9A%E5%A4%B4%E5%8F%91%23) `436.5K 🔥` `NEW`
1. [宝莲呼声](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E8%8E%B2%E5%91%BC%E5%A3%B0%23) `435.1K 🔥` `NEW`
1. [姚冠宇转场是瑷尔博士](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E5%86%A0%E5%AE%87%E8%BD%AC%E5%9C%BA%E6%98%AF%E7%91%B7%E5%B0%94%E5%8D%9A%E5%A3%AB%23) `425.2K 🔥` `NEW`
1. [内娱最有名的七字真言](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E6%9C%80%E6%9C%89%E5%90%8D%E7%9A%84%E4%B8%83%E5%AD%97%E7%9C%9F%E8%A8%80%23) `418.6K 🔥` `NEW`
1. [李连杰回应换年轻武僧心脏 (Jet Li responded by changing the heart of a young warrior monk)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%BF%9E%E6%9D%B0%E5%9B%9E%E5%BA%94%E6%8D%A2%E5%B9%B4%E8%BD%BB%E6%AD%A6%E5%83%A7%E5%BF%83%E8%84%8F%23) `408.0K 🔥` `NEW`
1. [男子吃野生石斑鱼籽中毒尚无解药](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%90%83%E9%87%8E%E7%94%9F%E7%9F%B3%E6%96%91%E9%B1%BC%E7%B1%BD%E4%B8%AD%E6%AF%92%E5%B0%9A%E6%97%A0%E8%A7%A3%E8%8D%AF%23) `406.3K 🔥` `NEW`
1. [神23出征仪式](https://s.weibo.com/weibo?q=%23%E7%A5%9E23%E5%87%BA%E5%BE%81%E4%BB%AA%E5%BC%8F%23) `404.5K 🔥` `NEW`
1. [假如我是王鹤棣工作室](https://s.weibo.com/weibo?q=%23%E5%81%87%E5%A6%82%E6%88%91%E6%98%AF%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%B7%A5%E4%BD%9C%E5%AE%A4%23) `401.1K 🔥` `NEW`
1. [杨紫直播](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%9B%B4%E6%92%AD%23) `400.7K 🔥` `NEW`
1. [张月团萧蔷团pk](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E5%9B%A2%E8%90%A7%E8%94%B7%E5%9B%A2pk%23) `395.0K 🔥` `NEW`
1. [何洁秒了](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B4%81%E7%A7%92%E4%BA%86%23) `393.7K 🔥` `NEW`
1. [留神峪煤矿工人说自己是外包的](https://s.weibo.com/weibo?q=%23%E7%95%99%E7%A5%9E%E5%B3%AA%E7%85%A4%E7%9F%BF%E5%B7%A5%E4%BA%BA%E8%AF%B4%E8%87%AA%E5%B7%B1%E6%98%AF%E5%A4%96%E5%8C%85%E7%9A%84%23) `390.4K 🔥` `NEW`
1. [WBG对战LGD](https://s.weibo.com/weibo?q=%23WBG%E5%AF%B9%E6%88%98LGD%23) `384.7K 🔥` `NEW`
1. [宁艺卓吉赛尔脐钉](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E5%90%89%E8%B5%9B%E5%B0%94%E8%84%90%E9%92%89%23) `374.5K 🔥` `NEW`
1. [母亲将有暗伤枇杷装箱男子整箱倒掉 (The mother packed the loquats with hidden injuries and dumped them out of the man's box)](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E5%B0%86%E6%9C%89%E6%9A%97%E4%BC%A4%E6%9E%87%E6%9D%B7%E8%A3%85%E7%AE%B1%E7%94%B7%E5%AD%90%E6%95%B4%E7%AE%B1%E5%80%92%E6%8E%89%23) `368.7K 🔥` `NEW`
1. [浪姐直播](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%23) `1.4M 🔥` `+203%`
1. [张予曦的讨厌真的很明显](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%88%E6%9B%A6%E7%9A%84%E8%AE%A8%E5%8E%8C%E7%9C%9F%E7%9A%84%E5%BE%88%E6%98%8E%E6%98%BE%23) `586.4K 🔥` `+41%`
1. [14省区市大到暴雨 (Heavy rains hit 14 provinces, autonomous regions and cities)](https://s.weibo.com/weibo?q=%2314%E7%9C%81%E5%8C%BA%E5%B8%82%E5%A4%A7%E5%88%B0%E6%9A%B4%E9%9B%A8%23) `679.4K 🔥`
1. [燃油车被时代抛弃了吗](https://s.weibo.com/weibo?q=%23%E7%87%83%E6%B2%B9%E8%BD%A6%E8%A2%AB%E6%97%B6%E4%BB%A3%E6%8A%9B%E5%BC%83%E4%BA%86%E5%90%97%23) `454.7K 🔥`
1. [俄确认使用榛树打击乌克兰](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%A1%AE%E8%AE%A4%E4%BD%BF%E7%94%A8%E6%A6%9B%E6%A0%91%E6%89%93%E5%87%BB%E4%B9%8C%E5%85%8B%E5%85%B0%23) `450.2K 🔥`
1. [王鹤棣曾让沈月吸二手烟](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%9B%BE%E8%AE%A9%E6%B2%88%E6%9C%88%E5%90%B8%E4%BA%8C%E6%89%8B%E7%83%9F%23) `442.4K 🔥`
1. [将门独后台词 你只是谢景行而已](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E5%8F%B0%E8%AF%8D%20%E4%BD%A0%E5%8F%AA%E6%98%AF%E8%B0%A2%E6%99%AF%E8%A1%8C%E8%80%8C%E5%B7%B2%23) `432.5K 🔥`
1. [机建燃油费](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%BB%BA%E7%87%83%E6%B2%B9%E8%B4%B9%23) `429.5K 🔥`
1. [68岁男子出轨90后生子称妻子同意](https://s.weibo.com/weibo?q=%2368%E5%B2%81%E7%94%B7%E5%AD%90%E5%87%BA%E8%BD%A890%E5%90%8E%E7%94%9F%E5%AD%90%E7%A7%B0%E5%A6%BB%E5%AD%90%E5%90%8C%E6%84%8F%23) `427.7K 🔥`
1. [卢昱晓线下活动被吐槽](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E7%BA%BF%E4%B8%8B%E6%B4%BB%E5%8A%A8%E8%A2%AB%E5%90%90%E6%A7%BD%23) `424.4K 🔥`
1. [巴西男子强奸女儿及其所生外孙女 (Brazilian man raped daughter and granddaughter)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E7%94%B7%E5%AD%90%E5%BC%BA%E5%A5%B8%E5%A5%B3%E5%84%BF%E5%8F%8A%E5%85%B6%E6%89%80%E7%94%9F%E5%A4%96%E5%AD%99%E5%A5%B3%23) `421.6K 🔥`
1. [一看就是块学数学的料 (At first glance, he seems to be a material for studying mathematics.)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9C%8B%E5%B0%B1%E6%98%AF%E5%9D%97%E5%AD%A6%E6%95%B0%E5%AD%A6%E7%9A%84%E6%96%99%23) `416.6K 🔥`
1. [李晨郑恺跑男停宣了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%A8%E9%83%91%E6%81%BA%E8%B7%91%E7%94%B7%E5%81%9C%E5%AE%A3%E4%BA%86%23) `414.7K 🔥`
1. [王楚然高反是睡着了还是晕了 (Did Wang Churan fall asleep or faint?)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E9%AB%98%E5%8F%8D%E6%98%AF%E7%9D%A1%E7%9D%80%E4%BA%86%E8%BF%98%E6%98%AF%E6%99%95%E4%BA%86%23) `413.2K 🔥`
1. [AG](https://s.weibo.com/weibo?q=%23AG%23) `411.7K 🔥`
1. [姜乘澜关于贴双眼皮贴的小分享](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E4%B9%98%E6%BE%9C%E5%85%B3%E4%BA%8E%E8%B4%B4%E5%8F%8C%E7%9C%BC%E7%9A%AE%E8%B4%B4%E7%9A%84%E5%B0%8F%E5%88%86%E4%BA%AB%23) `397.4K 🔥`
1. [以爱为营 (Camp with love)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E7%88%B1%E4%B8%BA%E8%90%A5%23) `388.8K 🔥`
1. [林一 人永远不知道谁会旺你](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%B8%80%20%E4%BA%BA%E6%B0%B8%E8%BF%9C%E4%B8%8D%E7%9F%A5%E9%81%93%E8%B0%81%E4%BC%9A%E6%97%BA%E4%BD%A0%23) `387.9K 🔥`
1. [煤矿爆炸时247人下井仅记录124人 (When the coal mine exploded, 247 people went down and only 124 were recorded.)](https://s.weibo.com/weibo?q=%23%E7%85%A4%E7%9F%BF%E7%88%86%E7%82%B8%E6%97%B6247%E4%BA%BA%E4%B8%8B%E4%BA%95%E4%BB%85%E8%AE%B0%E5%BD%95124%E4%BA%BA%23) `381.5K 🔥`
1. [不舒服文学下沉出圈](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%88%92%E6%9C%8D%E6%96%87%E5%AD%A6%E4%B8%8B%E6%B2%89%E5%87%BA%E5%9C%88%23) `380.9K 🔥`
1. [仙逆](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%23) `379.2K 🔥`
1. [苗苗转发李晨郑恺跑男停宣](https://s.weibo.com/weibo?q=%23%E8%8B%97%E8%8B%97%E8%BD%AC%E5%8F%91%E6%9D%8E%E6%99%A8%E9%83%91%E6%81%BA%E8%B7%91%E7%94%B7%E5%81%9C%E5%AE%A3%23) `376.5K 🔥`
1. [小猫等了28年终于被收养了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E7%AD%89%E4%BA%8628%E5%B9%B4%E7%BB%88%E4%BA%8E%E8%A2%AB%E6%94%B6%E5%85%BB%E4%BA%86%23) `372.1K 🔥`
1. [借账户炒股19年不赚反亏476万元](https://s.weibo.com/weibo?q=%23%E5%80%9F%E8%B4%A6%E6%88%B7%E7%82%92%E8%82%A119%E5%B9%B4%E4%B8%8D%E8%B5%9A%E5%8F%8D%E4%BA%8F476%E4%B8%87%E5%85%83%23) `368.3K 🔥`
1. [主角 (main character)](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `365.1K 🔥`
1. [最后他的脸型居然被完全复制了](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%90%8E%E4%BB%96%E7%9A%84%E8%84%B8%E5%9E%8B%E5%B1%85%E7%84%B6%E8%A2%AB%E5%AE%8C%E5%85%A8%E5%A4%8D%E5%88%B6%E4%BA%86%23) `364.1K 🔥`
1. [法网 (French Open)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E7%BD%91%23) `360.9K 🔥`
1. [武汉停课停业](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E5%81%9C%E8%AF%BE%E5%81%9C%E4%B8%9A%23) `903.1K 🔥` `-23%`
1. [煤矿19点半爆炸工人22点才被通知](https://s.weibo.com/weibo?q=%23%E7%85%A4%E7%9F%BF19%E7%82%B9%E5%8D%8A%E7%88%86%E7%82%B8%E5%B7%A5%E4%BA%BA22%E7%82%B9%E6%89%8D%E8%A2%AB%E9%80%9A%E7%9F%A5%23) `547.2K 🔥` `-39%`
1. [苗苗也不舒服了](https://s.weibo.com/weibo?q=%23%E8%8B%97%E8%8B%97%E4%B9%9F%E4%B8%8D%E8%88%92%E6%9C%8D%E4%BA%86%23) `445.9K 🔥` `-96%`

Updated at 2026-05-24 20:47:32

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
