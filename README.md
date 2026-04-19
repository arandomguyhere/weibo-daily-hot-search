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

1. [本周做什么都顺的星座 (Zodiac signs that will go well with anything you do this week)](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%A8%E5%81%9A%E4%BB%80%E4%B9%88%E9%83%BD%E9%A1%BA%E7%9A%84%E6%98%9F%E5%BA%A7%23) `608.7K 🔥` `NEW`
1. [酱园弄颗粒无收](https://s.weibo.com/weibo?q=%23%E9%85%B1%E5%9B%AD%E5%BC%84%E9%A2%97%E7%B2%92%E6%97%A0%E6%94%B6%23) `563.5K 🔥` `NEW`
1. [美军武力拦截伊朗货船](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E6%AD%A6%E5%8A%9B%E6%8B%A6%E6%88%AA%E4%BC%8A%E6%9C%97%E8%B4%A7%E8%88%B9%23) `327.9K 🔥` `NEW`
1. [今年5月将进入厄尔尼诺状态](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B45%E6%9C%88%E5%B0%86%E8%BF%9B%E5%85%A5%E5%8E%84%E5%B0%94%E5%B0%BC%E8%AF%BA%E7%8A%B6%E6%80%81%23) `324.6K 🔥` `NEW`
1. [陈赫晒鹿晗live图](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E6%99%92%E9%B9%BF%E6%99%97live%E5%9B%BE%23) `323.7K 🔥` `NEW`
1. [薛之谦 李雨桐](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%20%E6%9D%8E%E9%9B%A8%E6%A1%90%23) `322.0K 🔥` `NEW`
1. [班主任回应12岁男孩遭9人群殴](https://s.weibo.com/weibo?q=%23%E7%8F%AD%E4%B8%BB%E4%BB%BB%E5%9B%9E%E5%BA%9412%E5%B2%81%E7%94%B7%E5%AD%A9%E9%81%AD9%E4%BA%BA%E7%BE%A4%E6%AE%B4%23) `318.1K 🔥` `NEW`
1. [鹿晗 关晓彤](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%20%E5%85%B3%E6%99%93%E5%BD%A4%23) `291.4K 🔥` `NEW`
1. [一小时不到只花了六分钟](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%B0%8F%E6%97%B6%E4%B8%8D%E5%88%B0%E5%8F%AA%E8%8A%B1%E4%BA%86%E5%85%AD%E5%88%86%E9%92%9F%23) `268.6K 🔥` `NEW`
1. [陈赫](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%23) `267.0K 🔥` `NEW`
1. [刘宇宁收官哭了 (Liu Yuning cried at the end)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E6%94%B6%E5%AE%98%E5%93%AD%E4%BA%86%23) `145.8K 🔥` `NEW`
1. [章子怡马丽陪跑](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%AD%90%E6%80%A1%E9%A9%AC%E4%B8%BD%E9%99%AA%E8%B7%91%23) `133.1K 🔥` `NEW`
1. [特朗普称万斯不参加美伊复谈](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E4%B8%87%E6%96%AF%E4%B8%8D%E5%8F%82%E5%8A%A0%E7%BE%8E%E4%BC%8A%E5%A4%8D%E8%B0%88%23) `126.0K 🔥` `NEW`
1. [杜德伟金像奖最佳男配角](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%BE%B7%E4%BC%9F%E9%87%91%E5%83%8F%E5%A5%96%E6%9C%80%E4%BD%B3%E7%94%B7%E9%85%8D%E8%A7%92%23) `117.4K 🔥` `NEW`
1. [何润东健身是不想输给外国艺人](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E5%81%A5%E8%BA%AB%E6%98%AF%E4%B8%8D%E6%83%B3%E8%BE%93%E7%BB%99%E5%A4%96%E5%9B%BD%E8%89%BA%E4%BA%BA%23) `117.0K 🔥` `NEW`
1. [NBA季后赛](https://s.weibo.com/weibo?q=%23NBA%E5%AD%A3%E5%90%8E%E8%B5%9B%23) `114.5K 🔥` `NEW`
1. [英超](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E8%B6%85%23) `108.8K 🔥` `NEW`
1. [李小冉疑回应退出浪姐](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E7%96%91%E5%9B%9E%E5%BA%94%E9%80%80%E5%87%BA%E6%B5%AA%E5%A7%90%23) `99.7K 🔥` `NEW`
1. [王一博比赛日下次再赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%AF%94%E8%B5%9B%E6%97%A5%E4%B8%8B%E6%AC%A1%E5%86%8D%E8%B5%9B%23) `91.4K 🔥` `NEW`
1. [金像奖影后廖子妤 (Academy Award-winning Best Actress Liao Ziyu)](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%83%8F%E5%A5%96%E5%BD%B1%E5%90%8E%E5%BB%96%E5%AD%90%E5%A6%A4%23) `1.1M 🔥` `+62%`
1. [东部战区舰艇编队过航横当水道](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%83%A8%E6%88%98%E5%8C%BA%E8%88%B0%E8%89%87%E7%BC%96%E9%98%9F%E8%BF%87%E8%88%AA%E6%A8%AA%E5%BD%93%E6%B0%B4%E9%81%93%23) `768.1K 🔥` `+65%`
1. [150秒透视中国消费市场澎湃活力 (A 150-second insight into the surging vitality of China’s consumer market)](https://s.weibo.com/weibo?q=%23150%E7%A7%92%E9%80%8F%E8%A7%86%E4%B8%AD%E5%9B%BD%E6%B6%88%E8%B4%B9%E5%B8%82%E5%9C%BA%E6%BE%8E%E6%B9%83%E6%B4%BB%E5%8A%9B%23) `688.3K 🔥` `+80%`
1. [10倍速制冰冰箱只在京东 (10x speed ice refrigerator only on JD.com)](https://s.weibo.com/weibo?q=%2310%E5%80%8D%E9%80%9F%E5%88%B6%E5%86%B0%E5%86%B0%E7%AE%B1%E5%8F%AA%E5%9C%A8%E4%BA%AC%E4%B8%9C%23) `670.8K 🔥` `+217%`
1. [梁家辉5封金像奖影帝爆哭 (Tony Leung Ka Fai bursts into tears with 5 Academy Awards Best Actor)](https://s.weibo.com/weibo?q=%23%E6%A2%81%E5%AE%B6%E8%BE%895%E5%B0%81%E9%87%91%E5%83%8F%E5%A5%96%E5%BD%B1%E5%B8%9D%E7%88%86%E5%93%AD%23) `659.7K 🔥` `+73%`
1. [高中生因操行分不合格等被劝退 (High school students were dismissed due to unsatisfactory conduct scores, etc.)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%AD%E7%94%9F%E5%9B%A0%E6%93%8D%E8%A1%8C%E5%88%86%E4%B8%8D%E5%90%88%E6%A0%BC%E7%AD%89%E8%A2%AB%E5%8A%9D%E9%80%80%23) `331.7K 🔥` `+76%`
1. [豆包变豆脚了](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%8F%98%E8%B1%86%E8%84%9A%E4%BA%86%23) `327.1K 🔥` `+28%`
1. [曼城vs阿森纳 (Manchester City vs Arsenal)](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E5%9F%8Evs%E9%98%BF%E6%A3%AE%E7%BA%B3%23) `325.7K 🔥` `+138%`
1. [出门和不出门过的是两种人生 (Going out and not going out are two different lives.)](https://s.weibo.com/weibo?q=%23%E5%87%BA%E9%97%A8%E5%92%8C%E4%B8%8D%E5%87%BA%E9%97%A8%E8%BF%87%E7%9A%84%E6%98%AF%E4%B8%A4%E7%A7%8D%E4%BA%BA%E7%94%9F%23) `321.4K 🔥` `+45%`
1. [程序员追不上机器人干脆开电瓶车跟](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E5%BA%8F%E5%91%98%E8%BF%BD%E4%B8%8D%E4%B8%8A%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%B9%B2%E8%84%86%E5%BC%80%E7%94%B5%E7%93%B6%E8%BD%A6%E8%B7%9F%23) `313.8K 🔥` `+245%`
1. [雷军回应第一次挥方格旗](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94%E7%AC%AC%E4%B8%80%E6%AC%A1%E6%8C%A5%E6%96%B9%E6%A0%BC%E6%97%97%23) `310.0K 🔥` `+256%`
1. [铁路12306已拒绝出票105.6万张 (Railway 12306 has refused to issue 1.056 million tickets)](https://s.weibo.com/weibo?q=%23%E9%93%81%E8%B7%AF12306%E5%B7%B2%E6%8B%92%E7%BB%9D%E5%87%BA%E7%A5%A8105.6%E4%B8%87%E5%BC%A0%23) `298.5K 🔥` `+125%`
1. [小米徐洁云喊话造谣者](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%BE%90%E6%B4%81%E4%BA%91%E5%96%8A%E8%AF%9D%E9%80%A0%E8%B0%A3%E8%80%85%23) `280.9K 🔥` `+219%`
1. [谢娜上张杰鸟巢演唱会小火车](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E4%B8%8A%E5%BC%A0%E6%9D%B0%E9%B8%9F%E5%B7%A2%E6%BC%94%E5%94%B1%E4%BC%9A%E5%B0%8F%E7%81%AB%E8%BD%A6%23) `241.9K 🔥` `+99%`
1. [曝李小冉退出浪姐 (It is revealed that Li Xiaoran quits Sister Lang)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%8E%E5%B0%8F%E5%86%89%E9%80%80%E5%87%BA%E6%B5%AA%E5%A7%90%23) `223.8K 🔥` `+78%`
1. [特朗普说若达成协议很可能去伊斯兰堡 (Trump says he may go to Islamabad if deal is reached)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E8%8B%A5%E8%BE%BE%E6%88%90%E5%8D%8F%E8%AE%AE%E5%BE%88%E5%8F%AF%E8%83%BD%E5%8E%BB%E4%BC%8A%E6%96%AF%E5%85%B0%E5%A0%A1%23) `192.9K 🔥` `+113%`
1. [张雪机车比赛因红旗中断](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%AF%94%E8%B5%9B%E5%9B%A0%E7%BA%A2%E6%97%97%E4%B8%AD%E6%96%AD%23) `183.6K 🔥` `+56%`
1. [14天骨盆回正 (Pelvis back into alignment in 14 days)](https://s.weibo.com/weibo?q=%2314%E5%A4%A9%E9%AA%A8%E7%9B%86%E5%9B%9E%E6%AD%A3%23) `119.4K 🔥` `+28%`
1. [24岁女研究生赢发呆比赛冠军 (24-year-old female graduate student wins trance competition)](https://s.weibo.com/weibo?q=%2324%E5%B2%81%E5%A5%B3%E7%A0%94%E7%A9%B6%E7%94%9F%E8%B5%A2%E5%8F%91%E5%91%86%E6%AF%94%E8%B5%9B%E5%86%A0%E5%86%9B%23) `113.3K 🔥` `+21%`
1. [虞书欣父亲索赔17w败诉 (Yu Shuxin’s father lost the lawsuit claiming 17w)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%88%B6%E4%BA%B2%E7%B4%A2%E8%B5%9417w%E8%B4%A5%E8%AF%89%23) `320.0K 🔥`
1. [第44届金像奖获奖名单 (List of winners of the 44th Academy Awards)](https://s.weibo.com/weibo?q=%23%E7%AC%AC44%E5%B1%8A%E9%87%91%E5%83%8F%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%23) `276.8K 🔥`
1. [以色列民众要求内塔尼亚胡政府下台 (Israelis demand Netanyahu government to step down)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%B0%91%E4%BC%97%E8%A6%81%E6%B1%82%E5%86%85%E5%A1%94%E5%B0%BC%E4%BA%9A%E8%83%A1%E6%94%BF%E5%BA%9C%E4%B8%8B%E5%8F%B0%23) `101.9K 🔥`
1. [男童被虐待致死凶手看到证据才承认 (The boy was tortured to death and the murderer admitted it only after seeing the evidence)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%AB%A5%E8%A2%AB%E8%99%90%E5%BE%85%E8%87%B4%E6%AD%BB%E5%87%B6%E6%89%8B%E7%9C%8B%E5%88%B0%E8%AF%81%E6%8D%AE%E6%89%8D%E6%89%BF%E8%AE%A4%23) `98.5K 🔥`
1. [张雪机车 (Zhang Xue motorcycle)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%23) `96.4K 🔥`
1. [24岁女子坐6小时赢发呆比赛冠军 (24-year-old woman wins trance competition after sitting for 6 hours)](https://s.weibo.com/weibo?q=%2324%E5%B2%81%E5%A5%B3%E5%AD%90%E5%9D%906%E5%B0%8F%E6%97%B6%E8%B5%A2%E5%8F%91%E5%91%86%E6%AF%94%E8%B5%9B%E5%86%A0%E5%86%9B%23) `88.6K 🔥`
1. [河南三地巨额数据造假25人被问责](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%89%E5%9C%B0%E5%B7%A8%E9%A2%9D%E6%95%B0%E6%8D%AE%E9%80%A0%E5%81%8725%E4%BA%BA%E8%A2%AB%E9%97%AE%E8%B4%A3%23) `85.7K 🔥`
1. [金莎晒结婚五金 (Jinsha sun wedding hardware)](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E6%99%92%E7%BB%93%E5%A9%9A%E4%BA%94%E9%87%91%23) `284.9K 🔥` `-25%`
1. [李雨桐索要财物未果后恶性造谣诽谤 (Li Yutong maliciously spread rumors and slander after asking for property without success)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%A8%E6%A1%90%E7%B4%A2%E8%A6%81%E8%B4%A2%E7%89%A9%E6%9C%AA%E6%9E%9C%E5%90%8E%E6%81%B6%E6%80%A7%E9%80%A0%E8%B0%A3%E8%AF%BD%E8%B0%A4%23) `103.7K 🔥` `-52%`
1. [杨紫三部热播期后加广的剧集](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E4%B8%89%E9%83%A8%E7%83%AD%E6%92%AD%E6%9C%9F%E5%90%8E%E5%8A%A0%E5%B9%BF%E7%9A%84%E5%89%A7%E9%9B%86%23) `91.5K 🔥` `-23%`
1. [侯明昊曾舜晞是一个组合出道的](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E6%9B%BE%E8%88%9C%E6%99%9E%E6%98%AF%E4%B8%80%E4%B8%AA%E7%BB%84%E5%90%88%E5%87%BA%E9%81%93%E7%9A%84%23) `86.4K 🔥` `-51%`

Updated at 2026-04-20 07:48:48

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
