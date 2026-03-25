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

1. [张凌赫伊利低温鲜奶代言人 (Zhang Linghe Yili low-temperature fresh milk spokesperson)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%BC%8A%E5%88%A9%E4%BD%8E%E6%B8%A9%E9%B2%9C%E5%A5%B6%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `87.4K 🔥` `NEW`
1. [江山大同巨女主的历史正剧](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E5%B1%B1%E5%A4%A7%E5%90%8C%E5%B7%A8%E5%A5%B3%E4%B8%BB%E7%9A%84%E5%8E%86%E5%8F%B2%E6%AD%A3%E5%89%A7%23) `16.8K 🔥` `NEW`
1. [老头乐起诉小米汽车 (Laotou Le sues Xiaomi Motors)](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%A4%B4%E4%B9%90%E8%B5%B7%E8%AF%89%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%23) `166.6K 🔥` `+190%`
1. [菲律宾纠集大量船只冲闯中方演训区](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%BE%8B%E5%AE%BE%E7%BA%A0%E9%9B%86%E5%A4%A7%E9%87%8F%E8%88%B9%E5%8F%AA%E5%86%B2%E9%97%AF%E4%B8%AD%E6%96%B9%E6%BC%94%E8%AE%AD%E5%8C%BA%23) `124.7K 🔥` `+195%`
1. [福农优品我在家乡等你来](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%86%9C%E4%BC%98%E5%93%81%E6%88%91%E5%9C%A8%E5%AE%B6%E4%B9%A1%E7%AD%89%E4%BD%A0%E6%9D%A5%23) `92.5K 🔥` `+188%`
1. [熬夜不是猝死的第一杀手 (Staying up late is not the number one killer of sudden death)](https://s.weibo.com/weibo?q=%23%E7%86%AC%E5%A4%9C%E4%B8%8D%E6%98%AF%E7%8C%9D%E6%AD%BB%E7%9A%84%E7%AC%AC%E4%B8%80%E6%9D%80%E6%89%8B%23) `81.8K 🔥` `+166%`
1. [速效救心丸最好不要贴身携带](https://s.weibo.com/weibo?q=%23%E9%80%9F%E6%95%88%E6%95%91%E5%BF%83%E4%B8%B8%E6%9C%80%E5%A5%BD%E4%B8%8D%E8%A6%81%E8%B4%B4%E8%BA%AB%E6%90%BA%E5%B8%A6%23) `38.9K 🔥` `+34%`
1. [伊朗提出关于停战5项条件 (Iran proposes 5 conditions for ceasefire)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8F%90%E5%87%BA%E5%85%B3%E4%BA%8E%E5%81%9C%E6%88%985%E9%A1%B9%E6%9D%A1%E4%BB%B6%23) `38.0K 🔥` `+30%`
1. [西山车祸](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%B1%B1%E8%BD%A6%E7%A5%B8%23) `37.6K 🔥` `+29%`
1. [中方坚决反对美强行控制一国元首](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9D%9A%E5%86%B3%E5%8F%8D%E5%AF%B9%E7%BE%8E%E5%BC%BA%E8%A1%8C%E6%8E%A7%E5%88%B6%E4%B8%80%E5%9B%BD%E5%85%83%E9%A6%96%23) `35.0K 🔥` `+31%`
1. [心源性猝死发生时的唯一急救手段](https://s.weibo.com/weibo?q=%23%E5%BF%83%E6%BA%90%E6%80%A7%E7%8C%9D%E6%AD%BB%E5%8F%91%E7%94%9F%E6%97%B6%E7%9A%84%E5%94%AF%E4%B8%80%E6%80%A5%E6%95%91%E6%89%8B%E6%AE%B5%23) `32.3K 🔥` `+41%`
1. [男子陪家人看病被医生发现猝死先兆 (A man went to see a doctor with his family, but the doctor discovered that there were signs of sudden death.)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%99%AA%E5%AE%B6%E4%BA%BA%E7%9C%8B%E7%97%85%E8%A2%AB%E5%8C%BB%E7%94%9F%E5%8F%91%E7%8E%B0%E7%8C%9D%E6%AD%BB%E5%85%88%E5%85%86%23) `23.8K 🔥` `+38%`
1. [白鹿在飞机上都没有吃飞机餐](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%9C%A8%E9%A3%9E%E6%9C%BA%E4%B8%8A%E9%83%BD%E6%B2%A1%E6%9C%89%E5%90%83%E9%A3%9E%E6%9C%BA%E9%A4%90%23) `19.1K 🔥` `+25%`
1. [罗永浩回应对话杨笠掉粉 (Luo Yonghao responded to the conversation and Yang Li lost fans)](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E5%9B%9E%E5%BA%94%E5%AF%B9%E8%AF%9D%E6%9D%A8%E7%AC%A0%E6%8E%89%E7%B2%89%23) `18.6K 🔥` `+32%`
1. [江山大同](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E5%B1%B1%E5%A4%A7%E5%90%8C%23) `17.7K 🔥` `+25%`
1. [毛晓彤女装牛仔裤 (Mao Xiaotong women's jeans)](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E6%99%93%E5%BD%A4%E5%A5%B3%E8%A3%85%E7%89%9B%E4%BB%94%E8%A3%A4%23) `17.4K 🔥` `+22%`
1. [身体有这些症状要注意了 (Pay attention to these symptoms in your body)](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BD%93%E6%9C%89%E8%BF%99%E4%BA%9B%E7%97%87%E7%8A%B6%E8%A6%81%E6%B3%A8%E6%84%8F%E4%BA%86%23) `28.6K 🔥`
1. [刘晓庆接手妹妹的儿子抚养 (Liu Xiaoqing takes over the custody of her sister’s son)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%99%93%E5%BA%86%E6%8E%A5%E6%89%8B%E5%A6%B9%E5%A6%B9%E7%9A%84%E5%84%BF%E5%AD%90%E6%8A%9A%E5%85%BB%23) `28.5K 🔥`
1. [宫装樊长玉 (Fan Changyu in palace costume)](https://s.weibo.com/weibo?q=%23%E5%AE%AB%E8%A3%85%E6%A8%8A%E9%95%BF%E7%8E%89%23) `27.6K 🔥`
1. [32岁产妇羊水栓塞成植物人 (32-year-old mother suffers amniotic fluid embolism and becomes vegetative)](https://s.weibo.com/weibo?q=%2332%E5%B2%81%E4%BA%A7%E5%A6%87%E7%BE%8A%E6%B0%B4%E6%A0%93%E5%A1%9E%E6%88%90%E6%A4%8D%E7%89%A9%E4%BA%BA%23) `23.4K 🔥`
1. [董洁王橹杰捧脸 (Dong Jie and Wang Lujie hold their faces)](https://s.weibo.com/weibo?q=%23%E8%91%A3%E6%B4%81%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%8D%A7%E8%84%B8%23) `23.0K 🔥`
1. [白日提灯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `22.9K 🔥`
1. [日方回应自卫队人员强闯我大使馆](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%96%B9%E5%9B%9E%E5%BA%94%E8%87%AA%E5%8D%AB%E9%98%9F%E4%BA%BA%E5%91%98%E5%BC%BA%E9%97%AF%E6%88%91%E5%A4%A7%E4%BD%BF%E9%A6%86%23) `22.5K 🔥`
1. [何润东近7日涨粉25.6万](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E8%BF%917%E6%97%A5%E6%B6%A8%E7%B2%8925.6%E4%B8%87%23) `21.7K 🔥`
1. [出差猥亵女下属研究所所长被刑拘](https://s.weibo.com/weibo?q=%23%E5%87%BA%E5%B7%AE%E7%8C%A5%E4%BA%B5%E5%A5%B3%E4%B8%8B%E5%B1%9E%E7%A0%94%E7%A9%B6%E6%89%80%E6%89%80%E9%95%BF%E8%A2%AB%E5%88%91%E6%8B%98%23) `21.2K 🔥`
1. [第一次知道玻璃厂不能停电 (This is the first time I know that the glass factory cannot have a power outage)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%9F%A5%E9%81%93%E7%8E%BB%E7%92%83%E5%8E%82%E4%B8%8D%E8%83%BD%E5%81%9C%E7%94%B5%23) `21.1K 🔥`
1. [专家说黄金正重演08年剧本 (Experts say gold is repeating 2008 script)](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E8%AF%B4%E9%BB%84%E9%87%91%E6%AD%A3%E9%87%8D%E6%BC%9408%E5%B9%B4%E5%89%A7%E6%9C%AC%23) `20.5K 🔥`
1. [黄金重演08年剧本 (Gold repeats the 2008 script)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E9%87%8D%E6%BC%9408%E5%B9%B4%E5%89%A7%E6%9C%AC%23) `17.6K 🔥`
1. [身体有这6种表现最好别运动 (If your body has these 6 symptoms, it’s best not to exercise)](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BD%93%E6%9C%89%E8%BF%996%E7%A7%8D%E8%A1%A8%E7%8E%B0%E6%9C%80%E5%A5%BD%E5%88%AB%E8%BF%90%E5%8A%A8%23) `17.2K 🔥`
1. [上海警方通报女子出差遭领导猥亵 (Shanghai police reported that a woman was molested by her boss on a business trip)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%90%E5%87%BA%E5%B7%AE%E9%81%AD%E9%A2%86%E5%AF%BC%E7%8C%A5%E4%BA%B5%23) `17.0K 🔥`
1. [台湾赌王身中29枪死亡5枪爆头](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E8%B5%8C%E7%8E%8B%E8%BA%AB%E4%B8%AD29%E6%9E%AA%E6%AD%BB%E4%BA%A15%E6%9E%AA%E7%88%86%E5%A4%B4%23) `17.0K 🔥`
1. [21岁女子为养团播男友打2份工](https://s.weibo.com/weibo?q=%2321%E5%B2%81%E5%A5%B3%E5%AD%90%E4%B8%BA%E5%85%BB%E5%9B%A2%E6%92%AD%E7%94%B7%E5%8F%8B%E6%89%932%E4%BB%BD%E5%B7%A5%23) `16.8K 🔥`
1. [你好1983](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD1983%23) `16.8K 🔥`
1. [我国院外心源性猝死存活率不足3%](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E9%99%A2%E5%A4%96%E5%BF%83%E6%BA%90%E6%80%A7%E7%8C%9D%E6%AD%BB%E5%AD%98%E6%B4%BB%E7%8E%87%E4%B8%8D%E8%B6%B33%25%23) `16.8K 🔥`
1. [国产激光武器真实打击画面 (Realistic combat scenes of domestically produced laser weapons)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BA%A7%E6%BF%80%E5%85%89%E6%AD%A6%E5%99%A8%E7%9C%9F%E5%AE%9E%E6%89%93%E5%87%BB%E7%94%BB%E9%9D%A2%23) `16.8K 🔥`
1. [内蒙古地震 (Inner Mongolia earthquake)](https://s.weibo.com/weibo?q=%23%E5%86%85%E8%92%99%E5%8F%A4%E5%9C%B0%E9%9C%87%23) `16.8K 🔥`
1. [张凌赫中学时期贴吧发言 (Zhang Linghe’s speech on Tieba when he was in middle school)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%B8%AD%E5%AD%A6%E6%97%B6%E6%9C%9F%E8%B4%B4%E5%90%A7%E5%8F%91%E8%A8%80%23) `16.8K 🔥`
1. [黄金暴跌超10%又暴力反弹](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E6%9A%B4%E8%B7%8C%E8%B6%8510%25%E5%8F%88%E6%9A%B4%E5%8A%9B%E5%8F%8D%E5%BC%B9%23) `16.8K 🔥`
1. [俞宝儿扮演者回复邓凯孔雪儿 (The actor who plays Yu Baoer replies to Deng Kai and Kong Xueer)](https://s.weibo.com/weibo?q=%23%E4%BF%9E%E5%AE%9D%E5%84%BF%E6%89%AE%E6%BC%94%E8%80%85%E5%9B%9E%E5%A4%8D%E9%82%93%E5%87%AF%E5%AD%94%E9%9B%AA%E5%84%BF%23) `16.8K 🔥`
1. [我是公安大学的 (I am from the Public Security University)](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%98%AF%E5%85%AC%E5%AE%89%E5%A4%A7%E5%AD%A6%E7%9A%84%23) `16.8K 🔥`
1. [气得想把刘敏涛的痣抠下来](https://s.weibo.com/weibo?q=%23%E6%B0%94%E5%BE%97%E6%83%B3%E6%8A%8A%E5%88%98%E6%95%8F%E6%B6%9B%E7%9A%84%E7%97%A3%E6%8A%A0%E4%B8%8B%E6%9D%A5%23) `16.8K 🔥`
1. [如何改善慢性炎症 (How to improve chronic inflammation)](https://s.weibo.com/weibo?q=%23%E5%A6%82%E4%BD%95%E6%94%B9%E5%96%84%E6%85%A2%E6%80%A7%E7%82%8E%E7%97%87%23) `16.8K 🔥`
1. [于东来宣布每人退3000元](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E4%B8%9C%E6%9D%A5%E5%AE%A3%E5%B8%83%E6%AF%8F%E4%BA%BA%E9%80%803000%E5%85%83%23) `16.8K 🔥`
1. [家事法庭](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%BA%8B%E6%B3%95%E5%BA%AD%23) `16.8K 🔥`
1. [鞠婧祎女总裁上班路透既视感](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%A5%B3%E6%80%BB%E8%A3%81%E4%B8%8A%E7%8F%AD%E8%B7%AF%E9%80%8F%E6%97%A2%E8%A7%86%E6%84%9F%23) `16.8K 🔥`
1. [张真源出发录奔跑吧14 (Zhang Zhenyuan sets off to record Running Bar 14)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%87%BA%E5%8F%91%E5%BD%95%E5%A5%94%E8%B7%91%E5%90%A714%23) `16.8K 🔥`
1. [Uzi自曝与iG管理层沟通 (Uzi reveals he communicated with iG management)](https://s.weibo.com/weibo?q=%23Uzi%E8%87%AA%E6%9B%9D%E4%B8%8EiG%E7%AE%A1%E7%90%86%E5%B1%82%E6%B2%9F%E9%80%9A%23) `16.8K 🔥`
1. [警惕身体发出的求救信号](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%83%95%E8%BA%AB%E4%BD%93%E5%8F%91%E5%87%BA%E7%9A%84%E6%B1%82%E6%95%91%E4%BF%A1%E5%8F%B7%23) `16.8K 🔥`
1. [王俊凯专辑概念预告](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%B8%93%E8%BE%91%E6%A6%82%E5%BF%B5%E9%A2%84%E5%91%8A%23) `16.8K 🔥`
1. [逐玉 删减 (Zhuyu deleted)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E5%88%A0%E5%87%8F%23) `16.8K 🔥`
1. [简单的人生](https://s.weibo.com/weibo?q=%23%E7%AE%80%E5%8D%95%E7%9A%84%E4%BA%BA%E7%94%9F%23) `16.8K 🔥`

Updated at 2026-03-26 05:35:51

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
