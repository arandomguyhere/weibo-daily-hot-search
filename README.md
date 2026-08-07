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

1. [河南三支一扶笔试将重考 (Henan's three-branch and one-support written test will be retaken)](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%E7%AC%94%E8%AF%95%E5%B0%86%E9%87%8D%E8%80%83%23) `1.1M 🔥` `NEW`
1. [曝综艺因辛芷蕾延播](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%BB%BC%E8%89%BA%E5%9B%A0%E8%BE%9B%E8%8A%B7%E8%95%BE%E5%BB%B6%E6%92%AD%23) `589.6K 🔥` `NEW`
1. [向鹏0比3张本智和](https://s.weibo.com/weibo?q=%23%E5%90%91%E9%B9%8F0%E6%AF%943%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `583.1K 🔥` `NEW`
1. [北京大雨](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%A4%A7%E9%9B%A8%23) `550.2K 🔥` `NEW`
1. [D社曝BLACKPINK十周年内幕](https://s.weibo.com/weibo?q=%23D%E7%A4%BE%E6%9B%9DBLACKPINK%E5%8D%81%E5%91%A8%E5%B9%B4%E5%86%85%E5%B9%95%23) `545.2K 🔥` `NEW`
1. [虞书欣王一栩将三搭我欲乘风](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%8E%8B%E4%B8%80%E6%A0%A9%E5%B0%86%E4%B8%89%E6%90%AD%E6%88%91%E6%AC%B2%E4%B9%98%E9%A3%8E%23) `527.7K 🔥` `NEW`
1. [前男友杀害女医学生案二审将宣判](https://s.weibo.com/weibo?q=%23%E5%89%8D%E7%94%B7%E5%8F%8B%E6%9D%80%E5%AE%B3%E5%A5%B3%E5%8C%BB%E5%AD%A6%E7%94%9F%E6%A1%88%E4%BA%8C%E5%AE%A1%E5%B0%86%E5%AE%A3%E5%88%A4%23) `523.3K 🔥` `NEW`
1. [女儿为争财产堵门阻挠父亲出殡](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E4%B8%BA%E4%BA%89%E8%B4%A2%E4%BA%A7%E5%A0%B5%E9%97%A8%E9%98%BB%E6%8C%A0%E7%88%B6%E4%BA%B2%E5%87%BA%E6%AE%A1%23) `518.5K 🔥` `NEW`
1. [三支一扶作弊案](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%E4%BD%9C%E5%BC%8A%E6%A1%88%23) `515.2K 🔥` `NEW`
1. [三支一扶 倒查](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%20%E5%80%92%E6%9F%A5%23) `511.4K 🔥` `NEW`
1. [张姩菡请峰学蔚来员工立秋喝奶茶 (Zhang Yanhan invites NIO employees to drink milk tea at the beginning of autumn)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A7%A9%E8%8F%A1%E8%AF%B7%E5%B3%B0%E5%AD%A6%E8%94%9A%E6%9D%A5%E5%91%98%E5%B7%A5%E7%AB%8B%E7%A7%8B%E5%96%9D%E5%A5%B6%E8%8C%B6%23) `484.8K 🔥` `NEW`
1. [中际旭创盘中大跳水](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%99%85%E6%97%AD%E5%88%9B%E7%9B%98%E4%B8%AD%E5%A4%A7%E8%B7%B3%E6%B0%B4%23) `421.4K 🔥` `NEW`
1. [立秋](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E7%A7%8B%23) `352.3K 🔥` `NEW`
1. [侯明昊回应违反交规](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E5%9B%9E%E5%BA%94%E8%BF%9D%E5%8F%8D%E4%BA%A4%E8%A7%84%23) `308.9K 🔥` `NEW`
1. [Codex十分钟剪完了一个月的视频](https://s.weibo.com/weibo?q=%23Codex%E5%8D%81%E5%88%86%E9%92%9F%E5%89%AA%E5%AE%8C%E4%BA%86%E4%B8%80%E4%B8%AA%E6%9C%88%E7%9A%84%E8%A7%86%E9%A2%91%23) `284.6K 🔥` `NEW`
1. [我欲乘风](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%AC%B2%E4%B9%98%E9%A3%8E%23) `273.6K 🔥` `NEW`
1. [姆巴佩领衔皇马新三叉戟](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E9%A2%86%E8%A1%94%E7%9A%87%E9%A9%AC%E6%96%B0%E4%B8%89%E5%8F%89%E6%88%9F%23) `265.8K 🔥` `NEW`
1. [飞机免费退改票真的来了](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E6%9C%BA%E5%85%8D%E8%B4%B9%E9%80%80%E6%94%B9%E7%A5%A8%E7%9C%9F%E7%9A%84%E6%9D%A5%E4%BA%86%23) `1.3M 🔥` `+97%`
1. [前7个月货物贸易进出口超30万亿元](https://s.weibo.com/weibo?q=%23%E5%89%8D7%E4%B8%AA%E6%9C%88%E8%B4%A7%E7%89%A9%E8%B4%B8%E6%98%93%E8%BF%9B%E5%87%BA%E5%8F%A3%E8%B6%8530%E4%B8%87%E4%BA%BF%E5%85%83%23) `1.1M 🔥` `+53%`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `1.1M 🔥` `+304%`
1. [张雅琪晒中餐厅10图 (Zhang Yaqi posted 10 pictures of Chinese restaurants)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E6%99%92%E4%B8%AD%E9%A4%90%E5%8E%8510%E5%9B%BE%23) `914.7K 🔥` `+23%`
1. [河南三支一扶笔试作弊犯罪细节](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%E7%AC%94%E8%AF%95%E4%BD%9C%E5%BC%8A%E7%8A%AF%E7%BD%AA%E7%BB%86%E8%8A%82%23) `410.9K 🔥` `+35%`
1. [宜宾 页岩气开采](https://s.weibo.com/weibo?q=%23%E5%AE%9C%E5%AE%BE%20%E9%A1%B5%E5%B2%A9%E6%B0%94%E5%BC%80%E9%87%87%23) `331.3K 🔥` `+27%`
1. [最尊重立秋的城市出现了](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%B0%8A%E9%87%8D%E7%AB%8B%E7%A7%8B%E7%9A%84%E5%9F%8E%E5%B8%82%E5%87%BA%E7%8E%B0%E4%BA%86%23) `1.1M 🔥`
1. [星巴克 秋天第一场商战 (Starbucks first business war in autumn)](https://s.weibo.com/weibo?q=%23%E6%98%9F%E5%B7%B4%E5%85%8B%20%E7%A7%8B%E5%A4%A9%E7%AC%AC%E4%B8%80%E5%9C%BA%E5%95%86%E6%88%98%23) `575.0K 🔥`
1. [大麦全年拦截恶意请求超60亿次](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%BA%A6%E5%85%A8%E5%B9%B4%E6%8B%A6%E6%88%AA%E6%81%B6%E6%84%8F%E8%AF%B7%E6%B1%82%E8%B6%8560%E4%BA%BF%E6%AC%A1%23) `570.1K 🔥`
1. [取消私生子继承权你支持吗](https://s.weibo.com/weibo?q=%23%E5%8F%96%E6%B6%88%E7%A7%81%E7%94%9F%E5%AD%90%E7%BB%A7%E6%89%BF%E6%9D%83%E4%BD%A0%E6%94%AF%E6%8C%81%E5%90%97%23) `557.3K 🔥`
1. [马嘉祺演唱会刚结束又工作了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E6%BC%94%E5%94%B1%E4%BC%9A%E5%88%9A%E7%BB%93%E6%9D%9F%E5%8F%88%E5%B7%A5%E4%BD%9C%E4%BA%86%23) `526.7K 🔥`
1. [泰国校园枪击已致7死](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%A0%A1%E5%9B%AD%E6%9E%AA%E5%87%BB%E5%B7%B2%E8%87%B47%E6%AD%BB%23) `524.7K 🔥`
1. [高速飞来轮胎致车主昏迷爱车独自完成全套救援 (A tire flew in at high speed, causing the car owner to fall into coma. The car completed a complete rescue operation alone)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%80%9F%E9%A3%9E%E6%9D%A5%E8%BD%AE%E8%83%8E%E8%87%B4%E8%BD%A6%E4%B8%BB%E6%98%8F%E8%BF%B7%E7%88%B1%E8%BD%A6%E7%8B%AC%E8%87%AA%E5%AE%8C%E6%88%90%E5%85%A8%E5%A5%97%E6%95%91%E6%8F%B4%23) `521.4K 🔥`
1. [南航 西梅汁 (China Southern Airlines prune juice)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E8%88%AA%20%E8%A5%BF%E6%A2%85%E6%B1%81%23) `520.2K 🔥`
1. [原来这就是抑郁躯体化](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E5%B0%B1%E6%98%AF%E6%8A%91%E9%83%81%E8%BA%AF%E4%BD%93%E5%8C%96%23) `517.6K 🔥`
1. [中山医院陷婚外胚胎风波职工哽咽 (Employees of Zhongshan Hospital choked up due to extramarital embryo scandal)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%B1%B1%E5%8C%BB%E9%99%A2%E9%99%B7%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E9%A3%8E%E6%B3%A2%E8%81%8C%E5%B7%A5%E5%93%BD%E5%92%BD%23) `500.9K 🔥`
1. [河南三支一扶作弊团伙被抓](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%E4%BD%9C%E5%BC%8A%E5%9B%A2%E4%BC%99%E8%A2%AB%E6%8A%93%23) `292.7K 🔥`
1. [Mina同学发声 (Mina classmate speaks out)](https://s.weibo.com/weibo?q=%23Mina%E5%90%8C%E5%AD%A6%E5%8F%91%E5%A3%B0%23) `291.7K 🔥`
1. [时代少年团黄牛落网 (Time Youth League scalpers arrested)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E9%BB%84%E7%89%9B%E8%90%BD%E7%BD%91%23) `271.8K 🔥`
1. [恋与制作人](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E5%88%B6%E4%BD%9C%E4%BA%BA%23) `270.2K 🔥`
1. [iPhone18Pro系列价格预测](https://s.weibo.com/weibo?q=%23iPhone18Pro%E7%B3%BB%E5%88%97%E4%BB%B7%E6%A0%BC%E9%A2%84%E6%B5%8B%23) `263.6K 🔥`
1. [稀物集品牌大使黄星邱鼎杰 (Xiwuji Brand Ambassador Huang Xing Qiu Dingjie)](https://s.weibo.com/weibo?q=%23%E7%A8%80%E7%89%A9%E9%9B%86%E5%93%81%E7%89%8C%E5%A4%A7%E4%BD%BF%E9%BB%84%E6%98%9F%E9%82%B1%E9%BC%8E%E6%9D%B0%23) `722.9K 🔥` `-28%`
1. [河南三支一扶考试存规模性组织作弊 (There are large-scale organized cheating in Henan's three branches and one support examination)](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%E8%80%83%E8%AF%95%E5%AD%98%E8%A7%84%E6%A8%A1%E6%80%A7%E7%BB%84%E7%BB%87%E4%BD%9C%E5%BC%8A%23) `535.8K 🔥` `-43%`
1. [网友偶遇樊振东保养汽车](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%81%B6%E9%81%87%E6%A8%8A%E6%8C%AF%E4%B8%9C%E4%BF%9D%E5%85%BB%E6%B1%BD%E8%BD%A6%23) `528.8K 🔥` `-28%`
1. [不要空腹吃龙口粉丝 (Don’t eat Longkou vermicelli on an empty stomach)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E7%A9%BA%E8%85%B9%E5%90%83%E9%BE%99%E5%8F%A3%E7%B2%89%E4%B8%9D%23) `516.0K 🔥` `-22%`
1. [虞书欣工作室晒小兰花未公开照](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%B7%A5%E4%BD%9C%E5%AE%A4%E6%99%92%E5%B0%8F%E5%85%B0%E8%8A%B1%E6%9C%AA%E5%85%AC%E5%BC%80%E7%85%A7%23) `468.7K 🔥` `-34%`
1. [影视寒冬 进组难](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E5%AF%92%E5%86%AC%20%E8%BF%9B%E7%BB%84%E9%9A%BE%23) `403.4K 🔥` `-31%`
1. [吴倩女儿长这么大了](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%80%A9%E5%A5%B3%E5%84%BF%E9%95%BF%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `390.9K 🔥` `-36%`
1. [女儿卖房定价9000被母亲7500签约](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E5%8D%96%E6%88%BF%E5%AE%9A%E4%BB%B79000%E8%A2%AB%E6%AF%8D%E4%BA%B27500%E7%AD%BE%E7%BA%A6%23) `285.6K 🔥` `-34%`
1. [情侣酒店熟睡遭陌生男闯入站床前](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E9%85%92%E5%BA%97%E7%86%9F%E7%9D%A1%E9%81%AD%E9%99%8C%E7%94%9F%E7%94%B7%E9%97%AF%E5%85%A5%E7%AB%99%E5%BA%8A%E5%89%8D%23) `283.7K 🔥` `-27%`
1. [李云泽严重违纪违法](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BA%91%E6%B3%BD%E4%B8%A5%E9%87%8D%E8%BF%9D%E7%BA%AA%E8%BF%9D%E6%B3%95%23) `274.6K 🔥` `-41%`
1. [戚薇AI短剧 雷霆视角 (Qi Wei AI short drama Thunder perspective)](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%87AI%E7%9F%AD%E5%89%A7%20%E9%9B%B7%E9%9C%86%E8%A7%86%E8%A7%92%23) `268.6K 🔥` `-28%`
1. [建议成立中国稀土出口总公司总部设新疆 (It is recommended to establish China Rare Earth Export Corporation with its headquarters in Xinjiang)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%88%90%E7%AB%8B%E4%B8%AD%E5%9B%BD%E7%A8%80%E5%9C%9F%E5%87%BA%E5%8F%A3%E6%80%BB%E5%85%AC%E5%8F%B8%E6%80%BB%E9%83%A8%E8%AE%BE%E6%96%B0%E7%96%86%23) `263.9K 🔥` `-29%`
1. [河南三支一扶考务人员勾结嫌疑人泄题](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%E8%80%83%E5%8A%A1%E4%BA%BA%E5%91%98%E5%8B%BE%E7%BB%93%E5%AB%8C%E7%96%91%E4%BA%BA%E6%B3%84%E9%A2%98%23) `261.8K 🔥` `-30%`

Updated at 2026-08-07 18:36:27

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
