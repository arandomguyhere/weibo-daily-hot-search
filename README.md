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

1. [150秒透视中国消费市场澎湃活力 (A 150-second insight into the surging vitality of China’s consumer market)](https://s.weibo.com/weibo?q=%23150%E7%A7%92%E9%80%8F%E8%A7%86%E4%B8%AD%E5%9B%BD%E6%B6%88%E8%B4%B9%E5%B8%82%E5%9C%BA%E6%BE%8E%E6%B9%83%E6%B4%BB%E5%8A%9B%23) `150.2K 🔥` `NEW`
1. [杨紫三部热播期后加广的剧集](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E4%B8%89%E9%83%A8%E7%83%AD%E6%92%AD%E6%9C%9F%E5%90%8E%E5%8A%A0%E5%B9%BF%E7%9A%84%E5%89%A7%E9%9B%86%23) `47.7K 🔥` `NEW`
1. [此沙亮相香港金像奖](https://s.weibo.com/weibo?q=%23%E6%AD%A4%E6%B2%99%E4%BA%AE%E7%9B%B8%E9%A6%99%E6%B8%AF%E9%87%91%E5%83%8F%E5%A5%96%23) `39.7K 🔥` `NEW`
1. [鹿晗好尊重本命年](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%A5%BD%E5%B0%8A%E9%87%8D%E6%9C%AC%E5%91%BD%E5%B9%B4%23) `149.6K 🔥` `+35%`
1. [当你有个很会拍的朋友](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BD%A0%E6%9C%89%E4%B8%AA%E5%BE%88%E4%BC%9A%E6%8B%8D%E7%9A%84%E6%9C%8B%E5%8F%8B%23) `81.5K 🔥` `+135%`
1. [东部战区舰艇编队过航横当水道](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%83%A8%E6%88%98%E5%8C%BA%E8%88%B0%E8%89%87%E7%BC%96%E9%98%9F%E8%BF%87%E8%88%AA%E6%A8%AA%E5%BD%93%E6%B0%B4%E9%81%93%23) `80.8K 🔥` `+38%`
1. [zmjjkk长文回复粉丝 (zmjjkk’s long reply to fans)](https://s.weibo.com/weibo?q=%23zmjjkk%E9%95%BF%E6%96%87%E5%9B%9E%E5%A4%8D%E7%B2%89%E4%B8%9D%23) `58.2K 🔥` `+40%`
1. [14天骨盆回正 (Pelvis back into alignment in 14 days)](https://s.weibo.com/weibo?q=%2314%E5%A4%A9%E9%AA%A8%E7%9B%86%E5%9B%9E%E6%AD%A3%23) `43.2K 🔥` `+21%`
1. [2米蟒蛇吞下1只鸡后被卡鸡笼 (2-meter python gets stuck in chicken cage after swallowing a chicken)](https://s.weibo.com/weibo?q=%232%E7%B1%B3%E8%9F%92%E8%9B%87%E5%90%9E%E4%B8%8B1%E5%8F%AA%E9%B8%A1%E5%90%8E%E8%A2%AB%E5%8D%A1%E9%B8%A1%E7%AC%BC%23) `42.9K 🔥` `+21%`
1. [孙颖莎萌萌奔向训练馆](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%90%8C%E8%90%8C%E5%A5%94%E5%90%91%E8%AE%AD%E7%BB%83%E9%A6%86%23) `39.5K 🔥` `+40%`
1. [24岁女子坐6小时赢发呆比赛冠军 (24-year-old woman wins trance competition after sitting for 6 hours)](https://s.weibo.com/weibo?q=%2324%E5%B2%81%E5%A5%B3%E5%AD%90%E5%9D%906%E5%B0%8F%E6%97%B6%E8%B5%A2%E5%8F%91%E5%91%86%E6%AF%94%E8%B5%9B%E5%86%A0%E5%86%9B%23) `38.9K 🔥` `+24%`
1. [金像奖马丽长发港风造型](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%83%8F%E5%A5%96%E9%A9%AC%E4%B8%BD%E9%95%BF%E5%8F%91%E6%B8%AF%E9%A3%8E%E9%80%A0%E5%9E%8B%23) `38.9K 🔥` `+21%`
1. [李小冉唱了一下午](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%94%B1%E4%BA%86%E4%B8%80%E4%B8%8B%E5%8D%88%23) `38.6K 🔥` `+37%`
1. [俞灏明王铮亮陆虎看张杰演唱会](https://s.weibo.com/weibo?q=%23%E4%BF%9E%E7%81%8F%E6%98%8E%E7%8E%8B%E9%93%AE%E4%BA%AE%E9%99%86%E8%99%8E%E7%9C%8B%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%23) `38.5K 🔥` `+21%`
1. [金像奖影后廖子妤 (Academy Award-winning Best Actress Liao Ziyu)](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%83%8F%E5%A5%96%E5%BD%B1%E5%90%8E%E5%BB%96%E5%AD%90%E5%A6%A4%23) `220.9K 🔥`
1. [出门和不出门过的是两种人生 (Going out and not going out are two different lives.)](https://s.weibo.com/weibo?q=%23%E5%87%BA%E9%97%A8%E5%92%8C%E4%B8%8D%E5%87%BA%E9%97%A8%E8%BF%87%E7%9A%84%E6%98%AF%E4%B8%A4%E7%A7%8D%E4%BA%BA%E7%94%9F%23) `158.0K 🔥`
1. [第44届金像奖获奖名单 (List of winners of the 44th Academy Awards)](https://s.weibo.com/weibo?q=%23%E7%AC%AC44%E5%B1%8A%E9%87%91%E5%83%8F%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%23) `115.3K 🔥`
1. [张雪机车第7 (Zhang Xue motorcycle No. 7)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E7%AC%AC7%23) `82.3K 🔥`
1. [张雪机车 (Zhang Xue motorcycle)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%23) `82.1K 🔥`
1. [梁家辉5封金像奖影帝爆哭](https://s.weibo.com/weibo?q=%23%E6%A2%81%E5%AE%B6%E8%BE%895%E5%B0%81%E9%87%91%E5%83%8F%E5%A5%96%E5%BD%B1%E5%B8%9D%E7%88%86%E5%93%AD%23) `81.3K 🔥`
1. [曝李小冉退出浪姐 (It is revealed that Li Xiaoran quits Sister Lang)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%8E%E5%B0%8F%E5%86%89%E9%80%80%E5%87%BA%E6%B5%AA%E5%A7%90%23) `77.4K 🔥`
1. [铁路12306已拒绝出票105.6万张 (Railway 12306 has refused to issue 1.056 million tickets)](https://s.weibo.com/weibo?q=%23%E9%93%81%E8%B7%AF12306%E5%B7%B2%E6%8B%92%E7%BB%9D%E5%87%BA%E7%A5%A8105.6%E4%B8%87%E5%BC%A0%23) `65.4K 🔥`
1. [张雪机车比赛因红旗中断](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%AF%94%E8%B5%9B%E5%9B%A0%E7%BA%A2%E6%97%97%E4%B8%AD%E6%96%AD%23) `58.0K 🔥`
1. [宗师 露脸](https://s.weibo.com/weibo?q=%23%E5%AE%97%E5%B8%88%20%E9%9C%B2%E8%84%B8%23) `43.7K 🔥`
1. [男童被虐待致死凶手看到证据才承认](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%AB%A5%E8%A2%AB%E8%99%90%E5%BE%85%E8%87%B4%E6%AD%BB%E5%87%B6%E6%89%8B%E7%9C%8B%E5%88%B0%E8%AF%81%E6%8D%AE%E6%89%8D%E6%89%BF%E8%AE%A4%23) `42.5K 🔥`
1. [古天乐宣萱 一如既往的般配 (Louis Koo and Xuan Xuan are as good a match as ever)](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E5%A4%A9%E4%B9%90%E5%AE%A3%E8%90%B1%20%E4%B8%80%E5%A6%82%E6%97%A2%E5%BE%80%E7%9A%84%E8%88%AC%E9%85%8D%23) `40.0K 🔥`
1. [24岁女研究生赢发呆比赛冠军 (24-year-old female graduate student wins trance competition)](https://s.weibo.com/weibo?q=%2324%E5%B2%81%E5%A5%B3%E7%A0%94%E7%A9%B6%E7%94%9F%E8%B5%A2%E5%8F%91%E5%91%86%E6%AF%94%E8%B5%9B%E5%86%A0%E5%86%9B%23) `40.0K 🔥`
1. [仙逆](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%23) `39.9K 🔥`
1. [东部战区舰艇编队赴西太海域开展演训](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%83%A8%E6%88%98%E5%8C%BA%E8%88%B0%E8%89%87%E7%BC%96%E9%98%9F%E8%B5%B4%E8%A5%BF%E5%A4%AA%E6%B5%B7%E5%9F%9F%E5%BC%80%E5%B1%95%E6%BC%94%E8%AE%AD%23) `39.9K 🔥`
1. [高中生因操行分不合格等被劝退 (High school students were dismissed due to unsatisfactory conduct scores, etc.)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%AD%E7%94%9F%E5%9B%A0%E6%93%8D%E8%A1%8C%E5%88%86%E4%B8%8D%E5%90%88%E6%A0%BC%E7%AD%89%E8%A2%AB%E5%8A%9D%E9%80%80%23) `39.8K 🔥`
1. [特朗普说若达成协议很可能去伊斯兰堡 (Trump says he may go to Islamabad if deal is reached)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E8%8B%A5%E8%BE%BE%E6%88%90%E5%8D%8F%E8%AE%AE%E5%BE%88%E5%8F%AF%E8%83%BD%E5%8E%BB%E4%BC%8A%E6%96%AF%E5%85%B0%E5%A0%A1%23) `39.7K 🔥`
1. [莱巴金娜斯图加特夺冠](https://s.weibo.com/weibo?q=%23%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%E6%96%AF%E5%9B%BE%E5%8A%A0%E7%89%B9%E5%A4%BA%E5%86%A0%23) `39.6K 🔥`
1. [机器人届也有自己的显眼包](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%B1%8A%E4%B9%9F%E6%9C%89%E8%87%AA%E5%B7%B1%E7%9A%84%E6%98%BE%E7%9C%BC%E5%8C%85%23) `39.6K 🔥`
1. [以色列民众要求内塔尼亚胡政府下台 (Israelis demand Netanyahu government to step down)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%B0%91%E4%BC%97%E8%A6%81%E6%B1%82%E5%86%85%E5%A1%94%E5%B0%BC%E4%BA%9A%E8%83%A1%E6%94%BF%E5%BA%9C%E4%B8%8B%E5%8F%B0%23) `39.4K 🔥`
1. [金像奖影帝梁家辉 (Hong Kong Film Awards Best Actor Tony Leung Ka Fai)](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%83%8F%E5%A5%96%E5%BD%B1%E5%B8%9D%E6%A2%81%E5%AE%B6%E8%BE%89%23) `39.4K 🔥`
1. [第五人格赛事](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%E8%B5%9B%E4%BA%8B%23) `39.3K 🔥`
1. [金像奖 (Academy Awards)](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%83%8F%E5%A5%96%23) `39.3K 🔥`
1. [张杰鸟巢唱完大庆功 (Zhang Jie finished singing in the Bird's Nest to celebrate)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E9%B8%9F%E5%B7%A2%E5%94%B1%E5%AE%8C%E5%A4%A7%E5%BA%86%E5%8A%9F%23) `39.2K 🔥`
1. [姜涛瘦了很多](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E6%B6%9B%E7%98%A6%E4%BA%86%E5%BE%88%E5%A4%9A%23) `39.1K 🔥`
1. [广州暹岗大山遭人私挖水晶破坏 (Siamggang Mountain in Guangzhou was damaged by illegal crystal digging)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E6%9A%B9%E5%B2%97%E5%A4%A7%E5%B1%B1%E9%81%AD%E4%BA%BA%E7%A7%81%E6%8C%96%E6%B0%B4%E6%99%B6%E7%A0%B4%E5%9D%8F%23) `39.1K 🔥`
1. [金莎晒婚服](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E6%99%92%E5%A9%9A%E6%9C%8D%23) `39.0K 🔥`
1. [陈法拉金像奖红毯状态](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B3%95%E6%8B%89%E9%87%91%E5%83%8F%E5%A5%96%E7%BA%A2%E6%AF%AF%E7%8A%B6%E6%80%81%23) `38.8K 🔥`
1. [3000万粉主播称家中失窃300万 (Anchor with 30 million fans claimed that 3 million was stolen from his home)](https://s.weibo.com/weibo?q=%233000%E4%B8%87%E7%B2%89%E4%B8%BB%E6%92%AD%E7%A7%B0%E5%AE%B6%E4%B8%AD%E5%A4%B1%E7%AA%83300%E4%B8%87%23) `38.8K 🔥`
1. [小米徐洁云喊话造谣者](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%BE%90%E6%B4%81%E4%BA%91%E5%96%8A%E8%AF%9D%E9%80%A0%E8%B0%A3%E8%80%85%23) `38.7K 🔥`
1. [金莎晒结婚五金 (Jinsha sun wedding hardware)](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E6%99%92%E7%BB%93%E5%A9%9A%E4%BA%94%E9%87%91%23) `150.1K 🔥` `-23%`
1. [豆包变豆脚了](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%8F%98%E8%B1%86%E8%84%9A%E4%BA%86%23) `82.7K 🔥` `-21%`
1. [曼城vs阿森纳 (Manchester City vs Arsenal)](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E5%9F%8Evs%E9%98%BF%E6%A3%AE%E7%BA%B3%23) `52.7K 🔥` `-48%`
1. [谢娜上张杰鸟巢演唱会小火车](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E4%B8%8A%E5%BC%A0%E6%9D%B0%E9%B8%9F%E5%B7%A2%E6%BC%94%E5%94%B1%E4%BC%9A%E5%B0%8F%E7%81%AB%E8%BD%A6%23) `48.9K 🔥` `-30%`
1. [河南三地巨额数据造假25人被问责](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%89%E5%9C%B0%E5%B7%A8%E9%A2%9D%E6%95%B0%E6%8D%AE%E9%80%A0%E5%81%8725%E4%BA%BA%E8%A2%AB%E9%97%AE%E8%B4%A3%23) `38.7K 🔥` `-55%`

Updated at 2026-04-20 05:47:42

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
