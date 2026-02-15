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

1. [过年放假模式已开启 (New Year holiday mode is on)](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%B9%B4%E6%94%BE%E5%81%87%E6%A8%A1%E5%BC%8F%E5%B7%B2%E5%BC%80%E5%90%AF%23) `633.3K 🔥` `NEW`
1. [马年清清来送签名红包](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%B9%B4%E6%B8%85%E6%B8%85%E6%9D%A5%E9%80%81%E7%AD%BE%E5%90%8D%E7%BA%A2%E5%8C%85%23) `208.8K 🔥` `NEW`
1. [迪丽热巴六点多就起床健身](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%85%AD%E7%82%B9%E5%A4%9A%E5%B0%B1%E8%B5%B7%E5%BA%8A%E5%81%A5%E8%BA%AB%23) `207.4K 🔥` `NEW`
1. [今年的年货都是AI一手包办](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E7%9A%84%E5%B9%B4%E8%B4%A7%E9%83%BD%E6%98%AFAI%E4%B8%80%E6%89%8B%E5%8C%85%E5%8A%9E%23) `206.4K 🔥` `NEW`
1. [27岁乡村女教师相亲20次](https://s.weibo.com/weibo?q=%2327%E5%B2%81%E4%B9%A1%E6%9D%91%E5%A5%B3%E6%95%99%E5%B8%88%E7%9B%B8%E4%BA%B220%E6%AC%A1%23) `204.4K 🔥` `NEW`
1. [武林外传20年重聚互送拜年礼](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%9E%97%E5%A4%96%E4%BC%A020%E5%B9%B4%E9%87%8D%E8%81%9A%E4%BA%92%E9%80%81%E6%8B%9C%E5%B9%B4%E7%A4%BC%23) `201.3K 🔥` `NEW`
1. [大阪持刀伤人事件致1死2伤](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%98%AA%E6%8C%81%E5%88%80%E4%BC%A4%E4%BA%BA%E4%BA%8B%E4%BB%B6%E8%87%B41%E6%AD%BB2%E4%BC%A4%23) `200.7K 🔥` `NEW`
1. [冯小刚徐帆一家三口大片](https://s.weibo.com/weibo?q=%23%E5%86%AF%E5%B0%8F%E5%88%9A%E5%BE%90%E5%B8%86%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E5%A4%A7%E7%89%87%23) `196.0K 🔥` `NEW`
1. [宋威龙赵今麦抱着同一束花](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E8%B5%B5%E4%BB%8A%E9%BA%A6%E6%8A%B1%E7%9D%80%E5%90%8C%E4%B8%80%E6%9D%9F%E8%8A%B1%23) `194.4K 🔥` `NEW`
1. [Faker与Uzi迎来名人堂新成员](https://s.weibo.com/weibo?q=%23Faker%E4%B8%8EUzi%E8%BF%8E%E6%9D%A5%E5%90%8D%E4%BA%BA%E5%A0%82%E6%96%B0%E6%88%90%E5%91%98%23) `192.8K 🔥` `NEW`
1. [还以为是沈腾染头发了 (I thought it was Shen Teng who dyed his hair.)](https://s.weibo.com/weibo?q=%23%E8%BF%98%E4%BB%A5%E4%B8%BA%E6%98%AF%E6%B2%88%E8%85%BE%E6%9F%93%E5%A4%B4%E5%8F%91%E4%BA%86%23) `191.5K 🔥` `NEW`
1. [刘少昂说我们没有planB](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%B0%91%E6%98%82%E8%AF%B4%E6%88%91%E4%BB%AC%E6%B2%A1%E6%9C%89planB%23) `170.4K 🔥` `NEW`
1. [土耳其一航班上发生大规模斗殴](https://s.weibo.com/weibo?q=%23%E5%9C%9F%E8%80%B3%E5%85%B6%E4%B8%80%E8%88%AA%E7%8F%AD%E4%B8%8A%E5%8F%91%E7%94%9F%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%96%97%E6%AE%B4%23) `126.8K 🔥` `NEW`
1. [王鹤棣比马丁大十岁](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%AF%94%E9%A9%AC%E4%B8%81%E5%A4%A7%E5%8D%81%E5%B2%81%23) `119.5K 🔥` `NEW`
1. [领导只审了前2分钟文案吧](https://s.weibo.com/weibo?q=%23%E9%A2%86%E5%AF%BC%E5%8F%AA%E5%AE%A1%E4%BA%86%E5%89%8D2%E5%88%86%E9%92%9F%E6%96%87%E6%A1%88%E5%90%A7%23) `115.9K 🔥` `NEW`
1. [朱亚文白宇 卧榻之侧都睡过](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%BA%9A%E6%96%87%E7%99%BD%E5%AE%87%20%E5%8D%A7%E6%A6%BB%E4%B9%8B%E4%BE%A7%E9%83%BD%E7%9D%A1%E8%BF%87%23) `98.8K 🔥` `NEW`
1. [谷爱凌直言睡不太够想多休息](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%9B%B4%E8%A8%80%E7%9D%A1%E4%B8%8D%E5%A4%AA%E5%A4%9F%E6%83%B3%E5%A4%9A%E4%BC%91%E6%81%AF%23) `81.6K 🔥` `NEW`
1. [回忆性羞耻感](https://s.weibo.com/weibo?q=%23%E5%9B%9E%E5%BF%86%E6%80%A7%E7%BE%9E%E8%80%BB%E6%84%9F%23) `76.8K 🔥` `NEW`
1. [时代少年团活整到蛇年最后一天了](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%B4%BB%E6%95%B4%E5%88%B0%E8%9B%87%E5%B9%B4%E6%9C%80%E5%90%8E%E4%B8%80%E5%A4%A9%E4%BA%86%23) `74.4K 🔥` `NEW`
1. [武大靖说米兰一定会飘起中国红](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A4%A7%E9%9D%96%E8%AF%B4%E7%B1%B3%E5%85%B0%E4%B8%80%E5%AE%9A%E4%BC%9A%E9%A3%98%E8%B5%B7%E4%B8%AD%E5%9B%BD%E7%BA%A2%23) `65.1K 🔥` `NEW`
1. [笨笨小狗和聪明小狗 (Stupid puppy and smart puppy)](https://s.weibo.com/weibo?q=%23%E7%AC%A8%E7%AC%A8%E5%B0%8F%E7%8B%97%E5%92%8C%E8%81%AA%E6%98%8E%E5%B0%8F%E7%8B%97%23) `65.1K 🔥` `NEW`
1. [谷爱凌被迫损失1天U池训练时间](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E8%A2%AB%E8%BF%AB%E6%8D%9F%E5%A4%B11%E5%A4%A9U%E6%B1%A0%E8%AE%AD%E7%BB%83%E6%97%B6%E9%97%B4%23) `1.1M 🔥` `+706%`
1. [副省长电话被拉黑后](https://s.weibo.com/weibo?q=%23%E5%89%AF%E7%9C%81%E9%95%BF%E7%94%B5%E8%AF%9D%E8%A2%AB%E6%8B%89%E9%BB%91%E5%90%8E%23) `334.2K 🔥` `+186%`
1. [过年做美甲别窝囊](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%B9%B4%E5%81%9A%E7%BE%8E%E7%94%B2%E5%88%AB%E7%AA%9D%E5%9B%8A%23) `333.8K 🔥` `+186%`
1. [Angelababy撕拉片 权威脸蛋](https://s.weibo.com/weibo?q=%23Angelababy%E6%92%95%E6%8B%89%E7%89%87%20%E6%9D%83%E5%A8%81%E8%84%B8%E8%9B%8B%23) `210.8K 🔥` `+31%`
1. [宋威龙和新郎官有什么区别](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E5%92%8C%E6%96%B0%E9%83%8E%E5%AE%98%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB%23) `209.9K 🔥` `+122%`
1. [乡镇公务员相亲称现实有时远超感情](https://s.weibo.com/weibo?q=%23%E4%B9%A1%E9%95%87%E5%85%AC%E5%8A%A1%E5%91%98%E7%9B%B8%E4%BA%B2%E7%A7%B0%E7%8E%B0%E5%AE%9E%E6%9C%89%E6%97%B6%E8%BF%9C%E8%B6%85%E6%84%9F%E6%83%85%23) `203.7K 🔥` `+31%`
1. [郭富城王一博 法拉利遇上兰博基尼](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AF%8C%E5%9F%8E%E7%8E%8B%E4%B8%80%E5%8D%9A%20%E6%B3%95%E6%8B%89%E5%88%A9%E9%81%87%E4%B8%8A%E5%85%B0%E5%8D%9A%E5%9F%BA%E5%B0%BC%23) `202.7K 🔥` `+33%`
1. [白敬亭 宋轶](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%20%E5%AE%8B%E8%BD%B6%23) `199.3K 🔥` `+70%`
1. [迅猛龙自曝身体状况](https://s.weibo.com/weibo?q=%23%E8%BF%85%E7%8C%9B%E9%BE%99%E8%87%AA%E6%9B%9D%E8%BA%AB%E4%BD%93%E7%8A%B6%E5%86%B5%23) `197.6K 🔥` `+126%`
1. [女子左手被50吨冲床碾成泥 (A woman's left hand was crushed into mud by a 50-ton punch machine)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B7%A6%E6%89%8B%E8%A2%AB50%E5%90%A8%E5%86%B2%E5%BA%8A%E7%A2%BE%E6%88%90%E6%B3%A5%23) `196.2K 🔥` `+67%`
1. [宋轶 情侣背景](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E8%BD%B6%20%E6%83%85%E4%BE%A3%E8%83%8C%E6%99%AF%23) `191.9K 🔥` `+64%`
1. [网红99元4斤带货牛肉自称假一赔万 (Internet celebrity sells 4 pounds of beef for 99 yuan, claiming to be fake and paying 10,000 yuan)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A299%E5%85%834%E6%96%A4%E5%B8%A6%E8%B4%A7%E7%89%9B%E8%82%89%E8%87%AA%E7%A7%B0%E5%81%87%E4%B8%80%E8%B5%94%E4%B8%87%23) `175.2K 🔥` `+21%`
1. [向佐郭碧婷3岁儿子留长发](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%BD%90%E9%83%AD%E7%A2%A7%E5%A9%B73%E5%B2%81%E5%84%BF%E5%AD%90%E7%95%99%E9%95%BF%E5%8F%91%23) `168.4K 🔥` `+44%`
1. [秦昊汤唯领衔主演孔雀东南飞 (Qin Hao and Tang Wei star in Peacock Flying Southeast)](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E6%98%8A%E6%B1%A4%E5%94%AF%E9%A2%86%E8%A1%94%E4%B8%BB%E6%BC%94%E5%AD%94%E9%9B%80%E4%B8%9C%E5%8D%97%E9%A3%9E%23) `333.9K 🔥`
1. [喝牛奶开出了隐藏款勺子](https://s.weibo.com/weibo?q=%23%E5%96%9D%E7%89%9B%E5%A5%B6%E5%BC%80%E5%87%BA%E4%BA%86%E9%9A%90%E8%97%8F%E6%AC%BE%E5%8B%BA%E5%AD%90%23) `214.9K 🔥`
1. [王菲 你我经历的一刻](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%20%E4%BD%A0%E6%88%91%E7%BB%8F%E5%8E%86%E7%9A%84%E4%B8%80%E5%88%BB%23) `214.2K 🔥`
1. [外语专业大退潮曾经的王牌不香了](https://s.weibo.com/weibo?q=%23%E5%A4%96%E8%AF%AD%E4%B8%93%E4%B8%9A%E5%A4%A7%E9%80%80%E6%BD%AE%E6%9B%BE%E7%BB%8F%E7%9A%84%E7%8E%8B%E7%89%8C%E4%B8%8D%E9%A6%99%E4%BA%86%23) `212.6K 🔥`
1. [裁判无视中国队员举手示意 (The referee ignored the Chinese player’s raise of hands)](https://s.weibo.com/weibo?q=%23%E8%A3%81%E5%88%A4%E6%97%A0%E8%A7%86%E4%B8%AD%E5%9B%BD%E9%98%9F%E5%91%98%E4%B8%BE%E6%89%8B%E7%A4%BA%E6%84%8F%23) `212.5K 🔥`
1. [明星回老家也得穿省服](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%9F%E5%9B%9E%E8%80%81%E5%AE%B6%E4%B9%9F%E5%BE%97%E7%A9%BF%E7%9C%81%E6%9C%8D%23) `127.3K 🔥`
1. [白鹿7天10组物料](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF7%E5%A4%A910%E7%BB%84%E7%89%A9%E6%96%99%23) `103.5K 🔥`
1. [张凌赫超话20秒语音](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%B6%85%E8%AF%9D20%E7%A7%92%E8%AF%AD%E9%9F%B3%23) `65.1K 🔥`
1. [马年春晚部分节目单曝光](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%B9%B4%E6%98%A5%E6%99%9A%E9%83%A8%E5%88%86%E8%8A%82%E7%9B%AE%E5%8D%95%E6%9B%9D%E5%85%89%23) `799.2K 🔥` `-25%`
1. [罗小黑 (Luo Xiaohei)](https://s.weibo.com/weibo?q=%23%E7%BD%97%E5%B0%8F%E9%BB%91%23) `83.0K 🔥` `-29%`
1. [京彩闹春不打烊](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E5%BD%A9%E9%97%B9%E6%98%A5%E4%B8%8D%E6%89%93%E7%83%8A%23) `82.0K 🔥` `-87%`
1. [伤心swimming晒聊天转账记录](https://s.weibo.com/weibo?q=%23%E4%BC%A4%E5%BF%83swimming%E6%99%92%E8%81%8A%E5%A4%A9%E8%BD%AC%E8%B4%A6%E8%AE%B0%E5%BD%95%23) `81.5K 🔥` `-30%`
1. [伤心swimming发完整时间线](https://s.weibo.com/weibo?q=%23%E4%BC%A4%E5%BF%83swimming%E5%8F%91%E5%AE%8C%E6%95%B4%E6%97%B6%E9%97%B4%E7%BA%BF%23) `81.4K 🔥` `-30%`
1. [差5分钟赶上回家火车女子崩溃大哭](https://s.weibo.com/weibo?q=%23%E5%B7%AE5%E5%88%86%E9%92%9F%E8%B5%B6%E4%B8%8A%E5%9B%9E%E5%AE%B6%E7%81%AB%E8%BD%A6%E5%A5%B3%E5%AD%90%E5%B4%A9%E6%BA%83%E5%A4%A7%E5%93%AD%23) `71.0K 🔥` `-28%`
1. [上千问请你看惊蛰无声](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%8D%83%E9%97%AE%E8%AF%B7%E4%BD%A0%E7%9C%8B%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%23) `69.1K 🔥` `-32%`
1. [留几手聊葛夕上春晚](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%87%A0%E6%89%8B%E8%81%8A%E8%91%9B%E5%A4%95%E4%B8%8A%E6%98%A5%E6%99%9A%23) `69.1K 🔥` `-40%`

Updated at 2026-02-15 14:06:57

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
