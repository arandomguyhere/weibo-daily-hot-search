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

1. [豆包 机票退款 (Bean bag flight ticket refund)](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%20%E6%9C%BA%E7%A5%A8%E9%80%80%E6%AC%BE%23) `5.4M 🔥` `NEW`
1. [北方多地迎今年首个高温日](https://s.weibo.com/weibo?q=%23%E5%8C%97%E6%96%B9%E5%A4%9A%E5%9C%B0%E8%BF%8E%E4%BB%8A%E5%B9%B4%E9%A6%96%E4%B8%AA%E9%AB%98%E6%B8%A9%E6%97%A5%23) `1.1M 🔥` `NEW`
1. [开花店真的要有审美](https://s.weibo.com/weibo?q=%23%E5%BC%80%E8%8A%B1%E5%BA%97%E7%9C%9F%E7%9A%84%E8%A6%81%E6%9C%89%E5%AE%A1%E7%BE%8E%23) `921.8K 🔥` `NEW`
1. [豆包收费 大模型将告别免费时代](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E6%94%B6%E8%B4%B9%20%E5%A4%A7%E6%A8%A1%E5%9E%8B%E5%B0%86%E5%91%8A%E5%88%AB%E5%85%8D%E8%B4%B9%E6%97%B6%E4%BB%A3%23) `508.8K 🔥` `NEW`
1. [歌手2026 舞美](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%20%E8%88%9E%E7%BE%8E%23) `508.4K 🔥` `NEW`
1. [天猫礼遇大使周翊然](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E7%8C%AB%E7%A4%BC%E9%81%87%E5%A4%A7%E4%BD%BF%E5%91%A8%E7%BF%8A%E7%84%B6%23) `480.0K 🔥` `NEW`
1. [金曲奖入围名单](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%9B%B2%E5%A5%96%E5%85%A5%E5%9B%B4%E5%90%8D%E5%8D%95%23) `465.3K 🔥` `NEW`
1. [公瑾爆蛋](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%91%BE%E7%88%86%E8%9B%8B%23) `441.7K 🔥` `NEW`
1. [吴京 什么李心洁谁](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%20%E4%BB%80%E4%B9%88%E6%9D%8E%E5%BF%83%E6%B4%81%E8%B0%81%23) `420.0K 🔥` `NEW`
1. [特朗普回应访华团高管名单](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%9B%9E%E5%BA%94%E8%AE%BF%E5%8D%8E%E5%9B%A2%E9%AB%98%E7%AE%A1%E5%90%8D%E5%8D%95%23) `419.3K 🔥` `NEW`
1. [孙怡捂鼻子下班 (Sun Yi covers her nose and gets off work)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E6%8D%82%E9%BC%BB%E5%AD%90%E4%B8%8B%E7%8F%AD%23) `418.9K 🔥` `NEW`
1. [张碧晨咋这么瘦了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%A2%A7%E6%99%A8%E5%92%8B%E8%BF%99%E4%B9%88%E7%98%A6%E4%BA%86%23) `417.3K 🔥` `NEW`
1. [欢迎特朗普访问中国](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E8%BF%8E%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E9%97%AE%E4%B8%AD%E5%9B%BD%23) `416.9K 🔥` `NEW`
1. [白鹿已成立独资工作室](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%B7%B2%E6%88%90%E7%AB%8B%E7%8B%AC%E8%B5%84%E5%B7%A5%E4%BD%9C%E5%AE%A4%23) `416.2K 🔥` `NEW`
1. [十年前的裤子vs现在的裤子](https://s.weibo.com/weibo?q=%23%E5%8D%81%E5%B9%B4%E5%89%8D%E7%9A%84%E8%A3%A4%E5%AD%90vs%E7%8E%B0%E5%9C%A8%E7%9A%84%E8%A3%A4%E5%AD%90%23) `415.4K 🔥` `NEW`
1. [男子10天内3次杀害女友未遂](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%9010%E5%A4%A9%E5%86%853%E6%AC%A1%E6%9D%80%E5%AE%B3%E5%A5%B3%E5%8F%8B%E6%9C%AA%E9%81%82%23) `414.4K 🔥` `NEW`
1. [樊振东心相印纸巾不离手](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%BF%83%E7%9B%B8%E5%8D%B0%E7%BA%B8%E5%B7%BE%E4%B8%8D%E7%A6%BB%E6%89%8B%23) `412.8K 🔥` `NEW`
1. [用不用心谈恋爱真的很明显](https://s.weibo.com/weibo?q=%23%E7%94%A8%E4%B8%8D%E7%94%A8%E5%BF%83%E8%B0%88%E6%81%8B%E7%88%B1%E7%9C%9F%E7%9A%84%E5%BE%88%E6%98%8E%E6%98%BE%23) `412.5K 🔥` `NEW`
1. [左航cos孙权](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E8%88%AAcos%E5%AD%99%E6%9D%83%23) `411.9K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `359.8K 🔥` `NEW`
1. [单依纯入围金曲奖 (Shan Yichun nominated for Golden Melody Award)](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E5%85%A5%E5%9B%B4%E9%87%91%E6%9B%B2%E5%A5%96%23) `343.3K 🔥` `NEW`
1. [张凌赫聊天真的很摩羯座](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%81%8A%E5%A4%A9%E7%9C%9F%E7%9A%84%E5%BE%88%E6%91%A9%E7%BE%AF%E5%BA%A7%23) `338.8K 🔥` `NEW`
1. [没喝过标准奶茶](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E5%96%9D%E8%BF%87%E6%A0%87%E5%87%86%E5%A5%B6%E8%8C%B6%23) `327.5K 🔥` `NEW`
1. [杨丞琳金曲奖0提](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E4%B8%9E%E7%90%B3%E9%87%91%E6%9B%B2%E5%A5%960%E6%8F%90%23) `319.7K 🔥` `NEW`
1. [小伙弄丢了免费领养的猫被要求赔2万](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E5%BC%84%E4%B8%A2%E4%BA%86%E5%85%8D%E8%B4%B9%E9%A2%86%E5%85%BB%E7%9A%84%E7%8C%AB%E8%A2%AB%E8%A6%81%E6%B1%82%E8%B5%942%E4%B8%87%23) `269.2K 🔥` `NEW`
1. [A股第10只千元股诞生](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E7%AC%AC10%E5%8F%AA%E5%8D%83%E5%85%83%E8%82%A1%E8%AF%9E%E7%94%9F%23) `247.0K 🔥` `NEW`
1. [纯妹妹](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E5%A6%B9%E5%A6%B9%23) `244.2K 🔥` `NEW`
1. [于正轰动内娱的王炸](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E8%BD%B0%E5%8A%A8%E5%86%85%E5%A8%B1%E7%9A%84%E7%8E%8B%E7%82%B8%23) `225.1K 🔥` `NEW`
1. [聋哑老人卖菜籽被商贩少称近400斤](https://s.weibo.com/weibo?q=%23%E8%81%8B%E5%93%91%E8%80%81%E4%BA%BA%E5%8D%96%E8%8F%9C%E7%B1%BD%E8%A2%AB%E5%95%86%E8%B4%A9%E5%B0%91%E7%A7%B0%E8%BF%91400%E6%96%A4%23) `215.2K 🔥` `NEW`
1. [方圆回应与男网红恋情](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%9C%86%E5%9B%9E%E5%BA%94%E4%B8%8E%E7%94%B7%E7%BD%91%E7%BA%A2%E6%81%8B%E6%83%85%23) `214.9K 🔥` `NEW`
1. [aespa官方点赞公司爆炸梗图 (aespa officially likes company explosion meme)](https://s.weibo.com/weibo?q=%23aespa%E5%AE%98%E6%96%B9%E7%82%B9%E8%B5%9E%E5%85%AC%E5%8F%B8%E7%88%86%E7%82%B8%E6%A2%97%E5%9B%BE%23) `201.8K 🔥` `NEW`
1. [封神2特效 不如AI](https://s.weibo.com/weibo?q=%23%E5%B0%81%E7%A5%9E2%E7%89%B9%E6%95%88%20%E4%B8%8D%E5%A6%82AI%23) `191.9K 🔥` `NEW`
1. [武汉蒜鸟告了蒜鸟](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E8%92%9C%E9%B8%9F%E5%91%8A%E4%BA%86%E8%92%9C%E9%B8%9F%23) `179.8K 🔥` `NEW`
1. [王安宇赵今麦排名不分先后](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E8%B5%B5%E4%BB%8A%E9%BA%A6%E6%8E%92%E5%90%8D%E4%B8%8D%E5%88%86%E5%85%88%E5%90%8E%23) `172.4K 🔥` `NEW`
1. [时代少年团官宣长沙发布会](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%AE%98%E5%AE%A3%E9%95%BF%E6%B2%99%E5%8F%91%E5%B8%83%E4%BC%9A%23) `169.6K 🔥` `NEW`
1. [方圆疑似恋爱](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%9C%86%E7%96%91%E4%BC%BC%E6%81%8B%E7%88%B1%23) `139.3K 🔥` `NEW`
1. [天赐爸爸曾说有退休金不会麻烦子女](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E8%B5%90%E7%88%B8%E7%88%B8%E6%9B%BE%E8%AF%B4%E6%9C%89%E9%80%80%E4%BC%91%E9%87%91%E4%B8%8D%E4%BC%9A%E9%BA%BB%E7%83%A6%E5%AD%90%E5%A5%B3%23) `117.5K 🔥` `NEW`
1. [谢娜 被主持耽误的影后](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%20%E8%A2%AB%E4%B8%BB%E6%8C%81%E8%80%BD%E8%AF%AF%E7%9A%84%E5%BD%B1%E5%90%8E%23) `117.2K 🔥` `NEW`
1. [多位国乒名将祝福孙铭阳](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%BD%8D%E5%9B%BD%E4%B9%92%E5%90%8D%E5%B0%86%E7%A5%9D%E7%A6%8F%E5%AD%99%E9%93%AD%E9%98%B3%23) `113.3K 🔥` `NEW`
1. [金曲奖](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%9B%B2%E5%A5%96%23) `111.6K 🔥` `NEW`
1. [于正回应白鹿争议 (Yu Zheng responds to the Bailu controversy)](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E5%9B%9E%E5%BA%94%E7%99%BD%E9%B9%BF%E4%BA%89%E8%AE%AE%23) `421.6K 🔥`
1. [LA迪士尼偶遇刘亦菲 (Encounter with Liu Yifei at LA Disneyland)](https://s.weibo.com/weibo?q=%23LA%E8%BF%AA%E5%A3%AB%E5%B0%BC%E5%81%B6%E9%81%87%E5%88%98%E4%BA%A6%E8%8F%B2%23) `386.3K 🔥`
1. [在夜市买了一只很可爱的小狗](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%A4%9C%E5%B8%82%E4%B9%B0%E4%BA%86%E4%B8%80%E5%8F%AA%E5%BE%88%E5%8F%AF%E7%88%B1%E7%9A%84%E5%B0%8F%E7%8B%97%23) `216.1K 🔥`
1. [特朗普访华 (Trump's visit to China)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E5%8D%8E%23) `1.4M 🔥` `-54%`
1. [李小冉知道自己笑起来像森碟](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E7%9F%A5%E9%81%93%E8%87%AA%E5%B7%B1%E7%AC%91%E8%B5%B7%E6%9D%A5%E5%83%8F%E6%A3%AE%E7%A2%9F%23) `422.6K 🔥` `-64%`
1. [孙铭阳退出国家队 (Sun Mingyang retires from the national team)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%93%AD%E9%98%B3%E9%80%80%E5%87%BA%E5%9B%BD%E5%AE%B6%E9%98%9F%23) `422.6K 🔥` `-68%`
1. [第一个想到这么赚零花钱的是个天才](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%83%B3%E5%88%B0%E8%BF%99%E4%B9%88%E8%B5%9A%E9%9B%B6%E8%8A%B1%E9%92%B1%E7%9A%84%E6%98%AF%E4%B8%AA%E5%A4%A9%E6%89%8D%23) `197.5K 🔥` `-30%`
1. [追觅创始人俞浩回应崩老头](https://s.weibo.com/weibo?q=%23%E8%BF%BD%E8%A7%85%E5%88%9B%E5%A7%8B%E4%BA%BA%E4%BF%9E%E6%B5%A9%E5%9B%9E%E5%BA%94%E5%B4%A9%E8%80%81%E5%A4%B4%23) `141.5K 🔥` `-60%`
1. [阿云嘎发视频道歉](https://s.weibo.com/weibo?q=%23%E9%98%BF%E4%BA%91%E5%98%8E%E5%8F%91%E8%A7%86%E9%A2%91%E9%81%93%E6%AD%89%23) `137.0K 🔥` `-89%`
1. [若曦原来在浣衣局洗衣服洗了8年](https://s.weibo.com/weibo?q=%23%E8%8B%A5%E6%9B%A6%E5%8E%9F%E6%9D%A5%E5%9C%A8%E6%B5%A3%E8%A1%A3%E5%B1%80%E6%B4%97%E8%A1%A3%E6%9C%8D%E6%B4%97%E4%BA%868%E5%B9%B4%23) `115.2K 🔥` `-62%`

Updated at 2026-05-13 16:07:39

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
