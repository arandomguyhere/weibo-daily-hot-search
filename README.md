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

1. [豆包将正式付费 (Doubao will be officially paid)](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%B0%86%E6%AD%A3%E5%BC%8F%E4%BB%98%E8%B4%B9%23) `5.2M 🔥` `NEW`
1. [主角编剧疯了](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%E7%BC%96%E5%89%A7%E7%96%AF%E4%BA%86%23) `2.0M 🔥` `NEW`
1. [长征十二号乙运载火箭首飞成功](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%BE%81%E5%8D%81%E4%BA%8C%E5%8F%B7%E4%B9%99%E8%BF%90%E8%BD%BD%E7%81%AB%E7%AE%AD%E9%A6%96%E9%A3%9E%E6%88%90%E5%8A%9F%23) `1.1M 🔥` `NEW`
1. [小米17T系列定档6月8日发布](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B317T%E7%B3%BB%E5%88%97%E5%AE%9A%E6%A1%A36%E6%9C%888%E6%97%A5%E5%8F%91%E5%B8%83%23) `1.0M 🔥` `NEW`
1. [记者卧底500人群聊揭秘崩老头内幕](https://s.weibo.com/weibo?q=%23%E8%AE%B0%E8%80%85%E5%8D%A7%E5%BA%95500%E4%BA%BA%E7%BE%A4%E8%81%8A%E6%8F%AD%E7%A7%98%E5%B4%A9%E8%80%81%E5%A4%B4%E5%86%85%E5%B9%95%23) `963.1K 🔥` `NEW`
1. [娜塔莎](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E5%A1%94%E8%8E%8E%23) `871.4K 🔥` `NEW`
1. [张碧晨求助歌手选歌](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%A2%A7%E6%99%A8%E6%B1%82%E5%8A%A9%E6%AD%8C%E6%89%8B%E9%80%89%E6%AD%8C%23) `418.8K 🔥` `NEW`
1. [刘红兵你完了](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BA%A2%E5%85%B5%E4%BD%A0%E5%AE%8C%E4%BA%86%23) `411.4K 🔥` `NEW`
1. [WE以下克上AL](https://s.weibo.com/weibo?q=%23WE%E4%BB%A5%E4%B8%8B%E5%85%8B%E4%B8%8AAL%23) `353.7K 🔥` `NEW`
1. [在日本五分钟连续遇到两个雷霆日本人](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E6%97%A5%E6%9C%AC%E4%BA%94%E5%88%86%E9%92%9F%E8%BF%9E%E7%BB%AD%E9%81%87%E5%88%B0%E4%B8%A4%E4%B8%AA%E9%9B%B7%E9%9C%86%E6%97%A5%E6%9C%AC%E4%BA%BA%23) `352.5K 🔥` `NEW`
1. [男子去健身结果睡到闭店才被叫醒 (Man went to the gym and fell asleep until the store closed before being woken up)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8E%BB%E5%81%A5%E8%BA%AB%E7%BB%93%E6%9E%9C%E7%9D%A1%E5%88%B0%E9%97%AD%E5%BA%97%E6%89%8D%E8%A2%AB%E5%8F%AB%E9%86%92%23) `351.6K 🔥` `NEW`
1. [张凌赫与名媛合影](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%B8%8E%E5%90%8D%E5%AA%9B%E5%90%88%E5%BD%B1%23) `350.8K 🔥` `NEW`
1. [杨紫 豆包](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%20%E8%B1%86%E5%8C%85%23) `350.1K 🔥` `NEW`
1. [WE你要毁了LPL吗](https://s.weibo.com/weibo?q=%23WE%E4%BD%A0%E8%A6%81%E6%AF%81%E4%BA%86LPL%E5%90%97%23) `349.4K 🔥` `NEW`
1. [刘亦菲回北电和同学聚会](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%9B%9E%E5%8C%97%E7%94%B5%E5%92%8C%E5%90%8C%E5%AD%A6%E8%81%9A%E4%BC%9A%23) `347.9K 🔥` `NEW`
1. [校长想了三辈子才想出的鬼点子](https://s.weibo.com/weibo?q=%23%E6%A0%A1%E9%95%BF%E6%83%B3%E4%BA%86%E4%B8%89%E8%BE%88%E5%AD%90%E6%89%8D%E6%83%B3%E5%87%BA%E7%9A%84%E9%AC%BC%E7%82%B9%E5%AD%90%23) `347.3K 🔥` `NEW`
1. [灵魂摆渡](https://s.weibo.com/weibo?q=%23%E7%81%B5%E9%AD%82%E6%91%86%E6%B8%A1%23) `345.8K 🔥` `NEW`
1. [六一文案](https://s.weibo.com/weibo?q=%23%E5%85%AD%E4%B8%80%E6%96%87%E6%A1%88%23) `345.2K 🔥` `NEW`
1. [00后一番票房](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E4%B8%80%E7%95%AA%E7%A5%A8%E6%88%BF%23) `344.3K 🔥` `NEW`
1. [参赛选手走光被拍组委会致歉](https://s.weibo.com/weibo?q=%23%E5%8F%82%E8%B5%9B%E9%80%89%E6%89%8B%E8%B5%B0%E5%85%89%E8%A2%AB%E6%8B%8D%E7%BB%84%E5%A7%94%E4%BC%9A%E8%87%B4%E6%AD%89%23) `343.1K 🔥` `NEW`
1. [锤娜丽莎李川一度要分手 (Na Lisa and Li Chuan once wanted to break up)](https://s.weibo.com/weibo?q=%23%E9%94%A4%E5%A8%9C%E4%B8%BD%E8%8E%8E%E6%9D%8E%E5%B7%9D%E4%B8%80%E5%BA%A6%E8%A6%81%E5%88%86%E6%89%8B%23) `342.5K 🔥` `NEW`
1. [奚梦瑶婚礼](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%A9%9A%E7%A4%BC%23) `341.8K 🔥` `NEW`
1. [这段话彻底杀死了我的钝感力](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%AE%B5%E8%AF%9D%E5%BD%BB%E5%BA%95%E6%9D%80%E6%AD%BB%E4%BA%86%E6%88%91%E7%9A%84%E9%92%9D%E6%84%9F%E5%8A%9B%23) `341.0K 🔥` `NEW`
1. [晚晚疑似怀孕了](https://s.weibo.com/weibo?q=%23%E6%99%9A%E6%99%9A%E7%96%91%E4%BC%BC%E6%80%80%E5%AD%95%E4%BA%86%23) `340.4K 🔥` `NEW`
1. [产检发现性病丈夫认为妻子故意隐瞒](https://s.weibo.com/weibo?q=%23%E4%BA%A7%E6%A3%80%E5%8F%91%E7%8E%B0%E6%80%A7%E7%97%85%E4%B8%88%E5%A4%AB%E8%AE%A4%E4%B8%BA%E5%A6%BB%E5%AD%90%E6%95%85%E6%84%8F%E9%9A%90%E7%9E%92%23) `338.9K 🔥` `NEW`
1. [爱笑 AL](https://s.weibo.com/weibo?q=%23%E7%88%B1%E7%AC%91%20AL%23) `319.7K 🔥` `NEW`
1. [哈工大187对博士生举行集体婚礼](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B7%A5%E5%A4%A7187%E5%AF%B9%E5%8D%9A%E5%A3%AB%E7%94%9F%E4%B8%BE%E8%A1%8C%E9%9B%86%E4%BD%93%E5%A9%9A%E7%A4%BC%23) `263.7K 🔥` `NEW`
1. [奚梦瑶婚礼珠宝](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%A9%9A%E7%A4%BC%E7%8F%A0%E5%AE%9D%23) `263.5K 🔥` `NEW`
1. [有家长半小时看十几次幼儿园监控](https://s.weibo.com/weibo?q=%23%E6%9C%89%E5%AE%B6%E9%95%BF%E5%8D%8A%E5%B0%8F%E6%97%B6%E7%9C%8B%E5%8D%81%E5%87%A0%E6%AC%A1%E5%B9%BC%E5%84%BF%E5%9B%AD%E7%9B%91%E6%8E%A7%23) `263.1K 🔥` `NEW`
1. [丽江重罚78元一锅变78半斤餐厅](https://s.weibo.com/weibo?q=%23%E4%B8%BD%E6%B1%9F%E9%87%8D%E7%BD%9A78%E5%85%83%E4%B8%80%E9%94%85%E5%8F%9878%E5%8D%8A%E6%96%A4%E9%A4%90%E5%8E%85%23) `262.9K 🔥` `NEW`
1. [纽约时报严重违反一个中国原则 (The New York Times seriously violated the one-China principle)](https://s.weibo.com/weibo?q=%23%E7%BA%BD%E7%BA%A6%E6%97%B6%E6%8A%A5%E4%B8%A5%E9%87%8D%E8%BF%9D%E5%8F%8D%E4%B8%80%E4%B8%AA%E4%B8%AD%E5%9B%BD%E5%8E%9F%E5%88%99%23) `262.7K 🔥` `NEW`
1. [韩庚女儿回东北血脉觉醒了](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%BA%9A%E5%A5%B3%E5%84%BF%E5%9B%9E%E4%B8%9C%E5%8C%97%E8%A1%80%E8%84%89%E8%A7%89%E9%86%92%E4%BA%86%23) `262.7K 🔥` `NEW`
1. [白鹿喝中药睡过头了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%96%9D%E4%B8%AD%E8%8D%AF%E7%9D%A1%E8%BF%87%E5%A4%B4%E4%BA%86%23) `262.7K 🔥` `NEW`
1. [AL对战WE](https://s.weibo.com/weibo?q=%23AL%E5%AF%B9%E6%88%98WE%23) `242.1K 🔥` `NEW`
1. [印度热得芒果直接在树上腐烂了](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%83%AD%E5%BE%97%E8%8A%92%E6%9E%9C%E7%9B%B4%E6%8E%A5%E5%9C%A8%E6%A0%91%E4%B8%8A%E8%85%90%E7%83%82%E4%BA%86%23) `239.9K 🔥` `NEW`
1. [白云机场一航班落地滑行58分钟](https://s.weibo.com/weibo?q=%23%E7%99%BD%E4%BA%91%E6%9C%BA%E5%9C%BA%E4%B8%80%E8%88%AA%E7%8F%AD%E8%90%BD%E5%9C%B0%E6%BB%91%E8%A1%8C58%E5%88%86%E9%92%9F%23) `238.1K 🔥` `NEW`
1. [浪姐个人胜率](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%B8%AA%E4%BA%BA%E8%83%9C%E7%8E%87%23) `227.6K 🔥` `NEW`
1. [穆祉丞高会晒妈妈转账](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E9%AB%98%E4%BC%9A%E6%99%92%E5%A6%88%E5%A6%88%E8%BD%AC%E8%B4%A6%23) `215.5K 🔥` `NEW`
1. [WE condi](https://s.weibo.com/weibo?q=%23WE%20condi%23) `208.6K 🔥` `NEW`
1. [TOP 新疆](https://s.weibo.com/weibo?q=%23TOP%20%E6%96%B0%E7%96%86%23) `203.1K 🔥` `NEW`
1. [高校儿童节发1元被误解为过节费 (Colleges and universities pay 1 yuan for Children's Day, misunderstood as holiday fee)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E6%A0%A1%E5%84%BF%E7%AB%A5%E8%8A%82%E5%8F%911%E5%85%83%E8%A2%AB%E8%AF%AF%E8%A7%A3%E4%B8%BA%E8%BF%87%E8%8A%82%E8%B4%B9%23) `178.7K 🔥` `NEW`
1. [TES和WE争Msi门票](https://s.weibo.com/weibo?q=%23TES%E5%92%8CWE%E4%BA%89Msi%E9%97%A8%E7%A5%A8%23) `166.5K 🔥` `NEW`
1. [杨博文新歌](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%8D%9A%E6%96%87%E6%96%B0%E6%AD%8C%23) `159.8K 🔥` `NEW`
1. [曾沛慈个人胜率100%](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E4%B8%AA%E4%BA%BA%E8%83%9C%E7%8E%87100%25%23) `155.9K 🔥` `NEW`
1. [TTG 张角](https://s.weibo.com/weibo?q=%23TTG%20%E5%BC%A0%E8%A7%92%23) `149.3K 🔥` `NEW`
1. [七年前的白鹿](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%B9%B4%E5%89%8D%E7%9A%84%E7%99%BD%E9%B9%BF%23) `148.3K 🔥` `NEW`
1. [一雪KPL运动会vlog](https://s.weibo.com/weibo?q=%23%E4%B8%80%E9%9B%AAKPL%E8%BF%90%E5%8A%A8%E4%BC%9Avlog%23) `146.8K 🔥` `NEW`
1. [黄朔祝陈浚铭儿童节快乐](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%9C%94%E7%A5%9D%E9%99%88%E6%B5%9A%E9%93%AD%E5%84%BF%E7%AB%A5%E8%8A%82%E5%BF%AB%E4%B9%90%23) `142.9K 🔥` `NEW`
1. [nova16价格](https://s.weibo.com/weibo?q=%23nova16%E4%BB%B7%E6%A0%BC%23) `142.5K 🔥` `NEW`
1. [A股超160股涨停](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E8%B6%85160%E8%82%A1%E6%B6%A8%E5%81%9C%23) `142.3K 🔥` `NEW`
1. [中际旭创总市值破1.2万亿元 (Zhongji InnoLight's total market value exceeded 1.2 trillion yuan)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%99%85%E6%97%AD%E5%88%9B%E6%80%BB%E5%B8%82%E5%80%BC%E7%A0%B41.2%E4%B8%87%E4%BA%BF%E5%85%83%23) `141.9K 🔥` `NEW`

Updated at 2026-06-01 21:03:32

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
