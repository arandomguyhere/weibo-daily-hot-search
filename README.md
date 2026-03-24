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

1. [梅姨在广州三元里落网为不实消息 (The news that Aunt Mei was arrested in Sanyuanli, Guangzhou is false)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E5%9C%A8%E5%B9%BF%E5%B7%9E%E4%B8%89%E5%85%83%E9%87%8C%E8%90%BD%E7%BD%91%E4%B8%BA%E4%B8%8D%E5%AE%9E%E6%B6%88%E6%81%AF%23) `5.4M 🔥` `NEW`
1. [齐旻的死是被人下了十年的慢性毒](https://s.weibo.com/weibo?q=%23%E9%BD%90%E6%97%BB%E7%9A%84%E6%AD%BB%E6%98%AF%E8%A2%AB%E4%BA%BA%E4%B8%8B%E4%BA%86%E5%8D%81%E5%B9%B4%E7%9A%84%E6%85%A2%E6%80%A7%E6%AF%92%23) `1.0M 🔥` `NEW`
1. [林诗栋澳门世界杯退赛](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E6%BE%B3%E9%97%A8%E4%B8%96%E7%95%8C%E6%9D%AF%E9%80%80%E8%B5%9B%23) `282.9K 🔥` `NEW`
1. [张雪峰相关账号停止直播](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E7%9B%B8%E5%85%B3%E8%B4%A6%E5%8F%B7%E5%81%9C%E6%AD%A2%E7%9B%B4%E6%92%AD%23) `252.2K 🔥` `NEW`
1. [管泽元升级当爸](https://s.weibo.com/weibo?q=%23%E7%AE%A1%E6%B3%BD%E5%85%83%E5%8D%87%E7%BA%A7%E5%BD%93%E7%88%B8%23) `251.8K 🔥` `NEW`
1. [公司称不方便告知张雪峰是否在公司](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E7%A7%B0%E4%B8%8D%E6%96%B9%E4%BE%BF%E5%91%8A%E7%9F%A5%E5%BC%A0%E9%9B%AA%E5%B3%B0%E6%98%AF%E5%90%A6%E5%9C%A8%E5%85%AC%E5%8F%B8%23) `198.8K 🔥` `NEW`
1. [睡觉是延长心脏寿命最好的方式](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E8%A7%89%E6%98%AF%E5%BB%B6%E9%95%BF%E5%BF%83%E8%84%8F%E5%AF%BF%E5%91%BD%E6%9C%80%E5%A5%BD%E7%9A%84%E6%96%B9%E5%BC%8F%23) `192.1K 🔥` `NEW`
1. [家暴离婚可申请民事支持起诉](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E6%9A%B4%E7%A6%BB%E5%A9%9A%E5%8F%AF%E7%94%B3%E8%AF%B7%E6%B0%91%E4%BA%8B%E6%94%AF%E6%8C%81%E8%B5%B7%E8%AF%89%23) `190.1K 🔥` `NEW`
1. [崇礼偶遇王一博滑雪](https://s.weibo.com/weibo?q=%23%E5%B4%87%E7%A4%BC%E5%81%B6%E9%81%87%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%BB%91%E9%9B%AA%23) `188.4K 🔥` `NEW`
1. [阮经天和女友十指紧扣逛街](https://s.weibo.com/weibo?q=%23%E9%98%AE%E7%BB%8F%E5%A4%A9%E5%92%8C%E5%A5%B3%E5%8F%8B%E5%8D%81%E6%8C%87%E7%B4%A7%E6%89%A3%E9%80%9B%E8%A1%97%23) `170.2K 🔥` `NEW`
1. [逐玉 (Zhuyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `149.9K 🔥` `NEW`
1. [曼谷偶遇戚薇李承铉](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E8%B0%B7%E5%81%B6%E9%81%87%E6%88%9A%E8%96%87%E6%9D%8E%E6%89%BF%E9%93%89%23) `138.5K 🔥` `NEW`
1. [热巴白日提灯眼技](https://s.weibo.com/weibo?q=%23%E7%83%AD%E5%B7%B4%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E7%9C%BC%E6%8A%80%23) `138.3K 🔥` `NEW`
1. [穿长裙摔倒孕妇提出8000元赔偿被拒](https://s.weibo.com/weibo?q=%23%E7%A9%BF%E9%95%BF%E8%A3%99%E6%91%94%E5%80%92%E5%AD%95%E5%A6%87%E6%8F%90%E5%87%BA8000%E5%85%83%E8%B5%94%E5%81%BF%E8%A2%AB%E6%8B%92%23) `138.3K 🔥` `NEW`
1. [第一次在车身上看到了性感](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%9C%A8%E8%BD%A6%E8%BA%AB%E4%B8%8A%E7%9C%8B%E5%88%B0%E4%BA%86%E6%80%A7%E6%84%9F%23) `138.3K 🔥` `NEW`
1. [宋雨琦线下活动疑似不舒服](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E7%BA%BF%E4%B8%8B%E6%B4%BB%E5%8A%A8%E7%96%91%E4%BC%BC%E4%B8%8D%E8%88%92%E6%9C%8D%23) `134.7K 🔥` `NEW`
1. [宋威龙说男人最好的医美是医美](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E8%AF%B4%E7%94%B7%E4%BA%BA%E6%9C%80%E5%A5%BD%E7%9A%84%E5%8C%BB%E7%BE%8E%E6%98%AF%E5%8C%BB%E7%BE%8E%23) `130.7K 🔥` `NEW`
1. [地铁吐血女孩已到华西治疗](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E9%93%81%E5%90%90%E8%A1%80%E5%A5%B3%E5%AD%A9%E5%B7%B2%E5%88%B0%E5%8D%8E%E8%A5%BF%E6%B2%BB%E7%96%97%23) `113.6K 🔥` `NEW`
1. [周杰伦新歌口碑](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%B0%E6%AD%8C%E5%8F%A3%E7%A2%91%23) `112.4K 🔥` `NEW`
1. [叠纸心意](https://s.weibo.com/weibo?q=%23%E5%8F%A0%E7%BA%B8%E5%BF%83%E6%84%8F%23) `110.1K 🔥` `NEW`
1. [孔雪儿新商务 (Kong Xueer's new business)](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E6%96%B0%E5%95%86%E5%8A%A1%23) `103.7K 🔥` `NEW`
1. [小时候不理解的事长大真香了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%97%B6%E5%80%99%E4%B8%8D%E7%90%86%E8%A7%A3%E7%9A%84%E4%BA%8B%E9%95%BF%E5%A4%A7%E7%9C%9F%E9%A6%99%E4%BA%86%23) `97.8K 🔥` `NEW`
1. [周杰伦新专辑定价](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%B0%E4%B8%93%E8%BE%91%E5%AE%9A%E4%BB%B7%23) `97.1K 🔥` `NEW`
1. [文淇 年轻女演员演主角等于没票房](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%B7%87%20%E5%B9%B4%E8%BD%BB%E5%A5%B3%E6%BC%94%E5%91%98%E6%BC%94%E4%B8%BB%E8%A7%92%E7%AD%89%E4%BA%8E%E6%B2%A1%E7%A5%A8%E6%88%BF%23) `506.7K 🔥` `+125%`
1. [法医刘良交出尸检真相后录临终视频](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%8C%BB%E5%88%98%E8%89%AF%E4%BA%A4%E5%87%BA%E5%B0%B8%E6%A3%80%E7%9C%9F%E7%9B%B8%E5%90%8E%E5%BD%95%E4%B8%B4%E7%BB%88%E8%A7%86%E9%A2%91%23) `253.9K 🔥` `+93%`
1. [孔雪儿逐玉红利](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E9%80%90%E7%8E%89%E7%BA%A2%E5%88%A9%23) `251.3K 🔥` `+24%`
1. [张雪峰年龄](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E5%B9%B4%E9%BE%84%23) `246.8K 🔥` `+23%`
1. [邓凯 鲁迅美院](https://s.weibo.com/weibo?q=%23%E9%82%93%E5%87%AF%20%E9%B2%81%E8%BF%85%E7%BE%8E%E9%99%A2%23) `233.5K 🔥` `+24%`
1. [性格决定命运这句话永远都成立](https://s.weibo.com/weibo?q=%23%E6%80%A7%E6%A0%BC%E5%86%B3%E5%AE%9A%E5%91%BD%E8%BF%90%E8%BF%99%E5%8F%A5%E8%AF%9D%E6%B0%B8%E8%BF%9C%E9%83%BD%E6%88%90%E7%AB%8B%23) `149.6K 🔥` `+29%`
1. [4岁女童就诊177次患者是母亲](https://s.weibo.com/weibo?q=%234%E5%B2%81%E5%A5%B3%E7%AB%A5%E5%B0%B1%E8%AF%8A177%E6%AC%A1%E6%82%A3%E8%80%85%E6%98%AF%E6%AF%8D%E4%BA%B2%23) `367.7K 🔥`
1. [以色列被打穿了 (Israel is penetrated)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E8%A2%AB%E6%89%93%E7%A9%BF%E4%BA%86%23) `358.8K 🔥`
1. [草莓下火锅 (Strawberry hot pot)](https://s.weibo.com/weibo?q=%23%E8%8D%89%E8%8E%93%E4%B8%8B%E7%81%AB%E9%94%85%23) `254.7K 🔥`
1. [张凌赫陈哲远将军造型对比](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%99%88%E5%93%B2%E8%BF%9C%E5%B0%86%E5%86%9B%E9%80%A0%E5%9E%8B%E5%AF%B9%E6%AF%94%23) `252.9K 🔥`
1. [日本 (Japan)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%23) `222.2K 🔥`
1. [张雪峰社媒仍在更新](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E7%A4%BE%E5%AA%92%E4%BB%8D%E5%9C%A8%E6%9B%B4%E6%96%B0%23) `211.3K 🔥`
1. [张凌赫知道热巴白宇退出开推的反应](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9F%A5%E9%81%93%E7%83%AD%E5%B7%B4%E7%99%BD%E5%AE%87%E9%80%80%E5%87%BA%E5%BC%80%E6%8E%A8%E7%9A%84%E5%8F%8D%E5%BA%94%23) `208.6K 🔥`
1. [外交部回应日方拟将中日关系降级](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E5%9B%9E%E5%BA%94%E6%97%A5%E6%96%B9%E6%8B%9F%E5%B0%86%E4%B8%AD%E6%97%A5%E5%85%B3%E7%B3%BB%E9%99%8D%E7%BA%A7%23) `198.9K 🔥`
1. [恭喜你发明了劳务派遣](https://s.weibo.com/weibo?q=%23%E6%81%AD%E5%96%9C%E4%BD%A0%E5%8F%91%E6%98%8E%E4%BA%86%E5%8A%B3%E5%8A%A1%E6%B4%BE%E9%81%A3%23) `192.3K 🔥`
1. [张雪峰近日在朋友圈打卡跑步7公里](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E8%BF%91%E6%97%A5%E5%9C%A8%E6%9C%8B%E5%8F%8B%E5%9C%88%E6%89%93%E5%8D%A1%E8%B7%91%E6%AD%A57%E5%85%AC%E9%87%8C%23) `189.6K 🔥`
1. [地铁吐血女孩一天打三份工赚三四百](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E9%93%81%E5%90%90%E8%A1%80%E5%A5%B3%E5%AD%A9%E4%B8%80%E5%A4%A9%E6%89%93%E4%B8%89%E4%BB%BD%E5%B7%A5%E8%B5%9A%E4%B8%89%E5%9B%9B%E7%99%BE%23) `168.8K 🔥`
1. [亚朵酒店中文标识让人看不懂了](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E6%9C%B5%E9%85%92%E5%BA%97%E4%B8%AD%E6%96%87%E6%A0%87%E8%AF%86%E8%AE%A9%E4%BA%BA%E7%9C%8B%E4%B8%8D%E6%87%82%E4%BA%86%23) `161.9K 🔥`
1. [关晓彤剧组生菜减脂餐](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%89%A7%E7%BB%84%E7%94%9F%E8%8F%9C%E5%87%8F%E8%84%82%E9%A4%90%23) `154.4K 🔥`
1. [蜜雪35岁新CEO (Michelle, 35-year-old new CEO)](https://s.weibo.com/weibo?q=%23%E8%9C%9C%E9%9B%AA35%E5%B2%81%E6%96%B0CEO%23) `138.7K 🔥`
1. [王俊凯 有人在吗WJK在 (Wang Junkai, is anyone here? WJK is here?)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%20%E6%9C%89%E4%BA%BA%E5%9C%A8%E5%90%97WJK%E5%9C%A8%23) `103.9K 🔥`
1. [张雪峰 (Zhang Xuefeng)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%23) `12.9M 🔥` `-31%`
1. [53岁独身女子去世留下600万遗产](https://s.weibo.com/weibo?q=%2353%E5%B2%81%E7%8B%AC%E8%BA%AB%E5%A5%B3%E5%AD%90%E5%8E%BB%E4%B8%96%E7%95%99%E4%B8%8B600%E4%B8%87%E9%81%97%E4%BA%A7%23) `766.2K 🔥` `-74%`
1. [七彩云南万千气象 (Colorful weather in Yunnan)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%BD%A9%E4%BA%91%E5%8D%97%E4%B8%87%E5%8D%83%E6%B0%94%E8%B1%A1%23) `579.9K 🔥` `-75%`
1. [中方要求日方立即彻查严惩](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E8%A6%81%E6%B1%82%E6%97%A5%E6%96%B9%E7%AB%8B%E5%8D%B3%E5%BD%BB%E6%9F%A5%E4%B8%A5%E6%83%A9%23) `351.5K 🔥` `-33%`
1. [助理回应张雪峰心脏骤停抢救传闻](https://s.weibo.com/weibo?q=%23%E5%8A%A9%E7%90%86%E5%9B%9E%E5%BA%94%E5%BC%A0%E9%9B%AA%E5%B3%B0%E5%BF%83%E8%84%8F%E9%AA%A4%E5%81%9C%E6%8A%A2%E6%95%91%E4%BC%A0%E9%97%BB%23) `254.1K 🔥` `-97%`
1. [难听 (ugly)](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E5%90%AC%23) `149.5K 🔥` `-21%`

Updated at 2026-03-24 20:05:14

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
