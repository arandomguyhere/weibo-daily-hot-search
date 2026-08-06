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

1. [宇树科技中签率 (Yushu Technology’s winning rate)](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E4%B8%AD%E7%AD%BE%E7%8E%87%23) `878.2K 🔥` `NEW`
1. [中国AI连续14周霸榜](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BDAI%E8%BF%9E%E7%BB%AD14%E5%91%A8%E9%9C%B8%E6%A6%9C%23) `821.5K 🔥` `NEW`
1. [苍兰诀](https://s.weibo.com/weibo?q=%23%E8%8B%8D%E5%85%B0%E8%AF%80%23) `821.1K 🔥` `NEW`
1. [非人哉11周年](https://s.weibo.com/weibo?q=%23%E9%9D%9E%E4%BA%BA%E5%93%8911%E5%91%A8%E5%B9%B4%23) `547.0K 🔥` `NEW`
1. [时代少年团正太扭腰来了](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%AD%A3%E5%A4%AA%E6%89%AD%E8%85%B0%E6%9D%A5%E4%BA%86%23) `516.1K 🔥` `NEW`
1. [儿子难以理解六旬父亲婚内诞下私生子](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E9%9A%BE%E4%BB%A5%E7%90%86%E8%A7%A3%E5%85%AD%E6%97%AC%E7%88%B6%E4%BA%B2%E5%A9%9A%E5%86%85%E8%AF%9E%E4%B8%8B%E7%A7%81%E7%94%9F%E5%AD%90%23) `310.9K 🔥` `NEW`
1. [NIP战胜iG](https://s.weibo.com/weibo?q=%23NIP%E6%88%98%E8%83%9CiG%23) `310.2K 🔥` `NEW`
1. [腾讯视频 标题](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E8%A7%86%E9%A2%91%20%E6%A0%87%E9%A2%98%23) `310.1K 🔥` `NEW`
1. [租房柜中发现遗像租客吓哭连夜搬离](https://s.weibo.com/weibo?q=%23%E7%A7%9F%E6%88%BF%E6%9F%9C%E4%B8%AD%E5%8F%91%E7%8E%B0%E9%81%97%E5%83%8F%E7%A7%9F%E5%AE%A2%E5%90%93%E5%93%AD%E8%BF%9E%E5%A4%9C%E6%90%AC%E7%A6%BB%23) `309.2K 🔥` `NEW`
1. [殷桃46岁绝美身材](https://s.weibo.com/weibo?q=%23%E6%AE%B7%E6%A1%8346%E5%B2%81%E7%BB%9D%E7%BE%8E%E8%BA%AB%E6%9D%90%23) `308.3K 🔥` `NEW`
1. [时代少年团演唱会神图有了 (There is a magical picture of the Times Youth League concert)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%BC%94%E5%94%B1%E4%BC%9A%E7%A5%9E%E5%9B%BE%E6%9C%89%E4%BA%86%23) `307.4K 🔥` `NEW`
1. [迪丽热巴 时尚先生](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%20%E6%97%B6%E5%B0%9A%E5%85%88%E7%94%9F%23) `307.0K 🔥` `NEW`
1. [贺峻霖舞台掀头纱](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E8%88%9E%E5%8F%B0%E6%8E%80%E5%A4%B4%E7%BA%B1%23) `306.3K 🔥` `NEW`
1. [可杰 top](https://s.weibo.com/weibo?q=%23%E5%8F%AF%E6%9D%B0%20top%23) `305.5K 🔥` `NEW`
1. [曝罗云熙到期不续约](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%BD%97%E4%BA%91%E7%86%99%E5%88%B0%E6%9C%9F%E4%B8%8D%E7%BB%AD%E7%BA%A6%23) `305.2K 🔥` `NEW`
1. [宋亚轩终于看到正常的兄弟关系](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E7%BB%88%E4%BA%8E%E7%9C%8B%E5%88%B0%E6%AD%A3%E5%B8%B8%E7%9A%84%E5%85%84%E5%BC%9F%E5%85%B3%E7%B3%BB%23) `297.9K 🔥` `NEW`
1. [Mina轻生前求西村力粉丝别网暴自己](https://s.weibo.com/weibo?q=%23Mina%E8%BD%BB%E7%94%9F%E5%89%8D%E6%B1%82%E8%A5%BF%E6%9D%91%E5%8A%9B%E7%B2%89%E4%B8%9D%E5%88%AB%E7%BD%91%E6%9A%B4%E8%87%AA%E5%B7%B1%23) `283.5K 🔥` `NEW`
1. [奶茶鼻祖被卖了](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E8%8C%B6%E9%BC%BB%E7%A5%96%E8%A2%AB%E5%8D%96%E4%BA%86%23) `281.9K 🔥` `NEW`
1. [U17国足vs勒沃库森](https://s.weibo.com/weibo?q=%23U17%E5%9B%BD%E8%B6%B3vs%E5%8B%92%E6%B2%83%E5%BA%93%E6%A3%AE%23) `281.1K 🔥` `NEW`
1. [梅姨 年龄](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%20%E5%B9%B4%E9%BE%84%23) `277.8K 🔥` `NEW`
1. [血站回应被指闭门不让市民躲雨 (Blood bank responds to accusations that it closed its doors to prevent citizens from taking shelter from the rain)](https://s.weibo.com/weibo?q=%23%E8%A1%80%E7%AB%99%E5%9B%9E%E5%BA%94%E8%A2%AB%E6%8C%87%E9%97%AD%E9%97%A8%E4%B8%8D%E8%AE%A9%E5%B8%82%E6%B0%91%E8%BA%B2%E9%9B%A8%23) `276.4K 🔥` `NEW`
1. [Jennie推掉音乐节行程参加组合10周年](https://s.weibo.com/weibo?q=%23Jennie%E6%8E%A8%E6%8E%89%E9%9F%B3%E4%B9%90%E8%8A%82%E8%A1%8C%E7%A8%8B%E5%8F%82%E5%8A%A0%E7%BB%84%E5%90%8810%E5%91%A8%E5%B9%B4%23) `224.2K 🔥` `NEW`
1. [刘耀文要销毁宋亚轩拍的照片](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E8%A6%81%E9%94%80%E6%AF%81%E5%AE%8B%E4%BA%9A%E8%BD%A9%E6%8B%8D%E7%9A%84%E7%85%A7%E7%89%87%23) `202.4K 🔥` `NEW`
1. [国企拖欠3700万致市政工程停工](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BC%81%E6%8B%96%E6%AC%A03700%E4%B8%87%E8%87%B4%E5%B8%82%E6%94%BF%E5%B7%A5%E7%A8%8B%E5%81%9C%E5%B7%A5%23) `182.9K 🔥` `NEW`
1. [四川一小熊猫遇车祸口鼻流血去世](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E4%B8%80%E5%B0%8F%E7%86%8A%E7%8C%AB%E9%81%87%E8%BD%A6%E7%A5%B8%E5%8F%A3%E9%BC%BB%E6%B5%81%E8%A1%80%E5%8E%BB%E4%B8%96%23) `159.5K 🔥` `NEW`
1. [胚胎案原配回应靠丈夫生活不知足](https://s.weibo.com/weibo?q=%23%E8%83%9A%E8%83%8E%E6%A1%88%E5%8E%9F%E9%85%8D%E5%9B%9E%E5%BA%94%E9%9D%A0%E4%B8%88%E5%A4%AB%E7%94%9F%E6%B4%BB%E4%B8%8D%E7%9F%A5%E8%B6%B3%23) `159.1K 🔥` `NEW`
1. [李现在海边拍张婧仪](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E5%9C%A8%E6%B5%B7%E8%BE%B9%E6%8B%8D%E5%BC%A0%E5%A9%A7%E4%BB%AA%23) `158.9K 🔥` `NEW`
1. [演员郑国霖景区打工上演现实乌龙](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E9%83%91%E5%9B%BD%E9%9C%96%E6%99%AF%E5%8C%BA%E6%89%93%E5%B7%A5%E4%B8%8A%E6%BC%94%E7%8E%B0%E5%AE%9E%E4%B9%8C%E9%BE%99%23) `156.9K 🔥` `NEW`
1. [南大数院喻良教授确已卸任院长](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%A4%A7%E6%95%B0%E9%99%A2%E5%96%BB%E8%89%AF%E6%95%99%E6%8E%88%E7%A1%AE%E5%B7%B2%E5%8D%B8%E4%BB%BB%E9%99%A2%E9%95%BF%23) `150.0K 🔥` `NEW`
1. [父母大学食堂承包档口2年女儿发声](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E5%A4%A7%E5%AD%A6%E9%A3%9F%E5%A0%82%E6%89%BF%E5%8C%85%E6%A1%A3%E5%8F%A32%E5%B9%B4%E5%A5%B3%E5%84%BF%E5%8F%91%E5%A3%B0%23) `132.9K 🔥` `NEW`
1. [沈腾栗子美甲 (Shen Teng Lizi Manicure)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E6%A0%97%E5%AD%90%E7%BE%8E%E7%94%B2%23) `130.3K 🔥` `NEW`
1. [婚外胚胎案医院门口写明建档需结婚证](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E6%A1%88%E5%8C%BB%E9%99%A2%E9%97%A8%E5%8F%A3%E5%86%99%E6%98%8E%E5%BB%BA%E6%A1%A3%E9%9C%80%E7%BB%93%E5%A9%9A%E8%AF%81%23) `129.2K 🔥` `NEW`
1. [一诺喊话张启山穷奇给我力量](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E5%96%8A%E8%AF%9D%E5%BC%A0%E5%90%AF%E5%B1%B1%E7%A9%B7%E5%A5%87%E7%BB%99%E6%88%91%E5%8A%9B%E9%87%8F%23) `116.3K 🔥` `NEW`
1. [宇树科技发行价150.8元 (The issue price of Yushu Technology is 150.8 yuan)](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E5%8F%91%E8%A1%8C%E4%BB%B7150.8%E5%85%83%23) `554.2K 🔥` `+120%`
1. [西村力大吧发长文回应](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%9D%91%E5%8A%9B%E5%A4%A7%E5%90%A7%E5%8F%91%E9%95%BF%E6%96%87%E5%9B%9E%E5%BA%94%23) `305.8K 🔥` `+25%`
1. [金鹰奖 (Golden Eagle Award)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%23) `1.2M 🔥`
1. [怀疑自己比例不好都没怀疑过镜子](https://s.weibo.com/weibo?q=%23%E6%80%80%E7%96%91%E8%87%AA%E5%B7%B1%E6%AF%94%E4%BE%8B%E4%B8%8D%E5%A5%BD%E9%83%BD%E6%B2%A1%E6%80%80%E7%96%91%E8%BF%87%E9%95%9C%E5%AD%90%23) `814.7K 🔥`
1. [侯卓成杨汝晴 备婚期](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E5%8D%93%E6%88%90%E6%9D%A8%E6%B1%9D%E6%99%B4%20%E5%A4%87%E5%A9%9A%E6%9C%9F%23) `286.5K 🔥`
1. [田曦薇 有刘海儿漂亮没刘海儿也漂亮](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%20%E6%9C%89%E5%88%98%E6%B5%B7%E5%84%BF%E6%BC%82%E4%BA%AE%E6%B2%A1%E5%88%98%E6%B5%B7%E5%84%BF%E4%B9%9F%E6%BC%82%E4%BA%AE%23) `273.5K 🔥`
1. [工作其实是很养人的 (Work is actually very nourishing.)](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E5%85%B6%E5%AE%9E%E6%98%AF%E5%BE%88%E5%85%BB%E4%BA%BA%E7%9A%84%23) `311.0K 🔥` `-41%`
1. [鬼鬼说很想去浪姐但是去不了](https://s.weibo.com/weibo?q=%23%E9%AC%BC%E9%AC%BC%E8%AF%B4%E5%BE%88%E6%83%B3%E5%8E%BB%E6%B5%AA%E5%A7%90%E4%BD%86%E6%98%AF%E5%8E%BB%E4%B8%8D%E4%BA%86%23) `309.7K 🔥` `-36%`
1. [曝侯明昊违反交规被约谈](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%BE%AF%E6%98%8E%E6%98%8A%E8%BF%9D%E5%8F%8D%E4%BA%A4%E8%A7%84%E8%A2%AB%E7%BA%A6%E8%B0%88%23) `308.9K 🔥` `-41%`
1. [女子用漏洞0元买了3千台电器 (Woman used loophole to buy 3,000 electrical appliances for 0 yuan)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%A8%E6%BC%8F%E6%B4%9E0%E5%85%83%E4%B9%B0%E4%BA%863%E5%8D%83%E5%8F%B0%E7%94%B5%E5%99%A8%23) `307.9K 🔥` `-47%`
1. [陈熠张本美和爆分 (Chen Yi, Zhang Benmei and explosive scores)](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%86%A0%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%E7%88%86%E5%88%86%23) `306.7K 🔥` `-64%`
1. [用惯拼多多发现很多东西不该这么贵](https://s.weibo.com/weibo?q=%23%E7%94%A8%E6%83%AF%E6%8B%BC%E5%A4%9A%E5%A4%9A%E5%8F%91%E7%8E%B0%E5%BE%88%E5%A4%9A%E4%B8%9C%E8%A5%BF%E4%B8%8D%E8%AF%A5%E8%BF%99%E4%B9%88%E8%B4%B5%23) `289.9K 🔥` `-45%`
1. [原来不上班有这么多能做的事 (It turns out there are so many things you can do if you don’t go to work.)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%B8%8D%E4%B8%8A%E7%8F%AD%E6%9C%89%E8%BF%99%E4%B9%88%E5%A4%9A%E8%83%BD%E5%81%9A%E7%9A%84%E4%BA%8B%23) `274.2K 🔥` `-48%`
1. [曝Mina韩国住所和偶像同一区](https://s.weibo.com/weibo?q=%23%E6%9B%9DMina%E9%9F%A9%E5%9B%BD%E4%BD%8F%E6%89%80%E5%92%8C%E5%81%B6%E5%83%8F%E5%90%8C%E4%B8%80%E5%8C%BA%23) `266.4K 🔥` `-49%`
1. [王者荣耀农活](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E5%86%9C%E6%B4%BB%23) `243.7K 🔥` `-48%`
1. [小黄豆已病倒](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%BB%84%E8%B1%86%E5%B7%B2%E7%97%85%E5%80%92%23) `173.1K 🔥` `-30%`
1. [泰国一公务员因妆容精致引争议](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E4%B8%80%E5%85%AC%E5%8A%A1%E5%91%98%E5%9B%A0%E5%A6%86%E5%AE%B9%E7%B2%BE%E8%87%B4%E5%BC%95%E4%BA%89%E8%AE%AE%23) `137.6K 🔥` `-40%`
1. [戚薇真的把自己做成AI了 (Qi Wei really made herself an AI)](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%87%E7%9C%9F%E7%9A%84%E6%8A%8A%E8%87%AA%E5%B7%B1%E5%81%9A%E6%88%90AI%E4%BA%86%23) `134.2K 🔥` `-41%`

Updated at 2026-08-06 22:37:18

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
