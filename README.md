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

1. [C罗宣布离开国家队集训营](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%AE%A3%E5%B8%83%E7%A6%BB%E5%BC%80%E5%9B%BD%E5%AE%B6%E9%98%9F%E9%9B%86%E8%AE%AD%E8%90%A5%23) `745.8K 🔥` `NEW`
1. [胖东来员工明年3月起每周双休](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E5%91%98%E5%B7%A5%E6%98%8E%E5%B9%B43%E6%9C%88%E8%B5%B7%E6%AF%8F%E5%91%A8%E5%8F%8C%E4%BC%91%23) `320.4K 🔥` `NEW`
1. [C罗与葡萄牙主帅各自承认错误](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E4%B8%8E%E8%91%A1%E8%90%84%E7%89%99%E4%B8%BB%E5%B8%85%E5%90%84%E8%87%AA%E6%89%BF%E8%AE%A4%E9%94%99%E8%AF%AF%23) `292.2K 🔥` `NEW`
1. [葡媒称C罗已做出不可逆决定](https://s.weibo.com/weibo?q=%23%E8%91%A1%E5%AA%92%E7%A7%B0C%E7%BD%97%E5%B7%B2%E5%81%9A%E5%87%BA%E4%B8%8D%E5%8F%AF%E9%80%86%E5%86%B3%E5%AE%9A%23) `289.8K 🔥` `NEW`
1. [体制内的饭局基本消失了](https://s.weibo.com/weibo?q=%23%E4%BD%93%E5%88%B6%E5%86%85%E7%9A%84%E9%A5%AD%E5%B1%80%E5%9F%BA%E6%9C%AC%E6%B6%88%E5%A4%B1%E4%BA%86%23) `255.2K 🔥` `NEW`
1. [邓亚萍说王楚钦不能为输球找借口](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%BA%9A%E8%90%8D%E8%AF%B4%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%B8%8D%E8%83%BD%E4%B8%BA%E8%BE%93%E7%90%83%E6%89%BE%E5%80%9F%E5%8F%A3%23) `242.7K 🔥` `NEW`
1. [天安门放飞10000多只和平鸽](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%AE%89%E9%97%A8%E6%94%BE%E9%A3%9E10000%E5%A4%9A%E5%8F%AA%E5%92%8C%E5%B9%B3%E9%B8%BD%23) `175.8K 🔥` `NEW`
1. [林锦岐目睹兰香生产大出血当场吓晕](https://s.weibo.com/weibo?q=%23%E6%9E%97%E9%94%A6%E5%B2%90%E7%9B%AE%E7%9D%B9%E5%85%B0%E9%A6%99%E7%94%9F%E4%BA%A7%E5%A4%A7%E5%87%BA%E8%A1%80%E5%BD%93%E5%9C%BA%E5%90%93%E6%99%95%23) `160.9K 🔥` `NEW`
1. [王楚钦孙颖莎混双退赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E6%B7%B7%E5%8F%8C%E9%80%80%E8%B5%9B%23) `158.5K 🔥` `NEW`
1. [五星红旗升起这一刻](https://s.weibo.com/weibo?q=%23%E4%BA%94%E6%98%9F%E7%BA%A2%E6%97%97%E5%8D%87%E8%B5%B7%E8%BF%99%E4%B8%80%E5%88%BB%23) `153.0K 🔥` `NEW`
1. [六大国有银行集体公告](https://s.weibo.com/weibo?q=%23%E5%85%AD%E5%A4%A7%E5%9B%BD%E6%9C%89%E9%93%B6%E8%A1%8C%E9%9B%86%E4%BD%93%E5%85%AC%E5%91%8A%23) `135.1K 🔥` `NEW`
1. [WTT中国大满贯资格赛](https://s.weibo.com/weibo?q=%23WTT%E4%B8%AD%E5%9B%BD%E5%A4%A7%E6%BB%A1%E8%B4%AF%E8%B5%84%E6%A0%BC%E8%B5%9B%23) `133.3K 🔥` `NEW`
1. [赵丽颖飞天金鹰百花实绩](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E9%A3%9E%E5%A4%A9%E9%87%91%E9%B9%B0%E7%99%BE%E8%8A%B1%E5%AE%9E%E7%BB%A9%23) `118.3K 🔥` `NEW`
1. [赌王家小公主的童年](https://s.weibo.com/weibo?q=%23%E8%B5%8C%E7%8E%8B%E5%AE%B6%E5%B0%8F%E5%85%AC%E4%B8%BB%E7%9A%84%E7%AB%A5%E5%B9%B4%23) `105.3K 🔥` `NEW`
1. [2001和2026找工作对比](https://s.weibo.com/weibo?q=%232001%E5%92%8C2026%E6%89%BE%E5%B7%A5%E4%BD%9C%E5%AF%B9%E6%AF%94%23) `104.9K 🔥` `NEW`
1. [和公婆分开住才是成家](https://s.weibo.com/weibo?q=%23%E5%92%8C%E5%85%AC%E5%A9%86%E5%88%86%E5%BC%80%E4%BD%8F%E6%89%8D%E6%98%AF%E6%88%90%E5%AE%B6%23) `104.9K 🔥` `NEW`
1. [tiffany承诺不开除任何涉事员工](https://s.weibo.com/weibo?q=%23tiffany%E6%89%BF%E8%AF%BA%E4%B8%8D%E5%BC%80%E9%99%A4%E4%BB%BB%E4%BD%95%E6%B6%89%E4%BA%8B%E5%91%98%E5%B7%A5%23) `103.8K 🔥` `NEW`
1. [余承东预热华为Mate90系列](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E9%A2%84%E7%83%AD%E5%8D%8E%E4%B8%BAMate90%E7%B3%BB%E5%88%97%23) `97.3K 🔥` `NEW`
1. [这是国庆的北京](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%98%AF%E5%9B%BD%E5%BA%86%E7%9A%84%E5%8C%97%E4%BA%AC%23) `95.7K 🔥` `NEW`
1. [我追星追到倾家荡产](https://s.weibo.com/weibo?q=%23%E6%88%91%E8%BF%BD%E6%98%9F%E8%BF%BD%E5%88%B0%E5%80%BE%E5%AE%B6%E8%8D%A1%E4%BA%A7%23) `95.4K 🔥` `NEW`
1. [晚餐换个主食睡眠变好了](https://s.weibo.com/weibo?q=%23%E6%99%9A%E9%A4%90%E6%8D%A2%E4%B8%AA%E4%B8%BB%E9%A3%9F%E7%9D%A1%E7%9C%A0%E5%8F%98%E5%A5%BD%E4%BA%86%23) `89.8K 🔥` `NEW`
1. [十月](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%9C%88%23) `86.0K 🔥` `NEW`
1. [张家齐的正片已经是温和版的了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E7%9A%84%E6%AD%A3%E7%89%87%E5%B7%B2%E7%BB%8F%E6%98%AF%E6%B8%A9%E5%92%8C%E7%89%88%E7%9A%84%E4%BA%86%23) `81.1K 🔥` `NEW`
1. [冰工厂不语只是一味生产雷霆大冰块](https://s.weibo.com/weibo?q=%23%E5%86%B0%E5%B7%A5%E5%8E%82%E4%B8%8D%E8%AF%AD%E5%8F%AA%E6%98%AF%E4%B8%80%E5%91%B3%E7%94%9F%E4%BA%A7%E9%9B%B7%E9%9C%86%E5%A4%A7%E5%86%B0%E5%9D%97%23) `81.0K 🔥` `NEW`
1. [越南工资正在追上中国](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E5%8D%97%E5%B7%A5%E8%B5%84%E6%AD%A3%E5%9C%A8%E8%BF%BD%E4%B8%8A%E4%B8%AD%E5%9B%BD%23) `79.3K 🔥` `NEW`
1. [C罗与葡萄牙主帅矛盾和平解决](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E4%B8%8E%E8%91%A1%E8%90%84%E7%89%99%E4%B8%BB%E5%B8%85%E7%9F%9B%E7%9B%BE%E5%92%8C%E5%B9%B3%E8%A7%A3%E5%86%B3%23) `74.2K 🔥` `NEW`
1. [迪拜航空确认航班发生事故](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E6%8B%9C%E8%88%AA%E7%A9%BA%E7%A1%AE%E8%AE%A4%E8%88%AA%E7%8F%AD%E5%8F%91%E7%94%9F%E4%BA%8B%E6%95%85%23) `1.0M 🔥` `+76%`
1. [少年儿童高唱我们是共产主义接班人](https://s.weibo.com/weibo?q=%23%E5%B0%91%E5%B9%B4%E5%84%BF%E7%AB%A5%E9%AB%98%E5%94%B1%E6%88%91%E4%BB%AC%E6%98%AF%E5%85%B1%E4%BA%A7%E4%B8%BB%E4%B9%89%E6%8E%A5%E7%8F%AD%E4%BA%BA%23) `686.4K 🔥` `+676%`
1. [踹翻孕妇电动车当事司机发声](https://s.weibo.com/weibo?q=%23%E8%B8%B9%E7%BF%BB%E5%AD%95%E5%A6%87%E7%94%B5%E5%8A%A8%E8%BD%A6%E5%BD%93%E4%BA%8B%E5%8F%B8%E6%9C%BA%E5%8F%91%E5%A3%B0%23) `628.9K 🔥` `+1288%`
1. [华为 赛力斯](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%20%E8%B5%9B%E5%8A%9B%E6%96%AF%23) `606.1K 🔥` `+1227%`
1. [国庆节](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%BA%86%E8%8A%82%23) `417.5K 🔥` `+831%`
1. [副机长刺伤机长迪拜航空客机失控俯冲](https://s.weibo.com/weibo?q=%23%E5%89%AF%E6%9C%BA%E9%95%BF%E5%88%BA%E4%BC%A4%E6%9C%BA%E9%95%BF%E8%BF%AA%E6%8B%9C%E8%88%AA%E7%A9%BA%E5%AE%A2%E6%9C%BA%E5%A4%B1%E6%8E%A7%E4%BF%AF%E5%86%B2%23) `265.1K 🔥` `+131%`
1. [奚梦瑶给女儿买了可爱版菜篮子](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E7%BB%99%E5%A5%B3%E5%84%BF%E4%B9%B0%E4%BA%86%E5%8F%AF%E7%88%B1%E7%89%88%E8%8F%9C%E7%AF%AE%E5%AD%90%23) `192.9K 🔥` `+248%`
1. [马斯克称人人都会有全民高收入](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E7%A7%B0%E4%BA%BA%E4%BA%BA%E9%83%BD%E4%BC%9A%E6%9C%89%E5%85%A8%E6%B0%91%E9%AB%98%E6%94%B6%E5%85%A5%23) `178.0K 🔥` `+213%`
1. [这种大大方方真的招人喜欢](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%A7%8D%E5%A4%A7%E5%A4%A7%E6%96%B9%E6%96%B9%E7%9C%9F%E7%9A%84%E6%8B%9B%E4%BA%BA%E5%96%9C%E6%AC%A2%23) `160.5K 🔥` `+264%`
1. [飞天奖提名名单](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E5%A4%A9%E5%A5%96%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95%23) `145.8K 🔥` `+189%`
1. [迪拜航空客机事故最新画面](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E6%8B%9C%E8%88%AA%E7%A9%BA%E5%AE%A2%E6%9C%BA%E4%BA%8B%E6%95%85%E6%9C%80%E6%96%B0%E7%94%BB%E9%9D%A2%23) `129.7K 🔥` `+125%`
1. [为什么不喜欢全民发钱](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E5%96%9C%E6%AC%A2%E5%85%A8%E6%B0%91%E5%8F%91%E9%92%B1%23) `126.3K 🔥` `+179%`
1. [闪身步学明白把人生闪出去了](https://s.weibo.com/weibo?q=%23%E9%97%AA%E8%BA%AB%E6%AD%A5%E5%AD%A6%E6%98%8E%E7%99%BD%E6%8A%8A%E4%BA%BA%E7%94%9F%E9%97%AA%E5%87%BA%E5%8E%BB%E4%BA%86%23) `126.2K 🔥` `+290%`
1. [父亲突然离世邻居1分钟赶到帮忙](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E7%AA%81%E7%84%B6%E7%A6%BB%E4%B8%96%E9%82%BB%E5%B1%851%E5%88%86%E9%92%9F%E8%B5%B6%E5%88%B0%E5%B8%AE%E5%BF%99%23) `115.1K 🔥` `+187%`
1. [赛力斯华为合作模式变动](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E5%8A%9B%E6%96%AF%E5%8D%8E%E4%B8%BA%E5%90%88%E4%BD%9C%E6%A8%A1%E5%BC%8F%E5%8F%98%E5%8A%A8%23) `111.3K 🔥` `+150%`
1. [第五人格中国队摘金](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%E4%B8%AD%E5%9B%BD%E9%98%9F%E6%91%98%E9%87%91%23) `105.0K 🔥` `+208%`
1. [中国首位金牌电竞女选手桃晚安](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%A6%96%E4%BD%8D%E9%87%91%E7%89%8C%E7%94%B5%E7%AB%9E%E5%A5%B3%E9%80%89%E6%89%8B%E6%A1%83%E6%99%9A%E5%AE%89%23) `104.7K 🔥` `+129%`
1. [张家齐自曝小时候恨妈妈](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E8%87%AA%E6%9B%9D%E5%B0%8F%E6%97%B6%E5%80%99%E6%81%A8%E5%A6%88%E5%A6%88%23) `104.3K 🔥` `+206%`
1. [张家齐不靠辅助就跳这么高](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E4%B8%8D%E9%9D%A0%E8%BE%85%E5%8A%A9%E5%B0%B1%E8%B7%B3%E8%BF%99%E4%B9%88%E9%AB%98%23) `104.3K 🔥` `+207%`
1. [陈浩民妻子拿雅典娜事件教育孩子](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B5%A9%E6%B0%91%E5%A6%BB%E5%AD%90%E6%8B%BF%E9%9B%85%E5%85%B8%E5%A8%9C%E4%BA%8B%E4%BB%B6%E6%95%99%E8%82%B2%E5%AD%A9%E5%AD%90%23) `99.6K 🔥` `+96%`
1. [罗云熙唯一领衔主演](https://s.weibo.com/weibo?q=%23%E7%BD%97%E4%BA%91%E7%86%99%E5%94%AF%E4%B8%80%E9%A2%86%E8%A1%94%E4%B8%BB%E6%BC%94%23) `96.6K 🔥` `+182%`
1. [中科大博士涌向体制内](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%A7%91%E5%A4%A7%E5%8D%9A%E5%A3%AB%E6%B6%8C%E5%90%91%E4%BD%93%E5%88%B6%E5%86%85%23) `94.6K 🔥` `+218%`
1. [2078年00后老了以后](https://s.weibo.com/weibo?q=%232078%E5%B9%B400%E5%90%8E%E8%80%81%E4%BA%86%E4%BB%A5%E5%90%8E%23) `90.0K 🔥` `+125%`
1. [张雪当年的漂亮浙江老板娘要IPO了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%BD%93%E5%B9%B4%E7%9A%84%E6%BC%82%E4%BA%AE%E6%B5%99%E6%B1%9F%E8%80%81%E6%9D%BF%E5%A8%98%E8%A6%81IPO%E4%BA%86%23) `78.8K 🔥` `+133%`

Updated at 2026-10-01 07:42:59

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
