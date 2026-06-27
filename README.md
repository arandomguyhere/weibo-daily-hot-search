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

1. [金鹰奖 (Golden Eagle Award)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%23) `2.0M 🔥` `NEW`
1. [佛得角出线](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E5%87%BA%E7%BA%BF%23) `1.4M 🔥` `NEW`
1. [中国为全球创新链关键一环](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%B8%BA%E5%85%A8%E7%90%83%E5%88%9B%E6%96%B0%E9%93%BE%E5%85%B3%E9%94%AE%E4%B8%80%E7%8E%AF%23) `1.1M 🔥` `NEW`
1. [杨紫获奖孙俪吴越反应](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E8%8E%B7%E5%A5%96%E5%AD%99%E4%BF%AA%E5%90%B4%E8%B6%8A%E5%8F%8D%E5%BA%94%23) `1.1M 🔥` `NEW`
1. [伊朗越位绝杀被吹](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%B6%8A%E4%BD%8D%E7%BB%9D%E6%9D%80%E8%A2%AB%E5%90%B9%23) `1.0M 🔥` `NEW`
1. [张凌赫问紫姐在哪](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%97%AE%E7%B4%AB%E5%A7%90%E5%9C%A8%E5%93%AA%23) `994.6K 🔥` `NEW`
1. [首支出局的世界杯冠军](https://s.weibo.com/weibo?q=%23%E9%A6%96%E6%94%AF%E5%87%BA%E5%B1%80%E7%9A%84%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%A0%E5%86%9B%23) `854.3K 🔥` `NEW`
1. [微信互删重加朋友圈互动全恢复](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E4%BA%92%E5%88%A0%E9%87%8D%E5%8A%A0%E6%9C%8B%E5%8F%8B%E5%9C%88%E4%BA%92%E5%8A%A8%E5%85%A8%E6%81%A2%E5%A4%8D%23) `804.4K 🔥` `NEW`
1. [衣服不是穿坏的是洗坏的](https://s.weibo.com/weibo?q=%23%E8%A1%A3%E6%9C%8D%E4%B8%8D%E6%98%AF%E7%A9%BF%E5%9D%8F%E7%9A%84%E6%98%AF%E6%B4%97%E5%9D%8F%E7%9A%84%23) `765.5K 🔥` `NEW`
1. [吃同学给的软糖头晕就医才知吸毒了](https://s.weibo.com/weibo?q=%23%E5%90%83%E5%90%8C%E5%AD%A6%E7%BB%99%E7%9A%84%E8%BD%AF%E7%B3%96%E5%A4%B4%E6%99%95%E5%B0%B1%E5%8C%BB%E6%89%8D%E7%9F%A5%E5%90%B8%E6%AF%92%E4%BA%86%23) `761.7K 🔥` `NEW`
1. [杨紫迪丽热巴赵丽颖三位主流视后 (Yang Zi, Di Lieba, Zhao Liying, three mainstream TV queens)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%B5%B5%E4%B8%BD%E9%A2%96%E4%B8%89%E4%BD%8D%E4%B8%BB%E6%B5%81%E8%A7%86%E5%90%8E%23) `760.5K 🔥` `NEW`
1. [白玉兰3月爆料全对上了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B03%E6%9C%88%E7%88%86%E6%96%99%E5%85%A8%E5%AF%B9%E4%B8%8A%E4%BA%86%23) `756.4K 🔥` `NEW`
1. [警方称13岁女孩与2男自愿发生关系](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E7%A7%B013%E5%B2%81%E5%A5%B3%E5%AD%A9%E4%B8%8E2%E7%94%B7%E8%87%AA%E6%84%BF%E5%8F%91%E7%94%9F%E5%85%B3%E7%B3%BB%23) `748.3K 🔥` `NEW`
1. [文科生看了两个小时志愿后](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%A7%91%E7%94%9F%E7%9C%8B%E4%BA%86%E4%B8%A4%E4%B8%AA%E5%B0%8F%E6%97%B6%E5%BF%97%E6%84%BF%E5%90%8E%23) `747.8K 🔥` `NEW`
1. [于正说白鹿十年只是刚刚开始](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E8%AF%B4%E7%99%BD%E9%B9%BF%E5%8D%81%E5%B9%B4%E5%8F%AA%E6%98%AF%E5%88%9A%E5%88%9A%E5%BC%80%E5%A7%8B%23) `727.4K 🔥` `NEW`
1. [看这期跑男我已经力竭了](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E8%BF%99%E6%9C%9F%E8%B7%91%E7%94%B7%E6%88%91%E5%B7%B2%E7%BB%8F%E5%8A%9B%E7%AB%AD%E4%BA%86%23) `679.4K 🔥` `NEW`
1. [韩国队要给西班牙磕一个](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E9%98%9F%E8%A6%81%E7%BB%99%E8%A5%BF%E7%8F%AD%E7%89%99%E7%A3%95%E4%B8%80%E4%B8%AA%23) `609.2K 🔥` `NEW`
1. [金价跌25%银价暴跌45%](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%B7%8C25%25%E9%93%B6%E4%BB%B7%E6%9A%B4%E8%B7%8C45%25%23) `597.4K 🔥` `NEW`
1. [韩国人一觉睡醒天又塌了](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E4%BA%BA%E4%B8%80%E8%A7%89%E7%9D%A1%E9%86%92%E5%A4%A9%E5%8F%88%E5%A1%8C%E4%BA%86%23) `590.2K 🔥` `NEW`
1. [被拐妇女犯重婚罪人贩子因时效脱罪](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%8B%90%E5%A6%87%E5%A5%B3%E7%8A%AF%E9%87%8D%E5%A9%9A%E7%BD%AA%E4%BA%BA%E8%B4%A9%E5%AD%90%E5%9B%A0%E6%97%B6%E6%95%88%E8%84%B1%E7%BD%AA%23) `579.4K 🔥` `NEW`
1. [陈露霍尊和解多次未果 (Chen Lu and Huo Zun failed to reconcile many times)](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%9C%B2%E9%9C%8D%E5%B0%8A%E5%92%8C%E8%A7%A3%E5%A4%9A%E6%AC%A1%E6%9C%AA%E6%9E%9C%23) `569.4K 🔥` `NEW`
1. [家长送荣耀600兑现600分承诺](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E9%80%81%E8%8D%A3%E8%80%80600%E5%85%91%E7%8E%B0600%E5%88%86%E6%89%BF%E8%AF%BA%23) `550.9K 🔥` `NEW`
1. [海清儿子近照](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%B8%85%E5%84%BF%E5%AD%90%E8%BF%91%E7%85%A7%23) `546.8K 🔥` `NEW`
1. [蔡徐坤签售会](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E7%AD%BE%E5%94%AE%E4%BC%9A%23) `454.0K 🔥` `NEW`
1. [和爸妈出去玩意识到了自己的傲慢](https://s.weibo.com/weibo?q=%23%E5%92%8C%E7%88%B8%E5%A6%88%E5%87%BA%E5%8E%BB%E7%8E%A9%E6%84%8F%E8%AF%86%E5%88%B0%E4%BA%86%E8%87%AA%E5%B7%B1%E7%9A%84%E5%82%B2%E6%85%A2%23) `397.3K 🔥` `NEW`
1. [美伊再爆发冲突](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%86%8D%E7%88%86%E5%8F%91%E5%86%B2%E7%AA%81%23) `354.4K 🔥` `NEW`
1. [登陆日](https://s.weibo.com/weibo?q=%23%E7%99%BB%E9%99%86%E6%97%A5%23) `334.6K 🔥` `NEW`
1. [别当着女婿面数落女儿](https://s.weibo.com/weibo?q=%23%E5%88%AB%E5%BD%93%E7%9D%80%E5%A5%B3%E5%A9%BF%E9%9D%A2%E6%95%B0%E8%90%BD%E5%A5%B3%E5%84%BF%23) `331.7K 🔥` `NEW`
1. [关晓彤真正大花完成体](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E7%9C%9F%E6%AD%A3%E5%A4%A7%E8%8A%B1%E5%AE%8C%E6%88%90%E4%BD%93%23) `299.1K 🔥` `NEW`
1. [阿根廷国家队回应迎战佛得角](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%9B%BD%E5%AE%B6%E9%98%9F%E5%9B%9E%E5%BA%94%E8%BF%8E%E6%88%98%E4%BD%9B%E5%BE%97%E8%A7%92%23) `274.3K 🔥` `NEW`
1. [千香云包场 (Qianxiangyun private venue)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%A6%99%E4%BA%91%E5%8C%85%E5%9C%BA%23) `266.3K 🔥` `NEW`
1. [埃及1比1伊朗](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A1%E6%AF%941%E4%BC%8A%E6%9C%97%23) `246.5K 🔥` `NEW`
1. [任素汐 我怕我没机会再上台说话](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E7%B4%A0%E6%B1%90%20%E6%88%91%E6%80%95%E6%88%91%E6%B2%A1%E6%9C%BA%E4%BC%9A%E5%86%8D%E4%B8%8A%E5%8F%B0%E8%AF%B4%E8%AF%9D%23) `236.0K 🔥` `NEW`
1. [刘宇宁一米九大个怕苍蝇和蝈蝈](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E4%B8%80%E7%B1%B3%E4%B9%9D%E5%A4%A7%E4%B8%AA%E6%80%95%E8%8B%8D%E8%9D%87%E5%92%8C%E8%9D%88%E8%9D%88%23) `217.3K 🔥` `NEW`
1. [佛得角首次晋级世界杯淘汰赛](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%A6%96%E6%AC%A1%E6%99%8B%E7%BA%A7%E4%B8%96%E7%95%8C%E6%9D%AF%E6%B7%98%E6%B1%B0%E8%B5%9B%23) `207.0K 🔥` `NEW`
1. [露芜衣怎么来千香客串了](https://s.weibo.com/weibo?q=%23%E9%9C%B2%E8%8A%9C%E8%A1%A3%E6%80%8E%E4%B9%88%E6%9D%A5%E5%8D%83%E9%A6%99%E5%AE%A2%E4%B8%B2%E4%BA%86%23) `202.2K 🔥` `NEW`
1. [张凌赫听到杨幂喊自己张哥的反应](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%90%AC%E5%88%B0%E6%9D%A8%E5%B9%82%E5%96%8A%E8%87%AA%E5%B7%B1%E5%BC%A0%E5%93%A5%E7%9A%84%E5%8F%8D%E5%BA%94%23) `197.9K 🔥` `NEW`
1. [王安宇毕业证书丢了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E6%AF%95%E4%B8%9A%E8%AF%81%E4%B9%A6%E4%B8%A2%E4%BA%86%23) `197.4K 🔥` `NEW`
1. [恋与深空一星评论反超五星评论](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E4%B8%80%E6%98%9F%E8%AF%84%E8%AE%BA%E5%8F%8D%E8%B6%85%E4%BA%94%E6%98%9F%E8%AF%84%E8%AE%BA%23) `181.5K 🔥` `NEW`
1. [凡人修仙传](https://s.weibo.com/weibo?q=%23%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0%23) `177.9K 🔥` `NEW`
1. [韩国人又开始结婚生娃了 (Koreans are getting married and having babies again)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E4%BA%BA%E5%8F%88%E5%BC%80%E5%A7%8B%E7%BB%93%E5%A9%9A%E7%94%9F%E5%A8%83%E4%BA%86%23) `177.1K 🔥` `NEW`
1. [马斯克回应苹果涨价](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%9B%9E%E5%BA%94%E8%8B%B9%E6%9E%9C%E6%B6%A8%E4%BB%B7%23) `177.1K 🔥` `NEW`
1. [30万内猎装车首选启境GT7](https://s.weibo.com/weibo?q=%2330%E4%B8%87%E5%86%85%E7%8C%8E%E8%A3%85%E8%BD%A6%E9%A6%96%E9%80%89%E5%90%AF%E5%A2%83GT7%23) `1.1M 🔥` `+164%`
1. [韩国民众怒火滔天](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%B0%91%E4%BC%97%E6%80%92%E7%81%AB%E6%BB%94%E5%A4%A9%23) `454.2K 🔥`
1. [藏海传 挂零](https://s.weibo.com/weibo?q=%23%E8%97%8F%E6%B5%B7%E4%BC%A0%20%E6%8C%82%E9%9B%B6%23) `525.9K 🔥` `-39%`
1. [背刺6.78亿用户WPS吃相有点难看](https://s.weibo.com/weibo?q=%23%E8%83%8C%E5%88%BA6.78%E4%BA%BF%E7%94%A8%E6%88%B7WPS%E5%90%83%E7%9B%B8%E6%9C%89%E7%82%B9%E9%9A%BE%E7%9C%8B%23) `388.9K 🔥` `-52%`
1. [ally说宋轶是白敬亭女朋友](https://s.weibo.com/weibo?q=%23ally%E8%AF%B4%E5%AE%8B%E8%BD%B6%E6%98%AF%E7%99%BD%E6%95%AC%E4%BA%AD%E5%A5%B3%E6%9C%8B%E5%8F%8B%23) `268.6K 🔥` `-41%`
1. [大疆已报案](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%96%86%E5%B7%B2%E6%8A%A5%E6%A1%88%23) `198.2K 🔥` `-62%`
1. [白玉兰](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%23) `181.0K 🔥` `-44%`

Updated at 2026-06-27 13:36:14

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
