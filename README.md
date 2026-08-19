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

1. [宇树科技上市庆功照流出 (Photos of Yushu Technology’s listing celebration leaked)](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E4%B8%8A%E5%B8%82%E5%BA%86%E5%8A%9F%E7%85%A7%E6%B5%81%E5%87%BA%23) `699.4K 🔥` `NEW`
1. [A股全市场逾百股跌停](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%85%A8%E5%B8%82%E5%9C%BA%E9%80%BE%E7%99%BE%E8%82%A1%E8%B7%8C%E5%81%9C%23) `415.0K 🔥` `NEW`
1. [宇树中签者赚38万退出炒股群](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E4%B8%AD%E7%AD%BE%E8%80%85%E8%B5%9A38%E4%B8%87%E9%80%80%E5%87%BA%E7%82%92%E8%82%A1%E7%BE%A4%23) `413.8K 🔥` `NEW`
1. [升学宴事故镇政府称有让不大操大办](https://s.weibo.com/weibo?q=%23%E5%8D%87%E5%AD%A6%E5%AE%B4%E4%BA%8B%E6%95%85%E9%95%87%E6%94%BF%E5%BA%9C%E7%A7%B0%E6%9C%89%E8%AE%A9%E4%B8%8D%E5%A4%A7%E6%93%8D%E5%A4%A7%E5%8A%9E%23) `364.0K 🔥` `NEW`
1. [四六级查分时间](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%85%AD%E7%BA%A7%E6%9F%A5%E5%88%86%E6%97%B6%E9%97%B4%23) `317.1K 🔥` `NEW`
1. [王兴兴回应从大疆离职](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%85%B4%E5%85%B4%E5%9B%9E%E5%BA%94%E4%BB%8E%E5%A4%A7%E7%96%86%E7%A6%BB%E8%81%8C%23) `316.1K 🔥` `NEW`
1. [空枪观后感](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%E8%A7%82%E5%90%8E%E6%84%9F%23) `308.0K 🔥` `NEW`
1. [宇树中签者七夕赚了38万1314](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E4%B8%AD%E7%AD%BE%E8%80%85%E4%B8%83%E5%A4%95%E8%B5%9A%E4%BA%8638%E4%B8%871314%23) `307.4K 🔥` `NEW`
1. [升学宴事故亲属称主家人未受伤](https://s.weibo.com/weibo?q=%23%E5%8D%87%E5%AD%A6%E5%AE%B4%E4%BA%8B%E6%95%85%E4%BA%B2%E5%B1%9E%E7%A7%B0%E4%B8%BB%E5%AE%B6%E4%BA%BA%E6%9C%AA%E5%8F%97%E4%BC%A4%23) `278.4K 🔥` `NEW`
1. [朱志鑫完全电竞男主](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E5%AE%8C%E5%85%A8%E7%94%B5%E7%AB%9E%E7%94%B7%E4%B8%BB%23) `201.8K 🔥` `NEW`
1. [拐卖王星等至境外电诈园区案 (The case of abducting Wang Xing and others to an overseas electronic fraud park)](https://s.weibo.com/weibo?q=%23%E6%8B%90%E5%8D%96%E7%8E%8B%E6%98%9F%E7%AD%89%E8%87%B3%E5%A2%83%E5%A4%96%E7%94%B5%E8%AF%88%E5%9B%AD%E5%8C%BA%E6%A1%88%23) `199.7K 🔥` `NEW`
1. [公积金优势缩水](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E4%BC%98%E5%8A%BF%E7%BC%A9%E6%B0%B4%23) `179.7K 🔥` `NEW`
1. [曾辉小考唱歌时小沈阳的表情](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E5%B0%8F%E8%80%83%E5%94%B1%E6%AD%8C%E6%97%B6%E5%B0%8F%E6%B2%88%E9%98%B3%E7%9A%84%E8%A1%A8%E6%83%85%23) `163.4K 🔥` `NEW`
1. [雷童 春子](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E7%AB%A5%20%E6%98%A5%E5%AD%90%23) `145.7K 🔥` `NEW`
1. [尚公主剧宣尺度](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%E5%89%A7%E5%AE%A3%E5%B0%BA%E5%BA%A6%23) `298.5K 🔥` `+39%`
1. [老人院内晾花生遭小车进院全部碾碎](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E9%99%A2%E5%86%85%E6%99%BE%E8%8A%B1%E7%94%9F%E9%81%AD%E5%B0%8F%E8%BD%A6%E8%BF%9B%E9%99%A2%E5%85%A8%E9%83%A8%E7%A2%BE%E7%A2%8E%23) `289.8K 🔥` `+34%`
1. [人到中年爱好开始逐渐离谱了](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%88%B0%E4%B8%AD%E5%B9%B4%E7%88%B1%E5%A5%BD%E5%BC%80%E5%A7%8B%E9%80%90%E6%B8%90%E7%A6%BB%E8%B0%B1%E4%BA%86%23) `1.2M 🔥`
1. [谢娜杨迪用错杯子去后台吐了](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%9D%A8%E8%BF%AA%E7%94%A8%E9%94%99%E6%9D%AF%E5%AD%90%E5%8E%BB%E5%90%8E%E5%8F%B0%E5%90%90%E4%BA%86%23) `837.7K 🔥`
1. [未来5年全民医保这样干 (This is how universal health insurance will work in the next five years)](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A55%E5%B9%B4%E5%85%A8%E6%B0%91%E5%8C%BB%E4%BF%9D%E8%BF%99%E6%A0%B7%E5%B9%B2%23) `762.1K 🔥`
1. [瑞幸为什么不联名余则成和翠萍](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E8%81%94%E5%90%8D%E4%BD%99%E5%88%99%E6%88%90%E5%92%8C%E7%BF%A0%E8%90%8D%23) `404.1K 🔥`
1. [宇树上市杭州批量诞生亿万富翁](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E4%B8%8A%E5%B8%82%E6%9D%AD%E5%B7%9E%E6%89%B9%E9%87%8F%E8%AF%9E%E7%94%9F%E4%BA%BF%E4%B8%87%E5%AF%8C%E7%BF%81%23) `399.8K 🔥`
1. [二搭会让内娱爆炸的男女主 (The male and female protagonist whose second partner will make domestic entertainment explode)](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E6%90%AD%E4%BC%9A%E8%AE%A9%E5%86%85%E5%A8%B1%E7%88%86%E7%82%B8%E7%9A%84%E7%94%B7%E5%A5%B3%E4%B8%BB%23) `363.3K 🔥`
1. [减肥避谶](https://s.weibo.com/weibo?q=%23%E5%87%8F%E8%82%A5%E9%81%BF%E8%B0%B6%23) `356.0K 🔥`
1. [七夕 冷清](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%20%E5%86%B7%E6%B8%85%23) `345.6K 🔥`
1. [李昀锐孟子义七夕物料不像演的](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%AD%9F%E5%AD%90%E4%B9%89%E4%B8%83%E5%A4%95%E7%89%A9%E6%96%99%E4%B8%8D%E5%83%8F%E6%BC%94%E7%9A%84%23) `338.7K 🔥`
1. [当地村民解释什么是女儿墙](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%9C%B0%E6%9D%91%E6%B0%91%E8%A7%A3%E9%87%8A%E4%BB%80%E4%B9%88%E6%98%AF%E5%A5%B3%E5%84%BF%E5%A2%99%23) `332.2K 🔥`
1. [韩国被曝性贿赂3名中国足协人士](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%A2%AB%E6%9B%9D%E6%80%A7%E8%B4%BF%E8%B5%823%E5%90%8D%E4%B8%AD%E5%9B%BD%E8%B6%B3%E5%8D%8F%E4%BA%BA%E5%A3%AB%23) `322.5K 🔥`
1. [不知道送异性什么礼物的我就这样](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E7%9F%A5%E9%81%93%E9%80%81%E5%BC%82%E6%80%A7%E4%BB%80%E4%B9%88%E7%A4%BC%E7%89%A9%E7%9A%84%E6%88%91%E5%B0%B1%E8%BF%99%E6%A0%B7%23) `301.7K 🔥`
1. [Selina胖了好多 (Selina has gained a lot of weight)](https://s.weibo.com/weibo?q=%23Selina%E8%83%96%E4%BA%86%E5%A5%BD%E5%A4%9A%23) `297.6K 🔥`
1. [范丞丞怎么瘦了这么多 (Why did Fan Chengcheng lose so much weight?)](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E6%80%8E%E4%B9%88%E7%98%A6%E4%BA%86%E8%BF%99%E4%B9%88%E5%A4%9A%23) `289.3K 🔥`
1. [毕夏在丈夫去世1年后因车祸开颅](https://s.weibo.com/weibo?q=%23%E6%AF%95%E5%A4%8F%E5%9C%A8%E4%B8%88%E5%A4%AB%E5%8E%BB%E4%B8%961%E5%B9%B4%E5%90%8E%E5%9B%A0%E8%BD%A6%E7%A5%B8%E5%BC%80%E9%A2%85%23) `288.5K 🔥`
1. [AI演员都有线下路透了](https://s.weibo.com/weibo?q=%23AI%E6%BC%94%E5%91%98%E9%83%BD%E6%9C%89%E7%BA%BF%E4%B8%8B%E8%B7%AF%E9%80%8F%E4%BA%86%23) `253.7K 🔥`
1. [空枪](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%23) `206.3K 🔥`
1. [王鹤棣吴泽林事件时间线 (Wang Hedi and Wu Zelin incident timeline)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%90%B4%E6%B3%BD%E6%9E%97%E4%BA%8B%E4%BB%B6%E6%97%B6%E9%97%B4%E7%BA%BF%23) `199.4K 🔥`
1. [蓝盈莹要求工作群消息尽量秒回](https://s.weibo.com/weibo?q=%23%E8%93%9D%E7%9B%88%E8%8E%B9%E8%A6%81%E6%B1%82%E5%B7%A5%E4%BD%9C%E7%BE%A4%E6%B6%88%E6%81%AF%E5%B0%BD%E9%87%8F%E7%A7%92%E5%9B%9E%23) `195.8K 🔥`
1. [6个月产假休3个月后被要求返岗 (6 months maternity leave, required to return to work after 3 months)](https://s.weibo.com/weibo?q=%236%E4%B8%AA%E6%9C%88%E4%BA%A7%E5%81%87%E4%BC%913%E4%B8%AA%E6%9C%88%E5%90%8E%E8%A2%AB%E8%A6%81%E6%B1%82%E8%BF%94%E5%B2%97%23) `173.8K 🔥`
1. [白鹿七夕剧宣好忙 (White Deer Chinese Valentine's Day drama promotion is very busy)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%B8%83%E5%A4%95%E5%89%A7%E5%AE%A3%E5%A5%BD%E5%BF%99%23) `172.0K 🔥`
1. [中央巡查组怒斥甘肃企业环环失控](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%A4%AE%E5%B7%A1%E6%9F%A5%E7%BB%84%E6%80%92%E6%96%A5%E7%94%98%E8%82%83%E4%BC%81%E4%B8%9A%E7%8E%AF%E7%8E%AF%E5%A4%B1%E6%8E%A7%23) `168.3K 🔥`
1. [王兴兴拿下90后新首富](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%85%B4%E5%85%B4%E6%8B%BF%E4%B8%8B90%E5%90%8E%E6%96%B0%E9%A6%96%E5%AF%8C%23) `143.3K 🔥`
1. [厨房纸 致癌物](https://s.weibo.com/weibo?q=%23%E5%8E%A8%E6%88%BF%E7%BA%B8%20%E8%87%B4%E7%99%8C%E7%89%A9%23) `143.1K 🔥`
1. [七夕送礼上淘宝最快半日达](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%E9%80%81%E7%A4%BC%E4%B8%8A%E6%B7%98%E5%AE%9D%E6%9C%80%E5%BF%AB%E5%8D%8A%E6%97%A5%E8%BE%BE%23) `754.6K 🔥` `-32%`
1. [巩立姣还要减重20斤 (Gong Lijiao still needs to lose 20 pounds)](https://s.weibo.com/weibo?q=%23%E5%B7%A9%E7%AB%8B%E5%A7%A3%E8%BF%98%E8%A6%81%E5%87%8F%E9%87%8D20%E6%96%A4%23) `413.6K 🔥` `-35%`
1. [北电副院长1200万动画票房0 (Nortel Vice President 12 million animation box office 0)](https://s.weibo.com/weibo?q=%23%E5%8C%97%E7%94%B5%E5%89%AF%E9%99%A2%E9%95%BF1200%E4%B8%87%E5%8A%A8%E7%94%BB%E7%A5%A8%E6%88%BF0%23) `398.7K 🔥` `-26%`
1. [孟子义李昀锐白天避嫌晚上营业 (Meng Ziyi and Li Yunrui avoid suspicion during the day and open business at night)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E7%99%BD%E5%A4%A9%E9%81%BF%E5%AB%8C%E6%99%9A%E4%B8%8A%E8%90%A5%E4%B8%9A%23) `270.3K 🔥` `-30%`
1. [师兄太稳健 (Brother is too stable)](https://s.weibo.com/weibo?q=%23%E5%B8%88%E5%85%84%E5%A4%AA%E7%A8%B3%E5%81%A5%23) `263.9K 🔥` `-30%`
1. [七夕 (Chinese Valentine's Day)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%23) `245.7K 🔥` `-34%`
1. [剩菜剩饭直接喂猪违法 (Feeding leftovers directly to pigs is illegal)](https://s.weibo.com/weibo?q=%23%E5%89%A9%E8%8F%9C%E5%89%A9%E9%A5%AD%E7%9B%B4%E6%8E%A5%E5%96%82%E7%8C%AA%E8%BF%9D%E6%B3%95%23) `218.4K 🔥` `-24%`
1. [终于理解为什么老一辈总是见面那么多话](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%90%86%E8%A7%A3%E4%B8%BA%E4%BB%80%E4%B9%88%E8%80%81%E4%B8%80%E8%BE%88%E6%80%BB%E6%98%AF%E8%A7%81%E9%9D%A2%E9%82%A3%E4%B9%88%E5%A4%9A%E8%AF%9D%23) `178.9K 🔥` `-28%`
1. [2026七夕晚会节目单](https://s.weibo.com/weibo?q=%232026%E4%B8%83%E5%A4%95%E6%99%9A%E4%BC%9A%E8%8A%82%E7%9B%AE%E5%8D%95%23) `175.2K 🔥` `-37%`
1. [郭富城太话痨致奕境发布会超时](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AF%8C%E5%9F%8E%E5%A4%AA%E8%AF%9D%E7%97%A8%E8%87%B4%E5%A5%95%E5%A2%83%E5%8F%91%E5%B8%83%E4%BC%9A%E8%B6%85%E6%97%B6%23) `169.4K 🔥` `-54%`
1. [iPhone18发布会或定档9月9日](https://s.weibo.com/weibo?q=%23iPhone18%E5%8F%91%E5%B8%83%E4%BC%9A%E6%88%96%E5%AE%9A%E6%A1%A39%E6%9C%889%E6%97%A5%23) `155.0K 🔥` `-58%`
1. [出圈的国产高端香水什么水平 (What is the level of domestic high-end perfumes that are out of the circle?)](https://s.weibo.com/weibo?q=%23%E5%87%BA%E5%9C%88%E7%9A%84%E5%9B%BD%E4%BA%A7%E9%AB%98%E7%AB%AF%E9%A6%99%E6%B0%B4%E4%BB%80%E4%B9%88%E6%B0%B4%E5%B9%B3%23) `143.2K 🔥` `-61%`

Updated at 2026-08-19 17:18:24

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
