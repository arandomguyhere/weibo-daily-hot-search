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

1. [王俊凯蹦迪版心引力 (Wang Junkai disco version of gravity)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%B9%A6%E8%BF%AA%E7%89%88%E5%BF%83%E5%BC%95%E5%8A%9B%23) `548.6K 🔥` `NEW`
1. [迪丽热巴女鬼一来了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%A5%B3%E9%AC%BC%E4%B8%80%E6%9D%A5%E4%BA%86%23) `225.8K 🔥` `NEW`
1. [王俊凯比心](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%AF%94%E5%BF%83%23) `186.1K 🔥` `NEW`
1. [黄金气体价格暴涨](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E6%B0%94%E4%BD%93%E4%BB%B7%E6%A0%BC%E6%9A%B4%E6%B6%A8%23) `130.2K 🔥` `NEW`
1. [鞠婧祎你在不在高音](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E4%BD%A0%E5%9C%A8%E4%B8%8D%E5%9C%A8%E9%AB%98%E9%9F%B3%23) `129.9K 🔥` `NEW`
1. [伊朗连遭重创绝地反击](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%BF%9E%E9%81%AD%E9%87%8D%E5%88%9B%E7%BB%9D%E5%9C%B0%E5%8F%8D%E5%87%BB%23) `129.6K 🔥` `NEW`
1. [A股多个大手笔分红来了](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%A4%9A%E4%B8%AA%E5%A4%A7%E6%89%8B%E7%AC%94%E5%88%86%E7%BA%A2%E6%9D%A5%E4%BA%86%23) `109.8K 🔥` `NEW`
1. [范丞丞说时代少年团永远在一起](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E8%AF%B4%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%B0%B8%E8%BF%9C%E5%9C%A8%E4%B8%80%E8%B5%B7%23) `95.4K 🔥` `NEW`
1. [11岁的我觉得这顿饭夯爆了](https://s.weibo.com/weibo?q=%2311%E5%B2%81%E7%9A%84%E6%88%91%E8%A7%89%E5%BE%97%E8%BF%99%E9%A1%BF%E9%A5%AD%E5%A4%AF%E7%88%86%E4%BA%86%23) `95.1K 🔥` `NEW`
1. [米卡耳道严重红肿](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%8D%A1%E8%80%B3%E9%81%93%E4%B8%A5%E9%87%8D%E7%BA%A2%E8%82%BF%23) `94.1K 🔥` `NEW`
1. [太原火灾最新情况 (Taiyuan fire latest situation)](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%8E%9F%E7%81%AB%E7%81%BE%E6%9C%80%E6%96%B0%E6%83%85%E5%86%B5%23) `92.8K 🔥` `NEW`
1. [丁禹兮直拍](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E7%9B%B4%E6%8B%8D%23) `91.9K 🔥` `NEW`
1. [樊振东对手竟是对方主教练](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%AF%B9%E6%89%8B%E7%AB%9F%E6%98%AF%E5%AF%B9%E6%96%B9%E4%B8%BB%E6%95%99%E7%BB%83%23) `83.6K 🔥` `NEW`
1. [狂犬病暴露风险进入高发期](https://s.weibo.com/weibo?q=%23%E7%8B%82%E7%8A%AC%E7%97%85%E6%9A%B4%E9%9C%B2%E9%A3%8E%E9%99%A9%E8%BF%9B%E5%85%A5%E9%AB%98%E5%8F%91%E6%9C%9F%23) `83.5K 🔥` `NEW`
1. [太原火灾已致1死25伤](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%8E%9F%E7%81%AB%E7%81%BE%E5%B7%B2%E8%87%B41%E6%AD%BB25%E4%BC%A4%23) `1.2M 🔥` `+511%`
1. [李昌钰再婚妻子发文缅怀李昌钰](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%8C%E9%92%B0%E5%86%8D%E5%A9%9A%E5%A6%BB%E5%AD%90%E5%8F%91%E6%96%87%E7%BC%85%E6%80%80%E6%9D%8E%E6%98%8C%E9%92%B0%23) `246.3K 🔥` `+21%`
1. [小狗 是表哥吗](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%20%E6%98%AF%E8%A1%A8%E5%93%A5%E5%90%97%23) `183.0K 🔥` `+28%`
1. [女子断碳水2月确诊糖尿病前期 (Woman cuts carbs and is diagnosed with prediabetes in February)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%96%AD%E7%A2%B3%E6%B0%B42%E6%9C%88%E7%A1%AE%E8%AF%8A%E7%B3%96%E5%B0%BF%E7%97%85%E5%89%8D%E6%9C%9F%23) `872.8K 🔥`
1. [原来你是这样的河南 (It turns out you are like this in Henan)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%BD%A0%E6%98%AF%E8%BF%99%E6%A0%B7%E7%9A%84%E6%B2%B3%E5%8D%97%23) `698.6K 🔥`
1. [春日许愿池 (spring wishing fountain)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%97%A5%E8%AE%B8%E6%84%BF%E6%B1%A0%23) `548.6K 🔥`
1. [穿上春装被误认为是保洁](https://s.weibo.com/weibo?q=%23%E7%A9%BF%E4%B8%8A%E6%98%A5%E8%A3%85%E8%A2%AB%E8%AF%AF%E8%AE%A4%E4%B8%BA%E6%98%AF%E4%BF%9D%E6%B4%81%23) `239.5K 🔥`
1. [AG战胜JDG](https://s.weibo.com/weibo?q=%23AG%E6%88%98%E8%83%9CJDG%23) `186.7K 🔥`
1. [低精力人群的周末安排belike](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E7%B2%BE%E5%8A%9B%E4%BA%BA%E7%BE%A4%E7%9A%84%E5%91%A8%E6%9C%AB%E5%AE%89%E6%8E%92belike%23) `185.6K 🔥`
1. [丁禹兮领奖时宣传白日提灯 (Ding Yuxi promoted the daytime lantern when accepting the award)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E9%A2%86%E5%A5%96%E6%97%B6%E5%AE%A3%E4%BC%A0%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `184.5K 🔥`
1. [鞠婧祎把舞台走成T台 (Ju Jingyi turns the stage into a catwalk)](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%8A%8A%E8%88%9E%E5%8F%B0%E8%B5%B0%E6%88%90T%E5%8F%B0%23) `183.9K 🔥`
1. [张凌赫大一曾分享暗恋细节](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%A4%A7%E4%B8%80%E6%9B%BE%E5%88%86%E4%BA%AB%E6%9A%97%E6%81%8B%E7%BB%86%E8%8A%82%23) `181.9K 🔥`
1. [美国最强导弹击落了美国最强战机](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%9C%80%E5%BC%BA%E5%AF%BC%E5%BC%B9%E5%87%BB%E8%90%BD%E4%BA%86%E7%BE%8E%E5%9B%BD%E6%9C%80%E5%BC%BA%E6%88%98%E6%9C%BA%23) `181.8K 🔥`
1. [现货黄金 (spot gold)](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E8%B4%A7%E9%BB%84%E9%87%91%23) `179.6K 🔥`
1. [伊朗袭击沙特基地](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%A2%AD%E5%87%BB%E6%B2%99%E7%89%B9%E5%9F%BA%E5%9C%B0%23) `163.5K 🔥`
1. [阚清子想从116斤瘦到90斤](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E6%83%B3%E4%BB%8E116%E6%96%A4%E7%98%A6%E5%88%B090%E6%96%A4%23) `162.5K 🔥`
1. [杨臣刚自曝因老鼠爱大米收入1.7亿](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%87%A3%E5%88%9A%E8%87%AA%E6%9B%9D%E5%9B%A0%E8%80%81%E9%BC%A0%E7%88%B1%E5%A4%A7%E7%B1%B3%E6%94%B6%E5%85%A51.7%E4%BA%BF%23) `160.7K 🔥`
1. [女子在家被流浪狗咬伤3天后狗死了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9C%A8%E5%AE%B6%E8%A2%AB%E6%B5%81%E6%B5%AA%E7%8B%97%E5%92%AC%E4%BC%A43%E5%A4%A9%E5%90%8E%E7%8B%97%E6%AD%BB%E4%BA%86%23) `158.9K 🔥`
1. [女顾客打印后要求归类被拒当场崩溃](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E9%A1%BE%E5%AE%A2%E6%89%93%E5%8D%B0%E5%90%8E%E8%A6%81%E6%B1%82%E5%BD%92%E7%B1%BB%E8%A2%AB%E6%8B%92%E5%BD%93%E5%9C%BA%E5%B4%A9%E6%BA%83%23) `154.8K 🔥`
1. [金价急速飙涨](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%80%A5%E9%80%9F%E9%A3%99%E6%B6%A8%23) `154.0K 🔥`
1. [用吸粪车做婚车小伙发声](https://s.weibo.com/weibo?q=%23%E7%94%A8%E5%90%B8%E7%B2%AA%E8%BD%A6%E5%81%9A%E5%A9%9A%E8%BD%A6%E5%B0%8F%E4%BC%99%E5%8F%91%E5%A3%B0%23) `151.9K 🔥`
1. [太原一商圈起火附近商家发声 (A fire broke out in a business district in Taiyuan, and nearby merchants spoke out)](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%8E%9F%E4%B8%80%E5%95%86%E5%9C%88%E8%B5%B7%E7%81%AB%E9%99%84%E8%BF%91%E5%95%86%E5%AE%B6%E5%8F%91%E5%A3%B0%23) `133.6K 🔥`
1. [JDG对战AG](https://s.weibo.com/weibo?q=%23JDG%E5%AF%B9%E6%88%98AG%23) `125.6K 🔥`
1. [一念江南](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%23) `118.8K 🔥`
1. [任豪衣服](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E8%B1%AA%E8%A1%A3%E6%9C%8D%23) `117.4K 🔥`
1. [高三学生请求拆除鸟巢校长写信回应](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%89%E5%AD%A6%E7%94%9F%E8%AF%B7%E6%B1%82%E6%8B%86%E9%99%A4%E9%B8%9F%E5%B7%A2%E6%A0%A1%E9%95%BF%E5%86%99%E4%BF%A1%E5%9B%9E%E5%BA%94%23) `110.8K 🔥`
1. [郝熠然 翻牌](https://s.weibo.com/weibo?q=%23%E9%83%9D%E7%86%A0%E7%84%B6%20%E7%BF%BB%E7%89%8C%23) `102.7K 🔥`
1. [白日提灯直播 (Lantern live broadcast during the day)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E7%9B%B4%E6%92%AD%23) `91.9K 🔥`
1. [蜜雪集团去年净利润58.8亿](https://s.weibo.com/weibo?q=%23%E8%9C%9C%E9%9B%AA%E9%9B%86%E5%9B%A2%E5%8E%BB%E5%B9%B4%E5%87%80%E5%88%A9%E6%B6%A658.8%E4%BA%BF%23) `89.4K 🔥`
1. [Angelababy梦回贝微微 (Angelababy Meng Huibei Weiwei)](https://s.weibo.com/weibo?q=%23Angelababy%E6%A2%A6%E5%9B%9E%E8%B4%9D%E5%BE%AE%E5%BE%AE%23) `87.3K 🔥`
1. [太原火灾 (Taiyuan fire)](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%8E%9F%E7%81%AB%E7%81%BE%23) `243.3K 🔥` `-86%`
1. [太原一商圈起火现场浓烟滚滚](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%8E%9F%E4%B8%80%E5%95%86%E5%9C%88%E8%B5%B7%E7%81%AB%E7%8E%B0%E5%9C%BA%E6%B5%93%E7%83%9F%E6%BB%9A%E6%BB%9A%23) `191.4K 🔥` `-32%`
1. [陈飞宇问迪丽热巴你看清过我吗](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%E9%97%AE%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%BD%A0%E7%9C%8B%E6%B8%85%E8%BF%87%E6%88%91%E5%90%97%23) `147.7K 🔥` `-25%`
1. [徐良方致歉声明](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%AF%E6%96%B9%E8%87%B4%E6%AD%89%E5%A3%B0%E6%98%8E%23) `144.6K 🔥` `-40%`
1. [俄罗斯4月1日起禁止汽油出口 (Russia bans gasoline exports from April 1)](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF4%E6%9C%881%E6%97%A5%E8%B5%B7%E7%A6%81%E6%AD%A2%E6%B1%BD%E6%B2%B9%E5%87%BA%E5%8F%A3%23) `131.1K 🔥` `-30%`
1. [粉底液将军 高跟鞋女战士 (Liquid foundation general high heels female warrior)](https://s.weibo.com/weibo?q=%23%E7%B2%89%E5%BA%95%E6%B6%B2%E5%B0%86%E5%86%9B%20%E9%AB%98%E8%B7%9F%E9%9E%8B%E5%A5%B3%E6%88%98%E5%A3%AB%23) `95.0K 🔥` `-21%`
1. [单依纯演唱会 (Shan Yichun concert)](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E6%BC%94%E5%94%B1%E4%BC%9A%23) `87.5K 🔥` `-27%`

Updated at 2026-03-28 23:04:31

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
