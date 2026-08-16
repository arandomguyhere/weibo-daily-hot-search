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

1. [朱镕基同志遗体18日火化 (Comrade Zhu Rongji’s body was cremated on the 18th)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E9%81%97%E4%BD%9318%E6%97%A5%E7%81%AB%E5%8C%96%23) `953.8K 🔥` `NEW`
1. [披荆斩棘排名](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E6%8E%92%E5%90%8D%23) `817.7K 🔥` `NEW`
1. [为中国航天点赞](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%B8%AD%E5%9B%BD%E8%88%AA%E5%A4%A9%E7%82%B9%E8%B5%9E%23) `635.0K 🔥` `NEW`
1. [王俊凯口误了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%8F%A3%E8%AF%AF%E4%BA%86%23) `632.4K 🔥` `NEW`
1. [请3天假连休13天](https://s.weibo.com/weibo?q=%23%E8%AF%B73%E5%A4%A9%E5%81%87%E8%BF%9E%E4%BC%9113%E5%A4%A9%23) `615.0K 🔥` `NEW`
1. [Jennie因服装问题道歉](https://s.weibo.com/weibo?q=%23Jennie%E5%9B%A0%E6%9C%8D%E8%A3%85%E9%97%AE%E9%A2%98%E9%81%93%E6%AD%89%23) `559.1K 🔥` `NEW`
1. [送礼上淘宝](https://s.weibo.com/weibo?q=%23%E9%80%81%E7%A4%BC%E4%B8%8A%E6%B7%98%E5%AE%9D%23) `546.6K 🔥` `NEW`
1. [吴艳妮13秒12夺冠](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%89%B3%E5%A6%AE13%E7%A7%9212%E5%A4%BA%E5%86%A0%23) `489.5K 🔥` `NEW`
1. [阿森纳vs曼城](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A3%AE%E7%BA%B3vs%E6%9B%BC%E5%9F%8E%23) `378.2K 🔥` `NEW`
1. [TMEA获奖名单](https://s.weibo.com/weibo?q=%23TMEA%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%23) `361.5K 🔥` `NEW`
1. [盗墓笔记 (Tomb robbing notes)](https://s.weibo.com/weibo?q=%23%E7%9B%97%E5%A2%93%E7%AC%94%E8%AE%B0%23) `323.2K 🔥` `NEW`
1. [C罗乔治娜婚礼合照](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E4%B9%94%E6%B2%BB%E5%A8%9C%E5%A9%9A%E7%A4%BC%E5%90%88%E7%85%A7%23) `323.0K 🔥` `NEW`
1. [张睿披哥下沉市场口碑](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%E6%8A%AB%E5%93%A5%E4%B8%8B%E6%B2%89%E5%B8%82%E5%9C%BA%E5%8F%A3%E7%A2%91%23) `321.1K 🔥` `NEW`
1. [张柏芝有种经济上行的美](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D%E6%9C%89%E7%A7%8D%E7%BB%8F%E6%B5%8E%E4%B8%8A%E8%A1%8C%E7%9A%84%E7%BE%8E%23) `318.2K 🔥` `NEW`
1. [谷爱凌否认恋情](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%90%A6%E8%AE%A4%E6%81%8B%E6%83%85%23) `316.7K 🔥` `NEW`
1. [丁程鑫从不遮掩自己农村家庭背景](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E4%BB%8E%E4%B8%8D%E9%81%AE%E6%8E%A9%E8%87%AA%E5%B7%B1%E5%86%9C%E6%9D%91%E5%AE%B6%E5%BA%AD%E8%83%8C%E6%99%AF%23) `314.0K 🔥` `NEW`
1. [王橹杰 上春山](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%20%E4%B8%8A%E6%98%A5%E5%B1%B1%23) `313.3K 🔥` `NEW`
1. [居民存款7月又少了6300亿](https://s.weibo.com/weibo?q=%23%E5%B1%85%E6%B0%91%E5%AD%98%E6%AC%BE7%E6%9C%88%E5%8F%88%E5%B0%91%E4%BA%866300%E4%BA%BF%23) `311.0K 🔥` `NEW`
1. [苹果阿里合作新进展](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E9%98%BF%E9%87%8C%E5%90%88%E4%BD%9C%E6%96%B0%E8%BF%9B%E5%B1%95%23) `309.0K 🔥` `NEW`
1. [狼队战胜AG](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E6%88%98%E8%83%9CAG%23) `307.7K 🔥` `NEW`
1. [市民打12345投诉月光太亮影响睡觉 (Citizens called 12345 to complain that the moonlight was too bright and affected their sleep.)](https://s.weibo.com/weibo?q=%23%E5%B8%82%E6%B0%91%E6%89%9312345%E6%8A%95%E8%AF%89%E6%9C%88%E5%85%89%E5%A4%AA%E4%BA%AE%E5%BD%B1%E5%93%8D%E7%9D%A1%E8%A7%89%23) `304.4K 🔥` `NEW`
1. [麦琳确实很适合亚裔妆容](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E7%90%B3%E7%A1%AE%E5%AE%9E%E5%BE%88%E9%80%82%E5%90%88%E4%BA%9A%E8%A3%94%E5%A6%86%E5%AE%B9%23) `302.1K 🔥` `NEW`
1. [王源年度最佳内地男歌手](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E5%B9%B4%E5%BA%A6%E6%9C%80%E4%BD%B3%E5%86%85%E5%9C%B0%E7%94%B7%E6%AD%8C%E6%89%8B%23) `301.8K 🔥` `NEW`
1. [谷爱凌最后一个吃到自己的瓜](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E6%9C%80%E5%90%8E%E4%B8%80%E4%B8%AA%E5%90%83%E5%88%B0%E8%87%AA%E5%B7%B1%E7%9A%84%E7%93%9C%23) `300.1K 🔥` `NEW`
1. [孙楠 降维打击](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%A5%A0%20%E9%99%8D%E7%BB%B4%E6%89%93%E5%87%BB%23) `296.0K 🔥` `NEW`
1. [邓紫棋](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%23) `294.7K 🔥` `NEW`
1. [游客不信胖东来爆满到店买2购物车](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E5%AE%A2%E4%B8%8D%E4%BF%A1%E8%83%96%E4%B8%9C%E6%9D%A5%E7%88%86%E6%BB%A1%E5%88%B0%E5%BA%97%E4%B9%B02%E8%B4%AD%E7%89%A9%E8%BD%A6%23) `290.8K 🔥` `NEW`
1. [四代跳Attention](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E4%BB%A3%E8%B7%B3Attention%23) `281.8K 🔥` `NEW`
1. [美国女子怀孕八个月却每天吸食芬太尼](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A5%B3%E5%AD%90%E6%80%80%E5%AD%95%E5%85%AB%E4%B8%AA%E6%9C%88%E5%8D%B4%E6%AF%8F%E5%A4%A9%E5%90%B8%E9%A3%9F%E8%8A%AC%E5%A4%AA%E5%B0%BC%23) `271.0K 🔥` `NEW`
1. [满江 叔圈天菜](https://s.weibo.com/weibo?q=%23%E6%BB%A1%E6%B1%9F%20%E5%8F%94%E5%9C%88%E5%A4%A9%E8%8F%9C%23) `271.0K 🔥` `NEW`
1. [有人要求政府联系某明星给自己过生日 (Someone asked the government to contact a certain celebrity to celebrate his birthday)](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%BA%E8%A6%81%E6%B1%82%E6%94%BF%E5%BA%9C%E8%81%94%E7%B3%BB%E6%9F%90%E6%98%8E%E6%98%9F%E7%BB%99%E8%87%AA%E5%B7%B1%E8%BF%87%E7%94%9F%E6%97%A5%23) `270.7K 🔥` `NEW`
1. [小沈阳初舞台第一](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E5%88%9D%E8%88%9E%E5%8F%B0%E7%AC%AC%E4%B8%80%23) `259.5K 🔥` `NEW`
1. [李煜东哭了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%85%9C%E4%B8%9C%E5%93%AD%E4%BA%86%23) `249.1K 🔥` `NEW`
1. [女主播希望停止榜一大哥病态折磨](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E4%B8%BB%E6%92%AD%E5%B8%8C%E6%9C%9B%E5%81%9C%E6%AD%A2%E6%A6%9C%E4%B8%80%E5%A4%A7%E5%93%A5%E7%97%85%E6%80%81%E6%8A%98%E7%A3%A8%23) `246.2K 🔥` `NEW`
1. [王橹杰 虚拟](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%20%E8%99%9A%E6%8B%9F%23) `245.5K 🔥` `NEW`
1. [沈佳润还是藏不住事的年纪](https://s.weibo.com/weibo?q=%23%E6%B2%88%E4%BD%B3%E6%B6%A6%E8%BF%98%E6%98%AF%E8%97%8F%E4%B8%8D%E4%BD%8F%E4%BA%8B%E7%9A%84%E5%B9%B4%E7%BA%AA%23) `237.3K 🔥` `NEW`
1. [建议大家减少对日常琐事的决策时间](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%87%8F%E5%B0%91%E5%AF%B9%E6%97%A5%E5%B8%B8%E7%90%90%E4%BA%8B%E7%9A%84%E5%86%B3%E7%AD%96%E6%97%B6%E9%97%B4%23) `236.8K 🔥` `NEW`
1. [严浩翔的排面](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%9A%84%E6%8E%92%E9%9D%A2%23) `236.6K 🔥` `NEW`
1. [艾米进组几天瘦了一大圈](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%B1%B3%E8%BF%9B%E7%BB%84%E5%87%A0%E5%A4%A9%E7%98%A6%E4%BA%86%E4%B8%80%E5%A4%A7%E5%9C%88%23) `228.4K 🔥` `NEW`
1. [7名县委常委在土坯房上班](https://s.weibo.com/weibo?q=%237%E5%90%8D%E5%8E%BF%E5%A7%94%E5%B8%B8%E5%A7%94%E5%9C%A8%E5%9C%9F%E5%9D%AF%E6%88%BF%E4%B8%8A%E7%8F%AD%23) `228.0K 🔥` `NEW`
1. [丁禹兮说看得到粉丝的压力 (Ding Yuxi said she could see the pressure from fans)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E8%AF%B4%E7%9C%8B%E5%BE%97%E5%88%B0%E7%B2%89%E4%B8%9D%E7%9A%84%E5%8E%8B%E5%8A%9B%23) `227.8K 🔥` `NEW`
1. [魏子宸太有杰尼斯味了](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%AD%90%E5%AE%B8%E5%A4%AA%E6%9C%89%E6%9D%B0%E5%B0%BC%E6%96%AF%E5%91%B3%E4%BA%86%23) `222.6K 🔥` `NEW`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `213.1K 🔥` `NEW`
1. [龙餐馆](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%23) `208.4K 🔥` `NEW`
1. [鹿晗天资是很残忍的东西](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%A4%A9%E8%B5%84%E6%98%AF%E5%BE%88%E6%AE%8B%E5%BF%8D%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `194.8K 🔥` `NEW`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `194.5K 🔥` `NEW`
1. [编舞杨博文](https://s.weibo.com/weibo?q=%23%E7%BC%96%E8%88%9E%E6%9D%A8%E5%8D%9A%E6%96%87%23) `194.2K 🔥` `NEW`
1. [iG晋级骑士之路](https://s.weibo.com/weibo?q=%23iG%E6%99%8B%E7%BA%A7%E9%AA%91%E5%A3%AB%E4%B9%8B%E8%B7%AF%23) `190.8K 🔥` `NEW`
1. [去征服吧神行者们](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E5%BE%81%E6%9C%8D%E5%90%A7%E7%A5%9E%E8%A1%8C%E8%80%85%E4%BB%AC%23) `189.4K 🔥` `NEW`
1. [众解说看iG晋级骑士之路](https://s.weibo.com/weibo?q=%23%E4%BC%97%E8%A7%A3%E8%AF%B4%E7%9C%8BiG%E6%99%8B%E7%BA%A7%E9%AA%91%E5%A3%AB%E4%B9%8B%E8%B7%AF%23) `183.7K 🔥` `NEW`
1. [Xiaohu说队内沟通费劲 (Xiaohu said that communication within the team is difficult)](https://s.weibo.com/weibo?q=%23Xiaohu%E8%AF%B4%E9%98%9F%E5%86%85%E6%B2%9F%E9%80%9A%E8%B4%B9%E5%8A%B2%23) `181.1K 🔥` `NEW`

Updated at 2026-08-17 00:07:19

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
