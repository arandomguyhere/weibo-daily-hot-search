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

1. [逐玉一念演唱会官宣 (Zhuyu Yi Nian concert official announcement)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E4%B8%80%E5%BF%B5%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%98%E5%AE%A3%23) `2.0M 🔥` `NEW`
1. [离职5年多收到了前同事退的份子钱](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E8%81%8C5%E5%B9%B4%E5%A4%9A%E6%94%B6%E5%88%B0%E4%BA%86%E5%89%8D%E5%90%8C%E4%BA%8B%E9%80%80%E7%9A%84%E4%BB%BD%E5%AD%90%E9%92%B1%23) `965.3K 🔥` `NEW`
1. [身份证照片最接近别人看到的自己](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BB%BD%E8%AF%81%E7%85%A7%E7%89%87%E6%9C%80%E6%8E%A5%E8%BF%91%E5%88%AB%E4%BA%BA%E7%9C%8B%E5%88%B0%E7%9A%84%E8%87%AA%E5%B7%B1%23) `965.3K 🔥` `NEW`
1. [国家网络身份认证全面铺开](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E7%BD%91%E7%BB%9C%E8%BA%AB%E4%BB%BD%E8%AE%A4%E8%AF%81%E5%85%A8%E9%9D%A2%E9%93%BA%E5%BC%80%23) `955.3K 🔥` `NEW`
1. [现在谈恋爱也是赶上好时候了](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E8%B0%88%E6%81%8B%E7%88%B1%E4%B9%9F%E6%98%AF%E8%B5%B6%E4%B8%8A%E5%A5%BD%E6%97%B6%E5%80%99%E4%BA%86%23) `953.8K 🔥` `NEW`
1. [王俊凯本次售票无退票权益](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%9C%AC%E6%AC%A1%E5%94%AE%E7%A5%A8%E6%97%A0%E9%80%80%E7%A5%A8%E6%9D%83%E7%9B%8A%23) `805.6K 🔥` `NEW`
1. [TF家族运动会](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%E8%BF%90%E5%8A%A8%E4%BC%9A%23) `717.6K 🔥` `NEW`
1. [买车的欲望到了极致](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E8%BD%A6%E7%9A%84%E6%AC%B2%E6%9C%9B%E5%88%B0%E4%BA%86%E6%9E%81%E8%87%B4%23) `666.3K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `620.8K 🔥` `NEW`
1. [世界杯决赛规则调整](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%E8%A7%84%E5%88%99%E8%B0%83%E6%95%B4%23) `564.0K 🔥` `NEW`
1. [王俊凯二开关掉视野不佳的区域 (Wang Junkai's second switch removes areas with poor visibility)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%BA%8C%E5%BC%80%E5%85%B3%E6%8E%89%E8%A7%86%E9%87%8E%E4%B8%8D%E4%BD%B3%E7%9A%84%E5%8C%BA%E5%9F%9F%23) `444.3K 🔥` `NEW`
1. [野狗骨头](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%23) `392.9K 🔥` `NEW`
1. [打工一年就有脂肪肝了](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%B7%A5%E4%B8%80%E5%B9%B4%E5%B0%B1%E6%9C%89%E8%84%82%E8%82%AA%E8%82%9D%E4%BA%86%23) `390.7K 🔥` `NEW`
1. [不吃压力之人选华莱士果咖](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%90%83%E5%8E%8B%E5%8A%9B%E4%B9%8B%E4%BA%BA%E9%80%89%E5%8D%8E%E8%8E%B1%E5%A3%AB%E6%9E%9C%E5%92%96%23) `386.0K 🔥` `NEW`
1. [时代少年团 青岛](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E9%9D%92%E5%B2%9B%23) `382.7K 🔥` `NEW`
1. [功夫女足的演员餐](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%9A%84%E6%BC%94%E5%91%98%E9%A4%90%23) `359.1K 🔥` `NEW`
1. [黄灿灿想买车](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E6%83%B3%E4%B9%B0%E8%BD%A6%23) `354.3K 🔥` `NEW`
1. [祝绪丹加盟和颂传媒](https://s.weibo.com/weibo?q=%23%E7%A5%9D%E7%BB%AA%E4%B8%B9%E5%8A%A0%E7%9B%9F%E5%92%8C%E9%A2%82%E4%BC%A0%E5%AA%92%23) `345.2K 🔥` `NEW`
1. [杨洋首尔大赏断层第一](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E9%A6%96%E5%B0%94%E5%A4%A7%E8%B5%8F%E6%96%AD%E5%B1%82%E7%AC%AC%E4%B8%80%23) `343.3K 🔥` `NEW`
1. [西班牙队夺冠奖金曝光](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%98%9F%E5%A4%BA%E5%86%A0%E5%A5%96%E9%87%91%E6%9B%9D%E5%85%89%23) `342.5K 🔥` `NEW`
1. [韩国崔秀勋揭露日本餐厅重大丑闻 (South Korea's Choi Soo-hoon reveals major Japanese restaurant scandal)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%B4%94%E7%A7%80%E5%8B%8B%E6%8F%AD%E9%9C%B2%E6%97%A5%E6%9C%AC%E9%A4%90%E5%8E%85%E9%87%8D%E5%A4%A7%E4%B8%91%E9%97%BB%23) `315.5K 🔥` `NEW`
1. [东北人的乐观不是娱乐化洪灾的借口](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%8C%97%E4%BA%BA%E7%9A%84%E4%B9%90%E8%A7%82%E4%B8%8D%E6%98%AF%E5%A8%B1%E4%B9%90%E5%8C%96%E6%B4%AA%E7%81%BE%E7%9A%84%E5%80%9F%E5%8F%A3%23) `313.8K 🔥` `NEW`
1. [又一比赛获奖作品疑AI生成](https://s.weibo.com/weibo?q=%23%E5%8F%88%E4%B8%80%E6%AF%94%E8%B5%9B%E8%8E%B7%E5%A5%96%E4%BD%9C%E5%93%81%E7%96%91AI%E7%94%9F%E6%88%90%23) `310.8K 🔥` `NEW`
1. [未定事件簿](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E5%AE%9A%E4%BA%8B%E4%BB%B6%E7%B0%BF%23) `309.3K 🔥` `NEW`
1. [吴尊父子陪练的朱珍珍温网夺冠](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%B0%8A%E7%88%B6%E5%AD%90%E9%99%AA%E7%BB%83%E7%9A%84%E6%9C%B1%E7%8F%8D%E7%8F%8D%E6%B8%A9%E7%BD%91%E5%A4%BA%E5%86%A0%23) `300.5K 🔥` `NEW`
1. [金靖说张凌赫披个麻布都帅](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%E8%AF%B4%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%8A%AB%E4%B8%AA%E9%BA%BB%E5%B8%83%E9%83%BD%E5%B8%85%23) `287.9K 🔥` `NEW`
1. [孔雪儿邓凯官宣逐玉演唱会](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E9%82%93%E5%87%AF%E5%AE%98%E5%AE%A3%E9%80%90%E7%8E%89%E6%BC%94%E5%94%B1%E4%BC%9A%23) `260.0K 🔥` `NEW`
1. [犬主称狗狗吃了狗粮后吐血身亡](https://s.weibo.com/weibo?q=%23%E7%8A%AC%E4%B8%BB%E7%A7%B0%E7%8B%97%E7%8B%97%E5%90%83%E4%BA%86%E7%8B%97%E7%B2%AE%E5%90%8E%E5%90%90%E8%A1%80%E8%BA%AB%E4%BA%A1%23) `241.2K 🔥` `NEW`
1. [密室大逃脱](https://s.weibo.com/weibo?q=%23%E5%AF%86%E5%AE%A4%E5%A4%A7%E9%80%83%E8%84%B1%23) `223.9K 🔥` `NEW`
1. [原来入伏才是祛湿黄金期](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%85%A5%E4%BC%8F%E6%89%8D%E6%98%AF%E7%A5%9B%E6%B9%BF%E9%BB%84%E9%87%91%E6%9C%9F%23) `210.3K 🔥` `NEW`
1. [别再给打工赋魅了 (Stop glamorizing part-time jobs)](https://s.weibo.com/weibo?q=%23%E5%88%AB%E5%86%8D%E7%BB%99%E6%89%93%E5%B7%A5%E8%B5%8B%E9%AD%85%E4%BA%86%23) `191.7K 🔥` `NEW`
1. [胡锡进说特朗普第一次被吓住了](https://s.weibo.com/weibo?q=%23%E8%83%A1%E9%94%A1%E8%BF%9B%E8%AF%B4%E7%89%B9%E6%9C%97%E6%99%AE%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A2%AB%E5%90%93%E4%BD%8F%E4%BA%86%23) `191.2K 🔥` `NEW`
1. [机智张承认整容](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E6%99%BA%E5%BC%A0%E6%89%BF%E8%AE%A4%E6%95%B4%E5%AE%B9%23) `190.4K 🔥` `NEW`
1. [告诉你一个旺自己的小秘诀](https://s.weibo.com/weibo?q=%23%E5%91%8A%E8%AF%89%E4%BD%A0%E4%B8%80%E4%B8%AA%E6%97%BA%E8%87%AA%E5%B7%B1%E7%9A%84%E5%B0%8F%E7%A7%98%E8%AF%80%23) `189.3K 🔥` `NEW`
1. [实习工资居然能到一万](https://s.weibo.com/weibo?q=%23%E5%AE%9E%E4%B9%A0%E5%B7%A5%E8%B5%84%E5%B1%85%E7%84%B6%E8%83%BD%E5%88%B0%E4%B8%80%E4%B8%87%23) `964.6K 🔥` `+32%`
1. [AI短剧以假乱真了](https://s.weibo.com/weibo?q=%23AI%E7%9F%AD%E5%89%A7%E4%BB%A5%E5%81%87%E4%B9%B1%E7%9C%9F%E4%BA%86%23) `348.1K 🔥`
1. [赵本山拒绝了所有商演和综艺](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%9C%AC%E5%B1%B1%E6%8B%92%E7%BB%9D%E4%BA%86%E6%89%80%E6%9C%89%E5%95%86%E6%BC%94%E5%92%8C%E7%BB%BC%E8%89%BA%23) `309.3K 🔥`
1. [蔡康永跪拜感谢施南生](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BA%B7%E6%B0%B8%E8%B7%AA%E6%8B%9C%E6%84%9F%E8%B0%A2%E6%96%BD%E5%8D%97%E7%94%9F%23) `302.8K 🔥`
1. [曝华为手机也将涨价](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8D%8E%E4%B8%BA%E6%89%8B%E6%9C%BA%E4%B9%9F%E5%B0%86%E6%B6%A8%E4%BB%B7%23) `190.1K 🔥`
1. [王祖贤悼念施南生](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%A5%96%E8%B4%A4%E6%82%BC%E5%BF%B5%E6%96%BD%E5%8D%97%E7%94%9F%23) `189.6K 🔥`
1. [姆巴佩称法国不具备决赛实力 (Mbappe says France are not qualified for finals)](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%A7%B0%E6%B3%95%E5%9B%BD%E4%B8%8D%E5%85%B7%E5%A4%87%E5%86%B3%E8%B5%9B%E5%AE%9E%E5%8A%9B%23) `976.4K 🔥` `-26%`
1. [预拨4.3亿支持10省区市抢险救灾](https://s.weibo.com/weibo?q=%23%E9%A2%84%E6%8B%A84.3%E4%BA%BF%E6%94%AF%E6%8C%8110%E7%9C%81%E5%8C%BA%E5%B8%82%E6%8A%A2%E9%99%A9%E6%95%91%E7%81%BE%23) `966.0K 🔥` `-31%`
1. [贾浅浅西北大学辞职](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E6%B5%85%E6%B5%85%E8%A5%BF%E5%8C%97%E5%A4%A7%E5%AD%A6%E8%BE%9E%E8%81%8C%23) `733.7K 🔥` `-60%`
1. [贾浅浅硕士学位被撤销 (Jia Qianqian’s master’s degree revoked)](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E6%B5%85%E6%B5%85%E7%A1%95%E5%A3%AB%E5%AD%A6%E4%BD%8D%E8%A2%AB%E6%92%A4%E9%94%80%23) `413.1K 🔥` `-96%`
1. [小伙家有200台小米设备不满手机售后](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E5%AE%B6%E6%9C%89200%E5%8F%B0%E5%B0%8F%E7%B1%B3%E8%AE%BE%E5%A4%87%E4%B8%8D%E6%BB%A1%E6%89%8B%E6%9C%BA%E5%94%AE%E5%90%8E%23) `356.1K 🔥` `-30%`
1. [GDP](https://s.weibo.com/weibo?q=%23GDP%23) `314.9K 🔥` `-33%`
1. [法国队 脏](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E9%98%9F%20%E8%84%8F%23) `286.1K 🔥` `-59%`
1. [野狗骨头车内吻戏](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E8%BD%A6%E5%86%85%E5%90%BB%E6%88%8F%23) `227.4K 🔥` `-22%`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `191.7K 🔥` `-59%`
1. [金靖得知章若楠张凌赫跨年的反应](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%E5%BE%97%E7%9F%A5%E7%AB%A0%E8%8B%A5%E6%A5%A0%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%B7%A8%E5%B9%B4%E7%9A%84%E5%8F%8D%E5%BA%94%23) `190.7K 🔥` `-59%`

Updated at 2026-07-15 13:55:26

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
