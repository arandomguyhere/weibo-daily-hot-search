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

1. [亚运礼服同源九牧王星耀系列 (Asian Games dress originates from Jiu Mu Wang Xingyao series)](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E7%A4%BC%E6%9C%8D%E5%90%8C%E6%BA%90%E4%B9%9D%E7%89%A7%E7%8E%8B%E6%98%9F%E8%80%80%E7%B3%BB%E5%88%97%23) `754.8K 🔥` `NEW`
1. [中国重复使用火箭陆地回收成功](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%87%8D%E5%A4%8D%E4%BD%BF%E7%94%A8%E7%81%AB%E7%AE%AD%E9%99%86%E5%9C%B0%E5%9B%9E%E6%94%B6%E6%88%90%E5%8A%9F%23) `700.0K 🔥` `NEW`
1. [AirPods5曝光](https://s.weibo.com/weibo?q=%23AirPods5%E6%9B%9D%E5%85%89%23) `480.5K 🔥` `NEW`
1. [年会2智搜职场乱象应对指南](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E4%BC%9A2%E6%99%BA%E6%90%9C%E8%81%8C%E5%9C%BA%E4%B9%B1%E8%B1%A1%E5%BA%94%E5%AF%B9%E6%8C%87%E5%8D%97%23) `479.2K 🔥` `NEW`
1. [七夕文案](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%E6%96%87%E6%A1%88%23) `468.0K 🔥` `NEW`
1. [迪丽热巴克拉恋人剧本照进现实](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%85%8B%E6%8B%89%E6%81%8B%E4%BA%BA%E5%89%A7%E6%9C%AC%E7%85%A7%E8%BF%9B%E7%8E%B0%E5%AE%9E%23) `324.9K 🔥` `NEW`
1. [火箭 重复使用](https://s.weibo.com/weibo?q=%23%E7%81%AB%E7%AE%AD%20%E9%87%8D%E5%A4%8D%E4%BD%BF%E7%94%A8%23) `272.0K 🔥` `NEW`
1. [那英北京演唱会嘉宾](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E5%8C%97%E4%BA%AC%E6%BC%94%E5%94%B1%E4%BC%9A%E5%98%89%E5%AE%BE%23) `244.4K 🔥` `NEW`
1. [蓝盈莹上浪姐确实赢麻了](https://s.weibo.com/weibo?q=%23%E8%93%9D%E7%9B%88%E8%8E%B9%E4%B8%8A%E6%B5%AA%E5%A7%90%E7%A1%AE%E5%AE%9E%E8%B5%A2%E9%BA%BB%E4%BA%86%23) `242.9K 🔥` `NEW`
1. [丁禹兮陪看花开锦绣红温了](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E9%99%AA%E7%9C%8B%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%E7%BA%A2%E6%B8%A9%E4%BA%86%23) `231.8K 🔥` `NEW`
1. [反诈老陈宣布停更7天挣生活费 (Anti-fraud veteran Chen announced a 7-day suspension to earn living expenses)](https://s.weibo.com/weibo?q=%23%E5%8F%8D%E8%AF%88%E8%80%81%E9%99%88%E5%AE%A3%E5%B8%83%E5%81%9C%E6%9B%B47%E5%A4%A9%E6%8C%A3%E7%94%9F%E6%B4%BB%E8%B4%B9%23) `227.9K 🔥` `NEW`
1. [粉笔李梦圆离职](https://s.weibo.com/weibo?q=%23%E7%B2%89%E7%AC%94%E6%9D%8E%E6%A2%A6%E5%9C%86%E7%A6%BB%E8%81%8C%23) `184.5K 🔥` `NEW`
1. [穆祉丞自拍P了眉钉和颜文字](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E8%87%AA%E6%8B%8DP%E4%BA%86%E7%9C%89%E9%92%89%E5%92%8C%E9%A2%9C%E6%96%87%E5%AD%97%23) `175.0K 🔥` `NEW`
1. [火箭陆地回收](https://s.weibo.com/weibo?q=%23%E7%81%AB%E7%AE%AD%E9%99%86%E5%9C%B0%E5%9B%9E%E6%94%B6%23) `138.2K 🔥` `NEW`
1. [朱雀三号一子级着陆现场](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%9B%80%E4%B8%89%E5%8F%B7%E4%B8%80%E5%AD%90%E7%BA%A7%E7%9D%80%E9%99%86%E7%8E%B0%E5%9C%BA%23) `133.1K 🔥` `NEW`
1. [顶替案哥哥称看弟弟状态憔悴很心疼](https://s.weibo.com/weibo?q=%23%E9%A1%B6%E6%9B%BF%E6%A1%88%E5%93%A5%E5%93%A5%E7%A7%B0%E7%9C%8B%E5%BC%9F%E5%BC%9F%E7%8A%B6%E6%80%81%E6%86%94%E6%82%B4%E5%BE%88%E5%BF%83%E7%96%BC%23) `128.5K 🔥` `NEW`
1. [我国重复使用火箭重大突破](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E9%87%8D%E5%A4%8D%E4%BD%BF%E7%94%A8%E7%81%AB%E7%AE%AD%E9%87%8D%E5%A4%A7%E7%AA%81%E7%A0%B4%23) `124.4K 🔥` `NEW`
1. [王诗晴曾参加过再见爱人](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%AF%97%E6%99%B4%E6%9B%BE%E5%8F%82%E5%8A%A0%E8%BF%87%E5%86%8D%E8%A7%81%E7%88%B1%E4%BA%BA%23) `119.8K 🔥` `NEW`
1. [朱雀三号 (Suzaku No.3)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%9B%80%E4%B8%89%E5%8F%B7%23) `2.5M 🔥` `+254%`
1. [七夕 (Chinese Valentine's Day)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%23) `1.0M 🔥` `+183%`
1. [公积金用途又多了](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E7%94%A8%E9%80%94%E5%8F%88%E5%A4%9A%E4%BA%86%23) `805.4K 🔥` `+50%`
1. [胖东来招聘不包含性侵犯罪人员 (Fat Dong Lai recruits people who do not include sexual assault crimes)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E6%8B%9B%E8%81%98%E4%B8%8D%E5%8C%85%E5%90%AB%E6%80%A7%E4%BE%B5%E7%8A%AF%E7%BD%AA%E4%BA%BA%E5%91%98%23) `577.3K 🔥` `+64%`
1. [做事千万不要有状态洁癖](https://s.weibo.com/weibo?q=%23%E5%81%9A%E4%BA%8B%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E6%9C%89%E7%8A%B6%E6%80%81%E6%B4%81%E7%99%96%23) `478.2K 🔥` `+38%`
1. [调查组通报杭州酒局事件 (Investigation team reports incident at Hangzhou Wine Bureau)](https://s.weibo.com/weibo?q=%23%E8%B0%83%E6%9F%A5%E7%BB%84%E9%80%9A%E6%8A%A5%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E4%BA%8B%E4%BB%B6%23) `453.5K 🔥` `+54%`
1. [公积金 (provident fund)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%23) `445.0K 🔥` `+35%`
1. [章子怡套现3亿 (Zhang Ziyi cashed out 300 million)](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%AD%90%E6%80%A1%E5%A5%97%E7%8E%B03%E4%BA%BF%23) `431.0K 🔥` `+193%`
1. [女子开门杀反遭关门杀 (Woman opens door to kill but closes door to kill her)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%BC%80%E9%97%A8%E6%9D%80%E5%8F%8D%E9%81%AD%E5%85%B3%E9%97%A8%E6%9D%80%23) `421.0K 🔥` `+30%`
1. [李现回沙溪古镇了 (Li Xian returned to Shaxi Ancient Town)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E5%9B%9E%E6%B2%99%E6%BA%AA%E5%8F%A4%E9%95%87%E4%BA%86%23) `419.9K 🔥` `+31%`
1. [比野生狗奶还永久的存在出现了 (A more permanent existence than wild dog milk appears)](https://s.weibo.com/weibo?q=%23%E6%AF%94%E9%87%8E%E7%94%9F%E7%8B%97%E5%A5%B6%E8%BF%98%E6%B0%B8%E4%B9%85%E7%9A%84%E5%AD%98%E5%9C%A8%E5%87%BA%E7%8E%B0%E4%BA%86%23) `309.9K 🔥`
1. [公积金 强制缴纳 (Provident fund compulsory payment)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%20%E5%BC%BA%E5%88%B6%E7%BC%B4%E7%BA%B3%23) `301.0K 🔥`
1. [全国首例反强拆致死判正当防卫案 (The country's first case of self-defense against forced demolition resulting in death)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E9%A6%96%E4%BE%8B%E5%8F%8D%E5%BC%BA%E6%8B%86%E8%87%B4%E6%AD%BB%E5%88%A4%E6%AD%A3%E5%BD%93%E9%98%B2%E5%8D%AB%E6%A1%88%23) `280.2K 🔥`
1. [美国以色列达成一致](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%BB%A5%E8%89%B2%E5%88%97%E8%BE%BE%E6%88%90%E4%B8%80%E8%87%B4%23) `269.2K 🔥`
1. [真心喜欢一个人是什么样的 (What does it feel like to really like someone?)](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E5%BF%83%E5%96%9C%E6%AC%A2%E4%B8%80%E4%B8%AA%E4%BA%BA%E6%98%AF%E4%BB%80%E4%B9%88%E6%A0%B7%E7%9A%84%23) `269.1K 🔥`
1. [女子在洗澡间装了张凌赫窗帘](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9C%A8%E6%B4%97%E6%BE%A1%E9%97%B4%E8%A3%85%E4%BA%86%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%AA%97%E5%B8%98%23) `240.9K 🔥`
1. [朱镕基同志生平 (Comrade Zhu Rongji's Life)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E7%94%9F%E5%B9%B3%23) `269.8K 🔥` `-72%`
1. [Dior全球公关总监去世 (Dior's global PR director dies)](https://s.weibo.com/weibo?q=%23Dior%E5%85%A8%E7%90%83%E5%85%AC%E5%85%B3%E6%80%BB%E7%9B%91%E5%8E%BB%E4%B8%96%23) `243.1K 🔥` `-21%`
1. [穆祉丞像七夕报备的男友](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E5%83%8F%E4%B8%83%E5%A4%95%E6%8A%A5%E5%A4%87%E7%9A%84%E7%94%B7%E5%8F%8B%23) `241.9K 🔥` `-22%`
1. [美股 (US stocks)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%23) `241.7K 🔥` `-24%`
1. [甲状腺最怕的坏习惯 (The bad habits thyroid fears most)](https://s.weibo.com/weibo?q=%23%E7%94%B2%E7%8A%B6%E8%85%BA%E6%9C%80%E6%80%95%E7%9A%84%E5%9D%8F%E4%B9%A0%E6%83%AF%23) `240.5K 🔥` `-21%`
1. [吴泽林曾在现场情绪失控](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%B3%BD%E6%9E%97%E6%9B%BE%E5%9C%A8%E7%8E%B0%E5%9C%BA%E6%83%85%E7%BB%AA%E5%A4%B1%E6%8E%A7%23) `228.1K 🔥` `-23%`
1. [你的经济属于什么水平](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E7%BB%8F%E6%B5%8E%E5%B1%9E%E4%BA%8E%E4%BB%80%E4%B9%88%E6%B0%B4%E5%B9%B3%23) `226.3K 🔥` `-29%`
1. [白鹿包场敖瑞鹏孙珍妮师兄太稳健 (Bailu Private Ao Ruipeng and Sun Jenny are too steady)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8C%85%E5%9C%BA%E6%95%96%E7%91%9E%E9%B9%8F%E5%AD%99%E7%8F%8D%E5%A6%AE%E5%B8%88%E5%85%84%E5%A4%AA%E7%A8%B3%E5%81%A5%23) `178.2K 🔥` `-43%`
1. [保送中南大学的女孩因蓝发走红 (The girl recommended to Central South University became famous because of her blue hair)](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E9%80%81%E4%B8%AD%E5%8D%97%E5%A4%A7%E5%AD%A6%E7%9A%84%E5%A5%B3%E5%AD%A9%E5%9B%A0%E8%93%9D%E5%8F%91%E8%B5%B0%E7%BA%A2%23) `175.7K 🔥` `-42%`
1. [刘亦菲携爱宠登芭莎九月封面](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E6%90%BA%E7%88%B1%E5%AE%A0%E7%99%BB%E8%8A%AD%E8%8E%8E%E4%B9%9D%E6%9C%88%E5%B0%81%E9%9D%A2%23) `175.1K 🔥` `-42%`
1. [柯洁装弱智赢AI围棋 (Ke Jie pretends to be mentally retarded and wins AI Go)](https://s.weibo.com/weibo?q=%23%E6%9F%AF%E6%B4%81%E8%A3%85%E5%BC%B1%E6%99%BA%E8%B5%A2AI%E5%9B%B4%E6%A3%8B%23) `164.4K 🔥` `-48%`
1. [上海2026社保基数公布 (Shanghai 2026 social security base announced)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B72026%E7%A4%BE%E4%BF%9D%E5%9F%BA%E6%95%B0%E5%85%AC%E5%B8%83%23) `140.7K 🔥` `-58%`
1. [女子下车被电动车撞回车内双方发声 (Woman got off the car and was hit by an electric car and returned to the car. Both parties spoke out)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%8B%E8%BD%A6%E8%A2%AB%E7%94%B5%E5%8A%A8%E8%BD%A6%E6%92%9E%E5%9B%9E%E8%BD%A6%E5%86%85%E5%8F%8C%E6%96%B9%E5%8F%91%E5%A3%B0%23) `136.5K 🔥` `-53%`
1. [一餐馆未打码曝光多名逃单顾客照片 (A restaurant exposed photos of multiple customers who skipped orders without coding)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E9%A4%90%E9%A6%86%E6%9C%AA%E6%89%93%E7%A0%81%E6%9B%9D%E5%85%89%E5%A4%9A%E5%90%8D%E9%80%83%E5%8D%95%E9%A1%BE%E5%AE%A2%E7%85%A7%E7%89%87%23) `128.9K 🔥` `-53%`
1. [睡前代谢皮质醇流程 (Cortisol metabolism process before bed)](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E5%89%8D%E4%BB%A3%E8%B0%A2%E7%9A%AE%E8%B4%A8%E9%86%87%E6%B5%81%E7%A8%8B%23) `121.3K 🔥` `-76%`
1. [日本稀土进口量降至中国管制前2成](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%A8%80%E5%9C%9F%E8%BF%9B%E5%8F%A3%E9%87%8F%E9%99%8D%E8%87%B3%E4%B8%AD%E5%9B%BD%E7%AE%A1%E5%88%B6%E5%89%8D2%E6%88%90%23) `120.0K 🔥` `-58%`
1. [闫佩伦演技 (Yan Peilun's acting skills)](https://s.weibo.com/weibo?q=%23%E9%97%AB%E4%BD%A9%E4%BC%A6%E6%BC%94%E6%8A%80%23) `118.2K 🔥` `-60%`
1. [狗妈妈每天叼4只崽上楼吹空调](https://s.weibo.com/weibo?q=%23%E7%8B%97%E5%A6%88%E5%A6%88%E6%AF%8F%E5%A4%A9%E5%8F%BC4%E5%8F%AA%E5%B4%BD%E4%B8%8A%E6%A5%BC%E5%90%B9%E7%A9%BA%E8%B0%83%23) `117.1K 🔥` `-75%`

Updated at 2026-08-19 09:07:22

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
