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

1. [十五五规划纲要全文 (Full text of the 15th Five-Year Plan Outline)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E8%A7%84%E5%88%92%E7%BA%B2%E8%A6%81%E5%85%A8%E6%96%87%23) `821.7K 🔥` `NEW`
1. [以色列总统称特朗普攻击国家主权](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%80%BB%E7%BB%9F%E7%A7%B0%E7%89%B9%E6%9C%97%E6%99%AE%E6%94%BB%E5%87%BB%E5%9B%BD%E5%AE%B6%E4%B8%BB%E6%9D%83%23) `395.1K 🔥` `NEW`
1. [西安不倒翁小姐姐离职丈夫回应](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E4%B8%8D%E5%80%92%E7%BF%81%E5%B0%8F%E5%A7%90%E5%A7%90%E7%A6%BB%E8%81%8C%E4%B8%88%E5%A4%AB%E5%9B%9E%E5%BA%94%23) `217.7K 🔥` `NEW`
1. [呼啸山庄](https://s.weibo.com/weibo?q=%23%E5%91%BC%E5%95%B8%E5%B1%B1%E5%BA%84%23) `155.1K 🔥` `NEW`
1. [P图许愿网友被周云杰请到了现场](https://s.weibo.com/weibo?q=%23P%E5%9B%BE%E8%AE%B8%E6%84%BF%E7%BD%91%E5%8F%8B%E8%A2%AB%E5%91%A8%E4%BA%91%E6%9D%B0%E8%AF%B7%E5%88%B0%E4%BA%86%E7%8E%B0%E5%9C%BA%23) `150.9K 🔥` `NEW`
1. [周云杰出道一周年谈心得](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%BA%91%E6%9D%B0%E5%87%BA%E9%81%93%E4%B8%80%E5%91%A8%E5%B9%B4%E8%B0%88%E5%BF%83%E5%BE%97%23) `150.7K 🔥` `NEW`
1. [女子花12万做试管被带到民房手术](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%8A%B112%E4%B8%87%E5%81%9A%E8%AF%95%E7%AE%A1%E8%A2%AB%E5%B8%A6%E5%88%B0%E6%B0%91%E6%88%BF%E6%89%8B%E6%9C%AF%23) `149.7K 🔥` `NEW`
1. [曝虞书欣何与确定二搭](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%BD%95%E4%B8%8E%E7%A1%AE%E5%AE%9A%E4%BA%8C%E6%90%AD%23) `146.6K 🔥` `NEW`
1. [王橹杰投篮](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%8A%95%E7%AF%AE%23) `133.5K 🔥` `NEW`
1. [王一博赛车活动预热](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%B5%9B%E8%BD%A6%E6%B4%BB%E5%8A%A8%E9%A2%84%E7%83%AD%23) `131.2K 🔥` `NEW`
1. [Hero对战LGDNBW (Hero vs. LGDNBW)](https://s.weibo.com/weibo?q=%23Hero%E5%AF%B9%E6%88%98LGDNBW%23) `111.5K 🔥` `NEW`
1. [穿了二十厘米勉强一米七](https://s.weibo.com/weibo?q=%23%E7%A9%BF%E4%BA%86%E4%BA%8C%E5%8D%81%E5%8E%98%E7%B1%B3%E5%8B%89%E5%BC%BA%E4%B8%80%E7%B1%B3%E4%B8%83%23) `110.2K 🔥` `NEW`
1. [李鹤来说想当演员](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%B9%A4%E6%9D%A5%E8%AF%B4%E6%83%B3%E5%BD%93%E6%BC%94%E5%91%98%23) `103.4K 🔥` `NEW`
1. [爱情公寓是霍建华推荐娄艺潇演的](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E6%98%AF%E9%9C%8D%E5%BB%BA%E5%8D%8E%E6%8E%A8%E8%8D%90%E5%A8%84%E8%89%BA%E6%BD%87%E6%BC%94%E7%9A%84%23) `102.9K 🔥` `NEW`
1. [我和我妈被拍成电影了](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%92%8C%E6%88%91%E5%A6%88%E8%A2%AB%E6%8B%8D%E6%88%90%E7%94%B5%E5%BD%B1%E4%BA%86%23) `102.6K 🔥` `NEW`
1. [宋祖儿金树林红毯造型](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%96%E5%84%BF%E9%87%91%E6%A0%91%E6%9E%97%E7%BA%A2%E6%AF%AF%E9%80%A0%E5%9E%8B%23) `102.2K 🔥` `NEW`
1. [护肝神药槲皮素没有护肺作用](https://s.weibo.com/weibo?q=%23%E6%8A%A4%E8%82%9D%E7%A5%9E%E8%8D%AF%E6%A7%B2%E7%9A%AE%E7%B4%A0%E6%B2%A1%E6%9C%89%E6%8A%A4%E8%82%BA%E4%BD%9C%E7%94%A8%23) `101.6K 🔥` `NEW`
1. [4AM三局两鸡](https://s.weibo.com/weibo?q=%234AM%E4%B8%89%E5%B1%80%E4%B8%A4%E9%B8%A1%23) `101.6K 🔥` `NEW`
1. [过期9年文具仍在售卖](https://s.weibo.com/weibo?q=%23%E8%BF%87%E6%9C%9F9%E5%B9%B4%E6%96%87%E5%85%B7%E4%BB%8D%E5%9C%A8%E5%94%AE%E5%8D%96%23) `91.1K 🔥` `NEW`
1. [胖东来](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%23) `89.8K 🔥` `NEW`
1. [成长最快的方式是硬着头皮上 (The fastest way to grow is to bite the bullet)](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%95%BF%E6%9C%80%E5%BF%AB%E7%9A%84%E6%96%B9%E5%BC%8F%E6%98%AF%E7%A1%AC%E7%9D%80%E5%A4%B4%E7%9A%AE%E4%B8%8A%23) `84.0K 🔥` `NEW`
1. [呼啸山庄尺度好大](https://s.weibo.com/weibo?q=%23%E5%91%BC%E5%95%B8%E5%B1%B1%E5%BA%84%E5%B0%BA%E5%BA%A6%E5%A5%BD%E5%A4%A7%23) `1.1M 🔥` `+1177%`
1. [开学了想开点就点美团外卖 (School has started. If you want to eat, order Meituan takeout.)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%AD%A6%E4%BA%86%E6%83%B3%E5%BC%80%E7%82%B9%E5%B0%B1%E7%82%B9%E7%BE%8E%E5%9B%A2%E5%A4%96%E5%8D%96%23) `563.5K 🔥` `+35%`
1. [钎九](https://s.weibo.com/weibo?q=%23%E9%92%8E%E4%B9%9D%23) `553.0K 🔥` `+589%`
1. [赵今麦范丞丞 电影](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E8%8C%83%E4%B8%9E%E4%B8%9E%20%E7%94%B5%E5%BD%B1%23) `447.9K 🔥` `+26%`
1. [多人反映贷款逾期被银行划走养老金](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%BA%BA%E5%8F%8D%E6%98%A0%E8%B4%B7%E6%AC%BE%E9%80%BE%E6%9C%9F%E8%A2%AB%E9%93%B6%E8%A1%8C%E5%88%92%E8%B5%B0%E5%85%BB%E8%80%81%E9%87%91%23) `442.8K 🔥` `+32%`
1. [2026年政府工作报告全文](https://s.weibo.com/weibo?q=%232026%E5%B9%B4%E6%94%BF%E5%BA%9C%E5%B7%A5%E4%BD%9C%E6%8A%A5%E5%91%8A%E5%85%A8%E6%96%87%23) `344.9K 🔥` `+215%`
1. [韩国外交部发声明](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%A4%96%E4%BA%A4%E9%83%A8%E5%8F%91%E5%A3%B0%E6%98%8E%23) `326.1K 🔥` `+190%`
1. [父亲回应女婴出生2天被爷爷丢弃厕所](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%A9%B4%E5%87%BA%E7%94%9F2%E5%A4%A9%E8%A2%AB%E7%88%B7%E7%88%B7%E4%B8%A2%E5%BC%83%E5%8E%95%E6%89%80%23) `314.4K 🔥` `+58%`
1. [穿prada的女王2 小时代](https://s.weibo.com/weibo?q=%23%E7%A9%BFprada%E7%9A%84%E5%A5%B3%E7%8E%8B2%20%E5%B0%8F%E6%97%B6%E4%BB%A3%23) `254.2K 🔥` `+87%`
1. [绿色低碳发展迈入法典时代 (Green and low-carbon development enters the code era)](https://s.weibo.com/weibo?q=%23%E7%BB%BF%E8%89%B2%E4%BD%8E%E7%A2%B3%E5%8F%91%E5%B1%95%E8%BF%88%E5%85%A5%E6%B3%95%E5%85%B8%E6%97%B6%E4%BB%A3%23) `648.8K 🔥`
1. [姐姐把150万元黄金当垃圾扔掉](https://s.weibo.com/weibo?q=%23%E5%A7%90%E5%A7%90%E6%8A%8A150%E4%B8%87%E5%85%83%E9%BB%84%E9%87%91%E5%BD%93%E5%9E%83%E5%9C%BE%E6%89%94%E6%8E%89%23) `369.2K 🔥`
1. [印度90岁妇人遭4蒙面男子强奸 (90-year-old Indian woman raped by 4 masked men)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A690%E5%B2%81%E5%A6%87%E4%BA%BA%E9%81%AD4%E8%92%99%E9%9D%A2%E7%94%B7%E5%AD%90%E5%BC%BA%E5%A5%B8%23) `147.5K 🔥`
1. [研究称第二次怀孕会继续重塑大脑](https://s.weibo.com/weibo?q=%23%E7%A0%94%E7%A9%B6%E7%A7%B0%E7%AC%AC%E4%BA%8C%E6%AC%A1%E6%80%80%E5%AD%95%E4%BC%9A%E7%BB%A7%E7%BB%AD%E9%87%8D%E5%A1%91%E5%A4%A7%E8%84%91%23) `146.2K 🔥`
1. [孙燕姿演唱会 (Stefanie Sun concert)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%87%95%E5%A7%BF%E6%BC%94%E5%94%B1%E4%BC%9A%23) `111.1K 🔥`
1. [樊振东可可爱爱出场](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%8F%AF%E5%8F%AF%E7%88%B1%E7%88%B1%E5%87%BA%E5%9C%BA%23) `89.7K 🔥`
1. [7000元月薪种地不到一周已招满 (Farming with a monthly salary of 7,000 yuan has been filled in less than a week)](https://s.weibo.com/weibo?q=%237000%E5%85%83%E6%9C%88%E8%96%AA%E7%A7%8D%E5%9C%B0%E4%B8%8D%E5%88%B0%E4%B8%80%E5%91%A8%E5%B7%B2%E6%8B%9B%E6%BB%A1%23) `329.2K 🔥` `-69%`
1. [王一博完全不需要翻译](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%AE%8C%E5%85%A8%E4%B8%8D%E9%9C%80%E8%A6%81%E7%BF%BB%E8%AF%91%23) `197.8K 🔥` `-28%`
1. [教师值班病逝抢救超48小时未认工伤](https://s.weibo.com/weibo?q=%23%E6%95%99%E5%B8%88%E5%80%BC%E7%8F%AD%E7%97%85%E9%80%9D%E6%8A%A2%E6%95%91%E8%B6%8548%E5%B0%8F%E6%97%B6%E6%9C%AA%E8%AE%A4%E5%B7%A5%E4%BC%A4%23) `151.7K 🔥` `-43%`
1. [张凌赫田曦薇头纱转场](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%E5%A4%B4%E7%BA%B1%E8%BD%AC%E5%9C%BA%23) `148.7K 🔥` `-48%`
1. [随元青我恨你 (Sui Yuanqing, I hate you)](https://s.weibo.com/weibo?q=%23%E9%9A%8F%E5%85%83%E9%9D%92%E6%88%91%E6%81%A8%E4%BD%A0%23) `146.6K 🔥` `-43%`
1. [逐玉 (Zhuyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `145.9K 🔥` `-26%`
1. [华为回应15599元折叠屏用3天黑屏 (Huawei responds to a 15,599 yuan folding screen with a black screen for 3 days)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%9B%9E%E5%BA%9415599%E5%85%83%E6%8A%98%E5%8F%A0%E5%B1%8F%E7%94%A83%E5%A4%A9%E9%BB%91%E5%B1%8F%23) `140.7K 🔥` `-82%`
1. [警方通报女子从行驶中出租车跳下](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%90%E4%BB%8E%E8%A1%8C%E9%A9%B6%E4%B8%AD%E5%87%BA%E7%A7%9F%E8%BD%A6%E8%B7%B3%E4%B8%8B%23) `104.2K 🔥` `-68%`
1. [教官军训期间猥亵15岁少女](https://s.weibo.com/weibo?q=%23%E6%95%99%E5%AE%98%E5%86%9B%E8%AE%AD%E6%9C%9F%E9%97%B4%E7%8C%A5%E4%BA%B515%E5%B2%81%E5%B0%91%E5%A5%B3%23) `103.8K 🔥` `-31%`
1. [张馨予因为减肥抵抗力下降](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A6%A8%E4%BA%88%E5%9B%A0%E4%B8%BA%E5%87%8F%E8%82%A5%E6%8A%B5%E6%8A%97%E5%8A%9B%E4%B8%8B%E9%99%8D%23) `103.7K 🔥` `-57%`
1. [逐玉18集太惨了](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%8918%E9%9B%86%E5%A4%AA%E6%83%A8%E4%BA%86%23) `99.8K 🔥` `-25%`
1. [李现风格大变 (Li Xian’s style changed drastically)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E9%A3%8E%E6%A0%BC%E5%A4%A7%E5%8F%98%23) `94.5K 🔥` `-37%`
1. [康婆子下线看哭了](https://s.weibo.com/weibo?q=%23%E5%BA%B7%E5%A9%86%E5%AD%90%E4%B8%8B%E7%BA%BF%E7%9C%8B%E5%93%AD%E4%BA%86%23) `90.5K 🔥` `-71%`
1. [爱奇艺股价](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E8%82%A1%E4%BB%B7%23) `87.6K 🔥` `-45%`

Updated at 2026-03-13 22:09:47

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
