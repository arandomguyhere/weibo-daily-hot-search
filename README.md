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

1. [双男主对打大女主 (Two male protagonists fight against the main female protagonist)](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E7%94%B7%E4%B8%BB%E5%AF%B9%E6%89%93%E5%A4%A7%E5%A5%B3%E4%B8%BB%23) `1.1M 🔥` `NEW`
1. [退钱哥刚落地墨西哥就被骗了](https://s.weibo.com/weibo?q=%23%E9%80%80%E9%92%B1%E5%93%A5%E5%88%9A%E8%90%BD%E5%9C%B0%E5%A2%A8%E8%A5%BF%E5%93%A5%E5%B0%B1%E8%A2%AB%E9%AA%97%E4%BA%86%23) `804.0K 🔥` `NEW`
1. [青春华章丝路逐光](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%98%A5%E5%8D%8E%E7%AB%A0%E4%B8%9D%E8%B7%AF%E9%80%90%E5%85%89%23) `613.0K 🔥` `NEW`
1. [高考结束的第一批受害者出现了](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E7%BB%93%E6%9D%9F%E7%9A%84%E7%AC%AC%E4%B8%80%E6%89%B9%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86%23) `539.7K 🔥` `NEW`
1. [山姆打包哥已被行拘](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E6%89%93%E5%8C%85%E5%93%A5%E5%B7%B2%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `458.2K 🔥` `NEW`
1. [整治用AI制作发布涉军虚假信息](https://s.weibo.com/weibo?q=%23%E6%95%B4%E6%B2%BB%E7%94%A8AI%E5%88%B6%E4%BD%9C%E5%8F%91%E5%B8%83%E6%B6%89%E5%86%9B%E8%99%9A%E5%81%87%E4%BF%A1%E6%81%AF%23) `416.5K 🔥` `NEW`
1. [盛世天下](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E4%B8%96%E5%A4%A9%E4%B8%8B%23) `395.1K 🔥` `NEW`
1. [王濛回应开演唱会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%9B%9E%E5%BA%94%E5%BC%80%E6%BC%94%E5%94%B1%E4%BC%9A%23) `393.9K 🔥` `NEW`
1. [新疆酸奶粽子](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%96%86%E9%85%B8%E5%A5%B6%E7%B2%BD%E5%AD%90%23) `393.5K 🔥` `NEW`
1. [工信部车展](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BF%A1%E9%83%A8%E8%BD%A6%E5%B1%95%23) `391.4K 🔥` `NEW`
1. [下沉平台对白鹿全平台告黑的反应 (Sinking Platform’s reaction to Bailu Quan Platform’s accusation)](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E6%B2%89%E5%B9%B3%E5%8F%B0%E5%AF%B9%E7%99%BD%E9%B9%BF%E5%85%A8%E5%B9%B3%E5%8F%B0%E5%91%8A%E9%BB%91%E7%9A%84%E5%8F%8D%E5%BA%94%23) `387.9K 🔥` `NEW`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `386.7K 🔥` `NEW`
1. [鹿晗脸都够小的了还嘬腮](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E8%84%B8%E9%83%BD%E5%A4%9F%E5%B0%8F%E7%9A%84%E4%BA%86%E8%BF%98%E5%98%AC%E8%85%AE%23) `384.9K 🔥` `NEW`
1. [警方通报男子领养虐待犬只致死](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E7%94%B7%E5%AD%90%E9%A2%86%E5%85%BB%E8%99%90%E5%BE%85%E7%8A%AC%E5%8F%AA%E8%87%B4%E6%AD%BB%23) `382.6K 🔥` `NEW`
1. [谢娜设置仅允许粉丝回复](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E8%AE%BE%E7%BD%AE%E4%BB%85%E5%85%81%E8%AE%B8%E7%B2%89%E4%B8%9D%E5%9B%9E%E5%A4%8D%23) `380.9K 🔥` `NEW`
1. [赵今麦晒黑了](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E6%99%92%E9%BB%91%E4%BA%86%23) `379.0K 🔥` `NEW`
1. [男孩把珠子塞进耳朵怕责怪隐瞒6年](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E6%8A%8A%E7%8F%A0%E5%AD%90%E5%A1%9E%E8%BF%9B%E8%80%B3%E6%9C%B5%E6%80%95%E8%B4%A3%E6%80%AA%E9%9A%90%E7%9E%926%E5%B9%B4%23) `376.6K 🔥` `NEW`
1. [小猫集体哈气猫妈妈以为自己被凶](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E9%9B%86%E4%BD%93%E5%93%88%E6%B0%94%E7%8C%AB%E5%A6%88%E5%A6%88%E4%BB%A5%E4%B8%BA%E8%87%AA%E5%B7%B1%E8%A2%AB%E5%87%B6%23) `372.3K 🔥` `NEW`
1. [热带鱼](https://s.weibo.com/weibo?q=%23%E7%83%AD%E5%B8%A6%E9%B1%BC%23) `369.7K 🔥` `NEW`
1. [上海一店只卖苹果最贵293元1颗](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%B8%80%E5%BA%97%E5%8F%AA%E5%8D%96%E8%8B%B9%E6%9E%9C%E6%9C%80%E8%B4%B5293%E5%85%831%E9%A2%97%23) `368.3K 🔥` `NEW`
1. [章若楠美照大更新 (Big update of Zhang Ruonan’s beautiful photos)](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E7%BE%8E%E7%85%A7%E5%A4%A7%E6%9B%B4%E6%96%B0%23) `366.7K 🔥` `NEW`
1. [LunaUltra价格](https://s.weibo.com/weibo?q=%23LunaUltra%E4%BB%B7%E6%A0%BC%23) `366.3K 🔥` `NEW`
1. [深圳高考现场女学霸凭颜值火出圈](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E9%AB%98%E8%80%83%E7%8E%B0%E5%9C%BA%E5%A5%B3%E5%AD%A6%E9%9C%B8%E5%87%AD%E9%A2%9C%E5%80%BC%E7%81%AB%E5%87%BA%E5%9C%88%23) `364.9K 🔥` `NEW`
1. [樊振东获德甲赛季最佳球员](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%8E%B7%E5%BE%B7%E7%94%B2%E8%B5%9B%E5%AD%A3%E6%9C%80%E4%BD%B3%E7%90%83%E5%91%98%23) `363.2K 🔥` `NEW`
1. [央视曝光街边免费领东西骗局](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E8%A1%97%E8%BE%B9%E5%85%8D%E8%B4%B9%E9%A2%86%E4%B8%9C%E8%A5%BF%E9%AA%97%E5%B1%80%23) `360.8K 🔥` `NEW`
1. [鹅腿阿姨说希望给同学们道个歉](https://s.weibo.com/weibo?q=%23%E9%B9%85%E8%85%BF%E9%98%BF%E5%A7%A8%E8%AF%B4%E5%B8%8C%E6%9C%9B%E7%BB%99%E5%90%8C%E5%AD%A6%E4%BB%AC%E9%81%93%E4%B8%AA%E6%AD%89%23) `348.8K 🔥` `NEW`
1. [周杰伦林俊杰合唱](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%9E%97%E4%BF%8A%E6%9D%B0%E5%90%88%E5%94%B1%23) `325.4K 🔥` `NEW`
1. [穆祉丞泡泡更新](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E6%B3%A1%E6%B3%A1%E6%9B%B4%E6%96%B0%23) `313.3K 🔥` `NEW`
1. [李羲承入驻微博](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BE%B2%E6%89%BF%E5%85%A5%E9%A9%BB%E5%BE%AE%E5%8D%9A%23) `291.8K 🔥` `NEW`
1. [官方通报女子拒乘快艇遭滋扰](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%90%E6%8B%92%E4%B9%98%E5%BF%AB%E8%89%87%E9%81%AD%E6%BB%8B%E6%89%B0%23) `261.7K 🔥` `NEW`
1. [王传君帅回早期了 (Wang Chuanjunshuai is back to the early stage)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E5%B8%85%E5%9B%9E%E6%97%A9%E6%9C%9F%E4%BA%86%23) `244.9K 🔥` `NEW`
1. [墨西哥记者称日本队有位强奸犯](https://s.weibo.com/weibo?q=%23%E5%A2%A8%E8%A5%BF%E5%93%A5%E8%AE%B0%E8%80%85%E7%A7%B0%E6%97%A5%E6%9C%AC%E9%98%9F%E6%9C%89%E4%BD%8D%E5%BC%BA%E5%A5%B8%E7%8A%AF%23) `225.4K 🔥` `NEW`
1. [影石LunaUltra和大疆怎么选](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E7%9F%B3LunaUltra%E5%92%8C%E5%A4%A7%E7%96%86%E6%80%8E%E4%B9%88%E9%80%89%23) `221.7K 🔥` `NEW`
1. [改姓名改年龄是对于公平规则的践踏](https://s.weibo.com/weibo?q=%23%E6%94%B9%E5%A7%93%E5%90%8D%E6%94%B9%E5%B9%B4%E9%BE%84%E6%98%AF%E5%AF%B9%E4%BA%8E%E5%85%AC%E5%B9%B3%E8%A7%84%E5%88%99%E7%9A%84%E8%B7%B5%E8%B8%8F%23) `220.0K 🔥` `NEW`
1. [刘宇宁也开始找龚俊了](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E4%B9%9F%E5%BC%80%E5%A7%8B%E6%89%BE%E9%BE%9A%E4%BF%8A%E4%BA%86%23) `219.5K 🔥` `NEW`
1. [北京JDG新队服](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%ACJDG%E6%96%B0%E9%98%9F%E6%9C%8D%23) `190.7K 🔥` `NEW`
1. [王橹杰戴了自己设计的手链](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%88%B4%E4%BA%86%E8%87%AA%E5%B7%B1%E8%AE%BE%E8%AE%A1%E7%9A%84%E6%89%8B%E9%93%BE%23) `184.8K 🔥` `NEW`
1. [世界杯赛程](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E8%B5%9B%E7%A8%8B%23) `184.5K 🔥` `NEW`
1. [NewJeans或将4人组回归](https://s.weibo.com/weibo?q=%23NewJeans%E6%88%96%E5%B0%864%E4%BA%BA%E7%BB%84%E5%9B%9E%E5%BD%92%23) `184.3K 🔥` `NEW`
1. [千香](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%A6%99%23) `169.2K 🔥` `NEW`
1. [白日提灯迎来了真正的宣发期 (Lantern in the Daytime has ushered in its real publicity period)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E8%BF%8E%E6%9D%A5%E4%BA%86%E7%9C%9F%E6%AD%A3%E7%9A%84%E5%AE%A3%E5%8F%91%E6%9C%9F%23) `165.3K 🔥` `NEW`
1. [谢娜演唱会被抵制的原因](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E8%A2%AB%E6%8A%B5%E5%88%B6%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `390.1K 🔥` `+21%`
1. [王鹤棣将门毒后台词听力测试](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%B0%86%E9%97%A8%E6%AF%92%E5%90%8E%E5%8F%B0%E8%AF%8D%E5%90%AC%E5%8A%9B%E6%B5%8B%E8%AF%95%23) `383.3K 🔥` `+85%`
1. [最节俭的人投胎到我家了](https://s.weibo.com/weibo?q=%23%E6%9C%80%E8%8A%82%E4%BF%AD%E7%9A%84%E4%BA%BA%E6%8A%95%E8%83%8E%E5%88%B0%E6%88%91%E5%AE%B6%E4%BA%86%23) `377.8K 🔥` `+61%`
1. [papi上京东直播发福利](https://s.weibo.com/weibo?q=%23papi%E4%B8%8A%E4%BA%AC%E4%B8%9C%E7%9B%B4%E6%92%AD%E5%8F%91%E7%A6%8F%E5%88%A9%23) `563.1K 🔥`
1. [于娜首次公开丈夫去世细节](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E5%A8%9C%E9%A6%96%E6%AC%A1%E5%85%AC%E5%BC%80%E4%B8%88%E5%A4%AB%E5%8E%BB%E4%B8%96%E7%BB%86%E8%8A%82%23) `375.5K 🔥`
1. [迪丽热巴陈飞宇 情侣手链](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%99%88%E9%A3%9E%E5%AE%87%20%E6%83%85%E4%BE%A3%E6%89%8B%E9%93%BE%23) `373.1K 🔥`
1. [白鹿凤囚凰十七集才出场](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%87%A4%E5%9B%9A%E5%87%B0%E5%8D%81%E4%B8%83%E9%9B%86%E6%89%8D%E5%87%BA%E5%9C%BA%23) `360.5K 🔥`
1. [千万别让冰箱贴毁了你的冰箱](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E5%88%AB%E8%AE%A9%E5%86%B0%E7%AE%B1%E8%B4%B4%E6%AF%81%E4%BA%86%E4%BD%A0%E7%9A%84%E5%86%B0%E7%AE%B1%23) `458.5K 🔥` `-30%`
1. [第一批高考生已出发](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E9%AB%98%E8%80%83%E7%94%9F%E5%B7%B2%E5%87%BA%E5%8F%91%23) `302.0K 🔥` `-49%`
1. [20岁黄多多状态 (20-year-old Huang Duoduo status)](https://s.weibo.com/weibo?q=%2320%E5%B2%81%E9%BB%84%E5%A4%9A%E5%A4%9A%E7%8A%B6%E6%80%81%23) `217.4K 🔥` `-32%`
1. [花旗预测金价或跌至3500美元](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E6%97%97%E9%A2%84%E6%B5%8B%E9%87%91%E4%BB%B7%E6%88%96%E8%B7%8C%E8%87%B33500%E7%BE%8E%E5%85%83%23) `167.1K 🔥` `-48%`

Updated at 2026-06-10 23:53:21

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
