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

1. [千问免单卡可以买电影票了 (Qianwen free single card can now buy movie tickets)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E5%85%8D%E5%8D%95%E5%8D%A1%E5%8F%AF%E4%BB%A5%E4%B9%B0%E7%94%B5%E5%BD%B1%E7%A5%A8%E4%BA%86%23) `170.6K 🔥` `NEW`
1. [本命年才懂的仪式感](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%BD%E5%B9%B4%E6%89%8D%E6%87%82%E7%9A%84%E4%BB%AA%E5%BC%8F%E6%84%9F%23) `168.7K 🔥` `NEW`
1. [吃猪脚被卡喉10岁男孩现已去世](https://s.weibo.com/weibo?q=%23%E5%90%83%E7%8C%AA%E8%84%9A%E8%A2%AB%E5%8D%A1%E5%96%8910%E5%B2%81%E7%94%B7%E5%AD%A9%E7%8E%B0%E5%B7%B2%E5%8E%BB%E4%B8%96%23) `156.0K 🔥` `NEW`
1. [无畏祝你爱情滚滚来](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E7%A5%9D%E4%BD%A0%E7%88%B1%E6%83%85%E6%BB%9A%E6%BB%9A%E6%9D%A5%23) `155.6K 🔥` `NEW`
1. [中方将对53个非洲建交国全面零关税](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%B0%86%E5%AF%B953%E4%B8%AA%E9%9D%9E%E6%B4%B2%E5%BB%BA%E4%BA%A4%E5%9B%BD%E5%85%A8%E9%9D%A2%E9%9B%B6%E5%85%B3%E7%A8%8E%23) `115.1K 🔥` `NEW`
1. [中国AI为何再次惊艳世界](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BDAI%E4%B8%BA%E4%BD%95%E5%86%8D%E6%AC%A1%E6%83%8A%E8%89%B3%E4%B8%96%E7%95%8C%23) `114.8K 🔥` `NEW`
1. [TF家族纪录片](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%E7%BA%AA%E5%BD%95%E7%89%87%23) `114.7K 🔥` `NEW`
1. [小偷一打开门以为穿越时空了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%81%B7%E4%B8%80%E6%89%93%E5%BC%80%E9%97%A8%E4%BB%A5%E4%B8%BA%E7%A9%BF%E8%B6%8A%E6%97%B6%E7%A9%BA%E4%BA%86%23) `95.4K 🔥` `NEW`
1. [冬奥花滑教练一人执教13国16名选手](https://s.weibo.com/weibo?q=%23%E5%86%AC%E5%A5%A5%E8%8A%B1%E6%BB%91%E6%95%99%E7%BB%83%E4%B8%80%E4%BA%BA%E6%89%A7%E6%95%9913%E5%9B%BD16%E5%90%8D%E9%80%89%E6%89%8B%23) `78.8K 🔥` `NEW`
1. [洛奥乒乓运动员或兼四项](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E5%A5%A5%E4%B9%92%E4%B9%93%E8%BF%90%E5%8A%A8%E5%91%98%E6%88%96%E5%85%BC%E5%9B%9B%E9%A1%B9%23) `78.8K 🔥` `NEW`
1. [看完怪奇物语的EXO队长的观后感 (The EXO leader’s thoughts after watching Stranger Things)](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%AE%8C%E6%80%AA%E5%A5%87%E7%89%A9%E8%AF%AD%E7%9A%84EXO%E9%98%9F%E9%95%BF%E7%9A%84%E8%A7%82%E5%90%8E%E6%84%9F%23) `77.8K 🔥` `NEW`
1. [微信朋友圈的打开率下滑](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E6%9C%8B%E5%8F%8B%E5%9C%88%E7%9A%84%E6%89%93%E5%BC%80%E7%8E%87%E4%B8%8B%E6%BB%91%23) `74.0K 🔥` `NEW`
1. [春晚备播录制上班的明星](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E5%A4%87%E6%92%AD%E5%BD%95%E5%88%B6%E4%B8%8A%E7%8F%AD%E7%9A%84%E6%98%8E%E6%98%9F%23) `67.8K 🔥` `NEW`
1. [红包分组](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%8C%85%E5%88%86%E7%BB%84%23) `860.9K 🔥` `+317%`
1. [这么大的架子竟然一点官都没有 (Such a big arrogance has no official status at all)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B9%88%E5%A4%A7%E7%9A%84%E6%9E%B6%E5%AD%90%E7%AB%9F%E7%84%B6%E4%B8%80%E7%82%B9%E5%AE%98%E9%83%BD%E6%B2%A1%E6%9C%89%23) `266.7K 🔥` `+39%`
1. [汉尼拔用的是张小泉菜刀](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%B0%BC%E6%8B%94%E7%94%A8%E7%9A%84%E6%98%AF%E5%BC%A0%E5%B0%8F%E6%B3%89%E8%8F%9C%E5%88%80%23) `266.5K 🔥` `+36%`
1. [女子998买全程票变半程警方已介入](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90998%E4%B9%B0%E5%85%A8%E7%A8%8B%E7%A5%A8%E5%8F%98%E5%8D%8A%E7%A8%8B%E8%AD%A6%E6%96%B9%E5%B7%B2%E4%BB%8B%E5%85%A5%23) `220.3K 🔥` `+107%`
1. [王鹤棣让黄子韬跟徐艺洋离婚](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E8%AE%A9%E9%BB%84%E5%AD%90%E9%9F%AC%E8%B7%9F%E5%BE%90%E8%89%BA%E6%B4%8B%E7%A6%BB%E5%A9%9A%23) `199.8K 🔥` `+57%`
1. [伊能静脸太紧致了](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E8%84%B8%E5%A4%AA%E7%B4%A7%E8%87%B4%E4%BA%86%23) `194.4K 🔥` `+33%`
1. [女子称健身被哄骗注射药物变阴阳人](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E5%81%A5%E8%BA%AB%E8%A2%AB%E5%93%84%E9%AA%97%E6%B3%A8%E5%B0%84%E8%8D%AF%E7%89%A9%E5%8F%98%E9%98%B4%E9%98%B3%E4%BA%BA%23) `190.6K 🔥` `+26%`
1. [暖阳发文](https://s.weibo.com/weibo?q=%23%E6%9A%96%E9%98%B3%E5%8F%91%E6%96%87%23) `176.1K 🔥` `+28%`
1. [王一博边走边唱 (Wang Yibo sings while walking)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%BE%B9%E8%B5%B0%E8%BE%B9%E5%94%B1%23) `156.9K 🔥` `+93%`
1. [千问免单将可用于打车和充话费](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E5%85%8D%E5%8D%95%E5%B0%86%E5%8F%AF%E7%94%A8%E4%BA%8E%E6%89%93%E8%BD%A6%E5%92%8C%E5%85%85%E8%AF%9D%E8%B4%B9%23) `156.5K 🔥` `+29%`
1. [百果园回应一根甘蔗卖87元](https://s.weibo.com/weibo?q=%23%E7%99%BE%E6%9E%9C%E5%9B%AD%E5%9B%9E%E5%BA%94%E4%B8%80%E6%A0%B9%E7%94%98%E8%94%97%E5%8D%9687%E5%85%83%23) `156.4K 🔥` `+49%`
1. [小酒窝做了长美甲](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E5%81%9A%E4%BA%86%E9%95%BF%E7%BE%8E%E7%94%B2%23) `156.2K 🔥` `+75%`
1. [宋轶好刚](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E8%BD%B6%E5%A5%BD%E5%88%9A%23) `155.7K 🔥` `+75%`
1. [吃席偶遇丁程鑫](https://s.weibo.com/weibo?q=%23%E5%90%83%E5%B8%AD%E5%81%B6%E9%81%87%E4%B8%81%E7%A8%8B%E9%91%AB%23) `155.5K 🔥` `+75%`
1. [iPhone18Pro五项新功能](https://s.weibo.com/weibo?q=%23iPhone18Pro%E4%BA%94%E9%A1%B9%E6%96%B0%E5%8A%9F%E8%83%BD%23) `132.5K 🔥` `+49%`
1. [陈妍希和儿子分开过年 (Chen Yanxi and her son celebrate the New Year separately)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E5%92%8C%E5%84%BF%E5%AD%90%E5%88%86%E5%BC%80%E8%BF%87%E5%B9%B4%23) `115.9K 🔥` `+33%`
1. [宋轶无名指戴了戒指 (Song Yi wears a ring on her ring finger)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E8%BD%B6%E6%97%A0%E5%90%8D%E6%8C%87%E6%88%B4%E4%BA%86%E6%88%92%E6%8C%87%23) `115.6K 🔥` `+30%`
1. [待宰大鹅流泪主人放弃宰杀](https://s.weibo.com/weibo?q=%23%E5%BE%85%E5%AE%B0%E5%A4%A7%E9%B9%85%E6%B5%81%E6%B3%AA%E4%B8%BB%E4%BA%BA%E6%94%BE%E5%BC%83%E5%AE%B0%E6%9D%80%23) `115.3K 🔥` `+30%`
1. [网友偶遇了易烊千玺 (Netizen met Yi Yang Qianxi)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%81%B6%E9%81%87%E4%BA%86%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%23) `111.5K 🔥` `+30%`
1. [红包](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%8C%85%23) `1.2M 🔥`
1. [年夜饭送到家搜索量暴增600%](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%A4%9C%E9%A5%AD%E9%80%81%E5%88%B0%E5%AE%B6%E6%90%9C%E7%B4%A2%E9%87%8F%E6%9A%B4%E5%A2%9E600%25%23) `666.2K 🔥`
1. [哈尔滨18米雪王鸡王被连夜拆除 (The 18-meter Snow King and Chicken King in Harbin was demolished overnight)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B0%94%E6%BB%A818%E7%B1%B3%E9%9B%AA%E7%8E%8B%E9%B8%A1%E7%8E%8B%E8%A2%AB%E8%BF%9E%E5%A4%9C%E6%8B%86%E9%99%A4%23) `266.9K 🔥`
1. [2026NBA全明星 (2026 NBA All-Stars)](https://s.weibo.com/weibo?q=%232026NBA%E5%85%A8%E6%98%8E%E6%98%9F%23) `266.6K 🔥`
1. [突然发现朋友圈没人晒花了 (Suddenly I found that no one in the circle of friends was showing off their flowers.)](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E6%9C%8B%E5%8F%8B%E5%9C%88%E6%B2%A1%E4%BA%BA%E6%99%92%E8%8A%B1%E4%BA%86%23) `236.9K 🔥`
1. [情人节 (Valentine's Day)](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BA%BA%E8%8A%82%23) `168.4K 🔥`
1. [檀健次卢昱晓剧宣 (Tan Jianci and Lu Yuxiao drama announcement)](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E5%8D%A2%E6%98%B1%E6%99%93%E5%89%A7%E5%AE%A3%23) `156.8K 🔥`
1. [金靖 你为什么要来衡量我](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%20%E4%BD%A0%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E6%9D%A5%E8%A1%A1%E9%87%8F%E6%88%91%23) `94.3K 🔥`
1. [黄子韬借综艺扇了徐艺洋 (Huang Zitao used a variety show to slap Xu Yiyang)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E5%80%9F%E7%BB%BC%E8%89%BA%E6%89%87%E4%BA%86%E5%BE%90%E8%89%BA%E6%B4%8B%23) `90.8K 🔥`
1. [心理医生醍醐灌顶的人生建议 (Psychiatrist’s enlightening life advice)](https://s.weibo.com/weibo?q=%23%E5%BF%83%E7%90%86%E5%8C%BB%E7%94%9F%E9%86%8D%E9%86%90%E7%81%8C%E9%A1%B6%E7%9A%84%E4%BA%BA%E7%94%9F%E5%BB%BA%E8%AE%AE%23) `79.1K 🔥`
1. [朱志鑫 整个时代峰峻最没办法的人](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%20%E6%95%B4%E4%B8%AA%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E6%9C%80%E6%B2%A1%E5%8A%9E%E6%B3%95%E7%9A%84%E4%BA%BA%23) `79.0K 🔥`
1. [陈天润姚昱辰合照](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A4%A9%E6%B6%A6%E5%A7%9A%E6%98%B1%E8%BE%B0%E5%90%88%E7%85%A7%23) `78.8K 🔥`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `73.4K 🔥`
1. [苏新皓出镜Prada全新宣传视频 (Su Xinhao appears in Prada's new promotional video)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E5%87%BA%E9%95%9CPrada%E5%85%A8%E6%96%B0%E5%AE%A3%E4%BC%A0%E8%A7%86%E9%A2%91%23) `72.6K 🔥`
1. [泰总理与恋爱4年的女友登记结婚](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E6%80%BB%E7%90%86%E4%B8%8E%E6%81%8B%E7%88%B14%E5%B9%B4%E7%9A%84%E5%A5%B3%E5%8F%8B%E7%99%BB%E8%AE%B0%E7%BB%93%E5%A9%9A%23) `72.3K 🔥`
1. [生命树豆瓣开分8.1 (The Tree of Life Douban score is 8.1)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E8%B1%86%E7%93%A3%E5%BC%80%E5%88%868.1%23) `72.3K 🔥`
1. [白鹿王星越敖瑞鹏评论区语音](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%8E%8B%E6%98%9F%E8%B6%8A%E6%95%96%E7%91%9E%E9%B9%8F%E8%AF%84%E8%AE%BA%E5%8C%BA%E8%AF%AD%E9%9F%B3%23) `69.6K 🔥`
1. [56岁阿姨离婚后10年游43国 (56-year-old aunt traveled to 43 countries in 10 years after divorce)](https://s.weibo.com/weibo?q=%2356%E5%B2%81%E9%98%BF%E5%A7%A8%E7%A6%BB%E5%A9%9A%E5%90%8E10%E5%B9%B4%E6%B8%B843%E5%9B%BD%23) `68.0K 🔥`
1. [妈妈回应林孝埈加入中国队 (Mother responds to Lin Xiaojuan joining the Chinese team)](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%9B%9E%E5%BA%94%E6%9E%97%E5%AD%9D%E5%9F%88%E5%8A%A0%E5%85%A5%E4%B8%AD%E5%9B%BD%E9%98%9F%23) `271.5K 🔥` `-67%`

Updated at 2026-02-14 18:38:27

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
