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

1. [779元滴眼液暴涨至3382元 (Eye drops priced at 779 yuan soared to 3382 yuan)](https://s.weibo.com/weibo?q=%23779%E5%85%83%E6%BB%B4%E7%9C%BC%E6%B6%B2%E6%9A%B4%E6%B6%A8%E8%87%B33382%E5%85%83%23) `784.4K 🔥` `NEW`
1. [以色列电视台倒计时轰炸等来停火](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E7%94%B5%E8%A7%86%E5%8F%B0%E5%80%92%E8%AE%A1%E6%97%B6%E8%BD%B0%E7%82%B8%E7%AD%89%E6%9D%A5%E5%81%9C%E7%81%AB%23) `407.5K 🔥` `NEW`
1. [浪姐小考 完全小品](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%B0%8F%E8%80%83%20%E5%AE%8C%E5%85%A8%E5%B0%8F%E5%93%81%23) `344.3K 🔥` `NEW`
1. [江语晨小考突然离场](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%E5%B0%8F%E8%80%83%E7%AA%81%E7%84%B6%E7%A6%BB%E5%9C%BA%23) `334.2K 🔥` `NEW`
1. [我的手机镜头开了外挂](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E6%89%8B%E6%9C%BA%E9%95%9C%E5%A4%B4%E5%BC%80%E4%BA%86%E5%A4%96%E6%8C%82%23) `296.5K 🔥` `NEW`
1. [女方猝死遗产继承权亲儿子仅占八分之一](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%96%B9%E7%8C%9D%E6%AD%BB%E9%81%97%E4%BA%A7%E7%BB%A7%E6%89%BF%E6%9D%83%E4%BA%B2%E5%84%BF%E5%AD%90%E4%BB%85%E5%8D%A0%E5%85%AB%E5%88%86%E4%B9%8B%E4%B8%80%23) `288.8K 🔥` `NEW`
1. [余承东猛批团队设计不高级](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E7%8C%9B%E6%89%B9%E5%9B%A2%E9%98%9F%E8%AE%BE%E8%AE%A1%E4%B8%8D%E9%AB%98%E7%BA%A7%23) `200.8K 🔥` `NEW`
1. [女子孕期得知丈夫出轨20余人](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%AD%95%E6%9C%9F%E5%BE%97%E7%9F%A5%E4%B8%88%E5%A4%AB%E5%87%BA%E8%BD%A820%E4%BD%99%E4%BA%BA%23) `200.4K 🔥` `NEW`
1. [大艺术家 不敢听](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%89%BA%E6%9C%AF%E5%AE%B6%20%E4%B8%8D%E6%95%A2%E5%90%AC%23) `199.2K 🔥` `NEW`
1. [唐艺昕说小考前有人想跑路了](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E8%AF%B4%E5%B0%8F%E8%80%83%E5%89%8D%E6%9C%89%E4%BA%BA%E6%83%B3%E8%B7%91%E8%B7%AF%E4%BA%86%23) `198.3K 🔥` `NEW`
1. [海南高温已影响荔枝香蕉生长 (High temperature in Hainan has affected the growth of lychees and bananas)](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%8D%97%E9%AB%98%E6%B8%A9%E5%B7%B2%E5%BD%B1%E5%93%8D%E8%8D%94%E6%9E%9D%E9%A6%99%E8%95%89%E7%94%9F%E9%95%BF%23) `198.0K 🔥` `NEW`
1. [冰湖重生开局0广](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E5%BC%80%E5%B1%800%E5%B9%BF%23) `197.8K 🔥` `NEW`
1. [赵今麦超短发大片](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E8%B6%85%E7%9F%AD%E5%8F%91%E5%A4%A7%E7%89%87%23) `197.6K 🔥` `NEW`
1. [曾沛慈一半一半转音](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E4%B8%80%E5%8D%8A%E4%B8%80%E5%8D%8A%E8%BD%AC%E9%9F%B3%23) `144.8K 🔥` `NEW`
1. [阚清子小考哭了](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%B0%8F%E8%80%83%E5%93%AD%E4%BA%86%23) `142.4K 🔥` `NEW`
1. [因二胎儿子随妻姓丈夫起诉离婚](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E4%BA%8C%E8%83%8E%E5%84%BF%E5%AD%90%E9%9A%8F%E5%A6%BB%E5%A7%93%E4%B8%88%E5%A4%AB%E8%B5%B7%E8%AF%89%E7%A6%BB%E5%A9%9A%23) `134.1K 🔥` `NEW`
1. [同事敲窗致女子心律失常被判赔偿](https://s.weibo.com/weibo?q=%23%E5%90%8C%E4%BA%8B%E6%95%B2%E7%AA%97%E8%87%B4%E5%A5%B3%E5%AD%90%E5%BF%83%E5%BE%8B%E5%A4%B1%E5%B8%B8%E8%A2%AB%E5%88%A4%E8%B5%94%E5%81%BF%23) `122.3K 🔥` `NEW`
1. [擦窗机器人卖爆了](https://s.weibo.com/weibo?q=%23%E6%93%A6%E7%AA%97%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%8D%96%E7%88%86%E4%BA%86%23) `121.8K 🔥` `NEW`
1. [徐轸轸发长文控诉前经纪人](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%BD%B8%E8%BD%B8%E5%8F%91%E9%95%BF%E6%96%87%E6%8E%A7%E8%AF%89%E5%89%8D%E7%BB%8F%E7%BA%AA%E4%BA%BA%23) `121.5K 🔥` `NEW`
1. [刘思维当爸爸了](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%80%9D%E7%BB%B4%E5%BD%93%E7%88%B8%E7%88%B8%E4%BA%86%23) `119.5K 🔥` `NEW`
1. [日本疯狂售卖军火 (Japan is selling arms like crazy)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%96%AF%E7%8B%82%E5%94%AE%E5%8D%96%E5%86%9B%E7%81%AB%23) `97.1K 🔥` `NEW`
1. [全球股市集体爆发](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E8%82%A1%E5%B8%82%E9%9B%86%E4%BD%93%E7%88%86%E5%8F%91%23) `96.1K 🔥` `NEW`
1. [A股港股飙涨原因](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%B8%AF%E8%82%A1%E9%A3%99%E6%B6%A8%E5%8E%9F%E5%9B%A0%23) `95.0K 🔥` `NEW`
1. [神器认主镜头是迪丽热巴想的](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E5%99%A8%E8%AE%A4%E4%B8%BB%E9%95%9C%E5%A4%B4%E6%98%AF%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%83%B3%E7%9A%84%23) `94.7K 🔥` `NEW`
1. [冰湖重生直播](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E7%9B%B4%E6%92%AD%23) `89.3K 🔥` `NEW`
1. [恋与深空 没有5200积分](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%20%E6%B2%A1%E6%9C%895200%E7%A7%AF%E5%88%86%23) `86.7K 🔥` `NEW`
1. [从2019聊到2026还没下单的客户](https://s.weibo.com/weibo?q=%23%E4%BB%8E2019%E8%81%8A%E5%88%B02026%E8%BF%98%E6%B2%A1%E4%B8%8B%E5%8D%95%E7%9A%84%E5%AE%A2%E6%88%B7%23) `84.9K 🔥` `NEW`
1. [超燃青春的合唱我要验人](https://s.weibo.com/weibo?q=%23%E8%B6%85%E7%87%83%E9%9D%92%E6%98%A5%E7%9A%84%E5%90%88%E5%94%B1%E6%88%91%E8%A6%81%E9%AA%8C%E4%BA%BA%23) `84.2K 🔥` `NEW`
1. [猫咖里为什么没有奶牛猫](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%92%96%E9%87%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E6%B2%A1%E6%9C%89%E5%A5%B6%E7%89%9B%E7%8C%AB%23) `83.9K 🔥` `NEW`
1. [雷霆赛季四杀湖人](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E9%9C%86%E8%B5%9B%E5%AD%A3%E5%9B%9B%E6%9D%80%E6%B9%96%E4%BA%BA%23) `78.0K 🔥` `NEW`
1. [浪姐一公小考 (Sister Lang's quiz with Mr. Lang)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%B8%80%E5%85%AC%E5%B0%8F%E8%80%83%23) `1.1M 🔥` `+1069%`
1. [粉色蓝莓](https://s.weibo.com/weibo?q=%23%E7%B2%89%E8%89%B2%E8%93%9D%E8%8E%93%23) `252.2K 🔥` `+107%`
1. [金子涵 再逼我就把所有的都说出来](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%20%E5%86%8D%E9%80%BC%E6%88%91%E5%B0%B1%E6%8A%8A%E6%89%80%E6%9C%89%E7%9A%84%E9%83%BD%E8%AF%B4%E5%87%BA%E6%9D%A5%23) `200.6K 🔥` `+51%`
1. [日本网红在印度被泼粪水致高烧入院](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%BD%91%E7%BA%A2%E5%9C%A8%E5%8D%B0%E5%BA%A6%E8%A2%AB%E6%B3%BC%E7%B2%AA%E6%B0%B4%E8%87%B4%E9%AB%98%E7%83%A7%E5%85%A5%E9%99%A2%23) `198.5K 🔥` `+75%`
1. [讨好型人格小时候](https://s.weibo.com/weibo?q=%23%E8%AE%A8%E5%A5%BD%E5%9E%8B%E4%BA%BA%E6%A0%BC%E5%B0%8F%E6%97%B6%E5%80%99%23) `171.6K 🔥` `+69%`
1. [认母期认成狗了](https://s.weibo.com/weibo?q=%23%E8%AE%A4%E6%AF%8D%E6%9C%9F%E8%AE%A4%E6%88%90%E7%8B%97%E4%BA%86%23) `165.3K 🔥` `+102%`
1. [王艳19岁儿子时尚感](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%89%B319%E5%B2%81%E5%84%BF%E5%AD%90%E6%97%B6%E5%B0%9A%E6%84%9F%23) `162.2K 🔥` `+27%`
1. [压塌20年樱花树女子认错愿赔偿](https://s.weibo.com/weibo?q=%23%E5%8E%8B%E5%A1%8C20%E5%B9%B4%E6%A8%B1%E8%8A%B1%E6%A0%91%E5%A5%B3%E5%AD%90%E8%AE%A4%E9%94%99%E6%84%BF%E8%B5%94%E5%81%BF%23) `142.5K 🔥` `+37%`
1. [从超3亿元退费看民生保障力度](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E8%B6%853%E4%BA%BF%E5%85%83%E9%80%80%E8%B4%B9%E7%9C%8B%E6%B0%91%E7%94%9F%E4%BF%9D%E9%9A%9C%E5%8A%9B%E5%BA%A6%23) `582.3K 🔥`
1. [郑丽文率中国国民党访问团拜谒中山陵](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%BD%E6%96%87%E7%8E%87%E4%B8%AD%E5%9B%BD%E5%9B%BD%E6%B0%91%E5%85%9A%E8%AE%BF%E9%97%AE%E5%9B%A2%E6%8B%9C%E8%B0%92%E4%B8%AD%E5%B1%B1%E9%99%B5%23) `123.0K 🔥`
1. [午睡悲伤综合征 (Nap Sad Syndrome)](https://s.weibo.com/weibo?q=%23%E5%8D%88%E7%9D%A1%E6%82%B2%E4%BC%A4%E7%BB%BC%E5%90%88%E5%BE%81%23) `239.3K 🔥` `-60%`
1. [徐艺洋回应黄子韬身体状况](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E5%9B%9E%E5%BA%94%E9%BB%84%E5%AD%90%E9%9F%AC%E8%BA%AB%E4%BD%93%E7%8A%B6%E5%86%B5%23) `200.2K 🔥` `-59%`
1. [店主回应因博主吃12个汉堡报警 (The owner responded to calling the police because the blogger ate 12 burgers)](https://s.weibo.com/weibo?q=%23%E5%BA%97%E4%B8%BB%E5%9B%9E%E5%BA%94%E5%9B%A0%E5%8D%9A%E4%B8%BB%E5%90%8312%E4%B8%AA%E6%B1%89%E5%A0%A1%E6%8A%A5%E8%AD%A6%23) `199.9K 🔥` `-83%`
1. [海湾多国遭袭](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%B9%BE%E5%A4%9A%E5%9B%BD%E9%81%AD%E8%A2%AD%23) `199.5K 🔥` `-70%`
1. [吴镇宇 王格格你是来炫耀的吗](https://s.weibo.com/weibo?q=%23%E5%90%B4%E9%95%87%E5%AE%87%20%E7%8E%8B%E6%A0%BC%E6%A0%BC%E4%BD%A0%E6%98%AF%E6%9D%A5%E7%82%AB%E8%80%80%E7%9A%84%E5%90%97%23) `198.9K 🔥` `-65%`
1. [伊朗接受停火提议](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8E%A5%E5%8F%97%E5%81%9C%E7%81%AB%E6%8F%90%E8%AE%AE%23) `197.2K 🔥` `-59%`
1. [倪虹洁1个人要赡养5个老人 (Ni Hongjie has to support 5 elderly people alone)](https://s.weibo.com/weibo?q=%23%E5%80%AA%E8%99%B9%E6%B4%811%E4%B8%AA%E4%BA%BA%E8%A6%81%E8%B5%A1%E5%85%BB5%E4%B8%AA%E8%80%81%E4%BA%BA%23) `150.8K 🔥` `-68%`
1. [伊美双方停火生效](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E7%BE%8E%E5%8F%8C%E6%96%B9%E5%81%9C%E7%81%AB%E7%94%9F%E6%95%88%23) `145.9K 🔥` `-33%`
1. [伊朗代表感谢中俄 (Iranian representative thanks China and Russia)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%BB%A3%E8%A1%A8%E6%84%9F%E8%B0%A2%E4%B8%AD%E4%BF%84%23) `95.6K 🔥` `-84%`
1. [papi酱 pa女郎](https://s.weibo.com/weibo?q=%23papi%E9%85%B1%20pa%E5%A5%B3%E9%83%8E%23) `86.6K 🔥` `-24%`

Updated at 2026-04-08 13:55:57

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
