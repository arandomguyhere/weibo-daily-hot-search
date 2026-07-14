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

1. [阿根廷主帅回击请愿逐出阿根廷 (Argentina coach fires back on petition to be expelled from Argentina)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%B8%BB%E5%B8%85%E5%9B%9E%E5%87%BB%E8%AF%B7%E6%84%BF%E9%80%90%E5%87%BA%E9%98%BF%E6%A0%B9%E5%BB%B7%23) `864.3K 🔥` `NEW`
1. [风雨中挺立起守护人民的主心骨](https://s.weibo.com/weibo?q=%23%E9%A3%8E%E9%9B%A8%E4%B8%AD%E6%8C%BA%E7%AB%8B%E8%B5%B7%E5%AE%88%E6%8A%A4%E4%BA%BA%E6%B0%91%E7%9A%84%E4%B8%BB%E5%BF%83%E9%AA%A8%23) `773.7K 🔥` `NEW`
1. [张碧晨弃赛声明](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%A2%A7%E6%99%A8%E5%BC%83%E8%B5%9B%E5%A3%B0%E6%98%8E%23) `773.0K 🔥` `NEW`
1. [哈兰德买买买](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E4%B9%B0%E4%B9%B0%E4%B9%B0%23) `653.7K 🔥` `NEW`
1. [在上海静安大融城偶遇莫离](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E4%B8%8A%E6%B5%B7%E9%9D%99%E5%AE%89%E5%A4%A7%E8%9E%8D%E5%9F%8E%E5%81%B6%E9%81%87%E8%8E%AB%E7%A6%BB%23) `608.3K 🔥` `NEW`
1. [20岁伴娘遭婚闹致伤残获赔23万](https://s.weibo.com/weibo?q=%2320%E5%B2%81%E4%BC%B4%E5%A8%98%E9%81%AD%E5%A9%9A%E9%97%B9%E8%87%B4%E4%BC%A4%E6%AE%8B%E8%8E%B7%E8%B5%9423%E4%B8%87%23) `585.0K 🔥` `NEW`
1. [邹市明2亿理财亏损始末](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E2%E4%BA%BF%E7%90%86%E8%B4%A2%E4%BA%8F%E6%8D%9F%E5%A7%8B%E6%9C%AB%23) `508.2K 🔥` `NEW`
1. [家有儿女放在今天be like](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E6%9C%89%E5%84%BF%E5%A5%B3%E6%94%BE%E5%9C%A8%E4%BB%8A%E5%A4%A9be%20like%23) `501.7K 🔥` `NEW`
1. [易烊千玺 连头发都是爱你的形状](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%20%E8%BF%9E%E5%A4%B4%E5%8F%91%E9%83%BD%E6%98%AF%E7%88%B1%E4%BD%A0%E7%9A%84%E5%BD%A2%E7%8A%B6%23) `498.3K 🔥` `NEW`
1. [独居的坏处](https://s.weibo.com/weibo?q=%23%E7%8B%AC%E5%B1%85%E7%9A%84%E5%9D%8F%E5%A4%84%23) `495.8K 🔥` `NEW`
1. [沈阳暴雨 (Heavy rain in Shenyang)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E6%9A%B4%E9%9B%A8%23) `495.1K 🔥` `NEW`
1. [被长期主义的消费观震惊到了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%95%BF%E6%9C%9F%E4%B8%BB%E4%B9%89%E7%9A%84%E6%B6%88%E8%B4%B9%E8%A7%82%E9%9C%87%E6%83%8A%E5%88%B0%E4%BA%86%23) `478.7K 🔥` `NEW`
1. [巴威已在陆地滞留60小时](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E5%B7%B2%E5%9C%A8%E9%99%86%E5%9C%B0%E6%BB%9E%E7%95%9960%E5%B0%8F%E6%97%B6%23) `475.6K 🔥` `NEW`
1. [女子怀二胎工资从7000降到4500](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%80%80%E4%BA%8C%E8%83%8E%E5%B7%A5%E8%B5%84%E4%BB%8E7000%E9%99%8D%E5%88%B04500%23) `475.1K 🔥` `NEW`
1. [汪东城自曝与初恋分手原因](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E4%B8%9C%E5%9F%8E%E8%87%AA%E6%9B%9D%E4%B8%8E%E5%88%9D%E6%81%8B%E5%88%86%E6%89%8B%E5%8E%9F%E5%9B%A0%23) `473.0K 🔥` `NEW`
1. [AI脸 恐怖谷效应](https://s.weibo.com/weibo?q=%23AI%E8%84%B8%20%E6%81%90%E6%80%96%E8%B0%B7%E6%95%88%E5%BA%94%23) `459.8K 🔥` `NEW`
1. [哈兰德希望英格兰战胜阿根廷](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%B8%8C%E6%9C%9B%E8%8B%B1%E6%A0%BC%E5%85%B0%E6%88%98%E8%83%9C%E9%98%BF%E6%A0%B9%E5%BB%B7%23) `408.9K 🔥` `NEW`
1. [田曦薇傣装盘发造型](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%82%A3%E8%A3%85%E7%9B%98%E5%8F%91%E9%80%A0%E5%9E%8B%23) `346.1K 🔥` `NEW`
1. [灿如繁星剧粉把超话吵爆了](https://s.weibo.com/weibo?q=%23%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%E5%89%A7%E7%B2%89%E6%8A%8A%E8%B6%85%E8%AF%9D%E5%90%B5%E7%88%86%E4%BA%86%23) `318.2K 🔥` `NEW`
1. [名创优品致歉](https://s.weibo.com/weibo?q=%23%E5%90%8D%E5%88%9B%E4%BC%98%E5%93%81%E8%87%B4%E6%AD%89%23) `311.1K 🔥` `NEW`
1. [韩女减重小贴士 (Weight loss tips for Korean women)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%A5%B3%E5%87%8F%E9%87%8D%E5%B0%8F%E8%B4%B4%E5%A3%AB%23) `303.9K 🔥` `NEW`
1. [半熟恋人](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E7%86%9F%E6%81%8B%E4%BA%BA%23) `297.1K 🔥` `NEW`
1. [一万块钱可以花多久](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%87%E5%9D%97%E9%92%B1%E5%8F%AF%E4%BB%A5%E8%8A%B1%E5%A4%9A%E4%B9%85%23) `287.0K 🔥` `NEW`
1. [田曦薇机场假装粉丝拍王安宇](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%9C%BA%E5%9C%BA%E5%81%87%E8%A3%85%E7%B2%89%E4%B8%9D%E6%8B%8D%E7%8E%8B%E5%AE%89%E5%AE%87%23) `250.4K 🔥` `NEW`
1. [小猫一气之下怒吃两口冻干](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E4%B8%80%E6%B0%94%E4%B9%8B%E4%B8%8B%E6%80%92%E5%90%83%E4%B8%A4%E5%8F%A3%E5%86%BB%E5%B9%B2%23) `244.9K 🔥` `NEW`
1. [王橹杰出发运动会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%87%BA%E5%8F%91%E8%BF%90%E5%8A%A8%E4%BC%9A%23) `239.1K 🔥` `NEW`
1. [杨瀚森犀利突破上篮](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%80%9A%E6%A3%AE%E7%8A%80%E5%88%A9%E7%AA%81%E7%A0%B4%E4%B8%8A%E7%AF%AE%23) `225.3K 🔥` `NEW`
1. [王源TOP张峻豪TMEA同台](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90TOP%E5%BC%A0%E5%B3%BB%E8%B1%AATMEA%E5%90%8C%E5%8F%B0%23) `220.0K 🔥` `NEW`
1. [无法接受给领导打扫办公室](https://s.weibo.com/weibo?q=%23%E6%97%A0%E6%B3%95%E6%8E%A5%E5%8F%97%E7%BB%99%E9%A2%86%E5%AF%BC%E6%89%93%E6%89%AB%E5%8A%9E%E5%85%AC%E5%AE%A4%23) `200.7K 🔥` `NEW`
1. [王玉雯嫌弃到翻白眼](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E5%AB%8C%E5%BC%83%E5%88%B0%E7%BF%BB%E7%99%BD%E7%9C%BC%23) `197.6K 🔥` `NEW`
1. [赤峰一民宿禁止夫妻情侣入住 (Chifeng B&B prohibits couples from staying)](https://s.weibo.com/weibo?q=%23%E8%B5%A4%E5%B3%B0%E4%B8%80%E6%B0%91%E5%AE%BF%E7%A6%81%E6%AD%A2%E5%A4%AB%E5%A6%BB%E6%83%85%E4%BE%A3%E5%85%A5%E4%BD%8F%23) `193.4K 🔥` `NEW`
1. [易烊千玺好多东西都是粉色的](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%A5%BD%E5%A4%9A%E4%B8%9C%E8%A5%BF%E9%83%BD%E6%98%AF%E7%B2%89%E8%89%B2%E7%9A%84%23) `189.9K 🔥` `NEW`
1. [百花杀](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%23) `189.2K 🔥` `NEW`
1. [柳周cp约会](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E5%91%A8cp%E7%BA%A6%E4%BC%9A%23) `183.7K 🔥` `NEW`
1. [AI时代最危险的岗位是什么](https://s.weibo.com/weibo?q=%23AI%E6%97%B6%E4%BB%A3%E6%9C%80%E5%8D%B1%E9%99%A9%E7%9A%84%E5%B2%97%E4%BD%8D%E6%98%AF%E4%BB%80%E4%B9%88%23) `183.6K 🔥` `NEW`
1. [乐事回应薯片中被曝出现蓝色异物](https://s.weibo.com/weibo?q=%23%E4%B9%90%E4%BA%8B%E5%9B%9E%E5%BA%94%E8%96%AF%E7%89%87%E4%B8%AD%E8%A2%AB%E6%9B%9D%E5%87%BA%E7%8E%B0%E8%93%9D%E8%89%B2%E5%BC%82%E7%89%A9%23) `1.2M 🔥` `+214%`
1. [小米汽车紧急避险](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%E7%B4%A7%E6%80%A5%E9%81%BF%E9%99%A9%23) `476.5K 🔥` `+194%`
1. [副局长自购10亿token月费20多](https://s.weibo.com/weibo?q=%23%E5%89%AF%E5%B1%80%E9%95%BF%E8%87%AA%E8%B4%AD10%E4%BA%BFtoken%E6%9C%88%E8%B4%B920%E5%A4%9A%23) `511.1K 🔥`
1. [法国男子来上海出差背了一台空调回国](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E7%94%B7%E5%AD%90%E6%9D%A5%E4%B8%8A%E6%B5%B7%E5%87%BA%E5%B7%AE%E8%83%8C%E4%BA%86%E4%B8%80%E5%8F%B0%E7%A9%BA%E8%B0%83%E5%9B%9E%E5%9B%BD%23) `365.0K 🔥`
1. [种地吧](https://s.weibo.com/weibo?q=%23%E7%A7%8D%E5%9C%B0%E5%90%A7%23) `183.6K 🔥`
1. [乐事 蓝色薯片 (Lay's Blue Potato Chips)](https://s.weibo.com/weibo?q=%23%E4%B9%90%E4%BA%8B%20%E8%93%9D%E8%89%B2%E8%96%AF%E7%89%87%23) `754.3K 🔥` `-30%`
1. [超250万人请愿将阿根廷逐出世界杯](https://s.weibo.com/weibo?q=%23%E8%B6%85250%E4%B8%87%E4%BA%BA%E8%AF%B7%E6%84%BF%E5%B0%86%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%80%90%E5%87%BA%E4%B8%96%E7%95%8C%E6%9D%AF%23) `573.5K 🔥` `-36%`
1. [张雅琪回应中餐厅表现争议 (Zhang Yaqi responds to Chinese restaurant performance controversy)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E5%9B%9E%E5%BA%94%E4%B8%AD%E9%A4%90%E5%8E%85%E8%A1%A8%E7%8E%B0%E4%BA%89%E8%AE%AE%23) `511.2K 🔥` `-45%`
1. [马兴瑞被双开 (Ma Xingrui was double kicked)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%85%B4%E7%91%9E%E8%A2%AB%E5%8F%8C%E5%BC%80%23) `505.4K 🔥` `-67%`
1. [女子把绿豆汤当水喝致脑出血](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8A%8A%E7%BB%BF%E8%B1%86%E6%B1%A4%E5%BD%93%E6%B0%B4%E5%96%9D%E8%87%B4%E8%84%91%E5%87%BA%E8%A1%80%23) `484.7K 🔥` `-49%`
1. [周子瑜不与JYP续约](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%AD%90%E7%91%9C%E4%B8%8D%E4%B8%8EJYP%E7%BB%AD%E7%BA%A6%23) `309.0K 🔥` `-36%`
1. [白鹿莫离被删戏编剧证实](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%8E%AB%E7%A6%BB%E8%A2%AB%E5%88%A0%E6%88%8F%E7%BC%96%E5%89%A7%E8%AF%81%E5%AE%9E%23) `303.9K 🔥` `-35%`
1. [中国人一旦吃饱就触发善良人格](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E4%B8%80%E6%97%A6%E5%90%83%E9%A5%B1%E5%B0%B1%E8%A7%A6%E5%8F%91%E5%96%84%E8%89%AF%E4%BA%BA%E6%A0%BC%23) `302.9K 🔥` `-63%`
1. [歌手2026突围名单](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%E7%AA%81%E5%9B%B4%E5%90%8D%E5%8D%95%23) `302.8K 🔥` `-60%`
1. [俞敏洪回应明明天权孙东旭合伙](https://s.weibo.com/weibo?q=%23%E4%BF%9E%E6%95%8F%E6%B4%AA%E5%9B%9E%E5%BA%94%E6%98%8E%E6%98%8E%E5%A4%A9%E6%9D%83%E5%AD%99%E4%B8%9C%E6%97%AD%E5%90%88%E4%BC%99%23) `212.0K 🔥` `-59%`
1. [龙蟒归队 军心大定](https://s.weibo.com/weibo?q=%23%E9%BE%99%E8%9F%92%E5%BD%92%E9%98%9F%20%E5%86%9B%E5%BF%83%E5%A4%A7%E5%AE%9A%23) `184.6K 🔥` `-29%`

Updated at 2026-07-14 14:24:23

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
