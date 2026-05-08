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

1. [4只皮皮虾1035元店主事发次日病逝 (Shop owner who bought 4 Pipi shrimps for NT$1,035 died of illness the day after the incident)](https://s.weibo.com/weibo?q=%234%E5%8F%AA%E7%9A%AE%E7%9A%AE%E8%99%BE1035%E5%85%83%E5%BA%97%E4%B8%BB%E4%BA%8B%E5%8F%91%E6%AC%A1%E6%97%A5%E7%97%85%E9%80%9D%23) `1.9M 🔥` `NEW`
1. [湖南卫视综艺本周停播](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E7%BB%BC%E8%89%BA%E6%9C%AC%E5%91%A8%E5%81%9C%E6%92%AD%23) `1.6M 🔥` `NEW`
1. [国产储能出口迎爆发式增长](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BA%A7%E5%82%A8%E8%83%BD%E5%87%BA%E5%8F%A3%E8%BF%8E%E7%88%86%E5%8F%91%E5%BC%8F%E5%A2%9E%E9%95%BF%23) `1.5M 🔥` `NEW`
1. [浏阳烟花厂爆炸已致37死](https://s.weibo.com/weibo?q=%23%E6%B5%8F%E9%98%B3%E7%83%9F%E8%8A%B1%E5%8E%82%E7%88%86%E7%82%B8%E5%B7%B2%E8%87%B437%E6%AD%BB%23) `1.5M 🔥` `NEW`
1. [这一刻所有偶像剧都要弱爆了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E5%88%BB%E6%89%80%E6%9C%89%E5%81%B6%E5%83%8F%E5%89%A7%E9%83%BD%E8%A6%81%E5%BC%B1%E7%88%86%E4%BA%86%23) `1.0M 🔥` `NEW`
1. [檀健次亲挑螺蛳粉标准](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E4%BA%B2%E6%8C%91%E8%9E%BA%E8%9B%B3%E7%B2%89%E6%A0%87%E5%87%86%23) `1.0M 🔥` `NEW`
1. [浏阳烟花厂爆炸涉案8人传唤到案](https://s.weibo.com/weibo?q=%23%E6%B5%8F%E9%98%B3%E7%83%9F%E8%8A%B1%E5%8E%82%E7%88%86%E7%82%B8%E6%B6%89%E6%A1%888%E4%BA%BA%E4%BC%A0%E5%94%A4%E5%88%B0%E6%A1%88%23) `885.1K 🔥` `NEW`
1. [王暖暖发文恐惧不敢睡被送来抢救](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9A%96%E6%9A%96%E5%8F%91%E6%96%87%E6%81%90%E6%83%A7%E4%B8%8D%E6%95%A2%E7%9D%A1%E8%A2%AB%E9%80%81%E6%9D%A5%E6%8A%A2%E6%95%91%23) `614.3K 🔥` `NEW`
1. [陈漫拍Angelababy](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%BC%AB%E6%8B%8DAngelababy%23) `610.2K 🔥` `NEW`
1. [拒绝被AI蒸馏的打工人](https://s.weibo.com/weibo?q=%23%E6%8B%92%E7%BB%9D%E8%A2%ABAI%E8%92%B8%E9%A6%8F%E7%9A%84%E6%89%93%E5%B7%A5%E4%BA%BA%23) `488.1K 🔥` `NEW`
1. [抓周原来这么准 (It turns out that Zhou Zhou is so accurate)](https://s.weibo.com/weibo?q=%23%E6%8A%93%E5%91%A8%E5%8E%9F%E6%9D%A5%E8%BF%99%E4%B9%88%E5%87%86%23) `487.0K 🔥` `NEW`
1. [央视或低价拿下世界杯转播权](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%88%96%E4%BD%8E%E4%BB%B7%E6%8B%BF%E4%B8%8B%E4%B8%96%E7%95%8C%E6%9D%AF%E8%BD%AC%E6%92%AD%E6%9D%83%23) `395.2K 🔥` `NEW`
1. [向太不满向佑恋情称绝不认这种儿媳](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E4%B8%8D%E6%BB%A1%E5%90%91%E4%BD%91%E6%81%8B%E6%83%85%E7%A7%B0%E7%BB%9D%E4%B8%8D%E8%AE%A4%E8%BF%99%E7%A7%8D%E5%84%BF%E5%AA%B3%23) `394.6K 🔥` `NEW`
1. [孟子义将回归桃花坞6](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%B0%86%E5%9B%9E%E5%BD%92%E6%A1%83%E8%8A%B1%E5%9D%9E6%23) `351.2K 🔥` `NEW`
1. [种地吧第四季定档](https://s.weibo.com/weibo?q=%23%E7%A7%8D%E5%9C%B0%E5%90%A7%E7%AC%AC%E5%9B%9B%E5%AD%A3%E5%AE%9A%E6%A1%A3%23) `337.6K 🔥` `NEW`
1. [小短腿夏酱](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%9F%AD%E8%85%BF%E5%A4%8F%E9%85%B1%23) `309.0K 🔥` `NEW`
1. [亚历山大一级恶意犯规](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E5%8E%86%E5%B1%B1%E5%A4%A7%E4%B8%80%E7%BA%A7%E6%81%B6%E6%84%8F%E7%8A%AF%E8%A7%84%23) `264.5K 🔥` `NEW`
1. [美国小鸟疑似用废弃针头筑巢](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%B0%8F%E9%B8%9F%E7%96%91%E4%BC%BC%E7%94%A8%E5%BA%9F%E5%BC%83%E9%92%88%E5%A4%B4%E7%AD%91%E5%B7%A2%23) `263.8K 🔥` `NEW`
1. [王暖暖凌晨被送往医院抢救](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9A%96%E6%9A%96%E5%87%8C%E6%99%A8%E8%A2%AB%E9%80%81%E5%BE%80%E5%8C%BB%E9%99%A2%E6%8A%A2%E6%95%91%23) `241.0K 🔥` `NEW`
1. [原来狗为了合群也得演戏啊](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%8B%97%E4%B8%BA%E4%BA%86%E5%90%88%E7%BE%A4%E4%B9%9F%E5%BE%97%E6%BC%94%E6%88%8F%E5%95%8A%23) `225.3K 🔥` `NEW`
1. [榴莲买家回应包装和坏榴莲分开扔 (Durian buyers respond to packaging and throw away bad durians separately)](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E4%B9%B0%E5%AE%B6%E5%9B%9E%E5%BA%94%E5%8C%85%E8%A3%85%E5%92%8C%E5%9D%8F%E6%A6%B4%E8%8E%B2%E5%88%86%E5%BC%80%E6%89%94%23) `225.0K 🔥` `NEW`
1. [亲爱的客栈](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E7%88%B1%E7%9A%84%E5%AE%A2%E6%A0%88%23) `224.2K 🔥` `NEW`
1. [给阿嬷的情书 微博自来水](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%20%E5%BE%AE%E5%8D%9A%E8%87%AA%E6%9D%A5%E6%B0%B4%23) `223.4K 🔥` `NEW`
1. [雷霆2比0湖人](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E9%9C%862%E6%AF%940%E6%B9%96%E4%BA%BA%23) `223.0K 🔥` `NEW`
1. [小鹏第二代VLA辅助驾驶里程占比超5成](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8F%E7%AC%AC%E4%BA%8C%E4%BB%A3VLA%E8%BE%85%E5%8A%A9%E9%A9%BE%E9%A9%B6%E9%87%8C%E7%A8%8B%E5%8D%A0%E6%AF%94%E8%B6%855%E6%88%90%23) `222.0K 🔥` `NEW`
1. [王菲爆改闫妮](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E7%88%86%E6%94%B9%E9%97%AB%E5%A6%AE%23) `217.0K 🔥` `NEW`
1. [丁禹兮拎着宋祖儿跑了](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E6%8B%8E%E7%9D%80%E5%AE%8B%E7%A5%96%E5%84%BF%E8%B7%91%E4%BA%86%23) `208.2K 🔥` `NEW`
1. [钱江摩托否认围剿张雪机车](https://s.weibo.com/weibo?q=%23%E9%92%B1%E6%B1%9F%E6%91%A9%E6%89%98%E5%90%A6%E8%AE%A4%E5%9B%B4%E5%89%BF%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%23) `198.3K 🔥` `NEW`
1. [国乒男团冲4强](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E5%86%B24%E5%BC%BA%23) `198.1K 🔥` `NEW`
1. [斜方肌就是一个巨大的讨好型人格](https://s.weibo.com/weibo?q=%23%E6%96%9C%E6%96%B9%E8%82%8C%E5%B0%B1%E6%98%AF%E4%B8%80%E4%B8%AA%E5%B7%A8%E5%A4%A7%E7%9A%84%E8%AE%A8%E5%A5%BD%E5%9E%8B%E4%BA%BA%E6%A0%BC%23) `848.3K 🔥` `+136%`
1. [吴慷仁回复立场问题 (Wu Kangren responded to position question)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%85%B7%E4%BB%81%E5%9B%9E%E5%A4%8D%E7%AB%8B%E5%9C%BA%E9%97%AE%E9%A2%98%23) `608.8K 🔥` `+46%`
1. [央视拒买单后国际足联高管将访华](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%8B%92%E4%B9%B0%E5%8D%95%E5%90%8E%E5%9B%BD%E9%99%85%E8%B6%B3%E8%81%94%E9%AB%98%E7%AE%A1%E5%B0%86%E8%AE%BF%E5%8D%8E%23) `607.1K 🔥` `+53%`
1. [热巴的造型因metgala又在外网火了 (Reba’s style became popular on the Internet again due to metgala)](https://s.weibo.com/weibo?q=%23%E7%83%AD%E5%B7%B4%E7%9A%84%E9%80%A0%E5%9E%8B%E5%9B%A0metgala%E5%8F%88%E5%9C%A8%E5%A4%96%E7%BD%91%E7%81%AB%E4%BA%86%23) `598.6K 🔥` `+34%`
1. [美国3艘军舰穿越霍尔木兹遭袭](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD3%E8%89%98%E5%86%9B%E8%88%B0%E7%A9%BF%E8%B6%8A%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E9%81%AD%E8%A2%AD%23) `488.4K 🔥` `+38%`
1. [吉赛尔回应每个月换一张新脸](https://s.weibo.com/weibo?q=%23%E5%90%89%E8%B5%9B%E5%B0%94%E5%9B%9E%E5%BA%94%E6%AF%8F%E4%B8%AA%E6%9C%88%E6%8D%A2%E4%B8%80%E5%BC%A0%E6%96%B0%E8%84%B8%23) `486.1K 🔥` `+39%`
1. [马頔人家新婚你忍忍吧](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E4%BA%BA%E5%AE%B6%E6%96%B0%E5%A9%9A%E4%BD%A0%E5%BF%8D%E5%BF%8D%E5%90%A7%23) `603.7K 🔥`
1. [新加坡将鞭刑加入校园反霸凌新规](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8A%A0%E5%9D%A1%E5%B0%86%E9%9E%AD%E5%88%91%E5%8A%A0%E5%85%A5%E6%A0%A1%E5%9B%AD%E5%8F%8D%E9%9C%B8%E5%87%8C%E6%96%B0%E8%A7%84%23) `321.6K 🔥`
1. [张杰在谢娜庆功宴上敬酒](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E5%9C%A8%E8%B0%A2%E5%A8%9C%E5%BA%86%E5%8A%9F%E5%AE%B4%E4%B8%8A%E6%95%AC%E9%85%92%23) `1.4M 🔥` `-22%`
1. [香港拿下世界杯转播权](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E6%8B%BF%E4%B8%8B%E4%B8%96%E7%95%8C%E6%9D%AF%E8%BD%AC%E6%92%AD%E6%9D%83%23) `725.1K 🔥` `-67%`
1. [减肥才知道高中吃的有多少](https://s.weibo.com/weibo?q=%23%E5%87%8F%E8%82%A5%E6%89%8D%E7%9F%A5%E9%81%93%E9%AB%98%E4%B8%AD%E5%90%83%E7%9A%84%E6%9C%89%E5%A4%9A%E5%B0%91%23) `619.2K 🔥` `-45%`
1. [榴莲仅退款买家发声](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E4%BB%85%E9%80%80%E6%AC%BE%E4%B9%B0%E5%AE%B6%E5%8F%91%E5%A3%B0%23) `618.8K 🔥` `-44%`
1. [淘宝免单 (Taobao free order)](https://s.weibo.com/weibo?q=%23%E6%B7%98%E5%AE%9D%E5%85%8D%E5%8D%95%23) `488.8K 🔥` `-89%`
1. [因恶意退货太多整条街道被商家拉黑 (The whole street was blacklisted by merchants for maliciously returning too many goods.)](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E6%81%B6%E6%84%8F%E9%80%80%E8%B4%A7%E5%A4%AA%E5%A4%9A%E6%95%B4%E6%9D%A1%E8%A1%97%E9%81%93%E8%A2%AB%E5%95%86%E5%AE%B6%E6%8B%89%E9%BB%91%23) `393.4K 🔥` `-61%`
1. [加入酱油会出现蟑螂的酱油碟](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E5%85%A5%E9%85%B1%E6%B2%B9%E4%BC%9A%E5%87%BA%E7%8E%B0%E8%9F%91%E8%9E%82%E7%9A%84%E9%85%B1%E6%B2%B9%E7%A2%9F%23) `307.3K 🔥` `-24%`
1. [浪姐三公淘汰观众](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%B8%89%E5%85%AC%E6%B7%98%E6%B1%B0%E8%A7%82%E4%BC%97%23) `268.7K 🔥` `-41%`
1. [白鹿状态未受舆论影响](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%8A%B6%E6%80%81%E6%9C%AA%E5%8F%97%E8%88%86%E8%AE%BA%E5%BD%B1%E5%93%8D%23) `243.2K 🔥` `-35%`
1. [零重力座椅碰撞后堪比从5楼跳下](https://s.weibo.com/weibo?q=%23%E9%9B%B6%E9%87%8D%E5%8A%9B%E5%BA%A7%E6%A4%85%E7%A2%B0%E6%92%9E%E5%90%8E%E5%A0%AA%E6%AF%94%E4%BB%8E5%E6%A5%BC%E8%B7%B3%E4%B8%8B%23) `215.6K 🔥` `-41%`
1. [AppleWatch首次加入教育优惠](https://s.weibo.com/weibo?q=%23AppleWatch%E9%A6%96%E6%AC%A1%E5%8A%A0%E5%85%A5%E6%95%99%E8%82%B2%E4%BC%98%E6%83%A0%23) `211.8K 🔥` `-41%`
1. [马頔表情 (Ma Di's expression)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E8%A1%A8%E6%83%85%23) `206.6K 🔥` `-47%`
1. [小米17Max本月发布](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B317Max%E6%9C%AC%E6%9C%88%E5%8F%91%E5%B8%83%23) `203.6K 🔥` `-40%`

Updated at 2026-05-08 13:52:44

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
