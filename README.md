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

1. [省考申论 (Provincial Examination Application Essay)](https://s.weibo.com/weibo?q=%23%E7%9C%81%E8%80%83%E7%94%B3%E8%AE%BA%23) `1.1M 🔥` `NEW`
1. [十五五规划纲要解读来了](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E8%A7%84%E5%88%92%E7%BA%B2%E8%A6%81%E8%A7%A3%E8%AF%BB%E6%9D%A5%E4%BA%86%23) `669.6K 🔥` `NEW`
1. [白发能洗黑纯属谣言](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%8F%91%E8%83%BD%E6%B4%97%E9%BB%91%E7%BA%AF%E5%B1%9E%E8%B0%A3%E8%A8%80%23) `437.3K 🔥` `NEW`
1. [逐玉 肛泰别闹了](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E8%82%9B%E6%B3%B0%E5%88%AB%E9%97%B9%E4%BA%86%23) `220.0K 🔥` `NEW`
1. [河南申论](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E7%94%B3%E8%AE%BA%23) `171.2K 🔥` `NEW`
1. [你的外卖是谁在背后抬价](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E5%A4%96%E5%8D%96%E6%98%AF%E8%B0%81%E5%9C%A8%E8%83%8C%E5%90%8E%E6%8A%AC%E4%BB%B7%23) `155.4K 🔥` `NEW`
1. [辽宁申论](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E7%94%B3%E8%AE%BA%23) `132.9K 🔥` `NEW`
1. [F1直播](https://s.weibo.com/weibo?q=%23F1%E7%9B%B4%E6%92%AD%23) `131.7K 🔥` `NEW`
1. [冰箱贴一直不挪会伤害冰箱](https://s.weibo.com/weibo?q=%23%E5%86%B0%E7%AE%B1%E8%B4%B4%E4%B8%80%E7%9B%B4%E4%B8%8D%E6%8C%AA%E4%BC%9A%E4%BC%A4%E5%AE%B3%E5%86%B0%E7%AE%B1%23) `97.0K 🔥` `NEW`
1. [F1中国大奖赛](https://s.weibo.com/weibo?q=%23F1%E4%B8%AD%E5%9B%BD%E5%A4%A7%E5%A5%96%E8%B5%9B%23) `91.5K 🔥` `NEW`
1. [FI现场火爆首日吃掉上万鸡腿 (The FI scene was so popular that tens of thousands of chicken legs were eaten on the first day)](https://s.weibo.com/weibo?q=%23FI%E7%8E%B0%E5%9C%BA%E7%81%AB%E7%88%86%E9%A6%96%E6%97%A5%E5%90%83%E6%8E%89%E4%B8%8A%E4%B8%87%E9%B8%A1%E8%85%BF%23) `88.4K 🔥` `NEW`
1. [拉塞尔车坏了](https://s.weibo.com/weibo?q=%23%E6%8B%89%E5%A1%9E%E5%B0%94%E8%BD%A6%E5%9D%8F%E4%BA%86%23) `87.9K 🔥` `NEW`
1. [养殖户称马肉冒充驴肉很常见](https://s.weibo.com/weibo?q=%23%E5%85%BB%E6%AE%96%E6%88%B7%E7%A7%B0%E9%A9%AC%E8%82%89%E5%86%92%E5%85%85%E9%A9%B4%E8%82%89%E5%BE%88%E5%B8%B8%E8%A7%81%23) `87.8K 🔥` `NEW`
1. [杨戬21连败](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%88%AC21%E8%BF%9E%E8%B4%A5%23) `86.2K 🔥` `NEW`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `84.7K 🔥` `NEW`
1. [有刘海漂亮 没有刘海也漂亮](https://s.weibo.com/weibo?q=%23%E6%9C%89%E5%88%98%E6%B5%B7%E6%BC%82%E4%BA%AE%20%E6%B2%A1%E6%9C%89%E5%88%98%E6%B5%B7%E4%B9%9F%E6%BC%82%E4%BA%AE%23) `83.2K 🔥` `NEW`
1. [两会结束国务院立刻行动](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%BC%9A%E7%BB%93%E6%9D%9F%E5%9B%BD%E5%8A%A1%E9%99%A2%E7%AB%8B%E5%88%BB%E8%A1%8C%E5%8A%A8%23) `82.1K 🔥` `NEW`
1. [余承东小尼点亮华为生活全景图 (Yu Chengdong and Xiaoni light up Huawei’s life panorama)](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E5%B0%8F%E5%B0%BC%E7%82%B9%E4%BA%AE%E5%8D%8E%E4%B8%BA%E7%94%9F%E6%B4%BB%E5%85%A8%E6%99%AF%E5%9B%BE%23) `553.2K 🔥` `+139%`
1. [省考](https://s.weibo.com/weibo?q=%23%E7%9C%81%E8%80%83%23) `438.6K 🔥` `+449%`
1. [中国女足直通巴西世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E8%B6%B3%E7%9B%B4%E9%80%9A%E5%B7%B4%E8%A5%BF%E4%B8%96%E7%95%8C%E6%9D%AF%23) `220.1K 🔥` `+27%`
1. [霍尔木兹封锁日本最先扛不住了 (Japan was the first to be unable to handle the Hormuz blockade.)](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E5%B0%81%E9%94%81%E6%97%A5%E6%9C%AC%E6%9C%80%E5%85%88%E6%89%9B%E4%B8%8D%E4%BD%8F%E4%BA%86%23) `219.6K 🔥` `+34%`
1. [WB对战JDG (WB vs. JDG)](https://s.weibo.com/weibo?q=%23WB%E5%AF%B9%E6%88%98JDG%23) `219.3K 🔥` `+105%`
1. [富二代为情人落户雇人假结婚](https://s.weibo.com/weibo?q=%23%E5%AF%8C%E4%BA%8C%E4%BB%A3%E4%B8%BA%E6%83%85%E4%BA%BA%E8%90%BD%E6%88%B7%E9%9B%87%E4%BA%BA%E5%81%87%E7%BB%93%E5%A9%9A%23) `219.3K 🔥` `+36%`
1. [老凤祥40克旧黄金置换后仅剩17克 (Lao Fengxiang’s 40 grams of old gold was replaced with only 17 grams left)](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%87%A4%E7%A5%A540%E5%85%8B%E6%97%A7%E9%BB%84%E9%87%91%E7%BD%AE%E6%8D%A2%E5%90%8E%E4%BB%85%E5%89%A917%E5%85%8B%23) `219.0K 🔥` `+33%`
1. [孙颖莎反手发球首秀 (Sun Yingsha's backhand serve makes her debut)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%8F%8D%E6%89%8B%E5%8F%91%E7%90%83%E9%A6%96%E7%A7%80%23) `174.4K 🔥` `+32%`
1. [格力高管被Tim追着提问](https://s.weibo.com/weibo?q=%23%E6%A0%BC%E5%8A%9B%E9%AB%98%E7%AE%A1%E8%A2%ABTim%E8%BF%BD%E7%9D%80%E6%8F%90%E9%97%AE%23) `171.4K 🔥` `+22%`
1. [央视315晚会点了4个领域 (CCTV 315 Party highlighted 4 areas)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86315%E6%99%9A%E4%BC%9A%E7%82%B9%E4%BA%864%E4%B8%AA%E9%A2%86%E5%9F%9F%23) `820.4K 🔥`
1. [韩军称朝鲜发射10余枚弹道导弹](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%86%9B%E7%A7%B0%E6%9C%9D%E9%B2%9C%E5%8F%91%E5%B0%8410%E4%BD%99%E6%9E%9A%E5%BC%B9%E9%81%93%E5%AF%BC%E5%BC%B9%23) `478.8K 🔥`
1. [爸爸给被丢弃厕所女儿准备金手镯](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E7%BB%99%E8%A2%AB%E4%B8%A2%E5%BC%83%E5%8E%95%E6%89%80%E5%A5%B3%E5%84%BF%E5%87%86%E5%A4%87%E9%87%91%E6%89%8B%E9%95%AF%23) `434.6K 🔥`
1. [王鹤棣新歌歌词 (Wang Hedi's new song lyrics)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%96%B0%E6%AD%8C%E6%AD%8C%E8%AF%8D%23) `253.1K 🔥`
1. [马思纯发文](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%80%9D%E7%BA%AF%E5%8F%91%E6%96%87%23) `188.8K 🔥`
1. [饭馆用的塑封碗筷脏到你想吐](https://s.weibo.com/weibo?q=%23%E9%A5%AD%E9%A6%86%E7%94%A8%E7%9A%84%E5%A1%91%E5%B0%81%E7%A2%97%E7%AD%B7%E8%84%8F%E5%88%B0%E4%BD%A0%E6%83%B3%E5%90%90%23) `158.9K 🔥`
1. [谢征没有言正帅 谁上班谁知道](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%BE%81%E6%B2%A1%E6%9C%89%E8%A8%80%E6%AD%A3%E5%B8%85%20%E8%B0%81%E4%B8%8A%E7%8F%AD%E8%B0%81%E7%9F%A5%E9%81%93%23) `155.4K 🔥`
1. [关晓彤程潇F1观赛造型](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E7%A8%8B%E6%BD%87F1%E8%A7%82%E8%B5%9B%E9%80%A0%E5%9E%8B%23) `153.3K 🔥`
1. [生理性讨厌是藏不住的](https://s.weibo.com/weibo?q=%23%E7%94%9F%E7%90%86%E6%80%A7%E8%AE%A8%E5%8E%8C%E6%98%AF%E8%97%8F%E4%B8%8D%E4%BD%8F%E7%9A%84%23) `146.7K 🔥`
1. [男子买皮卡收到超大老头乐愁坏妻子](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B9%B0%E7%9A%AE%E5%8D%A1%E6%94%B6%E5%88%B0%E8%B6%85%E5%A4%A7%E8%80%81%E5%A4%B4%E4%B9%90%E6%84%81%E5%9D%8F%E5%A6%BB%E5%AD%90%23) `141.7K 🔥`
1. [谢征收到了和离书 (Xie Zheng received the He Li Shu)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%BE%81%E6%94%B6%E5%88%B0%E4%BA%86%E5%92%8C%E7%A6%BB%E4%B9%A6%23) `133.4K 🔥`
1. [孙颖莎2比4蒯曼 (Sun Yingsha 2 to 4 Kuaiman)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E2%E6%AF%944%E8%92%AF%E6%9B%BC%23) `114.2K 🔥`
1. [外卖到了白鹿就这样跑步迎接](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%8D%96%E5%88%B0%E4%BA%86%E7%99%BD%E9%B9%BF%E5%B0%B1%E8%BF%99%E6%A0%B7%E8%B7%91%E6%AD%A5%E8%BF%8E%E6%8E%A5%23) `107.3K 🔥`
1. [瞿颖自曝不需要赚那么多钱](https://s.weibo.com/weibo?q=%23%E7%9E%BF%E9%A2%96%E8%87%AA%E6%9B%9D%E4%B8%8D%E9%9C%80%E8%A6%81%E8%B5%9A%E9%82%A3%E4%B9%88%E5%A4%9A%E9%92%B1%23) `106.3K 🔥`
1. [怪不得有人做饭这么好吃](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E6%9C%89%E4%BA%BA%E5%81%9A%E9%A5%AD%E8%BF%99%E4%B9%88%E5%A5%BD%E5%90%83%23) `87.8K 🔥`
1. [林依晨谈做脑部手术经历](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BE%9D%E6%99%A8%E8%B0%88%E5%81%9A%E8%84%91%E9%83%A8%E6%89%8B%E6%9C%AF%E7%BB%8F%E5%8E%86%23) `83.3K 🔥`
1. [15岁男孩嘴歪发现智齿长到眼窝里](https://s.weibo.com/weibo?q=%2315%E5%B2%81%E7%94%B7%E5%AD%A9%E5%98%B4%E6%AD%AA%E5%8F%91%E7%8E%B0%E6%99%BA%E9%BD%BF%E9%95%BF%E5%88%B0%E7%9C%BC%E7%AA%9D%E9%87%8C%23) `82.7K 🔥`
1. [第31届白玉兰奖 (The 31st Magnolia Award)](https://s.weibo.com/weibo?q=%23%E7%AC%AC31%E5%B1%8A%E7%99%BD%E7%8E%89%E5%85%B0%E5%A5%96%23) `81.8K 🔥`
1. [原神](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E7%A5%9E%23) `75.5K 🔥`
1. [315调查眼镜到底有多暴利 (315 investigates how profitable glasses are)](https://s.weibo.com/weibo?q=%23315%E8%B0%83%E6%9F%A5%E7%9C%BC%E9%95%9C%E5%88%B0%E5%BA%95%E6%9C%89%E5%A4%9A%E6%9A%B4%E5%88%A9%23) `452.8K 🔥` `-59%`
1. [云南花香蓝莓 (Yunnan floral blueberry)](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%8D%97%E8%8A%B1%E9%A6%99%E8%93%9D%E8%8E%93%23) `349.7K 🔥` `-29%`
1. [美国凭啥从委内瑞拉搬走1亿美元黄金](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%87%AD%E5%95%A5%E4%BB%8E%E5%A7%94%E5%86%85%E7%91%9E%E6%8B%89%E6%90%AC%E8%B5%B01%E4%BA%BF%E7%BE%8E%E5%85%83%E9%BB%84%E9%87%91%23) `104.9K 🔥` `-33%`
1. [王一博给品牌发title (Wang Yibo sends a title to the brand)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%BB%99%E5%93%81%E7%89%8C%E5%8F%91title%23) `99.2K 🔥` `-36%`
1. [田曦薇张凌赫经纪人依旧纯恨中 (Tian Xiwei, Zhang Linghe’s manager is still in pure hatred)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%BB%8F%E7%BA%AA%E4%BA%BA%E4%BE%9D%E6%97%A7%E7%BA%AF%E6%81%A8%E4%B8%AD%23) `95.5K 🔥` `-32%`
1. [蒯曼回应4比2孙颖莎](https://s.weibo.com/weibo?q=%23%E8%92%AF%E6%9B%BC%E5%9B%9E%E5%BA%944%E6%AF%942%E5%AD%99%E9%A2%96%E8%8E%8E%23) `88.4K 🔥` `-32%`
1. [赵丽颖已经三提白玉兰了](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%B7%B2%E7%BB%8F%E4%B8%89%E6%8F%90%E7%99%BD%E7%8E%89%E5%85%B0%E4%BA%86%23) `77.2K 🔥` `-25%`

Updated at 2026-03-14 17:03:57

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
