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

1. [卫健委辟谣吃动物肾脏能补肾 (The National Health Commission refutes rumors that eating animal kidneys can nourish the kidneys)](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E5%81%A5%E5%A7%94%E8%BE%9F%E8%B0%A3%E5%90%83%E5%8A%A8%E7%89%A9%E8%82%BE%E8%84%8F%E8%83%BD%E8%A1%A5%E8%82%BE%23) `375.8K 🔥` `NEW`
1. [樊振东迟到的年夜饭](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%BF%9F%E5%88%B0%E7%9A%84%E5%B9%B4%E5%A4%9C%E9%A5%AD%23) `168.7K 🔥` `NEW`
1. [飞驰人生](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F%23) `115.7K 🔥` `NEW`
1. [尹锡悦听宣判后叹气面色凝重](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E9%94%A1%E6%82%A6%E5%90%AC%E5%AE%A3%E5%88%A4%E5%90%8E%E5%8F%B9%E6%B0%94%E9%9D%A2%E8%89%B2%E5%87%9D%E9%87%8D%23) `109.3K 🔥` `NEW`
1. [双轨还有售后](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E8%BD%A8%E8%BF%98%E6%9C%89%E5%94%AE%E5%90%8E%23) `108.9K 🔥` `NEW`
1. [王嘉尔纠正阿玛尼官方](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E7%BA%A0%E6%AD%A3%E9%98%BF%E7%8E%9B%E5%B0%BC%E5%AE%98%E6%96%B9%23) `108.9K 🔥` `NEW`
1. [阿沁自曝和刘阳分开后谈过两段感情](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%B2%81%E8%87%AA%E6%9B%9D%E5%92%8C%E5%88%98%E9%98%B3%E5%88%86%E5%BC%80%E5%90%8E%E8%B0%88%E8%BF%87%E4%B8%A4%E6%AE%B5%E6%84%9F%E6%83%85%23) `108.9K 🔥` `NEW`
1. [秦新宇回应有儿子](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E6%96%B0%E5%AE%87%E5%9B%9E%E5%BA%94%E6%9C%89%E5%84%BF%E5%AD%90%23) `108.9K 🔥` `NEW`
1. [爸爸除夕独自吃饺子女儿看监控哭了](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E9%99%A4%E5%A4%95%E7%8B%AC%E8%87%AA%E5%90%83%E9%A5%BA%E5%AD%90%E5%A5%B3%E5%84%BF%E7%9C%8B%E7%9B%91%E6%8E%A7%E5%93%AD%E4%BA%86%23) `108.9K 🔥` `NEW`
1. [刘烨妻子晒女儿骑马照](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%83%A8%E5%A6%BB%E5%AD%90%E6%99%92%E5%A5%B3%E5%84%BF%E9%AA%91%E9%A9%AC%E7%85%A7%23) `108.8K 🔥` `NEW`
1. [鲍鱼壳 除蟑螂 (Abalone shell to remove cockroaches)](https://s.weibo.com/weibo?q=%23%E9%B2%8D%E9%B1%BC%E5%A3%B3%20%E9%99%A4%E8%9F%91%E8%9E%82%23) `104.1K 🔥` `NEW`
1. [岳云鹏曾找郭德纲告状孙越](https://s.weibo.com/weibo?q=%23%E5%B2%B3%E4%BA%91%E9%B9%8F%E6%9B%BE%E6%89%BE%E9%83%AD%E5%BE%B7%E7%BA%B2%E5%91%8A%E7%8A%B6%E5%AD%99%E8%B6%8A%23) `77.0K 🔥` `NEW`
1. [园方回应幼儿园现烧脑春联](https://s.weibo.com/weibo?q=%23%E5%9B%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E5%B9%BC%E5%84%BF%E5%9B%AD%E7%8E%B0%E7%83%A7%E8%84%91%E6%98%A5%E8%81%94%23) `73.8K 🔥` `NEW`
1. [小猫咪能有什么坏心思](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E5%92%AA%E8%83%BD%E6%9C%89%E4%BB%80%E4%B9%88%E5%9D%8F%E5%BF%83%E6%80%9D%23) `73.3K 🔥` `NEW`
1. [伊朗](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%23) `73.2K 🔥` `NEW`
1. [西班牙男子篡改系统1分钱住酒店](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E7%94%B7%E5%AD%90%E7%AF%A1%E6%94%B9%E7%B3%BB%E7%BB%9F1%E5%88%86%E9%92%B1%E4%BD%8F%E9%85%92%E5%BA%97%23) `72.6K 🔥` `NEW`
1. [孟子义这该死的甜美](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E8%BF%99%E8%AF%A5%E6%AD%BB%E7%9A%84%E7%94%9C%E7%BE%8E%23) `69.8K 🔥` `NEW`
1. [女子过年散步路边水沟捞出800元](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%BF%87%E5%B9%B4%E6%95%A3%E6%AD%A5%E8%B7%AF%E8%BE%B9%E6%B0%B4%E6%B2%9F%E6%8D%9E%E5%87%BA800%E5%85%83%23) `67.7K 🔥` `NEW`
1. [过年 二手烟](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%B9%B4%20%E4%BA%8C%E6%89%8B%E7%83%9F%23) `67.3K 🔥` `NEW`
1. [美国首都因污水泄漏进入紧急状态](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E9%A6%96%E9%83%BD%E5%9B%A0%E6%B1%A1%E6%B0%B4%E6%B3%84%E6%BC%8F%E8%BF%9B%E5%85%A5%E7%B4%A7%E6%80%A5%E7%8A%B6%E6%80%81%23) `67.2K 🔥` `NEW`
1. [左奇函外拍 (Zuo Qihan's outdoor shooting)](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E5%A5%87%E5%87%BD%E5%A4%96%E6%8B%8D%23) `67.2K 🔥` `NEW`
1. [Doinb转型DOTA2选手](https://s.weibo.com/weibo?q=%23Doinb%E8%BD%AC%E5%9E%8BDOTA2%E9%80%89%E6%89%8B%23) `66.4K 🔥` `NEW`
1. [苏翊鸣 为了露表手忙脚乱](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%20%E4%B8%BA%E4%BA%86%E9%9C%B2%E8%A1%A8%E6%89%8B%E5%BF%99%E8%84%9A%E4%B9%B1%23) `1.1M 🔥` `+28%`
1. [疯狂星期四调休](https://s.weibo.com/weibo?q=%23%E7%96%AF%E7%8B%82%E6%98%9F%E6%9C%9F%E5%9B%9B%E8%B0%83%E4%BC%91%23) `769.3K 🔥` `+107%`
1. [易烊千玺弟弟13岁近照](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%BC%9F%E5%BC%9F13%E5%B2%81%E8%BF%91%E7%85%A7%23) `579.6K 🔥` `+366%`
1. [旺旺雪饼vs仙贝](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%E9%9B%AA%E9%A5%BCvs%E4%BB%99%E8%B4%9D%23) `397.7K 🔥` `+285%`
1. [我将学会谷爱凌这个大笑方式](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%B0%86%E5%AD%A6%E4%BC%9A%E8%B0%B7%E7%88%B1%E5%87%8C%E8%BF%99%E4%B8%AA%E5%A4%A7%E7%AC%91%E6%96%B9%E5%BC%8F%23) `215.3K 🔥` `+135%`
1. [韩延哽咽谈星河入梦排片](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%BB%B6%E5%93%BD%E5%92%BD%E8%B0%88%E6%98%9F%E6%B2%B3%E5%85%A5%E6%A2%A6%E6%8E%92%E7%89%87%23) `194.5K 🔥` `+95%`
1. [高层看烟花有多吓人 (How scary is it to watch fireworks from high-rise buildings?)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B1%82%E7%9C%8B%E7%83%9F%E8%8A%B1%E6%9C%89%E5%A4%9A%E5%90%93%E4%BA%BA%23) `185.7K 🔥` `+187%`
1. [曝Doinb参加TI15预选赛](https://s.weibo.com/weibo?q=%23%E6%9B%9DDoinb%E5%8F%82%E5%8A%A0TI15%E9%A2%84%E9%80%89%E8%B5%9B%23) `142.8K 🔥` `+54%`
1. [俞灏明做猪肝一个活口都不留](https://s.weibo.com/weibo?q=%23%E4%BF%9E%E7%81%8F%E6%98%8E%E5%81%9A%E7%8C%AA%E8%82%9D%E4%B8%80%E4%B8%AA%E6%B4%BB%E5%8F%A3%E9%83%BD%E4%B8%8D%E7%95%99%23) `116.3K 🔥` `+24%`
1. [春节不归人坚守汇成动人团圆 (People who have not returned during the Spring Festival stick to each other and form a touching reunion)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E4%B8%8D%E5%BD%92%E4%BA%BA%E5%9D%9A%E5%AE%88%E6%B1%87%E6%88%90%E5%8A%A8%E4%BA%BA%E5%9B%A2%E5%9C%86%23) `611.9K 🔥`
1. [镖人票房破3亿 (The box office of Daredevil exceeded 300 million)](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E7%A5%A8%E6%88%BF%E7%A0%B43%E4%BA%BF%23) `187.4K 🔥`
1. [缺牙齿正在攻击缺牙齿](https://s.weibo.com/weibo?q=%23%E7%BC%BA%E7%89%99%E9%BD%BF%E6%AD%A3%E5%9C%A8%E6%94%BB%E5%87%BB%E7%BC%BA%E7%89%99%E9%BD%BF%23) `185.9K 🔥`
1. [玩手机是一件很私人的事情](https://s.weibo.com/weibo?q=%23%E7%8E%A9%E6%89%8B%E6%9C%BA%E6%98%AF%E4%B8%80%E4%BB%B6%E5%BE%88%E7%A7%81%E4%BA%BA%E7%9A%84%E4%BA%8B%E6%83%85%23) `185.5K 🔥`
1. [昀牵孟绕](https://s.weibo.com/weibo?q=%23%E6%98%80%E7%89%B5%E5%AD%9F%E7%BB%95%23) `124.6K 🔥`
1. [2名初中生扶摔倒女子遭索赔22万 (Two junior high school students helped a woman who fell down and were compensated for NT$220,000)](https://s.weibo.com/weibo?q=%232%E5%90%8D%E5%88%9D%E4%B8%AD%E7%94%9F%E6%89%B6%E6%91%94%E5%80%92%E5%A5%B3%E5%AD%90%E9%81%AD%E7%B4%A2%E8%B5%9422%E4%B8%87%23) `108.9K 🔥`
1. [白鹿韩国](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E9%9F%A9%E5%9B%BD%23) `108.9K 🔥`
1. [妻子回应丈夫初二坐丈人腿上告状](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%9B%9E%E5%BA%94%E4%B8%88%E5%A4%AB%E5%88%9D%E4%BA%8C%E5%9D%90%E4%B8%88%E4%BA%BA%E8%85%BF%E4%B8%8A%E5%91%8A%E7%8A%B6%23) `108.9K 🔥`
1. [周杰伦点评给他拜年的朋友](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E7%82%B9%E8%AF%84%E7%BB%99%E4%BB%96%E6%8B%9C%E5%B9%B4%E7%9A%84%E6%9C%8B%E5%8F%8B%23) `108.9K 🔥`
1. [金价迎来新一轮大涨](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%BF%8E%E6%9D%A5%E6%96%B0%E4%B8%80%E8%BD%AE%E5%A4%A7%E6%B6%A8%23) `108.9K 🔥`
1. [白鹿用韩语和韩国粉丝聊天](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%94%A8%E9%9F%A9%E8%AF%AD%E5%92%8C%E9%9F%A9%E5%9B%BD%E7%B2%89%E4%B8%9D%E8%81%8A%E5%A4%A9%23) `108.9K 🔥`
1. [宋佳刘诗诗有条通天道你俩走不走](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BD%B3%E5%88%98%E8%AF%97%E8%AF%97%E6%9C%89%E6%9D%A1%E9%80%9A%E5%A4%A9%E9%81%93%E4%BD%A0%E4%BF%A9%E8%B5%B0%E4%B8%8D%E8%B5%B0%23) `108.8K 🔥`
1. [蔡徐坤Chinese New Year (Cai XukunChinese New Year)](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4Chinese%20New%20Year%23) `90.4K 🔥`
1. [李健 禁烟大使 (Li Jian Anti-smoking Ambassador)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%81%A5%20%E7%A6%81%E7%83%9F%E5%A4%A7%E4%BD%BF%23) `86.5K 🔥`
1. [尔滨气温让冰雪大世界临时闭园了](https://s.weibo.com/weibo?q=%23%E5%B0%94%E6%BB%A8%E6%B0%94%E6%B8%A9%E8%AE%A9%E5%86%B0%E9%9B%AA%E5%A4%A7%E4%B8%96%E7%95%8C%E4%B8%B4%E6%97%B6%E9%97%AD%E5%9B%AD%E4%BA%86%23) `77.8K 🔥`
1. [尹锡悦被判无期徒刑 (Yin Xiyue was sentenced to life imprisonment)](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E9%94%A1%E6%82%A6%E8%A2%AB%E5%88%A4%E6%97%A0%E6%9C%9F%E5%BE%92%E5%88%91%23) `459.5K 🔥` `-61%`
1. [王濛说自己以前快到教练都掐不上表](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E8%AF%B4%E8%87%AA%E5%B7%B1%E4%BB%A5%E5%89%8D%E5%BF%AB%E5%88%B0%E6%95%99%E7%BB%83%E9%83%BD%E6%8E%90%E4%B8%8D%E4%B8%8A%E8%A1%A8%23) `116.1K 🔥` `-37%`
1. [我承认之前对吴京太大声了](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%89%BF%E8%AE%A4%E4%B9%8B%E5%89%8D%E5%AF%B9%E5%90%B4%E4%BA%AC%E5%A4%AA%E5%A4%A7%E5%A3%B0%E4%BA%86%23) `72.1K 🔥` `-58%`
1. [飞驰人生3同期票房超哪吒2 (Flying Life 3 surpassed Nezha 2 at the box office during the same period)](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F3%E5%90%8C%E6%9C%9F%E7%A5%A8%E6%88%BF%E8%B6%85%E5%93%AA%E5%90%922%23) `67.2K 🔥` `-30%`
1. [男子吐槽年夜饭12道菜仅受皮外伤](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%90%90%E6%A7%BD%E5%B9%B4%E5%A4%9C%E9%A5%AD12%E9%81%93%E8%8F%9C%E4%BB%85%E5%8F%97%E7%9A%AE%E5%A4%96%E4%BC%A4%23) `66.3K 🔥` `-30%`

Updated at 2026-02-19 18:01:40

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
