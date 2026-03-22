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

1. [国内油价将迎5连涨 (Domestic oil prices will rise for five consecutive years)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%86%85%E6%B2%B9%E4%BB%B7%E5%B0%86%E8%BF%8E5%E8%BF%9E%E6%B6%A8%23) `211.0K 🔥` `NEW`
1. [陈赫张子萱带女儿做客王祖蓝家](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E5%BC%A0%E5%AD%90%E8%90%B1%E5%B8%A6%E5%A5%B3%E5%84%BF%E5%81%9A%E5%AE%A2%E7%8E%8B%E7%A5%96%E8%93%9D%E5%AE%B6%23) `174.9K 🔥` `NEW`
1. [月鳞绮纪](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%23) `156.4K 🔥` `NEW`
1. [阿尔卑斯矿泉水回应水源地争议](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%B0%94%E5%8D%91%E6%96%AF%E7%9F%BF%E6%B3%89%E6%B0%B4%E5%9B%9E%E5%BA%94%E6%B0%B4%E6%BA%90%E5%9C%B0%E4%BA%89%E8%AE%AE%23) `123.0K 🔥` `NEW`
1. [王鸥 何九华](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B8%A5%20%E4%BD%95%E4%B9%9D%E5%8D%8E%23) `122.7K 🔥` `NEW`
1. [刚洗完澡别在浴室吹头发](https://s.weibo.com/weibo?q=%23%E5%88%9A%E6%B4%97%E5%AE%8C%E6%BE%A1%E5%88%AB%E5%9C%A8%E6%B5%B4%E5%AE%A4%E5%90%B9%E5%A4%B4%E5%8F%91%23) `95.3K 🔥` `NEW`
1. [壁上观](https://s.weibo.com/weibo?q=%23%E5%A3%81%E4%B8%8A%E8%A7%82%23) `90.1K 🔥` `NEW`
1. [清融翻牌](https://s.weibo.com/weibo?q=%23%E6%B8%85%E8%9E%8D%E7%BF%BB%E7%89%8C%23) `78.5K 🔥` `NEW`
1. [辛芷蕾 多邻国](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%20%E5%A4%9A%E9%82%BB%E5%9B%BD%23) `78.0K 🔥` `NEW`
1. [孔雪儿俞浅浅高光时刻](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E4%BF%9E%E6%B5%85%E6%B5%85%E9%AB%98%E5%85%89%E6%97%B6%E5%88%BB%23) `68.3K 🔥` `NEW`
1. [伊朗称只对敌人关闭霍尔木兹海峡 (Iran says it will only close Strait of Hormuz to enemies)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%8F%AA%E5%AF%B9%E6%95%8C%E4%BA%BA%E5%85%B3%E9%97%AD%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%23) `63.9K 🔥` `NEW`
1. [教育部批复重庆三峡学院更名大学](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E9%83%A8%E6%89%B9%E5%A4%8D%E9%87%8D%E5%BA%86%E4%B8%89%E5%B3%A1%E5%AD%A6%E9%99%A2%E6%9B%B4%E5%90%8D%E5%A4%A7%E5%AD%A6%23) `59.2K 🔥` `NEW`
1. [不仅有左脑和右脑还有中脑](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E4%BB%85%E6%9C%89%E5%B7%A6%E8%84%91%E5%92%8C%E5%8F%B3%E8%84%91%E8%BF%98%E6%9C%89%E4%B8%AD%E8%84%91%23) `58.8K 🔥` `NEW`
1. [多校试点班主任退群 (Pilot class teachers in many schools withdraw from the group)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%A0%A1%E8%AF%95%E7%82%B9%E7%8F%AD%E4%B8%BB%E4%BB%BB%E9%80%80%E7%BE%A4%23) `1.1M 🔥` `+39%`
1. [鸡鸣寺樱花](https://s.weibo.com/weibo?q=%23%E9%B8%A1%E9%B8%A3%E5%AF%BA%E6%A8%B1%E8%8A%B1%23) `246.6K 🔥` `+56%`
1. [逐玉反盗版声明 (Zhuyu Anti-Piracy Statement)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%8F%8D%E7%9B%97%E7%89%88%E5%A3%B0%E6%98%8E%23) `208.5K 🔥` `+31%`
1. [小猫嫌弃自己脚臭](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E5%AB%8C%E5%BC%83%E8%87%AA%E5%B7%B1%E8%84%9A%E8%87%AD%23) `206.4K 🔥` `+30%`
1. [以色列拦截伊朗导弹失败瞬间](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%8B%A6%E6%88%AA%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E5%A4%B1%E8%B4%A5%E7%9E%AC%E9%97%B4%23) `205.0K 🔥` `+30%`
1. [徐若晗桃花坞第一大漏勺](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%8B%A5%E6%99%97%E6%A1%83%E8%8A%B1%E5%9D%9E%E7%AC%AC%E4%B8%80%E5%A4%A7%E6%BC%8F%E5%8B%BA%23) `203.5K 🔥` `+48%`
1. [沙特谴责伊朗](https://s.weibo.com/weibo?q=%23%E6%B2%99%E7%89%B9%E8%B0%B4%E8%B4%A3%E4%BC%8A%E6%9C%97%23) `164.3K 🔥` `+97%`
1. [葛夕回怼复合要求](https://s.weibo.com/weibo?q=%23%E8%91%9B%E5%A4%95%E5%9B%9E%E6%80%BC%E5%A4%8D%E5%90%88%E8%A6%81%E6%B1%82%23) `132.4K 🔥` `+116%`
1. [中国变压器在国外一器难求](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%8F%98%E5%8E%8B%E5%99%A8%E5%9C%A8%E5%9B%BD%E5%A4%96%E4%B8%80%E5%99%A8%E9%9A%BE%E6%B1%82%23) `631.1K 🔥`
1. [英国男星死在普吉岛排水沟 (British actor dies in Phuket drain)](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E7%94%B7%E6%98%9F%E6%AD%BB%E5%9C%A8%E6%99%AE%E5%90%89%E5%B2%9B%E6%8E%92%E6%B0%B4%E6%B2%9F%23) `170.5K 🔥`
1. [网友给逐玉的建议](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E7%BB%99%E9%80%90%E7%8E%89%E7%9A%84%E5%BB%BA%E8%AE%AE%23) `161.8K 🔥`
1. [上班自备厕纸](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E8%87%AA%E5%A4%87%E5%8E%95%E7%BA%B8%23) `140.4K 🔥`
1. [广东横琴发布警情通报](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E6%A8%AA%E7%90%B4%E5%8F%91%E5%B8%83%E8%AD%A6%E6%83%85%E9%80%9A%E6%8A%A5%23) `128.1K 🔥`
1. [高以翔前女友BeIIa官宣怀孕](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%BB%A5%E7%BF%94%E5%89%8D%E5%A5%B3%E5%8F%8BBeIIa%E5%AE%98%E5%AE%A3%E6%80%80%E5%AD%95%23) `121.1K 🔥`
1. [金价 (gold price)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `120.4K 🔥`
1. [陈慧敏怀孕了](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%85%A7%E6%95%8F%E6%80%80%E5%AD%95%E4%BA%86%23) `119.4K 🔥`
1. [实验室爆炸致1死3伤谁该担责](https://s.weibo.com/weibo?q=%23%E5%AE%9E%E9%AA%8C%E5%AE%A4%E7%88%86%E7%82%B8%E8%87%B41%E6%AD%BB3%E4%BC%A4%E8%B0%81%E8%AF%A5%E6%8B%85%E8%B4%A3%23) `97.1K 🔥`
1. [逐玉的兵 不贪盗版](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E7%9A%84%E5%85%B5%20%E4%B8%8D%E8%B4%AA%E7%9B%97%E7%89%88%23) `80.0K 🔥`
1. [女子称被诱导买基金3年亏500万](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E8%A2%AB%E8%AF%B1%E5%AF%BC%E4%B9%B0%E5%9F%BA%E9%87%913%E5%B9%B4%E4%BA%8F500%E4%B8%87%23) `77.0K 🔥`
1. [大熊猫摔到地上有多Q弹](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%86%8A%E7%8C%AB%E6%91%94%E5%88%B0%E5%9C%B0%E4%B8%8A%E6%9C%89%E5%A4%9AQ%E5%BC%B9%23) `74.6K 🔥`
1. [伊朗说允许非敌方船只通过霍尔木兹 (Iran says it will allow non-enemy ships to pass through Hormuz)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%AF%B4%E5%85%81%E8%AE%B8%E9%9D%9E%E6%95%8C%E6%96%B9%E8%88%B9%E5%8F%AA%E9%80%9A%E8%BF%87%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%23) `67.3K 🔥`
1. [一诺职业病](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E8%81%8C%E4%B8%9A%E7%97%85%23) `65.6K 🔥`
1. [财经大V误导投资者获利超4000万](https://s.weibo.com/weibo?q=%23%E8%B4%A2%E7%BB%8F%E5%A4%A7V%E8%AF%AF%E5%AF%BC%E6%8A%95%E8%B5%84%E8%80%85%E8%8E%B7%E5%88%A9%E8%B6%854000%E4%B8%87%23) `65.0K 🔥`
1. [靳磊任深圳市委书记 (Jin Lei appointed as Shenzhen Municipal Party Committee Secretary)](https://s.weibo.com/weibo?q=%23%E9%9D%B3%E7%A3%8A%E4%BB%BB%E6%B7%B1%E5%9C%B3%E5%B8%82%E5%A7%94%E4%B9%A6%E8%AE%B0%23) `54.0K 🔥`
1. [警方通报男子窜至某小区抢劫致1死 (The police reported that a man ran into a community and robbed one person to death.)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E7%94%B7%E5%AD%90%E7%AA%9C%E8%87%B3%E6%9F%90%E5%B0%8F%E5%8C%BA%E6%8A%A2%E5%8A%AB%E8%87%B41%E6%AD%BB%23) `786.5K 🔥` `-29%`
1. [梅姨在广州三元里落网为不实消息](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E5%9C%A8%E5%B9%BF%E5%B7%9E%E4%B8%89%E5%85%83%E9%87%8C%E8%90%BD%E7%BD%91%E4%B8%BA%E4%B8%8D%E5%AE%9E%E6%B6%88%E6%81%AF%23) `177.6K 🔥` `-26%`
1. [含娃量最高的小长假要来了](https://s.weibo.com/weibo?q=%23%E5%90%AB%E5%A8%83%E9%87%8F%E6%9C%80%E9%AB%98%E7%9A%84%E5%B0%8F%E9%95%BF%E5%81%87%E8%A6%81%E6%9D%A5%E4%BA%86%23) `123.9K 🔥` `-21%`
1. [瞿颖西班牙 王俊凯新加坡 (Qu Ying Spain Wang Junkai Singapore)](https://s.weibo.com/weibo?q=%23%E7%9E%BF%E9%A2%96%E8%A5%BF%E7%8F%AD%E7%89%99%20%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%96%B0%E5%8A%A0%E5%9D%A1%23) `118.4K 🔥` `-24%`
1. [AI演员签约官宣](https://s.weibo.com/weibo?q=%23AI%E6%BC%94%E5%91%98%E7%AD%BE%E7%BA%A6%E5%AE%98%E5%AE%A3%23) `96.7K 🔥` `-31%`
1. [周冬雨素颜录节目](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%86%AC%E9%9B%A8%E7%B4%A0%E9%A2%9C%E5%BD%95%E8%8A%82%E7%9B%AE%23) `90.2K 🔥` `-43%`
1. [半小时取鱼刺7小时修路震惊老外](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E5%B0%8F%E6%97%B6%E5%8F%96%E9%B1%BC%E5%88%BA7%E5%B0%8F%E6%97%B6%E4%BF%AE%E8%B7%AF%E9%9C%87%E6%83%8A%E8%80%81%E5%A4%96%23) `82.9K 🔥` `-33%`
1. [希林娜依高伯克利七年没毕业](https://s.weibo.com/weibo?q=%23%E5%B8%8C%E6%9E%97%E5%A8%9C%E4%BE%9D%E9%AB%98%E4%BC%AF%E5%85%8B%E5%88%A9%E4%B8%83%E5%B9%B4%E6%B2%A1%E6%AF%95%E4%B8%9A%23) `80.9K 🔥` `-32%`
1. [小猫不敢再随便熬夜了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E4%B8%8D%E6%95%A2%E5%86%8D%E9%9A%8F%E4%BE%BF%E7%86%AC%E5%A4%9C%E4%BA%86%23) `67.1K 🔥` `-51%`
1. [齐旻 烂人真心 (Qi Min, a rotten person is sincere)](https://s.weibo.com/weibo?q=%23%E9%BD%90%E6%97%BB%20%E7%83%82%E4%BA%BA%E7%9C%9F%E5%BF%83%23) `62.2K 🔥` `-25%`
1. [校长回应江浙沪没有夜生活 (The principal responded that there is no nightlife in Jiangsu, Zhejiang and Shanghai)](https://s.weibo.com/weibo?q=%23%E6%A0%A1%E9%95%BF%E5%9B%9E%E5%BA%94%E6%B1%9F%E6%B5%99%E6%B2%AA%E6%B2%A1%E6%9C%89%E5%A4%9C%E7%94%9F%E6%B4%BB%23) `58.2K 🔥` `-26%`
1. [鞠婧祎月鳞绮纪预约近200万](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E9%A2%84%E7%BA%A6%E8%BF%91200%E4%B8%87%23) `56.9K 🔥` `-29%`
1. [碧血蝉全阵容官宣](https://s.weibo.com/weibo?q=%23%E7%A2%A7%E8%A1%80%E8%9D%89%E5%85%A8%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `56.7K 🔥` `-26%`

Updated at 2026-03-22 16:17:59

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
