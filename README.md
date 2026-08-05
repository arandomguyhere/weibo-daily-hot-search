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

1. [金饰大跌金股大涨 (Gold jewelry plummets, gold stocks surge)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E5%A4%A7%E8%B7%8C%E9%87%91%E8%82%A1%E5%A4%A7%E6%B6%A8%23) `860.0K 🔥` `NEW`
1. [火遍全球的Chinamaxxing是什么](https://s.weibo.com/weibo?q=%23%E7%81%AB%E9%81%8D%E5%85%A8%E7%90%83%E7%9A%84Chinamaxxing%E6%98%AF%E4%BB%80%E4%B9%88%23) `658.4K 🔥` `NEW`
1. [河南试行周五半天加周末加年假模式](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E8%AF%95%E8%A1%8C%E5%91%A8%E4%BA%94%E5%8D%8A%E5%A4%A9%E5%8A%A0%E5%91%A8%E6%9C%AB%E5%8A%A0%E5%B9%B4%E5%81%87%E6%A8%A1%E5%BC%8F%23) `437.7K 🔥` `NEW`
1. [全国网络辟谣7月辟谣榜](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E7%BD%91%E7%BB%9C%E8%BE%9F%E8%B0%A37%E6%9C%88%E8%BE%9F%E8%B0%A3%E6%A6%9C%23) `411.0K 🔥` `NEW`
1. [C罗晒豪车收藏](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%99%92%E8%B1%AA%E8%BD%A6%E6%94%B6%E8%97%8F%23) `406.2K 🔥` `NEW`
1. [婚外胚胎案妻子信用卡已被停](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E6%A1%88%E5%A6%BB%E5%AD%90%E4%BF%A1%E7%94%A8%E5%8D%A1%E5%B7%B2%E8%A2%AB%E5%81%9C%23) `371.5K 🔥` `NEW`
1. [华为发布会](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%8F%91%E5%B8%83%E4%BC%9A%23) `313.0K 🔥` `NEW`
1. [中国人能飞](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E8%83%BD%E9%A3%9E%23) `309.6K 🔥` `NEW`
1. [迪丽热巴王与嫣](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%8E%8B%E4%B8%8E%E5%AB%A3%23) `299.8K 🔥` `NEW`
1. [出轨丈夫给女儿生活费每次都查账](https://s.weibo.com/weibo?q=%23%E5%87%BA%E8%BD%A8%E4%B8%88%E5%A4%AB%E7%BB%99%E5%A5%B3%E5%84%BF%E7%94%9F%E6%B4%BB%E8%B4%B9%E6%AF%8F%E6%AC%A1%E9%83%BD%E6%9F%A5%E8%B4%A6%23) `286.1K 🔥` `NEW`
1. [只有张馨予理解了珠帘的用意 (Only Zhang Xinyu understood the purpose of the bead curtain)](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E6%9C%89%E5%BC%A0%E9%A6%A8%E4%BA%88%E7%90%86%E8%A7%A3%E4%BA%86%E7%8F%A0%E5%B8%98%E7%9A%84%E7%94%A8%E6%84%8F%23) `285.7K 🔥` `NEW`
1. [孙俪晒女儿化的妆](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E6%99%92%E5%A5%B3%E5%84%BF%E5%8C%96%E7%9A%84%E5%A6%86%23) `273.7K 🔥` `NEW`
1. [中传 取消艺考](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BC%A0%20%E5%8F%96%E6%B6%88%E8%89%BA%E8%80%83%23) `267.9K 🔥` `NEW`
1. [李修贤多次公开嘲讽周星驰](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BF%AE%E8%B4%A4%E5%A4%9A%E6%AC%A1%E5%85%AC%E5%BC%80%E5%98%B2%E8%AE%BD%E5%91%A8%E6%98%9F%E9%A9%B0%23) `267.8K 🔥` `NEW`
1. [护士戴首饰做美甲为婴儿打针引质疑](https://s.weibo.com/weibo?q=%23%E6%8A%A4%E5%A3%AB%E6%88%B4%E9%A6%96%E9%A5%B0%E5%81%9A%E7%BE%8E%E7%94%B2%E4%B8%BA%E5%A9%B4%E5%84%BF%E6%89%93%E9%92%88%E5%BC%95%E8%B4%A8%E7%96%91%23) `267.4K 🔥` `NEW`
1. [李宇春辛芷蕾高叶倪妮新综收官合照](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%87%E6%98%A5%E8%BE%9B%E8%8A%B7%E8%95%BE%E9%AB%98%E5%8F%B6%E5%80%AA%E5%A6%AE%E6%96%B0%E7%BB%BC%E6%94%B6%E5%AE%98%E5%90%88%E7%85%A7%23) `251.1K 🔥` `NEW`
1. [孟子义连续四部剧进拉新年榜](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E8%BF%9E%E7%BB%AD%E5%9B%9B%E9%83%A8%E5%89%A7%E8%BF%9B%E6%8B%89%E6%96%B0%E5%B9%B4%E6%A6%9C%23) `238.7K 🔥` `NEW`
1. [印度乘客打车不付钱只给感谢](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E4%B9%98%E5%AE%A2%E6%89%93%E8%BD%A6%E4%B8%8D%E4%BB%98%E9%92%B1%E5%8F%AA%E7%BB%99%E6%84%9F%E8%B0%A2%23) `238.5K 🔥` `NEW`
1. [男子被告强奸杀人最终认定疑罪从无](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%A2%AB%E5%91%8A%E5%BC%BA%E5%A5%B8%E6%9D%80%E4%BA%BA%E6%9C%80%E7%BB%88%E8%AE%A4%E5%AE%9A%E7%96%91%E7%BD%AA%E4%BB%8E%E6%97%A0%23) `237.5K 🔥` `NEW`
1. [TF五代首次公式照](https://s.weibo.com/weibo?q=%23TF%E4%BA%94%E4%BB%A3%E9%A6%96%E6%AC%A1%E5%85%AC%E5%BC%8F%E7%85%A7%23) `235.3K 🔥` `NEW`
1. [居然有HR分不清本科和前科 (There is actually an HR person who can’t tell the difference between a bachelor’s degree and a criminal record.)](https://s.weibo.com/weibo?q=%23%E5%B1%85%E7%84%B6%E6%9C%89HR%E5%88%86%E4%B8%8D%E6%B8%85%E6%9C%AC%E7%A7%91%E5%92%8C%E5%89%8D%E7%A7%91%23) `228.6K 🔥` `NEW`
1. [白海豚路径](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E8%B7%AF%E5%BE%84%23) `215.5K 🔥` `NEW`
1. [事业单位招考第一名被第二名嘲讽](https://s.weibo.com/weibo?q=%23%E4%BA%8B%E4%B8%9A%E5%8D%95%E4%BD%8D%E6%8B%9B%E8%80%83%E7%AC%AC%E4%B8%80%E5%90%8D%E8%A2%AB%E7%AC%AC%E4%BA%8C%E5%90%8D%E5%98%B2%E8%AE%BD%23) `213.9K 🔥` `NEW`
1. [李盈莹心脏出状况](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%9B%88%E8%8E%B9%E5%BF%83%E8%84%8F%E5%87%BA%E7%8A%B6%E5%86%B5%23) `204.1K 🔥` `NEW`
1. [女子9楼连扔6个烂桃被刑拘](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%909%E6%A5%BC%E8%BF%9E%E6%89%946%E4%B8%AA%E7%83%82%E6%A1%83%E8%A2%AB%E5%88%91%E6%8B%98%23) `203.7K 🔥` `NEW`
1. [叠纸客服回应玩家请愿恢复敖尹](https://s.weibo.com/weibo?q=%23%E5%8F%A0%E7%BA%B8%E5%AE%A2%E6%9C%8D%E5%9B%9E%E5%BA%94%E7%8E%A9%E5%AE%B6%E8%AF%B7%E6%84%BF%E6%81%A2%E5%A4%8D%E6%95%96%E5%B0%B9%23) `203.3K 🔥` `NEW`
1. [我国成功在海上发射一箭双星](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%88%90%E5%8A%9F%E5%9C%A8%E6%B5%B7%E4%B8%8A%E5%8F%91%E5%B0%84%E4%B8%80%E7%AE%AD%E5%8F%8C%E6%98%9F%23) `202.5K 🔥` `NEW`
1. [银行午休用户只能翘班办业务吗](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E5%8D%88%E4%BC%91%E7%94%A8%E6%88%B7%E5%8F%AA%E8%83%BD%E7%BF%98%E7%8F%AD%E5%8A%9E%E4%B8%9A%E5%8A%A1%E5%90%97%23) `192.0K 🔥` `NEW`
1. [为什么高磅数T恤很少人穿了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E9%AB%98%E7%A3%85%E6%95%B0T%E6%81%A4%E5%BE%88%E5%B0%91%E4%BA%BA%E7%A9%BF%E4%BA%86%23) `181.5K 🔥` `NEW`
1. [御廷谣收视六连冠](https://s.weibo.com/weibo?q=%23%E5%BE%A1%E5%BB%B7%E8%B0%A3%E6%94%B6%E8%A7%86%E5%85%AD%E8%BF%9E%E5%86%A0%23) `180.3K 🔥` `NEW`
1. [鞠婧祎完全不给代拍好脸色 (Ju Jingyi doesn’t look good on her agent at all)](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%AE%8C%E5%85%A8%E4%B8%8D%E7%BB%99%E4%BB%A3%E6%8B%8D%E5%A5%BD%E8%84%B8%E8%89%B2%23) `180.1K 🔥` `NEW`
1. [奔驰车主占道停车殴打店主致肋骨骨折](https://s.weibo.com/weibo?q=%23%E5%A5%94%E9%A9%B0%E8%BD%A6%E4%B8%BB%E5%8D%A0%E9%81%93%E5%81%9C%E8%BD%A6%E6%AE%B4%E6%89%93%E5%BA%97%E4%B8%BB%E8%87%B4%E8%82%8B%E9%AA%A8%E9%AA%A8%E6%8A%98%23) `179.4K 🔥` `NEW`
1. [吴彦祖13岁女儿颜值](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%BD%A6%E7%A5%9613%E5%B2%81%E5%A5%B3%E5%84%BF%E9%A2%9C%E5%80%BC%23) `178.6K 🔥` `NEW`
1. [如何正确请同事喝奶茶](https://s.weibo.com/weibo?q=%23%E5%A6%82%E4%BD%95%E6%AD%A3%E7%A1%AE%E8%AF%B7%E5%90%8C%E4%BA%8B%E5%96%9D%E5%A5%B6%E8%8C%B6%23) `178.2K 🔥` `NEW`
1. [TF五代开通高会](https://s.weibo.com/weibo?q=%23TF%E4%BA%94%E4%BB%A3%E5%BC%80%E9%80%9A%E9%AB%98%E4%BC%9A%23) `176.2K 🔥` `NEW`
1. [赵今麦高马尾千金](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E9%AB%98%E9%A9%AC%E5%B0%BE%E5%8D%83%E9%87%91%23) `169.7K 🔥` `NEW`
1. [马斯克回应一个月亏掉2.45万亿元](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%9B%9E%E5%BA%94%E4%B8%80%E4%B8%AA%E6%9C%88%E4%BA%8F%E6%8E%892.45%E4%B8%87%E4%BA%BF%E5%85%83%23) `167.2K 🔥` `NEW`
1. [锤娜丽莎这么瘦了](https://s.weibo.com/weibo?q=%23%E9%94%A4%E5%A8%9C%E4%B8%BD%E8%8E%8E%E8%BF%99%E4%B9%88%E7%98%A6%E4%BA%86%23) `164.3K 🔥` `NEW`
1. [不要向AI求安慰](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E5%90%91AI%E6%B1%82%E5%AE%89%E6%85%B0%23) `150.3K 🔥` `NEW`
1. [张凌赫让章若楠金靖别扯衣服](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%AE%A9%E7%AB%A0%E8%8B%A5%E6%A5%A0%E9%87%91%E9%9D%96%E5%88%AB%E6%89%AF%E8%A1%A3%E6%9C%8D%23) `150.3K 🔥` `NEW`
1. [瘦了后感受到了朋友微妙的恶意 (After losing weight, I felt the subtle malice from my friends.)](https://s.weibo.com/weibo?q=%23%E7%98%A6%E4%BA%86%E5%90%8E%E6%84%9F%E5%8F%97%E5%88%B0%E4%BA%86%E6%9C%8B%E5%8F%8B%E5%BE%AE%E5%A6%99%E7%9A%84%E6%81%B6%E6%84%8F%23) `150.3K 🔥` `NEW`
1. [曝76人无法签下西蒙斯](https://s.weibo.com/weibo?q=%23%E6%9B%9D76%E4%BA%BA%E6%97%A0%E6%B3%95%E7%AD%BE%E4%B8%8B%E8%A5%BF%E8%92%99%E6%96%AF%23) `150.3K 🔥` `NEW`
1. [发现了一种很新的老人](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E4%BA%86%E4%B8%80%E7%A7%8D%E5%BE%88%E6%96%B0%E7%9A%84%E8%80%81%E4%BA%BA%23) `534.9K 🔥` `+42%`
1. [选了冷门专业后发现工作也很香](https://s.weibo.com/weibo?q=%23%E9%80%89%E4%BA%86%E5%86%B7%E9%97%A8%E4%B8%93%E4%B8%9A%E5%90%8E%E5%8F%91%E7%8E%B0%E5%B7%A5%E4%BD%9C%E4%B9%9F%E5%BE%88%E9%A6%99%23) `236.6K 🔥`
1. [韩国宣布国家灾难状态 (South Korea declares national disaster)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%AE%A3%E5%B8%83%E5%9B%BD%E5%AE%B6%E7%81%BE%E9%9A%BE%E7%8A%B6%E6%80%81%23) `1.2M 🔥` `-30%`
1. [短剧演员日薪四万](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E6%BC%94%E5%91%98%E6%97%A5%E8%96%AA%E5%9B%9B%E4%B8%87%23) `470.1K 🔥` `-67%`
1. [员工用代码17小时删光公司89TB数据 (Employee used code to delete 89TB of company data in 17 hours)](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A5%E7%94%A8%E4%BB%A3%E7%A0%8117%E5%B0%8F%E6%97%B6%E5%88%A0%E5%85%89%E5%85%AC%E5%8F%B889TB%E6%95%B0%E6%8D%AE%23) `241.1K 🔥` `-59%`
1. [允许一切发生还能显得你大方一点](https://s.weibo.com/weibo?q=%23%E5%85%81%E8%AE%B8%E4%B8%80%E5%88%87%E5%8F%91%E7%94%9F%E8%BF%98%E8%83%BD%E6%98%BE%E5%BE%97%E4%BD%A0%E5%A4%A7%E6%96%B9%E4%B8%80%E7%82%B9%23) `228.9K 🔥` `-72%`
1. [刘浩存最美的一次亮相](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E6%9C%80%E7%BE%8E%E7%9A%84%E4%B8%80%E6%AC%A1%E4%BA%AE%E7%9B%B8%23) `202.1K 🔥` `-66%`
1. [有没有体面一点的上车方法](https://s.weibo.com/weibo?q=%23%E6%9C%89%E6%B2%A1%E6%9C%89%E4%BD%93%E9%9D%A2%E4%B8%80%E7%82%B9%E7%9A%84%E4%B8%8A%E8%BD%A6%E6%96%B9%E6%B3%95%23) `180.8K 🔥` `-47%`
1. [为什么领导很少请假](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E9%A2%86%E5%AF%BC%E5%BE%88%E5%B0%91%E8%AF%B7%E5%81%87%23) `150.3K 🔥` `-84%`

Updated at 2026-08-05 15:11:14

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
