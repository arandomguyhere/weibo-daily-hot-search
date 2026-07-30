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

1. [唐朝不存在 伪史论 (The Tang Dynasty did not exist. Pseudo-historical theory)](https://s.weibo.com/weibo?q=%23%E5%94%90%E6%9C%9D%E4%B8%8D%E5%AD%98%E5%9C%A8%20%E4%BC%AA%E5%8F%B2%E8%AE%BA%23) `1.2M 🔥` `NEW`
1. [柯洁王中王冠军](https://s.weibo.com/weibo?q=%23%E6%9F%AF%E6%B4%81%E7%8E%8B%E4%B8%AD%E7%8E%8B%E5%86%A0%E5%86%9B%23) `846.8K 🔥` `NEW`
1. [8月起一批新规开始施行](https://s.weibo.com/weibo?q=%238%E6%9C%88%E8%B5%B7%E4%B8%80%E6%89%B9%E6%96%B0%E8%A7%84%E5%BC%80%E5%A7%8B%E6%96%BD%E8%A1%8C%23) `692.5K 🔥` `NEW`
1. [爸爸备孕第三者女儿成绩一路下滑](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%A4%87%E5%AD%95%E7%AC%AC%E4%B8%89%E8%80%85%E5%A5%B3%E5%84%BF%E6%88%90%E7%BB%A9%E4%B8%80%E8%B7%AF%E4%B8%8B%E6%BB%91%23) `609.3K 🔥` `NEW`
1. [跟着CCF学AI](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E7%9D%80CCF%E5%AD%A6AI%23) `531.3K 🔥` `NEW`
1. [迪丽热巴超大珍珠项链](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%B6%85%E5%A4%A7%E7%8F%8D%E7%8F%A0%E9%A1%B9%E9%93%BE%23) `288.5K 🔥` `NEW`
1. [泰国部长称不欢迎游客来泰买特权](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E9%83%A8%E9%95%BF%E7%A7%B0%E4%B8%8D%E6%AC%A2%E8%BF%8E%E6%B8%B8%E5%AE%A2%E6%9D%A5%E6%B3%B0%E4%B9%B0%E7%89%B9%E6%9D%83%23) `288.4K 🔥` `NEW`
1. [女子骑平衡车与他人相撞致流产](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%AA%91%E5%B9%B3%E8%A1%A1%E8%BD%A6%E4%B8%8E%E4%BB%96%E4%BA%BA%E7%9B%B8%E6%92%9E%E8%87%B4%E6%B5%81%E4%BA%A7%23) `288.1K 🔥` `NEW`
1. [迪丽热巴 美神降临](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%20%E7%BE%8E%E7%A5%9E%E9%99%8D%E4%B8%B4%23) `287.9K 🔥` `NEW`
1. [是谁一直在往中文里加片假名](https://s.weibo.com/weibo?q=%23%E6%98%AF%E8%B0%81%E4%B8%80%E7%9B%B4%E5%9C%A8%E5%BE%80%E4%B8%AD%E6%96%87%E9%87%8C%E5%8A%A0%E7%89%87%E5%81%87%E5%90%8D%23) `287.6K 🔥` `NEW`
1. [被指破坏他人婚姻教师已被免职 (Teacher accused of ruining other people's marriages has been dismissed)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%8C%87%E7%A0%B4%E5%9D%8F%E4%BB%96%E4%BA%BA%E5%A9%9A%E5%A7%BB%E6%95%99%E5%B8%88%E5%B7%B2%E8%A2%AB%E5%85%8D%E8%81%8C%23) `287.3K 🔥` `NEW`
1. [为什么有的人一看就很有气质](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%9C%89%E7%9A%84%E4%BA%BA%E4%B8%80%E7%9C%8B%E5%B0%B1%E5%BE%88%E6%9C%89%E6%B0%94%E8%B4%A8%23) `286.2K 🔥` `NEW`
1. [WBG或无缘骑士之路](https://s.weibo.com/weibo?q=%23WBG%E6%88%96%E6%97%A0%E7%BC%98%E9%AA%91%E5%A3%AB%E4%B9%8B%E8%B7%AF%23) `282.0K 🔥` `NEW`
1. [钟丽缇3个女儿均已改姓张](https://s.weibo.com/weibo?q=%23%E9%92%9F%E4%B8%BD%E7%BC%873%E4%B8%AA%E5%A5%B3%E5%84%BF%E5%9D%87%E5%B7%B2%E6%94%B9%E5%A7%93%E5%BC%A0%23) `270.0K 🔥` `NEW`
1. [这一秒过火](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%23) `265.7K 🔥` `NEW`
1. [JDG让二追三AG](https://s.weibo.com/weibo?q=%23JDG%E8%AE%A9%E4%BA%8C%E8%BF%BD%E4%B8%89AG%23) `261.6K 🔥` `NEW`
1. [怎样能叫李昀锐自己刷到这个视频](https://s.weibo.com/weibo?q=%23%E6%80%8E%E6%A0%B7%E8%83%BD%E5%8F%AB%E6%9D%8E%E6%98%80%E9%94%90%E8%87%AA%E5%B7%B1%E5%88%B7%E5%88%B0%E8%BF%99%E4%B8%AA%E8%A7%86%E9%A2%91%23) `251.0K 🔥` `NEW`
1. [巴黎奥运会乒乓球项目两周年](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%BB%8E%E5%A5%A5%E8%BF%90%E4%BC%9A%E4%B9%92%E4%B9%93%E7%90%83%E9%A1%B9%E7%9B%AE%E4%B8%A4%E5%91%A8%E5%B9%B4%23) `231.5K 🔥` `NEW`
1. [白鹿喊曾舜晞曾威航](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%96%8A%E6%9B%BE%E8%88%9C%E6%99%9E%E6%9B%BE%E5%A8%81%E8%88%AA%23) `231.5K 🔥` `NEW`
1. [爷爷没偷吃而是尝到了童年的甜](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E6%B2%A1%E5%81%B7%E5%90%83%E8%80%8C%E6%98%AF%E5%B0%9D%E5%88%B0%E4%BA%86%E7%AB%A5%E5%B9%B4%E7%9A%84%E7%94%9C%23) `227.9K 🔥` `NEW`
1. [这些广告词暴露了你的年龄 (These ads reveal your age)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BA%9B%E5%B9%BF%E5%91%8A%E8%AF%8D%E6%9A%B4%E9%9C%B2%E4%BA%86%E4%BD%A0%E7%9A%84%E5%B9%B4%E9%BE%84%23) `220.2K 🔥` `NEW`
1. [专家称散户不该坐等国家队救市](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E7%A7%B0%E6%95%A3%E6%88%B7%E4%B8%8D%E8%AF%A5%E5%9D%90%E7%AD%89%E5%9B%BD%E5%AE%B6%E9%98%9F%E6%95%91%E5%B8%82%23) `216.2K 🔥` `NEW`
1. [御木本高珠展](https://s.weibo.com/weibo?q=%23%E5%BE%A1%E6%9C%A8%E6%9C%AC%E9%AB%98%E7%8F%A0%E5%B1%95%23) `215.1K 🔥` `NEW`
1. [偶遇赵丽颖穿吊带逛街](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%A9%BF%E5%90%8A%E5%B8%A6%E9%80%9B%E8%A1%97%23) `187.3K 🔥` `NEW`
1. [无畏满分张飞](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E6%BB%A1%E5%88%86%E5%BC%A0%E9%A3%9E%23) `187.1K 🔥` `NEW`
1. [微软交出最强AI财报](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E8%BD%AF%E4%BA%A4%E5%87%BA%E6%9C%80%E5%BC%BAAI%E8%B4%A2%E6%8A%A5%23) `186.5K 🔥` `NEW`
1. [泰国部长称不欢迎给他人造成损害的游客](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E9%83%A8%E9%95%BF%E7%A7%B0%E4%B8%8D%E6%AC%A2%E8%BF%8E%E7%BB%99%E4%BB%96%E4%BA%BA%E9%80%A0%E6%88%90%E6%8D%9F%E5%AE%B3%E7%9A%84%E6%B8%B8%E5%AE%A2%23) `174.2K 🔥` `NEW`
1. [密逃给陈哲远准备了单人套餐](https://s.weibo.com/weibo?q=%23%E5%AF%86%E9%80%83%E7%BB%99%E9%99%88%E5%93%B2%E8%BF%9C%E5%87%86%E5%A4%87%E4%BA%86%E5%8D%95%E4%BA%BA%E5%A5%97%E9%A4%90%23) `172.9K 🔥` `NEW`
1. [大众T6史上最强车机](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BC%97T6%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%BC%BA%E8%BD%A6%E6%9C%BA%23) `171.0K 🔥` `NEW`
1. [侯明昊这溢出屏幕的生命力](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E8%BF%99%E6%BA%A2%E5%87%BA%E5%B1%8F%E5%B9%95%E7%9A%84%E7%94%9F%E5%91%BD%E5%8A%9B%23) `167.3K 🔥` `NEW`
1. [发现丈夫开房妻子报警称酒店涉黄 (Wife found her husband staying at a hotel and called the police, claiming the hotel was involved in pornography)](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E4%B8%88%E5%A4%AB%E5%BC%80%E6%88%BF%E5%A6%BB%E5%AD%90%E6%8A%A5%E8%AD%A6%E7%A7%B0%E9%85%92%E5%BA%97%E6%B6%89%E9%BB%84%23) `161.1K 🔥` `NEW`
1. [尹新月 赵丽颖](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E6%96%B0%E6%9C%88%20%E8%B5%B5%E4%B8%BD%E9%A2%96%23) `622.1K 🔥` `+69%`
1. [雷军同款项链仅售8.8元](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%90%8C%E6%AC%BE%E9%A1%B9%E9%93%BE%E4%BB%85%E5%94%AE8.8%E5%85%83%23) `531.3K 🔥` `+41%`
1. [刘亦菲旗袍](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E6%97%97%E8%A2%8D%23) `288.2K 🔥`
1. [78岁老人体内取出1200颗结石](https://s.weibo.com/weibo?q=%2378%E5%B2%81%E8%80%81%E4%BA%BA%E4%BD%93%E5%86%85%E5%8F%96%E5%87%BA1200%E9%A2%97%E7%BB%93%E7%9F%B3%23) `171.0K 🔥`
1. [影响上亿女性的病更名了](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E5%93%8D%E4%B8%8A%E4%BA%BF%E5%A5%B3%E6%80%A7%E7%9A%84%E7%97%85%E6%9B%B4%E5%90%8D%E4%BA%86%23) `584.7K 🔥` `-40%`
1. [拥有24h内洗澡证明的人才能出门](https://s.weibo.com/weibo?q=%23%E6%8B%A5%E6%9C%8924h%E5%86%85%E6%B4%97%E6%BE%A1%E8%AF%81%E6%98%8E%E7%9A%84%E4%BA%BA%E6%89%8D%E8%83%BD%E5%87%BA%E9%97%A8%23) `370.5K 🔥` `-61%`
1. [九门首播4集共49个广](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E9%A6%96%E6%92%AD4%E9%9B%86%E5%85%B149%E4%B8%AA%E5%B9%BF%23) `294.3K 🔥` `-68%`
1. [第一次看到母亲的收入 (Seeing my mother’s income for the first time)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%9C%8B%E5%88%B0%E6%AF%8D%E4%BA%B2%E7%9A%84%E6%94%B6%E5%85%A5%23) `288.6K 🔥` `-25%`
1. [尹新月 出戏](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E6%96%B0%E6%9C%88%20%E5%87%BA%E6%88%8F%23) `287.9K 🔥` `-26%`
1. [白鹿回复猫的树](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%9B%9E%E5%A4%8D%E7%8C%AB%E7%9A%84%E6%A0%91%23) `287.6K 🔥` `-24%`
1. [AI 焚书 (AI book burning)](https://s.weibo.com/weibo?q=%23AI%20%E7%84%9A%E4%B9%A6%23) `287.4K 🔥` `-22%`
1. [A股市值前10红了9个 (9 of the top 10 A-share stocks by market value are in the red)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%B8%82%E5%80%BC%E5%89%8D10%E7%BA%A2%E4%BA%869%E4%B8%AA%23) `287.2K 🔥` `-75%`
1. [陈伟霆赵丽颖cp感 (William Chan and Zhao Liying CP sense)](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E8%B5%B5%E4%B8%BD%E9%A2%96cp%E6%84%9F%23) `232.8K 🔥` `-39%`
1. [解放军两次警告日方不能自称海军](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E4%B8%A4%E6%AC%A1%E8%AD%A6%E5%91%8A%E6%97%A5%E6%96%B9%E4%B8%8D%E8%83%BD%E8%87%AA%E7%A7%B0%E6%B5%B7%E5%86%9B%23) `231.5K 🔥` `-40%`
1. [九门 (nine gates)](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%23) `216.0K 🔥` `-42%`
1. [不建议大家买深色蛋糕](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E4%B9%B0%E6%B7%B1%E8%89%B2%E8%9B%8B%E7%B3%95%23) `187.4K 🔥` `-53%`
1. [粉丝买了杨幂摸过的蛇](https://s.weibo.com/weibo?q=%23%E7%B2%89%E4%B8%9D%E4%B9%B0%E4%BA%86%E6%9D%A8%E5%B9%82%E6%91%B8%E8%BF%87%E7%9A%84%E8%9B%87%23) `186.7K 🔥` `-48%`
1. [王一博脖子色差](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%84%96%E5%AD%90%E8%89%B2%E5%B7%AE%23) `186.5K 🔥` `-40%`
1. [张雅琪接连两档综艺出现同类疏漏](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E6%8E%A5%E8%BF%9E%E4%B8%A4%E6%A1%A3%E7%BB%BC%E8%89%BA%E5%87%BA%E7%8E%B0%E5%90%8C%E7%B1%BB%E7%96%8F%E6%BC%8F%23) `171.0K 🔥` `-28%`
1. [退休后旅游根本没有意义](https://s.weibo.com/weibo?q=%23%E9%80%80%E4%BC%91%E5%90%8E%E6%97%85%E6%B8%B8%E6%A0%B9%E6%9C%AC%E6%B2%A1%E6%9C%89%E6%84%8F%E4%B9%89%23) `166.9K 🔥` `-55%`

Updated at 2026-07-30 18:54:35

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
