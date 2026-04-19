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

1. [韩警方称骚扰中国游客日本男子愿回韩 (South Korean police say Japanese man harasses Chinese tourists and wants to return to South Korea)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E8%AD%A6%E6%96%B9%E7%A7%B0%E9%AA%9A%E6%89%B0%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E6%97%A5%E6%9C%AC%E7%94%B7%E5%AD%90%E6%84%BF%E5%9B%9E%E9%9F%A9%23) `859.6K 🔥` `NEW`
1. [可爱型人格做的好事也可爱](https://s.weibo.com/weibo?q=%23%E5%8F%AF%E7%88%B1%E5%9E%8B%E4%BA%BA%E6%A0%BC%E5%81%9A%E7%9A%84%E5%A5%BD%E4%BA%8B%E4%B9%9F%E5%8F%AF%E7%88%B1%23) `276.1K 🔥` `NEW`
1. [上海地铁回应一拉杆箱有血渍渗出](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%9C%B0%E9%93%81%E5%9B%9E%E5%BA%94%E4%B8%80%E6%8B%89%E6%9D%86%E7%AE%B1%E6%9C%89%E8%A1%80%E6%B8%8D%E6%B8%97%E5%87%BA%23) `243.8K 🔥` `NEW`
1. [机器人半马显眼包合集](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%8D%8A%E9%A9%AC%E6%98%BE%E7%9C%BC%E5%8C%85%E5%90%88%E9%9B%86%23) `224.1K 🔥` `NEW`
1. [张凌赫凌晨下班和打招呼的群演握手](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%87%8C%E6%99%A8%E4%B8%8B%E7%8F%AD%E5%92%8C%E6%89%93%E6%8B%9B%E5%91%BC%E7%9A%84%E7%BE%A4%E6%BC%94%E6%8F%A1%E6%89%8B%23) `193.7K 🔥` `NEW`
1. [25岁女子下楼玩手机摔成大小便失禁](https://s.weibo.com/weibo?q=%2325%E5%B2%81%E5%A5%B3%E5%AD%90%E4%B8%8B%E6%A5%BC%E7%8E%A9%E6%89%8B%E6%9C%BA%E6%91%94%E6%88%90%E5%A4%A7%E5%B0%8F%E4%BE%BF%E5%A4%B1%E7%A6%81%23) `166.6K 🔥` `NEW`
1. [何秋亊说被人害了](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%A7%8B%E4%BA%8A%E8%AF%B4%E8%A2%AB%E4%BA%BA%E5%AE%B3%E4%BA%86%23) `151.8K 🔥` `NEW`
1. [科切拉](https://s.weibo.com/weibo?q=%23%E7%A7%91%E5%88%87%E6%8B%89%23) `150.0K 🔥` `NEW`
1. [孙丞潇 有没有不吵架的节目](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%B8%9E%E6%BD%87%20%E6%9C%89%E6%B2%A1%E6%9C%89%E4%B8%8D%E5%90%B5%E6%9E%B6%E7%9A%84%E8%8A%82%E7%9B%AE%23) `146.5K 🔥` `NEW`
1. [18块8的蔬菜自助火锅背刺打工人](https://s.weibo.com/weibo?q=%2318%E5%9D%978%E7%9A%84%E8%94%AC%E8%8F%9C%E8%87%AA%E5%8A%A9%E7%81%AB%E9%94%85%E8%83%8C%E5%88%BA%E6%89%93%E5%B7%A5%E4%BA%BA%23) `146.4K 🔥` `NEW`
1. [穿普拉达的女王2亚裔争议 (The Devil Wears Prada 2 Asian Controversy)](https://s.weibo.com/weibo?q=%23%E7%A9%BF%E6%99%AE%E6%8B%89%E8%BE%BE%E7%9A%84%E5%A5%B3%E7%8E%8B2%E4%BA%9A%E8%A3%94%E4%BA%89%E8%AE%AE%23) `632.5K 🔥` `+118%`
1. [马頔为了通告费亲嘴李纯知道吗](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E4%B8%BA%E4%BA%86%E9%80%9A%E5%91%8A%E8%B4%B9%E4%BA%B2%E5%98%B4%E6%9D%8E%E7%BA%AF%E7%9F%A5%E9%81%93%E5%90%97%23) `269.7K 🔥` `+37%`
1. [中东局势48小时极致反转](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%B8%9C%E5%B1%80%E5%8A%BF48%E5%B0%8F%E6%97%B6%E6%9E%81%E8%87%B4%E5%8F%8D%E8%BD%AC%23) `265.2K 🔥` `+44%`
1. [歌手2026 (singer 2026)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%23) `1.2M 🔥`
1. [消博会上的硬核科技展现未来趋势](https://s.weibo.com/weibo?q=%23%E6%B6%88%E5%8D%9A%E4%BC%9A%E4%B8%8A%E7%9A%84%E7%A1%AC%E6%A0%B8%E7%A7%91%E6%8A%80%E5%B1%95%E7%8E%B0%E6%9C%AA%E6%9D%A5%E8%B6%8B%E5%8A%BF%23) `691.9K 🔥`
1. [李小冉疑回应退出浪姐](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E7%96%91%E5%9B%9E%E5%BA%94%E9%80%80%E5%87%BA%E6%B5%AA%E5%A7%90%23) `632.9K 🔥`
1. [机器人马拉松 豆包变豆脚了](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E9%A9%AC%E6%8B%89%E6%9D%BE%20%E8%B1%86%E5%8C%85%E5%8F%98%E8%B1%86%E8%84%9A%E4%BA%86%23) `358.7K 🔥`
1. [网易云更新 动脉血变成静脉血了](https://s.weibo.com/weibo?q=%23%E7%BD%91%E6%98%93%E4%BA%91%E6%9B%B4%E6%96%B0%20%E5%8A%A8%E8%84%89%E8%A1%80%E5%8F%98%E6%88%90%E9%9D%99%E8%84%89%E8%A1%80%E4%BA%86%23) `329.5K 🔥`
1. [虞书欣父亲索赔17w败诉](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%88%B6%E4%BA%B2%E7%B4%A2%E8%B5%9417w%E8%B4%A5%E8%AF%89%23) `317.6K 🔥`
1. [王一博车轮 85105 (Wang Yibo wheels 85105)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%BD%A6%E8%BD%AE%2085105%23) `312.4K 🔥`
1. [稚楚回应](https://s.weibo.com/weibo?q=%23%E7%A8%9A%E6%A5%9A%E5%9B%9E%E5%BA%94%23) `310.1K 🔥`
1. [攻玉回应换男主 (Gong Yu responded by changing the male lead)](https://s.weibo.com/weibo?q=%23%E6%94%BB%E7%8E%89%E5%9B%9E%E5%BA%94%E6%8D%A2%E7%94%B7%E4%B8%BB%23) `305.5K 🔥`
1. [曝李小冉退出浪姐](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%8E%E5%B0%8F%E5%86%89%E9%80%80%E5%87%BA%E6%B5%AA%E5%A7%90%23) `302.7K 🔥`
1. [女子情不自禁到处表白确诊桃花癫 (A woman couldn't help but confess her love everywhere and was diagnosed with epilepsy)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%83%85%E4%B8%8D%E8%87%AA%E7%A6%81%E5%88%B0%E5%A4%84%E8%A1%A8%E7%99%BD%E7%A1%AE%E8%AF%8A%E6%A1%83%E8%8A%B1%E7%99%AB%23) `299.3K 🔥`
1. [福原爱三胎生子](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%8E%9F%E7%88%B1%E4%B8%89%E8%83%8E%E7%94%9F%E5%AD%90%23) `297.5K 🔥`
1. [赵丽颖38岁状态](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%9638%E5%B2%81%E7%8A%B6%E6%80%81%23) `293.8K 🔥`
1. [谁家猫怀孕都怀到脖子上了 (Whose cat is pregnant up to its neck?)](https://s.weibo.com/weibo?q=%23%E8%B0%81%E5%AE%B6%E7%8C%AB%E6%80%80%E5%AD%95%E9%83%BD%E6%80%80%E5%88%B0%E8%84%96%E5%AD%90%E4%B8%8A%E4%BA%86%23) `290.6K 🔥`
1. [夫妻骑车为躲狗摔倒致妻死亡](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E9%AA%91%E8%BD%A6%E4%B8%BA%E8%BA%B2%E7%8B%97%E6%91%94%E5%80%92%E8%87%B4%E5%A6%BB%E6%AD%BB%E4%BA%A1%23) `288.0K 🔥`
1. [沈梦辰连续4年做热玛吉脸越打越薄](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%A2%A6%E8%BE%B0%E8%BF%9E%E7%BB%AD4%E5%B9%B4%E5%81%9A%E7%83%AD%E7%8E%9B%E5%90%89%E8%84%B8%E8%B6%8A%E6%89%93%E8%B6%8A%E8%96%84%23) `287.7K 🔥`
1. [花少8 南美 (Hua Shao 8 South America)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%918%20%E5%8D%97%E7%BE%8E%23) `286.8K 🔥`
1. [何润东狂接商务](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E7%8B%82%E6%8E%A5%E5%95%86%E5%8A%A1%23) `276.0K 🔥`
1. [黄圣依晒瑞士游学照](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%9C%A3%E4%BE%9D%E6%99%92%E7%91%9E%E5%A3%AB%E6%B8%B8%E5%AD%A6%E7%85%A7%23) `261.7K 🔥`
1. [郑恺这期收视率高吧我拿命换的](https://s.weibo.com/weibo?q=%23%E9%83%91%E6%81%BA%E8%BF%99%E6%9C%9F%E6%94%B6%E8%A7%86%E7%8E%87%E9%AB%98%E5%90%A7%E6%88%91%E6%8B%BF%E5%91%BD%E6%8D%A2%E7%9A%84%23) `221.9K 🔥`
1. [疑似业内内涵攻玉换男主](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E4%B8%9A%E5%86%85%E5%86%85%E6%B6%B5%E6%94%BB%E7%8E%89%E6%8D%A2%E7%94%B7%E4%B8%BB%23) `204.8K 🔥`
1. [王一博跑步穿成修女的原因 (The reason why Wang Yibo dresses like a nun when running)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%B7%91%E6%AD%A5%E7%A9%BF%E6%88%90%E4%BF%AE%E5%A5%B3%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `190.4K 🔥`
1. [AI让人越来越累](https://s.weibo.com/weibo?q=%23AI%E8%AE%A9%E4%BA%BA%E8%B6%8A%E6%9D%A5%E8%B6%8A%E7%B4%AF%23) `187.7K 🔥`
1. [方媛给郭富城抬头纹磨皮 (Fang Yuan used microdermabrasion on Aaron Kwok’s forehead lines)](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AA%9B%E7%BB%99%E9%83%AD%E5%AF%8C%E5%9F%8E%E6%8A%AC%E5%A4%B4%E7%BA%B9%E7%A3%A8%E7%9A%AE%23) `186.3K 🔥`
1. [湘西赶尸舞](https://s.weibo.com/weibo?q=%23%E6%B9%98%E8%A5%BF%E8%B5%B6%E5%B0%B8%E8%88%9E%23) `152.2K 🔥`
1. [现大量猫被剥皮厂房被查](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%A4%A7%E9%87%8F%E7%8C%AB%E8%A2%AB%E5%89%A5%E7%9A%AE%E5%8E%82%E6%88%BF%E8%A2%AB%E6%9F%A5%23) `149.8K 🔥`
1. [12306拒绝抢票软件出票超百万张](https://s.weibo.com/weibo?q=%2312306%E6%8B%92%E7%BB%9D%E6%8A%A2%E7%A5%A8%E8%BD%AF%E4%BB%B6%E5%87%BA%E7%A5%A8%E8%B6%85%E7%99%BE%E4%B8%87%E5%BC%A0%23) `477.5K 🔥` `-41%`
1. [自家孩子趴桌睡为何给别人捐躺椅 (Why do you donate recliners to others when your child sleeps on the table?)](https://s.weibo.com/weibo?q=%23%E8%87%AA%E5%AE%B6%E5%AD%A9%E5%AD%90%E8%B6%B4%E6%A1%8C%E7%9D%A1%E4%B8%BA%E4%BD%95%E7%BB%99%E5%88%AB%E4%BA%BA%E6%8D%90%E8%BA%BA%E6%A4%85%23) `322.6K 🔥` `-33%`
1. [开封万岁山一棵树断裂砸倒多名游客](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B0%81%E4%B8%87%E5%B2%81%E5%B1%B1%E4%B8%80%E6%A3%B5%E6%A0%91%E6%96%AD%E8%A3%82%E7%A0%B8%E5%80%92%E5%A4%9A%E5%90%8D%E6%B8%B8%E5%AE%A2%23) `319.8K 🔥` `-21%`
1. [卸沙现场一具尸体随沙料倾泻而出](https://s.weibo.com/weibo?q=%23%E5%8D%B8%E6%B2%99%E7%8E%B0%E5%9C%BA%E4%B8%80%E5%85%B7%E5%B0%B8%E4%BD%93%E9%9A%8F%E6%B2%99%E6%96%99%E5%80%BE%E6%B3%BB%E8%80%8C%E5%87%BA%23) `268.5K 🔥` `-53%`
1. [张雪机车四次第一被围剿](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%9B%9B%E6%AC%A1%E7%AC%AC%E4%B8%80%E8%A2%AB%E5%9B%B4%E5%89%BF%23) `212.9K 🔥` `-32%`
1. [王者荣耀 哪吒2](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%20%E5%93%AA%E5%90%922%23) `194.1K 🔥` `-25%`
1. [虞书欣好辣](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%A5%BD%E8%BE%A3%23) `176.9K 🔥` `-27%`
1. [邓超现在洗澡离不开黑泥](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E7%8E%B0%E5%9C%A8%E6%B4%97%E6%BE%A1%E7%A6%BB%E4%B8%8D%E5%BC%80%E9%BB%91%E6%B3%A5%23) `166.0K 🔥` `-41%`
1. [逐玉播出后最爆的是何润东 (The most popular person after the broadcast of Zhuyu is Peter Ho)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E6%92%AD%E5%87%BA%E5%90%8E%E6%9C%80%E7%88%86%E7%9A%84%E6%98%AF%E4%BD%95%E6%B6%A6%E4%B8%9C%23) `153.9K 🔥` `-31%`
1. [白鹿跑男宣传莫离](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%B7%91%E7%94%B7%E5%AE%A3%E4%BC%A0%E8%8E%AB%E7%A6%BB%23) `147.5K 🔥` `-21%`
1. [日本与澳大利亚签订合同](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%B8%8E%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E7%AD%BE%E8%AE%A2%E5%90%88%E5%90%8C%23) `146.6K 🔥` `-55%`

Updated at 2026-04-19 16:38:46

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
