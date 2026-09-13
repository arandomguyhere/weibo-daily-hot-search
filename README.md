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

1. [王曼昱回应登顶世界第一](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%9B%9E%E5%BA%94%E7%99%BB%E9%A1%B6%E4%B8%96%E7%95%8C%E7%AC%AC%E4%B8%80%23) `873.5K 🔥` `NEW`
1. [恩佐 曼城](https://s.weibo.com/weibo?q=%23%E6%81%A9%E4%BD%90%20%E6%9B%BC%E5%9F%8E%23) `634.2K 🔥` `NEW`
1. [我国硬核成果上新了](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E7%A1%AC%E6%A0%B8%E6%88%90%E6%9E%9C%E4%B8%8A%E6%96%B0%E4%BA%86%23) `596.9K 🔥` `NEW`
1. [乐高品牌代言人王一博](https://s.weibo.com/weibo?q=%23%E4%B9%90%E9%AB%98%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%E7%8E%8B%E4%B8%80%E5%8D%9A%23) `590.0K 🔥` `NEW`
1. [iPhone18Pro勃艮第酒红色卖爆了](https://s.weibo.com/weibo?q=%23iPhone18Pro%E5%8B%83%E8%89%AE%E7%AC%AC%E9%85%92%E7%BA%A2%E8%89%B2%E5%8D%96%E7%88%86%E4%BA%86%23) `271.4K 🔥` `NEW`
1. [在淘宝开学时装周找到了理想型](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E6%B7%98%E5%AE%9D%E5%BC%80%E5%AD%A6%E6%97%B6%E8%A3%85%E5%91%A8%E6%89%BE%E5%88%B0%E4%BA%86%E7%90%86%E6%83%B3%E5%9E%8B%23) `220.8K 🔥` `NEW`
1. [兹维列夫首夺美网冠军](https://s.weibo.com/weibo?q=%23%E5%85%B9%E7%BB%B4%E5%88%97%E5%A4%AB%E9%A6%96%E5%A4%BA%E7%BE%8E%E7%BD%91%E5%86%A0%E5%86%9B%23) `210.1K 🔥` `NEW`
1. [兰香如故](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%23) `163.8K 🔥` `NEW`
1. [井柏然孙千体面](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%AD%99%E5%8D%83%E4%BD%93%E9%9D%A2%23) `163.3K 🔥` `NEW`
1. [英国](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%23) `161.7K 🔥` `NEW`
1. [彭小苒直播穿的衣服](https://s.weibo.com/weibo?q=%23%E5%BD%AD%E5%B0%8F%E8%8B%92%E7%9B%B4%E6%92%AD%E7%A9%BF%E7%9A%84%E8%A1%A3%E6%9C%8D%23) `158.5K 🔥` `NEW`
1. [美网男单决赛 难看](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%BD%91%E7%94%B7%E5%8D%95%E5%86%B3%E8%B5%9B%20%E9%9A%BE%E7%9C%8B%23) `158.2K 🔥` `NEW`
1. [福建前首富拟套现超2亿](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E5%89%8D%E9%A6%96%E5%AF%8C%E6%8B%9F%E5%A5%97%E7%8E%B0%E8%B6%852%E4%BA%BF%23) `144.8K 🔥` `NEW`
1. [这才是身体需要的7种休息](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%89%8D%E6%98%AF%E8%BA%AB%E4%BD%93%E9%9C%80%E8%A6%81%E7%9A%847%E7%A7%8D%E4%BC%91%E6%81%AF%23) `130.4K 🔥` `NEW`
1. [彭小苒工作室致歉声明](https://s.weibo.com/weibo?q=%23%E5%BD%AD%E5%B0%8F%E8%8B%92%E5%B7%A5%E4%BD%9C%E5%AE%A4%E8%87%B4%E6%AD%89%E5%A3%B0%E6%98%8E%23) `109.2K 🔥` `NEW`
1. [兰香如故李梦马闻远扭腰杀](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E6%9D%8E%E6%A2%A6%E9%A9%AC%E9%97%BB%E8%BF%9C%E6%89%AD%E8%85%B0%E6%9D%80%23) `78.2K 🔥` `NEW`
1. [英超承认哈兰德进球有效是误判](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E8%B6%85%E6%89%BF%E8%AE%A4%E5%93%88%E5%85%B0%E5%BE%B7%E8%BF%9B%E7%90%83%E6%9C%89%E6%95%88%E6%98%AF%E8%AF%AF%E5%88%A4%23) `78.2K 🔥` `NEW`
1. [乐高拼的王一博](https://s.weibo.com/weibo?q=%23%E4%B9%90%E9%AB%98%E6%8B%BC%E7%9A%84%E7%8E%8B%E4%B8%80%E5%8D%9A%23) `78.1K 🔥` `NEW`
1. [张本美和说一直没有赢过孙颖莎](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%E8%AF%B4%E4%B8%80%E7%9B%B4%E6%B2%A1%E6%9C%89%E8%B5%A2%E8%BF%87%E5%AD%99%E9%A2%96%E8%8E%8E%23) `78.1K 🔥` `NEW`
1. [兹维列夫今年两夺大满贯](https://s.weibo.com/weibo?q=%23%E5%85%B9%E7%BB%B4%E5%88%97%E5%A4%AB%E4%BB%8A%E5%B9%B4%E4%B8%A4%E5%A4%BA%E5%A4%A7%E6%BB%A1%E8%B4%AF%23) `78.1K 🔥` `NEW`
1. [曼联vs曼城](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E8%81%94vs%E6%9B%BC%E5%9F%8E%23) `70.9K 🔥` `NEW`
1. [OPPO FindX10外观设计](https://s.weibo.com/weibo?q=%23OPPO%20FindX10%E5%A4%96%E8%A7%82%E8%AE%BE%E8%AE%A1%23) `61.2K 🔥` `NEW`
1. [渔民落水11天后事都办了他回来了](https://s.weibo.com/weibo?q=%23%E6%B8%94%E6%B0%91%E8%90%BD%E6%B0%B411%E5%A4%A9%E5%90%8E%E4%BA%8B%E9%83%BD%E5%8A%9E%E4%BA%86%E4%BB%96%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `61.1K 🔥` `NEW`
1. [陈妍希家里缺一个立规矩的人](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E5%AE%B6%E9%87%8C%E7%BC%BA%E4%B8%80%E4%B8%AA%E7%AB%8B%E8%A7%84%E7%9F%A9%E7%9A%84%E4%BA%BA%23) `57.8K 🔥` `NEW`
1. [美国女篮vs法国女篮](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A5%B3%E7%AF%AEvs%E6%B3%95%E5%9B%BD%E5%A5%B3%E7%AF%AE%23) `54.1K 🔥` `NEW`
1. [本以为是姐姐没想到是邵子恒的妈妈](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E4%BB%A5%E4%B8%BA%E6%98%AF%E5%A7%90%E5%A7%90%E6%B2%A1%E6%83%B3%E5%88%B0%E6%98%AF%E9%82%B5%E5%AD%90%E6%81%92%E7%9A%84%E5%A6%88%E5%A6%88%23) `52.9K 🔥` `NEW`
1. [大学生生活费才3000](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E7%94%9F%E7%94%9F%E6%B4%BB%E8%B4%B9%E6%89%8D3000%23) `571.3K 🔥` `+337%`
1. [中国足球小将西班牙捧杯](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%B6%B3%E7%90%83%E5%B0%8F%E5%B0%86%E8%A5%BF%E7%8F%AD%E7%89%99%E6%8D%A7%E6%9D%AF%23) `261.7K 🔥` `+349%`
1. [脑出血牢记3警惕4步骤](https://s.weibo.com/weibo?q=%23%E8%84%91%E5%87%BA%E8%A1%80%E7%89%A2%E8%AE%B03%E8%AD%A6%E6%83%954%E6%AD%A5%E9%AA%A4%23) `216.7K 🔥` `+334%`
1. [情侣在演唱会求婚遭后排喊坐下](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E5%9C%A8%E6%BC%94%E5%94%B1%E4%BC%9A%E6%B1%82%E5%A9%9A%E9%81%AD%E5%90%8E%E6%8E%92%E5%96%8A%E5%9D%90%E4%B8%8B%23) `160.6K 🔥` `+397%`
1. [我国从来没有第一学历这个概念](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E4%BB%8E%E6%9D%A5%E6%B2%A1%E6%9C%89%E7%AC%AC%E4%B8%80%E5%AD%A6%E5%8E%86%E8%BF%99%E4%B8%AA%E6%A6%82%E5%BF%B5%23) `159.8K 🔥` `+435%`
1. [每延误1分钟约190万脑细胞死亡](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%BB%B6%E8%AF%AF1%E5%88%86%E9%92%9F%E7%BA%A6190%E4%B8%87%E8%84%91%E7%BB%86%E8%83%9E%E6%AD%BB%E4%BA%A1%23) `156.6K 🔥` `+410%`
1. [井柏然孙千偷偷牵手](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%AD%99%E5%8D%83%E5%81%B7%E5%81%B7%E7%89%B5%E6%89%8B%23) `156.3K 🔥` `+290%`
1. [被举报116次的烧烤店被责令整改](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E4%B8%BE%E6%8A%A5116%E6%AC%A1%E7%9A%84%E7%83%A7%E7%83%A4%E5%BA%97%E8%A2%AB%E8%B4%A3%E4%BB%A4%E6%95%B4%E6%94%B9%23) `133.0K 🔥` `+256%`
1. [赵雷鸟巢演唱会](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E9%9B%B7%E9%B8%9F%E5%B7%A2%E6%BC%94%E5%94%B1%E4%BC%9A%23) `130.5K 🔥` `+353%`
1. [日本亏本也要卖给中国图什么](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%8F%E6%9C%AC%E4%B9%9F%E8%A6%81%E5%8D%96%E7%BB%99%E4%B8%AD%E5%9B%BD%E5%9B%BE%E4%BB%80%E4%B9%88%23) `130.2K 🔥` `+412%`
1. [曼联0比1曼城](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E8%81%940%E6%AF%941%E6%9B%BC%E5%9F%8E%23) `127.7K 🔥` `+265%`
1. [人类语言被AI一秒抛弃](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%B1%BB%E8%AF%AD%E8%A8%80%E8%A2%ABAI%E4%B8%80%E7%A7%92%E6%8A%9B%E5%BC%83%23) `123.3K 🔥` `+385%`
1. [女篮世界杯决赛](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%AF%AE%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%23) `122.2K 🔥` `+151%`
1. [王曼昱登顶世界第一](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E7%99%BB%E9%A1%B6%E4%B8%96%E7%95%8C%E7%AC%AC%E4%B8%80%23) `118.0K 🔥` `+280%`
1. [东京没下雨也没淋湿巴黎](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E4%BA%AC%E6%B2%A1%E4%B8%8B%E9%9B%A8%E4%B9%9F%E6%B2%A1%E6%B7%8B%E6%B9%BF%E5%B7%B4%E9%BB%8E%23) `78.2K 🔥` `+207%`
1. [上海多个班级通知全班居家隔离](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%A4%9A%E4%B8%AA%E7%8F%AD%E7%BA%A7%E9%80%9A%E7%9F%A5%E5%85%A8%E7%8F%AD%E5%B1%85%E5%AE%B6%E9%9A%94%E7%A6%BB%23) `78.2K 🔥` `+174%`
1. [张本美和冠军](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%E5%86%A0%E5%86%9B%23) `78.1K 🔥` `+186%`
1. [敬一丹曾说母亲的肯定影响了她](https://s.weibo.com/weibo?q=%23%E6%95%AC%E4%B8%80%E4%B8%B9%E6%9B%BE%E8%AF%B4%E6%AF%8D%E4%BA%B2%E7%9A%84%E8%82%AF%E5%AE%9A%E5%BD%B1%E5%93%8D%E4%BA%86%E5%A5%B9%23) `78.1K 🔥` `+165%`
1. [脑出血该如何预防](https://s.weibo.com/weibo?q=%23%E8%84%91%E5%87%BA%E8%A1%80%E8%AF%A5%E5%A6%82%E4%BD%95%E9%A2%84%E9%98%B2%23) `78.1K 🔥` `+140%`
1. [AL夺冠](https://s.weibo.com/weibo?q=%23AL%E5%A4%BA%E5%86%A0%23) `65.0K 🔥` `+121%`
1. [哈兰德 多尔古](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%20%E5%A4%9A%E5%B0%94%E5%8F%A4%23) `58.9K 🔥` `+132%`
1. [胖东来又在做什么实验](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E5%8F%88%E5%9C%A8%E5%81%9A%E4%BB%80%E4%B9%88%E5%AE%9E%E9%AA%8C%23) `58.3K 🔥` `+129%`
1. [三大AI巨头联手呼吁放缓开发步伐](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%A4%A7AI%E5%B7%A8%E5%A4%B4%E8%81%94%E6%89%8B%E5%91%BC%E5%90%81%E6%94%BE%E7%BC%93%E5%BC%80%E5%8F%91%E6%AD%A5%E4%BC%90%23) `55.2K 🔥` `+98%`
1. [网友爆国内某日本药企在918开年会](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E7%88%86%E5%9B%BD%E5%86%85%E6%9F%90%E6%97%A5%E6%9C%AC%E8%8D%AF%E4%BC%81%E5%9C%A8918%E5%BC%80%E5%B9%B4%E4%BC%9A%23) `54.2K 🔥` `+110%`
1. [白桃星座一周运势](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%A1%83%E6%98%9F%E5%BA%A7%E4%B8%80%E5%91%A8%E8%BF%90%E5%8A%BF%23) `129.4K 🔥` `-28%`
1. [寻找金砖温度的答案](https://s.weibo.com/weibo?q=%23%E5%AF%BB%E6%89%BE%E9%87%91%E7%A0%96%E6%B8%A9%E5%BA%A6%E7%9A%84%E7%AD%94%E6%A1%88%23) `55.7K 🔥` `-46%`

Updated at 2026-09-14 07:32:00

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
