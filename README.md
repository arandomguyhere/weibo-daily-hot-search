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

1. [重庆彭水山体崩塌已致8死 (Chongqing Pengshui mountain collapse kills 8 people)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%BD%AD%E6%B0%B4%E5%B1%B1%E4%BD%93%E5%B4%A9%E5%A1%8C%E5%B7%B2%E8%87%B48%E6%AD%BB%23) `996.1K 🔥` `NEW`
1. [重庆公安全力投入彭水山体崩塌灾害救援](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%85%AC%E5%AE%89%E5%85%A8%E5%8A%9B%E6%8A%95%E5%85%A5%E5%BD%AD%E6%B0%B4%E5%B1%B1%E4%BD%93%E5%B4%A9%E5%A1%8C%E7%81%BE%E5%AE%B3%E6%95%91%E6%8F%B4%23) `813.6K 🔥` `NEW`
1. [阿根廷决赛遇苦主裁判](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%86%B3%E8%B5%9B%E9%81%87%E8%8B%A6%E4%B8%BB%E8%A3%81%E5%88%A4%23) `520.6K 🔥` `NEW`
1. [清吧被投放伟哥当事人发声](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%90%A7%E8%A2%AB%E6%8A%95%E6%94%BE%E4%BC%9F%E5%93%A5%E5%BD%93%E4%BA%8B%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `481.2K 🔥` `NEW`
1. [HLE错买300个桃](https://s.weibo.com/weibo?q=%23HLE%E9%94%99%E4%B9%B0300%E4%B8%AA%E6%A1%83%23) `474.1K 🔥` `NEW`
1. [跨代周边](https://s.weibo.com/weibo?q=%23%E8%B7%A8%E4%BB%A3%E5%91%A8%E8%BE%B9%23) `434.0K 🔥` `NEW`
1. [AL对战KC](https://s.weibo.com/weibo?q=%23AL%E5%AF%B9%E6%88%98KC%23) `432.0K 🔥` `NEW`
1. [王俊凯 金发](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%20%E9%87%91%E5%8F%91%23) `424.1K 🔥` `NEW`
1. [穆祉丞 我会照顾好自己](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%20%E6%88%91%E4%BC%9A%E7%85%A7%E9%A1%BE%E5%A5%BD%E8%87%AA%E5%B7%B1%23) `397.2K 🔥` `NEW`
1. [八仙 好看](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%20%E5%A5%BD%E7%9C%8B%23) `364.8K 🔥` `NEW`
1. [妈妈砸妹妹头缝两针后下跪道歉 (Mother hits sister on the head and gets two stitches, then kneels down to apologize)](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E7%A0%B8%E5%A6%B9%E5%A6%B9%E5%A4%B4%E7%BC%9D%E4%B8%A4%E9%92%88%E5%90%8E%E4%B8%8B%E8%B7%AA%E9%81%93%E6%AD%89%23) `357.8K 🔥` `NEW`
1. [迪丽热巴VOGUE八月刊外景](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4VOGUE%E5%85%AB%E6%9C%88%E5%88%8A%E5%A4%96%E6%99%AF%23) `348.3K 🔥` `NEW`
1. [重庆彭水 网格员](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%BD%AD%E6%B0%B4%20%E7%BD%91%E6%A0%BC%E5%91%98%23) `304.7K 🔥` `NEW`
1. [哈兰德最喜欢的表情包出自中国网友](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E6%9C%80%E5%96%9C%E6%AC%A2%E7%9A%84%E8%A1%A8%E6%83%85%E5%8C%85%E5%87%BA%E8%87%AA%E4%B8%AD%E5%9B%BD%E7%BD%91%E5%8F%8B%23) `295.9K 🔥` `NEW`
1. [苏新皓提前退场](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E6%8F%90%E5%89%8D%E9%80%80%E5%9C%BA%23) `283.3K 🔥` `NEW`
1. [年轻人一定要对钱有概念](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%B8%80%E5%AE%9A%E8%A6%81%E5%AF%B9%E9%92%B1%E6%9C%89%E6%A6%82%E5%BF%B5%23) `262.0K 🔥` `NEW`
1. [BLG对战DK](https://s.weibo.com/weibo?q=%23BLG%E5%AF%B9%E6%88%98DK%23) `211.2K 🔥` `NEW`
1. [成都三环路车祸一车被烧成空壳](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E4%B8%89%E7%8E%AF%E8%B7%AF%E8%BD%A6%E7%A5%B8%E4%B8%80%E8%BD%A6%E8%A2%AB%E7%83%A7%E6%88%90%E7%A9%BA%E5%A3%B3%23) `197.4K 🔥` `NEW`
1. [上海偶遇蔡徐坤买香水](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%81%B6%E9%81%87%E8%94%A1%E5%BE%90%E5%9D%A4%E4%B9%B0%E9%A6%99%E6%B0%B4%23) `187.7K 🔥` `NEW`
1. [茅台涨价](https://s.weibo.com/weibo?q=%23%E8%8C%85%E5%8F%B0%E6%B6%A8%E4%BB%B7%23) `184.3K 🔥` `NEW`
1. [喜欢听王菲就觉得自己好有品味 (If you like listening to Faye Wong, you feel that you have good taste)](https://s.weibo.com/weibo?q=%23%E5%96%9C%E6%AC%A2%E5%90%AC%E7%8E%8B%E8%8F%B2%E5%B0%B1%E8%A7%89%E5%BE%97%E8%87%AA%E5%B7%B1%E5%A5%BD%E6%9C%89%E5%93%81%E5%91%B3%23) `167.8K 🔥` `NEW`
1. [网红隐藏门把手凉了](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E9%9A%90%E8%97%8F%E9%97%A8%E6%8A%8A%E6%89%8B%E5%87%89%E4%BA%86%23) `160.5K 🔥` `NEW`
1. [歌手排名](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%23) `2.4M 🔥` `+162%`
1. [阿维塔发布会](https://s.weibo.com/weibo?q=%23%E9%98%BF%E7%BB%B4%E5%A1%94%E5%8F%91%E5%B8%83%E4%BC%9A%23) `337.7K 🔥` `+43%`
1. [8类女性更容易患乳腺癌 (8 categories of women more likely to develop breast cancer)](https://s.weibo.com/weibo?q=%238%E7%B1%BB%E5%A5%B3%E6%80%A7%E6%9B%B4%E5%AE%B9%E6%98%93%E6%82%A3%E4%B9%B3%E8%85%BA%E7%99%8C%23) `295.7K 🔥` `+26%`
1. [范丞丞椒巴客品牌全球代言人 (Fan Chengcheng, global spokesperson of Jiao Bake brand)](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E6%A4%92%E5%B7%B4%E5%AE%A2%E5%93%81%E7%89%8C%E5%85%A8%E7%90%83%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `740.6K 🔥`
1. [21岁女孩家中遇害凶手竟是亲生父亲](https://s.weibo.com/weibo?q=%2321%E5%B2%81%E5%A5%B3%E5%AD%A9%E5%AE%B6%E4%B8%AD%E9%81%87%E5%AE%B3%E5%87%B6%E6%89%8B%E7%AB%9F%E6%98%AF%E4%BA%B2%E7%94%9F%E7%88%B6%E4%BA%B2%23) `639.8K 🔥`
1. [王俊凯三开](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%B8%89%E5%BC%80%23) `491.7K 🔥`
1. [JYP女团成员Angelababy](https://s.weibo.com/weibo?q=%23JYP%E5%A5%B3%E5%9B%A2%E6%88%90%E5%91%98Angelababy%23) `455.4K 🔥`
1. [刘惜君淘汰 (Liu Xijun eliminated)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%83%9C%E5%90%9B%E6%B7%98%E6%B1%B0%23) `345.7K 🔥`
1. [迪丽热巴晒和张小斐合照](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%99%92%E5%92%8C%E5%BC%A0%E5%B0%8F%E6%96%90%E5%90%88%E7%85%A7%23) `264.5K 🔥`
1. [曲婉婷母亲贪污3.5亿元职工安置费 (Qu Wanting’s mother embezzled 350 million yuan in employee placement fees)](https://s.weibo.com/weibo?q=%23%E6%9B%B2%E5%A9%89%E5%A9%B7%E6%AF%8D%E4%BA%B2%E8%B4%AA%E6%B1%A13.5%E4%BA%BF%E5%85%83%E8%81%8C%E5%B7%A5%E5%AE%89%E7%BD%AE%E8%B4%B9%23) `599.0K 🔥` `-42%`
1. [这一秒过火定档 (This second is too much.)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E5%AE%9A%E6%A1%A3%23) `582.4K 🔥` `-51%`
1. [时代少年团公告 丁程鑫受伤](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%85%AC%E5%91%8A%20%E4%B8%81%E7%A8%8B%E9%91%AB%E5%8F%97%E4%BC%A4%23) `418.7K 🔥` `-24%`
1. [没有什么稳定的工作](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%9C%89%E4%BB%80%E4%B9%88%E7%A8%B3%E5%AE%9A%E7%9A%84%E5%B7%A5%E4%BD%9C%23) `410.5K 🔥` `-26%`
1. [张凌赫发了52个火 (Zhang Linghe made 52 angry comments)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%8F%91%E4%BA%8652%E4%B8%AA%E7%81%AB%23) `395.2K 🔥` `-28%`
1. [A股今天暴跌原因](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%BB%8A%E5%A4%A9%E6%9A%B4%E8%B7%8C%E5%8E%9F%E5%9B%A0%23) `359.7K 🔥` `-35%`
1. [任嘉伦 现在直接喊国超了吗](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%98%89%E4%BC%A6%20%E7%8E%B0%E5%9C%A8%E7%9B%B4%E6%8E%A5%E5%96%8A%E5%9B%BD%E8%B6%85%E4%BA%86%E5%90%97%23) `335.0K 🔥` `-39%`
1. [鹿晗的宣传总监觉得何瑞贤会爆红](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E7%9A%84%E5%AE%A3%E4%BC%A0%E6%80%BB%E7%9B%91%E8%A7%89%E5%BE%97%E4%BD%95%E7%91%9E%E8%B4%A4%E4%BC%9A%E7%88%86%E7%BA%A2%23) `315.1K 🔥` `-43%`
1. [矮个子穿吊带容易走光](https://s.weibo.com/weibo?q=%23%E7%9F%AE%E4%B8%AA%E5%AD%90%E7%A9%BF%E5%90%8A%E5%B8%A6%E5%AE%B9%E6%98%93%E8%B5%B0%E5%85%89%23) `299.3K 🔥` `-22%`
1. [A股年内最强无差别杀跌](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%B9%B4%E5%86%85%E6%9C%80%E5%BC%BA%E6%97%A0%E5%B7%AE%E5%88%AB%E6%9D%80%E8%B7%8C%23) `296.4K 🔥` `-42%`
1. [万妮达一开口就赢了](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%A6%AE%E8%BE%BE%E4%B8%80%E5%BC%80%E5%8F%A3%E5%B0%B1%E8%B5%A2%E4%BA%86%23) `295.7K 🔥` `-40%`
1. [AG对战KSG](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98KSG%23) `266.1K 🔥` `-52%`
1. [张凌赫座驾阿维塔07L](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%BA%A7%E9%A9%BE%E9%98%BF%E7%BB%B4%E5%A1%9407L%23) `266.0K 🔥` `-52%`
1. [月亮](https://s.weibo.com/weibo?q=%23%E6%9C%88%E4%BA%AE%23) `219.0K 🔥` `-60%`
1. [穆祉丞摔陈浚铭怀里 (Mu Zhicheng fell into Chen Junming's arms)](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E6%91%94%E9%99%88%E6%B5%9A%E9%93%AD%E6%80%80%E9%87%8C%23) `201.3K 🔥` `-55%`
1. [张远晋级](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%BF%9C%E6%99%8B%E7%BA%A7%23) `175.6K 🔥` `-68%`
1. [JDG不敌GEN](https://s.weibo.com/weibo?q=%23JDG%E4%B8%8D%E6%95%8CGEN%23) `173.7K 🔥` `-69%`
1. [男孩故意拉倒餐车卤水洒了一地](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E6%95%85%E6%84%8F%E6%8B%89%E5%80%92%E9%A4%90%E8%BD%A6%E5%8D%A4%E6%B0%B4%E6%B4%92%E4%BA%86%E4%B8%80%E5%9C%B0%23) `171.0K 🔥` `-69%`
1. [重庆彭水山体垮塌](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%BD%AD%E6%B0%B4%E5%B1%B1%E4%BD%93%E5%9E%AE%E5%A1%8C%23) `166.9K 🔥` `-69%`
1. [马龙许昕晋级八强 (Ma Long and Xu Xin advance to the quarterfinals)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95%E6%99%8B%E7%BA%A7%E5%85%AB%E5%BC%BA%23) `165.4K 🔥` `-70%`

Updated at 2026-07-17 23:21:04

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
