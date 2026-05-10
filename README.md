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

1. [孙颖莎vs张本美和 (Sun Yingsha vs. Zhang Benmeihe)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Evs%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `4.1M 🔥` `NEW`
1. [国乒女团7连冠](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A27%E8%BF%9E%E5%86%A0%23) `3.4M 🔥` `NEW`
1. [王曼昱vs早田希娜](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1vs%E6%97%A9%E7%94%B0%E5%B8%8C%E5%A8%9C%23) `2.9M 🔥` `NEW`
1. [身体的炎症全部消失22个tips](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BD%93%E7%9A%84%E7%82%8E%E7%97%87%E5%85%A8%E9%83%A8%E6%B6%88%E5%A4%B122%E4%B8%AAtips%23) `2.0M 🔥` `NEW`
1. [压力给到孙颖莎](https://s.weibo.com/weibo?q=%23%E5%8E%8B%E5%8A%9B%E7%BB%99%E5%88%B0%E5%AD%99%E9%A2%96%E8%8E%8E%23) `1.3M 🔥` `NEW`
1. [盼弟 来弟](https://s.weibo.com/weibo?q=%23%E7%9B%BC%E5%BC%9F%20%E6%9D%A5%E5%BC%9F%23) `1.1M 🔥` `NEW`
1. [蔡文静一觉醒来账号被没收了](https://s.weibo.com/weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E4%B8%80%E8%A7%89%E9%86%92%E6%9D%A5%E8%B4%A6%E5%8F%B7%E8%A2%AB%E6%B2%A1%E6%94%B6%E4%BA%86%23) `905.5K 🔥` `NEW`
1. [孙颖莎3比0张本美和](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E3%E6%AF%940%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `725.6K 🔥` `NEW`
1. [中国女团2比2日本](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%9B%A22%E6%AF%942%E6%97%A5%E6%9C%AC%23) `719.0K 🔥` `NEW`
1. [宛瑜饰演者赵霁近况](https://s.weibo.com/weibo?q=%23%E5%AE%9B%E7%91%9C%E9%A5%B0%E6%BC%94%E8%80%85%E8%B5%B5%E9%9C%81%E8%BF%91%E5%86%B5%23) `569.6K 🔥` `NEW`
1. [孙颖莎彰显体育精神 (Sun Yingsha demonstrates sportsmanship)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%BD%B0%E6%98%BE%E4%BD%93%E8%82%B2%E7%B2%BE%E7%A5%9E%23) `569.6K 🔥` `NEW`
1. [蒯曼 削球](https://s.weibo.com/weibo?q=%23%E8%92%AF%E6%9B%BC%20%E5%89%8A%E7%90%83%23) `547.2K 🔥` `NEW`
1. [我不买开口榴莲的原因](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%B8%8D%E4%B9%B0%E5%BC%80%E5%8F%A3%E6%A6%B4%E8%8E%B2%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `530.4K 🔥` `NEW`
1. [圣罗兰拉黑杭州一条街道](https://s.weibo.com/weibo?q=%23%E5%9C%A3%E7%BD%97%E5%85%B0%E6%8B%89%E9%BB%91%E6%9D%AD%E5%B7%9E%E4%B8%80%E6%9D%A1%E8%A1%97%E9%81%93%23) `475.6K 🔥` `NEW`
1. [蒯曼1比3桥本帆乃香](https://s.weibo.com/weibo?q=%23%E8%92%AF%E6%9B%BC1%E6%AF%943%E6%A1%A5%E6%9C%AC%E5%B8%86%E4%B9%83%E9%A6%99%23) `471.9K 🔥` `NEW`
1. [严浩翔要求给每位小演员单独的镜头](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E8%A6%81%E6%B1%82%E7%BB%99%E6%AF%8F%E4%BD%8D%E5%B0%8F%E6%BC%94%E5%91%98%E5%8D%95%E7%8B%AC%E7%9A%84%E9%95%9C%E5%A4%B4%23) `266.8K 🔥` `NEW`
1. [伊朗已回应美国提出的结束战争方案](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%B7%B2%E5%9B%9E%E5%BA%94%E7%BE%8E%E5%9B%BD%E6%8F%90%E5%87%BA%E7%9A%84%E7%BB%93%E6%9D%9F%E6%88%98%E4%BA%89%E6%96%B9%E6%A1%88%23) `236.1K 🔥` `NEW`
1. [睫毛掉进眼睛里钙化了](https://s.weibo.com/weibo?q=%23%E7%9D%AB%E6%AF%9B%E6%8E%89%E8%BF%9B%E7%9C%BC%E7%9D%9B%E9%87%8C%E9%92%99%E5%8C%96%E4%BA%86%23) `235.6K 🔥` `NEW`
1. [马琳战术](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E7%90%B3%E6%88%98%E6%9C%AF%23) `234.8K 🔥` `NEW`
1. [马立奥妹妹早产](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E7%AB%8B%E5%A5%A5%E5%A6%B9%E5%A6%B9%E6%97%A9%E4%BA%A7%23) `234.5K 🔥` `NEW`
1. [张本美和打得凶 (Zhang Benmeihe fought fiercely)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%E6%89%93%E5%BE%97%E5%87%B6%23) `233.8K 🔥` `NEW`
1. [李金铭报平安第一天](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%87%91%E9%93%AD%E6%8A%A5%E5%B9%B3%E5%AE%89%E7%AC%AC%E4%B8%80%E5%A4%A9%23) `233.6K 🔥` `NEW`
1. [男生走路看手机踢到石头致脚趾断离](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E8%B5%B0%E8%B7%AF%E7%9C%8B%E6%89%8B%E6%9C%BA%E8%B8%A2%E5%88%B0%E7%9F%B3%E5%A4%B4%E8%87%B4%E8%84%9A%E8%B6%BE%E6%96%AD%E7%A6%BB%23) `230.2K 🔥` `NEW`
1. [孙颖莎怒吼庆祝](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%80%92%E5%90%BC%E5%BA%86%E7%A5%9D%23) `228.8K 🔥` `NEW`
1. [伊能静晒女儿母亲节礼物](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E6%99%92%E5%A5%B3%E5%84%BF%E6%AF%8D%E4%BA%B2%E8%8A%82%E7%A4%BC%E7%89%A9%23) `192.4K 🔥` `NEW`
1. [马琳感受到王皓的压力了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E7%90%B3%E6%84%9F%E5%8F%97%E5%88%B0%E7%8E%8B%E7%9A%93%E7%9A%84%E5%8E%8B%E5%8A%9B%E4%BA%86%23) `192.4K 🔥` `NEW`
1. [中国女团vs日本](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%9B%A2vs%E6%97%A5%E6%9C%AC%23) `6.8M 🔥` `+149%`
1. [中国潜水器发现深海生命绿洲](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%BD%9C%E6%B0%B4%E5%99%A8%E5%8F%91%E7%8E%B0%E6%B7%B1%E6%B5%B7%E7%94%9F%E5%91%BD%E7%BB%BF%E6%B4%B2%23) `3.7M 🔥` `+38%`
1. [A哎 燕京啤酒是社交硬通货 (Ah, Yanjing Beer is social currency)](https://s.weibo.com/weibo?q=%23A%E5%93%8E%20%E7%87%95%E4%BA%AC%E5%95%A4%E9%85%92%E6%98%AF%E7%A4%BE%E4%BA%A4%E7%A1%AC%E9%80%9A%E8%B4%A7%23) `3.6M 🔥` `+313%`
1. [谁说生完娃就不痛经 (Who said you won’t have menstrual cramps after giving birth?)](https://s.weibo.com/weibo?q=%23%E8%B0%81%E8%AF%B4%E7%94%9F%E5%AE%8C%E5%A8%83%E5%B0%B1%E4%B8%8D%E7%97%9B%E7%BB%8F%23) `1.4M 🔥` `+227%`
1. [网传一念江南黄了](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%E9%BB%84%E4%BA%86%23) `1.1M 🔥` `+97%`
1. [小英道歉了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%8B%B1%E9%81%93%E6%AD%89%E4%BA%86%23) `1.1M 🔥` `+40%`
1. [主角 (main character)](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `569.6K 🔥` `+85%`
1. [45岁独身男子离世15万存款被转走](https://s.weibo.com/weibo?q=%2345%E5%B2%81%E7%8B%AC%E8%BA%AB%E7%94%B7%E5%AD%90%E7%A6%BB%E4%B8%9615%E4%B8%87%E5%AD%98%E6%AC%BE%E8%A2%AB%E8%BD%AC%E8%B5%B0%23) `569.6K 🔥` `+82%`
1. [影院卫生间用手握香蕉西柚代指男女](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E9%99%A2%E5%8D%AB%E7%94%9F%E9%97%B4%E7%94%A8%E6%89%8B%E6%8F%A1%E9%A6%99%E8%95%89%E8%A5%BF%E6%9F%9A%E4%BB%A3%E6%8C%87%E7%94%B7%E5%A5%B3%23) `569.6K 🔥`
1. [汉坦病毒邮轮零号病人身份曝光](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%E9%82%AE%E8%BD%AE%E9%9B%B6%E5%8F%B7%E7%97%85%E4%BA%BA%E8%BA%AB%E4%BB%BD%E6%9B%9D%E5%85%89%23) `569.6K 🔥`
1. [蒯曼vs桥本帆乃香](https://s.weibo.com/weibo?q=%23%E8%92%AF%E6%9B%BCvs%E6%A1%A5%E6%9C%AC%E5%B8%86%E4%B9%83%E9%A6%99%23) `565.7K 🔥`
1. [要对存钱有概念 (Have a concept of saving money)](https://s.weibo.com/weibo?q=%23%E8%A6%81%E5%AF%B9%E5%AD%98%E9%92%B1%E6%9C%89%E6%A6%82%E5%BF%B5%23) `1.1M 🔥` `-42%`
1. [全公司最不会离职的人终于出现了 (The person who is least likely to leave the company finally appears)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%85%AC%E5%8F%B8%E6%9C%80%E4%B8%8D%E4%BC%9A%E7%A6%BB%E8%81%8C%E7%9A%84%E4%BA%BA%E7%BB%88%E4%BA%8E%E5%87%BA%E7%8E%B0%E4%BA%86%23) `783.3K 🔥` `-43%`
1. [王曼昱2比3张本美和 (Wang Manyu 2 to 3 Zhang Benmeihe)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B12%E6%AF%943%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `569.5K 🔥` `-74%`
1. [给阿嬷的情书9.1分是什么概念](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A69.1%E5%88%86%E6%98%AF%E4%BB%80%E4%B9%88%E6%A6%82%E5%BF%B5%23) `236.4K 🔥` `-27%`
1. [王俊凯说北京在我心里是首都](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%AF%B4%E5%8C%97%E4%BA%AC%E5%9C%A8%E6%88%91%E5%BF%83%E9%87%8C%E6%98%AF%E9%A6%96%E9%83%BD%23) `236.0K 🔥` `-69%`
1. [邓超说孙俪带三个辛苦了](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E8%AF%B4%E5%AD%99%E4%BF%AA%E5%B8%A6%E4%B8%89%E4%B8%AA%E8%BE%9B%E8%8B%A6%E4%BA%86%23) `235.3K 🔥` `-50%`
1. [世乒赛 (World Table Tennis Championships)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E4%B9%92%E8%B5%9B%23) `234.1K 🔥` `-24%`
1. [何穗晒与儿子合影 (He Suishai takes a photo with his son)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%A9%97%E6%99%92%E4%B8%8E%E5%84%BF%E5%AD%90%E5%90%88%E5%BD%B1%23) `233.1K 🔥` `-22%`
1. [孙颖莎vs早田希娜 (Sun Yingsha vs Hina Hayata)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Evs%E6%97%A9%E7%94%B0%E5%B8%8C%E5%A8%9C%23) `233.0K 🔥` `-88%`
1. [虞书欣谷爱凌同框](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%B0%B7%E7%88%B1%E5%87%8C%E5%90%8C%E6%A1%86%23) `232.7K 🔥` `-28%`
1. [谈莉娜给孩子做母乳手镯](https://s.weibo.com/weibo?q=%23%E8%B0%88%E8%8E%89%E5%A8%9C%E7%BB%99%E5%AD%A9%E5%AD%90%E5%81%9A%E6%AF%8D%E4%B9%B3%E6%89%8B%E9%95%AF%23) `204.2K 🔥` `-31%`
1. [歌手2026 (singer 2026)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%23) `198.9K 🔥` `-36%`
1. [越南男子不慎卷入粉碎机身亡](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E5%8D%97%E7%94%B7%E5%AD%90%E4%B8%8D%E6%85%8E%E5%8D%B7%E5%85%A5%E7%B2%89%E7%A2%8E%E6%9C%BA%E8%BA%AB%E4%BA%A1%23) `192.9K 🔥` `-37%`
1. [刘浩存陈都灵什么时候认识](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E9%99%88%E9%83%BD%E7%81%B5%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E8%AE%A4%E8%AF%86%23) `192.5K 🔥` `-30%`
1. [宋亚轩国乐无双八首歌串烧](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%9B%BD%E4%B9%90%E6%97%A0%E5%8F%8C%E5%85%AB%E9%A6%96%E6%AD%8C%E4%B8%B2%E7%83%A7%23) `192.4K 🔥` `-37%`

Updated at 2026-05-10 21:49:41

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
