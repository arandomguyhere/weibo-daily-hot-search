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

1. [黄金一跌再跌 (Gold falls again and again)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E4%B8%80%E8%B7%8C%E5%86%8D%E8%B7%8C%23) `1.5M 🔥` `NEW`
1. [C罗夺得沙特联赛冠军](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%A4%BA%E5%BE%97%E6%B2%99%E7%89%B9%E8%81%94%E8%B5%9B%E5%86%A0%E5%86%9B%23) `633.0K 🔥` `NEW`
1. [奇妙物种守护计划](https://s.weibo.com/weibo?q=%23%E5%A5%87%E5%A6%99%E7%89%A9%E7%A7%8D%E5%AE%88%E6%8A%A4%E8%AE%A1%E5%88%92%23) `428.0K 🔥` `NEW`
1. [马奎尔落选世界杯名单](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A5%8E%E5%B0%94%E8%90%BD%E9%80%89%E4%B8%96%E7%95%8C%E6%9D%AF%E5%90%8D%E5%8D%95%23) `382.4K 🔥` `NEW`
1. [此沙陈丽君方否认恋情](https://s.weibo.com/weibo?q=%23%E6%AD%A4%E6%B2%99%E9%99%88%E4%B8%BD%E5%90%9B%E6%96%B9%E5%90%A6%E8%AE%A4%E6%81%8B%E6%83%85%23) `232.0K 🔥` `NEW`
1. [至今不知道庾澄庆家有多难搞](https://s.weibo.com/weibo?q=%23%E8%87%B3%E4%BB%8A%E4%B8%8D%E7%9F%A5%E9%81%93%E5%BA%BE%E6%BE%84%E5%BA%86%E5%AE%B6%E6%9C%89%E5%A4%9A%E9%9A%BE%E6%90%9E%23) `231.7K 🔥` `NEW`
1. [洛克王国](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E5%85%8B%E7%8E%8B%E5%9B%BD%23) `231.3K 🔥` `NEW`
1. [徐若晗艺术生的含金量还在上升](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%8B%A5%E6%99%97%E8%89%BA%E6%9C%AF%E7%94%9F%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E8%BF%98%E5%9C%A8%E4%B8%8A%E5%8D%87%23) `231.3K 🔥` `NEW`
1. [男子拍到摊贩往西瓜上抹不明液体](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8B%8D%E5%88%B0%E6%91%8A%E8%B4%A9%E5%BE%80%E8%A5%BF%E7%93%9C%E4%B8%8A%E6%8A%B9%E4%B8%8D%E6%98%8E%E6%B6%B2%E4%BD%93%23) `230.9K 🔥` `NEW`
1. [男子拒见婚外女友不慎将其撞死](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8B%92%E8%A7%81%E5%A9%9A%E5%A4%96%E5%A5%B3%E5%8F%8B%E4%B8%8D%E6%85%8E%E5%B0%86%E5%85%B6%E6%92%9E%E6%AD%BB%23) `230.8K 🔥` `NEW`
1. [用上AI后工作时间反而更长了 (Working hours will be longer after using AI)](https://s.weibo.com/weibo?q=%23%E7%94%A8%E4%B8%8AAI%E5%90%8E%E5%B7%A5%E4%BD%9C%E6%97%B6%E9%97%B4%E5%8F%8D%E8%80%8C%E6%9B%B4%E9%95%BF%E4%BA%86%23) `229.5K 🔥` `NEW`
1. [曝Angelababy没有靠黄晓明](https://s.weibo.com/weibo?q=%23%E6%9B%9DAngelababy%E6%B2%A1%E6%9C%89%E9%9D%A0%E9%BB%84%E6%99%93%E6%98%8E%23) `215.5K 🔥` `NEW`
1. [这才是护学岗该有的样子](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%89%8D%E6%98%AF%E6%8A%A4%E5%AD%A6%E5%B2%97%E8%AF%A5%E6%9C%89%E7%9A%84%E6%A0%B7%E5%AD%90%23) `205.7K 🔥` `NEW`
1. [A股大反转原因](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%A4%A7%E5%8F%8D%E8%BD%AC%E5%8E%9F%E5%9B%A0%23) `203.0K 🔥` `NEW`
1. [女子收22万彩礼拉黑准新郎](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%94%B622%E4%B8%87%E5%BD%A9%E7%A4%BC%E6%8B%89%E9%BB%91%E5%87%86%E6%96%B0%E9%83%8E%23) `197.2K 🔥` `NEW`
1. [金秀贤已接受精神科治疗](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%A7%80%E8%B4%A4%E5%B7%B2%E6%8E%A5%E5%8F%97%E7%B2%BE%E7%A5%9E%E7%A7%91%E6%B2%BB%E7%96%97%23) `179.3K 🔥` `NEW`
1. [良陈美锦](https://s.weibo.com/weibo?q=%23%E8%89%AF%E9%99%88%E7%BE%8E%E9%94%A6%23) `173.2K 🔥` `NEW`
1. [睡觉时出现这4种表现可能是疾病信号](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E8%A7%89%E6%97%B6%E5%87%BA%E7%8E%B0%E8%BF%994%E7%A7%8D%E8%A1%A8%E7%8E%B0%E5%8F%AF%E8%83%BD%E6%98%AF%E7%96%BE%E7%97%85%E4%BF%A1%E5%8F%B7%23) `170.2K 🔥` `NEW`
1. [终于理解了朋友是流动的这句话](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%90%86%E8%A7%A3%E4%BA%86%E6%9C%8B%E5%8F%8B%E6%98%AF%E6%B5%81%E5%8A%A8%E7%9A%84%E8%BF%99%E5%8F%A5%E8%AF%9D%23) `169.5K 🔥` `NEW`
1. [杨梅价格暴跌](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%A2%85%E4%BB%B7%E6%A0%BC%E6%9A%B4%E8%B7%8C%23) `158.8K 🔥` `NEW`
1. [丁程鑫不参与开推胆量排名 (Ding Chengxin will not participate in launching courage ranking)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E4%B8%8D%E5%8F%82%E4%B8%8E%E5%BC%80%E6%8E%A8%E8%83%86%E9%87%8F%E6%8E%92%E5%90%8D%23) `151.2K 🔥` `NEW`
1. [才到5月暴雨频繁原因](https://s.weibo.com/weibo?q=%23%E6%89%8D%E5%88%B05%E6%9C%88%E6%9A%B4%E9%9B%A8%E9%A2%91%E7%B9%81%E5%8E%9F%E5%9B%A0%23) `150.7K 🔥` `NEW`
1. [u17世界杯](https://s.weibo.com/weibo?q=%23u17%E4%B8%96%E7%95%8C%E6%9D%AF%23) `132.2K 🔥` `NEW`
1. [BLG官宣Viper回国治病](https://s.weibo.com/weibo?q=%23BLG%E5%AE%98%E5%AE%A3Viper%E5%9B%9E%E5%9B%BD%E6%B2%BB%E7%97%85%23) `126.0K 🔥` `NEW`
1. [一次性雨伞用过被退写满学生姓名](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%AC%A1%E6%80%A7%E9%9B%A8%E4%BC%9E%E7%94%A8%E8%BF%87%E8%A2%AB%E9%80%80%E5%86%99%E6%BB%A1%E5%AD%A6%E7%94%9F%E5%A7%93%E5%90%8D%23) `114.1K 🔥` `NEW`
1. [白鹿 油画公主](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%20%E6%B2%B9%E7%94%BB%E5%85%AC%E4%B8%BB%23) `104.7K 🔥` `NEW`
1. [伊能静上手拉开了孙杨](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E4%B8%8A%E6%89%8B%E6%8B%89%E5%BC%80%E4%BA%86%E5%AD%99%E6%9D%A8%23) `103.3K 🔥` `NEW`
1. [田曦薇西装露额头](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%A5%BF%E8%A3%85%E9%9C%B2%E9%A2%9D%E5%A4%B4%23) `103.0K 🔥` `NEW`
1. [宁艺卓评论吉赛尔恋情传闻帖](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E8%AF%84%E8%AE%BA%E5%90%89%E8%B5%9B%E5%B0%94%E6%81%8B%E6%83%85%E4%BC%A0%E9%97%BB%E5%B8%96%23) `99.9K 🔥` `NEW`
1. [金秀贤从全民唾骂到沉冤得雪](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%A7%80%E8%B4%A4%E4%BB%8E%E5%85%A8%E6%B0%91%E5%94%BE%E9%AA%82%E5%88%B0%E6%B2%89%E5%86%A4%E5%BE%97%E9%9B%AA%23) `94.0K 🔥` `NEW`
1. [母亲阳台烧香起火致2子女身亡 (Mother burns incense on balcony and catches fire, killing 2 children)](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E9%98%B3%E5%8F%B0%E7%83%A7%E9%A6%99%E8%B5%B7%E7%81%AB%E8%87%B42%E5%AD%90%E5%A5%B3%E8%BA%AB%E4%BA%A1%23) `964.7K 🔥` `+63%`
1. [我国建成规模最大水利基础设施体系 (my country has built the largest water conservancy infrastructure system)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%BB%BA%E6%88%90%E8%A7%84%E6%A8%A1%E6%9C%80%E5%A4%A7%E6%B0%B4%E5%88%A9%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD%E4%BD%93%E7%B3%BB%23) `701.4K 🔥` `+110%`
1. [舒淇演绎小米YU7伟大旅程 (Shu Qi interprets the great journey of Xiaomi YU7)](https://s.weibo.com/weibo?q=%23%E8%88%92%E6%B7%87%E6%BC%94%E7%BB%8E%E5%B0%8F%E7%B1%B3YU7%E4%BC%9F%E5%A4%A7%E6%97%85%E7%A8%8B%23) `654.9K 🔥` `+114%`
1. [张豆豆情绪稳定后又被孙杨说哭了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%B1%86%E8%B1%86%E6%83%85%E7%BB%AA%E7%A8%B3%E5%AE%9A%E5%90%8E%E5%8F%88%E8%A2%AB%E5%AD%99%E6%9D%A8%E8%AF%B4%E5%93%AD%E4%BA%86%23) `428.5K 🔥` `+47%`
1. [雷军说输给特斯拉不丢人 (Lei Jun says it’s not shameful to lose to Tesla)](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E8%AF%B4%E8%BE%93%E7%BB%99%E7%89%B9%E6%96%AF%E6%8B%89%E4%B8%8D%E4%B8%A2%E4%BA%BA%23) `278.4K 🔥` `+142%`
1. [豆包炒股建议](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E7%82%92%E8%82%A1%E5%BB%BA%E8%AE%AE%23) `242.1K 🔥` `+76%`
1. [发朋友圈辱骂邻居孩子被判赔7000元 (He was sentenced to pay 7,000 yuan for insulting a neighbor's child in a WeChat post)](https://s.weibo.com/weibo?q=%23%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%E8%BE%B1%E9%AA%82%E9%82%BB%E5%B1%85%E5%AD%A9%E5%AD%90%E8%A2%AB%E5%88%A4%E8%B5%947000%E5%85%83%23) `230.4K 🔥` `+100%`
1. [暗恋同事的有福了 (Blessed are those who have a crush on their colleagues)](https://s.weibo.com/weibo?q=%23%E6%9A%97%E6%81%8B%E5%90%8C%E4%BA%8B%E7%9A%84%E6%9C%89%E7%A6%8F%E4%BA%86%23) `217.8K 🔥` `+90%`
1. [官方通报税务局职工上班玩手游 (Official reports that tax bureau employees play mobile games at work)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E7%A8%8E%E5%8A%A1%E5%B1%80%E8%81%8C%E5%B7%A5%E4%B8%8A%E7%8F%AD%E7%8E%A9%E6%89%8B%E6%B8%B8%23) `196.1K 🔥` `+67%`
1. [小米YU7首战ModelY八败两胜](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3YU7%E9%A6%96%E6%88%98ModelY%E5%85%AB%E8%B4%A5%E4%B8%A4%E8%83%9C%23) `193.1K 🔥` `+68%`
1. [老人不买天价鹿茸被一脚踹翻](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E4%B8%8D%E4%B9%B0%E5%A4%A9%E4%BB%B7%E9%B9%BF%E8%8C%B8%E8%A2%AB%E4%B8%80%E8%84%9A%E8%B8%B9%E7%BF%BB%23) `171.1K 🔥` `+49%`
1. [寿司郎为什么洗不干净盘子 (Why can't the sushi man wash the dishes?)](https://s.weibo.com/weibo?q=%23%E5%AF%BF%E5%8F%B8%E9%83%8E%E4%B8%BA%E4%BB%80%E4%B9%88%E6%B4%97%E4%B8%8D%E5%B9%B2%E5%87%80%E7%9B%98%E5%AD%90%23) `170.5K 🔥` `+26%`
1. [王菲别唱了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E5%88%AB%E5%94%B1%E4%BA%86%23) `126.6K 🔥`
1. [得闲谨制横扫](https://s.weibo.com/weibo?q=%23%E5%BE%97%E9%97%B2%E8%B0%A8%E5%88%B6%E6%A8%AA%E6%89%AB%23) `110.4K 🔥`
1. [弟弟谎报身份致哥哥成吸毒人员](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%E8%B0%8E%E6%8A%A5%E8%BA%AB%E4%BB%BD%E8%87%B4%E5%93%A5%E5%93%A5%E6%88%90%E5%90%B8%E6%AF%92%E4%BA%BA%E5%91%98%23) `107.8K 🔥`
1. [父母弄散儿子拼3天积木感觉天塌了 (Parents broke up their son's building blocks and felt like the sky was falling after three days of building blocks.)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E5%BC%84%E6%95%A3%E5%84%BF%E5%AD%90%E6%8B%BC3%E5%A4%A9%E7%A7%AF%E6%9C%A8%E6%84%9F%E8%A7%89%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `103.1K 🔥`
1. [小米17Max真香 (Xiaomi Mi 17 Max smells really good)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B317Max%E7%9C%9F%E9%A6%99%23) `100.1K 🔥`
1. [泰国豪门接班人被亲弟指控性侵](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E8%B1%AA%E9%97%A8%E6%8E%A5%E7%8F%AD%E4%BA%BA%E8%A2%AB%E4%BA%B2%E5%BC%9F%E6%8C%87%E6%8E%A7%E6%80%A7%E4%BE%B5%23) `93.8K 🔥`
1. [婴幼儿湿巾检出锑为何不公布品牌](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%B9%BC%E5%84%BF%E6%B9%BF%E5%B7%BE%E6%A3%80%E5%87%BA%E9%94%91%E4%B8%BA%E4%BD%95%E4%B8%8D%E5%85%AC%E5%B8%83%E5%93%81%E7%89%8C%23) `232.0K 🔥` `-45%`
1. [给阿嬷的情书亚洲年度最佳艺术电影 (A Love Letter to Grandma Asia’s Best Art Film of the Year)](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E4%BA%9A%E6%B4%B2%E5%B9%B4%E5%BA%A6%E6%9C%80%E4%BD%B3%E8%89%BA%E6%9C%AF%E7%94%B5%E5%BD%B1%23) `101.4K 🔥` `-26%`

Updated at 2026-05-22 08:02:59

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
