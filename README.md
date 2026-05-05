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

1. [世乒赛男团澳大利亚变阵 (World Table Tennis Championships men’s team Australia changes formation)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E4%B9%92%E8%B5%9B%E7%94%B7%E5%9B%A2%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E5%8F%98%E9%98%B5%23) `1.6M 🔥` `NEW`
1. [大哥谢娜 二弟赵丽颖](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%93%A5%E8%B0%A2%E5%A8%9C%20%E4%BA%8C%E5%BC%9F%E8%B5%B5%E4%B8%BD%E9%A2%96%23) `1.4M 🔥` `NEW`
1. [小猫还原自己摔伤过程](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E8%BF%98%E5%8E%9F%E8%87%AA%E5%B7%B1%E6%91%94%E4%BC%A4%E8%BF%87%E7%A8%8B%23) `1.3M 🔥` `NEW`
1. [你好星期六没有给张婧仪道歉](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%E6%B2%A1%E6%9C%89%E7%BB%99%E5%BC%A0%E5%A9%A7%E4%BB%AA%E9%81%93%E6%AD%89%23) `1.3M 🔥` `NEW`
1. [以为低糖低油其实长肉的食物](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BA%E4%BD%8E%E7%B3%96%E4%BD%8E%E6%B2%B9%E5%85%B6%E5%AE%9E%E9%95%BF%E8%82%89%E7%9A%84%E9%A3%9F%E7%89%A9%23) `713.5K 🔥` `NEW`
1. [高市早苗在澳大利亚下跪献花](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E5%9C%A8%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E4%B8%8B%E8%B7%AA%E7%8C%AE%E8%8A%B1%23) `700.4K 🔥` `NEW`
1. [时代少年团直播](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%9B%B4%E6%92%AD%23) `697.6K 🔥` `NEW`
1. [歌手2026首发阵容新版本](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%E9%A6%96%E5%8F%91%E9%98%B5%E5%AE%B9%E6%96%B0%E7%89%88%E6%9C%AC%23) `663.3K 🔥` `NEW`
1. [鸿蒙智行回应副驾折叠争议](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%99%E6%99%BA%E8%A1%8C%E5%9B%9E%E5%BA%94%E5%89%AF%E9%A9%BE%E6%8A%98%E5%8F%A0%E4%BA%89%E8%AE%AE%23) `348.1K 🔥` `NEW`
1. [第五人格年度发布会](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%E5%B9%B4%E5%BA%A6%E5%8F%91%E5%B8%83%E4%BC%9A%23) `341.2K 🔥` `NEW`
1. [机场提示禁止携带越王勾践剑登机 (Airport prompts that it is prohibited to carry Yue Wang Goujian Sword on board the plane)](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%9C%BA%E6%8F%90%E7%A4%BA%E7%A6%81%E6%AD%A2%E6%90%BA%E5%B8%A6%E8%B6%8A%E7%8E%8B%E5%8B%BE%E8%B7%B5%E5%89%91%E7%99%BB%E6%9C%BA%23) `321.8K 🔥` `NEW`
1. [女乞丐npc被游客们投喂零食](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E4%B9%9E%E4%B8%90npc%E8%A2%AB%E6%B8%B8%E5%AE%A2%E4%BB%AC%E6%8A%95%E5%96%82%E9%9B%B6%E9%A3%9F%23) `319.7K 🔥` `NEW`
1. [宋雨琦 跑男](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%20%E8%B7%91%E7%94%B7%23) `310.7K 🔥` `NEW`
1. [赛力斯跌超6%](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E5%8A%9B%E6%96%AF%E8%B7%8C%E8%B6%856%25%23) `308.4K 🔥` `NEW`
1. [主播天权离开东方甄选后首次直播](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E6%92%AD%E5%A4%A9%E6%9D%83%E7%A6%BB%E5%BC%80%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E5%90%8E%E9%A6%96%E6%AC%A1%E7%9B%B4%E6%92%AD%23) `307.5K 🔥` `NEW`
1. [马龙许昕刘诗雯现场观战国乒](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95%E5%88%98%E8%AF%97%E9%9B%AF%E7%8E%B0%E5%9C%BA%E8%A7%82%E6%88%98%E5%9B%BD%E4%B9%92%23) `300.7K 🔥` `NEW`
1. [有多少城市能撑起来七日游](https://s.weibo.com/weibo?q=%23%E6%9C%89%E5%A4%9A%E5%B0%91%E5%9F%8E%E5%B8%82%E8%83%BD%E6%92%91%E8%B5%B7%E6%9D%A5%E4%B8%83%E6%97%A5%E6%B8%B8%23) `299.7K 🔥` `NEW`
1. [王楚钦vs萨琳](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E8%90%A8%E7%90%B3%23) `298.6K 🔥` `NEW`
1. [第一次见爸爸和女儿不熟的](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E7%88%B8%E7%88%B8%E5%92%8C%E5%A5%B3%E5%84%BF%E4%B8%8D%E7%86%9F%E7%9A%84%23) `296.1K 🔥` `NEW`
1. [Gr总决赛季军](https://s.weibo.com/weibo?q=%23Gr%E6%80%BB%E5%86%B3%E8%B5%9B%E5%AD%A3%E5%86%9B%23) `291.2K 🔥` `NEW`
1. [华语电影很久没有这样的高分了 (It’s been a long time since a Chinese-language film had such high scores.)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E8%AF%AD%E7%94%B5%E5%BD%B1%E5%BE%88%E4%B9%85%E6%B2%A1%E6%9C%89%E8%BF%99%E6%A0%B7%E7%9A%84%E9%AB%98%E5%88%86%E4%BA%86%23) `290.2K 🔥` `NEW`
1. [男子单手抱婴儿致重摔头着地](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8D%95%E6%89%8B%E6%8A%B1%E5%A9%B4%E5%84%BF%E8%87%B4%E9%87%8D%E6%91%94%E5%A4%B4%E7%9D%80%E5%9C%B0%23) `286.6K 🔥` `NEW`
1. [张月急性肠胃炎](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E6%80%A5%E6%80%A7%E8%82%A0%E8%83%83%E7%82%8E%23) `282.9K 🔥` `NEW`
1. [金俊勉发了吴世勋十年前的照片](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BF%8A%E5%8B%89%E5%8F%91%E4%BA%86%E5%90%B4%E4%B8%96%E5%8B%8B%E5%8D%81%E5%B9%B4%E5%89%8D%E7%9A%84%E7%85%A7%E7%89%87%23) `280.7K 🔥` `NEW`
1. [金银突迎反转](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%93%B6%E7%AA%81%E8%BF%8E%E5%8F%8D%E8%BD%AC%23) `279.3K 🔥` `NEW`
1. [大连现全李酒店与全季差一撇](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%BF%9E%E7%8E%B0%E5%85%A8%E6%9D%8E%E9%85%92%E5%BA%97%E4%B8%8E%E5%85%A8%E5%AD%A3%E5%B7%AE%E4%B8%80%E6%92%87%23) `274.4K 🔥` `NEW`
1. [汤晶媚回应吐槽黄宗泽牙龈](https://s.weibo.com/weibo?q=%23%E6%B1%A4%E6%99%B6%E5%AA%9A%E5%9B%9E%E5%BA%94%E5%90%90%E6%A7%BD%E9%BB%84%E5%AE%97%E6%B3%BD%E7%89%99%E9%BE%88%23) `273.3K 🔥` `NEW`
1. [广交会彰显中国制造硬核实力](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%BA%A4%E4%BC%9A%E5%BD%B0%E6%98%BE%E4%B8%AD%E5%9B%BD%E5%88%B6%E9%80%A0%E7%A1%AC%E6%A0%B8%E5%AE%9E%E5%8A%9B%23) `1.4M 🔥` `+83%`
1. [浏阳烟花厂爆炸致26死61伤 (Explosion at Liuyang Fireworks Factory kills 26 and injures 61)](https://s.weibo.com/weibo?q=%23%E6%B5%8F%E9%98%B3%E7%83%9F%E8%8A%B1%E5%8E%82%E7%88%86%E7%82%B8%E8%87%B426%E6%AD%BB61%E4%BC%A4%23) `760.0K 🔥` `+27%`
1. [好多人给谢娜送花篮](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A4%9A%E4%BA%BA%E7%BB%99%E8%B0%A2%E5%A8%9C%E9%80%81%E8%8A%B1%E7%AF%AE%23) `691.9K 🔥` `+143%`
1. [女子怀孕胎死宫内6周后才发现](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%80%80%E5%AD%95%E8%83%8E%E6%AD%BB%E5%AE%AB%E5%86%856%E5%91%A8%E5%90%8E%E6%89%8D%E5%8F%91%E7%8E%B0%23) `663.3K 🔥` `+96%`
1. [跟林依晨分手后前男友因性侵入狱 (Ex-boyfriend jailed for sexual assault after breaking up with Ariel Ariel)](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E6%9E%97%E4%BE%9D%E6%99%A8%E5%88%86%E6%89%8B%E5%90%8E%E5%89%8D%E7%94%B7%E5%8F%8B%E5%9B%A0%E6%80%A7%E4%BE%B5%E5%85%A5%E7%8B%B1%23) `628.1K 🔥` `+84%`
1. [浏阳烟花厂爆炸前后对比](https://s.weibo.com/weibo?q=%23%E6%B5%8F%E9%98%B3%E7%83%9F%E8%8A%B1%E5%8E%82%E7%88%86%E7%82%B8%E5%89%8D%E5%90%8E%E5%AF%B9%E6%AF%94%23) `303.4K 🔥` `+34%`
1. [奔跑吧打假](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E6%89%93%E5%81%87%23) `1.7M 🔥`
1. [路人上海偶遇angelababy小海绵](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E4%BA%BA%E4%B8%8A%E6%B5%B7%E5%81%B6%E9%81%87angelababy%E5%B0%8F%E6%B5%B7%E7%BB%B5%23) `318.4K 🔥`
1. [豆包同一个问题三个答案](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%90%8C%E4%B8%80%E4%B8%AA%E9%97%AE%E9%A2%98%E4%B8%89%E4%B8%AA%E7%AD%94%E6%A1%88%23) `316.5K 🔥`
1. [林依晨 郑家尧](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BE%9D%E6%99%A8%20%E9%83%91%E5%AE%B6%E5%B0%A7%23) `314.9K 🔥`
1. [除非白鹿不想录了](https://s.weibo.com/weibo?q=%23%E9%99%A4%E9%9D%9E%E7%99%BD%E9%B9%BF%E4%B8%8D%E6%83%B3%E5%BD%95%E4%BA%86%23) `313.8K 🔥`
1. [一个人旅游上厕所时行李怎么办](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E4%BA%BA%E6%97%85%E6%B8%B8%E4%B8%8A%E5%8E%95%E6%89%80%E6%97%B6%E8%A1%8C%E6%9D%8E%E6%80%8E%E4%B9%88%E5%8A%9E%23) `312.4K 🔥`
1. [红果靠免费起家吸引近2亿用户](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E9%9D%A0%E5%85%8D%E8%B4%B9%E8%B5%B7%E5%AE%B6%E5%90%B8%E5%BC%95%E8%BF%912%E4%BA%BF%E7%94%A8%E6%88%B7%23) `306.3K 🔥`
1. [红果VIP 付费 (Hongguo VIP paid)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9CVIP%20%E4%BB%98%E8%B4%B9%23) `304.6K 🔥`
1. [给阿嬷的情书豆瓣开分9.0](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E8%B1%86%E7%93%A3%E5%BC%80%E5%88%869.0%23) `288.6K 🔥`
1. [建议大家一定要尽早明确生活的主线 (It is recommended that everyone must clarify the main line of life as early as possible)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E4%B8%80%E5%AE%9A%E8%A6%81%E5%B0%BD%E6%97%A9%E6%98%8E%E7%A1%AE%E7%94%9F%E6%B4%BB%E7%9A%84%E4%B8%BB%E7%BA%BF%23) `284.5K 🔥`
1. [BLACKPINK在MetGala合照 (BLACKPINK took a group photo at Met Gala)](https://s.weibo.com/weibo?q=%23BLACKPINK%E5%9C%A8MetGala%E5%90%88%E7%85%A7%23) `278.3K 🔥`
1. [鹿哈自曝每天平均收入500块 (Lu Ha revealed that his average daily income is 500 yuan)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E5%93%88%E8%87%AA%E6%9B%9D%E6%AF%8F%E5%A4%A9%E5%B9%B3%E5%9D%87%E6%94%B6%E5%85%A5500%E5%9D%97%23) `276.7K 🔥`
1. [长沙市委市政府致歉 (Changsha Municipal Party Committee and Government apologized)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E5%B8%82%E5%A7%94%E5%B8%82%E6%94%BF%E5%BA%9C%E8%87%B4%E6%AD%89%23) `819.3K 🔥` `-39%`
1. [国内一年仅卖2763万台彩电](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%86%85%E4%B8%80%E5%B9%B4%E4%BB%85%E5%8D%962763%E4%B8%87%E5%8F%B0%E5%BD%A9%E7%94%B5%23) `322.4K 🔥` `-41%`
1. [军犬救援演练发现是熟人扭头就走](https://s.weibo.com/weibo?q=%23%E5%86%9B%E7%8A%AC%E6%95%91%E6%8F%B4%E6%BC%94%E7%BB%83%E5%8F%91%E7%8E%B0%E6%98%AF%E7%86%9F%E4%BA%BA%E6%89%AD%E5%A4%B4%E5%B0%B1%E8%B5%B0%23) `294.6K 🔥` `-52%`
1. [曝张凌赫加盟跑男第15季](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%8A%A0%E7%9B%9F%E8%B7%91%E7%94%B7%E7%AC%AC15%E5%AD%A3%23) `292.8K 🔥` `-50%`
1. [歌手](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%23) `286.0K 🔥` `-58%`

Updated at 2026-05-05 18:17:40

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
