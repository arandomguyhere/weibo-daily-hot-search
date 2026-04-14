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

1. [4人合伙买彩票中500万后起纠纷 (A dispute broke out after 4 people won 5 million in lottery tickets together.)](https://s.weibo.com/weibo?q=%234%E4%BA%BA%E5%90%88%E4%BC%99%E4%B9%B0%E5%BD%A9%E7%A5%A8%E4%B8%AD500%E4%B8%87%E5%90%8E%E8%B5%B7%E7%BA%A0%E7%BA%B7%23) `762.0K 🔥` `NEW`
1. [十日终焉移动大棚](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E7%A7%BB%E5%8A%A8%E5%A4%A7%E6%A3%9A%23) `226.2K 🔥` `NEW`
1. [公司连亏6年股价却暴涨10倍](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E8%BF%9E%E4%BA%8F6%E5%B9%B4%E8%82%A1%E4%BB%B7%E5%8D%B4%E6%9A%B4%E6%B6%A810%E5%80%8D%23) `203.1K 🔥` `NEW`
1. [微信余额没三五百元不给面试引争议](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E4%BD%99%E9%A2%9D%E6%B2%A1%E4%B8%89%E4%BA%94%E7%99%BE%E5%85%83%E4%B8%8D%E7%BB%99%E9%9D%A2%E8%AF%95%E5%BC%95%E4%BA%89%E8%AE%AE%23) `191.1K 🔥` `NEW`
1. [74岁老太杀73岁老太藏尸案宣判](https://s.weibo.com/weibo?q=%2374%E5%B2%81%E8%80%81%E5%A4%AA%E6%9D%8073%E5%B2%81%E8%80%81%E5%A4%AA%E8%97%8F%E5%B0%B8%E6%A1%88%E5%AE%A3%E5%88%A4%23) `164.6K 🔥` `NEW`
1. [田馥甄回应拒绝浪姐邀约](https://s.weibo.com/weibo?q=%23%E7%94%B0%E9%A6%A5%E7%94%84%E5%9B%9E%E5%BA%94%E6%8B%92%E7%BB%9D%E6%B5%AA%E5%A7%90%E9%82%80%E7%BA%A6%23) `163.5K 🔥` `NEW`
1. [66岁男子吸烟失火与87岁母亲身亡](https://s.weibo.com/weibo?q=%2366%E5%B2%81%E7%94%B7%E5%AD%90%E5%90%B8%E7%83%9F%E5%A4%B1%E7%81%AB%E4%B8%8E87%E5%B2%81%E6%AF%8D%E4%BA%B2%E8%BA%AB%E4%BA%A1%23) `160.4K 🔥` `NEW`
1. [孙颖莎megastar的含金量](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Emegastar%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%23) `157.7K 🔥` `NEW`
1. [蜜语纪热度](https://s.weibo.com/weibo?q=%23%E8%9C%9C%E8%AF%AD%E7%BA%AA%E7%83%AD%E5%BA%A6%23) `156.8K 🔥` `NEW`
1. [上海至重庆一航班重着陆有乘客尖叫](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E8%87%B3%E9%87%8D%E5%BA%86%E4%B8%80%E8%88%AA%E7%8F%AD%E9%87%8D%E7%9D%80%E9%99%86%E6%9C%89%E4%B9%98%E5%AE%A2%E5%B0%96%E5%8F%AB%23) `153.0K 🔥` `NEW`
1. [伊朗看透了 (Iran has seen through)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%9C%8B%E9%80%8F%E4%BA%86%23) `149.7K 🔥` `NEW`
1. [尹锡悦夫妇法庭相见细节曝光](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E9%94%A1%E6%82%A6%E5%A4%AB%E5%A6%87%E6%B3%95%E5%BA%AD%E7%9B%B8%E8%A7%81%E7%BB%86%E8%8A%82%E6%9B%9D%E5%85%89%23) `147.6K 🔥` `NEW`
1. [外卖员说最不能点的外卖是黄焖鸡](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%8D%96%E5%91%98%E8%AF%B4%E6%9C%80%E4%B8%8D%E8%83%BD%E7%82%B9%E7%9A%84%E5%A4%96%E5%8D%96%E6%98%AF%E9%BB%84%E7%84%96%E9%B8%A1%23) `146.3K 🔥` `NEW`
1. [班主任猥亵女学生被调到做后勤工作](https://s.weibo.com/weibo?q=%23%E7%8F%AD%E4%B8%BB%E4%BB%BB%E7%8C%A5%E4%BA%B5%E5%A5%B3%E5%AD%A6%E7%94%9F%E8%A2%AB%E8%B0%83%E5%88%B0%E5%81%9A%E5%90%8E%E5%8B%A4%E5%B7%A5%E4%BD%9C%23) `143.7K 🔥` `NEW`
1. [一口价黄金价格](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%8F%A3%E4%BB%B7%E9%BB%84%E9%87%91%E4%BB%B7%E6%A0%BC%23) `143.2K 🔥` `NEW`
1. [品牌一口价金饰跌了285元](https://s.weibo.com/weibo?q=%23%E5%93%81%E7%89%8C%E4%B8%80%E5%8F%A3%E4%BB%B7%E9%87%91%E9%A5%B0%E8%B7%8C%E4%BA%86285%E5%85%83%23) `141.6K 🔥` `NEW`
1. [Jasper打球 以为哪吒上场了](https://s.weibo.com/weibo?q=%23Jasper%E6%89%93%E7%90%83%20%E4%BB%A5%E4%B8%BA%E5%93%AA%E5%90%92%E4%B8%8A%E5%9C%BA%E4%BA%86%23) `140.9K 🔥` `NEW`
1. [尹锡悦夫妇时隔9个月法庭相见](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E9%94%A1%E6%82%A6%E5%A4%AB%E5%A6%87%E6%97%B6%E9%9A%949%E4%B8%AA%E6%9C%88%E6%B3%95%E5%BA%AD%E7%9B%B8%E8%A7%81%23) `140.5K 🔥` `NEW`
1. [原神布伦妮](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E7%A5%9E%E5%B8%83%E4%BC%A6%E5%A6%AE%23) `139.7K 🔥` `NEW`
1. [出生4天被秤砣砸中女婴父亲很自责](https://s.weibo.com/weibo?q=%23%E5%87%BA%E7%94%9F4%E5%A4%A9%E8%A2%AB%E7%A7%A4%E7%A0%A3%E7%A0%B8%E4%B8%AD%E5%A5%B3%E5%A9%B4%E7%88%B6%E4%BA%B2%E5%BE%88%E8%87%AA%E8%B4%A3%23) `138.7K 🔥` `NEW`
1. [苏新皓solo舞台全站第一 (Su Xinhao ranked first in the solo stage)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93solo%E8%88%9E%E5%8F%B0%E5%85%A8%E7%AB%99%E7%AC%AC%E4%B8%80%23) `137.0K 🔥` `NEW`
1. [朱一龙即将进组](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E5%8D%B3%E5%B0%86%E8%BF%9B%E7%BB%84%23) `136.6K 🔥` `NEW`
1. [五一飞往东南亚航班大规模取消 (Massive cancellations of flights to Southeast Asia on May Day)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E9%A3%9E%E5%BE%80%E4%B8%9C%E5%8D%97%E4%BA%9A%E8%88%AA%E7%8F%AD%E5%A4%A7%E8%A7%84%E6%A8%A1%E5%8F%96%E6%B6%88%23) `1.1M 🔥` `+310%`
1. [张晚意个体户只能亲自辟谣](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%99%9A%E6%84%8F%E4%B8%AA%E4%BD%93%E6%88%B7%E5%8F%AA%E8%83%BD%E4%BA%B2%E8%87%AA%E8%BE%9F%E8%B0%A3%23) `158.7K 🔥` `+52%`
1. [lululemon中国市场成救命稻草](https://s.weibo.com/weibo?q=%23lululemon%E4%B8%AD%E5%9B%BD%E5%B8%82%E5%9C%BA%E6%88%90%E6%95%91%E5%91%BD%E7%A8%BB%E8%8D%89%23) `155.4K 🔥` `+35%`
1. [杨清柠新恋情](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B8%85%E6%9F%A0%E6%96%B0%E6%81%8B%E6%83%85%23) `155.0K 🔥` `+64%`
1. [阿Sa被名医诊断出轻微中风](https://s.weibo.com/weibo?q=%23%E9%98%BFSa%E8%A2%AB%E5%90%8D%E5%8C%BB%E8%AF%8A%E6%96%AD%E5%87%BA%E8%BD%BB%E5%BE%AE%E4%B8%AD%E9%A3%8E%23) `154.3K 🔥` `+37%`
1. [TOP换头像 (TOP change avatar)](https://s.weibo.com/weibo?q=%23TOP%E6%8D%A2%E5%A4%B4%E5%83%8F%23) `152.3K 🔥` `+42%`
1. [朴宝剑 费大厨](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%AE%9D%E5%89%91%20%E8%B4%B9%E5%A4%A7%E5%8E%A8%23) `151.9K 🔥` `+36%`
1. [牛排店被查唯一干净的竟是喂狗碗](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%8E%92%E5%BA%97%E8%A2%AB%E6%9F%A5%E5%94%AF%E4%B8%80%E5%B9%B2%E5%87%80%E7%9A%84%E7%AB%9F%E6%98%AF%E5%96%82%E7%8B%97%E7%A2%97%23) `151.3K 🔥` `+57%`
1. [中方从不承认所谓阿鲁纳恰尔邦 (China has never recognized the so-called Arunachal Pradesh)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E4%BB%8E%E4%B8%8D%E6%89%BF%E8%AE%A4%E6%89%80%E8%B0%93%E9%98%BF%E9%B2%81%E7%BA%B3%E6%81%B0%E5%B0%94%E9%82%A6%23) `149.2K 🔥` `+53%`
1. [马頔为了装修李乃文为了什么 (What did Ma Di do to decorate Li Naiwen?)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E4%B8%BA%E4%BA%86%E8%A3%85%E4%BF%AE%E6%9D%8E%E4%B9%83%E6%96%87%E4%B8%BA%E4%BA%86%E4%BB%80%E4%B9%88%23) `148.0K 🔥` `+57%`
1. [朱志鑫 黑猫天使](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%20%E9%BB%91%E7%8C%AB%E5%A4%A9%E4%BD%BF%23) `147.1K 🔥` `+60%`
1. [等张泽禹张极换头像](https://s.weibo.com/weibo?q=%23%E7%AD%89%E5%BC%A0%E6%B3%BD%E7%A6%B9%E5%BC%A0%E6%9E%81%E6%8D%A2%E5%A4%B4%E5%83%8F%23) `145.2K 🔥` `+44%`
1. [花海Cat亚运会教练 (Huahai Cat Asian Games Coach)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E6%B5%B7Cat%E4%BA%9A%E8%BF%90%E4%BC%9A%E6%95%99%E7%BB%83%23) `144.9K 🔥` `+56%`
1. [宋亚轩再多上几节课都大小脸了 (Song Yaxuan will be embarrassed if she takes a few more classes)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%86%8D%E5%A4%9A%E4%B8%8A%E5%87%A0%E8%8A%82%E8%AF%BE%E9%83%BD%E5%A4%A7%E5%B0%8F%E8%84%B8%E4%BA%86%23) `142.0K 🔥` `+50%`
1. [曝等风热吻你两组主演](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%AD%89%E9%A3%8E%E7%83%AD%E5%90%BB%E4%BD%A0%E4%B8%A4%E7%BB%84%E4%B8%BB%E6%BC%94%23) `138.0K 🔥` `+41%`
1. [IG战胜TES](https://s.weibo.com/weibo?q=%23IG%E6%88%98%E8%83%9CTES%23) `135.9K 🔥` `+45%`
1. [孙怡 者来姨 (Sun Yi Aunt Zhe Lai)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%20%E8%80%85%E6%9D%A5%E5%A7%A8%23) `135.4K 🔥` `+52%`
1. [一季度进出口创新高](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AD%A3%E5%BA%A6%E8%BF%9B%E5%87%BA%E5%8F%A3%E5%88%9B%E6%96%B0%E9%AB%98%23) `586.1K 🔥`
1. [33岁抗癌博主去世](https://s.weibo.com/weibo?q=%2333%E5%B2%81%E6%8A%97%E7%99%8C%E5%8D%9A%E4%B8%BB%E5%8E%BB%E4%B8%96%23) `163.0K 🔥`
1. [文章面馆 周一不见](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%AB%A0%E9%9D%A2%E9%A6%86%20%E5%91%A8%E4%B8%80%E4%B8%8D%E8%A7%81%23) `162.1K 🔥`
1. [TOP更新站位](https://s.weibo.com/weibo?q=%23TOP%E6%9B%B4%E6%96%B0%E7%AB%99%E4%BD%8D%23) `161.0K 🔥`
1. [朱珠把女儿当女士来养](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E7%8F%A0%E6%8A%8A%E5%A5%B3%E5%84%BF%E5%BD%93%E5%A5%B3%E5%A3%AB%E6%9D%A5%E5%85%BB%23) `159.9K 🔥`
1. [谁懂这次换手机的意义](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%87%82%E8%BF%99%E6%AC%A1%E6%8D%A2%E6%89%8B%E6%9C%BA%E7%9A%84%E6%84%8F%E4%B9%89%23) `158.5K 🔥`
1. [沈清曝王阳杀青宴被指着鼻子骂](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%B8%85%E6%9B%9D%E7%8E%8B%E9%98%B3%E6%9D%80%E9%9D%92%E5%AE%B4%E8%A2%AB%E6%8C%87%E7%9D%80%E9%BC%BB%E5%AD%90%E9%AA%82%23) `156.0K 🔥`
1. [郭敬明的剧连演员本人都看不懂 (Even the actor himself can't understand Guo Jingming's drama)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E7%9A%84%E5%89%A7%E8%BF%9E%E6%BC%94%E5%91%98%E6%9C%AC%E4%BA%BA%E9%83%BD%E7%9C%8B%E4%B8%8D%E6%87%82%23) `150.4K 🔥`
1. [胖东来多宝鱼被指吃出溯源标签 (Fat Donglai Turbot was accused of eating traceability labels)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E5%A4%9A%E5%AE%9D%E9%B1%BC%E8%A2%AB%E6%8C%87%E5%90%83%E5%87%BA%E6%BA%AF%E6%BA%90%E6%A0%87%E7%AD%BE%23) `197.9K 🔥` `-76%`
1. [卖不完的果切都去哪了](https://s.weibo.com/weibo?q=%23%E5%8D%96%E4%B8%8D%E5%AE%8C%E7%9A%84%E6%9E%9C%E5%88%87%E9%83%BD%E5%8E%BB%E5%93%AA%E4%BA%86%23) `165.2K 🔥` `-29%`
1. [杨幂 越素越美](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%20%E8%B6%8A%E7%B4%A0%E8%B6%8A%E7%BE%8E%23) `164.1K 🔥` `-38%`

Updated at 2026-04-14 23:48:58

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
