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

1. [山东高考分数线 (Shandong college entrance examination score line)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E9%AB%98%E8%80%83%E5%88%86%E6%95%B0%E7%BA%BF%23) `2.2M 🔥` `NEW`
1. [浙江高考分数线](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E9%AB%98%E8%80%83%E5%88%86%E6%95%B0%E7%BA%BF%23) `1.3M 🔥` `NEW`
1. [中国链给世界稳稳的确定性](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%93%BE%E7%BB%99%E4%B8%96%E7%95%8C%E7%A8%B3%E7%A8%B3%E7%9A%84%E7%A1%AE%E5%AE%9A%E6%80%A7%23) `983.3K 🔥` `NEW`
1. [宝藏大学安利计划](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E8%97%8F%E5%A4%A7%E5%AD%A6%E5%AE%89%E5%88%A9%E8%AE%A1%E5%88%92%23) `905.1K 🔥` `NEW`
1. [麻醉学就业率几乎100%](https://s.weibo.com/weibo?q=%23%E9%BA%BB%E9%86%89%E5%AD%A6%E5%B0%B1%E4%B8%9A%E7%8E%87%E5%87%A0%E4%B9%8E100%25%23) `835.8K 🔥` `NEW`
1. [韩国输球众生相](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%BE%93%E7%90%83%E4%BC%97%E7%94%9F%E7%9B%B8%23) `543.1K 🔥` `NEW`
1. [孙颖莎格子衬衫配领带](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%A0%BC%E5%AD%90%E8%A1%AC%E8%A1%AB%E9%85%8D%E9%A2%86%E5%B8%A6%23) `473.8K 🔥` `NEW`
1. [日本韩国世界杯死亡前景](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%9F%A9%E5%9B%BD%E4%B8%96%E7%95%8C%E6%9D%AF%E6%AD%BB%E4%BA%A1%E5%89%8D%E6%99%AF%23) `460.2K 🔥` `NEW`
1. [曾沛慈张月陈瑶已解锁总决赛个人直拍](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%BC%A0%E6%9C%88%E9%99%88%E7%91%B6%E5%B7%B2%E8%A7%A3%E9%94%81%E6%80%BB%E5%86%B3%E8%B5%9B%E4%B8%AA%E4%BA%BA%E7%9B%B4%E6%8B%8D%23) `459.8K 🔥` `NEW`
1. [蔚来高管感谢增程车让大家爱上用电](https://s.weibo.com/weibo?q=%23%E8%94%9A%E6%9D%A5%E9%AB%98%E7%AE%A1%E6%84%9F%E8%B0%A2%E5%A2%9E%E7%A8%8B%E8%BD%A6%E8%AE%A9%E5%A4%A7%E5%AE%B6%E7%88%B1%E4%B8%8A%E7%94%A8%E7%94%B5%23) `442.8K 🔥` `NEW`
1. [方媛分房拒绝李雪琴 (Fang Yuan refuses Li Xueqin to be allocated a room)](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AA%9B%E5%88%86%E6%88%BF%E6%8B%92%E7%BB%9D%E6%9D%8E%E9%9B%AA%E7%90%B4%23) `439.6K 🔥` `NEW`
1. [向佐弟弟向佑身体疑似躯体化](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%BD%90%E5%BC%9F%E5%BC%9F%E5%90%91%E4%BD%91%E8%BA%AB%E4%BD%93%E7%96%91%E4%BC%BC%E8%BA%AF%E4%BD%93%E5%8C%96%23) `438.1K 🔥` `NEW`
1. [山东高考成绩](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E9%AB%98%E8%80%83%E6%88%90%E7%BB%A9%23) `435.6K 🔥` `NEW`
1. [赵今麦侧边镂空衬衫](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E4%BE%A7%E8%BE%B9%E9%95%82%E7%A9%BA%E8%A1%AC%E8%A1%AB%23) `429.2K 🔥` `NEW`
1. [高考493分放弃本科读专科女生现状](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83493%E5%88%86%E6%94%BE%E5%BC%83%E6%9C%AC%E7%A7%91%E8%AF%BB%E4%B8%93%E7%A7%91%E5%A5%B3%E7%94%9F%E7%8E%B0%E7%8A%B6%23) `404.1K 🔥` `NEW`
1. [久病床前无孝咪](https://s.weibo.com/weibo?q=%23%E4%B9%85%E7%97%85%E5%BA%8A%E5%89%8D%E6%97%A0%E5%AD%9D%E5%92%AA%23) `395.4K 🔥` `NEW`
1. [谷歌前CEO批中国AI开源](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E6%AD%8C%E5%89%8DCEO%E6%89%B9%E4%B8%AD%E5%9B%BDAI%E5%BC%80%E6%BA%90%23) `395.2K 🔥` `NEW`
1. [还以为胡先煦本名叫谭尽](https://s.weibo.com/weibo?q=%23%E8%BF%98%E4%BB%A5%E4%B8%BA%E8%83%A1%E5%85%88%E7%85%A6%E6%9C%AC%E5%90%8D%E5%8F%AB%E8%B0%AD%E5%B0%BD%23) `395.2K 🔥` `NEW`
1. [13岁华人女孩在委内瑞拉地震中遇难](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E5%8D%8E%E4%BA%BA%E5%A5%B3%E5%AD%A9%E5%9C%A8%E5%A7%94%E5%86%85%E7%91%9E%E6%8B%89%E5%9C%B0%E9%9C%87%E4%B8%AD%E9%81%87%E9%9A%BE%23) `367.1K 🔥` `NEW`
1. [韩国球员怒斥对手庆祝像叫狗](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%90%83%E5%91%98%E6%80%92%E6%96%A5%E5%AF%B9%E6%89%8B%E5%BA%86%E7%A5%9D%E5%83%8F%E5%8F%AB%E7%8B%97%23) `365.0K 🔥` `NEW`
1. [郑恺请宋雨琦团队60人吃饭 (Zheng Kai invited 60 people from Song Yuqi’s team to dinner)](https://s.weibo.com/weibo?q=%23%E9%83%91%E6%81%BA%E8%AF%B7%E5%AE%8B%E9%9B%A8%E7%90%A6%E5%9B%A2%E9%98%9F60%E4%BA%BA%E5%90%83%E9%A5%AD%23) `363.8K 🔥` `NEW`
1. [马杜罗最新发声](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%9D%9C%E7%BD%97%E6%9C%80%E6%96%B0%E5%8F%91%E5%A3%B0%23) `293.0K 🔥` `NEW`
1. [耐克广告疑似抄袭李宇春海报](https://s.weibo.com/weibo?q=%23%E8%80%90%E5%85%8B%E5%B9%BF%E5%91%8A%E7%96%91%E4%BC%BC%E6%8A%84%E8%A2%AD%E6%9D%8E%E5%AE%87%E6%98%A5%E6%B5%B7%E6%8A%A5%23) `269.0K 🔥` `NEW`
1. [陈慧敏丈夫称能做的都做了](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%85%A7%E6%95%8F%E4%B8%88%E5%A4%AB%E7%A7%B0%E8%83%BD%E5%81%9A%E7%9A%84%E9%83%BD%E5%81%9A%E4%BA%86%23) `268.3K 🔥` `NEW`
1. [黄仁勋称物理AI是下一波增长浪潮](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E7%A7%B0%E7%89%A9%E7%90%86AI%E6%98%AF%E4%B8%8B%E4%B8%80%E6%B3%A2%E5%A2%9E%E9%95%BF%E6%B5%AA%E6%BD%AE%23) `267.6K 🔥` `NEW`
1. [十日终焉预告2连发](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E9%A2%84%E5%91%8A2%E8%BF%9E%E5%8F%91%23) `265.5K 🔥` `NEW`
1. [17岁女孩长期吸食笑气无法行走](https://s.weibo.com/weibo?q=%2317%E5%B2%81%E5%A5%B3%E5%AD%A9%E9%95%BF%E6%9C%9F%E5%90%B8%E9%A3%9F%E7%AC%91%E6%B0%94%E6%97%A0%E6%B3%95%E8%A1%8C%E8%B5%B0%23) `264.4K 🔥` `NEW`
1. [广西分数线](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E5%88%86%E6%95%B0%E7%BA%BF%23) `264.0K 🔥` `NEW`
1. [00后小伙按摩持刀逼技师脱衣后坠亡](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E5%B0%8F%E4%BC%99%E6%8C%89%E6%91%A9%E6%8C%81%E5%88%80%E9%80%BC%E6%8A%80%E5%B8%88%E8%84%B1%E8%A1%A3%E5%90%8E%E5%9D%A0%E4%BA%A1%23) `250.8K 🔥` `NEW`
1. [李纯两年没戏拍坐法院哭](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BA%AF%E4%B8%A4%E5%B9%B4%E6%B2%A1%E6%88%8F%E6%8B%8D%E5%9D%90%E6%B3%95%E9%99%A2%E5%93%AD%23) `228.4K 🔥` `NEW`
1. [浙江高考成绩 (Zhejiang college entrance examination results)](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E9%AB%98%E8%80%83%E6%88%90%E7%BB%A9%23) `218.3K 🔥` `NEW`
1. [山西分数线](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E5%88%86%E6%95%B0%E7%BA%BF%23) `182.4K 🔥` `NEW`
1. [汪苏泷这26秒](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E8%BF%9926%E7%A7%92%23) `167.5K 🔥` `NEW`
1. [建议每个人检查父母的打车流程](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%AF%8F%E4%B8%AA%E4%BA%BA%E6%A3%80%E6%9F%A5%E7%88%B6%E6%AF%8D%E7%9A%84%E6%89%93%E8%BD%A6%E6%B5%81%E7%A8%8B%23) `162.0K 🔥` `NEW`
1. [papi拍完繁花两年没吃鸡爪](https://s.weibo.com/weibo?q=%23papi%E6%8B%8D%E5%AE%8C%E7%B9%81%E8%8A%B1%E4%B8%A4%E5%B9%B4%E6%B2%A1%E5%90%83%E9%B8%A1%E7%88%AA%23) `160.9K 🔥` `NEW`
1. [社会第一课是找工作和租房](https://s.weibo.com/weibo?q=%23%E7%A4%BE%E4%BC%9A%E7%AC%AC%E4%B8%80%E8%AF%BE%E6%98%AF%E6%89%BE%E5%B7%A5%E4%BD%9C%E5%92%8C%E7%A7%9F%E6%88%BF%23) `160.7K 🔥` `NEW`
1. [鞠婧祎也看铁拳教育了](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E4%B9%9F%E7%9C%8B%E9%93%81%E6%8B%B3%E6%95%99%E8%82%B2%E4%BA%86%23) `160.7K 🔥` `NEW`
1. [双胞胎姐妹同考692分报考同所大学](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E8%83%9E%E8%83%8E%E5%A7%90%E5%A6%B9%E5%90%8C%E8%80%83692%E5%88%86%E6%8A%A5%E8%80%83%E5%90%8C%E6%89%80%E5%A4%A7%E5%AD%A6%23) `140.6K 🔥` `NEW`
1. [做任何事情都要有上位者心态](https://s.weibo.com/weibo?q=%23%E5%81%9A%E4%BB%BB%E4%BD%95%E4%BA%8B%E6%83%85%E9%83%BD%E8%A6%81%E6%9C%89%E4%B8%8A%E4%BD%8D%E8%80%85%E5%BF%83%E6%80%81%23) `135.3K 🔥` `NEW`
1. [日本本州7.1级地震](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%9C%AC%E5%B7%9E7.1%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `131.3K 🔥` `NEW`
1. [黄一鸣账号被禁止关注 (Huang Yiming’s account has been banned from following)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%B8%80%E9%B8%A3%E8%B4%A6%E5%8F%B7%E8%A2%AB%E7%A6%81%E6%AD%A2%E5%85%B3%E6%B3%A8%23) `130.7K 🔥` `NEW`
1. [厂长Jiejie再度联手](https://s.weibo.com/weibo?q=%23%E5%8E%82%E9%95%BFJiejie%E5%86%8D%E5%BA%A6%E8%81%94%E6%89%8B%23) `130.4K 🔥` `NEW`
1. [张钧甯原名更难认了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%92%A7%E7%94%AF%E5%8E%9F%E5%90%8D%E6%9B%B4%E9%9A%BE%E8%AE%A4%E4%BA%86%23) `481.7K 🔥` `-74%`
1. [网红陈慧敏引产](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E9%99%88%E6%85%A7%E6%95%8F%E5%BC%95%E4%BA%A7%23) `364.6K 🔥` `-50%`
1. [向太看完向佐采访感到失落](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E7%9C%8B%E5%AE%8C%E5%90%91%E4%BD%90%E9%87%87%E8%AE%BF%E6%84%9F%E5%88%B0%E5%A4%B1%E8%90%BD%23) `266.7K 🔥` `-63%`
1. [马思唯女友撞脸angelababy](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%80%9D%E5%94%AF%E5%A5%B3%E5%8F%8B%E6%92%9E%E8%84%B8angelababy%23) `266.4K 🔥` `-63%`
1. [分数线](https://s.weibo.com/weibo?q=%23%E5%88%86%E6%95%B0%E7%BA%BF%23) `263.4K 🔥` `-84%`
1. [拼好床真的超出我对苦的认知了 (Putting the bed together is really beyond my understanding of suffering.)](https://s.weibo.com/weibo?q=%23%E6%8B%BC%E5%A5%BD%E5%BA%8A%E7%9C%9F%E7%9A%84%E8%B6%85%E5%87%BA%E6%88%91%E5%AF%B9%E8%8B%A6%E7%9A%84%E8%AE%A4%E7%9F%A5%E4%BA%86%23) `246.5K 🔥` `-68%`
1. [豆包价格](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E4%BB%B7%E6%A0%BC%23) `158.4K 🔥` `-80%`
1. [打开了一本名为刻薄的书](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%BC%80%E4%BA%86%E4%B8%80%E6%9C%AC%E5%90%8D%E4%B8%BA%E5%88%BB%E8%96%84%E7%9A%84%E4%B9%A6%23) `131.4K 🔥` `-82%`
1. [杨紫妆造水平](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%A6%86%E9%80%A0%E6%B0%B4%E5%B9%B3%23) `131.1K 🔥` `-80%`

Updated at 2026-06-25 15:57:55

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
