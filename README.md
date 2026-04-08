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

1. [B站将上线播放页暂停广告 (Bilibili will launch an online play page to pause advertisements)](https://s.weibo.com/weibo?q=%23B%E7%AB%99%E5%B0%86%E4%B8%8A%E7%BA%BF%E6%92%AD%E6%94%BE%E9%A1%B5%E6%9A%82%E5%81%9C%E5%B9%BF%E5%91%8A%23) `185.5K 🔥` `NEW`
1. [开心消消乐第一万关的含金量](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%BF%83%E6%B6%88%E6%B6%88%E4%B9%90%E7%AC%AC%E4%B8%80%E4%B8%87%E5%85%B3%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%23) `173.2K 🔥` `NEW`
1. [梁朝伟像走失老人在求救](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%9C%9D%E4%BC%9F%E5%83%8F%E8%B5%B0%E5%A4%B1%E8%80%81%E4%BA%BA%E5%9C%A8%E6%B1%82%E6%95%91%23) `148.3K 🔥` `NEW`
1. [西班牙首相桑切斯将访华](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%A6%96%E7%9B%B8%E6%A1%91%E5%88%87%E6%96%AF%E5%B0%86%E8%AE%BF%E5%8D%8E%23) `125.2K 🔥` `NEW`
1. [减肥一旦开始就不要停下](https://s.weibo.com/weibo?q=%23%E5%87%8F%E8%82%A5%E4%B8%80%E6%97%A6%E5%BC%80%E5%A7%8B%E5%B0%B1%E4%B8%8D%E8%A6%81%E5%81%9C%E4%B8%8B%23) `119.2K 🔥` `NEW`
1. [周冬雨 我就是一般人的长相](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%86%AC%E9%9B%A8%20%E6%88%91%E5%B0%B1%E6%98%AF%E4%B8%80%E8%88%AC%E4%BA%BA%E7%9A%84%E9%95%BF%E7%9B%B8%23) `106.4K 🔥` `NEW`
1. [女儿不想王灿生二胎](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E4%B8%8D%E6%83%B3%E7%8E%8B%E7%81%BF%E7%94%9F%E4%BA%8C%E8%83%8E%23) `104.3K 🔥` `NEW`
1. [美伊同意停火后伊朗驻华大使首发声](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%90%8C%E6%84%8F%E5%81%9C%E7%81%AB%E5%90%8E%E4%BC%8A%E6%9C%97%E9%A9%BB%E5%8D%8E%E5%A4%A7%E4%BD%BF%E9%A6%96%E5%8F%91%E5%A3%B0%23) `98.8K 🔥` `NEW`
1. [真正的梨花猫出现了](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E7%9A%84%E6%A2%A8%E8%8A%B1%E7%8C%AB%E5%87%BA%E7%8E%B0%E4%BA%86%23) `88.3K 🔥` `NEW`
1. [莫氏鸡煲爆火周边摊主1天最多卖800元](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E7%88%86%E7%81%AB%E5%91%A8%E8%BE%B9%E6%91%8A%E4%B8%BB1%E5%A4%A9%E6%9C%80%E5%A4%9A%E5%8D%96800%E5%85%83%23) `84.4K 🔥` `NEW`
1. [澳国家英雄杀残疾人拿义肢当酒杯 (Australian national hero kills disabled man and uses prosthetic leg as wine glass)](https://s.weibo.com/weibo?q=%23%E6%BE%B3%E5%9B%BD%E5%AE%B6%E8%8B%B1%E9%9B%84%E6%9D%80%E6%AE%8B%E7%96%BE%E4%BA%BA%E6%8B%BF%E4%B9%89%E8%82%A2%E5%BD%93%E9%85%92%E6%9D%AF%23) `78.1K 🔥` `NEW`
1. [被领养到加拿大又遭遗弃的20年](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%A2%86%E5%85%BB%E5%88%B0%E5%8A%A0%E6%8B%BF%E5%A4%A7%E5%8F%88%E9%81%AD%E9%81%97%E5%BC%83%E7%9A%8420%E5%B9%B4%23) `76.7K 🔥` `NEW`
1. [总有一天会被逼得学会飞行](https://s.weibo.com/weibo?q=%23%E6%80%BB%E6%9C%89%E4%B8%80%E5%A4%A9%E4%BC%9A%E8%A2%AB%E9%80%BC%E5%BE%97%E5%AD%A6%E4%BC%9A%E9%A3%9E%E8%A1%8C%23) `76.2K 🔥` `NEW`
1. [面试工作被HR耍了](https://s.weibo.com/weibo?q=%23%E9%9D%A2%E8%AF%95%E5%B7%A5%E4%BD%9C%E8%A2%ABHR%E8%80%8D%E4%BA%86%23) `68.3K 🔥` `NEW`
1. [赵今麦超短发大片](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E8%B6%85%E7%9F%AD%E5%8F%91%E5%A4%A7%E7%89%87%23) `68.1K 🔥` `NEW`
1. [以军正在袭击伊朗导弹设施](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E6%AD%A3%E5%9C%A8%E8%A2%AD%E5%87%BB%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E8%AE%BE%E6%96%BD%23) `66.4K 🔥` `NEW`
1. [十日终焉官微 用户1231](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E5%AE%98%E5%BE%AE%20%E7%94%A8%E6%88%B71231%23) `1.1M 🔥` `+515%`
1. [大熊猫家美大崽去世](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%86%8A%E7%8C%AB%E5%AE%B6%E7%BE%8E%E5%A4%A7%E5%B4%BD%E5%8E%BB%E4%B8%96%23) `819.5K 🔥` `+860%`
1. [伊朗拉万炼油厂发生爆炸](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8B%89%E4%B8%87%E7%82%BC%E6%B2%B9%E5%8E%82%E5%8F%91%E7%94%9F%E7%88%86%E7%82%B8%23) `705.0K 🔥` `+90%`
1. [美国杀人分尸19岁少年专杀性犯罪者 (19-year-old boy in the US kills and dismembers sex offenders)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%9D%80%E4%BA%BA%E5%88%86%E5%B0%B819%E5%B2%81%E5%B0%91%E5%B9%B4%E4%B8%93%E6%9D%80%E6%80%A7%E7%8A%AF%E7%BD%AA%E8%80%85%23) `336.7K 🔥` `+51%`
1. [电费刺客找到了](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%B4%B9%E5%88%BA%E5%AE%A2%E6%89%BE%E5%88%B0%E4%BA%86%23) `267.6K 🔥` `+125%`
1. [春假撞怀清明春日消费火力全开 (Spring break makes me pregnant during Qingming Festival, and spring consumption is on full swing)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E5%81%87%E6%92%9E%E6%80%80%E6%B8%85%E6%98%8E%E6%98%A5%E6%97%A5%E6%B6%88%E8%B4%B9%E7%81%AB%E5%8A%9B%E5%85%A8%E5%BC%80%23) `722.8K 🔥`
1. [物业大撤退 (Real estate retreat)](https://s.weibo.com/weibo?q=%23%E7%89%A9%E4%B8%9A%E5%A4%A7%E6%92%A4%E9%80%80%23) `699.0K 🔥`
1. [麻辣烫里最拉的菜](https://s.weibo.com/weibo?q=%23%E9%BA%BB%E8%BE%A3%E7%83%AB%E9%87%8C%E6%9C%80%E6%8B%89%E7%9A%84%E8%8F%9C%23) `698.6K 🔥`
1. [低血糖假性饥饿](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E8%A1%80%E7%B3%96%E5%81%87%E6%80%A7%E9%A5%A5%E9%A5%BF%23) `190.0K 🔥`
1. [王濛 组内唯一大vocal](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%20%E7%BB%84%E5%86%85%E5%94%AF%E4%B8%80%E5%A4%A7vocal%23) `184.3K 🔥`
1. [刘思维当爸爸了](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%80%9D%E7%BB%B4%E5%BD%93%E7%88%B8%E7%88%B8%E4%BA%86%23) `123.2K 🔥`
1. [李羲承改活动名](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BE%B2%E6%89%BF%E6%94%B9%E6%B4%BB%E5%8A%A8%E5%90%8D%23) `120.9K 🔥`
1. [原来焦虑症是这么来的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%84%A6%E8%99%91%E7%97%87%E6%98%AF%E8%BF%99%E4%B9%88%E6%9D%A5%E7%9A%84%23) `114.1K 🔥`
1. [浪姐史上最难听的小考](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%8F%B2%E4%B8%8A%E6%9C%80%E9%9A%BE%E5%90%AC%E7%9A%84%E5%B0%8F%E8%80%83%23) `113.6K 🔥`
1. [老爸过生日人脉硬到一个个不吱声](https://s.weibo.com/weibo?q=%23%E8%80%81%E7%88%B8%E8%BF%87%E7%94%9F%E6%97%A5%E4%BA%BA%E8%84%89%E7%A1%AC%E5%88%B0%E4%B8%80%E4%B8%AA%E4%B8%AA%E4%B8%8D%E5%90%B1%E5%A3%B0%23) `104.3K 🔥`
1. [女子孕期得知丈夫出轨20余人 (Woman learns her husband cheated on more than 20 people during pregnancy)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%AD%95%E6%9C%9F%E5%BE%97%E7%9F%A5%E4%B8%88%E5%A4%AB%E5%87%BA%E8%BD%A820%E4%BD%99%E4%BA%BA%23) `104.3K 🔥`
1. [穆祉丞 代言](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%20%E4%BB%A3%E8%A8%80%23) `101.1K 🔥`
1. [田曦薇飞吻 (Tian Xiwei blows a kiss)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E9%A3%9E%E5%90%BB%23) `76.5K 🔥`
1. [美国袭击伊朗哈尔克岛上50余个军事目标](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E8%A2%AD%E5%87%BB%E4%BC%8A%E6%9C%97%E5%93%88%E5%B0%94%E5%85%8B%E5%B2%9B%E4%B8%8A50%E4%BD%99%E4%B8%AA%E5%86%9B%E4%BA%8B%E7%9B%AE%E6%A0%87%23) `72.7K 🔥`
1. [伊美双方停火生效](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E7%BE%8E%E5%8F%8C%E6%96%B9%E5%81%9C%E7%81%AB%E7%94%9F%E6%95%88%23) `71.0K 🔥`
1. [哪吒2票房升至全球第4 (Ne Zha 2 box office rises to 4th in the world)](https://s.weibo.com/weibo?q=%23%E5%93%AA%E5%90%922%E7%A5%A8%E6%88%BF%E5%8D%87%E8%87%B3%E5%85%A8%E7%90%83%E7%AC%AC4%23) `481.9K 🔥` `-56%`
1. [宇文玥捞上来了](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%96%87%E7%8E%A5%E6%8D%9E%E4%B8%8A%E6%9D%A5%E4%BA%86%23) `279.6K 🔥` `-60%`
1. [住酒店不带毛巾的人天塌了 (If you stay in a hotel without a towel, the sky is falling.)](https://s.weibo.com/weibo?q=%23%E4%BD%8F%E9%85%92%E5%BA%97%E4%B8%8D%E5%B8%A6%E6%AF%9B%E5%B7%BE%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `272.0K 🔥` `-45%`
1. [12人花30万买月薪2500的高铁工作](https://s.weibo.com/weibo?q=%2312%E4%BA%BA%E8%8A%B130%E4%B8%87%E4%B9%B0%E6%9C%88%E8%96%AA2500%E7%9A%84%E9%AB%98%E9%93%81%E5%B7%A5%E4%BD%9C%23) `236.6K 🔥` `-36%`
1. [婚前房产婚后加名离婚时能对半分吗](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%89%8D%E6%88%BF%E4%BA%A7%E5%A9%9A%E5%90%8E%E5%8A%A0%E5%90%8D%E7%A6%BB%E5%A9%9A%E6%97%B6%E8%83%BD%E5%AF%B9%E5%8D%8A%E5%88%86%E5%90%97%23) `127.7K 🔥` `-55%`
1. [孙怡 幼态脸高妹](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%20%E5%B9%BC%E6%80%81%E8%84%B8%E9%AB%98%E5%A6%B9%23) `103.5K 🔥` `-21%`
1. [国资委成立境外国资工作局](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B5%84%E5%A7%94%E6%88%90%E7%AB%8B%E5%A2%83%E5%A4%96%E5%9B%BD%E8%B5%84%E5%B7%A5%E4%BD%9C%E5%B1%80%23) `98.9K 🔥` `-35%`
1. [小米官宣6款充电宝新品](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%AE%98%E5%AE%A36%E6%AC%BE%E5%85%85%E7%94%B5%E5%AE%9D%E6%96%B0%E5%93%81%23) `98.2K 🔥` `-27%`
1. [徐艺洋回应黄子韬身体状况 (Xu Yiyang responded to Huang Zitao’s physical condition)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E5%9B%9E%E5%BA%94%E9%BB%84%E5%AD%90%E9%9F%AC%E8%BA%AB%E4%BD%93%E7%8A%B6%E5%86%B5%23) `86.1K 🔥` `-30%`
1. [十日终焉 (End of ten days)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `80.4K 🔥` `-43%`
1. [金虔佑暂停活动](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%99%94%E4%BD%91%E6%9A%82%E5%81%9C%E6%B4%BB%E5%8A%A8%23) `70.9K 🔥` `-47%`
1. [好仙的刘诗诗 (The lovely Liu Shishi)](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E4%BB%99%E7%9A%84%E5%88%98%E8%AF%97%E8%AF%97%23) `68.8K 🔥` `-26%`
1. [ALD1 七人团 (ALD1 seven-member group)](https://s.weibo.com/weibo?q=%23ALD1%20%E4%B8%83%E4%BA%BA%E5%9B%A2%23) `66.5K 🔥` `-42%`

Updated at 2026-04-08 18:48:47

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
