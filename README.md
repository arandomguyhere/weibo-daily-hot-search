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

1. [委员回应年轻人天天熬夜行不行 (Members responded to whether it is okay for young people to stay up late every day)](https://s.weibo.com/weibo?q=%23%E5%A7%94%E5%91%98%E5%9B%9E%E5%BA%94%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%A4%A9%E5%A4%A9%E7%86%AC%E5%A4%9C%E8%A1%8C%E4%B8%8D%E8%A1%8C%23) `804.2K 🔥` `NEW`
1. [建议年假天数按工龄递增](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%B9%B4%E5%81%87%E5%A4%A9%E6%95%B0%E6%8C%89%E5%B7%A5%E9%BE%84%E9%80%92%E5%A2%9E%23) `593.8K 🔥` `NEW`
1. [解读国家账本看数字背后](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E8%AF%BB%E5%9B%BD%E5%AE%B6%E8%B4%A6%E6%9C%AC%E7%9C%8B%E6%95%B0%E5%AD%97%E8%83%8C%E5%90%8E%23) `466.7K 🔥` `NEW`
1. [王濛拟被破格晋升](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E6%8B%9F%E8%A2%AB%E7%A0%B4%E6%A0%BC%E6%99%8B%E5%8D%87%23) `460.9K 🔥` `NEW`
1. [1斤赘肉换1斤牛肉已超千人报名](https://s.weibo.com/weibo?q=%231%E6%96%A4%E8%B5%98%E8%82%89%E6%8D%A21%E6%96%A4%E7%89%9B%E8%82%89%E5%B7%B2%E8%B6%85%E5%8D%83%E4%BA%BA%E6%8A%A5%E5%90%8D%23) `454.1K 🔥` `NEW`
1. [伊朗多弹头导弹袭击美军基地](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A4%9A%E5%BC%B9%E5%A4%B4%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%87%BB%E7%BE%8E%E5%86%9B%E5%9F%BA%E5%9C%B0%23) `449.6K 🔥` `NEW`
1. [锋芒上新全新以赴](https://s.weibo.com/weibo?q=%23%E9%94%8B%E8%8A%92%E4%B8%8A%E6%96%B0%E5%85%A8%E6%96%B0%E4%BB%A5%E8%B5%B4%23) `447.4K 🔥` `NEW`
1. [精灵黄lululemon发圈被炒到999元](https://s.weibo.com/weibo?q=%23%E7%B2%BE%E7%81%B5%E9%BB%84lululemon%E5%8F%91%E5%9C%88%E8%A2%AB%E7%82%92%E5%88%B0999%E5%85%83%23) `444.4K 🔥` `NEW`
1. [公积金提取](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E6%8F%90%E5%8F%96%23) `434.0K 🔥` `NEW`
1. [她把无声者的声音带到人民大会堂](https://s.weibo.com/weibo?q=%23%E5%A5%B9%E6%8A%8A%E6%97%A0%E5%A3%B0%E8%80%85%E7%9A%84%E5%A3%B0%E9%9F%B3%E5%B8%A6%E5%88%B0%E4%BA%BA%E6%B0%91%E5%A4%A7%E4%BC%9A%E5%A0%82%23) `425.2K 🔥` `NEW`
1. [乘风2026将全程直播 (Chengfeng 2026 will be broadcast live)](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E5%B0%86%E5%85%A8%E7%A8%8B%E7%9B%B4%E6%92%AD%23) `419.4K 🔥` `NEW`
1. [逐玉双平台破万](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%8F%8C%E5%B9%B3%E5%8F%B0%E7%A0%B4%E4%B8%87%23) `413.0K 🔥` `NEW`
1. [特朗普说对伊行动即将结束](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E5%AF%B9%E4%BC%8A%E8%A1%8C%E5%8A%A8%E5%8D%B3%E5%B0%86%E7%BB%93%E6%9D%9F%23) `404.2K 🔥` `NEW`
1. [张凌赫听到我结婚时的反应](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%90%AC%E5%88%B0%E6%88%91%E7%BB%93%E5%A9%9A%E6%97%B6%E7%9A%84%E5%8F%8D%E5%BA%94%23) `401.3K 🔥` `NEW`
1. [小水在看逐玉](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B0%B4%E5%9C%A8%E7%9C%8B%E9%80%90%E7%8E%89%23) `397.2K 🔥` `NEW`
1. [这才是普通身材的普通人穿搭](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%89%8D%E6%98%AF%E6%99%AE%E9%80%9A%E8%BA%AB%E6%9D%90%E7%9A%84%E6%99%AE%E9%80%9A%E4%BA%BA%E7%A9%BF%E6%90%AD%23) `397.0K 🔥` `NEW`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `396.7K 🔥` `NEW`
1. [MiuMiu](https://s.weibo.com/weibo?q=%23MiuMiu%23) `396.3K 🔥` `NEW`
1. [田曦薇背后抱量张凌赫腰围](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%83%8C%E5%90%8E%E6%8A%B1%E9%87%8F%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%85%B0%E5%9B%B4%23) `395.9K 🔥` `NEW`
1. [日本大阪一地下管道冲出地面18米](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A4%A7%E9%98%AA%E4%B8%80%E5%9C%B0%E4%B8%8B%E7%AE%A1%E9%81%93%E5%86%B2%E5%87%BA%E5%9C%B0%E9%9D%A218%E7%B1%B3%23) `395.7K 🔥` `NEW`
1. [3名美国富豪强奸性侵60名女性 (3 wealthy Americans raped and sexually assaulted 60 women)](https://s.weibo.com/weibo?q=%233%E5%90%8D%E7%BE%8E%E5%9B%BD%E5%AF%8C%E8%B1%AA%E5%BC%BA%E5%A5%B8%E6%80%A7%E4%BE%B560%E5%90%8D%E5%A5%B3%E6%80%A7%23) `395.4K 🔥` `NEW`
1. [公积金改革大潮真的来了](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E6%94%B9%E9%9D%A9%E5%A4%A7%E6%BD%AE%E7%9C%9F%E7%9A%84%E6%9D%A5%E4%BA%86%23) `395.1K 🔥` `NEW`
1. [伊朗称毁灭性打击美军基地](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E6%AF%81%E7%81%AD%E6%80%A7%E6%89%93%E5%87%BB%E7%BE%8E%E5%86%9B%E5%9F%BA%E5%9C%B0%23) `395.0K 🔥` `NEW`
1. [西班牙降级与以色列外交关系](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%99%8D%E7%BA%A7%E4%B8%8E%E4%BB%A5%E8%89%B2%E5%88%97%E5%A4%96%E4%BA%A4%E5%85%B3%E7%B3%BB%23) `394.7K 🔥` `NEW`
1. [逐玉 头纱](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E5%A4%B4%E7%BA%B1%23) `394.5K 🔥` `NEW`
1. [虞书欣国王开播一周年晒照](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%9B%BD%E7%8E%8B%E5%BC%80%E6%92%AD%E4%B8%80%E5%91%A8%E5%B9%B4%E6%99%92%E7%85%A7%23) `394.2K 🔥` `NEW`
1. [等我出国也这样说中文](https://s.weibo.com/weibo?q=%23%E7%AD%89%E6%88%91%E5%87%BA%E5%9B%BD%E4%B9%9F%E8%BF%99%E6%A0%B7%E8%AF%B4%E4%B8%AD%E6%96%87%23) `393.9K 🔥` `NEW`
1. [田曦薇逐玉破万贺图](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E9%80%90%E7%8E%89%E7%A0%B4%E4%B8%87%E8%B4%BA%E5%9B%BE%23) `393.6K 🔥` `NEW`
1. [分析称美国可能真的有点撑不住了](https://s.weibo.com/weibo?q=%23%E5%88%86%E6%9E%90%E7%A7%B0%E7%BE%8E%E5%9B%BD%E5%8F%AF%E8%83%BD%E7%9C%9F%E7%9A%84%E6%9C%89%E7%82%B9%E6%92%91%E4%B8%8D%E4%BD%8F%E4%BA%86%23) `393.3K 🔥` `NEW`
1. [打工人偷电宝](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%B7%A5%E4%BA%BA%E5%81%B7%E7%94%B5%E5%AE%9D%23) `393.1K 🔥` `NEW`
1. [每天花费近9亿美元美国要打不起了 (The United States cannot afford to spend nearly 900 million U.S. dollars every day.)](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%A4%A9%E8%8A%B1%E8%B4%B9%E8%BF%919%E4%BA%BF%E7%BE%8E%E5%85%83%E7%BE%8E%E5%9B%BD%E8%A6%81%E6%89%93%E4%B8%8D%E8%B5%B7%E4%BA%86%23) `392.7K 🔥` `NEW`
1. [为农民哽咽发声代表接到多部委电话](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E5%86%9C%E6%B0%91%E5%93%BD%E5%92%BD%E5%8F%91%E5%A3%B0%E4%BB%A3%E8%A1%A8%E6%8E%A5%E5%88%B0%E5%A4%9A%E9%83%A8%E5%A7%94%E7%94%B5%E8%AF%9D%23) `392.5K 🔥` `NEW`
1. [美官员称特朗普对伊朗反应有误判](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AE%98%E5%91%98%E7%A7%B0%E7%89%B9%E6%9C%97%E6%99%AE%E5%AF%B9%E4%BC%8A%E6%9C%97%E5%8F%8D%E5%BA%94%E6%9C%89%E8%AF%AF%E5%88%A4%23) `392.2K 🔥` `NEW`
1. [吴昕在大侦探爆哭](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%98%95%E5%9C%A8%E5%A4%A7%E4%BE%A6%E6%8E%A2%E7%88%86%E5%93%AD%23) `392.0K 🔥` `NEW`
1. [伊朗对美以发动38波攻击](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%B9%E7%BE%8E%E4%BB%A5%E5%8F%91%E5%8A%A838%E6%B3%A2%E6%94%BB%E5%87%BB%23) `391.7K 🔥` `NEW`
1. [上过班的才知道这有多幸福](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E8%BF%87%E7%8F%AD%E7%9A%84%E6%89%8D%E7%9F%A5%E9%81%93%E8%BF%99%E6%9C%89%E5%A4%9A%E5%B9%B8%E7%A6%8F%23) `391.6K 🔥` `NEW`
1. [建议允许60岁以上农民工继续务工](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%85%81%E8%AE%B860%E5%B2%81%E4%BB%A5%E4%B8%8A%E5%86%9C%E6%B0%91%E5%B7%A5%E7%BB%A7%E7%BB%AD%E5%8A%A1%E5%B7%A5%23) `391.3K 🔥` `NEW`
1. [保时捷营业利润暴跌92.7%](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%97%B6%E6%8D%B7%E8%90%A5%E4%B8%9A%E5%88%A9%E6%B6%A6%E6%9A%B4%E8%B7%8C92.7%25%23) `391.0K 🔥` `NEW`
1. [苏翊鸣拉塞尔同框](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E6%8B%89%E5%A1%9E%E5%B0%94%E5%90%8C%E6%A1%86%23) `390.6K 🔥` `NEW`
1. [外婆妈妈确诊乳腺癌女子恐惧睡不着](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%A9%86%E5%A6%88%E5%A6%88%E7%A1%AE%E8%AF%8A%E4%B9%B3%E8%85%BA%E7%99%8C%E5%A5%B3%E5%AD%90%E6%81%90%E6%83%A7%E7%9D%A1%E4%B8%8D%E7%9D%80%23) `390.4K 🔥` `NEW`
1. [宁德时代创始人曾毓群个人分红81亿 (Ningde Times founder Zeng Yuqun received a personal dividend of 8.1 billion)](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E5%88%9B%E5%A7%8B%E4%BA%BA%E6%9B%BE%E6%AF%93%E7%BE%A4%E4%B8%AA%E4%BA%BA%E5%88%86%E7%BA%A281%E4%BA%BF%23) `390.2K 🔥` `NEW`
1. [你更愿意喝9.9元还是30元的咖啡](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%9B%B4%E6%84%BF%E6%84%8F%E5%96%9D9.9%E5%85%83%E8%BF%98%E6%98%AF30%E5%85%83%E7%9A%84%E5%92%96%E5%95%A1%23) `389.9K 🔥` `NEW`
1. [狼队战胜WB](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E6%88%98%E8%83%9CWB%23) `389.6K 🔥` `NEW`
1. [曝AL签下Bigwei](https://s.weibo.com/weibo?q=%23%E6%9B%9DAL%E7%AD%BE%E4%B8%8BBigwei%23) `389.3K 🔥` `NEW`
1. [剑来](https://s.weibo.com/weibo?q=%23%E5%89%91%E6%9D%A5%23) `389.0K 🔥` `NEW`
1. [孙颖莎王楚钦到底激励了多少人](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%88%B0%E5%BA%95%E6%BF%80%E5%8A%B1%E4%BA%86%E5%A4%9A%E5%B0%91%E4%BA%BA%23) `388.8K 🔥` `NEW`
1. [孙千认认真真地追了29集](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E8%AE%A4%E8%AE%A4%E7%9C%9F%E7%9C%9F%E5%9C%B0%E8%BF%BD%E4%BA%8629%E9%9B%86%23) `388.4K 🔥` `NEW`
1. [建议加大带薪休假执法检查](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%8A%A0%E5%A4%A7%E5%B8%A6%E8%96%AA%E4%BC%91%E5%81%87%E6%89%A7%E6%B3%95%E6%A3%80%E6%9F%A5%23) `388.4K 🔥` `NEW`
1. [国防部回应日本部署远程导弹](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%98%B2%E9%83%A8%E5%9B%9E%E5%BA%94%E6%97%A5%E6%9C%AC%E9%83%A8%E7%BD%B2%E8%BF%9C%E7%A8%8B%E5%AF%BC%E5%BC%B9%23) `388.0K 🔥` `NEW`
1. [深圳男篮vs辽宁男篮](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E7%94%B7%E7%AF%AEvs%E8%BE%BD%E5%AE%81%E7%94%B7%E7%AF%AE%23) `387.8K 🔥` `NEW`

Updated at 2026-03-12 00:29:36

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
