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

1. [春晚是第一个用上Seedance2.0的 (The Spring Festival Gala is the first to use Seedance2.0)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E6%98%AF%E7%AC%AC%E4%B8%80%E4%B8%AA%E7%94%A8%E4%B8%8ASeedance2.0%E7%9A%84%23) `178.2K 🔥` `NEW`
1. [猫 算我求你了洗洗脚吧](https://s.weibo.com/weibo?q=%23%E7%8C%AB%20%E7%AE%97%E6%88%91%E6%B1%82%E4%BD%A0%E4%BA%86%E6%B4%97%E6%B4%97%E8%84%9A%E5%90%A7%23) `167.6K 🔥` `NEW`
1. [2026红包分组](https://s.weibo.com/weibo?q=%232026%E7%BA%A2%E5%8C%85%E5%88%86%E7%BB%84%23) `159.7K 🔥` `NEW`
1. [几杯去世](https://s.weibo.com/weibo?q=%23%E5%87%A0%E6%9D%AF%E5%8E%BB%E4%B8%96%23) `118.8K 🔥` `NEW`
1. [陪宋威龙忍住什么](https://s.weibo.com/weibo?q=%23%E9%99%AA%E5%AE%8B%E5%A8%81%E9%BE%99%E5%BF%8D%E4%BD%8F%E4%BB%80%E4%B9%88%23) `118.2K 🔥` `NEW`
1. [小S小女儿长大了](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E5%B0%8F%E5%A5%B3%E5%84%BF%E9%95%BF%E5%A4%A7%E4%BA%86%23) `117.6K 🔥` `NEW`
1. [千问30元钟点房一抢而空](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE30%E5%85%83%E9%92%9F%E7%82%B9%E6%88%BF%E4%B8%80%E6%8A%A2%E8%80%8C%E7%A9%BA%23) `117.4K 🔥` `NEW`
1. [伤心swimming爆料后再怒发8条](https://s.weibo.com/weibo?q=%23%E4%BC%A4%E5%BF%83swimming%E7%88%86%E6%96%99%E5%90%8E%E5%86%8D%E6%80%92%E5%8F%918%E6%9D%A1%23) `117.4K 🔥` `NEW`
1. [中国AI改变电影制作让老外惊叹](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BDAI%E6%94%B9%E5%8F%98%E7%94%B5%E5%BD%B1%E5%88%B6%E4%BD%9C%E8%AE%A9%E8%80%81%E5%A4%96%E6%83%8A%E5%8F%B9%23) `117.0K 🔥` `NEW`
1. [建议大家千万不要一边做一边怀疑](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E4%B8%80%E8%BE%B9%E5%81%9A%E4%B8%80%E8%BE%B9%E6%80%80%E7%96%91%23) `116.9K 🔥` `NEW`
1. [千问再次激活群聊 (Qianwen activates group chat again)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E5%86%8D%E6%AC%A1%E6%BF%80%E6%B4%BB%E7%BE%A4%E8%81%8A%23) `116.6K 🔥` `NEW`
1. [春节偏财运爆表的星座](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E5%81%8F%E8%B4%A2%E8%BF%90%E7%88%86%E8%A1%A8%E7%9A%84%E6%98%9F%E5%BA%A7%23) `116.4K 🔥` `NEW`
1. [李沅禧购物视频被日本网友炎上](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B2%85%E7%A6%A7%E8%B4%AD%E7%89%A9%E8%A7%86%E9%A2%91%E8%A2%AB%E6%97%A5%E6%9C%AC%E7%BD%91%E5%8F%8B%E7%82%8E%E4%B8%8A%23) `114.2K 🔥` `NEW`
1. [小伙从成都开飞机回重庆过年](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E4%BB%8E%E6%88%90%E9%83%BD%E5%BC%80%E9%A3%9E%E6%9C%BA%E5%9B%9E%E9%87%8D%E5%BA%86%E8%BF%87%E5%B9%B4%23) `103.6K 🔥` `NEW`
1. [千问超级免单卡在闲鱼杀疯了](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E8%B6%85%E7%BA%A7%E5%85%8D%E5%8D%95%E5%8D%A1%E5%9C%A8%E9%97%B2%E9%B1%BC%E6%9D%80%E7%96%AF%E4%BA%86%23) `101.9K 🔥` `NEW`
1. [床头吵架床尾也和不了](https://s.weibo.com/weibo?q=%23%E5%BA%8A%E5%A4%B4%E5%90%B5%E6%9E%B6%E5%BA%8A%E5%B0%BE%E4%B9%9F%E5%92%8C%E4%B8%8D%E4%BA%86%23) `81.2K 🔥` `NEW`
1. [王菲春晚歌曲原唱乐队毕业于北大](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E6%98%A5%E6%99%9A%E6%AD%8C%E6%9B%B2%E5%8E%9F%E5%94%B1%E4%B9%90%E9%98%9F%E6%AF%95%E4%B8%9A%E4%BA%8E%E5%8C%97%E5%A4%A7%23) `80.6K 🔥` `NEW`
1. [章昊请把假发焊在头上](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E6%98%8A%E8%AF%B7%E6%8A%8A%E5%81%87%E5%8F%91%E7%84%8A%E5%9C%A8%E5%A4%B4%E4%B8%8A%23) `79.0K 🔥` `NEW`
1. [出去一个好留子回来一个好厨子](https://s.weibo.com/weibo?q=%23%E5%87%BA%E5%8E%BB%E4%B8%80%E4%B8%AA%E5%A5%BD%E7%95%99%E5%AD%90%E5%9B%9E%E6%9D%A5%E4%B8%80%E4%B8%AA%E5%A5%BD%E5%8E%A8%E5%AD%90%23) `71.4K 🔥` `NEW`
1. [副省长电话被拉黑后](https://s.weibo.com/weibo?q=%23%E5%89%AF%E7%9C%81%E9%95%BF%E7%94%B5%E8%AF%9D%E8%A2%AB%E6%8B%89%E9%BB%91%E5%90%8E%23) `750.0K 🔥` `+124%`
1. [差5分钟赶上回家火车女子崩溃大哭 (5 minutes before catching the train home, woman breaks down and cries)](https://s.weibo.com/weibo?q=%23%E5%B7%AE5%E5%88%86%E9%92%9F%E8%B5%B6%E4%B8%8A%E5%9B%9E%E5%AE%B6%E7%81%AB%E8%BD%A6%E5%A5%B3%E5%AD%90%E5%B4%A9%E6%BA%83%E5%A4%A7%E5%93%AD%23) `117.2K 🔥` `+65%`
1. [谷爱凌直言睡不太够想多休息](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%9B%B4%E8%A8%80%E7%9D%A1%E4%B8%8D%E5%A4%AA%E5%A4%9F%E6%83%B3%E5%A4%9A%E4%BC%91%E6%81%AF%23) `117.0K 🔥` `+43%`
1. [谷爱凌被迫损失1天U池训练时间](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E8%A2%AB%E8%BF%AB%E6%8D%9F%E5%A4%B11%E5%A4%A9U%E6%B1%A0%E8%AE%AD%E7%BB%83%E6%97%B6%E9%97%B4%23) `1.1M 🔥`
1. [过年放假模式已开启 (New Year holiday mode is on)](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%B9%B4%E6%94%BE%E5%81%87%E6%A8%A1%E5%BC%8F%E5%B7%B2%E5%BC%80%E5%90%AF%23) `604.4K 🔥`
1. [Faker与Uzi迎来名人堂新成员](https://s.weibo.com/weibo?q=%23Faker%E4%B8%8EUzi%E8%BF%8E%E6%9D%A5%E5%90%8D%E4%BA%BA%E5%A0%82%E6%96%B0%E6%88%90%E5%91%98%23) `168.4K 🔥`
1. [被用碰红包卡的人秀到了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%94%A8%E7%A2%B0%E7%BA%A2%E5%8C%85%E5%8D%A1%E7%9A%84%E4%BA%BA%E7%A7%80%E5%88%B0%E4%BA%86%23) `167.6K 🔥`
1. [土耳其一航班上发生大规模斗殴](https://s.weibo.com/weibo?q=%23%E5%9C%9F%E8%80%B3%E5%85%B6%E4%B8%80%E8%88%AA%E7%8F%AD%E4%B8%8A%E5%8F%91%E7%94%9F%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%96%97%E6%AE%B4%23) `118.5K 🔥`
1. [王鹤棣比马丁大十岁](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%AF%94%E9%A9%AC%E4%B8%81%E5%A4%A7%E5%8D%81%E5%B2%81%23) `116.7K 🔥`
1. [白鹿7天10组物料](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF7%E5%A4%A910%E7%BB%84%E7%89%A9%E6%96%99%23) `114.0K 🔥`
1. [过年做美甲别窝囊](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%B9%B4%E5%81%9A%E7%BE%8E%E7%94%B2%E5%88%AB%E7%AA%9D%E5%9B%8A%23) `166.3K 🔥` `-50%`
1. [马年春晚部分节目单曝光](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%B9%B4%E6%98%A5%E6%99%9A%E9%83%A8%E5%88%86%E8%8A%82%E7%9B%AE%E5%8D%95%E6%9B%9D%E5%85%89%23) `151.8K 🔥` `-81%`
1. [王菲 你我经历的一刻 (Faye Wong, the moment you and I experienced)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%20%E4%BD%A0%E6%88%91%E7%BB%8F%E5%8E%86%E7%9A%84%E4%B8%80%E5%88%BB%23) `118.8K 🔥` `-45%`
1. [宋威龙赵今麦抱着同一束花](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E8%B5%B5%E4%BB%8A%E9%BA%A6%E6%8A%B1%E7%9D%80%E5%90%8C%E4%B8%80%E6%9D%9F%E8%8A%B1%23) `118.8K 🔥` `-39%`
1. [Angelababy撕拉片 权威脸蛋](https://s.weibo.com/weibo?q=%23Angelababy%E6%92%95%E6%8B%89%E7%89%87%20%E6%9D%83%E5%A8%81%E8%84%B8%E8%9B%8B%23) `118.6K 🔥` `-44%`
1. [迪丽热巴六点多就起床健身](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%85%AD%E7%82%B9%E5%A4%9A%E5%B0%B1%E8%B5%B7%E5%BA%8A%E5%81%A5%E8%BA%AB%23) `118.4K 🔥` `-43%`
1. [马年清清来送签名红包](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%B9%B4%E6%B8%85%E6%B8%85%E6%9D%A5%E9%80%81%E7%AD%BE%E5%90%8D%E7%BA%A2%E5%8C%85%23) `118.4K 🔥` `-43%`
1. [郭富城王一博 法拉利遇上兰博基尼](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AF%8C%E5%9F%8E%E7%8E%8B%E4%B8%80%E5%8D%9A%20%E6%B3%95%E6%8B%89%E5%88%A9%E9%81%87%E4%B8%8A%E5%85%B0%E5%8D%9A%E5%9F%BA%E5%B0%BC%23) `118.1K 🔥` `-42%`
1. [大阪持刀伤人事件致1死2伤](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%98%AA%E6%8C%81%E5%88%80%E4%BC%A4%E4%BA%BA%E4%BA%8B%E4%BB%B6%E8%87%B41%E6%AD%BB2%E4%BC%A4%23) `118.0K 🔥` `-41%`
1. [外语专业大退潮曾经的王牌不香了](https://s.weibo.com/weibo?q=%23%E5%A4%96%E8%AF%AD%E4%B8%93%E4%B8%9A%E5%A4%A7%E9%80%80%E6%BD%AE%E6%9B%BE%E7%BB%8F%E7%9A%84%E7%8E%8B%E7%89%8C%E4%B8%8D%E9%A6%99%E4%BA%86%23) `118.0K 🔥` `-45%`
1. [喝牛奶开出了隐藏款勺子](https://s.weibo.com/weibo?q=%23%E5%96%9D%E7%89%9B%E5%A5%B6%E5%BC%80%E5%87%BA%E4%BA%86%E9%9A%90%E8%97%8F%E6%AC%BE%E5%8B%BA%E5%AD%90%23) `117.8K 🔥` `-45%`
1. [白敬亭 宋轶](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%20%E5%AE%8B%E8%BD%B6%23) `117.8K 🔥` `-41%`
1. [27岁乡村女教师相亲20次 (A 27-year-old rural female teacher went on blind dates 20 times)](https://s.weibo.com/weibo?q=%2327%E5%B2%81%E4%B9%A1%E6%9D%91%E5%A5%B3%E6%95%99%E5%B8%88%E7%9B%B8%E4%BA%B220%E6%AC%A1%23) `117.5K 🔥` `-43%`
1. [宋轶 情侣背景](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E8%BD%B6%20%E6%83%85%E4%BE%A3%E8%83%8C%E6%99%AF%23) `117.3K 🔥` `-39%`
1. [乡镇公务员相亲称现实有时远超感情](https://s.weibo.com/weibo?q=%23%E4%B9%A1%E9%95%87%E5%85%AC%E5%8A%A1%E5%91%98%E7%9B%B8%E4%BA%B2%E7%A7%B0%E7%8E%B0%E5%AE%9E%E6%9C%89%E6%97%B6%E8%BF%9C%E8%B6%85%E6%84%9F%E6%83%85%23) `116.8K 🔥` `-43%`
1. [迅猛龙自曝身体状况](https://s.weibo.com/weibo?q=%23%E8%BF%85%E7%8C%9B%E9%BE%99%E8%87%AA%E6%9B%9D%E8%BA%AB%E4%BD%93%E7%8A%B6%E5%86%B5%23) `116.5K 🔥` `-41%`
1. [冯小刚徐帆一家三口大片](https://s.weibo.com/weibo?q=%23%E5%86%AF%E5%B0%8F%E5%88%9A%E5%BE%90%E5%B8%86%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E5%A4%A7%E7%89%87%23) `100.7K 🔥` `-49%`
1. [女子左手被50吨冲床碾成泥 (A woman's left hand was crushed into mud by a 50-ton punch machine)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B7%A6%E6%89%8B%E8%A2%AB50%E5%90%A8%E5%86%B2%E5%BA%8A%E7%A2%BE%E6%88%90%E6%B3%A5%23) `98.0K 🔥` `-50%`
1. [秦昊汤唯领衔主演孔雀东南飞 (Qin Hao and Tang Wei star in Peacock Flying Southeast)](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E6%98%8A%E6%B1%A4%E5%94%AF%E9%A2%86%E8%A1%94%E4%B8%BB%E6%BC%94%E5%AD%94%E9%9B%80%E4%B8%9C%E5%8D%97%E9%A3%9E%23) `92.2K 🔥` `-72%`
1. [今年的年货都是AI一手包办](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E7%9A%84%E5%B9%B4%E8%B4%A7%E9%83%BD%E6%98%AFAI%E4%B8%80%E6%89%8B%E5%8C%85%E5%8A%9E%23) `79.1K 🔥` `-62%`
1. [还以为是沈腾染头发了 (I thought it was Shen Teng who dyed his hair.)](https://s.weibo.com/weibo?q=%23%E8%BF%98%E4%BB%A5%E4%B8%BA%E6%98%AF%E6%B2%88%E8%85%BE%E6%9F%93%E5%A4%B4%E5%8F%91%E4%BA%86%23) `73.8K 🔥` `-61%`
1. [裁判无视中国队员举手示意 (The referee ignored the Chinese player’s raise of hands)](https://s.weibo.com/weibo?q=%23%E8%A3%81%E5%88%A4%E6%97%A0%E8%A7%86%E4%B8%AD%E5%9B%BD%E9%98%9F%E5%91%98%E4%B8%BE%E6%89%8B%E7%A4%BA%E6%84%8F%23) `67.4K 🔥` `-68%`

Updated at 2026-02-15 15:06:24

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
