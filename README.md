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

1. [我在挨骂 稍等呀 (I'm being scolded. Wait a minute.)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9C%A8%E6%8C%A8%E9%AA%82%20%E7%A8%8D%E7%AD%89%E5%91%80%23) `353.7K 🔥` `NEW`
1. [蓝眼狐是L3吗](https://s.weibo.com/weibo?q=%23%E8%93%9D%E7%9C%BC%E7%8B%90%E6%98%AFL3%E5%90%97%23) `229.6K 🔥` `NEW`
1. [2岁患癌女孩获捐10万奶奶哽咽致谢](https://s.weibo.com/weibo?q=%232%E5%B2%81%E6%82%A3%E7%99%8C%E5%A5%B3%E5%AD%A9%E8%8E%B7%E6%8D%9010%E4%B8%87%E5%A5%B6%E5%A5%B6%E5%93%BD%E5%92%BD%E8%87%B4%E8%B0%A2%23) `229.4K 🔥` `NEW`
1. [张元英签售态度](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E7%AD%BE%E5%94%AE%E6%80%81%E5%BA%A6%23) `228.5K 🔥` `NEW`
1. [最新一批侵华日军罪行铁证展出](https://s.weibo.com/weibo?q=%23%E6%9C%80%E6%96%B0%E4%B8%80%E6%89%B9%E4%BE%B5%E5%8D%8E%E6%97%A5%E5%86%9B%E7%BD%AA%E8%A1%8C%E9%93%81%E8%AF%81%E5%B1%95%E5%87%BA%23) `227.7K 🔥` `NEW`
1. [男子酒后和老婆吵架胸口撕裂40厘米](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%85%92%E5%90%8E%E5%92%8C%E8%80%81%E5%A9%86%E5%90%B5%E6%9E%B6%E8%83%B8%E5%8F%A3%E6%92%95%E8%A3%8240%E5%8E%98%E7%B1%B3%23) `227.2K 🔥` `NEW`
1. [一家4口爬山祈福妻子坠亡](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B64%E5%8F%A3%E7%88%AC%E5%B1%B1%E7%A5%88%E7%A6%8F%E5%A6%BB%E5%AD%90%E5%9D%A0%E4%BA%A1%23) `187.4K 🔥` `NEW`
1. [孙俪邓超 伟大的暧昧期](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E9%82%93%E8%B6%85%20%E4%BC%9F%E5%A4%A7%E7%9A%84%E6%9A%A7%E6%98%A7%E6%9C%9F%23) `179.3K 🔥` `NEW`
1. [张小满严晓丹分手](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%BB%A1%E4%B8%A5%E6%99%93%E4%B8%B9%E5%88%86%E6%89%8B%23) `92.1K 🔥` `NEW`
1. [镖人票房破11亿](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E7%A5%A8%E6%88%BF%E7%A0%B411%E4%BA%BF%23) `89.9K 🔥` `NEW`
1. [2026LCK决赛 (2026 LCK Finals)](https://s.weibo.com/weibo?q=%232026LCK%E5%86%B3%E8%B5%9B%23) `83.6K 🔥` `NEW`
1. [中国男篮vs中国台北男篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AEvs%E4%B8%AD%E5%9B%BD%E5%8F%B0%E5%8C%97%E7%94%B7%E7%AF%AE%23) `854.7K 🔥` `+163%`
1. [伊朗袭击27个美军基地](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%A2%AD%E5%87%BB27%E4%B8%AA%E7%BE%8E%E5%86%9B%E5%9F%BA%E5%9C%B0%23) `604.9K 🔥` `+61%`
1. [沈腾马丽 我欲成冰再也无退路](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E9%A9%AC%E4%B8%BD%20%E6%88%91%E6%AC%B2%E6%88%90%E5%86%B0%E5%86%8D%E4%B9%9F%E6%97%A0%E9%80%80%E8%B7%AF%23) `413.9K 🔥` `+202%`
1. [将门独后王鹤棣路透 (Wang Hedi, the only queen in the general family, Reuters)](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E7%8E%8B%E9%B9%A4%E6%A3%A3%E8%B7%AF%E9%80%8F%23) `412.4K 🔥` `+72%`
1. [六点半下班和七点半下班的差别](https://s.weibo.com/weibo?q=%23%E5%85%AD%E7%82%B9%E5%8D%8A%E4%B8%8B%E7%8F%AD%E5%92%8C%E4%B8%83%E7%82%B9%E5%8D%8A%E4%B8%8B%E7%8F%AD%E7%9A%84%E5%B7%AE%E5%88%AB%23) `388.7K 🔥` `+54%`
1. [以军开始打击伊朗首都心脏地带](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E5%BC%80%E5%A7%8B%E6%89%93%E5%87%BB%E4%BC%8A%E6%9C%97%E9%A6%96%E9%83%BD%E5%BF%83%E8%84%8F%E5%9C%B0%E5%B8%A6%23) `353.2K 🔥` `+253%`
1. [不建议电脑缩放调成500%](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%BB%BA%E8%AE%AE%E7%94%B5%E8%84%91%E7%BC%A9%E6%94%BE%E8%B0%83%E6%88%90500%25%23) `316.8K 🔥` `+24%`
1. [以军称已向伊朗投掷超1200枚导弹](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E7%A7%B0%E5%B7%B2%E5%90%91%E4%BC%8A%E6%9C%97%E6%8A%95%E6%8E%B7%E8%B6%851200%E6%9E%9A%E5%AF%BC%E5%BC%B9%23) `270.2K 🔥` `+90%`
1. [这样退税最划算](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%A0%B7%E9%80%80%E7%A8%8E%E6%9C%80%E5%88%92%E7%AE%97%23) `229.6K 🔥` `+66%`
1. [伊朗确认继任者后或将扩大反击 (Iran may expand counterattack after confirming successor)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A1%AE%E8%AE%A4%E7%BB%A7%E4%BB%BB%E8%80%85%E5%90%8E%E6%88%96%E5%B0%86%E6%89%A9%E5%A4%A7%E5%8F%8D%E5%87%BB%23) `1.2M 🔥`
1. [全国政协会议议程来了 (The agenda for the National Committee of the Chinese People's Political Consultative Conference is here)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E6%94%BF%E5%8D%8F%E4%BC%9A%E8%AE%AE%E8%AE%AE%E7%A8%8B%E6%9D%A5%E4%BA%86%23) `692.1K 🔥`
1. [2岁小孩高铁车厢唱歌旅客大打出手 (2-year-old boy sings in high-speed rail carriage and gets into fight with passengers)](https://s.weibo.com/weibo?q=%232%E5%B2%81%E5%B0%8F%E5%AD%A9%E9%AB%98%E9%93%81%E8%BD%A6%E5%8E%A2%E5%94%B1%E6%AD%8C%E6%97%85%E5%AE%A2%E5%A4%A7%E6%89%93%E5%87%BA%E6%89%8B%23) `354.5K 🔥`
1. [贝因美 大麻二酚](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%9B%A0%E7%BE%8E%20%E5%A4%A7%E9%BA%BB%E4%BA%8C%E9%85%9A%23) `354.1K 🔥`
1. [杨紫上次恋爱已是七年前 (Yang Zi’s last relationship was seven years ago)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E4%B8%8A%E6%AC%A1%E6%81%8B%E7%88%B1%E5%B7%B2%E6%98%AF%E4%B8%83%E5%B9%B4%E5%89%8D%23) `229.0K 🔥`
1. [携程回应大马士革到上海机票550万 (Ctrip responds to air tickets from Damascus to Shanghai costing 5.5 million)](https://s.weibo.com/weibo?q=%23%E6%90%BA%E7%A8%8B%E5%9B%9E%E5%BA%94%E5%A4%A7%E9%A9%AC%E5%A3%AB%E9%9D%A9%E5%88%B0%E4%B8%8A%E6%B5%B7%E6%9C%BA%E7%A5%A8550%E4%B8%87%23) `228.6K 🔥`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `228.3K 🔥`
1. [迪拜机场被炸前记者接到中国同胞 (Reporters received news from Chinese compatriots before Dubai Airport was bombed)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E6%8B%9C%E6%9C%BA%E5%9C%BA%E8%A2%AB%E7%82%B8%E5%89%8D%E8%AE%B0%E8%80%85%E6%8E%A5%E5%88%B0%E4%B8%AD%E5%9B%BD%E5%90%8C%E8%83%9E%23) `227.5K 🔥`
1. [10万元黄金被女儿当垃圾扔了 (100,000 yuan of gold was thrown away as trash by my daughter)](https://s.weibo.com/weibo?q=%2310%E4%B8%87%E5%85%83%E9%BB%84%E9%87%91%E8%A2%AB%E5%A5%B3%E5%84%BF%E5%BD%93%E5%9E%83%E5%9C%BE%E6%89%94%E4%BA%86%23) `227.4K 🔥`
1. [沙特阿拉伯股市](https://s.weibo.com/weibo?q=%23%E6%B2%99%E7%89%B9%E9%98%BF%E6%8B%89%E4%BC%AF%E8%82%A1%E5%B8%82%23) `133.1K 🔥`
1. [谢娜 丁程鑫皮痒痒了哇](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%20%E4%B8%81%E7%A8%8B%E9%91%AB%E7%9A%AE%E7%97%92%E7%97%92%E4%BA%86%E5%93%87%23) `132.3K 🔥`
1. [镖人](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `105.6K 🔥`
1. [金价或将冲击历史新高](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%88%96%E5%B0%86%E5%86%B2%E5%87%BB%E5%8E%86%E5%8F%B2%E6%96%B0%E9%AB%98%23) `93.8K 🔥`
1. [撞人族已成为日本全国性问题 (Collision with human beings has become a nationwide problem in Japan)](https://s.weibo.com/weibo?q=%23%E6%92%9E%E4%BA%BA%E6%97%8F%E5%B7%B2%E6%88%90%E4%B8%BA%E6%97%A5%E6%9C%AC%E5%85%A8%E5%9B%BD%E6%80%A7%E9%97%AE%E9%A2%98%23) `92.3K 🔥`
1. [哈梅内伊住所遭袭前后对比景象 (Comparison of scenes before and after the attack on Khamenei’s residence)](https://s.weibo.com/weibo?q=%23%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E4%BD%8F%E6%89%80%E9%81%AD%E8%A2%AD%E5%89%8D%E5%90%8E%E5%AF%B9%E6%AF%94%E6%99%AF%E8%B1%A1%23) `90.7K 🔥`
1. [哈梅内伊遇害 (Khamenei killed)](https://s.weibo.com/weibo?q=%23%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E9%81%87%E5%AE%B3%23) `413.4K 🔥` `-22%`
1. [小镇唯一外卖员靠跑单月入过万](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%95%87%E5%94%AF%E4%B8%80%E5%A4%96%E5%8D%96%E5%91%98%E9%9D%A0%E8%B7%91%E5%8D%95%E6%9C%88%E5%85%A5%E8%BF%87%E4%B8%87%23) `365.7K 🔥` `-59%`
1. [秦岚嗓子哑了三年 (Qin Lan has been hoarse for three years)](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%B2%9A%E5%97%93%E5%AD%90%E5%93%91%E4%BA%86%E4%B8%89%E5%B9%B4%23) `301.6K 🔥` `-25%`
1. [4399跳转steam](https://s.weibo.com/weibo?q=%234399%E8%B7%B3%E8%BD%ACsteam%23) `229.8K 🔥` `-27%`
1. [杨幂 得罪就得罪吧 (Yang Mi, just offend if you offend me)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%20%E5%BE%97%E7%BD%AA%E5%B0%B1%E5%BE%97%E7%BD%AA%E5%90%A7%23) `228.9K 🔥` `-27%`
1. [蔡思贝被TVB官网除名](https://s.weibo.com/weibo?q=%23%E8%94%A1%E6%80%9D%E8%B4%9D%E8%A2%ABTVB%E5%AE%98%E7%BD%91%E9%99%A4%E5%90%8D%23) `228.0K 🔥` `-27%`
1. [郭晓婷王天辰双人杂志](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E5%A9%B7%E7%8E%8B%E5%A4%A9%E8%BE%B0%E5%8F%8C%E4%BA%BA%E6%9D%82%E5%BF%97%23) `191.8K 🔥` `-26%`
1. [伊朗公布部分遇害高级军官名单 (Iran releases partial list of killed senior military officers)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%85%AC%E5%B8%83%E9%83%A8%E5%88%86%E9%81%87%E5%AE%B3%E9%AB%98%E7%BA%A7%E5%86%9B%E5%AE%98%E5%90%8D%E5%8D%95%23) `191.0K 🔥` `-39%`
1. [耙耙柑是很善良的水果 (Mandarin orange is a very kind fruit)](https://s.weibo.com/weibo?q=%23%E8%80%99%E8%80%99%E6%9F%91%E6%98%AF%E5%BE%88%E5%96%84%E8%89%AF%E7%9A%84%E6%B0%B4%E6%9E%9C%23) `185.0K 🔥` `-22%`
1. [中国男篮半场落后中国台北1分](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E5%8D%8A%E5%9C%BA%E8%90%BD%E5%90%8E%E4%B8%AD%E5%9B%BD%E5%8F%B0%E5%8C%971%E5%88%86%23) `180.4K 🔥` `-43%`
1. [陈妍希李钟硕余承恩秀场合照 (Michelle Chen, Lee Jong Suk and Yu Chengen show photos)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E6%9D%8E%E9%92%9F%E7%A1%95%E4%BD%99%E6%89%BF%E6%81%A9%E7%A7%80%E5%9C%BA%E5%90%88%E7%85%A7%23) `162.9K 🔥` `-48%`
1. [伊拉克宣布全国哀悼3天](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%8B%89%E5%85%8B%E5%AE%A3%E5%B8%83%E5%85%A8%E5%9B%BD%E5%93%80%E6%82%BC3%E5%A4%A9%23) `120.0K 🔥` `-52%`
1. [23岁博士生患胃癌晚期家人发声](https://s.weibo.com/weibo?q=%2323%E5%B2%81%E5%8D%9A%E5%A3%AB%E7%94%9F%E6%82%A3%E8%83%83%E7%99%8C%E6%99%9A%E6%9C%9F%E5%AE%B6%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `113.8K 🔥` `-30%`
1. [王者荣耀 TF四代 (King of Glory TF fourth generation)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%20TF%E5%9B%9B%E4%BB%A3%23) `96.9K 🔥` `-29%`
1. [莫雷加德世排升至第二 (Moregard moves up to second place in world rankings)](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E9%9B%B7%E5%8A%A0%E5%BE%B7%E4%B8%96%E6%8E%92%E5%8D%87%E8%87%B3%E7%AC%AC%E4%BA%8C%23) `84.0K 🔥` `-22%`

Updated at 2026-03-01 17:46:22

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
