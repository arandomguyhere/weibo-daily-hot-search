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

1. [张雪机车德比斯退赛 (Zhang Xue retires from motorcycle derby race)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%BE%B7%E6%AF%94%E6%96%AF%E9%80%80%E8%B5%9B%23) `1.3M 🔥` `NEW`
1. [乒乓球](https://s.weibo.com/weibo?q=%23%E4%B9%92%E4%B9%93%E7%90%83%23) `969.7K 🔥` `NEW`
1. [单日近3亿人跨区域流动](https://s.weibo.com/weibo?q=%23%E5%8D%95%E6%97%A5%E8%BF%913%E4%BA%BF%E4%BA%BA%E8%B7%A8%E5%8C%BA%E5%9F%9F%E6%B5%81%E5%8A%A8%23) `841.4K 🔥` `NEW`
1. [林诗栋2比3兰弗利](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B2%E6%AF%943%E5%85%B0%E5%BC%97%E5%88%A9%23) `693.8K 🔥` `NEW`
1. [黄灿灿 blackpink都没这么累](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%20blackpink%E9%83%BD%E6%B2%A1%E8%BF%99%E4%B9%88%E7%B4%AF%23) `582.4K 🔥` `NEW`
1. [佳偶天成 被剧名耽误](https://s.weibo.com/weibo?q=%23%E4%BD%B3%E5%81%B6%E5%A4%A9%E6%88%90%20%E8%A2%AB%E5%89%A7%E5%90%8D%E8%80%BD%E8%AF%AF%23) `528.9K 🔥` `NEW`
1. [张雪解释德比斯退赛原因](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E8%A7%A3%E9%87%8A%E5%BE%B7%E6%AF%94%E6%96%AF%E9%80%80%E8%B5%9B%E5%8E%9F%E5%9B%A0%23) `519.4K 🔥` `NEW`
1. [范丞丞 都给我出来](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%20%E9%83%BD%E7%BB%99%E6%88%91%E5%87%BA%E6%9D%A5%23) `511.4K 🔥` `NEW`
1. [大米爆](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%B1%B3%E7%88%86%23) `507.1K 🔥` `NEW`
1. [王楚钦手流血了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%89%8B%E6%B5%81%E8%A1%80%E4%BA%86%23) `498.6K 🔥` `NEW`
1. [时代少年团团体工作室快了 (Times Youth League group studio is coming soon)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%9B%A2%E4%BD%93%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%BF%AB%E4%BA%86%23) `480.8K 🔥` `NEW`
1. [范丞丞妈妈71岁状态](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E5%A6%88%E5%A6%8871%E5%B2%81%E7%8A%B6%E6%80%81%23) `466.3K 🔥` `NEW`
1. [走路看手机被劝退任性校规咋出台的](https://s.weibo.com/weibo?q=%23%E8%B5%B0%E8%B7%AF%E7%9C%8B%E6%89%8B%E6%9C%BA%E8%A2%AB%E5%8A%9D%E9%80%80%E4%BB%BB%E6%80%A7%E6%A0%A1%E8%A7%84%E5%92%8B%E5%87%BA%E5%8F%B0%E7%9A%84%23) `347.0K 🔥` `NEW`
1. [妻子频繁私发孩子照片给陌生男子](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E9%A2%91%E7%B9%81%E7%A7%81%E5%8F%91%E5%AD%A9%E5%AD%90%E7%85%A7%E7%89%87%E7%BB%99%E9%99%8C%E7%94%9F%E7%94%B7%E5%AD%90%23) `346.9K 🔥` `NEW`
1. [国羽尤伯杯亚军](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E7%BE%BD%E5%B0%A4%E4%BC%AF%E6%9D%AF%E4%BA%9A%E5%86%9B%23) `345.1K 🔥` `NEW`
1. [中国男团1比1瑞典](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%9B%A21%E6%AF%941%E7%91%9E%E5%85%B8%23) `325.4K 🔥` `NEW`
1. [DYG对战JDG](https://s.weibo.com/weibo?q=%23DYG%E5%AF%B9%E6%88%98JDG%23) `319.1K 🔥` `NEW`
1. [警方回应博主取样河水后被半夜敲门](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E5%9B%9E%E5%BA%94%E5%8D%9A%E4%B8%BB%E5%8F%96%E6%A0%B7%E6%B2%B3%E6%B0%B4%E5%90%8E%E8%A2%AB%E5%8D%8A%E5%A4%9C%E6%95%B2%E9%97%A8%23) `293.5K 🔥` `NEW`
1. [梁靖崑状态](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%91%E7%8A%B6%E6%80%81%23) `286.2K 🔥` `NEW`
1. [王楚钦手磕到球台](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%89%8B%E7%A3%95%E5%88%B0%E7%90%83%E5%8F%B0%23) `241.1K 🔥` `NEW`
1. [王曼昱什么时候上场 (When will Wang Manyu play?)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E4%B8%8A%E5%9C%BA%23) `219.5K 🔥` `NEW`
1. [宋祖儿看到自己老鼠干的表情](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%96%E5%84%BF%E7%9C%8B%E5%88%B0%E8%87%AA%E5%B7%B1%E8%80%81%E9%BC%A0%E5%B9%B2%E7%9A%84%E8%A1%A8%E6%83%85%23) `215.7K 🔥` `NEW`
1. [1300元的机票跌到400元](https://s.weibo.com/weibo?q=%231300%E5%85%83%E7%9A%84%E6%9C%BA%E7%A5%A8%E8%B7%8C%E5%88%B0400%E5%85%83%23) `211.8K 🔥` `NEW`
1. [顾客用烧烤签喂食宠物狗店主致歉](https://s.weibo.com/weibo?q=%23%E9%A1%BE%E5%AE%A2%E7%94%A8%E7%83%A7%E7%83%A4%E7%AD%BE%E5%96%82%E9%A3%9F%E5%AE%A0%E7%89%A9%E7%8B%97%E5%BA%97%E4%B8%BB%E8%87%B4%E6%AD%89%23) `194.6K 🔥` `NEW`
1. [孙俪邓超为女儿织围巾](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E9%82%93%E8%B6%85%E4%B8%BA%E5%A5%B3%E5%84%BF%E7%BB%87%E5%9B%B4%E5%B7%BE%23) `187.1K 🔥` `NEW`
1. [男子57秒从8楼冲到1楼捞起溺水幼童](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%9057%E7%A7%92%E4%BB%8E8%E6%A5%BC%E5%86%B2%E5%88%B01%E6%A5%BC%E6%8D%9E%E8%B5%B7%E6%BA%BA%E6%B0%B4%E5%B9%BC%E7%AB%A5%23) `182.4K 🔥` `NEW`
1. [机票价格腰斩](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E7%A5%A8%E4%BB%B7%E6%A0%BC%E8%85%B0%E6%96%A9%23) `155.8K 🔥` `NEW`
1. [芭蕾舞演员摸鹿后被蜱虫叮咬瘫痪](https://s.weibo.com/weibo?q=%23%E8%8A%AD%E8%95%BE%E8%88%9E%E6%BC%94%E5%91%98%E6%91%B8%E9%B9%BF%E5%90%8E%E8%A2%AB%E8%9C%B1%E8%99%AB%E5%8F%AE%E5%92%AC%E7%98%AB%E7%97%AA%23) `140.5K 🔥` `NEW`
1. [这得喝多少饮料才能成角](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%BE%97%E5%96%9D%E5%A4%9A%E5%B0%91%E9%A5%AE%E6%96%99%E6%89%8D%E8%83%BD%E6%88%90%E8%A7%92%23) `578.4K 🔥` `+361%`
1. [女子凌晨接到去世半年表弟来电](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%87%8C%E6%99%A8%E6%8E%A5%E5%88%B0%E5%8E%BB%E4%B8%96%E5%8D%8A%E5%B9%B4%E8%A1%A8%E5%BC%9F%E6%9D%A5%E7%94%B5%23) `486.6K 🔥` `+68%`
1. [繁殖犬 抑郁 (Breeding Dog Depression)](https://s.weibo.com/weibo?q=%23%E7%B9%81%E6%AE%96%E7%8A%AC%20%E6%8A%91%E9%83%81%23) `467.6K 🔥` `+62%`
1. [以色列全面进入备战状态](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%85%A8%E9%9D%A2%E8%BF%9B%E5%85%A5%E5%A4%87%E6%88%98%E7%8A%B6%E6%80%81%23) `347.1K 🔥` `+27%`
1. [谈没谈过恋爱一眼就能看出来](https://s.weibo.com/weibo?q=%23%E8%B0%88%E6%B2%A1%E8%B0%88%E8%BF%87%E6%81%8B%E7%88%B1%E4%B8%80%E7%9C%BC%E5%B0%B1%E8%83%BD%E7%9C%8B%E5%87%BA%E6%9D%A5%23) `347.0K 🔥` `+27%`
1. [银行为何又开始猛推大额存单](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E4%B8%BA%E4%BD%95%E5%8F%88%E5%BC%80%E5%A7%8B%E7%8C%9B%E6%8E%A8%E5%A4%A7%E9%A2%9D%E5%AD%98%E5%8D%95%23) `293.9K 🔥` `+61%`
1. [白鹿被孟子义说挂相 (Bai Lu was criticized by Mencius Yi)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%A2%AB%E5%AD%9F%E5%AD%90%E4%B9%89%E8%AF%B4%E6%8C%82%E7%9B%B8%23) `735.1K 🔥`
1. [黄晓明带妈妈小海绵逛游乐园 (Huang Xiaoming takes his mother Sponge to visit the amusement park)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E5%B8%A6%E5%A6%88%E5%A6%88%E5%B0%8F%E6%B5%B7%E7%BB%B5%E9%80%9B%E6%B8%B8%E4%B9%90%E5%9B%AD%23) `295.8K 🔥`
1. [张继科说国乒男队技术迭代不足](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%A7%E7%A7%91%E8%AF%B4%E5%9B%BD%E4%B9%92%E7%94%B7%E9%98%9F%E6%8A%80%E6%9C%AF%E8%BF%AD%E4%BB%A3%E4%B8%8D%E8%B6%B3%23) `293.3K 🔥`
1. [王楚钦vs卡尔伯格](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E5%8D%A1%E5%B0%94%E4%BC%AF%E6%A0%BC%23) `260.9K 🔥`
1. [把自己当成糖尿病人来吃饭](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E8%87%AA%E5%B7%B1%E5%BD%93%E6%88%90%E7%B3%96%E5%B0%BF%E7%97%85%E4%BA%BA%E6%9D%A5%E5%90%83%E9%A5%AD%23) `258.1K 🔥`
1. [尤伯杯](https://s.weibo.com/weibo?q=%23%E5%B0%A4%E4%BC%AF%E6%9D%AF%23) `178.7K 🔥`
1. [水果我只吃不出轨的](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E6%9E%9C%E6%88%91%E5%8F%AA%E5%90%83%E4%B8%8D%E5%87%BA%E8%BD%A8%E7%9A%84%23) `140.7K 🔥`
1. [中国男团vs瑞典 (Chinese men's team vs Sweden)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%9B%A2vs%E7%91%9E%E5%85%B8%23) `534.7K 🔥` `-37%`
1. [湖南广电 AI播新闻 (Hunan Radio and Television AI news broadcast)](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%B9%BF%E7%94%B5%20AI%E6%92%AD%E6%96%B0%E9%97%BB%23) `347.1K 🔥` `-70%`
1. [奶茶卖到188元一杯](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E8%8C%B6%E5%8D%96%E5%88%B0188%E5%85%83%E4%B8%80%E6%9D%AF%23) `315.7K 🔥` `-30%`
1. [在天上光选妈妈忘了选姐姐 (In the sky, I chose my mother and forgot to choose my sister.)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%A4%A9%E4%B8%8A%E5%85%89%E9%80%89%E5%A6%88%E5%A6%88%E5%BF%98%E4%BA%86%E9%80%89%E5%A7%90%E5%A7%90%23) `234.7K 🔥` `-36%`
1. [吴彦祖妻子宣布复出 (Daniel Wu’s wife announces comeback)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%BD%A6%E7%A5%96%E5%A6%BB%E5%AD%90%E5%AE%A3%E5%B8%83%E5%A4%8D%E5%87%BA%23) `158.9K 🔥` `-43%`
1. [80斤女生不吃碳水闭经体脂率超标](https://s.weibo.com/weibo?q=%2380%E6%96%A4%E5%A5%B3%E7%94%9F%E4%B8%8D%E5%90%83%E7%A2%B3%E6%B0%B4%E9%97%AD%E7%BB%8F%E4%BD%93%E8%84%82%E7%8E%87%E8%B6%85%E6%A0%87%23) `155.7K 🔥` `-42%`
1. [跑男摄影师谈白鹿 身正不怕影子歪](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E6%91%84%E5%BD%B1%E5%B8%88%E8%B0%88%E7%99%BD%E9%B9%BF%20%E8%BA%AB%E6%AD%A3%E4%B8%8D%E6%80%95%E5%BD%B1%E5%AD%90%E6%AD%AA%23) `151.5K 🔥` `-37%`
1. [河南蒜苔 再说原地址给你补五十斤](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E8%92%9C%E8%8B%94%20%E5%86%8D%E8%AF%B4%E5%8E%9F%E5%9C%B0%E5%9D%80%E7%BB%99%E4%BD%A0%E8%A1%A5%E4%BA%94%E5%8D%81%E6%96%A4%23) `141.2K 🔥` `-49%`

Updated at 2026-05-03 21:47:43

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
