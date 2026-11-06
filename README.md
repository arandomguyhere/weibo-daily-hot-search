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

1. [做了近视激光手术的人后来怎样了](https://s.weibo.com/weibo?q=%23%E5%81%9A%E4%BA%86%E8%BF%91%E8%A7%86%E6%BF%80%E5%85%89%E6%89%8B%E6%9C%AF%E7%9A%84%E4%BA%BA%E5%90%8E%E6%9D%A5%E6%80%8E%E6%A0%B7%E4%BA%86%23) `1.5M 🔥` `NEW`
1. [公司辞退用AI的员工被判赔4.6万元](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E8%BE%9E%E9%80%80%E7%94%A8AI%E7%9A%84%E5%91%98%E5%B7%A5%E8%A2%AB%E5%88%A4%E8%B5%944.6%E4%B8%87%E5%85%83%23) `926.9K 🔥` `NEW`
1. [万千气象看广东](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%B0%94%E8%B1%A1%E7%9C%8B%E5%B9%BF%E4%B8%9C%23) `710.6K 🔥` `NEW`
1. [第二代海豹07首搭百万级悬架](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%8C%E4%BB%A3%E6%B5%B7%E8%B1%B907%E9%A6%96%E6%90%AD%E7%99%BE%E4%B8%87%E7%BA%A7%E6%82%AC%E6%9E%B6%23) `708.9K 🔥` `NEW`
1. [警方通报孙某军因情感纠纷行凶](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E5%AD%99%E6%9F%90%E5%86%9B%E5%9B%A0%E6%83%85%E6%84%9F%E7%BA%A0%E7%BA%B7%E8%A1%8C%E5%87%B6%23) `533.9K 🔥` `NEW`
1. [武大回应网传学生诱骗同学去缅甸](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A4%A7%E5%9B%9E%E5%BA%94%E7%BD%91%E4%BC%A0%E5%AD%A6%E7%94%9F%E8%AF%B1%E9%AA%97%E5%90%8C%E5%AD%A6%E5%8E%BB%E7%BC%85%E7%94%B8%23) `525.8K 🔥` `NEW`
1. [金鸡奖](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B8%A1%E5%A5%96%23) `423.6K 🔥` `NEW`
1. [网友造谣花260万登顶珠峰被罚](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E9%80%A0%E8%B0%A3%E8%8A%B1260%E4%B8%87%E7%99%BB%E9%A1%B6%E7%8F%A0%E5%B3%B0%E8%A2%AB%E7%BD%9A%23) `421.6K 🔥` `NEW`
1. [新娘入场摔倒主持人神级救场](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E5%85%A5%E5%9C%BA%E6%91%94%E5%80%92%E4%B8%BB%E6%8C%81%E4%BA%BA%E7%A5%9E%E7%BA%A7%E6%95%91%E5%9C%BA%23) `420.4K 🔥` `NEW`
1. [皮肤一碰就破女孩父母称不生二胎](https://s.weibo.com/weibo?q=%23%E7%9A%AE%E8%82%A4%E4%B8%80%E7%A2%B0%E5%B0%B1%E7%A0%B4%E5%A5%B3%E5%AD%A9%E7%88%B6%E6%AF%8D%E7%A7%B0%E4%B8%8D%E7%94%9F%E4%BA%8C%E8%83%8E%23) `409.2K 🔥` `NEW`
1. [中国AI短剧被韩配搬运](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BDAI%E7%9F%AD%E5%89%A7%E8%A2%AB%E9%9F%A9%E9%85%8D%E6%90%AC%E8%BF%90%23) `409.1K 🔥` `NEW`
1. [仰望U9X跑出503公里时速](https://s.weibo.com/weibo?q=%23%E4%BB%B0%E6%9C%9BU9X%E8%B7%91%E5%87%BA503%E5%85%AC%E9%87%8C%E6%97%B6%E9%80%9F%23) `405.9K 🔥` `NEW`
1. [11岁女童遭性侵被困宾馆5小时](https://s.weibo.com/weibo?q=%2311%E5%B2%81%E5%A5%B3%E7%AB%A5%E9%81%AD%E6%80%A7%E4%BE%B5%E8%A2%AB%E5%9B%B0%E5%AE%BE%E9%A6%865%E5%B0%8F%E6%97%B6%23) `404.6K 🔥` `NEW`
1. [粤语连出轨都这么有氛围感](https://s.weibo.com/weibo?q=%23%E7%B2%A4%E8%AF%AD%E8%BF%9E%E5%87%BA%E8%BD%A8%E9%83%BD%E8%BF%99%E4%B9%88%E6%9C%89%E6%B0%9B%E5%9B%B4%E6%84%9F%23) `403.9K 🔥` `NEW`
1. [张萌说的是哪个大IP](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%90%8C%E8%AF%B4%E7%9A%84%E6%98%AF%E5%93%AA%E4%B8%AA%E5%A4%A7IP%23) `402.0K 🔥` `NEW`
1. [曝乔欣有孩子了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%B9%94%E6%AC%A3%E6%9C%89%E5%AD%A9%E5%AD%90%E4%BA%86%23) `400.5K 🔥` `NEW`
1. [王子璇把文吉儿的两头退路都堵死了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E6%8A%8A%E6%96%87%E5%90%89%E5%84%BF%E7%9A%84%E4%B8%A4%E5%A4%B4%E9%80%80%E8%B7%AF%E9%83%BD%E5%A0%B5%E6%AD%BB%E4%BA%86%23) `398.8K 🔥` `NEW`
1. [许飞只去了厉娜分手那年的超女聚会](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E5%8F%AA%E5%8E%BB%E4%BA%86%E5%8E%89%E5%A8%9C%E5%88%86%E6%89%8B%E9%82%A3%E5%B9%B4%E7%9A%84%E8%B6%85%E5%A5%B3%E8%81%9A%E4%BC%9A%23) `396.8K 🔥` `NEW`
1. [男子称妙瓦底男孩被活埋](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%A7%B0%E5%A6%99%E7%93%A6%E5%BA%95%E7%94%B7%E5%AD%A9%E8%A2%AB%E6%B4%BB%E5%9F%8B%23) `395.7K 🔥` `NEW`
1. [2人灌醉女童性侵后多次串供](https://s.weibo.com/weibo?q=%232%E4%BA%BA%E7%81%8C%E9%86%89%E5%A5%B3%E7%AB%A5%E6%80%A7%E4%BE%B5%E5%90%8E%E5%A4%9A%E6%AC%A1%E4%B8%B2%E4%BE%9B%23) `395.7K 🔥` `NEW`
1. [马天宇没去的剧疑似是陈情令](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E6%B2%A1%E5%8E%BB%E7%9A%84%E5%89%A7%E7%96%91%E4%BC%BC%E6%98%AF%E9%99%88%E6%83%85%E4%BB%A4%23) `395.2K 🔥` `NEW`
1. [侯明昊粉丝的万元花法太敢想](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E7%B2%89%E4%B8%9D%E7%9A%84%E4%B8%87%E5%85%83%E8%8A%B1%E6%B3%95%E5%A4%AA%E6%95%A2%E6%83%B3%23) `394.8K 🔥` `NEW`
1. [特朗普称将很快决定是否打伊朗](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E5%B0%86%E5%BE%88%E5%BF%AB%E5%86%B3%E5%AE%9A%E6%98%AF%E5%90%A6%E6%89%93%E4%BC%8A%E6%9C%97%23) `394.6K 🔥` `NEW`
1. [青稚白小纯和好 全联盟开始狼人杀](https://s.weibo.com/weibo?q=%23%E9%9D%92%E7%A8%9A%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%92%8C%E5%A5%BD%20%E5%85%A8%E8%81%94%E7%9B%9F%E5%BC%80%E5%A7%8B%E7%8B%BC%E4%BA%BA%E6%9D%80%23) `394.0K 🔥` `NEW`
1. [伞兵对青稚说我没蛐蛐](https://s.weibo.com/weibo?q=%23%E4%BC%9E%E5%85%B5%E5%AF%B9%E9%9D%92%E7%A8%9A%E8%AF%B4%E6%88%91%E6%B2%A1%E8%9B%90%E8%9B%90%23) `393.7K 🔥` `NEW`
1. [许飞 厉娜幸福的话其他人呛死也没事](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%20%E5%8E%89%E5%A8%9C%E5%B9%B8%E7%A6%8F%E7%9A%84%E8%AF%9D%E5%85%B6%E4%BB%96%E4%BA%BA%E5%91%9B%E6%AD%BB%E4%B9%9F%E6%B2%A1%E4%BA%8B%23) `393.5K 🔥` `NEW`
1. [曝白鹿将录制我们来了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BD%E9%B9%BF%E5%B0%86%E5%BD%95%E5%88%B6%E6%88%91%E4%BB%AC%E6%9D%A5%E4%BA%86%23) `392.9K 🔥` `NEW`
1. [MAC长文回应SAKEE](https://s.weibo.com/weibo?q=%23MAC%E9%95%BF%E6%96%87%E5%9B%9E%E5%BA%94SAKEE%23) `392.7K 🔥` `NEW`
1. [女子带娃仅点6元豆芽连吃7碗米饭](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B8%A6%E5%A8%83%E4%BB%85%E7%82%B96%E5%85%83%E8%B1%86%E8%8A%BD%E8%BF%9E%E5%90%837%E7%A2%97%E7%B1%B3%E9%A5%AD%23) `392.7K 🔥` `NEW`
1. [金大川天猫直播演绎羽绒新穿法](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%A4%A7%E5%B7%9D%E5%A4%A9%E7%8C%AB%E7%9B%B4%E6%92%AD%E6%BC%94%E7%BB%8E%E7%BE%BD%E7%BB%92%E6%96%B0%E7%A9%BF%E6%B3%95%23) `391.0K 🔥` `NEW`
1. [要求新娘借婚房酒店已致歉拒绝退款](https://s.weibo.com/weibo?q=%23%E8%A6%81%E6%B1%82%E6%96%B0%E5%A8%98%E5%80%9F%E5%A9%9A%E6%88%BF%E9%85%92%E5%BA%97%E5%B7%B2%E8%87%B4%E6%AD%89%E6%8B%92%E7%BB%9D%E9%80%80%E6%AC%BE%23) `389.6K 🔥` `NEW`
1. [万斯与特朗普切割瞄准2028总统位](https://s.weibo.com/weibo?q=%23%E4%B8%87%E6%96%AF%E4%B8%8E%E7%89%B9%E6%9C%97%E6%99%AE%E5%88%87%E5%89%B2%E7%9E%84%E5%87%862028%E6%80%BB%E7%BB%9F%E4%BD%8D%23) `387.9K 🔥` `NEW`
1. [ZmjjKK XLG](https://s.weibo.com/weibo?q=%23ZmjjKK%20XLG%23) `387.7K 🔥` `NEW`
1. [赵丽颖金鸡奖大光明造型](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E9%87%91%E9%B8%A1%E5%A5%96%E5%A4%A7%E5%85%89%E6%98%8E%E9%80%A0%E5%9E%8B%23) `383.9K 🔥` `NEW`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `383.0K 🔥` `NEW`
1. [文吉儿的八年不是一句忘了就能带过](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%E7%9A%84%E5%85%AB%E5%B9%B4%E4%B8%8D%E6%98%AF%E4%B8%80%E5%8F%A5%E5%BF%98%E4%BA%86%E5%B0%B1%E8%83%BD%E5%B8%A6%E8%BF%87%23) `380.0K 🔥` `NEW`
1. [纯稚 麦琳李行亮](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%A8%9A%20%E9%BA%A6%E7%90%B3%E6%9D%8E%E8%A1%8C%E4%BA%AE%23) `309.5K 🔥` `NEW`
1. [张萌马天宇矛盾 看似最小实则最大](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%90%8C%E9%A9%AC%E5%A4%A9%E5%AE%87%E7%9F%9B%E7%9B%BE%20%E7%9C%8B%E4%BC%BC%E6%9C%80%E5%B0%8F%E5%AE%9E%E5%88%99%E6%9C%80%E5%A4%A7%23) `286.8K 🔥` `NEW`
1. [身体代谢正在变差的6个表现](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BD%93%E4%BB%A3%E8%B0%A2%E6%AD%A3%E5%9C%A8%E5%8F%98%E5%B7%AE%E7%9A%846%E4%B8%AA%E8%A1%A8%E7%8E%B0%23) `281.9K 🔥` `NEW`
1. [白鹿百万赞视频下沉口碑](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%99%BE%E4%B8%87%E8%B5%9E%E8%A7%86%E9%A2%91%E4%B8%8B%E6%B2%89%E5%8F%A3%E7%A2%91%23) `279.9K 🔥` `NEW`
1. [黑龙江鹤岗一套房以11元拍出](https://s.weibo.com/weibo?q=%23%E9%BB%91%E9%BE%99%E6%B1%9F%E9%B9%A4%E5%B2%97%E4%B8%80%E5%A5%97%E6%88%BF%E4%BB%A511%E5%85%83%E6%8B%8D%E5%87%BA%23) `237.3K 🔥` `NEW`
1. [马天宇这个提醒真的很直接了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E8%BF%99%E4%B8%AA%E6%8F%90%E9%86%92%E7%9C%9F%E7%9A%84%E5%BE%88%E7%9B%B4%E6%8E%A5%E4%BA%86%23) `230.7K 🔥` `NEW`
1. [历届点亮金鸡嘉宾](https://s.weibo.com/weibo?q=%23%E5%8E%86%E5%B1%8A%E7%82%B9%E4%BA%AE%E9%87%91%E9%B8%A1%E5%98%89%E5%AE%BE%23) `204.1K 🔥` `NEW`
1. [曝钟汉良秘密隐婚](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%92%9F%E6%B1%89%E8%89%AF%E7%A7%98%E5%AF%86%E9%9A%90%E5%A9%9A%23) `191.6K 🔥` `NEW`
1. [感觉钱根本花不完还拼什么](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E9%92%B1%E6%A0%B9%E6%9C%AC%E8%8A%B1%E4%B8%8D%E5%AE%8C%E8%BF%98%E6%8B%BC%E4%BB%80%E4%B9%88%23) `185.9K 🔥` `NEW`
1. [白小纯青稚 窒息](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E9%9D%92%E7%A8%9A%20%E7%AA%92%E6%81%AF%23) `182.8K 🔥` `NEW`
1. [谁蛐蛐青稚了](https://s.weibo.com/weibo?q=%23%E8%B0%81%E8%9B%90%E8%9B%90%E9%9D%92%E7%A8%9A%E4%BA%86%23) `182.4K 🔥` `NEW`
1. [白小纯回到房间发现青稚被子没了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%9B%9E%E5%88%B0%E6%88%BF%E9%97%B4%E5%8F%91%E7%8E%B0%E9%9D%92%E7%A8%9A%E8%A2%AB%E5%AD%90%E6%B2%A1%E4%BA%86%23) `182.3K 🔥` `NEW`
1. [龙丹妮在天娱时期解约的艺人](https://s.weibo.com/weibo?q=%23%E9%BE%99%E4%B8%B9%E5%A6%AE%E5%9C%A8%E5%A4%A9%E5%A8%B1%E6%97%B6%E6%9C%9F%E8%A7%A3%E7%BA%A6%E7%9A%84%E8%89%BA%E4%BA%BA%23) `156.1K 🔥` `NEW`
1. [晋妈一家与李勒优事件被指剧本](https://s.weibo.com/weibo?q=%23%E6%99%8B%E5%A6%88%E4%B8%80%E5%AE%B6%E4%B8%8E%E6%9D%8E%E5%8B%92%E4%BC%98%E4%BA%8B%E4%BB%B6%E8%A2%AB%E6%8C%87%E5%89%A7%E6%9C%AC%23) `153.1K 🔥` `NEW`
1. [丈夫发现60万被妻子转走幼子非亲生](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E5%8F%91%E7%8E%B060%E4%B8%87%E8%A2%AB%E5%A6%BB%E5%AD%90%E8%BD%AC%E8%B5%B0%E5%B9%BC%E5%AD%90%E9%9D%9E%E4%BA%B2%E7%94%9F%23) `153.0K 🔥` `NEW`
1. [商南命案嫌犯尸体废弃房屋中被发现](https://s.weibo.com/weibo?q=%23%E5%95%86%E5%8D%97%E5%91%BD%E6%A1%88%E5%AB%8C%E7%8A%AF%E5%B0%B8%E4%BD%93%E5%BA%9F%E5%BC%83%E6%88%BF%E5%B1%8B%E4%B8%AD%E8%A2%AB%E5%8F%91%E7%8E%B0%23) `149.3K 🔥` `NEW`

Updated at 2026-11-06 19:30:24

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
