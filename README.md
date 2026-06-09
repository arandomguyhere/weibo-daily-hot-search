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

1. [莫离热度像跳楼机 (Mo Li is as hot as a jumping machine)](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%E7%83%AD%E5%BA%A6%E5%83%8F%E8%B7%B3%E6%A5%BC%E6%9C%BA%23) `815.9K 🔥` `NEW`
1. [小伙月薪3000签1850万购房合同](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E6%9C%88%E8%96%AA3000%E7%AD%BE1850%E4%B8%87%E8%B4%AD%E6%88%BF%E5%90%88%E5%90%8C%23) `594.9K 🔥` `NEW`
1. [视频感受朝方欢送仪式热烈氛围](https://s.weibo.com/weibo?q=%23%E8%A7%86%E9%A2%91%E6%84%9F%E5%8F%97%E6%9C%9D%E6%96%B9%E6%AC%A2%E9%80%81%E4%BB%AA%E5%BC%8F%E7%83%AD%E7%83%88%E6%B0%9B%E5%9B%B4%23) `582.0K 🔥` `NEW`
1. [papi上京东直播发福利](https://s.weibo.com/weibo?q=%23papi%E4%B8%8A%E4%BA%AC%E4%B8%9C%E7%9B%B4%E6%92%AD%E5%8F%91%E7%A6%8F%E5%88%A9%23) `569.8K 🔥` `NEW`
1. [谢娜演唱会主办方回应](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%BB%E5%8A%9E%E6%96%B9%E5%9B%9E%E5%BA%94%23) `564.1K 🔥` `NEW`
1. [美股](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `541.6K 🔥` `NEW`
1. [新手机回避症](https://s.weibo.com/weibo?q=%23%E6%96%B0%E6%89%8B%E6%9C%BA%E5%9B%9E%E9%81%BF%E7%97%87%23) `512.5K 🔥` `NEW`
1. [白鹿直播美颜灯没电了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%9B%B4%E6%92%AD%E7%BE%8E%E9%A2%9C%E7%81%AF%E6%B2%A1%E7%94%B5%E4%BA%86%23) `502.8K 🔥` `NEW`
1. [一个模仿印度人制作饮料的视频火了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E6%A8%A1%E4%BB%BF%E5%8D%B0%E5%BA%A6%E4%BA%BA%E5%88%B6%E4%BD%9C%E9%A5%AE%E6%96%99%E7%9A%84%E8%A7%86%E9%A2%91%E7%81%AB%E4%BA%86%23) `502.6K 🔥` `NEW`
1. [3岁女童10楼坠亡亲戚赔91万](https://s.weibo.com/weibo?q=%233%E5%B2%81%E5%A5%B3%E7%AB%A510%E6%A5%BC%E5%9D%A0%E4%BA%A1%E4%BA%B2%E6%88%9A%E8%B5%9491%E4%B8%87%23) `502.5K 🔥` `NEW`
1. [国足0比0泰国 (National football team 0-0 Thailand)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B30%E6%AF%940%E6%B3%B0%E5%9B%BD%23) `502.1K 🔥` `NEW`
1. [张凌赫空降](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%A9%BA%E9%99%8D%23) `501.9K 🔥` `NEW`
1. [官俊臣 你们搭把手啊](https://s.weibo.com/weibo?q=%23%E5%AE%98%E4%BF%8A%E8%87%A3%20%E4%BD%A0%E4%BB%AC%E6%90%AD%E6%8A%8A%E6%89%8B%E5%95%8A%23) `501.9K 🔥` `NEW`
1. [Prada群星大合影](https://s.weibo.com/weibo?q=%23Prada%E7%BE%A4%E6%98%9F%E5%A4%A7%E5%90%88%E5%BD%B1%23) `318.9K 🔥` `NEW`
1. [陈小纭大腿小腿几乎一样细](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%8F%E7%BA%AD%E5%A4%A7%E8%85%BF%E5%B0%8F%E8%85%BF%E5%87%A0%E4%B9%8E%E4%B8%80%E6%A0%B7%E7%BB%86%23) `318.6K 🔥` `NEW`
1. [周翊然官配发力了](https://s.weibo.com/weibo?q=%23%E5%91%A8%E7%BF%8A%E7%84%B6%E5%AE%98%E9%85%8D%E5%8F%91%E5%8A%9B%E4%BA%86%23) `309.9K 🔥` `NEW`
1. [瘦的真相就两个字扛饿](https://s.weibo.com/weibo?q=%23%E7%98%A6%E7%9A%84%E7%9C%9F%E7%9B%B8%E5%B0%B1%E4%B8%A4%E4%B8%AA%E5%AD%97%E6%89%9B%E9%A5%BF%23) `256.4K 🔥` `NEW`
1. [关晓彤吻戏](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%90%BB%E6%88%8F%23) `240.1K 🔥` `NEW`
1. [杨幂李沁欧阳娣娣合照](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%9D%8E%E6%B2%81%E6%AC%A7%E9%98%B3%E5%A8%A3%E5%A8%A3%E5%90%88%E7%85%A7%23) `236.4K 🔥` `NEW`
1. [哈啰单车被曝曾欲干掉竞品关键人](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%95%B0%E5%8D%95%E8%BD%A6%E8%A2%AB%E6%9B%9D%E6%9B%BE%E6%AC%B2%E5%B9%B2%E6%8E%89%E7%AB%9E%E5%93%81%E5%85%B3%E9%94%AE%E4%BA%BA%23) `230.5K 🔥` `NEW`
1. [白鹿路人缘 (Bailu Road Popularity)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%B7%AF%E4%BA%BA%E7%BC%98%23) `228.9K 🔥` `NEW`
1. [韦雪整容把脸整歪了](https://s.weibo.com/weibo?q=%23%E9%9F%A6%E9%9B%AA%E6%95%B4%E5%AE%B9%E6%8A%8A%E8%84%B8%E6%95%B4%E6%AD%AA%E4%BA%86%23) `228.7K 🔥` `NEW`
1. [原来泡面已经到这种程度了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%B3%A1%E9%9D%A2%E5%B7%B2%E7%BB%8F%E5%88%B0%E8%BF%99%E7%A7%8D%E7%A8%8B%E5%BA%A6%E4%BA%86%23) `228.6K 🔥` `NEW`
1. [张凌赫百万ins](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%99%BE%E4%B8%87ins%23) `227.9K 🔥` `NEW`
1. [鹅腿阿姨卖的是鸭腿](https://s.weibo.com/weibo?q=%23%E9%B9%85%E8%85%BF%E9%98%BF%E5%A7%A8%E5%8D%96%E7%9A%84%E6%98%AF%E9%B8%AD%E8%85%BF%23) `207.9K 🔥` `NEW`
1. [温峥嵘没参加浪姐五公小考](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B3%A5%E5%B5%98%E6%B2%A1%E5%8F%82%E5%8A%A0%E6%B5%AA%E5%A7%90%E4%BA%94%E5%85%AC%E5%B0%8F%E8%80%83%23) `194.9K 🔥` `NEW`
1. [傅子纯病逝前在巴厘岛已有征兆](https://s.weibo.com/weibo?q=%23%E5%82%85%E5%AD%90%E7%BA%AF%E7%97%85%E9%80%9D%E5%89%8D%E5%9C%A8%E5%B7%B4%E5%8E%98%E5%B2%9B%E5%B7%B2%E6%9C%89%E5%BE%81%E5%85%86%23) `190.7K 🔥` `NEW`
1. [母亲离婚当天遇害女儿指认藏尸地](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E7%A6%BB%E5%A9%9A%E5%BD%93%E5%A4%A9%E9%81%87%E5%AE%B3%E5%A5%B3%E5%84%BF%E6%8C%87%E8%AE%A4%E8%97%8F%E5%B0%B8%E5%9C%B0%23) `180.0K 🔥` `NEW`
1. [女子称移动159元套餐比不上39元套餐](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E7%A7%BB%E5%8A%A8159%E5%85%83%E5%A5%97%E9%A4%90%E6%AF%94%E4%B8%8D%E4%B8%8A39%E5%85%83%E5%A5%97%E9%A4%90%23) `172.7K 🔥` `NEW`
1. [苹果市值一夜蒸发超1.5万亿](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%B8%82%E5%80%BC%E4%B8%80%E5%A4%9C%E8%92%B8%E5%8F%91%E8%B6%851.5%E4%B8%87%E4%BA%BF%23) `171.1K 🔥` `NEW`
1. [陈瑶浪姐合照含月量好高 (Sister Chen Yaolang’s photo contains a very high monthly value)](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E6%B5%AA%E5%A7%90%E5%90%88%E7%85%A7%E5%90%AB%E6%9C%88%E9%87%8F%E5%A5%BD%E9%AB%98%23) `169.8K 🔥` `NEW`
1. [张月团曾沛慈团pk心之火](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E5%9B%A2%E6%9B%BE%E6%B2%9B%E6%85%88%E5%9B%A2pk%E5%BF%83%E4%B9%8B%E7%81%AB%23) `166.8K 🔥` `NEW`
1. [高考完的第一个晚上真的会很幸福](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%AE%8C%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%99%9A%E4%B8%8A%E7%9C%9F%E7%9A%84%E4%BC%9A%E5%BE%88%E5%B9%B8%E7%A6%8F%23) `156.5K 🔥` `NEW`
1. [原来防晒衣真的不能烘干](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E9%98%B2%E6%99%92%E8%A1%A3%E7%9C%9F%E7%9A%84%E4%B8%8D%E8%83%BD%E7%83%98%E5%B9%B2%23) `154.2K 🔥` `NEW`
1. [曝张慧雯要回归电影市场了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BC%A0%E6%85%A7%E9%9B%AF%E8%A6%81%E5%9B%9E%E5%BD%92%E7%94%B5%E5%BD%B1%E5%B8%82%E5%9C%BA%E4%BA%86%23) `154.0K 🔥` `NEW`
1. [向太称刘亦菲感恩干爹一路帮扶](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E7%A7%B0%E5%88%98%E4%BA%A6%E8%8F%B2%E6%84%9F%E6%81%A9%E5%B9%B2%E7%88%B9%E4%B8%80%E8%B7%AF%E5%B8%AE%E6%89%B6%23) `152.4K 🔥` `NEW`
1. [对上班过劳肥有了实感](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E4%B8%8A%E7%8F%AD%E8%BF%87%E5%8A%B3%E8%82%A5%E6%9C%89%E4%BA%86%E5%AE%9E%E6%84%9F%23) `142.8K 🔥` `NEW`
1. [五哈节目组没收克州文旅钱](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%93%88%E8%8A%82%E7%9B%AE%E7%BB%84%E6%B2%A1%E6%94%B6%E5%85%8B%E5%B7%9E%E6%96%87%E6%97%85%E9%92%B1%23) `141.4K 🔥` `NEW`
1. [代斯把和何宣林合照放C位](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E6%96%AF%E6%8A%8A%E5%92%8C%E4%BD%95%E5%AE%A3%E6%9E%97%E5%90%88%E7%85%A7%E6%94%BEC%E4%BD%8D%23) `132.8K 🔥` `NEW`
1. [金正恩夫妇前往机场送行](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%AD%A3%E6%81%A9%E5%A4%AB%E5%A6%87%E5%89%8D%E5%BE%80%E6%9C%BA%E5%9C%BA%E9%80%81%E8%A1%8C%23) `125.5K 🔥` `NEW`
1. [曝郭晓盈骚扰阿丽米热 (Exposed that Guo Xiaoying harassed Alimi)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%83%AD%E6%99%93%E7%9B%88%E9%AA%9A%E6%89%B0%E9%98%BF%E4%B8%BD%E7%B1%B3%E7%83%AD%23) `122.1K 🔥` `NEW`
1. [叶一茜谈23岁就结婚的原因](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E4%B8%80%E8%8C%9C%E8%B0%8823%E5%B2%81%E5%B0%B1%E7%BB%93%E5%A9%9A%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `120.5K 🔥` `NEW`
1. [司机夜间撞29只羊后赔偿32只羊](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E6%9C%BA%E5%A4%9C%E9%97%B4%E6%92%9E29%E5%8F%AA%E7%BE%8A%E5%90%8E%E8%B5%94%E5%81%BF32%E5%8F%AA%E7%BE%8A%23) `117.1K 🔥` `NEW`
1. [向太说多子女家庭注定不会幸福](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E8%AF%B4%E5%A4%9A%E5%AD%90%E5%A5%B3%E5%AE%B6%E5%BA%AD%E6%B3%A8%E5%AE%9A%E4%B8%8D%E4%BC%9A%E5%B9%B8%E7%A6%8F%23) `116.7K 🔥` `NEW`
1. [孟羽童向平安高管求职](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E7%BE%BD%E7%AB%A5%E5%90%91%E5%B9%B3%E5%AE%89%E9%AB%98%E7%AE%A1%E6%B1%82%E8%81%8C%23) `110.5K 🔥` `NEW`
1. [任天堂直面会](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%A4%A9%E5%A0%82%E7%9B%B4%E9%9D%A2%E4%BC%9A%23) `110.5K 🔥` `NEW`
1. [瑞幸咖啡.skill](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E5%92%96%E5%95%A1.skill%23) `109.8K 🔥` `NEW`
1. [王传福回应比亚迪股价被低估](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E7%A6%8F%E5%9B%9E%E5%BA%94%E6%AF%94%E4%BA%9A%E8%BF%AA%E8%82%A1%E4%BB%B7%E8%A2%AB%E4%BD%8E%E4%BC%B0%23) `109.7K 🔥` `NEW`
1. [言语利他 行动利己](https://s.weibo.com/weibo?q=%23%E8%A8%80%E8%AF%AD%E5%88%A9%E4%BB%96%20%E8%A1%8C%E5%8A%A8%E5%88%A9%E5%B7%B1%23) `109.7K 🔥` `NEW`
1. [北京天气 宜居城市](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%A4%A9%E6%B0%94%20%E5%AE%9C%E5%B1%85%E5%9F%8E%E5%B8%82%23) `97.7K 🔥` `NEW`

Updated at 2026-06-10 00:39:00

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
