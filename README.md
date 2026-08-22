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

1. [张婧仪大理素颜爬山 (Zhang Jingyi Dali mountain climbing without makeup)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%A4%A7%E7%90%86%E7%B4%A0%E9%A2%9C%E7%88%AC%E5%B1%B1%23) `308.3K 🔥` `NEW`
1. [宁艺卓担任TIMA主持人](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E6%8B%85%E4%BB%BBTIMA%E4%B8%BB%E6%8C%81%E4%BA%BA%23) `206.7K 🔥` `NEW`
1. [F1](https://s.weibo.com/weibo?q=%23F1%23) `175.8K 🔥` `NEW`
1. [无畏契约明星表演赛](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E5%A5%91%E7%BA%A6%E6%98%8E%E6%98%9F%E8%A1%A8%E6%BC%94%E8%B5%9B%23) `175.6K 🔥` `NEW`
1. [男子出轨保险女业务员投保千万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%87%BA%E8%BD%A8%E4%BF%9D%E9%99%A9%E5%A5%B3%E4%B8%9A%E5%8A%A1%E5%91%98%E6%8A%95%E4%BF%9D%E5%8D%83%E4%B8%87%23) `149.5K 🔥` `NEW`
1. [突然发现善意是流动的](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E5%96%84%E6%84%8F%E6%98%AF%E6%B5%81%E5%8A%A8%E7%9A%84%23) `127.3K 🔥` `NEW`
1. [李灿荣全中文主持](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%81%BF%E8%8D%A3%E5%85%A8%E4%B8%AD%E6%96%87%E4%B8%BB%E6%8C%81%23) `121.2K 🔥` `NEW`
1. [LGD晋级季后赛](https://s.weibo.com/weibo?q=%23LGD%E6%99%8B%E7%BA%A7%E5%AD%A3%E5%90%8E%E8%B5%9B%23) `116.3K 🔥` `NEW`
1. [人形机器人为什么一定要是人形](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%80%E5%AE%9A%E8%A6%81%E6%98%AF%E4%BA%BA%E5%BD%A2%23) `115.7K 🔥` `NEW`
1. [台风简拉维](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%AE%80%E6%8B%89%E7%BB%B4%23) `115.6K 🔥` `NEW`
1. [F1荷兰大奖赛冲刺赛 (F1 Dutch Grand Prix Sprint)](https://s.weibo.com/weibo?q=%23F1%E8%8D%B7%E5%85%B0%E5%A4%A7%E5%A5%96%E8%B5%9B%E5%86%B2%E5%88%BA%E8%B5%9B%23) `110.3K 🔥` `NEW`
1. [台湾节目嘉宾说北京没有冰箱引群嘲](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E8%8A%82%E7%9B%AE%E5%98%89%E5%AE%BE%E8%AF%B4%E5%8C%97%E4%BA%AC%E6%B2%A1%E6%9C%89%E5%86%B0%E7%AE%B1%E5%BC%95%E7%BE%A4%E5%98%B2%23) `1.2M 🔥` `+115%`
1. [范丞丞同款艾尼氪V预售11.99万起 (Fan Chengcheng’s same model Aini Krypton V is available for pre-sale starting from 119,900)](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E5%90%8C%E6%AC%BE%E8%89%BE%E5%B0%BC%E6%B0%AAV%E9%A2%84%E5%94%AE11.99%E4%B8%87%E8%B5%B7%23) `986.9K 🔥` `+42%`
1. [巫哲顶着这张脸叫狗蛋儿](https://s.weibo.com/weibo?q=%23%E5%B7%AB%E5%93%B2%E9%A1%B6%E7%9D%80%E8%BF%99%E5%BC%A0%E8%84%B8%E5%8F%AB%E7%8B%97%E8%9B%8B%E5%84%BF%23) `930.9K 🔥` `+140%`
1. [30万内终于等到带quattro的智能SUV (Finally waited for a smart SUV with quattro for less than 300,000 yuan)](https://s.weibo.com/weibo?q=%2330%E4%B8%87%E5%86%85%E7%BB%88%E4%BA%8E%E7%AD%89%E5%88%B0%E5%B8%A6quattro%E7%9A%84%E6%99%BA%E8%83%BDSUV%23) `827.1K 🔥` `+61%`
1. [逐玉长月烬明版权费上千万](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E9%95%BF%E6%9C%88%E7%83%AC%E6%98%8E%E7%89%88%E6%9D%83%E8%B4%B9%E4%B8%8A%E5%8D%83%E4%B8%87%23) `779.8K 🔥` `+121%`
1. [父子因iPhone争执坠崖母亲也跳下](https://s.weibo.com/weibo?q=%23%E7%88%B6%E5%AD%90%E5%9B%A0iPhone%E4%BA%89%E6%89%A7%E5%9D%A0%E5%B4%96%E6%AF%8D%E4%BA%B2%E4%B9%9F%E8%B7%B3%E4%B8%8B%23) `241.1K 🔥` `+47%`
1. [龙餐馆](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%23) `239.1K 🔥` `+96%`
1. [甲醛白菜 工人癌症风险](https://s.weibo.com/weibo?q=%23%E7%94%B2%E9%86%9B%E7%99%BD%E8%8F%9C%20%E5%B7%A5%E4%BA%BA%E7%99%8C%E7%97%87%E9%A3%8E%E9%99%A9%23) `2.2M 🔥`
1. [6图看财政清单里的民生温度](https://s.weibo.com/weibo?q=%236%E5%9B%BE%E7%9C%8B%E8%B4%A2%E6%94%BF%E6%B8%85%E5%8D%95%E9%87%8C%E7%9A%84%E6%B0%91%E7%94%9F%E6%B8%A9%E5%BA%A6%23) `1.0M 🔥`
1. [李乃文声明王玉雯哭跟他没关系](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B9%83%E6%96%87%E5%A3%B0%E6%98%8E%E7%8E%8B%E7%8E%89%E9%9B%AF%E5%93%AD%E8%B7%9F%E4%BB%96%E6%B2%A1%E5%85%B3%E7%B3%BB%23) `915.2K 🔥`
1. [那英演唱会](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E6%BC%94%E5%94%B1%E4%BC%9A%23) `879.5K 🔥`
1. [甲醛白菜流向哪里 (Where does formaldehyde go?)](https://s.weibo.com/weibo?q=%23%E7%94%B2%E9%86%9B%E7%99%BD%E8%8F%9C%E6%B5%81%E5%90%91%E5%93%AA%E9%87%8C%23) `822.0K 🔥`
1. [亚运会电子竞技项目国家队成立 (Asian Games e-sports national team established)](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E7%94%B5%E5%AD%90%E7%AB%9E%E6%8A%80%E9%A1%B9%E7%9B%AE%E5%9B%BD%E5%AE%B6%E9%98%9F%E6%88%90%E7%AB%8B%23) `601.5K 🔥`
1. [墨香铜臭 亿级版权 (The fragrance of ink and the smell of copper, billion-level copyright)](https://s.weibo.com/weibo?q=%23%E5%A2%A8%E9%A6%99%E9%93%9C%E8%87%AD%20%E4%BA%BF%E7%BA%A7%E7%89%88%E6%9D%83%23) `379.0K 🔥`
1. [李一桐被毒虫咬了脸](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E8%A2%AB%E6%AF%92%E8%99%AB%E5%92%AC%E4%BA%86%E8%84%B8%23) `378.4K 🔥`
1. [钟丽缇助眠 张伦硕把大家崩醒了](https://s.weibo.com/weibo?q=%23%E9%92%9F%E4%B8%BD%E7%BC%87%E5%8A%A9%E7%9C%A0%20%E5%BC%A0%E4%BC%A6%E7%A1%95%E6%8A%8A%E5%A4%A7%E5%AE%B6%E5%B4%A9%E9%86%92%E4%BA%86%23) `377.4K 🔥`
1. [晋江作者大会 (Jinjiang Author Conference)](https://s.weibo.com/weibo?q=%23%E6%99%8B%E6%B1%9F%E4%BD%9C%E8%80%85%E5%A4%A7%E4%BC%9A%23) `375.1K 🔥`
1. [王菲给那英送花篮了 (Faye Wong sent a flower basket to Na Ying)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E7%BB%99%E9%82%A3%E8%8B%B1%E9%80%81%E8%8A%B1%E7%AF%AE%E4%BA%86%23) `370.6K 🔥`
1. [TOP彩排goodthings (TOP rehearsalgoodthings)](https://s.weibo.com/weibo?q=%23TOP%E5%BD%A9%E6%8E%92goodthings%23) `304.4K 🔥`
1. [ACC辅助驾驶追撞致3人死亡](https://s.weibo.com/weibo?q=%23ACC%E8%BE%85%E5%8A%A9%E9%A9%BE%E9%A9%B6%E8%BF%BD%E6%92%9E%E8%87%B43%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `303.2K 🔥`
1. [亚朵卖枕头被子收入快赶上酒店主业](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E6%9C%B5%E5%8D%96%E6%9E%95%E5%A4%B4%E8%A2%AB%E5%AD%90%E6%94%B6%E5%85%A5%E5%BF%AB%E8%B5%B6%E4%B8%8A%E9%85%92%E5%BA%97%E4%B8%BB%E4%B8%9A%23) `300.0K 🔥`
1. [一点没有情趣的直男震撼](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%82%B9%E6%B2%A1%E6%9C%89%E6%83%85%E8%B6%A3%E7%9A%84%E7%9B%B4%E7%94%B7%E9%9C%87%E6%92%BC%23) `297.7K 🔥`
1. [范丞丞的车展OOTD](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E7%9A%84%E8%BD%A6%E5%B1%95OOTD%23) `291.3K 🔥`
1. [亚运会 (Asian Games)](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `290.4K 🔥`
1. [巫哲首次公开露脸 (Wu Zhe's first public appearance)](https://s.weibo.com/weibo?q=%23%E5%B7%AB%E5%93%B2%E9%A6%96%E6%AC%A1%E5%85%AC%E5%BC%80%E9%9C%B2%E8%84%B8%23) `280.6K 🔥`
1. [稚楚美到我了 (Childish and beautiful to me)](https://s.weibo.com/weibo?q=%23%E7%A8%9A%E6%A5%9A%E7%BE%8E%E5%88%B0%E6%88%91%E4%BA%86%23) `269.5K 🔥`
1. [迪丽热巴无名指珍珠戒指](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%97%A0%E5%90%8D%E6%8C%87%E7%8F%8D%E7%8F%A0%E6%88%92%E6%8C%87%23) `251.0K 🔥`
1. [高市早苗搬出孔子言论强行辩解 (Sanae Takaichi used Confucius’ remarks to forcefully defend himself)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E6%90%AC%E5%87%BA%E5%AD%94%E5%AD%90%E8%A8%80%E8%AE%BA%E5%BC%BA%E8%A1%8C%E8%BE%A9%E8%A7%A3%23) `239.8K 🔥`
1. [中国留学生吐槽回国后学历贬值](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%95%99%E5%AD%A6%E7%94%9F%E5%90%90%E6%A7%BD%E5%9B%9E%E5%9B%BD%E5%90%8E%E5%AD%A6%E5%8E%86%E8%B4%AC%E5%80%BC%23) `239.6K 🔥`
1. [大明王朝1566](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E6%98%8E%E7%8E%8B%E6%9C%9D1566%23) `152.3K 🔥`
1. [严浩翔穿的什么鞋子 (What shoes is Yan Haoxiang wearing?)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%A9%BF%E7%9A%84%E4%BB%80%E4%B9%88%E9%9E%8B%E5%AD%90%23) `147.2K 🔥`
1. [白菜蘸甲醛 (Cabbage dipped in formaldehyde)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E8%8F%9C%E8%98%B8%E7%94%B2%E9%86%9B%23) `380.2K 🔥` `-60%`
1. [55元捡漏1.41万项链女子获5元补偿](https://s.weibo.com/weibo?q=%2355%E5%85%83%E6%8D%A1%E6%BC%8F1.41%E4%B8%87%E9%A1%B9%E9%93%BE%E5%A5%B3%E5%AD%90%E8%8E%B75%E5%85%83%E8%A1%A5%E5%81%BF%23) `344.6K 🔥` `-67%`
1. [晋江热门作品版权费好贵 (Copyright fees for popular works in Jinjiang are so expensive)](https://s.weibo.com/weibo?q=%23%E6%99%8B%E6%B1%9F%E7%83%AD%E9%97%A8%E4%BD%9C%E5%93%81%E7%89%88%E6%9D%83%E8%B4%B9%E5%A5%BD%E8%B4%B5%23) `280.3K 🔥` `-29%`
1. [白血病不再是不治之症](https://s.weibo.com/weibo?q=%23%E7%99%BD%E8%A1%80%E7%97%85%E4%B8%8D%E5%86%8D%E6%98%AF%E4%B8%8D%E6%B2%BB%E4%B9%8B%E7%97%87%23) `175.9K 🔥` `-25%`
1. [关晓彤走机场也戴负重手环](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E8%B5%B0%E6%9C%BA%E5%9C%BA%E4%B9%9F%E6%88%B4%E8%B4%9F%E9%87%8D%E6%89%8B%E7%8E%AF%23) `175.8K 🔥` `-29%`
1. [陈伟霆十年了还没释怀人贩子梗 (William Chan still hasn’t let go of the human trafficker plot after ten years)](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E5%8D%81%E5%B9%B4%E4%BA%86%E8%BF%98%E6%B2%A1%E9%87%8A%E6%80%80%E4%BA%BA%E8%B4%A9%E5%AD%90%E6%A2%97%23) `175.6K 🔥` `-26%`
1. [aespaTIMA红毯](https://s.weibo.com/weibo?q=%23aespaTIMA%E7%BA%A2%E6%AF%AF%23) `147.2K 🔥` `-30%`
1. [私生尾随王橹杰或涉嫌违法](https://s.weibo.com/weibo?q=%23%E7%A7%81%E7%94%9F%E5%B0%BE%E9%9A%8F%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%88%96%E6%B6%89%E5%AB%8C%E8%BF%9D%E6%B3%95%23) `126.4K 🔥` `-23%`
1. [医生说再差的精子都能做试管](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E8%AF%B4%E5%86%8D%E5%B7%AE%E7%9A%84%E7%B2%BE%E5%AD%90%E9%83%BD%E8%83%BD%E5%81%9A%E8%AF%95%E7%AE%A1%23) `116.0K 🔥` `-21%`

Updated at 2026-08-22 18:51:14

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
