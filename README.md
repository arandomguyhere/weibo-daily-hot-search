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

1. [超300款AI新品迎来全球首发 (Over 300 new AI products make their global debut)](https://s.weibo.com/weibo?q=%23%E8%B6%85300%E6%AC%BEAI%E6%96%B0%E5%93%81%E8%BF%8E%E6%9D%A5%E5%85%A8%E7%90%83%E9%A6%96%E5%8F%91%23) `893.0K 🔥` `NEW`
1. [刘宇宁说以后会加倍注意](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E8%AF%B4%E4%BB%A5%E5%90%8E%E4%BC%9A%E5%8A%A0%E5%80%8D%E6%B3%A8%E6%84%8F%23) `690.9K 🔥` `NEW`
1. [今夜足球专家认准全鸡专家](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%A4%9C%E8%B6%B3%E7%90%83%E4%B8%93%E5%AE%B6%E8%AE%A4%E5%87%86%E5%85%A8%E9%B8%A1%E4%B8%93%E5%AE%B6%23) `484.0K 🔥` `NEW`
1. [卢昱晓这一秒过火包场](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E5%8C%85%E5%9C%BA%23) `214.9K 🔥` `NEW`
1. [袁华 王俊凯妆造](https://s.weibo.com/weibo?q=%23%E8%A2%81%E5%8D%8E%20%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%A6%86%E9%80%A0%23) `174.7K 🔥` `NEW`
1. [邹市明自称没有落户的奥运冠军](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E%E8%87%AA%E7%A7%B0%E6%B2%A1%E6%9C%89%E8%90%BD%E6%88%B7%E7%9A%84%E5%A5%A5%E8%BF%90%E5%86%A0%E5%86%9B%23) `159.6K 🔥` `NEW`
1. [爱喝酒的人天塌了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%96%9D%E9%85%92%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `157.5K 🔥` `NEW`
1. [女子吃小龙虾绿松石美甲变银翘片](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%90%83%E5%B0%8F%E9%BE%99%E8%99%BE%E7%BB%BF%E6%9D%BE%E7%9F%B3%E7%BE%8E%E7%94%B2%E5%8F%98%E9%93%B6%E7%BF%98%E7%89%87%23) `157.0K 🔥` `NEW`
1. [欧文称阿根廷晋级靠运气](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E6%96%87%E7%A7%B0%E9%98%BF%E6%A0%B9%E5%BB%B7%E6%99%8B%E7%BA%A7%E9%9D%A0%E8%BF%90%E6%B0%94%23) `156.8K 🔥` `NEW`
1. [世界上最天才的文旅宣传语一定是](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%B8%8A%E6%9C%80%E5%A4%A9%E6%89%8D%E7%9A%84%E6%96%87%E6%97%85%E5%AE%A3%E4%BC%A0%E8%AF%AD%E4%B8%80%E5%AE%9A%E6%98%AF%23) `156.6K 🔥` `NEW`
1. [冉莹颖说邹市明现在不是奥运冠军了 (Ran Yingying said Zou Shiming is no longer an Olympic champion.)](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E8%AF%B4%E9%82%B9%E5%B8%82%E6%98%8E%E7%8E%B0%E5%9C%A8%E4%B8%8D%E6%98%AF%E5%A5%A5%E8%BF%90%E5%86%A0%E5%86%9B%E4%BA%86%23) `156.3K 🔥` `NEW`
1. [真正让人心情变得很哇塞的方法](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E8%AE%A9%E4%BA%BA%E5%BF%83%E6%83%85%E5%8F%98%E5%BE%97%E5%BE%88%E5%93%87%E5%A1%9E%E7%9A%84%E6%96%B9%E6%B3%95%23) `156.0K 🔥` `NEW`
1. [功夫女足](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%23) `155.9K 🔥` `NEW`
1. [狼队对战SYG](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%AF%B9%E6%88%98SYG%23) `155.7K 🔥` `NEW`
1. [王楚钦孙颖莎2比3袁励岑王艺迪](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E2%E6%AF%943%E8%A2%81%E5%8A%B1%E5%B2%91%E7%8E%8B%E8%89%BA%E8%BF%AA%23) `155.6K 🔥` `NEW`
1. [功夫女足一天发2次破亿海报](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E4%B8%80%E5%A4%A9%E5%8F%912%E6%AC%A1%E7%A0%B4%E4%BA%BF%E6%B5%B7%E6%8A%A5%23) `155.5K 🔥` `NEW`
1. [一念江南赵今麦路透](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%E8%B5%B5%E4%BB%8A%E9%BA%A6%E8%B7%AF%E9%80%8F%23) `155.5K 🔥` `NEW`
1. [女儿一个谎让父亲坐了两年牢](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E4%B8%80%E4%B8%AA%E8%B0%8E%E8%AE%A9%E7%88%B6%E4%BA%B2%E5%9D%90%E4%BA%86%E4%B8%A4%E5%B9%B4%E7%89%A2%23) `1.6M 🔥`
1. [大学生为省掉1块钱的打包费](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E7%94%9F%E4%B8%BA%E7%9C%81%E6%8E%891%E5%9D%97%E9%92%B1%E7%9A%84%E6%89%93%E5%8C%85%E8%B4%B9%23) `426.9K 🔥`
1. [阿根廷主帅不满赛事方时间安排](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%B8%BB%E5%B8%85%E4%B8%8D%E6%BB%A1%E8%B5%9B%E4%BA%8B%E6%96%B9%E6%97%B6%E9%97%B4%E5%AE%89%E6%8E%92%23) `399.5K 🔥`
1. [人在幸福的时候真的会少发朋友圈吗 (Do people really post less on WeChat Moments when they are happy?)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%9C%A8%E5%B9%B8%E7%A6%8F%E7%9A%84%E6%97%B6%E5%80%99%E7%9C%9F%E7%9A%84%E4%BC%9A%E5%B0%91%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%90%97%23) `211.5K 🔥`
1. [莫氏鸡煲老板晒账本回应倒闭](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E6%99%92%E8%B4%A6%E6%9C%AC%E5%9B%9E%E5%BA%94%E5%80%92%E9%97%AD%23) `197.1K 🔥`
1. [36岁女子确诊食管癌半年后去世](https://s.weibo.com/weibo?q=%2336%E5%B2%81%E5%A5%B3%E5%AD%90%E7%A1%AE%E8%AF%8A%E9%A3%9F%E7%AE%A1%E7%99%8C%E5%8D%8A%E5%B9%B4%E5%90%8E%E5%8E%BB%E4%B8%96%23) `157.3K 🔥`
1. [F1比利时大奖赛](https://s.weibo.com/weibo?q=%23F1%E6%AF%94%E5%88%A9%E6%97%B6%E5%A4%A7%E5%A5%96%E8%B5%9B%23) `157.2K 🔥`
1. [已经绝交的朋友教会我的事](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E7%BB%8F%E7%BB%9D%E4%BA%A4%E7%9A%84%E6%9C%8B%E5%8F%8B%E6%95%99%E4%BC%9A%E6%88%91%E7%9A%84%E4%BA%8B%23) `157.1K 🔥`
1. [英法大战变英法小战了](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%B3%95%E5%A4%A7%E6%88%98%E5%8F%98%E8%8B%B1%E6%B3%95%E5%B0%8F%E6%88%98%E4%BA%86%23) `156.9K 🔥`
1. [ENC王者荣耀大名单](https://s.weibo.com/weibo?q=%23ENC%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E5%A4%A7%E5%90%8D%E5%8D%95%23) `156.7K 🔥`
1. [丁禹兮演唱会上座率](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%8A%E5%BA%A7%E7%8E%87%23) `156.5K 🔥`
1. [苏州文旅看到后天塌了](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E5%B7%9E%E6%96%87%E6%97%85%E7%9C%8B%E5%88%B0%E5%90%8E%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `156.4K 🔥`
1. [百花杀](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80%23) `156.3K 🔥`
1. [袁励岑王艺迪晋级决赛 (Yuan Lizen and Wang Yidi advance to the finals)](https://s.weibo.com/weibo?q=%23%E8%A2%81%E5%8A%B1%E5%B2%91%E7%8E%8B%E8%89%BA%E8%BF%AA%E6%99%8B%E7%BA%A7%E5%86%B3%E8%B5%9B%23) `155.9K 🔥`
1. [黄子韬演唱会](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E6%BC%94%E5%94%B1%E4%BC%9A%23) `155.8K 🔥`
1. [王楚钦孙颖莎止步半决赛 (Wang Chuqin and Sun Yingsha stopped in the semi-finals)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E6%AD%A2%E6%AD%A5%E5%8D%8A%E5%86%B3%E8%B5%9B%23) `1.6M 🔥` `-72%`
1. [王俊凯演唱会退场天才](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E9%80%80%E5%9C%BA%E5%A4%A9%E6%89%8D%23) `650.0K 🔥` `-54%`
1. [发现很多KTV都没有MV了](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%BE%88%E5%A4%9AKTV%E9%83%BD%E6%B2%A1%E6%9C%89MV%E4%BA%86%23) `553.9K 🔥` `-39%`
1. [想你了票房倒挂](https://s.weibo.com/weibo?q=%23%E6%83%B3%E4%BD%A0%E4%BA%86%E7%A5%A8%E6%88%BF%E5%80%92%E6%8C%82%23) `382.6K 🔥` `-45%`
1. [上班后消费观突然就变了](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E5%90%8E%E6%B6%88%E8%B4%B9%E8%A7%82%E7%AA%81%E7%84%B6%E5%B0%B1%E5%8F%98%E4%BA%86%23) `217.2K 🔥` `-32%`
1. [上海暴雨 (Heavy rain in Shanghai)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E6%9A%B4%E9%9B%A8%23) `214.1K 🔥` `-35%`
1. [丁程鑫王楚然认识几年了](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E7%8E%8B%E6%A5%9A%E7%84%B6%E8%AE%A4%E8%AF%86%E5%87%A0%E5%B9%B4%E4%BA%86%23) `211.7K 🔥` `-25%`
1. [八仙剧本](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%E5%89%A7%E6%9C%AC%23) `204.1K 🔥` `-44%`
1. [Bin](https://s.weibo.com/weibo?q=%23Bin%23) `176.5K 🔥` `-45%`
1. [警方调查女子称多次被黄总喊去包厢](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E8%B0%83%E6%9F%A5%E5%A5%B3%E5%AD%90%E7%A7%B0%E5%A4%9A%E6%AC%A1%E8%A2%AB%E9%BB%84%E6%80%BB%E5%96%8A%E5%8E%BB%E5%8C%85%E5%8E%A2%23) `171.3K 🔥` `-33%`
1. [孙颖莎逆天救球 (Sun Yingsha makes a defiant save)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E9%80%86%E5%A4%A9%E6%95%91%E7%90%83%23) `167.0K 🔥` `-40%`
1. [龚俊回应和刘宇宁争议](https://s.weibo.com/weibo?q=%23%E9%BE%9A%E4%BF%8A%E5%9B%9E%E5%BA%94%E5%92%8C%E5%88%98%E5%AE%87%E5%AE%81%E4%BA%89%E8%AE%AE%23) `166.9K 🔥` `-40%`
1. [降低身体炎症水平的食物](https://s.weibo.com/weibo?q=%23%E9%99%8D%E4%BD%8E%E8%BA%AB%E4%BD%93%E7%82%8E%E7%97%87%E6%B0%B4%E5%B9%B3%E7%9A%84%E9%A3%9F%E7%89%A9%23) `166.0K 🔥` `-41%`
1. [男子判赔75万后身亡受害者家属崩溃](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%88%A4%E8%B5%9475%E4%B8%87%E5%90%8E%E8%BA%AB%E4%BA%A1%E5%8F%97%E5%AE%B3%E8%80%85%E5%AE%B6%E5%B1%9E%E5%B4%A9%E6%BA%83%23) `158.3K 🔥` `-44%`
1. [女子查出脑垂体瘤却被家人催生三胎 (A woman was diagnosed with a pituitary gland tumor but was forced to have three children by her family)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%9F%A5%E5%87%BA%E8%84%91%E5%9E%82%E4%BD%93%E7%98%A4%E5%8D%B4%E8%A2%AB%E5%AE%B6%E4%BA%BA%E5%82%AC%E7%94%9F%E4%B8%89%E8%83%8E%23) `157.5K 🔥` `-31%`
1. [富人的孩子确实更容易高配得感](https://s.weibo.com/weibo?q=%23%E5%AF%8C%E4%BA%BA%E7%9A%84%E5%AD%A9%E5%AD%90%E7%A1%AE%E5%AE%9E%E6%9B%B4%E5%AE%B9%E6%98%93%E9%AB%98%E9%85%8D%E5%BE%97%E6%84%9F%23) `157.4K 🔥` `-47%`
1. [祖籍广东的泰国总理飙中文](https://s.weibo.com/weibo?q=%23%E7%A5%96%E7%B1%8D%E5%B9%BF%E4%B8%9C%E7%9A%84%E6%B3%B0%E5%9B%BD%E6%80%BB%E7%90%86%E9%A3%99%E4%B8%AD%E6%96%87%23) `157.2K 🔥` `-44%`
1. [八仙票房 (Eight Immortals Box Office)](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%E7%A5%A8%E6%88%BF%23) `156.7K 🔥` `-44%`
1. [马龙许昕晋级四强](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95%E6%99%8B%E7%BA%A7%E5%9B%9B%E5%BC%BA%23) `156.1K 🔥` `-39%`

Updated at 2026-07-19 01:16:04

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
