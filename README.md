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

1. [网传孙杨妈妈要求删除马頔发言 (It is reported online that Sun Yang’s mother requested that Ma Di’s statement be deleted)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%AD%99%E6%9D%A8%E5%A6%88%E5%A6%88%E8%A6%81%E6%B1%82%E5%88%A0%E9%99%A4%E9%A9%AC%E9%A0%94%E5%8F%91%E8%A8%80%23) `10.0M 🔥` `NEW`
1. [孙杨妈妈](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%A6%88%E5%A6%88%23) `2.1M 🔥` `NEW`
1. [新中国首条通江达海大运河来了](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%B8%AD%E5%9B%BD%E9%A6%96%E6%9D%A1%E9%80%9A%E6%B1%9F%E8%BE%BE%E6%B5%B7%E5%A4%A7%E8%BF%90%E6%B2%B3%E6%9D%A5%E4%BA%86%23) `1.6M 🔥` `NEW`
1. [躺平网红](https://s.weibo.com/weibo?q=%23%E8%BA%BA%E5%B9%B3%E7%BD%91%E7%BA%A2%23) `1.2M 🔥` `NEW`
1. [偏偏宠爱](https://s.weibo.com/weibo?q=%23%E5%81%8F%E5%81%8F%E5%AE%A0%E7%88%B1%23) `818.2K 🔥` `NEW`
1. [10间敢死队续写心愿二创大赛](https://s.weibo.com/weibo?q=%2310%E9%97%B4%E6%95%A2%E6%AD%BB%E9%98%9F%E7%BB%AD%E5%86%99%E5%BF%83%E6%84%BF%E4%BA%8C%E5%88%9B%E5%A4%A7%E8%B5%9B%23) `608.6K 🔥` `NEW`
1. [小狗每次拿外卖都把家具暴打一遍](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E6%AF%8F%E6%AC%A1%E6%8B%BF%E5%A4%96%E5%8D%96%E9%83%BD%E6%8A%8A%E5%AE%B6%E5%85%B7%E6%9A%B4%E6%89%93%E4%B8%80%E9%81%8D%23) `585.3K 🔥` `NEW`
1. [王楚钦放狠话](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%94%BE%E7%8B%A0%E8%AF%9D%23) `558.1K 🔥` `NEW`
1. [吴宣仪母亲被赶出公司](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%A3%E4%BB%AA%E6%AF%8D%E4%BA%B2%E8%A2%AB%E8%B5%B6%E5%87%BA%E5%85%AC%E5%8F%B8%23) `515.9K 🔥` `NEW`
1. [霸王茶姬疑喝出水银市监局已介入](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E7%96%91%E5%96%9D%E5%87%BA%E6%B0%B4%E9%93%B6%E5%B8%82%E7%9B%91%E5%B1%80%E5%B7%B2%E4%BB%8B%E5%85%A5%23) `506.1K 🔥` `NEW`
1. [请假10天5天连做5台手术男子发声 (A man who took 10 days off and had 5 surgeries in a row speaks out)](https://s.weibo.com/weibo?q=%23%E8%AF%B7%E5%81%8710%E5%A4%A95%E5%A4%A9%E8%BF%9E%E5%81%9A5%E5%8F%B0%E6%89%8B%E6%9C%AF%E7%94%B7%E5%AD%90%E5%8F%91%E5%A3%B0%23) `491.0K 🔥` `NEW`
1. [曝王一博没见过自己的演艺合同](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%B2%A1%E8%A7%81%E8%BF%87%E8%87%AA%E5%B7%B1%E7%9A%84%E6%BC%94%E8%89%BA%E5%90%88%E5%90%8C%23) `481.6K 🔥` `NEW`
1. [曝乐华不允许艺人查看工作合同](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%B9%90%E5%8D%8E%E4%B8%8D%E5%85%81%E8%AE%B8%E8%89%BA%E4%BA%BA%E6%9F%A5%E7%9C%8B%E5%B7%A5%E4%BD%9C%E5%90%88%E5%90%8C%23) `480.6K 🔥` `NEW`
1. [免单大奖过期未使用急坏飞猪](https://s.weibo.com/weibo?q=%23%E5%85%8D%E5%8D%95%E5%A4%A7%E5%A5%96%E8%BF%87%E6%9C%9F%E6%9C%AA%E4%BD%BF%E7%94%A8%E6%80%A5%E5%9D%8F%E9%A3%9E%E7%8C%AA%23) `478.6K 🔥` `NEW`
1. [苹果天气崩了](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%A4%A9%E6%B0%94%E5%B4%A9%E4%BA%86%23) `477.0K 🔥` `NEW`
1. [王一博瑞幸即享给到夯](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%91%9E%E5%B9%B8%E5%8D%B3%E4%BA%AB%E7%BB%99%E5%88%B0%E5%A4%AF%23) `473.5K 🔥` `NEW`
1. [普京亲自为俄女副总理撑伞](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E4%BA%B2%E8%87%AA%E4%B8%BA%E4%BF%84%E5%A5%B3%E5%89%AF%E6%80%BB%E7%90%86%E6%92%91%E4%BC%9E%23) `473.2K 🔥` `NEW`
1. [女子半年4次脑梗](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%8D%8A%E5%B9%B44%E6%AC%A1%E8%84%91%E6%A2%97%23) `471.1K 🔥` `NEW`
1. [曝吴宣仪提解约遭乐华拒绝](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%90%B4%E5%AE%A3%E4%BB%AA%E6%8F%90%E8%A7%A3%E7%BA%A6%E9%81%AD%E4%B9%90%E5%8D%8E%E6%8B%92%E7%BB%9D%23) `465.2K 🔥` `NEW`
1. [这比被出轨更令人难以接受](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%AF%94%E8%A2%AB%E5%87%BA%E8%BD%A8%E6%9B%B4%E4%BB%A4%E4%BA%BA%E9%9A%BE%E4%BB%A5%E6%8E%A5%E5%8F%97%23) `462.4K 🔥` `NEW`
1. [华为Pura90系列开售爆单 (Huawei’s Pura90 series goes on sale and hits huge orders)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAPura90%E7%B3%BB%E5%88%97%E5%BC%80%E5%94%AE%E7%88%86%E5%8D%95%23) `461.2K 🔥` `NEW`
1. [赛琳娜老公cue比丑帖](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E7%90%B3%E5%A8%9C%E8%80%81%E5%85%ACcue%E6%AF%94%E4%B8%91%E5%B8%96%23) `459.1K 🔥` `NEW`
1. [我国新发现13个亿吨级油田](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%96%B0%E5%8F%91%E7%8E%B013%E4%B8%AA%E4%BA%BF%E5%90%A8%E7%BA%A7%E6%B2%B9%E7%94%B0%23) `454.4K 🔥` `NEW`
1. [偏偏宠爱阵容](https://s.weibo.com/weibo?q=%23%E5%81%8F%E5%81%8F%E5%AE%A0%E7%88%B1%E9%98%B5%E5%AE%B9%23) `452.1K 🔥` `NEW`
1. [日本出兵都是作死](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%87%BA%E5%85%B5%E9%83%BD%E6%98%AF%E4%BD%9C%E6%AD%BB%23) `445.1K 🔥` `NEW`
1. [十年前的婚纱照](https://s.weibo.com/weibo?q=%23%E5%8D%81%E5%B9%B4%E5%89%8D%E7%9A%84%E5%A9%9A%E7%BA%B1%E7%85%A7%23) `443.0K 🔥` `NEW`
1. [短剧顶流再就业](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E9%A1%B6%E6%B5%81%E5%86%8D%E5%B0%B1%E4%B8%9A%23) `440.7K 🔥` `NEW`
1. [怎么会有表达能力这么强的人啊](https://s.weibo.com/weibo?q=%23%E6%80%8E%E4%B9%88%E4%BC%9A%E6%9C%89%E8%A1%A8%E8%BE%BE%E8%83%BD%E5%8A%9B%E8%BF%99%E4%B9%88%E5%BC%BA%E7%9A%84%E4%BA%BA%E5%95%8A%23) `435.8K 🔥` `NEW`
1. [黄金彻底涨不动了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%BD%BB%E5%BA%95%E6%B6%A8%E4%B8%8D%E5%8A%A8%E4%BA%86%23) `428.8K 🔥` `NEW`
1. [23岁女生身高1米7体重仅88斤](https://s.weibo.com/weibo?q=%2323%E5%B2%81%E5%A5%B3%E7%94%9F%E8%BA%AB%E9%AB%981%E7%B1%B37%E4%BD%93%E9%87%8D%E4%BB%8588%E6%96%A4%23) `427.3K 🔥` `NEW`
1. [白冰单靠6个广告月入近400万 (Bai Bing earns nearly 4 million a month from 6 advertisements alone)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%86%B0%E5%8D%95%E9%9D%A06%E4%B8%AA%E5%B9%BF%E5%91%8A%E6%9C%88%E5%85%A5%E8%BF%91400%E4%B8%87%23) `424.6K 🔥` `NEW`
1. [文字讨好症](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%AD%97%E8%AE%A8%E5%A5%BD%E7%97%87%23) `421.2K 🔥` `NEW`
1. [偏偏宠爱影视化](https://s.weibo.com/weibo?q=%23%E5%81%8F%E5%81%8F%E5%AE%A0%E7%88%B1%E5%BD%B1%E8%A7%86%E5%8C%96%23) `420.6K 🔥` `NEW`
1. [15岁女生遇害至今父亲喝掉300斤酒](https://s.weibo.com/weibo?q=%2315%E5%B2%81%E5%A5%B3%E7%94%9F%E9%81%87%E5%AE%B3%E8%87%B3%E4%BB%8A%E7%88%B6%E4%BA%B2%E5%96%9D%E6%8E%89300%E6%96%A4%E9%85%92%23) `417.0K 🔥` `NEW`
1. [33岁杨紫拍戏状态](https://s.weibo.com/weibo?q=%2333%E5%B2%81%E6%9D%A8%E7%B4%AB%E6%8B%8D%E6%88%8F%E7%8A%B6%E6%80%81%23) `414.6K 🔥` `NEW`
1. [开拓者vs马刺](https://s.weibo.com/weibo?q=%23%E5%BC%80%E6%8B%93%E8%80%85vs%E9%A9%AC%E5%88%BA%23) `413.4K 🔥` `NEW`
1. [百亩蒜薹被近千人2天抽完](https://s.weibo.com/weibo?q=%23%E7%99%BE%E4%BA%A9%E8%92%9C%E8%96%B9%E8%A2%AB%E8%BF%91%E5%8D%83%E4%BA%BA2%E5%A4%A9%E6%8A%BD%E5%AE%8C%23) `410.7K 🔥` `NEW`
1. [员工上班时间吃早餐被开除](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A5%E4%B8%8A%E7%8F%AD%E6%97%B6%E9%97%B4%E5%90%83%E6%97%A9%E9%A4%90%E8%A2%AB%E5%BC%80%E9%99%A4%23) `408.4K 🔥` `NEW`
1. [孙杨 张豆豆](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%20%E5%BC%A0%E8%B1%86%E8%B1%86%23) `404.9K 🔥` `NEW`
1. [住商极高的家出现了](https://s.weibo.com/weibo?q=%23%E4%BD%8F%E5%95%86%E6%9E%81%E9%AB%98%E7%9A%84%E5%AE%B6%E5%87%BA%E7%8E%B0%E4%BA%86%23) `404.2K 🔥` `NEW`
1. [用了多年的微信朋友圈排版改了 (The layout of WeChat Moments, which has been used for many years, has been changed)](https://s.weibo.com/weibo?q=%23%E7%94%A8%E4%BA%86%E5%A4%9A%E5%B9%B4%E7%9A%84%E5%BE%AE%E4%BF%A1%E6%9C%8B%E5%8F%8B%E5%9C%88%E6%8E%92%E7%89%88%E6%94%B9%E4%BA%86%23) `400.8K 🔥` `NEW`
1. [美团闪购Pura开售](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%A2%E9%97%AA%E8%B4%ADPura%E5%BC%80%E5%94%AE%23) `1.4M 🔥` `+242%`
1. [阚清子欣赏一下自己的精修图](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E6%AC%A3%E8%B5%8F%E4%B8%80%E4%B8%8B%E8%87%AA%E5%B7%B1%E7%9A%84%E7%B2%BE%E4%BF%AE%E5%9B%BE%23) `450.9K 🔥` `+37%`
1. [瑶一瑶妈妈回应被吐槽身材](https://s.weibo.com/weibo?q=%23%E7%91%B6%E4%B8%80%E7%91%B6%E5%A6%88%E5%A6%88%E5%9B%9E%E5%BA%94%E8%A2%AB%E5%90%90%E6%A7%BD%E8%BA%AB%E6%9D%90%23) `449.6K 🔥` `+125%`
1. [华为折叠屏对比iPhone折叠屏](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E6%8A%98%E5%8F%A0%E5%B1%8F%E5%AF%B9%E6%AF%94iPhone%E6%8A%98%E5%8F%A0%E5%B1%8F%23) `398.2K 🔥` `+62%`
1. [日本广岛爆炸现场视频](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%B9%BF%E5%B2%9B%E7%88%86%E7%82%B8%E7%8E%B0%E5%9C%BA%E8%A7%86%E9%A2%91%23) `466.5K 🔥`
1. [虞书欣ins点赞Angelababy](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3ins%E7%82%B9%E8%B5%9EAngelababy%23) `435.1K 🔥`
1. [白鹿奔跑吧本次最后一次上班](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%A5%94%E8%B7%91%E5%90%A7%E6%9C%AC%E6%AC%A1%E6%9C%80%E5%90%8E%E4%B8%80%E6%AC%A1%E4%B8%8A%E7%8F%AD%23) `431.8K 🔥`
1. [朋友圈改版](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E6%94%B9%E7%89%88%23) `2.5M 🔥` `-57%`
1. [体育老师考教资太尴尬了](https://s.weibo.com/weibo?q=%23%E4%BD%93%E8%82%B2%E8%80%81%E5%B8%88%E8%80%83%E6%95%99%E8%B5%84%E5%A4%AA%E5%B0%B4%E5%B0%AC%E4%BA%86%23) `525.9K 🔥` `-34%`
1. [多平台已下架毒品前体 (Drug precursors have been removed from many platforms)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%B9%B3%E5%8F%B0%E5%B7%B2%E4%B8%8B%E6%9E%B6%E6%AF%92%E5%93%81%E5%89%8D%E4%BD%93%23) `516.3K 🔥` `-63%`

Updated at 2026-04-29 12:45:14

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
