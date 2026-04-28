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

1. [蔡卓妍结婚 (Charlene Choi gets married)](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%8D%93%E5%A6%8D%E7%BB%93%E5%A9%9A%23) `9.8M 🔥` `NEW`
1. [强奸出狱后又杀人男子被执行死刑](https://s.weibo.com/weibo?q=%23%E5%BC%BA%E5%A5%B8%E5%87%BA%E7%8B%B1%E5%90%8E%E5%8F%88%E6%9D%80%E4%BA%BA%E7%94%B7%E5%AD%90%E8%A2%AB%E6%89%A7%E8%A1%8C%E6%AD%BB%E5%88%91%23) `989.0K 🔥` `NEW`
1. [我国脑机接口加速接入现实](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E8%84%91%E6%9C%BA%E6%8E%A5%E5%8F%A3%E5%8A%A0%E9%80%9F%E6%8E%A5%E5%85%A5%E7%8E%B0%E5%AE%9E%23) `987.9K 🔥` `NEW`
1. [豪华MPV标杆第二代腾势D9 35万起](https://s.weibo.com/weibo?q=%23%E8%B1%AA%E5%8D%8EMPV%E6%A0%87%E6%9D%86%E7%AC%AC%E4%BA%8C%E4%BB%A3%E8%85%BE%E5%8A%BFD9%2035%E4%B8%87%E8%B5%B7%23) `987.6K 🔥` `NEW`
1. [建议想减肥的人去一趟云南](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%83%B3%E5%87%8F%E8%82%A5%E7%9A%84%E4%BA%BA%E5%8E%BB%E4%B8%80%E8%B6%9F%E4%BA%91%E5%8D%97%23) `987.6K 🔥` `NEW`
1. [领克900大五座上市限时25.48万起](https://s.weibo.com/weibo?q=%23%E9%A2%86%E5%85%8B900%E5%A4%A7%E4%BA%94%E5%BA%A7%E4%B8%8A%E5%B8%82%E9%99%90%E6%97%B625.48%E4%B8%87%E8%B5%B7%23) `685.0K 🔥` `NEW`
1. [白冰上海豪宅大到可骑车兜圈](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%86%B0%E4%B8%8A%E6%B5%B7%E8%B1%AA%E5%AE%85%E5%A4%A7%E5%88%B0%E5%8F%AF%E9%AA%91%E8%BD%A6%E5%85%9C%E5%9C%88%23) `570.8K 🔥` `NEW`
1. [孔雪儿说不接俞浅浅这种角色是笨蛋](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E8%AF%B4%E4%B8%8D%E6%8E%A5%E4%BF%9E%E6%B5%85%E6%B5%85%E8%BF%99%E7%A7%8D%E8%A7%92%E8%89%B2%E6%98%AF%E7%AC%A8%E8%9B%8B%23) `469.5K 🔥` `NEW`
1. [男子升职月薪6万后开始家暴](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8D%87%E8%81%8C%E6%9C%88%E8%96%AA6%E4%B8%87%E5%90%8E%E5%BC%80%E5%A7%8B%E5%AE%B6%E6%9A%B4%23) `459.2K 🔥` `NEW`
1. [金钟仁说EXO是六人组](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%92%9F%E4%BB%81%E8%AF%B4EXO%E6%98%AF%E5%85%AD%E4%BA%BA%E7%BB%84%23) `456.0K 🔥` `NEW`
1. [迪丽热巴迪奥南京活动人气 (Dilire Badiou Nanjing event popularity)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%AA%E5%A5%A5%E5%8D%97%E4%BA%AC%E6%B4%BB%E5%8A%A8%E4%BA%BA%E6%B0%94%23) `453.3K 🔥` `NEW`
1. [女子回应丈夫月薪6万后开始家暴](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%9E%E5%BA%94%E4%B8%88%E5%A4%AB%E6%9C%88%E8%96%AA6%E4%B8%87%E5%90%8E%E5%BC%80%E5%A7%8B%E5%AE%B6%E6%9A%B4%23) `449.0K 🔥` `NEW`
1. [美团医美把清凉搬进雨林](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%A2%E5%8C%BB%E7%BE%8E%E6%8A%8A%E6%B8%85%E5%87%89%E6%90%AC%E8%BF%9B%E9%9B%A8%E6%9E%97%23) `446.6K 🔥` `NEW`
1. [年轻人的第一台智能满配好车10.68万起](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%9A%84%E7%AC%AC%E4%B8%80%E5%8F%B0%E6%99%BA%E8%83%BD%E6%BB%A1%E9%85%8D%E5%A5%BD%E8%BD%A610.68%E4%B8%87%E8%B5%B7%23) `444.5K 🔥` `NEW`
1. [被害15岁女生父亲只求杀人偿命](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%AE%B315%E5%B2%81%E5%A5%B3%E7%94%9F%E7%88%B6%E4%BA%B2%E5%8F%AA%E6%B1%82%E6%9D%80%E4%BA%BA%E5%81%BF%E5%91%BD%23) `441.5K 🔥` `NEW`
1. [网友质疑Rookie女友发文真实性](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E8%B4%A8%E7%96%91Rookie%E5%A5%B3%E5%8F%8B%E5%8F%91%E6%96%87%E7%9C%9F%E5%AE%9E%E6%80%A7%23) `440.1K 🔥` `NEW`
1. [这一秒过火](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%23) `436.8K 🔥` `NEW`
1. [唐嫣钟汉良新剧对打](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E9%92%9F%E6%B1%89%E8%89%AF%E6%96%B0%E5%89%A7%E5%AF%B9%E6%89%93%23) `435.4K 🔥` `NEW`
1. [追觅火箭超跑百公里加速0.9秒](https://s.weibo.com/weibo?q=%23%E8%BF%BD%E8%A7%85%E7%81%AB%E7%AE%AD%E8%B6%85%E8%B7%91%E7%99%BE%E5%85%AC%E9%87%8C%E5%8A%A0%E9%80%9F0.9%E7%A7%92%23) `434.2K 🔥` `NEW`
1. [三星阔折叠机模曝光](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%E9%98%94%E6%8A%98%E5%8F%A0%E6%9C%BA%E6%A8%A1%E6%9B%9D%E5%85%89%23) `430.6K 🔥` `NEW`
1. [小米百万亿Token计划启动 (Xiaomi's 100 billion Token plan launched)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E7%99%BE%E4%B8%87%E4%BA%BFToken%E8%AE%A1%E5%88%92%E5%90%AF%E5%8A%A8%23) `430.1K 🔥` `NEW`
1. [蔡卓妍钻戒](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%8D%93%E5%A6%8D%E9%92%BB%E6%88%92%23) `428.6K 🔥` `NEW`
1. [张杰拔智齿](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E6%8B%94%E6%99%BA%E9%BD%BF%23) `394.4K 🔥` `NEW`
1. [众星祝贺阿Sa结婚](https://s.weibo.com/weibo?q=%23%E4%BC%97%E6%98%9F%E7%A5%9D%E8%B4%BA%E9%98%BFSa%E7%BB%93%E5%A9%9A%23) `359.3K 🔥` `NEW`
1. [蔡卓妍 郑中基](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%8D%93%E5%A6%8D%20%E9%83%91%E4%B8%AD%E5%9F%BA%23) `358.8K 🔥` `NEW`
1. [怪不得老祖宗这么喜欢许愿](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E8%80%81%E7%A5%96%E5%AE%97%E8%BF%99%E4%B9%88%E5%96%9C%E6%AC%A2%E8%AE%B8%E6%84%BF%23) `346.9K 🔥` `NEW`
1. [岳云鹏打羽毛球瘦十几斤](https://s.weibo.com/weibo?q=%23%E5%B2%B3%E4%BA%91%E9%B9%8F%E6%89%93%E7%BE%BD%E6%AF%9B%E7%90%83%E7%98%A6%E5%8D%81%E5%87%A0%E6%96%A4%23) `305.8K 🔥` `NEW`
1. [网红白冰驾驶百万级跑车探店](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E7%99%BD%E5%86%B0%E9%A9%BE%E9%A9%B6%E7%99%BE%E4%B8%87%E7%BA%A7%E8%B7%91%E8%BD%A6%E6%8E%A2%E5%BA%97%23) `283.9K 🔥` `NEW`
1. [特朗普与英国国王上演握手较量](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E4%B8%8E%E8%8B%B1%E5%9B%BD%E5%9B%BD%E7%8E%8B%E4%B8%8A%E6%BC%94%E6%8F%A1%E6%89%8B%E8%BE%83%E9%87%8F%23) `277.4K 🔥` `NEW`
1. [歌手2026回应ai海报](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%E5%9B%9E%E5%BA%94ai%E6%B5%B7%E6%8A%A5%23) `275.9K 🔥` `NEW`
1. [网红白冰曾称探店不收一分钱 (Internet celebrity Bai Bing once said that he doesn’t charge a penny for visiting stores.)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E7%99%BD%E5%86%B0%E6%9B%BE%E7%A7%B0%E6%8E%A2%E5%BA%97%E4%B8%8D%E6%94%B6%E4%B8%80%E5%88%86%E9%92%B1%23) `274.9K 🔥` `NEW`
1. [唐嫣赵又廷爱情没有神话吻戏](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E8%B5%B5%E5%8F%88%E5%BB%B7%E7%88%B1%E6%83%85%E6%B2%A1%E6%9C%89%E7%A5%9E%E8%AF%9D%E5%90%BB%E6%88%8F%23) `272.7K 🔥` `NEW`
1. [Rookie小钰事件法律层面解读](https://s.weibo.com/weibo?q=%23Rookie%E5%B0%8F%E9%92%B0%E4%BA%8B%E4%BB%B6%E6%B3%95%E5%BE%8B%E5%B1%82%E9%9D%A2%E8%A7%A3%E8%AF%BB%23) `272.1K 🔥` `NEW`
1. [3只虾21块钱](https://s.weibo.com/weibo?q=%233%E5%8F%AA%E8%99%BE21%E5%9D%97%E9%92%B1%23) `884.1K 🔥` `+46%`
1. [本科新增38种专业](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E7%A7%91%E6%96%B0%E5%A2%9E38%E7%A7%8D%E4%B8%93%E4%B8%9A%23) `468.3K 🔥` `+31%`
1. [miumiu陷害女明星](https://s.weibo.com/weibo?q=%23miumiu%E9%99%B7%E5%AE%B3%E5%A5%B3%E6%98%8E%E6%98%9F%23) `460.7K 🔥` `+32%`
1. [萨摩耶接住了小猫](https://s.weibo.com/weibo?q=%23%E8%90%A8%E6%91%A9%E8%80%B6%E6%8E%A5%E4%BD%8F%E4%BA%86%E5%B0%8F%E7%8C%AB%23) `447.0K 🔥` `+113%`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `444.0K 🔥` `+87%`
1. [油价又大涨了](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E5%8F%88%E5%A4%A7%E6%B6%A8%E4%BA%86%23) `438.6K 🔥` `+106%`
1. [张慧雯三公小考成绩](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%85%A7%E9%9B%AF%E4%B8%89%E5%85%AC%E5%B0%8F%E8%80%83%E6%88%90%E7%BB%A9%23) `432.0K 🔥` `+103%`
1. [迪丽热巴直播捂肚强忍疼痛 (Dilireba covered her belly during live broadcast to endure the pain)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9B%B4%E6%92%AD%E6%8D%82%E8%82%9A%E5%BC%BA%E5%BF%8D%E7%96%BC%E7%97%9B%23) `427.7K 🔥` `+43%`
1. [曝张凌赫低血糖摔倒了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%BD%8E%E8%A1%80%E7%B3%96%E6%91%94%E5%80%92%E4%BA%86%23) `386.5K 🔥` `+42%`
1. [白冰长期炫富引争议](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%86%B0%E9%95%BF%E6%9C%9F%E7%82%AB%E5%AF%8C%E5%BC%95%E4%BA%89%E8%AE%AE%23) `360.0K 🔥` `+42%`
1. [张凌赫发语音报平安](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%8F%91%E8%AF%AD%E9%9F%B3%E6%8A%A5%E5%B9%B3%E5%AE%89%23) `278.7K 🔥` `+30%`
1. [白冰连续4年偷税](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%86%B0%E8%BF%9E%E7%BB%AD4%E5%B9%B4%E5%81%B7%E7%A8%8E%23) `276.2K 🔥` `+32%`
1. [境外组织大力资助网红煽动躺平](https://s.weibo.com/weibo?q=%23%E5%A2%83%E5%A4%96%E7%BB%84%E7%BB%87%E5%A4%A7%E5%8A%9B%E8%B5%84%E5%8A%A9%E7%BD%91%E7%BA%A2%E7%85%BD%E5%8A%A8%E8%BA%BA%E5%B9%B3%23) `695.6K 🔥`
1. [王骁田曦薇新剧定档](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%AA%81%E7%94%B0%E6%9B%A6%E8%96%87%E6%96%B0%E5%89%A7%E5%AE%9A%E6%A1%A3%23) `441.1K 🔥`
1. [网红白冰偷税911.18万 (Internet celebrity Bai Bing evaded 9.1118 million in taxes)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E7%99%BD%E5%86%B0%E5%81%B7%E7%A8%8E911.18%E4%B8%87%23) `2.2M 🔥` `-83%`
1. [突然意识到人一定要流动起来](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E4%BA%BA%E4%B8%80%E5%AE%9A%E8%A6%81%E6%B5%81%E5%8A%A8%E8%B5%B7%E6%9D%A5%23) `577.7K 🔥` `-43%`
1. [白冰回应偷税被查](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%86%B0%E5%9B%9E%E5%BA%94%E5%81%B7%E7%A8%8E%E8%A2%AB%E6%9F%A5%23) `416.9K 🔥` `-81%`
1. [37岁女子健身2年体重不降反增](https://s.weibo.com/weibo?q=%2337%E5%B2%81%E5%A5%B3%E5%AD%90%E5%81%A5%E8%BA%AB2%E5%B9%B4%E4%BD%93%E9%87%8D%E4%B8%8D%E9%99%8D%E5%8F%8D%E5%A2%9E%23) `278.6K 🔥` `-51%`

Updated at 2026-04-28 14:41:04

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
