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

1. [种地吧直播 (Farm Bar live broadcast)](https://s.weibo.com/weibo?q=%23%E7%A7%8D%E5%9C%B0%E5%90%A7%E7%9B%B4%E6%92%AD%23) `540.9K 🔥` `NEW`
1. [呼吁老人大额转账设24小时冷静期](https://s.weibo.com/weibo?q=%23%E5%91%BC%E5%90%81%E8%80%81%E4%BA%BA%E5%A4%A7%E9%A2%9D%E8%BD%AC%E8%B4%A6%E8%AE%BE24%E5%B0%8F%E6%97%B6%E5%86%B7%E9%9D%99%E6%9C%9F%23) `409.2K 🔥` `NEW`
1. [天塌了山姆的三文鱼原来不能生吃](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%A1%8C%E4%BA%86%E5%B1%B1%E5%A7%86%E7%9A%84%E4%B8%89%E6%96%87%E9%B1%BC%E5%8E%9F%E6%9D%A5%E4%B8%8D%E8%83%BD%E7%94%9F%E5%90%83%23) `290.9K 🔥` `NEW`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `146.8K 🔥` `NEW`
1. [12306回应列车为无座旅客发便民凳](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E5%88%97%E8%BD%A6%E4%B8%BA%E6%97%A0%E5%BA%A7%E6%97%85%E5%AE%A2%E5%8F%91%E4%BE%BF%E6%B0%91%E5%87%B3%23) `145.9K 🔥` `NEW`
1. [网传琅琊榜3吴磊换张凌赫](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E7%90%85%E7%90%8A%E6%A6%9C3%E5%90%B4%E7%A3%8A%E6%8D%A2%E5%BC%A0%E5%87%8C%E8%B5%AB%23) `145.0K 🔥` `NEW`
1. [最强alpha齐聚阿迪达斯](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%BC%BAalpha%E9%BD%90%E8%81%9A%E9%98%BF%E8%BF%AA%E8%BE%BE%E6%96%AF%23) `128.4K 🔥` `NEW`
1. [腾讯视频 无添加不兑水](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E8%A7%86%E9%A2%91%20%E6%97%A0%E6%B7%BB%E5%8A%A0%E4%B8%8D%E5%85%91%E6%B0%B4%23) `113.1K 🔥` `NEW`
1. [猫 我刚刚是不是太凶了](https://s.weibo.com/weibo?q=%23%E7%8C%AB%20%E6%88%91%E5%88%9A%E5%88%9A%E6%98%AF%E4%B8%8D%E6%98%AF%E5%A4%AA%E5%87%B6%E4%BA%86%23) `104.9K 🔥` `NEW`
1. [中方回应特朗普将对华新贸易调查](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE%E5%B0%86%E5%AF%B9%E5%8D%8E%E6%96%B0%E8%B4%B8%E6%98%93%E8%B0%83%E6%9F%A5%23) `98.9K 🔥` `NEW`
1. [AI演员都出片场花絮了 (AI actors have all appeared on the set.)](https://s.weibo.com/weibo?q=%23AI%E6%BC%94%E5%91%98%E9%83%BD%E5%87%BA%E7%89%87%E5%9C%BA%E8%8A%B1%E7%B5%AE%E4%BA%86%23) `98.4K 🔥` `NEW`
1. [郑秀文回应会不会上浪姐](https://s.weibo.com/weibo?q=%23%E9%83%91%E7%A7%80%E6%96%87%E5%9B%9E%E5%BA%94%E4%BC%9A%E4%B8%8D%E4%BC%9A%E4%B8%8A%E6%B5%AA%E5%A7%90%23) `97.6K 🔥` `NEW`
1. [孟子义看得我想吃砂糖橘了](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E7%9C%8B%E5%BE%97%E6%88%91%E6%83%B3%E5%90%83%E7%A0%82%E7%B3%96%E6%A9%98%E4%BA%86%23) `97.5K 🔥` `NEW`
1. [山寨豪车老头乐热销农村](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%AF%A8%E8%B1%AA%E8%BD%A6%E8%80%81%E5%A4%B4%E4%B9%90%E7%83%AD%E9%94%80%E5%86%9C%E6%9D%91%23) `96.7K 🔥` `NEW`
1. [月薪7000元招人种地](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA7000%E5%85%83%E6%8B%9B%E4%BA%BA%E7%A7%8D%E5%9C%B0%23) `96.6K 🔥` `NEW`
1. [人一旦留过学做饭风格就定型了](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E6%97%A6%E7%95%99%E8%BF%87%E5%AD%A6%E5%81%9A%E9%A5%AD%E9%A3%8E%E6%A0%BC%E5%B0%B1%E5%AE%9A%E5%9E%8B%E4%BA%86%23) `87.8K 🔥` `NEW`
1. [李羲承退团后ENHYPEN成员状态](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BE%B2%E6%89%BF%E9%80%80%E5%9B%A2%E5%90%8EENHYPEN%E6%88%90%E5%91%98%E7%8A%B6%E6%80%81%23) `87.2K 🔥` `NEW`
1. [伊朗自曝研究美军20年](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%87%AA%E6%9B%9D%E7%A0%94%E7%A9%B6%E7%BE%8E%E5%86%9B20%E5%B9%B4%23) `79.1K 🔥` `NEW`
1. [NBA常规赛](https://s.weibo.com/weibo?q=%23NBA%E5%B8%B8%E8%A7%84%E8%B5%9B%23) `78.8K 🔥` `NEW`
1. [十四届全国人大四次会议闭幕会](https://s.weibo.com/weibo?q=%23%E5%8D%81%E5%9B%9B%E5%B1%8A%E5%85%A8%E5%9B%BD%E4%BA%BA%E5%A4%A7%E5%9B%9B%E6%AC%A1%E4%BC%9A%E8%AE%AE%E9%97%AD%E5%B9%95%E4%BC%9A%23) `1.0M 🔥`
1. [司法部将在全国统一推行扫码入企 (The Ministry of Justice will uniformly implement scanning codes to enter enterprises nationwide)](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E6%B3%95%E9%83%A8%E5%B0%86%E5%9C%A8%E5%85%A8%E5%9B%BD%E7%BB%9F%E4%B8%80%E6%8E%A8%E8%A1%8C%E6%89%AB%E7%A0%81%E5%85%A5%E4%BC%81%23) `718.3K 🔥`
1. [3月12日两会日程 (Agenda for the two sessions on March 12)](https://s.weibo.com/weibo?q=%233%E6%9C%8812%E6%97%A5%E4%B8%A4%E4%BC%9A%E6%97%A5%E7%A8%8B%23) `602.1K 🔥`
1. [中方回应特朗普计划访华 (China responds to Trump's planned visit to China)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%A1%E5%88%92%E8%AE%BF%E5%8D%8E%23) `548.2K 🔥`
1. [揭秘周冠宇3D新战术 (Revealing Zhou Guanyu’s new 3D tactics)](https://s.weibo.com/weibo?q=%23%E6%8F%AD%E7%A7%98%E5%91%A8%E5%86%A0%E5%AE%873D%E6%96%B0%E6%88%98%E6%9C%AF%23) `540.8K 🔥`
1. [吴艳妮决赛退赛](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%89%B3%E5%A6%AE%E5%86%B3%E8%B5%9B%E9%80%80%E8%B5%9B%23) `403.4K 🔥`
1. [车该不该忠实执行驾驶员指令 (Should the car faithfully follow the driver's instructions?)](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E8%AF%A5%E4%B8%8D%E8%AF%A5%E5%BF%A0%E5%AE%9E%E6%89%A7%E8%A1%8C%E9%A9%BE%E9%A9%B6%E5%91%98%E6%8C%87%E4%BB%A4%23) `557.9K 🔥` `-23%`
1. [第3场部长通道 (Session 3 Ministerial Channel)](https://s.weibo.com/weibo?q=%23%E7%AC%AC3%E5%9C%BA%E9%83%A8%E9%95%BF%E9%80%9A%E9%81%93%23) `540.9K 🔥` `-23%`
1. [美国海军已逃离伊朗周边海域](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%B5%B7%E5%86%9B%E5%B7%B2%E9%80%83%E7%A6%BB%E4%BC%8A%E6%9C%97%E5%91%A8%E8%BE%B9%E6%B5%B7%E5%9F%9F%23) `540.8K 🔥` `-22%`
1. [表决通过生态环境法典](https://s.weibo.com/weibo?q=%23%E8%A1%A8%E5%86%B3%E9%80%9A%E8%BF%87%E7%94%9F%E6%80%81%E7%8E%AF%E5%A2%83%E6%B3%95%E5%85%B8%23) `447.5K 🔥` `-32%`
1. [明日方舟终末地](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%E7%BB%88%E6%9C%AB%E5%9C%B0%23) `415.4K 🔥` `-34%`
1. [本田突发暴雷](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E7%94%B0%E7%AA%81%E5%8F%91%E6%9A%B4%E9%9B%B7%23) `329.0K 🔥` `-35%`
1. [微信3大新功能 (3 new features of WeChat)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A13%E5%A4%A7%E6%96%B0%E5%8A%9F%E8%83%BD%23) `310.3K 🔥` `-50%`
1. [保时捷车主回应车窗被砸取AED救人](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%97%B6%E6%8D%B7%E8%BD%A6%E4%B8%BB%E5%9B%9E%E5%BA%94%E8%BD%A6%E7%AA%97%E8%A2%AB%E7%A0%B8%E5%8F%96AED%E6%95%91%E4%BA%BA%23) `245.5K 🔥` `-49%`
1. [韩国人分享在中国起号方式](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E4%BA%BA%E5%88%86%E4%BA%AB%E5%9C%A8%E4%B8%AD%E5%9B%BD%E8%B5%B7%E5%8F%B7%E6%96%B9%E5%BC%8F%23) `237.2K 🔥` `-62%`
1. [大学生4个馒头卖了30000元](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E7%94%9F4%E4%B8%AA%E9%A6%92%E5%A4%B4%E5%8D%96%E4%BA%8630000%E5%85%83%23) `209.8K 🔥` `-57%`
1. [朝九晚五其实是朝七晚六](https://s.weibo.com/weibo?q=%23%E6%9C%9D%E4%B9%9D%E6%99%9A%E4%BA%94%E5%85%B6%E5%AE%9E%E6%98%AF%E6%9C%9D%E4%B8%83%E6%99%9A%E5%85%AD%23) `187.1K 🔥` `-61%`
1. [建议禁止流量月底清零 (It is recommended to prohibit traffic from clearing at the end of the month)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E7%A6%81%E6%AD%A2%E6%B5%81%E9%87%8F%E6%9C%88%E5%BA%95%E6%B8%85%E9%9B%B6%23) `151.9K 🔥` `-79%`
1. [通过政府立法解决内卷式竞争](https://s.weibo.com/weibo?q=%23%E9%80%9A%E8%BF%87%E6%94%BF%E5%BA%9C%E7%AB%8B%E6%B3%95%E8%A7%A3%E5%86%B3%E5%86%85%E5%8D%B7%E5%BC%8F%E7%AB%9E%E4%BA%89%23) `151.3K 🔥` `-77%`
1. [爆剧 养老剧 (Explosive Drama Elder Care Drama)](https://s.weibo.com/weibo?q=%23%E7%88%86%E5%89%A7%20%E5%85%BB%E8%80%81%E5%89%A7%23) `149.7K 🔥` `-69%`
1. [男子误吞12厘米筷子忍了8年才取出](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%AF%AF%E5%90%9E12%E5%8E%98%E7%B1%B3%E7%AD%B7%E5%AD%90%E5%BF%8D%E4%BA%868%E5%B9%B4%E6%89%8D%E5%8F%96%E5%87%BA%23) `148.9K 🔥` `-69%`
1. [鞠婧祎彝族服饰造型](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%BD%9D%E6%97%8F%E6%9C%8D%E9%A5%B0%E9%80%A0%E5%9E%8B%23) `139.2K 🔥` `-71%`
1. [伊朗用最强导弹专打以色列 (Iran uses its most powerful missiles to attack Israel)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%94%A8%E6%9C%80%E5%BC%BA%E5%AF%BC%E5%BC%B9%E4%B8%93%E6%89%93%E4%BB%A5%E8%89%B2%E5%88%97%23) `135.1K 🔥` `-72%`
1. [杨幂把海洋穿身上了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%8A%8A%E6%B5%B7%E6%B4%8B%E7%A9%BF%E8%BA%AB%E4%B8%8A%E4%BA%86%23) `131.9K 🔥` `-73%`
1. [易梦体质](https://s.weibo.com/weibo?q=%23%E6%98%93%E6%A2%A6%E4%BD%93%E8%B4%A8%23) `126.4K 🔥` `-74%`
1. [吃全麦面包减肥的人天塌了](https://s.weibo.com/weibo?q=%23%E5%90%83%E5%85%A8%E9%BA%A6%E9%9D%A2%E5%8C%85%E5%87%8F%E8%82%A5%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `114.2K 🔥` `-76%`
1. [腾讯回应被龙虾之父指责抄袭](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E5%9B%9E%E5%BA%94%E8%A2%AB%E9%BE%99%E8%99%BE%E4%B9%8B%E7%88%B6%E6%8C%87%E8%B4%A3%E6%8A%84%E8%A2%AD%23) `105.6K 🔥` `-78%`
1. [镖人 第二部](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%20%E7%AC%AC%E4%BA%8C%E9%83%A8%23) `98.5K 🔥` `-85%`
1. [多邻国绿鸟 离职 (Duolingo Green Bird resigned)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E9%82%BB%E5%9B%BD%E7%BB%BF%E9%B8%9F%20%E7%A6%BB%E8%81%8C%23) `93.7K 🔥` `-81%`
1. [浪姐7 (Lang Jie 7)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%907%23) `93.1K 🔥` `-81%`
1. [腾讯视频修改逐玉战报 (Tencent Video Modifies Zhuyu Battle Report)](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E8%A7%86%E9%A2%91%E4%BF%AE%E6%94%B9%E9%80%90%E7%8E%89%E6%88%98%E6%8A%A5%23) `89.0K 🔥` `-81%`
1. [恭迎武安侯上线](https://s.weibo.com/weibo?q=%23%E6%81%AD%E8%BF%8E%E6%AD%A6%E5%AE%89%E4%BE%AF%E4%B8%8A%E7%BA%BF%23) `81.9K 🔥` `-83%`

Updated at 2026-03-12 18:44:30

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
