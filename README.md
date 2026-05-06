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

1. [解除台独刘世芳亲属全部职务 (Remove all positions of relatives of Taiwanese independence leader Liu Shifang)](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E9%99%A4%E5%8F%B0%E7%8B%AC%E5%88%98%E4%B8%96%E8%8A%B3%E4%BA%B2%E5%B1%9E%E5%85%A8%E9%83%A8%E8%81%8C%E5%8A%A1%23) `908.9K 🔥` `NEW`
1. [张杰谢娜合唱](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E8%B0%A2%E5%A8%9C%E5%90%88%E5%94%B1%23) `870.7K 🔥` `NEW`
1. [网友曝三亚4只皮皮虾收费1035元](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%9B%9D%E4%B8%89%E4%BA%9A4%E5%8F%AA%E7%9A%AE%E7%9A%AE%E8%99%BE%E6%94%B6%E8%B4%B91035%E5%85%83%23) `764.6K 🔥` `NEW`
1. [meiko赛后发文](https://s.weibo.com/weibo?q=%23meiko%E8%B5%9B%E5%90%8E%E5%8F%91%E6%96%87%23) `620.8K 🔥` `NEW`
1. [有AI真好 放以前没十几亿下不来](https://s.weibo.com/weibo?q=%23%E6%9C%89AI%E7%9C%9F%E5%A5%BD%20%E6%94%BE%E4%BB%A5%E5%89%8D%E6%B2%A1%E5%8D%81%E5%87%A0%E4%BA%BF%E4%B8%8B%E4%B8%8D%E6%9D%A5%23) `606.7K 🔥` `NEW`
1. [EXO King](https://s.weibo.com/weibo?q=%23EXO%20King%23) `605.9K 🔥` `NEW`
1. [钟薛高破产后508件资产207万起拍](https://s.weibo.com/weibo?q=%23%E9%92%9F%E8%96%9B%E9%AB%98%E7%A0%B4%E4%BA%A7%E5%90%8E508%E4%BB%B6%E8%B5%84%E4%BA%A7207%E4%B8%87%E8%B5%B7%E6%8B%8D%23) `603.9K 🔥` `NEW`
1. [世界杯中国赞助商投入超5亿美元](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E4%B8%AD%E5%9B%BD%E8%B5%9E%E5%8A%A9%E5%95%86%E6%8A%95%E5%85%A5%E8%B6%855%E4%BA%BF%E7%BE%8E%E5%85%83%23) `504.8K 🔥` `NEW`
1. [鞠婧祎的舞被韩国女团跳了](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E7%9A%84%E8%88%9E%E8%A2%AB%E9%9F%A9%E5%9B%BD%E5%A5%B3%E5%9B%A2%E8%B7%B3%E4%BA%86%23) `414.4K 🔥` `NEW`
1. [何炅躲过了所有路透](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E8%BA%B2%E8%BF%87%E4%BA%86%E6%89%80%E6%9C%89%E8%B7%AF%E9%80%8F%23) `390.8K 🔥` `NEW`
1. [吴柳芳父母回应女儿擦边风波 (Wu Liufang’s parents responded to their daughter’s incident)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%9F%B3%E8%8A%B3%E7%88%B6%E6%AF%8D%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%84%BF%E6%93%A6%E8%BE%B9%E9%A3%8E%E6%B3%A2%23) `366.8K 🔥` `NEW`
1. [者来女真的去谢娜演唱会了](https://s.weibo.com/weibo?q=%23%E8%80%85%E6%9D%A5%E5%A5%B3%E7%9C%9F%E7%9A%84%E5%8E%BB%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BA%86%23) `366.1K 🔥` `NEW`
1. [火到欧美的韩国棒球女神是AI生成](https://s.weibo.com/weibo?q=%23%E7%81%AB%E5%88%B0%E6%AC%A7%E7%BE%8E%E7%9A%84%E9%9F%A9%E5%9B%BD%E6%A3%92%E7%90%83%E5%A5%B3%E7%A5%9E%E6%98%AFAI%E7%94%9F%E6%88%90%23) `342.8K 🔥` `NEW`
1. [孟子义一手抓绳一手护着白鹿](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E4%B8%80%E6%89%8B%E6%8A%93%E7%BB%B3%E4%B8%80%E6%89%8B%E6%8A%A4%E7%9D%80%E7%99%BD%E9%B9%BF%23) `339.7K 🔥` `NEW`
1. [主角OST请来了王菲](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92OST%E8%AF%B7%E6%9D%A5%E4%BA%86%E7%8E%8B%E8%8F%B2%23) `306.8K 🔥` `NEW`
1. [王骁演技](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%AA%81%E6%BC%94%E6%8A%80%23) `278.8K 🔥` `NEW`
1. [邓凯孔雪儿 长宁帝军](https://s.weibo.com/weibo?q=%23%E9%82%93%E5%87%AF%E5%AD%94%E9%9B%AA%E5%84%BF%20%E9%95%BF%E5%AE%81%E5%B8%9D%E5%86%9B%23) `235.1K 🔥` `NEW`
1. [7月大婴儿被重复接种两针疫苗](https://s.weibo.com/weibo?q=%237%E6%9C%88%E5%A4%A7%E5%A9%B4%E5%84%BF%E8%A2%AB%E9%87%8D%E5%A4%8D%E6%8E%A5%E7%A7%8D%E4%B8%A4%E9%92%88%E7%96%AB%E8%8B%97%23) `218.3K 🔥` `NEW`
1. [河北两女子长得一模一样孩子认错妈](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8C%97%E4%B8%A4%E5%A5%B3%E5%AD%90%E9%95%BF%E5%BE%97%E4%B8%80%E6%A8%A1%E4%B8%80%E6%A0%B7%E5%AD%A9%E5%AD%90%E8%AE%A4%E9%94%99%E5%A6%88%23) `207.6K 🔥` `NEW`
1. [药店闭店潮持续](https://s.weibo.com/weibo?q=%23%E8%8D%AF%E5%BA%97%E9%97%AD%E5%BA%97%E6%BD%AE%E6%8C%81%E7%BB%AD%23) `201.0K 🔥` `NEW`
1. [刘宇宁穿高定直播 (Liu Yuning wears high-definition live broadcast)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E7%A9%BF%E9%AB%98%E5%AE%9A%E7%9B%B4%E6%92%AD%23) `192.0K 🔥` `NEW`
1. [孔雪儿的穿搭AI给到夯](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E7%9A%84%E7%A9%BF%E6%90%ADAI%E7%BB%99%E5%88%B0%E5%A4%AF%23) `191.7K 🔥` `NEW`
1. [中国女子在西班牙被刺身亡](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E5%9C%A8%E8%A5%BF%E7%8F%AD%E7%89%99%E8%A2%AB%E5%88%BA%E8%BA%AB%E4%BA%A1%23) `188.9K 🔥` `NEW`
1. [婴儿被生父照顾10分钟离奇窒息脑瘫](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%84%BF%E8%A2%AB%E7%94%9F%E7%88%B6%E7%85%A7%E9%A1%BE10%E5%88%86%E9%92%9F%E7%A6%BB%E5%A5%87%E7%AA%92%E6%81%AF%E8%84%91%E7%98%AB%23) `173.3K 🔥` `NEW`
1. [Ella发文庆祝结婚14周年](https://s.weibo.com/weibo?q=%23Ella%E5%8F%91%E6%96%87%E5%BA%86%E7%A5%9D%E7%BB%93%E5%A9%9A14%E5%91%A8%E5%B9%B4%23) `169.1K 🔥` `NEW`
1. [王鹤棣助理号蛐蛐冉方旭](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%8A%A9%E7%90%86%E5%8F%B7%E8%9B%90%E8%9B%90%E5%86%89%E6%96%B9%E6%97%AD%23) `165.4K 🔥` `NEW`
1. [小S阿雅重返华冈艺校](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E9%98%BF%E9%9B%85%E9%87%8D%E8%BF%94%E5%8D%8E%E5%86%88%E8%89%BA%E6%A0%A1%23) `159.3K 🔥` `NEW`
1. [CBA](https://s.weibo.com/weibo?q=%23CBA%23) `157.8K 🔥` `NEW`
1. [林诗栋说一直在研究不犯规的发球](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E8%AF%B4%E4%B8%80%E7%9B%B4%E5%9C%A8%E7%A0%94%E7%A9%B6%E4%B8%8D%E7%8A%AF%E8%A7%84%E7%9A%84%E5%8F%91%E7%90%83%23) `153.4K 🔥` `NEW`
1. [花少8最新阵容 (Hua Shao 8 latest lineup)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%E6%9C%80%E6%96%B0%E9%98%B5%E5%AE%B9%23) `1.2M 🔥` `+21%`
1. [新人结婚被丢高速口路过宾利变婚车](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%BA%BA%E7%BB%93%E5%A9%9A%E8%A2%AB%E4%B8%A2%E9%AB%98%E9%80%9F%E5%8F%A3%E8%B7%AF%E8%BF%87%E5%AE%BE%E5%88%A9%E5%8F%98%E5%A9%9A%E8%BD%A6%23) `944.4K 🔥` `+99%`
1. [为什么户外千万不要穿迷彩 (Why you should never wear camouflage outdoors)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%88%B7%E5%A4%96%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E7%A9%BF%E8%BF%B7%E5%BD%A9%23) `673.8K 🔥` `+102%`
1. [来中国玩的外国人更多了](https://s.weibo.com/weibo?q=%23%E6%9D%A5%E4%B8%AD%E5%9B%BD%E7%8E%A9%E7%9A%84%E5%A4%96%E5%9B%BD%E4%BA%BA%E6%9B%B4%E5%A4%9A%E4%BA%86%23) `917.3K 🔥`
1. [白鹿跑男争议 内娱综艺审美巨变 (White Deer Running Man Controversy, Aesthetic Changes in Domestic Entertainment Variety Shows)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%B7%91%E7%94%B7%E4%BA%89%E8%AE%AE%20%E5%86%85%E5%A8%B1%E7%BB%BC%E8%89%BA%E5%AE%A1%E7%BE%8E%E5%B7%A8%E5%8F%98%23) `915.8K 🔥`
1. [三星家电退出大陆市场](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%E5%AE%B6%E7%94%B5%E9%80%80%E5%87%BA%E5%A4%A7%E9%99%86%E5%B8%82%E5%9C%BA%23) `461.2K 🔥`
1. [全李酒店 全季酒店](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%9D%8E%E9%85%92%E5%BA%97%20%E5%85%A8%E5%AD%A3%E9%85%92%E5%BA%97%23) `425.9K 🔥`
1. [病毒邮轮](https://s.weibo.com/weibo?q=%23%E7%97%85%E6%AF%92%E9%82%AE%E8%BD%AE%23) `253.6K 🔥`
1. [小狗靠捡瓶子攒了10万 (Puppy saved 100,000 by picking up bottles)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E9%9D%A0%E6%8D%A1%E7%93%B6%E5%AD%90%E6%94%92%E4%BA%8610%E4%B8%87%23) `253.5K 🔥`
1. [韩汶栩与女友手牵手在老家逛街](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%B1%B6%E6%A0%A9%E4%B8%8E%E5%A5%B3%E5%8F%8B%E6%89%8B%E7%89%B5%E6%89%8B%E5%9C%A8%E8%80%81%E5%AE%B6%E9%80%9B%E8%A1%97%23) `188.6K 🔥`
1. [中国强硬拒绝世界杯天价转播费](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%BC%BA%E7%A1%AC%E6%8B%92%E7%BB%9D%E4%B8%96%E7%95%8C%E6%9D%AF%E5%A4%A9%E4%BB%B7%E8%BD%AC%E6%92%AD%E8%B4%B9%23) `342.5K 🔥` `-73%`
1. [国乒男团进世乒赛8强](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E8%BF%9B%E4%B8%96%E4%B9%92%E8%B5%9B8%E5%BC%BA%23) `307.7K 🔥` `-68%`
1. [花少 恋综 (Hua Shao Lian Zong)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%91%20%E6%81%8B%E7%BB%BC%23) `305.0K 🔥` `-40%`
1. [三星](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%23) `279.1K 🔥` `-71%`
1. [王楚钦这一分全体起立](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%BF%99%E4%B8%80%E5%88%86%E5%85%A8%E4%BD%93%E8%B5%B7%E7%AB%8B%23) `267.0K 🔥` `-65%`
1. [龙队急得直挠头 (Team Dragon was so anxious that he scratched his head)](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%98%9F%E6%80%A5%E5%BE%97%E7%9B%B4%E6%8C%A0%E5%A4%B4%23) `254.7K 🔥` `-67%`
1. [王曼昱11比0卡尔伯格](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B111%E6%AF%940%E5%8D%A1%E5%B0%94%E4%BC%AF%E6%A0%BC%23) `188.2K 🔥` `-65%`
1. [英伟达中国份额降至0](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E4%B8%AD%E5%9B%BD%E4%BB%BD%E9%A2%9D%E9%99%8D%E8%87%B30%23) `163.4K 🔥` `-64%`
1. [梁靖崑0比3E约内斯库 (Liang Jingkun 0-3E Ionescu)](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%910%E6%AF%943E%E7%BA%A6%E5%86%85%E6%96%AF%E5%BA%93%23) `145.2K 🔥` `-57%`
1. [我们的少年时代2](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%23) `144.8K 🔥` `-46%`

Updated at 2026-05-06 23:32:45

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
