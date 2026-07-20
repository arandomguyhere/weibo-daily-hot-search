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

1. [包好的蝉饺子在篦子上蛄蛹起来了 (The wrapped cicada dumplings are pupating on the grate.)](https://s.weibo.com/weibo?q=%23%E5%8C%85%E5%A5%BD%E7%9A%84%E8%9D%89%E9%A5%BA%E5%AD%90%E5%9C%A8%E7%AF%A6%E5%AD%90%E4%B8%8A%E8%9B%84%E8%9B%B9%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `149.1K 🔥` `NEW`
1. [冉莹颖说邹市明继续不支棱很危险](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E8%AF%B4%E9%82%B9%E5%B8%82%E6%98%8E%E7%BB%A7%E7%BB%AD%E4%B8%8D%E6%94%AF%E6%A3%B1%E5%BE%88%E5%8D%B1%E9%99%A9%23) `133.4K 🔥` `NEW`
1. [谢贤去世前妻首度开腔](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E5%8E%BB%E4%B8%96%E5%89%8D%E5%A6%BB%E9%A6%96%E5%BA%A6%E5%BC%80%E8%85%94%23) `131.9K 🔥` `NEW`
1. [中国能建 齐夏](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%83%BD%E5%BB%BA%20%E9%BD%90%E5%A4%8F%23) `111.2K 🔥` `NEW`
1. [谢贤离世狄波拉谢婷婷首现身](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E7%A6%BB%E4%B8%96%E7%8B%84%E6%B3%A2%E6%8B%89%E8%B0%A2%E5%A9%B7%E5%A9%B7%E9%A6%96%E7%8E%B0%E8%BA%AB%23) `105.3K 🔥` `NEW`
1. [开推月经片段引韩网热议](https://s.weibo.com/weibo?q=%23%E5%BC%80%E6%8E%A8%E6%9C%88%E7%BB%8F%E7%89%87%E6%AE%B5%E5%BC%95%E9%9F%A9%E7%BD%91%E7%83%AD%E8%AE%AE%23) `101.0K 🔥` `NEW`
1. [张凌赫和王楚然都绷不住了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%92%8C%E7%8E%8B%E6%A5%9A%E7%84%B6%E9%83%BD%E7%BB%B7%E4%B8%8D%E4%BD%8F%E4%BA%86%23) `98.2K 🔥` `NEW`
1. [傅首尔做了超声炮](https://s.weibo.com/weibo?q=%23%E5%82%85%E9%A6%96%E5%B0%94%E5%81%9A%E4%BA%86%E8%B6%85%E5%A3%B0%E7%82%AE%23) `94.6K 🔥` `NEW`
1. [一念江南](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%23) `77.6K 🔥` `NEW`
1. [工人清排水沟挖出五六条大鱼](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BA%BA%E6%B8%85%E6%8E%92%E6%B0%B4%E6%B2%9F%E6%8C%96%E5%87%BA%E4%BA%94%E5%85%AD%E6%9D%A1%E5%A4%A7%E9%B1%BC%23) `67.4K 🔥` `NEW`
1. [姆巴佩金靴 (Mbappe golden boots)](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E9%87%91%E9%9D%B4%23) `56.1K 🔥` `NEW`
1. [Zara阔腿裤存安全隐患](https://s.weibo.com/weibo?q=%23Zara%E9%98%94%E8%85%BF%E8%A3%A4%E5%AD%98%E5%AE%89%E5%85%A8%E9%9A%90%E6%82%A3%23) `882.3K 🔥` `+162%`
1. [西班牙夺冠游行](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E5%A4%BA%E5%86%A0%E6%B8%B8%E8%A1%8C%23) `625.2K 🔥` `+564%`
1. [E法同行法润塞上](https://s.weibo.com/weibo?q=%23E%E6%B3%95%E5%90%8C%E8%A1%8C%E6%B3%95%E6%B6%A6%E5%A1%9E%E4%B8%8A%23) `519.2K 🔥` `+92%`
1. [孩子打暑假工把家里干破产](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E6%89%93%E6%9A%91%E5%81%87%E5%B7%A5%E6%8A%8A%E5%AE%B6%E9%87%8C%E5%B9%B2%E7%A0%B4%E4%BA%A7%23) `303.6K 🔥` `+171%`
1. [一个人怎么可以幸运到这种地步 (How can a person be so lucky?)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E4%BA%BA%E6%80%8E%E4%B9%88%E5%8F%AF%E4%BB%A5%E5%B9%B8%E8%BF%90%E5%88%B0%E8%BF%99%E7%A7%8D%E5%9C%B0%E6%AD%A5%23) `233.7K 🔥` `+132%`
1. [王玉雯别说了刘宇宁害羞了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E5%88%AB%E8%AF%B4%E4%BA%86%E5%88%98%E5%AE%87%E5%AE%81%E5%AE%B3%E7%BE%9E%E4%BA%86%23) `171.2K 🔥` `+168%`
1. [清华姚班 全球AI半壁江山](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8D%8E%E5%A7%9A%E7%8F%AD%20%E5%85%A8%E7%90%83AI%E5%8D%8A%E5%A3%81%E6%B1%9F%E5%B1%B1%23) `145.5K 🔥` `+96%`
1. [过度依赖另一半会失去自我吗](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%BA%A6%E4%BE%9D%E8%B5%96%E5%8F%A6%E4%B8%80%E5%8D%8A%E4%BC%9A%E5%A4%B1%E5%8E%BB%E8%87%AA%E6%88%91%E5%90%97%23) `124.3K 🔥` `+48%`
1. [菲方人员用划桨长棍攻击我海警](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E6%96%B9%E4%BA%BA%E5%91%98%E7%94%A8%E5%88%92%E6%A1%A8%E9%95%BF%E6%A3%8D%E6%94%BB%E5%87%BB%E6%88%91%E6%B5%B7%E8%AD%A6%23) `114.2K 🔥` `+90%`
1. [白鹿奔跑吧下一季投票第一 (White Deer Running: No. 1 in voting for the next season)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%A5%94%E8%B7%91%E5%90%A7%E4%B8%8B%E4%B8%80%E5%AD%A3%E6%8A%95%E7%A5%A8%E7%AC%AC%E4%B8%80%23) `113.0K 🔥` `+88%`
1. [突然发现很多人不会用AI (Suddenly I discovered that many people don’t know how to use AI)](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E5%BE%88%E5%A4%9A%E4%BA%BA%E4%B8%8D%E4%BC%9A%E7%94%A8AI%23) `110.9K 🔥` `+105%`
1. [泼硫酸男子被执死刑受害人发声 (Man who threw acid was executed, victim speaks out)](https://s.weibo.com/weibo?q=%23%E6%B3%BC%E7%A1%AB%E9%85%B8%E7%94%B7%E5%AD%90%E8%A2%AB%E6%89%A7%E6%AD%BB%E5%88%91%E5%8F%97%E5%AE%B3%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `108.7K 🔥` `+100%`
1. [女子生前遭男友长期家暴找父亲哭诉](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%9F%E5%89%8D%E9%81%AD%E7%94%B7%E5%8F%8B%E9%95%BF%E6%9C%9F%E5%AE%B6%E6%9A%B4%E6%89%BE%E7%88%B6%E4%BA%B2%E5%93%AD%E8%AF%89%23) `106.6K 🔥` `+96%`
1. [人一旦染上减肥才知道有多爽 (Only when people get into the habit of losing weight will they know how good it is)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E6%97%A6%E6%9F%93%E4%B8%8A%E5%87%8F%E8%82%A5%E6%89%8D%E7%9F%A5%E9%81%93%E6%9C%89%E5%A4%9A%E7%88%BD%23) `103.7K 🔥` `+91%`
1. [建议普通人都尽早用上AI](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%99%AE%E9%80%9A%E4%BA%BA%E9%83%BD%E5%B0%BD%E6%97%A9%E7%94%A8%E4%B8%8AAI%23) `102.7K 🔥` `+89%`
1. [胡塞武装宣布海上封锁沙特](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%A1%9E%E6%AD%A6%E8%A3%85%E5%AE%A3%E5%B8%83%E6%B5%B7%E4%B8%8A%E5%B0%81%E9%94%81%E6%B2%99%E7%89%B9%23) `98.2K 🔥` `+81%`
1. [谢贤去世 (Xie Xian passed away)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E5%8E%BB%E4%B8%96%23) `98.0K 🔥` `+64%`
1. [这一秒过火辱追](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E8%BE%B1%E8%BF%BD%23) `96.4K 🔥` `+68%`
1. [菲方围顶冲撞中方巡逻艇 (Philippine side collides with Chinese patrol boat)](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E6%96%B9%E5%9B%B4%E9%A1%B6%E5%86%B2%E6%92%9E%E4%B8%AD%E6%96%B9%E5%B7%A1%E9%80%BB%E8%89%87%23) `96.4K 🔥` `+77%`
1. [崇左地震](https://s.weibo.com/weibo?q=%23%E5%B4%87%E5%B7%A6%E5%9C%B0%E9%9C%87%23) `94.8K 🔥` `+74%`
1. [文科生迎来了编程时代](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%A7%91%E7%94%9F%E8%BF%8E%E6%9D%A5%E4%BA%86%E7%BC%96%E7%A8%8B%E6%97%B6%E4%BB%A3%23) `84.2K 🔥` `+55%`
1. [复联5新预告 (Avengers 5 new trailer)](https://s.weibo.com/weibo?q=%23%E5%A4%8D%E8%81%945%E6%96%B0%E9%A2%84%E5%91%8A%23) `81.4K 🔥` `+50%`
1. [人一旦找到热爱](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E6%97%A6%E6%89%BE%E5%88%B0%E7%83%AD%E7%88%B1%23) `80.6K 🔥` `+48%`
1. [王曼昱 乒超](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%20%E4%B9%92%E8%B6%85%23) `74.0K 🔥` `+36%`
1. [张家界会惩罚每一个不听劝的人 (Zhangjiajie will punish everyone who disobeys the advice)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E7%95%8C%E4%BC%9A%E6%83%A9%E7%BD%9A%E6%AF%8F%E4%B8%80%E4%B8%AA%E4%B8%8D%E5%90%AC%E5%8A%9D%E7%9A%84%E4%BA%BA%23) `70.7K 🔥` `+30%`
1. [小狗做雾化时不理解但很配合](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E5%81%9A%E9%9B%BE%E5%8C%96%E6%97%B6%E4%B8%8D%E7%90%86%E8%A7%A3%E4%BD%86%E5%BE%88%E9%85%8D%E5%90%88%23) `68.1K 🔥` `+25%`
1. [小时候吃的很多水果都慢慢消失了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%97%B6%E5%80%99%E5%90%83%E7%9A%84%E5%BE%88%E5%A4%9A%E6%B0%B4%E6%9E%9C%E9%83%BD%E6%85%A2%E6%85%A2%E6%B6%88%E5%A4%B1%E4%BA%86%23) `478.6K 🔥`
1. [月薪过万是什么感觉 (What does it feel like to earn over 10,000 yuan a month?)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA%E8%BF%87%E4%B8%87%E6%98%AF%E4%BB%80%E4%B9%88%E6%84%9F%E8%A7%89%23) `65.0K 🔥`
1. [菲方想歪曲的事实真相来了](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E6%96%B9%E6%83%B3%E6%AD%AA%E6%9B%B2%E7%9A%84%E4%BA%8B%E5%AE%9E%E7%9C%9F%E7%9B%B8%E6%9D%A5%E4%BA%86%23) `64.9K 🔥`
1. [张凌赫连续两部剧开播即登顶](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%BF%9E%E7%BB%AD%E4%B8%A4%E9%83%A8%E5%89%A7%E5%BC%80%E6%92%AD%E5%8D%B3%E7%99%BB%E9%A1%B6%23) `63.1K 🔥`
1. [建议大家越没钱越要对钱有概念](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E8%B6%8A%E6%B2%A1%E9%92%B1%E8%B6%8A%E8%A6%81%E5%AF%B9%E9%92%B1%E6%9C%89%E6%A6%82%E5%BF%B5%23) `62.0K 🔥`
1. [被王楚然演的任素素吓到了 (I was scared by Ren Susu played by Wang Churan)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%8E%8B%E6%A5%9A%E7%84%B6%E6%BC%94%E7%9A%84%E4%BB%BB%E7%B4%A0%E7%B4%A0%E5%90%93%E5%88%B0%E4%BA%86%23) `57.8K 🔥`
1. [怕橘猫太孤单于是捡了一只奶牛猫回家](https://s.weibo.com/weibo?q=%23%E6%80%95%E6%A9%98%E7%8C%AB%E5%A4%AA%E5%AD%A4%E5%8D%95%E4%BA%8E%E6%98%AF%E6%8D%A1%E4%BA%86%E4%B8%80%E5%8F%AA%E5%A5%B6%E7%89%9B%E7%8C%AB%E5%9B%9E%E5%AE%B6%23) `57.1K 🔥`
1. [柳柳 周佑凌 (Liu Liu Zhou Youling)](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%9F%B3%20%E5%91%A8%E4%BD%91%E5%87%8C%23) `57.0K 🔥`
1. [蔡依林演唱会过半了天还没黑 (It’s half way through Jolin Tsai’s concert and it’s not dark yet)](https://s.weibo.com/weibo?q=%23%E8%94%A1%E4%BE%9D%E6%9E%97%E6%BC%94%E5%94%B1%E4%BC%9A%E8%BF%87%E5%8D%8A%E4%BA%86%E5%A4%A9%E8%BF%98%E6%B2%A1%E9%BB%91%23) `56.6K 🔥`
1. [灿如繁星女主结局是做自己 (The ending of the heroine who is as bright as stars is to be herself)](https://s.weibo.com/weibo?q=%23%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%E5%A5%B3%E4%B8%BB%E7%BB%93%E5%B1%80%E6%98%AF%E5%81%9A%E8%87%AA%E5%B7%B1%23) `56.1K 🔥`
1. [流浪猫 公共猫](https://s.weibo.com/weibo?q=%23%E6%B5%81%E6%B5%AA%E7%8C%AB%20%E5%85%AC%E5%85%B1%E7%8C%AB%23) `56.1K 🔥`
1. [张凌赫代言赛百味新鲜向上 (Zhang Linghe endorses Subway Fresh and Upward)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%BB%A3%E8%A8%80%E8%B5%9B%E7%99%BE%E5%91%B3%E6%96%B0%E9%B2%9C%E5%90%91%E4%B8%8A%23) `218.7K 🔥` `-44%`
1. [张柏芝头像变黑](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D%E5%A4%B4%E5%83%8F%E5%8F%98%E9%BB%91%23) `120.2K 🔥` `-51%`
1. [成龙3年送别十多位好友](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%BE%993%E5%B9%B4%E9%80%81%E5%88%AB%E5%8D%81%E5%A4%9A%E4%BD%8D%E5%A5%BD%E5%8F%8B%23) `118.6K 🔥` `-41%`

Updated at 2026-07-21 07:34:54

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
