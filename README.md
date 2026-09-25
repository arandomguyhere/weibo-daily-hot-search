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

1. [张展硕7金王](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B1%95%E7%A1%957%E9%87%91%E7%8E%8B%23) `998.1K 🔥` `NEW`
1. [全球期待中美元首会晤为世界注入正能量](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E6%9C%9F%E5%BE%85%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E4%BC%9A%E6%99%A4%E4%B8%BA%E4%B8%96%E7%95%8C%E6%B3%A8%E5%85%A5%E6%AD%A3%E8%83%BD%E9%87%8F%23) `966.3K 🔥` `NEW`
1. [龚俊李乃文拼出两代人的要强](https://s.weibo.com/weibo?q=%23%E9%BE%9A%E4%BF%8A%E6%9D%8E%E4%B9%83%E6%96%87%E6%8B%BC%E5%87%BA%E4%B8%A4%E4%BB%A3%E4%BA%BA%E7%9A%84%E8%A6%81%E5%BC%BA%23) `963.5K 🔥` `NEW`
1. [张继科说以前打日本队随便打](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%A7%E7%A7%91%E8%AF%B4%E4%BB%A5%E5%89%8D%E6%89%93%E6%97%A5%E6%9C%AC%E9%98%9F%E9%9A%8F%E4%BE%BF%E6%89%93%23) `962.4K 🔥` `NEW`
1. [兰香如故兰香遗憾而终](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E5%85%B0%E9%A6%99%E9%81%97%E6%86%BE%E8%80%8C%E7%BB%88%23) `945.8K 🔥` `NEW`
1. [亚运会乒乓球混双](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E4%B9%92%E4%B9%93%E7%90%83%E6%B7%B7%E5%8F%8C%23) `845.0K 🔥` `NEW`
1. [松岛辉空向孙颖莎竖大拇指](https://s.weibo.com/weibo?q=%23%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%E5%90%91%E5%AD%99%E9%A2%96%E8%8E%8E%E7%AB%96%E5%A4%A7%E6%8B%87%E6%8C%87%23) `740.3K 🔥` `NEW`
1. [时尚芭莎红毯](https://s.weibo.com/weibo?q=%23%E6%97%B6%E5%B0%9A%E8%8A%AD%E8%8E%8E%E7%BA%A2%E6%AF%AF%23) `591.0K 🔥` `NEW`
1. [林锦岐早就清楚兰香的真实身份](https://s.weibo.com/weibo?q=%23%E6%9E%97%E9%94%A6%E5%B2%90%E6%97%A9%E5%B0%B1%E6%B8%85%E6%A5%9A%E5%85%B0%E9%A6%99%E7%9A%84%E7%9C%9F%E5%AE%9E%E8%BA%AB%E4%BB%BD%23) `440.9K 🔥` `NEW`
1. [山姆把采购主管换成外籍](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E6%8A%8A%E9%87%87%E8%B4%AD%E4%B8%BB%E7%AE%A1%E6%8D%A2%E6%88%90%E5%A4%96%E7%B1%8D%23) `438.3K 🔥` `NEW`
1. [李泽锋给站姐买苹果18pm](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B3%BD%E9%94%8B%E7%BB%99%E7%AB%99%E5%A7%90%E4%B9%B0%E8%8B%B9%E6%9E%9C18pm%23) `437.3K 🔥` `NEW`
1. [新华社评中国男乒决赛失利](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8D%8E%E7%A4%BE%E8%AF%84%E4%B8%AD%E5%9B%BD%E7%94%B7%E4%B9%92%E5%86%B3%E8%B5%9B%E5%A4%B1%E5%88%A9%23) `435.0K 🔥` `NEW`
1. [中国女篮无缘亚运会决赛](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AE%E6%97%A0%E7%BC%98%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%86%B3%E8%B5%9B%23) `401.7K 🔥` `NEW`
1. [杨力维的百变魔法](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%8A%9B%E7%BB%B4%E7%9A%84%E7%99%BE%E5%8F%98%E9%AD%94%E6%B3%95%23) `368.3K 🔥` `NEW`
1. [张雨霏50蝶摘金](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%A8%E9%9C%8F50%E8%9D%B6%E6%91%98%E9%87%91%23) `366.8K 🔥` `NEW`
1. [不能被AI取代的64种工作](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%83%BD%E8%A2%ABAI%E5%8F%96%E4%BB%A3%E7%9A%8464%E7%A7%8D%E5%B7%A5%E4%BD%9C%23) `366.6K 🔥` `NEW`
1. [张展硕数一二三四五六七](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B1%95%E7%A1%95%E6%95%B0%E4%B8%80%E4%BA%8C%E4%B8%89%E5%9B%9B%E4%BA%94%E5%85%AD%E4%B8%83%23) `366.3K 🔥` `NEW`
1. [女子骑电动车上班老板心疼送宝马车](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%AA%91%E7%94%B5%E5%8A%A8%E8%BD%A6%E4%B8%8A%E7%8F%AD%E8%80%81%E6%9D%BF%E5%BF%83%E7%96%BC%E9%80%81%E5%AE%9D%E9%A9%AC%E8%BD%A6%23) `365.8K 🔥` `NEW`
1. [张展硕400米金牌](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B1%95%E7%A1%95400%E7%B1%B3%E9%87%91%E7%89%8C%23) `365.7K 🔥` `NEW`
1. [张继科说国乒根本就不能输](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%A7%E7%A7%91%E8%AF%B4%E5%9B%BD%E4%B9%92%E6%A0%B9%E6%9C%AC%E5%B0%B1%E4%B8%8D%E8%83%BD%E8%BE%93%23) `365.4K 🔥` `NEW`
1. [白鹿 古堡女爵](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%20%E5%8F%A4%E5%A0%A1%E5%A5%B3%E7%88%B5%23) `364.9K 🔥` `NEW`
1. [癌症早期的6个预警信号](https://s.weibo.com/weibo?q=%23%E7%99%8C%E7%97%87%E6%97%A9%E6%9C%9F%E7%9A%846%E4%B8%AA%E9%A2%84%E8%AD%A6%E4%BF%A1%E5%8F%B7%23) `364.7K 🔥` `NEW`
1. [男子留观室自尽家属向医院索赔86万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%95%99%E8%A7%82%E5%AE%A4%E8%87%AA%E5%B0%BD%E5%AE%B6%E5%B1%9E%E5%90%91%E5%8C%BB%E9%99%A2%E7%B4%A2%E8%B5%9486%E4%B8%87%23) `298.3K 🔥` `NEW`
1. [孙颖莎笑着婉拒对手生日蛋糕](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%AC%91%E7%9D%80%E5%A9%89%E6%8B%92%E5%AF%B9%E6%89%8B%E7%94%9F%E6%97%A5%E8%9B%8B%E7%B3%95%23) `282.8K 🔥` `NEW`
1. [中国女篮vs韩国女篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AEvs%E9%9F%A9%E5%9B%BD%E5%A5%B3%E7%AF%AE%23) `252.9K 🔥` `NEW`
1. [明日方舟](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%23) `251.9K 🔥` `NEW`
1. [煮荷包蛋千万不要水开直接下锅就煮](https://s.weibo.com/weibo?q=%23%E7%85%AE%E8%8D%B7%E5%8C%85%E8%9B%8B%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E6%B0%B4%E5%BC%80%E7%9B%B4%E6%8E%A5%E4%B8%8B%E9%94%85%E5%B0%B1%E7%85%AE%23) `242.1K 🔥` `NEW`
1. [谭松韵郑州线下活动人气](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E9%83%91%E5%B7%9E%E7%BA%BF%E4%B8%8B%E6%B4%BB%E5%8A%A8%E4%BA%BA%E6%B0%94%23) `237.9K 🔥` `NEW`
1. [徐嘉余200仰铜牌](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%98%89%E4%BD%99200%E4%BB%B0%E9%93%9C%E7%89%8C%23) `218.0K 🔥` `NEW`
1. [张雨霏夺金激动落泪](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%A8%E9%9C%8F%E5%A4%BA%E9%87%91%E6%BF%80%E5%8A%A8%E8%90%BD%E6%B3%AA%23) `210.1K 🔥` `NEW`
1. [白宫国宴主桌宾客有谁](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%AE%AB%E5%9B%BD%E5%AE%B4%E4%B8%BB%E6%A1%8C%E5%AE%BE%E5%AE%A2%E6%9C%89%E8%B0%81%23) `209.4K 🔥` `NEW`
1. [湖南卫视中秋之夜节目单官宣](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E4%B8%AD%E7%A7%8B%E4%B9%8B%E5%A4%9C%E8%8A%82%E7%9B%AE%E5%8D%95%E5%AE%98%E5%AE%A3%23) `209.4K 🔥` `NEW`
1. [王楚钦挺进男单16强](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%8C%BA%E8%BF%9B%E7%94%B7%E5%8D%9516%E5%BC%BA%23) `209.3K 🔥` `NEW`
1. [月亮](https://s.weibo.com/weibo?q=%23%E6%9C%88%E4%BA%AE%23) `205.1K 🔥` `NEW`
1. [白宫欢迎国宴上喝的酒不简单](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%AE%AB%E6%AC%A2%E8%BF%8E%E5%9B%BD%E5%AE%B4%E4%B8%8A%E5%96%9D%E7%9A%84%E9%85%92%E4%B8%8D%E7%AE%80%E5%8D%95%23) `192.0K 🔥` `NEW`
1. [男子确诊结肠癌遭泰康人寿拒赔](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%A1%AE%E8%AF%8A%E7%BB%93%E8%82%A0%E7%99%8C%E9%81%AD%E6%B3%B0%E5%BA%B7%E4%BA%BA%E5%AF%BF%E6%8B%92%E8%B5%94%23) `190.4K 🔥` `NEW`
1. [三角洲行动二洲年庆典](https://s.weibo.com/weibo?q=%23%E4%B8%89%E8%A7%92%E6%B4%B2%E8%A1%8C%E5%8A%A8%E4%BA%8C%E6%B4%B2%E5%B9%B4%E5%BA%86%E5%85%B8%23) `188.0K 🔥` `NEW`
1. [松岛辉空被打服](https://s.weibo.com/weibo?q=%23%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%E8%A2%AB%E6%89%93%E6%9C%8D%23) `177.4K 🔥` `NEW`
1. [曹骏不知道李光洁演过他姥爷](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E4%B8%8D%E7%9F%A5%E9%81%93%E6%9D%8E%E5%85%89%E6%B4%81%E6%BC%94%E8%BF%87%E4%BB%96%E5%A7%A5%E7%88%B7%23) `171.3K 🔥` `NEW`
1. [亚运会](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `167.9K 🔥` `NEW`
1. [美国科技巨头甲骨文爆雷](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%A7%91%E6%8A%80%E5%B7%A8%E5%A4%B4%E7%94%B2%E9%AA%A8%E6%96%87%E7%88%86%E9%9B%B7%23) `157.5K 🔥` `NEW`
1. [覃海洋3金1铜收官](https://s.weibo.com/weibo?q=%23%E8%A6%83%E6%B5%B7%E6%B4%8B3%E9%87%911%E9%93%9C%E6%94%B6%E5%AE%98%23) `154.6K 🔥` `NEW`
1. [亚运会平衡木](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%B9%B3%E8%A1%A1%E6%9C%A8%23) `150.5K 🔥` `NEW`
1. [Faker亚运会排面拉满](https://s.weibo.com/weibo?q=%23Faker%E4%BA%9A%E8%BF%90%E4%BC%9A%E6%8E%92%E9%9D%A2%E6%8B%89%E6%BB%A1%23) `147.0K 🔥` `NEW`
1. [亚运会游泳](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E6%B8%B8%E6%B3%B3%23) `560.2K 🔥` `+534%`
1. [李治廷当爸](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B2%BB%E5%BB%B7%E5%BD%93%E7%88%B8%23) `436.2K 🔥` `+45%`
1. [樊振东 亚运会](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%20%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `356.6K 🔥` `+21%`
1. [中美元首华盛顿会晤](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E5%8D%8E%E7%9B%9B%E9%A1%BF%E4%BC%9A%E6%99%A4%23) `1.0M 🔥`
1. [比亚迪第2000座闪充高速站](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E7%AC%AC2000%E5%BA%A7%E9%97%AA%E5%85%85%E9%AB%98%E9%80%9F%E7%AB%99%23) `762.3K 🔥`
1. [特朗普听到大熊猫将落户美国笑了](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%90%AC%E5%88%B0%E5%A4%A7%E7%86%8A%E7%8C%AB%E5%B0%86%E8%90%BD%E6%88%B7%E7%BE%8E%E5%9B%BD%E7%AC%91%E4%BA%86%23) `277.9K 🔥` `-66%`
1. [央视中秋晚会节目单官宣](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E4%B8%AD%E7%A7%8B%E6%99%9A%E4%BC%9A%E8%8A%82%E7%9B%AE%E5%8D%95%E5%AE%98%E5%AE%A3%23) `252.2K 🔥` `-69%`
1. [特斯拉中国又宣布降价](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E4%B8%AD%E5%9B%BD%E5%8F%88%E5%AE%A3%E5%B8%83%E9%99%8D%E4%BB%B7%23) `151.2K 🔥` `-76%`

Updated at 2026-09-25 18:28:56

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
