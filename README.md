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

1. [卫龙全球品牌代言人时代少年团 (Weilong Global Brand Spokesperson Times Youth League)](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E9%BE%99%E5%85%A8%E7%90%83%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%23) `431.4K 🔥` `NEW`
1. [乘风初见面直播](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E%E5%88%9D%E8%A7%81%E9%9D%A2%E7%9B%B4%E6%92%AD%23) `323.0K 🔥` `NEW`
1. [你好1983结局](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD1983%E7%BB%93%E5%B1%80%23) `234.8K 🔥` `NEW`
1. [中国把数据中心搬进大海](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%8A%8A%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%E6%90%AC%E8%BF%9B%E5%A4%A7%E6%B5%B7%23) `232.6K 🔥` `NEW`
1. [乘风2026立意片来了](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E7%AB%8B%E6%84%8F%E7%89%87%E6%9D%A5%E4%BA%86%23) `218.9K 🔥` `NEW`
1. [投资被骗后竟取现35万约骗子见面](https://s.weibo.com/weibo?q=%23%E6%8A%95%E8%B5%84%E8%A2%AB%E9%AA%97%E5%90%8E%E7%AB%9F%E5%8F%96%E7%8E%B035%E4%B8%87%E7%BA%A6%E9%AA%97%E5%AD%90%E8%A7%81%E9%9D%A2%23) `173.4K 🔥` `NEW`
1. [女子争车位摔倒身亡被告判赔14.9万](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BA%89%E8%BD%A6%E4%BD%8D%E6%91%94%E5%80%92%E8%BA%AB%E4%BA%A1%E8%A2%AB%E5%91%8A%E5%88%A4%E8%B5%9414.9%E4%B8%87%23) `170.7K 🔥` `NEW`
1. [林依晨43岁状态](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BE%9D%E6%99%A843%E5%B2%81%E7%8A%B6%E6%80%81%23) `170.5K 🔥` `NEW`
1. [iPhone18Pro模具偷跑](https://s.weibo.com/weibo?q=%23iPhone18Pro%E6%A8%A1%E5%85%B7%E5%81%B7%E8%B7%91%23) `162.3K 🔥` `NEW`
1. [猪肉价格接近姜蒜](https://s.weibo.com/weibo?q=%23%E7%8C%AA%E8%82%89%E4%BB%B7%E6%A0%BC%E6%8E%A5%E8%BF%91%E5%A7%9C%E8%92%9C%23) `159.6K 🔥` `NEW`
1. [古巨基二胎儿子正面照公开 (Frontal photos of Leo Ku's second child released)](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E5%B7%A8%E5%9F%BA%E4%BA%8C%E8%83%8E%E5%84%BF%E5%AD%90%E6%AD%A3%E9%9D%A2%E7%85%A7%E5%85%AC%E5%BC%80%23) `157.3K 🔥` `NEW`
1. [孙颖莎蒯曼争八强](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%92%AF%E6%9B%BC%E4%BA%89%E5%85%AB%E5%BC%BA%23) `131.5K 🔥` `NEW`
1. [KSG对战DYG](https://s.weibo.com/weibo?q=%23KSG%E5%AF%B9%E6%88%98DYG%23) `115.1K 🔥` `NEW`
1. [TOP全员感冒](https://s.weibo.com/weibo?q=%23TOP%E5%85%A8%E5%91%98%E6%84%9F%E5%86%92%23) `112.8K 🔥` `NEW`
1. [白日提灯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `105.3K 🔥` `NEW`
1. [蒯曼12比10孙颖莎](https://s.weibo.com/weibo?q=%23%E8%92%AF%E6%9B%BC12%E6%AF%9410%E5%AD%99%E9%A2%96%E8%8E%8E%23) `104.6K 🔥` `NEW`
1. [老式水果为什么消失了](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%BC%8F%E6%B0%B4%E6%9E%9C%E4%B8%BA%E4%BB%80%E4%B9%88%E6%B6%88%E5%A4%B1%E4%BA%86%23) `104.6K 🔥` `NEW`
1. [逐玉白日提灯月鳞绮纪云合前三](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E4%BA%91%E5%90%88%E5%89%8D%E4%B8%89%23) `87.7K 🔥` `NEW`
1. [现货黄金](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E8%B4%A7%E9%BB%84%E9%87%91%23) `80.8K 🔥` `NEW`
1. [弟弟悄办父亲丧事墓碑漏刻姐姐名字](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%E6%82%84%E5%8A%9E%E7%88%B6%E4%BA%B2%E4%B8%A7%E4%BA%8B%E5%A2%93%E7%A2%91%E6%BC%8F%E5%88%BB%E5%A7%90%E5%A7%90%E5%90%8D%E5%AD%97%23) `80.3K 🔥` `NEW`
1. [张俪回应二搭迪丽热巴 (Zhang Li responded to her second partner Dilireba)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BF%AA%E5%9B%9E%E5%BA%94%E4%BA%8C%E6%90%AD%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23) `78.0K 🔥` `NEW`
1. [王安宇 宽肩窄腰](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%20%E5%AE%BD%E8%82%A9%E7%AA%84%E8%85%B0%23) `76.7K 🔥` `NEW`
1. [王灿晒女儿近照称不想二胎](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%81%BF%E6%99%92%E5%A5%B3%E5%84%BF%E8%BF%91%E7%85%A7%E7%A7%B0%E4%B8%8D%E6%83%B3%E4%BA%8C%E8%83%8E%23) `76.5K 🔥` `NEW`
1. [孙颖莎11比4蒯曼](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E11%E6%AF%944%E8%92%AF%E6%9B%BC%23) `76.4K 🔥` `NEW`
1. [14岁男孩与猫狗同吃同睡双眼险失明](https://s.weibo.com/weibo?q=%2314%E5%B2%81%E7%94%B7%E5%AD%A9%E4%B8%8E%E7%8C%AB%E7%8B%97%E5%90%8C%E5%90%83%E5%90%8C%E7%9D%A1%E5%8F%8C%E7%9C%BC%E9%99%A9%E5%A4%B1%E6%98%8E%23) `72.8K 🔥` `NEW`
1. [三块的成本做出国宴的气场](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%9D%97%E7%9A%84%E6%88%90%E6%9C%AC%E5%81%9A%E5%87%BA%E5%9B%BD%E5%AE%B4%E7%9A%84%E6%B0%94%E5%9C%BA%23) `70.5K 🔥` `NEW`
1. [上班真的很耽误事](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E7%9C%9F%E7%9A%84%E5%BE%88%E8%80%BD%E8%AF%AF%E4%BA%8B%23) `68.1K 🔥` `NEW`
1. [印度65岁大象死亡生前被涂粉色颜料](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A665%E5%B2%81%E5%A4%A7%E8%B1%A1%E6%AD%BB%E4%BA%A1%E7%94%9F%E5%89%8D%E8%A2%AB%E6%B6%82%E7%B2%89%E8%89%B2%E9%A2%9C%E6%96%99%23) `1.1M 🔥` `+110%`
1. [孙颖莎vs蒯曼](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Evs%E8%92%AF%E6%9B%BC%23) `784.2K 🔥` `+219%`
1. [离职守恒定律](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E8%81%8C%E5%AE%88%E6%81%92%E5%AE%9A%E5%BE%8B%23) `232.4K 🔥` `+160%`
1. [泰国女星近乎昏迷时遭救护员性侵 (Thai actress was sexually assaulted by paramedic while she was nearly comatose)](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E5%A5%B3%E6%98%9F%E8%BF%91%E4%B9%8E%E6%98%8F%E8%BF%B7%E6%97%B6%E9%81%AD%E6%95%91%E6%8A%A4%E5%91%98%E6%80%A7%E4%BE%B5%23) `230.2K 🔥` `+225%`
1. [乘风2026](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%23) `226.0K 🔥` `+152%`
1. [以色列遭到开战以来最大规模导弹袭击](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E9%81%AD%E5%88%B0%E5%BC%80%E6%88%98%E4%BB%A5%E6%9D%A5%E6%9C%80%E5%A4%A7%E8%A7%84%E6%A8%A1%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%87%BB%23) `221.2K 🔥` `+152%`
1. [男子趁妻子去厕所上台相亲 (Man went on a blind date while his wife was in the toilet)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%B6%81%E5%A6%BB%E5%AD%90%E5%8E%BB%E5%8E%95%E6%89%80%E4%B8%8A%E5%8F%B0%E7%9B%B8%E4%BA%B2%23) `169.2K 🔥` `+70%`
1. [高圆圆赵又廷女儿长这么大了](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%9C%86%E5%9C%86%E8%B5%B5%E5%8F%88%E5%BB%B7%E5%A5%B3%E5%84%BF%E9%95%BF%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `141.6K 🔥` `+77%`
1. [又是赏花好时节 (It’s a good time to enjoy flowers again)](https://s.weibo.com/weibo?q=%23%E5%8F%88%E6%98%AF%E8%B5%8F%E8%8A%B1%E5%A5%BD%E6%97%B6%E8%8A%82%23) `644.3K 🔥`
1. [优思益 (Yousiyi)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%23) `326.4K 🔥`
1. [被时代淘汰的水果 (Fruits that have been eliminated by the times)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%97%B6%E4%BB%A3%E6%B7%98%E6%B1%B0%E7%9A%84%E6%B0%B4%E6%9E%9C%23) `270.8K 🔥`
1. [张杰回应张凌赫送花篮](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E5%9B%9E%E5%BA%94%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%80%81%E8%8A%B1%E7%AF%AE%23) `179.4K 🔥`
1. [男孩捡50g金条咬了一口竟是真的](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E6%8D%A150g%E9%87%91%E6%9D%A1%E5%92%AC%E4%BA%86%E4%B8%80%E5%8F%A3%E7%AB%9F%E6%98%AF%E7%9C%9F%E7%9A%84%23) `103.9K 🔥`
1. [董宇辉称商品上架前会完成相关检测](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%AE%87%E8%BE%89%E7%A7%B0%E5%95%86%E5%93%81%E4%B8%8A%E6%9E%B6%E5%89%8D%E4%BC%9A%E5%AE%8C%E6%88%90%E7%9B%B8%E5%85%B3%E6%A3%80%E6%B5%8B%23) `98.5K 🔥`
1. [李若彤发布致歉声明 (Li Ruotong issued an apology statement)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8B%A5%E5%BD%A4%E5%8F%91%E5%B8%83%E8%87%B4%E6%AD%89%E5%A3%B0%E6%98%8E%23) `98.0K 🔥`
1. [曾舜晞工作室致歉](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%88%9C%E6%99%9E%E5%B7%A5%E4%BD%9C%E5%AE%A4%E8%87%B4%E6%AD%89%23) `80.5K 🔥`
1. [假性带娃](https://s.weibo.com/weibo?q=%23%E5%81%87%E6%80%A7%E5%B8%A6%E5%A8%83%23) `72.9K 🔥`
1. [同事离职显得我很命苦](https://s.weibo.com/weibo?q=%23%E5%90%8C%E4%BA%8B%E7%A6%BB%E8%81%8C%E6%98%BE%E5%BE%97%E6%88%91%E5%BE%88%E5%91%BD%E8%8B%A6%23) `71.6K 🔥`
1. [已吃两瓶优思益消费者发声 (Consumers who have eaten two bottles of Usiyi speak out)](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E5%90%83%E4%B8%A4%E7%93%B6%E4%BC%98%E6%80%9D%E7%9B%8A%E6%B6%88%E8%B4%B9%E8%80%85%E5%8F%91%E5%A3%B0%23) `396.7K 🔥` `-63%`
1. [女子104000元买80g金条店员报警 (Woman bought 80g gold bar for 104,000 yuan and store clerk called the police)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90104000%E5%85%83%E4%B9%B080g%E9%87%91%E6%9D%A1%E5%BA%97%E5%91%98%E6%8A%A5%E8%AD%A6%23) `317.7K 🔥` `-60%`
1. [李荣浩方否认恋人抄袭 (Li Ronghao denies plagiarism by his lover)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%E6%96%B9%E5%90%A6%E8%AE%A4%E6%81%8B%E4%BA%BA%E6%8A%84%E8%A2%AD%23) `227.8K 🔥` `-61%`
1. [三年后狗近视得找不到饭盆 (Three years later, the dog was so short-sighted that he couldn’t find his food bowl.)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%B9%B4%E5%90%8E%E7%8B%97%E8%BF%91%E8%A7%86%E5%BE%97%E6%89%BE%E4%B8%8D%E5%88%B0%E9%A5%AD%E7%9B%86%23) `179.1K 🔥` `-33%`
1. [毛晓彤花神妆](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E6%99%93%E5%BD%A4%E8%8A%B1%E7%A5%9E%E5%A6%86%23) `80.5K 🔥` `-29%`
1. [美国一婴儿光天化日在街头被枪杀](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%B8%80%E5%A9%B4%E5%84%BF%E5%85%89%E5%A4%A9%E5%8C%96%E6%97%A5%E5%9C%A8%E8%A1%97%E5%A4%B4%E8%A2%AB%E6%9E%AA%E6%9D%80%23) `80.3K 🔥` `-38%`

Updated at 2026-04-02 19:31:32

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
