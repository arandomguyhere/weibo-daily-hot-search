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

1. [华为投诉玩梗视频 (Huawei complains about meme video)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E6%8A%95%E8%AF%89%E7%8E%A9%E6%A2%97%E8%A7%86%E9%A2%91%23) `993.9K 🔥` `NEW`
1. [中国预警机独立指挥空中战场](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%A2%84%E8%AD%A6%E6%9C%BA%E7%8B%AC%E7%AB%8B%E6%8C%87%E6%8C%A5%E7%A9%BA%E4%B8%AD%E6%88%98%E5%9C%BA%23) `945.1K 🔥` `NEW`
1. [青岛黄岛大火浓烟冲天](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E9%BB%84%E5%B2%9B%E5%A4%A7%E7%81%AB%E6%B5%93%E7%83%9F%E5%86%B2%E5%A4%A9%23) `531.0K 🔥` `NEW`
1. [AUBL2026揭幕战](https://s.weibo.com/weibo?q=%23AUBL2026%E6%8F%AD%E5%B9%95%E6%88%98%23) `531.0K 🔥` `NEW`
1. [蜘蛛侠拒绝屏摄的评论区 全是屏摄](https://s.weibo.com/weibo?q=%23%E8%9C%98%E8%9B%9B%E4%BE%A0%E6%8B%92%E7%BB%9D%E5%B1%8F%E6%91%84%E7%9A%84%E8%AF%84%E8%AE%BA%E5%8C%BA%20%E5%85%A8%E6%98%AF%E5%B1%8F%E6%91%84%23) `530.9K 🔥` `NEW`
1. [女子花10万请明星带货仅卖出1单](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%8A%B110%E4%B8%87%E8%AF%B7%E6%98%8E%E6%98%9F%E5%B8%A6%E8%B4%A7%E4%BB%85%E5%8D%96%E5%87%BA1%E5%8D%95%23) `530.4K 🔥` `NEW`
1. [HYBE新女团TUIDE公开](https://s.weibo.com/weibo?q=%23HYBE%E6%96%B0%E5%A5%B3%E5%9B%A2TUIDE%E5%85%AC%E5%BC%80%23) `530.3K 🔥` `NEW`
1. [以色列律师发表骇人极端言论](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%BE%8B%E5%B8%88%E5%8F%91%E8%A1%A8%E9%AA%87%E4%BA%BA%E6%9E%81%E7%AB%AF%E8%A8%80%E8%AE%BA%23) `530.2K 🔥` `NEW`
1. [这一秒过火 乱成一锅粥了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%20%E4%B9%B1%E6%88%90%E4%B8%80%E9%94%85%E7%B2%A5%E4%BA%86%23) `530.1K 🔥` `NEW`
1. [地铁吐血女孩称病情更严重了](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E9%93%81%E5%90%90%E8%A1%80%E5%A5%B3%E5%AD%A9%E7%A7%B0%E7%97%85%E6%83%85%E6%9B%B4%E4%B8%A5%E9%87%8D%E4%BA%86%23) `530.0K 🔥` `NEW`
1. [2026年亚运会 (2026 Asian Games)](https://s.weibo.com/weibo?q=%232026%E5%B9%B4%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `529.9K 🔥` `NEW`
1. [句号采访不需要翻译](https://s.weibo.com/weibo?q=%23%E5%8F%A5%E5%8F%B7%E9%87%87%E8%AE%BF%E4%B8%8D%E9%9C%80%E8%A6%81%E7%BF%BB%E8%AF%91%23) `529.9K 🔥` `NEW`
1. [家长回应说女孩子长大也是被别人看](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E5%9B%9E%E5%BA%94%E8%AF%B4%E5%A5%B3%E5%AD%A9%E5%AD%90%E9%95%BF%E5%A4%A7%E4%B9%9F%E6%98%AF%E8%A2%AB%E5%88%AB%E4%BA%BA%E7%9C%8B%23) `529.7K 🔥` `NEW`
1. [运营商整治售卡乱象不该让用户买单](https://s.weibo.com/weibo?q=%23%E8%BF%90%E8%90%A5%E5%95%86%E6%95%B4%E6%B2%BB%E5%94%AE%E5%8D%A1%E4%B9%B1%E8%B1%A1%E4%B8%8D%E8%AF%A5%E8%AE%A9%E7%94%A8%E6%88%B7%E4%B9%B0%E5%8D%95%23) `529.5K 🔥` `NEW`
1. [恋综男嘉宾被曝分手原因](https://s.weibo.com/weibo?q=%23%E6%81%8B%E7%BB%BC%E7%94%B7%E5%98%89%E5%AE%BE%E8%A2%AB%E6%9B%9D%E5%88%86%E6%89%8B%E5%8E%9F%E5%9B%A0%23) `529.4K 🔥` `NEW`
1. [HLE对战KT](https://s.weibo.com/weibo?q=%23HLE%E5%AF%B9%E6%88%98KT%23) `529.2K 🔥` `NEW`
1. [米哈游已经终止云南昊曦合作](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%93%88%E6%B8%B8%E5%B7%B2%E7%BB%8F%E7%BB%88%E6%AD%A2%E4%BA%91%E5%8D%97%E6%98%8A%E6%9B%A6%E5%90%88%E4%BD%9C%23) `528.8K 🔥` `NEW`
1. [iG冲击骑士之路](https://s.weibo.com/weibo?q=%23iG%E5%86%B2%E5%87%BB%E9%AA%91%E5%A3%AB%E4%B9%8B%E8%B7%AF%23) `528.7K 🔥` `NEW`
1. [亲密关系走到最后全凭人品和良心](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E5%AF%86%E5%85%B3%E7%B3%BB%E8%B5%B0%E5%88%B0%E6%9C%80%E5%90%8E%E5%85%A8%E5%87%AD%E4%BA%BA%E5%93%81%E5%92%8C%E8%89%AF%E5%BF%83%23) `528.7K 🔥` `NEW`
1. [TheShy太夯了](https://s.weibo.com/weibo?q=%23TheShy%E5%A4%AA%E5%A4%AF%E4%BA%86%23) `528.5K 🔥` `NEW`
1. [华晨宇兔耳新造型预告 (Huachenyu new bunny ears look preview)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E5%85%94%E8%80%B3%E6%96%B0%E9%80%A0%E5%9E%8B%E9%A2%84%E5%91%8A%23) `528.5K 🔥` `NEW`
1. [新能源汽车电量显示偏差不得超5%](https://s.weibo.com/weibo?q=%23%E6%96%B0%E8%83%BD%E6%BA%90%E6%B1%BD%E8%BD%A6%E7%94%B5%E9%87%8F%E6%98%BE%E7%A4%BA%E5%81%8F%E5%B7%AE%E4%B8%8D%E5%BE%97%E8%B6%855%25%23) `528.4K 🔥` `NEW`
1. [胡一天演高中生被指违和](https://s.weibo.com/weibo?q=%23%E8%83%A1%E4%B8%80%E5%A4%A9%E6%BC%94%E9%AB%98%E4%B8%AD%E7%94%9F%E8%A2%AB%E6%8C%87%E8%BF%9D%E5%92%8C%23) `944.8K 🔥` `+42%`
1. [一个爱侧睡的人轻轻的碎了 (A person who loves to sleep on his side is gently broken)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E7%88%B1%E4%BE%A7%E7%9D%A1%E7%9A%84%E4%BA%BA%E8%BD%BB%E8%BD%BB%E7%9A%84%E7%A2%8E%E4%BA%86%23) `944.0K 🔥` `+38%`
1. [DYG视频 不适](https://s.weibo.com/weibo?q=%23DYG%E8%A7%86%E9%A2%91%20%E4%B8%8D%E9%80%82%23) `531.0K 🔥` `+235%`
1. [难听](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E5%90%AC%23) `530.8K 🔥` `+36%`
1. [张凌赫的妈妈公开了和家人的合照](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9A%84%E5%A6%88%E5%A6%88%E5%85%AC%E5%BC%80%E4%BA%86%E5%92%8C%E5%AE%B6%E4%BA%BA%E7%9A%84%E5%90%88%E7%85%A7%23) `530.7K 🔥` `+47%`
1. [公积金10万亿账户迎来全面激活 (Provident Fund 10 trillion account ushered in full activation)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%9110%E4%B8%87%E4%BA%BF%E8%B4%A6%E6%88%B7%E8%BF%8E%E6%9D%A5%E5%85%A8%E9%9D%A2%E6%BF%80%E6%B4%BB%23) `530.7K 🔥` `+51%`
1. [易烊千玺打码](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%89%93%E7%A0%81%23) `530.6K 🔥` `+46%`
1. [Angelababy14岁中华娘造型](https://s.weibo.com/weibo?q=%23Angelababy14%E5%B2%81%E4%B8%AD%E5%8D%8E%E5%A8%98%E9%80%A0%E5%9E%8B%23) `530.5K 🔥` `+75%`
1. [蔡徐坤演唱会](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E6%BC%94%E5%94%B1%E4%BC%9A%23) `530.4K 🔥` `+74%`
1. [白鹿 完全妈妈](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%20%E5%AE%8C%E5%85%A8%E5%A6%88%E5%A6%88%23) `530.2K 🔥` `+51%`
1. [官方回应青岛大火 (Official response to Qingdao fire)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E9%9D%92%E5%B2%9B%E5%A4%A7%E7%81%AB%23) `530.0K 🔥` `+68%`
1. [突然发现人的适应能力是真的强 (Suddenly I discovered that people are really adaptable)](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E4%BA%BA%E7%9A%84%E9%80%82%E5%BA%94%E8%83%BD%E5%8A%9B%E6%98%AF%E7%9C%9F%E7%9A%84%E5%BC%BA%23) `529.8K 🔥` `+82%`
1. [近视600度是眼球风险临界值](https://s.weibo.com/weibo?q=%23%E8%BF%91%E8%A7%86600%E5%BA%A6%E6%98%AF%E7%9C%BC%E7%90%83%E9%A3%8E%E9%99%A9%E4%B8%B4%E7%95%8C%E5%80%BC%23) `529.8K 🔥` `+94%`
1. [A股或告别科技独舞](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%88%96%E5%91%8A%E5%88%AB%E7%A7%91%E6%8A%80%E7%8B%AC%E8%88%9E%23) `529.6K 🔥` `+59%`
1. [印度韩国突然宣称有媲美DeepSeek大模型 (India and South Korea suddenly claim to have large models comparable to DeepSeek)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E9%9F%A9%E5%9B%BD%E7%AA%81%E7%84%B6%E5%AE%A3%E7%A7%B0%E6%9C%89%E5%AA%B2%E7%BE%8EDeepSeek%E5%A4%A7%E6%A8%A1%E5%9E%8B%23) `529.5K 🔥` `+56%`
1. [瑞幸员工对嘴喷奶油 (Luckin employee sprays cream on mouth)](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E5%91%98%E5%B7%A5%E5%AF%B9%E5%98%B4%E5%96%B7%E5%A5%B6%E6%B2%B9%23) `529.5K 🔥` `+115%`
1. [王俊凯把能开的座位都开了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%8A%8A%E8%83%BD%E5%BC%80%E7%9A%84%E5%BA%A7%E4%BD%8D%E9%83%BD%E5%BC%80%E4%BA%86%23) `529.3K 🔥` `+140%`
1. [C罗乔治娜戴超大钻戒现身](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E4%B9%94%E6%B2%BB%E5%A8%9C%E6%88%B4%E8%B6%85%E5%A4%A7%E9%92%BB%E6%88%92%E7%8E%B0%E8%BA%AB%23) `529.3K 🔥` `+186%`
1. [沐言妈妈自曝女儿偏瘦原因](https://s.weibo.com/weibo?q=%23%E6%B2%90%E8%A8%80%E5%A6%88%E5%A6%88%E8%87%AA%E6%9B%9D%E5%A5%B3%E5%84%BF%E5%81%8F%E7%98%A6%E5%8E%9F%E5%9B%A0%23) `529.2K 🔥` `+227%`
1. [为什么现在的超市都不需要存包了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%8E%B0%E5%9C%A8%E7%9A%84%E8%B6%85%E5%B8%82%E9%83%BD%E4%B8%8D%E9%9C%80%E8%A6%81%E5%AD%98%E5%8C%85%E4%BA%86%23) `529.1K 🔥` `+43%`
1. [男子患癌才知村干部代收医保后漏缴 (The man didn’t know until he had cancer that the village cadre collected the medical insurance on his behalf and then missed the payment)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%82%A3%E7%99%8C%E6%89%8D%E7%9F%A5%E6%9D%91%E5%B9%B2%E9%83%A8%E4%BB%A3%E6%94%B6%E5%8C%BB%E4%BF%9D%E5%90%8E%E6%BC%8F%E7%BC%B4%23) `528.9K 🔥` `+193%`
1. [Seedance2.0脸部恐怖谷明显](https://s.weibo.com/weibo?q=%23Seedance2.0%E8%84%B8%E9%83%A8%E6%81%90%E6%80%96%E8%B0%B7%E6%98%8E%E6%98%BE%23) `528.4K 🔥` `+94%`
1. [机构称A股8月修复可期](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E6%9E%84%E7%A7%B0A%E8%82%A18%E6%9C%88%E4%BF%AE%E5%A4%8D%E5%8F%AF%E6%9C%9F%23) `528.3K 🔥` `+191%`
1. [银行 午休](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%20%E5%8D%88%E4%BC%91%23) `1.1M 🔥`
1. [主持人看迪丽热巴的眼神 (The way the host looked at Dilireba)](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E6%8C%81%E4%BA%BA%E7%9C%8B%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9A%84%E7%9C%BC%E7%A5%9E%23) `530.9K 🔥`
1. [三个字让我爸做了一辈子饭 (Three words made my dad cook for a lifetime)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%B8%AA%E5%AD%97%E8%AE%A9%E6%88%91%E7%88%B8%E5%81%9A%E4%BA%86%E4%B8%80%E8%BE%88%E5%AD%90%E9%A5%AD%23) `530.8K 🔥`
1. [TheShy四抓一反杀](https://s.weibo.com/weibo?q=%23TheShy%E5%9B%9B%E6%8A%93%E4%B8%80%E5%8F%8D%E6%9D%80%23) `529.0K 🔥`
1. [辱骂捐赠日军罪证少年者被传唤 (Insulting teenager who donated criminal evidence to Japanese army summoned)](https://s.weibo.com/weibo?q=%23%E8%BE%B1%E9%AA%82%E6%8D%90%E8%B5%A0%E6%97%A5%E5%86%9B%E7%BD%AA%E8%AF%81%E5%B0%91%E5%B9%B4%E8%80%85%E8%A2%AB%E4%BC%A0%E5%94%A4%23) `528.9K 🔥`

Updated at 2026-08-02 22:19:15

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
