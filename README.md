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

1. [女明星在用的蚕丝卫生巾 (Silk sanitary napkins used by female celebrities)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%98%8E%E6%98%9F%E5%9C%A8%E7%94%A8%E7%9A%84%E8%9A%95%E4%B8%9D%E5%8D%AB%E7%94%9F%E5%B7%BE%23) `453.1K 🔥` `NEW`
1. [Bin哥我们错了](https://s.weibo.com/weibo?q=%23Bin%E5%93%A5%E6%88%91%E4%BB%AC%E9%94%99%E4%BA%86%23) `314.0K 🔥` `NEW`
1. [耳帝](https://s.weibo.com/weibo?q=%23%E8%80%B3%E5%B8%9D%23) `211.9K 🔥` `NEW`
1. [中餐厅](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%85%23) `193.7K 🔥` `NEW`
1. [歌王](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E7%8E%8B%23) `169.0K 🔥` `NEW`
1. [贴秋膘](https://s.weibo.com/weibo?q=%23%E8%B4%B4%E7%A7%8B%E8%86%98%23) `152.1K 🔥` `NEW`
1. [23岁博士回应确诊胃癌晚期](https://s.weibo.com/weibo?q=%2323%E5%B2%81%E5%8D%9A%E5%A3%AB%E5%9B%9E%E5%BA%94%E7%A1%AE%E8%AF%8A%E8%83%83%E7%99%8C%E6%99%9A%E6%9C%9F%23) `148.1K 🔥` `NEW`
1. [山水不会再相逢人也不会再见](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E6%B0%B4%E4%B8%8D%E4%BC%9A%E5%86%8D%E7%9B%B8%E9%80%A2%E4%BA%BA%E4%B9%9F%E4%B8%8D%E4%BC%9A%E5%86%8D%E8%A7%81%23) `146.0K 🔥` `NEW`
1. [要不念相思刺棠互换男女主吧](https://s.weibo.com/weibo?q=%23%E8%A6%81%E4%B8%8D%E5%BF%B5%E7%9B%B8%E6%80%9D%E5%88%BA%E6%A3%A0%E4%BA%92%E6%8D%A2%E7%94%B7%E5%A5%B3%E4%B8%BB%E5%90%A7%23) `126.0K 🔥` `NEW`
1. [尤长靖龚琳娜有种经济上行的美](https://s.weibo.com/weibo?q=%23%E5%B0%A4%E9%95%BF%E9%9D%96%E9%BE%9A%E7%90%B3%E5%A8%9C%E6%9C%89%E7%A7%8D%E7%BB%8F%E6%B5%8E%E4%B8%8A%E8%A1%8C%E7%9A%84%E7%BE%8E%23) `97.6K 🔥` `NEW`
1. [名创优品回应女子吐槽内裤质量差 (Miniso responds to women complaining about poor quality of underwear)](https://s.weibo.com/weibo?q=%23%E5%90%8D%E5%88%9B%E4%BC%98%E5%93%81%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%90%E5%90%90%E6%A7%BD%E5%86%85%E8%A3%A4%E8%B4%A8%E9%87%8F%E5%B7%AE%23) `97.4K 🔥` `NEW`
1. [王俊凯安排张雅琪当氛围组](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%AE%89%E6%8E%92%E5%BC%A0%E9%9B%85%E7%90%AA%E5%BD%93%E6%B0%9B%E5%9B%B4%E7%BB%84%23) `93.0K 🔥` `NEW`
1. [歌手帮唱 下季首发](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E5%B8%AE%E5%94%B1%20%E4%B8%8B%E5%AD%A3%E9%A6%96%E5%8F%91%23) `91.2K 🔥` `NEW`
1. [吴碧霞 国家队就是国家队](https://s.weibo.com/weibo?q=%23%E5%90%B4%E7%A2%A7%E9%9C%9E%20%E5%9B%BD%E5%AE%B6%E9%98%9F%E5%B0%B1%E6%98%AF%E5%9B%BD%E5%AE%B6%E9%98%9F%23) `90.2K 🔥` `NEW`
1. [歌手](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%23) `86.9K 🔥` `NEW`
1. [原来戴泳帽真的会影响颜值](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%88%B4%E6%B3%B3%E5%B8%BD%E7%9C%9F%E7%9A%84%E4%BC%9A%E5%BD%B1%E5%93%8D%E9%A2%9C%E5%80%BC%23) `500.0K 🔥`
1. [披荆斩棘](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%23) `243.8K 🔥`
1. [齐豫 躲歌王](https://s.weibo.com/weibo?q=%23%E9%BD%90%E8%B1%AB%20%E8%BA%B2%E6%AD%8C%E7%8E%8B%23) `213.8K 🔥`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `206.0K 🔥`
1. [陈情令外鹅版VS内鹅版](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%83%85%E4%BB%A4%E5%A4%96%E9%B9%85%E7%89%88VS%E5%86%85%E9%B9%85%E7%89%88%23) `201.5K 🔥`
1. [国乒男单 梯队建设 (National table tennis men's singles echelon construction)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%8D%95%20%E6%A2%AF%E9%98%9F%E5%BB%BA%E8%AE%BE%23) `198.2K 🔥`
1. [aespa最伟大的Drama回来了](https://s.weibo.com/weibo?q=%23aespa%E6%9C%80%E4%BC%9F%E5%A4%A7%E7%9A%84Drama%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `173.9K 🔥`
1. [胡彦斌歌王 (Hu Yanbin King of Songs)](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%BD%A6%E6%96%8C%E6%AD%8C%E7%8E%8B%23) `1.1M 🔥` `-71%`
1. [民用航空发展十五五规划](https://s.weibo.com/weibo?q=%23%E6%B0%91%E7%94%A8%E8%88%AA%E7%A9%BA%E5%8F%91%E5%B1%95%E5%8D%81%E4%BA%94%E4%BA%94%E8%A7%84%E5%88%92%23) `459.9K 🔥` `-45%`
1. [歌手排名](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%23) `449.7K 🔥` `-77%`
1. [歌手总决赛 孙燕姿吴青峰太伟大了](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%80%BB%E5%86%B3%E8%B5%9B%20%E5%AD%99%E7%87%95%E5%A7%BF%E5%90%B4%E9%9D%92%E5%B3%B0%E5%A4%AA%E4%BC%9F%E5%A4%A7%E4%BA%86%23) `447.1K 🔥` `-22%`
1. [一个没有空调外挂机的城市](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E6%B2%A1%E6%9C%89%E7%A9%BA%E8%B0%83%E5%A4%96%E6%8C%82%E6%9C%BA%E7%9A%84%E5%9F%8E%E5%B8%82%23) `423.0K 🔥` `-38%`
1. [中山大学23岁直博生确诊胃癌晚期](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%B1%B1%E5%A4%A7%E5%AD%A623%E5%B2%81%E7%9B%B4%E5%8D%9A%E7%94%9F%E7%A1%AE%E8%AF%8A%E8%83%83%E7%99%8C%E6%99%9A%E6%9C%9F%23) `249.1K 🔥` `-35%`
1. [湖人 詹姆斯](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BA%20%E8%A9%B9%E5%A7%86%E6%96%AF%23) `216.2K 🔥` `-41%`
1. [歌手收视率](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%94%B6%E8%A7%86%E7%8E%87%23) `194.8K 🔥` `-37%`
1. [小米高管玩梗被指越界](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E9%AB%98%E7%AE%A1%E7%8E%A9%E6%A2%97%E8%A2%AB%E6%8C%87%E8%B6%8A%E7%95%8C%23) `176.0K 🔥` `-25%`
1. [员工刻意隐瞒自身价值遭索赔200万 (Employee deliberately concealed his own value and was compensated for 2 million yuan)](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A5%E5%88%BB%E6%84%8F%E9%9A%90%E7%9E%92%E8%87%AA%E8%BA%AB%E4%BB%B7%E5%80%BC%E9%81%AD%E7%B4%A2%E8%B5%94200%E4%B8%87%23) `170.8K 🔥` `-27%`
1. [女子生下4胞胎被全家宠上天称嫁对人了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%9F%E4%B8%8B4%E8%83%9E%E8%83%8E%E8%A2%AB%E5%85%A8%E5%AE%B6%E5%AE%A0%E4%B8%8A%E5%A4%A9%E7%A7%B0%E5%AB%81%E5%AF%B9%E4%BA%BA%E4%BA%86%23) `170.7K 🔥` `-28%`
1. [TF三代常驻综艺](https://s.weibo.com/weibo?q=%23TF%E4%B8%89%E4%BB%A3%E5%B8%B8%E9%A9%BB%E7%BB%BC%E8%89%BA%23) `165.1K 🔥` `-30%`
1. [万妮达第三](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%A6%AE%E8%BE%BE%E7%AC%AC%E4%B8%89%23) `164.6K 🔥` `-30%`
1. [张凌赫苍兰诀婚服里面破洞裤](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%8B%8D%E5%85%B0%E8%AF%80%E5%A9%9A%E6%9C%8D%E9%87%8C%E9%9D%A2%E7%A0%B4%E6%B4%9E%E8%A3%A4%23) `163.0K 🔥` `-31%`
1. [外国网友也认了中式天庭](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E7%BD%91%E5%8F%8B%E4%B9%9F%E8%AE%A4%E4%BA%86%E4%B8%AD%E5%BC%8F%E5%A4%A9%E5%BA%AD%23) `160.9K 🔥` `-32%`
1. [湖人官方宣传被指除名詹眉 (The Lakers' official promotion was accused of removing Zhan Mei)](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BA%E5%AE%98%E6%96%B9%E5%AE%A3%E4%BC%A0%E8%A2%AB%E6%8C%87%E9%99%A4%E5%90%8D%E8%A9%B9%E7%9C%89%23) `153.0K 🔥` `-35%`
1. [离树不到10秒的活荔枝](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E6%A0%91%E4%B8%8D%E5%88%B010%E7%A7%92%E7%9A%84%E6%B4%BB%E8%8D%94%E6%9E%9D%23) `149.4K 🔥` `-34%`
1. [中国要用5万亿织一张网 (China wants to use 5 trillion to weave a web)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%A6%81%E7%94%A85%E4%B8%87%E4%BA%BF%E7%BB%87%E4%B8%80%E5%BC%A0%E7%BD%91%23) `148.3K 🔥` `-37%`
1. [歌手总决赛](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%80%BB%E5%86%B3%E8%B5%9B%23) `147.7K 🔥` `-37%`
1. [天赐给侯明昊肚子打码](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E8%B5%90%E7%BB%99%E4%BE%AF%E6%98%8E%E6%98%8A%E8%82%9A%E5%AD%90%E6%89%93%E7%A0%81%23) `138.9K 🔥` `-39%`
1. [刘浩存红裙跳舞](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E7%BA%A2%E8%A3%99%E8%B7%B3%E8%88%9E%23) `130.9K 🔥` `-44%`
1. [胚胎案妻子称如胚胎销毁定要离婚 (In embryo case, wife says she will get divorced if embryos are destroyed)](https://s.weibo.com/weibo?q=%23%E8%83%9A%E8%83%8E%E6%A1%88%E5%A6%BB%E5%AD%90%E7%A7%B0%E5%A6%82%E8%83%9A%E8%83%8E%E9%94%80%E6%AF%81%E5%AE%9A%E8%A6%81%E7%A6%BB%E5%A9%9A%23) `119.9K 🔥` `-40%`
1. [WTT横滨冠军赛](https://s.weibo.com/weibo?q=%23WTT%E6%A8%AA%E6%BB%A8%E5%86%A0%E5%86%9B%E8%B5%9B%23) `118.3K 🔥` `-29%`
1. [齐豫第二轮倒一 (Qi Yu fell in the second round)](https://s.weibo.com/weibo?q=%23%E9%BD%90%E8%B1%AB%E7%AC%AC%E4%BA%8C%E8%BD%AE%E5%80%92%E4%B8%80%23) `110.5K 🔥` `-47%`
1. [万妮达你让我哭](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%A6%AE%E8%BE%BE%E4%BD%A0%E8%AE%A9%E6%88%91%E5%93%AD%23) `98.7K 🔥` `-58%`
1. [TES战胜BLG (TES defeated BLG)](https://s.weibo.com/weibo?q=%23TES%E6%88%98%E8%83%9CBLG%23) `94.6K 🔥` `-61%`
1. [U17国足点球大战淘汰河床晋级决赛](https://s.weibo.com/weibo?q=%23U17%E5%9B%BD%E8%B6%B3%E7%82%B9%E7%90%83%E5%A4%A7%E6%88%98%E6%B7%98%E6%B1%B0%E6%B2%B3%E5%BA%8A%E6%99%8B%E7%BA%A7%E5%86%B3%E8%B5%9B%23) `81.6K 🔥` `-50%`
1. [iPhone18Pro起售或破万 (iPhone 18 Pro sales may start at over 10,000 yuan)](https://s.weibo.com/weibo?q=%23iPhone18Pro%E8%B5%B7%E5%94%AE%E6%88%96%E7%A0%B4%E4%B8%87%23) `74.6K 🔥` `-51%`
1. [理解了孩子平庸就承欢膝下的意义](https://s.weibo.com/weibo?q=%23%E7%90%86%E8%A7%A3%E4%BA%86%E5%AD%A9%E5%AD%90%E5%B9%B3%E5%BA%B8%E5%B0%B1%E6%89%BF%E6%AC%A2%E8%86%9D%E4%B8%8B%E7%9A%84%E6%84%8F%E4%B9%89%23) `73.9K 🔥` `-56%`

Updated at 2026-08-08 01:28:16

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
