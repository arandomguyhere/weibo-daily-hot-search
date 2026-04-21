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

1. [苹果更换CEO原因首次曝光 (Reasons for Apple changing CEO revealed for first time)](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%9B%B4%E6%8D%A2CEO%E5%8E%9F%E5%9B%A0%E9%A6%96%E6%AC%A1%E6%9B%9D%E5%85%89%23) `846.0K 🔥` `NEW`
1. [张继科说祖国荣誉高于一切](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%A7%E7%A7%91%E8%AF%B4%E7%A5%96%E5%9B%BD%E8%8D%A3%E8%AA%89%E9%AB%98%E4%BA%8E%E4%B8%80%E5%88%87%23) `578.3K 🔥` `NEW`
1. [法院干警配偶低价拍得六千万债权](https://s.weibo.com/weibo?q=%23%E6%B3%95%E9%99%A2%E5%B9%B2%E8%AD%A6%E9%85%8D%E5%81%B6%E4%BD%8E%E4%BB%B7%E6%8B%8D%E5%BE%97%E5%85%AD%E5%8D%83%E4%B8%87%E5%80%BA%E6%9D%83%23) `413.5K 🔥` `NEW`
1. [孙艺洲模仿李小冉心愿便利贴](https://s.weibo.com/weibo?q=%23%E5%AD%99%E8%89%BA%E6%B4%B2%E6%A8%A1%E4%BB%BF%E6%9D%8E%E5%B0%8F%E5%86%89%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4%23) `309.8K 🔥` `NEW`
1. [伊朗明起恢复国内航班](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%98%8E%E8%B5%B7%E6%81%A2%E5%A4%8D%E5%9B%BD%E5%86%85%E8%88%AA%E7%8F%AD%23) `283.9K 🔥` `NEW`
1. [李荣浩直播手机掉水里了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%E7%9B%B4%E6%92%AD%E6%89%8B%E6%9C%BA%E6%8E%89%E6%B0%B4%E9%87%8C%E4%BA%86%23) `281.9K 🔥` `NEW`
1. [新女团UNCHILD出道](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A5%B3%E5%9B%A2UNCHILD%E5%87%BA%E9%81%93%23) `276.5K 🔥` `NEW`
1. [机器人半马冠军出自做手机的荣耀](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%8D%8A%E9%A9%AC%E5%86%A0%E5%86%9B%E5%87%BA%E8%87%AA%E5%81%9A%E6%89%8B%E6%9C%BA%E7%9A%84%E8%8D%A3%E8%80%80%23) `275.0K 🔥` `NEW`
1. [买车到底该看什么](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E8%BD%A6%E5%88%B0%E5%BA%95%E8%AF%A5%E7%9C%8B%E4%BB%80%E4%B9%88%23) `273.6K 🔥` `NEW`
1. [卡通头像竟成天然反诈护身符](https://s.weibo.com/weibo?q=%23%E5%8D%A1%E9%80%9A%E5%A4%B4%E5%83%8F%E7%AB%9F%E6%88%90%E5%A4%A9%E7%84%B6%E5%8F%8D%E8%AF%88%E6%8A%A4%E8%BA%AB%E7%AC%A6%23) `273.1K 🔥` `NEW`
1. [美伊停火到期倒计时 (Countdown to US-Iran ceasefire expiration)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%81%9C%E7%81%AB%E5%88%B0%E6%9C%9F%E5%80%92%E8%AE%A1%E6%97%B6%23) `271.2K 🔥` `NEW`
1. [英伟达副总裁晒与樊振东合影](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%89%AF%E6%80%BB%E8%A3%81%E6%99%92%E4%B8%8E%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%90%88%E5%BD%B1%23) `270.5K 🔥` `NEW`
1. [鲁班七号新皮肤活动免费得](https://s.weibo.com/weibo?q=%23%E9%B2%81%E7%8F%AD%E4%B8%83%E5%8F%B7%E6%96%B0%E7%9A%AE%E8%82%A4%E6%B4%BB%E5%8A%A8%E5%85%8D%E8%B4%B9%E5%BE%97%23) `267.9K 🔥` `NEW`
1. [马頔为了装修到底接了多少综艺](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E4%B8%BA%E4%BA%86%E8%A3%85%E4%BF%AE%E5%88%B0%E5%BA%95%E6%8E%A5%E4%BA%86%E5%A4%9A%E5%B0%91%E7%BB%BC%E8%89%BA%23) `266.4K 🔥` `NEW`
1. [王者荣耀](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `264.5K 🔥` `NEW`
1. [蜜语纪](https://s.weibo.com/weibo?q=%23%E8%9C%9C%E8%AF%AD%E7%BA%AA%23) `263.7K 🔥` `NEW`
1. [张天爱工作室 谣言可恶可恨](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A4%A9%E7%88%B1%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E8%B0%A3%E8%A8%80%E5%8F%AF%E6%81%B6%E5%8F%AF%E6%81%A8%23) `256.6K 🔥` `NEW`
1. [业内评价白鹿](https://s.weibo.com/weibo?q=%23%E4%B8%9A%E5%86%85%E8%AF%84%E4%BB%B7%E7%99%BD%E9%B9%BF%23) `252.9K 🔥` `NEW`
1. [马嘉祺连上课都有高清直拍](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E8%BF%9E%E4%B8%8A%E8%AF%BE%E9%83%BD%E6%9C%89%E9%AB%98%E6%B8%85%E7%9B%B4%E6%8B%8D%23) `248.0K 🔥` `NEW`
1. [英语其实是一门很粗糙的语言](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E8%AF%AD%E5%85%B6%E5%AE%9E%E6%98%AF%E4%B8%80%E9%97%A8%E5%BE%88%E7%B2%97%E7%B3%99%E7%9A%84%E8%AF%AD%E8%A8%80%23) `245.7K 🔥` `NEW`
1. [李小冉已签约MCN (Li Xiaoran has signed with MCN)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%B7%B2%E7%AD%BE%E7%BA%A6MCN%23) `244.6K 🔥` `NEW`
1. [急救车绕开三甲医院将患者拉至民营医院](https://s.weibo.com/weibo?q=%23%E6%80%A5%E6%95%91%E8%BD%A6%E7%BB%95%E5%BC%80%E4%B8%89%E7%94%B2%E5%8C%BB%E9%99%A2%E5%B0%86%E6%82%A3%E8%80%85%E6%8B%89%E8%87%B3%E6%B0%91%E8%90%A5%E5%8C%BB%E9%99%A2%23) `243.0K 🔥` `NEW`
1. [黄金白银急速下跌](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%99%BD%E9%93%B6%E6%80%A5%E9%80%9F%E4%B8%8B%E8%B7%8C%23) `237.6K 🔥` `NEW`
1. [又有5个国家接入微信支付](https://s.weibo.com/weibo?q=%23%E5%8F%88%E6%9C%895%E4%B8%AA%E5%9B%BD%E5%AE%B6%E6%8E%A5%E5%85%A5%E5%BE%AE%E4%BF%A1%E6%94%AF%E4%BB%98%23) `234.5K 🔥` `NEW`
1. [林珍娜出庭](https://s.weibo.com/weibo?q=%23%E6%9E%97%E7%8F%8D%E5%A8%9C%E5%87%BA%E5%BA%AD%23) `232.4K 🔥` `NEW`
1. [母亲灌奶掌掴婴儿已被采取强制措施](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E7%81%8C%E5%A5%B6%E6%8E%8C%E6%8E%B4%E5%A9%B4%E5%84%BF%E5%B7%B2%E8%A2%AB%E9%87%87%E5%8F%96%E5%BC%BA%E5%88%B6%E6%8E%AA%E6%96%BD%23) `1.1M 🔥` `+479%`
1. [大牛股一字跌停](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%89%9B%E8%82%A1%E4%B8%80%E5%AD%97%E8%B7%8C%E5%81%9C%23) `397.7K 🔥` `+30%`
1. [第五届全民阅读大会](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E5%B1%8A%E5%85%A8%E6%B0%91%E9%98%85%E8%AF%BB%E5%A4%A7%E4%BC%9A%23) `638.1K 🔥`
1. [张翰回应去移民局](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BF%B0%E5%9B%9E%E5%BA%94%E5%8E%BB%E7%A7%BB%E6%B0%91%E5%B1%80%23) `282.6K 🔥`
1. [周杰伦温州抢票](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%B8%A9%E5%B7%9E%E6%8A%A2%E7%A5%A8%23) `262.6K 🔥`
1. [杜若溪产后三个月暴减60斤 (Du Ruoxi lost 60 pounds three months after giving birth)](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E8%8B%A5%E6%BA%AA%E4%BA%A7%E5%90%8E%E4%B8%89%E4%B8%AA%E6%9C%88%E6%9A%B4%E5%87%8F60%E6%96%A4%23) `259.1K 🔥`
1. [女子产后回应怀孕容貌巨变 (Woman responds to postpartum appearance changes during pregnancy)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BA%A7%E5%90%8E%E5%9B%9E%E5%BA%94%E6%80%80%E5%AD%95%E5%AE%B9%E8%B2%8C%E5%B7%A8%E5%8F%98%23) `255.6K 🔥`
1. [张凌赫登上法国第一大报纸](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%99%BB%E4%B8%8A%E6%B3%95%E5%9B%BD%E7%AC%AC%E4%B8%80%E5%A4%A7%E6%8A%A5%E7%BA%B8%23) `246.5K 🔥`
1. [邱淑贞母女和工藤静香母女同框](https://s.weibo.com/weibo?q=%23%E9%82%B1%E6%B7%91%E8%B4%9E%E6%AF%8D%E5%A5%B3%E5%92%8C%E5%B7%A5%E8%97%A4%E9%9D%99%E9%A6%99%E6%AF%8D%E5%A5%B3%E5%90%8C%E6%A1%86%23) `236.6K 🔥`
1. [森马可真有一套 (Semir really has a way)](https://s.weibo.com/weibo?q=%23%E6%A3%AE%E9%A9%AC%E5%8F%AF%E7%9C%9F%E6%9C%89%E4%B8%80%E5%A5%97%23) `385.3K 🔥` `-34%`
1. [工资高但是很孤独的工作](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E8%B5%84%E9%AB%98%E4%BD%86%E6%98%AF%E5%BE%88%E5%AD%A4%E7%8B%AC%E7%9A%84%E5%B7%A5%E4%BD%9C%23) `373.4K 🔥` `-41%`
1. [新疆的作息时间太适合年轻人了](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%96%86%E7%9A%84%E4%BD%9C%E6%81%AF%E6%97%B6%E9%97%B4%E5%A4%AA%E9%80%82%E5%90%88%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%BA%86%23) `284.9K 🔥` `-52%`
1. [挪用1700万打赏女孩父亲已基本破产 (The father of a girl who misappropriated 17 million in rewards is basically bankrupt)](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E7%94%A81700%E4%B8%87%E6%89%93%E8%B5%8F%E5%A5%B3%E5%AD%A9%E7%88%B6%E4%BA%B2%E5%B7%B2%E5%9F%BA%E6%9C%AC%E7%A0%B4%E4%BA%A7%23) `280.9K 🔥` `-83%`
1. [父母再生7弟20岁小伙直言扛不动](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E5%86%8D%E7%94%9F7%E5%BC%9F20%E5%B2%81%E5%B0%8F%E4%BC%99%E7%9B%B4%E8%A8%80%E6%89%9B%E4%B8%8D%E5%8A%A8%23) `278.7K 🔥` `-33%`
1. [宋承炫宣布当爸](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%89%BF%E7%82%AB%E5%AE%A3%E5%B8%83%E5%BD%93%E7%88%B8%23) `277.2K 🔥` `-30%`
1. [窈窈有期 硬刚爱奇艺](https://s.weibo.com/weibo?q=%23%E7%AA%88%E7%AA%88%E6%9C%89%E6%9C%9F%20%E7%A1%AC%E5%88%9A%E7%88%B1%E5%A5%87%E8%89%BA%23) `269.4K 🔥` `-23%`
1. [孙俪儿子画个妆直接能演甄嬛了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E5%84%BF%E5%AD%90%E7%94%BB%E4%B8%AA%E5%A6%86%E7%9B%B4%E6%8E%A5%E8%83%BD%E6%BC%94%E7%94%84%E5%AC%9B%E4%BA%86%23) `261.2K 🔥` `-37%`
1. [12306这回动真格了](https://s.weibo.com/weibo?q=%2312306%E8%BF%99%E5%9B%9E%E5%8A%A8%E7%9C%9F%E6%A0%BC%E4%BA%86%23) `259.7K 🔥` `-37%`
1. [唐嫣眼神好疲惫 (Tang Yan’s eyes are so tired)](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E7%9C%BC%E7%A5%9E%E5%A5%BD%E7%96%B2%E6%83%AB%23) `254.3K 🔥` `-21%`
1. [国内油价2026年首次下调 (Domestic oil prices will be lowered for the first time in 2026)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%86%85%E6%B2%B9%E4%BB%B72026%E5%B9%B4%E9%A6%96%E6%AC%A1%E4%B8%8B%E8%B0%83%23) `252.0K 🔥` `-49%`
1. [张翰就医后前往移民局 (Zhang Han went to the Immigration Bureau after seeking medical treatment)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BF%B0%E5%B0%B1%E5%8C%BB%E5%90%8E%E5%89%8D%E5%BE%80%E7%A7%BB%E6%B0%91%E5%B1%80%23) `250.5K 🔥` `-36%`
1. [路边停车欠费1.3万全额赔偿计息](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E8%BE%B9%E5%81%9C%E8%BD%A6%E6%AC%A0%E8%B4%B91.3%E4%B8%87%E5%85%A8%E9%A2%9D%E8%B5%94%E5%81%BF%E8%AE%A1%E6%81%AF%23) `249.3K 🔥` `-40%`
1. [超级地震或致日本国家崩塌 (Super earthquake may cause Japan to collapse)](https://s.weibo.com/weibo?q=%23%E8%B6%85%E7%BA%A7%E5%9C%B0%E9%9C%87%E6%88%96%E8%87%B4%E6%97%A5%E6%9C%AC%E5%9B%BD%E5%AE%B6%E5%B4%A9%E5%A1%8C%23) `240.3K 🔥` `-32%`
1. [陈伟霆看到孩子走不动路](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E7%9C%8B%E5%88%B0%E5%AD%A9%E5%AD%90%E8%B5%B0%E4%B8%8D%E5%8A%A8%E8%B7%AF%23) `239.4K 🔥` `-23%`
1. [日本女主播遇7.7级地震一秒变脸 (Japanese female anchor's face changed in one second when she was hit by a 7.7-magnitude earthquake)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A5%B3%E4%B8%BB%E6%92%AD%E9%81%877.7%E7%BA%A7%E5%9C%B0%E9%9C%87%E4%B8%80%E7%A7%92%E5%8F%98%E8%84%B8%23) `235.0K 🔥` `-45%`

Updated at 2026-04-21 18:40:25

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
