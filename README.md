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

1. [香蜜最后一帧原来是家业 (The last frame of Xiangmi turns out to be a family business)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E8%9C%9C%E6%9C%80%E5%90%8E%E4%B8%80%E5%B8%A7%E5%8E%9F%E6%9D%A5%E6%98%AF%E5%AE%B6%E4%B8%9A%23) `873.4K 🔥` `NEW`
1. [以自强赴荣光](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%87%AA%E5%BC%BA%E8%B5%B4%E8%8D%A3%E5%85%89%23) `677.5K 🔥` `NEW`
1. [摄影师称摆拍女孩确为盲人](https://s.weibo.com/weibo?q=%23%E6%91%84%E5%BD%B1%E5%B8%88%E7%A7%B0%E6%91%86%E6%8B%8D%E5%A5%B3%E5%AD%A9%E7%A1%AE%E4%B8%BA%E7%9B%B2%E4%BA%BA%23) `637.7K 🔥` `NEW`
1. [台舆论称特朗普不许台独视美为靠山](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E8%88%86%E8%AE%BA%E7%A7%B0%E7%89%B9%E6%9C%97%E6%99%AE%E4%B8%8D%E8%AE%B8%E5%8F%B0%E7%8B%AC%E8%A7%86%E7%BE%8E%E4%B8%BA%E9%9D%A0%E5%B1%B1%23) `622.9K 🔥` `NEW`
1. [让妈妈丢人的事顺手就做了](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E5%A6%88%E5%A6%88%E4%B8%A2%E4%BA%BA%E7%9A%84%E4%BA%8B%E9%A1%BA%E6%89%8B%E5%B0%B1%E5%81%9A%E4%BA%86%23) `539.8K 🔥` `NEW`
1. [分析师称苹果降价是阳谋](https://s.weibo.com/weibo?q=%23%E5%88%86%E6%9E%90%E5%B8%88%E7%A7%B0%E8%8B%B9%E6%9E%9C%E9%99%8D%E4%BB%B7%E6%98%AF%E9%98%B3%E8%B0%8B%23) `398.2K 🔥` `NEW`
1. [孩子被抢走后姥姥暴瘦30斤](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E8%A2%AB%E6%8A%A2%E8%B5%B0%E5%90%8E%E5%A7%A5%E5%A7%A5%E6%9A%B4%E7%98%A630%E6%96%A4%23) `365.4K 🔥` `NEW`
1. [丝芭给黄婷婷剧组发警告函](https://s.weibo.com/weibo?q=%23%E4%B8%9D%E8%8A%AD%E7%BB%99%E9%BB%84%E5%A9%B7%E5%A9%B7%E5%89%A7%E7%BB%84%E5%8F%91%E8%AD%A6%E5%91%8A%E5%87%BD%23) `355.5K 🔥` `NEW`
1. [疑似张元英抢金智媛C位](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E5%BC%A0%E5%85%83%E8%8B%B1%E6%8A%A2%E9%87%91%E6%99%BA%E5%AA%9BC%E4%BD%8D%23) `353.6K 🔥` `NEW`
1. [黄仁勋指甲](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E6%8C%87%E7%94%B2%23) `351.1K 🔥` `NEW`
1. [千户苗寨偶遇Angelababy (Encountering Angelababy in Qianhu Miao Village)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E6%88%B7%E8%8B%97%E5%AF%A8%E5%81%B6%E9%81%87Angelababy%23) `350.1K 🔥` `NEW`
1. [网友车内发生性关系后男方被告强奸](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E8%BD%A6%E5%86%85%E5%8F%91%E7%94%9F%E6%80%A7%E5%85%B3%E7%B3%BB%E5%90%8E%E7%94%B7%E6%96%B9%E8%A2%AB%E5%91%8A%E5%BC%BA%E5%A5%B8%23) `346.9K 🔥` `NEW`
1. [白鹿上车前突然跳了段舞](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%B8%8A%E8%BD%A6%E5%89%8D%E7%AA%81%E7%84%B6%E8%B7%B3%E4%BA%86%E6%AE%B5%E8%88%9E%23) `345.5K 🔥` `NEW`
1. [给阿嬷的情书南枝淑柔未公开片段](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E5%8D%97%E6%9E%9D%E6%B7%91%E6%9F%94%E6%9C%AA%E5%85%AC%E5%BC%80%E7%89%87%E6%AE%B5%23) `327.9K 🔥` `NEW`
1. [樊振东赛后纸袋装球拍](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%B5%9B%E5%90%8E%E7%BA%B8%E8%A2%8B%E8%A3%85%E7%90%83%E6%8B%8D%23) `301.7K 🔥` `NEW`
1. [官方通报上海一在建大楼外架歪了](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E4%B8%8A%E6%B5%B7%E4%B8%80%E5%9C%A8%E5%BB%BA%E5%A4%A7%E6%A5%BC%E5%A4%96%E6%9E%B6%E6%AD%AA%E4%BA%86%23) `292.4K 🔥` `NEW`
1. [陈伟霆钟楚曦 荔湾广场](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E9%92%9F%E6%A5%9A%E6%9B%A6%20%E8%8D%94%E6%B9%BE%E5%B9%BF%E5%9C%BA%23) `288.2K 🔥` `NEW`
1. [国民党副主席回应特朗普涉台表态](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E6%B0%91%E5%85%9A%E5%89%AF%E4%B8%BB%E5%B8%AD%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE%E6%B6%89%E5%8F%B0%E8%A1%A8%E6%80%81%23) `276.3K 🔥` `NEW`
1. [重庆巫溪通报救护车捎带化肥](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%B7%AB%E6%BA%AA%E9%80%9A%E6%8A%A5%E6%95%91%E6%8A%A4%E8%BD%A6%E6%8D%8E%E5%B8%A6%E5%8C%96%E8%82%A5%23) `261.2K 🔥` `NEW`
1. [广东暴雨天蟑螂成群出动](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E6%9A%B4%E9%9B%A8%E5%A4%A9%E8%9F%91%E8%9E%82%E6%88%90%E7%BE%A4%E5%87%BA%E5%8A%A8%23) `252.9K 🔥` `NEW`
1. [高皮质醇会让你少活7年 (High cortisol can shave 7 years off your life)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E7%9A%AE%E8%B4%A8%E9%86%87%E4%BC%9A%E8%AE%A9%E4%BD%A0%E5%B0%91%E6%B4%BB7%E5%B9%B4%23) `251.2K 🔥` `NEW`
1. [狄莺一边哭一边开直播骂网友](https://s.weibo.com/weibo?q=%23%E7%8B%84%E8%8E%BA%E4%B8%80%E8%BE%B9%E5%93%AD%E4%B8%80%E8%BE%B9%E5%BC%80%E7%9B%B4%E6%92%AD%E9%AA%82%E7%BD%91%E5%8F%8B%23) `248.4K 🔥` `NEW`
1. [小米YU7全系新增火山灰车漆](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3YU7%E5%85%A8%E7%B3%BB%E6%96%B0%E5%A2%9E%E7%81%AB%E5%B1%B1%E7%81%B0%E8%BD%A6%E6%BC%86%23) `245.4K 🔥` `NEW`
1. [Gucci大秀](https://s.weibo.com/weibo?q=%23Gucci%E5%A4%A7%E7%A7%80%23) `239.7K 🔥` `NEW`
1. [张雪机车垫底车手曾获7次冠军](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%9E%AB%E5%BA%95%E8%BD%A6%E6%89%8B%E6%9B%BE%E8%8E%B77%E6%AC%A1%E5%86%A0%E5%86%9B%23) `227.9K 🔥` `NEW`
1. [榴莲等等党赢了](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E7%AD%89%E7%AD%89%E5%85%9A%E8%B5%A2%E4%BA%86%23) `227.6K 🔥` `NEW`
1. [孙安佐被抓](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%AE%89%E4%BD%90%E8%A2%AB%E6%8A%93%23) `227.6K 🔥` `NEW`
1. [家业开播](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%E5%BC%80%E6%92%AD%23) `221.7K 🔥` `NEW`
1. [丈夫蒙面抢走儿子女子称可以不离婚](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E8%92%99%E9%9D%A2%E6%8A%A2%E8%B5%B0%E5%84%BF%E5%AD%90%E5%A5%B3%E5%AD%90%E7%A7%B0%E5%8F%AF%E4%BB%A5%E4%B8%8D%E7%A6%BB%E5%A9%9A%23) `208.2K 🔥` `NEW`
1. [金鹰奖投票](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%8A%95%E7%A5%A8%23) `203.2K 🔥` `NEW`
1. [男子新婚不久确诊胃癌晚期提离婚 (Newlywed man diagnosed with late-stage gastric cancer files for divorce)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%96%B0%E5%A9%9A%E4%B8%8D%E4%B9%85%E7%A1%AE%E8%AF%8A%E8%83%83%E7%99%8C%E6%99%9A%E6%9C%9F%E6%8F%90%E7%A6%BB%E5%A9%9A%23) `179.5K 🔥` `NEW`
1. [刘浩存演技](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E6%BC%94%E6%8A%80%23) `178.1K 🔥` `NEW`
1. [泰国火车与巴士相撞已致8死32伤](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E7%81%AB%E8%BD%A6%E4%B8%8E%E5%B7%B4%E5%A3%AB%E7%9B%B8%E6%92%9E%E5%B7%B2%E8%87%B48%E6%AD%BB32%E4%BC%A4%23) `166.9K 🔥` `NEW`
1. [上一个骗婚的还是盛墨兰](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E4%B8%80%E4%B8%AA%E9%AA%97%E5%A9%9A%E7%9A%84%E8%BF%98%E6%98%AF%E7%9B%9B%E5%A2%A8%E5%85%B0%23) `165.8K 🔥` `NEW`
1. [金鹰奖预测](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E9%A2%84%E6%B5%8B%23) `165.0K 🔥` `NEW`
1. [辞职员工曝光盲人博主运营内幕](https://s.weibo.com/weibo?q=%23%E8%BE%9E%E8%81%8C%E5%91%98%E5%B7%A5%E6%9B%9D%E5%85%89%E7%9B%B2%E4%BA%BA%E5%8D%9A%E4%B8%BB%E8%BF%90%E8%90%A5%E5%86%85%E5%B9%95%23) `155.7K 🔥` `NEW`
1. [叔侄将溺亡男子藏家不涉嫌侮辱尸体罪](https://s.weibo.com/weibo?q=%23%E5%8F%94%E4%BE%84%E5%B0%86%E6%BA%BA%E4%BA%A1%E7%94%B7%E5%AD%90%E8%97%8F%E5%AE%B6%E4%B8%8D%E6%B6%89%E5%AB%8C%E4%BE%AE%E8%BE%B1%E5%B0%B8%E4%BD%93%E7%BD%AA%23) `150.2K 🔥` `NEW`
1. [作业本包的糖醋排骨](https://s.weibo.com/weibo?q=%23%E4%BD%9C%E4%B8%9A%E6%9C%AC%E5%8C%85%E7%9A%84%E7%B3%96%E9%86%8B%E6%8E%92%E9%AA%A8%23) `149.4K 🔥` `NEW`
1. [万千惠情商](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%83%A0%E6%83%85%E5%95%86%23) `141.8K 🔥` `NEW`
1. [张凌赫纽约看秀直拍](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%BA%BD%E7%BA%A6%E7%9C%8B%E7%A7%80%E7%9B%B4%E6%8B%8D%23) `139.1K 🔥` `NEW`
1. [迪丽热巴双剧入围电视金鹰奖 (Dilraba's double drama shortlisted for TV Golden Eagle Awards)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%8F%8C%E5%89%A7%E5%85%A5%E5%9B%B4%E7%94%B5%E8%A7%86%E9%87%91%E9%B9%B0%E5%A5%96%23) `136.4K 🔥` `NEW`
1. [C罗状态](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E7%8A%B6%E6%80%81%23) `126.7K 🔥` `NEW`
1. [苹果华为小米集体降价](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%8D%8E%E4%B8%BA%E5%B0%8F%E7%B1%B3%E9%9B%86%E4%BD%93%E9%99%8D%E4%BB%B7%23) `584.0K 🔥` `+271%`
1. [狗狗啃了半年的抽屉还挺有设计感](https://s.weibo.com/weibo?q=%23%E7%8B%97%E7%8B%97%E5%95%83%E4%BA%86%E5%8D%8A%E5%B9%B4%E7%9A%84%E6%8A%BD%E5%B1%89%E8%BF%98%E6%8C%BA%E6%9C%89%E8%AE%BE%E8%AE%A1%E6%84%9F%23) `343.7K 🔥` `+104%`
1. [日本担心中美关系稳定自己被晾在一边](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%8B%85%E5%BF%83%E4%B8%AD%E7%BE%8E%E5%85%B3%E7%B3%BB%E7%A8%B3%E5%AE%9A%E8%87%AA%E5%B7%B1%E8%A2%AB%E6%99%BE%E5%9C%A8%E4%B8%80%E8%BE%B9%23) `227.6K 🔥` `+35%`
1. [21世纪大君夫人大结局 (The 21st Century Maharaja’s Wife Finale)](https://s.weibo.com/weibo?q=%2321%E4%B8%96%E7%BA%AA%E5%A4%A7%E5%90%9B%E5%A4%AB%E4%BA%BA%E5%A4%A7%E7%BB%93%E5%B1%80%23) `181.4K 🔥` `+21%`
1. [女子试管7年得子丈夫肺癌脑转移](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%AF%95%E7%AE%A17%E5%B9%B4%E5%BE%97%E5%AD%90%E4%B8%88%E5%A4%AB%E8%82%BA%E7%99%8C%E8%84%91%E8%BD%AC%E7%A7%BB%23) `138.2K 🔥`
1. [特朗普警告台独 (Trump warns Taiwan independence)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AD%A6%E5%91%8A%E5%8F%B0%E7%8B%AC%23) `1.4M 🔥` `-22%`
1. [万千惠点名徐梦洁 (Wan Qianhui named Xu Mengjie)](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%83%A0%E7%82%B9%E5%90%8D%E5%BE%90%E6%A2%A6%E6%B4%81%23) `235.1K 🔥` `-53%`
1. [30岁女子用爬楼机锻炼摔倒身亡](https://s.weibo.com/weibo?q=%2330%E5%B2%81%E5%A5%B3%E5%AD%90%E7%94%A8%E7%88%AC%E6%A5%BC%E6%9C%BA%E9%94%BB%E7%82%BC%E6%91%94%E5%80%92%E8%BA%AB%E4%BA%A1%23) `119.9K 🔥` `-29%`

Updated at 2026-05-17 12:16:33

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
