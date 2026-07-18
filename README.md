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

1. [一念江南赵今麦路透 (One Thought of Jiangnan Zhao Jinmai Reuters)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%E8%B5%B5%E4%BB%8A%E9%BA%A6%E8%B7%AF%E9%80%8F%23) `760.3K 🔥` `NEW`
1. [千问AI眼镜全面进化](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AEAI%E7%9C%BC%E9%95%9C%E5%85%A8%E9%9D%A2%E8%BF%9B%E5%8C%96%23) `740.8K 🔥` `NEW`
1. [为什么要给美甲师点奶茶](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E7%BB%99%E7%BE%8E%E7%94%B2%E5%B8%88%E7%82%B9%E5%A5%B6%E8%8C%B6%23) `733.3K 🔥` `NEW`
1. [王俊凯伴手礼](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%BC%B4%E6%89%8B%E7%A4%BC%23) `495.5K 🔥` `NEW`
1. [16岁女儿诬告父亲性侵称因管教太严](https://s.weibo.com/weibo?q=%2316%E5%B2%81%E5%A5%B3%E5%84%BF%E8%AF%AC%E5%91%8A%E7%88%B6%E4%BA%B2%E6%80%A7%E4%BE%B5%E7%A7%B0%E5%9B%A0%E7%AE%A1%E6%95%99%E5%A4%AA%E4%B8%A5%23) `463.4K 🔥` `NEW`
1. [上海通报申思涉嫌打骂小球员](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E9%80%9A%E6%8A%A5%E7%94%B3%E6%80%9D%E6%B6%89%E5%AB%8C%E6%89%93%E9%AA%82%E5%B0%8F%E7%90%83%E5%91%98%23) `457.5K 🔥` `NEW`
1. [蚊子换奶茶](https://s.weibo.com/weibo?q=%23%E8%9A%8A%E5%AD%90%E6%8D%A2%E5%A5%B6%E8%8C%B6%23) `450.6K 🔥` `NEW`
1. [三甲医生回应新冠又来了](https://s.weibo.com/weibo?q=%23%E4%B8%89%E7%94%B2%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E6%96%B0%E5%86%A0%E5%8F%88%E6%9D%A5%E4%BA%86%23) `447.9K 🔥` `NEW`
1. [一念江南](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%23) `361.1K 🔥` `NEW`
1. [张凌赫新剧前任打了现任](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%96%B0%E5%89%A7%E5%89%8D%E4%BB%BB%E6%89%93%E4%BA%86%E7%8E%B0%E4%BB%BB%23) `300.0K 🔥` `NEW`
1. [印度总理呼吁民众自觉讲卫生 (Indian Prime Minister calls on people to consciously practice hygiene)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E6%80%BB%E7%90%86%E5%91%BC%E5%90%81%E6%B0%91%E4%BC%97%E8%87%AA%E8%A7%89%E8%AE%B2%E5%8D%AB%E7%94%9F%23) `296.2K 🔥` `NEW`
1. [小酒窝获中韩国际声乐比赛一等奖](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E8%8E%B7%E4%B8%AD%E9%9F%A9%E5%9B%BD%E9%99%85%E5%A3%B0%E4%B9%90%E6%AF%94%E8%B5%9B%E4%B8%80%E7%AD%89%E5%A5%96%23) `296.2K 🔥` `NEW`
1. [王安宇一念江南路透](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%E8%B7%AF%E9%80%8F%23) `272.1K 🔥` `NEW`
1. [40天花2万精装了131平的家](https://s.weibo.com/weibo?q=%2340%E5%A4%A9%E8%8A%B12%E4%B8%87%E7%B2%BE%E8%A3%85%E4%BA%86131%E5%B9%B3%E7%9A%84%E5%AE%B6%23) `267.0K 🔥` `NEW`
1. [邹市明拒绝上海户口说我是贵州人](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E%E6%8B%92%E7%BB%9D%E4%B8%8A%E6%B5%B7%E6%88%B7%E5%8F%A3%E8%AF%B4%E6%88%91%E6%98%AF%E8%B4%B5%E5%B7%9E%E4%BA%BA%23) `267.0K 🔥` `NEW`
1. [邹市明在朋友面前怼冉莹颖](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E%E5%9C%A8%E6%9C%8B%E5%8F%8B%E9%9D%A2%E5%89%8D%E6%80%BC%E5%86%89%E8%8E%B9%E9%A2%96%23) `264.7K 🔥` `NEW`
1. [上班这件事不要本末倒置](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E8%BF%99%E4%BB%B6%E4%BA%8B%E4%B8%8D%E8%A6%81%E6%9C%AC%E6%9C%AB%E5%80%92%E7%BD%AE%23) `242.9K 🔥` `NEW`
1. [范玮琪曾沛慈合照](https://s.weibo.com/weibo?q=%23%E8%8C%83%E7%8E%AE%E7%90%AA%E6%9B%BE%E6%B2%9B%E6%85%88%E5%90%88%E7%85%A7%23) `232.8K 🔥` `NEW`
1. [孙颖莎对自己说你最棒](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%AF%B9%E8%87%AA%E5%B7%B1%E8%AF%B4%E4%BD%A0%E6%9C%80%E6%A3%92%23) `228.8K 🔥` `NEW`
1. [六公主给宋亚轩打码用小海螺贴纸](https://s.weibo.com/weibo?q=%23%E5%85%AD%E5%85%AC%E4%B8%BB%E7%BB%99%E5%AE%8B%E4%BA%9A%E8%BD%A9%E6%89%93%E7%A0%81%E7%94%A8%E5%B0%8F%E6%B5%B7%E8%9E%BA%E8%B4%B4%E7%BA%B8%23) `217.7K 🔥` `NEW`
1. [杜华坦言签了韩庚之后才开始赚钱 (Du Hua admitted that he only started making money after signing Han Geng)](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%8D%8E%E5%9D%A6%E8%A8%80%E7%AD%BE%E4%BA%86%E9%9F%A9%E5%BA%9A%E4%B9%8B%E5%90%8E%E6%89%8D%E5%BC%80%E5%A7%8B%E8%B5%9A%E9%92%B1%23) `196.3K 🔥` `NEW`
1. [印度首枚民营火箭发射成功](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E9%A6%96%E6%9E%9A%E6%B0%91%E8%90%A5%E7%81%AB%E7%AE%AD%E5%8F%91%E5%B0%84%E6%88%90%E5%8A%9F%23) `189.0K 🔥` `NEW`
1. [月之暗面想重做AI训练基础组件](https://s.weibo.com/weibo?q=%23%E6%9C%88%E4%B9%8B%E6%9A%97%E9%9D%A2%E6%83%B3%E9%87%8D%E5%81%9AAI%E8%AE%AD%E7%BB%83%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6%23) `188.5K 🔥` `NEW`
1. [穆祉丞比六手势](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E6%AF%94%E5%85%AD%E6%89%8B%E5%8A%BF%23) `188.1K 🔥` `NEW`
1. [曝大批演员计划开演唱会](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%A4%A7%E6%89%B9%E6%BC%94%E5%91%98%E8%AE%A1%E5%88%92%E5%BC%80%E6%BC%94%E5%94%B1%E4%BC%9A%23) `1.4M 🔥` `+153%`
1. [突然意识到开车上班花销很大](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E5%BC%80%E8%BD%A6%E4%B8%8A%E7%8F%AD%E8%8A%B1%E9%94%80%E5%BE%88%E5%A4%A7%23) `863.4K 🔥` `+178%`
1. [小鹿老公检查出不孕后说对不起](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%BF%E8%80%81%E5%85%AC%E6%A3%80%E6%9F%A5%E5%87%BA%E4%B8%8D%E5%AD%95%E5%90%8E%E8%AF%B4%E5%AF%B9%E4%B8%8D%E8%B5%B7%23) `821.8K 🔥` `+153%`
1. [加好友第一件事不是看对方朋友圈](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E5%A5%BD%E5%8F%8B%E7%AC%AC%E4%B8%80%E4%BB%B6%E4%BA%8B%E4%B8%8D%E6%98%AF%E7%9C%8B%E5%AF%B9%E6%96%B9%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `502.0K 🔥` `+89%`
1. [童锦程承认抛妻弃子 (Tong Jincheng admitted to abandoning his wife and son)](https://s.weibo.com/weibo?q=%23%E7%AB%A5%E9%94%A6%E7%A8%8B%E6%89%BF%E8%AE%A4%E6%8A%9B%E5%A6%BB%E5%BC%83%E5%AD%90%23) `484.7K 🔥` `+65%`
1. [KimiK3](https://s.weibo.com/weibo?q=%23KimiK3%23) `480.4K 🔥` `+72%`
1. [韩国35万散户被强制平仓 (350,000 retail investors in South Korea were forced to liquidate their positions)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD35%E4%B8%87%E6%95%A3%E6%88%B7%E8%A2%AB%E5%BC%BA%E5%88%B6%E5%B9%B3%E4%BB%93%23) `479.5K 🔥` `+58%`
1. [新冠又来了](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%86%A0%E5%8F%88%E6%9D%A5%E4%BA%86%23) `473.7K 🔥` `+50%`
1. [申思祁宏终身禁业 (Shen Si Qihong banned from business for life)](https://s.weibo.com/weibo?q=%23%E7%94%B3%E6%80%9D%E7%A5%81%E5%AE%8F%E7%BB%88%E8%BA%AB%E7%A6%81%E4%B8%9A%23) `468.8K 🔥` `+75%`
1. [孙怡瘦到连皮靴都直往下掉 (Sun Yi is so thin that even her leather boots are falling down)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E7%98%A6%E5%88%B0%E8%BF%9E%E7%9A%AE%E9%9D%B4%E9%83%BD%E7%9B%B4%E5%BE%80%E4%B8%8B%E6%8E%89%23) `460.9K 🔥` `+43%`
1. [王俊凯戴假发没遮全](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%88%B4%E5%81%87%E5%8F%91%E6%B2%A1%E9%81%AE%E5%85%A8%23) `444.9K 🔥` `+42%`
1. [贝克汉姆预测阿根廷夺冠](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%85%8B%E6%B1%89%E5%A7%86%E9%A2%84%E6%B5%8B%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%A4%BA%E5%86%A0%23) `235.8K 🔥` `+46%`
1. [八仙](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%23) `228.6K 🔥` `+21%`
1. [安排3000万元支持重庆灾后恢复](https://s.weibo.com/weibo?q=%23%E5%AE%89%E6%8E%923000%E4%B8%87%E5%85%83%E6%94%AF%E6%8C%81%E9%87%8D%E5%BA%86%E7%81%BE%E5%90%8E%E6%81%A2%E5%A4%8D%23) `850.2K 🔥`
1. [吃小龙虾尽量选蒜香的](https://s.weibo.com/weibo?q=%23%E5%90%83%E5%B0%8F%E9%BE%99%E8%99%BE%E5%B0%BD%E9%87%8F%E9%80%89%E8%92%9C%E9%A6%99%E7%9A%84%23) `778.7K 🔥`
1. [婴儿的器官形成与发育科普视频](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%84%BF%E7%9A%84%E5%99%A8%E5%AE%98%E5%BD%A2%E6%88%90%E4%B8%8E%E5%8F%91%E8%82%B2%E7%A7%91%E6%99%AE%E8%A7%86%E9%A2%91%23) `315.6K 🔥`
1. [陈冠希现在长得比姜思达还像大冰](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%86%A0%E5%B8%8C%E7%8E%B0%E5%9C%A8%E9%95%BF%E5%BE%97%E6%AF%94%E5%A7%9C%E6%80%9D%E8%BE%BE%E8%BF%98%E5%83%8F%E5%A4%A7%E5%86%B0%23) `307.5K 🔥`
1. [BLG](https://s.weibo.com/weibo?q=%23BLG%23) `268.7K 🔥`
1. [宋亚轩头发两年没剪了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%A4%B4%E5%8F%91%E4%B8%A4%E5%B9%B4%E6%B2%A1%E5%89%AA%E4%BA%86%23) `267.5K 🔥`
1. [王源在龙岗溜达 (Wang Yuan takes a stroll in Longgang)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E5%9C%A8%E9%BE%99%E5%B2%97%E6%BA%9C%E8%BE%BE%23) `267.0K 🔥`
1. [阿维塔张凌赫](https://s.weibo.com/weibo?q=%23%E9%98%BF%E7%BB%B4%E5%A1%94%E5%BC%A0%E5%87%8C%E8%B5%AB%23) `205.8K 🔥`
1. [终于理解两广地区对拖鞋的执念了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%90%86%E8%A7%A3%E4%B8%A4%E5%B9%BF%E5%9C%B0%E5%8C%BA%E5%AF%B9%E6%8B%96%E9%9E%8B%E7%9A%84%E6%89%A7%E5%BF%B5%E4%BA%86%23) `623.4K 🔥` `-25%`
1. [重庆山体崩塌](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%B1%B1%E4%BD%93%E5%B4%A9%E5%A1%8C%23) `500.4K 🔥` `-57%`
1. [县长硬刚首富背后是权力傲慢 (Behind the county magistrate’s tough attack on the richest man is the arrogance of power)](https://s.weibo.com/weibo?q=%23%E5%8E%BF%E9%95%BF%E7%A1%AC%E5%88%9A%E9%A6%96%E5%AF%8C%E8%83%8C%E5%90%8E%E6%98%AF%E6%9D%83%E5%8A%9B%E5%82%B2%E6%85%A2%23) `491.7K 🔥` `-42%`
1. [嫌机票贵买二手车亏一万多](https://s.weibo.com/weibo?q=%23%E5%AB%8C%E6%9C%BA%E7%A5%A8%E8%B4%B5%E4%B9%B0%E4%BA%8C%E6%89%8B%E8%BD%A6%E4%BA%8F%E4%B8%80%E4%B8%87%E5%A4%9A%23) `296.4K 🔥` `-36%`
1. [清华录取通知书极简但有排面 (Tsinghua University admission notice is minimalist but well-organized)](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8D%8E%E5%BD%95%E5%8F%96%E9%80%9A%E7%9F%A5%E4%B9%A6%E6%9E%81%E7%AE%80%E4%BD%86%E6%9C%89%E6%8E%92%E9%9D%A2%23) `296.2K 🔥` `-34%`
1. [孟子义何与百花杀婚纱照 (Mencius Yihe and Baihuasha Wedding Photos)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E4%BD%95%E4%B8%8E%E7%99%BE%E8%8A%B1%E6%9D%80%E5%A9%9A%E7%BA%B1%E7%85%A7%23) `229.9K 🔥` `-26%`

Updated at 2026-07-18 17:46:20

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
