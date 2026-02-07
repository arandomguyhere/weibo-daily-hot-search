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
- **Time-of-day weighting**: Heat values adjusted by collection hour for accuracy

## Today's Hot Searches

<!-- BEGIN -->

1. [王昶钱天一结婚 (Wang Chang and Qian Tianyi get married)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%B6%E9%92%B1%E5%A4%A9%E4%B8%80%E7%BB%93%E5%A9%9A%23) `12.6M 🔥`
1. [千问免单不止奶茶 (Qianwen offers more than just milk tea for free)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E5%85%8D%E5%8D%95%E4%B8%8D%E6%AD%A2%E5%A5%B6%E8%8C%B6%23) `4.7M 🔥`
1. [千问 (Qianwen)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%23) `2.9M 🔥`
1. [谷爱凌第一滑摔倒 (Gu Ailing fell down in her first slip)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%AC%AC%E4%B8%80%E6%BB%91%E6%91%94%E5%80%92%23) `2.8M 🔥`
1. [网友挽留倒闭火锅店房东霸气免租 (Netizens persuade landlord to stay at closed hot pot restaurant and waive rent)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%8C%BD%E7%95%99%E5%80%92%E9%97%AD%E7%81%AB%E9%94%85%E5%BA%97%E6%88%BF%E4%B8%9C%E9%9C%B8%E6%B0%94%E5%85%8D%E7%A7%9F%23) `2.1M 🔥`
1. [金晨肇事逃逸被罚1500元 (Jin Chen was fined 1,500 yuan for hit-and-run accident)](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%E8%82%87%E4%BA%8B%E9%80%83%E9%80%B8%E8%A2%AB%E7%BD%9A1500%E5%85%83%23) `2.0M 🔥`
1. [2026新春走基层 (2026 New Year Goes to the Grassroots)](https://s.weibo.com/weibo?q=%232026%E6%96%B0%E6%98%A5%E8%B5%B0%E5%9F%BA%E5%B1%82%23) `1.7M 🔥`
1. [山姆你还续卡吗 (Sam, do you still want to renew your card?)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E4%BD%A0%E8%BF%98%E7%BB%AD%E5%8D%A1%E5%90%97%23) `1.3M 🔥`
1. [谷爱凌摔倒后立刻看向自己的脚 (After Gu Ailing fell, she immediately looked at her feet)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E6%91%94%E5%80%92%E5%90%8E%E7%AB%8B%E5%88%BB%E7%9C%8B%E5%90%91%E8%87%AA%E5%B7%B1%E7%9A%84%E8%84%9A%23) `1.3M 🔥`
1. [谷爱凌锁定决赛 (Gu Ailing locked in the finals)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E9%94%81%E5%AE%9A%E5%86%B3%E8%B5%9B%23) `1.3M 🔥`
1. [冰雪春天 (ice and snow spring)](https://s.weibo.com/weibo?q=%23%E5%86%B0%E9%9B%AA%E6%98%A5%E5%A4%A9%23) `1.2M 🔥`
1. [米兰开幕式 好正常好好看 (The opening ceremony in Milan was so normal and beautiful.)](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E5%BC%80%E5%B9%95%E5%BC%8F%20%E5%A5%BD%E6%AD%A3%E5%B8%B8%E5%A5%BD%E5%A5%BD%E7%9C%8B%23) `1.1M 🔥`
1. [印度飞饼师傅凭什么认定为外籍专家 (Why is the Indian flying pancake chef recognized as a foreign expert?)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E9%A3%9E%E9%A5%BC%E5%B8%88%E5%82%85%E5%87%AD%E4%BB%80%E4%B9%88%E8%AE%A4%E5%AE%9A%E4%B8%BA%E5%A4%96%E7%B1%8D%E4%B8%93%E5%AE%B6%23) `1.1M 🔥`
1. [谷爱凌完成第二滑 (Gu Ailing completed the second slide)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%AE%8C%E6%88%90%E7%AC%AC%E4%BA%8C%E6%BB%91%23) `1.0M 🔥`
1. [女子独自带三娃赶火车丢了俩 (A woman took her three children alone to catch the train and lost two of them.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%8B%AC%E8%87%AA%E5%B8%A6%E4%B8%89%E5%A8%83%E8%B5%B6%E7%81%AB%E8%BD%A6%E4%B8%A2%E4%BA%86%E4%BF%A9%23) `972.6K 🔥`
1. [女子黄金手镯断裂竟掉出2颗钢珠](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%BB%84%E9%87%91%E6%89%8B%E9%95%AF%E6%96%AD%E8%A3%82%E7%AB%9F%E6%8E%89%E5%87%BA2%E9%A2%97%E9%92%A2%E7%8F%A0%23) `964.8K 🔥`
1. [中国银行坚决拥护党中央决定 (Bank of China firmly supports the decision of the Party Central Committee)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%93%B6%E8%A1%8C%E5%9D%9A%E5%86%B3%E6%8B%A5%E6%8A%A4%E5%85%9A%E4%B8%AD%E5%A4%AE%E5%86%B3%E5%AE%9A%23) `949.1K 🔥`
1. [山姆你还续卡吗 (Are you still renewing your Sam's Club membership?)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E4%BD%A0%E8%BF%98%E7%BB%AD%E5%8D%A1%E5%90%97%23) `932.9K 🔥`
1. [潜水员戴夫手游上线 (Diver Dave mobile game launched)](https://s.weibo.com/weibo?q=%23%E6%BD%9C%E6%B0%B4%E5%91%98%E6%88%B4%E5%A4%AB%E6%89%8B%E6%B8%B8%E4%B8%8A%E7%BA%BF%23) `888.2K 🔥`
1. [成何体统上了韩网热帖 (Cheng He's tact has become a hot topic on Korean net)](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%E4%B8%8A%E4%BA%86%E9%9F%A9%E7%BD%91%E7%83%AD%E5%B8%96%23) `871.3K 🔥`
1. [王楚钦尊重国家队的安排 (Wang Chuqin respects the arrangements of the national team)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%B0%8A%E9%87%8D%E5%9B%BD%E5%AE%B6%E9%98%9F%E7%9A%84%E5%AE%89%E6%8E%92%23) `861.8K 🔥`
1. [中国网络视听盛典 (China Internet Audiovisual Festival)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%BD%91%E7%BB%9C%E8%A7%86%E5%90%AC%E7%9B%9B%E5%85%B8%23) `855.4K 🔥`
1. [政务窗口工作人员8年收好处费1614万 (Government affairs counter staff received 16.14 million yuan in benefits in 8 years)](https://s.weibo.com/weibo?q=%23%E6%94%BF%E5%8A%A1%E7%AA%97%E5%8F%A3%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%988%E5%B9%B4%E6%94%B6%E5%A5%BD%E5%A4%84%E8%B4%B91614%E4%B8%87%23) `836.4K 🔥`
1. [新年有乐事就选拼多多 (Choose Pinduoduo for New Year fun)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%B9%B4%E6%9C%89%E4%B9%90%E4%BA%8B%E5%B0%B1%E9%80%89%E6%8B%BC%E5%A4%9A%E5%A4%9A%23) `814.6K 🔥`
1. [中国健儿蓝白红配色冰雪感拉满 (Chinese athletes' blue-white-red color scheme radiates winter vibes)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%81%A5%E5%84%BF%E8%93%9D%E7%99%BD%E7%BA%A2%E9%85%8D%E8%89%B2%E5%86%B0%E9%9B%AA%E6%84%9F%E6%8B%89%E6%BB%A1%23) `763.9K 🔥`
1. [揭秘 Apple 新春大片 (Revealing Apple’s New Year blockbusters)](https://s.weibo.com/weibo?q=%23%E6%8F%AD%E7%A7%98%20Apple%20%E6%96%B0%E6%98%A5%E5%A4%A7%E7%89%87%23) `744.7K 🔥`
1. [昭阳公主 (Princess Zhaoyang)](https://s.weibo.com/weibo?q=%23%E6%98%AD%E9%98%B3%E5%85%AC%E4%B8%BB%23) `729.5K 🔥`
1. [买冰雪运动同款就上淘宝 (Buy winter sports gear on Taobao)](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E5%86%B0%E9%9B%AA%E8%BF%90%E5%8A%A8%E5%90%8C%E6%AC%BE%E5%B0%B1%E4%B8%8A%E6%B7%98%E5%AE%9D%23) `679.1K 🔥`
1. [吴京回应唇部紧急护理 (Wu Jing responds to lip emergency care)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%E5%9B%9E%E5%BA%94%E5%94%87%E9%83%A8%E7%B4%A7%E6%80%A5%E6%8A%A4%E7%90%86%23) `545.7K 🔥`
1. [大集里的中国年味 (Chinese New Year atmosphere at the market fair)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%9B%86%E9%87%8C%E7%9A%84%E4%B8%AD%E5%9B%BD%E5%B9%B4%E5%91%B3%23) `521.2K 🔥`
1. [王楚然只贴三片黄瓜美成这样 (Wang Churan only posted three slices of cucumber and looked like this)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%8F%AA%E8%B4%B4%E4%B8%89%E7%89%87%E9%BB%84%E7%93%9C%E7%BE%8E%E6%88%90%E8%BF%99%E6%A0%B7%23) `515.0K 🔥`
1. [跟着撒贝宁解锁国台酒智造魔法 (Follow Sa Beining to unlock the magic of Guotai Liquor Manufacturing)](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E7%9D%80%E6%92%92%E8%B4%9D%E5%AE%81%E8%A7%A3%E9%94%81%E5%9B%BD%E5%8F%B0%E9%85%92%E6%99%BA%E9%80%A0%E9%AD%94%E6%B3%95%23) `480.3K 🔥`
1. [美团闪购神价日抽免单 (Meituan’s flash sales offer daily discounts and free orders)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%A2%E9%97%AA%E8%B4%AD%E7%A5%9E%E4%BB%B7%E6%97%A5%E6%8A%BD%E5%85%8D%E5%8D%95%23) `469.3K 🔥`
1. [美团外卖周末半价吃大餐 (Meituan Takeaway offers half-price meals on weekends)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%A2%E5%A4%96%E5%8D%96%E5%91%A8%E6%9C%AB%E5%8D%8A%E4%BB%B7%E5%90%83%E5%A4%A7%E9%A4%90%23) `457.3K 🔥`
1. [老君山一员工拍短视频5年被奖132万 (Laojun Mountain employee awarded 1.32M yuan for 5 years of short videos)](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%90%9B%E5%B1%B1%E4%B8%80%E5%91%98%E5%B7%A5%E6%8B%8D%E7%9F%AD%E8%A7%86%E9%A2%915%E5%B9%B4%E8%A2%AB%E5%A5%96132%E4%B8%87%23) `442.9K 🔥`
1. [很火但难吃的水果 (Very popular but unpalatable fruit)](https://s.weibo.com/weibo?q=%23%E5%BE%88%E7%81%AB%E4%BD%86%E9%9A%BE%E5%90%83%E7%9A%84%E6%B0%B4%E6%9E%9C%23) `440.4K 🔥`
1. [谷爱凌第二轮75.30分 (Gu Ailing scored 75.30 points in the second round)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%AC%AC%E4%BA%8C%E8%BD%AE75.30%E5%88%86%23) `435.1K 🔥`
1. [金银价飙升米兰冬奥金牌史上最贵 (Gold and silver prices soar, Milan Winter Olympics gold medal the most expensive in history)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%93%B6%E4%BB%B7%E9%A3%99%E5%8D%87%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E9%87%91%E7%89%8C%E5%8F%B2%E4%B8%8A%E6%9C%80%E8%B4%B5%23) `417.8K 🔥`
1. [唐宫奇案反转给我看爽了 (I enjoyed watching the reversal of the Tang Palace Strange Case)](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AE%AB%E5%A5%87%E6%A1%88%E5%8F%8D%E8%BD%AC%E7%BB%99%E6%88%91%E7%9C%8B%E7%88%BD%E4%BA%86%23) `391.5K 🔥`
1. [谷爱凌备战期间意外重伤 (Gu Ailing was accidentally seriously injured during preparations for the battle)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%A4%87%E6%88%98%E6%9C%9F%E9%97%B4%E6%84%8F%E5%A4%96%E9%87%8D%E4%BC%A4%23) `378.6K 🔥`
1. [田曦薇闫桉雪中吻戏](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E9%97%AB%E6%A1%89%E9%9B%AA%E4%B8%AD%E5%90%BB%E6%88%8F%23) `370.3K 🔥`
1. [冬奥会开幕式 (Winter Olympics opening ceremony)](https://s.weibo.com/weibo?q=%23%E5%86%AC%E5%A5%A5%E4%BC%9A%E5%BC%80%E5%B9%95%E5%BC%8F%23) `365.3K 🔥`
1. [湖南卫视春晚全阵容官宣 (Hunan TV Spring Festival Gala full lineup announced)](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E6%98%A5%E6%99%9A%E5%85%A8%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `356.7K 🔥`
1. [四川大学通报王竹卿相关问题 (Sichuan University notifies Wang Zhuqing of relevant issues)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%A4%A7%E5%AD%A6%E9%80%9A%E6%8A%A5%E7%8E%8B%E7%AB%B9%E5%8D%BF%E7%9B%B8%E5%85%B3%E9%97%AE%E9%A2%98%23) `341.8K 🔥`
1. [宋威龙赵今麦 马场二搭 (Song Weilong and Zhao Jinmai, second racehorse)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E8%B5%B5%E4%BB%8A%E9%BA%A6%20%E9%A9%AC%E5%9C%BA%E4%BA%8C%E6%90%AD%23) `340.0K 🔥`
1. [王楚钦vs周启豪 (Wang Chuqin vs Zhou Qihao)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E5%91%A8%E5%90%AF%E8%B1%AA%23) `331.0K 🔥`
1. [有奶茶店员称订单密度超外卖大战 (A milk tea shop assistant said the order density exceeds the takeout war)](https://s.weibo.com/weibo?q=%23%E6%9C%89%E5%A5%B6%E8%8C%B6%E5%BA%97%E5%91%98%E7%A7%B0%E8%AE%A2%E5%8D%95%E5%AF%86%E5%BA%A6%E8%B6%85%E5%A4%96%E5%8D%96%E5%A4%A7%E6%88%98%23) `326.8K 🔥`
1. [山姆品控危机引发退卡风波 (Sam's Club quality control crisis sparks membership cancellation wave)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E5%93%81%E6%8E%A7%E5%8D%B1%E6%9C%BA%E5%BC%95%E5%8F%91%E9%80%80%E5%8D%A1%E9%A3%8E%E6%B3%A2%23) `321.1K 🔥`
1. [管乐道歉 (Guan Yue apologizes)](https://s.weibo.com/weibo?q=%23%E7%AE%A1%E4%B9%90%E9%81%93%E6%AD%89%23) `321.0K 🔥`
1. [这一年我去过这些博物馆 (Museums I've visited this year)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E5%B9%B4%E6%88%91%E5%8E%BB%E8%BF%87%E8%BF%99%E4%BA%9B%E5%8D%9A%E7%89%A9%E9%A6%86%23) `320.6K 🔥`
1. [结婚需要多少钱 (How much does it cost to get married?)](https://s.weibo.com/weibo?q=%23%E7%BB%93%E5%A9%9A%E9%9C%80%E8%A6%81%E5%A4%9A%E5%B0%91%E9%92%B1%23) `317.1K 🔥`
1. [孕妇独自驾车就医致一男子死亡 (Pregnant woman driving alone to hospital causes man's death)](https://s.weibo.com/weibo?q=%23%E5%AD%95%E5%A6%87%E7%8B%AC%E8%87%AA%E9%A9%BE%E8%BD%A6%E5%B0%B1%E5%8C%BB%E8%87%B4%E4%B8%80%E7%94%B7%E5%AD%90%E6%AD%BB%E4%BA%A1%23) `316.8K 🔥`
1. [央视还原网购娃娃菜中毒事件真相 (CCTV reveals truth behind online-purchased baby cabbage poisoning incident)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E8%BF%98%E5%8E%9F%E7%BD%91%E8%B4%AD%E5%A8%83%E5%A8%83%E8%8F%9C%E4%B8%AD%E6%AF%92%E4%BA%8B%E4%BB%B6%E7%9C%9F%E7%9B%B8%23) `309.5K 🔥`

Updated at 2026-02-07 12:32:40

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
| `count` | Heat value (adjusted by time-of-day weight) |
| `firstSeen` | ISO timestamp when topic first appeared today |
| `peakCount` | Highest count recorded for this topic today |
| `prevCount` | Count from previous scrape cycle |
| `status` | Lifecycle stage: `new`, `rising`, `hot`, `falling`, `gone` |
| `velocity` | Percentage change from previous scrape |
| `engagement` | Post engagement metrics (top 10 topics): posts, likes, comments, reposts |

### Time-of-Day Weights

Heat values are weighted by time of day during collection to better reflect true popularity:

| Period | Hours (CST) | Weight |
|--------|-------------|--------|
| Night | 02:00-05:00 | 0.5x |
| Morning | 06:00-10:00 | 0.8x |
| Peak | 11:00-13:00, 17:00-23:00, 00:00 | 1.2x |
| Default | 01:00, 14:00-16:00 | 1.0x |

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
