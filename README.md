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

1. [退礼服女孩道歉 (Girl takes off dress and apologizes)](https://s.weibo.com/weibo?q=%23%E9%80%80%E7%A4%BC%E6%9C%8D%E5%A5%B3%E5%AD%A9%E9%81%93%E6%AD%89%23) `1.0M 🔥` `NEW`
1. [江豚回归背后的硬核守护](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%B1%9A%E5%9B%9E%E5%BD%92%E8%83%8C%E5%90%8E%E7%9A%84%E7%A1%AC%E6%A0%B8%E5%AE%88%E6%8A%A4%23) `881.1K 🔥` `NEW`
1. [中南大学帅出圈男生已保研同济大学](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%8D%97%E5%A4%A7%E5%AD%A6%E5%B8%85%E5%87%BA%E5%9C%88%E7%94%B7%E7%94%9F%E5%B7%B2%E4%BF%9D%E7%A0%94%E5%90%8C%E6%B5%8E%E5%A4%A7%E5%AD%A6%23) `847.1K 🔥` `NEW`
1. [警方通报女孩盲道被撞事件](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%A9%E7%9B%B2%E9%81%93%E8%A2%AB%E6%92%9E%E4%BA%8B%E4%BB%B6%23) `785.6K 🔥` `NEW`
1. [奔跑吧14收视率创新高](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A714%E6%94%B6%E8%A7%86%E7%8E%87%E5%88%9B%E6%96%B0%E9%AB%98%23) `729.4K 🔥` `NEW`
1. [2人摆拍盲道被撞被采取刑事措施](https://s.weibo.com/weibo?q=%232%E4%BA%BA%E6%91%86%E6%8B%8D%E7%9B%B2%E9%81%93%E8%A2%AB%E6%92%9E%E8%A2%AB%E9%87%87%E5%8F%96%E5%88%91%E4%BA%8B%E6%8E%AA%E6%96%BD%23) `566.4K 🔥` `NEW`
1. [小鹿 九尾](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%BF%20%E4%B9%9D%E5%B0%BE%23) `525.2K 🔥` `NEW`
1. [美国记者喝北京豆汁的表情](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E8%AE%B0%E8%80%85%E5%96%9D%E5%8C%97%E4%BA%AC%E8%B1%86%E6%B1%81%E7%9A%84%E8%A1%A8%E6%83%85%23) `479.6K 🔥` `NEW`
1. [特朗普抵达美国现场画面](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%8A%B5%E8%BE%BE%E7%BE%8E%E5%9B%BD%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `478.8K 🔥` `NEW`
1. [金价](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `475.0K 🔥` `NEW`
1. [牛冠凯宣布结婚 (Niu Guankai announces marriage)](https://s.weibo.com/weibo?q=%23%E7%89%9B%E5%86%A0%E5%87%AF%E5%AE%A3%E5%B8%83%E7%BB%93%E5%A9%9A%23) `471.5K 🔥` `NEW`
1. [英伟达跌4%](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E8%B7%8C4%25%23) `470.8K 🔥` `NEW`
1. [方媛对自己的人生比较满意](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AA%9B%E5%AF%B9%E8%87%AA%E5%B7%B1%E7%9A%84%E4%BA%BA%E7%94%9F%E6%AF%94%E8%BE%83%E6%BB%A1%E6%84%8F%23) `433.1K 🔥` `NEW`
1. [洁丽雅 毛巾少爷](https://s.weibo.com/weibo?q=%23%E6%B4%81%E4%B8%BD%E9%9B%85%20%E6%AF%9B%E5%B7%BE%E5%B0%91%E7%88%B7%23) `346.1K 🔥` `NEW`
1. [热依扎疑似回应二胎](https://s.weibo.com/weibo?q=%23%E7%83%AD%E4%BE%9D%E6%89%8E%E7%96%91%E4%BC%BC%E5%9B%9E%E5%BA%94%E4%BA%8C%E8%83%8E%23) `256.5K 🔥` `NEW`
1. [算力网要来了](https://s.weibo.com/weibo?q=%23%E7%AE%97%E5%8A%9B%E7%BD%91%E8%A6%81%E6%9D%A5%E4%BA%86%23) `255.4K 🔥` `NEW`
1. [微信捐赠第一行代码](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E6%8D%90%E8%B5%A0%E7%AC%AC%E4%B8%80%E8%A1%8C%E4%BB%A3%E7%A0%81%23) `254.1K 🔥` `NEW`
1. [中山大学一副院长被举报学术不端](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%B1%B1%E5%A4%A7%E5%AD%A6%E4%B8%80%E5%89%AF%E9%99%A2%E9%95%BF%E8%A2%AB%E4%B8%BE%E6%8A%A5%E5%AD%A6%E6%9C%AF%E4%B8%8D%E7%AB%AF%23) `252.2K 🔥` `NEW`
1. [薛之谦也被盲道摆拍骗了](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E4%B9%9F%E8%A2%AB%E7%9B%B2%E9%81%93%E6%91%86%E6%8B%8D%E9%AA%97%E4%BA%86%23) `251.2K 🔥` `NEW`
1. [女孩盲道被撞系摆拍](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E7%9B%B2%E9%81%93%E8%A2%AB%E6%92%9E%E7%B3%BB%E6%91%86%E6%8B%8D%23) `248.3K 🔥` `NEW`
1. [40岁男子投80万演唐僧只赚回10万 (40-year-old man invested 800,000 yuan to play Tang Monk and only earned 100,000 yuan back)](https://s.weibo.com/weibo?q=%2340%E5%B2%81%E7%94%B7%E5%AD%90%E6%8A%9580%E4%B8%87%E6%BC%94%E5%94%90%E5%83%A7%E5%8F%AA%E8%B5%9A%E5%9B%9E10%E4%B8%87%23) `245.9K 🔥` `NEW`
1. [李庚希戛纳映后哭了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%BA%9A%E5%B8%8C%E6%88%9B%E7%BA%B3%E6%98%A0%E5%90%8E%E5%93%AD%E4%BA%86%23) `244.2K 🔥` `NEW`
1. [李冰冰戛纳红毯高定礼服](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%86%B0%E5%86%B0%E6%88%9B%E7%BA%B3%E7%BA%A2%E6%AF%AF%E9%AB%98%E5%AE%9A%E7%A4%BC%E6%9C%8D%23) `242.4K 🔥` `NEW`
1. [台密室逃脱员工扮吊死鬼身亡](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E5%AF%86%E5%AE%A4%E9%80%83%E8%84%B1%E5%91%98%E5%B7%A5%E6%89%AE%E5%90%8A%E6%AD%BB%E9%AC%BC%E8%BA%AB%E4%BA%A1%23) `240.8K 🔥` `NEW`
1. [爷爷支持打消毛巾少爷顾虑](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E6%94%AF%E6%8C%81%E6%89%93%E6%B6%88%E6%AF%9B%E5%B7%BE%E5%B0%91%E7%88%B7%E9%A1%BE%E8%99%91%23) `238.8K 🔥` `NEW`
1. [女孩退礼服事件合唱团已报案](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E9%80%80%E7%A4%BC%E6%9C%8D%E4%BA%8B%E4%BB%B6%E5%90%88%E5%94%B1%E5%9B%A2%E5%B7%B2%E6%8A%A5%E6%A1%88%23) `237.3K 🔥` `NEW`
1. [马刺vs森林狼](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%88%BAvs%E6%A3%AE%E6%9E%97%E7%8B%BC%23) `236.2K 🔥` `NEW`
1. [樊振东莫雷加德一起训练](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%8E%AB%E9%9B%B7%E5%8A%A0%E5%BE%B7%E4%B8%80%E8%B5%B7%E8%AE%AD%E7%BB%83%23) `232.9K 🔥` `NEW`
1. [泰国偶遇丁程鑫](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E5%81%B6%E9%81%87%E4%B8%81%E7%A8%8B%E9%91%AB%23) `231.5K 🔥` `NEW`
1. [AI复活故宫唐俑跳热舞](https://s.weibo.com/weibo?q=%23AI%E5%A4%8D%E6%B4%BB%E6%95%85%E5%AE%AB%E5%94%90%E4%BF%91%E8%B7%B3%E7%83%AD%E8%88%9E%23) `231.1K 🔥` `NEW`
1. [英国工程师3年2次飞武汉就医 (British engineer flew to Wuhan for medical treatment twice in three years)](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E5%B7%A5%E7%A8%8B%E5%B8%883%E5%B9%B42%E6%AC%A1%E9%A3%9E%E6%AD%A6%E6%B1%89%E5%B0%B1%E5%8C%BB%23) `230.1K 🔥` `NEW`
1. [给阿嬷的情书进入2026年度票房榜前十](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E8%BF%9B%E5%85%A52026%E5%B9%B4%E5%BA%A6%E7%A5%A8%E6%88%BF%E6%A6%9C%E5%89%8D%E5%8D%81%23) `228.6K 🔥` `NEW`
1. [任敏董思成10岁就认识了](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%95%8F%E8%91%A3%E6%80%9D%E6%88%9010%E5%B2%81%E5%B0%B1%E8%AE%A4%E8%AF%86%E4%BA%86%23) `225.3K 🔥` `NEW`
1. [算力价格](https://s.weibo.com/weibo?q=%23%E7%AE%97%E5%8A%9B%E4%BB%B7%E6%A0%BC%23) `224.1K 🔥` `NEW`
1. [初级会计](https://s.weibo.com/weibo?q=%23%E5%88%9D%E7%BA%A7%E4%BC%9A%E8%AE%A1%23) `222.9K 🔥` `NEW`
1. [活塞骑士抢七](https://s.weibo.com/weibo?q=%23%E6%B4%BB%E5%A1%9E%E9%AA%91%E5%A3%AB%E6%8A%A2%E4%B8%83%23) `222.7K 🔥` `NEW`
1. [全智贤戛纳路透](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%99%BA%E8%B4%A4%E6%88%9B%E7%BA%B3%E8%B7%AF%E9%80%8F%23) `221.0K 🔥` `NEW`
1. [央视驻美记者徐德智启程回国](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E9%A9%BB%E7%BE%8E%E8%AE%B0%E8%80%85%E5%BE%90%E5%BE%B7%E6%99%BA%E5%90%AF%E7%A8%8B%E5%9B%9E%E5%9B%BD%23) `218.4K 🔥` `NEW`
1. [张碧晨的同学被男明星讨论](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%A2%A7%E6%99%A8%E7%9A%84%E5%90%8C%E5%AD%A6%E8%A2%AB%E7%94%B7%E6%98%8E%E6%98%9F%E8%AE%A8%E8%AE%BA%23) `216.7K 🔥` `NEW`
1. [京东宠物节请客全国毛孩子 (JD Pet Festival invites furry children from all over the country)](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E5%AE%A0%E7%89%A9%E8%8A%82%E8%AF%B7%E5%AE%A2%E5%85%A8%E5%9B%BD%E6%AF%9B%E5%AD%A9%E5%AD%90%23) `848.2K 🔥` `+886%`
1. [何宣林要求退出师姐帮唱](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%E8%A6%81%E6%B1%82%E9%80%80%E5%87%BA%E5%B8%88%E5%A7%90%E5%B8%AE%E5%94%B1%23) `569.8K 🔥` `+80%`
1. [白鹿卢昱晓 短视频营业 (Bailu Lu Yuxiao short video business)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8D%A2%E6%98%B1%E6%99%93%20%E7%9F%AD%E8%A7%86%E9%A2%91%E8%90%A5%E4%B8%9A%23) `476.9K 🔥` `+98%`
1. [蒋毅赵樱子贴身热舞 (Jiang Yi and Zhao Yingzi dance closely)](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%AF%85%E8%B5%B5%E6%A8%B1%E5%AD%90%E8%B4%B4%E8%BA%AB%E7%83%AD%E8%88%9E%23) `250.0K 🔥` `+99%`
1. [女子从174斤减到95斤判若两人 (The woman reduced her weight from 174 pounds to 95 pounds and became a completely different person)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BB%8E174%E6%96%A4%E5%87%8F%E5%88%B095%E6%96%A4%E5%88%A4%E8%8B%A5%E4%B8%A4%E4%BA%BA%23) `247.4K 🔥` `+96%`
1. [中美元首会晤情况和共识 (Situation and consensus of the meeting between the heads of state of China and the United States)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E4%BC%9A%E6%99%A4%E6%83%85%E5%86%B5%E5%92%8C%E5%85%B1%E8%AF%86%23) `1.0M 🔥`
1. [金价跌麻了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%B7%8C%E9%BA%BB%E4%BA%86%23) `253.8K 🔥`
1. [丁程鑫泰国](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E6%B3%B0%E5%9B%BD%23) `243.7K 🔥`
1. [流量撑不起演员的底气 (Traffic cannot support actors’ confidence)](https://s.weibo.com/weibo?q=%23%E6%B5%81%E9%87%8F%E6%92%91%E4%B8%8D%E8%B5%B7%E6%BC%94%E5%91%98%E7%9A%84%E5%BA%95%E6%B0%94%23) `239.7K 🔥`
1. [新娘回应婚礼没敬酒宾客已散场](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E5%9B%9E%E5%BA%94%E5%A9%9A%E7%A4%BC%E6%B2%A1%E6%95%AC%E9%85%92%E5%AE%BE%E5%AE%A2%E5%B7%B2%E6%95%A3%E5%9C%BA%23) `227.4K 🔥`
1. [王濛打孙怡被萧蔷一把拉走](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E6%89%93%E5%AD%99%E6%80%A1%E8%A2%AB%E8%90%A7%E8%94%B7%E4%B8%80%E6%8A%8A%E6%8B%89%E8%B5%B0%23) `219.7K 🔥`
1. [金鹰奖提名预测名单](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%8F%90%E5%90%8D%E9%A2%84%E6%B5%8B%E5%90%8D%E5%8D%95%23) `234.1K 🔥` `-33%`

Updated at 2026-05-16 12:02:27

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
