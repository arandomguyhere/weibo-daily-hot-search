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

1. [AI短剧为何放弃清宫戏](https://s.weibo.com/weibo?q=%23AI%E7%9F%AD%E5%89%A7%E4%B8%BA%E4%BD%95%E6%94%BE%E5%BC%83%E6%B8%85%E5%AE%AB%E6%88%8F%23) `1.1M 🔥` `NEW`
1. [金价大跌积压半年婚嫁需求集中释放](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%A4%A7%E8%B7%8C%E7%A7%AF%E5%8E%8B%E5%8D%8A%E5%B9%B4%E5%A9%9A%E5%AB%81%E9%9C%80%E6%B1%82%E9%9B%86%E4%B8%AD%E9%87%8A%E6%94%BE%23) `849.0K 🔥` `NEW`
1. [今年来以旧换新带动销售超2万亿元](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E6%9D%A5%E4%BB%A5%E6%97%A7%E6%8D%A2%E6%96%B0%E5%B8%A6%E5%8A%A8%E9%94%80%E5%94%AE%E8%B6%852%E4%B8%87%E4%BA%BF%E5%85%83%23) `639.9K 🔥` `NEW`
1. [王智艾伦喊你上京东11.11抢1元新品](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%99%BA%E8%89%BE%E4%BC%A6%E5%96%8A%E4%BD%A0%E4%B8%8A%E4%BA%AC%E4%B8%9C11.11%E6%8A%A21%E5%85%83%E6%96%B0%E5%93%81%23) `637.9K 🔥` `NEW`
1. [后会友期正片删除文吉儿一句话](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E6%AD%A3%E7%89%87%E5%88%A0%E9%99%A4%E6%96%87%E5%90%89%E5%84%BF%E4%B8%80%E5%8F%A5%E8%AF%9D%23) `636.8K 🔥` `NEW`
1. [玉簟秋be](https://s.weibo.com/weibo?q=%23%E7%8E%89%E7%B0%9F%E7%A7%8Bbe%23) `624.8K 🔥` `NEW`
1. [法定放假总数已增至13天](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%AE%9A%E6%94%BE%E5%81%87%E6%80%BB%E6%95%B0%E5%B7%B2%E5%A2%9E%E8%87%B313%E5%A4%A9%23) `450.0K 🔥` `NEW`
1. [Xun开团Homme](https://s.weibo.com/weibo?q=%23Xun%E5%BC%80%E5%9B%A2Homme%23) `311.8K 🔥` `NEW`
1. [我起床了厉娜](https://s.weibo.com/weibo?q=%23%E6%88%91%E8%B5%B7%E5%BA%8A%E4%BA%86%E5%8E%89%E5%A8%9C%23) `310.3K 🔥` `NEW`
1. [成人感染幽门螺杆菌很难自愈](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BA%BA%E6%84%9F%E6%9F%93%E5%B9%BD%E9%97%A8%E8%9E%BA%E6%9D%86%E8%8F%8C%E5%BE%88%E9%9A%BE%E8%87%AA%E6%84%88%23) `302.3K 🔥` `NEW`
1. [白衣山猫回应被小城良方告](https://s.weibo.com/weibo?q=%23%E7%99%BD%E8%A1%A3%E5%B1%B1%E7%8C%AB%E5%9B%9E%E5%BA%94%E8%A2%AB%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E5%91%8A%23) `293.2K 🔥` `NEW`
1. [长沙经济排名咋了](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E7%BB%8F%E6%B5%8E%E6%8E%92%E5%90%8D%E5%92%8B%E4%BA%86%23) `289.4K 🔥` `NEW`
1. [五中全会决定全文](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%AD%E5%85%A8%E4%BC%9A%E5%86%B3%E5%AE%9A%E5%85%A8%E6%96%87%23) `277.4K 🔥` `NEW`
1. [石宇奇结婚](https://s.weibo.com/weibo?q=%23%E7%9F%B3%E5%AE%87%E5%A5%87%E7%BB%93%E5%A9%9A%23) `273.1K 🔥` `NEW`
1. [胡歌参加女儿亲子活动](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%AD%8C%E5%8F%82%E5%8A%A0%E5%A5%B3%E5%84%BF%E4%BA%B2%E5%AD%90%E6%B4%BB%E5%8A%A8%23) `268.8K 🔥` `NEW`
1. [浪1这些文字居然是许飞写的](https://s.weibo.com/weibo?q=%23%E6%B5%AA1%E8%BF%99%E4%BA%9B%E6%96%87%E5%AD%97%E5%B1%85%E7%84%B6%E6%98%AF%E8%AE%B8%E9%A3%9E%E5%86%99%E7%9A%84%23) `264.1K 🔥` `NEW`
1. [小城良方大结局神来之笔](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E5%A4%A7%E7%BB%93%E5%B1%80%E7%A5%9E%E6%9D%A5%E4%B9%8B%E7%AC%94%23) `260.1K 🔥` `NEW`
1. [虞书欣演唱会官宣](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%98%E5%AE%A3%23) `257.7K 🔥` `NEW`
1. [车企10月份销量数据](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E4%BC%8110%E6%9C%88%E4%BB%BD%E9%94%80%E9%87%8F%E6%95%B0%E6%8D%AE%23) `257.7K 🔥` `NEW`
1. [金价](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `257.4K 🔥` `NEW`
1. [人会在某一刻突然理解塞翁失马](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%BC%9A%E5%9C%A8%E6%9F%90%E4%B8%80%E5%88%BB%E7%AA%81%E7%84%B6%E7%90%86%E8%A7%A3%E5%A1%9E%E7%BF%81%E5%A4%B1%E9%A9%AC%23) `257.2K 🔥` `NEW`
1. [袜子内裤鞋子一起放洗衣机的人](https://s.weibo.com/weibo?q=%23%E8%A2%9C%E5%AD%90%E5%86%85%E8%A3%A4%E9%9E%8B%E5%AD%90%E4%B8%80%E8%B5%B7%E6%94%BE%E6%B4%97%E8%A1%A3%E6%9C%BA%E7%9A%84%E4%BA%BA%23) `257.0K 🔥` `NEW`
1. [胡先煦回应白敬亭](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6%E5%9B%9E%E5%BA%94%E7%99%BD%E6%95%AC%E4%BA%AD%23) `256.9K 🔥` `NEW`
1. [宋雨琦直视镜头的神之九秒](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E7%9B%B4%E8%A7%86%E9%95%9C%E5%A4%B4%E7%9A%84%E7%A5%9E%E4%B9%8B%E4%B9%9D%E7%A7%92%23) `256.6K 🔥` `NEW`
1. [丞磊徐若晗回应玉簟秋结局](https://s.weibo.com/weibo?q=%23%E4%B8%9E%E7%A3%8A%E5%BE%90%E8%8B%A5%E6%99%97%E5%9B%9E%E5%BA%94%E7%8E%89%E7%B0%9F%E7%A7%8B%E7%BB%93%E5%B1%80%23) `256.5K 🔥` `NEW`
1. [易易紫力挺文吉儿](https://s.weibo.com/weibo?q=%23%E6%98%93%E6%98%93%E7%B4%AB%E5%8A%9B%E6%8C%BA%E6%96%87%E5%90%89%E5%84%BF%23) `256.4K 🔥` `NEW`
1. [央行证监会将于明天召开座谈会](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A1%8C%E8%AF%81%E7%9B%91%E4%BC%9A%E5%B0%86%E4%BA%8E%E6%98%8E%E5%A4%A9%E5%8F%AC%E5%BC%80%E5%BA%A7%E8%B0%88%E4%BC%9A%23) `242.8K 🔥` `NEW`
1. [Viper说HLE终究要淘汰不如输给我](https://s.weibo.com/weibo?q=%23Viper%E8%AF%B4HLE%E7%BB%88%E7%A9%B6%E8%A6%81%E6%B7%98%E6%B1%B0%E4%B8%8D%E5%A6%82%E8%BE%93%E7%BB%99%E6%88%91%23) `223.5K 🔥` `NEW`
1. [石宇奇老婆是游戏主播](https://s.weibo.com/weibo?q=%23%E7%9F%B3%E5%AE%87%E5%A5%87%E8%80%81%E5%A9%86%E6%98%AF%E6%B8%B8%E6%88%8F%E4%B8%BB%E6%92%AD%23) `217.6K 🔥` `NEW`
1. [FBI通缉朝鲜黑客朴珍赫](https://s.weibo.com/weibo?q=%23FBI%E9%80%9A%E7%BC%89%E6%9C%9D%E9%B2%9C%E9%BB%91%E5%AE%A2%E6%9C%B4%E7%8F%8D%E8%B5%AB%23) `217.5K 🔥` `NEW`
1. [范丞丞曾因脖子长去医院检查](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E6%9B%BE%E5%9B%A0%E8%84%96%E5%AD%90%E9%95%BF%E5%8E%BB%E5%8C%BB%E9%99%A2%E6%A3%80%E6%9F%A5%23) `214.4K 🔥` `NEW`
1. [艾伦加盟京东一年一度惊喜大会](https://s.weibo.com/weibo?q=%23%E8%89%BE%E4%BC%A6%E5%8A%A0%E7%9B%9F%E4%BA%AC%E4%B8%9C%E4%B8%80%E5%B9%B4%E4%B8%80%E5%BA%A6%E6%83%8A%E5%96%9C%E5%A4%A7%E4%BC%9A%23) `202.5K 🔥` `NEW`
1. [杨汝晴 沉没成本不参与重大决策](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B1%9D%E6%99%B4%20%E6%B2%89%E6%B2%A1%E6%88%90%E6%9C%AC%E4%B8%8D%E5%8F%82%E4%B8%8E%E9%87%8D%E5%A4%A7%E5%86%B3%E7%AD%96%23) `199.6K 🔥` `NEW`
1. [甲醛刺客终于找到了](https://s.weibo.com/weibo?q=%23%E7%94%B2%E9%86%9B%E5%88%BA%E5%AE%A2%E7%BB%88%E4%BA%8E%E6%89%BE%E5%88%B0%E4%BA%86%23) `196.1K 🔥` `NEW`
1. [金价长期走势将转向](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E9%95%BF%E6%9C%9F%E8%B5%B0%E5%8A%BF%E5%B0%86%E8%BD%AC%E5%90%91%23) `181.6K 🔥` `NEW`
1. [王子璇聚餐不让朋友买单](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E8%81%9A%E9%A4%90%E4%B8%8D%E8%AE%A9%E6%9C%8B%E5%8F%8B%E4%B9%B0%E5%8D%95%23) `181.4K 🔥` `NEW`
1. [警方介入谢霆锋被扔荧光棒事件](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E4%BB%8B%E5%85%A5%E8%B0%A2%E9%9C%86%E9%94%8B%E8%A2%AB%E6%89%94%E8%8D%A7%E5%85%89%E6%A3%92%E4%BA%8B%E4%BB%B6%23) `180.7K 🔥` `NEW`
1. [法院查封房产被网签抵债](https://s.weibo.com/weibo?q=%23%E6%B3%95%E9%99%A2%E6%9F%A5%E5%B0%81%E6%88%BF%E4%BA%A7%E8%A2%AB%E7%BD%91%E7%AD%BE%E6%8A%B5%E5%80%BA%23) `177.8K 🔥` `NEW`
1. [女子买2套房打通后喜提环形跑道](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B9%B02%E5%A5%97%E6%88%BF%E6%89%93%E9%80%9A%E5%90%8E%E5%96%9C%E6%8F%90%E7%8E%AF%E5%BD%A2%E8%B7%91%E9%81%93%23) `177.5K 🔥` `NEW`
1. [嫁金钗大婚吻戏](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E5%A4%A7%E5%A9%9A%E5%90%BB%E6%88%8F%23) `173.3K 🔥` `NEW`
1. [王子璇大学同学发声](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E5%A4%A7%E5%AD%A6%E5%90%8C%E5%AD%A6%E5%8F%91%E5%A3%B0%23) `171.5K 🔥` `NEW`
1. [刘铮亮最后一刻还在救别人](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%93%AE%E4%BA%AE%E6%9C%80%E5%90%8E%E4%B8%80%E5%88%BB%E8%BF%98%E5%9C%A8%E6%95%91%E5%88%AB%E4%BA%BA%23) `168.5K 🔥` `NEW`
1. [吴磊 阴湿味](https://s.weibo.com/weibo?q=%23%E5%90%B4%E7%A3%8A%20%E9%98%B4%E6%B9%BF%E5%91%B3%23) `165.7K 🔥` `NEW`
1. [钟意 听说有人想我了](https://s.weibo.com/weibo?q=%23%E9%92%9F%E6%84%8F%20%E5%90%AC%E8%AF%B4%E6%9C%89%E4%BA%BA%E6%83%B3%E6%88%91%E4%BA%86%23) `165.1K 🔥` `NEW`
1. [井迪十岁时坐公交被猥亵](https://s.weibo.com/weibo?q=%23%E4%BA%95%E8%BF%AA%E5%8D%81%E5%B2%81%E6%97%B6%E5%9D%90%E5%85%AC%E4%BA%A4%E8%A2%AB%E7%8C%A5%E4%BA%B5%23) `164.6K 🔥` `NEW`
1. [老板以为招了软柿子惹到精神领袖](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%9D%BF%E4%BB%A5%E4%B8%BA%E6%8B%9B%E4%BA%86%E8%BD%AF%E6%9F%BF%E5%AD%90%E6%83%B9%E5%88%B0%E7%B2%BE%E7%A5%9E%E9%A2%86%E8%A2%96%23) `163.7K 🔥` `NEW`
1. [发现大家的装修思路好清晰](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%A4%A7%E5%AE%B6%E7%9A%84%E8%A3%85%E4%BF%AE%E6%80%9D%E8%B7%AF%E5%A5%BD%E6%B8%85%E6%99%B0%23) `162.4K 🔥` `NEW`
1. [苹果AI 豆包](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9CAI%20%E8%B1%86%E5%8C%85%23) `161.8K 🔥` `NEW`
1. [侯卓成杨汝晴官宣分手](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E5%8D%93%E6%88%90%E6%9D%A8%E6%B1%9D%E6%99%B4%E5%AE%98%E5%AE%A3%E5%88%86%E6%89%8B%23) `286.0K 🔥`
1. [侯卓成 尊重一点女方别太入戏了](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E5%8D%93%E6%88%90%20%E5%B0%8A%E9%87%8D%E4%B8%80%E7%82%B9%E5%A5%B3%E6%96%B9%E5%88%AB%E5%A4%AA%E5%85%A5%E6%88%8F%E4%BA%86%23) `211.2K 🔥` `-30%`

Updated at 2026-11-01 16:00:56

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
