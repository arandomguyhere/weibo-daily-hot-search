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

1. [今年乌镇峰会首次向社会开放预约](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E4%B9%8C%E9%95%87%E5%B3%B0%E4%BC%9A%E9%A6%96%E6%AC%A1%E5%90%91%E7%A4%BE%E4%BC%9A%E5%BC%80%E6%94%BE%E9%A2%84%E7%BA%A6%23) `384.3K 🔥` `NEW`
1. [孙颖莎夺冠后比1庆祝](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%A4%BA%E5%86%A0%E5%90%8E%E6%AF%941%E5%BA%86%E7%A5%9D%23) `339.8K 🔥` `NEW`
1. [张禹珍蒙彼利埃站冠军](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%A6%B9%E7%8F%8D%E8%92%99%E5%BD%BC%E5%88%A9%E5%9F%83%E7%AB%99%E5%86%A0%E5%86%9B%23) `326.6K 🔥` `NEW`
1. [原来冬天不是穿的越多越暖和](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%86%AC%E5%A4%A9%E4%B8%8D%E6%98%AF%E7%A9%BF%E7%9A%84%E8%B6%8A%E5%A4%9A%E8%B6%8A%E6%9A%96%E5%92%8C%23) `98.8K 🔥` `NEW`
1. [你的手机可能在监听你](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E6%89%8B%E6%9C%BA%E5%8F%AF%E8%83%BD%E5%9C%A8%E7%9B%91%E5%90%AC%E4%BD%A0%23) `67.8K 🔥` `NEW`
1. [中国U17女足1比2巴西](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BDU17%E5%A5%B3%E8%B6%B31%E6%AF%942%E5%B7%B4%E8%A5%BF%23) `66.9K 🔥` `NEW`
1. [日本多人聚会时使用纳粹标志](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A4%9A%E4%BA%BA%E8%81%9A%E4%BC%9A%E6%97%B6%E4%BD%BF%E7%94%A8%E7%BA%B3%E7%B2%B9%E6%A0%87%E5%BF%97%23) `61.0K 🔥` `NEW`
1. [利物浦0比1阿森纳](https://s.weibo.com/weibo?q=%23%E5%88%A9%E7%89%A9%E6%B5%A60%E6%AF%941%E9%98%BF%E6%A3%AE%E7%BA%B3%23) `58.5K 🔥` `NEW`
1. [登顶全国销冠保时捷女销售发声](https://s.weibo.com/weibo?q=%23%E7%99%BB%E9%A1%B6%E5%85%A8%E5%9B%BD%E9%94%80%E5%86%A0%E4%BF%9D%E6%97%B6%E6%8D%B7%E5%A5%B3%E9%94%80%E5%94%AE%E5%8F%91%E5%A3%B0%23) `47.9K 🔥` `NEW`
1. [小城良方连续两天破万](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E8%BF%9E%E7%BB%AD%E4%B8%A4%E5%A4%A9%E7%A0%B4%E4%B8%87%23) `47.7K 🔥` `NEW`
1. [2026WTT法兰克福冠军赛女单签表](https://s.weibo.com/weibo?q=%232026WTT%E6%B3%95%E5%85%B0%E5%85%8B%E7%A6%8F%E5%86%A0%E5%86%9B%E8%B5%9B%E5%A5%B3%E5%8D%95%E7%AD%BE%E8%A1%A8%23) `47.5K 🔥` `NEW`
1. [汪苏泷w盛典压轴晴](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7w%E7%9B%9B%E5%85%B8%E5%8E%8B%E8%BD%B4%E6%99%B4%23) `47.1K 🔥` `NEW`
1. [晚上练轻抗阻运动能助眠](https://s.weibo.com/weibo?q=%23%E6%99%9A%E4%B8%8A%E7%BB%83%E8%BD%BB%E6%8A%97%E9%98%BB%E8%BF%90%E5%8A%A8%E8%83%BD%E5%8A%A9%E7%9C%A0%23) `46.9K 🔥` `NEW`
1. [李昀锐回复丁程鑫](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%9B%9E%E5%A4%8D%E4%B8%81%E7%A8%8B%E9%91%AB%23) `46.8K 🔥` `NEW`
1. [孙颖莎蒙彼利埃站冠军](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%92%99%E5%BD%BC%E5%88%A9%E5%9F%83%E7%AB%99%E5%86%A0%E5%86%9B%23) `652.7K 🔥` `+239%`
1. [85花很刻意避免同台了](https://s.weibo.com/weibo?q=%2385%E8%8A%B1%E5%BE%88%E5%88%BB%E6%84%8F%E9%81%BF%E5%85%8D%E5%90%8C%E5%8F%B0%E4%BA%86%23) `487.8K 🔥` `+58%`
1. [吴磊婉拒蔡徐坤](https://s.weibo.com/weibo?q=%23%E5%90%B4%E7%A3%8A%E5%A9%89%E6%8B%92%E8%94%A1%E5%BE%90%E5%9D%A4%23) `315.2K 🔥` `+221%`
1. [影视行业真的来春天了](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E8%A1%8C%E4%B8%9A%E7%9C%9F%E7%9A%84%E6%9D%A5%E6%98%A5%E5%A4%A9%E4%BA%86%23) `267.4K 🔥` `+164%`
1. [马天宇张萌 和好](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E5%BC%A0%E8%90%8C%20%E5%92%8C%E5%A5%BD%23) `207.8K 🔥` `+112%`
1. [胡歌自曝身边好友陆续因心梗离世](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%AD%8C%E8%87%AA%E6%9B%9D%E8%BA%AB%E8%BE%B9%E5%A5%BD%E5%8F%8B%E9%99%86%E7%BB%AD%E5%9B%A0%E5%BF%83%E6%A2%97%E7%A6%BB%E4%B8%96%23) `190.8K 🔥` `+161%`
1. [中国女生借卫生巾震撼外国网友](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E5%80%9F%E5%8D%AB%E7%94%9F%E5%B7%BE%E9%9C%87%E6%92%BC%E5%A4%96%E5%9B%BD%E7%BD%91%E5%8F%8B%23) `103.1K 🔥` `+41%`
1. [刘亦菲刘些宁撞婚纱造型](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%88%98%E4%BA%9B%E5%AE%81%E6%92%9E%E5%A9%9A%E7%BA%B1%E9%80%A0%E5%9E%8B%23) `102.7K 🔥` `+41%`
1. [林一看到穿婚纱的刘亦菲了](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%B8%80%E7%9C%8B%E5%88%B0%E7%A9%BF%E5%A9%9A%E7%BA%B1%E7%9A%84%E5%88%98%E4%BA%A6%E8%8F%B2%E4%BA%86%23) `101.7K 🔥` `+39%`
1. [换不来收入的努力大多只是逃避](https://s.weibo.com/weibo?q=%23%E6%8D%A2%E4%B8%8D%E6%9D%A5%E6%94%B6%E5%85%A5%E7%9A%84%E5%8A%AA%E5%8A%9B%E5%A4%A7%E5%A4%9A%E5%8F%AA%E6%98%AF%E9%80%83%E9%81%BF%23) `101.6K 🔥` `+40%`
1. [孙颖莎回应蒙彼利埃站夺冠](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%9B%9E%E5%BA%94%E8%92%99%E5%BD%BC%E5%88%A9%E5%9F%83%E7%AB%99%E5%A4%BA%E5%86%A0%23) `101.3K 🔥` `+39%`
1. [保时捷女销冠超三成客户来自线上](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%97%B6%E6%8D%B7%E5%A5%B3%E9%94%80%E5%86%A0%E8%B6%85%E4%B8%89%E6%88%90%E5%AE%A2%E6%88%B7%E6%9D%A5%E8%87%AA%E7%BA%BF%E4%B8%8A%23) `95.3K 🔥` `+82%`
1. [婚礼当晚新郎车祸进ICU新娘查出怀孕](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E7%A4%BC%E5%BD%93%E6%99%9A%E6%96%B0%E9%83%8E%E8%BD%A6%E7%A5%B8%E8%BF%9BICU%E6%96%B0%E5%A8%98%E6%9F%A5%E5%87%BA%E6%80%80%E5%AD%95%23) `67.5K 🔥` `+33%`
1. [财务误发5000元工资给离职员工遭拒还](https://s.weibo.com/weibo?q=%23%E8%B4%A2%E5%8A%A1%E8%AF%AF%E5%8F%915000%E5%85%83%E5%B7%A5%E8%B5%84%E7%BB%99%E7%A6%BB%E8%81%8C%E5%91%98%E5%B7%A5%E9%81%AD%E6%8B%92%E8%BF%98%23) `63.0K 🔥` `+24%`
1. [桑坦德竞技0比3皇马](https://s.weibo.com/weibo?q=%23%E6%A1%91%E5%9D%A6%E5%BE%B7%E7%AB%9E%E6%8A%800%E6%AF%943%E7%9A%87%E9%A9%AC%23) `60.8K 🔥` `+31%`
1. [WTT法兰克福站男单签表](https://s.weibo.com/weibo?q=%23WTT%E6%B3%95%E5%85%B0%E5%85%8B%E7%A6%8F%E7%AB%99%E7%94%B7%E5%8D%95%E7%AD%BE%E8%A1%A8%23) `47.0K 🔥` `+27%`
1. [鸟鸟我画地为牢了朋友](https://s.weibo.com/weibo?q=%23%E9%B8%9F%E9%B8%9F%E6%88%91%E7%94%BB%E5%9C%B0%E4%B8%BA%E7%89%A2%E4%BA%86%E6%9C%8B%E5%8F%8B%23) `75.7K 🔥`
1. [刘冲可以放心睡觉了](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%86%B2%E5%8F%AF%E4%BB%A5%E6%94%BE%E5%BF%83%E7%9D%A1%E8%A7%89%E4%BA%86%23) `68.1K 🔥`
1. [喜欢吃烤红薯的人天塌了](https://s.weibo.com/weibo?q=%23%E5%96%9C%E6%AC%A2%E5%90%83%E7%83%A4%E7%BA%A2%E8%96%AF%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `67.9K 🔥`
1. [晕碳两个字震惊日本人](https://s.weibo.com/weibo?q=%23%E6%99%95%E7%A2%B3%E4%B8%A4%E4%B8%AA%E5%AD%97%E9%9C%87%E6%83%8A%E6%97%A5%E6%9C%AC%E4%BA%BA%23) `67.3K 🔥`
1. [杨幂也在看后会友期](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E4%B9%9F%E5%9C%A8%E7%9C%8B%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%23) `66.9K 🔥`
1. [苦难果然是文学的温床](https://s.weibo.com/weibo?q=%23%E8%8B%A6%E9%9A%BE%E6%9E%9C%E7%84%B6%E6%98%AF%E6%96%87%E5%AD%A6%E7%9A%84%E6%B8%A9%E5%BA%8A%23) `66.6K 🔥`
1. [W盛典合影](https://s.weibo.com/weibo?q=%23W%E7%9B%9B%E5%85%B8%E5%90%88%E5%BD%B1%23) `66.4K 🔥`
1. [原来钱要花在这种地方](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E9%92%B1%E8%A6%81%E8%8A%B1%E5%9C%A8%E8%BF%99%E7%A7%8D%E5%9C%B0%E6%96%B9%23) `52.5K 🔥`
1. [侯卓成 杨汝晴](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E5%8D%93%E6%88%90%20%E6%9D%A8%E6%B1%9D%E6%99%B4%23) `48.0K 🔥`
1. [孙颖莎对蒯曼国际比赛8胜2负](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%AF%B9%E8%92%AF%E6%9B%BC%E5%9B%BD%E9%99%85%E6%AF%94%E8%B5%9B8%E8%83%9C2%E8%B4%9F%23) `47.7K 🔥`
1. [白小纯淘汰青稚](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E6%B7%98%E6%B1%B0%E9%9D%92%E7%A8%9A%23) `47.6K 🔥`
1. [WTT蒙彼利埃女单决赛](https://s.weibo.com/weibo?q=%23WTT%E8%92%99%E5%BD%BC%E5%88%A9%E5%9F%83%E5%A5%B3%E5%8D%95%E5%86%B3%E8%B5%9B%23) `47.3K 🔥`
1. [画地为牢](https://s.weibo.com/weibo?q=%23%E7%94%BB%E5%9C%B0%E4%B8%BA%E7%89%A2%23) `103.1K 🔥` `-26%`
1. [孙颖莎4比1蒯曼](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E4%E6%AF%941%E8%92%AF%E6%9B%BC%23) `54.1K 🔥` `-26%`
1. [曝王子璇录制结束抱着经纪人流泪](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E5%AD%90%E7%92%87%E5%BD%95%E5%88%B6%E7%BB%93%E6%9D%9F%E6%8A%B1%E7%9D%80%E7%BB%8F%E7%BA%AA%E4%BA%BA%E6%B5%81%E6%B3%AA%23) `52.7K 🔥` `-28%`
1. [35岁保时捷女销售登顶全国销冠](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E4%BF%9D%E6%97%B6%E6%8D%B7%E5%A5%B3%E9%94%80%E5%94%AE%E7%99%BB%E9%A1%B6%E5%85%A8%E5%9B%BD%E9%94%80%E5%86%A0%23) `52.6K 🔥` `-28%`
1. [孙颖莎vs蒯曼](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Evs%E8%92%AF%E6%9B%BC%23) `50.3K 🔥` `-31%`
1. [老人独自坐在家门口安静离世](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E7%8B%AC%E8%87%AA%E5%9D%90%E5%9C%A8%E5%AE%B6%E9%97%A8%E5%8F%A3%E5%AE%89%E9%9D%99%E7%A6%BB%E4%B8%96%23) `47.3K 🔥` `-35%`

Updated at 2026-11-02 06:59:28

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
