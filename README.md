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

1. [陈克明食品道歉 (Chen Keming Food apologizes)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%85%8B%E6%98%8E%E9%A3%9F%E5%93%81%E9%81%93%E6%AD%89%23) `1.2M 🔥` `NEW`
1. [国产盾构机火遍全球](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BA%A7%E7%9B%BE%E6%9E%84%E6%9C%BA%E7%81%AB%E9%81%8D%E5%85%A8%E7%90%83%23) `903.0K 🔥` `NEW`
1. [王鹤棣客栈录制期间不开心](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%AE%A2%E6%A0%88%E5%BD%95%E5%88%B6%E6%9C%9F%E9%97%B4%E4%B8%8D%E5%BC%80%E5%BF%83%23) `901.9K 🔥` `NEW`
1. [中国工程院撤销张尧学院士称号](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%B7%A5%E7%A8%8B%E9%99%A2%E6%92%A4%E9%94%80%E5%BC%A0%E5%B0%A7%E5%AD%A6%E9%99%A2%E5%A3%AB%E7%A7%B0%E5%8F%B7%23) `888.0K 🔥` `NEW`
1. [杨汝晴回复杨丞琳](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B1%9D%E6%99%B4%E5%9B%9E%E5%A4%8D%E6%9D%A8%E4%B8%9E%E7%90%B3%23) `877.0K 🔥` `NEW`
1. [法拉利史上首款电动车亮相](https://s.weibo.com/weibo?q=%23%E6%B3%95%E6%8B%89%E5%88%A9%E5%8F%B2%E4%B8%8A%E9%A6%96%E6%AC%BE%E7%94%B5%E5%8A%A8%E8%BD%A6%E4%BA%AE%E7%9B%B8%23) `796.2K 🔥` `NEW`
1. [武契奇的眼泪在眼眶中打转](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A5%91%E5%A5%87%E7%9A%84%E7%9C%BC%E6%B3%AA%E5%9C%A8%E7%9C%BC%E7%9C%B6%E4%B8%AD%E6%89%93%E8%BD%AC%23) `659.7K 🔥` `NEW`
1. [迈阿密国际通报梅西伤情](https://s.weibo.com/weibo?q=%23%E8%BF%88%E9%98%BF%E5%AF%86%E5%9B%BD%E9%99%85%E9%80%9A%E6%8A%A5%E6%A2%85%E8%A5%BF%E4%BC%A4%E6%83%85%23) `575.0K 🔥` `NEW`
1. [6G试验频率正式获批](https://s.weibo.com/weibo?q=%236G%E8%AF%95%E9%AA%8C%E9%A2%91%E7%8E%87%E6%AD%A3%E5%BC%8F%E8%8E%B7%E6%89%B9%23) `566.5K 🔥` `NEW`
1. [庾澄庆点赞吐槽歌手言论](https://s.weibo.com/weibo?q=%23%E5%BA%BE%E6%BE%84%E5%BA%86%E7%82%B9%E8%B5%9E%E5%90%90%E6%A7%BD%E6%AD%8C%E6%89%8B%E8%A8%80%E8%AE%BA%23) `562.7K 🔥` `NEW`
1. [刘亦菲真的大大方方的 (Liu Yifei is really generous)](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E7%9C%9F%E7%9A%84%E5%A4%A7%E5%A4%A7%E6%96%B9%E6%96%B9%E7%9A%84%23) `554.0K 🔥` `NEW`
1. [美军称在伊朗南部实施自卫打击](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E7%A7%B0%E5%9C%A8%E4%BC%8A%E6%9C%97%E5%8D%97%E9%83%A8%E5%AE%9E%E6%96%BD%E8%87%AA%E5%8D%AB%E6%89%93%E5%87%BB%23) `549.5K 🔥` `NEW`
1. [刘诗诗 热红温了还在问用的什么腮红](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%20%E7%83%AD%E7%BA%A2%E6%B8%A9%E4%BA%86%E8%BF%98%E5%9C%A8%E9%97%AE%E7%94%A8%E7%9A%84%E4%BB%80%E4%B9%88%E8%85%AE%E7%BA%A2%23) `548.8K 🔥` `NEW`
1. [白玉兰预测](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E9%A2%84%E6%B5%8B%23) `544.3K 🔥` `NEW`
1. [脑梗元凶是餐后高血糖和胰岛素抵抗](https://s.weibo.com/weibo?q=%23%E8%84%91%E6%A2%97%E5%85%83%E5%87%B6%E6%98%AF%E9%A4%90%E5%90%8E%E9%AB%98%E8%A1%80%E7%B3%96%E5%92%8C%E8%83%B0%E5%B2%9B%E7%B4%A0%E6%8A%B5%E6%8A%97%23) `541.9K 🔥` `NEW`
1. [贰万曝严浩翔补妆为他们争取吸烟时间](https://s.weibo.com/weibo?q=%23%E8%B4%B0%E4%B8%87%E6%9B%9D%E4%B8%A5%E6%B5%A9%E7%BF%94%E8%A1%A5%E5%A6%86%E4%B8%BA%E4%BB%96%E4%BB%AC%E4%BA%89%E5%8F%96%E5%90%B8%E7%83%9F%E6%97%B6%E9%97%B4%23) `539.7K 🔥` `NEW`
1. [秦岚脾气](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%B2%9A%E8%84%BE%E6%B0%94%23) `535.4K 🔥` `NEW`
1. [网传浪姐X秀阵容](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%B5%AA%E5%A7%90X%E7%A7%80%E9%98%B5%E5%AE%B9%23) `530.3K 🔥` `NEW`
1. [吴泽林体面](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%B3%BD%E6%9E%97%E4%BD%93%E9%9D%A2%23) `527.8K 🔥` `NEW`
1. [2名外籍女子在我国频繁骗婚赚钱](https://s.weibo.com/weibo?q=%232%E5%90%8D%E5%A4%96%E7%B1%8D%E5%A5%B3%E5%AD%90%E5%9C%A8%E6%88%91%E5%9B%BD%E9%A2%91%E7%B9%81%E9%AA%97%E5%A9%9A%E8%B5%9A%E9%92%B1%23) `523.6K 🔥` `NEW`
1. [王健林4亿元资产遭变卖 (Wang Jianlin’s 400 million yuan worth of assets sold off)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%81%A5%E6%9E%974%E4%BA%BF%E5%85%83%E8%B5%84%E4%BA%A7%E9%81%AD%E5%8F%98%E5%8D%96%23) `522.9K 🔥` `NEW`
1. [严浩翔答辩](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%AD%94%E8%BE%A9%23) `518.3K 🔥` `NEW`
1. [网警公布5起打击整治网络谣言案例](https://s.weibo.com/weibo?q=%23%E7%BD%91%E8%AD%A6%E5%85%AC%E5%B8%835%E8%B5%B7%E6%89%93%E5%87%BB%E6%95%B4%E6%B2%BB%E7%BD%91%E7%BB%9C%E8%B0%A3%E8%A8%80%E6%A1%88%E4%BE%8B%23) `514.5K 🔥` `NEW`
1. [男子打晕妻子后扔下十几米悬崖致死](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%89%93%E6%99%95%E5%A6%BB%E5%AD%90%E5%90%8E%E6%89%94%E4%B8%8B%E5%8D%81%E5%87%A0%E7%B1%B3%E6%82%AC%E5%B4%96%E8%87%B4%E6%AD%BB%23) `510.2K 🔥` `NEW`
1. [JDG运营](https://s.weibo.com/weibo?q=%23JDG%E8%BF%90%E8%90%A5%23) `507.0K 🔥` `NEW`
1. [曝生万物白玉兰五项提名](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%94%9F%E4%B8%87%E7%89%A9%E7%99%BD%E7%8E%89%E5%85%B0%E4%BA%94%E9%A1%B9%E6%8F%90%E5%90%8D%23) `505.8K 🔥` `NEW`
1. [AI正引发第一波人类降智](https://s.weibo.com/weibo?q=%23AI%E6%AD%A3%E5%BC%95%E5%8F%91%E7%AC%AC%E4%B8%80%E6%B3%A2%E4%BA%BA%E7%B1%BB%E9%99%8D%E6%99%BA%23) `489.4K 🔥` `NEW`
1. [心动的信号6两对he](https://s.weibo.com/weibo?q=%23%E5%BF%83%E5%8A%A8%E7%9A%84%E4%BF%A1%E5%8F%B76%E4%B8%A4%E5%AF%B9he%23) `485.3K 🔥` `NEW`
1. [记者意外拍到戴耳环女干部忙碌身影](https://s.weibo.com/weibo?q=%23%E8%AE%B0%E8%80%85%E6%84%8F%E5%A4%96%E6%8B%8D%E5%88%B0%E6%88%B4%E8%80%B3%E7%8E%AF%E5%A5%B3%E5%B9%B2%E9%83%A8%E5%BF%99%E7%A2%8C%E8%BA%AB%E5%BD%B1%23) `481.6K 🔥` `NEW`
1. [虞书欣也拒绝不了Jennie快闪](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%B9%9F%E6%8B%92%E7%BB%9D%E4%B8%8D%E4%BA%86Jennie%E5%BF%AB%E9%97%AA%23) `475.1K 🔥` `NEW`
1. [梅西左腿腘绳肌负荷劳损 (Messi suffers load strain on hamstring muscle of left leg)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%A5%BF%E5%B7%A6%E8%85%BF%E8%85%98%E7%BB%B3%E8%82%8C%E8%B4%9F%E8%8D%B7%E5%8A%B3%E6%8D%9F%23) `466.8K 🔥` `NEW`
1. [朵朵祝小酒窝活到四位数](https://s.weibo.com/weibo?q=%23%E6%9C%B5%E6%9C%B5%E7%A5%9D%E5%B0%8F%E9%85%92%E7%AA%9D%E6%B4%BB%E5%88%B0%E5%9B%9B%E4%BD%8D%E6%95%B0%23) `463.7K 🔥` `NEW`
1. [影视飓风是不是中国最酷的公司](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8E%E6%98%AF%E4%B8%8D%E6%98%AF%E4%B8%AD%E5%9B%BD%E6%9C%80%E9%85%B7%E7%9A%84%E5%85%AC%E5%8F%B8%23) `458.1K 🔥` `NEW`
1. [小鹏GX开启大规模交付 (Xpeng GX starts large-scale delivery)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FGX%E5%BC%80%E5%90%AF%E5%A4%A7%E8%A7%84%E6%A8%A1%E4%BA%A4%E4%BB%98%23) `902.9K 🔥` `+651%`
1. [2026白玉兰奖](https://s.weibo.com/weibo?q=%232026%E7%99%BD%E7%8E%89%E5%85%B0%E5%A5%96%23) `575.1K 🔥` `+63%`
1. [杨丞琳发文恭喜侯卓成杨汝晴](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E4%B8%9E%E7%90%B3%E5%8F%91%E6%96%87%E6%81%AD%E5%96%9C%E4%BE%AF%E5%8D%93%E6%88%90%E6%9D%A8%E6%B1%9D%E6%99%B4%23) `571.9K 🔥` `+66%`
1. [在一家公司呆五年的真实感受](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E4%B8%80%E5%AE%B6%E5%85%AC%E5%8F%B8%E5%91%86%E4%BA%94%E5%B9%B4%E7%9A%84%E7%9C%9F%E5%AE%9E%E6%84%9F%E5%8F%97%23) `564.7K 🔥` `+72%`
1. [王鹤棣掉粉](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%8E%89%E7%B2%89%23) `558.7K 🔥` `+63%`
1. [因漏放吸管辱骂打砸店员女子被行拘](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E6%BC%8F%E6%94%BE%E5%90%B8%E7%AE%A1%E8%BE%B1%E9%AA%82%E6%89%93%E7%A0%B8%E5%BA%97%E5%91%98%E5%A5%B3%E5%AD%90%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `534.0K 🔥` `+57%`
1. [给阿嬷的情书 投资回报率](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%20%E6%8A%95%E8%B5%84%E5%9B%9E%E6%8A%A5%E7%8E%87%23) `501.6K 🔥` `+43%`
1. [帕梅拉去了天津都害怕](https://s.weibo.com/weibo?q=%23%E5%B8%95%E6%A2%85%E6%8B%89%E5%8E%BB%E4%BA%86%E5%A4%A9%E6%B4%A5%E9%83%BD%E5%AE%B3%E6%80%95%23) `500.1K 🔥` `+44%`
1. [盒马粉木耳产品已下架 (Hema powder fungus products have been removed from the shelves)](https://s.weibo.com/weibo?q=%23%E7%9B%92%E9%A9%AC%E7%B2%89%E6%9C%A8%E8%80%B3%E4%BA%A7%E5%93%81%E5%B7%B2%E4%B8%8B%E6%9E%B6%23) `495.5K 🔥` `+63%`
1. [16岁女孩遭殴打父亲拒绝调解](https://s.weibo.com/weibo?q=%2316%E5%B2%81%E5%A5%B3%E5%AD%A9%E9%81%AD%E6%AE%B4%E6%89%93%E7%88%B6%E4%BA%B2%E6%8B%92%E7%BB%9D%E8%B0%83%E8%A7%A3%23) `493.2K 🔥` `+62%`
1. [杨紫给粉丝送未公开小卡](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%BB%99%E7%B2%89%E4%B8%9D%E9%80%81%E6%9C%AA%E5%85%AC%E5%BC%80%E5%B0%8F%E5%8D%A1%23) `486.5K 🔥` `+76%`
1. [叶一茜 发卖老公](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E4%B8%80%E8%8C%9C%20%E5%8F%91%E5%8D%96%E8%80%81%E5%85%AC%23) `478.6K 🔥` `+66%`
1. [西安一16岁女孩在街上遭陌生男子殴打 (A 16-year-old girl in Xi'an was beaten by a strange man on the street)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E4%B8%8016%E5%B2%81%E5%A5%B3%E5%AD%A9%E5%9C%A8%E8%A1%97%E4%B8%8A%E9%81%AD%E9%99%8C%E7%94%9F%E7%94%B7%E5%AD%90%E6%AE%B4%E6%89%93%23) `474.4K 🔥` `+44%`
1. [主角原著 秦娥家暴刘红兵](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%E5%8E%9F%E8%91%97%20%E7%A7%A6%E5%A8%A5%E5%AE%B6%E6%9A%B4%E5%88%98%E7%BA%A2%E5%85%B5%23) `470.4K 🔥` `+737%`
1. [潘玮柏得了面瘫](https://s.weibo.com/weibo?q=%23%E6%BD%98%E7%8E%AE%E6%9F%8F%E5%BE%97%E4%BA%86%E9%9D%A2%E7%98%AB%23) `460.3K 🔥` `+36%`
1. [盒马郑重道歉 (Hema solemnly apologizes)](https://s.weibo.com/weibo?q=%23%E7%9B%92%E9%A9%AC%E9%83%91%E9%87%8D%E9%81%93%E6%AD%89%23) `939.1K 🔥`
1. [生理性喜欢很容易对人产生误导 (Physiological liking can easily mislead people)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E7%90%86%E6%80%A7%E5%96%9C%E6%AC%A2%E5%BE%88%E5%AE%B9%E6%98%93%E5%AF%B9%E4%BA%BA%E4%BA%A7%E7%94%9F%E8%AF%AF%E5%AF%BC%23) `556.2K 🔥`
1. [今年天气系统出现异常 (The weather system is abnormal this year)](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E5%A4%A9%E6%B0%94%E7%B3%BB%E7%BB%9F%E5%87%BA%E7%8E%B0%E5%BC%82%E5%B8%B8%23) `516.9K 🔥` `-35%`

Updated at 2026-05-26 10:09:28

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
