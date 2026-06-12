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

1. [歌手直播 (Singer live broadcast)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E7%9B%B4%E6%92%AD%23) `2.0M 🔥` `NEW`
1. [歌手也中途淘汰](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E4%B9%9F%E4%B8%AD%E9%80%94%E6%B7%98%E6%B1%B0%23) `951.8K 🔥` `NEW`
1. [活力中国调研行](https://s.weibo.com/weibo?q=%23%E6%B4%BB%E5%8A%9B%E4%B8%AD%E5%9B%BD%E8%B0%83%E7%A0%94%E8%A1%8C%23) `771.8K 🔥` `NEW`
1. [华为开发者大会2026](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%BC%80%E5%8F%91%E8%80%85%E5%A4%A7%E4%BC%9A2026%23) `770.5K 🔥` `NEW`
1. [周兴哲淘汰](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%85%B4%E5%93%B2%E6%B7%98%E6%B1%B0%23) `741.5K 🔥` `NEW`
1. [千万不要长时间戴耳机](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E9%95%BF%E6%97%B6%E9%97%B4%E6%88%B4%E8%80%B3%E6%9C%BA%23) `698.6K 🔥` `NEW`
1. [吃完虾千万不要剧烈运动](https://s.weibo.com/weibo?q=%23%E5%90%83%E5%AE%8C%E8%99%BE%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E5%89%A7%E7%83%88%E8%BF%90%E5%8A%A8%23) `591.5K 🔥` `NEW`
1. [官方通报女大学生腹泻6小时后身亡](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%A4%A7%E5%AD%A6%E7%94%9F%E8%85%B9%E6%B3%BB6%E5%B0%8F%E6%97%B6%E5%90%8E%E8%BA%AB%E4%BA%A1%23) `575.1K 🔥` `NEW`
1. [小米SU7一拆一个不吱声](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3SU7%E4%B8%80%E6%8B%86%E4%B8%80%E4%B8%AA%E4%B8%8D%E5%90%B1%E5%A3%B0%23) `337.3K 🔥` `NEW`
1. [人一旦去过新疆](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E6%97%A6%E5%8E%BB%E8%BF%87%E6%96%B0%E7%96%86%23) `307.9K 🔥` `NEW`
1. [白鹿母校发文 (Bailu alma mater issued a message)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%AF%8D%E6%A0%A1%E5%8F%91%E6%96%87%23) `304.7K 🔥` `NEW`
1. [13岁学生体检误诊艾滋遭学校劝退](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E5%AD%A6%E7%94%9F%E4%BD%93%E6%A3%80%E8%AF%AF%E8%AF%8A%E8%89%BE%E6%BB%8B%E9%81%AD%E5%AD%A6%E6%A0%A1%E5%8A%9D%E9%80%80%23) `292.7K 🔥` `NEW`
1. [郑秀妍被臭到了](https://s.weibo.com/weibo?q=%23%E9%83%91%E7%A7%80%E5%A6%8D%E8%A2%AB%E8%87%AD%E5%88%B0%E4%BA%86%23) `288.3K 🔥` `NEW`
1. [A股股王大跌](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E8%82%A1%E7%8E%8B%E5%A4%A7%E8%B7%8C%23) `282.4K 🔥` `NEW`
1. [挪威队的合照简直治愈强迫症](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81%E9%98%9F%E7%9A%84%E5%90%88%E7%85%A7%E7%AE%80%E7%9B%B4%E6%B2%BB%E6%84%88%E5%BC%BA%E8%BF%AB%E7%97%87%23) `273.5K 🔥` `NEW`
1. [马龙追星蔡依林](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%BF%BD%E6%98%9F%E8%94%A1%E4%BE%9D%E6%9E%97%23) `222.0K 🔥` `NEW`
1. [蔡依林鸟巢上座率](https://s.weibo.com/weibo?q=%23%E8%94%A1%E4%BE%9D%E6%9E%97%E9%B8%9F%E5%B7%A2%E4%B8%8A%E5%BA%A7%E7%8E%87%23) `217.6K 🔥` `NEW`
1. [高考后的家长从夯到拉](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E5%90%8E%E7%9A%84%E5%AE%B6%E9%95%BF%E4%BB%8E%E5%A4%AF%E5%88%B0%E6%8B%89%23) `215.3K 🔥` `NEW`
1. [韦雪晒没整容前的照片](https://s.weibo.com/weibo?q=%23%E9%9F%A6%E9%9B%AA%E6%99%92%E6%B2%A1%E6%95%B4%E5%AE%B9%E5%89%8D%E7%9A%84%E7%85%A7%E7%89%87%23) `213.9K 🔥` `NEW`
1. [歌手今晚淘汰三人](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E4%BB%8A%E6%99%9A%E6%B7%98%E6%B1%B0%E4%B8%89%E4%BA%BA%23) `210.3K 🔥` `NEW`
1. [被一个牛奶刷新认知了 (My knowledge was refreshed by a piece of milk)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E4%B8%80%E4%B8%AA%E7%89%9B%E5%A5%B6%E5%88%B7%E6%96%B0%E8%AE%A4%E7%9F%A5%E4%BA%86%23) `205.3K 🔥` `NEW`
1. [原来歌手这些画面是vivo拍的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%AD%8C%E6%89%8B%E8%BF%99%E4%BA%9B%E7%94%BB%E9%9D%A2%E6%98%AFvivo%E6%8B%8D%E7%9A%84%23) `202.1K 🔥` `NEW`
1. [胡彦斌 有编曲没嗓子](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%BD%A6%E6%96%8C%20%E6%9C%89%E7%BC%96%E6%9B%B2%E6%B2%A1%E5%97%93%E5%AD%90%23) `201.7K 🔥` `NEW`
1. [厄尔尼诺已确认形成](https://s.weibo.com/weibo?q=%23%E5%8E%84%E5%B0%94%E5%B0%BC%E8%AF%BA%E5%B7%B2%E7%A1%AE%E8%AE%A4%E5%BD%A2%E6%88%90%23) `196.7K 🔥` `NEW`
1. [许我耀眼 首尔电视剧大赏](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%88%91%E8%80%80%E7%9C%BC%20%E9%A6%96%E5%B0%94%E7%94%B5%E8%A7%86%E5%89%A7%E5%A4%A7%E8%B5%8F%23) `194.2K 🔥` `NEW`
1. [SpaceX正式上市](https://s.weibo.com/weibo?q=%23SpaceX%E6%AD%A3%E5%BC%8F%E4%B8%8A%E5%B8%82%23) `193.5K 🔥` `NEW`
1. [张碧晨的编曲是仇人编的吗](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%A2%A7%E6%99%A8%E7%9A%84%E7%BC%96%E6%9B%B2%E6%98%AF%E4%BB%87%E4%BA%BA%E7%BC%96%E7%9A%84%E5%90%97%23) `191.5K 🔥` `NEW`
1. [HLE战胜T1](https://s.weibo.com/weibo?q=%23HLE%E6%88%98%E8%83%9CT1%23) `188.4K 🔥` `NEW`
1. [这衣柜不会是男生统一的吧](https://s.weibo.com/weibo?q=%23%E8%BF%99%E8%A1%A3%E6%9F%9C%E4%B8%8D%E4%BC%9A%E6%98%AF%E7%94%B7%E7%94%9F%E7%BB%9F%E4%B8%80%E7%9A%84%E5%90%A7%23) `185.1K 🔥` `NEW`
1. [张碧晨 唱得好听](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%A2%A7%E6%99%A8%20%E5%94%B1%E5%BE%97%E5%A5%BD%E5%90%AC%23) `179.4K 🔥` `NEW`
1. [尤长靖录歌手3期瘦了8斤 (Singer You Changjing lost 8 pounds in period 3)](https://s.weibo.com/weibo?q=%23%E5%B0%A4%E9%95%BF%E9%9D%96%E5%BD%95%E6%AD%8C%E6%89%8B3%E6%9C%9F%E7%98%A6%E4%BA%868%E6%96%A4%23) `168.8K 🔥` `NEW`
1. [汪苏泷这也太明日世界了](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E8%BF%99%E4%B9%9F%E5%A4%AA%E6%98%8E%E6%97%A5%E4%B8%96%E7%95%8C%E4%BA%86%23) `168.5K 🔥` `NEW`
1. [穿洞洞鞋记得坐垂直电梯](https://s.weibo.com/weibo?q=%23%E7%A9%BF%E6%B4%9E%E6%B4%9E%E9%9E%8B%E8%AE%B0%E5%BE%97%E5%9D%90%E5%9E%82%E7%9B%B4%E7%94%B5%E6%A2%AF%23) `168.5K 🔥` `NEW`
1. [赵丽颖 女刑警队长](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%20%E5%A5%B3%E5%88%91%E8%AD%A6%E9%98%9F%E9%95%BF%23) `168.3K 🔥` `NEW`
1. [HLE晋级MSI](https://s.weibo.com/weibo?q=%23HLE%E6%99%8B%E7%BA%A7MSI%23) `167.7K 🔥` `NEW`
1. [小S和大女儿首度节目合体](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E5%92%8C%E5%A4%A7%E5%A5%B3%E5%84%BF%E9%A6%96%E5%BA%A6%E8%8A%82%E7%9B%AE%E5%90%88%E4%BD%93%23) `167.6K 🔥` `NEW`
1. [证监会同意长鑫科技IPO申请](https://s.weibo.com/weibo?q=%23%E8%AF%81%E7%9B%91%E4%BC%9A%E5%90%8C%E6%84%8F%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80IPO%E7%94%B3%E8%AF%B7%23) `167.6K 🔥` `NEW`
1. [雷军回应给工程师发车厘子](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94%E7%BB%99%E5%B7%A5%E7%A8%8B%E5%B8%88%E5%8F%91%E8%BD%A6%E5%8E%98%E5%AD%90%23) `167.4K 🔥` `NEW`
1. [浪姐](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%23) `167.4K 🔥` `NEW`
1. [拿饮料自闭症男孩妈妈登门感谢店主](https://s.weibo.com/weibo?q=%23%E6%8B%BF%E9%A5%AE%E6%96%99%E8%87%AA%E9%97%AD%E7%97%87%E7%94%B7%E5%AD%A9%E5%A6%88%E5%A6%88%E7%99%BB%E9%97%A8%E6%84%9F%E8%B0%A2%E5%BA%97%E4%B8%BB%23) `167.3K 🔥` `NEW`
1. [陈瑶拒绝了张月三次 (Chen Yao rejected Zhang Yue three times)](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E6%8B%92%E7%BB%9D%E4%BA%86%E5%BC%A0%E6%9C%88%E4%B8%89%E6%AC%A1%23) `664.3K 🔥`
1. [球场疼痛急救指南](https://s.weibo.com/weibo?q=%23%E7%90%83%E5%9C%BA%E7%96%BC%E7%97%9B%E6%80%A5%E6%95%91%E6%8C%87%E5%8D%97%23) `648.3K 🔥`
1. [演员表不让单独用艺名了](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E8%A1%A8%E4%B8%8D%E8%AE%A9%E5%8D%95%E7%8B%AC%E7%94%A8%E8%89%BA%E5%90%8D%E4%BA%86%23) `301.9K 🔥`
1. [因为饼干太好吃而察觉到不对劲](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E4%B8%BA%E9%A5%BC%E5%B9%B2%E5%A4%AA%E5%A5%BD%E5%90%83%E8%80%8C%E5%AF%9F%E8%A7%89%E5%88%B0%E4%B8%8D%E5%AF%B9%E5%8A%B2%23) `274.4K 🔥`
1. [世界杯 (world cup)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `235.4K 🔥`
1. [曝迪丽热巴与嘉行到期不续](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%B8%8E%E5%98%89%E8%A1%8C%E5%88%B0%E6%9C%9F%E4%B8%8D%E7%BB%AD%23) `187.2K 🔥`
1. [labubu世界杯销量暴涨30倍 (labubu World Cup sales surge 30 times)](https://s.weibo.com/weibo?q=%23labubu%E4%B8%96%E7%95%8C%E6%9D%AF%E9%94%80%E9%87%8F%E6%9A%B4%E6%B6%A830%E5%80%8D%23) `222.7K 🔥` `-53%`
1. [买连衣裙 看手肘](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E8%BF%9E%E8%A1%A3%E8%A3%99%20%E7%9C%8B%E6%89%8B%E8%82%98%23) `199.1K 🔥` `-74%`
1. [艺人真名艺名汇总](https://s.weibo.com/weibo?q=%23%E8%89%BA%E4%BA%BA%E7%9C%9F%E5%90%8D%E8%89%BA%E5%90%8D%E6%B1%87%E6%80%BB%23) `198.3K 🔥` `-56%`
1. [演员陈敏儿去世](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E9%99%88%E6%95%8F%E5%84%BF%E5%8E%BB%E4%B8%96%23) `189.0K 🔥` `-53%`
1. [张元英的走路姿势 (Zhang Yuanying's walking posture)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E7%9A%84%E8%B5%B0%E8%B7%AF%E5%A7%BF%E5%8A%BF%23) `168.1K 🔥` `-22%`
1. [鸿蒙7](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%997%23) `167.5K 🔥` `-65%`

Updated at 2026-06-12 21:53:05

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
