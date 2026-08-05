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

1. [跟着大国交通看山河中国 (Follow the traffic of great powers to see the mountains and rivers of China)](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E7%9D%80%E5%A4%A7%E5%9B%BD%E4%BA%A4%E9%80%9A%E7%9C%8B%E5%B1%B1%E6%B2%B3%E4%B8%AD%E5%9B%BD%23) `901.9K 🔥` `NEW`
1. [卜冠今吓到我了](https://s.weibo.com/weibo?q=%23%E5%8D%9C%E5%86%A0%E4%BB%8A%E5%90%93%E5%88%B0%E6%88%91%E4%BA%86%23) `901.3K 🔥` `NEW`
1. [余承东回应口误](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E5%9B%9E%E5%BA%94%E5%8F%A3%E8%AF%AF%23) `606.0K 🔥` `NEW`
1. [Meiko力竭了](https://s.weibo.com/weibo?q=%23Meiko%E5%8A%9B%E7%AB%AD%E4%BA%86%23) `504.8K 🔥` `NEW`
1. [高会 TFBOYS联名鞋](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%BC%9A%20TFBOYS%E8%81%94%E5%90%8D%E9%9E%8B%23) `504.4K 🔥` `NEW`
1. [Jennie自曝曾因身材自卑](https://s.weibo.com/weibo?q=%23Jennie%E8%87%AA%E6%9B%9D%E6%9B%BE%E5%9B%A0%E8%BA%AB%E6%9D%90%E8%87%AA%E5%8D%91%23) `504.2K 🔥` `NEW`
1. [费大厨全国小炒肉大王仅凭视频评出](https://s.weibo.com/weibo?q=%23%E8%B4%B9%E5%A4%A7%E5%8E%A8%E5%85%A8%E5%9B%BD%E5%B0%8F%E7%82%92%E8%82%89%E5%A4%A7%E7%8E%8B%E4%BB%85%E5%87%AD%E8%A7%86%E9%A2%91%E8%AF%84%E5%87%BA%23) `503.7K 🔥` `NEW`
1. [严浩翔 破音](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%20%E7%A0%B4%E9%9F%B3%23) `503.5K 🔥` `NEW`
1. [王俊凯 南京](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%20%E5%8D%97%E4%BA%AC%23) `341.0K 🔥` `NEW`
1. [笔试第一被劝出局事件副校长被停职](https://s.weibo.com/weibo?q=%23%E7%AC%94%E8%AF%95%E7%AC%AC%E4%B8%80%E8%A2%AB%E5%8A%9D%E5%87%BA%E5%B1%80%E4%BA%8B%E4%BB%B6%E5%89%AF%E6%A0%A1%E9%95%BF%E8%A2%AB%E5%81%9C%E8%81%8C%23) `311.3K 🔥` `NEW`
1. [金价重回900元大关 (Gold price returns to 900 yuan mark)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E9%87%8D%E5%9B%9E900%E5%85%83%E5%A4%A7%E5%85%B3%23) `309.7K 🔥` `NEW`
1. [严浩翔给我干到科切拉来了](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%BB%99%E6%88%91%E5%B9%B2%E5%88%B0%E7%A7%91%E5%88%87%E6%8B%89%E6%9D%A5%E4%BA%86%23) `309.7K 🔥` `NEW`
1. [女儿考上一本出轨父亲拒付学费](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E8%80%83%E4%B8%8A%E4%B8%80%E6%9C%AC%E5%87%BA%E8%BD%A8%E7%88%B6%E4%BA%B2%E6%8B%92%E4%BB%98%E5%AD%A6%E8%B4%B9%23) `264.4K 🔥` `NEW`
1. [这笔记一看就是真上过班的](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%AC%94%E8%AE%B0%E4%B8%80%E7%9C%8B%E5%B0%B1%E6%98%AF%E7%9C%9F%E4%B8%8A%E8%BF%87%E7%8F%AD%E7%9A%84%23) `248.0K 🔥` `NEW`
1. [你不知道的事](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84%E4%BA%8B%23) `243.0K 🔥` `NEW`
1. [很多人其实不适合运动](https://s.weibo.com/weibo?q=%23%E5%BE%88%E5%A4%9A%E4%BA%BA%E5%85%B6%E5%AE%9E%E4%B8%8D%E9%80%82%E5%90%88%E8%BF%90%E5%8A%A8%23) `240.7K 🔥` `NEW`
1. [张真源无名氏高音好稳](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E6%97%A0%E5%90%8D%E6%B0%8F%E9%AB%98%E9%9F%B3%E5%A5%BD%E7%A8%B3%23) `232.6K 🔥` `NEW`
1. [婚外胚胎案原配首次与第三者当面对质](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E6%A1%88%E5%8E%9F%E9%85%8D%E9%A6%96%E6%AC%A1%E4%B8%8E%E7%AC%AC%E4%B8%89%E8%80%85%E5%BD%93%E9%9D%A2%E5%AF%B9%E8%B4%A8%23) `229.1K 🔥` `NEW`
1. [迪丽热巴直播](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9B%B4%E6%92%AD%23) `192.2K 🔥` `NEW`
1. [宋慧乔少女身材](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%85%A7%E4%B9%94%E5%B0%91%E5%A5%B3%E8%BA%AB%E6%9D%90%23) `186.8K 🔥` `NEW`
1. [慕容清峄牺牲 (Murong Qingyi died)](https://s.weibo.com/weibo?q=%23%E6%85%95%E5%AE%B9%E6%B8%85%E5%B3%84%E7%89%BA%E7%89%B2%23) `184.1K 🔥` `NEW`
1. [婚外胚胎案男方这些问题有待回应](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E6%A1%88%E7%94%B7%E6%96%B9%E8%BF%99%E4%BA%9B%E9%97%AE%E9%A2%98%E6%9C%89%E5%BE%85%E5%9B%9E%E5%BA%94%23) `183.4K 🔥` `NEW`
1. [王艺迪 止藤片](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%89%BA%E8%BF%AA%20%E6%AD%A2%E8%97%A4%E7%89%87%23) `181.1K 🔥` `NEW`
1. [以后下班不说下班了](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%90%8E%E4%B8%8B%E7%8F%AD%E4%B8%8D%E8%AF%B4%E4%B8%8B%E7%8F%AD%E4%BA%86%23) `169.6K 🔥` `NEW`
1. [Wei力挺Meiko](https://s.weibo.com/weibo?q=%23Wei%E5%8A%9B%E6%8C%BAMeiko%23) `148.9K 🔥` `NEW`
1. [马嘉祺solo吉他弹唱果实](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BAsolo%E5%90%89%E4%BB%96%E5%BC%B9%E5%94%B1%E6%9E%9C%E5%AE%9E%23) `147.8K 🔥` `NEW`
1. [胚胎案女儿说陪妈妈过结婚纪念日](https://s.weibo.com/weibo?q=%23%E8%83%9A%E8%83%8E%E6%A1%88%E5%A5%B3%E5%84%BF%E8%AF%B4%E9%99%AA%E5%A6%88%E5%A6%88%E8%BF%87%E7%BB%93%E5%A9%9A%E7%BA%AA%E5%BF%B5%E6%97%A5%23) `137.1K 🔥` `NEW`
1. [老祖宗怎么可以聪明成这样](https://s.weibo.com/weibo?q=%23%E8%80%81%E7%A5%96%E5%AE%97%E6%80%8E%E4%B9%88%E5%8F%AF%E4%BB%A5%E8%81%AA%E6%98%8E%E6%88%90%E8%BF%99%E6%A0%B7%23) `135.8K 🔥` `NEW`
1. [这一秒过火全员be](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E5%85%A8%E5%91%98be%23) `1.7M 🔥` `+572%`
1. [一姐姐在肯德基干了30年](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%A7%90%E5%A7%90%E5%9C%A8%E8%82%AF%E5%BE%B7%E5%9F%BA%E5%B9%B2%E4%BA%8630%E5%B9%B4%23) `922.0K 🔥` `+151%`
1. [成年人的体面是把请客说得很自然 (The decency of adults is to treat guests as a matter of course)](https://s.weibo.com/weibo?q=%23%E6%88%90%E5%B9%B4%E4%BA%BA%E7%9A%84%E4%BD%93%E9%9D%A2%E6%98%AF%E6%8A%8A%E8%AF%B7%E5%AE%A2%E8%AF%B4%E5%BE%97%E5%BE%88%E8%87%AA%E7%84%B6%23) `794.8K 🔥` `+107%`
1. [时代少年团演唱会节目单](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%BC%94%E5%94%B1%E4%BC%9A%E8%8A%82%E7%9B%AE%E5%8D%95%23) `563.3K 🔥` `+166%`
1. [泸溪河 废油 (Luxi River waste oil)](https://s.weibo.com/weibo?q=%23%E6%B3%B8%E6%BA%AA%E6%B2%B3%20%E5%BA%9F%E6%B2%B9%23) `507.6K 🔥` `+61%`
1. [你常吃的兰州拉面要改名了](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%B8%B8%E5%90%83%E7%9A%84%E5%85%B0%E5%B7%9E%E6%8B%89%E9%9D%A2%E8%A6%81%E6%94%B9%E5%90%8D%E4%BA%86%23) `356.2K 🔥` `+52%`
1. [卫生院回应针头完全扎进宝宝胳膊](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E7%94%9F%E9%99%A2%E5%9B%9E%E5%BA%94%E9%92%88%E5%A4%B4%E5%AE%8C%E5%85%A8%E6%89%8E%E8%BF%9B%E5%AE%9D%E5%AE%9D%E8%83%B3%E8%86%8A%23) `243.3K 🔥` `+54%`
1. [刘耀文拍了正太扭腰](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E6%8B%8D%E4%BA%86%E6%AD%A3%E5%A4%AA%E6%89%AD%E8%85%B0%23) `318.3K 🔥`
1. [玩具公司签67亿元算力大单](https://s.weibo.com/weibo?q=%23%E7%8E%A9%E5%85%B7%E5%85%AC%E5%8F%B8%E7%AD%BE67%E4%BA%BF%E5%85%83%E7%AE%97%E5%8A%9B%E5%A4%A7%E5%8D%95%23) `270.5K 🔥`
1. [白鹿给高海宁指树上的代拍](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%BB%99%E9%AB%98%E6%B5%B7%E5%AE%81%E6%8C%87%E6%A0%91%E4%B8%8A%E7%9A%84%E4%BB%A3%E6%8B%8D%23) `153.8K 🔥`
1. [苹果要求长鑫降价反遭涨价 (Apple asked Changxin to cut prices but got a price increase)](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E8%A6%81%E6%B1%82%E9%95%BF%E9%91%AB%E9%99%8D%E4%BB%B7%E5%8F%8D%E9%81%AD%E6%B6%A8%E4%BB%B7%23) `573.4K 🔥` `-59%`
1. [AI做的动物尺度太大了](https://s.weibo.com/weibo?q=%23AI%E5%81%9A%E7%9A%84%E5%8A%A8%E7%89%A9%E5%B0%BA%E5%BA%A6%E5%A4%AA%E5%A4%A7%E4%BA%86%23) `425.0K 🔥` `-52%`
1. [丈夫称已销毁胚胎妻子不知情](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E7%A7%B0%E5%B7%B2%E9%94%80%E6%AF%81%E8%83%9A%E8%83%8E%E5%A6%BB%E5%AD%90%E4%B8%8D%E7%9F%A5%E6%83%85%23) `309.6K 🔥` `-34%`
1. [官方通报赛格商场坠亡事件](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E8%B5%9B%E6%A0%BC%E5%95%86%E5%9C%BA%E5%9D%A0%E4%BA%A1%E4%BA%8B%E4%BB%B6%23) `258.1K 🔥` `-30%`
1. [范丞丞没胖但肌肉快掉没了 (Fan Chengcheng is not fat but his muscles are almost gone)](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E6%B2%A1%E8%83%96%E4%BD%86%E8%82%8C%E8%82%89%E5%BF%AB%E6%8E%89%E6%B2%A1%E4%BA%86%23) `199.0K 🔥` `-25%`
1. [千山茶客 新文](https://s.weibo.com/weibo?q=%23%E5%8D%83%E5%B1%B1%E8%8C%B6%E5%AE%A2%20%E6%96%B0%E6%96%87%23) `186.9K 🔥` `-50%`
1. [华妃一个月吃了60斤鸡蛋500条鱼 (Concubine Hua ate 60 pounds of eggs and 500 fish in one month)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E5%A6%83%E4%B8%80%E4%B8%AA%E6%9C%88%E5%90%83%E4%BA%8660%E6%96%A4%E9%B8%A1%E8%9B%8B500%E6%9D%A1%E9%B1%BC%23) `183.1K 🔥` `-49%`
1. [怪不得淋雨后要洗澡换衣服](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E6%B7%8B%E9%9B%A8%E5%90%8E%E8%A6%81%E6%B4%97%E6%BE%A1%E6%8D%A2%E8%A1%A3%E6%9C%8D%23) `171.6K 🔥` `-57%`
1. [云旗 锅有点沉](https://s.weibo.com/weibo?q=%23%E4%BA%91%E6%97%97%20%E9%94%85%E6%9C%89%E7%82%B9%E6%B2%89%23) `168.0K 🔥` `-54%`
1. [其实已经过上普通人里最好的生活](https://s.weibo.com/weibo?q=%23%E5%85%B6%E5%AE%9E%E5%B7%B2%E7%BB%8F%E8%BF%87%E4%B8%8A%E6%99%AE%E9%80%9A%E4%BA%BA%E9%87%8C%E6%9C%80%E5%A5%BD%E7%9A%84%E7%94%9F%E6%B4%BB%23) `144.1K 🔥` `-45%`
1. [TheShy力挺Meiko (TheShy supports Meiko)](https://s.weibo.com/weibo?q=%23TheShy%E5%8A%9B%E6%8C%BAMeiko%23) `135.9K 🔥` `-34%`
1. [这一秒过火大结局](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E5%A4%A7%E7%BB%93%E5%B1%80%23) `135.7K 🔥` `-66%`

Updated at 2026-08-05 21:26:11

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
