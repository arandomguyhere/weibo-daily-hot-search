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

1. [网警披露一起未履行个人信息保护义务案 (Internet police disclose a case of failure to fulfill personal information protection obligations)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E8%AD%A6%E6%8A%AB%E9%9C%B2%E4%B8%80%E8%B5%B7%E6%9C%AA%E5%B1%A5%E8%A1%8C%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF%E4%BF%9D%E6%8A%A4%E4%B9%89%E5%8A%A1%E6%A1%88%23) `1.3M 🔥` `NEW`
1. [白鹿没有去碰场外的声音](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%B2%A1%E6%9C%89%E5%8E%BB%E7%A2%B0%E5%9C%BA%E5%A4%96%E7%9A%84%E5%A3%B0%E9%9F%B3%23) `1.1M 🔥` `NEW`
1. [咪咕当你四十天的世界杯看球搭子](https://s.weibo.com/weibo?q=%23%E5%92%AA%E5%92%95%E5%BD%93%E4%BD%A0%E5%9B%9B%E5%8D%81%E5%A4%A9%E7%9A%84%E4%B8%96%E7%95%8C%E6%9D%AF%E7%9C%8B%E7%90%83%E6%90%AD%E5%AD%90%23) `858.7K 🔥` `NEW`
1. [日本炸鸡店一锅油反复用66年](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%82%B8%E9%B8%A1%E5%BA%97%E4%B8%80%E9%94%85%E6%B2%B9%E5%8F%8D%E5%A4%8D%E7%94%A866%E5%B9%B4%23) `845.1K 🔥` `NEW`
1. [二手燃油车价格大跳水](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E6%89%8B%E7%87%83%E6%B2%B9%E8%BD%A6%E4%BB%B7%E6%A0%BC%E5%A4%A7%E8%B7%B3%E6%B0%B4%23) `831.9K 🔥` `NEW`
1. [抓特务](https://s.weibo.com/weibo?q=%23%E6%8A%93%E7%89%B9%E5%8A%A1%23) `822.2K 🔥` `NEW`
1. [刘亦菲爷爷奶奶爸爸妈妈都有百科](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E7%88%B7%E7%88%B7%E5%A5%B6%E5%A5%B6%E7%88%B8%E7%88%B8%E5%A6%88%E5%A6%88%E9%83%BD%E6%9C%89%E7%99%BE%E7%A7%91%23) `820.2K 🔥` `NEW`
1. [金银终于猛涨](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%93%B6%E7%BB%88%E4%BA%8E%E7%8C%9B%E6%B6%A8%23) `812.2K 🔥` `NEW`
1. [泰国公主帕查拉吉迪雅帕逝世](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E5%85%AC%E4%B8%BB%E5%B8%95%E6%9F%A5%E6%8B%89%E5%90%89%E8%BF%AA%E9%9B%85%E5%B8%95%E9%80%9D%E4%B8%96%23) `783.9K 🔥` `NEW`
1. [白鹿好实在的女明星](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%A5%BD%E5%AE%9E%E5%9C%A8%E7%9A%84%E5%A5%B3%E6%98%8E%E6%98%9F%23) `676.2K 🔥` `NEW`
1. [张新成丁禹兮身材被审判 (Zhang Xincheng and Ding Yuxi were put on trial for their figures)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%96%B0%E6%88%90%E4%B8%81%E7%A6%B9%E5%85%AE%E8%BA%AB%E6%9D%90%E8%A2%AB%E5%AE%A1%E5%88%A4%23) `632.3K 🔥` `NEW`
1. [刘亦菲父亲是驻外外交官兼大学教授](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E7%88%B6%E4%BA%B2%E6%98%AF%E9%A9%BB%E5%A4%96%E5%A4%96%E4%BA%A4%E5%AE%98%E5%85%BC%E5%A4%A7%E5%AD%A6%E6%95%99%E6%8E%88%23) `415.3K 🔥` `NEW`
1. [谢娜中年圆梦后开巡演背刺了谁](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E4%B8%AD%E5%B9%B4%E5%9C%86%E6%A2%A6%E5%90%8E%E5%BC%80%E5%B7%A1%E6%BC%94%E8%83%8C%E5%88%BA%E4%BA%86%E8%B0%81%23) `411.4K 🔥` `NEW`
1. [亲密关系 心理承载力](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E5%AF%86%E5%85%B3%E7%B3%BB%20%E5%BF%83%E7%90%86%E6%89%BF%E8%BD%BD%E5%8A%9B%23) `357.1K 🔥` `NEW`
1. [马頔装修费要溢出来了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E8%A3%85%E4%BF%AE%E8%B4%B9%E8%A6%81%E6%BA%A2%E5%87%BA%E6%9D%A5%E4%BA%86%23) `352.9K 🔥` `NEW`
1. [迪丽热巴 陈飞宇](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%20%E9%99%88%E9%A3%9E%E5%AE%87%23) `352.6K 🔥` `NEW`
1. [女子住酒店凌晨发现身边躺陌生男子](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BD%8F%E9%85%92%E5%BA%97%E5%87%8C%E6%99%A8%E5%8F%91%E7%8E%B0%E8%BA%AB%E8%BE%B9%E8%BA%BA%E9%99%8C%E7%94%9F%E7%94%B7%E5%AD%90%23) `352.0K 🔥` `NEW`
1. [韩国vs捷克](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BDvs%E6%8D%B7%E5%85%8B%23) `351.7K 🔥` `NEW`
1. [丁禹兮这一晚上好忙](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E8%BF%99%E4%B8%80%E6%99%9A%E4%B8%8A%E5%A5%BD%E5%BF%99%23) `339.3K 🔥` `NEW`
1. [钟意长生没入选亚运会](https://s.weibo.com/weibo?q=%23%E9%92%9F%E6%84%8F%E9%95%BF%E7%94%9F%E6%B2%A1%E5%85%A5%E9%80%89%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `336.8K 🔥` `NEW`
1. [美外交官在缅甸死亡 (US diplomat dies in Myanmar)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%A4%96%E4%BA%A4%E5%AE%98%E5%9C%A8%E7%BC%85%E7%94%B8%E6%AD%BB%E4%BA%A1%23) `323.6K 🔥` `NEW`
1. [陈飞宇与热巴恋情风波后首现身](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%E4%B8%8E%E7%83%AD%E5%B7%B4%E6%81%8B%E6%83%85%E9%A3%8E%E6%B3%A2%E5%90%8E%E9%A6%96%E7%8E%B0%E8%BA%AB%23) `316.3K 🔥` `NEW`
1. [SpaceX确定创史上最大IPO](https://s.weibo.com/weibo?q=%23SpaceX%E7%A1%AE%E5%AE%9A%E5%88%9B%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%A4%A7IPO%23) `257.8K 🔥` `NEW`
1. [李登科曝Lisa世界杯不靠三公子](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%99%BB%E7%A7%91%E6%9B%9DLisa%E4%B8%96%E7%95%8C%E6%9D%AF%E4%B8%8D%E9%9D%A0%E4%B8%89%E5%85%AC%E5%AD%90%23) `244.5K 🔥` `NEW`
1. [胖东来回应网传员工工资](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E5%9B%9E%E5%BA%94%E7%BD%91%E4%BC%A0%E5%91%98%E5%B7%A5%E5%B7%A5%E8%B5%84%23) `214.9K 🔥` `NEW`
1. [我国海域发现谍龟谍鱼窃密](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%B5%B7%E5%9F%9F%E5%8F%91%E7%8E%B0%E8%B0%8D%E9%BE%9F%E8%B0%8D%E9%B1%BC%E7%AA%83%E5%AF%86%23) `207.2K 🔥` `NEW`
1. [印度医考泄题200万人成绩取消](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%8C%BB%E8%80%83%E6%B3%84%E9%A2%98200%E4%B8%87%E4%BA%BA%E6%88%90%E7%BB%A9%E5%8F%96%E6%B6%88%23) `204.2K 🔥` `NEW`
1. [12岁女孩喊累一年确诊全身器官缺氧](https://s.weibo.com/weibo?q=%2312%E5%B2%81%E5%A5%B3%E5%AD%A9%E5%96%8A%E7%B4%AF%E4%B8%80%E5%B9%B4%E7%A1%AE%E8%AF%8A%E5%85%A8%E8%BA%AB%E5%99%A8%E5%AE%98%E7%BC%BA%E6%B0%A7%23) `202.2K 🔥` `NEW`
1. [女大学生因腹泻等入院6小时后死亡](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%9B%A0%E8%85%B9%E6%B3%BB%E7%AD%89%E5%85%A5%E9%99%A26%E5%B0%8F%E6%97%B6%E5%90%8E%E6%AD%BB%E4%BA%A1%23) `200.1K 🔥` `NEW`
1. [生病就去找太医唐艺昕真听进去了](https://s.weibo.com/weibo?q=%23%E7%94%9F%E7%97%85%E5%B0%B1%E5%8E%BB%E6%89%BE%E5%A4%AA%E5%8C%BB%E5%94%90%E8%89%BA%E6%98%95%E7%9C%9F%E5%90%AC%E8%BF%9B%E5%8E%BB%E4%BA%86%23) `195.5K 🔥` `NEW`
1. [韩国男记者世界杯前线遭美女亲吻 (South Korean male reporter was kissed by a beautiful woman on the front line of the World Cup)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%94%B7%E8%AE%B0%E8%80%85%E4%B8%96%E7%95%8C%E6%9D%AF%E5%89%8D%E7%BA%BF%E9%81%AD%E7%BE%8E%E5%A5%B3%E4%BA%B2%E5%90%BB%23) `181.1K 🔥` `NEW`
1. [世界杯开幕式 (world cup opening ceremony)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%BC%80%E5%B9%95%E5%BC%8F%23) `2.5M 🔥` `+516%`
1. [世界杯冠军和蒙牛有个秘密](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%A0%E5%86%9B%E5%92%8C%E8%92%99%E7%89%9B%E6%9C%89%E4%B8%AA%E7%A7%98%E5%AF%86%23) `1.3M 🔥` `+223%`
1. [AI短片效果看到起鸡皮疙瘩了](https://s.weibo.com/weibo?q=%23AI%E7%9F%AD%E7%89%87%E6%95%88%E6%9E%9C%E7%9C%8B%E5%88%B0%E8%B5%B7%E9%B8%A1%E7%9A%AE%E7%96%99%E7%98%A9%E4%BA%86%23) `837.6K 🔥` `+282%`
1. [能考85分偏考84分最后老师给了83](https://s.weibo.com/weibo?q=%23%E8%83%BD%E8%80%8385%E5%88%86%E5%81%8F%E8%80%8384%E5%88%86%E6%9C%80%E5%90%8E%E8%80%81%E5%B8%88%E7%BB%99%E4%BA%8683%23) `512.4K 🔥` `+505%`
1. [张元英身材就一个帽子厚度](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E8%BA%AB%E6%9D%90%E5%B0%B1%E4%B8%80%E4%B8%AA%E5%B8%BD%E5%AD%90%E5%8E%9A%E5%BA%A6%23) `351.9K 🔥` `+61%`
1. [每月3000雇夫妻看管祖宅遭鸠占鹊巢](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E6%9C%883000%E9%9B%87%E5%A4%AB%E5%A6%BB%E7%9C%8B%E7%AE%A1%E7%A5%96%E5%AE%85%E9%81%AD%E9%B8%A0%E5%8D%A0%E9%B9%8A%E5%B7%A2%23) `351.6K 🔥` `+44%`
1. [世界杯 (world cup)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `310.5K 🔥` `+64%`
1. [NBA主持人让泰勒斯威夫特滚出去](https://s.weibo.com/weibo?q=%23NBA%E4%B8%BB%E6%8C%81%E4%BA%BA%E8%AE%A9%E6%B3%B0%E5%8B%92%E6%96%AF%E5%A8%81%E5%A4%AB%E7%89%B9%E6%BB%9A%E5%87%BA%E5%8E%BB%23) `309.1K 🔥` `+150%`
1. [南部档案一集有三十分钟的二人转](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88%E4%B8%80%E9%9B%86%E6%9C%89%E4%B8%89%E5%8D%81%E5%88%86%E9%92%9F%E7%9A%84%E4%BA%8C%E4%BA%BA%E8%BD%AC%23) `200.8K 🔥` `+61%`
1. [伊能静秦昊不在一个图层](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E7%A7%A6%E6%98%8A%E4%B8%8D%E5%9C%A8%E4%B8%80%E4%B8%AA%E5%9B%BE%E5%B1%82%23) `198.1K 🔥` `+155%`
1. [尚界Z7全网首拆](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E7%95%8CZ7%E5%85%A8%E7%BD%91%E9%A6%96%E6%8B%86%23) `193.7K 🔥` `+149%`
1. [世界杯开幕式 吓我一跳 (The World Cup opening ceremony scared me)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%BC%80%E5%B9%95%E5%BC%8F%20%E5%90%93%E6%88%91%E4%B8%80%E8%B7%B3%23) `1.9M 🔥`
1. [中国队首发 labubu马宁](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E9%A6%96%E5%8F%91%20labubu%E9%A9%AC%E5%AE%81%23) `1.3M 🔥`
1. [还得是夏奇拉 (It has to be Shakira)](https://s.weibo.com/weibo?q=%23%E8%BF%98%E5%BE%97%E6%98%AF%E5%A4%8F%E5%A5%87%E6%8B%89%23) `315.6K 🔥`
1. [王者荣耀亚运会名单公示](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%90%8D%E5%8D%95%E5%85%AC%E7%A4%BA%23) `239.2K 🔥`
1. [南非 打人 (south africa beating)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%9D%9E%20%E6%89%93%E4%BA%BA%23) `893.7K 🔥` `-57%`
1. [墨西哥2比0南非](https://s.weibo.com/weibo?q=%23%E5%A2%A8%E8%A5%BF%E5%93%A52%E6%AF%940%E5%8D%97%E9%9D%9E%23) `343.0K 🔥` `-65%`
1. [特朗普称取消打击伊朗行动](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E5%8F%96%E6%B6%88%E6%89%93%E5%87%BB%E4%BC%8A%E6%9C%97%E8%A1%8C%E5%8A%A8%23) `328.2K 🔥` `-53%`
1. [世界杯 红牌比进球多](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%20%E7%BA%A2%E7%89%8C%E6%AF%94%E8%BF%9B%E7%90%83%E5%A4%9A%23) `263.7K 🔥` `-64%`
1. [labubu都进世界杯了](https://s.weibo.com/weibo?q=%23labubu%E9%83%BD%E8%BF%9B%E4%B8%96%E7%95%8C%E6%9D%AF%E4%BA%86%23) `245.7K 🔥` `-25%`
1. [迪丽热巴曾正面回应隐婚传闻 (Dilireba once responded directly to rumors of hidden marriage)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%9B%BE%E6%AD%A3%E9%9D%A2%E5%9B%9E%E5%BA%94%E9%9A%90%E5%A9%9A%E4%BC%A0%E9%97%BB%23) `193.2K 🔥` `-41%`

Updated at 2026-06-12 09:39:55

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
