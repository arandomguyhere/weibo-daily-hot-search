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

1. [张雪机车荷兰站 (Zhang Xue Locomotive Holland Station)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E8%8D%B7%E5%85%B0%E7%AB%99%23) `838.8K 🔥` `NEW`
1. [魏晨现身张杰演唱会](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E6%99%A8%E7%8E%B0%E8%BA%AB%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%23) `413.1K 🔥` `NEW`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `399.6K 🔥` `NEW`
1. [Angelababy陈赫拥抱](https://s.weibo.com/weibo?q=%23Angelababy%E9%99%88%E8%B5%AB%E6%8B%A5%E6%8A%B1%23) `395.4K 🔥` `NEW`
1. [伊朗开放霍尔木兹特朗普发帖说谢谢](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%BC%80%E6%94%BE%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E7%89%B9%E6%9C%97%E6%99%AE%E5%8F%91%E5%B8%96%E8%AF%B4%E8%B0%A2%E8%B0%A2%23) `386.4K 🔥` `NEW`
1. [极氪8X上市限时售价32.98万元起](https://s.weibo.com/weibo?q=%23%E6%9E%81%E6%B0%AA8X%E4%B8%8A%E5%B8%82%E9%99%90%E6%97%B6%E5%94%AE%E4%BB%B732.98%E4%B8%87%E5%85%83%E8%B5%B7%23) `383.9K 🔥` `NEW`
1. [归元S平台将引发汽车产业质变](https://s.weibo.com/weibo?q=%23%E5%BD%92%E5%85%83S%E5%B9%B3%E5%8F%B0%E5%B0%86%E5%BC%95%E5%8F%91%E6%B1%BD%E8%BD%A6%E4%BA%A7%E4%B8%9A%E8%B4%A8%E5%8F%98%23) `371.1K 🔥` `NEW`
1. [魏建军为魏牌V9X品质背书](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%BB%BA%E5%86%9B%E4%B8%BA%E9%AD%8F%E7%89%8CV9X%E5%93%81%E8%B4%A8%E8%83%8C%E4%B9%A6%23) `367.6K 🔥` `NEW`
1. [张凌赫小学就像巨人](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%B0%8F%E5%AD%A6%E5%B0%B1%E5%83%8F%E5%B7%A8%E4%BA%BA%23) `360.6K 🔥` `NEW`
1. [周杰伦点破女艺人困境](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E7%82%B9%E7%A0%B4%E5%A5%B3%E8%89%BA%E4%BA%BA%E5%9B%B0%E5%A2%83%23) `351.9K 🔥` `NEW`
1. [雷军到达上海后还有余电 (Lei Jun still had power left after arriving in Shanghai)](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%88%B0%E8%BE%BE%E4%B8%8A%E6%B5%B7%E5%90%8E%E8%BF%98%E6%9C%89%E4%BD%99%E7%94%B5%23) `349.2K 🔥` `NEW`
1. [失联13天男生信号最后在缅甸侧口岸](https://s.weibo.com/weibo?q=%23%E5%A4%B1%E8%81%9413%E5%A4%A9%E7%94%B7%E7%94%9F%E4%BF%A1%E5%8F%B7%E6%9C%80%E5%90%8E%E5%9C%A8%E7%BC%85%E7%94%B8%E4%BE%A7%E5%8F%A3%E5%B2%B8%23) `341.4K 🔥` `NEW`
1. [鞠婧祎回应月鳞绮纪结局](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%9B%9E%E5%BA%94%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E7%BB%93%E5%B1%80%23) `339.5K 🔥` `NEW`
1. [大码女装店让S码模特穿XL样衣](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%A0%81%E5%A5%B3%E8%A3%85%E5%BA%97%E8%AE%A9S%E7%A0%81%E6%A8%A1%E7%89%B9%E7%A9%BFXL%E6%A0%B7%E8%A1%A3%23) `334.4K 🔥` `NEW`
1. [A股七姐妹](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%B8%83%E5%A7%90%E5%A6%B9%23) `333.5K 🔥` `NEW`
1. [学校组织10元车费去春游男孩下车秒哭](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E6%A0%A1%E7%BB%84%E7%BB%8710%E5%85%83%E8%BD%A6%E8%B4%B9%E5%8E%BB%E6%98%A5%E6%B8%B8%E7%94%B7%E5%AD%A9%E4%B8%8B%E8%BD%A6%E7%A7%92%E5%93%AD%23) `323.2K 🔥` `NEW`
1. [平台不能只赚钱不守门](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E5%8F%B0%E4%B8%8D%E8%83%BD%E5%8F%AA%E8%B5%9A%E9%92%B1%E4%B8%8D%E5%AE%88%E9%97%A8%23) `320.3K 🔥` `NEW`
1. [霍尔木兹海峡开放 (Strait of Hormuz opens)](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E5%BC%80%E6%94%BE%23) `1.6M 🔥` `+50%`
1. [雷军达成京沪高速只充一次电](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E8%BE%BE%E6%88%90%E4%BA%AC%E6%B2%AA%E9%AB%98%E9%80%9F%E5%8F%AA%E5%85%85%E4%B8%80%E6%AC%A1%E7%94%B5%23) `1.1M 🔥` `+31%`
1. [麦当劳肯德基 宿敌cp](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E5%BD%93%E5%8A%B3%E8%82%AF%E5%BE%B7%E5%9F%BA%20%E5%AE%BF%E6%95%8Ccp%23) `839.3K 🔥` `+376%`
1. [新公路之王极氪8X正式上市](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%85%AC%E8%B7%AF%E4%B9%8B%E7%8E%8B%E6%9E%81%E6%B0%AA8X%E6%AD%A3%E5%BC%8F%E4%B8%8A%E5%B8%82%23) `838.9K 🔥` `+111%`
1. [单依纯若捆绑王菲宣传涉嫌违法 (Shan Yichunruo is suspected of breaking the law by tying up Faye Wong for promotion)](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E8%8B%A5%E6%8D%86%E7%BB%91%E7%8E%8B%E8%8F%B2%E5%AE%A3%E4%BC%A0%E6%B6%89%E5%AB%8C%E8%BF%9D%E6%B3%95%23) `397.5K 🔥` `+27%`
1. [解放军护卫舰与外舰缠斗20小时](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E6%8A%A4%E5%8D%AB%E8%88%B0%E4%B8%8E%E5%A4%96%E8%88%B0%E7%BC%A0%E6%96%9720%E5%B0%8F%E6%97%B6%23) `393.3K 🔥` `+51%`
1. [谢娜回应网友问抚养权判给谁了](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%9B%9E%E5%BA%94%E7%BD%91%E5%8F%8B%E9%97%AE%E6%8A%9A%E5%85%BB%E6%9D%83%E5%88%A4%E7%BB%99%E8%B0%81%E4%BA%86%23) `364.5K 🔥` `+74%`
1. [儿子晒96岁父亲的三无精致生活](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E6%99%9296%E5%B2%81%E7%88%B6%E4%BA%B2%E7%9A%84%E4%B8%89%E6%97%A0%E7%B2%BE%E8%87%B4%E7%94%9F%E6%B4%BB%23) `362.2K 🔥` `+116%`
1. [白发或是身体的抗癌警报](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%8F%91%E6%88%96%E6%98%AF%E8%BA%AB%E4%BD%93%E7%9A%84%E6%8A%97%E7%99%8C%E8%AD%A6%E6%8A%A5%23) `353.6K 🔥` `+54%`
1. [28岁孕妇突发胸闷气促查出肺癌](https://s.weibo.com/weibo?q=%2328%E5%B2%81%E5%AD%95%E5%A6%87%E7%AA%81%E5%8F%91%E8%83%B8%E9%97%B7%E6%B0%94%E4%BF%83%E6%9F%A5%E5%87%BA%E8%82%BA%E7%99%8C%23) `347.8K 🔥` `+37%`
1. [人生是场巨大的事与愿违](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%94%9F%E6%98%AF%E5%9C%BA%E5%B7%A8%E5%A4%A7%E7%9A%84%E4%BA%8B%E4%B8%8E%E6%84%BF%E8%BF%9D%23) `344.5K 🔥` `+52%`
1. [钟丽缇女儿Jaden回应不是混血 (Christy Chung’s daughter Jaden responded that she is not mixed race)](https://s.weibo.com/weibo?q=%23%E9%92%9F%E4%B8%BD%E7%BC%87%E5%A5%B3%E5%84%BFJaden%E5%9B%9E%E5%BA%94%E4%B8%8D%E6%98%AF%E6%B7%B7%E8%A1%80%23) `331.0K 🔥` `+28%`
1. [女儿摆酒庆祝爸妈离婚](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E6%91%86%E9%85%92%E5%BA%86%E7%A5%9D%E7%88%B8%E5%A6%88%E7%A6%BB%E5%A9%9A%23) `329.4K 🔥` `+47%`
1. [张极又去看张杰演唱会了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9E%81%E5%8F%88%E5%8E%BB%E7%9C%8B%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BA%86%23) `326.4K 🔥` `+46%`
1. [氧化菊 泼水节](https://s.weibo.com/weibo?q=%23%E6%B0%A7%E5%8C%96%E8%8F%8A%20%E6%B3%BC%E6%B0%B4%E8%8A%82%23) `1.3M 🔥`
1. [中国经济在风浪中稳住了发展底盘 (China's economy has stabilized its development base amid the storm)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E5%9C%A8%E9%A3%8E%E6%B5%AA%E4%B8%AD%E7%A8%B3%E4%BD%8F%E4%BA%86%E5%8F%91%E5%B1%95%E5%BA%95%E7%9B%98%23) `1.1M 🔥`
1. [芭乐的籽居然可以一整块掰下来](https://s.weibo.com/weibo?q=%23%E8%8A%AD%E4%B9%90%E7%9A%84%E7%B1%BD%E5%B1%85%E7%84%B6%E5%8F%AF%E4%BB%A5%E4%B8%80%E6%95%B4%E5%9D%97%E6%8E%B0%E4%B8%8B%E6%9D%A5%23) `898.3K 🔥`
1. [21世纪大君夫人](https://s.weibo.com/weibo?q=%2321%E4%B8%96%E7%BA%AA%E5%A4%A7%E5%90%9B%E5%A4%AB%E4%BA%BA%23) `404.8K 🔥`
1. [孙怡回应和阚清子关系](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E5%9B%9E%E5%BA%94%E5%92%8C%E9%98%9A%E6%B8%85%E5%AD%90%E5%85%B3%E7%B3%BB%23) `402.4K 🔥`
1. [都美竹被强执](https://s.weibo.com/weibo?q=%23%E9%83%BD%E7%BE%8E%E7%AB%B9%E8%A2%AB%E5%BC%BA%E6%89%A7%23) `389.2K 🔥`
1. [李小冉一公第一名 (Li Xiaoran first place)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E4%B8%80%E5%85%AC%E7%AC%AC%E4%B8%80%E5%90%8D%23) `383.6K 🔥`
1. [舒淇说我卸了妆还挺像50岁的](https://s.weibo.com/weibo?q=%23%E8%88%92%E6%B7%87%E8%AF%B4%E6%88%91%E5%8D%B8%E4%BA%86%E5%A6%86%E8%BF%98%E6%8C%BA%E5%83%8F50%E5%B2%81%E7%9A%84%23) `381.5K 🔥`
1. [陈奕恒回应私联争议](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E5%9B%9E%E5%BA%94%E7%A7%81%E8%81%94%E4%BA%89%E8%AE%AE%23) `377.1K 🔥`
1. [虞书欣丸子头](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%B8%B8%E5%AD%90%E5%A4%B4%23) `373.5K 🔥`
1. [穆祉丞二维码](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E4%BA%8C%E7%BB%B4%E7%A0%81%23) `358.3K 🔥`
1. [夫胜宽女装 (Hushengkuan women's clothing)](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E8%83%9C%E5%AE%BD%E5%A5%B3%E8%A3%85%23) `342.4K 🔥`
1. [一日本自卫队舰艇进入台湾海峡](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%97%A5%E6%9C%AC%E8%87%AA%E5%8D%AB%E9%98%9F%E8%88%B0%E8%89%87%E8%BF%9B%E5%85%A5%E5%8F%B0%E6%B9%BE%E6%B5%B7%E5%B3%A1%23) `336.6K 🔥`
1. [雷军问直播放歌有没有版权问题 (Lei Jun asked if there are any copyright issues with live streaming of songs)](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E9%97%AE%E7%9B%B4%E6%92%AD%E6%94%BE%E6%AD%8C%E6%9C%89%E6%B2%A1%E6%9C%89%E7%89%88%E6%9D%83%E9%97%AE%E9%A2%98%23) `322.0K 🔥`
1. [许昕真的回国家队了](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%98%95%E7%9C%9F%E7%9A%84%E5%9B%9E%E5%9B%BD%E5%AE%B6%E9%98%9F%E4%BA%86%23) `404.4K 🔥` `-21%`
1. [朱迅已抗癌20年](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E8%BF%85%E5%B7%B2%E6%8A%97%E7%99%8C20%E5%B9%B4%23) `392.2K 🔥` `-21%`
1. [拼多多美团京东淘天抖音被罚35亿 (Pinduoduo, Meituan, JD.com, Taotian and Douyin were fined 3.5 billion)](https://s.weibo.com/weibo?q=%23%E6%8B%BC%E5%A4%9A%E5%A4%9A%E7%BE%8E%E5%9B%A2%E4%BA%AC%E4%B8%9C%E6%B7%98%E5%A4%A9%E6%8A%96%E9%9F%B3%E8%A2%AB%E7%BD%9A35%E4%BA%BF%23) `377.7K 🔥` `-57%`
1. [20岁孙女偷偷结婚7旬爷爷落泪](https://s.weibo.com/weibo?q=%2320%E5%B2%81%E5%AD%99%E5%A5%B3%E5%81%B7%E5%81%B7%E7%BB%93%E5%A9%9A7%E6%97%AC%E7%88%B7%E7%88%B7%E8%90%BD%E6%B3%AA%23) `371.6K 🔥` `-24%`
1. [刘浩存 没有给代拍好脸色的义务](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%20%E6%B2%A1%E6%9C%89%E7%BB%99%E4%BB%A3%E6%8B%8D%E5%A5%BD%E8%84%B8%E8%89%B2%E7%9A%84%E4%B9%89%E5%8A%A1%23) `366.9K 🔥` `-39%`
1. [林肯号航母提供的餐食情况](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%82%AF%E5%8F%B7%E8%88%AA%E6%AF%8D%E6%8F%90%E4%BE%9B%E7%9A%84%E9%A4%90%E9%A3%9F%E6%83%85%E5%86%B5%23) `354.7K 🔥` `-29%`

Updated at 2026-04-17 23:15:39

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
