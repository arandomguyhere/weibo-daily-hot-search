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

1. [县域消费跑出加速度 (Consumption in counties accelerates)](https://s.weibo.com/weibo?q=%23%E5%8E%BF%E5%9F%9F%E6%B6%88%E8%B4%B9%E8%B7%91%E5%87%BA%E5%8A%A0%E9%80%9F%E5%BA%A6%23) `620.8K 🔥` `NEW`
1. [小沈阳发言时孙楠表情](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E5%8F%91%E8%A8%80%E6%97%B6%E5%AD%99%E6%A5%A0%E8%A1%A8%E6%83%85%23) `552.2K 🔥` `NEW`
1. [Burdol单杀Bin](https://s.weibo.com/weibo?q=%23Burdol%E5%8D%95%E6%9D%80Bin%23) `503.7K 🔥` `NEW`
1. [LGD对战BLG](https://s.weibo.com/weibo?q=%23LGD%E5%AF%B9%E6%88%98BLG%23) `448.0K 🔥` `NEW`
1. [摊主住院100多天生意没断过](https://s.weibo.com/weibo?q=%23%E6%91%8A%E4%B8%BB%E4%BD%8F%E9%99%A2100%E5%A4%9A%E5%A4%A9%E7%94%9F%E6%84%8F%E6%B2%A1%E6%96%AD%E8%BF%87%23) `326.8K 🔥` `NEW`
1. [日本女高中生 薅老头](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A5%B3%E9%AB%98%E4%B8%AD%E7%94%9F%20%E8%96%85%E8%80%81%E5%A4%B4%23) `312.1K 🔥` `NEW`
1. [迪丽热巴这个镜子放得好妙](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%99%E4%B8%AA%E9%95%9C%E5%AD%90%E6%94%BE%E5%BE%97%E5%A5%BD%E5%A6%99%23) `311.4K 🔥` `NEW`
1. [SM看了花开锦绣都觉得自己仁慈](https://s.weibo.com/weibo?q=%23SM%E7%9C%8B%E4%BA%86%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%E9%83%BD%E8%A7%89%E5%BE%97%E8%87%AA%E5%B7%B1%E4%BB%81%E6%85%88%23) `306.1K 🔥` `NEW`
1. [成毅直播](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E7%9B%B4%E6%92%AD%23) `303.3K 🔥` `NEW`
1. [武安车管所被曝公电私充](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%AE%89%E8%BD%A6%E7%AE%A1%E6%89%80%E8%A2%AB%E6%9B%9D%E5%85%AC%E7%94%B5%E7%A7%81%E5%85%85%23) `299.5K 🔥` `NEW`
1. [暑假和朋友自驾游有多爽 (How fun is it to travel by car with friends during summer vacation?)](https://s.weibo.com/weibo?q=%23%E6%9A%91%E5%81%87%E5%92%8C%E6%9C%8B%E5%8F%8B%E8%87%AA%E9%A9%BE%E6%B8%B8%E6%9C%89%E5%A4%9A%E7%88%BD%23) `296.6K 🔥` `NEW`
1. [金龟子60岁了](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%BE%9F%E5%AD%9060%E5%B2%81%E4%BA%86%23) `296.5K 🔥` `NEW`
1. [妇炎洁回应私处护理液添加云母](https://s.weibo.com/weibo?q=%23%E5%A6%87%E7%82%8E%E6%B4%81%E5%9B%9E%E5%BA%94%E7%A7%81%E5%A4%84%E6%8A%A4%E7%90%86%E6%B6%B2%E6%B7%BB%E5%8A%A0%E4%BA%91%E6%AF%8D%23) `293.5K 🔥` `NEW`
1. [王嘉尔我年纪大了不要冲动](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E6%88%91%E5%B9%B4%E7%BA%AA%E5%A4%A7%E4%BA%86%E4%B8%8D%E8%A6%81%E5%86%B2%E5%8A%A8%23) `290.4K 🔥` `NEW`
1. [樊振东正式亮相杜塞尔多夫](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%AD%A3%E5%BC%8F%E4%BA%AE%E7%9B%B8%E6%9D%9C%E5%A1%9E%E5%B0%94%E5%A4%9A%E5%A4%AB%23) `286.9K 🔥` `NEW`
1. [杨玉成扮演者回应丁禹兮直播迟到](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%8E%89%E6%88%90%E6%89%AE%E6%BC%94%E8%80%85%E5%9B%9E%E5%BA%94%E4%B8%81%E7%A6%B9%E5%85%AE%E7%9B%B4%E6%92%AD%E8%BF%9F%E5%88%B0%23) `280.6K 🔥` `NEW`
1. [XLG晋级上海全球冠军赛](https://s.weibo.com/weibo?q=%23XLG%E6%99%8B%E7%BA%A7%E4%B8%8A%E6%B5%B7%E5%85%A8%E7%90%83%E5%86%A0%E5%86%9B%E8%B5%9B%23) `278.5K 🔥` `NEW`
1. [父女黄河大堤失踪车上录音曝光](https://s.weibo.com/weibo?q=%23%E7%88%B6%E5%A5%B3%E9%BB%84%E6%B2%B3%E5%A4%A7%E5%A0%A4%E5%A4%B1%E8%B8%AA%E8%BD%A6%E4%B8%8A%E5%BD%95%E9%9F%B3%E6%9B%9D%E5%85%89%23) `503.0K 🔥` `+249%`
1. [张凌赫商务资源现状](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%95%86%E5%8A%A1%E8%B5%84%E6%BA%90%E7%8E%B0%E7%8A%B6%23) `322.6K 🔥` `+118%`
1. [1.2亿农村老人谁来为他们发声 (Who will speak for the 120 million rural elderly?)](https://s.weibo.com/weibo?q=%231.2%E4%BA%BF%E5%86%9C%E6%9D%91%E8%80%81%E4%BA%BA%E8%B0%81%E6%9D%A5%E4%B8%BA%E4%BB%96%E4%BB%AC%E5%8F%91%E5%A3%B0%23) `320.0K 🔥` `+67%`
1. [全智贤未公开婚纱照 (Jun Ji-hyun's unpublished wedding photos)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%99%BA%E8%B4%A4%E6%9C%AA%E5%85%AC%E5%BC%80%E5%A9%9A%E7%BA%B1%E7%85%A7%23) `318.9K 🔥` `+63%`
1. [美甲贴 性早熟 (Nail stickers Precocious puberty)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%94%B2%E8%B4%B4%20%E6%80%A7%E6%97%A9%E7%86%9F%23) `316.9K 🔥` `+56%`
1. [泡泡玛特上半年净利润50.4亿](https://s.weibo.com/weibo?q=%23%E6%B3%A1%E6%B3%A1%E7%8E%9B%E7%89%B9%E4%B8%8A%E5%8D%8A%E5%B9%B4%E5%87%80%E5%88%A9%E6%B6%A650.4%E4%BA%BF%23) `308.9K 🔥` `+47%`
1. [声生不息 马嘉祺 (The sound is endless Ma Jiaqi)](https://s.weibo.com/weibo?q=%23%E5%A3%B0%E7%94%9F%E4%B8%8D%E6%81%AF%20%E9%A9%AC%E5%98%89%E7%A5%BA%23) `307.7K 🔥` `+64%`
1. [男子辱骂女游客为何10多天后才立案](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%BE%B1%E9%AA%82%E5%A5%B3%E6%B8%B8%E5%AE%A2%E4%B8%BA%E4%BD%9510%E5%A4%9A%E5%A4%A9%E5%90%8E%E6%89%8D%E7%AB%8B%E6%A1%88%23) `305.0K 🔥` `+35%`
1. [婆婆背后蛐蛐儿媳被孙子回怼 (The mother-in-law cuckolds the daughter-in-law behind her back, but her grandson retaliates)](https://s.weibo.com/weibo?q=%23%E5%A9%86%E5%A9%86%E8%83%8C%E5%90%8E%E8%9B%90%E8%9B%90%E5%84%BF%E5%AA%B3%E8%A2%AB%E5%AD%99%E5%AD%90%E5%9B%9E%E6%80%BC%23) `301.2K 🔥` `+79%`
1. [官俊臣去英伟达干嘛](https://s.weibo.com/weibo?q=%23%E5%AE%98%E4%BF%8A%E8%87%A3%E5%8E%BB%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%B9%B2%E5%98%9B%23) `299.8K 🔥` `+64%`
1. [赵今麦一念江南plog](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97plog%23) `291.0K 🔥` `+101%`
1. [一人十天手搓90分钟AI电影](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BA%BA%E5%8D%81%E5%A4%A9%E6%89%8B%E6%90%9390%E5%88%86%E9%92%9FAI%E7%94%B5%E5%BD%B1%23) `287.5K 🔥` `+139%`
1. [FPX.ZQ对战WBG](https://s.weibo.com/weibo?q=%23FPX.ZQ%E5%AF%B9%E6%88%98WBG%23) `285.5K 🔥` `+154%`
1. [这和换头有什么区别啊 (What's the difference between this and changing heads?)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%92%8C%E6%8D%A2%E5%A4%B4%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB%E5%95%8A%23) `284.3K 🔥` `+121%`
1. [李响8年3次求婚孙骁骁未果 (Li Xiang proposed to Sun Xiaoxiao three times in 8 years but failed)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%93%8D8%E5%B9%B43%E6%AC%A1%E6%B1%82%E5%A9%9A%E5%AD%99%E9%AA%81%E9%AA%81%E6%9C%AA%E6%9E%9C%23) `282.0K 🔥` `+34%`
1. [南派三叔力保陈伟霆出演九门](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%B4%BE%E4%B8%89%E5%8F%94%E5%8A%9B%E4%BF%9D%E9%99%88%E4%BC%9F%E9%9C%86%E5%87%BA%E6%BC%94%E4%B9%9D%E9%97%A8%23) `277.3K 🔥` `+27%`
1. [戚薇吊带绿裙](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%87%E5%90%8A%E5%B8%A6%E7%BB%BF%E8%A3%99%23) `275.9K 🔥` `+200%`
1. [日本旅游业凉了 (Japan’s tourism industry is in decline)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%97%85%E6%B8%B8%E4%B8%9A%E5%87%89%E4%BA%86%23) `1.1M 🔥`
1. [埃安超级纯电Ray7正式亮相 (Aian super pure electric Ray7 officially unveiled)](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%AE%89%E8%B6%85%E7%BA%A7%E7%BA%AF%E7%94%B5Ray7%E6%AD%A3%E5%BC%8F%E4%BA%AE%E7%9B%B8%23) `602.4K 🔥`
1. [彭小苒既要爱情的糖也要事业的光](https://s.weibo.com/weibo?q=%23%E5%BD%AD%E5%B0%8F%E8%8B%92%E6%97%A2%E8%A6%81%E7%88%B1%E6%83%85%E7%9A%84%E7%B3%96%E4%B9%9F%E8%A6%81%E4%BA%8B%E4%B8%9A%E7%9A%84%E5%85%89%23) `329.9K 🔥`
1. [迪丽热巴顶光都美成这样](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%A1%B6%E5%85%89%E9%83%BD%E7%BE%8E%E6%88%90%E8%BF%99%E6%A0%B7%23) `329.7K 🔥`
1. [孕妇误服甲醇前曾反复向医生确认 (Pregnant women repeatedly checked with doctors before taking methanol by mistake)](https://s.weibo.com/weibo?q=%23%E5%AD%95%E5%A6%87%E8%AF%AF%E6%9C%8D%E7%94%B2%E9%86%87%E5%89%8D%E6%9B%BE%E5%8F%8D%E5%A4%8D%E5%90%91%E5%8C%BB%E7%94%9F%E7%A1%AE%E8%AE%A4%23) `322.0K 🔥`
1. [日本网友家里摆满中国东西 (Japanese netizens’ homes are filled with Chinese things)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%BD%91%E5%8F%8B%E5%AE%B6%E9%87%8C%E6%91%86%E6%BB%A1%E4%B8%AD%E5%9B%BD%E4%B8%9C%E8%A5%BF%23) `796.8K 🔥` `-24%`
1. [癌症疫苗 (cancer vaccine)](https://s.weibo.com/weibo?q=%23%E7%99%8C%E7%97%87%E7%96%AB%E8%8B%97%23) `593.3K 🔥` `-47%`
1. [丁禹兮檀健次剧宣直播都迟到](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E6%AA%80%E5%81%A5%E6%AC%A1%E5%89%A7%E5%AE%A3%E7%9B%B4%E6%92%AD%E9%83%BD%E8%BF%9F%E5%88%B0%23) `486.5K 🔥` `-52%`
1. [合肥外卖店 我上网就是为了看这些](https://s.weibo.com/weibo?q=%23%E5%90%88%E8%82%A5%E5%A4%96%E5%8D%96%E5%BA%97%20%E6%88%91%E4%B8%8A%E7%BD%91%E5%B0%B1%E6%98%AF%E4%B8%BA%E4%BA%86%E7%9C%8B%E8%BF%99%E4%BA%9B%23) `472.0K 🔥` `-57%`
1. [沈腾又忘记扶杨幂了 (Shen Teng forgot to support Yang Mi again)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E5%8F%88%E5%BF%98%E8%AE%B0%E6%89%B6%E6%9D%A8%E5%B9%82%E4%BA%86%23) `433.3K 🔥` `-56%`
1. [疑似缅北电诈园区图片曝光 (Pictures of suspected telecom fraud park in northern Myanmar exposed)](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E7%BC%85%E5%8C%97%E7%94%B5%E8%AF%88%E5%9B%AD%E5%8C%BA%E5%9B%BE%E7%89%87%E6%9B%9D%E5%85%89%23) `420.8K 🔥` `-63%`
1. [月薪4000存款20w (Monthly salary 4000, deposit 20w)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA4000%E5%AD%98%E6%AC%BE20w%23) `408.7K 🔥` `-26%`
1. [华为PuraXView (HuaweiPuraXView)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAPuraXView%23) `327.0K 🔥` `-69%`
1. [华晨宇首创全域场景演唱会](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E9%A6%96%E5%88%9B%E5%85%A8%E5%9F%9F%E5%9C%BA%E6%99%AF%E6%BC%94%E5%94%B1%E4%BC%9A%23) `324.2K 🔥` `-71%`
1. [峰哥把机器人踹瘫痪了](https://s.weibo.com/weibo?q=%23%E5%B3%B0%E5%93%A5%E6%8A%8A%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%B8%B9%E7%98%AB%E7%97%AA%E4%BA%86%23) `315.3K 🔥` `-37%`
1. [小米扫拖机器人损坏百万家具 (Xiaomi sweeping and mopping robot damages millions of furniture)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%89%AB%E6%8B%96%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%8D%9F%E5%9D%8F%E7%99%BE%E4%B8%87%E5%AE%B6%E5%85%B7%23) `314.6K 🔥` `-72%`

Updated at 2026-08-20 21:15:40

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
