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

1. [女主播隐瞒已婚诱导粉丝打赏2500万 (Female anchor concealed her marriage and induced fans to reward her with 25 million yuan)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E4%B8%BB%E6%92%AD%E9%9A%90%E7%9E%92%E5%B7%B2%E5%A9%9A%E8%AF%B1%E5%AF%BC%E7%B2%89%E4%B8%9D%E6%89%93%E8%B5%8F2500%E4%B8%87%23) `608.2K 🔥` `NEW`
1. [克莱将加盟热火](https://s.weibo.com/weibo?q=%23%E5%85%8B%E8%8E%B1%E5%B0%86%E5%8A%A0%E7%9B%9F%E7%83%AD%E7%81%AB%23) `279.7K 🔥` `NEW`
1. [网友质疑韦东奕为何编写小学教辅](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E8%B4%A8%E7%96%91%E9%9F%A6%E4%B8%9C%E5%A5%95%E4%B8%BA%E4%BD%95%E7%BC%96%E5%86%99%E5%B0%8F%E5%AD%A6%E6%95%99%E8%BE%85%23) `207.9K 🔥` `NEW`
1. [涿州非法代孕事件6人被抓](https://s.weibo.com/weibo?q=%23%E6%B6%BF%E5%B7%9E%E9%9D%9E%E6%B3%95%E4%BB%A3%E5%AD%95%E4%BA%8B%E4%BB%B66%E4%BA%BA%E8%A2%AB%E6%8A%93%23) `207.6K 🔥` `NEW`
1. [女星穿香奈儿无底鞋脚掌变黑](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%98%9F%E7%A9%BF%E9%A6%99%E5%A5%88%E5%84%BF%E6%97%A0%E5%BA%95%E9%9E%8B%E8%84%9A%E6%8E%8C%E5%8F%98%E9%BB%91%23) `204.2K 🔥` `NEW`
1. [曾辉回复艾热](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E5%9B%9E%E5%A4%8D%E8%89%BE%E7%83%AD%23) `202.6K 🔥` `NEW`
1. [这7种异常和缺维生素B有关](https://s.weibo.com/weibo?q=%23%E8%BF%997%E7%A7%8D%E5%BC%82%E5%B8%B8%E5%92%8C%E7%BC%BA%E7%BB%B4%E7%94%9F%E7%B4%A0B%E6%9C%89%E5%85%B3%23) `198.7K 🔥` `NEW`
1. [无法对小时候的杯子祛魅](https://s.weibo.com/weibo?q=%23%E6%97%A0%E6%B3%95%E5%AF%B9%E5%B0%8F%E6%97%B6%E5%80%99%E7%9A%84%E6%9D%AF%E5%AD%90%E7%A5%9B%E9%AD%85%23) `193.8K 🔥` `NEW`
1. [YSL香港活动 驱逐消费者](https://s.weibo.com/weibo?q=%23YSL%E9%A6%99%E6%B8%AF%E6%B4%BB%E5%8A%A8%20%E9%A9%B1%E9%80%90%E6%B6%88%E8%B4%B9%E8%80%85%23) `182.8K 🔥` `NEW`
1. [C罗新赛季首秀即破门](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%96%B0%E8%B5%9B%E5%AD%A3%E9%A6%96%E7%A7%80%E5%8D%B3%E7%A0%B4%E9%97%A8%23) `155.5K 🔥` `NEW`
1. [大妈骑车戴三级头震惊辅警 (The aunt wearing a three-level headgear while riding a bicycle shocked the auxiliary police)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%A6%88%E9%AA%91%E8%BD%A6%E6%88%B4%E4%B8%89%E7%BA%A7%E5%A4%B4%E9%9C%87%E6%83%8A%E8%BE%85%E8%AD%A6%23) `147.3K 🔥` `NEW`
1. [时代峰峻否认流浪狗被卖](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%90%A6%E8%AE%A4%E6%B5%81%E6%B5%AA%E7%8B%97%E8%A2%AB%E5%8D%96%23) `146.7K 🔥` `NEW`
1. [曼城更衣室内讧画面曝光](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E5%9F%8E%E6%9B%B4%E8%A1%A3%E5%AE%A4%E5%86%85%E8%AE%A7%E7%94%BB%E9%9D%A2%E6%9B%9D%E5%85%89%23) `117.6K 🔥` `NEW`
1. [94岁老战士穿外骨骼感觉年轻了](https://s.weibo.com/weibo?q=%2394%E5%B2%81%E8%80%81%E6%88%98%E5%A3%AB%E7%A9%BF%E5%A4%96%E9%AA%A8%E9%AA%BC%E6%84%9F%E8%A7%89%E5%B9%B4%E8%BD%BB%E4%BA%86%23) `115.6K 🔥` `NEW`
1. [宇树科技回撤近40%](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E5%9B%9E%E6%92%A4%E8%BF%9140%25%23) `110.7K 🔥` `NEW`
1. [V中文版金九三封面](https://s.weibo.com/weibo?q=%23V%E4%B8%AD%E6%96%87%E7%89%88%E9%87%91%E4%B9%9D%E4%B8%89%E5%B0%81%E9%9D%A2%23) `100.6K 🔥` `NEW`
1. [德罗赞加盟掘金](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E7%BD%97%E8%B5%9E%E5%8A%A0%E7%9B%9F%E6%8E%98%E9%87%91%23) `98.2K 🔥` `NEW`
1. [阿根廷足协回应FIFA处罚](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%B6%B3%E5%8D%8F%E5%9B%9E%E5%BA%94FIFA%E5%A4%84%E7%BD%9A%23) `97.2K 🔥` `NEW`
1. [阿森纳3比0考文垂](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A3%AE%E7%BA%B33%E6%AF%940%E8%80%83%E6%96%87%E5%9E%82%23) `90.7K 🔥` `NEW`
1. [花开锦绣25集夯爆了](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A325%E9%9B%86%E5%A4%AF%E7%88%86%E4%BA%86%23) `86.3K 🔥` `NEW`
1. [外国网友怀疑中国农村是AI (Foreign netizens suspect that China’s rural areas are caused by AI)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E7%BD%91%E5%8F%8B%E6%80%80%E7%96%91%E4%B8%AD%E5%9B%BD%E5%86%9C%E6%9D%91%E6%98%AFAI%23) `1.2M 🔥` `+42%`
1. [捷途旅行者7双车开启小订 (Jietu Traveler 7 pairs of cars open for small bookings)](https://s.weibo.com/weibo?q=%23%E6%8D%B7%E9%80%94%E6%97%85%E8%A1%8C%E8%80%857%E5%8F%8C%E8%BD%A6%E5%BC%80%E5%90%AF%E5%B0%8F%E8%AE%A2%23) `633.8K 🔥` `+87%`
1. [罗永浩公关复盘西贝事件始末 (Luo Yonghao's public relations review the Xibei incident)](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E5%85%AC%E5%85%B3%E5%A4%8D%E7%9B%98%E8%A5%BF%E8%B4%9D%E4%BA%8B%E4%BB%B6%E5%A7%8B%E6%9C%AB%23) `488.8K 🔥` `+465%`
1. [鸭货为何不好卖了 (Why are duck products so hard to sell?)](https://s.weibo.com/weibo?q=%23%E9%B8%AD%E8%B4%A7%E4%B8%BA%E4%BD%95%E4%B8%8D%E5%A5%BD%E5%8D%96%E4%BA%86%23) `344.2K 🔥` `+304%`
1. [丈夫拍妻子出轨却因妨害隐私获刑](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E6%8B%8D%E5%A6%BB%E5%AD%90%E5%87%BA%E8%BD%A8%E5%8D%B4%E5%9B%A0%E5%A6%A8%E5%AE%B3%E9%9A%90%E7%A7%81%E8%8E%B7%E5%88%91%23) `290.3K 🔥` `+22%`
1. [张雅琪路人缘 (Popularity of Zhang Yaqi)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E8%B7%AF%E4%BA%BA%E7%BC%98%23) `209.6K 🔥` `+90%`
1. [陈柏霖当庭认罪](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%9F%8F%E9%9C%96%E5%BD%93%E5%BA%AD%E8%AE%A4%E7%BD%AA%23) `206.0K 🔥` `+57%`
1. [李现下意识伸手扶张婧仪 (Li Xian subconsciously reached out to help Zhang Jingyi)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E4%B8%8B%E6%84%8F%E8%AF%86%E4%BC%B8%E6%89%8B%E6%89%B6%E5%BC%A0%E5%A9%A7%E4%BB%AA%23) `205.6K 🔥` `+96%`
1. [开台灯遭邻居投诉影响孩子学习 (Neighbors complained that turning on a desk lamp affected children's learning)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%8F%B0%E7%81%AF%E9%81%AD%E9%82%BB%E5%B1%85%E6%8A%95%E8%AF%89%E5%BD%B1%E5%93%8D%E5%AD%A9%E5%AD%90%E5%AD%A6%E4%B9%A0%23) `200.6K 🔥` `+93%`
1. [机器人跑步神似章若楠](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%B7%91%E6%AD%A5%E7%A5%9E%E4%BC%BC%E7%AB%A0%E8%8B%A5%E6%A5%A0%23) `200.0K 🔥` `+217%`
1. [人绞尽脑汁不如命运随手一挥 (It is better to rack one's brains than to let fate take a swipe at you)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%BB%9E%E5%B0%BD%E8%84%91%E6%B1%81%E4%B8%8D%E5%A6%82%E5%91%BD%E8%BF%90%E9%9A%8F%E6%89%8B%E4%B8%80%E6%8C%A5%23) `198.0K 🔥` `+106%`
1. [曾辉团宠](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E5%9B%A2%E5%AE%A0%23) `197.6K 🔥` `+107%`
1. [葫芦娃的公司告了时代峰峻](https://s.weibo.com/weibo?q=%23%E8%91%AB%E8%8A%A6%E5%A8%83%E7%9A%84%E5%85%AC%E5%8F%B8%E5%91%8A%E4%BA%86%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%23) `181.9K 🔥` `+90%`
1. [妈妈知道女儿离婚点鞭炮欢迎回家](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E7%9F%A5%E9%81%93%E5%A5%B3%E5%84%BF%E7%A6%BB%E5%A9%9A%E7%82%B9%E9%9E%AD%E7%82%AE%E6%AC%A2%E8%BF%8E%E5%9B%9E%E5%AE%B6%23) `171.4K 🔥` `+82%`
1. [欢子 摆烂 (Huanzi shows off)](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%20%E6%91%86%E7%83%82%23) `153.2K 🔥` `+54%`
1. [青岛顺风车司机接单后威胁乘客加价 (Qingdao hitchhiking driver threatens passengers to increase fares after accepting orders)](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E9%A1%BA%E9%A3%8E%E8%BD%A6%E5%8F%B8%E6%9C%BA%E6%8E%A5%E5%8D%95%E5%90%8E%E5%A8%81%E8%83%81%E4%B9%98%E5%AE%A2%E5%8A%A0%E4%BB%B7%23) `146.0K 🔥` `+27%`
1. [迪丽热巴特别定制礼服](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%89%B9%E5%88%AB%E5%AE%9A%E5%88%B6%E7%A4%BC%E6%9C%8D%23) `124.3K 🔥` `+41%`
1. [虞书欣娜扎撞衫 (Yu Shuxinna wears a matching shirt)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%A8%9C%E6%89%8E%E6%92%9E%E8%A1%AB%23) `118.8K 🔥` `+27%`
1. [妻子偷拍女子洗澡丈夫负责点评 (Wife secretly filmed woman taking a shower while husband was responsible for commenting)](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%81%B7%E6%8B%8D%E5%A5%B3%E5%AD%90%E6%B4%97%E6%BE%A1%E4%B8%88%E5%A4%AB%E8%B4%9F%E8%B4%A3%E7%82%B9%E8%AF%84%23) `99.1K 🔥` `+72%`
1. [徐涛 读研贬值的只是静态价值 (Xu Tao: The devaluation of graduate school is only the static value)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B6%9B%20%E8%AF%BB%E7%A0%94%E8%B4%AC%E5%80%BC%E7%9A%84%E5%8F%AA%E6%98%AF%E9%9D%99%E6%80%81%E4%BB%B7%E5%80%BC%23) `94.8K 🔥` `+28%`
1. [给小沈阳笑成啥了](https://s.weibo.com/weibo?q=%23%E7%BB%99%E5%B0%8F%E6%B2%88%E9%98%B3%E7%AC%91%E6%88%90%E5%95%A5%E4%BA%86%23) `83.1K 🔥` `+46%`
1. [披荆斩棘一公分数](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E4%B8%80%E5%85%AC%E5%88%86%E6%95%B0%23) `82.4K 🔥` `+44%`
1. [多元消费场景激发经济澎湃活力 (Diversified consumption scenarios stimulate economic vitality)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%85%83%E6%B6%88%E8%B4%B9%E5%9C%BA%E6%99%AF%E6%BF%80%E5%8F%91%E7%BB%8F%E6%B5%8E%E6%BE%8E%E6%B9%83%E6%B4%BB%E5%8A%9B%23) `641.4K 🔥`
1. [张彬彬曹骏李光洁吃了演员身份的亏 (Zhang Binbin, Cao Jun, and Li Guangjie suffered the loss of being an actor)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%BD%AC%E5%BD%AC%E6%9B%B9%E9%AA%8F%E6%9D%8E%E5%85%89%E6%B4%81%E5%90%83%E4%BA%86%E6%BC%94%E5%91%98%E8%BA%AB%E4%BB%BD%E7%9A%84%E4%BA%8F%23) `203.4K 🔥`
1. [购票后未上车视为放弃席位使用权 (Failure to get on the bus after purchasing a ticket will be deemed as giving up the right to use your seat.)](https://s.weibo.com/weibo?q=%23%E8%B4%AD%E7%A5%A8%E5%90%8E%E6%9C%AA%E4%B8%8A%E8%BD%A6%E8%A7%86%E4%B8%BA%E6%94%BE%E5%BC%83%E5%B8%AD%E4%BD%8D%E4%BD%BF%E7%94%A8%E6%9D%83%23) `133.6K 🔥`
1. [女子暗恋8年终等来回应 (Woman waits for response after 8 years of secret love)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%9A%97%E6%81%8B8%E5%B9%B4%E7%BB%88%E7%AD%89%E6%9D%A5%E5%9B%9E%E5%BA%94%23) `111.7K 🔥`
1. [成年人的世界存款才是最大的体面 (In the adult world, savings are the greatest dignity)](https://s.weibo.com/weibo?q=%23%E6%88%90%E5%B9%B4%E4%BA%BA%E7%9A%84%E4%B8%96%E7%95%8C%E5%AD%98%E6%AC%BE%E6%89%8D%E6%98%AF%E6%9C%80%E5%A4%A7%E7%9A%84%E4%BD%93%E9%9D%A2%23) `85.6K 🔥`
1. [官方通报旅客买票占座放零食事件 (Official reports on incident of passengers buying tickets, occupying seats and giving snacks)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%97%85%E5%AE%A2%E4%B9%B0%E7%A5%A8%E5%8D%A0%E5%BA%A7%E6%94%BE%E9%9B%B6%E9%A3%9F%E4%BA%8B%E4%BB%B6%23) `862.0K 🔥` `-22%`
1. [张俪辞退修图师反转 (Zhang Li fires retoucher and reverses course)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BF%AA%E8%BE%9E%E9%80%80%E4%BF%AE%E5%9B%BE%E5%B8%88%E5%8F%8D%E8%BD%AC%23) `209.4K 🔥` `-61%`
1. [世界杯决赛禁赛处罚出炉 (World Cup final ban penalty released)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%E7%A6%81%E8%B5%9B%E5%A4%84%E7%BD%9A%E5%87%BA%E7%82%89%23) `202.0K 🔥` `-51%`
1. [警方通报男子KTV厕所殴打女子 (Police report man assaulting woman in KTV restroom)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E7%94%B7%E5%AD%90KTV%E5%8E%95%E6%89%80%E6%AE%B4%E6%89%93%E5%A5%B3%E5%AD%90%23) `88.3K 🔥` `-34%`

Updated at 2026-08-22 09:15:36

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
