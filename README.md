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

1. [男子恶意下单流水高达1030万元获刑 (Man was jailed for maliciously placing orders and transferring as much as NT$10.3 million)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%81%B6%E6%84%8F%E4%B8%8B%E5%8D%95%E6%B5%81%E6%B0%B4%E9%AB%98%E8%BE%BE1030%E4%B8%87%E5%85%83%E8%8E%B7%E5%88%91%23) `1.1M 🔥` `NEW`
1. [九旬老太遗产全给干儿子被法院驳回](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E6%97%AC%E8%80%81%E5%A4%AA%E9%81%97%E4%BA%A7%E5%85%A8%E7%BB%99%E5%B9%B2%E5%84%BF%E5%AD%90%E8%A2%AB%E6%B3%95%E9%99%A2%E9%A9%B3%E5%9B%9E%23) `792.9K 🔥` `NEW`
1. [以色列总理警告特朗普勿仓促停火](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%80%BB%E7%90%86%E8%AD%A6%E5%91%8A%E7%89%B9%E6%9C%97%E6%99%AE%E5%8B%BF%E4%BB%93%E4%BF%83%E5%81%9C%E7%81%AB%23) `468.3K 🔥` `NEW`
1. [亮灯取件方式](https://s.weibo.com/weibo?q=%23%E4%BA%AE%E7%81%AF%E5%8F%96%E4%BB%B6%E6%96%B9%E5%BC%8F%23) `188.1K 🔥` `NEW`
1. [桃黑黑直播打嘴抽脸](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E7%9B%B4%E6%92%AD%E6%89%93%E5%98%B4%E6%8A%BD%E8%84%B8%23) `174.7K 🔥` `NEW`
1. [五次退网的辛巴再收徒](https://s.weibo.com/weibo?q=%23%E4%BA%94%E6%AC%A1%E9%80%80%E7%BD%91%E7%9A%84%E8%BE%9B%E5%B7%B4%E5%86%8D%E6%94%B6%E5%BE%92%23) `173.6K 🔥` `NEW`
1. [庄达菲陈昊宇合照](https://s.weibo.com/weibo?q=%23%E5%BA%84%E8%BE%BE%E8%8F%B2%E9%99%88%E6%98%8A%E5%AE%87%E5%90%88%E7%85%A7%23) `164.6K 🔥` `NEW`
1. [多国央行开始卖黄金了](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9B%BD%E5%A4%AE%E8%A1%8C%E5%BC%80%E5%A7%8B%E5%8D%96%E9%BB%84%E9%87%91%E4%BA%86%23) `134.2K 🔥` `NEW`
1. [男子扫墓时被墓碑砸成十级伤残](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%89%AB%E5%A2%93%E6%97%B6%E8%A2%AB%E5%A2%93%E7%A2%91%E7%A0%B8%E6%88%90%E5%8D%81%E7%BA%A7%E4%BC%A4%E6%AE%8B%23) `133.7K 🔥` `NEW`
1. [特朗普称出动176架飞机营救飞行员](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E5%87%BA%E5%8A%A8176%E6%9E%B6%E9%A3%9E%E6%9C%BA%E8%90%A5%E6%95%91%E9%A3%9E%E8%A1%8C%E5%91%98%23) `125.9K 🔥` `NEW`
1. [iPhoneFold再曝渲染图 (iPhone Fold renders revealed again)](https://s.weibo.com/weibo?q=%23iPhoneFold%E5%86%8D%E6%9B%9D%E6%B8%B2%E6%9F%93%E5%9B%BE%23) `101.1K 🔥` `NEW`
1. [博物馆定期清理曹操墓前过期布洛芬](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E7%89%A9%E9%A6%86%E5%AE%9A%E6%9C%9F%E6%B8%85%E7%90%86%E6%9B%B9%E6%93%8D%E5%A2%93%E5%89%8D%E8%BF%87%E6%9C%9F%E5%B8%83%E6%B4%9B%E8%8A%AC%23) `95.1K 🔥` `NEW`
1. [特朗普又一个最后通牒](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%8F%88%E4%B8%80%E4%B8%AA%E6%9C%80%E5%90%8E%E9%80%9A%E7%89%92%23) `92.2K 🔥` `NEW`
1. [钢铁森林](https://s.weibo.com/weibo?q=%23%E9%92%A2%E9%93%81%E6%A3%AE%E6%9E%97%23) `90.8K 🔥` `NEW`
1. [境外间谍或用词元骗局窃取数据](https://s.weibo.com/weibo?q=%23%E5%A2%83%E5%A4%96%E9%97%B4%E8%B0%8D%E6%88%96%E7%94%A8%E8%AF%8D%E5%85%83%E9%AA%97%E5%B1%80%E7%AA%83%E5%8F%96%E6%95%B0%E6%8D%AE%23) `90.7K 🔥` `NEW`
1. [高敏感不擅长社交但擅长看穿](https://s.weibo.com/weibo?q=%23%E9%AB%98%E6%95%8F%E6%84%9F%E4%B8%8D%E6%93%85%E9%95%BF%E7%A4%BE%E4%BA%A4%E4%BD%86%E6%93%85%E9%95%BF%E7%9C%8B%E7%A9%BF%23) `87.1K 🔥` `NEW`
1. [再上三周多又小长假了](https://s.weibo.com/weibo?q=%23%E5%86%8D%E4%B8%8A%E4%B8%89%E5%91%A8%E5%A4%9A%E5%8F%88%E5%B0%8F%E9%95%BF%E5%81%87%E4%BA%86%23) `81.5K 🔥` `NEW`
1. [日韩股市全线收涨](https://s.weibo.com/weibo?q=%23%E6%97%A5%E9%9F%A9%E8%82%A1%E5%B8%82%E5%85%A8%E7%BA%BF%E6%94%B6%E6%B6%A8%23) `75.9K 🔥` `NEW`
1. [美国载人绕月任务打破纪录](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E8%BD%BD%E4%BA%BA%E7%BB%95%E6%9C%88%E4%BB%BB%E5%8A%A1%E6%89%93%E7%A0%B4%E7%BA%AA%E5%BD%95%23) `68.1K 🔥` `NEW`
1. [记得回应和957的矛盾](https://s.weibo.com/weibo?q=%23%E8%AE%B0%E5%BE%97%E5%9B%9E%E5%BA%94%E5%92%8C957%E7%9A%84%E7%9F%9B%E7%9B%BE%23) `67.8K 🔥` `NEW`
1. [猫咪带娃一年的变化 (Changes in a cat’s one year of raising a baby)](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%92%AA%E5%B8%A6%E5%A8%83%E4%B8%80%E5%B9%B4%E7%9A%84%E5%8F%98%E5%8C%96%23) `66.8K 🔥` `NEW`
1. [赵心童夺冠后说恭喜王楚钦](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%BF%83%E7%AB%A5%E5%A4%BA%E5%86%A0%E5%90%8E%E8%AF%B4%E6%81%AD%E5%96%9C%E7%8E%8B%E6%A5%9A%E9%92%A6%23) `65.9K 🔥` `NEW`
1. [浪姐的意义](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%9A%84%E6%84%8F%E4%B9%89%23) `63.2K 🔥` `NEW`
1. [皮蛋小酥肉](https://s.weibo.com/weibo?q=%23%E7%9A%AE%E8%9B%8B%E5%B0%8F%E9%85%A5%E8%82%89%23) `61.0K 🔥` `NEW`
1. [贺鑫隆 我没切小屏](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E9%91%AB%E9%9A%86%20%E6%88%91%E6%B2%A1%E5%88%87%E5%B0%8F%E5%B1%8F%23) `60.7K 🔥` `NEW`
1. [父亲问儿子要2000元投资款被拒 (Father asked son for 2,000 yuan investment but was refused)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E9%97%AE%E5%84%BF%E5%AD%90%E8%A6%812000%E5%85%83%E6%8A%95%E8%B5%84%E6%AC%BE%E8%A2%AB%E6%8B%92%23) `224.2K 🔥` `+38%`
1. [我们的爸爸2重组家庭太难了](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E7%88%B8%E7%88%B82%E9%87%8D%E7%BB%84%E5%AE%B6%E5%BA%AD%E5%A4%AA%E9%9A%BE%E4%BA%86%23) `202.3K 🔥` `+84%`
1. [李若嘉被查出桥本病](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8B%A5%E5%98%89%E8%A2%AB%E6%9F%A5%E5%87%BA%E6%A1%A5%E6%9C%AC%E7%97%85%23) `169.1K 🔥` `+108%`
1. [伊朗说美营救飞行员或意在偷浓缩铀](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%AF%B4%E7%BE%8E%E8%90%A5%E6%95%91%E9%A3%9E%E8%A1%8C%E5%91%98%E6%88%96%E6%84%8F%E5%9C%A8%E5%81%B7%E6%B5%93%E7%BC%A9%E9%93%80%23) `134.8K 🔥` `+28%`
1. [恩利叫秦昊小昊哥哥](https://s.weibo.com/weibo?q=%23%E6%81%A9%E5%88%A9%E5%8F%AB%E7%A7%A6%E6%98%8A%E5%B0%8F%E6%98%8A%E5%93%A5%E5%93%A5%23) `110.7K 🔥` `+161%`
1. [咖啡店摆700字须知内含禁乱扔丝袜](https://s.weibo.com/weibo?q=%23%E5%92%96%E5%95%A1%E5%BA%97%E6%91%86700%E5%AD%97%E9%A1%BB%E7%9F%A5%E5%86%85%E5%90%AB%E7%A6%81%E4%B9%B1%E6%89%94%E4%B8%9D%E8%A2%9C%23) `78.8K 🔥` `+66%`
1. [清明假期预计跨区域流动8.4亿人次 (An estimated 840 million people will move across regions during the Tomb Sweeping Day holiday)](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%98%8E%E5%81%87%E6%9C%9F%E9%A2%84%E8%AE%A1%E8%B7%A8%E5%8C%BA%E5%9F%9F%E6%B5%81%E5%8A%A88.4%E4%BA%BF%E4%BA%BA%E6%AC%A1%23) `611.0K 🔥`
1. [三星家族549亿元遗产税尾款 (Samsung family’s inheritance tax balance of 54.9 billion yuan)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%E5%AE%B6%E6%97%8F549%E4%BA%BF%E5%85%83%E9%81%97%E4%BA%A7%E7%A8%8E%E5%B0%BE%E6%AC%BE%23) `206.7K 🔥`
1. [伊朗拒绝停火强调须永久结束战争 (Iran rejects ceasefire, stresses need to permanently end war)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8B%92%E7%BB%9D%E5%81%9C%E7%81%AB%E5%BC%BA%E8%B0%83%E9%A1%BB%E6%B0%B8%E4%B9%85%E7%BB%93%E6%9D%9F%E6%88%98%E4%BA%89%23) `184.8K 🔥`
1. [特朗普正面临重大抉择](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%AD%A3%E9%9D%A2%E4%B8%B4%E9%87%8D%E5%A4%A7%E6%8A%89%E6%8B%A9%23) `167.9K 🔥`
1. [文章和女儿合照被说像明星](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%AB%A0%E5%92%8C%E5%A5%B3%E5%84%BF%E5%90%88%E7%85%A7%E8%A2%AB%E8%AF%B4%E5%83%8F%E6%98%8E%E6%98%9F%23) `154.8K 🔥`
1. [被大冰断家务事的三观给征服](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%A4%A7%E5%86%B0%E6%96%AD%E5%AE%B6%E5%8A%A1%E4%BA%8B%E7%9A%84%E4%B8%89%E8%A7%82%E7%BB%99%E5%BE%81%E6%9C%8D%23) `134.5K 🔥`
1. [伊朗的棋越下越大 (Iran's chess moves are getting bigger and bigger)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%9A%84%E6%A3%8B%E8%B6%8A%E4%B8%8B%E8%B6%8A%E5%A4%A7%23) `120.4K 🔥`
1. [田嘉瑞月鳞绮纪 (Tian Jiarui's Moonscale Qiji)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E5%98%89%E7%91%9E%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%23) `80.8K 🔥`
1. [卫生巾或通过减量不加价隐性涨价 (The price of sanitary napkins may increase implicitly by reducing the quantity without increasing the price.)](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E7%94%9F%E5%B7%BE%E6%88%96%E9%80%9A%E8%BF%87%E5%87%8F%E9%87%8F%E4%B8%8D%E5%8A%A0%E4%BB%B7%E9%9A%90%E6%80%A7%E6%B6%A8%E4%BB%B7%23) `80.8K 🔥`
1. [日乒队员看王楚钦夺冠时的表情 (The expressions of Japanese table tennis players watching Wang Chuqin win the championship)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E4%B9%92%E9%98%9F%E5%91%98%E7%9C%8B%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%A4%BA%E5%86%A0%E6%97%B6%E7%9A%84%E8%A1%A8%E6%83%85%23) `274.4K 🔥` `-62%`
1. [美军特种兵潜入伊朗救人场面失控](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E7%89%B9%E7%A7%8D%E5%85%B5%E6%BD%9C%E5%85%A5%E4%BC%8A%E6%9C%97%E6%95%91%E4%BA%BA%E5%9C%BA%E9%9D%A2%E5%A4%B1%E6%8E%A7%23) `183.9K 🔥` `-59%`
1. [阚清子参加浪姐瘦了一圈](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%8F%82%E5%8A%A0%E6%B5%AA%E5%A7%90%E7%98%A6%E4%BA%86%E4%B8%80%E5%9C%88%23) `180.6K 🔥` `-32%`
1. [老夫妻近3万买戒指后被店家跟踪 (An elderly couple bought a ring worth nearly RMB 30,000 and was followed by the store.)](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%A4%AB%E5%A6%BB%E8%BF%913%E4%B8%87%E4%B9%B0%E6%88%92%E6%8C%87%E5%90%8E%E8%A2%AB%E5%BA%97%E5%AE%B6%E8%B7%9F%E8%B8%AA%23) `134.4K 🔥` `-86%`
1. [14枚导弹命中以色列人口密集区 (14 missiles hit densely populated areas of Israel)](https://s.weibo.com/weibo?q=%2314%E6%9E%9A%E5%AF%BC%E5%BC%B9%E5%91%BD%E4%B8%AD%E4%BB%A5%E8%89%B2%E5%88%97%E4%BA%BA%E5%8F%A3%E5%AF%86%E9%9B%86%E5%8C%BA%23) `124.4K 🔥` `-46%`
1. [何炅谢娜李维嘉KTV照](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E8%B0%A2%E5%A8%9C%E6%9D%8E%E7%BB%B4%E5%98%89KTV%E7%85%A7%23) `113.1K 🔥` `-23%`
1. [美军运输机残骸中发现一美士兵遗体 (Body of an American soldier found in the wreckage of a US military transport plane)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E8%BF%90%E8%BE%93%E6%9C%BA%E6%AE%8B%E9%AA%B8%E4%B8%AD%E5%8F%91%E7%8E%B0%E4%B8%80%E7%BE%8E%E5%A3%AB%E5%85%B5%E9%81%97%E4%BD%93%23) `102.0K 🔥` `-35%`
1. [王濛 别让武将干这个 (Wang Meng, don’t let the generals do this.)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%20%E5%88%AB%E8%AE%A9%E6%AD%A6%E5%B0%86%E5%B9%B2%E8%BF%99%E4%B8%AA%23) `77.0K 🔥` `-23%`
1. [迪丽热巴陈飞宇牵手奔跑](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%99%88%E9%A3%9E%E5%AE%87%E7%89%B5%E6%89%8B%E5%A5%94%E8%B7%91%23) `66.8K 🔥` `-32%`
1. [今年白玉兰视帝入围预测](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E7%99%BD%E7%8E%89%E5%85%B0%E8%A7%86%E5%B8%9D%E5%85%A5%E5%9B%B4%E9%A2%84%E6%B5%8B%23) `58.6K 🔥` `-31%`

Updated at 2026-04-07 09:10:05

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
