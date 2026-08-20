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

1. [医院能办结婚证了 (The hospital can issue a marriage certificate)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E8%83%BD%E5%8A%9E%E7%BB%93%E5%A9%9A%E8%AF%81%E4%BA%86%23) `845.4K 🔥` `NEW`
1. [致孕妇误服液体医生被停职](https://s.weibo.com/weibo?q=%23%E8%87%B4%E5%AD%95%E5%A6%87%E8%AF%AF%E6%9C%8D%E6%B6%B2%E4%BD%93%E5%8C%BB%E7%94%9F%E8%A2%AB%E5%81%9C%E8%81%8C%23) `625.8K 🔥` `NEW`
1. [中国铁路加速驶入AI赋能新阶段](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%93%81%E8%B7%AF%E5%8A%A0%E9%80%9F%E9%A9%B6%E5%85%A5AI%E8%B5%8B%E8%83%BD%E6%96%B0%E9%98%B6%E6%AE%B5%23) `483.7K 🔥` `NEW`
1. [美团会员联动原神送至冬好礼](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%A2%E4%BC%9A%E5%91%98%E8%81%94%E5%8A%A8%E5%8E%9F%E7%A5%9E%E9%80%81%E8%87%B3%E5%86%AC%E5%A5%BD%E7%A4%BC%23) `483.5K 🔥` `NEW`
1. [398一杯的芋圆葡萄](https://s.weibo.com/weibo?q=%23398%E4%B8%80%E6%9D%AF%E7%9A%84%E8%8A%8B%E5%9C%86%E8%91%A1%E8%90%84%23) `483.2K 🔥` `NEW`
1. [癌症疫苗](https://s.weibo.com/weibo?q=%23%E7%99%8C%E7%97%87%E7%96%AB%E8%8B%97%23) `481.5K 🔥` `NEW`
1. [肿瘤疫苗迎百年破局](https://s.weibo.com/weibo?q=%23%E8%82%BF%E7%98%A4%E7%96%AB%E8%8B%97%E8%BF%8E%E7%99%BE%E5%B9%B4%E7%A0%B4%E5%B1%80%23) `336.5K 🔥` `NEW`
1. [刘宇宁周柯宇没发开推四小作文](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E5%91%A8%E6%9F%AF%E5%AE%87%E6%B2%A1%E5%8F%91%E5%BC%80%E6%8E%A8%E5%9B%9B%E5%B0%8F%E4%BD%9C%E6%96%87%23) `334.3K 🔥` `NEW`
1. [安踏徐阳 迁居美国](https://s.weibo.com/weibo?q=%23%E5%AE%89%E8%B8%8F%E5%BE%90%E9%98%B3%20%E8%BF%81%E5%B1%85%E7%BE%8E%E5%9B%BD%23) `320.4K 🔥` `NEW`
1. [朱一龙喂檀健次吃菠萝油](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E5%96%82%E6%AA%80%E5%81%A5%E6%AC%A1%E5%90%83%E8%8F%A0%E8%90%9D%E6%B2%B9%23) `317.5K 🔥` `NEW`
1. [女子用公用瑜伽垫后感染HPV (Woman contracted HPV after using public yoga mat)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%A8%E5%85%AC%E7%94%A8%E7%91%9C%E4%BC%BD%E5%9E%AB%E5%90%8E%E6%84%9F%E6%9F%93HPV%23) `307.2K 🔥` `NEW`
1. [惠英红因姐姐残疾未嫁入豪门](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%E5%9B%A0%E5%A7%90%E5%A7%90%E6%AE%8B%E7%96%BE%E6%9C%AA%E5%AB%81%E5%85%A5%E8%B1%AA%E9%97%A8%23) `296.2K 🔥` `NEW`
1. [网友细扒Bin脸部变化细节](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E7%BB%86%E6%89%92Bin%E8%84%B8%E9%83%A8%E5%8F%98%E5%8C%96%E7%BB%86%E8%8A%82%23) `291.1K 🔥` `NEW`
1. [Selina父亲力挺女儿](https://s.weibo.com/weibo?q=%23Selina%E7%88%B6%E4%BA%B2%E5%8A%9B%E6%8C%BA%E5%A5%B3%E5%84%BF%23) `274.9K 🔥` `NEW`
1. [沈腾又忘记扶杨幂了](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E5%8F%88%E5%BF%98%E8%AE%B0%E6%89%B6%E6%9D%A8%E5%B9%82%E4%BA%86%23) `274.2K 🔥` `NEW`
1. [日本旅游业凉了](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%97%85%E6%B8%B8%E4%B8%9A%E5%87%89%E4%BA%86%23) `245.4K 🔥` `NEW`
1. [严浩翔发了49张图](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%8F%91%E4%BA%8649%E5%BC%A0%E5%9B%BE%23) `227.7K 🔥` `NEW`
1. [小沈阳发言时孙楠表情](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E5%8F%91%E8%A8%80%E6%97%B6%E5%AD%99%E6%A5%A0%E8%A1%A8%E6%83%85%23) `227.7K 🔥` `NEW`
1. [父女黄河大堤失踪车上录音曝光](https://s.weibo.com/weibo?q=%23%E7%88%B6%E5%A5%B3%E9%BB%84%E6%B2%B3%E5%A4%A7%E5%A0%A4%E5%A4%B1%E8%B8%AA%E8%BD%A6%E4%B8%8A%E5%BD%95%E9%9F%B3%E6%9B%9D%E5%85%89%23) `227.7K 🔥` `NEW`
1. [惠英红刚复出时被发型师羞辱](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%E5%88%9A%E5%A4%8D%E5%87%BA%E6%97%B6%E8%A2%AB%E5%8F%91%E5%9E%8B%E5%B8%88%E7%BE%9E%E8%BE%B1%23) `227.7K 🔥` `NEW`
1. [家属称遭前夫杀害女子曾养活全家 (Family members say the woman killed by her ex-husband once supported the family)](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E5%B1%9E%E7%A7%B0%E9%81%AD%E5%89%8D%E5%A4%AB%E6%9D%80%E5%AE%B3%E5%A5%B3%E5%AD%90%E6%9B%BE%E5%85%BB%E6%B4%BB%E5%85%A8%E5%AE%B6%23) `227.7K 🔥` `NEW`
1. [美27岁女子让多人性侵自己2个女儿](https://s.weibo.com/weibo?q=%23%E7%BE%8E27%E5%B2%81%E5%A5%B3%E5%AD%90%E8%AE%A9%E5%A4%9A%E4%BA%BA%E6%80%A7%E4%BE%B5%E8%87%AA%E5%B7%B12%E4%B8%AA%E5%A5%B3%E5%84%BF%23) `227.7K 🔥` `NEW`
1. [1.2亿农村老人谁来为他们发声](https://s.weibo.com/weibo?q=%231.2%E4%BA%BF%E5%86%9C%E6%9D%91%E8%80%81%E4%BA%BA%E8%B0%81%E6%9D%A5%E4%B8%BA%E4%BB%96%E4%BB%AC%E5%8F%91%E5%A3%B0%23) `227.6K 🔥` `NEW`
1. [王安宇赵今麦脸颊吻](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E8%B5%B5%E4%BB%8A%E9%BA%A6%E8%84%B8%E9%A2%8A%E5%90%BB%23) `227.6K 🔥` `NEW`
1. [女子发现孩子没出地铁强行往车厢挤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%8F%91%E7%8E%B0%E5%AD%A9%E5%AD%90%E6%B2%A1%E5%87%BA%E5%9C%B0%E9%93%81%E5%BC%BA%E8%A1%8C%E5%BE%80%E8%BD%A6%E5%8E%A2%E6%8C%A4%23) `227.6K 🔥` `NEW`
1. [金晨孟佳美国合照](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%E5%AD%9F%E4%BD%B3%E7%BE%8E%E5%9B%BD%E5%90%88%E7%85%A7%23) `227.6K 🔥` `NEW`
1. [宝妈坚持每天推婴儿车晨跑两小时](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E5%A6%88%E5%9D%9A%E6%8C%81%E6%AF%8F%E5%A4%A9%E6%8E%A8%E5%A9%B4%E5%84%BF%E8%BD%A6%E6%99%A8%E8%B7%91%E4%B8%A4%E5%B0%8F%E6%97%B6%23) `227.6K 🔥` `NEW`
1. [日本女高中生 薅老头](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A5%B3%E9%AB%98%E4%B8%AD%E7%94%9F%20%E8%96%85%E8%80%81%E5%A4%B4%23) `227.6K 🔥` `NEW`
1. [张凌赫商务资源现状](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%95%86%E5%8A%A1%E8%B5%84%E6%BA%90%E7%8E%B0%E7%8A%B6%23) `227.5K 🔥` `NEW`
1. [银河左岸音乐节阵容](https://s.weibo.com/weibo?q=%23%E9%93%B6%E6%B2%B3%E5%B7%A6%E5%B2%B8%E9%9F%B3%E4%B9%90%E8%8A%82%E9%98%B5%E5%AE%B9%23) `227.5K 🔥` `NEW`
1. [日本网友家里摆满中国东西 (Japanese netizens’ homes are filled with Chinese things)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%BD%91%E5%8F%8B%E5%AE%B6%E9%87%8C%E6%91%86%E6%BB%A1%E4%B8%AD%E5%9B%BD%E4%B8%9C%E8%A5%BF%23) `227.5K 🔥` `NEW`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `227.5K 🔥` `NEW`
1. [杨幂开场走成秀场](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%BC%80%E5%9C%BA%E8%B5%B0%E6%88%90%E7%A7%80%E5%9C%BA%23) `227.5K 🔥` `NEW`
1. [华晨宇彻底打破演唱会观演边界](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E5%BD%BB%E5%BA%95%E6%89%93%E7%A0%B4%E6%BC%94%E5%94%B1%E4%BC%9A%E8%A7%82%E6%BC%94%E8%BE%B9%E7%95%8C%23) `227.4K 🔥` `NEW`
1. [李在明顺水推舟回应特朗普撤军](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%9C%A8%E6%98%8E%E9%A1%BA%E6%B0%B4%E6%8E%A8%E8%88%9F%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE%E6%92%A4%E5%86%9B%23) `227.4K 🔥` `NEW`
1. [黄灿灿回应是否升咖](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%9B%9E%E5%BA%94%E6%98%AF%E5%90%A6%E5%8D%87%E5%92%96%23) `227.4K 🔥` `NEW`
1. [陈伟霆进组被换角始末](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E8%BF%9B%E7%BB%84%E8%A2%AB%E6%8D%A2%E8%A7%92%E5%A7%8B%E6%9C%AB%23) `227.4K 🔥` `NEW`
1. [华为PuraXView](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAPuraXView%23) `227.4K 🔥` `NEW`
1. [王传君曹骏互飙上海话](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E6%9B%B9%E9%AA%8F%E4%BA%92%E9%A3%99%E4%B8%8A%E6%B5%B7%E8%AF%9D%23) `227.3K 🔥` `NEW`
1. [Angelababy羌寨上班vlog](https://s.weibo.com/weibo?q=%23Angelababy%E7%BE%8C%E5%AF%A8%E4%B8%8A%E7%8F%ADvlog%23) `227.3K 🔥` `NEW`
1. [Bin回归首秀失利 (Bin failed in his return debut)](https://s.weibo.com/weibo?q=%23Bin%E5%9B%9E%E5%BD%92%E9%A6%96%E7%A7%80%E5%A4%B1%E5%88%A9%23) `227.3K 🔥` `NEW`
1. [花开锦绣](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%23) `227.3K 🔥` `NEW`
1. [月薪4000存款20w](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA4000%E5%AD%98%E6%AC%BE20w%23) `227.3K 🔥` `NEW`
1. [金龟子60岁了](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%BE%9F%E5%AD%9060%E5%B2%81%E4%BA%86%23) `227.3K 🔥` `NEW`
1. [樊振东正式亮相杜塞尔多夫](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%AD%A3%E5%BC%8F%E4%BA%AE%E7%9B%B8%E6%9D%9C%E5%A1%9E%E5%B0%94%E5%A4%9A%E5%A4%AB%23) `227.2K 🔥` `NEW`
1. [檀健次给朱一龙让C位](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E7%BB%99%E6%9C%B1%E4%B8%80%E9%BE%99%E8%AE%A9C%E4%BD%8D%23) `227.2K 🔥` `NEW`
1. [声生不息 马嘉祺](https://s.weibo.com/weibo?q=%23%E5%A3%B0%E7%94%9F%E4%B8%8D%E6%81%AF%20%E9%A9%AC%E5%98%89%E7%A5%BA%23) `227.2K 🔥` `NEW`
1. [婆婆背后蛐蛐儿媳被孙子回怼](https://s.weibo.com/weibo?q=%23%E5%A9%86%E5%A9%86%E8%83%8C%E5%90%8E%E8%9B%90%E8%9B%90%E5%84%BF%E5%AA%B3%E8%A2%AB%E5%AD%99%E5%AD%90%E5%9B%9E%E6%80%BC%23) `227.2K 🔥` `NEW`
1. [王嘉尔我年纪大了不要冲动](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E6%88%91%E5%B9%B4%E7%BA%AA%E5%A4%A7%E4%BA%86%E4%B8%8D%E8%A6%81%E5%86%B2%E5%8A%A8%23) `227.1K 🔥` `NEW`
1. [AG无缘冠军赛](https://s.weibo.com/weibo?q=%23AG%E6%97%A0%E7%BC%98%E5%86%A0%E5%86%9B%E8%B5%9B%23) `227.1K 🔥` `NEW`
1. [一人十天手搓90分钟AI电影 (A 90-minute AI movie about one person's hand rubbing for ten days)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BA%BA%E5%8D%81%E5%A4%A9%E6%89%8B%E6%90%9390%E5%88%86%E9%92%9FAI%E7%94%B5%E5%BD%B1%23) `227.1K 🔥` `NEW`

Updated at 2026-08-21 00:31:45

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
