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

1. [天涯社区将正式恢复访问 (Tianya Community will officially resume access)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B6%AF%E7%A4%BE%E5%8C%BA%E5%B0%86%E6%AD%A3%E5%BC%8F%E6%81%A2%E5%A4%8D%E8%AE%BF%E9%97%AE%23) `1.8M 🔥` `NEW`
1. [6月1日起102项国家标准开始实施](https://s.weibo.com/weibo?q=%236%E6%9C%881%E6%97%A5%E8%B5%B7102%E9%A1%B9%E5%9B%BD%E5%AE%B6%E6%A0%87%E5%87%86%E5%BC%80%E5%A7%8B%E5%AE%9E%E6%96%BD%23) `761.8K 🔥` `NEW`
1. [新疆人未来一个月菜品](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%96%86%E4%BA%BA%E6%9C%AA%E6%9D%A5%E4%B8%80%E4%B8%AA%E6%9C%88%E8%8F%9C%E5%93%81%23) `488.5K 🔥` `NEW`
1. [人贩子在河南疯狂作案系谣言](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E8%B4%A9%E5%AD%90%E5%9C%A8%E6%B2%B3%E5%8D%97%E7%96%AF%E7%8B%82%E4%BD%9C%E6%A1%88%E7%B3%BB%E8%B0%A3%E8%A8%80%23) `480.9K 🔥` `NEW`
1. [王一栩给鞠婧祎推的资源](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E6%A0%A9%E7%BB%99%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%8E%A8%E7%9A%84%E8%B5%84%E6%BA%90%23) `379.4K 🔥` `NEW`
1. [樊振东3比1邱党](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C3%E6%AF%941%E9%82%B1%E5%85%9A%23) `369.1K 🔥` `NEW`
1. [张凌赫全额补偿粉丝](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%85%A8%E9%A2%9D%E8%A1%A5%E5%81%BF%E7%B2%89%E4%B8%9D%23) `298.0K 🔥` `NEW`
1. [王灿因病切了一片肺](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%81%BF%E5%9B%A0%E7%97%85%E5%88%87%E4%BA%86%E4%B8%80%E7%89%87%E8%82%BA%23) `298.0K 🔥` `NEW`
1. [二次元不是软色情遮羞布](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E6%AC%A1%E5%85%83%E4%B8%8D%E6%98%AF%E8%BD%AF%E8%89%B2%E6%83%85%E9%81%AE%E7%BE%9E%E5%B8%83%23) `295.1K 🔥` `NEW`
1. [张凌赫活动商场玻璃破碎致5擦伤](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%B4%BB%E5%8A%A8%E5%95%86%E5%9C%BA%E7%8E%BB%E7%92%83%E7%A0%B4%E7%A2%8E%E8%87%B45%E6%93%A6%E4%BC%A4%23) `294.0K 🔥` `NEW`
1. [月亮 (moon)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E4%BA%AE%23) `289.8K 🔥` `NEW`
1. [哈尔滨一秒天黑](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B0%94%E6%BB%A8%E4%B8%80%E7%A7%92%E5%A4%A9%E9%BB%91%23) `283.2K 🔥` `NEW`
1. [618囤货人DNA彻底觉醒](https://s.weibo.com/weibo?q=%23618%E5%9B%A4%E8%B4%A7%E4%BA%BADNA%E5%BD%BB%E5%BA%95%E8%A7%89%E9%86%92%23) `280.8K 🔥` `NEW`
1. [618夏日歌会](https://s.weibo.com/weibo?q=%23618%E5%A4%8F%E6%97%A5%E6%AD%8C%E4%BC%9A%23) `258.4K 🔥` `NEW`
1. [周翊然脚滑摔倒](https://s.weibo.com/weibo?q=%23%E5%91%A8%E7%BF%8A%E7%84%B6%E8%84%9A%E6%BB%91%E6%91%94%E5%80%92%23) `253.6K 🔥` `NEW`
1. [中方必将反制日菲所谓划界谈判](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%BF%85%E5%B0%86%E5%8F%8D%E5%88%B6%E6%97%A5%E8%8F%B2%E6%89%80%E8%B0%93%E5%88%92%E7%95%8C%E8%B0%88%E5%88%A4%23) `218.5K 🔥` `NEW`
1. [柬埔寨一中国地产商遇害](https://s.weibo.com/weibo?q=%23%E6%9F%AC%E5%9F%94%E5%AF%A8%E4%B8%80%E4%B8%AD%E5%9B%BD%E5%9C%B0%E4%BA%A7%E5%95%86%E9%81%87%E5%AE%B3%23) `205.6K 🔥` `NEW`
1. [主角](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `204.2K 🔥` `NEW`
1. [反派脊柱侧弯](https://s.weibo.com/weibo?q=%23%E5%8F%8D%E6%B4%BE%E8%84%8A%E6%9F%B1%E4%BE%A7%E5%BC%AF%23) `196.2K 🔥` `NEW`
1. [周翊然钓鱼摔进河里了](https://s.weibo.com/weibo?q=%23%E5%91%A8%E7%BF%8A%E7%84%B6%E9%92%93%E9%B1%BC%E6%91%94%E8%BF%9B%E6%B2%B3%E9%87%8C%E4%BA%86%23) `195.9K 🔥` `NEW`
1. [Faker奶奶被死亡威胁 (Grandma Faker was threatened with death)](https://s.weibo.com/weibo?q=%23Faker%E5%A5%B6%E5%A5%B6%E8%A2%AB%E6%AD%BB%E4%BA%A1%E5%A8%81%E8%83%81%23) `172.1K 🔥` `NEW`
1. [小英晒病例](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%8B%B1%E6%99%92%E7%97%85%E4%BE%8B%23) `165.0K 🔥` `NEW`
1. [哈尔滨下午5点一秒天黑](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B0%94%E6%BB%A8%E4%B8%8B%E5%8D%885%E7%82%B9%E4%B8%80%E7%A7%92%E5%A4%A9%E9%BB%91%23) `162.7K 🔥` `NEW`
1. [老人点杨絮烧毁20辆汽车被抓](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E7%82%B9%E6%9D%A8%E7%B5%AE%E7%83%A7%E6%AF%8120%E8%BE%86%E6%B1%BD%E8%BD%A6%E8%A2%AB%E6%8A%93%23) `151.4K 🔥` `NEW`
1. [王霏霏带浪1姐姐们打歌](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%9C%8F%E9%9C%8F%E5%B8%A6%E6%B5%AA1%E5%A7%90%E5%A7%90%E4%BB%AC%E6%89%93%E6%AD%8C%23) `142.0K 🔥` `NEW`
1. [618省钱新折学](https://s.weibo.com/weibo?q=%23618%E7%9C%81%E9%92%B1%E6%96%B0%E6%8A%98%E5%AD%A6%23) `136.4K 🔥` `NEW`
1. [樊振东vs邱党](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9Cvs%E9%82%B1%E5%85%9A%23) `935.4K 🔥` `+271%`
1. [高温上淘宝服饰空调低至5折 (Taobao clothing air conditioners are as low as 50% off in high temperatures)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E6%B8%A9%E4%B8%8A%E6%B7%98%E5%AE%9D%E6%9C%8D%E9%A5%B0%E7%A9%BA%E8%B0%83%E4%BD%8E%E8%87%B35%E6%8A%98%23) `759.5K 🔥` `+75%`
1. [过度防晒](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%BA%A6%E9%98%B2%E6%99%92%23) `533.2K 🔥` `+96%`
1. [小城良方排播](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E6%8E%92%E6%92%AD%23) `336.6K 🔥` `+47%`
1. [窦唯妹妹去谢霆锋演唱会 (Dou Wei’s sister went to Nicholas Tse’s concert)](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E5%94%AF%E5%A6%B9%E5%A6%B9%E5%8E%BB%E8%B0%A2%E9%9C%86%E9%94%8B%E6%BC%94%E5%94%B1%E4%BC%9A%23) `298.4K 🔥` `+23%`
1. [曾沛慈长文告别三公](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E9%95%BF%E6%96%87%E5%91%8A%E5%88%AB%E4%B8%89%E5%85%AC%23) `296.7K 🔥` `+22%`
1. [其实补气血真的很简单 (In fact, replenishing qi and blood is really simple)](https://s.weibo.com/weibo?q=%23%E5%85%B6%E5%AE%9E%E8%A1%A5%E6%B0%94%E8%A1%80%E7%9C%9F%E7%9A%84%E5%BE%88%E7%AE%80%E5%8D%95%23) `286.5K 🔥` `+21%`
1. [孙杨 下沉市场口碑反转](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%20%E4%B8%8B%E6%B2%89%E5%B8%82%E5%9C%BA%E5%8F%A3%E7%A2%91%E5%8F%8D%E8%BD%AC%23) `298.1K 🔥`
1. [曝短剧演员陈添祥延毕2年](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%9F%AD%E5%89%A7%E6%BC%94%E5%91%98%E9%99%88%E6%B7%BB%E7%A5%A5%E5%BB%B6%E6%AF%952%E5%B9%B4%23) `290.9K 🔥`
1. [刘诗诗下沉市场](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E4%B8%8B%E6%B2%89%E5%B8%82%E5%9C%BA%23) `289.0K 🔥`
1. [vogue红毯 疲惫](https://s.weibo.com/weibo?q=%23vogue%E7%BA%A2%E6%AF%AF%20%E7%96%B2%E6%83%AB%23) `285.2K 🔥`
1. [白百何参加儿子毕业典礼](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%99%BE%E4%BD%95%E5%8F%82%E5%8A%A0%E5%84%BF%E5%AD%90%E6%AF%95%E4%B8%9A%E5%85%B8%E7%A4%BC%23) `280.7K 🔥`
1. [央视起底娜塔莎暴力解压玩具](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E8%B5%B7%E5%BA%95%E5%A8%9C%E5%A1%94%E8%8E%8E%E6%9A%B4%E5%8A%9B%E8%A7%A3%E5%8E%8B%E7%8E%A9%E5%85%B7%23) `251.9K 🔥`
1. [白鹿求粉丝别喊了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%B1%82%E7%B2%89%E4%B8%9D%E5%88%AB%E5%96%8A%E4%BA%86%23) `216.3K 🔥`
1. [办公室阴招可以不用一定要会](https://s.weibo.com/weibo?q=%23%E5%8A%9E%E5%85%AC%E5%AE%A4%E9%98%B4%E6%8B%9B%E5%8F%AF%E4%BB%A5%E4%B8%8D%E7%94%A8%E4%B8%80%E5%AE%9A%E8%A6%81%E4%BC%9A%23) `196.2K 🔥`
1. [不读书的人生有多么的残酷](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%AF%BB%E4%B9%A6%E7%9A%84%E4%BA%BA%E7%94%9F%E6%9C%89%E5%A4%9A%E4%B9%88%E7%9A%84%E6%AE%8B%E9%85%B7%23) `176.0K 🔥`
1. [哈尔滨沙尘暴 (Harbin sandstorm)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B0%94%E6%BB%A8%E6%B2%99%E5%B0%98%E6%9A%B4%23) `525.2K 🔥` `-59%`
1. [法国高温致7人死亡中国留学生发声 (High temperature in France kills 7 Chinese students speak out)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E9%AB%98%E6%B8%A9%E8%87%B47%E4%BA%BA%E6%AD%BB%E4%BA%A1%E4%B8%AD%E5%9B%BD%E7%95%99%E5%AD%A6%E7%94%9F%E5%8F%91%E5%A3%B0%23) `297.4K 🔥` `-65%`
1. [智博会发布200余项创新成果 (Smart Expo releases more than 200 innovation results)](https://s.weibo.com/weibo?q=%23%E6%99%BA%E5%8D%9A%E4%BC%9A%E5%8F%91%E5%B8%83200%E4%BD%99%E9%A1%B9%E5%88%9B%E6%96%B0%E6%88%90%E6%9E%9C%23) `254.5K 🔥` `-65%`
1. [张峻豪泡泡更新](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B3%BB%E8%B1%AA%E6%B3%A1%E6%B3%A1%E6%9B%B4%E6%96%B0%23) `172.9K 🔥` `-28%`
1. [内娱明星眼里的杨幂 (Yang Mi in the eyes of domestic entertainment stars)](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E6%98%8E%E6%98%9F%E7%9C%BC%E9%87%8C%E7%9A%84%E6%9D%A8%E5%B9%82%23) `156.4K 🔥` `-29%`
1. [哈尔滨你怎么了](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B0%94%E6%BB%A8%E4%BD%A0%E6%80%8E%E4%B9%88%E4%BA%86%23) `144.9K 🔥` `-33%`
1. [郭晓婷只有她出场时没用运镜](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E5%A9%B7%E5%8F%AA%E6%9C%89%E5%A5%B9%E5%87%BA%E5%9C%BA%E6%97%B6%E6%B2%A1%E7%94%A8%E8%BF%90%E9%95%9C%23) `143.5K 🔥` `-36%`
1. [中际旭创股价暴涨](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%99%85%E6%97%AD%E5%88%9B%E8%82%A1%E4%BB%B7%E6%9A%B4%E6%B6%A8%23) `141.0K 🔥` `-39%`
1. [接机张月时接到了浪姐节目组电话](https://s.weibo.com/weibo?q=%23%E6%8E%A5%E6%9C%BA%E5%BC%A0%E6%9C%88%E6%97%B6%E6%8E%A5%E5%88%B0%E4%BA%86%E6%B5%AA%E5%A7%90%E8%8A%82%E7%9B%AE%E7%BB%84%E7%94%B5%E8%AF%9D%23) `139.1K 🔥` `-40%`
1. [南天门计划最新进展曝光](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%A4%A9%E9%97%A8%E8%AE%A1%E5%88%92%E6%9C%80%E6%96%B0%E8%BF%9B%E5%B1%95%E6%9B%9D%E5%85%89%23) `137.8K 🔥` `-45%`

Updated at 2026-05-31 20:47:35

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
