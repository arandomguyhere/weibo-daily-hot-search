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

1. [方圆阿爆拍了双女主短剧 (Fangyuan Abao filmed a short drama with two female protagonists)](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%9C%86%E9%98%BF%E7%88%86%E6%8B%8D%E4%BA%86%E5%8F%8C%E5%A5%B3%E4%B8%BB%E7%9F%AD%E5%89%A7%23) `1.1M 🔥` `NEW`
1. [女教师群聊八卦被拘案最新进展](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%95%99%E5%B8%88%E7%BE%A4%E8%81%8A%E5%85%AB%E5%8D%A6%E8%A2%AB%E6%8B%98%E6%A1%88%E6%9C%80%E6%96%B0%E8%BF%9B%E5%B1%95%23) `217.8K 🔥` `NEW`
1. [我用AI过春节](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%94%A8AI%E8%BF%87%E6%98%A5%E8%8A%82%23) `210.3K 🔥` `NEW`
1. [孙策大乔星传说皮肤](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%AD%96%E5%A4%A7%E4%B9%94%E6%98%9F%E4%BC%A0%E8%AF%B4%E7%9A%AE%E8%82%A4%23) `131.5K 🔥` `NEW`
1. [KK园区2.0内部照首曝光](https://s.weibo.com/weibo?q=%23KK%E5%9B%AD%E5%8C%BA2.0%E5%86%85%E9%83%A8%E7%85%A7%E9%A6%96%E6%9B%9D%E5%85%89%23) `130.8K 🔥` `NEW`
1. [保罗在美国被禁言](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E7%BD%97%E5%9C%A8%E7%BE%8E%E5%9B%BD%E8%A2%AB%E7%A6%81%E8%A8%80%23) `128.9K 🔥` `NEW`
1. [日本法律只罚卖淫卖方不罚买方](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%B3%95%E5%BE%8B%E5%8F%AA%E7%BD%9A%E5%8D%96%E6%B7%AB%E5%8D%96%E6%96%B9%E4%B8%8D%E7%BD%9A%E4%B9%B0%E6%96%B9%23) `122.1K 🔥` `NEW`
1. [阿福发16.8红包给奶茶解腻](https://s.weibo.com/weibo?q=%23%E9%98%BF%E7%A6%8F%E5%8F%9116.8%E7%BA%A2%E5%8C%85%E7%BB%99%E5%A5%B6%E8%8C%B6%E8%A7%A3%E8%85%BB%23) `122.1K 🔥` `NEW`
1. [J人已经买好27年的过年机票](https://s.weibo.com/weibo?q=%23J%E4%BA%BA%E5%B7%B2%E7%BB%8F%E4%B9%B0%E5%A5%BD27%E5%B9%B4%E7%9A%84%E8%BF%87%E5%B9%B4%E6%9C%BA%E7%A5%A8%23) `122.1K 🔥` `NEW`
1. [当两个梗王谈恋爱](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%B8%A4%E4%B8%AA%E6%A2%97%E7%8E%8B%E8%B0%88%E6%81%8B%E7%88%B1%23) `117.5K 🔥` `NEW`
1. [全国房价止跌信号出现 (Signal for national house prices to stop falling appears)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E6%88%BF%E4%BB%B7%E6%AD%A2%E8%B7%8C%E4%BF%A1%E5%8F%B7%E5%87%BA%E7%8E%B0%23) `109.2K 🔥` `NEW`
1. [女子给男友转账41万分手后要回一半](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%BB%99%E7%94%B7%E5%8F%8B%E8%BD%AC%E8%B4%A641%E4%B8%87%E5%88%86%E6%89%8B%E5%90%8E%E8%A6%81%E5%9B%9E%E4%B8%80%E5%8D%8A%23) `107.3K 🔥` `NEW`
1. [迪丽热巴 高智感妈咪](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%20%E9%AB%98%E6%99%BA%E6%84%9F%E5%A6%88%E5%92%AA%23) `107.2K 🔥` `NEW`
1. [早产儿疑因医院违规接种疫苗脑出血](https://s.weibo.com/weibo?q=%23%E6%97%A9%E4%BA%A7%E5%84%BF%E7%96%91%E5%9B%A0%E5%8C%BB%E9%99%A2%E8%BF%9D%E8%A7%84%E6%8E%A5%E7%A7%8D%E7%96%AB%E8%8B%97%E8%84%91%E5%87%BA%E8%A1%80%23) `106.7K 🔥` `NEW`
1. [15年闺蜜因医美毁容反目](https://s.weibo.com/weibo?q=%2315%E5%B9%B4%E9%97%BA%E8%9C%9C%E5%9B%A0%E5%8C%BB%E7%BE%8E%E6%AF%81%E5%AE%B9%E5%8F%8D%E7%9B%AE%23) `106.4K 🔥` `NEW`
1. [00后cp来整顿古偶圈了](https://s.weibo.com/weibo?q=%2300%E5%90%8Ecp%E6%9D%A5%E6%95%B4%E9%A1%BF%E5%8F%A4%E5%81%B6%E5%9C%88%E4%BA%86%23) `102.9K 🔥` `NEW`
1. [冬奥会](https://s.weibo.com/weibo?q=%23%E5%86%AC%E5%A5%A5%E4%BC%9A%23) `102.8K 🔥` `NEW`
1. [单板滑雪女子U型场地技巧预赛](https://s.weibo.com/weibo?q=%23%E5%8D%95%E6%9D%BF%E6%BB%91%E9%9B%AA%E5%A5%B3%E5%AD%90U%E5%9E%8B%E5%9C%BA%E5%9C%B0%E6%8A%80%E5%B7%A7%E9%A2%84%E8%B5%9B%23) `102.2K 🔥` `NEW`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `100.4K 🔥` `NEW`
1. [春运广州南站发车间隔堪比地铁](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%BF%90%E5%B9%BF%E5%B7%9E%E5%8D%97%E7%AB%99%E5%8F%91%E8%BD%A6%E9%97%B4%E9%9A%94%E5%A0%AA%E6%AF%94%E5%9C%B0%E9%93%81%23) `83.4K 🔥` `NEW`
1. [邓为直播状态 (Deng Wei live broadcast status)](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%B8%BA%E7%9B%B4%E6%92%AD%E7%8A%B6%E6%80%81%23) `83.4K 🔥` `NEW`
1. [我将辞职在家研究苏醒这段话](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%B0%86%E8%BE%9E%E8%81%8C%E5%9C%A8%E5%AE%B6%E7%A0%94%E7%A9%B6%E8%8B%8F%E9%86%92%E8%BF%99%E6%AE%B5%E8%AF%9D%23) `311.1K 🔥` `+134%`
1. [白鹿3剧连播反思脚步太快](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF3%E5%89%A7%E8%BF%9E%E6%92%AD%E5%8F%8D%E6%80%9D%E8%84%9A%E6%AD%A5%E5%A4%AA%E5%BF%AB%23) `280.5K 🔥` `+193%`
1. [一大批年轻人开始反向过年](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%A4%A7%E6%89%B9%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%BC%80%E5%A7%8B%E5%8F%8D%E5%90%91%E8%BF%87%E5%B9%B4%23) `150.8K 🔥` `+98%`
1. [永辉超市CEO发全员信致歉](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E8%BE%89%E8%B6%85%E5%B8%82CEO%E5%8F%91%E5%85%A8%E5%91%98%E4%BF%A1%E8%87%B4%E6%AD%89%23) `816.8K 🔥`
1. [坐高铁感受经济脉动](https://s.weibo.com/weibo?q=%23%E5%9D%90%E9%AB%98%E9%93%81%E6%84%9F%E5%8F%97%E7%BB%8F%E6%B5%8E%E8%84%89%E5%8A%A8%23) `658.2K 🔥`
1. [14万房子涨到180万等20年才拿回 (It took 20 years to get the house back from 140,000 to 1.8 million)](https://s.weibo.com/weibo?q=%2314%E4%B8%87%E6%88%BF%E5%AD%90%E6%B6%A8%E5%88%B0180%E4%B8%87%E7%AD%8920%E5%B9%B4%E6%89%8D%E6%8B%BF%E5%9B%9E%23) `285.2K 🔥`
1. [长尾猫林允松弛新主张 (Long-tailed cat Lin Yun relaxes new ideas)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%B0%BE%E7%8C%AB%E6%9E%97%E5%85%81%E6%9D%BE%E5%BC%9B%E6%96%B0%E4%B8%BB%E5%BC%A0%23) `282.2K 🔥`
1. [第一批到家的人已经开始送奶了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E5%88%B0%E5%AE%B6%E7%9A%84%E4%BA%BA%E5%B7%B2%E7%BB%8F%E5%BC%80%E5%A7%8B%E9%80%81%E5%A5%B6%E4%BA%86%23) `243.2K 🔥`
1. [爱泼斯坦羞辱性展示女孩视频曝光](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E7%BE%9E%E8%BE%B1%E6%80%A7%E5%B1%95%E7%A4%BA%E5%A5%B3%E5%AD%A9%E8%A7%86%E9%A2%91%E6%9B%9D%E5%85%89%23) `206.2K 🔥`
1. [女子举报初中老师性侵产子被起诉](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%BE%E6%8A%A5%E5%88%9D%E4%B8%AD%E8%80%81%E5%B8%88%E6%80%A7%E4%BE%B5%E4%BA%A7%E5%AD%90%E8%A2%AB%E8%B5%B7%E8%AF%89%23) `179.2K 🔥`
1. [余茵否认模仿白鹿 (Yu Yin denies imitating Bai Lu)](https://s.weibo.com/weibo?q=%23%E4%BD%99%E8%8C%B5%E5%90%A6%E8%AE%A4%E6%A8%A1%E4%BB%BF%E7%99%BD%E9%B9%BF%23) `127.7K 🔥`
1. [喜欢侧睡的受害者出现了](https://s.weibo.com/weibo?q=%23%E5%96%9C%E6%AC%A2%E4%BE%A7%E7%9D%A1%E7%9A%84%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86%23) `126.4K 🔥`
1. [竟然陪时代峰峻闹了这么久了 (I've been having trouble with Shi Fengjun for so long)](https://s.weibo.com/weibo?q=%23%E7%AB%9F%E7%84%B6%E9%99%AA%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E9%97%B9%E4%BA%86%E8%BF%99%E4%B9%88%E4%B9%85%E4%BA%86%23) `124.1K 🔥`
1. [徐艺洋回应黄子韬开始不在意颜值 (Xu Yiyang responded that Huang Zitao didn’t care about appearance anymore)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E5%9B%9E%E5%BA%94%E9%BB%84%E5%AD%90%E9%9F%AC%E5%BC%80%E5%A7%8B%E4%B8%8D%E5%9C%A8%E6%84%8F%E9%A2%9C%E5%80%BC%23) `122.3K 🔥`
1. [鬼鬼带女儿去迪士尼](https://s.weibo.com/weibo?q=%23%E9%AC%BC%E9%AC%BC%E5%B8%A6%E5%A5%B3%E5%84%BF%E5%8E%BB%E8%BF%AA%E5%A3%AB%E5%B0%BC%23) `122.1K 🔥`
1. [演员郑恩宇去世 (Actor Jung Eun-woo passes away)](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E9%83%91%E6%81%A9%E5%AE%87%E5%8E%BB%E4%B8%96%23) `122.1K 🔥`
1. [网红沐言感染合胞病毒](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E6%B2%90%E8%A8%80%E6%84%9F%E6%9F%93%E5%90%88%E8%83%9E%E7%97%85%E6%AF%92%23) `122.1K 🔥`
1. [虞书欣cos黑色碧琪](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3cos%E9%BB%91%E8%89%B2%E7%A2%A7%E7%90%AA%23) `122.1K 🔥`
1. [第一次这么直观感受萝卜岗](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%BF%99%E4%B9%88%E7%9B%B4%E8%A7%82%E6%84%9F%E5%8F%97%E8%90%9D%E5%8D%9C%E5%B2%97%23) `84.2K 🔥`
1. [女子将敬酒服穿脏后焊接吊牌退货 (Woman wears dirty toast clothes and returns tag after welding it)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B0%86%E6%95%AC%E9%85%92%E6%9C%8D%E7%A9%BF%E8%84%8F%E5%90%8E%E7%84%8A%E6%8E%A5%E5%90%8A%E7%89%8C%E9%80%80%E8%B4%A7%23) `283.5K 🔥` `-75%`
1. [王者荣耀杨玉环](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E6%9D%A8%E7%8E%89%E7%8E%AF%23) `200.1K 🔥` `-62%`
1. [李一桐新剧空降第一](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E6%96%B0%E5%89%A7%E7%A9%BA%E9%99%8D%E7%AC%AC%E4%B8%80%23) `186.0K 🔥` `-43%`
1. [台当局胆敢在春节挑事必担恶果](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E5%BD%93%E5%B1%80%E8%83%86%E6%95%A2%E5%9C%A8%E6%98%A5%E8%8A%82%E6%8C%91%E4%BA%8B%E5%BF%85%E6%8B%85%E6%81%B6%E6%9E%9C%23) `177.6K 🔥` `-25%`
1. [终于有人吐槽语音评论了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%9C%89%E4%BA%BA%E5%90%90%E6%A7%BD%E8%AF%AD%E9%9F%B3%E8%AF%84%E8%AE%BA%E4%BA%86%23) `169.0K 🔥` `-25%`
1. [湖南卫视春晚节目单来了](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E6%98%A5%E6%99%9A%E8%8A%82%E7%9B%AE%E5%8D%95%E6%9D%A5%E4%BA%86%23) `137.2K 🔥` `-52%`
1. [爱泼斯坦 (Epstein)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%23) `116.1K 🔥` `-45%`
1. [英国国王公开表态](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E5%9B%BD%E7%8E%8B%E5%85%AC%E5%BC%80%E8%A1%A8%E6%80%81%23) `107.6K 🔥` `-64%`
1. [小区买房送黄金房价跌了住户却赚了 (Buying a house in the community gives you gold. House prices have fallen, but residents have made money.)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%8C%BA%E4%B9%B0%E6%88%BF%E9%80%81%E9%BB%84%E9%87%91%E6%88%BF%E4%BB%B7%E8%B7%8C%E4%BA%86%E4%BD%8F%E6%88%B7%E5%8D%B4%E8%B5%9A%E4%BA%86%23) `106.3K 🔥` `-54%`
1. [当老爸的社保比我工资还高 (Being a dad’s social security is higher than my salary)](https://s.weibo.com/weibo?q=%23%E5%BD%93%E8%80%81%E7%88%B8%E7%9A%84%E7%A4%BE%E4%BF%9D%E6%AF%94%E6%88%91%E5%B7%A5%E8%B5%84%E8%BF%98%E9%AB%98%23) `96.9K 🔥` `-25%`
1. [公司刮奖以为中3万结果是30万 (The company scratched the prize and thought it won 30,000, but it turned out to be 300,000.)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E5%88%AE%E5%A5%96%E4%BB%A5%E4%B8%BA%E4%B8%AD3%E4%B8%87%E7%BB%93%E6%9E%9C%E6%98%AF30%E4%B8%87%23) `92.1K 🔥` `-30%`

Updated at 2026-02-11 18:30:22

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
