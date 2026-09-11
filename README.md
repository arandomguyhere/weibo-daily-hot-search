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

1. [iPhone18Pro全球售价对比](https://s.weibo.com/weibo?q=%23iPhone18Pro%E5%85%A8%E7%90%83%E5%94%AE%E4%BB%B7%E5%AF%B9%E6%AF%94%23) `808.6K 🔥` `NEW`
1. [科学对话](https://s.weibo.com/weibo?q=%23%E7%A7%91%E5%AD%A6%E5%AF%B9%E8%AF%9D%23) `520.5K 🔥` `NEW`
1. [早春晴朗短剧版](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E7%9F%AD%E5%89%A7%E7%89%88%23) `380.0K 🔥` `NEW`
1. [iPhone确实一代比一代结实](https://s.weibo.com/weibo?q=%23iPhone%E7%A1%AE%E5%AE%9E%E4%B8%80%E4%BB%A3%E6%AF%94%E4%B8%80%E4%BB%A3%E7%BB%93%E5%AE%9E%23) `333.0K 🔥` `NEW`
1. [月薪1w是月薪5K的六倍](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA1w%E6%98%AF%E6%9C%88%E8%96%AA5K%E7%9A%84%E5%85%AD%E5%80%8D%23) `331.8K 🔥` `NEW`
1. [车间裸奔员工因离职情绪失控](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E9%97%B4%E8%A3%B8%E5%A5%94%E5%91%98%E5%B7%A5%E5%9B%A0%E7%A6%BB%E8%81%8C%E6%83%85%E7%BB%AA%E5%A4%B1%E6%8E%A7%23) `330.6K 🔥` `NEW`
1. [甲亢哥发现自己中文比阿信英文好](https://s.weibo.com/weibo?q=%23%E7%94%B2%E4%BA%A2%E5%93%A5%E5%8F%91%E7%8E%B0%E8%87%AA%E5%B7%B1%E4%B8%AD%E6%96%87%E6%AF%94%E9%98%BF%E4%BF%A1%E8%8B%B1%E6%96%87%E5%A5%BD%23) `327.8K 🔥` `NEW`
1. [重庆大学回应官俊臣军训遭围观拍摄](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%A4%A7%E5%AD%A6%E5%9B%9E%E5%BA%94%E5%AE%98%E4%BF%8A%E8%87%A3%E5%86%9B%E8%AE%AD%E9%81%AD%E5%9B%B4%E8%A7%82%E6%8B%8D%E6%91%84%23) `325.0K 🔥` `NEW`
1. [杨幂 花开不设限](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%20%E8%8A%B1%E5%BC%80%E4%B8%8D%E8%AE%BE%E9%99%90%23) `322.6K 🔥` `NEW`
1. [美联储9月加息概率](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%81%94%E5%82%A89%E6%9C%88%E5%8A%A0%E6%81%AF%E6%A6%82%E7%8E%87%23) `319.5K 🔥` `NEW`
1. [2026美网女单半决赛](https://s.weibo.com/weibo?q=%232026%E7%BE%8E%E7%BD%91%E5%A5%B3%E5%8D%95%E5%8D%8A%E5%86%B3%E8%B5%9B%23) `317.6K 🔥` `NEW`
1. [孙千不营业更新的原因](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E4%B8%8D%E8%90%A5%E4%B8%9A%E6%9B%B4%E6%96%B0%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `314.4K 🔥` `NEW`
1. [星宇股份又出错了](https://s.weibo.com/weibo?q=%23%E6%98%9F%E5%AE%87%E8%82%A1%E4%BB%BD%E5%8F%88%E5%87%BA%E9%94%99%E4%BA%86%23) `311.8K 🔥` `NEW`
1. [吴君如被邓为王星越喊小如乐开花](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%90%9B%E5%A6%82%E8%A2%AB%E9%82%93%E4%B8%BA%E7%8E%8B%E6%98%9F%E8%B6%8A%E5%96%8A%E5%B0%8F%E5%A6%82%E4%B9%90%E5%BC%80%E8%8A%B1%23) `307.4K 🔥` `NEW`
1. [花少8殷桃统筹全局](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%E6%AE%B7%E6%A1%83%E7%BB%9F%E7%AD%B9%E5%85%A8%E5%B1%80%23) `304.6K 🔥` `NEW`
1. [邓为就这样皱皱巴巴穿出去了](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%B8%BA%E5%B0%B1%E8%BF%99%E6%A0%B7%E7%9A%B1%E7%9A%B1%E5%B7%B4%E5%B7%B4%E7%A9%BF%E5%87%BA%E5%8E%BB%E4%BA%86%23) `298.0K 🔥` `NEW`
1. [胡塞武装占领曼德海峡关键港口](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%A1%9E%E6%AD%A6%E8%A3%85%E5%8D%A0%E9%A2%86%E6%9B%BC%E5%BE%B7%E6%B5%B7%E5%B3%A1%E5%85%B3%E9%94%AE%E6%B8%AF%E5%8F%A3%23) `297.2K 🔥` `NEW`
1. [李胜利被陌生醉酒男骚扰](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%83%9C%E5%88%A9%E8%A2%AB%E9%99%8C%E7%94%9F%E9%86%89%E9%85%92%E7%94%B7%E9%AA%9A%E6%89%B0%23) `295.4K 🔥` `NEW`
1. [井柏然曾坚持带生病马思纯出门散心](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E6%9B%BE%E5%9D%9A%E6%8C%81%E5%B8%A6%E7%94%9F%E7%97%85%E9%A9%AC%E6%80%9D%E7%BA%AF%E5%87%BA%E9%97%A8%E6%95%A3%E5%BF%83%23) `293.6K 🔥` `NEW`
1. [五大联赛欧冠首轮战绩](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%A4%A7%E8%81%94%E8%B5%9B%E6%AC%A7%E5%86%A0%E9%A6%96%E8%BD%AE%E6%88%98%E7%BB%A9%23) `292.6K 🔥` `NEW`
1. [黄晓明人品](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E4%BA%BA%E5%93%81%23) `291.0K 🔥` `NEW`
1. [网友建议阿信公开表态](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%BB%BA%E8%AE%AE%E9%98%BF%E4%BF%A1%E5%85%AC%E5%BC%80%E8%A1%A8%E6%80%81%23) `288.2K 🔥` `NEW`
1. [怪不得卢昱晓能瘦](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E5%8D%A2%E6%98%B1%E6%99%93%E8%83%BD%E7%98%A6%23) `284.5K 🔥` `NEW`
1. [女子用房车陪读称比租房经济](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%A8%E6%88%BF%E8%BD%A6%E9%99%AA%E8%AF%BB%E7%A7%B0%E6%AF%94%E7%A7%9F%E6%88%BF%E7%BB%8F%E6%B5%8E%23) `282.0K 🔥` `NEW`
1. [郑钦文今年3次被莱巴金娜逆转](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E4%BB%8A%E5%B9%B43%E6%AC%A1%E8%A2%AB%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%E9%80%86%E8%BD%AC%23) `279.9K 🔥` `NEW`
1. [栾念尚之桃结婚lumi做主桌](https://s.weibo.com/weibo?q=%23%E6%A0%BE%E5%BF%B5%E5%B0%9A%E4%B9%8B%E6%A1%83%E7%BB%93%E5%A9%9Alumi%E5%81%9A%E4%B8%BB%E6%A1%8C%23) `276.0K 🔥` `NEW`
1. [白鹿为拍摄场地留纪念照](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%B8%BA%E6%8B%8D%E6%91%84%E5%9C%BA%E5%9C%B0%E7%95%99%E7%BA%AA%E5%BF%B5%E7%85%A7%23) `272.0K 🔥` `NEW`
1. [4次考公失败后花2万2旅行6国](https://s.weibo.com/weibo?q=%234%E6%AC%A1%E8%80%83%E5%85%AC%E5%A4%B1%E8%B4%A5%E5%90%8E%E8%8A%B12%E4%B8%872%E6%97%85%E8%A1%8C6%E5%9B%BD%23) `1.2M 🔥` `+1654%`
1. [我国成功发射一箭六星](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%88%90%E5%8A%9F%E5%8F%91%E5%B0%84%E4%B8%80%E7%AE%AD%E5%85%AD%E6%98%9F%23) `680.0K 🔥` `+178%`
1. [建议大家把内裤袜子丢洗衣机洗](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E6%8A%8A%E5%86%85%E8%A3%A4%E8%A2%9C%E5%AD%90%E4%B8%A2%E6%B4%97%E8%A1%A3%E6%9C%BA%E6%B4%97%23) `674.9K 🔥` `+191%`
1. [10天不吃糖身体变化有多大](https://s.weibo.com/weibo?q=%2310%E5%A4%A9%E4%B8%8D%E5%90%83%E7%B3%96%E8%BA%AB%E4%BD%93%E5%8F%98%E5%8C%96%E6%9C%89%E5%A4%9A%E5%A4%A7%23) `626.1K 🔥` `+815%`
1. [人为什么要读书最好的答案](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E8%AF%BB%E4%B9%A6%E6%9C%80%E5%A5%BD%E7%9A%84%E7%AD%94%E6%A1%88%23) `539.5K 🔥` `+32%`
1. [舍不得十岁老狗放弃更好大学](https://s.weibo.com/weibo?q=%23%E8%88%8D%E4%B8%8D%E5%BE%97%E5%8D%81%E5%B2%81%E8%80%81%E7%8B%97%E6%94%BE%E5%BC%83%E6%9B%B4%E5%A5%BD%E5%A4%A7%E5%AD%A6%23) `460.2K 🔥` `+209%`
1. [花少8一分钟就把选房解决了](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%E4%B8%80%E5%88%86%E9%92%9F%E5%B0%B1%E6%8A%8A%E9%80%89%E6%88%BF%E8%A7%A3%E5%86%B3%E4%BA%86%23) `334.0K 🔥` `+459%`
1. [教育界迎来了最严厉的父母](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E7%95%8C%E8%BF%8E%E6%9D%A5%E4%BA%86%E6%9C%80%E4%B8%A5%E5%8E%89%E7%9A%84%E7%88%B6%E6%AF%8D%23) `327.2K 🔥` `+194%`
1. [上海28元一份馄饨只有两颗](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B728%E5%85%83%E4%B8%80%E4%BB%BD%E9%A6%84%E9%A5%A8%E5%8F%AA%E6%9C%89%E4%B8%A4%E9%A2%97%23) `320.0K 🔥` `+294%`
1. [晚上走路45分钟](https://s.weibo.com/weibo?q=%23%E6%99%9A%E4%B8%8A%E8%B5%B0%E8%B7%AF45%E5%88%86%E9%92%9F%23) `315.3K 🔥` `+493%`
1. [这种情况建议手洗内裤](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%A7%8D%E6%83%85%E5%86%B5%E5%BB%BA%E8%AE%AE%E6%89%8B%E6%B4%97%E5%86%85%E8%A3%A4%23) `310.1K 🔥` `+485%`
1. [俄罗斯称有权使用核武器](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E7%A7%B0%E6%9C%89%E6%9D%83%E4%BD%BF%E7%94%A8%E6%A0%B8%E6%AD%A6%E5%99%A8%23) `306.2K 🔥` `+705%`
1. [花少8全员有嘴](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%E5%85%A8%E5%91%98%E6%9C%89%E5%98%B4%23) `303.5K 🔥` `+734%`
1. [iPhone18Pro价格](https://s.weibo.com/weibo?q=%23iPhone18Pro%E4%BB%B7%E6%A0%BC%23) `301.8K 🔥` `+509%`
1. [哥哥拿英歌棍打妹妹膝盖妈妈砸他茶杯](https://s.weibo.com/weibo?q=%23%E5%93%A5%E5%93%A5%E6%8B%BF%E8%8B%B1%E6%AD%8C%E6%A3%8D%E6%89%93%E5%A6%B9%E5%A6%B9%E8%86%9D%E7%9B%96%E5%A6%88%E5%A6%88%E7%A0%B8%E4%BB%96%E8%8C%B6%E6%9D%AF%23) `300.6K 🔥` `+690%`
1. [不买不招35岁员工的公司产品](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E4%B9%B0%E4%B8%8D%E6%8B%9B35%E5%B2%81%E5%91%98%E5%B7%A5%E7%9A%84%E5%85%AC%E5%8F%B8%E4%BA%A7%E5%93%81%23) `286.9K 🔥` `+357%`
1. [感情真的会跟着环境走](https://s.weibo.com/weibo?q=%23%E6%84%9F%E6%83%85%E7%9C%9F%E7%9A%84%E4%BC%9A%E8%B7%9F%E7%9D%80%E7%8E%AF%E5%A2%83%E8%B5%B0%23) `285.3K 🔥` `+414%`
1. [青岛货轮火灾造成重大人员伤亡](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E8%B4%A7%E8%BD%AE%E7%81%AB%E7%81%BE%E9%80%A0%E6%88%90%E9%87%8D%E5%A4%A7%E4%BA%BA%E5%91%98%E4%BC%A4%E4%BA%A1%23) `281.1K 🔥` `+355%`
1. [欧洲央行加息25个基点](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E6%B4%B2%E5%A4%AE%E8%A1%8C%E5%8A%A0%E6%81%AF25%E4%B8%AA%E5%9F%BA%E7%82%B9%23) `277.4K 🔥` `+661%`
1. [赵昭仪录节目突发哮喘](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%98%AD%E4%BB%AA%E5%BD%95%E8%8A%82%E7%9B%AE%E7%AA%81%E5%8F%91%E5%93%AE%E5%96%98%23) `274.6K 🔥` `+654%`
1. [多邻国 iPhone的duo是我的多](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E9%82%BB%E5%9B%BD%20iPhone%E7%9A%84duo%E6%98%AF%E6%88%91%E7%9A%84%E5%A4%9A%23) `273.7K 🔥` `+355%`
1. [孙怡被说妆前一个人妆后一个人](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E8%A2%AB%E8%AF%B4%E5%A6%86%E5%89%8D%E4%B8%80%E4%B8%AA%E4%BA%BA%E5%A6%86%E5%90%8E%E4%B8%80%E4%B8%AA%E4%BA%BA%23) `269.3K 🔥` `+610%`
1. [青岛货轮火灾25人遇难](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E8%B4%A7%E8%BD%AE%E7%81%AB%E7%81%BE25%E4%BA%BA%E9%81%87%E9%9A%BE%23) `323.7K 🔥`

Updated at 2026-09-11 08:24:03

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
