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

1. [王濛在京东超市乘风破浪 (Wang Meng rides the waves in JD Supermarket)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%9C%A8%E4%BA%AC%E4%B8%9C%E8%B6%85%E5%B8%82%E4%B9%98%E9%A3%8E%E7%A0%B4%E6%B5%AA%23) `74.5K 🔥` `NEW`
1. [穆祉丞戛纳采访路透](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E6%88%9B%E7%BA%B3%E9%87%87%E8%AE%BF%E8%B7%AF%E9%80%8F%23) `30.8K 🔥` `NEW`
1. [柳州酒店住客逃出避险不敢入内](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E5%B7%9E%E9%85%92%E5%BA%97%E4%BD%8F%E5%AE%A2%E9%80%83%E5%87%BA%E9%81%BF%E9%99%A9%E4%B8%8D%E6%95%A2%E5%85%A5%E5%86%85%23) `30.8K 🔥` `NEW`
1. [美商业航天板块爆发](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%95%86%E4%B8%9A%E8%88%AA%E5%A4%A9%E6%9D%BF%E5%9D%97%E7%88%86%E5%8F%91%23) `30.8K 🔥` `NEW`
1. [记者亲历柳州再发生5.2级地震](https://s.weibo.com/weibo?q=%23%E8%AE%B0%E8%80%85%E4%BA%B2%E5%8E%86%E6%9F%B3%E5%B7%9E%E5%86%8D%E5%8F%91%E7%94%9F5.2%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `30.8K 🔥` `NEW`
1. [柳州地震震中有三层民居门户悬空](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E5%B7%9E%E5%9C%B0%E9%9C%87%E9%9C%87%E4%B8%AD%E6%9C%89%E4%B8%89%E5%B1%82%E6%B0%91%E5%B1%85%E9%97%A8%E6%88%B7%E6%82%AC%E7%A9%BA%23) `30.7K 🔥` `NEW`
1. [监狱来的妈妈单日票房超4万](https://s.weibo.com/weibo?q=%23%E7%9B%91%E7%8B%B1%E6%9D%A5%E7%9A%84%E5%A6%88%E5%A6%88%E5%8D%95%E6%97%A5%E7%A5%A8%E6%88%BF%E8%B6%854%E4%B8%87%23) `66.3K 🔥`
1. [以防你没见过遛大型犬](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E9%98%B2%E4%BD%A0%E6%B2%A1%E8%A7%81%E8%BF%87%E9%81%9B%E5%A4%A7%E5%9E%8B%E7%8A%AC%23) `60.0K 🔥`
1. [特朗普连发15张图分享中国记忆 (Trump posts 15 pictures to share memories of China)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%BF%9E%E5%8F%9115%E5%BC%A0%E5%9B%BE%E5%88%86%E4%BA%AB%E4%B8%AD%E5%9B%BD%E8%AE%B0%E5%BF%86%23) `153.7K 🔥` `-58%`
1. [长这么大终于听懂了商鞅变法](https://s.weibo.com/weibo?q=%23%E9%95%BF%E8%BF%99%E4%B9%88%E5%A4%A7%E7%BB%88%E4%BA%8E%E5%90%AC%E6%87%82%E4%BA%86%E5%95%86%E9%9E%85%E5%8F%98%E6%B3%95%23) `94.0K 🔥` `-62%`
1. [2026中国网络文明大会](https://s.weibo.com/weibo?q=%232026%E4%B8%AD%E5%9B%BD%E7%BD%91%E7%BB%9C%E6%96%87%E6%98%8E%E5%A4%A7%E4%BC%9A%23) `76.5K 🔥` `-56%`
1. [小朋友的世界是没有退路的 (There is no way out in the world of children)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%9C%8B%E5%8F%8B%E7%9A%84%E4%B8%96%E7%95%8C%E6%98%AF%E6%B2%A1%E6%9C%89%E9%80%80%E8%B7%AF%E7%9A%84%23) `67.9K 🔥` `-56%`
1. [真有人在豆包预约餐厅](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%9C%89%E4%BA%BA%E5%9C%A8%E8%B1%86%E5%8C%85%E9%A2%84%E7%BA%A6%E9%A4%90%E5%8E%85%23) `63.9K 🔥` `-53%`
1. [特朗普访华整晚都在谈台湾问题](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E5%8D%8E%E6%95%B4%E6%99%9A%E9%83%BD%E5%9C%A8%E8%B0%88%E5%8F%B0%E6%B9%BE%E9%97%AE%E9%A2%98%23) `60.6K 🔥` `-58%`
1. [本周做什么都顺的星座TOP4](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%A8%E5%81%9A%E4%BB%80%E4%B9%88%E9%83%BD%E9%A1%BA%E7%9A%84%E6%98%9F%E5%BA%A7TOP4%23) `45.2K 🔥` `-65%`
1. [王安宇一手拉田曦薇一手拉黄明昊 (Wang Anyu holds Tian Xiwei in one hand and Huang Minghao in the other)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E4%B8%80%E6%89%8B%E6%8B%89%E7%94%B0%E6%9B%A6%E8%96%87%E4%B8%80%E6%89%8B%E6%8B%89%E9%BB%84%E6%98%8E%E6%98%8A%23) `43.9K 🔥` `-65%`
1. [孙杨曾致电马云寻求人生方向](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E6%9B%BE%E8%87%B4%E7%94%B5%E9%A9%AC%E4%BA%91%E5%AF%BB%E6%B1%82%E4%BA%BA%E7%94%9F%E6%96%B9%E5%90%91%23) `43.7K 🔥` `-60%`
1. [柳州地震遇难夫妻是当地菜市场商贩](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E5%B7%9E%E5%9C%B0%E9%9C%87%E9%81%87%E9%9A%BE%E5%A4%AB%E5%A6%BB%E6%98%AF%E5%BD%93%E5%9C%B0%E8%8F%9C%E5%B8%82%E5%9C%BA%E5%95%86%E8%B4%A9%23) `43.4K 🔥` `-57%`
1. [娜塔莎无下限广告引学生模仿 (Natasha's no-limit advertisement attracts students to imitate)](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E5%A1%94%E8%8E%8E%E6%97%A0%E4%B8%8B%E9%99%90%E5%B9%BF%E5%91%8A%E5%BC%95%E5%AD%A6%E7%94%9F%E6%A8%A1%E4%BB%BF%23) `43.2K 🔥` `-58%`
1. [柳州地震的原因找到了](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E5%B7%9E%E5%9C%B0%E9%9C%87%E7%9A%84%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `42.8K 🔥` `-60%`
1. [全村62人患癌多名村民发声](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%9D%9162%E4%BA%BA%E6%82%A3%E7%99%8C%E5%A4%9A%E5%90%8D%E6%9D%91%E6%B0%91%E5%8F%91%E5%A3%B0%23) `42.7K 🔥` `-57%`
1. [台湾人疯狂批发霸王茶姬回家](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E4%BA%BA%E7%96%AF%E7%8B%82%E6%89%B9%E5%8F%91%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E5%9B%9E%E5%AE%B6%23) `42.4K 🔥` `-56%`
1. [杨子家族疯狂套现超28亿](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%AD%90%E5%AE%B6%E6%97%8F%E7%96%AF%E7%8B%82%E5%A5%97%E7%8E%B0%E8%B6%8528%E4%BA%BF%23) `42.1K 🔥` `-55%`
1. [广州震感 (Guangzhou earthquake)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E9%9C%87%E6%84%9F%23) `41.9K 🔥` `-62%`
1. [记者正吃螺狮粉碰上柳州再次地震](https://s.weibo.com/weibo?q=%23%E8%AE%B0%E8%80%85%E6%AD%A3%E5%90%83%E8%9E%BA%E7%8B%AE%E7%B2%89%E7%A2%B0%E4%B8%8A%E6%9F%B3%E5%B7%9E%E5%86%8D%E6%AC%A1%E5%9C%B0%E9%9C%87%23) `41.1K 🔥` `-64%`
1. [何老师也接受不了vip抢先看 (Teacher He can’t accept the VIP preview)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%80%81%E5%B8%88%E4%B9%9F%E6%8E%A5%E5%8F%97%E4%B8%8D%E4%BA%86vip%E6%8A%A2%E5%85%88%E7%9C%8B%23) `40.4K 🔥` `-56%`
1. [洁丽雅靠八卦营销终成烫手山芋 (Jie Liya relies on gossip marketing and eventually becomes a hot potato)](https://s.weibo.com/weibo?q=%23%E6%B4%81%E4%B8%BD%E9%9B%85%E9%9D%A0%E5%85%AB%E5%8D%A6%E8%90%A5%E9%94%80%E7%BB%88%E6%88%90%E7%83%AB%E6%89%8B%E5%B1%B1%E8%8A%8B%23) `39.2K 🔥` `-42%`
1. [主角](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `33.1K 🔥` `-49%`
1. [给阿嬷的情书 暴走老奶 (A love letter to my grandma, the runaway grandma)](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%20%E6%9A%B4%E8%B5%B0%E8%80%81%E5%A5%B6%23) `32.4K 🔥` `-54%`
1. [武汉一村庄585人62人患癌](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E4%B8%80%E6%9D%91%E5%BA%84585%E4%BA%BA62%E4%BA%BA%E6%82%A3%E7%99%8C%23) `31.4K 🔥` `-52%`
1. [给阿嬷的情书](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%23) `31.3K 🔥` `-52%`
1. [上海交大通报学生私吞竞赛奖金 (Shanghai Jiao Tong University reports that students misappropriated competition prize money)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%BA%A4%E5%A4%A7%E9%80%9A%E6%8A%A5%E5%AD%A6%E7%94%9F%E7%A7%81%E5%90%9E%E7%AB%9E%E8%B5%9B%E5%A5%96%E9%87%91%23) `31.2K 🔥` `-57%`
1. [老乡杯](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%B9%A1%E6%9D%AF%23) `30.8K 🔥` `-53%`
1. [五月天演唱会内地收官](https://s.weibo.com/weibo?q=%23%E4%BA%94%E6%9C%88%E5%A4%A9%E6%BC%94%E5%94%B1%E4%BC%9A%E5%86%85%E5%9C%B0%E6%94%B6%E5%AE%98%23) `30.8K 🔥` `-53%`
1. [家业](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%23) `30.8K 🔥` `-53%`
1. [杨紫曹磊对手戏](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%9B%B9%E7%A3%8A%E5%AF%B9%E6%89%8B%E6%88%8F%23) `30.8K 🔥` `-53%`
1. [商场举办偷吃大赛被抓罚站30秒](https://s.weibo.com/weibo?q=%23%E5%95%86%E5%9C%BA%E4%B8%BE%E5%8A%9E%E5%81%B7%E5%90%83%E5%A4%A7%E8%B5%9B%E8%A2%AB%E6%8A%93%E7%BD%9A%E7%AB%9930%E7%A7%92%23) `30.8K 🔥` `-53%`
1. [洁丽雅陷豪门狗血危机是谁输了 (Who loses when Jieliya falls into a wealthy family’s bloody crisis?)](https://s.weibo.com/weibo?q=%23%E6%B4%81%E4%B8%BD%E9%9B%85%E9%99%B7%E8%B1%AA%E9%97%A8%E7%8B%97%E8%A1%80%E5%8D%B1%E6%9C%BA%E6%98%AF%E8%B0%81%E8%BE%93%E4%BA%86%23) `30.8K 🔥` `-53%`
1. [天津高空跳伞项目发生事故两人遇难 (Two people died in accident at Tianjin skydiving project)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B4%A5%E9%AB%98%E7%A9%BA%E8%B7%B3%E4%BC%9E%E9%A1%B9%E7%9B%AE%E5%8F%91%E7%94%9F%E4%BA%8B%E6%95%85%E4%B8%A4%E4%BA%BA%E9%81%87%E9%9A%BE%23) `30.8K 🔥` `-53%`
1. [阿嬷的陈楚生来看陈楚生了](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%AC%B7%E7%9A%84%E9%99%88%E6%A5%9A%E7%94%9F%E6%9D%A5%E7%9C%8B%E9%99%88%E6%A5%9A%E7%94%9F%E4%BA%86%23) `30.8K 🔥` `-53%`
1. [A股算力龙头一字涨停](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E7%AE%97%E5%8A%9B%E9%BE%99%E5%A4%B4%E4%B8%80%E5%AD%97%E6%B6%A8%E5%81%9C%23) `30.8K 🔥` `-53%`
1. [98岁奶奶拿出了她当年的嫁妆 (98-year-old grandma took out her dowry)](https://s.weibo.com/weibo?q=%2398%E5%B2%81%E5%A5%B6%E5%A5%B6%E6%8B%BF%E5%87%BA%E4%BA%86%E5%A5%B9%E5%BD%93%E5%B9%B4%E7%9A%84%E5%AB%81%E5%A6%86%23) `30.8K 🔥` `-53%`
1. [武汉暴雨预警升级为红色](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E6%9A%B4%E9%9B%A8%E9%A2%84%E8%AD%A6%E5%8D%87%E7%BA%A7%E4%B8%BA%E7%BA%A2%E8%89%B2%23) `30.8K 🔥` `-53%`
1. [刘宇宁警官造型路透 (Police officer Liu Yuning style Reuters)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E8%AD%A6%E5%AE%98%E9%80%A0%E5%9E%8B%E8%B7%AF%E9%80%8F%23) `30.8K 🔥` `-53%`
1. [洁丽雅](https://s.weibo.com/weibo?q=%23%E6%B4%81%E4%B8%BD%E9%9B%85%23) `30.8K 🔥` `-53%`
1. [深圳震感](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E9%9C%87%E6%84%9F%23) `30.8K 🔥` `-53%`
1. [李显龙晒访华第一站](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%BE%E9%BE%99%E6%99%92%E8%AE%BF%E5%8D%8E%E7%AC%AC%E4%B8%80%E7%AB%99%23) `30.8K 🔥` `-53%`
1. [老人恶意划车被拍车主报警](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E6%81%B6%E6%84%8F%E5%88%92%E8%BD%A6%E8%A2%AB%E6%8B%8D%E8%BD%A6%E4%B8%BB%E6%8A%A5%E8%AD%A6%23) `30.8K 🔥` `-53%`
1. [刘浩存戏腔](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E6%88%8F%E8%85%94%23) `30.7K 🔥` `-53%`
1. [杨紫新剧女扮男装](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%96%B0%E5%89%A7%E5%A5%B3%E6%89%AE%E7%94%B7%E8%A3%85%23) `30.7K 🔥` `-53%`
1. [AG有你更奇妙 (AG is more wonderful with you)](https://s.weibo.com/weibo?q=%23AG%E6%9C%89%E4%BD%A0%E6%9B%B4%E5%A5%87%E5%A6%99%23) `30.7K 🔥` `-53%`

Updated at 2026-05-19 04:11:15

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
