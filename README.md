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

1. [两个淡人谈恋爱是极其美味的 (Two light people falling in love is extremely delicious)](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%B8%AA%E6%B7%A1%E4%BA%BA%E8%B0%88%E6%81%8B%E7%88%B1%E6%98%AF%E6%9E%81%E5%85%B6%E7%BE%8E%E5%91%B3%E7%9A%84%23) `688.7K 🔥` `NEW`
1. [刘宇宁抱王玉雯林一的区别](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E6%8A%B1%E7%8E%8B%E7%8E%89%E9%9B%AF%E6%9E%97%E4%B8%80%E7%9A%84%E5%8C%BA%E5%88%AB%23) `626.6K 🔥` `NEW`
1. [亚马逊广告全流域助力伦敦合伙人](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E9%80%8A%E5%B9%BF%E5%91%8A%E5%85%A8%E6%B5%81%E5%9F%9F%E5%8A%A9%E5%8A%9B%E4%BC%A6%E6%95%A6%E5%90%88%E4%BC%99%E4%BA%BA%23) `611.9K 🔥` `NEW`
1. [金智秀哭了](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E5%93%AD%E4%BA%86%23) `276.9K 🔥` `NEW`
1. [北京地铁新款雨衣别随意丢弃](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%9C%B0%E9%93%81%E6%96%B0%E6%AC%BE%E9%9B%A8%E8%A1%A3%E5%88%AB%E9%9A%8F%E6%84%8F%E4%B8%A2%E5%BC%83%23) `252.4K 🔥` `NEW`
1. [取消调休补班90%的人就满意了](https://s.weibo.com/weibo?q=%23%E5%8F%96%E6%B6%88%E8%B0%83%E4%BC%91%E8%A1%A5%E7%8F%AD90%25%E7%9A%84%E4%BA%BA%E5%B0%B1%E6%BB%A1%E6%84%8F%E4%BA%86%23) `245.7K 🔥` `NEW`
1. [金饰克价涨至1310元](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E5%85%8B%E4%BB%B7%E6%B6%A8%E8%87%B31310%E5%85%83%23) `236.1K 🔥` `NEW`
1. [冠军的无痛登山包](https://s.weibo.com/weibo?q=%23%E5%86%A0%E5%86%9B%E7%9A%84%E6%97%A0%E7%97%9B%E7%99%BB%E5%B1%B1%E5%8C%85%23) `234.6K 🔥` `NEW`
1. [樊振东全运男单夺冠一镜到底](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%85%A8%E8%BF%90%E7%94%B7%E5%8D%95%E5%A4%BA%E5%86%A0%E4%B8%80%E9%95%9C%E5%88%B0%E5%BA%95%23) `206.1K 🔥` `NEW`
1. [杨洋 现偶](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%20%E7%8E%B0%E5%81%B6%23) `201.4K 🔥` `NEW`
1. [感觉人生分为26岁前和26岁之后 (I feel like life is divided into before and after 26 years old)](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E4%BA%BA%E7%94%9F%E5%88%86%E4%B8%BA26%E5%B2%81%E5%89%8D%E5%92%8C26%E5%B2%81%E4%B9%8B%E5%90%8E%23) `199.1K 🔥` `NEW`
1. [张予曦只吃两根菜叶的原因找到了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%88%E6%9B%A6%E5%8F%AA%E5%90%83%E4%B8%A4%E6%A0%B9%E8%8F%9C%E5%8F%B6%E7%9A%84%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `198.0K 🔥` `NEW`
1. [张泽禹一路向海剪辑争议](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%B3%BD%E7%A6%B9%E4%B8%80%E8%B7%AF%E5%90%91%E6%B5%B7%E5%89%AA%E8%BE%91%E4%BA%89%E8%AE%AE%23) `198.0K 🔥` `NEW`
1. [SNH48青春盛典](https://s.weibo.com/weibo?q=%23SNH48%E9%9D%92%E6%98%A5%E7%9B%9B%E5%85%B8%23) `164.2K 🔥` `NEW`
1. [KimiK3测试突破沙盒逃逸未实施攻击](https://s.weibo.com/weibo?q=%23KimiK3%E6%B5%8B%E8%AF%95%E7%AA%81%E7%A0%B4%E6%B2%99%E7%9B%92%E9%80%83%E9%80%B8%E6%9C%AA%E5%AE%9E%E6%96%BD%E6%94%BB%E5%87%BB%23) `159.0K 🔥` `NEW`
1. [汪海林多年前曾回应偷税漏税](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E6%B5%B7%E6%9E%97%E5%A4%9A%E5%B9%B4%E5%89%8D%E6%9B%BE%E5%9B%9E%E5%BA%94%E5%81%B7%E7%A8%8E%E6%BC%8F%E7%A8%8E%23) `157.8K 🔥` `NEW`
1. [oner替补](https://s.weibo.com/weibo?q=%23oner%E6%9B%BF%E8%A1%A5%23) `156.9K 🔥` `NEW`
1. [Marshall携二手玫瑰守住现场 (Marshall brought second-hand roses to guard the scene)](https://s.weibo.com/weibo?q=%23Marshall%E6%90%BA%E4%BA%8C%E6%89%8B%E7%8E%AB%E7%91%B0%E5%AE%88%E4%BD%8F%E7%8E%B0%E5%9C%BA%23) `934.0K 🔥` `+102%`
1. [小夜灯 性早熟](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%A4%9C%E7%81%AF%20%E6%80%A7%E6%97%A9%E7%86%9F%23) `900.5K 🔥` `+52%`
1. [MRC对战成都GG](https://s.weibo.com/weibo?q=%23MRC%E5%AF%B9%E6%88%98%E6%88%90%E9%83%BDGG%23) `258.9K 🔥` `+38%`
1. [峰哥实名举报汪海林偷税漏税 (Brother Feng reported Wang Hailin’s tax evasion with his real name)](https://s.weibo.com/weibo?q=%23%E5%B3%B0%E5%93%A5%E5%AE%9E%E5%90%8D%E4%B8%BE%E6%8A%A5%E6%B1%AA%E6%B5%B7%E6%9E%97%E5%81%B7%E7%A8%8E%E6%BC%8F%E7%A8%8E%23) `3.4M 🔥`
1. [费大厨塌房了吗](https://s.weibo.com/weibo?q=%23%E8%B4%B9%E5%A4%A7%E5%8E%A8%E5%A1%8C%E6%88%BF%E4%BA%86%E5%90%97%23) `1.1M 🔥`
1. [上半年34.63亿人次出游 (3.463 billion people traveled in the first half of the year)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%8D%8A%E5%B9%B434.63%E4%BA%BF%E4%BA%BA%E6%AC%A1%E5%87%BA%E6%B8%B8%23) `991.0K 🔥`
1. [金饰克价一夜涨回1300元 (Price of gold jewelry rose back to 1,300 yuan per gram overnight)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E5%85%8B%E4%BB%B7%E4%B8%80%E5%A4%9C%E6%B6%A8%E5%9B%9E1300%E5%85%83%23) `306.2K 🔥`
1. [朋友称佟丽娅与陈思诚是新型离婚关系](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E7%A7%B0%E4%BD%9F%E4%B8%BD%E5%A8%85%E4%B8%8E%E9%99%88%E6%80%9D%E8%AF%9A%E6%98%AF%E6%96%B0%E5%9E%8B%E7%A6%BB%E5%A9%9A%E5%85%B3%E7%B3%BB%23) `293.4K 🔥`
1. [荷兰弟大嘴巴人设崩了](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E5%BC%9F%E5%A4%A7%E5%98%B4%E5%B7%B4%E4%BA%BA%E8%AE%BE%E5%B4%A9%E4%BA%86%23) `262.9K 🔥`
1. [白鹿柳智敏 蛇塑](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9F%B3%E6%99%BA%E6%95%8F%20%E8%9B%87%E5%A1%91%23) `249.1K 🔥`
1. [这才是好皮肤的正确打开方式](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%89%8D%E6%98%AF%E5%A5%BD%E7%9A%AE%E8%82%A4%E7%9A%84%E6%AD%A3%E7%A1%AE%E6%89%93%E5%BC%80%E6%96%B9%E5%BC%8F%23) `244.4K 🔥`
1. [金智秀情商 (Kim Ji-soo's emotional intelligence)](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E6%83%85%E5%95%86%23) `244.2K 🔥`
1. [欢迎来龙餐馆](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E8%BF%8E%E6%9D%A5%E9%BE%99%E9%A4%90%E9%A6%86%23) `240.2K 🔥`
1. [为什么现在旅游都喜欢住民宿](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%8E%B0%E5%9C%A8%E6%97%85%E6%B8%B8%E9%83%BD%E5%96%9C%E6%AC%A2%E4%BD%8F%E6%B0%91%E5%AE%BF%23) `177.6K 🔥`
1. [影石LunaUltra和大Pocket4P全面对比](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E7%9F%B3LunaUltra%E5%92%8C%E5%A4%A7Pocket4P%E5%85%A8%E9%9D%A2%E5%AF%B9%E6%AF%94%23) `161.8K 🔥`
1. [暑期档 撤档 (Summer schedule withdrawn)](https://s.weibo.com/weibo?q=%23%E6%9A%91%E6%9C%9F%E6%A1%A3%20%E6%92%A4%E6%A1%A3%23) `605.6K 🔥` `-27%`
1. [白海豚已闭眼](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E5%B7%B2%E9%97%AD%E7%9C%BC%23) `319.0K 🔥` `-31%`
1. [披荆斩棘2026确定名单](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%982026%E7%A1%AE%E5%AE%9A%E5%90%8D%E5%8D%95%23) `311.1K 🔥` `-50%`
1. [名创优品一次性内裤 颜面尽失 (Miniso’s premium disposable underwear, losing face)](https://s.weibo.com/weibo?q=%23%E5%90%8D%E5%88%9B%E4%BC%98%E5%93%81%E4%B8%80%E6%AC%A1%E6%80%A7%E5%86%85%E8%A3%A4%20%E9%A2%9C%E9%9D%A2%E5%B0%BD%E5%A4%B1%23) `301.3K 🔥` `-21%`
1. [关晓彤已到最佳赏味期 (Guan Xiaotong has reached the best period of appreciation)](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%B7%B2%E5%88%B0%E6%9C%80%E4%BD%B3%E8%B5%8F%E5%91%B3%E6%9C%9F%23) `284.9K 🔥` `-51%`
1. [小心这种手机壳正在偷拍你的隐私](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%BF%83%E8%BF%99%E7%A7%8D%E6%89%8B%E6%9C%BA%E5%A3%B3%E6%AD%A3%E5%9C%A8%E5%81%B7%E6%8B%8D%E4%BD%A0%E7%9A%84%E9%9A%90%E7%A7%81%23) `278.8K 🔥` `-26%`
1. [刘旸秒删](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%97%B8%E7%A7%92%E5%88%A0%23) `275.3K 🔥` `-28%`
1. [自媒体红利期只剩AI了 (Only AI is left in the self-media dividend period)](https://s.weibo.com/weibo?q=%23%E8%87%AA%E5%AA%92%E4%BD%93%E7%BA%A2%E5%88%A9%E6%9C%9F%E5%8F%AA%E5%89%A9AI%E4%BA%86%23) `271.2K 🔥` `-26%`
1. [用Token还是词元事关科技话语权](https://s.weibo.com/weibo?q=%23%E7%94%A8Token%E8%BF%98%E6%98%AF%E8%AF%8D%E5%85%83%E4%BA%8B%E5%85%B3%E7%A7%91%E6%8A%80%E8%AF%9D%E8%AF%AD%E6%9D%83%23) `267.3K 🔥` `-25%`
1. [张本智和说面对国乒年轻选手压力消失了 (Zhang Benzhihe said that the pressure disappeared when facing young national table tennis players.)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E8%AF%B4%E9%9D%A2%E5%AF%B9%E5%9B%BD%E4%B9%92%E5%B9%B4%E8%BD%BB%E9%80%89%E6%89%8B%E5%8E%8B%E5%8A%9B%E6%B6%88%E5%A4%B1%E4%BA%86%23) `260.6K 🔥` `-32%`
1. [等风热吻你](https://s.weibo.com/weibo?q=%23%E7%AD%89%E9%A3%8E%E7%83%AD%E5%90%BB%E4%BD%A0%23) `246.2K 🔥` `-35%`
1. [八仙](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%23) `245.4K 🔥` `-30%`
1. [这就是跟老人的有效沟通 (This is effective communication with the elderly)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B0%B1%E6%98%AF%E8%B7%9F%E8%80%81%E4%BA%BA%E7%9A%84%E6%9C%89%E6%95%88%E6%B2%9F%E9%80%9A%23) `234.4K 🔥` `-39%`
1. [留几手希望葛夕道歉](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%87%A0%E6%89%8B%E5%B8%8C%E6%9C%9B%E8%91%9B%E5%A4%95%E9%81%93%E6%AD%89%23) `225.2K 🔥` `-41%`
1. [日韩网红模仿中国人切西瓜 (Japanese and Korean Internet celebrities imitate Chinese people cutting watermelon)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E9%9F%A9%E7%BD%91%E7%BA%A2%E6%A8%A1%E4%BB%BF%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%88%87%E8%A5%BF%E7%93%9C%23) `223.3K 🔥` `-23%`
1. [王楚然大一形体课越扒越有 (Wang Churan's freshman bodybuilding class got more and more interesting)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%A4%A7%E4%B8%80%E5%BD%A2%E4%BD%93%E8%AF%BE%E8%B6%8A%E6%89%92%E8%B6%8A%E6%9C%89%23) `202.8K 🔥` `-34%`
1. [胃癌直博生曾向父亲借钱旅游被拒](https://s.weibo.com/weibo?q=%23%E8%83%83%E7%99%8C%E7%9B%B4%E5%8D%9A%E7%94%9F%E6%9B%BE%E5%90%91%E7%88%B6%E4%BA%B2%E5%80%9F%E9%92%B1%E6%97%85%E6%B8%B8%E8%A2%AB%E6%8B%92%23) `189.6K 🔥` `-38%`
1. [花开锦绣云包场](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%E4%BA%91%E5%8C%85%E5%9C%BA%23) `187.7K 🔥` `-28%`
1. [驻泰使馆关于赴泰参加文体活动的提醒 (Reminder from the Embassy in Thailand about participating in cultural and sports activities in Thailand)](https://s.weibo.com/weibo?q=%23%E9%A9%BB%E6%B3%B0%E4%BD%BF%E9%A6%86%E5%85%B3%E4%BA%8E%E8%B5%B4%E6%B3%B0%E5%8F%82%E5%8A%A0%E6%96%87%E4%BD%93%E6%B4%BB%E5%8A%A8%E7%9A%84%E6%8F%90%E9%86%92%23) `162.8K 🔥` `-23%`
1. [BLACKPINK直播 (BLACKPINK live broadcast)](https://s.weibo.com/weibo?q=%23BLACKPINK%E7%9B%B4%E6%92%AD%23) `156.0K 🔥` `-48%`

Updated at 2026-08-08 16:58:16

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
