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

1. [张雪回应交警打鸡血质问 (Zhang Xue responded to the traffic police's questioning)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%9B%9E%E5%BA%94%E4%BA%A4%E8%AD%A6%E6%89%93%E9%B8%A1%E8%A1%80%E8%B4%A8%E9%97%AE%23) `748.7K 🔥` `NEW`
1. [新科技旗舰小鹏GX今晚预售](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%A7%91%E6%8A%80%E6%97%97%E8%88%B0%E5%B0%8F%E9%B9%8FGX%E4%BB%8A%E6%99%9A%E9%A2%84%E5%94%AE%23) `586.6K 🔥` `NEW`
1. [谢娜演唱会](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%23) `558.0K 🔥` `NEW`
1. [王者荣耀](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `293.6K 🔥` `NEW`
1. [男子偷拍后用AI生成裸照发群炫耀被罚](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%81%B7%E6%8B%8D%E5%90%8E%E7%94%A8AI%E7%94%9F%E6%88%90%E8%A3%B8%E7%85%A7%E5%8F%91%E7%BE%A4%E7%82%AB%E8%80%80%E8%A2%AB%E7%BD%9A%23) `279.2K 🔥` `NEW`
1. [曝爱奇艺与深度合作艺人签约AI授权](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%88%B1%E5%A5%87%E8%89%BA%E4%B8%8E%E6%B7%B1%E5%BA%A6%E5%90%88%E4%BD%9C%E8%89%BA%E4%BA%BA%E7%AD%BE%E7%BA%A6AI%E6%8E%88%E6%9D%83%23) `167.1K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `166.7K 🔥` `NEW`
1. [谢娜演唱会门票秒罄](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E9%97%A8%E7%A5%A8%E7%A7%92%E7%BD%84%23) `159.1K 🔥` `NEW`
1. [何润东cos项羽](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9Ccos%E9%A1%B9%E7%BE%BD%23) `146.8K 🔥` `NEW`
1. [金立创始人被曝在印尼卖家具](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%AB%8B%E5%88%9B%E5%A7%8B%E4%BA%BA%E8%A2%AB%E6%9B%9D%E5%9C%A8%E5%8D%B0%E5%B0%BC%E5%8D%96%E5%AE%B6%E5%85%B7%23) `136.0K 🔥` `NEW`
1. [多国政要排队访华为何而来 (Why do dignitaries from many countries line up to visit China?)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9B%BD%E6%94%BF%E8%A6%81%E6%8E%92%E9%98%9F%E8%AE%BF%E5%8D%8E%E4%B8%BA%E4%BD%95%E8%80%8C%E6%9D%A5%23) `109.8K 🔥` `NEW`
1. [莫氏鸡煲从年入6万到日入6万](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E4%BB%8E%E5%B9%B4%E5%85%A56%E4%B8%87%E5%88%B0%E6%97%A5%E5%85%A56%E4%B8%87%23) `107.8K 🔥` `NEW`
1. [原来下雨天睡得香是这个香啊](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%B8%8B%E9%9B%A8%E5%A4%A9%E7%9D%A1%E5%BE%97%E9%A6%99%E6%98%AF%E8%BF%99%E4%B8%AA%E9%A6%99%E5%95%8A%23) `96.0K 🔥` `NEW`
1. [睡墓碑旁女孩爸爸发声](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E5%A2%93%E7%A2%91%E6%97%81%E5%A5%B3%E5%AD%A9%E7%88%B8%E7%88%B8%E5%8F%91%E5%A3%B0%23) `88.1K 🔥` `NEW`
1. [伊朗放重磅信号](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%94%BE%E9%87%8D%E7%A3%85%E4%BF%A1%E5%8F%B7%23) `84.4K 🔥` `NEW`
1. [杨瀚森征战NBA季后赛](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%80%9A%E6%A3%AE%E5%BE%81%E6%88%98NBA%E5%AD%A3%E5%90%8E%E8%B5%9B%23) `79.5K 🔥` `NEW`
1. [PEL群像还是太超前了](https://s.weibo.com/weibo?q=%23PEL%E7%BE%A4%E5%83%8F%E8%BF%98%E6%98%AF%E5%A4%AA%E8%B6%85%E5%89%8D%E4%BA%86%23) `78.5K 🔥` `NEW`
1. [女装模特能不能多用些普通人](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E8%A3%85%E6%A8%A1%E7%89%B9%E8%83%BD%E4%B8%8D%E8%83%BD%E5%A4%9A%E7%94%A8%E4%BA%9B%E6%99%AE%E9%80%9A%E4%BA%BA%23) `70.3K 🔥` `NEW`
1. [心愿便利贴 闹钟](https://s.weibo.com/weibo?q=%23%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4%20%E9%97%B9%E9%92%9F%23) `69.1K 🔥` `NEW`
1. [醉驾车被警车狂追撞死人家属起诉交警](https://s.weibo.com/weibo?q=%23%E9%86%89%E9%A9%BE%E8%BD%A6%E8%A2%AB%E8%AD%A6%E8%BD%A6%E7%8B%82%E8%BF%BD%E6%92%9E%E6%AD%BB%E4%BA%BA%E5%AE%B6%E5%B1%9E%E8%B5%B7%E8%AF%89%E4%BA%A4%E8%AD%A6%23) `67.2K 🔥` `NEW`
1. [你当年是不是救过一只喜鹊 (Did you save a magpie back then?)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%BD%93%E5%B9%B4%E6%98%AF%E4%B8%8D%E6%98%AF%E6%95%91%E8%BF%87%E4%B8%80%E5%8F%AA%E5%96%9C%E9%B9%8A%23) `66.9K 🔥` `NEW`
1. [当代懒人到底有多会享受生活](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BB%A3%E6%87%92%E4%BA%BA%E5%88%B0%E5%BA%95%E6%9C%89%E5%A4%9A%E4%BC%9A%E4%BA%AB%E5%8F%97%E7%94%9F%E6%B4%BB%23) `64.7K 🔥` `NEW`
1. [蒋奇明一年了还没出戏](https://s.weibo.com/weibo?q=%23%E8%92%8B%E5%A5%87%E6%98%8E%E4%B8%80%E5%B9%B4%E4%BA%86%E8%BF%98%E6%B2%A1%E5%87%BA%E6%88%8F%23) `62.2K 🔥` `NEW`
1. [血糖失控为何口腔先遭殃](https://s.weibo.com/weibo?q=%23%E8%A1%80%E7%B3%96%E5%A4%B1%E6%8E%A7%E4%B8%BA%E4%BD%95%E5%8F%A3%E8%85%94%E5%85%88%E9%81%AD%E6%AE%83%23) `60.8K 🔥` `NEW`
1. [莫氏鸡煲老板娘在线催老莫发工资](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E5%A8%98%E5%9C%A8%E7%BA%BF%E5%82%AC%E8%80%81%E8%8E%AB%E5%8F%91%E5%B7%A5%E8%B5%84%23) `60.1K 🔥` `NEW`
1. [李小冉 舞蹈界失去了一个无关紧要的人 (Li Xiaoran, the dance world has lost an insignificant person)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E8%88%9E%E8%B9%88%E7%95%8C%E5%A4%B1%E5%8E%BB%E4%BA%86%E4%B8%80%E4%B8%AA%E6%97%A0%E5%85%B3%E7%B4%A7%E8%A6%81%E7%9A%84%E4%BA%BA%23) `292.8K 🔥` `+72%`
1. [脱口秀演员曝王阳早年遭职场霸凌](https://s.weibo.com/weibo?q=%23%E8%84%B1%E5%8F%A3%E7%A7%80%E6%BC%94%E5%91%98%E6%9B%9D%E7%8E%8B%E9%98%B3%E6%97%A9%E5%B9%B4%E9%81%AD%E8%81%8C%E5%9C%BA%E9%9C%B8%E5%87%8C%23) `157.7K 🔥` `+28%`
1. [伊朗总统质问美国凭什么攻击伊朗](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E8%B4%A8%E9%97%AE%E7%BE%8E%E5%9B%BD%E5%87%AD%E4%BB%80%E4%B9%88%E6%94%BB%E5%87%BB%E4%BC%8A%E6%9C%97%23) `147.5K 🔥` `+72%`
1. [婚事谈崩男子杀害怀孕女友一家3口](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E4%BA%8B%E8%B0%88%E5%B4%A9%E7%94%B7%E5%AD%90%E6%9D%80%E5%AE%B3%E6%80%80%E5%AD%95%E5%A5%B3%E5%8F%8B%E4%B8%80%E5%AE%B63%E5%8F%A3%23) `145.3K 🔥` `+102%`
1. [法国殖民时期掠夺的文物将归还原国](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E6%AE%96%E6%B0%91%E6%97%B6%E6%9C%9F%E6%8E%A0%E5%A4%BA%E7%9A%84%E6%96%87%E7%89%A9%E5%B0%86%E5%BD%92%E8%BF%98%E5%8E%9F%E5%9B%BD%23) `113.4K 🔥` `+34%`
1. [驻外人员嫖娼遭仙人跳出卖国家秘密](https://s.weibo.com/weibo?q=%23%E9%A9%BB%E5%A4%96%E4%BA%BA%E5%91%98%E5%AB%96%E5%A8%BC%E9%81%AD%E4%BB%99%E4%BA%BA%E8%B7%B3%E5%87%BA%E5%8D%96%E5%9B%BD%E5%AE%B6%E7%A7%98%E5%AF%86%23) `1.1M 🔥`
1. [全民国家安全教育日 (National Security Education Day)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%B0%91%E5%9B%BD%E5%AE%B6%E5%AE%89%E5%85%A8%E6%95%99%E8%82%B2%E6%97%A5%23) `596.1K 🔥`
1. [你以为吃的是素菜其实全是油脂](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%BB%A5%E4%B8%BA%E5%90%83%E7%9A%84%E6%98%AF%E7%B4%A0%E8%8F%9C%E5%85%B6%E5%AE%9E%E5%85%A8%E6%98%AF%E6%B2%B9%E8%84%82%23) `195.1K 🔥`
1. [B太帮扶大山女孩用苹果手机](https://s.weibo.com/weibo?q=%23B%E5%A4%AA%E5%B8%AE%E6%89%B6%E5%A4%A7%E5%B1%B1%E5%A5%B3%E5%AD%A9%E7%94%A8%E8%8B%B9%E6%9E%9C%E6%89%8B%E6%9C%BA%23) `184.4K 🔥`
1. [魏晨儿子都这么大了](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E6%99%A8%E5%84%BF%E5%AD%90%E9%83%BD%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `166.9K 🔥`
1. [森碟18岁了](https://s.weibo.com/weibo?q=%23%E6%A3%AE%E7%A2%9F18%E5%B2%81%E4%BA%86%23) `166.5K 🔥`
1. [张凌赫环保纪录片全素颜](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8E%AF%E4%BF%9D%E7%BA%AA%E5%BD%95%E7%89%87%E5%85%A8%E7%B4%A0%E9%A2%9C%23) `91.3K 🔥`
1. [TFBOYS十二周年](https://s.weibo.com/weibo?q=%23TFBOYS%E5%8D%81%E4%BA%8C%E5%91%A8%E5%B9%B4%23) `76.0K 🔥`
1. [霍尔木兹堵不住中国](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E5%A0%B5%E4%B8%8D%E4%BD%8F%E4%B8%AD%E5%9B%BD%23) `270.8K 🔥` `-39%`
1. [孙红雷连夜关闭了人脸支付](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%BA%A2%E9%9B%B7%E8%BF%9E%E5%A4%9C%E5%85%B3%E9%97%AD%E4%BA%86%E4%BA%BA%E8%84%B8%E6%94%AF%E4%BB%98%23) `167.1K 🔥` `-25%`
1. [李昀锐关晓彤牵手剧宣](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%85%B3%E6%99%93%E5%BD%A4%E7%89%B5%E6%89%8B%E5%89%A7%E5%AE%A3%23) `166.2K 🔥` `-65%`
1. [安赛龙宣布退役 (Axelsen announces retirement)](https://s.weibo.com/weibo?q=%23%E5%AE%89%E8%B5%9B%E9%BE%99%E5%AE%A3%E5%B8%83%E9%80%80%E5%BD%B9%23) `166.2K 🔥` `-48%`
1. [画梦录阵容官宣 (Hua Meng Lu official lineup announcement)](https://s.weibo.com/weibo?q=%23%E7%94%BB%E6%A2%A6%E5%BD%95%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `118.0K 🔥` `-85%`
1. [文彩元6月结婚](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%BD%A9%E5%85%836%E6%9C%88%E7%BB%93%E5%A9%9A%23) `112.7K 🔥` `-27%`
1. [神仙肉](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E4%BB%99%E8%82%89%23) `76.4K 🔥` `-45%`
1. [男子每天只睡2小时1个月后想轻生](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%AF%8F%E5%A4%A9%E5%8F%AA%E7%9D%A12%E5%B0%8F%E6%97%B61%E4%B8%AA%E6%9C%88%E5%90%8E%E6%83%B3%E8%BD%BB%E7%94%9F%23) `73.2K 🔥` `-45%`
1. [女司机飙车险撞人后在车内笑](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%8F%B8%E6%9C%BA%E9%A3%99%E8%BD%A6%E9%99%A9%E6%92%9E%E4%BA%BA%E5%90%8E%E5%9C%A8%E8%BD%A6%E5%86%85%E7%AC%91%23) `71.1K 🔥` `-35%`
1. [全网第一个装植物人的婆婆](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BD%91%E7%AC%AC%E4%B8%80%E4%B8%AA%E8%A3%85%E6%A4%8D%E7%89%A9%E4%BA%BA%E7%9A%84%E5%A9%86%E5%A9%86%23) `66.9K 🔥` `-80%`
1. [于正为吴谨言许凯宣传新剧](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E4%B8%BA%E5%90%B4%E8%B0%A8%E8%A8%80%E8%AE%B8%E5%87%AF%E5%AE%A3%E4%BC%A0%E6%96%B0%E5%89%A7%23) `63.8K 🔥` `-50%`
1. [军工人员疯狂泄密却被开空头支票 (Military workers leaked secrets like crazy but were given bad checks)](https://s.weibo.com/weibo?q=%23%E5%86%9B%E5%B7%A5%E4%BA%BA%E5%91%98%E7%96%AF%E7%8B%82%E6%B3%84%E5%AF%86%E5%8D%B4%E8%A2%AB%E5%BC%80%E7%A9%BA%E5%A4%B4%E6%94%AF%E7%A5%A8%23) `62.2K 🔥` `-27%`
1. [泼水节不能变成骚扰者的狂欢](https://s.weibo.com/weibo?q=%23%E6%B3%BC%E6%B0%B4%E8%8A%82%E4%B8%8D%E8%83%BD%E5%8F%98%E6%88%90%E9%AA%9A%E6%89%B0%E8%80%85%E7%9A%84%E7%8B%82%E6%AC%A2%23) `59.8K 🔥` `-28%`
1. [雷军会见阿布扎比王储](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E4%BC%9A%E8%A7%81%E9%98%BF%E5%B8%83%E6%89%8E%E6%AF%94%E7%8E%8B%E5%82%A8%23) `55.5K 🔥` `-64%`

Updated at 2026-04-15 15:13:18

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
