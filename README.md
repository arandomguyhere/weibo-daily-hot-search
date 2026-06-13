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

1. [六级 (Level 6)](https://s.weibo.com/weibo?q=%23%E5%85%AD%E7%BA%A7%23) `7.3M 🔥` `NEW`
1. [六级翻译](https://s.weibo.com/weibo?q=%23%E5%85%AD%E7%BA%A7%E7%BF%BB%E8%AF%91%23) `1.8M 🔥` `NEW`
1. [文化中国行赏非遗之美](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%8C%96%E4%B8%AD%E5%9B%BD%E8%A1%8C%E8%B5%8F%E9%9D%9E%E9%81%97%E4%B9%8B%E7%BE%8E%23) `1.4M 🔥` `NEW`
1. [广汽昊铂为宠粉包下了阿那亚](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E6%B1%BD%E6%98%8A%E9%93%82%E4%B8%BA%E5%AE%A0%E7%B2%89%E5%8C%85%E4%B8%8B%E4%BA%86%E9%98%BF%E9%82%A3%E4%BA%9A%23) `1.3M 🔥` `NEW`
1. [帅氏药膳鸡](https://s.weibo.com/weibo?q=%23%E5%B8%85%E6%B0%8F%E8%8D%AF%E8%86%B3%E9%B8%A1%23) `1.3M 🔥` `NEW`
1. [居民存款两个月缩水超2万亿](https://s.weibo.com/weibo?q=%23%E5%B1%85%E6%B0%91%E5%AD%98%E6%AC%BE%E4%B8%A4%E4%B8%AA%E6%9C%88%E7%BC%A9%E6%B0%B4%E8%B6%852%E4%B8%87%E4%BA%BF%23) `862.1K 🔥` `NEW`
1. [中国小将海外夺冠遭处罚为假消息](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%B0%8F%E5%B0%86%E6%B5%B7%E5%A4%96%E5%A4%BA%E5%86%A0%E9%81%AD%E5%A4%84%E7%BD%9A%E4%B8%BA%E5%81%87%E6%B6%88%E6%81%AF%23) `841.2K 🔥` `NEW`
1. [睡觉的权威性我后知后觉](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E8%A7%89%E7%9A%84%E6%9D%83%E5%A8%81%E6%80%A7%E6%88%91%E5%90%8E%E7%9F%A5%E5%90%8E%E8%A7%89%23) `834.2K 🔥` `NEW`
1. [单依纯纯妹妹2.0演唱会](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E7%BA%AF%E5%A6%B9%E5%A6%B92.0%E6%BC%94%E5%94%B1%E4%BC%9A%23) `446.8K 🔥` `NEW`
1. [幼师离世前时间线](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E5%B8%88%E7%A6%BB%E4%B8%96%E5%89%8D%E6%97%B6%E9%97%B4%E7%BA%BF%23) `446.7K 🔥` `NEW`
1. [英格兰队连主帅战术板都被偷了 (Even the England coach's tactical board was stolen)](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E9%98%9F%E8%BF%9E%E4%B8%BB%E5%B8%85%E6%88%98%E6%9C%AF%E6%9D%BF%E9%83%BD%E8%A2%AB%E5%81%B7%E4%BA%86%23) `445.6K 🔥` `NEW`
1. [六级答案](https://s.weibo.com/weibo?q=%23%E5%85%AD%E7%BA%A7%E7%AD%94%E6%A1%88%23) `445.0K 🔥` `NEW`
1. [海陆变样了](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E9%99%86%E5%8F%98%E6%A0%B7%E4%BA%86%23) `444.0K 🔥` `NEW`
1. [曝女顶流是梅西C罗梦女](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%A5%B3%E9%A1%B6%E6%B5%81%E6%98%AF%E6%A2%85%E8%A5%BFC%E7%BD%97%E6%A2%A6%E5%A5%B3%23) `443.8K 🔥` `NEW`
1. [于正否认白鹿是靠山](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E5%90%A6%E8%AE%A4%E7%99%BD%E9%B9%BF%E6%98%AF%E9%9D%A0%E5%B1%B1%23) `442.8K 🔥` `NEW`
1. [SpaceX焊工食堂阿姨都成百万富翁](https://s.weibo.com/weibo?q=%23SpaceX%E7%84%8A%E5%B7%A5%E9%A3%9F%E5%A0%82%E9%98%BF%E5%A7%A8%E9%83%BD%E6%88%90%E7%99%BE%E4%B8%87%E5%AF%8C%E7%BF%81%23) `442.1K 🔥` `NEW`
1. [长生骨](https://s.weibo.com/weibo?q=%23%E9%95%BF%E7%94%9F%E9%AA%A8%23) `441.2K 🔥` `NEW`
1. [C罗 收集卡卡周边](https://s.weibo.com/weibo?q=%23C%E7%BD%97%20%E6%94%B6%E9%9B%86%E5%8D%A1%E5%8D%A1%E5%91%A8%E8%BE%B9%23) `311.0K 🔥` `NEW`
1. [伊朗国足被美国卡脖子后近况曝光](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%9B%BD%E8%B6%B3%E8%A2%AB%E7%BE%8E%E5%9B%BD%E5%8D%A1%E8%84%96%E5%AD%90%E5%90%8E%E8%BF%91%E5%86%B5%E6%9B%9D%E5%85%89%23) `310.2K 🔥` `NEW`
1. [72岁赵雅芝70岁米雪同台](https://s.weibo.com/weibo?q=%2372%E5%B2%81%E8%B5%B5%E9%9B%85%E8%8A%9D70%E5%B2%81%E7%B1%B3%E9%9B%AA%E5%90%8C%E5%8F%B0%23) `308.9K 🔥` `NEW`
1. [六级听力 (Level 6 Listening)](https://s.weibo.com/weibo?q=%23%E5%85%AD%E7%BA%A7%E5%90%AC%E5%8A%9B%23) `308.8K 🔥` `NEW`
1. [英语六级阅读](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E8%AF%AD%E5%85%AD%E7%BA%A7%E9%98%85%E8%AF%BB%23) `307.9K 🔥` `NEW`
1. [张百乔转型](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%99%BE%E4%B9%94%E8%BD%AC%E5%9E%8B%23) `307.1K 🔥` `NEW`
1. [白鹿莫离收视新高](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%8E%AB%E7%A6%BB%E6%94%B6%E8%A7%86%E6%96%B0%E9%AB%98%23) `305.1K 🔥` `NEW`
1. [警方回应雷军装600斤车厘子被指违规](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E5%9B%9E%E5%BA%94%E9%9B%B7%E5%86%9B%E8%A3%85600%E6%96%A4%E8%BD%A6%E5%8E%98%E5%AD%90%E8%A2%AB%E6%8C%87%E8%BF%9D%E8%A7%84%23) `260.0K 🔥` `NEW`
1. [女子健身房摔倒身亡遗体仍在殡仪馆](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%81%A5%E8%BA%AB%E6%88%BF%E6%91%94%E5%80%92%E8%BA%AB%E4%BA%A1%E9%81%97%E4%BD%93%E4%BB%8D%E5%9C%A8%E6%AE%A1%E4%BB%AA%E9%A6%86%23) `259.7K 🔥` `NEW`
1. [我被心肝回复了就吴宣仪这样炫耀](https://s.weibo.com/weibo?q=%23%E6%88%91%E8%A2%AB%E5%BF%83%E8%82%9D%E5%9B%9E%E5%A4%8D%E4%BA%86%E5%B0%B1%E5%90%B4%E5%AE%A3%E4%BB%AA%E8%BF%99%E6%A0%B7%E7%82%AB%E8%80%80%23) `258.8K 🔥` `NEW`
1. [电子商务我恨你](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%AD%90%E5%95%86%E5%8A%A1%E6%88%91%E6%81%A8%E4%BD%A0%23) `258.7K 🔥` `NEW`
1. [马宁哭了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%81%E5%93%AD%E4%BA%86%23) `258.0K 🔥` `NEW`
1. [刚满月婴儿被奶奶抱走爸爸报警](https://s.weibo.com/weibo?q=%23%E5%88%9A%E6%BB%A1%E6%9C%88%E5%A9%B4%E5%84%BF%E8%A2%AB%E5%A5%B6%E5%A5%B6%E6%8A%B1%E8%B5%B0%E7%88%B8%E7%88%B8%E6%8A%A5%E8%AD%A6%23) `258.0K 🔥` `NEW`
1. [王俊凯别催来了 (Wang Junkai, don’t rush me here.)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%88%AB%E5%82%AC%E6%9D%A5%E4%BA%86%23) `256.8K 🔥` `NEW`
1. [中国军人的匕首枪亮相](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%86%9B%E4%BA%BA%E7%9A%84%E5%8C%95%E9%A6%96%E6%9E%AA%E4%BA%AE%E7%9B%B8%23) `245.3K 🔥` `NEW`
1. [4个小时的拼豆就这样白拼了](https://s.weibo.com/weibo?q=%234%E4%B8%AA%E5%B0%8F%E6%97%B6%E7%9A%84%E6%8B%BC%E8%B1%86%E5%B0%B1%E8%BF%99%E6%A0%B7%E7%99%BD%E6%8B%BC%E4%BA%86%23) `224.9K 🔥` `NEW`
1. [携程被罚款1000万元](https://s.weibo.com/weibo?q=%23%E6%90%BA%E7%A8%8B%E8%A2%AB%E7%BD%9A%E6%AC%BE1000%E4%B8%87%E5%85%83%23) `223.2K 🔥` `NEW`
1. [德佑官宣迪丽热巴](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E4%BD%91%E5%AE%98%E5%AE%A3%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23) `222.8K 🔥` `NEW`
1. [BLG对战WE](https://s.weibo.com/weibo?q=%23BLG%E5%AF%B9%E6%88%98WE%23) `202.7K 🔥` `NEW`
1. [曝唐嫣是王冠婚姻的红娘](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%94%90%E5%AB%A3%E6%98%AF%E7%8E%8B%E5%86%A0%E5%A9%9A%E5%A7%BB%E7%9A%84%E7%BA%A2%E5%A8%98%23) `201.9K 🔥` `NEW`
1. [六级预测](https://s.weibo.com/weibo?q=%23%E5%85%AD%E7%BA%A7%E9%A2%84%E6%B5%8B%23) `190.9K 🔥` `NEW`
1. [央行狂买黄金金价却暴跌](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A1%8C%E7%8B%82%E4%B9%B0%E9%BB%84%E9%87%91%E9%87%91%E4%BB%B7%E5%8D%B4%E6%9A%B4%E8%B7%8C%23) `177.8K 🔥` `NEW`
1. [小米YU7直播通关全部测试](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3YU7%E7%9B%B4%E6%92%AD%E9%80%9A%E5%85%B3%E5%85%A8%E9%83%A8%E6%B5%8B%E8%AF%95%23) `177.8K 🔥` `NEW`
1. [雷军晒世界杯英格兰队签名球衣 (Lei Jun shows off England World Cup signed jersey)](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E6%99%92%E4%B8%96%E7%95%8C%E6%9D%AF%E8%8B%B1%E6%A0%BC%E5%85%B0%E9%98%9F%E7%AD%BE%E5%90%8D%E7%90%83%E8%A1%A3%23) `177.6K 🔥` `NEW`
1. [徐良演唱会免费发三万根烤肠](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E5%85%8D%E8%B4%B9%E5%8F%91%E4%B8%89%E4%B8%87%E6%A0%B9%E7%83%A4%E8%82%A0%23) `177.4K 🔥` `NEW`
1. [黄灿灿工作室员工在张月身后抽烟 (An employee of Huang Cancan Studio smokes behind Zhang Yue)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%91%98%E5%B7%A5%E5%9C%A8%E5%BC%A0%E6%9C%88%E8%BA%AB%E5%90%8E%E6%8A%BD%E7%83%9F%23) `1.2M 🔥` `+247%`
1. [60岁男子与女子车内亲密猝死](https://s.weibo.com/weibo?q=%2360%E5%B2%81%E7%94%B7%E5%AD%90%E4%B8%8E%E5%A5%B3%E5%AD%90%E8%BD%A6%E5%86%85%E4%BA%B2%E5%AF%86%E7%8C%9D%E6%AD%BB%23) `305.9K 🔥`
1. [医生说长期禁欲生殖系统真的会老](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E8%AF%B4%E9%95%BF%E6%9C%9F%E7%A6%81%E6%AC%B2%E7%94%9F%E6%AE%96%E7%B3%BB%E7%BB%9F%E7%9C%9F%E7%9A%84%E4%BC%9A%E8%80%81%23) `259.5K 🔥`
1. [含蓄的中国人终于抽象到老外了](https://s.weibo.com/weibo?q=%23%E5%90%AB%E8%93%84%E7%9A%84%E4%B8%AD%E5%9B%BD%E4%BA%BA%E7%BB%88%E4%BA%8E%E6%8A%BD%E8%B1%A1%E5%88%B0%E8%80%81%E5%A4%96%E4%BA%86%23) `441.4K 🔥` `-32%`
1. [中国不需要也不可能复制SpaceX (China does not need and cannot copy SpaceX)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%B8%8D%E9%9C%80%E8%A6%81%E4%B9%9F%E4%B8%8D%E5%8F%AF%E8%83%BD%E5%A4%8D%E5%88%B6SpaceX%23) `311.3K 🔥` `-79%`
1. [韩庚鹿晗说朝鲜语](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%BA%9A%E9%B9%BF%E6%99%97%E8%AF%B4%E6%9C%9D%E9%B2%9C%E8%AF%AD%23) `305.0K 🔥` `-57%`
1. [王玉雯一把薅走王安宇](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%8E%89%E9%9B%AF%E4%B8%80%E6%8A%8A%E8%96%85%E8%B5%B0%E7%8E%8B%E5%AE%89%E5%AE%87%23) `240.7K 🔥` `-64%`
1. [黄灿灿工作室道歉](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%B7%A5%E4%BD%9C%E5%AE%A4%E9%81%93%E6%AD%89%23) `228.2K 🔥` `-26%`
1. [韩国网友批Lisa世界杯开幕式歌曲低俗](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%BD%91%E5%8F%8B%E6%89%B9Lisa%E4%B8%96%E7%95%8C%E6%9D%AF%E5%BC%80%E5%B9%95%E5%BC%8F%E6%AD%8C%E6%9B%B2%E4%BD%8E%E4%BF%97%23) `223.1K 🔥` `-35%`
1. [任素汐原名叫任国涛](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E7%B4%A0%E6%B1%90%E5%8E%9F%E5%90%8D%E5%8F%AB%E4%BB%BB%E5%9B%BD%E6%B6%9B%23) `202.7K 🔥` `-40%`

Updated at 2026-06-13 18:15:29

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
