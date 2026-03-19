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

1. [小米笔记本 (Xiaomi Notebook)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E7%AC%94%E8%AE%B0%E6%9C%AC%23) `1.1M 🔥` `NEW`
1. [长江上又一座大桥建设新进展](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B1%9F%E4%B8%8A%E5%8F%88%E4%B8%80%E5%BA%A7%E5%A4%A7%E6%A1%A5%E5%BB%BA%E8%AE%BE%E6%96%B0%E8%BF%9B%E5%B1%95%23) `655.8K 🔥` `NEW`
1. [小米新一代SU7今日发布](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%96%B0%E4%B8%80%E4%BB%A3SU7%E4%BB%8A%E6%97%A5%E5%8F%91%E5%B8%83%23) `597.4K 🔥` `NEW`
1. [小米新SU7起售价21.99万元](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%96%B0SU7%E8%B5%B7%E5%94%AE%E4%BB%B721.99%E4%B8%87%E5%85%83%23) `516.6K 🔥` `NEW`
1. [谁敢看逐玉接下来的预告](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%95%A2%E7%9C%8B%E9%80%90%E7%8E%89%E6%8E%A5%E4%B8%8B%E6%9D%A5%E7%9A%84%E9%A2%84%E5%91%8A%23) `249.4K 🔥` `NEW`
1. [雷军称新SU7门把手完全符合新国标](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E7%A7%B0%E6%96%B0SU7%E9%97%A8%E6%8A%8A%E6%89%8B%E5%AE%8C%E5%85%A8%E7%AC%A6%E5%90%88%E6%96%B0%E5%9B%BD%E6%A0%87%23) `190.5K 🔥` `NEW`
1. [陶晶莹说被张凌赫古装帅得吓到](https://s.weibo.com/weibo?q=%23%E9%99%B6%E6%99%B6%E8%8E%B9%E8%AF%B4%E8%A2%AB%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%8F%A4%E8%A3%85%E5%B8%85%E5%BE%97%E5%90%93%E5%88%B0%23) `188.5K 🔥` `NEW`
1. [张凌赫直播](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9B%B4%E6%92%AD%23) `187.1K 🔥` `NEW`
1. [青岛爱心面馆让温暖具象化了](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E7%88%B1%E5%BF%83%E9%9D%A2%E9%A6%86%E8%AE%A9%E6%B8%A9%E6%9A%96%E5%85%B7%E8%B1%A1%E5%8C%96%E4%BA%86%23) `186.6K 🔥` `NEW`
1. [宝诗龙上海全明星阵容](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E8%AF%97%E9%BE%99%E4%B8%8A%E6%B5%B7%E5%85%A8%E6%98%8E%E6%98%9F%E9%98%B5%E5%AE%B9%23) `185.8K 🔥` `NEW`
1. [台湾发生双尸案 (Double corpse case in Taiwan)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E5%8F%91%E7%94%9F%E5%8F%8C%E5%B0%B8%E6%A1%88%23) `182.2K 🔥` `NEW`
1. [雷军感谢王兴兴给了投资宇树的机会](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E6%84%9F%E8%B0%A2%E7%8E%8B%E5%85%B4%E5%85%B4%E7%BB%99%E4%BA%86%E6%8A%95%E8%B5%84%E5%AE%87%E6%A0%91%E7%9A%84%E6%9C%BA%E4%BC%9A%23) `182.2K 🔥` `NEW`
1. [3岁男童独自进电梯后坠楼身亡](https://s.weibo.com/weibo?q=%233%E5%B2%81%E7%94%B7%E7%AB%A5%E7%8B%AC%E8%87%AA%E8%BF%9B%E7%94%B5%E6%A2%AF%E5%90%8E%E5%9D%A0%E6%A5%BC%E8%BA%AB%E4%BA%A1%23) `177.0K 🔥` `NEW`
1. [胖东来馒头每人限购12个](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E9%A6%92%E5%A4%B4%E6%AF%8F%E4%BA%BA%E9%99%90%E8%B4%AD12%E4%B8%AA%23) `169.5K 🔥` `NEW`
1. [金价有望震荡回升](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%9C%89%E6%9C%9B%E9%9C%87%E8%8D%A1%E5%9B%9E%E5%8D%87%23) `121.0K 🔥` `NEW`
1. [男子1188抄底100克黄金后傻眼](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%901188%E6%8A%84%E5%BA%95100%E5%85%8B%E9%BB%84%E9%87%91%E5%90%8E%E5%82%BB%E7%9C%BC%23) `118.9K 🔥` `NEW`
1. [父亲回应儿子北大毕业送外卖](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E5%9B%9E%E5%BA%94%E5%84%BF%E5%AD%90%E5%8C%97%E5%A4%A7%E6%AF%95%E4%B8%9A%E9%80%81%E5%A4%96%E5%8D%96%23) `112.7K 🔥` `NEW`
1. [主人回应7只被偷小狗结伴逃回家](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E4%BA%BA%E5%9B%9E%E5%BA%947%E5%8F%AA%E8%A2%AB%E5%81%B7%E5%B0%8F%E7%8B%97%E7%BB%93%E4%BC%B4%E9%80%83%E5%9B%9E%E5%AE%B6%23) `111.7K 🔥` `NEW`
1. [黄金瀑布式跳水](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%80%91%E5%B8%83%E5%BC%8F%E8%B7%B3%E6%B0%B4%23) `94.3K 🔥` `NEW`
1. [女婴半岁确诊脊柱裂大排畸报告正常](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%A9%B4%E5%8D%8A%E5%B2%81%E7%A1%AE%E8%AF%8A%E8%84%8A%E6%9F%B1%E8%A3%82%E5%A4%A7%E6%8E%92%E7%95%B8%E6%8A%A5%E5%91%8A%E6%AD%A3%E5%B8%B8%23) `92.9K 🔥` `NEW`
1. [雷军直播 (Lei Jun live broadcast)](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E7%9B%B4%E6%92%AD%23) `90.3K 🔥` `NEW`
1. [女子担心男友出轨花274万疯狂占卜](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8B%85%E5%BF%83%E7%94%B7%E5%8F%8B%E5%87%BA%E8%BD%A8%E8%8A%B1274%E4%B8%87%E7%96%AF%E7%8B%82%E5%8D%A0%E5%8D%9C%23) `85.5K 🔥` `NEW`
1. [这个窝很符合猫体工程学](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%AA%E7%AA%9D%E5%BE%88%E7%AC%A6%E5%90%88%E7%8C%AB%E4%BD%93%E5%B7%A5%E7%A8%8B%E5%AD%A6%23) `81.6K 🔥` `NEW`
1. [外交部回应伊朗拉里贾尼遇害](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E5%9B%9E%E5%BA%94%E4%BC%8A%E6%9C%97%E6%8B%89%E9%87%8C%E8%B4%BE%E5%B0%BC%E9%81%87%E5%AE%B3%23) `81.0K 🔥` `NEW`
1. [中方回应加强对巴拿马船只检查](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E5%8A%A0%E5%BC%BA%E5%AF%B9%E5%B7%B4%E6%8B%BF%E9%A9%AC%E8%88%B9%E5%8F%AA%E6%A3%80%E6%9F%A5%23) `80.9K 🔥` `NEW`
1. [中方对以方说法感到震惊 (China is shocked by Israel’s statement)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%AF%B9%E4%BB%A5%E6%96%B9%E8%AF%B4%E6%B3%95%E6%84%9F%E5%88%B0%E9%9C%87%E6%83%8A%23) `239.4K 🔥` `+34%`
1. [雷军现身发布会](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E7%8E%B0%E8%BA%AB%E5%8F%91%E5%B8%83%E4%BC%9A%23) `188.2K 🔥` `+140%`
1. [伊朗要求阿联酋作出赔偿](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%A6%81%E6%B1%82%E9%98%BF%E8%81%94%E9%85%8B%E4%BD%9C%E5%87%BA%E8%B5%94%E5%81%BF%23) `126.0K 🔥` `+40%`
1. [小米发布会 (Xiaomi press conference)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%8F%91%E5%B8%83%E4%BC%9A%23) `787.2K 🔥`
1. [伊朗外长回应美2000亿美元战争拨款](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A4%96%E9%95%BF%E5%9B%9E%E5%BA%94%E7%BE%8E2000%E4%BA%BF%E7%BE%8E%E5%85%83%E6%88%98%E4%BA%89%E6%8B%A8%E6%AC%BE%23) `204.0K 🔥`
1. [胡先煦秒删博](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6%E7%A7%92%E5%88%A0%E5%8D%9A%23) `188.0K 🔥`
1. [女子称月经弄脏卧铺被事件班组被罚](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E6%9C%88%E7%BB%8F%E5%BC%84%E8%84%8F%E5%8D%A7%E9%93%BA%E8%A2%AB%E4%BA%8B%E4%BB%B6%E7%8F%AD%E7%BB%84%E8%A2%AB%E7%BD%9A%23) `187.8K 🔥`
1. [王格格 奔跑吧14 (Wang Gege Run 14)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A0%BC%E6%A0%BC%20%E5%A5%94%E8%B7%91%E5%90%A714%23) `187.4K 🔥`
1. [鞠婧祎爱吃白开水泡饭](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E7%88%B1%E5%90%83%E7%99%BD%E5%BC%80%E6%B0%B4%E6%B3%A1%E9%A5%AD%23) `186.3K 🔥`
1. [被路虎别停8次男子个人信息疑泄露](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E8%B7%AF%E8%99%8E%E5%88%AB%E5%81%9C8%E6%AC%A1%E7%94%B7%E5%AD%90%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF%E7%96%91%E6%B3%84%E9%9C%B2%23) `186.0K 🔥`
1. [舒淇代言SU7](https://s.weibo.com/weibo?q=%23%E8%88%92%E6%B7%87%E4%BB%A3%E8%A8%80SU7%23) `185.7K 🔥`
1. [张展硕金牌 (Zhang Zhanshuo gold medal)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B1%95%E7%A1%95%E9%87%91%E7%89%8C%23) `182.7K 🔥`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `181.6K 🔥`
1. [老板称5元水饺店每天能赚1千元](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%9D%BF%E7%A7%B05%E5%85%83%E6%B0%B4%E9%A5%BA%E5%BA%97%E6%AF%8F%E5%A4%A9%E8%83%BD%E8%B5%9A1%E5%8D%83%E5%85%83%23) `166.9K 🔥`
1. [网传奔跑吧14常驻嘉宾阵容 (Online news of running bar 14 permanent guest lineup)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%A5%94%E8%B7%91%E5%90%A714%E5%B8%B8%E9%A9%BB%E5%98%89%E5%AE%BE%E9%98%B5%E5%AE%B9%23) `165.2K 🔥`
1. [逐玉开虐了](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%BC%80%E8%99%90%E4%BA%86%23) `158.3K 🔥`
1. [17岁的Angelababy (17 year old Angelababy)](https://s.weibo.com/weibo?q=%2317%E5%B2%81%E7%9A%84Angelababy%23) `125.8K 🔥`
1. [买30克金手镯比1月便宜6000元 (Buying a 30-gram gold bracelet is 6,000 yuan cheaper than in January)](https://s.weibo.com/weibo?q=%23%E4%B9%B030%E5%85%8B%E9%87%91%E6%89%8B%E9%95%AF%E6%AF%941%E6%9C%88%E4%BE%BF%E5%AE%9C6000%E5%85%83%23) `114.6K 🔥` `-26%`
1. [睡觉前才刷牙是错误的 (It is wrong to brush your teeth before going to bed)](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E8%A7%89%E5%89%8D%E6%89%8D%E5%88%B7%E7%89%99%E6%98%AF%E9%94%99%E8%AF%AF%E7%9A%84%23) `93.6K 🔥` `-40%`
1. [彭高 视频号推荐算法工程师](https://s.weibo.com/weibo?q=%23%E5%BD%AD%E9%AB%98%20%E8%A7%86%E9%A2%91%E5%8F%B7%E6%8E%A8%E8%8D%90%E7%AE%97%E6%B3%95%E5%B7%A5%E7%A8%8B%E5%B8%88%23) `90.6K 🔥` `-24%`
1. [宝妈每天用84消毒患上罕见病 (Mother uses 84 disinfectant every day to contract rare disease)](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E5%A6%88%E6%AF%8F%E5%A4%A9%E7%94%A884%E6%B6%88%E6%AF%92%E6%82%A3%E4%B8%8A%E7%BD%95%E8%A7%81%E7%97%85%23) `90.4K 🔥` `-45%`
1. [樊长玉一句侯爷把谢征叫破防了](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E9%95%BF%E7%8E%89%E4%B8%80%E5%8F%A5%E4%BE%AF%E7%88%B7%E6%8A%8A%E8%B0%A2%E5%BE%81%E5%8F%AB%E7%A0%B4%E9%98%B2%E4%BA%86%23) `87.3K 🔥` `-40%`
1. [白日提灯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `87.1K 🔥` `-43%`
1. [小米新SU7发布会请来半个车圈 (Xiaomi’s new SU7 launch conference invites half of the car circle)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%96%B0SU7%E5%8F%91%E5%B8%83%E4%BC%9A%E8%AF%B7%E6%9D%A5%E5%8D%8A%E4%B8%AA%E8%BD%A6%E5%9C%88%23) `84.5K 🔥` `-50%`
1. [新一代SU7 (New generation SU7)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%B8%80%E4%BB%A3SU7%23) `82.6K 🔥` `-52%`
1. [油价要破9元了](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E8%A6%81%E7%A0%B49%E5%85%83%E4%BA%86%23) `82.4K 🔥` `-37%`

Updated at 2026-03-19 21:52:04

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
