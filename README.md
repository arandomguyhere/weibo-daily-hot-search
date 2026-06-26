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

1. [何某低俗摆拍女子被关铁笼游街被刑拘 (He, a woman who posed for vulgar photos, was imprisoned in an iron cage and paraded through the streets, and was detained)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%9F%90%E4%BD%8E%E4%BF%97%E6%91%86%E6%8B%8D%E5%A5%B3%E5%AD%90%E8%A2%AB%E5%85%B3%E9%93%81%E7%AC%BC%E6%B8%B8%E8%A1%97%E8%A2%AB%E5%88%91%E6%8B%98%23) `797.1K 🔥` `NEW`
1. [一组数据看链博会的全球吸引力](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%BB%84%E6%95%B0%E6%8D%AE%E7%9C%8B%E9%93%BE%E5%8D%9A%E4%BC%9A%E7%9A%84%E5%85%A8%E7%90%83%E5%90%B8%E5%BC%95%E5%8A%9B%23) `774.4K 🔥` `NEW`
1. [恋与深空 3D崩卡](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%203D%E5%B4%A9%E5%8D%A1%23) `753.5K 🔥` `NEW`
1. [iPhone18Pro起售价或9999元](https://s.weibo.com/weibo?q=%23iPhone18Pro%E8%B5%B7%E5%94%AE%E4%BB%B7%E6%88%969999%E5%85%83%23) `717.4K 🔥` `NEW`
1. [看完四渡磁场都变强了](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%AE%8C%E5%9B%9B%E6%B8%A1%E7%A3%81%E5%9C%BA%E9%83%BD%E5%8F%98%E5%BC%BA%E4%BA%86%23) `717.3K 🔥` `NEW`
1. [张凌赫蛇戒](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%9B%87%E6%88%92%23) `704.1K 🔥` `NEW`
1. [三只羊卖线下课三天两晚1980](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%8F%AA%E7%BE%8A%E5%8D%96%E7%BA%BF%E4%B8%8B%E8%AF%BE%E4%B8%89%E5%A4%A9%E4%B8%A4%E6%99%9A1980%23) `600.8K 🔥` `NEW`
1. [恋与深空一意孤行](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E4%B8%80%E6%84%8F%E5%AD%A4%E8%A1%8C%23) `394.6K 🔥` `NEW`
1. [孙俪被被误以为穿塑形裤](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E8%A2%AB%E8%A2%AB%E8%AF%AF%E4%BB%A5%E4%B8%BA%E7%A9%BF%E5%A1%91%E5%BD%A2%E8%A3%A4%23) `386.1K 🔥` `NEW`
1. [关晓彤戴负重手环](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E6%88%B4%E8%B4%9F%E9%87%8D%E6%89%8B%E7%8E%AF%23) `381.9K 🔥` `NEW`
1. [没认出这是马苏 (Didn't recognize this was Ma Su)](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E8%AE%A4%E5%87%BA%E8%BF%99%E6%98%AF%E9%A9%AC%E8%8B%8F%23) `373.6K 🔥` `NEW`
1. [终于有人把水的口感形容出来了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%9C%89%E4%BA%BA%E6%8A%8A%E6%B0%B4%E7%9A%84%E5%8F%A3%E6%84%9F%E5%BD%A2%E5%AE%B9%E5%87%BA%E6%9D%A5%E4%BA%86%23) `367.6K 🔥` `NEW`
1. [短剧男主自曝因AI失业已返乡卖菜](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E7%94%B7%E4%B8%BB%E8%87%AA%E6%9B%9D%E5%9B%A0AI%E5%A4%B1%E4%B8%9A%E5%B7%B2%E8%BF%94%E4%B9%A1%E5%8D%96%E8%8F%9C%23) `360.9K 🔥` `NEW`
1. [郑在玹ins澄清](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%9C%A8%E7%8E%B9ins%E6%BE%84%E6%B8%85%23) `359.3K 🔥` `NEW`
1. [说销户后话费套餐降了100元](https://s.weibo.com/weibo?q=%23%E8%AF%B4%E9%94%80%E6%88%B7%E5%90%8E%E8%AF%9D%E8%B4%B9%E5%A5%97%E9%A4%90%E9%99%8D%E4%BA%86100%E5%85%83%23) `346.1K 🔥` `NEW`
1. [网传贾玲同步拍摄热辣滚烫转念花开](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E8%B4%BE%E7%8E%B2%E5%90%8C%E6%AD%A5%E6%8B%8D%E6%91%84%E7%83%AD%E8%BE%A3%E6%BB%9A%E7%83%AB%E8%BD%AC%E5%BF%B5%E8%8A%B1%E5%BC%80%23) `342.9K 🔥` `NEW`
1. [苹果店员也被涨价整懵了](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%BA%97%E5%91%98%E4%B9%9F%E8%A2%AB%E6%B6%A8%E4%BB%B7%E6%95%B4%E6%87%B5%E4%BA%86%23) `335.9K 🔥` `NEW`
1. [日本球员说下场赢巴西](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%90%83%E5%91%98%E8%AF%B4%E4%B8%8B%E5%9C%BA%E8%B5%A2%E5%B7%B4%E8%A5%BF%23) `297.5K 🔥` `NEW`
1. [高考691分广州学霸忍痛拒绝清北](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83691%E5%88%86%E5%B9%BF%E5%B7%9E%E5%AD%A6%E9%9C%B8%E5%BF%8D%E7%97%9B%E6%8B%92%E7%BB%9D%E6%B8%85%E5%8C%97%23) `294.3K 🔥` `NEW`
1. [一年级监考只需看住试卷](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%B9%B4%E7%BA%A7%E7%9B%91%E8%80%83%E5%8F%AA%E9%9C%80%E7%9C%8B%E4%BD%8F%E8%AF%95%E5%8D%B7%23) `291.6K 🔥` `NEW`
1. [张婧仪鞠婧祎jingyi对打 (Zhang Jingyi and Ju Jingyi fight)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E9%9E%A0%E5%A9%A7%E7%A5%8Ejingyi%E5%AF%B9%E6%89%93%23) `290.1K 🔥` `NEW`
1. [29岁女子生4胞胎婆婆哈哈笑](https://s.weibo.com/weibo?q=%2329%E5%B2%81%E5%A5%B3%E5%AD%90%E7%94%9F4%E8%83%9E%E8%83%8E%E5%A9%86%E5%A9%86%E5%93%88%E5%93%88%E7%AC%91%23) `289.1K 🔥` `NEW`
1. [以后被领导骂了就这么回](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%90%8E%E8%A2%AB%E9%A2%86%E5%AF%BC%E9%AA%82%E4%BA%86%E5%B0%B1%E8%BF%99%E4%B9%88%E5%9B%9E%23) `284.8K 🔥` `NEW`
1. [爸爸一躺下小孩面相变了](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E4%B8%80%E8%BA%BA%E4%B8%8B%E5%B0%8F%E5%AD%A9%E9%9D%A2%E7%9B%B8%E5%8F%98%E4%BA%86%23) `283.7K 🔥` `NEW`
1. [鹿晗gapday音乐节贵阳站官宣](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97gapday%E9%9F%B3%E4%B9%90%E8%8A%82%E8%B4%B5%E9%98%B3%E7%AB%99%E5%AE%98%E5%AE%A3%23) `283.3K 🔥` `NEW`
1. [王俊凯拒绝抹零](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%8B%92%E7%BB%9D%E6%8A%B9%E9%9B%B6%23) `280.3K 🔥` `NEW`
1. [有拼多多后发现村里嬢嬢真会穿](https://s.weibo.com/weibo?q=%23%E6%9C%89%E6%8B%BC%E5%A4%9A%E5%A4%9A%E5%90%8E%E5%8F%91%E7%8E%B0%E6%9D%91%E9%87%8C%E5%AC%A2%E5%AC%A2%E7%9C%9F%E4%BC%9A%E7%A9%BF%23) `263.0K 🔥` `NEW`
1. [孙莉黄磊二女儿多妹颜值](https://s.weibo.com/weibo?q=%23%E5%AD%99%E8%8E%89%E9%BB%84%E7%A3%8A%E4%BA%8C%E5%A5%B3%E5%84%BF%E5%A4%9A%E5%A6%B9%E9%A2%9C%E5%80%BC%23) `263.0K 🔥` `NEW`
1. [土耳其 赢球也出局](https://s.weibo.com/weibo?q=%23%E5%9C%9F%E8%80%B3%E5%85%B6%20%E8%B5%A2%E7%90%83%E4%B9%9F%E5%87%BA%E5%B1%80%23) `263.0K 🔥` `NEW`
1. [闫妮白玉兰颁奖](https://s.weibo.com/weibo?q=%23%E9%97%AB%E5%A6%AE%E7%99%BD%E7%8E%89%E5%85%B0%E9%A2%81%E5%A5%96%23) `263.0K 🔥` `NEW`
1. [猫粮制假主犯称猫又吃不出来 (Cat food counterfeiter claims cats can’t eat it)](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E7%B2%AE%E5%88%B6%E5%81%87%E4%B8%BB%E7%8A%AF%E7%A7%B0%E7%8C%AB%E5%8F%88%E5%90%83%E4%B8%8D%E5%87%BA%E6%9D%A5%23) `263.0K 🔥` `NEW`
1. [白玉兰五位准视后合影](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E4%BA%94%E4%BD%8D%E5%87%86%E8%A7%86%E5%90%8E%E5%90%88%E5%BD%B1%23) `263.0K 🔥` `NEW`
1. [法国高温教育部长拒绝办公室装空调](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E9%AB%98%E6%B8%A9%E6%95%99%E8%82%B2%E9%83%A8%E9%95%BF%E6%8B%92%E7%BB%9D%E5%8A%9E%E5%85%AC%E5%AE%A4%E8%A3%85%E7%A9%BA%E8%B0%83%23) `263.0K 🔥` `NEW`
1. [田曦薇 不是韩女降临是中女降临](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%20%E4%B8%8D%E6%98%AF%E9%9F%A9%E5%A5%B3%E9%99%8D%E4%B8%B4%E6%98%AF%E4%B8%AD%E5%A5%B3%E9%99%8D%E4%B8%B4%23) `263.0K 🔥` `NEW`
1. [想买iPad的消费者考虑再等等](https://s.weibo.com/weibo?q=%23%E6%83%B3%E4%B9%B0iPad%E7%9A%84%E6%B6%88%E8%B4%B9%E8%80%85%E8%80%83%E8%99%91%E5%86%8D%E7%AD%89%E7%AD%89%23) `263.0K 🔥` `NEW`
1. [水果姐以前NONO现在YOYO](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E6%9E%9C%E5%A7%90%E4%BB%A5%E5%89%8DNONO%E7%8E%B0%E5%9C%A8YOYO%23) `263.0K 🔥` `NEW`
1. [欧阳娜娜参加欧阳娣娣毕业典礼](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%E5%8F%82%E5%8A%A0%E6%AC%A7%E9%98%B3%E5%A8%A3%E5%A8%A3%E6%AF%95%E4%B8%9A%E5%85%B8%E7%A4%BC%23) `263.0K 🔥` `NEW`
1. [韩媒集体慌了](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%AA%92%E9%9B%86%E4%BD%93%E6%85%8C%E4%BA%86%23) `263.0K 🔥` `NEW`
1. [当真C罗看到假C罗](https://s.weibo.com/weibo?q=%23%E5%BD%93%E7%9C%9FC%E7%BD%97%E7%9C%8B%E5%88%B0%E5%81%87C%E7%BD%97%23) `1.1M 🔥` `+36%`
1. [韩国遭三连暴击](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E9%81%AD%E4%B8%89%E8%BF%9E%E6%9A%B4%E5%87%BB%23) `390.4K 🔥` `-22%`
1. [黄金跌到不敢买了 (Gold has fallen so low that I dare not buy it)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%B7%8C%E5%88%B0%E4%B8%8D%E6%95%A2%E4%B9%B0%E4%BA%86%23) `377.3K 🔥` `-33%`
1. [恋与深空 (Love and deep space)](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `294.8K 🔥` `-47%`
1. [田曦薇也逃不过韩媒的死亡闪光灯](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E4%B9%9F%E9%80%83%E4%B8%8D%E8%BF%87%E9%9F%A9%E5%AA%92%E7%9A%84%E6%AD%BB%E4%BA%A1%E9%97%AA%E5%85%89%E7%81%AF%23) `293.5K 🔥` `-36%`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `287.9K 🔥` `-48%`
1. [韩国日本网友对骂](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%97%A5%E6%9C%AC%E7%BD%91%E5%8F%8B%E5%AF%B9%E9%AA%82%23) `286.0K 🔥` `-65%`
1. [原来这就是脑雾啊](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E5%B0%B1%E6%98%AF%E8%84%91%E9%9B%BE%E5%95%8A%23) `265.0K 🔥` `-53%`
1. [警方通报多人将两女子关铁笼游街](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A4%9A%E4%BA%BA%E5%B0%86%E4%B8%A4%E5%A5%B3%E5%AD%90%E5%85%B3%E9%93%81%E7%AC%BC%E6%B8%B8%E8%A1%97%23) `263.1K 🔥` `-44%`
1. [偶遇Angelababy小海绵在港迪吃饭](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87Angelababy%E5%B0%8F%E6%B5%B7%E7%BB%B5%E5%9C%A8%E6%B8%AF%E8%BF%AA%E5%90%83%E9%A5%AD%23) `263.0K 🔥` `-49%`
1. [TF家族 运动会](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%20%E8%BF%90%E5%8A%A8%E4%BC%9A%23) `263.0K 🔥` `-52%`

Updated at 2026-06-26 16:22:49

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
