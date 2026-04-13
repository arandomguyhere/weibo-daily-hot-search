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

1. [科大讯飞回应网传员工中1500万 (iFlytek responds to online rumors that 15 million employees)](https://s.weibo.com/weibo?q=%23%E7%A7%91%E5%A4%A7%E8%AE%AF%E9%A3%9E%E5%9B%9E%E5%BA%94%E7%BD%91%E4%BC%A0%E5%91%98%E5%B7%A5%E4%B8%AD1500%E4%B8%87%23) `1.1M 🔥` `NEW`
1. [马斯克版微信](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E7%89%88%E5%BE%AE%E4%BF%A1%23) `836.7K 🔥` `NEW`
1. [没认出这是章子怡](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E8%AE%A4%E5%87%BA%E8%BF%99%E6%98%AF%E7%AB%A0%E5%AD%90%E6%80%A1%23) `481.5K 🔥` `NEW`
1. [孙燕姿演唱会官宣六站](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%87%95%E5%A7%BF%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%98%E5%AE%A3%E5%85%AD%E7%AB%99%23) `207.5K 🔥` `NEW`
1. [今日辟谣](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E6%97%A5%E8%BE%9F%E8%B0%A3%23) `203.9K 🔥` `NEW`
1. [内娱开始反向播剧了](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E5%BC%80%E5%A7%8B%E5%8F%8D%E5%90%91%E6%92%AD%E5%89%A7%E4%BA%86%23) `138.7K 🔥` `NEW`
1. [眉姐姐斓曦怎么了](https://s.weibo.com/weibo?q=%23%E7%9C%89%E5%A7%90%E5%A7%90%E6%96%93%E6%9B%A6%E6%80%8E%E4%B9%88%E4%BA%86%23) `138.4K 🔥` `NEW`
1. [钱天一论文提到孙颖莎](https://s.weibo.com/weibo?q=%23%E9%92%B1%E5%A4%A9%E4%B8%80%E8%AE%BA%E6%96%87%E6%8F%90%E5%88%B0%E5%AD%99%E9%A2%96%E8%8E%8E%23) `137.9K 🔥` `NEW`
1. [女孩被拐后因长相被多次转卖](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E8%A2%AB%E6%8B%90%E5%90%8E%E5%9B%A0%E9%95%BF%E7%9B%B8%E8%A2%AB%E5%A4%9A%E6%AC%A1%E8%BD%AC%E5%8D%96%23) `136.1K 🔥` `NEW`
1. [miumiu拍赵今麦 欲扬先抑](https://s.weibo.com/weibo?q=%23miumiu%E6%8B%8D%E8%B5%B5%E4%BB%8A%E9%BA%A6%20%E6%AC%B2%E6%89%AC%E5%85%88%E6%8A%91%23) `135.3K 🔥` `NEW`
1. [ally整容模版是迪丽热巴 (ally's plastic surgery model is Dilireba)](https://s.weibo.com/weibo?q=%23ally%E6%95%B4%E5%AE%B9%E6%A8%A1%E7%89%88%E6%98%AF%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23) `133.6K 🔥` `NEW`
1. [中方回应向伊朗提供武器说法](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E5%90%91%E4%BC%8A%E6%9C%97%E6%8F%90%E4%BE%9B%E6%AD%A6%E5%99%A8%E8%AF%B4%E6%B3%95%23) `133.4K 🔥` `NEW`
1. [男子回应彩票中奖1011万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%9E%E5%BA%94%E5%BD%A9%E7%A5%A8%E4%B8%AD%E5%A5%961011%E4%B8%87%23) `125.5K 🔥` `NEW`
1. [王彦霖 翻红](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%BD%A6%E9%9C%96%20%E7%BF%BB%E7%BA%A2%23) `123.9K 🔥` `NEW`
1. [官方回应网传茅台总经理王莉被查](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E7%BD%91%E4%BC%A0%E8%8C%85%E5%8F%B0%E6%80%BB%E7%BB%8F%E7%90%86%E7%8E%8B%E8%8E%89%E8%A2%AB%E6%9F%A5%23) `118.3K 🔥` `NEW`
1. [做牵引双腿被吊超1小时无人管](https://s.weibo.com/weibo?q=%23%E5%81%9A%E7%89%B5%E5%BC%95%E5%8F%8C%E8%85%BF%E8%A2%AB%E5%90%8A%E8%B6%851%E5%B0%8F%E6%97%B6%E6%97%A0%E4%BA%BA%E7%AE%A1%23) `115.9K 🔥` `NEW`
1. [伊朗总统称准备达成平衡公平协议](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E7%A7%B0%E5%87%86%E5%A4%87%E8%BE%BE%E6%88%90%E5%B9%B3%E8%A1%A1%E5%85%AC%E5%B9%B3%E5%8D%8F%E8%AE%AE%23) `114.6K 🔥` `NEW`
1. [律师发起优思益诉讼重点追责主播](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E5%8F%91%E8%B5%B7%E4%BC%98%E6%80%9D%E7%9B%8A%E8%AF%89%E8%AE%BC%E9%87%8D%E7%82%B9%E8%BF%BD%E8%B4%A3%E4%B8%BB%E6%92%AD%23) `112.6K 🔥` `NEW`
1. [小猫舔毛时会帮你舔任何东西](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E8%88%94%E6%AF%9B%E6%97%B6%E4%BC%9A%E5%B8%AE%E4%BD%A0%E8%88%94%E4%BB%BB%E4%BD%95%E4%B8%9C%E8%A5%BF%23) `111.3K 🔥` `NEW`
1. [赵丽颖曾遗憾只拍了楚乔传一本半](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E6%9B%BE%E9%81%97%E6%86%BE%E5%8F%AA%E6%8B%8D%E4%BA%86%E6%A5%9A%E4%B9%94%E4%BC%A0%E4%B8%80%E6%9C%AC%E5%8D%8A%23) `108.3K 🔥` `NEW`
1. [花三十块钱在海边买了个笑话 (I bought a joke at the beach for thirty yuan)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E4%B8%89%E5%8D%81%E5%9D%97%E9%92%B1%E5%9C%A8%E6%B5%B7%E8%BE%B9%E4%B9%B0%E4%BA%86%E4%B8%AA%E7%AC%91%E8%AF%9D%23) `105.5K 🔥` `NEW`
1. [TXT回归MV](https://s.weibo.com/weibo?q=%23TXT%E5%9B%9E%E5%BD%92MV%23) `103.2K 🔥` `NEW`
1. [BLG对战JDG](https://s.weibo.com/weibo?q=%23BLG%E5%AF%B9%E6%88%98JDG%23) `89.8K 🔥` `NEW`
1. [无言应援NexT1DE](https://s.weibo.com/weibo?q=%23%E6%97%A0%E8%A8%80%E5%BA%94%E6%8F%B4NexT1DE%23) `89.8K 🔥` `NEW`
1. [忽然意识到自己已经绝版了](https://s.weibo.com/weibo?q=%23%E5%BF%BD%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E8%87%AA%E5%B7%B1%E5%B7%B2%E7%BB%8F%E7%BB%9D%E7%89%88%E4%BA%86%23) `84.5K 🔥` `NEW`
1. [西班牙首相和雷军自拍](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%A6%96%E7%9B%B8%E5%92%8C%E9%9B%B7%E5%86%9B%E8%87%AA%E6%8B%8D%23) `79.6K 🔥` `NEW`
1. [中国机器人在波兰街头驱赶野猪](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%9C%A8%E6%B3%A2%E5%85%B0%E8%A1%97%E5%A4%B4%E9%A9%B1%E8%B5%B6%E9%87%8E%E7%8C%AA%23) `79.3K 🔥` `NEW`
1. [华为AI眼镜4月20日发布](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAAI%E7%9C%BC%E9%95%9C4%E6%9C%8820%E6%97%A5%E5%8F%91%E5%B8%83%23) `78.4K 🔥` `NEW`
1. [像高中生一样生活](https://s.weibo.com/weibo?q=%23%E5%83%8F%E9%AB%98%E4%B8%AD%E7%94%9F%E4%B8%80%E6%A0%B7%E7%94%9F%E6%B4%BB%23) `78.0K 🔥` `NEW`
1. [西宁一面馆标语是对女性的直接冒犯](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%81%E4%B8%80%E9%9D%A2%E9%A6%86%E6%A0%87%E8%AF%AD%E6%98%AF%E5%AF%B9%E5%A5%B3%E6%80%A7%E7%9A%84%E7%9B%B4%E6%8E%A5%E5%86%92%E7%8A%AF%23) `203.3K 🔥` `+43%`
1. [文旅消费迎来新爆发 (Cultural tourism consumption ushered in a new explosion)](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%97%85%E6%B6%88%E8%B4%B9%E8%BF%8E%E6%9D%A5%E6%96%B0%E7%88%86%E5%8F%91%23) `672.1K 🔥`
1. [楚乔传 全员下场](https://s.weibo.com/weibo?q=%23%E6%A5%9A%E4%B9%94%E4%BC%A0%20%E5%85%A8%E5%91%98%E4%B8%8B%E5%9C%BA%23) `137.4K 🔥`
1. [黄灿灿为防恶剪每天换发型](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E4%B8%BA%E9%98%B2%E6%81%B6%E5%89%AA%E6%AF%8F%E5%A4%A9%E6%8D%A2%E5%8F%91%E5%9E%8B%23) `136.5K 🔥`
1. [美军舰距离被彻底摧毁仅差数分钟](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E8%88%B0%E8%B7%9D%E7%A6%BB%E8%A2%AB%E5%BD%BB%E5%BA%95%E6%91%A7%E6%AF%81%E4%BB%85%E5%B7%AE%E6%95%B0%E5%88%86%E9%92%9F%23) `134.9K 🔥`
1. [Angelababy郑恺陈赫李晨合影](https://s.weibo.com/weibo?q=%23Angelababy%E9%83%91%E6%81%BA%E9%99%88%E8%B5%AB%E6%9D%8E%E6%99%A8%E5%90%88%E5%BD%B1%23) `134.3K 🔥`
1. [文章上海面馆价格 (Article Shanghai noodle restaurant prices)](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%AB%A0%E4%B8%8A%E6%B5%B7%E9%9D%A2%E9%A6%86%E4%BB%B7%E6%A0%BC%23) `127.9K 🔥`
1. [kimi都这么大了 (Kimi is already so old)](https://s.weibo.com/weibo?q=%23kimi%E9%83%BD%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `127.3K 🔥`
1. [钟南山妻子正式进入篮球名人堂](https://s.weibo.com/weibo?q=%23%E9%92%9F%E5%8D%97%E5%B1%B1%E5%A6%BB%E5%AD%90%E6%AD%A3%E5%BC%8F%E8%BF%9B%E5%85%A5%E7%AF%AE%E7%90%83%E5%90%8D%E4%BA%BA%E5%A0%82%23) `207.9K 🔥` `-73%`
1. [突然觉得小学老师好厉害](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E8%A7%89%E5%BE%97%E5%B0%8F%E5%AD%A6%E8%80%81%E5%B8%88%E5%A5%BD%E5%8E%89%E5%AE%B3%23) `195.0K 🔥` `-47%`
1. [肠胃不好的人吃早餐belike](https://s.weibo.com/weibo?q=%23%E8%82%A0%E8%83%83%E4%B8%8D%E5%A5%BD%E7%9A%84%E4%BA%BA%E5%90%83%E6%97%A9%E9%A4%90belike%23) `143.8K 🔥` `-53%`
1. [李小冉 北舞已经是上个世纪的事了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E5%8C%97%E8%88%9E%E5%B7%B2%E7%BB%8F%E6%98%AF%E4%B8%8A%E4%B8%AA%E4%B8%96%E7%BA%AA%E7%9A%84%E4%BA%8B%E4%BA%86%23) `131.8K 🔥` `-59%`
1. [醉酒男子叫代驾到村口留置车内死亡 (Drunk man died after asking a driver to leave his car at the entrance of the village)](https://s.weibo.com/weibo?q=%23%E9%86%89%E9%85%92%E7%94%B7%E5%AD%90%E5%8F%AB%E4%BB%A3%E9%A9%BE%E5%88%B0%E6%9D%91%E5%8F%A3%E7%95%99%E7%BD%AE%E8%BD%A6%E5%86%85%E6%AD%BB%E4%BA%A1%23) `130.4K 🔥` `-88%`
1. [逐玉庆功宴 (Jade Celebration Banquet)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%BA%86%E5%8A%9F%E5%AE%B4%23) `122.8K 🔥` `-21%`
1. [西班牙首相试坐小米汽车](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%A6%96%E7%9B%B8%E8%AF%95%E5%9D%90%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%23) `121.1K 🔥` `-21%`
1. [官俊臣 成绩 (Guan Junchen’s results)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E4%BF%8A%E8%87%A3%20%E6%88%90%E7%BB%A9%23) `106.1K 🔥` `-27%`
1. [继EXO的E不发音后陈也不发音](https://s.weibo.com/weibo?q=%23%E7%BB%A7EXO%E7%9A%84E%E4%B8%8D%E5%8F%91%E9%9F%B3%E5%90%8E%E9%99%88%E4%B9%9F%E4%B8%8D%E5%8F%91%E9%9F%B3%23) `105.5K 🔥` `-26%`
1. [车上放香皂](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E4%B8%8A%E6%94%BE%E9%A6%99%E7%9A%82%23) `92.3K 🔥` `-54%`
1. [白鹿打方向盘 老公姐](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%89%93%E6%96%B9%E5%90%91%E7%9B%98%20%E8%80%81%E5%85%AC%E5%A7%90%23) `88.2K 🔥` `-33%`
1. [小S给林志玲擦泪](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E7%BB%99%E6%9E%97%E5%BF%97%E7%8E%B2%E6%93%A6%E6%B3%AA%23) `86.5K 🔥` `-40%`
1. [BIGBANG科切拉 (BIGBANG Coachella)](https://s.weibo.com/weibo?q=%23BIGBANG%E7%A7%91%E5%88%87%E6%8B%89%23) `82.7K 🔥` `-42%`
1. [杨瀚森NBA首个赛季数据](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%80%9A%E6%A3%AENBA%E9%A6%96%E4%B8%AA%E8%B5%9B%E5%AD%A3%E6%95%B0%E6%8D%AE%23) `77.5K 🔥` `-48%`

Updated at 2026-04-13 18:20:01

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
