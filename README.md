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

1. [中国消费者抛弃耐克比想象中更快 (Chinese consumers abandon Nike faster than expected)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B6%88%E8%B4%B9%E8%80%85%E6%8A%9B%E5%BC%83%E8%80%90%E5%85%8B%E6%AF%94%E6%83%B3%E8%B1%A1%E4%B8%AD%E6%9B%B4%E5%BF%AB%23) `1.3M 🔥` `NEW`
1. [普京称俄方同意妥协](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E7%A7%B0%E4%BF%84%E6%96%B9%E5%90%8C%E6%84%8F%E5%A6%A5%E5%8D%8F%23) `982.6K 🔥` `NEW`
1. [华为nova16系列正式开售](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAnova16%E7%B3%BB%E5%88%97%E6%AD%A3%E5%BC%8F%E5%BC%80%E5%94%AE%23) `875.2K 🔥` `NEW`
1. [二手油车价格崩盘](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E6%89%8B%E6%B2%B9%E8%BD%A6%E4%BB%B7%E6%A0%BC%E5%B4%A9%E7%9B%98%23) `809.8K 🔥` `NEW`
1. [张豆豆对孙杨说你别老想亲我](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%B1%86%E8%B1%86%E5%AF%B9%E5%AD%99%E6%9D%A8%E8%AF%B4%E4%BD%A0%E5%88%AB%E8%80%81%E6%83%B3%E4%BA%B2%E6%88%91%23) `694.3K 🔥` `NEW`
1. [曝歌手第五期补位嘉宾](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%AD%8C%E6%89%8B%E7%AC%AC%E4%BA%94%E6%9C%9F%E8%A1%A5%E4%BD%8D%E5%98%89%E5%AE%BE%23) `371.6K 🔥` `NEW`
1. [医生辟谣高考前吃鱼油可补脑提分](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E8%BE%9F%E8%B0%A3%E9%AB%98%E8%80%83%E5%89%8D%E5%90%83%E9%B1%BC%E6%B2%B9%E5%8F%AF%E8%A1%A5%E8%84%91%E6%8F%90%E5%88%86%23) `371.3K 🔥` `NEW`
1. [法国1比2科特迪瓦](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD1%E6%AF%942%E7%A7%91%E7%89%B9%E8%BF%AA%E7%93%A6%23) `370.9K 🔥` `NEW`
1. [曾沛慈回应雪人换黄灿灿](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%9B%9E%E5%BA%94%E9%9B%AA%E4%BA%BA%E6%8D%A2%E9%BB%84%E7%81%BF%E7%81%BF%23) `368.8K 🔥` `NEW`
1. [办婚礼未领证分手后男方诉返22万](https://s.weibo.com/weibo?q=%23%E5%8A%9E%E5%A9%9A%E7%A4%BC%E6%9C%AA%E9%A2%86%E8%AF%81%E5%88%86%E6%89%8B%E5%90%8E%E7%94%B7%E6%96%B9%E8%AF%89%E8%BF%9422%E4%B8%87%23) `367.1K 🔥` `NEW`
1. [普京就俄乌谈判最新表态 (Putin’s latest statement on Russia-Ukraine negotiations)](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E5%B0%B1%E4%BF%84%E4%B9%8C%E8%B0%88%E5%88%A4%E6%9C%80%E6%96%B0%E8%A1%A8%E6%80%81%23) `365.8K 🔥` `NEW`
1. [奚梦瑶晚晚婚礼审美](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E6%99%9A%E6%99%9A%E5%A9%9A%E7%A4%BC%E5%AE%A1%E7%BE%8E%23) `363.5K 🔥` `NEW`
1. [世界杯夺冠热门为何热身赛翻车](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%A4%BA%E5%86%A0%E7%83%AD%E9%97%A8%E4%B8%BA%E4%BD%95%E7%83%AD%E8%BA%AB%E8%B5%9B%E7%BF%BB%E8%BD%A6%23) `361.9K 🔥` `NEW`
1. [曾沛慈发文致歉](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%8F%91%E6%96%87%E8%87%B4%E6%AD%89%23) `359.4K 🔥` `NEW`
1. [何猷君看了一下爽文发现也不爽啊](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%8C%B7%E5%90%9B%E7%9C%8B%E4%BA%86%E4%B8%80%E4%B8%8B%E7%88%BD%E6%96%87%E5%8F%91%E7%8E%B0%E4%B9%9F%E4%B8%8D%E7%88%BD%E5%95%8A%23) `358.0K 🔥` `NEW`
1. [周深白鹿六搭](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E7%99%BD%E9%B9%BF%E5%85%AD%E6%90%AD%23) `354.0K 🔥` `NEW`
1. [浪姐强度](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%BC%BA%E5%BA%A6%23) `353.3K 🔥` `NEW`
1. [什么行为极大改善了你的心理健康](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E8%A1%8C%E4%B8%BA%E6%9E%81%E5%A4%A7%E6%94%B9%E5%96%84%E4%BA%86%E4%BD%A0%E7%9A%84%E5%BF%83%E7%90%86%E5%81%A5%E5%BA%B7%23) `350.5K 🔥` `NEW`
1. [胡先煦第一次演现偶](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6%E7%AC%AC%E4%B8%80%E6%AC%A1%E6%BC%94%E7%8E%B0%E5%81%B6%23) `349.9K 🔥` `NEW`
1. [不要相信豆包识别的野生蘑菇](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E7%9B%B8%E4%BF%A1%E8%B1%86%E5%8C%85%E8%AF%86%E5%88%AB%E7%9A%84%E9%87%8E%E7%94%9F%E8%98%91%E8%8F%87%23) `346.9K 🔥` `NEW`
1. [金秀贤与未成年金赛纶交往系不实消息 (There is untrue news about Kim Soo Hyun’s relationship with underage Kim Sae Ron)](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%A7%80%E8%B4%A4%E4%B8%8E%E6%9C%AA%E6%88%90%E5%B9%B4%E9%87%91%E8%B5%9B%E7%BA%B6%E4%BA%A4%E5%BE%80%E7%B3%BB%E4%B8%8D%E5%AE%9E%E6%B6%88%E6%81%AF%23) `345.6K 🔥` `NEW`
1. [偶遇金钟大带女儿吃饭](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E9%87%91%E9%92%9F%E5%A4%A7%E5%B8%A6%E5%A5%B3%E5%84%BF%E5%90%83%E9%A5%AD%23) `342.6K 🔥` `NEW`
1. [奚梦瑶伴娘阵容](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E4%BC%B4%E5%A8%98%E9%98%B5%E5%AE%B9%23) `339.1K 🔥` `NEW`
1. [法国上次大赛热身赛失利是输国足](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E4%B8%8A%E6%AC%A1%E5%A4%A7%E8%B5%9B%E7%83%AD%E8%BA%AB%E8%B5%9B%E5%A4%B1%E5%88%A9%E6%98%AF%E8%BE%93%E5%9B%BD%E8%B6%B3%23) `337.6K 🔥` `NEW`
1. [江语晨回应和潘玮柏传绯闻](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%E5%9B%9E%E5%BA%94%E5%92%8C%E6%BD%98%E7%8E%AE%E6%9F%8F%E4%BC%A0%E7%BB%AF%E9%97%BB%23) `335.3K 🔥` `NEW`
1. [2026高考](https://s.weibo.com/weibo?q=%232026%E9%AB%98%E8%80%83%23) `332.0K 🔥` `NEW`
1. [中国小电驴在英国卖爆了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%B0%8F%E7%94%B5%E9%A9%B4%E5%9C%A8%E8%8B%B1%E5%9B%BD%E5%8D%96%E7%88%86%E4%BA%86%23) `328.9K 🔥` `NEW`
1. [济南冰雹](https://s.weibo.com/weibo?q=%23%E6%B5%8E%E5%8D%97%E5%86%B0%E9%9B%B9%23) `328.0K 🔥` `NEW`
1. [巴西37岁女子假扮12岁女童骗收养](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF37%E5%B2%81%E5%A5%B3%E5%AD%90%E5%81%87%E6%89%AE12%E5%B2%81%E5%A5%B3%E7%AB%A5%E9%AA%97%E6%94%B6%E5%85%BB%23) `323.7K 🔥` `NEW`
1. [芒种](https://s.weibo.com/weibo?q=%23%E8%8A%92%E7%A7%8D%23) `321.4K 🔥` `NEW`
1. [李晨 被误会的心形石头 (Li Chen The Misunderstood Heart-Shaped Stone)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%A8%20%E8%A2%AB%E8%AF%AF%E4%BC%9A%E7%9A%84%E5%BF%83%E5%BD%A2%E7%9F%B3%E5%A4%B4%23) `319.3K 🔥` `NEW`
1. [程晓玥回应女儿长相](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%99%93%E7%8E%A5%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%84%BF%E9%95%BF%E7%9B%B8%23) `317.6K 🔥` `NEW`
1. [泽连斯基向普京发出公开信](https://s.weibo.com/weibo?q=%23%E6%B3%BD%E8%BF%9E%E6%96%AF%E5%9F%BA%E5%90%91%E6%99%AE%E4%BA%AC%E5%8F%91%E5%87%BA%E5%85%AC%E5%BC%80%E4%BF%A1%23) `314.6K 🔥` `NEW`
1. [朴乾旭发文道歉](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E4%B9%BE%E6%97%AD%E5%8F%91%E6%96%87%E9%81%93%E6%AD%89%23) `313.5K 🔥` `NEW`
1. [章子怡张艺谋 犟种闺女苦命爹](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%AD%90%E6%80%A1%E5%BC%A0%E8%89%BA%E8%B0%8B%20%E7%8A%9F%E7%A7%8D%E9%97%BA%E5%A5%B3%E8%8B%A6%E5%91%BD%E7%88%B9%23) `311.4K 🔥` `NEW`
1. [中国出口管制让日本急了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%87%BA%E5%8F%A3%E7%AE%A1%E5%88%B6%E8%AE%A9%E6%97%A5%E6%9C%AC%E6%80%A5%E4%BA%86%23) `307.5K 🔥` `NEW`
1. [刘亦菲一点法令纹没有](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E4%B8%80%E7%82%B9%E6%B3%95%E4%BB%A4%E7%BA%B9%E6%B2%A1%E6%9C%89%23) `307.2K 🔥` `NEW`
1. [特朗普将现身NBA总决赛G3](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%B0%86%E7%8E%B0%E8%BA%ABNBA%E6%80%BB%E5%86%B3%E8%B5%9BG3%23) `304.7K 🔥` `NEW`
1. [孙怡红裙香槟](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E7%BA%A2%E8%A3%99%E9%A6%99%E6%A7%9F%23) `302.4K 🔥` `NEW`
1. [高考加油](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%8A%A0%E6%B2%B9%23) `297.4K 🔥` `NEW`
1. [刘亦菲又自己乱剪头发了 (Liu Yifei cuts her hair randomly again)](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%8F%88%E8%87%AA%E5%B7%B1%E4%B9%B1%E5%89%AA%E5%A4%B4%E5%8F%91%E4%BA%86%23) `296.1K 🔥` `NEW`
1. [高考前这些事要再捋一遍 (I need to go through these things again before the college entrance examination.)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%89%8D%E8%BF%99%E4%BA%9B%E4%BA%8B%E8%A6%81%E5%86%8D%E6%8D%8B%E4%B8%80%E9%81%8D%23) `894.7K 🔥` `+129%`
1. [当我用拼豆拼了一整套麻将 (When I used spelling beans to play a whole set of mahjong)](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E7%94%A8%E6%8B%BC%E8%B1%86%E6%8B%BC%E4%BA%86%E4%B8%80%E6%95%B4%E5%A5%97%E9%BA%BB%E5%B0%86%23) `343.9K 🔥` `+149%`
1. [原价899的耐克降至429消费者仍不买账](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E4%BB%B7899%E7%9A%84%E8%80%90%E5%85%8B%E9%99%8D%E8%87%B3429%E6%B6%88%E8%B4%B9%E8%80%85%E4%BB%8D%E4%B8%8D%E4%B9%B0%E8%B4%A6%23) `326.4K 🔥` `+98%`
1. [好怕现实中也有人长AI这样](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E6%80%95%E7%8E%B0%E5%AE%9E%E4%B8%AD%E4%B9%9F%E6%9C%89%E4%BA%BA%E9%95%BFAI%E8%BF%99%E6%A0%B7%23) `322.7K 🔥` `+143%`
1. [用热成像偷拍小猫上厕所](https://s.weibo.com/weibo?q=%23%E7%94%A8%E7%83%AD%E6%88%90%E5%83%8F%E5%81%B7%E6%8B%8D%E5%B0%8F%E7%8C%AB%E4%B8%8A%E5%8E%95%E6%89%80%23) `309.4K 🔥` `+126%`
1. [耐克正在被消费者抛弃](https://s.weibo.com/weibo?q=%23%E8%80%90%E5%85%8B%E6%AD%A3%E5%9C%A8%E8%A2%AB%E6%B6%88%E8%B4%B9%E8%80%85%E6%8A%9B%E5%BC%83%23) `301.8K 🔥` `+125%`
1. [连扫把都受不了广东的天气了](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E6%89%AB%E6%8A%8A%E9%83%BD%E5%8F%97%E4%B8%8D%E4%BA%86%E5%B9%BF%E4%B8%9C%E7%9A%84%E5%A4%A9%E6%B0%94%E4%BA%86%23) `298.7K 🔥` `+135%`
1. [小米寻天汽车最新谍照曝光](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%AF%BB%E5%A4%A9%E6%B1%BD%E8%BD%A6%E6%9C%80%E6%96%B0%E8%B0%8D%E7%85%A7%E6%9B%9D%E5%85%89%23) `294.6K 🔥` `+126%`
1. [今天才知道潮汕不是一座城市 (Only today did I know that Chaoshan is not a city)](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%A9%E6%89%8D%E7%9F%A5%E9%81%93%E6%BD%AE%E6%B1%95%E4%B8%8D%E6%98%AF%E4%B8%80%E5%BA%A7%E5%9F%8E%E5%B8%82%23) `341.2K 🔥`
1. [日本扬言以综合国力应对中国军力](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%89%AC%E8%A8%80%E4%BB%A5%E7%BB%BC%E5%90%88%E5%9B%BD%E5%8A%9B%E5%BA%94%E5%AF%B9%E4%B8%AD%E5%9B%BD%E5%86%9B%E5%8A%9B%23) `356.2K 🔥` `-48%`
1. [快餐三巨头 摩尔定律HBM韬定律 (The Three Fast Food Giants: Moore’s Law, HBM, Tao’s Law)](https://s.weibo.com/weibo?q=%23%E5%BF%AB%E9%A4%90%E4%B8%89%E5%B7%A8%E5%A4%B4%20%E6%91%A9%E5%B0%94%E5%AE%9A%E5%BE%8BHBM%E9%9F%AC%E5%AE%9A%E5%BE%8B%23) `333.1K 🔥` `-31%`

Updated at 2026-06-05 09:31:58

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
