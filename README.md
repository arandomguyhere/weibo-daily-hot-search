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

1. [691分广州学霸忍痛拒绝清北 (Guangzhou top student with 691 points reluctantly rejected Qingbei)](https://s.weibo.com/weibo?q=%23691%E5%88%86%E5%B9%BF%E5%B7%9E%E5%AD%A6%E9%9C%B8%E5%BF%8D%E7%97%9B%E6%8B%92%E7%BB%9D%E6%B8%85%E5%8C%97%23) `2.6M 🔥` `NEW`
1. [曝花少8阵容已确定](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%8A%B1%E5%B0%918%E9%98%B5%E5%AE%B9%E5%B7%B2%E7%A1%AE%E5%AE%9A%23) `1.2M 🔥` `NEW`
1. [中国在达沃斯递出机遇清单](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%9C%A8%E8%BE%BE%E6%B2%83%E6%96%AF%E9%80%92%E5%87%BA%E6%9C%BA%E9%81%87%E6%B8%85%E5%8D%95%23) `817.7K 🔥` `NEW`
1. [韩国日本网友对骂](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%97%A5%E6%9C%AC%E7%BD%91%E5%8F%8B%E5%AF%B9%E9%AA%82%23) `817.5K 🔥` `NEW`
1. [当真C罗看到假C罗](https://s.weibo.com/weibo?q=%23%E5%BD%93%E7%9C%9FC%E7%BD%97%E7%9C%8B%E5%88%B0%E5%81%87C%E7%BD%97%23) `803.3K 🔥` `NEW`
1. [探岳LPHEV重磅上市](https://s.weibo.com/weibo?q=%23%E6%8E%A2%E5%B2%B3LPHEV%E9%87%8D%E7%A3%85%E4%B8%8A%E5%B8%82%23) `641.3K 🔥` `NEW`
1. [花少8集齐了四位大奖女演员](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%E9%9B%86%E9%BD%90%E4%BA%86%E5%9B%9B%E4%BD%8D%E5%A4%A7%E5%A5%96%E5%A5%B3%E6%BC%94%E5%91%98%23) `641.0K 🔥` `NEW`
1. [女生平时数学50高考超常发挥602](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E5%B9%B3%E6%97%B6%E6%95%B0%E5%AD%A650%E9%AB%98%E8%80%83%E8%B6%85%E5%B8%B8%E5%8F%91%E6%8C%A5602%23) `569.3K 🔥` `NEW`
1. [DeepSeek大规模招聘](https://s.weibo.com/weibo?q=%23DeepSeek%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%8B%9B%E8%81%98%23) `567.6K 🔥` `NEW`
1. [原来这就是脑雾啊](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E5%B0%B1%E6%98%AF%E8%84%91%E9%9B%BE%E5%95%8A%23) `563.1K 🔥` `NEW`
1. [恋与深空 (Love and deep space)](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `560.9K 🔥` `NEW`
1. [曝花少8小妹王可](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%8A%B1%E5%B0%918%E5%B0%8F%E5%A6%B9%E7%8E%8B%E5%8F%AF%23) `556.5K 🔥` `NEW`
1. [TF家族 运动会](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%20%E8%BF%90%E5%8A%A8%E4%BC%9A%23) `553.5K 🔥` `NEW`
1. [54岁女生退休倒计时火了](https://s.weibo.com/weibo?q=%2354%E5%B2%81%E5%A5%B3%E7%94%9F%E9%80%80%E4%BC%91%E5%80%92%E8%AE%A1%E6%97%B6%E7%81%AB%E4%BA%86%23) `552.0K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `548.4K 🔥` `NEW`
1. [杨紫像是来谈几十亿的大生意的](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%83%8F%E6%98%AF%E6%9D%A5%E8%B0%88%E5%87%A0%E5%8D%81%E4%BA%BF%E7%9A%84%E5%A4%A7%E7%94%9F%E6%84%8F%E7%9A%84%23) `544.3K 🔥` `NEW`
1. [韩国网友怒骂德国](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%BD%91%E5%8F%8B%E6%80%92%E9%AA%82%E5%BE%B7%E5%9B%BD%23) `537.7K 🔥` `NEW`
1. [李思潼毕业发言](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%80%9D%E6%BD%BC%E6%AF%95%E4%B8%9A%E5%8F%91%E8%A8%80%23) `536.0K 🔥` `NEW`
1. [国泰航空向吴尊道歉](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E6%B3%B0%E8%88%AA%E7%A9%BA%E5%90%91%E5%90%B4%E5%B0%8A%E9%81%93%E6%AD%89%23) `533.5K 🔥` `NEW`
1. [监管介入虚假高报师倒卖千问报告](https://s.weibo.com/weibo?q=%23%E7%9B%91%E7%AE%A1%E4%BB%8B%E5%85%A5%E8%99%9A%E5%81%87%E9%AB%98%E6%8A%A5%E5%B8%88%E5%80%92%E5%8D%96%E5%8D%83%E9%97%AE%E6%8A%A5%E5%91%8A%23) `531.0K 🔥` `NEW`
1. [土耳其队绝杀美国 (Turkey defeats the United States)](https://s.weibo.com/weibo?q=%23%E5%9C%9F%E8%80%B3%E5%85%B6%E9%98%9F%E7%BB%9D%E6%9D%80%E7%BE%8E%E5%9B%BD%23) `527.0K 🔥` `NEW`
1. [偶遇Angelababy小海绵在港迪吃饭](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87Angelababy%E5%B0%8F%E6%B5%B7%E7%BB%B5%E5%9C%A8%E6%B8%AF%E8%BF%AA%E5%90%83%E9%A5%AD%23) `520.7K 🔥` `NEW`
1. [世界杯32强已确定18席](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF32%E5%BC%BA%E5%B7%B2%E7%A1%AE%E5%AE%9A18%E5%B8%AD%23) `519.8K 🔥` `NEW`
1. [姜珮瑶百岁审美37套look](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E7%8F%AE%E7%91%B6%E7%99%BE%E5%B2%81%E5%AE%A1%E7%BE%8E37%E5%A5%97look%23) `517.0K 🔥` `NEW`
1. [佛得角队门将不用担心赛后失业了](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%98%9F%E9%97%A8%E5%B0%86%E4%B8%8D%E7%94%A8%E6%8B%85%E5%BF%83%E8%B5%9B%E5%90%8E%E5%A4%B1%E4%B8%9A%E4%BA%86%23) `513.1K 🔥` `NEW`
1. [王楚然山东妮儿就是劲大哈](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%B1%B1%E4%B8%9C%E5%A6%AE%E5%84%BF%E5%B0%B1%E6%98%AF%E5%8A%B2%E5%A4%A7%E5%93%88%23) `510.3K 🔥` `NEW`
1. [巴拉圭0比0澳大利亚](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%8B%89%E5%9C%AD0%E6%AF%940%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%23) `509.3K 🔥` `NEW`
1. [女生考第一就奖励高考完已有30万](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E8%80%83%E7%AC%AC%E4%B8%80%E5%B0%B1%E5%A5%96%E5%8A%B1%E9%AB%98%E8%80%83%E5%AE%8C%E5%B7%B2%E6%9C%8930%E4%B8%87%23) `506.4K 🔥` `NEW`
1. [韩国遭三连暴击](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E9%81%AD%E4%B8%89%E8%BF%9E%E6%9A%B4%E5%87%BB%23) `502.7K 🔥` `NEW`
1. [这就是教育的意义](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B0%B1%E6%98%AF%E6%95%99%E8%82%B2%E7%9A%84%E6%84%8F%E4%B9%89%23) `499.2K 🔥` `NEW`
1. [宋威龙鞠婧祎咬脖cp (Song Weilong and Ju Jingyi bite their necks cp)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%92%AC%E8%84%96cp%23) `497.1K 🔥` `NEW`
1. [日本也在报复韩国](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%B9%9F%E5%9C%A8%E6%8A%A5%E5%A4%8D%E9%9F%A9%E5%9B%BD%23) `493.6K 🔥` `NEW`
1. [老人被微信群轰炸有77万条未读消息](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E8%A2%AB%E5%BE%AE%E4%BF%A1%E7%BE%A4%E8%BD%B0%E7%82%B8%E6%9C%8977%E4%B8%87%E6%9D%A1%E6%9C%AA%E8%AF%BB%E6%B6%88%E6%81%AF%23) `491.7K 🔥` `NEW`
1. [江苏多所高校倒查3年科研诚信问题](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%8B%8F%E5%A4%9A%E6%89%80%E9%AB%98%E6%A0%A1%E5%80%92%E6%9F%A53%E5%B9%B4%E7%A7%91%E7%A0%94%E8%AF%9A%E4%BF%A1%E9%97%AE%E9%A2%98%23) `490.3K 🔥` `NEW`
1. [德国爆冷输球坑了韩国](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E7%88%86%E5%86%B7%E8%BE%93%E7%90%83%E5%9D%91%E4%BA%86%E9%9F%A9%E5%9B%BD%23) `486.1K 🔥` `NEW`
1. [郑在玹划桨板ins](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%9C%A8%E7%8E%B9%E5%88%92%E6%A1%A8%E6%9D%BFins%23) `483.0K 🔥` `NEW`
1. [当科学家意识到起名自由度很高时](https://s.weibo.com/weibo?q=%23%E5%BD%93%E7%A7%91%E5%AD%A6%E5%AE%B6%E6%84%8F%E8%AF%86%E5%88%B0%E8%B5%B7%E5%90%8D%E8%87%AA%E7%94%B1%E5%BA%A6%E5%BE%88%E9%AB%98%E6%97%B6%23) `481.5K 🔥` `NEW`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `479.0K 🔥` `NEW`
1. [苹果大涨价黄牛疯狂囤货](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%A4%A7%E6%B6%A8%E4%BB%B7%E9%BB%84%E7%89%9B%E7%96%AF%E7%8B%82%E5%9B%A4%E8%B4%A7%23) `476.5K 🔥` `NEW`
1. [警方通报多人将两女子关铁笼游街](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A4%9A%E4%BA%BA%E5%B0%86%E4%B8%A4%E5%A5%B3%E5%AD%90%E5%85%B3%E9%93%81%E7%AC%BC%E6%B8%B8%E8%A1%97%23) `473.5K 🔥` `NEW`
1. [周杰伦抱着女儿殿下到达北京啦 (Jay Chou arrived in Beijing with his daughter in his arms)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%8A%B1%E7%9D%80%E5%A5%B3%E5%84%BF%E6%AE%BF%E4%B8%8B%E5%88%B0%E8%BE%BE%E5%8C%97%E4%BA%AC%E5%95%A6%23) `471.1K 🔥` `NEW`
1. [厄瓜多尔全国放假一天](https://s.weibo.com/weibo?q=%23%E5%8E%84%E7%93%9C%E5%A4%9A%E5%B0%94%E5%85%A8%E5%9B%BD%E6%94%BE%E5%81%87%E4%B8%80%E5%A4%A9%23) `466.4K 🔥` `NEW`
1. [黄灿灿带王濛团搞抽象](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%B8%A6%E7%8E%8B%E6%BF%9B%E5%9B%A2%E6%90%9E%E6%8A%BD%E8%B1%A1%23) `463.1K 🔥` `NEW`
1. [科班出身还有优势吗](https://s.weibo.com/weibo?q=%23%E7%A7%91%E7%8F%AD%E5%87%BA%E8%BA%AB%E8%BF%98%E6%9C%89%E4%BC%98%E5%8A%BF%E5%90%97%23) `462.9K 🔥` `NEW`
1. [田曦薇也逃不过韩媒的死亡闪光灯](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E4%B9%9F%E9%80%83%E4%B8%8D%E8%BF%87%E9%9F%A9%E5%AA%92%E7%9A%84%E6%AD%BB%E4%BA%A1%E9%97%AA%E5%85%89%E7%81%AF%23) `459.3K 🔥` `NEW`
1. [黄金跌到不敢买了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%B7%8C%E5%88%B0%E4%B8%8D%E6%95%A2%E4%B9%B0%E4%BA%86%23) `566.0K 🔥` `+53%`
1. [白玉兰 (white magnolia)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%23) `524.6K 🔥` `+133%`
1. [德国 报复韩国](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%20%E6%8A%A5%E5%A4%8D%E9%9F%A9%E5%9B%BD%23) `656.7K 🔥` `-95%`
1. [九图了解防汛安全科普知识 (Jiutu understands popular science knowledge about flood prevention safety)](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%9B%BE%E4%BA%86%E8%A7%A3%E9%98%B2%E6%B1%9B%E5%AE%89%E5%85%A8%E7%A7%91%E6%99%AE%E7%9F%A5%E8%AF%86%23) `599.0K 🔥` `-64%`

Updated at 2026-06-26 12:47:54

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
