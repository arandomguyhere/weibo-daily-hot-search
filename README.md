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

1. [谷爱凌大跳台决赛第三跳前眼神 (Gu Ailing’s eyes before the third jump in the big platform finals)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%A4%A7%E8%B7%B3%E5%8F%B0%E5%86%B3%E8%B5%9B%E7%AC%AC%E4%B8%89%E8%B7%B3%E5%89%8D%E7%9C%BC%E7%A5%9E%23) `391.0K 🔥` `NEW`
1. [16个月宝宝拜年收红包当场验货](https://s.weibo.com/weibo?q=%2316%E4%B8%AA%E6%9C%88%E5%AE%9D%E5%AE%9D%E6%8B%9C%E5%B9%B4%E6%94%B6%E7%BA%A2%E5%8C%85%E5%BD%93%E5%9C%BA%E9%AA%8C%E8%B4%A7%23) `225.8K 🔥` `NEW`
1. [写族谱发现祖上是正二品](https://s.weibo.com/weibo?q=%23%E5%86%99%E6%97%8F%E8%B0%B1%E5%8F%91%E7%8E%B0%E7%A5%96%E4%B8%8A%E6%98%AF%E6%AD%A3%E4%BA%8C%E5%93%81%23) `188.0K 🔥` `NEW`
1. [镖人 武侠不死](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%20%E6%AD%A6%E4%BE%A0%E4%B8%8D%E6%AD%BB%23) `171.2K 🔥` `NEW`
1. [党员干部春节期间打麻将违规吗](https://s.weibo.com/weibo?q=%23%E5%85%9A%E5%91%98%E5%B9%B2%E9%83%A8%E6%98%A5%E8%8A%82%E6%9C%9F%E9%97%B4%E6%89%93%E9%BA%BB%E5%B0%86%E8%BF%9D%E8%A7%84%E5%90%97%23) `160.3K 🔥` `NEW`
1. [演出后台卫生巾](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%87%BA%E5%90%8E%E5%8F%B0%E5%8D%AB%E7%94%9F%E5%B7%BE%23) `159.8K 🔥` `NEW`
1. [徐梦桃第一跳89.29分](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E7%AC%AC%E4%B8%80%E8%B7%B389.29%E5%88%86%23) `152.9K 🔥` `NEW`
1. [喝不上酒的交警女婿发声](https://s.weibo.com/weibo?q=%23%E5%96%9D%E4%B8%8D%E4%B8%8A%E9%85%92%E7%9A%84%E4%BA%A4%E8%AD%A6%E5%A5%B3%E5%A9%BF%E5%8F%91%E5%A3%B0%23) `145.0K 🔥` `NEW`
1. [赖清德被喷溅呕吐物](https://s.weibo.com/weibo?q=%23%E8%B5%96%E6%B8%85%E5%BE%B7%E8%A2%AB%E5%96%B7%E6%BA%85%E5%91%95%E5%90%90%E7%89%A9%23) `142.6K 🔥` `NEW`
1. [成何体统大结局 仓促](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%E5%A4%A7%E7%BB%93%E5%B1%80%20%E4%BB%93%E4%BF%83%23) `127.2K 🔥` `NEW`
1. [飞驰人生3赢麻了 (Flying Life 3 is a win)](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F3%E8%B5%A2%E9%BA%BB%E4%BA%86%23) `123.5K 🔥` `NEW`
1. [TF家族 奔跑四](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%20%E5%A5%94%E8%B7%91%E5%9B%9B%23) `114.9K 🔥` `NEW`
1. [不要轻易尝试吃黄糕不嚼](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E8%BD%BB%E6%98%93%E5%B0%9D%E8%AF%95%E5%90%83%E9%BB%84%E7%B3%95%E4%B8%8D%E5%9A%BC%23) `105.9K 🔥` `NEW`
1. [电影票房](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E7%A5%A8%E6%88%BF%23) `105.3K 🔥` `NEW`
1. [朱一龙才是真景天](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E6%89%8D%E6%98%AF%E7%9C%9F%E6%99%AF%E5%A4%A9%23) `102.6K 🔥` `NEW`
1. [年轻人的过年现状](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%9A%84%E8%BF%87%E5%B9%B4%E7%8E%B0%E7%8A%B6%23) `102.4K 🔥` `NEW`
1. [初二回娘家山路上全是拜年大军](https://s.weibo.com/weibo?q=%23%E5%88%9D%E4%BA%8C%E5%9B%9E%E5%A8%98%E5%AE%B6%E5%B1%B1%E8%B7%AF%E4%B8%8A%E5%85%A8%E6%98%AF%E6%8B%9C%E5%B9%B4%E5%A4%A7%E5%86%9B%23) `98.0K 🔥` `NEW`
1. [谷爱凌大雪中完成U池训练](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%A4%A7%E9%9B%AA%E4%B8%AD%E5%AE%8C%E6%88%90U%E6%B1%A0%E8%AE%AD%E7%BB%83%23) `86.5K 🔥` `NEW`
1. [黄景瑜关晓彤发小变对象](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E5%85%B3%E6%99%93%E5%BD%A4%E5%8F%91%E5%B0%8F%E5%8F%98%E5%AF%B9%E8%B1%A1%23) `86.1K 🔥` `NEW`
1. [孩子存1000比你存20万利息高 (If your child saves 1,000, the interest will be higher than if you save 200,000.)](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E5%AD%981000%E6%AF%94%E4%BD%A0%E5%AD%9820%E4%B8%87%E5%88%A9%E6%81%AF%E9%AB%98%23) `1.1M 🔥` `+29%`
1. [镖人](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `752.4K 🔥` `+171%`
1. [熊猫计划全家快乐开关 (Panda Project Family Happy Switch)](https://s.weibo.com/weibo?q=%23%E7%86%8A%E7%8C%AB%E8%AE%A1%E5%88%92%E5%85%A8%E5%AE%B6%E5%BF%AB%E4%B9%90%E5%BC%80%E5%85%B3%23) `328.8K 🔥` `+110%`
1. [朕与吴京何时有过嫌隙](https://s.weibo.com/weibo?q=%23%E6%9C%95%E4%B8%8E%E5%90%B4%E4%BA%AC%E4%BD%95%E6%97%B6%E6%9C%89%E8%BF%87%E5%AB%8C%E9%9A%99%23) `220.9K 🔥` `+21%`
1. [Faker说成有钱人咯](https://s.weibo.com/weibo?q=%23Faker%E8%AF%B4%E6%88%90%E6%9C%89%E9%92%B1%E4%BA%BA%E5%92%AF%23) `155.1K 🔥` `+73%`
1. [印度一大学拿中国机器狗冒充自研](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E4%B8%80%E5%A4%A7%E5%AD%A6%E6%8B%BF%E4%B8%AD%E5%9B%BD%E6%9C%BA%E5%99%A8%E7%8B%97%E5%86%92%E5%85%85%E8%87%AA%E7%A0%94%23) `143.7K 🔥` `+42%`
1. [AI眼中的二十四节气 (Twenty-four solar terms in the eyes of AI)](https://s.weibo.com/weibo?q=%23AI%E7%9C%BC%E4%B8%AD%E7%9A%84%E4%BA%8C%E5%8D%81%E5%9B%9B%E8%8A%82%E6%B0%94%23) `589.8K 🔥`
1. [特朗普女儿伊万卡中文拜年](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%A5%B3%E5%84%BF%E4%BC%8A%E4%B8%87%E5%8D%A1%E4%B8%AD%E6%96%87%E6%8B%9C%E5%B9%B4%23) `190.8K 🔥`
1. [高市早苗再当选日本首相 (Sanae Takaichi re-elected as Prime Minister of Japan)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E5%86%8D%E5%BD%93%E9%80%89%E6%97%A5%E6%9C%AC%E9%A6%96%E7%9B%B8%23) `186.0K 🔥`
1. [俩人谈恋爱四个人烧脑](https://s.weibo.com/weibo?q=%23%E4%BF%A9%E4%BA%BA%E8%B0%88%E6%81%8B%E7%88%B1%E5%9B%9B%E4%B8%AA%E4%BA%BA%E7%83%A7%E8%84%91%23) `185.1K 🔥`
1. [看完惊蛰无声想掏垃圾桶](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%AE%8C%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%E6%83%B3%E6%8E%8F%E5%9E%83%E5%9C%BE%E6%A1%B6%23) `183.8K 🔥`
1. [柯基被老家的狗羞辱了](https://s.weibo.com/weibo?q=%23%E6%9F%AF%E5%9F%BA%E8%A2%AB%E8%80%81%E5%AE%B6%E7%9A%84%E7%8B%97%E7%BE%9E%E8%BE%B1%E4%BA%86%23) `152.7K 🔥`
1. [打麻将输7万4名牌友全获刑](https://s.weibo.com/weibo?q=%23%E6%89%93%E9%BA%BB%E5%B0%86%E8%BE%937%E4%B8%874%E5%90%8D%E7%89%8C%E5%8F%8B%E5%85%A8%E8%8E%B7%E5%88%91%23) `152.7K 🔥`
1. [娜然与霍家父子同游意大利 (Naran traveled to Italy with the Huo family and his son)](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E7%84%B6%E4%B8%8E%E9%9C%8D%E5%AE%B6%E7%88%B6%E5%AD%90%E5%90%8C%E6%B8%B8%E6%84%8F%E5%A4%A7%E5%88%A9%23) `150.5K 🔥`
1. [我和papi酱的愿望是一样的](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%92%8Cpapi%E9%85%B1%E7%9A%84%E6%84%BF%E6%9C%9B%E6%98%AF%E4%B8%80%E6%A0%B7%E7%9A%84%23) `149.0K 🔥`
1. [过年不要一直穿睡衣 (Don’t wear pajamas all the time during the Chinese New Year)](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%B9%B4%E4%B8%8D%E8%A6%81%E4%B8%80%E7%9B%B4%E7%A9%BF%E7%9D%A1%E8%A1%A3%23) `147.4K 🔥`
1. [王橹杰娃娃](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%A8%83%E5%A8%83%23) `147.3K 🔥`
1. [飞驰人生3票房或超50亿 (The box office of Flying Life 3 may exceed 5 billion)](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F3%E7%A5%A8%E6%88%BF%E6%88%96%E8%B6%8550%E4%BA%BF%23) `146.8K 🔥`
1. [今年过年没人催婚了](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E8%BF%87%E5%B9%B4%E6%B2%A1%E4%BA%BA%E5%82%AC%E5%A9%9A%E4%BA%86%23) `146.6K 🔥`
1. [刘诗诗给杨幂拿话筒 (Liu Shishi holds the microphone for Yang Mi)](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E7%BB%99%E6%9D%A8%E5%B9%82%E6%8B%BF%E8%AF%9D%E7%AD%92%23) `142.4K 🔥`
1. [看小说时莫名其妙的生理反应](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%B0%8F%E8%AF%B4%E6%97%B6%E8%8E%AB%E5%90%8D%E5%85%B6%E5%A6%99%E7%9A%84%E7%94%9F%E7%90%86%E5%8F%8D%E5%BA%94%23) `123.8K 🔥`
1. [B站回应宋小宝小品搭档滞留台下](https://s.weibo.com/weibo?q=%23B%E7%AB%99%E5%9B%9E%E5%BA%94%E5%AE%8B%E5%B0%8F%E5%AE%9D%E5%B0%8F%E5%93%81%E6%90%AD%E6%A1%A3%E6%BB%9E%E7%95%99%E5%8F%B0%E4%B8%8B%23) `96.2K 🔥`
1. [龙洋主持完春晚哭了 (Long Yang cried after hosting the Spring Festival Gala)](https://s.weibo.com/weibo?q=%23%E9%BE%99%E6%B4%8B%E4%B8%BB%E6%8C%81%E5%AE%8C%E6%98%A5%E6%99%9A%E5%93%AD%E4%BA%86%23) `509.8K 🔥` `-21%`
1. [贡菜是莴笋](https://s.weibo.com/weibo?q=%23%E8%B4%A1%E8%8F%9C%E6%98%AF%E8%8E%B4%E7%AC%8B%23) `353.0K 🔥` `-46%`
1. [诗幂 (poetry power)](https://s.weibo.com/weibo?q=%23%E8%AF%97%E5%B9%82%23) `202.4K 🔥` `-82%`
1. [印一大学被曝买宇树机器狗冒充自研](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E4%B8%80%E5%A4%A7%E5%AD%A6%E8%A2%AB%E6%9B%9D%E4%B9%B0%E5%AE%87%E6%A0%91%E6%9C%BA%E5%99%A8%E7%8B%97%E5%86%92%E5%85%85%E8%87%AA%E7%A0%94%23) `145.3K 🔥` `-21%`
1. [TF四代娃娃](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E5%A8%83%E5%A8%83%23) `103.3K 🔥` `-35%`
1. [听说全国女婿到丈母娘家都这样 (I heard that this happens all over the country when a son-in-law goes to his mother-in-law’s house.)](https://s.weibo.com/weibo?q=%23%E5%90%AC%E8%AF%B4%E5%85%A8%E5%9B%BD%E5%A5%B3%E5%A9%BF%E5%88%B0%E4%B8%88%E6%AF%8D%E5%A8%98%E5%AE%B6%E9%83%BD%E8%BF%99%E6%A0%B7%23) `102.3K 🔥` `-43%`
1. [大年初二黄景瑜喊关晓彤吃饭了](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B9%B4%E5%88%9D%E4%BA%8C%E9%BB%84%E6%99%AF%E7%91%9C%E5%96%8A%E5%85%B3%E6%99%93%E5%BD%A4%E5%90%83%E9%A5%AD%E4%BA%86%23) `102.3K 🔥` `-33%`
1. [成何体统大结局 (What a decent ending)](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%E5%A4%A7%E7%BB%93%E5%B1%80%23) `99.5K 🔥` `-34%`
1. [镖人4D版 打谁都是打我 (Darren 4D version: Whoever you hit, you hit me)](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA4D%E7%89%88%20%E6%89%93%E8%B0%81%E9%83%BD%E6%98%AF%E6%89%93%E6%88%91%23) `97.9K 🔥` `-28%`
1. [不会扫兴的母亲培养出谷爱凌](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E4%BC%9A%E6%89%AB%E5%85%B4%E7%9A%84%E6%AF%8D%E4%BA%B2%E5%9F%B9%E5%85%BB%E5%87%BA%E8%B0%B7%E7%88%B1%E5%87%8C%23) `84.2K 🔥` `-38%`

Updated at 2026-02-18 18:01:41

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
