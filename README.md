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

1. [在韩失联女生已遇害 (Missing girl in South Korea has been killed)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E9%9F%A9%E5%A4%B1%E8%81%94%E5%A5%B3%E7%94%9F%E5%B7%B2%E9%81%87%E5%AE%B3%23) `8.1M 🔥` `NEW`
1. [杭州警方通报女子称在电梯遭骚扰](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%90%E7%A7%B0%E5%9C%A8%E7%94%B5%E6%A2%AF%E9%81%AD%E9%AA%9A%E6%89%B0%23) `1.6M 🔥` `NEW`
1. [读懂下半年中国经济发力方向](https://s.weibo.com/weibo?q=%23%E8%AF%BB%E6%87%82%E4%B8%8B%E5%8D%8A%E5%B9%B4%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E5%8F%91%E5%8A%9B%E6%96%B9%E5%90%91%23) `1.3M 🔥` `NEW`
1. [你的第一个个人机器人](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E4%B8%AA%E4%BA%BA%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `842.8K 🔥` `NEW`
1. [原来只有我上班在乱穿](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%8F%AA%E6%9C%89%E6%88%91%E4%B8%8A%E7%8F%AD%E5%9C%A8%E4%B9%B1%E7%A9%BF%23) `822.2K 🔥` `NEW`
1. [在嫌疑人住处发现在韩遇害女生遗体](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%AB%8C%E7%96%91%E4%BA%BA%E4%BD%8F%E5%A4%84%E5%8F%91%E7%8E%B0%E5%9C%A8%E9%9F%A9%E9%81%87%E5%AE%B3%E5%A5%B3%E7%94%9F%E9%81%97%E4%BD%93%23) `635.9K 🔥` `NEW`
1. [刘亦菲掉提金鹰奖最佳女主](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E6%8E%89%E6%8F%90%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%23) `618.0K 🔥` `NEW`
1. [13岁上海女孩靠AI三天赚1.8万元](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E4%B8%8A%E6%B5%B7%E5%A5%B3%E5%AD%A9%E9%9D%A0AI%E4%B8%89%E5%A4%A9%E8%B5%9A1.8%E4%B8%87%E5%85%83%23) `499.3K 🔥` `NEW`
1. [爱情公寓](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%23) `473.0K 🔥` `NEW`
1. [中国公民尽快撤离斯威士兰](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E5%B0%BD%E5%BF%AB%E6%92%A4%E7%A6%BB%E6%96%AF%E5%A8%81%E5%A3%AB%E5%85%B0%23) `309.0K 🔥` `NEW`
1. [金鹰奖提名名单 (Golden Eagle Award Nomination List)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95%23) `296.7K 🔥` `NEW`
1. [赴韩失联女生父母至今仍不知情](https://s.weibo.com/weibo?q=%23%E8%B5%B4%E9%9F%A9%E5%A4%B1%E8%81%94%E5%A5%B3%E7%94%9F%E7%88%B6%E6%AF%8D%E8%87%B3%E4%BB%8A%E4%BB%8D%E4%B8%8D%E7%9F%A5%E6%83%85%23) `295.5K 🔥` `NEW`
1. [赵丽颖突发身体不适](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%AA%81%E5%8F%91%E8%BA%AB%E4%BD%93%E4%B8%8D%E9%80%82%23) `295.2K 🔥` `NEW`
1. [在韩失联中国女生死因或涉暴力犯罪](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E9%9F%A9%E5%A4%B1%E8%81%94%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E6%AD%BB%E5%9B%A0%E6%88%96%E6%B6%89%E6%9A%B4%E5%8A%9B%E7%8A%AF%E7%BD%AA%23) `292.7K 🔥` `NEW`
1. [刘亦菲茜茜公主大片](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E8%8C%9C%E8%8C%9C%E5%85%AC%E4%B8%BB%E5%A4%A7%E7%89%87%23) `291.4K 🔥` `NEW`
1. [韩国愈演愈烈的失踪事件](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%84%88%E6%BC%94%E6%84%88%E7%83%88%E7%9A%84%E5%A4%B1%E8%B8%AA%E4%BA%8B%E4%BB%B6%23) `289.7K 🔥` `NEW`
1. [乳房触诊当事医生称已起诉](https://s.weibo.com/weibo?q=%23%E4%B9%B3%E6%88%BF%E8%A7%A6%E8%AF%8A%E5%BD%93%E4%BA%8B%E5%8C%BB%E7%94%9F%E7%A7%B0%E5%B7%B2%E8%B5%B7%E8%AF%89%23) `289.2K 🔥` `NEW`
1. [宋威龙赵丽颖被AI漫剧融脸](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E8%B5%B5%E4%B8%BD%E9%A2%96%E8%A2%ABAI%E6%BC%AB%E5%89%A7%E8%9E%8D%E8%84%B8%23) `287.3K 🔥` `NEW`
1. [王俊凯小程序和网址备案](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B0%8F%E7%A8%8B%E5%BA%8F%E5%92%8C%E7%BD%91%E5%9D%80%E5%A4%87%E6%A1%88%23) `285.5K 🔥` `NEW`
1. [97%教师存在职业健康困扰](https://s.weibo.com/weibo?q=%2397%25%E6%95%99%E5%B8%88%E5%AD%98%E5%9C%A8%E8%81%8C%E4%B8%9A%E5%81%A5%E5%BA%B7%E5%9B%B0%E6%89%B0%23) `285.0K 🔥` `NEW`
1. [25岁失联中国女生不太会说韩语 (25-year-old missing Chinese girl doesn’t speak Korean well)](https://s.weibo.com/weibo?q=%2325%E5%B2%81%E5%A4%B1%E8%81%94%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E4%B8%8D%E5%A4%AA%E4%BC%9A%E8%AF%B4%E9%9F%A9%E8%AF%AD%23) `278.1K 🔥` `NEW`
1. [goodthings 难听](https://s.weibo.com/weibo?q=%23goodthings%20%E9%9A%BE%E5%90%AC%23) `276.2K 🔥` `NEW`
1. [灵活就业 社保压力](https://s.weibo.com/weibo?q=%23%E7%81%B5%E6%B4%BB%E5%B0%B1%E4%B8%9A%20%E7%A4%BE%E4%BF%9D%E5%8E%8B%E5%8A%9B%23) `273.7K 🔥` `NEW`
1. [爱情公寓 王冠](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%20%E7%8E%8B%E5%86%A0%23) `271.0K 🔥` `NEW`
1. [考公女子在星巴克撑伞备考](https://s.weibo.com/weibo?q=%23%E8%80%83%E5%85%AC%E5%A5%B3%E5%AD%90%E5%9C%A8%E6%98%9F%E5%B7%B4%E5%85%8B%E6%92%91%E4%BC%9E%E5%A4%87%E8%80%83%23) `268.0K 🔥` `NEW`
1. [这种黑色小飞虫是移动病菌库](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%A7%8D%E9%BB%91%E8%89%B2%E5%B0%8F%E9%A3%9E%E8%99%AB%E6%98%AF%E7%A7%BB%E5%8A%A8%E7%97%85%E8%8F%8C%E5%BA%93%23) `267.2K 🔥` `NEW`
1. [13岁用AI接百万商单](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E7%94%A8AI%E6%8E%A5%E7%99%BE%E4%B8%87%E5%95%86%E5%8D%95%23) `266.7K 🔥` `NEW`
1. [内娱十年前真的很流行谈恋爱和结婚](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E5%8D%81%E5%B9%B4%E5%89%8D%E7%9C%9F%E7%9A%84%E5%BE%88%E6%B5%81%E8%A1%8C%E8%B0%88%E6%81%8B%E7%88%B1%E5%92%8C%E7%BB%93%E5%A9%9A%23) `260.5K 🔥` `NEW`
1. [72%教师下班后仍需及时回信息](https://s.weibo.com/weibo?q=%2372%25%E6%95%99%E5%B8%88%E4%B8%8B%E7%8F%AD%E5%90%8E%E4%BB%8D%E9%9C%80%E5%8F%8A%E6%97%B6%E5%9B%9E%E4%BF%A1%E6%81%AF%23) `244.6K 🔥` `NEW`
1. [孙红雷泰钽700](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%BA%A2%E9%9B%B7%E6%B3%B0%E9%92%BD700%23) `214.0K 🔥` `NEW`
1. [官方通报星宇股份解聘应届生 (Official notice: Xingyu Co., Ltd. dismisses fresh graduates)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%98%9F%E5%AE%87%E8%82%A1%E4%BB%BD%E8%A7%A3%E8%81%98%E5%BA%94%E5%B1%8A%E7%94%9F%23) `205.1K 🔥` `NEW`
1. [过得好的人最明显的标志](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%BE%97%E5%A5%BD%E7%9A%84%E4%BA%BA%E6%9C%80%E6%98%8E%E6%98%BE%E7%9A%84%E6%A0%87%E5%BF%97%23) `204.8K 🔥` `NEW`
1. [韩警方将对遇害女生遗体进行尸检](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E8%AD%A6%E6%96%B9%E5%B0%86%E5%AF%B9%E9%81%87%E5%AE%B3%E5%A5%B3%E7%94%9F%E9%81%97%E4%BD%93%E8%BF%9B%E8%A1%8C%E5%B0%B8%E6%A3%80%23) `204.0K 🔥` `NEW`
1. [成都天府新区房价腰斩](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E5%A4%A9%E5%BA%9C%E6%96%B0%E5%8C%BA%E6%88%BF%E4%BB%B7%E8%85%B0%E6%96%A9%23) `203.2K 🔥` `NEW`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `202.8K 🔥` `NEW`
1. [苹果M6芯片](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9CM6%E8%8A%AF%E7%89%87%23) `201.8K 🔥` `NEW`
1. [杭州滨江电梯纠纷反转](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E6%BB%A8%E6%B1%9F%E7%94%B5%E6%A2%AF%E7%BA%A0%E7%BA%B7%E5%8F%8D%E8%BD%AC%23) `201.3K 🔥` `NEW`
1. [女子因裁员焦虑每天通宵学习](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%A0%E8%A3%81%E5%91%98%E7%84%A6%E8%99%91%E6%AF%8F%E5%A4%A9%E9%80%9A%E5%AE%B5%E5%AD%A6%E4%B9%A0%23) `200.6K 🔥` `NEW`
1. [七星彩 鞠婧祎](https://s.weibo.com/weibo?q=%23%E4%B8%83%E6%98%9F%E5%BD%A9%20%E9%9E%A0%E5%A9%A7%E7%A5%8E%23) `199.9K 🔥` `NEW`
1. [原来大家都是这样防止被套话的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%A4%A7%E5%AE%B6%E9%83%BD%E6%98%AF%E8%BF%99%E6%A0%B7%E9%98%B2%E6%AD%A2%E8%A2%AB%E5%A5%97%E8%AF%9D%E7%9A%84%23) `199.1K 🔥` `NEW`
1. [苹果发布全球首款量产2nm芯片 (Apple releases the world's first mass-produced 2nm chip)](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%8F%91%E5%B8%83%E5%85%A8%E7%90%83%E9%A6%96%E6%AC%BE%E9%87%8F%E4%BA%A72nm%E8%8A%AF%E7%89%87%23) `198.6K 🔥` `NEW`
1. [张伟打开还珠格格爱上李晟](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BC%9F%E6%89%93%E5%BC%80%E8%BF%98%E7%8F%A0%E6%A0%BC%E6%A0%BC%E7%88%B1%E4%B8%8A%E6%9D%8E%E6%99%9F%23) `192.6K 🔥` `NEW`
1. [亚运会预算超标](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E9%A2%84%E7%AE%97%E8%B6%85%E6%A0%87%23) `192.3K 🔥` `NEW`
1. [何穗谈妊娠纹](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%A9%97%E8%B0%88%E5%A6%8A%E5%A8%A0%E7%BA%B9%23) `183.5K 🔥` `NEW`
1. [新款MacMini来了](https://s.weibo.com/weibo?q=%23%E6%96%B0%E6%AC%BEMacMini%E6%9D%A5%E4%BA%86%23) `182.8K 🔥` `NEW`
1. [乳房触诊20多次后发现结节摸不到](https://s.weibo.com/weibo?q=%23%E4%B9%B3%E6%88%BF%E8%A7%A6%E8%AF%8A20%E5%A4%9A%E6%AC%A1%E5%90%8E%E5%8F%91%E7%8E%B0%E7%BB%93%E8%8A%82%E6%91%B8%E4%B8%8D%E5%88%B0%23) `181.9K 🔥` `NEW`
1. [孙英宰Somi否认恋情](https://s.weibo.com/weibo?q=%23%E5%AD%99%E8%8B%B1%E5%AE%B0Somi%E5%90%A6%E8%AE%A4%E6%81%8B%E6%83%85%23) `181.7K 🔥` `NEW`
1. [朱志鑫cue到troublemaker](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%ABcue%E5%88%B0troublemaker%23) `180.3K 🔥` `NEW`
1. [原来这种身材是天选种地人](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E7%A7%8D%E8%BA%AB%E6%9D%90%E6%98%AF%E5%A4%A9%E9%80%89%E7%A7%8D%E5%9C%B0%E4%BA%BA%23) `179.9K 🔥` `NEW`
1. [华为乾崑智驾配泰钽700有多强](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91%E6%99%BA%E9%A9%BE%E9%85%8D%E6%B3%B0%E9%92%BD700%E6%9C%89%E5%A4%9A%E5%BC%BA%23) `178.8K 🔥` `NEW`
1. [魏大勋紧身裤界最严厉的父亲 (Wei Daxun is the strictest father in the leggings industry)](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A4%A7%E5%8B%8B%E7%B4%A7%E8%BA%AB%E8%A3%A4%E7%95%8C%E6%9C%80%E4%B8%A5%E5%8E%89%E7%9A%84%E7%88%B6%E4%BA%B2%23) `178.1K 🔥` `NEW`

Updated at 2026-08-26 00:02:32

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
