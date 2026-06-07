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

1. [高考数学难不难 (Is it difficult to take the college entrance examination mathematics?)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%95%B0%E5%AD%A6%E9%9A%BE%E4%B8%8D%E9%9A%BE%23) `4.6M 🔥` `NEW`
1. [我国氢煤混烧技术取得重大突破](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%B0%A2%E7%85%A4%E6%B7%B7%E7%83%A7%E6%8A%80%E6%9C%AF%E5%8F%96%E5%BE%97%E9%87%8D%E5%A4%A7%E7%AA%81%E7%A0%B4%23) `1.7M 🔥` `NEW`
1. [数学二卷 谁出的题](https://s.weibo.com/weibo?q=%23%E6%95%B0%E5%AD%A6%E4%BA%8C%E5%8D%B7%20%E8%B0%81%E5%87%BA%E7%9A%84%E9%A2%98%23) `1.3M 🔥` `NEW`
1. [高考作文 妈妈背我去医院](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E4%BD%9C%E6%96%87%20%E5%A6%88%E5%A6%88%E8%83%8C%E6%88%91%E5%8E%BB%E5%8C%BB%E9%99%A2%23) `912.9K 🔥` `NEW`
1. [翘楚弹幕 没法看](https://s.weibo.com/weibo?q=%23%E7%BF%98%E6%A5%9A%E5%BC%B9%E5%B9%95%20%E6%B2%A1%E6%B3%95%E7%9C%8B%23) `566.5K 🔥` `NEW`
1. [A股重大调整来袭](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E9%87%8D%E5%A4%A7%E8%B0%83%E6%95%B4%E6%9D%A5%E8%A2%AD%23) `534.0K 🔥` `NEW`
1. [宗馥莉把自己名字印在包装上](https://s.weibo.com/weibo?q=%23%E5%AE%97%E9%A6%A5%E8%8E%89%E6%8A%8A%E8%87%AA%E5%B7%B1%E5%90%8D%E5%AD%97%E5%8D%B0%E5%9C%A8%E5%8C%85%E8%A3%85%E4%B8%8A%23) `465.3K 🔥` `NEW`
1. [白鹿天就要亮了阿璃不哭](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%A4%A9%E5%B0%B1%E8%A6%81%E4%BA%AE%E4%BA%86%E9%98%BF%E7%92%83%E4%B8%8D%E5%93%AD%23) `399.3K 🔥` `NEW`
1. [张雪峰账号更新](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E8%B4%A6%E5%8F%B7%E6%9B%B4%E6%96%B0%23) `385.5K 🔥` `NEW`
1. [黄子韬做了16颗牙贴面](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E5%81%9A%E4%BA%8616%E9%A2%97%E7%89%99%E8%B4%B4%E9%9D%A2%23) `349.3K 🔥` `NEW`
1. [AG转会公告 (AG transfer announcement)](https://s.weibo.com/weibo?q=%23AG%E8%BD%AC%E4%BC%9A%E5%85%AC%E5%91%8A%23) `323.8K 🔥` `NEW`
1. [柳智敏的酒杯腿又被夸](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%99%BA%E6%95%8F%E7%9A%84%E9%85%92%E6%9D%AF%E8%85%BF%E5%8F%88%E8%A2%AB%E5%A4%B8%23) `319.8K 🔥` `NEW`
1. [大冰建议两口子别一起旅行](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E5%BB%BA%E8%AE%AE%E4%B8%A4%E5%8F%A3%E5%AD%90%E5%88%AB%E4%B8%80%E8%B5%B7%E6%97%85%E8%A1%8C%23) `290.3K 🔥` `NEW`
1. [JDG小玖退役](https://s.weibo.com/weibo?q=%23JDG%E5%B0%8F%E7%8E%96%E9%80%80%E5%BD%B9%23) `289.6K 🔥` `NEW`
1. [AI短剧 100集浓缩成3分钟](https://s.weibo.com/weibo?q=%23AI%E7%9F%AD%E5%89%A7%20100%E9%9B%86%E6%B5%93%E7%BC%A9%E6%88%903%E5%88%86%E9%92%9F%23) `287.2K 🔥` `NEW`
1. [詹姆斯疑回应打高尔夫被起诉](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E7%96%91%E5%9B%9E%E5%BA%94%E6%89%93%E9%AB%98%E5%B0%94%E5%A4%AB%E8%A2%AB%E8%B5%B7%E8%AF%89%23) `286.6K 🔥` `NEW`
1. [近视的人老了都是两副眼镜](https://s.weibo.com/weibo?q=%23%E8%BF%91%E8%A7%86%E7%9A%84%E4%BA%BA%E8%80%81%E4%BA%86%E9%83%BD%E6%98%AF%E4%B8%A4%E5%89%AF%E7%9C%BC%E9%95%9C%23) `284.8K 🔥` `NEW`
1. [心梗发作前一个月就有征兆](https://s.weibo.com/weibo?q=%23%E5%BF%83%E6%A2%97%E5%8F%91%E4%BD%9C%E5%89%8D%E4%B8%80%E4%B8%AA%E6%9C%88%E5%B0%B1%E6%9C%89%E5%BE%81%E5%85%86%23) `283.0K 🔥` `NEW`
1. [深圳宝妈称印度巴基斯坦人增多](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%AE%9D%E5%A6%88%E7%A7%B0%E5%8D%B0%E5%BA%A6%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E4%BA%BA%E5%A2%9E%E5%A4%9A%23) `282.2K 🔥` `NEW`
1. [浪姐7 兴风作浪的节目组](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%907%20%E5%85%B4%E9%A3%8E%E4%BD%9C%E6%B5%AA%E7%9A%84%E8%8A%82%E7%9B%AE%E7%BB%84%23) `279.6K 🔥` `NEW`
1. [曾沛慈打破我对善良等于吃亏偏见 (Zeng Peici broke my prejudice that kindness equals suffering.)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E6%89%93%E7%A0%B4%E6%88%91%E5%AF%B9%E5%96%84%E8%89%AF%E7%AD%89%E4%BA%8E%E5%90%83%E4%BA%8F%E5%81%8F%E8%A7%81%23) `277.9K 🔥` `NEW`
1. [北大教授谈高考作文天津卷](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%A4%A7%E6%95%99%E6%8E%88%E8%B0%88%E9%AB%98%E8%80%83%E4%BD%9C%E6%96%87%E5%A4%A9%E6%B4%A5%E5%8D%B7%23) `275.7K 🔥` `NEW`
1. [白鹿说没能量时就停一停](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%AF%B4%E6%B2%A1%E8%83%BD%E9%87%8F%E6%97%B6%E5%B0%B1%E5%81%9C%E4%B8%80%E5%81%9C%23) `274.7K 🔥` `NEW`
1. [中产家族的破产七件套](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BA%A7%E5%AE%B6%E6%97%8F%E7%9A%84%E7%A0%B4%E4%BA%A7%E4%B8%83%E4%BB%B6%E5%A5%97%23) `272.3K 🔥` `NEW`
1. [男生高考认考场发现教室就自己1人](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E9%AB%98%E8%80%83%E8%AE%A4%E8%80%83%E5%9C%BA%E5%8F%91%E7%8E%B0%E6%95%99%E5%AE%A4%E5%B0%B1%E8%87%AA%E5%B7%B11%E4%BA%BA%23) `271.2K 🔥` `NEW`
1. [关掉朋友圈之后发现自己不爱旅游](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%8E%89%E6%9C%8B%E5%8F%8B%E5%9C%88%E4%B9%8B%E5%90%8E%E5%8F%91%E7%8E%B0%E8%87%AA%E5%B7%B1%E4%B8%8D%E7%88%B1%E6%97%85%E6%B8%B8%23) `269.8K 🔥` `NEW`
1. [老舅常驻五哈吧](https://s.weibo.com/weibo?q=%23%E8%80%81%E8%88%85%E5%B8%B8%E9%A9%BB%E4%BA%94%E5%93%88%E5%90%A7%23) `267.4K 🔥` `NEW`
1. [原来蛋挞和可露丽都是修女发明的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%9B%8B%E6%8C%9E%E5%92%8C%E5%8F%AF%E9%9C%B2%E4%B8%BD%E9%83%BD%E6%98%AF%E4%BF%AE%E5%A5%B3%E5%8F%91%E6%98%8E%E7%9A%84%23) `266.0K 🔥` `NEW`
1. [于适25年发的博文压中高考作文](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E9%80%8225%E5%B9%B4%E5%8F%91%E7%9A%84%E5%8D%9A%E6%96%87%E5%8E%8B%E4%B8%AD%E9%AB%98%E8%80%83%E4%BD%9C%E6%96%87%23) `263.9K 🔥` `NEW`
1. [西藏那曲有游客拍照投喂藏马熊](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E9%82%A3%E6%9B%B2%E6%9C%89%E6%B8%B8%E5%AE%A2%E6%8B%8D%E7%85%A7%E6%8A%95%E5%96%82%E8%97%8F%E9%A9%AC%E7%86%8A%23) `261.6K 🔥` `NEW`
1. [陈丽君把信递给机场工作人员了 (Chen Lijun handed the letter to the airport staff)](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%90%9B%E6%8A%8A%E4%BF%A1%E9%80%92%E7%BB%99%E6%9C%BA%E5%9C%BA%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E4%BA%86%23) `259.7K 🔥` `NEW`
1. [甄嬛传温宜公主今天高考](https://s.weibo.com/weibo?q=%23%E7%94%84%E5%AC%9B%E4%BC%A0%E6%B8%A9%E5%AE%9C%E5%85%AC%E4%B8%BB%E4%BB%8A%E5%A4%A9%E9%AB%98%E8%80%83%23) `257.5K 🔥` `NEW`
1. [AG小俞断开连接](https://s.weibo.com/weibo?q=%23AG%E5%B0%8F%E4%BF%9E%E6%96%AD%E5%BC%80%E8%BF%9E%E6%8E%A5%23) `257.3K 🔥` `NEW`
1. [9岁男孩因吃夜市提拉米苏进ICU](https://s.weibo.com/weibo?q=%239%E5%B2%81%E7%94%B7%E5%AD%A9%E5%9B%A0%E5%90%83%E5%A4%9C%E5%B8%82%E6%8F%90%E6%8B%89%E7%B1%B3%E8%8B%8F%E8%BF%9BICU%23) `251.9K 🔥` `NEW`
1. [张月莫离剧宣](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E8%8E%AB%E7%A6%BB%E5%89%A7%E5%AE%A3%23) `249.9K 🔥` `NEW`
1. [黄仁勋跳女团舞](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E8%B7%B3%E5%A5%B3%E5%9B%A2%E8%88%9E%23) `246.5K 🔥` `NEW`
1. [985211警车快被摸包浆了](https://s.weibo.com/weibo?q=%23985211%E8%AD%A6%E8%BD%A6%E5%BF%AB%E8%A2%AB%E6%91%B8%E5%8C%85%E6%B5%86%E4%BA%86%23) `245.2K 🔥` `NEW`
1. [高考数学](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%95%B0%E5%AD%A6%23) `24.7M 🔥` `+2809%`
1. [张凌赫祝你高考大吉 (Zhang Linghe wishes you good luck in the college entrance examination)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%A5%9D%E4%BD%A0%E9%AB%98%E8%80%83%E5%A4%A7%E5%90%89%23) `590.6K 🔥` `+73%`
1. [马斯克称禁止中国客户投SpaceX](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E7%A7%B0%E7%A6%81%E6%AD%A2%E4%B8%AD%E5%9B%BD%E5%AE%A2%E6%88%B7%E6%8A%95SpaceX%23) `375.5K 🔥` `+26%`
1. [高考时间](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%97%B6%E9%97%B4%23) `262.6K 🔥` `+39%`
1. [时代少年团 高考作文 (Times Youth League College Entrance Examination Composition)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E9%AB%98%E8%80%83%E4%BD%9C%E6%96%87%23) `354.9K 🔥`
1. [导演组一直问李晨是什么意思 (The director team kept asking Li Chen what he meant)](https://s.weibo.com/weibo?q=%23%E5%AF%BC%E6%BC%94%E7%BB%84%E4%B8%80%E7%9B%B4%E9%97%AE%E6%9D%8E%E6%99%A8%E6%98%AF%E4%BB%80%E4%B9%88%E6%84%8F%E6%80%9D%23) `288.8K 🔥`
1. [李晨妹妹结婚](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%A8%E5%A6%B9%E5%A6%B9%E7%BB%93%E5%A9%9A%23) `281.1K 🔥`
1. [李现晒了女友视角的摄影照](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E6%99%92%E4%BA%86%E5%A5%B3%E5%8F%8B%E8%A7%86%E8%A7%92%E7%9A%84%E6%91%84%E5%BD%B1%E7%85%A7%23) `273.7K 🔥`
1. [卢昱晓点赞双人视频](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E7%82%B9%E8%B5%9E%E5%8F%8C%E4%BA%BA%E8%A7%86%E9%A2%91%23) `256.0K 🔥`
1. [鹿晗有鱼尾纹了](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E6%9C%89%E9%B1%BC%E5%B0%BE%E7%BA%B9%E4%BA%86%23) `254.5K 🔥`
1. [张杰自曝不适合做艺人](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E8%87%AA%E6%9B%9D%E4%B8%8D%E9%80%82%E5%90%88%E5%81%9A%E8%89%BA%E4%BA%BA%23) `251.3K 🔥`
1. [特朗普刚起床就发了AI视频](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%88%9A%E8%B5%B7%E5%BA%8A%E5%B0%B1%E5%8F%91%E4%BA%86AI%E8%A7%86%E9%A2%91%23) `247.7K 🔥`
1. [高考语文默写](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E8%AF%AD%E6%96%87%E9%BB%98%E5%86%99%23) `594.8K 🔥` `-55%`

Updated at 2026-06-07 17:51:19

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
