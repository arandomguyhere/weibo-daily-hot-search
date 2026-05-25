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

1. [郑钦文止步法网首轮 (Zheng Qinwen stopped in the first round of French Open)](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%AD%A2%E6%AD%A5%E6%B3%95%E7%BD%91%E9%A6%96%E8%BD%AE%23) `1.1M 🔥` `NEW`
1. [张月团安崎团撞选歌](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E5%9B%A2%E5%AE%89%E5%B4%8E%E5%9B%A2%E6%92%9E%E9%80%89%E6%AD%8C%23) `630.2K 🔥` `NEW`
1. [食堂大锅咖啡有多离谱](https://s.weibo.com/weibo?q=%23%E9%A3%9F%E5%A0%82%E5%A4%A7%E9%94%85%E5%92%96%E5%95%A1%E6%9C%89%E5%A4%9A%E7%A6%BB%E8%B0%B1%23) `577.0K 🔥` `NEW`
1. [荣耀600价格](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80600%E4%BB%B7%E6%A0%BC%23) `507.7K 🔥` `NEW`
1. [武契奇总统访华欢迎仪式](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A5%91%E5%A5%87%E6%80%BB%E7%BB%9F%E8%AE%BF%E5%8D%8E%E6%AC%A2%E8%BF%8E%E4%BB%AA%E5%BC%8F%23) `504.7K 🔥` `NEW`
1. [张月团怪我更爱我自己第一](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E5%9B%A2%E6%80%AA%E6%88%91%E6%9B%B4%E7%88%B1%E6%88%91%E8%87%AA%E5%B7%B1%E7%AC%AC%E4%B8%80%23) `501.2K 🔥` `NEW`
1. [浪姐双人舞台投票结果](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%8F%8C%E4%BA%BA%E8%88%9E%E5%8F%B0%E6%8A%95%E7%A5%A8%E7%BB%93%E6%9E%9C%23) `498.4K 🔥` `NEW`
1. [伊朗亿万豪门千金或让丈夫净身出户](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%BA%BF%E4%B8%87%E8%B1%AA%E9%97%A8%E5%8D%83%E9%87%91%E6%88%96%E8%AE%A9%E4%B8%88%E5%A4%AB%E5%87%80%E8%BA%AB%E5%87%BA%E6%88%B7%23) `497.9K 🔥` `NEW`
1. [潘玮柏得了面瘫](https://s.weibo.com/weibo?q=%23%E6%BD%98%E7%8E%AE%E6%9F%8F%E5%BE%97%E4%BA%86%E9%9D%A2%E7%98%AB%23) `495.1K 🔥` `NEW`
1. [妈妈离婚当日遇害姐妹俩惧怕婚姻](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E7%A6%BB%E5%A9%9A%E5%BD%93%E6%97%A5%E9%81%87%E5%AE%B3%E5%A7%90%E5%A6%B9%E4%BF%A9%E6%83%A7%E6%80%95%E5%A9%9A%E5%A7%BB%23) `490.4K 🔥` `NEW`
1. [虞书欣谁跟你说不用了 (Yu Shuxin, who told you no?)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%B0%81%E8%B7%9F%E4%BD%A0%E8%AF%B4%E4%B8%8D%E7%94%A8%E4%BA%86%23) `482.0K 🔥` `NEW`
1. [复旦教授谈为什么一定要考好的大学](https://s.weibo.com/weibo?q=%23%E5%A4%8D%E6%97%A6%E6%95%99%E6%8E%88%E8%B0%88%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%80%E5%AE%9A%E8%A6%81%E8%80%83%E5%A5%BD%E7%9A%84%E5%A4%A7%E5%AD%A6%23) `479.0K 🔥` `NEW`
1. [中芯国际20cm涨停](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E8%8A%AF%E5%9B%BD%E9%99%8520cm%E6%B6%A8%E5%81%9C%23) `476.0K 🔥` `NEW`
1. [内娱00花洗牌了](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B100%E8%8A%B1%E6%B4%97%E7%89%8C%E4%BA%86%23) `473.3K 🔥` `NEW`
1. [iPhone20原型机偷跑](https://s.weibo.com/weibo?q=%23iPhone20%E5%8E%9F%E5%9E%8B%E6%9C%BA%E5%81%B7%E8%B7%91%23) `466.8K 🔥` `NEW`
1. [王弘毅脸被划伤](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%BC%98%E6%AF%85%E8%84%B8%E8%A2%AB%E5%88%92%E4%BC%A4%23) `465.6K 🔥` `NEW`
1. [林小宅黑泽疑似恋爱](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%B0%8F%E5%AE%85%E9%BB%91%E6%B3%BD%E7%96%91%E4%BC%BC%E6%81%8B%E7%88%B1%23) `463.8K 🔥` `NEW`
1. [荣耀600](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80600%23) `461.7K 🔥` `NEW`
1. [今年热度破三万的三部剧](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E7%83%AD%E5%BA%A6%E7%A0%B4%E4%B8%89%E4%B8%87%E7%9A%84%E4%B8%89%E9%83%A8%E5%89%A7%23) `458.1K 🔥` `NEW`
1. [福岛核区日本野猪变超级猪](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%B2%9B%E6%A0%B8%E5%8C%BA%E6%97%A5%E6%9C%AC%E9%87%8E%E7%8C%AA%E5%8F%98%E8%B6%85%E7%BA%A7%E7%8C%AA%23) `456.6K 🔥` `NEW`
1. [康师傅回应1瓶水蜜桃0.01克水蜜桃汁 (Master Kong responded: 1 bottle of peach 0.01g peach juice)](https://s.weibo.com/weibo?q=%23%E5%BA%B7%E5%B8%88%E5%82%85%E5%9B%9E%E5%BA%941%E7%93%B6%E6%B0%B4%E8%9C%9C%E6%A1%830.01%E5%85%8B%E6%B0%B4%E8%9C%9C%E6%A1%83%E6%B1%81%23) `452.5K 🔥` `NEW`
1. [直播女选手隐私部位人太多不是理由](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E6%92%AD%E5%A5%B3%E9%80%89%E6%89%8B%E9%9A%90%E7%A7%81%E9%83%A8%E4%BD%8D%E4%BA%BA%E5%A4%AA%E5%A4%9A%E4%B8%8D%E6%98%AF%E7%90%86%E7%94%B1%23) `448.0K 🔥` `NEW`
1. [主角](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `445.2K 🔥` `NEW`
1. [中国博主富士山下跳舞被外网辱骂](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%8D%9A%E4%B8%BB%E5%AF%8C%E5%A3%AB%E5%B1%B1%E4%B8%8B%E8%B7%B3%E8%88%9E%E8%A2%AB%E5%A4%96%E7%BD%91%E8%BE%B1%E9%AA%82%23) `434.5K 🔥` `NEW`
1. [时代峰峻回应时代少年团联排杂音](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%9B%9E%E5%BA%94%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E8%81%94%E6%8E%92%E6%9D%82%E9%9F%B3%23) `430.7K 🔥` `NEW`
1. [郑钦文vs赫瓦林斯卡](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E8%B5%AB%E7%93%A6%E6%9E%97%E6%96%AF%E5%8D%A1%23) `429.1K 🔥` `NEW`
1. [荣耀600发布会起风了回忆杀](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80600%E5%8F%91%E5%B8%83%E4%BC%9A%E8%B5%B7%E9%A3%8E%E4%BA%86%E5%9B%9E%E5%BF%86%E6%9D%80%23) `427.4K 🔥` `NEW`
1. [麒麟2026芯片性能大幅提升](https://s.weibo.com/weibo?q=%23%E9%BA%92%E9%BA%9F2026%E8%8A%AF%E7%89%87%E6%80%A7%E8%83%BD%E5%A4%A7%E5%B9%85%E6%8F%90%E5%8D%87%23) `425.0K 🔥` `NEW`
1. [稻城亚丁景区通报博主违规自驾](https://s.weibo.com/weibo?q=%23%E7%A8%BB%E5%9F%8E%E4%BA%9A%E4%B8%81%E6%99%AF%E5%8C%BA%E9%80%9A%E6%8A%A5%E5%8D%9A%E4%B8%BB%E8%BF%9D%E8%A7%84%E8%87%AA%E9%A9%BE%23) `422.1K 🔥` `NEW`
1. [何洁说苏醒太难处了](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B4%81%E8%AF%B4%E8%8B%8F%E9%86%92%E5%A4%AA%E9%9A%BE%E5%A4%84%E4%BA%86%23) `416.8K 🔥` `NEW`
1. [盒马粉木耳标签被指低俗擦边 (Hema powder fungus label accused of being vulgar)](https://s.weibo.com/weibo?q=%23%E7%9B%92%E9%A9%AC%E7%B2%89%E6%9C%A8%E8%80%B3%E6%A0%87%E7%AD%BE%E8%A2%AB%E6%8C%87%E4%BD%8E%E4%BF%97%E6%93%A6%E8%BE%B9%23) `413.5K 🔥` `NEW`
1. [董璇张维伊婚后一年都在谈恋爱](https://s.weibo.com/weibo?q=%23%E8%91%A3%E7%92%87%E5%BC%A0%E7%BB%B4%E4%BC%8A%E5%A9%9A%E5%90%8E%E4%B8%80%E5%B9%B4%E9%83%BD%E5%9C%A8%E8%B0%88%E6%81%8B%E7%88%B1%23) `411.0K 🔥` `NEW`
1. [杜华女儿与甜馨小酒窝同框](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%8D%8E%E5%A5%B3%E5%84%BF%E4%B8%8E%E7%94%9C%E9%A6%A8%E5%B0%8F%E9%85%92%E7%AA%9D%E5%90%8C%E6%A1%86%23) `410.7K 🔥` `NEW`
1. [T1晋级EWC](https://s.weibo.com/weibo?q=%23T1%E6%99%8B%E7%BA%A7EWC%23) `406.4K 🔥` `NEW`
1. [曝唐嫣提名白玉兰](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%94%90%E5%AB%A3%E6%8F%90%E5%90%8D%E7%99%BD%E7%8E%89%E5%85%B0%23) `405.6K 🔥` `NEW`
1. [微信多项新功能](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E5%A4%9A%E9%A1%B9%E6%96%B0%E5%8A%9F%E8%83%BD%23) `812.4K 🔥` `+76%`
1. [智能机器人加速走进日常生活](https://s.weibo.com/weibo?q=%23%E6%99%BA%E8%83%BD%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%8A%A0%E9%80%9F%E8%B5%B0%E8%BF%9B%E6%97%A5%E5%B8%B8%E7%94%9F%E6%B4%BB%23) `663.2K 🔥`
1. [秦岚也不舒服了](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%B2%9A%E4%B9%9F%E4%B8%8D%E8%88%92%E6%9C%8D%E4%BA%86%23) `491.6K 🔥`
1. [王鹤棣经纪人朋友圈 (Wang Hedi’s agent’s circle of friends)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E7%BB%8F%E7%BA%AA%E4%BA%BA%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `478.0K 🔥`
1. [美伊就开放霍尔木兹海峡达成一致](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%B0%B1%E5%BC%80%E6%94%BE%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E8%BE%BE%E6%88%90%E4%B8%80%E8%87%B4%23) `450.5K 🔥`
1. [王源起诉B站侵权](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E8%B5%B7%E8%AF%89B%E7%AB%99%E4%BE%B5%E6%9D%83%23) `439.6K 🔥`
1. [曝朱梓骁恋情 (Exposing Zhu Zixiao’s love affair)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9C%B1%E6%A2%93%E9%AA%81%E6%81%8B%E6%83%85%23) `436.4K 🔥`
1. [不愧是老祖宗严选的地理位置](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E6%84%A7%E6%98%AF%E8%80%81%E7%A5%96%E5%AE%97%E4%B8%A5%E9%80%89%E7%9A%84%E5%9C%B0%E7%90%86%E4%BD%8D%E7%BD%AE%23) `505.4K 🔥` `-35%`
1. [乘风四公双人合作曲限时推荐](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E%E5%9B%9B%E5%85%AC%E5%8F%8C%E4%BA%BA%E5%90%88%E4%BD%9C%E6%9B%B2%E9%99%90%E6%97%B6%E6%8E%A8%E8%8D%90%23) `487.5K 🔥` `-53%`
1. [聚酯纤维是塑料的具象化](https://s.weibo.com/weibo?q=%23%E8%81%9A%E9%85%AF%E7%BA%A4%E7%BB%B4%E6%98%AF%E5%A1%91%E6%96%99%E7%9A%84%E5%85%B7%E8%B1%A1%E5%8C%96%23) `483.8K 🔥` `-34%`
1. [任敏觉得邓超不太舒服](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%95%8F%E8%A7%89%E5%BE%97%E9%82%93%E8%B6%85%E4%B8%8D%E5%A4%AA%E8%88%92%E6%9C%8D%23) `469.5K 🔥` `-41%`
1. [曾沛慈团想唱搁浅](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%9B%A2%E6%83%B3%E5%94%B1%E6%90%81%E6%B5%85%23) `443.1K 🔥` `-32%`
1. [男子灭蚊4年收尸记死期做标本](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%81%AD%E8%9A%8A4%E5%B9%B4%E6%94%B6%E5%B0%B8%E8%AE%B0%E6%AD%BB%E6%9C%9F%E5%81%9A%E6%A0%87%E6%9C%AC%23) `440.1K 🔥` `-21%`
1. [李思潼 虎鲸文娱](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%80%9D%E6%BD%BC%20%E8%99%8E%E9%B2%B8%E6%96%87%E5%A8%B1%23) `420.5K 🔥` `-23%`

Updated at 2026-05-25 20:38:46

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
