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

1. [法国vs伊拉克 好大的雨 (France vs Iraq It’s raining heavily)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BDvs%E4%BC%8A%E6%8B%89%E5%85%8B%20%E5%A5%BD%E5%A4%A7%E7%9A%84%E9%9B%A8%23) `977.0K 🔥` `NEW`
1. [法国vs伊拉克下半场因雷暴天气推迟](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BDvs%E4%BC%8A%E6%8B%89%E5%85%8B%E4%B8%8B%E5%8D%8A%E5%9C%BA%E5%9B%A0%E9%9B%B7%E6%9A%B4%E5%A4%A9%E6%B0%94%E6%8E%A8%E8%BF%9F%23) `435.2K 🔥` `NEW`
1. [苏醒 预言家](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%20%E9%A2%84%E8%A8%80%E5%AE%B6%23) `186.6K 🔥` `NEW`
1. [赵本山女儿曝丈夫是悉尼大学硕士](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%9C%AC%E5%B1%B1%E5%A5%B3%E5%84%BF%E6%9B%9D%E4%B8%88%E5%A4%AB%E6%98%AF%E6%82%89%E5%B0%BC%E5%A4%A7%E5%AD%A6%E7%A1%95%E5%A3%AB%23) `83.1K 🔥` `NEW`
1. [英国首相潜在接班人是他](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E9%A6%96%E7%9B%B8%E6%BD%9C%E5%9C%A8%E6%8E%A5%E7%8F%AD%E4%BA%BA%E6%98%AF%E4%BB%96%23) `81.5K 🔥` `NEW`
1. [蓝盈莹凌晨三点的阿那亚](https://s.weibo.com/weibo?q=%23%E8%93%9D%E7%9B%88%E8%8E%B9%E5%87%8C%E6%99%A8%E4%B8%89%E7%82%B9%E7%9A%84%E9%98%BF%E9%82%A3%E4%BA%9A%23) `79.1K 🔥` `NEW`
1. [法国vs伊拉克比赛下半场推迟](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BDvs%E4%BC%8A%E6%8B%89%E5%85%8B%E6%AF%94%E8%B5%9B%E4%B8%8B%E5%8D%8A%E5%9C%BA%E6%8E%A8%E8%BF%9F%23) `56.3K 🔥` `NEW`
1. [存储巨头炸裂财报将来袭](https://s.weibo.com/weibo?q=%23%E5%AD%98%E5%82%A8%E5%B7%A8%E5%A4%B4%E7%82%B8%E8%A3%82%E8%B4%A2%E6%8A%A5%E5%B0%86%E6%9D%A5%E8%A2%AD%23) `56.3K 🔥` `NEW`
1. [姆巴佩左脚世界波 (Mbappe's left foot waves the world)](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%B7%A6%E8%84%9A%E4%B8%96%E7%95%8C%E6%B3%A2%23) `4.5M 🔥` `+1438%`
1. [端午假期国内出游1.24亿人次](https://s.weibo.com/weibo?q=%23%E7%AB%AF%E5%8D%88%E5%81%87%E6%9C%9F%E5%9B%BD%E5%86%85%E5%87%BA%E6%B8%B81.24%E4%BA%BF%E4%BA%BA%E6%AC%A1%23) `868.6K 🔥` `+249%`
1. [阿根廷2比0奥地利 (Argentina 2-0 Austria)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B72%E6%AF%940%E5%A5%A5%E5%9C%B0%E5%88%A9%23) `796.4K 🔥` `+86%`
1. [李金铭农村综艺那家人已败诉 (Li Jinming’s rural variety show’s family has lost the lawsuit)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%87%91%E9%93%AD%E5%86%9C%E6%9D%91%E7%BB%BC%E8%89%BA%E9%82%A3%E5%AE%B6%E4%BA%BA%E5%B7%B2%E8%B4%A5%E8%AF%89%23) `731.2K 🔥` `+197%`
1. [逐玉导演 战争戏不需要逻辑 (Director Zhuyu: War scenes don’t require logic)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%AF%BC%E6%BC%94%20%E6%88%98%E4%BA%89%E6%88%8F%E4%B8%8D%E9%9C%80%E8%A6%81%E9%80%BB%E8%BE%91%23) `428.8K 🔥` `+271%`
1. [法国vs伊拉克](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BDvs%E4%BC%8A%E6%8B%89%E5%85%8B%23) `363.6K 🔥` `+51%`
1. [阿根廷失点 (Argentina lost points)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%A4%B1%E7%82%B9%23) `269.7K 🔥` `+262%`
1. [学霸真的是一种很神奇的生物](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E9%9C%B8%E7%9C%9F%E7%9A%84%E6%98%AF%E4%B8%80%E7%A7%8D%E5%BE%88%E7%A5%9E%E5%A5%87%E7%9A%84%E7%94%9F%E7%89%A9%23) `187.2K 🔥` `+348%`
1. [恋与深空一直在说对不起 (Love and Deep Sky keep saying sorry)](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E4%B8%80%E7%9B%B4%E5%9C%A8%E8%AF%B4%E5%AF%B9%E4%B8%8D%E8%B5%B7%23) `186.3K 🔥` `+175%`
1. [女子暴雨躲文旅局门口遭保安驱赶 (Woman hid in front of Cultural Tourism Bureau during heavy rain but was chased away by security guards)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%9A%B4%E9%9B%A8%E8%BA%B2%E6%96%87%E6%97%85%E5%B1%80%E9%97%A8%E5%8F%A3%E9%81%AD%E4%BF%9D%E5%AE%89%E9%A9%B1%E8%B5%B6%23) `185.4K 🔥` `+177%`
1. [医生我有点不舒服我要出院](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E6%88%91%E6%9C%89%E7%82%B9%E4%B8%8D%E8%88%92%E6%9C%8D%E6%88%91%E8%A6%81%E5%87%BA%E9%99%A2%23) `184.6K 🔥` `+65%`
1. [官方通报基层教师周末参与巡查](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%9F%BA%E5%B1%82%E6%95%99%E5%B8%88%E5%91%A8%E6%9C%AB%E5%8F%82%E4%B8%8E%E5%B7%A1%E6%9F%A5%23) `177.2K 🔥` `+417%`
1. [物理AI第一股上市首日高开302%](https://s.weibo.com/weibo?q=%23%E7%89%A9%E7%90%86AI%E7%AC%AC%E4%B8%80%E8%82%A1%E4%B8%8A%E5%B8%82%E9%A6%96%E6%97%A5%E9%AB%98%E5%BC%80302%25%23) `153.3K 🔥` `+253%`
1. [律师谈李金铭十年前农村综艺事件](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E8%B0%88%E6%9D%8E%E9%87%91%E9%93%AD%E5%8D%81%E5%B9%B4%E5%89%8D%E5%86%9C%E6%9D%91%E7%BB%BC%E8%89%BA%E4%BA%8B%E4%BB%B6%23) `153.1K 🔥` `+234%`
1. [香港机场黄金劫案4人潜逃至内地 (Four people involved in the Hong Kong Airport gold robbery absconded to the mainland)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E6%9C%BA%E5%9C%BA%E9%BB%84%E9%87%91%E5%8A%AB%E6%A1%884%E4%BA%BA%E6%BD%9C%E9%80%83%E8%87%B3%E5%86%85%E5%9C%B0%23) `145.7K 🔥` `+337%`
1. [白玉兰 (magnolia)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%23) `142.2K 🔥` `+137%`
1. [推特崩了](https://s.weibo.com/weibo?q=%23%E6%8E%A8%E7%89%B9%E5%B4%A9%E4%BA%86%23) `140.2K 🔥` `+321%`
1. [敖尹 丑 (Ao Yin ugly)](https://s.weibo.com/weibo?q=%23%E6%95%96%E5%B0%B9%20%E4%B8%91%23) `140.0K 🔥` `+206%`
1. [江阴文旅局回应市民躲雨被驱赶](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E9%98%B4%E6%96%87%E6%97%85%E5%B1%80%E5%9B%9E%E5%BA%94%E5%B8%82%E6%B0%91%E8%BA%B2%E9%9B%A8%E8%A2%AB%E9%A9%B1%E8%B5%B6%23) `139.1K 🔥` `+208%`
1. [女生称试衣被拉开帘子裸露遭围观 (A girl said she was exposed while trying on clothes when the curtain was pulled open and she was watched by onlookers)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E7%A7%B0%E8%AF%95%E8%A1%A3%E8%A2%AB%E6%8B%89%E5%BC%80%E5%B8%98%E5%AD%90%E8%A3%B8%E9%9C%B2%E9%81%AD%E5%9B%B4%E8%A7%82%23) `128.7K 🔥` `+255%`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `118.5K 🔥` `+83%`
1. [建议大家把消极口癖戒掉](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E6%8A%8A%E6%B6%88%E6%9E%81%E5%8F%A3%E7%99%96%E6%88%92%E6%8E%89%23) `98.6K 🔥` `+149%`
1. [广德车祸司机被刑拘 (Driver in Guangde car accident detained)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%BE%B7%E8%BD%A6%E7%A5%B8%E5%8F%B8%E6%9C%BA%E8%A2%AB%E5%88%91%E6%8B%98%23) `87.7K 🔥` `+63%`
1. [阿根廷vs奥地利](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7vs%E5%A5%A5%E5%9C%B0%E5%88%A9%23) `81.3K 🔥` `+31%`
1. [轻断食一天喝了6斤牛奶](https://s.weibo.com/weibo?q=%23%E8%BD%BB%E6%96%AD%E9%A3%9F%E4%B8%80%E5%A4%A9%E5%96%9D%E4%BA%866%E6%96%A4%E7%89%9B%E5%A5%B6%23) `79.4K 🔥` `+138%`
1. [29岁离世女主持确诊卵巢癌仅8个月 (The 29-year-old female host who passed away was diagnosed with ovarian cancer only 8 months ago)](https://s.weibo.com/weibo?q=%2329%E5%B2%81%E7%A6%BB%E4%B8%96%E5%A5%B3%E4%B8%BB%E6%8C%81%E7%A1%AE%E8%AF%8A%E5%8D%B5%E5%B7%A2%E7%99%8C%E4%BB%858%E4%B8%AA%E6%9C%88%23) `75.7K 🔥` `+85%`
1. [姆巴佩法国队百场里程碑](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%B3%95%E5%9B%BD%E9%98%9F%E7%99%BE%E5%9C%BA%E9%87%8C%E7%A8%8B%E7%A2%91%23) `70.0K 🔥` `+110%`
1. [安徽广德车祸受害者邻居发声](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%BE%BD%E5%B9%BF%E5%BE%B7%E8%BD%A6%E7%A5%B8%E5%8F%97%E5%AE%B3%E8%80%85%E9%82%BB%E5%B1%85%E5%8F%91%E5%A3%B0%23) `67.3K 🔥` `+29%`
1. [恋与深空敖尹公开](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E6%95%96%E5%B0%B9%E5%85%AC%E5%BC%80%23) `61.2K 🔥` `+65%`
1. [儿子称已放弃遗产拒还房贷获法院支持](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E7%A7%B0%E5%B7%B2%E6%94%BE%E5%BC%83%E9%81%97%E4%BA%A7%E6%8B%92%E8%BF%98%E6%88%BF%E8%B4%B7%E8%8E%B7%E6%B3%95%E9%99%A2%E6%94%AF%E6%8C%81%23) `59.3K 🔥` `+59%`
1. [恋与深空回应](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%9B%9E%E5%BA%94%23) `57.3K 🔥` `+32%`
1. [广德公安通报交通事故](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%BE%B7%E5%85%AC%E5%AE%89%E9%80%9A%E6%8A%A5%E4%BA%A4%E9%80%9A%E4%BA%8B%E6%95%85%23) `56.3K 🔥` `+69%`
1. [敖尹 敖隐](https://s.weibo.com/weibo?q=%23%E6%95%96%E5%B0%B9%20%E6%95%96%E9%9A%90%23) `56.3K 🔥` `+33%`
1. [曾沛慈黄灿灿友情 (Zeng Peici's Huang Cancan Friendship)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E9%BB%84%E7%81%BF%E7%81%BF%E5%8F%8B%E6%83%85%23) `56.3K 🔥` `+69%`
1. [女子称44岁在阿里工作22年被裁](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B044%E5%B2%81%E5%9C%A8%E9%98%BF%E9%87%8C%E5%B7%A5%E4%BD%9C22%E5%B9%B4%E8%A2%AB%E8%A3%81%23) `56.3K 🔥` `+69%`
1. [马宁我想你了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%81%E6%88%91%E6%83%B3%E4%BD%A0%E4%BA%86%23) `73.3K 🔥`
1. [阿根廷提前一轮晋级32强](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E6%8F%90%E5%89%8D%E4%B8%80%E8%BD%AE%E6%99%8B%E7%BA%A732%E5%BC%BA%23) `69.7K 🔥`
1. [周冬雨说导演老说词不用背](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%86%AC%E9%9B%A8%E8%AF%B4%E5%AF%BC%E6%BC%94%E8%80%81%E8%AF%B4%E8%AF%8D%E4%B8%8D%E7%94%A8%E8%83%8C%23) `61.0K 🔥`
1. [孙怡到底买了多少顶老孙帽](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E5%88%B0%E5%BA%95%E4%B9%B0%E4%BA%86%E5%A4%9A%E5%B0%91%E9%A1%B6%E8%80%81%E5%AD%99%E5%B8%BD%23) `56.8K 🔥`
1. [丞磊沈羽洁翻面吻 (Cheng Lei and Shen Yujie turned over and kissed)](https://s.weibo.com/weibo?q=%23%E4%B8%9E%E7%A3%8A%E6%B2%88%E7%BE%BD%E6%B4%81%E7%BF%BB%E9%9D%A2%E5%90%BB%23) `56.3K 🔥`
1. [大马丁神扑救](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%A9%AC%E4%B8%81%E7%A5%9E%E6%89%91%E6%95%91%23) `64.4K 🔥` `-46%`

Updated at 2026-06-23 07:08:16

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
