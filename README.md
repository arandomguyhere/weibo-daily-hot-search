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

1. [恋与深空6.0版本万籁俱起 (Love and Deep Space version 6.0 is ready)](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA6.0%E7%89%88%E6%9C%AC%E4%B8%87%E7%B1%81%E4%BF%B1%E8%B5%B7%23) `776.1K 🔥` `NEW`
1. [穆祉丞 你们就是我的恋人](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%20%E4%BD%A0%E4%BB%AC%E5%B0%B1%E6%98%AF%E6%88%91%E7%9A%84%E6%81%8B%E4%BA%BA%23) `731.9K 🔥` `NEW`
1. [女子被骗500万丈夫自杀骗子获刑](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A2%AB%E9%AA%97500%E4%B8%87%E4%B8%88%E5%A4%AB%E8%87%AA%E6%9D%80%E9%AA%97%E5%AD%90%E8%8E%B7%E5%88%91%23) `662.5K 🔥` `NEW`
1. [毕业季](https://s.weibo.com/weibo?q=%23%E6%AF%95%E4%B8%9A%E5%AD%A3%23) `645.4K 🔥` `NEW`
1. [3000块街舞课狗狗学了2900](https://s.weibo.com/weibo?q=%233000%E5%9D%97%E8%A1%97%E8%88%9E%E8%AF%BE%E7%8B%97%E7%8B%97%E5%AD%A6%E4%BA%862900%23) `628.9K 🔥` `NEW`
1. [原来衣着打扮会影响对自己的感知](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%A1%A3%E7%9D%80%E6%89%93%E6%89%AE%E4%BC%9A%E5%BD%B1%E5%93%8D%E5%AF%B9%E8%87%AA%E5%B7%B1%E7%9A%84%E6%84%9F%E7%9F%A5%23) `603.8K 🔥` `NEW`
1. [卢昱晓误触](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E8%AF%AF%E8%A7%A6%23) `436.0K 🔥` `NEW`
1. [央视曝光儿童生长发育补贴骗局](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E5%84%BF%E7%AB%A5%E7%94%9F%E9%95%BF%E5%8F%91%E8%82%B2%E8%A1%A5%E8%B4%B4%E9%AA%97%E5%B1%80%23) `435.9K 🔥` `NEW`
1. [广州一高校禁止小米汽车入园](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E4%B8%80%E9%AB%98%E6%A0%A1%E7%A6%81%E6%AD%A2%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%E5%85%A5%E5%9B%AD%23) `435.5K 🔥` `NEW`
1. [阚清子意难平](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E6%84%8F%E9%9A%BE%E5%B9%B3%23) `435.5K 🔥` `NEW`
1. [白鹿等大家看了莫离第40集再编辑文案 (Bai Lu waits for everyone to watch the 40th episode of Mo Li before editing the copy.)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%AD%89%E5%A4%A7%E5%AE%B6%E7%9C%8B%E4%BA%86%E8%8E%AB%E7%A6%BB%E7%AC%AC40%E9%9B%86%E5%86%8D%E7%BC%96%E8%BE%91%E6%96%87%E6%A1%88%23) `415.0K 🔥` `NEW`
1. [苹果请求采购中国存储芯片](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E8%AF%B7%E6%B1%82%E9%87%87%E8%B4%AD%E4%B8%AD%E5%9B%BD%E5%AD%98%E5%82%A8%E8%8A%AF%E7%89%87%23) `407.7K 🔥` `NEW`
1. [三星电子海力士将发布大规模投资计划](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%E7%94%B5%E5%AD%90%E6%B5%B7%E5%8A%9B%E5%A3%AB%E5%B0%86%E5%8F%91%E5%B8%83%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%8A%95%E8%B5%84%E8%AE%A1%E5%88%92%23) `379.1K 🔥` `NEW`
1. [曾沛慈晒照告别浪姐](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E6%99%92%E7%85%A7%E5%91%8A%E5%88%AB%E6%B5%AA%E5%A7%90%23) `339.7K 🔥` `NEW`
1. [恋与深空文案又被指娱乐化刑事案件](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E6%96%87%E6%A1%88%E5%8F%88%E8%A2%AB%E6%8C%87%E5%A8%B1%E4%B9%90%E5%8C%96%E5%88%91%E4%BA%8B%E6%A1%88%E4%BB%B6%23) `318.2K 🔥` `NEW`
1. [穆祉丞 帅哥王](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%20%E5%B8%85%E5%93%A5%E7%8E%8B%23) `287.7K 🔥` `NEW`
1. [大雷发杨紫白玉兰碎片](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%9B%B7%E5%8F%91%E6%9D%A8%E7%B4%AB%E7%99%BD%E7%8E%89%E5%85%B0%E7%A2%8E%E7%89%87%23) `281.4K 🔥` `NEW`
1. [李在明就韩国队出局致歉](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%9C%A8%E6%98%8E%E5%B0%B1%E9%9F%A9%E5%9B%BD%E9%98%9F%E5%87%BA%E5%B1%80%E8%87%B4%E6%AD%89%23) `264.5K 🔥` `NEW`
1. [多辆百吨王在京新高速强行冲卡](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E8%BE%86%E7%99%BE%E5%90%A8%E7%8E%8B%E5%9C%A8%E4%BA%AC%E6%96%B0%E9%AB%98%E9%80%9F%E5%BC%BA%E8%A1%8C%E5%86%B2%E5%8D%A1%23) `260.0K 🔥` `NEW`
1. [妈妈用玄学治好了暴躁的我](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E7%94%A8%E7%8E%84%E5%AD%A6%E6%B2%BB%E5%A5%BD%E4%BA%86%E6%9A%B4%E8%BA%81%E7%9A%84%E6%88%91%23) `258.2K 🔥` `NEW`
1. [立陶宛为挑衅中国付出代价 (Lithuania pays the price for provoking China)](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E9%99%B6%E5%AE%9B%E4%B8%BA%E6%8C%91%E8%A1%85%E4%B8%AD%E5%9B%BD%E4%BB%98%E5%87%BA%E4%BB%A3%E4%BB%B7%23) `223.0K 🔥` `NEW`
1. [男子吃半根变苦黄瓜致肝衰竭](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%90%83%E5%8D%8A%E6%A0%B9%E5%8F%98%E8%8B%A6%E9%BB%84%E7%93%9C%E8%87%B4%E8%82%9D%E8%A1%B0%E7%AB%AD%23) `187.2K 🔥` `NEW`
1. [小马被游客无人机惊扰狂奔炸肺死亡](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%A9%AC%E8%A2%AB%E6%B8%B8%E5%AE%A2%E6%97%A0%E4%BA%BA%E6%9C%BA%E6%83%8A%E6%89%B0%E7%8B%82%E5%A5%94%E7%82%B8%E8%82%BA%E6%AD%BB%E4%BA%A1%23) `180.8K 🔥` `NEW`
1. [法国世界杯冠军赔率第一](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%A0%E5%86%9B%E8%B5%94%E7%8E%87%E7%AC%AC%E4%B8%80%23) `168.6K 🔥` `NEW`
1. [恋与深空单日投诉量飙升至21961单](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%8D%95%E6%97%A5%E6%8A%95%E8%AF%89%E9%87%8F%E9%A3%99%E5%8D%87%E8%87%B321961%E5%8D%95%23) `136.6K 🔥` `NEW`
1. [向佐向佑同框合照](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%BD%90%E5%90%91%E4%BD%91%E5%90%8C%E6%A1%86%E5%90%88%E7%85%A7%23) `133.8K 🔥` `NEW`
1. [带父母欧洲游落地首日中暑进医院](https://s.weibo.com/weibo?q=%23%E5%B8%A6%E7%88%B6%E6%AF%8D%E6%AC%A7%E6%B4%B2%E6%B8%B8%E8%90%BD%E5%9C%B0%E9%A6%96%E6%97%A5%E4%B8%AD%E6%9A%91%E8%BF%9B%E5%8C%BB%E9%99%A2%23) `133.5K 🔥` `NEW`
1. [国乒男单资格赛全军覆没](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%8D%95%E8%B5%84%E6%A0%BC%E8%B5%9B%E5%85%A8%E5%86%9B%E8%A6%86%E6%B2%A1%23) `1.5M 🔥` `+123%`
1. [豆包和DeepSeek的博弈](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%92%8CDeepSeek%E7%9A%84%E5%8D%9A%E5%BC%88%23) `916.8K 🔥` `+40%`
1. [刘烨16岁儿子诺一颜值](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%83%A816%E5%B2%81%E5%84%BF%E5%AD%90%E8%AF%BA%E4%B8%80%E9%A2%9C%E5%80%BC%23) `435.8K 🔥` `+176%`
1. [杨洋参加军艺同学聚会 (Yang Yang attended the reunion of military art classmates)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E5%8F%82%E5%8A%A0%E5%86%9B%E8%89%BA%E5%90%8C%E5%AD%A6%E8%81%9A%E4%BC%9A%23) `435.6K 🔥` `+141%`
1. [李现 杨紫](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%20%E6%9D%A8%E7%B4%AB%23) `355.0K 🔥` `+87%`
1. [真正厉害的都是长期主义 (What is really powerful is long-termism)](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E5%8E%89%E5%AE%B3%E7%9A%84%E9%83%BD%E6%98%AF%E9%95%BF%E6%9C%9F%E4%B8%BB%E4%B9%89%23) `305.2K 🔥` `+87%`
1. [苹果芯片成本涨45售价狂加250美元](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E8%8A%AF%E7%89%87%E6%88%90%E6%9C%AC%E6%B6%A845%E5%94%AE%E4%BB%B7%E7%8B%82%E5%8A%A0250%E7%BE%8E%E5%85%83%23) `267.4K 🔥` `+41%`
1. [陈妍希生理性恐惧不像演的](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E7%94%9F%E7%90%86%E6%80%A7%E6%81%90%E6%83%A7%E4%B8%8D%E5%83%8F%E6%BC%94%E7%9A%84%23) `247.0K 🔥` `+117%`
1. [原来大家都是这么恢复能量的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%A4%A7%E5%AE%B6%E9%83%BD%E6%98%AF%E8%BF%99%E4%B9%88%E6%81%A2%E5%A4%8D%E8%83%BD%E9%87%8F%E7%9A%84%23) `217.6K 🔥` `+42%`
1. [仙逆](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%23) `174.5K 🔥` `+47%`
1. [多领域亮眼成果筑牢经济增长底气](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E9%A2%86%E5%9F%9F%E4%BA%AE%E7%9C%BC%E6%88%90%E6%9E%9C%E7%AD%91%E7%89%A2%E7%BB%8F%E6%B5%8E%E5%A2%9E%E9%95%BF%E5%BA%95%E6%B0%94%23) `832.0K 🔥`
1. [Alin大闹金曲奖](https://s.weibo.com/weibo?q=%23Alin%E5%A4%A7%E9%97%B9%E9%87%91%E6%9B%B2%E5%A5%96%23) `620.3K 🔥`
1. [孙颖莎 一日双赛](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%20%E4%B8%80%E6%97%A5%E5%8F%8C%E8%B5%9B%23) `142.1K 🔥`
1. [穿和搭一分开就这样](https://s.weibo.com/weibo?q=%23%E7%A9%BF%E5%92%8C%E6%90%AD%E4%B8%80%E5%88%86%E5%BC%80%E5%B0%B1%E8%BF%99%E6%A0%B7%23) `436.1K 🔥` `-34%`
1. [恋与深空 (Love and deep space)](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `416.8K 🔥` `-35%`
1. [恋与深空道歉国外玩家评论](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E9%81%93%E6%AD%89%E5%9B%BD%E5%A4%96%E7%8E%A9%E5%AE%B6%E8%AF%84%E8%AE%BA%23) `372.4K 🔥` `-42%`
1. [抖音通报网红诋毁袁隆平 (Douyin reports that Internet celebrities slander Yuan Longping)](https://s.weibo.com/weibo?q=%23%E6%8A%96%E9%9F%B3%E9%80%9A%E6%8A%A5%E7%BD%91%E7%BA%A2%E8%AF%8B%E6%AF%81%E8%A2%81%E9%9A%86%E5%B9%B3%23) `238.4K 🔥` `-78%`
1. [韩国队回国没有接机](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E9%98%9F%E5%9B%9E%E5%9B%BD%E6%B2%A1%E6%9C%89%E6%8E%A5%E6%9C%BA%23) `184.6K 🔥` `-26%`
1. [世界杯32强全名单](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF32%E5%BC%BA%E5%85%A8%E5%90%8D%E5%8D%95%23) `181.8K 🔥` `-72%`
1. [九尾感谢李九和北笙老师的鞭策](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%E6%84%9F%E8%B0%A2%E6%9D%8E%E4%B9%9D%E5%92%8C%E5%8C%97%E7%AC%99%E8%80%81%E5%B8%88%E7%9A%84%E9%9E%AD%E7%AD%96%23) `170.5K 🔥` `-30%`
1. [莫离大结局](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%E5%A4%A7%E7%BB%93%E5%B1%80%23) `146.9K 🔥` `-23%`
1. [黄景瑜差点就收到罚单了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E5%B7%AE%E7%82%B9%E5%B0%B1%E6%94%B6%E5%88%B0%E7%BD%9A%E5%8D%95%E4%BA%86%23) `144.9K 🔥` `-23%`
1. [金饰克价年内大跌460元 (Price of gold jewelry drops by NT$460 per gram during the year)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E5%85%8B%E4%BB%B7%E5%B9%B4%E5%86%85%E5%A4%A7%E8%B7%8C460%E5%85%83%23) `132.7K 🔥` `-23%`
1. [黎家盈在太空健身画面 (Pictures of Li Jiaying exercising in space)](https://s.weibo.com/weibo?q=%23%E9%BB%8E%E5%AE%B6%E7%9B%88%E5%9C%A8%E5%A4%AA%E7%A9%BA%E5%81%A5%E8%BA%AB%E7%94%BB%E9%9D%A2%23) `131.8K 🔥` `-83%`

Updated at 2026-06-28 20:51:52

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
