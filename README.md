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

1. [赵子琪回应和张慧雯争论视频 (Zhao Ziqi responded to the video of arguing with Zhang Huiwen)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E5%9B%9E%E5%BA%94%E5%92%8C%E5%BC%A0%E6%85%A7%E9%9B%AF%E4%BA%89%E8%AE%BA%E8%A7%86%E9%A2%91%23) `271.0K 🔥` `NEW`
1. [v读北京](https://s.weibo.com/weibo?q=%23v%E8%AF%BB%E5%8C%97%E4%BA%AC%23) `264.2K 🔥` `NEW`
1. [RW 卖队](https://s.weibo.com/weibo?q=%23RW%20%E5%8D%96%E9%98%9F%23) `258.7K 🔥` `NEW`
1. [A股交易重要调整来了](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%BA%A4%E6%98%93%E9%87%8D%E8%A6%81%E8%B0%83%E6%95%B4%E6%9D%A5%E4%BA%86%23) `152.2K 🔥` `NEW`
1. [老人私栓绳子致男孩气管全断裂](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E7%A7%81%E6%A0%93%E7%BB%B3%E5%AD%90%E8%87%B4%E7%94%B7%E5%AD%A9%E6%B0%94%E7%AE%A1%E5%85%A8%E6%96%AD%E8%A3%82%23) `150.9K 🔥` `NEW`
1. [吴京真在家带娃了](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%E7%9C%9F%E5%9C%A8%E5%AE%B6%E5%B8%A6%E5%A8%83%E4%BA%86%23) `148.7K 🔥` `NEW`
1. [比伯嗓子太好了](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BC%AF%E5%97%93%E5%AD%90%E5%A4%AA%E5%A5%BD%E4%BA%86%23) `145.0K 🔥` `NEW`
1. [张凌赫今天素颜好性感](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%BB%8A%E5%A4%A9%E7%B4%A0%E9%A2%9C%E5%A5%BD%E6%80%A7%E6%84%9F%23) `144.3K 🔥` `NEW`
1. [莫氏鸡煲要卖汤底药包了](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%A6%81%E5%8D%96%E6%B1%A4%E5%BA%95%E8%8D%AF%E5%8C%85%E4%BA%86%23) `132.4K 🔥` `NEW`
1. [男子住48元宾馆身亡家属索赔40万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%BD%8F48%E5%85%83%E5%AE%BE%E9%A6%86%E8%BA%AB%E4%BA%A1%E5%AE%B6%E5%B1%9E%E7%B4%A2%E8%B5%9440%E4%B8%87%23) `114.1K 🔥` `NEW`
1. [这5种不适可能是心梗前兆 (These 5 discomforts may be precursors to myocardial infarction)](https://s.weibo.com/weibo?q=%23%E8%BF%995%E7%A7%8D%E4%B8%8D%E9%80%82%E5%8F%AF%E8%83%BD%E6%98%AF%E5%BF%83%E6%A2%97%E5%89%8D%E5%85%86%23) `93.0K 🔥` `NEW`
1. [王濛公司大部分是退役运动员](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%85%AC%E5%8F%B8%E5%A4%A7%E9%83%A8%E5%88%86%E6%98%AF%E9%80%80%E5%BD%B9%E8%BF%90%E5%8A%A8%E5%91%98%23) `91.4K 🔥` `NEW`
1. [美伊谈判结束双方立场难以弥合](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E8%B0%88%E5%88%A4%E7%BB%93%E6%9D%9F%E5%8F%8C%E6%96%B9%E7%AB%8B%E5%9C%BA%E9%9A%BE%E4%BB%A5%E5%BC%A5%E5%90%88%23) `84.2K 🔥` `NEW`
1. [安洗莹首摘亚锦赛冠军](https://s.weibo.com/weibo?q=%23%E5%AE%89%E6%B4%97%E8%8E%B9%E9%A6%96%E6%91%98%E4%BA%9A%E9%94%A6%E8%B5%9B%E5%86%A0%E5%86%9B%23) `83.2K 🔥` `NEW`
1. [吴镇宇说科班演员吃不了短剧苦](https://s.weibo.com/weibo?q=%23%E5%90%B4%E9%95%87%E5%AE%87%E8%AF%B4%E7%A7%91%E7%8F%AD%E6%BC%94%E5%91%98%E5%90%83%E4%B8%8D%E4%BA%86%E7%9F%AD%E5%89%A7%E8%8B%A6%23) `81.8K 🔥` `NEW`
1. [安洗莹达成全满贯](https://s.weibo.com/weibo?q=%23%E5%AE%89%E6%B4%97%E8%8E%B9%E8%BE%BE%E6%88%90%E5%85%A8%E6%BB%A1%E8%B4%AF%23) `81.5K 🔥` `NEW`
1. [林一回头没看见卢昱晓](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%B8%80%E5%9B%9E%E5%A4%B4%E6%B2%A1%E7%9C%8B%E8%A7%81%E5%8D%A2%E6%98%B1%E6%99%93%23) `76.7K 🔥` `NEW`
1. [25岁猫咪全记录](https://s.weibo.com/weibo?q=%2325%E5%B2%81%E7%8C%AB%E5%92%AA%E5%85%A8%E8%AE%B0%E5%BD%95%23) `69.6K 🔥` `NEW`
1. [常州暂时改名常洲](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E5%B7%9E%E6%9A%82%E6%97%B6%E6%94%B9%E5%90%8D%E5%B8%B8%E6%B4%B2%23) `1.1M 🔥` `+359%`
1. [罗生门](https://s.weibo.com/weibo?q=%23%E7%BD%97%E7%94%9F%E9%97%A8%23) `446.8K 🔥` `+105%`
1. [伊朗代表团离开巴基斯坦 (Iranian delegation leaves Pakistan)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%BB%A3%E8%A1%A8%E5%9B%A2%E7%A6%BB%E5%BC%80%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%23) `188.4K 🔥` `+24%`
1. [伊朗代表团全员黑衣](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%BB%A3%E8%A1%A8%E5%9B%A2%E5%85%A8%E5%91%98%E9%BB%91%E8%A1%A3%23) `148.4K 🔥` `+58%`
1. [郑丽文此行打脸台当局三个选择](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%BD%E6%96%87%E6%AD%A4%E8%A1%8C%E6%89%93%E8%84%B8%E5%8F%B0%E5%BD%93%E5%B1%80%E4%B8%89%E4%B8%AA%E9%80%89%E6%8B%A9%23) `67.9K 🔥` `+21%`
1. [70多款机器人跑姿大赏](https://s.weibo.com/weibo?q=%2370%E5%A4%9A%E6%AC%BE%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%B7%91%E5%A7%BF%E5%A4%A7%E8%B5%8F%23) `67.9K 🔥` `+22%`
1. [这个大国重器够重](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%AA%E5%A4%A7%E5%9B%BD%E9%87%8D%E5%99%A8%E5%A4%9F%E9%87%8D%23) `615.9K 🔥`
1. [何超蕸被赌王称为最能帮忙的女儿](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E8%95%B8%E8%A2%AB%E8%B5%8C%E7%8E%8B%E7%A7%B0%E4%B8%BA%E6%9C%80%E8%83%BD%E5%B8%AE%E5%BF%99%E7%9A%84%E5%A5%B3%E5%84%BF%23) `254.4K 🔥`
1. [郑丽文结束大陆参访离京返台](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%BD%E6%96%87%E7%BB%93%E6%9D%9F%E5%A4%A7%E9%99%86%E5%8F%82%E8%AE%BF%E7%A6%BB%E4%BA%AC%E8%BF%94%E5%8F%B0%23) `100.2K 🔥`
1. [大冰告诫年轻人不要在单位聊私事 (Dabing warns young people not to talk about private matters at work)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E5%91%8A%E8%AF%AB%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%B8%8D%E8%A6%81%E5%9C%A8%E5%8D%95%E4%BD%8D%E8%81%8A%E7%A7%81%E4%BA%8B%23) `82.5K 🔥`
1. [护住周深的常州保安火了](https://s.weibo.com/weibo?q=%23%E6%8A%A4%E4%BD%8F%E5%91%A8%E6%B7%B1%E7%9A%84%E5%B8%B8%E5%B7%9E%E4%BF%9D%E5%AE%89%E7%81%AB%E4%BA%86%23) `79.4K 🔥`
1. [钢铁森林](https://s.weibo.com/weibo?q=%23%E9%92%A2%E9%93%81%E6%A3%AE%E6%9E%97%23) `70.2K 🔥`
1. [警方通报奥迪车加油后逃单](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%A5%E8%BF%AA%E8%BD%A6%E5%8A%A0%E6%B2%B9%E5%90%8E%E9%80%83%E5%8D%95%23) `69.1K 🔥`
1. [你们俩是要毁了芒果吗 (Are you two going to destroy the mango?)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%BB%AC%E4%BF%A9%E6%98%AF%E8%A6%81%E6%AF%81%E4%BA%86%E8%8A%92%E6%9E%9C%E5%90%97%23) `745.3K 🔥` `-34%`
1. [韩国机场缉毒犬吃掉可疑蛋糕 (Drug detection dog eats suspicious cake at South Korea airport)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%9C%BA%E5%9C%BA%E7%BC%89%E6%AF%92%E7%8A%AC%E5%90%83%E6%8E%89%E5%8F%AF%E7%96%91%E8%9B%8B%E7%B3%95%23) `320.5K 🔥` `-47%`
1. [赵子琪硬刚浪姐](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E7%A1%AC%E5%88%9A%E6%B5%AA%E5%A7%90%23) `151.4K 🔥` `-30%`
1. [王濛剪蕾丝](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%89%AA%E8%95%BE%E4%B8%9D%23) `147.3K 🔥` `-32%`
1. [张杰力挺谢娜演唱会](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E5%8A%9B%E6%8C%BA%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%23) `145.7K 🔥` `-49%`
1. [妈妈替女儿申请不上早读](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E6%9B%BF%E5%A5%B3%E5%84%BF%E7%94%B3%E8%AF%B7%E4%B8%8D%E4%B8%8A%E6%97%A9%E8%AF%BB%23) `145.1K 🔥` `-25%`
1. [70多款机器人深夜竞速](https://s.weibo.com/weibo?q=%2370%E5%A4%9A%E6%AC%BE%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%B7%B1%E5%A4%9C%E7%AB%9E%E9%80%9F%23) `144.8K 🔥` `-31%`
1. [孙怡阚清子直播零互动 (Sun Yi Kan Qingzi live broadcast with zero interaction)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E9%98%9A%E6%B8%85%E5%AD%90%E7%9B%B4%E6%92%AD%E9%9B%B6%E4%BA%92%E5%8A%A8%23) `144.7K 🔥` `-32%`
1. [何超蕸去世 (He Chaogui passed away)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E8%95%B8%E5%8E%BB%E4%B8%96%23) `144.6K 🔥` `-47%`
1. [何超蕸临终前家人陪伴在侧 (He Chaogui’s family was with him before he died)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E8%95%B8%E4%B8%B4%E7%BB%88%E5%89%8D%E5%AE%B6%E4%BA%BA%E9%99%AA%E4%BC%B4%E5%9C%A8%E4%BE%A7%23) `144.4K 🔥` `-82%`
1. [何超蕸曾罕见谈与父亲何鸿燊相处](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E8%95%B8%E6%9B%BE%E7%BD%95%E8%A7%81%E8%B0%88%E4%B8%8E%E7%88%B6%E4%BA%B2%E4%BD%95%E9%B8%BF%E7%87%8A%E7%9B%B8%E5%A4%84%23) `111.8K 🔥` `-53%`
1. [杨超越 虎鲸](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%20%E8%99%8E%E9%B2%B8%23) `101.0K 🔥` `-45%`
1. [95后姑娘养6万多条毒蛇年入百万](https://s.weibo.com/weibo?q=%2395%E5%90%8E%E5%A7%91%E5%A8%98%E5%85%BB6%E4%B8%87%E5%A4%9A%E6%9D%A1%E6%AF%92%E8%9B%87%E5%B9%B4%E5%85%A5%E7%99%BE%E4%B8%87%23) `97.9K 🔥` `-45%`
1. [何宣林二公分组](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%E4%BA%8C%E5%85%AC%E5%88%86%E7%BB%84%23) `92.6K 🔥` `-55%`
1. [建议洗澡时不要总弯腰洗头 (It is recommended not to bend down all the time to wash your hair when taking a shower)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%B4%97%E6%BE%A1%E6%97%B6%E4%B8%8D%E8%A6%81%E6%80%BB%E5%BC%AF%E8%85%B0%E6%B4%97%E5%A4%B4%23) `85.7K 🔥` `-42%`
1. [马思纯发了黎吧啦 (Ma Sichun got Liba)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%80%9D%E7%BA%AF%E5%8F%91%E4%BA%86%E9%BB%8E%E5%90%A7%E5%95%A6%23) `85.0K 🔥` `-32%`
1. [王濛 色令智昏](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%20%E8%89%B2%E4%BB%A4%E6%99%BA%E6%98%8F%23) `83.5K 🔥` `-37%`
1. [极禹没有双人舞台](https://s.weibo.com/weibo?q=%23%E6%9E%81%E7%A6%B9%E6%B2%A1%E6%9C%89%E5%8F%8C%E4%BA%BA%E8%88%9E%E5%8F%B0%23) `82.2K 🔥` `-56%`
1. [高三学生学习困难去医院测出智障 (A senior high school student with learning difficulties went to the hospital to be diagnosed with mental retardation)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%89%E5%AD%A6%E7%94%9F%E5%AD%A6%E4%B9%A0%E5%9B%B0%E9%9A%BE%E5%8E%BB%E5%8C%BB%E9%99%A2%E6%B5%8B%E5%87%BA%E6%99%BA%E9%9A%9C%23) `70.6K 🔥` `-41%`
1. [宁艺卓 我再也不玩抽象了](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%20%E6%88%91%E5%86%8D%E4%B9%9F%E4%B8%8D%E7%8E%A9%E6%8A%BD%E8%B1%A1%E4%BA%86%23) `69.2K 🔥` `-37%`

Updated at 2026-04-12 17:03:22

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
