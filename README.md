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

1. [三只松鼠致歉声明](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%8F%AA%E6%9D%BE%E9%BC%A0%E8%87%B4%E6%AD%89%E5%A3%B0%E6%98%8E%23) `679.5K 🔥` `NEW`
1. [U17国足8比0斐济](https://s.weibo.com/weibo?q=%23U17%E5%9B%BD%E8%B6%B38%E6%AF%940%E6%96%90%E6%B5%8E%23) `491.4K 🔥` `NEW`
1. [从5到24看载人航天之路](https://s.weibo.com/weibo?q=%23%E4%BB%8E5%E5%88%B024%E7%9C%8B%E8%BD%BD%E4%BA%BA%E8%88%AA%E5%A4%A9%E4%B9%8B%E8%B7%AF%23) `395.7K 🔥` `NEW`
1. [2026广州车展](https://s.weibo.com/weibo?q=%232026%E5%B9%BF%E5%B7%9E%E8%BD%A6%E5%B1%95%23) `336.4K 🔥` `NEW`
1. [算了吧许飞别爱了](https://s.weibo.com/weibo?q=%23%E7%AE%97%E4%BA%86%E5%90%A7%E8%AE%B8%E9%A3%9E%E5%88%AB%E7%88%B1%E4%BA%86%23) `304.5K 🔥` `NEW`
1. [东北老丈人搭大炕全村围观](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%8C%97%E8%80%81%E4%B8%88%E4%BA%BA%E6%90%AD%E5%A4%A7%E7%82%95%E5%85%A8%E6%9D%91%E5%9B%B4%E8%A7%82%23) `205.1K 🔥` `NEW`
1. [厉娜远远没有麦琳承受的多](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E8%BF%9C%E8%BF%9C%E6%B2%A1%E6%9C%89%E9%BA%A6%E7%90%B3%E6%89%BF%E5%8F%97%E7%9A%84%E5%A4%9A%23) `198.5K 🔥` `NEW`
1. [一汽大众T6第20000台交付](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%97T6%E7%AC%AC20000%E5%8F%B0%E4%BA%A4%E4%BB%98%23) `195.0K 🔥` `NEW`
1. [全球首个乙肝治愈新药中国获批](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E9%A6%96%E4%B8%AA%E4%B9%99%E8%82%9D%E6%B2%BB%E6%84%88%E6%96%B0%E8%8D%AF%E4%B8%AD%E5%9B%BD%E8%8E%B7%E6%89%B9%23) `191.4K 🔥` `NEW`
1. [上海百亿养老集资骗局股东潜逃海外](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E7%99%BE%E4%BA%BF%E5%85%BB%E8%80%81%E9%9B%86%E8%B5%84%E9%AA%97%E5%B1%80%E8%82%A1%E4%B8%9C%E6%BD%9C%E9%80%83%E6%B5%B7%E5%A4%96%23) `163.1K 🔥` `NEW`
1. [武大调查谈话238人次](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A4%A7%E8%B0%83%E6%9F%A5%E8%B0%88%E8%AF%9D238%E4%BA%BA%E6%AC%A1%23) `151.6K 🔥` `NEW`
1. [董路谈U17国足8比0斐济](https://s.weibo.com/weibo?q=%23%E8%91%A3%E8%B7%AF%E8%B0%88U17%E5%9B%BD%E8%B6%B38%E6%AF%940%E6%96%90%E6%B5%8E%23) `146.4K 🔥` `NEW`
1. [怀孕本质是你一个人的事](https://s.weibo.com/weibo?q=%23%E6%80%80%E5%AD%95%E6%9C%AC%E8%B4%A8%E6%98%AF%E4%BD%A0%E4%B8%80%E4%B8%AA%E4%BA%BA%E7%9A%84%E4%BA%8B%23) `145.7K 🔥` `NEW`
1. [三只松鼠员工必须用鼠取名](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%8F%AA%E6%9D%BE%E9%BC%A0%E5%91%98%E5%B7%A5%E5%BF%85%E9%A1%BB%E7%94%A8%E9%BC%A0%E5%8F%96%E5%90%8D%23) `144.8K 🔥` `NEW`
1. [许飞怎么这么多料](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E6%80%8E%E4%B9%88%E8%BF%99%E4%B9%88%E5%A4%9A%E6%96%99%23) `143.2K 🔥` `NEW`
1. [徐璐在一众欧美模特里也丝毫不输](https://s.weibo.com/weibo?q=%23%E5%BE%90%E7%92%90%E5%9C%A8%E4%B8%80%E4%BC%97%E6%AC%A7%E7%BE%8E%E6%A8%A1%E7%89%B9%E9%87%8C%E4%B9%9F%E4%B8%9D%E6%AF%AB%E4%B8%8D%E8%BE%93%23) `141.8K 🔥` `NEW`
1. [中纪委一天连打三虎](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BA%AA%E5%A7%94%E4%B8%80%E5%A4%A9%E8%BF%9E%E6%89%93%E4%B8%89%E8%99%8E%23) `141.2K 🔥` `NEW`
1. [前排全部在质问厉娜](https://s.weibo.com/weibo?q=%23%E5%89%8D%E6%8E%92%E5%85%A8%E9%83%A8%E5%9C%A8%E8%B4%A8%E9%97%AE%E5%8E%89%E5%A8%9C%23) `126.3K 🔥` `NEW`
1. [胡明轩 中国男篮](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%98%8E%E8%BD%A9%20%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%23) `115.1K 🔥` `NEW`
1. [老人晚年幸福靠这些条件](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E6%99%9A%E5%B9%B4%E5%B9%B8%E7%A6%8F%E9%9D%A0%E8%BF%99%E4%BA%9B%E6%9D%A1%E4%BB%B6%23) `106.9K 🔥` `NEW`
1. [芭提雅绑架案小红书结识](https://s.weibo.com/weibo?q=%23%E8%8A%AD%E6%8F%90%E9%9B%85%E7%BB%91%E6%9E%B6%E6%A1%88%E5%B0%8F%E7%BA%A2%E4%B9%A6%E7%BB%93%E8%AF%86%23) `85.8K 🔥` `NEW`
1. [英伟达东南亚停供或影响评级](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E4%B8%9C%E5%8D%97%E4%BA%9A%E5%81%9C%E4%BE%9B%E6%88%96%E5%BD%B1%E5%93%8D%E8%AF%84%E7%BA%A7%23) `85.4K 🔥` `NEW`
1. [不适合在小朋友面前提的话题](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E9%80%82%E5%90%88%E5%9C%A8%E5%B0%8F%E6%9C%8B%E5%8F%8B%E9%9D%A2%E5%89%8D%E6%8F%90%E7%9A%84%E8%AF%9D%E9%A2%98%23) `85.0K 🔥` `NEW`
1. [徐璐身材](https://s.weibo.com/weibo?q=%23%E5%BE%90%E7%92%90%E8%BA%AB%E6%9D%90%23) `84.2K 🔥` `NEW`
1. [医生提醒不要长期大量补充维生素D](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E6%8F%90%E9%86%92%E4%B8%8D%E8%A6%81%E9%95%BF%E6%9C%9F%E5%A4%A7%E9%87%8F%E8%A1%A5%E5%85%85%E7%BB%B4%E7%94%9F%E7%B4%A0D%23) `83.8K 🔥` `NEW`
1. [哪个大学没名气但某领域顶尖](https://s.weibo.com/weibo?q=%23%E5%93%AA%E4%B8%AA%E5%A4%A7%E5%AD%A6%E6%B2%A1%E5%90%8D%E6%B0%94%E4%BD%86%E6%9F%90%E9%A2%86%E5%9F%9F%E9%A1%B6%E5%B0%96%23) `83.4K 🔥` `NEW`
1. [宝妈减重近100斤后撞脸王祖贤](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E5%A6%88%E5%87%8F%E9%87%8D%E8%BF%91100%E6%96%A4%E5%90%8E%E6%92%9E%E8%84%B8%E7%8E%8B%E7%A5%96%E8%B4%A4%23) `83.4K 🔥` `NEW`
1. [女友去世后失联男子手机最后定位](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%8F%8B%E5%8E%BB%E4%B8%96%E5%90%8E%E5%A4%B1%E8%81%94%E7%94%B7%E5%AD%90%E6%89%8B%E6%9C%BA%E6%9C%80%E5%90%8E%E5%AE%9A%E4%BD%8D%23) `81.0K 🔥` `NEW`
1. [JackeyLove回应转会传闻](https://s.weibo.com/weibo?q=%23JackeyLove%E5%9B%9E%E5%BA%94%E8%BD%AC%E4%BC%9A%E4%BC%A0%E9%97%BB%23) `71.0K 🔥` `NEW`
1. [成毅两京十五日台网双开花](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E4%B8%A4%E4%BA%AC%E5%8D%81%E4%BA%94%E6%97%A5%E5%8F%B0%E7%BD%91%E5%8F%8C%E5%BC%80%E8%8A%B1%23) `69.8K 🔥` `NEW`
1. [立陶宛要求台当局更名](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E9%99%B6%E5%AE%9B%E8%A6%81%E6%B1%82%E5%8F%B0%E5%BD%93%E5%B1%80%E6%9B%B4%E5%90%8D%23) `69.5K 🔥` `NEW`
1. [小哥以为捡的小奶狗越长越不对劲](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%93%A5%E4%BB%A5%E4%B8%BA%E6%8D%A1%E7%9A%84%E5%B0%8F%E5%A5%B6%E7%8B%97%E8%B6%8A%E9%95%BF%E8%B6%8A%E4%B8%8D%E5%AF%B9%E5%8A%B2%23) `68.5K 🔥` `NEW`
1. [贺炜谈U17国足8比0斐济](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E7%82%9C%E8%B0%88U17%E5%9B%BD%E8%B6%B38%E6%AF%940%E6%96%90%E6%B5%8E%23) `68.0K 🔥` `NEW`
1. [月亮](https://s.weibo.com/weibo?q=%23%E6%9C%88%E4%BA%AE%23) `67.2K 🔥` `NEW`
1. [Angelababy雷霆高光](https://s.weibo.com/weibo?q=%23Angelababy%E9%9B%B7%E9%9C%86%E9%AB%98%E5%85%89%23) `67.0K 🔥` `NEW`
1. [三只松鼠员工住12人间](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%8F%AA%E6%9D%BE%E9%BC%A0%E5%91%98%E5%B7%A5%E4%BD%8F12%E4%BA%BA%E9%97%B4%23) `62.9K 🔥` `NEW`
1. [越南直播卖货太抽象了](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E5%8D%97%E7%9B%B4%E6%92%AD%E5%8D%96%E8%B4%A7%E5%A4%AA%E6%8A%BD%E8%B1%A1%E4%BA%86%23) `56.4K 🔥` `NEW`
1. [向太继女烟头烫伤各执一词](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E7%BB%A7%E5%A5%B3%E7%83%9F%E5%A4%B4%E7%83%AB%E4%BC%A4%E5%90%84%E6%89%A7%E4%B8%80%E8%AF%8D%23) `53.9K 🔥` `NEW`
1. [刘浩存方拒绝任何形式的跟踪追拍行为](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E6%96%B9%E6%8B%92%E7%BB%9D%E4%BB%BB%E4%BD%95%E5%BD%A2%E5%BC%8F%E7%9A%84%E8%B7%9F%E8%B8%AA%E8%BF%BD%E6%8B%8D%E8%A1%8C%E4%B8%BA%23) `50.4K 🔥` `NEW`
1. [杨蓉自曝患有遗传病](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%93%89%E8%87%AA%E6%9B%9D%E6%82%A3%E6%9C%89%E9%81%97%E4%BC%A0%E7%97%85%23) `49.1K 🔥` `NEW`
1. [北大教师右眼被注入工业气体获赔388万](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%A4%A7%E6%95%99%E5%B8%88%E5%8F%B3%E7%9C%BC%E8%A2%AB%E6%B3%A8%E5%85%A5%E5%B7%A5%E4%B8%9A%E6%B0%94%E4%BD%93%E8%8E%B7%E8%B5%94388%E4%B8%87%23) `48.6K 🔥` `NEW`
1. [白小纯给青稚挡火锅](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E7%BB%99%E9%9D%92%E7%A8%9A%E6%8C%A1%E7%81%AB%E9%94%85%23) `47.8K 🔥` `NEW`
1. [郭士强 换人](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%A3%AB%E5%BC%BA%20%E6%8D%A2%E4%BA%BA%23) `46.5K 🔥` `NEW`
1. [王梓璇文吉儿在节目中的作用](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A2%93%E7%92%87%E6%96%87%E5%90%89%E5%84%BF%E5%9C%A8%E8%8A%82%E7%9B%AE%E4%B8%AD%E7%9A%84%E4%BD%9C%E7%94%A8%23) `46.1K 🔥` `NEW`
1. [PEL竞男不知情被拍](https://s.weibo.com/weibo?q=%23PEL%E7%AB%9E%E7%94%B7%E4%B8%8D%E7%9F%A5%E6%83%85%E8%A2%AB%E6%8B%8D%23) `45.7K 🔥` `NEW`
1. [小伊伊否认前段时间和老公和好](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%8A%E4%BC%8A%E5%90%A6%E8%AE%A4%E5%89%8D%E6%AE%B5%E6%97%B6%E9%97%B4%E5%92%8C%E8%80%81%E5%85%AC%E5%92%8C%E5%A5%BD%23) `45.7K 🔥` `NEW`
1. [U17国足vs斐济U17](https://s.weibo.com/weibo?q=%23U17%E5%9B%BD%E8%B6%B3vs%E6%96%90%E6%B5%8EU17%23) `45.7K 🔥` `NEW`
1. [后会友期看得我精神哮喘了](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E7%9C%8B%E5%BE%97%E6%88%91%E7%B2%BE%E7%A5%9E%E5%93%AE%E5%96%98%E4%BA%86%23) `45.7K 🔥` `NEW`
1. [新加坡人比利时人语言太搞了](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8A%A0%E5%9D%A1%E4%BA%BA%E6%AF%94%E5%88%A9%E6%97%B6%E4%BA%BA%E8%AF%AD%E8%A8%80%E5%A4%AA%E6%90%9E%E4%BA%86%23) `45.6K 🔥` `NEW`
1. [董明珠称汽车行业有老鼠](https://s.weibo.com/weibo?q=%23%E8%91%A3%E6%98%8E%E7%8F%A0%E7%A7%B0%E6%B1%BD%E8%BD%A6%E8%A1%8C%E4%B8%9A%E6%9C%89%E8%80%81%E9%BC%A0%23) `45.6K 🔥` `NEW`
1. [韩乔生谈U17国足8比0斐济](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E4%B9%94%E7%94%9F%E8%B0%88U17%E5%9B%BD%E8%B6%B38%E6%AF%940%E6%96%90%E6%B5%8E%23) `45.6K 🔥` `NEW`

Updated at 2026-11-27 07:06:01

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
