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

1. [无畏契约直播 (Fearless Contract Live)](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E5%A5%91%E7%BA%A6%E7%9B%B4%E6%92%AD%23) `370.2K 🔥` `NEW`
1. [刘宇说你喝到AI请客的奶茶了吗](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E8%AF%B4%E4%BD%A0%E5%96%9D%E5%88%B0AI%E8%AF%B7%E5%AE%A2%E7%9A%84%E5%A5%B6%E8%8C%B6%E4%BA%86%E5%90%97%23) `314.8K 🔥` `NEW`
1. [张凌赫 电竞男主](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%20%E7%94%B5%E7%AB%9E%E7%94%B7%E4%B8%BB%23) `168.5K 🔥` `NEW`
1. [向太说郭碧婷从没开口要过东西](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E8%AF%B4%E9%83%AD%E7%A2%A7%E5%A9%B7%E4%BB%8E%E6%B2%A1%E5%BC%80%E5%8F%A3%E8%A6%81%E8%BF%87%E4%B8%9C%E8%A5%BF%23) `144.1K 🔥` `NEW`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `139.2K 🔥` `NEW`
1. [成何体统 好看](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%20%E5%A5%BD%E7%9C%8B%23) `133.7K 🔥` `NEW`
1. [QQ音乐超级巅峰之夜抢票](https://s.weibo.com/weibo?q=%23QQ%E9%9F%B3%E4%B9%90%E8%B6%85%E7%BA%A7%E5%B7%85%E5%B3%B0%E4%B9%8B%E5%A4%9C%E6%8A%A2%E7%A5%A8%23) `108.5K 🔥` `NEW`
1. [网红少年被男子发不实淫秽信息侵害](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E5%B0%91%E5%B9%B4%E8%A2%AB%E7%94%B7%E5%AD%90%E5%8F%91%E4%B8%8D%E5%AE%9E%E6%B7%AB%E7%A7%BD%E4%BF%A1%E6%81%AF%E4%BE%B5%E5%AE%B3%23) `102.8K 🔥` `NEW`
1. [没领证男子去世遭索18万彩礼女方发声](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E9%A2%86%E8%AF%81%E7%94%B7%E5%AD%90%E5%8E%BB%E4%B8%96%E9%81%AD%E7%B4%A218%E4%B8%87%E5%BD%A9%E7%A4%BC%E5%A5%B3%E6%96%B9%E5%8F%91%E5%A3%B0%23) `101.4K 🔥` `NEW`
1. [40平房子住出100平的感觉](https://s.weibo.com/weibo?q=%2340%E5%B9%B3%E6%88%BF%E5%AD%90%E4%BD%8F%E5%87%BA100%E5%B9%B3%E7%9A%84%E6%84%9F%E8%A7%89%23) `87.2K 🔥` `NEW`
1. [婚礼排练的时候没人拦一下吗 (Didn't anyone stop me during the wedding rehearsal?)](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E7%A4%BC%E6%8E%92%E7%BB%83%E7%9A%84%E6%97%B6%E5%80%99%E6%B2%A1%E4%BA%BA%E6%8B%A6%E4%B8%80%E4%B8%8B%E5%90%97%23) `81.5K 🔥` `NEW`
1. [白菊邵云飞接吻变磕头](https://s.weibo.com/weibo?q=%23%E7%99%BD%E8%8F%8A%E9%82%B5%E4%BA%91%E9%A3%9E%E6%8E%A5%E5%90%BB%E5%8F%98%E7%A3%95%E5%A4%B4%23) `79.2K 🔥` `NEW`
1. [TFING回应时代峰峻在微博之夜开会](https://s.weibo.com/weibo?q=%23TFING%E5%9B%9E%E5%BA%94%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%9C%A8%E5%BE%AE%E5%8D%9A%E4%B9%8B%E5%A4%9C%E5%BC%80%E4%BC%9A%23) `77.9K 🔥` `NEW`
1. [鲁迅从百草园杀到三味书屋](https://s.weibo.com/weibo?q=%23%E9%B2%81%E8%BF%85%E4%BB%8E%E7%99%BE%E8%8D%89%E5%9B%AD%E6%9D%80%E5%88%B0%E4%B8%89%E5%91%B3%E4%B9%A6%E5%B1%8B%23) `76.9K 🔥` `NEW`
1. [王曼昱孙颖莎争冠](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%AD%99%E9%A2%96%E8%8E%8E%E4%BA%89%E5%86%A0%23) `75.5K 🔥` `NEW`
1. [伊朗若遭美袭击将攻击美军基地](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%8B%A5%E9%81%AD%E7%BE%8E%E8%A2%AD%E5%87%BB%E5%B0%86%E6%94%BB%E5%87%BB%E7%BE%8E%E5%86%9B%E5%9F%BA%E5%9C%B0%23) `74.6K 🔥` `NEW`
1. [时代峰峻的年会在马场](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E7%9A%84%E5%B9%B4%E4%BC%9A%E5%9C%A8%E9%A9%AC%E5%9C%BA%23) `71.0K 🔥` `NEW`
1. [小猫出去就是为了进来](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E5%87%BA%E5%8E%BB%E5%B0%B1%E6%98%AF%E4%B8%BA%E4%BA%86%E8%BF%9B%E6%9D%A5%23) `70.0K 🔥` `NEW`
1. [女子吐槽飞机餐仅一根青菜配米饭](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%90%90%E6%A7%BD%E9%A3%9E%E6%9C%BA%E9%A4%90%E4%BB%85%E4%B8%80%E6%A0%B9%E9%9D%92%E8%8F%9C%E9%85%8D%E7%B1%B3%E9%A5%AD%23) `800.7K 🔥` `+186%`
1. [爸爸弯了一辈子的腰终于断了](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%BC%AF%E4%BA%86%E4%B8%80%E8%BE%88%E5%AD%90%E7%9A%84%E8%85%B0%E7%BB%88%E4%BA%8E%E6%96%AD%E4%BA%86%23) `344.9K 🔥` `+220%`
1. [张本智和vs户上隼辅 (Tomokazu Hari vs. Hayasuke Togami)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8Cvs%E6%88%B7%E4%B8%8A%E9%9A%BC%E8%BE%85%23) `206.3K 🔥` `+28%`
1. [美团外卖周末半价吃大餐](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%A2%E5%A4%96%E5%8D%96%E5%91%A8%E6%9C%AB%E5%8D%8A%E4%BB%B7%E5%90%83%E5%A4%A7%E9%A4%90%23) `582.8K 🔥`
1. [丁真劝向佐退圈](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%9C%9F%E5%8A%9D%E5%90%91%E4%BD%90%E9%80%80%E5%9C%88%23) `473.7K 🔥`
1. [全球第四大汽车巨头爆雷](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E7%AC%AC%E5%9B%9B%E5%A4%A7%E6%B1%BD%E8%BD%A6%E5%B7%A8%E5%A4%B4%E7%88%86%E9%9B%B7%23) `172.6K 🔥`
1. [邓超忘给孙俪准备16年纪念日的礼物](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E5%BF%98%E7%BB%99%E5%AD%99%E4%BF%AA%E5%87%86%E5%A4%8716%E5%B9%B4%E7%BA%AA%E5%BF%B5%E6%97%A5%E7%9A%84%E7%A4%BC%E7%89%A9%23) `171.7K 🔥`
1. [千问 (Qianwen)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%23) `171.4K 🔥`
1. [爱泼斯坦在巴黎红房间拍下女孩跳舞](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E5%9C%A8%E5%B7%B4%E9%BB%8E%E7%BA%A2%E6%88%BF%E9%97%B4%E6%8B%8D%E4%B8%8B%E5%A5%B3%E5%AD%A9%E8%B7%B3%E8%88%9E%23) `170.1K 🔥`
1. [梁源发文怼吴克群](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%BA%90%E5%8F%91%E6%96%87%E6%80%BC%E5%90%B4%E5%85%8B%E7%BE%A4%23) `167.9K 🔥`
1. [老一辈对子女睡懒觉的执念](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%B8%80%E8%BE%88%E5%AF%B9%E5%AD%90%E5%A5%B3%E7%9D%A1%E6%87%92%E8%A7%89%E7%9A%84%E6%89%A7%E5%BF%B5%23) `166.5K 🔥`
1. [白鹿发开播红包](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8F%91%E5%BC%80%E6%92%AD%E7%BA%A2%E5%8C%85%23) `165.1K 🔥`
1. [断联一年的闺蜜突然发消息](https://s.weibo.com/weibo?q=%23%E6%96%AD%E8%81%94%E4%B8%80%E5%B9%B4%E7%9A%84%E9%97%BA%E8%9C%9C%E7%AA%81%E7%84%B6%E5%8F%91%E6%B6%88%E6%81%AF%23) `134.9K 🔥`
1. [华晨宇脖子上的唇印 (Lip prints on Hua Chenyu’s neck)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E8%84%96%E5%AD%90%E4%B8%8A%E7%9A%84%E5%94%87%E5%8D%B0%23) `134.8K 🔥`
1. [韩国运动员盒饭 (Korean athlete lunch box)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%BF%90%E5%8A%A8%E5%91%98%E7%9B%92%E9%A5%AD%23) `103.5K 🔥`
1. [华东政法大学学生起诉微信收提现费 (East China University of Political Science and Law students sue WeChat for charging cash withdrawal fees)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%9C%E6%94%BF%E6%B3%95%E5%A4%A7%E5%AD%A6%E5%AD%A6%E7%94%9F%E8%B5%B7%E8%AF%89%E5%BE%AE%E4%BF%A1%E6%94%B6%E6%8F%90%E7%8E%B0%E8%B4%B9%23) `103.0K 🔥`
1. [王曼昱4比2战胜张本美和](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B14%E6%AF%942%E6%88%98%E8%83%9C%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `87.3K 🔥`
1. [小马糕 (pony cake)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%A9%AC%E7%B3%95%23) `71.2K 🔥`
1. [四川地震 (Sichuan earthquake)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%9C%B0%E9%9C%87%23) `1.1M 🔥` `-60%`
1. [窗里窗外皆是归途的美好](https://s.weibo.com/weibo?q=%23%E7%AA%97%E9%87%8C%E7%AA%97%E5%A4%96%E7%9A%86%E6%98%AF%E5%BD%92%E9%80%94%E7%9A%84%E7%BE%8E%E5%A5%BD%23) `603.6K 🔥` `-28%`
1. [无畏契约](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E5%A5%91%E7%BA%A6%23) `313.9K 🔥` `-32%`
1. [成都震感](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E9%9C%87%E6%84%9F%23) `175.6K 🔥` `-83%`
1. [这才是真正的道歉](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%89%8D%E6%98%AF%E7%9C%9F%E6%AD%A3%E7%9A%84%E9%81%93%E6%AD%89%23) `164.7K 🔥` `-36%`
1. [爱吃柚子的人天塌了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%90%83%E6%9F%9A%E5%AD%90%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `125.4K 🔥` `-31%`
1. [李昀锐的桃花马在孟子义那](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E7%9A%84%E6%A1%83%E8%8A%B1%E9%A9%AC%E5%9C%A8%E5%AD%9F%E5%AD%90%E4%B9%89%E9%82%A3%23) `125.1K 🔥` `-36%`
1. [Bin腹肌对标Gala](https://s.weibo.com/weibo?q=%23Bin%E8%85%B9%E8%82%8C%E5%AF%B9%E6%A0%87Gala%23) `109.8K 🔥` `-29%`
1. [王楚钦男单争冠](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%94%B7%E5%8D%95%E4%BA%89%E5%86%A0%23) `109.3K 🔥` `-50%`
1. [苏翊鸣与金墩墩的热爱接力 (The relay of love between Su Yiming and Jin Dundun)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E4%B8%8E%E9%87%91%E5%A2%A9%E5%A2%A9%E7%9A%84%E7%83%AD%E7%88%B1%E6%8E%A5%E5%8A%9B%23) `103.1K 🔥` `-38%`
1. [吴克群帮农民卖掉3万斤菜 (Wu Kequn helps farmers sell 30,000 kilograms of vegetables)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%85%8B%E7%BE%A4%E5%B8%AE%E5%86%9C%E6%B0%91%E5%8D%96%E6%8E%893%E4%B8%87%E6%96%A4%E8%8F%9C%23) `101.3K 🔥` `-32%`
1. [谢依霖回应提问赵丽颖](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E4%BE%9D%E9%9C%96%E5%9B%9E%E5%BA%94%E6%8F%90%E9%97%AE%E8%B5%B5%E4%B8%BD%E9%A2%96%23) `94.7K 🔥` `-23%`
1. [坐直不是脊柱喜欢的完美姿势 (Sitting up straight is not the perfect position for your spine)](https://s.weibo.com/weibo?q=%23%E5%9D%90%E7%9B%B4%E4%B8%8D%E6%98%AF%E8%84%8A%E6%9F%B1%E5%96%9C%E6%AC%A2%E7%9A%84%E5%AE%8C%E7%BE%8E%E5%A7%BF%E5%8A%BF%23) `81.1K 🔥` `-29%`
1. [00后拜年方式](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E6%8B%9C%E5%B9%B4%E6%96%B9%E5%BC%8F%23) `73.3K 🔥` `-39%`
1. [演唱会背痛包 偶像比粉丝先认出对方](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%94%B1%E4%BC%9A%E8%83%8C%E7%97%9B%E5%8C%85%20%E5%81%B6%E5%83%8F%E6%AF%94%E7%B2%89%E4%B8%9D%E5%85%88%E8%AE%A4%E5%87%BA%E5%AF%B9%E6%96%B9%23) `72.4K 🔥` `-39%`
1. [王曼昱VS张本美和 (Wang Manyu VS Zhang Benmeihe)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1VS%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `72.2K 🔥` `-65%`

Updated at 2026-02-08 15:50:27

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
