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

1. [剑来 魔改 (Jian Lai Mo Gai)](https://s.weibo.com/weibo?q=%23%E5%89%91%E6%9D%A5%20%E9%AD%94%E6%94%B9%23) `320.4K 🔥` `NEW`
1. [高速堵车大哥在路边架锅卖炒粉](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%80%9F%E5%A0%B5%E8%BD%A6%E5%A4%A7%E5%93%A5%E5%9C%A8%E8%B7%AF%E8%BE%B9%E6%9E%B6%E9%94%85%E5%8D%96%E7%82%92%E7%B2%89%23) `198.3K 🔥` `NEW`
1. [外交部回应巴拿马政府接管两座港口](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E5%9B%9E%E5%BA%94%E5%B7%B4%E6%8B%BF%E9%A9%AC%E6%94%BF%E5%BA%9C%E6%8E%A5%E7%AE%A1%E4%B8%A4%E5%BA%A7%E6%B8%AF%E5%8F%A3%23) `151.6K 🔥` `NEW`
1. [杨洋的不让江山妆造](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E7%9A%84%E4%B8%8D%E8%AE%A9%E6%B1%9F%E5%B1%B1%E5%A6%86%E9%80%A0%23) `151.6K 🔥` `NEW`
1. [宇树发布四足机器人As2](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E5%8F%91%E5%B8%83%E5%9B%9B%E8%B6%B3%E6%9C%BA%E5%99%A8%E4%BA%BAAs2%23) `150.8K 🔥` `NEW`
1. [KSG对战TTG](https://s.weibo.com/weibo?q=%23KSG%E5%AF%B9%E6%88%98TTG%23) `140.5K 🔥` `NEW`
1. [丁程鑫不叫兄弟叫宝贝](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E4%B8%8D%E5%8F%AB%E5%85%84%E5%BC%9F%E5%8F%AB%E5%AE%9D%E8%B4%9D%23) `138.7K 🔥` `NEW`
1. [黄景瑜让我刚复工就吃这么好](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E8%AE%A9%E6%88%91%E5%88%9A%E5%A4%8D%E5%B7%A5%E5%B0%B1%E5%90%83%E8%BF%99%E4%B9%88%E5%A5%BD%23) `130.3K 🔥` `NEW`
1. [女儿照顾大小便失禁的妈妈整整三年](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E7%85%A7%E9%A1%BE%E5%A4%A7%E5%B0%8F%E4%BE%BF%E5%A4%B1%E7%A6%81%E7%9A%84%E5%A6%88%E5%A6%88%E6%95%B4%E6%95%B4%E4%B8%89%E5%B9%B4%23) `120.6K 🔥` `NEW`
1. [镖人电影宇宙来了](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E7%94%B5%E5%BD%B1%E5%AE%87%E5%AE%99%E6%9D%A5%E4%BA%86%23) `115.3K 🔥` `NEW`
1. [李方慧说和谷爱凌一个时代挺好的 (Li Fanhui said it was good to be in the same era as Gu Ailing)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%96%B9%E6%85%A7%E8%AF%B4%E5%92%8C%E8%B0%B7%E7%88%B1%E5%87%8C%E4%B8%80%E4%B8%AA%E6%97%B6%E4%BB%A3%E6%8C%BA%E5%A5%BD%E7%9A%84%23) `103.3K 🔥` `NEW`
1. [腾讯天美蒙特利尔工作室关闭](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E5%A4%A9%E7%BE%8E%E8%92%99%E7%89%B9%E5%88%A9%E5%B0%94%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%85%B3%E9%97%AD%23) `101.2K 🔥` `NEW`
1. [江西一家人自驾返程出车祸1死4伤](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%A5%BF%E4%B8%80%E5%AE%B6%E4%BA%BA%E8%87%AA%E9%A9%BE%E8%BF%94%E7%A8%8B%E5%87%BA%E8%BD%A6%E7%A5%B81%E6%AD%BB4%E4%BC%A4%23) `97.3K 🔥` `NEW`
1. [张元英ins更新](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1ins%E6%9B%B4%E6%96%B0%23) `95.0K 🔥` `NEW`
1. [刘宇宁凭本事单身](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E5%87%AD%E6%9C%AC%E4%BA%8B%E5%8D%95%E8%BA%AB%23) `95.0K 🔥` `NEW`
1. [经常熬夜是在挑战甲状腺极限](https://s.weibo.com/weibo?q=%23%E7%BB%8F%E5%B8%B8%E7%86%AC%E5%A4%9C%E6%98%AF%E5%9C%A8%E6%8C%91%E6%88%98%E7%94%B2%E7%8A%B6%E8%85%BA%E6%9E%81%E9%99%90%23) `94.8K 🔥` `NEW`
1. [再也不嫌过年没年味了](https://s.weibo.com/weibo?q=%23%E5%86%8D%E4%B9%9F%E4%B8%8D%E5%AB%8C%E8%BF%87%E5%B9%B4%E6%B2%A1%E5%B9%B4%E5%91%B3%E4%BA%86%23) `84.2K 🔥` `NEW`
1. [谷爱凌U槽卫冕英媒质疑打分](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8CU%E6%A7%BD%E5%8D%AB%E5%86%95%E8%8B%B1%E5%AA%92%E8%B4%A8%E7%96%91%E6%89%93%E5%88%86%23) `792.2K 🔥` `+397%`
1. [纯真年代的爱情 男二女二戏份](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%9C%9F%E5%B9%B4%E4%BB%A3%E7%9A%84%E7%88%B1%E6%83%85%20%E7%94%B7%E4%BA%8C%E5%A5%B3%E4%BA%8C%E6%88%8F%E4%BB%BD%23) `276.8K 🔥` `+69%`
1. [地球超新鲜2](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E7%90%83%E8%B6%85%E6%96%B0%E9%B2%9C2%23) `245.5K 🔥` `+140%`
1. [开工第一天被通知放假10天 (On the first day of work, I was informed of a 10-day holiday.)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B7%A5%E7%AC%AC%E4%B8%80%E5%A4%A9%E8%A2%AB%E9%80%9A%E7%9F%A5%E6%94%BE%E5%81%8710%E5%A4%A9%23) `220.1K 🔥` `+38%`
1. [吴昕自曝录制快本三四个月还是想走](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%98%95%E8%87%AA%E6%9B%9D%E5%BD%95%E5%88%B6%E5%BF%AB%E6%9C%AC%E4%B8%89%E5%9B%9B%E4%B8%AA%E6%9C%88%E8%BF%98%E6%98%AF%E6%83%B3%E8%B5%B0%23) `196.7K 🔥` `+24%`
1. [被炸身亡男子从哪里买的烟花](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%82%B8%E8%BA%AB%E4%BA%A1%E7%94%B7%E5%AD%90%E4%BB%8E%E5%93%AA%E9%87%8C%E4%B9%B0%E7%9A%84%E7%83%9F%E8%8A%B1%23) `192.2K 🔥` `+73%`
1. [中方回应特朗普3月31日将访问中国](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE3%E6%9C%8831%E6%97%A5%E5%B0%86%E8%AE%BF%E9%97%AE%E4%B8%AD%E5%9B%BD%23) `121.8K 🔥` `+45%`
1. [王楚钦老把人往地上打](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%80%81%E6%8A%8A%E4%BA%BA%E5%BE%80%E5%9C%B0%E4%B8%8A%E6%89%93%23) `116.3K 🔥` `+45%`
1. [多款相机价格暴涨近10倍](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%AC%BE%E7%9B%B8%E6%9C%BA%E4%BB%B7%E6%A0%BC%E6%9A%B4%E6%B6%A8%E8%BF%9110%E5%80%8D%23) `1.1M 🔥`
1. [2026年新春走基层 (Go to the grassroots level in the New Year of 2026)](https://s.weibo.com/weibo?q=%232026%E5%B9%B4%E6%96%B0%E6%98%A5%E8%B5%B0%E5%9F%BA%E5%B1%82%23) `628.9K 🔥`
1. [开工新头好全都上淘宝 (It’s a good idea to start a new business and go to Taobao)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B7%A5%E6%96%B0%E5%A4%B4%E5%A5%BD%E5%85%A8%E9%83%BD%E4%B8%8A%E6%B7%98%E5%AE%9D%23) `615.6K 🔥`
1. [Prada出发图](https://s.weibo.com/weibo?q=%23Prada%E5%87%BA%E5%8F%91%E5%9B%BE%23) `582.9K 🔥`
1. [丁程鑫直播](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E7%9B%B4%E6%92%AD%23) `186.2K 🔥`
1. [93岁老人去世将千万财产赠邻居](https://s.weibo.com/weibo?q=%2393%E5%B2%81%E8%80%81%E4%BA%BA%E5%8E%BB%E4%B8%96%E5%B0%86%E5%8D%83%E4%B8%87%E8%B4%A2%E4%BA%A7%E8%B5%A0%E9%82%BB%E5%B1%85%23) `181.3K 🔥`
1. [俄乌冲突](https://s.weibo.com/weibo?q=%23%E4%BF%84%E4%B9%8C%E5%86%B2%E7%AA%81%23) `175.7K 🔥`
1. [刘强东宣布进军游艇行业 (Liu Qiangdong announces his entry into the yacht industry)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%BC%BA%E4%B8%9C%E5%AE%A3%E5%B8%83%E8%BF%9B%E5%86%9B%E6%B8%B8%E8%89%87%E8%A1%8C%E4%B8%9A%23) `171.3K 🔥`
1. [穆祉丞发的是什么](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E5%8F%91%E7%9A%84%E6%98%AF%E4%BB%80%E4%B9%88%23) `166.1K 🔥`
1. [苏翊鸣居然演过韩庚爷爷](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%B1%85%E7%84%B6%E6%BC%94%E8%BF%87%E9%9F%A9%E5%BA%9A%E7%88%B7%E7%88%B7%23) `164.6K 🔥`
1. [白鹿宋雨琦背后抱](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%AE%8B%E9%9B%A8%E7%90%A6%E8%83%8C%E5%90%8E%E6%8A%B1%23) `151.1K 🔥`
1. [史上最高分小品少爷和我 (The highest-scoring skit in history: The Young Master and Me)](https://s.weibo.com/weibo?q=%23%E5%8F%B2%E4%B8%8A%E6%9C%80%E9%AB%98%E5%88%86%E5%B0%8F%E5%93%81%E5%B0%91%E7%88%B7%E5%92%8C%E6%88%91%23) `124.0K 🔥`
1. [鞠婧祎跳了没有明天](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E8%B7%B3%E4%BA%86%E6%B2%A1%E6%9C%89%E6%98%8E%E5%A4%A9%23) `109.0K 🔥`
1. [新娘爸爸婚礼现场退还18.8万彩礼](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E7%88%B8%E7%88%B8%E5%A9%9A%E7%A4%BC%E7%8E%B0%E5%9C%BA%E9%80%80%E8%BF%9818.8%E4%B8%87%E5%BD%A9%E7%A4%BC%23) `96.1K 🔥`
1. [章子怡 游过海岸一百米](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%AD%90%E6%80%A1%20%E6%B8%B8%E8%BF%87%E6%B5%B7%E5%B2%B8%E4%B8%80%E7%99%BE%E7%B1%B3%23) `94.4K 🔥`
1. [万妮达过年胖了八斤多 (Wan Nida gained over eight pounds during the Chinese New Year)](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%A6%AE%E8%BE%BE%E8%BF%87%E5%B9%B4%E8%83%96%E4%BA%86%E5%85%AB%E6%96%A4%E5%A4%9A%23) `86.9K 🔥`
1. [正月剃头死舅舅的真相来了](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E6%9C%88%E5%89%83%E5%A4%B4%E6%AD%BB%E8%88%85%E8%88%85%E7%9A%84%E7%9C%9F%E7%9B%B8%E6%9D%A5%E4%BA%86%23) `262.6K 🔥` `-66%`
1. [男子误喝过期牛奶暴瘦53斤 (Man lost 53 pounds by accidentally drinking expired milk)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%AF%AF%E5%96%9D%E8%BF%87%E6%9C%9F%E7%89%9B%E5%A5%B6%E6%9A%B4%E7%98%A653%E6%96%A4%23) `157.7K 🔥` `-29%`
1. [小车23点59分59秒下高速收费员狂喜 (The car got off the expressway at 23:59:59 and the toll collector was ecstatic)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%BD%A623%E7%82%B959%E5%88%8659%E7%A7%92%E4%B8%8B%E9%AB%98%E9%80%9F%E6%94%B6%E8%B4%B9%E5%91%98%E7%8B%82%E5%96%9C%23) `124.3K 🔥` `-35%`
1. [李嘉格男友晒照 (Li Jiage's boyfriend posts photos)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%98%89%E6%A0%BC%E7%94%B7%E5%8F%8B%E6%99%92%E7%85%A7%23) `119.0K 🔥` `-22%`
1. [独来独往的女人没有一个是孬种](https://s.weibo.com/weibo?q=%23%E7%8B%AC%E6%9D%A5%E7%8B%AC%E5%BE%80%E7%9A%84%E5%A5%B3%E4%BA%BA%E6%B2%A1%E6%9C%89%E4%B8%80%E4%B8%AA%E6%98%AF%E5%AD%AC%E7%A7%8D%23) `104.5K 🔥` `-33%`
1. [纯真年代的爱情](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%9C%9F%E5%B9%B4%E4%BB%A3%E7%9A%84%E7%88%B1%E6%83%85%23) `93.5K 🔥` `-54%`
1. [墨西哥毒枭残忍罪行被曝光 (Brutal crimes of Mexican drug lords exposed)](https://s.weibo.com/weibo?q=%23%E5%A2%A8%E8%A5%BF%E5%93%A5%E6%AF%92%E6%9E%AD%E6%AE%8B%E5%BF%8D%E7%BD%AA%E8%A1%8C%E8%A2%AB%E6%9B%9D%E5%85%89%23) `90.6K 🔥` `-24%`
1. [王楚然丞磊 京洛再无佳人](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E4%B8%9E%E7%A3%8A%20%E4%BA%AC%E6%B4%9B%E5%86%8D%E6%97%A0%E4%BD%B3%E4%BA%BA%23) `88.8K 🔥` `-23%`

Updated at 2026-02-24 22:51:25

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
