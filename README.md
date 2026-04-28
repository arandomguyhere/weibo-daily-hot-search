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

1. [曝张月团三公小考倒数第一 (It was revealed that Zhang Yuetuan’s third son ranked last in the quiz)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BC%A0%E6%9C%88%E5%9B%A2%E4%B8%89%E5%85%AC%E5%B0%8F%E8%80%83%E5%80%92%E6%95%B0%E7%AC%AC%E4%B8%80%23) `302.8K 🔥` `NEW`
1. [国乒到达伦敦](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%88%B0%E8%BE%BE%E4%BC%A6%E6%95%A6%23) `294.9K 🔥` `NEW`
1. [国内首个乘用车百万公里俱乐部](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%86%85%E9%A6%96%E4%B8%AA%E4%B9%98%E7%94%A8%E8%BD%A6%E7%99%BE%E4%B8%87%E5%85%AC%E9%87%8C%E4%BF%B1%E4%B9%90%E9%83%A8%23) `294.8K 🔥` `NEW`
1. [疑遭霸凌跳楼教师班级曾集体反抗](https://s.weibo.com/weibo?q=%23%E7%96%91%E9%81%AD%E9%9C%B8%E5%87%8C%E8%B7%B3%E6%A5%BC%E6%95%99%E5%B8%88%E7%8F%AD%E7%BA%A7%E6%9B%BE%E9%9B%86%E4%BD%93%E5%8F%8D%E6%8A%97%23) `293.5K 🔥` `NEW`
1. [Rookie女友发文](https://s.weibo.com/weibo?q=%23Rookie%E5%A5%B3%E5%8F%8B%E5%8F%91%E6%96%87%23) `293.1K 🔥` `NEW`
1. [张凌赫被搀扶才能起来](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%A2%AB%E6%90%80%E6%89%B6%E6%89%8D%E8%83%BD%E8%B5%B7%E6%9D%A5%23) `292.7K 🔥` `NEW`
1. [现货黄金](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E8%B4%A7%E9%BB%84%E9%87%91%23) `292.2K 🔥` `NEW`
1. [买水果遭丈夫咒骂孕妇发声](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E6%B0%B4%E6%9E%9C%E9%81%AD%E4%B8%88%E5%A4%AB%E5%92%92%E9%AA%82%E5%AD%95%E5%A6%87%E5%8F%91%E5%A3%B0%23) `291.7K 🔥` `NEW`
1. [山西重大刑案犯罪嫌疑人在钢厂工作](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E9%87%8D%E5%A4%A7%E5%88%91%E6%A1%88%E7%8A%AF%E7%BD%AA%E5%AB%8C%E7%96%91%E4%BA%BA%E5%9C%A8%E9%92%A2%E5%8E%82%E5%B7%A5%E4%BD%9C%23) `291.3K 🔥` `NEW`
1. [俞敏洪曾称不再有主播独立成平台](https://s.weibo.com/weibo?q=%23%E4%BF%9E%E6%95%8F%E6%B4%AA%E6%9B%BE%E7%A7%B0%E4%B8%8D%E5%86%8D%E6%9C%89%E4%B8%BB%E6%92%AD%E7%8B%AC%E7%AB%8B%E6%88%90%E5%B9%B3%E5%8F%B0%23) `290.6K 🔥` `NEW`
1. [晚上10点睡和11点睡的三个区别 (Three differences between going to bed at 10pm and going to bed at 11pm)](https://s.weibo.com/weibo?q=%23%E6%99%9A%E4%B8%8A10%E7%82%B9%E7%9D%A1%E5%92%8C11%E7%82%B9%E7%9D%A1%E7%9A%84%E4%B8%89%E4%B8%AA%E5%8C%BA%E5%88%AB%23) `288.7K 🔥` `NEW`
1. [女子自行吃多子丸一次怀4胞胎](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%87%AA%E8%A1%8C%E5%90%83%E5%A4%9A%E5%AD%90%E4%B8%B8%E4%B8%80%E6%AC%A1%E6%80%804%E8%83%9E%E8%83%8E%23) `288.1K 🔥` `NEW`
1. [保姆起诉叶璇](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%A7%86%E8%B5%B7%E8%AF%89%E5%8F%B6%E7%92%87%23) `284.9K 🔥` `NEW`
1. [金莎媒体发布会孕相](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E5%AA%92%E4%BD%93%E5%8F%91%E5%B8%83%E4%BC%9A%E5%AD%95%E7%9B%B8%23) `284.8K 🔥` `NEW`
1. [网传曾沛慈团王濛团三公小考前二](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%9B%BE%E6%B2%9B%E6%85%88%E5%9B%A2%E7%8E%8B%E6%BF%9B%E5%9B%A2%E4%B8%89%E5%85%AC%E5%B0%8F%E8%80%83%E5%89%8D%E4%BA%8C%23) `248.9K 🔥` `NEW`
1. [芯片半导体涨疯了](https://s.weibo.com/weibo?q=%23%E8%8A%AF%E7%89%87%E5%8D%8A%E5%AF%BC%E4%BD%93%E6%B6%A8%E7%96%AF%E4%BA%86%23) `218.6K 🔥` `NEW`
1. [胖东来饺子皮包装提示被网友夸赞](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E9%A5%BA%E5%AD%90%E7%9A%AE%E5%8C%85%E8%A3%85%E6%8F%90%E7%A4%BA%E8%A2%AB%E7%BD%91%E5%8F%8B%E5%A4%B8%E8%B5%9E%23) `204.6K 🔥` `NEW`
1. [王楚然高度近视但绝不眯眼](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E9%AB%98%E5%BA%A6%E8%BF%91%E8%A7%86%E4%BD%86%E7%BB%9D%E4%B8%8D%E7%9C%AF%E7%9C%BC%23) `185.8K 🔥` `NEW`
1. [男子欠3.6万第三方公司要债6万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%AC%A03.6%E4%B8%87%E7%AC%AC%E4%B8%89%E6%96%B9%E5%85%AC%E5%8F%B8%E8%A6%81%E5%80%BA6%E4%B8%87%23) `178.3K 🔥` `NEW`
1. [斯诺克](https://s.weibo.com/weibo?q=%23%E6%96%AF%E8%AF%BA%E5%85%8B%23) `169.8K 🔥` `NEW`
1. [小说女主也不过如此 (The heroine of the novel is nothing more than that)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%AF%B4%E5%A5%B3%E4%B8%BB%E4%B9%9F%E4%B8%8D%E8%BF%87%E5%A6%82%E6%AD%A4%23) `114.4K 🔥` `NEW`
1. [曝时代少年团广州演唱会一人一个大屏](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%B9%BF%E5%B7%9E%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%80%E4%BA%BA%E4%B8%80%E4%B8%AA%E5%A4%A7%E5%B1%8F%23) `109.1K 🔥` `NEW`
1. [黄金还可以上车吗](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%BF%98%E5%8F%AF%E4%BB%A5%E4%B8%8A%E8%BD%A6%E5%90%97%23) `103.0K 🔥` `NEW`
1. [父亲去世12年银行突然来催债 (Twelve years after my father passed away, the bank suddenly came to collect debts)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E5%8E%BB%E4%B8%9612%E5%B9%B4%E9%93%B6%E8%A1%8C%E7%AA%81%E7%84%B6%E6%9D%A5%E5%82%AC%E5%80%BA%23) `1.1M 🔥` `+113%`
1. [浪姐三公小考结果](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%B8%89%E5%85%AC%E5%B0%8F%E8%80%83%E7%BB%93%E6%9E%9C%23) `801.4K 🔥` `+291%`
1. [国产开源大模型下载量破100亿次](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BA%A7%E5%BC%80%E6%BA%90%E5%A4%A7%E6%A8%A1%E5%9E%8B%E4%B8%8B%E8%BD%BD%E9%87%8F%E7%A0%B4100%E4%BA%BF%E6%AC%A1%23) `675.0K 🔥` `+56%`
1. [炸个蛋花居然要6只手](https://s.weibo.com/weibo?q=%23%E7%82%B8%E4%B8%AA%E8%9B%8B%E8%8A%B1%E5%B1%85%E7%84%B6%E8%A6%816%E5%8F%AA%E6%89%8B%23) `342.9K 🔥` `+67%`
1. [姚安坠楼教师已脱离生命危险](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E5%AE%89%E5%9D%A0%E6%A5%BC%E6%95%99%E5%B8%88%E5%B7%B2%E8%84%B1%E7%A6%BB%E7%94%9F%E5%91%BD%E5%8D%B1%E9%99%A9%23) `294.7K 🔥` `+190%`
1. [莫德里奇赛季报销](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E5%BE%B7%E9%87%8C%E5%A5%87%E8%B5%9B%E5%AD%A3%E6%8A%A5%E9%94%80%23) `294.3K 🔥` `+331%`
1. [领克900为什么要做这么大的五座](https://s.weibo.com/weibo?q=%23%E9%A2%86%E5%85%8B900%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E5%81%9A%E8%BF%99%E4%B9%88%E5%A4%A7%E7%9A%84%E4%BA%94%E5%BA%A7%23) `294.0K 🔥` `+337%`
1. [腾势D9把老车主宠上天了](https://s.weibo.com/weibo?q=%23%E8%85%BE%E5%8A%BFD9%E6%8A%8A%E8%80%81%E8%BD%A6%E4%B8%BB%E5%AE%A0%E4%B8%8A%E5%A4%A9%E4%BA%86%23) `293.9K 🔥` `+77%`
1. [杨幂脸被蒸汽眼罩烫伤了 (Yang Mi's face was burned by steam eye mask)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%84%B8%E8%A2%AB%E8%92%B8%E6%B1%BD%E7%9C%BC%E7%BD%A9%E7%83%AB%E4%BC%A4%E4%BA%86%23) `293.3K 🔥` `+174%`
1. [桃黑黑腿太粗按到了电源键 (Momoko's black legs are too thick and she pressed the power button)](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E8%85%BF%E5%A4%AA%E7%B2%97%E6%8C%89%E5%88%B0%E4%BA%86%E7%94%B5%E6%BA%90%E9%94%AE%23) `292.5K 🔥` `+170%`
1. [旅游的三千块钱定律 (The three thousand dollar rule of travel)](https://s.weibo.com/weibo?q=%23%E6%97%85%E6%B8%B8%E7%9A%84%E4%B8%89%E5%8D%83%E5%9D%97%E9%92%B1%E5%AE%9A%E5%BE%8B%23) `291.3K 🔥` `+46%`
1. [身体严重缺觉的7个迹象 (7 signs that your body is severely sleep-deprived)](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BD%93%E4%B8%A5%E9%87%8D%E7%BC%BA%E8%A7%89%E7%9A%847%E4%B8%AA%E8%BF%B9%E8%B1%A1%23) `286.4K 🔥` `+264%`
1. [乘客买到高铁08车01C座上车懵了](https://s.weibo.com/weibo?q=%23%E4%B9%98%E5%AE%A2%E4%B9%B0%E5%88%B0%E9%AB%98%E9%93%8108%E8%BD%A601C%E5%BA%A7%E4%B8%8A%E8%BD%A6%E6%87%B5%E4%BA%86%23) `275.5K 🔥` `+160%`
1. [高市早苗称要为长期战争做准备 (Takaichi Sanae says to prepare for long-term war)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E7%A7%B0%E8%A6%81%E4%B8%BA%E9%95%BF%E6%9C%9F%E6%88%98%E4%BA%89%E5%81%9A%E5%87%86%E5%A4%87%23) `220.7K 🔥` `+113%`
1. [官方通报中学教师坠楼事件](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E4%B8%AD%E5%AD%A6%E6%95%99%E5%B8%88%E5%9D%A0%E6%A5%BC%E4%BA%8B%E4%BB%B6%23) `219.6K 🔥` `+193%`
1. [高中生水杯被同学投放异物饮后抽搐 (A high school student convulsed after drinking from a foreign object thrown into his water cup by a classmate)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%AD%E7%94%9F%E6%B0%B4%E6%9D%AF%E8%A2%AB%E5%90%8C%E5%AD%A6%E6%8A%95%E6%94%BE%E5%BC%82%E7%89%A9%E9%A5%AE%E5%90%8E%E6%8A%BD%E6%90%90%23) `185.4K 🔥` `+76%`
1. [日本人不愿相信中国座椅给手机充电 (Japanese don’t want to believe Chinese chairs charge mobile phones)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%BA%E4%B8%8D%E6%84%BF%E7%9B%B8%E4%BF%A1%E4%B8%AD%E5%9B%BD%E5%BA%A7%E6%A4%85%E7%BB%99%E6%89%8B%E6%9C%BA%E5%85%85%E7%94%B5%23) `178.4K 🔥` `+132%`
1. [张凌赫林允吻戏路透 (Zhang Ling He Lin Yun kissing scene Reuters)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%9E%97%E5%85%81%E5%90%BB%E6%88%8F%E8%B7%AF%E9%80%8F%23) `141.0K 🔥` `+36%`
1. [女子本想到医院减肥却查出两种癌](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%9C%AC%E6%83%B3%E5%88%B0%E5%8C%BB%E9%99%A2%E5%87%8F%E8%82%A5%E5%8D%B4%E6%9F%A5%E5%87%BA%E4%B8%A4%E7%A7%8D%E7%99%8C%23) `128.5K 🔥` `+89%`
1. [美伊停火谈判 (US-Iran ceasefire negotiations)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%81%9C%E7%81%AB%E8%B0%88%E5%88%A4%23) `123.1K 🔥` `+26%`
1. [女子剖腹产后突发脑梗致双眼失明](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%89%96%E8%85%B9%E4%BA%A7%E5%90%8E%E7%AA%81%E5%8F%91%E8%84%91%E6%A2%97%E8%87%B4%E5%8F%8C%E7%9C%BC%E5%A4%B1%E6%98%8E%23) `105.9K 🔥` `+56%`
1. [辅助驾驶途中司机捡瓶子致1死1伤](https://s.weibo.com/weibo?q=%23%E8%BE%85%E5%8A%A9%E9%A9%BE%E9%A9%B6%E9%80%94%E4%B8%AD%E5%8F%B8%E6%9C%BA%E6%8D%A1%E7%93%B6%E5%AD%90%E8%87%B41%E6%AD%BB1%E4%BC%A4%23) `102.2K 🔥` `+52%`
1. [十日终焉首次外景路透](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E9%A6%96%E6%AC%A1%E5%A4%96%E6%99%AF%E8%B7%AF%E9%80%8F%23) `134.9K 🔥`
1. [佳偶天成 修仙剧](https://s.weibo.com/weibo?q=%23%E4%BD%B3%E5%81%B6%E5%A4%A9%E6%88%90%20%E4%BF%AE%E4%BB%99%E5%89%A7%23) `118.6K 🔥`
1. [美依礼芽回应歌手AI海报 (Mei Yiliya responds to singer AI poster)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BE%9D%E7%A4%BC%E8%8A%BD%E5%9B%9E%E5%BA%94%E6%AD%8C%E6%89%8BAI%E6%B5%B7%E6%8A%A5%23) `104.3K 🔥`
1. [平台明确不要的艺人](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E5%8F%B0%E6%98%8E%E7%A1%AE%E4%B8%8D%E8%A6%81%E7%9A%84%E8%89%BA%E4%BA%BA%23) `236.7K 🔥` `-24%`
1. [上海咖啡店偶遇了赵丽颖](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%92%96%E5%95%A1%E5%BA%97%E5%81%B6%E9%81%87%E4%BA%86%E8%B5%B5%E4%B8%BD%E9%A2%96%23) `113.0K 🔥` `-62%`
1. [AI短剧 融脸 (AI short drama Face Melting)](https://s.weibo.com/weibo?q=%23AI%E7%9F%AD%E5%89%A7%20%E8%9E%8D%E8%84%B8%23) `105.2K 🔥` `-64%`

Updated at 2026-04-28 08:06:39

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
