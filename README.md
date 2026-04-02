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

1. [三部门约谈抖音淘天小红书 (Three departments interviewed Douyin, Taotian and Xiaohongshu)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E9%83%A8%E9%97%A8%E7%BA%A6%E8%B0%88%E6%8A%96%E9%9F%B3%E6%B7%98%E5%A4%A9%E5%B0%8F%E7%BA%A2%E4%B9%A6%23) `1.1M 🔥` `NEW`
1. [迪丽热巴 古偶](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%20%E5%8F%A4%E5%81%B6%23) `486.3K 🔥` `NEW`
1. [王曼昱挑战TTR失败](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E6%8C%91%E6%88%98TTR%E5%A4%B1%E8%B4%A5%23) `227.3K 🔥` `NEW`
1. [刘嘉玲 医美](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%98%89%E7%8E%B2%20%E5%8C%BB%E7%BE%8E%23) `211.2K 🔥` `NEW`
1. [珠海一大厦有人名下163套房](https://s.weibo.com/weibo?q=%23%E7%8F%A0%E6%B5%B7%E4%B8%80%E5%A4%A7%E5%8E%A6%E6%9C%89%E4%BA%BA%E5%90%8D%E4%B8%8B163%E5%A5%97%E6%88%BF%23) `208.5K 🔥` `NEW`
1. [女生就读殡葬专业就业前景光明](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E5%B0%B1%E8%AF%BB%E6%AE%A1%E8%91%AC%E4%B8%93%E4%B8%9A%E5%B0%B1%E4%B8%9A%E5%89%8D%E6%99%AF%E5%85%89%E6%98%8E%23) `208.1K 🔥` `NEW`
1. [10分钟10枚弹道导弹砸向以色列](https://s.weibo.com/weibo?q=%2310%E5%88%86%E9%92%9F10%E6%9E%9A%E5%BC%B9%E9%81%93%E5%AF%BC%E5%BC%B9%E7%A0%B8%E5%90%91%E4%BB%A5%E8%89%B2%E5%88%97%23) `207.4K 🔥` `NEW`
1. [美国载人绕月首日任务修厕所](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E8%BD%BD%E4%BA%BA%E7%BB%95%E6%9C%88%E9%A6%96%E6%97%A5%E4%BB%BB%E5%8A%A1%E4%BF%AE%E5%8E%95%E6%89%80%23) `207.0K 🔥` `NEW`
1. [王传君齐溪带孩子出游](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E9%BD%90%E6%BA%AA%E5%B8%A6%E5%AD%A9%E5%AD%90%E5%87%BA%E6%B8%B8%23) `206.5K 🔥` `NEW`
1. [张元英下巴](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E4%B8%8B%E5%B7%B4%23) `184.7K 🔥` `NEW`
1. [2026款小鹏MONA大大大大大升级 (The 2026 Xpeng MONA is greatly upgraded)](https://s.weibo.com/weibo?q=%232026%E6%AC%BE%E5%B0%8F%E9%B9%8FMONA%E5%A4%A7%E5%A4%A7%E5%A4%A7%E5%A4%A7%E5%A4%A7%E5%8D%87%E7%BA%A7%23) `162.1K 🔥` `NEW`
1. [女子赠侄子旧手机致出轨照外泄](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%B5%A0%E4%BE%84%E5%AD%90%E6%97%A7%E6%89%8B%E6%9C%BA%E8%87%B4%E5%87%BA%E8%BD%A8%E7%85%A7%E5%A4%96%E6%B3%84%23) `145.5K 🔥` `NEW`
1. [魏晨 老辈子就是会疼人](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E6%99%A8%20%E8%80%81%E8%BE%88%E5%AD%90%E5%B0%B1%E6%98%AF%E4%BC%9A%E7%96%BC%E4%BA%BA%23) `129.2K 🔥` `NEW`
1. [夏克立回应再婚生女](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E5%85%8B%E7%AB%8B%E5%9B%9E%E5%BA%94%E5%86%8D%E5%A9%9A%E7%94%9F%E5%A5%B3%23) `127.4K 🔥` `NEW`
1. [孙颖莎蒯曼都更换球衣](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%92%AF%E6%9B%BC%E9%83%BD%E6%9B%B4%E6%8D%A2%E7%90%83%E8%A1%A3%23) `119.0K 🔥` `NEW`
1. [董宇辉评论区被追问优思益售后方案](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%AE%87%E8%BE%89%E8%AF%84%E8%AE%BA%E5%8C%BA%E8%A2%AB%E8%BF%BD%E9%97%AE%E4%BC%98%E6%80%9D%E7%9B%8A%E5%94%AE%E5%90%8E%E6%96%B9%E6%A1%88%23) `109.4K 🔥` `NEW`
1. [还以为许光汉没穿](https://s.weibo.com/weibo?q=%23%E8%BF%98%E4%BB%A5%E4%B8%BA%E8%AE%B8%E5%85%89%E6%B1%89%E6%B2%A1%E7%A9%BF%23) `106.9K 🔥` `NEW`
1. [男子让8岁儿子开车还发视频炫耀](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%AE%A98%E5%B2%81%E5%84%BF%E5%AD%90%E5%BC%80%E8%BD%A6%E8%BF%98%E5%8F%91%E8%A7%86%E9%A2%91%E7%82%AB%E8%80%80%23) `106.6K 🔥` `NEW`
1. [入殓师谈全新太空骨灰计划](https://s.weibo.com/weibo?q=%23%E5%85%A5%E6%AE%93%E5%B8%88%E8%B0%88%E5%85%A8%E6%96%B0%E5%A4%AA%E7%A9%BA%E9%AA%A8%E7%81%B0%E8%AE%A1%E5%88%92%23) `106.6K 🔥` `NEW`
1. [刘亦菲几乎没有法令纹](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%87%A0%E4%B9%8E%E6%B2%A1%E6%9C%89%E6%B3%95%E4%BB%A4%E7%BA%B9%23) `106.5K 🔥` `NEW`
1. [孙颖莎蒯曼3局打到爆分 (Sun Yingsha and Kuaiman scored explosive points in 3 games)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%92%AF%E6%9B%BC3%E5%B1%80%E6%89%93%E5%88%B0%E7%88%86%E5%88%86%23) `106.0K 🔥` `NEW`
1. [汪苏泷胜诉](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E8%83%9C%E8%AF%89%23) `89.9K 🔥` `NEW`
1. [特斯拉小米](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E5%B0%8F%E7%B1%B3%23) `89.5K 🔥` `NEW`
1. [谢娜控场能力](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%8E%A7%E5%9C%BA%E8%83%BD%E5%8A%9B%23) `89.0K 🔥` `NEW`
1. [优思益 (Yousiyi)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%23) `803.2K 🔥` `+146%`
1. [弟弟悄办父亲丧事墓碑漏刻姐姐名字](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%E6%82%84%E5%8A%9E%E7%88%B6%E4%BA%B2%E4%B8%A7%E4%BA%8B%E5%A2%93%E7%A2%91%E6%BC%8F%E5%88%BB%E5%A7%90%E5%A7%90%E5%90%8D%E5%AD%97%23) `570.8K 🔥` `+611%`
1. [乘风初见面直播](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E%E5%88%9D%E8%A7%81%E9%9D%A2%E7%9B%B4%E6%92%AD%23) `459.2K 🔥` `+42%`
1. [iPhone18Pro模具偷跑](https://s.weibo.com/weibo?q=%23iPhone18Pro%E6%A8%A1%E5%85%B7%E5%81%B7%E8%B7%91%23) `212.1K 🔥` `+31%`
1. [老式水果为什么消失了](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%BC%8F%E6%B0%B4%E6%9E%9C%E4%B8%BA%E4%BB%80%E4%B9%88%E6%B6%88%E5%A4%B1%E4%BA%86%23) `128.9K 🔥` `+23%`
1. [王安宇 宽肩窄腰](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%20%E5%AE%BD%E8%82%A9%E7%AA%84%E8%85%B0%23) `108.6K 🔥` `+42%`
1. [又是赏花好时节 (It’s a good time to enjoy flowers again)](https://s.weibo.com/weibo?q=%23%E5%8F%88%E6%98%AF%E8%B5%8F%E8%8A%B1%E5%A5%BD%E6%97%B6%E8%8A%82%23) `643.8K 🔥`
1. [你好1983结局](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD1983%E7%BB%93%E5%B1%80%23) `225.5K 🔥`
1. [李荣浩方否认恋人抄袭 (Li Ronghao denies plagiarism by his lover)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%E6%96%B9%E5%90%A6%E8%AE%A4%E6%81%8B%E4%BA%BA%E6%8A%84%E8%A2%AD%23) `210.4K 🔥`
1. [泰国女星近乎昏迷时遭救护员性侵 (Thai actress was sexually assaulted by paramedic while she was nearly comatose)](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E5%A5%B3%E6%98%9F%E8%BF%91%E4%B9%8E%E6%98%8F%E8%BF%B7%E6%97%B6%E9%81%AD%E6%95%91%E6%8A%A4%E5%91%98%E6%80%A7%E4%BE%B5%23) `210.0K 🔥`
1. [离职守恒定律 (Conservation law of turnover)](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E8%81%8C%E5%AE%88%E6%81%92%E5%AE%9A%E5%BE%8B%23) `209.2K 🔥`
1. [张杰回应张凌赫送花篮](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E5%9B%9E%E5%BA%94%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%80%81%E8%8A%B1%E7%AF%AE%23) `170.5K 🔥`
1. [林依晨43岁状态](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BE%9D%E6%99%A843%E5%B2%81%E7%8A%B6%E6%80%81%23) `167.4K 🔥`
1. [古巨基二胎儿子正面照公开 (Frontal photos of Leo Ku's second child released)](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E5%B7%A8%E5%9F%BA%E4%BA%8C%E8%83%8E%E5%84%BF%E5%AD%90%E6%AD%A3%E9%9D%A2%E7%85%A7%E5%85%AC%E5%BC%80%23) `136.2K 🔥`
1. [白日提灯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `89.3K 🔥`
1. [孙颖莎vs蒯曼](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Evs%E8%92%AF%E6%9B%BC%23) `222.8K 🔥` `-72%`
1. [已吃两瓶优思益消费者发声 (Consumers who have eaten two bottles of Usiyi speak out)](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E5%90%83%E4%B8%A4%E7%93%B6%E4%BC%98%E6%80%9D%E7%9B%8A%E6%B6%88%E8%B4%B9%E8%80%85%E5%8F%91%E5%A3%B0%23) `212.3K 🔥` `-46%`
1. [印度65岁大象死亡生前被涂粉色颜料](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A665%E5%B2%81%E5%A4%A7%E8%B1%A1%E6%AD%BB%E4%BA%A1%E7%94%9F%E5%89%8D%E8%A2%AB%E6%B6%82%E7%B2%89%E8%89%B2%E9%A2%9C%E6%96%99%23) `210.7K 🔥` `-81%`
1. [被时代淘汰的水果 (Fruits that have been eliminated by the times)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%97%B6%E4%BB%A3%E6%B7%98%E6%B1%B0%E7%9A%84%E6%B0%B4%E6%9E%9C%23) `206.2K 🔥` `-24%`
1. [女子104000元买80g金条店员报警 (Woman bought 80g gold bar for 104,000 yuan and store clerk called the police)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90104000%E5%85%83%E4%B9%B080g%E9%87%91%E6%9D%A1%E5%BA%97%E5%91%98%E6%8A%A5%E8%AD%A6%23) `184.5K 🔥` `-42%`
1. [乘风2026](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%23) `123.3K 🔥` `-45%`
1. [三年后狗近视得找不到饭盆 (Three years later, the dog was so short-sighted that he couldn’t find his food bowl.)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%B9%B4%E5%90%8E%E7%8B%97%E8%BF%91%E8%A7%86%E5%BE%97%E6%89%BE%E4%B8%8D%E5%88%B0%E9%A5%AD%E7%9B%86%23) `111.0K 🔥` `-38%`
1. [男子趁妻子去厕所上台相亲 (Man went on a blind date while his wife was in the toilet)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%B6%81%E5%A6%BB%E5%AD%90%E5%8E%BB%E5%8E%95%E6%89%80%E4%B8%8A%E5%8F%B0%E7%9B%B8%E4%BA%B2%23) `106.5K 🔥` `-37%`
1. [高圆圆赵又廷女儿长这么大了](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%9C%86%E5%9C%86%E8%B5%B5%E5%8F%88%E5%BB%B7%E5%A5%B3%E5%84%BF%E9%95%BF%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `100.9K 🔥` `-29%`
1. [以色列遭到开战以来最大规模导弹袭击](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E9%81%AD%E5%88%B0%E5%BC%80%E6%88%98%E4%BB%A5%E6%9D%A5%E6%9C%80%E5%A4%A7%E8%A7%84%E6%A8%A1%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%87%BB%23) `95.0K 🔥` `-57%`
1. [乘风2026立意片来了](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E7%AB%8B%E6%84%8F%E7%89%87%E6%9D%A5%E4%BA%86%23) `89.7K 🔥` `-59%`

Updated at 2026-04-02 20:10:19

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
