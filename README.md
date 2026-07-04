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

1. [佛得角门将 封神 (Cape Verde goalkeeper becomes a god)](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%20%E5%B0%81%E7%A5%9E%23) `21.7M 🔥` `NEW`
1. [阿根廷 假摔](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%20%E5%81%87%E6%91%94%23) `3.5M 🔥` `NEW`
1. [佛得角世界波](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E4%B8%96%E7%95%8C%E6%B3%A2%23) `3.2M 🔥` `NEW`
1. [佛得角淘汰](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E6%B7%98%E6%B1%B0%23) `2.7M 🔥` `NEW`
1. [想运动的心又脉动起来了](https://s.weibo.com/weibo?q=%23%E6%83%B3%E8%BF%90%E5%8A%A8%E7%9A%84%E5%BF%83%E5%8F%88%E8%84%89%E5%8A%A8%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `2.6M 🔥` `NEW`
1. [佛得角乌龙球](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E4%B9%8C%E9%BE%99%E7%90%83%23) `1.8M 🔥` `NEW`
1. [西班牙此身从此分明了](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E6%AD%A4%E8%BA%AB%E4%BB%8E%E6%AD%A4%E5%88%86%E6%98%8E%E4%BA%86%23) `1.3M 🔥` `NEW`
1. [王俊凯演唱会万份伴手礼](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%87%E4%BB%BD%E4%BC%B4%E6%89%8B%E7%A4%BC%23) `435.6K 🔥` `NEW`
1. [阿根廷 加纳巫师](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%20%E5%8A%A0%E7%BA%B3%E5%B7%AB%E5%B8%88%23) `415.7K 🔥` `NEW`
1. [699分女孩分享网友为何不舒服了](https://s.weibo.com/weibo?q=%23699%E5%88%86%E5%A5%B3%E5%AD%A9%E5%88%86%E4%BA%AB%E7%BD%91%E5%8F%8B%E4%B8%BA%E4%BD%95%E4%B8%8D%E8%88%92%E6%9C%8D%E4%BA%86%23) `405.3K 🔥` `NEW`
1. [佛得角 手球 (cape verde handball)](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%20%E6%89%8B%E7%90%83%23) `377.2K 🔥` `NEW`
1. [张嘉倪获两子抚养权](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%98%89%E5%80%AA%E8%8E%B7%E4%B8%A4%E5%AD%90%E6%8A%9A%E5%85%BB%E6%9D%83%23) `332.1K 🔥` `NEW`
1. [阿根廷又创造历史](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%8F%88%E5%88%9B%E9%80%A0%E5%8E%86%E5%8F%B2%23) `285.7K 🔥` `NEW`
1. [知名女企业家郭恒华遭刑拘](https://s.weibo.com/weibo?q=%23%E7%9F%A5%E5%90%8D%E5%A5%B3%E4%BC%81%E4%B8%9A%E5%AE%B6%E9%83%AD%E6%81%92%E5%8D%8E%E9%81%AD%E5%88%91%E6%8B%98%23) `258.6K 🔥` `NEW`
1. [利马破门](https://s.weibo.com/weibo?q=%23%E5%88%A9%E9%A9%AC%E7%A0%B4%E9%97%A8%23) `256.7K 🔥` `NEW`
1. [佛得角扳平](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E6%89%B3%E5%B9%B3%23) `254.6K 🔥` `NEW`
1. [张凌赫看杨紫眼神](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9C%8B%E6%9D%A8%E7%B4%AB%E7%9C%BC%E7%A5%9E%23) `254.0K 🔥` `NEW`
1. [阿根廷3比2佛得角](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B73%E6%AF%942%E4%BD%9B%E5%BE%97%E8%A7%92%23) `252.2K 🔥` `NEW`
1. [李小冉唐艺昕王濛顶峰相遇](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%94%90%E8%89%BA%E6%98%95%E7%8E%8B%E6%BF%9B%E9%A1%B6%E5%B3%B0%E7%9B%B8%E9%81%87%23) `249.0K 🔥` `NEW`
1. [念相思](https://s.weibo.com/weibo?q=%23%E5%BF%B5%E7%9B%B8%E6%80%9D%23) `247.5K 🔥` `NEW`
1. [发明西瓜猪鼻子拍照的人是个天才 (The man who invented the watermelon and pig nose for taking pictures is a genius)](https://s.weibo.com/weibo?q=%23%E5%8F%91%E6%98%8E%E8%A5%BF%E7%93%9C%E7%8C%AA%E9%BC%BB%E5%AD%90%E6%8B%8D%E7%85%A7%E7%9A%84%E4%BA%BA%E6%98%AF%E4%B8%AA%E5%A4%A9%E6%89%8D%23) `245.2K 🔥` `NEW`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `243.8K 🔥` `NEW`
1. [买超父母对邵晴的态度](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E8%B6%85%E7%88%B6%E6%AF%8D%E5%AF%B9%E9%82%B5%E6%99%B4%E7%9A%84%E6%80%81%E5%BA%A6%23) `243.8K 🔥` `NEW`
1. [王濛说早场解说像新婚妆发](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E8%AF%B4%E6%97%A9%E5%9C%BA%E8%A7%A3%E8%AF%B4%E5%83%8F%E6%96%B0%E5%A9%9A%E5%A6%86%E5%8F%91%23) `242.4K 🔥` `NEW`
1. [王俊凯我们没那么熟](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%88%91%E4%BB%AC%E6%B2%A1%E9%82%A3%E4%B9%88%E7%86%9F%23) `239.3K 🔥` `NEW`
1. [大马丁神扑](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%A9%AC%E4%B8%81%E7%A5%9E%E6%89%91%23) `239.1K 🔥` `NEW`
1. [加纳巫师发力了](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E7%BA%B3%E5%B7%AB%E5%B8%88%E5%8F%91%E5%8A%9B%E4%BA%86%23) `236.8K 🔥` `NEW`
1. [佛得角战平3个世界杯冠军](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E6%88%98%E5%B9%B33%E4%B8%AA%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%A0%E5%86%9B%23) `235.1K 🔥` `NEW`
1. [佛得角阿根廷加时赛](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%8A%A0%E6%97%B6%E8%B5%9B%23) `234.4K 🔥` `NEW`
1. [佛得角门将封堵单刀](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%E5%B0%81%E5%A0%B5%E5%8D%95%E5%88%80%23) `232.4K 🔥` `NEW`
1. [萨拉赫 勺子点球 (Salah penalty kick)](https://s.weibo.com/weibo?q=%23%E8%90%A8%E6%8B%89%E8%B5%AB%20%E5%8B%BA%E5%AD%90%E7%82%B9%E7%90%83%23) `231.0K 🔥` `NEW`
1. [湖人将艾顿交易至奇才](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BA%E5%B0%86%E8%89%BE%E9%A1%BF%E4%BA%A4%E6%98%93%E8%87%B3%E5%A5%87%E6%89%8D%23) `230.9K 🔥` `NEW`
1. [人的脚真的踢不过佛得角](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%9A%84%E8%84%9A%E7%9C%9F%E7%9A%84%E8%B8%A2%E4%B8%8D%E8%BF%87%E4%BD%9B%E5%BE%97%E8%A7%92%23) `229.5K 🔥` `NEW`
1. [佛得角进球](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E8%BF%9B%E7%90%83%23) `227.4K 🔥` `NEW`
1. [恩利把徐若晗说哭了](https://s.weibo.com/weibo?q=%23%E6%81%A9%E5%88%A9%E6%8A%8A%E5%BE%90%E8%8B%A5%E6%99%97%E8%AF%B4%E5%93%AD%E4%BA%86%23) `223.4K 🔥` `NEW`
1. [阿根廷vs佛得角](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7vs%E4%BD%9B%E5%BE%97%E8%A7%92%23) `30.2M 🔥` `+16433%`
1. [多重硬核成就彰显高质量发展底气 (Multiple hard-core achievements demonstrate confidence in high-quality development)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E9%87%8D%E7%A1%AC%E6%A0%B8%E6%88%90%E5%B0%B1%E5%BD%B0%E6%98%BE%E9%AB%98%E8%B4%A8%E9%87%8F%E5%8F%91%E5%B1%95%E5%BA%95%E6%B0%94%23) `4.0M 🔥` `+734%`
1. [邓为拎了6袋迪奥送花少嘉宾](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%B8%BA%E6%8B%8E%E4%BA%866%E8%A2%8B%E8%BF%AA%E5%A5%A5%E9%80%81%E8%8A%B1%E5%B0%91%E5%98%89%E5%AE%BE%23) `796.2K 🔥` `+78%`
1. [阿根廷进球](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%BF%9B%E7%90%83%23) `358.8K 🔥` `+102%`
1. [15岁少年家中赤裸死亡父亲回应](https://s.weibo.com/weibo?q=%2315%E5%B2%81%E5%B0%91%E5%B9%B4%E5%AE%B6%E4%B8%AD%E8%B5%A4%E8%A3%B8%E6%AD%BB%E4%BA%A1%E7%88%B6%E4%BA%B2%E5%9B%9E%E5%BA%94%23) `275.1K 🔥` `+92%`
1. [歌手排名](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%23) `258.9K 🔥` `+60%`
1. [买超 邵晴 (Buy Chao Shao Qing)](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E8%B6%85%20%E9%82%B5%E6%99%B4%23) `255.5K 🔥` `+114%`
1. [生理性喜欢就是电光火石 (Physiological love is like lightning)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E7%90%86%E6%80%A7%E5%96%9C%E6%AC%A2%E5%B0%B1%E6%98%AF%E7%94%B5%E5%85%89%E7%81%AB%E7%9F%B3%23) `251.7K 🔥` `+112%`
1. [高血压女子连喝三天绿豆汤致脑出血](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%A1%80%E5%8E%8B%E5%A5%B3%E5%AD%90%E8%BF%9E%E5%96%9D%E4%B8%89%E5%A4%A9%E7%BB%BF%E8%B1%86%E6%B1%A4%E8%87%B4%E8%84%91%E5%87%BA%E8%A1%80%23) `250.3K 🔥` `+75%`
1. [美国曝骇人虐童案](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%9B%9D%E9%AA%87%E4%BA%BA%E8%99%90%E7%AB%A5%E6%A1%88%23) `247.2K 🔥` `+137%`
1. [鸭血粉丝店也遭LV起诉 (The duck blood fan shop was also sued by LV)](https://s.weibo.com/weibo?q=%23%E9%B8%AD%E8%A1%80%E7%B2%89%E4%B8%9D%E5%BA%97%E4%B9%9F%E9%81%ADLV%E8%B5%B7%E8%AF%89%23) `236.1K 🔥` `+66%`
1. [终于有人说SML码抽纸了 (Finally someone said that SML code is out of date)](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%9C%89%E4%BA%BA%E8%AF%B4SML%E7%A0%81%E6%8A%BD%E7%BA%B8%E4%BA%86%23) `228.4K 🔥` `+91%`
1. [买保险30年月领50万仅领1月被拒 (After buying insurance for 30 years, I received 500,000 yuan a month for only one month but was rejected.)](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E4%BF%9D%E9%99%A930%E5%B9%B4%E6%9C%88%E9%A2%8650%E4%B8%87%E4%BB%85%E9%A2%861%E6%9C%88%E8%A2%AB%E6%8B%92%23) `226.2K 🔥` `+59%`
1. [宇树科技影子股一字涨停](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E5%BD%B1%E5%AD%90%E8%82%A1%E4%B8%80%E5%AD%97%E6%B6%A8%E5%81%9C%23) `222.1K 🔥` `+104%`
1. [霉霉世纪婚礼](https://s.weibo.com/weibo?q=%23%E9%9C%89%E9%9C%89%E4%B8%96%E7%BA%AA%E5%A9%9A%E7%A4%BC%23) `240.5K 🔥`
1. [澳大利亚vs埃及 (Australia vs Egypt)](https://s.weibo.com/weibo?q=%23%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9Avs%E5%9F%83%E5%8F%8A%23) `224.4K 🔥` `-69%`

Updated at 2026-07-04 09:01:43

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
