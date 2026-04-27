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

1. [十日终焉首次外景路透 (Ten Days End's first outdoor scene Reuters)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E9%A6%96%E6%AC%A1%E5%A4%96%E6%99%AF%E8%B7%AF%E9%80%8F%23) `1.1M 🔥` `NEW`
1. [国产开源大模型下载量破100亿次](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BA%A7%E5%BC%80%E6%BA%90%E5%A4%A7%E6%A8%A1%E5%9E%8B%E4%B8%8B%E8%BD%BD%E9%87%8F%E7%A0%B4100%E4%BA%BF%E6%AC%A1%23) `846.6K 🔥` `NEW`
1. [炸个蛋花居然要6只手](https://s.weibo.com/weibo?q=%23%E7%82%B8%E4%B8%AA%E8%9B%8B%E8%8A%B1%E5%B1%85%E7%84%B6%E8%A6%816%E5%8F%AA%E6%89%8B%23) `839.4K 🔥` `NEW`
1. [歌手2026 张碧晨](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%20%E5%BC%A0%E7%A2%A7%E6%99%A8%23) `672.8K 🔥` `NEW`
1. [优酷黑夜告白看潘粤明王鹤棣追凶](https://s.weibo.com/weibo?q=%23%E4%BC%98%E9%85%B7%E9%BB%91%E5%A4%9C%E5%91%8A%E7%99%BD%E7%9C%8B%E6%BD%98%E7%B2%A4%E6%98%8E%E7%8E%8B%E9%B9%A4%E6%A3%A3%E8%BF%BD%E5%87%B6%23) `659.6K 🔥` `NEW`
1. [真正的独居](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E7%9A%84%E7%8B%AC%E5%B1%85%23) `366.3K 🔥` `NEW`
1. [佳偶天成 修仙剧](https://s.weibo.com/weibo?q=%23%E4%BD%B3%E5%81%B6%E5%A4%A9%E6%88%90%20%E4%BF%AE%E4%BB%99%E5%89%A7%23) `365.9K 🔥` `NEW`
1. [孕妇买水果遭丈夫咒骂引产账号被封](https://s.weibo.com/weibo?q=%23%E5%AD%95%E5%A6%87%E4%B9%B0%E6%B0%B4%E6%9E%9C%E9%81%AD%E4%B8%88%E5%A4%AB%E5%92%92%E9%AA%82%E5%BC%95%E4%BA%A7%E8%B4%A6%E5%8F%B7%E8%A2%AB%E5%B0%81%23) `361.2K 🔥` `NEW`
1. [张馨予也被蒸汽眼罩烫伤过](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A6%A8%E4%BA%88%E4%B9%9F%E8%A2%AB%E8%92%B8%E6%B1%BD%E7%9C%BC%E7%BD%A9%E7%83%AB%E4%BC%A4%E8%BF%87%23) `359.2K 🔥` `NEW`
1. [王鹤润妆造](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%B6%A6%E5%A6%86%E9%80%A0%23) `353.3K 🔥` `NEW`
1. [鸿星尔克董事长回应提早下班火出圈 (Chairman of Hongxing Erke responded to leaving get off work early and became popular)](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E6%98%9F%E5%B0%94%E5%85%8B%E8%91%A3%E4%BA%8B%E9%95%BF%E5%9B%9E%E5%BA%94%E6%8F%90%E6%97%A9%E4%B8%8B%E7%8F%AD%E7%81%AB%E5%87%BA%E5%9C%88%23) `349.2K 🔥` `NEW`
1. [日本人不愿相信中国座椅给手机充电](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%BA%E4%B8%8D%E6%84%BF%E7%9B%B8%E4%BF%A1%E4%B8%AD%E5%9B%BD%E5%BA%A7%E6%A4%85%E7%BB%99%E6%89%8B%E6%9C%BA%E5%85%85%E7%94%B5%23) `346.1K 🔥` `NEW`
1. [云旗郝熠然曼谷花絮](https://s.weibo.com/weibo?q=%23%E4%BA%91%E6%97%97%E9%83%9D%E7%86%A0%E7%84%B6%E6%9B%BC%E8%B0%B7%E8%8A%B1%E7%B5%AE%23) `343.7K 🔥` `NEW`
1. [虞书欣直播](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%9B%B4%E6%92%AD%23) `341.5K 🔥` `NEW`
1. [田曦薇虞书欣宋祖儿最佳穿搭](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%AE%8B%E7%A5%96%E5%84%BF%E6%9C%80%E4%BD%B3%E7%A9%BF%E6%90%AD%23) `339.1K 🔥` `NEW`
1. [女子剖腹产后突发脑梗致双眼失明](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%89%96%E8%85%B9%E4%BA%A7%E5%90%8E%E7%AA%81%E5%8F%91%E8%84%91%E6%A2%97%E8%87%B4%E5%8F%8C%E7%9C%BC%E5%A4%B1%E6%98%8E%23) `334.5K 🔥` `NEW`
1. [官方通报中学教师坠楼事件](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E4%B8%AD%E5%AD%A6%E6%95%99%E5%B8%88%E5%9D%A0%E6%A5%BC%E4%BA%8B%E4%BB%B6%23) `333.7K 🔥` `NEW`
1. [我国布局太空算力](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%B8%83%E5%B1%80%E5%A4%AA%E7%A9%BA%E7%AE%97%E5%8A%9B%23) `331.3K 🔥` `NEW`
1. [王俊凯选出了宇编和世界的主人](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E9%80%89%E5%87%BA%E4%BA%86%E5%AE%87%E7%BC%96%E5%92%8C%E4%B8%96%E7%95%8C%E7%9A%84%E4%B8%BB%E4%BA%BA%23) `328.9K 🔥` `NEW`
1. [AI短剧 融脸](https://s.weibo.com/weibo?q=%23AI%E7%9F%AD%E5%89%A7%20%E8%9E%8D%E8%84%B8%23) `322.7K 🔥` `NEW`
1. [孙怡阚清子已经和好了 (Sun Yi and Kan Qingzi have reconciled)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E9%98%9A%E6%B8%85%E5%AD%90%E5%B7%B2%E7%BB%8F%E5%92%8C%E5%A5%BD%E4%BA%86%23) `320.5K 🔥` `NEW`
1. [领克900为什么要做这么大的五座](https://s.weibo.com/weibo?q=%23%E9%A2%86%E5%85%8B900%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E5%81%9A%E8%BF%99%E4%B9%88%E5%A4%A7%E7%9A%84%E4%BA%94%E5%BA%A7%23) `319.6K 🔥` `NEW`
1. [老莫坦言负债百万尚未还清](https://s.weibo.com/weibo?q=%23%E8%80%81%E8%8E%AB%E5%9D%A6%E8%A8%80%E8%B4%9F%E5%80%BA%E7%99%BE%E4%B8%87%E5%B0%9A%E6%9C%AA%E8%BF%98%E6%B8%85%23) `318.4K 🔥` `NEW`
1. [高中生水杯被同学投放异物饮后抽搐](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%AD%E7%94%9F%E6%B0%B4%E6%9D%AF%E8%A2%AB%E5%90%8C%E5%AD%A6%E6%8A%95%E6%94%BE%E5%BC%82%E7%89%A9%E9%A5%AE%E5%90%8E%E6%8A%BD%E6%90%90%23) `316.7K 🔥` `NEW`
1. [成毅直播](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E7%9B%B4%E6%92%AD%23) `313.7K 🔥` `NEW`
1. [6岁女童确诊癌症不到2年去世](https://s.weibo.com/weibo?q=%236%E5%B2%81%E5%A5%B3%E7%AB%A5%E7%A1%AE%E8%AF%8A%E7%99%8C%E7%97%87%E4%B8%8D%E5%88%B02%E5%B9%B4%E5%8E%BB%E4%B8%96%23) `311.0K 🔥` `NEW`
1. [男生坐高铁被大姨指挥换座委婉拒绝](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E5%9D%90%E9%AB%98%E9%93%81%E8%A2%AB%E5%A4%A7%E5%A7%A8%E6%8C%87%E6%8C%A5%E6%8D%A2%E5%BA%A7%E5%A7%94%E5%A9%89%E6%8B%92%E7%BB%9D%23) `303.0K 🔥` `NEW`
1. [looper结婚](https://s.weibo.com/weibo?q=%23looper%E7%BB%93%E5%A9%9A%23) `300.3K 🔥` `NEW`
1. [狼队对战好厚米](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%AF%B9%E6%88%98%E5%A5%BD%E5%8E%9A%E7%B1%B3%23) `299.2K 🔥` `NEW`
1. [杨幂脸被蒸汽眼罩烫伤了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%84%B8%E8%A2%AB%E8%92%B8%E6%B1%BD%E7%9C%BC%E7%BD%A9%E7%83%AB%E4%BC%A4%E4%BA%86%23) `11.0M 🔥` `+3684%`
1. [旅游的三千块钱定律 (The three thousand dollar rule of travel)](https://s.weibo.com/weibo?q=%23%E6%97%85%E6%B8%B8%E7%9A%84%E4%B8%89%E5%8D%83%E5%9D%97%E9%92%B1%E5%AE%9A%E5%BE%8B%23) `830.2K 🔥` `+38%`
1. [平台明确不要的艺人](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E5%8F%B0%E6%98%8E%E7%A1%AE%E4%B8%8D%E8%A6%81%E7%9A%84%E8%89%BA%E4%BA%BA%23) `359.6K 🔥` `+32%`
1. [上海咖啡店偶遇了赵丽颖 (Encountered Zhao Liying in a Shanghai coffee shop)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%92%96%E5%95%A1%E5%BA%97%E5%81%B6%E9%81%87%E4%BA%86%E8%B5%B5%E4%B8%BD%E9%A2%96%23) `355.5K 🔥` `+38%`
1. [男子酒后3次布洛芬全身95%溃烂](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%85%92%E5%90%8E3%E6%AC%A1%E5%B8%83%E6%B4%9B%E8%8A%AC%E5%85%A8%E8%BA%AB95%25%E6%BA%83%E7%83%82%23) `351.0K 🔥` `+23%`
1. [氧化菊把杨颖穿过的礼服碎钻弄丢一颗 (Oxidation Ju lost a diamond in the dress worn by Yang Ying)](https://s.weibo.com/weibo?q=%23%E6%B0%A7%E5%8C%96%E8%8F%8A%E6%8A%8A%E6%9D%A8%E9%A2%96%E7%A9%BF%E8%BF%87%E7%9A%84%E7%A4%BC%E6%9C%8D%E7%A2%8E%E9%92%BB%E5%BC%84%E4%B8%A2%E4%B8%80%E9%A2%97%23) `349.3K 🔥` `+41%`
1. [浪姐四公 无踢馆](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%9B%9B%E5%85%AC%20%E6%97%A0%E8%B8%A2%E9%A6%86%23) `344.8K 🔥` `+48%`
1. [巴黎偶遇窦靖童宋妍霏](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%BB%8E%E5%81%B6%E9%81%87%E7%AA%A6%E9%9D%96%E7%AB%A5%E5%AE%8B%E5%A6%8D%E9%9C%8F%23) `338.8K 🔥` `+51%`
1. [田曦薇 飞升](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%20%E9%A3%9E%E5%8D%87%23) `336.1K 🔥` `+61%`
1. [时代少年团 美宝莲](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E7%BE%8E%E5%AE%9D%E8%8E%B2%23) `327.4K 🔥` `+37%`
1. [labubu冰箱溢价3000元](https://s.weibo.com/weibo?q=%23labubu%E5%86%B0%E7%AE%B1%E6%BA%A2%E4%BB%B73000%E5%85%83%23) `326.8K 🔥` `+26%`
1. [身体严重缺觉的7个迹象](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BD%93%E4%B8%A5%E9%87%8D%E7%BC%BA%E8%A7%89%E7%9A%847%E4%B8%AA%E8%BF%B9%E8%B1%A1%23) `324.8K 🔥` `+42%`
1. [曝演员片酬已经跌到低点](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%BC%94%E5%91%98%E7%89%87%E9%85%AC%E5%B7%B2%E7%BB%8F%E8%B7%8C%E5%88%B0%E4%BD%8E%E7%82%B9%23) `313.3K 🔥` `+45%`
1. [丁禹兮回应今年没那么火了 (Ding Yuxi responded that it is not so popular this year)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%9B%9E%E5%BA%94%E4%BB%8A%E5%B9%B4%E6%B2%A1%E9%82%A3%E4%B9%88%E7%81%AB%E4%BA%86%23) `309.4K 🔥` `+53%`
1. [婚纱转场一出来我眼睛都睁大了](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E7%BA%B1%E8%BD%AC%E5%9C%BA%E4%B8%80%E5%87%BA%E6%9D%A5%E6%88%91%E7%9C%BC%E7%9D%9B%E9%83%BD%E7%9D%81%E5%A4%A7%E4%BA%86%23) `307.7K 🔥` `+61%`
1. [曝易梦玲整容](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%98%93%E6%A2%A6%E7%8E%B2%E6%95%B4%E5%AE%B9%23) `304.7K 🔥` `+48%`
1. [白宫记者晚宴500刀一个人](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%AE%AB%E8%AE%B0%E8%80%85%E6%99%9A%E5%AE%B4500%E5%88%80%E4%B8%80%E4%B8%AA%E4%BA%BA%23) `296.7K 🔥` `+77%`
1. [被AI骗去毒蛇窝徒步](https://s.weibo.com/weibo?q=%23%E8%A2%ABAI%E9%AA%97%E5%8E%BB%E6%AF%92%E8%9B%87%E7%AA%9D%E5%BE%92%E6%AD%A5%23) `603.6K 🔥`
1. [骨相美的人适合上镜](https://s.weibo.com/weibo?q=%23%E9%AA%A8%E7%9B%B8%E7%BE%8E%E7%9A%84%E4%BA%BA%E9%80%82%E5%90%88%E4%B8%8A%E9%95%9C%23) `399.5K 🔥`
1. [四晚494元房间被退单后变一晚569元](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E6%99%9A494%E5%85%83%E6%88%BF%E9%97%B4%E8%A2%AB%E9%80%80%E5%8D%95%E5%90%8E%E5%8F%98%E4%B8%80%E6%99%9A569%E5%85%83%23) `901.3K 🔥` `-21%`
1. [黄金被扣30年将按正常时效处理](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%A2%AB%E6%89%A330%E5%B9%B4%E5%B0%86%E6%8C%89%E6%AD%A3%E5%B8%B8%E6%97%B6%E6%95%88%E5%A4%84%E7%90%86%23) `356.9K 🔥` `-57%`
1. [茶卡盐湖心形雕塑被吐槽画蛇添足 (The heart-shaped sculpture in Chaka Salt Lake was criticized for being superfluous)](https://s.weibo.com/weibo?q=%23%E8%8C%B6%E5%8D%A1%E7%9B%90%E6%B9%96%E5%BF%83%E5%BD%A2%E9%9B%95%E5%A1%91%E8%A2%AB%E5%90%90%E6%A7%BD%E7%94%BB%E8%9B%87%E6%B7%BB%E8%B6%B3%23) `305.5K 🔥` `-37%`

Updated at 2026-04-27 22:28:19

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
