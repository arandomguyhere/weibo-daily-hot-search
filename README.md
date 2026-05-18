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

1. [奔跑吧战国袍造型 (Run, Warring States Robe Style)](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E6%88%98%E5%9B%BD%E8%A2%8D%E9%80%A0%E5%9E%8B%23) `1.2M 🔥` `NEW`
1. [广西柳州地震已致2人死亡](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%9F%B3%E5%B7%9E%E5%9C%B0%E9%9C%87%E5%B7%B2%E8%87%B42%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `850.6K 🔥` `NEW`
1. [本轮大范围降雨到哪了](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E8%BD%AE%E5%A4%A7%E8%8C%83%E5%9B%B4%E9%99%8D%E9%9B%A8%E5%88%B0%E5%93%AA%E4%BA%86%23) `687.3K 🔥` `NEW`
1. [上了很久的班之后才明白的道理](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E4%BA%86%E5%BE%88%E4%B9%85%E7%9A%84%E7%8F%AD%E4%B9%8B%E5%90%8E%E6%89%8D%E6%98%8E%E7%99%BD%E7%9A%84%E9%81%93%E7%90%86%23) `685.0K 🔥` `NEW`
1. [给阿嬷的情书要是个烂编剧](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E8%A6%81%E6%98%AF%E4%B8%AA%E7%83%82%E7%BC%96%E5%89%A7%23) `652.3K 🔥` `NEW`
1. [普京为何急于访华](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E4%B8%BA%E4%BD%95%E6%80%A5%E4%BA%8E%E8%AE%BF%E5%8D%8E%23) `503.3K 🔥` `NEW`
1. [微信读书skill](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%AF%BB%E4%B9%A6skill%23) `484.6K 🔥` `NEW`
1. [归鸾阵容官宣](https://s.weibo.com/weibo?q=%23%E5%BD%92%E9%B8%BE%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `477.0K 🔥` `NEW`
1. [毛巾老板直播被骂晒结婚证自证清白](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E5%B7%BE%E8%80%81%E6%9D%BF%E7%9B%B4%E6%92%AD%E8%A2%AB%E9%AA%82%E6%99%92%E7%BB%93%E5%A9%9A%E8%AF%81%E8%87%AA%E8%AF%81%E6%B8%85%E7%99%BD%23) `466.1K 🔥` `NEW`
1. [孙杨回应妈宝男标签](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%9B%9E%E5%BA%94%E5%A6%88%E5%AE%9D%E7%94%B7%E6%A0%87%E7%AD%BE%23) `426.9K 🔥` `NEW`
1. [麦琳瘦成唐嫣了 (Mai Lin lost weight and looked like Tang Yan)](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E7%90%B3%E7%98%A6%E6%88%90%E5%94%90%E5%AB%A3%E4%BA%86%23) `421.1K 🔥` `NEW`
1. [洁丽雅](https://s.weibo.com/weibo?q=%23%E6%B4%81%E4%B8%BD%E9%9B%85%23) `420.3K 🔥` `NEW`
1. [垫底辣孩与女网红合拍被指没边界感](https://s.weibo.com/weibo?q=%23%E5%9E%AB%E5%BA%95%E8%BE%A3%E5%AD%A9%E4%B8%8E%E5%A5%B3%E7%BD%91%E7%BA%A2%E5%90%88%E6%8B%8D%E8%A2%AB%E6%8C%87%E6%B2%A1%E8%BE%B9%E7%95%8C%E6%84%9F%23) `414.6K 🔥` `NEW`
1. [金价银价大跌原因](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E9%93%B6%E4%BB%B7%E5%A4%A7%E8%B7%8C%E5%8E%9F%E5%9B%A0%23) `403.4K 🔥` `NEW`
1. [易立竞把孙杨问破防了](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%AB%8B%E7%AB%9E%E6%8A%8A%E5%AD%99%E6%9D%A8%E9%97%AE%E7%A0%B4%E9%98%B2%E4%BA%86%23) `400.9K 🔥` `NEW`
1. [白鹿先在综艺穿了战国袍](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%85%88%E5%9C%A8%E7%BB%BC%E8%89%BA%E7%A9%BF%E4%BA%86%E6%88%98%E5%9B%BD%E8%A2%8D%23) `398.3K 🔥` `NEW`
1. [娜扎前经纪人回应迪丽热巴被换传闻](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E5%89%8D%E7%BB%8F%E7%BA%AA%E4%BA%BA%E5%9B%9E%E5%BA%94%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%A2%AB%E6%8D%A2%E4%BC%A0%E9%97%BB%23) `362.2K 🔥` `NEW`
1. [LCK公布亚运会人选](https://s.weibo.com/weibo?q=%23LCK%E5%85%AC%E5%B8%83%E4%BA%9A%E8%BF%90%E4%BC%9A%E4%BA%BA%E9%80%89%23) `349.3K 🔥` `NEW`
1. [主动性强到不活在他人眼里](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E5%8A%A8%E6%80%A7%E5%BC%BA%E5%88%B0%E4%B8%8D%E6%B4%BB%E5%9C%A8%E4%BB%96%E4%BA%BA%E7%9C%BC%E9%87%8C%23) `347.7K 🔥` `NEW`
1. [水果含糖量刺客](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E6%9E%9C%E5%90%AB%E7%B3%96%E9%87%8F%E5%88%BA%E5%AE%A2%23) `347.4K 🔥` `NEW`
1. [A股 (A shares)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `346.3K 🔥` `NEW`
1. [王鹤棣爱到骨子里](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E7%88%B1%E5%88%B0%E9%AA%A8%E5%AD%90%E9%87%8C%23) `337.4K 🔥` `NEW`
1. [白鹿周翊然方辟谣恋情](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%91%A8%E7%BF%8A%E7%84%B6%E6%96%B9%E8%BE%9F%E8%B0%A3%E6%81%8B%E6%83%85%23) `335.6K 🔥` `NEW`
1. [柳州地震有人连夜开车回南宁桂林](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E5%B7%9E%E5%9C%B0%E9%9C%87%E6%9C%89%E4%BA%BA%E8%BF%9E%E5%A4%9C%E5%BC%80%E8%BD%A6%E5%9B%9E%E5%8D%97%E5%AE%81%E6%A1%82%E6%9E%97%23) `291.5K 🔥` `NEW`
1. [怎么说服杨洋拍这玩意的](https://s.weibo.com/weibo?q=%23%E6%80%8E%E4%B9%88%E8%AF%B4%E6%9C%8D%E6%9D%A8%E6%B4%8B%E6%8B%8D%E8%BF%99%E7%8E%A9%E6%84%8F%E7%9A%84%23) `286.6K 🔥` `NEW`
1. [张凌赫G社生图](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%ABG%E7%A4%BE%E7%94%9F%E5%9B%BE%23) `281.7K 🔥` `NEW`
1. [男子住70元酒店发现空调挂女士内裤](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%BD%8F70%E5%85%83%E9%85%92%E5%BA%97%E5%8F%91%E7%8E%B0%E7%A9%BA%E8%B0%83%E6%8C%82%E5%A5%B3%E5%A3%AB%E5%86%85%E8%A3%A4%23) `254.0K 🔥` `NEW`
1. [小米YU7GT发布会定档](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3YU7GT%E5%8F%91%E5%B8%83%E4%BC%9A%E5%AE%9A%E6%A1%A3%23) `248.8K 🔥` `NEW`
1. [爸爸当家5开播](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%BD%93%E5%AE%B65%E5%BC%80%E6%92%AD%23) `248.6K 🔥` `NEW`
1. [岳雨婷自曝正骨长高3.5厘米](https://s.weibo.com/weibo?q=%23%E5%B2%B3%E9%9B%A8%E5%A9%B7%E8%87%AA%E6%9B%9D%E6%AD%A3%E9%AA%A8%E9%95%BF%E9%AB%983.5%E5%8E%98%E7%B1%B3%23) `247.9K 🔥` `NEW`
1. [哈登抢七躺赢 (Harden wins tiebreaker)](https://s.weibo.com/weibo?q=%23%E5%93%88%E7%99%BB%E6%8A%A2%E4%B8%83%E8%BA%BA%E8%B5%A2%23) `236.0K 🔥` `NEW`
1. [李英爱问张凌赫很有名吗](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8B%B1%E7%88%B1%E9%97%AE%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%BE%88%E6%9C%89%E5%90%8D%E5%90%97%23) `235.3K 🔥` `NEW`
1. [孙莉黄磊女儿多妹这么大了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E8%8E%89%E9%BB%84%E7%A3%8A%E5%A5%B3%E5%84%BF%E5%A4%9A%E5%A6%B9%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `234.5K 🔥` `NEW`
1. [当我带豆包去吃旋转小火锅](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E5%B8%A6%E8%B1%86%E5%8C%85%E5%8E%BB%E5%90%83%E6%97%8B%E8%BD%AC%E5%B0%8F%E7%81%AB%E9%94%85%23) `229.4K 🔥` `NEW`
1. [许玮甯邱泽公园溜娃](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E7%8E%AE%E7%94%AF%E9%82%B1%E6%B3%BD%E5%85%AC%E5%9B%AD%E6%BA%9C%E5%A8%83%23) `228.5K 🔥` `NEW`
1. [维嘉回应衣服被马丁买了](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E5%98%89%E5%9B%9E%E5%BA%94%E8%A1%A3%E6%9C%8D%E8%A2%AB%E9%A9%AC%E4%B8%81%E4%B9%B0%E4%BA%86%23) `227.5K 🔥` `NEW`
1. [贾跃亭又拿到7000万美元投资](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E8%B7%83%E4%BA%AD%E5%8F%88%E6%8B%BF%E5%88%B07000%E4%B8%87%E7%BE%8E%E5%85%83%E6%8A%95%E8%B5%84%23) `223.5K 🔥` `NEW`
1. [宜昌暴雨已破36年来记录](https://s.weibo.com/weibo?q=%23%E5%AE%9C%E6%98%8C%E6%9A%B4%E9%9B%A8%E5%B7%B2%E7%A0%B436%E5%B9%B4%E6%9D%A5%E8%AE%B0%E5%BD%95%23) `222.3K 🔥` `NEW`
1. [短剧演员从三年百部到无戏可拍](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E6%BC%94%E5%91%98%E4%BB%8E%E4%B8%89%E5%B9%B4%E7%99%BE%E9%83%A8%E5%88%B0%E6%97%A0%E6%88%8F%E5%8F%AF%E6%8B%8D%23) `222.2K 🔥` `NEW`
1. [徐冬冬和尹子维吵架吵哭了](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%86%AC%E5%86%AC%E5%92%8C%E5%B0%B9%E5%AD%90%E7%BB%B4%E5%90%B5%E6%9E%B6%E5%90%B5%E5%93%AD%E4%BA%86%23) `199.2K 🔥` `NEW`
1. [尤长靖合伙人董岩磊 (You Changjing Partner Dong Yanlei)](https://s.weibo.com/weibo?q=%23%E5%B0%A4%E9%95%BF%E9%9D%96%E5%90%88%E4%BC%99%E4%BA%BA%E8%91%A3%E5%B2%A9%E7%A3%8A%23) `188.4K 🔥` `NEW`
1. [曝蒋毅婚后私信女网友](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%92%8B%E6%AF%85%E5%A9%9A%E5%90%8E%E7%A7%81%E4%BF%A1%E5%A5%B3%E7%BD%91%E5%8F%8B%23) `182.5K 🔥` `NEW`
1. [马克龙非洲行翻车](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%85%8B%E9%BE%99%E9%9D%9E%E6%B4%B2%E8%A1%8C%E7%BF%BB%E8%BD%A6%23) `159.8K 🔥` `NEW`
1. [罗永浩谈给阿嬷的情书](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E8%B0%88%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%23) `155.8K 🔥` `NEW`
1. [杨紫家业开播热度飙升成榜一](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%AE%B6%E4%B8%9A%E5%BC%80%E6%92%AD%E7%83%AD%E5%BA%A6%E9%A3%99%E5%8D%87%E6%88%90%E6%A6%9C%E4%B8%80%23) `147.0K 🔥` `NEW`
1. [国外网友买165根浮条收到165个箱子](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%A4%96%E7%BD%91%E5%8F%8B%E4%B9%B0165%E6%A0%B9%E6%B5%AE%E6%9D%A1%E6%94%B6%E5%88%B0165%E4%B8%AA%E7%AE%B1%E5%AD%90%23) `147.0K 🔥` `NEW`
1. [曝折叠屏iPhone试产受阻](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%8A%98%E5%8F%A0%E5%B1%8FiPhone%E8%AF%95%E4%BA%A7%E5%8F%97%E9%98%BB%23) `146.1K 🔥` `NEW`
1. [豆包开始收费谁慌了](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%BC%80%E5%A7%8B%E6%94%B6%E8%B4%B9%E8%B0%81%E6%85%8C%E4%BA%86%23) `145.7K 🔥` `NEW`
1. [杨幂同款公牛AI大路灯 (Yang Mi’s same bull AI street lamp)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%90%8C%E6%AC%BE%E5%85%AC%E7%89%9BAI%E5%A4%A7%E8%B7%AF%E7%81%AF%23) `501.1K 🔥` `+42%`
1. [京东外卖请客福利发发发 (Jingdong’s takeout treat customers with benefits)](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E5%A4%96%E5%8D%96%E8%AF%B7%E5%AE%A2%E7%A6%8F%E5%88%A9%E5%8F%91%E5%8F%91%E5%8F%91%23) `686.1K 🔥` `-37%`
1. [何超仪公开何超蕸真正死因](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E4%BB%AA%E5%85%AC%E5%BC%80%E4%BD%95%E8%B6%85%E8%95%B8%E7%9C%9F%E6%AD%A3%E6%AD%BB%E5%9B%A0%23) `364.0K 🔥` `-39%`
1. [美国2战机飞行表演时撞毁 (Two U.S. fighter jets crashed during flight show)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD2%E6%88%98%E6%9C%BA%E9%A3%9E%E8%A1%8C%E8%A1%A8%E6%BC%94%E6%97%B6%E6%92%9E%E6%AF%81%23) `192.1K 🔥` `-80%`

Updated at 2026-05-18 13:53:19

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
