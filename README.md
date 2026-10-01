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

1. [文春爆料后张本智和紧急取关女主播](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%98%A5%E7%88%86%E6%96%99%E5%90%8E%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E7%B4%A7%E6%80%A5%E5%8F%96%E5%85%B3%E5%A5%B3%E4%B8%BB%E6%92%AD%23) `1.1M 🔥` `NEW`
1. [央视国庆晚会阵容发布](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E5%9B%BD%E5%BA%86%E6%99%9A%E4%BC%9A%E9%98%B5%E5%AE%B9%E5%8F%91%E5%B8%83%23) `793.5K 🔥` `NEW`
1. [亲爱的祖国生日快乐](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E7%88%B1%E7%9A%84%E7%A5%96%E5%9B%BD%E7%94%9F%E6%97%A5%E5%BF%AB%E4%B9%90%23) `612.5K 🔥` `NEW`
1. [终于知道小孩为什么不会累了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E5%B0%8F%E5%AD%A9%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E4%BC%9A%E7%B4%AF%E4%BA%86%23) `550.4K 🔥` `NEW`
1. [国外专家评王楚钦处境](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%A4%96%E4%B8%93%E5%AE%B6%E8%AF%84%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%A4%84%E5%A2%83%23) `511.4K 🔥` `NEW`
1. [迪拜航空 空中浩劫](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E6%8B%9C%E8%88%AA%E7%A9%BA%20%E7%A9%BA%E4%B8%AD%E6%B5%A9%E5%8A%AB%23) `438.4K 🔥` `NEW`
1. [大学生喜爱内容共创计划](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%96%9C%E7%88%B1%E5%86%85%E5%AE%B9%E5%85%B1%E5%88%9B%E8%AE%A1%E5%88%92%23) `371.2K 🔥` `NEW`
1. [华为Mate90对决iPhone18](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAMate90%E5%AF%B9%E5%86%B3iPhone18%23) `357.4K 🔥` `NEW`
1. [胡锡进删除AI提示语](https://s.weibo.com/weibo?q=%23%E8%83%A1%E9%94%A1%E8%BF%9B%E5%88%A0%E9%99%A4AI%E6%8F%90%E7%A4%BA%E8%AF%AD%23) `339.0K 🔥` `NEW`
1. [9月份经济景气水平回升](https://s.weibo.com/weibo?q=%239%E6%9C%88%E4%BB%BD%E7%BB%8F%E6%B5%8E%E6%99%AF%E6%B0%94%E6%B0%B4%E5%B9%B3%E5%9B%9E%E5%8D%87%23) `294.7K 🔥` `NEW`
1. [主持人阿丘回应被通报](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E6%8C%81%E4%BA%BA%E9%98%BF%E4%B8%98%E5%9B%9E%E5%BA%94%E8%A2%AB%E9%80%9A%E6%8A%A5%23) `278.0K 🔥` `NEW`
1. [奚梦瑶儿子名字的由来](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%84%BF%E5%AD%90%E5%90%8D%E5%AD%97%E7%9A%84%E7%94%B1%E6%9D%A5%23) `277.8K 🔥` `NEW`
1. [周扬青自曝脸馒化了](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%89%AC%E9%9D%92%E8%87%AA%E6%9B%9D%E8%84%B8%E9%A6%92%E5%8C%96%E4%BA%86%23) `277.3K 🔥` `NEW`
1. [大堵车](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%A0%B5%E8%BD%A6%23) `276.9K 🔥` `NEW`
1. [女装信任市场崩溃商家改用防拆带](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E8%A3%85%E4%BF%A1%E4%BB%BB%E5%B8%82%E5%9C%BA%E5%B4%A9%E6%BA%83%E5%95%86%E5%AE%B6%E6%94%B9%E7%94%A8%E9%98%B2%E6%8B%86%E5%B8%A6%23) `276.6K 🔥` `NEW`
1. [柳州站 电击](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E5%B7%9E%E7%AB%99%20%E7%94%B5%E5%87%BB%23) `276.3K 🔥` `NEW`
1. [奚梦瑶第一胎的脐带是何猷君妈妈剪的](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E7%AC%AC%E4%B8%80%E8%83%8E%E7%9A%84%E8%84%90%E5%B8%A6%E6%98%AF%E4%BD%95%E7%8C%B7%E5%90%9B%E5%A6%88%E5%A6%88%E5%89%AA%E7%9A%84%23) `275.9K 🔥` `NEW`
1. [对王俊凯182的身高有了实感](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E7%8E%8B%E4%BF%8A%E5%87%AF182%E7%9A%84%E8%BA%AB%E9%AB%98%E6%9C%89%E4%BA%86%E5%AE%9E%E6%84%9F%23) `275.4K 🔥` `NEW`
1. [外媒分享迪丽热巴巨C排面](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%AA%92%E5%88%86%E4%BA%AB%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%B7%A8C%E6%8E%92%E9%9D%A2%23) `274.8K 🔥` `NEW`
1. [王石任深石城市更新董事长](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9F%B3%E4%BB%BB%E6%B7%B1%E7%9F%B3%E5%9F%8E%E5%B8%82%E6%9B%B4%E6%96%B0%E8%91%A3%E4%BA%8B%E9%95%BF%23) `274.5K 🔥` `NEW`
1. [公众对江歌妈妈观感复杂](https://s.weibo.com/weibo?q=%23%E5%85%AC%E4%BC%97%E5%AF%B9%E6%B1%9F%E6%AD%8C%E5%A6%88%E5%A6%88%E8%A7%82%E6%84%9F%E5%A4%8D%E6%9D%82%23) `274.4K 🔥` `NEW`
1. [日本拉面店因煮了14年汤底发酵歇业](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%8B%89%E9%9D%A2%E5%BA%97%E5%9B%A0%E7%85%AE%E4%BA%8614%E5%B9%B4%E6%B1%A4%E5%BA%95%E5%8F%91%E9%85%B5%E6%AD%87%E4%B8%9A%23) `273.9K 🔥` `NEW`
1. [房贷贴息与公积金贷款只能二选一](https://s.weibo.com/weibo?q=%23%E6%88%BF%E8%B4%B7%E8%B4%B4%E6%81%AF%E4%B8%8E%E5%85%AC%E7%A7%AF%E9%87%91%E8%B4%B7%E6%AC%BE%E5%8F%AA%E8%83%BD%E4%BA%8C%E9%80%89%E4%B8%80%23) `270.4K 🔥` `NEW`
1. [张家齐吃的粽子是全进华妈妈亲手包的](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%90%83%E7%9A%84%E7%B2%BD%E5%AD%90%E6%98%AF%E5%85%A8%E8%BF%9B%E5%8D%8E%E5%A6%88%E5%A6%88%E4%BA%B2%E6%89%8B%E5%8C%85%E7%9A%84%23) `270.1K 🔥` `NEW`
1. [年轻人都开始把工作和生活隔离了](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E9%83%BD%E5%BC%80%E5%A7%8B%E6%8A%8A%E5%B7%A5%E4%BD%9C%E5%92%8C%E7%94%9F%E6%B4%BB%E9%9A%94%E7%A6%BB%E4%BA%86%23) `255.7K 🔥` `NEW`
1. [王曦雨2比1伊埃拉](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%A6%E9%9B%A82%E6%AF%941%E4%BC%8A%E5%9F%83%E6%8B%89%23) `240.1K 🔥` `NEW`
1. [女装高退货率逼出2.4米防拆丝带](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E8%A3%85%E9%AB%98%E9%80%80%E8%B4%A7%E7%8E%87%E9%80%BC%E5%87%BA2.4%E7%B1%B3%E9%98%B2%E6%8B%86%E4%B8%9D%E5%B8%A6%23) `231.3K 🔥` `NEW`
1. [国庆堵车有人1小时走了500米](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%BA%86%E5%A0%B5%E8%BD%A6%E6%9C%89%E4%BA%BA1%E5%B0%8F%E6%97%B6%E8%B5%B0%E4%BA%86500%E7%B1%B3%23) `222.8K 🔥` `NEW`
1. [中国男排3比0泰国男排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E6%8E%923%E6%AF%940%E6%B3%B0%E5%9B%BD%E7%94%B7%E6%8E%92%23) `222.5K 🔥` `NEW`
1. [瑞士卧铺设计真的可以学一下](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%A3%AB%E5%8D%A7%E9%93%BA%E8%AE%BE%E8%AE%A1%E7%9C%9F%E7%9A%84%E5%8F%AF%E4%BB%A5%E5%AD%A6%E4%B8%80%E4%B8%8B%23) `222.4K 🔥` `NEW`
1. [陈奕恒测速](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E6%B5%8B%E9%80%9F%23) `221.7K 🔥` `NEW`
1. [王楚然吐槽黄景瑜](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%90%90%E6%A7%BD%E9%BB%84%E6%99%AF%E7%91%9C%23) `221.5K 🔥` `NEW`
1. [张凌赫放假七天七个感叹号](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%94%BE%E5%81%87%E4%B8%83%E5%A4%A9%E4%B8%83%E4%B8%AA%E6%84%9F%E5%8F%B9%E5%8F%B7%23) `221.5K 🔥` `NEW`
1. [武汉小米](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E5%B0%8F%E7%B1%B3%23) `221.3K 🔥` `NEW`
1. [李玫瑾说有种人闭眼结婚是福气](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%AB%E7%91%BE%E8%AF%B4%E6%9C%89%E7%A7%8D%E4%BA%BA%E9%97%AD%E7%9C%BC%E7%BB%93%E5%A9%9A%E6%98%AF%E7%A6%8F%E6%B0%94%23) `200.0K 🔥` `NEW`
1. [鸿蒙智行](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%99%E6%99%BA%E8%A1%8C%23) `193.0K 🔥` `NEW`
1. [华为Mate90价格](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAMate90%E4%BB%B7%E6%A0%BC%23) `187.3K 🔥` `NEW`
1. [尚公主](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%23) `182.2K 🔥` `NEW`
1. [甜馨声音好像迪丽热巴](https://s.weibo.com/weibo?q=%23%E7%94%9C%E9%A6%A8%E5%A3%B0%E9%9F%B3%E5%A5%BD%E5%83%8F%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23) `181.1K 🔥` `NEW`
1. [仙逆](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%23) `174.7K 🔥` `NEW`
1. [亚运会网球女单冠军](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E7%BD%91%E7%90%83%E5%A5%B3%E5%8D%95%E5%86%A0%E5%86%9B%23) `174.1K 🔥` `NEW`
1. [留几手为张家齐妈妈发声](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%87%A0%E6%89%8B%E4%B8%BA%E5%BC%A0%E5%AE%B6%E9%BD%90%E5%A6%88%E5%A6%88%E5%8F%91%E5%A3%B0%23) `151.4K 🔥` `NEW`
1. [兰香如故林锦岚下线](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E6%9E%97%E9%94%A6%E5%B2%9A%E4%B8%8B%E7%BA%BF%23) `148.6K 🔥` `NEW`
1. [王曦雨vs伊埃拉](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%A6%E9%9B%A8vs%E4%BC%8A%E5%9F%83%E6%8B%89%23) `144.8K 🔥` `NEW`
1. [C罗 国家队](https://s.weibo.com/weibo?q=%23C%E7%BD%97%20%E5%9B%BD%E5%AE%B6%E9%98%9F%23) `143.6K 🔥` `NEW`
1. [华为Mate90系列溢价](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAMate90%E7%B3%BB%E5%88%97%E6%BA%A2%E4%BB%B7%23) `143.6K 🔥` `NEW`
1. [范丞丞说王楚然大有作为](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E8%AF%B4%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%A4%A7%E6%9C%89%E4%BD%9C%E4%B8%BA%23) `136.8K 🔥` `NEW`
1. [2025年全国结婚登记676.5万对](https://s.weibo.com/weibo?q=%232025%E5%B9%B4%E5%85%A8%E5%9B%BD%E7%BB%93%E5%A9%9A%E7%99%BB%E8%AE%B0676.5%E4%B8%87%E5%AF%B9%23) `129.9K 🔥` `NEW`
1. [鸿蒙智行9月交付37490台](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%99%E6%99%BA%E8%A1%8C9%E6%9C%88%E4%BA%A4%E4%BB%9837490%E5%8F%B0%23) `127.0K 🔥` `NEW`
1. [C罗球迷集体取关葡萄牙](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E7%90%83%E8%BF%B7%E9%9B%86%E4%BD%93%E5%8F%96%E5%85%B3%E8%91%A1%E8%90%84%E7%89%99%23) `126.9K 🔥` `NEW`
1. [小米汽车](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%23) `168.1K 🔥` `-44%`

Updated at 2026-10-01 17:20:48

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
