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

1. [女子脚踹保安后被反手扇一耳光 (Woman slapped in the face after kicking security guard)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%84%9A%E8%B8%B9%E4%BF%9D%E5%AE%89%E5%90%8E%E8%A2%AB%E5%8F%8D%E6%89%8B%E6%89%87%E4%B8%80%E8%80%B3%E5%85%89%23) `1.3M 🔥` `NEW`
1. [小米汽车](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%23) `1.0M 🔥` `NEW`
1. [鸿蒙智行春季新品发布会](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%99%E6%99%BA%E8%A1%8C%E6%98%A5%E5%AD%A3%E6%96%B0%E5%93%81%E5%8F%91%E5%B8%83%E4%BC%9A%23) `707.7K 🔥` `NEW`
1. [终于知道为什么有些人做菜难吃了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E4%B8%BA%E4%BB%80%E4%B9%88%E6%9C%89%E4%BA%9B%E4%BA%BA%E5%81%9A%E8%8F%9C%E9%9A%BE%E5%90%83%E4%BA%86%23) `698.4K 🔥` `NEW`
1. [网传披荆斩棘6阵容](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%986%E9%98%B5%E5%AE%B9%23) `617.2K 🔥` `NEW`
1. [詹姆斯暴扣杀死比赛](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E6%9A%B4%E6%89%A3%E6%9D%80%E6%AD%BB%E6%AF%94%E8%B5%9B%23) `501.3K 🔥` `NEW`
1. [陈妍希申请强制执行](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E7%94%B3%E8%AF%B7%E5%BC%BA%E5%88%B6%E6%89%A7%E8%A1%8C%23) `499.1K 🔥` `NEW`
1. [iPhone18Pro蓝色曝光](https://s.weibo.com/weibo?q=%23iPhone18Pro%E8%93%9D%E8%89%B2%E6%9B%9D%E5%85%89%23) `495.5K 🔥` `NEW`
1. [生7孩父亲称人多出人头地几率大](https://s.weibo.com/weibo?q=%23%E7%94%9F7%E5%AD%A9%E7%88%B6%E4%BA%B2%E7%A7%B0%E4%BA%BA%E5%A4%9A%E5%87%BA%E4%BA%BA%E5%A4%B4%E5%9C%B0%E5%87%A0%E7%8E%87%E5%A4%A7%23) `373.2K 🔥` `NEW`
1. [58同城APP又现幽灵订单](https://s.weibo.com/weibo?q=%2358%E5%90%8C%E5%9F%8EAPP%E5%8F%88%E7%8E%B0%E5%B9%BD%E7%81%B5%E8%AE%A2%E5%8D%95%23) `371.9K 🔥` `NEW`
1. [飞猪免单 (Fliggy free order)](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E7%8C%AA%E5%85%8D%E5%8D%95%23) `370.2K 🔥` `NEW`
1. [说好的谢楠乘风吴京在家带娃呢](https://s.weibo.com/weibo?q=%23%E8%AF%B4%E5%A5%BD%E7%9A%84%E8%B0%A2%E6%A5%A0%E4%B9%98%E9%A3%8E%E5%90%B4%E4%BA%AC%E5%9C%A8%E5%AE%B6%E5%B8%A6%E5%A8%83%E5%91%A2%23) `367.0K 🔥` `NEW`
1. [地理老师称飞猪免单题是送分题](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E7%90%86%E8%80%81%E5%B8%88%E7%A7%B0%E9%A3%9E%E7%8C%AA%E5%85%8D%E5%8D%95%E9%A2%98%E6%98%AF%E9%80%81%E5%88%86%E9%A2%98%23) `365.2K 🔥` `NEW`
1. [虞书欣戛纳生图](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%88%9B%E7%BA%B3%E7%94%9F%E5%9B%BE%23) `364.7K 🔥` `NEW`
1. [于适解锁奇瑞中国新燃油全球代言](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E9%80%82%E8%A7%A3%E9%94%81%E5%A5%87%E7%91%9E%E4%B8%AD%E5%9B%BD%E6%96%B0%E7%87%83%E6%B2%B9%E5%85%A8%E7%90%83%E4%BB%A3%E8%A8%80%23) `334.9K 🔥` `NEW`
1. [文春 BTS](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%98%A5%20BTS%23) `296.3K 🔥` `NEW`
1. [14岁女孩肠癌晚期腹痛半年以为痛经](https://s.weibo.com/weibo?q=%2314%E5%B2%81%E5%A5%B3%E5%AD%A9%E8%82%A0%E7%99%8C%E6%99%9A%E6%9C%9F%E8%85%B9%E7%97%9B%E5%8D%8A%E5%B9%B4%E4%BB%A5%E4%B8%BA%E7%97%9B%E7%BB%8F%23) `295.3K 🔥` `NEW`
1. [网传浪姐三公师姐助阵](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%B5%AA%E5%A7%90%E4%B8%89%E5%85%AC%E5%B8%88%E5%A7%90%E5%8A%A9%E9%98%B5%23) `290.9K 🔥` `NEW`
1. [志愿军老战士含泪呼喊迎战友回家](https://s.weibo.com/weibo?q=%23%E5%BF%97%E6%84%BF%E5%86%9B%E8%80%81%E6%88%98%E5%A3%AB%E5%90%AB%E6%B3%AA%E5%91%BC%E5%96%8A%E8%BF%8E%E6%88%98%E5%8F%8B%E5%9B%9E%E5%AE%B6%23) `272.5K 🔥` `NEW`
1. [河北蠡县多个村庄地下水变红](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8C%97%E8%A0%A1%E5%8E%BF%E5%A4%9A%E4%B8%AA%E6%9D%91%E5%BA%84%E5%9C%B0%E4%B8%8B%E6%B0%B4%E5%8F%98%E7%BA%A2%23) `272.2K 🔥` `NEW`
1. [大学生线上约美女带21000元前往 (College student makes an appointment with a beautiful woman online and brings 21,000 yuan to go there)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E7%94%9F%E7%BA%BF%E4%B8%8A%E7%BA%A6%E7%BE%8E%E5%A5%B3%E5%B8%A621000%E5%85%83%E5%89%8D%E5%BE%80%23) `264.1K 🔥` `NEW`
1. [日本主播休假时遇地震素颜紧急直播](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%B8%BB%E6%92%AD%E4%BC%91%E5%81%87%E6%97%B6%E9%81%87%E5%9C%B0%E9%9C%87%E7%B4%A0%E9%A2%9C%E7%B4%A7%E6%80%A5%E7%9B%B4%E6%92%AD%23) `260.2K 🔥` `NEW`
1. [宗师挑杯定妆照](https://s.weibo.com/weibo?q=%23%E5%AE%97%E5%B8%88%E6%8C%91%E6%9D%AF%E5%AE%9A%E5%A6%86%E7%85%A7%23) `254.2K 🔥` `NEW`
1. [2026KPL春季赛最佳阵容候选人](https://s.weibo.com/weibo?q=%232026KPL%E6%98%A5%E5%AD%A3%E8%B5%9B%E6%9C%80%E4%BD%B3%E9%98%B5%E5%AE%B9%E5%80%99%E9%80%89%E4%BA%BA%23) `249.0K 🔥` `NEW`
1. [曹德旺说大不了把美国工厂关掉](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E5%BE%B7%E6%97%BA%E8%AF%B4%E5%A4%A7%E4%B8%8D%E4%BA%86%E6%8A%8A%E7%BE%8E%E5%9B%BD%E5%B7%A5%E5%8E%82%E5%85%B3%E6%8E%89%23) `686.6K 🔥` `+106%`
1. [避孕套涨价原因](https://s.weibo.com/weibo?q=%23%E9%81%BF%E5%AD%95%E5%A5%97%E6%B6%A8%E4%BB%B7%E5%8E%9F%E5%9B%A0%23) `622.3K 🔥` `+94%`
1. [GUCCI田曦薇张凌赫大片](https://s.weibo.com/weibo?q=%23GUCCI%E7%94%B0%E6%9B%A6%E8%96%87%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%A4%A7%E7%89%87%23) `498.7K 🔥` `+25%`
1. [华晨宇喂猫吃巧克力蛋糕](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E5%96%82%E7%8C%AB%E5%90%83%E5%B7%A7%E5%85%8B%E5%8A%9B%E8%9B%8B%E7%B3%95%23) `492.8K 🔥` `+24%`
1. [在繁花盛放的春天接英雄回家](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E7%B9%81%E8%8A%B1%E7%9B%9B%E6%94%BE%E7%9A%84%E6%98%A5%E5%A4%A9%E6%8E%A5%E8%8B%B1%E9%9B%84%E5%9B%9E%E5%AE%B6%23) `708.8K 🔥`
1. [中国新燃油旗舰全新瑞虎9上市](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%96%B0%E7%87%83%E6%B2%B9%E6%97%97%E8%88%B0%E5%85%A8%E6%96%B0%E7%91%9E%E8%99%8E9%E4%B8%8A%E5%B8%82%23) `619.9K 🔥`
1. [湖人2比0火箭 (Lakers 2-0 Rockets)](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BA2%E6%AF%940%E7%81%AB%E7%AE%AD%23) `374.1K 🔥`
1. [断绝孩子手机上瘾最快的方法](https://s.weibo.com/weibo?q=%23%E6%96%AD%E7%BB%9D%E5%AD%A9%E5%AD%90%E6%89%8B%E6%9C%BA%E4%B8%8A%E7%98%BE%E6%9C%80%E5%BF%AB%E7%9A%84%E6%96%B9%E6%B3%95%23) `369.5K 🔥`
1. [段奕宏参加烈士遗骸迎回仪式](https://s.weibo.com/weibo?q=%23%E6%AE%B5%E5%A5%95%E5%AE%8F%E5%8F%82%E5%8A%A0%E7%83%88%E5%A3%AB%E9%81%97%E9%AA%B8%E8%BF%8E%E5%9B%9E%E4%BB%AA%E5%BC%8F%23) `368.4K 🔥`
1. [山城小栗旬老婆被前任骗钱后瘦80多斤](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%9F%8E%E5%B0%8F%E6%A0%97%E6%97%AC%E8%80%81%E5%A9%86%E8%A2%AB%E5%89%8D%E4%BB%BB%E9%AA%97%E9%92%B1%E5%90%8E%E7%98%A680%E5%A4%9A%E6%96%A4%23) `367.7K 🔥`
1. [原神](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E7%A5%9E%23) `366.3K 🔥`
1. [伊朗抓住了美国的要害](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8A%93%E4%BD%8F%E4%BA%86%E7%BE%8E%E5%9B%BD%E7%9A%84%E8%A6%81%E5%AE%B3%23) `354.0K 🔥`
1. [挪用1700万女孩愿意坐牢换退款](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E7%94%A81700%E4%B8%87%E5%A5%B3%E5%AD%A9%E6%84%BF%E6%84%8F%E5%9D%90%E7%89%A2%E6%8D%A2%E9%80%80%E6%AC%BE%23) `352.3K 🔥`
1. [迅猛龙回应付费直播](https://s.weibo.com/weibo?q=%23%E8%BF%85%E7%8C%9B%E9%BE%99%E5%9B%9E%E5%BA%94%E4%BB%98%E8%B4%B9%E7%9B%B4%E6%92%AD%23) `347.7K 🔥`
1. [14岁女孩初次痛经查出双子宫双阴道](https://s.weibo.com/weibo?q=%2314%E5%B2%81%E5%A5%B3%E5%AD%A9%E5%88%9D%E6%AC%A1%E7%97%9B%E7%BB%8F%E6%9F%A5%E5%87%BA%E5%8F%8C%E5%AD%90%E5%AE%AB%E5%8F%8C%E9%98%B4%E9%81%93%23) `332.9K 🔥`
1. [王安宇见面会票价](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E8%A7%81%E9%9D%A2%E4%BC%9A%E7%A5%A8%E4%BB%B7%23) `619.2K 🔥` `-23%`
1. [中国大蒜竟被列为国家安全威胁 (Chinese garlic is listed as a national security threat)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A4%A7%E8%92%9C%E7%AB%9F%E8%A2%AB%E5%88%97%E4%B8%BA%E5%9B%BD%E5%AE%B6%E5%AE%89%E5%85%A8%E5%A8%81%E8%83%81%23) `616.7K 🔥` `-24%`
1. [乘风2026三公帮唱](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E4%B8%89%E5%85%AC%E5%B8%AE%E5%94%B1%23) `490.9K 🔥` `-39%`
1. [星巴克免费咖啡](https://s.weibo.com/weibo?q=%23%E6%98%9F%E5%B7%B4%E5%85%8B%E5%85%8D%E8%B4%B9%E5%92%96%E5%95%A1%23) `489.2K 🔥` `-39%`
1. [41岁詹姆斯折叠背扣 (41-year-old James folding back buckle)](https://s.weibo.com/weibo?q=%2341%E5%B2%81%E8%A9%B9%E5%A7%86%E6%96%AF%E6%8A%98%E5%8F%A0%E8%83%8C%E6%89%A3%23) `373.9K 🔥` `-67%`
1. [全糖的写0脂 全脂的写0糖](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%B3%96%E7%9A%84%E5%86%990%E8%84%82%20%E5%85%A8%E8%84%82%E7%9A%84%E5%86%990%E7%B3%96%23) `371.1K 🔥` `-44%`
1. [谢依霖曝和杨幂郭碧婷见面不能化妆](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E4%BE%9D%E9%9C%96%E6%9B%9D%E5%92%8C%E6%9D%A8%E5%B9%82%E9%83%AD%E7%A2%A7%E5%A9%B7%E8%A7%81%E9%9D%A2%E4%B8%8D%E8%83%BD%E5%8C%96%E5%A6%86%23) `272.9K 🔥` `-31%`
1. [102岁老人出殡群鸟盘旋](https://s.weibo.com/weibo?q=%23102%E5%B2%81%E8%80%81%E4%BA%BA%E5%87%BA%E6%AE%A1%E7%BE%A4%E9%B8%9F%E7%9B%98%E6%97%8B%23) `272.2K 🔥` `-24%`
1. [贺峻霖答辩](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E7%AD%94%E8%BE%A9%23) `264.9K 🔥` `-25%`
1. [张凌赫凌探未来定档](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%87%8C%E6%8E%A2%E6%9C%AA%E6%9D%A5%E5%AE%9A%E6%A1%A3%23) `259.7K 🔥` `-22%`
1. [孙杨吃张豆豆剩下的汉堡](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%90%83%E5%BC%A0%E8%B1%86%E8%B1%86%E5%89%A9%E4%B8%8B%E7%9A%84%E6%B1%89%E5%A0%A1%23) `256.4K 🔥` `-25%`
1. [火箭vs湖人 (Rockets vs Lakers)](https://s.weibo.com/weibo?q=%23%E7%81%AB%E7%AE%ADvs%E6%B9%96%E4%BA%BA%23) `252.2K 🔥` `-40%`

Updated at 2026-04-22 15:19:54

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
