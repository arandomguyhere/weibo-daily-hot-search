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

1. [梅姨被逮捕 (Aunt May was arrested)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E8%A2%AB%E9%80%AE%E6%8D%95%23) `12.5M 🔥` `NEW`
1. [梅姨对贩卖儿童事实供认不讳](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E5%AF%B9%E8%B4%A9%E5%8D%96%E5%84%BF%E7%AB%A5%E4%BA%8B%E5%AE%9E%E4%BE%9B%E8%AE%A4%E4%B8%8D%E8%AE%B3%23) `2.1M 🔥` `NEW`
1. [清明小长假火车购票日历](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%98%8E%E5%B0%8F%E9%95%BF%E5%81%87%E7%81%AB%E8%BD%A6%E8%B4%AD%E7%A5%A8%E6%97%A5%E5%8E%86%23) `1.7M 🔥` `NEW`
1. [梅姨 童年阴影](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%20%E7%AB%A5%E5%B9%B4%E9%98%B4%E5%BD%B1%23) `463.4K 🔥` `NEW`
1. [雷军60加60等于120言论引争议](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B60%E5%8A%A060%E7%AD%89%E4%BA%8E120%E8%A8%80%E8%AE%BA%E5%BC%95%E4%BA%89%E8%AE%AE%23) `216.4K 🔥` `NEW`
1. [苏翊鸣呼吁男生预防HPV](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%91%BC%E5%90%81%E7%94%B7%E7%94%9F%E9%A2%84%E9%98%B2HPV%23) `154.0K 🔥` `NEW`
1. [为救女儿直播跳舞男子被指好吃懒做](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E6%95%91%E5%A5%B3%E5%84%BF%E7%9B%B4%E6%92%AD%E8%B7%B3%E8%88%9E%E7%94%B7%E5%AD%90%E8%A2%AB%E6%8C%87%E5%A5%BD%E5%90%83%E6%87%92%E5%81%9A%23) `153.6K 🔥` `NEW`
1. [美媒称伊朗导弹袭击美英印度洋基地](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AA%92%E7%A7%B0%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%87%BB%E7%BE%8E%E8%8B%B1%E5%8D%B0%E5%BA%A6%E6%B4%8B%E5%9F%BA%E5%9C%B0%23) `151.4K 🔥` `NEW`
1. [专八](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%85%AB%23) `131.2K 🔥` `NEW`
1. [摸鱼摸到忘记自己在上班](https://s.weibo.com/weibo?q=%23%E6%91%B8%E9%B1%BC%E6%91%B8%E5%88%B0%E5%BF%98%E8%AE%B0%E8%87%AA%E5%B7%B1%E5%9C%A8%E4%B8%8A%E7%8F%AD%23) `127.3K 🔥` `NEW`
1. [网友通过倪妮悄悄话分析出汤唯怀孕了 (Netizens analyzed that Tang Wei was pregnant through Ni Ni’s whispers)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E9%80%9A%E8%BF%87%E5%80%AA%E5%A6%AE%E6%82%84%E6%82%84%E8%AF%9D%E5%88%86%E6%9E%90%E5%87%BA%E6%B1%A4%E5%94%AF%E6%80%80%E5%AD%95%E4%BA%86%23) `127.2K 🔥` `NEW`
1. [15岁女生派出所办公室内遭猥亵](https://s.weibo.com/weibo?q=%2315%E5%B2%81%E5%A5%B3%E7%94%9F%E6%B4%BE%E5%87%BA%E6%89%80%E5%8A%9E%E5%85%AC%E5%AE%A4%E5%86%85%E9%81%AD%E7%8C%A5%E4%BA%B5%23) `127.0K 🔥` `NEW`
1. [谢某某就是梅姨](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E6%9F%90%E6%9F%90%E5%B0%B1%E6%98%AF%E6%A2%85%E5%A7%A8%23) `126.8K 🔥` `NEW`
1. [卢昱晓 明月曾照小重山](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%20%E6%98%8E%E6%9C%88%E6%9B%BE%E7%85%A7%E5%B0%8F%E9%87%8D%E5%B1%B1%23) `126.6K 🔥` `NEW`
1. [以色列全国多地遭导弹袭击](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%85%A8%E5%9B%BD%E5%A4%9A%E5%9C%B0%E9%81%AD%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%87%BB%23) `126.5K 🔥` `NEW`
1. [王一博植物氛围大片](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%A4%8D%E7%89%A9%E6%B0%9B%E5%9B%B4%E5%A4%A7%E7%89%87%23) `124.5K 🔥` `NEW`
1. [丹麦被爆拟炸机场防美入侵格陵兰岛](https://s.weibo.com/weibo?q=%23%E4%B8%B9%E9%BA%A6%E8%A2%AB%E7%88%86%E6%8B%9F%E7%82%B8%E6%9C%BA%E5%9C%BA%E9%98%B2%E7%BE%8E%E5%85%A5%E4%BE%B5%E6%A0%BC%E9%99%B5%E5%85%B0%E5%B2%9B%23) `124.5K 🔥` `NEW`
1. [金价大跌情侣火速买五金](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%A4%A7%E8%B7%8C%E6%83%85%E4%BE%A3%E7%81%AB%E9%80%9F%E4%B9%B0%E4%BA%94%E9%87%91%23) `123.1K 🔥` `NEW`
1. [曝汤唯疑怀二胎](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B1%A4%E5%94%AF%E7%96%91%E6%80%80%E4%BA%8C%E8%83%8E%23) `121.8K 🔥` `NEW`
1. [尚界Z7十款车色全部亮相](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E7%95%8CZ7%E5%8D%81%E6%AC%BE%E8%BD%A6%E8%89%B2%E5%85%A8%E9%83%A8%E4%BA%AE%E7%9B%B8%23) `121.1K 🔥` `NEW`
1. [阿信回应言承旭提词器争议 (Ashin responds to Jerry Yan's teleprompter controversy)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E4%BF%A1%E5%9B%9E%E5%BA%94%E8%A8%80%E6%89%BF%E6%97%AD%E6%8F%90%E8%AF%8D%E5%99%A8%E4%BA%89%E8%AE%AE%23) `120.8K 🔥` `NEW`
1. [司美格鲁肽化合物专利到期](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E7%BE%8E%E6%A0%BC%E9%B2%81%E8%82%BD%E5%8C%96%E5%90%88%E7%89%A9%E4%B8%93%E5%88%A9%E5%88%B0%E6%9C%9F%23) `118.2K 🔥` `NEW`
1. [十年后发现跟crush是双箭头](https://s.weibo.com/weibo?q=%23%E5%8D%81%E5%B9%B4%E5%90%8E%E5%8F%91%E7%8E%B0%E8%B7%9Fcrush%E6%98%AF%E5%8F%8C%E7%AE%AD%E5%A4%B4%23) `109.7K 🔥` `NEW`
1. [AI演员林汐颜秦凌岳为何引众怒](https://s.weibo.com/weibo?q=%23AI%E6%BC%94%E5%91%98%E6%9E%97%E6%B1%90%E9%A2%9C%E7%A7%A6%E5%87%8C%E5%B2%B3%E4%B8%BA%E4%BD%95%E5%BC%95%E4%BC%97%E6%80%92%23) `98.9K 🔥` `NEW`
1. [择偶标准是爸爸的含金量](https://s.weibo.com/weibo?q=%23%E6%8B%A9%E5%81%B6%E6%A0%87%E5%87%86%E6%98%AF%E7%88%B8%E7%88%B8%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%23) `87.7K 🔥` `NEW`
1. [终于有人吐槽手语舞了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%9C%89%E4%BA%BA%E5%90%90%E6%A7%BD%E6%89%8B%E8%AF%AD%E8%88%9E%E4%BA%86%23) `87.3K 🔥` `NEW`
1. [加满一箱油或花费近500元](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%BB%A1%E4%B8%80%E7%AE%B1%E6%B2%B9%E6%88%96%E8%8A%B1%E8%B4%B9%E8%BF%91500%E5%85%83%23) `84.9K 🔥` `NEW`
1. [伊朗将实施前所未有的强力打击](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%B0%86%E5%AE%9E%E6%96%BD%E5%89%8D%E6%89%80%E6%9C%AA%E6%9C%89%E7%9A%84%E5%BC%BA%E5%8A%9B%E6%89%93%E5%87%BB%23) `75.2K 🔥` `NEW`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `73.2K 🔥` `NEW`
1. [梅姨贩卖儿童案](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E8%B4%A9%E5%8D%96%E5%84%BF%E7%AB%A5%E6%A1%88%23) `73.0K 🔥` `NEW`
1. [金饰价跌回1413元 (The price of gold jewelry fell back to 1,413 yuan)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E8%B7%8C%E5%9B%9E1413%E5%85%83%23) `69.0K 🔥` `NEW`
1. [南昌舰首次实射舰空导弹全部命中](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%98%8C%E8%88%B0%E9%A6%96%E6%AC%A1%E5%AE%9E%E5%B0%84%E8%88%B0%E7%A9%BA%E5%AF%BC%E5%BC%B9%E5%85%A8%E9%83%A8%E5%91%BD%E4%B8%AD%23) `64.8K 🔥` `NEW`
1. [他会一辈子都记得这个老师的](https://s.weibo.com/weibo?q=%23%E4%BB%96%E4%BC%9A%E4%B8%80%E8%BE%88%E5%AD%90%E9%83%BD%E8%AE%B0%E5%BE%97%E8%BF%99%E4%B8%AA%E8%80%81%E5%B8%88%E7%9A%84%23) `64.6K 🔥` `NEW`
1. [东风日产NX8大大大五座SUV预售 (Dongfeng Nissan NX8 five-seater SUV pre-sale)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%A3%8E%E6%97%A5%E4%BA%A7NX8%E5%A4%A7%E5%A4%A7%E5%A4%A7%E4%BA%94%E5%BA%A7SUV%E9%A2%84%E5%94%AE%23) `1.7M 🔥` `+170%`
1. [盖娅传说 冷处理](https://s.weibo.com/weibo?q=%23%E7%9B%96%E5%A8%85%E4%BC%A0%E8%AF%B4%20%E5%86%B7%E5%A4%84%E7%90%86%23) `125.8K 🔥` `+21%`
1. [官方通报月经弄脏卧铺事件详情](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%9C%88%E7%BB%8F%E5%BC%84%E8%84%8F%E5%8D%A7%E9%93%BA%E4%BA%8B%E4%BB%B6%E8%AF%A6%E6%83%85%23) `127.1K 🔥`
1. [感觉迪丽热巴工作室换人了](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%B7%A5%E4%BD%9C%E5%AE%A4%E6%8D%A2%E4%BA%BA%E4%BA%86%23) `126.6K 🔥`
1. [邓为孔雪儿 百妖谱](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%B8%BA%E5%AD%94%E9%9B%AA%E5%84%BF%20%E7%99%BE%E5%A6%96%E8%B0%B1%23) `123.0K 🔥`
1. [逐玉 反向入侵短剧](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E5%8F%8D%E5%90%91%E5%85%A5%E4%BE%B5%E7%9F%AD%E5%89%A7%23) `120.0K 🔥`
1. [中东土豪5分钟打赏团播100万](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%B8%9C%E5%9C%9F%E8%B1%AA5%E5%88%86%E9%92%9F%E6%89%93%E8%B5%8F%E5%9B%A2%E6%92%AD100%E4%B8%87%23) `119.1K 🔥`
1. [章子怡脸咋了](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%AD%90%E6%80%A1%E8%84%B8%E5%92%8B%E4%BA%86%23) `118.8K 🔥`
1. [女子听信科学坐月子落下月子病 (Woman listened to science and suffered from confinement syndrome)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%90%AC%E4%BF%A1%E7%A7%91%E5%AD%A6%E5%9D%90%E6%9C%88%E5%AD%90%E8%90%BD%E4%B8%8B%E6%9C%88%E5%AD%90%E7%97%85%23) `108.4K 🔥`
1. [迪丽热巴嫡长女待遇](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%AB%A1%E9%95%BF%E5%A5%B3%E5%BE%85%E9%81%87%23) `94.8K 🔥`
1. [离职当天遇车祸获赔16万误工费 (A car accident occurred on the day of resignation and she was compensated 160,000 yuan in lost wages.)](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E8%81%8C%E5%BD%93%E5%A4%A9%E9%81%87%E8%BD%A6%E7%A5%B8%E8%8E%B7%E8%B5%9416%E4%B8%87%E8%AF%AF%E5%B7%A5%E8%B4%B9%23) `159.6K 🔥` `-85%`
1. [直播间买10盒蓝莓到手每盒不足5颗](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E6%92%AD%E9%97%B4%E4%B9%B010%E7%9B%92%E8%93%9D%E8%8E%93%E5%88%B0%E6%89%8B%E6%AF%8F%E7%9B%92%E4%B8%8D%E8%B6%B35%E9%A2%97%23) `101.7K 🔥` `-87%`
1. [教培干久了连自己妈妈都找不到](https://s.weibo.com/weibo?q=%23%E6%95%99%E5%9F%B9%E5%B9%B2%E4%B9%85%E4%BA%86%E8%BF%9E%E8%87%AA%E5%B7%B1%E5%A6%88%E5%A6%88%E9%83%BD%E6%89%BE%E4%B8%8D%E5%88%B0%23) `94.2K 🔥` `-34%`
1. [王晶说有人愿花100万请舒淇吃饭](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%99%B6%E8%AF%B4%E6%9C%89%E4%BA%BA%E6%84%BF%E8%8A%B1100%E4%B8%87%E8%AF%B7%E8%88%92%E6%B7%87%E5%90%83%E9%A5%AD%23) `89.0K 🔥` `-27%`
1. [金饰价一夜暴跌32元](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E4%B8%80%E5%A4%9C%E6%9A%B4%E8%B7%8C32%E5%85%83%23) `83.2K 🔥` `-24%`
1. [徐冬冬婚戒丢了](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%86%AC%E5%86%AC%E5%A9%9A%E6%88%92%E4%B8%A2%E4%BA%86%23) `82.3K 🔥` `-33%`
1. [张凌赫回应田曦薇在逐玉中的武力值](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%9E%E5%BA%94%E7%94%B0%E6%9B%A6%E8%96%87%E5%9C%A8%E9%80%90%E7%8E%89%E4%B8%AD%E7%9A%84%E6%AD%A6%E5%8A%9B%E5%80%BC%23) `72.7K 🔥` `-46%`
1. [白玉兰 老带新](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%20%E8%80%81%E5%B8%A6%E6%96%B0%23) `72.5K 🔥` `-47%`
1. [22点和23点睡觉差距到底多大](https://s.weibo.com/weibo?q=%2322%E7%82%B9%E5%92%8C23%E7%82%B9%E7%9D%A1%E8%A7%89%E5%B7%AE%E8%B7%9D%E5%88%B0%E5%BA%95%E5%A4%9A%E5%A4%A7%23) `65.9K 🔥` `-30%`

Updated at 2026-03-21 12:19:47

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
