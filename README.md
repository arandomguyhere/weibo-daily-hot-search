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

1. [当寂静的广西街头响起子弟兵口号 (When the silent streets of Guangxi rang out the slogans of the disciples)](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%AF%82%E9%9D%99%E7%9A%84%E5%B9%BF%E8%A5%BF%E8%A1%97%E5%A4%B4%E5%93%8D%E8%B5%B7%E5%AD%90%E5%BC%9F%E5%85%B5%E5%8F%A3%E5%8F%B7%23) `860.0K 🔥` `NEW`
1. [孟子义内娱人脉101](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%86%85%E5%A8%B1%E4%BA%BA%E8%84%89101%23) `859.9K 🔥` `NEW`
1. [最新世界杯夺冠概率出炉](https://s.weibo.com/weibo?q=%23%E6%9C%80%E6%96%B0%E4%B8%96%E7%95%8C%E6%9D%AF%E5%A4%BA%E5%86%A0%E6%A6%82%E7%8E%87%E5%87%BA%E7%82%89%23) `459.8K 🔥` `NEW`
1. [孙颖莎蜡像入驻上海杜莎](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%9C%A1%E5%83%8F%E5%85%A5%E9%A9%BB%E4%B8%8A%E6%B5%B7%E6%9D%9C%E8%8E%8E%23) `456.4K 🔥` `NEW`
1. [广西贵港动物园总损失超400万](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E8%B4%B5%E6%B8%AF%E5%8A%A8%E7%89%A9%E5%9B%AD%E6%80%BB%E6%8D%9F%E5%A4%B1%E8%B6%85400%E4%B8%87%23) `453.0K 🔥` `NEW`
1. [柳州消防在贵港成功转运多名儿童](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E5%B7%9E%E6%B6%88%E9%98%B2%E5%9C%A8%E8%B4%B5%E6%B8%AF%E6%88%90%E5%8A%9F%E8%BD%AC%E8%BF%90%E5%A4%9A%E5%90%8D%E5%84%BF%E7%AB%A5%23) `450.5K 🔥` `NEW`
1. [关晓彤 鹿晗](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%20%E9%B9%BF%E6%99%97%23) `449.3K 🔥` `NEW`
1. [一图数览我国经济多领域成绩单](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%9B%BE%E6%95%B0%E8%A7%88%E6%88%91%E5%9B%BD%E7%BB%8F%E6%B5%8E%E5%A4%9A%E9%A2%86%E5%9F%9F%E6%88%90%E7%BB%A9%E5%8D%95%23) `444.2K 🔥` `NEW`
1. [一家三口被卷走身亡家属发声](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E8%A2%AB%E5%8D%B7%E8%B5%B0%E8%BA%AB%E4%BA%A1%E5%AE%B6%E5%B1%9E%E5%8F%91%E5%A3%B0%23) `441.4K 🔥` `NEW`
1. [张真源发赔笑表情包](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%8F%91%E8%B5%94%E7%AC%91%E8%A1%A8%E6%83%85%E5%8C%85%23) `437.8K 🔥` `NEW`
1. [丈夫杀害出轨妻子子女曾提交谅解书 (Husband submitted letter of understanding for killing cheating wife and children)](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E6%9D%80%E5%AE%B3%E5%87%BA%E8%BD%A8%E5%A6%BB%E5%AD%90%E5%AD%90%E5%A5%B3%E6%9B%BE%E6%8F%90%E4%BA%A4%E8%B0%85%E8%A7%A3%E4%B9%A6%23) `433.7K 🔥` `NEW`
1. [陈靖可何与鱼男郎的自我修养](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%9D%96%E5%8F%AF%E4%BD%95%E4%B8%8E%E9%B1%BC%E7%94%B7%E9%83%8E%E7%9A%84%E8%87%AA%E6%88%91%E4%BF%AE%E5%85%BB%23) `432.7K 🔥` `NEW`
1. [特朗普要求全面切断与西班牙贸易](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%A6%81%E6%B1%82%E5%85%A8%E9%9D%A2%E5%88%87%E6%96%AD%E4%B8%8E%E8%A5%BF%E7%8F%AD%E7%89%99%E8%B4%B8%E6%98%93%23) `429.3K 🔥` `NEW`
1. [西湖开闸放水备战台风](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E6%B9%96%E5%BC%80%E9%97%B8%E6%94%BE%E6%B0%B4%E5%A4%87%E6%88%98%E5%8F%B0%E9%A3%8E%23) `427.7K 🔥` `NEW`
1. [李小冉这样不怪王濛陷进去](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E8%BF%99%E6%A0%B7%E4%B8%8D%E6%80%AA%E7%8E%8B%E6%BF%9B%E9%99%B7%E8%BF%9B%E5%8E%BB%23) `416.8K 🔥` `NEW`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `406.4K 🔥` `NEW`
1. [埃及教练向阿根廷运动员吐口水](https://s.weibo.com/weibo?q=%23%E5%9F%83%E5%8F%8A%E6%95%99%E7%BB%83%E5%90%91%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%BF%90%E5%8A%A8%E5%91%98%E5%90%90%E5%8F%A3%E6%B0%B4%23) `403.8K 🔥` `NEW`
1. [看王俊凯演唱会机票打折](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E6%9C%BA%E7%A5%A8%E6%89%93%E6%8A%98%23) `402.2K 🔥` `NEW`
1. [纯电GLC太全面了](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%94%B5GLC%E5%A4%AA%E5%85%A8%E9%9D%A2%E4%BA%86%23) `400.6K 🔥` `NEW`
1. [奔驰发布会](https://s.weibo.com/weibo?q=%23%E5%A5%94%E9%A9%B0%E5%8F%91%E5%B8%83%E4%BC%9A%23) `397.6K 🔥` `NEW`
1. [周深宣传孟子义百花杀 (Zhou Shen promoted Mencius’ righteousness of killing a hundred flowers)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E5%AE%A3%E4%BC%A0%E5%AD%9F%E5%AD%90%E4%B9%89%E7%99%BE%E8%8A%B1%E6%9D%80%23) `395.5K 🔥` `NEW`
1. [功夫女足招商](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E6%8B%9B%E5%95%86%23) `387.8K 🔥` `NEW`
1. [广西灾区现状](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E7%81%BE%E5%8C%BA%E7%8E%B0%E7%8A%B6%23) `382.7K 🔥` `NEW`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `381.5K 🔥` `NEW`
1. [大司命新皮肤蝴蝶元素拉满了](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%8F%B8%E5%91%BD%E6%96%B0%E7%9A%AE%E8%82%A4%E8%9D%B4%E8%9D%B6%E5%85%83%E7%B4%A0%E6%8B%89%E6%BB%A1%E4%BA%86%23) `379.6K 🔥` `NEW`
1. [幼童被狗撕咬半天无路人上前帮忙](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E7%AB%A5%E8%A2%AB%E7%8B%97%E6%92%95%E5%92%AC%E5%8D%8A%E5%A4%A9%E6%97%A0%E8%B7%AF%E4%BA%BA%E4%B8%8A%E5%89%8D%E5%B8%AE%E5%BF%99%23) `372.3K 🔥` `NEW`
1. [上海两只狗咬住一幼童拖行](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%B8%A4%E5%8F%AA%E7%8B%97%E5%92%AC%E4%BD%8F%E4%B8%80%E5%B9%BC%E7%AB%A5%E6%8B%96%E8%A1%8C%23) `371.7K 🔥` `NEW`
1. [野狗骨头10.9%](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B410.9%25%23) `367.0K 🔥` `NEW`
1. [明显能感受到暑假工上班了](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%BE%E8%83%BD%E6%84%9F%E5%8F%97%E5%88%B0%E6%9A%91%E5%81%87%E5%B7%A5%E4%B8%8A%E7%8F%AD%E4%BA%86%23) `455.0K 🔥` `+22%`
1. [台风 (typhoon)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `3.1M 🔥`
1. [世界杯四分之一决赛门票暴跌近60%](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%9B%9B%E5%88%86%E4%B9%8B%E4%B8%80%E5%86%B3%E8%B5%9B%E9%97%A8%E7%A5%A8%E6%9A%B4%E8%B7%8C%E8%BF%9160%25%23) `1.1M 🔥`
1. [广西贵港12000名师生被困 (12,000 teachers and students trapped in Guigang, Guangxi)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E8%B4%B5%E6%B8%AF12000%E5%90%8D%E5%B8%88%E7%94%9F%E8%A2%AB%E5%9B%B0%23) `459.1K 🔥`
1. [金晨仍持续掉粉](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%E4%BB%8D%E6%8C%81%E7%BB%AD%E6%8E%89%E7%B2%89%23) `445.4K 🔥`
1. [功夫女足的观后感](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%9A%84%E8%A7%82%E5%90%8E%E6%84%9F%23) `439.5K 🔥`
1. [华为几乎把整本山海经都注册了](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%87%A0%E4%B9%8E%E6%8A%8A%E6%95%B4%E6%9C%AC%E5%B1%B1%E6%B5%B7%E7%BB%8F%E9%83%BD%E6%B3%A8%E5%86%8C%E4%BA%86%23) `435.2K 🔥`
1. [范丞丞方起诉司晓迪 (Fan Chengcheng sues Si Xiaodi)](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E6%96%B9%E8%B5%B7%E8%AF%89%E5%8F%B8%E6%99%93%E8%BF%AA%23) `423.3K 🔥`
1. [身体严重缺觉的8个迹象](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BD%93%E4%B8%A5%E9%87%8D%E7%BC%BA%E8%A7%89%E7%9A%848%E4%B8%AA%E8%BF%B9%E8%B1%A1%23) `422.0K 🔥`
1. [印13岁女孩遭32人轮奸涉事酒店被拆](https://s.weibo.com/weibo?q=%23%E5%8D%B013%E5%B2%81%E5%A5%B3%E5%AD%A9%E9%81%AD32%E4%BA%BA%E8%BD%AE%E5%A5%B8%E6%B6%89%E4%BA%8B%E9%85%92%E5%BA%97%E8%A2%AB%E6%8B%86%23) `420.0K 🔥`
1. [千万不要侧躺玩手机 (Never lie on your side and play with your phone)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E4%BE%A7%E8%BA%BA%E7%8E%A9%E6%89%8B%E6%9C%BA%23) `415.2K 🔥`
1. [赵丽颖闺蜜暂代经纪人 (Zhao Liying's best friend temporarily acts as agent)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E9%97%BA%E8%9C%9C%E6%9A%82%E4%BB%A3%E7%BB%8F%E7%BA%AA%E4%BA%BA%23) `413.4K 🔥`
1. [张婧仪合作过最帅的男演员宋威龙](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%90%88%E4%BD%9C%E8%BF%87%E6%9C%80%E5%B8%85%E7%9A%84%E7%94%B7%E6%BC%94%E5%91%98%E5%AE%8B%E5%A8%81%E9%BE%99%23) `409.7K 🔥`
1. [大厂人的消费观好可怕](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%8E%82%E4%BA%BA%E7%9A%84%E6%B6%88%E8%B4%B9%E8%A7%82%E5%A5%BD%E5%8F%AF%E6%80%95%23) `395.1K 🔥`
1. [董思成退出NCT](https://s.weibo.com/weibo?q=%23%E8%91%A3%E6%80%9D%E6%88%90%E9%80%80%E5%87%BANCT%23) `392.6K 🔥`
1. [恋与深空道歉自查自纠仍是将来时](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E9%81%93%E6%AD%89%E8%87%AA%E6%9F%A5%E8%87%AA%E7%BA%A0%E4%BB%8D%E6%98%AF%E5%B0%86%E6%9D%A5%E6%97%B6%23) `389.4K 🔥`
1. [广西 血清 (Guangxi serum)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%20%E8%A1%80%E6%B8%85%23) `386.4K 🔥`
1. [丁程鑫张凌赫看到刘宇宁身上有草莓的反应](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9C%8B%E5%88%B0%E5%88%98%E5%AE%87%E5%AE%81%E8%BA%AB%E4%B8%8A%E6%9C%89%E8%8D%89%E8%8E%93%E7%9A%84%E5%8F%8D%E5%BA%94%23) `377.4K 🔥`
1. [曾和儿子换血美国富豪患不治之症](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E5%92%8C%E5%84%BF%E5%AD%90%E6%8D%A2%E8%A1%80%E7%BE%8E%E5%9B%BD%E5%AF%8C%E8%B1%AA%E6%82%A3%E4%B8%8D%E6%B2%BB%E4%B9%8B%E7%97%87%23) `376.3K 🔥`
1. [阿根廷 脏 (argentina dirty)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%20%E8%84%8F%23) `370.0K 🔥`
1. [G2战胜T1](https://s.weibo.com/weibo?q=%23G2%E6%88%98%E8%83%9CT1%23) `424.6K 🔥` `-53%`
1. [科学应对台风指南](https://s.weibo.com/weibo?q=%23%E7%A7%91%E5%AD%A6%E5%BA%94%E5%AF%B9%E5%8F%B0%E9%A3%8E%E6%8C%87%E5%8D%97%23) `410.3K 🔥` `-56%`

Updated at 2026-07-08 21:10:59

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
