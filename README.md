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

1. [张雪峰 为学生打破信息差 (Zhang Xuefeng breaks the information gap for students)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%20%E4%B8%BA%E5%AD%A6%E7%94%9F%E6%89%93%E7%A0%B4%E4%BF%A1%E6%81%AF%E5%B7%AE%23) `24.6K 🔥` `NEW`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `33.4K 🔥` `+34%`
1. [以色列战损窟窿越来越大](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%88%98%E6%8D%9F%E7%AA%9F%E7%AA%BF%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%A4%A7%23) `30.1K 🔥` `+25%`
1. [早睡](https://s.weibo.com/weibo?q=%23%E6%97%A9%E7%9D%A1%23) `121.0K 🔥`
1. [峰学蔚来总经理称学员员工权益均有保障 (General Manager of Fengxue Weilai said that the rights of students and employees are protected)](https://s.weibo.com/weibo?q=%23%E5%B3%B0%E5%AD%A6%E8%94%9A%E6%9D%A5%E6%80%BB%E7%BB%8F%E7%90%86%E7%A7%B0%E5%AD%A6%E5%91%98%E5%91%98%E5%B7%A5%E6%9D%83%E7%9B%8A%E5%9D%87%E6%9C%89%E4%BF%9D%E9%9A%9C%23) `102.8K 🔥`
1. [猝死前1小时身体的预警](https://s.weibo.com/weibo?q=%23%E7%8C%9D%E6%AD%BB%E5%89%8D1%E5%B0%8F%E6%97%B6%E8%BA%AB%E4%BD%93%E7%9A%84%E9%A2%84%E8%AD%A6%23) `57.8K 🔥`
1. [高强度工作 不要运动 (High-intensity work, no exercise)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%BC%BA%E5%BA%A6%E5%B7%A5%E4%BD%9C%20%E4%B8%8D%E8%A6%81%E8%BF%90%E5%8A%A8%23) `54.2K 🔥`
1. [人生真好玩 下辈子还来 (Life is so fun, I’ll come back in the next life)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%94%9F%E7%9C%9F%E5%A5%BD%E7%8E%A9%20%E4%B8%8B%E8%BE%88%E5%AD%90%E8%BF%98%E6%9D%A5%23) `53.1K 🔥`
1. [奇瑞风云之夜T9L正式预售 (Chery Fengyun Night T9L officially pre-sold)](https://s.weibo.com/weibo?q=%23%E5%A5%87%E7%91%9E%E9%A3%8E%E4%BA%91%E4%B9%8B%E5%A4%9CT9L%E6%AD%A3%E5%BC%8F%E9%A2%84%E5%94%AE%23) `52.7K 🔥`
1. [警惕嘴唇发紫可能是心肺重症信号 (Be wary of blue lips, which may be a sign of serious cardiopulmonary disease)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%83%95%E5%98%B4%E5%94%87%E5%8F%91%E7%B4%AB%E5%8F%AF%E8%83%BD%E6%98%AF%E5%BF%83%E8%82%BA%E9%87%8D%E7%97%87%E4%BF%A1%E5%8F%B7%23) `48.5K 🔥`
1. [张雪峰曾回应心脏不好质疑](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E6%9B%BE%E5%9B%9E%E5%BA%94%E5%BF%83%E8%84%8F%E4%B8%8D%E5%A5%BD%E8%B4%A8%E7%96%91%23) `30.4K 🔥`
1. [张雪峰8年前曾谈猝死](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B08%E5%B9%B4%E5%89%8D%E6%9B%BE%E8%B0%88%E7%8C%9D%E6%AD%BB%23) `29.9K 🔥`
1. [日本 (Japan)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%23) `26.1K 🔥`
1. [张雪峰生前谈墓碑上要写什么](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E7%94%9F%E5%89%8D%E8%B0%88%E5%A2%93%E7%A2%91%E4%B8%8A%E8%A6%81%E5%86%99%E4%BB%80%E4%B9%88%23) `26.1K 🔥`
1. [容易触发猝死的6个因素](https://s.weibo.com/weibo?q=%23%E5%AE%B9%E6%98%93%E8%A7%A6%E5%8F%91%E7%8C%9D%E6%AD%BB%E7%9A%846%E4%B8%AA%E5%9B%A0%E7%B4%A0%23) `25.6K 🔥`
1. [峰学蔚来 (Fengxue Weilai)](https://s.weibo.com/weibo?q=%23%E5%B3%B0%E5%AD%A6%E8%94%9A%E6%9D%A5%23) `25.5K 🔥`
1. [心源性猝死 (sudden cardiac death)](https://s.weibo.com/weibo?q=%23%E5%BF%83%E6%BA%90%E6%80%A7%E7%8C%9D%E6%AD%BB%23) `25.4K 🔥`
1. [宁艺卓ins点赞刘美贤](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93ins%E7%82%B9%E8%B5%9E%E5%88%98%E7%BE%8E%E8%B4%A4%23) `24.5K 🔥`
1. [张雪峰女儿还那么小 (Zhang Xuefeng’s daughter is still so young)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E5%A5%B3%E5%84%BF%E8%BF%98%E9%82%A3%E4%B9%88%E5%B0%8F%23) `23.9K 🔥`
1. [睡觉是延长心脏寿命最好的方式 (Sleep is the best way to extend heart life)](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E8%A7%89%E6%98%AF%E5%BB%B6%E9%95%BF%E5%BF%83%E8%84%8F%E5%AF%BF%E5%91%BD%E6%9C%80%E5%A5%BD%E7%9A%84%E6%96%B9%E5%BC%8F%23) `22.8K 🔥`
1. [4岁女童就诊177次患者是母亲](https://s.weibo.com/weibo?q=%234%E5%B2%81%E5%A5%B3%E7%AB%A5%E5%B0%B1%E8%AF%8A177%E6%AC%A1%E6%82%A3%E8%80%85%E6%98%AF%E6%AF%8D%E4%BA%B2%23) `21.6K 🔥`
1. [火了还没适应的明星最好玩了 (Celebrities who haven’t adapted to being popular are the most interesting)](https://s.weibo.com/weibo?q=%23%E7%81%AB%E4%BA%86%E8%BF%98%E6%B2%A1%E9%80%82%E5%BA%94%E7%9A%84%E6%98%8E%E6%98%9F%E6%9C%80%E5%A5%BD%E7%8E%A9%E4%BA%86%23) `21.3K 🔥`
1. [伊朗喊美国做个了断 (Iran calls on the United States to put an end to it)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%96%8A%E7%BE%8E%E5%9B%BD%E5%81%9A%E4%B8%AA%E4%BA%86%E6%96%AD%23) `20.8K 🔥`
1. [泽尻英龙华40岁状态](https://s.weibo.com/weibo?q=%23%E6%B3%BD%E5%B0%BB%E8%8B%B1%E9%BE%99%E5%8D%8E40%E5%B2%81%E7%8A%B6%E6%80%81%23) `19.9K 🔥`
1. [中方要求日方立即彻查严惩 (China demands that Japan immediately investigate and punish severely)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E8%A6%81%E6%B1%82%E6%97%A5%E6%96%B9%E7%AB%8B%E5%8D%B3%E5%BD%BB%E6%9F%A5%E4%B8%A5%E6%83%A9%23) `19.0K 🔥`
1. [出现猝死征兆如何自救](https://s.weibo.com/weibo?q=%23%E5%87%BA%E7%8E%B0%E7%8C%9D%E6%AD%BB%E5%BE%81%E5%85%86%E5%A6%82%E4%BD%95%E8%87%AA%E6%95%91%23) `18.4K 🔥`
1. [你好1983](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD1983%23) `18.4K 🔥`
1. [6类人高强度运动猝死风险高](https://s.weibo.com/weibo?q=%236%E7%B1%BB%E4%BA%BA%E9%AB%98%E5%BC%BA%E5%BA%A6%E8%BF%90%E5%8A%A8%E7%8C%9D%E6%AD%BB%E9%A3%8E%E9%99%A9%E9%AB%98%23) `18.4K 🔥`
1. [38岁男子打10分钟羽毛球后心梗](https://s.weibo.com/weibo?q=%2338%E5%B2%81%E7%94%B7%E5%AD%90%E6%89%9310%E5%88%86%E9%92%9F%E7%BE%BD%E6%AF%9B%E7%90%83%E5%90%8E%E5%BF%83%E6%A2%97%23) `18.3K 🔥`
1. [以色列被打穿了](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E8%A2%AB%E6%89%93%E7%A9%BF%E4%BA%86%23) `18.1K 🔥`
1. [过度运动 (excessive exercise)](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%BA%A6%E8%BF%90%E5%8A%A8%23) `17.9K 🔥`
1. [周杰伦新专辑](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%B0%E4%B8%93%E8%BE%91%23) `17.6K 🔥`
1. [谍报上不封顶](https://s.weibo.com/weibo?q=%23%E8%B0%8D%E6%8A%A5%E4%B8%8A%E4%B8%8D%E5%B0%81%E9%A1%B6%23) `17.3K 🔥`
1. [迪丽热巴眼技 (Dilireba eye skills)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9C%BC%E6%8A%80%23) `17.3K 🔥`
1. [殡葬行业大哥缓解孤独终老焦虑](https://s.weibo.com/weibo?q=%23%E6%AE%A1%E8%91%AC%E8%A1%8C%E4%B8%9A%E5%A4%A7%E5%93%A5%E7%BC%93%E8%A7%A3%E5%AD%A4%E7%8B%AC%E7%BB%88%E8%80%81%E7%84%A6%E8%99%91%23) `17.3K 🔥`
1. [外交部回应日方拟将中日关系降级](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E5%9B%9E%E5%BA%94%E6%97%A5%E6%96%B9%E6%8B%9F%E5%B0%86%E4%B8%AD%E6%97%A5%E5%85%B3%E7%B3%BB%E9%99%8D%E7%BA%A7%23) `17.3K 🔥`
1. [曾经只值10元的二手机现在回收价500](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E7%BB%8F%E5%8F%AA%E5%80%BC10%E5%85%83%E7%9A%84%E4%BA%8C%E6%89%8B%E6%9C%BA%E7%8E%B0%E5%9C%A8%E5%9B%9E%E6%94%B6%E4%BB%B7500%23) `17.3K 🔥`
1. [隐身的名字 (invisible name)](https://s.weibo.com/weibo?q=%23%E9%9A%90%E8%BA%AB%E7%9A%84%E5%90%8D%E5%AD%97%23) `17.3K 🔥`
1. [地铁吐血女孩已离开华西医院 (The girl who vomited blood on the subway has left West China Hospital)](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E9%93%81%E5%90%90%E8%A1%80%E5%A5%B3%E5%AD%A9%E5%B7%B2%E7%A6%BB%E5%BC%80%E5%8D%8E%E8%A5%BF%E5%8C%BB%E9%99%A2%23) `17.3K 🔥`
1. [邓凯孔雪儿借位吻 (Deng Kai and Kong Xueer took the opportunity to kiss)](https://s.weibo.com/weibo?q=%23%E9%82%93%E5%87%AF%E5%AD%94%E9%9B%AA%E5%84%BF%E5%80%9F%E4%BD%8D%E5%90%BB%23) `17.2K 🔥`
1. [睡够8小时](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E5%A4%9F8%E5%B0%8F%E6%97%B6%23) `17.2K 🔥`
1. [卓沅收工照](https://s.weibo.com/weibo?q=%23%E5%8D%93%E6%B2%85%E6%94%B6%E5%B7%A5%E7%85%A7%23) `17.2K 🔥`
1. [张凌赫蓝色花蝴蝶造型 (Zhang Linghe blue flower butterfly style)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%93%9D%E8%89%B2%E8%8A%B1%E8%9D%B4%E8%9D%B6%E9%80%A0%E5%9E%8B%23) `17.2K 🔥`
1. [考研人](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%A0%94%E4%BA%BA%23) `17.2K 🔥`
1. [Token有中文名了叫词元](https://s.weibo.com/weibo?q=%23Token%E6%9C%89%E4%B8%AD%E6%96%87%E5%90%8D%E4%BA%86%E5%8F%AB%E8%AF%8D%E5%85%83%23) `17.2K 🔥`
1. [太空加油站新进展](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E7%A9%BA%E5%8A%A0%E6%B2%B9%E7%AB%99%E6%96%B0%E8%BF%9B%E5%B1%95%23) `61.1K 🔥` `-21%`
1. [张雪峰公司发布讣告](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E5%85%AC%E5%8F%B8%E5%8F%91%E5%B8%83%E8%AE%A3%E5%91%8A%23) `47.6K 🔥` `-21%`
1. [周杰伦新歌口碑 (Word of mouth of Jay Chou's new song)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%B0%E6%AD%8C%E5%8F%A3%E7%A2%91%23) `46.5K 🔥` `-21%`
1. [老天爷追着喂饭 瞿颖全婉拒了](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%A4%A9%E7%88%B7%E8%BF%BD%E7%9D%80%E5%96%82%E9%A5%AD%20%E7%9E%BF%E9%A2%96%E5%85%A8%E5%A9%89%E6%8B%92%E4%BA%86%23) `19.1K 🔥` `-29%`
1. [柳智敏翻唱中文歌](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E6%99%BA%E6%95%8F%E7%BF%BB%E5%94%B1%E4%B8%AD%E6%96%87%E6%AD%8C%23) `17.2K 🔥` `-69%`
1. [王一博上海耐力赛纪录片 (Wang Yibo Shanghai Endurance Race Documentary)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%B8%8A%E6%B5%B7%E8%80%90%E5%8A%9B%E8%B5%9B%E7%BA%AA%E5%BD%95%E7%89%87%23) `17.2K 🔥` `-69%`

Updated at 2026-03-25 04:38:50

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
