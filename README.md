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

1. [宁波男篮当场裁掉外援 (Ningbo Men’s Basketball Team lays off foreign players on the spot)](https://s.weibo.com/weibo?q=%23%E5%AE%81%E6%B3%A2%E7%94%B7%E7%AF%AE%E5%BD%93%E5%9C%BA%E8%A3%81%E6%8E%89%E5%A4%96%E6%8F%B4%23) `1.1M 🔥` `NEW`
1. [卤菜店使用四姐二字被索赔50万](https://s.weibo.com/weibo?q=%23%E5%8D%A4%E8%8F%9C%E5%BA%97%E4%BD%BF%E7%94%A8%E5%9B%9B%E5%A7%90%E4%BA%8C%E5%AD%97%E8%A2%AB%E7%B4%A2%E8%B5%9450%E4%B8%87%23) `789.1K 🔥` `NEW`
1. [虚假摆拍深山救助流浪女3人被查](https://s.weibo.com/weibo?q=%23%E8%99%9A%E5%81%87%E6%91%86%E6%8B%8D%E6%B7%B1%E5%B1%B1%E6%95%91%E5%8A%A9%E6%B5%81%E6%B5%AA%E5%A5%B33%E4%BA%BA%E8%A2%AB%E6%9F%A5%23) `603.8K 🔥` `NEW`
1. [以色列政坛集体破防](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%94%BF%E5%9D%9B%E9%9B%86%E4%BD%93%E7%A0%B4%E9%98%B2%23) `469.5K 🔥` `NEW`
1. [杀发小男子因儿时手指被炸断积怨](https://s.weibo.com/weibo?q=%23%E6%9D%80%E5%8F%91%E5%B0%8F%E7%94%B7%E5%AD%90%E5%9B%A0%E5%84%BF%E6%97%B6%E6%89%8B%E6%8C%87%E8%A2%AB%E7%82%B8%E6%96%AD%E7%A7%AF%E6%80%A8%23) `210.3K 🔥` `NEW`
1. [以空袭黎巴嫩致254死1165伤](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E7%A9%BA%E8%A2%AD%E9%BB%8E%E5%B7%B4%E5%AB%A9%E8%87%B4254%E6%AD%BB1165%E4%BC%A4%23) `210.1K 🔥` `NEW`
1. [丹麦改台湾人居留证国籍为中国](https://s.weibo.com/weibo?q=%23%E4%B8%B9%E9%BA%A6%E6%94%B9%E5%8F%B0%E6%B9%BE%E4%BA%BA%E5%B1%85%E7%95%99%E8%AF%81%E5%9B%BD%E7%B1%8D%E4%B8%BA%E4%B8%AD%E5%9B%BD%23) `177.9K 🔥` `NEW`
1. [猛禽飞入女子怀里依偎猫咪震惊](https://s.weibo.com/weibo?q=%23%E7%8C%9B%E7%A6%BD%E9%A3%9E%E5%85%A5%E5%A5%B3%E5%AD%90%E6%80%80%E9%87%8C%E4%BE%9D%E5%81%8E%E7%8C%AB%E5%92%AA%E9%9C%87%E6%83%8A%23) `153.3K 🔥` `NEW`
1. [贾平凹女儿被指论文抄袭](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E5%B9%B3%E5%87%B9%E5%A5%B3%E5%84%BF%E8%A2%AB%E6%8C%87%E8%AE%BA%E6%96%87%E6%8A%84%E8%A2%AD%23) `150.3K 🔥` `NEW`
1. [金子涵否认是秦岚](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E5%90%A6%E8%AE%A4%E6%98%AF%E7%A7%A6%E5%B2%9A%23) `150.2K 🔥` `NEW`
1. [深圳通报救护车截单延误抢救致死 (Shenzhen reports ambulance cut-off order, delayed rescue resulting in death)](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E9%80%9A%E6%8A%A5%E6%95%91%E6%8A%A4%E8%BD%A6%E6%88%AA%E5%8D%95%E5%BB%B6%E8%AF%AF%E6%8A%A2%E6%95%91%E8%87%B4%E6%AD%BB%23) `144.5K 🔥` `NEW`
1. [秦岚工作室声明](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%B2%9A%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%A3%B0%E6%98%8E%23) `133.2K 🔥` `NEW`
1. [霍尔木兹海峡再度关闭](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E5%86%8D%E5%BA%A6%E5%85%B3%E9%97%AD%23) `133.1K 🔥` `NEW`
1. [吴克群人民日报撰文](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%85%8B%E7%BE%A4%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E6%92%B0%E6%96%87%23) `132.8K 🔥` `NEW`
1. [乒乓顶流为上海乒乓球嘉年华打call](https://s.weibo.com/weibo?q=%23%E4%B9%92%E4%B9%93%E9%A1%B6%E6%B5%81%E4%B8%BA%E4%B8%8A%E6%B5%B7%E4%B9%92%E4%B9%93%E7%90%83%E5%98%89%E5%B9%B4%E5%8D%8E%E6%89%93call%23) `132.1K 🔥` `NEW`
1. [中专生带手机入校被罚回家待到毕业](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%B8%93%E7%94%9F%E5%B8%A6%E6%89%8B%E6%9C%BA%E5%85%A5%E6%A0%A1%E8%A2%AB%E7%BD%9A%E5%9B%9E%E5%AE%B6%E5%BE%85%E5%88%B0%E6%AF%95%E4%B8%9A%23) `131.8K 🔥` `NEW`
1. [疑似林凡发长文谈陆柯燃](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E6%9E%97%E5%87%A1%E5%8F%91%E9%95%BF%E6%96%87%E8%B0%88%E9%99%86%E6%9F%AF%E7%87%83%23) `128.5K 🔥` `NEW`
1. [华为AI眼镜即将发布](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAAI%E7%9C%BC%E9%95%9C%E5%8D%B3%E5%B0%86%E5%8F%91%E5%B8%83%23) `128.1K 🔥` `NEW`
1. [教育局回应学生乱丢垃圾被大屏批评](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E5%B1%80%E5%9B%9E%E5%BA%94%E5%AD%A6%E7%94%9F%E4%B9%B1%E4%B8%A2%E5%9E%83%E5%9C%BE%E8%A2%AB%E5%A4%A7%E5%B1%8F%E6%89%B9%E8%AF%84%23) `126.9K 🔥` `NEW`
1. [吴世勋减重十斤](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%B8%96%E5%8B%8B%E5%87%8F%E9%87%8D%E5%8D%81%E6%96%A4%23) `125.5K 🔥` `NEW`
1. [翻斗花园还有一个名字叫汤臣一品 (Another name for Tipping Bucket Garden is Tomson Yipin.)](https://s.weibo.com/weibo?q=%23%E7%BF%BB%E6%96%97%E8%8A%B1%E5%9B%AD%E8%BF%98%E6%9C%89%E4%B8%80%E4%B8%AA%E5%90%8D%E5%AD%97%E5%8F%AB%E6%B1%A4%E8%87%A3%E4%B8%80%E5%93%81%23) `124.1K 🔥` `NEW`
1. [副县长被举报出轨致孕女方发声](https://s.weibo.com/weibo?q=%23%E5%89%AF%E5%8E%BF%E9%95%BF%E8%A2%AB%E4%B8%BE%E6%8A%A5%E5%87%BA%E8%BD%A8%E8%87%B4%E5%AD%95%E5%A5%B3%E6%96%B9%E5%8F%91%E5%A3%B0%23) `123.6K 🔥` `NEW`
1. [偶遇宋威龙泉州夜跑](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E5%AE%8B%E5%A8%81%E9%BE%99%E6%B3%89%E5%B7%9E%E5%A4%9C%E8%B7%91%23) `123.0K 🔥` `NEW`
1. [男子求爱遭拒坠亡家属向女方索赔](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%B1%82%E7%88%B1%E9%81%AD%E6%8B%92%E5%9D%A0%E4%BA%A1%E5%AE%B6%E5%B1%9E%E5%90%91%E5%A5%B3%E6%96%B9%E7%B4%A2%E8%B5%94%23) `122.4K 🔥` `NEW`
1. [陈思诚新片10间敢死队定档](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%80%9D%E8%AF%9A%E6%96%B0%E7%89%8710%E9%97%B4%E6%95%A2%E6%AD%BB%E9%98%9F%E5%AE%9A%E6%A1%A3%23) `117.6K 🔥` `NEW`
1. [以色列搅局](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%90%85%E5%B1%80%23) `116.7K 🔥` `NEW`
1. [李小冉疑似手滑点赞](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E7%96%91%E4%BC%BC%E6%89%8B%E6%BB%91%E7%82%B9%E8%B5%9E%23) `113.5K 🔥` `NEW`
1. [陈丽华告别仪式](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%8D%8E%E5%91%8A%E5%88%AB%E4%BB%AA%E5%BC%8F%23) `112.4K 🔥` `NEW`
1. [消促会曝婴儿手口湿巾藏重金属锑](https://s.weibo.com/weibo?q=%23%E6%B6%88%E4%BF%83%E4%BC%9A%E6%9B%9D%E5%A9%B4%E5%84%BF%E6%89%8B%E5%8F%A3%E6%B9%BF%E5%B7%BE%E8%97%8F%E9%87%8D%E9%87%91%E5%B1%9E%E9%94%91%23) `110.3K 🔥` `NEW`
1. [白宫称美方接受的是伊朗修改后的新方案](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%AE%AB%E7%A7%B0%E7%BE%8E%E6%96%B9%E6%8E%A5%E5%8F%97%E7%9A%84%E6%98%AF%E4%BC%8A%E6%9C%97%E4%BF%AE%E6%94%B9%E5%90%8E%E7%9A%84%E6%96%B0%E6%96%B9%E6%A1%88%23) `98.0K 🔥` `NEW`
1. [如何看待樊振东自愿放弃 (How to treat Fan Zhendong voluntarily giving up)](https://s.weibo.com/weibo?q=%23%E5%A6%82%E4%BD%95%E7%9C%8B%E5%BE%85%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%87%AA%E6%84%BF%E6%94%BE%E5%BC%83%23) `96.8K 🔥` `NEW`
1. [央视曝光黑中医馆骗局](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E9%BB%91%E4%B8%AD%E5%8C%BB%E9%A6%86%E9%AA%97%E5%B1%80%23) `91.5K 🔥` `NEW`
1. [鹿晗勋章MV好多老熟人](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%8B%8B%E7%AB%A0MV%E5%A5%BD%E5%A4%9A%E8%80%81%E7%86%9F%E4%BA%BA%23) `88.8K 🔥` `NEW`
1. [赵丽颖楚乔打戏](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E6%A5%9A%E4%B9%94%E6%89%93%E6%88%8F%23) `82.0K 🔥` `NEW`
1. [李嘉诚一边卖电网一边囤石油](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%98%89%E8%AF%9A%E4%B8%80%E8%BE%B9%E5%8D%96%E7%94%B5%E7%BD%91%E4%B8%80%E8%BE%B9%E5%9B%A4%E7%9F%B3%E6%B2%B9%23) `76.3K 🔥` `NEW`
1. [康师傅无法兑奖消费者发声](https://s.weibo.com/weibo?q=%23%E5%BA%B7%E5%B8%88%E5%82%85%E6%97%A0%E6%B3%95%E5%85%91%E5%A5%96%E6%B6%88%E8%B4%B9%E8%80%85%E5%8F%91%E5%A3%B0%23) `72.1K 🔥` `NEW`
1. [美军高官称停火只是暂时](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E9%AB%98%E5%AE%98%E7%A7%B0%E5%81%9C%E7%81%AB%E5%8F%AA%E6%98%AF%E6%9A%82%E6%97%B6%23) `71.5K 🔥` `NEW`
1. [TES回应现场观众不当应援](https://s.weibo.com/weibo?q=%23TES%E5%9B%9E%E5%BA%94%E7%8E%B0%E5%9C%BA%E8%A7%82%E4%BC%97%E4%B8%8D%E5%BD%93%E5%BA%94%E6%8F%B4%23) `71.5K 🔥` `NEW`
1. [胡先煦正式进组十日终焉](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6%E6%AD%A3%E5%BC%8F%E8%BF%9B%E7%BB%84%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `71.3K 🔥` `NEW`
1. [优衣库回应顾客因逛店久被错控偷窃](https://s.weibo.com/weibo?q=%23%E4%BC%98%E8%A1%A3%E5%BA%93%E5%9B%9E%E5%BA%94%E9%A1%BE%E5%AE%A2%E5%9B%A0%E9%80%9B%E5%BA%97%E4%B9%85%E8%A2%AB%E9%94%99%E6%8E%A7%E5%81%B7%E7%AA%83%23) `66.6K 🔥` `NEW`
1. [香港艺人萧键铿去世 (Hong Kong artist Siu Kin Keng passes away)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E8%89%BA%E4%BA%BA%E8%90%A7%E9%94%AE%E9%93%BF%E5%8E%BB%E4%B8%96%23) `65.7K 🔥` `NEW`
1. [全网都在复刻莫氏鸡煲](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BD%91%E9%83%BD%E5%9C%A8%E5%A4%8D%E5%88%BB%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%23) `64.9K 🔥` `NEW`
1. [NCT十周年预告](https://s.weibo.com/weibo?q=%23NCT%E5%8D%81%E5%91%A8%E5%B9%B4%E9%A2%84%E5%91%8A%23) `137.0K 🔥` `+162%`
1. [金靖说明显感觉到张凌赫太火了 (Jin Jing said that he obviously felt that Zhang Linghe was too hot.)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%E8%AF%B4%E6%98%8E%E6%98%BE%E6%84%9F%E8%A7%89%E5%88%B0%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%A4%AA%E7%81%AB%E4%BA%86%23) `141.2K 🔥`
1. [金子涵直播疑似求救 (Jin Jinhan's live broadcast is suspected of asking for help)](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E7%9B%B4%E6%92%AD%E7%96%91%E4%BC%BC%E6%B1%82%E6%95%91%23) `129.9K 🔥`
1. [武汉暴雨](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E6%9A%B4%E9%9B%A8%23) `72.7K 🔥`
1. [杭州西湖将连续一周撒7吨漂白粉 (Hangzhou West Lake will spray 7 tons of bleaching powder for a week)](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E8%A5%BF%E6%B9%96%E5%B0%86%E8%BF%9E%E7%BB%AD%E4%B8%80%E5%91%A8%E6%92%927%E5%90%A8%E6%BC%82%E7%99%BD%E7%B2%89%23) `207.6K 🔥` `-40%`
1. [35岁程序员转行摆摊卖肉蛋堡月入5万 (The 35-year-old programmer switched to setting up a stall selling meat and egg burgers and earning 50,000 yuan a month.)](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E7%A8%8B%E5%BA%8F%E5%91%98%E8%BD%AC%E8%A1%8C%E6%91%86%E6%91%8A%E5%8D%96%E8%82%89%E8%9B%8B%E5%A0%A1%E6%9C%88%E5%85%A55%E4%B8%87%23) `134.2K 🔥` `-82%`
1. [哪吒2全球票房离第三不到一亿](https://s.weibo.com/weibo?q=%23%E5%93%AA%E5%90%922%E5%85%A8%E7%90%83%E7%A5%A8%E6%88%BF%E7%A6%BB%E7%AC%AC%E4%B8%89%E4%B8%8D%E5%88%B0%E4%B8%80%E4%BA%BF%23) `71.5K 🔥` `-62%`
1. [伊朗已叫停霍尔木兹海峡油轮通行 (Iran has halted oil tanker traffic in the Strait of Hormuz)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%B7%B2%E5%8F%AB%E5%81%9C%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E6%B2%B9%E8%BD%AE%E9%80%9A%E8%A1%8C%23) `65.3K 🔥` `-89%`

Updated at 2026-04-09 11:25:29

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
