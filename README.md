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

1. [陈瑶没成团 (Chen Yao did not form a group)](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E6%B2%A1%E6%88%90%E5%9B%A2%23) `18.4M 🔥` `NEW`
1. [浪姐成团名单](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%88%90%E5%9B%A2%E5%90%8D%E5%8D%95%23) `11.3M 🔥` `NEW`
1. [曾沛慈总冠军](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E6%80%BB%E5%86%A0%E5%86%9B%23) `8.6M 🔥` `NEW`
1. [AG被RW零封](https://s.weibo.com/weibo?q=%23AG%E8%A2%ABRW%E9%9B%B6%E5%B0%81%23) `617.1K 🔥` `NEW`
1. [浪姐台下都在喊陈瑶](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%8F%B0%E4%B8%8B%E9%83%BD%E5%9C%A8%E5%96%8A%E9%99%88%E7%91%B6%23) `552.6K 🔥` `NEW`
1. [徐梦洁没成团](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%B4%81%E6%B2%A1%E6%88%90%E5%9B%A2%23) `522.3K 🔥` `NEW`
1. [毒贩悬赏缉毒警人头一颗200万](https://s.weibo.com/weibo?q=%23%E6%AF%92%E8%B4%A9%E6%82%AC%E8%B5%8F%E7%BC%89%E6%AF%92%E8%AD%A6%E4%BA%BA%E5%A4%B4%E4%B8%80%E9%A2%97200%E4%B8%87%23) `520.3K 🔥` `NEW`
1. [浴室玻璃炸了酒店反让顾客赔偿](https://s.weibo.com/weibo?q=%23%E6%B5%B4%E5%AE%A4%E7%8E%BB%E7%92%83%E7%82%B8%E4%BA%86%E9%85%92%E5%BA%97%E5%8F%8D%E8%AE%A9%E9%A1%BE%E5%AE%A2%E8%B5%94%E5%81%BF%23) `518.8K 🔥` `NEW`
1. [泰17岁少女遭外国男子谋杀抛裸尸](https://s.weibo.com/weibo?q=%23%E6%B3%B017%E5%B2%81%E5%B0%91%E5%A5%B3%E9%81%AD%E5%A4%96%E5%9B%BD%E7%94%B7%E5%AD%90%E8%B0%8B%E6%9D%80%E6%8A%9B%E8%A3%B8%E5%B0%B8%23) `518.3K 🔥` `NEW`
1. [浪姐总决赛 节奏好快](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%80%BB%E5%86%B3%E8%B5%9B%20%E8%8A%82%E5%A5%8F%E5%A5%BD%E5%BF%AB%23) `517.4K 🔥` `NEW`
1. [浪姐排名 (Sister Lang ranking)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%8E%92%E5%90%8D%23) `516.6K 🔥` `NEW`
1. [大众计划裁员10万人 关闭4家德国工厂](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BC%97%E8%AE%A1%E5%88%92%E8%A3%81%E5%91%9810%E4%B8%87%E4%BA%BA%20%E5%85%B3%E9%97%AD4%E5%AE%B6%E5%BE%B7%E5%9B%BD%E5%B7%A5%E5%8E%82%23) `514.0K 🔥` `NEW`
1. [徐洁儿妥协被换了](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B4%81%E5%84%BF%E5%A6%A5%E5%8D%8F%E8%A2%AB%E6%8D%A2%E4%BA%86%23) `513.0K 🔥` `NEW`
1. [CMG中国影视之夜](https://s.weibo.com/weibo?q=%23CMG%E4%B8%AD%E5%9B%BD%E5%BD%B1%E8%A7%86%E4%B9%8B%E5%A4%9C%23) `512.4K 🔥` `NEW`
1. [张月年度队长](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E5%B9%B4%E5%BA%A6%E9%98%9F%E9%95%BF%23) `510.5K 🔥` `NEW`
1. [金曲奖获奖名单](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%9B%B2%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%23) `508.4K 🔥` `NEW`
1. [迪丽热巴山顶居家票](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%B1%B1%E9%A1%B6%E5%B1%85%E5%AE%B6%E7%A5%A8%23) `507.3K 🔥` `NEW`
1. [被电瓶烧伤大学生判赔151万仅获1万](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%94%B5%E7%93%B6%E7%83%A7%E4%BC%A4%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%88%A4%E8%B5%94151%E4%B8%87%E4%BB%85%E8%8E%B71%E4%B8%87%23) `506.8K 🔥` `NEW`
1. [曾沛慈唱哭了](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%94%B1%E5%93%AD%E4%BA%86%23) `506.2K 🔥` `NEW`
1. [伊朗球员称这届世界杯是场灾难](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%90%83%E5%91%98%E7%A7%B0%E8%BF%99%E5%B1%8A%E4%B8%96%E7%95%8C%E6%9D%AF%E6%98%AF%E5%9C%BA%E7%81%BE%E9%9A%BE%23) `504.4K 🔥` `NEW`
1. [周深伴舞上班还得哄老板 (Zhou Shen works as a dancer and has to coax his boss)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E4%BC%B4%E8%88%9E%E4%B8%8A%E7%8F%AD%E8%BF%98%E5%BE%97%E5%93%84%E8%80%81%E6%9D%BF%23) `503.3K 🔥` `NEW`
1. [庄法没成团](https://s.weibo.com/weibo?q=%23%E5%BA%84%E6%B3%95%E6%B2%A1%E6%88%90%E5%9B%A2%23) `503.0K 🔥` `NEW`
1. [李宇春唱出了王家卫电影感](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%87%E6%98%A5%E5%94%B1%E5%87%BA%E4%BA%86%E7%8E%8B%E5%AE%B6%E5%8D%AB%E7%94%B5%E5%BD%B1%E6%84%9F%23) `501.9K 🔥` `NEW`
1. [山东泰山](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E6%B3%B0%E5%B1%B1%23) `501.2K 🔥` `NEW`
1. [王玉雯晒和娜扎孔雪儿合照](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E6%99%92%E5%92%8C%E5%A8%9C%E6%89%8E%E5%AD%94%E9%9B%AA%E5%84%BF%E5%90%88%E7%85%A7%23) `500.9K 🔥` `NEW`
1. [女子买到烂尾楼7年没见房也不退钱](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B9%B0%E5%88%B0%E7%83%82%E5%B0%BE%E6%A5%BC7%E5%B9%B4%E6%B2%A1%E8%A7%81%E6%88%BF%E4%B9%9F%E4%B8%8D%E9%80%80%E9%92%B1%23) `492.9K 🔥` `NEW`
1. [韩母亲杀儿子让前男友侄子冒名上学](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%AF%8D%E4%BA%B2%E6%9D%80%E5%84%BF%E5%AD%90%E8%AE%A9%E5%89%8D%E7%94%B7%E5%8F%8B%E4%BE%84%E5%AD%90%E5%86%92%E5%90%8D%E4%B8%8A%E5%AD%A6%23) `489.9K 🔥` `NEW`
1. [F1](https://s.weibo.com/weibo?q=%23F1%23) `484.4K 🔥` `NEW`
1. [华为乾崑助力全新猛士M817上市 (Huawei Qiankun helps launch the new Warrior M817)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91%E5%8A%A9%E5%8A%9B%E5%85%A8%E6%96%B0%E7%8C%9B%E5%A3%ABM817%E4%B8%8A%E5%B8%82%23) `7.5M 🔥` `+765%`
1. [中国机电产品加速出海](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%9C%BA%E7%94%B5%E4%BA%A7%E5%93%81%E5%8A%A0%E9%80%9F%E5%87%BA%E6%B5%B7%23) `1.8M 🔥` `+88%`
1. [吴艳妮12秒99夺冠](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%89%B3%E5%A6%AE12%E7%A7%9299%E5%A4%BA%E5%86%A0%23) `1.3M 🔥` `+163%`
1. [通过衣服吊牌看成本价的方法 (How to check the cost price through clothing tags)](https://s.weibo.com/weibo?q=%23%E9%80%9A%E8%BF%87%E8%A1%A3%E6%9C%8D%E5%90%8A%E7%89%8C%E7%9C%8B%E6%88%90%E6%9C%AC%E4%BB%B7%E7%9A%84%E6%96%B9%E6%B3%95%23) `509.4K 🔥` `+42%`
1. [高敏感人都去学农吧](https://s.weibo.com/weibo?q=%23%E9%AB%98%E6%95%8F%E6%84%9F%E4%BA%BA%E9%83%BD%E5%8E%BB%E5%AD%A6%E5%86%9C%E5%90%A7%23) `561.3K 🔥`
1. [杨紫粉底液](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%B2%89%E5%BA%95%E6%B6%B2%23) `541.5K 🔥`
1. [高考分数](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%88%86%E6%95%B0%23) `525.0K 🔥`
1. [金曲奖](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%9B%B2%E5%A5%96%23) `524.5K 🔥`
1. [奔驰取消德国9万名员工年终奖](https://s.weibo.com/weibo?q=%23%E5%A5%94%E9%A9%B0%E5%8F%96%E6%B6%88%E5%BE%B7%E5%9B%BD9%E4%B8%87%E5%90%8D%E5%91%98%E5%B7%A5%E5%B9%B4%E7%BB%88%E5%A5%96%23) `523.7K 🔥`
1. [欧洲极端高温热死15000人](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E6%B4%B2%E6%9E%81%E7%AB%AF%E9%AB%98%E6%B8%A9%E7%83%AD%E6%AD%BB15000%E4%BA%BA%23) `523.3K 🔥`
1. [北大哲学系主任的毕业致辞火了](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%A4%A7%E5%93%B2%E5%AD%A6%E7%B3%BB%E4%B8%BB%E4%BB%BB%E7%9A%84%E6%AF%95%E4%B8%9A%E8%87%B4%E8%BE%9E%E7%81%AB%E4%BA%86%23) `521.8K 🔥`
1. [李小冉 假拉](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E5%81%87%E6%8B%89%23) `519.6K 🔥`
1. [AG对战RW](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98RW%23) `515.1K 🔥`
1. [日方对辽宁舰编队滋扰发生重大变化 (Japan’s harassment of the Liaoning fleet has undergone major changes)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%96%B9%E5%AF%B9%E8%BE%BD%E5%AE%81%E8%88%B0%E7%BC%96%E9%98%9F%E6%BB%8B%E6%89%B0%E5%8F%91%E7%94%9F%E9%87%8D%E5%A4%A7%E5%8F%98%E5%8C%96%23) `511.6K 🔥`
1. [穆祉丞恋人](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E6%81%8B%E4%BA%BA%23) `495.3K 🔥`
1. [去家务化意识](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E5%AE%B6%E5%8A%A1%E5%8C%96%E6%84%8F%E8%AF%86%23) `480.8K 🔥`
1. [韩国第8 (South Korea 8th)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%AC%AC8%23) `477.0K 🔥`
1. [浪姐总决赛](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%80%BB%E5%86%B3%E8%B5%9B%23) `1.6M 🔥` `-55%`
1. [不穿的衣服可以拿来挂耳环](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E7%A9%BF%E7%9A%84%E8%A1%A3%E6%9C%8D%E5%8F%AF%E4%BB%A5%E6%8B%BF%E6%9D%A5%E6%8C%82%E8%80%B3%E7%8E%AF%23) `594.5K 🔥` `-33%`
1. [班主任说要解散班级群 (The class teacher said that the class group will be disbanded)](https://s.weibo.com/weibo?q=%23%E7%8F%AD%E4%B8%BB%E4%BB%BB%E8%AF%B4%E8%A6%81%E8%A7%A3%E6%95%A3%E7%8F%AD%E7%BA%A7%E7%BE%A4%23) `590.0K 🔥` `-30%`
1. [王濛李小冉和结婚有什么区别](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E6%9D%8E%E5%B0%8F%E5%86%89%E5%92%8C%E7%BB%93%E5%A9%9A%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB%23) `516.1K 🔥` `-45%`
1. [浪姐 依旧难听 (Sister Lang is still ugly)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%20%E4%BE%9D%E6%97%A7%E9%9A%BE%E5%90%AC%23) `509.8K 🔥` `-60%`

Updated at 2026-06-27 23:05:35

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
