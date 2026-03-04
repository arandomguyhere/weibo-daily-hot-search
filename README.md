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

1. [十四届全国人大四次会议议程 (Agenda for the Fourth Session of the 14th National People's Congress)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E5%9B%9B%E5%B1%8A%E5%85%A8%E5%9B%BD%E4%BA%BA%E5%A4%A7%E5%9B%9B%E6%AC%A1%E4%BC%9A%E8%AE%AE%E8%AE%AE%E7%A8%8B%23) `690.8K 🔥` `NEW`
1. [钟楚曦超绝水光肌](https://s.weibo.com/weibo?q=%23%E9%92%9F%E6%A5%9A%E6%9B%A6%E8%B6%85%E7%BB%9D%E6%B0%B4%E5%85%89%E8%82%8C%23) `346.7K 🔥` `NEW`
1. [促进民营经济发展不能变不会变](https://s.weibo.com/weibo?q=%23%E4%BF%83%E8%BF%9B%E6%B0%91%E8%90%A5%E7%BB%8F%E6%B5%8E%E5%8F%91%E5%B1%95%E4%B8%8D%E8%83%BD%E5%8F%98%E4%B8%8D%E4%BC%9A%E5%8F%98%23) `277.6K 🔥` `NEW`
1. [复工后第一波红包来了](https://s.weibo.com/weibo?q=%23%E5%A4%8D%E5%B7%A5%E5%90%8E%E7%AC%AC%E4%B8%80%E6%B3%A2%E7%BA%A2%E5%8C%85%E6%9D%A5%E4%BA%86%23) `219.9K 🔥` `NEW`
1. [建议对性侵未成年出狱者电子定位](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%AF%B9%E6%80%A7%E4%BE%B5%E6%9C%AA%E6%88%90%E5%B9%B4%E5%87%BA%E7%8B%B1%E8%80%85%E7%94%B5%E5%AD%90%E5%AE%9A%E4%BD%8D%23) `217.7K 🔥` `NEW`
1. [镖人](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `171.1K 🔥` `NEW`
1. [00后去芒果都是大前辈了](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E5%8E%BB%E8%8A%92%E6%9E%9C%E9%83%BD%E6%98%AF%E5%A4%A7%E5%89%8D%E8%BE%88%E4%BA%86%23) `161.0K 🔥` `NEW`
1. [JDG爆冷翻盘BLG](https://s.weibo.com/weibo?q=%23JDG%E7%88%86%E5%86%B7%E7%BF%BB%E7%9B%98BLG%23) `127.4K 🔥` `NEW`
1. [保时捷Taycan](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%97%B6%E6%8D%B7Taycan%23) `108.5K 🔥` `NEW`
1. [建议民政公开送往海外儿童信息](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%B0%91%E6%94%BF%E5%85%AC%E5%BC%80%E9%80%81%E5%BE%80%E6%B5%B7%E5%A4%96%E5%84%BF%E7%AB%A5%E4%BF%A1%E6%81%AF%23) `108.5K 🔥` `NEW`
1. [TTG对战AG (TTG vs. AG)](https://s.weibo.com/weibo?q=%23TTG%E5%AF%B9%E6%88%98AG%23) `108.4K 🔥` `NEW`
1. [建议废除劳务派遣制度 (It is recommended to abolish the labor dispatch system)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%BA%9F%E9%99%A4%E5%8A%B3%E5%8A%A1%E6%B4%BE%E9%81%A3%E5%88%B6%E5%BA%A6%23) `1.2M 🔥` `+267%`
1. [女员工手一抖摔破3000多元飞天茅台](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%91%98%E5%B7%A5%E6%89%8B%E4%B8%80%E6%8A%96%E6%91%94%E7%A0%B43000%E5%A4%9A%E5%85%83%E9%A3%9E%E5%A4%A9%E8%8C%85%E5%8F%B0%23) `551.5K 🔥` `+179%`
1. [纯真年代的爱情大结局](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%9C%9F%E5%B9%B4%E4%BB%A3%E7%9A%84%E7%88%B1%E6%83%85%E5%A4%A7%E7%BB%93%E5%B1%80%23) `349.0K 🔥` `+173%`
1. [伊朗军舰遭袭101人失踪78人伤](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%86%9B%E8%88%B0%E9%81%AD%E8%A2%AD101%E4%BA%BA%E5%A4%B1%E8%B8%AA78%E4%BA%BA%E4%BC%A4%23) `348.0K 🔥` `+54%`
1. [剑来](https://s.weibo.com/weibo?q=%23%E5%89%91%E6%9D%A5%23) `175.1K 🔥` `+23%`
1. [跟刘宇宁来京东38节领五色花 (Follow Liu Yuning to JD.com’s 38th Festival to receive colorful flowers)](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E5%88%98%E5%AE%87%E5%AE%81%E6%9D%A5%E4%BA%AC%E4%B8%9C38%E8%8A%82%E9%A2%86%E4%BA%94%E8%89%B2%E8%8A%B1%23) `682.4K 🔥`
1. [63岁失独妈妈剖腹产生下健康女婴](https://s.weibo.com/weibo?q=%2363%E5%B2%81%E5%A4%B1%E7%8B%AC%E5%A6%88%E5%A6%88%E5%89%96%E8%85%B9%E4%BA%A7%E7%94%9F%E4%B8%8B%E5%81%A5%E5%BA%B7%E5%A5%B3%E5%A9%B4%23) `231.8K 🔥`
1. [网传杨超越十日终焉女主](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%9D%A8%E8%B6%85%E8%B6%8A%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E5%A5%B3%E4%B8%BB%23) `228.4K 🔥`
1. [对方撤回了5条QQ消息](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E6%96%B9%E6%92%A4%E5%9B%9E%E4%BA%865%E6%9D%A1QQ%E6%B6%88%E6%81%AF%23) `225.8K 🔥`
1. [委员建议00后不要进入加班文化](https://s.weibo.com/weibo?q=%23%E5%A7%94%E5%91%98%E5%BB%BA%E8%AE%AE00%E5%90%8E%E4%B8%8D%E8%A6%81%E8%BF%9B%E5%85%A5%E5%8A%A0%E7%8F%AD%E6%96%87%E5%8C%96%23) `206.7K 🔥`
1. [纯真年代的爱情 (Love in the Age of Innocence)](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%9C%9F%E5%B9%B4%E4%BB%A3%E7%9A%84%E7%88%B1%E6%83%85%23) `192.9K 🔥`
1. [伊朗确定最高领袖候选人](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A1%AE%E5%AE%9A%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E5%80%99%E9%80%89%E4%BA%BA%23) `175.0K 🔥`
1. [穆祉丞直播 (Mu Zhicheng live broadcast)](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E7%9B%B4%E6%92%AD%23) `174.5K 🔥`
1. [美国防部公布死亡名单](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E9%98%B2%E9%83%A8%E5%85%AC%E5%B8%83%E6%AD%BB%E4%BA%A1%E5%90%8D%E5%8D%95%23) `174.2K 🔥`
1. [伊朗局势最新情况](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%B1%80%E5%8A%BF%E6%9C%80%E6%96%B0%E6%83%85%E5%86%B5%23) `171.7K 🔥`
1. [钟楚曦给我滴精华了](https://s.weibo.com/weibo?q=%23%E9%92%9F%E6%A5%9A%E6%9B%A6%E7%BB%99%E6%88%91%E6%BB%B4%E7%B2%BE%E5%8D%8E%E4%BA%86%23) `168.4K 🔥`
1. [1克拉钻石价格已经1000多了](https://s.weibo.com/weibo?q=%231%E5%85%8B%E6%8B%89%E9%92%BB%E7%9F%B3%E4%BB%B7%E6%A0%BC%E5%B7%B2%E7%BB%8F1000%E5%A4%9A%E4%BA%86%23) `167.6K 🔥`
1. [伊朗的导弹能用多久](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%9A%84%E5%AF%BC%E5%BC%B9%E8%83%BD%E7%94%A8%E5%A4%9A%E4%B9%85%23) `158.4K 🔥`
1. [专家表示伊朗导弹必须改打法 (Experts say Iran’s missiles must change their approach)](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E8%A1%A8%E7%A4%BA%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E5%BF%85%E9%A1%BB%E6%94%B9%E6%89%93%E6%B3%95%23) `124.1K 🔥`
1. [王楚然大方介绍自己来自中国 (Wang Churan generously introduced that he is from China)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%A4%A7%E6%96%B9%E4%BB%8B%E7%BB%8D%E8%87%AA%E5%B7%B1%E6%9D%A5%E8%87%AA%E4%B8%AD%E5%9B%BD%23) `115.8K 🔥`
1. [每天早上床头少了一只小猫](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%A4%A9%E6%97%A9%E4%B8%8A%E5%BA%8A%E5%A4%B4%E5%B0%91%E4%BA%86%E4%B8%80%E5%8F%AA%E5%B0%8F%E7%8C%AB%23) `108.5K 🔥`
1. [狗子因天生短一截身型独特走红](https://s.weibo.com/weibo?q=%23%E7%8B%97%E5%AD%90%E5%9B%A0%E5%A4%A9%E7%94%9F%E7%9F%AD%E4%B8%80%E6%88%AA%E8%BA%AB%E5%9E%8B%E7%8B%AC%E7%89%B9%E8%B5%B0%E7%BA%A2%23) `108.4K 🔥`
1. [桃黑黑纸嫁衣 (Peach black paper wedding dress)](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E7%BA%B8%E5%AB%81%E8%A1%A3%23) `108.4K 🔥`
1. [两会 (two sessions)](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%BC%9A%23) `108.3K 🔥`
1. [孩子你先出去我肚子里放点榴莲](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E4%BD%A0%E5%85%88%E5%87%BA%E5%8E%BB%E6%88%91%E8%82%9A%E5%AD%90%E9%87%8C%E6%94%BE%E7%82%B9%E6%A6%B4%E8%8E%B2%23) `108.3K 🔥`
1. [建议彩礼金额不超过6万元 (It is recommended that the amount of the betrothal gift should not exceed 60,000 yuan)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%BD%A9%E7%A4%BC%E9%87%91%E9%A2%9D%E4%B8%8D%E8%B6%85%E8%BF%876%E4%B8%87%E5%85%83%23) `108.2K 🔥`
1. [全国政协十四届四次会议开幕 (The Fourth Session of the 14th CPPCC National Committee opens)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E6%94%BF%E5%8D%8F%E5%8D%81%E5%9B%9B%E5%B1%8A%E5%9B%9B%E6%AC%A1%E4%BC%9A%E8%AE%AE%E5%BC%80%E5%B9%95%23) `108.2K 🔥`
1. [花店老板 死手快点绑啊 (Flower shop owner, please tie up your dead hands quickly.)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BA%97%E8%80%81%E6%9D%BF%20%E6%AD%BB%E6%89%8B%E5%BF%AB%E7%82%B9%E7%BB%91%E5%95%8A%23) `108.1K 🔥`
1. [宋平同志逝世 (Comrade Song Ping passed away)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%B9%B3%E5%90%8C%E5%BF%97%E9%80%9D%E4%B8%96%23) `867.2K 🔥` `-35%`
1. [IF椰子水严正声明 (IF coconut water solemn statement)](https://s.weibo.com/weibo?q=%23IF%E6%A4%B0%E5%AD%90%E6%B0%B4%E4%B8%A5%E6%AD%A3%E5%A3%B0%E6%98%8E%23) `336.1K 🔥` `-62%`
1. [委员建议每天下班后投入地玩半小时](https://s.weibo.com/weibo?q=%23%E5%A7%94%E5%91%98%E5%BB%BA%E8%AE%AE%E6%AF%8F%E5%A4%A9%E4%B8%8B%E7%8F%AD%E5%90%8E%E6%8A%95%E5%85%A5%E5%9C%B0%E7%8E%A9%E5%8D%8A%E5%B0%8F%E6%97%B6%23) `252.8K 🔥` `-26%`
1. [热水器不能一开一关 (The water heater cannot be turned on and off at the same time)](https://s.weibo.com/weibo?q=%23%E7%83%AD%E6%B0%B4%E5%99%A8%E4%B8%8D%E8%83%BD%E4%B8%80%E5%BC%80%E4%B8%80%E5%85%B3%23) `237.5K 🔥` `-22%`
1. [中东局势彻底失控 (The situation in the Middle East is completely out of control)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%B8%9C%E5%B1%80%E5%8A%BF%E5%BD%BB%E5%BA%95%E5%A4%B1%E6%8E%A7%23) `234.9K 🔥` `-26%`
1. [开放的中国现代化的中国 (Open China Modern China)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E6%94%BE%E7%9A%84%E4%B8%AD%E5%9B%BD%E7%8E%B0%E4%BB%A3%E5%8C%96%E7%9A%84%E4%B8%AD%E5%9B%BD%23) `218.3K 🔥` `-68%`
1. [王励勤回应樊振东归队问题 (Wang Liqin responded to Fan Zhendong’s return to the team)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%B1%E5%8B%A4%E5%9B%9E%E5%BA%94%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%BD%92%E9%98%9F%E9%97%AE%E9%A2%98%23) `173.5K 🔥` `-23%`
1. [2025年立法工作取得新进展](https://s.weibo.com/weibo?q=%232025%E5%B9%B4%E7%AB%8B%E6%B3%95%E5%B7%A5%E4%BD%9C%E5%8F%96%E5%BE%97%E6%96%B0%E8%BF%9B%E5%B1%95%23) `167.7K 🔥` `-45%`
1. [牛奶再放个把月就能喝了](https://s.weibo.com/weibo?q=%23%E7%89%9B%E5%A5%B6%E5%86%8D%E6%94%BE%E4%B8%AA%E6%8A%8A%E6%9C%88%E5%B0%B1%E8%83%BD%E5%96%9D%E4%BA%86%23) `137.8K 🔥` `-33%`
1. [太爷爷摔倒1岁宝宝连滚带爬去扶](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E7%88%B7%E7%88%B7%E6%91%94%E5%80%921%E5%B2%81%E5%AE%9D%E5%AE%9D%E8%BF%9E%E6%BB%9A%E5%B8%A6%E7%88%AC%E5%8E%BB%E6%89%B6%23) `133.8K 🔥` `-26%`
1. [建议居民身份证去地址化 (It is recommended that resident ID cards be de-addressed)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%B1%85%E6%B0%91%E8%BA%AB%E4%BB%BD%E8%AF%81%E5%8E%BB%E5%9C%B0%E5%9D%80%E5%8C%96%23) `108.6K 🔥` `-51%`
1. [建议推广农村不超过2万彩礼](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%8E%A8%E5%B9%BF%E5%86%9C%E6%9D%91%E4%B8%8D%E8%B6%85%E8%BF%872%E4%B8%87%E5%BD%A9%E7%A4%BC%23) `108.6K 🔥` `-27%`
1. [弟弟 不管你是谁从我姐身上下来](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%20%E4%B8%8D%E7%AE%A1%E4%BD%A0%E6%98%AF%E8%B0%81%E4%BB%8E%E6%88%91%E5%A7%90%E8%BA%AB%E4%B8%8A%E4%B8%8B%E6%9D%A5%23) `108.2K 🔥` `-50%`

Updated at 2026-03-04 20:24:59

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
