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

1. [金像奖影后廖子妤 (Academy Award-winning Best Actress Liao Ziyu)](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%83%8F%E5%A5%96%E5%BD%B1%E5%90%8E%E5%BB%96%E5%AD%90%E5%A6%A4%23) `1.3M 🔥` `NEW`
1. [张雪机车比赛因红旗中断](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%AF%94%E8%B5%9B%E5%9B%A0%E7%BA%A2%E6%97%97%E4%B8%AD%E6%96%AD%23) `685.1K 🔥` `NEW`
1. [新农人玩转种菜黑科技](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%86%9C%E4%BA%BA%E7%8E%A9%E8%BD%AC%E7%A7%8D%E8%8F%9C%E9%BB%91%E7%A7%91%E6%8A%80%23) `518.4K 🔥` `NEW`
1. [金莎晒结婚五金](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E6%99%92%E7%BB%93%E5%A9%9A%E4%BA%94%E9%87%91%23) `504.6K 🔥` `NEW`
1. [第44届金像奖获奖名单](https://s.weibo.com/weibo?q=%23%E7%AC%AC44%E5%B1%8A%E9%87%91%E5%83%8F%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%23) `463.4K 🔥` `NEW`
1. [出门和不出门过的是两种人生](https://s.weibo.com/weibo?q=%23%E5%87%BA%E9%97%A8%E5%92%8C%E4%B8%8D%E5%87%BA%E9%97%A8%E8%BF%87%E7%9A%84%E6%98%AF%E4%B8%A4%E7%A7%8D%E4%BA%BA%E7%94%9F%23) `308.2K 🔥` `NEW`
1. [成毅焕彩新Yi程](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E7%84%95%E5%BD%A9%E6%96%B0Yi%E7%A8%8B%23) `307.0K 🔥` `NEW`
1. [宗师 露脸](https://s.weibo.com/weibo?q=%23%E5%AE%97%E5%B8%88%20%E9%9C%B2%E8%84%B8%23) `302.0K 🔥` `NEW`
1. [豆包变豆脚了](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%8F%98%E8%B1%86%E8%84%9A%E4%BA%86%23) `300.9K 🔥` `NEW`
1. [曼城vs阿森纳](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E5%9F%8Evs%E9%98%BF%E6%A3%AE%E7%BA%B3%23) `300.0K 🔥` `NEW`
1. [母亲看儿子遭群殴视频吃速效救心丸 (Mother takes quick-acting heart-saving pills after watching video of her son being beaten by a group)](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E7%9C%8B%E5%84%BF%E5%AD%90%E9%81%AD%E7%BE%A4%E6%AE%B4%E8%A7%86%E9%A2%91%E5%90%83%E9%80%9F%E6%95%88%E6%95%91%E5%BF%83%E4%B8%B8%23) `296.8K 🔥` `NEW`
1. [梁家辉5封金像奖影帝爆哭](https://s.weibo.com/weibo?q=%23%E6%A2%81%E5%AE%B6%E8%BE%895%E5%B0%81%E9%87%91%E5%83%8F%E5%A5%96%E5%BD%B1%E5%B8%9D%E7%88%86%E5%93%AD%23) `294.9K 🔥` `NEW`
1. [虞书欣父亲索赔17w败诉](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%88%B6%E4%BA%B2%E7%B4%A2%E8%B5%9417w%E8%B4%A5%E8%AF%89%23) `293.6K 🔥` `NEW`
1. [zmjjkk长文回复粉丝](https://s.weibo.com/weibo?q=%23zmjjkk%E9%95%BF%E6%96%87%E5%9B%9E%E5%A4%8D%E7%B2%89%E4%B8%9D%23) `291.7K 🔥` `NEW`
1. [谢娜上张杰鸟巢演唱会小火车](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E4%B8%8A%E5%BC%A0%E6%9D%B0%E9%B8%9F%E5%B7%A2%E6%BC%94%E5%94%B1%E4%BC%9A%E5%B0%8F%E7%81%AB%E8%BD%A6%23) `287.7K 🔥` `NEW`
1. [曝李小冉退出浪姐](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%8E%E5%B0%8F%E5%86%89%E9%80%80%E5%87%BA%E6%B5%AA%E5%A7%90%23) `286.7K 🔥` `NEW`
1. [24岁女研究生赢发呆比赛冠军](https://s.weibo.com/weibo?q=%2324%E5%B2%81%E5%A5%B3%E7%A0%94%E7%A9%B6%E7%94%9F%E8%B5%A2%E5%8F%91%E5%91%86%E6%AF%94%E8%B5%9B%E5%86%A0%E5%86%9B%23) `284.4K 🔥` `NEW`
1. [鹿晗好尊重本命年](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%A5%BD%E5%B0%8A%E9%87%8D%E6%9C%AC%E5%91%BD%E5%B9%B4%23) `280.9K 🔥` `NEW`
1. [数万日本民众集会高喊不要战争](https://s.weibo.com/weibo?q=%23%E6%95%B0%E4%B8%87%E6%97%A5%E6%9C%AC%E6%B0%91%E4%BC%97%E9%9B%86%E4%BC%9A%E9%AB%98%E5%96%8A%E4%B8%8D%E8%A6%81%E6%88%98%E4%BA%89%23) `280.2K 🔥` `NEW`
1. [铁路12306已拒绝出票105.6万张](https://s.weibo.com/weibo?q=%23%E9%93%81%E8%B7%AF12306%E5%B7%B2%E6%8B%92%E7%BB%9D%E5%87%BA%E7%A5%A8105.6%E4%B8%87%E5%BC%A0%23) `278.3K 🔥` `NEW`
1. [金像奖影帝梁家辉 (Hong Kong Film Awards Best Actor Tony Leung Ka Fai)](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%83%8F%E5%A5%96%E5%BD%B1%E5%B8%9D%E6%A2%81%E5%AE%B6%E8%BE%89%23) `278.1K 🔥` `NEW`
1. [银川一小学生拒借车遭9人群殴搜家](https://s.weibo.com/weibo?q=%23%E9%93%B6%E5%B7%9D%E4%B8%80%E5%B0%8F%E5%AD%A6%E7%94%9F%E6%8B%92%E5%80%9F%E8%BD%A6%E9%81%AD9%E4%BA%BA%E7%BE%A4%E6%AE%B4%E6%90%9C%E5%AE%B6%23) `277.4K 🔥` `NEW`
1. [粉丝给朱志鑫苏新皓发红包](https://s.weibo.com/weibo?q=%23%E7%B2%89%E4%B8%9D%E7%BB%99%E6%9C%B1%E5%BF%97%E9%91%AB%E8%8B%8F%E6%96%B0%E7%9A%93%E5%8F%91%E7%BA%A2%E5%8C%85%23) `276.9K 🔥` `NEW`
1. [杜华被雷军问还有哪些艺人的反应](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%8D%8E%E8%A2%AB%E9%9B%B7%E5%86%9B%E9%97%AE%E8%BF%98%E6%9C%89%E5%93%AA%E4%BA%9B%E8%89%BA%E4%BA%BA%E7%9A%84%E5%8F%8D%E5%BA%94%23) `276.9K 🔥` `NEW`
1. [2米蟒蛇吞下1只鸡后被卡鸡笼](https://s.weibo.com/weibo?q=%232%E7%B1%B3%E8%9F%92%E8%9B%87%E5%90%9E%E4%B8%8B1%E5%8F%AA%E9%B8%A1%E5%90%8E%E8%A2%AB%E5%8D%A1%E9%B8%A1%E7%AC%BC%23) `230.2K 🔥` `NEW`
1. [薛之谦方回应李雨桐被行拘](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%96%B9%E5%9B%9E%E5%BA%94%E6%9D%8E%E9%9B%A8%E6%A1%90%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `229.8K 🔥` `NEW`
1. [14天骨盆回正](https://s.weibo.com/weibo?q=%2314%E5%A4%A9%E9%AA%A8%E7%9B%86%E5%9B%9E%E6%AD%A3%23) `227.2K 🔥` `NEW`
1. [男子美国摆摊进货1元卖5美元](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%BE%8E%E5%9B%BD%E6%91%86%E6%91%8A%E8%BF%9B%E8%B4%A71%E5%85%83%E5%8D%965%E7%BE%8E%E5%85%83%23) `225.4K 🔥` `NEW`
1. [泼水节蓝莓摊被洗劫一空进展](https://s.weibo.com/weibo?q=%23%E6%B3%BC%E6%B0%B4%E8%8A%82%E8%93%9D%E8%8E%93%E6%91%8A%E8%A2%AB%E6%B4%97%E5%8A%AB%E4%B8%80%E7%A9%BA%E8%BF%9B%E5%B1%95%23) `225.0K 🔥` `NEW`
1. [东部战区舰艇编队过航横当水道](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%83%A8%E6%88%98%E5%8C%BA%E8%88%B0%E8%89%87%E7%BC%96%E9%98%9F%E8%BF%87%E8%88%AA%E6%A8%AA%E5%BD%93%E6%B0%B4%E9%81%93%23) `224.6K 🔥` `NEW`
1. [梁晶晶称流产5次失去7个孩子 (Liang Jingjing said she had 5 miscarriages and lost 7 children)](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%99%B6%E6%99%B6%E7%A7%B0%E6%B5%81%E4%BA%A75%E6%AC%A1%E5%A4%B1%E5%8E%BB7%E4%B8%AA%E5%AD%A9%E5%AD%90%23) `224.6K 🔥` `NEW`
1. [李雨桐索要财物未果后恶性造谣诽谤](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%A8%E6%A1%90%E7%B4%A2%E8%A6%81%E8%B4%A2%E7%89%A9%E6%9C%AA%E6%9E%9C%E5%90%8E%E6%81%B6%E6%80%A7%E9%80%A0%E8%B0%A3%E8%AF%BD%E8%B0%A4%23) `214.6K 🔥` `NEW`
1. [张雪机车第7](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E7%AC%AC7%23) `193.8K 🔥` `NEW`
1. [金像奖](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%83%8F%E5%A5%96%23) `186.9K 🔥` `NEW`
1. [侯明昊曾舜晞是一个组合出道的](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E6%9B%BE%E8%88%9C%E6%99%9E%E6%98%AF%E4%B8%80%E4%B8%AA%E7%BB%84%E5%90%88%E5%87%BA%E9%81%93%E7%9A%84%23) `176.8K 🔥` `NEW`
1. [仙逆](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%23) `156.6K 🔥` `NEW`
1. [李小冉唱了一下午](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%94%B1%E4%BA%86%E4%B8%80%E4%B8%8B%E5%8D%88%23) `147.6K 🔥` `NEW`
1. [姜涛瘦了很多](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E6%B6%9B%E7%98%A6%E4%BA%86%E5%BE%88%E5%A4%9A%23) `145.3K 🔥` `NEW`
1. [小米徐洁云喊话造谣者](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%BE%90%E6%B4%81%E4%BA%91%E5%96%8A%E8%AF%9D%E9%80%A0%E8%B0%A3%E8%80%85%23) `144.2K 🔥` `NEW`
1. [朴元彬回应身高争议](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%85%83%E5%BD%AC%E5%9B%9E%E5%BA%94%E8%BA%AB%E9%AB%98%E4%BA%89%E8%AE%AE%23) `143.2K 🔥` `NEW`
1. [古天乐宣萱 一如既往的般配 (Louis Koo and Xuan Xuan are as good a match as ever)](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E5%A4%A9%E4%B9%90%E5%AE%A3%E8%90%B1%20%E4%B8%80%E5%A6%82%E6%97%A2%E5%BE%80%E7%9A%84%E8%88%AC%E9%85%8D%23) `137.0K 🔥` `NEW`
1. [高中生因操行分不合格等被劝退](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%AD%E7%94%9F%E5%9B%A0%E6%93%8D%E8%A1%8C%E5%88%86%E4%B8%8D%E5%90%88%E6%A0%BC%E7%AD%89%E8%A2%AB%E5%8A%9D%E9%80%80%23) `136.1K 🔥` `NEW`
1. [沈梦辰连续4年做热玛吉脸越打越薄](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%A2%A6%E8%BE%B0%E8%BF%9E%E7%BB%AD4%E5%B9%B4%E5%81%9A%E7%83%AD%E7%8E%9B%E5%90%89%E8%84%B8%E8%B6%8A%E6%89%93%E8%B6%8A%E8%96%84%23) `135.9K 🔥` `NEW`
1. [金像奖马丽长发港风造型](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%83%8F%E5%A5%96%E9%A9%AC%E4%B8%BD%E9%95%BF%E5%8F%91%E6%B8%AF%E9%A3%8E%E9%80%A0%E5%9E%8B%23) `135.4K 🔥` `NEW`
1. [胃癌晚期治疗有新突破](https://s.weibo.com/weibo?q=%23%E8%83%83%E7%99%8C%E6%99%9A%E6%9C%9F%E6%B2%BB%E7%96%97%E6%9C%89%E6%96%B0%E7%AA%81%E7%A0%B4%23) `124.3K 🔥` `NEW`
1. [Jennie八年来都长一个样](https://s.weibo.com/weibo?q=%23Jennie%E5%85%AB%E5%B9%B4%E6%9D%A5%E9%83%BD%E9%95%BF%E4%B8%80%E4%B8%AA%E6%A0%B7%23) `119.6K 🔥` `NEW`
1. [河南三地巨额数据造假25人被问责](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%89%E5%9C%B0%E5%B7%A8%E9%A2%9D%E6%95%B0%E6%8D%AE%E9%80%A0%E5%81%8725%E4%BA%BA%E8%A2%AB%E9%97%AE%E8%B4%A3%23) `113.3K 🔥` `NEW`
1. [以色列民众要求内塔尼亚胡政府下台](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%B0%91%E4%BC%97%E8%A6%81%E6%B1%82%E5%86%85%E5%A1%94%E5%B0%BC%E4%BA%9A%E8%83%A1%E6%94%BF%E5%BA%9C%E4%B8%8B%E5%8F%B0%23) `113.2K 🔥` `NEW`
1. [张雪机车](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%23) `113.2K 🔥` `NEW`

Updated at 2026-04-20 00:36:36

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
