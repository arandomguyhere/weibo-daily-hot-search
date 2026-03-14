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

1. [人民大会堂的同款老式热水瓶已停产 (The same old-fashioned thermos bottle used in the Great Hall of the People has been discontinued)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E5%A4%A7%E4%BC%9A%E5%A0%82%E7%9A%84%E5%90%8C%E6%AC%BE%E8%80%81%E5%BC%8F%E7%83%AD%E6%B0%B4%E7%93%B6%E5%B7%B2%E5%81%9C%E4%BA%A7%23) `212.0K 🔥` `NEW`
1. [逐玉云合第三](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E4%BA%91%E5%90%88%E7%AC%AC%E4%B8%89%23) `211.3K 🔥` `NEW`
1. [泄露3000余条居民信息社区主任被判刑](https://s.weibo.com/weibo?q=%23%E6%B3%84%E9%9C%B23000%E4%BD%99%E6%9D%A1%E5%B1%85%E6%B0%91%E4%BF%A1%E6%81%AF%E7%A4%BE%E5%8C%BA%E4%B8%BB%E4%BB%BB%E8%A2%AB%E5%88%A4%E5%88%91%23) `114.4K 🔥` `NEW`
1. [为何要建议家暴不适用离婚冷静期](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BD%95%E8%A6%81%E5%BB%BA%E8%AE%AE%E5%AE%B6%E6%9A%B4%E4%B8%8D%E9%80%82%E7%94%A8%E7%A6%BB%E5%A9%9A%E5%86%B7%E9%9D%99%E6%9C%9F%23) `113.8K 🔥` `NEW`
1. [林一别试探了有市场](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%B8%80%E5%88%AB%E8%AF%95%E6%8E%A2%E4%BA%86%E6%9C%89%E5%B8%82%E5%9C%BA%23) `106.2K 🔥` `NEW`
1. [林依晨称因熬夜和压力患脑部囊肿](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BE%9D%E6%99%A8%E7%A7%B0%E5%9B%A0%E7%86%AC%E5%A4%9C%E5%92%8C%E5%8E%8B%E5%8A%9B%E6%82%A3%E8%84%91%E9%83%A8%E5%9B%8A%E8%82%BF%23) `95.9K 🔥` `NEW`
1. [孙颖莎输球未必是坏事](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%BE%93%E7%90%83%E6%9C%AA%E5%BF%85%E6%98%AF%E5%9D%8F%E4%BA%8B%23) `79.8K 🔥` `NEW`
1. [人人盼火锅强大刀盼她吃饭香](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%BA%BA%E7%9B%BC%E7%81%AB%E9%94%85%E5%BC%BA%E5%A4%A7%E5%88%80%E7%9B%BC%E5%A5%B9%E5%90%83%E9%A5%AD%E9%A6%99%23) `78.7K 🔥` `NEW`
1. [伊方称结束战争有两个条件](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%96%B9%E7%A7%B0%E7%BB%93%E6%9D%9F%E6%88%98%E4%BA%89%E6%9C%89%E4%B8%A4%E4%B8%AA%E6%9D%A1%E4%BB%B6%23) `77.9K 🔥` `NEW`
1. [男子投诉10分钟后隐私被扒得底朝天](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8A%95%E8%AF%8910%E5%88%86%E9%92%9F%E5%90%8E%E9%9A%90%E7%A7%81%E8%A2%AB%E6%89%92%E5%BE%97%E5%BA%95%E6%9C%9D%E5%A4%A9%23) `76.9K 🔥` `NEW`
1. [田嘉瑞一进门先找余承恩外甥女 (As soon as Tian Jiarui entered the door, he first looked for Yu Chengen’s niece.)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E5%98%89%E7%91%9E%E4%B8%80%E8%BF%9B%E9%97%A8%E5%85%88%E6%89%BE%E4%BD%99%E6%89%BF%E6%81%A9%E5%A4%96%E7%94%A5%E5%A5%B3%23) `76.9K 🔥` `NEW`
1. [真服了你们这些遛狗的了](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%9C%8D%E4%BA%86%E4%BD%A0%E4%BB%AC%E8%BF%99%E4%BA%9B%E9%81%9B%E7%8B%97%E7%9A%84%E4%BA%86%23) `72.2K 🔥` `NEW`
1. [CMG中国电影盛典入围名单](https://s.weibo.com/weibo?q=%23CMG%E4%B8%AD%E5%9B%BD%E7%94%B5%E5%BD%B1%E7%9B%9B%E5%85%B8%E5%85%A5%E5%9B%B4%E5%90%8D%E5%8D%95%23) `71.5K 🔥` `NEW`
1. [打一早上高尔夫锄了两亩地](https://s.weibo.com/weibo?q=%23%E6%89%93%E4%B8%80%E6%97%A9%E4%B8%8A%E9%AB%98%E5%B0%94%E5%A4%AB%E9%94%84%E4%BA%86%E4%B8%A4%E4%BA%A9%E5%9C%B0%23) `70.4K 🔥` `NEW`
1. [印度掀起赴日旅游风潮](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E6%8E%80%E8%B5%B7%E8%B5%B4%E6%97%A5%E6%97%85%E6%B8%B8%E9%A3%8E%E6%BD%AE%23) `69.9K 🔥` `NEW`
1. [武契奇证实购买中国超音速导弹 (Vucic confirms purchase of Chinese supersonic missiles)](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A5%91%E5%A5%87%E8%AF%81%E5%AE%9E%E8%B4%AD%E4%B9%B0%E4%B8%AD%E5%9B%BD%E8%B6%85%E9%9F%B3%E9%80%9F%E5%AF%BC%E5%BC%B9%23) `776.1K 🔥` `+74%`
1. [豹豹原来是汗脚](https://s.weibo.com/weibo?q=%23%E8%B1%B9%E8%B1%B9%E5%8E%9F%E6%9D%A5%E6%98%AF%E6%B1%97%E8%84%9A%23) `212.2K 🔥` `+47%`
1. [省考行测](https://s.weibo.com/weibo?q=%23%E7%9C%81%E8%80%83%E8%A1%8C%E6%B5%8B%23) `142.1K 🔥` `+26%`
1. [120斤减肥减到160斤](https://s.weibo.com/weibo?q=%23120%E6%96%A4%E5%87%8F%E8%82%A5%E5%87%8F%E5%88%B0160%E6%96%A4%23) `128.0K 🔥` `+38%`
1. [央视315晚会点了4个领域 (CCTV 315 Party highlighted 4 areas)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86315%E6%99%9A%E4%BC%9A%E7%82%B9%E4%BA%864%E4%B8%AA%E9%A2%86%E5%9F%9F%23) `1.1M 🔥`
1. [十五五规划纲要解读来了](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E8%A7%84%E5%88%92%E7%BA%B2%E8%A6%81%E8%A7%A3%E8%AF%BB%E6%9D%A5%E4%BA%86%23) `597.0K 🔥`
1. [美团外卖周末半价吃大餐 (Meituan Takeaway offers half-price meals on weekends)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%A2%E5%A4%96%E5%8D%96%E5%91%A8%E6%9C%AB%E5%8D%8A%E4%BB%B7%E5%90%83%E5%A4%A7%E9%A4%90%23) `542.0K 🔥`
1. [315调查眼镜到底有多暴利 (315 investigates how profitable glasses are)](https://s.weibo.com/weibo?q=%23315%E8%B0%83%E6%9F%A5%E7%9C%BC%E9%95%9C%E5%88%B0%E5%BA%95%E6%9C%89%E5%A4%9A%E6%9A%B4%E5%88%A9%23) `253.0K 🔥`
1. [AI时代青少年该掌握哪些能力](https://s.weibo.com/weibo?q=%23AI%E6%97%B6%E4%BB%A3%E9%9D%92%E5%B0%91%E5%B9%B4%E8%AF%A5%E6%8E%8C%E6%8F%A1%E5%93%AA%E4%BA%9B%E8%83%BD%E5%8A%9B%23) `211.8K 🔥`
1. [建议慈善教育分层推进 (It is recommended that charity education be promoted in layers)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%85%88%E5%96%84%E6%95%99%E8%82%B2%E5%88%86%E5%B1%82%E6%8E%A8%E8%BF%9B%23) `211.5K 🔥`
1. [云南花香蓝莓 (Yunnan floral blueberry)](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%8D%97%E8%8A%B1%E9%A6%99%E8%93%9D%E8%8E%93%23) `154.4K 🔥`
1. [Tiffany三里屯开幕](https://s.weibo.com/weibo?q=%23Tiffany%E4%B8%89%E9%87%8C%E5%B1%AF%E5%BC%80%E5%B9%95%23) `133.8K 🔥`
1. [王冕官宣生子](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%86%95%E5%AE%98%E5%AE%A3%E7%94%9F%E5%AD%90%23) `113.0K 🔥`
1. [逐玉 肛泰别闹了](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E8%82%9B%E6%B3%B0%E5%88%AB%E9%97%B9%E4%BA%86%23) `112.5K 🔥`
1. [美国急于退场以色列还想硬刚](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%80%A5%E4%BA%8E%E9%80%80%E5%9C%BA%E4%BB%A5%E8%89%B2%E5%88%97%E8%BF%98%E6%83%B3%E7%A1%AC%E5%88%9A%23) `111.2K 🔥`
1. [陆仙人回应整容](https://s.weibo.com/weibo?q=%23%E9%99%86%E4%BB%99%E4%BA%BA%E5%9B%9E%E5%BA%94%E6%95%B4%E5%AE%B9%23) `109.9K 🔥`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `109.6K 🔥`
1. [谢征没有言正帅 谁上班谁知道 (Xie Zheng didn’t say he was handsome. Who knows who is working?)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%BE%81%E6%B2%A1%E6%9C%89%E8%A8%80%E6%AD%A3%E5%B8%85%20%E8%B0%81%E4%B8%8A%E7%8F%AD%E8%B0%81%E7%9F%A5%E9%81%93%23) `101.9K 🔥`
1. [省考](https://s.weibo.com/weibo?q=%23%E7%9C%81%E8%80%83%23) `96.4K 🔥`
1. [被丢弃厕所女婴含泪抱住妈妈](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E4%B8%A2%E5%BC%83%E5%8E%95%E6%89%80%E5%A5%B3%E5%A9%B4%E5%90%AB%E6%B3%AA%E6%8A%B1%E4%BD%8F%E5%A6%88%E5%A6%88%23) `93.1K 🔥`
1. [小红帽下楼](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%BA%A2%E5%B8%BD%E4%B8%8B%E6%A5%BC%23) `92.6K 🔥`
1. [这洗脚水是非喝不可吗 (Do you have to drink this foot-washing water?)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%B4%97%E8%84%9A%E6%B0%B4%E6%98%AF%E9%9D%9E%E5%96%9D%E4%B8%8D%E5%8F%AF%E5%90%97%23) `91.4K 🔥`
1. [外卖到了白鹿就这样跑步迎接](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%8D%96%E5%88%B0%E4%BA%86%E7%99%BD%E9%B9%BF%E5%B0%B1%E8%BF%99%E6%A0%B7%E8%B7%91%E6%AD%A5%E8%BF%8E%E6%8E%A5%23) `87.1K 🔥`
1. [马思纯发文 (Ma Sichun posted a message)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%80%9D%E7%BA%AF%E5%8F%91%E6%96%87%23) `85.0K 🔥`
1. [16岁少年未管所遭同监区3人殴打致死](https://s.weibo.com/weibo?q=%2316%E5%B2%81%E5%B0%91%E5%B9%B4%E6%9C%AA%E7%AE%A1%E6%89%80%E9%81%AD%E5%90%8C%E7%9B%91%E5%8C%BA3%E4%BA%BA%E6%AE%B4%E6%89%93%E8%87%B4%E6%AD%BB%23) `80.2K 🔥`
1. [关晓彤程潇F1观赛造型](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E7%A8%8B%E6%BD%87F1%E8%A7%82%E8%B5%9B%E9%80%A0%E5%9E%8B%23) `77.9K 🔥`
1. [生理性讨厌是藏不住的](https://s.weibo.com/weibo?q=%23%E7%94%9F%E7%90%86%E6%80%A7%E8%AE%A8%E5%8E%8C%E6%98%AF%E8%97%8F%E4%B8%8D%E4%BD%8F%E7%9A%84%23) `73.5K 🔥`
1. [申论大作文 (Essay on essay)](https://s.weibo.com/weibo?q=%23%E7%94%B3%E8%AE%BA%E5%A4%A7%E4%BD%9C%E6%96%87%23) `212.4K 🔥` `-73%`
1. [生菜是最伟大的蔬菜](https://s.weibo.com/weibo?q=%23%E7%94%9F%E8%8F%9C%E6%98%AF%E6%9C%80%E4%BC%9F%E5%A4%A7%E7%9A%84%E8%94%AC%E8%8F%9C%23) `212.4K 🔥` `-46%`
1. [吉利银河迈入长续航时代 (Geely Galaxy enters the era of long battery life)](https://s.weibo.com/weibo?q=%23%E5%90%89%E5%88%A9%E9%93%B6%E6%B2%B3%E8%BF%88%E5%85%A5%E9%95%BF%E7%BB%AD%E8%88%AA%E6%97%B6%E4%BB%A3%23) `212.3K 🔥` `-33%`
1. [女孩长期便血以为是痔疮结果是癌症](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E9%95%BF%E6%9C%9F%E4%BE%BF%E8%A1%80%E4%BB%A5%E4%B8%BA%E6%98%AF%E7%97%94%E7%96%AE%E7%BB%93%E6%9E%9C%E6%98%AF%E7%99%8C%E7%97%87%23) `211.5K 🔥` `-61%`
1. [冰箱贴一直不挪会伤害冰箱](https://s.weibo.com/weibo?q=%23%E5%86%B0%E7%AE%B1%E8%B4%B4%E4%B8%80%E7%9B%B4%E4%B8%8D%E6%8C%AA%E4%BC%9A%E4%BC%A4%E5%AE%B3%E5%86%B0%E7%AE%B1%23) `119.0K 🔥` `-28%`
1. [王鹤棣新歌歌词 (Wang Hedi's new song lyrics)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%96%B0%E6%AD%8C%E6%AD%8C%E8%AF%8D%23) `115.0K 🔥` `-29%`
1. [霍尔木兹封锁日本最先扛不住了 (Japan was the first to be unable to handle the Hormuz blockade.)](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E5%B0%81%E9%94%81%E6%97%A5%E6%9C%AC%E6%9C%80%E5%85%88%E6%89%9B%E4%B8%8D%E4%BD%8F%E4%BA%86%23) `110.6K 🔥` `-38%`
1. [省考申论 (Provincial Examination Application Essay)](https://s.weibo.com/weibo?q=%23%E7%9C%81%E8%80%83%E7%94%B3%E8%AE%BA%23) `108.8K 🔥` `-39%`
1. [谢征收到了和离书 (Xie Zheng received the He Li Shu)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%BE%81%E6%94%B6%E5%88%B0%E4%BA%86%E5%92%8C%E7%A6%BB%E4%B9%A6%23) `95.2K 🔥` `-32%`
1. [河南申论](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E7%94%B3%E8%AE%BA%23) `75.8K 🔥` `-34%`

Updated at 2026-03-14 19:13:35

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
