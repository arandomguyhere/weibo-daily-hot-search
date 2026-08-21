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

1. [张俪辞退修图师反转 (Zhang Li fires retoucher and reverses course)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BF%AA%E8%BE%9E%E9%80%80%E4%BF%AE%E5%9B%BE%E5%B8%88%E5%8F%8D%E8%BD%AC%23) `342.7K 🔥` `NEW`
1. [8.99万起大众5S夯爆了](https://s.weibo.com/weibo?q=%238.99%E4%B8%87%E8%B5%B7%E5%A4%A7%E4%BC%975S%E5%A4%AF%E7%88%86%E4%BA%86%23) `325.5K 🔥` `NEW`
1. [网红峰哥自曝100万港元抄底锂电池](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E5%B3%B0%E5%93%A5%E8%87%AA%E6%9B%9D100%E4%B8%87%E6%B8%AF%E5%85%83%E6%8A%84%E5%BA%95%E9%94%82%E7%94%B5%E6%B1%A0%23) `170.1K 🔥` `NEW`
1. [涿州代孕事件 内鬼](https://s.weibo.com/weibo?q=%23%E6%B6%BF%E5%B7%9E%E4%BB%A3%E5%AD%95%E4%BA%8B%E4%BB%B6%20%E5%86%85%E9%AC%BC%23) `75.2K 🔥` `NEW`
1. [曾辉团宠](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E5%9B%A2%E5%AE%A0%23) `63.6K 🔥` `NEW`
1. [妈妈知道女儿离婚点鞭炮欢迎回家](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E7%9F%A5%E9%81%93%E5%A5%B3%E5%84%BF%E7%A6%BB%E5%A9%9A%E7%82%B9%E9%9E%AD%E7%82%AE%E6%AC%A2%E8%BF%8E%E5%9B%9E%E5%AE%B6%23) `54.3K 🔥` `NEW`
1. [机器人跑步神似章若楠](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%B7%91%E6%AD%A5%E7%A5%9E%E4%BC%BC%E7%AB%A0%E8%8B%A5%E6%A5%A0%23) `47.6K 🔥` `NEW`
1. [小林栋哲中戏报到](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%9E%97%E6%A0%8B%E5%93%B2%E4%B8%AD%E6%88%8F%E6%8A%A5%E5%88%B0%23) `46.7K 🔥` `NEW`
1. [曝时代峰峻或面临给F1赔偿](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E6%88%96%E9%9D%A2%E4%B8%B4%E7%BB%99F1%E8%B5%94%E5%81%BF%23) `46.7K 🔥` `NEW`
1. [官方通报旅客买票占座放零食事件 (Official reports on incident of passengers buying tickets, occupying seats and giving snacks)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%97%85%E5%AE%A2%E4%B9%B0%E7%A5%A8%E5%8D%A0%E5%BA%A7%E6%94%BE%E9%9B%B6%E9%A3%9F%E4%BA%8B%E4%BB%B6%23) `915.2K 🔥` `+39%`
1. [世界杯决赛禁赛处罚出炉 (World Cup final ban penalty released)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%E7%A6%81%E8%B5%9B%E5%A4%84%E7%BD%9A%E5%87%BA%E7%82%89%23) `665.8K 🔥` `+43%`
1. [多元消费场景激发经济澎湃活力 (Diversified consumption scenarios stimulate economic vitality)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%85%83%E6%B6%88%E8%B4%B9%E5%9C%BA%E6%99%AF%E6%BF%80%E5%8F%91%E7%BB%8F%E6%B5%8E%E6%BE%8E%E6%B9%83%E6%B4%BB%E5%8A%9B%23) `543.4K 🔥` `+47%`
1. [李宇春CHOUCHOU名创优品潮流合作 (Li Yuchun CHOUCHOU MINISO fashion cooperation)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%87%E6%98%A5CHOUCHOU%E5%90%8D%E5%88%9B%E4%BC%98%E5%93%81%E6%BD%AE%E6%B5%81%E5%90%88%E4%BD%9C%23) `535.5K 🔥` `+755%`
1. [外国网友怀疑中国农村是AI (Foreign netizens suspect that China’s rural areas are caused by AI)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E7%BD%91%E5%8F%8B%E6%80%80%E7%96%91%E4%B8%AD%E5%9B%BD%E5%86%9C%E6%9D%91%E6%98%AFAI%23) `510.5K 🔥` `+442%`
1. [张丹丹 灵活就业本身就是一种福利](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%B8%B9%E4%B8%B9%20%E7%81%B5%E6%B4%BB%E5%B0%B1%E4%B8%9A%E6%9C%AC%E8%BA%AB%E5%B0%B1%E6%98%AF%E4%B8%80%E7%A7%8D%E7%A6%8F%E5%88%A9%23) `408.6K 🔥` `+69%`
1. [警方通报男子KTV厕所殴打女子 (Police report man assaulting woman in KTV restroom)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E7%94%B7%E5%AD%90KTV%E5%8E%95%E6%89%80%E6%AE%B4%E6%89%93%E5%A5%B3%E5%AD%90%23) `131.6K 🔥` `+24%`
1. [河北老人养老金月领212元](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8C%97%E8%80%81%E4%BA%BA%E5%85%BB%E8%80%81%E9%87%91%E6%9C%88%E9%A2%86212%E5%85%83%23) `130.4K 🔥` `+31%`
1. [青岛顺风车司机接单后威胁乘客加价 (Qingdao hitchhiking driver threatens passengers to increase fares after accepting orders)](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E9%A1%BA%E9%A3%8E%E8%BD%A6%E5%8F%B8%E6%9C%BA%E6%8E%A5%E5%8D%95%E5%90%8E%E5%A8%81%E8%83%81%E4%B9%98%E5%AE%A2%E5%8A%A0%E4%BB%B7%23) `129.9K 🔥` `+35%`
1. [开台灯遭邻居投诉影响孩子学习 (Neighbors complained that turning on a desk lamp affected children's learning)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%8F%B0%E7%81%AF%E9%81%AD%E9%82%BB%E5%B1%85%E6%8A%95%E8%AF%89%E5%BD%B1%E5%93%8D%E5%AD%A9%E5%AD%90%E5%AD%A6%E4%B9%A0%23) `128.9K 🔥` `+36%`
1. [丈夫拍妻子出轨却因妨害隐私获刑](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E6%8B%8D%E5%A6%BB%E5%AD%90%E5%87%BA%E8%BD%A8%E5%8D%B4%E5%9B%A0%E5%A6%A8%E5%AE%B3%E9%9A%90%E7%A7%81%E8%8E%B7%E5%88%91%23) `128.3K 🔥` `+32%`
1. [欢子 摆烂 (Huanzi shows off)](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%20%E6%91%86%E7%83%82%23) `119.8K 🔥` `+27%`
1. [购票后未上车视为放弃席位使用权 (Failure to get on the bus after purchasing a ticket will be deemed as giving up the right to use your seat.)](https://s.weibo.com/weibo?q=%23%E8%B4%AD%E7%A5%A8%E5%90%8E%E6%9C%AA%E4%B8%8A%E8%BD%A6%E8%A7%86%E4%B8%BA%E6%94%BE%E5%BC%83%E5%B8%AD%E4%BD%8D%E4%BD%BF%E7%94%A8%E6%9D%83%23) `156.1K 🔥`
1. [张彬彬曹骏李光洁吃了演员身份的亏 (Zhang Binbin, Cao Jun, and Li Guangjie suffered the loss of being an actor)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%BD%AC%E5%BD%AC%E6%9B%B9%E9%AA%8F%E6%9D%8E%E5%85%89%E6%B4%81%E5%90%83%E4%BA%86%E6%BC%94%E5%91%98%E8%BA%AB%E4%BB%BD%E7%9A%84%E4%BA%8F%23) `135.5K 🔥`
1. [张雅琪路人缘 (Popularity of Zhang Yaqi)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E8%B7%AF%E4%BA%BA%E7%BC%98%23) `129.3K 🔥`
1. [第一次当妈妈的真实感受 (What it’s like to be a mother for the first time)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%BD%93%E5%A6%88%E5%A6%88%E7%9A%84%E7%9C%9F%E5%AE%9E%E6%84%9F%E5%8F%97%23) `103.3K 🔥`
1. [门把手缺陷引发最大规模召回](https://s.weibo.com/weibo?q=%23%E9%97%A8%E6%8A%8A%E6%89%8B%E7%BC%BA%E9%99%B7%E5%BC%95%E5%8F%91%E6%9C%80%E5%A4%A7%E8%A7%84%E6%A8%A1%E5%8F%AC%E5%9B%9E%23) `88.4K 🔥`
1. [人绞尽脑汁不如命运随手一挥 (It is better to rack one's brains than to let fate take a swipe at you)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%BB%9E%E5%B0%BD%E8%84%91%E6%B1%81%E4%B8%8D%E5%A6%82%E5%91%BD%E8%BF%90%E9%9A%8F%E6%89%8B%E4%B8%80%E6%8C%A5%23) `86.4K 🔥`
1. [女子暗恋8年终等来回应 (Woman waits for response after 8 years of secret love)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%9A%97%E6%81%8B8%E5%B9%B4%E7%BB%88%E7%AD%89%E6%9D%A5%E5%9B%9E%E5%BA%94%23) `86.1K 🔥`
1. [鸭货为何不好卖了 (Why are duck products so hard to sell?)](https://s.weibo.com/weibo?q=%23%E9%B8%AD%E8%B4%A7%E4%B8%BA%E4%BD%95%E4%B8%8D%E5%A5%BD%E5%8D%96%E4%BA%86%23) `84.4K 🔥`
1. [未检票上车第三方不能处置该席位 (Third parties who board the train without checking their tickets cannot dispose of the seat.)](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%A3%80%E7%A5%A8%E4%B8%8A%E8%BD%A6%E7%AC%AC%E4%B8%89%E6%96%B9%E4%B8%8D%E8%83%BD%E5%A4%84%E7%BD%AE%E8%AF%A5%E5%B8%AD%E4%BD%8D%23) `80.7K 🔥`
1. [沈梦辰喊了曾辉三次曾总](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%A2%A6%E8%BE%B0%E5%96%8A%E4%BA%86%E6%9B%BE%E8%BE%89%E4%B8%89%E6%AC%A1%E6%9B%BE%E6%80%BB%23) `77.4K 🔥`
1. [陈柏霖当庭认罪](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%9F%8F%E9%9C%96%E5%BD%93%E5%BA%AD%E8%AE%A4%E7%BD%AA%23) `131.5K 🔥` `-32%`
1. [葫芦娃的公司告了时代峰峻](https://s.weibo.com/weibo?q=%23%E8%91%AB%E8%8A%A6%E5%A8%83%E7%9A%84%E5%85%AC%E5%8F%B8%E5%91%8A%E4%BA%86%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%23) `102.2K 🔥` `-47%`
1. [虞书欣娜扎撞衫 (Yu Shuxinna wears a matching shirt)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%A8%9C%E6%89%8E%E6%92%9E%E8%A1%AB%23) `85.8K 🔥` `-56%`
1. [小沈阳摔了 (Little Shenyang fell)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E6%91%94%E4%BA%86%23) `74.8K 🔥` `-21%`
1. [普通人学AI的意义](https://s.weibo.com/weibo?q=%23%E6%99%AE%E9%80%9A%E4%BA%BA%E5%AD%A6AI%E7%9A%84%E6%84%8F%E4%B9%89%23) `73.2K 🔥` `-22%`
1. [成都铁路局回应](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E9%93%81%E8%B7%AF%E5%B1%80%E5%9B%9E%E5%BA%94%23) `70.5K 🔥` `-25%`
1. [彭昱畅去旭旭宝宝直播间了 (Peng Yuchang went to the Xuxu baby live broadcast room)](https://s.weibo.com/weibo?q=%23%E5%BD%AD%E6%98%B1%E7%95%85%E5%8E%BB%E6%97%AD%E6%97%AD%E5%AE%9D%E5%AE%9D%E7%9B%B4%E6%92%AD%E9%97%B4%E4%BA%86%23) `67.4K 🔥` `-28%`
1. [舟山爱吃蟹和烧烤的都沉默了 (People who love eating crabs and barbecue in Zhoushan are silent)](https://s.weibo.com/weibo?q=%23%E8%88%9F%E5%B1%B1%E7%88%B1%E5%90%83%E8%9F%B9%E5%92%8C%E7%83%A7%E7%83%A4%E7%9A%84%E9%83%BD%E6%B2%89%E9%BB%98%E4%BA%86%23) `65.1K 🔥` `-31%`
1. [成年人的世界存款才是最大的体面 (In the adult world, savings are the greatest dignity)](https://s.weibo.com/weibo?q=%23%E6%88%90%E5%B9%B4%E4%BA%BA%E7%9A%84%E4%B8%96%E7%95%8C%E5%AD%98%E6%AC%BE%E6%89%8D%E6%98%AF%E6%9C%80%E5%A4%A7%E7%9A%84%E4%BD%93%E9%9D%A2%23) `64.2K 🔥` `-32%`
1. [边牧知道自己正在在扮演一只蜗牛](https://s.weibo.com/weibo?q=%23%E8%BE%B9%E7%89%A7%E7%9F%A5%E9%81%93%E8%87%AA%E5%B7%B1%E6%AD%A3%E5%9C%A8%E5%9C%A8%E6%89%AE%E6%BC%94%E4%B8%80%E5%8F%AA%E8%9C%97%E7%89%9B%23) `62.7K 🔥` `-33%`
1. [徐涛 读研贬值的只是静态价值 (Xu Tao: The devaluation of graduate school is only the static value)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B6%9B%20%E8%AF%BB%E7%A0%94%E8%B4%AC%E5%80%BC%E7%9A%84%E5%8F%AA%E6%98%AF%E9%9D%99%E6%80%81%E4%BB%B7%E5%80%BC%23) `61.7K 🔥` `-34%`
1. [针灸师借身体检测占女护士便宜 (Acupuncturist uses physical examination to take advantage of female nurse)](https://s.weibo.com/weibo?q=%23%E9%92%88%E7%81%B8%E5%B8%88%E5%80%9F%E8%BA%AB%E4%BD%93%E6%A3%80%E6%B5%8B%E5%8D%A0%E5%A5%B3%E6%8A%A4%E5%A3%AB%E4%BE%BF%E5%AE%9C%23) `61.4K 🔥` `-35%`
1. [猫咪等吹空调主人一来晚就骂骂咧咧 (The cat was waiting for the air conditioner to be turned on and the owner scolded him when he arrived late)](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%92%AA%E7%AD%89%E5%90%B9%E7%A9%BA%E8%B0%83%E4%B8%BB%E4%BA%BA%E4%B8%80%E6%9D%A5%E6%99%9A%E5%B0%B1%E9%AA%82%E9%AA%82%E5%92%A7%E5%92%A7%23) `58.3K 🔥` `-38%`
1. [妻子偷拍女子洗澡丈夫负责点评 (Wife secretly filmed woman taking a shower while husband was responsible for commenting)](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%81%B7%E6%8B%8D%E5%A5%B3%E5%AD%90%E6%B4%97%E6%BE%A1%E4%B8%88%E5%A4%AB%E8%B4%9F%E8%B4%A3%E7%82%B9%E8%AF%84%23) `57.0K 🔥` `-40%`
1. [阿根廷中场禁赛10场 (Argentina midfielder banned for 10 games)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%B8%AD%E5%9C%BA%E7%A6%81%E8%B5%9B10%E5%9C%BA%23) `54.6K 🔥` `-42%`
1. [汪苏泷本人知道这件事情吗 (Does Wang Sulong himself know about this?)](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E6%9C%AC%E4%BA%BA%E7%9F%A5%E9%81%93%E8%BF%99%E4%BB%B6%E4%BA%8B%E6%83%85%E5%90%97%23) `53.2K 🔥` `-43%`
1. [披荆斩棘一公分数](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E4%B8%80%E5%85%AC%E5%88%86%E6%95%B0%23) `52.9K 🔥` `-44%`
1. [多家车企启动召回 (Many car companies initiate recalls)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6%E8%BD%A6%E4%BC%81%E5%90%AF%E5%8A%A8%E5%8F%AC%E5%9B%9E%23) `52.3K 🔥` `-44%`
1. [张睿主持能力 (Zhang Rui’s hosting ability)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%E4%B8%BB%E6%8C%81%E8%83%BD%E5%8A%9B%23) `52.2K 🔥` `-44%`
1. [母亲被撞溺亡搜救七天花光所有积蓄](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E8%A2%AB%E6%92%9E%E6%BA%BA%E4%BA%A1%E6%90%9C%E6%95%91%E4%B8%83%E5%A4%A9%E8%8A%B1%E5%85%89%E6%89%80%E6%9C%89%E7%A7%AF%E8%93%84%23) `49.0K 🔥` `-48%`
1. [升学宴不是5死17伤的原罪 (The entrance banquet was not the original crime that caused 5 deaths and 17 injuries)](https://s.weibo.com/weibo?q=%23%E5%8D%87%E5%AD%A6%E5%AE%B4%E4%B8%8D%E6%98%AF5%E6%AD%BB17%E4%BC%A4%E7%9A%84%E5%8E%9F%E7%BD%AA%23) `46.7K 🔥` `-50%`

Updated at 2026-08-22 07:33:44

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
