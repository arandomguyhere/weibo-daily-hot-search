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

1. [短剧 变天 (Short drama: Change of weather)](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%20%E5%8F%98%E5%A4%A9%23) `1.5M 🔥` `NEW`
1. [十四届全国人大四次会议发布会](https://s.weibo.com/weibo?q=%23%E5%8D%81%E5%9B%9B%E5%B1%8A%E5%85%A8%E5%9B%BD%E4%BA%BA%E5%A4%A7%E5%9B%9B%E6%AC%A1%E4%BC%9A%E8%AE%AE%E5%8F%91%E5%B8%83%E4%BC%9A%23) `1.1M 🔥` `NEW`
1. [多架美军战机坠毁](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%9E%B6%E7%BE%8E%E5%86%9B%E6%88%98%E6%9C%BA%E5%9D%A0%E6%AF%81%23) `1.0M 🔥` `NEW`
1. [丁禹兮宋祖儿 司宫令](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%AE%8B%E7%A5%96%E5%84%BF%20%E5%8F%B8%E5%AE%AB%E4%BB%A4%23) `358.3K 🔥` `NEW`
1. [中方回应伊朗关闭霍尔木兹海峡](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E4%BC%8A%E6%9C%97%E5%85%B3%E9%97%AD%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%23) `343.3K 🔥` `NEW`
1. [卢昱晓短发](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E7%9F%AD%E5%8F%91%23) `335.2K 🔥` `NEW`
1. [赵樱子直播关掉美颜](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%A8%B1%E5%AD%90%E7%9B%B4%E6%92%AD%E5%85%B3%E6%8E%89%E7%BE%8E%E9%A2%9C%23) `329.4K 🔥` `NEW`
1. [吴宣仪 剩下的交给时间和报应](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%A3%E4%BB%AA%20%E5%89%A9%E4%B8%8B%E7%9A%84%E4%BA%A4%E7%BB%99%E6%97%B6%E9%97%B4%E5%92%8C%E6%8A%A5%E5%BA%94%23) `320.5K 🔥` `NEW`
1. [毛晓彤去了坦桑尼亚看狮子](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E6%99%93%E5%BD%A4%E5%8E%BB%E4%BA%86%E5%9D%A6%E6%A1%91%E5%B0%BC%E4%BA%9A%E7%9C%8B%E7%8B%AE%E5%AD%90%23) `240.4K 🔥` `NEW`
1. [英国派出战机](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E6%B4%BE%E5%87%BA%E6%88%98%E6%9C%BA%23) `227.3K 🔥` `NEW`
1. [李茂报平安 (Li Mao reported safety)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8C%82%E6%8A%A5%E5%B9%B3%E5%AE%89%23) `226.7K 🔥` `NEW`
1. [伊朗发动第10波攻势](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E5%8A%A8%E7%AC%AC10%E6%B3%A2%E6%94%BB%E5%8A%BF%23) `226.3K 🔥` `NEW`
1. [女儿喊话陈浩民夫妇平安回国](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E5%96%8A%E8%AF%9D%E9%99%88%E6%B5%A9%E6%B0%91%E5%A4%AB%E5%A6%87%E5%B9%B3%E5%AE%89%E5%9B%9E%E5%9B%BD%23) `224.7K 🔥` `NEW`
1. [网红辛巴在美国被网友偶遇](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E8%BE%9B%E5%B7%B4%E5%9C%A8%E7%BE%8E%E5%9B%BD%E8%A2%AB%E7%BD%91%E5%8F%8B%E5%81%B6%E9%81%87%23) `222.9K 🔥` `NEW`
1. [命运真的会提醒你适合走哪条路](https://s.weibo.com/weibo?q=%23%E5%91%BD%E8%BF%90%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%8F%90%E9%86%92%E4%BD%A0%E9%80%82%E5%90%88%E8%B5%B0%E5%93%AA%E6%9D%A1%E8%B7%AF%23) `213.4K 🔥` `NEW`
1. [中方回应是否会对伊朗提供军事支持](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E6%98%AF%E5%90%A6%E4%BC%9A%E5%AF%B9%E4%BC%8A%E6%9C%97%E6%8F%90%E4%BE%9B%E5%86%9B%E4%BA%8B%E6%94%AF%E6%8C%81%23) `190.8K 🔥` `NEW`
1. [日本动漫巨头封口性侵受害者](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%8A%A8%E6%BC%AB%E5%B7%A8%E5%A4%B4%E5%B0%81%E5%8F%A3%E6%80%A7%E4%BE%B5%E5%8F%97%E5%AE%B3%E8%80%85%23) `179.7K 🔥` `NEW`
1. [莫斯科遭炸弹袭击](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%96%AF%E7%A7%91%E9%81%AD%E7%82%B8%E5%BC%B9%E8%A2%AD%E5%87%BB%23) `168.0K 🔥` `NEW`
1. [陈昊宇剧宣 低头](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%8A%E5%AE%87%E5%89%A7%E5%AE%A3%20%E4%BD%8E%E5%A4%B4%23) `159.4K 🔥` `NEW`
1. [日本遭遇霍尔木兹休克](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%81%AD%E9%81%87%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E4%BC%91%E5%85%8B%23) `144.2K 🔥` `NEW`
1. [你抢张艺凡手机了吗 (Did you steal Zhang Yifan’s phone?)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%8A%A2%E5%BC%A0%E8%89%BA%E5%87%A1%E6%89%8B%E6%9C%BA%E4%BA%86%E5%90%97%23) `144.1K 🔥` `NEW`
1. [我国每用10度电就有近4度是绿电](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%AF%8F%E7%94%A810%E5%BA%A6%E7%94%B5%E5%B0%B1%E6%9C%89%E8%BF%914%E5%BA%A6%E6%98%AF%E7%BB%BF%E7%94%B5%23) `143.4K 🔥` `NEW`
1. [20后都避开网红名了吗](https://s.weibo.com/weibo?q=%2320%E5%90%8E%E9%83%BD%E9%81%BF%E5%BC%80%E7%BD%91%E7%BA%A2%E5%90%8D%E4%BA%86%E5%90%97%23) `142.2K 🔥` `NEW`
1. [对洗澡的开发还是太少了](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E6%B4%97%E6%BE%A1%E7%9A%84%E5%BC%80%E5%8F%91%E8%BF%98%E6%98%AF%E5%A4%AA%E5%B0%91%E4%BA%86%23) `140.2K 🔥` `NEW`
1. [伊朗一名中国公民遇难 (A Chinese citizen was killed in Iran)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%80%E5%90%8D%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E9%81%87%E9%9A%BE%23) `7.1M 🔥` `+290%`
1. [刘文祥麻辣烫](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%96%87%E7%A5%A5%E9%BA%BB%E8%BE%A3%E7%83%AB%23) `674.6K 🔥` `+415%`
1. [宝妈抱5月大婴儿扶梯上被玩具车撞倒](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E5%A6%88%E6%8A%B15%E6%9C%88%E5%A4%A7%E5%A9%B4%E5%84%BF%E6%89%B6%E6%A2%AF%E4%B8%8A%E8%A2%AB%E7%8E%A9%E5%85%B7%E8%BD%A6%E6%92%9E%E5%80%92%23) `439.9K 🔥` `+29%`
1. [白鹿洞洞鞋又双叒叕出圈 (Bailu Dong shoes are out of the circle again)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%B4%9E%E6%B4%9E%E9%9E%8B%E5%8F%88%E5%8F%8C%E5%8F%92%E5%8F%95%E5%87%BA%E5%9C%88%23) `420.3K 🔥` `+22%`
1. [猫 你怎么不等我死了才回来](https://s.weibo.com/weibo?q=%23%E7%8C%AB%20%E4%BD%A0%E6%80%8E%E4%B9%88%E4%B8%8D%E7%AD%89%E6%88%91%E6%AD%BB%E4%BA%86%E6%89%8D%E5%9B%9E%E6%9D%A5%23) `372.3K 🔥` `+108%`
1. [蓝莓剥皮](https://s.weibo.com/weibo?q=%23%E8%93%9D%E8%8E%93%E5%89%A5%E7%9A%AE%23) `368.8K 🔥` `+153%`
1. [中国游客迪拜遇机场停运进退两难 (Chinese tourists face dilemma in Dubai due to airport shutdown)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E8%BF%AA%E6%8B%9C%E9%81%87%E6%9C%BA%E5%9C%BA%E5%81%9C%E8%BF%90%E8%BF%9B%E9%80%80%E4%B8%A4%E9%9A%BE%23) `322.0K 🔥` `+71%`
1. [伊朗前总统内贾德亲信称其平安](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%89%8D%E6%80%BB%E7%BB%9F%E5%86%85%E8%B4%BE%E5%BE%B7%E4%BA%B2%E4%BF%A1%E7%A7%B0%E5%85%B6%E5%B9%B3%E5%AE%89%23) `251.5K 🔥` `+74%`
1. [李雨桐喊话薛之谦 (Li Yutong shouts to Joker Xue)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%A8%E6%A1%90%E5%96%8A%E8%AF%9D%E8%96%9B%E4%B9%8B%E8%B0%A6%23) `227.2K 🔥` `+38%`
1. [李雨桐说被薛之谦威胁](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%A8%E6%A1%90%E8%AF%B4%E8%A2%AB%E8%96%9B%E4%B9%8B%E8%B0%A6%E5%A8%81%E8%83%81%23) `223.1K 🔥` `+49%`
1. [坐在医院等结果突然被塞手里一个小孩 (Sitting in the hospital waiting for the result, a child was suddenly thrust into my hand.)](https://s.weibo.com/weibo?q=%23%E5%9D%90%E5%9C%A8%E5%8C%BB%E9%99%A2%E7%AD%89%E7%BB%93%E6%9E%9C%E7%AA%81%E7%84%B6%E8%A2%AB%E5%A1%9E%E6%89%8B%E9%87%8C%E4%B8%80%E4%B8%AA%E5%B0%8F%E5%AD%A9%23) `207.5K 🔥` `+66%`
1. [迪丽热巴闪耀巴黎 (Dilireba shines in Paris)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%97%AA%E8%80%80%E5%B7%B4%E9%BB%8E%23) `142.6K 🔥` `+44%`
1. [王楚然出个国怎么美成这样](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%87%BA%E4%B8%AA%E5%9B%BD%E6%80%8E%E4%B9%88%E7%BE%8E%E6%88%90%E8%BF%99%E6%A0%B7%23) `141.1K 🔥` `+34%`
1. [中国石油封涨停创近11年新高](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%9F%B3%E6%B2%B9%E5%B0%81%E6%B6%A8%E5%81%9C%E5%88%9B%E8%BF%9111%E5%B9%B4%E6%96%B0%E9%AB%98%23) `139.9K 🔥` `+38%`
1. [刘文祥 紫薯精](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%96%87%E7%A5%A5%20%E7%B4%AB%E8%96%AF%E7%B2%BE%23) `348.5K 🔥`
1. [女装牛仔裤也没有放过王楚然 (Women’s jeans didn’t let Wang Churan go either)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E8%A3%85%E7%89%9B%E4%BB%94%E8%A3%A4%E4%B9%9F%E6%B2%A1%E6%9C%89%E6%94%BE%E8%BF%87%E7%8E%8B%E6%A5%9A%E7%84%B6%23) `314.2K 🔥`
1. [投资贱金属](https://s.weibo.com/weibo?q=%23%E6%8A%95%E8%B5%84%E8%B4%B1%E9%87%91%E5%B1%9E%23) `144.9K 🔥`
1. [李昀锐还记得自己姓李不姓林吗](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E8%BF%98%E8%AE%B0%E5%BE%97%E8%87%AA%E5%B7%B1%E5%A7%93%E6%9D%8E%E4%B8%8D%E5%A7%93%E6%9E%97%E5%90%97%23) `143.3K 🔥`
1. [王鹤棣女友视角视频是白鹿拍的](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%A5%B3%E5%8F%8B%E8%A7%86%E8%A7%92%E8%A7%86%E9%A2%91%E6%98%AF%E7%99%BD%E9%B9%BF%E6%8B%8D%E7%9A%84%23) `142.1K 🔥`
1. [真的没人管管江西小炒吗 (Is it true that no one cares about Jiangxi Xiao Chao?)](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E7%9A%84%E6%B2%A1%E4%BA%BA%E7%AE%A1%E7%AE%A1%E6%B1%9F%E8%A5%BF%E5%B0%8F%E7%82%92%E5%90%97%23) `140.9K 🔥`
1. [男子6元买彩票留店里竟然中了707万 (A man bought a lottery ticket for 6 yuan and left it at the store, but he won 7.07 million)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%906%E5%85%83%E4%B9%B0%E5%BD%A9%E7%A5%A8%E7%95%99%E5%BA%97%E9%87%8C%E7%AB%9F%E7%84%B6%E4%B8%AD%E4%BA%86707%E4%B8%87%23) `361.2K 🔥` `-61%`
1. [白宫下令暂缓推进对台军售](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%AE%AB%E4%B8%8B%E4%BB%A4%E6%9A%82%E7%BC%93%E6%8E%A8%E8%BF%9B%E5%AF%B9%E5%8F%B0%E5%86%9B%E5%94%AE%23) `223.2K 🔥` `-34%`
1. [海口市监局回应椰树低俗广告](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%8F%A3%E5%B8%82%E7%9B%91%E5%B1%80%E5%9B%9E%E5%BA%94%E6%A4%B0%E6%A0%91%E4%BD%8E%E4%BF%97%E5%B9%BF%E5%91%8A%23) `207.4K 🔥` `-39%`
1. [伊朗导弹突破以色列防御系统 (Iranian missile breaks through Israeli defense system)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E7%AA%81%E7%A0%B4%E4%BB%A5%E8%89%B2%E5%88%97%E9%98%B2%E5%BE%A1%E7%B3%BB%E7%BB%9F%23) `207.3K 🔥` `-69%`
1. [迅猛龙自曝直播影响学业了 (Velociraptor revealed that live streaming affects his studies)](https://s.weibo.com/weibo?q=%23%E8%BF%85%E7%8C%9B%E9%BE%99%E8%87%AA%E6%9B%9D%E7%9B%B4%E6%92%AD%E5%BD%B1%E5%93%8D%E5%AD%A6%E4%B8%9A%E4%BA%86%23) `201.1K 🔥` `-38%`
1. [迪丽热巴扛起裙摆就走了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%89%9B%E8%B5%B7%E8%A3%99%E6%91%86%E5%B0%B1%E8%B5%B0%E4%BA%86%23) `145.0K 🔥` `-34%`
1. [男子烧烤店就餐发现茶壶内发霉 (Man found mold inside teapot while dining at barbecue restaurant)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%83%A7%E7%83%A4%E5%BA%97%E5%B0%B1%E9%A4%90%E5%8F%91%E7%8E%B0%E8%8C%B6%E5%A3%B6%E5%86%85%E5%8F%91%E9%9C%89%23) `141.5K 🔥` `-58%`

Updated at 2026-03-02 17:00:30

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
