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

1. [六旬男称追求者排到黄浦江](https://s.weibo.com/weibo?q=%23%E5%85%AD%E6%97%AC%E7%94%B7%E7%A7%B0%E8%BF%BD%E6%B1%82%E8%80%85%E6%8E%92%E5%88%B0%E9%BB%84%E6%B5%A6%E6%B1%9F%23) `36.9K 🔥` `NEW`
1. [想减肥建议换一下吃饭顺序](https://s.weibo.com/weibo?q=%23%E6%83%B3%E5%87%8F%E8%82%A5%E5%BB%BA%E8%AE%AE%E6%8D%A2%E4%B8%80%E4%B8%8B%E5%90%83%E9%A5%AD%E9%A1%BA%E5%BA%8F%23) `34.2K 🔥` `NEW`
1. [埃及新生儿翘二郎腿好悠闲](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E6%96%B0%E7%94%9F%E5%84%BF%E7%BF%98%E4%BA%8C%E9%83%8E%E8%85%BF%E5%A5%BD%E6%82%A0%E9%97%B2%23) `31.9K 🔥` `NEW`
1. [马斯克称泽连斯基是时候下台了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E7%A7%B0%E6%B3%BD%E8%BF%9E%E6%96%AF%E5%9F%BA%E6%98%AF%E6%97%B6%E5%80%99%E4%B8%8B%E5%8F%B0%E4%BA%86%23) `31.9K 🔥` `NEW`
1. [瞿颖说郑钦文见了我都要喊一声姐](https://s.weibo.com/weibo?q=%23%E7%9E%BF%E9%A2%96%E8%AF%B4%E9%83%91%E9%92%A6%E6%96%87%E8%A7%81%E4%BA%86%E6%88%91%E9%83%BD%E8%A6%81%E5%96%8A%E4%B8%80%E5%A3%B0%E5%A7%90%23) `24.4K 🔥` `NEW`
1. [唐九洲好惊艳](https://s.weibo.com/weibo?q=%23%E5%94%90%E4%B9%9D%E6%B4%B2%E5%A5%BD%E6%83%8A%E8%89%B3%23) `24.4K 🔥` `NEW`
1. [店员称有碘伏顾客磕响头](https://s.weibo.com/weibo?q=%23%E5%BA%97%E5%91%98%E7%A7%B0%E6%9C%89%E7%A2%98%E4%BC%8F%E9%A1%BE%E5%AE%A2%E7%A3%95%E5%93%8D%E5%A4%B4%23) `451.8K 🔥` `+123%`
1. [特斯拉飞行汽车被质疑是噱头](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E9%A3%9E%E8%A1%8C%E6%B1%BD%E8%BD%A6%E8%A2%AB%E8%B4%A8%E7%96%91%E6%98%AF%E5%99%B1%E5%A4%B4%23) `328.2K 🔥` `+139%`
1. [广交会真的太全面了](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%BA%A4%E4%BC%9A%E7%9C%9F%E7%9A%84%E5%A4%AA%E5%85%A8%E9%9D%A2%E4%BA%86%23) `254.3K 🔥` `+126%`
1. [曾辉淘汰王赫野碎了](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E6%B7%98%E6%B1%B0%E7%8E%8B%E8%B5%AB%E9%87%8E%E7%A2%8E%E4%BA%86%23) `83.5K 🔥` `+38%`
1. [现役男女演员TOP](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%BD%B9%E7%94%B7%E5%A5%B3%E6%BC%94%E5%91%98TOP%23) `78.0K 🔥` `+21%`
1. [演员招不到黄胖子了](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E6%8B%9B%E4%B8%8D%E5%88%B0%E9%BB%84%E8%83%96%E5%AD%90%E4%BA%86%23) `76.9K 🔥` `+49%`
1. [刘丁硕质疑张继科卖鸡排](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%B8%81%E7%A1%95%E8%B4%A8%E7%96%91%E5%BC%A0%E7%BB%A7%E7%A7%91%E5%8D%96%E9%B8%A1%E6%8E%92%23) `60.7K 🔥` `+26%`
1. [欠薪345万却砸钱送孩子韩国出道](https://s.weibo.com/weibo?q=%23%E6%AC%A0%E8%96%AA345%E4%B8%87%E5%8D%B4%E7%A0%B8%E9%92%B1%E9%80%81%E5%AD%A9%E5%AD%90%E9%9F%A9%E5%9B%BD%E5%87%BA%E9%81%93%23) `52.4K 🔥` `+57%`
1. [曼城3比2伊普斯维奇](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E5%9F%8E3%E6%AF%942%E4%BC%8A%E6%99%AE%E6%96%AF%E7%BB%B4%E5%A5%87%23) `52.0K 🔥` `+68%`
1. [皮质醇高的6大身体信号](https://s.weibo.com/weibo?q=%23%E7%9A%AE%E8%B4%A8%E9%86%87%E9%AB%98%E7%9A%846%E5%A4%A7%E8%BA%AB%E4%BD%93%E4%BF%A1%E5%8F%B7%23) `51.6K 🔥` `+54%`
1. [夫妻闹离婚公公恼火儿媳闺蜜](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E9%97%B9%E7%A6%BB%E5%A9%9A%E5%85%AC%E5%85%AC%E6%81%BC%E7%81%AB%E5%84%BF%E5%AA%B3%E9%97%BA%E8%9C%9C%23) `51.5K 🔥` `+65%`
1. [肠癌有3个危险信号](https://s.weibo.com/weibo?q=%23%E8%82%A0%E7%99%8C%E6%9C%893%E4%B8%AA%E5%8D%B1%E9%99%A9%E4%BF%A1%E5%8F%B7%23) `51.3K 🔥` `+53%`
1. [中国小姐姐蜗居老头乐在外网走红](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%B0%8F%E5%A7%90%E5%A7%90%E8%9C%97%E5%B1%85%E8%80%81%E5%A4%B4%E4%B9%90%E5%9C%A8%E5%A4%96%E7%BD%91%E8%B5%B0%E7%BA%A2%23) `51.1K 🔥` `+78%`
1. [你好星期六](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%23) `32.0K 🔥` `+31%`
1. [刘丁硕置顶都是王楚钦](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%B8%81%E7%A1%95%E7%BD%AE%E9%A1%B6%E9%83%BD%E6%98%AF%E7%8E%8B%E6%A5%9A%E9%92%A6%23) `31.9K 🔥` `+22%`
1. [嫁金钗这是奔着破纪录去的](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E8%BF%99%E6%98%AF%E5%A5%94%E7%9D%80%E7%A0%B4%E7%BA%AA%E5%BD%95%E5%8E%BB%E7%9A%84%23) `123.0K 🔥`
1. [徐艺洋弟弟发文](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E5%BC%9F%E5%BC%9F%E5%8F%91%E6%96%87%23) `79.4K 🔥`
1. [马斯克飞行汽车遭踢馆](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E9%A3%9E%E8%A1%8C%E6%B1%BD%E8%BD%A6%E9%81%AD%E8%B8%A2%E9%A6%86%23) `62.2K 🔥`
1. [特斯拉市值蒸发超6200亿](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E5%B8%82%E5%80%BC%E8%92%B8%E5%8F%91%E8%B6%856200%E4%BA%BF%23) `62.1K 🔥`
1. [AI的吻戏比真人还欲啊](https://s.weibo.com/weibo?q=%23AI%E7%9A%84%E5%90%BB%E6%88%8F%E6%AF%94%E7%9C%9F%E4%BA%BA%E8%BF%98%E6%AC%B2%E5%95%8A%23) `61.7K 🔥`
1. [杭州大三女孩7个月开20家柠檬奶店](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E5%A4%A7%E4%B8%89%E5%A5%B3%E5%AD%A97%E4%B8%AA%E6%9C%88%E5%BC%8020%E5%AE%B6%E6%9F%A0%E6%AA%AC%E5%A5%B6%E5%BA%97%23) `61.2K 🔥`
1. [小沈阳气得咬牙切齿](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E6%B0%94%E5%BE%97%E5%92%AC%E7%89%99%E5%88%87%E9%BD%BF%23) `60.9K 🔥`
1. [王力宏力赞披哥在梅边舞台](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E5%8A%9B%E8%B5%9E%E6%8A%AB%E5%93%A5%E5%9C%A8%E6%A2%85%E8%BE%B9%E8%88%9E%E5%8F%B0%23) `59.9K 🔥`
1. [在梅边 夯爆了](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E6%A2%85%E8%BE%B9%20%E5%A4%AF%E7%88%86%E4%BA%86%23) `53.5K 🔥`
1. [二十年后发现老师早知道自己撒谎](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E5%8D%81%E5%B9%B4%E5%90%8E%E5%8F%91%E7%8E%B0%E8%80%81%E5%B8%88%E6%97%A9%E7%9F%A5%E9%81%93%E8%87%AA%E5%B7%B1%E6%92%92%E8%B0%8E%23) `52.2K 🔥`
1. [内马尔晒与亚马尔数据对比](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E6%99%92%E4%B8%8E%E4%BA%9A%E9%A9%AC%E5%B0%94%E6%95%B0%E6%8D%AE%E5%AF%B9%E6%AF%94%23) `51.9K 🔥`
1. [iPhoneDuo溢价暴跌原因](https://s.weibo.com/weibo?q=%23iPhoneDuo%E6%BA%A2%E4%BB%B7%E6%9A%B4%E8%B7%8C%E5%8E%9F%E5%9B%A0%23) `37.4K 🔥`
1. [周深首唱大梦归](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E9%A6%96%E5%94%B1%E5%A4%A7%E6%A2%A6%E5%BD%92%23) `32.5K 🔥`
1. [美颜突然关掉太恐怖了](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E9%A2%9C%E7%AA%81%E7%84%B6%E5%85%B3%E6%8E%89%E5%A4%AA%E6%81%90%E6%80%96%E4%BA%86%23) `32.3K 🔥`
1. [曾辉新综艺官宣](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E6%96%B0%E7%BB%BC%E8%89%BA%E5%AE%98%E5%AE%A3%23) `32.2K 🔥`
1. [博主三老板去世妻子说我的天塌了](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E4%B8%BB%E4%B8%89%E8%80%81%E6%9D%BF%E5%8E%BB%E4%B8%96%E5%A6%BB%E5%AD%90%E8%AF%B4%E6%88%91%E7%9A%84%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `32.0K 🔥`
1. [日网友称DeepSeek颠覆格局](https://s.weibo.com/weibo?q=%23%E6%97%A5%E7%BD%91%E5%8F%8B%E7%A7%B0DeepSeek%E9%A2%A0%E8%A6%86%E6%A0%BC%E5%B1%80%23) `32.0K 🔥`
1. [微博V影响力大会](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9AV%E5%BD%B1%E5%93%8D%E5%8A%9B%E5%A4%A7%E4%BC%9A%23) `30.9K 🔥`
1. [曹骏滑铲空翻](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E6%BB%91%E9%93%B2%E7%A9%BA%E7%BF%BB%23) `28.7K 🔥`
1. [郭宇欣方回应直播屏蔽争议](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AE%87%E6%AC%A3%E6%96%B9%E5%9B%9E%E5%BA%94%E7%9B%B4%E6%92%AD%E5%B1%8F%E8%94%BD%E4%BA%89%E8%AE%AE%23) `28.5K 🔥`
1. [卖柠檬奶月营业额超百万女生发声](https://s.weibo.com/weibo?q=%23%E5%8D%96%E6%9F%A0%E6%AA%AC%E5%A5%B6%E6%9C%88%E8%90%A5%E4%B8%9A%E9%A2%9D%E8%B6%85%E7%99%BE%E4%B8%87%E5%A5%B3%E7%94%9F%E5%8F%91%E5%A3%B0%23) `27.8K 🔥`
1. [鹿晗用了李秀满女团新歌](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E7%94%A8%E4%BA%86%E6%9D%8E%E7%A7%80%E6%BB%A1%E5%A5%B3%E5%9B%A2%E6%96%B0%E6%AD%8C%23) `27.1K 🔥`
1. [6种癌症有明显家族遗传倾向](https://s.weibo.com/weibo?q=%236%E7%A7%8D%E7%99%8C%E7%97%87%E6%9C%89%E6%98%8E%E6%98%BE%E5%AE%B6%E6%97%8F%E9%81%97%E4%BC%A0%E5%80%BE%E5%90%91%23) `27.0K 🔥`
1. [软恋爱是低温持续很久的爱](https://s.weibo.com/weibo?q=%23%E8%BD%AF%E6%81%8B%E7%88%B1%E6%98%AF%E4%BD%8E%E6%B8%A9%E6%8C%81%E7%BB%AD%E5%BE%88%E4%B9%85%E7%9A%84%E7%88%B1%23) `25.5K 🔥`
1. [我也想你了和早点睡是近义词](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%B9%9F%E6%83%B3%E4%BD%A0%E4%BA%86%E5%92%8C%E6%97%A9%E7%82%B9%E7%9D%A1%E6%98%AF%E8%BF%91%E4%B9%89%E8%AF%8D%23) `24.4K 🔥`
1. [曝时代少年团今年跨年形式](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E4%BB%8A%E5%B9%B4%E8%B7%A8%E5%B9%B4%E5%BD%A2%E5%BC%8F%23) `24.4K 🔥`
1. [徐艺洋怀孕下楼梯那英扶了她一把](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E6%80%80%E5%AD%95%E4%B8%8B%E6%A5%BC%E6%A2%AF%E9%82%A3%E8%8B%B1%E6%89%B6%E4%BA%86%E5%A5%B9%E4%B8%80%E6%8A%8A%23) `25.4K 🔥` `-54%`

Updated at 2026-10-18 06:34:35

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
