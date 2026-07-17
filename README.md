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

1. [这一秒过火定档 (This second is too much.)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E5%AE%9A%E6%A1%A3%23) `1.2M 🔥` `NEW`
1. [上海进入AI时间](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E8%BF%9B%E5%85%A5AI%E6%97%B6%E9%97%B4%23) `929.2K 🔥` `NEW`
1. [歌手排名](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%23) `927.4K 🔥` `NEW`
1. [刘惜君一打三](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%83%9C%E5%90%9B%E4%B8%80%E6%89%93%E4%B8%89%23) `742.0K 🔥` `NEW`
1. [游泳这些误区千万别信](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E6%B3%B3%E8%BF%99%E4%BA%9B%E8%AF%AF%E5%8C%BA%E5%8D%83%E4%B8%87%E5%88%AB%E4%BF%A1%23) `602.3K 🔥` `NEW`
1. [JDG不敌GEN](https://s.weibo.com/weibo?q=%23JDG%E4%B8%8D%E6%95%8CGEN%23) `553.2K 🔥` `NEW`
1. [JYP女团成员Angelababy](https://s.weibo.com/weibo?q=%23JYP%E5%A5%B3%E5%9B%A2%E6%88%90%E5%91%98Angelababy%23) `552.4K 🔥` `NEW`
1. [张凌赫座驾阿维塔07L](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%BA%A7%E9%A9%BE%E9%98%BF%E7%BB%B4%E5%A1%9407L%23) `551.9K 🔥` `NEW`
1. [张远晋级](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%BF%9C%E6%99%8B%E7%BA%A7%23) `550.8K 🔥` `NEW`
1. [月亮](https://s.weibo.com/weibo?q=%23%E6%9C%88%E4%BA%AE%23) `550.1K 🔥` `NEW`
1. [歌手7进4 (Singer 7 into 4)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B7%E8%BF%9B4%23) `550.0K 🔥` `NEW`
1. [张凌赫发了52个火](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%8F%91%E4%BA%8652%E4%B8%AA%E7%81%AB%23) `549.8K 🔥` `NEW`
1. [AG对战KSG](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98KSG%23) `549.4K 🔥` `NEW`
1. [鹿晗的宣传总监觉得何瑞贤会爆红](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E7%9A%84%E5%AE%A3%E4%BC%A0%E6%80%BB%E7%9B%91%E8%A7%89%E5%BE%97%E4%BD%95%E7%91%9E%E8%B4%A4%E4%BC%9A%E7%88%86%E7%BA%A2%23) `548.8K 🔥` `NEW`
1. [任嘉伦 现在直接喊国超了吗](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%98%89%E4%BC%A6%20%E7%8E%B0%E5%9C%A8%E7%9B%B4%E6%8E%A5%E5%96%8A%E5%9B%BD%E8%B6%85%E4%BA%86%E5%90%97%23) `548.3K 🔥` `NEW`
1. [市监总局公告严管拼豆产品](https://s.weibo.com/weibo?q=%23%E5%B8%82%E7%9B%91%E6%80%BB%E5%B1%80%E5%85%AC%E5%91%8A%E4%B8%A5%E7%AE%A1%E6%8B%BC%E8%B1%86%E4%BA%A7%E5%93%81%23) `548.0K 🔥` `NEW`
1. [魏如萱晋级](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A6%82%E8%90%B1%E6%99%8B%E7%BA%A7%23) `547.0K 🔥` `NEW`
1. [王俊凯三开](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%B8%89%E5%BC%80%23) `546.9K 🔥` `NEW`
1. [A股年内最强无差别杀跌](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%B9%B4%E5%86%85%E6%9C%80%E5%BC%BA%E6%97%A0%E5%B7%AE%E5%88%AB%E6%9D%80%E8%B7%8C%23) `507.6K 🔥` `NEW`
1. [万妮达一开口就赢了](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%A6%AE%E8%BE%BE%E4%B8%80%E5%BC%80%E5%8F%A3%E5%B0%B1%E8%B5%A2%E4%BA%86%23) `494.7K 🔥` `NEW`
1. [刘惜君淘汰 (Liu Xijun eliminated)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%83%9C%E5%90%9B%E6%B7%98%E6%B1%B0%23) `382.2K 🔥` `NEW`
1. [张远 苦情歌的神](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%BF%9C%20%E8%8B%A6%E6%83%85%E6%AD%8C%E7%9A%84%E7%A5%9E%23) `359.8K 🔥` `NEW`
1. [HLE被T1淘汰](https://s.weibo.com/weibo?q=%23HLE%E8%A2%ABT1%E6%B7%98%E6%B1%B0%23) `247.1K 🔥` `NEW`
1. [高会版运动会周边](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%BC%9A%E7%89%88%E8%BF%90%E5%8A%A8%E4%BC%9A%E5%91%A8%E8%BE%B9%23) `246.2K 🔥` `NEW`
1. [重庆彭水山体垮塌致鞭炮仓库爆炸](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%BD%AD%E6%B0%B4%E5%B1%B1%E4%BD%93%E5%9E%AE%E5%A1%8C%E8%87%B4%E9%9E%AD%E7%82%AE%E4%BB%93%E5%BA%93%E7%88%86%E7%82%B8%23) `244.5K 🔥` `NEW`
1. [陈思罕攀岩](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%80%9D%E7%BD%95%E6%94%80%E5%B2%A9%23) `241.1K 🔥` `NEW`
1. [余宇涵运动会MVP](https://s.weibo.com/weibo?q=%23%E4%BD%99%E5%AE%87%E6%B6%B5%E8%BF%90%E5%8A%A8%E4%BC%9AMVP%23) `240.0K 🔥` `NEW`
1. [T1对战HLE](https://s.weibo.com/weibo?q=%23T1%E5%AF%B9%E6%88%98HLE%23) `238.6K 🔥` `NEW`
1. [五大行持有长鑫科技原始股](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%A4%A7%E8%A1%8C%E6%8C%81%E6%9C%89%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E5%8E%9F%E5%A7%8B%E8%82%A1%23) `236.9K 🔥` `NEW`
1. [阿维塔发布会](https://s.weibo.com/weibo?q=%23%E9%98%BF%E7%BB%B4%E5%A1%94%E5%8F%91%E5%B8%83%E4%BC%9A%23) `235.7K 🔥` `NEW`
1. [8类女性更容易患乳腺癌 (8 categories of women more likely to develop breast cancer)](https://s.weibo.com/weibo?q=%238%E7%B1%BB%E5%A5%B3%E6%80%A7%E6%9B%B4%E5%AE%B9%E6%98%93%E6%82%A3%E4%B9%B3%E8%85%BA%E7%99%8C%23) `234.6K 🔥` `NEW`
1. [时代少年团公告 丁程鑫受伤](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%85%AC%E5%91%8A%20%E4%B8%81%E7%A8%8B%E9%91%AB%E5%8F%97%E4%BC%A4%23) `551.0K 🔥` `+79%`
1. [男孩故意拉倒餐车卤水洒了一地](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E6%95%85%E6%84%8F%E6%8B%89%E5%80%92%E9%A4%90%E8%BD%A6%E5%8D%A4%E6%B0%B4%E6%B4%92%E4%BA%86%E4%B8%80%E5%9C%B0%23) `547.5K 🔥` `+108%`
1. [重庆彭水山体垮塌](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%BD%AD%E6%B0%B4%E5%B1%B1%E4%BD%93%E5%9E%AE%E5%A1%8C%23) `547.3K 🔥` `+124%`
1. [矮个子穿吊带容易走光](https://s.weibo.com/weibo?q=%23%E7%9F%AE%E4%B8%AA%E5%AD%90%E7%A9%BF%E5%90%8A%E5%B8%A6%E5%AE%B9%E6%98%93%E8%B5%B0%E5%85%89%23) `382.2K 🔥` `+24%`
1. [范丞丞椒巴客品牌全球代言人 (Fan Chengcheng, global spokesperson of Jiao Bake brand)](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E6%A4%92%E5%B7%B4%E5%AE%A2%E5%93%81%E7%89%8C%E5%85%A8%E7%90%83%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `928.4K 🔥`
1. [21岁女孩家中遇害凶手竟是亲生父亲](https://s.weibo.com/weibo?q=%2321%E5%B2%81%E5%A5%B3%E5%AD%A9%E5%AE%B6%E4%B8%AD%E9%81%87%E5%AE%B3%E5%87%B6%E6%89%8B%E7%AB%9F%E6%98%AF%E4%BA%B2%E7%94%9F%E7%88%B6%E4%BA%B2%23) `753.1K 🔥`
1. [歌手直播](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E7%9B%B4%E6%92%AD%23) `553.3K 🔥`
1. [发现好多人开空调抠抠搜搜的 (I found a lot of people turning on the air conditioner and fussing about it.)](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%A5%BD%E5%A4%9A%E4%BA%BA%E5%BC%80%E7%A9%BA%E8%B0%83%E6%8A%A0%E6%8A%A0%E6%90%9C%E6%90%9C%E7%9A%84%23) `552.9K 🔥`
1. [妙妙 医疗事故](https://s.weibo.com/weibo?q=%23%E5%A6%99%E5%A6%99%20%E5%8C%BB%E7%96%97%E4%BA%8B%E6%95%85%23) `552.1K 🔥`
1. [没有什么稳定的工作](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%9C%89%E4%BB%80%E4%B9%88%E7%A8%B3%E5%AE%9A%E7%9A%84%E5%B7%A5%E4%BD%9C%23) `551.2K 🔥`
1. [A股今天暴跌原因](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%BB%8A%E5%A4%A9%E6%9A%B4%E8%B7%8C%E5%8E%9F%E5%9B%A0%23) `550.5K 🔥`
1. [孙燕姿 曲婉婷 (Stefanie Sun Qu Wanting)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%87%95%E5%A7%BF%20%E6%9B%B2%E5%A9%89%E5%A9%B7%23) `549.3K 🔥`
1. [博主离世后被配阴婚](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E4%B8%BB%E7%A6%BB%E4%B8%96%E5%90%8E%E8%A2%AB%E9%85%8D%E9%98%B4%E5%A9%9A%23) `548.5K 🔥`
1. [阿根廷总统缺席世界杯决赛原因](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E6%80%BB%E7%BB%9F%E7%BC%BA%E5%B8%AD%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%E5%8E%9F%E5%9B%A0%23) `547.9K 🔥`
1. [王源易烊千玺给王俊凯送了花篮](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E7%BB%99%E7%8E%8B%E4%BF%8A%E5%87%AF%E9%80%81%E4%BA%86%E8%8A%B1%E7%AF%AE%23) `536.5K 🔥`
1. [穆祉丞摔陈浚铭怀里](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E6%91%94%E9%99%88%E6%B5%9A%E9%93%AD%E6%80%80%E9%87%8C%23) `444.4K 🔥`
1. [曲婉婷母亲贪污3.5亿元职工安置费 (Qu Wanting’s mother embezzled 350 million yuan in employee placement fees)](https://s.weibo.com/weibo?q=%23%E6%9B%B2%E5%A9%89%E5%A9%B7%E6%AF%8D%E4%BA%B2%E8%B4%AA%E6%B1%A13.5%E4%BA%BF%E5%85%83%E8%81%8C%E5%B7%A5%E5%AE%89%E7%BD%AE%E8%B4%B9%23) `1.0M 🔥` `-47%`
1. [马龙许昕晋级八强 (Ma Long and Xu Xin advance to the quarterfinals)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95%E6%99%8B%E7%BA%A7%E5%85%AB%E5%BC%BA%23) `552.6K 🔥` `-24%`
1. [这一秒过火](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%23) `551.6K 🔥` `-30%`
1. [迪丽热巴晒和张小斐合照](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%99%92%E5%92%8C%E5%BC%A0%E5%B0%8F%E6%96%90%E5%90%88%E7%85%A7%23) `245.5K 🔥` `-51%`
1. [中国博主遭阿根廷球迷辱骂](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%8D%9A%E4%B8%BB%E9%81%AD%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%90%83%E8%BF%B7%E8%BE%B1%E9%AA%82%23) `243.2K 🔥` `-58%`

Updated at 2026-07-17 21:59:05

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
