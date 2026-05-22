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

1. [小米YU7GT首发评测 (Xiaomi YU7GT first review)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3YU7GT%E9%A6%96%E5%8F%91%E8%AF%84%E6%B5%8B%23) `609.8K 🔥` `NEW`
1. [全国男性比女性多2899万](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E7%94%B7%E6%80%A7%E6%AF%94%E5%A5%B3%E6%80%A7%E5%A4%9A2899%E4%B8%87%23) `587.4K 🔥` `NEW`
1. [证监会拟对老虎富途长桥严厉处罚](https://s.weibo.com/weibo?q=%23%E8%AF%81%E7%9B%91%E4%BC%9A%E6%8B%9F%E5%AF%B9%E8%80%81%E8%99%8E%E5%AF%8C%E9%80%94%E9%95%BF%E6%A1%A5%E4%B8%A5%E5%8E%89%E5%A4%84%E7%BD%9A%23) `551.7K 🔥` `NEW`
1. [川渝是一个巨大的客厅](https://s.weibo.com/weibo?q=%23%E5%B7%9D%E6%B8%9D%E6%98%AF%E4%B8%80%E4%B8%AA%E5%B7%A8%E5%A4%A7%E7%9A%84%E5%AE%A2%E5%8E%85%23) `356.7K 🔥` `NEW`
1. [伦敦世乒赛46名选手不败](https://s.weibo.com/weibo?q=%23%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B46%E5%90%8D%E9%80%89%E6%89%8B%E4%B8%8D%E8%B4%A5%23) `356.6K 🔥` `NEW`
1. [泰国长公主昏迷近3年半后病情恶化](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E9%95%BF%E5%85%AC%E4%B8%BB%E6%98%8F%E8%BF%B7%E8%BF%913%E5%B9%B4%E5%8D%8A%E5%90%8E%E7%97%85%E6%83%85%E6%81%B6%E5%8C%96%23) `354.2K 🔥` `NEW`
1. [丈夫高调宣布出轨有私生子妻子崩溃](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E9%AB%98%E8%B0%83%E5%AE%A3%E5%B8%83%E5%87%BA%E8%BD%A8%E6%9C%89%E7%A7%81%E7%94%9F%E5%AD%90%E5%A6%BB%E5%AD%90%E5%B4%A9%E6%BA%83%23) `351.7K 🔥` `NEW`
1. [雪莉哥哥向金秀贤宣战](https://s.weibo.com/weibo?q=%23%E9%9B%AA%E8%8E%89%E5%93%A5%E5%93%A5%E5%90%91%E9%87%91%E7%A7%80%E8%B4%A4%E5%AE%A3%E6%88%98%23) `350.6K 🔥` `NEW`
1. [桃花坞 剪辑](https://s.weibo.com/weibo?q=%23%E6%A1%83%E8%8A%B1%E5%9D%9E%20%E5%89%AA%E8%BE%91%23) `349.5K 🔥` `NEW`
1. [证监会](https://s.weibo.com/weibo?q=%23%E8%AF%81%E7%9B%91%E4%BC%9A%23) `348.3K 🔥` `NEW`
1. [庾澄庆伊能静歌手浪姐封面 (Cover of Yu Chengqing, Yi Nengjing and singer Lang Jie)](https://s.weibo.com/weibo?q=%23%E5%BA%BE%E6%BE%84%E5%BA%86%E4%BC%8A%E8%83%BD%E9%9D%99%E6%AD%8C%E6%89%8B%E6%B5%AA%E5%A7%90%E5%B0%81%E9%9D%A2%23) `345.4K 🔥` `NEW`
1. [短剧 一万播放五块钱](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%20%E4%B8%80%E4%B8%87%E6%92%AD%E6%94%BE%E4%BA%94%E5%9D%97%E9%92%B1%23) `344.8K 🔥` `NEW`
1. [朱珠说刘亦菲选择朋友很小心](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E7%8F%A0%E8%AF%B4%E5%88%98%E4%BA%A6%E8%8F%B2%E9%80%89%E6%8B%A9%E6%9C%8B%E5%8F%8B%E5%BE%88%E5%B0%8F%E5%BF%83%23) `342.7K 🔥` `NEW`
1. [突然理解自己为什么会高物欲了](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E7%90%86%E8%A7%A3%E8%87%AA%E5%B7%B1%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BC%9A%E9%AB%98%E7%89%A9%E6%AC%B2%E4%BA%86%23) `340.3K 🔥` `NEW`
1. [石门上万件百年文物被冲走大部分](https://s.weibo.com/weibo?q=%23%E7%9F%B3%E9%97%A8%E4%B8%8A%E4%B8%87%E4%BB%B6%E7%99%BE%E5%B9%B4%E6%96%87%E7%89%A9%E8%A2%AB%E5%86%B2%E8%B5%B0%E5%A4%A7%E9%83%A8%E5%88%86%23) `339.1K 🔥` `NEW`
1. [iPhone哪个材质手感最好](https://s.weibo.com/weibo?q=%23iPhone%E5%93%AA%E4%B8%AA%E6%9D%90%E8%B4%A8%E6%89%8B%E6%84%9F%E6%9C%80%E5%A5%BD%23) `338.0K 🔥` `NEW`
1. [曝杨幂已提名白玉兰最佳女主角](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%A8%E5%B9%82%E5%B7%B2%E6%8F%90%E5%90%8D%E7%99%BD%E7%8E%89%E5%85%B0%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%E8%A7%92%23) `336.4K 🔥` `NEW`
1. [方媛哭了](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AA%9B%E5%93%AD%E4%BA%86%23) `334.6K 🔥` `NEW`
1. [鸭嘴钳 替代技术](https://s.weibo.com/weibo?q=%23%E9%B8%AD%E5%98%B4%E9%92%B3%20%E6%9B%BF%E4%BB%A3%E6%8A%80%E6%9C%AF%23) `332.8K 🔥` `NEW`
1. [井胧背后抱井迪](https://s.weibo.com/weibo?q=%23%E4%BA%95%E8%83%A7%E8%83%8C%E5%90%8E%E6%8A%B1%E4%BA%95%E8%BF%AA%23) `331.6K 🔥` `NEW`
1. [年轻人开始全款买房意味着什么 (What does it mean for young people to start buying houses with full payment?)](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%BC%80%E5%A7%8B%E5%85%A8%E6%AC%BE%E4%B9%B0%E6%88%BF%E6%84%8F%E5%91%B3%E7%9D%80%E4%BB%80%E4%B9%88%23) `328.3K 🔥` `NEW`
1. [魏如萱调侃曾沛慈太残酷](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A6%82%E8%90%B1%E8%B0%83%E4%BE%83%E6%9B%BE%E6%B2%9B%E6%85%88%E5%A4%AA%E6%AE%8B%E9%85%B7%23) `326.5K 🔥` `NEW`
1. [女子翻译5分钟赚500元感慨要好好念书](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%BF%BB%E8%AF%915%E5%88%86%E9%92%9F%E8%B5%9A500%E5%85%83%E6%84%9F%E6%85%A8%E8%A6%81%E5%A5%BD%E5%A5%BD%E5%BF%B5%E4%B9%A6%23) `322.2K 🔥` `NEW`
1. [胡歌考古 对家顶级阳谋送顶流出国](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%AD%8C%E8%80%83%E5%8F%A4%20%E5%AF%B9%E5%AE%B6%E9%A1%B6%E7%BA%A7%E9%98%B3%E8%B0%8B%E9%80%81%E9%A1%B6%E6%B5%81%E5%87%BA%E5%9B%BD%23) `320.2K 🔥` `NEW`
1. [复旦认定沈奕斐连麦内容合规](https://s.weibo.com/weibo?q=%23%E5%A4%8D%E6%97%A6%E8%AE%A4%E5%AE%9A%E6%B2%88%E5%A5%95%E6%96%90%E8%BF%9E%E9%BA%A6%E5%86%85%E5%AE%B9%E5%90%88%E8%A7%84%23) `319.6K 🔥` `NEW`
1. [收到子女的快递爸妈有多高兴](https://s.weibo.com/weibo?q=%23%E6%94%B6%E5%88%B0%E5%AD%90%E5%A5%B3%E7%9A%84%E5%BF%AB%E9%80%92%E7%88%B8%E5%A6%88%E6%9C%89%E5%A4%9A%E9%AB%98%E5%85%B4%23) `318.3K 🔥` `NEW`
1. [黄百鸣内幕交易罪名成立](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%99%BE%E9%B8%A3%E5%86%85%E5%B9%95%E4%BA%A4%E6%98%93%E7%BD%AA%E5%90%8D%E6%88%90%E7%AB%8B%23) `316.6K 🔥` `NEW`
1. [一小伙儿爆砸充电完不走车辆](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%B0%8F%E4%BC%99%E5%84%BF%E7%88%86%E7%A0%B8%E5%85%85%E7%94%B5%E5%AE%8C%E4%B8%8D%E8%B5%B0%E8%BD%A6%E8%BE%86%23) `313.8K 🔥` `NEW`
1. [吴宣仪发文力挺陈丽君](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%A3%E4%BB%AA%E5%8F%91%E6%96%87%E5%8A%9B%E6%8C%BA%E9%99%88%E4%B8%BD%E5%90%9B%23) `312.8K 🔥` `NEW`
1. [景甜曾自曝比起结婚更想生帅儿子](https://s.weibo.com/weibo?q=%23%E6%99%AF%E7%94%9C%E6%9B%BE%E8%87%AA%E6%9B%9D%E6%AF%94%E8%B5%B7%E7%BB%93%E5%A9%9A%E6%9B%B4%E6%83%B3%E7%94%9F%E5%B8%85%E5%84%BF%E5%AD%90%23) `309.6K 🔥` `NEW`
1. [李在明下班后吃烤肉 (Lee Jae-myung eats barbecue after get off work)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%9C%A8%E6%98%8E%E4%B8%8B%E7%8F%AD%E5%90%8E%E5%90%83%E7%83%A4%E8%82%89%23) `306.9K 🔥` `NEW`
1. [香港中环流动雪糕车大肠菌群超标](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E4%B8%AD%E7%8E%AF%E6%B5%81%E5%8A%A8%E9%9B%AA%E7%B3%95%E8%BD%A6%E5%A4%A7%E8%82%A0%E8%8F%8C%E7%BE%A4%E8%B6%85%E6%A0%87%23) `306.5K 🔥` `NEW`
1. [时团上六休一](https://s.weibo.com/weibo?q=%23%E6%97%B6%E5%9B%A2%E4%B8%8A%E5%85%AD%E4%BC%91%E4%B8%80%23) `303.8K 🔥` `NEW`
1. [洛克王国说明](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E5%85%8B%E7%8E%8B%E5%9B%BD%E8%AF%B4%E6%98%8E%23) `300.2K 🔥` `NEW`
1. [没见过这种设计的拖鞋](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E8%A7%81%E8%BF%87%E8%BF%99%E7%A7%8D%E8%AE%BE%E8%AE%A1%E7%9A%84%E6%8B%96%E9%9E%8B%23) `300.1K 🔥` `NEW`
1. [KPL老乡杯](https://s.weibo.com/weibo?q=%23KPL%E8%80%81%E4%B9%A1%E6%9D%AF%23) `298.3K 🔥` `NEW`
1. [不同姓氏却是最爱彼此的人](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%90%8C%E5%A7%93%E6%B0%8F%E5%8D%B4%E6%98%AF%E6%9C%80%E7%88%B1%E5%BD%BC%E6%AD%A4%E7%9A%84%E4%BA%BA%23) `295.9K 🔥` `NEW`
1. [中国奶粉在剑桥圈粉了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B6%E7%B2%89%E5%9C%A8%E5%89%91%E6%A1%A5%E5%9C%88%E7%B2%89%E4%BA%86%23) `292.6K 🔥` `NEW`
1. [奔跑吧14](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A714%23) `287.2K 🔥` `NEW`
1. [除了日本七国集团高层接连访华 (In addition to Japan’s successive visits to China by senior leaders of the Group of Seven)](https://s.weibo.com/weibo?q=%23%E9%99%A4%E4%BA%86%E6%97%A5%E6%9C%AC%E4%B8%83%E5%9B%BD%E9%9B%86%E5%9B%A2%E9%AB%98%E5%B1%82%E6%8E%A5%E8%BF%9E%E8%AE%BF%E5%8D%8E%23) `779.2K 🔥` `+154%`
1. [身上有这种小红点是疾病信号](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%B8%8A%E6%9C%89%E8%BF%99%E7%A7%8D%E5%B0%8F%E7%BA%A2%E7%82%B9%E6%98%AF%E7%96%BE%E7%97%85%E4%BF%A1%E5%8F%B7%23) `302.5K 🔥` `+71%`
1. [女子捡到金项链发现异常立马扔掉 (A woman picked up a gold necklace and threw it away immediately after noticing something strange.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8D%A1%E5%88%B0%E9%87%91%E9%A1%B9%E9%93%BE%E5%8F%91%E7%8E%B0%E5%BC%82%E5%B8%B8%E7%AB%8B%E9%A9%AC%E6%89%94%E6%8E%89%23) `1.1M 🔥`
1. [暴雨为啥来得这么猛 (Why is the rainstorm coming so hard?)](https://s.weibo.com/weibo?q=%23%E6%9A%B4%E9%9B%A8%E4%B8%BA%E5%95%A5%E6%9D%A5%E5%BE%97%E8%BF%99%E4%B9%88%E7%8C%9B%23) `616.9K 🔥`
1. [孙千这个腿长 (Sun Qian has long legs)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E8%BF%99%E4%B8%AA%E8%85%BF%E9%95%BF%23) `325.1K 🔥`
1. [女子没来过月经却生了三个孩子](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%B2%A1%E6%9D%A5%E8%BF%87%E6%9C%88%E7%BB%8F%E5%8D%B4%E7%94%9F%E4%BA%86%E4%B8%89%E4%B8%AA%E5%AD%A9%E5%AD%90%23) `310.3K 🔥`
1. [易长痘体质](https://s.weibo.com/weibo?q=%23%E6%98%93%E9%95%BF%E7%97%98%E4%BD%93%E8%B4%A8%23) `294.3K 🔥`
1. [朱自清散文AI率超60% (The AI ​​rate of Zhu Ziqing’s prose exceeds 60%)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E8%87%AA%E6%B8%85%E6%95%A3%E6%96%87AI%E7%8E%87%E8%B6%8560%25%23) `291.5K 🔥`
1. [张豆豆曾反复跟孙杨确认是否真的结婚](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%B1%86%E8%B1%86%E6%9B%BE%E5%8F%8D%E5%A4%8D%E8%B7%9F%E5%AD%99%E6%9D%A8%E7%A1%AE%E8%AE%A4%E6%98%AF%E5%90%A6%E7%9C%9F%E7%9A%84%E7%BB%93%E5%A9%9A%23) `290.0K 🔥`
1. [晚上一定要拉窗帘](https://s.weibo.com/weibo?q=%23%E6%99%9A%E4%B8%8A%E4%B8%80%E5%AE%9A%E8%A6%81%E6%8B%89%E7%AA%97%E5%B8%98%23) `542.3K 🔥` `-27%`
1. [水果含糖量金字塔](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E6%9E%9C%E5%90%AB%E7%B3%96%E9%87%8F%E9%87%91%E5%AD%97%E5%A1%94%23) `494.6K 🔥` `-32%`
1. [曾沛慈 全部看浪姐不准看歌手](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%20%E5%85%A8%E9%83%A8%E7%9C%8B%E6%B5%AA%E5%A7%90%E4%B8%8D%E5%87%86%E7%9C%8B%E6%AD%8C%E6%89%8B%23) `329.0K 🔥` `-55%`

Updated at 2026-05-22 19:12:38

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
