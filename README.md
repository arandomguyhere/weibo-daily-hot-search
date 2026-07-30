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

1. [曝C罗将结婚 (It is revealed that Ronaldo will get married)](https://s.weibo.com/weibo?q=%23%E6%9B%9DC%E7%BD%97%E5%B0%86%E7%BB%93%E5%A9%9A%23) `1.1M 🔥` `NEW`
1. [我国再次发射一箭双星](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%86%8D%E6%AC%A1%E5%8F%91%E5%B0%84%E4%B8%80%E7%AE%AD%E5%8F%8C%E6%98%9F%23) `1.0M 🔥` `NEW`
1. [影响上亿女性的病更名了](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E5%93%8D%E4%B8%8A%E4%BA%BF%E5%A5%B3%E6%80%A7%E7%9A%84%E7%97%85%E6%9B%B4%E5%90%8D%E4%BA%86%23) `981.7K 🔥` `NEW`
1. [九门首播4集共49个广](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E9%A6%96%E6%92%AD4%E9%9B%86%E5%85%B149%E4%B8%AA%E5%B9%BF%23) `916.8K 🔥` `NEW`
1. [神州租车 大品牌 放心租](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E5%B7%9E%E7%A7%9F%E8%BD%A6%20%E5%A4%A7%E5%93%81%E7%89%8C%20%E6%94%BE%E5%BF%83%E7%A7%9F%23) `843.8K 🔥` `NEW`
1. [解放军两次警告日方不能自称海军](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E4%B8%A4%E6%AC%A1%E8%AD%A6%E5%91%8A%E6%97%A5%E6%96%B9%E4%B8%8D%E8%83%BD%E8%87%AA%E7%A7%B0%E6%B5%B7%E5%86%9B%23) `388.8K 🔥` `NEW`
1. [尹新月 出戏](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E6%96%B0%E6%9C%88%20%E5%87%BA%E6%88%8F%23) `387.4K 🔥` `NEW`
1. [陈伟霆赵丽颖cp感](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E8%B5%B5%E4%B8%BD%E9%A2%96cp%E6%84%9F%23) `384.4K 🔥` `NEW`
1. [白鹿回复猫的树](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%9B%9E%E5%A4%8D%E7%8C%AB%E7%9A%84%E6%A0%91%23) `378.6K 🔥` `NEW`
1. [雷军同款项链仅售8.8元](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%90%8C%E6%AC%BE%E9%A1%B9%E9%93%BE%E4%BB%85%E5%94%AE8.8%E5%85%83%23) `377.9K 🔥` `NEW`
1. [AI 焚书 (AI book burning)](https://s.weibo.com/weibo?q=%23AI%20%E7%84%9A%E4%B9%A6%23) `370.2K 🔥` `NEW`
1. [尹新月 赵丽颖](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E6%96%B0%E6%9C%88%20%E8%B5%B5%E4%B8%BD%E9%A2%96%23) `368.2K 🔥` `NEW`
1. [台风白海豚](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%23) `364.3K 🔥` `NEW`
1. [女儿把离异妈妈培养成网红](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E6%8A%8A%E7%A6%BB%E5%BC%82%E5%A6%88%E5%A6%88%E5%9F%B9%E5%85%BB%E6%88%90%E7%BD%91%E7%BA%A2%23) `361.6K 🔥` `NEW`
1. [粉丝买了杨幂摸过的蛇](https://s.weibo.com/weibo?q=%23%E7%B2%89%E4%B8%9D%E4%B9%B0%E4%BA%86%E6%9D%A8%E5%B9%82%E6%91%B8%E8%BF%87%E7%9A%84%E8%9B%87%23) `359.9K 🔥` `NEW`
1. [AG对战JDG](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98JDG%23) `358.8K 🔥` `NEW`
1. [陕西文旅回应遭伪史论者持续骚扰](https://s.weibo.com/weibo?q=%23%E9%99%95%E8%A5%BF%E6%96%87%E6%97%85%E5%9B%9E%E5%BA%94%E9%81%AD%E4%BC%AA%E5%8F%B2%E8%AE%BA%E8%80%85%E6%8C%81%E7%BB%AD%E9%AA%9A%E6%89%B0%23) `355.2K 🔥` `NEW`
1. [台媒曝林志玲被人举报违反铁路法](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E5%AA%92%E6%9B%9D%E6%9E%97%E5%BF%97%E7%8E%B2%E8%A2%AB%E4%BA%BA%E4%B8%BE%E6%8A%A5%E8%BF%9D%E5%8F%8D%E9%93%81%E8%B7%AF%E6%B3%95%23) `355.1K 🔥` `NEW`
1. [曾沛慈宝莲组川西之旅合照](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%AE%9D%E8%8E%B2%E7%BB%84%E5%B7%9D%E8%A5%BF%E4%B9%8B%E6%97%85%E5%90%88%E7%85%A7%23) `352.7K 🔥` `NEW`
1. [刘亦菲旗袍](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E6%97%97%E8%A2%8D%23) `339.0K 🔥` `NEW`
1. [男子玩手机腿被熊咬了2口仍无察觉 (Man was bitten twice on the leg by a bear while playing with mobile phone but still didn't notice)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%8E%A9%E6%89%8B%E6%9C%BA%E8%85%BF%E8%A2%AB%E7%86%8A%E5%92%AC%E4%BA%862%E5%8F%A3%E4%BB%8D%E6%97%A0%E5%AF%9F%E8%A7%89%23) `338.3K 🔥` `NEW`
1. [男子亮军官证向民警施压寻前妻](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%BA%AE%E5%86%9B%E5%AE%98%E8%AF%81%E5%90%91%E6%B0%91%E8%AD%A6%E6%96%BD%E5%8E%8B%E5%AF%BB%E5%89%8D%E5%A6%BB%23) `338.2K 🔥` `NEW`
1. [GR对战FPX.ZQ](https://s.weibo.com/weibo?q=%23GR%E5%AF%B9%E6%88%98FPX.ZQ%23) `338.2K 🔥` `NEW`
1. [曝TF四代一班二班没有变化](https://s.weibo.com/weibo?q=%23%E6%9B%9DTF%E5%9B%9B%E4%BB%A3%E4%B8%80%E7%8F%AD%E4%BA%8C%E7%8F%AD%E6%B2%A1%E6%9C%89%E5%8F%98%E5%8C%96%23) `310.7K 🔥` `NEW`
1. [王一博脖子色差](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%84%96%E5%AD%90%E8%89%B2%E5%B7%AE%23) `310.0K 🔥` `NEW`
1. [网民称唐朝不存在致电骚扰陕西文旅](https://s.weibo.com/weibo?q=%23%E7%BD%91%E6%B0%91%E7%A7%B0%E5%94%90%E6%9C%9D%E4%B8%8D%E5%AD%98%E5%9C%A8%E8%87%B4%E7%94%B5%E9%AA%9A%E6%89%B0%E9%99%95%E8%A5%BF%E6%96%87%E6%97%85%23) `290.5K 🔥` `NEW`
1. [冯提莫自曝没长高的原因](https://s.weibo.com/weibo?q=%23%E5%86%AF%E6%8F%90%E8%8E%AB%E8%87%AA%E6%9B%9D%E6%B2%A1%E9%95%BF%E9%AB%98%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `287.4K 🔥` `NEW`
1. [张雅琪接连两档综艺出现同类疏漏](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E6%8E%A5%E8%BF%9E%E4%B8%A4%E6%A1%A3%E7%BB%BC%E8%89%BA%E5%87%BA%E7%8E%B0%E5%90%8C%E7%B1%BB%E7%96%8F%E6%BC%8F%23) `237.2K 🔥` `NEW`
1. [韩国人迷上点假外卖](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E4%BA%BA%E8%BF%B7%E4%B8%8A%E7%82%B9%E5%81%87%E5%A4%96%E5%8D%96%23) `219.8K 🔥` `NEW`
1. [78岁老人体内取出1200颗结石](https://s.weibo.com/weibo?q=%2378%E5%B2%81%E8%80%81%E4%BA%BA%E4%BD%93%E5%86%85%E5%8F%96%E5%87%BA1200%E9%A2%97%E7%BB%93%E7%9F%B3%23) `207.8K 🔥` `NEW`
1. [国产剧终于尊重观众的智商了 (Domestic dramas finally respect the audience’s IQ)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BA%A7%E5%89%A7%E7%BB%88%E4%BA%8E%E5%B0%8A%E9%87%8D%E8%A7%82%E4%BC%97%E7%9A%84%E6%99%BA%E5%95%86%E4%BA%86%23) `207.4K 🔥` `NEW`
1. [韦雪后悔整容](https://s.weibo.com/weibo?q=%23%E9%9F%A6%E9%9B%AA%E5%90%8E%E6%82%94%E6%95%B4%E5%AE%B9%23) `207.1K 🔥` `NEW`
1. [王楚钦周启豪1比2林诗栋赵钊彦](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%91%A8%E5%90%AF%E8%B1%AA1%E6%AF%942%E6%9E%97%E8%AF%97%E6%A0%8B%E8%B5%B5%E9%92%8A%E5%BD%A6%23) `196.9K 🔥` `NEW`
1. [广西洪灾失联水库员工已找到](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%B4%AA%E7%81%BE%E5%A4%B1%E8%81%94%E6%B0%B4%E5%BA%93%E5%91%98%E5%B7%A5%E5%B7%B2%E6%89%BE%E5%88%B0%23) `191.7K 🔥` `NEW`
1. [李飞问朱志鑫有什么小名](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%A3%9E%E9%97%AE%E6%9C%B1%E5%BF%97%E9%91%AB%E6%9C%89%E4%BB%80%E4%B9%88%E5%B0%8F%E5%90%8D%23) `188.1K 🔥` `NEW`
1. [陈伟霆身材太好了](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E8%BA%AB%E6%9D%90%E5%A4%AA%E5%A5%BD%E4%BA%86%23) `169.9K 🔥` `NEW`
1. [给吊带一剪刀你就会得到](https://s.weibo.com/weibo?q=%23%E7%BB%99%E5%90%8A%E5%B8%A6%E4%B8%80%E5%89%AA%E5%88%80%E4%BD%A0%E5%B0%B1%E4%BC%9A%E5%BE%97%E5%88%B0%23) `153.4K 🔥` `NEW`
1. [马斯克批评Anthropic切书脊](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E6%89%B9%E8%AF%84Anthropic%E5%88%87%E4%B9%A6%E8%84%8A%23) `150.6K 🔥` `NEW`
1. [拥有24h内洗澡证明的人才能出门](https://s.weibo.com/weibo?q=%23%E6%8B%A5%E6%9C%8924h%E5%86%85%E6%B4%97%E6%BE%A1%E8%AF%81%E6%98%8E%E7%9A%84%E4%BA%BA%E6%89%8D%E8%83%BD%E5%87%BA%E9%97%A8%23) `951.2K 🔥` `+197%`
1. [尹新月配音没换](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E6%96%B0%E6%9C%88%E9%85%8D%E9%9F%B3%E6%B2%A1%E6%8D%A2%23) `393.0K 🔥` `+22%`
1. [A股市值前10红了9个 (9 of the top 10 A-share stocks by market value are in the red)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%B8%82%E5%80%BC%E5%89%8D10%E7%BA%A2%E4%BA%869%E4%B8%AA%23) `1.1M 🔥`
1. [第一次看到母亲的收入 (Seeing my mother’s income for the first time)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%9C%8B%E5%88%B0%E6%AF%8D%E4%BA%B2%E7%9A%84%E6%94%B6%E5%85%A5%23) `382.4K 🔥`
1. [九门 (nine gates)](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%23) `373.6K 🔥`
1. [吴谨言和前夫哥三搭了](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%B0%A8%E8%A8%80%E5%92%8C%E5%89%8D%E5%A4%AB%E5%93%A5%E4%B8%89%E6%90%AD%E4%BA%86%23) `395.4K 🔥` `-36%`
1. [不建议大家买深色蛋糕](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E4%B9%B0%E6%B7%B1%E8%89%B2%E8%9B%8B%E7%B3%95%23) `395.4K 🔥` `-39%`
1. [退休后旅游根本没有意义](https://s.weibo.com/weibo?q=%23%E9%80%80%E4%BC%91%E5%90%8E%E6%97%85%E6%B8%B8%E6%A0%B9%E6%9C%AC%E6%B2%A1%E6%9C%89%E6%84%8F%E4%B9%89%23) `371.9K 🔥` `-44%`
1. [这私房菜有点太私房了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%A7%81%E6%88%BF%E8%8F%9C%E6%9C%89%E7%82%B9%E5%A4%AA%E7%A7%81%E6%88%BF%E4%BA%86%23) `343.5K 🔥` `-46%`
1. [宁艺卓Gucci黑长直](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93Gucci%E9%BB%91%E9%95%BF%E7%9B%B4%23) `177.8K 🔥` `-46%`
1. [30岁小伙负债170万卖饺子翻身](https://s.weibo.com/weibo?q=%2330%E5%B2%81%E5%B0%8F%E4%BC%99%E8%B4%9F%E5%80%BA170%E4%B8%87%E5%8D%96%E9%A5%BA%E5%AD%90%E7%BF%BB%E8%BA%AB%23) `173.9K 🔥` `-68%`
1. [白鹿周翊然透明爱人MV亲了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%91%A8%E7%BF%8A%E7%84%B6%E9%80%8F%E6%98%8E%E7%88%B1%E4%BA%BAMV%E4%BA%B2%E4%BA%86%23) `168.9K 🔥` `-58%`

Updated at 2026-07-30 16:49:02

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
