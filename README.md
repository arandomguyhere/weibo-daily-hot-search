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

1. [一滴瑞珠护眼所营业中 (A Drop of Ruizhu Eye Care is open)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%BB%B4%E7%91%9E%E7%8F%A0%E6%8A%A4%E7%9C%BC%E6%89%80%E8%90%A5%E4%B8%9A%E4%B8%AD%23) `635.0K 🔥` `NEW`
1. [同事跳槽公司找了七个人替岗](https://s.weibo.com/weibo?q=%23%E5%90%8C%E4%BA%8B%E8%B7%B3%E6%A7%BD%E5%85%AC%E5%8F%B8%E6%89%BE%E4%BA%86%E4%B8%83%E4%B8%AA%E4%BA%BA%E6%9B%BF%E5%B2%97%23) `623.4K 🔥` `NEW`
1. [花开锦绣S级剧集](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3S%E7%BA%A7%E5%89%A7%E9%9B%86%23) `432.5K 🔥` `NEW`
1. [印尼地震造成至少20人死亡](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%B0%BC%E5%9C%B0%E9%9C%87%E9%80%A0%E6%88%90%E8%87%B3%E5%B0%9120%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `288.1K 🔥` `NEW`
1. [刘宇宁喊了13句我不想玩了10句救我](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E5%96%8A%E4%BA%8613%E5%8F%A5%E6%88%91%E4%B8%8D%E6%83%B3%E7%8E%A9%E4%BA%8610%E5%8F%A5%E6%95%91%E6%88%91%23) `287.4K 🔥` `NEW`
1. [胖东来 刑释人员](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%20%E5%88%91%E9%87%8A%E4%BA%BA%E5%91%98%23) `214.4K 🔥` `NEW`
1. [TF四代要唱时团的刺](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E8%A6%81%E5%94%B1%E6%97%B6%E5%9B%A2%E7%9A%84%E5%88%BA%23) `212.5K 🔥` `NEW`
1. [牛来怎么过审的](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%9D%A5%E6%80%8E%E4%B9%88%E8%BF%87%E5%AE%A1%E7%9A%84%23) `210.1K 🔥` `NEW`
1. [牛来 烂片](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%9D%A5%20%E7%83%82%E7%89%87%23) `204.7K 🔥` `NEW`
1. [为什么现在的商场越来越难逛了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%8E%B0%E5%9C%A8%E7%9A%84%E5%95%86%E5%9C%BA%E8%B6%8A%E6%9D%A5%E8%B6%8A%E9%9A%BE%E9%80%9B%E4%BA%86%23) `201.7K 🔥` `NEW`
1. [河南郏县北汝河溃口成功合龙 (The breach of Beiru River in Jiaxian County, Henan Province was successfully closed)](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E9%83%8F%E5%8E%BF%E5%8C%97%E6%B1%9D%E6%B2%B3%E6%BA%83%E5%8F%A3%E6%88%90%E5%8A%9F%E5%90%88%E9%BE%99%23) `198.7K 🔥` `NEW`
1. [婚姻追求公平不如一个人过](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A7%BB%E8%BF%BD%E6%B1%82%E5%85%AC%E5%B9%B3%E4%B8%8D%E5%A6%82%E4%B8%80%E4%B8%AA%E4%BA%BA%E8%BF%87%23) `194.7K 🔥` `NEW`
1. [徐梦桃听到婆婆被家暴的反应](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E5%90%AC%E5%88%B0%E5%A9%86%E5%A9%86%E8%A2%AB%E5%AE%B6%E6%9A%B4%E7%9A%84%E5%8F%8D%E5%BA%94%23) `167.5K 🔥` `NEW`
1. [牛来票房暴涨1000倍](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%9D%A5%E7%A5%A8%E6%88%BF%E6%9A%B4%E6%B6%A81000%E5%80%8D%23) `2.5M 🔥` `+177%`
1. [牛来 劣币驱逐良币](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%9D%A5%20%E5%8A%A3%E5%B8%81%E9%A9%B1%E9%80%90%E8%89%AF%E5%B8%81%23) `299.9K 🔥` `+39%`
1. [牛来 龙标](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%9D%A5%20%E9%BE%99%E6%A0%87%23) `295.5K 🔥` `+68%`
1. [天津已经进化成这样了吗](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B4%A5%E5%B7%B2%E7%BB%8F%E8%BF%9B%E5%8C%96%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%E5%90%97%23) `289.5K 🔥` `+21%`
1. [谢霆锋王菲情侣手镯 (Nicholas Tse and Faye Wong couple bracelets)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E7%8E%8B%E8%8F%B2%E6%83%85%E4%BE%A3%E6%89%8B%E9%95%AF%23) `286.4K 🔥` `+21%`
1. [年轻人猝死大多有两个共性 (Sudden death among young people mostly has two characteristics in common:)](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%8C%9D%E6%AD%BB%E5%A4%A7%E5%A4%9A%E6%9C%89%E4%B8%A4%E4%B8%AA%E5%85%B1%E6%80%A7%23) `286.2K 🔥` `+22%`
1. [美国夫妇网购中国折叠房](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A4%AB%E5%A6%87%E7%BD%91%E8%B4%AD%E4%B8%AD%E5%9B%BD%E6%8A%98%E5%8F%A0%E6%88%BF%23) `211.6K 🔥` `+28%`
1. [历史未走远吾辈当自强 (History has not gone far, we should strengthen ourselves)](https://s.weibo.com/weibo?q=%23%E5%8E%86%E5%8F%B2%E6%9C%AA%E8%B5%B0%E8%BF%9C%E5%90%BE%E8%BE%88%E5%BD%93%E8%87%AA%E5%BC%BA%23) `1.2M 🔥`
1. [疯狂动物城3官宣 (Zootopia 3 official announcement)](https://s.weibo.com/weibo?q=%23%E7%96%AF%E7%8B%82%E5%8A%A8%E7%89%A9%E5%9F%8E3%E5%AE%98%E5%AE%A3%23) `1.1M 🔥`
1. [妈妈去世多少年才能不难过](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%8E%BB%E4%B8%96%E5%A4%9A%E5%B0%91%E5%B9%B4%E6%89%8D%E8%83%BD%E4%B8%8D%E9%9A%BE%E8%BF%87%23) `982.4K 🔥`
1. [手机涨得快买不起了](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E6%B6%A8%E5%BE%97%E5%BF%AB%E4%B9%B0%E4%B8%8D%E8%B5%B7%E4%BA%86%23) `539.9K 🔥`
1. [日本 拜鬼 (japan ghost worship)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%20%E6%8B%9C%E9%AC%BC%23) `302.7K 🔥`
1. [章若楠被直播间美颜吓到 (Zhang Ruonan was frightened by her beauty in the live broadcast room)](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E8%A2%AB%E7%9B%B4%E6%92%AD%E9%97%B4%E7%BE%8E%E9%A2%9C%E5%90%93%E5%88%B0%23) `288.7K 🔥`
1. [旺旺回应网友集体呼吁减糖 (Want Want responds to netizens’ collective call to reduce sugar)](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%E5%9B%9E%E5%BA%94%E7%BD%91%E5%8F%8B%E9%9B%86%E4%BD%93%E5%91%BC%E5%90%81%E5%87%8F%E7%B3%96%23) `220.2K 🔥`
1. [牛来硬刚奥德赛](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%9D%A5%E7%A1%AC%E5%88%9A%E5%A5%A5%E5%BE%B7%E8%B5%9B%23) `219.0K 🔥`
1. [王一博 飞天奖 (Wang Yibo Feitian Award)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%20%E9%A3%9E%E5%A4%A9%E5%A5%96%23) `217.8K 🔥`
1. [不要和锅品差的人吃火锅](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E5%92%8C%E9%94%85%E5%93%81%E5%B7%AE%E7%9A%84%E4%BA%BA%E5%90%83%E7%81%AB%E9%94%85%23) `217.4K 🔥`
1. [牛来 (Niu Lai)](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%9D%A5%23) `213.5K 🔥`
1. [虞书欣真的陷入猴子怪谈里了](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%9C%9F%E7%9A%84%E9%99%B7%E5%85%A5%E7%8C%B4%E5%AD%90%E6%80%AA%E8%B0%88%E9%87%8C%E4%BA%86%23) `207.7K 🔥`
1. [00后不急着考驾照了 (People born after 00 are no longer in a hurry to get a driver’s license.)](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E4%B8%8D%E6%80%A5%E7%9D%80%E8%80%83%E9%A9%BE%E7%85%A7%E4%BA%86%23) `205.6K 🔥`
1. [曝王嘉尔宋雨琦恋情 (Wang Jiaer and Song Yuqi's romance revealed)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E5%98%89%E5%B0%94%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%81%8B%E6%83%85%23) `196.0K 🔥`
1. [真正的情绪稳定是什么样的](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E7%9A%84%E6%83%85%E7%BB%AA%E7%A8%B3%E5%AE%9A%E6%98%AF%E4%BB%80%E4%B9%88%E6%A0%B7%E7%9A%84%23) `153.5K 🔥`
1. [AG用时5分57秒结束比赛破纪录](https://s.weibo.com/weibo?q=%23AG%E7%94%A8%E6%97%B65%E5%88%8657%E7%A7%92%E7%BB%93%E6%9D%9F%E6%AF%94%E8%B5%9B%E7%A0%B4%E7%BA%AA%E5%BD%95%23) `142.0K 🔥`
1. [旺旺 配料表 (Wangwang ingredient list)](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%20%E9%85%8D%E6%96%99%E8%A1%A8%23) `1.4M 🔥` `-26%`
1. [牛来票房破10万 (Niulai’s box office exceeded 100,000)](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%9D%A5%E7%A5%A8%E6%88%BF%E7%A0%B410%E4%B8%87%23) `712.6K 🔥` `-49%`
1. [胖东来首批刑释职工30人无一离职](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E9%A6%96%E6%89%B9%E5%88%91%E9%87%8A%E8%81%8C%E5%B7%A530%E4%BA%BA%E6%97%A0%E4%B8%80%E7%A6%BB%E8%81%8C%23) `512.7K 🔥` `-31%`
1. [王嘉尔吃自己的瓜](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E5%90%83%E8%87%AA%E5%B7%B1%E7%9A%84%E7%93%9C%23) `416.2K 🔥` `-27%`
1. [国乒男单全军覆没](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%8D%95%E5%85%A8%E5%86%9B%E8%A6%86%E6%B2%A1%23) `398.4K 🔥` `-34%`
1. [牛来传到韩国了](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%9D%A5%E4%BC%A0%E5%88%B0%E9%9F%A9%E5%9B%BD%E4%BA%86%23) `398.3K 🔥` `-41%`
1. [九门大结局只有九爷不在了 (In the finale of Nine Gates, only Master Jiu is gone)](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E5%A4%A7%E7%BB%93%E5%B1%80%E5%8F%AA%E6%9C%89%E4%B9%9D%E7%88%B7%E4%B8%8D%E5%9C%A8%E4%BA%86%23) `360.9K 🔥` `-29%`
1. [终于知道为什么戴眼镜是斜的了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E4%B8%BA%E4%BB%80%E4%B9%88%E6%88%B4%E7%9C%BC%E9%95%9C%E6%98%AF%E6%96%9C%E7%9A%84%E4%BA%86%23) `290.0K 🔥` `-26%`
1. [牛来 股民](https://s.weibo.com/weibo?q=%23%E7%89%9B%E6%9D%A5%20%E8%82%A1%E6%B0%91%23) `215.3K 🔥` `-45%`
1. [曝内娱把热度高的大IP拍完了 (It was revealed that Domestic Entertainment has finished filming a hot IP)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%86%85%E5%A8%B1%E6%8A%8A%E7%83%AD%E5%BA%A6%E9%AB%98%E7%9A%84%E5%A4%A7IP%E6%8B%8D%E5%AE%8C%E4%BA%86%23) `199.4K 🔥` `-45%`
1. [黄晓明看张雅琪的眼神](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E7%9C%8B%E5%BC%A0%E9%9B%85%E7%90%AA%E7%9A%84%E7%9C%BC%E7%A5%9E%23) `181.0K 🔥` `-53%`
1. [金泰妍瘦成纸片了](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%B3%B0%E5%A6%8D%E7%98%A6%E6%88%90%E7%BA%B8%E7%89%87%E4%BA%86%23) `153.3K 🔥` `-30%`
1. [还能活51年却只有21天自由支配的时间](https://s.weibo.com/weibo?q=%23%E8%BF%98%E8%83%BD%E6%B4%BB51%E5%B9%B4%E5%8D%B4%E5%8F%AA%E6%9C%8921%E5%A4%A9%E8%87%AA%E7%94%B1%E6%94%AF%E9%85%8D%E7%9A%84%E6%97%B6%E9%97%B4%23) `152.8K 🔥` `-30%`
1. [高市早苗称日本将成为灯塔 (Takaichi Sanae says Japan will become a beacon)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E7%A7%B0%E6%97%A5%E6%9C%AC%E5%B0%86%E6%88%90%E4%B8%BA%E7%81%AF%E5%A1%94%23) `141.6K 🔥` `-36%`
1. [跟领导沟通最有效的方式 (The most effective way to communicate with leaders)](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E9%A2%86%E5%AF%BC%E6%B2%9F%E9%80%9A%E6%9C%80%E6%9C%89%E6%95%88%E7%9A%84%E6%96%B9%E5%BC%8F%23) `141.1K 🔥` `-35%`

Updated at 2026-08-15 15:19:46

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
