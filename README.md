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

1. [佛得角官方感谢中国帮圆梦世界杯 (Cape Verde officials thank China for helping realize World Cup dream)](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E5%AE%98%E6%96%B9%E6%84%9F%E8%B0%A2%E4%B8%AD%E5%9B%BD%E5%B8%AE%E5%9C%86%E6%A2%A6%E4%B8%96%E7%95%8C%E6%9D%AF%23) `1.4M 🔥` `NEW`
1. [爸爸亲子活动猝死幼儿园被指救援不力](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E4%BA%B2%E5%AD%90%E6%B4%BB%E5%8A%A8%E7%8C%9D%E6%AD%BB%E5%B9%BC%E5%84%BF%E5%9B%AD%E8%A2%AB%E6%8C%87%E6%95%91%E6%8F%B4%E4%B8%8D%E5%8A%9B%23) `909.6K 🔥` `NEW`
1. [教育部升级2026高考志愿信息系统](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E9%83%A8%E5%8D%87%E7%BA%A72026%E9%AB%98%E8%80%83%E5%BF%97%E6%84%BF%E4%BF%A1%E6%81%AF%E7%B3%BB%E7%BB%9F%23) `833.5K 🔥` `NEW`
1. [两环卫工被撞身亡系一对夫妻](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E7%8E%AF%E5%8D%AB%E5%B7%A5%E8%A2%AB%E6%92%9E%E8%BA%AB%E4%BA%A1%E7%B3%BB%E4%B8%80%E5%AF%B9%E5%A4%AB%E5%A6%BB%23) `833.4K 🔥` `NEW`
1. [柯淳 长剧](https://s.weibo.com/weibo?q=%23%E6%9F%AF%E6%B7%B3%20%E9%95%BF%E5%89%A7%23) `831.6K 🔥` `NEW`
1. [爸爸年轻时究竟有多敢穿](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%B9%B4%E8%BD%BB%E6%97%B6%E7%A9%B6%E7%AB%9F%E6%9C%89%E5%A4%9A%E6%95%A2%E7%A9%BF%23) `828.5K 🔥` `NEW`
1. [炽夏扑面而来的夏日青春感](https://s.weibo.com/weibo?q=%23%E7%82%BD%E5%A4%8F%E6%89%91%E9%9D%A2%E8%80%8C%E6%9D%A5%E7%9A%84%E5%A4%8F%E6%97%A5%E9%9D%92%E6%98%A5%E6%84%9F%23) `807.1K 🔥` `NEW`
1. [不要和上班的人诉苦](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E5%92%8C%E4%B8%8A%E7%8F%AD%E7%9A%84%E4%BA%BA%E8%AF%89%E8%8B%A6%23) `763.7K 🔥` `NEW`
1. [lululemon下架相关宣传内容](https://s.weibo.com/weibo?q=%23lululemon%E4%B8%8B%E6%9E%B6%E7%9B%B8%E5%85%B3%E5%AE%A3%E4%BC%A0%E5%86%85%E5%AE%B9%23) `595.7K 🔥` `NEW`
1. [檀健次与王楚然身高差](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E4%B8%8E%E7%8E%8B%E6%A5%9A%E7%84%B6%E8%BA%AB%E9%AB%98%E5%B7%AE%23) `475.6K 🔥` `NEW`
1. [华为盘古大模型 (Huawei Pangu large model)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E7%9B%98%E5%8F%A4%E5%A4%A7%E6%A8%A1%E5%9E%8B%23) `471.6K 🔥` `NEW`
1. [过程全错结果全对了](https://s.weibo.com/weibo?q=%23%E8%BF%87%E7%A8%8B%E5%85%A8%E9%94%99%E7%BB%93%E6%9E%9C%E5%85%A8%E5%AF%B9%E4%BA%86%23) `469.8K 🔥` `NEW`
1. [lululemon向朱一龙道歉](https://s.weibo.com/weibo?q=%23lululemon%E5%90%91%E6%9C%B1%E4%B8%80%E9%BE%99%E9%81%93%E6%AD%89%23) `469.0K 🔥` `NEW`
1. [百花奖入围名单](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%E5%85%A5%E5%9B%B4%E5%90%8D%E5%8D%95%23) `467.8K 🔥` `NEW`
1. [别在最忙的时候说分手](https://s.weibo.com/weibo?q=%23%E5%88%AB%E5%9C%A8%E6%9C%80%E5%BF%99%E7%9A%84%E6%97%B6%E5%80%99%E8%AF%B4%E5%88%86%E6%89%8B%23) `467.5K 🔥` `NEW`
1. [迪丽热巴90花咖位](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B490%E8%8A%B1%E5%92%96%E4%BD%8D%23) `467.5K 🔥` `NEW`
1. [炽夏 魔改](https://s.weibo.com/weibo?q=%23%E7%82%BD%E5%A4%8F%20%E9%AD%94%E6%94%B9%23) `467.5K 🔥` `NEW`
1. [伊朗国旗在美国体育场展开全场欢呼](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%9B%BD%E6%97%97%E5%9C%A8%E7%BE%8E%E5%9B%BD%E4%BD%93%E8%82%B2%E5%9C%BA%E5%B1%95%E5%BC%80%E5%85%A8%E5%9C%BA%E6%AC%A2%E5%91%BC%23) `466.5K 🔥` `NEW`
1. [日本人在国外vs日本人在日本街头](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%BA%E5%9C%A8%E5%9B%BD%E5%A4%96vs%E6%97%A5%E6%9C%AC%E4%BA%BA%E5%9C%A8%E6%97%A5%E6%9C%AC%E8%A1%97%E5%A4%B4%23) `457.8K 🔥` `NEW`
1. [武功山网红鹿扑倒男孩](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%8A%9F%E5%B1%B1%E7%BD%91%E7%BA%A2%E9%B9%BF%E6%89%91%E5%80%92%E7%94%B7%E5%AD%A9%23) `451.2K 🔥` `NEW`
1. [男子参加幼儿园马拉松猝死家属发声 (Family of man who died suddenly while participating in kindergarten marathon speaks out)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8F%82%E5%8A%A0%E5%B9%BC%E5%84%BF%E5%9B%AD%E9%A9%AC%E6%8B%89%E6%9D%BE%E7%8C%9D%E6%AD%BB%E5%AE%B6%E5%B1%9E%E5%8F%91%E5%A3%B0%23) `442.9K 🔥` `NEW`
1. [吴倩说和张雨剑现在关系还算融洽](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%80%A9%E8%AF%B4%E5%92%8C%E5%BC%A0%E9%9B%A8%E5%89%91%E7%8E%B0%E5%9C%A8%E5%85%B3%E7%B3%BB%E8%BF%98%E7%AE%97%E8%9E%8D%E6%B4%BD%23) `437.1K 🔥` `NEW`
1. [世界杯最夸张失误出现了](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E6%9C%80%E5%A4%B8%E5%BC%A0%E5%A4%B1%E8%AF%AF%E5%87%BA%E7%8E%B0%E4%BA%86%23) `432.2K 🔥` `NEW`
1. [杨紫藏族少女妆](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E8%97%8F%E6%97%8F%E5%B0%91%E5%A5%B3%E5%A6%86%23) `427.8K 🔥` `NEW`
1. [朱一龙方回应鼓具争议](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E6%96%B9%E5%9B%9E%E5%BA%94%E9%BC%93%E5%85%B7%E4%BA%89%E8%AE%AE%23) `412.7K 🔥` `NEW`
1. [双休和单休完全是两种人生](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E4%BC%91%E5%92%8C%E5%8D%95%E4%BC%91%E5%AE%8C%E5%85%A8%E6%98%AF%E4%B8%A4%E7%A7%8D%E4%BA%BA%E7%94%9F%23) `408.9K 🔥` `NEW`
1. [何猷君参加儿子毕业典礼](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%8C%B7%E5%90%9B%E5%8F%82%E5%8A%A0%E5%84%BF%E5%AD%90%E6%AF%95%E4%B8%9A%E5%85%B8%E7%A4%BC%23) `405.6K 🔥` `NEW`
1. [长生骨组讯](https://s.weibo.com/weibo?q=%23%E9%95%BF%E7%94%9F%E9%AA%A8%E7%BB%84%E8%AE%AF%23) `299.8K 🔥` `NEW`
1. [日本加息](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%8A%A0%E6%81%AF%23) `168.9K 🔥` `NEW`
1. [23万纯电SUV卷王](https://s.weibo.com/weibo?q=%2323%E4%B8%87%E7%BA%AF%E7%94%B5SUV%E5%8D%B7%E7%8E%8B%23) `168.7K 🔥` `NEW`
1. [世界杯第一张神图诞生 (The first magical picture of the World Cup is born)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E7%AC%AC%E4%B8%80%E5%BC%A0%E7%A5%9E%E5%9B%BE%E8%AF%9E%E7%94%9F%23) `168.5K 🔥` `NEW`
1. [百花奖还没原谅沈腾吗](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%E8%BF%98%E6%B2%A1%E5%8E%9F%E8%B0%85%E6%B2%88%E8%85%BE%E5%90%97%23) `168.2K 🔥` `NEW`
1. [福克斯取关马刺](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%85%8B%E6%96%AF%E5%8F%96%E5%85%B3%E9%A9%AC%E5%88%BA%23) `167.9K 🔥` `NEW`
1. [杜华曾求着程潇接工作](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%8D%8E%E6%9B%BE%E6%B1%82%E7%9D%80%E7%A8%8B%E6%BD%87%E6%8E%A5%E5%B7%A5%E4%BD%9C%23) `167.8K 🔥` `NEW`
1. [王宝强新片集齐老中青狠人](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%9D%E5%BC%BA%E6%96%B0%E7%89%87%E9%9B%86%E9%BD%90%E8%80%81%E4%B8%AD%E9%9D%92%E7%8B%A0%E4%BA%BA%23) `167.5K 🔥` `NEW`
1. [格力称空调不行抽多久真空也白扯](https://s.weibo.com/weibo?q=%23%E6%A0%BC%E5%8A%9B%E7%A7%B0%E7%A9%BA%E8%B0%83%E4%B8%8D%E8%A1%8C%E6%8A%BD%E5%A4%9A%E4%B9%85%E7%9C%9F%E7%A9%BA%E4%B9%9F%E7%99%BD%E6%89%AF%23) `167.3K 🔥` `NEW`
1. [小米高管称数字抽真空会成为趋势](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E9%AB%98%E7%AE%A1%E7%A7%B0%E6%95%B0%E5%AD%97%E6%8A%BD%E7%9C%9F%E7%A9%BA%E4%BC%9A%E6%88%90%E4%B8%BA%E8%B6%8B%E5%8A%BF%23) `167.1K 🔥` `NEW`
1. [王鹤棣被狗扽着走](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E8%A2%AB%E7%8B%97%E6%89%BD%E7%9D%80%E8%B5%B0%23) `167.1K 🔥` `NEW`
1. [柯淳炽夏演技](https://s.weibo.com/weibo?q=%23%E6%9F%AF%E6%B7%B3%E7%82%BD%E5%A4%8F%E6%BC%94%E6%8A%80%23) `166.9K 🔥` `NEW`
1. [咖啡从好喝到喝好有多远](https://s.weibo.com/weibo?q=%23%E5%92%96%E5%95%A1%E4%BB%8E%E5%A5%BD%E5%96%9D%E5%88%B0%E5%96%9D%E5%A5%BD%E6%9C%89%E5%A4%9A%E8%BF%9C%23) `166.9K 🔥` `NEW`
1. [深圳暴雨 (Heavy rain in Shenzhen)](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E6%9A%B4%E9%9B%A8%23) `166.9K 🔥` `NEW`
1. [当我不停向怀孕小猫要它的孩子](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E4%B8%8D%E5%81%9C%E5%90%91%E6%80%80%E5%AD%95%E5%B0%8F%E7%8C%AB%E8%A6%81%E5%AE%83%E7%9A%84%E5%AD%A9%E5%AD%90%23) `166.9K 🔥` `NEW`
1. [野狗骨头](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%23) `166.9K 🔥` `NEW`
1. [陈妍希宣传周柯宇炽夏](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E5%AE%A3%E4%BC%A0%E5%91%A8%E6%9F%AF%E5%AE%87%E7%82%BD%E5%A4%8F%23) `166.8K 🔥` `NEW`
1. [山姆中国换帅不到1年品控却屡陷争议](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E4%B8%AD%E5%9B%BD%E6%8D%A2%E5%B8%85%E4%B8%8D%E5%88%B01%E5%B9%B4%E5%93%81%E6%8E%A7%E5%8D%B4%E5%B1%A1%E9%99%B7%E4%BA%89%E8%AE%AE%23) `166.8K 🔥` `NEW`
1. [曝湖南台女主持爱买高仿包](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B9%96%E5%8D%97%E5%8F%B0%E5%A5%B3%E4%B8%BB%E6%8C%81%E7%88%B1%E4%B9%B0%E9%AB%98%E4%BB%BF%E5%8C%85%23) `166.8K 🔥` `NEW`
1. [向佐给易立竞说父亲花五亿扶不起他](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%BD%90%E7%BB%99%E6%98%93%E7%AB%8B%E7%AB%9E%E8%AF%B4%E7%88%B6%E4%BA%B2%E8%8A%B1%E4%BA%94%E4%BA%BF%E6%89%B6%E4%B8%8D%E8%B5%B7%E4%BB%96%23) `166.8K 🔥` `NEW`
1. [金价年内有望冲5000美元](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%B9%B4%E5%86%85%E6%9C%89%E6%9C%9B%E5%86%B25000%E7%BE%8E%E5%85%83%23) `166.8K 🔥` `NEW`
1. [曝张大大吃不到卤肉饭罢录节目](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BC%A0%E5%A4%A7%E5%A4%A7%E5%90%83%E4%B8%8D%E5%88%B0%E5%8D%A4%E8%82%89%E9%A5%AD%E7%BD%A2%E5%BD%95%E8%8A%82%E7%9B%AE%23) `166.8K 🔥` `NEW`
1. [明晚8点上京东618领6大补贴更便宜 (It’s cheaper to go to JD.com 618 at 8pm tomorrow night to receive 6 major subsidies)](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%99%9A8%E7%82%B9%E4%B8%8A%E4%BA%AC%E4%B8%9C618%E9%A2%866%E5%A4%A7%E8%A1%A5%E8%B4%B4%E6%9B%B4%E4%BE%BF%E5%AE%9C%23) `833.4K 🔥` `+30%`
1. [白鹿已争气争气再争气](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%B7%B2%E4%BA%89%E6%B0%94%E4%BA%89%E6%B0%94%E5%86%8D%E4%BA%89%E6%B0%94%23) `168.7K 🔥` `-46%`

Updated at 2026-06-16 15:09:52

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
