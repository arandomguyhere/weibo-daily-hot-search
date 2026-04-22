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

1. [美伊停火延长至伊朗提方案并谈妥 (US-Iran ceasefire extended until Iran proposes and negotiates plan)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%81%9C%E7%81%AB%E5%BB%B6%E9%95%BF%E8%87%B3%E4%BC%8A%E6%9C%97%E6%8F%90%E6%96%B9%E6%A1%88%E5%B9%B6%E8%B0%88%E5%A6%A5%23) `611.1K 🔥` `NEW`
1. [虞书欣戛纳蓝色妖姬造型](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%88%9B%E7%BA%B3%E8%93%9D%E8%89%B2%E5%A6%96%E5%A7%AC%E9%80%A0%E5%9E%8B%23) `207.2K 🔥` `NEW`
1. [泰国泼水节一少女遭士兵性侵](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%B3%BC%E6%B0%B4%E8%8A%82%E4%B8%80%E5%B0%91%E5%A5%B3%E9%81%AD%E5%A3%AB%E5%85%B5%E6%80%A7%E4%BE%B5%23) `186.3K 🔥` `NEW`
1. [时代少年团新歌硬照](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%96%B0%E6%AD%8C%E7%A1%AC%E7%85%A7%23) `170.7K 🔥` `NEW`
1. [多方回应KTV服务员强奸14岁女生](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%94KTV%E6%9C%8D%E5%8A%A1%E5%91%98%E5%BC%BA%E5%A5%B814%E5%B2%81%E5%A5%B3%E7%94%9F%23) `163.8K 🔥` `NEW`
1. [女子无视哈里夫妇淡定晒太阳走红](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%97%A0%E8%A7%86%E5%93%88%E9%87%8C%E5%A4%AB%E5%A6%87%E6%B7%A1%E5%AE%9A%E6%99%92%E5%A4%AA%E9%98%B3%E8%B5%B0%E7%BA%A2%23) `134.8K 🔥` `NEW`
1. [伊朗说没有请求延长停火](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%AF%B4%E6%B2%A1%E6%9C%89%E8%AF%B7%E6%B1%82%E5%BB%B6%E9%95%BF%E5%81%9C%E7%81%AB%23) `127.6K 🔥` `NEW`
1. [无畏宣传月鳞绮纪](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E5%AE%A3%E4%BC%A0%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%23) `111.3K 🔥` `NEW`
1. [灵魂摆渡电影全AI生成 (Soul Ferry movie is fully AI-generated)](https://s.weibo.com/weibo?q=%23%E7%81%B5%E9%AD%82%E6%91%86%E6%B8%A1%E7%94%B5%E5%BD%B1%E5%85%A8AI%E7%94%9F%E6%88%90%23) `1.2M 🔥` `+42%`
1. [哪吒造车3年烧掉183亿 (Nezha burned 18.3 billion in three years of building cars)](https://s.weibo.com/weibo?q=%23%E5%93%AA%E5%90%92%E9%80%A0%E8%BD%A63%E5%B9%B4%E7%83%A7%E6%8E%89183%E4%BA%BF%23) `869.2K 🔥` `+206%`
1. [中国工业成绩单亮了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%B7%A5%E4%B8%9A%E6%88%90%E7%BB%A9%E5%8D%95%E4%BA%AE%E4%BA%86%23) `672.7K 🔥` `+47%`
1. [BMW进入新世代 (BMW enters a new generation)](https://s.weibo.com/weibo?q=%23BMW%E8%BF%9B%E5%85%A5%E6%96%B0%E4%B8%96%E4%BB%A3%23) `670.8K 🔥` `+93%`
1. [义乌请量产吧](https://s.weibo.com/weibo?q=%23%E4%B9%89%E4%B9%8C%E8%AF%B7%E9%87%8F%E4%BA%A7%E5%90%A7%23) `645.4K 🔥` `+42%`
1. [樊振东与英伟达创始人打乒乓球 (Fan Zhendong plays table tennis with NVIDIA founder)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E4%B8%8E%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%88%9B%E5%A7%8B%E4%BA%BA%E6%89%93%E4%B9%92%E4%B9%93%E7%90%83%23) `631.0K 🔥` `+124%`
1. [飞猪发超级多多多多多多多免单券 (Fliggy issues free coupons for Super Lotto Lotto Lotto)](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E7%8C%AA%E5%8F%91%E8%B6%85%E7%BA%A7%E5%A4%9A%E5%A4%9A%E5%A4%9A%E5%A4%9A%E5%A4%9A%E5%A4%9A%E5%A4%9A%E5%85%8D%E5%8D%95%E5%88%B8%23) `498.8K 🔥` `+434%`
1. [谢娜 没票的朋友们别着急 (Xie Na, friends who don’t have tickets, don’t worry.)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%20%E6%B2%A1%E7%A5%A8%E7%9A%84%E6%9C%8B%E5%8F%8B%E4%BB%AC%E5%88%AB%E7%9D%80%E6%80%A5%23) `491.6K 🔥` `+159%`
1. [伊朗储油罐要满了](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%82%A8%E6%B2%B9%E7%BD%90%E8%A6%81%E6%BB%A1%E4%BA%86%23) `415.9K 🔥` `+47%`
1. [姚晨为救护车改道去世女子发声](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E6%99%A8%E4%B8%BA%E6%95%91%E6%8A%A4%E8%BD%A6%E6%94%B9%E9%81%93%E5%8E%BB%E4%B8%96%E5%A5%B3%E5%AD%90%E5%8F%91%E5%A3%B0%23) `415.6K 🔥` `+121%`
1. [女孩为何宁愿坐牢也不配合追回打赏](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E4%B8%BA%E4%BD%95%E5%AE%81%E6%84%BF%E5%9D%90%E7%89%A2%E4%B9%9F%E4%B8%8D%E9%85%8D%E5%90%88%E8%BF%BD%E5%9B%9E%E6%89%93%E8%B5%8F%23) `413.0K 🔥` `+126%`
1. [国内油价下调了](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%86%85%E6%B2%B9%E4%BB%B7%E4%B8%8B%E8%B0%83%E4%BA%86%23) `410.4K 🔥` `+146%`
1. [巴萨下架不当图片内容 (Barcelona removes inappropriate graphic content)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%90%A8%E4%B8%8B%E6%9E%B6%E4%B8%8D%E5%BD%93%E5%9B%BE%E7%89%87%E5%86%85%E5%AE%B9%23) `233.3K 🔥` `+44%`
1. [宁德时代新电池续航可超1500km](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E6%96%B0%E7%94%B5%E6%B1%A0%E7%BB%AD%E8%88%AA%E5%8F%AF%E8%B6%851500km%23) `227.9K 🔥` `+36%`
1. [巴萨 (Barcelona)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%90%A8%23) `227.6K 🔥` `+137%`
1. [走丢男童父母送女孩终身免费牛排卡](https://s.weibo.com/weibo?q=%23%E8%B5%B0%E4%B8%A2%E7%94%B7%E7%AB%A5%E7%88%B6%E6%AF%8D%E9%80%81%E5%A5%B3%E5%AD%A9%E7%BB%88%E8%BA%AB%E5%85%8D%E8%B4%B9%E7%89%9B%E6%8E%92%E5%8D%A1%23) `218.4K 🔥` `+33%`
1. [教育局回应学生暴雨天体测800米 (The Education Bureau responds to students’ rainstorm celestial body measurement of 800 meters)](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E5%B1%80%E5%9B%9E%E5%BA%94%E5%AD%A6%E7%94%9F%E6%9A%B4%E9%9B%A8%E5%A4%A9%E4%BD%93%E6%B5%8B800%E7%B1%B3%23) `215.6K 🔥` `+30%`
1. [乔布斯曾说绝不能让营销人员成为CEO (Steve Jobs once said that marketers should never be CEOs)](https://s.weibo.com/weibo?q=%23%E4%B9%94%E5%B8%83%E6%96%AF%E6%9B%BE%E8%AF%B4%E7%BB%9D%E4%B8%8D%E8%83%BD%E8%AE%A9%E8%90%A5%E9%94%80%E4%BA%BA%E5%91%98%E6%88%90%E4%B8%BACEO%23) `199.3K 🔥` `+124%`
1. [周杰伦认证邓紫棋改编的爱琴海 (Jay Chou certified Deng Ziqi's adaptation of Aegean Sea)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E8%AE%A4%E8%AF%81%E9%82%93%E7%B4%AB%E6%A3%8B%E6%94%B9%E7%BC%96%E7%9A%84%E7%88%B1%E7%90%B4%E6%B5%B7%23) `163.8K 🔥` `+67%`
1. [赵雨蝶一审死缓](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E9%9B%A8%E8%9D%B6%E4%B8%80%E5%AE%A1%E6%AD%BB%E7%BC%93%23) `153.9K 🔥` `+58%`
1. [宁德时代](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%23) `152.5K 🔥` `+62%`
1. [李荣浩直播手机掉水里了 (Li Ronghao dropped his phone into the water during live broadcast)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%E7%9B%B4%E6%92%AD%E6%89%8B%E6%9C%BA%E6%8E%89%E6%B0%B4%E9%87%8C%E4%BA%86%23) `137.8K 🔥` `+45%`
1. [肯德基多要酱收费](https://s.weibo.com/weibo?q=%23%E8%82%AF%E5%BE%B7%E5%9F%BA%E5%A4%9A%E8%A6%81%E9%85%B1%E6%94%B6%E8%B4%B9%23) `126.6K 🔥` `+33%`
1. [疑有中国女留学生被ICE当街逮捕 (Suspected Chinese female international student arrested on the street by ICE)](https://s.weibo.com/weibo?q=%23%E7%96%91%E6%9C%89%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%95%99%E5%AD%A6%E7%94%9F%E8%A2%ABICE%E5%BD%93%E8%A1%97%E9%80%AE%E6%8D%95%23) `119.5K 🔥` `+27%`
1. [猫界大佬路过白猫吓到静止](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E7%95%8C%E5%A4%A7%E4%BD%AC%E8%B7%AF%E8%BF%87%E7%99%BD%E7%8C%AB%E5%90%93%E5%88%B0%E9%9D%99%E6%AD%A2%23) `111.5K 🔥` `+23%`
1. [身上出现肉疙瘩警惕这4种瘤 (If you have pimples on your body, be wary of these 4 types of tumors)](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%B8%8A%E5%87%BA%E7%8E%B0%E8%82%89%E7%96%99%E7%98%A9%E8%AD%A6%E6%83%95%E8%BF%994%E7%A7%8D%E7%98%A4%23) `111.0K 🔥` `+86%`
1. [网传华晨宇演唱会因泼水节延期 (It is reported online that Hua Chenyu’s concert has been postponed due to the Water Splashing Festival)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%8D%8E%E6%99%A8%E5%AE%87%E6%BC%94%E5%94%B1%E4%BC%9A%E5%9B%A0%E6%B3%BC%E6%B0%B4%E8%8A%82%E5%BB%B6%E6%9C%9F%23) `111.0K 🔥` `+86%`
1. [人与人最大的区别就是出门 (The biggest difference between people is going out)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%8E%E4%BA%BA%E6%9C%80%E5%A4%A7%E7%9A%84%E5%8C%BA%E5%88%AB%E5%B0%B1%E6%98%AF%E5%87%BA%E9%97%A8%23) `110.5K 🔥` `+168%`
1. [特朗普称美伊停火到期将继续轰炸 (Trump says US-Iran bombings will continue if ceasefire expires)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E7%BE%8E%E4%BC%8A%E5%81%9C%E7%81%AB%E5%88%B0%E6%9C%9F%E5%B0%86%E7%BB%A7%E7%BB%AD%E8%BD%B0%E7%82%B8%23) `489.4K 🔥`
1. [亿万富豪教女儿如何看钱](https://s.weibo.com/weibo?q=%23%E4%BA%BF%E4%B8%87%E5%AF%8C%E8%B1%AA%E6%95%99%E5%A5%B3%E5%84%BF%E5%A6%82%E4%BD%95%E7%9C%8B%E9%92%B1%23) `469.1K 🔥`
1. [白鹿给助理呵呵做饭 (Bailu cooks for assistant Hehe)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%BB%99%E5%8A%A9%E7%90%86%E5%91%B5%E5%91%B5%E5%81%9A%E9%A5%AD%23) `204.3K 🔥`
1. [生了7个娃还想再生的男子年近50岁 (The man who gave birth to 7 babies and still wants to have another is nearly 50 years old)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E4%BA%867%E4%B8%AA%E5%A8%83%E8%BF%98%E6%83%B3%E5%86%8D%E7%94%9F%E7%9A%84%E7%94%B7%E5%AD%90%E5%B9%B4%E8%BF%9150%E5%B2%81%23) `193.6K 🔥`
1. [杨蓉面部烫伤恢复近照 (Recent photos of Yang Rong recovering from facial burns)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%93%89%E9%9D%A2%E9%83%A8%E7%83%AB%E4%BC%A4%E6%81%A2%E5%A4%8D%E8%BF%91%E7%85%A7%23) `183.5K 🔥`
1. [女子拍下日本地震时画面 (Woman captures footage of Japan earthquake)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8B%8D%E4%B8%8B%E6%97%A5%E6%9C%AC%E5%9C%B0%E9%9C%87%E6%97%B6%E7%94%BB%E9%9D%A2%23) `179.4K 🔥`
1. [小伙养6个弟妹又有7弟外婆发声](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E5%85%BB6%E4%B8%AA%E5%BC%9F%E5%A6%B9%E5%8F%88%E6%9C%897%E5%BC%9F%E5%A4%96%E5%A9%86%E5%8F%91%E5%A3%B0%23) `175.0K 🔥`
1. [解放军强硬回应台空军喊话 (The People's Liberation Army responds strongly to the Taiwan Air Force's call)](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E5%BC%BA%E7%A1%AC%E5%9B%9E%E5%BA%94%E5%8F%B0%E7%A9%BA%E5%86%9B%E5%96%8A%E8%AF%9D%23) `163.8K 🔥`
1. [迅猛龙开付费直播](https://s.weibo.com/weibo?q=%23%E8%BF%85%E7%8C%9B%E9%BE%99%E5%BC%80%E4%BB%98%E8%B4%B9%E7%9B%B4%E6%92%AD%23) `154.3K 🔥`
1. [郭晓婷王天辰 夫妻相 (Guo Xiaoting and Wang Tianchen husband and wife photos)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E5%A9%B7%E7%8E%8B%E5%A4%A9%E8%BE%B0%20%E5%A4%AB%E5%A6%BB%E7%9B%B8%23) `154.1K 🔥`
1. [伊朗导弹与防空系统实力](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E4%B8%8E%E9%98%B2%E7%A9%BA%E7%B3%BB%E7%BB%9F%E5%AE%9E%E5%8A%9B%23) `113.6K 🔥`
1. [时代少年团 团体工作室 (Times Youth League Group Studio)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E5%9B%A2%E4%BD%93%E5%B7%A5%E4%BD%9C%E5%AE%A4%23) `112.9K 🔥`
1. [女子34万装修踩坑极简风变灵堂风](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%9034%E4%B8%87%E8%A3%85%E4%BF%AE%E8%B8%A9%E5%9D%91%E6%9E%81%E7%AE%80%E9%A3%8E%E5%8F%98%E7%81%B5%E5%A0%82%E9%A3%8E%23) `112.6K 🔥`
1. [中韩同日表态 (China and South Korea expressed their stance on the same day)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%9F%A9%E5%90%8C%E6%97%A5%E8%A1%A8%E6%80%81%23) `409.7K 🔥` `-31%`
1. [男子心脏停跳2天后生还 (Man survives 2 days after cardiac arrest)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%BF%83%E8%84%8F%E5%81%9C%E8%B7%B32%E5%A4%A9%E5%90%8E%E7%94%9F%E8%BF%98%23) `118.3K 🔥` `-28%`

Updated at 2026-04-22 08:02:57

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
