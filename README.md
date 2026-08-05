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

1. [抱冬瓜睡觉的第一批受害者出现了 (The first victims of sleeping with winter melon appeared)](https://s.weibo.com/weibo?q=%23%E6%8A%B1%E5%86%AC%E7%93%9C%E7%9D%A1%E8%A7%89%E7%9A%84%E7%AC%AC%E4%B8%80%E6%89%B9%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86%23) `646.7K 🔥` `NEW`
1. [台风白海豚](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%23) `552.6K 🔥` `NEW`
1. [原配称不会再就婚姻家事细节公开回应](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E9%85%8D%E7%A7%B0%E4%B8%8D%E4%BC%9A%E5%86%8D%E5%B0%B1%E5%A9%9A%E5%A7%BB%E5%AE%B6%E4%BA%8B%E7%BB%86%E8%8A%82%E5%85%AC%E5%BC%80%E5%9B%9E%E5%BA%94%23) `531.1K 🔥` `NEW`
1. [王一博只有一部待播作品了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%8F%AA%E6%9C%89%E4%B8%80%E9%83%A8%E5%BE%85%E6%92%AD%E4%BD%9C%E5%93%81%E4%BA%86%23) `343.8K 🔥` `NEW`
1. [商竣程2比1卢布列夫](https://s.weibo.com/weibo?q=%23%E5%95%86%E7%AB%A3%E7%A8%8B2%E6%AF%941%E5%8D%A2%E5%B8%83%E5%88%97%E5%A4%AB%23) `340.6K 🔥` `NEW`
1. [短剧 降薪](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%20%E9%99%8D%E8%96%AA%23) `325.2K 🔥` `NEW`
1. [医生漏诊获刑](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E6%BC%8F%E8%AF%8A%E8%8E%B7%E5%88%91%23) `316.8K 🔥` `NEW`
1. [王一博工作室真的很爱王一博](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%B7%A5%E4%BD%9C%E5%AE%A4%E7%9C%9F%E7%9A%84%E5%BE%88%E7%88%B1%E7%8E%8B%E4%B8%80%E5%8D%9A%23) `313.8K 🔥` `NEW`
1. [浙江宣传谈竹知了事件](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E5%AE%A3%E4%BC%A0%E8%B0%88%E7%AB%B9%E7%9F%A5%E4%BA%86%E4%BA%8B%E4%BB%B6%23) `300.8K 🔥` `NEW`
1. [教育局回应笔试第一被传话劝弃考](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E5%B1%80%E5%9B%9E%E5%BA%94%E7%AC%94%E8%AF%95%E7%AC%AC%E4%B8%80%E8%A2%AB%E4%BC%A0%E8%AF%9D%E5%8A%9D%E5%BC%83%E8%80%83%23) `253.2K 🔥` `NEW`
1. [小英和男助播好暧昧 (Xiaoying and her male assistant are so ambiguous)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%8B%B1%E5%92%8C%E7%94%B7%E5%8A%A9%E6%92%AD%E5%A5%BD%E6%9A%A7%E6%98%A7%23) `251.5K 🔥` `NEW`
1. [电影年会不能停2](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E5%B9%B4%E4%BC%9A%E4%B8%8D%E8%83%BD%E5%81%9C2%23) `217.0K 🔥` `NEW`
1. [国内机票燃油费再下调](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%86%85%E6%9C%BA%E7%A5%A8%E7%87%83%E6%B2%B9%E8%B4%B9%E5%86%8D%E4%B8%8B%E8%B0%83%23) `216.8K 🔥` `NEW`
1. [朱子曰给虞书欣做的造型](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%AD%90%E6%9B%B0%E7%BB%99%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%81%9A%E7%9A%84%E9%80%A0%E5%9E%8B%23) `172.3K 🔥` `NEW`
1. [泰国机场承认部分人员执勤言行不当](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%9C%BA%E5%9C%BA%E6%89%BF%E8%AE%A4%E9%83%A8%E5%88%86%E4%BA%BA%E5%91%98%E6%89%A7%E5%8B%A4%E8%A8%80%E8%A1%8C%E4%B8%8D%E5%BD%93%23) `160.7K 🔥` `NEW`
1. [完全是林忆莲王菲的备用歌名](https://s.weibo.com/weibo?q=%23%E5%AE%8C%E5%85%A8%E6%98%AF%E6%9E%97%E5%BF%86%E8%8E%B2%E7%8E%8B%E8%8F%B2%E7%9A%84%E5%A4%87%E7%94%A8%E6%AD%8C%E5%90%8D%23) `149.2K 🔥` `NEW`
1. [WorkBuddy 飞书钉钉](https://s.weibo.com/weibo?q=%23WorkBuddy%20%E9%A3%9E%E4%B9%A6%E9%92%89%E9%92%89%23) `136.5K 🔥` `NEW`
1. [张帅晋级多伦多赛32强](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B8%85%E6%99%8B%E7%BA%A7%E5%A4%9A%E4%BC%A6%E5%A4%9A%E8%B5%9B32%E5%BC%BA%23) `122.1K 🔥` `NEW`
1. [哈尔滨依兰洪水已涨到防洪纪念塔](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B0%94%E6%BB%A8%E4%BE%9D%E5%85%B0%E6%B4%AA%E6%B0%B4%E5%B7%B2%E6%B6%A8%E5%88%B0%E9%98%B2%E6%B4%AA%E7%BA%AA%E5%BF%B5%E5%A1%94%23) `102.4K 🔥` `NEW`
1. [刘涛接到了最权威的姐狗剧本](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B6%9B%E6%8E%A5%E5%88%B0%E4%BA%86%E6%9C%80%E6%9D%83%E5%A8%81%E7%9A%84%E5%A7%90%E7%8B%97%E5%89%A7%E6%9C%AC%23) `99.0K 🔥` `NEW`
1. [21万上锁摩托当保安面被货拉拉运走 (210,000 locked motorcycles used as security guards were carted away by cargo trucks)](https://s.weibo.com/weibo?q=%2321%E4%B8%87%E4%B8%8A%E9%94%81%E6%91%A9%E6%89%98%E5%BD%93%E4%BF%9D%E5%AE%89%E9%9D%A2%E8%A2%AB%E8%B4%A7%E6%8B%89%E6%8B%89%E8%BF%90%E8%B5%B0%23) `95.3K 🔥` `NEW`
1. [笔试第一称被第二名花钱劝弃考 (The first placer in the written test was paid to persuade him to give up the exam)](https://s.weibo.com/weibo?q=%23%E7%AC%94%E8%AF%95%E7%AC%AC%E4%B8%80%E7%A7%B0%E8%A2%AB%E7%AC%AC%E4%BA%8C%E5%90%8D%E8%8A%B1%E9%92%B1%E5%8A%9D%E5%BC%83%E8%80%83%23) `2.1M 🔥` `+54%`
1. [天才女友语文成绩148](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%89%8D%E5%A5%B3%E5%8F%8B%E8%AF%AD%E6%96%87%E6%88%90%E7%BB%A9148%23) `850.0K 🔥` `+85%`
1. [鸿蒙智行回应竹知了事件 (Hongmeng Zhixing responds to Zhu Zhi incident)](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%99%E6%99%BA%E8%A1%8C%E5%9B%9E%E5%BA%94%E7%AB%B9%E7%9F%A5%E4%BA%86%E4%BA%8B%E4%BB%B6%23) `352.3K 🔥` `+29%`
1. [港媒报道李荣浩中回力镖](https://s.weibo.com/weibo?q=%23%E6%B8%AF%E5%AA%92%E6%8A%A5%E9%81%93%E6%9D%8E%E8%8D%A3%E6%B5%A9%E4%B8%AD%E5%9B%9E%E5%8A%9B%E9%95%96%23) `336.3K 🔥` `+99%`
1. [虞书欣赛场贝微微既视感](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%B5%9B%E5%9C%BA%E8%B4%9D%E5%BE%AE%E5%BE%AE%E6%97%A2%E8%A7%86%E6%84%9F%23) `303.6K 🔥` `+96%`
1. [张凌赫小学证件照 (Zhang Linghe primary school ID photo)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%B0%8F%E5%AD%A6%E8%AF%81%E4%BB%B6%E7%85%A7%23) `288.5K 🔥` `+71%`
1. [怪不得有人看病能在诊室待很久](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E6%9C%89%E4%BA%BA%E7%9C%8B%E7%97%85%E8%83%BD%E5%9C%A8%E8%AF%8A%E5%AE%A4%E5%BE%85%E5%BE%88%E4%B9%85%23) `285.2K 🔥` `+33%`
1. [重案六组消失的警号](https://s.weibo.com/weibo?q=%23%E9%87%8D%E6%A1%88%E5%85%AD%E7%BB%84%E6%B6%88%E5%A4%B1%E7%9A%84%E8%AD%A6%E5%8F%B7%23) `281.5K 🔥` `+66%`
1. [心理学上有个词叫螃蟹效应 (There is a term in psychology called the crab effect.)](https://s.weibo.com/weibo?q=%23%E5%BF%83%E7%90%86%E5%AD%A6%E4%B8%8A%E6%9C%89%E4%B8%AA%E8%AF%8D%E5%8F%AB%E8%9E%83%E8%9F%B9%E6%95%88%E5%BA%94%23) `255.5K 🔥` `+53%`
1. [35岁女子1天5瓶可乐喝成60岁脸](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E5%A5%B3%E5%AD%901%E5%A4%A95%E7%93%B6%E5%8F%AF%E4%B9%90%E5%96%9D%E6%88%9060%E5%B2%81%E8%84%B8%23) `254.7K 🔥` `+106%`
1. [王腾的小米SU7Ultra泊车辅助遇bug](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%85%BE%E7%9A%84%E5%B0%8F%E7%B1%B3SU7Ultra%E6%B3%8A%E8%BD%A6%E8%BE%85%E5%8A%A9%E9%81%87bug%23) `254.5K 🔥` `+51%`
1. [张凌赫素人时期依旧很权威](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%B4%A0%E4%BA%BA%E6%97%B6%E6%9C%9F%E4%BE%9D%E6%97%A7%E5%BE%88%E6%9D%83%E5%A8%81%23) `252.1K 🔥` `+104%`
1. [湛江教育局回应考生被传话劝退](https://s.weibo.com/weibo?q=%23%E6%B9%9B%E6%B1%9F%E6%95%99%E8%82%B2%E5%B1%80%E5%9B%9E%E5%BA%94%E8%80%83%E7%94%9F%E8%A2%AB%E4%BC%A0%E8%AF%9D%E5%8A%9D%E9%80%80%23) `244.1K 🔥` `+179%`
1. [终于知道为什么抢票抢不过了 (I finally know why I can’t get tickets when I try to grab them.)](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E4%B8%BA%E4%BB%80%E4%B9%88%E6%8A%A2%E7%A5%A8%E6%8A%A2%E4%B8%8D%E8%BF%87%E4%BA%86%23) `218.0K 🔥` `+75%`
1. [每天提早上班就为了看别人家狗](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%A4%A9%E6%8F%90%E6%97%A9%E4%B8%8A%E7%8F%AD%E5%B0%B1%E4%B8%BA%E4%BA%86%E7%9C%8B%E5%88%AB%E4%BA%BA%E5%AE%B6%E7%8B%97%23) `209.4K 🔥` `+71%`
1. [中式片假名能不能离开我的生活 (Can Chinese katakana leave my life?)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%BC%8F%E7%89%87%E5%81%87%E5%90%8D%E8%83%BD%E4%B8%8D%E8%83%BD%E7%A6%BB%E5%BC%80%E6%88%91%E7%9A%84%E7%94%9F%E6%B4%BB%23) `207.3K 🔥` `+61%`
1. [女孩8岁独居床头放菜刀现考上一本](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A98%E5%B2%81%E7%8B%AC%E5%B1%85%E5%BA%8A%E5%A4%B4%E6%94%BE%E8%8F%9C%E5%88%80%E7%8E%B0%E8%80%83%E4%B8%8A%E4%B8%80%E6%9C%AC%23) `206.5K 🔥` `+22%`
1. [光模块](https://s.weibo.com/weibo?q=%23%E5%85%89%E6%A8%A1%E5%9D%97%23) `174.8K 🔥` `+35%`
1. [孟子义捧花头像](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%8D%A7%E8%8A%B1%E5%A4%B4%E5%83%8F%23) `158.9K 🔥` `+126%`
1. [阿根廷队长为西班牙火灾捐款](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E9%95%BF%E4%B8%BA%E8%A5%BF%E7%8F%AD%E7%89%99%E7%81%AB%E7%81%BE%E6%8D%90%E6%AC%BE%23) `139.0K 🔥` `+21%`
1. [八仙 (the Eight Immortals)](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%23) `91.5K 🔥` `+57%`
1. [6图看上半年经济发展动能向新](https://s.weibo.com/weibo?q=%236%E5%9B%BE%E7%9C%8B%E4%B8%8A%E5%8D%8A%E5%B9%B4%E7%BB%8F%E6%B5%8E%E5%8F%91%E5%B1%95%E5%8A%A8%E8%83%BD%E5%90%91%E6%96%B0%23) `866.3K 🔥`
1. [死刑改死缓被害人家属十年后才知晓](https://s.weibo.com/weibo?q=%23%E6%AD%BB%E5%88%91%E6%94%B9%E6%AD%BB%E7%BC%93%E8%A2%AB%E5%AE%B3%E4%BA%BA%E5%AE%B6%E5%B1%9E%E5%8D%81%E5%B9%B4%E5%90%8E%E6%89%8D%E7%9F%A5%E6%99%93%23) `252.5K 🔥`
1. [抱冬瓜降温第一批受害者出现 (The first victims of hugging winter melon to cool down appear)](https://s.weibo.com/weibo?q=%23%E6%8A%B1%E5%86%AC%E7%93%9C%E9%99%8D%E6%B8%A9%E7%AC%AC%E4%B8%80%E6%89%B9%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%23) `124.8K 🔥`
1. [金鹰奖 提名规则](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%20%E6%8F%90%E5%90%8D%E8%A7%84%E5%88%99%23) `100.6K 🔥`
1. [影视寒冬最不愁找工作的人 (The person who least worries about finding a job in the cold winter of film and television)](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E5%AF%92%E5%86%AC%E6%9C%80%E4%B8%8D%E6%84%81%E6%89%BE%E5%B7%A5%E4%BD%9C%E7%9A%84%E4%BA%BA%23) `91.3K 🔥`
1. [泰航拒绝20多名中国乘客登机 (Thai Airways refused to board more than 20 Chinese passengers)](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E8%88%AA%E6%8B%92%E7%BB%9D20%E5%A4%9A%E5%90%8D%E4%B8%AD%E5%9B%BD%E4%B9%98%E5%AE%A2%E7%99%BB%E6%9C%BA%23) `985.1K 🔥` `-26%`
1. [樊振东的奥运金牌含金量有多高 (How valuable is Fan Zhendong’s Olympic gold medal?)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%9A%84%E5%A5%A5%E8%BF%90%E9%87%91%E7%89%8C%E5%90%AB%E9%87%91%E9%87%8F%E6%9C%89%E5%A4%9A%E9%AB%98%23) `91.9K 🔥` `-46%`

Updated at 2026-08-05 09:03:10

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
