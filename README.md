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

1. [发明创可贴当鼠标垫的是天才 (The person who invented Band-Aid as a mouse pad is a genius)](https://s.weibo.com/weibo?q=%23%E5%8F%91%E6%98%8E%E5%88%9B%E5%8F%AF%E8%B4%B4%E5%BD%93%E9%BC%A0%E6%A0%87%E5%9E%AB%E7%9A%84%E6%98%AF%E5%A4%A9%E6%89%8D%23) `786.5K 🔥` `NEW`
1. [初代跑男](https://s.weibo.com/weibo?q=%23%E5%88%9D%E4%BB%A3%E8%B7%91%E7%94%B7%23) `749.1K 🔥` `NEW`
1. [狼队 人屠双向辜负](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%20%E4%BA%BA%E5%B1%A0%E5%8F%8C%E5%90%91%E8%BE%9C%E8%B4%9F%23) `355.6K 🔥` `NEW`
1. [白鹿 跑男](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%20%E8%B7%91%E7%94%B7%23) `354.6K 🔥` `NEW`
1. [张月把你的水晶手串摘了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E6%8A%8A%E4%BD%A0%E7%9A%84%E6%B0%B4%E6%99%B6%E6%89%8B%E4%B8%B2%E6%91%98%E4%BA%86%23) `241.2K 🔥` `NEW`
1. [Angelababy的五月行程](https://s.weibo.com/weibo?q=%23Angelababy%E7%9A%84%E4%BA%94%E6%9C%88%E8%A1%8C%E7%A8%8B%23) `237.5K 🔥` `NEW`
1. [男子健身时锁扣断裂被弹飞致瘫痪](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%81%A5%E8%BA%AB%E6%97%B6%E9%94%81%E6%89%A3%E6%96%AD%E8%A3%82%E8%A2%AB%E5%BC%B9%E9%A3%9E%E8%87%B4%E7%98%AB%E7%97%AA%23) `236.3K 🔥` `NEW`
1. [多地楼市新政出台](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E6%A5%BC%E5%B8%82%E6%96%B0%E6%94%BF%E5%87%BA%E5%8F%B0%23) `190.8K 🔥` `NEW`
1. [新SU7开进上海百年张园](https://s.weibo.com/weibo?q=%23%E6%96%B0SU7%E5%BC%80%E8%BF%9B%E4%B8%8A%E6%B5%B7%E7%99%BE%E5%B9%B4%E5%BC%A0%E5%9B%AD%23) `185.3K 🔥` `NEW`
1. [原来道歉的方式真的有一万种](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E9%81%93%E6%AD%89%E7%9A%84%E6%96%B9%E5%BC%8F%E7%9C%9F%E7%9A%84%E6%9C%89%E4%B8%80%E4%B8%87%E7%A7%8D%23) `180.4K 🔥` `NEW`
1. [刘诗诗新西兰荡秋千 (Liu Shishi swings in New Zealand)](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E6%96%B0%E8%A5%BF%E5%85%B0%E8%8D%A1%E7%A7%8B%E5%8D%83%23) `159.5K 🔥` `NEW`
1. [极氪月交付量创历史新高](https://s.weibo.com/weibo?q=%23%E6%9E%81%E6%B0%AA%E6%9C%88%E4%BA%A4%E4%BB%98%E9%87%8F%E5%88%9B%E5%8E%86%E5%8F%B2%E6%96%B0%E9%AB%98%23) `158.7K 🔥` `NEW`
1. [五一晚会节目单](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E6%99%9A%E4%BC%9A%E8%8A%82%E7%9B%AE%E5%8D%95%23) `152.2K 🔥` `NEW`
1. [过桥咪线](https://s.weibo.com/weibo?q=%23%E8%BF%87%E6%A1%A5%E5%92%AA%E7%BA%BF%23) `143.6K 🔥` `NEW`
1. [金枕榴莲价格打下来了](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%9E%95%E6%A6%B4%E8%8E%B2%E4%BB%B7%E6%A0%BC%E6%89%93%E4%B8%8B%E6%9D%A5%E4%BA%86%23) `122.6K 🔥` `NEW`
1. [李小冉 洗牌码牌抓牌看牌](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E6%B4%97%E7%89%8C%E7%A0%81%E7%89%8C%E6%8A%93%E7%89%8C%E7%9C%8B%E7%89%8C%23) `114.8K 🔥` `NEW`
1. [LCK决定不处罚Ruler](https://s.weibo.com/weibo?q=%23LCK%E5%86%B3%E5%AE%9A%E4%B8%8D%E5%A4%84%E7%BD%9ARuler%23) `107.9K 🔥` `NEW`
1. [星铁LAND2026](https://s.weibo.com/weibo?q=%23%E6%98%9F%E9%93%81LAND2026%23) `106.9K 🔥` `NEW`
1. [樊振东5月赛程](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C5%E6%9C%88%E8%B5%9B%E7%A8%8B%23) `106.7K 🔥` `NEW`
1. [什么细节让你觉得一个人可靠](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E7%BB%86%E8%8A%82%E8%AE%A9%E4%BD%A0%E8%A7%89%E5%BE%97%E4%B8%80%E4%B8%AA%E4%BA%BA%E5%8F%AF%E9%9D%A0%23) `101.4K 🔥` `NEW`
1. [陈芋汐卢为10米台金牌 (Chen Yuxilu wins gold medal in 10m platform)](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%8A%8B%E6%B1%90%E5%8D%A2%E4%B8%BA10%E7%B1%B3%E5%8F%B0%E9%87%91%E7%89%8C%23) `806.7K 🔥` `+556%`
1. [黄鳝被喂避孕药是传了30年的谣言](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%B3%9D%E8%A2%AB%E5%96%82%E9%81%BF%E5%AD%95%E8%8D%AF%E6%98%AF%E4%BC%A0%E4%BA%8630%E5%B9%B4%E7%9A%84%E8%B0%A3%E8%A8%80%23) `597.2K 🔥` `+21%`
1. [陕西11岁失联男孩遗体被发现](https://s.weibo.com/weibo?q=%23%E9%99%95%E8%A5%BF11%E5%B2%81%E5%A4%B1%E8%81%94%E7%94%B7%E5%AD%A9%E9%81%97%E4%BD%93%E8%A2%AB%E5%8F%91%E7%8E%B0%23) `584.0K 🔥` `+266%`
1. [甲亢哥在深圳买的手机掉海里了](https://s.weibo.com/weibo?q=%23%E7%94%B2%E4%BA%A2%E5%93%A5%E5%9C%A8%E6%B7%B1%E5%9C%B3%E4%B9%B0%E7%9A%84%E6%89%8B%E6%9C%BA%E6%8E%89%E6%B5%B7%E9%87%8C%E4%BA%86%23) `416.7K 🔥` `+24%`
1. [五一档票房 (May Day box office)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E6%A1%A3%E7%A5%A8%E6%88%BF%23) `1.1M 🔥`
1. [用画笔定格追光的他们是什么体验](https://s.weibo.com/weibo?q=%23%E7%94%A8%E7%94%BB%E7%AC%94%E5%AE%9A%E6%A0%BC%E8%BF%BD%E5%85%89%E7%9A%84%E4%BB%96%E4%BB%AC%E6%98%AF%E4%BB%80%E4%B9%88%E4%BD%93%E9%AA%8C%23) `791.7K 🔥`
1. [对方拒绝了你的恶意](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E6%96%B9%E6%8B%92%E7%BB%9D%E4%BA%86%E4%BD%A0%E7%9A%84%E6%81%B6%E6%84%8F%23) `789.7K 🔥`
1. [金靖回应瘦到认不出](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%E5%9B%9E%E5%BA%94%E7%98%A6%E5%88%B0%E8%AE%A4%E4%B8%8D%E5%87%BA%23) `354.4K 🔥`
1. [不爱睡觉的国家迎来了最懂他的奶茶](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E7%88%B1%E7%9D%A1%E8%A7%89%E7%9A%84%E5%9B%BD%E5%AE%B6%E8%BF%8E%E6%9D%A5%E4%BA%86%E6%9C%80%E6%87%82%E4%BB%96%E7%9A%84%E5%A5%B6%E8%8C%B6%23) `353.4K 🔥`
1. [顾茜茜怀孕五个月了 (Gu Qianqian is five months pregnant)](https://s.weibo.com/weibo?q=%23%E9%A1%BE%E8%8C%9C%E8%8C%9C%E6%80%80%E5%AD%95%E4%BA%94%E4%B8%AA%E6%9C%88%E4%BA%86%23) `353.3K 🔥`
1. [金饰克价回落买不买](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E5%85%8B%E4%BB%B7%E5%9B%9E%E8%90%BD%E4%B9%B0%E4%B8%8D%E4%B9%B0%23) `181.0K 🔥`
1. [时代少年团演唱会造型 (Times Youth League concert look)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%BC%94%E5%94%B1%E4%BC%9A%E9%80%A0%E5%9E%8B%23) `106.1K 🔥`
1. [穿普拉达的女王 米兰达坐经济舱](https://s.weibo.com/weibo?q=%23%E7%A9%BF%E6%99%AE%E6%8B%89%E8%BE%BE%E7%9A%84%E5%A5%B3%E7%8E%8B%20%E7%B1%B3%E5%85%B0%E8%BE%BE%E5%9D%90%E7%BB%8F%E6%B5%8E%E8%88%B1%23) `373.5K 🔥` `-36%`
1. [著名企业家李建宏国外遭车祸去世 (Famous entrepreneur Li Jianhong died in a car accident abroad)](https://s.weibo.com/weibo?q=%23%E8%91%97%E5%90%8D%E4%BC%81%E4%B8%9A%E5%AE%B6%E6%9D%8E%E5%BB%BA%E5%AE%8F%E5%9B%BD%E5%A4%96%E9%81%AD%E8%BD%A6%E7%A5%B8%E5%8E%BB%E4%B8%96%23) `353.1K 🔥` `-27%`
1. [何宣林 镜头](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%20%E9%95%9C%E5%A4%B4%23) `352.9K 🔥` `-47%`
1. [南开大学已成立调查组 (Nankai University has established an investigation team)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%BC%80%E5%A4%A7%E5%AD%A6%E5%B7%B2%E6%88%90%E7%AB%8B%E8%B0%83%E6%9F%A5%E7%BB%84%23) `242.2K 🔥` `-72%`
1. [特朗普称美国结束对伊朗战争](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E7%BE%8E%E5%9B%BD%E7%BB%93%E6%9D%9F%E5%AF%B9%E4%BC%8A%E6%9C%97%E6%88%98%E4%BA%89%23) `240.9K 🔥` `-24%`
1. [鸿蒙智行4月交付32759辆汽车](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%99%E6%99%BA%E8%A1%8C4%E6%9C%88%E4%BA%A4%E4%BB%9832759%E8%BE%86%E6%B1%BD%E8%BD%A6%23) `238.9K 🔥` `-21%`
1. [妈妈自曝曾故意不让瑶一瑶白天睡觉](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E8%87%AA%E6%9B%9D%E6%9B%BE%E6%95%85%E6%84%8F%E4%B8%8D%E8%AE%A9%E7%91%B6%E4%B8%80%E7%91%B6%E7%99%BD%E5%A4%A9%E7%9D%A1%E8%A7%89%23) `238.5K 🔥` `-25%`
1. [何不同舟渡 檀健次卢昱晓曹骏 (Why don’t you cross by boat Tan Jianci Lu Yuxiao Cao Jun)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E4%B8%8D%E5%90%8C%E8%88%9F%E6%B8%A1%20%E6%AA%80%E5%81%A5%E6%AC%A1%E5%8D%A2%E6%98%B1%E6%99%93%E6%9B%B9%E9%AA%8F%23) `235.2K 🔥` `-37%`
1. [因为小三好看不让女儿好看](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E4%B8%BA%E5%B0%8F%E4%B8%89%E5%A5%BD%E7%9C%8B%E4%B8%8D%E8%AE%A9%E5%A5%B3%E5%84%BF%E5%A5%BD%E7%9C%8B%23) `225.8K 🔥` `-22%`
1. [labubu冰箱被炒至19999元 (Labubu refrigerator is priced at 19,999 yuan)](https://s.weibo.com/weibo?q=%23labubu%E5%86%B0%E7%AE%B1%E8%A2%AB%E7%82%92%E8%87%B319999%E5%85%83%23) `191.0K 🔥` `-40%`
1. [曾沛慈个人喜爱度第五](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E4%B8%AA%E4%BA%BA%E5%96%9C%E7%88%B1%E5%BA%A6%E7%AC%AC%E4%BA%94%23) `187.1K 🔥` `-45%`
1. [孙怡选了阚清子](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E9%80%89%E4%BA%86%E9%98%9A%E6%B8%85%E5%AD%90%23) `174.2K 🔥` `-45%`
1. [迪丽热巴和素人合影](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%92%8C%E7%B4%A0%E4%BA%BA%E5%90%88%E5%BD%B1%23) `168.7K 🔥` `-49%`
1. [你初来人间她已是暮年](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%88%9D%E6%9D%A5%E4%BA%BA%E9%97%B4%E5%A5%B9%E5%B7%B2%E6%98%AF%E6%9A%AE%E5%B9%B4%23) `160.1K 🔥` `-36%`
1. [时代少年团演唱会 (Times Youth League Concert)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%BC%94%E5%94%B1%E4%BC%9A%23) `158.4K 🔥` `-51%`
1. [精神科专家称年轻人急需养脑](https://s.weibo.com/weibo?q=%23%E7%B2%BE%E7%A5%9E%E7%A7%91%E4%B8%93%E5%AE%B6%E7%A7%B0%E5%B9%B4%E8%BD%BB%E4%BA%BA%E6%80%A5%E9%9C%80%E5%85%BB%E8%84%91%23) `120.9K 🔥` `-58%`
1. [消失的人 捂眼](https://s.weibo.com/weibo?q=%23%E6%B6%88%E5%A4%B1%E7%9A%84%E4%BA%BA%20%E6%8D%82%E7%9C%BC%23) `117.3K 🔥` `-44%`
1. [被靠出了人形的北京地铁](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%9D%A0%E5%87%BA%E4%BA%86%E4%BA%BA%E5%BD%A2%E7%9A%84%E5%8C%97%E4%BA%AC%E5%9C%B0%E9%93%81%23) `105.7K 🔥` `-64%`
1. [陈璟翊 时代峰峻](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%92%9F%E7%BF%8A%20%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%23) `104.9K 🔥` `-39%`

Updated at 2026-05-01 18:17:35

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
