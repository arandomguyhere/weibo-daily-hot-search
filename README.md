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

1. [浪姐直播 (Sister Lang live broadcast)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%23) `1.2M 🔥` `NEW`
1. [教育部发布4条高考特别提醒](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E9%83%A8%E5%8F%91%E5%B8%834%E6%9D%A1%E9%AB%98%E8%80%83%E7%89%B9%E5%88%AB%E6%8F%90%E9%86%92%23) `705.2K 🔥` `NEW`
1. [U23国足读秒绝杀](https://s.weibo.com/weibo?q=%23U23%E5%9B%BD%E8%B6%B3%E8%AF%BB%E7%A7%92%E7%BB%9D%E6%9D%80%23) `363.7K 🔥` `NEW`
1. [曾沛慈反复看了超过20次Susan说](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%8F%8D%E5%A4%8D%E7%9C%8B%E4%BA%86%E8%B6%85%E8%BF%8720%E6%AC%A1Susan%E8%AF%B4%23) `347.3K 🔥` `NEW`
1. [种地吧麦田音乐会](https://s.weibo.com/weibo?q=%23%E7%A7%8D%E5%9C%B0%E5%90%A7%E9%BA%A6%E7%94%B0%E9%9F%B3%E4%B9%90%E4%BC%9A%23) `324.0K 🔥` `NEW`
1. [16岁女孩被捅重伤行凶者轻生身亡](https://s.weibo.com/weibo?q=%2316%E5%B2%81%E5%A5%B3%E5%AD%A9%E8%A2%AB%E6%8D%85%E9%87%8D%E4%BC%A4%E8%A1%8C%E5%87%B6%E8%80%85%E8%BD%BB%E7%94%9F%E8%BA%AB%E4%BA%A1%23) `322.1K 🔥` `NEW`
1. [谢娜今晚有好消息宣布](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E4%BB%8A%E6%99%9A%E6%9C%89%E5%A5%BD%E6%B6%88%E6%81%AF%E5%AE%A3%E5%B8%83%23) `243.6K 🔥` `NEW`
1. [曝郭宇欣私下说绝对不和刘萧旭二搭](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%83%AD%E5%AE%87%E6%AC%A3%E7%A7%81%E4%B8%8B%E8%AF%B4%E7%BB%9D%E5%AF%B9%E4%B8%8D%E5%92%8C%E5%88%98%E8%90%A7%E6%97%AD%E4%BA%8C%E6%90%AD%23) `233.9K 🔥` `NEW`
1. [AI入侵李荣浩](https://s.weibo.com/weibo?q=%23AI%E5%85%A5%E4%BE%B5%E6%9D%8E%E8%8D%A3%E6%B5%A9%23) `211.9K 🔥` `NEW`
1. [老师考前遗失整摞准考证被市民捡到](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%B8%88%E8%80%83%E5%89%8D%E9%81%97%E5%A4%B1%E6%95%B4%E6%91%9E%E5%87%86%E8%80%83%E8%AF%81%E8%A2%AB%E5%B8%82%E6%B0%91%E6%8D%A1%E5%88%B0%23) `201.1K 🔥` `NEW`
1. [金价年内大跌 (Gold prices plummet this year)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%B9%B4%E5%86%85%E5%A4%A7%E8%B7%8C%23) `177.2K 🔥` `NEW`
1. [宋亚轩给丁程鑫严浩翔拍照](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E7%BB%99%E4%B8%81%E7%A8%8B%E9%91%AB%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%8B%8D%E7%85%A7%23) `176.9K 🔥` `NEW`
1. [黄灿灿婚纱](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%A9%9A%E7%BA%B1%23) `176.8K 🔥` `NEW`
1. [梅西C罗成新晋十亿富豪](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%A5%BFC%E7%BD%97%E6%88%90%E6%96%B0%E6%99%8B%E5%8D%81%E4%BA%BF%E5%AF%8C%E8%B1%AA%23) `176.7K 🔥` `NEW`
1. [1499元茅台消失了](https://s.weibo.com/weibo?q=%231499%E5%85%83%E8%8C%85%E5%8F%B0%E6%B6%88%E5%A4%B1%E4%BA%86%23) `174.0K 🔥` `NEW`
1. [唐艺昕婚纱造型唱雪人](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E5%A9%9A%E7%BA%B1%E9%80%A0%E5%9E%8B%E5%94%B1%E9%9B%AA%E4%BA%BA%23) `164.2K 🔥` `NEW`
1. [乌兰图雅摔了一大跤](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%B0%E5%9B%BE%E9%9B%85%E6%91%94%E4%BA%86%E4%B8%80%E5%A4%A7%E8%B7%A4%23) `158.5K 🔥` `NEW`
1. [尼日尔车撒哈拉沙漠抛锚超49人渴死](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%97%A5%E5%B0%94%E8%BD%A6%E6%92%92%E5%93%88%E6%8B%89%E6%B2%99%E6%BC%A0%E6%8A%9B%E9%94%9A%E8%B6%8549%E4%BA%BA%E6%B8%B4%E6%AD%BB%23) `149.4K 🔥` `NEW`
1. [沈月方打假文章抄袭](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E6%96%B9%E6%89%93%E5%81%87%E6%96%87%E7%AB%A0%E6%8A%84%E8%A2%AD%23) `141.2K 🔥` `NEW`
1. [Bin回应S15止步十六强](https://s.weibo.com/weibo?q=%23Bin%E5%9B%9E%E5%BA%94S15%E6%AD%A2%E6%AD%A5%E5%8D%81%E5%85%AD%E5%BC%BA%23) `138.8K 🔥` `NEW`
1. [高考假 (College Entrance Examination Vacation)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%81%87%23) `118.5K 🔥` `NEW`
1. [苏醒分析浪姐现场喊金牌King](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%E5%88%86%E6%9E%90%E6%B5%AA%E5%A7%90%E7%8E%B0%E5%9C%BA%E5%96%8A%E9%87%91%E7%89%8CKing%23) `379.5K 🔥` `+122%`
1. [曝沈月文章抄袭](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B2%88%E6%9C%88%E6%96%87%E7%AB%A0%E6%8A%84%E8%A2%AD%23) `300.0K 🔥` `+33%`
1. [李晨被恶意解读不舒服了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%A8%E8%A2%AB%E6%81%B6%E6%84%8F%E8%A7%A3%E8%AF%BB%E4%B8%8D%E8%88%92%E6%9C%8D%E4%BA%86%23) `284.4K 🔥` `+69%`
1. [何猷君保姆坐奚梦瑶父母旁边](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%8C%B7%E5%90%9B%E4%BF%9D%E5%A7%86%E5%9D%90%E5%A5%9A%E6%A2%A6%E7%91%B6%E7%88%B6%E6%AF%8D%E6%97%81%E8%BE%B9%23) `196.2K 🔥` `+40%`
1. [佘诗曼回应曾霸凌杨思琦](https://s.weibo.com/weibo?q=%23%E4%BD%98%E8%AF%97%E6%9B%BC%E5%9B%9E%E5%BA%94%E6%9B%BE%E9%9C%B8%E5%87%8C%E6%9D%A8%E6%80%9D%E7%90%A6%23) `177.1K 🔥` `+28%`
1. [女生嘴含夹竹桃拍照中毒过敏 (Girl poisoned and allergic after taking photo with oleander in mouth)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E5%98%B4%E5%90%AB%E5%A4%B9%E7%AB%B9%E6%A1%83%E6%8B%8D%E7%85%A7%E4%B8%AD%E6%AF%92%E8%BF%87%E6%95%8F%23) `1.1M 🔥`
1. [吃完的榴莲别急着扔](https://s.weibo.com/weibo?q=%23%E5%90%83%E5%AE%8C%E7%9A%84%E6%A6%B4%E8%8E%B2%E5%88%AB%E6%80%A5%E7%9D%80%E6%89%94%23) `498.5K 🔥`
1. [高考时间](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%97%B6%E9%97%B4%23) `261.8K 🔥`
1. [海来阿木黑脸](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%9D%A5%E9%98%BF%E6%9C%A8%E9%BB%91%E8%84%B8%23) `207.7K 🔥`
1. [被薛凯琪选择定居北京这段笑死 (It was so funny that Fiona Sit chose to settle in Beijing.)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E8%96%9B%E5%87%AF%E7%90%AA%E9%80%89%E6%8B%A9%E5%AE%9A%E5%B1%85%E5%8C%97%E4%BA%AC%E8%BF%99%E6%AE%B5%E7%AC%91%E6%AD%BB%23) `200.2K 🔥`
1. [2岁女儿给爸爸降温背上多了四张人脸](https://s.weibo.com/weibo?q=%232%E5%B2%81%E5%A5%B3%E5%84%BF%E7%BB%99%E7%88%B8%E7%88%B8%E9%99%8D%E6%B8%A9%E8%83%8C%E4%B8%8A%E5%A4%9A%E4%BA%86%E5%9B%9B%E5%BC%A0%E4%BA%BA%E8%84%B8%23) `196.7K 🔥`
1. [李荣浩跟豆包说啥了 (What did Li Ronghao say to Doubao?)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%E8%B7%9F%E8%B1%86%E5%8C%85%E8%AF%B4%E5%95%A5%E4%BA%86%23) `196.2K 🔥`
1. [直接请老妈吃肯德基](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E6%8E%A5%E8%AF%B7%E8%80%81%E5%A6%88%E5%90%83%E8%82%AF%E5%BE%B7%E5%9F%BA%23) `195.4K 🔥`
1. [阚清子整个人大蜕变](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E6%95%B4%E4%B8%AA%E4%BA%BA%E5%A4%A7%E8%9C%95%E5%8F%98%23) `193.1K 🔥`
1. [特朗普官宣和马斯克又成朋友了](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%AE%98%E5%AE%A3%E5%92%8C%E9%A9%AC%E6%96%AF%E5%85%8B%E5%8F%88%E6%88%90%E6%9C%8B%E5%8F%8B%E4%BA%86%23) `177.1K 🔥`
1. [碰瓷被儿子怒吼的患癌母亲已火化](https://s.weibo.com/weibo?q=%23%E7%A2%B0%E7%93%B7%E8%A2%AB%E5%84%BF%E5%AD%90%E6%80%92%E5%90%BC%E7%9A%84%E6%82%A3%E7%99%8C%E6%AF%8D%E4%BA%B2%E5%B7%B2%E7%81%AB%E5%8C%96%23) `176.8K 🔥`
1. [郑秀晶回应争议](https://s.weibo.com/weibo?q=%23%E9%83%91%E7%A7%80%E6%99%B6%E5%9B%9E%E5%BA%94%E4%BA%89%E8%AE%AE%23) `174.2K 🔥`
1. [浪姐声明](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%A3%B0%E6%98%8E%23) `144.1K 🔥`
1. [英伟达市值一夜蒸发2.2万亿](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%B8%82%E5%80%BC%E4%B8%80%E5%A4%9C%E8%92%B8%E5%8F%912.2%E4%B8%87%E4%BA%BF%23) `561.7K 🔥` `-34%`
1. [上海一医院妇科专家挂号费5000元](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%B8%80%E5%8C%BB%E9%99%A2%E5%A6%87%E7%A7%91%E4%B8%93%E5%AE%B6%E6%8C%82%E5%8F%B7%E8%B4%B95000%E5%85%83%23) `422.3K 🔥` `-25%`
1. [AI文风太好认](https://s.weibo.com/weibo?q=%23AI%E6%96%87%E9%A3%8E%E5%A4%AA%E5%A5%BD%E8%AE%A4%23) `219.5K 🔥` `-59%`
1. [榴莲核煮饭 (Durian Core Cooked Rice)](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E6%A0%B8%E7%85%AE%E9%A5%AD%23) `198.0K 🔥` `-57%`
1. [浪姐四公4位姐姐道歉 (The four sisters of Langjie Sigong apologized)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%9B%9B%E5%85%AC4%E4%BD%8D%E5%A7%90%E5%A7%90%E9%81%93%E6%AD%89%23) `186.5K 🔥` `-53%`
1. [BLG对战JDG](https://s.weibo.com/weibo?q=%23BLG%E5%AF%B9%E6%88%98JDG%23) `132.1K 🔥` `-24%`
1. [司机停车礼让母鸡后前方山体垮塌](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E6%9C%BA%E5%81%9C%E8%BD%A6%E7%A4%BC%E8%AE%A9%E6%AF%8D%E9%B8%A1%E5%90%8E%E5%89%8D%E6%96%B9%E5%B1%B1%E4%BD%93%E5%9E%AE%E5%A1%8C%23) `131.9K 🔥` `-22%`
1. [严浩翔YAN纹身](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94YAN%E7%BA%B9%E8%BA%AB%23) `126.0K 🔥` `-25%`
1. [花海是贺峻霖纪录片主角](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E6%B5%B7%E6%98%AF%E8%B4%BA%E5%B3%BB%E9%9C%96%E7%BA%AA%E5%BD%95%E7%89%87%E4%B8%BB%E8%A7%92%23) `120.9K 🔥` `-29%`
1. [美股科技股暴跌原因](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%E7%A7%91%E6%8A%80%E8%82%A1%E6%9A%B4%E8%B7%8C%E5%8E%9F%E5%9B%A0%23) `97.2K 🔥` `-42%`
1. [iPhoneUltra机模再曝光](https://s.weibo.com/weibo?q=%23iPhoneUltra%E6%9C%BA%E6%A8%A1%E5%86%8D%E6%9B%9D%E5%85%89%23) `97.2K 🔥` `-25%`

Updated at 2026-06-06 20:16:27

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
