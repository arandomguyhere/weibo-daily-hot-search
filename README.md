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

1. [上科大39岁教授营救至亲溺水去世 (A 39-year-old professor at Shanghai University of Science and Technology died from drowning after rescuing a relative)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%A7%91%E5%A4%A739%E5%B2%81%E6%95%99%E6%8E%88%E8%90%A5%E6%95%91%E8%87%B3%E4%BA%B2%E6%BA%BA%E6%B0%B4%E5%8E%BB%E4%B8%96%23) `1.1M 🔥` `NEW`
1. [这个五一假期惠民福利停不下来](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%AA%E4%BA%94%E4%B8%80%E5%81%87%E6%9C%9F%E6%83%A0%E6%B0%91%E7%A6%8F%E5%88%A9%E5%81%9C%E4%B8%8D%E4%B8%8B%E6%9D%A5%23) `779.2K 🔥` `NEW`
1. [把自己当成糖尿病人来吃饭](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E8%87%AA%E5%B7%B1%E5%BD%93%E6%88%90%E7%B3%96%E5%B0%BF%E7%97%85%E4%BA%BA%E6%9D%A5%E5%90%83%E9%A5%AD%23) `756.3K 🔥` `NEW`
1. [男子养了11年的3个孩子2个非亲生](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%85%BB%E4%BA%8611%E5%B9%B4%E7%9A%843%E4%B8%AA%E5%AD%A9%E5%AD%902%E4%B8%AA%E9%9D%9E%E4%BA%B2%E7%94%9F%23) `492.8K 🔥` `NEW`
1. [马龙许昕出发伦敦](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95%E5%87%BA%E5%8F%91%E4%BC%A6%E6%95%A6%23) `483.7K 🔥` `NEW`
1. [央视再调查网红减肥针乱象](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E5%86%8D%E8%B0%83%E6%9F%A5%E7%BD%91%E7%BA%A2%E5%87%8F%E8%82%A5%E9%92%88%E4%B9%B1%E8%B1%A1%23) `464.1K 🔥` `NEW`
1. [李小冉你是真火了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E4%BD%A0%E6%98%AF%E7%9C%9F%E7%81%AB%E4%BA%86%23) `382.6K 🔥` `NEW`
1. [汤晶媚吐槽黄宗泽牙龈萎缩](https://s.weibo.com/weibo?q=%23%E6%B1%A4%E6%99%B6%E5%AA%9A%E5%90%90%E6%A7%BD%E9%BB%84%E5%AE%97%E6%B3%BD%E7%89%99%E9%BE%88%E8%90%8E%E7%BC%A9%23) `359.7K 🔥` `NEW`
1. [湖南广电 AI播新闻](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%B9%BF%E7%94%B5%20AI%E6%92%AD%E6%96%B0%E9%97%BB%23) `354.3K 🔥` `NEW`
1. [美日菲抵近中国近海舞枪弄棒](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E6%97%A5%E8%8F%B2%E6%8A%B5%E8%BF%91%E4%B8%AD%E5%9B%BD%E8%BF%91%E6%B5%B7%E8%88%9E%E6%9E%AA%E5%BC%84%E6%A3%92%23) `347.8K 🔥` `NEW`
1. [吴彦祖妻子宣布复出 (Daniel Wu’s wife announces comeback)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%BD%A6%E7%A5%96%E5%A6%BB%E5%AD%90%E5%AE%A3%E5%B8%83%E5%A4%8D%E5%87%BA%23) `334.3K 🔥` `NEW`
1. [跑男摄影师谈白鹿 身正不怕影子歪](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E6%91%84%E5%BD%B1%E5%B8%88%E8%B0%88%E7%99%BD%E9%B9%BF%20%E8%BA%AB%E6%AD%A3%E4%B8%8D%E6%80%95%E5%BD%B1%E5%AD%90%E6%AD%AA%23) `268.3K 🔥` `NEW`
1. [尤杯国羽3比0日本](https://s.weibo.com/weibo?q=%23%E5%B0%A4%E6%9D%AF%E5%9B%BD%E7%BE%BD3%E6%AF%940%E6%97%A5%E6%9C%AC%23) `264.4K 🔥` `NEW`
1. [国乒假期冲击男团12连冠](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%81%87%E6%9C%9F%E5%86%B2%E5%87%BB%E7%94%B7%E5%9B%A212%E8%BF%9E%E5%86%A0%23) `264.1K 🔥` `NEW`
1. [包文婧回应赵奕欢和包贝尔暧昧](https://s.weibo.com/weibo?q=%23%E5%8C%85%E6%96%87%E5%A9%A7%E5%9B%9E%E5%BA%94%E8%B5%B5%E5%A5%95%E6%AC%A2%E5%92%8C%E5%8C%85%E8%B4%9D%E5%B0%94%E6%9A%A7%E6%98%A7%23) `264.0K 🔥` `NEW`
1. [老人夜晚回家警灯亮了一路](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E5%A4%9C%E6%99%9A%E5%9B%9E%E5%AE%B6%E8%AD%A6%E7%81%AF%E4%BA%AE%E4%BA%86%E4%B8%80%E8%B7%AF%23) `232.5K 🔥` `NEW`
1. [黄灿灿 罗予彤边练歌边骂人的样子真美](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%20%E7%BD%97%E4%BA%88%E5%BD%A4%E8%BE%B9%E7%BB%83%E6%AD%8C%E8%BE%B9%E9%AA%82%E4%BA%BA%E7%9A%84%E6%A0%B7%E5%AD%90%E7%9C%9F%E7%BE%8E%23) `230.6K 🔥` `NEW`
1. [深圳暴雨](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E6%9A%B4%E9%9B%A8%23) `192.9K 🔥` `NEW`
1. [王祉怡给山口茜打躺下了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%A5%89%E6%80%A1%E7%BB%99%E5%B1%B1%E5%8F%A3%E8%8C%9C%E6%89%93%E8%BA%BA%E4%B8%8B%E4%BA%86%23) `189.9K 🔥` `NEW`
1. [泰山降雨大风厕所挤满过夜游客](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%B1%B1%E9%99%8D%E9%9B%A8%E5%A4%A7%E9%A3%8E%E5%8E%95%E6%89%80%E6%8C%A4%E6%BB%A1%E8%BF%87%E5%A4%9C%E6%B8%B8%E5%AE%A2%23) `186.9K 🔥` `NEW`
1. [河南灵宝起火足浴店内部画面曝光 (Internal footage of Henan Lingbao foot bath shop catching fire exposed)](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E7%81%B5%E5%AE%9D%E8%B5%B7%E7%81%AB%E8%B6%B3%E6%B5%B4%E5%BA%97%E5%86%85%E9%83%A8%E7%94%BB%E9%9D%A2%E6%9B%9D%E5%85%89%23) `185.6K 🔥` `NEW`
1. [80斤女生不吃碳水闭经体脂率超标](https://s.weibo.com/weibo?q=%2380%E6%96%A4%E5%A5%B3%E7%94%9F%E4%B8%8D%E5%90%83%E7%A2%B3%E6%B0%B4%E9%97%AD%E7%BB%8F%E4%BD%93%E8%84%82%E7%8E%87%E8%B6%85%E6%A0%87%23) `175.4K 🔥` `NEW`
1. [梁王组合打硬仗](https://s.weibo.com/weibo?q=%23%E6%A2%81%E7%8E%8B%E7%BB%84%E5%90%88%E6%89%93%E7%A1%AC%E4%BB%97%23) `150.7K 🔥` `NEW`
1. [国羽尤伯杯和韩国争冠](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E7%BE%BD%E5%B0%A4%E4%BC%AF%E6%9D%AF%E5%92%8C%E9%9F%A9%E5%9B%BD%E4%BA%89%E5%86%A0%23) `142.0K 🔥` `NEW`
1. [e人看完都窒息了](https://s.weibo.com/weibo?q=%23e%E4%BA%BA%E7%9C%8B%E5%AE%8C%E9%83%BD%E7%AA%92%E6%81%AF%E4%BA%86%23) `140.1K 🔥` `NEW`
1. [严浩翔 爱一个人需要另一个人](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%20%E7%88%B1%E4%B8%80%E4%B8%AA%E4%BA%BA%E9%9C%80%E8%A6%81%E5%8F%A6%E4%B8%80%E4%B8%AA%E4%BA%BA%23) `744.8K 🔥` `+277%`
1. [大睡特睡 修复前额叶](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%9D%A1%E7%89%B9%E7%9D%A1%20%E4%BF%AE%E5%A4%8D%E5%89%8D%E9%A2%9D%E5%8F%B6%23) `467.3K 🔥` `+26%`
1. [孙俪 我们家的狗装死把邓超吓晕了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%20%E6%88%91%E4%BB%AC%E5%AE%B6%E7%9A%84%E7%8B%97%E8%A3%85%E6%AD%BB%E6%8A%8A%E9%82%93%E8%B6%85%E5%90%93%E6%99%95%E4%BA%86%23) `448.8K 🔥` `+30%`
1. [姜十七回应整容](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E5%8D%81%E4%B8%83%E5%9B%9E%E5%BA%94%E6%95%B4%E5%AE%B9%23) `441.8K 🔥` `+29%`
1. [河南蒜苔 再说原地址给你补五十斤](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E8%92%9C%E8%8B%94%20%E5%86%8D%E8%AF%B4%E5%8E%9F%E5%9C%B0%E5%9D%80%E7%BB%99%E4%BD%A0%E8%A1%A5%E4%BA%94%E5%8D%81%E6%96%A4%23) `428.0K 🔥` `+117%`
1. [张婧仪团队不被允许进hi6录制现场 (Zhang Jingyi’s team was not allowed to enter the hi6 recording site)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%9B%A2%E9%98%9F%E4%B8%8D%E8%A2%AB%E5%85%81%E8%AE%B8%E8%BF%9Bhi6%E5%BD%95%E5%88%B6%E7%8E%B0%E5%9C%BA%23) `425.5K 🔥` `+29%`
1. [苹果iOS27系列新功能 (New features of Apple iOS27 series)](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9CiOS27%E7%B3%BB%E5%88%97%E6%96%B0%E5%8A%9F%E8%83%BD%23) `353.6K 🔥` `+63%`
1. [谢贤前女友CoCo回应分手原因](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E5%89%8D%E5%A5%B3%E5%8F%8BCoCo%E5%9B%9E%E5%BA%94%E5%88%86%E6%89%8B%E5%8E%9F%E5%9B%A0%23) `346.6K 🔥` `+75%`
1. [白鹿被孟子义说挂相](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%A2%AB%E5%AD%9F%E5%AD%90%E4%B9%89%E8%AF%B4%E6%8C%82%E7%9B%B8%23) `764.0K 🔥`
1. [李小冉被气哭了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E8%A2%AB%E6%B0%94%E5%93%AD%E4%BA%86%23) `344.0K 🔥`
1. [48小时手搓脑机接口 意念控制轮椅](https://s.weibo.com/weibo?q=%2348%E5%B0%8F%E6%97%B6%E6%89%8B%E6%90%93%E8%84%91%E6%9C%BA%E6%8E%A5%E5%8F%A3%20%E6%84%8F%E5%BF%B5%E6%8E%A7%E5%88%B6%E8%BD%AE%E6%A4%85%23) `245.8K 🔥`
1. [宋宁峰张婉婷风波后带娃出游](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%AE%81%E5%B3%B0%E5%BC%A0%E5%A9%89%E5%A9%B7%E9%A3%8E%E6%B3%A2%E5%90%8E%E5%B8%A6%E5%A8%83%E5%87%BA%E6%B8%B8%23) `225.7K 🔥`
1. [支付宝把便利店搞成球迷流水席](https://s.weibo.com/weibo?q=%23%E6%94%AF%E4%BB%98%E5%AE%9D%E6%8A%8A%E4%BE%BF%E5%88%A9%E5%BA%97%E6%90%9E%E6%88%90%E7%90%83%E8%BF%B7%E6%B5%81%E6%B0%B4%E5%B8%AD%23) `189.5K 🔥`
1. [詹姆斯与雷霆球员的年龄差具象化了](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E4%B8%8E%E9%9B%B7%E9%9C%86%E7%90%83%E5%91%98%E7%9A%84%E5%B9%B4%E9%BE%84%E5%B7%AE%E5%85%B7%E8%B1%A1%E5%8C%96%E4%BA%86%23) `179.0K 🔥`
1. [郑恺来了也得拍重庆落地签](https://s.weibo.com/weibo?q=%23%E9%83%91%E6%81%BA%E6%9D%A5%E4%BA%86%E4%B9%9F%E5%BE%97%E6%8B%8D%E9%87%8D%E5%BA%86%E8%90%BD%E5%9C%B0%E7%AD%BE%23) `149.6K 🔥`
1. [NPC小黄鱼互动改送簪花 (The NPC little yellow croaker interaction is changed to give hairpins)](https://s.weibo.com/weibo?q=%23NPC%E5%B0%8F%E9%BB%84%E9%B1%BC%E4%BA%92%E5%8A%A8%E6%94%B9%E9%80%81%E7%B0%AA%E8%8A%B1%23) `818.7K 🔥` `-29%`
1. [榴莲价格](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E4%BB%B7%E6%A0%BC%23) `360.3K 🔥` `-44%`
1. [景区NPC擦边涉嫌违法违规 (NPC in scenic spots is suspected of violating laws and regulations)](https://s.weibo.com/weibo?q=%23%E6%99%AF%E5%8C%BANPC%E6%93%A6%E8%BE%B9%E6%B6%89%E5%AB%8C%E8%BF%9D%E6%B3%95%E8%BF%9D%E8%A7%84%23) `335.8K 🔥` `-60%`
1. [美国街头吸毒者众多如丧尸聚集 (Drug addicts swarm on American streets like zombies)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E8%A1%97%E5%A4%B4%E5%90%B8%E6%AF%92%E8%80%85%E4%BC%97%E5%A4%9A%E5%A6%82%E4%B8%A7%E5%B0%B8%E8%81%9A%E9%9B%86%23) `277.1K 🔥` `-22%`
1. [合肥工业大学通报孙某某被开除学籍 (Hefei University of Technology reported that Sun Moumou was expelled from school)](https://s.weibo.com/weibo?q=%23%E5%90%88%E8%82%A5%E5%B7%A5%E4%B8%9A%E5%A4%A7%E5%AD%A6%E9%80%9A%E6%8A%A5%E5%AD%99%E6%9F%90%E6%9F%90%E8%A2%AB%E5%BC%80%E9%99%A4%E5%AD%A6%E7%B1%8D%23) `238.0K 🔥` `-30%`
1. [国乒男团1比3韩国 (National table tennis men's team 1 to 3 South Korea)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A21%E6%AF%943%E9%9F%A9%E5%9B%BD%23) `184.7K 🔥` `-49%`
1. [严浩翔回应演唱会哭了](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%9B%9E%E5%BA%94%E6%BC%94%E5%94%B1%E4%BC%9A%E5%93%AD%E4%BA%86%23) `176.6K 🔥` `-51%`
1. [一个烧饼做成40多亿跨国产业](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E7%83%A7%E9%A5%BC%E5%81%9A%E6%88%9040%E5%A4%9A%E4%BA%BF%E8%B7%A8%E5%9B%BD%E4%BA%A7%E4%B8%9A%23) `152.9K 🔥` `-23%`
1. [日本自卫队要打仗](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%87%AA%E5%8D%AB%E9%98%9F%E8%A6%81%E6%89%93%E4%BB%97%23) `138.2K 🔥` `-30%`

Updated at 2026-05-03 16:22:58

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
