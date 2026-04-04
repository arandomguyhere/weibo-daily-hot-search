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

1. [多巴胺花海惊艳上线 (Dopamine flower sea stunningly launched online)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%B7%B4%E8%83%BA%E8%8A%B1%E6%B5%B7%E6%83%8A%E8%89%B3%E4%B8%8A%E7%BA%BF%23) `605.9K 🔥` `NEW`
1. [杨紫看了黄灿灿初舞台](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%9C%8B%E4%BA%86%E9%BB%84%E7%81%BF%E7%81%BF%E5%88%9D%E8%88%9E%E5%8F%B0%23) `308.7K 🔥` `NEW`
1. [焦作两县合并诞生新县级市为谣言](https://s.weibo.com/weibo?q=%23%E7%84%A6%E4%BD%9C%E4%B8%A4%E5%8E%BF%E5%90%88%E5%B9%B6%E8%AF%9E%E7%94%9F%E6%96%B0%E5%8E%BF%E7%BA%A7%E5%B8%82%E4%B8%BA%E8%B0%A3%E8%A8%80%23) `304.9K 🔥` `NEW`
1. [逼出最强孙颖莎的高达才17岁](https://s.weibo.com/weibo?q=%23%E9%80%BC%E5%87%BA%E6%9C%80%E5%BC%BA%E5%AD%99%E9%A2%96%E8%8E%8E%E7%9A%84%E9%AB%98%E8%BE%BE%E6%89%8D17%E5%B2%81%23) `304.6K 🔥` `NEW`
1. [松岛辉空4比0莫雷加德](https://s.weibo.com/weibo?q=%23%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA4%E6%AF%940%E8%8E%AB%E9%9B%B7%E5%8A%A0%E5%BE%B7%23) `286.9K 🔥` `NEW`
1. [孙颖莎说高达没防住](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%AF%B4%E9%AB%98%E8%BE%BE%E6%B2%A1%E9%98%B2%E4%BD%8F%23) `274.3K 🔥` `NEW`
1. [虞书欣签售会](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%AD%BE%E5%94%AE%E4%BC%9A%23) `247.9K 🔥` `NEW`
1. [李倩月到死都不知道凶手是男友](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%80%A9%E6%9C%88%E5%88%B0%E6%AD%BB%E9%83%BD%E4%B8%8D%E7%9F%A5%E9%81%93%E5%87%B6%E6%89%8B%E6%98%AF%E7%94%B7%E5%8F%8B%23) `211.7K 🔥` `NEW`
1. [穆祉丞身后有整个家族撑腰](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E8%BA%AB%E5%90%8E%E6%9C%89%E6%95%B4%E4%B8%AA%E5%AE%B6%E6%97%8F%E6%92%91%E8%85%B0%23) `133.9K 🔥` `NEW`
1. [90后立遗嘱把压岁钱游戏账号给朋友](https://s.weibo.com/weibo?q=%2390%E5%90%8E%E7%AB%8B%E9%81%97%E5%98%B1%E6%8A%8A%E5%8E%8B%E5%B2%81%E9%92%B1%E6%B8%B8%E6%88%8F%E8%B4%A6%E5%8F%B7%E7%BB%99%E6%9C%8B%E5%8F%8B%23) `118.1K 🔥` `NEW`
1. [黄磊12岁二女儿身高 (The height of Huang Lei's 12-year-old second daughter)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%A3%8A12%E5%B2%81%E4%BA%8C%E5%A5%B3%E5%84%BF%E8%BA%AB%E9%AB%98%23) `111.5K 🔥` `NEW`
1. [郭焱解说孙颖莎4比3高达](https://s.weibo.com/weibo?q=%23%E9%83%AD%E7%84%B1%E8%A7%A3%E8%AF%B4%E5%AD%99%E9%A2%96%E8%8E%8E4%E6%AF%943%E9%AB%98%E8%BE%BE%23) `89.9K 🔥` `NEW`
1. [TES对战iG](https://s.weibo.com/weibo?q=%23TES%E5%AF%B9%E6%88%98iG%23) `88.7K 🔥` `NEW`
1. [特朗普破防开怼欧洲领导人](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A0%B4%E9%98%B2%E5%BC%80%E6%80%BC%E6%AC%A7%E6%B4%B2%E9%A2%86%E5%AF%BC%E4%BA%BA%23) `86.1K 🔥` `NEW`
1. [郭富城小女儿近照](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AF%8C%E5%9F%8E%E5%B0%8F%E5%A5%B3%E5%84%BF%E8%BF%91%E7%85%A7%23) `81.3K 🔥` `NEW`
1. [松岛辉空晋级世界杯四强](https://s.weibo.com/weibo?q=%23%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%E6%99%8B%E7%BA%A7%E4%B8%96%E7%95%8C%E6%9D%AF%E5%9B%9B%E5%BC%BA%23) `79.4K 🔥` `NEW`
1. [印度女子好心给水喝反遭强奸](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%A5%B3%E5%AD%90%E5%A5%BD%E5%BF%83%E7%BB%99%E6%B0%B4%E5%96%9D%E5%8F%8D%E9%81%AD%E5%BC%BA%E5%A5%B8%23) `78.3K 🔥` `NEW`
1. [给小狗录鼻纹](https://s.weibo.com/weibo?q=%23%E7%BB%99%E5%B0%8F%E7%8B%97%E5%BD%95%E9%BC%BB%E7%BA%B9%23) `71.5K 🔥` `NEW`
1. [郭焱说孙颖莎太牛了](https://s.weibo.com/weibo?q=%23%E9%83%AD%E7%84%B1%E8%AF%B4%E5%AD%99%E9%A2%96%E8%8E%8E%E5%A4%AA%E7%89%9B%E4%BA%86%23) `67.4K 🔥` `NEW`
1. [孙颖莎决胜局2比6落后惊天逆转](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%86%B3%E8%83%9C%E5%B1%802%E6%AF%946%E8%90%BD%E5%90%8E%E6%83%8A%E5%A4%A9%E9%80%86%E8%BD%AC%23) `67.2K 🔥` `NEW`
1. [对方的童年遇上了对方的未来 (The other person’s childhood meets the other person’s future)](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E6%96%B9%E7%9A%84%E7%AB%A5%E5%B9%B4%E9%81%87%E4%B8%8A%E4%BA%86%E5%AF%B9%E6%96%B9%E7%9A%84%E6%9C%AA%E6%9D%A5%23) `64.6K 🔥` `NEW`
1. [米饭冰淇淋](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E9%A5%AD%E5%86%B0%E6%B7%87%E6%B7%8B%23) `62.8K 🔥` `NEW`
1. [现在是买黄金好时机么](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E6%98%AF%E4%B9%B0%E9%BB%84%E9%87%91%E5%A5%BD%E6%97%B6%E6%9C%BA%E4%B9%88%23) `62.2K 🔥` `NEW`
1. [十日终焉](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `1.0M 🔥` `+745%`
1. [美国提议停火48小时](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%8F%90%E8%AE%AE%E5%81%9C%E7%81%AB48%E5%B0%8F%E6%97%B6%23) `330.8K 🔥` `+302%`
1. [当你以为回县城老家是退路时](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BD%A0%E4%BB%A5%E4%B8%BA%E5%9B%9E%E5%8E%BF%E5%9F%8E%E8%80%81%E5%AE%B6%E6%98%AF%E9%80%80%E8%B7%AF%E6%97%B6%23) `306.8K 🔥` `+113%`
1. [1层3户只有1家被贴满小广告](https://s.weibo.com/weibo?q=%231%E5%B1%823%E6%88%B7%E5%8F%AA%E6%9C%891%E5%AE%B6%E8%A2%AB%E8%B4%B4%E6%BB%A1%E5%B0%8F%E5%B9%BF%E5%91%8A%23) `271.2K 🔥` `+131%`
1. [王传君和爱情公寓和解了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E5%92%8C%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E5%92%8C%E8%A7%A3%E4%BA%86%23) `260.6K 🔥` `+122%`
1. [高达哭了 (Gundam cried)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%BE%BE%E5%93%AD%E4%BA%86%23) `195.4K 🔥` `+135%`
1. [未成年画师疑被父母送戒网瘾学校](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%88%90%E5%B9%B4%E7%94%BB%E5%B8%88%E7%96%91%E8%A2%AB%E7%88%B6%E6%AF%8D%E9%80%81%E6%88%92%E7%BD%91%E7%98%BE%E5%AD%A6%E6%A0%A1%23) `146.2K 🔥` `+47%`
1. [原来真有人住的房子这么大](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%9C%9F%E6%9C%89%E4%BA%BA%E4%BD%8F%E7%9A%84%E6%88%BF%E5%AD%90%E8%BF%99%E4%B9%88%E5%A4%A7%23) `131.6K 🔥`
1. [刘亦菲G社最严厉的母亲 (Liu Yifei G agency’s strictest mother)](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2G%E7%A4%BE%E6%9C%80%E4%B8%A5%E5%8E%89%E7%9A%84%E6%AF%8D%E4%BA%B2%23) `121.3K 🔥`
1. [谢霆锋戴与王菲26年前定情手镯](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E6%88%B4%E4%B8%8E%E7%8E%8B%E8%8F%B226%E5%B9%B4%E5%89%8D%E5%AE%9A%E6%83%85%E6%89%8B%E9%95%AF%23) `114.9K 🔥`
1. [午睡时间超1小时死亡风险增加30%](https://s.weibo.com/weibo?q=%23%E5%8D%88%E7%9D%A1%E6%97%B6%E9%97%B4%E8%B6%851%E5%B0%8F%E6%97%B6%E6%AD%BB%E4%BA%A1%E9%A3%8E%E9%99%A9%E5%A2%9E%E5%8A%A030%25%23) `110.5K 🔥`
1. [王橹杰 锁骨连肩](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%20%E9%94%81%E9%AA%A8%E8%BF%9E%E8%82%A9%23) `107.9K 🔥`
1. [张若昀发唐艺昕直拍 (Zhang Ruoyun sends Tang Yixin to shoot directly)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%8B%A5%E6%98%80%E5%8F%91%E5%94%90%E8%89%BA%E6%98%95%E7%9B%B4%E6%8B%8D%23) `102.3K 🔥`
1. [女生回应午睡5小时被领导警告](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E5%9B%9E%E5%BA%94%E5%8D%88%E7%9D%A15%E5%B0%8F%E6%97%B6%E8%A2%AB%E9%A2%86%E5%AF%BC%E8%AD%A6%E5%91%8A%23) `101.3K 🔥`
1. [南京被害女大学生父亲现状](https://s.weibo.com/weibo?q=%23%E5%8D%97%E4%BA%AC%E8%A2%AB%E5%AE%B3%E5%A5%B3%E5%A4%A7%E5%AD%A6%E7%94%9F%E7%88%B6%E4%BA%B2%E7%8E%B0%E7%8A%B6%23) `101.1K 🔥`
1. [第一次走红毯的angelababy (angelababy walks the red carpet for the first time)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%B5%B0%E7%BA%A2%E6%AF%AF%E7%9A%84angelababy%23) `92.0K 🔥`
1. [优思益](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%23) `88.9K 🔥`
1. [黄金大幅回落](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%A4%A7%E5%B9%85%E5%9B%9E%E8%90%BD%23) `88.4K 🔥`
1. [何宣林是孟子义的大学班主任 (He Xuanlin is Meng Ziyi’s university class teacher)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%E6%98%AF%E5%AD%9F%E5%AD%90%E4%B9%89%E7%9A%84%E5%A4%A7%E5%AD%A6%E7%8F%AD%E4%B8%BB%E4%BB%BB%23) `73.5K 🔥`
1. [孙颖莎4比3高达 (Sun Yingsha 4 to 3 Gundam)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E4%E6%AF%943%E9%AB%98%E8%BE%BE%23) `726.0K 🔥` `-31%`
1. [清明上山扫墓却发现母亲的墓不见了 (I went up the mountain to sweep graves during the Qingming Festival, only to find that my mother’s tomb was missing.)](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%98%8E%E4%B8%8A%E5%B1%B1%E6%89%AB%E5%A2%93%E5%8D%B4%E5%8F%91%E7%8E%B0%E6%AF%8D%E4%BA%B2%E7%9A%84%E5%A2%93%E4%B8%8D%E8%A7%81%E4%BA%86%23) `240.1K 🔥` `-68%`
1. [浪姐改赛制给齐思钧苦得都掐眉头了](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%94%B9%E8%B5%9B%E5%88%B6%E7%BB%99%E9%BD%90%E6%80%9D%E9%92%A7%E8%8B%A6%E5%BE%97%E9%83%BD%E6%8E%90%E7%9C%89%E5%A4%B4%E4%BA%86%23) `101.3K 🔥` `-45%`
1. [唐艺昕因皮肤原因4年未拍戏 (Tang Yixin stopped filming for 4 years due to skin reasons)](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E5%9B%A0%E7%9A%AE%E8%82%A4%E5%8E%9F%E5%9B%A04%E5%B9%B4%E6%9C%AA%E6%8B%8D%E6%88%8F%23) `90.4K 🔥` `-22%`
1. [李兰迪回应何宣林wink](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%85%B0%E8%BF%AA%E5%9B%9E%E5%BA%94%E4%BD%95%E5%AE%A3%E6%9E%97wink%23) `81.6K 🔥` `-21%`
1. [凡人修仙传 (A Mortal's Story of Cultivation into Immortality)](https://s.weibo.com/weibo?q=%23%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0%23) `80.1K 🔥` `-30%`
1. [因为自制力差一下午赚了七千](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E4%B8%BA%E8%87%AA%E5%88%B6%E5%8A%9B%E5%B7%AE%E4%B8%80%E4%B8%8B%E5%8D%88%E8%B5%9A%E4%BA%86%E4%B8%83%E5%8D%83%23) `75.3K 🔥` `-35%`
1. [歌不是谁唱火的谁有版权 (The song is not about who sings it, but who owns the copyright?)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E4%B8%8D%E6%98%AF%E8%B0%81%E5%94%B1%E7%81%AB%E7%9A%84%E8%B0%81%E6%9C%89%E7%89%88%E6%9D%83%23) `68.7K 🔥` `-32%`

Updated at 2026-04-04 15:59:12

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
