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

1. [伊朗发射带1吨重弹头导弹打以色列 (Iran launches missile with 1-ton heavy warhead to hit Israel)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E5%B0%84%E5%B8%A61%E5%90%A8%E9%87%8D%E5%BC%B9%E5%A4%B4%E5%AF%BC%E5%BC%B9%E6%89%93%E4%BB%A5%E8%89%B2%E5%88%97%23) `325.1K 🔥` `NEW`
1. [王嘉尔世巡多伦多墨西哥双场售罄](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E4%B8%96%E5%B7%A1%E5%A4%9A%E4%BC%A6%E5%A4%9A%E5%A2%A8%E8%A5%BF%E5%93%A5%E5%8F%8C%E5%9C%BA%E5%94%AE%E7%BD%84%23) `324.1K 🔥` `NEW`
1. [代表说农民每月200元养老金太亏了](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E8%A1%A8%E8%AF%B4%E5%86%9C%E6%B0%91%E6%AF%8F%E6%9C%88200%E5%85%83%E5%85%BB%E8%80%81%E9%87%91%E5%A4%AA%E4%BA%8F%E4%BA%86%23) `164.5K 🔥` `NEW`
1. [建议遏制算法诱导熬夜](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E9%81%8F%E5%88%B6%E7%AE%97%E6%B3%95%E8%AF%B1%E5%AF%BC%E7%86%AC%E5%A4%9C%23) `164.3K 🔥` `NEW`
1. [1岁9个月宝宝吃花生呛到脑部受损](https://s.weibo.com/weibo?q=%231%E5%B2%819%E4%B8%AA%E6%9C%88%E5%AE%9D%E5%AE%9D%E5%90%83%E8%8A%B1%E7%94%9F%E5%91%9B%E5%88%B0%E8%84%91%E9%83%A8%E5%8F%97%E6%8D%9F%23) `89.9K 🔥` `NEW`
1. [44岁女子返岗途中去世女儿即将高考](https://s.weibo.com/weibo?q=%2344%E5%B2%81%E5%A5%B3%E5%AD%90%E8%BF%94%E5%B2%97%E9%80%94%E4%B8%AD%E5%8E%BB%E4%B8%96%E5%A5%B3%E5%84%BF%E5%8D%B3%E5%B0%86%E9%AB%98%E8%80%83%23) `85.2K 🔥` `NEW`
1. [赵丽颖第一视角打戏好飒](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%AC%AC%E4%B8%80%E8%A7%86%E8%A7%92%E6%89%93%E6%88%8F%E5%A5%BD%E9%A3%92%23) `82.8K 🔥` `NEW`
1. [成都GG对战FPX.ZQ](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BDGG%E5%AF%B9%E6%88%98FPX.ZQ%23) `78.2K 🔥` `NEW`
1. [9岁女孩泰国游泳三天晒成酱油色](https://s.weibo.com/weibo?q=%239%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%B3%B0%E5%9B%BD%E6%B8%B8%E6%B3%B3%E4%B8%89%E5%A4%A9%E6%99%92%E6%88%90%E9%85%B1%E6%B2%B9%E8%89%B2%23) `75.5K 🔥` `NEW`
1. [现在就出发4](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%23) `781.3K 🔥` `+203%`
1. [建议优化大学生婚育教育体系 (Suggestions on optimizing the marriage and childbearing education system for college students)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%BC%98%E5%8C%96%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%A9%9A%E8%82%B2%E6%95%99%E8%82%B2%E4%BD%93%E7%B3%BB%23) `171.3K 🔥` `+53%`
1. [鹤男](https://s.weibo.com/weibo?q=%23%E9%B9%A4%E7%94%B7%23) `162.3K 🔥` `+93%`
1. [花84万买到的140平步梯顶楼](https://s.weibo.com/weibo?q=%23%E8%8A%B184%E4%B8%87%E4%B9%B0%E5%88%B0%E7%9A%84140%E5%B9%B3%E6%AD%A5%E6%A2%AF%E9%A1%B6%E6%A5%BC%23) `161.5K 🔥` `+40%`
1. [建议短视频凌晨1点至5点深夜静默](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E7%9F%AD%E8%A7%86%E9%A2%91%E5%87%8C%E6%99%A81%E7%82%B9%E8%87%B35%E7%82%B9%E6%B7%B1%E5%A4%9C%E9%9D%99%E9%BB%98%23) `1.1M 🔥`
1. [政府工作报告里的民生红包 (People’s livelihood red envelopes in the government work report)](https://s.weibo.com/weibo?q=%23%E6%94%BF%E5%BA%9C%E5%B7%A5%E4%BD%9C%E6%8A%A5%E5%91%8A%E9%87%8C%E7%9A%84%E6%B0%91%E7%94%9F%E7%BA%A2%E5%8C%85%23) `634.8K 🔥`
1. [全皮层修护真相揭秘 (The truth behind full skin repair)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%9A%AE%E5%B1%82%E4%BF%AE%E6%8A%A4%E7%9C%9F%E7%9B%B8%E6%8F%AD%E7%A7%98%23) `589.1K 🔥`
1. [春假清明连休6天家长称很无奈 (Parents said they were helpless after taking six consecutive days off during the Qingming Festival during the spring break.)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E5%81%87%E6%B8%85%E6%98%8E%E8%BF%9E%E4%BC%916%E5%A4%A9%E5%AE%B6%E9%95%BF%E7%A7%B0%E5%BE%88%E6%97%A0%E5%A5%88%23) `561.1K 🔥`
1. [租房能不能别再开广角拍房子 (When renting a house, can you please stop taking wide-angle shots of the house?)](https://s.weibo.com/weibo?q=%23%E7%A7%9F%E6%88%BF%E8%83%BD%E4%B8%8D%E8%83%BD%E5%88%AB%E5%86%8D%E5%BC%80%E5%B9%BF%E8%A7%92%E6%8B%8D%E6%88%BF%E5%AD%90%23) `166.8K 🔥`
1. [朴元彬 YSL](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%85%83%E5%BD%AC%20YSL%23) `161.8K 🔥`
1. [日本正紧张研判是否支援美军](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%AD%A3%E7%B4%A7%E5%BC%A0%E7%A0%94%E5%88%A4%E6%98%AF%E5%90%A6%E6%94%AF%E6%8F%B4%E7%BE%8E%E5%86%9B%23) `153.4K 🔥`
1. [薛之谦万兽之王长沙站开启预售](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E4%B8%87%E5%85%BD%E4%B9%8B%E7%8E%8B%E9%95%BF%E6%B2%99%E7%AB%99%E5%BC%80%E5%90%AF%E9%A2%84%E5%94%AE%23) `144.5K 🔥`
1. [王俊凯拍自己无所谓 拍自担必须帅](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%8B%8D%E8%87%AA%E5%B7%B1%E6%97%A0%E6%89%80%E8%B0%93%20%E6%8B%8D%E8%87%AA%E6%8B%85%E5%BF%85%E9%A1%BB%E5%B8%85%23) `111.7K 🔥`
1. [种地吧](https://s.weibo.com/weibo?q=%23%E7%A7%8D%E5%9C%B0%E5%90%A7%23) `108.9K 🔥`
1. [斯里兰卡称力保另一伊朗军舰安全](https://s.weibo.com/weibo?q=%23%E6%96%AF%E9%87%8C%E5%85%B0%E5%8D%A1%E7%A7%B0%E5%8A%9B%E4%BF%9D%E5%8F%A6%E4%B8%80%E4%BC%8A%E6%9C%97%E5%86%9B%E8%88%B0%E5%AE%89%E5%85%A8%23) `107.2K 🔥`
1. [斗罗大陆小舞 (Douluo Dalu Xiaowu)](https://s.weibo.com/weibo?q=%23%E6%96%97%E7%BD%97%E5%A4%A7%E9%99%86%E5%B0%8F%E8%88%9E%23) `100.3K 🔥`
1. [王天辰侯雯元 莞莞类卿](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%A4%A9%E8%BE%B0%E4%BE%AF%E9%9B%AF%E5%85%83%20%E8%8E%9E%E8%8E%9E%E7%B1%BB%E5%8D%BF%23) `97.2K 🔥`
1. [大侦探NPC颜值](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BE%A6%E6%8E%A2NPC%E9%A2%9C%E5%80%BC%23) `96.5K 🔥`
1. [宋亚轩 内娱窝囊系爱豆](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%20%E5%86%85%E5%A8%B1%E7%AA%9D%E5%9B%8A%E7%B3%BB%E7%88%B1%E8%B1%86%23) `90.3K 🔥`
1. [张杰鸟巢演唱会12万张票秒罄 (120,000 tickets for Zhang Jie’s Bird’s Nest concert sold out in seconds)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E9%B8%9F%E5%B7%A2%E6%BC%94%E5%94%B1%E4%BC%9A12%E4%B8%87%E5%BC%A0%E7%A5%A8%E7%A7%92%E7%BD%84%23) `89.8K 🔥`
1. [中方将派特使访问中东](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%B0%86%E6%B4%BE%E7%89%B9%E4%BD%BF%E8%AE%BF%E9%97%AE%E4%B8%AD%E4%B8%9C%23) `85.8K 🔥`
1. [刘国梁谈奥运备战 (Liu Guoliang talks about preparations for the Olympics)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%9B%BD%E6%A2%81%E8%B0%88%E5%A5%A5%E8%BF%90%E5%A4%87%E6%88%98%23) `84.7K 🔥`
1. [唐嫣穿得像个灯笼就出来了](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E7%A9%BF%E5%BE%97%E5%83%8F%E4%B8%AA%E7%81%AF%E7%AC%BC%E5%B0%B1%E5%87%BA%E6%9D%A5%E4%BA%86%23) `78.1K 🔥`
1. [我国就业形势有两大不匹配现象 (There are two major mismatches in my country’s employment situation)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%B0%B1%E4%B8%9A%E5%BD%A2%E5%8A%BF%E6%9C%89%E4%B8%A4%E5%A4%A7%E4%B8%8D%E5%8C%B9%E9%85%8D%E7%8E%B0%E8%B1%A1%23) `75.5K 🔥`
1. [建议不调休的代表被记者围住了 (The representative who suggested not taking the day off was surrounded by reporters)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%B8%8D%E8%B0%83%E4%BC%91%E7%9A%84%E4%BB%A3%E8%A1%A8%E8%A2%AB%E8%AE%B0%E8%80%85%E5%9B%B4%E4%BD%8F%E4%BA%86%23) `343.5K 🔥` `-59%`
1. [现在就出发](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%91%23) `225.4K 🔥` `-40%`
1. [京东2025年收入13091亿](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C2025%E5%B9%B4%E6%94%B6%E5%85%A513091%E4%BA%BF%23) `196.2K 🔥` `-44%`
1. [建议医务人员薪酬不得与创收挂钩 (It is recommended that the remuneration of medical staff should not be linked to income generation)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%8C%BB%E5%8A%A1%E4%BA%BA%E5%91%98%E8%96%AA%E9%85%AC%E4%B8%8D%E5%BE%97%E4%B8%8E%E5%88%9B%E6%94%B6%E6%8C%82%E9%92%A9%23) `171.9K 🔥` `-73%`
1. [伊朗报复美以](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8A%A5%E5%A4%8D%E7%BE%8E%E4%BB%A5%23) `170.9K 🔥` `-73%`
1. [高铁一等座4元二等座8元 (High-speed rail first-class seat 4 yuan, second-class seat 8 yuan)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%93%81%E4%B8%80%E7%AD%89%E5%BA%A74%E5%85%83%E4%BA%8C%E7%AD%89%E5%BA%A78%E5%85%83%23) `170.0K 🔥` `-51%`
1. [比Deepfake更严重的AI出现了](https://s.weibo.com/weibo?q=%23%E6%AF%94Deepfake%E6%9B%B4%E4%B8%A5%E9%87%8D%E7%9A%84AI%E5%87%BA%E7%8E%B0%E4%BA%86%23) `169.0K 🔥` `-48%`
1. [攻玉主演 侯明昊鹤男 (Gong Yu starring Hou Minghao and Henan)](https://s.weibo.com/weibo?q=%23%E6%94%BB%E7%8E%89%E4%B8%BB%E6%BC%94%20%E4%BE%AF%E6%98%8E%E6%98%8A%E9%B9%A4%E7%94%B7%23) `168.6K 🔥` `-73%`
1. [纯真年代的爱情 烂尾 (Love in the age of innocence ended)](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%9C%9F%E5%B9%B4%E4%BB%A3%E7%9A%84%E7%88%B1%E6%83%85%20%E7%83%82%E5%B0%BE%23) `166.0K 🔥` `-61%`
1. [薛之谦万兽之王巡回演唱会](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E4%B8%87%E5%85%BD%E4%B9%8B%E7%8E%8B%E5%B7%A1%E5%9B%9E%E6%BC%94%E5%94%B1%E4%BC%9A%23) `165.3K 🔥` `-40%`
1. [伊朗首次使用最快自杀式无人机 (Iran uses fastest suicide drone for first time)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%A6%96%E6%AC%A1%E4%BD%BF%E7%94%A8%E6%9C%80%E5%BF%AB%E8%87%AA%E6%9D%80%E5%BC%8F%E6%97%A0%E4%BA%BA%E6%9C%BA%23) `163.3K 🔥` `-45%`
1. [猫 讨厌和瘦子拍照](https://s.weibo.com/weibo?q=%23%E7%8C%AB%20%E8%AE%A8%E5%8E%8C%E5%92%8C%E7%98%A6%E5%AD%90%E6%8B%8D%E7%85%A7%23) `147.7K 🔥` `-47%`
1. [伊拉克全境断电](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%8B%89%E5%85%8B%E5%85%A8%E5%A2%83%E6%96%AD%E7%94%B5%23) `130.9K 🔥` `-28%`
1. [本以为一次煎7条鱼就够吹牛了 (I thought frying 7 fish at once was enough to brag.)](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E4%BB%A5%E4%B8%BA%E4%B8%80%E6%AC%A1%E7%85%8E7%E6%9D%A1%E9%B1%BC%E5%B0%B1%E5%A4%9F%E5%90%B9%E7%89%9B%E4%BA%86%23) `92.5K 🔥` `-55%`
1. [WBG对战AL](https://s.weibo.com/weibo?q=%23WBG%E5%AF%B9%E6%88%98AL%23) `84.7K 🔥` `-26%`
1. [洗头公式](https://s.weibo.com/weibo?q=%23%E6%B4%97%E5%A4%B4%E5%85%AC%E5%BC%8F%23) `79.1K 🔥` `-23%`
1. [莲花CEO戴摄像头讽刺车顶激光雷达](https://s.weibo.com/weibo?q=%23%E8%8E%B2%E8%8A%B1CEO%E6%88%B4%E6%91%84%E5%83%8F%E5%A4%B4%E8%AE%BD%E5%88%BA%E8%BD%A6%E9%A1%B6%E6%BF%80%E5%85%89%E9%9B%B7%E8%BE%BE%23) `75.5K 🔥` `-25%`
1. [少夫人来自东北](https://s.weibo.com/weibo?q=%23%E5%B0%91%E5%A4%AB%E4%BA%BA%E6%9D%A5%E8%87%AA%E4%B8%9C%E5%8C%97%23) `75.5K 🔥` `-39%`

Updated at 2026-03-05 20:03:32

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
