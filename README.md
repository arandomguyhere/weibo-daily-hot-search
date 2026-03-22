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

1. [华晨宇的重点来了 (Here comes Hua Chenyu’s focus)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E7%9A%84%E9%87%8D%E7%82%B9%E6%9D%A5%E4%BA%86%23) `361.9K 🔥` `NEW`
1. [伊朗导弹在以本土砸出直径10米深坑](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E5%9C%A8%E4%BB%A5%E6%9C%AC%E5%9C%9F%E7%A0%B8%E5%87%BA%E7%9B%B4%E5%BE%8410%E7%B1%B3%E6%B7%B1%E5%9D%91%23) `296.6K 🔥` `NEW`
1. [虞书欣杀青](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%9D%80%E9%9D%92%23) `209.4K 🔥` `NEW`
1. [白日提灯月鳞绮纪或对打](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E6%88%96%E5%AF%B9%E6%89%93%23) `193.0K 🔥` `NEW`
1. [李羲承状态](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BE%B2%E6%89%BF%E7%8A%B6%E6%80%81%23) `92.1K 🔥` `NEW`
1. [糖尿病男子怕吃药疯狂节食致中毒](https://s.weibo.com/weibo?q=%23%E7%B3%96%E5%B0%BF%E7%97%85%E7%94%B7%E5%AD%90%E6%80%95%E5%90%83%E8%8D%AF%E7%96%AF%E7%8B%82%E8%8A%82%E9%A3%9F%E8%87%B4%E4%B8%AD%E6%AF%92%23) `91.3K 🔥` `NEW`
1. [伊朗武装部队称已从防御转为进攻](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%AD%A6%E8%A3%85%E9%83%A8%E9%98%9F%E7%A7%B0%E5%B7%B2%E4%BB%8E%E9%98%B2%E5%BE%A1%E8%BD%AC%E4%B8%BA%E8%BF%9B%E6%94%BB%23) `90.7K 🔥` `NEW`
1. [梅姨曾称有2女儿家在广州](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E6%9B%BE%E7%A7%B0%E6%9C%892%E5%A5%B3%E5%84%BF%E5%AE%B6%E5%9C%A8%E5%B9%BF%E5%B7%9E%23) `78.0K 🔥` `NEW`
1. [7只小狗结伴 励志片变爱情片](https://s.weibo.com/weibo?q=%237%E5%8F%AA%E5%B0%8F%E7%8B%97%E7%BB%93%E4%BC%B4%20%E5%8A%B1%E5%BF%97%E7%89%87%E5%8F%98%E7%88%B1%E6%83%85%E7%89%87%23) `73.2K 🔥` `NEW`
1. [胡楚靓前男友新恋情](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%A5%9A%E9%9D%93%E5%89%8D%E7%94%B7%E5%8F%8B%E6%96%B0%E6%81%8B%E6%83%85%23) `68.2K 🔥` `NEW`
1. [面试时可以把HR想成房东 (During the interview, you can think of HR as the landlord)](https://s.weibo.com/weibo?q=%23%E9%9D%A2%E8%AF%95%E6%97%B6%E5%8F%AF%E4%BB%A5%E6%8A%8AHR%E6%83%B3%E6%88%90%E6%88%BF%E4%B8%9C%23) `63.3K 🔥` `NEW`
1. [于东来回应40亿分配争议](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E4%B8%9C%E6%9D%A5%E5%9B%9E%E5%BA%9440%E4%BA%BF%E5%88%86%E9%85%8D%E4%BA%89%E8%AE%AE%23) `62.0K 🔥` `NEW`
1. [男子节食以蔬菜充饥1年致中毒送医](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%8A%82%E9%A3%9F%E4%BB%A5%E8%94%AC%E8%8F%9C%E5%85%85%E9%A5%A51%E5%B9%B4%E8%87%B4%E4%B8%AD%E6%AF%92%E9%80%81%E5%8C%BB%23) `59.1K 🔥` `NEW`
1. [日本网民批高市早苗仪态失度](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%BD%91%E6%B0%91%E6%89%B9%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E4%BB%AA%E6%80%81%E5%A4%B1%E5%BA%A6%23) `58.7K 🔥` `NEW`
1. [中国boy首谈妈妈去世](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BDboy%E9%A6%96%E8%B0%88%E5%A6%88%E5%A6%88%E5%8E%BB%E4%B8%96%23) `57.5K 🔥` `NEW`
1. [午睡真的就像开盲盒](https://s.weibo.com/weibo?q=%23%E5%8D%88%E7%9D%A1%E7%9C%9F%E7%9A%84%E5%B0%B1%E5%83%8F%E5%BC%80%E7%9B%B2%E7%9B%92%23) `57.3K 🔥` `NEW`
1. [爱吃荔枝的人今年天塌了 (People who love lychees are in trouble this year)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%90%83%E8%8D%94%E6%9E%9D%E7%9A%84%E4%BA%BA%E4%BB%8A%E5%B9%B4%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `1.1M 🔥` `+34%`
1. [乘客去世英航班带着遗体飞完全程](https://s.weibo.com/weibo?q=%23%E4%B9%98%E5%AE%A2%E5%8E%BB%E4%B8%96%E8%8B%B1%E8%88%AA%E7%8F%AD%E5%B8%A6%E7%9D%80%E9%81%97%E4%BD%93%E9%A3%9E%E5%AE%8C%E5%85%A8%E7%A8%8B%23) `790.2K 🔥` `+117%`
1. [17岁女孩一睡10天被叫醒就打人](https://s.weibo.com/weibo?q=%2317%E5%B2%81%E5%A5%B3%E5%AD%A9%E4%B8%80%E7%9D%A110%E5%A4%A9%E8%A2%AB%E5%8F%AB%E9%86%92%E5%B0%B1%E6%89%93%E4%BA%BA%23) `423.9K 🔥` `+22%`
1. [逐玉反盗版声明 (Zhuyu Anti-Piracy Statement)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%8F%8D%E7%9B%97%E7%89%88%E5%A3%B0%E6%98%8E%23) `392.4K 🔥` `+31%`
1. [耙耙柑你牛](https://s.weibo.com/weibo?q=%23%E8%80%99%E8%80%99%E6%9F%91%E4%BD%A0%E7%89%9B%23) `274.5K 🔥` `+222%`
1. [油价飙升加油站变大型停车场](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E9%A3%99%E5%8D%87%E5%8A%A0%E6%B2%B9%E7%AB%99%E5%8F%98%E5%A4%A7%E5%9E%8B%E5%81%9C%E8%BD%A6%E5%9C%BA%23) `230.5K 🔥` `+56%`
1. [女生遭民警猥亵父亲刚开始以为是胡说 (The girl was molested by the police. Her father thought it was nonsense at first.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E9%81%AD%E6%B0%91%E8%AD%A6%E7%8C%A5%E4%BA%B5%E7%88%B6%E4%BA%B2%E5%88%9A%E5%BC%80%E5%A7%8B%E4%BB%A5%E4%B8%BA%E6%98%AF%E8%83%A1%E8%AF%B4%23) `230.2K 🔥` `+77%`
1. [专家称梅姨可能觉得自己在做善事](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E7%A7%B0%E6%A2%85%E5%A7%A8%E5%8F%AF%E8%83%BD%E8%A7%89%E5%BE%97%E8%87%AA%E5%B7%B1%E5%9C%A8%E5%81%9A%E5%96%84%E4%BA%8B%23) `177.6K 🔥` `+57%`
1. [女子久坐便血半年后确诊癌症晚期 (Woman diagnosed with terminal cancer six months after sitting for long periods of time and having bloody stools)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B9%85%E5%9D%90%E4%BE%BF%E8%A1%80%E5%8D%8A%E5%B9%B4%E5%90%8E%E7%A1%AE%E8%AF%8A%E7%99%8C%E7%97%87%E6%99%9A%E6%9C%9F%23) `173.9K 🔥` `+24%`
1. [金价八连跌消费者还是不敢买](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%85%AB%E8%BF%9E%E8%B7%8C%E6%B6%88%E8%B4%B9%E8%80%85%E8%BF%98%E6%98%AF%E4%B8%8D%E6%95%A2%E4%B9%B0%23) `95.2K 🔥` `+25%`
1. [中国变压器在国外一器难求 (Chinese transformers are hard to find abroad)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%8F%98%E5%8E%8B%E5%99%A8%E5%9C%A8%E5%9B%BD%E5%A4%96%E4%B8%80%E5%99%A8%E9%9A%BE%E6%B1%82%23) `659.0K 🔥`
1. [爬山就得穿鲜艳的衣服](https://s.weibo.com/weibo?q=%23%E7%88%AC%E5%B1%B1%E5%B0%B1%E5%BE%97%E7%A9%BF%E9%B2%9C%E8%89%B3%E7%9A%84%E8%A1%A3%E6%9C%8D%23) `333.8K 🔥`
1. [你好星期六下周嘉宾阵容预告](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%E4%B8%8B%E5%91%A8%E5%98%89%E5%AE%BE%E9%98%B5%E5%AE%B9%E9%A2%84%E5%91%8A%23) `151.4K 🔥`
1. [小猫嫌弃自己脚臭](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E5%AB%8C%E5%BC%83%E8%87%AA%E5%B7%B1%E8%84%9A%E8%87%AD%23) `149.8K 🔥`
1. [F35被击中关键原因是异常低空飞行](https://s.weibo.com/weibo?q=%23F35%E8%A2%AB%E5%87%BB%E4%B8%AD%E5%85%B3%E9%94%AE%E5%8E%9F%E5%9B%A0%E6%98%AF%E5%BC%82%E5%B8%B8%E4%BD%8E%E7%A9%BA%E9%A3%9E%E8%A1%8C%23) `99.6K 🔥`
1. [辛芷蕾 多邻国](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%20%E5%A4%9A%E9%82%BB%E5%9B%BD%23) `95.0K 🔥`
1. [王鸥 何九华](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B8%A5%20%E4%BD%95%E4%B9%9D%E5%8D%8E%23) `93.9K 🔥`
1. [高以翔前女友BeIIa官宣怀孕](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%BB%A5%E7%BF%94%E5%89%8D%E5%A5%B3%E5%8F%8BBeIIa%E5%AE%98%E5%AE%A3%E6%80%80%E5%AD%95%23) `93.5K 🔥`
1. [刚洗完澡别在浴室吹头发 (Don’t dry your hair in the bathroom right after you take a shower)](https://s.weibo.com/weibo?q=%23%E5%88%9A%E6%B4%97%E5%AE%8C%E6%BE%A1%E5%88%AB%E5%9C%A8%E6%B5%B4%E5%AE%A4%E5%90%B9%E5%A4%B4%E5%8F%91%23) `93.0K 🔥`
1. [贾斯汀比伯Usher派对打架 (Justin Bieber Usher party fight)](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E6%96%AF%E6%B1%80%E6%AF%94%E4%BC%AFUsher%E6%B4%BE%E5%AF%B9%E6%89%93%E6%9E%B6%23) `92.6K 🔥`
1. [本轮金价暴跌原因](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E8%BD%AE%E9%87%91%E4%BB%B7%E6%9A%B4%E8%B7%8C%E5%8E%9F%E5%9B%A0%23) `91.7K 🔥`
1. [陈慧敏怀孕了 (Chen Huimin is pregnant)](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%85%A7%E6%95%8F%E6%80%80%E5%AD%95%E4%BA%86%23) `91.6K 🔥`
1. [月鳞绮纪](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%23) `526.0K 🔥` `-52%`
1. [多校试点班主任退群 (Pilot class teachers in many schools withdraw from the group)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%A0%A1%E8%AF%95%E7%82%B9%E7%8F%AD%E4%B8%BB%E4%BB%BB%E9%80%80%E7%BE%A4%23) `143.0K 🔥` `-40%`
1. [油价](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%23) `94.5K 🔥` `-34%`
1. [孙颖莎不信邪喊再来一次 (Sun Yingsha didn’t believe it and shouted to do it again)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E4%B8%8D%E4%BF%A1%E9%82%AA%E5%96%8A%E5%86%8D%E6%9D%A5%E4%B8%80%E6%AC%A1%23) `72.8K 🔥` `-30%`
1. [鸡鸣寺樱花](https://s.weibo.com/weibo?q=%23%E9%B8%A1%E9%B8%A3%E5%AF%BA%E6%A8%B1%E8%8A%B1%23) `72.4K 🔥` `-34%`
1. [机场怎么不开个洗头发的店](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%9C%BA%E6%80%8E%E4%B9%88%E4%B8%8D%E5%BC%80%E4%B8%AA%E6%B4%97%E5%A4%B4%E5%8F%91%E7%9A%84%E5%BA%97%23) `69.6K 🔥` `-21%`
1. [壁上观 (View from the wall)](https://s.weibo.com/weibo?q=%23%E5%A3%81%E4%B8%8A%E8%A7%82%23) `69.3K 🔥` `-21%`
1. [以色列拦截伊朗导弹失败瞬间](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%8B%A6%E6%88%AA%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E5%A4%B1%E8%B4%A5%E7%9E%AC%E9%97%B4%23) `66.1K 🔥` `-48%`
1. [徐若晗桃花坞第一大漏勺](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%8B%A5%E6%99%97%E6%A1%83%E8%8A%B1%E5%9D%9E%E7%AC%AC%E4%B8%80%E5%A4%A7%E6%BC%8F%E5%8B%BA%23) `65.5K 🔥` `-43%`
1. [孔雪儿进行曲cha](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E8%BF%9B%E8%A1%8C%E6%9B%B2cha%23) `62.5K 🔥` `-24%`
1. [张凌赫演技 颜值外的破局](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%BC%94%E6%8A%80%20%E9%A2%9C%E5%80%BC%E5%A4%96%E7%9A%84%E7%A0%B4%E5%B1%80%23) `61.5K 🔥` `-38%`
1. [金饰销售火爆 (Gold jewelry sales boom)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E9%94%80%E5%94%AE%E7%81%AB%E7%88%86%23) `60.5K 🔥` `-27%`
1. [羽毛球降价原因找到了](https://s.weibo.com/weibo?q=%23%E7%BE%BD%E6%AF%9B%E7%90%83%E9%99%8D%E4%BB%B7%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `58.3K 🔥` `-34%`

Updated at 2026-03-22 18:36:36

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
