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

1. [官方辟谣煤气罐爆炸窗户砸穿车顶 (Officials refute rumors that gas tank exploded, windows smashed through car roof)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E8%BE%9F%E8%B0%A3%E7%85%A4%E6%B0%94%E7%BD%90%E7%88%86%E7%82%B8%E7%AA%97%E6%88%B7%E7%A0%B8%E7%A9%BF%E8%BD%A6%E9%A1%B6%23) `322.2K 🔥` `NEW`
1. [英格兰0比0加纳](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B00%E6%AF%940%E5%8A%A0%E7%BA%B3%23) `308.7K 🔥` `NEW`
1. [5岁女孩每天抱小兔子致永久性脱发](https://s.weibo.com/weibo?q=%235%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%AF%8F%E5%A4%A9%E6%8A%B1%E5%B0%8F%E5%85%94%E5%AD%90%E8%87%B4%E6%B0%B8%E4%B9%85%E6%80%A7%E8%84%B1%E5%8F%91%23) `119.4K 🔥` `NEW`
1. [黄多多能不能马上进组](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A%E8%83%BD%E4%B8%8D%E8%83%BD%E9%A9%AC%E4%B8%8A%E8%BF%9B%E7%BB%84%23) `118.8K 🔥` `NEW`
1. [C罗说我回来了](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E8%AF%B4%E6%88%91%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `116.5K 🔥` `NEW`
1. [张婧仪工伤让陈哲远红温了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%B7%A5%E4%BC%A4%E8%AE%A9%E9%99%88%E5%93%B2%E8%BF%9C%E7%BA%A2%E6%B8%A9%E4%BA%86%23) `86.8K 🔥` `NEW`
1. [医生会被AI轻易取代吗](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E4%BC%9A%E8%A2%ABAI%E8%BD%BB%E6%98%93%E5%8F%96%E4%BB%A3%E5%90%97%23) `86.4K 🔥` `NEW`
1. [近期港星为何集体复出](https://s.weibo.com/weibo?q=%23%E8%BF%91%E6%9C%9F%E6%B8%AF%E6%98%9F%E4%B8%BA%E4%BD%95%E9%9B%86%E4%BD%93%E5%A4%8D%E5%87%BA%23) `75.5K 🔥` `NEW`
1. [看台强吻夏奇拉的是她儿子](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%8F%B0%E5%BC%BA%E5%90%BB%E5%A4%8F%E5%A5%87%E6%8B%89%E7%9A%84%E6%98%AF%E5%A5%B9%E5%84%BF%E5%AD%90%23) `69.2K 🔥` `NEW`
1. [微信AI可以定制小工具](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1AI%E5%8F%AF%E4%BB%A5%E5%AE%9A%E5%88%B6%E5%B0%8F%E5%B7%A5%E5%85%B7%23) `69.2K 🔥` `NEW`
1. [许嵩新歌是一首老歌 (Xu Song’s new song is an old song)](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%B5%A9%E6%96%B0%E6%AD%8C%E6%98%AF%E4%B8%80%E9%A6%96%E8%80%81%E6%AD%8C%23) `69.2K 🔥` `NEW`
1. [C罗成为葡萄牙世界杯射手王](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%88%90%E4%B8%BA%E8%91%A1%E8%90%84%E7%89%99%E4%B8%96%E7%95%8C%E6%9D%AF%E5%B0%84%E6%89%8B%E7%8E%8B%23) `6.2M 🔥` `+605%`
1. [葡萄牙5比0乌兹别克斯坦 (Portugal 5-0 Uzbekistan)](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%995%E6%AF%940%E4%B9%8C%E5%85%B9%E5%88%AB%E5%85%8B%E6%96%AF%E5%9D%A6%23) `1.9M 🔥` `+237%`
1. [高考志愿填报遵循9个字](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%BF%97%E6%84%BF%E5%A1%AB%E6%8A%A5%E9%81%B5%E5%BE%AA9%E4%B8%AA%E5%AD%97%23) `1.1M 🔥` `+55%`
1. [你要知道我很少站老一辈这边的](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E8%A6%81%E7%9F%A5%E9%81%93%E6%88%91%E5%BE%88%E5%B0%91%E7%AB%99%E8%80%81%E4%B8%80%E8%BE%88%E8%BF%99%E8%BE%B9%E7%9A%84%23) `627.7K 🔥` `+278%`
1. [C罗梅开二度 (Cristiano Ronaldo scores twice)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%A2%85%E5%BC%80%E4%BA%8C%E5%BA%A6%23) `576.2K 🔥` `+160%`
1. [英格兰vs加纳](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0vs%E5%8A%A0%E7%BA%B3%23) `325.6K 🔥` `+73%`
1. [15岁男孩吃外卖熬夜患糖尿病去世](https://s.weibo.com/weibo?q=%2315%E5%B2%81%E7%94%B7%E5%AD%A9%E5%90%83%E5%A4%96%E5%8D%96%E7%86%AC%E5%A4%9C%E6%82%A3%E7%B3%96%E5%B0%BF%E7%97%85%E5%8E%BB%E4%B8%96%23) `183.2K 🔥` `+409%`
1. [檀健次直播迟到39分钟 (Tan Jianci was 39 minutes late for the live broadcast)](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E7%9B%B4%E6%92%AD%E8%BF%9F%E5%88%B039%E5%88%86%E9%92%9F%23) `120.2K 🔥` `+255%`
1. [杨幂杨紫白玉兰提名VCR](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%9D%A8%E7%B4%AB%E7%99%BD%E7%8E%89%E5%85%B0%E6%8F%90%E5%90%8DVCR%23) `120.1K 🔥` `+255%`
1. [贝克汉姆儿子靠与父母不和赚百万美金](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%85%8B%E6%B1%89%E5%A7%86%E5%84%BF%E5%AD%90%E9%9D%A0%E4%B8%8E%E7%88%B6%E6%AF%8D%E4%B8%8D%E5%92%8C%E8%B5%9A%E7%99%BE%E4%B8%87%E7%BE%8E%E9%87%91%23) `120.0K 🔥` `+208%`
1. [广德车祸受伤3岁男童最新情况 (The latest situation of a 3-year-old boy injured in a car accident in Guangde)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%BE%B7%E8%BD%A6%E7%A5%B8%E5%8F%97%E4%BC%A43%E5%B2%81%E7%94%B7%E7%AB%A5%E6%9C%80%E6%96%B0%E6%83%85%E5%86%B5%23) `119.1K 🔥` `+252%`
1. [大疆Pocket4P开售秒没](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%96%86Pocket4P%E5%BC%80%E5%94%AE%E7%A7%92%E6%B2%A1%23) `118.5K 🔥` `+229%`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `118.3K 🔥` `+153%`
1. [南部档案 三个结局 (Southern Files three endings)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88%20%E4%B8%89%E4%B8%AA%E7%BB%93%E5%B1%80%23) `117.9K 🔥` `+291%`
1. [C罗siu起来了](https://s.weibo.com/weibo?q=%23C%E7%BD%97siu%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `117.8K 🔥` `+76%`
1. [王俊凯首张专辑封面](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E9%A6%96%E5%BC%A0%E4%B8%93%E8%BE%91%E5%B0%81%E9%9D%A2%23) `117.6K 🔥` `+186%`
1. [C罗进球](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E8%BF%9B%E7%90%83%23) `117.5K 🔥` `+165%`
1. [葡萄牙vs乌兹别克斯坦](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99vs%E4%B9%8C%E5%85%B9%E5%88%AB%E5%85%8B%E6%96%AF%E5%9D%A6%23) `108.0K 🔥` `+128%`
1. [这段话彻底杀死了我的精神内耗 (This passage completely destroyed my spirit.)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%AE%B5%E8%AF%9D%E5%BD%BB%E5%BA%95%E6%9D%80%E6%AD%BB%E4%BA%86%E6%88%91%E7%9A%84%E7%B2%BE%E7%A5%9E%E5%86%85%E8%80%97%23) `107.8K 🔥` `+199%`
1. [SpaceX暴跌16.43%](https://s.weibo.com/weibo?q=%23SpaceX%E6%9A%B4%E8%B7%8C16.43%25%23) `87.4K 🔥` `+143%`
1. [印度一天或热死3400人](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E4%B8%80%E5%A4%A9%E6%88%96%E7%83%AD%E6%AD%BB3400%E4%BA%BA%23) `86.1K 🔥` `+154%`
1. [内马尔美加墨世界杯首秀](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E7%BE%8E%E5%8A%A0%E5%A2%A8%E4%B8%96%E7%95%8C%E6%9D%AF%E9%A6%96%E7%A7%80%23) `85.4K 🔥` `+147%`
1. [医生回应15岁男孩糖尿病不幸去世](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%9415%E5%B2%81%E7%94%B7%E5%AD%A9%E7%B3%96%E5%B0%BF%E7%97%85%E4%B8%8D%E5%B9%B8%E5%8E%BB%E4%B8%96%23) `85.1K 🔥` `+85%`
1. [官方回应强制教师凌晨到校验菜](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E5%BC%BA%E5%88%B6%E6%95%99%E5%B8%88%E5%87%8C%E6%99%A8%E5%88%B0%E6%A0%A1%E9%AA%8C%E8%8F%9C%23) `83.7K 🔥` `+147%`
1. [张靓颖清唱被罚款冤不冤 (Zhang Liangying was fined for singing a cappella. Is it unfair?)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9D%93%E9%A2%96%E6%B8%85%E5%94%B1%E8%A2%AB%E7%BD%9A%E6%AC%BE%E5%86%A4%E4%B8%8D%E5%86%A4%23) `83.2K 🔥` `+146%`
1. [女装退货率终于有救了 (The return rate of women’s clothing has finally been saved)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E8%A3%85%E9%80%80%E8%B4%A7%E7%8E%87%E7%BB%88%E4%BA%8E%E6%9C%89%E6%95%91%E4%BA%86%23) `82.9K 🔥` `+130%`
1. [姆巴佩哈兰德将正面对决](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%93%88%E5%85%B0%E5%BE%B7%E5%B0%86%E6%AD%A3%E9%9D%A2%E5%AF%B9%E5%86%B3%23) `79.6K 🔥` `+120%`
1. [广德致1死2伤司机或3年以下刑期 (The driver who caused 1 death and 2 injuries in Guangde may be sentenced to less than 3 years in prison)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%BE%B7%E8%87%B41%E6%AD%BB2%E4%BC%A4%E5%8F%B8%E6%9C%BA%E6%88%963%E5%B9%B4%E4%BB%A5%E4%B8%8B%E5%88%91%E6%9C%9F%23) `79.0K 🔥` `+119%`
1. [突然意识到美术生好牛](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E7%BE%8E%E6%9C%AF%E7%94%9F%E5%A5%BD%E7%89%9B%23) `69.2K 🔥` `+59%`
1. [在图书馆被紫外消毒灯照了12个小时](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%9B%BE%E4%B9%A6%E9%A6%86%E8%A2%AB%E7%B4%AB%E5%A4%96%E6%B6%88%E6%AF%92%E7%81%AF%E7%85%A7%E4%BA%8612%E4%B8%AA%E5%B0%8F%E6%97%B6%23) `69.2K 🔥` `+104%`
1. [电梯急坠按下所有楼层按钮不科学](https://s.weibo.com/weibo?q=%23%E7%94%B5%E6%A2%AF%E6%80%A5%E5%9D%A0%E6%8C%89%E4%B8%8B%E6%89%80%E6%9C%89%E6%A5%BC%E5%B1%82%E6%8C%89%E9%92%AE%E4%B8%8D%E7%A7%91%E5%AD%A6%23) `69.2K 🔥` `+98%`
1. [均值回归](https://s.weibo.com/weibo?q=%23%E5%9D%87%E5%80%BC%E5%9B%9E%E5%BD%92%23) `69.2K 🔥` `+104%`
1. [刘国梁女儿惊讶爸爸曾经这么帅](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%9B%BD%E6%A2%81%E5%A5%B3%E5%84%BF%E6%83%8A%E8%AE%B6%E7%88%B8%E7%88%B8%E6%9B%BE%E7%BB%8F%E8%BF%99%E4%B9%88%E5%B8%85%23) `69.2K 🔥` `+46%`
1. [慈母多败咪](https://s.weibo.com/weibo?q=%23%E6%85%88%E6%AF%8D%E5%A4%9A%E8%B4%A5%E5%92%AA%23) `69.2K 🔥` `+92%`
1. [马宁第3次执法来了 (Ma Ning comes to enforce the law for the third time)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%81%E7%AC%AC3%E6%AC%A1%E6%89%A7%E6%B3%95%E6%9D%A5%E4%BA%86%23) `69.2K 🔥` `+87%`
1. [C罗母亲无声抗议](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%AF%8D%E4%BA%B2%E6%97%A0%E5%A3%B0%E6%8A%97%E8%AE%AE%23) `69.2K 🔥` `+104%`
1. [张海楼怎么可能杀张海侠 (How could Zhang Hailou kill Zhang Haixia?)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%B5%B7%E6%A5%BC%E6%80%8E%E4%B9%88%E5%8F%AF%E8%83%BD%E6%9D%80%E5%BC%A0%E6%B5%B7%E4%BE%A0%23) `69.2K 🔥` `+104%`
1. [C罗骗过全世界 (Cristiano Ronaldo deceived the whole world)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E9%AA%97%E8%BF%87%E5%85%A8%E4%B8%96%E7%95%8C%23) `119.8K 🔥` `-87%`
1. [李金铭回应 (Li Jinming responded)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%87%91%E9%93%AD%E5%9B%9E%E5%BA%94%23) `119.2K 🔥` `-43%`
1. [王伊瑶透露赵丽颖近况 (Wang Yiyao reveals Zhao Liying’s current situation)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%8A%E7%91%B6%E9%80%8F%E9%9C%B2%E8%B5%B5%E4%B8%BD%E9%A2%96%E8%BF%91%E5%86%B5%23) `118.7K 🔥` `-46%`

Updated at 2026-06-24 07:18:00

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
