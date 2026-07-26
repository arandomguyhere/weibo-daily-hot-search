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

1. [新产业跑出中国加速度 (New industries are accelerating out of China)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%BA%A7%E4%B8%9A%E8%B7%91%E5%87%BA%E4%B8%AD%E5%9B%BD%E5%8A%A0%E9%80%9F%E5%BA%A6%23) `704.1K 🔥` `NEW`
1. [杭州已经发展成这样了吗](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E5%B7%B2%E7%BB%8F%E5%8F%91%E5%B1%95%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%E5%90%97%23) `484.4K 🔥` `NEW`
1. [王虹北大同学晒大一合照](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%99%B9%E5%8C%97%E5%A4%A7%E5%90%8C%E5%AD%A6%E6%99%92%E5%A4%A7%E4%B8%80%E5%90%88%E7%85%A7%23) `369.0K 🔥` `NEW`
1. [十个勤天演唱会延期1天](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%E6%BC%94%E5%94%B1%E4%BC%9A%E5%BB%B6%E6%9C%9F1%E5%A4%A9%23) `362.0K 🔥` `NEW`
1. [王橹杰跳whiplash](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E8%B7%B3whiplash%23) `358.2K 🔥` `NEW`
1. [原来小区是这样命名的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%B0%8F%E5%8C%BA%E6%98%AF%E8%BF%99%E6%A0%B7%E5%91%BD%E5%90%8D%E7%9A%84%23) `350.5K 🔥` `NEW`
1. [程潇拍了迪丽热巴韩语BGM](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%BD%87%E6%8B%8D%E4%BA%86%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%9F%A9%E8%AF%ADBGM%23) `344.2K 🔥` `NEW`
1. [终于明白职场没有朋友的含义了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%98%8E%E7%99%BD%E8%81%8C%E5%9C%BA%E6%B2%A1%E6%9C%89%E6%9C%8B%E5%8F%8B%E7%9A%84%E5%90%AB%E4%B9%89%E4%BA%86%23) `333.9K 🔥` `NEW`
1. [扣扣搜搜却花了很多钱](https://s.weibo.com/weibo?q=%23%E6%89%A3%E6%89%A3%E6%90%9C%E6%90%9C%E5%8D%B4%E8%8A%B1%E4%BA%86%E5%BE%88%E5%A4%9A%E9%92%B1%23) `328.0K 🔥` `NEW`
1. [铁路部门回应李权哲占座](https://s.weibo.com/weibo?q=%23%E9%93%81%E8%B7%AF%E9%83%A8%E9%97%A8%E5%9B%9E%E5%BA%94%E6%9D%8E%E6%9D%83%E5%93%B2%E5%8D%A0%E5%BA%A7%23) `326.4K 🔥` `NEW`
1. [时代少年团采访已读乱回 (The interview with Times Youth League has been read and reposted)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E9%87%87%E8%AE%BF%E5%B7%B2%E8%AF%BB%E4%B9%B1%E5%9B%9E%23) `324.9K 🔥` `NEW`
1. [王楚然全世界第一适配正红色](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%85%A8%E4%B8%96%E7%95%8C%E7%AC%AC%E4%B8%80%E9%80%82%E9%85%8D%E6%AD%A3%E7%BA%A2%E8%89%B2%23) `316.2K 🔥` `NEW`
1. [王一博领奖台喝香槟](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E9%A2%86%E5%A5%96%E5%8F%B0%E5%96%9D%E9%A6%99%E6%A7%9F%23) `313.1K 🔥` `NEW`
1. [半熟恋人直播](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E7%86%9F%E6%81%8B%E4%BA%BA%E7%9B%B4%E6%92%AD%23) `310.7K 🔥` `NEW`
1. [美素佳儿一批次奶粉检出铅超标](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%B4%A0%E4%BD%B3%E5%84%BF%E4%B8%80%E6%89%B9%E6%AC%A1%E5%A5%B6%E7%B2%89%E6%A3%80%E5%87%BA%E9%93%85%E8%B6%85%E6%A0%87%23) `303.1K 🔥` `NEW`
1. [百花杀大结局 (The ending of Hundred Flowers Killing)](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%E5%A4%A7%E7%BB%93%E5%B1%80%23) `1.1M 🔥` `+80%`
1. [婴儿是否知道谁是自己的妈妈](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%84%BF%E6%98%AF%E5%90%A6%E7%9F%A5%E9%81%93%E8%B0%81%E6%98%AF%E8%87%AA%E5%B7%B1%E7%9A%84%E5%A6%88%E5%A6%88%23) `675.0K 🔥` `+44%`
1. [现实好看和上镜好看是两个维度](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%AE%9E%E5%A5%BD%E7%9C%8B%E5%92%8C%E4%B8%8A%E9%95%9C%E5%A5%BD%E7%9C%8B%E6%98%AF%E4%B8%A4%E4%B8%AA%E7%BB%B4%E5%BA%A6%23) `468.4K 🔥` `+157%`
1. [特斯拉人形机器人](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `359.7K 🔥` `+49%`
1. [内马尔回归首战梅开二度](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E5%9B%9E%E5%BD%92%E9%A6%96%E6%88%98%E6%A2%85%E5%BC%80%E4%BA%8C%E5%BA%A6%23) `340.7K 🔥` `+120%`
1. [哥伦比亚孕妇遇害腹中婴儿被夺走 (Colombian pregnant woman murdered, baby snatched from belly)](https://s.weibo.com/weibo?q=%23%E5%93%A5%E4%BC%A6%E6%AF%94%E4%BA%9A%E5%AD%95%E5%A6%87%E9%81%87%E5%AE%B3%E8%85%B9%E4%B8%AD%E5%A9%B4%E5%84%BF%E8%A2%AB%E5%A4%BA%E8%B5%B0%23) `338.1K 🔥` `+38%`
1. [龙凤胎出生差2分钟身高差20厘米](https://s.weibo.com/weibo?q=%23%E9%BE%99%E5%87%A4%E8%83%8E%E5%87%BA%E7%94%9F%E5%B7%AE2%E5%88%86%E9%92%9F%E8%BA%AB%E9%AB%98%E5%B7%AE20%E5%8E%98%E7%B1%B3%23) `336.2K 🔥` `+32%`
1. [每次发完朋友圈都特别尴尬 (I feel very embarrassed every time I post it on Moments)](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E6%AC%A1%E5%8F%91%E5%AE%8C%E6%9C%8B%E5%8F%8B%E5%9C%88%E9%83%BD%E7%89%B9%E5%88%AB%E5%B0%B4%E5%B0%AC%23) `330.9K 🔥` `+84%`
1. [TOP青岛新发色](https://s.weibo.com/weibo?q=%23TOP%E9%9D%92%E5%B2%9B%E6%96%B0%E5%8F%91%E8%89%B2%23) `320.3K 🔥` `+26%`
1. [甘肃一景区山洪已营救174人 (174 people have been rescued from flash floods in a scenic spot in Gansu)](https://s.weibo.com/weibo?q=%23%E7%94%98%E8%82%83%E4%B8%80%E6%99%AF%E5%8C%BA%E5%B1%B1%E6%B4%AA%E5%B7%B2%E8%90%A5%E6%95%91174%E4%BA%BA%23) `319.2K 🔥` `+69%`
1. [文化工作者要有文化含金量](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%8C%96%E5%B7%A5%E4%BD%9C%E8%80%85%E8%A6%81%E6%9C%89%E6%96%87%E5%8C%96%E5%90%AB%E9%87%91%E9%87%8F%23) `318.1K 🔥` `+32%`
1. [光与夜之恋 (Love of light and night)](https://s.weibo.com/weibo?q=%23%E5%85%89%E4%B8%8E%E5%A4%9C%E4%B9%8B%E6%81%8B%23) `313.4K 🔥` `+79%`
1. [丈夫见到妻子前后变化](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E8%A7%81%E5%88%B0%E5%A6%BB%E5%AD%90%E5%89%8D%E5%90%8E%E5%8F%98%E5%8C%96%23) `308.8K 🔥` `+92%`
1. [王楚然潜水服身材](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E6%BD%9C%E6%B0%B4%E6%9C%8D%E8%BA%AB%E6%9D%90%23) `308.0K 🔥` `+40%`
1. [A股重磅新规明起实施](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E9%87%8D%E7%A3%85%E6%96%B0%E8%A7%84%E6%98%8E%E8%B5%B7%E5%AE%9E%E6%96%BD%23) `305.2K 🔥` `+101%`
1. [白鹿开到荼蘼 田壮壮造型](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%BC%80%E5%88%B0%E8%8D%BC%E8%98%BC%20%E7%94%B0%E5%A3%AE%E5%A3%AE%E9%80%A0%E5%9E%8B%23) `303.5K 🔥` `+53%`
1. [周星驰不再依赖迪丽热巴算长大吗](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E4%B8%8D%E5%86%8D%E4%BE%9D%E8%B5%96%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%AE%97%E9%95%BF%E5%A4%A7%E5%90%97%23) `371.9K 🔥`
1. [百万粉丝女网红贩卖私密视频被逮捕](https://s.weibo.com/weibo?q=%23%E7%99%BE%E4%B8%87%E7%B2%89%E4%B8%9D%E5%A5%B3%E7%BD%91%E7%BA%A2%E8%B4%A9%E5%8D%96%E7%A7%81%E5%AF%86%E8%A7%86%E9%A2%91%E8%A2%AB%E9%80%AE%E6%8D%95%23) `371.4K 🔥`
1. [曝刘宇宁曾自称是87年的](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%88%98%E5%AE%87%E5%AE%81%E6%9B%BE%E8%87%AA%E7%A7%B0%E6%98%AF87%E5%B9%B4%E7%9A%84%23) `367.1K 🔥`
1. [演员王建隆去世 (Actor Wang Jianlong passes away)](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E7%8E%8B%E5%BB%BA%E9%9A%86%E5%8E%BB%E4%B8%96%23) `365.3K 🔥`
1. [艾米净身高165 (Amy's net height is 165)](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%B1%B3%E5%87%80%E8%BA%AB%E9%AB%98165%23) `356.4K 🔥`
1. [十个勤天直播](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%E7%9B%B4%E6%92%AD%23) `352.9K 🔥`
1. [曾沛慈徐梦洁孟佳一起旅游](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%BE%90%E6%A2%A6%E6%B4%81%E5%AD%9F%E4%BD%B3%E4%B8%80%E8%B5%B7%E6%97%85%E6%B8%B8%23) `349.5K 🔥`
1. [王一博第三名](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%AC%AC%E4%B8%89%E5%90%8D%23) `347.5K 🔥`
1. [中国AI芯片国产替代率五年从10%升至40%](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BDAI%E8%8A%AF%E7%89%87%E5%9B%BD%E4%BA%A7%E6%9B%BF%E4%BB%A3%E7%8E%87%E4%BA%94%E5%B9%B4%E4%BB%8E10%25%E5%8D%87%E8%87%B340%25%23) `346.0K 🔥`
1. [赵今麦热出假笑表情](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E7%83%AD%E5%87%BA%E5%81%87%E7%AC%91%E8%A1%A8%E6%83%85%23) `339.3K 🔥`
1. [小狗护主咬死剧毒眼镜蛇嘴角中毒](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E6%8A%A4%E4%B8%BB%E5%92%AC%E6%AD%BB%E5%89%A7%E6%AF%92%E7%9C%BC%E9%95%9C%E8%9B%87%E5%98%B4%E8%A7%92%E4%B8%AD%E6%AF%92%23) `332.0K 🔥`
1. [艾米晒北电录取通知书](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%B1%B3%E6%99%92%E5%8C%97%E7%94%B5%E5%BD%95%E5%8F%96%E9%80%9A%E7%9F%A5%E4%B9%A6%23) `329.3K 🔥`
1. [滞销西瓜被网红压价到一毛多一斤 (Slow-selling watermelons are priced down by internet celebrities to just over 10 cents per pound)](https://s.weibo.com/weibo?q=%23%E6%BB%9E%E9%94%80%E8%A5%BF%E7%93%9C%E8%A2%AB%E7%BD%91%E7%BA%A2%E5%8E%8B%E4%BB%B7%E5%88%B0%E4%B8%80%E6%AF%9B%E5%A4%9A%E4%B8%80%E6%96%A4%23) `792.0K 🔥` `-28%`
1. [晚饭后最好的耗糖运动](https://s.weibo.com/weibo?q=%23%E6%99%9A%E9%A5%AD%E5%90%8E%E6%9C%80%E5%A5%BD%E7%9A%84%E8%80%97%E7%B3%96%E8%BF%90%E5%8A%A8%23) `533.7K 🔥` `-26%`
1. [美国发生AI失控事故](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%8F%91%E7%94%9FAI%E5%A4%B1%E6%8E%A7%E4%BA%8B%E6%95%85%23) `364.0K 🔥` `-50%`
1. [王楚钦2比1黄旭男 (Wang Chuqin 2 to 1 Huang Xunan)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A62%E6%AF%941%E9%BB%84%E6%97%AD%E7%94%B7%23) `361.1K 🔥` `-50%`
1. [甘肃渭源山洪已致10死 (Flash flood in Weiyuan, Gansu kills 10 people)](https://s.weibo.com/weibo?q=%23%E7%94%98%E8%82%83%E6%B8%AD%E6%BA%90%E5%B1%B1%E6%B4%AA%E5%B7%B2%E8%87%B410%E6%AD%BB%23) `354.3K 🔥` `-54%`
1. [港版金秘书为何这样路透 (Why is the Hong Kong version of Secretary Kim like this? Reuters)](https://s.weibo.com/weibo?q=%23%E6%B8%AF%E7%89%88%E9%87%91%E7%A7%98%E4%B9%A6%E4%B8%BA%E4%BD%95%E8%BF%99%E6%A0%B7%E8%B7%AF%E9%80%8F%23) `343.3K 🔥` `-27%`
1. [软孤立](https://s.weibo.com/weibo?q=%23%E8%BD%AF%E5%AD%A4%E7%AB%8B%23) `322.0K 🔥` `-28%`

Updated at 2026-07-26 20:55:48

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
