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

1. [降噪耳机受害者出现 (Noise-canceling headphone victims emerge)](https://s.weibo.com/weibo?q=%23%E9%99%8D%E5%99%AA%E8%80%B3%E6%9C%BA%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%23) `3.3M 🔥` `NEW`
1. [汶川地震的可乐男孩入职可口可乐](https://s.weibo.com/weibo?q=%23%E6%B1%B6%E5%B7%9D%E5%9C%B0%E9%9C%87%E7%9A%84%E5%8F%AF%E4%B9%90%E7%94%B7%E5%AD%A9%E5%85%A5%E8%81%8C%E5%8F%AF%E5%8F%A3%E5%8F%AF%E4%B9%90%23) `1.1M 🔥` `NEW`
1. [今天全国防灾减灾日](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%A9%E5%85%A8%E5%9B%BD%E9%98%B2%E7%81%BE%E5%87%8F%E7%81%BE%E6%97%A5%23) `915.9K 🔥` `NEW`
1. [美国确认首例汉坦病毒感染病例](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%A1%AE%E8%AE%A4%E9%A6%96%E4%BE%8B%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%E6%84%9F%E6%9F%93%E7%97%85%E4%BE%8B%23) `550.1K 🔥` `NEW`
1. [给阿嬷的情书 观众的报复性投票](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%20%E8%A7%82%E4%BC%97%E7%9A%84%E6%8A%A5%E5%A4%8D%E6%80%A7%E6%8A%95%E7%A5%A8%23) `524.4K 🔥` `NEW`
1. [官方辟谣南京地铁开到和县](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E8%BE%9F%E8%B0%A3%E5%8D%97%E4%BA%AC%E5%9C%B0%E9%93%81%E5%BC%80%E5%88%B0%E5%92%8C%E5%8E%BF%23) `501.9K 🔥` `NEW`
1. [梁靖崑担任北电教师](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%91%E6%8B%85%E4%BB%BB%E5%8C%97%E7%94%B5%E6%95%99%E5%B8%88%23) `468.2K 🔥` `NEW`
1. [特朗普发文称非常期待中国之行](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%8F%91%E6%96%87%E7%A7%B0%E9%9D%9E%E5%B8%B8%E6%9C%9F%E5%BE%85%E4%B8%AD%E5%9B%BD%E4%B9%8B%E8%A1%8C%23) `372.7K 🔥` `NEW`
1. [黑夜告白大结局](https://s.weibo.com/weibo?q=%23%E9%BB%91%E5%A4%9C%E5%91%8A%E7%99%BD%E5%A4%A7%E7%BB%93%E5%B1%80%23) `360.0K 🔥` `NEW`
1. [汶川地震失去双腿舞者廖智生四胎](https://s.weibo.com/weibo?q=%23%E6%B1%B6%E5%B7%9D%E5%9C%B0%E9%9C%87%E5%A4%B1%E5%8E%BB%E5%8F%8C%E8%85%BF%E8%88%9E%E8%80%85%E5%BB%96%E6%99%BA%E7%94%9F%E5%9B%9B%E8%83%8E%23) `357.0K 🔥` `NEW`
1. [曝蒋毅有老婆孩子 (It is revealed that Jiang Yi has a wife and children)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%92%8B%E6%AF%85%E6%9C%89%E8%80%81%E5%A9%86%E5%AD%A9%E5%AD%90%23) `353.9K 🔥` `NEW`
1. [贵州一男子2天内嫖娼2次被行拘](https://s.weibo.com/weibo?q=%23%E8%B4%B5%E5%B7%9E%E4%B8%80%E7%94%B7%E5%AD%902%E5%A4%A9%E5%86%85%E5%AB%96%E5%A8%BC2%E6%AC%A1%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `353.1K 🔥` `NEW`
1. [虞书欣全英文采访](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%85%A8%E8%8B%B1%E6%96%87%E9%87%87%E8%AE%BF%23) `351.2K 🔥` `NEW`
1. [放羊的星星演员李威被判刑](https://s.weibo.com/weibo?q=%23%E6%94%BE%E7%BE%8A%E7%9A%84%E6%98%9F%E6%98%9F%E6%BC%94%E5%91%98%E6%9D%8E%E5%A8%81%E8%A2%AB%E5%88%A4%E5%88%91%23) `349.3K 🔥` `NEW`
1. [原来健康的人身体是静音的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%81%A5%E5%BA%B7%E7%9A%84%E4%BA%BA%E8%BA%AB%E4%BD%93%E6%98%AF%E9%9D%99%E9%9F%B3%E7%9A%84%23) `345.5K 🔥` `NEW`
1. [平台回应演出完退礼服事件](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E5%8F%B0%E5%9B%9E%E5%BA%94%E6%BC%94%E5%87%BA%E5%AE%8C%E9%80%80%E7%A4%BC%E6%9C%8D%E4%BA%8B%E4%BB%B6%23) `344.4K 🔥` `NEW`
1. [小猫的脚原来这么臭](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E7%9A%84%E8%84%9A%E5%8E%9F%E6%9D%A5%E8%BF%99%E4%B9%88%E8%87%AD%23) `341.4K 🔥` `NEW`
1. [刘浩存00花咖位](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%9800%E8%8A%B1%E5%92%96%E4%BD%8D%23) `339.9K 🔥` `NEW`
1. [热依扎是单亲妈妈](https://s.weibo.com/weibo?q=%23%E7%83%AD%E4%BE%9D%E6%89%8E%E6%98%AF%E5%8D%95%E4%BA%B2%E5%A6%88%E5%A6%88%23) `338.3K 🔥` `NEW`
1. [医生才是最不听医嘱的](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E6%89%8D%E6%98%AF%E6%9C%80%E4%B8%8D%E5%90%AC%E5%8C%BB%E5%98%B1%E7%9A%84%23) `337.2K 🔥` `NEW`
1. [孟子义AI换脸高叶](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89AI%E6%8D%A2%E8%84%B8%E9%AB%98%E5%8F%B6%23) `334.3K 🔥` `NEW`
1. [黄子韬调侃徐艺洋怪异跑姿](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E8%B0%83%E4%BE%83%E5%BE%90%E8%89%BA%E6%B4%8B%E6%80%AA%E5%BC%82%E8%B7%91%E5%A7%BF%23) `330.3K 🔥` `NEW`
1. [打司美格鲁肽减重的人怎么样了](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%8F%B8%E7%BE%8E%E6%A0%BC%E9%B2%81%E8%82%BD%E5%87%8F%E9%87%8D%E7%9A%84%E4%BA%BA%E6%80%8E%E4%B9%88%E6%A0%B7%E4%BA%86%23) `328.6K 🔥` `NEW`
1. [乒协公布名古屋亚运会选拔办法](https://s.weibo.com/weibo?q=%23%E4%B9%92%E5%8D%8F%E5%85%AC%E5%B8%83%E5%90%8D%E5%8F%A4%E5%B1%8B%E4%BA%9A%E8%BF%90%E4%BC%9A%E9%80%89%E6%8B%94%E5%8A%9E%E6%B3%95%23) `327.7K 🔥` `NEW`
1. [512](https://s.weibo.com/weibo?q=%23512%23) `325.7K 🔥` `NEW`
1. [被妈妈护住的宝宝今年18岁了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%A6%88%E5%A6%88%E6%8A%A4%E4%BD%8F%E7%9A%84%E5%AE%9D%E5%AE%9D%E4%BB%8A%E5%B9%B418%E5%B2%81%E4%BA%86%23) `323.1K 🔥` `NEW`
1. [常石磊发言](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E7%9F%B3%E7%A3%8A%E5%8F%91%E8%A8%80%23) `321.5K 🔥` `NEW`
1. [A股年内首只翻倍ETF诞生](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%B9%B4%E5%86%85%E9%A6%96%E5%8F%AA%E7%BF%BB%E5%80%8DETF%E8%AF%9E%E7%94%9F%23) `319.6K 🔥` `NEW`
1. [626聊天记录](https://s.weibo.com/weibo?q=%23626%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `318.1K 🔥` `NEW`
1. [街上的零售药店为什么越来越少](https://s.weibo.com/weibo?q=%23%E8%A1%97%E4%B8%8A%E7%9A%84%E9%9B%B6%E5%94%AE%E8%8D%AF%E5%BA%97%E4%B8%BA%E4%BB%80%E4%B9%88%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%B0%91%23) `317.3K 🔥` `NEW`
1. [NBA季后赛 (NBA playoffs)](https://s.weibo.com/weibo?q=%23NBA%E5%AD%A3%E5%90%8E%E8%B5%9B%23) `315.5K 🔥` `NEW`
1. [日本名将赞孙颖莎决赛史上最强](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%90%8D%E5%B0%86%E8%B5%9E%E5%AD%99%E9%A2%96%E8%8E%8E%E5%86%B3%E8%B5%9B%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%BC%BA%23) `313.3K 🔥` `NEW`
1. [微信状态浏览者计数测试已停止](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E7%8A%B6%E6%80%81%E6%B5%8F%E8%A7%88%E8%80%85%E8%AE%A1%E6%95%B0%E6%B5%8B%E8%AF%95%E5%B7%B2%E5%81%9C%E6%AD%A2%23) `312.5K 🔥` `NEW`
1. [林浩回应从小英雄到林书记](https://s.weibo.com/weibo?q=%23%E6%9E%97%E6%B5%A9%E5%9B%9E%E5%BA%94%E4%BB%8E%E5%B0%8F%E8%8B%B1%E9%9B%84%E5%88%B0%E6%9E%97%E4%B9%A6%E8%AE%B0%23) `309.2K 🔥` `NEW`
1. [盘点历任美国总统访华经历](https://s.weibo.com/weibo?q=%23%E7%9B%98%E7%82%B9%E5%8E%86%E4%BB%BB%E7%BE%8E%E5%9B%BD%E6%80%BB%E7%BB%9F%E8%AE%BF%E5%8D%8E%E7%BB%8F%E5%8E%86%23) `307.9K 🔥` `NEW`
1. [AI让我看见十年后的世界](https://s.weibo.com/weibo?q=%23AI%E8%AE%A9%E6%88%91%E7%9C%8B%E8%A7%81%E5%8D%81%E5%B9%B4%E5%90%8E%E7%9A%84%E4%B8%96%E7%95%8C%23) `306.7K 🔥` `NEW`
1. [双胞胎姐妹遭袭案后续](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E8%83%9E%E8%83%8E%E5%A7%90%E5%A6%B9%E9%81%AD%E8%A2%AD%E6%A1%88%E5%90%8E%E7%BB%AD%23) `304.5K 🔥` `NEW`
1. [汶川地震15名空降勇士大多已退役](https://s.weibo.com/weibo?q=%23%E6%B1%B6%E5%B7%9D%E5%9C%B0%E9%9C%8715%E5%90%8D%E7%A9%BA%E9%99%8D%E5%8B%87%E5%A3%AB%E5%A4%A7%E5%A4%9A%E5%B7%B2%E9%80%80%E5%BD%B9%23) `302.0K 🔥` `NEW`
1. [小猫被主人栓门口炫耀](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E8%A2%AB%E4%B8%BB%E4%BA%BA%E6%A0%93%E9%97%A8%E5%8F%A3%E7%82%AB%E8%80%80%23) `300.4K 🔥` `NEW`
1. [第一次坐高铁竟是为见女儿最后一面](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%9D%90%E9%AB%98%E9%93%81%E7%AB%9F%E6%98%AF%E4%B8%BA%E8%A7%81%E5%A5%B3%E5%84%BF%E6%9C%80%E5%90%8E%E4%B8%80%E9%9D%A2%23) `296.2K 🔥` `NEW`
1. [双休和单休其实差了两天 (There is actually a difference of two days between weekend breaks and single breaks.)](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E4%BC%91%E5%92%8C%E5%8D%95%E4%BC%91%E5%85%B6%E5%AE%9E%E5%B7%AE%E4%BA%86%E4%B8%A4%E5%A4%A9%23) `294.7K 🔥` `NEW`
1. [教刘浩存秦腔的老师都想收她为徒了](https://s.weibo.com/weibo?q=%23%E6%95%99%E5%88%98%E6%B5%A9%E5%AD%98%E7%A7%A6%E8%85%94%E7%9A%84%E8%80%81%E5%B8%88%E9%83%BD%E6%83%B3%E6%94%B6%E5%A5%B9%E4%B8%BA%E5%BE%92%E4%BA%86%23) `292.2K 🔥` `NEW`
1. [湖人vs雷霆](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BAvs%E9%9B%B7%E9%9C%86%23) `404.2K 🔥` `+124%`
1. [演出完退礼服女孩发声](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%87%BA%E5%AE%8C%E9%80%80%E7%A4%BC%E6%9C%8D%E5%A5%B3%E5%AD%A9%E5%8F%91%E5%A3%B0%23) `359.4K 🔥` `+78%`
1. [宁艺卓 别来身材羞辱那一套](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%20%E5%88%AB%E6%9D%A5%E8%BA%AB%E6%9D%90%E7%BE%9E%E8%BE%B1%E9%82%A3%E4%B8%80%E5%A5%97%23) `355.3K 🔥` `+60%`
1. [鹿晗给新婚粉丝送礼盒](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E7%BB%99%E6%96%B0%E5%A9%9A%E7%B2%89%E4%B8%9D%E9%80%81%E7%A4%BC%E7%9B%92%23) `347.3K 🔥` `+55%`
1. [常石磊说没听过李宇春的歌](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E7%9F%B3%E7%A3%8A%E8%AF%B4%E6%B2%A1%E5%90%AC%E8%BF%87%E6%9D%8E%E5%AE%87%E6%98%A5%E7%9A%84%E6%AD%8C%23) `302.8K 🔥` `+45%`
1. [发现孩子还是很在意妈妈的穿着 (I found that my children still care about what their mothers are wearing.)](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%AD%A9%E5%AD%90%E8%BF%98%E6%98%AF%E5%BE%88%E5%9C%A8%E6%84%8F%E5%A6%88%E5%A6%88%E7%9A%84%E7%A9%BF%E7%9D%80%23) `298.2K 🔥` `+65%`
1. [别让没煮过饭的人买菜 (Don’t let people who have never cooked cook buy groceries.)](https://s.weibo.com/weibo?q=%23%E5%88%AB%E8%AE%A9%E6%B2%A1%E7%85%AE%E8%BF%87%E9%A5%AD%E7%9A%84%E4%BA%BA%E4%B9%B0%E8%8F%9C%23) `628.8K 🔥`
1. [Deepseek分析145斤怎么瘦到100斤](https://s.weibo.com/weibo?q=%23Deepseek%E5%88%86%E6%9E%90145%E6%96%A4%E6%80%8E%E4%B9%88%E7%98%A6%E5%88%B0100%E6%96%A4%23) `335.7K 🔥` `-51%`
1. [微信状态 访客记录 (WeChat status visitor record)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E7%8A%B6%E6%80%81%20%E8%AE%BF%E5%AE%A2%E8%AE%B0%E5%BD%95%23) `331.5K 🔥` `-72%`

Updated at 2026-05-12 13:02:00

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
