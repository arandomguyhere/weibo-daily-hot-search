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

1. [日本横滨无头女尸确认为中国女子 (Headless female corpse in Yokohama, Japan identified as Chinese woman)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%A8%AA%E6%BB%A8%E6%97%A0%E5%A4%B4%E5%A5%B3%E5%B0%B8%E7%A1%AE%E8%AE%A4%E4%B8%BA%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%23) `1.4M 🔥` `NEW`
1. [探访三江源](https://s.weibo.com/weibo?q=%23%E6%8E%A2%E8%AE%BF%E4%B8%89%E6%B1%9F%E6%BA%90%23) `1.2M 🔥` `NEW`
1. [近视眼先享受世界](https://s.weibo.com/weibo?q=%23%E8%BF%91%E8%A7%86%E7%9C%BC%E5%85%88%E4%BA%AB%E5%8F%97%E4%B8%96%E7%95%8C%23) `1.2M 🔥` `NEW`
1. [特朗普一通电话毁了美国队](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E4%B8%80%E9%80%9A%E7%94%B5%E8%AF%9D%E6%AF%81%E4%BA%86%E7%BE%8E%E5%9B%BD%E9%98%9F%23) `579.9K 🔥` `NEW`
1. [广西救灾人员看到了蛇](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%95%91%E7%81%BE%E4%BA%BA%E5%91%98%E7%9C%8B%E5%88%B0%E4%BA%86%E8%9B%87%23) `578.9K 🔥` `NEW`
1. [广西因灾死亡6人失联11人](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E5%9B%A0%E7%81%BE%E6%AD%BB%E4%BA%A16%E4%BA%BA%E5%A4%B1%E8%81%9411%E4%BA%BA%23) `576.1K 🔥` `NEW`
1. [西班牙绝杀后C罗不断比手势](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E7%BB%9D%E6%9D%80%E5%90%8EC%E7%BD%97%E4%B8%8D%E6%96%AD%E6%AF%94%E6%89%8B%E5%8A%BF%23) `570.4K 🔥` `NEW`
1. [司晓迪说内娱没有她喜欢的小鲜肉了](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E6%99%93%E8%BF%AA%E8%AF%B4%E5%86%85%E5%A8%B1%E6%B2%A1%E6%9C%89%E5%A5%B9%E5%96%9C%E6%AC%A2%E7%9A%84%E5%B0%8F%E9%B2%9C%E8%82%89%E4%BA%86%23) `564.2K 🔥` `NEW`
1. [只有中国才能把年龄说得这么美](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E6%9C%89%E4%B8%AD%E5%9B%BD%E6%89%8D%E8%83%BD%E6%8A%8A%E5%B9%B4%E9%BE%84%E8%AF%B4%E5%BE%97%E8%BF%99%E4%B9%88%E7%BE%8E%23) `561.5K 🔥` `NEW`
1. [野狗骨头这段我真昏天地暗了](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E8%BF%99%E6%AE%B5%E6%88%91%E7%9C%9F%E6%98%8F%E5%A4%A9%E5%9C%B0%E6%9A%97%E4%BA%86%23) `558.8K 🔥` `NEW`
1. [虞书欣拍双轨和灿如繁星的时候 (When Yu Shuxin filmed Double Track and Can Like Stars)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%8B%8D%E5%8F%8C%E8%BD%A8%E5%92%8C%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%E7%9A%84%E6%97%B6%E5%80%99%23) `558.2K 🔥` `NEW`
1. [亚洲股市全线跳水原因](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E6%B4%B2%E8%82%A1%E5%B8%82%E5%85%A8%E7%BA%BF%E8%B7%B3%E6%B0%B4%E5%8E%9F%E5%9B%A0%23) `553.3K 🔥` `NEW`
1. [网传曾沛慈歌手将补位](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%9B%BE%E6%B2%9B%E6%85%88%E6%AD%8C%E6%89%8B%E5%B0%86%E8%A1%A5%E4%BD%8D%23) `549.3K 🔥` `NEW`
1. [全球首款AI智能体手机](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E9%A6%96%E6%AC%BEAI%E6%99%BA%E8%83%BD%E4%BD%93%E6%89%8B%E6%9C%BA%23) `546.5K 🔥` `NEW`
1. [人一定要频繁大量记录自己](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E5%AE%9A%E8%A6%81%E9%A2%91%E7%B9%81%E5%A4%A7%E9%87%8F%E8%AE%B0%E5%BD%95%E8%87%AA%E5%B7%B1%23) `540.8K 🔥` `NEW`
1. [第一次见这样的张子枫](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E8%BF%99%E6%A0%B7%E7%9A%84%E5%BC%A0%E5%AD%90%E6%9E%AB%23) `536.8K 🔥` `NEW`
1. [解放军抵达广西抗洪](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E6%8A%B5%E8%BE%BE%E5%B9%BF%E8%A5%BF%E6%8A%97%E6%B4%AA%23) `534.6K 🔥` `NEW`
1. [单依纯G社生图](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AFG%E7%A4%BE%E7%94%9F%E5%9B%BE%23) `531.0K 🔥` `NEW`
1. [广西的洪水很快要到广东了](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E7%9A%84%E6%B4%AA%E6%B0%B4%E5%BE%88%E5%BF%AB%E8%A6%81%E5%88%B0%E5%B9%BF%E4%B8%9C%E4%BA%86%23) `525.4K 🔥` `NEW`
1. [霸王茶姬设计师终于迎来了它的子期](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E8%AE%BE%E8%AE%A1%E5%B8%88%E7%BB%88%E4%BA%8E%E8%BF%8E%E6%9D%A5%E4%BA%86%E5%AE%83%E7%9A%84%E5%AD%90%E6%9C%9F%23) `522.6K 🔥` `NEW`
1. [王宝强冯清相恋八年仍未领证 (Wang Baoqiang and Feng Qing have not received the certificate of love after eight years of dating)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%9D%E5%BC%BA%E5%86%AF%E6%B8%85%E7%9B%B8%E6%81%8B%E5%85%AB%E5%B9%B4%E4%BB%8D%E6%9C%AA%E9%A2%86%E8%AF%81%23) `519.8K 🔥` `NEW`
1. [台风巴威登陆地点或有变](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E7%99%BB%E9%99%86%E5%9C%B0%E7%82%B9%E6%88%96%E6%9C%89%E5%8F%98%23) `510.5K 🔥` `NEW`
1. [林依晨带蛇皮袋录节目](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BE%9D%E6%99%A8%E5%B8%A6%E8%9B%87%E7%9A%AE%E8%A2%8B%E5%BD%95%E8%8A%82%E7%9B%AE%23) `509.3K 🔥` `NEW`
1. [Jennie一秒钟内从小鹿眼变成猎人眼](https://s.weibo.com/weibo?q=%23Jennie%E4%B8%80%E7%A7%92%E9%92%9F%E5%86%85%E4%BB%8E%E5%B0%8F%E9%B9%BF%E7%9C%BC%E5%8F%98%E6%88%90%E7%8C%8E%E4%BA%BA%E7%9C%BC%23) `505.6K 🔥` `NEW`
1. [张子枫驰援广西](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E6%9E%AB%E9%A9%B0%E6%8F%B4%E5%B9%BF%E8%A5%BF%23) `502.8K 🔥` `NEW`
1. [订书机没想过会在外卖行业发光发热](https://s.weibo.com/weibo?q=%23%E8%AE%A2%E4%B9%A6%E6%9C%BA%E6%B2%A1%E6%83%B3%E8%BF%87%E4%BC%9A%E5%9C%A8%E5%A4%96%E5%8D%96%E8%A1%8C%E4%B8%9A%E5%8F%91%E5%85%89%E5%8F%91%E7%83%AD%23) `498.7K 🔥` `NEW`
1. [曝张嘉倪二审才拿到抚养权](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BC%A0%E5%98%89%E5%80%AA%E4%BA%8C%E5%AE%A1%E6%89%8D%E6%8B%BF%E5%88%B0%E6%8A%9A%E5%85%BB%E6%9D%83%23) `491.7K 🔥` `NEW`
1. [苏醒回应说世界从此清静了](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%E5%9B%9E%E5%BA%94%E8%AF%B4%E4%B8%96%E7%95%8C%E4%BB%8E%E6%AD%A4%E6%B8%85%E9%9D%99%E4%BA%86%23) `489.8K 🔥` `NEW`
1. [湖北男子从12楼被大风吸出坠落](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8C%97%E7%94%B7%E5%AD%90%E4%BB%8E12%E6%A5%BC%E8%A2%AB%E5%A4%A7%E9%A3%8E%E5%90%B8%E5%87%BA%E5%9D%A0%E8%90%BD%23) `487.0K 🔥` `NEW`
1. [柳柳 我确实走了一些很臭的棋](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%9F%B3%20%E6%88%91%E7%A1%AE%E5%AE%9E%E8%B5%B0%E4%BA%86%E4%B8%80%E4%BA%9B%E5%BE%88%E8%87%AD%E7%9A%84%E6%A3%8B%23) `482.2K 🔥` `NEW`
1. [双胞胎见多了老双胞第一次见 (The twins have seen each other for the first time.)](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E8%83%9E%E8%83%8E%E8%A7%81%E5%A4%9A%E4%BA%86%E8%80%81%E5%8F%8C%E8%83%9E%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%23) `478.8K 🔥` `NEW`
1. [灿如繁星第一](https://s.weibo.com/weibo?q=%23%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%E7%AC%AC%E4%B8%80%23) `476.1K 🔥` `NEW`
1. [大爷爱犬去世后为陌生女子遛狗12年](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%88%B7%E7%88%B1%E7%8A%AC%E5%8E%BB%E4%B8%96%E5%90%8E%E4%B8%BA%E9%99%8C%E7%94%9F%E5%A5%B3%E5%AD%90%E9%81%9B%E7%8B%9712%E5%B9%B4%23) `473.1K 🔥` `NEW`
1. [男子回应被招嫖小卡片骗90多万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%9E%E5%BA%94%E8%A2%AB%E6%8B%9B%E5%AB%96%E5%B0%8F%E5%8D%A1%E7%89%87%E9%AA%9790%E5%A4%9A%E4%B8%87%23) `469.4K 🔥` `NEW`
1. [哈兰德姐姐比本人更像哈兰德](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%A7%90%E5%A7%90%E6%AF%94%E6%9C%AC%E4%BA%BA%E6%9B%B4%E5%83%8F%E5%93%88%E5%85%B0%E5%BE%B7%23) `464.5K 🔥` `NEW`
1. [大二女生贷款200万开民宿营收千万](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BA%8C%E5%A5%B3%E7%94%9F%E8%B4%B7%E6%AC%BE200%E4%B8%87%E5%BC%80%E6%B0%91%E5%AE%BF%E8%90%A5%E6%94%B6%E5%8D%83%E4%B8%87%23) `1.4M 🔥` `-35%`
1. [塞纳牧在蒙语里是最好的牧场 (Sennamu is the best pasture in Mongolian.)](https://s.weibo.com/weibo?q=%23%E5%A1%9E%E7%BA%B3%E7%89%A7%E5%9C%A8%E8%92%99%E8%AF%AD%E9%87%8C%E6%98%AF%E6%9C%80%E5%A5%BD%E7%9A%84%E7%89%A7%E5%9C%BA%23) `1.2M 🔥` `-38%`
1. [微信能不能出一个临时好友功能 (Can WeChat have a temporary friend function?)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%83%BD%E4%B8%8D%E8%83%BD%E5%87%BA%E4%B8%80%E4%B8%AA%E4%B8%B4%E6%97%B6%E5%A5%BD%E5%8F%8B%E5%8A%9F%E8%83%BD%23) `993.1K 🔥` `-54%`
1. [国足情况通报](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B3%E6%83%85%E5%86%B5%E9%80%9A%E6%8A%A5%23) `574.1K 🔥` `-72%`
1. [鹿晗 关晓彤 (Lu Han Guan Xiaotong)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%20%E5%85%B3%E6%99%93%E5%BD%A4%23) `566.6K 🔥` `-72%`
1. [关晓彤为庆祝小巷人家杀青剪的短发](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E4%B8%BA%E5%BA%86%E7%A5%9D%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B6%E6%9D%80%E9%9D%92%E5%89%AA%E7%9A%84%E7%9F%AD%E5%8F%91%23) `550.6K 🔥` `-72%`
1. [周星驰票房号召力](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E7%A5%A8%E6%88%BF%E5%8F%B7%E5%8F%AC%E5%8A%9B%23) `542.4K 🔥` `-71%`
1. [金子涵发明星名单 (Jin Jinhan's celebrity list)](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E5%8F%91%E6%98%8E%E6%98%9F%E5%90%8D%E5%8D%95%23) `531.4K 🔥` `-74%`
1. [养蛇场蛇逃出村民被咬伤陷入休克](https://s.weibo.com/weibo?q=%23%E5%85%BB%E8%9B%87%E5%9C%BA%E8%9B%87%E9%80%83%E5%87%BA%E6%9D%91%E6%B0%91%E8%A2%AB%E5%92%AC%E4%BC%A4%E9%99%B7%E5%85%A5%E4%BC%91%E5%85%8B%23) `527.8K 🔥` `-70%`
1. [日本49岁女子用针把室友嘴缝上 (49-year-old Japanese woman sews roommate's mouth shut with needles)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC49%E5%B2%81%E5%A5%B3%E5%AD%90%E7%94%A8%E9%92%88%E6%8A%8A%E5%AE%A4%E5%8F%8B%E5%98%B4%E7%BC%9D%E4%B8%8A%23) `515.8K 🔥` `-73%`
1. [张馨予团队睡了她还在修图](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A6%A8%E4%BA%88%E5%9B%A2%E9%98%9F%E7%9D%A1%E4%BA%86%E5%A5%B9%E8%BF%98%E5%9C%A8%E4%BF%AE%E5%9B%BE%23) `513.4K 🔥` `-73%`
1. [西班牙绝杀后C罗反应](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E7%BB%9D%E6%9D%80%E5%90%8EC%E7%BD%97%E5%8F%8D%E5%BA%94%23) `501.0K 🔥` `-76%`
1. [妈妈模仿孩子看电视的样子火了](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E6%A8%A1%E4%BB%BF%E5%AD%A9%E5%AD%90%E7%9C%8B%E7%94%B5%E8%A7%86%E7%9A%84%E6%A0%B7%E5%AD%90%E7%81%AB%E4%BA%86%23) `495.9K 🔥` `-72%`
1. [金子涵右耳几乎听不见](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%90%E6%B6%B5%E5%8F%B3%E8%80%B3%E5%87%A0%E4%B9%8E%E5%90%AC%E4%B8%8D%E8%A7%81%23) `484.5K 🔥` `-72%`
1. [papi酱迎来事业第n春](https://s.weibo.com/weibo?q=%23papi%E9%85%B1%E8%BF%8E%E6%9D%A5%E4%BA%8B%E4%B8%9A%E7%AC%ACn%E6%98%A5%23) `467.7K 🔥` `-75%`
1. [莫把股市当赌场](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%8A%8A%E8%82%A1%E5%B8%82%E5%BD%93%E8%B5%8C%E5%9C%BA%23) `462.7K 🔥` `-73%`

Updated at 2026-07-07 21:49:14

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
