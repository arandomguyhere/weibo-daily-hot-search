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

1. [重庆理工大学通报女子称遭性侵](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%90%E7%A7%B0%E9%81%AD%E6%80%A7%E4%BE%B5%23) `1.1M 🔥` `NEW`
1. [16岁少年与14岁女孩发生关系判3年](https://s.weibo.com/weibo?q=%2316%E5%B2%81%E5%B0%91%E5%B9%B4%E4%B8%8E14%E5%B2%81%E5%A5%B3%E5%AD%A9%E5%8F%91%E7%94%9F%E5%85%B3%E7%B3%BB%E5%88%A43%E5%B9%B4%23) `785.8K 🔥` `NEW`
1. [坚持四个注重做强先进制造业](https://s.weibo.com/weibo?q=%23%E5%9D%9A%E6%8C%81%E5%9B%9B%E4%B8%AA%E6%B3%A8%E9%87%8D%E5%81%9A%E5%BC%BA%E5%85%88%E8%BF%9B%E5%88%B6%E9%80%A0%E4%B8%9A%23) `656.2K 🔥` `NEW`
1. [vivo X500系列](https://s.weibo.com/weibo?q=%23vivo%20X500%E7%B3%BB%E5%88%97%23) `488.3K 🔥` `NEW`
1. [潘展乐称张展硕是奇迹之子](https://s.weibo.com/weibo?q=%23%E6%BD%98%E5%B1%95%E4%B9%90%E7%A7%B0%E5%BC%A0%E5%B1%95%E7%A1%95%E6%98%AF%E5%A5%87%E8%BF%B9%E4%B9%8B%E5%AD%90%23) `351.0K 🔥` `NEW`
1. [中国游泳队金金金金金](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%B8%B8%E6%B3%B3%E9%98%9F%E9%87%91%E9%87%91%E9%87%91%E9%87%91%E9%87%91%23) `283.6K 🔥` `NEW`
1. [田曦薇猫的树 二搭](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E7%8C%AB%E7%9A%84%E6%A0%91%20%E4%BA%8C%E6%90%AD%23) `232.8K 🔥` `NEW`
1. [随手问智搜快速了解博主](https://s.weibo.com/weibo?q=%23%E9%9A%8F%E6%89%8B%E9%97%AE%E6%99%BA%E6%90%9C%E5%BF%AB%E9%80%9F%E4%BA%86%E8%A7%A3%E5%8D%9A%E4%B8%BB%23) `225.1K 🔥` `NEW`
1. [兰香如故](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%23) `217.7K 🔥` `NEW`
1. [柬埔寨电诈园区内部曝光](https://s.weibo.com/weibo?q=%23%E6%9F%AC%E5%9F%94%E5%AF%A8%E7%94%B5%E8%AF%88%E5%9B%AD%E5%8C%BA%E5%86%85%E9%83%A8%E6%9B%9D%E5%85%89%23) `179.8K 🔥` `NEW`
1. [秀才 兰香](https://s.weibo.com/weibo?q=%23%E7%A7%80%E6%89%8D%20%E5%85%B0%E9%A6%99%23) `179.6K 🔥` `NEW`
1. [吴尊晒NeiNei穿婚服](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%B0%8A%E6%99%92NeiNei%E7%A9%BF%E5%A9%9A%E6%9C%8D%23) `179.2K 🔥` `NEW`
1. [曝某S加女主片酬从几千万降至100万](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9F%90S%E5%8A%A0%E5%A5%B3%E4%B8%BB%E7%89%87%E9%85%AC%E4%BB%8E%E5%87%A0%E5%8D%83%E4%B8%87%E9%99%8D%E8%87%B3100%E4%B8%87%23) `178.8K 🔥` `NEW`
1. [罗永浩已取证将起诉](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E5%B7%B2%E5%8F%96%E8%AF%81%E5%B0%86%E8%B5%B7%E8%AF%89%23) `178.0K 🔥` `NEW`
1. [杨紫直播皮肤状态](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%9B%B4%E6%92%AD%E7%9A%AE%E8%82%A4%E7%8A%B6%E6%80%81%23) `177.5K 🔥` `NEW`
1. [张家齐这一跳完全就是教科书级别](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E8%BF%99%E4%B8%80%E8%B7%B3%E5%AE%8C%E5%85%A8%E5%B0%B1%E6%98%AF%E6%95%99%E7%A7%91%E4%B9%A6%E7%BA%A7%E5%88%AB%23) `176.9K 🔥` `NEW`
1. [Lisa疑似与blue谈恋爱了](https://s.weibo.com/weibo?q=%23Lisa%E7%96%91%E4%BC%BC%E4%B8%8Eblue%E8%B0%88%E6%81%8B%E7%88%B1%E4%BA%86%23) `176.2K 🔥` `NEW`
1. [鹿晗养头发的痛](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%85%BB%E5%A4%B4%E5%8F%91%E7%9A%84%E7%97%9B%23) `176.1K 🔥` `NEW`
1. [贾国龙 公关](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E5%9B%BD%E9%BE%99%20%E5%85%AC%E5%85%B3%23) `175.4K 🔥` `NEW`
1. [煤企为抄近道在明长城挖了个口子](https://s.weibo.com/weibo?q=%23%E7%85%A4%E4%BC%81%E4%B8%BA%E6%8A%84%E8%BF%91%E9%81%93%E5%9C%A8%E6%98%8E%E9%95%BF%E5%9F%8E%E6%8C%96%E4%BA%86%E4%B8%AA%E5%8F%A3%E5%AD%90%23) `174.7K 🔥` `NEW`
1. [你身体缺什么其实早就显露出来了](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E8%BA%AB%E4%BD%93%E7%BC%BA%E4%BB%80%E4%B9%88%E5%85%B6%E5%AE%9E%E6%97%A9%E5%B0%B1%E6%98%BE%E9%9C%B2%E5%87%BA%E6%9D%A5%E4%BA%86%23) `173.2K 🔥` `NEW`
1. [白鹿锁骨能接发夹](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E9%94%81%E9%AA%A8%E8%83%BD%E6%8E%A5%E5%8F%91%E5%A4%B9%23) `172.4K 🔥` `NEW`
1. [张佳宁机场都要人扶着走](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BD%B3%E5%AE%81%E6%9C%BA%E5%9C%BA%E9%83%BD%E8%A6%81%E4%BA%BA%E6%89%B6%E7%9D%80%E8%B5%B0%23) `171.2K 🔥` `NEW`
1. [多地结婚发钱](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E7%BB%93%E5%A9%9A%E5%8F%91%E9%92%B1%23) `169.7K 🔥` `NEW`
1. [初中生早餐 碳水配碳水](https://s.weibo.com/weibo?q=%23%E5%88%9D%E4%B8%AD%E7%94%9F%E6%97%A9%E9%A4%90%20%E7%A2%B3%E6%B0%B4%E9%85%8D%E7%A2%B3%E6%B0%B4%23) `168.7K 🔥` `NEW`
1. [卡补缴漏洞不交社保](https://s.weibo.com/weibo?q=%23%E5%8D%A1%E8%A1%A5%E7%BC%B4%E6%BC%8F%E6%B4%9E%E4%B8%8D%E4%BA%A4%E7%A4%BE%E4%BF%9D%23) `167.5K 🔥` `NEW`
1. [印度一对情侣晚归被多人围堵施暴](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E4%B8%80%E5%AF%B9%E6%83%85%E4%BE%A3%E6%99%9A%E5%BD%92%E8%A2%AB%E5%A4%9A%E4%BA%BA%E5%9B%B4%E5%A0%B5%E6%96%BD%E6%9A%B4%23) `166.6K 🔥` `NEW`
1. [拍视频也得是vivo](https://s.weibo.com/weibo?q=%23%E6%8B%8D%E8%A7%86%E9%A2%91%E4%B9%9F%E5%BE%97%E6%98%AFvivo%23) `164.6K 🔥` `NEW`
1. [方圆向王者荣耀游戏玩家道歉](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%9C%86%E5%90%91%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E6%B8%B8%E6%88%8F%E7%8E%A9%E5%AE%B6%E9%81%93%E6%AD%89%23) `163.3K 🔥` `NEW`
1. [青海辟谣前文旅厅厅长开网约车](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%B5%B7%E8%BE%9F%E8%B0%A3%E5%89%8D%E6%96%87%E6%97%85%E5%8E%85%E5%8E%85%E9%95%BF%E5%BC%80%E7%BD%91%E7%BA%A6%E8%BD%A6%23) `159.0K 🔥` `NEW`
1. [vivoX500系列测评](https://s.weibo.com/weibo?q=%23vivoX500%E7%B3%BB%E5%88%97%E6%B5%8B%E8%AF%84%23) `156.7K 🔥` `NEW`
1. [王俊凯回复敖子逸](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%9B%9E%E5%A4%8D%E6%95%96%E5%AD%90%E9%80%B8%23) `154.2K 🔥` `NEW`
1. [贵阳街头10元脆哨炒饭发明人是天才](https://s.weibo.com/weibo?q=%23%E8%B4%B5%E9%98%B3%E8%A1%97%E5%A4%B410%E5%85%83%E8%84%86%E5%93%A8%E7%82%92%E9%A5%AD%E5%8F%91%E6%98%8E%E4%BA%BA%E6%98%AF%E5%A4%A9%E6%89%8D%23) `153.7K 🔥` `NEW`
1. [谁发明的婚礼大棉棒](https://s.weibo.com/weibo?q=%23%E8%B0%81%E5%8F%91%E6%98%8E%E7%9A%84%E5%A9%9A%E7%A4%BC%E5%A4%A7%E6%A3%89%E6%A3%92%23) `151.4K 🔥` `NEW`
1. [超7成肺癌病例不吸烟无粉尘暴露](https://s.weibo.com/weibo?q=%23%E8%B6%857%E6%88%90%E8%82%BA%E7%99%8C%E7%97%85%E4%BE%8B%E4%B8%8D%E5%90%B8%E7%83%9F%E6%97%A0%E7%B2%89%E5%B0%98%E6%9A%B4%E9%9C%B2%23) `150.0K 🔥` `NEW`
1. [王一博香港帆船比赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E9%A6%99%E6%B8%AF%E5%B8%86%E8%88%B9%E6%AF%94%E8%B5%9B%23) `149.3K 🔥` `NEW`
1. [中国女子仙本那旅游遭男子闯入脱衣](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E4%BB%99%E6%9C%AC%E9%82%A3%E6%97%85%E6%B8%B8%E9%81%AD%E7%94%B7%E5%AD%90%E9%97%AF%E5%85%A5%E8%84%B1%E8%A1%A3%23) `145.9K 🔥` `NEW`
1. [兰香如故27集大婚](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%8527%E9%9B%86%E5%A4%A7%E5%A9%9A%23) `145.8K 🔥` `NEW`
1. [28岁上海读博的我迷茫了](https://s.weibo.com/weibo?q=%2328%E5%B2%81%E4%B8%8A%E6%B5%B7%E8%AF%BB%E5%8D%9A%E7%9A%84%E6%88%91%E8%BF%B7%E8%8C%AB%E4%BA%86%23) `142.1K 🔥` `NEW`
1. [校方回应男生逃避军训飞往上海旅游](https://s.weibo.com/weibo?q=%23%E6%A0%A1%E6%96%B9%E5%9B%9E%E5%BA%94%E7%94%B7%E7%94%9F%E9%80%83%E9%81%BF%E5%86%9B%E8%AE%AD%E9%A3%9E%E5%BE%80%E4%B8%8A%E6%B5%B7%E6%97%85%E6%B8%B8%23) `135.4K 🔥` `NEW`
1. [婚前攒下18.8万需要多久](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%89%8D%E6%94%92%E4%B8%8B18.8%E4%B8%87%E9%9C%80%E8%A6%81%E5%A4%9A%E4%B9%85%23) `134.0K 🔥` `NEW`
1. [特朗普回应中美元首会晤](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%9B%9E%E5%BA%94%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E4%BC%9A%E6%99%A4%23) `133.5K 🔥` `NEW`
1. [爱情公寓的流量太恐怖](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E7%9A%84%E6%B5%81%E9%87%8F%E5%A4%AA%E6%81%90%E6%80%96%23) `133.2K 🔥` `NEW`
1. [今年最好的2K屏都在vivo](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E6%9C%80%E5%A5%BD%E7%9A%842K%E5%B1%8F%E9%83%BD%E5%9C%A8vivo%23) `121.4K 🔥` `NEW`
1. [曝披荆斩棘四公选歌](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E5%9B%9B%E5%85%AC%E9%80%89%E6%AD%8C%23) `121.3K 🔥` `NEW`
1. [孙乐言奥斯卡 女明星和男助理](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%B9%90%E8%A8%80%E5%A5%A5%E6%96%AF%E5%8D%A1%20%E5%A5%B3%E6%98%8E%E6%98%9F%E5%92%8C%E7%94%B7%E5%8A%A9%E7%90%86%23) `118.3K 🔥` `NEW`
1. [王骁英语居然这么好](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%AA%81%E8%8B%B1%E8%AF%AD%E5%B1%85%E7%84%B6%E8%BF%99%E4%B9%88%E5%A5%BD%23) `117.1K 🔥` `NEW`
1. [钟南山团队发现肺结节发病新趋势](https://s.weibo.com/weibo?q=%23%E9%92%9F%E5%8D%97%E5%B1%B1%E5%9B%A2%E9%98%9F%E5%8F%91%E7%8E%B0%E8%82%BA%E7%BB%93%E8%8A%82%E5%8F%91%E7%97%85%E6%96%B0%E8%B6%8B%E5%8A%BF%23) `224.7K 🔥` `-77%`
1. [亚运会](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `175.1K 🔥` `-55%`
1. [闲鱼快成黄鱼了](https://s.weibo.com/weibo?q=%23%E9%97%B2%E9%B1%BC%E5%BF%AB%E6%88%90%E9%BB%84%E9%B1%BC%E4%BA%86%23) `154.7K 🔥` `-74%`
1. [坚持喝牛奶vs从不喝牛奶](https://s.weibo.com/weibo?q=%23%E5%9D%9A%E6%8C%81%E5%96%9D%E7%89%9B%E5%A5%B6vs%E4%BB%8E%E4%B8%8D%E5%96%9D%E7%89%9B%E5%A5%B6%23) `152.4K 🔥` `-56%`
1. [许嵩粉丝发文](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%B5%A9%E7%B2%89%E4%B8%9D%E5%8F%91%E6%96%87%23) `135.4K 🔥` `-61%`

Updated at 2026-09-21 23:58:56

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
