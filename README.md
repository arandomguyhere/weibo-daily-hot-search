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

1. [我国每3度电就有1度是绿电 (One out of every three kilowatt-hours of electricity in our country is green electricity)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%AF%8F3%E5%BA%A6%E7%94%B5%E5%B0%B1%E6%9C%891%E5%BA%A6%E6%98%AF%E7%BB%BF%E7%94%B5%23) `361.3K 🔥` `NEW`
1. [檀健次再造洞门名场面](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E5%86%8D%E9%80%A0%E6%B4%9E%E9%97%A8%E5%90%8D%E5%9C%BA%E9%9D%A2%23) `284.7K 🔥` `NEW`
1. [时代少年团接驳车](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%8E%A5%E9%A9%B3%E8%BD%A6%23) `164.6K 🔥` `NEW`
1. [周深靠用力地鞠躬把眼泪甩掉](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E9%9D%A0%E7%94%A8%E5%8A%9B%E5%9C%B0%E9%9E%A0%E8%BA%AC%E6%8A%8A%E7%9C%BC%E6%B3%AA%E7%94%A9%E6%8E%89%23) `162.9K 🔥` `NEW`
1. [陈法拉金像奖红毯状态](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B3%95%E6%8B%89%E9%87%91%E5%83%8F%E5%A5%96%E7%BA%A2%E6%AF%AF%E7%8A%B6%E6%80%81%23) `160.7K 🔥` `NEW`
1. [歌手2026](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%23) `158.7K 🔥` `NEW`
1. [张杰鸟巢唱完大庆功](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E9%B8%9F%E5%B7%A2%E5%94%B1%E5%AE%8C%E5%A4%A7%E5%BA%86%E5%8A%9F%23) `158.1K 🔥` `NEW`
1. [广州暹岗大山遭人私挖水晶破坏](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E6%9A%B9%E5%B2%97%E5%A4%A7%E5%B1%B1%E9%81%AD%E4%BA%BA%E7%A7%81%E6%8C%96%E6%B0%B4%E6%99%B6%E7%A0%B4%E5%9D%8F%23) `156.2K 🔥` `NEW`
1. [金莎晒婚服](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E6%99%92%E5%A9%9A%E6%9C%8D%23) `155.7K 🔥` `NEW`
1. [男童被虐待致死凶手看到证据才承认](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%AB%A5%E8%A2%AB%E8%99%90%E5%BE%85%E8%87%B4%E6%AD%BB%E5%87%B6%E6%89%8B%E7%9C%8B%E5%88%B0%E8%AF%81%E6%8D%AE%E6%89%8D%E6%89%BF%E8%AE%A4%23) `155.0K 🔥` `NEW`
1. [周深既然这宇宙让我单身 (Zhou Shen, since this universe makes me single)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E6%97%A2%E7%84%B6%E8%BF%99%E5%AE%87%E5%AE%99%E8%AE%A9%E6%88%91%E5%8D%95%E8%BA%AB%23) `154.1K 🔥` `NEW`
1. [俞灏明王铮亮陆虎看张杰演唱会](https://s.weibo.com/weibo?q=%23%E4%BF%9E%E7%81%8F%E6%98%8E%E7%8E%8B%E9%93%AE%E4%BA%AE%E9%99%86%E8%99%8E%E7%9C%8B%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%23) `153.7K 🔥` `NEW`
1. [突然明白了什么叫课题分离](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%98%8E%E7%99%BD%E4%BA%86%E4%BB%80%E4%B9%88%E5%8F%AB%E8%AF%BE%E9%A2%98%E5%88%86%E7%A6%BB%23) `153.4K 🔥` `NEW`
1. [第五人格赛事](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%E8%B5%9B%E4%BA%8B%23) `152.6K 🔥` `NEW`
1. [机器人届也有自己的显眼包](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%B1%8A%E4%B9%9F%E6%9C%89%E8%87%AA%E5%B7%B1%E7%9A%84%E6%98%BE%E7%9C%BC%E5%8C%85%23) `152.3K 🔥` `NEW`
1. [贺娇龙接班人曝光](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%A8%87%E9%BE%99%E6%8E%A5%E7%8F%AD%E4%BA%BA%E6%9B%9D%E5%85%89%23) `151.5K 🔥` `NEW`
1. [金像奖马丽长发港风造型](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%83%8F%E5%A5%96%E9%A9%AC%E4%B8%BD%E9%95%BF%E5%8F%91%E6%B8%AF%E9%A3%8E%E9%80%A0%E5%9E%8B%23) `164.3K 🔥` `+21%`
1. [胃癌晚期治疗有新突破](https://s.weibo.com/weibo?q=%23%E8%83%83%E7%99%8C%E6%99%9A%E6%9C%9F%E6%B2%BB%E7%96%97%E6%9C%89%E6%96%B0%E7%AA%81%E7%A0%B4%23) `159.7K 🔥` `+28%`
1. [河南三地巨额数据造假25人被问责](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%89%E5%9C%B0%E5%B7%A8%E9%A2%9D%E6%95%B0%E6%8D%AE%E9%80%A0%E5%81%8725%E4%BA%BA%E8%A2%AB%E9%97%AE%E8%B4%A3%23) `158.6K 🔥` `+40%`
1. [张雪机车](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%23) `157.4K 🔥` `+39%`
1. [以色列民众要求内塔尼亚胡政府下台 (Israelis demand Netanyahu government to step down)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%B0%91%E4%BC%97%E8%A6%81%E6%B1%82%E5%86%85%E5%A1%94%E5%B0%BC%E4%BA%9A%E8%83%A1%E6%94%BF%E5%BA%9C%E4%B8%8B%E5%8F%B0%23) `156.8K 🔥` `+39%`
1. [鹿晗好尊重本命年](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%A5%BD%E5%B0%8A%E9%87%8D%E6%9C%AC%E5%91%BD%E5%B9%B4%23) `328.3K 🔥`
1. [姜涛瘦了很多](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E6%B6%9B%E7%98%A6%E4%BA%86%E5%BE%88%E5%A4%9A%23) `167.9K 🔥`
1. [小米徐洁云喊话造谣者](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%BE%90%E6%B4%81%E4%BA%91%E5%96%8A%E8%AF%9D%E9%80%A0%E8%B0%A3%E8%80%85%23) `165.9K 🔥`
1. [金像奖](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%83%8F%E5%A5%96%23) `165.0K 🔥`
1. [仙逆](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%23) `163.6K 🔥`
1. [李小冉唱了一下午](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%94%B1%E4%BA%86%E4%B8%80%E4%B8%8B%E5%8D%88%23) `162.8K 🔥`
1. [古天乐宣萱 一如既往的般配 (Louis Koo and Xuan Xuan are as good a match as ever)](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E5%A4%A9%E4%B9%90%E5%AE%A3%E8%90%B1%20%E4%B8%80%E5%A6%82%E6%97%A2%E5%BE%80%E7%9A%84%E8%88%AC%E9%85%8D%23) `162.1K 🔥`
1. [张雪机车第7](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E7%AC%AC7%23) `161.1K 🔥`
1. [高中生因操行分不合格等被劝退](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%AD%E7%94%9F%E5%9B%A0%E6%93%8D%E8%A1%8C%E5%88%86%E4%B8%8D%E5%90%88%E6%A0%BC%E7%AD%89%E8%A2%AB%E5%8A%9D%E9%80%80%23) `160.1K 🔥`
1. [金像奖影后廖子妤 (Academy Award-winning Best Actress Liao Ziyu)](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%83%8F%E5%A5%96%E5%BD%B1%E5%90%8E%E5%BB%96%E5%AD%90%E5%A6%A4%23) `980.8K 🔥` `-24%`
1. [张雪机车比赛因红旗中断](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%AF%94%E8%B5%9B%E5%9B%A0%E7%BA%A2%E6%97%97%E4%B8%AD%E6%96%AD%23) `446.4K 🔥` `-35%`
1. [金莎晒结婚五金 (Jinsha sun wedding hardware)](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E6%99%92%E7%BB%93%E5%A9%9A%E4%BA%94%E9%87%91%23) `336.7K 🔥` `-33%`
1. [第44届金像奖获奖名单](https://s.weibo.com/weibo?q=%23%E7%AC%AC44%E5%B1%8A%E9%87%91%E5%83%8F%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%23) `309.6K 🔥` `-33%`
1. [曼城vs阿森纳](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E5%9F%8Evs%E9%98%BF%E6%A3%AE%E7%BA%B3%23) `236.5K 🔥` `-21%`
1. [出门和不出门过的是两种人生](https://s.weibo.com/weibo?q=%23%E5%87%BA%E9%97%A8%E5%92%8C%E4%B8%8D%E5%87%BA%E9%97%A8%E8%BF%87%E7%9A%84%E6%98%AF%E4%B8%A4%E7%A7%8D%E4%BA%BA%E7%94%9F%23) `217.6K 🔥` `-29%`
1. [豆包变豆脚了](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%8F%98%E8%B1%86%E8%84%9A%E4%BA%86%23) `213.2K 🔥` `-29%`
1. [宗师 露脸](https://s.weibo.com/weibo?q=%23%E5%AE%97%E5%B8%88%20%E9%9C%B2%E8%84%B8%23) `204.1K 🔥` `-32%`
1. [梁家辉5封金像奖影帝爆哭](https://s.weibo.com/weibo?q=%23%E6%A2%81%E5%AE%B6%E8%BE%895%E5%B0%81%E9%87%91%E5%83%8F%E5%A5%96%E5%BD%B1%E5%B8%9D%E7%88%86%E5%93%AD%23) `203.1K 🔥` `-31%`
1. [曝李小冉退出浪姐](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%8E%E5%B0%8F%E5%86%89%E9%80%80%E5%87%BA%E6%B5%AA%E5%A7%90%23) `199.6K 🔥` `-30%`
1. [谢娜上张杰鸟巢演唱会小火车](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E4%B8%8A%E5%BC%A0%E6%9D%B0%E9%B8%9F%E5%B7%A2%E6%BC%94%E5%94%B1%E4%BC%9A%E5%B0%8F%E7%81%AB%E8%BD%A6%23) `193.1K 🔥` `-33%`
1. [zmjjkk长文回复粉丝](https://s.weibo.com/weibo?q=%23zmjjkk%E9%95%BF%E6%96%87%E5%9B%9E%E5%A4%8D%E7%B2%89%E4%B8%9D%23) `192.6K 🔥` `-34%`
1. [铁路12306已拒绝出票105.6万张 (Railway 12306 has refused to issue 1.056 million tickets)](https://s.weibo.com/weibo?q=%23%E9%93%81%E8%B7%AF12306%E5%B7%B2%E6%8B%92%E7%BB%9D%E5%87%BA%E7%A5%A8105.6%E4%B8%87%E5%BC%A0%23) `189.0K 🔥` `-32%`
1. [24岁女研究生赢发呆比赛冠军](https://s.weibo.com/weibo?q=%2324%E5%B2%81%E5%A5%B3%E7%A0%94%E7%A9%B6%E7%94%9F%E8%B5%A2%E5%8F%91%E5%91%86%E6%AF%94%E8%B5%9B%E5%86%A0%E5%86%9B%23) `181.9K 🔥` `-36%`
1. [金像奖影帝梁家辉 (Hong Kong Film Awards Best Actor Tony Leung Ka Fai)](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%83%8F%E5%A5%96%E5%BD%B1%E5%B8%9D%E6%A2%81%E5%AE%B6%E8%BE%89%23) `181.8K 🔥` `-35%`
1. [东部战区舰艇编队过航横当水道](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%83%A8%E6%88%98%E5%8C%BA%E8%88%B0%E8%89%87%E7%BC%96%E9%98%9F%E8%BF%87%E8%88%AA%E6%A8%AA%E5%BD%93%E6%B0%B4%E9%81%93%23) `168.1K 🔥` `-25%`
1. [泼水节蓝莓摊被洗劫一空进展](https://s.weibo.com/weibo?q=%23%E6%B3%BC%E6%B0%B4%E8%8A%82%E8%93%9D%E8%8E%93%E6%91%8A%E8%A2%AB%E6%B4%97%E5%8A%AB%E4%B8%80%E7%A9%BA%E8%BF%9B%E5%B1%95%23) `167.1K 🔥` `-26%`
1. [14天骨盆回正](https://s.weibo.com/weibo?q=%2314%E5%A4%A9%E9%AA%A8%E7%9B%86%E5%9B%9E%E6%AD%A3%23) `167.0K 🔥` `-26%`
1. [2米蟒蛇吞下1只鸡后被卡鸡笼](https://s.weibo.com/weibo?q=%232%E7%B1%B3%E8%9F%92%E8%9B%87%E5%90%9E%E4%B8%8B1%E5%8F%AA%E9%B8%A1%E5%90%8E%E8%A2%AB%E5%8D%A1%E9%B8%A1%E7%AC%BC%23) `166.3K 🔥` `-28%`
1. [男子美国摆摊进货1元卖5美元](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%BE%8E%E5%9B%BD%E6%91%86%E6%91%8A%E8%BF%9B%E8%B4%A71%E5%85%83%E5%8D%965%E7%BE%8E%E5%85%83%23) `161.5K 🔥` `-28%`
1. [数万日本民众集会高喊不要战争](https://s.weibo.com/weibo?q=%23%E6%95%B0%E4%B8%87%E6%97%A5%E6%9C%AC%E6%B0%91%E4%BC%97%E9%9B%86%E4%BC%9A%E9%AB%98%E5%96%8A%E4%B8%8D%E8%A6%81%E6%88%98%E4%BA%89%23) `155.3K 🔥` `-45%`

Updated at 2026-04-20 01:19:46

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
