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

1. [全球股市大反转](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E8%82%A1%E5%B8%82%E5%A4%A7%E5%8F%8D%E8%BD%AC%23) `1.1M 🔥` `NEW`
1. [快船队被罚3000万美元](https://s.weibo.com/weibo?q=%23%E5%BF%AB%E8%88%B9%E9%98%9F%E8%A2%AB%E7%BD%9A3000%E4%B8%87%E7%BE%8E%E5%85%83%23) `774.2K 🔥` `NEW`
1. [难怪陈意涵花少2能一直忍着不闹脾气](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E9%99%88%E6%84%8F%E6%B6%B5%E8%8A%B1%E5%B0%912%E8%83%BD%E4%B8%80%E7%9B%B4%E5%BF%8D%E7%9D%80%E4%B8%8D%E9%97%B9%E8%84%BE%E6%B0%94%23) `661.3K 🔥` `NEW`
1. [孙千跟妈妈共用一张脸](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E8%B7%9F%E5%A6%88%E5%A6%88%E5%85%B1%E7%94%A8%E4%B8%80%E5%BC%A0%E8%84%B8%23) `376.5K 🔥` `NEW`
1. [花少8 真正意义上的纯陌生人](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%20%E7%9C%9F%E6%AD%A3%E6%84%8F%E4%B9%89%E4%B8%8A%E7%9A%84%E7%BA%AF%E9%99%8C%E7%94%9F%E4%BA%BA%23) `296.3K 🔥` `NEW`
1. [沙德尔第3次登陆](https://s.weibo.com/weibo?q=%23%E6%B2%99%E5%BE%B7%E5%B0%94%E7%AC%AC3%E6%AC%A1%E7%99%BB%E9%99%86%23) `287.8K 🔥` `NEW`
1. [何超琼凌晨三点家庭早餐惊呆章泽天](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E7%90%BC%E5%87%8C%E6%99%A8%E4%B8%89%E7%82%B9%E5%AE%B6%E5%BA%AD%E6%97%A9%E9%A4%90%E6%83%8A%E5%91%86%E7%AB%A0%E6%B3%BD%E5%A4%A9%23) `283.5K 🔥` `NEW`
1. [娄艺潇被积压12年的剧要播了](https://s.weibo.com/weibo?q=%23%E5%A8%84%E8%89%BA%E6%BD%87%E8%A2%AB%E7%A7%AF%E5%8E%8B12%E5%B9%B4%E7%9A%84%E5%89%A7%E8%A6%81%E6%92%AD%E4%BA%86%23) `281.3K 🔥` `NEW`
1. [花少2在保护艺人的情况下播出](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%912%E5%9C%A8%E4%BF%9D%E6%8A%A4%E8%89%BA%E4%BA%BA%E7%9A%84%E6%83%85%E5%86%B5%E4%B8%8B%E6%92%AD%E5%87%BA%23) `259.5K 🔥` `NEW`
1. [宇树科技回应只有罚几乎没有奖](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E5%9B%9E%E5%BA%94%E5%8F%AA%E6%9C%89%E7%BD%9A%E5%87%A0%E4%B9%8E%E6%B2%A1%E6%9C%89%E5%A5%96%23) `246.8K 🔥` `NEW`
1. [保定一中称对所有学生一视同仁](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%AE%9A%E4%B8%80%E4%B8%AD%E7%A7%B0%E5%AF%B9%E6%89%80%E6%9C%89%E5%AD%A6%E7%94%9F%E4%B8%80%E8%A7%86%E5%90%8C%E4%BB%81%23) `241.9K 🔥` `NEW`
1. [神似宋威龙北电新生报到引围观](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E4%BC%BC%E5%AE%8B%E5%A8%81%E9%BE%99%E5%8C%97%E7%94%B5%E6%96%B0%E7%94%9F%E6%8A%A5%E5%88%B0%E5%BC%95%E5%9B%B4%E8%A7%82%23) `220.0K 🔥` `NEW`
1. [戚薇回应做AI授权是因为缺钱](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%87%E5%9B%9E%E5%BA%94%E5%81%9AAI%E6%8E%88%E6%9D%83%E6%98%AF%E5%9B%A0%E4%B8%BA%E7%BC%BA%E9%92%B1%23) `218.5K 🔥` `NEW`
1. [金价再迎连续暴跌](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%86%8D%E8%BF%8E%E8%BF%9E%E7%BB%AD%E6%9A%B4%E8%B7%8C%23) `218.5K 🔥` `NEW`
1. [演员刘兆铭去世](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E5%88%98%E5%85%86%E9%93%AD%E5%8E%BB%E4%B8%96%23) `218.5K 🔥` `NEW`
1. [告别机顶盒](https://s.weibo.com/weibo?q=%23%E5%91%8A%E5%88%AB%E6%9C%BA%E9%A1%B6%E7%9B%92%23) `218.3K 🔥` `NEW`
1. [内娱明星粉丝名](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E6%98%8E%E6%98%9F%E7%B2%89%E4%B8%9D%E5%90%8D%23) `172.5K 🔥` `NEW`
1. [布云朝克特大满贯正赛首胜](https://s.weibo.com/weibo?q=%23%E5%B8%83%E4%BA%91%E6%9C%9D%E5%85%8B%E7%89%B9%E5%A4%A7%E6%BB%A1%E8%B4%AF%E6%AD%A3%E8%B5%9B%E9%A6%96%E8%83%9C%23) `165.5K 🔥` `NEW`
1. [理想MEGA二手价下跌](https://s.weibo.com/weibo?q=%23%E7%90%86%E6%83%B3MEGA%E4%BA%8C%E6%89%8B%E4%BB%B7%E4%B8%8B%E8%B7%8C%23) `162.0K 🔥` `NEW`
1. [历史不计入分数意味着什么](https://s.weibo.com/weibo?q=%23%E5%8E%86%E5%8F%B2%E4%B8%8D%E8%AE%A1%E5%85%A5%E5%88%86%E6%95%B0%E6%84%8F%E5%91%B3%E7%9D%80%E4%BB%80%E4%B9%88%23) `156.2K 🔥` `NEW`
1. [王欣瑜卡林斯卡娅决胜盘](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AC%A3%E7%91%9C%E5%8D%A1%E6%9E%97%E6%96%AF%E5%8D%A1%E5%A8%85%E5%86%B3%E8%83%9C%E7%9B%98%23) `155.8K 🔥` `NEW`
1. [井柏然孙千有效播剧](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%AD%99%E5%8D%83%E6%9C%89%E6%95%88%E6%92%AD%E5%89%A7%23) `155.4K 🔥` `NEW`
1. [大连通报扫黑除恶专项行动](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%BF%9E%E9%80%9A%E6%8A%A5%E6%89%AB%E9%BB%91%E9%99%A4%E6%81%B6%E4%B8%93%E9%A1%B9%E8%A1%8C%E5%8A%A8%23) `155.2K 🔥` `NEW`
1. [明星夫妇体验尊界挥手关门翻车](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%9F%E5%A4%AB%E5%A6%87%E4%BD%93%E9%AA%8C%E5%B0%8A%E7%95%8C%E6%8C%A5%E6%89%8B%E5%85%B3%E9%97%A8%E7%BF%BB%E8%BD%A6%23) `155.1K 🔥` `NEW`
1. [湖南一小学二年级只有一个学生](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E4%B8%80%E5%B0%8F%E5%AD%A6%E4%BA%8C%E5%B9%B4%E7%BA%A7%E5%8F%AA%E6%9C%89%E4%B8%80%E4%B8%AA%E5%AD%A6%E7%94%9F%23) `125.5K 🔥` `NEW`
1. [李月汝回应缺席世界杯](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%9C%88%E6%B1%9D%E5%9B%9E%E5%BA%94%E7%BC%BA%E5%B8%AD%E4%B8%96%E7%95%8C%E6%9D%AF%23) `125.0K 🔥` `NEW`
1. [姆巴佩成黑帮绑架目标](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%88%90%E9%BB%91%E5%B8%AE%E7%BB%91%E6%9E%B6%E7%9B%AE%E6%A0%87%23) `118.4K 🔥` `NEW`
1. [成毅工作室好熟练的针法](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%A5%BD%E7%86%9F%E7%BB%83%E7%9A%84%E9%92%88%E6%B3%95%23) `109.5K 🔥` `NEW`
1. [北戴河一餐厅广告语被指歧视女性](https://s.weibo.com/weibo?q=%23%E5%8C%97%E6%88%B4%E6%B2%B3%E4%B8%80%E9%A4%90%E5%8E%85%E5%B9%BF%E5%91%8A%E8%AF%AD%E8%A2%AB%E6%8C%87%E6%AD%A7%E8%A7%86%E5%A5%B3%E6%80%A7%23) `104.4K 🔥` `NEW`
1. [韩国爱豆和淘宝客服的聊天记录](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%88%B1%E8%B1%86%E5%92%8C%E6%B7%98%E5%AE%9D%E5%AE%A2%E6%9C%8D%E7%9A%84%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `99.6K 🔥` `NEW`
1. [张一山 没20年烟龄演不出这感觉](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%B8%80%E5%B1%B1%20%E6%B2%A120%E5%B9%B4%E7%83%9F%E9%BE%84%E6%BC%94%E4%B8%8D%E5%87%BA%E8%BF%99%E6%84%9F%E8%A7%89%23) `92.9K 🔥` `NEW`
1. [AI爆火后35岁变成香饽饽了](https://s.weibo.com/weibo?q=%23AI%E7%88%86%E7%81%AB%E5%90%8E35%E5%B2%81%E5%8F%98%E6%88%90%E9%A6%99%E9%A5%BD%E9%A5%BD%E4%BA%86%23) `92.0K 🔥` `NEW`
1. [开局之年看山西](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B1%80%E4%B9%8B%E5%B9%B4%E7%9C%8B%E5%B1%B1%E8%A5%BF%23) `685.6K 🔥` `+227%`
1. [刘宇宁邀你瓜分百万超市卡](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E9%82%80%E4%BD%A0%E7%93%9C%E5%88%86%E7%99%BE%E4%B8%87%E8%B6%85%E5%B8%82%E5%8D%A1%23) `676.9K 🔥` `+306%`
1. [好讨厌需要靠争抢来的东西](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E8%AE%A8%E5%8E%8C%E9%9C%80%E8%A6%81%E9%9D%A0%E4%BA%89%E6%8A%A2%E6%9D%A5%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `572.5K 🔥` `+63%`
1. [微信新功能专治各种看不见](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E6%96%B0%E5%8A%9F%E8%83%BD%E4%B8%93%E6%B2%BB%E5%90%84%E7%A7%8D%E7%9C%8B%E4%B8%8D%E8%A7%81%23) `343.1K 🔥` `+31%`
1. [李月汝护照遗失缺席世界杯](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%9C%88%E6%B1%9D%E6%8A%A4%E7%85%A7%E9%81%97%E5%A4%B1%E7%BC%BA%E5%B8%AD%E4%B8%96%E7%95%8C%E6%9D%AF%23) `320.6K 🔥` `+252%`
1. [家长在班级群自报干部身份 (Parents self-report their status as cadres in the class group)](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E5%9C%A8%E7%8F%AD%E7%BA%A7%E7%BE%A4%E8%87%AA%E6%8A%A5%E5%B9%B2%E9%83%A8%E8%BA%AB%E4%BB%BD%23) `283.8K 🔥` `+345%`
1. [乌克兰两部门在基辅交火](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%8B%E5%85%B0%E4%B8%A4%E9%83%A8%E9%97%A8%E5%9C%A8%E5%9F%BA%E8%BE%85%E4%BA%A4%E7%81%AB%23) `261.8K 🔥` `+264%`
1. [独居真的只适合个别人](https://s.weibo.com/weibo?q=%23%E7%8B%AC%E5%B1%85%E7%9C%9F%E7%9A%84%E5%8F%AA%E9%80%82%E5%90%88%E4%B8%AA%E5%88%AB%E4%BA%BA%23) `255.4K 🔥` `+277%`
1. [辽宁中考 历史不计入总分](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E4%B8%AD%E8%80%83%20%E5%8E%86%E5%8F%B2%E4%B8%8D%E8%AE%A1%E5%85%A5%E6%80%BB%E5%88%86%23) `191.1K 🔥` `+215%`
1. [突然发现有车之后心态变了 (My mentality changed after I suddenly discovered that I had a car.)](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E6%9C%89%E8%BD%A6%E4%B9%8B%E5%90%8E%E5%BF%83%E6%80%81%E5%8F%98%E4%BA%86%23) `177.0K 🔥` `+214%`
1. [为什么爱流向不缺爱的人](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%88%B1%E6%B5%81%E5%90%91%E4%B8%8D%E7%BC%BA%E7%88%B1%E7%9A%84%E4%BA%BA%23) `156.6K 🔥` `+143%`
1. [吉隆泥石流遇难21人失联541人](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E6%B3%A5%E7%9F%B3%E6%B5%81%E9%81%87%E9%9A%BE21%E4%BA%BA%E5%A4%B1%E8%81%94541%E4%BA%BA%23) `156.5K 🔥` `+144%`
1. [幼儿园上午开学下午停办](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E5%84%BF%E5%9B%AD%E4%B8%8A%E5%8D%88%E5%BC%80%E5%AD%A6%E4%B8%8B%E5%8D%88%E5%81%9C%E5%8A%9E%23) `150.8K 🔥` `+136%`
1. [每个中国人都该记住0903 (Every Chinese should remember 0903)](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E4%B8%AA%E4%B8%AD%E5%9B%BD%E4%BA%BA%E9%83%BD%E8%AF%A5%E8%AE%B0%E4%BD%8F0903%23) `147.0K 🔥` `+161%`
1. [命运不会让你错过属于你的东西](https://s.weibo.com/weibo?q=%23%E5%91%BD%E8%BF%90%E4%B8%8D%E4%BC%9A%E8%AE%A9%E4%BD%A0%E9%94%99%E8%BF%87%E5%B1%9E%E4%BA%8E%E4%BD%A0%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `143.6K 🔥` `+155%`
1. [没有性生活也有必要打HPV疫苗 (It is necessary to get HPV vaccine even if you don’t have sex)](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%9C%89%E6%80%A7%E7%94%9F%E6%B4%BB%E4%B9%9F%E6%9C%89%E5%BF%85%E8%A6%81%E6%89%93HPV%E7%96%AB%E8%8B%97%23) `126.1K 🔥` `+110%`
1. [中国抗日战争拯救人类文明](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%8A%97%E6%97%A5%E6%88%98%E4%BA%89%E6%8B%AF%E6%95%91%E4%BA%BA%E7%B1%BB%E6%96%87%E6%98%8E%23) `121.7K 🔥` `+117%`
1. [priest入围2027纽曼华语文学奖](https://s.weibo.com/weibo?q=%23priest%E5%85%A5%E5%9B%B42027%E7%BA%BD%E6%9B%BC%E5%8D%8E%E8%AF%AD%E6%96%87%E5%AD%A6%E5%A5%96%23) `118.5K 🔥` `+108%`
1. [宁静花少2偶像来了人设对比](https://s.weibo.com/weibo?q=%23%E5%AE%81%E9%9D%99%E8%8A%B1%E5%B0%912%E5%81%B6%E5%83%8F%E6%9D%A5%E4%BA%86%E4%BA%BA%E8%AE%BE%E5%AF%B9%E6%AF%94%23) `107.1K 🔥` `+81%`

Updated at 2026-09-03 08:20:51

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
