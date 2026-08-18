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

1. [台风 (typhoon)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `581.9K 🔥` `NEW`
1. [你的身体比你想象中更爱你](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E8%BA%AB%E4%BD%93%E6%AF%94%E4%BD%A0%E6%83%B3%E8%B1%A1%E4%B8%AD%E6%9B%B4%E7%88%B1%E4%BD%A0%23) `407.8K 🔥` `NEW`
1. [杭州酒局事件](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E4%BA%8B%E4%BB%B6%23) `398.2K 🔥` `NEW`
1. [路人制止父亲脚踹女儿被拘超200天](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E4%BA%BA%E5%88%B6%E6%AD%A2%E7%88%B6%E4%BA%B2%E8%84%9A%E8%B8%B9%E5%A5%B3%E5%84%BF%E8%A2%AB%E6%8B%98%E8%B6%85200%E5%A4%A9%23) `388.9K 🔥` `NEW`
1. [张子枫长发以为内娱上新了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E6%9E%AB%E9%95%BF%E5%8F%91%E4%BB%A5%E4%B8%BA%E5%86%85%E5%A8%B1%E4%B8%8A%E6%96%B0%E4%BA%86%23) `386.7K 🔥` `NEW`
1. [何炅提问谁是何炅接班人](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E6%8F%90%E9%97%AE%E8%B0%81%E6%98%AF%E4%BD%95%E7%82%85%E6%8E%A5%E7%8F%AD%E4%BA%BA%23) `385.4K 🔥` `NEW`
1. [南京地铁车厢黄鳝满地爬乘客一起抓](https://s.weibo.com/weibo?q=%23%E5%8D%97%E4%BA%AC%E5%9C%B0%E9%93%81%E8%BD%A6%E5%8E%A2%E9%BB%84%E9%B3%9D%E6%BB%A1%E5%9C%B0%E7%88%AC%E4%B9%98%E5%AE%A2%E4%B8%80%E8%B5%B7%E6%8A%93%23) `380.4K 🔥` `NEW`
1. [AI会议纪要 职场照妖镜](https://s.weibo.com/weibo?q=%23AI%E4%BC%9A%E8%AE%AE%E7%BA%AA%E8%A6%81%20%E8%81%8C%E5%9C%BA%E7%85%A7%E5%A6%96%E9%95%9C%23) `379.7K 🔥` `NEW`
1. [豆瓣崩了](https://s.weibo.com/weibo?q=%23%E8%B1%86%E7%93%A3%E5%B4%A9%E4%BA%86%23) `370.9K 🔥` `NEW`
1. [泡汤偶遇章若楠](https://s.weibo.com/weibo?q=%23%E6%B3%A1%E6%B1%A4%E5%81%B6%E9%81%87%E7%AB%A0%E8%8B%A5%E6%A5%A0%23) `364.9K 🔥` `NEW`
1. [涉侵害女性的酒局到底发生了什么 (What happened at the bar where women were assaulted?)](https://s.weibo.com/weibo?q=%23%E6%B6%89%E4%BE%B5%E5%AE%B3%E5%A5%B3%E6%80%A7%E7%9A%84%E9%85%92%E5%B1%80%E5%88%B0%E5%BA%95%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88%23) `356.6K 🔥` `NEW`
1. [觉得眼睛漂亮就是觉得灵魂漂亮](https://s.weibo.com/weibo?q=%23%E8%A7%89%E5%BE%97%E7%9C%BC%E7%9D%9B%E6%BC%82%E4%BA%AE%E5%B0%B1%E6%98%AF%E8%A7%89%E5%BE%97%E7%81%B5%E9%AD%82%E6%BC%82%E4%BA%AE%23) `350.6K 🔥` `NEW`
1. [杨国福冒用羽生结弦名义摆花篮](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%9B%BD%E7%A6%8F%E5%86%92%E7%94%A8%E7%BE%BD%E7%94%9F%E7%BB%93%E5%BC%A6%E5%90%8D%E4%B9%89%E6%91%86%E8%8A%B1%E7%AF%AE%23) `348.7K 🔥` `NEW`
1. [哈妮克孜手腕还没大枣粗](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%A6%AE%E5%85%8B%E5%AD%9C%E6%89%8B%E8%85%95%E8%BF%98%E6%B2%A1%E5%A4%A7%E6%9E%A3%E7%B2%97%23) `346.1K 🔥` `NEW`
1. [龙餐馆居然有发芽土豆周边](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%E5%B1%85%E7%84%B6%E6%9C%89%E5%8F%91%E8%8A%BD%E5%9C%9F%E8%B1%86%E5%91%A8%E8%BE%B9%23) `344.7K 🔥` `NEW`
1. [一商人承诺捐10万给家乡修路后反悔](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%95%86%E4%BA%BA%E6%89%BF%E8%AF%BA%E6%8D%9010%E4%B8%87%E7%BB%99%E5%AE%B6%E4%B9%A1%E4%BF%AE%E8%B7%AF%E5%90%8E%E5%8F%8D%E6%82%94%23) `341.9K 🔥` `NEW`
1. [FIFA发布了决赛裁判视角的集锦](https://s.weibo.com/weibo?q=%23FIFA%E5%8F%91%E5%B8%83%E4%BA%86%E5%86%B3%E8%B5%9B%E8%A3%81%E5%88%A4%E8%A7%86%E8%A7%92%E7%9A%84%E9%9B%86%E9%94%A6%23) `331.3K 🔥` `NEW`
1. [魏子宸五公涨粉第一](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%AD%90%E5%AE%B8%E4%BA%94%E5%85%AC%E6%B6%A8%E7%B2%89%E7%AC%AC%E4%B8%80%23) `328.1K 🔥` `NEW`
1. [旋转火锅但是旋转的是人](https://s.weibo.com/weibo?q=%23%E6%97%8B%E8%BD%AC%E7%81%AB%E9%94%85%E4%BD%86%E6%98%AF%E6%97%8B%E8%BD%AC%E7%9A%84%E6%98%AF%E4%BA%BA%23) `325.5K 🔥` `NEW`
1. [朱镕基同志生平](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E7%94%9F%E5%B9%B3%23) `1.1M 🔥` `+118%`
1. [手机价格涨20%以上 (Mobile phone prices increased by more than 20%)](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E4%BB%B7%E6%A0%BC%E6%B6%A820%25%E4%BB%A5%E4%B8%8A%23) `406.4K 🔥` `+169%`
1. [九门剧组做客我们的宿舍](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E5%89%A7%E7%BB%84%E5%81%9A%E5%AE%A2%E6%88%91%E4%BB%AC%E7%9A%84%E5%AE%BF%E8%88%8D%23) `403.7K 🔥` `+23%`
1. [重器 流氓罪死刑 (Heavy weapon, death penalty for hooliganism)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%99%A8%20%E6%B5%81%E6%B0%93%E7%BD%AA%E6%AD%BB%E5%88%91%23) `402.2K 🔥` `+23%`
1. [幸运咖 阴阳瑞幸](https://s.weibo.com/weibo?q=%23%E5%B9%B8%E8%BF%90%E5%92%96%20%E9%98%B4%E9%98%B3%E7%91%9E%E5%B9%B8%23) `399.4K 🔥` `+22%`
1. [易立竞当面拆穿蓝盈莹](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%AB%8B%E7%AB%9E%E5%BD%93%E9%9D%A2%E6%8B%86%E7%A9%BF%E8%93%9D%E7%9B%88%E8%8E%B9%23) `396.5K 🔥` `+21%`
1. [寒武纪员工大红包人均557万](https://s.weibo.com/weibo?q=%23%E5%AF%92%E6%AD%A6%E7%BA%AA%E5%91%98%E5%B7%A5%E5%A4%A7%E7%BA%A2%E5%8C%85%E4%BA%BA%E5%9D%87557%E4%B8%87%23) `382.4K 🔥` `+170%`
1. [吴建豪回应妻子被曝学历造假](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%BB%BA%E8%B1%AA%E5%9B%9E%E5%BA%94%E5%A6%BB%E5%AD%90%E8%A2%AB%E6%9B%9D%E5%AD%A6%E5%8E%86%E9%80%A0%E5%81%87%23) `368.5K 🔥` `+22%`
1. [16岁嫁51岁好莱坞男星后称遭虐待](https://s.weibo.com/weibo?q=%2316%E5%B2%81%E5%AB%8151%E5%B2%81%E5%A5%BD%E8%8E%B1%E5%9D%9E%E7%94%B7%E6%98%9F%E5%90%8E%E7%A7%B0%E9%81%AD%E8%99%90%E5%BE%85%23) `354.5K 🔥` `+97%`
1. [时代峰峻半夜发招聘 (Times Fengjun issued recruitment in the middle of the night)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%8D%8A%E5%A4%9C%E5%8F%91%E6%8B%9B%E8%81%98%23) `353.0K 🔥` `+67%`
1. [杨洋头像越趴越近了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E5%A4%B4%E5%83%8F%E8%B6%8A%E8%B6%B4%E8%B6%8A%E8%BF%91%E4%BA%86%23) `341.6K 🔥` `+90%`
1. [刘亦菲高定是工作防晒衣是生活 (Liu Yifei’s haute couture is for work and sun protection clothing is for life)](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E9%AB%98%E5%AE%9A%E6%98%AF%E5%B7%A5%E4%BD%9C%E9%98%B2%E6%99%92%E8%A1%A3%E6%98%AF%E7%94%9F%E6%B4%BB%23) `339.6K 🔥` `+69%`
1. [杭州酒局事件受害女子家人回应 (The family of the woman victim in the Hangzhou Wine Bureau incident responds)](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E4%BA%8B%E4%BB%B6%E5%8F%97%E5%AE%B3%E5%A5%B3%E5%AD%90%E5%AE%B6%E4%BA%BA%E5%9B%9E%E5%BA%94%23) `338.0K 🔥` `+88%`
1. [王橹杰比董洁亲儿子还小一岁](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%AF%94%E8%91%A3%E6%B4%81%E4%BA%B2%E5%84%BF%E5%AD%90%E8%BF%98%E5%B0%8F%E4%B8%80%E5%B2%81%23) `335.0K 🔥` `+61%`
1. [唐晶word没激活](https://s.weibo.com/weibo?q=%23%E5%94%90%E6%99%B6word%E6%B2%A1%E6%BF%80%E6%B4%BB%23) `334.1K 🔥` `+98%`
1. [林志颖说kimi不想出道 (Lin Zhiying said Kimi doesn’t want to debut)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%97%E9%A2%96%E8%AF%B4kimi%E4%B8%8D%E6%83%B3%E5%87%BA%E9%81%93%23) `329.1K 🔥` `+66%`
1. [朱镕基同志遗体在京火化 (Comrade Zhu Rongji's body was cremated in Beijing)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E9%81%97%E4%BD%93%E5%9C%A8%E4%BA%AC%E7%81%AB%E5%8C%96%23) `1.0M 🔥`
1. [特朗普还对人民大会堂念念不忘 (Trump still misses the Great Hall of the People)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%BF%98%E5%AF%B9%E4%BA%BA%E6%B0%91%E5%A4%A7%E4%BC%9A%E5%A0%82%E5%BF%B5%E5%BF%B5%E4%B8%8D%E5%BF%98%23) `410.2K 🔥`
1. [京东推出首家医用个护店 (JD.com launches first medical personal care store)](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E6%8E%A8%E5%87%BA%E9%A6%96%E5%AE%B6%E5%8C%BB%E7%94%A8%E4%B8%AA%E6%8A%A4%E5%BA%97%23) `408.0K 🔥`
1. [刘亦菲素颜穿79.8元防晒衣](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E7%B4%A0%E9%A2%9C%E7%A9%BF79.8%E5%85%83%E9%98%B2%E6%99%92%E8%A1%A3%23) `391.8K 🔥`
1. [林志颖说林俊杰女友很乖很腼腆 (Lin Zhiying said that JJ Lin’s girlfriend is very well-behaved and shy)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%97%E9%A2%96%E8%AF%B4%E6%9E%97%E4%BF%8A%E6%9D%B0%E5%A5%B3%E5%8F%8B%E5%BE%88%E4%B9%96%E5%BE%88%E8%85%BC%E8%85%86%23) `390.2K 🔥`
1. [12345 滥用](https://s.weibo.com/weibo?q=%2312345%20%E6%BB%A5%E7%94%A8%23) `377.8K 🔥`
1. [法国婚姻制度致全民搭伙时代来临](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E5%A9%9A%E5%A7%BB%E5%88%B6%E5%BA%A6%E8%87%B4%E5%85%A8%E6%B0%91%E6%90%AD%E4%BC%99%E6%97%B6%E4%BB%A3%E6%9D%A5%E4%B8%B4%23) `375.9K 🔥`
1. [女患者称被男医生猥亵揉胸双方已报警](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%82%A3%E8%80%85%E7%A7%B0%E8%A2%AB%E7%94%B7%E5%8C%BB%E7%94%9F%E7%8C%A5%E4%BA%B5%E6%8F%89%E8%83%B8%E5%8F%8C%E6%96%B9%E5%B7%B2%E6%8A%A5%E8%AD%A6%23) `373.5K 🔥`
1. [贺涵PPT做得太丑了](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E6%B6%B5PPT%E5%81%9A%E5%BE%97%E5%A4%AA%E4%B8%91%E4%BA%86%23) `368.3K 🔥`
1. [红车误入婚车车队成主角 (The red car mistakenly enters the wedding car convoy and becomes the protagonist)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E8%BD%A6%E8%AF%AF%E5%85%A5%E5%A9%9A%E8%BD%A6%E8%BD%A6%E9%98%9F%E6%88%90%E4%B8%BB%E8%A7%92%23) `363.2K 🔥`
1. [胡先煦这么帅了](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6%E8%BF%99%E4%B9%88%E5%B8%85%E4%BA%86%23) `361.3K 🔥`
1. [BBA集体大降价 (BBA collective big price reduction)](https://s.weibo.com/weibo?q=%23BBA%E9%9B%86%E4%BD%93%E5%A4%A7%E9%99%8D%E4%BB%B7%23) `360.7K 🔥`
1. [张若昀白客玩蔡徐坤梗 (Zhang Ruoyun plays with Cai Xukun)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%8B%A5%E6%98%80%E7%99%BD%E5%AE%A2%E7%8E%A9%E8%94%A1%E5%BE%90%E5%9D%A4%E6%A2%97%23) `358.5K 🔥`
1. [中国医师节致敬不平凡的你 (Chinese Doctors’ Day pays tribute to you, the extraordinary person)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%8C%BB%E5%B8%88%E8%8A%82%E8%87%B4%E6%95%AC%E4%B8%8D%E5%B9%B3%E5%87%A1%E7%9A%84%E4%BD%A0%23) `646.6K 🔥` `-25%`
1. [厄尔尼诺事件大概率历史最强](https://s.weibo.com/weibo?q=%23%E5%8E%84%E5%B0%94%E5%B0%BC%E8%AF%BA%E4%BA%8B%E4%BB%B6%E5%A4%A7%E6%A6%82%E7%8E%87%E5%8E%86%E5%8F%B2%E6%9C%80%E5%BC%BA%23) `409.6K 🔥` `-60%`
1. [蜜雪冰城 盘账数杯子不数钱](https://s.weibo.com/weibo?q=%23%E8%9C%9C%E9%9B%AA%E5%86%B0%E5%9F%8E%20%E7%9B%98%E8%B4%A6%E6%95%B0%E6%9D%AF%E5%AD%90%E4%B8%8D%E6%95%B0%E9%92%B1%23) `393.7K 🔥` `-46%`

Updated at 2026-08-18 16:47:05

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
