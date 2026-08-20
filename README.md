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

1. [致孕妇误服液体医生被停职 (Doctor suspended after pregnant woman accidentally swallowed liquid)](https://s.weibo.com/weibo?q=%23%E8%87%B4%E5%AD%95%E5%A6%87%E8%AF%AF%E6%9C%8D%E6%B6%B2%E4%BD%93%E5%8C%BB%E7%94%9F%E8%A2%AB%E5%81%9C%E8%81%8C%23) `408.8K 🔥` `NEW`
1. [王安宇赵今麦脸颊吻](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E8%B5%B5%E4%BB%8A%E9%BA%A6%E8%84%B8%E9%A2%8A%E5%90%BB%23) `408.3K 🔥` `NEW`
1. [樊振东杜塞尔多夫城市金册留名](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%9D%9C%E5%A1%9E%E5%B0%94%E5%A4%9A%E5%A4%AB%E5%9F%8E%E5%B8%82%E9%87%91%E5%86%8C%E7%95%99%E5%90%8D%23) `401.7K 🔥` `NEW`
1. [医院能办结婚证了](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E8%83%BD%E5%8A%9E%E7%BB%93%E5%A9%9A%E8%AF%81%E4%BA%86%23) `399.9K 🔥` `NEW`
1. [Selina父亲力挺女儿](https://s.weibo.com/weibo?q=%23Selina%E7%88%B6%E4%BA%B2%E5%8A%9B%E6%8C%BA%E5%A5%B3%E5%84%BF%23) `396.4K 🔥` `NEW`
1. [檀健次给朱一龙让C位](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E7%BB%99%E6%9C%B1%E4%B8%80%E9%BE%99%E8%AE%A9C%E4%BD%8D%23) `251.0K 🔥` `NEW`
1. [陈伟霆进组被换角始末](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E8%BF%9B%E7%BB%84%E8%A2%AB%E6%8D%A2%E8%A7%92%E5%A7%8B%E6%9C%AB%23) `225.3K 🔥` `NEW`
1. [朱一龙喂檀健次吃菠萝油](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E5%96%82%E6%AA%80%E5%81%A5%E6%AC%A1%E5%90%83%E8%8F%A0%E8%90%9D%E6%B2%B9%23) `212.6K 🔥` `NEW`
1. [上海地铁 调价](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%9C%B0%E9%93%81%20%E8%B0%83%E4%BB%B7%23) `206.9K 🔥` `NEW`
1. [男女演员离婚后在同一剧组演戏](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%A5%B3%E6%BC%94%E5%91%98%E7%A6%BB%E5%A9%9A%E5%90%8E%E5%9C%A8%E5%90%8C%E4%B8%80%E5%89%A7%E7%BB%84%E6%BC%94%E6%88%8F%23) `202.3K 🔥` `NEW`
1. [女生吵架扔礼物内含手机金项链 (Girls quarreled and threw gifts including mobile phones and gold necklaces)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E5%90%B5%E6%9E%B6%E6%89%94%E7%A4%BC%E7%89%A9%E5%86%85%E5%90%AB%E6%89%8B%E6%9C%BA%E9%87%91%E9%A1%B9%E9%93%BE%23) `189.7K 🔥` `NEW`
1. [金晨孟佳美国合照](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%E5%AD%9F%E4%BD%B3%E7%BE%8E%E5%9B%BD%E5%90%88%E7%85%A7%23) `151.2K 🔥` `NEW`
1. [周深别太想薛之谦了](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E5%88%AB%E5%A4%AA%E6%83%B3%E8%96%9B%E4%B9%8B%E8%B0%A6%E4%BA%86%23) `149.8K 🔥` `NEW`
1. [王传君曹骏互飙上海话](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E6%9B%B9%E9%AA%8F%E4%BA%92%E9%A3%99%E4%B8%8A%E6%B5%B7%E8%AF%9D%23) `144.3K 🔥` `NEW`
1. [芒果夜 长沙](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E5%A4%9C%20%E9%95%BF%E6%B2%99%23) `113.9K 🔥` `NEW`
1. [日本网友家里摆满中国东西 (Japanese netizens’ homes are filled with Chinese things)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%BD%91%E5%8F%8B%E5%AE%B6%E9%87%8C%E6%91%86%E6%BB%A1%E4%B8%AD%E5%9B%BD%E4%B8%9C%E8%A5%BF%23) `1.1M 🔥` `+39%`
1. [樊振东正式亮相杜塞尔多夫](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%AD%A3%E5%BC%8F%E4%BA%AE%E7%9B%B8%E6%9D%9C%E5%A1%9E%E5%B0%94%E5%A4%9A%E5%A4%AB%23) `403.5K 🔥` `+41%`
1. [县域消费跑出加速度 (Consumption in counties accelerates)](https://s.weibo.com/weibo?q=%23%E5%8E%BF%E5%9F%9F%E6%B6%88%E8%B4%B9%E8%B7%91%E5%87%BA%E5%8A%A0%E9%80%9F%E5%BA%A6%23) `645.1K 🔥`
1. [埃安超级纯电Ray7正式亮相 (Aian super pure electric Ray7 officially unveiled)](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%AE%89%E8%B6%85%E7%BA%A7%E7%BA%AF%E7%94%B5Ray7%E6%AD%A3%E5%BC%8F%E4%BA%AE%E7%9B%B8%23) `641.1K 🔥`
1. [癌症疫苗 (cancer vaccine)](https://s.weibo.com/weibo?q=%23%E7%99%8C%E7%97%87%E7%96%AB%E8%8B%97%23) `639.2K 🔥`
1. [父女黄河大堤失踪车上录音曝光](https://s.weibo.com/weibo?q=%23%E7%88%B6%E5%A5%B3%E9%BB%84%E6%B2%B3%E5%A4%A7%E5%A0%A4%E5%A4%B1%E8%B8%AA%E8%BD%A6%E4%B8%8A%E5%BD%95%E9%9F%B3%E6%9B%9D%E5%85%89%23) `405.6K 🔥`
1. [沈腾又忘记扶杨幂了 (Shen Teng forgot to support Yang Mi again)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E5%8F%88%E5%BF%98%E8%AE%B0%E6%89%B6%E6%9D%A8%E5%B9%82%E4%BA%86%23) `396.5K 🔥`
1. [日本旅游业凉了 (Japan’s tourism industry is in decline)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%97%85%E6%B8%B8%E4%B8%9A%E5%87%89%E4%BA%86%23) `792.8K 🔥` `-27%`
1. [小沈阳发言时孙楠表情](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E5%8F%91%E8%A8%80%E6%97%B6%E5%AD%99%E6%A5%A0%E8%A1%A8%E6%83%85%23) `424.9K 🔥` `-23%`
1. [月薪4000存款20w (Monthly salary 4000, deposit 20w)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA4000%E5%AD%98%E6%AC%BE20w%23) `290.7K 🔥` `-29%`
1. [张凌赫商务资源现状](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%95%86%E5%8A%A1%E8%B5%84%E6%BA%90%E7%8E%B0%E7%8A%B6%23) `255.8K 🔥` `-21%`
1. [孕妇误服甲醇前曾反复向医生确认 (Pregnant women repeatedly checked with doctors before taking methanol by mistake)](https://s.weibo.com/weibo?q=%23%E5%AD%95%E5%A6%87%E8%AF%AF%E6%9C%8D%E7%94%B2%E9%86%87%E5%89%8D%E6%9B%BE%E5%8F%8D%E5%A4%8D%E5%90%91%E5%8C%BB%E7%94%9F%E7%A1%AE%E8%AE%A4%23) `229.8K 🔥` `-29%`
1. [迪丽热巴顶光都美成这样](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%A1%B6%E5%85%89%E9%83%BD%E7%BE%8E%E6%88%90%E8%BF%99%E6%A0%B7%23) `227.9K 🔥` `-31%`
1. [华为PuraXView (HuaweiPuraXView)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAPuraXView%23) `219.7K 🔥` `-33%`
1. [1.2亿农村老人谁来为他们发声 (Who will speak for the 120 million rural elderly?)](https://s.weibo.com/weibo?q=%231.2%E4%BA%BF%E5%86%9C%E6%9D%91%E8%80%81%E4%BA%BA%E8%B0%81%E6%9D%A5%E4%B8%BA%E4%BB%96%E4%BB%AC%E5%8F%91%E5%A3%B0%23) `213.6K 🔥` `-33%`
1. [美甲贴 性早熟 (Nail stickers Precocious puberty)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%94%B2%E8%B4%B4%20%E6%80%A7%E6%97%A9%E7%86%9F%23) `208.5K 🔥` `-34%`
1. [日本女高中生 薅老头 (Japanese high school girl Old Man)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A5%B3%E9%AB%98%E4%B8%AD%E7%94%9F%20%E8%96%85%E8%80%81%E5%A4%B4%23) `198.6K 🔥` `-36%`
1. [婆婆背后蛐蛐儿媳被孙子回怼 (The mother-in-law cuckolds the daughter-in-law behind her back, but her grandson retaliates)](https://s.weibo.com/weibo?q=%23%E5%A9%86%E5%A9%86%E8%83%8C%E5%90%8E%E8%9B%90%E8%9B%90%E5%84%BF%E5%AA%B3%E8%A2%AB%E5%AD%99%E5%AD%90%E5%9B%9E%E6%80%BC%23) `180.6K 🔥` `-40%`
1. [彭小苒既要爱情的糖也要事业的光](https://s.weibo.com/weibo?q=%23%E5%BD%AD%E5%B0%8F%E8%8B%92%E6%97%A2%E8%A6%81%E7%88%B1%E6%83%85%E7%9A%84%E7%B3%96%E4%B9%9F%E8%A6%81%E4%BA%8B%E4%B8%9A%E7%9A%84%E5%85%89%23) `176.4K 🔥` `-47%`
1. [峰哥把机器人踹瘫痪了](https://s.weibo.com/weibo?q=%23%E5%B3%B0%E5%93%A5%E6%8A%8A%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%B8%B9%E7%98%AB%E7%97%AA%E4%BA%86%23) `168.5K 🔥` `-47%`
1. [合肥外卖店 我上网就是为了看这些](https://s.weibo.com/weibo?q=%23%E5%90%88%E8%82%A5%E5%A4%96%E5%8D%96%E5%BA%97%20%E6%88%91%E4%B8%8A%E7%BD%91%E5%B0%B1%E6%98%AF%E4%B8%BA%E4%BA%86%E7%9C%8B%E8%BF%99%E4%BA%9B%23) `161.7K 🔥` `-66%`
1. [迪丽热巴这个镜子放得好妙](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%99%E4%B8%AA%E9%95%9C%E5%AD%90%E6%94%BE%E5%BE%97%E5%A5%BD%E5%A6%99%23) `161.5K 🔥` `-48%`
1. [金龟子60岁了](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%BE%9F%E5%AD%9060%E5%B2%81%E4%BA%86%23) `158.0K 🔥` `-47%`
1. [Burdol单杀Bin](https://s.weibo.com/weibo?q=%23Burdol%E5%8D%95%E6%9D%80Bin%23) `155.3K 🔥` `-69%`
1. [声生不息 马嘉祺 (The sound is endless Ma Jiaqi)](https://s.weibo.com/weibo?q=%23%E5%A3%B0%E7%94%9F%E4%B8%8D%E6%81%AF%20%E9%A9%AC%E5%98%89%E7%A5%BA%23) `155.3K 🔥` `-50%`
1. [SM看了花开锦绣都觉得自己仁慈](https://s.weibo.com/weibo?q=%23SM%E7%9C%8B%E4%BA%86%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%E9%83%BD%E8%A7%89%E5%BE%97%E8%87%AA%E5%B7%B1%E4%BB%81%E6%85%88%23) `154.3K 🔥` `-50%`
1. [泡泡玛特上半年净利润50.4亿](https://s.weibo.com/weibo?q=%23%E6%B3%A1%E6%B3%A1%E7%8E%9B%E7%89%B9%E4%B8%8A%E5%8D%8A%E5%B9%B4%E5%87%80%E5%88%A9%E6%B6%A650.4%E4%BA%BF%23) `153.9K 🔥` `-50%`
1. [暑假和朋友自驾游有多爽 (How fun is it to travel by car with friends during summer vacation?)](https://s.weibo.com/weibo?q=%23%E6%9A%91%E5%81%87%E5%92%8C%E6%9C%8B%E5%8F%8B%E8%87%AA%E9%A9%BE%E6%B8%B8%E6%9C%89%E5%A4%9A%E7%88%BD%23) `151.3K 🔥` `-49%`
1. [王嘉尔我年纪大了不要冲动](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E6%88%91%E5%B9%B4%E7%BA%AA%E5%A4%A7%E4%BA%86%E4%B8%8D%E8%A6%81%E5%86%B2%E5%8A%A8%23) `150.2K 🔥` `-48%`
1. [男子辱骂女游客为何10多天后才立案 (Why did it take more than 10 days to file a case against a man who insulted a female tourist?)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%BE%B1%E9%AA%82%E5%A5%B3%E6%B8%B8%E5%AE%A2%E4%B8%BA%E4%BD%9510%E5%A4%9A%E5%A4%A9%E5%90%8E%E6%89%8D%E7%AB%8B%E6%A1%88%23) `149.8K 🔥` `-51%`
1. [华晨宇首创全域场景演唱会](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E9%A6%96%E5%88%9B%E5%85%A8%E5%9F%9F%E5%9C%BA%E6%99%AF%E6%BC%94%E5%94%B1%E4%BC%9A%23) `149.8K 🔥` `-54%`
1. [武安车管所被曝公电私充](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%AE%89%E8%BD%A6%E7%AE%A1%E6%89%80%E8%A2%AB%E6%9B%9D%E5%85%AC%E7%94%B5%E7%A7%81%E5%85%85%23) `144.7K 🔥` `-52%`
1. [成毅直播](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E7%9B%B4%E6%92%AD%23) `143.2K 🔥` `-53%`
1. [摊主住院100多天生意没断过](https://s.weibo.com/weibo?q=%23%E6%91%8A%E4%B8%BB%E4%BD%8F%E9%99%A2100%E5%A4%9A%E5%A4%A9%E7%94%9F%E6%84%8F%E6%B2%A1%E6%96%AD%E8%BF%87%23) `116.6K 🔥` `-64%`
1. [一人十天手搓90分钟AI电影](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BA%BA%E5%8D%81%E5%A4%A9%E6%89%8B%E6%90%9390%E5%88%86%E9%92%9FAI%E7%94%B5%E5%BD%B1%23) `111.1K 🔥` `-61%`

Updated at 2026-08-20 22:02:51

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
