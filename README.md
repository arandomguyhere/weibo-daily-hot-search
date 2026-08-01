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

1. [出生时被抱错两女子错换37年人生 (Two women who were carried in the wrong arms at birth exchanged 37 years of their lives.)](https://s.weibo.com/weibo?q=%23%E5%87%BA%E7%94%9F%E6%97%B6%E8%A2%AB%E6%8A%B1%E9%94%99%E4%B8%A4%E5%A5%B3%E5%AD%90%E9%94%99%E6%8D%A237%E5%B9%B4%E4%BA%BA%E7%94%9F%23) `1.1M 🔥` `NEW`
1. [找对象的尽头是初高中同学](https://s.weibo.com/weibo?q=%23%E6%89%BE%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%B0%BD%E5%A4%B4%E6%98%AF%E5%88%9D%E9%AB%98%E4%B8%AD%E5%90%8C%E5%AD%A6%23) `578.8K 🔥` `NEW`
1. [年会不能停2我的理想打工副本](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E4%BC%9A%E4%B8%8D%E8%83%BD%E5%81%9C2%E6%88%91%E7%9A%84%E7%90%86%E6%83%B3%E6%89%93%E5%B7%A5%E5%89%AF%E6%9C%AC%23) `559.6K 🔥` `NEW`
1. [杭州暴雨](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E6%9A%B4%E9%9B%A8%23) `439.3K 🔥` `NEW`
1. [TF四代五公稳了](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E4%BA%94%E5%85%AC%E7%A8%B3%E4%BA%86%23) `429.7K 🔥` `NEW`
1. [杨丞琳回应头发忽长忽短](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E4%B8%9E%E7%90%B3%E5%9B%9E%E5%BA%94%E5%A4%B4%E5%8F%91%E5%BF%BD%E9%95%BF%E5%BF%BD%E7%9F%AD%23) `412.2K 🔥` `NEW`
1. [C罗回应被AI评为史上最出名运动员](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%9B%9E%E5%BA%94%E8%A2%ABAI%E8%AF%84%E4%B8%BA%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%87%BA%E5%90%8D%E8%BF%90%E5%8A%A8%E5%91%98%23) `349.8K 🔥` `NEW`
1. [TOP青岛演唱会设备车倾撒](https://s.weibo.com/weibo?q=%23TOP%E9%9D%92%E5%B2%9B%E6%BC%94%E5%94%B1%E4%BC%9A%E8%AE%BE%E5%A4%87%E8%BD%A6%E5%80%BE%E6%92%92%23) `327.0K 🔥` `NEW`
1. [国家电网坚决拥护党中央决定](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E7%94%B5%E7%BD%91%E5%9D%9A%E5%86%B3%E6%8B%A5%E6%8A%A4%E5%85%9A%E4%B8%AD%E5%A4%AE%E5%86%B3%E5%AE%9A%23) `322.8K 🔥` `NEW`
1. [左奇函杨博文选曲骨骼谢幕](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E5%A5%87%E5%87%BD%E6%9D%A8%E5%8D%9A%E6%96%87%E9%80%89%E6%9B%B2%E9%AA%A8%E9%AA%BC%E8%B0%A2%E5%B9%95%23) `321.8K 🔥` `NEW`
1. [TF五代小孩加李煜东微信的方式 (How TF fifth-generation children add Li Yudong to WeChat)](https://s.weibo.com/weibo?q=%23TF%E4%BA%94%E4%BB%A3%E5%B0%8F%E5%AD%A9%E5%8A%A0%E6%9D%8E%E7%85%9C%E4%B8%9C%E5%BE%AE%E4%BF%A1%E7%9A%84%E6%96%B9%E5%BC%8F%23) `318.5K 🔥` `NEW`
1. [微博文化交流之夜](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E6%96%87%E5%8C%96%E4%BA%A4%E6%B5%81%E4%B9%8B%E5%A4%9C%23) `310.8K 🔥` `NEW`
1. [两女子被抱错37年人生轨迹截然不同](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%A5%B3%E5%AD%90%E8%A2%AB%E6%8A%B1%E9%94%9937%E5%B9%B4%E4%BA%BA%E7%94%9F%E8%BD%A8%E8%BF%B9%E6%88%AA%E7%84%B6%E4%B8%8D%E5%90%8C%23) `275.5K 🔥` `NEW`
1. [贷款百万开制冰厂遇旺季月赚30万](https://s.weibo.com/weibo?q=%23%E8%B4%B7%E6%AC%BE%E7%99%BE%E4%B8%87%E5%BC%80%E5%88%B6%E5%86%B0%E5%8E%82%E9%81%87%E6%97%BA%E5%AD%A3%E6%9C%88%E8%B5%9A30%E4%B8%87%23) `188.3K 🔥` `NEW`
1. [突围](https://s.weibo.com/weibo?q=%23%E7%AA%81%E5%9B%B4%23) `170.3K 🔥` `NEW`
1. [任嘉伦红毯天资](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%98%89%E4%BC%A6%E7%BA%A2%E6%AF%AF%E5%A4%A9%E8%B5%84%23) `167.6K 🔥` `NEW`
1. [陈瑶霍仙姑下沉市场口碑](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E9%9C%8D%E4%BB%99%E5%A7%91%E4%B8%8B%E6%B2%89%E5%B8%82%E5%9C%BA%E5%8F%A3%E7%A2%91%23) `163.9K 🔥` `NEW`
1. [ACT对战北京WBG](https://s.weibo.com/weibo?q=%23ACT%E5%AF%B9%E6%88%98%E5%8C%97%E4%BA%ACWBG%23) `158.2K 🔥` `NEW`
1. [5万人游进西班牙后4.8万人游回去了](https://s.weibo.com/weibo?q=%235%E4%B8%87%E4%BA%BA%E6%B8%B8%E8%BF%9B%E8%A5%BF%E7%8F%AD%E7%89%99%E5%90%8E4.8%E4%B8%87%E4%BA%BA%E6%B8%B8%E5%9B%9E%E5%8E%BB%E4%BA%86%23) `134.0K 🔥` `NEW`
1. [最高检发布破坏军婚典型案例](https://s.weibo.com/weibo?q=%23%E6%9C%80%E9%AB%98%E6%A3%80%E5%8F%91%E5%B8%83%E7%A0%B4%E5%9D%8F%E5%86%9B%E5%A9%9A%E5%85%B8%E5%9E%8B%E6%A1%88%E4%BE%8B%23) `129.3K 🔥` `NEW`
1. [光遇 (light encounter)](https://s.weibo.com/weibo?q=%23%E5%85%89%E9%81%87%23) `108.3K 🔥` `NEW`
1. [A股半导体板块市值](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%8D%8A%E5%AF%BC%E4%BD%93%E6%9D%BF%E5%9D%97%E5%B8%82%E5%80%BC%23) `101.6K 🔥` `NEW`
1. [女子住酒店退房搬空用品只剩电视](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BD%8F%E9%85%92%E5%BA%97%E9%80%80%E6%88%BF%E6%90%AC%E7%A9%BA%E7%94%A8%E5%93%81%E5%8F%AA%E5%89%A9%E7%94%B5%E8%A7%86%23) `793.6K 🔥` `+53%`
1. [奥德赛 (Odyssey)](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%BE%B7%E8%B5%9B%23) `728.6K 🔥` `+132%`
1. [登机柜台出现了好小众词汇](https://s.weibo.com/weibo?q=%23%E7%99%BB%E6%9C%BA%E6%9F%9C%E5%8F%B0%E5%87%BA%E7%8E%B0%E4%BA%86%E5%A5%BD%E5%B0%8F%E4%BC%97%E8%AF%8D%E6%B1%87%23) `433.0K 🔥` `+140%`
1. [奇瑞七月销量276820辆](https://s.weibo.com/weibo?q=%23%E5%A5%87%E7%91%9E%E4%B8%83%E6%9C%88%E9%94%80%E9%87%8F276820%E8%BE%86%23) `430.1K 🔥` `+43%`
1. [时差3阵容遭质疑](https://s.weibo.com/weibo?q=%23%E6%97%B6%E5%B7%AE3%E9%98%B5%E5%AE%B9%E9%81%AD%E8%B4%A8%E7%96%91%23) `413.8K 🔥` `+76%`
1. [21岁女子漂流呛水后吐血不止](https://s.weibo.com/weibo?q=%2321%E5%B2%81%E5%A5%B3%E5%AD%90%E6%BC%82%E6%B5%81%E5%91%9B%E6%B0%B4%E5%90%8E%E5%90%90%E8%A1%80%E4%B8%8D%E6%AD%A2%23) `324.4K 🔥` `+86%`
1. [俄罗斯姐弟在泰国被杀害](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E5%A7%90%E5%BC%9F%E5%9C%A8%E6%B3%B0%E5%9B%BD%E8%A2%AB%E6%9D%80%E5%AE%B3%23) `301.6K 🔥` `+59%`
1. [房主任改变不了女儿重复自己的命运](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%BB%E4%BB%BB%E6%94%B9%E5%8F%98%E4%B8%8D%E4%BA%86%E5%A5%B3%E5%84%BF%E9%87%8D%E5%A4%8D%E8%87%AA%E5%B7%B1%E7%9A%84%E5%91%BD%E8%BF%90%23) `299.1K 🔥` `+51%`
1. [外婆朋友圈背景是床边一面墙](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%A9%86%E6%9C%8B%E5%8F%8B%E5%9C%88%E8%83%8C%E6%99%AF%E6%98%AF%E5%BA%8A%E8%BE%B9%E4%B8%80%E9%9D%A2%E5%A2%99%23) `234.9K 🔥` `+46%`
1. [歼15飞行员雨中盲操安全着舰 (A J-15 pilot made a safe landing in the rain blindly)](https://s.weibo.com/weibo?q=%23%E6%AD%BC15%E9%A3%9E%E8%A1%8C%E5%91%98%E9%9B%A8%E4%B8%AD%E7%9B%B2%E6%93%8D%E5%AE%89%E5%85%A8%E7%9D%80%E8%88%B0%23) `747.2K 🔥`
1. [逐玉作者道歉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E4%BD%9C%E8%80%85%E9%81%93%E6%AD%89%23) `739.9K 🔥`
1. [森碟都会开车了](https://s.weibo.com/weibo?q=%23%E6%A3%AE%E7%A2%9F%E9%83%BD%E4%BC%9A%E5%BC%80%E8%BD%A6%E4%BA%86%23) `429.9K 🔥`
1. [黄多多晒与弟弟妹妹合影](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A%E6%99%92%E4%B8%8E%E5%BC%9F%E5%BC%9F%E5%A6%B9%E5%A6%B9%E5%90%88%E5%BD%B1%23) `406.1K 🔥`
1. [皇马给维尼修斯下续约最后通牒](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%AC%E7%BB%99%E7%BB%B4%E5%B0%BC%E4%BF%AE%E6%96%AF%E4%B8%8B%E7%BB%AD%E7%BA%A6%E6%9C%80%E5%90%8E%E9%80%9A%E7%89%92%23) `326.8K 🔥`
1. [借1万块1年利息掏了2400元](https://s.weibo.com/weibo?q=%23%E5%80%9F1%E4%B8%87%E5%9D%971%E5%B9%B4%E5%88%A9%E6%81%AF%E6%8E%8F%E4%BA%862400%E5%85%83%23) `319.5K 🔥`
1. [网传谢娜歌手歌王之战帮唱](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E8%B0%A2%E5%A8%9C%E6%AD%8C%E6%89%8B%E6%AD%8C%E7%8E%8B%E4%B9%8B%E6%88%98%E5%B8%AE%E5%94%B1%23) `281.2K 🔥`
1. [罗正口碑](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%AD%A3%E5%8F%A3%E7%A2%91%23) `275.4K 🔥`
1. [Wolves对战FPX.ZQ (Wolves vs. FPX.ZQ)](https://s.weibo.com/weibo?q=%23Wolves%E5%AF%B9%E6%88%98FPX.ZQ%23) `193.0K 🔥`
1. [任嘉伦红毯压轴出场 (Ren Jialun makes the red carpet finale)](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%98%89%E4%BC%A6%E7%BA%A2%E6%AF%AF%E5%8E%8B%E8%BD%B4%E5%87%BA%E5%9C%BA%23) `129.7K 🔥`
1. [新疆IP网友称大盘鸡里有土豆](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%96%86IP%E7%BD%91%E5%8F%8B%E7%A7%B0%E5%A4%A7%E7%9B%98%E9%B8%A1%E9%87%8C%E6%9C%89%E5%9C%9F%E8%B1%86%23) `126.8K 🔥`
1. [陈瑶霍仙姑下线了](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E9%9C%8D%E4%BB%99%E5%A7%91%E4%B8%8B%E7%BA%BF%E4%BA%86%23) `512.7K 🔥` `-23%`
1. [这样的外卖才配收我的打包费 (Only this kind of takeout deserves my packing fee)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%A0%B7%E7%9A%84%E5%A4%96%E5%8D%96%E6%89%8D%E9%85%8D%E6%94%B6%E6%88%91%E7%9A%84%E6%89%93%E5%8C%85%E8%B4%B9%23) `416.4K 🔥` `-28%`
1. [曝Jiejie离开WBG原因](https://s.weibo.com/weibo?q=%23%E6%9B%9DJiejie%E7%A6%BB%E5%BC%80WBG%E5%8E%9F%E5%9B%A0%23) `170.1K 🔥` `-25%`
1. [jiejie EDG](https://s.weibo.com/weibo?q=%23jiejie%20EDG%23) `167.3K 🔥` `-65%`
1. [DeepSeekV4Flash 便宜](https://s.weibo.com/weibo?q=%23DeepSeekV4Flash%20%E4%BE%BF%E5%AE%9C%23) `129.9K 🔥` `-33%`
1. [TES打野](https://s.weibo.com/weibo?q=%23TES%E6%89%93%E9%87%8E%23) `116.1K 🔥` `-32%`
1. [登陆少年5o呢](https://s.weibo.com/weibo?q=%23%E7%99%BB%E9%99%86%E5%B0%91%E5%B9%B45o%E5%91%A2%23) `110.0K 🔥` `-48%`
1. [白鹿苏醒给时代少年团送花篮了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%8B%8F%E9%86%92%E7%BB%99%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E9%80%81%E8%8A%B1%E7%AF%AE%E4%BA%86%23) `108.4K 🔥` `-35%`
1. [我们的少年时代2](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%23) `108.2K 🔥` `-61%`

Updated at 2026-08-01 20:03:59

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
