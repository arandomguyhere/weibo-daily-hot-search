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

1. [米粉店老板回应本地人7元游客13元 (Rice noodle shop owner responds: locals pay 7 yuan, tourists pay 13 yuan)](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E7%B2%89%E5%BA%97%E8%80%81%E6%9D%BF%E5%9B%9E%E5%BA%94%E6%9C%AC%E5%9C%B0%E4%BA%BA7%E5%85%83%E6%B8%B8%E5%AE%A213%E5%85%83%23) `1.2M 🔥` `NEW`
1. [马斯克冲击全球首位万亿美元富翁](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%86%B2%E5%87%BB%E5%85%A8%E7%90%83%E9%A6%96%E4%BD%8D%E4%B8%87%E4%BA%BF%E7%BE%8E%E5%85%83%E5%AF%8C%E7%BF%81%23) `814.7K 🔥` `NEW`
1. [小满节气里的烟火诗意](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%BB%A1%E8%8A%82%E6%B0%94%E9%87%8C%E7%9A%84%E7%83%9F%E7%81%AB%E8%AF%97%E6%84%8F%23) `755.8K 🔥` `NEW`
1. [京东请了科技圈半壁江山](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E8%AF%B7%E4%BA%86%E7%A7%91%E6%8A%80%E5%9C%88%E5%8D%8A%E5%A3%81%E6%B1%9F%E5%B1%B1%23) `755.5K 🔥` `NEW`
1. [孙杨当众让张豆豆给他道歉](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%BD%93%E4%BC%97%E8%AE%A9%E5%BC%A0%E8%B1%86%E8%B1%86%E7%BB%99%E4%BB%96%E9%81%93%E6%AD%89%23) `753.8K 🔥` `NEW`
1. [杨梅](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%A2%85%23) `748.6K 🔥` `NEW`
1. [曝铁证王玉雯换张艺凡](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%93%81%E8%AF%81%E7%8E%8B%E7%8E%89%E9%9B%AF%E6%8D%A2%E5%BC%A0%E8%89%BA%E5%87%A1%23) `706.7K 🔥` `NEW`
1. [天猫618优惠飓风来袭](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E7%8C%AB618%E4%BC%98%E6%83%A0%E9%A3%93%E9%A3%8E%E6%9D%A5%E8%A2%AD%23) `679.0K 🔥` `NEW`
1. [奶奶一天的接待量](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E5%A5%B6%E4%B8%80%E5%A4%A9%E7%9A%84%E6%8E%A5%E5%BE%85%E9%87%8F%23) `660.6K 🔥` `NEW`
1. [姜乘澜 化妆要顺应头发质感](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E4%B9%98%E6%BE%9C%20%E5%8C%96%E5%A6%86%E8%A6%81%E9%A1%BA%E5%BA%94%E5%A4%B4%E5%8F%91%E8%B4%A8%E6%84%9F%23) `592.8K 🔥` `NEW`
1. [雷霆马刺打得太惨烈了 (The Thunder Spurs played too brutally)](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E9%9C%86%E9%A9%AC%E5%88%BA%E6%89%93%E5%BE%97%E5%A4%AA%E6%83%A8%E7%83%88%E4%BA%86%23) `588.2K 🔥` `NEW`
1. [雷军晒YU7GT团队](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E6%99%92YU7GT%E5%9B%A2%E9%98%9F%23) `585.8K 🔥` `NEW`
1. [金秀贤案件反转](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%A7%80%E8%B4%A4%E6%A1%88%E4%BB%B6%E5%8F%8D%E8%BD%AC%23) `576.2K 🔥` `NEW`
1. [王玉雯的资源](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E7%9A%84%E8%B5%84%E6%BA%90%23) `570.5K 🔥` `NEW`
1. [22岁男子杀害34岁女友被判死缓](https://s.weibo.com/weibo?q=%2322%E5%B2%81%E7%94%B7%E5%AD%90%E6%9D%80%E5%AE%B334%E5%B2%81%E5%A5%B3%E5%8F%8B%E8%A2%AB%E5%88%A4%E6%AD%BB%E7%BC%93%23) `566.5K 🔥` `NEW`
1. [疑似王鹤棣捏孟子义肩膀说假的](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%8D%8F%E5%AD%9F%E5%AD%90%E4%B9%89%E8%82%A9%E8%86%80%E8%AF%B4%E5%81%87%E7%9A%84%23) `561.1K 🔥` `NEW`
1. [主角 上升期小花禁止恋爱](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%20%E4%B8%8A%E5%8D%87%E6%9C%9F%E5%B0%8F%E8%8A%B1%E7%A6%81%E6%AD%A2%E6%81%8B%E7%88%B1%23) `494.7K 🔥` `NEW`
1. [人生自取其辱十件套](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%94%9F%E8%87%AA%E5%8F%96%E5%85%B6%E8%BE%B1%E5%8D%81%E4%BB%B6%E5%A5%97%23) `459.1K 🔥` `NEW`
1. [由易烊千玺备份的精彩世界](https://s.weibo.com/weibo?q=%23%E7%94%B1%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%A4%87%E4%BB%BD%E7%9A%84%E7%B2%BE%E5%BD%A9%E4%B8%96%E7%95%8C%23) `449.3K 🔥` `NEW`
1. [宋亚轩买家秀vs卖家秀](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E4%B9%B0%E5%AE%B6%E7%A7%80vs%E5%8D%96%E5%AE%B6%E7%A7%80%23) `446.8K 🔥` `NEW`
1. [KMS打不开 (KMS cannot be opened)](https://s.weibo.com/weibo?q=%23KMS%E6%89%93%E4%B8%8D%E5%BC%80%23) `445.3K 🔥` `NEW`
1. [伊能静说张豆豆哭起来像刘诗诗](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E8%AF%B4%E5%BC%A0%E8%B1%86%E8%B1%86%E5%93%AD%E8%B5%B7%E6%9D%A5%E5%83%8F%E5%88%98%E8%AF%97%E8%AF%97%23) `442.4K 🔥` `NEW`
1. [盗版新华字典的销量竟超过正版](https://s.weibo.com/weibo?q=%23%E7%9B%97%E7%89%88%E6%96%B0%E5%8D%8E%E5%AD%97%E5%85%B8%E7%9A%84%E9%94%80%E9%87%8F%E7%AB%9F%E8%B6%85%E8%BF%87%E6%AD%A3%E7%89%88%23) `438.3K 🔥` `NEW`
1. [月经期洗澡停经 下丘脑对温度敏感](https://s.weibo.com/weibo?q=%23%E6%9C%88%E7%BB%8F%E6%9C%9F%E6%B4%97%E6%BE%A1%E5%81%9C%E7%BB%8F%20%E4%B8%8B%E4%B8%98%E8%84%91%E5%AF%B9%E6%B8%A9%E5%BA%A6%E6%95%8F%E6%84%9F%23) `435.7K 🔥` `NEW`
1. [比亚迪元PLUS代言人王楚然](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E5%85%83PLUS%E4%BB%A3%E8%A8%80%E4%BA%BA%E7%8E%8B%E6%A5%9A%E7%84%B6%23) `431.2K 🔥` `NEW`
1. [孙颖莎说世乒赛决赛打到忘我的感觉了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%AF%B4%E4%B8%96%E4%B9%92%E8%B5%9B%E5%86%B3%E8%B5%9B%E6%89%93%E5%88%B0%E5%BF%98%E6%88%91%E7%9A%84%E6%84%9F%E8%A7%89%E4%BA%86%23) `427.9K 🔥` `NEW`
1. [恋综 背调](https://s.weibo.com/weibo?q=%23%E6%81%8B%E7%BB%BC%20%E8%83%8C%E8%B0%83%23) `426.0K 🔥` `NEW`
1. [韩警方称金赛纶的声音是AI造假](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E8%AD%A6%E6%96%B9%E7%A7%B0%E9%87%91%E8%B5%9B%E7%BA%B6%E7%9A%84%E5%A3%B0%E9%9F%B3%E6%98%AFAI%E9%80%A0%E5%81%87%23) `423.8K 🔥` `NEW`
1. [袁隆平夫人祭拜前拒绝了搀扶](https://s.weibo.com/weibo?q=%23%E8%A2%81%E9%9A%86%E5%B9%B3%E5%A4%AB%E4%BA%BA%E7%A5%AD%E6%8B%9C%E5%89%8D%E6%8B%92%E7%BB%9D%E4%BA%86%E6%90%80%E6%89%B6%23) `420.2K 🔥` `NEW`
1. [特朗普回应中俄元首会晤](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%9B%9E%E5%BA%94%E4%B8%AD%E4%BF%84%E5%85%83%E9%A6%96%E4%BC%9A%E6%99%A4%23) `419.0K 🔥` `NEW`
1. [王菲唱主角 单纯喜欢张嘉益 (Faye Wong plays the leading role and simply likes Zhang Jiayi)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E5%94%B1%E4%B8%BB%E8%A7%92%20%E5%8D%95%E7%BA%AF%E5%96%9C%E6%AC%A2%E5%BC%A0%E5%98%89%E7%9B%8A%23) `418.1K 🔥` `NEW`
1. [刘亦菲超900天没组进](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E8%B6%85900%E5%A4%A9%E6%B2%A1%E7%BB%84%E8%BF%9B%23) `356.3K 🔥` `NEW`
1. [Angelababy银裙高定](https://s.weibo.com/weibo?q=%23Angelababy%E9%93%B6%E8%A3%99%E9%AB%98%E5%AE%9A%23) `356.2K 🔥` `NEW`
1. [70岁阿姨给男主播打赏336万](https://s.weibo.com/weibo?q=%2370%E5%B2%81%E9%98%BF%E5%A7%A8%E7%BB%99%E7%94%B7%E4%B8%BB%E6%92%AD%E6%89%93%E8%B5%8F336%E4%B8%87%23) `332.8K 🔥` `NEW`
1. [RAIN回应金泰熙因育儿压力大落泪](https://s.weibo.com/weibo?q=%23RAIN%E5%9B%9E%E5%BA%94%E9%87%91%E6%B3%B0%E7%86%99%E5%9B%A0%E8%82%B2%E5%84%BF%E5%8E%8B%E5%8A%9B%E5%A4%A7%E8%90%BD%E6%B3%AA%23) `329.4K 🔥` `NEW`
1. [麦迪娜姜潮7岁儿子颜值](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E8%BF%AA%E5%A8%9C%E5%A7%9C%E6%BD%AE7%E5%B2%81%E5%84%BF%E5%AD%90%E9%A2%9C%E5%80%BC%23) `253.3K 🔥` `NEW`
1. [女子在博物馆看到闺蜜了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9C%A8%E5%8D%9A%E7%89%A9%E9%A6%86%E7%9C%8B%E5%88%B0%E9%97%BA%E8%9C%9C%E4%BA%86%23) `239.6K 🔥` `NEW`
1. [江语晨吃饭用的雷霆大勺](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%E5%90%83%E9%A5%AD%E7%94%A8%E7%9A%84%E9%9B%B7%E9%9C%86%E5%A4%A7%E5%8B%BA%23) `197.7K 🔥` `NEW`
1. [面试空窗期](https://s.weibo.com/weibo?q=%23%E9%9D%A2%E8%AF%95%E7%A9%BA%E7%AA%97%E6%9C%9F%23) `191.6K 🔥` `NEW`
1. [影后视后都在追主角](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E5%90%8E%E8%A7%86%E5%90%8E%E9%83%BD%E5%9C%A8%E8%BF%BD%E4%B8%BB%E8%A7%92%23) `191.1K 🔥` `NEW`
1. [没戴珠宝的刘亦菲是最闪耀的珠宝 (Liu Yifei without jewelry is the most shining jewelry)](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%88%B4%E7%8F%A0%E5%AE%9D%E7%9A%84%E5%88%98%E4%BA%A6%E8%8F%B2%E6%98%AF%E6%9C%80%E9%97%AA%E8%80%80%E7%9A%84%E7%8F%A0%E5%AE%9D%23) `191.0K 🔥` `NEW`
1. [找工作 短期主义](https://s.weibo.com/weibo?q=%23%E6%89%BE%E5%B7%A5%E4%BD%9C%20%E7%9F%AD%E6%9C%9F%E4%B8%BB%E4%B9%89%23) `181.5K 🔥` `NEW`
1. [李静女儿纽约大学毕业](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9D%99%E5%A5%B3%E5%84%BF%E7%BA%BD%E7%BA%A6%E5%A4%A7%E5%AD%A6%E6%AF%95%E4%B8%9A%23) `174.8K 🔥` `NEW`
1. [孙颖莎天道酬勤](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%A4%A9%E9%81%93%E9%85%AC%E5%8B%A4%23) `174.8K 🔥` `NEW`
1. [哈珀受伤](https://s.weibo.com/weibo?q=%23%E5%93%88%E7%8F%80%E5%8F%97%E4%BC%A4%23) `174.6K 🔥` `NEW`
1. [小米汽车实施项目管理铁三角制度](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%E5%AE%9E%E6%96%BD%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86%E9%93%81%E4%B8%89%E8%A7%92%E5%88%B6%E5%BA%A6%23) `174.4K 🔥` `NEW`
1. [印4岁女孩光天化日遭多名劫匪抢走](https://s.weibo.com/weibo?q=%23%E5%8D%B04%E5%B2%81%E5%A5%B3%E5%AD%A9%E5%85%89%E5%A4%A9%E5%8C%96%E6%97%A5%E9%81%AD%E5%A4%9A%E5%90%8D%E5%8A%AB%E5%8C%AA%E6%8A%A2%E8%B5%B0%23) `174.2K 🔥` `NEW`
1. [TF家族运动会在选号码了](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%E8%BF%90%E5%8A%A8%E4%BC%9A%E5%9C%A8%E9%80%89%E5%8F%B7%E7%A0%81%E4%BA%86%23) `174.2K 🔥` `NEW`
1. [白玉兰](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%23) `180.4K 🔥`
1. [小学退回全损雨伞家委会致歉赔偿 (Primary school returns total damage umbrella, parent committee apologizes and compensates)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A6%E9%80%80%E5%9B%9E%E5%85%A8%E6%8D%9F%E9%9B%A8%E4%BC%9E%E5%AE%B6%E5%A7%94%E4%BC%9A%E8%87%B4%E6%AD%89%E8%B5%94%E5%81%BF%23) `356.3K 🔥` `-86%`
1. [檀健次卢昱晓好激烈的吻戏](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E5%8D%A2%E6%98%B1%E6%99%93%E5%A5%BD%E6%BF%80%E7%83%88%E7%9A%84%E5%90%BB%E6%88%8F%23) `236.0K 🔥` `-46%`

Updated at 2026-05-21 13:51:56

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
