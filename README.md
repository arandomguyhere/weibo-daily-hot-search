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

1. [22岁主播每天焊妆两次确诊肺炎 (The 22-year-old anchor was diagnosed with pneumonia after welding makeup twice a day)](https://s.weibo.com/weibo?q=%2322%E5%B2%81%E4%B8%BB%E6%92%AD%E6%AF%8F%E5%A4%A9%E7%84%8A%E5%A6%86%E4%B8%A4%E6%AC%A1%E7%A1%AE%E8%AF%8A%E8%82%BA%E7%82%8E%23) `799.9K 🔥` `NEW`
1. [Deepseek被指变冷淡了](https://s.weibo.com/weibo?q=%23Deepseek%E8%A2%AB%E6%8C%87%E5%8F%98%E5%86%B7%E6%B7%A1%E4%BA%86%23) `564.3K 🔥` `NEW`
1. [我家的C位年货](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E7%9A%84C%E4%BD%8D%E5%B9%B4%E8%B4%A7%23) `446.7K 🔥` `NEW`
1. [虞书欣直播](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%9B%B4%E6%92%AD%23) `368.2K 🔥` `NEW`
1. [王者荣耀超话爆了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E8%B6%85%E8%AF%9D%E7%88%86%E4%BA%86%23) `236.3K 🔥` `NEW`
1. [丞磊在飞机上帮王楚然剔牙](https://s.weibo.com/weibo?q=%23%E4%B8%9E%E7%A3%8A%E5%9C%A8%E9%A3%9E%E6%9C%BA%E4%B8%8A%E5%B8%AE%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%89%94%E7%89%99%23) `221.4K 🔥` `NEW`
1. [小马打架被咬伤负气出逃跑上高架](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%A9%AC%E6%89%93%E6%9E%B6%E8%A2%AB%E5%92%AC%E4%BC%A4%E8%B4%9F%E6%B0%94%E5%87%BA%E9%80%83%E8%B7%91%E4%B8%8A%E9%AB%98%E6%9E%B6%23) `195.0K 🔥` `NEW`
1. [坏果太多胖东来下架全部智利车厘子](https://s.weibo.com/weibo?q=%23%E5%9D%8F%E6%9E%9C%E5%A4%AA%E5%A4%9A%E8%83%96%E4%B8%9C%E6%9D%A5%E4%B8%8B%E6%9E%B6%E5%85%A8%E9%83%A8%E6%99%BA%E5%88%A9%E8%BD%A6%E5%8E%98%E5%AD%90%23) `140.0K 🔥` `NEW`
1. [连续五年都没有年三十](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E7%BB%AD%E4%BA%94%E5%B9%B4%E9%83%BD%E6%B2%A1%E6%9C%89%E5%B9%B4%E4%B8%89%E5%8D%81%23) `117.4K 🔥` `NEW`
1. [速度滑冰女子5000米](https://s.weibo.com/weibo?q=%23%E9%80%9F%E5%BA%A6%E6%BB%91%E5%86%B0%E5%A5%B3%E5%AD%905000%E7%B1%B3%23) `114.3K 🔥` `NEW`
1. [宋亚轩遇到了最懂他的刘耀文 (Song Yaxuan met Liu Yaowen who understood him best)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E9%81%87%E5%88%B0%E4%BA%86%E6%9C%80%E6%87%82%E4%BB%96%E7%9A%84%E5%88%98%E8%80%80%E6%96%87%23) `113.9K 🔥` `NEW`
1. [律师解读杨幂新增60件告黑案](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E8%A7%A3%E8%AF%BB%E6%9D%A8%E5%B9%82%E6%96%B0%E5%A2%9E60%E4%BB%B6%E5%91%8A%E9%BB%91%E6%A1%88%23) `111.7K 🔥` `NEW`
1. [王者荣耀马年全明星表演赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E9%A9%AC%E5%B9%B4%E5%85%A8%E6%98%8E%E6%98%9F%E8%A1%A8%E6%BC%94%E8%B5%9B%23) `109.9K 🔥` `NEW`
1. [蒋欣 当年真的错怪你了](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%AC%A3%20%E5%BD%93%E5%B9%B4%E7%9C%9F%E7%9A%84%E9%94%99%E6%80%AA%E4%BD%A0%E4%BA%86%23) `108.9K 🔥` `NEW`
1. [36岁何穗状态](https://s.weibo.com/weibo?q=%2336%E5%B2%81%E4%BD%95%E7%A9%97%E7%8A%B6%E6%80%81%23) `106.6K 🔥` `NEW`
1. [女子火车上熟睡8000元手机被偷](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%81%AB%E8%BD%A6%E4%B8%8A%E7%86%9F%E7%9D%A18000%E5%85%83%E6%89%8B%E6%9C%BA%E8%A2%AB%E5%81%B7%23) `106.5K 🔥` `NEW`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `106.3K 🔥` `NEW`
1. [太平年大结局](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%B9%B3%E5%B9%B4%E5%A4%A7%E7%BB%93%E5%B1%80%23) `99.2K 🔥` `NEW`
1. [爸爸被劝酒女儿站身后霸气挡酒](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E8%A2%AB%E5%8A%9D%E9%85%92%E5%A5%B3%E5%84%BF%E7%AB%99%E8%BA%AB%E5%90%8E%E9%9C%B8%E6%B0%94%E6%8C%A1%E9%85%92%23) `97.8K 🔥` `NEW`
1. [米兰冬奥中国单板双姝逐梦](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E4%B8%AD%E5%9B%BD%E5%8D%95%E6%9D%BF%E5%8F%8C%E5%A7%9D%E9%80%90%E6%A2%A6%23) `97.5K 🔥` `NEW`
1. [吃烤全羊发现大量粪便店家赔偿1500 (After eating a roasted whole lamb and finding a lot of feces, the store compensated me 1,500)](https://s.weibo.com/weibo?q=%23%E5%90%83%E7%83%A4%E5%85%A8%E7%BE%8A%E5%8F%91%E7%8E%B0%E5%A4%A7%E9%87%8F%E7%B2%AA%E4%BE%BF%E5%BA%97%E5%AE%B6%E8%B5%94%E5%81%BF1500%23) `96.7K 🔥` `NEW`
1. [男子就医喊饿竟是全身血液已近流干](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%B0%B1%E5%8C%BB%E5%96%8A%E9%A5%BF%E7%AB%9F%E6%98%AF%E5%85%A8%E8%BA%AB%E8%A1%80%E6%B6%B2%E5%B7%B2%E8%BF%91%E6%B5%81%E5%B9%B2%23) `96.0K 🔥` `NEW`
1. [远洋船员持菜刀砍杀船长后分尸抛海](https://s.weibo.com/weibo?q=%23%E8%BF%9C%E6%B4%8B%E8%88%B9%E5%91%98%E6%8C%81%E8%8F%9C%E5%88%80%E7%A0%8D%E6%9D%80%E8%88%B9%E9%95%BF%E5%90%8E%E5%88%86%E5%B0%B8%E6%8A%9B%E6%B5%B7%23) `95.2K 🔥` `NEW`
1. [蔡徐坤回复无畏](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E5%9B%9E%E5%A4%8D%E6%97%A0%E7%95%8F%23) `93.8K 🔥` `NEW`
1. [印度要买114架阵风](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E8%A6%81%E4%B9%B0114%E6%9E%B6%E9%98%B5%E9%A3%8E%23) `93.7K 🔥` `NEW`
1. [母亲花6万为智力残障儿子娶外籍妻子](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E8%8A%B16%E4%B8%87%E4%B8%BA%E6%99%BA%E5%8A%9B%E6%AE%8B%E9%9A%9C%E5%84%BF%E5%AD%90%E5%A8%B6%E5%A4%96%E7%B1%8D%E5%A6%BB%E5%AD%90%23) `92.7K 🔥` `NEW`
1. [彭小苒 古早韩剧财阀家大小姐](https://s.weibo.com/weibo?q=%23%E5%BD%AD%E5%B0%8F%E8%8B%92%20%E5%8F%A4%E6%97%A9%E9%9F%A9%E5%89%A7%E8%B4%A2%E9%98%80%E5%AE%B6%E5%A4%A7%E5%B0%8F%E5%A7%90%23) `91.6K 🔥` `NEW`
1. [范宗沛去世](https://s.weibo.com/weibo?q=%23%E8%8C%83%E5%AE%97%E6%B2%9B%E5%8E%BB%E4%B8%96%23) `88.4K 🔥` `NEW`
1. [今年为啥没有年三十](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E4%B8%BA%E5%95%A5%E6%B2%A1%E6%9C%89%E5%B9%B4%E4%B8%89%E5%8D%81%23) `73.6K 🔥` `NEW`
1. [年少有为](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%B0%91%E6%9C%89%E4%B8%BA%23) `73.6K 🔥` `NEW`
1. [六国联名反对欧盟加大对华限制 (Six countries jointly oppose the EU's increased restrictions on China)](https://s.weibo.com/weibo?q=%23%E5%85%AD%E5%9B%BD%E8%81%94%E5%90%8D%E5%8F%8D%E5%AF%B9%E6%AC%A7%E7%9B%9F%E5%8A%A0%E5%A4%A7%E5%AF%B9%E5%8D%8E%E9%99%90%E5%88%B6%23) `73.6K 🔥` `NEW`
1. [35年前乳汁救武警今患癌红嫂回应](https://s.weibo.com/weibo?q=%2335%E5%B9%B4%E5%89%8D%E4%B9%B3%E6%B1%81%E6%95%91%E6%AD%A6%E8%AD%A6%E4%BB%8A%E6%82%A3%E7%99%8C%E7%BA%A2%E5%AB%82%E5%9B%9E%E5%BA%94%23) `71.5K 🔥` `NEW`
1. [杨幂白色高筒袜](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%99%BD%E8%89%B2%E9%AB%98%E7%AD%92%E8%A2%9C%23) `68.9K 🔥` `NEW`
1. [33岁男子开特斯拉跑货拉拉](https://s.weibo.com/weibo?q=%2333%E5%B2%81%E7%94%B7%E5%AD%90%E5%BC%80%E7%89%B9%E6%96%AF%E6%8B%89%E8%B7%91%E8%B4%A7%E6%8B%89%E6%8B%89%23) `66.0K 🔥` `NEW`
1. [何与miumiu活动生图路透](https://s.weibo.com/weibo?q=%23%E4%BD%95%E4%B8%8Emiumiu%E6%B4%BB%E5%8A%A8%E7%94%9F%E5%9B%BE%E8%B7%AF%E9%80%8F%23) `65.1K 🔥` `NEW`
1. [马嘉祺黑西装live](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E9%BB%91%E8%A5%BF%E8%A3%85live%23) `63.4K 🔥` `NEW`
1. [第一次看到一箱草莓毫无食欲](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%9C%8B%E5%88%B0%E4%B8%80%E7%AE%B1%E8%8D%89%E8%8E%93%E6%AF%AB%E6%97%A0%E9%A3%9F%E6%AC%B2%23) `62.4K 🔥` `NEW`
1. [张元英BANGBANG直拍](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1BANGBANG%E7%9B%B4%E6%8B%8D%23) `62.0K 🔥` `NEW`
1. [张函瑞高会语音](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%BD%E7%91%9E%E9%AB%98%E4%BC%9A%E8%AF%AD%E9%9F%B3%23) `61.5K 🔥` `NEW`
1. [舌头翘一翘身体好坏都知道](https://s.weibo.com/weibo?q=%23%E8%88%8C%E5%A4%B4%E7%BF%98%E4%B8%80%E7%BF%98%E8%BA%AB%E4%BD%93%E5%A5%BD%E5%9D%8F%E9%83%BD%E7%9F%A5%E9%81%93%23) `61.5K 🔥` `NEW`
1. [微博之夜 绝美打光 (Weibo night, beautiful lighting)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E4%B9%8B%E5%A4%9C%20%E7%BB%9D%E7%BE%8E%E6%89%93%E5%85%89%23) `59.9K 🔥` `NEW`
1. [曝陈哲远每年让员工带薪出国旅游](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%99%88%E5%93%B2%E8%BF%9C%E6%AF%8F%E5%B9%B4%E8%AE%A9%E5%91%98%E5%B7%A5%E5%B8%A6%E8%96%AA%E5%87%BA%E5%9B%BD%E6%97%85%E6%B8%B8%23) `59.3K 🔥` `NEW`
1. [姐姐被藏尸位置就在弟弟店铺正上方](https://s.weibo.com/weibo?q=%23%E5%A7%90%E5%A7%90%E8%A2%AB%E8%97%8F%E5%B0%B8%E4%BD%8D%E7%BD%AE%E5%B0%B1%E5%9C%A8%E5%BC%9F%E5%BC%9F%E5%BA%97%E9%93%BA%E6%AD%A3%E4%B8%8A%E6%96%B9%23) `55.8K 🔥` `NEW`
1. [车厘子卖家赌涨价压货](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E5%8E%98%E5%AD%90%E5%8D%96%E5%AE%B6%E8%B5%8C%E6%B6%A8%E4%BB%B7%E5%8E%8B%E8%B4%A7%23) `54.8K 🔥` `NEW`
1. [严浩翔贺峻霖抽到同一条红绳](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E8%B4%BA%E5%B3%BB%E9%9C%96%E6%8A%BD%E5%88%B0%E5%90%8C%E4%B8%80%E6%9D%A1%E7%BA%A2%E7%BB%B3%23) `52.6K 🔥` `NEW`
1. [杭州9岁男孩拍短剧1天赚2000元](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E9%E5%B2%81%E7%94%B7%E5%AD%A9%E6%8B%8D%E7%9F%AD%E5%89%A71%E5%A4%A9%E8%B5%9A2000%E5%85%83%23) `52.0K 🔥` `NEW`
1. [王楚然丞磊怎么会熟成这样](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E4%B8%9E%E7%A3%8A%E6%80%8E%E4%B9%88%E4%BC%9A%E7%86%9F%E6%88%90%E8%BF%99%E6%A0%B7%23) `50.6K 🔥` `NEW`
1. [8岁小孩姐徒步117公里回老家](https://s.weibo.com/weibo?q=%238%E5%B2%81%E5%B0%8F%E5%AD%A9%E5%A7%90%E5%BE%92%E6%AD%A5117%E5%85%AC%E9%87%8C%E5%9B%9E%E8%80%81%E5%AE%B6%23) `50.6K 🔥` `NEW`
1. [生命树今晚自爆两狼](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E4%BB%8A%E6%99%9A%E8%87%AA%E7%88%86%E4%B8%A4%E7%8B%BC%23) `50.6K 🔥` `NEW`
1. [男子性侵前妻闺蜜被判10年8个月](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%80%A7%E4%BE%B5%E5%89%8D%E5%A6%BB%E9%97%BA%E8%9C%9C%E8%A2%AB%E5%88%A410%E5%B9%B48%E4%B8%AA%E6%9C%88%23) `50.6K 🔥` `NEW`

Updated at 2026-02-13 00:36:14

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
