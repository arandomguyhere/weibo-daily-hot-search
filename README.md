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

1. [月鳞绮纪定档 (Moonscale Qi Ji is scheduled to be released)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E5%AE%9A%E6%A1%A3%23) `1.1M 🔥` `NEW`
1. [父母搬砖供出的博士在意遇难](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E6%90%AC%E7%A0%96%E4%BE%9B%E5%87%BA%E7%9A%84%E5%8D%9A%E5%A3%AB%E5%9C%A8%E6%84%8F%E9%81%87%E9%9A%BE%23) `772.8K 🔥` `NEW`
1. [中国人海上百米高空吊装百米叶片](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B5%B7%E4%B8%8A%E7%99%BE%E7%B1%B3%E9%AB%98%E7%A9%BA%E5%90%8A%E8%A3%85%E7%99%BE%E7%B1%B3%E5%8F%B6%E7%89%87%23) `600.3K 🔥` `NEW`
1. [鞠婧祎 待播剧](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%20%E5%BE%85%E6%92%AD%E5%89%A7%23) `551.0K 🔥` `NEW`
1. [韩国向中国14城发放十年签](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%90%91%E4%B8%AD%E5%9B%BD14%E5%9F%8E%E5%8F%91%E6%94%BE%E5%8D%81%E5%B9%B4%E7%AD%BE%23) `405.6K 🔥` `NEW`
1. [陈都灵预告15秒换了13套衣服](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E9%A2%84%E5%91%8A15%E7%A7%92%E6%8D%A2%E4%BA%8613%E5%A5%97%E8%A1%A3%E6%9C%8D%23) `362.9K 🔥` `NEW`
1. [数学考17的人学会计](https://s.weibo.com/weibo?q=%23%E6%95%B0%E5%AD%A6%E8%80%8317%E7%9A%84%E4%BA%BA%E5%AD%A6%E4%BC%9A%E8%AE%A1%23) `277.1K 🔥` `NEW`
1. [在意遇难博士床上四件套用了7年](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E6%84%8F%E9%81%87%E9%9A%BE%E5%8D%9A%E5%A3%AB%E5%BA%8A%E4%B8%8A%E5%9B%9B%E4%BB%B6%E5%A5%97%E7%94%A8%E4%BA%867%E5%B9%B4%23) `246.0K 🔥` `NEW`
1. [虎跳峡落水男子遗体打捞失败](https://s.weibo.com/weibo?q=%23%E8%99%8E%E8%B7%B3%E5%B3%A1%E8%90%BD%E6%B0%B4%E7%94%B7%E5%AD%90%E9%81%97%E4%BD%93%E6%89%93%E6%8D%9E%E5%A4%B1%E8%B4%A5%23) `214.5K 🔥` `NEW`
1. [张雪机车一战封神](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E4%B8%80%E6%88%98%E5%B0%81%E7%A5%9E%23) `214.5K 🔥` `NEW`
1. [李荣浩 打响版权维护第一枪 (Li Ronghao takes the first shot at copyright protection)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%20%E6%89%93%E5%93%8D%E7%89%88%E6%9D%83%E7%BB%B4%E6%8A%A4%E7%AC%AC%E4%B8%80%E6%9E%AA%23) `214.4K 🔥` `NEW`
1. [偶遇何穗公园遛娃](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E4%BD%95%E7%A9%97%E5%85%AC%E5%9B%AD%E9%81%9B%E5%A8%83%23) `214.4K 🔥` `NEW`
1. [鞠婧祎田嘉瑞吻戏镜头](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E7%94%B0%E5%98%89%E7%91%9E%E5%90%BB%E6%88%8F%E9%95%9C%E5%A4%B4%23) `214.2K 🔥` `NEW`
1. [伊朗导弹高速突破以色列拦截](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E9%AB%98%E9%80%9F%E7%AA%81%E7%A0%B4%E4%BB%A5%E8%89%B2%E5%88%97%E6%8B%A6%E6%88%AA%23) `214.2K 🔥` `NEW`
1. [郭敬明 审美](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%20%E5%AE%A1%E7%BE%8E%23) `214.1K 🔥` `NEW`
1. [桃黑黑网断了](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E7%BD%91%E6%96%AD%E4%BA%86%23) `179.9K 🔥` `NEW`
1. [中国成分王浆酸打破国际垄断](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%88%90%E5%88%86%E7%8E%8B%E6%B5%86%E9%85%B8%E6%89%93%E7%A0%B4%E5%9B%BD%E9%99%85%E5%9E%84%E6%96%AD%23) `179.7K 🔥` `NEW`
1. [5种炎症确认与癌症有关](https://s.weibo.com/weibo?q=%235%E7%A7%8D%E7%82%8E%E7%97%87%E7%A1%AE%E8%AE%A4%E4%B8%8E%E7%99%8C%E7%97%87%E6%9C%89%E5%85%B3%23) `179.6K 🔥` `NEW`
1. [00后女生逆袭考上985竟是病了](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E5%A5%B3%E7%94%9F%E9%80%86%E8%A2%AD%E8%80%83%E4%B8%8A985%E7%AB%9F%E6%98%AF%E7%97%85%E4%BA%86%23) `179.4K 🔥` `NEW`
1. [10部影片定档2026五一档](https://s.weibo.com/weibo?q=%2310%E9%83%A8%E5%BD%B1%E7%89%87%E5%AE%9A%E6%A1%A32026%E4%BA%94%E4%B8%80%E6%A1%A3%23) `179.1K 🔥` `NEW`
1. [白日提灯第8集30分5秒 (Lantern in the Day Episode 8 30 minutes and 5 seconds)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E7%AC%AC8%E9%9B%8630%E5%88%865%E7%A7%92%23) `176.0K 🔥` `NEW`
1. [丝芭参保人数三年内减少超200](https://s.weibo.com/weibo?q=%23%E4%B8%9D%E8%8A%AD%E5%8F%82%E4%BF%9D%E4%BA%BA%E6%95%B0%E4%B8%89%E5%B9%B4%E5%86%85%E5%87%8F%E5%B0%91%E8%B6%85200%23) `133.9K 🔥` `NEW`
1. [卜凡团播](https://s.weibo.com/weibo?q=%23%E5%8D%9C%E5%87%A1%E5%9B%A2%E6%92%AD%23) `133.2K 🔥` `NEW`
1. [让世界看到中国美妆科研主权](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E4%B8%96%E7%95%8C%E7%9C%8B%E5%88%B0%E4%B8%AD%E5%9B%BD%E7%BE%8E%E5%A6%86%E7%A7%91%E7%A0%94%E4%B8%BB%E6%9D%83%23) `132.3K 🔥` `NEW`
1. [伊朗问美以动武前霍尔木兹关闭过吗](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%97%AE%E7%BE%8E%E4%BB%A5%E5%8A%A8%E6%AD%A6%E5%89%8D%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E5%85%B3%E9%97%AD%E8%BF%87%E5%90%97%23) `132.1K 🔥` `NEW`
1. [张雪机车薪资](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E8%96%AA%E8%B5%84%23) `128.9K 🔥` `NEW`
1. [眉姐姐为嬛儿宣传新剧](https://s.weibo.com/weibo?q=%23%E7%9C%89%E5%A7%90%E5%A7%90%E4%B8%BA%E5%AC%9B%E5%84%BF%E5%AE%A3%E4%BC%A0%E6%96%B0%E5%89%A7%23) `127.5K 🔥` `NEW`
1. [王一博中国超级跑车锦标赛创纪录](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%B8%AD%E5%9B%BD%E8%B6%85%E7%BA%A7%E8%B7%91%E8%BD%A6%E9%94%A6%E6%A0%87%E8%B5%9B%E5%88%9B%E7%BA%AA%E5%BD%95%23) `124.1K 🔥` `NEW`
1. [五哈6开始就玩这么大吗](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%93%886%E5%BC%80%E5%A7%8B%E5%B0%B1%E7%8E%A9%E8%BF%99%E4%B9%88%E5%A4%A7%E5%90%97%23) `121.0K 🔥` `NEW`
1. [小米发布新一代SU7拆解视频](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%8F%91%E5%B8%83%E6%96%B0%E4%B8%80%E4%BB%A3SU7%E6%8B%86%E8%A7%A3%E8%A7%86%E9%A2%91%23) `120.9K 🔥` `NEW`
1. [小朋友的爱好能有多小众 (How niche can children’s hobbies be?)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%9C%8B%E5%8F%8B%E7%9A%84%E7%88%B1%E5%A5%BD%E8%83%BD%E6%9C%89%E5%A4%9A%E5%B0%8F%E4%BC%97%23) `118.8K 🔥` `NEW`
1. [降落伞终于有了第一条差评](https://s.weibo.com/weibo?q=%23%E9%99%8D%E8%90%BD%E4%BC%9E%E7%BB%88%E4%BA%8E%E6%9C%89%E4%BA%86%E7%AC%AC%E4%B8%80%E6%9D%A1%E5%B7%AE%E8%AF%84%23) `118.2K 🔥` `NEW`
1. [美军被曝疑在伊朗村庄布设致命地雷](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E8%A2%AB%E6%9B%9D%E7%96%91%E5%9C%A8%E4%BC%8A%E6%9C%97%E6%9D%91%E5%BA%84%E5%B8%83%E8%AE%BE%E8%87%B4%E5%91%BD%E5%9C%B0%E9%9B%B7%23) `117.5K 🔥` `NEW`
1. [刘敏涛拍完30集被扶着走](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%95%8F%E6%B6%9B%E6%8B%8D%E5%AE%8C30%E9%9B%86%E8%A2%AB%E6%89%B6%E7%9D%80%E8%B5%B0%23) `110.4K 🔥` `NEW`
1. [张雪妻子称创业最穷时为20块饭钱发愁](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%A6%BB%E5%AD%90%E7%A7%B0%E5%88%9B%E4%B8%9A%E6%9C%80%E7%A9%B7%E6%97%B6%E4%B8%BA20%E5%9D%97%E9%A5%AD%E9%92%B1%E5%8F%91%E6%84%81%23) `109.0K 🔥` `NEW`
1. [严正敦促美方彻查中国学者自杀案件](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%AD%A3%E6%95%A6%E4%BF%83%E7%BE%8E%E6%96%B9%E5%BD%BB%E6%9F%A5%E4%B8%AD%E5%9B%BD%E5%AD%A6%E8%80%85%E8%87%AA%E6%9D%80%E6%A1%88%E4%BB%B6%23) `107.9K 🔥` `NEW`
1. [在意失联川大博士遗体已找到](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E6%84%8F%E5%A4%B1%E8%81%94%E5%B7%9D%E5%A4%A7%E5%8D%9A%E5%A3%AB%E9%81%97%E4%BD%93%E5%B7%B2%E6%89%BE%E5%88%B0%23) `107.1K 🔥` `NEW`
1. [王者S43赛季战令明日上线](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85S43%E8%B5%9B%E5%AD%A3%E6%88%98%E4%BB%A4%E6%98%8E%E6%97%A5%E4%B8%8A%E7%BA%BF%23) `107.0K 🔥` `NEW`
1. [特朗普称愿结束对伊军事行动](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E6%84%BF%E7%BB%93%E6%9D%9F%E5%AF%B9%E4%BC%8A%E5%86%9B%E4%BA%8B%E8%A1%8C%E5%8A%A8%23) `103.4K 🔥` `NEW`
1. [迪丽热巴陈飞宇回应七年前首次合作](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%99%88%E9%A3%9E%E5%AE%87%E5%9B%9E%E5%BA%94%E4%B8%83%E5%B9%B4%E5%89%8D%E9%A6%96%E6%AC%A1%E5%90%88%E4%BD%9C%23) `103.1K 🔥` `NEW`
1. [人民日报评张雪 (People's Daily comments on Zhang Xue)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E5%BC%A0%E9%9B%AA%23) `98.3K 🔥` `NEW`
1. [跳楼机原唱实在是忍不下去了 (The original singer of "Jumping Machine" is really unbearable.)](https://s.weibo.com/weibo?q=%23%E8%B7%B3%E6%A5%BC%E6%9C%BA%E5%8E%9F%E5%94%B1%E5%AE%9E%E5%9C%A8%E6%98%AF%E5%BF%8D%E4%B8%8D%E4%B8%8B%E5%8E%BB%E4%BA%86%23) `214.3K 🔥`
1. [AI短剧 偷脸 (AI short drama Stealing faces)](https://s.weibo.com/weibo?q=%23AI%E7%9F%AD%E5%89%A7%20%E5%81%B7%E8%84%B8%23) `214.0K 🔥` `-81%`
1. [网友买安眠药后收到注销驾驶证短信 (Netizen receives driver’s license cancellation text message after buying sleeping pills)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E4%B9%B0%E5%AE%89%E7%9C%A0%E8%8D%AF%E5%90%8E%E6%94%B6%E5%88%B0%E6%B3%A8%E9%94%80%E9%A9%BE%E9%A9%B6%E8%AF%81%E7%9F%AD%E4%BF%A1%23) `180.1K 🔥` `-61%`
1. [何洁曾说她们公司就靠跳楼机活着](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B4%81%E6%9B%BE%E8%AF%B4%E5%A5%B9%E4%BB%AC%E5%85%AC%E5%8F%B8%E5%B0%B1%E9%9D%A0%E8%B7%B3%E6%A5%BC%E6%9C%BA%E6%B4%BB%E7%9D%80%23) `179.0K 🔥` `-28%`
1. [重庆一隧道爆炸致4死9伤](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E4%B8%80%E9%9A%A7%E9%81%93%E7%88%86%E7%82%B8%E8%87%B44%E6%AD%BB9%E4%BC%A4%23) `177.3K 🔥` `-58%`
1. [严浩翔高会更新](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E9%AB%98%E4%BC%9A%E6%9B%B4%E6%96%B0%23) `176.2K 🔥` `-26%`
1. [张凌赫赵今麦要做下一对昀牵孟绕吗](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%B5%B5%E4%BB%8A%E9%BA%A6%E8%A6%81%E5%81%9A%E4%B8%8B%E4%B8%80%E5%AF%B9%E6%98%80%E7%89%B5%E5%AD%9F%E7%BB%95%E5%90%97%23) `120.2K 🔥` `-71%`
1. [常石磊编曲](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E7%9F%B3%E7%A3%8A%E7%BC%96%E6%9B%B2%23) `113.1K 🔥` `-53%`
1. [田曦薇晒与张凌赫头纱合照](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%99%92%E4%B8%8E%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%A4%B4%E7%BA%B1%E5%90%88%E7%85%A7%23) `98.8K 🔥` `-46%`

Updated at 2026-03-31 12:09:09

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
