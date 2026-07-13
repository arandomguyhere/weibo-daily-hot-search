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

1. [中国首个禁售燃油车省份确认 (China's first province to ban sales of fuel vehicles confirmed)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%A6%96%E4%B8%AA%E7%A6%81%E5%94%AE%E7%87%83%E6%B2%B9%E8%BD%A6%E7%9C%81%E4%BB%BD%E7%A1%AE%E8%AE%A4%23) `2.0M 🔥` `NEW`
1. [青岛 海水倒灌](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%20%E6%B5%B7%E6%B0%B4%E5%80%92%E7%81%8C%23) `1.3M 🔥` `NEW`
1. [严打编造传播涉汛等涉灾网络谣言](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%89%93%E7%BC%96%E9%80%A0%E4%BC%A0%E6%92%AD%E6%B6%89%E6%B1%9B%E7%AD%89%E6%B6%89%E7%81%BE%E7%BD%91%E7%BB%9C%E8%B0%A3%E8%A8%80%23) `1.3M 🔥` `NEW`
1. [朋友圈的大家好像都失去了灵气](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E7%9A%84%E5%A4%A7%E5%AE%B6%E5%A5%BD%E5%83%8F%E9%83%BD%E5%A4%B1%E5%8E%BB%E4%BA%86%E7%81%B5%E6%B0%94%23) `1.3M 🔥` `NEW`
1. [中餐厅 张雅琪](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%85%20%E5%BC%A0%E9%9B%85%E7%90%AA%23) `1.3M 🔥` `NEW`
1. [消费观突然就被矫正了](https://s.weibo.com/weibo?q=%23%E6%B6%88%E8%B4%B9%E8%A7%82%E7%AA%81%E7%84%B6%E5%B0%B1%E8%A2%AB%E7%9F%AB%E6%AD%A3%E4%BA%86%23) `1.3M 🔥` `NEW`
1. [iPhone20再曝光](https://s.weibo.com/weibo?q=%23iPhone20%E5%86%8D%E6%9B%9D%E5%85%89%23) `1.0M 🔥` `NEW`
1. [接谁的孩子不是接](https://s.weibo.com/weibo?q=%23%E6%8E%A5%E8%B0%81%E7%9A%84%E5%AD%A9%E5%AD%90%E4%B8%8D%E6%98%AF%E6%8E%A5%23) `974.1K 🔥` `NEW`
1. [野狗骨头第17集封神](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E7%AC%AC17%E9%9B%86%E5%B0%81%E7%A5%9E%23) `741.4K 🔥` `NEW`
1. [17天新生儿被自家宠物狗咬开脑袋](https://s.weibo.com/weibo?q=%2317%E5%A4%A9%E6%96%B0%E7%94%9F%E5%84%BF%E8%A2%AB%E8%87%AA%E5%AE%B6%E5%AE%A0%E7%89%A9%E7%8B%97%E5%92%AC%E5%BC%80%E8%84%91%E8%A2%8B%23) `739.2K 🔥` `NEW`
1. [孟子义麦粒肿只露半边脸 (Meng Ziyi’s stye only shows half of his face)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E9%BA%A6%E7%B2%92%E8%82%BF%E5%8F%AA%E9%9C%B2%E5%8D%8A%E8%BE%B9%E8%84%B8%23) `737.1K 🔥` `NEW`
1. [沈阳百年一遇暴雨](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E7%99%BE%E5%B9%B4%E4%B8%80%E9%81%87%E6%9A%B4%E9%9B%A8%23) `579.0K 🔥` `NEW`
1. [巴威还没走海神就要来了](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E8%BF%98%E6%B2%A1%E8%B5%B0%E6%B5%B7%E7%A5%9E%E5%B0%B1%E8%A6%81%E6%9D%A5%E4%BA%86%23) `568.7K 🔥` `NEW`
1. [Bin数据公布](https://s.weibo.com/weibo?q=%23Bin%E6%95%B0%E6%8D%AE%E5%85%AC%E5%B8%83%23) `527.3K 🔥` `NEW`
1. [中国籍女医生在柬埔寨诊所内遇害](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%B1%8D%E5%A5%B3%E5%8C%BB%E7%94%9F%E5%9C%A8%E6%9F%AC%E5%9F%94%E5%AF%A8%E8%AF%8A%E6%89%80%E5%86%85%E9%81%87%E5%AE%B3%23) `496.2K 🔥` `NEW`
1. [挪威队集体深夜赴夜店解压](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81%E9%98%9F%E9%9B%86%E4%BD%93%E6%B7%B1%E5%A4%9C%E8%B5%B4%E5%A4%9C%E5%BA%97%E8%A7%A3%E5%8E%8B%23) `495.3K 🔥` `NEW`
1. [17地暴雨](https://s.weibo.com/weibo?q=%2317%E5%9C%B0%E6%9A%B4%E9%9B%A8%23) `488.7K 🔥` `NEW`
1. [雀骨8500了灿如繁星还没8000](https://s.weibo.com/weibo?q=%23%E9%9B%80%E9%AA%A88500%E4%BA%86%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%E8%BF%98%E6%B2%A18000%23) `459.6K 🔥` `NEW`
1. [为什么空调开到26度有股臭味](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%A9%BA%E8%B0%83%E5%BC%80%E5%88%B026%E5%BA%A6%E6%9C%89%E8%82%A1%E8%87%AD%E5%91%B3%23) `417.2K 🔥` `NEW`
1. [贺峻霖拒绝刘耀文](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E6%8B%92%E7%BB%9D%E5%88%98%E8%80%80%E6%96%87%23) `414.6K 🔥` `NEW`
1. [钱花在刀把上就显得很有钱 (Spending money on the knife handle makes you look rich)](https://s.weibo.com/weibo?q=%23%E9%92%B1%E8%8A%B1%E5%9C%A8%E5%88%80%E6%8A%8A%E4%B8%8A%E5%B0%B1%E6%98%BE%E5%BE%97%E5%BE%88%E6%9C%89%E9%92%B1%23) `377.9K 🔥` `NEW`
1. [网传迪丽热巴金九单封](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%87%91%E4%B9%9D%E5%8D%95%E5%B0%81%23) `344.2K 🔥` `NEW`
1. [沈阳地铁](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E5%9C%B0%E9%93%81%23) `331.5K 🔥` `NEW`
1. [功夫女足声明](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E5%A3%B0%E6%98%8E%23) `257.8K 🔥` `NEW`
1. [不是周星驰无厘头而是这个世界不正常](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E6%98%AF%E5%91%A8%E6%98%9F%E9%A9%B0%E6%97%A0%E5%8E%98%E5%A4%B4%E8%80%8C%E6%98%AF%E8%BF%99%E4%B8%AA%E4%B8%96%E7%95%8C%E4%B8%8D%E6%AD%A3%E5%B8%B8%23) `238.8K 🔥` `NEW`
1. [印度男子猥亵女子被狠抽耳光](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%94%B7%E5%AD%90%E7%8C%A5%E4%BA%B5%E5%A5%B3%E5%AD%90%E8%A2%AB%E7%8B%A0%E6%8A%BD%E8%80%B3%E5%85%89%23) `237.9K 🔥` `NEW`
1. [摄影界来了一个天才](https://s.weibo.com/weibo?q=%23%E6%91%84%E5%BD%B1%E7%95%8C%E6%9D%A5%E4%BA%86%E4%B8%80%E4%B8%AA%E5%A4%A9%E6%89%8D%23) `237.7K 🔥` `NEW`
1. [台积电2nm芯片开始量产](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E7%A7%AF%E7%94%B52nm%E8%8A%AF%E7%89%87%E5%BC%80%E5%A7%8B%E9%87%8F%E4%BA%A7%23) `237.1K 🔥` `NEW`
1. [暴雨内涝避险教程](https://s.weibo.com/weibo?q=%23%E6%9A%B4%E9%9B%A8%E5%86%85%E6%B6%9D%E9%81%BF%E9%99%A9%E6%95%99%E7%A8%8B%23) `236.7K 🔥` `NEW`
1. [苏新皓发穆祉丞别看了](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E5%8F%91%E7%A9%86%E7%A5%89%E4%B8%9E%E5%88%AB%E7%9C%8B%E4%BA%86%23) `236.3K 🔥` `NEW`
1. [巴威北上 (Bawei goes north)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E5%8C%97%E4%B8%8A%23) `236.1K 🔥` `NEW`
1. [优酷SVIP多个S多很多](https://s.weibo.com/weibo?q=%23%E4%BC%98%E9%85%B7SVIP%E5%A4%9A%E4%B8%AAS%E5%A4%9A%E5%BE%88%E5%A4%9A%23) `235.5K 🔥` `NEW`
1. [辽宁吉林等地局地有特大暴雨](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E5%90%89%E6%9E%97%E7%AD%89%E5%9C%B0%E5%B1%80%E5%9C%B0%E6%9C%89%E7%89%B9%E5%A4%A7%E6%9A%B4%E9%9B%A8%23) `235.0K 🔥` `NEW`
1. [新冠恢复看症状轻重](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%86%A0%E6%81%A2%E5%A4%8D%E7%9C%8B%E7%97%87%E7%8A%B6%E8%BD%BB%E9%87%8D%23) `234.9K 🔥` `NEW`
1. [苏新皓踢进世界杯机酒我全包](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E8%B8%A2%E8%BF%9B%E4%B8%96%E7%95%8C%E6%9D%AF%E6%9C%BA%E9%85%92%E6%88%91%E5%85%A8%E5%8C%85%23) `234.6K 🔥` `NEW`
1. [A股半日缩量3158亿](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%8D%8A%E6%97%A5%E7%BC%A9%E9%87%8F3158%E4%BA%BF%23) `232.0K 🔥` `NEW`
1. [李栋旭给孔刘洗内裤和袜子](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%A0%8B%E6%97%AD%E7%BB%99%E5%AD%94%E5%88%98%E6%B4%97%E5%86%85%E8%A3%A4%E5%92%8C%E8%A2%9C%E5%AD%90%23) `227.7K 🔥` `NEW`
1. [SEVENTEEN再次全员续约](https://s.weibo.com/weibo?q=%23SEVENTEEN%E5%86%8D%E6%AC%A1%E5%85%A8%E5%91%98%E7%BB%AD%E7%BA%A6%23) `218.3K 🔥` `NEW`
1. [宋威龙张婧仪没站稳这一下](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E5%BC%A0%E5%A9%A7%E4%BB%AA%E6%B2%A1%E7%AB%99%E7%A8%B3%E8%BF%99%E4%B8%80%E4%B8%8B%23) `216.9K 🔥` `NEW`
1. [台风后只有贴米字的玻璃碎了](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%90%8E%E5%8F%AA%E6%9C%89%E8%B4%B4%E7%B1%B3%E5%AD%97%E7%9A%84%E7%8E%BB%E7%92%83%E7%A2%8E%E4%BA%86%23) `214.9K 🔥` `NEW`
1. [吃不吃豆腐的都沉默了 (Those who eat tofu or not are silent.)](https://s.weibo.com/weibo?q=%23%E5%90%83%E4%B8%8D%E5%90%83%E8%B1%86%E8%85%90%E7%9A%84%E9%83%BD%E6%B2%89%E9%BB%98%E4%BA%86%23) `213.7K 🔥` `NEW`
1. [曝李小冉徐佳宁离婚](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%8E%E5%B0%8F%E5%86%89%E5%BE%90%E4%BD%B3%E5%AE%81%E7%A6%BB%E5%A9%9A%23) `740.9K 🔥` `+69%`
1. [金子涵又开始大点名](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E5%8F%88%E5%BC%80%E5%A7%8B%E5%A4%A7%E7%82%B9%E5%90%8D%23) `374.3K 🔥`
1. [特朗普命令全国降半旗](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%91%BD%E4%BB%A4%E5%85%A8%E5%9B%BD%E9%99%8D%E5%8D%8A%E6%97%97%23) `239.1K 🔥`
1. [阿根廷申请半决赛穿客场队服 (Argentina applies to wear away jersey in semi-finals)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%94%B3%E8%AF%B7%E5%8D%8A%E5%86%B3%E8%B5%9B%E7%A9%BF%E5%AE%A2%E5%9C%BA%E9%98%9F%E6%9C%8D%23) `769.2K 🔥` `-59%`
1. [大部分人觉得旅游累的原因](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%83%A8%E5%88%86%E4%BA%BA%E8%A7%89%E5%BE%97%E6%97%85%E6%B8%B8%E7%B4%AF%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `364.7K 🔥` `-59%`
1. [林依晨演邓为老婆](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BE%9D%E6%99%A8%E6%BC%94%E9%82%93%E4%B8%BA%E8%80%81%E5%A9%86%23) `305.5K 🔥` `-64%`
1. [上海护士辞职卖西餐被医生自发捧火](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E6%8A%A4%E5%A3%AB%E8%BE%9E%E8%81%8C%E5%8D%96%E8%A5%BF%E9%A4%90%E8%A2%AB%E5%8C%BB%E7%94%9F%E8%87%AA%E5%8F%91%E6%8D%A7%E7%81%AB%23) `238.3K 🔥` `-66%`
1. [原来打羽毛球是为了让对方接到](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%89%93%E7%BE%BD%E6%AF%9B%E7%90%83%E6%98%AF%E4%B8%BA%E4%BA%86%E8%AE%A9%E5%AF%B9%E6%96%B9%E6%8E%A5%E5%88%B0%23) `218.1K 🔥` `-75%`
1. [十个勤天被指抄袭R1SE](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%E8%A2%AB%E6%8C%87%E6%8A%84%E8%A2%ADR1SE%23) `215.3K 🔥` `-75%`

Updated at 2026-07-13 15:55:03

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
