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

1. [孙红雷新座驾泰钽700上市了 (Sun Honglei’s new car Taitan 700 is launched)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%BA%A2%E9%9B%B7%E6%96%B0%E5%BA%A7%E9%A9%BE%E6%B3%B0%E9%92%BD700%E4%B8%8A%E5%B8%82%E4%BA%86%23) `506.5K 🔥` `NEW`
1. [杀害在韩女生嫌疑人曾自称男友报警](https://s.weibo.com/weibo?q=%23%E6%9D%80%E5%AE%B3%E5%9C%A8%E9%9F%A9%E5%A5%B3%E7%94%9F%E5%AB%8C%E7%96%91%E4%BA%BA%E6%9B%BE%E8%87%AA%E7%A7%B0%E7%94%B7%E5%8F%8B%E6%8A%A5%E8%AD%A6%23) `364.4K 🔥` `NEW`
1. [洪崖洞](https://s.weibo.com/weibo?q=%23%E6%B4%AA%E5%B4%96%E6%B4%9E%23) `320.6K 🔥` `NEW`
1. [时代少年团分享休假安排](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%88%86%E4%BA%AB%E4%BC%91%E5%81%87%E5%AE%89%E6%8E%92%23) `305.0K 🔥` `NEW`
1. [30多国准备派兵乌克兰](https://s.weibo.com/weibo?q=%2330%E5%A4%9A%E5%9B%BD%E5%87%86%E5%A4%87%E6%B4%BE%E5%85%B5%E4%B9%8C%E5%85%8B%E5%85%B0%23) `295.5K 🔥` `NEW`
1. [白鹿的奖运](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%9A%84%E5%A5%96%E8%BF%90%23) `192.3K 🔥` `NEW`
1. [医生谈1米67女孩101斤被认定偏重](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E8%B0%881%E7%B1%B367%E5%A5%B3%E5%AD%A9101%E6%96%A4%E8%A2%AB%E8%AE%A4%E5%AE%9A%E5%81%8F%E9%87%8D%23) `172.2K 🔥` `NEW`
1. [宋威龙方发声明抵制AI融脸](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E6%96%B9%E5%8F%91%E5%A3%B0%E6%98%8E%E6%8A%B5%E5%88%B6AI%E8%9E%8D%E8%84%B8%23) `171.9K 🔥` `NEW`
1. [我驻釜山总领事馆要求严惩凶手](https://s.weibo.com/weibo?q=%23%E6%88%91%E9%A9%BB%E9%87%9C%E5%B1%B1%E6%80%BB%E9%A2%86%E4%BA%8B%E9%A6%86%E8%A6%81%E6%B1%82%E4%B8%A5%E6%83%A9%E5%87%B6%E6%89%8B%23) `127.5K 🔥` `NEW`
1. [早春晴朗](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%23) `124.1K 🔥` `NEW`
1. [在嫌疑人住处发现在韩遇害女生遗体 (The body of a girl killed in South Korea was found at the suspect's residence)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%AB%8C%E7%96%91%E4%BA%BA%E4%BD%8F%E5%A4%84%E5%8F%91%E7%8E%B0%E5%9C%A8%E9%9F%A9%E9%81%87%E5%AE%B3%E5%A5%B3%E7%94%9F%E9%81%97%E4%BD%93%23) `1.1M 🔥` `+66%`
1. [中国公民尽快撤离斯威士兰](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E5%B0%BD%E5%BF%AB%E6%92%A4%E7%A6%BB%E6%96%AF%E5%A8%81%E5%A3%AB%E5%85%B0%23) `641.0K 🔥` `+107%`
1. [过得好的人最明显的标志](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%BE%97%E5%A5%BD%E7%9A%84%E4%BA%BA%E6%9C%80%E6%98%8E%E6%98%BE%E7%9A%84%E6%A0%87%E5%BF%97%23) `497.6K 🔥` `+143%`
1. [goodthings 难听](https://s.weibo.com/weibo?q=%23goodthings%20%E9%9A%BE%E5%90%AC%23) `327.4K 🔥`
1. [赴韩失联女生父母至今仍不知情](https://s.weibo.com/weibo?q=%23%E8%B5%B4%E9%9F%A9%E5%A4%B1%E8%81%94%E5%A5%B3%E7%94%9F%E7%88%B6%E6%AF%8D%E8%87%B3%E4%BB%8A%E4%BB%8D%E4%B8%8D%E7%9F%A5%E6%83%85%23) `324.2K 🔥`
1. [赵丽颖突发身体不适](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%AA%81%E5%8F%91%E8%BA%AB%E4%BD%93%E4%B8%8D%E9%80%82%23) `315.5K 🔥`
1. [在韩失联中国女生死因或涉暴力犯罪](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E9%9F%A9%E5%A4%B1%E8%81%94%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E6%AD%BB%E5%9B%A0%E6%88%96%E6%B6%89%E6%9A%B4%E5%8A%9B%E7%8A%AF%E7%BD%AA%23) `309.4K 🔥`
1. [刘亦菲茜茜公主大片](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E8%8C%9C%E8%8C%9C%E5%85%AC%E4%B8%BB%E5%A4%A7%E7%89%87%23) `305.6K 🔥`
1. [乳房触诊当事医生称已起诉](https://s.weibo.com/weibo?q=%23%E4%B9%B3%E6%88%BF%E8%A7%A6%E8%AF%8A%E5%BD%93%E4%BA%8B%E5%8C%BB%E7%94%9F%E7%A7%B0%E5%B7%B2%E8%B5%B7%E8%AF%89%23) `297.8K 🔥`
1. [灵活就业 社保压力](https://s.weibo.com/weibo?q=%23%E7%81%B5%E6%B4%BB%E5%B0%B1%E4%B8%9A%20%E7%A4%BE%E4%BF%9D%E5%8E%8B%E5%8A%9B%23) `283.4K 🔥`
1. [宋威龙赵丽颖被AI漫剧融脸 (Song Weilong and Zhao Liying were melted by AI cartoons)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E8%B5%B5%E4%B8%BD%E9%A2%96%E8%A2%ABAI%E6%BC%AB%E5%89%A7%E8%9E%8D%E8%84%B8%23) `274.3K 🔥`
1. [金鹰奖提名名单 (Golden Eagle Award Nomination List)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95%23) `270.4K 🔥`
1. [韩国愈演愈烈的失踪事件](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%84%88%E6%BC%94%E6%84%88%E7%83%88%E7%9A%84%E5%A4%B1%E8%B8%AA%E4%BA%8B%E4%BB%B6%23) `263.2K 🔥`
1. [爱情公寓 王冠](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%20%E7%8E%8B%E5%86%A0%23) `252.9K 🔥`
1. [韩警方将对遇害女生遗体进行尸检](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E8%AD%A6%E6%96%B9%E5%B0%86%E5%AF%B9%E9%81%87%E5%AE%B3%E5%A5%B3%E7%94%9F%E9%81%97%E4%BD%93%E8%BF%9B%E8%A1%8C%E5%B0%B8%E6%A3%80%23) `173.5K 🔥`
1. [何穗谈妊娠纹](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%A9%97%E8%B0%88%E5%A6%8A%E5%A8%A0%E7%BA%B9%23) `172.6K 🔥`
1. [亚运会预算超标](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E9%A2%84%E7%AE%97%E8%B6%85%E6%A0%87%23) `172.1K 🔥`
1. [苹果M6芯片](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9CM6%E8%8A%AF%E7%89%87%23) `167.6K 🔥`
1. [新款MacMini来了](https://s.weibo.com/weibo?q=%23%E6%96%B0%E6%AC%BEMacMini%E6%9D%A5%E4%BA%86%23) `146.0K 🔥`
1. [朱志鑫cue到troublemaker](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%ABcue%E5%88%B0troublemaker%23) `144.4K 🔥`
1. [读懂下半年中国经济发力方向](https://s.weibo.com/weibo?q=%23%E8%AF%BB%E6%87%82%E4%B8%8B%E5%8D%8A%E5%B9%B4%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E5%8F%91%E5%8A%9B%E6%96%B9%E5%90%91%23) `511.7K 🔥` `-62%`
1. [刘亦菲掉提金鹰奖最佳女主 (Liu Yifei was nominated for the Golden Eagle Award for Best Actress)](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E6%8E%89%E6%8F%90%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%23) `488.2K 🔥` `-21%`
1. [杭州警方通报女子称在电梯遭骚扰](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%90%E7%A7%B0%E5%9C%A8%E7%94%B5%E6%A2%AF%E9%81%AD%E9%AA%9A%E6%89%B0%23) `441.9K 🔥` `-73%`
1. [原来只有我上班在乱穿](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%8F%AA%E6%9C%89%E6%88%91%E4%B8%8A%E7%8F%AD%E5%9C%A8%E4%B9%B1%E7%A9%BF%23) `428.8K 🔥` `-48%`
1. [13岁上海女孩靠AI三天赚1.8万元](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E4%B8%8A%E6%B5%B7%E5%A5%B3%E5%AD%A9%E9%9D%A0AI%E4%B8%89%E5%A4%A9%E8%B5%9A1.8%E4%B8%87%E5%85%83%23) `366.6K 🔥` `-27%`
1. [爱情公寓](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%23) `332.6K 🔥` `-30%`
1. [在韩失联女生已遇害 (Missing girl in South Korea has been killed)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E9%9F%A9%E5%A4%B1%E8%81%94%E5%A5%B3%E7%94%9F%E5%B7%B2%E9%81%87%E5%AE%B3%23) `331.2K 🔥` `-96%`
1. [王俊凯小程序和网址备案](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%92%8C%E7%BD%91%E5%9D%80%E5%A4%87%E6%A1%88%23) `215.4K 🔥` `-25%`
1. [考公女子在星巴克撑伞备考](https://s.weibo.com/weibo?q=%23%E8%80%83%E5%85%AC%E5%A5%B3%E5%AD%90%E5%9C%A8%E6%98%9F%E5%B7%B4%E5%85%8B%E6%92%91%E4%BC%9E%E5%A4%87%E8%80%83%23) `210.1K 🔥` `-22%`
1. [25岁失联中国女生不太会说韩语 (25-year-old missing Chinese girl doesn’t speak Korean well)](https://s.weibo.com/weibo?q=%2325%E5%B2%81%E5%A4%B1%E8%81%94%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E4%B8%8D%E5%A4%AA%E4%BC%9A%E8%AF%B4%E9%9F%A9%E8%AF%AD%23) `174.5K 🔥` `-37%`
1. [这种黑色小飞虫是移动病菌库](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%A7%8D%E9%BB%91%E8%89%B2%E5%B0%8F%E9%A3%9E%E8%99%AB%E6%98%AF%E7%A7%BB%E5%8A%A8%E7%97%85%E8%8F%8C%E5%BA%93%23) `174.1K 🔥` `-35%`
1. [内娱十年前真的很流行谈恋爱和结婚](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E5%8D%81%E5%B9%B4%E5%89%8D%E7%9C%9F%E7%9A%84%E5%BE%88%E6%B5%81%E8%A1%8C%E8%B0%88%E6%81%8B%E7%88%B1%E5%92%8C%E7%BB%93%E5%A9%9A%23) `172.9K 🔥` `-34%`
1. [女子因裁员焦虑每天通宵学习](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%A0%E8%A3%81%E5%91%98%E7%84%A6%E8%99%91%E6%AF%8F%E5%A4%A9%E9%80%9A%E5%AE%B5%E5%AD%A6%E4%B9%A0%23) `156.1K 🔥` `-22%`
1. [台风 (typhoon)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `155.0K 🔥` `-24%`
1. [官方通报星宇股份解聘应届生 (Official notice: Xingyu Co., Ltd. dismisses fresh graduates)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%98%9F%E5%AE%87%E8%82%A1%E4%BB%BD%E8%A7%A3%E8%81%98%E5%BA%94%E5%B1%8A%E7%94%9F%23) `149.2K 🔥` `-27%`
1. [苹果发布全球首款量产2nm芯片 (Apple releases the world's first mass-produced 2nm chip)](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%8F%91%E5%B8%83%E5%85%A8%E7%90%83%E9%A6%96%E6%AC%BE%E9%87%8F%E4%BA%A72nm%E8%8A%AF%E7%89%87%23) `133.6K 🔥` `-33%`
1. [13岁用AI接百万商单](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E7%94%A8AI%E6%8E%A5%E7%99%BE%E4%B8%87%E5%95%86%E5%8D%95%23) `133.4K 🔥` `-50%`
1. [97%教师存在职业健康困扰](https://s.weibo.com/weibo?q=%2397%25%E6%95%99%E5%B8%88%E5%AD%98%E5%9C%A8%E8%81%8C%E4%B8%9A%E5%81%A5%E5%BA%B7%E5%9B%B0%E6%89%B0%23) `127.8K 🔥` `-55%`
1. [乳房触诊20多次后发现结节摸不到](https://s.weibo.com/weibo?q=%23%E4%B9%B3%E6%88%BF%E8%A7%A6%E8%AF%8A20%E5%A4%9A%E6%AC%A1%E5%90%8E%E5%8F%91%E7%8E%B0%E7%BB%93%E8%8A%82%E6%91%B8%E4%B8%8D%E5%88%B0%23) `126.0K 🔥` `-31%`
1. [原来大家都是这样防止被套话的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%A4%A7%E5%AE%B6%E9%83%BD%E6%98%AF%E8%BF%99%E6%A0%B7%E9%98%B2%E6%AD%A2%E8%A2%AB%E5%A5%97%E8%AF%9D%E7%9A%84%23) `123.0K 🔥` `-38%`
1. [72%教师下班后仍需及时回信息](https://s.weibo.com/weibo?q=%2372%25%E6%95%99%E5%B8%88%E4%B8%8B%E7%8F%AD%E5%90%8E%E4%BB%8D%E9%9C%80%E5%8F%8A%E6%97%B6%E5%9B%9E%E4%BF%A1%E6%81%AF%23) `118.4K 🔥` `-52%`

Updated at 2026-08-26 00:50:32

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
