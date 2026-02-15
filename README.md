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

1. [江苏东海通报烟花爆竹爆燃事故 (Jiangsu Donghai reports fireworks explosion accident)](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%8B%8F%E4%B8%9C%E6%B5%B7%E9%80%9A%E6%8A%A5%E7%83%9F%E8%8A%B1%E7%88%86%E7%AB%B9%E7%88%86%E7%87%83%E4%BA%8B%E6%95%85%23) `322.5K 🔥` `NEW`
1. [黄子弘凡白鹿瞎掰王](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E7%99%BD%E9%B9%BF%E7%9E%8E%E6%8E%B0%E7%8E%8B%23) `317.8K 🔥` `NEW`
1. [王菲凤凰传奇满屏雅俗通杀](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E5%87%A4%E5%87%B0%E4%BC%A0%E5%A5%87%E6%BB%A1%E5%B1%8F%E9%9B%85%E4%BF%97%E9%80%9A%E6%9D%80%23) `272.3K 🔥` `NEW`
1. [王安宇胡先煦范丞丞家乡话拜年](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E8%83%A1%E5%85%88%E7%85%A6%E8%8C%83%E4%B8%9E%E4%B8%9E%E5%AE%B6%E4%B9%A1%E8%AF%9D%E6%8B%9C%E5%B9%B4%23) `215.3K 🔥` `NEW`
1. [杨鸣好帅](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E9%B8%A3%E5%A5%BD%E5%B8%85%23) `159.1K 🔥` `NEW`
1. [伤心swimming 预录取](https://s.weibo.com/weibo?q=%23%E4%BC%A4%E5%BF%83swimming%20%E9%A2%84%E5%BD%95%E5%8F%96%23) `152.0K 🔥` `NEW`
1. [樊振东vs贾哈](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9Cvs%E8%B4%BE%E5%93%88%23) `137.7K 🔥` `NEW`
1. [爱泼斯坦案名单竟出现梦露等人](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%A1%88%E5%90%8D%E5%8D%95%E7%AB%9F%E5%87%BA%E7%8E%B0%E6%A2%A6%E9%9C%B2%E7%AD%89%E4%BA%BA%23) `135.7K 🔥` `NEW`
1. [河南下雪](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%8B%E9%9B%AA%23) `134.1K 🔥` `NEW`
1. [伤心swimming 语言成绩](https://s.weibo.com/weibo?q=%23%E4%BC%A4%E5%BF%83swimming%20%E8%AF%AD%E8%A8%80%E6%88%90%E7%BB%A9%23) `125.6K 🔥` `NEW`
1. [林孝埈用中文真诚回应 (Lin Xiaojun responded sincerely in Chinese)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%88%E7%94%A8%E4%B8%AD%E6%96%87%E7%9C%9F%E8%AF%9A%E5%9B%9E%E5%BA%94%23) `117.8K 🔥` `NEW`
1. [周深郎朗是对我耳朵最好的人](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E9%83%8E%E6%9C%97%E6%98%AF%E5%AF%B9%E6%88%91%E8%80%B3%E6%9C%B5%E6%9C%80%E5%A5%BD%E7%9A%84%E4%BA%BA%23) `117.4K 🔥` `NEW`
1. [黄金中事件 录音](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E4%B8%AD%E4%BA%8B%E4%BB%B6%20%E5%BD%95%E9%9F%B3%23) `113.8K 🔥` `NEW`
1. [日警方被曝伪造2700张交通罚单](https://s.weibo.com/weibo?q=%23%E6%97%A5%E8%AD%A6%E6%96%B9%E8%A2%AB%E6%9B%9D%E4%BC%AA%E9%80%A02700%E5%BC%A0%E4%BA%A4%E9%80%9A%E7%BD%9A%E5%8D%95%23) `100.4K 🔥` `NEW`
1. [谷爱凌已获额外测试训练邀请](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%B7%B2%E8%8E%B7%E9%A2%9D%E5%A4%96%E6%B5%8B%E8%AF%95%E8%AE%AD%E7%BB%83%E9%82%80%E8%AF%B7%23) `100.4K 🔥` `NEW`
1. [曾舜晞星空舞台](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%88%9C%E6%99%9E%E6%98%9F%E7%A9%BA%E8%88%9E%E5%8F%B0%23) `99.2K 🔥` `NEW`
1. [生命树大结局](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E5%A4%A7%E7%BB%93%E5%B1%80%23) `436.2K 🔥` `+47%`
1. [元宝红包](https://s.weibo.com/weibo?q=%23%E5%85%83%E5%AE%9D%E7%BA%A2%E5%8C%85%23) `390.2K 🔥` `+156%`
1. [王菲只需轻轻出手](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E5%8F%AA%E9%9C%80%E8%BD%BB%E8%BD%BB%E5%87%BA%E6%89%8B%23) `387.1K 🔥` `+31%`
1. [姐姐脱落的乳牙呛入1岁宝宝气道](https://s.weibo.com/weibo?q=%23%E5%A7%90%E5%A7%90%E8%84%B1%E8%90%BD%E7%9A%84%E4%B9%B3%E7%89%99%E5%91%9B%E5%85%A51%E5%B2%81%E5%AE%9D%E5%AE%9D%E6%B0%94%E9%81%93%23) `324.3K 🔥` `+79%`
1. [黄子弘凡与父亲责任各自独立 (Huang Zihongfan and his father have independent responsibilities)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E4%B8%8E%E7%88%B6%E4%BA%B2%E8%B4%A3%E4%BB%BB%E5%90%84%E8%87%AA%E7%8B%AC%E7%AB%8B%23) `323.3K 🔥` `+29%`
1. [冯远征妻子梁丹妮退休团拜会献舞 (Feng Yuanzheng’s wife Liang Danni performs dance at retirement group visit)](https://s.weibo.com/weibo?q=%23%E5%86%AF%E8%BF%9C%E5%BE%81%E5%A6%BB%E5%AD%90%E6%A2%81%E4%B8%B9%E5%A6%AE%E9%80%80%E4%BC%91%E5%9B%A2%E6%8B%9C%E4%BC%9A%E7%8C%AE%E8%88%9E%23) `321.6K 🔥` `+107%`
1. [李宗恒小品 旧梗](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%97%E6%81%92%E5%B0%8F%E5%93%81%20%E6%97%A7%E6%A2%97%23) `321.1K 🔥` `+46%`
1. [大胖媳妇非教武大靖滑冰](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%83%96%E5%AA%B3%E5%A6%87%E9%9D%9E%E6%95%99%E6%AD%A6%E5%A4%A7%E9%9D%96%E6%BB%91%E5%86%B0%23) `320.4K 🔥` `+25%`
1. [男子聚会被下药提前离场躲过一劫](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%81%9A%E4%BC%9A%E8%A2%AB%E4%B8%8B%E8%8D%AF%E6%8F%90%E5%89%8D%E7%A6%BB%E5%9C%BA%E8%BA%B2%E8%BF%87%E4%B8%80%E5%8A%AB%23) `236.6K 🔥` `+51%`
1. [白敬亭 宋轶 (Bai Jingting Song Yi)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%20%E5%AE%8B%E8%BD%B6%23) `224.8K 🔥` `+44%`
1. [汪苏泷毛衣](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E6%AF%9B%E8%A1%A3%23) `174.4K 🔥` `+38%`
1. [黄金和房子买哪个更保值](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%92%8C%E6%88%BF%E5%AD%90%E4%B9%B0%E5%93%AA%E4%B8%AA%E6%9B%B4%E4%BF%9D%E5%80%BC%23) `133.0K 🔥` `+50%`
1. [川渝春晚节目单](https://s.weibo.com/weibo?q=%23%E5%B7%9D%E6%B8%9D%E6%98%A5%E6%99%9A%E8%8A%82%E7%9B%AE%E5%8D%95%23) `100.4K 🔥` `+21%`
1. [2026红包分组 (2026 red envelope grouping)](https://s.weibo.com/weibo?q=%232026%E7%BA%A2%E5%8C%85%E5%88%86%E7%BB%84%23) `1.1M 🔥`
1. [千问红包雨 (Qianwen red envelope rain)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E7%BA%A2%E5%8C%85%E9%9B%A8%23) `843.9K 🔥`
1. [咱们空间站过年氛围拉满了 (Our space station is full of Chinese New Year atmosphere)](https://s.weibo.com/weibo?q=%23%E5%92%B1%E4%BB%AC%E7%A9%BA%E9%97%B4%E7%AB%99%E8%BF%87%E5%B9%B4%E6%B0%9B%E5%9B%B4%E6%8B%89%E6%BB%A1%E4%BA%86%23) `644.1K 🔥`
1. [春晚彩排 (Spring Festival Gala rehearsal)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E5%BD%A9%E6%8E%92%23) `468.2K 🔥`
1. [高速免费倒计时全国车主统一操作 (High-speed free countdown is unified for car owners across the country)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%80%9F%E5%85%8D%E8%B4%B9%E5%80%92%E8%AE%A1%E6%97%B6%E5%85%A8%E5%9B%BD%E8%BD%A6%E4%B8%BB%E7%BB%9F%E4%B8%80%E6%93%8D%E4%BD%9C%23) `323.5K 🔥`
1. [樊振东身穿中国红队服](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%BA%AB%E7%A9%BF%E4%B8%AD%E5%9B%BD%E7%BA%A2%E9%98%9F%E6%9C%8D%23) `320.4K 🔥`
1. [00后已经快奔三了 (The post-00s generation is about to run into third grade.)](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E5%B7%B2%E7%BB%8F%E5%BF%AB%E5%A5%94%E4%B8%89%E4%BA%86%23) `275.6K 🔥`
1. [日本男子全文背滕王阁序免票进景区](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%94%B7%E5%AD%90%E5%85%A8%E6%96%87%E8%83%8C%E6%BB%95%E7%8E%8B%E9%98%81%E5%BA%8F%E5%85%8D%E7%A5%A8%E8%BF%9B%E6%99%AF%E5%8C%BA%23) `237.1K 🔥`
1. [几杯去世](https://s.weibo.com/weibo?q=%23%E5%87%A0%E6%9D%AF%E5%8E%BB%E4%B8%96%23) `176.1K 🔥`
1. [有人把4万元金饰剪碎做成美甲 (Someone cut up 40,000 yuan of gold jewelry and made it into manicure)](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%BA%E6%8A%8A4%E4%B8%87%E5%85%83%E9%87%91%E9%A5%B0%E5%89%AA%E7%A2%8E%E5%81%9A%E6%88%90%E7%BE%8E%E7%94%B2%23) `169.7K 🔥`
1. [程晓玥自曝怀二胎吃了很多垃圾食品 (Cheng Xiaoyue revealed that she ate a lot of junk food while pregnant with her second child)](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%99%93%E7%8E%A5%E8%87%AA%E6%9B%9D%E6%80%80%E4%BA%8C%E8%83%8E%E5%90%83%E4%BA%86%E5%BE%88%E5%A4%9A%E5%9E%83%E5%9C%BE%E9%A3%9F%E5%93%81%23) `124.6K 🔥`
1. [张水华爆火辞职后现状 (Zhang Shuihua’s current situation after his explosive resignation)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%B0%B4%E5%8D%8E%E7%88%86%E7%81%AB%E8%BE%9E%E8%81%8C%E5%90%8E%E7%8E%B0%E7%8A%B6%23) `120.2K 🔥`
1. [单板滑雪男子坡障技巧预赛](https://s.weibo.com/weibo?q=%23%E5%8D%95%E6%9D%BF%E6%BB%91%E9%9B%AA%E7%94%B7%E5%AD%90%E5%9D%A1%E9%9A%9C%E6%8A%80%E5%B7%A7%E9%A2%84%E8%B5%9B%23) `100.4K 🔥`
1. [除夕夜微博抢红包攻略](https://s.weibo.com/weibo?q=%23%E9%99%A4%E5%A4%95%E5%A4%9C%E5%BE%AE%E5%8D%9A%E6%8A%A2%E7%BA%A2%E5%8C%85%E6%94%BB%E7%95%A5%23) `91.6K 🔥`
1. [Angelababy邓超即将合拍 (Angelababy Deng Chao is about to be co-produced)](https://s.weibo.com/weibo?q=%23Angelababy%E9%82%93%E8%B6%85%E5%8D%B3%E5%B0%86%E5%90%88%E6%8B%8D%23) `87.0K 🔥`
1. [除夕晚8上京东抢大牌手机大牌酒 (Go to JD.com to grab big-name mobile phones and big-name wines at 8pm on New Year’s Eve)](https://s.weibo.com/weibo?q=%23%E9%99%A4%E5%A4%95%E6%99%9A8%E4%B8%8A%E4%BA%AC%E4%B8%9C%E6%8A%A2%E5%A4%A7%E7%89%8C%E6%89%8B%E6%9C%BA%E5%A4%A7%E7%89%8C%E9%85%92%23) `630.1K 🔥` `-21%`
1. [辽宁卫视春晚](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E5%8D%AB%E8%A7%86%E6%98%A5%E6%99%9A%23) `360.4K 🔥` `-39%`
1. [烟花](https://s.weibo.com/weibo?q=%23%E7%83%9F%E8%8A%B1%23) `98.2K 🔥` `-34%`
1. [辽宁春晚 于适骑马出场](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E6%98%A5%E6%99%9A%20%E4%BA%8E%E9%80%82%E9%AA%91%E9%A9%AC%E5%87%BA%E5%9C%BA%23) `91.0K 🔥` `-52%`
1. [迪丽热巴说酒店不让贴春联](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%AF%B4%E9%85%92%E5%BA%97%E4%B8%8D%E8%AE%A9%E8%B4%B4%E6%98%A5%E8%81%94%23) `89.7K 🔥` `-34%`
1. [女子打开野餐垫袋子掉出一条蛇](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%89%93%E5%BC%80%E9%87%8E%E9%A4%90%E5%9E%AB%E8%A2%8B%E5%AD%90%E6%8E%89%E5%87%BA%E4%B8%80%E6%9D%A1%E8%9B%87%23) `89.5K 🔥` `-32%`
1. [国际雪联回应谷爱凌吐槽](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E9%9B%AA%E8%81%94%E5%9B%9E%E5%BA%94%E8%B0%B7%E7%88%B1%E5%87%8C%E5%90%90%E6%A7%BD%23) `86.4K 🔥` `-54%`

Updated at 2026-02-15 22:00:07

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
