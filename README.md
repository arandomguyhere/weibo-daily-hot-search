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

1. [李健终于上音乐节了 (Li Jian finally went to the music festival)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%81%A5%E7%BB%88%E4%BA%8E%E4%B8%8A%E9%9F%B3%E4%B9%90%E8%8A%82%E4%BA%86%23) `646.5K 🔥` `NEW`
1. [旅游的三千块钱定律](https://s.weibo.com/weibo?q=%23%E6%97%85%E6%B8%B8%E7%9A%84%E4%B8%89%E5%8D%83%E5%9D%97%E9%92%B1%E5%AE%9A%E5%BE%8B%23) `602.6K 🔥` `NEW`
1. [欧莱雅在中国的美之道](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E8%8E%B1%E9%9B%85%E5%9C%A8%E4%B8%AD%E5%9B%BD%E7%9A%84%E7%BE%8E%E4%B9%8B%E9%81%93%23) `499.0K 🔥` `NEW`
1. [杨幂脸被蒸汽眼罩烫伤了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%84%B8%E8%A2%AB%E8%92%B8%E6%B1%BD%E7%9C%BC%E7%BD%A9%E7%83%AB%E4%BC%A4%E4%BA%86%23) `289.8K 🔥` `NEW`
1. [浪姐四公 无踢馆](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%9B%9B%E5%85%AC%20%E6%97%A0%E8%B8%A2%E9%A6%86%23) `232.4K 🔥` `NEW`
1. [身体严重缺觉的7个迹象](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BD%93%E4%B8%A5%E9%87%8D%E7%BC%BA%E8%A7%89%E7%9A%847%E4%B8%AA%E8%BF%B9%E8%B1%A1%23) `228.8K 🔥` `NEW`
1. [巴黎偶遇窦靖童宋妍霏](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%BB%8E%E5%81%B6%E9%81%87%E7%AA%A6%E9%9D%96%E7%AB%A5%E5%AE%8B%E5%A6%8D%E9%9C%8F%23) `224.0K 🔥` `NEW`
1. [腾势D9把老车主宠上天了](https://s.weibo.com/weibo?q=%23%E8%85%BE%E5%8A%BFD9%E6%8A%8A%E8%80%81%E8%BD%A6%E4%B8%BB%E5%AE%A0%E4%B8%8A%E5%A4%A9%E4%BA%86%23) `214.4K 🔥` `NEW`
1. [福州平潭岛岸边漂浮大量蓝色鞋套](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%B7%9E%E5%B9%B3%E6%BD%AD%E5%B2%9B%E5%B2%B8%E8%BE%B9%E6%BC%82%E6%B5%AE%E5%A4%A7%E9%87%8F%E8%93%9D%E8%89%B2%E9%9E%8B%E5%A5%97%23) `204.3K 🔥` `NEW`
1. [克隆牦牛来了](https://s.weibo.com/weibo?q=%23%E5%85%8B%E9%9A%86%E7%89%A6%E7%89%9B%E6%9D%A5%E4%BA%86%23) `203.1K 🔥` `NEW`
1. [歌手2026首播时间 (Singer 2026 premiere time)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%E9%A6%96%E6%92%AD%E6%97%B6%E9%97%B4%23) `202.1K 🔥` `NEW`
1. [婚纱转场一出来我眼睛都睁大了](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E7%BA%B1%E8%BD%AC%E5%9C%BA%E4%B8%80%E5%87%BA%E6%9D%A5%E6%88%91%E7%9C%BC%E7%9D%9B%E9%83%BD%E7%9D%81%E5%A4%A7%E4%BA%86%23) `191.4K 🔥` `NEW`
1. [会说话的重要性](https://s.weibo.com/weibo?q=%23%E4%BC%9A%E8%AF%B4%E8%AF%9D%E7%9A%84%E9%87%8D%E8%A6%81%E6%80%A7%23) `187.8K 🔥` `NEW`
1. [崩老头](https://s.weibo.com/weibo?q=%23%E5%B4%A9%E8%80%81%E5%A4%B4%23) `170.1K 🔥` `NEW`
1. [66岁返聘医生猥亵女患者被行拘](https://s.weibo.com/weibo?q=%2366%E5%B2%81%E8%BF%94%E8%81%98%E5%8C%BB%E7%94%9F%E7%8C%A5%E4%BA%B5%E5%A5%B3%E6%82%A3%E8%80%85%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `167.9K 🔥` `NEW`
1. [白宫记者晚宴500刀一个人](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%AE%AB%E8%AE%B0%E8%80%85%E6%99%9A%E5%AE%B4500%E5%88%80%E4%B8%80%E4%B8%AA%E4%BA%BA%23) `167.9K 🔥` `NEW`
1. [如果朱志鑫演宋威龙陈都灵的孩子](https://s.weibo.com/weibo?q=%23%E5%A6%82%E6%9E%9C%E6%9C%B1%E5%BF%97%E9%91%AB%E6%BC%94%E5%AE%8B%E5%A8%81%E9%BE%99%E9%99%88%E9%83%BD%E7%81%B5%E7%9A%84%E5%AD%A9%E5%AD%90%23) `167.9K 🔥` `NEW`
1. [中山大学拟缩短课间至5分钟引争议](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%B1%B1%E5%A4%A7%E5%AD%A6%E6%8B%9F%E7%BC%A9%E7%9F%AD%E8%AF%BE%E9%97%B4%E8%87%B35%E5%88%86%E9%92%9F%E5%BC%95%E4%BA%89%E8%AE%AE%23) `166.3K 🔥` `NEW`
1. [王橹杰被路人盯害羞了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E8%A2%AB%E8%B7%AF%E4%BA%BA%E7%9B%AF%E5%AE%B3%E7%BE%9E%E4%BA%86%23) `165.1K 🔥` `NEW`
1. [男子凌晨朝泳池投掷火锅底料](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%87%8C%E6%99%A8%E6%9C%9D%E6%B3%B3%E6%B1%A0%E6%8A%95%E6%8E%B7%E7%81%AB%E9%94%85%E5%BA%95%E6%96%99%23) `149.3K 🔥` `NEW`
1. [深圳一铁锅炖老板24小时不敢打烊 (The boss of an iron pot stew shop in Shenzhen doesn’t dare to close 24 hours a day)](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E4%B8%80%E9%93%81%E9%94%85%E7%82%96%E8%80%81%E6%9D%BF24%E5%B0%8F%E6%97%B6%E4%B8%8D%E6%95%A2%E6%89%93%E7%83%8A%23) `143.0K 🔥` `NEW`
1. [白鹿包场支持郑恺李晨](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8C%85%E5%9C%BA%E6%94%AF%E6%8C%81%E9%83%91%E6%81%BA%E6%9D%8E%E6%99%A8%23) `130.8K 🔥` `NEW`
1. [单依纯郑州演唱会打折](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E9%83%91%E5%B7%9E%E6%BC%94%E5%94%B1%E4%BC%9A%E6%89%93%E6%8A%98%23) `123.6K 🔥` `NEW`
1. [建议不要过度依赖AI](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%B8%8D%E8%A6%81%E8%BF%87%E5%BA%A6%E4%BE%9D%E8%B5%96AI%23) `123.6K 🔥` `NEW`
1. [四晚494元房间被退单后变一晚569元](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E6%99%9A494%E5%85%83%E6%88%BF%E9%97%B4%E8%A2%AB%E9%80%80%E5%8D%95%E5%90%8E%E5%8F%98%E4%B8%80%E6%99%9A569%E5%85%83%23) `1.1M 🔥` `+168%`
1. [黄金被扣30年将按正常时效处理](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%A2%AB%E6%89%A330%E5%B9%B4%E5%B0%86%E6%8C%89%E6%AD%A3%E5%B8%B8%E6%97%B6%E6%95%88%E5%A4%84%E7%90%86%23) `829.1K 🔥` `+450%`
1. [华住会崩了](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%BD%8F%E4%BC%9A%E5%B4%A9%E4%BA%86%23) `548.8K 🔥` `+264%`
1. [广交会点燃入境消费新热潮](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%BA%A4%E4%BC%9A%E7%82%B9%E7%87%83%E5%85%A5%E5%A2%83%E6%B6%88%E8%B4%B9%E6%96%B0%E7%83%AD%E6%BD%AE%23) `648.8K 🔥`
1. [被AI骗去毒蛇窝徒步](https://s.weibo.com/weibo?q=%23%E8%A2%ABAI%E9%AA%97%E5%8E%BB%E6%AF%92%E8%9B%87%E7%AA%9D%E5%BE%92%E6%AD%A5%23) `580.0K 🔥`
1. [骨相美的人适合上镜](https://s.weibo.com/weibo?q=%23%E9%AA%A8%E7%9B%B8%E7%BE%8E%E7%9A%84%E4%BA%BA%E9%80%82%E5%90%88%E4%B8%8A%E9%95%9C%23) `412.4K 🔥`
1. [茶卡盐湖心形雕塑被吐槽画蛇添足 (The heart-shaped sculpture in Chaka Salt Lake was criticized for being superfluous)](https://s.weibo.com/weibo?q=%23%E8%8C%B6%E5%8D%A1%E7%9B%90%E6%B9%96%E5%BF%83%E5%BD%A2%E9%9B%95%E5%A1%91%E8%A2%AB%E5%90%90%E6%A7%BD%E7%94%BB%E8%9B%87%E6%B7%BB%E8%B6%B3%23) `484.2K 🔥` `-41%`
1. [单依纯郑州上座率 (Shan Yichun Zhengzhou attendance rate)](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E9%83%91%E5%B7%9E%E4%B8%8A%E5%BA%A7%E7%8E%87%23) `412.5K 🔥` `-39%`
1. [歌手 AI海报](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%20AI%E6%B5%B7%E6%8A%A5%23) `297.8K 🔥` `-73%`
1. [男子酒后3次布洛芬全身95%溃烂](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%85%92%E5%90%8E3%E6%AC%A1%E5%B8%83%E6%B4%9B%E8%8A%AC%E5%85%A8%E8%BA%AB95%25%E6%BA%83%E7%83%82%23) `285.7K 🔥` `-24%`
1. [平台明确不要的艺人](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E5%8F%B0%E6%98%8E%E7%A1%AE%E4%B8%8D%E8%A6%81%E7%9A%84%E8%89%BA%E4%BA%BA%23) `272.3K 🔥` `-34%`
1. [labubu冰箱溢价3000元](https://s.weibo.com/weibo?q=%23labubu%E5%86%B0%E7%AE%B1%E6%BA%A2%E4%BB%B73000%E5%85%83%23) `258.7K 🔥` `-39%`
1. [上海咖啡店偶遇了赵丽颖 (Encountered Zhao Liying in a Shanghai coffee shop)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%92%96%E5%95%A1%E5%BA%97%E5%81%B6%E9%81%87%E4%BA%86%E8%B5%B5%E4%B8%BD%E9%A2%96%23) `258.2K 🔥` `-26%`
1. [氧化菊把杨颖穿过的礼服碎钻弄丢一颗 (Oxidation Ju lost a diamond in the dress worn by Yang Ying)](https://s.weibo.com/weibo?q=%23%E6%B0%A7%E5%8C%96%E8%8F%8A%E6%8A%8A%E6%9D%A8%E9%A2%96%E7%A9%BF%E8%BF%87%E7%9A%84%E7%A4%BC%E6%9C%8D%E7%A2%8E%E9%92%BB%E5%BC%84%E4%B8%A2%E4%B8%80%E9%A2%97%23) `248.2K 🔥` `-32%`
1. [詹姆斯回应火箭湖人赛后一片混乱](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E5%9B%9E%E5%BA%94%E7%81%AB%E7%AE%AD%E6%B9%96%E4%BA%BA%E8%B5%9B%E5%90%8E%E4%B8%80%E7%89%87%E6%B7%B7%E4%B9%B1%23) `244.0K 🔥` `-29%`
1. [时代少年团 美宝莲](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E7%BE%8E%E5%AE%9D%E8%8E%B2%23) `239.7K 🔥` `-46%`
1. [曝演员片酬已经跌到低点](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%BC%94%E5%91%98%E7%89%87%E9%85%AC%E5%B7%B2%E7%BB%8F%E8%B7%8C%E5%88%B0%E4%BD%8E%E7%82%B9%23) `216.8K 🔥` `-42%`
1. [田曦薇 飞升](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%20%E9%A3%9E%E5%8D%87%23) `209.2K 🔥` `-46%`
1. [买纸巾得多个心眼 (Be careful when buying paper towels)](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E7%BA%B8%E5%B7%BE%E5%BE%97%E5%A4%9A%E4%B8%AA%E5%BF%83%E7%9C%BC%23) `205.3K 🔥` `-54%`
1. [曝易梦玲整容](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%98%93%E6%A2%A6%E7%8E%B2%E6%95%B4%E5%AE%B9%23) `205.3K 🔥` `-42%`
1. [轰炸中伊朗国宝来到中国 (Iran’s national treasure comes to China during bombing)](https://s.weibo.com/weibo?q=%23%E8%BD%B0%E7%82%B8%E4%B8%AD%E4%BC%8A%E6%9C%97%E5%9B%BD%E5%AE%9D%E6%9D%A5%E5%88%B0%E4%B8%AD%E5%9B%BD%23) `203.5K 🔥` `-46%`
1. [丁禹兮回应今年没那么火了](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%9B%9E%E5%BA%94%E4%BB%8A%E5%B9%B4%E6%B2%A1%E9%82%A3%E4%B9%88%E7%81%AB%E4%BA%86%23) `202.3K 🔥` `-39%`
1. [戚薇3岁儿子近照](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%873%E5%B2%81%E5%84%BF%E5%AD%90%E8%BF%91%E7%85%A7%23) `190.7K 🔥` `-28%`
1. [孙杨回应执着买金蛋](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%9B%9E%E5%BA%94%E6%89%A7%E7%9D%80%E4%B9%B0%E9%87%91%E8%9B%8B%23) `189.3K 🔥` `-53%`
1. [疑似汤唯怀二胎](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E6%B1%A4%E5%94%AF%E6%80%80%E4%BA%8C%E8%83%8E%23) `187.2K 🔥` `-41%`
1. [叶璇与继母遭亡父保姆起诉](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E7%92%87%E4%B8%8E%E7%BB%A7%E6%AF%8D%E9%81%AD%E4%BA%A1%E7%88%B6%E4%BF%9D%E5%A7%86%E8%B5%B7%E8%AF%89%23) `174.7K 🔥` `-46%`
1. [跟你们不爱吃米饭的说不清楚](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E4%BD%A0%E4%BB%AC%E4%B8%8D%E7%88%B1%E5%90%83%E7%B1%B3%E9%A5%AD%E7%9A%84%E8%AF%B4%E4%B8%8D%E6%B8%85%E6%A5%9A%23) `141.5K 🔥` `-26%`

Updated at 2026-04-27 20:12:44

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
