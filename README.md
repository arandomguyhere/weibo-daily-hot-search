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

1. [2026白玉兰提名名单预测 (2026 Magnolia Nomination List Prediction)](https://s.weibo.com/weibo?q=%232026%E7%99%BD%E7%8E%89%E5%85%B0%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95%E9%A2%84%E6%B5%8B%23) `1.2M 🔥` `NEW`
1. [春日里的中国经济密码](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%97%A5%E9%87%8C%E7%9A%84%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E5%AF%86%E7%A0%81%23) `662.2K 🔥` `NEW`
1. [十五五规划是施工图也是邀请函](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E8%A7%84%E5%88%92%E6%98%AF%E6%96%BD%E5%B7%A5%E5%9B%BE%E4%B9%9F%E6%98%AF%E9%82%80%E8%AF%B7%E5%87%BD%23) `241.4K 🔥` `NEW`
1. [九尾 这导播是真恶心](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%20%E8%BF%99%E5%AF%BC%E6%92%AD%E6%98%AF%E7%9C%9F%E6%81%B6%E5%BF%83%23) `236.5K 🔥` `NEW`
1. [男子维权被12315工作人员嘲讽](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%BB%B4%E6%9D%83%E8%A2%AB12315%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E5%98%B2%E8%AE%BD%23) `225.8K 🔥` `NEW`
1. [男一男二男三男四男五](https://s.weibo.com/weibo?q=%23%E7%94%B7%E4%B8%80%E7%94%B7%E4%BA%8C%E7%94%B7%E4%B8%89%E7%94%B7%E5%9B%9B%E7%94%B7%E4%BA%94%23) `187.2K 🔥` `NEW`
1. [周云杰隔山打牛5分钟解冻冰坨榴莲](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%BA%91%E6%9D%B0%E9%9A%94%E5%B1%B1%E6%89%93%E7%89%9B5%E5%88%86%E9%92%9F%E8%A7%A3%E5%86%BB%E5%86%B0%E5%9D%A8%E6%A6%B4%E8%8E%B2%23) `169.8K 🔥` `NEW`
1. [王橹杰没想到的成片](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%B2%A1%E6%83%B3%E5%88%B0%E7%9A%84%E6%88%90%E7%89%87%23) `168.8K 🔥` `NEW`
1. [海尔发布会](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%B0%94%E5%8F%91%E5%B8%83%E4%BC%9A%23) `164.2K 🔥` `NEW`
1. [九尾提到DYG](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%E6%8F%90%E5%88%B0DYG%23) `145.5K 🔥` `NEW`
1. [男子平台买机票比航司贵1.5万元 (Air tickets purchased on men’s platforms are 15,000 yuan more expensive than airlines)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%B9%B3%E5%8F%B0%E4%B9%B0%E6%9C%BA%E7%A5%A8%E6%AF%94%E8%88%AA%E5%8F%B8%E8%B4%B51.5%E4%B8%87%E5%85%83%23) `131.6K 🔥` `NEW`
1. [田曦薇心疼樊长玉哭了](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%BF%83%E7%96%BC%E6%A8%8A%E9%95%BF%E7%8E%89%E5%93%AD%E4%BA%86%23) `125.9K 🔥` `NEW`
1. [假名牌借保税仓变身海外正品](https://s.weibo.com/weibo?q=%23%E5%81%87%E5%90%8D%E7%89%8C%E5%80%9F%E4%BF%9D%E7%A8%8E%E4%BB%93%E5%8F%98%E8%BA%AB%E6%B5%B7%E5%A4%96%E6%AD%A3%E5%93%81%23) `124.7K 🔥` `NEW`
1. [肉铺老板用增红生鲜灯称谁来都管不了](https://s.weibo.com/weibo?q=%23%E8%82%89%E9%93%BA%E8%80%81%E6%9D%BF%E7%94%A8%E5%A2%9E%E7%BA%A2%E7%94%9F%E9%B2%9C%E7%81%AF%E7%A7%B0%E8%B0%81%E6%9D%A5%E9%83%BD%E7%AE%A1%E4%B8%8D%E4%BA%86%23) `123.7K 🔥` `NEW`
1. [钎城](https://s.weibo.com/weibo?q=%23%E9%92%8E%E5%9F%8E%23) `117.1K 🔥` `NEW`
1. [倪妮哭出了漫画里才有的泪眼](https://s.weibo.com/weibo?q=%23%E5%80%AA%E5%A6%AE%E5%93%AD%E5%87%BA%E4%BA%86%E6%BC%AB%E7%94%BB%E9%87%8C%E6%89%8D%E6%9C%89%E7%9A%84%E6%B3%AA%E7%9C%BC%23) `116.5K 🔥` `NEW`
1. [大侦探](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BE%A6%E6%8E%A2%23) `116.2K 🔥` `NEW`
1. [女孩牙里卡勺子就医后自己薅了出来](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E7%89%99%E9%87%8C%E5%8D%A1%E5%8B%BA%E5%AD%90%E5%B0%B1%E5%8C%BB%E5%90%8E%E8%87%AA%E5%B7%B1%E8%96%85%E4%BA%86%E5%87%BA%E6%9D%A5%23) `102.6K 🔥` `NEW`
1. [315晚会主题官宣](https://s.weibo.com/weibo?q=%23315%E6%99%9A%E4%BC%9A%E4%B8%BB%E9%A2%98%E5%AE%98%E5%AE%A3%23) `101.0K 🔥` `NEW`
1. [石洵瑶vs张本美和](https://s.weibo.com/weibo?q=%23%E7%9F%B3%E6%B4%B5%E7%91%B6vs%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `99.3K 🔥` `NEW`
1. [省考 紧张 (Nervous about provincial exam)](https://s.weibo.com/weibo?q=%23%E7%9C%81%E8%80%83%20%E7%B4%A7%E5%BC%A0%23) `89.9K 🔥` `NEW`
1. [专家建议A股给散户提供T加0制度](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E5%BB%BA%E8%AE%AEA%E8%82%A1%E7%BB%99%E6%95%A3%E6%88%B7%E6%8F%90%E4%BE%9BT%E5%8A%A00%E5%88%B6%E5%BA%A6%23) `88.7K 🔥` `NEW`
1. [胖东来](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%23) `569.5K 🔥` `+534%`
1. [呼啸山庄](https://s.weibo.com/weibo?q=%23%E5%91%BC%E5%95%B8%E5%B1%B1%E5%BA%84%23) `187.2K 🔥` `+21%`
1. [穿了二十厘米勉强一米七](https://s.weibo.com/weibo?q=%23%E7%A9%BF%E4%BA%86%E4%BA%8C%E5%8D%81%E5%8E%98%E7%B1%B3%E5%8B%89%E5%BC%BA%E4%B8%80%E7%B1%B3%E4%B8%83%23) `169.8K 🔥` `+54%`
1. [十五五规划纲要全文 (Full text of the 15th Five-Year Plan Outline)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E8%A7%84%E5%88%92%E7%BA%B2%E8%A6%81%E5%85%A8%E6%96%87%23) `821.9K 🔥`
1. [开学了想开点就点美团外卖 (School has started. If you want to eat, order Meituan takeout.)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%AD%A6%E4%BA%86%E6%83%B3%E5%BC%80%E7%82%B9%E5%B0%B1%E7%82%B9%E7%BE%8E%E5%9B%A2%E5%A4%96%E5%8D%96%23) `579.7K 🔥`
1. [浪漫武汉一路生花 (Romantic Wuhan blooms all the way)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E6%BC%AB%E6%AD%A6%E6%B1%89%E4%B8%80%E8%B7%AF%E7%94%9F%E8%8A%B1%23) `247.5K 🔥`
1. [西安不倒翁小姐姐离职丈夫回应](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E4%B8%8D%E5%80%92%E7%BF%81%E5%B0%8F%E5%A7%90%E5%A7%90%E7%A6%BB%E8%81%8C%E4%B8%88%E5%A4%AB%E5%9B%9E%E5%BA%94%23) `228.1K 🔥`
1. [印度90岁妇人遭4蒙面男子强奸 (90-year-old Indian woman raped by 4 masked men)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A690%E5%B2%81%E5%A6%87%E4%BA%BA%E9%81%AD4%E8%92%99%E9%9D%A2%E7%94%B7%E5%AD%90%E5%BC%BA%E5%A5%B8%23) `167.4K 🔥`
1. [张凌赫田曦薇头纱转场](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%E5%A4%B4%E7%BA%B1%E8%BD%AC%E5%9C%BA%23) `166.6K 🔥`
1. [研究称第二次怀孕会继续重塑大脑](https://s.weibo.com/weibo?q=%23%E7%A0%94%E7%A9%B6%E7%A7%B0%E7%AC%AC%E4%BA%8C%E6%AC%A1%E6%80%80%E5%AD%95%E4%BC%9A%E7%BB%A7%E7%BB%AD%E9%87%8D%E5%A1%91%E5%A4%A7%E8%84%91%23) `166.6K 🔥`
1. [逐玉 (Zhuyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `165.3K 🔥`
1. [随元青我恨你 (Sui Yuanqing, I hate you)](https://s.weibo.com/weibo?q=%23%E9%9A%8F%E5%85%83%E9%9D%92%E6%88%91%E6%81%A8%E4%BD%A0%23) `158.2K 🔥`
1. [孙燕姿演唱会 (Stefanie Sun concert)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%87%95%E5%A7%BF%E6%BC%94%E5%94%B1%E4%BC%9A%23) `100.9K 🔥`
1. [李鹤来说想当演员](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%B9%A4%E6%9D%A5%E8%AF%B4%E6%83%B3%E5%BD%93%E6%BC%94%E5%91%98%23) `90.7K 🔥`
1. [逐玉18集太惨了](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%8918%E9%9B%86%E5%A4%AA%E6%83%A8%E4%BA%86%23) `89.3K 🔥`
1. [韩国外交部发声明 (South Korea's Ministry of Foreign Affairs issued a statement)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%A4%96%E4%BA%A4%E9%83%A8%E5%8F%91%E5%A3%B0%E6%98%8E%23) `248.3K 🔥` `-24%`
1. [以色列总统称特朗普攻击国家主权](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%80%BB%E7%BB%9F%E7%A7%B0%E7%89%B9%E6%9C%97%E6%99%AE%E6%94%BB%E5%87%BB%E5%9B%BD%E5%AE%B6%E4%B8%BB%E6%9D%83%23) `248.0K 🔥` `-37%`
1. [多人反映贷款逾期被银行划走养老金](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%BA%BA%E5%8F%8D%E6%98%A0%E8%B4%B7%E6%AC%BE%E9%80%BE%E6%9C%9F%E8%A2%AB%E9%93%B6%E8%A1%8C%E5%88%92%E8%B5%B0%E5%85%BB%E8%80%81%E9%87%91%23) `247.1K 🔥` `-44%`
1. [钎九](https://s.weibo.com/weibo?q=%23%E9%92%8E%E4%B9%9D%23) `245.5K 🔥` `-56%`
1. [2026年政府工作报告全文](https://s.weibo.com/weibo?q=%232026%E5%B9%B4%E6%94%BF%E5%BA%9C%E5%B7%A5%E4%BD%9C%E6%8A%A5%E5%91%8A%E5%85%A8%E6%96%87%23) `243.9K 🔥` `-29%`
1. [呼啸山庄尺度好大](https://s.weibo.com/weibo?q=%23%E5%91%BC%E5%95%B8%E5%B1%B1%E5%BA%84%E5%B0%BA%E5%BA%A6%E5%A5%BD%E5%A4%A7%23) `230.1K 🔥` `-79%`
1. [父亲回应女婴出生2天被爷爷丢弃厕所](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%A9%B4%E5%87%BA%E7%94%9F2%E5%A4%A9%E8%A2%AB%E7%88%B7%E7%88%B7%E4%B8%A2%E5%BC%83%E5%8E%95%E6%89%80%23) `212.0K 🔥` `-33%`
1. [赵今麦范丞丞 电影](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E8%8C%83%E4%B8%9E%E4%B8%9E%20%E7%94%B5%E5%BD%B1%23) `164.2K 🔥` `-63%`
1. [王一博完全不需要翻译](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%AE%8C%E5%85%A8%E4%B8%8D%E9%9C%80%E8%A6%81%E7%BF%BB%E8%AF%91%23) `129.4K 🔥` `-35%`
1. [7000元月薪种地不到一周已招满 (Farming with a monthly salary of 7,000 yuan has been filled in less than a week)](https://s.weibo.com/weibo?q=%237000%E5%85%83%E6%9C%88%E8%96%AA%E7%A7%8D%E5%9C%B0%E4%B8%8D%E5%88%B0%E4%B8%80%E5%91%A8%E5%B7%B2%E6%8B%9B%E6%BB%A1%23) `123.6K 🔥` `-62%`
1. [穿prada的女王2 小时代](https://s.weibo.com/weibo?q=%23%E7%A9%BFprada%E7%9A%84%E5%A5%B3%E7%8E%8B2%20%E5%B0%8F%E6%97%B6%E4%BB%A3%23) `101.8K 🔥` `-60%`
1. [女子花12万做试管被带到民房手术 (Woman spent 120,000 yuan for in vitro fertilization and was taken to private house for surgery)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%8A%B112%E4%B8%87%E5%81%9A%E8%AF%95%E7%AE%A1%E8%A2%AB%E5%B8%A6%E5%88%B0%E6%B0%91%E6%88%BF%E6%89%8B%E6%9C%AF%23) `94.8K 🔥` `-37%`
1. [P图许愿网友被周云杰请到了现场](https://s.weibo.com/weibo?q=%23P%E5%9B%BE%E8%AE%B8%E6%84%BF%E7%BD%91%E5%8F%8B%E8%A2%AB%E5%91%A8%E4%BA%91%E6%9D%B0%E8%AF%B7%E5%88%B0%E4%BA%86%E7%8E%B0%E5%9C%BA%23) `82.2K 🔥` `-46%`
1. [教师值班病逝抢救超48小时未认工伤](https://s.weibo.com/weibo?q=%23%E6%95%99%E5%B8%88%E5%80%BC%E7%8F%AD%E7%97%85%E9%80%9D%E6%8A%A2%E6%95%91%E8%B6%8548%E5%B0%8F%E6%97%B6%E6%9C%AA%E8%AE%A4%E5%B7%A5%E4%BC%A4%23) `79.7K 🔥` `-47%`
1. [曝虞书欣何与确定二搭](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%BD%95%E4%B8%8E%E7%A1%AE%E5%AE%9A%E4%BA%8C%E6%90%AD%23) `78.7K 🔥` `-46%`

Updated at 2026-03-13 23:02:16

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
