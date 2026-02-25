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

1. [一家4口上山妻子死亡失联时神情恐惧 (Family of 4 looked frightened when wife died and lost contact while going up mountain)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B64%E5%8F%A3%E4%B8%8A%E5%B1%B1%E5%A6%BB%E5%AD%90%E6%AD%BB%E4%BA%A1%E5%A4%B1%E8%81%94%E6%97%B6%E7%A5%9E%E6%83%85%E6%81%90%E6%83%A7%23) `529.4K 🔥` `NEW`
1. [首都博物馆道歉](https://s.weibo.com/weibo?q=%23%E9%A6%96%E9%83%BD%E5%8D%9A%E7%89%A9%E9%A6%86%E9%81%93%E6%AD%89%23) `492.2K 🔥` `NEW`
1. [FENDI2026秋冬时装秀](https://s.weibo.com/weibo?q=%23FENDI2026%E7%A7%8B%E5%86%AC%E6%97%B6%E8%A3%85%E7%A7%80%23) `462.4K 🔥` `NEW`
1. [孙颖莎vs萨马拉](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Evs%E8%90%A8%E9%A9%AC%E6%8B%89%23) `201.4K 🔥` `NEW`
1. [纯真年代的爱情](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%9C%9F%E5%B9%B4%E4%BB%A3%E7%9A%84%E7%88%B1%E6%83%85%23) `199.6K 🔥` `NEW`
1. [内娱85花雏形](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B185%E8%8A%B1%E9%9B%8F%E5%BD%A2%23) `111.5K 🔥` `NEW`
1. [脆升升薯条被曝吃出苍蝇](https://s.weibo.com/weibo?q=%23%E8%84%86%E5%8D%87%E5%8D%87%E8%96%AF%E6%9D%A1%E8%A2%AB%E6%9B%9D%E5%90%83%E5%87%BA%E8%8B%8D%E8%9D%87%23) `105.0K 🔥` `NEW`
1. [成都地铁18号线](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E5%9C%B0%E9%93%8118%E5%8F%B7%E7%BA%BF%23) `93.3K 🔥` `NEW`
1. [乌克兰将恢复俄过境输油管道](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%8B%E5%85%B0%E5%B0%86%E6%81%A2%E5%A4%8D%E4%BF%84%E8%BF%87%E5%A2%83%E8%BE%93%E6%B2%B9%E7%AE%A1%E9%81%93%23) `79.8K 🔥` `NEW`
1. [12306回应半夜候补1700元车票作废](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E5%8D%8A%E5%A4%9C%E5%80%99%E8%A1%A51700%E5%85%83%E8%BD%A6%E7%A5%A8%E4%BD%9C%E5%BA%9F%23) `787.6K 🔥` `+258%`
1. [偏偏宠爱 陈飞宇 (I just love Chen Feiyu)](https://s.weibo.com/weibo?q=%23%E5%81%8F%E5%81%8F%E5%AE%A0%E7%88%B1%20%E9%99%88%E9%A3%9E%E5%AE%87%23) `482.3K 🔥` `+238%`
1. [狙击蝴蝶韩国播出](https://s.weibo.com/weibo?q=%23%E7%8B%99%E5%87%BB%E8%9D%B4%E8%9D%B6%E9%9F%A9%E5%9B%BD%E6%92%AD%E5%87%BA%23) `197.3K 🔥` `+42%`
1. [中秋请3天假堪比春节 (Taking 3 days off during the Mid-Autumn Festival is comparable to the Spring Festival)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%A7%8B%E8%AF%B73%E5%A4%A9%E5%81%87%E5%A0%AA%E6%AF%94%E6%98%A5%E8%8A%82%23) `1.1M 🔥`
1. [春节消费节节高 (Consumption increases during Spring Festival)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E6%B6%88%E8%B4%B9%E8%8A%82%E8%8A%82%E9%AB%98%23) `597.1K 🔥`
1. [没人比周柯宇更懂礼物](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E4%BA%BA%E6%AF%94%E5%91%A8%E6%9F%AF%E5%AE%87%E6%9B%B4%E6%87%82%E7%A4%BC%E7%89%A9%23) `535.5K 🔥`
1. [建议培养中小学副班主任](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%9F%B9%E5%85%BB%E4%B8%AD%E5%B0%8F%E5%AD%A6%E5%89%AF%E7%8F%AD%E4%B8%BB%E4%BB%BB%23) `229.3K 🔥`
1. [一顿饭付了63张五块钱](https://s.weibo.com/weibo?q=%23%E4%B8%80%E9%A1%BF%E9%A5%AD%E4%BB%98%E4%BA%8663%E5%BC%A0%E4%BA%94%E5%9D%97%E9%92%B1%23) `201.6K 🔥`
1. [北京一独居女子去世房产归国家](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E4%B8%80%E7%8B%AC%E5%B1%85%E5%A5%B3%E5%AD%90%E5%8E%BB%E4%B8%96%E6%88%BF%E4%BA%A7%E5%BD%92%E5%9B%BD%E5%AE%B6%23) `201.2K 🔥`
1. [香港自杀女警遗书中提到工作压力](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E8%87%AA%E6%9D%80%E5%A5%B3%E8%AD%A6%E9%81%97%E4%B9%A6%E4%B8%AD%E6%8F%90%E5%88%B0%E5%B7%A5%E4%BD%9C%E5%8E%8B%E5%8A%9B%23) `200.8K 🔥`
1. [杨洋不让江山复工 (Yang Yang won’t let Jiangshan resume work)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E4%B8%8D%E8%AE%A9%E6%B1%9F%E5%B1%B1%E5%A4%8D%E5%B7%A5%23) `200.3K 🔥`
1. [星痕退役](https://s.weibo.com/weibo?q=%23%E6%98%9F%E7%97%95%E9%80%80%E5%BD%B9%23) `198.2K 🔥`
1. [华策 狂野时代](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E7%AD%96%20%E7%8B%82%E9%87%8E%E6%97%B6%E4%BB%A3%23) `197.2K 🔥`
1. [宇宙少女回归](https://s.weibo.com/weibo?q=%23%E5%AE%87%E5%AE%99%E5%B0%91%E5%A5%B3%E5%9B%9E%E5%BD%92%23) `195.7K 🔥`
1. [徐梦桃说一个体前屈李天马就开哭 (Xu Mengtao said Li Tianma started crying when he bent forward)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E8%AF%B4%E4%B8%80%E4%B8%AA%E4%BD%93%E5%89%8D%E5%B1%88%E6%9D%8E%E5%A4%A9%E9%A9%AC%E5%B0%B1%E5%BC%80%E5%93%AD%23) `194.5K 🔥`
1. [墨宝非宝宣布离婚](https://s.weibo.com/weibo?q=%23%E5%A2%A8%E5%AE%9D%E9%9D%9E%E5%AE%9D%E5%AE%A3%E5%B8%83%E7%A6%BB%E5%A9%9A%23) `193.8K 🔥`
1. [张杰声援谢娜](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E5%A3%B0%E6%8F%B4%E8%B0%A2%E5%A8%9C%23) `193.0K 🔥`
1. [元宝骂人](https://s.weibo.com/weibo?q=%23%E5%85%83%E5%AE%9D%E9%AA%82%E4%BA%BA%23) `192.0K 🔥`
1. [钱枫近况](https://s.weibo.com/weibo?q=%23%E9%92%B1%E6%9E%AB%E8%BF%91%E5%86%B5%23) `191.6K 🔥`
1. [马尔代夫偶遇麦琳和李行亮](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%B0%94%E4%BB%A3%E5%A4%AB%E5%81%B6%E9%81%87%E9%BA%A6%E7%90%B3%E5%92%8C%E6%9D%8E%E8%A1%8C%E4%BA%AE%23) `190.9K 🔥`
1. [张杰发未成年人保护法](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E5%8F%91%E6%9C%AA%E6%88%90%E5%B9%B4%E4%BA%BA%E4%BF%9D%E6%8A%A4%E6%B3%95%23) `139.5K 🔥`
1. [不用节食就能瘦回去的方法 (How to lose weight without dieting)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E7%94%A8%E8%8A%82%E9%A3%9F%E5%B0%B1%E8%83%BD%E7%98%A6%E5%9B%9E%E5%8E%BB%E7%9A%84%E6%96%B9%E6%B3%95%23) `131.7K 🔥`
1. [逐玉 (Zhuyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `123.1K 🔥`
1. [陈飞宇打耳洞了](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%E6%89%93%E8%80%B3%E6%B4%9E%E4%BA%86%23) `122.6K 🔥`
1. [女教师因学生调皮确诊情志病](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%95%99%E5%B8%88%E5%9B%A0%E5%AD%A6%E7%94%9F%E8%B0%83%E7%9A%AE%E7%A1%AE%E8%AF%8A%E6%83%85%E5%BF%97%E7%97%85%23) `117.4K 🔥`
1. [时代少年团纪录片当季上线](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%BA%AA%E5%BD%95%E7%89%87%E5%BD%93%E5%AD%A3%E4%B8%8A%E7%BA%BF%23) `103.7K 🔥`
1. [平顶山打人夫妻最高或判10年 (Couple beaten in Pingdingshan may be jailed for up to 10 years)](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E9%A1%B6%E5%B1%B1%E6%89%93%E4%BA%BA%E5%A4%AB%E5%A6%BB%E6%9C%80%E9%AB%98%E6%88%96%E5%88%A410%E5%B9%B4%23) `81.3K 🔥`
1. [网剧宝珠 (Web drama orb)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%89%A7%E5%AE%9D%E7%8F%A0%23) `75.2K 🔥`
1. [新娘说退18万彩礼是心疼丈夫的不易 (The bride said it was difficult for her husband to withdraw the 180,000 yuan gift)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E8%AF%B4%E9%80%8018%E4%B8%87%E5%BD%A9%E7%A4%BC%E6%98%AF%E5%BF%83%E7%96%BC%E4%B8%88%E5%A4%AB%E7%9A%84%E4%B8%8D%E6%98%93%23) `70.2K 🔥`
1. [代露娃 短剧](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E9%9C%B2%E5%A8%83%20%E7%9F%AD%E5%89%A7%23) `395.8K 🔥` `-22%`
1. [春节档票房 回到18年 (Spring Festival box office returns to 2018)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E6%A1%A3%E7%A5%A8%E6%88%BF%20%E5%9B%9E%E5%88%B018%E5%B9%B4%23) `200.0K 🔥` `-40%`
1. [女生患癌半年春节去世男友不离不弃 (A girl suffered from cancer and passed away during the Spring Festival half a year ago. Her boyfriend never left her.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E6%82%A3%E7%99%8C%E5%8D%8A%E5%B9%B4%E6%98%A5%E8%8A%82%E5%8E%BB%E4%B8%96%E7%94%B7%E5%8F%8B%E4%B8%8D%E7%A6%BB%E4%B8%8D%E5%BC%83%23) `199.9K 🔥` `-73%`
1. [韩女子用ChatGPT策划连环杀人案](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%A5%B3%E5%AD%90%E7%94%A8ChatGPT%E7%AD%96%E5%88%92%E8%BF%9E%E7%8E%AF%E6%9D%80%E4%BA%BA%E6%A1%88%23) `140.7K 🔥` `-73%`
1. [多少滞留三亚的人被自己穷笑了](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%B0%91%E6%BB%9E%E7%95%99%E4%B8%89%E4%BA%9A%E7%9A%84%E4%BA%BA%E8%A2%AB%E8%87%AA%E5%B7%B1%E7%A9%B7%E7%AC%91%E4%BA%86%23) `138.0K 🔥` `-74%`
1. [谢娜恳请不要将镜头对准孩子](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%81%B3%E8%AF%B7%E4%B8%8D%E8%A6%81%E5%B0%86%E9%95%9C%E5%A4%B4%E5%AF%B9%E5%87%86%E5%AD%A9%E5%AD%90%23) `131.6K 🔥` `-31%`
1. [离职后发现了不同人的时钟 (After I left my job, I discovered different people’s clocks.)](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E8%81%8C%E5%90%8E%E5%8F%91%E7%8E%B0%E4%BA%86%E4%B8%8D%E5%90%8C%E4%BA%BA%E7%9A%84%E6%97%B6%E9%92%9F%23) `126.9K 🔥` `-39%`
1. [网友新选的天涯四美](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%96%B0%E9%80%89%E7%9A%84%E5%A4%A9%E6%B6%AF%E5%9B%9B%E7%BE%8E%23) `113.8K 🔥` `-36%`
1. [不要低估两片紫菜的威力](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E4%BD%8E%E4%BC%B0%E4%B8%A4%E7%89%87%E7%B4%AB%E8%8F%9C%E7%9A%84%E5%A8%81%E5%8A%9B%23) `102.0K 🔥` `-50%`
1. [王安宇民及民以下身份的绝对好人 (Wang Anyumin and below are absolutely good people.)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E6%B0%91%E5%8F%8A%E6%B0%91%E4%BB%A5%E4%B8%8B%E8%BA%AB%E4%BB%BD%E7%9A%84%E7%BB%9D%E5%AF%B9%E5%A5%BD%E4%BA%BA%23) `92.6K 🔥` `-30%`
1. [广元大年初三失联男子已去世](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%85%83%E5%A4%A7%E5%B9%B4%E5%88%9D%E4%B8%89%E5%A4%B1%E8%81%94%E7%94%B7%E5%AD%90%E5%B7%B2%E5%8E%BB%E4%B8%96%23) `90.3K 🔥` `-56%`
1. [高市早苗涉嫌违规](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E6%B6%89%E5%AB%8C%E8%BF%9D%E8%A7%84%23) `81.8K 🔥` `-54%`

Updated at 2026-02-25 20:00:44

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
