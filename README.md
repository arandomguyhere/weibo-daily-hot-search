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

1. [欧尔班承认败选 (Orban admits defeat)](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%B0%94%E7%8F%AD%E6%89%BF%E8%AE%A4%E8%B4%A5%E9%80%89%23) `432.4K 🔥` `NEW`
1. [伊朗公布驱离美军舰视频](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%85%AC%E5%B8%83%E9%A9%B1%E7%A6%BB%E7%BE%8E%E5%86%9B%E8%88%B0%E8%A7%86%E9%A2%91%23) `253.0K 🔥` `NEW`
1. [仙逆王林](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%E7%8E%8B%E6%9E%97%23) `177.9K 🔥` `NEW`
1. [切尔西0比3曼城](https://s.weibo.com/weibo?q=%23%E5%88%87%E5%B0%94%E8%A5%BF0%E6%AF%943%E6%9B%BC%E5%9F%8E%23) `172.7K 🔥` `NEW`
1. [匈牙利](https://s.weibo.com/weibo?q=%23%E5%8C%88%E7%89%99%E5%88%A9%23) `157.5K 🔥` `NEW`
1. [A股交易将迎重要调整](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%BA%A4%E6%98%93%E5%B0%86%E8%BF%8E%E9%87%8D%E8%A6%81%E8%B0%83%E6%95%B4%23) `149.0K 🔥` `NEW`
1. [高三学生学习困难测出智障](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%89%E5%AD%A6%E7%94%9F%E5%AD%A6%E4%B9%A0%E5%9B%B0%E9%9A%BE%E6%B5%8B%E5%87%BA%E6%99%BA%E9%9A%9C%23) `134.8K 🔥` `NEW`
1. [男子掉14颗牙剩下14颗也得全拔掉](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8E%8914%E9%A2%97%E7%89%99%E5%89%A9%E4%B8%8B14%E9%A2%97%E4%B9%9F%E5%BE%97%E5%85%A8%E6%8B%94%E6%8E%89%23) `114.9K 🔥` `NEW`
1. [郑恺晒女儿全英文对话](https://s.weibo.com/weibo?q=%23%E9%83%91%E6%81%BA%E6%99%92%E5%A5%B3%E5%84%BF%E5%85%A8%E8%8B%B1%E6%96%87%E5%AF%B9%E8%AF%9D%23) `114.6K 🔥` `NEW`
1. [时代少年团与循规蹈矩唱反调](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E4%B8%8E%E5%BE%AA%E8%A7%84%E8%B9%88%E7%9F%A9%E5%94%B1%E5%8F%8D%E8%B0%83%23) `109.2K 🔥` `NEW`
1. [短剧剧宣误入豪门少夫人聚会局 (The short play tells the story of accidentally entering a party of a wealthy young lady.)](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E5%89%A7%E5%AE%A3%E8%AF%AF%E5%85%A5%E8%B1%AA%E9%97%A8%E5%B0%91%E5%A4%AB%E4%BA%BA%E8%81%9A%E4%BC%9A%E5%B1%80%23) `106.4K 🔥` `NEW`
1. [匈牙利国会选举蒂萨党领先](https://s.weibo.com/weibo?q=%23%E5%8C%88%E7%89%99%E5%88%A9%E5%9B%BD%E4%BC%9A%E9%80%89%E4%B8%BE%E8%92%82%E8%90%A8%E5%85%9A%E9%A2%86%E5%85%88%23) `104.1K 🔥` `NEW`
1. [箱包女王破产后卖包子重启人生](https://s.weibo.com/weibo?q=%23%E7%AE%B1%E5%8C%85%E5%A5%B3%E7%8E%8B%E7%A0%B4%E4%BA%A7%E5%90%8E%E5%8D%96%E5%8C%85%E5%AD%90%E9%87%8D%E5%90%AF%E4%BA%BA%E7%94%9F%23) `103.5K 🔥` `NEW`
1. [伊朗谈判代表团启程回国](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%B0%88%E5%88%A4%E4%BB%A3%E8%A1%A8%E5%9B%A2%E5%90%AF%E7%A8%8B%E5%9B%9E%E5%9B%BD%23) `100.8K 🔥` `NEW`
1. [苹果AI眼镜细节曝光](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9CAI%E7%9C%BC%E9%95%9C%E7%BB%86%E8%8A%82%E6%9B%9D%E5%85%89%23) `98.7K 🔥` `NEW`
1. [美军称将封锁伊港口海上交通](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E7%A7%B0%E5%B0%86%E5%B0%81%E9%94%81%E4%BC%8A%E6%B8%AF%E5%8F%A3%E6%B5%B7%E4%B8%8A%E4%BA%A4%E9%80%9A%23) `97.8K 🔥` `NEW`
1. [王橹杰小咴故事原型](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%B0%8F%E5%92%B4%E6%95%85%E4%BA%8B%E5%8E%9F%E5%9E%8B%23) `97.0K 🔥` `NEW`
1. [12306回应静音车厢售货不叫卖](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E9%9D%99%E9%9F%B3%E8%BD%A6%E5%8E%A2%E5%94%AE%E8%B4%A7%E4%B8%8D%E5%8F%AB%E5%8D%96%23) `96.0K 🔥` `NEW`
1. [员工中了1500万彩票后直接离职 (Employee resigned immediately after winning 15 million yuan in lottery)](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A5%E4%B8%AD%E4%BA%861500%E4%B8%87%E5%BD%A9%E7%A5%A8%E5%90%8E%E7%9B%B4%E6%8E%A5%E7%A6%BB%E8%81%8C%23) `1.0M 🔥` `+67%`
1. [网传浪姐7一公个人喜爱度排名 (According to the Internet, the personal favorite ranking of Sister Lang 7)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%B5%AA%E5%A7%907%E4%B8%80%E5%85%AC%E4%B8%AA%E4%BA%BA%E5%96%9C%E7%88%B1%E5%BA%A6%E6%8E%92%E5%90%8D%23) `743.1K 🔥` `+68%`
1. [中国航天不断刷新宇宙级精彩 (China's aerospace industry continues to create world-class excitement)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%88%AA%E5%A4%A9%E4%B8%8D%E6%96%AD%E5%88%B7%E6%96%B0%E5%AE%87%E5%AE%99%E7%BA%A7%E7%B2%BE%E5%BD%A9%23) `610.0K 🔥` `+74%`
1. [OPPOFindX9Ultra今日官宣 (OPPO Find X9 Ultra is officially announced today)](https://s.weibo.com/weibo?q=%23OPPOFindX9Ultra%E4%BB%8A%E6%97%A5%E5%AE%98%E5%AE%A3%23) `514.1K 🔥` `+1013%`
1. [官方回应为什么不能把杨柳树都砍了 (Official response: Why can’t all willow trees be cut down?)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E8%83%BD%E6%8A%8A%E6%9D%A8%E6%9F%B3%E6%A0%91%E9%83%BD%E7%A0%8D%E4%BA%86%23) `192.0K 🔥` `+79%`
1. [境外涉黄AI软件绕过监管流入国内](https://s.weibo.com/weibo?q=%23%E5%A2%83%E5%A4%96%E6%B6%89%E9%BB%84AI%E8%BD%AF%E4%BB%B6%E7%BB%95%E8%BF%87%E7%9B%91%E7%AE%A1%E6%B5%81%E5%85%A5%E5%9B%BD%E5%86%85%23) `186.1K 🔥` `+59%`
1. [楚乔传热度 (Chu Qiao heat transfer rate)](https://s.weibo.com/weibo?q=%23%E6%A5%9A%E4%B9%94%E4%BC%A0%E7%83%AD%E5%BA%A6%23) `181.1K 🔥` `+167%`
1. [女子遭法官猥亵16分钟录音曝光](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%81%AD%E6%B3%95%E5%AE%98%E7%8C%A5%E4%BA%B516%E5%88%86%E9%92%9F%E5%BD%95%E9%9F%B3%E6%9B%9D%E5%85%89%23) `165.7K 🔥` `+144%`
1. [朴宝剑探班王安宇 (Park Bo Gum visits Wang Anyu)](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%AE%9D%E5%89%91%E6%8E%A2%E7%8F%AD%E7%8E%8B%E5%AE%89%E5%AE%87%23) `154.4K 🔥` `+28%`
1. [张雪机车竞拍者拒绝加价500万转售 (Zhang Xue's motorcycle bidder refused to increase the price by 5 million for resale)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E7%AB%9E%E6%8B%8D%E8%80%85%E6%8B%92%E7%BB%9D%E5%8A%A0%E4%BB%B7500%E4%B8%87%E8%BD%AC%E5%94%AE%23) `150.4K 🔥` `+70%`
1. [赵子琪硬刚浪姐](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E7%A1%AC%E5%88%9A%E6%B5%AA%E5%A7%90%23) `129.8K 🔥` `+92%`
1. [男子住48元宾馆身亡家属索赔被驳回 (Man’s family’s claim for death after staying in a 48-yuan hotel was rejected)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%BD%8F48%E5%85%83%E5%AE%BE%E9%A6%86%E8%BA%AB%E4%BA%A1%E5%AE%B6%E5%B1%9E%E7%B4%A2%E8%B5%94%E8%A2%AB%E9%A9%B3%E5%9B%9E%23) `123.5K 🔥` `+33%`
1. [王石已第4次被传失联被抓 (Wang Shi was reported to have lost contact and was arrested for the fourth time)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9F%B3%E5%B7%B2%E7%AC%AC4%E6%AC%A1%E8%A2%AB%E4%BC%A0%E5%A4%B1%E8%81%94%E8%A2%AB%E6%8A%93%23) `112.7K 🔥` `+66%`
1. [王濛的底气 (Wang Meng’s confidence)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E7%9A%84%E5%BA%95%E6%B0%94%23) `109.0K 🔥` `+61%`
1. [王石 秦枫 (Wang Shi Qin Feng)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9F%B3%20%E7%A7%A6%E6%9E%AB%23) `108.5K 🔥` `+60%`
1. [脑雾 (brain fog)](https://s.weibo.com/weibo?q=%23%E8%84%91%E9%9B%BE%23) `107.9K 🔥` `+62%`
1. [孙子怕爷爷去世每天偷偷带肉回家 (My grandson is afraid that his grandfather will die and he secretly brings meat home every day.)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%AD%90%E6%80%95%E7%88%B7%E7%88%B7%E5%8E%BB%E4%B8%96%E6%AF%8F%E5%A4%A9%E5%81%B7%E5%81%B7%E5%B8%A6%E8%82%89%E5%9B%9E%E5%AE%B6%23) `107.2K 🔥` `+61%`
1. [李荣浩真转我五百了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%E7%9C%9F%E8%BD%AC%E6%88%91%E4%BA%94%E7%99%BE%E4%BA%86%23) `107.0K 🔥` `+59%`
1. [何超蕸去世 (He Chaogui passed away)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E8%95%B8%E5%8E%BB%E4%B8%96%23) `105.8K 🔥` `+59%`
1. [妈妈辅导作业被气到引爆脑瘤](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E8%BE%85%E5%AF%BC%E4%BD%9C%E4%B8%9A%E8%A2%AB%E6%B0%94%E5%88%B0%E5%BC%95%E7%88%86%E8%84%91%E7%98%A4%23) `105.1K 🔥` `+56%`
1. [北京逐步替换杨柳树雌株](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E9%80%90%E6%AD%A5%E6%9B%BF%E6%8D%A2%E6%9D%A8%E6%9F%B3%E6%A0%91%E9%9B%8C%E6%A0%AA%23) `105.0K 🔥` `+61%`
1. [钢铁森林大结局](https://s.weibo.com/weibo?q=%23%E9%92%A2%E9%93%81%E6%A3%AE%E6%9E%97%E5%A4%A7%E7%BB%93%E5%B1%80%23) `103.3K 🔥` `+54%`
1. [白桃星座一周运势 (Weekly horoscope for Baitao zodiac sign)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%A1%83%E6%98%9F%E5%BA%A7%E4%B8%80%E5%91%A8%E8%BF%90%E5%8A%BF%23) `102.0K 🔥` `+54%`
1. [央视曝光AI造黄产业链 (CCTV exposes AI yellowing industry chain)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89AI%E9%80%A0%E9%BB%84%E4%BA%A7%E4%B8%9A%E9%93%BE%23) `101.6K 🔥` `+51%`
1. [罗永浩是怎么被蒸馏的 (How was Luo Yonghao distilled?)](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E6%98%AF%E6%80%8E%E4%B9%88%E8%A2%AB%E8%92%B8%E9%A6%8F%E7%9A%84%23) `100.8K 🔥` `+52%`
1. [热刺 降级 (Tottenham relegated)](https://s.weibo.com/weibo?q=%23%E7%83%AD%E5%88%BA%20%E9%99%8D%E7%BA%A7%23) `100.0K 🔥` `+55%`
1. [郑丽文试乘小米汽车 (Zheng Liwen takes a test drive in a Xiaomi car)](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%BD%E6%96%87%E8%AF%95%E4%B9%98%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%23) `99.5K 🔥` `+53%`
1. [全球航司被迫涨价 (Global airlines forced to raise prices)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E8%88%AA%E5%8F%B8%E8%A2%AB%E8%BF%AB%E6%B6%A8%E4%BB%B7%23) `97.4K 🔥` `+49%`
1. [孙燕姿演唱会](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%87%95%E5%A7%BF%E6%BC%94%E5%94%B1%E4%BC%9A%23) `96.1K 🔥` `+50%`
1. [伊朗伊斯兰革命卫队海军发出警告 (Iran's Islamic Revolutionary Guard Corps Navy issues warning)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%BC%8A%E6%96%AF%E5%85%B0%E9%9D%A9%E5%91%BD%E5%8D%AB%E9%98%9F%E6%B5%B7%E5%86%9B%E5%8F%91%E5%87%BA%E8%AD%A6%E5%91%8A%23) `133.3K 🔥`
1. [小酒窝和爸爸逛面包节 (Xiao Dimple and Dad visit the Bread Festival)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E5%92%8C%E7%88%B8%E7%88%B8%E9%80%9B%E9%9D%A2%E5%8C%85%E8%8A%82%23) `102.7K 🔥`
1. [井柏然胡巴妈 (Jing Boran Huba's mother)](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E8%83%A1%E5%B7%B4%E5%A6%88%23) `99.1K 🔥`
1. [伊朗称美国找借口退出谈判 (Iran says U.S. is looking for excuses to withdraw from talks)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E7%BE%8E%E5%9B%BD%E6%89%BE%E5%80%9F%E5%8F%A3%E9%80%80%E5%87%BA%E8%B0%88%E5%88%A4%23) `115.0K 🔥` `-41%`

Updated at 2026-04-13 07:46:36

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
