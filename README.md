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

1. [年轻人的智能好车埃安N60预售11.58万起 (Aian N60, a good smart car for young people, pre-sale starts at 115,800)](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%9A%84%E6%99%BA%E8%83%BD%E5%A5%BD%E8%BD%A6%E5%9F%83%E5%AE%89N60%E9%A2%84%E5%94%AE11.58%E4%B8%87%E8%B5%B7%23) `580.6K 🔥` `NEW`
1. [新公路之王极氪8X正式上市](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%85%AC%E8%B7%AF%E4%B9%8B%E7%8E%8B%E6%9E%81%E6%B0%AA8X%E6%AD%A3%E5%BC%8F%E4%B8%8A%E5%B8%82%23) `398.0K 🔥` `NEW`
1. [穆祉丞二维码](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E4%BA%8C%E7%BB%B4%E7%A0%81%23) `290.7K 🔥` `NEW`
1. [虞书欣丸子头](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%B8%B8%E5%AD%90%E5%A4%B4%23) `278.1K 🔥` `NEW`
1. [氧化菊 泼水节](https://s.weibo.com/weibo?q=%23%E6%B0%A7%E5%8C%96%E8%8F%8A%20%E6%B3%BC%E6%B0%B4%E8%8A%82%23) `273.1K 🔥` `NEW`
1. [将军请喝茶](https://s.weibo.com/weibo?q=%23%E5%B0%86%E5%86%9B%E8%AF%B7%E5%96%9D%E8%8C%B6%23) `270.1K 🔥` `NEW`
1. [20岁孙女偷偷结婚7旬爷爷落泪](https://s.weibo.com/weibo?q=%2320%E5%B2%81%E5%AD%99%E5%A5%B3%E5%81%B7%E5%81%B7%E7%BB%93%E5%A9%9A7%E6%97%AC%E7%88%B7%E7%88%B7%E8%90%BD%E6%B3%AA%23) `266.9K 🔥` `NEW`
1. [陈奕恒回应私联争议](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E5%9B%9E%E5%BA%94%E7%A7%81%E8%81%94%E4%BA%89%E8%AE%AE%23) `261.1K 🔥` `NEW`
1. [张雪机车夺冠后首秀](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%A4%BA%E5%86%A0%E5%90%8E%E9%A6%96%E7%A7%80%23) `243.1K 🔥` `NEW`
1. [老人做饭关气不关灶引发爆燃](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E5%81%9A%E9%A5%AD%E5%85%B3%E6%B0%94%E4%B8%8D%E5%85%B3%E7%81%B6%E5%BC%95%E5%8F%91%E7%88%86%E7%87%83%23) `228.8K 🔥` `NEW`
1. [月鳞绮纪四位主演出镜时长 (The screen time of the four main actors of Moon Scale Qiji)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E5%9B%9B%E4%BD%8D%E4%B8%BB%E6%BC%94%E5%87%BA%E9%95%9C%E6%97%B6%E9%95%BF%23) `215.9K 🔥` `NEW`
1. [都美竹被强执](https://s.weibo.com/weibo?q=%23%E9%83%BD%E7%BE%8E%E7%AB%B9%E8%A2%AB%E5%BC%BA%E6%89%A7%23) `206.5K 🔥` `NEW`
1. [安崎一公排名](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%B4%8E%E4%B8%80%E5%85%AC%E6%8E%92%E5%90%8D%23) `196.6K 🔥` `NEW`
1. [女子在ZARA被针头扎伤最新进展](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9C%A8ZARA%E8%A2%AB%E9%92%88%E5%A4%B4%E6%89%8E%E4%BC%A4%E6%9C%80%E6%96%B0%E8%BF%9B%E5%B1%95%23) `195.2K 🔥` `NEW`
1. [阚清子发浪姐大合照](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%8F%91%E6%B5%AA%E5%A7%90%E5%A4%A7%E5%90%88%E7%85%A7%23) `183.2K 🔥` `NEW`
1. [警方通报女子称遭强奸嫌疑人被取保](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%90%E7%A7%B0%E9%81%AD%E5%BC%BA%E5%A5%B8%E5%AB%8C%E7%96%91%E4%BA%BA%E8%A2%AB%E5%8F%96%E4%BF%9D%23) `177.8K 🔥` `NEW`
1. [江语晨带孩子们看浪姐](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%E5%B8%A6%E5%AD%A9%E5%AD%90%E4%BB%AC%E7%9C%8B%E6%B5%AA%E5%A7%90%23) `174.9K 🔥` `NEW`
1. [对余某罚没10亿余元](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E4%BD%99%E6%9F%90%E7%BD%9A%E6%B2%A110%E4%BA%BF%E4%BD%99%E5%85%83%23) `903.0K 🔥` `+218%`
1. [工作为什么默认能用我的手机 (Why can I use my mobile phone by default at work?)](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E4%B8%BA%E4%BB%80%E4%B9%88%E9%BB%98%E8%AE%A4%E8%83%BD%E7%94%A8%E6%88%91%E7%9A%84%E6%89%8B%E6%9C%BA%23) `404.0K 🔥` `+110%`
1. [刘浩存 没有给代拍好脸色的义务](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%20%E6%B2%A1%E6%9C%89%E7%BB%99%E4%BB%A3%E6%8B%8D%E5%A5%BD%E8%84%B8%E8%89%B2%E7%9A%84%E4%B9%89%E5%8A%A1%23) `228.1K 🔥` `+23%`
1. [拼多多美团京东淘天抖音被罚35亿 (Pinduoduo, Meituan, JD.com, Taotian and Douyin were fined 3.5 billion)](https://s.weibo.com/weibo?q=%23%E6%8B%BC%E5%A4%9A%E5%A4%9A%E7%BE%8E%E5%9B%A2%E4%BA%AC%E4%B8%9C%E6%B7%98%E5%A4%A9%E6%8A%96%E9%9F%B3%E8%A2%AB%E7%BD%9A35%E4%BA%BF%23) `1.4M 🔥`
1. [费曼学什么这么贵啊](https://s.weibo.com/weibo?q=%23%E8%B4%B9%E6%9B%BC%E5%AD%A6%E4%BB%80%E4%B9%88%E8%BF%99%E4%B9%88%E8%B4%B5%E5%95%8A%23) `308.5K 🔥`
1. [杭州用一个针头给15人采血事件后续 (Follow-up to the Hangzhou incident of using a needle to collect blood from 15 people)](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E7%94%A8%E4%B8%80%E4%B8%AA%E9%92%88%E5%A4%B4%E7%BB%9915%E4%BA%BA%E9%87%87%E8%A1%80%E4%BA%8B%E4%BB%B6%E5%90%8E%E7%BB%AD%23) `205.8K 🔥`
1. [白发或是身体的抗癌警报](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%8F%91%E6%88%96%E6%98%AF%E8%BA%AB%E4%BD%93%E7%9A%84%E6%8A%97%E7%99%8C%E8%AD%A6%E6%8A%A5%23) `195.6K 🔥`
1. [日本人威胁给我使馆装炸弹 (The Japanese threatened to plant bombs in our embassy)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%BA%E5%A8%81%E8%83%81%E7%BB%99%E6%88%91%E4%BD%BF%E9%A6%86%E8%A3%85%E7%82%B8%E5%BC%B9%23) `195.3K 🔥`
1. [月鳞绮纪豆瓣5.3 (Yue Lin Qi Ji Douban 5.3)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E8%B1%86%E7%93%A35.3%23) `195.2K 🔥`
1. [男子杀人后和妻儿与尸体生活多年](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%9D%80%E4%BA%BA%E5%90%8E%E5%92%8C%E5%A6%BB%E5%84%BF%E4%B8%8E%E5%B0%B8%E4%BD%93%E7%94%9F%E6%B4%BB%E5%A4%9A%E5%B9%B4%23) `193.8K 🔥`
1. [女教师聊八卦被拘谣言传播过程曝光](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%95%99%E5%B8%88%E8%81%8A%E5%85%AB%E5%8D%A6%E8%A2%AB%E6%8B%98%E8%B0%A3%E8%A8%80%E4%BC%A0%E6%92%AD%E8%BF%87%E7%A8%8B%E6%9B%9D%E5%85%89%23) `186.1K 🔥`
1. [橘子海乐队称华为侵权](https://s.weibo.com/weibo?q=%23%E6%A9%98%E5%AD%90%E6%B5%B7%E4%B9%90%E9%98%9F%E7%A7%B0%E5%8D%8E%E4%B8%BA%E4%BE%B5%E6%9D%83%23) `168.0K 🔥`
1. [爷爷生前录音赠孙女百万遗产无效 (Grandpa’s recording of a million-dollar inheritance gift to his granddaughter is invalid)](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E7%94%9F%E5%89%8D%E5%BD%95%E9%9F%B3%E8%B5%A0%E5%AD%99%E5%A5%B3%E7%99%BE%E4%B8%87%E9%81%97%E4%BA%A7%E6%97%A0%E6%95%88%23) `167.3K 🔥`
1. [谢娜洗完澡李小冉会帮拿牛奶放睡衣](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%B4%97%E5%AE%8C%E6%BE%A1%E6%9D%8E%E5%B0%8F%E5%86%89%E4%BC%9A%E5%B8%AE%E6%8B%BF%E7%89%9B%E5%A5%B6%E6%94%BE%E7%9D%A1%E8%A1%A3%23) `167.0K 🔥`
1. [优质网络主播中国行山西行](https://s.weibo.com/weibo?q=%23%E4%BC%98%E8%B4%A8%E7%BD%91%E7%BB%9C%E4%B8%BB%E6%92%AD%E4%B8%AD%E5%9B%BD%E8%A1%8C%E5%B1%B1%E8%A5%BF%E8%A1%8C%23) `723.1K 🔥` `-40%`
1. [一日本自卫队舰艇进入台湾海峡](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%97%A5%E6%9C%AC%E8%87%AA%E5%8D%AB%E9%98%9F%E8%88%B0%E8%89%87%E8%BF%9B%E5%85%A5%E5%8F%B0%E6%B9%BE%E6%B5%B7%E5%B3%A1%23) `493.3K 🔥` `-33%`
1. [责令7平台暂停新增蛋糕店铺](https://s.weibo.com/weibo?q=%23%E8%B4%A3%E4%BB%A47%E5%B9%B3%E5%8F%B0%E6%9A%82%E5%81%9C%E6%96%B0%E5%A2%9E%E8%9B%8B%E7%B3%95%E5%BA%97%E9%93%BA%23) `406.1K 🔥` `-46%`
1. [雷军问直播放歌有没有版权问题](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E9%97%AE%E7%9B%B4%E6%92%AD%E6%94%BE%E6%AD%8C%E6%9C%89%E6%B2%A1%E6%9C%89%E7%89%88%E6%9D%83%E9%97%AE%E9%A2%98%23) `396.9K 🔥` `-22%`
1. [冰湖重生豆瓣3.2 (Ice Lake Rebirth Douban 3.2)](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E8%B1%86%E7%93%A33.2%23) `389.0K 🔥` `-25%`
1. [多平台公然传播被禁多年的暗黑动漫 (Dark anime that has been banned for many years is openly disseminated on multiple platforms)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%B9%B3%E5%8F%B0%E5%85%AC%E7%84%B6%E4%BC%A0%E6%92%AD%E8%A2%AB%E7%A6%81%E5%A4%9A%E5%B9%B4%E7%9A%84%E6%9A%97%E9%BB%91%E5%8A%A8%E6%BC%AB%23) `328.3K 🔥` `-29%`
1. [朱迅已抗癌20年](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E8%BF%85%E5%B7%B2%E6%8A%97%E7%99%8C20%E5%B9%B4%23) `308.2K 🔥` `-39%`
1. [幽灵外卖](https://s.weibo.com/weibo?q=%23%E5%B9%BD%E7%81%B5%E5%A4%96%E5%8D%96%23) `302.9K 🔥` `-79%`
1. [李小冉一公第一名](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E4%B8%80%E5%85%AC%E7%AC%AC%E4%B8%80%E5%90%8D%23) `298.2K 🔥` `-39%`
1. [林肯号航母提供的餐食情况](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%82%AF%E5%8F%B7%E8%88%AA%E6%AF%8D%E6%8F%90%E4%BE%9B%E7%9A%84%E9%A4%90%E9%A3%9F%E6%83%85%E5%86%B5%23) `291.1K 🔥` `-23%`
1. [摊主因借给学生手机被家长逼到下跪](https://s.weibo.com/weibo?q=%23%E6%91%8A%E4%B8%BB%E5%9B%A0%E5%80%9F%E7%BB%99%E5%AD%A6%E7%94%9F%E6%89%8B%E6%9C%BA%E8%A2%AB%E5%AE%B6%E9%95%BF%E9%80%BC%E5%88%B0%E4%B8%8B%E8%B7%AA%23) `282.5K 🔥` `-72%`
1. [狗 出大事了没空跟你解释 (Dog, something big happened and I don’t have time to explain to you.)](https://s.weibo.com/weibo?q=%23%E7%8B%97%20%E5%87%BA%E5%A4%A7%E4%BA%8B%E4%BA%86%E6%B2%A1%E7%A9%BA%E8%B7%9F%E4%BD%A0%E8%A7%A3%E9%87%8A%23) `258.7K 🔥` `-56%`
1. [温峥嵘二公选人被拒绝五次 (Wen Zhengrong was rejected five times as candidate for the second election)](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B3%A5%E5%B5%98%E4%BA%8C%E5%85%AC%E9%80%89%E4%BA%BA%E8%A2%AB%E6%8B%92%E7%BB%9D%E4%BA%94%E6%AC%A1%23) `254.1K 🔥` `-55%`
1. [章泽天外媒生图](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E6%B3%BD%E5%A4%A9%E5%A4%96%E5%AA%92%E7%94%9F%E5%9B%BE%23) `246.9K 🔥` `-45%`
1. [妈妈确诊癌症晚期一年后女儿被杀 (Daughter killed one year after mother diagnosed with terminal cancer)](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E7%A1%AE%E8%AF%8A%E7%99%8C%E7%97%87%E6%99%9A%E6%9C%9F%E4%B8%80%E5%B9%B4%E5%90%8E%E5%A5%B3%E5%84%BF%E8%A2%AB%E6%9D%80%23) `241.8K 🔥` `-49%`
1. [章若楠方补充说明 (Zhang Ruonanfang’s additional explanation)](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E6%96%B9%E8%A1%A5%E5%85%85%E8%AF%B4%E6%98%8E%23) `235.3K 🔥` `-49%`
1. [钟丽缇女儿Jaden回应不是混血](https://s.weibo.com/weibo?q=%23%E9%92%9F%E4%B8%BD%E7%BC%87%E5%A5%B3%E5%84%BFJaden%E5%9B%9E%E5%BA%94%E4%B8%8D%E6%98%AF%E6%B7%B7%E8%A1%80%23) `231.1K 🔥` `-39%`
1. [孙怡动用人脉当上了最不想当的队长](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E5%8A%A8%E7%94%A8%E4%BA%BA%E8%84%89%E5%BD%93%E4%B8%8A%E4%BA%86%E6%9C%80%E4%B8%8D%E6%83%B3%E5%BD%93%E7%9A%84%E9%98%9F%E9%95%BF%23) `228.8K 🔥` `-41%`
1. [A股新股王诞生了](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%96%B0%E8%82%A1%E7%8E%8B%E8%AF%9E%E7%94%9F%E4%BA%86%23) `221.6K 🔥` `-33%`
1. [男子4.5万月薪工作被前公司搅黄 (A man’s job with a monthly salary of RMB 45,000 was ruined by his former company)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%904.5%E4%B8%87%E6%9C%88%E8%96%AA%E5%B7%A5%E4%BD%9C%E8%A2%AB%E5%89%8D%E5%85%AC%E5%8F%B8%E6%90%85%E9%BB%84%23) `214.8K 🔥` `-43%`
1. [王者荣耀世界移动端上线](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E4%B8%96%E7%95%8C%E7%A7%BB%E5%8A%A8%E7%AB%AF%E4%B8%8A%E7%BA%BF%23) `189.6K 🔥` `-27%`

Updated at 2026-04-17 19:38:45

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
