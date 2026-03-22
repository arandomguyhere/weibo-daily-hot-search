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

1. [香港发生亿元黄金劫案 (Billion dollar gold robbery in Hong Kong)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%8F%91%E7%94%9F%E4%BA%BF%E5%85%83%E9%BB%84%E9%87%91%E5%8A%AB%E6%A1%88%23) `494.2K 🔥` `NEW`
1. [徐若晗道歉了但下次还敢](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%8B%A5%E6%99%97%E9%81%93%E6%AD%89%E4%BA%86%E4%BD%86%E4%B8%8B%E6%AC%A1%E8%BF%98%E6%95%A2%23) `154.8K 🔥` `NEW`
1. [逐玉学一下想见你是怎么挽救的](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%AD%A6%E4%B8%80%E4%B8%8B%E6%83%B3%E8%A7%81%E4%BD%A0%E6%98%AF%E6%80%8E%E4%B9%88%E6%8C%BD%E6%95%91%E7%9A%84%23) `144.8K 🔥` `NEW`
1. [迪士尼平替把多少县城父母骗惨了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E5%A3%AB%E5%B0%BC%E5%B9%B3%E6%9B%BF%E6%8A%8A%E5%A4%9A%E5%B0%91%E5%8E%BF%E5%9F%8E%E7%88%B6%E6%AF%8D%E9%AA%97%E6%83%A8%E4%BA%86%23) `120.5K 🔥` `NEW`
1. [AI精神病正在美国悄然蔓延](https://s.weibo.com/weibo?q=%23AI%E7%B2%BE%E7%A5%9E%E7%97%85%E6%AD%A3%E5%9C%A8%E7%BE%8E%E5%9B%BD%E6%82%84%E7%84%B6%E8%94%93%E5%BB%B6%23) `120.5K 🔥` `NEW`
1. [减内脏脂肪最有效的方法](https://s.weibo.com/weibo?q=%23%E5%87%8F%E5%86%85%E8%84%8F%E8%84%82%E8%82%AA%E6%9C%80%E6%9C%89%E6%95%88%E7%9A%84%E6%96%B9%E6%B3%95%23) `106.7K 🔥` `NEW`
1. [排队加油](https://s.weibo.com/weibo?q=%23%E6%8E%92%E9%98%9F%E5%8A%A0%E6%B2%B9%23) `80.4K 🔥` `NEW`
1. [黄金暴跌并非牛市终结信号](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E6%9A%B4%E8%B7%8C%E5%B9%B6%E9%9D%9E%E7%89%9B%E5%B8%82%E7%BB%88%E7%BB%93%E4%BF%A1%E5%8F%B7%23) `77.6K 🔥` `NEW`
1. [78岁女子撞死苹果高管一家被判缓刑](https://s.weibo.com/weibo?q=%2378%E5%B2%81%E5%A5%B3%E5%AD%90%E6%92%9E%E6%AD%BB%E8%8B%B9%E6%9E%9C%E9%AB%98%E7%AE%A1%E4%B8%80%E5%AE%B6%E8%A2%AB%E5%88%A4%E7%BC%93%E5%88%91%23) `74.9K 🔥` `NEW`
1. [身体状态决定人生走向](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BD%93%E7%8A%B6%E6%80%81%E5%86%B3%E5%AE%9A%E4%BA%BA%E7%94%9F%E8%B5%B0%E5%90%91%23) `72.4K 🔥` `NEW`
1. [伊朗称将彻底打乱敌人部署 (Iran says it will completely disrupt enemy deployment)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%B0%86%E5%BD%BB%E5%BA%95%E6%89%93%E4%B9%B1%E6%95%8C%E4%BA%BA%E9%83%A8%E7%BD%B2%23) `70.8K 🔥` `NEW`
1. [范世锜直播](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%96%E9%94%9C%E7%9B%B4%E6%92%AD%23) `64.2K 🔥` `NEW`
1. [迪丽热巴直播](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9B%B4%E6%92%AD%23) `61.8K 🔥` `NEW`
1. [专家称梅姨可能觉得自己在做善事](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E7%A7%B0%E6%A2%85%E5%A7%A8%E5%8F%AF%E8%83%BD%E8%A7%89%E5%BE%97%E8%87%AA%E5%B7%B1%E5%9C%A8%E5%81%9A%E5%96%84%E4%BA%8B%23) `770.3K 🔥` `+281%`
1. [金价八连跌消费者还是不敢买 (Gold prices have fallen for eight consecutive years, and consumers are still afraid to buy them)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%85%AB%E8%BF%9E%E8%B7%8C%E6%B6%88%E8%B4%B9%E8%80%85%E8%BF%98%E6%98%AF%E4%B8%8D%E6%95%A2%E4%B9%B0%23) `498.3K 🔥` `+240%`
1. [中国情侣开车视频在国外爆火](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%83%85%E4%BE%A3%E5%BC%80%E8%BD%A6%E8%A7%86%E9%A2%91%E5%9C%A8%E5%9B%BD%E5%A4%96%E7%88%86%E7%81%AB%23) `493.9K 🔥` `+445%`
1. [逐玉反盗版声明 (Zhuyu Anti-Piracy Statement)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%8F%8D%E7%9B%97%E7%89%88%E5%A3%B0%E6%98%8E%23) `492.9K 🔥` `+145%`
1. [耙耙柑你牛 (Rake tangerines, you are awesome)](https://s.weibo.com/weibo?q=%23%E8%80%99%E8%80%99%E6%9F%91%E4%BD%A0%E7%89%9B%23) `453.1K 🔥` `+130%`
1. [伊朗导弹在以本土砸出直径10米深坑](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E5%9C%A8%E4%BB%A5%E6%9C%AC%E5%9C%9F%E7%A0%B8%E5%87%BA%E7%9B%B4%E5%BE%8410%E7%B1%B3%E6%B7%B1%E5%9D%91%23) `266.6K 🔥` `+38%`
1. [仙逆 (Immortal Ni)](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%23) `130.6K 🔥` `+26%`
1. [23岁女子刚结婚一年就闭经](https://s.weibo.com/weibo?q=%2323%E5%B2%81%E5%A5%B3%E5%AD%90%E5%88%9A%E7%BB%93%E5%A9%9A%E4%B8%80%E5%B9%B4%E5%B0%B1%E9%97%AD%E7%BB%8F%23) `119.1K 🔥` `+24%`
1. [多邻国喊辛芷蕾妈妈](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E9%82%BB%E5%9B%BD%E5%96%8A%E8%BE%9B%E8%8A%B7%E8%95%BE%E5%A6%88%E5%A6%88%23) `114.2K 🔥` `+21%`
1. [云初令](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%88%9D%E4%BB%A4%23) `97.0K 🔥` `+28%`
1. [凌晨男子在医院走廊反复跪拜祈祷](https://s.weibo.com/weibo?q=%23%E5%87%8C%E6%99%A8%E7%94%B7%E5%AD%90%E5%9C%A8%E5%8C%BB%E9%99%A2%E8%B5%B0%E5%BB%8A%E5%8F%8D%E5%A4%8D%E8%B7%AA%E6%8B%9C%E7%A5%88%E7%A5%B7%23) `92.8K 🔥` `+49%`
1. [爱吃荔枝的人今年天塌了 (People who love lychees are in trouble this year)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%90%83%E8%8D%94%E6%9E%9D%E7%9A%84%E4%BA%BA%E4%BB%8A%E5%B9%B4%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `1.1M 🔥`
1. [网警破获网络开盒案守护网络空间安全 (Internet police cracked the case of network box opening to protect the security of cyberspace)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E8%AD%A6%E7%A0%B4%E8%8E%B7%E7%BD%91%E7%BB%9C%E5%BC%80%E7%9B%92%E6%A1%88%E5%AE%88%E6%8A%A4%E7%BD%91%E7%BB%9C%E7%A9%BA%E9%97%B4%E5%AE%89%E5%85%A8%23) `628.1K 🔥`
1. [爬山就得穿鲜艳的衣服 (You have to wear bright clothes when climbing mountains)](https://s.weibo.com/weibo?q=%23%E7%88%AC%E5%B1%B1%E5%B0%B1%E5%BE%97%E7%A9%BF%E9%B2%9C%E8%89%B3%E7%9A%84%E8%A1%A3%E6%9C%8D%23) `176.0K 🔥`
1. [月鳞绮纪](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%23) `171.8K 🔥`
1. [女生遭民警猥亵父亲刚开始以为是胡说 (The girl was molested by the police. Her father thought it was nonsense at first.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E9%81%AD%E6%B0%91%E8%AD%A6%E7%8C%A5%E4%BA%B5%E7%88%B6%E4%BA%B2%E5%88%9A%E5%BC%80%E5%A7%8B%E4%BB%A5%E4%B8%BA%E6%98%AF%E8%83%A1%E8%AF%B4%23) `163.3K 🔥`
1. [女子久坐便血半年后确诊癌症晚期 (Woman diagnosed with terminal cancer six months after sitting for long periods of time and having bloody stools)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B9%85%E5%9D%90%E4%BE%BF%E8%A1%80%E5%8D%8A%E5%B9%B4%E5%90%8E%E7%A1%AE%E8%AF%8A%E7%99%8C%E7%97%87%E6%99%9A%E6%9C%9F%23) `162.8K 🔥`
1. [辛芷蕾 多邻国](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%20%E5%A4%9A%E9%82%BB%E5%9B%BD%23) `120.0K 🔥`
1. [王鸥 何九华](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B8%A5%20%E4%BD%95%E4%B9%9D%E5%8D%8E%23) `118.7K 🔥`
1. [高以翔前女友BeIIa官宣怀孕](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%BB%A5%E7%BF%94%E5%89%8D%E5%A5%B3%E5%8F%8BBeIIa%E5%AE%98%E5%AE%A3%E6%80%80%E5%AD%95%23) `118.1K 🔥`
1. [小猫嫌弃自己脚臭](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E5%AB%8C%E5%BC%83%E8%87%AA%E5%B7%B1%E8%84%9A%E8%87%AD%23) `118.0K 🔥`
1. [胡楚靓前男友新恋情](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%A5%9A%E9%9D%93%E5%89%8D%E7%94%B7%E5%8F%8B%E6%96%B0%E6%81%8B%E6%83%85%23) `112.4K 🔥`
1. [刚洗完澡别在浴室吹头发 (Don’t dry your hair in the bathroom right after you take a shower)](https://s.weibo.com/weibo?q=%23%E5%88%9A%E6%B4%97%E5%AE%8C%E6%BE%A1%E5%88%AB%E5%9C%A8%E6%B5%B4%E5%AE%A4%E5%90%B9%E5%A4%B4%E5%8F%91%23) `108.7K 🔥`
1. [贾斯汀比伯Usher派对打架 (Justin Bieber Usher party fight)](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E6%96%AF%E6%B1%80%E6%AF%94%E4%BC%AFUsher%E6%B4%BE%E5%AF%B9%E6%89%93%E6%9E%B6%23) `107.7K 🔥`
1. [多校试点班主任退群 (Pilot class teachers in many schools withdraw from the group)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%A0%A1%E8%AF%95%E7%82%B9%E7%8F%AD%E4%B8%BB%E4%BB%BB%E9%80%80%E7%BE%A4%23) `94.0K 🔥`
1. [李羲承签售](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BE%B2%E6%89%BF%E7%AD%BE%E5%94%AE%23) `81.0K 🔥`
1. [李羲承状态](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BE%B2%E6%89%BF%E7%8A%B6%E6%80%81%23) `71.8K 🔥`
1. [花9块9抢珠宝的人看完天都塌了](https://s.weibo.com/weibo?q=%23%E8%8A%B19%E5%9D%979%E6%8A%A2%E7%8F%A0%E5%AE%9D%E7%9A%84%E4%BA%BA%E7%9C%8B%E5%AE%8C%E5%A4%A9%E9%83%BD%E5%A1%8C%E4%BA%86%23) `67.9K 🔥`
1. [本轮金价暴跌原因 (Reasons for the current plunge in gold prices)](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E8%BD%AE%E9%87%91%E4%BB%B7%E6%9A%B4%E8%B7%8C%E5%8E%9F%E5%9B%A0%23) `63.8K 🔥`
1. [日本网民批高市早苗仪态失度](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%BD%91%E6%B0%91%E6%89%B9%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E4%BB%AA%E6%80%81%E5%A4%B1%E5%BA%A6%23) `58.5K 🔥`
1. [乘客去世英航班带着遗体飞完全程](https://s.weibo.com/weibo?q=%23%E4%B9%98%E5%AE%A2%E5%8E%BB%E4%B8%96%E8%8B%B1%E8%88%AA%E7%8F%AD%E5%B8%A6%E7%9D%80%E9%81%97%E4%BD%93%E9%A3%9E%E5%AE%8C%E5%85%A8%E7%A8%8B%23) `173.6K 🔥` `-78%`
1. [17岁女孩一睡10天被叫醒就打人](https://s.weibo.com/weibo?q=%2317%E5%B2%81%E5%A5%B3%E5%AD%A9%E4%B8%80%E7%9D%A110%E5%A4%A9%E8%A2%AB%E5%8F%AB%E9%86%92%E5%B0%B1%E6%89%93%E4%BA%BA%23) `168.8K 🔥` `-24%`
1. [虞书欣杀青](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%9D%80%E9%9D%92%23) `119.7K 🔥` `-25%`
1. [白日提灯月鳞绮纪或对打](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E6%88%96%E5%AF%B9%E6%89%93%23) `105.6K 🔥` `-25%`
1. [糖尿病男子怕吃药疯狂节食致中毒](https://s.weibo.com/weibo?q=%23%E7%B3%96%E5%B0%BF%E7%97%85%E7%94%B7%E5%AD%90%E6%80%95%E5%90%83%E8%8D%AF%E7%96%AF%E7%8B%82%E8%8A%82%E9%A3%9F%E8%87%B4%E4%B8%AD%E6%AF%92%23) `67.9K 🔥` `-27%`
1. [伊朗武装部队称已从防御转为进攻 (Iran's armed forces say they have shifted from defense to offense)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%AD%A6%E8%A3%85%E9%83%A8%E9%98%9F%E7%A7%B0%E5%B7%B2%E4%BB%8E%E9%98%B2%E5%BE%A1%E8%BD%AC%E4%B8%BA%E8%BF%9B%E6%94%BB%23) `67.9K 🔥` `-26%`
1. [你好星期六下周嘉宾阵容预告](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%E4%B8%8B%E5%91%A8%E5%98%89%E5%AE%BE%E9%98%B5%E5%AE%B9%E9%A2%84%E5%91%8A%23) `60.8K 🔥` `-42%`

Updated at 2026-03-22 19:32:56

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
