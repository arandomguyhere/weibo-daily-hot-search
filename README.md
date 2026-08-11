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

1. [哪吒159亿票房为何换不来全体起立 (Why can’t everyone stand up in exchange for Nezha’s 15.9 billion box office?)](https://s.weibo.com/weibo?q=%23%E5%93%AA%E5%90%92159%E4%BA%BF%E7%A5%A8%E6%88%BF%E4%B8%BA%E4%BD%95%E6%8D%A2%E4%B8%8D%E6%9D%A5%E5%85%A8%E4%BD%93%E8%B5%B7%E7%AB%8B%23) `1.5M 🔥` `NEW`
1. [欢迎来龙餐馆夯爆了](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E8%BF%8E%E6%9D%A5%E9%BE%99%E9%A4%90%E9%A6%86%E5%A4%AF%E7%88%86%E4%BA%86%23) `816.0K 🔥` `NEW`
1. [JDG官宣xiaofang加入](https://s.weibo.com/weibo?q=%23JDG%E5%AE%98%E5%AE%A3xiaofang%E5%8A%A0%E5%85%A5%23) `538.2K 🔥` `NEW`
1. [巴旦木公主晒结婚证](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%97%A6%E6%9C%A8%E5%85%AC%E4%B8%BB%E6%99%92%E7%BB%93%E5%A9%9A%E8%AF%81%23) `530.9K 🔥` `NEW`
1. [卢伟冰称小米国内首家自研发光材料](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E4%BC%9F%E5%86%B0%E7%A7%B0%E5%B0%8F%E7%B1%B3%E5%9B%BD%E5%86%85%E9%A6%96%E5%AE%B6%E8%87%AA%E7%A0%94%E5%8F%91%E5%85%89%E6%9D%90%E6%96%99%23) `492.6K 🔥` `NEW`
1. [方文山发文回应出轨](https://s.weibo.com/weibo?q=%23%E6%96%B9%E6%96%87%E5%B1%B1%E5%8F%91%E6%96%87%E5%9B%9E%E5%BA%94%E5%87%BA%E8%BD%A8%23) `490.1K 🔥` `NEW`
1. [白海豚来了个回马枪再度冲击江浙沪](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E6%9D%A5%E4%BA%86%E4%B8%AA%E5%9B%9E%E9%A9%AC%E6%9E%AA%E5%86%8D%E5%BA%A6%E5%86%B2%E5%87%BB%E6%B1%9F%E6%B5%99%E6%B2%AA%23) `345.5K 🔥` `NEW`
1. [7旬老人被女主播崩了3年](https://s.weibo.com/weibo?q=%237%E6%97%AC%E8%80%81%E4%BA%BA%E8%A2%AB%E5%A5%B3%E4%B8%BB%E6%92%AD%E5%B4%A9%E4%BA%863%E5%B9%B4%23) `341.7K 🔥` `NEW`
1. [金建希庭审承认收受名牌包](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%BB%BA%E5%B8%8C%E5%BA%AD%E5%AE%A1%E6%89%BF%E8%AE%A4%E6%94%B6%E5%8F%97%E5%90%8D%E7%89%8C%E5%8C%85%23) `340.2K 🔥` `NEW`
1. [方文山称遭投资方污蔑](https://s.weibo.com/weibo?q=%23%E6%96%B9%E6%96%87%E5%B1%B1%E7%A7%B0%E9%81%AD%E6%8A%95%E8%B5%84%E6%96%B9%E6%B1%A1%E8%94%91%23) `330.4K 🔥` `NEW`
1. [易烊千玺赞助商logo全抹 (Yi Yang Qianxi’s sponsor logo is completely wiped out)](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E8%B5%9E%E5%8A%A9%E5%95%86logo%E5%85%A8%E6%8A%B9%23) `304.7K 🔥` `NEW`
1. [科目二挂了教练换的头像](https://s.weibo.com/weibo?q=%23%E7%A7%91%E7%9B%AE%E4%BA%8C%E6%8C%82%E4%BA%86%E6%95%99%E7%BB%83%E6%8D%A2%E7%9A%84%E5%A4%B4%E5%83%8F%23) `232.6K 🔥` `NEW`
1. [帕拉梅拉价格跌破百万](https://s.weibo.com/weibo?q=%23%E5%B8%95%E6%8B%89%E6%A2%85%E6%8B%89%E4%BB%B7%E6%A0%BC%E8%B7%8C%E7%A0%B4%E7%99%BE%E4%B8%87%23) `206.6K 🔥` `NEW`
1. [阴阳师](https://s.weibo.com/weibo?q=%23%E9%98%B4%E9%98%B3%E5%B8%88%23) `204.4K 🔥` `NEW`
1. [白百何素颜肤色](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%99%BE%E4%BD%95%E7%B4%A0%E9%A2%9C%E8%82%A4%E8%89%B2%23) `202.0K 🔥` `NEW`
1. [工作重要还是打游戏重要](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E9%87%8D%E8%A6%81%E8%BF%98%E6%98%AF%E6%89%93%E6%B8%B8%E6%88%8F%E9%87%8D%E8%A6%81%23) `201.2K 🔥` `NEW`
1. [杨幂妈幂](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%A6%88%E5%B9%82%23) `200.7K 🔥` `NEW`
1. [叶一茜小时候比森碟还像田亮](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E4%B8%80%E8%8C%9C%E5%B0%8F%E6%97%B6%E5%80%99%E6%AF%94%E6%A3%AE%E7%A2%9F%E8%BF%98%E5%83%8F%E7%94%B0%E4%BA%AE%23) `200.6K 🔥` `NEW`
1. [转账备注不求结婚分手索赔11万](https://s.weibo.com/weibo?q=%23%E8%BD%AC%E8%B4%A6%E5%A4%87%E6%B3%A8%E4%B8%8D%E6%B1%82%E7%BB%93%E5%A9%9A%E5%88%86%E6%89%8B%E7%B4%A2%E8%B5%9411%E4%B8%87%23) `199.1K 🔥` `NEW`
1. [AI出现学编程还有意义吗](https://s.weibo.com/weibo?q=%23AI%E5%87%BA%E7%8E%B0%E5%AD%A6%E7%BC%96%E7%A8%8B%E8%BF%98%E6%9C%89%E6%84%8F%E4%B9%89%E5%90%97%23) `198.9K 🔥` `NEW`
1. [陈松伶回应暴瘦 (Chen Songling responded to losing weight)](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%9D%BE%E4%BC%B6%E5%9B%9E%E5%BA%94%E6%9A%B4%E7%98%A6%23) `198.9K 🔥` `NEW`
1. [宁波警方并未证实雅典娜已遇害](https://s.weibo.com/weibo?q=%23%E5%AE%81%E6%B3%A2%E8%AD%A6%E6%96%B9%E5%B9%B6%E6%9C%AA%E8%AF%81%E5%AE%9E%E9%9B%85%E5%85%B8%E5%A8%9C%E5%B7%B2%E9%81%87%E5%AE%B3%23) `175.5K 🔥` `NEW`
1. [马斯克母子强推中国游](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E6%AF%8D%E5%AD%90%E5%BC%BA%E6%8E%A8%E4%B8%AD%E5%9B%BD%E6%B8%B8%23) `894.0K 🔥` `+101%`
1. [K100Pro双旗舰今晚7点见 (K100Pro dual flagship, see you tonight at 7 o'clock)](https://s.weibo.com/weibo?q=%23K100Pro%E5%8F%8C%E6%97%97%E8%88%B0%E4%BB%8A%E6%99%9A7%E7%82%B9%E8%A7%81%23) `867.9K 🔥` `+29%`
1. [你永远猜不到小孩把东西藏哪](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%B0%B8%E8%BF%9C%E7%8C%9C%E4%B8%8D%E5%88%B0%E5%B0%8F%E5%AD%A9%E6%8A%8A%E4%B8%9C%E8%A5%BF%E8%97%8F%E5%93%AA%23) `812.2K 🔥` `+181%`
1. [于东来自掏65亿建商场当包租公](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E4%B8%9C%E6%9D%A5%E8%87%AA%E6%8E%8F65%E4%BA%BF%E5%BB%BA%E5%95%86%E5%9C%BA%E5%BD%93%E5%8C%85%E7%A7%9F%E5%85%AC%23) `548.6K 🔥` `+23%`
1. [偷偷藏不住疑似撤档 (Unable to hide secretly, suspected withdrawal)](https://s.weibo.com/weibo?q=%23%E5%81%B7%E5%81%B7%E8%97%8F%E4%B8%8D%E4%BD%8F%E7%96%91%E4%BC%BC%E6%92%A4%E6%A1%A3%23) `542.3K 🔥` `+24%`
1. [当老板意识到AI比人工贵](https://s.weibo.com/weibo?q=%23%E5%BD%93%E8%80%81%E6%9D%BF%E6%84%8F%E8%AF%86%E5%88%B0AI%E6%AF%94%E4%BA%BA%E5%B7%A5%E8%B4%B5%23) `346.3K 🔥` `+30%`
1. [遇城市内涝这些事千万不能做](https://s.weibo.com/weibo?q=%23%E9%81%87%E5%9F%8E%E5%B8%82%E5%86%85%E6%B6%9D%E8%BF%99%E4%BA%9B%E4%BA%8B%E5%8D%83%E4%B8%87%E4%B8%8D%E8%83%BD%E5%81%9A%23) `868.1K 🔥`
1. [建议大家装修不要太大众](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E8%A3%85%E4%BF%AE%E4%B8%8D%E8%A6%81%E5%A4%AA%E5%A4%A7%E4%BC%97%23) `867.1K 🔥`
1. [买车的欲望已经到了极致](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E8%BD%A6%E7%9A%84%E6%AC%B2%E6%9C%9B%E5%B7%B2%E7%BB%8F%E5%88%B0%E4%BA%86%E6%9E%81%E8%87%B4%23) `835.9K 🔥`
1. [姜小柔](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E5%B0%8F%E6%9F%94%23) `395.7K 🔥`
1. [俄女子称逃离缅甸电诈园游河到泰国 (Russian woman says she escaped from Myanmar and traveled to Thailand via e-mail scam)](https://s.weibo.com/weibo?q=%23%E4%BF%84%E5%A5%B3%E5%AD%90%E7%A7%B0%E9%80%83%E7%A6%BB%E7%BC%85%E7%94%B8%E7%94%B5%E8%AF%88%E5%9B%AD%E6%B8%B8%E6%B2%B3%E5%88%B0%E6%B3%B0%E5%9B%BD%23) `347.3K 🔥`
1. [女子买西瓜切出膜状异物](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B9%B0%E8%A5%BF%E7%93%9C%E5%88%87%E5%87%BA%E8%86%9C%E7%8A%B6%E5%BC%82%E7%89%A9%23) `336.1K 🔥`
1. [猫耳声刻2026阵容](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E8%80%B3%E5%A3%B0%E5%88%BB2026%E9%98%B5%E5%AE%B9%23) `329.0K 🔥`
1. [谢娜偶像来了名场面翻红](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%81%B6%E5%83%8F%E6%9D%A5%E4%BA%86%E5%90%8D%E5%9C%BA%E9%9D%A2%E7%BF%BB%E7%BA%A2%23) `266.0K 🔥`
1. [日本大量网帖否认核爆 (Japan's massive online posts deny nuclear explosions)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A4%A7%E9%87%8F%E7%BD%91%E5%B8%96%E5%90%A6%E8%AE%A4%E6%A0%B8%E7%88%86%23) `265.7K 🔥`
1. [男孩见猴子喝脏水主动送水](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E8%A7%81%E7%8C%B4%E5%AD%90%E5%96%9D%E8%84%8F%E6%B0%B4%E4%B8%BB%E5%8A%A8%E9%80%81%E6%B0%B4%23) `231.7K 🔥`
1. [雅典娜遇害名单截图出自反诈片 (The screenshot of Athena’s murder list is from an anti-fraud film)](https://s.weibo.com/weibo?q=%23%E9%9B%85%E5%85%B8%E5%A8%9C%E9%81%87%E5%AE%B3%E5%90%8D%E5%8D%95%E6%88%AA%E5%9B%BE%E5%87%BA%E8%87%AA%E5%8F%8D%E8%AF%88%E7%89%87%23) `857.7K 🔥` `-33%`
1. [陈俊生150万年薪让罗子君买8万的鞋](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BF%8A%E7%94%9F150%E4%B8%87%E5%B9%B4%E8%96%AA%E8%AE%A9%E7%BD%97%E5%AD%90%E5%90%9B%E4%B9%B08%E4%B8%87%E7%9A%84%E9%9E%8B%23) `520.7K 🔥` `-31%`
1. [雅典娜](https://s.weibo.com/weibo?q=%23%E9%9B%85%E5%85%B8%E5%A8%9C%23) `509.5K 🔥` `-48%`
1. [睡车里被酒店收150元住宿费事件反转](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E8%BD%A6%E9%87%8C%E8%A2%AB%E9%85%92%E5%BA%97%E6%94%B6150%E5%85%83%E4%BD%8F%E5%AE%BF%E8%B4%B9%E4%BA%8B%E4%BB%B6%E5%8F%8D%E8%BD%AC%23) `325.3K 🔥` `-29%`
1. [17年寻女终确认女儿2008年已溺亡](https://s.weibo.com/weibo?q=%2317%E5%B9%B4%E5%AF%BB%E5%A5%B3%E7%BB%88%E7%A1%AE%E8%AE%A4%E5%A5%B3%E5%84%BF2008%E5%B9%B4%E5%B7%B2%E6%BA%BA%E4%BA%A1%23) `273.0K 🔥` `-26%`
1. [曝TF四代五公后宣布开启出道计划](https://s.weibo.com/weibo?q=%23%E6%9B%9DTF%E5%9B%9B%E4%BB%A3%E4%BA%94%E5%85%AC%E5%90%8E%E5%AE%A3%E5%B8%83%E5%BC%80%E5%90%AF%E5%87%BA%E9%81%93%E8%AE%A1%E5%88%92%23) `266.8K 🔥` `-37%`
1. [女子被拐关地下室被虐8年 (Woman abducted, locked up in basement and tortured for 8 years)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A2%AB%E6%8B%90%E5%85%B3%E5%9C%B0%E4%B8%8B%E5%AE%A4%E8%A2%AB%E8%99%908%E5%B9%B4%23) `265.7K 🔥` `-25%`
1. [7月销量前十仅一款燃油车 (There was only one fuel vehicle in the top ten sales in July)](https://s.weibo.com/weibo?q=%237%E6%9C%88%E9%94%80%E9%87%8F%E5%89%8D%E5%8D%81%E4%BB%85%E4%B8%80%E6%AC%BE%E7%87%83%E6%B2%B9%E8%BD%A6%23) `262.6K 🔥` `-52%`
1. [易烊千玺仅差华表奖大满贯 (Yi Yang Qianxi is only short of the Huabiao Grand Slam Award)](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E4%BB%85%E5%B7%AE%E5%8D%8E%E8%A1%A8%E5%A5%96%E5%A4%A7%E6%BB%A1%E8%B4%AF%23) `231.1K 🔥` `-50%`
1. [韩网友因张元英说中文愤怒 (Korean netizens are angry because Zhang Yuanying speaks Chinese)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BD%91%E5%8F%8B%E5%9B%A0%E5%BC%A0%E5%85%83%E8%8B%B1%E8%AF%B4%E4%B8%AD%E6%96%87%E6%84%A4%E6%80%92%23) `215.1K 🔥` `-51%`
1. [马薇薇回应消失5年](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E8%96%87%E8%96%87%E5%9B%9E%E5%BA%94%E6%B6%88%E5%A4%B15%E5%B9%B4%23) `203.4K 🔥` `-36%`
1. [百花影帝影后历年票数](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%BD%B1%E5%B8%9D%E5%BD%B1%E5%90%8E%E5%8E%86%E5%B9%B4%E7%A5%A8%E6%95%B0%23) `191.8K 🔥` `-55%`
1. [C罗年薪19亿足坛断档第一](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%B9%B4%E8%96%AA19%E4%BA%BF%E8%B6%B3%E5%9D%9B%E6%96%AD%E6%A1%A3%E7%AC%AC%E4%B8%80%23) `191.8K 🔥` `-59%`
1. [白鹿黑丝御姐黑西装](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E9%BB%91%E4%B8%9D%E5%BE%A1%E5%A7%90%E9%BB%91%E8%A5%BF%E8%A3%85%23) `191.8K 🔥` `-30%`

Updated at 2026-08-11 16:51:49

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
