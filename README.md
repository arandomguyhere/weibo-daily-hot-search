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

1. [李荣浩 明天都给我好好考 (Li Ronghao, give me a good test tomorrow)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%20%E6%98%8E%E5%A4%A9%E9%83%BD%E7%BB%99%E6%88%91%E5%A5%BD%E5%A5%BD%E8%80%83%23) `5.8M 🔥` `NEW`
1. [英伟达市值一夜蒸发2.2万亿](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%B8%82%E5%80%BC%E4%B8%80%E5%A4%9C%E8%92%B8%E5%8F%912.2%E4%B8%87%E4%BA%BF%23) `1.4M 🔥` `NEW`
1. [榴莲核煮饭](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E6%A0%B8%E7%85%AE%E9%A5%AD%23) `701.1K 🔥` `NEW`
1. [浪姐对比20个麦确认是金牌的King](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%AF%B9%E6%AF%9420%E4%B8%AA%E9%BA%A6%E7%A1%AE%E8%AE%A4%E6%98%AF%E9%87%91%E7%89%8C%E7%9A%84King%23) `501.2K 🔥` `NEW`
1. [阚清子整个人大蜕变](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E6%95%B4%E4%B8%AA%E4%BA%BA%E5%A4%A7%E8%9C%95%E5%8F%98%23) `450.5K 🔥` `NEW`
1. [AI文风太好认](https://s.weibo.com/weibo?q=%23AI%E6%96%87%E9%A3%8E%E5%A4%AA%E5%A5%BD%E8%AE%A4%23) `393.0K 🔥` `NEW`
1. [苏醒分析浪姐现场喊金牌King](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%E5%88%86%E6%9E%90%E6%B5%AA%E5%A7%90%E7%8E%B0%E5%9C%BA%E5%96%8A%E9%87%91%E7%89%8CKing%23) `318.3K 🔥` `NEW`
1. [碰瓷被儿子怒吼的患癌母亲已火化](https://s.weibo.com/weibo?q=%23%E7%A2%B0%E7%93%B7%E8%A2%AB%E5%84%BF%E5%AD%90%E6%80%92%E5%90%BC%E7%9A%84%E6%82%A3%E7%99%8C%E6%AF%8D%E4%BA%B2%E5%B7%B2%E7%81%AB%E5%8C%96%23) `314.5K 🔥` `NEW`
1. [郑秀晶回应争议](https://s.weibo.com/weibo?q=%23%E9%83%91%E7%A7%80%E6%99%B6%E5%9B%9E%E5%BA%94%E4%BA%89%E8%AE%AE%23) `307.1K 🔥` `NEW`
1. [海来阿木黑脸](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%9D%A5%E9%98%BF%E6%9C%A8%E9%BB%91%E8%84%B8%23) `285.3K 🔥` `NEW`
1. [哈兰德回应中国网友玩梗 (Haaland responds to Chinese netizens’ meme)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%9B%9E%E5%BA%94%E4%B8%AD%E5%9B%BD%E7%BD%91%E5%8F%8B%E7%8E%A9%E6%A2%97%23) `273.5K 🔥` `NEW`
1. [iPhoneUltra机模再曝光](https://s.weibo.com/weibo?q=%23iPhoneUltra%E6%9C%BA%E6%A8%A1%E5%86%8D%E6%9B%9D%E5%85%89%23) `265.6K 🔥` `NEW`
1. [高考加油红包](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%8A%A0%E6%B2%B9%E7%BA%A2%E5%8C%85%23) `262.0K 🔥` `NEW`
1. [田曦薇4K高清生图好权威](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%874K%E9%AB%98%E6%B8%85%E7%94%9F%E5%9B%BE%E5%A5%BD%E6%9D%83%E5%A8%81%23) `261.2K 🔥` `NEW`
1. [FPX.ZQ对战MRC](https://s.weibo.com/weibo?q=%23FPX.ZQ%E5%AF%B9%E6%88%98MRC%23) `260.8K 🔥` `NEW`
1. [李晨口碑](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%A8%E5%8F%A3%E7%A2%91%23) `260.2K 🔥` `NEW`
1. [浪姐四公4位姐姐道歉](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%9B%9B%E5%85%AC4%E4%BD%8D%E5%A7%90%E5%A7%90%E9%81%93%E6%AD%89%23) `259.9K 🔥` `NEW`
1. [如何成为小鸡中的万人迷](https://s.weibo.com/weibo?q=%23%E5%A6%82%E4%BD%95%E6%88%90%E4%B8%BA%E5%B0%8F%E9%B8%A1%E4%B8%AD%E7%9A%84%E4%B8%87%E4%BA%BA%E8%BF%B7%23) `259.3K 🔥` `NEW`
1. [上海一医院妇科专家挂号费5000元](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%B8%80%E5%8C%BB%E9%99%A2%E5%A6%87%E7%A7%91%E4%B8%93%E5%AE%B6%E6%8C%82%E5%8F%B7%E8%B4%B95000%E5%85%83%23) `258.9K 🔥` `NEW`
1. [印度20岁厨师不幸被冰箱炸死](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A620%E5%B2%81%E5%8E%A8%E5%B8%88%E4%B8%8D%E5%B9%B8%E8%A2%AB%E5%86%B0%E7%AE%B1%E7%82%B8%E6%AD%BB%23) `258.4K 🔥` `NEW`
1. [因感谢贫穷走红的北大女孩现状 (The current situation of the Peking University girl who became popular because of her gratitude to poverty)](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E6%84%9F%E8%B0%A2%E8%B4%AB%E7%A9%B7%E8%B5%B0%E7%BA%A2%E7%9A%84%E5%8C%97%E5%A4%A7%E5%A5%B3%E5%AD%A9%E7%8E%B0%E7%8A%B6%23) `258.1K 🔥` `NEW`
1. [2岁女儿给爸爸降温背上多了四张人脸](https://s.weibo.com/weibo?q=%232%E5%B2%81%E5%A5%B3%E5%84%BF%E7%BB%99%E7%88%B8%E7%88%B8%E9%99%8D%E6%B8%A9%E8%83%8C%E4%B8%8A%E5%A4%9A%E4%BA%86%E5%9B%9B%E5%BC%A0%E4%BA%BA%E8%84%B8%23) `257.0K 🔥` `NEW`
1. [灵魂摆渡](https://s.weibo.com/weibo?q=%23%E7%81%B5%E9%AD%82%E6%91%86%E6%B8%A1%23) `256.3K 🔥` `NEW`
1. [郑恺跑男最不吃压力之人](https://s.weibo.com/weibo?q=%23%E9%83%91%E6%81%BA%E8%B7%91%E7%94%B7%E6%9C%80%E4%B8%8D%E5%90%83%E5%8E%8B%E5%8A%9B%E4%B9%8B%E4%BA%BA%23) `255.3K 🔥` `NEW`
1. [漯河通报2死6伤交通事故](https://s.weibo.com/weibo?q=%23%E6%BC%AF%E6%B2%B3%E9%80%9A%E6%8A%A52%E6%AD%BB6%E4%BC%A4%E4%BA%A4%E9%80%9A%E4%BA%8B%E6%95%85%23) `250.1K 🔥` `NEW`
1. [一曲退役](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%9B%B2%E9%80%80%E5%BD%B9%23) `169.0K 🔥` `NEW`
1. [杨紫晒广州walk](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%99%92%E5%B9%BF%E5%B7%9Ewalk%23) `168.6K 🔥` `NEW`
1. [中国人聚是一栋楼 散是满地球](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E8%81%9A%E6%98%AF%E4%B8%80%E6%A0%8B%E6%A5%BC%20%E6%95%A3%E6%98%AF%E6%BB%A1%E5%9C%B0%E7%90%83%23) `333.5K 🔥`
1. [金价跌回2025年](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%B7%8C%E5%9B%9E2025%E5%B9%B4%23) `322.5K 🔥`
1. [汤唯疑似去香港待产](https://s.weibo.com/weibo?q=%23%E6%B1%A4%E5%94%AF%E7%96%91%E4%BC%BC%E5%8E%BB%E9%A6%99%E6%B8%AF%E5%BE%85%E4%BA%A7%23) `255.6K 🔥`
1. [我国多领域再迎硬核突破 (my country welcomes hard-core breakthroughs in many fields)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%A4%9A%E9%A2%86%E5%9F%9F%E5%86%8D%E8%BF%8E%E7%A1%AC%E6%A0%B8%E7%AA%81%E7%A0%B4%23) `1.1M 🔥` `-37%`
1. [张月多情猫首位代言人 (Zhang Yue’s first spokesperson for the passionate cat)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E5%A4%9A%E6%83%85%E7%8C%AB%E9%A6%96%E4%BD%8D%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `422.9K 🔥` `-96%`
1. [高考时间](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%97%B6%E9%97%B4%23) `329.1K 🔥` `-23%`
1. [浪姐声明](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%A3%B0%E6%98%8E%23) `323.8K 🔥` `-81%`
1. [李晨郑恺回应争议 (Li Chen and Zheng Kai respond to controversy)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%A8%E9%83%91%E6%81%BA%E5%9B%9E%E5%BA%94%E4%BA%89%E8%AE%AE%23) `306.2K 🔥` `-51%`
1. [吾妻淑柔 吾妻属牛](https://s.weibo.com/weibo?q=%23%E5%90%BE%E5%A6%BB%E6%B7%91%E6%9F%94%20%E5%90%BE%E5%A6%BB%E5%B1%9E%E7%89%9B%23) `302.5K 🔥` `-30%`
1. [严浩翔YAN纹身](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94YAN%E7%BA%B9%E8%BA%AB%23) `261.6K 🔥` `-24%`
1. [侧躺玩手机受害者](https://s.weibo.com/weibo?q=%23%E4%BE%A7%E8%BA%BA%E7%8E%A9%E6%89%8B%E6%9C%BA%E5%8F%97%E5%AE%B3%E8%80%85%23) `257.6K 🔥` `-24%`
1. [废品站称没见60g黄金母亲疑其撒谎](https://s.weibo.com/weibo?q=%23%E5%BA%9F%E5%93%81%E7%AB%99%E7%A7%B0%E6%B2%A1%E8%A7%8160g%E9%BB%84%E9%87%91%E6%AF%8D%E4%BA%B2%E7%96%91%E5%85%B6%E6%92%92%E8%B0%8E%23) `256.1K 🔥` `-88%`
1. [徐振轩道歉](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%8C%AF%E8%BD%A9%E9%81%93%E6%AD%89%23) `246.0K 🔥` `-30%`
1. [田曦薇白裙大波浪造型](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E7%99%BD%E8%A3%99%E5%A4%A7%E6%B3%A2%E6%B5%AA%E9%80%A0%E5%9E%8B%23) `223.6K 🔥` `-34%`
1. [高考作文时间不够一定要写结尾](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E4%BD%9C%E6%96%87%E6%97%B6%E9%97%B4%E4%B8%8D%E5%A4%9F%E4%B8%80%E5%AE%9A%E8%A6%81%E5%86%99%E7%BB%93%E5%B0%BE%23) `214.0K 🔥` `-39%`
1. [王一博进组被打假 (Wang Yibo was banned from joining the team)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%BF%9B%E7%BB%84%E8%A2%AB%E6%89%93%E5%81%87%23) `207.1K 🔥` `-38%`
1. [鹿晗耳朵还没适应新发型](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E8%80%B3%E6%9C%B5%E8%BF%98%E6%B2%A1%E9%80%82%E5%BA%94%E6%96%B0%E5%8F%91%E5%9E%8B%23) `198.1K 🔥` `-42%`
1. [舞蹈世家二十年后出了一个宇航员 (Twenty years later, an astronaut was born from the dance family)](https://s.weibo.com/weibo?q=%23%E8%88%9E%E8%B9%88%E4%B8%96%E5%AE%B6%E4%BA%8C%E5%8D%81%E5%B9%B4%E5%90%8E%E5%87%BA%E4%BA%86%E4%B8%80%E4%B8%AA%E5%AE%87%E8%88%AA%E5%91%98%23) `193.2K 🔥` `-33%`
1. [范丞丞的口碑](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E7%9A%84%E5%8F%A3%E7%A2%91%23) `192.7K 🔥` `-32%`
1. [王菲 我打牌的时候没空打她 (Faye Wong, I don’t have time to hit her while I’m playing cards.)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%20%E6%88%91%E6%89%93%E7%89%8C%E7%9A%84%E6%97%B6%E5%80%99%E6%B2%A1%E7%A9%BA%E6%89%93%E5%A5%B9%23) `169.3K 🔥` `-50%`
1. [WB官宣一笙加入](https://s.weibo.com/weibo?q=%23WB%E5%AE%98%E5%AE%A3%E4%B8%80%E7%AC%99%E5%8A%A0%E5%85%A5%23) `169.1K 🔥` `-51%`
1. [全国首例盲人脑机接口复明成功 (The country's first blind man successfully regained his sight through brain-computer interface)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E9%A6%96%E4%BE%8B%E7%9B%B2%E4%BA%BA%E8%84%91%E6%9C%BA%E6%8E%A5%E5%8F%A3%E5%A4%8D%E6%98%8E%E6%88%90%E5%8A%9F%23) `168.8K 🔥` `-51%`
1. [京东洗衣机直播间来就送全家筒](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E6%B4%97%E8%A1%A3%E6%9C%BA%E7%9B%B4%E6%92%AD%E9%97%B4%E6%9D%A5%E5%B0%B1%E9%80%81%E5%85%A8%E5%AE%B6%E7%AD%92%23) `168.8K 🔥` `-49%`
1. [海来阿木向张碧晨道歉](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%9D%A5%E9%98%BF%E6%9C%A8%E5%90%91%E5%BC%A0%E7%A2%A7%E6%99%A8%E9%81%93%E6%AD%89%23) `166.3K 🔥` `-50%`

Updated at 2026-06-06 17:34:27

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
