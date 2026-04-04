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

1. [文旅共绘诗与远方新画卷 (Culture and tourism jointly paint poems and new pictures of distant places)](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%97%85%E5%85%B1%E7%BB%98%E8%AF%97%E4%B8%8E%E8%BF%9C%E6%96%B9%E6%96%B0%E7%94%BB%E5%8D%B7%23) `631.3K 🔥` `NEW`
1. [高铁站禁烟仅1天男子当众吸烟被拍](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%93%81%E7%AB%99%E7%A6%81%E7%83%9F%E4%BB%851%E5%A4%A9%E7%94%B7%E5%AD%90%E5%BD%93%E4%BC%97%E5%90%B8%E7%83%9F%E8%A2%AB%E6%8B%8D%23) `297.6K 🔥` `NEW`
1. [iG战胜TES](https://s.weibo.com/weibo?q=%23iG%E6%88%98%E8%83%9CTES%23) `207.3K 🔥` `NEW`
1. [莫氏鸡煲老板娘直呼生无可恋](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E5%A8%98%E7%9B%B4%E5%91%BC%E7%94%9F%E6%97%A0%E5%8F%AF%E6%81%8B%23) `156.3K 🔥` `NEW`
1. [埃及一航班行李全部丢失](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E4%B8%80%E8%88%AA%E7%8F%AD%E8%A1%8C%E6%9D%8E%E5%85%A8%E9%83%A8%E4%B8%A2%E5%A4%B1%23) `142.4K 🔥` `NEW`
1. [逼出最强孙颖莎的高达才18岁](https://s.weibo.com/weibo?q=%23%E9%80%BC%E5%87%BA%E6%9C%80%E5%BC%BA%E5%AD%99%E9%A2%96%E8%8E%8E%E7%9A%84%E9%AB%98%E8%BE%BE%E6%89%8D18%E5%B2%81%23) `131.3K 🔥` `NEW`
1. [嫌顾客消费86元太少商家被处罚](https://s.weibo.com/weibo?q=%23%E5%AB%8C%E9%A1%BE%E5%AE%A2%E6%B6%88%E8%B4%B986%E5%85%83%E5%A4%AA%E5%B0%91%E5%95%86%E5%AE%B6%E8%A2%AB%E5%A4%84%E7%BD%9A%23) `110.8K 🔥` `NEW`
1. [虞书欣香水](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E9%A6%99%E6%B0%B4%23) `107.8K 🔥` `NEW`
1. [刘耀文举宋亚轩路透](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E4%B8%BE%E5%AE%8B%E4%BA%9A%E8%BD%A9%E8%B7%AF%E9%80%8F%23) `104.3K 🔥` `NEW`
1. [1099元内衣外穿年轻人买单吗](https://s.weibo.com/weibo?q=%231099%E5%85%83%E5%86%85%E8%A1%A3%E5%A4%96%E7%A9%BF%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%B9%B0%E5%8D%95%E5%90%97%23) `100.3K 🔥` `NEW`
1. [韩国男子将女友制成木乃伊藏尸 (South Korean man mummifies girlfriend and hides body)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%94%B7%E5%AD%90%E5%B0%86%E5%A5%B3%E5%8F%8B%E5%88%B6%E6%88%90%E6%9C%A8%E4%B9%83%E4%BC%8A%E8%97%8F%E5%B0%B8%23) `83.6K 🔥` `NEW`
1. [无人继承的巨额遗产或在拖垮日本](https://s.weibo.com/weibo?q=%23%E6%97%A0%E4%BA%BA%E7%BB%A7%E6%89%BF%E7%9A%84%E5%B7%A8%E9%A2%9D%E9%81%97%E4%BA%A7%E6%88%96%E5%9C%A8%E6%8B%96%E5%9E%AE%E6%97%A5%E6%9C%AC%23) `83.6K 🔥` `NEW`
1. [汉娜高达创造历史](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%A8%9C%E9%AB%98%E8%BE%BE%E5%88%9B%E9%80%A0%E5%8E%86%E5%8F%B2%23) `83.6K 🔥` `NEW`
1. [土耳其狂抛近120吨黄金](https://s.weibo.com/weibo?q=%23%E5%9C%9F%E8%80%B3%E5%85%B6%E7%8B%82%E6%8A%9B%E8%BF%91120%E5%90%A8%E9%BB%84%E9%87%91%23) `74.9K 🔥` `NEW`
1. [瑞幸一门店被调侃像公厕](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E4%B8%80%E9%97%A8%E5%BA%97%E8%A2%AB%E8%B0%83%E4%BE%83%E5%83%8F%E5%85%AC%E5%8E%95%23) `73.9K 🔥` `NEW`
1. [葛夕分享do鼻子经验](https://s.weibo.com/weibo?q=%23%E8%91%9B%E5%A4%95%E5%88%86%E4%BA%ABdo%E9%BC%BB%E5%AD%90%E7%BB%8F%E9%AA%8C%23) `69.7K 🔥` `NEW`
1. [重庆广阳岛一飞行器坠落](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%B9%BF%E9%98%B3%E5%B2%9B%E4%B8%80%E9%A3%9E%E8%A1%8C%E5%99%A8%E5%9D%A0%E8%90%BD%23) `68.1K 🔥` `NEW`
1. [伊朗用重火力回应美临时停火建议](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%94%A8%E9%87%8D%E7%81%AB%E5%8A%9B%E5%9B%9E%E5%BA%94%E7%BE%8E%E4%B8%B4%E6%97%B6%E5%81%9C%E7%81%AB%E5%BB%BA%E8%AE%AE%23) `66.8K 🔥` `NEW`
1. [AG下班不打伞](https://s.weibo.com/weibo?q=%23AG%E4%B8%8B%E7%8F%AD%E4%B8%8D%E6%89%93%E4%BC%9E%23) `64.0K 🔥` `NEW`
1. [烧纸钱会不会导致阴间通胀](https://s.weibo.com/weibo?q=%23%E7%83%A7%E7%BA%B8%E9%92%B1%E4%BC%9A%E4%B8%8D%E4%BC%9A%E5%AF%BC%E8%87%B4%E9%98%B4%E9%97%B4%E9%80%9A%E8%83%80%23) `63.6K 🔥` `NEW`
1. [大学生清明放假现状 (Current situation of college students’ Qingming Festival holiday)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%B8%85%E6%98%8E%E6%94%BE%E5%81%87%E7%8E%B0%E7%8A%B6%23) `60.5K 🔥` `NEW`
1. [今麦郎1桶半是商标](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E9%BA%A6%E9%83%8E1%E6%A1%B6%E5%8D%8A%E6%98%AF%E5%95%86%E6%A0%87%23) `59.3K 🔥` `NEW`
1. [爆火鸡煲店老板称用的冰冻鸡 (The owner of the fried turkey pot shop claims that he uses frozen chicken)](https://s.weibo.com/weibo?q=%23%E7%88%86%E7%81%AB%E9%B8%A1%E7%85%B2%E5%BA%97%E8%80%81%E6%9D%BF%E7%A7%B0%E7%94%A8%E7%9A%84%E5%86%B0%E5%86%BB%E9%B8%A1%23) `1.1M 🔥` `+43%`
1. [白日提灯反派骂女主台词](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E5%8F%8D%E6%B4%BE%E9%AA%82%E5%A5%B3%E4%B8%BB%E5%8F%B0%E8%AF%8D%23) `810.1K 🔥` `+562%`
1. [狗 爷爷这么做一定有他的道理](https://s.weibo.com/weibo?q=%23%E7%8B%97%20%E7%88%B7%E7%88%B7%E8%BF%99%E4%B9%88%E5%81%9A%E4%B8%80%E5%AE%9A%E6%9C%89%E4%BB%96%E7%9A%84%E9%81%93%E7%90%86%23) `200.9K 🔥` `+100%`
1. [TES对战iG](https://s.weibo.com/weibo?q=%23TES%E5%AF%B9%E6%88%98iG%23) `171.9K 🔥` `+89%`
1. [印度女子好心给水喝反遭强奸](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%A5%B3%E5%AD%90%E5%A5%BD%E5%BF%83%E7%BB%99%E6%B0%B4%E5%96%9D%E5%8F%8D%E9%81%AD%E5%BC%BA%E5%A5%B8%23) `136.6K 🔥`
1. [杨紫看了黄灿灿初舞台](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%9C%8B%E4%BA%86%E9%BB%84%E7%81%BF%E7%81%BF%E5%88%9D%E8%88%9E%E5%8F%B0%23) `126.8K 🔥`
1. [午睡时间超1小时死亡风险增加30%](https://s.weibo.com/weibo?q=%23%E5%8D%88%E7%9D%A1%E6%97%B6%E9%97%B4%E8%B6%851%E5%B0%8F%E6%97%B6%E6%AD%BB%E4%BA%A1%E9%A3%8E%E9%99%A9%E5%A2%9E%E5%8A%A030%25%23) `106.4K 🔥`
1. [黄磊12岁二女儿身高 (The height of Huang Lei's 12-year-old second daughter)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%A3%8A12%E5%B2%81%E4%BA%8C%E5%A5%B3%E5%84%BF%E8%BA%AB%E9%AB%98%23) `105.0K 🔥`
1. [这几类人建议尽快做一次胃镜 (These types of people are recommended to have a gastroscopy as soon as possible)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%87%A0%E7%B1%BB%E4%BA%BA%E5%BB%BA%E8%AE%AE%E5%B0%BD%E5%BF%AB%E5%81%9A%E4%B8%80%E6%AC%A1%E8%83%83%E9%95%9C%23) `87.7K 🔥`
1. [范玮琪希望网友不要被舆论带偏](https://s.weibo.com/weibo?q=%23%E8%8C%83%E7%8E%AE%E7%90%AA%E5%B8%8C%E6%9C%9B%E7%BD%91%E5%8F%8B%E4%B8%8D%E8%A6%81%E8%A2%AB%E8%88%86%E8%AE%BA%E5%B8%A6%E5%81%8F%23) `83.6K 🔥`
1. [王橹杰 锁骨连肩](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%20%E9%94%81%E9%AA%A8%E8%BF%9E%E8%82%A9%23) `75.2K 🔥`
1. [解决了辣条的油腻和减脂餐的清淡 (Solve the greasiness of spicy strips and the blandness of fat-reducing meals)](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E5%86%B3%E4%BA%86%E8%BE%A3%E6%9D%A1%E7%9A%84%E6%B2%B9%E8%85%BB%E5%92%8C%E5%87%8F%E8%84%82%E9%A4%90%E7%9A%84%E6%B8%85%E6%B7%A1%23) `70.1K 🔥`
1. [张雪机车投资方已猛赚500%](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%8A%95%E8%B5%84%E6%96%B9%E5%B7%B2%E7%8C%9B%E8%B5%9A500%25%23) `65.1K 🔥`
1. [凡人修仙传 (A Mortal's Story of Cultivation into Immortality)](https://s.weibo.com/weibo?q=%23%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0%23) `64.8K 🔥`
1. [T1迎战HLE](https://s.weibo.com/weibo?q=%23T1%E8%BF%8E%E6%88%98HLE%23) `64.0K 🔥`
1. [郝帅辟谣炮轰孙颖莎](https://s.weibo.com/weibo?q=%23%E9%83%9D%E5%B8%85%E8%BE%9F%E8%B0%A3%E7%82%AE%E8%BD%B0%E5%AD%99%E9%A2%96%E8%8E%8E%23) `60.8K 🔥`
1. [美国提议停火48小时](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%8F%90%E8%AE%AE%E5%81%9C%E7%81%AB48%E5%B0%8F%E6%97%B6%23) `149.5K 🔥` `-40%`
1. [虞书欣签售会](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%AD%BE%E5%94%AE%E4%BC%9A%23) `140.3K 🔥` `-73%`
1. [何宣林回应是孟子义班主任](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%E5%9B%9E%E5%BA%94%E6%98%AF%E5%AD%9F%E5%AD%90%E4%B9%89%E7%8F%AD%E4%B8%BB%E4%BB%BB%23) `138.3K 🔥` `-45%`
1. [孙颖莎说高达没防住](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%AF%B4%E9%AB%98%E8%BE%BE%E6%B2%A1%E9%98%B2%E4%BD%8F%23) `128.5K 🔥` `-38%`
1. [十日终焉](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `125.2K 🔥` `-23%`
1. [李倩月到死都不知道凶手是男友](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%80%A9%E6%9C%88%E5%88%B0%E6%AD%BB%E9%83%BD%E4%B8%8D%E7%9F%A5%E9%81%93%E5%87%B6%E6%89%8B%E6%98%AF%E7%94%B7%E5%8F%8B%23) `112.6K 🔥` `-23%`
1. [董思成吐槽尹子维脾气大 (Dong Sicheng complains about Yin Ziwei's temper)](https://s.weibo.com/weibo?q=%23%E8%91%A3%E6%80%9D%E6%88%90%E5%90%90%E6%A7%BD%E5%B0%B9%E5%AD%90%E7%BB%B4%E8%84%BE%E6%B0%94%E5%A4%A7%23) `112.1K 🔥` `-22%`
1. [王传君和爱情公寓和解了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E5%92%8C%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E5%92%8C%E8%A7%A3%E4%BA%86%23) `109.0K 🔥` `-30%`
1. [谢霆锋戴与王菲26年前定情手镯](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E6%88%B4%E4%B8%8E%E7%8E%8B%E8%8F%B226%E5%B9%B4%E5%89%8D%E5%AE%9A%E6%83%85%E6%89%8B%E9%95%AF%23) `94.2K 🔥` `-23%`
1. [张若昀发唐艺昕直拍 (Zhang Ruoyun sends Tang Yixin to shoot directly)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%8B%A5%E6%98%80%E5%8F%91%E5%94%90%E8%89%BA%E6%98%95%E7%9B%B4%E6%8B%8D%23) `91.3K 🔥` `-24%`
1. [高达哭了 (Gundam cried)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%BE%BE%E5%93%AD%E4%BA%86%23) `83.6K 🔥` `-36%`
1. [女生回应午睡5小时被领导警告 (A girl responded to being warned by her boss after taking a 5-hour nap.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E5%9B%9E%E5%BA%94%E5%8D%88%E7%9D%A15%E5%B0%8F%E6%97%B6%E8%A2%AB%E9%A2%86%E5%AF%BC%E8%AD%A6%E5%91%8A%23) `67.0K 🔥` `-23%`

Updated at 2026-04-04 17:36:24

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
