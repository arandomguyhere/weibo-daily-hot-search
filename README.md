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

1. [打过四价九价HPV疫苗不用再打双价 (If you have received the four-valent and nine-valent HPV vaccine, you do not need to take the double-valent vaccine.)](https://s.weibo.com/weibo?q=%23%E6%89%93%E8%BF%87%E5%9B%9B%E4%BB%B7%E4%B9%9D%E4%BB%B7HPV%E7%96%AB%E8%8B%97%E4%B8%8D%E7%94%A8%E5%86%8D%E6%89%93%E5%8F%8C%E4%BB%B7%23) `697.1K 🔥` `NEW`
1. [30万买四激光大六座奕境X9](https://s.weibo.com/weibo?q=%2330%E4%B8%87%E4%B9%B0%E5%9B%9B%E6%BF%80%E5%85%89%E5%A4%A7%E5%85%AD%E5%BA%A7%E5%A5%95%E5%A2%83X9%23) `668.9K 🔥` `NEW`
1. [龙餐馆9月将在海外多地上映](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%869%E6%9C%88%E5%B0%86%E5%9C%A8%E6%B5%B7%E5%A4%96%E5%A4%9A%E5%9C%B0%E4%B8%8A%E6%98%A0%23) `637.8K 🔥` `NEW`
1. [金智秀悼念迪奥公关总监](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E6%82%BC%E5%BF%B5%E8%BF%AA%E5%A5%A5%E5%85%AC%E5%85%B3%E6%80%BB%E7%9B%91%23) `442.9K 🔥` `NEW`
1. [真心喜欢一个人是什么样的](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E5%BF%83%E5%96%9C%E6%AC%A2%E4%B8%80%E4%B8%AA%E4%BA%BA%E6%98%AF%E4%BB%80%E4%B9%88%E6%A0%B7%E7%9A%84%23) `395.5K 🔥` `NEW`
1. [安踏前CEO徐阳将陪家人去美国](https://s.weibo.com/weibo?q=%23%E5%AE%89%E8%B8%8F%E5%89%8DCEO%E5%BE%90%E9%98%B3%E5%B0%86%E9%99%AA%E5%AE%B6%E4%BA%BA%E5%8E%BB%E7%BE%8E%E5%9B%BD%23) `307.2K 🔥` `NEW`
1. [保送中南大学的女孩因蓝发走红](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E9%80%81%E4%B8%AD%E5%8D%97%E5%A4%A7%E5%AD%A6%E7%9A%84%E5%A5%B3%E5%AD%A9%E5%9B%A0%E8%93%9D%E5%8F%91%E8%B5%B0%E7%BA%A2%23) `279.9K 🔥` `NEW`
1. [上海申花0比3北京国安](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E7%94%B3%E8%8A%B10%E6%AF%943%E5%8C%97%E4%BA%AC%E5%9B%BD%E5%AE%89%23) `258.0K 🔥` `NEW`
1. [云南低价团涉事旅行社导游被查](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%8D%97%E4%BD%8E%E4%BB%B7%E5%9B%A2%E6%B6%89%E4%BA%8B%E6%97%85%E8%A1%8C%E7%A4%BE%E5%AF%BC%E6%B8%B8%E8%A2%AB%E6%9F%A5%23) `243.5K 🔥` `NEW`
1. [马嘉祺直播预告](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E7%9B%B4%E6%92%AD%E9%A2%84%E5%91%8A%23) `236.8K 🔥` `NEW`
1. [男子猝死后同居女友被索赔27万 (After man died suddenly, his live-in girlfriend was sued for 270,000 yuan)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%8C%9D%E6%AD%BB%E5%90%8E%E5%90%8C%E5%B1%85%E5%A5%B3%E5%8F%8B%E8%A2%AB%E7%B4%A2%E8%B5%9427%E4%B8%87%23) `210.1K 🔥` `NEW`
1. [苹果公布16款设备将停止系统更新](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%85%AC%E5%B8%8316%E6%AC%BE%E8%AE%BE%E5%A4%87%E5%B0%86%E5%81%9C%E6%AD%A2%E7%B3%BB%E7%BB%9F%E6%9B%B4%E6%96%B0%23) `200.7K 🔥` `NEW`
1. [第七届中非媒体合作论坛 (The 7th China-Africa Media Cooperation Forum)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%83%E5%B1%8A%E4%B8%AD%E9%9D%9E%E5%AA%92%E4%BD%93%E5%90%88%E4%BD%9C%E8%AE%BA%E5%9D%9B%23) `849.0K 🔥` `+43%`
1. [公积金新规 通俗解读 (Popular Interpretation of New Provident Fund Regulations)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E6%96%B0%E8%A7%84%20%E9%80%9A%E4%BF%97%E8%A7%A3%E8%AF%BB%23) `827.1K 🔥` `+41%`
1. [苹果大波新品泄密](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%A4%A7%E6%B3%A2%E6%96%B0%E5%93%81%E6%B3%84%E5%AF%86%23) `697.3K 🔥` `+97%`
1. [披荆斩棘一公小考分组倒挂](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E4%B8%80%E5%85%AC%E5%B0%8F%E8%80%83%E5%88%86%E7%BB%84%E5%80%92%E6%8C%82%23) `693.5K 🔥` `+79%`
1. [重器男二](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%99%A8%E7%94%B7%E4%BA%8C%23) `689.7K 🔥` `+74%`
1. [外交部不再称靖国神社直接叫战犯神社](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E4%B8%8D%E5%86%8D%E7%A7%B0%E9%9D%96%E5%9B%BD%E7%A5%9E%E7%A4%BE%E7%9B%B4%E6%8E%A5%E5%8F%AB%E6%88%98%E7%8A%AF%E7%A5%9E%E7%A4%BE%23) `686.6K 🔥` `+55%`
1. [调查组通报杭州酒局事件 (Investigation team reports incident at Hangzhou Wine Bureau)](https://s.weibo.com/weibo?q=%23%E8%B0%83%E6%9F%A5%E7%BB%84%E9%80%9A%E6%8A%A5%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E4%BA%8B%E4%BB%B6%23) `682.8K 🔥` `+79%`
1. [章子怡套现3亿](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%AD%90%E6%80%A1%E5%A5%97%E7%8E%B03%E4%BA%BF%23) `681.9K 🔥` `+82%`
1. [杭州酒局知情人称女生求助无果反抗](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E7%9F%A5%E6%83%85%E4%BA%BA%E7%A7%B0%E5%A5%B3%E7%94%9F%E6%B1%82%E5%8A%A9%E6%97%A0%E6%9E%9C%E5%8F%8D%E6%8A%97%23) `677.3K 🔥` `+85%`
1. [刘亦菲整个团队都穿黑色](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E6%95%B4%E4%B8%AA%E5%9B%A2%E9%98%9F%E9%83%BD%E7%A9%BF%E9%BB%91%E8%89%B2%23) `675.9K 🔥` `+85%`
1. [住房公积金新政来了](https://s.weibo.com/weibo?q=%23%E4%BD%8F%E6%88%BF%E5%85%AC%E7%A7%AF%E9%87%91%E6%96%B0%E6%94%BF%E6%9D%A5%E4%BA%86%23) `673.5K 🔥` `+30%`
1. [让迪丽热巴涨粉八百万的台词 (The lines that made Di Lieba gain eight million fans)](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%B6%A8%E7%B2%89%E5%85%AB%E7%99%BE%E4%B8%87%E7%9A%84%E5%8F%B0%E8%AF%8D%23) `666.7K 🔥` `+89%`
1. [我的前半生](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%23) `664.4K 🔥` `+88%`
1. [郭敬明把艾米婴儿肥减没了](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E6%8A%8A%E8%89%BE%E7%B1%B3%E5%A9%B4%E5%84%BF%E8%82%A5%E5%87%8F%E6%B2%A1%E4%BA%86%23) `662.1K 🔥` `+87%`
1. [爱奇艺第二季度收入62.9亿元](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E7%AC%AC%E4%BA%8C%E5%AD%A3%E5%BA%A6%E6%94%B6%E5%85%A562.9%E4%BA%BF%E5%85%83%23) `661.4K 🔥` `+88%`
1. [吴磊宋祖儿 京洛再无佳人 (Wu Lei and Song Zuer, there is no beauty in Beijing and Luo)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E7%A3%8A%E5%AE%8B%E7%A5%96%E5%84%BF%20%E4%BA%AC%E6%B4%9B%E5%86%8D%E6%97%A0%E4%BD%B3%E4%BA%BA%23) `651.3K 🔥` `+85%`
1. [Dior全球公关总监去世](https://s.weibo.com/weibo?q=%23Dior%E5%85%A8%E7%90%83%E5%85%AC%E5%85%B3%E6%80%BB%E7%9B%91%E5%8E%BB%E4%B8%96%23) `642.5K 🔥` `+83%`
1. [小米新一代玄戒芯片即将发布](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%96%B0%E4%B8%80%E4%BB%A3%E7%8E%84%E6%88%92%E8%8A%AF%E7%89%87%E5%8D%B3%E5%B0%86%E5%8F%91%E5%B8%83%23) `632.9K 🔥` `+80%`
1. [甲状腺最怕的坏习惯 (The bad habits thyroid fears most)](https://s.weibo.com/weibo?q=%23%E7%94%B2%E7%8A%B6%E8%85%BA%E6%9C%80%E6%80%95%E7%9A%84%E5%9D%8F%E4%B9%A0%E6%83%AF%23) `626.0K 🔥` `+78%`
1. [冰箱里放了两年的苹果 (Apples that have been in the refrigerator for two years)](https://s.weibo.com/weibo?q=%23%E5%86%B0%E7%AE%B1%E9%87%8C%E6%94%BE%E4%BA%86%E4%B8%A4%E5%B9%B4%E7%9A%84%E8%8B%B9%E6%9E%9C%23) `622.1K 🔥` `+77%`
1. [朱镕基同志生平 (Comrade Zhu Rongji's Life)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E7%94%9F%E5%B9%B3%23) `1.0M 🔥`
1. [公积金条例修改 (Amendment to Provident Fund Regulations)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E6%9D%A1%E4%BE%8B%E4%BF%AE%E6%94%B9%23) `898.4K 🔥`
1. [刘宇宁3年4次全台陆剧收视冠军](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%813%E5%B9%B44%E6%AC%A1%E5%85%A8%E5%8F%B0%E9%99%86%E5%89%A7%E6%94%B6%E8%A7%86%E5%86%A0%E5%86%9B%23) `350.2K 🔥`
1. [王诗晴怀孕](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%AF%97%E6%99%B4%E6%80%80%E5%AD%95%23) `331.4K 🔥`
1. [王橹杰彝族祖先姓mu (Wang Lujie's Yi ancestor's surname is mu)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%BD%9D%E6%97%8F%E7%A5%96%E5%85%88%E5%A7%93mu%23) `287.4K 🔥`
1. [蓝盈莹因为浪姐出圈接了3年的戏](https://s.weibo.com/weibo?q=%23%E8%93%9D%E7%9B%88%E8%8E%B9%E5%9B%A0%E4%B8%BA%E6%B5%AA%E5%A7%90%E5%87%BA%E5%9C%88%E6%8E%A5%E4%BA%863%E5%B9%B4%E7%9A%84%E6%88%8F%23) `284.7K 🔥`
1. [鞠婧祎的车开到长江国际了](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E7%9A%84%E8%BD%A6%E5%BC%80%E5%88%B0%E9%95%BF%E6%B1%9F%E5%9B%BD%E9%99%85%E4%BA%86%23) `278.2K 🔥`
1. [真正决定一个人能走多远的三种能力 (Three abilities that really determine how far a person can go)](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E5%86%B3%E5%AE%9A%E4%B8%80%E4%B8%AA%E4%BA%BA%E8%83%BD%E8%B5%B0%E5%A4%9A%E8%BF%9C%E7%9A%84%E4%B8%89%E7%A7%8D%E8%83%BD%E5%8A%9B%23) `260.8K 🔥`
1. [轻伤二级已经很严重了](https://s.weibo.com/weibo?q=%23%E8%BD%BB%E4%BC%A4%E4%BA%8C%E7%BA%A7%E5%B7%B2%E7%BB%8F%E5%BE%88%E4%B8%A5%E9%87%8D%E4%BA%86%23) `239.6K 🔥`
1. [虞书欣Esther House上线 (Yu Shuxin Esther House is online)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3Esther%20House%E4%B8%8A%E7%BA%BF%23) `232.9K 🔥`
1. [学籍顶替案母亲称哥哥把弟弟毁了](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E7%B1%8D%E9%A1%B6%E6%9B%BF%E6%A1%88%E6%AF%8D%E4%BA%B2%E7%A7%B0%E5%93%A5%E5%93%A5%E6%8A%8A%E5%BC%9F%E5%BC%9F%E6%AF%81%E4%BA%86%23) `232.1K 🔥`
1. [杨国福在仅68个粉丝账号上致歉](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%9B%BD%E7%A6%8F%E5%9C%A8%E4%BB%8568%E4%B8%AA%E7%B2%89%E4%B8%9D%E8%B4%A6%E5%8F%B7%E4%B8%8A%E8%87%B4%E6%AD%89%23) `231.9K 🔥`
1. [吴泽林曾在现场情绪失控](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%B3%BD%E6%9E%97%E6%9B%BE%E5%9C%A8%E7%8E%B0%E5%9C%BA%E6%83%85%E7%BB%AA%E5%A4%B1%E6%8E%A7%23) `200.8K 🔥`
1. [公积金](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%23) `275.0K 🔥` `-27%`
1. [从房地产角度看杭州酒局事件](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E6%88%BF%E5%9C%B0%E4%BA%A7%E8%A7%92%E5%BA%A6%E7%9C%8B%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E4%BA%8B%E4%BB%B6%23) `243.0K 🔥` `-31%`
1. [杭州酒局事件受害方知情人发声](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E4%BA%8B%E4%BB%B6%E5%8F%97%E5%AE%B3%E6%96%B9%E7%9F%A5%E6%83%85%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `232.3K 🔥` `-21%`
1. [何老师出生证和教资一起发的](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%80%81%E5%B8%88%E5%87%BA%E7%94%9F%E8%AF%81%E5%92%8C%E6%95%99%E8%B5%84%E4%B8%80%E8%B5%B7%E5%8F%91%E7%9A%84%23) `200.9K 🔥` `-43%`
1. [小米Q2净利润62亿](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3Q2%E5%87%80%E5%88%A9%E6%B6%A662%E4%BA%BF%23) `200.7K 🔥` `-40%`

Updated at 2026-08-18 22:40:54

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
