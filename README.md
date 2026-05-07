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

1. [淘宝免单 (Taobao free order)](https://s.weibo.com/weibo?q=%23%E6%B7%98%E5%AE%9D%E5%85%8D%E5%8D%95%23) `20.9M 🔥` `NEW`
1. [五一买24件衣服全退光店主心态崩了](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E4%B9%B024%E4%BB%B6%E8%A1%A3%E6%9C%8D%E5%85%A8%E9%80%80%E5%85%89%E5%BA%97%E4%B8%BB%E5%BF%83%E6%80%81%E5%B4%A9%E4%BA%86%23) `2.2M 🔥` `NEW`
1. [五一假日图景尽显中国活力](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%81%87%E6%97%A5%E5%9B%BE%E6%99%AF%E5%B0%BD%E6%98%BE%E4%B8%AD%E5%9B%BD%E6%B4%BB%E5%8A%9B%23) `1.6M 🔥` `NEW`
1. [来超话一起看大侦探11收官](https://s.weibo.com/weibo?q=%23%E6%9D%A5%E8%B6%85%E8%AF%9D%E4%B8%80%E8%B5%B7%E7%9C%8B%E5%A4%A7%E4%BE%A6%E6%8E%A211%E6%94%B6%E5%AE%98%23) `1.3M 🔥` `NEW`
1. [买衣服一定要穿最好看的那套去逛街](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E8%A1%A3%E6%9C%8D%E4%B8%80%E5%AE%9A%E8%A6%81%E7%A9%BF%E6%9C%80%E5%A5%BD%E7%9C%8B%E7%9A%84%E9%82%A3%E5%A5%97%E5%8E%BB%E9%80%9B%E8%A1%97%23) `1.1M 🔥` `NEW`
1. [谢娜演唱会庆功宴现场](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E5%BA%86%E5%8A%9F%E5%AE%B4%E7%8E%B0%E5%9C%BA%23) `577.1K 🔥` `NEW`
1. [微博尝鲜计划](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E5%B0%9D%E9%B2%9C%E8%AE%A1%E5%88%92%23) `565.3K 🔥` `NEW`
1. [浪姐至今为止翻红最成功的艺人](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E8%87%B3%E4%BB%8A%E4%B8%BA%E6%AD%A2%E7%BF%BB%E7%BA%A2%E6%9C%80%E6%88%90%E5%8A%9F%E7%9A%84%E8%89%BA%E4%BA%BA%23) `558.0K 🔥` `NEW`
1. [长宁帝军官宣](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%AE%81%E5%B8%9D%E5%86%9B%E5%AE%98%E5%AE%A3%23) `356.2K 🔥` `NEW`
1. [跑男学这么精彩吗](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E5%AD%A6%E8%BF%99%E4%B9%88%E7%B2%BE%E5%BD%A9%E5%90%97%23) `340.6K 🔥` `NEW`
1. [殷世航傲娇美宣布结婚 (Yin Shihang proudly announced her marriage)](https://s.weibo.com/weibo?q=%23%E6%AE%B7%E4%B8%96%E8%88%AA%E5%82%B2%E5%A8%87%E7%BE%8E%E5%AE%A3%E5%B8%83%E7%BB%93%E5%A9%9A%23) `339.8K 🔥` `NEW`
1. [孙颖莎拒绝场下偷拍](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%8B%92%E7%BB%9D%E5%9C%BA%E4%B8%8B%E5%81%B7%E6%8B%8D%23) `339.3K 🔥` `NEW`
1. [何炅不再依赖哥哥算长大吗](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E4%B8%8D%E5%86%8D%E4%BE%9D%E8%B5%96%E5%93%A5%E5%93%A5%E7%AE%97%E9%95%BF%E5%A4%A7%E5%90%97%23) `338.4K 🔥` `NEW`
1. [马龙夫妇许昕夫妇同游英国](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E5%A4%AB%E5%A6%87%E8%AE%B8%E6%98%95%E5%A4%AB%E5%A6%87%E5%90%8C%E6%B8%B8%E8%8B%B1%E5%9B%BD%23) `337.4K 🔥` `NEW`
1. [中国被FIFA划为一级高价市场](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%A2%ABFIFA%E5%88%92%E4%B8%BA%E4%B8%80%E7%BA%A7%E9%AB%98%E4%BB%B7%E5%B8%82%E5%9C%BA%23) `336.5K 🔥` `NEW`
1. [我驻南联盟使馆被炸新闻联播画面](https://s.weibo.com/weibo?q=%23%E6%88%91%E9%A9%BB%E5%8D%97%E8%81%94%E7%9B%9F%E4%BD%BF%E9%A6%86%E8%A2%AB%E7%82%B8%E6%96%B0%E9%97%BB%E8%81%94%E6%92%AD%E7%94%BB%E9%9D%A2%23) `336.2K 🔥` `NEW`
1. [xAI更名SpaceXAI](https://s.weibo.com/weibo?q=%23xAI%E6%9B%B4%E5%90%8DSpaceXAI%23) `335.2K 🔥` `NEW`
1. [虞书欣LA](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3LA%23) `334.3K 🔥` `NEW`
1. [结婚不到10天女方扇耳光男方砍手指](https://s.weibo.com/weibo?q=%23%E7%BB%93%E5%A9%9A%E4%B8%8D%E5%88%B010%E5%A4%A9%E5%A5%B3%E6%96%B9%E6%89%87%E8%80%B3%E5%85%89%E7%94%B7%E6%96%B9%E7%A0%8D%E6%89%8B%E6%8C%87%23) `333.9K 🔥` `NEW`
1. [爸爸一脚踹向横穿马路孩子](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E4%B8%80%E8%84%9A%E8%B8%B9%E5%90%91%E6%A8%AA%E7%A9%BF%E9%A9%AC%E8%B7%AF%E5%AD%A9%E5%AD%90%23) `329.5K 🔥` `NEW`
1. [NBA](https://s.weibo.com/weibo?q=%23NBA%23) `259.4K 🔥` `NEW`
1. [森林狼vs马刺](https://s.weibo.com/weibo?q=%23%E6%A3%AE%E6%9E%97%E7%8B%BCvs%E9%A9%AC%E5%88%BA%23) `252.9K 🔥` `NEW`
1. [用这种枕头可能损伤脑血管](https://s.weibo.com/weibo?q=%23%E7%94%A8%E8%BF%99%E7%A7%8D%E6%9E%95%E5%A4%B4%E5%8F%AF%E8%83%BD%E6%8D%9F%E4%BC%A4%E8%84%91%E8%A1%80%E7%AE%A1%23) `224.1K 🔥` `NEW`
1. [主角定档](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%E5%AE%9A%E6%A1%A3%23) `223.6K 🔥` `NEW`
1. [宁艺卓嘉人五月刊封面](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E5%98%89%E4%BA%BA%E4%BA%94%E6%9C%88%E5%88%8A%E5%B0%81%E9%9D%A2%23) `220.6K 🔥` `NEW`
1. [被小朋友涂鸦的政府牌匾暂不会更换](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%B0%8F%E6%9C%8B%E5%8F%8B%E6%B6%82%E9%B8%A6%E7%9A%84%E6%94%BF%E5%BA%9C%E7%89%8C%E5%8C%BE%E6%9A%82%E4%B8%8D%E4%BC%9A%E6%9B%B4%E6%8D%A2%23) `209.1K 🔥` `NEW`
1. [王菲唱了戏腔](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E5%94%B1%E4%BA%86%E6%88%8F%E8%85%94%23) `208.5K 🔥` `NEW`
1. [代课 交换人生](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E8%AF%BE%20%E4%BA%A4%E6%8D%A2%E4%BA%BA%E7%94%9F%23) `207.4K 🔥` `NEW`
1. [跑男才播一期审判的人换了好几波](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E6%89%8D%E6%92%AD%E4%B8%80%E6%9C%9F%E5%AE%A1%E5%88%A4%E7%9A%84%E4%BA%BA%E6%8D%A2%E4%BA%86%E5%A5%BD%E5%87%A0%E6%B3%A2%23) `195.1K 🔥` `NEW`
1. [错嫁有喜逆跌](https://s.weibo.com/weibo?q=%23%E9%94%99%E5%AB%81%E6%9C%89%E5%96%9C%E9%80%86%E8%B7%8C%23) `192.3K 🔥` `NEW`
1. [给阿嬷的情书女主 大学宿舍素颜直播 (The heroine of Love Letter to Grandma is broadcast live in the college dormitory without makeup)](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E5%A5%B3%E4%B8%BB%20%E5%A4%A7%E5%AD%A6%E5%AE%BF%E8%88%8D%E7%B4%A0%E9%A2%9C%E7%9B%B4%E6%92%AD%23) `181.2K 🔥` `NEW`
1. [长宁帝军](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%AE%81%E5%B8%9D%E5%86%9B%23) `179.6K 🔥` `NEW`
1. [黑龙江涉重大刑案54岁男子已落网](https://s.weibo.com/weibo?q=%23%E9%BB%91%E9%BE%99%E6%B1%9F%E6%B6%89%E9%87%8D%E5%A4%A7%E5%88%91%E6%A1%8854%E5%B2%81%E7%94%B7%E5%AD%90%E5%B7%B2%E8%90%BD%E7%BD%91%23) `179.5K 🔥` `NEW`
1. [林心如为陪孩子戒掉晚酌习惯](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%83%E5%A6%82%E4%B8%BA%E9%99%AA%E5%AD%A9%E5%AD%90%E6%88%92%E6%8E%89%E6%99%9A%E9%85%8C%E4%B9%A0%E6%83%AF%23) `175.3K 🔥` `NEW`
1. [迪丽热巴的13年](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9A%8413%E5%B9%B4%23) `174.1K 🔥` `NEW`
1. [成毅悦游杂志](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E6%82%A6%E6%B8%B8%E6%9D%82%E5%BF%97%23) `171.1K 🔥` `NEW`
1. [ADOR回应Minji归队](https://s.weibo.com/weibo?q=%23ADOR%E5%9B%9E%E5%BA%94Minji%E5%BD%92%E9%98%9F%23) `169.5K 🔥` `NEW`
1. [FIFA回应中国区天价世界杯版权](https://s.weibo.com/weibo?q=%23FIFA%E5%9B%9E%E5%BA%94%E4%B8%AD%E5%9B%BD%E5%8C%BA%E5%A4%A9%E4%BB%B7%E4%B8%96%E7%95%8C%E6%9D%AF%E7%89%88%E6%9D%83%23) `588.0K 🔥` `+209%`
1. [国际足联严重依赖中国赞助商](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E8%B6%B3%E8%81%94%E4%B8%A5%E9%87%8D%E4%BE%9D%E8%B5%96%E4%B8%AD%E5%9B%BD%E8%B5%9E%E5%8A%A9%E5%95%86%23) `340.6K 🔥` `+125%`
1. [一个人不是好人的微妙迹象是什么](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E4%BA%BA%E4%B8%8D%E6%98%AF%E5%A5%BD%E4%BA%BA%E7%9A%84%E5%BE%AE%E5%A6%99%E8%BF%B9%E8%B1%A1%E6%98%AF%E4%BB%80%E4%B9%88%23) `243.7K 🔥` `+29%`
1. [公安局大院内酒店每晚200到300元 (The hotel in the public security bureau compound costs 200 to 300 yuan per night.)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%AE%89%E5%B1%80%E5%A4%A7%E9%99%A2%E5%86%85%E9%85%92%E5%BA%97%E6%AF%8F%E6%99%9A200%E5%88%B0300%E5%85%83%23) `370.7K 🔥`
1. [EXO ai篡改记忆](https://s.weibo.com/weibo?q=%23EXO%20ai%E7%AF%A1%E6%94%B9%E8%AE%B0%E5%BF%86%23) `338.2K 🔥`
1. [谢娜开演唱会上瘾了](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%BC%80%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%8A%E7%98%BE%E4%BA%86%23) `334.8K 🔥`
1. [刘耀文晒穿戴甲 (Liu Yaowen wears armor)](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E6%99%92%E7%A9%BF%E6%88%B4%E7%94%B2%23) `167.1K 🔥`
1. [国际足联可能已经慌了](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E8%B6%B3%E8%81%94%E5%8F%AF%E8%83%BD%E5%B7%B2%E7%BB%8F%E6%85%8C%E4%BA%86%23) `277.6K 🔥` `-85%`
1. [虞书欣ins取消何与置顶了](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3ins%E5%8F%96%E6%B6%88%E4%BD%95%E4%B8%8E%E7%BD%AE%E9%A1%B6%E4%BA%86%23) `258.0K 🔥` `-23%`
1. [高市早苗下跪看清日本丑恶嘴脸](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E4%B8%8B%E8%B7%AA%E7%9C%8B%E6%B8%85%E6%97%A5%E6%9C%AC%E4%B8%91%E6%81%B6%E5%98%B4%E8%84%B8%23) `231.4K 🔥` `-62%`
1. [4只皮皮虾1035元涉事海鲜店回应](https://s.weibo.com/weibo?q=%234%E5%8F%AA%E7%9A%AE%E7%9A%AE%E8%99%BE1035%E5%85%83%E6%B6%89%E4%BA%8B%E6%B5%B7%E9%B2%9C%E5%BA%97%E5%9B%9E%E5%BA%94%23) `181.4K 🔥` `-81%`
1. [王楚钦被安宰贤吓一跳](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%A2%AB%E5%AE%89%E5%AE%B0%E8%B4%A4%E5%90%93%E4%B8%80%E8%B7%B3%23) `180.0K 🔥` `-30%`
1. [暴发致命病毒邮轮或出现人传人现象 (Deadly virus outbreak on cruise ship may lead to human-to-human transmission)](https://s.weibo.com/weibo?q=%23%E6%9A%B4%E5%8F%91%E8%87%B4%E5%91%BD%E7%97%85%E6%AF%92%E9%82%AE%E8%BD%AE%E6%88%96%E5%87%BA%E7%8E%B0%E4%BA%BA%E4%BC%A0%E4%BA%BA%E7%8E%B0%E8%B1%A1%23) `173.3K 🔥` `-40%`
1. [英伟达宣布与康宁建立长期合作关系](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%AE%A3%E5%B8%83%E4%B8%8E%E5%BA%B7%E5%AE%81%E5%BB%BA%E7%AB%8B%E9%95%BF%E6%9C%9F%E5%90%88%E4%BD%9C%E5%85%B3%E7%B3%BB%23) `172.0K 🔥` `-41%`
1. [三星 (Samsung)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%23) `168.4K 🔥` `-42%`

Updated at 2026-05-07 12:48:03

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
