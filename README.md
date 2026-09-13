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

1. [AL夺冠](https://s.weibo.com/weibo?q=%23AL%E5%A4%BA%E5%86%A0%23) `1.7M 🔥` `NEW`
1. [女子拍下骇人巨型蜗牛引热议](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8B%8D%E4%B8%8B%E9%AA%87%E4%BA%BA%E5%B7%A8%E5%9E%8B%E8%9C%97%E7%89%9B%E5%BC%95%E7%83%AD%E8%AE%AE%23) `1.2M 🔥` `NEW`
1. [服贸会十四年成绩单](https://s.weibo.com/weibo?q=%23%E6%9C%8D%E8%B4%B8%E4%BC%9A%E5%8D%81%E5%9B%9B%E5%B9%B4%E6%88%90%E7%BB%A9%E5%8D%95%23) `1.1M 🔥` `NEW`
1. [三战七周年送1000抽加自选橙卡](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%88%98%E4%B8%83%E5%91%A8%E5%B9%B4%E9%80%811000%E6%8A%BD%E5%8A%A0%E8%87%AA%E9%80%89%E6%A9%99%E5%8D%A1%23) `1.1M 🔥` `NEW`
1. [下周上5休1再上1](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E5%91%A8%E4%B8%8A5%E4%BC%911%E5%86%8D%E4%B8%8A1%23) `1.0M 🔥` `NEW`
1. [优酷招商大剧片单](https://s.weibo.com/weibo?q=%23%E4%BC%98%E9%85%B7%E6%8B%9B%E5%95%86%E5%A4%A7%E5%89%A7%E7%89%87%E5%8D%95%23) `489.1K 🔥` `NEW`
1. [国乒女单冠军赛颗粒无收](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%8D%95%E5%86%A0%E5%86%9B%E8%B5%9B%E9%A2%97%E7%B2%92%E6%97%A0%E6%94%B6%23) `386.2K 🔥` `NEW`
1. [谭松韵 扛剧](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%20%E6%89%9B%E5%89%A7%23) `381.4K 🔥` `NEW`
1. [AL战胜BLG](https://s.weibo.com/weibo?q=%23AL%E6%88%98%E8%83%9CBLG%23) `346.5K 🔥` `NEW`
1. [张本美和回应澳门赛冠军](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%E5%9B%9E%E5%BA%94%E6%BE%B3%E9%97%A8%E8%B5%9B%E5%86%A0%E5%86%9B%23) `293.6K 🔥` `NEW`
1. [张真源编辑记录](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E7%BC%96%E8%BE%91%E8%AE%B0%E5%BD%95%23) `292.7K 🔥` `NEW`
1. [唐嫣秀美甲正确方式](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E7%A7%80%E7%BE%8E%E7%94%B2%E6%AD%A3%E7%A1%AE%E6%96%B9%E5%BC%8F%23) `292.4K 🔥` `NEW`
1. [上海多个班级通知全班居家隔离](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%A4%9A%E4%B8%AA%E7%8F%AD%E7%BA%A7%E9%80%9A%E7%9F%A5%E5%85%A8%E7%8F%AD%E5%B1%85%E5%AE%B6%E9%9A%94%E7%A6%BB%23) `291.2K 🔥` `NEW`
1. [8年前的孙千](https://s.weibo.com/weibo?q=%238%E5%B9%B4%E5%89%8D%E7%9A%84%E5%AD%99%E5%8D%83%23) `289.2K 🔥` `NEW`
1. [兰香如故 抓小三](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%20%E6%8A%93%E5%B0%8F%E4%B8%89%23) `288.2K 🔥` `NEW`
1. [英雄联盟官方恭喜AL](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9F%E5%AE%98%E6%96%B9%E6%81%AD%E5%96%9CAL%23) `286.8K 🔥` `NEW`
1. [三大AI巨头联手呼吁放缓开发步伐](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%A4%A7AI%E5%B7%A8%E5%A4%B4%E8%81%94%E6%89%8B%E5%91%BC%E5%90%81%E6%94%BE%E7%BC%93%E5%BC%80%E5%8F%91%E6%AD%A5%E4%BC%90%23) `286.4K 🔥` `NEW`
1. [中微公司82岁董事长套现5300万](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%BE%AE%E5%85%AC%E5%8F%B882%E5%B2%81%E8%91%A3%E4%BA%8B%E9%95%BF%E5%A5%97%E7%8E%B05300%E4%B8%87%23) `284.7K 🔥` `NEW`
1. [乐高拼的王一博](https://s.weibo.com/weibo?q=%23%E4%B9%90%E9%AB%98%E6%8B%BC%E7%9A%84%E7%8E%8B%E4%B8%80%E5%8D%9A%23) `283.8K 🔥` `NEW`
1. [张本美和冠军](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%E5%86%A0%E5%86%9B%23) `282.9K 🔥` `NEW`
1. [王俊凯的键盘上贴了粉毛照片](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%9A%84%E9%94%AE%E7%9B%98%E4%B8%8A%E8%B4%B4%E4%BA%86%E7%B2%89%E6%AF%9B%E7%85%A7%E7%89%87%23) `282.0K 🔥` `NEW`
1. [呼吸哥哭了](https://s.weibo.com/weibo?q=%23%E5%91%BC%E5%90%B8%E5%93%A5%E5%93%AD%E4%BA%86%23) `281.3K 🔥` `NEW`
1. [海底捞最伟大的吃法出现了](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%BA%95%E6%8D%9E%E6%9C%80%E4%BC%9F%E5%A4%A7%E7%9A%84%E5%90%83%E6%B3%95%E5%87%BA%E7%8E%B0%E4%BA%86%23) `279.9K 🔥` `NEW`
1. [兰香如故热度破28000](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E7%83%AD%E5%BA%A6%E7%A0%B428000%23) `279.1K 🔥` `NEW`
1. [萧敬腾演唱会女生拒绝男友亲吻转头亲了闺蜜](https://s.weibo.com/weibo?q=%23%E8%90%A7%E6%95%AC%E8%85%BE%E6%BC%94%E5%94%B1%E4%BC%9A%E5%A5%B3%E7%94%9F%E6%8B%92%E7%BB%9D%E7%94%B7%E5%8F%8B%E4%BA%B2%E5%90%BB%E8%BD%AC%E5%A4%B4%E4%BA%B2%E4%BA%86%E9%97%BA%E8%9C%9C%23) `277.9K 🔥` `NEW`
1. [特朗普再次让英国难堪](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%86%8D%E6%AC%A1%E8%AE%A9%E8%8B%B1%E5%9B%BD%E9%9A%BE%E5%A0%AA%23) `276.8K 🔥` `NEW`
1. [莫雷加德4比1雨果](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E9%9B%B7%E5%8A%A0%E5%BE%B74%E6%AF%941%E9%9B%A8%E6%9E%9C%23) `276.4K 🔥` `NEW`
1. [张本美和三连冠](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%E4%B8%89%E8%BF%9E%E5%86%A0%23) `275.4K 🔥` `NEW`
1. [金砖国家领导人集体合影](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%A0%96%E5%9B%BD%E5%AE%B6%E9%A2%86%E5%AF%BC%E4%BA%BA%E9%9B%86%E4%BD%93%E5%90%88%E5%BD%B1%23) `274.6K 🔥` `NEW`
1. [Bin力竭了](https://s.weibo.com/weibo?q=%23Bin%E5%8A%9B%E7%AB%AD%E4%BA%86%23) `273.0K 🔥` `NEW`
1. [我国从来没有第一学历这个概念](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E4%BB%8E%E6%9D%A5%E6%B2%A1%E6%9C%89%E7%AC%AC%E4%B8%80%E5%AD%A6%E5%8E%86%E8%BF%99%E4%B8%AA%E6%A6%82%E5%BF%B5%23) `272.6K 🔥` `NEW`
1. [Hope决赛五杀](https://s.weibo.com/weibo?q=%23Hope%E5%86%B3%E8%B5%9B%E4%BA%94%E6%9D%80%23) `259.1K 🔥` `NEW`
1. [BLG3-1AL预测](https://s.weibo.com/weibo?q=%23BLG3-1AL%E9%A2%84%E6%B5%8B%23) `239.4K 🔥` `NEW`
1. [爱笑 发微博](https://s.weibo.com/weibo?q=%23%E7%88%B1%E7%AC%91%20%E5%8F%91%E5%BE%AE%E5%8D%9A%23) `237.6K 🔥` `NEW`
1. [男子与女同事发生关系后脑出血](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%8E%E5%A5%B3%E5%90%8C%E4%BA%8B%E5%8F%91%E7%94%9F%E5%85%B3%E7%B3%BB%E5%90%8E%E8%84%91%E5%87%BA%E8%A1%80%23) `236.1K 🔥` `NEW`
1. [王一博 乐高](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%20%E4%B9%90%E9%AB%98%23) `227.1K 🔥` `NEW`
1. [张真源练的歌是王源的骄傲](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E7%BB%83%E7%9A%84%E6%AD%8C%E6%98%AF%E7%8E%8B%E6%BA%90%E7%9A%84%E9%AA%84%E5%82%B2%23) `226.9K 🔥` `NEW`
1. [Tarzan历时3015天夺得联赛首冠](https://s.weibo.com/weibo?q=%23Tarzan%E5%8E%86%E6%97%B63015%E5%A4%A9%E5%A4%BA%E5%BE%97%E8%81%94%E8%B5%9B%E9%A6%96%E5%86%A0%23) `219.5K 🔥` `NEW`
1. [空管 劳务派遣](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E7%AE%A1%20%E5%8A%B3%E5%8A%A1%E6%B4%BE%E9%81%A3%23) `214.3K 🔥` `NEW`
1. [英雄联盟15周年盛典](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9F15%E5%91%A8%E5%B9%B4%E7%9B%9B%E5%85%B8%23) `212.6K 🔥` `NEW`
1. [iPhone18Pro转手就能加价3000元](https://s.weibo.com/weibo?q=%23iPhone18Pro%E8%BD%AC%E6%89%8B%E5%B0%B1%E8%83%BD%E5%8A%A0%E4%BB%B73000%E5%85%83%23) `178.0K 🔥` `NEW`
1. [张子枫马嘉祺我们生活在南京招商](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E6%9E%AB%E9%A9%AC%E5%98%89%E7%A5%BA%E6%88%91%E4%BB%AC%E7%94%9F%E6%B4%BB%E5%9C%A8%E5%8D%97%E4%BA%AC%E6%8B%9B%E5%95%86%23) `177.8K 🔥` `NEW`
1. [单依纯巡演](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E5%B7%A1%E6%BC%94%23) `177.5K 🔥` `NEW`
1. [泰国和尚藏4.28亿泰铢](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E5%92%8C%E5%B0%9A%E8%97%8F4.28%E4%BA%BF%E6%B3%B0%E9%93%A2%23) `177.3K 🔥` `NEW`
1. [女儿房间怪味难消爸爸挪开柜子看傻](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E6%88%BF%E9%97%B4%E6%80%AA%E5%91%B3%E9%9A%BE%E6%B6%88%E7%88%B8%E7%88%B8%E6%8C%AA%E5%BC%80%E6%9F%9C%E5%AD%90%E7%9C%8B%E5%82%BB%23) `177.0K 🔥` `NEW`
1. [井柏然孙千偷偷牵手](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%AD%99%E5%8D%83%E5%81%B7%E5%81%B7%E7%89%B5%E6%89%8B%23) `1.1M 🔥` `+265%`
1. [野人先生回应罗永浩说难吃](https://s.weibo.com/weibo?q=%23%E9%87%8E%E4%BA%BA%E5%85%88%E7%94%9F%E5%9B%9E%E5%BA%94%E7%BD%97%E6%B0%B8%E6%B5%A9%E8%AF%B4%E9%9A%BE%E5%90%83%23) `289.7K 🔥`
1. [北方 隐翅虫](https://s.weibo.com/weibo?q=%23%E5%8C%97%E6%96%B9%20%E9%9A%90%E7%BF%85%E8%99%AB%23) `245.2K 🔥`
1. [BLG对战AL](https://s.weibo.com/weibo?q=%23BLG%E5%AF%B9%E6%88%98AL%23) `208.8K 🔥` `-29%`
1. [旅行了很多次才知道的事](https://s.weibo.com/weibo?q=%23%E6%97%85%E8%A1%8C%E4%BA%86%E5%BE%88%E5%A4%9A%E6%AC%A1%E6%89%8D%E7%9F%A5%E9%81%93%E7%9A%84%E4%BA%8B%23) `190.2K 🔥` `-26%`
1. [敬一丹去世](https://s.weibo.com/weibo?q=%23%E6%95%AC%E4%B8%80%E4%B8%B9%E5%8E%BB%E4%B8%96%23) `176.9K 🔥` `-71%`

Updated at 2026-09-13 21:55:37

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
