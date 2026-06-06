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

1. [高考第一天 (First day of college entrance examination)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E7%AC%AC%E4%B8%80%E5%A4%A9%23) `517.1K 🔥` `NEW`
1. [中国记者采访菲代表团竟被嘲笑辱骂](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%AE%B0%E8%80%85%E9%87%87%E8%AE%BF%E8%8F%B2%E4%BB%A3%E8%A1%A8%E5%9B%A2%E7%AB%9F%E8%A2%AB%E5%98%B2%E7%AC%91%E8%BE%B1%E9%AA%82%23) `244.7K 🔥` `NEW`
1. [唐艺昕疑似皮肤病复发](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E7%96%91%E4%BC%BC%E7%9A%AE%E8%82%A4%E7%97%85%E5%A4%8D%E5%8F%91%23) `181.7K 🔥` `NEW`
1. [高考为什么定在6月](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E4%B8%BA%E4%BB%80%E4%B9%88%E5%AE%9A%E5%9C%A86%E6%9C%88%23) `159.3K 🔥` `NEW`
1. [小米回应SU7电吸门无防夹功能](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%9B%9E%E5%BA%94SU7%E7%94%B5%E5%90%B8%E9%97%A8%E6%97%A0%E9%98%B2%E5%A4%B9%E5%8A%9F%E8%83%BD%23) `144.2K 🔥` `NEW`
1. [5个部位疼可能是心梗先兆](https://s.weibo.com/weibo?q=%235%E4%B8%AA%E9%83%A8%E4%BD%8D%E7%96%BC%E5%8F%AF%E8%83%BD%E6%98%AF%E5%BF%83%E6%A2%97%E5%85%88%E5%85%86%23) `143.6K 🔥` `NEW`
1. [金价跌回2025年是买还是等](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%B7%8C%E5%9B%9E2025%E5%B9%B4%E6%98%AF%E4%B9%B0%E8%BF%98%E6%98%AF%E7%AD%89%23) `143.2K 🔥` `NEW`
1. [人数降了招生多了这届高考不难了吗](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%95%B0%E9%99%8D%E4%BA%86%E6%8B%9B%E7%94%9F%E5%A4%9A%E4%BA%86%E8%BF%99%E5%B1%8A%E9%AB%98%E8%80%83%E4%B8%8D%E9%9A%BE%E4%BA%86%E5%90%97%23) `142.4K 🔥` `NEW`
1. [跑男将迎最后一轮拍摄](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E5%B0%86%E8%BF%8E%E6%9C%80%E5%90%8E%E4%B8%80%E8%BD%AE%E6%8B%8D%E6%91%84%23) `141.4K 🔥` `NEW`
1. [今天高考](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%A9%E9%AB%98%E8%80%83%23) `112.8K 🔥` `NEW`
1. [奔跑吧 (run)](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%23) `102.3K 🔥` `NEW`
1. [香港全职妈妈做的晚餐](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%85%A8%E8%81%8C%E5%A6%88%E5%A6%88%E5%81%9A%E7%9A%84%E6%99%9A%E9%A4%90%23) `98.8K 🔥` `NEW`
1. [翘楚](https://s.weibo.com/weibo?q=%23%E7%BF%98%E6%A5%9A%23) `76.8K 🔥` `NEW`
1. [宋亚轩刘耀文戴同一帽子](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%88%98%E8%80%80%E6%96%87%E6%88%B4%E5%90%8C%E4%B8%80%E5%B8%BD%E5%AD%90%23) `74.2K 🔥` `NEW`
1. [孙怡张月确认无误俩站姐](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E5%BC%A0%E6%9C%88%E7%A1%AE%E8%AE%A4%E6%97%A0%E8%AF%AF%E4%BF%A9%E7%AB%99%E5%A7%90%23) `72.3K 🔥` `NEW`
1. [高考加油](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%8A%A0%E6%B2%B9%23) `70.8K 🔥` `NEW`
1. [安徽一油改气车辆行驶中爆炸](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%BE%BD%E4%B8%80%E6%B2%B9%E6%94%B9%E6%B0%94%E8%BD%A6%E8%BE%86%E8%A1%8C%E9%A9%B6%E4%B8%AD%E7%88%86%E7%82%B8%23) `66.6K 🔥` `NEW`
1. [16岁女孩回应被闺蜜捅成重伤](https://s.weibo.com/weibo?q=%2316%E5%B2%81%E5%A5%B3%E5%AD%A9%E5%9B%9E%E5%BA%94%E8%A2%AB%E9%97%BA%E8%9C%9C%E6%8D%85%E6%88%90%E9%87%8D%E4%BC%A4%23) `64.2K 🔥` `NEW`
1. [二手中国校服凭什么刷爆非洲](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E6%89%8B%E4%B8%AD%E5%9B%BD%E6%A0%A1%E6%9C%8D%E5%87%AD%E4%BB%80%E4%B9%88%E5%88%B7%E7%88%86%E9%9D%9E%E6%B4%B2%23) `52.7K 🔥` `NEW`
1. [置身钉内](https://s.weibo.com/weibo?q=%23%E7%BD%AE%E8%BA%AB%E9%92%89%E5%86%85%23) `52.7K 🔥` `NEW`
1. [澳门特大卖淫案细节曝光 (Details of Macau’s major prostitution case exposed)](https://s.weibo.com/weibo?q=%23%E6%BE%B3%E9%97%A8%E7%89%B9%E5%A4%A7%E5%8D%96%E6%B7%AB%E6%A1%88%E7%BB%86%E8%8A%82%E6%9B%9D%E5%85%89%23) `989.2K 🔥` `+1166%`
1. [4所公立幼儿园报名看家长工资流水 (4 public kindergartens sign up to see parents’ salary statements)](https://s.weibo.com/weibo?q=%234%E6%89%80%E5%85%AC%E7%AB%8B%E5%B9%BC%E5%84%BF%E5%9B%AD%E6%8A%A5%E5%90%8D%E7%9C%8B%E5%AE%B6%E9%95%BF%E5%B7%A5%E8%B5%84%E6%B5%81%E6%B0%B4%23) `725.3K 🔥` `+801%`
1. [高考一定带好身份证准考证 (You must bring your ID card and admission ticket for the college entrance examination)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E4%B8%80%E5%AE%9A%E5%B8%A6%E5%A5%BD%E8%BA%AB%E4%BB%BD%E8%AF%81%E5%87%86%E8%80%83%E8%AF%81%23) `545.6K 🔥` `+87%`
1. [女生请求天鹅帮忙捡反光板](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E8%AF%B7%E6%B1%82%E5%A4%A9%E9%B9%85%E5%B8%AE%E5%BF%99%E6%8D%A1%E5%8F%8D%E5%85%89%E6%9D%BF%23) `356.3K 🔥` `+110%`
1. [唐艺昕又过敏了吗 (Is Tang Yixin allergic again?)](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E5%8F%88%E8%BF%87%E6%95%8F%E4%BA%86%E5%90%97%23) `220.6K 🔥` `+187%`
1. [安德列娃法网女单冠军](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%BE%B7%E5%88%97%E5%A8%83%E6%B3%95%E7%BD%91%E5%A5%B3%E5%8D%95%E5%86%A0%E5%86%9B%23) `216.3K 🔥` `+175%`
1. [野人先生忽然在日本引起了讨论 (Mr. Savage suddenly caused discussion in Japan)](https://s.weibo.com/weibo?q=%23%E9%87%8E%E4%BA%BA%E5%85%88%E7%94%9F%E5%BF%BD%E7%84%B6%E5%9C%A8%E6%97%A5%E6%9C%AC%E5%BC%95%E8%B5%B7%E4%BA%86%E8%AE%A8%E8%AE%BA%23) `216.2K 🔥` `+178%`
1. [谢娜演唱会全国巡演](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E5%85%A8%E5%9B%BD%E5%B7%A1%E6%BC%94%23) `214.8K 🔥` `+57%`
1. [公积金新政有望唤醒十万亿沉睡资金 (The new provident fund policy is expected to awaken 10 trillion dormant funds)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E6%96%B0%E6%94%BF%E6%9C%89%E6%9C%9B%E5%94%A4%E9%86%92%E5%8D%81%E4%B8%87%E4%BA%BF%E6%B2%89%E7%9D%A1%E8%B5%84%E9%87%91%23) `191.3K 🔥` `+148%`
1. [谁在纵容用智能眼镜偷拍空姐](https://s.weibo.com/weibo?q=%23%E8%B0%81%E5%9C%A8%E7%BA%B5%E5%AE%B9%E7%94%A8%E6%99%BA%E8%83%BD%E7%9C%BC%E9%95%9C%E5%81%B7%E6%8B%8D%E7%A9%BA%E5%A7%90%23) `143.9K 🔥` `+272%`
1. [阚清子甩头发完全魅魔](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E7%94%A9%E5%A4%B4%E5%8F%91%E5%AE%8C%E5%85%A8%E9%AD%85%E9%AD%94%23) `140.1K 🔥` `+82%`
1. [F1](https://s.weibo.com/weibo?q=%23F1%23) `109.3K 🔥` `+134%`
1. [高考新增AI监考员 (College Entrance Examination Adds AI Invigilator)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%96%B0%E5%A2%9EAI%E7%9B%91%E8%80%83%E5%91%98%23) `108.0K 🔥` `+173%`
1. [百妖谱 邓为](https://s.weibo.com/weibo?q=%23%E7%99%BE%E5%A6%96%E8%B0%B1%20%E9%82%93%E4%B8%BA%23) `107.7K 🔥` `+42%`
1. [安崎给张月道歉 (An Qi apologizes to Zhang Yue)](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%B4%8E%E7%BB%99%E5%BC%A0%E6%9C%88%E9%81%93%E6%AD%89%23) `95.6K 🔥` `+25%`
1. [黄灿灿一开口曾沛慈就哭了 (Zeng Peici cried as soon as Huang Cancan opened her mouth.)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E4%B8%80%E5%BC%80%E5%8F%A3%E6%9B%BE%E6%B2%9B%E6%85%88%E5%B0%B1%E5%93%AD%E4%BA%86%23) `92.7K 🔥` `+31%`
1. [感情里的微妙悖论](https://s.weibo.com/weibo?q=%23%E6%84%9F%E6%83%85%E9%87%8C%E7%9A%84%E5%BE%AE%E5%A6%99%E6%82%96%E8%AE%BA%23) `77.3K 🔥` `+65%`
1. [鸡蛋价格暴涨四成](https://s.weibo.com/weibo?q=%23%E9%B8%A1%E8%9B%8B%E4%BB%B7%E6%A0%BC%E6%9A%B4%E6%B6%A8%E5%9B%9B%E6%88%90%23) `72.9K 🔥` `+71%`
1. [宇树回应联手英伟达](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E5%9B%9E%E5%BA%94%E8%81%94%E6%89%8B%E8%8B%B1%E4%BC%9F%E8%BE%BE%23) `70.7K 🔥` `+83%`
1. [女生嘴含夹竹桃拍照中毒过敏 (Girl poisoned and allergic after taking photo with oleander in mouth)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E5%98%B4%E5%90%AB%E5%A4%B9%E7%AB%B9%E6%A1%83%E6%8B%8D%E7%85%A7%E4%B8%AD%E6%AF%92%E8%BF%87%E6%95%8F%23) `57.8K 🔥` `+22%`
1. [网红边牧锄头鉴定价值超2000元 (Internet celebrity Bian Mu’s hoe is valued at over 2,000 yuan)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E8%BE%B9%E7%89%A7%E9%94%84%E5%A4%B4%E9%89%B4%E5%AE%9A%E4%BB%B7%E5%80%BC%E8%B6%852000%E5%85%83%23) `55.0K 🔥` `+42%`
1. [侯宇没名气就是原罪 (Hou Yu’s lack of fame is his original sin)](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E5%AE%87%E6%B2%A1%E5%90%8D%E6%B0%94%E5%B0%B1%E6%98%AF%E5%8E%9F%E7%BD%AA%23) `54.4K 🔥` `+41%`
1. [萧蔷为了短发剪了短发 (Xiao Qiang cut her hair short for short hair)](https://s.weibo.com/weibo?q=%23%E8%90%A7%E8%94%B7%E4%B8%BA%E4%BA%86%E7%9F%AD%E5%8F%91%E5%89%AA%E4%BA%86%E7%9F%AD%E5%8F%91%23) `52.7K 🔥` `+21%`
1. [万千惠路边哭惨了](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%83%A0%E8%B7%AF%E8%BE%B9%E5%93%AD%E6%83%A8%E4%BA%86%23) `338.4K 🔥`
1. [以为是爱狗人士结果是爱心人士](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BA%E6%98%AF%E7%88%B1%E7%8B%97%E4%BA%BA%E5%A3%AB%E7%BB%93%E6%9E%9C%E6%98%AF%E7%88%B1%E5%BF%83%E4%BA%BA%E5%A3%AB%23) `142.7K 🔥`
1. [萨摩耶坐飞机累得都不耶了](https://s.weibo.com/weibo?q=%23%E8%90%A8%E6%91%A9%E8%80%B6%E5%9D%90%E9%A3%9E%E6%9C%BA%E7%B4%AF%E5%BE%97%E9%83%BD%E4%B8%8D%E8%80%B6%E4%BA%86%23) `226.5K 🔥` `-55%`
1. [李佳航这是咋了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BD%B3%E8%88%AA%E8%BF%99%E6%98%AF%E5%92%8B%E4%BA%86%23) `216.1K 🔥` `-43%`
1. [曝沈月文章抄袭 (Shen Yue’s article was exposed as plagiarized)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B2%88%E6%9C%88%E6%96%87%E7%AB%A0%E6%8A%84%E8%A2%AD%23) `173.8K 🔥` `-73%`
1. [雪饼猴称4元烤肠嫌贵可以不吃 (Snow Pancake Monkey said the 4 yuan grilled sausage is too expensive and you can skip it)](https://s.weibo.com/weibo?q=%23%E9%9B%AA%E9%A5%BC%E7%8C%B4%E7%A7%B04%E5%85%83%E7%83%A4%E8%82%A0%E5%AB%8C%E8%B4%B5%E5%8F%AF%E4%BB%A5%E4%B8%8D%E5%90%83%23) `155.4K 🔥` `-70%`
1. [赵兆情商 (Zhao Zhao EQ)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%85%86%E6%83%85%E5%95%86%23) `111.4K 🔥` `-69%`

Updated at 2026-06-07 07:50:01

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
