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

1. [住酒店不带毛巾的人天塌了 (If you stay in a hotel without a towel, the sky is falling.)](https://s.weibo.com/weibo?q=%23%E4%BD%8F%E9%85%92%E5%BA%97%E4%B8%8D%E5%B8%A6%E6%AF%9B%E5%B7%BE%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `701.5K 🔥` `NEW`
1. [杀害发小男子称认罪但不后悔](https://s.weibo.com/weibo?q=%23%E6%9D%80%E5%AE%B3%E5%8F%91%E5%B0%8F%E7%94%B7%E5%AD%90%E7%A7%B0%E8%AE%A4%E7%BD%AA%E4%BD%86%E4%B8%8D%E5%90%8E%E6%82%94%23) `465.7K 🔥` `NEW`
1. [今日辟谣](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E6%97%A5%E8%BE%9F%E8%B0%A3%23) `392.2K 🔥` `NEW`
1. [物业大撤退](https://s.weibo.com/weibo?q=%23%E7%89%A9%E4%B8%9A%E5%A4%A7%E6%92%A4%E9%80%80%23) `380.2K 🔥` `NEW`
1. [王濛 组内唯一大vocal](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%20%E7%BB%84%E5%86%85%E5%94%AF%E4%B8%80%E5%A4%A7vocal%23) `324.7K 🔥` `NEW`
1. [婚前房产婚后加名离婚时能对半分吗](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%89%8D%E6%88%BF%E4%BA%A7%E5%A9%9A%E5%90%8E%E5%8A%A0%E5%90%8D%E7%A6%BB%E5%A9%9A%E6%97%B6%E8%83%BD%E5%AF%B9%E5%8D%8A%E5%88%86%E5%90%97%23) `195.2K 🔥` `NEW`
1. [孙怡 幼态脸高妹](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%20%E5%B9%BC%E6%80%81%E8%84%B8%E9%AB%98%E5%A6%B9%23) `191.8K 🔥` `NEW`
1. [好仙的刘诗诗](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E4%BB%99%E7%9A%84%E5%88%98%E8%AF%97%E8%AF%97%23) `147.6K 🔥` `NEW`
1. [田曦薇飞吻](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E9%A3%9E%E5%90%BB%23) `136.6K 🔥` `NEW`
1. [救护车截单延误抢救致病人死亡](https://s.weibo.com/weibo?q=%23%E6%95%91%E6%8A%A4%E8%BD%A6%E6%88%AA%E5%8D%95%E5%BB%B6%E8%AF%AF%E6%8A%A2%E6%95%91%E8%87%B4%E7%97%85%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `120.7K 🔥` `NEW`
1. [美国杀人分尸19岁少年专杀性犯罪者 (19-year-old boy in the US kills and dismembers sex offenders)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%9D%80%E4%BA%BA%E5%88%86%E5%B0%B819%E5%B2%81%E5%B0%91%E5%B9%B4%E4%B8%93%E6%9D%80%E6%80%A7%E7%8A%AF%E7%BD%AA%E8%80%85%23) `120.0K 🔥` `NEW`
1. [十日终焉](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `118.3K 🔥` `NEW`
1. [穆祉丞 代言](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%20%E4%BB%A3%E8%A8%80%23) `115.9K 🔥` `NEW`
1. [低血糖假性饥饿](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E8%A1%80%E7%B3%96%E5%81%87%E6%80%A7%E9%A5%A5%E9%A5%BF%23) `115.8K 🔥` `NEW`
1. [谢楠表情 母爱如山](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E6%A5%A0%E8%A1%A8%E6%83%85%20%E6%AF%8D%E7%88%B1%E5%A6%82%E5%B1%B1%23) `113.5K 🔥` `NEW`
1. [伊朗称除了投降敌人已无路可走](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E9%99%A4%E4%BA%86%E6%8A%95%E9%99%8D%E6%95%8C%E4%BA%BA%E5%B7%B2%E6%97%A0%E8%B7%AF%E5%8F%AF%E8%B5%B0%23) `109.1K 🔥` `NEW`
1. [假名媛弄坏真千金68000元的紫貂皮草](https://s.weibo.com/weibo?q=%23%E5%81%87%E5%90%8D%E5%AA%9B%E5%BC%84%E5%9D%8F%E7%9C%9F%E5%8D%83%E9%87%9168000%E5%85%83%E7%9A%84%E7%B4%AB%E8%B2%82%E7%9A%AE%E8%8D%89%23) `108.9K 🔥` `NEW`
1. [中方回应伊朗拒绝解封霍尔木兹海峡](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E4%BC%8A%E6%9C%97%E6%8B%92%E7%BB%9D%E8%A7%A3%E5%B0%81%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%23) `108.8K 🔥` `NEW`
1. [特朗普提出停火或是脱身之计](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%8F%90%E5%87%BA%E5%81%9C%E7%81%AB%E6%88%96%E6%98%AF%E8%84%B1%E8%BA%AB%E4%B9%8B%E8%AE%A1%23) `98.7K 🔥` `NEW`
1. [王毅将访问朝鲜](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AF%85%E5%B0%86%E8%AE%BF%E9%97%AE%E6%9C%9D%E9%B2%9C%23) `87.6K 🔥` `NEW`
1. [安崎表现力 (An Qi expressiveness)](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%B4%8E%E8%A1%A8%E7%8E%B0%E5%8A%9B%23) `87.1K 🔥` `NEW`
1. [A股放量8201亿](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%94%BE%E9%87%8F8201%E4%BA%BF%23) `85.7K 🔥` `NEW`
1. [张杰晒粉丝对于演唱会的评论](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E6%99%92%E7%B2%89%E4%B8%9D%E5%AF%B9%E4%BA%8E%E6%BC%94%E5%94%B1%E4%BC%9A%E7%9A%84%E8%AF%84%E8%AE%BA%23) `85.5K 🔥` `NEW`
1. [美媒称伊朗阿曼将收霍尔木兹通行费](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AA%92%E7%A7%B0%E4%BC%8A%E6%9C%97%E9%98%BF%E6%9B%BC%E5%B0%86%E6%94%B6%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E9%80%9A%E8%A1%8C%E8%B4%B9%23) `85.4K 🔥` `NEW`
1. [杨紫cha复仇摇](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%ABcha%E5%A4%8D%E4%BB%87%E6%91%87%23) `85.4K 🔥` `NEW`
1. [以军宣布暂停打击伊朗](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E5%AE%A3%E5%B8%83%E6%9A%82%E5%81%9C%E6%89%93%E5%87%BB%E4%BC%8A%E6%9C%97%23) `83.7K 🔥` `NEW`
1. [Rookie继续缺席比赛](https://s.weibo.com/weibo?q=%23Rookie%E7%BB%A7%E7%BB%AD%E7%BC%BA%E5%B8%AD%E6%AF%94%E8%B5%9B%23) `83.5K 🔥` `NEW`
1. [村民蓄水池被投百草枯](https://s.weibo.com/weibo?q=%23%E6%9D%91%E6%B0%91%E8%93%84%E6%B0%B4%E6%B1%A0%E8%A2%AB%E6%8A%95%E7%99%BE%E8%8D%89%E6%9E%AF%23) `83.0K 🔥` `NEW`
1. [长寿运动排行榜出炉](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%AF%BF%E8%BF%90%E5%8A%A8%E6%8E%92%E8%A1%8C%E6%A6%9C%E5%87%BA%E7%82%89%23) `82.6K 🔥` `NEW`
1. [中医点赞莫氏鸡煲配方](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%8C%BB%E7%82%B9%E8%B5%9E%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E9%85%8D%E6%96%B9%23) `79.7K 🔥` `NEW`
1. [咪很不高兴为您服务 (I'm not happy to serve you)](https://s.weibo.com/weibo?q=%23%E5%92%AA%E5%BE%88%E4%B8%8D%E9%AB%98%E5%85%B4%E4%B8%BA%E6%82%A8%E6%9C%8D%E5%8A%A1%23) `79.4K 🔥` `NEW`
1. [宇文玥捞上来了](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%96%87%E7%8E%A5%E6%8D%9E%E4%B8%8A%E6%9D%A5%E4%BA%86%23) `1.1M 🔥` `+101%`
1. [美军大批F35将入驻日本三泽基地](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E5%A4%A7%E6%89%B9F35%E5%B0%86%E5%85%A5%E9%A9%BB%E6%97%A5%E6%9C%AC%E4%B8%89%E6%B3%BD%E5%9F%BA%E5%9C%B0%23) `797.6K 🔥` `+308%`
1. [12人花30万买月薪2500的高铁工作](https://s.weibo.com/weibo?q=%2312%E4%BA%BA%E8%8A%B130%E4%B8%87%E4%B9%B0%E6%9C%88%E8%96%AA2500%E7%9A%84%E9%AB%98%E9%93%81%E5%B7%A5%E4%BD%9C%23) `654.5K 🔥` `+299%`
1. [人民币汇率也大涨](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E5%B8%81%E6%B1%87%E7%8E%87%E4%B9%9F%E5%A4%A7%E6%B6%A8%23) `196.2K 🔥` `+79%`
1. [春假撞怀清明春日消费火力全开 (Spring break makes me pregnant during Qingming Festival, and spring consumption is on full swing)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E5%81%87%E6%92%9E%E6%80%80%E6%B8%85%E6%98%8E%E6%98%A5%E6%97%A5%E6%B6%88%E8%B4%B9%E7%81%AB%E5%8A%9B%E5%85%A8%E5%BC%80%23) `708.0K 🔥`
1. [华为乾崑大六座华境S开启预订 (Huawei’s six-seat Huajing S in Qiankun University is now available for pre-order)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91%E5%A4%A7%E5%85%AD%E5%BA%A7%E5%8D%8E%E5%A2%83S%E5%BC%80%E5%90%AF%E9%A2%84%E8%AE%A2%23) `704.9K 🔥`
1. [浪姐史上最难听的小考](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%8F%B2%E4%B8%8A%E6%9C%80%E9%9A%BE%E5%90%AC%E7%9A%84%E5%B0%8F%E8%80%83%23) `195.8K 🔥`
1. [金子涵 再逼我就把所有的都说出来](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%20%E5%86%8D%E9%80%BC%E6%88%91%E5%B0%B1%E6%8A%8A%E6%89%80%E6%9C%89%E7%9A%84%E9%83%BD%E8%AF%B4%E5%87%BA%E6%9D%A5%23) `195.7K 🔥`
1. [刘思维当爸爸了](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%80%9D%E7%BB%B4%E5%BD%93%E7%88%B8%E7%88%B8%E4%BA%86%23) `194.1K 🔥`
1. [伊美双方停火生效](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E7%BE%8E%E5%8F%8C%E6%96%B9%E5%81%9C%E7%81%AB%E7%94%9F%E6%95%88%23) `173.0K 🔥`
1. [粉色蓝莓](https://s.weibo.com/weibo?q=%23%E7%B2%89%E8%89%B2%E8%93%9D%E8%8E%93%23) `121.6K 🔥` `-26%`
1. [779元滴眼液暴涨至3382元 (Eye drops priced at 779 yuan soared to 3382 yuan)](https://s.weibo.com/weibo?q=%23779%E5%85%83%E6%BB%B4%E7%9C%BC%E6%B6%B2%E6%9A%B4%E6%B6%A8%E8%87%B33382%E5%85%83%23) `120.8K 🔥` `-85%`
1. [徐艺洋回应黄子韬身体状况 (Xu Yiyang responded to Huang Zitao’s physical condition)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E5%9B%9E%E5%BA%94%E9%BB%84%E5%AD%90%E9%9F%AC%E8%BA%AB%E4%BD%93%E7%8A%B6%E5%86%B5%23) `118.8K 🔥` `-28%`
1. [女子孕期得知丈夫出轨20余人 (Woman learns her husband cheated on more than 20 people during pregnancy)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%AD%95%E6%9C%9F%E5%BE%97%E7%9F%A5%E4%B8%88%E5%A4%AB%E5%87%BA%E8%BD%A820%E4%BD%99%E4%BA%BA%23) `117.4K 🔥` `-29%`
1. [冰湖重生开局0广](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E5%BC%80%E5%B1%800%E5%B9%BF%23) `116.6K 🔥` `-89%`
1. [江语晨小考突然离场 (Jiang Yuchen suddenly left the quiz)](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%E5%B0%8F%E8%80%83%E7%AA%81%E7%84%B6%E7%A6%BB%E5%9C%BA%23) `112.1K 🔥` `-32%`
1. [大艺术家 不敢听](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%89%BA%E6%9C%AF%E5%AE%B6%20%E4%B8%8D%E6%95%A2%E5%90%AC%23) `108.8K 🔥` `-34%`
1. [赵今麦超短发大片](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E8%B6%85%E7%9F%AD%E5%8F%91%E5%A4%A7%E7%89%87%23) `108.4K 🔥` `-34%`
1. [午睡悲伤综合征 (Nap Sad Syndrome)](https://s.weibo.com/weibo?q=%23%E5%8D%88%E7%9D%A1%E6%82%B2%E4%BC%A4%E7%BB%BC%E5%90%88%E5%BE%81%23) `96.1K 🔥` `-42%`
1. [吴磊成首登祖国杂志封面艺人](https://s.weibo.com/weibo?q=%23%E5%90%B4%E7%A3%8A%E6%88%90%E9%A6%96%E7%99%BB%E7%A5%96%E5%9B%BD%E6%9D%82%E5%BF%97%E5%B0%81%E9%9D%A2%E8%89%BA%E4%BA%BA%23) `92.8K 🔥` `-32%`
1. [因二胎儿子随妻姓丈夫起诉离婚](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E4%BA%8C%E8%83%8E%E5%84%BF%E5%AD%90%E9%9A%8F%E5%A6%BB%E5%A7%93%E4%B8%88%E5%A4%AB%E8%B5%B7%E8%AF%89%E7%A6%BB%E5%A9%9A%23) `81.7K 🔥` `-50%`

Updated at 2026-04-08 16:43:03

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
