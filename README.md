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

1. [中国式支付圈粉全球 (Chinese payment attracts global fans)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%BC%8F%E6%94%AF%E4%BB%98%E5%9C%88%E7%B2%89%E5%85%A8%E7%90%83%23) `678.9K 🔥` `NEW`
1. [京东健康送免单 刘涛同款诺特兰德](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E5%81%A5%E5%BA%B7%E9%80%81%E5%85%8D%E5%8D%95%20%E5%88%98%E6%B6%9B%E5%90%8C%E6%AC%BE%E8%AF%BA%E7%89%B9%E5%85%B0%E5%BE%B7%23) `434.9K 🔥` `NEW`
1. [樊振东晋级欧冠决赛](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%99%8B%E7%BA%A7%E6%AC%A7%E5%86%A0%E5%86%B3%E8%B5%9B%23) `340.7K 🔥` `NEW`
1. [苏超](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `340.6K 🔥` `NEW`
1. [德国跨国迷奸案](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E8%B7%A8%E5%9B%BD%E8%BF%B7%E5%A5%B8%E6%A1%88%23) `339.4K 🔥` `NEW`
1. [网传三大运营商即将免月租是真的吗](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E4%B8%89%E5%A4%A7%E8%BF%90%E8%90%A5%E5%95%86%E5%8D%B3%E5%B0%86%E5%85%8D%E6%9C%88%E7%A7%9F%E6%98%AF%E7%9C%9F%E7%9A%84%E5%90%97%23) `339.2K 🔥` `NEW`
1. [刘浩存忆秦娥长大转场](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E5%BF%86%E7%A7%A6%E5%A8%A5%E9%95%BF%E5%A4%A7%E8%BD%AC%E5%9C%BA%23) `339.0K 🔥` `NEW`
1. [黄仁勋说没有任何工作我看不上](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E8%AF%B4%E6%B2%A1%E6%9C%89%E4%BB%BB%E4%BD%95%E5%B7%A5%E4%BD%9C%E6%88%91%E7%9C%8B%E4%B8%8D%E4%B8%8A%23) `338.7K 🔥` `NEW`
1. [红霉素软膏绝不能随便用](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E9%9C%89%E7%B4%A0%E8%BD%AF%E8%86%8F%E7%BB%9D%E4%B8%8D%E8%83%BD%E9%9A%8F%E4%BE%BF%E7%94%A8%23) `338.6K 🔥` `NEW`
1. [郑州一火锅店露天洗菜做饭如调色盘](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%B7%9E%E4%B8%80%E7%81%AB%E9%94%85%E5%BA%97%E9%9C%B2%E5%A4%A9%E6%B4%97%E8%8F%9C%E5%81%9A%E9%A5%AD%E5%A6%82%E8%B0%83%E8%89%B2%E7%9B%98%23) `338.4K 🔥` `NEW`
1. [白鹿经典露齿笑 (White deer classic toothy smile)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%BB%8F%E5%85%B8%E9%9C%B2%E9%BD%BF%E7%AC%91%23) `338.2K 🔥` `NEW`
1. [韩红基金会明星捐款名单](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BA%A2%E5%9F%BA%E9%87%91%E4%BC%9A%E6%98%8E%E6%98%9F%E6%8D%90%E6%AC%BE%E5%90%8D%E5%8D%95%23) `337.4K 🔥` `NEW`
1. [给阿嬷的情书最终票房或近20亿](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E6%9C%80%E7%BB%88%E7%A5%A8%E6%88%BF%E6%88%96%E8%BF%9120%E4%BA%BF%23) `262.0K 🔥` `NEW`
1. [主角 反套路](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%20%E5%8F%8D%E5%A5%97%E8%B7%AF%23) `249.1K 🔥` `NEW`
1. [德比斯说感谢张雪机车](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E6%AF%94%E6%96%AF%E8%AF%B4%E6%84%9F%E8%B0%A2%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%23) `247.5K 🔥` `NEW`
1. [万千惠说我的人气太低了](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%83%A0%E8%AF%B4%E6%88%91%E7%9A%84%E4%BA%BA%E6%B0%94%E5%A4%AA%E4%BD%8E%E4%BA%86%23) `245.0K 🔥` `NEW`
1. [主角](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `205.4K 🔥` `NEW`
1. [清华女博士丈夫雇人抢走2岁半儿子](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8D%8E%E5%A5%B3%E5%8D%9A%E5%A3%AB%E4%B8%88%E5%A4%AB%E9%9B%87%E4%BA%BA%E6%8A%A2%E8%B5%B02%E5%B2%81%E5%8D%8A%E5%84%BF%E5%AD%90%23) `200.9K 🔥` `NEW`
1. [你好星期六](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%23) `198.6K 🔥` `NEW`
1. [陈立农澳门演唱会嘉宾](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%AB%8B%E5%86%9C%E6%BE%B3%E9%97%A8%E6%BC%94%E5%94%B1%E4%BC%9A%E5%98%89%E5%AE%BE%23) `193.8K 🔥` `NEW`
1. [张雪喊话德比斯培养一个中国车手 (Zhang Xue calls on Derby to train a Chinese driver)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%96%8A%E8%AF%9D%E5%BE%B7%E6%AF%94%E6%96%AF%E5%9F%B9%E5%85%BB%E4%B8%80%E4%B8%AA%E4%B8%AD%E5%9B%BD%E8%BD%A6%E6%89%8B%23) `188.1K 🔥` `NEW`
1. [张雪机车身后4台雅马哈](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E8%BA%AB%E5%90%8E4%E5%8F%B0%E9%9B%85%E9%A9%AC%E5%93%88%23) `184.1K 🔥` `NEW`
1. [穆祉丞出发戛纳电影节](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E5%87%BA%E5%8F%91%E6%88%9B%E7%BA%B3%E7%94%B5%E5%BD%B1%E8%8A%82%23) `162.1K 🔥` `NEW`
1. [103号汽油](https://s.weibo.com/weibo?q=%23103%E5%8F%B7%E6%B1%BD%E6%B2%B9%23) `149.7K 🔥` `NEW`
1. [网传歌手2026补位](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%AD%8C%E6%89%8B2026%E8%A1%A5%E4%BD%8D%23) `148.0K 🔥` `NEW`
1. [全山东最重视山姆超市之人](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%B1%B1%E4%B8%9C%E6%9C%80%E9%87%8D%E8%A7%86%E5%B1%B1%E5%A7%86%E8%B6%85%E5%B8%82%E4%B9%8B%E4%BA%BA%23) `670.0K 🔥` `+29%`
1. [大熊猫家和去世](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%86%8A%E7%8C%AB%E5%AE%B6%E5%92%8C%E5%8E%BB%E4%B8%96%23) `618.8K 🔥` `+286%`
1. [方媛缺席桃花坞发布会](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AA%9B%E7%BC%BA%E5%B8%AD%E6%A1%83%E8%8A%B1%E5%9D%9E%E5%8F%91%E5%B8%83%E4%BC%9A%23) `434.1K 🔥` `+154%`
1. [樊振东出任一单](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%87%BA%E4%BB%BB%E4%B8%80%E5%8D%95%23) `375.7K 🔥` `+59%`
1. [吴镇宇用嘴喂郝蕾吃药](https://s.weibo.com/weibo?q=%23%E5%90%B4%E9%95%87%E5%AE%87%E7%94%A8%E5%98%B4%E5%96%82%E9%83%9D%E8%95%BE%E5%90%83%E8%8D%AF%23) `340.4K 🔥` `+46%`
1. [女孩盲道被撞摆拍细节露馅 (Girl was hit on blind road and posed for photo, details revealed)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E7%9B%B2%E9%81%93%E8%A2%AB%E6%92%9E%E6%91%86%E6%8B%8D%E7%BB%86%E8%8A%82%E9%9C%B2%E9%A6%85%23) `1.2M 🔥`
1. [王鹤棣深圳派发巧乐兹 (Wang Hedi distributes Qiaolezi in Shenzhen)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%B7%B1%E5%9C%B3%E6%B4%BE%E5%8F%91%E5%B7%A7%E4%B9%90%E5%85%B9%23) `676.5K 🔥`
1. [范丞丞也在吃跑男的瓜](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E4%B9%9F%E5%9C%A8%E5%90%83%E8%B7%91%E7%94%B7%E7%9A%84%E7%93%9C%23) `440.9K 🔥`
1. [宋浩然整成李佳琦了 (Song Haoran has been transformed into Li Jiaqi)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%B5%A9%E7%84%B6%E6%95%B4%E6%88%90%E6%9D%8E%E4%BD%B3%E7%90%A6%E4%BA%86%23) `340.2K 🔥`
1. [特朗普抵达美国现场画面](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%8A%B5%E8%BE%BE%E7%BE%8E%E5%9B%BD%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `340.0K 🔥`
1. [白鹿艾特闵塔鲨](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%89%BE%E7%89%B9%E9%97%B5%E5%A1%94%E9%B2%A8%23) `339.8K 🔥`
1. [姜乘澜给化妆新手的8条建议](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E4%B9%98%E6%BE%9C%E7%BB%99%E5%8C%96%E5%A6%86%E6%96%B0%E6%89%8B%E7%9A%848%E6%9D%A1%E5%BB%BA%E8%AE%AE%23) `339.7K 🔥`
1. [特朗普回国后谈中国行 (Trump talks about China trip after returning to China)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%9B%9E%E5%9B%BD%E5%90%8E%E8%B0%88%E4%B8%AD%E5%9B%BD%E8%A1%8C%23) `339.0K 🔥`
1. [韩红基金会去年收入7.8亿支出2.9亿 (The Han Hong Foundation earned 780 million last year and spent 290 million)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BA%A2%E5%9F%BA%E9%87%91%E4%BC%9A%E5%8E%BB%E5%B9%B4%E6%94%B6%E5%85%A57.8%E4%BA%BF%E6%94%AF%E5%87%BA2.9%E4%BA%BF%23) `337.9K 🔥`
1. [碳水哥震撼中国人](https://s.weibo.com/weibo?q=%23%E7%A2%B3%E6%B0%B4%E5%93%A5%E9%9C%87%E6%92%BC%E4%B8%AD%E5%9B%BD%E4%BA%BA%23) `321.1K 🔥`
1. [歌手首发阵容 (Singer starting lineup)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E9%A6%96%E5%8F%91%E9%98%B5%E5%AE%B9%23) `305.3K 🔥`
1. [姑姑养大侄女却扣下16万彩礼拒返还 (Aunt raised niece but withheld 160,000 yuan in gift and refused to return it)](https://s.weibo.com/weibo?q=%23%E5%A7%91%E5%A7%91%E5%85%BB%E5%A4%A7%E4%BE%84%E5%A5%B3%E5%8D%B4%E6%89%A3%E4%B8%8B16%E4%B8%87%E5%BD%A9%E7%A4%BC%E6%8B%92%E8%BF%94%E8%BF%98%23) `292.3K 🔥`
1. [减掉内脏脂肪才是减肥关键](https://s.weibo.com/weibo?q=%23%E5%87%8F%E6%8E%89%E5%86%85%E8%84%8F%E8%84%82%E8%82%AA%E6%89%8D%E6%98%AF%E5%87%8F%E8%82%A5%E5%85%B3%E9%94%AE%23) `287.1K 🔥`
1. [男子结婚8年发现3个女儿都非亲生](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%BB%93%E5%A9%9A8%E5%B9%B4%E5%8F%91%E7%8E%B03%E4%B8%AA%E5%A5%B3%E5%84%BF%E9%83%BD%E9%9D%9E%E4%BA%B2%E7%94%9F%23) `188.6K 🔥`
1. [侯明昊演唱会](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E6%BC%94%E5%94%B1%E4%BC%9A%23) `167.4K 🔥`
1. [张雪机车捷克站夺冠 (Zhang Xue won the Czech Republic Championship)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%8D%B7%E5%85%8B%E7%AB%99%E5%A4%BA%E5%86%A0%23) `853.9K 🔥` `-62%`
1. [山西一研学车辆侧翻已致2人死亡 (A vehicle rolled over in Shanxi Yanxue University killed 2 people)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E4%B8%80%E7%A0%94%E5%AD%A6%E8%BD%A6%E8%BE%86%E4%BE%A7%E7%BF%BB%E5%B7%B2%E8%87%B42%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `337.9K 🔥` `-31%`
1. [张凌赫Mai晚宴合照](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%ABMai%E6%99%9A%E5%AE%B4%E5%90%88%E7%85%A7%23) `246.4K 🔥` `-29%`
1. [张雪回应捷克站夺冠 (Zhang Xue responded to winning the Czech championship)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%9B%9E%E5%BA%94%E6%8D%B7%E5%85%8B%E7%AB%99%E5%A4%BA%E5%86%A0%23) `206.3K 🔥` `-44%`
1. [APINK全员到场尹普美婚礼](https://s.weibo.com/weibo?q=%23APINK%E5%85%A8%E5%91%98%E5%88%B0%E5%9C%BA%E5%B0%B9%E6%99%AE%E7%BE%8E%E5%A9%9A%E7%A4%BC%23) `204.4K 🔥` `-36%`
1. [孙颖莎王楚钦又一荣誉公示](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%8F%88%E4%B8%80%E8%8D%A3%E8%AA%89%E5%85%AC%E7%A4%BA%23) `178.3K 🔥` `-48%`
1. [专家建议金价大跌多买小跌少买](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E5%BB%BA%E8%AE%AE%E9%87%91%E4%BB%B7%E5%A4%A7%E8%B7%8C%E5%A4%9A%E4%B9%B0%E5%B0%8F%E8%B7%8C%E5%B0%91%E4%B9%B0%23) `150.4K 🔥` `-25%`

Updated at 2026-05-16 21:55:25

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
