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

1. [中国人民和美国人民都是伟大的人民](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91%E5%92%8C%E7%BE%8E%E5%9B%BD%E4%BA%BA%E6%B0%91%E9%83%BD%E6%98%AF%E4%BC%9F%E5%A4%A7%E7%9A%84%E4%BA%BA%E6%B0%91%23) `1.0M 🔥` `NEW`
1. [亚运国乒vs日本](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E5%9B%BD%E4%B9%92vs%E6%97%A5%E6%9C%AC%23) `1.0M 🔥` `NEW`
1. [美国青年读懂真实立体的中国](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E9%9D%92%E5%B9%B4%E8%AF%BB%E6%87%82%E7%9C%9F%E5%AE%9E%E7%AB%8B%E4%BD%93%E7%9A%84%E4%B8%AD%E5%9B%BD%23) `991.1K 🔥` `NEW`
1. [王楚钦第四盘对阵张本智和](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%AC%AC%E5%9B%9B%E7%9B%98%E5%AF%B9%E9%98%B5%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `936.3K 🔥` `NEW`
1. [赛力斯 问界](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E5%8A%9B%E6%96%AF%20%E9%97%AE%E7%95%8C%23) `900.5K 🔥` `NEW`
1. [中国vs日本乒乓球男团决赛对阵](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BDvs%E6%97%A5%E6%9C%AC%E4%B9%92%E4%B9%93%E7%90%83%E7%94%B7%E5%9B%A2%E5%86%B3%E8%B5%9B%E5%AF%B9%E9%98%B5%23) `884.8K 🔥` `NEW`
1. [下一站游无锡](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E4%B8%80%E7%AB%99%E6%B8%B8%E6%97%A0%E9%94%A1%23) `872.0K 🔥` `NEW`
1. [王楚钦vs松岛辉空](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%23) `756.8K 🔥` `NEW`
1. [张展硕六金王](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B1%95%E7%A1%95%E5%85%AD%E9%87%91%E7%8E%8B%23) `755.7K 🔥` `NEW`
1. [温瑞博vs张本智和](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E7%91%9E%E5%8D%9Avs%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `731.2K 🔥` `NEW`
1. [张展硕800米破纪录夺冠](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B1%95%E7%A1%95800%E7%B1%B3%E7%A0%B4%E7%BA%AA%E5%BD%95%E5%A4%BA%E5%86%A0%23) `722.8K 🔥` `NEW`
1. [国乒意外变阵](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E6%84%8F%E5%A4%96%E5%8F%98%E9%98%B5%23) `720.2K 🔥` `NEW`
1. [国乒用田忌赛马战术打日本](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%A8%E7%94%B0%E5%BF%8C%E8%B5%9B%E9%A9%AC%E6%88%98%E6%9C%AF%E6%89%93%E6%97%A5%E6%9C%AC%23) `704.5K 🔥` `NEW`
1. [林诗栋vs户上隼辅](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8Bvs%E6%88%B7%E4%B8%8A%E9%9A%BC%E8%BE%85%23) `681.8K 🔥` `NEW`
1. [王朱悦回应换脸争议](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9C%B1%E6%82%A6%E5%9B%9E%E5%BA%94%E6%8D%A2%E8%84%B8%E4%BA%89%E8%AE%AE%23) `574.8K 🔥` `NEW`
1. [THE9全员给谢可寅新剧打call](https://s.weibo.com/weibo?q=%23THE9%E5%85%A8%E5%91%98%E7%BB%99%E8%B0%A2%E5%8F%AF%E5%AF%85%E6%96%B0%E5%89%A7%E6%89%93call%23) `510.4K 🔥` `NEW`
1. [建议车企工程师多出来接受采访](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E8%BD%A6%E4%BC%81%E5%B7%A5%E7%A8%8B%E5%B8%88%E5%A4%9A%E5%87%BA%E6%9D%A5%E6%8E%A5%E5%8F%97%E9%87%87%E8%AE%BF%23) `430.1K 🔥` `NEW`
1. [荣耀Magic9价格公布](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80Magic9%E4%BB%B7%E6%A0%BC%E5%85%AC%E5%B8%83%23) `393.4K 🔥` `NEW`
1. [国乒男团1比1日本男团](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A21%E6%AF%941%E6%97%A5%E6%9C%AC%E7%94%B7%E5%9B%A2%23) `317.1K 🔥` `NEW`
1. [年轻人真的很擅长让自己幸福](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%9C%9F%E7%9A%84%E5%BE%88%E6%93%85%E9%95%BF%E8%AE%A9%E8%87%AA%E5%B7%B1%E5%B9%B8%E7%A6%8F%23) `316.9K 🔥` `NEW`
1. [3女子被高薪工作骗到泰国性侵囚禁](https://s.weibo.com/weibo?q=%233%E5%A5%B3%E5%AD%90%E8%A2%AB%E9%AB%98%E8%96%AA%E5%B7%A5%E4%BD%9C%E9%AA%97%E5%88%B0%E6%B3%B0%E5%9B%BD%E6%80%A7%E4%BE%B5%E5%9B%9A%E7%A6%81%23) `316.0K 🔥` `NEW`
1. [游本昌临终遗言](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E6%9C%AC%E6%98%8C%E4%B8%B4%E7%BB%88%E9%81%97%E8%A8%80%23) `315.2K 🔥` `NEW`
1. [井柏然刘雯秀场同框照](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%88%98%E9%9B%AF%E7%A7%80%E5%9C%BA%E5%90%8C%E6%A1%86%E7%85%A7%23) `313.6K 🔥` `NEW`
1. [王祉怡冲刺拥抱陈雨菲](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%A5%89%E6%80%A1%E5%86%B2%E5%88%BA%E6%8B%A5%E6%8A%B1%E9%99%88%E9%9B%A8%E8%8F%B2%23) `312.7K 🔥` `NEW`
1. [杨幂和李现聊小糯米](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%92%8C%E6%9D%8E%E7%8E%B0%E8%81%8A%E5%B0%8F%E7%B3%AF%E7%B1%B3%23) `312.0K 🔥` `NEW`
1. [王一博剪了短发](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%89%AA%E4%BA%86%E7%9F%AD%E5%8F%91%23) `310.7K 🔥` `NEW`
1. [婆婆给怀孕儿媳送装满钱的月饼礼盒](https://s.weibo.com/weibo?q=%23%E5%A9%86%E5%A9%86%E7%BB%99%E6%80%80%E5%AD%95%E5%84%BF%E5%AA%B3%E9%80%81%E8%A3%85%E6%BB%A1%E9%92%B1%E7%9A%84%E6%9C%88%E9%A5%BC%E7%A4%BC%E7%9B%92%23) `310.5K 🔥` `NEW`
1. [胡歌悼念游本昌](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%AD%8C%E6%82%BC%E5%BF%B5%E6%B8%B8%E6%9C%AC%E6%98%8C%23) `305.9K 🔥` `NEW`
1. [王楚钦3比2逆转松岛辉空](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A63%E6%AF%942%E9%80%86%E8%BD%AC%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%23) `285.6K 🔥` `NEW`
1. [保研](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E7%A0%94%23) `284.4K 🔥` `NEW`
1. [微微一笑很倾城改名一笑倾城](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%BE%AE%E4%B8%80%E7%AC%91%E5%BE%88%E5%80%BE%E5%9F%8E%E6%94%B9%E5%90%8D%E4%B8%80%E7%AC%91%E5%80%BE%E5%9F%8E%23) `284.4K 🔥` `NEW`
1. [硕士生因被偷缴社保无法考编](https://s.weibo.com/weibo?q=%23%E7%A1%95%E5%A3%AB%E7%94%9F%E5%9B%A0%E8%A2%AB%E5%81%B7%E7%BC%B4%E7%A4%BE%E4%BF%9D%E6%97%A0%E6%B3%95%E8%80%83%E7%BC%96%23) `284.3K 🔥` `NEW`
1. [网友质疑直播间49元5斤多宝鱼货源](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E8%B4%A8%E7%96%91%E7%9B%B4%E6%92%AD%E9%97%B449%E5%85%835%E6%96%A4%E5%A4%9A%E5%AE%9D%E9%B1%BC%E8%B4%A7%E6%BA%90%23) `261.2K 🔥` `NEW`
1. [张展硕个人第5金](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B1%95%E7%A1%95%E4%B8%AA%E4%BA%BA%E7%AC%AC5%E9%87%91%23) `260.7K 🔥` `NEW`
1. [特朗普提前近1小时抵达机场准备迎接](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%8F%90%E5%89%8D%E8%BF%911%E5%B0%8F%E6%97%B6%E6%8A%B5%E8%BE%BE%E6%9C%BA%E5%9C%BA%E5%87%86%E5%A4%87%E8%BF%8E%E6%8E%A5%23) `247.5K 🔥` `NEW`
1. [余承东首曝尊界SUV](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E9%A6%96%E6%9B%9D%E5%B0%8A%E7%95%8CSUV%23) `244.4K 🔥` `NEW`
1. [杨玏王玉雯体面](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%8E%8F%E7%8E%8B%E7%8E%89%E9%9B%AF%E4%BD%93%E9%9D%A2%23) `242.0K 🔥` `NEW`
1. [油价25日起上调](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B725%E6%97%A5%E8%B5%B7%E4%B8%8A%E8%B0%83%23) `227.8K 🔥` `NEW`
1. [孩子哭闹跑头等舱妈妈反问为什么不行](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E5%93%AD%E9%97%B9%E8%B7%91%E5%A4%B4%E7%AD%89%E8%88%B1%E5%A6%88%E5%A6%88%E5%8F%8D%E9%97%AE%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E8%A1%8C%23) `224.8K 🔥` `NEW`
1. [一笑倾城 王朱悦](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%AC%91%E5%80%BE%E5%9F%8E%20%E7%8E%8B%E6%9C%B1%E6%82%A6%23) `214.2K 🔥` `NEW`
1. [王源把表情包拿反了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E6%8A%8A%E8%A1%A8%E6%83%85%E5%8C%85%E6%8B%BF%E5%8F%8D%E4%BA%86%23) `209.9K 🔥` `NEW`
1. [韩国游客问西藏有韩国大吗](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%B8%B8%E5%AE%A2%E9%97%AE%E8%A5%BF%E8%97%8F%E6%9C%89%E9%9F%A9%E5%9B%BD%E5%A4%A7%E5%90%97%23) `208.9K 🔥` `NEW`
1. [兰香如故下周单更](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E4%B8%8B%E5%91%A8%E5%8D%95%E6%9B%B4%23) `201.8K 🔥` `NEW`
1. [女生买房后见的男生质量确实不一样](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E4%B9%B0%E6%88%BF%E5%90%8E%E8%A7%81%E7%9A%84%E7%94%B7%E7%94%9F%E8%B4%A8%E9%87%8F%E7%A1%AE%E5%AE%9E%E4%B8%8D%E4%B8%80%E6%A0%B7%23) `201.7K 🔥` `NEW`
1. [亚运会](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `180.2K 🔥` `NEW`
1. [丰收画卷里的中国味道](https://s.weibo.com/weibo?q=%23%E4%B8%B0%E6%94%B6%E7%94%BB%E5%8D%B7%E9%87%8C%E7%9A%84%E4%B8%AD%E5%9B%BD%E5%91%B3%E9%81%93%23) `171.3K 🔥` `NEW`
1. [王彦桐荣耀新片看哭每个离家的人](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%BD%A6%E6%A1%90%E8%8D%A3%E8%80%80%E6%96%B0%E7%89%87%E7%9C%8B%E5%93%AD%E6%AF%8F%E4%B8%AA%E7%A6%BB%E5%AE%B6%E7%9A%84%E4%BA%BA%23) `167.6K 🔥` `NEW`
1. [荣耀Magic9性价比对比](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80Magic9%E6%80%A7%E4%BB%B7%E6%AF%94%E5%AF%B9%E6%AF%94%23) `164.9K 🔥` `NEW`
1. [国乒男团1比0日本男团](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A21%E6%AF%940%E6%97%A5%E6%9C%AC%E7%94%B7%E5%9B%A2%23) `158.6K 🔥` `NEW`
1. [用小米有意思 上京东够意思](https://s.weibo.com/weibo?q=%23%E7%94%A8%E5%B0%8F%E7%B1%B3%E6%9C%89%E6%84%8F%E6%80%9D%20%E4%B8%8A%E4%BA%AC%E4%B8%9C%E5%A4%9F%E6%84%8F%E6%80%9D%23) `961.5K 🔥` `+1430%`
1. [游本昌去世](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E6%9C%AC%E6%98%8C%E5%8E%BB%E4%B8%96%23) `292.7K 🔥`

Updated at 2026-09-24 18:18:45

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
