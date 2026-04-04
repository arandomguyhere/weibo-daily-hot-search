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

1. [孙颖莎4比3高达 (Sun Yingsha 4 to 3 Gundam)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E4%E6%AF%943%E9%AB%98%E8%BE%BE%23) `1.1M 🔥` `NEW`
1. [纪念碑下609级台阶背后的故事](https://s.weibo.com/weibo?q=%23%E7%BA%AA%E5%BF%B5%E7%A2%91%E4%B8%8B609%E7%BA%A7%E5%8F%B0%E9%98%B6%E8%83%8C%E5%90%8E%E7%9A%84%E6%95%85%E4%BA%8B%23) `601.7K 🔥` `NEW`
1. [当你以为回县城老家是退路时](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BD%A0%E4%BB%A5%E4%B8%BA%E5%9B%9E%E5%8E%BF%E5%9F%8E%E8%80%81%E5%AE%B6%E6%98%AF%E9%80%80%E8%B7%AF%E6%97%B6%23) `143.8K 🔥` `NEW`
1. [十日终焉](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `121.8K 🔥` `NEW`
1. [王传君和爱情公寓和解了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E5%92%8C%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E5%92%8C%E8%A7%A3%E4%BA%86%23) `117.1K 🔥` `NEW`
1. [孙颖莎扛住了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%89%9B%E4%BD%8F%E4%BA%86%23) `107.5K 🔥` `NEW`
1. [未成年画师疑被父母送戒网瘾学校](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%88%90%E5%B9%B4%E7%94%BB%E5%B8%88%E7%96%91%E8%A2%AB%E7%88%B6%E6%AF%8D%E9%80%81%E6%88%92%E7%BD%91%E7%98%BE%E5%AD%A6%E6%A0%A1%23) `99.4K 🔥` `NEW`
1. [汉娜高达逼出最强版孙颖莎](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%A8%9C%E9%AB%98%E8%BE%BE%E9%80%BC%E5%87%BA%E6%9C%80%E5%BC%BA%E7%89%88%E5%AD%99%E9%A2%96%E8%8E%8E%23) `92.1K 🔥` `NEW`
1. [孙颖莎展望对阵温特](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%B1%95%E6%9C%9B%E5%AF%B9%E9%98%B5%E6%B8%A9%E7%89%B9%23) `89.5K 🔥` `NEW`
1. [孙颖莎说非常不容易](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%AF%B4%E9%9D%9E%E5%B8%B8%E4%B8%8D%E5%AE%B9%E6%98%93%23) `84.1K 🔥` `NEW`
1. [高达哭了 (Gundam cried)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%BE%BE%E5%93%AD%E4%BA%86%23) `83.0K 🔥` `NEW`
1. [美国提议停火48小时](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%8F%90%E8%AE%AE%E5%81%9C%E7%81%AB48%E5%B0%8F%E6%97%B6%23) `82.3K 🔥` `NEW`
1. [孙颖莎关键分被判黄牌](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%85%B3%E9%94%AE%E5%88%86%E8%A2%AB%E5%88%A4%E9%BB%84%E7%89%8C%23) `81.2K 🔥` `NEW`
1. [佟丽娅小酒窝同台演出舞剧](https://s.weibo.com/weibo?q=%23%E4%BD%9F%E4%B8%BD%E5%A8%85%E5%B0%8F%E9%85%92%E7%AA%9D%E5%90%8C%E5%8F%B0%E6%BC%94%E5%87%BA%E8%88%9E%E5%89%A7%23) `81.2K 🔥` `NEW`
1. [孙颖莎vs汉娜高达](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Evs%E6%B1%89%E5%A8%9C%E9%AB%98%E8%BE%BE%23) `77.5K 🔥` `NEW`
1. [黄金大幅回落](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%A4%A7%E5%B9%85%E5%9B%9E%E8%90%BD%23) `76.8K 🔥` `NEW`
1. [谢娜乘风临场反应](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E4%B9%98%E9%A3%8E%E4%B8%B4%E5%9C%BA%E5%8F%8D%E5%BA%94%23) `76.0K 🔥` `NEW`
1. [杨瀚森连进7球](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%80%9A%E6%A3%AE%E8%BF%9E%E8%BF%9B7%E7%90%83%23) `74.9K 🔥` `NEW`
1. [孙颖莎4连胜](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E4%E8%BF%9E%E8%83%9C%23) `72.5K 🔥` `NEW`
1. [乘风热度](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E%E7%83%AD%E5%BA%A6%23) `68.2K 🔥` `NEW`
1. [月鳞绮纪第二日云合 (The clouds merge on the second day of the Moon Scale Qi Period)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E7%AC%AC%E4%BA%8C%E6%97%A5%E4%BA%91%E5%90%88%23) `67.3K 🔥` `NEW`
1. [新款AirPodsPro曝光](https://s.weibo.com/weibo?q=%23%E6%96%B0%E6%AC%BEAirPodsPro%E6%9B%9D%E5%85%89%23) `64.1K 🔥` `NEW`
1. [浪姐改赛制给齐思钧苦得都掐眉头了](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%94%B9%E8%B5%9B%E5%88%B6%E7%BB%99%E9%BD%90%E6%80%9D%E9%92%A7%E8%8B%A6%E5%BE%97%E9%83%BD%E6%8E%90%E7%9C%89%E5%A4%B4%E4%BA%86%23) `185.9K 🔥` `+45%`
1. [孙颖莎把高达打无奈了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%8A%8A%E9%AB%98%E8%BE%BE%E6%89%93%E6%97%A0%E5%A5%88%E4%BA%86%23) `122.8K 🔥` `+38%`
1. [第一次走红毯的angelababy (angelababy walks the red carpet for the first time)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%B5%B0%E7%BA%A2%E6%AF%AF%E7%9A%84angelababy%23) `81.2K 🔥` `+22%`
1. [刘亦菲G社最严厉的母亲](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2G%E7%A4%BE%E6%9C%80%E4%B8%A5%E5%8E%89%E7%9A%84%E6%AF%8D%E4%BA%B2%23) `116.3K 🔥`
1. [歌不是谁唱火的谁有版权 (The song is not about who sings it, but who owns the copyright?)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E4%B8%8D%E6%98%AF%E8%B0%81%E5%94%B1%E7%81%AB%E7%9A%84%E8%B0%81%E6%9C%89%E7%89%88%E6%9D%83%23) `100.8K 🔥`
1. [午睡时间超1小时死亡风险增加30%](https://s.weibo.com/weibo?q=%23%E5%8D%88%E7%9D%A1%E6%97%B6%E9%97%B4%E8%B6%851%E5%B0%8F%E6%97%B6%E6%AD%BB%E4%BA%A1%E9%A3%8E%E9%99%A9%E5%A2%9E%E5%8A%A030%25%23) `100.3K 🔥`
1. [谢霆锋戴与王菲26年前定情手镯](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E6%88%B4%E4%B8%8E%E7%8E%8B%E8%8F%B226%E5%B9%B4%E5%89%8D%E5%AE%9A%E6%83%85%E6%89%8B%E9%95%AF%23) `100.1K 🔥`
1. [王橹杰 锁骨连肩](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%20%E9%94%81%E9%AA%A8%E8%BF%9E%E8%82%A9%23) `100.0K 🔥`
1. [张若昀发唐艺昕直拍 (Zhang Ruoyun sends Tang Yixin to shoot directly)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%8B%A5%E6%98%80%E5%8F%91%E5%94%90%E8%89%BA%E6%98%95%E7%9B%B4%E6%8B%8D%23) `95.0K 🔥`
1. [女生回应午睡5小时被领导警告](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E5%9B%9E%E5%BA%94%E5%8D%88%E7%9D%A15%E5%B0%8F%E6%97%B6%E8%A2%AB%E9%A2%86%E5%AF%BC%E8%AD%A6%E5%91%8A%23) `92.9K 🔥`
1. [优思益](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%23) `74.5K 🔥`
1. [孙颖莎14比16高达 (Sun Yingsha 14 to 16 Gundam)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E14%E6%AF%9416%E9%AB%98%E8%BE%BE%23) `74.3K 🔥`
1. [俩游客花86元就餐店家嫌消费太少](https://s.weibo.com/weibo?q=%23%E4%BF%A9%E6%B8%B8%E5%AE%A2%E8%8A%B186%E5%85%83%E5%B0%B1%E9%A4%90%E5%BA%97%E5%AE%B6%E5%AB%8C%E6%B6%88%E8%B4%B9%E5%A4%AA%E5%B0%91%23) `70.6K 🔥`
1. [清明上山扫墓却发现母亲的墓不见了 (I went up the mountain to sweep graves during the Qingming Festival, only to find that my mother’s tomb was missing.)](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%98%8E%E4%B8%8A%E5%B1%B1%E6%89%AB%E5%A2%93%E5%8D%B4%E5%8F%91%E7%8E%B0%E6%AF%8D%E4%BA%B2%E7%9A%84%E5%A2%93%E4%B8%8D%E8%A7%81%E4%BA%86%23) `750.7K 🔥` `-30%`
1. [孙颖莎vs高达 (Sun Yingsha vs Gundam)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Evs%E9%AB%98%E8%BE%BE%23) `147.4K 🔥` `-50%`
1. [1层3户只有1家被贴满小广告](https://s.weibo.com/weibo?q=%231%E5%B1%823%E6%88%B7%E5%8F%AA%E6%9C%891%E5%AE%B6%E8%A2%AB%E8%B4%B4%E6%BB%A1%E5%B0%8F%E5%B9%BF%E5%91%8A%23) `117.6K 🔥` `-85%`
1. [原来真有人住的房子这么大](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%9C%9F%E6%9C%89%E4%BA%BA%E4%BD%8F%E7%9A%84%E6%88%BF%E5%AD%90%E8%BF%99%E4%B9%88%E5%A4%A7%23) `116.8K 🔥` `-48%`
1. [唐艺昕因皮肤原因4年未拍戏 (Tang Yixin stopped filming for 4 years due to skin reasons)](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E5%9B%A0%E7%9A%AE%E8%82%A4%E5%8E%9F%E5%9B%A04%E5%B9%B4%E6%9C%AA%E6%8B%8D%E6%88%8F%23) `115.7K 🔥` `-21%`
1. [因为自制力差一下午赚了七千](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E4%B8%BA%E8%87%AA%E5%88%B6%E5%8A%9B%E5%B7%AE%E4%B8%80%E4%B8%8B%E5%8D%88%E8%B5%9A%E4%BA%86%E4%B8%83%E5%8D%83%23) `115.2K 🔥` `-21%`
1. [南京被害女大学生父亲现状](https://s.weibo.com/weibo?q=%23%E5%8D%97%E4%BA%AC%E8%A2%AB%E5%AE%B3%E5%A5%B3%E5%A4%A7%E5%AD%A6%E7%94%9F%E7%88%B6%E4%BA%B2%E7%8E%B0%E7%8A%B6%23) `114.7K 🔥` `-21%`
1. [凡人修仙传](https://s.weibo.com/weibo?q=%23%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0%23) `114.7K 🔥` `-51%`
1. [李兰迪回应何宣林wink](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%85%B0%E8%BF%AA%E5%9B%9E%E5%BA%94%E4%BD%95%E5%AE%A3%E6%9E%97wink%23) `103.5K 🔥` `-58%`
1. [月鳞绮纪疑似不足1广 (Moonscale Qiji is suspected to be less than 1 wide)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E7%96%91%E4%BC%BC%E4%B8%8D%E8%B6%B31%E5%B9%BF%23) `84.8K 🔥` `-42%`
1. [属于中国人的清明仪式感](https://s.weibo.com/weibo?q=%23%E5%B1%9E%E4%BA%8E%E4%B8%AD%E5%9B%BD%E4%BA%BA%E7%9A%84%E6%B8%85%E6%98%8E%E4%BB%AA%E5%BC%8F%E6%84%9F%23) `78.5K 🔥` `-87%`
1. [何宣林是孟子义的大学班主任 (He Xuanlin is Meng Ziyi’s university class teacher)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%E6%98%AF%E5%AD%9F%E5%AD%90%E4%B9%89%E7%9A%84%E5%A4%A7%E5%AD%A6%E7%8F%AD%E4%B8%BB%E4%BB%BB%23) `76.1K 🔥` `-48%`
1. [美军经历开战以来最黑暗24小时](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E7%BB%8F%E5%8E%86%E5%BC%80%E6%88%98%E4%BB%A5%E6%9D%A5%E6%9C%80%E9%BB%91%E6%9A%9724%E5%B0%8F%E6%97%B6%23) `76.0K 🔥` `-48%`
1. [张雪称5亿设计logo害死哪吒 (Zhang Xue said 500 million yuan to design a logo killed Nezha)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E7%A7%B05%E4%BA%BF%E8%AE%BE%E8%AE%A1logo%E5%AE%B3%E6%AD%BB%E5%93%AA%E5%90%92%23) `75.9K 🔥` `-72%`

Updated at 2026-04-04 15:17:14

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
