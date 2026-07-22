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

1. [日媒揭露731部队罪行 (Japanese media exposes the crimes of Unit 731)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%AA%92%E6%8F%AD%E9%9C%B2731%E9%83%A8%E9%98%9F%E7%BD%AA%E8%A1%8C%23) `1.0M 🔥` `NEW`
1. [以旧换新带动消费1.1万亿元](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E6%97%A7%E6%8D%A2%E6%96%B0%E5%B8%A6%E5%8A%A8%E6%B6%88%E8%B4%B91.1%E4%B8%87%E4%BA%BF%E5%85%83%23) `802.2K 🔥` `NEW`
1. [警方通报16岁高中生被刺死案](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A516%E5%B2%81%E9%AB%98%E4%B8%AD%E7%94%9F%E8%A2%AB%E5%88%BA%E6%AD%BB%E6%A1%88%23) `534.7K 🔥` `NEW`
1. [WB对战TTG](https://s.weibo.com/weibo?q=%23WB%E5%AF%B9%E6%88%98TTG%23) `415.9K 🔥` `NEW`
1. [曝演员片酬从2亿降到最高2500万](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%BC%94%E5%91%98%E7%89%87%E9%85%AC%E4%BB%8E2%E4%BA%BF%E9%99%8D%E5%88%B0%E6%9C%80%E9%AB%982500%E4%B8%87%23) `410.7K 🔥` `NEW`
1. [李昀锐下飞机一看手机天塌了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E4%B8%8B%E9%A3%9E%E6%9C%BA%E4%B8%80%E7%9C%8B%E6%89%8B%E6%9C%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `405.2K 🔥` `NEW`
1. [张淼怡线下态度被审判](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%B7%BC%E6%80%A1%E7%BA%BF%E4%B8%8B%E6%80%81%E5%BA%A6%E8%A2%AB%E5%AE%A1%E5%88%A4%23) `391.4K 🔥` `NEW`
1. [鹭卓不参与披哥录制](https://s.weibo.com/weibo?q=%23%E9%B9%AD%E5%8D%93%E4%B8%8D%E5%8F%82%E4%B8%8E%E6%8A%AB%E5%93%A5%E5%BD%95%E5%88%B6%23) `370.8K 🔥` `NEW`
1. [日本男子坠楼砸死路人自己生还](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%94%B7%E5%AD%90%E5%9D%A0%E6%A5%BC%E7%A0%B8%E6%AD%BB%E8%B7%AF%E4%BA%BA%E8%87%AA%E5%B7%B1%E7%94%9F%E8%BF%98%23) `342.7K 🔥` `NEW`
1. [广东一景区泳池惊现游蛇](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E4%B8%80%E6%99%AF%E5%8C%BA%E6%B3%B3%E6%B1%A0%E6%83%8A%E7%8E%B0%E6%B8%B8%E8%9B%87%23) `332.9K 🔥` `NEW`
1. [Bin队内矛盾被曝 (Conflicts within the Bin team were exposed)](https://s.weibo.com/weibo?q=%23Bin%E9%98%9F%E5%86%85%E7%9F%9B%E7%9B%BE%E8%A2%AB%E6%9B%9D%23) `324.8K 🔥` `NEW`
1. [C罗世界杯期间涨粉超千万](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E4%B8%96%E7%95%8C%E6%9D%AF%E6%9C%9F%E9%97%B4%E6%B6%A8%E7%B2%89%E8%B6%85%E5%8D%83%E4%B8%87%23) `322.6K 🔥` `NEW`
1. [上海暴雨](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E6%9A%B4%E9%9B%A8%23) `319.5K 🔥` `NEW`
1. [新台风基本确定登陆我国](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8F%B0%E9%A3%8E%E5%9F%BA%E6%9C%AC%E7%A1%AE%E5%AE%9A%E7%99%BB%E9%99%86%E6%88%91%E5%9B%BD%23) `310.9K 🔥` `NEW`
1. [为什么要说尽量少跟AI倾诉聊天](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E8%AF%B4%E5%B0%BD%E9%87%8F%E5%B0%91%E8%B7%9FAI%E5%80%BE%E8%AF%89%E8%81%8A%E5%A4%A9%23) `309.5K 🔥` `NEW`
1. [TES战胜WE](https://s.weibo.com/weibo?q=%23TES%E6%88%98%E8%83%9CWE%23) `296.2K 🔥` `NEW`
1. [三星发布会](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%E5%8F%91%E5%B8%83%E4%BC%9A%23) `291.3K 🔥` `NEW`
1. [张凌赫新剧被胡杏儿沙宝亮混合双打](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%96%B0%E5%89%A7%E8%A2%AB%E8%83%A1%E6%9D%8F%E5%84%BF%E6%B2%99%E5%AE%9D%E4%BA%AE%E6%B7%B7%E5%90%88%E5%8F%8C%E6%89%93%23) `265.8K 🔥` `NEW`
1. [百花杀孩子都有了人还没在一起](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%E5%AD%A9%E5%AD%90%E9%83%BD%E6%9C%89%E4%BA%86%E4%BA%BA%E8%BF%98%E6%B2%A1%E5%9C%A8%E4%B8%80%E8%B5%B7%23) `233.2K 🔥` `NEW`
1. [大冰说透三十年房贷](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E8%AF%B4%E9%80%8F%E4%B8%89%E5%8D%81%E5%B9%B4%E6%88%BF%E8%B4%B7%23) `229.7K 🔥` `NEW`
1. [男子称医院给未成年女儿做流产手术 (Man says hospital performed abortion on underage daughter)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%A7%B0%E5%8C%BB%E9%99%A2%E7%BB%99%E6%9C%AA%E6%88%90%E5%B9%B4%E5%A5%B3%E5%84%BF%E5%81%9A%E6%B5%81%E4%BA%A7%E6%89%8B%E6%9C%AF%23) `227.5K 🔥` `NEW`
1. [霸王茶姬王者荣耀联名](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E8%81%94%E5%90%8D%23) `210.7K 🔥` `NEW`
1. [雀骨大结局](https://s.weibo.com/weibo?q=%23%E9%9B%80%E9%AA%A8%E5%A4%A7%E7%BB%93%E5%B1%80%23) `209.9K 🔥` `NEW`
1. [日媒播出731部队专题片](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%AA%92%E6%92%AD%E5%87%BA731%E9%83%A8%E9%98%9F%E4%B8%93%E9%A2%98%E7%89%87%23) `197.7K 🔥` `NEW`
1. [这一秒过火这次正片和路透一样好看](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E8%BF%99%E6%AC%A1%E6%AD%A3%E7%89%87%E5%92%8C%E8%B7%AF%E9%80%8F%E4%B8%80%E6%A0%B7%E5%A5%BD%E7%9C%8B%23) `195.3K 🔥` `NEW`
1. [陈浚铭在线聊天](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B5%9A%E9%93%AD%E5%9C%A8%E7%BA%BF%E8%81%8A%E5%A4%A9%23) `195.0K 🔥` `NEW`
1. [樊振东将缺席本届乒超联赛](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%B0%86%E7%BC%BA%E5%B8%AD%E6%9C%AC%E5%B1%8A%E4%B9%92%E8%B6%85%E8%81%94%E8%B5%9B%23) `194.6K 🔥` `NEW`
1. [谁发明的酒店半透明玻璃浴室](https://s.weibo.com/weibo?q=%23%E8%B0%81%E5%8F%91%E6%98%8E%E7%9A%84%E9%85%92%E5%BA%97%E5%8D%8A%E9%80%8F%E6%98%8E%E7%8E%BB%E7%92%83%E6%B5%B4%E5%AE%A4%23) `189.1K 🔥` `NEW`
1. [江衡李沛恩 情头](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%A1%A1%E6%9D%8E%E6%B2%9B%E6%81%A9%20%E6%83%85%E5%A4%B4%23) `188.0K 🔥` `NEW`
1. [檀健次cha了girls](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1cha%E4%BA%86girls%23) `187.6K 🔥` `NEW`
1. [男子仅退款1.6万水果后倒卖获刑 (Man was jailed for reselling fruits after only refunding 16,000 yuan)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%BB%85%E9%80%80%E6%AC%BE1.6%E4%B8%87%E6%B0%B4%E6%9E%9C%E5%90%8E%E5%80%92%E5%8D%96%E8%8E%B7%E5%88%91%23) `177.8K 🔥` `NEW`
1. [披荆斩棘2026](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%982026%23) `176.5K 🔥` `NEW`
1. [外科医生的手有多稳](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%A7%91%E5%8C%BB%E7%94%9F%E7%9A%84%E6%89%8B%E6%9C%89%E5%A4%9A%E7%A8%B3%23) `172.7K 🔥` `NEW`
1. [别再给AI乱传文件了 (Stop sending random files to AI)](https://s.weibo.com/weibo?q=%23%E5%88%AB%E5%86%8D%E7%BB%99AI%E4%B9%B1%E4%BC%A0%E6%96%87%E4%BB%B6%E4%BA%86%23) `2.6M 🔥` `+89%`
1. [你一p我一p到了景点全懵圈](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%B8%80p%E6%88%91%E4%B8%80p%E5%88%B0%E4%BA%86%E6%99%AF%E7%82%B9%E5%85%A8%E6%87%B5%E5%9C%88%23) `678.2K 🔥` `+75%`
1. [关晓彤状态和以前完全不一样](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E7%8A%B6%E6%80%81%E5%92%8C%E4%BB%A5%E5%89%8D%E5%AE%8C%E5%85%A8%E4%B8%8D%E4%B8%80%E6%A0%B7%23) `636.3K 🔥` `+46%`
1. [90岁老太太给重孙女买裙子视频火了](https://s.weibo.com/weibo?q=%2390%E5%B2%81%E8%80%81%E5%A4%AA%E5%A4%AA%E7%BB%99%E9%87%8D%E5%AD%99%E5%A5%B3%E4%B9%B0%E8%A3%99%E5%AD%90%E8%A7%86%E9%A2%91%E7%81%AB%E4%BA%86%23) `635.9K 🔥` `+48%`
1. [扬州中医院我记住你了](https://s.weibo.com/weibo?q=%23%E6%89%AC%E5%B7%9E%E4%B8%AD%E5%8C%BB%E9%99%A2%E6%88%91%E8%AE%B0%E4%BD%8F%E4%BD%A0%E4%BA%86%23) `495.0K 🔥`
1. [突然不羡慕中小学老师了](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E4%B8%8D%E7%BE%A1%E6%85%95%E4%B8%AD%E5%B0%8F%E5%AD%A6%E8%80%81%E5%B8%88%E4%BA%86%23) `404.7K 🔥`
1. [双高胎向魏大勋道歉](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E9%AB%98%E8%83%8E%E5%90%91%E9%AD%8F%E5%A4%A7%E5%8B%8B%E9%81%93%E6%AD%89%23) `395.3K 🔥`
1. [成本不高可以延缓近视的东西](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%9C%AC%E4%B8%8D%E9%AB%98%E5%8F%AF%E4%BB%A5%E5%BB%B6%E7%BC%93%E8%BF%91%E8%A7%86%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `388.7K 🔥`
1. [汤唯二胎儿子出生 (Tang Wei’s second son is born)](https://s.weibo.com/weibo?q=%23%E6%B1%A4%E5%94%AF%E4%BA%8C%E8%83%8E%E5%84%BF%E5%AD%90%E5%87%BA%E7%94%9F%23) `383.7K 🔥`
1. [两个AI演员比内娱待爆艺人都火](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%B8%AAAI%E6%BC%94%E5%91%98%E6%AF%94%E5%86%85%E5%A8%B1%E5%BE%85%E7%88%86%E8%89%BA%E4%BA%BA%E9%83%BD%E7%81%AB%23) `508.8K 🔥` `-67%`
1. [耐克将清退中国数千家在线经销商 (Nike will remove thousands of online dealers in China)](https://s.weibo.com/weibo?q=%23%E8%80%90%E5%85%8B%E5%B0%86%E6%B8%85%E9%80%80%E4%B8%AD%E5%9B%BD%E6%95%B0%E5%8D%83%E5%AE%B6%E5%9C%A8%E7%BA%BF%E7%BB%8F%E9%94%80%E5%95%86%23) `309.8K 🔥` `-67%`
1. [终于有人看到离婚女性户口问题了 (Finally, someone saw the issue of divorced women’s household registration)](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%9C%89%E4%BA%BA%E7%9C%8B%E5%88%B0%E7%A6%BB%E5%A9%9A%E5%A5%B3%E6%80%A7%E6%88%B7%E5%8F%A3%E9%97%AE%E9%A2%98%E4%BA%86%23) `231.4K 🔥` `-42%`
1. [王鸥演少女违和感](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B8%A5%E6%BC%94%E5%B0%91%E5%A5%B3%E8%BF%9D%E5%92%8C%E6%84%9F%23) `226.9K 🔥` `-44%`
1. [生活很无聊是因为没有支线任务](https://s.weibo.com/weibo?q=%23%E7%94%9F%E6%B4%BB%E5%BE%88%E6%97%A0%E8%81%8A%E6%98%AF%E5%9B%A0%E4%B8%BA%E6%B2%A1%E6%9C%89%E6%94%AF%E7%BA%BF%E4%BB%BB%E5%8A%A1%23) `212.6K 🔥` `-46%`
1. [王楚然回复张凌赫](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%9B%9E%E5%A4%8D%E5%BC%A0%E5%87%8C%E8%B5%AB%23) `204.6K 🔥` `-51%`
1. [哪个暑假工做的雪糕](https://s.weibo.com/weibo?q=%23%E5%93%AA%E4%B8%AA%E6%9A%91%E5%81%87%E5%B7%A5%E5%81%9A%E7%9A%84%E9%9B%AA%E7%B3%95%23) `168.2K 🔥` `-65%`

Updated at 2026-07-22 22:09:46

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
