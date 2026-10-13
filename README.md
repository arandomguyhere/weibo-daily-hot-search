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

1. [黄奇帆接受审查调查](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A5%87%E5%B8%86%E6%8E%A5%E5%8F%97%E5%AE%A1%E6%9F%A5%E8%B0%83%E6%9F%A5%23) `2.6M 🔥` `NEW`
1. [英方单方面停考雅思](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%96%B9%E5%8D%95%E6%96%B9%E9%9D%A2%E5%81%9C%E8%80%83%E9%9B%85%E6%80%9D%23) `1.0M 🔥` `NEW`
1. [你我的长征](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%88%91%E7%9A%84%E9%95%BF%E5%BE%81%23) `852.9K 🔥` `NEW`
1. [雅思公布赔偿方案](https://s.weibo.com/weibo?q=%23%E9%9B%85%E6%80%9D%E5%85%AC%E5%B8%83%E8%B5%94%E5%81%BF%E6%96%B9%E6%A1%88%23) `743.6K 🔥` `NEW`
1. [机器狗第一次进哀牢山就拍到冥界之花](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E7%8B%97%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%BF%9B%E5%93%80%E7%89%A2%E5%B1%B1%E5%B0%B1%E6%8B%8D%E5%88%B0%E5%86%A5%E7%95%8C%E4%B9%8B%E8%8A%B1%23) `555.8K 🔥` `NEW`
1. [白云山小柴胡守护热血赛场](https://s.weibo.com/weibo?q=%23%E7%99%BD%E4%BA%91%E5%B1%B1%E5%B0%8F%E6%9F%B4%E8%83%A1%E5%AE%88%E6%8A%A4%E7%83%AD%E8%A1%80%E8%B5%9B%E5%9C%BA%23) `549.0K 🔥` `NEW`
1. [白鹿泰国见面会退票](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%B3%B0%E5%9B%BD%E8%A7%81%E9%9D%A2%E4%BC%9A%E9%80%80%E7%A5%A8%23) `541.0K 🔥` `NEW`
1. [教师因成绩差被迫耻辱合影调查进度0](https://s.weibo.com/weibo?q=%23%E6%95%99%E5%B8%88%E5%9B%A0%E6%88%90%E7%BB%A9%E5%B7%AE%E8%A2%AB%E8%BF%AB%E8%80%BB%E8%BE%B1%E5%90%88%E5%BD%B1%E8%B0%83%E6%9F%A5%E8%BF%9B%E5%BA%A60%23) `488.4K 🔥` `NEW`
1. [香港捣毁跨国卖淫集团年龄20至86岁](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E6%8D%A3%E6%AF%81%E8%B7%A8%E5%9B%BD%E5%8D%96%E6%B7%AB%E9%9B%86%E5%9B%A2%E5%B9%B4%E9%BE%8420%E8%87%B386%E5%B2%81%23) `482.3K 🔥` `NEW`
1. [缅北四大家族三个已被中国宣判](https://s.weibo.com/weibo?q=%23%E7%BC%85%E5%8C%97%E5%9B%9B%E5%A4%A7%E5%AE%B6%E6%97%8F%E4%B8%89%E4%B8%AA%E5%B7%B2%E8%A2%AB%E4%B8%AD%E5%9B%BD%E5%AE%A3%E5%88%A4%23) `479.3K 🔥` `NEW`
1. [王星被胁迫借下的网贷该不该还](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%9F%E8%A2%AB%E8%83%81%E8%BF%AB%E5%80%9F%E4%B8%8B%E7%9A%84%E7%BD%91%E8%B4%B7%E8%AF%A5%E4%B8%8D%E8%AF%A5%E8%BF%98%23) `472.2K 🔥` `NEW`
1. [警方已确认与未成年金赛纶交往男星](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E5%B7%B2%E7%A1%AE%E8%AE%A4%E4%B8%8E%E6%9C%AA%E6%88%90%E5%B9%B4%E9%87%91%E8%B5%9B%E7%BA%B6%E4%BA%A4%E5%BE%80%E7%94%B7%E6%98%9F%23) `467.3K 🔥` `NEW`
1. [患者送1.9元汽水后举报药房人员收礼](https://s.weibo.com/weibo?q=%23%E6%82%A3%E8%80%85%E9%80%811.9%E5%85%83%E6%B1%BD%E6%B0%B4%E5%90%8E%E4%B8%BE%E6%8A%A5%E8%8D%AF%E6%88%BF%E4%BA%BA%E5%91%98%E6%94%B6%E7%A4%BC%23) `458.7K 🔥` `NEW`
1. [吃播 催吐](https://s.weibo.com/weibo?q=%23%E5%90%83%E6%92%AD%20%E5%82%AC%E5%90%90%23) `442.1K 🔥` `NEW`
1. [第一个抵制粉丝云包场的艺人](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%8A%B5%E5%88%B6%E7%B2%89%E4%B8%9D%E4%BA%91%E5%8C%85%E5%9C%BA%E7%9A%84%E8%89%BA%E4%BA%BA%23) `439.8K 🔥` `NEW`
1. [AI女爱豆因怀孕暂停活动](https://s.weibo.com/weibo?q=%23AI%E5%A5%B3%E7%88%B1%E8%B1%86%E5%9B%A0%E6%80%80%E5%AD%95%E6%9A%82%E5%81%9C%E6%B4%BB%E5%8A%A8%23) `410.7K 🔥` `NEW`
1. [王源心意派送中](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E5%BF%83%E6%84%8F%E6%B4%BE%E9%80%81%E4%B8%AD%23) `404.5K 🔥` `NEW`
1. [荣耀官宣WIN电竞宇宙](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80%E5%AE%98%E5%AE%A3WIN%E7%94%B5%E7%AB%9E%E5%AE%87%E5%AE%99%23) `402.0K 🔥` `NEW`
1. [人还活着亲戚已经排号等继承](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E8%BF%98%E6%B4%BB%E7%9D%80%E4%BA%B2%E6%88%9A%E5%B7%B2%E7%BB%8F%E6%8E%92%E5%8F%B7%E7%AD%89%E7%BB%A7%E6%89%BF%23) `399.8K 🔥` `NEW`
1. [空气炸锅终于对葡萄下手了](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%B0%94%E7%82%B8%E9%94%85%E7%BB%88%E4%BA%8E%E5%AF%B9%E8%91%A1%E8%90%84%E4%B8%8B%E6%89%8B%E4%BA%86%23) `390.6K 🔥` `NEW`
1. [男生高考522分被调剂马术专业](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E9%AB%98%E8%80%83522%E5%88%86%E8%A2%AB%E8%B0%83%E5%89%82%E9%A9%AC%E6%9C%AF%E4%B8%93%E4%B8%9A%23) `324.6K 🔥` `NEW`
1. [剧方回应男群演疑似猥亵女演员](https://s.weibo.com/weibo?q=%23%E5%89%A7%E6%96%B9%E5%9B%9E%E5%BA%94%E7%94%B7%E7%BE%A4%E6%BC%94%E7%96%91%E4%BC%BC%E7%8C%A5%E4%BA%B5%E5%A5%B3%E6%BC%94%E5%91%98%23) `322.8K 🔥` `NEW`
1. [这居然是一百块](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B1%85%E7%84%B6%E6%98%AF%E4%B8%80%E7%99%BE%E5%9D%97%23) `320.8K 🔥` `NEW`
1. [AI女爱豆发长文回应怀孕](https://s.weibo.com/weibo?q=%23AI%E5%A5%B3%E7%88%B1%E8%B1%86%E5%8F%91%E9%95%BF%E6%96%87%E5%9B%9E%E5%BA%94%E6%80%80%E5%AD%95%23) `309.5K 🔥` `NEW`
1. [缺钾有5个典型信号](https://s.weibo.com/weibo?q=%23%E7%BC%BA%E9%92%BE%E6%9C%895%E4%B8%AA%E5%85%B8%E5%9E%8B%E4%BF%A1%E5%8F%B7%23) `282.4K 🔥` `NEW`
1. [泰国 演唱会](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%20%E6%BC%94%E5%94%B1%E4%BC%9A%23) `275.1K 🔥` `NEW`
1. [老爸向儿子借5000被拒听完原因舒服了](https://s.weibo.com/weibo?q=%23%E8%80%81%E7%88%B8%E5%90%91%E5%84%BF%E5%AD%90%E5%80%9F5000%E8%A2%AB%E6%8B%92%E5%90%AC%E5%AE%8C%E5%8E%9F%E5%9B%A0%E8%88%92%E6%9C%8D%E4%BA%86%23) `269.6K 🔥` `NEW`
1. [国考岗位](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%80%83%E5%B2%97%E4%BD%8D%23) `256.7K 🔥` `NEW`
1. [周也 金鸡提名](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%20%E9%87%91%E9%B8%A1%E6%8F%90%E5%90%8D%23) `254.4K 🔥` `NEW`
1. [郑钦文将参加WTA250中国香港站](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%B0%86%E5%8F%82%E5%8A%A0WTA250%E4%B8%AD%E5%9B%BD%E9%A6%99%E6%B8%AF%E7%AB%99%23) `212.6K 🔥` `NEW`
1. [华熙生物发布讣告](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E7%86%99%E7%94%9F%E7%89%A9%E5%8F%91%E5%B8%83%E8%AE%A3%E5%91%8A%23) `208.4K 🔥` `NEW`
1. [已有多位主播因畸形吃播离世](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E6%9C%89%E5%A4%9A%E4%BD%8D%E4%B8%BB%E6%92%AD%E5%9B%A0%E7%95%B8%E5%BD%A2%E5%90%83%E6%92%AD%E7%A6%BB%E4%B8%96%23) `208.2K 🔥` `NEW`
1. [男子婚内出轨获刑2年小三获刑1年](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%A9%9A%E5%86%85%E5%87%BA%E8%BD%A8%E8%8E%B7%E5%88%912%E5%B9%B4%E5%B0%8F%E4%B8%89%E8%8E%B7%E5%88%911%E5%B9%B4%23) `197.2K 🔥` `NEW`
1. [恋综男嘉宾回避赵奕欢的原因](https://s.weibo.com/weibo?q=%23%E6%81%8B%E7%BB%BC%E7%94%B7%E5%98%89%E5%AE%BE%E5%9B%9E%E9%81%BF%E8%B5%B5%E5%A5%95%E6%AC%A2%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `182.0K 🔥` `NEW`
1. [郑钦文再登Vogue封面](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%86%8D%E7%99%BBVogue%E5%B0%81%E9%9D%A2%23) `176.4K 🔥` `NEW`
1. [海底捞向创始人张勇提供1亿元贷款融资](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%BA%95%E6%8D%9E%E5%90%91%E5%88%9B%E5%A7%8B%E4%BA%BA%E5%BC%A0%E5%8B%87%E6%8F%90%E4%BE%9B1%E4%BA%BF%E5%85%83%E8%B4%B7%E6%AC%BE%E8%9E%8D%E8%B5%84%23) `172.1K 🔥` `NEW`
1. [曝利雅得胜利嫌C罗太贵不续约](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%88%A9%E9%9B%85%E5%BE%97%E8%83%9C%E5%88%A9%E5%AB%8CC%E7%BD%97%E5%A4%AA%E8%B4%B5%E4%B8%8D%E7%BB%AD%E7%BA%A6%23) `171.6K 🔥` `NEW`
1. [老式珍珠奶茶敢不敢尝尝](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%BC%8F%E7%8F%8D%E7%8F%A0%E5%A5%B6%E8%8C%B6%E6%95%A2%E4%B8%8D%E6%95%A2%E5%B0%9D%E5%B0%9D%23) `171.1K 🔥` `NEW`
1. [网友讲为什么不要乱搞男女关系](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E8%AE%B2%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E8%A6%81%E4%B9%B1%E6%90%9E%E7%94%B7%E5%A5%B3%E5%85%B3%E7%B3%BB%23) `164.2K 🔥` `NEW`
1. [上海一女子买房8年才知被登记赠与](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%B8%80%E5%A5%B3%E5%AD%90%E4%B9%B0%E6%88%BF8%E5%B9%B4%E6%89%8D%E7%9F%A5%E8%A2%AB%E7%99%BB%E8%AE%B0%E8%B5%A0%E4%B8%8E%23) `164.2K 🔥` `NEW`
1. [王者周年庆福利来了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E5%91%A8%E5%B9%B4%E5%BA%86%E7%A6%8F%E5%88%A9%E6%9D%A5%E4%BA%86%23) `164.2K 🔥` `NEW`
1. [周也大学四年到底学的什么](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E5%A4%A7%E5%AD%A6%E5%9B%9B%E5%B9%B4%E5%88%B0%E5%BA%95%E5%AD%A6%E7%9A%84%E4%BB%80%E4%B9%88%23) `158.2K 🔥` `NEW`
1. [郭涵煜武网超级大逆转](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%B6%B5%E7%85%9C%E6%AD%A6%E7%BD%91%E8%B6%85%E7%BA%A7%E5%A4%A7%E9%80%86%E8%BD%AC%23) `157.4K 🔥` `NEW`
1. [云旗郝熠然双人曲](https://s.weibo.com/weibo?q=%23%E4%BA%91%E6%97%97%E9%83%9D%E7%86%A0%E7%84%B6%E5%8F%8C%E4%BA%BA%E6%9B%B2%23) `156.8K 🔥` `NEW`
1. [霸王茶姬赠送奶茶成本加盟商承担](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E8%B5%A0%E9%80%81%E5%A5%B6%E8%8C%B6%E6%88%90%E6%9C%AC%E5%8A%A0%E7%9B%9F%E5%95%86%E6%89%BF%E6%8B%85%23) `153.8K 🔥` `NEW`
1. [郭碧婷的美貌后继有人了](https://s.weibo.com/weibo?q=%23%E9%83%AD%E7%A2%A7%E5%A9%B7%E7%9A%84%E7%BE%8E%E8%B2%8C%E5%90%8E%E7%BB%A7%E6%9C%89%E4%BA%BA%E4%BA%86%23) `147.0K 🔥` `NEW`
1. [武网郭涵煜大逆转科斯蒂亚](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E7%BD%91%E9%83%AD%E6%B6%B5%E7%85%9C%E5%A4%A7%E9%80%86%E8%BD%AC%E7%A7%91%E6%96%AF%E8%92%82%E4%BA%9A%23) `146.8K 🔥` `NEW`
1. [陈小纭当年素颜大家都说像鹿晗](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%8F%E7%BA%AD%E5%BD%93%E5%B9%B4%E7%B4%A0%E9%A2%9C%E5%A4%A7%E5%AE%B6%E9%83%BD%E8%AF%B4%E5%83%8F%E9%B9%BF%E6%99%97%23) `144.5K 🔥` `NEW`
1. [茶百道涉嫌IPO操纵被停牌](https://s.weibo.com/weibo?q=%23%E8%8C%B6%E7%99%BE%E9%81%93%E6%B6%89%E5%AB%8CIPO%E6%93%8D%E7%BA%B5%E8%A2%AB%E5%81%9C%E7%89%8C%23) `141.6K 🔥` `NEW`

Updated at 2026-10-13 18:54:18

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
