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

1. [沙某编造传播涉科大讯飞网络谣言被拘 (Sha was arrested for fabricating and spreading online rumors involving iFlytek, the University of Science and Technology of China)](https://s.weibo.com/weibo?q=%23%E6%B2%99%E6%9F%90%E7%BC%96%E9%80%A0%E4%BC%A0%E6%92%AD%E6%B6%89%E7%A7%91%E5%A4%A7%E8%AE%AF%E9%A3%9E%E7%BD%91%E7%BB%9C%E8%B0%A3%E8%A8%80%E8%A2%AB%E6%8B%98%23) `586.6K 🔥` `NEW`
1. [多儿加入美团外卖](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%84%BF%E5%8A%A0%E5%85%A5%E7%BE%8E%E5%9B%A2%E5%A4%96%E5%8D%96%23) `585.7K 🔥` `NEW`
1. [谢征拒绝赐婚](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%BE%81%E6%8B%92%E7%BB%9D%E8%B5%90%E5%A9%9A%23) `572.9K 🔥` `NEW`
1. [papi酱富人直播间](https://s.weibo.com/weibo?q=%23papi%E9%85%B1%E5%AF%8C%E4%BA%BA%E7%9B%B4%E6%92%AD%E9%97%B4%23) `361.0K 🔥` `NEW`
1. [迪丽热巴 女王回归](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%20%E5%A5%B3%E7%8E%8B%E5%9B%9E%E5%BD%92%23) `265.0K 🔥` `NEW`
1. [苏新皓拿苹果花](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E6%8B%BF%E8%8B%B9%E6%9E%9C%E8%8A%B1%23) `123.4K 🔥` `NEW`
1. [A股成交超2万亿放量1759亿](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%88%90%E4%BA%A4%E8%B6%852%E4%B8%87%E4%BA%BF%E6%94%BE%E9%87%8F1759%E4%BA%BF%23) `113.5K 🔥` `NEW`
1. [王者荣耀世界](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E4%B8%96%E7%95%8C%23) `96.9K 🔥` `NEW`
1. [当你终于开始了计划很久的出行](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BD%A0%E7%BB%88%E4%BA%8E%E5%BC%80%E5%A7%8B%E4%BA%86%E8%AE%A1%E5%88%92%E5%BE%88%E4%B9%85%E7%9A%84%E5%87%BA%E8%A1%8C%23) `90.3K 🔥` `NEW`
1. [云旗濮院高定周走秀](https://s.weibo.com/weibo?q=%23%E4%BA%91%E6%97%97%E6%BF%AE%E9%99%A2%E9%AB%98%E5%AE%9A%E5%91%A8%E8%B5%B0%E7%A7%80%23) `75.4K 🔥` `NEW`
1. [回避型人格 (avoidant personality)](https://s.weibo.com/weibo?q=%23%E5%9B%9E%E9%81%BF%E5%9E%8B%E4%BA%BA%E6%A0%BC%23) `71.5K 🔥` `NEW`
1. [胡塞为支持伊朗或封锁曼德海峡](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%A1%9E%E4%B8%BA%E6%94%AF%E6%8C%81%E4%BC%8A%E6%9C%97%E6%88%96%E5%B0%81%E9%94%81%E6%9B%BC%E5%BE%B7%E6%B5%B7%E5%B3%A1%23) `69.9K 🔥` `NEW`
1. [郑钦文vs斯蒂文斯](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E6%96%AF%E8%92%82%E6%96%87%E6%96%AF%23) `66.4K 🔥` `NEW`
1. [狗狗幼稚园过半老师有幼师背景](https://s.weibo.com/weibo?q=%23%E7%8B%97%E7%8B%97%E5%B9%BC%E7%A8%9A%E5%9B%AD%E8%BF%87%E5%8D%8A%E8%80%81%E5%B8%88%E6%9C%89%E5%B9%BC%E5%B8%88%E8%83%8C%E6%99%AF%23) `66.4K 🔥` `NEW`
1. [医院招聘法务硕士编外博士编内](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E6%8B%9B%E8%81%98%E6%B3%95%E5%8A%A1%E7%A1%95%E5%A3%AB%E7%BC%96%E5%A4%96%E5%8D%9A%E5%A3%AB%E7%BC%96%E5%86%85%23) `1.0M 🔥` `+796%`
1. [章子怡穿的比红毯还红](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%AD%90%E6%80%A1%E7%A9%BF%E7%9A%84%E6%AF%94%E7%BA%A2%E6%AF%AF%E8%BF%98%E7%BA%A2%23) `583.5K 🔥` `+139%`
1. [奥恰洛夫说樊振东不参加世乒赛 (Ocharov said Fan Zhendong will not participate in the World Table Tennis Championships)](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E6%81%B0%E6%B4%9B%E5%A4%AB%E8%AF%B4%E6%A8%8A%E6%8C%AF%E4%B8%9C%E4%B8%8D%E5%8F%82%E5%8A%A0%E4%B8%96%E4%B9%92%E8%B5%9B%23) `578.3K 🔥` `+86%`
1. [岚图港股上市官宣空间王炸泰山X8 (Lantu's Hong Kong stock listing officially announced the Space King's Taishan X8)](https://s.weibo.com/weibo?q=%23%E5%B2%9A%E5%9B%BE%E6%B8%AF%E8%82%A1%E4%B8%8A%E5%B8%82%E5%AE%98%E5%AE%A3%E7%A9%BA%E9%97%B4%E7%8E%8B%E7%82%B8%E6%B3%B0%E5%B1%B1X8%23) `570.2K 🔥` `+218%`
1. [薛之谦广州演唱会](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E5%B9%BF%E5%B7%9E%E6%BC%94%E5%94%B1%E4%BC%9A%23) `567.3K 🔥` `+137%`
1. [伊朗伊斯兰革命卫队发言人身亡 (Spokesperson of Iran’s Islamic Revolutionary Guard Corps dies)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%BC%8A%E6%96%AF%E5%85%B0%E9%9D%A9%E5%91%BD%E5%8D%AB%E9%98%9F%E5%8F%91%E8%A8%80%E4%BA%BA%E8%BA%AB%E4%BA%A1%23) `565.2K 🔥` `+137%`
1. [打工人姿势病](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%B7%A5%E4%BA%BA%E5%A7%BF%E5%8A%BF%E7%97%85%23) `559.6K 🔥` `+135%`
1. [女子买8套老破小月收租2.1万 (A woman bought 8 old and dilapidated apartments and collected rent of 21,000 yuan a month)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B9%B08%E5%A5%97%E8%80%81%E7%A0%B4%E5%B0%8F%E6%9C%88%E6%94%B6%E7%A7%9F2.1%E4%B8%87%23) `553.8K 🔥` `+118%`
1. [迪丽热巴迪奥活动直拍](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%AA%E5%A5%A5%E6%B4%BB%E5%8A%A8%E7%9B%B4%E6%8B%8D%23) `546.9K 🔥` `+378%`
1. [外网也意识到韩国偷文化了](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%BD%91%E4%B9%9F%E6%84%8F%E8%AF%86%E5%88%B0%E9%9F%A9%E5%9B%BD%E5%81%B7%E6%96%87%E5%8C%96%E4%BA%86%23) `545.7K 🔥` `+132%`
1. [班上一个唐氏综合症的孩子写的 (Written by a child with Down syndrome in the class)](https://s.weibo.com/weibo?q=%23%E7%8F%AD%E4%B8%8A%E4%B8%80%E4%B8%AA%E5%94%90%E6%B0%8F%E7%BB%BC%E5%90%88%E7%97%87%E7%9A%84%E5%AD%A9%E5%AD%90%E5%86%99%E7%9A%84%23) `277.4K 🔥` `+196%`
1. [张凌赫工作室 拍出了张凌赫的死角 (Zhang Linghe's studio captured Zhang Linghe's blind spot)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E6%8B%8D%E5%87%BA%E4%BA%86%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9A%84%E6%AD%BB%E8%A7%92%23) `266.5K 🔥` `+150%`
1. [铁路通报女子月经弄脏卧铺事件](https://s.weibo.com/weibo?q=%23%E9%93%81%E8%B7%AF%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%90%E6%9C%88%E7%BB%8F%E5%BC%84%E8%84%8F%E5%8D%A7%E9%93%BA%E4%BA%8B%E4%BB%B6%23) `257.2K 🔥` `+54%`
1. [双休但不是休周末的工作](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E4%BC%91%E4%BD%86%E4%B8%8D%E6%98%AF%E4%BC%91%E5%91%A8%E6%9C%AB%E7%9A%84%E5%B7%A5%E4%BD%9C%23) `239.9K 🔥` `+24%`
1. [孟佳开撕品牌方](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E4%BD%B3%E5%BC%80%E6%92%95%E5%93%81%E7%89%8C%E6%96%B9%23) `196.4K 🔥` `+75%`
1. [女子办离婚被问你要离哪一段](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%8A%9E%E7%A6%BB%E5%A9%9A%E8%A2%AB%E9%97%AE%E4%BD%A0%E8%A6%81%E7%A6%BB%E5%93%AA%E4%B8%80%E6%AE%B5%23) `113.4K 🔥` `+21%`
1. [重庆市长胡衡华被查 (Chongqing Mayor Hu Henghua was investigated)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%B8%82%E9%95%BF%E8%83%A1%E8%A1%A1%E5%8D%8E%E8%A2%AB%E6%9F%A5%23) `88.9K 🔥` `+27%`
1. [日媒评高市早苗访美](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%AA%92%E8%AF%84%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E8%AE%BF%E7%BE%8E%23) `88.0K 🔥` `+21%`
1. [樊长玉草莓印](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E9%95%BF%E7%8E%89%E8%8D%89%E8%8E%93%E5%8D%B0%23) `256.9K 🔥`
1. [对一块钱的概念越来越模糊 (The concept of a dollar is becoming increasingly vague)](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E4%B8%80%E5%9D%97%E9%92%B1%E7%9A%84%E6%A6%82%E5%BF%B5%E8%B6%8A%E6%9D%A5%E8%B6%8A%E6%A8%A1%E7%B3%8A%23) `218.7K 🔥`
1. [一种很新的减肥方法](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%A7%8D%E5%BE%88%E6%96%B0%E7%9A%84%E5%87%8F%E8%82%A5%E6%96%B9%E6%B3%95%23) `147.2K 🔥`
1. [伊朗称渴望实战中给美军舰沉重一击](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E6%B8%B4%E6%9C%9B%E5%AE%9E%E6%88%98%E4%B8%AD%E7%BB%99%E7%BE%8E%E5%86%9B%E8%88%B0%E6%B2%89%E9%87%8D%E4%B8%80%E5%87%BB%23) `117.2K 🔥`
1. [暗访调查考公协议班](https://s.weibo.com/weibo?q=%23%E6%9A%97%E8%AE%BF%E8%B0%83%E6%9F%A5%E8%80%83%E5%85%AC%E5%8D%8F%E8%AE%AE%E7%8F%AD%23) `114.4K 🔥`
1. [吾恩 肠梗阻 (Wuen Intestinal obstruction)](https://s.weibo.com/weibo?q=%23%E5%90%BE%E6%81%A9%20%E8%82%A0%E6%A2%97%E9%98%BB%23) `111.0K 🔥`
1. [孟佳品牌方 盖娅传说 (Mengjia brand side The Legend of Gaia)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E4%BD%B3%E5%93%81%E7%89%8C%E6%96%B9%20%E7%9B%96%E5%A8%85%E4%BC%A0%E8%AF%B4%23) `106.7K 🔥`
1. [妈妈瞒着病重女儿偷偷看最后一眼 (Mother secretly takes one last look at seriously ill daughter without telling her)](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E7%9E%92%E7%9D%80%E7%97%85%E9%87%8D%E5%A5%B3%E5%84%BF%E5%81%B7%E5%81%B7%E7%9C%8B%E6%9C%80%E5%90%8E%E4%B8%80%E7%9C%BC%23) `89.9K 🔥`
1. [张桂源上网才知道自己成田赫之子了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%A1%82%E6%BA%90%E4%B8%8A%E7%BD%91%E6%89%8D%E7%9F%A5%E9%81%93%E8%87%AA%E5%B7%B1%E6%88%90%E7%94%B0%E8%B5%AB%E4%B9%8B%E5%AD%90%E4%BA%86%23) `89.8K 🔥`
1. [曝AI短剧使用杨紫的脸](https://s.weibo.com/weibo?q=%23%E6%9B%9DAI%E7%9F%AD%E5%89%A7%E4%BD%BF%E7%94%A8%E6%9D%A8%E7%B4%AB%E7%9A%84%E8%84%B8%23) `82.7K 🔥`
1. [曝王一博乐华续约 (It is revealed that Wang Yibo Lehua renewed his contract)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%B9%90%E5%8D%8E%E7%BB%AD%E7%BA%A6%23) `76.6K 🔥`
1. [CMG中国电影盛典](https://s.weibo.com/weibo?q=%23CMG%E4%B8%AD%E5%9B%BD%E7%94%B5%E5%BD%B1%E7%9B%9B%E5%85%B8%23) `75.6K 🔥`
1. [金价还要跌多久](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%BF%98%E8%A6%81%E8%B7%8C%E5%A4%9A%E4%B9%85%23) `66.5K 🔥`
1. [释永信涉嫌4项罪名 (Shi Yongxin is suspected of 4 crimes)](https://s.weibo.com/weibo?q=%23%E9%87%8A%E6%B0%B8%E4%BF%A1%E6%B6%89%E5%AB%8C4%E9%A1%B9%E7%BD%AA%E5%90%8D%23) `765.0K 🔥` `-26%`
1. [前员工爆料海底捞高层点炮制度 (A former employee revealed the high-level shooting system of Haidilao)](https://s.weibo.com/weibo?q=%23%E5%89%8D%E5%91%98%E5%B7%A5%E7%88%86%E6%96%99%E6%B5%B7%E5%BA%95%E6%8D%9E%E9%AB%98%E5%B1%82%E7%82%B9%E7%82%AE%E5%88%B6%E5%BA%A6%23) `177.4K 🔥` `-77%`
1. [刘轩丞新剧镜头被删 (Scenes from Liu Xuancheng's new drama deleted)](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%BD%A9%E4%B8%9E%E6%96%B0%E5%89%A7%E9%95%9C%E5%A4%B4%E8%A2%AB%E5%88%A0%23) `174.4K 🔥` `-25%`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `172.8K 🔥` `-23%`
1. [张子枫 希腊神女](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E6%9E%AB%20%E5%B8%8C%E8%85%8A%E7%A5%9E%E5%A5%B3%23) `126.7K 🔥` `-25%`
1. [二月二最硬核龙抬头 (The most hard-core dragon raises its head on February 2nd)](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E6%9C%88%E4%BA%8C%E6%9C%80%E7%A1%AC%E6%A0%B8%E9%BE%99%E6%8A%AC%E5%A4%B4%23) `107.2K 🔥` `-81%`
1. [Able战队夺冠](https://s.weibo.com/weibo?q=%23Able%E6%88%98%E9%98%9F%E5%A4%BA%E5%86%A0%23) `76.3K 🔥` `-68%`

Updated at 2026-03-20 20:24:52

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
