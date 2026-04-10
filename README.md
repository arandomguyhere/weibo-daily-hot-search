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

1. [中方回应日本降级中日关系 (China responds to Japan's downgrade of Sino-Japanese relations)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E6%97%A5%E6%9C%AC%E9%99%8D%E7%BA%A7%E4%B8%AD%E6%97%A5%E5%85%B3%E7%B3%BB%23) `1.1M 🔥` `NEW`
1. [一蓄电池企业让员工体检前吃排铅药](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%93%84%E7%94%B5%E6%B1%A0%E4%BC%81%E4%B8%9A%E8%AE%A9%E5%91%98%E5%B7%A5%E4%BD%93%E6%A3%80%E5%89%8D%E5%90%83%E6%8E%92%E9%93%85%E8%8D%AF%23) `231.0K 🔥` `NEW`
1. [任贤齐认证的SUV](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E8%B4%A4%E9%BD%90%E8%AE%A4%E8%AF%81%E7%9A%84SUV%23) `216.4K 🔥` `NEW`
1. [冰湖重生癫剧](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E7%99%AB%E5%89%A7%23) `212.9K 🔥` `NEW`
1. [女子睡觉被15斤猫咪压致手腕骨折](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%9D%A1%E8%A7%89%E8%A2%AB15%E6%96%A4%E7%8C%AB%E5%92%AA%E5%8E%8B%E8%87%B4%E6%89%8B%E8%85%95%E9%AA%A8%E6%8A%98%23) `144.2K 🔥` `NEW`
1. [女子称花98万注射童颜针后头部受损](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E8%8A%B198%E4%B8%87%E6%B3%A8%E5%B0%84%E7%AB%A5%E9%A2%9C%E9%92%88%E5%90%8E%E5%A4%B4%E9%83%A8%E5%8F%97%E6%8D%9F%23) `134.6K 🔥` `NEW`
1. [肚子总是鼓鼓的可以练这个改善腹压](https://s.weibo.com/weibo?q=%23%E8%82%9A%E5%AD%90%E6%80%BB%E6%98%AF%E9%BC%93%E9%BC%93%E7%9A%84%E5%8F%AF%E4%BB%A5%E7%BB%83%E8%BF%99%E4%B8%AA%E6%94%B9%E5%96%84%E8%85%B9%E5%8E%8B%23) `133.4K 🔥` `NEW`
1. [官方通报填埋奔驰车祭祀](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A1%AB%E5%9F%8B%E5%A5%94%E9%A9%B0%E8%BD%A6%E7%A5%AD%E7%A5%80%23) `130.1K 🔥` `NEW`
1. [刘畊宏孩子都这么大了王俊凯还这么嫩](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%95%8A%E5%AE%8F%E5%AD%A9%E5%AD%90%E9%83%BD%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%BF%98%E8%BF%99%E4%B9%88%E5%AB%A9%23) `116.4K 🔥` `NEW`
1. [胡彦斌说终于有人为我身高发声](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%BD%A6%E6%96%8C%E8%AF%B4%E7%BB%88%E4%BA%8E%E6%9C%89%E4%BA%BA%E4%B8%BA%E6%88%91%E8%BA%AB%E9%AB%98%E5%8F%91%E5%A3%B0%23) `113.1K 🔥` `NEW`
1. [雷军回应小米冰淇淋 (Lei Jun responds to Xiaomi ice cream)](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94%E5%B0%8F%E7%B1%B3%E5%86%B0%E6%B7%87%E6%B7%8B%23) `110.7K 🔥` `NEW`
1. [没有樊振东的国乒还是国乒吗](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%9C%89%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%9A%84%E5%9B%BD%E4%B9%92%E8%BF%98%E6%98%AF%E5%9B%BD%E4%B9%92%E5%90%97%23) `107.5K 🔥` `NEW`
1. [杭州灵隐寺偶遇李现](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E7%81%B5%E9%9A%90%E5%AF%BA%E5%81%B6%E9%81%87%E6%9D%8E%E7%8E%B0%23) `88.7K 🔥` `NEW`
1. [A股本轮上涨能到多少点](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%9C%AC%E8%BD%AE%E4%B8%8A%E6%B6%A8%E8%83%BD%E5%88%B0%E5%A4%9A%E5%B0%91%E7%82%B9%23) `79.8K 🔥` `NEW`
1. [卓沅 种地吧录制](https://s.weibo.com/weibo?q=%23%E5%8D%93%E6%B2%85%20%E7%A7%8D%E5%9C%B0%E5%90%A7%E5%BD%95%E5%88%B6%23) `78.1K 🔥` `NEW`
1. [宋亚轩回中戏](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%9B%9E%E4%B8%AD%E6%88%8F%23) `75.0K 🔥` `NEW`
1. [小猫喝奶差点溺亡了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E5%96%9D%E5%A5%B6%E5%B7%AE%E7%82%B9%E6%BA%BA%E4%BA%A1%E4%BA%86%23) `72.3K 🔥` `NEW`
1. [伊朗放话以色列的账算美国头上](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%94%BE%E8%AF%9D%E4%BB%A5%E8%89%B2%E5%88%97%E7%9A%84%E8%B4%A6%E7%AE%97%E7%BE%8E%E5%9B%BD%E5%A4%B4%E4%B8%8A%23) `68.3K 🔥` `NEW`
1. [美方大肆迫害中国学生学者](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E6%96%B9%E5%A4%A7%E8%82%86%E8%BF%AB%E5%AE%B3%E4%B8%AD%E5%9B%BD%E5%AD%A6%E7%94%9F%E5%AD%A6%E8%80%85%23) `64.3K 🔥` `NEW`
1. [沈月大波浪红唇造型](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E5%A4%A7%E6%B3%A2%E6%B5%AA%E7%BA%A2%E5%94%87%E9%80%A0%E5%9E%8B%23) `62.9K 🔥` `NEW`
1. [微信开始采集方言了 (WeChat has started collecting dialects)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E5%BC%80%E5%A7%8B%E9%87%87%E9%9B%86%E6%96%B9%E8%A8%80%E4%BA%86%23) `61.2K 🔥` `NEW`
1. [你的养老账户结算了多少利息](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E5%85%BB%E8%80%81%E8%B4%A6%E6%88%B7%E7%BB%93%E7%AE%97%E4%BA%86%E5%A4%9A%E5%B0%91%E5%88%A9%E6%81%AF%23) `60.6K 🔥` `NEW`
1. [赵今麦Wallpaper封面](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6Wallpaper%E5%B0%81%E9%9D%A2%23) `60.5K 🔥` `NEW`
1. [填埋奔驰车祭祀当事人将整改](https://s.weibo.com/weibo?q=%23%E5%A1%AB%E5%9F%8B%E5%A5%94%E9%A9%B0%E8%BD%A6%E7%A5%AD%E7%A5%80%E5%BD%93%E4%BA%8B%E4%BA%BA%E5%B0%86%E6%95%B4%E6%94%B9%23) `59.0K 🔥` `NEW`
1. [林俊杰出道23周年发文](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E5%87%BA%E9%81%9323%E5%91%A8%E5%B9%B4%E5%8F%91%E6%96%87%23) `58.1K 🔥` `NEW`
1. [在全世界偶遇中国符号 (Encountering Chinese symbols around the world)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%85%A8%E4%B8%96%E7%95%8C%E5%81%B6%E9%81%87%E4%B8%AD%E5%9B%BD%E7%AC%A6%E5%8F%B7%23) `606.7K 🔥` `+77%`
1. [毛晓慧领衔主演十日终焉](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E6%99%93%E6%85%A7%E9%A2%86%E8%A1%94%E4%B8%BB%E6%BC%94%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `350.6K 🔥` `+205%`
1. [莫氏鸡煲员工吃了10多天外卖](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E5%91%98%E5%B7%A5%E5%90%83%E4%BA%8610%E5%A4%9A%E5%A4%A9%E5%A4%96%E5%8D%96%23) `174.3K 🔥` `+27%`
1. [民政局回应用真奔驰车陪葬](https://s.weibo.com/weibo?q=%23%E6%B0%91%E6%94%BF%E5%B1%80%E5%9B%9E%E5%BA%94%E7%94%A8%E7%9C%9F%E5%A5%94%E9%A9%B0%E8%BD%A6%E9%99%AA%E8%91%AC%23) `174.1K 🔥` `+109%`
1. [张维伊吃汉堡馒头4天减2.6斤](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%B4%E4%BC%8A%E5%90%83%E6%B1%89%E5%A0%A1%E9%A6%92%E5%A4%B44%E5%A4%A9%E5%87%8F2.6%E6%96%A4%23) `106.9K 🔥` `+84%`
1. [高质量发展中国行](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%B4%A8%E9%87%8F%E5%8F%91%E5%B1%95%E4%B8%AD%E5%9B%BD%E8%A1%8C%23) `638.3K 🔥`
1. [十日终焉开机 (Will be launched in ten days)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E5%BC%80%E6%9C%BA%23) `171.9K 🔥`
1. [边伯贤离开INB100 (Byun Baekhyun leaves INB100)](https://s.weibo.com/weibo?q=%23%E8%BE%B9%E4%BC%AF%E8%B4%A4%E7%A6%BB%E5%BC%80INB100%23) `169.1K 🔥`
1. [猪的抑郁症表现行为 (Depression behavior in pigs)](https://s.weibo.com/weibo?q=%23%E7%8C%AA%E7%9A%84%E6%8A%91%E9%83%81%E7%97%87%E8%A1%A8%E7%8E%B0%E8%A1%8C%E4%B8%BA%23) `167.3K 🔥`
1. [医生分析黄子韬嘴唇发紫原因 (Doctor analyzes the cause of Huang Zitao’s purple lips)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%88%86%E6%9E%90%E9%BB%84%E5%AD%90%E9%9F%AC%E5%98%B4%E5%94%87%E5%8F%91%E7%B4%AB%E5%8E%9F%E5%9B%A0%23) `165.8K 🔥`
1. [小猫反复确认能不能出去玩](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E5%8F%8D%E5%A4%8D%E7%A1%AE%E8%AE%A4%E8%83%BD%E4%B8%8D%E8%83%BD%E5%87%BA%E5%8E%BB%E7%8E%A9%23) `72.6K 🔥`
1. [李现帮我拍了拍立得](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E5%B8%AE%E6%88%91%E6%8B%8D%E4%BA%86%E6%8B%8D%E7%AB%8B%E5%BE%97%23) `72.5K 🔥`
1. [浪姐 (Sister Lang)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%23) `63.6K 🔥`
1. [小米食堂发布小米冰激凌 (Xiaomi Canteen releases Xiaomi ice cream)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E9%A3%9F%E5%A0%82%E5%8F%91%E5%B8%83%E5%B0%8F%E7%B1%B3%E5%86%B0%E6%BF%80%E5%87%8C%23) `775.6K 🔥` `-28%`
1. [李晟十日终焉选角好贴脸](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%9F%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E9%80%89%E8%A7%92%E5%A5%BD%E8%B4%B4%E8%84%B8%23) `226.9K 🔥` `-47%`
1. [我奶的联系人备注](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%A5%B6%E7%9A%84%E8%81%94%E7%B3%BB%E4%BA%BA%E5%A4%87%E6%B3%A8%23) `202.6K 🔥` `-46%`
1. [男子追求女技师被拒举报浴场涉黄](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%BF%BD%E6%B1%82%E5%A5%B3%E6%8A%80%E5%B8%88%E8%A2%AB%E6%8B%92%E4%B8%BE%E6%8A%A5%E6%B5%B4%E5%9C%BA%E6%B6%89%E9%BB%84%23) `181.3K 🔥` `-77%`
1. [日本外交蓝皮书降级中日关系](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A4%96%E4%BA%A4%E8%93%9D%E7%9A%AE%E4%B9%A6%E9%99%8D%E7%BA%A7%E4%B8%AD%E6%97%A5%E5%85%B3%E7%B3%BB%23) `169.7K 🔥` `-61%`
1. [伊朗最高领袖发表最新声明](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E5%8F%91%E8%A1%A8%E6%9C%80%E6%96%B0%E5%A3%B0%E6%98%8E%23) `162.5K 🔥` `-22%`
1. [痔疮手术9天后死亡医院只赔1万](https://s.weibo.com/weibo?q=%23%E7%97%94%E7%96%AE%E6%89%8B%E6%9C%AF9%E5%A4%A9%E5%90%8E%E6%AD%BB%E4%BA%A1%E5%8C%BB%E9%99%A2%E5%8F%AA%E8%B5%941%E4%B8%87%23) `134.4K 🔥` `-69%`
1. [研究发现血型和疾病的发生有相关性](https://s.weibo.com/weibo?q=%23%E7%A0%94%E7%A9%B6%E5%8F%91%E7%8E%B0%E8%A1%80%E5%9E%8B%E5%92%8C%E7%96%BE%E7%97%85%E7%9A%84%E5%8F%91%E7%94%9F%E6%9C%89%E7%9B%B8%E5%85%B3%E6%80%A7%23) `128.3K 🔥` `-35%`
1. [边伯贤金珉锡金钟大解约 (Byun Baekhyun, Kim Minseok, and Kim Jong terminate their contract)](https://s.weibo.com/weibo?q=%23%E8%BE%B9%E4%BC%AF%E8%B4%A4%E9%87%91%E7%8F%89%E9%94%A1%E9%87%91%E9%92%9F%E5%A4%A7%E8%A7%A3%E7%BA%A6%23) `110.3K 🔥` `-37%`
1. [十日终焉](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `108.3K 🔥` `-27%`
1. [胡先煦官宣十日终焉 (Hu Xianxu officially announced that the end of the ten-day period)](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6%E5%AE%98%E5%AE%A3%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `72.5K 🔥` `-83%`
1. [浪姐曾邀请孟子义被拒绝了](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%9B%BE%E9%82%80%E8%AF%B7%E5%AD%9F%E5%AD%90%E4%B9%89%E8%A2%AB%E6%8B%92%E7%BB%9D%E4%BA%86%23) `67.7K 🔥` `-48%`
1. [谢娜给张杰约按摩被拒](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E7%BB%99%E5%BC%A0%E6%9D%B0%E7%BA%A6%E6%8C%89%E6%91%A9%E8%A2%AB%E6%8B%92%23) `66.7K 🔥` `-63%`

Updated at 2026-04-10 17:20:37

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
