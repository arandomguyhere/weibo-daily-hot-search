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

1. [严军发了一家四口照 (Yan Jun posted a photo of his family of four)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E5%86%9B%E5%8F%91%E4%BA%86%E4%B8%80%E5%AE%B6%E5%9B%9B%E5%8F%A3%E7%85%A7%23) `18.3M 🔥` `NEW`
1. [胖东来正式起诉博主惊梦人](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E6%AD%A3%E5%BC%8F%E8%B5%B7%E8%AF%89%E5%8D%9A%E4%B8%BB%E6%83%8A%E6%A2%A6%E4%BA%BA%23) `1.1M 🔥` `NEW`
1. [用最美镜头致敬铁路劳动者](https://s.weibo.com/weibo?q=%23%E7%94%A8%E6%9C%80%E7%BE%8E%E9%95%9C%E5%A4%B4%E8%87%B4%E6%95%AC%E9%93%81%E8%B7%AF%E5%8A%B3%E5%8A%A8%E8%80%85%23) `789.9K 🔥` `NEW`
1. [王鹤棣第一次情绪失控](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E7%AC%AC%E4%B8%80%E6%AC%A1%E6%83%85%E7%BB%AA%E5%A4%B1%E6%8E%A7%23) `776.5K 🔥` `NEW`
1. [王濛张月抢同一首歌是为了同一个人](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%BC%A0%E6%9C%88%E6%8A%A2%E5%90%8C%E4%B8%80%E9%A6%96%E6%AD%8C%E6%98%AF%E4%B8%BA%E4%BA%86%E5%90%8C%E4%B8%80%E4%B8%AA%E4%BA%BA%23) `541.3K 🔥` `NEW`
1. [官方辟谣国资委46号令重新算养老金](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E8%BE%9F%E8%B0%A3%E5%9B%BD%E8%B5%84%E5%A7%9446%E5%8F%B7%E4%BB%A4%E9%87%8D%E6%96%B0%E7%AE%97%E5%85%BB%E8%80%81%E9%87%91%23) `321.4K 🔥` `NEW`
1. [霸王茶姬水银门当事人称是对象下单](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E6%B0%B4%E9%93%B6%E9%97%A8%E5%BD%93%E4%BA%8B%E4%BA%BA%E7%A7%B0%E6%98%AF%E5%AF%B9%E8%B1%A1%E4%B8%8B%E5%8D%95%23) `299.6K 🔥` `NEW`
1. [突然就懂了朋友和好朋友的区别](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%B0%B1%E6%87%82%E4%BA%86%E6%9C%8B%E5%8F%8B%E5%92%8C%E5%A5%BD%E6%9C%8B%E5%8F%8B%E7%9A%84%E5%8C%BA%E5%88%AB%23) `280.2K 🔥` `NEW`
1. [巴雷特绝杀骑士](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%9B%B7%E7%89%B9%E7%BB%9D%E6%9D%80%E9%AA%91%E5%A3%AB%23) `260.2K 🔥` `NEW`
1. [日本战犯竟称侵华是为了管教兄弟](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%88%98%E7%8A%AF%E7%AB%9F%E7%A7%B0%E4%BE%B5%E5%8D%8E%E6%98%AF%E4%B8%BA%E4%BA%86%E7%AE%A1%E6%95%99%E5%85%84%E5%BC%9F%23) `208.9K 🔥` `NEW`
1. [水银奶茶 男友投毒 (Mercury milk tea poisoned by boyfriend)](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E9%93%B6%E5%A5%B6%E8%8C%B6%20%E7%94%B7%E5%8F%8B%E6%8A%95%E6%AF%92%23) `208.5K 🔥` `NEW`
1. [时代峰峻回应严浩翔家庭事宜](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%9B%9E%E5%BA%94%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%AE%B6%E5%BA%AD%E4%BA%8B%E5%AE%9C%23) `207.9K 🔥` `NEW`
1. [西安上空现不明物持续一小时后消失](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E4%B8%8A%E7%A9%BA%E7%8E%B0%E4%B8%8D%E6%98%8E%E7%89%A9%E6%8C%81%E7%BB%AD%E4%B8%80%E5%B0%8F%E6%97%B6%E5%90%8E%E6%B6%88%E5%A4%B1%23) `206.6K 🔥` `NEW`
1. [刘晓庆回应和王婆互动冷淡](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%99%93%E5%BA%86%E5%9B%9E%E5%BA%94%E5%92%8C%E7%8E%8B%E5%A9%86%E4%BA%92%E5%8A%A8%E5%86%B7%E6%B7%A1%23) `206.3K 🔥` `NEW`
1. [何洁听跳楼机还没到副歌就直接关掉了](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B4%81%E5%90%AC%E8%B7%B3%E6%A5%BC%E6%9C%BA%E8%BF%98%E6%B2%A1%E5%88%B0%E5%89%AF%E6%AD%8C%E5%B0%B1%E7%9B%B4%E6%8E%A5%E5%85%B3%E6%8E%89%E4%BA%86%23) `205.4K 🔥` `NEW`
1. [DeepSeek 现在我是你爹了](https://s.weibo.com/weibo?q=%23DeepSeek%20%E7%8E%B0%E5%9C%A8%E6%88%91%E6%98%AF%E4%BD%A0%E7%88%B9%E4%BA%86%23) `204.9K 🔥` `NEW`
1. [杨幂脸上烫伤还没好](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%84%B8%E4%B8%8A%E7%83%AB%E4%BC%A4%E8%BF%98%E6%B2%A1%E5%A5%BD%23) `194.0K 🔥` `NEW`
1. [五哈](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%93%88%23) `182.8K 🔥` `NEW`
1. [承诺买房送69万黄金开发商久不兑现](https://s.weibo.com/weibo?q=%23%E6%89%BF%E8%AF%BA%E4%B9%B0%E6%88%BF%E9%80%8169%E4%B8%87%E9%BB%84%E9%87%91%E5%BC%80%E5%8F%91%E5%95%86%E4%B9%85%E4%B8%8D%E5%85%91%E7%8E%B0%23) `182.8K 🔥` `NEW`
1. [疑似严浩翔妈妈发博](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%A6%88%E5%A6%88%E5%8F%91%E5%8D%9A%23) `182.5K 🔥` `NEW`
1. [爸爸去哪儿的孩子都长这么大了 (Wherever the father goes, the children have grown so big.)](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%8E%BB%E5%93%AA%E5%84%BF%E7%9A%84%E5%AD%A9%E5%AD%90%E9%83%BD%E9%95%BF%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `182.1K 🔥` `NEW`
1. [乘风三公小考](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E%E4%B8%89%E5%85%AC%E5%B0%8F%E8%80%83%23) `181.9K 🔥` `NEW`
1. [詹姆斯半场18分](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E5%8D%8A%E5%9C%BA18%E5%88%86%23) `181.8K 🔥` `NEW`
1. [戚薇也在嗑张凌赫田曦薇](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%87%E4%B9%9F%E5%9C%A8%E5%97%91%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%23) `179.1K 🔥` `NEW`
1. [陈哲远王楚然浮生开机了](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E7%8E%8B%E6%A5%9A%E7%84%B6%E6%B5%AE%E7%94%9F%E5%BC%80%E6%9C%BA%E4%BA%86%23) `177.9K 🔥` `NEW`
1. [美防长下令从德国撤出5000名驻军](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E9%98%B2%E9%95%BF%E4%B8%8B%E4%BB%A4%E4%BB%8E%E5%BE%B7%E5%9B%BD%E6%92%A4%E5%87%BA5000%E5%90%8D%E9%A9%BB%E5%86%9B%23) `176.7K 🔥` `NEW`
1. [一个bug是bug 一堆bug能work](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AAbug%E6%98%AFbug%20%E4%B8%80%E5%A0%86bug%E8%83%BDwork%23) `176.4K 🔥` `NEW`
1. [小狗身体太软把主人弄得手忙脚乱的](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E8%BA%AB%E4%BD%93%E5%A4%AA%E8%BD%AF%E6%8A%8A%E4%B8%BB%E4%BA%BA%E5%BC%84%E5%BE%97%E6%89%8B%E5%BF%99%E8%84%9A%E4%B9%B1%E7%9A%84%23) `170.4K 🔥` `NEW`
1. [白鹿输在了过于努力](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%BE%93%E5%9C%A8%E4%BA%86%E8%BF%87%E4%BA%8E%E5%8A%AA%E5%8A%9B%23) `149.4K 🔥` `NEW`
1. [时代少年团彩排泄漏](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%BD%A9%E6%8E%92%E6%B3%84%E6%BC%8F%23) `125.7K 🔥` `NEW`
1. [王楚钦背后一众国乒大佬 (Behind Wang Chuqin are a group of national table tennis bosses)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%83%8C%E5%90%8E%E4%B8%80%E4%BC%97%E5%9B%BD%E4%B9%92%E5%A4%A7%E4%BD%AC%23) `125.6K 🔥` `NEW`
1. [NBA](https://s.weibo.com/weibo?q=%23NBA%23) `108.8K 🔥` `NEW`
1. [AI手搓小黄人产生意识了](https://s.weibo.com/weibo?q=%23AI%E6%89%8B%E6%90%93%E5%B0%8F%E9%BB%84%E4%BA%BA%E4%BA%A7%E7%94%9F%E6%84%8F%E8%AF%86%E4%BA%86%23) `103.5K 🔥` `NEW`
1. [张雪回应820RR赛道熄火](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%9B%9E%E5%BA%94820RR%E8%B5%9B%E9%81%93%E7%86%84%E7%81%AB%23) `102.8K 🔥` `NEW`
1. [DeepSeek拟人 哇呀啧呜哇](https://s.weibo.com/weibo?q=%23DeepSeek%E6%8B%9F%E4%BA%BA%20%E5%93%87%E5%91%80%E5%95%A7%E5%91%9C%E5%93%87%23) `101.6K 🔥` `NEW`
1. [用AI把我家猫养在了电脑上](https://s.weibo.com/weibo?q=%23%E7%94%A8AI%E6%8A%8A%E6%88%91%E5%AE%B6%E7%8C%AB%E5%85%BB%E5%9C%A8%E4%BA%86%E7%94%B5%E8%84%91%E4%B8%8A%23) `99.5K 🔥` `NEW`
1. [17岁女生离校失联遗体被找到](https://s.weibo.com/weibo?q=%2317%E5%B2%81%E5%A5%B3%E7%94%9F%E7%A6%BB%E6%A0%A1%E5%A4%B1%E8%81%94%E9%81%97%E4%BD%93%E8%A2%AB%E6%89%BE%E5%88%B0%23) `97.7K 🔥` `NEW`
1. [湖人vs火箭](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BAvs%E7%81%AB%E7%AE%AD%23) `576.5K 🔥` `+120%`
1. [李飞怎么变这么薄一片了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%A3%9E%E6%80%8E%E4%B9%88%E5%8F%98%E8%BF%99%E4%B9%88%E8%96%84%E4%B8%80%E7%89%87%E4%BA%86%23) `191.0K 🔥` `+21%`
1. [女孩称当服务员看到同龄人很自卑](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E7%A7%B0%E5%BD%93%E6%9C%8D%E5%8A%A1%E5%91%98%E7%9C%8B%E5%88%B0%E5%90%8C%E9%BE%84%E4%BA%BA%E5%BE%88%E8%87%AA%E5%8D%91%23) `182.2K 🔥` `+29%`
1. [萧蔷给人调成啥了 (What did Xiao Qiang do to others?)](https://s.weibo.com/weibo?q=%23%E8%90%A7%E8%94%B7%E7%BB%99%E4%BA%BA%E8%B0%83%E6%88%90%E5%95%A5%E4%BA%86%23) `160.5K 🔥`
1. [5月锦鲤附体的星座 (The zodiac signs possessed by koi fish in May)](https://s.weibo.com/weibo?q=%235%E6%9C%88%E9%94%A6%E9%B2%A4%E9%99%84%E4%BD%93%E7%9A%84%E6%98%9F%E5%BA%A7%23) `151.1K 🔥`
1. [跑男什么时候变成这样了 (When did Running Man become like this?)](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E5%8F%98%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%23) `809.8K 🔥` `-25%`
1. [普通家庭对孩子最好的托举就这11点](https://s.weibo.com/weibo?q=%23%E6%99%AE%E9%80%9A%E5%AE%B6%E5%BA%AD%E5%AF%B9%E5%AD%A9%E5%AD%90%E6%9C%80%E5%A5%BD%E7%9A%84%E6%89%98%E4%B8%BE%E5%B0%B1%E8%BF%9911%E7%82%B9%23) `130.6K 🔥` `-65%`
1. [鹤吻痕 (Crane hickey)](https://s.weibo.com/weibo?q=%23%E9%B9%A4%E5%90%BB%E7%97%95%23) `121.9K 🔥` `-23%`
1. [浮生](https://s.weibo.com/weibo?q=%23%E6%B5%AE%E7%94%9F%23) `109.3K 🔥` `-21%`
1. [金靖为减肥九点半就睡觉](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%E4%B8%BA%E5%87%8F%E8%82%A5%E4%B9%9D%E7%82%B9%E5%8D%8A%E5%B0%B1%E7%9D%A1%E8%A7%89%23) `108.6K 🔥` `-36%`
1. [难听 (ugly)](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E5%90%AC%23) `103.8K 🔥` `-37%`
1. [美媒曝美军对伊朗最新打击计划](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AA%92%E6%9B%9D%E7%BE%8E%E5%86%9B%E5%AF%B9%E4%BC%8A%E6%9C%97%E6%9C%80%E6%96%B0%E6%89%93%E5%87%BB%E8%AE%A1%E5%88%92%23) `100.5K 🔥` `-35%`
1. [火车票开售即售罄的原因找到了](https://s.weibo.com/weibo?q=%23%E7%81%AB%E8%BD%A6%E7%A5%A8%E5%BC%80%E5%94%AE%E5%8D%B3%E5%94%AE%E7%BD%84%E7%9A%84%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `98.9K 🔥` `-87%`

Updated at 2026-05-02 12:29:16

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
