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

1. [茶卡盐湖心形雕塑被吐槽画蛇添足 (The heart-shaped sculpture in Chaka Salt Lake was criticized for being superfluous)](https://s.weibo.com/weibo?q=%23%E8%8C%B6%E5%8D%A1%E7%9B%90%E6%B9%96%E5%BF%83%E5%BD%A2%E9%9B%95%E5%A1%91%E8%A2%AB%E5%90%90%E6%A7%BD%E7%94%BB%E8%9B%87%E6%B7%BB%E8%B6%B3%23) `819.6K 🔥` `NEW`
1. [被AI骗去毒蛇窝徒步](https://s.weibo.com/weibo?q=%23%E8%A2%ABAI%E9%AA%97%E5%8E%BB%E6%AF%92%E8%9B%87%E7%AA%9D%E5%BE%92%E6%AD%A5%23) `698.5K 🔥` `NEW`
1. [时代少年团 美宝莲](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E7%BE%8E%E5%AE%9D%E8%8E%B2%23) `446.6K 🔥` `NEW`
1. [labubu冰箱溢价3000元](https://s.weibo.com/weibo?q=%23labubu%E5%86%B0%E7%AE%B1%E6%BA%A2%E4%BB%B73000%E5%85%83%23) `424.8K 🔥` `NEW`
1. [四晚494元房间被退单后变一晚569元](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E6%99%9A494%E5%85%83%E6%88%BF%E9%97%B4%E8%A2%AB%E9%80%80%E5%8D%95%E5%90%8E%E5%8F%98%E4%B8%80%E6%99%9A569%E5%85%83%23) `423.9K 🔥` `NEW`
1. [曝史上最薄iPhone来了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8F%B2%E4%B8%8A%E6%9C%80%E8%96%84iPhone%E6%9D%A5%E4%BA%86%23) `423.1K 🔥` `NEW`
1. [孙杨回应执着买金蛋](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%9B%9E%E5%BA%94%E6%89%A7%E7%9D%80%E4%B9%B0%E9%87%91%E8%9B%8B%23) `399.4K 🔥` `NEW`
1. [15岁少女酒吧饮用滴滴水身亡](https://s.weibo.com/weibo?q=%2315%E5%B2%81%E5%B0%91%E5%A5%B3%E9%85%92%E5%90%A7%E9%A5%AE%E7%94%A8%E6%BB%B4%E6%BB%B4%E6%B0%B4%E8%BA%AB%E4%BA%A1%23) `386.2K 🔥` `NEW`
1. [骨相美的人适合上镜](https://s.weibo.com/weibo?q=%23%E9%AA%A8%E7%9B%B8%E7%BE%8E%E7%9A%84%E4%BA%BA%E9%80%82%E5%90%88%E4%B8%8A%E9%95%9C%23) `382.1K 🔥` `NEW`
1. [男子酒后3次布洛芬全身95%溃烂](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%85%92%E5%90%8E3%E6%AC%A1%E5%B8%83%E6%B4%9B%E8%8A%AC%E5%85%A8%E8%BA%AB95%25%E6%BA%83%E7%83%82%23) `376.1K 🔥` `NEW`
1. [上海咖啡店偶遇了赵丽颖 (Encountered Zhao Liying in a Shanghai coffee shop)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%92%96%E5%95%A1%E5%BA%97%E5%81%B6%E9%81%87%E4%BA%86%E8%B5%B5%E4%B8%BD%E9%A2%96%23) `348.0K 🔥` `NEW`
1. [学生谈高中教师疑遭霸凌跳楼](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E7%94%9F%E8%B0%88%E9%AB%98%E4%B8%AD%E6%95%99%E5%B8%88%E7%96%91%E9%81%AD%E9%9C%B8%E5%87%8C%E8%B7%B3%E6%A5%BC%23) `338.8K 🔥` `NEW`
1. [38万买百箱茅台全是假酒成本仅百元](https://s.weibo.com/weibo?q=%2338%E4%B8%87%E4%B9%B0%E7%99%BE%E7%AE%B1%E8%8C%85%E5%8F%B0%E5%85%A8%E6%98%AF%E5%81%87%E9%85%92%E6%88%90%E6%9C%AC%E4%BB%85%E7%99%BE%E5%85%83%23) `334.6K 🔥` `NEW`
1. [头一回见这么正的负能量](https://s.weibo.com/weibo?q=%23%E5%A4%B4%E4%B8%80%E5%9B%9E%E8%A7%81%E8%BF%99%E4%B9%88%E6%AD%A3%E7%9A%84%E8%B4%9F%E8%83%BD%E9%87%8F%23) `321.2K 🔥` `NEW`
1. [当我只睡了2小时就去上班](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E5%8F%AA%E7%9D%A1%E4%BA%862%E5%B0%8F%E6%97%B6%E5%B0%B1%E5%8E%BB%E4%B8%8A%E7%8F%AD%23) `211.9K 🔥` `NEW`
1. [钧正平评日本大佐归来](https://s.weibo.com/weibo?q=%23%E9%92%A7%E6%AD%A3%E5%B9%B3%E8%AF%84%E6%97%A5%E6%9C%AC%E5%A4%A7%E4%BD%90%E5%BD%92%E6%9D%A5%23) `194.4K 🔥` `NEW`
1. [外卖小哥3个月助人154次](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%8D%96%E5%B0%8F%E5%93%A53%E4%B8%AA%E6%9C%88%E5%8A%A9%E4%BA%BA154%E6%AC%A1%23) `191.9K 🔥` `NEW`
1. [跟你们不爱吃米饭的说不清楚](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E4%BD%A0%E4%BB%AC%E4%B8%8D%E7%88%B1%E5%90%83%E7%B1%B3%E9%A5%AD%E7%9A%84%E8%AF%B4%E4%B8%8D%E6%B8%85%E6%A5%9A%23) `191.6K 🔥` `NEW`
1. [罗永浩谈东方甄选风波](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E8%B0%88%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E9%A3%8E%E6%B3%A2%23) `185.2K 🔥` `NEW`
1. [丁俊晖回复赵心童](https://s.weibo.com/weibo?q=%23%E4%B8%81%E4%BF%8A%E6%99%96%E5%9B%9E%E5%A4%8D%E8%B5%B5%E5%BF%83%E7%AB%A5%23) `172.3K 🔥` `NEW`
1. [清华女博士分享万能通考方法 (Female doctor from Tsinghua University shares the universal test method)](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8D%8E%E5%A5%B3%E5%8D%9A%E5%A3%AB%E5%88%86%E4%BA%AB%E4%B8%87%E8%83%BD%E9%80%9A%E8%80%83%E6%96%B9%E6%B3%95%23) `160.1K 🔥` `NEW`
1. [橹穆舞台播放量时代峰峻第二](https://s.weibo.com/weibo?q=%23%E6%A9%B9%E7%A9%86%E8%88%9E%E5%8F%B0%E6%92%AD%E6%94%BE%E9%87%8F%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E7%AC%AC%E4%BA%8C%23) `157.0K 🔥` `NEW`
1. [小米新款机器人](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%96%B0%E6%AC%BE%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `153.3K 🔥` `NEW`
1. [华住会崩了](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%BD%8F%E4%BC%9A%E5%B4%A9%E4%BA%86%23) `150.9K 🔥` `NEW`
1. [黄金被扣30年将按正常时效处理](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%A2%AB%E6%89%A330%E5%B9%B4%E5%B0%86%E6%8C%89%E6%AD%A3%E5%B8%B8%E6%97%B6%E6%95%88%E5%A4%84%E7%90%86%23) `150.8K 🔥` `NEW`
1. [第二代腾势D9搭载闪充今晚上市 (The second generation Denza D9 equipped with flash charging will be launched tonight)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%8C%E4%BB%A3%E8%85%BE%E5%8A%BFD9%E6%90%AD%E8%BD%BD%E9%97%AA%E5%85%85%E4%BB%8A%E6%99%9A%E4%B8%8A%E5%B8%82%23) `705.3K 🔥` `+78%`
1. [平台明确不要的艺人](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E5%8F%B0%E6%98%8E%E7%A1%AE%E4%B8%8D%E8%A6%81%E7%9A%84%E8%89%BA%E4%BA%BA%23) `413.4K 🔥` `+54%`
1. [禁止外资收购Manus项目](https://s.weibo.com/weibo?q=%23%E7%A6%81%E6%AD%A2%E5%A4%96%E8%B5%84%E6%94%B6%E8%B4%ADManus%E9%A1%B9%E7%9B%AE%23) `402.4K 🔥` `+49%`
1. [田曦薇 飞升](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%20%E9%A3%9E%E5%8D%87%23) `390.8K 🔥` `+53%`
1. [轰炸中伊朗国宝来到中国](https://s.weibo.com/weibo?q=%23%E8%BD%B0%E7%82%B8%E4%B8%AD%E4%BC%8A%E6%9C%97%E5%9B%BD%E5%AE%9D%E6%9D%A5%E5%88%B0%E4%B8%AD%E5%9B%BD%23) `380.3K 🔥` `+42%`
1. [曝演员片酬已经跌到低点](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%BC%94%E5%91%98%E7%89%87%E9%85%AC%E5%B7%B2%E7%BB%8F%E8%B7%8C%E5%88%B0%E4%BD%8E%E7%82%B9%23) `371.2K 🔥` `+39%`
1. [氧化菊把杨颖穿过的礼服碎钻弄丢一颗 (Oxidation Ju lost a diamond in the dress worn by Yang Ying)](https://s.weibo.com/weibo?q=%23%E6%B0%A7%E5%8C%96%E8%8F%8A%E6%8A%8A%E6%9D%A8%E9%A2%96%E7%A9%BF%E8%BF%87%E7%9A%84%E7%A4%BC%E6%9C%8D%E7%A2%8E%E9%92%BB%E5%BC%84%E4%B8%A2%E4%B8%80%E9%A2%97%23) `366.2K 🔥` `+37%`
1. [Meta Manus](https://s.weibo.com/weibo?q=%23Meta%20Manus%23) `359.1K 🔥` `+38%`
1. [曝易梦玲整容](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%98%93%E6%A2%A6%E7%8E%B2%E6%95%B4%E5%AE%B9%23) `356.4K 🔥` `+33%`
1. [詹姆斯回应火箭湖人赛后一片混乱](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E5%9B%9E%E5%BA%94%E7%81%AB%E7%AE%AD%E6%B9%96%E4%BA%BA%E8%B5%9B%E5%90%8E%E4%B8%80%E7%89%87%E6%B7%B7%E4%B9%B1%23) `344.9K 🔥` `+44%`
1. [丁禹兮回应今年没那么火了](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%9B%9E%E5%BA%94%E4%BB%8A%E5%B9%B4%E6%B2%A1%E9%82%A3%E4%B9%88%E7%81%AB%E4%BA%86%23) `332.2K 🔥` `+24%`
1. [叶璇与继母遭亡父保姆起诉](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E7%92%87%E4%B8%8E%E7%BB%A7%E6%AF%8D%E9%81%AD%E4%BA%A1%E7%88%B6%E4%BF%9D%E5%A7%86%E8%B5%B7%E8%AF%89%23) `326.4K 🔥` `+32%`
1. [疑似汤唯怀二胎](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E6%B1%A4%E5%94%AF%E6%80%80%E4%BA%8C%E8%83%8E%23) `318.5K 🔥` `+24%`
1. [歌手 AI海报](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%20AI%E6%B5%B7%E6%8A%A5%23) `1.1M 🔥`
1. [单依纯郑州上座率](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E9%83%91%E5%B7%9E%E4%B8%8A%E5%BA%A7%E7%8E%87%23) `679.8K 🔥`
1. [大眼仔北京车展玩嗨了](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%9C%BC%E4%BB%94%E5%8C%97%E4%BA%AC%E8%BD%A6%E5%B1%95%E7%8E%A9%E5%97%A8%E4%BA%86%23) `446.3K 🔥`
1. [买纸巾得多个心眼 (Be careful when buying paper towels)](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E7%BA%B8%E5%B7%BE%E5%BE%97%E5%A4%9A%E4%B8%AA%E5%BF%83%E7%9C%BC%23) `444.3K 🔥`
1. [戚薇3岁儿子近照](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%873%E5%B2%81%E5%84%BF%E5%AD%90%E8%BF%91%E7%85%A7%23) `265.0K 🔥`
1. [胖东来遭哄抢矿泉水为纯物理过滤](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E9%81%AD%E5%93%84%E6%8A%A2%E7%9F%BF%E6%B3%89%E6%B0%B4%E4%B8%BA%E7%BA%AF%E7%89%A9%E7%90%86%E8%BF%87%E6%BB%A4%23) `256.8K 🔥`
1. [朱珠的嘴都要憋不住了](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E7%8F%A0%E7%9A%84%E5%98%B4%E9%83%BD%E8%A6%81%E6%86%8B%E4%B8%8D%E4%BD%8F%E4%BA%86%23) `254.9K 🔥`
1. [时代峰峻全世界最小方的公司](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%85%A8%E4%B8%96%E7%95%8C%E6%9C%80%E5%B0%8F%E6%96%B9%E7%9A%84%E5%85%AC%E5%8F%B8%23) `220.8K 🔥`
1. [董卿周涛 蕾丝边西装](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%8D%BF%E5%91%A8%E6%B6%9B%20%E8%95%BE%E4%B8%9D%E8%BE%B9%E8%A5%BF%E8%A3%85%23) `208.5K 🔥`
1. [广交会点燃入境消费新热潮](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%BA%A4%E4%BC%9A%E7%82%B9%E7%87%83%E5%85%A5%E5%A2%83%E6%B6%88%E8%B4%B9%E6%96%B0%E7%83%AD%E6%BD%AE%23) `706.4K 🔥` `-24%`
1. [醋酸美甲](https://s.weibo.com/weibo?q=%23%E9%86%8B%E9%85%B8%E7%BE%8E%E7%94%B2%23) `231.7K 🔥` `-40%`
1. [被我爸的道歉方式震惊了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%88%91%E7%88%B8%E7%9A%84%E9%81%93%E6%AD%89%E6%96%B9%E5%BC%8F%E9%9C%87%E6%83%8A%E4%BA%86%23) `191.7K 🔥` `-28%`
1. [美国已收到伊朗谈判新方案](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%B7%B2%E6%94%B6%E5%88%B0%E4%BC%8A%E6%9C%97%E8%B0%88%E5%88%A4%E6%96%B0%E6%96%B9%E6%A1%88%23) `164.0K 🔥` `-31%`

Updated at 2026-04-27 18:49:13

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
