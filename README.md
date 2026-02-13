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

1. [王鑫被查 (Wang Xin was investigated)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%91%AB%E8%A2%AB%E6%9F%A5%23) `1.2M 🔥` `NEW`
1. [胖东来永不上市](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E6%B0%B8%E4%B8%8D%E4%B8%8A%E5%B8%82%23) `842.6K 🔥` `NEW`
1. [解锁年味儿中的幸福密码](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E9%94%81%E5%B9%B4%E5%91%B3%E5%84%BF%E4%B8%AD%E7%9A%84%E5%B9%B8%E7%A6%8F%E5%AF%86%E7%A0%81%23) `687.6K 🔥` `NEW`
1. [慕胥辞官宣改名白日提灯](https://s.weibo.com/weibo?q=%23%E6%85%95%E8%83%A5%E8%BE%9E%E5%AE%98%E5%AE%A3%E6%94%B9%E5%90%8D%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `327.2K 🔥` `NEW`
1. [刘少昂短短几秒发生了什么](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%B0%91%E6%98%82%E7%9F%AD%E7%9F%AD%E5%87%A0%E7%A7%92%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88%23) `295.5K 🔥` `NEW`
1. [不要跟老人提喜欢吃什么](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E8%B7%9F%E8%80%81%E4%BA%BA%E6%8F%90%E5%96%9C%E6%AC%A2%E5%90%83%E4%BB%80%E4%B9%88%23) `275.7K 🔥` `NEW`
1. [中国短道速滑](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%23) `251.3K 🔥` `NEW`
1. [总台声明](https://s.weibo.com/weibo?q=%23%E6%80%BB%E5%8F%B0%E5%A3%B0%E6%98%8E%23) `237.9K 🔥` `NEW`
1. [今天也没变成玩偶呢官宣](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%A9%E4%B9%9F%E6%B2%A1%E5%8F%98%E6%88%90%E7%8E%A9%E5%81%B6%E5%91%A2%E5%AE%98%E5%AE%A3%23) `171.1K 🔥` `NEW`
1. [美国年轻人为何想成为中国人](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%B8%BA%E4%BD%95%E6%83%B3%E6%88%90%E4%B8%BA%E4%B8%AD%E5%9B%BD%E4%BA%BA%23) `157.6K 🔥` `NEW`
1. [王俊凯新歌 (Wang Junkai's new song)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%96%B0%E6%AD%8C%23) `157.4K 🔥` `NEW`
1. [赵今麦打碟](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E6%89%93%E7%A2%9F%23) `156.7K 🔥` `NEW`
1. [保罗夫妇决定暂别创作](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E7%BD%97%E5%A4%AB%E5%A6%87%E5%86%B3%E5%AE%9A%E6%9A%82%E5%88%AB%E5%88%9B%E4%BD%9C%23) `153.1K 🔥` `NEW`
1. [TFING头像换回来了](https://s.weibo.com/weibo?q=%23TFING%E5%A4%B4%E5%83%8F%E6%8D%A2%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `150.8K 🔥` `NEW`
1. [BLACKPINK新专配置公开](https://s.weibo.com/weibo?q=%23BLACKPINK%E6%96%B0%E4%B8%93%E9%85%8D%E7%BD%AE%E5%85%AC%E5%BC%80%23) `144.5K 🔥` `NEW`
1. [爱泼斯坦牵出美国学术界名人](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E7%89%B5%E5%87%BA%E7%BE%8E%E5%9B%BD%E5%AD%A6%E6%9C%AF%E7%95%8C%E5%90%8D%E4%BA%BA%23) `135.4K 🔥` `NEW`
1. [林孝埈从不怕重来一次](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%88%E4%BB%8E%E4%B8%8D%E6%80%95%E9%87%8D%E6%9D%A5%E4%B8%80%E6%AC%A1%23) `135.1K 🔥` `NEW`
1. [中戏已有两位表演系主任主动投案](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%88%8F%E5%B7%B2%E6%9C%89%E4%B8%A4%E4%BD%8D%E8%A1%A8%E6%BC%94%E7%B3%BB%E4%B8%BB%E4%BB%BB%E4%B8%BB%E5%8A%A8%E6%8A%95%E6%A1%88%23) `134.6K 🔥` `NEW`
1. [女演员曾公开称美国上流精英吃婴儿](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%BC%94%E5%91%98%E6%9B%BE%E5%85%AC%E5%BC%80%E7%A7%B0%E7%BE%8E%E5%9B%BD%E4%B8%8A%E6%B5%81%E7%B2%BE%E8%8B%B1%E5%90%83%E5%A9%B4%E5%84%BF%23) `134.6K 🔥` `NEW`
1. [炎亚纶称飞轮海情分有可能重新点燃](https://s.weibo.com/weibo?q=%23%E7%82%8E%E4%BA%9A%E7%BA%B6%E7%A7%B0%E9%A3%9E%E8%BD%AE%E6%B5%B7%E6%83%85%E5%88%86%E6%9C%89%E5%8F%AF%E8%83%BD%E9%87%8D%E6%96%B0%E7%82%B9%E7%87%83%23) `133.9K 🔥` `NEW`
1. [炎亚纶自曝通过吴尊传话 (Aaron Yan revealed that he sent messages through Wu Zun)](https://s.weibo.com/weibo?q=%23%E7%82%8E%E4%BA%9A%E7%BA%B6%E8%87%AA%E6%9B%9D%E9%80%9A%E8%BF%87%E5%90%B4%E5%B0%8A%E4%BC%A0%E8%AF%9D%23) `133.8K 🔥` `NEW`
1. [民警拖男子进女厕群殴获刑8月](https://s.weibo.com/weibo?q=%23%E6%B0%91%E8%AD%A6%E6%8B%96%E7%94%B7%E5%AD%90%E8%BF%9B%E5%A5%B3%E5%8E%95%E7%BE%A4%E6%AE%B4%E8%8E%B7%E5%88%918%E6%9C%88%23) `133.1K 🔥` `NEW`
1. [白日提灯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `117.5K 🔥` `NEW`
1. [水贝黄金暴雷后血本无归的普通人](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E8%B4%9D%E9%BB%84%E9%87%91%E6%9A%B4%E9%9B%B7%E5%90%8E%E8%A1%80%E6%9C%AC%E6%97%A0%E5%BD%92%E7%9A%84%E6%99%AE%E9%80%9A%E4%BA%BA%23) `116.2K 🔥` `NEW`
1. [连亏7年TVB终于赚钱了](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E4%BA%8F7%E5%B9%B4TVB%E7%BB%88%E4%BA%8E%E8%B5%9A%E9%92%B1%E4%BA%86%23) `111.3K 🔥` `NEW`
1. [六图读懂消费新气象](https://s.weibo.com/weibo?q=%23%E5%85%AD%E5%9B%BE%E8%AF%BB%E6%87%82%E6%B6%88%E8%B4%B9%E6%96%B0%E6%B0%94%E8%B1%A1%23) `108.2K 🔥` `NEW`
1. [48岁上中老年恋综追爱](https://s.weibo.com/weibo?q=%2348%E5%B2%81%E4%B8%8A%E4%B8%AD%E8%80%81%E5%B9%B4%E6%81%8B%E7%BB%BC%E8%BF%BD%E7%88%B1%23) `107.9K 🔥` `NEW`
1. [潮汕女孩一出场像从壁画走出来](https://s.weibo.com/weibo?q=%23%E6%BD%AE%E6%B1%95%E5%A5%B3%E5%AD%A9%E4%B8%80%E5%87%BA%E5%9C%BA%E5%83%8F%E4%BB%8E%E5%A3%81%E7%94%BB%E8%B5%B0%E5%87%BA%E6%9D%A5%23) `100.0K 🔥` `NEW`
1. [郑嘉颖被问还记得若曦吗](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%98%89%E9%A2%96%E8%A2%AB%E9%97%AE%E8%BF%98%E8%AE%B0%E5%BE%97%E8%8B%A5%E6%9B%A6%E5%90%97%23) `96.3K 🔥` `NEW`
1. [中国冰壶女队队员回应战胜卫冕冠军](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%86%B0%E5%A3%B6%E5%A5%B3%E9%98%9F%E9%98%9F%E5%91%98%E5%9B%9E%E5%BA%94%E6%88%98%E8%83%9C%E5%8D%AB%E5%86%95%E5%86%A0%E5%86%9B%23) `94.7K 🔥` `NEW`
1. [特种兵之后年轻人爱上中转式旅行 (After the special forces, young people fell in love with transit travel)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E7%A7%8D%E5%85%B5%E4%B9%8B%E5%90%8E%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%88%B1%E4%B8%8A%E4%B8%AD%E8%BD%AC%E5%BC%8F%E6%97%85%E8%A1%8C%23) `94.5K 🔥` `NEW`
1. [李一桐陈雀儿好美](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E9%99%88%E9%9B%80%E5%84%BF%E5%A5%BD%E7%BE%8E%23) `88.6K 🔥` `NEW`
1. [过年打麻将一场输赢超300算赌博](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%B9%B4%E6%89%93%E9%BA%BB%E5%B0%86%E4%B8%80%E5%9C%BA%E8%BE%93%E8%B5%A2%E8%B6%85300%E7%AE%97%E8%B5%8C%E5%8D%9A%23) `74.1K 🔥` `NEW`
1. [王楚然丞磊吻戏是现挂的](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E4%B8%9E%E7%A3%8A%E5%90%BB%E6%88%8F%E6%98%AF%E7%8E%B0%E6%8C%82%E7%9A%84%23) `70.6K 🔥` `NEW`
1. [网友称绿皮车太热乘务员开窗又关上](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E7%A7%B0%E7%BB%BF%E7%9A%AE%E8%BD%A6%E5%A4%AA%E7%83%AD%E4%B9%98%E5%8A%A1%E5%91%98%E5%BC%80%E7%AA%97%E5%8F%88%E5%85%B3%E4%B8%8A%23) `68.9K 🔥` `NEW`
1. [中国女子冰壶拿下冬奥开门红](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E5%86%B0%E5%A3%B6%E6%8B%BF%E4%B8%8B%E5%86%AC%E5%A5%A5%E5%BC%80%E9%97%A8%E7%BA%A2%23) `64.9K 🔥` `NEW`
1. [刘耀文哄宋亚轩](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E5%93%84%E5%AE%8B%E4%BA%9A%E8%BD%A9%23) `98.1K 🔥` `+82%`
1. [孙龙 (Sun Long)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%BE%99%23) `90.3K 🔥` `+24%`
1. [菲一博主吃剧毒魔鬼蟹后不治身亡](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E4%B8%80%E5%8D%9A%E4%B8%BB%E5%90%83%E5%89%A7%E6%AF%92%E9%AD%94%E9%AC%BC%E8%9F%B9%E5%90%8E%E4%B8%8D%E6%B2%BB%E8%BA%AB%E4%BA%A1%23) `147.6K 🔥`
1. [虞书欣衣帽间 (Yu Shuxin's Cloakroom)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%A1%A3%E5%B8%BD%E9%97%B4%23) `132.7K 🔥`
1. [气血不足的人一定要早睡早起](https://s.weibo.com/weibo?q=%23%E6%B0%94%E8%A1%80%E4%B8%8D%E8%B6%B3%E7%9A%84%E4%BA%BA%E4%B8%80%E5%AE%9A%E8%A6%81%E6%97%A9%E7%9D%A1%E6%97%A9%E8%B5%B7%23) `107.2K 🔥`
1. [影石公司年会一员工获保时捷](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E7%9F%B3%E5%85%AC%E5%8F%B8%E5%B9%B4%E4%BC%9A%E4%B8%80%E5%91%98%E5%B7%A5%E8%8E%B7%E4%BF%9D%E6%97%B6%E6%8D%B7%23) `155.3K 🔥` `-32%`
1. [金价银价深夜跳水 (Gold and silver prices plunge late at night)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E9%93%B6%E4%BB%B7%E6%B7%B1%E5%A4%9C%E8%B7%B3%E6%B0%B4%23) `133.1K 🔥` `-21%`
1. [22岁主播每天焊妆两次确诊肺炎 (The 22-year-old anchor was diagnosed with pneumonia after welding makeup twice a day)](https://s.weibo.com/weibo?q=%2322%E5%B2%81%E4%B8%BB%E6%92%AD%E6%AF%8F%E5%A4%A9%E7%84%8A%E5%A6%86%E4%B8%A4%E6%AC%A1%E7%A1%AE%E8%AF%8A%E8%82%BA%E7%82%8E%23) `115.9K 🔥` `-51%`
1. [丞磊在飞机上帮王楚然剔牙 (Cheng Lei helped Wang Churan pick his teeth on the plane)](https://s.weibo.com/weibo?q=%23%E4%B8%9E%E7%A3%8A%E5%9C%A8%E9%A3%9E%E6%9C%BA%E4%B8%8A%E5%B8%AE%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%89%94%E7%89%99%23) `109.1K 🔥` `-43%`
1. [Deepseek被指变冷淡了 (Deepseek is accused of becoming cold)](https://s.weibo.com/weibo?q=%23Deepseek%E8%A2%AB%E6%8C%87%E5%8F%98%E5%86%B7%E6%B7%A1%E4%BA%86%23) `97.7K 🔥` `-58%`
1. [林孝埈状态](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%88%E7%8A%B6%E6%80%81%23) `94.3K 🔥` `-46%`
1. [孙龙银牌](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%BE%99%E9%93%B6%E7%89%8C%23) `77.3K 🔥` `-93%`
1. [任子威 黄大宪成功淘汰](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%AD%90%E5%A8%81%20%E9%BB%84%E5%A4%A7%E5%AE%AA%E6%88%90%E5%8A%9F%E6%B7%98%E6%B1%B0%23) `76.1K 🔥` `-57%`
1. [草莓真的是最脏的水果吗](https://s.weibo.com/weibo?q=%23%E8%8D%89%E8%8E%93%E7%9C%9F%E7%9A%84%E6%98%AF%E6%9C%80%E8%84%8F%E7%9A%84%E6%B0%B4%E6%9E%9C%E5%90%97%23) `72.5K 🔥` `-40%`

Updated at 2026-02-13 11:17:47

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
