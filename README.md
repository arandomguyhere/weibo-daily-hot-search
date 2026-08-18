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

1. [书卷一梦全台陆剧收视冠军 ("Shujuan Yimeng" ranks first among Taiwanese mainland dramas in ratings)](https://s.weibo.com/weibo?q=%23%E4%B9%A6%E5%8D%B7%E4%B8%80%E6%A2%A6%E5%85%A8%E5%8F%B0%E9%99%86%E5%89%A7%E6%94%B6%E8%A7%86%E5%86%A0%E5%86%9B%23) `293.0K 🔥` `NEW`
1. [郭敬明把艾米婴儿肥减没了](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E6%8A%8A%E8%89%BE%E7%B1%B3%E5%A9%B4%E5%84%BF%E8%82%A5%E5%87%8F%E6%B2%A1%E4%BA%86%23) `291.5K 🔥` `NEW`
1. [朱镕基同志生平照片](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E7%94%9F%E5%B9%B3%E7%85%A7%E7%89%87%23) `290.0K 🔥` `NEW`
1. [时代少年团工作人员行程](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E8%A1%8C%E7%A8%8B%23) `283.9K 🔥` `NEW`
1. [文牧野说喜剧只是沈腾的技能之一](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%89%A7%E9%87%8E%E8%AF%B4%E5%96%9C%E5%89%A7%E5%8F%AA%E6%98%AF%E6%B2%88%E8%85%BE%E7%9A%84%E6%8A%80%E8%83%BD%E4%B9%8B%E4%B8%80%23) `281.6K 🔥` `NEW`
1. [杭州酒局事件被害人正接受治疗](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E4%BA%8B%E4%BB%B6%E8%A2%AB%E5%AE%B3%E4%BA%BA%E6%AD%A3%E6%8E%A5%E5%8F%97%E6%B2%BB%E7%96%97%23) `279.6K 🔥` `NEW`
1. [建议开车一定要远离马路牙子](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%BC%80%E8%BD%A6%E4%B8%80%E5%AE%9A%E8%A6%81%E8%BF%9C%E7%A6%BB%E9%A9%AC%E8%B7%AF%E7%89%99%E5%AD%90%23) `271.0K 🔥` `NEW`
1. [让迪丽热巴涨粉八百万的台词](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%B6%A8%E7%B2%89%E5%85%AB%E7%99%BE%E4%B8%87%E7%9A%84%E5%8F%B0%E8%AF%8D%23) `266.3K 🔥` `NEW`
1. [多方回应副区长卷入杭州地产酒局](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%94%E5%89%AF%E5%8C%BA%E9%95%BF%E5%8D%B7%E5%85%A5%E6%9D%AD%E5%B7%9E%E5%9C%B0%E4%BA%A7%E9%85%92%E5%B1%80%23) `257.9K 🔥` `NEW`
1. [清华管培生高管饭局上栽了](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8D%8E%E7%AE%A1%E5%9F%B9%E7%94%9F%E9%AB%98%E7%AE%A1%E9%A5%AD%E5%B1%80%E4%B8%8A%E6%A0%BD%E4%BA%86%23) `245.0K 🔥` `NEW`
1. [吃冰西瓜拉肚子不一定是太凉了 (Eating iced watermelon and causing diarrhea does not necessarily mean it is too cold.)](https://s.weibo.com/weibo?q=%23%E5%90%83%E5%86%B0%E8%A5%BF%E7%93%9C%E6%8B%89%E8%82%9A%E5%AD%90%E4%B8%8D%E4%B8%80%E5%AE%9A%E6%98%AF%E5%A4%AA%E5%87%89%E4%BA%86%23) `211.0K 🔥` `NEW`
1. [蒋奇明试戏龙餐馆试了三次](https://s.weibo.com/weibo?q=%23%E8%92%8B%E5%A5%87%E6%98%8E%E8%AF%95%E6%88%8F%E9%BE%99%E9%A4%90%E9%A6%86%E8%AF%95%E4%BA%86%E4%B8%89%E6%AC%A1%23) `202.1K 🔥` `NEW`
1. [蓝盈莹因浪姐争议丢商单](https://s.weibo.com/weibo?q=%23%E8%93%9D%E7%9B%88%E8%8E%B9%E5%9B%A0%E6%B5%AA%E5%A7%90%E4%BA%89%E8%AE%AE%E4%B8%A2%E5%95%86%E5%8D%95%23) `196.8K 🔥` `NEW`
1. [AI漫剧没有法律题材](https://s.weibo.com/weibo?q=%23AI%E6%BC%AB%E5%89%A7%E6%B2%A1%E6%9C%89%E6%B3%95%E5%BE%8B%E9%A2%98%E6%9D%90%23) `187.2K 🔥` `NEW`
1. [电竞世界杯延期至2027年](https://s.weibo.com/weibo?q=%23%E7%94%B5%E7%AB%9E%E4%B8%96%E7%95%8C%E6%9D%AF%E5%BB%B6%E6%9C%9F%E8%87%B32027%E5%B9%B4%23) `183.4K 🔥` `NEW`
1. [谷爱凌跑步姿势](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E8%B7%91%E6%AD%A5%E5%A7%BF%E5%8A%BF%23) `181.3K 🔥` `NEW`
1. [南京机场欢迎海报错用武汉长江大桥](https://s.weibo.com/weibo?q=%23%E5%8D%97%E4%BA%AC%E6%9C%BA%E5%9C%BA%E6%AC%A2%E8%BF%8E%E6%B5%B7%E6%8A%A5%E9%94%99%E7%94%A8%E6%AD%A6%E6%B1%89%E9%95%BF%E6%B1%9F%E5%A4%A7%E6%A1%A5%23) `180.4K 🔥` `NEW`
1. [调查组通报杭州酒局事件 (Investigation team reports incident at Hangzhou Wine Bureau)](https://s.weibo.com/weibo?q=%23%E8%B0%83%E6%9F%A5%E7%BB%84%E9%80%9A%E6%8A%A5%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E4%BA%8B%E4%BB%B6%23) `13.5M 🔥` `+2354%`
1. [朱镕基同志生平](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E7%94%9F%E5%B9%B3%23) `3.0M 🔥` `+185%`
1. [朱镕基同志遗体在京火化 (Comrade Zhu Rongji's body was cremated in Beijing)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E9%81%97%E4%BD%93%E5%9C%A8%E4%BA%AC%E7%81%AB%E5%8C%96%23) `2.2M 🔥` `+132%`
1. [中国医师节致敬不平凡的你 (Chinese Doctors’ Day pays tribute to you, the extraordinary person)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%8C%BB%E5%B8%88%E8%8A%82%E8%87%B4%E6%95%AC%E4%B8%8D%E5%B9%B3%E5%87%A1%E7%9A%84%E4%BD%A0%23) `1.7M 🔥` `+179%`
1. [赵某峰郁某栋被刑拘](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%9F%90%E5%B3%B0%E9%83%81%E6%9F%90%E6%A0%8B%E8%A2%AB%E5%88%91%E6%8B%98%23) `1.7M 🔥` `+217%`
1. [我真的抠抠搜搜花了很多钱](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9C%9F%E7%9A%84%E6%8A%A0%E6%8A%A0%E6%90%9C%E6%90%9C%E8%8A%B1%E4%BA%86%E5%BE%88%E5%A4%9A%E9%92%B1%23) `282.5K 🔥` `+77%`
1. [红车误入婚车车队成主角 (The red car mistakenly enters the wedding car convoy and becomes the protagonist)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E8%BD%A6%E8%AF%AF%E5%85%A5%E5%A9%9A%E8%BD%A6%E8%BD%A6%E9%98%9F%E6%88%90%E4%B8%BB%E8%A7%92%23) `335.0K 🔥`
1. [手机价格涨20%以上 (Mobile phone prices increased by more than 20%)](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E4%BB%B7%E6%A0%BC%E6%B6%A820%25%E4%BB%A5%E4%B8%8A%23) `293.2K 🔥`
1. [龙餐馆居然有发芽土豆周边 (Dragon Restaurant actually sells sprouted potatoes)](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%E5%B1%85%E7%84%B6%E6%9C%89%E5%8F%91%E8%8A%BD%E5%9C%9F%E8%B1%86%E5%91%A8%E8%BE%B9%23) `292.3K 🔥`
1. [易立竞当面拆穿蓝盈莹](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%AB%8B%E7%AB%9E%E5%BD%93%E9%9D%A2%E6%8B%86%E7%A9%BF%E8%93%9D%E7%9B%88%E8%8E%B9%23) `291.1K 🔥`
1. [幸运咖 阴阳瑞幸](https://s.weibo.com/weibo?q=%23%E5%B9%B8%E8%BF%90%E5%92%96%20%E9%98%B4%E9%98%B3%E7%91%9E%E5%B9%B8%23) `290.7K 🔥`
1. [杭州酒局事件](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E4%BA%8B%E4%BB%B6%23) `290.4K 🔥`
1. [林志颖说小儿子可能当韩国练习生](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%97%E9%A2%96%E8%AF%B4%E5%B0%8F%E5%84%BF%E5%AD%90%E5%8F%AF%E8%83%BD%E5%BD%93%E9%9F%A9%E5%9B%BD%E7%BB%83%E4%B9%A0%E7%94%9F%23) `289.3K 🔥`
1. [张子枫长发以为内娱上新了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E6%9E%AB%E9%95%BF%E5%8F%91%E4%BB%A5%E4%B8%BA%E5%86%85%E5%A8%B1%E4%B8%8A%E6%96%B0%E4%BA%86%23) `289.2K 🔥`
1. [寒武纪员工大红包人均557万](https://s.weibo.com/weibo?q=%23%E5%AF%92%E6%AD%A6%E7%BA%AA%E5%91%98%E5%B7%A5%E5%A4%A7%E7%BA%A2%E5%8C%85%E4%BA%BA%E5%9D%87557%E4%B8%87%23) `288.4K 🔥`
1. [何炅提问谁是何炅接班人 (He Jiong asked who is He Jiong’s successor?)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E6%8F%90%E9%97%AE%E8%B0%81%E6%98%AF%E4%BD%95%E7%82%85%E6%8E%A5%E7%8F%AD%E4%BA%BA%23) `288.4K 🔥`
1. [路人制止父亲脚踹女儿被拘超200天](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E4%BA%BA%E5%88%B6%E6%AD%A2%E7%88%B6%E4%BA%B2%E8%84%9A%E8%B8%B9%E5%A5%B3%E5%84%BF%E8%A2%AB%E6%8B%98%E8%B6%85200%E5%A4%A9%23) `286.1K 🔥`
1. [林志颖说林俊杰女友很乖很腼腆 (Lin Zhiying said that JJ Lin’s girlfriend is very well-behaved and shy)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%97%E9%A2%96%E8%AF%B4%E6%9E%97%E4%BF%8A%E6%9D%B0%E5%A5%B3%E5%8F%8B%E5%BE%88%E4%B9%96%E5%BE%88%E8%85%BC%E8%85%86%23) `285.8K 🔥`
1. [刘亦菲黑西装白胸花](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E9%BB%91%E8%A5%BF%E8%A3%85%E7%99%BD%E8%83%B8%E8%8A%B1%23) `280.0K 🔥`
1. [厄尔尼诺事件大概率历史最强](https://s.weibo.com/weibo?q=%23%E5%8E%84%E5%B0%94%E5%B0%BC%E8%AF%BA%E4%BA%8B%E4%BB%B6%E5%A4%A7%E6%A6%82%E7%8E%87%E5%8E%86%E5%8F%B2%E6%9C%80%E5%BC%BA%23) `274.9K 🔥`
1. [涉侵害女性的酒局到底发生了什么 (What happened at the bar where women were assaulted?)](https://s.weibo.com/weibo?q=%23%E6%B6%89%E4%BE%B5%E5%AE%B3%E5%A5%B3%E6%80%A7%E7%9A%84%E9%85%92%E5%B1%80%E5%88%B0%E5%BA%95%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88%23) `248.5K 🔥`
1. [7岁娃亲子房熟睡掉床遭尖角割裂手肘 (7-year-old boy fell asleep in parent-child room and fell off the bed and cut his elbow on a sharp corner)](https://s.weibo.com/weibo?q=%237%E5%B2%81%E5%A8%83%E4%BA%B2%E5%AD%90%E6%88%BF%E7%86%9F%E7%9D%A1%E6%8E%89%E5%BA%8A%E9%81%AD%E5%B0%96%E8%A7%92%E5%89%B2%E8%A3%82%E6%89%8B%E8%82%98%23) `180.0K 🔥`
1. [16岁嫁51岁好莱坞男星后称遭虐待 (A 16-year-old married a 51-year-old Hollywood actor and later said he was abused)](https://s.weibo.com/weibo?q=%2316%E5%B2%81%E5%AB%8151%E5%B2%81%E5%A5%BD%E8%8E%B1%E5%9D%9E%E7%94%B7%E6%98%9F%E5%90%8E%E7%A7%B0%E9%81%AD%E8%99%90%E5%BE%85%23) `179.6K 🔥`
1. [杨国福冒用羽生结弦名义摆花篮](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%9B%BD%E7%A6%8F%E5%86%92%E7%94%A8%E7%BE%BD%E7%94%9F%E7%BB%93%E5%BC%A6%E5%90%8D%E4%B9%89%E6%91%86%E8%8A%B1%E7%AF%AE%23) `177.8K 🔥`
1. [豆瓣崩了](https://s.weibo.com/weibo?q=%23%E8%B1%86%E7%93%A3%E5%B4%A9%E4%BA%86%23) `176.2K 🔥`
1. [印度7名贫困矿工挖到17.96克拉钻石](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A67%E5%90%8D%E8%B4%AB%E5%9B%B0%E7%9F%BF%E5%B7%A5%E6%8C%96%E5%88%B017.96%E5%85%8B%E6%8B%89%E9%92%BB%E7%9F%B3%23) `174.8K 🔥`
1. [特朗普还对人民大会堂念念不忘 (Trump still misses the Great Hall of the People)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%BF%98%E5%AF%B9%E4%BA%BA%E6%B0%91%E5%A4%A7%E4%BC%9A%E5%A0%82%E5%BF%B5%E5%BF%B5%E4%B8%8D%E5%BF%98%23) `293.6K 🔥` `-24%`
1. [台风 (typhoon)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `291.9K 🔥` `-42%`
1. [刘亦菲素颜穿79.8元防晒衣](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E7%B4%A0%E9%A2%9C%E7%A9%BF79.8%E5%85%83%E9%98%B2%E6%99%92%E8%A1%A3%23) `251.5K 🔥` `-28%`
1. [法国婚姻制度致全民搭伙时代来临](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E5%A9%9A%E5%A7%BB%E5%88%B6%E5%BA%A6%E8%87%B4%E5%85%A8%E6%B0%91%E6%90%AD%E4%BC%99%E6%97%B6%E4%BB%A3%E6%9D%A5%E4%B8%B4%23) `214.8K 🔥` `-30%`
1. [贺涵PPT做得太丑了](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E6%B6%B5PPT%E5%81%9A%E5%BE%97%E5%A4%AA%E4%B8%91%E4%BA%86%23) `174.9K 🔥` `-44%`
1. [泡汤偶遇章若楠](https://s.weibo.com/weibo?q=%23%E6%B3%A1%E6%B1%A4%E5%81%B6%E9%81%87%E7%AB%A0%E8%8B%A5%E6%A5%A0%23) `174.8K 🔥` `-27%`

Updated at 2026-08-18 17:52:48

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
