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

1. [越来越多宝藏小城藏不住了 (More and more treasures can no longer be hidden in this small town.)](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%A4%9A%E5%AE%9D%E8%97%8F%E5%B0%8F%E5%9F%8E%E8%97%8F%E4%B8%8D%E4%BD%8F%E4%BA%86%23) `1.0M 🔥` `NEW`
1. [一张人民币打脸民族文化灭绝谣言](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%BC%A0%E4%BA%BA%E6%B0%91%E5%B8%81%E6%89%93%E8%84%B8%E6%B0%91%E6%97%8F%E6%96%87%E5%8C%96%E7%81%AD%E7%BB%9D%E8%B0%A3%E8%A8%80%23) `535.8K 🔥` `NEW`
1. [无畏契约](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E5%A5%91%E7%BA%A6%23) `248.6K 🔥` `NEW`
1. [欢子入院 美容院](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%E5%85%A5%E9%99%A2%20%E7%BE%8E%E5%AE%B9%E9%99%A2%23) `247.7K 🔥` `NEW`
1. [戴了40多年的劳力士寄修途中被弄丢](https://s.weibo.com/weibo?q=%23%E6%88%B4%E4%BA%8640%E5%A4%9A%E5%B9%B4%E7%9A%84%E5%8A%B3%E5%8A%9B%E5%A3%AB%E5%AF%84%E4%BF%AE%E9%80%94%E4%B8%AD%E8%A2%AB%E5%BC%84%E4%B8%A2%23) `244.8K 🔥` `NEW`
1. [胡锡进感叹甲醛白菜触目惊心](https://s.weibo.com/weibo?q=%23%E8%83%A1%E9%94%A1%E8%BF%9B%E6%84%9F%E5%8F%B9%E7%94%B2%E9%86%9B%E7%99%BD%E8%8F%9C%E8%A7%A6%E7%9B%AE%E6%83%8A%E5%BF%83%23) `235.4K 🔥` `NEW`
1. [中国女排vs伊拉克女排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%92vs%E4%BC%8A%E6%8B%89%E5%85%8B%E5%A5%B3%E6%8E%92%23) `234.8K 🔥` `NEW`
1. [白鹿相扑上衣](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%9B%B8%E6%89%91%E4%B8%8A%E8%A1%A3%23) `232.7K 🔥` `NEW`
1. [TheShy力竭](https://s.weibo.com/weibo?q=%23TheShy%E5%8A%9B%E7%AB%AD%23) `219.3K 🔥` `NEW`
1. [数到三 东亚家长](https://s.weibo.com/weibo?q=%23%E6%95%B0%E5%88%B0%E4%B8%89%20%E4%B8%9C%E4%BA%9A%E5%AE%B6%E9%95%BF%23) `175.8K 🔥` `NEW`
1. [严浩翔颜如玉的歌词 (Yan Haoxiang Yan Ruyu's lyrics)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E9%A2%9C%E5%A6%82%E7%8E%89%E7%9A%84%E6%AD%8C%E8%AF%8D%23) `171.5K 🔥` `NEW`
1. [网红AD钙奶挑战赛藏健康风险](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2AD%E9%92%99%E5%A5%B6%E6%8C%91%E6%88%98%E8%B5%9B%E8%97%8F%E5%81%A5%E5%BA%B7%E9%A3%8E%E9%99%A9%23) `167.3K 🔥` `NEW`
1. [女儿出月子离家爸爸偷偷哭了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E5%87%BA%E6%9C%88%E5%AD%90%E7%A6%BB%E5%AE%B6%E7%88%B8%E7%88%B8%E5%81%B7%E5%81%B7%E5%93%AD%E4%BA%86%23) `164.8K 🔥` `NEW`
1. [2026女排亚锦赛](https://s.weibo.com/weibo?q=%232026%E5%A5%B3%E6%8E%92%E4%BA%9A%E9%94%A6%E8%B5%9B%23) `159.0K 🔥` `NEW`
1. [NIP双杀iG](https://s.weibo.com/weibo?q=%23NIP%E5%8F%8C%E6%9D%80iG%23) `156.7K 🔥` `NEW`
1. [孙怡穿细高跟膝盖还能笔直](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E7%A9%BF%E7%BB%86%E9%AB%98%E8%B7%9F%E8%86%9D%E7%9B%96%E8%BF%98%E8%83%BD%E7%AC%94%E7%9B%B4%23) `152.6K 🔥` `NEW`
1. [台湾节目嘉宾说北京没有冰箱引群嘲](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E8%8A%82%E7%9B%AE%E5%98%89%E5%AE%BE%E8%AF%B4%E5%8C%97%E4%BA%AC%E6%B2%A1%E6%9C%89%E5%86%B0%E7%AE%B1%E5%BC%95%E7%BE%A4%E5%98%B2%23) `1.2M 🔥` `+23%`
1. [开学上拼多多买立白 香到没朋友 (When school starts, I buy Libai on Pinduoduo. It’s so popular that I have no friends.)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%AD%A6%E4%B8%8A%E6%8B%BC%E5%A4%9A%E5%A4%9A%E4%B9%B0%E7%AB%8B%E7%99%BD%20%E9%A6%99%E5%88%B0%E6%B2%A1%E6%9C%8B%E5%8F%8B%23) `973.9K 🔥` `+42%`
1. [谁给王传君化的妆 (Who put on Wang Chuanjun’s makeup?)](https://s.weibo.com/weibo?q=%23%E8%B0%81%E7%BB%99%E7%8E%8B%E4%BC%A0%E5%90%9B%E5%8C%96%E7%9A%84%E5%A6%86%23) `597.0K 🔥` `+202%`
1. [网友把蔡徐坤当路人p掉了](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%8A%8A%E8%94%A1%E5%BE%90%E5%9D%A4%E5%BD%93%E8%B7%AF%E4%BA%BAp%E6%8E%89%E4%BA%86%23) `250.8K 🔥` `+74%`
1. [张峻豪说没有热单时严浩翔的反应](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B3%BB%E8%B1%AA%E8%AF%B4%E6%B2%A1%E6%9C%89%E7%83%AD%E5%8D%95%E6%97%B6%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%9A%84%E5%8F%8D%E5%BA%94%23) `248.6K 🔥` `+31%`
1. [双女杂志](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E5%A5%B3%E6%9D%82%E5%BF%97%23) `231.3K 🔥` `+22%`
1. [40万亿美债泡沫若崩盘对中国影响如何 (What will be the impact on China if the $40 trillion U.S. debt bubble collapses?)](https://s.weibo.com/weibo?q=%2340%E4%B8%87%E4%BA%BF%E7%BE%8E%E5%80%BA%E6%B3%A1%E6%B2%AB%E8%8B%A5%E5%B4%A9%E7%9B%98%E5%AF%B9%E4%B8%AD%E5%9B%BD%E5%BD%B1%E5%93%8D%E5%A6%82%E4%BD%95%23) `216.8K 🔥` `+60%`
1. [零食占座当事人母亲发声 (The mother of the person involved in snacks occupying a seat speaks out)](https://s.weibo.com/weibo?q=%23%E9%9B%B6%E9%A3%9F%E5%8D%A0%E5%BA%A7%E5%BD%93%E4%BA%8B%E4%BA%BA%E6%AF%8D%E4%BA%B2%E5%8F%91%E5%A3%B0%23) `2.5M 🔥`
1. [亚朵卖枕头被子收入快赶上酒店主业 (Atour's income from selling pillows and quilts is almost catching up with the hotel's main business)](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E6%9C%B5%E5%8D%96%E6%9E%95%E5%A4%B4%E8%A2%AB%E5%AD%90%E6%94%B6%E5%85%A5%E5%BF%AB%E8%B5%B6%E4%B8%8A%E9%85%92%E5%BA%97%E4%B8%BB%E4%B8%9A%23) `804.0K 🔥`
1. [披荆斩棘直播](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E7%9B%B4%E6%92%AD%23) `352.0K 🔥`
1. [多方回应23楼开灯被对面20楼投诉 (Many parties responded to complaints from the 20th floor opposite when the lights were turned on on the 23rd floor.)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%9423%E6%A5%BC%E5%BC%80%E7%81%AF%E8%A2%AB%E5%AF%B9%E9%9D%A220%E6%A5%BC%E6%8A%95%E8%AF%89%23) `306.7K 🔥`
1. [晋江作者大会 (Jinjiang Author Conference)](https://s.weibo.com/weibo?q=%23%E6%99%8B%E6%B1%9F%E4%BD%9C%E8%80%85%E5%A4%A7%E4%BC%9A%23) `252.2K 🔥`
1. [王菲去看了那英演唱会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E5%8E%BB%E7%9C%8B%E4%BA%86%E9%82%A3%E8%8B%B1%E6%BC%94%E5%94%B1%E4%BC%9A%23) `251.7K 🔥`
1. [必须彻查多少甲醛白菜已流入市场](https://s.weibo.com/weibo?q=%23%E5%BF%85%E9%A1%BB%E5%BD%BB%E6%9F%A5%E5%A4%9A%E5%B0%91%E7%94%B2%E9%86%9B%E7%99%BD%E8%8F%9C%E5%B7%B2%E6%B5%81%E5%85%A5%E5%B8%82%E5%9C%BA%23) `250.1K 🔥`
1. [Angelababy像是来和我结婚的 (Angelababy seems to have come to marry me)](https://s.weibo.com/weibo?q=%23Angelababy%E5%83%8F%E6%98%AF%E6%9D%A5%E5%92%8C%E6%88%91%E7%BB%93%E5%A9%9A%E7%9A%84%23) `249.5K 🔥`
1. [张婧仪大理素颜爬山 (Zhang Jingyi Dali mountain climbing without makeup)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%A4%A7%E7%90%86%E7%B4%A0%E9%A2%9C%E7%88%AC%E5%B1%B1%23) `246.6K 🔥`
1. [墨香铜臭 亿级版权 (The fragrance of ink and the smell of copper, billion-level copyright)](https://s.weibo.com/weibo?q=%23%E5%A2%A8%E9%A6%99%E9%93%9C%E8%87%AD%20%E4%BA%BF%E7%BA%A7%E7%89%88%E6%9D%83%23) `243.0K 🔥`
1. [巫哲顶着这张脸叫狗蛋儿 (Wu Zhe calls Goudaner with this face)](https://s.weibo.com/weibo?q=%23%E5%B7%AB%E5%93%B2%E9%A1%B6%E7%9D%80%E8%BF%99%E5%BC%A0%E8%84%B8%E5%8F%AB%E7%8B%97%E8%9B%8B%E5%84%BF%23) `242.2K 🔥`
1. [逐玉长月烬明版权费上千万 (The copyright fee for Zhuyu Changyue Jinming is tens of millions)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E9%95%BF%E6%9C%88%E7%83%AC%E6%98%8E%E7%89%88%E6%9D%83%E8%B4%B9%E4%B8%8A%E5%8D%83%E4%B8%87%23) `240.9K 🔥`
1. [一点没有情趣的直男震撼](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%82%B9%E6%B2%A1%E6%9C%89%E6%83%85%E8%B6%A3%E7%9A%84%E7%9B%B4%E7%94%B7%E9%9C%87%E6%92%BC%23) `238.8K 🔥`
1. [王菲字体 (Faye Wong font)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E5%AD%97%E4%BD%93%23) `232.4K 🔥`
1. [宋雨琦马甲线比我人生还清晰](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E9%A9%AC%E7%94%B2%E7%BA%BF%E6%AF%94%E6%88%91%E4%BA%BA%E7%94%9F%E8%BF%98%E6%B8%85%E6%99%B0%23) `193.2K 🔥`
1. [无畏契约明星表演赛](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E5%A5%91%E7%BA%A6%E6%98%8E%E6%98%9F%E8%A1%A8%E6%BC%94%E8%B5%9B%23) `166.9K 🔥`
1. [博主生吃芋头花中毒云南网友急疯了](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E4%B8%BB%E7%94%9F%E5%90%83%E8%8A%8B%E5%A4%B4%E8%8A%B1%E4%B8%AD%E6%AF%92%E4%BA%91%E5%8D%97%E7%BD%91%E5%8F%8B%E6%80%A5%E7%96%AF%E4%BA%86%23) `150.7K 🔥`
1. [巫哲首次公开露脸 (Wu Zhe's first public appearance)](https://s.weibo.com/weibo?q=%23%E5%B7%AB%E5%93%B2%E9%A6%96%E6%AC%A1%E5%85%AC%E5%BC%80%E9%9C%B2%E8%84%B8%23) `147.5K 🔥`
1. [TOP彩排唱了NINEPERCENT的歌](https://s.weibo.com/weibo?q=%23TOP%E5%BD%A9%E6%8E%92%E5%94%B1%E4%BA%86NINEPERCENT%E7%9A%84%E6%AD%8C%23) `145.6K 🔥`
1. [龙餐馆](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%23) `255.9K 🔥` `-21%`
1. [世界人形机器人运动会开幕 (World Humanoid Robot Games opens)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%BF%90%E5%8A%A8%E4%BC%9A%E5%BC%80%E5%B9%95%23) `244.5K 🔥` `-21%`
1. [唐九洲 不能再有人退赛了](https://s.weibo.com/weibo?q=%23%E5%94%90%E4%B9%9D%E6%B4%B2%20%E4%B8%8D%E8%83%BD%E5%86%8D%E6%9C%89%E4%BA%BA%E9%80%80%E8%B5%9B%E4%BA%86%23) `237.3K 🔥` `-50%`
1. [张凌赫贴的耳钉掉了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%B4%B4%E7%9A%84%E8%80%B3%E9%92%89%E6%8E%89%E4%BA%86%23) `215.6K 🔥` `-30%`
1. [赫尔城VS曼联](https://s.weibo.com/weibo?q=%23%E8%B5%AB%E5%B0%94%E5%9F%8EVS%E6%9B%BC%E8%81%94%23) `176.1K 🔥` `-35%`
1. [荣耀机器人9秒32破人类百米世界纪录](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80%E6%9C%BA%E5%99%A8%E4%BA%BA9%E7%A7%9232%E7%A0%B4%E4%BA%BA%E7%B1%BB%E7%99%BE%E7%B1%B3%E4%B8%96%E7%95%8C%E7%BA%AA%E5%BD%95%23) `172.6K 🔥` `-45%`
1. [李灿荣全中文主持 (Hosted in Chinese by Li Canrong)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%81%BF%E8%8D%A3%E5%85%A8%E4%B8%AD%E6%96%87%E4%B8%BB%E6%8C%81%23) `143.1K 🔥` `-54%`
1. [美国男子竟大笑承认虐待并肢解少女](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%94%B7%E5%AD%90%E7%AB%9F%E5%A4%A7%E7%AC%91%E6%89%BF%E8%AE%A4%E8%99%90%E5%BE%85%E5%B9%B6%E8%82%A2%E8%A7%A3%E5%B0%91%E5%A5%B3%23) `142.9K 🔥` `-28%`

Updated at 2026-08-22 21:16:32

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
