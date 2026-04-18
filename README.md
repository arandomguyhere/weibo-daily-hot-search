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

1. [日本媒体报道中国绝大多数是负面 (Japanese media reports on China are overwhelmingly negative)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%AA%92%E4%BD%93%E6%8A%A5%E9%81%93%E4%B8%AD%E5%9B%BD%E7%BB%9D%E5%A4%A7%E5%A4%9A%E6%95%B0%E6%98%AF%E8%B4%9F%E9%9D%A2%23) `723.4K 🔥` `NEW`
1. [何润东回应没骑马](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E5%9B%9E%E5%BA%94%E6%B2%A1%E9%AA%91%E9%A9%AC%23) `175.2K 🔥` `NEW`
1. [六姑姑要求与侄女分百万遗产胜诉](https://s.weibo.com/weibo?q=%23%E5%85%AD%E5%A7%91%E5%A7%91%E8%A6%81%E6%B1%82%E4%B8%8E%E4%BE%84%E5%A5%B3%E5%88%86%E7%99%BE%E4%B8%87%E9%81%97%E4%BA%A7%E8%83%9C%E8%AF%89%23) `174.4K 🔥` `NEW`
1. [光纤价格暴涨650%](https://s.weibo.com/weibo?q=%23%E5%85%89%E7%BA%A4%E4%BB%B7%E6%A0%BC%E6%9A%B4%E6%B6%A8650%25%23) `173.6K 🔥` `NEW`
1. [张雪机车一脚压线把名次压赚了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E4%B8%80%E8%84%9A%E5%8E%8B%E7%BA%BF%E6%8A%8A%E5%90%8D%E6%AC%A1%E5%8E%8B%E8%B5%9A%E4%BA%86%23) `172.8K 🔥` `NEW`
1. [金智秀哥哥的妻子发ins](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E5%93%A5%E5%93%A5%E7%9A%84%E5%A6%BB%E5%AD%90%E5%8F%91ins%23) `172.1K 🔥` `NEW`
1. [谢娜晒和马嘉祺聊天记录](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%99%92%E5%92%8C%E9%A9%AC%E5%98%89%E7%A5%BA%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `171.8K 🔥` `NEW`
1. [张凌赫ins更新萌照](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%ABins%E6%9B%B4%E6%96%B0%E8%90%8C%E7%85%A7%23) `168.9K 🔥` `NEW`
1. [快递员上门取件摔坏2.4万蓝宝石](https://s.weibo.com/weibo?q=%23%E5%BF%AB%E9%80%92%E5%91%98%E4%B8%8A%E9%97%A8%E5%8F%96%E4%BB%B6%E6%91%94%E5%9D%8F2.4%E4%B8%87%E8%93%9D%E5%AE%9D%E7%9F%B3%23) `168.2K 🔥` `NEW`
1. [女儿说我爸爸是刘德华没人相信](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E8%AF%B4%E6%88%91%E7%88%B8%E7%88%B8%E6%98%AF%E5%88%98%E5%BE%B7%E5%8D%8E%E6%B2%A1%E4%BA%BA%E7%9B%B8%E4%BF%A1%23) `167.2K 🔥` `NEW`
1. [时代少年团走了没通知一下张杰吗 (Didn't Zhang Jie be notified when Times Youth League left?)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E8%B5%B0%E4%BA%86%E6%B2%A1%E9%80%9A%E7%9F%A5%E4%B8%80%E4%B8%8B%E5%BC%A0%E6%9D%B0%E5%90%97%23) `162.9K 🔥` `NEW`
1. [日本](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%23) `160.9K 🔥` `NEW`
1. [郭富城庆祝和方媛结婚九周年](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AF%8C%E5%9F%8E%E5%BA%86%E7%A5%9D%E5%92%8C%E6%96%B9%E5%AA%9B%E7%BB%93%E5%A9%9A%E4%B9%9D%E5%91%A8%E5%B9%B4%23) `158.2K 🔥` `NEW`
1. [何润东在苏超打破护不住魔咒](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E5%9C%A8%E8%8B%8F%E8%B6%85%E6%89%93%E7%A0%B4%E6%8A%A4%E4%B8%8D%E4%BD%8F%E9%AD%94%E5%92%92%23) `157.4K 🔥` `NEW`
1. [吴佳尼说赵丽颖没有医美](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BD%B3%E5%B0%BC%E8%AF%B4%E8%B5%B5%E4%B8%BD%E9%A2%96%E6%B2%A1%E6%9C%89%E5%8C%BB%E7%BE%8E%23) `155.7K 🔥` `NEW`
1. [王一博GT3排位赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9AGT3%E6%8E%92%E4%BD%8D%E8%B5%9B%23) `154.8K 🔥` `NEW`
1. [攻玉 辞演](https://s.weibo.com/weibo?q=%23%E6%94%BB%E7%8E%89%20%E8%BE%9E%E6%BC%94%23) `153.4K 🔥` `NEW`
1. [一年半来日本军舰四次过航台海](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%B9%B4%E5%8D%8A%E6%9D%A5%E6%97%A5%E6%9C%AC%E5%86%9B%E8%88%B0%E5%9B%9B%E6%AC%A1%E8%BF%87%E8%88%AA%E5%8F%B0%E6%B5%B7%23) `151.6K 🔥` `NEW`
1. [你是真的火了李小冉](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%98%AF%E7%9C%9F%E7%9A%84%E7%81%AB%E4%BA%86%E6%9D%8E%E5%B0%8F%E5%86%89%23) `151.4K 🔥` `NEW`
1. [五一航班为啥出现取消潮](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E8%88%AA%E7%8F%AD%E4%B8%BA%E5%95%A5%E5%87%BA%E7%8E%B0%E5%8F%96%E6%B6%88%E6%BD%AE%23) `148.4K 🔥` `NEW`
1. [王濛魏建军直球式聊天 (Wang Meng and Wei Jianjun direct chat)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E9%AD%8F%E5%BB%BA%E5%86%9B%E7%9B%B4%E7%90%83%E5%BC%8F%E8%81%8A%E5%A4%A9%23) `145.2K 🔥` `NEW`
1. [孟美岐解约乐华的第一个活动](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E7%BE%8E%E5%B2%90%E8%A7%A3%E7%BA%A6%E4%B9%90%E5%8D%8E%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%B4%BB%E5%8A%A8%23) `143.9K 🔥` `NEW`
1. [日本已彻底撕掉伪装 (Japan has completely shed its disguise)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%B7%B2%E5%BD%BB%E5%BA%95%E6%92%95%E6%8E%89%E4%BC%AA%E8%A3%85%23) `977.6K 🔥` `+62%`
1. [生态文旅激活消费新活力 (Ecological cultural tourism activates new vitality in consumption)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E6%80%81%E6%96%87%E6%97%85%E6%BF%80%E6%B4%BB%E6%B6%88%E8%B4%B9%E6%96%B0%E6%B4%BB%E5%8A%9B%23) `559.1K 🔥` `+55%`
1. [日本驱逐舰过航台湾海峡取证画面 (Evidence collection footage of a Japanese destroyer passing through the Taiwan Strait)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%A9%B1%E9%80%90%E8%88%B0%E8%BF%87%E8%88%AA%E5%8F%B0%E6%B9%BE%E6%B5%B7%E5%B3%A1%E5%8F%96%E8%AF%81%E7%94%BB%E9%9D%A2%23) `553.7K 🔥` `+89%`
1. [解放军护卫舰已随时准备开火 (PLA frigates are ready to fire at any time)](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E6%8A%A4%E5%8D%AB%E8%88%B0%E5%B7%B2%E9%9A%8F%E6%97%B6%E5%87%86%E5%A4%87%E5%BC%80%E7%81%AB%23) `437.3K 🔥` `+296%`
1. [日本在马关条约签订日闯入台海](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%A8%E9%A9%AC%E5%85%B3%E6%9D%A1%E7%BA%A6%E7%AD%BE%E8%AE%A2%E6%97%A5%E9%97%AF%E5%85%A5%E5%8F%B0%E6%B5%B7%23) `321.0K 🔥` `+192%`
1. [谢娜录了时代少年团直拍](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%BD%95%E4%BA%86%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%9B%B4%E6%8B%8D%23) `178.4K 🔥` `+109%`
1. [风扇乱流 灭蚊子 (Fan turbulence kills mosquitoes)](https://s.weibo.com/weibo?q=%23%E9%A3%8E%E6%89%87%E4%B9%B1%E6%B5%81%20%E7%81%AD%E8%9A%8A%E5%AD%90%23) `177.9K 🔥` `+28%`
1. [张雪机车 (Zhang Xue motorcycle)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%23) `176.2K 🔥` `+58%`
1. [苏超 (Su Chao)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `171.0K 🔥` `+145%`
1. [五一航班大面积取消 (Widespread cancellation of May Day flights)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E8%88%AA%E7%8F%AD%E5%A4%A7%E9%9D%A2%E7%A7%AF%E5%8F%96%E6%B6%88%23) `166.9K 🔥` `+121%`
1. [中国城市宜居水平排行榜 (Ranking list of livability level of Chinese cities)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%9F%8E%E5%B8%82%E5%AE%9C%E5%B1%85%E6%B0%B4%E5%B9%B3%E6%8E%92%E8%A1%8C%E6%A6%9C%23) `166.0K 🔥` `+34%`
1. [听障女孩回应美得像假人 (Hearing-impaired girl responds that she is as beautiful as a dummy)](https://s.weibo.com/weibo?q=%23%E5%90%AC%E9%9A%9C%E5%A5%B3%E5%AD%A9%E5%9B%9E%E5%BA%94%E7%BE%8E%E5%BE%97%E5%83%8F%E5%81%87%E4%BA%BA%23) `165.2K 🔥` `+50%`
1. [六位数的狗坐在七位数的车里 (Six-figure dog in seven-figure car)](https://s.weibo.com/weibo?q=%23%E5%85%AD%E4%BD%8D%E6%95%B0%E7%9A%84%E7%8B%97%E5%9D%90%E5%9C%A8%E4%B8%83%E4%BD%8D%E6%95%B0%E7%9A%84%E8%BD%A6%E9%87%8C%23) `163.0K 🔥` `+115%`
1. [日本赌国运老毛病又犯了](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%B5%8C%E5%9B%BD%E8%BF%90%E8%80%81%E6%AF%9B%E7%97%85%E5%8F%88%E7%8A%AF%E4%BA%86%23) `161.7K 🔥` `+114%`
1. [萧蔷翻温峥嵘白眼 (Xiao Qiang rolled her eyes at Wen Zhengrong)](https://s.weibo.com/weibo?q=%23%E8%90%A7%E8%94%B7%E7%BF%BB%E6%B8%A9%E5%B3%A5%E5%B5%98%E7%99%BD%E7%9C%BC%23) `159.8K 🔥` `+80%`
1. [日媒集体噤声](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%AA%92%E9%9B%86%E4%BD%93%E5%99%A4%E5%A3%B0%23) `159.3K 🔥` `+52%`
1. [深圳一小学老师批改作业时崩溃大哭 (A primary school teacher in Shenzhen broke down and cried while grading homework)](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E4%B8%80%E5%B0%8F%E5%AD%A6%E8%80%81%E5%B8%88%E6%89%B9%E6%94%B9%E4%BD%9C%E4%B8%9A%E6%97%B6%E5%B4%A9%E6%BA%83%E5%A4%A7%E5%93%AD%23) `156.6K 🔥` `+187%`
1. [以色列社会悲观情绪主导](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E7%A4%BE%E4%BC%9A%E6%82%B2%E8%A7%82%E6%83%85%E7%BB%AA%E4%B8%BB%E5%AF%BC%23) `154.3K 🔥` `+143%`
1. [张小斐被虫子吓得弹起来了 (Zhang Xiaofei was so frightened by the bug that he jumped up)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%E8%A2%AB%E8%99%AB%E5%AD%90%E5%90%93%E5%BE%97%E5%BC%B9%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `150.4K 🔥` `+310%`
1. [解放军凌晨四点管控日舰过航台湾海峡](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E5%87%8C%E6%99%A8%E5%9B%9B%E7%82%B9%E7%AE%A1%E6%8E%A7%E6%97%A5%E8%88%B0%E8%BF%87%E8%88%AA%E5%8F%B0%E6%B9%BE%E6%B5%B7%E5%B3%A1%23) `149.9K 🔥` `+84%`
1. [泰国泼水节疑有人向人嘴里射毒水 (Someone allegedly shot poisonous water into people's mouths during Thailand's Songkran Festival)](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%B3%BC%E6%B0%B4%E8%8A%82%E7%96%91%E6%9C%89%E4%BA%BA%E5%90%91%E4%BA%BA%E5%98%B4%E9%87%8C%E5%B0%84%E6%AF%92%E6%B0%B4%23) `147.8K 🔥` `+130%`
1. [女子机场两次拒绝帮陌生人带行李 (Woman refused to help strangers with luggage at airport twice)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%9C%BA%E5%9C%BA%E4%B8%A4%E6%AC%A1%E6%8B%92%E7%BB%9D%E5%B8%AE%E9%99%8C%E7%94%9F%E4%BA%BA%E5%B8%A6%E8%A1%8C%E6%9D%8E%23) `146.9K 🔥` `+60%`
1. [内耗人的终极解药](https://s.weibo.com/weibo?q=%23%E5%86%85%E8%80%97%E4%BA%BA%E7%9A%84%E7%BB%88%E6%9E%81%E8%A7%A3%E8%8D%AF%23) `146.5K 🔥` `+96%`
1. [男子养龙虾月赔10万破防抑郁 (Man earns RMB 100,000 a month from lobster farming to prevent depression)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%85%BB%E9%BE%99%E8%99%BE%E6%9C%88%E8%B5%9410%E4%B8%87%E7%A0%B4%E9%98%B2%E6%8A%91%E9%83%81%23) `144.9K 🔥` `+143%`
1. [陈紫函不上浪姐的原因 (The reason why Chen Zi didn’t write to Sister Lang)](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%B4%AB%E5%87%BD%E4%B8%8D%E4%B8%8A%E6%B5%AA%E5%A7%90%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `169.7K 🔥`
1. [姜贞羽淘汰](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E8%B4%9E%E7%BE%BD%E6%B7%98%E6%B1%B0%23) `152.5K 🔥`
1. [人与人其实更多的是相逢恨早 (In fact, people often meet each other and hate each other early.)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%8E%E4%BA%BA%E5%85%B6%E5%AE%9E%E6%9B%B4%E5%A4%9A%E7%9A%84%E6%98%AF%E7%9B%B8%E9%80%A2%E6%81%A8%E6%97%A9%23) `164.5K 🔥` `-63%`

Updated at 2026-04-19 07:45:44

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
