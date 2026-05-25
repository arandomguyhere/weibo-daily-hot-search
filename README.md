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

1. [生理性喜欢很容易对人产生误导 (Physiological liking can easily mislead people)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E7%90%86%E6%80%A7%E5%96%9C%E6%AC%A2%E5%BE%88%E5%AE%B9%E6%98%93%E5%AF%B9%E4%BA%BA%E4%BA%A7%E7%94%9F%E8%AF%AF%E5%AF%BC%23) `592.4K 🔥` `NEW`
1. [2026白玉兰奖](https://s.weibo.com/weibo?q=%232026%E7%99%BD%E7%8E%89%E5%85%B0%E5%A5%96%23) `352.2K 🔥` `NEW`
1. [杨丞琳发文恭喜侯卓成杨汝晴](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E4%B8%9E%E7%90%B3%E5%8F%91%E6%96%87%E6%81%AD%E5%96%9C%E4%BE%AF%E5%8D%93%E6%88%90%E6%9D%A8%E6%B1%9D%E6%99%B4%23) `344.0K 🔥` `NEW`
1. [王鹤棣掉粉](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%8E%89%E7%B2%89%23) `342.3K 🔥` `NEW`
1. [潘玮柏得了面瘫](https://s.weibo.com/weibo?q=%23%E6%BD%98%E7%8E%AE%E6%9F%8F%E5%BE%97%E4%BA%86%E9%9D%A2%E7%98%AB%23) `339.7K 🔥` `NEW`
1. [运动员夺冠后捧起奖杯下一秒碎一地](https://s.weibo.com/weibo?q=%23%E8%BF%90%E5%8A%A8%E5%91%98%E5%A4%BA%E5%86%A0%E5%90%8E%E6%8D%A7%E8%B5%B7%E5%A5%96%E6%9D%AF%E4%B8%8B%E4%B8%80%E7%A7%92%E7%A2%8E%E4%B8%80%E5%9C%B0%23) `332.7K 🔥` `NEW`
1. [女主持就王鹤棣沈月争议发声](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E4%B8%BB%E6%8C%81%E5%B0%B1%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%B2%88%E6%9C%88%E4%BA%89%E8%AE%AE%E5%8F%91%E5%A3%B0%23) `331.8K 🔥` `NEW`
1. [在一家公司呆五年的真实感受](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E4%B8%80%E5%AE%B6%E5%85%AC%E5%8F%B8%E5%91%86%E4%BA%94%E5%B9%B4%E7%9A%84%E7%9C%9F%E5%AE%9E%E6%84%9F%E5%8F%97%23) `328.2K 🔥` `NEW`
1. [心动的信号](https://s.weibo.com/weibo?q=%23%E5%BF%83%E5%8A%A8%E7%9A%84%E4%BF%A1%E5%8F%B7%23) `326.5K 🔥` `NEW`
1. [张凌赫田曦薇一起发vlog](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%E4%B8%80%E8%B5%B7%E5%8F%91vlog%23) `320.5K 🔥` `NEW`
1. [王皓孙逊加盟吉林省乒乓球队 (Wang Hao and Sun Xun join Jilin Provincial Table Tennis Team)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9A%93%E5%AD%99%E9%80%8A%E5%8A%A0%E7%9B%9F%E5%90%89%E6%9E%97%E7%9C%81%E4%B9%92%E4%B9%93%E7%90%83%E9%98%9F%23) `315.2K 🔥` `NEW`
1. [伊朗称中国推动美伊停火谈判进程](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E4%B8%AD%E5%9B%BD%E6%8E%A8%E5%8A%A8%E7%BE%8E%E4%BC%8A%E5%81%9C%E7%81%AB%E8%B0%88%E5%88%A4%E8%BF%9B%E7%A8%8B%23) `311.9K 🔥` `NEW`
1. [徐洁儿发长文](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B4%81%E5%84%BF%E5%8F%91%E9%95%BF%E6%96%87%23) `307.2K 🔥` `NEW`
1. [16岁女孩遭殴打父亲拒绝调解](https://s.weibo.com/weibo?q=%2316%E5%B2%81%E5%A5%B3%E5%AD%A9%E9%81%AD%E6%AE%B4%E6%89%93%E7%88%B6%E4%BA%B2%E6%8B%92%E7%BB%9D%E8%B0%83%E8%A7%A3%23) `304.6K 🔥` `NEW`
1. [张凌赫又在报备了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%8F%88%E5%9C%A8%E6%8A%A5%E5%A4%87%E4%BA%86%23) `301.3K 🔥` `NEW`
1. [痞幼与梅尼耶贴身热舞被指没边界感](https://s.weibo.com/weibo?q=%23%E7%97%9E%E5%B9%BC%E4%B8%8E%E6%A2%85%E5%B0%BC%E8%80%B6%E8%B4%B4%E8%BA%AB%E7%83%AD%E8%88%9E%E8%A2%AB%E6%8C%87%E6%B2%A1%E8%BE%B9%E7%95%8C%E6%84%9F%23) `299.1K 🔥` `NEW`
1. [田曦薇被自己美一大跳](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%A2%AB%E8%87%AA%E5%B7%B1%E7%BE%8E%E4%B8%80%E5%A4%A7%E8%B7%B3%23) `292.6K 🔥` `NEW`
1. [叶一茜 发卖老公](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E4%B8%80%E8%8C%9C%20%E5%8F%91%E5%8D%96%E8%80%81%E5%85%AC%23) `288.8K 🔥` `NEW`
1. [杨紫给粉丝送未公开小卡](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%BB%99%E7%B2%89%E4%B8%9D%E9%80%81%E6%9C%AA%E5%85%AC%E5%BC%80%E5%B0%8F%E5%8D%A1%23) `276.1K 🔥` `NEW`
1. [原来小猫哇啊是询问怎么了的意思](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%B0%8F%E7%8C%AB%E5%93%87%E5%95%8A%E6%98%AF%E8%AF%A2%E9%97%AE%E6%80%8E%E4%B9%88%E4%BA%86%E7%9A%84%E6%84%8F%E6%80%9D%23) `272.9K 🔥` `NEW`
1. [盒马郑重道歉 (Hema solemnly apologizes)](https://s.weibo.com/weibo?q=%23%E7%9B%92%E9%A9%AC%E9%83%91%E9%87%8D%E9%81%93%E6%AD%89%23) `1.1M 🔥` `+99%`
1. [今年天气系统出现异常 (The weather system is abnormal this year)](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E5%A4%A9%E6%B0%94%E7%B3%BB%E7%BB%9F%E5%87%BA%E7%8E%B0%E5%BC%82%E5%B8%B8%23) `789.8K 🔥` `+652%`
1. [强降雨天气优先选择公共交通](https://s.weibo.com/weibo?q=%23%E5%BC%BA%E9%99%8D%E9%9B%A8%E5%A4%A9%E6%B0%94%E4%BC%98%E5%85%88%E9%80%89%E6%8B%A9%E5%85%AC%E5%85%B1%E4%BA%A4%E9%80%9A%23) `617.6K 🔥` `+96%`
1. [侯卓成求婚杨汝晴](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E5%8D%93%E6%88%90%E6%B1%82%E5%A9%9A%E6%9D%A8%E6%B1%9D%E6%99%B4%23) `351.9K 🔥` `+41%`
1. [男子用Ai捏造崂山索道遇险视频被罚 (Man was fined for using AI to fabricate video of distress on Laoshan cableway)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%94%A8Ai%E6%8D%8F%E9%80%A0%E5%B4%82%E5%B1%B1%E7%B4%A2%E9%81%93%E9%81%87%E9%99%A9%E8%A7%86%E9%A2%91%E8%A2%AB%E7%BD%9A%23) `351.7K 🔥` `+191%`
1. [帕梅拉去了天津都害怕](https://s.weibo.com/weibo?q=%23%E5%B8%95%E6%A2%85%E6%8B%89%E5%8E%BB%E4%BA%86%E5%A4%A9%E6%B4%A5%E9%83%BD%E5%AE%B3%E6%80%95%23) `347.4K 🔥` `+99%`
1. [A股出现三大异象 (Three major anomalies appear in A-shares)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%87%BA%E7%8E%B0%E4%B8%89%E5%A4%A7%E5%BC%82%E8%B1%A1%23) `345.9K 🔥` `+231%`
1. [因漏放吸管辱骂打砸店员女子被行拘](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E6%BC%8F%E6%94%BE%E5%90%B8%E7%AE%A1%E8%BE%B1%E9%AA%82%E6%89%93%E7%A0%B8%E5%BA%97%E5%91%98%E5%A5%B3%E5%AD%90%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `340.7K 🔥` `+225%`
1. [女干部称耳环是几十块买的](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%B9%B2%E9%83%A8%E7%A7%B0%E8%80%B3%E7%8E%AF%E6%98%AF%E5%87%A0%E5%8D%81%E5%9D%97%E4%B9%B0%E7%9A%84%23) `337.4K 🔥` `+248%`
1. [秦岚也不舒服了](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%B2%9A%E4%B9%9F%E4%B8%8D%E8%88%92%E6%9C%8D%E4%BA%86%23) `335.0K 🔥` `+220%`
1. [西安一16岁女孩在街上遭陌生男子殴打 (A 16-year-old girl in Xi'an was beaten by a strange man on the street)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E4%B8%8016%E5%B2%81%E5%A5%B3%E5%AD%A9%E5%9C%A8%E8%A1%97%E4%B8%8A%E9%81%AD%E9%99%8C%E7%94%9F%E7%94%B7%E5%AD%90%E6%AE%B4%E6%89%93%23) `329.8K 🔥` `+215%`
1. [保护肝脏3要吃3别碰 (3 Things to Eat to Protect Your Liver 3 Don’t Touch)](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%8A%A4%E8%82%9D%E8%84%8F3%E8%A6%81%E5%90%833%E5%88%AB%E7%A2%B0%23) `324.1K 🔥` `+248%`
1. [中国博主富士山下跳舞被外网辱骂](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%8D%9A%E4%B8%BB%E5%AF%8C%E5%A3%AB%E5%B1%B1%E4%B8%8B%E8%B7%B3%E8%88%9E%E8%A2%AB%E5%A4%96%E7%BD%91%E8%BE%B1%E9%AA%82%23) `323.1K 🔥` `+209%`
1. [上班上久后形成的肌肉记忆](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E4%B8%8A%E4%B9%85%E5%90%8E%E5%BD%A2%E6%88%90%E7%9A%84%E8%82%8C%E8%82%89%E8%AE%B0%E5%BF%86%23) `318.4K 🔥` `+203%`
1. [金价跳空高开](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%B7%B3%E7%A9%BA%E9%AB%98%E5%BC%80%23) `317.3K 🔥` `+287%`
1. [杨紫 白玉兰提名 (Yang Zi Magnolia Nominated)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%20%E7%99%BD%E7%8E%89%E5%85%B0%E6%8F%90%E5%90%8D%23) `313.4K 🔥` `+156%`
1. [看得出来女孩和狗狗都紧张 (It can be seen that both the girl and the dog are nervous)](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%BE%97%E5%87%BA%E6%9D%A5%E5%A5%B3%E5%AD%A9%E5%92%8C%E7%8B%97%E7%8B%97%E9%83%BD%E7%B4%A7%E5%BC%A0%23) `310.4K 🔥` `+195%`
1. [芯片半导体暴涨 (Chip and semiconductor surge)](https://s.weibo.com/weibo?q=%23%E8%8A%AF%E7%89%87%E5%8D%8A%E5%AF%BC%E4%BD%93%E6%9A%B4%E6%B6%A8%23) `309.0K 🔥` `+194%`
1. [盒马粉木耳产品已下架](https://s.weibo.com/weibo?q=%23%E7%9B%92%E9%A9%AC%E7%B2%89%E6%9C%A8%E8%80%B3%E4%BA%A7%E5%93%81%E5%B7%B2%E4%B8%8B%E6%9E%B6%23) `303.9K 🔥` `+209%`
1. [郑钦文发布会哭了](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%8F%91%E5%B8%83%E4%BC%9A%E5%93%AD%E4%BA%86%23) `298.2K 🔥` `+429%`
1. [直播女选手隐私部位人太多不是理由](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E6%92%AD%E5%A5%B3%E9%80%89%E6%89%8B%E9%9A%90%E7%A7%81%E9%83%A8%E4%BD%8D%E4%BA%BA%E5%A4%AA%E5%A4%9A%E4%B8%8D%E6%98%AF%E7%90%86%E7%94%B1%23) `296.1K 🔥` `+199%`
1. [一家人认识但不熟](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B6%E4%BA%BA%E8%AE%A4%E8%AF%86%E4%BD%86%E4%B8%8D%E7%86%9F%23) `293.6K 🔥` `+179%`
1. [4吨的车来了路快撑不住了](https://s.weibo.com/weibo?q=%234%E5%90%A8%E7%9A%84%E8%BD%A6%E6%9D%A5%E4%BA%86%E8%B7%AF%E5%BF%AB%E6%92%91%E4%B8%8D%E4%BD%8F%E4%BA%86%23) `291.5K 🔥` `+420%`
1. [伊朗亿万豪门千金或让丈夫净身出户 (Iran's billionaire daughter may let her husband leave home)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%BA%BF%E4%B8%87%E8%B1%AA%E9%97%A8%E5%8D%83%E9%87%91%E6%88%96%E8%AE%A9%E4%B8%88%E5%A4%AB%E5%87%80%E8%BA%AB%E5%87%BA%E6%88%B7%23) `287.1K 🔥` `+391%`
1. [割双眼皮无法闭眼女子崩溃发声](https://s.weibo.com/weibo?q=%23%E5%89%B2%E5%8F%8C%E7%9C%BC%E7%9A%AE%E6%97%A0%E6%B3%95%E9%97%AD%E7%9C%BC%E5%A5%B3%E5%AD%90%E5%B4%A9%E6%BA%83%E5%8F%91%E5%A3%B0%23) `286.1K 🔥` `+408%`
1. [突然发现自己正是人生的7点半 (Suddenly I found myself at 7:30 in my life)](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E8%87%AA%E5%B7%B1%E6%AD%A3%E6%98%AF%E4%BA%BA%E7%94%9F%E7%9A%847%E7%82%B9%E5%8D%8A%23) `283.5K 🔥` `+373%`
1. [在德失联23岁中国留学生遗体已找到 (The body of a 23-year-old Chinese student missing in Germany has been found)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%BE%B7%E5%A4%B1%E8%81%9423%E5%B2%81%E4%B8%AD%E5%9B%BD%E7%95%99%E5%AD%A6%E7%94%9F%E9%81%97%E4%BD%93%E5%B7%B2%E6%89%BE%E5%88%B0%23) `282.4K 🔥` `+365%`
1. [人生所有事本质都是小马过河](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%94%9F%E6%89%80%E6%9C%89%E4%BA%8B%E6%9C%AC%E8%B4%A8%E9%83%BD%E6%98%AF%E5%B0%8F%E9%A9%AC%E8%BF%87%E6%B2%B3%23) `280.3K 🔥` `+398%`
1. [家业热度](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%E7%83%AD%E5%BA%A6%23) `278.5K 🔥` `+395%`
1. [福岛核区日本野猪变超级猪 (Japanese wild boar turns into super pig in Fukushima nuclear zone)](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%B2%9B%E6%A0%B8%E5%8C%BA%E6%97%A5%E6%9C%AC%E9%87%8E%E7%8C%AA%E5%8F%98%E8%B6%85%E7%BA%A7%E7%8C%AA%23) `275.5K 🔥` `+297%`
1. [给阿嬷的情书 投资回报率](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%20%E6%8A%95%E8%B5%84%E5%9B%9E%E6%8A%A5%E7%8E%87%23) `350.2K 🔥`

Updated at 2026-05-26 07:51:06

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
