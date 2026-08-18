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

1. [七夕 (Chinese Valentine's Day)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%23) `803.6K 🔥` `NEW`
1. [TF四代落地重庆](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E8%90%BD%E5%9C%B0%E9%87%8D%E5%BA%86%23) `318.6K 🔥` `NEW`
1. [柯洁装弱智赢AI围棋](https://s.weibo.com/weibo?q=%23%E6%9F%AF%E6%B4%81%E8%A3%85%E5%BC%B1%E6%99%BA%E8%B5%A2AI%E5%9B%B4%E6%A3%8B%23) `310.8K 🔥` `NEW`
1. [上海2026社保基数公布](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B72026%E7%A4%BE%E4%BF%9D%E5%9F%BA%E6%95%B0%E5%85%AC%E5%B8%83%23) `230.2K 🔥` `NEW`
1. [顶替案哥哥起诉湘潭大学择期宣判](https://s.weibo.com/weibo?q=%23%E9%A1%B6%E6%9B%BF%E6%A1%88%E5%93%A5%E5%93%A5%E8%B5%B7%E8%AF%89%E6%B9%98%E6%BD%AD%E5%A4%A7%E5%AD%A6%E6%8B%A9%E6%9C%9F%E5%AE%A3%E5%88%A4%23) `229.1K 🔥` `NEW`
1. [胖东来招聘不包含性侵犯罪人员](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E6%8B%9B%E8%81%98%E4%B8%8D%E5%8C%85%E5%90%AB%E6%80%A7%E4%BE%B5%E7%8A%AF%E7%BD%AA%E4%BA%BA%E5%91%98%23) `330.0K 🔥` `+50%`
1. [奕境X9官宣001号车主郭富城](https://s.weibo.com/weibo?q=%23%E5%A5%95%E5%A2%83X9%E5%AE%98%E5%AE%A3001%E5%8F%B7%E8%BD%A6%E4%B8%BB%E9%83%AD%E5%AF%8C%E5%9F%8E%23) `320.8K 🔥` `+53%`
1. [被写招嫖广告女子暴瘦近30斤](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%86%99%E6%8B%9B%E5%AB%96%E5%B9%BF%E5%91%8A%E5%A5%B3%E5%AD%90%E6%9A%B4%E7%98%A6%E8%BF%9130%E6%96%A4%23) `302.7K 🔥` `+45%`
1. [窦佳嫄说跟窦靖童第一次见面很尴尬 (Dou Jiayuan said it was awkward to meet Dou Jingtong for the first time)](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E4%BD%B3%E5%AB%84%E8%AF%B4%E8%B7%9F%E7%AA%A6%E9%9D%96%E7%AB%A5%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E9%9D%A2%E5%BE%88%E5%B0%B4%E5%B0%AC%23) `300.5K 🔥` `+44%`
1. [朱镕基同志生平 (Comrade Zhu Rongji's Life)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E7%94%9F%E5%B9%B3%23) `1.0M 🔥`
1. [公积金 强制缴纳 (Provident fund compulsory payment)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%20%E5%BC%BA%E5%88%B6%E7%BC%B4%E7%BA%B3%23) `911.4K 🔥`
1. [第七届中非媒体合作论坛 (The 7th China-Africa Media Cooperation Forum)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%83%E5%B1%8A%E4%B8%AD%E9%9D%9E%E5%AA%92%E4%BD%93%E5%90%88%E4%BD%9C%E8%AE%BA%E5%9D%9B%23) `822.1K 🔥`
1. [打过四价九价HPV疫苗不用再打双价 (If you have received the four-valent and nine-valent HPV vaccine, you do not need to take the double-valent vaccine.)](https://s.weibo.com/weibo?q=%23%E6%89%93%E8%BF%87%E5%9B%9B%E4%BB%B7%E4%B9%9D%E4%BB%B7HPV%E7%96%AB%E8%8B%97%E4%B8%8D%E7%94%A8%E5%86%8D%E6%89%93%E5%8F%8C%E4%BB%B7%23) `530.2K 🔥`
1. [京东推出首家医用个护店 (JD.com launches first medical personal care store)](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E6%8E%A8%E5%87%BA%E9%A6%96%E5%AE%B6%E5%8C%BB%E7%94%A8%E4%B8%AA%E6%8A%A4%E5%BA%97%23) `342.6K 🔥`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `320.1K 🔥`
1. [王诗晴怀孕](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%AF%97%E6%99%B4%E6%80%80%E5%AD%95%23) `303.6K 🔥`
1. [保送中南大学的女孩因蓝发走红 (The girl recommended to Central South University became famous because of her blue hair)](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E9%80%81%E4%B8%AD%E5%8D%97%E5%A4%A7%E5%AD%A6%E7%9A%84%E5%A5%B3%E5%AD%A9%E5%9B%A0%E8%93%9D%E5%8F%91%E8%B5%B0%E7%BA%A2%23) `300.6K 🔥`
1. [调查组通报杭州酒局事件 (Investigation team reports incident at Hangzhou Wine Bureau)](https://s.weibo.com/weibo?q=%23%E8%B0%83%E6%9F%A5%E7%BB%84%E9%80%9A%E6%8A%A5%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E4%BA%8B%E4%BB%B6%23) `278.1K 🔥`
1. [蓝盈莹因为浪姐出圈接了3年的戏](https://s.weibo.com/weibo?q=%23%E8%93%9D%E7%9B%88%E8%8E%B9%E5%9B%A0%E4%B8%BA%E6%B5%AA%E5%A7%90%E5%87%BA%E5%9C%88%E6%8E%A5%E4%BA%863%E5%B9%B4%E7%9A%84%E6%88%8F%23) `266.5K 🔥`
1. [外交部不再称靖国神社直接叫战犯神社](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E4%B8%8D%E5%86%8D%E7%A7%B0%E9%9D%96%E5%9B%BD%E7%A5%9E%E7%A4%BE%E7%9B%B4%E6%8E%A5%E5%8F%AB%E6%88%98%E7%8A%AF%E7%A5%9E%E7%A4%BE%23) `242.8K 🔥`
1. [鞠婧祎的车开到长江国际了](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E7%9A%84%E8%BD%A6%E5%BC%80%E5%88%B0%E9%95%BF%E6%B1%9F%E5%9B%BD%E9%99%85%E4%BA%86%23) `228.6K 🔥`
1. [上海申花0比3北京国安](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E7%94%B3%E8%8A%B10%E6%AF%943%E5%8C%97%E4%BA%AC%E5%9B%BD%E5%AE%89%23) `224.3K 🔥`
1. [真正决定一个人能走多远的三种能力 (Three abilities that really determine how far a person can go)](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E5%86%B3%E5%AE%9A%E4%B8%80%E4%B8%AA%E4%BA%BA%E8%83%BD%E8%B5%B0%E5%A4%9A%E8%BF%9C%E7%9A%84%E4%B8%89%E7%A7%8D%E8%83%BD%E5%8A%9B%23) `212.1K 🔥`
1. [马嘉祺直播预告 (Ma Jiaqi live broadcast preview)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E7%9B%B4%E6%92%AD%E9%A2%84%E5%91%8A%23) `202.5K 🔥`
1. [男子猝死后同居女友被索赔27万 (After man died suddenly, his live-in girlfriend was sued for 270,000 yuan)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%8C%9D%E6%AD%BB%E5%90%8E%E5%90%8C%E5%B1%85%E5%A5%B3%E5%8F%8B%E8%A2%AB%E7%B4%A2%E8%B5%9427%E4%B8%87%23) `201.1K 🔥`
1. [我的前半生](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%23) `199.3K 🔥`
1. [吴泽林曾在现场情绪失控](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%B3%BD%E6%9E%97%E6%9B%BE%E5%9C%A8%E7%8E%B0%E5%9C%BA%E6%83%85%E7%BB%AA%E5%A4%B1%E6%8E%A7%23) `190.7K 🔥`
1. [刘宇宁3年4次全台陆剧收视冠军](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%813%E5%B9%B44%E6%AC%A1%E5%85%A8%E5%8F%B0%E9%99%86%E5%89%A7%E6%94%B6%E8%A7%86%E5%86%A0%E5%86%9B%23) `187.8K 🔥`
1. [安踏前CEO徐阳将陪家人去美国](https://s.weibo.com/weibo?q=%23%E5%AE%89%E8%B8%8F%E5%89%8DCEO%E5%BE%90%E9%98%B3%E5%B0%86%E9%99%AA%E5%AE%B6%E4%BA%BA%E5%8E%BB%E7%BE%8E%E5%9B%BD%23) `186.3K 🔥`
1. [虞书欣Esther House上线 (Yu Shuxin Esther House is online)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3Esther%20House%E4%B8%8A%E7%BA%BF%23) `185.5K 🔥`
1. [公积金新规 通俗解读 (Popular Interpretation of New Provident Fund Regulations)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E6%96%B0%E8%A7%84%20%E9%80%9A%E4%BF%97%E8%A7%A3%E8%AF%BB%23) `397.0K 🔥` `-35%`
1. [披荆斩棘一公小考分组倒挂](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E4%B8%80%E5%85%AC%E5%B0%8F%E8%80%83%E5%88%86%E7%BB%84%E5%80%92%E6%8C%82%23) `337.8K 🔥` `-36%`
1. [重器男二 (Heavy weapon second male)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%99%A8%E7%94%B7%E4%BA%8C%23) `330.1K 🔥` `-36%`
1. [公积金条例修改 (Amendment to Provident Fund Regulations)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E6%9D%A1%E4%BE%8B%E4%BF%AE%E6%94%B9%23) `324.4K 🔥` `-37%`
1. [章子怡套现3亿](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%AD%90%E6%80%A1%E5%A5%97%E7%8E%B03%E4%BA%BF%23) `324.3K 🔥` `-37%`
1. [刘亦菲整个团队都穿黑色](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E6%95%B4%E4%B8%AA%E5%9B%A2%E9%98%9F%E9%83%BD%E7%A9%BF%E9%BB%91%E8%89%B2%23) `322.9K 🔥` `-37%`
1. [郭敬明把艾米婴儿肥减没了 (Guo Jingming lost Amy’s baby weight)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E6%8A%8A%E8%89%BE%E7%B1%B3%E5%A9%B4%E5%84%BF%E8%82%A5%E5%87%8F%E6%B2%A1%E4%BA%86%23) `317.1K 🔥` `-38%`
1. [苹果大波新品泄密](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%A4%A7%E6%B3%A2%E6%96%B0%E5%93%81%E6%B3%84%E5%AF%86%23) `315.5K 🔥` `-42%`
1. [何炅因年龄大被密室拒绝](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E5%9B%A0%E5%B9%B4%E9%BE%84%E5%A4%A7%E8%A2%AB%E5%AF%86%E5%AE%A4%E6%8B%92%E7%BB%9D%23) `313.6K 🔥` `-39%`
1. [让迪丽热巴涨粉八百万的台词 (The lines that made Di Lieba gain eight million fans)](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%B6%A8%E7%B2%89%E5%85%AB%E7%99%BE%E4%B8%87%E7%9A%84%E5%8F%B0%E8%AF%8D%23) `313.0K 🔥` `-39%`
1. [Dior全球公关总监去世](https://s.weibo.com/weibo?q=%23Dior%E5%85%A8%E7%90%83%E5%85%AC%E5%85%B3%E6%80%BB%E7%9B%91%E5%8E%BB%E4%B8%96%23) `309.4K 🔥` `-40%`
1. [甲状腺最怕的坏习惯 (The bad habits thyroid fears most)](https://s.weibo.com/weibo?q=%23%E7%94%B2%E7%8A%B6%E8%85%BA%E6%9C%80%E6%80%95%E7%9A%84%E5%9D%8F%E4%B9%A0%E6%83%AF%23) `308.1K 🔥` `-40%`
1. [真心喜欢一个人是什么样的](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E5%BF%83%E5%96%9C%E6%AC%A2%E4%B8%80%E4%B8%AA%E4%BA%BA%E6%98%AF%E4%BB%80%E4%B9%88%E6%A0%B7%E7%9A%84%23) `307.6K 🔥` `-40%`
1. [金智秀悼念迪奥公关总监](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E6%82%BC%E5%BF%B5%E8%BF%AA%E5%A5%A5%E5%85%AC%E5%85%B3%E6%80%BB%E7%9B%91%23) `305.2K 🔥` `-38%`
1. [白鹿包场敖瑞鹏孙珍妮师兄太稳健](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8C%85%E5%9C%BA%E6%95%96%E7%91%9E%E9%B9%8F%E5%AD%99%E7%8F%8D%E5%A6%AE%E5%B8%88%E5%85%84%E5%A4%AA%E7%A8%B3%E5%81%A5%23) `284.5K 🔥` `-45%`
1. [爱奇艺第二季度收入62.9亿元](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E7%AC%AC%E4%BA%8C%E5%AD%A3%E5%BA%A6%E6%94%B6%E5%85%A562.9%E4%BA%BF%E5%85%83%23) `280.9K 🔥` `-46%`
1. [冰箱里放了两年的苹果 (Apples that have been in the refrigerator for two years)](https://s.weibo.com/weibo?q=%23%E5%86%B0%E7%AE%B1%E9%87%8C%E6%94%BE%E4%BA%86%E4%B8%A4%E5%B9%B4%E7%9A%84%E8%8B%B9%E6%9E%9C%23) `280.6K 🔥` `-45%`
1. [住房公积金新政来了 (The new housing provident fund policy is here)](https://s.weibo.com/weibo?q=%23%E4%BD%8F%E6%88%BF%E5%85%AC%E7%A7%AF%E9%87%91%E6%96%B0%E6%94%BF%E6%9D%A5%E4%BA%86%23) `259.6K 🔥` `-50%`
1. [3孩非亲生案女方提供400多页流水](https://s.weibo.com/weibo?q=%233%E5%AD%A9%E9%9D%9E%E4%BA%B2%E7%94%9F%E6%A1%88%E5%A5%B3%E6%96%B9%E6%8F%90%E4%BE%9B400%E5%A4%9A%E9%A1%B5%E6%B5%81%E6%B0%B4%23) `199.6K 🔥` `-61%`
1. [奕境天穹智盾安全实力有多强](https://s.weibo.com/weibo?q=%23%E5%A5%95%E5%A2%83%E5%A4%A9%E7%A9%B9%E6%99%BA%E7%9B%BE%E5%AE%89%E5%85%A8%E5%AE%9E%E5%8A%9B%E6%9C%89%E5%A4%9A%E5%BC%BA%23) `195.0K 🔥` `-62%`
1. [小米新一代玄戒芯片即将发布](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%96%B0%E4%B8%80%E4%BB%A3%E7%8E%84%E6%88%92%E8%8A%AF%E7%89%87%E5%8D%B3%E5%B0%86%E5%8F%91%E5%B8%83%23) `194.5K 🔥` `-62%`

Updated at 2026-08-18 23:47:58

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
