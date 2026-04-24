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

1. [月薪1.6万放羊已筛选出2对夫妻 (Sheep herding with a monthly salary of 16,000 has selected 2 couples)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA1.6%E4%B8%87%E6%94%BE%E7%BE%8A%E5%B7%B2%E7%AD%9B%E9%80%89%E5%87%BA2%E5%AF%B9%E5%A4%AB%E5%A6%BB%23) `1.1M 🔥` `NEW`
1. [冰湖重生算扑吗](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E7%AE%97%E6%89%91%E5%90%97%23) `837.1K 🔥` `NEW`
1. [有一种浪漫叫中国航天](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%B8%80%E7%A7%8D%E6%B5%AA%E6%BC%AB%E5%8F%AB%E4%B8%AD%E5%9B%BD%E8%88%AA%E5%A4%A9%23) `711.0K 🔥` `NEW`
1. [张彬彬郑业成KO美人师兄售后](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%BD%AC%E5%BD%AC%E9%83%91%E4%B8%9A%E6%88%90KO%E7%BE%8E%E4%BA%BA%E5%B8%88%E5%85%84%E5%94%AE%E5%90%8E%23) `707.8K 🔥` `NEW`
1. [王者哪吒2联动](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E5%93%AA%E5%90%922%E8%81%94%E5%8A%A8%23) `643.8K 🔥` `NEW`
1. [剪毁刘海意外剪成了人生发型](https://s.weibo.com/weibo?q=%23%E5%89%AA%E6%AF%81%E5%88%98%E6%B5%B7%E6%84%8F%E5%A4%96%E5%89%AA%E6%88%90%E4%BA%86%E4%BA%BA%E7%94%9F%E5%8F%91%E5%9E%8B%23) `561.5K 🔥` `NEW`
1. [今夜喜友秀收官真敢说](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%9C%E5%96%9C%E5%8F%8B%E7%A7%80%E6%94%B6%E5%AE%98%E7%9C%9F%E6%95%A2%E8%AF%B4%23) `516.3K 🔥` `NEW`
1. [原村支书用铲车推土埋村民被刑拘](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%91%E6%94%AF%E4%B9%A6%E7%94%A8%E9%93%B2%E8%BD%A6%E6%8E%A8%E5%9C%9F%E5%9F%8B%E6%9D%91%E6%B0%91%E8%A2%AB%E5%88%91%E6%8B%98%23) `335.6K 🔥` `NEW`
1. [簪花的孟子义](https://s.weibo.com/weibo?q=%23%E7%B0%AA%E8%8A%B1%E7%9A%84%E5%AD%9F%E5%AD%90%E4%B9%89%23) `333.2K 🔥` `NEW`
1. [外交部3个绝不回应日方](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A83%E4%B8%AA%E7%BB%9D%E4%B8%8D%E5%9B%9E%E5%BA%94%E6%97%A5%E6%96%B9%23) `275.8K 🔥` `NEW`
1. [黄旭熙 可以爆料了吗 (Huang Xuxi, can you break the news?)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%97%AD%E7%86%99%20%E5%8F%AF%E4%BB%A5%E7%88%86%E6%96%99%E4%BA%86%E5%90%97%23) `274.9K 🔥` `NEW`
1. [外国人被上海烘焙店震惊](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E4%BA%BA%E8%A2%AB%E4%B8%8A%E6%B5%B7%E7%83%98%E7%84%99%E5%BA%97%E9%9C%87%E6%83%8A%23) `266.4K 🔥` `NEW`
1. [云旗郝熠然 你们保护好自己](https://s.weibo.com/weibo?q=%23%E4%BA%91%E6%97%97%E9%83%9D%E7%86%A0%E7%84%B6%20%E4%BD%A0%E4%BB%AC%E4%BF%9D%E6%8A%A4%E5%A5%BD%E8%87%AA%E5%B7%B1%23) `261.5K 🔥` `NEW`
1. [伊朗高层集体发声](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%AB%98%E5%B1%82%E9%9B%86%E4%BD%93%E5%8F%91%E5%A3%B0%23) `260.2K 🔥` `NEW`
1. [傅首尔现在瘦了好多](https://s.weibo.com/weibo?q=%23%E5%82%85%E9%A6%96%E5%B0%94%E7%8E%B0%E5%9C%A8%E7%98%A6%E4%BA%86%E5%A5%BD%E5%A4%9A%23) `258.6K 🔥` `NEW`
1. [C罗不喝牛奶](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E4%B8%8D%E5%96%9D%E7%89%9B%E5%A5%B6%23) `256.6K 🔥` `NEW`
1. [曝留几手想复婚](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%95%99%E5%87%A0%E6%89%8B%E6%83%B3%E5%A4%8D%E5%A9%9A%23) `255.8K 🔥` `NEW`
1. [A股新股中一签赚38.9万元](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%96%B0%E8%82%A1%E4%B8%AD%E4%B8%80%E7%AD%BE%E8%B5%9A38.9%E4%B8%87%E5%85%83%23) `253.7K 🔥` `NEW`
1. [泫雅近照曝光面部浮肿](https://s.weibo.com/weibo?q=%23%E6%B3%AB%E9%9B%85%E8%BF%91%E7%85%A7%E6%9B%9D%E5%85%89%E9%9D%A2%E9%83%A8%E6%B5%AE%E8%82%BF%23) `252.3K 🔥` `NEW`
1. [毛不易解锁HUAWEISOUND新玩法](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E4%B8%8D%E6%98%93%E8%A7%A3%E9%94%81HUAWEISOUND%E6%96%B0%E7%8E%A9%E6%B3%95%23) `249.9K 🔥` `NEW`
1. [浪姐 (Sister Lang)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%23) `248.4K 🔥` `NEW`
1. [国羽汤尤杯揭幕战](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E7%BE%BD%E6%B1%A4%E5%B0%A4%E6%9D%AF%E6%8F%AD%E5%B9%95%E6%88%98%23) `246.1K 🔥` `NEW`
1. [袁一琦买黄金 人总要生活的](https://s.weibo.com/weibo?q=%23%E8%A2%81%E4%B8%80%E7%90%A6%E4%B9%B0%E9%BB%84%E9%87%91%20%E4%BA%BA%E6%80%BB%E8%A6%81%E7%94%9F%E6%B4%BB%E7%9A%84%23) `245.0K 🔥` `NEW`
1. [当年TFBOYS就这样对抗EXO吗](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%B9%B4TFBOYS%E5%B0%B1%E8%BF%99%E6%A0%B7%E5%AF%B9%E6%8A%97EXO%E5%90%97%23) `243.7K 🔥` `NEW`
1. [你好吉利小撒报到](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E5%90%89%E5%88%A9%E5%B0%8F%E6%92%92%E6%8A%A5%E5%88%B0%23) `229.2K 🔥` `NEW`
1. [宋银硕 电子烟](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%93%B6%E7%A1%95%20%E7%94%B5%E5%AD%90%E7%83%9F%23) `222.0K 🔥` `NEW`
1. [孙俪和小花妹妹与鲨鱼共游](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E5%92%8C%E5%B0%8F%E8%8A%B1%E5%A6%B9%E5%A6%B9%E4%B8%8E%E9%B2%A8%E9%B1%BC%E5%85%B1%E6%B8%B8%23) `208.6K 🔥` `NEW`
1. [一个百万亿级产业要诞生了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E7%99%BE%E4%B8%87%E4%BA%BF%E7%BA%A7%E4%BA%A7%E4%B8%9A%E8%A6%81%E8%AF%9E%E7%94%9F%E4%BA%86%23) `186.8K 🔥` `NEW`
1. [网传新红楼梦演员表](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%96%B0%E7%BA%A2%E6%A5%BC%E6%A2%A6%E6%BC%94%E5%91%98%E8%A1%A8%23) `186.3K 🔥` `NEW`
1. [江语晨女儿颜值](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%E5%A5%B3%E5%84%BF%E9%A2%9C%E5%80%BC%23) `185.0K 🔥` `NEW`
1. [打赏案父亲说只有她恨我我不恨她 (The reward case, my father said she is the only one who hates me, I don’t hate her.)](https://s.weibo.com/weibo?q=%23%E6%89%93%E8%B5%8F%E6%A1%88%E7%88%B6%E4%BA%B2%E8%AF%B4%E5%8F%AA%E6%9C%89%E5%A5%B9%E6%81%A8%E6%88%91%E6%88%91%E4%B8%8D%E6%81%A8%E5%A5%B9%23) `183.2K 🔥` `NEW`
1. [中国智能底盘引领全球](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%99%BA%E8%83%BD%E5%BA%95%E7%9B%98%E5%BC%95%E9%A2%86%E5%85%A8%E7%90%83%23) `176.4K 🔥` `NEW`
1. [教育局回应家长索要试卷被老师指责](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E5%B1%80%E5%9B%9E%E5%BA%94%E5%AE%B6%E9%95%BF%E7%B4%A2%E8%A6%81%E8%AF%95%E5%8D%B7%E8%A2%AB%E8%80%81%E5%B8%88%E6%8C%87%E8%B4%A3%23) `175.2K 🔥` `NEW`
1. [女摩托车主遭3男子骚扰摸腰崩溃大哭](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%91%A9%E6%89%98%E8%BD%A6%E4%B8%BB%E9%81%AD3%E7%94%B7%E5%AD%90%E9%AA%9A%E6%89%B0%E6%91%B8%E8%85%B0%E5%B4%A9%E6%BA%83%E5%A4%A7%E5%93%AD%23) `165.5K 🔥` `NEW`
1. [A股年内最赚钱新股狂飙950%](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%B9%B4%E5%86%85%E6%9C%80%E8%B5%9A%E9%92%B1%E6%96%B0%E8%82%A1%E7%8B%82%E9%A3%99950%25%23) `164.9K 🔥` `NEW`
1. [2026KPL春季赛最佳阵容](https://s.weibo.com/weibo?q=%232026KPL%E6%98%A5%E5%AD%A3%E8%B5%9B%E6%9C%80%E4%BD%B3%E9%98%B5%E5%AE%B9%23) `148.1K 🔥` `NEW`
1. [鞠婧祎发长文告别露芜衣](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%8F%91%E9%95%BF%E6%96%87%E5%91%8A%E5%88%AB%E9%9C%B2%E8%8A%9C%E8%A1%A3%23) `118.9K 🔥` `NEW`
1. [BLG教练回应被NIP零封](https://s.weibo.com/weibo?q=%23BLG%E6%95%99%E7%BB%83%E5%9B%9E%E5%BA%94%E8%A2%ABNIP%E9%9B%B6%E5%B0%81%23) `118.6K 🔥` `NEW`
1. [设计师办公室猝死微信定格在凌晨3点](https://s.weibo.com/weibo?q=%23%E8%AE%BE%E8%AE%A1%E5%B8%88%E5%8A%9E%E5%85%AC%E5%AE%A4%E7%8C%9D%E6%AD%BB%E5%BE%AE%E4%BF%A1%E5%AE%9A%E6%A0%BC%E5%9C%A8%E5%87%8C%E6%99%A83%E7%82%B9%23) `267.2K 🔥` `+28%`
1. [拌面里吃出一个马嘉祺](https://s.weibo.com/weibo?q=%23%E6%8B%8C%E9%9D%A2%E9%87%8C%E5%90%83%E5%87%BA%E4%B8%80%E4%B8%AA%E9%A9%AC%E5%98%89%E7%A5%BA%23) `262.9K 🔥` `+29%`
1. [DeepSeek v4 百万上下文 (DeepSeek v4 million contexts)](https://s.weibo.com/weibo?q=%23DeepSeek%20v4%20%E7%99%BE%E4%B8%87%E4%B8%8A%E4%B8%8B%E6%96%87%23) `277.3K 🔥` `-23%`
1. [爷爷得知孙女怀孕立刻搭了个鸡窝](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E5%BE%97%E7%9F%A5%E5%AD%99%E5%A5%B3%E6%80%80%E5%AD%95%E7%AB%8B%E5%88%BB%E6%90%AD%E4%BA%86%E4%B8%AA%E9%B8%A1%E7%AA%9D%23) `271.9K 🔥` `-75%`
1. [傅首尔怎么了](https://s.weibo.com/weibo?q=%23%E5%82%85%E9%A6%96%E5%B0%94%E6%80%8E%E4%B9%88%E4%BA%86%23) `269.6K 🔥` `-37%`
1. [小米YU7GT](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3YU7GT%23) `224.2K 🔥` `-48%`
1. [向太说郭碧婷养全家](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E8%AF%B4%E9%83%AD%E7%A2%A7%E5%A9%B7%E5%85%BB%E5%85%A8%E5%AE%B6%23) `186.6K 🔥` `-53%`
1. [伊朗巨幅海报宣告霍尔木兹海峡控制权](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%B7%A8%E5%B9%85%E6%B5%B7%E6%8A%A5%E5%AE%A3%E5%91%8A%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E6%8E%A7%E5%88%B6%E6%9D%83%23) `185.8K 🔥` `-77%`
1. [李昀锐孟子义又没在一队](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%AD%9F%E5%AD%90%E4%B9%89%E5%8F%88%E6%B2%A1%E5%9C%A8%E4%B8%80%E9%98%9F%23) `181.7K 🔥` `-71%`
1. [老人公交插队被撞倒离世家属索赔70万](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E5%85%AC%E4%BA%A4%E6%8F%92%E9%98%9F%E8%A2%AB%E6%92%9E%E5%80%92%E7%A6%BB%E4%B8%96%E5%AE%B6%E5%B1%9E%E7%B4%A2%E8%B5%9470%E4%B8%87%23) `175.5K 🔥` `-62%`
1. [玉泽演举行婚礼 (Ok Taecyeon holds wedding)](https://s.weibo.com/weibo?q=%23%E7%8E%89%E6%B3%BD%E6%BC%94%E4%B8%BE%E8%A1%8C%E5%A9%9A%E7%A4%BC%23) `173.8K 🔥` `-23%`
1. [今年四大院校艺考前四名](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E5%9B%9B%E5%A4%A7%E9%99%A2%E6%A0%A1%E8%89%BA%E8%80%83%E5%89%8D%E5%9B%9B%E5%90%8D%23) `159.2K 🔥` `-53%`
1. [准新娘诊所输液昏迷92天后初现意识](https://s.weibo.com/weibo?q=%23%E5%87%86%E6%96%B0%E5%A8%98%E8%AF%8A%E6%89%80%E8%BE%93%E6%B6%B2%E6%98%8F%E8%BF%B792%E5%A4%A9%E5%90%8E%E5%88%9D%E7%8E%B0%E6%84%8F%E8%AF%86%23) `132.6K 🔥` `-69%`

Updated at 2026-04-24 16:17:14

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
