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

1. [比亚迪秦MAX上市9.99万起 (BYD Qin MAX launched starting at 99,900)](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E7%A7%A6MAX%E4%B8%8A%E5%B8%829.99%E4%B8%87%E8%B5%B7%23) `576.4K 🔥` `NEW`
1. [地铁站也能办结婚证了](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E9%93%81%E7%AB%99%E4%B9%9F%E8%83%BD%E5%8A%9E%E7%BB%93%E5%A9%9A%E8%AF%81%E4%BA%86%23) `372.6K 🔥` `NEW`
1. [王者联动电影八仙](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%81%94%E5%8A%A8%E7%94%B5%E5%BD%B1%E5%85%AB%E4%BB%99%23) `324.3K 🔥` `NEW`
1. [方芳 地狱笑话](https://s.weibo.com/weibo?q=%23%E6%96%B9%E8%8A%B3%20%E5%9C%B0%E7%8B%B1%E7%AC%91%E8%AF%9D%23) `320.1K 🔥` `NEW`
1. [网友给支付宝答题疯狂摇人](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E7%BB%99%E6%94%AF%E4%BB%98%E5%AE%9D%E7%AD%94%E9%A2%98%E7%96%AF%E7%8B%82%E6%91%87%E4%BA%BA%23) `248.9K 🔥` `NEW`
1. [朱志鑫示意TOP队员起立](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E7%A4%BA%E6%84%8FTOP%E9%98%9F%E5%91%98%E8%B5%B7%E7%AB%8B%23) `231.0K 🔥` `NEW`
1. [河南一养殖户上千头猪被洪水冲走](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%80%E5%85%BB%E6%AE%96%E6%88%B7%E4%B8%8A%E5%8D%83%E5%A4%B4%E7%8C%AA%E8%A2%AB%E6%B4%AA%E6%B0%B4%E5%86%B2%E8%B5%B0%23) `229.9K 🔥` `NEW`
1. [夫妻分房睡的真实原因找到了](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E5%88%86%E6%88%BF%E7%9D%A1%E7%9A%84%E7%9C%9F%E5%AE%9E%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `223.3K 🔥` `NEW`
1. [上海财务自由姐姐住在武康大楼](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E8%B4%A2%E5%8A%A1%E8%87%AA%E7%94%B1%E5%A7%90%E5%A7%90%E4%BD%8F%E5%9C%A8%E6%AD%A6%E5%BA%B7%E5%A4%A7%E6%A5%BC%23) `211.5K 🔥` `NEW`
1. [曾沛慈费加罗封面预告](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E8%B4%B9%E5%8A%A0%E7%BD%97%E5%B0%81%E9%9D%A2%E9%A2%84%E5%91%8A%23) `186.6K 🔥` `NEW`
1. [WE对战TES (WE vs. TES)](https://s.weibo.com/weibo?q=%23WE%E5%AF%B9%E6%88%98TES%23) `178.7K 🔥` `NEW`
1. [胡锡进北戴河偶遇俄罗斯伤兵](https://s.weibo.com/weibo?q=%23%E8%83%A1%E9%94%A1%E8%BF%9B%E5%8C%97%E6%88%B4%E6%B2%B3%E5%81%B6%E9%81%87%E4%BF%84%E7%BD%97%E6%96%AF%E4%BC%A4%E5%85%B5%23) `151.6K 🔥` `NEW`
1. [豆包学了艺术belike](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%AD%A6%E4%BA%86%E8%89%BA%E6%9C%AFbelike%23) `141.3K 🔥` `NEW`
1. [虞书欣肩颈线](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%82%A9%E9%A2%88%E7%BA%BF%23) `139.9K 🔥` `NEW`
1. [34岁女子肾衰透析8年意外怀孕](https://s.weibo.com/weibo?q=%2334%E5%B2%81%E5%A5%B3%E5%AD%90%E8%82%BE%E8%A1%B0%E9%80%8F%E6%9E%908%E5%B9%B4%E6%84%8F%E5%A4%96%E6%80%80%E5%AD%95%23) `139.0K 🔥` `NEW`
1. [柳柳vlog](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%9F%B3vlog%23) `136.9K 🔥` `NEW`
1. [刷到司机猝死视频发现主角是自己](https://s.weibo.com/weibo?q=%23%E5%88%B7%E5%88%B0%E5%8F%B8%E6%9C%BA%E7%8C%9D%E6%AD%BB%E8%A7%86%E9%A2%91%E5%8F%91%E7%8E%B0%E4%B8%BB%E8%A7%92%E6%98%AF%E8%87%AA%E5%B7%B1%23) `132.8K 🔥` `NEW`
1. [T1对战DK](https://s.weibo.com/weibo?q=%23T1%E5%AF%B9%E6%88%98DK%23) `130.8K 🔥` `NEW`
1. [甘肃省副省长程晓波被查](https://s.weibo.com/weibo?q=%23%E7%94%98%E8%82%83%E7%9C%81%E5%89%AF%E7%9C%81%E9%95%BF%E7%A8%8B%E6%99%93%E6%B3%A2%E8%A2%AB%E6%9F%A5%23) `820.9K 🔥` `+272%`
1. [朋友圈永远不会有二次编辑功能](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E6%B0%B8%E8%BF%9C%E4%B8%8D%E4%BC%9A%E6%9C%89%E4%BA%8C%E6%AC%A1%E7%BC%96%E8%BE%91%E5%8A%9F%E8%83%BD%23) `417.4K 🔥` `+40%`
1. [晋江作品尺度新规 (Jinjiang’s New Regulations on Work Scales)](https://s.weibo.com/weibo?q=%23%E6%99%8B%E6%B1%9F%E4%BD%9C%E5%93%81%E5%B0%BA%E5%BA%A6%E6%96%B0%E8%A7%84%23) `324.4K 🔥` `+91%`
1. [公司该缴的社保 个人承担](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E8%AF%A5%E7%BC%B4%E7%9A%84%E7%A4%BE%E4%BF%9D%20%E4%B8%AA%E4%BA%BA%E6%89%BF%E6%8B%85%23) `321.3K 🔥` `+21%`
1. [朱一龙空枪海报C位](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E7%A9%BA%E6%9E%AA%E6%B5%B7%E6%8A%A5C%E4%BD%8D%23) `317.4K 🔥` `+21%`
1. [空枪好多影帝影后](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%E5%A5%BD%E5%A4%9A%E5%BD%B1%E5%B8%9D%E5%BD%B1%E5%90%8E%23) `206.3K 🔥` `+25%`
1. [胖东来涨租房东不种地摘果子](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E6%B6%A8%E7%A7%9F%E6%88%BF%E4%B8%9C%E4%B8%8D%E7%A7%8D%E5%9C%B0%E6%91%98%E6%9E%9C%E5%AD%90%23) `1.1M 🔥`
1. [6图看美丽中国建设十五五规划 (6 pictures to see the 15th Five-Year Plan for the Construction of Beautiful China)](https://s.weibo.com/weibo?q=%236%E5%9B%BE%E7%9C%8B%E7%BE%8E%E4%B8%BD%E4%B8%AD%E5%9B%BD%E5%BB%BA%E8%AE%BE%E5%8D%81%E4%BA%94%E4%BA%94%E8%A7%84%E5%88%92%23) `644.6K 🔥`
1. [龙餐馆否认偷票房](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%E5%90%A6%E8%AE%A4%E5%81%B7%E7%A5%A8%E6%88%BF%23) `324.2K 🔥`
1. [商务局回应胖东来生活广场涨租闭店](https://s.weibo.com/weibo?q=%23%E5%95%86%E5%8A%A1%E5%B1%80%E5%9B%9E%E5%BA%94%E8%83%96%E4%B8%9C%E6%9D%A5%E7%94%9F%E6%B4%BB%E5%B9%BF%E5%9C%BA%E6%B6%A8%E7%A7%9F%E9%97%AD%E5%BA%97%23) `323.5K 🔥`
1. [Lisa道歉](https://s.weibo.com/weibo?q=%23Lisa%E9%81%93%E6%AD%89%23) `322.0K 🔥`
1. [小酒窝房间简直是我小时候的梦中情房](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E6%88%BF%E9%97%B4%E7%AE%80%E7%9B%B4%E6%98%AF%E6%88%91%E5%B0%8F%E6%97%B6%E5%80%99%E7%9A%84%E6%A2%A6%E4%B8%AD%E6%83%85%E6%88%BF%23) `319.4K 🔥`
1. [让豆包把所有前任的脸融一起了](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E8%B1%86%E5%8C%85%E6%8A%8A%E6%89%80%E6%9C%89%E5%89%8D%E4%BB%BB%E7%9A%84%E8%84%B8%E8%9E%8D%E4%B8%80%E8%B5%B7%E4%BA%86%23) `317.5K 🔥`
1. [王橹杰出发图 (Wang Lujie's hair picture)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%87%BA%E5%8F%91%E5%9B%BE%23) `282.7K 🔥`
1. [明年或出现最严重存储荒 (The most serious storage shortage may occur next year)](https://s.weibo.com/weibo?q=%23%E6%98%8E%E5%B9%B4%E6%88%96%E5%87%BA%E7%8E%B0%E6%9C%80%E4%B8%A5%E9%87%8D%E5%AD%98%E5%82%A8%E8%8D%92%23) `253.4K 🔥`
1. [空枪 极限定档](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%20%E6%9E%81%E9%99%90%E5%AE%9A%E6%A1%A3%23) `246.7K 🔥`
1. [曝王嘉尔宋雨琦恋情 (Wang Jiaer and Song Yuqi's romance revealed)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E5%98%89%E5%B0%94%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%81%8B%E6%83%85%23) `245.9K 🔥`
1. [世界杯决赛西班牙犯规 (Spain foul in World Cup final)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%E8%A5%BF%E7%8F%AD%E7%89%99%E7%8A%AF%E8%A7%84%23) `245.4K 🔥`
1. [张雅琪 湖南卫视下场](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%20%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E4%B8%8B%E5%9C%BA%23) `245.1K 🔥`
1. [首款折叠iPhone](https://s.weibo.com/weibo?q=%23%E9%A6%96%E6%AC%BE%E6%8A%98%E5%8F%A0iPhone%23) `243.2K 🔥`
1. [宋雨琦纹身](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E7%BA%B9%E8%BA%AB%23) `227.0K 🔥`
1. [顾客买4瓶饮料连续中奖兑奖被拒](https://s.weibo.com/weibo?q=%23%E9%A1%BE%E5%AE%A2%E4%B9%B04%E7%93%B6%E9%A5%AE%E6%96%99%E8%BF%9E%E7%BB%AD%E4%B8%AD%E5%A5%96%E5%85%91%E5%A5%96%E8%A2%AB%E6%8B%92%23) `225.1K 🔥`
1. [卢昱晓 刺棠](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%20%E5%88%BA%E6%A3%A0%23) `221.3K 🔥`
1. [段永平抛出1亿元十年之约 (Duan Yongping offers NT$100 million for ten-year contract)](https://s.weibo.com/weibo?q=%23%E6%AE%B5%E6%B0%B8%E5%B9%B3%E6%8A%9B%E5%87%BA1%E4%BA%BF%E5%85%83%E5%8D%81%E5%B9%B4%E4%B9%8B%E7%BA%A6%23) `212.0K 🔥`
1. [宜兴山洪](https://s.weibo.com/weibo?q=%23%E5%AE%9C%E5%85%B4%E5%B1%B1%E6%B4%AA%23) `192.9K 🔥`
1. [虞书欣敖瑞鹏 我欲乘风](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%95%96%E7%91%9E%E9%B9%8F%20%E6%88%91%E6%AC%B2%E4%B9%98%E9%A3%8E%23) `174.1K 🔥`
1. [油价15日起下调](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B715%E6%97%A5%E8%B5%B7%E4%B8%8B%E8%B0%83%23) `132.9K 🔥`
1. [3到5年内社保走向全额实缴 (Social security will be paid in full within 3 to 5 years)](https://s.weibo.com/weibo?q=%233%E5%88%B05%E5%B9%B4%E5%86%85%E7%A4%BE%E4%BF%9D%E8%B5%B0%E5%90%91%E5%85%A8%E9%A2%9D%E5%AE%9E%E7%BC%B4%23) `362.9K 🔥` `-55%`
1. [逃出绝命街OMG恐龙吓到我了 (Escape from Death Street OMG dinosaurs scared me)](https://s.weibo.com/weibo?q=%23%E9%80%83%E5%87%BA%E7%BB%9D%E5%91%BD%E8%A1%97OMG%E6%81%90%E9%BE%99%E5%90%93%E5%88%B0%E6%88%91%E4%BA%86%23) `361.0K 🔥` `-25%`
1. [曝Lisa助理检查网友手机 (Lisa's assistant is exposed to check netizens' mobile phones)](https://s.weibo.com/weibo?q=%23%E6%9B%9DLisa%E5%8A%A9%E7%90%86%E6%A3%80%E6%9F%A5%E7%BD%91%E5%8F%8B%E6%89%8B%E6%9C%BA%23) `188.9K 🔥` `-28%`
1. [电影空枪定档](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E7%A9%BA%E6%9E%AA%E5%AE%9A%E6%A1%A3%23) `172.8K 🔥` `-40%`
1. [侯卓成称前女友已道歉](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E5%8D%93%E6%88%90%E7%A7%B0%E5%89%8D%E5%A5%B3%E5%8F%8B%E5%B7%B2%E9%81%93%E6%AD%89%23) `140.3K 🔥` `-34%`
1. [TF四代五公出发图](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E4%BA%94%E5%85%AC%E5%87%BA%E5%8F%91%E5%9B%BE%23) `133.2K 🔥` `-24%`

Updated at 2026-08-14 19:31:03

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
