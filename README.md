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

1. [一诺刷新KPL选手决赛记录 (Yinuo refreshes KPL player finals record)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E5%88%B7%E6%96%B0KPL%E9%80%89%E6%89%8B%E5%86%B3%E8%B5%9B%E8%AE%B0%E5%BD%95%23) `107.9K 🔥` `NEW`
1. [AG战胜JDG](https://s.weibo.com/weibo?q=%23AG%E6%88%98%E8%83%9CJDG%23) `40.8K 🔥` `NEW`
1. [特朗普警告台独 (Trump warns Taiwan independence)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AD%A6%E5%91%8A%E5%8F%B0%E7%8B%AC%23) `885.6K 🔥` `-52%`
1. [给阿嬷的情书](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%23) `229.9K 🔥` `-54%`
1. [中国式支付圈粉全球](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%BC%8F%E6%94%AF%E4%BB%98%E5%9C%88%E7%B2%89%E5%85%A8%E7%90%83%23) `188.8K 🔥` `-55%`
1. [万千惠点名徐梦洁](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%83%A0%E7%82%B9%E5%90%8D%E5%BE%90%E6%A2%A6%E6%B4%81%23) `174.9K 🔥` `-58%`
1. [遇到和已逝亲人很像的人是啥感觉](https://s.weibo.com/weibo?q=%23%E9%81%87%E5%88%B0%E5%92%8C%E5%B7%B2%E9%80%9D%E4%BA%B2%E4%BA%BA%E5%BE%88%E5%83%8F%E7%9A%84%E4%BA%BA%E6%98%AF%E5%95%A5%E6%84%9F%E8%A7%89%23) `128.7K 🔥` `-46%`
1. [朱孝天上节目内涵阿信](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%AD%9D%E5%A4%A9%E4%B8%8A%E8%8A%82%E7%9B%AE%E5%86%85%E6%B6%B5%E9%98%BF%E4%BF%A1%23) `102.2K 🔥` `-51%`
1. [一个很好的解压方法](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E5%BE%88%E5%A5%BD%E7%9A%84%E8%A7%A3%E5%8E%8B%E6%96%B9%E6%B3%95%23) `91.6K 🔥` `-34%`
1. [女孩盲道被撞摆拍细节露馅](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E7%9B%B2%E9%81%93%E8%A2%AB%E6%92%9E%E6%91%86%E6%8B%8D%E7%BB%86%E8%8A%82%E9%9C%B2%E9%A6%85%23) `76.8K 🔥` `-54%`
1. [戛纳电影节中国之夜](https://s.weibo.com/weibo?q=%23%E6%88%9B%E7%BA%B3%E7%94%B5%E5%BD%B1%E8%8A%82%E4%B8%AD%E5%9B%BD%E4%B9%8B%E5%A4%9C%23) `73.6K 🔥` `-57%`
1. [摆拍盲道被撞女生系百万粉丝网红 (The girl who was hit while posing on a blind road is an Internet celebrity with millions of fans)](https://s.weibo.com/weibo?q=%23%E6%91%86%E6%8B%8D%E7%9B%B2%E9%81%93%E8%A2%AB%E6%92%9E%E5%A5%B3%E7%94%9F%E7%B3%BB%E7%99%BE%E4%B8%87%E7%B2%89%E4%B8%9D%E7%BD%91%E7%BA%A2%23) `73.3K 🔥` `-79%`
1. [日本担心中美关系稳定自己被晾在一边](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%8B%85%E5%BF%83%E4%B8%AD%E7%BE%8E%E5%85%B3%E7%B3%BB%E7%A8%B3%E5%AE%9A%E8%87%AA%E5%B7%B1%E8%A2%AB%E6%99%BE%E5%9C%A8%E4%B8%80%E8%BE%B9%23) `72.8K 🔥` `-47%`
1. [暴雨大暴雨范围扩大 (Heavy rainstorms expand in scope)](https://s.weibo.com/weibo?q=%23%E6%9A%B4%E9%9B%A8%E5%A4%A7%E6%9A%B4%E9%9B%A8%E8%8C%83%E5%9B%B4%E6%89%A9%E5%A4%A7%23) `71.7K 🔥` `-48%`
1. [吴镇宇用嘴喂郝蕾吃药](https://s.weibo.com/weibo?q=%23%E5%90%B4%E9%95%87%E5%AE%87%E7%94%A8%E5%98%B4%E5%96%82%E9%83%9D%E8%95%BE%E5%90%83%E8%8D%AF%23) `71.3K 🔥` `-49%`
1. [吴艳妮100米栏13秒16](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%89%B3%E5%A6%AE100%E7%B1%B3%E6%A0%8F13%E7%A7%9216%23) `70.8K 🔥` `-48%`
1. [女子试管7年得子丈夫肺癌脑转移](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%AF%95%E7%AE%A17%E5%B9%B4%E5%BE%97%E5%AD%90%E4%B8%88%E5%A4%AB%E8%82%BA%E7%99%8C%E8%84%91%E8%BD%AC%E7%A7%BB%23) `69.8K 🔥` `-49%`
1. [郑州一火锅店露天洗菜做饭如调色盘 (A hot pot restaurant in Zhengzhou washes vegetables and cooks in the open air like a palette)](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%B7%9E%E4%B8%80%E7%81%AB%E9%94%85%E5%BA%97%E9%9C%B2%E5%A4%A9%E6%B4%97%E8%8F%9C%E5%81%9A%E9%A5%AD%E5%A6%82%E8%B0%83%E8%89%B2%E7%9B%98%23) `69.0K 🔥` `-49%`
1. [给阿嬷的情书最终票房或近20亿](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E6%9C%80%E7%BB%88%E7%A5%A8%E6%88%BF%E6%88%96%E8%BF%9120%E4%BA%BF%23) `68.7K 🔥` `-50%`
1. [清华女博士丈夫雇人抢走2岁半儿子 (The husband of a female doctor from Tsinghua University hired someone to kidnap her 2.5-year-old son)](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8D%8E%E5%A5%B3%E5%8D%9A%E5%A3%AB%E4%B8%88%E5%A4%AB%E9%9B%87%E4%BA%BA%E6%8A%A2%E8%B5%B02%E5%B2%81%E5%8D%8A%E5%84%BF%E5%AD%90%23) `66.6K 🔥` `-50%`
1. [张雪机车捷克站夺冠 (Zhang Xue won the Czech Republic Championship)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%8D%B7%E5%85%8B%E7%AB%99%E5%A4%BA%E5%86%A0%23) `64.0K 🔥` `-47%`
1. [红霉素软膏绝不能随便用](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E9%9C%89%E7%B4%A0%E8%BD%AF%E8%86%8F%E7%BB%9D%E4%B8%8D%E8%83%BD%E9%9A%8F%E4%BE%BF%E7%94%A8%23) `61.1K 🔥` `-48%`
1. [白鹿经典露齿笑 (White deer classic toothy smile)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%BB%8F%E5%85%B8%E9%9C%B2%E9%BD%BF%E7%AC%91%23) `57.9K 🔥` `-57%`
1. [单依纯大连演唱会上座率](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E5%A4%A7%E8%BF%9E%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%8A%E5%BA%A7%E7%8E%87%23) `55.3K 🔥` `-50%`
1. [招聘时的尴尬被HR轻松接住了](https://s.weibo.com/weibo?q=%23%E6%8B%9B%E8%81%98%E6%97%B6%E7%9A%84%E5%B0%B4%E5%B0%AC%E8%A2%ABHR%E8%BD%BB%E6%9D%BE%E6%8E%A5%E4%BD%8F%E4%BA%86%23) `52.8K 🔥` `-32%`
1. [减掉内脏脂肪才是减肥关键](https://s.weibo.com/weibo?q=%23%E5%87%8F%E6%8E%89%E5%86%85%E8%84%8F%E8%84%82%E8%82%AA%E6%89%8D%E6%98%AF%E5%87%8F%E8%82%A5%E5%85%B3%E9%94%AE%23) `49.8K 🔥` `-46%`
1. [田曦薇出发云南录忙忙碌碌寻宝藏2 (Tian Xiwei sets off to Yunnan to record Busy Treasure Hunt 2)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%87%BA%E5%8F%91%E4%BA%91%E5%8D%97%E5%BD%95%E5%BF%99%E5%BF%99%E7%A2%8C%E7%A2%8C%E5%AF%BB%E5%AE%9D%E8%97%8F2%23) `46.4K 🔥` `-44%`
1. [樊振东单手接球观众直呼好帅](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%8D%95%E6%89%8B%E6%8E%A5%E7%90%83%E8%A7%82%E4%BC%97%E7%9B%B4%E5%91%BC%E5%A5%BD%E5%B8%85%23) `46.4K 🔥` `-40%`
1. [主角](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `45.8K 🔥` `-44%`
1. [切尔西0比1曼城 (Chelsea 0-1 Manchester City)](https://s.weibo.com/weibo?q=%23%E5%88%87%E5%B0%94%E8%A5%BF0%E6%AF%941%E6%9B%BC%E5%9F%8E%23) `45.5K 🔥` `-59%`
1. [司美格鲁肽将限购](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E7%BE%8E%E6%A0%BC%E9%B2%81%E8%82%BD%E5%B0%86%E9%99%90%E8%B4%AD%23) `43.8K 🔥` `-44%`
1. [留学生跨国迷奸案](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%AD%A6%E7%94%9F%E8%B7%A8%E5%9B%BD%E8%BF%B7%E5%A5%B8%E6%A1%88%23) `43.1K 🔥` `-45%`
1. [邓超陈赫五哈哭了](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E9%99%88%E8%B5%AB%E4%BA%94%E5%93%88%E5%93%AD%E4%BA%86%23) `42.5K 🔥` `-51%`
1. [马尔代夫水下60米到底发生了什么 (What happened 60 meters underwater in the Maldives?)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%B0%94%E4%BB%A3%E5%A4%AB%E6%B0%B4%E4%B8%8B60%E7%B1%B3%E5%88%B0%E5%BA%95%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88%23) `42.1K 🔥` `-54%`
1. [网传三大运营商即将免月租是真的吗](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E4%B8%89%E5%A4%A7%E8%BF%90%E8%90%A5%E5%95%86%E5%8D%B3%E5%B0%86%E5%85%8D%E6%9C%88%E7%A7%9F%E6%98%AF%E7%9C%9F%E7%9A%84%E5%90%97%23) `41.9K 🔥` `-53%`
1. [宿管拦住了妈妈但没拦住爱](https://s.weibo.com/weibo?q=%23%E5%AE%BF%E7%AE%A1%E6%8B%A6%E4%BD%8F%E4%BA%86%E5%A6%88%E5%A6%88%E4%BD%86%E6%B2%A1%E6%8B%A6%E4%BD%8F%E7%88%B1%23) `41.0K 🔥` `-48%`
1. [杨紫3部作品入围金鹰奖](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB3%E9%83%A8%E4%BD%9C%E5%93%81%E5%85%A5%E5%9B%B4%E9%87%91%E9%B9%B0%E5%A5%96%23) `40.8K 🔥` `-49%`
1. [全山东最重视山姆超市之人 (The person who values ​​Sam’s Supermarket most in Shandong)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%B1%B1%E4%B8%9C%E6%9C%80%E9%87%8D%E8%A7%86%E5%B1%B1%E5%A7%86%E8%B6%85%E5%B8%82%E4%B9%8B%E4%BA%BA%23) `40.8K 🔥` `-48%`
1. [足总杯决赛](https://s.weibo.com/weibo?q=%23%E8%B6%B3%E6%80%BB%E6%9D%AF%E5%86%B3%E8%B5%9B%23) `40.8K 🔥` `-48%`
1. [算力版国家电网要来了 (The computing power version of State Grid is coming)](https://s.weibo.com/weibo?q=%23%E7%AE%97%E5%8A%9B%E7%89%88%E5%9B%BD%E5%AE%B6%E7%94%B5%E7%BD%91%E8%A6%81%E6%9D%A5%E4%BA%86%23) `40.8K 🔥` `-48%`
1. [韩红基金会去年收入7.8亿支出2.9亿](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BA%A2%E5%9F%BA%E9%87%91%E4%BC%9A%E5%8E%BB%E5%B9%B4%E6%94%B6%E5%85%A57.8%E4%BA%BF%E6%94%AF%E5%87%BA2.9%E4%BA%BF%23) `40.8K 🔥` `-48%`
1. [中南大学帅哥自曝理想型 (Handsome guy from Central South University reveals his ideal type)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%8D%97%E5%A4%A7%E5%AD%A6%E5%B8%85%E5%93%A5%E8%87%AA%E6%9B%9D%E7%90%86%E6%83%B3%E5%9E%8B%23) `40.8K 🔥` `-48%`
1. [樊振东晋级欧冠决赛](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%99%8B%E7%BA%A7%E6%AC%A7%E5%86%A0%E5%86%B3%E8%B5%9B%23) `40.8K 🔥` `-48%`
1. [方媛缺席桃花坞发布会](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AA%9B%E7%BC%BA%E5%B8%AD%E6%A1%83%E8%8A%B1%E5%9D%9E%E5%8F%91%E5%B8%83%E4%BC%9A%23) `40.7K 🔥` `-48%`
1. [JDG对战AG](https://s.weibo.com/weibo?q=%23JDG%E5%AF%B9%E6%88%98AG%23) `40.7K 🔥` `-48%`
1. [陈立农澳门演唱会嘉宾](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%AB%8B%E5%86%9C%E6%BE%B3%E9%97%A8%E6%BC%94%E5%94%B1%E4%BC%9A%E5%98%89%E5%AE%BE%23) `40.7K 🔥` `-68%`
1. [张雪机车身后4台雅马哈](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E8%BA%AB%E5%90%8E4%E5%8F%B0%E9%9B%85%E9%A9%AC%E5%93%88%23) `40.7K 🔥` `-68%`
1. [专家建议金价大跌多买小跌少买](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E5%BB%BA%E8%AE%AE%E9%87%91%E4%BB%B7%E5%A4%A7%E8%B7%8C%E5%A4%9A%E4%B9%B0%E5%B0%8F%E8%B7%8C%E5%B0%91%E4%B9%B0%23) `40.7K 🔥` `-47%`
1. [黑娃下线 (Heiwa is offline)](https://s.weibo.com/weibo?q=%23%E9%BB%91%E5%A8%83%E4%B8%8B%E7%BA%BF%23) `40.7K 🔥` `-47%`
1. [taeyoon赛后扔掉ns队服](https://s.weibo.com/weibo?q=%23taeyoon%E8%B5%9B%E5%90%8E%E6%89%94%E6%8E%89ns%E9%98%9F%E6%9C%8D%23) `40.6K 🔥` `-47%`

Updated at 2026-05-17 03:22:05

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
