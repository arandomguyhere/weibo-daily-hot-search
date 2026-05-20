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

1. [普京欢迎宴会 (Putin welcome banquet)](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E6%AC%A2%E8%BF%8E%E5%AE%B4%E4%BC%9A%23) `1.2M 🔥` `NEW`
1. [普京与26年前抱过的中国男孩见面了](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E4%B8%8E26%E5%B9%B4%E5%89%8D%E6%8A%B1%E8%BF%87%E7%9A%84%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%AD%A9%E8%A7%81%E9%9D%A2%E4%BA%86%23) `818.0K 🔥` `NEW`
1. [不好意思520于适和我过了](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%A5%BD%E6%84%8F%E6%80%9D520%E4%BA%8E%E9%80%82%E5%92%8C%E6%88%91%E8%BF%87%E4%BA%86%23) `790.8K 🔥` `NEW`
1. [为什么520朋友圈秀恩爱的变少了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88520%E6%9C%8B%E5%8F%8B%E5%9C%88%E7%A7%80%E6%81%A9%E7%88%B1%E7%9A%84%E5%8F%98%E5%B0%91%E4%BA%86%23) `789.4K 🔥` `NEW`
1. [张凌赫回复丁程鑫](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%9E%E5%A4%8D%E4%B8%81%E7%A8%8B%E9%91%AB%23) `785.4K 🔥` `NEW`
1. [阳朔一米粉店本地人7元游客13元](https://s.weibo.com/weibo?q=%23%E9%98%B3%E6%9C%94%E4%B8%80%E7%B1%B3%E7%B2%89%E5%BA%97%E6%9C%AC%E5%9C%B0%E4%BA%BA7%E5%85%83%E6%B8%B8%E5%AE%A213%E5%85%83%23) `499.5K 🔥` `NEW`
1. [广西地震局辟谣网传最新通报](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E5%9C%B0%E9%9C%87%E5%B1%80%E8%BE%9F%E8%B0%A3%E7%BD%91%E4%BC%A0%E6%9C%80%E6%96%B0%E9%80%9A%E6%8A%A5%23) `491.3K 🔥` `NEW`
1. [易青娥二公](https://s.weibo.com/weibo?q=%23%E6%98%93%E9%9D%92%E5%A8%A5%E4%BA%8C%E5%85%AC%23) `462.0K 🔥` `NEW`
1. [iPhone情侣设置](https://s.weibo.com/weibo?q=%23iPhone%E6%83%85%E4%BE%A3%E8%AE%BE%E7%BD%AE%23) `336.9K 🔥` `NEW`
1. [汉娜高达采访谈孙颖莎](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%A8%9C%E9%AB%98%E8%BE%BE%E9%87%87%E8%AE%BF%E8%B0%88%E5%AD%99%E9%A2%96%E8%8E%8E%23) `325.9K 🔥` `NEW`
1. [颜颜凯凯没在一起 (Yan Yan Kaikai is not together)](https://s.weibo.com/weibo?q=%23%E9%A2%9C%E9%A2%9C%E5%87%AF%E5%87%AF%E6%B2%A1%E5%9C%A8%E4%B8%80%E8%B5%B7%23) `314.8K 🔥` `NEW`
1. [陈赫在综艺发火了](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E5%9C%A8%E7%BB%BC%E8%89%BA%E5%8F%91%E7%81%AB%E4%BA%86%23) `307.3K 🔥` `NEW`
1. [被戳伤眼球女教师希望处分涉事女生](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%88%B3%E4%BC%A4%E7%9C%BC%E7%90%83%E5%A5%B3%E6%95%99%E5%B8%88%E5%B8%8C%E6%9C%9B%E5%A4%84%E5%88%86%E6%B6%89%E4%BA%8B%E5%A5%B3%E7%94%9F%23) `299.6K 🔥` `NEW`
1. [王一菲与嘉行解约](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E8%8F%B2%E4%B8%8E%E5%98%89%E8%A1%8C%E8%A7%A3%E7%BA%A6%23) `295.5K 🔥` `NEW`
1. [颜凯be](https://s.weibo.com/weibo?q=%23%E9%A2%9C%E5%87%AFbe%23) `286.0K 🔥` `NEW`
1. [李在明批评三星电子工会越界了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%9C%A8%E6%98%8E%E6%89%B9%E8%AF%84%E4%B8%89%E6%98%9F%E7%94%B5%E5%AD%90%E5%B7%A5%E4%BC%9A%E8%B6%8A%E7%95%8C%E4%BA%86%23) `260.7K 🔥` `NEW`
1. [金莎孙丞潇婚纱照](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E5%AD%99%E4%B8%9E%E6%BD%87%E5%A9%9A%E7%BA%B1%E7%85%A7%23) `258.9K 🔥` `NEW`
1. [iQOO15T新品发布](https://s.weibo.com/weibo?q=%23iQOO15T%E6%96%B0%E5%93%81%E5%8F%91%E5%B8%83%23) `256.7K 🔥` `NEW`
1. [杨紫曹磊也知道这个梗了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%9B%B9%E7%A3%8A%E4%B9%9F%E7%9F%A5%E9%81%93%E8%BF%99%E4%B8%AA%E6%A2%97%E4%BA%86%23) `253.9K 🔥` `NEW`
1. [李多海怀孕](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%A4%9A%E6%B5%B7%E6%80%80%E5%AD%95%23) `249.6K 🔥` `NEW`
1. [京东20城线下比价直播最高赔10万 (Jingdong’s offline price comparison live broadcast in 20 cities can pay up to 100,000 yuan)](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C20%E5%9F%8E%E7%BA%BF%E4%B8%8B%E6%AF%94%E4%BB%B7%E7%9B%B4%E6%92%AD%E6%9C%80%E9%AB%98%E8%B5%9410%E4%B8%87%23) `246.5K 🔥` `NEW`
1. [李晨红包](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%A8%E7%BA%A2%E5%8C%85%23) `242.5K 🔥` `NEW`
1. [十个勤天巡演官宣](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%E5%B7%A1%E6%BC%94%E5%AE%98%E5%AE%A3%23) `240.6K 🔥` `NEW`
1. [五子棋下成二维码了](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%AD%90%E6%A3%8B%E4%B8%8B%E6%88%90%E4%BA%8C%E7%BB%B4%E7%A0%81%E4%BA%86%23) `233.7K 🔥` `NEW`
1. [粥文be](https://s.weibo.com/weibo?q=%23%E7%B2%A5%E6%96%87be%23) `232.4K 🔥` `NEW`
1. [韩东君把家业官博整疯了](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E4%B8%9C%E5%90%9B%E6%8A%8A%E5%AE%B6%E4%B8%9A%E5%AE%98%E5%8D%9A%E6%95%B4%E7%96%AF%E4%BA%86%23) `198.2K 🔥` `NEW`
1. [小米YU7代言人](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3YU7%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `192.6K 🔥` `NEW`
1. [张雪夺冠了才想起欠她一束玫瑰](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%A4%BA%E5%86%A0%E4%BA%86%E6%89%8D%E6%83%B3%E8%B5%B7%E6%AC%A0%E5%A5%B9%E4%B8%80%E6%9D%9F%E7%8E%AB%E7%91%B0%23) `187.4K 🔥` `NEW`
1. [给阿嬷的情书 导演预判](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%20%E5%AF%BC%E6%BC%94%E9%A2%84%E5%88%A4%23) `184.5K 🔥` `NEW`
1. [主角](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `180.0K 🔥` `NEW`
1. [小鹏GX发布会 (Xpeng GX press conference)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FGX%E5%8F%91%E5%B8%83%E4%BC%9A%23) `180.0K 🔥` `NEW`
1. [广东暴雨后现状](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E6%9A%B4%E9%9B%A8%E5%90%8E%E7%8E%B0%E7%8A%B6%23) `179.5K 🔥` `NEW`
1. [花店520定制500元彩票花束](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BA%97520%E5%AE%9A%E5%88%B6500%E5%85%83%E5%BD%A9%E7%A5%A8%E8%8A%B1%E6%9D%9F%23) `179.0K 🔥` `NEW`
1. [4男子赴泰失联家属讲述细节](https://s.weibo.com/weibo?q=%234%E7%94%B7%E5%AD%90%E8%B5%B4%E6%B3%B0%E5%A4%B1%E8%81%94%E5%AE%B6%E5%B1%9E%E8%AE%B2%E8%BF%B0%E7%BB%86%E8%8A%82%23) `178.7K 🔥` `NEW`
1. [芯片龙头股价大涨](https://s.weibo.com/weibo?q=%23%E8%8A%AF%E7%89%87%E9%BE%99%E5%A4%B4%E8%82%A1%E4%BB%B7%E5%A4%A7%E6%B6%A8%23) `178.4K 🔥` `NEW`
1. [小莫高度赞扬樊振东](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%8E%AB%E9%AB%98%E5%BA%A6%E8%B5%9E%E6%89%AC%E6%A8%8A%E6%8C%AF%E4%B8%9C%23) `173.6K 🔥` `NEW`
1. [怦然心动20岁直播](https://s.weibo.com/weibo?q=%23%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A820%E5%B2%81%E7%9B%B4%E6%92%AD%23) `173.5K 🔥` `NEW`
1. [乌漆麻嘿一口嘿化](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E6%BC%86%E9%BA%BB%E5%98%BF%E4%B8%80%E5%8F%A3%E5%98%BF%E5%8C%96%23) `166.3K 🔥` `NEW`
1. [普京访华欢迎宴会](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E8%AE%BF%E5%8D%8E%E6%AC%A2%E8%BF%8E%E5%AE%B4%E4%BC%9A%23) `164.9K 🔥` `NEW`
1. [豆包没有身份证说话就是狠](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E6%B2%A1%E6%9C%89%E8%BA%AB%E4%BB%BD%E8%AF%81%E8%AF%B4%E8%AF%9D%E5%B0%B1%E6%98%AF%E7%8B%A0%23) `242.1K 🔥` `+43%`
1. [一曲莫斯科郊外的晚上欢迎普京 (A song to welcome Putin in the evening outside Moscow)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%9B%B2%E8%8E%AB%E6%96%AF%E7%A7%91%E9%83%8A%E5%A4%96%E7%9A%84%E6%99%9A%E4%B8%8A%E6%AC%A2%E8%BF%8E%E6%99%AE%E4%BA%AC%23) `791.4K 🔥`
1. [这么隐晦的暗恋方式](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B9%88%E9%9A%90%E6%99%A6%E7%9A%84%E6%9A%97%E6%81%8B%E6%96%B9%E5%BC%8F%23) `329.0K 🔥` `-54%`
1. [杨梅协会会长恳求消费者给果农生路 (The president of Bayberry Association pleads with consumers to give fruit farmers a way to survive)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%A2%85%E5%8D%8F%E4%BC%9A%E4%BC%9A%E9%95%BF%E6%81%B3%E6%B1%82%E6%B6%88%E8%B4%B9%E8%80%85%E7%BB%99%E6%9E%9C%E5%86%9C%E7%94%9F%E8%B7%AF%23) `277.5K 🔥` `-82%`
1. [中方将引进200架波音飞机](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%B0%86%E5%BC%95%E8%BF%9B200%E6%9E%B6%E6%B3%A2%E9%9F%B3%E9%A3%9E%E6%9C%BA%23) `275.7K 🔥` `-25%`
1. [普京访华欢迎仪式上的中国排面](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E8%AE%BF%E5%8D%8E%E6%AC%A2%E8%BF%8E%E4%BB%AA%E5%BC%8F%E4%B8%8A%E7%9A%84%E4%B8%AD%E5%9B%BD%E6%8E%92%E9%9D%A2%23) `261.5K 🔥` `-46%`
1. [武契奇将对中国进行国事访问](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A5%91%E5%A5%87%E5%B0%86%E5%AF%B9%E4%B8%AD%E5%9B%BD%E8%BF%9B%E8%A1%8C%E5%9B%BD%E4%BA%8B%E8%AE%BF%E9%97%AE%23) `251.1K 🔥` `-72%`
1. [于娜退圈十年归来胖若两人](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E5%A8%9C%E9%80%80%E5%9C%88%E5%8D%81%E5%B9%B4%E5%BD%92%E6%9D%A5%E8%83%96%E8%8B%A5%E4%B8%A4%E4%BA%BA%23) `245.2K 🔥` `-68%`
1. [丁程鑫看的是正经逐玉吗 (Is Ding Chengxin watching the serious pursuit of jade?)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E7%9C%8B%E7%9A%84%E6%98%AF%E6%AD%A3%E7%BB%8F%E9%80%90%E7%8E%89%E5%90%97%23) `237.4K 🔥` `-34%`
1. [张凌赫把金靖放在C位](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%8A%8A%E9%87%91%E9%9D%96%E6%94%BE%E5%9C%A8C%E4%BD%8D%23) `178.3K 🔥` `-51%`
1. [喜笑颜凯 (Happy Yankai)](https://s.weibo.com/weibo?q=%23%E5%96%9C%E7%AC%91%E9%A2%9C%E5%87%AF%23) `169.3K 🔥` `-45%`
1. [何润东商务 有人莫名其妙就发财了](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E5%95%86%E5%8A%A1%20%E6%9C%89%E4%BA%BA%E8%8E%AB%E5%90%8D%E5%85%B6%E5%A6%99%E5%B0%B1%E5%8F%91%E8%B4%A2%E4%BA%86%23) `164.3K 🔥` `-74%`
1. [打开朋友圈误入玻璃厂 (Open the circle of friends and enter the glass factory by mistake)](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%BC%80%E6%9C%8B%E5%8F%8B%E5%9C%88%E8%AF%AF%E5%85%A5%E7%8E%BB%E7%92%83%E5%8E%82%23) `163.4K 🔥` `-67%`

Updated at 2026-05-20 20:27:54

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
