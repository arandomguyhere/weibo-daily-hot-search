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

1. [王曼昱哭了 (Wang Manyu cried)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%93%AD%E4%BA%86%23) `5.3M 🔥` `NEW`
1. [孙颖莎MVP](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8EMVP%23) `2.6M 🔥` `NEW`
1. [主角收视率](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%E6%94%B6%E8%A7%86%E7%8E%87%23) `766.7K 🔥` `NEW`
1. [严浩翔 延毕](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%20%E5%BB%B6%E6%AF%95%23) `764.2K 🔥` `NEW`
1. [吃出24块鸡头顾客被免单仍想市监介入](https://s.weibo.com/weibo?q=%23%E5%90%83%E5%87%BA24%E5%9D%97%E9%B8%A1%E5%A4%B4%E9%A1%BE%E5%AE%A2%E8%A2%AB%E5%85%8D%E5%8D%95%E4%BB%8D%E6%83%B3%E5%B8%82%E7%9B%91%E4%BB%8B%E5%85%A5%23) `595.3K 🔥` `NEW`
1. [ZmjjKK解锁3000击败里程碑](https://s.weibo.com/weibo?q=%23ZmjjKK%E8%A7%A3%E9%94%813000%E5%87%BB%E8%B4%A5%E9%87%8C%E7%A8%8B%E7%A2%91%23) `589.6K 🔥` `NEW`
1. [EDG战胜XLG夺冠](https://s.weibo.com/weibo?q=%23EDG%E6%88%98%E8%83%9CXLG%E5%A4%BA%E5%86%A0%23) `572.2K 🔥` `NEW`
1. [马龙许昕为孙颖莎鼓掌](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95%E4%B8%BA%E5%AD%99%E9%A2%96%E8%8E%8E%E9%BC%93%E6%8E%8C%23) `552.2K 🔥` `NEW`
1. [孙颖莎哽咽了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%93%BD%E5%92%BD%E4%BA%86%23) `221.4K 🔥` `NEW`
1. [孙颖莎证明自己为何是世界第一](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%AF%81%E6%98%8E%E8%87%AA%E5%B7%B1%E4%B8%BA%E4%BD%95%E6%98%AF%E4%B8%96%E7%95%8C%E7%AC%AC%E4%B8%80%23) `220.9K 🔥` `NEW`
1. [身体有炎症要忌口4种食物 (4 foods to avoid if you have inflammation in your body)](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BD%93%E6%9C%89%E7%82%8E%E7%97%87%E8%A6%81%E5%BF%8C%E5%8F%A34%E7%A7%8D%E9%A3%9F%E7%89%A9%23) `219.0K 🔥` `NEW`
1. [主角 电影质感](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%20%E7%94%B5%E5%BD%B1%E8%B4%A8%E6%84%9F%23) `199.2K 🔥` `NEW`
1. [央视曝光三无手搓汽车](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E4%B8%89%E6%97%A0%E6%89%8B%E6%90%93%E6%B1%BD%E8%BD%A6%23) `167.1K 🔥` `NEW`
1. [领克07GT公告图曝光](https://s.weibo.com/weibo?q=%23%E9%A2%86%E5%85%8B07GT%E5%85%AC%E5%91%8A%E5%9B%BE%E6%9B%9D%E5%85%89%23) `146.2K 🔥` `NEW`
1. [国乒女团7连冠](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A27%E8%BF%9E%E5%86%A0%23) `13.3M 🔥` `+288%`
1. [马琳战术](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E7%90%B3%E6%88%98%E6%9C%AF%23) `1.8M 🔥` `+647%`
1. [盼弟 来弟](https://s.weibo.com/weibo?q=%23%E7%9B%BC%E5%BC%9F%20%E6%9D%A5%E5%BC%9F%23) `1.7M 🔥` `+54%`
1. [睫毛掉进眼睛里钙化了](https://s.weibo.com/weibo?q=%23%E7%9D%AB%E6%AF%9B%E6%8E%89%E8%BF%9B%E7%9C%BC%E7%9D%9B%E9%87%8C%E9%92%99%E5%8C%96%E4%BA%86%23) `687.1K 🔥` `+192%`
1. [马立奥妹妹早产](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E7%AB%8B%E5%A5%A5%E5%A6%B9%E5%A6%B9%E6%97%A9%E4%BA%A7%23) `577.4K 🔥` `+146%`
1. [严浩翔要求给每位小演员单独的镜头](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E8%A6%81%E6%B1%82%E7%BB%99%E6%AF%8F%E4%BD%8D%E5%B0%8F%E6%BC%94%E5%91%98%E5%8D%95%E7%8B%AC%E7%9A%84%E9%95%9C%E5%A4%B4%23) `376.1K 🔥` `+41%`
1. [中国潜水器发现深海生命绿洲 (Chinese submersible discovers deep-sea oasis of life)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%BD%9C%E6%B0%B4%E5%99%A8%E5%8F%91%E7%8E%B0%E6%B7%B1%E6%B5%B7%E7%94%9F%E5%91%BD%E7%BB%BF%E6%B4%B2%23) `3.2M 🔥`
1. [身体的炎症全部消失22个tips](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BD%93%E7%9A%84%E7%82%8E%E7%97%87%E5%85%A8%E9%83%A8%E6%B6%88%E5%A4%B122%E4%B8%AAtips%23) `1.8M 🔥`
1. [蔡文静一觉醒来账号被没收了](https://s.weibo.com/weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E4%B8%80%E8%A7%89%E9%86%92%E6%9D%A5%E8%B4%A6%E5%8F%B7%E8%A2%AB%E6%B2%A1%E6%94%B6%E4%BA%86%23) `734.5K 🔥`
1. [影院卫生间用手握香蕉西柚代指男女](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E9%99%A2%E5%8D%AB%E7%94%9F%E9%97%B4%E7%94%A8%E6%89%8B%E6%8F%A1%E9%A6%99%E8%95%89%E8%A5%BF%E6%9F%9A%E4%BB%A3%E6%8C%87%E7%94%B7%E5%A5%B3%23) `622.8K 🔥`
1. [主角 (main character)](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `607.0K 🔥`
1. [宛瑜饰演者赵霁近况](https://s.weibo.com/weibo?q=%23%E5%AE%9B%E7%91%9C%E9%A5%B0%E6%BC%94%E8%80%85%E8%B5%B5%E9%9C%81%E8%BF%91%E5%86%B5%23) `490.6K 🔥`
1. [汉坦病毒邮轮零号病人身份曝光](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%E9%82%AE%E8%BD%AE%E9%9B%B6%E5%8F%B7%E7%97%85%E4%BA%BA%E8%BA%AB%E4%BB%BD%E6%9B%9D%E5%85%89%23) `489.6K 🔥`
1. [我不买开口榴莲的原因](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%B8%8D%E4%B9%B0%E5%BC%80%E5%8F%A3%E6%A6%B4%E8%8E%B2%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `477.2K 🔥`
1. [越南男子不慎卷入粉碎机身亡](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E5%8D%97%E7%94%B7%E5%AD%90%E4%B8%8D%E6%85%8E%E5%8D%B7%E5%85%A5%E7%B2%89%E7%A2%8E%E6%9C%BA%E8%BA%AB%E4%BA%A1%23) `222.1K 🔥`
1. [王俊凯说北京在我心里是首都](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%AF%B4%E5%8C%97%E4%BA%AC%E5%9C%A8%E6%88%91%E5%BF%83%E9%87%8C%E6%98%AF%E9%A6%96%E9%83%BD%23) `221.9K 🔥`
1. [邓超说孙俪带三个辛苦了](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E8%AF%B4%E5%AD%99%E4%BF%AA%E5%B8%A6%E4%B8%89%E4%B8%AA%E8%BE%9B%E8%8B%A6%E4%BA%86%23) `221.2K 🔥`
1. [李金铭报平安第一天 (Li Jinming reported safety on the first day)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%87%91%E9%93%AD%E6%8A%A5%E5%B9%B3%E5%AE%89%E7%AC%AC%E4%B8%80%E5%A4%A9%23) `221.0K 🔥`
1. [马琳感受到王皓的压力了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E7%90%B3%E6%84%9F%E5%8F%97%E5%88%B0%E7%8E%8B%E7%9A%93%E7%9A%84%E5%8E%8B%E5%8A%9B%E4%BA%86%23) `220.6K 🔥`
1. [伊朗已回应美国提出的结束战争方案](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%B7%B2%E5%9B%9E%E5%BA%94%E7%BE%8E%E5%9B%BD%E6%8F%90%E5%87%BA%E7%9A%84%E7%BB%93%E6%9D%9F%E6%88%98%E4%BA%89%E6%96%B9%E6%A1%88%23) `220.6K 🔥`
1. [孙颖莎怒吼庆祝](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%80%92%E5%90%BC%E5%BA%86%E7%A5%9D%23) `219.5K 🔥`
1. [中国女团vs日本](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%9B%A2vs%E6%97%A5%E6%9C%AC%23) `1.1M 🔥` `-84%`
1. [孙颖莎vs张本美和 (Sun Yingsha vs. Zhang Benmeihe)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Evs%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `788.7K 🔥` `-81%`
1. [要对存钱有概念 (Have a concept of saving money)](https://s.weibo.com/weibo?q=%23%E8%A6%81%E5%AF%B9%E5%AD%98%E9%92%B1%E6%9C%89%E6%A6%82%E5%BF%B5%23) `747.9K 🔥` `-30%`
1. [小英道歉了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%8B%B1%E9%81%93%E6%AD%89%E4%BA%86%23) `670.2K 🔥` `-37%`
1. [压力给到孙颖莎](https://s.weibo.com/weibo?q=%23%E5%8E%8B%E5%8A%9B%E7%BB%99%E5%88%B0%E5%AD%99%E9%A2%96%E8%8E%8E%23) `630.3K 🔥` `-52%`
1. [王曼昱vs早田希娜](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1vs%E6%97%A9%E7%94%B0%E5%B8%8C%E5%A8%9C%23) `557.3K 🔥` `-81%`
1. [网传一念江南黄了](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%E9%BB%84%E4%BA%86%23) `298.9K 🔥` `-72%`
1. [蒯曼 削球](https://s.weibo.com/weibo?q=%23%E8%92%AF%E6%9B%BC%20%E5%89%8A%E7%90%83%23) `222.0K 🔥` `-59%`
1. [孙颖莎3比0张本美和 (Sun Yingsha 3-0 Zhang Benmeihe)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E3%E6%AF%940%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `221.7K 🔥` `-69%`
1. [全公司最不会离职的人终于出现了 (The person who is least likely to leave the company finally appears)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%85%AC%E5%8F%B8%E6%9C%80%E4%B8%8D%E4%BC%9A%E7%A6%BB%E8%81%8C%E7%9A%84%E4%BA%BA%E7%BB%88%E4%BA%8E%E5%87%BA%E7%8E%B0%E4%BA%86%23) `221.6K 🔥` `-72%`
1. [蒯曼vs桥本帆乃香](https://s.weibo.com/weibo?q=%23%E8%92%AF%E6%9B%BCvs%E6%A1%A5%E6%9C%AC%E5%B8%86%E4%B9%83%E9%A6%99%23) `219.6K 🔥` `-61%`
1. [王曼昱2比3张本美和 (Wang Manyu 2 to 3 Zhang Benmeihe)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B12%E6%AF%943%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `218.5K 🔥` `-62%`
1. [45岁独身男子离世15万存款被转走](https://s.weibo.com/weibo?q=%2345%E5%B2%81%E7%8B%AC%E8%BA%AB%E7%94%B7%E5%AD%90%E7%A6%BB%E4%B8%9615%E4%B8%87%E5%AD%98%E6%AC%BE%E8%A2%AB%E8%BD%AC%E8%B5%B0%23) `178.3K 🔥` `-69%`
1. [歌手2026 (singer 2026)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%23) `150.1K 🔥` `-25%`
1. [给阿嬷的情书9.1分是什么概念](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A69.1%E5%88%86%E6%98%AF%E4%BB%80%E4%B9%88%E6%A6%82%E5%BF%B5%23) `146.5K 🔥` `-38%`

Updated at 2026-05-10 22:41:55

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
