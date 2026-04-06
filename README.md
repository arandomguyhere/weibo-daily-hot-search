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

1. [上坟发现墓碑被贴欠费通知单 (I visited the grave and found that a debt notice was posted on the tombstone.)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%9D%9F%E5%8F%91%E7%8E%B0%E5%A2%93%E7%A2%91%E8%A2%AB%E8%B4%B4%E6%AC%A0%E8%B4%B9%E9%80%9A%E7%9F%A5%E5%8D%95%23) `797.5K 🔥` `NEW`
1. [2030年的中国什么样](https://s.weibo.com/weibo?q=%232030%E5%B9%B4%E7%9A%84%E4%B8%AD%E5%9B%BD%E4%BB%80%E4%B9%88%E6%A0%B7%23) `661.0K 🔥` `NEW`
1. [男子扫墓发现祖坟旁有近百枚鸭蛋](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%89%AB%E5%A2%93%E5%8F%91%E7%8E%B0%E7%A5%96%E5%9D%9F%E6%97%81%E6%9C%89%E8%BF%91%E7%99%BE%E6%9E%9A%E9%B8%AD%E8%9B%8B%23) `312.3K 🔥` `NEW`
1. [王楚钦晒世界杯大合照](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%99%92%E4%B8%96%E7%95%8C%E6%9D%AF%E5%A4%A7%E5%90%88%E7%85%A7%23) `312.1K 🔥` `NEW`
1. [湖南永州一交通事故致3死3伤](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E6%B0%B8%E5%B7%9E%E4%B8%80%E4%BA%A4%E9%80%9A%E4%BA%8B%E6%95%85%E8%87%B43%E6%AD%BB3%E4%BC%A4%23) `173.3K 🔥` `NEW`
1. [特朗普发文飙脏话](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%8F%91%E6%96%87%E9%A3%99%E8%84%8F%E8%AF%9D%23) `164.0K 🔥` `NEW`
1. [林宇辉 猎罪图鉴3不拍了](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AE%87%E8%BE%89%20%E7%8C%8E%E7%BD%AA%E5%9B%BE%E9%89%B43%E4%B8%8D%E6%8B%8D%E4%BA%86%23) `157.5K 🔥` `NEW`
1. [金价](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `147.1K 🔥` `NEW`
1. [唐艺昕李小冉都被对方的美貌迷住了](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E6%9D%8E%E5%B0%8F%E5%86%89%E9%83%BD%E8%A2%AB%E5%AF%B9%E6%96%B9%E7%9A%84%E7%BE%8E%E8%B2%8C%E8%BF%B7%E4%BD%8F%E4%BA%86%23) `114.2K 🔥` `NEW`
1. [伊朗革命卫队情报机构负责人身亡](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%9D%A9%E5%91%BD%E5%8D%AB%E9%98%9F%E6%83%85%E6%8A%A5%E6%9C%BA%E6%9E%84%E8%B4%9F%E8%B4%A3%E4%BA%BA%E8%BA%AB%E4%BA%A1%23) `98.6K 🔥` `NEW`
1. [台湾春卷中毒人数增至134人 (Number of spring roll poisoning cases in Taiwan rises to 134)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E6%98%A5%E5%8D%B7%E4%B8%AD%E6%AF%92%E4%BA%BA%E6%95%B0%E5%A2%9E%E8%87%B3134%E4%BA%BA%23) `96.6K 🔥` `NEW`
1. [朵朵和陈思诚共用一张脸](https://s.weibo.com/weibo?q=%23%E6%9C%B5%E6%9C%B5%E5%92%8C%E9%99%88%E6%80%9D%E8%AF%9A%E5%85%B1%E7%94%A8%E4%B8%80%E5%BC%A0%E8%84%B8%23) `93.0K 🔥` `NEW`
1. [国内金饰价格大跌](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%86%85%E9%87%91%E9%A5%B0%E4%BB%B7%E6%A0%BC%E5%A4%A7%E8%B7%8C%23) `92.9K 🔥` `NEW`
1. [田曦薇素颜饭撒](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E7%B4%A0%E9%A2%9C%E9%A5%AD%E6%92%92%23) `92.8K 🔥` `NEW`
1. [郭敬明又拍出了鞠婧祎的神级回首](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E5%8F%88%E6%8B%8D%E5%87%BA%E4%BA%86%E9%9E%A0%E5%A9%A7%E7%A5%8E%E7%9A%84%E7%A5%9E%E7%BA%A7%E5%9B%9E%E9%A6%96%23) `91.1K 🔥` `NEW`
1. [孕妇在飞纽约航班上高空产子](https://s.weibo.com/weibo?q=%23%E5%AD%95%E5%A6%87%E5%9C%A8%E9%A3%9E%E7%BA%BD%E7%BA%A6%E8%88%AA%E7%8F%AD%E4%B8%8A%E9%AB%98%E7%A9%BA%E4%BA%A7%E5%AD%90%23) `90.9K 🔥` `NEW`
1. [Angelababy家里摆满了粉丝的礼物](https://s.weibo.com/weibo?q=%23Angelababy%E5%AE%B6%E9%87%8C%E6%91%86%E6%BB%A1%E4%BA%86%E7%B2%89%E4%B8%9D%E7%9A%84%E7%A4%BC%E7%89%A9%23) `89.8K 🔥` `NEW`
1. [11岁男孩偷拿钥匙开车出车位就撞了](https://s.weibo.com/weibo?q=%2311%E5%B2%81%E7%94%B7%E5%AD%A9%E5%81%B7%E6%8B%BF%E9%92%A5%E5%8C%99%E5%BC%80%E8%BD%A6%E5%87%BA%E8%BD%A6%E4%BD%8D%E5%B0%B1%E6%92%9E%E4%BA%86%23) `89.0K 🔥` `NEW`
1. [张月队完颜团](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E9%98%9F%E5%AE%8C%E9%A2%9C%E5%9B%A2%23) `85.3K 🔥` `NEW`
1. [张雪回应陈光标捐款1000万](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%9B%9E%E5%BA%94%E9%99%88%E5%85%89%E6%A0%87%E6%8D%90%E6%AC%BE1000%E4%B8%87%23) `85.1K 🔥` `NEW`
1. [Angelababy 年上姐姐会疼人 (Angelababy’s older sister will love you)](https://s.weibo.com/weibo?q=%23Angelababy%20%E5%B9%B4%E4%B8%8A%E5%A7%90%E5%A7%90%E4%BC%9A%E7%96%BC%E4%BA%BA%23) `85.1K 🔥` `NEW`
1. [红果短剧公告](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E5%85%AC%E5%91%8A%23) `84.7K 🔥` `NEW`
1. [接下来几个月都有假](https://s.weibo.com/weibo?q=%23%E6%8E%A5%E4%B8%8B%E6%9D%A5%E5%87%A0%E4%B8%AA%E6%9C%88%E9%83%BD%E6%9C%89%E5%81%87%23) `84.5K 🔥` `NEW`
1. [以色列本土不安全了](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%9C%AC%E5%9C%9F%E4%B8%8D%E5%AE%89%E5%85%A8%E4%BA%86%23) `83.1K 🔥` `NEW`
1. [无法上牌的布加迪威航竟拍出1305万](https://s.weibo.com/weibo?q=%23%E6%97%A0%E6%B3%95%E4%B8%8A%E7%89%8C%E7%9A%84%E5%B8%83%E5%8A%A0%E8%BF%AA%E5%A8%81%E8%88%AA%E7%AB%9F%E6%8B%8D%E5%87%BA1305%E4%B8%87%23) `81.4K 🔥` `NEW`
1. [中国新能源车出口彻底爆发](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%96%B0%E8%83%BD%E6%BA%90%E8%BD%A6%E5%87%BA%E5%8F%A3%E5%BD%BB%E5%BA%95%E7%88%86%E5%8F%91%23) `75.9K 🔥` `NEW`
1. [地球online评分](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E7%90%83online%E8%AF%84%E5%88%86%23) `72.3K 🔥` `NEW`
1. [ZARA离快时尚越来越远了](https://s.weibo.com/weibo?q=%23ZARA%E7%A6%BB%E5%BF%AB%E6%97%B6%E5%B0%9A%E8%B6%8A%E6%9D%A5%E8%B6%8A%E8%BF%9C%E4%BA%86%23) `70.4K 🔥` `NEW`
1. [39岁离异姑姑独自带大5个孩子](https://s.weibo.com/weibo?q=%2339%E5%B2%81%E7%A6%BB%E5%BC%82%E5%A7%91%E5%A7%91%E7%8B%AC%E8%87%AA%E5%B8%A6%E5%A4%A75%E4%B8%AA%E5%AD%A9%E5%AD%90%23) `70.3K 🔥` `NEW`
1. [管晨辰说天天都能见到汪顺](https://s.weibo.com/weibo?q=%23%E7%AE%A1%E6%99%A8%E8%BE%B0%E8%AF%B4%E5%A4%A9%E5%A4%A9%E9%83%BD%E8%83%BD%E8%A7%81%E5%88%B0%E6%B1%AA%E9%A1%BA%23) `67.9K 🔥` `NEW`
1. [哈萨克斯坦人网购了一台小米电视 (A Kazakh man bought a Xiaomi TV online)](https://s.weibo.com/weibo?q=%23%E5%93%88%E8%90%A8%E5%85%8B%E6%96%AF%E5%9D%A6%E4%BA%BA%E7%BD%91%E8%B4%AD%E4%BA%86%E4%B8%80%E5%8F%B0%E5%B0%8F%E7%B1%B3%E7%94%B5%E8%A7%86%23) `66.5K 🔥` `NEW`
1. [汪顺说管晨辰长高了](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E9%A1%BA%E8%AF%B4%E7%AE%A1%E6%99%A8%E8%BE%B0%E9%95%BF%E9%AB%98%E4%BA%86%23) `66.1K 🔥` `NEW`
1. [iPhone18Pro配色前瞻](https://s.weibo.com/weibo?q=%23iPhone18Pro%E9%85%8D%E8%89%B2%E5%89%8D%E7%9E%BB%23) `64.7K 🔥` `NEW`
1. [四川一家14代守墓800多年](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E4%B8%80%E5%AE%B614%E4%BB%A3%E5%AE%88%E5%A2%93800%E5%A4%9A%E5%B9%B4%23) `60.9K 🔥` `NEW`
1. [阚清子乘风一公队长](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E4%B9%98%E9%A3%8E%E4%B8%80%E5%85%AC%E9%98%9F%E9%95%BF%23) `60.7K 🔥` `NEW`
1. [美伊停火协议或将于6日生效 (The US-Iran ceasefire agreement may come into effect on the 6th)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%81%9C%E7%81%AB%E5%8D%8F%E8%AE%AE%E6%88%96%E5%B0%86%E4%BA%8E6%E6%97%A5%E7%94%9F%E6%95%88%23) `324.6K 🔥` `+289%`
1. [当租到烟民退租的房](https://s.weibo.com/weibo?q=%23%E5%BD%93%E7%A7%9F%E5%88%B0%E7%83%9F%E6%B0%91%E9%80%80%E7%A7%9F%E7%9A%84%E6%88%BF%23) `175.5K 🔥` `+153%`
1. [被收养的小猫看见妈妈还在流浪](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%94%B6%E5%85%BB%E7%9A%84%E5%B0%8F%E7%8C%AB%E7%9C%8B%E8%A7%81%E5%A6%88%E5%A6%88%E8%BF%98%E5%9C%A8%E6%B5%81%E6%B5%AA%23) `126.0K 🔥` `+47%`
1. [香港飞香港的航班 (flights from Hong Kong to Hong Kong)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E9%A3%9E%E9%A6%99%E6%B8%AF%E7%9A%84%E8%88%AA%E7%8F%AD%23) `1.1M 🔥`
1. [桃黑黑道歉 (Taoheihei apologizes)](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E9%81%93%E6%AD%89%23) `141.5K 🔥`
1. [樊振东23岁成就世界杯四冠王](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C23%E5%B2%81%E6%88%90%E5%B0%B1%E4%B8%96%E7%95%8C%E6%9D%AF%E5%9B%9B%E5%86%A0%E7%8E%8B%23) `217.2K 🔥` `-74%`
1. [洗衣液是需要反应时间的](https://s.weibo.com/weibo?q=%23%E6%B4%97%E8%A1%A3%E6%B6%B2%E6%98%AF%E9%9C%80%E8%A6%81%E5%8F%8D%E5%BA%94%E6%97%B6%E9%97%B4%E7%9A%84%23) `194.0K 🔥` `-50%`
1. [王濛练心愿便利贴要疯了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E7%BB%83%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4%E8%A6%81%E7%96%AF%E4%BA%86%23) `132.4K 🔥` `-66%`
1. [乘风2026一公选歌组队 (Chengfeng 2026 Yi Gong selects songs to form a team)](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E4%B8%80%E5%85%AC%E9%80%89%E6%AD%8C%E7%BB%84%E9%98%9F%23) `97.4K 🔥` `-35%`
1. [李小冉想补偿唐艺昕 (Li Xiaoran wants to compensate Tang Yixin)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E6%83%B3%E8%A1%A5%E5%81%BF%E5%94%90%E8%89%BA%E6%98%95%23) `95.5K 🔥` `-37%`
1. [伊朗逼美国做选择](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%80%BC%E7%BE%8E%E5%9B%BD%E5%81%9A%E9%80%89%E6%8B%A9%23) `88.5K 🔥` `-77%`
1. [正午阳光首部正统武侠剧雨霖铃](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E5%8D%88%E9%98%B3%E5%85%89%E9%A6%96%E9%83%A8%E6%AD%A3%E7%BB%9F%E6%AD%A6%E4%BE%A0%E5%89%A7%E9%9B%A8%E9%9C%96%E9%93%83%23) `71.2K 🔥` `-53%`
1. [杨幂宋祖儿周也王楚然 全女穿越](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%AE%8B%E7%A5%96%E5%84%BF%E5%91%A8%E4%B9%9F%E7%8E%8B%E6%A5%9A%E7%84%B6%20%E5%85%A8%E5%A5%B3%E7%A9%BF%E8%B6%8A%23) `70.6K 🔥` `-27%`
1. [伊朗5名教授60多名大学生遭袭身亡](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%975%E5%90%8D%E6%95%99%E6%8E%8860%E5%A4%9A%E5%90%8D%E5%A4%A7%E5%AD%A6%E7%94%9F%E9%81%AD%E8%A2%AD%E8%BA%AB%E4%BA%A1%23) `61.4K 🔥` `-57%`

Updated at 2026-04-06 17:40:16

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
