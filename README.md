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

1. [汪苏泷HBN如七而遇 (Wang Sulong HBN meets like seven)](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7HBN%E5%A6%82%E4%B8%83%E8%80%8C%E9%81%87%23) `1.1M 🔥` `NEW`
1. [易烊千玺用床单当桌布](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E7%94%A8%E5%BA%8A%E5%8D%95%E5%BD%93%E6%A1%8C%E5%B8%83%23) `608.6K 🔥` `NEW`
1. [刘耀文 漂亮孩子站中间](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%20%E6%BC%82%E4%BA%AE%E5%AD%A9%E5%AD%90%E7%AB%99%E4%B8%AD%E9%97%B4%23) `595.1K 🔥` `NEW`
1. [赌博的成瘾性](https://s.weibo.com/weibo?q=%23%E8%B5%8C%E5%8D%9A%E7%9A%84%E6%88%90%E7%98%BE%E6%80%A7%23) `590.2K 🔥` `NEW`
1. [杨幂现场换发型了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%8E%B0%E5%9C%BA%E6%8D%A2%E5%8F%91%E5%9E%8B%E4%BA%86%23) `563.7K 🔥` `NEW`
1. [白海豚 洗衣凝珠视角](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%20%E6%B4%97%E8%A1%A3%E5%87%9D%E7%8F%A0%E8%A7%86%E8%A7%92%23) `562.0K 🔥` `NEW`
1. [女演员炒股亏70万靠年迈母亲接济](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%BC%94%E5%91%98%E7%82%92%E8%82%A1%E4%BA%8F70%E4%B8%87%E9%9D%A0%E5%B9%B4%E8%BF%88%E6%AF%8D%E4%BA%B2%E6%8E%A5%E6%B5%8E%23) `560.3K 🔥` `NEW`
1. [ai漫剧顶流已经出了8季了](https://s.weibo.com/weibo?q=%23ai%E6%BC%AB%E5%89%A7%E9%A1%B6%E6%B5%81%E5%B7%B2%E7%BB%8F%E5%87%BA%E4%BA%868%E5%AD%A3%E4%BA%86%23) `555.5K 🔥` `NEW`
1. [国乒男单 下半区扎堆](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%8D%95%20%E4%B8%8B%E5%8D%8A%E5%8C%BA%E6%89%8E%E5%A0%86%23) `552.7K 🔥` `NEW`
1. [银行行长套取2100多万养豪宅买奢品](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E8%A1%8C%E9%95%BF%E5%A5%97%E5%8F%962100%E5%A4%9A%E4%B8%87%E5%85%BB%E8%B1%AA%E5%AE%85%E4%B9%B0%E5%A5%A2%E5%93%81%23) `550.9K 🔥` `NEW`
1. [越南女子为骗保杀害儿子谎称溺亡 (Vietnamese woman killed her son and lied about drowning to get bail)](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E5%8D%97%E5%A5%B3%E5%AD%90%E4%B8%BA%E9%AA%97%E4%BF%9D%E6%9D%80%E5%AE%B3%E5%84%BF%E5%AD%90%E8%B0%8E%E7%A7%B0%E6%BA%BA%E4%BA%A1%23) `544.0K 🔥` `NEW`
1. [炸鸡店爆单 店员呼吸性碱中毒](https://s.weibo.com/weibo?q=%23%E7%82%B8%E9%B8%A1%E5%BA%97%E7%88%86%E5%8D%95%20%E5%BA%97%E5%91%98%E5%91%BC%E5%90%B8%E6%80%A7%E7%A2%B1%E4%B8%AD%E6%AF%92%23) `537.4K 🔥` `NEW`
1. [果然金饰样式还是复古的好](https://s.weibo.com/weibo?q=%23%E6%9E%9C%E7%84%B6%E9%87%91%E9%A5%B0%E6%A0%B7%E5%BC%8F%E8%BF%98%E6%98%AF%E5%A4%8D%E5%8F%A4%E7%9A%84%E5%A5%BD%23) `503.4K 🔥` `NEW`
1. [百花奖内场座位图](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%E5%86%85%E5%9C%BA%E5%BA%A7%E4%BD%8D%E5%9B%BE%23) `494.8K 🔥` `NEW`
1. [那英回应最烦装的人](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E5%9B%9E%E5%BA%94%E6%9C%80%E7%83%A6%E8%A3%85%E7%9A%84%E4%BA%BA%23) `482.1K 🔥` `NEW`
1. [官方回应建议设立带薪陪考假](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E5%BB%BA%E8%AE%AE%E8%AE%BE%E7%AB%8B%E5%B8%A6%E8%96%AA%E9%99%AA%E8%80%83%E5%81%87%23) `472.1K 🔥` `NEW`
1. [河南大暴雨特大暴雨](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E5%A4%A7%E6%9A%B4%E9%9B%A8%E7%89%B9%E5%A4%A7%E6%9A%B4%E9%9B%A8%23) `464.6K 🔥` `NEW`
1. [央视曝光背刺网友的假种草文](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E8%83%8C%E5%88%BA%E7%BD%91%E5%8F%8B%E7%9A%84%E5%81%87%E7%A7%8D%E8%8D%89%E6%96%87%23) `433.3K 🔥` `NEW`
1. [时代少年团自己排行程](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E8%87%AA%E5%B7%B1%E6%8E%92%E8%A1%8C%E7%A8%8B%23) `402.2K 🔥` `NEW`
1. [杨幂美貌比钻石更闪耀](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%BE%8E%E8%B2%8C%E6%AF%94%E9%92%BB%E7%9F%B3%E6%9B%B4%E9%97%AA%E8%80%80%23) `369.9K 🔥` `NEW`
1. [马丽包场30场沈腾新片 (Ma Li booked 30 performances of Shen Teng's new film)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%B8%BD%E5%8C%85%E5%9C%BA30%E5%9C%BA%E6%B2%88%E8%85%BE%E6%96%B0%E7%89%87%23) `324.3K 🔥` `NEW`
1. [顶顶比董洁高了一头](https://s.weibo.com/weibo?q=%23%E9%A1%B6%E9%A1%B6%E6%AF%94%E8%91%A3%E6%B4%81%E9%AB%98%E4%BA%86%E4%B8%80%E5%A4%B4%23) `320.7K 🔥` `NEW`
1. [为什么每天固定要点咖啡才满足](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%AF%8F%E5%A4%A9%E5%9B%BA%E5%AE%9A%E8%A6%81%E7%82%B9%E5%92%96%E5%95%A1%E6%89%8D%E6%BB%A1%E8%B6%B3%23) `320.2K 🔥` `NEW`
1. [京都偶遇Lisa拍摄](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E9%83%BD%E5%81%B6%E9%81%87Lisa%E6%8B%8D%E6%91%84%23) `316.8K 🔥` `NEW`
1. [张凌赫紫色头发](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%B4%AB%E8%89%B2%E5%A4%B4%E5%8F%91%23) `316.2K 🔥` `NEW`
1. [上海首次将苏州河水强排至黄浦江](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E9%A6%96%E6%AC%A1%E5%B0%86%E8%8B%8F%E5%B7%9E%E6%B2%B3%E6%B0%B4%E5%BC%BA%E6%8E%92%E8%87%B3%E9%BB%84%E6%B5%A6%E6%B1%9F%23) `285.9K 🔥` `NEW`
1. [易烊千玺看镜头的那一下](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E7%9C%8B%E9%95%9C%E5%A4%B4%E7%9A%84%E9%82%A3%E4%B8%80%E4%B8%8B%23) `284.1K 🔥` `NEW`
1. [爆米花冰淇淋追剧新搭子](https://s.weibo.com/weibo?q=%23%E7%88%86%E7%B1%B3%E8%8A%B1%E5%86%B0%E6%B7%87%E6%B7%8B%E8%BF%BD%E5%89%A7%E6%96%B0%E6%90%AD%E5%AD%90%23) `280.9K 🔥` `NEW`
1. [演员秦焰去世](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E7%A7%A6%E7%84%B0%E5%8E%BB%E4%B8%96%23) `3.1M 🔥` `+41%`
1. [深圳APEC峰会倒计时100天](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3APEC%E5%B3%B0%E4%BC%9A%E5%80%92%E8%AE%A1%E6%97%B6100%E5%A4%A9%23) `2.9M 🔥` `+72%`
1. [刘涛推荐人人常备好医保 (Liu Tao recommends everyone to have good medical insurance)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B6%9B%E6%8E%A8%E8%8D%90%E4%BA%BA%E4%BA%BA%E5%B8%B8%E5%A4%87%E5%A5%BD%E5%8C%BB%E4%BF%9D%23) `2.8M 🔥` `+393%`
1. [寿司郎误将已付款顾客当逃单报警 (Sushi man mistakenly called the police after he mistook a paying customer for order avoidance)](https://s.weibo.com/weibo?q=%23%E5%AF%BF%E5%8F%B8%E9%83%8E%E8%AF%AF%E5%B0%86%E5%B7%B2%E4%BB%98%E6%AC%BE%E9%A1%BE%E5%AE%A2%E5%BD%93%E9%80%83%E5%8D%95%E6%8A%A5%E8%AD%A6%23) `2.5M 🔥` `+551%`
1. [女孩南太行失联14天后遗体被找到](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%8D%97%E5%A4%AA%E8%A1%8C%E5%A4%B1%E8%81%9414%E5%A4%A9%E5%90%8E%E9%81%97%E4%BD%93%E8%A2%AB%E6%89%BE%E5%88%B0%23) `2.0M 🔥` `+127%`
1. [百花奖红毯 (Hundred Flowers Awards Red Carpet)](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%E7%BA%A2%E6%AF%AF%23) `1.6M 🔥` `+50%`
1. [偶像来了 重启回归 (Idol is here, reboot and return)](https://s.weibo.com/weibo?q=%23%E5%81%B6%E5%83%8F%E6%9D%A5%E4%BA%86%20%E9%87%8D%E5%90%AF%E5%9B%9E%E5%BD%92%23) `620.8K 🔥` `+63%`
1. [多位大疆员工离职后创业成功](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%BD%8D%E5%A4%A7%E7%96%86%E5%91%98%E5%B7%A5%E7%A6%BB%E8%81%8C%E5%90%8E%E5%88%9B%E4%B8%9A%E6%88%90%E5%8A%9F%23) `616.4K 🔥` `+58%`
1. [Ning爆料Bin彻底不打了](https://s.weibo.com/weibo?q=%23Ning%E7%88%86%E6%96%99Bin%E5%BD%BB%E5%BA%95%E4%B8%8D%E6%89%93%E4%BA%86%23) `611.5K 🔥` `+25%`
1. [泰国被接机女生疑遭带走](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E8%A2%AB%E6%8E%A5%E6%9C%BA%E5%A5%B3%E7%94%9F%E7%96%91%E9%81%AD%E5%B8%A6%E8%B5%B0%23) `596.7K 🔥` `+56%`
1. [龙餐馆](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%23) `493.6K 🔥` `+27%`
1. [短剧女演员百花奖造型](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E5%A5%B3%E6%BC%94%E5%91%98%E7%99%BE%E8%8A%B1%E5%A5%96%E9%80%A0%E5%9E%8B%23) `397.3K 🔥` `+27%`
1. [白海豚突然大拐弯 (White dolphin suddenly makes a sharp turn)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E7%AA%81%E7%84%B6%E5%A4%A7%E6%8B%90%E5%BC%AF%23) `3.4M 🔥`
1. [费大厨撤下全国小炒肉大王称号](https://s.weibo.com/weibo?q=%23%E8%B4%B9%E5%A4%A7%E5%8E%A8%E6%92%A4%E4%B8%8B%E5%85%A8%E5%9B%BD%E5%B0%8F%E7%82%92%E8%82%89%E5%A4%A7%E7%8E%8B%E7%A7%B0%E5%8F%B7%23) `370.1K 🔥`
1. [迪丽热巴曾靠玉米茶叶蛋熬过追梦期 (Dilraba once relied on corn, tea and eggs to survive her dream-chasing period)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%9B%BE%E9%9D%A0%E7%8E%89%E7%B1%B3%E8%8C%B6%E5%8F%B6%E8%9B%8B%E7%86%AC%E8%BF%87%E8%BF%BD%E6%A2%A6%E6%9C%9F%23) `354.4K 🔥`
1. [台风致上海严重内涝](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E8%87%B4%E4%B8%8A%E6%B5%B7%E4%B8%A5%E9%87%8D%E5%86%85%E6%B6%9D%23) `327.0K 🔥`
1. [百花奖造型出图](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%E9%80%A0%E5%9E%8B%E5%87%BA%E5%9B%BE%23) `326.9K 🔥`
1. [孔雪儿自曝拒绝浪姐邀请 (Kong Xueer revealed that she rejected Sister Lang’s invitation)](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E8%87%AA%E6%9B%9D%E6%8B%92%E7%BB%9D%E6%B5%AA%E5%A7%90%E9%82%80%E8%AF%B7%23) `310.8K 🔥`
1. [百花奖](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%23) `285.1K 🔥`
1. [上海台风未发统一停工通知](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%8F%B0%E9%A3%8E%E6%9C%AA%E5%8F%91%E7%BB%9F%E4%B8%80%E5%81%9C%E5%B7%A5%E9%80%9A%E7%9F%A5%23) `281.5K 🔥`
1. [韩国女性怒斥AA制结婚](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%A5%B3%E6%80%A7%E6%80%92%E6%96%A5AA%E5%88%B6%E7%BB%93%E5%A9%9A%23) `280.9K 🔥`
1. [百花奖闭幕式节目单](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%E9%97%AD%E5%B9%95%E5%BC%8F%E8%8A%82%E7%9B%AE%E5%8D%95%23) `280.9K 🔥`
1. [原来90后这么小众](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A590%E5%90%8E%E8%BF%99%E4%B9%88%E5%B0%8F%E4%BC%97%23) `730.8K 🔥` `-42%`
1. [百花奖好多高定](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%E5%A5%BD%E5%A4%9A%E9%AB%98%E5%AE%9A%23) `543.6K 🔥` `-47%`

Updated at 2026-08-10 19:18:16

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
