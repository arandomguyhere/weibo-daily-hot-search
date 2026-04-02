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

1. [张雪 (Zhang Xue)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%23) `783.8K 🔥` `NEW`
1. [刘晓艳网课现场没有学生一个人聊嗨了](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%99%93%E8%89%B3%E7%BD%91%E8%AF%BE%E7%8E%B0%E5%9C%BA%E6%B2%A1%E6%9C%89%E5%AD%A6%E7%94%9F%E4%B8%80%E4%B8%AA%E4%BA%BA%E8%81%8A%E5%97%A8%E4%BA%86%23) `630.3K 🔥` `NEW`
1. [张雪说被资本搞懵了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E8%AF%B4%E8%A2%AB%E8%B5%84%E6%9C%AC%E6%90%9E%E6%87%B5%E4%BA%86%23) `382.3K 🔥` `NEW`
1. [乘风一口气官宣34位送考人](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E%E4%B8%80%E5%8F%A3%E6%B0%94%E5%AE%98%E5%AE%A334%E4%BD%8D%E9%80%81%E8%80%83%E4%BA%BA%23) `300.6K 🔥` `NEW`
1. [胡彦斌连夜关闭了人脸支付](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%BD%A6%E6%96%8C%E8%BF%9E%E5%A4%9C%E5%85%B3%E9%97%AD%E4%BA%86%E4%BA%BA%E8%84%B8%E6%94%AF%E4%BB%98%23) `211.1K 🔥` `NEW`
1. [董宇辉曾说产品上播10天前有人试吃](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%AE%87%E8%BE%89%E6%9B%BE%E8%AF%B4%E4%BA%A7%E5%93%81%E4%B8%8A%E6%92%AD10%E5%A4%A9%E5%89%8D%E6%9C%89%E4%BA%BA%E8%AF%95%E5%90%83%23) `207.9K 🔥` `NEW`
1. [Wayward曝369休息原因](https://s.weibo.com/weibo?q=%23Wayward%E6%9B%9D369%E4%BC%91%E6%81%AF%E5%8E%9F%E5%9B%A0%23) `203.4K 🔥` `NEW`
1. [今麦郎手打擦边20年不能停产就完了](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E9%BA%A6%E9%83%8E%E6%89%8B%E6%89%93%E6%93%A6%E8%BE%B920%E5%B9%B4%E4%B8%8D%E8%83%BD%E5%81%9C%E4%BA%A7%E5%B0%B1%E5%AE%8C%E4%BA%86%23) `198.9K 🔥` `NEW`
1. [申聪在母亲怀里被抢走](https://s.weibo.com/weibo?q=%23%E7%94%B3%E8%81%AA%E5%9C%A8%E6%AF%8D%E4%BA%B2%E6%80%80%E9%87%8C%E8%A2%AB%E6%8A%A2%E8%B5%B0%23) `136.2K 🔥` `NEW`
1. [教师被AI造谣猥亵入狱10年](https://s.weibo.com/weibo?q=%23%E6%95%99%E5%B8%88%E8%A2%ABAI%E9%80%A0%E8%B0%A3%E7%8C%A5%E4%BA%B5%E5%85%A5%E7%8B%B110%E5%B9%B4%23) `135.9K 🔥` `NEW`
1. [阿花花酱 优思益 (Ahuahuajiang Yousiyi)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E8%8A%B1%E8%8A%B1%E9%85%B1%20%E4%BC%98%E6%80%9D%E7%9B%8A%23) `115.1K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `113.8K 🔥` `NEW`
1. [接变成气血很足月经规律的女人](https://s.weibo.com/weibo?q=%23%E6%8E%A5%E5%8F%98%E6%88%90%E6%B0%94%E8%A1%80%E5%BE%88%E8%B6%B3%E6%9C%88%E7%BB%8F%E8%A7%84%E5%BE%8B%E7%9A%84%E5%A5%B3%E4%BA%BA%23) `108.0K 🔥` `NEW`
1. [金价](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `103.6K 🔥` `NEW`
1. [王曼昱4比0伊藤美诚](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B14%E6%AF%940%E4%BC%8A%E8%97%A4%E7%BE%8E%E8%AF%9A%23) `94.9K 🔥` `NEW`
1. [严屹宽曝张凌赫挨鞭子真打了108次](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E5%B1%B9%E5%AE%BD%E6%9B%9D%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%8C%A8%E9%9E%AD%E5%AD%90%E7%9C%9F%E6%89%93%E4%BA%86108%E6%AC%A1%23) `94.8K 🔥` `NEW`
1. [金饰价涨至1475元](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E6%B6%A8%E8%87%B31475%E5%85%83%23) `94.8K 🔥` `NEW`
1. [赖伟明宝珠首个大男主](https://s.weibo.com/weibo?q=%23%E8%B5%96%E4%BC%9F%E6%98%8E%E5%AE%9D%E7%8F%A0%E9%A6%96%E4%B8%AA%E5%A4%A7%E7%94%B7%E4%B8%BB%23) `94.7K 🔥` `NEW`
1. [金饰克价涨到1475元](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E5%85%8B%E4%BB%B7%E6%B6%A8%E5%88%B01475%E5%85%83%23) `94.6K 🔥` `NEW`
1. [刘亦菲老钱风大片](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E8%80%81%E9%92%B1%E9%A3%8E%E5%A4%A7%E7%89%87%23) `94.4K 🔥` `NEW`
1. [吴梦洁庄宇珊领衔女排名单 (Wu Mengjie and Zhuang Yushan lead the women's ranking list)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%A2%A6%E6%B4%81%E5%BA%84%E5%AE%87%E7%8F%8A%E9%A2%86%E8%A1%94%E5%A5%B3%E6%8E%92%E5%90%8D%E5%8D%95%23) `94.3K 🔥` `NEW`
1. [多家银行4月1日起下调存款利率](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6%E9%93%B6%E8%A1%8C4%E6%9C%881%E6%97%A5%E8%B5%B7%E4%B8%8B%E8%B0%83%E5%AD%98%E6%AC%BE%E5%88%A9%E7%8E%87%23) `90.6K 🔥` `NEW`
1. [美国一婴儿光天化日在街头被枪杀](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%B8%80%E5%A9%B4%E5%84%BF%E5%85%89%E5%A4%A9%E5%8C%96%E6%97%A5%E5%9C%A8%E8%A1%97%E5%A4%B4%E8%A2%AB%E6%9E%AA%E6%9D%80%23) `89.8K 🔥` `NEW`
1. [孙颖莎叫姐姐](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%8F%AB%E5%A7%90%E5%A7%90%23) `87.7K 🔥` `NEW`
1. [张本智和4比3邱党](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C4%E6%AF%943%E9%82%B1%E5%85%9A%23) `87.3K 🔥` `NEW`
1. [浙江用9000万元换来10多亿](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E7%94%A89000%E4%B8%87%E5%85%83%E6%8D%A2%E6%9D%A510%E5%A4%9A%E4%BA%BF%23) `86.9K 🔥` `NEW`
1. [汪苏泷郑州演唱会抢票](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E9%83%91%E5%B7%9E%E6%BC%94%E5%94%B1%E4%BC%9A%E6%8A%A2%E7%A5%A8%23) `85.0K 🔥` `NEW`
1. [这种一声不吭的生活教学最实用了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%A7%8D%E4%B8%80%E5%A3%B0%E4%B8%8D%E5%90%AD%E7%9A%84%E7%94%9F%E6%B4%BB%E6%95%99%E5%AD%A6%E6%9C%80%E5%AE%9E%E7%94%A8%E4%BA%86%23) `82.7K 🔥` `NEW`
1. [男子公证遗产全归婚生遭私生子起诉](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%85%AC%E8%AF%81%E9%81%97%E4%BA%A7%E5%85%A8%E5%BD%92%E5%A9%9A%E7%94%9F%E9%81%AD%E7%A7%81%E7%94%9F%E5%AD%90%E8%B5%B7%E8%AF%89%23) `81.0K 🔥` `NEW`
1. [银行回应老人存10万变7万](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E5%9B%9E%E5%BA%94%E8%80%81%E4%BA%BA%E5%AD%9810%E4%B8%87%E5%8F%987%E4%B8%87%23) `214.0K 🔥` `+69%`
1. [李若彤发布致歉声明 (Li Ruotong issued an apology statement)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8B%A5%E5%BD%A4%E5%8F%91%E5%B8%83%E8%87%B4%E6%AD%89%E5%A3%B0%E6%98%8E%23) `210.3K 🔥` `+22%`
1. [优思益 (Yousiyi)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%23) `1.1M 🔥`
1. [天宫画展再上新](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%AE%AB%E7%94%BB%E5%B1%95%E5%86%8D%E4%B8%8A%E6%96%B0%23) `654.7K 🔥`
1. [WBG无畏契约扬帆再起](https://s.weibo.com/weibo?q=%23WBG%E6%97%A0%E7%95%8F%E5%A5%91%E7%BA%A6%E6%89%AC%E5%B8%86%E5%86%8D%E8%B5%B7%23) `292.5K 🔥`
1. [杨紫 没人通知我啊 (Yang Zi, no one informed me)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%20%E6%B2%A1%E4%BA%BA%E9%80%9A%E7%9F%A5%E6%88%91%E5%95%8A%23) `176.8K 🔥`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `136.3K 🔥`
1. [男孩捡50g金条咬了一口竟是真的](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E6%8D%A150g%E9%87%91%E6%9D%A1%E5%92%AC%E4%BA%86%E4%B8%80%E5%8F%A3%E7%AB%9F%E6%98%AF%E7%9C%9F%E7%9A%84%23) `135.9K 🔥`
1. [张柏芝晒二儿子打球正脸](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D%E6%99%92%E4%BA%8C%E5%84%BF%E5%AD%90%E6%89%93%E7%90%83%E6%AD%A3%E8%84%B8%23) `135.6K 🔥`
1. [特朗普话音刚落伊朗导弹袭向以色列](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%9D%E9%9F%B3%E5%88%9A%E8%90%BD%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%90%91%E4%BB%A5%E8%89%B2%E5%88%97%23) `243.1K 🔥` `-30%`
1. [日本终于露出獠牙 (Japan finally shows its fangs)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%BB%88%E4%BA%8E%E9%9C%B2%E5%87%BA%E7%8D%A0%E7%89%99%23) `222.8K 🔥` `-54%`
1. [优思益营销策划公司被立案调查 (Yousiyi Marketing Planning Company was placed under investigation)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%E8%90%A5%E9%94%80%E7%AD%96%E5%88%92%E5%85%AC%E5%8F%B8%E8%A2%AB%E7%AB%8B%E6%A1%88%E8%B0%83%E6%9F%A5%23) `205.0K 🔥` `-76%`
1. [怪不得上大学老了这么多](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E4%B8%8A%E5%A4%A7%E5%AD%A6%E8%80%81%E4%BA%86%E8%BF%99%E4%B9%88%E5%A4%9A%23) `133.4K 🔥` `-58%`
1. [主播陆续回应优思益售后](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E6%92%AD%E9%99%86%E7%BB%AD%E5%9B%9E%E5%BA%94%E4%BC%98%E6%80%9D%E7%9B%8A%E5%94%AE%E5%90%8E%23) `131.9K 🔥` `-41%`
1. [曝短剧男顶忘本](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%9F%AD%E5%89%A7%E7%94%B7%E9%A1%B6%E5%BF%98%E6%9C%AC%23) `91.9K 🔥` `-45%`
1. [老爸收入不敌女儿卖拼豆直呼崩溃 (Dad's income is not as good as his daughter's, and he collapses after selling pinto beans)](https://s.weibo.com/weibo?q=%23%E8%80%81%E7%88%B8%E6%94%B6%E5%85%A5%E4%B8%8D%E6%95%8C%E5%A5%B3%E5%84%BF%E5%8D%96%E6%8B%BC%E8%B1%86%E7%9B%B4%E5%91%BC%E5%B4%A9%E6%BA%83%23) `90.4K 🔥` `-45%`
1. [乘风2026](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%23) `89.5K 🔥` `-32%`
1. [说唱歌手JCole加盟CBA](https://s.weibo.com/weibo?q=%23%E8%AF%B4%E5%94%B1%E6%AD%8C%E6%89%8BJCole%E5%8A%A0%E7%9B%9FCBA%23) `86.8K 🔥` `-25%`
1. [张雪机车夺冠含金量](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%A4%BA%E5%86%A0%E5%90%AB%E9%87%91%E9%87%8F%23) `84.8K 🔥` `-51%`
1. [宝珠](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E7%8F%A0%23) `82.8K 🔥` `-37%`

Updated at 2026-04-02 14:16:04

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
