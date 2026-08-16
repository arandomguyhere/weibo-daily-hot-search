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

1. [刘宇宁帮王玉雯剁肉 (Liu Yuning helps Wang Yuwen chop meat)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E5%B8%AE%E7%8E%8B%E7%8E%89%E9%9B%AF%E5%89%81%E8%82%89%23) `315.4K 🔥` `NEW`
1. [伊朗称三名飞行员被卡塔尔活捉](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E4%B8%89%E5%90%8D%E9%A3%9E%E8%A1%8C%E5%91%98%E8%A2%AB%E5%8D%A1%E5%A1%94%E5%B0%94%E6%B4%BB%E6%8D%89%23) `226.7K 🔥` `NEW`
1. [王俊凯侯明昊丁禹兮演唱会生图](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%BE%AF%E6%98%8E%E6%98%8A%E4%B8%81%E7%A6%B9%E5%85%AE%E6%BC%94%E5%94%B1%E4%BC%9A%E7%94%9F%E5%9B%BE%23) `225.2K 🔥` `NEW`
1. [什么东西成年了才意识到很贵](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E4%B8%9C%E8%A5%BF%E6%88%90%E5%B9%B4%E4%BA%86%E6%89%8D%E6%84%8F%E8%AF%86%E5%88%B0%E5%BE%88%E8%B4%B5%23) `225.1K 🔥` `NEW`
1. [牛来进入2026国产动画前10](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%9D%A5%E8%BF%9B%E5%85%A52026%E5%9B%BD%E4%BA%A7%E5%8A%A8%E7%94%BB%E5%89%8D10%23) `224.5K 🔥` `NEW`
1. [马嘉祺叫严浩翔浩翔](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E5%8F%AB%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%B5%A9%E7%BF%94%23) `224.1K 🔥` `NEW`
1. [70岁老人轻拍女孩头部家长愤怒推倒](https://s.weibo.com/weibo?q=%2370%E5%B2%81%E8%80%81%E4%BA%BA%E8%BD%BB%E6%8B%8D%E5%A5%B3%E5%AD%A9%E5%A4%B4%E9%83%A8%E5%AE%B6%E9%95%BF%E6%84%A4%E6%80%92%E6%8E%A8%E5%80%92%23) `207.8K 🔥` `NEW`
1. [汪苏泷回复李嘉琦](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%9B%9E%E5%A4%8D%E6%9D%8E%E5%98%89%E7%90%A6%23) `170.2K 🔥` `NEW`
1. [第七届TMEA红毯](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%83%E5%B1%8ATMEA%E7%BA%A2%E6%AF%AF%23) `161.6K 🔥` `NEW`
1. [TOP官宣无畏契约手瓦表演赛](https://s.weibo.com/weibo?q=%23TOP%E5%AE%98%E5%AE%A3%E6%97%A0%E7%95%8F%E5%A5%91%E7%BA%A6%E6%89%8B%E7%93%A6%E8%A1%A8%E6%BC%94%E8%B5%9B%23) `147.9K 🔥` `NEW`
1. [南京东路偶遇赵美延 (Encountering Zhao Meiyan on Nanjing East Road)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E4%BA%AC%E4%B8%9C%E8%B7%AF%E5%81%B6%E9%81%87%E8%B5%B5%E7%BE%8E%E5%BB%B6%23) `142.7K 🔥` `NEW`
1. [真的建议要从源头减少家务](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E7%9A%84%E5%BB%BA%E8%AE%AE%E8%A6%81%E4%BB%8E%E6%BA%90%E5%A4%B4%E5%87%8F%E5%B0%91%E5%AE%B6%E5%8A%A1%23) `134.2K 🔥` `NEW`
1. [王玉雯这里不允许上厕所](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E8%BF%99%E9%87%8C%E4%B8%8D%E5%85%81%E8%AE%B8%E4%B8%8A%E5%8E%95%E6%89%80%23) `128.0K 🔥` `NEW`
1. [榜一大哥打赏1500万金额无法查证](https://s.weibo.com/weibo?q=%23%E6%A6%9C%E4%B8%80%E5%A4%A7%E5%93%A5%E6%89%93%E8%B5%8F1500%E4%B8%87%E9%87%91%E9%A2%9D%E6%97%A0%E6%B3%95%E6%9F%A5%E8%AF%81%23) `118.9K 🔥` `NEW`
1. [C罗若离婚豪宅自动归乔治娜](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E8%8B%A5%E7%A6%BB%E5%A9%9A%E8%B1%AA%E5%AE%85%E8%87%AA%E5%8A%A8%E5%BD%92%E4%B9%94%E6%B2%BB%E5%A8%9C%23) `118.2K 🔥` `NEW`
1. [沪上阿姨 涉不正当竞争](https://s.weibo.com/weibo?q=%23%E6%B2%AA%E4%B8%8A%E9%98%BF%E5%A7%A8%20%E6%B6%89%E4%B8%8D%E6%AD%A3%E5%BD%93%E7%AB%9E%E4%BA%89%23) `795.0K 🔥` `+202%`
1. [其实人最好的状态就是销声匿迹](https://s.weibo.com/weibo?q=%23%E5%85%B6%E5%AE%9E%E4%BA%BA%E6%9C%80%E5%A5%BD%E7%9A%84%E7%8A%B6%E6%80%81%E5%B0%B1%E6%98%AF%E9%94%80%E5%A3%B0%E5%8C%BF%E8%BF%B9%23) `602.3K 🔥` `+22%`
1. [少年时代2真给我看进去了](https://s.weibo.com/weibo?q=%23%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%E7%9C%9F%E7%BB%99%E6%88%91%E7%9C%8B%E8%BF%9B%E5%8E%BB%E4%BA%86%23) `352.6K 🔥` `+64%`
1. [瑞幸联名 份子钱](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E8%81%94%E5%90%8D%20%E4%BB%BD%E5%AD%90%E9%92%B1%23) `223.8K 🔥` `+27%`
1. [朱镕基同志遗体18日火化 (Comrade Zhu Rongji’s body was cremated on the 18th)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E9%81%97%E4%BD%9318%E6%97%A5%E7%81%AB%E5%8C%96%23) `1.1M 🔥`
1. [进货式游中国火了 (Purchase-style travel to China is popular)](https://s.weibo.com/weibo?q=%23%E8%BF%9B%E8%B4%A7%E5%BC%8F%E6%B8%B8%E4%B8%AD%E5%9B%BD%E7%81%AB%E4%BA%86%23) `605.2K 🔥`
1. [张睿一看手机天又塌了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%E4%B8%80%E7%9C%8B%E6%89%8B%E6%9C%BA%E5%A4%A9%E5%8F%88%E5%A1%8C%E4%BA%86%23) `604.5K 🔥`
1. [打赏要求陪睡 (Reward for sleeping with someone)](https://s.weibo.com/weibo?q=%23%E6%89%93%E8%B5%8F%E8%A6%81%E6%B1%82%E9%99%AA%E7%9D%A1%23) `603.9K 🔥`
1. [官方辟谣湖南耒阳公交惊险漂移](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E8%BE%9F%E8%B0%A3%E6%B9%96%E5%8D%97%E8%80%92%E9%98%B3%E5%85%AC%E4%BA%A4%E6%83%8A%E9%99%A9%E6%BC%82%E7%A7%BB%23) `570.7K 🔥`
1. [何穗妊娠纹](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%A9%97%E5%A6%8A%E5%A8%A0%E7%BA%B9%23) `288.1K 🔥`
1. [等了好久的妆造是遗照](https://s.weibo.com/weibo?q=%23%E7%AD%89%E4%BA%86%E5%A5%BD%E4%B9%85%E7%9A%84%E5%A6%86%E9%80%A0%E6%98%AF%E9%81%97%E7%85%A7%23) `280.1K 🔥`
1. [39岁知名儿科医生不幸去世](https://s.weibo.com/weibo?q=%2339%E5%B2%81%E7%9F%A5%E5%90%8D%E5%84%BF%E7%A7%91%E5%8C%BB%E7%94%9F%E4%B8%8D%E5%B9%B8%E5%8E%BB%E4%B8%96%23) `232.4K 🔥`
1. [贺峻霖给严浩翔的祝福 (He Junlin’s blessing to Yan Haoxiang)](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E7%BB%99%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%9A%84%E7%A5%9D%E7%A6%8F%23) `231.9K 🔥`
1. [魏笑包洁仪厚本 我不就不是NPC](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E7%AC%91%E5%8C%85%E6%B4%81%E4%BB%AA%E5%8E%9A%E6%9C%AC%20%E6%88%91%E4%B8%8D%E5%B0%B1%E4%B8%8D%E6%98%AFNPC%23) `230.6K 🔥`
1. [雷军晒15年前小米手机发布会](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E6%99%9215%E5%B9%B4%E5%89%8D%E5%B0%8F%E7%B1%B3%E6%89%8B%E6%9C%BA%E5%8F%91%E5%B8%83%E4%BC%9A%23) `227.0K 🔥`
1. [曝谷爱凌LV三公子恋情 (Gu Ailing’s love affair with LV’s third son revealed)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%B0%B7%E7%88%B1%E5%87%8CLV%E4%B8%89%E5%85%AC%E5%AD%90%E6%81%8B%E6%83%85%23) `226.3K 🔥`
1. [赵丽颖短发黑裙拍立得 (Zhao Liying short hair black skirt Polaroid)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%9F%AD%E5%8F%91%E9%BB%91%E8%A3%99%E6%8B%8D%E7%AB%8B%E5%BE%97%23) `225.6K 🔥`
1. [女儿抑郁自杀母亲称8.8万彩礼太少](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E6%8A%91%E9%83%81%E8%87%AA%E6%9D%80%E6%AF%8D%E4%BA%B2%E7%A7%B08.8%E4%B8%87%E5%BD%A9%E7%A4%BC%E5%A4%AA%E5%B0%91%23) `220.8K 🔥`
1. [中国籍男子在靖国神社附近挥舞国旗](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%B1%8D%E7%94%B7%E5%AD%90%E5%9C%A8%E9%9D%96%E5%9B%BD%E7%A5%9E%E7%A4%BE%E9%99%84%E8%BF%91%E6%8C%A5%E8%88%9E%E5%9B%BD%E6%97%97%23) `219.2K 🔥`
1. [手机涨价何时是个头](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E6%B6%A8%E4%BB%B7%E4%BD%95%E6%97%B6%E6%98%AF%E4%B8%AA%E5%A4%B4%23) `219.1K 🔥`
1. [曾辉清唱后孙楠表情](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E6%B8%85%E5%94%B1%E5%90%8E%E5%AD%99%E6%A5%A0%E8%A1%A8%E6%83%85%23) `219.1K 🔥`
1. [事业编三甲医生没全额缴社保](https://s.weibo.com/weibo?q=%23%E4%BA%8B%E4%B8%9A%E7%BC%96%E4%B8%89%E7%94%B2%E5%8C%BB%E7%94%9F%E6%B2%A1%E5%85%A8%E9%A2%9D%E7%BC%B4%E7%A4%BE%E4%BF%9D%23) `205.3K 🔥`
1. [佟丽娅给小酒窝片酬](https://s.weibo.com/weibo?q=%23%E4%BD%9F%E4%B8%BD%E5%A8%85%E7%BB%99%E5%B0%8F%E9%85%92%E7%AA%9D%E7%89%87%E9%85%AC%23) `195.4K 🔥`
1. [小三胚胎案背后是财产争夺](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%B8%89%E8%83%9A%E8%83%8E%E6%A1%88%E8%83%8C%E5%90%8E%E6%98%AF%E8%B4%A2%E4%BA%A7%E4%BA%89%E5%A4%BA%23) `192.2K 🔥`
1. [你好星期六七夕全员错付](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%E4%B8%83%E5%A4%95%E5%85%A8%E5%91%98%E9%94%99%E4%BB%98%23) `174.7K 🔥`
1. [宝格丽酒店的正确退房仪式](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E6%A0%BC%E4%B8%BD%E9%85%92%E5%BA%97%E7%9A%84%E6%AD%A3%E7%A1%AE%E9%80%80%E6%88%BF%E4%BB%AA%E5%BC%8F%23) `164.6K 🔥`
1. [王祖贤说我们是用AI不是被AI用](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%A5%96%E8%B4%A4%E8%AF%B4%E6%88%91%E4%BB%AC%E6%98%AF%E7%94%A8AI%E4%B8%8D%E6%98%AF%E8%A2%ABAI%E7%94%A8%23) `118.5K 🔥`
1. [打赏要求陪睡男子为9家企业法人](https://s.weibo.com/weibo?q=%23%E6%89%93%E8%B5%8F%E8%A6%81%E6%B1%82%E9%99%AA%E7%9D%A1%E7%94%B7%E5%AD%90%E4%B8%BA9%E5%AE%B6%E4%BC%81%E4%B8%9A%E6%B3%95%E4%BA%BA%23) `470.5K 🔥` `-27%`
1. [胖东来将闭门店28个收银口排长龙 (Fat Dong Lai will close its stores and there will be long queues at 28 cashiers.)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E5%B0%86%E9%97%AD%E9%97%A8%E5%BA%9728%E4%B8%AA%E6%94%B6%E9%93%B6%E5%8F%A3%E6%8E%92%E9%95%BF%E9%BE%99%23) `293.9K 🔥` `-65%`
1. [王俊凯王源TOP张峻豪TF四代同时演出](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%8E%8B%E6%BA%90TOP%E5%BC%A0%E5%B3%BB%E8%B1%AATF%E5%9B%9B%E4%BB%A3%E5%90%8C%E6%97%B6%E6%BC%94%E5%87%BA%23) `231.6K 🔥` `-61%`
1. [突然发现世界真的会奖励善良的人 (Suddenly I discovered that the world really rewards kind people)](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E4%B8%96%E7%95%8C%E7%9C%9F%E7%9A%84%E4%BC%9A%E5%A5%96%E5%8A%B1%E5%96%84%E8%89%AF%E7%9A%84%E4%BA%BA%23) `231.2K 🔥` `-22%`
1. [恋爱AA制还有必要谈吗 (Is it still necessary to talk about the AA system of love?)](https://s.weibo.com/weibo?q=%23%E6%81%8B%E7%88%B1AA%E5%88%B6%E8%BF%98%E6%9C%89%E5%BF%85%E8%A6%81%E8%B0%88%E5%90%97%23) `227.3K 🔥` `-31%`
1. [王传君终于原谅爱情公寓了 (Wang Chuanjun finally forgives iPartment)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E7%BB%88%E4%BA%8E%E5%8E%9F%E8%B0%85%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E4%BA%86%23) `158.5K 🔥` `-26%`
1. [曾辉把炎亚纶炸出来了 (Zeng Hui blew up Yan Yalun)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E6%8A%8A%E7%82%8E%E4%BA%9A%E7%BA%B6%E7%82%B8%E5%87%BA%E6%9D%A5%E4%BA%86%23) `133.3K 🔥` `-23%`
1. [英伟达持仓股票曝光](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%8C%81%E4%BB%93%E8%82%A1%E7%A5%A8%E6%9B%9D%E5%85%89%23) `118.9K 🔥` `-45%`

Updated at 2026-08-16 15:40:17

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
