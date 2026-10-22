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

1. [被蜱虫咬一口从此不能吃肉](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E8%9C%B1%E8%99%AB%E5%92%AC%E4%B8%80%E5%8F%A3%E4%BB%8E%E6%AD%A4%E4%B8%8D%E8%83%BD%E5%90%83%E8%82%89%23) `1.1M 🔥` `NEW`
1. [杨瀚森第五位NBA得分破百纯血中国人](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%80%9A%E6%A3%AE%E7%AC%AC%E4%BA%94%E4%BD%8DNBA%E5%BE%97%E5%88%86%E7%A0%B4%E7%99%BE%E7%BA%AF%E8%A1%80%E4%B8%AD%E5%9B%BD%E4%BA%BA%23) `775.3K 🔥` `NEW`
1. [在新长征路上阔步前行](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E6%96%B0%E9%95%BF%E5%BE%81%E8%B7%AF%E4%B8%8A%E9%98%94%E6%AD%A5%E5%89%8D%E8%A1%8C%23) `705.3K 🔥` `NEW`
1. [张萌后悔找马天宇上节目](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%90%8C%E5%90%8E%E6%82%94%E6%89%BE%E9%A9%AC%E5%A4%A9%E5%AE%87%E4%B8%8A%E8%8A%82%E7%9B%AE%23) `703.4K 🔥` `NEW`
1. [问界事故车速数据为何有差异](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8C%E4%BA%8B%E6%95%85%E8%BD%A6%E9%80%9F%E6%95%B0%E6%8D%AE%E4%B8%BA%E4%BD%95%E6%9C%89%E5%B7%AE%E5%BC%82%23) `702.0K 🔥` `NEW`
1. [马嘉祺艾米 偏偏宠爱](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E8%89%BE%E7%B1%B3%20%E5%81%8F%E5%81%8F%E5%AE%A0%E7%88%B1%23) `699.6K 🔥` `NEW`
1. [爷爷不泡茶品牌代言人李昀锐](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E4%B8%8D%E6%B3%A1%E8%8C%B6%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%E6%9D%8E%E6%98%80%E9%94%90%23) `698.6K 🔥` `NEW`
1. [松岛辉空0比3朴奎炫](https://s.weibo.com/weibo?q=%23%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA0%E6%AF%943%E6%9C%B4%E5%A5%8E%E7%82%AB%23) `696.4K 🔥` `NEW`
1. [麻六记位列阿宽食品第一大欠款方](https://s.weibo.com/weibo?q=%23%E9%BA%BB%E5%85%AD%E8%AE%B0%E4%BD%8D%E5%88%97%E9%98%BF%E5%AE%BD%E9%A3%9F%E5%93%81%E7%AC%AC%E4%B8%80%E5%A4%A7%E6%AC%A0%E6%AC%BE%E6%96%B9%23) `691.2K 🔥` `NEW`
1. [北京市副市长夏林茂被查](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%B8%82%E5%89%AF%E5%B8%82%E9%95%BF%E5%A4%8F%E6%9E%97%E8%8C%82%E8%A2%AB%E6%9F%A5%23) `688.3K 🔥` `NEW`
1. [国乒男团3比1中国台北](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A23%E6%AF%941%E4%B8%AD%E5%9B%BD%E5%8F%B0%E5%8C%97%23) `683.0K 🔥` `NEW`
1. [马天宇一家把张萌联系方式删了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E4%B8%80%E5%AE%B6%E6%8A%8A%E5%BC%A0%E8%90%8C%E8%81%94%E7%B3%BB%E6%96%B9%E5%BC%8F%E5%88%A0%E4%BA%86%23) `678.8K 🔥` `NEW`
1. [孙坚一边拍戏一边还债](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%9D%9A%E4%B8%80%E8%BE%B9%E6%8B%8D%E6%88%8F%E4%B8%80%E8%BE%B9%E8%BF%98%E5%80%BA%23) `671.7K 🔥` `NEW`
1. [黄婷婷 李艺彤](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A9%B7%E5%A9%B7%20%E6%9D%8E%E8%89%BA%E5%BD%A4%23) `671.1K 🔥` `NEW`
1. [姜东秀11比0张本智和](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E4%B8%9C%E7%A7%8011%E6%AF%940%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `638.6K 🔥` `NEW`
1. [贾乃亮从早播到晚](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E4%B9%83%E4%BA%AE%E4%BB%8E%E6%97%A9%E6%92%AD%E5%88%B0%E6%99%9A%23) `458.9K 🔥` `NEW`
1. [山姆紧急下架牡蛎精胶囊](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E7%B4%A7%E6%80%A5%E4%B8%8B%E6%9E%B6%E7%89%A1%E8%9B%8E%E7%B2%BE%E8%83%B6%E5%9B%8A%23) `363.6K 🔥` `NEW`
1. [BigHit回应崔秀彬事件](https://s.weibo.com/weibo?q=%23BigHit%E5%9B%9E%E5%BA%94%E5%B4%94%E7%A7%80%E5%BD%AC%E4%BA%8B%E4%BB%B6%23) `361.0K 🔥` `NEW`
1. [小城良方辟谣刘铮亮涂美甲](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E8%BE%9F%E8%B0%A3%E5%88%98%E9%93%AE%E4%BA%AE%E6%B6%82%E7%BE%8E%E7%94%B2%23) `339.4K 🔥` `NEW`
1. [专家称A股现在是黎明前的黑暗](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E7%A7%B0A%E8%82%A1%E7%8E%B0%E5%9C%A8%E6%98%AF%E9%BB%8E%E6%98%8E%E5%89%8D%E7%9A%84%E9%BB%91%E6%9A%97%23) `305.6K 🔥` `NEW`
1. [感觉黄婷婷和李艺彤不会和好了](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E9%BB%84%E5%A9%B7%E5%A9%B7%E5%92%8C%E6%9D%8E%E8%89%BA%E5%BD%A4%E4%B8%8D%E4%BC%9A%E5%92%8C%E5%A5%BD%E4%BA%86%23) `301.6K 🔥` `NEW`
1. [13岁男孩被同学打致重伤父亲发声](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E7%94%B7%E5%AD%A9%E8%A2%AB%E5%90%8C%E5%AD%A6%E6%89%93%E8%87%B4%E9%87%8D%E4%BC%A4%E7%88%B6%E4%BA%B2%E5%8F%91%E5%A3%B0%23) `298.1K 🔥` `NEW`
1. [云合](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%90%88%23) `295.2K 🔥` `NEW`
1. [美甲医疗剧](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%94%B2%E5%8C%BB%E7%96%97%E5%89%A7%23) `295.0K 🔥` `NEW`
1. [iPhoneDuo 适配](https://s.weibo.com/weibo?q=%23iPhoneDuo%20%E9%80%82%E9%85%8D%23) `294.2K 🔥` `NEW`
1. [手握10篇SCI医学生盲猜病情引争议](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%8F%A110%E7%AF%87SCI%E5%8C%BB%E5%AD%A6%E7%94%9F%E7%9B%B2%E7%8C%9C%E7%97%85%E6%83%85%E5%BC%95%E4%BA%89%E8%AE%AE%23) `293.7K 🔥` `NEW`
1. [iPhoneDuo微信不适配](https://s.weibo.com/weibo?q=%23iPhoneDuo%E5%BE%AE%E4%BF%A1%E4%B8%8D%E9%80%82%E9%85%8D%23) `292.6K 🔥` `NEW`
1. [前女友曝陈天润语音](https://s.weibo.com/weibo?q=%23%E5%89%8D%E5%A5%B3%E5%8F%8B%E6%9B%9D%E9%99%88%E5%A4%A9%E6%B6%A6%E8%AF%AD%E9%9F%B3%23) `291.8K 🔥` `NEW`
1. [微信回应iPhoneDuo不适配](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E5%9B%9E%E5%BA%94iPhoneDuo%E4%B8%8D%E9%80%82%E9%85%8D%23) `291.5K 🔥` `NEW`
1. [感觉这么多年鸡蛋白吃了](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E8%BF%99%E4%B9%88%E5%A4%9A%E5%B9%B4%E9%B8%A1%E8%9B%8B%E7%99%BD%E5%90%83%E4%BA%86%23) `270.3K 🔥` `NEW`
1. [HLE婉拒TES后与iG交换队服](https://s.weibo.com/weibo?q=%23HLE%E5%A9%89%E6%8B%92TES%E5%90%8E%E4%B8%8EiG%E4%BA%A4%E6%8D%A2%E9%98%9F%E6%9C%8D%23) `257.0K 🔥` `NEW`
1. [我算是知道为什么古代重文轻武了](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%AE%97%E6%98%AF%E7%9F%A5%E9%81%93%E4%B8%BA%E4%BB%80%E4%B9%88%E5%8F%A4%E4%BB%A3%E9%87%8D%E6%96%87%E8%BD%BB%E6%AD%A6%E4%BA%86%23) `238.4K 🔥` `NEW`
1. [压力给到刘冲](https://s.weibo.com/weibo?q=%23%E5%8E%8B%E5%8A%9B%E7%BB%99%E5%88%B0%E5%88%98%E5%86%B2%23) `237.9K 🔥` `NEW`
1. [曝VOGUE红毯四大流量花](https://s.weibo.com/weibo?q=%23%E6%9B%9DVOGUE%E7%BA%A2%E6%AF%AF%E5%9B%9B%E5%A4%A7%E6%B5%81%E9%87%8F%E8%8A%B1%23) `231.5K 🔥` `NEW`
1. [红果开始忘本](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E5%BC%80%E5%A7%8B%E5%BF%98%E6%9C%AC%23) `229.8K 🔥` `NEW`
1. [虞书欣十年前演青蛇的样子](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%8D%81%E5%B9%B4%E5%89%8D%E6%BC%94%E9%9D%92%E8%9B%87%E7%9A%84%E6%A0%B7%E5%AD%90%23) `227.2K 🔥` `NEW`
1. [成毅天地剑心首日热度8181](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E5%A4%A9%E5%9C%B0%E5%89%91%E5%BF%83%E9%A6%96%E6%97%A5%E7%83%AD%E5%BA%A68181%23) `224.2K 🔥` `NEW`
1. [问界客服称起火车辆车速是后台数据](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8C%E5%AE%A2%E6%9C%8D%E7%A7%B0%E8%B5%B7%E7%81%AB%E8%BD%A6%E8%BE%86%E8%BD%A6%E9%80%9F%E6%98%AF%E5%90%8E%E5%8F%B0%E6%95%B0%E6%8D%AE%23) `215.2K 🔥` `NEW`
1. [演唱会黄牛一个月获利100万](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%94%B1%E4%BC%9A%E9%BB%84%E7%89%9B%E4%B8%80%E4%B8%AA%E6%9C%88%E8%8E%B7%E5%88%A9100%E4%B8%87%23) `205.7K 🔥` `NEW`
1. [冷门邪门不如省门](https://s.weibo.com/weibo?q=%23%E5%86%B7%E9%97%A8%E9%82%AA%E9%97%A8%E4%B8%8D%E5%A6%82%E7%9C%81%E9%97%A8%23) `201.5K 🔥` `NEW`
1. [爷爷不泡茶100万份奶茶免单](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E4%B8%8D%E6%B3%A1%E8%8C%B6100%E4%B8%87%E4%BB%BD%E5%A5%B6%E8%8C%B6%E5%85%8D%E5%8D%95%23) `199.6K 🔥` `NEW`
1. [超九成教师举报经查不属实](https://s.weibo.com/weibo?q=%23%E8%B6%85%E4%B9%9D%E6%88%90%E6%95%99%E5%B8%88%E4%B8%BE%E6%8A%A5%E7%BB%8F%E6%9F%A5%E4%B8%8D%E5%B1%9E%E5%AE%9E%23) `196.7K 🔥` `NEW`
1. [经纪公司回应崔秀彬照片事件](https://s.weibo.com/weibo?q=%23%E7%BB%8F%E7%BA%AA%E5%85%AC%E5%8F%B8%E5%9B%9E%E5%BA%94%E5%B4%94%E7%A7%80%E5%BD%AC%E7%85%A7%E7%89%87%E4%BA%8B%E4%BB%B6%23) `196.2K 🔥` `NEW`
1. [陈都灵生日幕后纪实](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E7%94%9F%E6%97%A5%E5%B9%95%E5%90%8E%E7%BA%AA%E5%AE%9E%23) `195.4K 🔥` `NEW`
1. [患者手术26年后死亡获赔151万](https://s.weibo.com/weibo?q=%23%E6%82%A3%E8%80%85%E6%89%8B%E6%9C%AF26%E5%B9%B4%E5%90%8E%E6%AD%BB%E4%BA%A1%E8%8E%B7%E8%B5%94151%E4%B8%87%23) `195.3K 🔥` `NEW`
1. [小城良方发文辟谣](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E5%8F%91%E6%96%87%E8%BE%9F%E8%B0%A3%23) `179.8K 🔥` `NEW`
1. [日本乒乓男团输得太惨了](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%B9%92%E4%B9%93%E7%94%B7%E5%9B%A2%E8%BE%93%E5%BE%97%E5%A4%AA%E6%83%A8%E4%BA%86%23) `174.5K 🔥` `NEW`
1. [sakee称曾被非法拘禁](https://s.weibo.com/weibo?q=%23sakee%E7%A7%B0%E6%9B%BE%E8%A2%AB%E9%9D%9E%E6%B3%95%E6%8B%98%E7%A6%81%23) `166.9K 🔥` `NEW`
1. [张婉婷回应仍和宋宁峰一起生活](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%89%E5%A9%B7%E5%9B%9E%E5%BA%94%E4%BB%8D%E5%92%8C%E5%AE%8B%E5%AE%81%E5%B3%B0%E4%B8%80%E8%B5%B7%E7%94%9F%E6%B4%BB%23) `155.7K 🔥` `NEW`

Updated at 2026-10-22 16:45:26

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
