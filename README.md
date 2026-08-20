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

1. [女儿拒动用十万压岁钱支付生活费 (Daughter refuses to use 100,000 New Year's money to pay for living expenses)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E6%8B%92%E5%8A%A8%E7%94%A8%E5%8D%81%E4%B8%87%E5%8E%8B%E5%B2%81%E9%92%B1%E6%94%AF%E4%BB%98%E7%94%9F%E6%B4%BB%E8%B4%B9%23) `1.2M 🔥` `NEW`
1. [全季酒店 再追究对我们对你都不好](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%AD%A3%E9%85%92%E5%BA%97%20%E5%86%8D%E8%BF%BD%E7%A9%B6%E5%AF%B9%E6%88%91%E4%BB%AC%E5%AF%B9%E4%BD%A0%E9%83%BD%E4%B8%8D%E5%A5%BD%23) `669.6K 🔥` `NEW`
1. [青岛海之恋公园](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E6%B5%B7%E4%B9%8B%E6%81%8B%E5%85%AC%E5%9B%AD%23) `664.8K 🔥` `NEW`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `373.3K 🔥` `NEW`
1. [河北医院赤裸女童](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8C%97%E5%8C%BB%E9%99%A2%E8%B5%A4%E8%A3%B8%E5%A5%B3%E7%AB%A5%23) `332.5K 🔥` `NEW`
1. [升学宴死者家属称被砸中当场去世](https://s.weibo.com/weibo?q=%23%E5%8D%87%E5%AD%A6%E5%AE%B4%E6%AD%BB%E8%80%85%E5%AE%B6%E5%B1%9E%E7%A7%B0%E8%A2%AB%E7%A0%B8%E4%B8%AD%E5%BD%93%E5%9C%BA%E5%8E%BB%E4%B8%96%23) `250.0K 🔥` `NEW`
1. [骑士掘金快船交易](https://s.weibo.com/weibo?q=%23%E9%AA%91%E5%A3%AB%E6%8E%98%E9%87%91%E5%BF%AB%E8%88%B9%E4%BA%A4%E6%98%93%23) `222.9K 🔥` `NEW`
1. [上门按摩广告贴满充电宝被告了](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E9%97%A8%E6%8C%89%E6%91%A9%E5%B9%BF%E5%91%8A%E8%B4%B4%E6%BB%A1%E5%85%85%E7%94%B5%E5%AE%9D%E8%A2%AB%E5%91%8A%E4%BA%86%23) `213.1K 🔥` `NEW`
1. [女儿追凶25年等来父亲枪击案重启](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E8%BF%BD%E5%87%B625%E5%B9%B4%E7%AD%89%E6%9D%A5%E7%88%B6%E4%BA%B2%E6%9E%AA%E5%87%BB%E6%A1%88%E9%87%8D%E5%90%AF%23) `210.7K 🔥` `NEW`
1. [张本美和说跟孙颖莎不在同一水平](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%E8%AF%B4%E8%B7%9F%E5%AD%99%E9%A2%96%E8%8E%8E%E4%B8%8D%E5%9C%A8%E5%90%8C%E4%B8%80%E6%B0%B4%E5%B9%B3%23) `210.1K 🔥` `NEW`
1. [迪丽热巴连续3个月被传恋情 (Dilireba was rumored to be in love for 3 consecutive months)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%9E%E7%BB%AD3%E4%B8%AA%E6%9C%88%E8%A2%AB%E4%BC%A0%E6%81%8B%E6%83%85%23) `206.0K 🔥` `NEW`
1. [朱一龙表演 生理痛感](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E8%A1%A8%E6%BC%94%20%E7%94%9F%E7%90%86%E7%97%9B%E6%84%9F%23) `205.2K 🔥` `NEW`
1. [游戏科学](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E6%88%8F%E7%A7%91%E5%AD%A6%23) `203.6K 🔥` `NEW`
1. [秦皇岛一底商发生火灾8死3伤](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E7%9A%87%E5%B2%9B%E4%B8%80%E5%BA%95%E5%95%86%E5%8F%91%E7%94%9F%E7%81%AB%E7%81%BE8%E6%AD%BB3%E4%BC%A4%23) `202.4K 🔥` `NEW`
1. [一景区21岁水上飞人教练溺亡](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%99%AF%E5%8C%BA21%E5%B2%81%E6%B0%B4%E4%B8%8A%E9%A3%9E%E4%BA%BA%E6%95%99%E7%BB%83%E6%BA%BA%E4%BA%A1%23) `200.6K 🔥` `NEW`
1. [有这5个习惯的人更容易瘦](https://s.weibo.com/weibo?q=%23%E6%9C%89%E8%BF%995%E4%B8%AA%E4%B9%A0%E6%83%AF%E7%9A%84%E4%BA%BA%E6%9B%B4%E5%AE%B9%E6%98%93%E7%98%A6%23) `199.3K 🔥` `NEW`
1. [虞书欣说月底有惊喜](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%AF%B4%E6%9C%88%E5%BA%95%E6%9C%89%E6%83%8A%E5%96%9C%23) `191.5K 🔥` `NEW`
1. [青岛 搭讪](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%20%E6%90%AD%E8%AE%AA%23) `190.6K 🔥` `NEW`
1. [刘宇宁直播豪华配置](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E7%9B%B4%E6%92%AD%E8%B1%AA%E5%8D%8E%E9%85%8D%E7%BD%AE%23) `189.4K 🔥` `NEW`
1. [穆祉丞铁了心要养梦女](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E9%93%81%E4%BA%86%E5%BF%83%E8%A6%81%E5%85%BB%E6%A2%A6%E5%A5%B3%23) `188.3K 🔥` `NEW`
1. [空枪 菠萝油 (Empty gun pineapple oil)](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%20%E8%8F%A0%E8%90%9D%E6%B2%B9%23) `184.8K 🔥` `NEW`
1. [舞蹈新风暴](https://s.weibo.com/weibo?q=%23%E8%88%9E%E8%B9%88%E6%96%B0%E9%A3%8E%E6%9A%B4%23) `183.2K 🔥` `NEW`
1. [女子凌晨倒掉24瓶爱心水被拍下 (Woman was filmed pouring out 24 bottles of love water in the early morning)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%87%8C%E6%99%A8%E5%80%92%E6%8E%8924%E7%93%B6%E7%88%B1%E5%BF%83%E6%B0%B4%E8%A2%AB%E6%8B%8D%E4%B8%8B%23) `1.6M 🔥` `+83%`
1. [享界G9发布会 (Xiangjie G9 press conference)](https://s.weibo.com/weibo?q=%23%E4%BA%AB%E7%95%8CG9%E5%8F%91%E5%B8%83%E4%BC%9A%23) `744.3K 🔥` `+89%`
1. [和孙颖莎韧劲控场 (Tenaciously controlling the field with Sun Yingsha)](https://s.weibo.com/weibo?q=%23%E5%92%8C%E5%AD%99%E9%A2%96%E8%8E%8E%E9%9F%A7%E5%8A%B2%E6%8E%A7%E5%9C%BA%23) `634.0K 🔥` `+929%`
1. [姜珮瑶找凌玲像AI一样丝滑 (Jiang Peiyao looks for Ling Ling as silky as AI)](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E7%8F%AE%E7%91%B6%E6%89%BE%E5%87%8C%E7%8E%B2%E5%83%8FAI%E4%B8%80%E6%A0%B7%E4%B8%9D%E6%BB%91%23) `339.0K 🔥` `+137%`
1. [金价彻底反弹了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%BD%BB%E5%BA%95%E5%8F%8D%E5%BC%B9%E4%BA%86%23) `288.4K 🔥` `+36%`
1. [那英59岁身材 (Na Ying's 59-year-old figure)](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B159%E5%B2%81%E8%BA%AB%E6%9D%90%23) `207.7K 🔥` `+21%`
1. [旺旺官宣听劝版旺仔牛奶 (Want Want official announces advice on selling Want Want milk)](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%E5%AE%98%E5%AE%A3%E5%90%AC%E5%8A%9D%E7%89%88%E6%97%BA%E4%BB%94%E7%89%9B%E5%A5%B6%23) `207.2K 🔥` `+64%`
1. [长这样的5种痣最容易癌变 (These 5 types of moles are most likely to become cancerous)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E8%BF%99%E6%A0%B7%E7%9A%845%E7%A7%8D%E7%97%A3%E6%9C%80%E5%AE%B9%E6%98%93%E7%99%8C%E5%8F%98%23) `199.8K 🔥` `+42%`
1. [桃黑黑宣布暂时休息 (Taoheihei announces temporary break)](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E5%AE%A3%E5%B8%83%E6%9A%82%E6%97%B6%E4%BC%91%E6%81%AF%23) `197.9K 🔥` `+62%`
1. [3人围攻穿武磊球衣小球迷被拘 (Three people besieged a young fan wearing Wu Lei’s jersey and was detained)](https://s.weibo.com/weibo?q=%233%E4%BA%BA%E5%9B%B4%E6%94%BB%E7%A9%BF%E6%AD%A6%E7%A3%8A%E7%90%83%E8%A1%A3%E5%B0%8F%E7%90%83%E8%BF%B7%E8%A2%AB%E6%8B%98%23) `195.9K 🔥` `+36%`
1. [中国黄金协会严正声明](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%BB%84%E9%87%91%E5%8D%8F%E4%BC%9A%E4%B8%A5%E6%AD%A3%E5%A3%B0%E6%98%8E%23) `194.2K 🔥` `+59%`
1. [尊界撞环卫工视频系AI伪造 (The video of Zunjie hitting a sanitation worker was faked by AI)](https://s.weibo.com/weibo?q=%23%E5%B0%8A%E7%95%8C%E6%92%9E%E7%8E%AF%E5%8D%AB%E5%B7%A5%E8%A7%86%E9%A2%91%E7%B3%BBAI%E4%BC%AA%E9%80%A0%23) `186.9K 🔥` `+102%`
1. [孟子义没有给cp让路的义务 (Meng Ziyi has no obligation to give way to CP)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%B2%A1%E6%9C%89%E7%BB%99cp%E8%AE%A9%E8%B7%AF%E7%9A%84%E4%B9%89%E5%8A%A1%23) `185.6K 🔥` `+50%`
1. [这6张网与你我生活息息相关 (These 6 networks are closely related to your and my life)](https://s.weibo.com/weibo?q=%23%E8%BF%996%E5%BC%A0%E7%BD%91%E4%B8%8E%E4%BD%A0%E6%88%91%E7%94%9F%E6%B4%BB%E6%81%AF%E6%81%AF%E7%9B%B8%E5%85%B3%23) `913.9K 🔥`
1. [七夕但不对劲 (Chinese Valentine's Day but something is wrong)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%E4%BD%86%E4%B8%8D%E5%AF%B9%E5%8A%B2%23) `509.9K 🔥`
1. [青岛男子辱骂女游客视频](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E7%94%B7%E5%AD%90%E8%BE%B1%E9%AA%82%E5%A5%B3%E6%B8%B8%E5%AE%A2%E8%A7%86%E9%A2%91%23) `311.2K 🔥`
1. [空枪开分9.7 (Open gun score 9.7)](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%E5%BC%80%E5%88%869.7%23) `214.2K 🔥`
1. [小米人形机器人现场视频曝光](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%8E%B0%E5%9C%BA%E8%A7%86%E9%A2%91%E6%9B%9D%E5%85%89%23) `213.4K 🔥`
1. [说话不仅要避谶还要迎谶 (When speaking, one must not only avoid prophecies but also welcome them.)](https://s.weibo.com/weibo?q=%23%E8%AF%B4%E8%AF%9D%E4%B8%8D%E4%BB%85%E8%A6%81%E9%81%BF%E8%B0%B6%E8%BF%98%E8%A6%81%E8%BF%8E%E8%B0%B6%23) `211.5K 🔥`
1. [弟弟称哥哥刚确诊癌症嫂子就提离婚](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%E7%A7%B0%E5%93%A5%E5%93%A5%E5%88%9A%E7%A1%AE%E8%AF%8A%E7%99%8C%E7%97%87%E5%AB%82%E5%AD%90%E5%B0%B1%E6%8F%90%E7%A6%BB%E5%A9%9A%23) `201.8K 🔥`
1. [新郎称不共财产不共心 (The groom says he doesn’t share property and heart)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E9%83%8E%E7%A7%B0%E4%B8%8D%E5%85%B1%E8%B4%A2%E4%BA%A7%E4%B8%8D%E5%85%B1%E5%BF%83%23) `197.2K 🔥`
1. [难怪瘦的时候容易觉得疼 (No wonder it’s easy to feel pain when you’re thin)](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E7%98%A6%E7%9A%84%E6%97%B6%E5%80%99%E5%AE%B9%E6%98%93%E8%A7%89%E5%BE%97%E7%96%BC%23) `194.7K 🔥`
1. [公司被曝设监狱式工位逼退员工 (The company was exposed to have set up prison-style workstations to force out employees)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E8%A2%AB%E6%9B%9D%E8%AE%BE%E7%9B%91%E7%8B%B1%E5%BC%8F%E5%B7%A5%E4%BD%8D%E9%80%BC%E9%80%80%E5%91%98%E5%B7%A5%23) `193.2K 🔥`
1. [苏翊鸣七夕晒9图](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E4%B8%83%E5%A4%95%E6%99%929%E5%9B%BE%23) `189.9K 🔥`
1. [12306回应买票占座放零食这座位能让吗 (12306 Reply Buy a ticket, occupy a seat and put snacks on it. Can this seat be used?)](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E4%B9%B0%E7%A5%A8%E5%8D%A0%E5%BA%A7%E6%94%BE%E9%9B%B6%E9%A3%9F%E8%BF%99%E5%BA%A7%E4%BD%8D%E8%83%BD%E8%AE%A9%E5%90%97%23) `733.5K 🔥` `-36%`
1. [空枪 李嘉诚儿子绑架案](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%20%E6%9D%8E%E5%98%89%E8%AF%9A%E5%84%BF%E5%AD%90%E7%BB%91%E6%9E%B6%E6%A1%88%23) `594.7K 🔥` `-22%`
1. [美联储](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%81%94%E5%82%A8%23) `237.2K 🔥` `-21%`
1. [LPL](https://s.weibo.com/weibo?q=%23LPL%23) `184.0K 🔥` `-31%`

Updated at 2026-08-20 09:45:45

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
