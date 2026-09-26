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

1. [奕境X9上市24小时大定突破9157台](https://s.weibo.com/weibo?q=%23%E5%A5%95%E5%A2%83X9%E4%B8%8A%E5%B8%8224%E5%B0%8F%E6%97%B6%E5%A4%A7%E5%AE%9A%E7%AA%81%E7%A0%B49157%E5%8F%B0%23) `598.4K 🔥` `NEW`
1. [中国人在写死亡的时候出奇的神](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%9C%A8%E5%86%99%E6%AD%BB%E4%BA%A1%E7%9A%84%E6%97%B6%E5%80%99%E5%87%BA%E5%A5%87%E7%9A%84%E7%A5%9E%23) `564.7K 🔥` `NEW`
1. [宜宾地震](https://s.weibo.com/weibo?q=%23%E5%AE%9C%E5%AE%BE%E5%9C%B0%E9%9C%87%23) `408.1K 🔥` `NEW`
1. [花红登山售后中心营业了](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E7%BA%A2%E7%99%BB%E5%B1%B1%E5%94%AE%E5%90%8E%E4%B8%AD%E5%BF%83%E8%90%A5%E4%B8%9A%E4%BA%86%23) `395.5K 🔥` `NEW`
1. [国乒亚运会9月26日赛程](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E4%BA%9A%E8%BF%90%E4%BC%9A9%E6%9C%8826%E6%97%A5%E8%B5%9B%E7%A8%8B%23) `384.7K 🔥` `NEW`
1. [林锦岐用一根红绳跟许兰香约来世](https://s.weibo.com/weibo?q=%23%E6%9E%97%E9%94%A6%E5%B2%90%E7%94%A8%E4%B8%80%E6%A0%B9%E7%BA%A2%E7%BB%B3%E8%B7%9F%E8%AE%B8%E5%85%B0%E9%A6%99%E7%BA%A6%E6%9D%A5%E4%B8%96%23) `225.1K 🔥` `NEW`
1. [小齐哥称刘宇宁翻唱后有压力](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%BD%90%E5%93%A5%E7%A7%B0%E5%88%98%E5%AE%87%E5%AE%81%E7%BF%BB%E5%94%B1%E5%90%8E%E6%9C%89%E5%8E%8B%E5%8A%9B%23) `218.9K 🔥` `NEW`
1. [两人吃西贝没点海鲜花五百多](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%BA%BA%E5%90%83%E8%A5%BF%E8%B4%9D%E6%B2%A1%E7%82%B9%E6%B5%B7%E9%B2%9C%E8%8A%B1%E4%BA%94%E7%99%BE%E5%A4%9A%23) `217.6K 🔥` `NEW`
1. [王楚钦 进决赛不容易](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%20%E8%BF%9B%E5%86%B3%E8%B5%9B%E4%B8%8D%E5%AE%B9%E6%98%93%23) `215.5K 🔥` `NEW`
1. [早春晴朗 人剧分离](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%20%E4%BA%BA%E5%89%A7%E5%88%86%E7%A6%BB%23) `212.9K 🔥` `NEW`
1. [刘雯从头到尾又做错了什么](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%E4%BB%8E%E5%A4%B4%E5%88%B0%E5%B0%BE%E5%8F%88%E5%81%9A%E9%94%99%E4%BA%86%E4%BB%80%E4%B9%88%23) `207.2K 🔥` `NEW`
1. [孙千倪妮独美](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E5%80%AA%E5%A6%AE%E7%8B%AC%E7%BE%8E%23) `206.9K 🔥` `NEW`
1. [井柏然是井柏然luke是luke](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E6%98%AF%E4%BA%95%E6%9F%8F%E7%84%B6luke%E6%98%AFluke%23) `206.0K 🔥` `NEW`
1. [不要为付费过的关系提供情绪价值](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E4%B8%BA%E4%BB%98%E8%B4%B9%E8%BF%87%E7%9A%84%E5%85%B3%E7%B3%BB%E6%8F%90%E4%BE%9B%E6%83%85%E7%BB%AA%E4%BB%B7%E5%80%BC%23) `204.2K 🔥` `NEW`
1. [全网吃鱼最狠的人出现了](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BD%91%E5%90%83%E9%B1%BC%E6%9C%80%E7%8B%A0%E7%9A%84%E4%BA%BA%E5%87%BA%E7%8E%B0%E4%BA%86%23) `202.2K 🔥` `NEW`
1. [Luke身边一定有一位非常重要的女士](https://s.weibo.com/weibo?q=%23Luke%E8%BA%AB%E8%BE%B9%E4%B8%80%E5%AE%9A%E6%9C%89%E4%B8%80%E4%BD%8D%E9%9D%9E%E5%B8%B8%E9%87%8D%E8%A6%81%E7%9A%84%E5%A5%B3%E5%A3%AB%23) `200.8K 🔥` `NEW`
1. [邓超提前上线卡点为孙俪庆生](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E6%8F%90%E5%89%8D%E4%B8%8A%E7%BA%BF%E5%8D%A1%E7%82%B9%E4%B8%BA%E5%AD%99%E4%BF%AA%E5%BA%86%E7%94%9F%23) `194.9K 🔥` `NEW`
1. [兰香被林锦岐吐血吓到了](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E8%A2%AB%E6%9E%97%E9%94%A6%E5%B2%90%E5%90%90%E8%A1%80%E5%90%93%E5%88%B0%E4%BA%86%23) `194.3K 🔥` `NEW`
1. [韩雨彤回复了张卓尔](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E9%9B%A8%E5%BD%A4%E5%9B%9E%E5%A4%8D%E4%BA%86%E5%BC%A0%E5%8D%93%E5%B0%94%23) `190.7K 🔥` `NEW`
1. [倪妮文淇宋威龙戴墨镜不告诉田曦薇](https://s.weibo.com/weibo?q=%23%E5%80%AA%E5%A6%AE%E6%96%87%E6%B7%87%E5%AE%8B%E5%A8%81%E9%BE%99%E6%88%B4%E5%A2%A8%E9%95%9C%E4%B8%8D%E5%91%8A%E8%AF%89%E7%94%B0%E6%9B%A6%E8%96%87%23) `190.2K 🔥` `NEW`
1. [严浩翔吃辣条吃美了](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%90%83%E8%BE%A3%E6%9D%A1%E5%90%83%E7%BE%8E%E4%BA%86%23) `186.7K 🔥` `NEW`
1. [齐达内法国队首秀](https://s.weibo.com/weibo?q=%23%E9%BD%90%E8%BE%BE%E5%86%85%E6%B3%95%E5%9B%BD%E9%98%9F%E9%A6%96%E7%A7%80%23) `185.2K 🔥` `NEW`
1. [特朗普说这次访问富有成效](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E8%BF%99%E6%AC%A1%E8%AE%BF%E9%97%AE%E5%AF%8C%E6%9C%89%E6%88%90%E6%95%88%23) `184.2K 🔥` `NEW`
1. [家长带孩子四处求医病因就在家里](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E5%B8%A6%E5%AD%A9%E5%AD%90%E5%9B%9B%E5%A4%84%E6%B1%82%E5%8C%BB%E7%97%85%E5%9B%A0%E5%B0%B1%E5%9C%A8%E5%AE%B6%E9%87%8C%23) `182.2K 🔥` `NEW`
1. [曝特斯拉Optimus产量提升了10倍](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%89%B9%E6%96%AF%E6%8B%89Optimus%E4%BA%A7%E9%87%8F%E6%8F%90%E5%8D%87%E4%BA%8610%E5%80%8D%23) `181.2K 🔥` `NEW`
1. [硅基生物看人工智能短剧会笑](https://s.weibo.com/weibo?q=%23%E7%A1%85%E5%9F%BA%E7%94%9F%E7%89%A9%E7%9C%8B%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E7%9F%AD%E5%89%A7%E4%BC%9A%E7%AC%91%23) `180.3K 🔥` `NEW`
1. [中美两国元首夫妇参观美国国家档案馆](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E4%B8%A4%E5%9B%BD%E5%85%83%E9%A6%96%E5%A4%AB%E5%A6%87%E5%8F%82%E8%A7%82%E7%BE%8E%E5%9B%BD%E5%9B%BD%E5%AE%B6%E6%A1%A3%E6%A1%88%E9%A6%86%23) `1.0M 🔥` `+115%`
1. [国家出手调控油价了](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E5%87%BA%E6%89%8B%E8%B0%83%E6%8E%A7%E6%B2%B9%E4%BB%B7%E4%BA%86%23) `773.1K 🔥` `+112%`
1. [从一撇一捺看中美青年双向奔赴](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E4%B8%80%E6%92%87%E4%B8%80%E6%8D%BA%E7%9C%8B%E4%B8%AD%E7%BE%8E%E9%9D%92%E5%B9%B4%E5%8F%8C%E5%90%91%E5%A5%94%E8%B5%B4%23) `610.2K 🔥` `+121%`
1. [国乒包揽冠亚军庆祝中秋](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%8C%85%E6%8F%BD%E5%86%A0%E4%BA%9A%E5%86%9B%E5%BA%86%E7%A5%9D%E4%B8%AD%E7%A7%8B%23) `404.0K 🔥` `+78%`
1. [王楚钦孙颖莎 混双半决赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%20%E6%B7%B7%E5%8F%8C%E5%8D%8A%E5%86%B3%E8%B5%9B%23) `219.5K 🔥` `+243%`
1. [新华社为王楚钦发声](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8D%8E%E7%A4%BE%E4%B8%BA%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%8F%91%E5%A3%B0%23) `218.1K 🔥` `+229%`
1. [男子输液后自尽留观室监控曝光](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%BE%93%E6%B6%B2%E5%90%8E%E8%87%AA%E5%B0%BD%E7%95%99%E8%A7%82%E5%AE%A4%E7%9B%91%E6%8E%A7%E6%9B%9D%E5%85%89%23) `216.4K 🔥` `+228%`
1. [王楚钦不该承受恶劣舆论环境](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%B8%8D%E8%AF%A5%E6%89%BF%E5%8F%97%E6%81%B6%E5%8A%A3%E8%88%86%E8%AE%BA%E7%8E%AF%E5%A2%83%23) `214.5K 🔥` `+228%`
1. [井柏然刘雯去看李荣浩演唱会](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%88%98%E9%9B%AF%E5%8E%BB%E7%9C%8B%E6%9D%8E%E8%8D%A3%E6%B5%A9%E6%BC%94%E5%94%B1%E4%BC%9A%23) `212.4K 🔥` `+227%`
1. [刘国梁看台静坐目睹失冠](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%9B%BD%E6%A2%81%E7%9C%8B%E5%8F%B0%E9%9D%99%E5%9D%90%E7%9B%AE%E7%9D%B9%E5%A4%B1%E5%86%A0%23) `211.2K 🔥` `+230%`
1. [梅姨案被拐孩子钟彬被养父拉黑](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E6%A1%88%E8%A2%AB%E6%8B%90%E5%AD%A9%E5%AD%90%E9%92%9F%E5%BD%AC%E8%A2%AB%E5%85%BB%E7%88%B6%E6%8B%89%E9%BB%91%23) `210.5K 🔥` `+368%`
1. [宁波小孩姐陈妤颉成亚洲女子飞人](https://s.weibo.com/weibo?q=%23%E5%AE%81%E6%B3%A2%E5%B0%8F%E5%AD%A9%E5%A7%90%E9%99%88%E5%A6%A4%E9%A2%89%E6%88%90%E4%BA%9A%E6%B4%B2%E5%A5%B3%E5%AD%90%E9%A3%9E%E4%BA%BA%23) `209.0K 🔥` `+176%`
1. [网友710万卖房签合同瞬间泪崩](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B710%E4%B8%87%E5%8D%96%E6%88%BF%E7%AD%BE%E5%90%88%E5%90%8C%E7%9E%AC%E9%97%B4%E6%B3%AA%E5%B4%A9%23) `208.5K 🔥` `+231%`
1. [全身为什么面部皮肤看起来最差](https://s.weibo.com/weibo?q=%23%E5%85%A8%E8%BA%AB%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9D%A2%E9%83%A8%E7%9A%AE%E8%82%A4%E7%9C%8B%E8%B5%B7%E6%9D%A5%E6%9C%80%E5%B7%AE%23) `203.6K 🔥` `+229%`
1. [戚薇造型 致敬蔡明](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%87%E9%80%A0%E5%9E%8B%20%E8%87%B4%E6%95%AC%E8%94%A1%E6%98%8E%23) `201.6K 🔥` `+126%`
1. [中美两国元首夫妇茶叙](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E4%B8%A4%E5%9B%BD%E5%85%83%E9%A6%96%E5%A4%AB%E5%A6%87%E8%8C%B6%E5%8F%99%23) `199.5K 🔥` `+185%`
1. [中美元首夫妇茶叙高清大图](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E5%A4%AB%E5%A6%87%E8%8C%B6%E5%8F%99%E9%AB%98%E6%B8%85%E5%A4%A7%E5%9B%BE%23) `198.5K 🔥` `+299%`
1. [英国母子游中国后想定居](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E6%AF%8D%E5%AD%90%E6%B8%B8%E4%B8%AD%E5%9B%BD%E5%90%8E%E6%83%B3%E5%AE%9A%E5%B1%85%23) `197.8K 🔥` `+228%`
1. [陈妤颉100米夺金](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%A4%E9%A2%89100%E7%B1%B3%E5%A4%BA%E9%87%91%23) `196.8K 🔥` `+102%`
1. [戚薇 用小推车推着走红毯](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%87%20%E7%94%A8%E5%B0%8F%E6%8E%A8%E8%BD%A6%E6%8E%A8%E7%9D%80%E8%B5%B0%E7%BA%A2%E6%AF%AF%23) `195.6K 🔥` `+206%`
1. [第一个想到这么拍月亮的人真是天才](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%83%B3%E5%88%B0%E8%BF%99%E4%B9%88%E6%8B%8D%E6%9C%88%E4%BA%AE%E7%9A%84%E4%BA%BA%E7%9C%9F%E6%98%AF%E5%A4%A9%E6%89%8D%23) `193.0K 🔥` `+232%`
1. [月饼](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%A5%BC%23) `192.0K 🔥` `+159%`
1. [兰香如故BE](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85BE%23) `189.0K 🔥` `+207%`
1. [国乒男团 排兵布阵质疑](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%20%E6%8E%92%E5%85%B5%E5%B8%83%E9%98%B5%E8%B4%A8%E7%96%91%23) `188.2K 🔥` `+194%`
1. [医院回应男子留观室自缢身亡](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E5%9B%9E%E5%BA%94%E7%94%B7%E5%AD%90%E7%95%99%E8%A7%82%E5%AE%A4%E8%87%AA%E7%BC%A2%E8%BA%AB%E4%BA%A1%23) `187.1K 🔥` `+193%`

Updated at 2026-09-26 08:55:13

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
