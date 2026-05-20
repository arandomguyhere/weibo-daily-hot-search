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

1. [杨梅协会会长恳求消费者给果农生路 (The president of Bayberry Association pleads with consumers to give fruit farmers a way to survive)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%A2%85%E5%8D%8F%E4%BC%9A%E4%BC%9A%E9%95%BF%E6%81%B3%E6%B1%82%E6%B6%88%E8%B4%B9%E8%80%85%E7%BB%99%E6%9E%9C%E5%86%9C%E7%94%9F%E8%B7%AF%23) `1.6M 🔥` `NEW`
1. [武契奇将对中国进行国事访问](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A5%91%E5%A5%87%E5%B0%86%E5%AF%B9%E4%B8%AD%E5%9B%BD%E8%BF%9B%E8%A1%8C%E5%9B%BD%E4%BA%8B%E8%AE%BF%E9%97%AE%23) `899.3K 🔥` `NEW`
1. [一曲莫斯科郊外的晚上欢迎普京](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%9B%B2%E8%8E%AB%E6%96%AF%E7%A7%91%E9%83%8A%E5%A4%96%E7%9A%84%E6%99%9A%E4%B8%8A%E6%AC%A2%E8%BF%8E%E6%99%AE%E4%BA%AC%23) `815.7K 🔥` `NEW`
1. [爱玛元宇宙代言人欧阳娜娜](https://s.weibo.com/weibo?q=%23%E7%88%B1%E7%8E%9B%E5%85%83%E5%AE%87%E5%AE%99%E4%BB%A3%E8%A8%80%E4%BA%BA%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%23) `780.3K 🔥` `NEW`
1. [于娜退圈十年归来胖若两人](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E5%A8%9C%E9%80%80%E5%9C%88%E5%8D%81%E5%B9%B4%E5%BD%92%E6%9D%A5%E8%83%96%E8%8B%A5%E4%B8%A4%E4%BA%BA%23) `756.8K 🔥` `NEW`
1. [这么隐晦的暗恋方式](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B9%88%E9%9A%90%E6%99%A6%E7%9A%84%E6%9A%97%E6%81%8B%E6%96%B9%E5%BC%8F%23) `722.4K 🔥` `NEW`
1. [今日辟谣](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E6%97%A5%E8%BE%9F%E8%B0%A3%23) `694.2K 🔥` `NEW`
1. [求严浩翔同款拼豆图](https://s.weibo.com/weibo?q=%23%E6%B1%82%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%90%8C%E6%AC%BE%E6%8B%BC%E8%B1%86%E5%9B%BE%23) `689.6K 🔥` `NEW`
1. [何润东商务 有人莫名其妙就发财了](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E5%95%86%E5%8A%A1%20%E6%9C%89%E4%BA%BA%E8%8E%AB%E5%90%8D%E5%85%B6%E5%A6%99%E5%B0%B1%E5%8F%91%E8%B4%A2%E4%BA%86%23) `633.6K 🔥` `NEW`
1. [女博士见被抢幼子孩子的手被栓住了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%8D%9A%E5%A3%AB%E8%A7%81%E8%A2%AB%E6%8A%A2%E5%B9%BC%E5%AD%90%E5%AD%A9%E5%AD%90%E7%9A%84%E6%89%8B%E8%A2%AB%E6%A0%93%E4%BD%8F%E4%BA%86%23) `493.8K 🔥` `NEW`
1. [打开朋友圈误入玻璃厂 (Open the circle of friends and enter the glass factory by mistake)](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%BC%80%E6%9C%8B%E5%8F%8B%E5%9C%88%E8%AF%AF%E5%85%A5%E7%8E%BB%E7%92%83%E5%8E%82%23) `491.6K 🔥` `NEW`
1. [金靖回复张凌赫谢谢我的站哥](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%E5%9B%9E%E5%A4%8D%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%B0%A2%E8%B0%A2%E6%88%91%E7%9A%84%E7%AB%99%E5%93%A5%23) `489.0K 🔥` `NEW`
1. [普京访华欢迎仪式上的中国排面](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E8%AE%BF%E5%8D%8E%E6%AC%A2%E8%BF%8E%E4%BB%AA%E5%BC%8F%E4%B8%8A%E7%9A%84%E4%B8%AD%E5%9B%BD%E6%8E%92%E9%9D%A2%23) `487.1K 🔥` `NEW`
1. [煎饼夏天 戛纳](https://s.weibo.com/weibo?q=%23%E7%85%8E%E9%A5%BC%E5%A4%8F%E5%A4%A9%20%E6%88%9B%E7%BA%B3%23) `483.3K 🔥` `NEW`
1. [职场中不要过度礼貌](https://s.weibo.com/weibo?q=%23%E8%81%8C%E5%9C%BA%E4%B8%AD%E4%B8%8D%E8%A6%81%E8%BF%87%E5%BA%A6%E7%A4%BC%E8%B2%8C%23) `478.8K 🔥` `NEW`
1. [王橹杰520拍立得](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0520%E6%8B%8D%E7%AB%8B%E5%BE%97%23) `411.0K 🔥` `NEW`
1. [大裁员前夕Meta员工疯狂薅羊毛](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%A3%81%E5%91%98%E5%89%8D%E5%A4%95Meta%E5%91%98%E5%B7%A5%E7%96%AF%E7%8B%82%E8%96%85%E7%BE%8A%E6%AF%9B%23) `377.1K 🔥` `NEW`
1. [中方将引进200架波音飞机](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%B0%86%E5%BC%95%E8%BF%9B200%E6%9E%B6%E6%B3%A2%E9%9F%B3%E9%A3%9E%E6%9C%BA%23) `366.4K 🔥` `NEW`
1. [上海一精神障碍患者持刀伤2日本人](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%B8%80%E7%B2%BE%E7%A5%9E%E9%9A%9C%E7%A2%8D%E6%82%A3%E8%80%85%E6%8C%81%E5%88%80%E4%BC%A42%E6%97%A5%E6%9C%AC%E4%BA%BA%23) `366.0K 🔥` `NEW`
1. [大连相关部门已介入帮助带娃送外卖妈妈](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%BF%9E%E7%9B%B8%E5%85%B3%E9%83%A8%E9%97%A8%E5%B7%B2%E4%BB%8B%E5%85%A5%E5%B8%AE%E5%8A%A9%E5%B8%A6%E5%A8%83%E9%80%81%E5%A4%96%E5%8D%96%E5%A6%88%E5%A6%88%23) `365.8K 🔥` `NEW`
1. [丁程鑫看的是正经逐玉吗 (Is Ding Chengxin watching the serious pursuit of jade?)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E7%9C%8B%E7%9A%84%E6%98%AF%E6%AD%A3%E7%BB%8F%E9%80%90%E7%8E%89%E5%90%97%23) `361.6K 🔥` `NEW`
1. [我有一个很小众的恐惧点](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%9C%89%E4%B8%80%E4%B8%AA%E5%BE%88%E5%B0%8F%E4%BC%97%E7%9A%84%E6%81%90%E6%83%A7%E7%82%B9%23) `359.1K 🔥` `NEW`
1. [麦当劳星星人玩具](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E5%BD%93%E5%8A%B3%E6%98%9F%E6%98%9F%E4%BA%BA%E7%8E%A9%E5%85%B7%23) `358.6K 🔥` `NEW`
1. [雷军回应小米YU7GT定价](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94%E5%B0%8F%E7%B1%B3YU7GT%E5%AE%9A%E4%BB%B7%23) `344.0K 🔥` `NEW`
1. [歌手2026官宣那英](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%E5%AE%98%E5%AE%A3%E9%82%A3%E8%8B%B1%23) `334.7K 🔥` `NEW`
1. [TFING发红包](https://s.weibo.com/weibo?q=%23TFING%E5%8F%91%E7%BA%A2%E5%8C%85%23) `308.8K 🔥` `NEW`
1. [王源8年后重返工体](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%908%E5%B9%B4%E5%90%8E%E9%87%8D%E8%BF%94%E5%B7%A5%E4%BD%93%23) `306.9K 🔥` `NEW`
1. [李昀锐偷看关晓彤这一眼](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%81%B7%E7%9C%8B%E5%85%B3%E6%99%93%E5%BD%A4%E8%BF%99%E4%B8%80%E7%9C%BC%23) `306.7K 🔥` `NEW`
1. [沈梦瑶520发红包](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%A2%A6%E7%91%B6520%E5%8F%91%E7%BA%A2%E5%8C%85%23) `291.9K 🔥` `NEW`
1. [喜婆婆凌晨5点到民政局帮儿媳排队](https://s.weibo.com/weibo?q=%23%E5%96%9C%E5%A9%86%E5%A9%86%E5%87%8C%E6%99%A85%E7%82%B9%E5%88%B0%E6%B0%91%E6%94%BF%E5%B1%80%E5%B8%AE%E5%84%BF%E5%AA%B3%E6%8E%92%E9%98%9F%23) `288.3K 🔥` `NEW`
1. [刘诗诗去看了五月天 (Liu Shishi went to see Mayday)](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E5%8E%BB%E7%9C%8B%E4%BA%86%E4%BA%94%E6%9C%88%E5%A4%A9%23) `230.1K 🔥` `NEW`
1. [不敢想住在这样的家里有多爽](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E6%95%A2%E6%83%B3%E4%BD%8F%E5%9C%A8%E8%BF%99%E6%A0%B7%E7%9A%84%E5%AE%B6%E9%87%8C%E6%9C%89%E5%A4%9A%E7%88%BD%23) `190.7K 🔥` `NEW`
1. [田曦薇魏大勋 赢家](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E9%AD%8F%E5%A4%A7%E5%8B%8B%20%E8%B5%A2%E5%AE%B6%23) `189.6K 🔥` `NEW`
1. [杨紫家业收视率](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%AE%B6%E4%B8%9A%E6%94%B6%E8%A7%86%E7%8E%87%23) `182.8K 🔥` `NEW`
1. [豆包没有身份证说话就是狠](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E6%B2%A1%E6%9C%89%E8%BA%AB%E4%BB%BD%E8%AF%81%E8%AF%B4%E8%AF%9D%E5%B0%B1%E6%98%AF%E7%8B%A0%23) `169.5K 🔥` `NEW`
1. [520明星发红包](https://s.weibo.com/weibo?q=%23520%E6%98%8E%E6%98%9F%E5%8F%91%E7%BA%A2%E5%8C%85%23) `157.6K 🔥` `NEW`
1. [这是阚清子还是叶琳](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%98%AF%E9%98%9A%E6%B8%85%E5%AD%90%E8%BF%98%E6%98%AF%E5%8F%B6%E7%90%B3%23) `153.5K 🔥` `NEW`
1. [中俄多极世界联合声明](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BF%84%E5%A4%9A%E6%9E%81%E4%B8%96%E7%95%8C%E8%81%94%E5%90%88%E5%A3%B0%E6%98%8E%23) `151.5K 🔥` `NEW`
1. [明星红包](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%9F%E7%BA%A2%E5%8C%85%23) `150.7K 🔥` `NEW`
1. [华为自研音悦家APP](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E8%87%AA%E7%A0%94%E9%9F%B3%E6%82%A6%E5%AE%B6APP%23) `148.1K 🔥` `NEW`
1. [柳州柳南区3.7级地震 (3.7 magnitude earthquake in Liunan District, Liuzhou)](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E5%B7%9E%E6%9F%B3%E5%8D%97%E5%8C%BA3.7%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `147.3K 🔥` `NEW`
1. [十个勤天迟来的三周年合影](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%E8%BF%9F%E6%9D%A5%E7%9A%84%E4%B8%89%E5%91%A8%E5%B9%B4%E5%90%88%E5%BD%B1%23) `147.1K 🔥` `NEW`
1. [国产芯片好消息不断](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BA%A7%E8%8A%AF%E7%89%87%E5%A5%BD%E6%B6%88%E6%81%AF%E4%B8%8D%E6%96%AD%23) `750.3K 🔥` `+225%`
1. [孙颖莎王楚钦混双搭档第九年](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%B7%B7%E5%8F%8C%E6%90%AD%E6%A1%A3%E7%AC%AC%E4%B9%9D%E5%B9%B4%23) `677.8K 🔥` `+193%`
1. [喜欢你6阵容官宣](https://s.weibo.com/weibo?q=%23%E5%96%9C%E6%AC%A2%E4%BD%A06%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `647.1K 🔥` `+163%`
1. [人一旦有了考研的念头](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E6%97%A6%E6%9C%89%E4%BA%86%E8%80%83%E7%A0%94%E7%9A%84%E5%BF%B5%E5%A4%B4%23) `307.2K 🔥`
1. [颜颜哭着告白凯凯](https://s.weibo.com/weibo?q=%23%E9%A2%9C%E9%A2%9C%E5%93%AD%E7%9D%80%E5%91%8A%E7%99%BD%E5%87%AF%E5%87%AF%23) `247.4K 🔥`
1. [张凌赫把金靖放在C位](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%8A%8A%E9%87%91%E9%9D%96%E6%94%BE%E5%9C%A8C%E4%BD%8D%23) `363.9K 🔥` `-42%`
1. [普京说亲爱的朋友一日不见如隔三秋](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E8%AF%B4%E4%BA%B2%E7%88%B1%E7%9A%84%E6%9C%8B%E5%8F%8B%E4%B8%80%E6%97%A5%E4%B8%8D%E8%A7%81%E5%A6%82%E9%9A%94%E4%B8%89%E7%A7%8B%23) `162.6K 🔥` `-47%`
1. [丁程鑫 我养猪杀你](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%20%E6%88%91%E5%85%BB%E7%8C%AA%E6%9D%80%E4%BD%A0%23) `161.1K 🔥` `-52%`
1. [中俄元首会见记者 (The heads of state of China and Russia met with reporters)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BF%84%E5%85%83%E9%A6%96%E4%BC%9A%E8%A7%81%E8%AE%B0%E8%80%85%23) `154.3K 🔥` `-87%`
1. [小胖 TTG (chubby TTG)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%83%96%20TTG%23) `147.6K 🔥` `-37%`

Updated at 2026-05-20 17:56:24

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
