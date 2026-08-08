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

1. [吴声年度演讲 (Wu Sheng's annual speech)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%A3%B0%E5%B9%B4%E5%BA%A6%E6%BC%94%E8%AE%B2%23) `868.4K 🔥` `NEW`
1. [小夜灯 性早熟](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%A4%9C%E7%81%AF%20%E6%80%A7%E6%97%A9%E7%86%9F%23) `593.6K 🔥` `NEW`
1. [微博文化交流之夜泰国站节目单](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E6%96%87%E5%8C%96%E4%BA%A4%E6%B5%81%E4%B9%8B%E5%A4%9C%E6%B3%B0%E5%9B%BD%E7%AB%99%E8%8A%82%E7%9B%AE%E5%8D%95%23) `592.4K 🔥` `NEW`
1. [欢迎来龙餐馆的票房](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E8%BF%8E%E6%9D%A5%E9%BE%99%E9%A4%90%E9%A6%86%E7%9A%84%E7%A5%A8%E6%88%BF%23) `331.5K 🔥` `NEW`
1. [王兴兴回应美国机器人禁令](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%85%B4%E5%85%B4%E5%9B%9E%E5%BA%94%E7%BE%8E%E5%9B%BD%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%A6%81%E4%BB%A4%23) `301.6K 🔥` `NEW`
1. [广东男子错把癌症当上火喝一月凉茶](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E7%94%B7%E5%AD%90%E9%94%99%E6%8A%8A%E7%99%8C%E7%97%87%E5%BD%93%E4%B8%8A%E7%81%AB%E5%96%9D%E4%B8%80%E6%9C%88%E5%87%89%E8%8C%B6%23) `301.3K 🔥` `NEW`
1. [荷兰弟大嘴巴人设崩了](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E5%BC%9F%E5%A4%A7%E5%98%B4%E5%B7%B4%E4%BA%BA%E8%AE%BE%E5%B4%A9%E4%BA%86%23) `293.2K 🔥` `NEW`
1. [朋友称佟丽娅与陈思诚是新型离婚关系](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E7%A7%B0%E4%BD%9F%E4%B8%BD%E5%A8%85%E4%B8%8E%E9%99%88%E6%80%9D%E8%AF%9A%E6%98%AF%E6%96%B0%E5%9E%8B%E7%A6%BB%E5%A9%9A%E5%85%B3%E7%B3%BB%23) `289.3K 🔥` `NEW`
1. [花开锦绣云包场](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%E4%BA%91%E5%8C%85%E5%9C%BA%23) `260.8K 🔥` `NEW`
1. [这才是好皮肤的正确打开方式](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%89%8D%E6%98%AF%E5%A5%BD%E7%9A%AE%E8%82%A4%E7%9A%84%E6%AD%A3%E7%A1%AE%E6%89%93%E5%BC%80%E6%96%B9%E5%BC%8F%23) `217.5K 🔥` `NEW`
1. [专家预判白海豚登陆前略有加强 (Experts predict that the white dolphins will strengthen slightly before landing)](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E9%A2%84%E5%88%A4%E7%99%BD%E6%B5%B7%E8%B1%9A%E7%99%BB%E9%99%86%E5%89%8D%E7%95%A5%E6%9C%89%E5%8A%A0%E5%BC%BA%23) `211.0K 🔥` `NEW`
1. [刘宇宁你要毁了陈星旭吗](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E4%BD%A0%E8%A6%81%E6%AF%81%E4%BA%86%E9%99%88%E6%98%9F%E6%97%AD%E5%90%97%23) `210.9K 🔥` `NEW`
1. [AI虚拟网红代言美瞳广告已下架](https://s.weibo.com/weibo?q=%23AI%E8%99%9A%E6%8B%9F%E7%BD%91%E7%BA%A2%E4%BB%A3%E8%A8%80%E7%BE%8E%E7%9E%B3%E5%B9%BF%E5%91%8A%E5%B7%B2%E4%B8%8B%E6%9E%B6%23) `209.8K 🔥` `NEW`
1. [欢迎来龙餐馆](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E8%BF%8E%E6%9D%A5%E9%BE%99%E9%A4%90%E9%A6%86%23) `200.3K 🔥` `NEW`
1. [MRC对战成都GG](https://s.weibo.com/weibo?q=%23MRC%E5%AF%B9%E6%88%98%E6%88%90%E9%83%BDGG%23) `188.2K 🔥` `NEW`
1. [影石LunaUltra和大Pocket4P全面对比](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E7%9F%B3LunaUltra%E5%92%8C%E5%A4%A7Pocket4P%E5%85%A8%E9%9D%A2%E5%AF%B9%E6%AF%94%23) `177.5K 🔥` `NEW`
1. [峰哥实名举报汪海林偷税漏税 (Brother Feng reported Wang Hailin’s tax evasion with his real name)](https://s.weibo.com/weibo?q=%23%E5%B3%B0%E5%93%A5%E5%AE%9E%E5%90%8D%E4%B8%BE%E6%8A%A5%E6%B1%AA%E6%B5%B7%E6%9E%97%E5%81%B7%E7%A8%8E%E6%BC%8F%E7%A8%8E%23) `3.4M 🔥` `+965%`
1. [费大厨塌房了吗](https://s.weibo.com/weibo?q=%23%E8%B4%B9%E5%A4%A7%E5%8E%A8%E5%A1%8C%E6%88%BF%E4%BA%86%E5%90%97%23) `1.2M 🔥` `+201%`
1. [披荆斩棘2026确定名单](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%982026%E7%A1%AE%E5%AE%9A%E5%90%8D%E5%8D%95%23) `624.8K 🔥` `+72%`
1. [关晓彤已到最佳赏味期 (Guan Xiaotong has reached the best period of appreciation)](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%B7%B2%E5%88%B0%E6%9C%80%E4%BD%B3%E8%B5%8F%E5%91%B3%E6%9C%9F%23) `585.6K 🔥` `+67%`
1. [T1首发调整](https://s.weibo.com/weibo?q=%23T1%E9%A6%96%E5%8F%91%E8%B0%83%E6%95%B4%23) `334.0K 🔥` `+50%`
1. [和平精英](https://s.weibo.com/weibo?q=%23%E5%92%8C%E5%B9%B3%E7%B2%BE%E8%8B%B1%23) `319.1K 🔥` `+34%`
1. [金智秀情商 (Kim Ji-soo's emotional intelligence)](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E6%83%85%E5%95%86%23) `302.0K 🔥` `+74%`
1. [驻泰使馆关于赴泰参加文体活动的提醒 (Reminder from the Embassy in Thailand about participating in cultural and sports activities in Thailand)](https://s.weibo.com/weibo?q=%23%E9%A9%BB%E6%B3%B0%E4%BD%BF%E9%A6%86%E5%85%B3%E4%BA%8E%E8%B5%B4%E6%B3%B0%E5%8F%82%E5%8A%A0%E6%96%87%E4%BD%93%E6%B4%BB%E5%8A%A8%E7%9A%84%E6%8F%90%E9%86%92%23) `211.4K 🔥` `+21%`
1. [上半年34.63亿人次出游 (3.463 billion people traveled in the first half of the year)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%8D%8A%E5%B9%B434.63%E4%BA%BF%E4%BA%BA%E6%AC%A1%E5%87%BA%E6%B8%B8%23) `872.5K 🔥`
1. [这就是跟老人的有效沟通 (This is effective communication with the elderly)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B0%B1%E6%98%AF%E8%B7%9F%E8%80%81%E4%BA%BA%E7%9A%84%E6%9C%89%E6%95%88%E6%B2%9F%E9%80%9A%23) `381.4K 🔥`
1. [张本智和说面对国乒年轻选手压力消失了 (Zhang Benzhihe said that the pressure disappeared when facing young national table tennis players.)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E8%AF%B4%E9%9D%A2%E5%AF%B9%E5%9B%BD%E4%B9%92%E5%B9%B4%E8%BD%BB%E9%80%89%E6%89%8B%E5%8E%8B%E5%8A%9B%E6%B6%88%E5%A4%B1%E4%BA%86%23) `381.0K 🔥`
1. [刘旸秒删](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%97%B8%E7%A7%92%E5%88%A0%23) `380.7K 🔥`
1. [名创优品一次性内裤 颜面尽失](https://s.weibo.com/weibo?q=%23%E5%90%8D%E5%88%9B%E4%BC%98%E5%93%81%E4%B8%80%E6%AC%A1%E6%80%A7%E5%86%85%E8%A3%A4%20%E9%A2%9C%E9%9D%A2%E5%B0%BD%E5%A4%B1%23) `379.6K 🔥`
1. [留几手希望葛夕道歉](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%87%A0%E6%89%8B%E5%B8%8C%E6%9C%9B%E8%91%9B%E5%A4%95%E9%81%93%E6%AD%89%23) `379.1K 🔥`
1. [小心这种手机壳正在偷拍你的隐私](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%BF%83%E8%BF%99%E7%A7%8D%E6%89%8B%E6%9C%BA%E5%A3%B3%E6%AD%A3%E5%9C%A8%E5%81%B7%E6%8B%8D%E4%BD%A0%E7%9A%84%E9%9A%90%E7%A7%81%23) `378.1K 🔥`
1. [金饰克价一夜涨回1300元](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E5%85%8B%E4%BB%B7%E4%B8%80%E5%A4%9C%E6%B6%A8%E5%9B%9E1300%E5%85%83%23) `377.9K 🔥`
1. [自媒体红利期只剩AI了 (Only AI is left in the self-media dividend period)](https://s.weibo.com/weibo?q=%23%E8%87%AA%E5%AA%92%E4%BD%93%E7%BA%A2%E5%88%A9%E6%9C%9F%E5%8F%AA%E5%89%A9AI%E4%BA%86%23) `368.7K 🔥`
1. [用Token还是词元事关科技话语权](https://s.weibo.com/weibo?q=%23%E7%94%A8Token%E8%BF%98%E6%98%AF%E8%AF%8D%E5%85%83%E4%BA%8B%E5%85%B3%E7%A7%91%E6%8A%80%E8%AF%9D%E8%AF%AD%E6%9D%83%23) `358.3K 🔥`
1. [傅园慧成为浙江大学老师](https://s.weibo.com/weibo?q=%23%E5%82%85%E5%9B%AD%E6%85%A7%E6%88%90%E4%B8%BA%E6%B5%99%E6%B1%9F%E5%A4%A7%E5%AD%A6%E8%80%81%E5%B8%88%23) `342.7K 🔥`
1. [富婆带资进组给自己硬加60多场吻戏 (The rich woman brought money into the group and had more than 60 kissing scenes for herself)](https://s.weibo.com/weibo?q=%23%E5%AF%8C%E5%A9%86%E5%B8%A6%E8%B5%84%E8%BF%9B%E7%BB%84%E7%BB%99%E8%87%AA%E5%B7%B1%E7%A1%AC%E5%8A%A060%E5%A4%9A%E5%9C%BA%E5%90%BB%E6%88%8F%23) `321.5K 🔥`
1. [白鹿柳智敏 蛇塑](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9F%B3%E6%99%BA%E6%95%8F%20%E8%9B%87%E5%A1%91%23) `312.0K 🔥`
1. [王楚然大一形体课越扒越有 (Wang Churan's freshman bodybuilding class got more and more interesting)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%A4%A7%E4%B8%80%E5%BD%A2%E4%BD%93%E8%AF%BE%E8%B6%8A%E6%89%92%E8%B6%8A%E6%9C%89%23) `308.3K 🔥`
1. [胃癌直博生曾向父亲借钱旅游被拒](https://s.weibo.com/weibo?q=%23%E8%83%83%E7%99%8C%E7%9B%B4%E5%8D%9A%E7%94%9F%E6%9B%BE%E5%90%91%E7%88%B6%E4%BA%B2%E5%80%9F%E9%92%B1%E6%97%85%E6%B8%B8%E8%A2%AB%E6%8B%92%23) `303.6K 🔥`
1. [BLACKPINK直播 (BLACKPINK live broadcast)](https://s.weibo.com/weibo?q=%23BLACKPINK%E7%9B%B4%E6%92%AD%23) `301.3K 🔥`
1. [日韩网红模仿中国人切西瓜 (Japanese and Korean Internet celebrities imitate Chinese people cutting watermelon)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E9%9F%A9%E7%BD%91%E7%BA%A2%E6%A8%A1%E4%BB%BF%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%88%87%E8%A5%BF%E7%93%9C%23) `291.1K 🔥`
1. [多个明星演唱会取消](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%B8%AA%E6%98%8E%E6%98%9F%E6%BC%94%E5%94%B1%E4%BC%9A%E5%8F%96%E6%B6%88%23) `209.7K 🔥`
1. [为什么现在旅游都喜欢住民宿](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%8E%B0%E5%9C%A8%E6%97%85%E6%B8%B8%E9%83%BD%E5%96%9C%E6%AC%A2%E4%BD%8F%E6%B0%91%E5%AE%BF%23) `190.7K 🔥`
1. [Jennie越素越美](https://s.weibo.com/weibo?q=%23Jennie%E8%B6%8A%E7%B4%A0%E8%B6%8A%E7%BE%8E%23) `177.4K 🔥`
1. [暑期档 撤档 (Summer schedule withdrawn)](https://s.weibo.com/weibo?q=%23%E6%9A%91%E6%9C%9F%E6%A1%A3%20%E6%92%A4%E6%A1%A3%23) `831.0K 🔥` `-42%`
1. [白海豚已闭眼](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E5%B7%B2%E9%97%AD%E7%9C%BC%23) `464.3K 🔥` `-49%`
1. [等风热吻你](https://s.weibo.com/weibo?q=%23%E7%AD%89%E9%A3%8E%E7%83%AD%E5%90%BB%E4%BD%A0%23) `378.7K 🔥` `-50%`
1. [八仙](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%23) `351.2K 🔥` `-45%`
1. [皮肤好是可以养出来的](https://s.weibo.com/weibo?q=%23%E7%9A%AE%E8%82%A4%E5%A5%BD%E6%98%AF%E5%8F%AF%E4%BB%A5%E5%85%BB%E5%87%BA%E6%9D%A5%E7%9A%84%23) `224.1K 🔥` `-23%`
1. [朴彩英给BLACKPINK准备了花和蛋糕](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%BD%A9%E8%8B%B1%E7%BB%99BLACKPINK%E5%87%86%E5%A4%87%E4%BA%86%E8%8A%B1%E5%92%8C%E8%9B%8B%E7%B3%95%23) `210.8K 🔥` `-33%`
1. [乌克兰女子死抱男友阻拦征兵办 (Ukrainian woman hugs her boyfriend to stop military recruitment)](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%8B%E5%85%B0%E5%A5%B3%E5%AD%90%E6%AD%BB%E6%8A%B1%E7%94%B7%E5%8F%8B%E9%98%BB%E6%8B%A6%E5%BE%81%E5%85%B5%E5%8A%9E%23) `178.1K 🔥` `-40%`
1. [三支一扶 天才枪手照进现实](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%20%E5%A4%A9%E6%89%8D%E6%9E%AA%E6%89%8B%E7%85%A7%E8%BF%9B%E7%8E%B0%E5%AE%9E%23) `176.5K 🔥` `-39%`

Updated at 2026-08-08 16:07:39

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
