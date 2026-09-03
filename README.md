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

1. [铭记81年前的伟大胜利](https://s.weibo.com/weibo?q=%23%E9%93%AD%E8%AE%B081%E5%B9%B4%E5%89%8D%E7%9A%84%E4%BC%9F%E5%A4%A7%E8%83%9C%E5%88%A9%23) `906.9K 🔥` `NEW`
1. [奇瑞捷豹路虎神行者8盛大上市](https://s.weibo.com/weibo?q=%23%E5%A5%87%E7%91%9E%E6%8D%B7%E8%B1%B9%E8%B7%AF%E8%99%8E%E7%A5%9E%E8%A1%8C%E8%80%858%E7%9B%9B%E5%A4%A7%E4%B8%8A%E5%B8%82%23) `906.9K 🔥` `NEW`
1. [宁静 这几块料怎么可能打架](https://s.weibo.com/weibo?q=%23%E5%AE%81%E9%9D%99%20%E8%BF%99%E5%87%A0%E5%9D%97%E6%96%99%E6%80%8E%E4%B9%88%E5%8F%AF%E8%83%BD%E6%89%93%E6%9E%B6%23) `906.0K 🔥` `NEW`
1. [葫芦娃爷爷 失独家庭](https://s.weibo.com/weibo?q=%23%E8%91%AB%E8%8A%A6%E5%A8%83%E7%88%B7%E7%88%B7%20%E5%A4%B1%E7%8B%AC%E5%AE%B6%E5%BA%AD%23) `903.3K 🔥` `NEW`
1. [重案六组 新娘素颜警察全妆](https://s.weibo.com/weibo?q=%23%E9%87%8D%E6%A1%88%E5%85%AD%E7%BB%84%20%E6%96%B0%E5%A8%98%E7%B4%A0%E9%A2%9C%E8%AD%A6%E5%AF%9F%E5%85%A8%E5%A6%86%23) `600.5K 🔥` `NEW`
1. [深圳小学午休椅火了](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%B0%8F%E5%AD%A6%E5%8D%88%E4%BC%91%E6%A4%85%E7%81%AB%E4%BA%86%23) `487.8K 🔥` `NEW`
1. [保定卫健委已成立专班调查](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%AE%9A%E5%8D%AB%E5%81%A5%E5%A7%94%E5%B7%B2%E6%88%90%E7%AB%8B%E4%B8%93%E7%8F%AD%E8%B0%83%E6%9F%A5%23) `481.9K 🔥` `NEW`
1. [1991年前生人不能新办理40年期房贷](https://s.weibo.com/weibo?q=%231991%E5%B9%B4%E5%89%8D%E7%94%9F%E4%BA%BA%E4%B8%8D%E8%83%BD%E6%96%B0%E5%8A%9E%E7%90%8640%E5%B9%B4%E6%9C%9F%E6%88%BF%E8%B4%B7%23) `476.8K 🔥` `NEW`
1. [官方通报家长自称纪委书记求关照](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%AE%B6%E9%95%BF%E8%87%AA%E7%A7%B0%E7%BA%AA%E5%A7%94%E4%B9%A6%E8%AE%B0%E6%B1%82%E5%85%B3%E7%85%A7%23) `432.1K 🔥` `NEW`
1. [曝一年级马皓轩进了少管所](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%B8%80%E5%B9%B4%E7%BA%A7%E9%A9%AC%E7%9A%93%E8%BD%A9%E8%BF%9B%E4%BA%86%E5%B0%91%E7%AE%A1%E6%89%80%23) `401.7K 🔥` `NEW`
1. [曝iPhoneUltra无折痕失败](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhoneUltra%E6%97%A0%E6%8A%98%E7%97%95%E5%A4%B1%E8%B4%A5%23) `376.3K 🔥` `NEW`
1. [宁静说花少2坏的你们看不出来](https://s.weibo.com/weibo?q=%23%E5%AE%81%E9%9D%99%E8%AF%B4%E8%8A%B1%E5%B0%912%E5%9D%8F%E7%9A%84%E4%BD%A0%E4%BB%AC%E7%9C%8B%E4%B8%8D%E5%87%BA%E6%9D%A5%23) `355.7K 🔥` `NEW`
1. [奥利改名了](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%88%A9%E6%94%B9%E5%90%8D%E4%BA%86%23) `332.4K 🔥` `NEW`
1. [运气好的人最大的特点](https://s.weibo.com/weibo?q=%23%E8%BF%90%E6%B0%94%E5%A5%BD%E7%9A%84%E4%BA%BA%E6%9C%80%E5%A4%A7%E7%9A%84%E7%89%B9%E7%82%B9%23) `325.0K 🔥` `NEW`
1. [孙千 升咖](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%20%E5%8D%87%E5%92%96%23) `323.9K 🔥` `NEW`
1. [曝字节获近300亿美元贷款](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%AD%97%E8%8A%82%E8%8E%B7%E8%BF%91300%E4%BA%BF%E7%BE%8E%E5%85%83%E8%B4%B7%E6%AC%BE%23) `323.1K 🔥` `NEW`
1. [请朴彩英代言的是哪个奶茶](https://s.weibo.com/weibo?q=%23%E8%AF%B7%E6%9C%B4%E5%BD%A9%E8%8B%B1%E4%BB%A3%E8%A8%80%E7%9A%84%E6%98%AF%E5%93%AA%E4%B8%AA%E5%A5%B6%E8%8C%B6%23) `322.1K 🔥` `NEW`
1. [法院拍卖两头海豚需买家自提自运](https://s.weibo.com/weibo?q=%23%E6%B3%95%E9%99%A2%E6%8B%8D%E5%8D%96%E4%B8%A4%E5%A4%B4%E6%B5%B7%E8%B1%9A%E9%9C%80%E4%B9%B0%E5%AE%B6%E8%87%AA%E6%8F%90%E8%87%AA%E8%BF%90%23) `320.3K 🔥` `NEW`
1. [如是书院内部环境曝光](https://s.weibo.com/weibo?q=%23%E5%A6%82%E6%98%AF%E4%B9%A6%E9%99%A2%E5%86%85%E9%83%A8%E7%8E%AF%E5%A2%83%E6%9B%9D%E5%85%89%23) `318.6K 🔥` `NEW`
1. [胚胎案原配含泪问我是不是真的错了](https://s.weibo.com/weibo?q=%23%E8%83%9A%E8%83%8E%E6%A1%88%E5%8E%9F%E9%85%8D%E5%90%AB%E6%B3%AA%E9%97%AE%E6%88%91%E6%98%AF%E4%B8%8D%E6%98%AF%E7%9C%9F%E7%9A%84%E9%94%99%E4%BA%86%23) `317.3K 🔥` `NEW`
1. [辅警帮忙找回包后才知是27万爱马仕](https://s.weibo.com/weibo?q=%23%E8%BE%85%E8%AD%A6%E5%B8%AE%E5%BF%99%E6%89%BE%E5%9B%9E%E5%8C%85%E5%90%8E%E6%89%8D%E7%9F%A5%E6%98%AF27%E4%B8%87%E7%88%B1%E9%A9%AC%E4%BB%95%23) `316.0K 🔥` `NEW`
1. [胚胎案重婚罪未成立](https://s.weibo.com/weibo?q=%23%E8%83%9A%E8%83%8E%E6%A1%88%E9%87%8D%E5%A9%9A%E7%BD%AA%E6%9C%AA%E6%88%90%E7%AB%8B%23) `315.3K 🔥` `NEW`
1. [曝金鹰奖得奖人员](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%87%91%E9%B9%B0%E5%A5%96%E5%BE%97%E5%A5%96%E4%BA%BA%E5%91%98%23) `314.1K 🔥` `NEW`
1. [福建洪水内涝持续](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E6%B4%AA%E6%B0%B4%E5%86%85%E6%B6%9D%E6%8C%81%E7%BB%AD%23) `264.4K 🔥` `NEW`
1. [秦海璐 这样的照片热巴从未给我拍过](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E6%B5%B7%E7%92%90%20%E8%BF%99%E6%A0%B7%E7%9A%84%E7%85%A7%E7%89%87%E7%83%AD%E5%B7%B4%E4%BB%8E%E6%9C%AA%E7%BB%99%E6%88%91%E6%8B%8D%E8%BF%87%23) `243.9K 🔥` `NEW`
1. [韩国股市](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%82%A1%E5%B8%82%23) `199.5K 🔥` `NEW`
1. [41岁送女出嫁父亲回应早育](https://s.weibo.com/weibo?q=%2341%E5%B2%81%E9%80%81%E5%A5%B3%E5%87%BA%E5%AB%81%E7%88%B6%E4%BA%B2%E5%9B%9E%E5%BA%94%E6%97%A9%E8%82%B2%23) `199.1K 🔥` `NEW`
1. [保定学院人事处回应风波](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%AE%9A%E5%AD%A6%E9%99%A2%E4%BA%BA%E4%BA%8B%E5%A4%84%E5%9B%9E%E5%BA%94%E9%A3%8E%E6%B3%A2%23) `197.6K 🔥` `NEW`
1. [男子出轨养私生子让妻子不要找事](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%87%BA%E8%BD%A8%E5%85%BB%E7%A7%81%E7%94%9F%E5%AD%90%E8%AE%A9%E5%A6%BB%E5%AD%90%E4%B8%8D%E8%A6%81%E6%89%BE%E4%BA%8B%23) `195.5K 🔥` `NEW`
1. [iPhoneUltra正面首次曝光](https://s.weibo.com/weibo?q=%23iPhoneUltra%E6%AD%A3%E9%9D%A2%E9%A6%96%E6%AC%A1%E6%9B%9D%E5%85%89%23) `194.4K 🔥` `NEW`
1. [北京电影学院26级新生报到现场](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E7%94%B5%E5%BD%B1%E5%AD%A6%E9%99%A226%E7%BA%A7%E6%96%B0%E7%94%9F%E6%8A%A5%E5%88%B0%E7%8E%B0%E5%9C%BA%23) `172.0K 🔥` `NEW`
1. [金珉奎寸头](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%8F%89%E5%A5%8E%E5%AF%B8%E5%A4%B4%23) `165.7K 🔥` `NEW`
1. [花少5嘉宾没少看花少2吧](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%915%E5%98%89%E5%AE%BE%E6%B2%A1%E5%B0%91%E7%9C%8B%E8%8A%B1%E5%B0%912%E5%90%A7%23) `161.4K 🔥` `NEW`
1. [解放军在吉隆口岸救援现场架起炉灶](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E5%9C%A8%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E6%95%91%E6%8F%B4%E7%8E%B0%E5%9C%BA%E6%9E%B6%E8%B5%B7%E7%82%89%E7%81%B6%23) `155.5K 🔥` `NEW`
1. [王楚然画完粗眼线眼睛大了一倍](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%94%BB%E5%AE%8C%E7%B2%97%E7%9C%BC%E7%BA%BF%E7%9C%BC%E7%9D%9B%E5%A4%A7%E4%BA%86%E4%B8%80%E5%80%8D%23) `146.7K 🔥` `NEW`
1. [让我去吉隆口岸干什么都行](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E6%88%91%E5%8E%BB%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E5%B9%B2%E4%BB%80%E4%B9%88%E9%83%BD%E8%A1%8C%23) `146.1K 🔥` `NEW`
1. [厄尔尼诺将发展为超强级别事件](https://s.weibo.com/weibo?q=%23%E5%8E%84%E5%B0%94%E5%B0%BC%E8%AF%BA%E5%B0%86%E5%8F%91%E5%B1%95%E4%B8%BA%E8%B6%85%E5%BC%BA%E7%BA%A7%E5%88%AB%E4%BA%8B%E4%BB%B6%23) `143.0K 🔥` `NEW`
1. [刘翔前妻回应红烧肉传闻](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BF%94%E5%89%8D%E5%A6%BB%E5%9B%9E%E5%BA%94%E7%BA%A2%E7%83%A7%E8%82%89%E4%BC%A0%E9%97%BB%23) `141.2K 🔥` `NEW`
1. [栾念终于承认自己是舔狗了](https://s.weibo.com/weibo?q=%23%E6%A0%BE%E5%BF%B5%E7%BB%88%E4%BA%8E%E6%89%BF%E8%AE%A4%E8%87%AA%E5%B7%B1%E6%98%AF%E8%88%94%E7%8B%97%E4%BA%86%23) `135.2K 🔥` `NEW`
1. [韩国股市因半导体关税跳水](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%82%A1%E5%B8%82%E5%9B%A0%E5%8D%8A%E5%AF%BC%E4%BD%93%E5%85%B3%E7%A8%8E%E8%B7%B3%E6%B0%B4%23) `134.7K 🔥` `NEW`
1. [问界M9凹凸路面避障实测](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8CM9%E5%87%B9%E5%87%B8%E8%B7%AF%E9%9D%A2%E9%81%BF%E9%9A%9C%E5%AE%9E%E6%B5%8B%23) `134.1K 🔥` `NEW`
1. [现在做蛋糕靠的不是技术而是科技](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%81%9A%E8%9B%8B%E7%B3%95%E9%9D%A0%E7%9A%84%E4%B8%8D%E6%98%AF%E6%8A%80%E6%9C%AF%E8%80%8C%E6%98%AF%E7%A7%91%E6%8A%80%23) `133.3K 🔥` `NEW`
1. [男子喝3两敌敌畏自驾2小时就医](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%96%9D3%E4%B8%A4%E6%95%8C%E6%95%8C%E7%95%8F%E8%87%AA%E9%A9%BE2%E5%B0%8F%E6%97%B6%E5%B0%B1%E5%8C%BB%23) `132.2K 🔥` `NEW`
1. [什么话一说出来就没必要交流了](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E8%AF%9D%E4%B8%80%E8%AF%B4%E5%87%BA%E6%9D%A5%E5%B0%B1%E6%B2%A1%E5%BF%85%E8%A6%81%E4%BA%A4%E6%B5%81%E4%BA%86%23) `131.4K 🔥` `NEW`
1. [充1000元误到账26419933亿余元](https://s.weibo.com/weibo?q=%23%E5%85%851000%E5%85%83%E8%AF%AF%E5%88%B0%E8%B4%A626419933%E4%BA%BF%E4%BD%99%E5%85%83%23) `1.0M 🔥` `+401%`
1. [朴彩英拒绝100亿韩元中国奶茶代言](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%BD%A9%E8%8B%B1%E6%8B%92%E7%BB%9D100%E4%BA%BF%E9%9F%A9%E5%85%83%E4%B8%AD%E5%9B%BD%E5%A5%B6%E8%8C%B6%E4%BB%A3%E8%A8%80%23) `430.8K 🔥`
1. [微信 单删提示](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%20%E5%8D%95%E5%88%A0%E6%8F%90%E7%A4%BA%23) `2.4M 🔥` `-61%`
1. [陈意涵说杨洋走丢就是看的那样](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%84%8F%E6%B6%B5%E8%AF%B4%E6%9D%A8%E6%B4%8B%E8%B5%B0%E4%B8%A2%E5%B0%B1%E6%98%AF%E7%9C%8B%E7%9A%84%E9%82%A3%E6%A0%B7%23) `288.5K 🔥` `-56%`
1. [井柏然 升咖](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%20%E5%8D%87%E5%92%96%23) `204.1K 🔥` `-81%`
1. [早春晴朗 爆剧爆人](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%20%E7%88%86%E5%89%A7%E7%88%86%E4%BA%BA%23) `189.8K 🔥` `-59%`
1. [首饰戴了和没戴是两回事](https://s.weibo.com/weibo?q=%23%E9%A6%96%E9%A5%B0%E6%88%B4%E4%BA%86%E5%92%8C%E6%B2%A1%E6%88%B4%E6%98%AF%E4%B8%A4%E5%9B%9E%E4%BA%8B%23) `132.9K 🔥` `-65%`

Updated at 2026-09-03 17:14:01

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
