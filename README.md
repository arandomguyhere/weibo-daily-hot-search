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

1. [看似热量高实则巨低卡的善良食物](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E4%BC%BC%E7%83%AD%E9%87%8F%E9%AB%98%E5%AE%9E%E5%88%99%E5%B7%A8%E4%BD%8E%E5%8D%A1%E7%9A%84%E5%96%84%E8%89%AF%E9%A3%9F%E7%89%A9%23) `1.8M 🔥` `NEW`
1. [探访东北虎豹国家公园](https://s.weibo.com/weibo?q=%23%E6%8E%A2%E8%AE%BF%E4%B8%9C%E5%8C%97%E8%99%8E%E8%B1%B9%E5%9B%BD%E5%AE%B6%E5%85%AC%E5%9B%AD%23) `990.6K 🔥` `NEW`
1. [女主播揭露团播潜规则](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E4%B8%BB%E6%92%AD%E6%8F%AD%E9%9C%B2%E5%9B%A2%E6%92%AD%E6%BD%9C%E8%A7%84%E5%88%99%23) `974.3K 🔥` `NEW`
1. [多部门介入母子衣衫不整街头游荡](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E9%83%A8%E9%97%A8%E4%BB%8B%E5%85%A5%E6%AF%8D%E5%AD%90%E8%A1%A3%E8%A1%AB%E4%B8%8D%E6%95%B4%E8%A1%97%E5%A4%B4%E6%B8%B8%E8%8D%A1%23) `673.9K 🔥` `NEW`
1. [美科技股惊天大逆转](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%A7%91%E6%8A%80%E8%82%A1%E6%83%8A%E5%A4%A9%E5%A4%A7%E9%80%86%E8%BD%AC%23) `503.9K 🔥` `NEW`
1. [谁的青春没有横店](https://s.weibo.com/weibo?q=%23%E8%B0%81%E7%9A%84%E9%9D%92%E6%98%A5%E6%B2%A1%E6%9C%89%E6%A8%AA%E5%BA%97%23) `501.2K 🔥` `NEW`
1. [尚公主 剧宣](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%20%E5%89%A7%E5%AE%A3%23) `496.4K 🔥` `NEW`
1. [嫁金钗](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%23) `381.1K 🔥` `NEW`
1. [曝佛得角门将科洛科洛生涯或提前结束](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%E7%A7%91%E6%B4%9B%E7%A7%91%E6%B4%9B%E7%94%9F%E6%B6%AF%E6%88%96%E6%8F%90%E5%89%8D%E7%BB%93%E6%9D%9F%23) `381.1K 🔥` `NEW`
1. [陈妤颉回中学参加校运会](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%A4%E9%A2%89%E5%9B%9E%E4%B8%AD%E5%AD%A6%E5%8F%82%E5%8A%A0%E6%A0%A1%E8%BF%90%E4%BC%9A%23) `377.7K 🔥` `NEW`
1. [李昀锐孟子义中间只避嫌了一段时间](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%AD%9F%E5%AD%90%E4%B9%89%E4%B8%AD%E9%97%B4%E5%8F%AA%E9%81%BF%E5%AB%8C%E4%BA%86%E4%B8%80%E6%AE%B5%E6%97%B6%E9%97%B4%23) `374.0K 🔥` `NEW`
1. [易烊千玺宣布了个众所周知的事情](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%AE%A3%E5%B8%83%E4%BA%86%E4%B8%AA%E4%BC%97%E6%89%80%E5%91%A8%E7%9F%A5%E7%9A%84%E4%BA%8B%E6%83%85%23) `367.2K 🔥` `NEW`
1. [短国顶流花跟长剧女主同框](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%9B%BD%E9%A1%B6%E6%B5%81%E8%8A%B1%E8%B7%9F%E9%95%BF%E5%89%A7%E5%A5%B3%E4%B8%BB%E5%90%8C%E6%A1%86%23) `366.8K 🔥` `NEW`
1. [52岁男子出轨杀妻谎称其心梗](https://s.weibo.com/weibo?q=%2352%E5%B2%81%E7%94%B7%E5%AD%90%E5%87%BA%E8%BD%A8%E6%9D%80%E5%A6%BB%E8%B0%8E%E7%A7%B0%E5%85%B6%E5%BF%83%E6%A2%97%23) `325.9K 🔥` `NEW`
1. [黄子韬 徐艺洋](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%20%E5%BE%90%E8%89%BA%E6%B4%8B%23) `325.5K 🔥` `NEW`
1. [张月看李昀锐接孟子义下班的反应](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E7%9C%8B%E6%9D%8E%E6%98%80%E9%94%90%E6%8E%A5%E5%AD%9F%E5%AD%90%E4%B9%89%E4%B8%8B%E7%8F%AD%E7%9A%84%E5%8F%8D%E5%BA%94%23) `324.4K 🔥` `NEW`
1. [AI射雕英雄传看起来比人演得好](https://s.weibo.com/weibo?q=%23AI%E5%B0%84%E9%9B%95%E8%8B%B1%E9%9B%84%E4%BC%A0%E7%9C%8B%E8%B5%B7%E6%9D%A5%E6%AF%94%E4%BA%BA%E6%BC%94%E5%BE%97%E5%A5%BD%23) `323.4K 🔥` `NEW`
1. [赵丽颖39岁生日照](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%9639%E5%B2%81%E7%94%9F%E6%97%A5%E7%85%A7%23) `322.3K 🔥` `NEW`
1. [离婚2年前婆婆常来送吃的帮带娃](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E5%A9%9A2%E5%B9%B4%E5%89%8D%E5%A9%86%E5%A9%86%E5%B8%B8%E6%9D%A5%E9%80%81%E5%90%83%E7%9A%84%E5%B8%AE%E5%B8%A6%E5%A8%83%23) `321.4K 🔥` `NEW`
1. [医生眼中体检项目的辐射量](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E7%9C%BC%E4%B8%AD%E4%BD%93%E6%A3%80%E9%A1%B9%E7%9B%AE%E7%9A%84%E8%BE%90%E5%B0%84%E9%87%8F%23) `266.3K 🔥` `NEW`
1. [马锐发布长文为赵丽颖庆生](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%94%90%E5%8F%91%E5%B8%83%E9%95%BF%E6%96%87%E4%B8%BA%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%BA%86%E7%94%9F%23) `264.9K 🔥` `NEW`
1. [小伙空调开18度睡太死家属以为离世](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E7%A9%BA%E8%B0%83%E5%BC%8018%E5%BA%A6%E7%9D%A1%E5%A4%AA%E6%AD%BB%E5%AE%B6%E5%B1%9E%E4%BB%A5%E4%B8%BA%E7%A6%BB%E4%B8%96%23) `252.2K 🔥` `NEW`
1. [3步自查手机是否被远程监控](https://s.weibo.com/weibo?q=%233%E6%AD%A5%E8%87%AA%E6%9F%A5%E6%89%8B%E6%9C%BA%E6%98%AF%E5%90%A6%E8%A2%AB%E8%BF%9C%E7%A8%8B%E7%9B%91%E6%8E%A7%23) `194.7K 🔥` `NEW`
1. [LPL所有俱乐部均申请B签](https://s.weibo.com/weibo?q=%23LPL%E6%89%80%E6%9C%89%E4%BF%B1%E4%B9%90%E9%83%A8%E5%9D%87%E7%94%B3%E8%AF%B7B%E7%AD%BE%23) `189.8K 🔥` `NEW`
1. [杨和苏法老聊天记录](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%92%8C%E8%8B%8F%E6%B3%95%E8%80%81%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `186.9K 🔥` `NEW`
1. [真让老外在中国学到戴围巾技巧了](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E8%AE%A9%E8%80%81%E5%A4%96%E5%9C%A8%E4%B8%AD%E5%9B%BD%E5%AD%A6%E5%88%B0%E6%88%B4%E5%9B%B4%E5%B7%BE%E6%8A%80%E5%B7%A7%E4%BA%86%23) `181.2K 🔥` `NEW`
1. [李一桐新剧贡献了伟大的人生镜头](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E6%96%B0%E5%89%A7%E8%B4%A1%E7%8C%AE%E4%BA%86%E4%BC%9F%E5%A4%A7%E7%9A%84%E4%BA%BA%E7%94%9F%E9%95%9C%E5%A4%B4%23) `180.7K 🔥` `NEW`
1. [井柏然被夸后害羞的看向孙千](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E8%A2%AB%E5%A4%B8%E5%90%8E%E5%AE%B3%E7%BE%9E%E7%9A%84%E7%9C%8B%E5%90%91%E5%AD%99%E5%8D%83%23) `179.7K 🔥` `NEW`
1. [三十岁还像害怕上学一样害怕上班](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%8D%81%E5%B2%81%E8%BF%98%E5%83%8F%E5%AE%B3%E6%80%95%E4%B8%8A%E5%AD%A6%E4%B8%80%E6%A0%B7%E5%AE%B3%E6%80%95%E4%B8%8A%E7%8F%AD%23) `160.1K 🔥` `NEW`
1. [老外凌晨饿了想起在中国](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%A4%96%E5%87%8C%E6%99%A8%E9%A5%BF%E4%BA%86%E6%83%B3%E8%B5%B7%E5%9C%A8%E4%B8%AD%E5%9B%BD%23) `153.8K 🔥` `NEW`
1. [美国9月PPI远超预期](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD9%E6%9C%88PPI%E8%BF%9C%E8%B6%85%E9%A2%84%E6%9C%9F%23) `153.7K 🔥` `NEW`
1. [周洁琼不管在不在C位队友都像伴舞](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B4%81%E7%90%BC%E4%B8%8D%E7%AE%A1%E5%9C%A8%E4%B8%8D%E5%9C%A8C%E4%BD%8D%E9%98%9F%E5%8F%8B%E9%83%BD%E5%83%8F%E4%BC%B4%E8%88%9E%23) `142.8K 🔥` `NEW`
1. [虞书欣觉得没以前精力旺盛了](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%A7%89%E5%BE%97%E6%B2%A1%E4%BB%A5%E5%89%8D%E7%B2%BE%E5%8A%9B%E6%97%BA%E7%9B%9B%E4%BA%86%23) `139.1K 🔥` `NEW`
1. [Sunnee杨芸晴妈妈好转](https://s.weibo.com/weibo?q=%23Sunnee%E6%9D%A8%E8%8A%B8%E6%99%B4%E5%A6%88%E5%A6%88%E5%A5%BD%E8%BD%AC%23) `128.6K 🔥` `NEW`
1. [北上广深楼市新政全部落地](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%B8%8A%E5%B9%BF%E6%B7%B1%E6%A5%BC%E5%B8%82%E6%96%B0%E6%94%BF%E5%85%A8%E9%83%A8%E8%90%BD%E5%9C%B0%23) `117.8K 🔥` `NEW`
1. [库克连连点赞爱奇艺Duo演示](https://s.weibo.com/weibo?q=%23%E5%BA%93%E5%85%8B%E8%BF%9E%E8%BF%9E%E7%82%B9%E8%B5%9E%E7%88%B1%E5%A5%87%E8%89%BADuo%E6%BC%94%E7%A4%BA%23) `111.7K 🔥` `NEW`
1. [比亚迪电车入编公务车](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E7%94%B5%E8%BD%A6%E5%85%A5%E7%BC%96%E5%85%AC%E5%8A%A1%E8%BD%A6%23) `110.8K 🔥` `NEW`
1. [我们帮不了你的这句话太痛了](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E5%B8%AE%E4%B8%8D%E4%BA%86%E4%BD%A0%E7%9A%84%E8%BF%99%E5%8F%A5%E8%AF%9D%E5%A4%AA%E7%97%9B%E4%BA%86%23) `105.8K 🔥` `NEW`
1. [美科技股一夜反转原因](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%A7%91%E6%8A%80%E8%82%A1%E4%B8%80%E5%A4%9C%E5%8F%8D%E8%BD%AC%E5%8E%9F%E5%9B%A0%23) `104.7K 🔥` `NEW`
1. [斯瓦泰克冲击年终总决赛](https://s.weibo.com/weibo?q=%23%E6%96%AF%E7%93%A6%E6%B3%B0%E5%85%8B%E5%86%B2%E5%87%BB%E5%B9%B4%E7%BB%88%E6%80%BB%E5%86%B3%E8%B5%9B%23) `103.1K 🔥` `NEW`
1. [夫妻聊起身后事她说灰撒海里](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E8%81%8A%E8%B5%B7%E8%BA%AB%E5%90%8E%E4%BA%8B%E5%A5%B9%E8%AF%B4%E7%81%B0%E6%92%92%E6%B5%B7%E9%87%8C%23) `96.6K 🔥` `NEW`
1. [深圳全市全天禁鸣喇叭5年](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%85%A8%E5%B8%82%E5%85%A8%E5%A4%A9%E7%A6%81%E9%B8%A3%E5%96%87%E5%8F%AD5%E5%B9%B4%23) `1.6M 🔥` `+139%`
1. [黄子韬夫妇否认怀孕被指消耗信任](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E5%A4%AB%E5%A6%87%E5%90%A6%E8%AE%A4%E6%80%80%E5%AD%95%E8%A2%AB%E6%8C%87%E6%B6%88%E8%80%97%E4%BF%A1%E4%BB%BB%23) `376.1K 🔥` `+169%`
1. [央企中建七局拖欠农民工工资](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E4%BC%81%E4%B8%AD%E5%BB%BA%E4%B8%83%E5%B1%80%E6%8B%96%E6%AC%A0%E5%86%9C%E6%B0%91%E5%B7%A5%E5%B7%A5%E8%B5%84%23) `371.1K 🔥` `+157%`
1. [男子将拆迁房给继子起诉女儿要赡养费](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%B0%86%E6%8B%86%E8%BF%81%E6%88%BF%E7%BB%99%E7%BB%A7%E5%AD%90%E8%B5%B7%E8%AF%89%E5%A5%B3%E5%84%BF%E8%A6%81%E8%B5%A1%E5%85%BB%E8%B4%B9%23) `323.9K 🔥` `+128%`
1. [徐艺洋24年6月的肚子](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B24%E5%B9%B46%E6%9C%88%E7%9A%84%E8%82%9A%E5%AD%90%23) `321.8K 🔥` `+140%`
1. [不要和攻击性强的人建立关系](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E5%92%8C%E6%94%BB%E5%87%BB%E6%80%A7%E5%BC%BA%E7%9A%84%E4%BA%BA%E5%BB%BA%E7%AB%8B%E5%85%B3%E7%B3%BB%23) `214.4K 🔥` `+61%`
1. [协和专家称存肌肉越早越好](https://s.weibo.com/weibo?q=%23%E5%8D%8F%E5%92%8C%E4%B8%93%E5%AE%B6%E7%A7%B0%E5%AD%98%E8%82%8C%E8%82%89%E8%B6%8A%E6%97%A9%E8%B6%8A%E5%A5%BD%23) `196.4K 🔥` `+48%`
1. [被年轻人的装修惊呆了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%9A%84%E8%A3%85%E4%BF%AE%E6%83%8A%E5%91%86%E4%BA%86%23) `145.7K 🔥`

Updated at 2026-10-16 09:12:57

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
