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
- **Browser extension**: Safari (and Chrome/Firefox) toolbar popup with the daily list — see [`safari-extension/`](safari-extension/)

## Today's Hot Searches

<!-- BEGIN -->

1. [这就是跟老人的有效沟通 (This is effective communication with the elderly)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B0%B1%E6%98%AF%E8%B7%9F%E8%80%81%E4%BA%BA%E7%9A%84%E6%9C%89%E6%95%88%E6%B2%9F%E9%80%9A%23) `368.6K 🔥` `NEW`
1. [白海豚将正面袭击贯穿浙江](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E5%B0%86%E6%AD%A3%E9%9D%A2%E8%A2%AD%E5%87%BB%E8%B4%AF%E7%A9%BF%E6%B5%99%E6%B1%9F%23) `366.7K 🔥` `NEW`
1. [为什么在别人家吃饭后不建议刷碗](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%9C%A8%E5%88%AB%E4%BA%BA%E5%AE%B6%E5%90%83%E9%A5%AD%E5%90%8E%E4%B8%8D%E5%BB%BA%E8%AE%AE%E5%88%B7%E7%A2%97%23) `364.5K 🔥` `NEW`
1. [白海豚或将在浙江省停留20多个小时](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E6%88%96%E5%B0%86%E5%9C%A8%E6%B5%99%E6%B1%9F%E7%9C%81%E5%81%9C%E7%95%9920%E5%A4%9A%E4%B8%AA%E5%B0%8F%E6%97%B6%23) `361.2K 🔥` `NEW`
1. [等风热吻你](https://s.weibo.com/weibo?q=%23%E7%AD%89%E9%A3%8E%E7%83%AD%E5%90%BB%E4%BD%A0%23) `359.3K 🔥` `NEW`
1. [刘旸秒删](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%97%B8%E7%A7%92%E5%88%A0%23) `353.4K 🔥` `NEW`
1. [胚胎案妻子结婚纪念日选择重生](https://s.weibo.com/weibo?q=%23%E8%83%9A%E8%83%8E%E6%A1%88%E5%A6%BB%E5%AD%90%E7%BB%93%E5%A9%9A%E7%BA%AA%E5%BF%B5%E6%97%A5%E9%80%89%E6%8B%A9%E9%87%8D%E7%94%9F%23) `346.3K 🔥` `NEW`
1. [王星越修护不做表面功夫](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%9F%E8%B6%8A%E4%BF%AE%E6%8A%A4%E4%B8%8D%E5%81%9A%E8%A1%A8%E9%9D%A2%E5%8A%9F%E5%A4%AB%23) `342.9K 🔥` `NEW`
1. [BLACKPINK直播](https://s.weibo.com/weibo?q=%23BLACKPINK%E7%9B%B4%E6%92%AD%23) `333.9K 🔥` `NEW`
1. [库里回复巴特勒你有什么毛病吗](https://s.weibo.com/weibo?q=%23%E5%BA%93%E9%87%8C%E5%9B%9E%E5%A4%8D%E5%B7%B4%E7%89%B9%E5%8B%92%E4%BD%A0%E6%9C%89%E4%BB%80%E4%B9%88%E6%AF%9B%E7%97%85%E5%90%97%23) `323.7K 🔥` `NEW`
1. [牛津百万项目被指草台班子学员退款 (The Oxford Millions Project is accused of refunding students from the grass-roots team)](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%B4%A5%E7%99%BE%E4%B8%87%E9%A1%B9%E7%9B%AE%E8%A2%AB%E6%8C%87%E8%8D%89%E5%8F%B0%E7%8F%AD%E5%AD%90%E5%AD%A6%E5%91%98%E9%80%80%E6%AC%BE%23) `318.8K 🔥` `NEW`
1. [名创优品一次性内裤 颜面尽失](https://s.weibo.com/weibo?q=%23%E5%90%8D%E5%88%9B%E4%BC%98%E5%93%81%E4%B8%80%E6%AC%A1%E6%80%A7%E5%86%85%E8%A3%A4%20%E9%A2%9C%E9%9D%A2%E5%B0%BD%E5%A4%B1%23) `312.8K 🔥` `NEW`
1. [九门点天灯名场面](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E7%82%B9%E5%A4%A9%E7%81%AF%E5%90%8D%E5%9C%BA%E9%9D%A2%23) `302.6K 🔥` `NEW`
1. [母女桨板漂流被冲深水区教练不敢救](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E5%A5%B3%E6%A1%A8%E6%9D%BF%E6%BC%82%E6%B5%81%E8%A2%AB%E5%86%B2%E6%B7%B1%E6%B0%B4%E5%8C%BA%E6%95%99%E7%BB%83%E4%B8%8D%E6%95%A2%E6%95%91%23) `302.5K 🔥` `NEW`
1. [KimiK3测试突破沙盒逃逸未实施攻击](https://s.weibo.com/weibo?q=%23KimiK3%E6%B5%8B%E8%AF%95%E7%AA%81%E7%A0%B4%E6%B2%99%E7%9B%92%E9%80%83%E9%80%B8%E6%9C%AA%E5%AE%9E%E6%96%BD%E6%94%BB%E5%87%BB%23) `253.0K 🔥` `NEW`
1. [疑似前经纪人喊话李宏毅](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E5%89%8D%E7%BB%8F%E7%BA%AA%E4%BA%BA%E5%96%8A%E8%AF%9D%E6%9D%8E%E5%AE%8F%E6%AF%85%23) `250.3K 🔥` `NEW`
1. [十个勤天2天杭州演唱会取消](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A92%E5%A4%A9%E6%9D%AD%E5%B7%9E%E6%BC%94%E5%94%B1%E4%BC%9A%E5%8F%96%E6%B6%88%23) `248.8K 🔥` `NEW`
1. [暑期档 撤档 (Summer schedule withdrawn)](https://s.weibo.com/weibo?q=%23%E6%9A%91%E6%9C%9F%E6%A1%A3%20%E6%92%A4%E6%A1%A3%23) `2.0M 🔥` `+22%`
1. [健康是生命最好的礼物 (Health is the best gift of life)](https://s.weibo.com/weibo?q=%23%E5%81%A5%E5%BA%B7%E6%98%AF%E7%94%9F%E5%91%BD%E6%9C%80%E5%A5%BD%E7%9A%84%E7%A4%BC%E7%89%A9%23) `966.1K 🔥` `+35%`
1. [关晓彤已到最佳赏味期 (Guan Xiaotong has reached the best period of appreciation)](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%B7%B2%E5%88%B0%E6%9C%80%E4%BD%B3%E8%B5%8F%E5%91%B3%E6%9C%9F%23) `938.6K 🔥` `+48%`
1. [荣威新车重大乌龙](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E5%A8%81%E6%96%B0%E8%BD%A6%E9%87%8D%E5%A4%A7%E4%B9%8C%E9%BE%99%23) `333.4K 🔥` `+95%`
1. [乌克兰女子死抱男友阻拦征兵办 (Ukrainian woman hugs her boyfriend to stop military recruitment)](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%8B%E5%85%B0%E5%A5%B3%E5%AD%90%E6%AD%BB%E6%8A%B1%E7%94%B7%E5%8F%8B%E9%98%BB%E6%8B%A6%E5%BE%81%E5%85%B5%E5%8A%9E%23) `258.2K 🔥` `+51%`
1. [张本智和说面对国乒年轻选手压力消失了 (Zhang Benzhihe said that the pressure disappeared when facing young national table tennis players.)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E8%AF%B4%E9%9D%A2%E5%AF%B9%E5%9B%BD%E4%B9%92%E5%B9%B4%E8%BD%BB%E9%80%89%E6%89%8B%E5%8E%8B%E5%8A%9B%E6%B6%88%E5%A4%B1%E4%BA%86%23) `416.2K 🔥`
1. [原来这是追到正缘了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E6%98%AF%E8%BF%BD%E5%88%B0%E6%AD%A3%E7%BC%98%E4%BA%86%23) `367.5K 🔥`
1. [白鹿柳智敏 蛇塑](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9F%B3%E6%99%BA%E6%95%8F%20%E8%9B%87%E5%A1%91%23) `363.0K 🔥`
1. [富婆带资进组给自己硬加60多场吻戏 (The rich woman brought money into the group and had more than 60 kissing scenes for herself)](https://s.weibo.com/weibo?q=%23%E5%AF%8C%E5%A9%86%E5%B8%A6%E8%B5%84%E8%BF%9B%E7%BB%84%E7%BB%99%E8%87%AA%E5%B7%B1%E7%A1%AC%E5%8A%A060%E5%A4%9A%E5%9C%BA%E5%90%BB%E6%88%8F%23) `356.5K 🔥`
1. [台风白海豚闭眼意味着什么 (What does it mean when Typhoon White Dolphin closes its eyes?)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%E9%97%AD%E7%9C%BC%E6%84%8F%E5%91%B3%E7%9D%80%E4%BB%80%E4%B9%88%23) `354.5K 🔥`
1. [以媒称伊朗最高领袖被紧急送医](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%AA%92%E7%A7%B0%E4%BC%8A%E6%9C%97%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E8%A2%AB%E7%B4%A7%E6%80%A5%E9%80%81%E5%8C%BB%23) `350.8K 🔥`
1. [薛之谦8月8日9日杭州演唱会取消 (Joker Xue's Hangzhou concert on August 8 and 9 is canceled)](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A68%E6%9C%888%E6%97%A59%E6%97%A5%E6%9D%AD%E5%B7%9E%E6%BC%94%E5%94%B1%E4%BC%9A%E5%8F%96%E6%B6%88%23) `350.6K 🔥`
1. [自媒体红利期只剩AI了](https://s.weibo.com/weibo?q=%23%E8%87%AA%E5%AA%92%E4%BD%93%E7%BA%A2%E5%88%A9%E6%9C%9F%E5%8F%AA%E5%89%A9AI%E4%BA%86%23) `347.1K 🔥`
1. [小心这种手机壳正在偷拍你的隐私](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%BF%83%E8%BF%99%E7%A7%8D%E6%89%8B%E6%9C%BA%E5%A3%B3%E6%AD%A3%E5%9C%A8%E5%81%B7%E6%8B%8D%E4%BD%A0%E7%9A%84%E9%9A%90%E7%A7%81%23) `344.7K 🔥`
1. [披荆斩棘2026官宣定档](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%982026%E5%AE%98%E5%AE%A3%E5%AE%9A%E6%A1%A3%23) `343.5K 🔥`
1. [确诊胃癌晚期博士父母发声](https://s.weibo.com/weibo?q=%23%E7%A1%AE%E8%AF%8A%E8%83%83%E7%99%8C%E6%99%9A%E6%9C%9F%E5%8D%9A%E5%A3%AB%E7%88%B6%E6%AF%8D%E5%8F%91%E5%A3%B0%23) `340.2K 🔥`
1. [金价突破4400美元](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E7%AA%81%E7%A0%B44400%E7%BE%8E%E5%85%83%23) `337.8K 🔥`
1. [留几手希望葛夕道歉](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%87%A0%E6%89%8B%E5%B8%8C%E6%9C%9B%E8%91%9B%E5%A4%95%E9%81%93%E6%AD%89%23) `330.9K 🔥`
1. [王楚然大一形体课越扒越有 (Wang Churan's freshman bodybuilding class got more and more interesting)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%A4%A7%E4%B8%80%E5%BD%A2%E4%BD%93%E8%AF%BE%E8%B6%8A%E6%89%92%E8%B6%8A%E6%9C%89%23) `326.9K 🔥`
1. [村民洗车多看一眼救了55人](https://s.weibo.com/weibo?q=%23%E6%9D%91%E6%B0%91%E6%B4%97%E8%BD%A6%E5%A4%9A%E7%9C%8B%E4%B8%80%E7%9C%BC%E6%95%91%E4%BA%8655%E4%BA%BA%23) `326.1K 🔥`
1. [胃癌直博生曾向父亲借钱旅游被拒](https://s.weibo.com/weibo?q=%23%E8%83%83%E7%99%8C%E7%9B%B4%E5%8D%9A%E7%94%9F%E6%9B%BE%E5%90%91%E7%88%B6%E4%BA%B2%E5%80%9F%E9%92%B1%E6%97%85%E6%B8%B8%E8%A2%AB%E6%8B%92%23) `321.5K 🔥`
1. [iPhone18系列发布节奏 (iPhone18 series release rhythm)](https://s.weibo.com/weibo?q=%23iPhone18%E7%B3%BB%E5%88%97%E5%8F%91%E5%B8%83%E8%8A%82%E5%A5%8F%23) `315.8K 🔥`
1. [富婆硬加吻戏短剧已下架](https://s.weibo.com/weibo?q=%23%E5%AF%8C%E5%A9%86%E7%A1%AC%E5%8A%A0%E5%90%BB%E6%88%8F%E7%9F%AD%E5%89%A7%E5%B7%B2%E4%B8%8B%E6%9E%B6%23) `311.9K 🔥`
1. [粉丝没接到迪丽热巴接到了拜仁球员](https://s.weibo.com/weibo?q=%23%E7%B2%89%E4%B8%9D%E6%B2%A1%E6%8E%A5%E5%88%B0%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%8E%A5%E5%88%B0%E4%BA%86%E6%8B%9C%E4%BB%81%E7%90%83%E5%91%98%23) `308.9K 🔥`
1. [日韩网红模仿中国人切西瓜 (Japanese and Korean Internet celebrities imitate Chinese people cutting watermelon)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E9%9F%A9%E7%BD%91%E7%BA%A2%E6%A8%A1%E4%BB%BF%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%88%87%E8%A5%BF%E7%93%9C%23) `305.7K 🔥`
1. [皮肤好是可以养出来的](https://s.weibo.com/weibo?q=%23%E7%9A%AE%E8%82%A4%E5%A5%BD%E6%98%AF%E5%8F%AF%E4%BB%A5%E5%85%BB%E5%87%BA%E6%9D%A5%E7%9A%84%23) `304.8K 🔥`
1. [曝杨洋陈都灵主演等风热吻你](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%A8%E6%B4%8B%E9%99%88%E9%83%BD%E7%81%B5%E4%B8%BB%E6%BC%94%E7%AD%89%E9%A3%8E%E7%83%AD%E5%90%BB%E4%BD%A0%23) `302.5K 🔥`
1. [金允植机场](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%85%81%E6%A4%8D%E6%9C%BA%E5%9C%BA%23) `265.0K 🔥`
1. [患胃癌晚期直博生总是熬夜吃外卖](https://s.weibo.com/weibo?q=%23%E6%82%A3%E8%83%83%E7%99%8C%E6%99%9A%E6%9C%9F%E7%9B%B4%E5%8D%9A%E7%94%9F%E6%80%BB%E6%98%AF%E7%86%AC%E5%A4%9C%E5%90%83%E5%A4%96%E5%8D%96%23) `264.4K 🔥`
1. [白海豚已闭眼](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E5%B7%B2%E9%97%AD%E7%9C%BC%23) `1.1M 🔥` `-26%`
1. [多个明星演唱会取消](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%B8%AA%E6%98%8E%E6%98%9F%E6%BC%94%E5%94%B1%E4%BC%9A%E5%8F%96%E6%B6%88%23) `432.9K 🔥` `-37%`
1. [傅园慧成为浙江大学老师](https://s.weibo.com/weibo?q=%23%E5%82%85%E5%9B%AD%E6%85%A7%E6%88%90%E4%B8%BA%E6%B5%99%E6%B1%9F%E5%A4%A7%E5%AD%A6%E8%80%81%E5%B8%88%23) `260.1K 🔥` `-29%`
1. [张本智和 零封不算意外 (Zhang Benzhihe’s zero seal is not a surprise)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%20%E9%9B%B6%E5%B0%81%E4%B8%8D%E7%AE%97%E6%84%8F%E5%A4%96%23) `255.0K 🔥` `-31%`

Updated at 2026-08-08 14:23:51

<!-- END -->

## Data Reference

### Directory Structure

```
├── raw/                    # Raw JSON data
│   └── YYYY-MM-DD.json     # Daily hot search data
├── index.html              # GitHub Pages frontend
├── mod.ts                  # Scraping script (Deno)
├── bridge.py               # Data bridge to WeiboInsight/MongoDB
├── safari-extension/       # Safari/Chrome/Firefox browser extension (popup UI)
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
