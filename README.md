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

1. [王虹 (Wang Hong)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%99%B9%23) `1.5M 🔥` `NEW`
1. [共赴亚太数字之约](https://s.weibo.com/weibo?q=%23%E5%85%B1%E8%B5%B4%E4%BA%9A%E5%A4%AA%E6%95%B0%E5%AD%97%E4%B9%8B%E7%BA%A6%23) `913.3K 🔥` `NEW`
1. [郁可唯为奕派M8车主交付](https://s.weibo.com/weibo?q=%23%E9%83%81%E5%8F%AF%E5%94%AF%E4%B8%BA%E5%A5%95%E6%B4%BEM8%E8%BD%A6%E4%B8%BB%E4%BA%A4%E4%BB%98%23) `912.9K 🔥` `NEW`
1. [孙女的微信状态只有爷爷当真了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%A5%B3%E7%9A%84%E5%BE%AE%E4%BF%A1%E7%8A%B6%E6%80%81%E5%8F%AA%E6%9C%89%E7%88%B7%E7%88%B7%E5%BD%93%E7%9C%9F%E4%BA%86%23) `912.2K 🔥` `NEW`
1. [邹市明带了消磁身份证去离婚](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E%E5%B8%A6%E4%BA%86%E6%B6%88%E7%A3%81%E8%BA%AB%E4%BB%BD%E8%AF%81%E5%8E%BB%E7%A6%BB%E5%A9%9A%23) `910.5K 🔥` `NEW`
1. [小猫生了个一模一样的自己](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E7%94%9F%E4%BA%86%E4%B8%AA%E4%B8%80%E6%A8%A1%E4%B8%80%E6%A0%B7%E7%9A%84%E8%87%AA%E5%B7%B1%23) `666.6K 🔥` `NEW`
1. [佟丽娅这婚离了等于没离](https://s.weibo.com/weibo?q=%23%E4%BD%9F%E4%B8%BD%E5%A8%85%E8%BF%99%E5%A9%9A%E7%A6%BB%E4%BA%86%E7%AD%89%E4%BA%8E%E6%B2%A1%E7%A6%BB%23) `660.7K 🔥` `NEW`
1. [王玉雯勇敢的人先毛细血管破裂](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E5%8B%87%E6%95%A2%E7%9A%84%E4%BA%BA%E5%85%88%E6%AF%9B%E7%BB%86%E8%A1%80%E7%AE%A1%E7%A0%B4%E8%A3%82%23) `650.6K 🔥` `NEW`
1. [阿根廷队银牌与金牌同样珍视](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E9%93%B6%E7%89%8C%E4%B8%8E%E9%87%91%E7%89%8C%E5%90%8C%E6%A0%B7%E7%8F%8D%E8%A7%86%23) `640.8K 🔥` `NEW`
1. [携程](https://s.weibo.com/weibo?q=%23%E6%90%BA%E7%A8%8B%23) `631.2K 🔥` `NEW`
1. [黄雅琼回应怀孕后还玩拼豆 (Huang Yaqiong responded to playing Pindou after becoming pregnant)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%9B%85%E7%90%BC%E5%9B%9E%E5%BA%94%E6%80%80%E5%AD%95%E5%90%8E%E8%BF%98%E7%8E%A9%E6%8B%BC%E8%B1%86%23) `624.5K 🔥` `NEW`
1. [张雅琪做的菜单](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E5%81%9A%E7%9A%84%E8%8F%9C%E5%8D%95%23) `557.3K 🔥` `NEW`
1. [主持人回应李宏毅剧宣表情](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E6%8C%81%E4%BA%BA%E5%9B%9E%E5%BA%94%E6%9D%8E%E5%AE%8F%E6%AF%85%E5%89%A7%E5%AE%A3%E8%A1%A8%E6%83%85%23) `517.7K 🔥` `NEW`
1. [韩国存储双雄9500亿美元大单](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%AD%98%E5%82%A8%E5%8F%8C%E9%9B%849500%E4%BA%BF%E7%BE%8E%E5%85%83%E5%A4%A7%E5%8D%95%23) `467.1K 🔥` `NEW`
1. [女孩整成鞋拔子脸医生称喜欢这种面型](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%95%B4%E6%88%90%E9%9E%8B%E6%8B%94%E5%AD%90%E8%84%B8%E5%8C%BB%E7%94%9F%E7%A7%B0%E5%96%9C%E6%AC%A2%E8%BF%99%E7%A7%8D%E9%9D%A2%E5%9E%8B%23) `437.1K 🔥` `NEW`
1. [TOP青岛演唱会](https://s.weibo.com/weibo?q=%23TOP%E9%9D%92%E5%B2%9B%E6%BC%94%E5%94%B1%E4%BC%9A%23) `376.7K 🔥` `NEW`
1. [卸载就卸载什么叫残忍卸载](https://s.weibo.com/weibo?q=%23%E5%8D%B8%E8%BD%BD%E5%B0%B1%E5%8D%B8%E8%BD%BD%E4%BB%80%E4%B9%88%E5%8F%AB%E6%AE%8B%E5%BF%8D%E5%8D%B8%E8%BD%BD%23) `376.2K 🔥` `NEW`
1. [小猫被自己的脚臭到震惊](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E8%A2%AB%E8%87%AA%E5%B7%B1%E7%9A%84%E8%84%9A%E8%87%AD%E5%88%B0%E9%9C%87%E6%83%8A%23) `337.0K 🔥` `NEW`
1. [周翊然赛车全场第二](https://s.weibo.com/weibo?q=%23%E5%91%A8%E7%BF%8A%E7%84%B6%E8%B5%9B%E8%BD%A6%E5%85%A8%E5%9C%BA%E7%AC%AC%E4%BA%8C%23) `333.4K 🔥` `NEW`
1. [红霞登陆范围锁定](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E9%9C%9E%E7%99%BB%E9%99%86%E8%8C%83%E5%9B%B4%E9%94%81%E5%AE%9A%23) `296.5K 🔥` `NEW`
1. [原来我的前半生结局是马伊俐要求改的 (It turns out that the ending of the first half of my life was changed at Ma Yili’s request)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%E7%BB%93%E5%B1%80%E6%98%AF%E9%A9%AC%E4%BC%8A%E4%BF%90%E8%A6%81%E6%B1%82%E6%94%B9%E7%9A%84%23) `288.7K 🔥` `NEW`
1. [现在就出发4即将开录](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%E5%8D%B3%E5%B0%86%E5%BC%80%E5%BD%95%23) `283.1K 🔥` `NEW`
1. [女网红称在清吧被骚扰店家全程旁观](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%BD%91%E7%BA%A2%E7%A7%B0%E5%9C%A8%E6%B8%85%E5%90%A7%E8%A2%AB%E9%AA%9A%E6%89%B0%E5%BA%97%E5%AE%B6%E5%85%A8%E7%A8%8B%E6%97%81%E8%A7%82%23) `272.4K 🔥` `NEW`
1. [JDG对战WB](https://s.weibo.com/weibo?q=%23JDG%E5%AF%B9%E6%88%98WB%23) `266.6K 🔥` `NEW`
1. [特朗普称准备第四次竞选总统](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E5%87%86%E5%A4%87%E7%AC%AC%E5%9B%9B%E6%AC%A1%E7%AB%9E%E9%80%89%E6%80%BB%E7%BB%9F%23) `265.0K 🔥` `NEW`
1. [深圳天气](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%A4%A9%E6%B0%94%23) `264.2K 🔥` `NEW`
1. [油价跌超3%](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E8%B7%8C%E8%B6%853%25%23) `259.4K 🔥` `NEW`
1. [JDG让二追三WB](https://s.weibo.com/weibo?q=%23JDG%E8%AE%A9%E4%BA%8C%E8%BF%BD%E4%B8%89WB%23) `256.4K 🔥` `NEW`
1. [宋威龙没有待播剧了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E6%B2%A1%E6%9C%89%E5%BE%85%E6%92%AD%E5%89%A7%E4%BA%86%23) `255.8K 🔥` `NEW`
1. [携程将建立新的流量分配机制](https://s.weibo.com/weibo?q=%23%E6%90%BA%E7%A8%8B%E5%B0%86%E5%BB%BA%E7%AB%8B%E6%96%B0%E7%9A%84%E6%B5%81%E9%87%8F%E5%88%86%E9%85%8D%E6%9C%BA%E5%88%B6%23) `240.0K 🔥` `NEW`
1. [张煜东直言王楚钦实力在自己之上 (Zhang Yudong bluntly stated that Wang Chuqin’s strength is better than his own)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%85%9C%E4%B8%9C%E7%9B%B4%E8%A8%80%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AE%9E%E5%8A%9B%E5%9C%A8%E8%87%AA%E5%B7%B1%E4%B9%8B%E4%B8%8A%23) `224.5K 🔥` `NEW`
1. [退钱哥谈携程被罚51.79亿](https://s.weibo.com/weibo?q=%23%E9%80%80%E9%92%B1%E5%93%A5%E8%B0%88%E6%90%BA%E7%A8%8B%E8%A2%AB%E7%BD%9A51.79%E4%BA%BF%23) `213.5K 🔥` `NEW`
1. [佟丽娅儿子太像陈思诚了](https://s.weibo.com/weibo?q=%23%E4%BD%9F%E4%B8%BD%E5%A8%85%E5%84%BF%E5%AD%90%E5%A4%AA%E5%83%8F%E9%99%88%E6%80%9D%E8%AF%9A%E4%BA%86%23) `204.0K 🔥` `NEW`
1. [台风红霞](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%BA%A2%E9%9C%9E%23) `940.6K 🔥` `+239%`
1. [孔雪儿一个人努力好心酸](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E4%B8%80%E4%B8%AA%E4%BA%BA%E5%8A%AA%E5%8A%9B%E5%A5%BD%E5%BF%83%E9%85%B8%23) `912.4K 🔥` `+87%`
1. [山西运城一路面塌陷处现大量白骨](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E8%BF%90%E5%9F%8E%E4%B8%80%E8%B7%AF%E9%9D%A2%E5%A1%8C%E9%99%B7%E5%A4%84%E7%8E%B0%E5%A4%A7%E9%87%8F%E7%99%BD%E9%AA%A8%23) `911.0K 🔥` `+500%`
1. [王腾谈携程被罚51.79亿](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%85%BE%E8%B0%88%E6%90%BA%E7%A8%8B%E8%A2%AB%E7%BD%9A51.79%E4%BA%BF%23) `446.3K 🔥` `+61%`
1. [AI血检提前15年预警心脏病](https://s.weibo.com/weibo?q=%23AI%E8%A1%80%E6%A3%80%E6%8F%90%E5%89%8D15%E5%B9%B4%E9%A2%84%E8%AD%A6%E5%BF%83%E8%84%8F%E7%97%85%23) `183.9K 🔥` `+24%`
1. [郭碧婷称你们最好永远误解](https://s.weibo.com/weibo?q=%23%E9%83%AD%E7%A2%A7%E5%A9%B7%E7%A7%B0%E4%BD%A0%E4%BB%AC%E6%9C%80%E5%A5%BD%E6%B0%B8%E8%BF%9C%E8%AF%AF%E8%A7%A3%23) `433.5K 🔥`
1. [曝讲真打布洛芬 (Exposed to tell the truth about taking ibuprofen)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%AE%B2%E7%9C%9F%E6%89%93%E5%B8%83%E6%B4%9B%E8%8A%AC%23) `253.7K 🔥`
1. [携程被罚51.79亿 (Ctrip was fined 5.179 billion)](https://s.weibo.com/weibo?q=%23%E6%90%BA%E7%A8%8B%E8%A2%AB%E7%BD%9A51.79%E4%BA%BF%23) `894.9K 🔥` `-52%`
1. [王楚钦爆冷不敌张煜东](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%88%86%E5%86%B7%E4%B8%8D%E6%95%8C%E5%BC%A0%E7%85%9C%E4%B8%9C%23) `874.0K 🔥` `-64%`
1. [除了玩手机还有这么多低成本爱好 (In addition to playing with mobile phones, there are so many low-cost hobbies)](https://s.weibo.com/weibo?q=%23%E9%99%A4%E4%BA%86%E7%8E%A9%E6%89%8B%E6%9C%BA%E8%BF%98%E6%9C%89%E8%BF%99%E4%B9%88%E5%A4%9A%E4%BD%8E%E6%88%90%E6%9C%AC%E7%88%B1%E5%A5%BD%23) `339.5K 🔥` `-60%`
1. [景德镇手工瓷业遗存列入世界遗产](https://s.weibo.com/weibo?q=%23%E6%99%AF%E5%BE%B7%E9%95%87%E6%89%8B%E5%B7%A5%E7%93%B7%E4%B8%9A%E9%81%97%E5%AD%98%E5%88%97%E5%85%A5%E4%B8%96%E7%95%8C%E9%81%97%E4%BA%A7%23) `264.3K 🔥` `-87%`
1. [泡面 换水](https://s.weibo.com/weibo?q=%23%E6%B3%A1%E9%9D%A2%20%E6%8D%A2%E6%B0%B4%23) `258.6K 🔥` `-80%`
1. [学英语就是为了看懂这种笑话](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E8%8B%B1%E8%AF%AD%E5%B0%B1%E6%98%AF%E4%B8%BA%E4%BA%86%E7%9C%8B%E6%87%82%E8%BF%99%E7%A7%8D%E7%AC%91%E8%AF%9D%23) `254.3K 🔥` `-70%`
1. [TOP青岛演唱会伴手礼](https://s.weibo.com/weibo?q=%23TOP%E9%9D%92%E5%B2%9B%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BC%B4%E6%89%8B%E7%A4%BC%23) `211.0K 🔥` `-24%`
1. [曲婉婷点赞冰雪女王梗](https://s.weibo.com/weibo?q=%23%E6%9B%B2%E5%A9%89%E5%A9%B7%E7%82%B9%E8%B5%9E%E5%86%B0%E9%9B%AA%E5%A5%B3%E7%8E%8B%E6%A2%97%23) `206.7K 🔥` `-25%`
1. [24岁女孩地包天做手术反成鞋拔子脸](https://s.weibo.com/weibo?q=%2324%E5%B2%81%E5%A5%B3%E5%AD%A9%E5%9C%B0%E5%8C%85%E5%A4%A9%E5%81%9A%E6%89%8B%E6%9C%AF%E5%8F%8D%E6%88%90%E9%9E%8B%E6%8B%94%E5%AD%90%E8%84%B8%23) `199.2K 🔥` `-70%`
1. [郭碧婷说什么叫我给人家生孩子 (What did Guo Biting ask me to give birth to?)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E7%A2%A7%E5%A9%B7%E8%AF%B4%E4%BB%80%E4%B9%88%E5%8F%AB%E6%88%91%E7%BB%99%E4%BA%BA%E5%AE%B6%E7%94%9F%E5%AD%A9%E5%AD%90%23) `185.7K 🔥` `-33%`

Updated at 2026-07-25 17:06:30

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
