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

1. [女装到底怎么了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E8%A3%85%E5%88%B0%E5%BA%95%E6%80%8E%E4%B9%88%E4%BA%86%23) `1.1M 🔥` `NEW`
1. [能找到好工作的人都有野路子](https://s.weibo.com/weibo?q=%23%E8%83%BD%E6%89%BE%E5%88%B0%E5%A5%BD%E5%B7%A5%E4%BD%9C%E7%9A%84%E4%BA%BA%E9%83%BD%E6%9C%89%E9%87%8E%E8%B7%AF%E5%AD%90%23) `811.7K 🔥` `NEW`
1. [向国旗敬礼](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%9B%BD%E6%97%97%E6%95%AC%E7%A4%BC%23) `807.0K 🔥` `NEW`
1. [神行者8开启全国交付](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E8%A1%8C%E8%80%858%E5%BC%80%E5%90%AF%E5%85%A8%E5%9B%BD%E4%BA%A4%E4%BB%98%23) `799.2K 🔥` `NEW`
1. [亚运会](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `791.9K 🔥` `NEW`
1. [花呗白条月付产品退出支付选项](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%91%97%E7%99%BD%E6%9D%A1%E6%9C%88%E4%BB%98%E4%BA%A7%E5%93%81%E9%80%80%E5%87%BA%E6%94%AF%E4%BB%98%E9%80%89%E9%A1%B9%23) `787.8K 🔥` `NEW`
1. [胡军全家伦敦给闺女干活](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%86%9B%E5%85%A8%E5%AE%B6%E4%BC%A6%E6%95%A6%E7%BB%99%E9%97%BA%E5%A5%B3%E5%B9%B2%E6%B4%BB%23) `734.3K 🔥` `NEW`
1. [问界M7车主称从华为亲儿子变东风小康](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8CM7%E8%BD%A6%E4%B8%BB%E7%A7%B0%E4%BB%8E%E5%8D%8E%E4%B8%BA%E4%BA%B2%E5%84%BF%E5%AD%90%E5%8F%98%E4%B8%9C%E9%A3%8E%E5%B0%8F%E5%BA%B7%23) `721.3K 🔥` `NEW`
1. [西贝被曝将彻底倒闭](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%B4%9D%E8%A2%AB%E6%9B%9D%E5%B0%86%E5%BD%BB%E5%BA%95%E5%80%92%E9%97%AD%23) `717.6K 🔥` `NEW`
1. [肉包不吃肉 没有给过餐饮授权](https://s.weibo.com/weibo?q=%23%E8%82%89%E5%8C%85%E4%B8%8D%E5%90%83%E8%82%89%20%E6%B2%A1%E6%9C%89%E7%BB%99%E8%BF%87%E9%A4%90%E9%A5%AE%E6%8E%88%E6%9D%83%23) `705.6K 🔥` `NEW`
1. [张凯毅前夫被曝称当网红像耍猴](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%AF%E6%AF%85%E5%89%8D%E5%A4%AB%E8%A2%AB%E6%9B%9D%E7%A7%B0%E5%BD%93%E7%BD%91%E7%BA%A2%E5%83%8F%E8%80%8D%E7%8C%B4%23) `695.7K 🔥` `NEW`
1. [浙江商K大面积关门](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E5%95%86K%E5%A4%A7%E9%9D%A2%E7%A7%AF%E5%85%B3%E9%97%A8%23) `674.2K 🔥` `NEW`
1. [iPhoneDuo 反掰](https://s.weibo.com/weibo?q=%23iPhoneDuo%20%E5%8F%8D%E6%8E%B0%23) `672.5K 🔥` `NEW`
1. [舒畅 脸](https://s.weibo.com/weibo?q=%23%E8%88%92%E7%95%85%20%E8%84%B8%23) `650.6K 🔥` `NEW`
1. [建议大家少用这种充电宝](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%B0%91%E7%94%A8%E8%BF%99%E7%A7%8D%E5%85%85%E7%94%B5%E5%AE%9D%23) `593.2K 🔥` `NEW`
1. [张煜东自张凯毅2月生产后再无更新](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%85%9C%E4%B8%9C%E8%87%AA%E5%BC%A0%E5%87%AF%E6%AF%852%E6%9C%88%E7%94%9F%E4%BA%A7%E5%90%8E%E5%86%8D%E6%97%A0%E6%9B%B4%E6%96%B0%23) `537.1K 🔥` `NEW`
1. [跟着吴磊爱回收](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E7%9D%80%E5%90%B4%E7%A3%8A%E7%88%B1%E5%9B%9E%E6%94%B6%23) `512.8K 🔥` `NEW`
1. [越来越多人全款买房](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%A4%9A%E4%BA%BA%E5%85%A8%E6%AC%BE%E4%B9%B0%E6%88%BF%23) `474.2K 🔥` `NEW`
1. [王俊凯回应生日应援取消](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%9B%9E%E5%BA%94%E7%94%9F%E6%97%A5%E5%BA%94%E6%8F%B4%E5%8F%96%E6%B6%88%23) `457.0K 🔥` `NEW`
1. [井柏然剪头发需要经纪人和品牌方同意](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%89%AA%E5%A4%B4%E5%8F%91%E9%9C%80%E8%A6%81%E7%BB%8F%E7%BA%AA%E4%BA%BA%E5%92%8C%E5%93%81%E7%89%8C%E6%96%B9%E5%90%8C%E6%84%8F%23) `414.1K 🔥` `NEW`
1. [经济上行期是一种感觉](https://s.weibo.com/weibo?q=%23%E7%BB%8F%E6%B5%8E%E4%B8%8A%E8%A1%8C%E6%9C%9F%E6%98%AF%E4%B8%80%E7%A7%8D%E6%84%9F%E8%A7%89%23) `406.6K 🔥` `NEW`
1. [亲子鉴定规则被指双标](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E5%AD%90%E9%89%B4%E5%AE%9A%E8%A7%84%E5%88%99%E8%A2%AB%E6%8C%87%E5%8F%8C%E6%A0%87%23) `334.9K 🔥` `NEW`
1. [舒畅 我38岁状态挺好的](https://s.weibo.com/weibo?q=%23%E8%88%92%E7%95%85%20%E6%88%9138%E5%B2%81%E7%8A%B6%E6%80%81%E6%8C%BA%E5%A5%BD%E7%9A%84%23) `334.8K 🔥` `NEW`
1. [国外网友批ladygaga代孕](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%A4%96%E7%BD%91%E5%8F%8B%E6%89%B9ladygaga%E4%BB%A3%E5%AD%95%23) `209.4K 🔥` `NEW`
1. [上海防空警报](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E9%98%B2%E7%A9%BA%E8%AD%A6%E6%8A%A5%23) `190.7K 🔥` `NEW`
1. [朱一龙听到镇魂的反应](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E5%90%AC%E5%88%B0%E9%95%87%E9%AD%82%E7%9A%84%E5%8F%8D%E5%BA%94%23) `184.4K 🔥` `NEW`
1. [周也女鬼塑大片](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E5%A5%B3%E9%AC%BC%E5%A1%91%E5%A4%A7%E7%89%87%23) `173.1K 🔥` `NEW`
1. [2026亚运会今天开幕](https://s.weibo.com/weibo?q=%232026%E4%BA%9A%E8%BF%90%E4%BC%9A%E4%BB%8A%E5%A4%A9%E5%BC%80%E5%B9%95%23) `171.4K 🔥` `NEW`
1. [林珍娜替身](https://s.weibo.com/weibo?q=%23%E6%9E%97%E7%8F%8D%E5%A8%9C%E6%9B%BF%E8%BA%AB%23) `171.2K 🔥` `NEW`
1. [闪耀暖暖](https://s.weibo.com/weibo?q=%23%E9%97%AA%E8%80%80%E6%9A%96%E6%9A%96%23) `171.0K 🔥` `NEW`
1. [兰香如故腾讯年冠](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E8%85%BE%E8%AE%AF%E5%B9%B4%E5%86%A0%23) `170.6K 🔥` `NEW`
1. [18岁女儿高一退学坚持出嫁](https://s.weibo.com/weibo?q=%2318%E5%B2%81%E5%A5%B3%E5%84%BF%E9%AB%98%E4%B8%80%E9%80%80%E5%AD%A6%E5%9D%9A%E6%8C%81%E5%87%BA%E5%AB%81%23) `168.1K 🔥` `NEW`
1. [孙颖莎王楚钦出征亚运会](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%87%BA%E5%BE%81%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `159.4K 🔥` `NEW`
1. [凡人修仙传](https://s.weibo.com/weibo?q=%23%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0%23) `154.2K 🔥` `NEW`
1. [曝华为门店撤掉问界](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8D%8E%E4%B8%BA%E9%97%A8%E5%BA%97%E6%92%A4%E6%8E%89%E9%97%AE%E7%95%8C%23) `143.6K 🔥` `NEW`
1. [宗馥莉清库存式中秋福利被吐槽了](https://s.weibo.com/weibo?q=%23%E5%AE%97%E9%A6%A5%E8%8E%89%E6%B8%85%E5%BA%93%E5%AD%98%E5%BC%8F%E4%B8%AD%E7%A7%8B%E7%A6%8F%E5%88%A9%E8%A2%AB%E5%90%90%E6%A7%BD%E4%BA%86%23) `142.1K 🔥` `NEW`
1. [王俊凯你是在养死士吗](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%BD%A0%E6%98%AF%E5%9C%A8%E5%85%BB%E6%AD%BB%E5%A3%AB%E5%90%97%23) `141.1K 🔥` `NEW`
1. [于东来正被自己的人设绑架](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E4%B8%9C%E6%9D%A5%E6%AD%A3%E8%A2%AB%E8%87%AA%E5%B7%B1%E7%9A%84%E4%BA%BA%E8%AE%BE%E7%BB%91%E6%9E%B6%23) `138.3K 🔥` `NEW`
1. [无限暖暖](https://s.weibo.com/weibo?q=%23%E6%97%A0%E9%99%90%E6%9A%96%E6%9A%96%23) `138.0K 🔥` `NEW`
1. [中国女篮111比46泰国女篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%AF%AE111%E6%AF%9446%E6%B3%B0%E5%9B%BD%E5%A5%B3%E7%AF%AE%23) `133.2K 🔥` `NEW`
1. [数学老师投300万拍电影票房不足3万](https://s.weibo.com/weibo?q=%23%E6%95%B0%E5%AD%A6%E8%80%81%E5%B8%88%E6%8A%95300%E4%B8%87%E6%8B%8D%E7%94%B5%E5%BD%B1%E7%A5%A8%E6%88%BF%E4%B8%8D%E8%B6%B33%E4%B8%87%23) `121.5K 🔥` `NEW`
1. [如鸢](https://s.weibo.com/weibo?q=%23%E5%A6%82%E9%B8%A2%23) `120.3K 🔥` `NEW`
1. [两口子离婚平台把结婚照判给商家](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%8F%A3%E5%AD%90%E7%A6%BB%E5%A9%9A%E5%B9%B3%E5%8F%B0%E6%8A%8A%E7%BB%93%E5%A9%9A%E7%85%A7%E5%88%A4%E7%BB%99%E5%95%86%E5%AE%B6%23) `116.7K 🔥` `NEW`
1. [王楚钦孙颖莎亚运首轮轮空](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E4%BA%9A%E8%BF%90%E9%A6%96%E8%BD%AE%E8%BD%AE%E7%A9%BA%23) `114.1K 🔥` `NEW`
1. [吕蕺儿见到兰香第一反应是舍命相救](https://s.weibo.com/weibo?q=%23%E5%90%95%E8%95%BA%E5%84%BF%E8%A7%81%E5%88%B0%E5%85%B0%E9%A6%99%E7%AC%AC%E4%B8%80%E5%8F%8D%E5%BA%94%E6%98%AF%E8%88%8D%E5%91%BD%E7%9B%B8%E6%95%91%23) `113.8K 🔥` `NEW`
1. [恋与深空混池PV延迟](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E6%B7%B7%E6%B1%A0PV%E5%BB%B6%E8%BF%9F%23) `113.1K 🔥` `NEW`
1. [男孩轻生涉事老师曾获评优秀班主任](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E8%BD%BB%E7%94%9F%E6%B6%89%E4%BA%8B%E8%80%81%E5%B8%88%E6%9B%BE%E8%8E%B7%E8%AF%84%E4%BC%98%E7%A7%80%E7%8F%AD%E4%B8%BB%E4%BB%BB%23) `108.0K 🔥` `NEW`
1. [2岁男童坠楼家中事发区域无监控](https://s.weibo.com/weibo?q=%232%E5%B2%81%E7%94%B7%E7%AB%A5%E5%9D%A0%E6%A5%BC%E5%AE%B6%E4%B8%AD%E4%BA%8B%E5%8F%91%E5%8C%BA%E5%9F%9F%E6%97%A0%E7%9B%91%E6%8E%A7%23) `107.5K 🔥` `NEW`
1. [中国男篮队长胡明轩赛后发声](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E9%98%9F%E9%95%BF%E8%83%A1%E6%98%8E%E8%BD%A9%E8%B5%9B%E5%90%8E%E5%8F%91%E5%A3%B0%23) `756.0K 🔥` `+181%`
1. [中国的小偷为何断崖式下降](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%9A%84%E5%B0%8F%E5%81%B7%E4%B8%BA%E4%BD%95%E6%96%AD%E5%B4%96%E5%BC%8F%E4%B8%8B%E9%99%8D%23) `748.9K 🔥`
1. [梅毒越来越困扰年轻人](https://s.weibo.com/weibo?q=%23%E6%A2%85%E6%AF%92%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%9B%B0%E6%89%B0%E5%B9%B4%E8%BD%BB%E4%BA%BA%23) `771.6K 🔥` `-34%`

Updated at 2026-09-19 13:00:42

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
