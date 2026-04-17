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

1. [霍尔木兹海峡开放 (Strait of Hormuz opens)](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E5%BC%80%E6%94%BE%23) `1.1M 🔥` `NEW`
1. [中国经济在风浪中稳住了发展底盘](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E5%9C%A8%E9%A3%8E%E6%B5%AA%E4%B8%AD%E7%A8%B3%E4%BD%8F%E4%BA%86%E5%8F%91%E5%B1%95%E5%BA%95%E7%9B%98%23) `1.1M 🔥` `NEW`
1. [雷军达成京沪高速只充一次电](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E8%BE%BE%E6%88%90%E4%BA%AC%E6%B2%AA%E9%AB%98%E9%80%9F%E5%8F%AA%E5%85%85%E4%B8%80%E6%AC%A1%E7%94%B5%23) `827.7K 🔥` `NEW`
1. [微博文化之夜全阵容](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E6%96%87%E5%8C%96%E4%B9%8B%E5%A4%9C%E5%85%A8%E9%98%B5%E5%AE%B9%23) `809.1K 🔥` `NEW`
1. [芭乐的籽居然可以一整块掰下来](https://s.weibo.com/weibo?q=%23%E8%8A%AD%E4%B9%90%E7%9A%84%E7%B1%BD%E5%B1%85%E7%84%B6%E5%8F%AF%E4%BB%A5%E4%B8%80%E6%95%B4%E5%9D%97%E6%8E%B0%E4%B8%8B%E6%9D%A5%23) `790.4K 🔥` `NEW`
1. [许昕真的回国家队了](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%98%95%E7%9C%9F%E7%9A%84%E5%9B%9E%E5%9B%BD%E5%AE%B6%E9%98%9F%E4%BA%86%23) `512.4K 🔥` `NEW`
1. [21世纪大君夫人](https://s.weibo.com/weibo?q=%2321%E4%B8%96%E7%BA%AA%E5%A4%A7%E5%90%9B%E5%A4%AB%E4%BA%BA%23) `505.5K 🔥` `NEW`
1. [孙怡回应和阚清子关系](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E5%9B%9E%E5%BA%94%E5%92%8C%E9%98%9A%E6%B8%85%E5%AD%90%E5%85%B3%E7%B3%BB%23) `498.4K 🔥` `NEW`
1. [舒淇说我卸了妆还挺像50岁的](https://s.weibo.com/weibo?q=%23%E8%88%92%E6%B7%87%E8%AF%B4%E6%88%91%E5%8D%B8%E4%BA%86%E5%A6%86%E8%BF%98%E6%8C%BA%E5%83%8F50%E5%B2%81%E7%9A%84%23) `330.3K 🔥` `NEW`
1. [单依纯若捆绑王菲宣传涉嫌违法](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E8%8B%A5%E6%8D%86%E7%BB%91%E7%8E%8B%E8%8F%B2%E5%AE%A3%E4%BC%A0%E6%B6%89%E5%AB%8C%E8%BF%9D%E6%B3%95%23) `313.8K 🔥` `NEW`
1. [夫胜宽女装 (Hushengkuan women's clothing)](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E8%83%9C%E5%AE%BD%E5%A5%B3%E8%A3%85%23) `309.9K 🔥` `NEW`
1. [刘耀文capper微博互关](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87capper%E5%BE%AE%E5%8D%9A%E4%BA%92%E5%85%B3%23) `291.0K 🔥` `NEW`
1. [百万级AI汽车平台归元S面世](https://s.weibo.com/weibo?q=%23%E7%99%BE%E4%B8%87%E7%BA%A7AI%E6%B1%BD%E8%BD%A6%E5%B9%B3%E5%8F%B0%E5%BD%92%E5%85%83S%E9%9D%A2%E4%B8%96%23) `266.1K 🔥` `NEW`
1. [解放军护卫舰与外舰缠斗20小时](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E6%8A%A4%E5%8D%AB%E8%88%B0%E4%B8%8E%E5%A4%96%E8%88%B0%E7%BC%A0%E6%96%9720%E5%B0%8F%E6%97%B6%23) `260.7K 🔥` `NEW`
1. [DK暴打T1](https://s.weibo.com/weibo?q=%23DK%E6%9A%B4%E6%89%93T1%23) `238.9K 🔥` `NEW`
1. [特朗普称对伊海上封锁继续有效](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E5%AF%B9%E4%BC%8A%E6%B5%B7%E4%B8%8A%E5%B0%81%E9%94%81%E7%BB%A7%E7%BB%AD%E6%9C%89%E6%95%88%23) `227.6K 🔥` `NEW`
1. [人生是场巨大的事与愿违](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%94%9F%E6%98%AF%E5%9C%BA%E5%B7%A8%E5%A4%A7%E7%9A%84%E4%BA%8B%E4%B8%8E%E6%84%BF%E8%BF%9D%23) `226.9K 🔥` `NEW`
1. [女儿摆酒庆祝爸妈离婚](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E6%91%86%E9%85%92%E5%BA%86%E7%A5%9D%E7%88%B8%E5%A6%88%E7%A6%BB%E5%A9%9A%23) `224.5K 🔥` `NEW`
1. [孙颖莎巨型卡通装饰](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%B7%A8%E5%9E%8B%E5%8D%A1%E9%80%9A%E8%A3%85%E9%A5%B0%23) `224.3K 🔥` `NEW`
1. [张极又去看张杰演唱会了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9E%81%E5%8F%88%E5%8E%BB%E7%9C%8B%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BA%86%23) `224.3K 🔥` `NEW`
1. [医院回应女子同房后失血性休克 (The hospital responded that the woman suffered from hemorrhagic shock after having sex)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%90%E5%90%8C%E6%88%BF%E5%90%8E%E5%A4%B1%E8%A1%80%E6%80%A7%E4%BC%91%E5%85%8B%23) `215.6K 🔥` `NEW`
1. [谢娜回应网友问抚养权判给谁了](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%9B%9E%E5%BA%94%E7%BD%91%E5%8F%8B%E9%97%AE%E6%8A%9A%E5%85%BB%E6%9D%83%E5%88%A4%E7%BB%99%E8%B0%81%E4%BA%86%23) `209.0K 🔥` `NEW`
1. [麦当劳肯德基 宿敌cp](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E5%BD%93%E5%8A%B3%E8%82%AF%E5%BE%B7%E5%9F%BA%20%E5%AE%BF%E6%95%8Ccp%23) `176.3K 🔥` `NEW`
1. [郑号锡外婆去世](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%8F%B7%E9%94%A1%E5%A4%96%E5%A9%86%E5%8E%BB%E4%B8%96%23) `171.4K 🔥` `NEW`
1. [儿子晒96岁父亲的三无精致生活](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E6%99%9296%E5%B2%81%E7%88%B6%E4%BA%B2%E7%9A%84%E4%B8%89%E6%97%A0%E7%B2%BE%E8%87%B4%E7%94%9F%E6%B4%BB%23) `167.4K 🔥` `NEW`
1. [年轻人的智能好车埃安N60预售11.58万起 (Aian N60, a good smart car for young people, pre-sale starts at 115,800)](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%9A%84%E6%99%BA%E8%83%BD%E5%A5%BD%E8%BD%A6%E5%9F%83%E5%AE%89N60%E9%A2%84%E5%94%AE11.58%E4%B8%87%E8%B5%B7%23) `1.0M 🔥` `+79%`
1. [刘浩存 没有给代拍好脸色的义务](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%20%E6%B2%A1%E6%9C%89%E7%BB%99%E4%BB%A3%E6%8B%8D%E5%A5%BD%E8%84%B8%E8%89%B2%E7%9A%84%E4%B9%89%E5%8A%A1%23) `601.2K 🔥` `+65%`
1. [月鳞绮纪四位主演出镜时长 (The screen time of the four main actors of Moon Scale Qiji)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E5%9B%9B%E4%BD%8D%E4%B8%BB%E6%BC%94%E5%87%BA%E9%95%9C%E6%97%B6%E9%95%BF%23) `502.4K 🔥` `+51%`
1. [林肯号航母提供的餐食情况](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%82%AF%E5%8F%B7%E8%88%AA%E6%AF%8D%E6%8F%90%E4%BE%9B%E7%9A%84%E9%A4%90%E9%A3%9F%E6%83%85%E5%86%B5%23) `501.8K 🔥` `+52%`
1. [朱迅已抗癌20年](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E8%BF%85%E5%B7%B2%E6%8A%97%E7%99%8C20%E5%B9%B4%23) `497.8K 🔥` `+50%`
1. [20岁孙女偷偷结婚7旬爷爷落泪](https://s.weibo.com/weibo?q=%2320%E5%B2%81%E5%AD%99%E5%A5%B3%E5%81%B7%E5%81%B7%E7%BB%93%E5%A9%9A7%E6%97%AC%E7%88%B7%E7%88%B7%E8%90%BD%E6%B3%AA%23) `492.0K 🔥` `+84%`
1. [都美竹被强执](https://s.weibo.com/weibo?q=%23%E9%83%BD%E7%BE%8E%E7%AB%B9%E8%A2%AB%E5%BC%BA%E6%89%A7%23) `431.7K 🔥` `+30%`
1. [李小冉一公第一名 (Li Xiaoran first place)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E4%B8%80%E5%85%AC%E7%AC%AC%E4%B8%80%E5%90%8D%23) `394.9K 🔥` `+21%`
1. [白发或是身体的抗癌警报](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%8F%91%E6%88%96%E6%98%AF%E8%BA%AB%E4%BD%93%E7%9A%84%E6%8A%97%E7%99%8C%E8%AD%A6%E6%8A%A5%23) `229.7K 🔥` `+41%`
1. [氧化菊 泼水节](https://s.weibo.com/weibo?q=%23%E6%B0%A7%E5%8C%96%E8%8F%8A%20%E6%B3%BC%E6%B0%B4%E8%8A%82%23) `1.5M 🔥`
1. [Gucci不能再把中国市场当垃圾桶 (Gucci can no longer treat the Chinese market as a trash can)](https://s.weibo.com/weibo?q=%23Gucci%E4%B8%8D%E8%83%BD%E5%86%8D%E6%8A%8A%E4%B8%AD%E5%9B%BD%E5%B8%82%E5%9C%BA%E5%BD%93%E5%9E%83%E5%9C%BE%E6%A1%B6%23) `1.0M 🔥`
1. [一日本自卫队舰艇进入台湾海峡](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%97%A5%E6%9C%AC%E8%87%AA%E5%8D%AB%E9%98%9F%E8%88%B0%E8%89%87%E8%BF%9B%E5%85%A5%E5%8F%B0%E6%B9%BE%E6%B5%B7%E5%B3%A1%23) `334.3K 🔥`
1. [虞书欣丸子头](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%B8%B8%E5%AD%90%E5%A4%B4%23) `326.9K 🔥`
1. [摊主因借给学生手机被家长逼到下跪](https://s.weibo.com/weibo?q=%23%E6%91%8A%E4%B8%BB%E5%9B%A0%E5%80%9F%E7%BB%99%E5%AD%A6%E7%94%9F%E6%89%8B%E6%9C%BA%E8%A2%AB%E5%AE%B6%E9%95%BF%E9%80%BC%E5%88%B0%E4%B8%8B%E8%B7%AA%23) `314.7K 🔥`
1. [陈奕恒回应私联争议](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E5%9B%9E%E5%BA%94%E7%A7%81%E8%81%94%E4%BA%89%E8%AE%AE%23) `313.7K 🔥`
1. [雷军问直播放歌有没有版权问题](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E9%97%AE%E7%9B%B4%E6%92%AD%E6%94%BE%E6%AD%8C%E6%9C%89%E6%B2%A1%E6%9C%89%E7%89%88%E6%9D%83%E9%97%AE%E9%A2%98%23) `312.8K 🔥`
1. [穆祉丞二维码](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E4%BA%8C%E7%BB%B4%E7%A0%81%23) `312.8K 🔥`
1. [钟丽缇女儿Jaden回应不是混血 (Christy Chung’s daughter Jaden responded that she is not mixed race)](https://s.weibo.com/weibo?q=%23%E9%92%9F%E4%B8%BD%E7%BC%87%E5%A5%B3%E5%84%BFJaden%E5%9B%9E%E5%BA%94%E4%B8%8D%E6%98%AF%E6%B7%B7%E8%A1%80%23) `257.9K 🔥`
1. [拼多多美团京东淘天抖音被罚35亿 (Pinduoduo, Meituan, JD.com, Taotian and Douyin were fined 3.5 billion)](https://s.weibo.com/weibo?q=%23%E6%8B%BC%E5%A4%9A%E5%A4%9A%E7%BE%8E%E5%9B%A2%E4%BA%AC%E4%B8%9C%E6%B7%98%E5%A4%A9%E6%8A%96%E9%9F%B3%E8%A2%AB%E7%BD%9A35%E4%BA%BF%23) `885.3K 🔥` `-24%`
1. [工作为什么默认能用我的手机 (Why can I use my mobile phone by default at work?)](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E4%B8%BA%E4%BB%80%E4%B9%88%E9%BB%98%E8%AE%A4%E8%83%BD%E7%94%A8%E6%88%91%E7%9A%84%E6%89%8B%E6%9C%BA%23) `304.9K 🔥` `-42%`
1. [28岁孕妇突发胸闷气促查出肺癌](https://s.weibo.com/weibo?q=%2328%E5%B2%81%E5%AD%95%E5%A6%87%E7%AA%81%E5%8F%91%E8%83%B8%E9%97%B7%E6%B0%94%E4%BF%83%E6%9F%A5%E5%87%BA%E8%82%BA%E7%99%8C%23) `253.5K 🔥` `-22%`
1. [多平台公然传播被禁多年的暗黑动漫 (Dark anime that has been banned for many years is openly disseminated on multiple platforms)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%B9%B3%E5%8F%B0%E5%85%AC%E7%84%B6%E4%BC%A0%E6%92%AD%E8%A2%AB%E7%A6%81%E5%A4%9A%E5%B9%B4%E7%9A%84%E6%9A%97%E9%BB%91%E5%8A%A8%E6%BC%AB%23) `224.4K 🔥` `-21%`
1. [对余某罚没10亿余元 (Yu Mou was fined and confiscated more than 1 billion yuan)](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E4%BD%99%E6%9F%90%E7%BD%9A%E6%B2%A110%E4%BA%BF%E4%BD%99%E5%85%83%23) `219.8K 🔥` `-48%`
1. [鹿晗小七预售](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%B0%8F%E4%B8%83%E9%A2%84%E5%94%AE%23) `195.5K 🔥` `-28%`
1. [责令7平台暂停新增蛋糕店铺](https://s.weibo.com/weibo?q=%23%E8%B4%A3%E4%BB%A47%E5%B9%B3%E5%8F%B0%E6%9A%82%E5%81%9C%E6%96%B0%E5%A2%9E%E8%9B%8B%E7%B3%95%E5%BA%97%E9%93%BA%23) `192.5K 🔥` `-36%`
1. [阚清子发浪姐大合照](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%8F%91%E6%B5%AA%E5%A7%90%E5%A4%A7%E5%90%88%E7%85%A7%23) `188.8K 🔥` `-26%`
1. [温峥嵘二公选人被拒绝五次 (Wen Zhengrong was rejected five times as candidate for the second election)](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B3%A5%E5%B5%98%E4%BA%8C%E5%85%AC%E9%80%89%E4%BA%BA%E8%A2%AB%E6%8B%92%E7%BB%9D%E4%BA%94%E6%AC%A1%23) `174.0K 🔥` `-42%`

Updated at 2026-04-17 22:09:45

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
