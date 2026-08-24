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

1. [全国累计收购小麦超9000万吨](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E7%B4%AF%E8%AE%A1%E6%94%B6%E8%B4%AD%E5%B0%8F%E9%BA%A6%E8%B6%859000%E4%B8%87%E5%90%A8%23) `736.8K 🔥` `NEW`
1. [开车越来越像玩游戏机了](https://s.weibo.com/weibo?q=%23%E5%BC%80%E8%BD%A6%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%83%8F%E7%8E%A9%E6%B8%B8%E6%88%8F%E6%9C%BA%E4%BA%86%23) `734.9K 🔥` `NEW`
1. [换季养生这些健康误区要警惕](https://s.weibo.com/weibo?q=%23%E6%8D%A2%E5%AD%A3%E5%85%BB%E7%94%9F%E8%BF%99%E4%BA%9B%E5%81%A5%E5%BA%B7%E8%AF%AF%E5%8C%BA%E8%A6%81%E8%AD%A6%E6%83%95%23) `681.7K 🔥` `NEW`
1. [雷军用小米新手机发博宣传玄戒O3](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E7%94%A8%E5%B0%8F%E7%B1%B3%E6%96%B0%E6%89%8B%E6%9C%BA%E5%8F%91%E5%8D%9A%E5%AE%A3%E4%BC%A0%E7%8E%84%E6%88%92O3%23) `419.4K 🔥` `NEW`
1. [仙风道骨张凌赫](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%A3%8E%E9%81%93%E9%AA%A8%E5%BC%A0%E5%87%8C%E8%B5%AB%23) `367.7K 🔥` `NEW`
1. [敌敌畏被皮肤吸收可引发重度中毒](https://s.weibo.com/weibo?q=%23%E6%95%8C%E6%95%8C%E7%95%8F%E8%A2%AB%E7%9A%AE%E8%82%A4%E5%90%B8%E6%94%B6%E5%8F%AF%E5%BC%95%E5%8F%91%E9%87%8D%E5%BA%A6%E4%B8%AD%E6%AF%92%23) `342.9K 🔥` `NEW`
1. [娜扎把1000颗珍珠穿身上](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E6%8A%8A1000%E9%A2%97%E7%8F%8D%E7%8F%A0%E7%A9%BF%E8%BA%AB%E4%B8%8A%23) `313.3K 🔥` `NEW`
1. [扶老人事件 和稀泥](https://s.weibo.com/weibo?q=%23%E6%89%B6%E8%80%81%E4%BA%BA%E4%BA%8B%E4%BB%B6%20%E5%92%8C%E7%A8%80%E6%B3%A5%23) `298.4K 🔥` `NEW`
1. [已经不记得外卖最初的样子了](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E7%BB%8F%E4%B8%8D%E8%AE%B0%E5%BE%97%E5%A4%96%E5%8D%96%E6%9C%80%E5%88%9D%E7%9A%84%E6%A0%B7%E5%AD%90%E4%BA%86%23) `266.1K 🔥` `NEW`
1. [宇树科技较首日开盘蒸发2000亿市值](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E8%BE%83%E9%A6%96%E6%97%A5%E5%BC%80%E7%9B%98%E8%92%B8%E5%8F%912000%E4%BA%BF%E5%B8%82%E5%80%BC%23) `251.1K 🔥` `NEW`
1. [阚清子晒不精致度假plog](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E6%99%92%E4%B8%8D%E7%B2%BE%E8%87%B4%E5%BA%A6%E5%81%87plog%23) `228.8K 🔥` `NEW`
1. [权志龙送给氧化菊的礼物](https://s.weibo.com/weibo?q=%23%E6%9D%83%E5%BF%97%E9%BE%99%E9%80%81%E7%BB%99%E6%B0%A7%E5%8C%96%E8%8F%8A%E7%9A%84%E7%A4%BC%E7%89%A9%23) `218.4K 🔥` `NEW`
1. [银行行长让代驾背贷55万后失联](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E8%A1%8C%E9%95%BF%E8%AE%A9%E4%BB%A3%E9%A9%BE%E8%83%8C%E8%B4%B755%E4%B8%87%E5%90%8E%E5%A4%B1%E8%81%94%23) `211.3K 🔥` `NEW`
1. [韩沛颖没向王晓晨道歉](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%B2%9B%E9%A2%96%E6%B2%A1%E5%90%91%E7%8E%8B%E6%99%93%E6%99%A8%E9%81%93%E6%AD%89%23) `210.5K 🔥` `NEW`
1. [当王楚钦被喊王队好](https://s.weibo.com/weibo?q=%23%E5%BD%93%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%A2%AB%E5%96%8A%E7%8E%8B%E9%98%9F%E5%A5%BD%23) `206.8K 🔥` `NEW`
1. [一句话让一个成年男子昏睡了三个小时](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%8F%A5%E8%AF%9D%E8%AE%A9%E4%B8%80%E4%B8%AA%E6%88%90%E5%B9%B4%E7%94%B7%E5%AD%90%E6%98%8F%E7%9D%A1%E4%BA%86%E4%B8%89%E4%B8%AA%E5%B0%8F%E6%97%B6%23) `167.5K 🔥` `NEW`
1. [wwpp致歉](https://s.weibo.com/weibo?q=%23wwpp%E8%87%B4%E6%AD%89%23) `163.2K 🔥` `NEW`
1. [李昀锐一露脸瞿颖就开始加分了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E4%B8%80%E9%9C%B2%E8%84%B8%E7%9E%BF%E9%A2%96%E5%B0%B1%E5%BC%80%E5%A7%8B%E5%8A%A0%E5%88%86%E4%BA%86%23) `137.7K 🔥` `NEW`
1. [印度学者谈印度人被称为阿三](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%AD%A6%E8%80%85%E8%B0%88%E5%8D%B0%E5%BA%A6%E4%BA%BA%E8%A2%AB%E7%A7%B0%E4%B8%BA%E9%98%BF%E4%B8%89%23) `137.3K 🔥` `NEW`
1. [原来大部分女儿都是遗传爸爸了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%A4%A7%E9%83%A8%E5%88%86%E5%A5%B3%E5%84%BF%E9%83%BD%E6%98%AF%E9%81%97%E4%BC%A0%E7%88%B8%E7%88%B8%E4%BA%86%23) `720.1K 🔥` `+99%`
1. [小徐第9次六级考了339分](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%BE%90%E7%AC%AC9%E6%AC%A1%E5%85%AD%E7%BA%A7%E8%80%83%E4%BA%86339%E5%88%86%23) `586.4K 🔥` `+177%`
1. [璀璨之上 迪丽热巴](https://s.weibo.com/weibo?q=%23%E7%92%80%E7%92%A8%E4%B9%8B%E4%B8%8A%20%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23) `437.1K 🔥` `+44%`
1. [期待不高去了却很惊艳的城市](https://s.weibo.com/weibo?q=%23%E6%9C%9F%E5%BE%85%E4%B8%8D%E9%AB%98%E5%8E%BB%E4%BA%86%E5%8D%B4%E5%BE%88%E6%83%8A%E8%89%B3%E7%9A%84%E5%9F%8E%E5%B8%82%23) `347.9K 🔥` `+23%`
1. [主角原著14岁被造谣](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%E5%8E%9F%E8%91%9714%E5%B2%81%E8%A2%AB%E9%80%A0%E8%B0%A3%23) `259.1K 🔥` `+31%`
1. [瞿颖早年不敢胡王菲的牌](https://s.weibo.com/weibo?q=%23%E7%9E%BF%E9%A2%96%E6%97%A9%E5%B9%B4%E4%B8%8D%E6%95%A2%E8%83%A1%E7%8E%8B%E8%8F%B2%E7%9A%84%E7%89%8C%23) `247.7K 🔥` `+35%`
1. [12306回应无座票二等座同价](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E6%97%A0%E5%BA%A7%E7%A5%A8%E4%BA%8C%E7%AD%89%E5%BA%A7%E5%90%8C%E4%BB%B7%23) `1.7M 🔥`
1. [央视曝光隔空猥亵](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E9%9A%94%E7%A9%BA%E7%8C%A5%E4%BA%B5%23) `1.3M 🔥`
1. [广西洪水](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%B4%AA%E6%B0%B4%23) `734.5K 🔥`
1. [王以太被披哥工作人员吐槽](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BB%A5%E5%A4%AA%E8%A2%AB%E6%8A%AB%E5%93%A5%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E5%90%90%E6%A7%BD%23) `731.5K 🔥`
1. [东方甄选薪酬少发4个亿](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E8%96%AA%E9%85%AC%E5%B0%91%E5%8F%914%E4%B8%AA%E4%BA%BF%23) `438.6K 🔥`
1. [刘浩存工作室声明](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%A3%B0%E6%98%8E%23) `426.4K 🔥`
1. [法老 退圈](https://s.weibo.com/weibo?q=%23%E6%B3%95%E8%80%81%20%E9%80%80%E5%9C%88%23) `421.9K 🔥`
1. [新湃传媒是陈情令出品公司](https://s.weibo.com/weibo?q=%23%E6%96%B0%E6%B9%83%E4%BC%A0%E5%AA%92%E6%98%AF%E9%99%88%E6%83%85%E4%BB%A4%E5%87%BA%E5%93%81%E5%85%AC%E5%8F%B8%23) `345.4K 🔥`
1. [女子为吹空调把电梯锁在自家楼层](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%BA%E5%90%B9%E7%A9%BA%E8%B0%83%E6%8A%8A%E7%94%B5%E6%A2%AF%E9%94%81%E5%9C%A8%E8%87%AA%E5%AE%B6%E6%A5%BC%E5%B1%82%23) `342.7K 🔥`
1. [小米18Fold九月上市](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318Fold%E4%B9%9D%E6%9C%88%E4%B8%8A%E5%B8%82%23) `318.6K 🔥`
1. [傅首尔回应整容争议](https://s.weibo.com/weibo?q=%23%E5%82%85%E9%A6%96%E5%B0%94%E5%9B%9E%E5%BA%94%E6%95%B4%E5%AE%B9%E4%BA%89%E8%AE%AE%23) `291.6K 🔥`
1. [终于长成小时候喜欢的漂亮姐姐](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E9%95%BF%E6%88%90%E5%B0%8F%E6%97%B6%E5%80%99%E5%96%9C%E6%AC%A2%E7%9A%84%E6%BC%82%E4%BA%AE%E5%A7%90%E5%A7%90%23) `233.2K 🔥`
1. [金秀贤复出活动现场](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%A7%80%E8%B4%A4%E5%A4%8D%E5%87%BA%E6%B4%BB%E5%8A%A8%E7%8E%B0%E5%9C%BA%23) `232.0K 🔥`
1. [法务简直是最吃压力之人](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%8A%A1%E7%AE%80%E7%9B%B4%E6%98%AF%E6%9C%80%E5%90%83%E5%8E%8B%E5%8A%9B%E4%B9%8B%E4%BA%BA%23) `218.5K 🔥`
1. [小店老板暗示支付宝答案也太拼了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%BA%97%E8%80%81%E6%9D%BF%E6%9A%97%E7%A4%BA%E6%94%AF%E4%BB%98%E5%AE%9D%E7%AD%94%E6%A1%88%E4%B9%9F%E5%A4%AA%E6%8B%BC%E4%BA%86%23) `189.0K 🔥`
1. [四川地震局已终止预警第三方授权](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%9C%B0%E9%9C%87%E5%B1%80%E5%B7%B2%E7%BB%88%E6%AD%A2%E9%A2%84%E8%AD%A6%E7%AC%AC%E4%B8%89%E6%96%B9%E6%8E%88%E6%9D%83%23) `636.5K 🔥` `-49%`
1. [扶老人遭索赔店主儿子说到此为止吧](https://s.weibo.com/weibo?q=%23%E6%89%B6%E8%80%81%E4%BA%BA%E9%81%AD%E7%B4%A2%E8%B5%94%E5%BA%97%E4%B8%BB%E5%84%BF%E5%AD%90%E8%AF%B4%E5%88%B0%E6%AD%A4%E4%B8%BA%E6%AD%A2%E5%90%A7%23) `433.2K 🔥` `-51%`
1. [王一博告了新湃传媒](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%91%8A%E4%BA%86%E6%96%B0%E6%B9%83%E4%BC%A0%E5%AA%92%23) `431.6K 🔥` `-23%`
1. [网友92万代孕孩子患自闭症](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B92%E4%B8%87%E4%BB%A3%E5%AD%95%E5%AD%A9%E5%AD%90%E6%82%A3%E8%87%AA%E9%97%AD%E7%97%87%23) `424.4K 🔥` `-29%`
1. [小米玄戒O3发布](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E7%8E%84%E6%88%92O3%E5%8F%91%E5%B8%83%23) `342.0K 🔥` `-32%`
1. [小米玄戒](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E7%8E%84%E6%88%92%23) `235.4K 🔥` `-64%`
1. [刘浩存有段地府戏也被删了](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E6%9C%89%E6%AE%B5%E5%9C%B0%E5%BA%9C%E6%88%8F%E4%B9%9F%E8%A2%AB%E5%88%A0%E4%BA%86%23) `225.1K 🔥` `-37%`
1. [虞书欣 迷雾剧场连环套](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%20%E8%BF%B7%E9%9B%BE%E5%89%A7%E5%9C%BA%E8%BF%9E%E7%8E%AF%E5%A5%97%23) `216.9K 🔥` `-32%`
1. [四川7.7级地震预警为冒名发布](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D7.7%E7%BA%A7%E5%9C%B0%E9%9C%87%E9%A2%84%E8%AD%A6%E4%B8%BA%E5%86%92%E5%90%8D%E5%8F%91%E5%B8%83%23) `176.6K 🔥` `-42%`
1. [严浩翔香水拌饭](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E9%A6%99%E6%B0%B4%E6%8B%8C%E9%A5%AD%23) `167.9K 🔥` `-51%`
1. [让别人觉得舒服的说话技巧](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E5%88%AB%E4%BA%BA%E8%A7%89%E5%BE%97%E8%88%92%E6%9C%8D%E7%9A%84%E8%AF%B4%E8%AF%9D%E6%8A%80%E5%B7%A7%23) `155.8K 🔥` `-37%`
1. [陈瑶的情商](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E7%9A%84%E6%83%85%E5%95%86%23) `137.6K 🔥` `-31%`

Updated at 2026-08-24 16:25:52

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
