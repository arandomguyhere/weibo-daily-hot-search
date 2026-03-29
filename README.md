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

1. [数据感知中国经济活力满满 (Data senses that China’s economy is full of vitality)](https://s.weibo.com/weibo?q=%23%E6%95%B0%E6%8D%AE%E6%84%9F%E7%9F%A5%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E6%B4%BB%E5%8A%9B%E6%BB%A1%E6%BB%A1%23) `636.2K 🔥` `NEW`
1. [薛之谦因为下雨退票](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E5%9B%A0%E4%B8%BA%E4%B8%8B%E9%9B%A8%E9%80%80%E7%A5%A8%23) `630.6K 🔥` `NEW`
1. [凌晨3点孩子等家长睡熟偷平板玩](https://s.weibo.com/weibo?q=%23%E5%87%8C%E6%99%A83%E7%82%B9%E5%AD%A9%E5%AD%90%E7%AD%89%E5%AE%B6%E9%95%BF%E7%9D%A1%E7%86%9F%E5%81%B7%E5%B9%B3%E6%9D%BF%E7%8E%A9%23) `618.0K 🔥` `NEW`
1. [蔡磊感觉最对不起的就是妻子](https://s.weibo.com/weibo?q=%23%E8%94%A1%E7%A3%8A%E6%84%9F%E8%A7%89%E6%9C%80%E5%AF%B9%E4%B8%8D%E8%B5%B7%E7%9A%84%E5%B0%B1%E6%98%AF%E5%A6%BB%E5%AD%90%23) `601.6K 🔥` `NEW`
1. [12306回应D3665列车停电被困隧道](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94D3665%E5%88%97%E8%BD%A6%E5%81%9C%E7%94%B5%E8%A2%AB%E5%9B%B0%E9%9A%A7%E9%81%93%23) `240.8K 🔥` `NEW`
1. [田曦薇直播](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E7%9B%B4%E6%92%AD%23) `237.2K 🔥` `NEW`
1. [迪丽热巴什么时候原谅现偶](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E5%8E%9F%E8%B0%85%E7%8E%B0%E5%81%B6%23) `196.6K 🔥` `NEW`
1. [北京偶遇宋亚轩贺峻霖](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%81%B6%E9%81%87%E5%AE%8B%E4%BA%9A%E8%BD%A9%E8%B4%BA%E5%B3%BB%E9%9C%96%23) `193.6K 🔥` `NEW`
1. [李莎旻子救场](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8E%8E%E6%97%BB%E5%AD%90%E6%95%91%E5%9C%BA%23) `174.5K 🔥` `NEW`
1. [檀健次美甲](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E7%BE%8E%E7%94%B2%23) `158.2K 🔥` `NEW`
1. [狼队 小胖 (Wolves chubby)](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%20%E5%B0%8F%E8%83%96%23) `140.5K 🔥` `NEW`
1. [朴志晟哭到站不住](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%BF%97%E6%99%9F%E5%93%AD%E5%88%B0%E7%AB%99%E4%B8%8D%E4%BD%8F%23) `131.3K 🔥` `NEW`
1. [伊朗说美方唯一能听懂的就是武力](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%AF%B4%E7%BE%8E%E6%96%B9%E5%94%AF%E4%B8%80%E8%83%BD%E5%90%AC%E6%87%82%E7%9A%84%E5%B0%B1%E6%98%AF%E6%AD%A6%E5%8A%9B%23) `116.3K 🔥` `NEW`
1. [KitKat回应巧克力被偷调侃罪犯有品位](https://s.weibo.com/weibo?q=%23KitKat%E5%9B%9E%E5%BA%94%E5%B7%A7%E5%85%8B%E5%8A%9B%E8%A2%AB%E5%81%B7%E8%B0%83%E4%BE%83%E7%BD%AA%E7%8A%AF%E6%9C%89%E5%93%81%E4%BD%8D%23) `113.2K 🔥` `NEW`
1. [张远谈徐良演唱会发校服](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%BF%9C%E8%B0%88%E5%BE%90%E8%89%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E5%8F%91%E6%A0%A1%E6%9C%8D%23) `113.0K 🔥` `NEW`
1. [白鹿入夏ccd](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%85%A5%E5%A4%8Fccd%23) `103.1K 🔥` `NEW`
1. [小猫出来那一刻自己也懵了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E5%87%BA%E6%9D%A5%E9%82%A3%E4%B8%80%E5%88%BB%E8%87%AA%E5%B7%B1%E4%B9%9F%E6%87%B5%E4%BA%86%23) `103.0K 🔥` `NEW`
1. [李昀锐古力娜扎活动同框](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%8F%A4%E5%8A%9B%E5%A8%9C%E6%89%8E%E6%B4%BB%E5%8A%A8%E5%90%8C%E6%A1%86%23) `101.8K 🔥` `NEW`
1. [内存条价格下跌原因](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%AD%98%E6%9D%A1%E4%BB%B7%E6%A0%BC%E4%B8%8B%E8%B7%8C%E5%8E%9F%E5%9B%A0%23) `101.7K 🔥` `NEW`
1. [洛阳这牡丹怎么菜里菜气的](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E9%98%B3%E8%BF%99%E7%89%A1%E4%B8%B9%E6%80%8E%E4%B9%88%E8%8F%9C%E9%87%8C%E8%8F%9C%E6%B0%94%E7%9A%84%23) `101.4K 🔥` `NEW`
1. [万千惠来给浪姐省钱了 (Wan Qianhui came to save money for Sister Lang.)](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%83%A0%E6%9D%A5%E7%BB%99%E6%B5%AA%E5%A7%90%E7%9C%81%E9%92%B1%E4%BA%86%23) `101.0K 🔥` `NEW`
1. [狼队状态](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E7%8A%B6%E6%80%81%23) `100.9K 🔥` `NEW`
1. [曝T1冠军皮肤](https://s.weibo.com/weibo?q=%23%E6%9B%9DT1%E5%86%A0%E5%86%9B%E7%9A%AE%E8%82%A4%23) `100.7K 🔥` `NEW`
1. [李荣浩4连质问单依纯 (Li Ronghao questioned Shan Yichun 4 times in a row)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A94%E8%BF%9E%E8%B4%A8%E9%97%AE%E5%8D%95%E4%BE%9D%E7%BA%AF%23) `8.9M 🔥` `+22%`
1. [D3665列车被困隧道3小时](https://s.weibo.com/weibo?q=%23D3665%E5%88%97%E8%BD%A6%E8%A2%AB%E5%9B%B0%E9%9A%A7%E9%81%933%E5%B0%8F%E6%97%B6%23) `1.1M 🔥` `+96%`
1. [伊朗公布击毁美军E3预警机卫星图](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%85%AC%E5%B8%83%E5%87%BB%E6%AF%81%E7%BE%8E%E5%86%9BE3%E9%A2%84%E8%AD%A6%E6%9C%BA%E5%8D%AB%E6%98%9F%E5%9B%BE%23) `613.7K 🔥` `+204%`
1. [张凌赫摄影师 撕拉片不是P的](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%91%84%E5%BD%B1%E5%B8%88%20%E6%92%95%E6%8B%89%E7%89%87%E4%B8%8D%E6%98%AFP%E7%9A%84%23) `577.3K 🔥` `+163%`
1. [儿子一家去世老人骑行30年治愈自己 (His son's family passed away and the old man healed himself by cycling for 30 years)](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E4%B8%80%E5%AE%B6%E5%8E%BB%E4%B8%96%E8%80%81%E4%BA%BA%E9%AA%91%E8%A1%8C30%E5%B9%B4%E6%B2%BB%E6%84%88%E8%87%AA%E5%B7%B1%23) `628.8K 🔥`
1. [薛之谦演唱会 (Joker Xue Concert)](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%BC%94%E5%94%B1%E4%BC%9A%23) `598.5K 🔥`
1. [很多食物都是面朝下更好吃](https://s.weibo.com/weibo?q=%23%E5%BE%88%E5%A4%9A%E9%A3%9F%E7%89%A9%E9%83%BD%E6%98%AF%E9%9D%A2%E6%9C%9D%E4%B8%8B%E6%9B%B4%E5%A5%BD%E5%90%83%23) `584.8K 🔥`
1. [对粉底液将军反感是上纲上线吗](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E7%B2%89%E5%BA%95%E6%B6%B2%E5%B0%86%E5%86%9B%E5%8F%8D%E6%84%9F%E6%98%AF%E4%B8%8A%E7%BA%B2%E4%B8%8A%E7%BA%BF%E5%90%97%23) `185.1K 🔥`
1. [带状疱疹72小时内一定要做这件事 (This must be done within 72 hours of treating shingles)](https://s.weibo.com/weibo?q=%23%E5%B8%A6%E7%8A%B6%E7%96%B1%E7%96%B972%E5%B0%8F%E6%97%B6%E5%86%85%E4%B8%80%E5%AE%9A%E8%A6%81%E5%81%9A%E8%BF%99%E4%BB%B6%E4%BA%8B%23) `166.1K 🔥`
1. [雀巢12吨巧克力被盗 (12 tons of Nestlé chocolate stolen)](https://s.weibo.com/weibo?q=%23%E9%9B%80%E5%B7%A212%E5%90%A8%E5%B7%A7%E5%85%8B%E5%8A%9B%E8%A2%AB%E7%9B%97%23) `758.3K 🔥` `-29%`
1. [狼队对战KSG](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%AF%B9%E6%88%98KSG%23) `358.0K 🔥` `-42%`
1. [严浩翔分享歌曲 (Yan Haoxiang shares songs)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%88%86%E4%BA%AB%E6%AD%8C%E6%9B%B2%23) `347.1K 🔥` `-37%`
1. [迪丽热巴演技](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%BC%94%E6%8A%80%23) `292.8K 🔥` `-51%`
1. [单依纯 舞娘 (Shan Yichun Dancer)](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%20%E8%88%9E%E5%A8%98%23) `239.1K 🔥` `-58%`
1. [氯雷他定](https://s.weibo.com/weibo?q=%23%E6%B0%AF%E9%9B%B7%E4%BB%96%E5%AE%9A%23) `234.0K 🔥` `-60%`
1. [鸭嘴钳是无数女性做检查时的噩梦](https://s.weibo.com/weibo?q=%23%E9%B8%AD%E5%98%B4%E9%92%B3%E6%98%AF%E6%97%A0%E6%95%B0%E5%A5%B3%E6%80%A7%E5%81%9A%E6%A3%80%E6%9F%A5%E6%97%B6%E7%9A%84%E5%99%A9%E6%A2%A6%23) `233.1K 🔥` `-59%`
1. [儿子蛇缠腰父亲涂抹符水圈住疱疹](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E8%9B%87%E7%BC%A0%E8%85%B0%E7%88%B6%E4%BA%B2%E6%B6%82%E6%8A%B9%E7%AC%A6%E6%B0%B4%E5%9C%88%E4%BD%8F%E7%96%B1%E7%96%B9%23) `232.5K 🔥` `-22%`
1. [孙颖莎瘦了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%98%A6%E4%BA%86%23) `185.1K 🔥` `-32%`
1. [白日提灯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `158.8K 🔥` `-22%`
1. [邪恶砂糖橘 窝囊西红柿](https://s.weibo.com/weibo?q=%23%E9%82%AA%E6%81%B6%E7%A0%82%E7%B3%96%E6%A9%98%20%E7%AA%9D%E5%9B%8A%E8%A5%BF%E7%BA%A2%E6%9F%BF%23) `134.8K 🔥` `-34%`
1. [郝蕾说的是谁好难猜啊 (It’s hard to guess who Hao Lei is talking about.)](https://s.weibo.com/weibo?q=%23%E9%83%9D%E8%95%BE%E8%AF%B4%E7%9A%84%E6%98%AF%E8%B0%81%E5%A5%BD%E9%9A%BE%E7%8C%9C%E5%95%8A%23) `115.1K 🔥` `-81%`
1. [汪峰演唱会 (Wang Feng concert)](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E5%B3%B0%E6%BC%94%E5%94%B1%E4%BC%9A%23) `105.5K 🔥` `-82%`
1. [内存条价格出现断崖式下跌](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%AD%98%E6%9D%A1%E4%BB%B7%E6%A0%BC%E5%87%BA%E7%8E%B0%E6%96%AD%E5%B4%96%E5%BC%8F%E4%B8%8B%E8%B7%8C%23) `103.9K 🔥` `-86%`
1. [美军战斧导弹消耗速度震惊五角大楼](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E6%88%98%E6%96%A7%E5%AF%BC%E5%BC%B9%E6%B6%88%E8%80%97%E9%80%9F%E5%BA%A6%E9%9C%87%E6%83%8A%E4%BA%94%E8%A7%92%E5%A4%A7%E6%A5%BC%23) `102.8K 🔥` `-83%`
1. [母亲隐瞒近40岁女儿已婚骗17万彩礼 (Mother concealed that her nearly 40-year-old daughter was married and defrauded her of 170,000 yuan in gift money)](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E9%9A%90%E7%9E%92%E8%BF%9140%E5%B2%81%E5%A5%B3%E5%84%BF%E5%B7%B2%E5%A9%9A%E9%AA%9717%E4%B8%87%E5%BD%A9%E7%A4%BC%23) `102.4K 🔥` `-82%`
1. [仙逆 (Immortal Ni)](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%23) `102.2K 🔥` `-83%`
1. [NCT哭了](https://s.weibo.com/weibo?q=%23NCT%E5%93%AD%E4%BA%86%23) `102.1K 🔥` `-82%`

Updated at 2026-03-29 21:15:50

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
