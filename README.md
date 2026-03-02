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

1. [男子6元买彩票留店里竟然中了707万 (A man bought a lottery ticket for 6 yuan and left it at the store, but he won 7.07 million)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%906%E5%85%83%E4%B9%B0%E5%BD%A9%E7%A5%A8%E7%95%99%E5%BA%97%E9%87%8C%E7%AB%9F%E7%84%B6%E4%B8%AD%E4%BA%86707%E4%B8%87%23) `346.1K 🔥` `NEW`
1. [探秘布洛芬止痛匠心](https://s.weibo.com/weibo?q=%23%E6%8E%A2%E7%A7%98%E5%B8%83%E6%B4%9B%E8%8A%AC%E6%AD%A2%E7%97%9B%E5%8C%A0%E5%BF%83%23) `321.9K 🔥` `NEW`
1. [豆瓣发致歉信](https://s.weibo.com/weibo?q=%23%E8%B1%86%E7%93%A3%E5%8F%91%E8%87%B4%E6%AD%89%E4%BF%A1%23) `250.0K 🔥` `NEW`
1. [2026全国两会](https://s.weibo.com/weibo?q=%232026%E5%85%A8%E5%9B%BD%E4%B8%A4%E4%BC%9A%23) `248.5K 🔥` `NEW`
1. [刘文祥 紫薯精](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%96%87%E7%A5%A5%20%E7%B4%AB%E8%96%AF%E7%B2%BE%23) `240.5K 🔥` `NEW`
1. [女装牛仔裤也没有放过王楚然](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E8%A3%85%E7%89%9B%E4%BB%94%E8%A3%A4%E4%B9%9F%E6%B2%A1%E6%9C%89%E6%94%BE%E8%BF%87%E7%8E%8B%E6%A5%9A%E7%84%B6%23) `236.8K 🔥` `NEW`
1. [伊朗的致命隐患是内奸](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%9A%84%E8%87%B4%E5%91%BD%E9%9A%90%E6%82%A3%E6%98%AF%E5%86%85%E5%A5%B8%23) `234.0K 🔥` `NEW`
1. [迪丽热巴扛起裙摆就走了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%89%9B%E8%B5%B7%E8%A3%99%E6%91%86%E5%B0%B1%E8%B5%B0%E4%BA%86%23) `225.7K 🔥` `NEW`
1. [男子烧烤店就餐发现茶壶内发霉](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%83%A7%E7%83%A4%E5%BA%97%E5%B0%B1%E9%A4%90%E5%8F%91%E7%8E%B0%E8%8C%B6%E5%A3%B6%E5%86%85%E5%8F%91%E9%9C%89%23) `224.7K 🔥` `NEW`
1. [建议全民发放500元通用消费券](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%85%A8%E6%B0%91%E5%8F%91%E6%94%BE500%E5%85%83%E9%80%9A%E7%94%A8%E6%B6%88%E8%B4%B9%E5%88%B8%23) `221.1K 🔥` `NEW`
1. [迅猛龙自曝直播影响学业了 (Velociraptor revealed that live streaming affects his studies)](https://s.weibo.com/weibo?q=%23%E8%BF%85%E7%8C%9B%E9%BE%99%E8%87%AA%E6%9B%9D%E7%9B%B4%E6%92%AD%E5%BD%B1%E5%93%8D%E5%AD%A6%E4%B8%9A%E4%BA%86%23) `159.8K 🔥` `NEW`
1. [中国石油封涨停创近11年新高](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%9F%B3%E6%B2%B9%E5%B0%81%E6%B6%A8%E5%81%9C%E5%88%9B%E8%BF%9111%E5%B9%B4%E6%96%B0%E9%AB%98%23) `159.6K 🔥` `NEW`
1. [中国金球奖](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%87%91%E7%90%83%E5%A5%96%23) `159.5K 🔥` `NEW`
1. [坐在医院等结果突然被塞手里一个小孩](https://s.weibo.com/weibo?q=%23%E5%9D%90%E5%9C%A8%E5%8C%BB%E9%99%A2%E7%AD%89%E7%BB%93%E6%9E%9C%E7%AA%81%E7%84%B6%E8%A2%AB%E5%A1%9E%E6%89%8B%E9%87%8C%E4%B8%80%E4%B8%AA%E5%B0%8F%E5%AD%A9%23) `159.5K 🔥` `NEW`
1. [吴京 战狼不干这个](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%20%E6%88%98%E7%8B%BC%E4%B8%8D%E5%B9%B2%E8%BF%99%E4%B8%AA%23) `159.5K 🔥` `NEW`
1. [猫 你怎么不等我死了才回来](https://s.weibo.com/weibo?q=%23%E7%8C%AB%20%E4%BD%A0%E6%80%8E%E4%B9%88%E4%B8%8D%E7%AD%89%E6%88%91%E6%AD%BB%E4%BA%86%E6%89%8D%E5%9B%9E%E6%9D%A5%23) `141.5K 🔥` `NEW`
1. [宝妈抱5月大婴儿扶梯上被玩具车撞倒](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E5%A6%88%E6%8A%B15%E6%9C%88%E5%A4%A7%E5%A9%B4%E5%84%BF%E6%89%B6%E6%A2%AF%E4%B8%8A%E8%A2%AB%E7%8E%A9%E5%85%B7%E8%BD%A6%E6%92%9E%E5%80%92%23) `128.8K 🔥` `NEW`
1. [蓝莓剥皮](https://s.weibo.com/weibo?q=%23%E8%93%9D%E8%8E%93%E5%89%A5%E7%9A%AE%23) `112.8K 🔥` `NEW`
1. [王楚然出个国怎么美成这样](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%87%BA%E4%B8%AA%E5%9B%BD%E6%80%8E%E4%B9%88%E7%BE%8E%E6%88%90%E8%BF%99%E6%A0%B7%23) `104.9K 🔥` `NEW`
1. [赵晴剧里这样郑业成没法不心动](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%99%B4%E5%89%A7%E9%87%8C%E8%BF%99%E6%A0%B7%E9%83%91%E4%B8%9A%E6%88%90%E6%B2%A1%E6%B3%95%E4%B8%8D%E5%BF%83%E5%8A%A8%23) `100.3K 🔥` `NEW`
1. [新鸳鸯蝴蝶梦在外网火爆了 (The new "Mandarin Duck and Butterfly Dream" is popular on the Internet)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E9%B8%B3%E9%B8%AF%E8%9D%B4%E8%9D%B6%E6%A2%A6%E5%9C%A8%E5%A4%96%E7%BD%91%E7%81%AB%E7%88%86%E4%BA%86%23) `100.1K 🔥` `NEW`
1. [林一 国产马丁](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%B8%80%20%E5%9B%BD%E4%BA%A7%E9%A9%AC%E4%B8%81%23) `98.1K 🔥` `NEW`
1. [朋友圈置顶分享胶卷](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E7%BD%AE%E9%A1%B6%E5%88%86%E4%BA%AB%E8%83%B6%E5%8D%B7%23) `95.3K 🔥` `NEW`
1. [女子称新买LV羽绒服穿3小时掉色](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E6%96%B0%E4%B9%B0LV%E7%BE%BD%E7%BB%92%E6%9C%8D%E7%A9%BF3%E5%B0%8F%E6%97%B6%E6%8E%89%E8%89%B2%23) `94.1K 🔥` `NEW`
1. [为什么一直觉得妈妈三十多](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%80%E7%9B%B4%E8%A7%89%E5%BE%97%E5%A6%88%E5%A6%88%E4%B8%89%E5%8D%81%E5%A4%9A%23) `91.3K 🔥` `NEW`
1. [大早上以为自己进平行世界了](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E6%97%A9%E4%B8%8A%E4%BB%A5%E4%B8%BA%E8%87%AA%E5%B7%B1%E8%BF%9B%E5%B9%B3%E8%A1%8C%E4%B8%96%E7%95%8C%E4%BA%86%23) `91.3K 🔥` `NEW`
1. [海口市监局回应椰树低俗广告](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%8F%A3%E5%B8%82%E7%9B%91%E5%B1%80%E5%9B%9E%E5%BA%94%E6%A4%B0%E6%A0%91%E4%BD%8E%E4%BF%97%E5%B9%BF%E5%91%8A%23) `812.2K 🔥` `+215%`
1. [刘文祥麻辣烫](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%96%87%E7%A5%A5%E9%BA%BB%E8%BE%A3%E7%83%AB%23) `654.6K 🔥` `+465%`
1. [白宫下令暂缓推进对台军售](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%AE%AB%E4%B8%8B%E4%BB%A4%E6%9A%82%E7%BC%93%E6%8E%A8%E8%BF%9B%E5%AF%B9%E5%8F%B0%E5%86%9B%E5%94%AE%23) `296.7K 🔥` `+47%`
1. [当你发现奶茶袋可以防油溅](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BD%A0%E5%8F%91%E7%8E%B0%E5%A5%B6%E8%8C%B6%E8%A2%8B%E5%8F%AF%E4%BB%A5%E9%98%B2%E6%B2%B9%E6%BA%85%23) `245.8K 🔥` `+55%`
1. [伊朗导弹绕过拦截击中耶路撒冷 (Iranian missile bypasses interceptor and hits Jerusalem)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E7%BB%95%E8%BF%87%E6%8B%A6%E6%88%AA%E5%87%BB%E4%B8%AD%E8%80%B6%E8%B7%AF%E6%92%92%E5%86%B7%23) `244.1K 🔥` `+25%`
1. [伊朗大量无人机列阵地下隧道](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A4%A7%E9%87%8F%E6%97%A0%E4%BA%BA%E6%9C%BA%E5%88%97%E9%98%B5%E5%9C%B0%E4%B8%8B%E9%9A%A7%E9%81%93%23) `239.3K 🔥` `+26%`
1. [以色列袭击黎巴嫩致31人死](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E8%A2%AD%E5%87%BB%E9%BB%8E%E5%B7%B4%E5%AB%A9%E8%87%B431%E4%BA%BA%E6%AD%BB%23) `217.1K 🔥` `+74%`
1. [小鹏第二代VLA妈妈都爱开的国民智驾 (Xiaopeng’s second-generation VLA is a national smart car that mothers love to drive.)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8F%E7%AC%AC%E4%BA%8C%E4%BB%A3VLA%E5%A6%88%E5%A6%88%E9%83%BD%E7%88%B1%E5%BC%80%E7%9A%84%E5%9B%BD%E6%B0%91%E6%99%BA%E9%A9%BE%23) `192.4K 🔥` `+65%`
1. [boss直聘回应网传伊朗急招炮兵图](https://s.weibo.com/weibo?q=%23boss%E7%9B%B4%E8%81%98%E5%9B%9E%E5%BA%94%E7%BD%91%E4%BC%A0%E4%BC%8A%E6%9C%97%E6%80%A5%E6%8B%9B%E7%82%AE%E5%85%B5%E5%9B%BE%23) `192.4K 🔥` `+33%`
1. [李雨桐说被薛之谦威胁](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%A8%E6%A1%90%E8%AF%B4%E8%A2%AB%E8%96%9B%E4%B9%8B%E8%B0%A6%E5%A8%81%E8%83%81%23) `192.1K 🔥` `+48%`
1. [伊朗导弹突破以色列防御系统 (Iranian missile breaks through Israeli defense system)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E7%AA%81%E7%A0%B4%E4%BB%A5%E8%89%B2%E5%88%97%E9%98%B2%E5%BE%A1%E7%B3%BB%E7%BB%9F%23) `1.1M 🔥`
1. [骏马闹元宵贺卡](https://s.weibo.com/weibo?q=%23%E9%AA%8F%E9%A9%AC%E9%97%B9%E5%85%83%E5%AE%B5%E8%B4%BA%E5%8D%A1%23) `657.3K 🔥`
1. [孙千的cp玄学又显灵了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E7%9A%84cp%E7%8E%84%E5%AD%A6%E5%8F%88%E6%98%BE%E7%81%B5%E4%BA%86%23) `230.6K 🔥`
1. [伊朗导弹摧毁阿联酋萨德系统](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E6%91%A7%E6%AF%81%E9%98%BF%E8%81%94%E9%85%8B%E8%90%A8%E5%BE%B7%E7%B3%BB%E7%BB%9F%23) `229.7K 🔥`
1. [李昀锐还记得自己姓李不姓林吗](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E8%BF%98%E8%AE%B0%E5%BE%97%E8%87%AA%E5%B7%B1%E5%A7%93%E6%9D%8E%E4%B8%8D%E5%A7%93%E6%9E%97%E5%90%97%23) `215.9K 🔥`
1. [在媒婆帮助下相亲有了退展](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%AA%92%E5%A9%86%E5%B8%AE%E5%8A%A9%E4%B8%8B%E7%9B%B8%E4%BA%B2%E6%9C%89%E4%BA%86%E9%80%80%E5%B1%95%23) `99.6K 🔥`
1. [家属否认内贾德死亡 (Family denies Ahmadinejad's death)](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E5%B1%9E%E5%90%A6%E8%AE%A4%E5%86%85%E8%B4%BE%E5%BE%B7%E6%AD%BB%E4%BA%A1%23) `365.1K 🔥` `-55%`
1. [李雨桐喊话薛之谦 (Li Yutong shouts to Joker Xue)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%A8%E6%A1%90%E5%96%8A%E8%AF%9D%E8%96%9B%E4%B9%8B%E8%B0%A6%23) `218.6K 🔥` `-96%`
1. [真的没人管管江西小炒吗 (Is it true that no one cares about Jiangxi Xiao Chao?)](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E7%9A%84%E6%B2%A1%E4%BA%BA%E7%AE%A1%E7%AE%A1%E6%B1%9F%E8%A5%BF%E5%B0%8F%E7%82%92%E5%90%97%23) `181.3K 🔥` `-33%`
1. [电影难看20分钟内可退款40%](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E9%9A%BE%E7%9C%8B20%E5%88%86%E9%92%9F%E5%86%85%E5%8F%AF%E9%80%80%E6%AC%BE40%25%23) `115.2K 🔥` `-72%`
1. [迪丽热巴闪耀巴黎 (Dilireba shines in Paris)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%97%AA%E8%80%80%E5%B7%B4%E9%BB%8E%23) `112.0K 🔥` `-39%`
1. [王楚钦过不了安检瞬间红温 (Wang Chuqin suddenly became red when he couldn't pass the security check.)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%BF%87%E4%B8%8D%E4%BA%86%E5%AE%89%E6%A3%80%E7%9E%AC%E9%97%B4%E7%BA%A2%E6%B8%A9%23) `103.2K 🔥` `-46%`
1. [中国游客迪拜遇机场停运进退两难 (Chinese tourists face dilemma in Dubai due to airport shutdown)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E8%BF%AA%E6%8B%9C%E9%81%87%E6%9C%BA%E5%9C%BA%E5%81%9C%E8%BF%90%E8%BF%9B%E9%80%80%E4%B8%A4%E9%9A%BE%23) `99.4K 🔥` `-39%`
1. [杨博文跳伞](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%8D%9A%E6%96%87%E8%B7%B3%E4%BC%9E%23) `94.9K 🔥` `-49%`
1. [原来不止我一个人这样洗澡](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%B8%8D%E6%AD%A2%E6%88%91%E4%B8%80%E4%B8%AA%E4%BA%BA%E8%BF%99%E6%A0%B7%E6%B4%97%E6%BE%A1%23) `91.3K 🔥` `-39%`

Updated at 2026-03-02 15:36:30

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
