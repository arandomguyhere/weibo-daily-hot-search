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

1. [微信转账加一个动作](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%BD%AC%E8%B4%A6%E5%8A%A0%E4%B8%80%E4%B8%AA%E5%8A%A8%E4%BD%9C%23) `1.9M 🔥` `NEW`
1. [美公务机坠毁致9死](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%85%AC%E5%8A%A1%E6%9C%BA%E5%9D%A0%E6%AF%81%E8%87%B49%E6%AD%BB%23) `936.3K 🔥` `NEW`
1. [曝王子璇最终选择不和好](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E5%AD%90%E7%92%87%E6%9C%80%E7%BB%88%E9%80%89%E6%8B%A9%E4%B8%8D%E5%92%8C%E5%A5%BD%23) `765.0K 🔥` `NEW`
1. [罗技跟用户干上了](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%8A%80%E8%B7%9F%E7%94%A8%E6%88%B7%E5%B9%B2%E4%B8%8A%E4%BA%86%23) `760.5K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `599.3K 🔥` `NEW`
1. [白象29周年收到孙颖莎的祝福](https://s.weibo.com/weibo?q=%23%E7%99%BD%E8%B1%A129%E5%91%A8%E5%B9%B4%E6%94%B6%E5%88%B0%E5%AD%99%E9%A2%96%E8%8E%8E%E7%9A%84%E7%A5%9D%E7%A6%8F%23) `579.5K 🔥` `NEW`
1. [许飞厉娜 感谢我的人生你曾出现过](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E5%8E%89%E5%A8%9C%20%E6%84%9F%E8%B0%A2%E6%88%91%E7%9A%84%E4%BA%BA%E7%94%9F%E4%BD%A0%E6%9B%BE%E5%87%BA%E7%8E%B0%E8%BF%87%23) `542.7K 🔥` `NEW`
1. [张禹珍鼓掌祝贺孙颖莎](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%A6%B9%E7%8F%8D%E9%BC%93%E6%8E%8C%E7%A5%9D%E8%B4%BA%E5%AD%99%E9%A2%96%E8%8E%8E%23) `381.0K 🔥` `NEW`
1. [台媒劝少看红果短剧反被喷](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E5%AA%92%E5%8A%9D%E5%B0%91%E7%9C%8B%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E5%8F%8D%E8%A2%AB%E5%96%B7%23) `360.7K 🔥` `NEW`
1. [电诈团伙已转移到非洲](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%AF%88%E5%9B%A2%E4%BC%99%E5%B7%B2%E8%BD%AC%E7%A7%BB%E5%88%B0%E9%9D%9E%E6%B4%B2%23) `359.1K 🔥` `NEW`
1. [曝厉娜许飞都选择不和好](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8E%89%E5%A8%9C%E8%AE%B8%E9%A3%9E%E9%83%BD%E9%80%89%E6%8B%A9%E4%B8%8D%E5%92%8C%E5%A5%BD%23) `355.8K 🔥` `NEW`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `354.7K 🔥` `NEW`
1. [金价大跌白银价格腰斩](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%A4%A7%E8%B7%8C%E7%99%BD%E9%93%B6%E4%BB%B7%E6%A0%BC%E8%85%B0%E6%96%A9%23) `353.2K 🔥` `NEW`
1. [林一跟刘亦菲打招呼后的反应](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%B8%80%E8%B7%9F%E5%88%98%E4%BA%A6%E8%8F%B2%E6%89%93%E6%8B%9B%E5%91%BC%E5%90%8E%E7%9A%84%E5%8F%8D%E5%BA%94%23) `351.7K 🔥` `NEW`
1. [上海佛教信徒放生大闸蟹](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%BD%9B%E6%95%99%E4%BF%A1%E5%BE%92%E6%94%BE%E7%94%9F%E5%A4%A7%E9%97%B8%E8%9F%B9%23) `347.6K 🔥` `NEW`
1. [杨汝晴侯卓成分手前共同买了一套房](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B1%9D%E6%99%B4%E4%BE%AF%E5%8D%93%E6%88%90%E5%88%86%E6%89%8B%E5%89%8D%E5%85%B1%E5%90%8C%E4%B9%B0%E4%BA%86%E4%B8%80%E5%A5%97%E6%88%BF%23) `344.4K 🔥` `NEW`
1. [美飞机坠毁致9死现场曝光](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E9%A3%9E%E6%9C%BA%E5%9D%A0%E6%AF%81%E8%87%B49%E6%AD%BB%E7%8E%B0%E5%9C%BA%E6%9B%9D%E5%85%89%23) `343.0K 🔥` `NEW`
1. [孙颖莎调皮一下](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%B0%83%E7%9A%AE%E4%B8%80%E4%B8%8B%23) `333.0K 🔥` `NEW`
1. [迪丽热巴这套造型至今无人超越](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%99%E5%A5%97%E9%80%A0%E5%9E%8B%E8%87%B3%E4%BB%8A%E6%97%A0%E4%BA%BA%E8%B6%85%E8%B6%8A%23) `329.7K 🔥` `NEW`
1. [美一飞机坠毁女飞行员求救录音曝光](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%B8%80%E9%A3%9E%E6%9C%BA%E5%9D%A0%E6%AF%81%E5%A5%B3%E9%A3%9E%E8%A1%8C%E5%91%98%E6%B1%82%E6%95%91%E5%BD%95%E9%9F%B3%E6%9B%9D%E5%85%89%23) `324.0K 🔥` `NEW`
1. [电诈园区从柬埔寨转移到马达加斯加](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%AF%88%E5%9B%AD%E5%8C%BA%E4%BB%8E%E6%9F%AC%E5%9F%94%E5%AF%A8%E8%BD%AC%E7%A7%BB%E5%88%B0%E9%A9%AC%E8%BE%BE%E5%8A%A0%E6%96%AF%E5%8A%A0%23) `314.2K 🔥` `NEW`
1. [美坠机地面约600人疏散](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9D%A0%E6%9C%BA%E5%9C%B0%E9%9D%A2%E7%BA%A6600%E4%BA%BA%E7%96%8F%E6%95%A3%23) `304.4K 🔥` `NEW`
1. [罗技广告再被指侮辱用户](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%8A%80%E5%B9%BF%E5%91%8A%E5%86%8D%E8%A2%AB%E6%8C%87%E4%BE%AE%E8%BE%B1%E7%94%A8%E6%88%B7%23) `276.0K 🔥` `NEW`
1. [曝白小纯青稚和好](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BD%E5%B0%8F%E7%BA%AF%E9%9D%92%E7%A8%9A%E5%92%8C%E5%A5%BD%23) `257.7K 🔥` `NEW`
1. [想阴阳中国结果AI说是美国](https://s.weibo.com/weibo?q=%23%E6%83%B3%E9%98%B4%E9%98%B3%E4%B8%AD%E5%9B%BD%E7%BB%93%E6%9E%9CAI%E8%AF%B4%E6%98%AF%E7%BE%8E%E5%9B%BD%23) `240.2K 🔥` `NEW`
1. [易梦玲真的太听劝了](https://s.weibo.com/weibo?q=%23%E6%98%93%E6%A2%A6%E7%8E%B2%E7%9C%9F%E7%9A%84%E5%A4%AA%E5%90%AC%E5%8A%9D%E4%BA%86%23) `227.0K 🔥` `NEW`
1. [周深把黄明昊认成蔡徐坤](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E6%8A%8A%E9%BB%84%E6%98%8E%E6%98%8A%E8%AE%A4%E6%88%90%E8%94%A1%E5%BE%90%E5%9D%A4%23) `217.1K 🔥` `NEW`
1. [质疑假院士水货后对方找上门](https://s.weibo.com/weibo?q=%23%E8%B4%A8%E7%96%91%E5%81%87%E9%99%A2%E5%A3%AB%E6%B0%B4%E8%B4%A7%E5%90%8E%E5%AF%B9%E6%96%B9%E6%89%BE%E4%B8%8A%E9%97%A8%23) `210.0K 🔥` `NEW`
1. [我画地为牢啊沈月](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%94%BB%E5%9C%B0%E4%B8%BA%E7%89%A2%E5%95%8A%E6%B2%88%E6%9C%88%23) `202.4K 🔥` `NEW`
1. [85花婚纱造型](https://s.weibo.com/weibo?q=%2385%E8%8A%B1%E5%A9%9A%E7%BA%B1%E9%80%A0%E5%9E%8B%23) `186.9K 🔥` `NEW`
1. [整个内娱都在画地为牢](https://s.weibo.com/weibo?q=%23%E6%95%B4%E4%B8%AA%E5%86%85%E5%A8%B1%E9%83%BD%E5%9C%A8%E7%94%BB%E5%9C%B0%E4%B8%BA%E7%89%A2%23) `185.3K 🔥` `NEW`
1. [孙颖莎退赛法兰克福站](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E9%80%80%E8%B5%9B%E6%B3%95%E5%85%B0%E5%85%8B%E7%A6%8F%E7%AB%99%23) `182.0K 🔥` `NEW`
1. [文吉儿疑女承母业](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%90%89%E5%84%BF%E7%96%91%E5%A5%B3%E6%89%BF%E6%AF%8D%E4%B8%9A%23) `177.8K 🔥` `NEW`
1. [迪丽热巴的造型没有瓶颈期吗](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9A%84%E9%80%A0%E5%9E%8B%E6%B2%A1%E6%9C%89%E7%93%B6%E9%A2%88%E6%9C%9F%E5%90%97%23) `171.0K 🔥` `NEW`
1. [青海大通县通报压路机致人身亡事故](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%B5%B7%E5%A4%A7%E9%80%9A%E5%8E%BF%E9%80%9A%E6%8A%A5%E5%8E%8B%E8%B7%AF%E6%9C%BA%E8%87%B4%E4%BA%BA%E8%BA%AB%E4%BA%A1%E4%BA%8B%E6%95%85%23) `170.2K 🔥` `NEW`
1. [Viper称队内沟通问题还没完全解决](https://s.weibo.com/weibo?q=%23Viper%E7%A7%B0%E9%98%9F%E5%86%85%E6%B2%9F%E9%80%9A%E9%97%AE%E9%A2%98%E8%BF%98%E6%B2%A1%E5%AE%8C%E5%85%A8%E8%A7%A3%E5%86%B3%23) `161.5K 🔥` `NEW`
1. [今年乌镇峰会首次向社会开放预约](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E4%B9%8C%E9%95%87%E5%B3%B0%E4%BC%9A%E9%A6%96%E6%AC%A1%E5%90%91%E7%A4%BE%E4%BC%9A%E5%BC%80%E6%94%BE%E9%A2%84%E7%BA%A6%23) `808.5K 🔥` `+110%`
1. [中国女生借卫生巾震撼外国网友](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E5%80%9F%E5%8D%AB%E7%94%9F%E5%B7%BE%E9%9C%87%E6%92%BC%E5%A4%96%E5%9B%BD%E7%BD%91%E5%8F%8B%23) `357.8K 🔥` `+247%`
1. [马天宇张萌 和好](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E5%BC%A0%E8%90%8C%20%E5%92%8C%E5%A5%BD%23) `346.5K 🔥` `+67%`
1. [胡歌自曝身边好友陆续因心梗离世](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%AD%8C%E8%87%AA%E6%9B%9D%E8%BA%AB%E8%BE%B9%E5%A5%BD%E5%8F%8B%E9%99%86%E7%BB%AD%E5%9B%A0%E5%BF%83%E6%A2%97%E7%A6%BB%E4%B8%96%23) `337.7K 🔥` `+77%`
1. [林一看到穿婚纱的刘亦菲了](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%B8%80%E7%9C%8B%E5%88%B0%E7%A9%BF%E5%A9%9A%E7%BA%B1%E7%9A%84%E5%88%98%E4%BA%A6%E8%8F%B2%E4%BA%86%23) `295.0K 🔥` `+190%`
1. [财务误发5000元工资给离职员工遭拒还](https://s.weibo.com/weibo?q=%23%E8%B4%A2%E5%8A%A1%E8%AF%AF%E5%8F%915000%E5%85%83%E5%B7%A5%E8%B5%84%E7%BB%99%E7%A6%BB%E8%81%8C%E5%91%98%E5%B7%A5%E9%81%AD%E6%8B%92%E8%BF%98%23) `269.6K 🔥` `+328%`
1. [晕碳两个字震惊日本人](https://s.weibo.com/weibo?q=%23%E6%99%95%E7%A2%B3%E4%B8%A4%E4%B8%AA%E5%AD%97%E9%9C%87%E6%83%8A%E6%97%A5%E6%9C%AC%E4%BA%BA%23) `268.3K 🔥` `+299%`
1. [画地为牢](https://s.weibo.com/weibo?q=%23%E7%94%BB%E5%9C%B0%E4%B8%BA%E7%89%A2%23) `181.0K 🔥` `+76%`
1. [喜欢吃烤红薯的人天塌了](https://s.weibo.com/weibo?q=%23%E5%96%9C%E6%AC%A2%E5%90%83%E7%83%A4%E7%BA%A2%E8%96%AF%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `174.0K 🔥` `+156%`
1. [侯卓成 杨汝晴](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E5%8D%93%E6%88%90%20%E6%9D%A8%E6%B1%9D%E6%99%B4%23) `161.5K 🔥` `+236%`
1. [刘冲可以放心睡觉了](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%86%B2%E5%8F%AF%E4%BB%A5%E6%94%BE%E5%BF%83%E7%9D%A1%E8%A7%89%E4%BA%86%23) `160.3K 🔥` `+135%`
1. [原来冬天不是穿的越多越暖和](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%86%AC%E5%A4%A9%E4%B8%8D%E6%98%AF%E7%A9%BF%E7%9A%84%E8%B6%8A%E5%A4%9A%E8%B6%8A%E6%9A%96%E5%92%8C%23) `143.2K 🔥` `+45%`
1. [吴磊婉拒蔡徐坤](https://s.weibo.com/weibo?q=%23%E5%90%B4%E7%A3%8A%E5%A9%89%E6%8B%92%E8%94%A1%E5%BE%90%E5%9D%A4%23) `349.2K 🔥`
1. [85花很刻意避免同台了](https://s.weibo.com/weibo?q=%2385%E8%8A%B1%E5%BE%88%E5%88%BB%E6%84%8F%E9%81%BF%E5%85%8D%E5%90%8C%E5%8F%B0%E4%BA%86%23) `339.9K 🔥` `-30%`
1. [孙颖莎夺冠后比1庆祝](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%A4%BA%E5%86%A0%E5%90%8E%E6%AF%941%E5%BA%86%E7%A5%9D%23) `232.3K 🔥` `-32%`

Updated at 2026-11-02 10:20:35

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
