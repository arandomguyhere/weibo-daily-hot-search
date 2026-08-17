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

1. [员工23次上班迟到17次被AI解雇 (Employees were late for work 23 times and were fired by AI 17 times)](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A523%E6%AC%A1%E4%B8%8A%E7%8F%AD%E8%BF%9F%E5%88%B017%E6%AC%A1%E8%A2%ABAI%E8%A7%A3%E9%9B%87%23) `875.3K 🔥` `NEW`
1. [大批AI博主停更了](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E6%89%B9AI%E5%8D%9A%E4%B8%BB%E5%81%9C%E6%9B%B4%E4%BA%86%23) `675.0K 🔥` `NEW`
1. [花开锦绣](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%23) `644.7K 🔥` `NEW`
1. [丁禹兮给结婚粉丝送黄金](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E7%BB%99%E7%BB%93%E5%A9%9A%E7%B2%89%E4%B8%9D%E9%80%81%E9%BB%84%E9%87%91%23) `262.9K 🔥` `NEW`
1. [彭宇案 彭宇确实碰了老人](https://s.weibo.com/weibo?q=%23%E5%BD%AD%E5%AE%87%E6%A1%88%20%E5%BD%AD%E5%AE%87%E7%A1%AE%E5%AE%9E%E7%A2%B0%E4%BA%86%E8%80%81%E4%BA%BA%23) `261.9K 🔥` `NEW`
1. [张真源吃饭戴围兜](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%90%83%E9%A5%AD%E6%88%B4%E5%9B%B4%E5%85%9C%23) `261.7K 🔥` `NEW`
1. [八一七稻米节 直播违规](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%B8%80%E4%B8%83%E7%A8%BB%E7%B1%B3%E8%8A%82%20%E7%9B%B4%E6%92%AD%E8%BF%9D%E8%A7%84%23) `259.2K 🔥` `NEW`
1. [3孩非亲生父亲谈婚外胚胎案](https://s.weibo.com/weibo?q=%233%E5%AD%A9%E9%9D%9E%E4%BA%B2%E7%94%9F%E7%88%B6%E4%BA%B2%E8%B0%88%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E6%A1%88%23) `242.7K 🔥` `NEW`
1. [AI做的日剧太逼真了](https://s.weibo.com/weibo?q=%23AI%E5%81%9A%E7%9A%84%E6%97%A5%E5%89%A7%E5%A4%AA%E9%80%BC%E7%9C%9F%E4%BA%86%23) `236.0K 🔥` `NEW`
1. [结婚后才明白的事](https://s.weibo.com/weibo?q=%23%E7%BB%93%E5%A9%9A%E5%90%8E%E6%89%8D%E6%98%8E%E7%99%BD%E7%9A%84%E4%BA%8B%23) `232.8K 🔥` `NEW`
1. [广东多地物业费下调 (Property fees are reduced in many places in Guangdong)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E5%A4%9A%E5%9C%B0%E7%89%A9%E4%B8%9A%E8%B4%B9%E4%B8%8B%E8%B0%83%23) `229.5K 🔥` `NEW`
1. [稻米节](https://s.weibo.com/weibo?q=%23%E7%A8%BB%E7%B1%B3%E8%8A%82%23) `227.6K 🔥` `NEW`
1. [Jennie疑似回应音乐节争议](https://s.weibo.com/weibo?q=%23Jennie%E7%96%91%E4%BC%BC%E5%9B%9E%E5%BA%94%E9%9F%B3%E4%B9%90%E8%8A%82%E4%BA%89%E8%AE%AE%23) `225.3K 🔥` `NEW`
1. [今天市场暴涨原因](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%A9%E5%B8%82%E5%9C%BA%E6%9A%B4%E6%B6%A8%E5%8E%9F%E5%9B%A0%23) `595.5K 🔥` `+64%`
1. [协和医生破解22年数学难题论文被扒](https://s.weibo.com/weibo?q=%23%E5%8D%8F%E5%92%8C%E5%8C%BB%E7%94%9F%E7%A0%B4%E8%A7%A322%E5%B9%B4%E6%95%B0%E5%AD%A6%E9%9A%BE%E9%A2%98%E8%AE%BA%E6%96%87%E8%A2%AB%E6%89%92%23) `593.5K 🔥` `+22%`
1. [胖东来被指招强奸犯](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E8%A2%AB%E6%8C%87%E6%8B%9B%E5%BC%BA%E5%A5%B8%E7%8A%AF%23) `573.6K 🔥` `+44%`
1. [王菲基因发力了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E5%9F%BA%E5%9B%A0%E5%8F%91%E5%8A%9B%E4%BA%86%23) `558.2K 🔥` `+43%`
1. [王奕告别丝芭传媒](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%A5%95%E5%91%8A%E5%88%AB%E4%B8%9D%E8%8A%AD%E4%BC%A0%E5%AA%92%23) `487.7K 🔥` `+92%`
1. [一款韩奸祖先查询器在韩国走红](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%AC%BE%E9%9F%A9%E5%A5%B8%E7%A5%96%E5%85%88%E6%9F%A5%E8%AF%A2%E5%99%A8%E5%9C%A8%E9%9F%A9%E5%9B%BD%E8%B5%B0%E7%BA%A2%23) `250.9K 🔥` `+45%`
1. [四川巴中3999万资金等待认领](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%B7%B4%E4%B8%AD3999%E4%B8%87%E8%B5%84%E9%87%91%E7%AD%89%E5%BE%85%E8%AE%A4%E9%A2%86%23) `249.6K 🔥` `+45%`
1. [女孩顺风车内暴晒2小时向家人求救 (Girl was exposed to the sun for 2 hours in a hitchhiking car and asked for help from her family)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E9%A1%BA%E9%A3%8E%E8%BD%A6%E5%86%85%E6%9A%B4%E6%99%922%E5%B0%8F%E6%97%B6%E5%90%91%E5%AE%B6%E4%BA%BA%E6%B1%82%E6%95%91%23) `1.4M 🔥`
1. [第一视角体验非遗文旅 (Experience intangible cultural heritage tourism from a first perspective)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E8%A7%86%E8%A7%92%E4%BD%93%E9%AA%8C%E9%9D%9E%E9%81%97%E6%96%87%E6%97%85%23) `716.5K 🔥`
1. [博尔特不再是世界第一了 (Bolt is no longer world number one)](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E5%B0%94%E7%89%B9%E4%B8%8D%E5%86%8D%E6%98%AF%E4%B8%96%E7%95%8C%E7%AC%AC%E4%B8%80%E4%BA%86%23) `714.8K 🔥`
1. [日本用AI批量炮制虚假历史 (Japan uses AI to mass-produce false history)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%94%A8AI%E6%89%B9%E9%87%8F%E7%82%AE%E5%88%B6%E8%99%9A%E5%81%87%E5%8E%86%E5%8F%B2%23) `649.0K 🔥`
1. [宇树超人能原地跳高2米 (Yushu Superman can jump 2 meters high on the spot)](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E8%B6%85%E4%BA%BA%E8%83%BD%E5%8E%9F%E5%9C%B0%E8%B7%B3%E9%AB%982%E7%B1%B3%23) `298.2K 🔥`
1. [迪丽热巴黑框镜卫衣叠穿 (Dilireba black frame mirror sweatshirt layering)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%BB%91%E6%A1%86%E9%95%9C%E5%8D%AB%E8%A1%A3%E5%8F%A0%E7%A9%BF%23) `271.7K 🔥`
1. [孙颖莎王曼昱仅差708分 (Sun Yingsha and Wang Manyu are only 708 points apart)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%8E%8B%E6%9B%BC%E6%98%B1%E4%BB%85%E5%B7%AE708%E5%88%86%23) `260.3K 🔥`
1. [陈都灵吃到关晓彤的瓜会去求证 (Chen Duling will seek confirmation after eating Guan Xiaotong's melon)](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E5%90%83%E5%88%B0%E5%85%B3%E6%99%93%E5%BD%A4%E7%9A%84%E7%93%9C%E4%BC%9A%E5%8E%BB%E6%B1%82%E8%AF%81%23) `251.7K 🔥`
1. [胡一天去韩国也逃不过三件套](https://s.weibo.com/weibo?q=%23%E8%83%A1%E4%B8%80%E5%A4%A9%E5%8E%BB%E9%9F%A9%E5%9B%BD%E4%B9%9F%E9%80%83%E4%B8%8D%E8%BF%87%E4%B8%89%E4%BB%B6%E5%A5%97%23) `232.0K 🔥`
1. [手机壳 性早熟](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E5%A3%B3%20%E6%80%A7%E6%97%A9%E7%86%9F%23) `231.1K 🔥`
1. [汪苏泷内场没几个人挥荧光棒的](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%86%85%E5%9C%BA%E6%B2%A1%E5%87%A0%E4%B8%AA%E4%BA%BA%E6%8C%A5%E8%8D%A7%E5%85%89%E6%A3%92%E7%9A%84%23) `229.0K 🔥`
1. [刘亦菲成都](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E6%88%90%E9%83%BD%23) `224.2K 🔥`
1. [泡面不健康不是因为防腐剂](https://s.weibo.com/weibo?q=%23%E6%B3%A1%E9%9D%A2%E4%B8%8D%E5%81%A5%E5%BA%B7%E4%B8%8D%E6%98%AF%E5%9B%A0%E4%B8%BA%E9%98%B2%E8%85%90%E5%89%82%23) `651.3K 🔥` `-21%`
1. [宇树发布超人机器人 (Yushu releases superman robot)](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E5%8F%91%E5%B8%83%E8%B6%85%E4%BA%BA%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `629.8K 🔥` `-24%`
1. [AG狼队竟然联手了](https://s.weibo.com/weibo?q=%23AG%E7%8B%BC%E9%98%9F%E7%AB%9F%E7%84%B6%E8%81%94%E6%89%8B%E4%BA%86%23) `257.5K 🔥` `-22%`
1. [蓝盈莹承认恋情](https://s.weibo.com/weibo?q=%23%E8%93%9D%E7%9B%88%E8%8E%B9%E6%89%BF%E8%AE%A4%E6%81%8B%E6%83%85%23) `256.2K 🔥` `-25%`
1. [Jennie不得不用头发遮挡 (Jennie had to cover it up with her hair)](https://s.weibo.com/weibo?q=%23Jennie%E4%B8%8D%E5%BE%97%E4%B8%8D%E7%94%A8%E5%A4%B4%E5%8F%91%E9%81%AE%E6%8C%A1%23) `255.1K 🔥` `-35%`
1. [怎么发现一个人不是好人 (How do you find out that someone is not a good person?)](https://s.weibo.com/weibo?q=%23%E6%80%8E%E4%B9%88%E5%8F%91%E7%8E%B0%E4%B8%80%E4%B8%AA%E4%BA%BA%E4%B8%8D%E6%98%AF%E5%A5%BD%E4%BA%BA%23) `253.6K 🔥` `-23%`
1. [小欢喜未播出镜头 (Unbroadcast scenes of Little Joy)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%AC%A2%E5%96%9C%E6%9C%AA%E6%92%AD%E5%87%BA%E9%95%9C%E5%A4%B4%23) `253.0K 🔥` `-22%`
1. [原来排卵期一直被误解了 (It turns out that the ovulation period has been misunderstood.)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%8E%92%E5%8D%B5%E6%9C%9F%E4%B8%80%E7%9B%B4%E8%A2%AB%E8%AF%AF%E8%A7%A3%E4%BA%86%23) `248.7K 🔥` `-26%`
1. [父子在海拔4000米高原发现塔黄 (Father and son discovered Tahuang on a plateau 4,000 meters above sea level)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E5%AD%90%E5%9C%A8%E6%B5%B7%E6%8B%944000%E7%B1%B3%E9%AB%98%E5%8E%9F%E5%8F%91%E7%8E%B0%E5%A1%94%E9%BB%84%23) `247.4K 🔥` `-21%`
1. [球场上穿利刃7的狠人](https://s.weibo.com/weibo?q=%23%E7%90%83%E5%9C%BA%E4%B8%8A%E7%A9%BF%E5%88%A9%E5%88%837%E7%9A%84%E7%8B%A0%E4%BA%BA%23) `245.5K 🔥` `-32%`
1. [蓝盈莹曹骏在一起三年 (Lan Yingying and Cao Jun have been together for three years)](https://s.weibo.com/weibo?q=%23%E8%93%9D%E7%9B%88%E8%8E%B9%E6%9B%B9%E9%AA%8F%E5%9C%A8%E4%B8%80%E8%B5%B7%E4%B8%89%E5%B9%B4%23) `245.0K 🔥` `-23%`
1. [爸爸说幸不幸福跟嫁给谁没关系](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E8%AF%B4%E5%B9%B8%E4%B8%8D%E5%B9%B8%E7%A6%8F%E8%B7%9F%E5%AB%81%E7%BB%99%E8%B0%81%E6%B2%A1%E5%85%B3%E7%B3%BB%23) `243.9K 🔥` `-33%`
1. [张桂源红发 (Zhang Guiyuan red hair)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%A1%82%E6%BA%90%E7%BA%A2%E5%8F%91%23) `241.9K 🔥` `-22%`
1. [牙齿疼一夜钻开瞬间流出脓血](https://s.weibo.com/weibo?q=%23%E7%89%99%E9%BD%BF%E7%96%BC%E4%B8%80%E5%A4%9C%E9%92%BB%E5%BC%80%E7%9E%AC%E9%97%B4%E6%B5%81%E5%87%BA%E8%84%93%E8%A1%80%23) `240.5K 🔥` `-22%`
1. [青山刚昌回应名侦探柯南大结局](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B1%B1%E5%88%9A%E6%98%8C%E5%9B%9E%E5%BA%94%E5%90%8D%E4%BE%A6%E6%8E%A2%E6%9F%AF%E5%8D%97%E5%A4%A7%E7%BB%93%E5%B1%80%23) `239.0K 🔥` `-40%`
1. [B站大物是也停更](https://s.weibo.com/weibo?q=%23B%E7%AB%99%E5%A4%A7%E7%89%A9%E6%98%AF%E4%B9%9F%E5%81%9C%E6%9B%B4%23) `238.2K 🔥` `-39%`
1. [黄山一猴子误触高压电身亡](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%B1%B1%E4%B8%80%E7%8C%B4%E5%AD%90%E8%AF%AF%E8%A7%A6%E9%AB%98%E5%8E%8B%E7%94%B5%E8%BA%AB%E4%BA%A1%23) `237.3K 🔥` `-45%`
1. [桃黑黑 录音](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%20%E5%BD%95%E9%9F%B3%23) `235.0K 🔥` `-40%`
1. [A股牛终于来了吗 (Is the A-share bull finally here?)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E7%89%9B%E7%BB%88%E4%BA%8E%E6%9D%A5%E4%BA%86%E5%90%97%23) `226.6K 🔥` `-29%`

Updated at 2026-08-17 19:44:22

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
