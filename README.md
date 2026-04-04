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

1. [辽宁铁人2比1北京国安 (Liaoning Ironman 2-1 Beijing Guoan)](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E9%93%81%E4%BA%BA2%E6%AF%941%E5%8C%97%E4%BA%AC%E5%9B%BD%E5%AE%89%23) `106.6K 🔥` `NEW`
1. [JackeyLove零击杀](https://s.weibo.com/weibo?q=%23JackeyLove%E9%9B%B6%E5%87%BB%E6%9D%80%23) `93.1K 🔥` `NEW`
1. [一等功臣杨全吉逝世](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%AD%89%E5%8A%9F%E8%87%A3%E6%9D%A8%E5%85%A8%E5%90%89%E9%80%9D%E4%B8%96%23) `83.2K 🔥` `NEW`
1. [00后白事唢呐师称不愿让孩子接班](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E7%99%BD%E4%BA%8B%E5%94%A2%E5%91%90%E5%B8%88%E7%A7%B0%E4%B8%8D%E6%84%BF%E8%AE%A9%E5%AD%A9%E5%AD%90%E6%8E%A5%E7%8F%AD%23) `81.1K 🔥` `NEW`
1. [歌不是谁唱火的谁有版权](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E4%B8%8D%E6%98%AF%E8%B0%81%E5%94%B1%E7%81%AB%E7%9A%84%E8%B0%81%E6%9C%89%E7%89%88%E6%9D%83%23) `73.0K 🔥` `NEW`
1. [伊朗驻华大使馆发布战果](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%A9%BB%E5%8D%8E%E5%A4%A7%E4%BD%BF%E9%A6%86%E5%8F%91%E5%B8%83%E6%88%98%E6%9E%9C%23) `70.2K 🔥` `NEW`
1. [第一次走红毯的angelababy](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%B5%B0%E7%BA%A2%E6%AF%AF%E7%9A%84angelababy%23) `69.0K 🔥` `NEW`
1. [刘琳琳拍的虞书欣](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%90%B3%E7%90%B3%E6%8B%8D%E7%9A%84%E8%99%9E%E4%B9%A6%E6%AC%A3%23) `67.9K 🔥` `NEW`
1. [TOP演唱会首次公开销量](https://s.weibo.com/weibo?q=%23TOP%E6%BC%94%E5%94%B1%E4%BC%9A%E9%A6%96%E6%AC%A1%E5%85%AC%E5%BC%80%E9%94%80%E9%87%8F%23) `67.4K 🔥` `NEW`
1. [白日提灯反派骂女主台词](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E5%8F%8D%E6%B4%BE%E9%AA%82%E5%A5%B3%E4%B8%BB%E5%8F%B0%E8%AF%8D%23) `1.1M 🔥` `+36%`
1. [高铁站禁烟仅1天男子当众吸烟被拍 (Only one day after smoking was banned at a high-speed rail station, a man was photographed smoking in public)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%93%81%E7%AB%99%E7%A6%81%E7%83%9F%E4%BB%851%E5%A4%A9%E7%94%B7%E5%AD%90%E5%BD%93%E4%BC%97%E5%90%B8%E7%83%9F%E8%A2%AB%E6%8B%8D%23) `795.3K 🔥` `+167%`
1. [莫氏鸡煲老板娘直呼生无可恋](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E5%A8%98%E7%9B%B4%E5%91%BC%E7%94%9F%E6%97%A0%E5%8F%AF%E6%81%8B%23) `344.1K 🔥` `+120%`
1. [埃及一航班行李全部丢失](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E4%B8%80%E8%88%AA%E7%8F%AD%E8%A1%8C%E6%9D%8E%E5%85%A8%E9%83%A8%E4%B8%A2%E5%A4%B1%23) `279.7K 🔥` `+96%`
1. [狗 爷爷这么做一定有他的道理](https://s.weibo.com/weibo?q=%23%E7%8B%97%20%E7%88%B7%E7%88%B7%E8%BF%99%E4%B9%88%E5%81%9A%E4%B8%80%E5%AE%9A%E6%9C%89%E4%BB%96%E7%9A%84%E9%81%93%E7%90%86%23) `264.0K 🔥` `+31%`
1. [1099元内衣外穿年轻人买单吗](https://s.weibo.com/weibo?q=%231099%E5%85%83%E5%86%85%E8%A1%A3%E5%A4%96%E7%A9%BF%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%B9%B0%E5%8D%95%E5%90%97%23) `158.3K 🔥` `+58%`
1. [汉娜高达创造历史](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%A8%9C%E9%AB%98%E8%BE%BE%E5%88%9B%E9%80%A0%E5%8E%86%E5%8F%B2%23) `127.5K 🔥` `+53%`
1. [T1迎战HLE](https://s.weibo.com/weibo?q=%23T1%E8%BF%8E%E6%88%98HLE%23) `108.2K 🔥` `+69%`
1. [解决了辣条的油腻和减脂餐的清淡 (Solve the greasiness of spicy strips and the blandness of fat-reducing meals)](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E5%86%B3%E4%BA%86%E8%BE%A3%E6%9D%A1%E7%9A%84%E6%B2%B9%E8%85%BB%E5%92%8C%E5%87%8F%E8%84%82%E9%A4%90%E7%9A%84%E6%B8%85%E6%B7%A1%23) `106.5K 🔥` `+52%`
1. [范玮琪希望网友不要被舆论带偏](https://s.weibo.com/weibo?q=%23%E8%8C%83%E7%8E%AE%E7%90%AA%E5%B8%8C%E6%9C%9B%E7%BD%91%E5%8F%8B%E4%B8%8D%E8%A6%81%E8%A2%AB%E8%88%86%E8%AE%BA%E5%B8%A6%E5%81%8F%23) `103.5K 🔥` `+24%`
1. [文旅共绘诗与远方新画卷 (Culture and tourism jointly paint poems and new pictures of distant places)](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%97%85%E5%85%B1%E7%BB%98%E8%AF%97%E4%B8%8E%E8%BF%9C%E6%96%B9%E6%96%B0%E7%94%BB%E5%8D%B7%23) `617.3K 🔥`
1. [美国提议停火48小时](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%8F%90%E8%AE%AE%E5%81%9C%E7%81%AB48%E5%B0%8F%E6%97%B6%23) `132.7K 🔥`
1. [何宣林回应是孟子义班主任](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%E5%9B%9E%E5%BA%94%E6%98%AF%E5%AD%9F%E5%AD%90%E4%B9%89%E7%8F%AD%E4%B8%BB%E4%BB%BB%23) `132.7K 🔥`
1. [虞书欣签售会 (Yu Shuxin’s book signing)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%AD%BE%E5%94%AE%E4%BC%9A%23) `132.3K 🔥`
1. [印度女子好心给水喝反遭强奸](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%A5%B3%E5%AD%90%E5%A5%BD%E5%BF%83%E7%BB%99%E6%B0%B4%E5%96%9D%E5%8F%8D%E9%81%AD%E5%BC%BA%E5%A5%B8%23) `132.2K 🔥`
1. [逼出最强孙颖莎的高达才18岁](https://s.weibo.com/weibo?q=%23%E9%80%BC%E5%87%BA%E6%9C%80%E5%BC%BA%E5%AD%99%E9%A2%96%E8%8E%8E%E7%9A%84%E9%AB%98%E8%BE%BE%E6%89%8D18%E5%B2%81%23) `129.8K 🔥`
1. [杨紫看了黄灿灿初舞台](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%9C%8B%E4%BA%86%E9%BB%84%E7%81%BF%E7%81%BF%E5%88%9D%E8%88%9E%E5%8F%B0%23) `127.0K 🔥`
1. [十日终焉](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `126.1K 🔥`
1. [孙颖莎说高达没防住](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%AF%B4%E9%AB%98%E8%BE%BE%E6%B2%A1%E9%98%B2%E4%BD%8F%23) `120.6K 🔥`
1. [嫌顾客消费86元太少商家被处罚](https://s.weibo.com/weibo?q=%23%E5%AB%8C%E9%A1%BE%E5%AE%A2%E6%B6%88%E8%B4%B986%E5%85%83%E5%A4%AA%E5%B0%91%E5%95%86%E5%AE%B6%E8%A2%AB%E5%A4%84%E7%BD%9A%23) `119.0K 🔥`
1. [王传君和爱情公寓和解了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E5%92%8C%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E5%92%8C%E8%A7%A3%E4%BA%86%23) `108.0K 🔥`
1. [虞书欣香水](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E9%A6%99%E6%B0%B4%23) `107.7K 🔥`
1. [刘耀文举宋亚轩路透](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E4%B8%BE%E5%AE%8B%E4%BA%9A%E8%BD%A9%E8%B7%AF%E9%80%8F%23) `106.6K 🔥`
1. [黄磊12岁二女儿身高 (The height of Huang Lei's 12-year-old second daughter)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%A3%8A12%E5%B2%81%E4%BA%8C%E5%A5%B3%E5%84%BF%E8%BA%AB%E9%AB%98%23) `106.5K 🔥`
1. [谢霆锋戴与王菲26年前定情手镯 (Nicholas Tse wears love bracelet with Faye Wong 26 years ago)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E6%88%B4%E4%B8%8E%E7%8E%8B%E8%8F%B226%E5%B9%B4%E5%89%8D%E5%AE%9A%E6%83%85%E6%89%8B%E9%95%AF%23) `98.0K 🔥`
1. [张若昀发唐艺昕直拍 (Zhang Ruoyun sends Tang Yixin to shoot directly)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%8B%A5%E6%98%80%E5%8F%91%E5%94%90%E8%89%BA%E6%98%95%E7%9B%B4%E6%8B%8D%23) `91.9K 🔥`
1. [韩国男子将女友制成木乃伊藏尸 (South Korean man mummifies girlfriend and hides body)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%94%B7%E5%AD%90%E5%B0%86%E5%A5%B3%E5%8F%8B%E5%88%B6%E6%88%90%E6%9C%A8%E4%B9%83%E4%BC%8A%E8%97%8F%E5%B0%B8%23) `86.9K 🔥`
1. [无人继承的巨额遗产或在拖垮日本](https://s.weibo.com/weibo?q=%23%E6%97%A0%E4%BA%BA%E7%BB%A7%E6%89%BF%E7%9A%84%E5%B7%A8%E9%A2%9D%E9%81%97%E4%BA%A7%E6%88%96%E5%9C%A8%E6%8B%96%E5%9E%AE%E6%97%A5%E6%9C%AC%23) `86.7K 🔥`
1. [午睡时间超1小时死亡风险增加30%](https://s.weibo.com/weibo?q=%23%E5%8D%88%E7%9D%A1%E6%97%B6%E9%97%B4%E8%B6%851%E5%B0%8F%E6%97%B6%E6%AD%BB%E4%BA%A1%E9%A3%8E%E9%99%A9%E5%A2%9E%E5%8A%A030%25%23) `85.5K 🔥`
1. [重庆广阳岛一飞行器坠落](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%B9%BF%E9%98%B3%E5%B2%9B%E4%B8%80%E9%A3%9E%E8%A1%8C%E5%99%A8%E5%9D%A0%E8%90%BD%23) `77.2K 🔥`
1. [葛夕分享do鼻子经验](https://s.weibo.com/weibo?q=%23%E8%91%9B%E5%A4%95%E5%88%86%E4%BA%ABdo%E9%BC%BB%E5%AD%90%E7%BB%8F%E9%AA%8C%23) `76.5K 🔥`
1. [伊朗用重火力回应美临时停火建议](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%94%A8%E9%87%8D%E7%81%AB%E5%8A%9B%E5%9B%9E%E5%BA%94%E7%BE%8E%E4%B8%B4%E6%97%B6%E5%81%9C%E7%81%AB%E5%BB%BA%E8%AE%AE%23) `69.3K 🔥`
1. [王橹杰 锁骨连肩](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%20%E9%94%81%E9%AA%A8%E8%BF%9E%E8%82%A9%23) `69.3K 🔥`
1. [烧纸钱会不会导致阴间通胀](https://s.weibo.com/weibo?q=%23%E7%83%A7%E7%BA%B8%E9%92%B1%E4%BC%9A%E4%B8%8D%E4%BC%9A%E5%AF%BC%E8%87%B4%E9%98%B4%E9%97%B4%E9%80%9A%E8%83%80%23) `67.7K 🔥`
1. [瑞幸一门店被调侃像公厕](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E4%B8%80%E9%97%A8%E5%BA%97%E8%A2%AB%E8%B0%83%E4%BE%83%E5%83%8F%E5%85%AC%E5%8E%95%23) `64.8K 🔥`
1. [爆火鸡煲店老板称用的冰冻鸡 (The owner of the fried turkey pot shop claims that he uses frozen chicken)](https://s.weibo.com/weibo?q=%23%E7%88%86%E7%81%AB%E9%B8%A1%E7%85%B2%E5%BA%97%E8%80%81%E6%9D%BF%E7%A7%B0%E7%94%A8%E7%9A%84%E5%86%B0%E5%86%BB%E9%B8%A1%23) `324.3K 🔥` `-70%`
1. [iG战胜TES](https://s.weibo.com/weibo?q=%23iG%E6%88%98%E8%83%9CTES%23) `161.2K 🔥` `-22%`
1. [李倩月到死都不知道凶手是男友 (Li Qianyue didn’t know the murderer was her boyfriend until her death)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%80%A9%E6%9C%88%E5%88%B0%E6%AD%BB%E9%83%BD%E4%B8%8D%E7%9F%A5%E9%81%93%E5%87%B6%E6%89%8B%E6%98%AF%E7%94%B7%E5%8F%8B%23) `80.9K 🔥` `-28%`
1. [TES对战iG](https://s.weibo.com/weibo?q=%23TES%E5%AF%B9%E6%88%98iG%23) `79.5K 🔥` `-54%`
1. [董思成吐槽尹子维脾气大 (Dong Sicheng complains about Yin Ziwei's temper)](https://s.weibo.com/weibo?q=%23%E8%91%A3%E6%80%9D%E6%88%90%E5%90%90%E6%A7%BD%E5%B0%B9%E5%AD%90%E7%BB%B4%E8%84%BE%E6%B0%94%E5%A4%A7%23) `70.1K 🔥` `-37%`
1. [这几类人建议尽快做一次胃镜 (These types of people are recommended to have a gastroscopy as soon as possible)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%87%A0%E7%B1%BB%E4%BA%BA%E5%BB%BA%E8%AE%AE%E5%B0%BD%E5%BF%AB%E5%81%9A%E4%B8%80%E6%AC%A1%E8%83%83%E9%95%9C%23) `68.6K 🔥` `-22%`

Updated at 2026-04-04 18:04:37

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
