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

1. [在火灾视频下谎称死十几人被罚 (He was fined for lying about the death of more than a dozen people in a fire video)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E7%81%AB%E7%81%BE%E8%A7%86%E9%A2%91%E4%B8%8B%E8%B0%8E%E7%A7%B0%E6%AD%BB%E5%8D%81%E5%87%A0%E4%BA%BA%E8%A2%AB%E7%BD%9A%23) `194.2K 🔥` `NEW`
1. [福州煎饼叔叔去世](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%B7%9E%E7%85%8E%E9%A5%BC%E5%8F%94%E5%8F%94%E5%8E%BB%E4%B8%96%23) `188.5K 🔥` `NEW`
1. [宝妈回应打疫苗护士被指不专业](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E5%A6%88%E5%9B%9E%E5%BA%94%E6%89%93%E7%96%AB%E8%8B%97%E6%8A%A4%E5%A3%AB%E8%A2%AB%E6%8C%87%E4%B8%8D%E4%B8%93%E4%B8%9A%23) `182.8K 🔥` `NEW`
1. [一诺拍的夕阳](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E6%8B%8D%E7%9A%84%E5%A4%95%E9%98%B3%23) `179.4K 🔥` `NEW`
1. [突然意识到高能量永远大于能力](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E9%AB%98%E8%83%BD%E9%87%8F%E6%B0%B8%E8%BF%9C%E5%A4%A7%E4%BA%8E%E8%83%BD%E5%8A%9B%23) `156.7K 🔥` `NEW`
1. [余承东回应口误](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E5%9B%9E%E5%BA%94%E5%8F%A3%E8%AF%AF%23) `153.9K 🔥` `NEW`
1. [大妈接了五毒教教主的私活](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%A6%88%E6%8E%A5%E4%BA%86%E4%BA%94%E6%AF%92%E6%95%99%E6%95%99%E4%B8%BB%E7%9A%84%E7%A7%81%E6%B4%BB%23) `151.2K 🔥` `NEW`
1. [银行午休也别误了便民](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E5%8D%88%E4%BC%91%E4%B9%9F%E5%88%AB%E8%AF%AF%E4%BA%86%E4%BE%BF%E6%B0%91%23) `149.8K 🔥` `NEW`
1. [胚胎案妻子称丈夫还有其他暧昧对象](https://s.weibo.com/weibo?q=%23%E8%83%9A%E8%83%8E%E6%A1%88%E5%A6%BB%E5%AD%90%E7%A7%B0%E4%B8%88%E5%A4%AB%E8%BF%98%E6%9C%89%E5%85%B6%E4%BB%96%E6%9A%A7%E6%98%A7%E5%AF%B9%E8%B1%A1%23) `147.8K 🔥` `NEW`
1. [TheShy说Meiko是很好的选手](https://s.weibo.com/weibo?q=%23TheShy%E8%AF%B4Meiko%E6%98%AF%E5%BE%88%E5%A5%BD%E7%9A%84%E9%80%89%E6%89%8B%23) `143.3K 🔥` `NEW`
1. [崩坏星穹铁道 (Collapsed Star Dome Railway)](https://s.weibo.com/weibo?q=%23%E5%B4%A9%E5%9D%8F%E6%98%9F%E7%A9%B9%E9%93%81%E9%81%93%23) `136.7K 🔥` `NEW`
1. [梅姨真实姓名首曝光 (Aunt Mei’s real first name revealed)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E7%9C%9F%E5%AE%9E%E5%A7%93%E5%90%8D%E9%A6%96%E6%9B%9D%E5%85%89%23) `323.6K 🔥` `-69%`
1. [李亚鹏向地铁吐血女孩捐99999元](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BA%9A%E9%B9%8F%E5%90%91%E5%9C%B0%E9%93%81%E5%90%90%E8%A1%80%E5%A5%B3%E5%AD%A9%E6%8D%9099999%E5%85%83%23) `199.7K 🔥` `-69%`
1. [跟着大国交通看山河中国](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E7%9D%80%E5%A4%A7%E5%9B%BD%E4%BA%A4%E9%80%9A%E7%9C%8B%E5%B1%B1%E6%B2%B3%E4%B8%AD%E5%9B%BD%23) `199.0K 🔥` `-61%`
1. [老祖宗怎么可以聪明成这样](https://s.weibo.com/weibo?q=%23%E8%80%81%E7%A5%96%E5%AE%97%E6%80%8E%E4%B9%88%E5%8F%AF%E4%BB%A5%E8%81%AA%E6%98%8E%E6%88%90%E8%BF%99%E6%A0%B7%23) `197.4K 🔥` `-53%`
1. [卜冠今吓到我了](https://s.weibo.com/weibo?q=%23%E5%8D%9C%E5%86%A0%E4%BB%8A%E5%90%93%E5%88%B0%E6%88%91%E4%BA%86%23) `197.0K 🔥` `-60%`
1. [成年人的体面是把请客说得很自然](https://s.weibo.com/weibo?q=%23%E6%88%90%E5%B9%B4%E4%BA%BA%E7%9A%84%E4%BD%93%E9%9D%A2%E6%98%AF%E6%8A%8A%E8%AF%B7%E5%AE%A2%E8%AF%B4%E5%BE%97%E5%BE%88%E8%87%AA%E7%84%B6%23) `195.4K 🔥` `-58%`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `193.5K 🔥` `-61%`
1. [这一秒过火全员be](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E5%85%A8%E5%91%98be%23) `192.0K 🔥` `-58%`
1. [被泰航拒载中国乘客发声](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%B3%B0%E8%88%AA%E6%8B%92%E8%BD%BD%E4%B8%AD%E5%9B%BD%E4%B9%98%E5%AE%A2%E5%8F%91%E5%A3%B0%23) `190.5K 🔥` `-24%`
1. [乌鸦一次带走四块饼干智商绝了](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E9%B8%A6%E4%B8%80%E6%AC%A1%E5%B8%A6%E8%B5%B0%E5%9B%9B%E5%9D%97%E9%A5%BC%E5%B9%B2%E6%99%BA%E5%95%86%E7%BB%9D%E4%BA%86%23) `189.7K 🔥` `-25%`
1. [茉莉奶白被茉莉和奶白背刺了 (Jasmine Milk White was stabbed in the back by Jasmine and Milk White)](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E8%A2%AB%E8%8C%89%E8%8E%89%E5%92%8C%E5%A5%B6%E7%99%BD%E8%83%8C%E5%88%BA%E4%BA%86%23) `187.2K 🔥` `-50%`
1. [婚外胚胎案妻子住址遭恶意曝光](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E6%A1%88%E5%A6%BB%E5%AD%90%E4%BD%8F%E5%9D%80%E9%81%AD%E6%81%B6%E6%84%8F%E6%9B%9D%E5%85%89%23) `185.2K 🔥` `-27%`
1. [女儿考上一本出轨父亲拒付学费](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E8%80%83%E4%B8%8A%E4%B8%80%E6%9C%AC%E5%87%BA%E8%BD%A8%E7%88%B6%E4%BA%B2%E6%8B%92%E4%BB%98%E5%AD%A6%E8%B4%B9%23) `184.2K 🔥` `-27%`
1. [可杰 top](https://s.weibo.com/weibo?q=%23%E5%8F%AF%E6%9D%B0%20top%23) `181.4K 🔥` `-29%`
1. [严浩翔 破音](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%20%E7%A0%B4%E9%9F%B3%23) `180.9K 🔥` `-29%`
1. [出国帮子女带娃的老人在夹缝中煎熬](https://s.weibo.com/weibo?q=%23%E5%87%BA%E5%9B%BD%E5%B8%AE%E5%AD%90%E5%A5%B3%E5%B8%A6%E5%A8%83%E7%9A%84%E8%80%81%E4%BA%BA%E5%9C%A8%E5%A4%B9%E7%BC%9D%E4%B8%AD%E7%85%8E%E7%86%AC%23) `178.0K 🔥` `-29%`
1. [柳周cp爆火后参加毛雪汪地球超新鲜 (After Liu Zhou’s CP became popular, he participated in Mao Xue Wang’s Earth Super Fresh)](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E5%91%A8cp%E7%88%86%E7%81%AB%E5%90%8E%E5%8F%82%E5%8A%A0%E6%AF%9B%E9%9B%AA%E6%B1%AA%E5%9C%B0%E7%90%83%E8%B6%85%E6%96%B0%E9%B2%9C%23) `176.4K 🔥` `-54%`
1. [日本女网红自杀过程被完整直播](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A5%B3%E7%BD%91%E7%BA%A2%E8%87%AA%E6%9D%80%E8%BF%87%E7%A8%8B%E8%A2%AB%E5%AE%8C%E6%95%B4%E7%9B%B4%E6%92%AD%23) `174.5K 🔥` `-31%`
1. [孩子吵闹2小时乘客叹气反被家长怼](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E5%90%B5%E9%97%B92%E5%B0%8F%E6%97%B6%E4%B9%98%E5%AE%A2%E5%8F%B9%E6%B0%94%E5%8F%8D%E8%A2%AB%E5%AE%B6%E9%95%BF%E6%80%BC%23) `174.3K 🔥` `-31%`
1. [水豚宝宝请问您刚刚生了我们对吗](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E8%B1%9A%E5%AE%9D%E5%AE%9D%E8%AF%B7%E9%97%AE%E6%82%A8%E5%88%9A%E5%88%9A%E7%94%9F%E4%BA%86%E6%88%91%E4%BB%AC%E5%AF%B9%E5%90%97%23) `172.2K 🔥` `-31%`
1. [王俊凯 南京](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%20%E5%8D%97%E4%BA%AC%23) `171.0K 🔥` `-33%`
1. [很多人其实不适合运动 (Many people are actually not suitable for exercise)](https://s.weibo.com/weibo?q=%23%E5%BE%88%E5%A4%9A%E4%BA%BA%E5%85%B6%E5%AE%9E%E4%B8%8D%E9%80%82%E5%90%88%E8%BF%90%E5%8A%A8%23) `169.9K 🔥` `-33%`
1. [苹果要求长鑫降价反遭涨价](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E8%A6%81%E6%B1%82%E9%95%BF%E9%91%AB%E9%99%8D%E4%BB%B7%E5%8F%8D%E9%81%AD%E6%B6%A8%E4%BB%B7%23) `167.7K 🔥` `-34%`
1. [登陆少年 徐州](https://s.weibo.com/weibo?q=%23%E7%99%BB%E9%99%86%E5%B0%91%E5%B9%B4%20%E5%BE%90%E5%B7%9E%23) `167.1K 🔥` `-34%`
1. [你常吃的兰州拉面要改名了 (The Lanzhou Ramen you often eat is going to be renamed)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%B8%B8%E5%90%83%E7%9A%84%E5%85%B0%E5%B7%9E%E6%8B%89%E9%9D%A2%E8%A6%81%E6%94%B9%E5%90%8D%E4%BA%86%23) `166.1K 🔥` `-34%`
1. [女子因邻车长期压线停车装护栏](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%A0%E9%82%BB%E8%BD%A6%E9%95%BF%E6%9C%9F%E5%8E%8B%E7%BA%BF%E5%81%9C%E8%BD%A6%E8%A3%85%E6%8A%A4%E6%A0%8F%23) `164.5K 🔥` `-34%`
1. [费大厨全国小炒肉大王仅凭视频评出](https://s.weibo.com/weibo?q=%23%E8%B4%B9%E5%A4%A7%E5%8E%A8%E5%85%A8%E5%9B%BD%E5%B0%8F%E7%82%92%E8%82%89%E5%A4%A7%E7%8E%8B%E4%BB%85%E5%87%AD%E8%A7%86%E9%A2%91%E8%AF%84%E5%87%BA%23) `162.5K 🔥` `-60%`
1. [男子被判无罪获国赔4年后改判死缓](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%A2%AB%E5%88%A4%E6%97%A0%E7%BD%AA%E8%8E%B7%E5%9B%BD%E8%B5%944%E5%B9%B4%E5%90%8E%E6%94%B9%E5%88%A4%E6%AD%BB%E7%BC%93%23) `161.5K 🔥` `-36%`
1. [张凌赫回应这一秒过火大结局](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%9E%E5%BA%94%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E5%A4%A7%E7%BB%93%E5%B1%80%23) `160.9K 🔥` `-36%`
1. [王楚然还有三部待播作品](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E8%BF%98%E6%9C%89%E4%B8%89%E9%83%A8%E5%BE%85%E6%92%AD%E4%BD%9C%E5%93%81%23) `159.2K 🔥` `-37%`
1. [女乘客脱鞋司机闻到异味提醒反被投诉](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E4%B9%98%E5%AE%A2%E8%84%B1%E9%9E%8B%E5%8F%B8%E6%9C%BA%E9%97%BB%E5%88%B0%E5%BC%82%E5%91%B3%E6%8F%90%E9%86%92%E5%8F%8D%E8%A2%AB%E6%8A%95%E8%AF%89%23) `157.3K 🔥` `-37%`
1. [河南一男子晒成干的鲫鱼遇水竟复活](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%80%E7%94%B7%E5%AD%90%E6%99%92%E6%88%90%E5%B9%B2%E7%9A%84%E9%B2%AB%E9%B1%BC%E9%81%87%E6%B0%B4%E7%AB%9F%E5%A4%8D%E6%B4%BB%23) `154.3K 🔥` `-38%`
1. [女孩从18楼跳下男友反复修改赔偿金 (The girl jumped from the 18th floor and her boyfriend repeatedly revised the compensation)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E4%BB%8E18%E6%A5%BC%E8%B7%B3%E4%B8%8B%E7%94%B7%E5%8F%8B%E5%8F%8D%E5%A4%8D%E4%BF%AE%E6%94%B9%E8%B5%94%E5%81%BF%E9%87%91%23) `152.7K 🔥` `-40%`
1. [SpaceX火箭残骸撞击月球](https://s.weibo.com/weibo?q=%23SpaceX%E7%81%AB%E7%AE%AD%E6%AE%8B%E9%AA%B8%E6%92%9E%E5%87%BB%E6%9C%88%E7%90%83%23) `147.5K 🔥` `-41%`
1. [玩具公司签67亿元算力大单](https://s.weibo.com/weibo?q=%23%E7%8E%A9%E5%85%B7%E5%85%AC%E5%8F%B8%E7%AD%BE67%E4%BA%BF%E5%85%83%E7%AE%97%E5%8A%9B%E5%A4%A7%E5%8D%95%23) `145.8K 🔥` `-42%`
1. [iG全员力挺Meiko](https://s.weibo.com/weibo?q=%23iG%E5%85%A8%E5%91%98%E5%8A%9B%E6%8C%BAMeiko%23) `143.8K 🔥` `-43%`
1. [任素素结局 (The ending of Ren Susu)](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E7%B4%A0%E7%B4%A0%E7%BB%93%E5%B1%80%23) `142.0K 🔥` `-44%`
1. [王俊凯南京演唱会审批通过](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%8D%97%E4%BA%AC%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%A1%E6%89%B9%E9%80%9A%E8%BF%87%23) `141.0K 🔥` `-44%`
1. [台风暴雨等4预警齐发](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E6%9A%B4%E9%9B%A8%E7%AD%894%E9%A2%84%E8%AD%A6%E9%BD%90%E5%8F%91%23) `139.3K 🔥` `-44%`
1. [Meiko力竭了](https://s.weibo.com/weibo?q=%23Meiko%E5%8A%9B%E7%AB%AD%E4%BA%86%23) `137.6K 🔥` `-45%`

Updated at 2026-08-06 02:51:06

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
