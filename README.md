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

1. [王楚钦孙颖莎止步半决赛 (Wang Chuqin and Sun Yingsha stopped in the semi-finals)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E6%AD%A2%E6%AD%A5%E5%8D%8A%E5%86%B3%E8%B5%9B%23) `5.6M 🔥` `NEW`
1. [女儿一个谎让父亲坐了两年牢](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E4%B8%80%E4%B8%AA%E8%B0%8E%E8%AE%A9%E7%88%B6%E4%BA%B2%E5%9D%90%E4%BA%86%E4%B8%A4%E5%B9%B4%E7%89%A2%23) `1.6M 🔥` `NEW`
1. [本周这些数据最值得关注](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%A8%E8%BF%99%E4%BA%9B%E6%95%B0%E6%8D%AE%E6%9C%80%E5%80%BC%E5%BE%97%E5%85%B3%E6%B3%A8%23) `1.4M 🔥` `NEW`
1. [王俊凯演唱会退场天才](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E9%80%80%E5%9C%BA%E5%A4%A9%E6%89%8D%23) `1.4M 🔥` `NEW`
1. [发现很多KTV都没有MV了](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%BE%88%E5%A4%9AKTV%E9%83%BD%E6%B2%A1%E6%9C%89MV%E4%BA%86%23) `908.4K 🔥` `NEW`
1. [想你了票房倒挂](https://s.weibo.com/weibo?q=%23%E6%83%B3%E4%BD%A0%E4%BA%86%E7%A5%A8%E6%88%BF%E5%80%92%E6%8C%82%23) `695.0K 🔥` `NEW`
1. [大学生为省掉1块钱的打包费](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E7%94%9F%E4%B8%BA%E7%9C%81%E6%8E%891%E5%9D%97%E9%92%B1%E7%9A%84%E6%89%93%E5%8C%85%E8%B4%B9%23) `422.0K 🔥` `NEW`
1. [阿根廷主帅不满赛事方时间安排](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%B8%BB%E5%B8%85%E4%B8%8D%E6%BB%A1%E8%B5%9B%E4%BA%8B%E6%96%B9%E6%97%B6%E9%97%B4%E5%AE%89%E6%8E%92%23) `391.1K 🔥` `NEW`
1. [八仙剧本](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%E5%89%A7%E6%9C%AC%23) `361.7K 🔥` `NEW`
1. [王俊凯唱了不完美小孩](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%94%B1%E4%BA%86%E4%B8%8D%E5%AE%8C%E7%BE%8E%E5%B0%8F%E5%AD%A9%23) `331.1K 🔥` `NEW`
1. [上海暴雨 (Heavy rain in Shanghai)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E6%9A%B4%E9%9B%A8%23) `329.1K 🔥` `NEW`
1. [一眼看出白鹿自己化的妆](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9C%BC%E7%9C%8B%E5%87%BA%E7%99%BD%E9%B9%BF%E8%87%AA%E5%B7%B1%E5%8C%96%E7%9A%84%E5%A6%86%23) `327.3K 🔥` `NEW`
1. [CORTIS演唱会被吐槽](https://s.weibo.com/weibo?q=%23CORTIS%E6%BC%94%E5%94%B1%E4%BC%9A%E8%A2%AB%E5%90%90%E6%A7%BD%23) `324.9K 🔥` `NEW`
1. [Bin](https://s.weibo.com/weibo?q=%23Bin%23) `321.0K 🔥` `NEW`
1. [上班后消费观突然就变了](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E5%90%8E%E6%B6%88%E8%B4%B9%E8%A7%82%E7%AA%81%E7%84%B6%E5%B0%B1%E5%8F%98%E4%BA%86%23) `320.4K 🔥` `NEW`
1. [富人的孩子确实更容易高配得感](https://s.weibo.com/weibo?q=%23%E5%AF%8C%E4%BA%BA%E7%9A%84%E5%AD%A9%E5%AD%90%E7%A1%AE%E5%AE%9E%E6%9B%B4%E5%AE%B9%E6%98%93%E9%AB%98%E9%85%8D%E5%BE%97%E6%84%9F%23) `295.2K 🔥` `NEW`
1. [男子判赔75万后身亡受害者家属崩溃](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%88%A4%E8%B5%9475%E4%B8%87%E5%90%8E%E8%BA%AB%E4%BA%A1%E5%8F%97%E5%AE%B3%E8%80%85%E5%AE%B6%E5%B1%9E%E5%B4%A9%E6%BA%83%23) `283.4K 🔥` `NEW`
1. [祖籍广东的泰国总理飙中文](https://s.weibo.com/weibo?q=%23%E7%A5%96%E7%B1%8D%E5%B9%BF%E4%B8%9C%E7%9A%84%E6%B3%B0%E5%9B%BD%E6%80%BB%E7%90%86%E9%A3%99%E4%B8%AD%E6%96%87%23) `282.8K 🔥` `NEW`
1. [内存条悄然降价](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%AD%98%E6%9D%A1%E6%82%84%E7%84%B6%E9%99%8D%E4%BB%B7%23) `282.8K 🔥` `NEW`
1. [丁程鑫王楚然认识几年了](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E7%8E%8B%E6%A5%9A%E7%84%B6%E8%AE%A4%E8%AF%86%E5%87%A0%E5%B9%B4%E4%BA%86%23) `282.8K 🔥` `NEW`
1. [八仙票房 (Eight Immortals Box Office)](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%E7%A5%A8%E6%88%BF%23) `280.9K 🔥` `NEW`
1. [降低身体炎症水平的食物](https://s.weibo.com/weibo?q=%23%E9%99%8D%E4%BD%8E%E8%BA%AB%E4%BD%93%E7%82%8E%E7%97%87%E6%B0%B4%E5%B9%B3%E7%9A%84%E9%A3%9F%E7%89%A9%23) `280.4K 🔥` `NEW`
1. [龚俊回应和刘宇宁争议](https://s.weibo.com/weibo?q=%23%E9%BE%9A%E4%BF%8A%E5%9B%9E%E5%BA%94%E5%92%8C%E5%88%98%E5%AE%87%E5%AE%81%E4%BA%89%E8%AE%AE%23) `280.3K 🔥` `NEW`
1. [以我的审美给迪丽热巴挑高定](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E6%88%91%E7%9A%84%E5%AE%A1%E7%BE%8E%E7%BB%99%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%8C%91%E9%AB%98%E5%AE%9A%23) `280.2K 🔥` `NEW`
1. [孙颖莎逆天救球](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E9%80%86%E5%A4%A9%E6%95%91%E7%90%83%23) `279.9K 🔥` `NEW`
1. [马龙许昕晋级四强](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95%E6%99%8B%E7%BA%A7%E5%9B%9B%E5%BC%BA%23) `258.0K 🔥` `NEW`
1. [警方调查女子称多次被黄总喊去包厢](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E8%B0%83%E6%9F%A5%E5%A5%B3%E5%AD%90%E7%A7%B0%E5%A4%9A%E6%AC%A1%E8%A2%AB%E9%BB%84%E6%80%BB%E5%96%8A%E5%8E%BB%E5%8C%85%E5%8E%A2%23) `256.1K 🔥` `NEW`
1. [龚俊刘宇宁这段被网友审判了](https://s.weibo.com/weibo?q=%23%E9%BE%9A%E4%BF%8A%E5%88%98%E5%AE%87%E5%AE%81%E8%BF%99%E6%AE%B5%E8%A2%AB%E7%BD%91%E5%8F%8B%E5%AE%A1%E5%88%A4%E4%BA%86%23) `253.6K 🔥` `NEW`
1. [机器人手机从概念到现实意味着什么](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%89%8B%E6%9C%BA%E4%BB%8E%E6%A6%82%E5%BF%B5%E5%88%B0%E7%8E%B0%E5%AE%9E%E6%84%8F%E5%91%B3%E7%9D%80%E4%BB%80%E4%B9%88%23) `231.4K 🔥` `NEW`
1. [人在幸福的时候真的会少发朋友圈吗](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%9C%A8%E5%B9%B8%E7%A6%8F%E7%9A%84%E6%97%B6%E5%80%99%E7%9C%9F%E7%9A%84%E4%BC%9A%E5%B0%91%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%90%97%23) `229.5K 🔥` `NEW`
1. [女子查出脑垂体瘤却被家人催生三胎 (A woman was diagnosed with a pituitary gland tumor but was forced to have three children by her family)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%9F%A5%E5%87%BA%E8%84%91%E5%9E%82%E4%BD%93%E7%98%A4%E5%8D%B4%E8%A2%AB%E5%AE%B6%E4%BA%BA%E5%82%AC%E7%94%9F%E4%B8%89%E8%83%8E%23) `229.0K 🔥` `NEW`
1. [黄子韬王鹤棣同台唱rap](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%90%8C%E5%8F%B0%E5%94%B1rap%23) `203.7K 🔥` `NEW`
1. [F1比利时大奖赛](https://s.weibo.com/weibo?q=%23F1%E6%AF%94%E5%88%A9%E6%97%B6%E5%A4%A7%E5%A5%96%E8%B5%9B%23) `196.0K 🔥` `NEW`
1. [丁禹兮给粉丝打电话](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E7%BB%99%E7%B2%89%E4%B8%9D%E6%89%93%E7%94%B5%E8%AF%9D%23) `193.8K 🔥` `NEW`
1. [莫氏鸡煲老板晒账本回应倒闭](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E6%99%92%E8%B4%A6%E6%9C%AC%E5%9B%9E%E5%BA%94%E5%80%92%E9%97%AD%23) `192.9K 🔥` `NEW`
1. [袁励岑王艺迪晋级决赛](https://s.weibo.com/weibo?q=%23%E8%A2%81%E5%8A%B1%E5%B2%91%E7%8E%8B%E8%89%BA%E8%BF%AA%E6%99%8B%E7%BA%A7%E5%86%B3%E8%B5%9B%23) `186.1K 🔥` `NEW`
1. [36岁女子确诊食管癌半年后去世](https://s.weibo.com/weibo?q=%2336%E5%B2%81%E5%A5%B3%E5%AD%90%E7%A1%AE%E8%AF%8A%E9%A3%9F%E7%AE%A1%E7%99%8C%E5%8D%8A%E5%B9%B4%E5%90%8E%E5%8E%BB%E4%B8%96%23) `182.2K 🔥` `NEW`
1. [英法大战变英法小战了](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%B3%95%E5%A4%A7%E6%88%98%E5%8F%98%E8%8B%B1%E6%B3%95%E5%B0%8F%E6%88%98%E4%BA%86%23) `176.6K 🔥` `NEW`
1. [本月最好笑视频被张凌赫拿下了](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E6%9C%88%E6%9C%80%E5%A5%BD%E7%AC%91%E8%A7%86%E9%A2%91%E8%A2%AB%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%8B%BF%E4%B8%8B%E4%BA%86%23) `175.4K 🔥` `NEW`
1. [印度用中国AI成本降一个数量级](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%94%A8%E4%B8%AD%E5%9B%BDAI%E6%88%90%E6%9C%AC%E9%99%8D%E4%B8%80%E4%B8%AA%E6%95%B0%E9%87%8F%E7%BA%A7%23) `174.6K 🔥` `NEW`
1. [KC战胜T1 (KC defeated T1)](https://s.weibo.com/weibo?q=%23KC%E6%88%98%E8%83%9CT1%23) `174.5K 🔥` `NEW`
1. [丁禹兮演唱会上座率](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%8A%E5%BA%A7%E7%8E%87%23) `174.1K 🔥` `NEW`
1. [ENC王者荣耀大名单](https://s.weibo.com/weibo?q=%23ENC%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E5%A4%A7%E5%90%8D%E5%8D%95%23) `170.1K 🔥` `NEW`
1. [周深暴雨中的大鱼](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E6%9A%B4%E9%9B%A8%E4%B8%AD%E7%9A%84%E5%A4%A7%E9%B1%BC%23) `170.1K 🔥` `NEW`
1. [已经绝交的朋友教会我的事](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E7%BB%8F%E7%BB%9D%E4%BA%A4%E7%9A%84%E6%9C%8B%E5%8F%8B%E6%95%99%E4%BC%9A%E6%88%91%E7%9A%84%E4%BA%8B%23) `169.6K 🔥` `NEW`
1. [百花杀](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%23) `164.7K 🔥` `NEW`
1. [苏州文旅看到后天塌了](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E5%B7%9E%E6%96%87%E6%97%85%E7%9C%8B%E5%88%B0%E5%90%8E%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `161.3K 🔥` `NEW`
1. [黄子韬演唱会](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E6%BC%94%E5%94%B1%E4%BC%9A%23) `159.3K 🔥` `NEW`
1. [印度首列国产氢动力列车发车](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E9%A6%96%E5%88%97%E5%9B%BD%E4%BA%A7%E6%B0%A2%E5%8A%A8%E5%8A%9B%E5%88%97%E8%BD%A6%E5%8F%91%E8%BD%A6%23) `143.1K 🔥` `NEW`

Updated at 2026-07-19 00:12:05

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
