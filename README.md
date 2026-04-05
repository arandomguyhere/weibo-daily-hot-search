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

1. [王楚钦夺冠 (Wang Chuqin won the championship)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%A4%BA%E5%86%A0%23) `8.1M 🔥` `NEW`
1. [白宫回应特朗普病重住院传闻](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%AE%AB%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE%E7%97%85%E9%87%8D%E4%BD%8F%E9%99%A2%E4%BC%A0%E9%97%BB%23) `338.0K 🔥` `NEW`
1. [王楚钦松岛辉空大爆分](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%E5%A4%A7%E7%88%86%E5%88%86%23) `329.7K 🔥` `NEW`
1. [郑州地铁部分站台被指光线昏暗](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%B7%9E%E5%9C%B0%E9%93%81%E9%83%A8%E5%88%86%E7%AB%99%E5%8F%B0%E8%A2%AB%E6%8C%87%E5%85%89%E7%BA%BF%E6%98%8F%E6%9A%97%23) `276.1K 🔥` `NEW`
1. [王楚钦这一球全体起立](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%BF%99%E4%B8%80%E7%90%83%E5%85%A8%E4%BD%93%E8%B5%B7%E7%AB%8B%23) `249.5K 🔥` `NEW`
1. [王楚钦澳门世界杯首冠](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%BE%B3%E9%97%A8%E4%B8%96%E7%95%8C%E6%9D%AF%E9%A6%96%E5%86%A0%23) `215.5K 🔥` `NEW`
1. [kspo栏杆](https://s.weibo.com/weibo?q=%23kspo%E6%A0%8F%E6%9D%86%23) `208.9K 🔥` `NEW`
1. [AG纪录片](https://s.weibo.com/weibo?q=%23AG%E7%BA%AA%E5%BD%95%E7%89%87%23) `200.1K 🔥` `NEW`
1. [Tian哭了](https://s.weibo.com/weibo?q=%23Tian%E5%93%AD%E4%BA%86%23) `182.6K 🔥` `NEW`
1. [孙颖莎直接回答英文提问](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%9B%B4%E6%8E%A5%E5%9B%9E%E7%AD%94%E8%8B%B1%E6%96%87%E6%8F%90%E9%97%AE%23) `176.5K 🔥` `NEW`
1. [王楚钦赢下关键分松岛辉空气的跺脚 (Wang Chuqin won the key points and Matsushima Teru's stomping in the air)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%B5%A2%E4%B8%8B%E5%85%B3%E9%94%AE%E5%88%86%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%E6%B0%94%E7%9A%84%E8%B7%BA%E8%84%9A%23) `165.3K 🔥` `NEW`
1. [孙颖莎说世乒赛是今年最重要的比赛](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%AF%B4%E4%B8%96%E4%B9%92%E8%B5%9B%E6%98%AF%E4%BB%8A%E5%B9%B4%E6%9C%80%E9%87%8D%E8%A6%81%E7%9A%84%E6%AF%94%E8%B5%9B%23) `164.3K 🔥` `NEW`
1. [年轻人扫墓主打一个祭品硬核](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E6%89%AB%E5%A2%93%E4%B8%BB%E6%89%93%E4%B8%80%E4%B8%AA%E7%A5%AD%E5%93%81%E7%A1%AC%E6%A0%B8%23) `149.8K 🔥` `NEW`
1. [中国奥委会祝贺王楚钦世界杯夺冠](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%A5%E5%A7%94%E4%BC%9A%E7%A5%9D%E8%B4%BA%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%B8%96%E7%95%8C%E6%9D%AF%E5%A4%BA%E5%86%A0%23) `146.6K 🔥` `NEW`
1. [白玉兰方否认网传名单](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E6%96%B9%E5%90%A6%E8%AE%A4%E7%BD%91%E4%BC%A0%E5%90%8D%E5%8D%95%23) `139.8K 🔥` `NEW`
1. [博物馆回应曹操墓前摆满布洛芬](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E7%89%A9%E9%A6%86%E5%9B%9E%E5%BA%94%E6%9B%B9%E6%93%8D%E5%A2%93%E5%89%8D%E6%91%86%E6%BB%A1%E5%B8%83%E6%B4%9B%E8%8A%AC%23) `134.5K 🔥` `NEW`
1. [迪士尼入园排队3公里](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E5%A3%AB%E5%B0%BC%E5%85%A5%E5%9B%AD%E6%8E%92%E9%98%9F3%E5%85%AC%E9%87%8C%23) `111.9K 🔥` `NEW`
1. [王楚钦11比4松岛辉空](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A611%E6%AF%944%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%23) `110.7K 🔥` `NEW`
1. [AL被TES横扫](https://s.weibo.com/weibo?q=%23AL%E8%A2%ABTES%E6%A8%AA%E6%89%AB%23) `109.0K 🔥` `NEW`
1. [三代人同框敬礼祭奠先烈](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BB%A3%E4%BA%BA%E5%90%8C%E6%A1%86%E6%95%AC%E7%A4%BC%E7%A5%AD%E5%A5%A0%E5%85%88%E7%83%88%23) `1.3M 🔥` `+65%`
1. [周杰伦3小时演唱会实唱不足90分钟 (Jay Chou's 3-hour concert actually performed for less than 90 minutes)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A63%E5%B0%8F%E6%97%B6%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%9E%E5%94%B1%E4%B8%8D%E8%B6%B390%E5%88%86%E9%92%9F%23) `1.2M 🔥` `+1075%`
1. [孙怡浪姐把脚踩在椅子上](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E6%B5%AA%E5%A7%90%E6%8A%8A%E8%84%9A%E8%B8%A9%E5%9C%A8%E6%A4%85%E5%AD%90%E4%B8%8A%23) `730.4K 🔥` `+321%`
1. [孙颖莎冠军 (Sun Yingsha champion)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%86%A0%E5%86%9B%23) `718.8K 🔥` `+30%`
1. [孙颖莎填补长达53年空白](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%A1%AB%E8%A1%A5%E9%95%BF%E8%BE%BE53%E5%B9%B4%E7%A9%BA%E7%99%BD%23) `439.0K 🔥` `+160%`
1. [黄晓明已去交警部门接受处罚](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E5%B7%B2%E5%8E%BB%E4%BA%A4%E8%AD%A6%E9%83%A8%E9%97%A8%E6%8E%A5%E5%8F%97%E5%A4%84%E7%BD%9A%23) `334.5K 🔥` `+28%`
1. [新加坡偶遇唐嫣罗晋一家三口](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8A%A0%E5%9D%A1%E5%81%B6%E9%81%87%E5%94%90%E5%AB%A3%E7%BD%97%E6%99%8B%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%23) `321.2K 🔥` `+29%`
1. [陈赫女儿是鹿晗干女儿](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E5%A5%B3%E5%84%BF%E6%98%AF%E9%B9%BF%E6%99%97%E5%B9%B2%E5%A5%B3%E5%84%BF%23) `307.7K 🔥` `+38%`
1. [美炸毁2架执行救援故障运输机](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%82%B8%E6%AF%812%E6%9E%B6%E6%89%A7%E8%A1%8C%E6%95%91%E6%8F%B4%E6%95%85%E9%9A%9C%E8%BF%90%E8%BE%93%E6%9C%BA%23) `300.0K 🔥` `+27%`
1. [谢娜抚养权判给谁了 (Who was awarded the custody of Xie Na?)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%8A%9A%E5%85%BB%E6%9D%83%E5%88%A4%E7%BB%99%E8%B0%81%E4%BA%86%23) `298.1K 🔥` `+40%`
1. [撒贝宁 章子怡](https://s.weibo.com/weibo?q=%23%E6%92%92%E8%B4%9D%E5%AE%81%20%E7%AB%A0%E5%AD%90%E6%80%A1%23) `275.9K 🔥` `+49%`
1. [女生托闺蜜照顾5只猫不料全被饿死](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E6%89%98%E9%97%BA%E8%9C%9C%E7%85%A7%E9%A1%BE5%E5%8F%AA%E7%8C%AB%E4%B8%8D%E6%96%99%E5%85%A8%E8%A2%AB%E9%A5%BF%E6%AD%BB%23) `257.8K 🔥` `+38%`
1. [王楚钦vs松岛辉空 (Wang Chuqin vs. Matsushima Terukong)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%23) `2.0M 🔥`
1. [孙颖莎创造历史](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%88%9B%E9%80%A0%E5%8E%86%E5%8F%B2%23) `406.2K 🔥`
1. [SEVENTEEN全员续约 (All SEVENTEEN members renew their contracts)](https://s.weibo.com/weibo?q=%23SEVENTEEN%E5%85%A8%E5%91%98%E7%BB%AD%E7%BA%A6%23) `280.3K 🔥`
1. [AG对战KSG (AG vs. KSG)](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98KSG%23) `208.5K 🔥`
1. [孙俪回应梅婷发文](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E5%9B%9E%E5%BA%94%E6%A2%85%E5%A9%B7%E5%8F%91%E6%96%87%23) `184.7K 🔥`
1. [200万火锅店营业额990 (2 million hot pot restaurant turnover 990)](https://s.weibo.com/weibo?q=%23200%E4%B8%87%E7%81%AB%E9%94%85%E5%BA%97%E8%90%A5%E4%B8%9A%E9%A2%9D990%23) `180.5K 🔥`
1. [食客拆台莫氏鸡煲鸡带毛冷冻 (Diners take issue with Moh's Chicken Claypot Chicken Frozen with Feathers)](https://s.weibo.com/weibo?q=%23%E9%A3%9F%E5%AE%A2%E6%8B%86%E5%8F%B0%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E9%B8%A1%E5%B8%A6%E6%AF%9B%E5%86%B7%E5%86%BB%23) `163.7K 🔥`
1. [游客滞留玉龙雪山山顶致呕吐失温](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E5%AE%A2%E6%BB%9E%E7%95%99%E7%8E%89%E9%BE%99%E9%9B%AA%E5%B1%B1%E5%B1%B1%E9%A1%B6%E8%87%B4%E5%91%95%E5%90%90%E5%A4%B1%E6%B8%A9%23) `160.0K 🔥`
1. [女子长期虐待2岁儿子还拍视频](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%95%BF%E6%9C%9F%E8%99%90%E5%BE%852%E5%B2%81%E5%84%BF%E5%AD%90%E8%BF%98%E6%8B%8D%E8%A7%86%E9%A2%91%23) `159.0K 🔥`
1. [王楚钦18比16松岛辉空](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A618%E6%AF%9416%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%23) `153.6K 🔥`
1. [缓解内耗的解药](https://s.weibo.com/weibo?q=%23%E7%BC%93%E8%A7%A3%E5%86%85%E8%80%97%E7%9A%84%E8%A7%A3%E8%8D%AF%23) `142.1K 🔥`
1. [郭艾伦被诈骗近千万 (Guo Ailun was defrauded of nearly 10 million yuan)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E8%89%BE%E4%BC%A6%E8%A2%AB%E8%AF%88%E9%AA%97%E8%BF%91%E5%8D%83%E4%B8%87%23) `1.1M 🔥` `-30%`
1. [妈妈不知儿子去世跟AI儿子聊了1年](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E4%B8%8D%E7%9F%A5%E5%84%BF%E5%AD%90%E5%8E%BB%E4%B8%96%E8%B7%9FAI%E5%84%BF%E5%AD%90%E8%81%8A%E4%BA%861%E5%B9%B4%23) `344.8K 🔥` `-24%`
1. [李小冉我P都不敢P这么白](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E6%88%91P%E9%83%BD%E4%B8%8D%E6%95%A2P%E8%BF%99%E4%B9%88%E7%99%BD%23) `333.4K 🔥` `-56%`
1. [王楚钦9比11松岛辉空](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A69%E6%AF%9411%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%23) `172.0K 🔥` `-70%`
1. [AL对战TES](https://s.weibo.com/weibo?q=%23AL%E5%AF%B9%E6%88%98TES%23) `156.0K 🔥` `-42%`
1. [TES举报宁王 (TES reports King Ning)](https://s.weibo.com/weibo?q=%23TES%E4%B8%BE%E6%8A%A5%E5%AE%81%E7%8E%8B%23) `132.8K 🔥` `-53%`
1. [黄晓明就带娃骑行道歉 (Huang Xiaoming apologizes for riding with baby)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E5%B0%B1%E5%B8%A6%E5%A8%83%E9%AA%91%E8%A1%8C%E9%81%93%E6%AD%89%23) `112.5K 🔥` `-28%`
1. [曝姐姐们集体抗议浪姐直播 (It was revealed that the sisters collectively protested against Sister Lang’s live broadcast)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%A7%90%E5%A7%90%E4%BB%AC%E9%9B%86%E4%BD%93%E6%8A%97%E8%AE%AE%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%23) `110.2K 🔥` `-27%`

Updated at 2026-04-05 22:49:51

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
