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

1. [生命树 敢拍 (Tree of Life Dare to take a photo)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%20%E6%95%A2%E6%8B%8D%23) `167.4K 🔥` `NEW`
1. [微博之夜品牌与星光双向奔赴](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E4%B9%8B%E5%A4%9C%E5%93%81%E7%89%8C%E4%B8%8E%E6%98%9F%E5%85%89%E5%8F%8C%E5%90%91%E5%A5%94%E8%B5%B4%23) `123.7K 🔥` `NEW`
1. [Bin晒侧脸照](https://s.weibo.com/weibo?q=%23Bin%E6%99%92%E4%BE%A7%E8%84%B8%E7%85%A7%23) `121.4K 🔥` `NEW`
1. [再撑1天连休9天](https://s.weibo.com/weibo?q=%23%E5%86%8D%E6%92%911%E5%A4%A9%E8%BF%9E%E4%BC%919%E5%A4%A9%23) `119.4K 🔥` `NEW`
1. [发1.8亿企业员工现场数钱画面曝光](https://s.weibo.com/weibo?q=%23%E5%8F%911.8%E4%BA%BF%E4%BC%81%E4%B8%9A%E5%91%98%E5%B7%A5%E7%8E%B0%E5%9C%BA%E6%95%B0%E9%92%B1%E7%94%BB%E9%9D%A2%E6%9B%9D%E5%85%89%23) `118.7K 🔥` `NEW`
1. [沈梦辰芒果年会上的发言](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%A2%A6%E8%BE%B0%E8%8A%92%E6%9E%9C%E5%B9%B4%E4%BC%9A%E4%B8%8A%E7%9A%84%E5%8F%91%E8%A8%80%23) `114.5K 🔥` `NEW`
1. [男子出手2700克金条5年净赚196万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%87%BA%E6%89%8B2700%E5%85%8B%E9%87%91%E6%9D%A15%E5%B9%B4%E5%87%80%E8%B5%9A196%E4%B8%87%23) `97.1K 🔥` `NEW`
1. [童星叮当称关晓彤火是应该的](https://s.weibo.com/weibo?q=%23%E7%AB%A5%E6%98%9F%E5%8F%AE%E5%BD%93%E7%A7%B0%E5%85%B3%E6%99%93%E5%BD%A4%E7%81%AB%E6%98%AF%E5%BA%94%E8%AF%A5%E7%9A%84%23) `94.8K 🔥` `NEW`
1. [清融MVP](https://s.weibo.com/weibo?q=%23%E6%B8%85%E8%9E%8DMVP%23) `86.6K 🔥` `NEW`
1. [泰山 禁石令](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%B1%B1%20%E7%A6%81%E7%9F%B3%E4%BB%A4%23) `81.1K 🔥` `NEW`
1. [重庆江心岛近600年佛像露出水面 (Nearly 600-year-old Buddha statue emerges from the water on Jiangxin Island in Chongqing)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E6%B1%9F%E5%BF%83%E5%B2%9B%E8%BF%91600%E5%B9%B4%E4%BD%9B%E5%83%8F%E9%9C%B2%E5%87%BA%E6%B0%B4%E9%9D%A2%23) `71.3K 🔥` `NEW`
1. [陈梦米兰看冬奥](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%A2%A6%E7%B1%B3%E5%85%B0%E7%9C%8B%E5%86%AC%E5%A5%A5%23) `64.7K 🔥` `NEW`
1. [女子幽门螺杆菌阳性3年后查出胃癌](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B9%BD%E9%97%A8%E8%9E%BA%E6%9D%86%E8%8F%8C%E9%98%B3%E6%80%A73%E5%B9%B4%E5%90%8E%E6%9F%A5%E5%87%BA%E8%83%83%E7%99%8C%23) `793.0K 🔥` `+414%`
1. [AG对战JDG](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98JDG%23) `157.0K 🔥` `+70%`
1. [冰壶](https://s.weibo.com/weibo?q=%23%E5%86%B0%E5%A3%B6%23) `149.5K 🔥` `+23%`
1. [颜人中演唱会延迟1小时送1场](https://s.weibo.com/weibo?q=%23%E9%A2%9C%E4%BA%BA%E4%B8%AD%E6%BC%94%E5%94%B1%E4%BC%9A%E5%BB%B6%E8%BF%9F1%E5%B0%8F%E6%97%B6%E9%80%811%E5%9C%BA%23) `102.9K 🔥` `+25%`
1. [白敬亭 宋轶 (Bai Jingting Song Yi)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%20%E5%AE%8B%E8%BD%B6%23) `7.2M 🔥`
1. [豆包红包 (bean bag red envelope)](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E7%BA%A2%E5%8C%85%23) `1.1M 🔥`
1. [回家路上随手拍](https://s.weibo.com/weibo?q=%23%E5%9B%9E%E5%AE%B6%E8%B7%AF%E4%B8%8A%E9%9A%8F%E6%89%8B%E6%8B%8D%23) `648.0K 🔥`
1. [年味有新young (The taste of the year is new and young)](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%91%B3%E6%9C%89%E6%96%B0young%23) `266.6K 🔥`
1. [三亚通报8499元订民宿被临时毁约](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BA%9A%E9%80%9A%E6%8A%A58499%E5%85%83%E8%AE%A2%E6%B0%91%E5%AE%BF%E8%A2%AB%E4%B8%B4%E6%97%B6%E6%AF%81%E7%BA%A6%23) `224.3K 🔥`
1. [湖北精神病医院有关问题调查结果](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8C%97%E7%B2%BE%E7%A5%9E%E7%97%85%E5%8C%BB%E9%99%A2%E6%9C%89%E5%85%B3%E9%97%AE%E9%A2%98%E8%B0%83%E6%9F%A5%E7%BB%93%E6%9E%9C%23) `195.7K 🔥`
1. [21岁孙子97岁奶奶都觉得对方很好带](https://s.weibo.com/weibo?q=%2321%E5%B2%81%E5%AD%99%E5%AD%9097%E5%B2%81%E5%A5%B6%E5%A5%B6%E9%83%BD%E8%A7%89%E5%BE%97%E5%AF%B9%E6%96%B9%E5%BE%88%E5%A5%BD%E5%B8%A6%23) `184.8K 🔥`
1. [微博之夜 二刷 (Weibo night second brush)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E4%B9%8B%E5%A4%9C%20%E4%BA%8C%E5%88%B7%23) `160.3K 🔥`
1. [王橹杰彝族血统发力了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%BD%9D%E6%97%8F%E8%A1%80%E7%BB%9F%E5%8F%91%E5%8A%9B%E4%BA%86%23) `153.9K 🔥`
1. [谁给迪丽热巴买的手机壳 (Who bought the mobile phone case for Dilireba?)](https://s.weibo.com/weibo?q=%23%E8%B0%81%E7%BB%99%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%B9%B0%E7%9A%84%E6%89%8B%E6%9C%BA%E5%A3%B3%23) `153.6K 🔥`
1. [瑶一瑶藏剪刀被安检发现 (Yao Yiyao’s hidden scissors were discovered by security)](https://s.weibo.com/weibo?q=%23%E7%91%B6%E4%B8%80%E7%91%B6%E8%97%8F%E5%89%AA%E5%88%80%E8%A2%AB%E5%AE%89%E6%A3%80%E5%8F%91%E7%8E%B0%23) `138.2K 🔥`
1. [王者荣耀农家乐村晚 (King of Glory Farmhouse Village Night)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E5%86%9C%E5%AE%B6%E4%B9%90%E6%9D%91%E6%99%9A%23) `122.7K 🔥`
1. [王星越白鹿居家风合照](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%9F%E8%B6%8A%E7%99%BD%E9%B9%BF%E5%B1%85%E5%AE%B6%E9%A3%8E%E5%90%88%E7%85%A7%23) `122.2K 🔥`
1. [宋轶换微博背景 (Song Yi changes Weibo background)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E8%BD%B6%E6%8D%A2%E5%BE%AE%E5%8D%9A%E8%83%8C%E6%99%AF%23) `105.0K 🔥`
1. [原著粉最满意的阵容出现了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E8%91%97%E7%B2%89%E6%9C%80%E6%BB%A1%E6%84%8F%E7%9A%84%E9%98%B5%E5%AE%B9%E5%87%BA%E7%8E%B0%E4%BA%86%23) `104.8K 🔥`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `96.8K 🔥`
1. [中国队何时能摘首金 (When will the Chinese team win its first gold medal?)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E4%BD%95%E6%97%B6%E8%83%BD%E6%91%98%E9%A6%96%E9%87%91%23) `90.9K 🔥`
1. [李家诚告周秀娜诽谤及骚扰](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%B6%E8%AF%9A%E5%91%8A%E5%91%A8%E7%A7%80%E5%A8%9C%E8%AF%BD%E8%B0%A4%E5%8F%8A%E9%AA%9A%E6%89%B0%23) `90.2K 🔥`
1. [苍蝇搓手为什么会意外截头](https://s.weibo.com/weibo?q=%23%E8%8B%8D%E8%9D%87%E6%90%93%E6%89%8B%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BC%9A%E6%84%8F%E5%A4%96%E6%88%AA%E5%A4%B4%23) `89.4K 🔥`
1. [懒懒自曝78斤](https://s.weibo.com/weibo?q=%23%E6%87%92%E6%87%92%E8%87%AA%E6%9B%9D78%E6%96%A4%23) `86.9K 🔥`
1. [王俊凯周杰伦到底还有多少合照 (How many photos do Wang Junkai and Jay Chou have together?)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%91%A8%E6%9D%B0%E4%BC%A6%E5%88%B0%E5%BA%95%E8%BF%98%E6%9C%89%E5%A4%9A%E5%B0%91%E5%90%88%E7%85%A7%23) `78.7K 🔥`
1. [AG蝉联周冠](https://s.weibo.com/weibo?q=%23AG%E8%9D%89%E8%81%94%E5%91%A8%E5%86%A0%23) `65.3K 🔥`
1. [我家那小子首发阵容官宣](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E9%82%A3%E5%B0%8F%E5%AD%90%E9%A6%96%E5%8F%91%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `201.2K 🔥` `-77%`
1. [瑶一瑶小肉包近30天掉粉6万 (Yao Yiyao’s pork buns have lost 60,000 followers in the past 30 days)](https://s.weibo.com/weibo?q=%23%E7%91%B6%E4%B8%80%E7%91%B6%E5%B0%8F%E8%82%89%E5%8C%85%E8%BF%9130%E5%A4%A9%E6%8E%89%E7%B2%896%E4%B8%87%23) `122.5K 🔥` `-22%`
1. [主动投案的王鑫是易烊千玺等人老师](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E5%8A%A8%E6%8A%95%E6%A1%88%E7%9A%84%E7%8E%8B%E9%91%AB%E6%98%AF%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E7%AD%89%E4%BA%BA%E8%80%81%E5%B8%88%23) `119.1K 🔥` `-22%`
1. [Angelababy兔耳朵撕拉片](https://s.weibo.com/weibo?q=%23Angelababy%E5%85%94%E8%80%B3%E6%9C%B5%E6%92%95%E6%8B%89%E7%89%87%23) `109.3K 🔥` `-23%`
1. [官方回应湛江发现儒艮尸体](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E6%B9%9B%E6%B1%9F%E5%8F%91%E7%8E%B0%E5%84%92%E8%89%AE%E5%B0%B8%E4%BD%93%23) `106.7K 🔥` `-33%`
1. [突然明白了葬礼的意义 (Suddenly I understood the meaning of a funeral)](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%98%8E%E7%99%BD%E4%BA%86%E8%91%AC%E7%A4%BC%E7%9A%84%E6%84%8F%E4%B9%89%23) `103.2K 🔥` `-28%`
1. [主人回应边牧凌晨下单100多个灯笼](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E4%BA%BA%E5%9B%9E%E5%BA%94%E8%BE%B9%E7%89%A7%E5%87%8C%E6%99%A8%E4%B8%8B%E5%8D%95100%E5%A4%9A%E4%B8%AA%E7%81%AF%E7%AC%BC%23) `102.5K 🔥` `-51%`
1. [丞磊第20集6分47秒](https://s.weibo.com/weibo?q=%23%E4%B8%9E%E7%A3%8A%E7%AC%AC20%E9%9B%866%E5%88%8647%E7%A7%92%23) `80.1K 🔥` `-56%`
1. [3次吸毒后驾车撞人致4死被判死刑](https://s.weibo.com/weibo?q=%233%E6%AC%A1%E5%90%B8%E6%AF%92%E5%90%8E%E9%A9%BE%E8%BD%A6%E6%92%9E%E4%BA%BA%E8%87%B44%E6%AD%BB%E8%A2%AB%E5%88%A4%E6%AD%BB%E5%88%91%23) `76.3K 🔥` `-24%`
1. [最强大脑](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%BC%BA%E5%A4%A7%E8%84%91%23) `75.0K 🔥` `-25%`
1. [薛之谦湖泊唱片版](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%B9%96%E6%B3%8A%E5%94%B1%E7%89%87%E7%89%88%23) `69.4K 🔥` `-22%`
1. [徐梦桃已抵达米兰冬奥村](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E5%B7%B2%E6%8A%B5%E8%BE%BE%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E6%9D%91%23) `67.8K 🔥` `-53%`
1. [王玉雯敖瑞鹏游戏直播 (Wang Yuwen Ao Ruipeng game live broadcast)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E6%95%96%E7%91%9E%E9%B9%8F%E6%B8%B8%E6%88%8F%E7%9B%B4%E6%92%AD%23) `64.3K 🔥` `-43%`

Updated at 2026-02-13 23:23:59

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
