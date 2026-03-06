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

1. [中国军队有力应对澳方挑衅滋扰 (The Chinese military effectively responds to Australian provocations and harassment)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%86%9B%E9%98%9F%E6%9C%89%E5%8A%9B%E5%BA%94%E5%AF%B9%E6%BE%B3%E6%96%B9%E6%8C%91%E8%A1%85%E6%BB%8B%E6%89%B0%23) `161.0K 🔥` `NEW`
1. [3月7日两会日程](https://s.weibo.com/weibo?q=%233%E6%9C%887%E6%97%A5%E4%B8%A4%E4%BC%9A%E6%97%A5%E7%A8%8B%23) `75.2K 🔥` `NEW`
1. [逐玉假洞房比真的还涩](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%81%87%E6%B4%9E%E6%88%BF%E6%AF%94%E7%9C%9F%E7%9A%84%E8%BF%98%E6%B6%A9%23) `46.4K 🔥` `NEW`
1. [新疆地震](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%96%86%E5%9C%B0%E9%9C%87%23) `43.5K 🔥` `NEW`
1. [王一博Giselle宋江陈都灵生图](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9AGiselle%E5%AE%8B%E6%B1%9F%E9%99%88%E9%83%BD%E7%81%B5%E7%94%9F%E5%9B%BE%23) `42.7K 🔥` `NEW`
1. [李雪琴给杨紫大冒险突袭](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%AA%E7%90%B4%E7%BB%99%E6%9D%A8%E7%B4%AB%E5%A4%A7%E5%86%92%E9%99%A9%E7%AA%81%E8%A2%AD%23) `32.9K 🔥` `NEW`
1. [西湖湛碧楼烟雨红梅太绝了](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%B9%96%E6%B9%9B%E7%A2%A7%E6%A5%BC%E7%83%9F%E9%9B%A8%E7%BA%A2%E6%A2%85%E5%A4%AA%E7%BB%9D%E4%BA%86%23) `32.1K 🔥` `NEW`
1. [镖人 (escort)](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `683.8K 🔥` `+87%`
1. [十五五规划新指标新看点 (New indicators and new highlights of the 15th Five-Year Plan)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E8%A7%84%E5%88%92%E6%96%B0%E6%8C%87%E6%A0%87%E6%96%B0%E7%9C%8B%E7%82%B9%23) `381.4K 🔥` `+32%`
1. [省委书记怒批有点小权就用到极致](https://s.weibo.com/weibo?q=%23%E7%9C%81%E5%A7%94%E4%B9%A6%E8%AE%B0%E6%80%92%E6%89%B9%E6%9C%89%E7%82%B9%E5%B0%8F%E6%9D%83%E5%B0%B1%E7%94%A8%E5%88%B0%E6%9E%81%E8%87%B4%23) `292.3K 🔥` `+53%`
1. [伊朗导弹袭击以色列最大机场 (Iranian missile attacks Israel's largest airport)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%87%BB%E4%BB%A5%E8%89%B2%E5%88%97%E6%9C%80%E5%A4%A7%E6%9C%BA%E5%9C%BA%23) `155.3K 🔥` `+100%`
1. [生命树](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%23) `142.4K 🔥` `+67%`
1. [我国初高中学生人数将排浪式达峰 (The number of middle and high school students in my country will reach its peak)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%88%9D%E9%AB%98%E4%B8%AD%E5%AD%A6%E7%94%9F%E4%BA%BA%E6%95%B0%E5%B0%86%E6%8E%92%E6%B5%AA%E5%BC%8F%E8%BE%BE%E5%B3%B0%23) `75.9K 🔥` `+109%`
1. [预计今年GDP增量超6万亿元 (GDP growth this year is expected to exceed 6 trillion yuan)](https://s.weibo.com/weibo?q=%23%E9%A2%84%E8%AE%A1%E4%BB%8A%E5%B9%B4GDP%E5%A2%9E%E9%87%8F%E8%B6%856%E4%B8%87%E4%BA%BF%E5%85%83%23) `75.8K 🔥` `+67%`
1. [伊朗大使说250年怎能挑衅3000年历史](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A4%A7%E4%BD%BF%E8%AF%B4250%E5%B9%B4%E6%80%8E%E8%83%BD%E6%8C%91%E8%A1%853000%E5%B9%B4%E5%8E%86%E5%8F%B2%23) `74.7K 🔥` `+65%`
1. [逐玉爆开 (Zhuyu explodes)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E7%88%86%E5%BC%80%23) `74.3K 🔥` `+72%`
1. [女子频繁迟到做事拖沓被确诊ADHD (A woman who was frequently late and procrastinated in doing things was diagnosed with ADHD)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%A2%91%E7%B9%81%E8%BF%9F%E5%88%B0%E5%81%9A%E4%BA%8B%E6%8B%96%E6%B2%93%E8%A2%AB%E7%A1%AE%E8%AF%8AADHD%23) `73.9K 🔥` `+72%`
1. [乒协会尊重樊振东意愿全力保障](https://s.weibo.com/weibo?q=%23%E4%B9%92%E5%8D%8F%E4%BC%9A%E5%B0%8A%E9%87%8D%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%84%8F%E6%84%BF%E5%85%A8%E5%8A%9B%E4%BF%9D%E9%9A%9C%23) `73.7K 🔥` `+75%`
1. [代表说70岁以上老人真干不动农活了 (The representative said that people over 70 years old really can’t do farm work anymore.)](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E8%A1%A8%E8%AF%B470%E5%B2%81%E4%BB%A5%E4%B8%8A%E8%80%81%E4%BA%BA%E7%9C%9F%E5%B9%B2%E4%B8%8D%E5%8A%A8%E5%86%9C%E6%B4%BB%E4%BA%86%23) `73.2K 🔥` `+26%`
1. [女子翻老盒子内藏十几张清朝地契 (Woman digs through old box to find dozens of Qing Dynasty land deeds)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%BF%BB%E8%80%81%E7%9B%92%E5%AD%90%E5%86%85%E8%97%8F%E5%8D%81%E5%87%A0%E5%BC%A0%E6%B8%85%E6%9C%9D%E5%9C%B0%E5%A5%91%23) `72.5K 🔥` `+80%`
1. [请全球通缉发明这个水枪的天才](https://s.weibo.com/weibo?q=%23%E8%AF%B7%E5%85%A8%E7%90%83%E9%80%9A%E7%BC%89%E5%8F%91%E6%98%8E%E8%BF%99%E4%B8%AA%E6%B0%B4%E6%9E%AA%E7%9A%84%E5%A4%A9%E6%89%8D%23) `72.0K 🔥` `+75%`
1. [草莓价格大大大跳水 (Strawberry prices plummet)](https://s.weibo.com/weibo?q=%23%E8%8D%89%E8%8E%93%E4%BB%B7%E6%A0%BC%E5%A4%A7%E5%A4%A7%E5%A4%A7%E8%B7%B3%E6%B0%B4%23) `72.0K 🔥` `+59%`
1. [张凌赫 配音 (Zhang Linghe dubbing)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%20%E9%85%8D%E9%9F%B3%23) `64.0K 🔥` `+66%`
1. [你好星期六 (hello saturday)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%23) `64.0K 🔥` `+97%`
1. [伊朗1吨重弹头导弹打击以色列 (Iran's 1-ton heavy warhead missile hits Israel)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%971%E5%90%A8%E9%87%8D%E5%BC%B9%E5%A4%B4%E5%AF%BC%E5%BC%B9%E6%89%93%E5%87%BB%E4%BB%A5%E8%89%B2%E5%88%97%23) `61.9K 🔥` `+74%`
1. [董璇名下公司被执行千万 (The company under Dong Xuan’s name was executed for tens of millions)](https://s.weibo.com/weibo?q=%23%E8%91%A3%E7%92%87%E5%90%8D%E4%B8%8B%E5%85%AC%E5%8F%B8%E8%A2%AB%E6%89%A7%E8%A1%8C%E5%8D%83%E4%B8%87%23) `59.6K 🔥` `+65%`
1. [王一博罗意威大秀内场状态 (Wang Yibo and Luo Yiwei show off their infield status)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%BD%97%E6%84%8F%E5%A8%81%E5%A4%A7%E7%A7%80%E5%86%85%E5%9C%BA%E7%8A%B6%E6%80%81%23) `57.6K 🔥` `+63%`
1. [伊朗发射超重型导弹为遇难学生复仇 (Iran launches super-heavy missile to avenge killed students)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E5%B0%84%E8%B6%85%E9%87%8D%E5%9E%8B%E5%AF%BC%E5%BC%B9%E4%B8%BA%E9%81%87%E9%9A%BE%E5%AD%A6%E7%94%9F%E5%A4%8D%E4%BB%87%23) `57.3K 🔥` `+65%`
1. [逐玉 截不到丑图](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E6%88%AA%E4%B8%8D%E5%88%B0%E4%B8%91%E5%9B%BE%23) `54.7K 🔥` `+46%`
1. [剩半截身体的鱼经主人照顾奇迹康复](https://s.weibo.com/weibo?q=%23%E5%89%A9%E5%8D%8A%E6%88%AA%E8%BA%AB%E4%BD%93%E7%9A%84%E9%B1%BC%E7%BB%8F%E4%B8%BB%E4%BA%BA%E7%85%A7%E9%A1%BE%E5%A5%87%E8%BF%B9%E5%BA%B7%E5%A4%8D%23) `47.6K 🔥` `+47%`
1. [Naiyou Jiaqi](https://s.weibo.com/weibo?q=%23Naiyou%20Jiaqi%23) `42.9K 🔥` `+23%`
1. [伊朗打击伊拉克库尔德地区 (Iran attacks Iraqi Kurdish region)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%89%93%E5%87%BB%E4%BC%8A%E6%8B%89%E5%85%8B%E5%BA%93%E5%B0%94%E5%BE%B7%E5%9C%B0%E5%8C%BA%23) `40.3K 🔥` `+35%`
1. [女子常熬夜上班压力大查出3种癌 (Woman who often stays up late at work and feels stressed is diagnosed with 3 types of cancer)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B8%B8%E7%86%AC%E5%A4%9C%E4%B8%8A%E7%8F%AD%E5%8E%8B%E5%8A%9B%E5%A4%A7%E6%9F%A5%E5%87%BA3%E7%A7%8D%E7%99%8C%23) `38.2K 🔥` `+30%`
1. [巴黎时装周 (paris fashion week)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%BB%8E%E6%97%B6%E8%A3%85%E5%91%A8%23) `36.7K 🔥` `+26%`
1. [字节腾讯同日抢人 (Byte and Tencent snatched people on the same day)](https://s.weibo.com/weibo?q=%23%E5%AD%97%E8%8A%82%E8%85%BE%E8%AE%AF%E5%90%8C%E6%97%A5%E6%8A%A2%E4%BA%BA%23) `33.9K 🔥` `+43%`
1. [逐玉 任豪 (Zhuyu Ren Hao)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E4%BB%BB%E8%B1%AA%23) `32.1K 🔥` `+21%`
1. [建议将天价彩礼治理纳入当地考核 (It is recommended that the management of sky-high betrothal gifts be included in local assessments)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%B0%86%E5%A4%A9%E4%BB%B7%E5%BD%A9%E7%A4%BC%E6%B2%BB%E7%90%86%E7%BA%B3%E5%85%A5%E5%BD%93%E5%9C%B0%E8%80%83%E6%A0%B8%23) `32.1K 🔥` `+36%`
1. [建议双一流本科扩招优先山河四省 (It is recommended that the four provinces of Shanxi and Jiangsu should be given priority in expanding the enrollment of double first-class undergraduates.)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%8F%8C%E4%B8%80%E6%B5%81%E6%9C%AC%E7%A7%91%E6%89%A9%E6%8B%9B%E4%BC%98%E5%85%88%E5%B1%B1%E6%B2%B3%E5%9B%9B%E7%9C%81%23) `32.1K 🔥` `+36%`
1. [周杰伦新歌要来了 (Jay Chou's new song is coming)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%B0%E6%AD%8C%E8%A6%81%E6%9D%A5%E4%BA%86%23) `32.1K 🔥` `+36%`
1. [张予曦毕雯珺 综艺 (Zhang Yuxi Bi Wenjun Variety Show)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%88%E6%9B%A6%E6%AF%95%E9%9B%AF%E7%8F%BA%20%E7%BB%BC%E8%89%BA%23) `32.1K 🔥` `+36%`
1. [六大未来产业有哪些 (What are the six future industries?)](https://s.weibo.com/weibo?q=%23%E5%85%AD%E5%A4%A7%E6%9C%AA%E6%9D%A5%E4%BA%A7%E4%B8%9A%E6%9C%89%E5%93%AA%E4%BA%9B%23) `32.1K 🔥` `+36%`
1. [穆祉丞新歌 (Mu Zhicheng's new song)](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E6%96%B0%E6%AD%8C%23) `32.1K 🔥` `+36%`
1. [檀健次直播](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E7%9B%B4%E6%92%AD%23) `32.1K 🔥` `+36%`
1. [花呗等网络消费信贷可享受贴息 (Interest discounts are available for online consumer loans such as Huabei)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%91%97%E7%AD%89%E7%BD%91%E7%BB%9C%E6%B6%88%E8%B4%B9%E4%BF%A1%E8%B4%B7%E5%8F%AF%E4%BA%AB%E5%8F%97%E8%B4%B4%E6%81%AF%23) `495.0K 🔥`
1. [专家建议女性尽早做生育力评估](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E5%BB%BA%E8%AE%AE%E5%A5%B3%E6%80%A7%E5%B0%BD%E6%97%A9%E5%81%9A%E7%94%9F%E8%82%B2%E5%8A%9B%E8%AF%84%E4%BC%B0%23) `43.2K 🔥`
1. [伊朗外长说对抗美以已是胜利 (Iran's foreign minister says confrontation with US and Israel is a victory)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A4%96%E9%95%BF%E8%AF%B4%E5%AF%B9%E6%8A%97%E7%BE%8E%E4%BB%A5%E5%B7%B2%E6%98%AF%E8%83%9C%E5%88%A9%23) `38.0K 🔥`
1. [迪丽热巴包场支持张凌赫新剧 (Dilireba booked the venue to support Zhang Linghe's new drama)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%8C%85%E5%9C%BA%E6%94%AF%E6%8C%81%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%96%B0%E5%89%A7%23) `35.7K 🔥`
1. [黄景瑜孙千 明川有知夏 (Huang Jingyu Sun Qian Mingchuan Youzhixia)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E5%AD%99%E5%8D%83%20%E6%98%8E%E5%B7%9D%E6%9C%89%E7%9F%A5%E5%A4%8F%23) `32.1K 🔥`
1. [美国土安全部长诺姆被解职 (Homeland Security Secretary Noem fired)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%9C%9F%E5%AE%89%E5%85%A8%E9%83%A8%E9%95%BF%E8%AF%BA%E5%A7%86%E8%A2%AB%E8%A7%A3%E8%81%8C%23) `32.1K 🔥`

Updated at 2026-03-07 07:15:21

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
