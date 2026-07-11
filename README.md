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

1. [上海台风 (Shanghai Typhoon)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%8F%B0%E9%A3%8E%23) `2.5M 🔥` `NEW`
1. [夏粮产量首破3000亿斤](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E7%B2%AE%E4%BA%A7%E9%87%8F%E9%A6%96%E7%A0%B43000%E4%BA%BF%E6%96%A4%23) `2.0M 🔥` `NEW`
1. [杭州 台风](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%20%E5%8F%B0%E9%A3%8E%23) `1.3M 🔥` `NEW`
1. [孩子发烧邹市明在房间里打游戏](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E5%8F%91%E7%83%A7%E9%82%B9%E5%B8%82%E6%98%8E%E5%9C%A8%E6%88%BF%E9%97%B4%E9%87%8C%E6%89%93%E6%B8%B8%E6%88%8F%23) `596.1K 🔥` `NEW`
1. [小米澎程起售价预测](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E8%B5%B7%E5%94%AE%E4%BB%B7%E9%A2%84%E6%B5%8B%23) `363.5K 🔥` `NEW`
1. [凯恩希望哈兰德别进球](https://s.weibo.com/weibo?q=%23%E5%87%AF%E6%81%A9%E5%B8%8C%E6%9C%9B%E5%93%88%E5%85%B0%E5%BE%B7%E5%88%AB%E8%BF%9B%E7%90%83%23) `362.1K 🔥` `NEW`
1. [巴威或提前登陆](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E6%88%96%E6%8F%90%E5%89%8D%E7%99%BB%E9%99%86%23) `349.4K 🔥` `NEW`
1. [京东骑手送周星驰球鞋](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E9%AA%91%E6%89%8B%E9%80%81%E5%91%A8%E6%98%9F%E9%A9%B0%E7%90%83%E9%9E%8B%23) `341.0K 🔥` `NEW`
1. [斗破苍穹停更七周](https://s.weibo.com/weibo?q=%23%E6%96%97%E7%A0%B4%E8%8B%8D%E7%A9%B9%E5%81%9C%E6%9B%B4%E4%B8%83%E5%91%A8%23) `340.5K 🔥` `NEW`
1. [功夫女足票房已破2亿](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A5%A8%E6%88%BF%E5%B7%B2%E7%A0%B42%E4%BA%BF%23) `338.2K 🔥` `NEW`
1. [当我问我妈不结婚可以吗 (When I asked my mother if it was okay not to get married)](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E9%97%AE%E6%88%91%E5%A6%88%E4%B8%8D%E7%BB%93%E5%A9%9A%E5%8F%AF%E4%BB%A5%E5%90%97%23) `330.2K 🔥` `NEW`
1. [迪丽热巴辟谣增重8斤](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BE%9F%E8%B0%A3%E5%A2%9E%E9%87%8D8%E6%96%A4%23) `328.2K 🔥` `NEW`
1. [台风巴威或将提前登陆](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E6%88%96%E5%B0%86%E6%8F%90%E5%89%8D%E7%99%BB%E9%99%86%23) `325.9K 🔥` `NEW`
1. [雀骨热度](https://s.weibo.com/weibo?q=%23%E9%9B%80%E9%AA%A8%E7%83%AD%E5%BA%A6%23) `322.5K 🔥` `NEW`
1. [台风巴威1小时走30到50公里](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%811%E5%B0%8F%E6%97%B6%E8%B5%B030%E5%88%B050%E5%85%AC%E9%87%8C%23) `319.2K 🔥` `NEW`
1. [杭州告全体市民书](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E5%91%8A%E5%85%A8%E4%BD%93%E5%B8%82%E6%B0%91%E4%B9%A6%23) `313.3K 🔥` `NEW`
1. [迪丽热巴工作室发的live图](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%8F%91%E7%9A%84live%E5%9B%BE%23) `310.0K 🔥` `NEW`
1. [何瑞贤每一套都够本土人学好久](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%91%9E%E8%B4%A4%E6%AF%8F%E4%B8%80%E5%A5%97%E9%83%BD%E5%A4%9F%E6%9C%AC%E5%9C%9F%E4%BA%BA%E5%AD%A6%E5%A5%BD%E4%B9%85%23) `308.8K 🔥` `NEW`
1. [巴威登陆时间地点](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E7%99%BB%E9%99%86%E6%97%B6%E9%97%B4%E5%9C%B0%E7%82%B9%23) `307.9K 🔥` `NEW`
1. [突围](https://s.weibo.com/weibo?q=%23%E7%AA%81%E5%9B%B4%23) `306.1K 🔥` `NEW`
1. [无人机吊起2人神图系AI合成 (AI synthesis of two people hoisted by a drone)](https://s.weibo.com/weibo?q=%23%E6%97%A0%E4%BA%BA%E6%9C%BA%E5%90%8A%E8%B5%B72%E4%BA%BA%E7%A5%9E%E5%9B%BE%E7%B3%BBAI%E5%90%88%E6%88%90%23) `301.1K 🔥` `NEW`
1. [无限暖暖前瞻直播](https://s.weibo.com/weibo?q=%23%E6%97%A0%E9%99%90%E6%9A%96%E6%9A%96%E5%89%8D%E7%9E%BB%E7%9B%B4%E6%92%AD%23) `296.8K 🔥` `NEW`
1. [台州玉环几十米高大浪倒灌进村](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E5%B7%9E%E7%8E%89%E7%8E%AF%E5%87%A0%E5%8D%81%E7%B1%B3%E9%AB%98%E5%A4%A7%E6%B5%AA%E5%80%92%E7%81%8C%E8%BF%9B%E6%9D%91%23) `295.4K 🔥` `NEW`
1. [巴威最新位置](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E6%9C%80%E6%96%B0%E4%BD%8D%E7%BD%AE%23) `3.5M 🔥`
1. [长沙市体育局干部彭某某被停职](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E5%B8%82%E4%BD%93%E8%82%B2%E5%B1%80%E5%B9%B2%E9%83%A8%E5%BD%AD%E6%9F%90%E6%9F%90%E8%A2%AB%E5%81%9C%E8%81%8C%23) `2.0M 🔥`
1. [上海已转移3.4万人](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%B7%B2%E8%BD%AC%E7%A7%BB3.4%E4%B8%87%E4%BA%BA%23) `612.3K 🔥`
1. [张小斐演技](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%E6%BC%94%E6%8A%80%23) `364.0K 🔥` `-30%`
1. [周星驰官宣星女郎雪野](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E5%AE%98%E5%AE%A3%E6%98%9F%E5%A5%B3%E9%83%8E%E9%9B%AA%E9%87%8E%23) `360.4K 🔥` `-34%`
1. [5年不上班的真实感受](https://s.weibo.com/weibo?q=%235%E5%B9%B4%E4%B8%8D%E4%B8%8A%E7%8F%AD%E7%9A%84%E7%9C%9F%E5%AE%9E%E6%84%9F%E5%8F%97%23) `358.1K 🔥` `-23%`
1. [Jennie神图诞生了](https://s.weibo.com/weibo?q=%23Jennie%E7%A5%9E%E5%9B%BE%E8%AF%9E%E7%94%9F%E4%BA%86%23) `356.7K 🔥` `-35%`
1. [台风 (typhoon)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `354.7K 🔥` `-38%`
1. [发现中指的握笔茧消失了](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E4%B8%AD%E6%8C%87%E7%9A%84%E6%8F%A1%E7%AC%94%E8%8C%A7%E6%B6%88%E5%A4%B1%E4%BA%86%23) `353.0K 🔥` `-35%`
1. [段奥娟这么瘦了](https://s.weibo.com/weibo?q=%23%E6%AE%B5%E5%A5%A5%E5%A8%9F%E8%BF%99%E4%B9%88%E7%98%A6%E4%BA%86%23) `351.5K 🔥` `-35%`
1. [巴威 (Bawe)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%23) `348.9K 🔥` `-39%`
1. [哈兰德外网最火恶搞视频](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%A4%96%E7%BD%91%E6%9C%80%E7%81%AB%E6%81%B6%E6%90%9E%E8%A7%86%E9%A2%91%23) `346.2K 🔥` `-32%`
1. [纽约前辉瑞大楼承重柱弯曲如面条 (Load-bearing columns of former Pfizer building in New York bent like noodles)](https://s.weibo.com/weibo?q=%23%E7%BA%BD%E7%BA%A6%E5%89%8D%E8%BE%89%E7%91%9E%E5%A4%A7%E6%A5%BC%E6%89%BF%E9%87%8D%E6%9F%B1%E5%BC%AF%E6%9B%B2%E5%A6%82%E9%9D%A2%E6%9D%A1%23) `345.9K 🔥` `-35%`
1. [正常的性生活频率是多少 (What is the normal frequency of sexual intercourse?)](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E5%B8%B8%E7%9A%84%E6%80%A7%E7%94%9F%E6%B4%BB%E9%A2%91%E7%8E%87%E6%98%AF%E5%A4%9A%E5%B0%91%23) `344.1K 🔥` `-35%`
1. [孟子义干什么都不忘章若楠](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%B9%B2%E4%BB%80%E4%B9%88%E9%83%BD%E4%B8%8D%E5%BF%98%E7%AB%A0%E8%8B%A5%E6%A5%A0%23) `336.7K 🔥` `-35%`
1. [巴威登陆地点有变 (The landing location of Bawei has changed)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%A8%81%E7%99%BB%E9%99%86%E5%9C%B0%E7%82%B9%E6%9C%89%E5%8F%98%23) `335.4K 🔥` `-42%`
1. [金鹤龙给白鹿化了一整季跑男](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%A4%E9%BE%99%E7%BB%99%E7%99%BD%E9%B9%BF%E5%8C%96%E4%BA%86%E4%B8%80%E6%95%B4%E5%AD%A3%E8%B7%91%E7%94%B7%23) `333.4K 🔥` `-35%`
1. [董思成微博改名](https://s.weibo.com/weibo?q=%23%E8%91%A3%E6%80%9D%E6%88%90%E5%BE%AE%E5%8D%9A%E6%94%B9%E5%90%8D%23) `331.8K 🔥` `-38%`
1. [长沙通报体育局干部占车位事件](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E9%80%9A%E6%8A%A5%E4%BD%93%E8%82%B2%E5%B1%80%E5%B9%B2%E9%83%A8%E5%8D%A0%E8%BD%A6%E4%BD%8D%E4%BA%8B%E4%BB%B6%23) `326.9K 🔥` `-42%`
1. [穆祉丞常州演唱会](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E5%B8%B8%E5%B7%9E%E6%BC%94%E5%94%B1%E4%BC%9A%23) `323.6K 🔥` `-33%`
1. [功夫女足三观 (Three views on Kung Fu women’s football)](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E4%B8%89%E8%A7%82%23) `319.7K 🔥` `-37%`
1. [雀骨开播](https://s.weibo.com/weibo?q=%23%E9%9B%80%E9%AA%A8%E5%BC%80%E6%92%AD%23) `317.6K 🔥` `-31%`
1. [你要知道的防汛知识点 (Things you need to know about flood prevention)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E8%A6%81%E7%9F%A5%E9%81%93%E7%9A%84%E9%98%B2%E6%B1%9B%E7%9F%A5%E8%AF%86%E7%82%B9%23) `315.3K 🔥` `-67%`
1. [台风逼近温州雁荡山瀑布倒流 (Typhoon approaches Wenzhou Yandang Mountain waterfall flows backwards)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E9%80%BC%E8%BF%91%E6%B8%A9%E5%B7%9E%E9%9B%81%E8%8D%A1%E5%B1%B1%E7%80%91%E5%B8%83%E5%80%92%E6%B5%81%23) `311.9K 🔥` `-40%`
1. [曝浪姐七公队长范玮琪李小冉](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B5%AA%E5%A7%90%E4%B8%83%E5%85%AC%E9%98%9F%E9%95%BF%E8%8C%83%E7%8E%AE%E7%90%AA%E6%9D%8E%E5%B0%8F%E5%86%89%23) `303.3K 🔥` `-45%`
1. [朝鲜通报腐败犯罪](https://s.weibo.com/weibo?q=%23%E6%9C%9D%E9%B2%9C%E9%80%9A%E6%8A%A5%E8%85%90%E8%B4%A5%E7%8A%AF%E7%BD%AA%23) `302.1K 🔥` `-34%`
1. [长沙体育局彭某某被停职](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B2%99%E4%BD%93%E8%82%B2%E5%B1%80%E5%BD%AD%E6%9F%90%E6%9F%90%E8%A2%AB%E5%81%9C%E8%81%8C%23) `299.3K 🔥` `-41%`

Updated at 2026-07-11 20:07:44

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
