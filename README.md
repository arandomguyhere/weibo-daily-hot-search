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

1. [豆包将正式付费 (Doubao will be officially paid)](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%B0%86%E6%AD%A3%E5%BC%8F%E4%BB%98%E8%B4%B9%23) `438.5K 🔥` `NEW`
1. [豆包免费部分](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%85%8D%E8%B4%B9%E9%83%A8%E5%88%86%23) `171.6K 🔥` `NEW`
1. [长征十二号乙运载火箭首飞成功](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%BE%81%E5%8D%81%E4%BA%8C%E5%8F%B7%E4%B9%99%E8%BF%90%E8%BD%BD%E7%81%AB%E7%AE%AD%E9%A6%96%E9%A3%9E%E6%88%90%E5%8A%9F%23) `111.5K 🔥` `NEW`
1. [台湾岛内统一声浪持续高涨](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E5%B2%9B%E5%86%85%E7%BB%9F%E4%B8%80%E5%A3%B0%E6%B5%AA%E6%8C%81%E7%BB%AD%E9%AB%98%E6%B6%A8%23) `106.6K 🔥` `NEW`
1. [瑞幸把HelloKitty写成HeeloKitty](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E6%8A%8AHelloKitty%E5%86%99%E6%88%90HeeloKitty%23) `92.0K 🔥` `NEW`
1. [白云机场一航班落地滑行58分钟](https://s.weibo.com/weibo?q=%23%E7%99%BD%E4%BA%91%E6%9C%BA%E5%9C%BA%E4%B8%80%E8%88%AA%E7%8F%AD%E8%90%BD%E5%9C%B0%E6%BB%91%E8%A1%8C58%E5%88%86%E9%92%9F%23) `90.1K 🔥` `NEW`
1. [黄仁勋称无所不能的电脑来了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E7%A7%B0%E6%97%A0%E6%89%80%E4%B8%8D%E8%83%BD%E7%9A%84%E7%94%B5%E8%84%91%E6%9D%A5%E4%BA%86%23) `77.1K 🔥` `NEW`
1. [虞书欣演长剧导短剧](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%BC%94%E9%95%BF%E5%89%A7%E5%AF%BC%E7%9F%AD%E5%89%A7%23) `67.7K 🔥` `NEW`
1. [记者卧底500人群聊揭秘崩老头内幕](https://s.weibo.com/weibo?q=%23%E8%AE%B0%E8%80%85%E5%8D%A7%E5%BA%95500%E4%BA%BA%E7%BE%A4%E8%81%8A%E6%8F%AD%E7%A7%98%E5%B4%A9%E8%80%81%E5%A4%B4%E5%86%85%E5%B9%95%23) `61.0K 🔥` `NEW`
1. [当努力型遇上天赋型](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%8A%AA%E5%8A%9B%E5%9E%8B%E9%81%87%E4%B8%8A%E5%A4%A9%E8%B5%8B%E5%9E%8B%23) `60.7K 🔥` `NEW`
1. [嫌潮汕火锅太淡欲写5000字差评 (I think Chaoshan hotpot is too bland and I want to write a 5,000-word negative review)](https://s.weibo.com/weibo?q=%23%E5%AB%8C%E6%BD%AE%E6%B1%95%E7%81%AB%E9%94%85%E5%A4%AA%E6%B7%A1%E6%AC%B2%E5%86%995000%E5%AD%97%E5%B7%AE%E8%AF%84%23) `60.7K 🔥` `NEW`
1. [梁靖崑说张本智和瞎忙活](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%91%E8%AF%B4%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E7%9E%8E%E5%BF%99%E6%B4%BB%23) `60.6K 🔥` `NEW`
1. [TOP 新疆](https://s.weibo.com/weibo?q=%23TOP%20%E6%96%B0%E7%96%86%23) `60.5K 🔥` `NEW`
1. [路边加微信KTV女孩可能是崩老头](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E8%BE%B9%E5%8A%A0%E5%BE%AE%E4%BF%A1KTV%E5%A5%B3%E5%AD%A9%E5%8F%AF%E8%83%BD%E6%98%AF%E5%B4%A9%E8%80%81%E5%A4%B4%23) `60.4K 🔥` `NEW`
1. [刘红兵你完了](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BA%A2%E5%85%B5%E4%BD%A0%E5%AE%8C%E4%BA%86%23) `60.4K 🔥` `NEW`
1. [WE你要毁了LPL吗](https://s.weibo.com/weibo?q=%23WE%E4%BD%A0%E8%A6%81%E6%AF%81%E4%BA%86LPL%E5%90%97%23) `60.4K 🔥` `NEW`
1. [苏新皓歌手全民举荐第一](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E6%AD%8C%E6%89%8B%E5%85%A8%E6%B0%91%E4%B8%BE%E8%8D%90%E7%AC%AC%E4%B8%80%23) `60.3K 🔥` `NEW`
1. [月经这5种颜色暗示身体状态](https://s.weibo.com/weibo?q=%23%E6%9C%88%E7%BB%8F%E8%BF%995%E7%A7%8D%E9%A2%9C%E8%89%B2%E6%9A%97%E7%A4%BA%E8%BA%AB%E4%BD%93%E7%8A%B6%E6%80%81%23) `60.2K 🔥` `NEW`
1. [37岁男子花200元换一个月陪聊](https://s.weibo.com/weibo?q=%2337%E5%B2%81%E7%94%B7%E5%AD%90%E8%8A%B1200%E5%85%83%E6%8D%A2%E4%B8%80%E4%B8%AA%E6%9C%88%E9%99%AA%E8%81%8A%23) `60.2K 🔥` `NEW`
1. [伊朗暂停通过中间人同美国对话](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9A%82%E5%81%9C%E9%80%9A%E8%BF%87%E4%B8%AD%E9%97%B4%E4%BA%BA%E5%90%8C%E7%BE%8E%E5%9B%BD%E5%AF%B9%E8%AF%9D%23) `60.2K 🔥` `NEW`
1. [大部分人都对尺寸没有概念 (Most people have no concept of size)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%83%A8%E5%88%86%E4%BA%BA%E9%83%BD%E5%AF%B9%E5%B0%BA%E5%AF%B8%E6%B2%A1%E6%9C%89%E6%A6%82%E5%BF%B5%23) `60.1K 🔥` `NEW`
1. [一个普通人的最大幸运](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E6%99%AE%E9%80%9A%E4%BA%BA%E7%9A%84%E6%9C%80%E5%A4%A7%E5%B9%B8%E8%BF%90%23) `60.0K 🔥` `NEW`
1. [产检发现性病丈夫认为妻子故意隐瞒](https://s.weibo.com/weibo?q=%23%E4%BA%A7%E6%A3%80%E5%8F%91%E7%8E%B0%E6%80%A7%E7%97%85%E4%B8%88%E5%A4%AB%E8%AE%A4%E4%B8%BA%E5%A6%BB%E5%AD%90%E6%95%85%E6%84%8F%E9%9A%90%E7%9E%92%23) `60.0K 🔥` `NEW`
1. [法国情侣夸中餐日本网民破防](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E6%83%85%E4%BE%A3%E5%A4%B8%E4%B8%AD%E9%A4%90%E6%97%A5%E6%9C%AC%E7%BD%91%E6%B0%91%E7%A0%B4%E9%98%B2%23) `60.0K 🔥` `NEW`
1. [灵魂摆渡](https://s.weibo.com/weibo?q=%23%E7%81%B5%E9%AD%82%E6%91%86%E6%B8%A1%23) `59.9K 🔥` `NEW`
1. [WE condi](https://s.weibo.com/weibo?q=%23WE%20condi%23) `59.8K 🔥` `NEW`
1. [俄5岁女童被男邻居强行抱走](https://s.weibo.com/weibo?q=%23%E4%BF%845%E5%B2%81%E5%A5%B3%E7%AB%A5%E8%A2%AB%E7%94%B7%E9%82%BB%E5%B1%85%E5%BC%BA%E8%A1%8C%E6%8A%B1%E8%B5%B0%23) `59.8K 🔥` `NEW`
1. [伊朗计划彻底封锁霍尔木兹](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%AE%A1%E5%88%92%E5%BD%BB%E5%BA%95%E5%B0%81%E9%94%81%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%23) `59.7K 🔥` `NEW`
1. [人糊涂起来就这样莫名其妙](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%B3%8A%E6%B6%82%E8%B5%B7%E6%9D%A5%E5%B0%B1%E8%BF%99%E6%A0%B7%E8%8E%AB%E5%90%8D%E5%85%B6%E5%A6%99%23) `59.7K 🔥` `NEW`
1. [曾沛慈个人胜率100%](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E4%B8%AA%E4%BA%BA%E8%83%9C%E7%8E%87100%25%23) `59.6K 🔥` `NEW`
1. [把伞放冰箱里 (Put the umbrella in the refrigerator)](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E4%BC%9E%E6%94%BE%E5%86%B0%E7%AE%B1%E9%87%8C%23) `59.6K 🔥` `NEW`
1. [Monki喊话TES](https://s.weibo.com/weibo?q=%23Monki%E5%96%8A%E8%AF%9DTES%23) `59.5K 🔥` `NEW`
1. [日本菲律宾想联手偷](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%8F%B2%E5%BE%8B%E5%AE%BE%E6%83%B3%E8%81%94%E6%89%8B%E5%81%B7%23) `59.5K 🔥` `NEW`
1. [这段话彻底杀死了我的钝感力](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%AE%B5%E8%AF%9D%E5%BD%BB%E5%BA%95%E6%9D%80%E6%AD%BB%E4%BA%86%E6%88%91%E7%9A%84%E9%92%9D%E6%84%9F%E5%8A%9B%23) `59.4K 🔥` `NEW`
1. [张碧晨求助歌手选歌](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%A2%A7%E6%99%A8%E6%B1%82%E5%8A%A9%E6%AD%8C%E6%89%8B%E9%80%89%E6%AD%8C%23) `59.4K 🔥` `NEW`
1. [管泽元 我错过了什么](https://s.weibo.com/weibo?q=%23%E7%AE%A1%E6%B3%BD%E5%85%83%20%E6%88%91%E9%94%99%E8%BF%87%E4%BA%86%E4%BB%80%E4%B9%88%23) `59.3K 🔥` `NEW`
1. [主角 现实主义](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%20%E7%8E%B0%E5%AE%9E%E4%B8%BB%E4%B9%89%23) `59.3K 🔥` `NEW`
1. [WE王朝了](https://s.weibo.com/weibo?q=%23WE%E7%8E%8B%E6%9C%9D%E4%BA%86%23) `59.2K 🔥` `NEW`
1. [白鹿喝中药睡过头了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%96%9D%E4%B8%AD%E8%8D%AF%E7%9D%A1%E8%BF%87%E5%A4%B4%E4%BA%86%23) `59.2K 🔥` `NEW`
1. [王兴兴身家飙升至140亿元](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%85%B4%E5%85%B4%E8%BA%AB%E5%AE%B6%E9%A3%99%E5%8D%87%E8%87%B3140%E4%BA%BF%E5%85%83%23) `59.2K 🔥` `NEW`
1. [租客租房卧室卫生间爬出大量蜈蚣 (A large number of centipedes crawled out of the tenant’s bedroom and bathroom)](https://s.weibo.com/weibo?q=%23%E7%A7%9F%E5%AE%A2%E7%A7%9F%E6%88%BF%E5%8D%A7%E5%AE%A4%E5%8D%AB%E7%94%9F%E9%97%B4%E7%88%AC%E5%87%BA%E5%A4%A7%E9%87%8F%E8%9C%88%E8%9A%A3%23) `59.1K 🔥` `NEW`
1. [哈根达斯为什么卖不动了](https://s.weibo.com/weibo?q=%23%E5%93%88%E6%A0%B9%E8%BE%BE%E6%96%AF%E4%B8%BA%E4%BB%80%E4%B9%88%E5%8D%96%E4%B8%8D%E5%8A%A8%E4%BA%86%23) `59.0K 🔥` `NEW`
1. [恋与制作人野火燎心](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E5%88%B6%E4%BD%9C%E4%BA%BA%E9%87%8E%E7%81%AB%E7%87%8E%E5%BF%83%23) `59.0K 🔥` `NEW`
1. [53岁脑死亡患者移植猪肝猪肾](https://s.weibo.com/weibo?q=%2353%E5%B2%81%E8%84%91%E6%AD%BB%E4%BA%A1%E6%82%A3%E8%80%85%E7%A7%BB%E6%A4%8D%E7%8C%AA%E8%82%9D%E7%8C%AA%E8%82%BE%23) `59.0K 🔥` `NEW`
1. [苏新皓被粉丝投稿上爸爸当家了](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E8%A2%AB%E7%B2%89%E4%B8%9D%E6%8A%95%E7%A8%BF%E4%B8%8A%E7%88%B8%E7%88%B8%E5%BD%93%E5%AE%B6%E4%BA%86%23) `58.9K 🔥` `NEW`
1. [英伟达发布PC端超级芯片](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%8F%91%E5%B8%83PC%E7%AB%AF%E8%B6%85%E7%BA%A7%E8%8A%AF%E7%89%87%23) `58.9K 🔥` `NEW`
1. [世界杯英格兰队驻地安保堪比军事堡垒](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E8%8B%B1%E6%A0%BC%E5%85%B0%E9%98%9F%E9%A9%BB%E5%9C%B0%E5%AE%89%E4%BF%9D%E5%A0%AA%E6%AF%94%E5%86%9B%E4%BA%8B%E5%A0%A1%E5%9E%92%23) `58.8K 🔥` `NEW`
1. [六一文案](https://s.weibo.com/weibo?q=%23%E5%85%AD%E4%B8%80%E6%96%87%E6%A1%88%23) `58.7K 🔥` `NEW`
1. [田本昌看杨紫韩东君吻戏不舒服了](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9C%AC%E6%98%8C%E7%9C%8B%E6%9D%A8%E7%B4%AB%E9%9F%A9%E4%B8%9C%E5%90%9B%E5%90%BB%E6%88%8F%E4%B8%8D%E8%88%92%E6%9C%8D%E4%BA%86%23) `58.7K 🔥` `NEW`
1. [男子举报出租车后遭咒骂女儿得癌症](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%BE%E6%8A%A5%E5%87%BA%E7%A7%9F%E8%BD%A6%E5%90%8E%E9%81%AD%E5%92%92%E9%AA%82%E5%A5%B3%E5%84%BF%E5%BE%97%E7%99%8C%E7%97%87%23) `58.6K 🔥` `NEW`

Updated at 2026-06-02 02:46:33

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
