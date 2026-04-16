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

1. [沃尔沃XC70感恩版上市24.99万起 (Volvo XC70 Thanksgiving Edition launched starting at 249,900)](https://s.weibo.com/weibo?q=%23%E6%B2%83%E5%B0%94%E6%B2%83XC70%E6%84%9F%E6%81%A9%E7%89%88%E4%B8%8A%E5%B8%8224.99%E4%B8%87%E8%B5%B7%23) `594.9K 🔥` `NEW`
1. [为什么百万家庭都选原研莫匹罗星](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%99%BE%E4%B8%87%E5%AE%B6%E5%BA%AD%E9%83%BD%E9%80%89%E5%8E%9F%E7%A0%94%E8%8E%AB%E5%8C%B9%E7%BD%97%E6%98%9F%23) `197.7K 🔥` `NEW`
1. [日本超市大抢购](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%B6%85%E5%B8%82%E5%A4%A7%E6%8A%A2%E8%B4%AD%23) `133.3K 🔥` `NEW`
1. [陈泽 一万杯奶茶](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B3%BD%20%E4%B8%80%E4%B8%87%E6%9D%AF%E5%A5%B6%E8%8C%B6%23) `118.8K 🔥` `NEW`
1. [丝芭旗下艺人感谢王子杰栽培](https://s.weibo.com/weibo?q=%23%E4%B8%9D%E8%8A%AD%E6%97%97%E4%B8%8B%E8%89%BA%E4%BA%BA%E6%84%9F%E8%B0%A2%E7%8E%8B%E5%AD%90%E6%9D%B0%E6%A0%BD%E5%9F%B9%23) `112.3K 🔥` `NEW`
1. [Papi妈妈25万精神赔偿再被驳回](https://s.weibo.com/weibo?q=%23Papi%E5%A6%88%E5%A6%8825%E4%B8%87%E7%B2%BE%E7%A5%9E%E8%B5%94%E5%81%BF%E5%86%8D%E8%A2%AB%E9%A9%B3%E5%9B%9E%23) `107.8K 🔥` `NEW`
1. [千亿存储芯片一哥套现28亿](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%BA%BF%E5%AD%98%E5%82%A8%E8%8A%AF%E7%89%87%E4%B8%80%E5%93%A5%E5%A5%97%E7%8E%B028%E4%BA%BF%23) `107.1K 🔥` `NEW`
1. [陪91岁大爷玩手机月入5000](https://s.weibo.com/weibo?q=%23%E9%99%AA91%E5%B2%81%E5%A4%A7%E7%88%B7%E7%8E%A9%E6%89%8B%E6%9C%BA%E6%9C%88%E5%85%A55000%23) `102.4K 🔥` `NEW`
1. [法院称papi妈妈抑郁症与案件无关](https://s.weibo.com/weibo?q=%23%E6%B3%95%E9%99%A2%E7%A7%B0papi%E5%A6%88%E5%A6%88%E6%8A%91%E9%83%81%E7%97%87%E4%B8%8E%E6%A1%88%E4%BB%B6%E6%97%A0%E5%85%B3%23) `100.4K 🔥` `NEW`
1. [檀健次拿着小风车被摸了一把又一把](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E6%8B%BF%E7%9D%80%E5%B0%8F%E9%A3%8E%E8%BD%A6%E8%A2%AB%E6%91%B8%E4%BA%86%E4%B8%80%E6%8A%8A%E5%8F%88%E4%B8%80%E6%8A%8A%23) `87.5K 🔥` `NEW`
1. [孙杨张豆豆在大巴车上吵起来了 (Sun Yang and Zhang Doudou had a fight on the bus)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%BC%A0%E8%B1%86%E8%B1%86%E5%9C%A8%E5%A4%A7%E5%B7%B4%E8%BD%A6%E4%B8%8A%E5%90%B5%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `79.6K 🔥` `NEW`
1. [贺峻霖谁家贵公子](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E8%B0%81%E5%AE%B6%E8%B4%B5%E5%85%AC%E5%AD%90%23) `79.5K 🔥` `NEW`
1. [西班牙等来中企投资后感谢特朗普助攻](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E7%AD%89%E6%9D%A5%E4%B8%AD%E4%BC%81%E6%8A%95%E8%B5%84%E5%90%8E%E6%84%9F%E8%B0%A2%E7%89%B9%E6%9C%97%E6%99%AE%E5%8A%A9%E6%94%BB%23) `78.3K 🔥` `NEW`
1. [为什么意大利面要煮这么久](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%84%8F%E5%A4%A7%E5%88%A9%E9%9D%A2%E8%A6%81%E7%85%AE%E8%BF%99%E4%B9%88%E4%B9%85%23) `63.2K 🔥` `NEW`
1. [李乃文离了五哈外面雨更大](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B9%83%E6%96%87%E7%A6%BB%E4%BA%86%E4%BA%94%E5%93%88%E5%A4%96%E9%9D%A2%E9%9B%A8%E6%9B%B4%E5%A4%A7%23) `62.2K 🔥` `NEW`
1. [深圳一男子确诊罕见传染病](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E4%B8%80%E7%94%B7%E5%AD%90%E7%A1%AE%E8%AF%8A%E7%BD%95%E8%A7%81%E4%BC%A0%E6%9F%93%E7%97%85%23) `62.1K 🔥` `NEW`
1. [腾哥丽姐呢 在呢在呢](https://s.weibo.com/weibo?q=%23%E8%85%BE%E5%93%A5%E4%B8%BD%E5%A7%90%E5%91%A2%20%E5%9C%A8%E5%91%A2%E5%9C%A8%E5%91%A2%23) `61.9K 🔥` `NEW`
1. [树农手里500买走的树十几万卖别墅区](https://s.weibo.com/weibo?q=%23%E6%A0%91%E5%86%9C%E6%89%8B%E9%87%8C500%E4%B9%B0%E8%B5%B0%E7%9A%84%E6%A0%91%E5%8D%81%E5%87%A0%E4%B8%87%E5%8D%96%E5%88%AB%E5%A2%85%E5%8C%BA%23) `61.8K 🔥` `NEW`
1. [国粤无双拟邀阵容](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E7%B2%A4%E6%97%A0%E5%8F%8C%E6%8B%9F%E9%82%80%E9%98%B5%E5%AE%B9%23) `61.7K 🔥` `NEW`
1. [张豆豆说孙杨曾被好几个朋友重创过](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%B1%86%E8%B1%86%E8%AF%B4%E5%AD%99%E6%9D%A8%E6%9B%BE%E8%A2%AB%E5%A5%BD%E5%87%A0%E4%B8%AA%E6%9C%8B%E5%8F%8B%E9%87%8D%E5%88%9B%E8%BF%87%23) `61.7K 🔥` `NEW`
1. [终于知道怎么挂娃娃不翻面了 (I finally know how to hang a doll without turning it over.)](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E6%80%8E%E4%B9%88%E6%8C%82%E5%A8%83%E5%A8%83%E4%B8%8D%E7%BF%BB%E9%9D%A2%E4%BA%86%23) `57.6K 🔥` `NEW`
1. [你的cp还在避嫌我的cp又在一起了](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84cp%E8%BF%98%E5%9C%A8%E9%81%BF%E5%AB%8C%E6%88%91%E7%9A%84cp%E5%8F%88%E5%9C%A8%E4%B8%80%E8%B5%B7%E4%BA%86%23) `55.8K 🔥` `NEW`
1. [Gemini Mac](https://s.weibo.com/weibo?q=%23Gemini%20Mac%23) `55.5K 🔥` `NEW`
1. [雷军再次回应中间只充一次电言论](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%86%8D%E6%AC%A1%E5%9B%9E%E5%BA%94%E4%B8%AD%E9%97%B4%E5%8F%AA%E5%85%85%E4%B8%80%E6%AC%A1%E7%94%B5%E8%A8%80%E8%AE%BA%23) `726.1K 🔥` `+1035%`
1. [莫氏鸡煲老板回应商家排队送产品 (The owner of Mo’s Chicken Pot responds to merchants queuing up to deliver products)](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E5%9B%9E%E5%BA%94%E5%95%86%E5%AE%B6%E6%8E%92%E9%98%9F%E9%80%81%E4%BA%A7%E5%93%81%23) `181.4K 🔥` `+100%`
1. [商家笑了半个月才舍得发货 (The merchant laughed for half a month before he was willing to deliver the goods)](https://s.weibo.com/weibo?q=%23%E5%95%86%E5%AE%B6%E7%AC%91%E4%BA%86%E5%8D%8A%E4%B8%AA%E6%9C%88%E6%89%8D%E8%88%8D%E5%BE%97%E5%8F%91%E8%B4%A7%23) `144.8K 🔥` `+124%`
1. [向涵之 你替我拍戏](https://s.weibo.com/weibo?q=%23%E5%90%91%E6%B6%B5%E4%B9%8B%20%E4%BD%A0%E6%9B%BF%E6%88%91%E6%8B%8D%E6%88%8F%23) `129.7K 🔥` `+44%`
1. [戚薇梦回夏友善](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%87%E6%A2%A6%E5%9B%9E%E5%A4%8F%E5%8F%8B%E5%96%84%23) `96.9K 🔥` `+21%`
1. [中国驻日大使馆接连遭到恐怖威胁](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%A9%BB%E6%97%A5%E5%A4%A7%E4%BD%BF%E9%A6%86%E6%8E%A5%E8%BF%9E%E9%81%AD%E5%88%B0%E6%81%90%E6%80%96%E5%A8%81%E8%83%81%23) `1.0M 🔥`
1. [2026年一季度GDP同比增长5.0%](https://s.weibo.com/weibo?q=%232026%E5%B9%B4%E4%B8%80%E5%AD%A3%E5%BA%A6GDP%E5%90%8C%E6%AF%94%E5%A2%9E%E9%95%BF5.0%25%23) `619.6K 🔥`
1. [人一退休面相都跟着变舒展了](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E9%80%80%E4%BC%91%E9%9D%A2%E7%9B%B8%E9%83%BD%E8%B7%9F%E7%9D%80%E5%8F%98%E8%88%92%E5%B1%95%E4%BA%86%23) `210.0K 🔥`
1. [宋亚轩回归音综](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%9B%9E%E5%BD%92%E9%9F%B3%E7%BB%BC%23) `202.8K 🔥`
1. [小米食堂3天卖2000多只冰淇淋 (Xiaomi Canteen sells more than 2,000 ice creams in 3 days)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E9%A3%9F%E5%A0%823%E5%A4%A9%E5%8D%962000%E5%A4%9A%E5%8F%AA%E5%86%B0%E6%B7%87%E6%B7%8B%23) `102.1K 🔥`
1. [16岁小伙确诊肺癌](https://s.weibo.com/weibo?q=%2316%E5%B2%81%E5%B0%8F%E4%BC%99%E7%A1%AE%E8%AF%8A%E8%82%BA%E7%99%8C%23) `79.6K 🔥`
1. [伊朗最高领袖威胁击沉美方舰艇](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E5%A8%81%E8%83%81%E5%87%BB%E6%B2%89%E7%BE%8E%E6%96%B9%E8%88%B0%E8%89%87%23) `79.4K 🔥`
1. [女子领证21天后输液昏迷丈夫发声](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%A2%86%E8%AF%8121%E5%A4%A9%E5%90%8E%E8%BE%93%E6%B6%B2%E6%98%8F%E8%BF%B7%E4%B8%88%E5%A4%AB%E5%8F%91%E5%A3%B0%23) `61.8K 🔥`
1. [警察带台湾同胞走中国公民专用通道](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E5%AF%9F%E5%B8%A6%E5%8F%B0%E6%B9%BE%E5%90%8C%E8%83%9E%E8%B5%B0%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E4%B8%93%E7%94%A8%E9%80%9A%E9%81%93%23) `61.4K 🔥`
1. [奔跑吧首播嘉宾是时代少年团](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E9%A6%96%E6%92%AD%E5%98%89%E5%AE%BE%E6%98%AF%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%23) `60.6K 🔥`
1. [谁来救救孙丞潇](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%9D%A5%E6%95%91%E6%95%91%E5%AD%99%E4%B8%9E%E6%BD%87%23) `562.1K 🔥` `-23%`
1. [豆包帮挑的西瓜](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%B8%AE%E6%8C%91%E7%9A%84%E8%A5%BF%E7%93%9C%23) `177.9K 🔥` `-61%`
1. [黄瓜泡面](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%93%9C%E6%B3%A1%E9%9D%A2%23) `143.8K 🔥` `-54%`
1. [男孩割喉涉事老人老伴因打击再住院](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E5%89%B2%E5%96%89%E6%B6%89%E4%BA%8B%E8%80%81%E4%BA%BA%E8%80%81%E4%BC%B4%E5%9B%A0%E6%89%93%E5%87%BB%E5%86%8D%E4%BD%8F%E9%99%A2%23) `137.7K 🔥` `-81%`
1. [邓超在儿子的颜值里起破坏作用 (Deng Chao played a damaging role in his son's appearance)](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E5%9C%A8%E5%84%BF%E5%AD%90%E7%9A%84%E9%A2%9C%E5%80%BC%E9%87%8C%E8%B5%B7%E7%A0%B4%E5%9D%8F%E4%BD%9C%E7%94%A8%23) `126.3K 🔥` `-59%`
1. [刘浩存好美](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E5%A5%BD%E7%BE%8E%23) `113.4K 🔥` `-65%`
1. [酒店订单备注玩梗被指侵犯隐私](https://s.weibo.com/weibo?q=%23%E9%85%92%E5%BA%97%E8%AE%A2%E5%8D%95%E5%A4%87%E6%B3%A8%E7%8E%A9%E6%A2%97%E8%A2%AB%E6%8C%87%E4%BE%B5%E7%8A%AF%E9%9A%90%E7%A7%81%23) `108.2K 🔥` `-85%`
1. [Uzi说这个月就先不直播了](https://s.weibo.com/weibo?q=%23Uzi%E8%AF%B4%E8%BF%99%E4%B8%AA%E6%9C%88%E5%B0%B1%E5%85%88%E4%B8%8D%E7%9B%B4%E6%92%AD%E4%BA%86%23) `107.9K 🔥` `-65%`
1. [曝包洁仪凄惨身世是假的](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8C%85%E6%B4%81%E4%BB%AA%E5%87%84%E6%83%A8%E8%BA%AB%E4%B8%96%E6%98%AF%E5%81%87%E7%9A%84%23) `107.6K 🔥` `-40%`
1. [孙怡cos黎璃](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1cos%E9%BB%8E%E7%92%83%23) `107.2K 🔥` `-46%`
1. [跑男](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%23) `103.0K 🔥` `-67%`
1. [迪丽热巴表演打奶嗝](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%A1%A8%E6%BC%94%E6%89%93%E5%A5%B6%E5%97%9D%23) `65.3K 🔥` `-40%`
1. [北影节红毯](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%BD%B1%E8%8A%82%E7%BA%A2%E6%AF%AF%23) `61.4K 🔥` `-28%`
1. [小杨生煎回应包子皮放在抹布上 (Xiao Yang Shengjian responded by putting the bun skin on a rag)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%9D%A8%E7%94%9F%E7%85%8E%E5%9B%9E%E5%BA%94%E5%8C%85%E5%AD%90%E7%9A%AE%E6%94%BE%E5%9C%A8%E6%8A%B9%E5%B8%83%E4%B8%8A%23) `55.8K 🔥` `-53%`

Updated at 2026-04-16 18:51:52

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
