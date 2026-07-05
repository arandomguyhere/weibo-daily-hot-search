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

1. [未发现蒋方舟存在学术不端行为 (No academic misconduct was found by Jiang Fangzhou)](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E5%8F%91%E7%8E%B0%E8%92%8B%E6%96%B9%E8%88%9F%E5%AD%98%E5%9C%A8%E5%AD%A6%E6%9C%AF%E4%B8%8D%E7%AB%AF%E8%A1%8C%E4%B8%BA%23) `1.5M 🔥` `NEW`
1. [野狗骨头收视率](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E6%94%B6%E8%A7%86%E7%8E%87%23) `1.1M 🔥` `NEW`
1. [张新成演唱会翻唱率](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%96%B0%E6%88%90%E6%BC%94%E5%94%B1%E4%BC%9A%E7%BF%BB%E5%94%B1%E7%8E%87%23) `864.2K 🔥` `NEW`
1. [暂停蒋方舟导师研究生招生资格1年](https://s.weibo.com/weibo?q=%23%E6%9A%82%E5%81%9C%E8%92%8B%E6%96%B9%E8%88%9F%E5%AF%BC%E5%B8%88%E7%A0%94%E7%A9%B6%E7%94%9F%E6%8B%9B%E7%94%9F%E8%B5%84%E6%A0%BC1%E5%B9%B4%23) `763.8K 🔥` `NEW`
1. [短发哈兰德将对阵巴西](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%8F%91%E5%93%88%E5%85%B0%E5%BE%B7%E5%B0%86%E5%AF%B9%E9%98%B5%E5%B7%B4%E8%A5%BF%23) `421.8K 🔥` `NEW`
1. [我欲乘风男主](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%AC%B2%E4%B9%98%E9%A3%8E%E7%94%B7%E4%B8%BB%23) `393.0K 🔥` `NEW`
1. [日产赛道电驱体验官](https://s.weibo.com/weibo?q=%23%E6%97%A5%E4%BA%A7%E8%B5%9B%E9%81%93%E7%94%B5%E9%A9%B1%E4%BD%93%E9%AA%8C%E5%AE%98%23) `353.8K 🔥` `NEW`
1. [霉霉婚前协议堪称史上最复杂](https://s.weibo.com/weibo?q=%23%E9%9C%89%E9%9C%89%E5%A9%9A%E5%89%8D%E5%8D%8F%E8%AE%AE%E5%A0%AA%E7%A7%B0%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%A4%8D%E6%9D%82%23) `351.3K 🔥` `NEW`
1. [佛得角队回国了](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%98%9F%E5%9B%9E%E5%9B%BD%E4%BA%86%23) `342.3K 🔥` `NEW`
1. [特朗普将自己头像加在林肯旁边](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%B0%86%E8%87%AA%E5%B7%B1%E5%A4%B4%E5%83%8F%E5%8A%A0%E5%9C%A8%E6%9E%97%E8%82%AF%E6%97%81%E8%BE%B9%23) `322.2K 🔥` `NEW`
1. [世界杯 (world cup)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `288.3K 🔥` `NEW`
1. [19块的外卖用玻璃罐装](https://s.weibo.com/weibo?q=%2319%E5%9D%97%E7%9A%84%E5%A4%96%E5%8D%96%E7%94%A8%E7%8E%BB%E7%92%83%E7%BD%90%E8%A3%85%23) `271.5K 🔥` `NEW`
1. [伊朗已故最高领袖哈梅内伊三子现身](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%B7%B2%E6%95%85%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E4%B8%89%E5%AD%90%E7%8E%B0%E8%BA%AB%23) `260.4K 🔥` `NEW`
1. [U17国足3比0澳大利亚](https://s.weibo.com/weibo?q=%23U17%E5%9B%BD%E8%B6%B33%E6%AF%940%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%23) `256.9K 🔥` `NEW`
1. [野狗骨头](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%23) `243.8K 🔥` `NEW`
1. [新疆遭泥石流卷走母子遗体被找到](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%96%86%E9%81%AD%E6%B3%A5%E7%9F%B3%E6%B5%81%E5%8D%B7%E8%B5%B0%E6%AF%8D%E5%AD%90%E9%81%97%E4%BD%93%E8%A2%AB%E6%89%BE%E5%88%B0%23) `222.6K 🔥` `NEW`
1. [18岁暑假工干活太好约定3千老板开1万](https://s.weibo.com/weibo?q=%2318%E5%B2%81%E6%9A%91%E5%81%87%E5%B7%A5%E5%B9%B2%E6%B4%BB%E5%A4%AA%E5%A5%BD%E7%BA%A6%E5%AE%9A3%E5%8D%83%E8%80%81%E6%9D%BF%E5%BC%801%E4%B8%87%23) `209.0K 🔥` `NEW`
1. [张嘉倪的经历](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%98%89%E5%80%AA%E7%9A%84%E7%BB%8F%E5%8E%86%23) `205.9K 🔥` `NEW`
1. [智能体下线与责任之争](https://s.weibo.com/weibo?q=%23%E6%99%BA%E8%83%BD%E4%BD%93%E4%B8%8B%E7%BA%BF%E4%B8%8E%E8%B4%A3%E4%BB%BB%E4%B9%8B%E4%BA%89%23) `196.0K 🔥` `NEW`
1. [宋威龙cvb无败绩](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99cvb%E6%97%A0%E8%B4%A5%E7%BB%A9%23) `186.2K 🔥` `NEW`
1. [王曼昱首位集齐五大满贯女双 (Wang Manyu is the first to collect all five Grand Slam women's doubles)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E9%A6%96%E4%BD%8D%E9%9B%86%E9%BD%90%E4%BA%94%E5%A4%A7%E6%BB%A1%E8%B4%AF%E5%A5%B3%E5%8F%8C%23) `185.2K 🔥` `NEW`
1. [林宥嘉说蔡徐坤美感非常好](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AE%A5%E5%98%89%E8%AF%B4%E8%94%A1%E5%BE%90%E5%9D%A4%E7%BE%8E%E6%84%9F%E9%9D%9E%E5%B8%B8%E5%A5%BD%23) `164.1K 🔥` `NEW`
1. [南昌佛得角老板回应意外走红](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%98%8C%E4%BD%9B%E5%BE%97%E8%A7%92%E8%80%81%E6%9D%BF%E5%9B%9E%E5%BA%94%E6%84%8F%E5%A4%96%E8%B5%B0%E7%BA%A2%23) `158.6K 🔥` `NEW`
1. [巴拉圭第99分钟了还在扒拉](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%8B%89%E5%9C%AD%E7%AC%AC99%E5%88%86%E9%92%9F%E4%BA%86%E8%BF%98%E5%9C%A8%E6%89%92%E6%8B%89%23) `761.4K 🔥` `+79%`
1. [灿如繁星](https://s.weibo.com/weibo?q=%23%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%23) `363.3K 🔥` `+120%`
1. [丁程鑫好六镜头被剪](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%A5%BD%E5%85%AD%E9%95%9C%E5%A4%B4%E8%A2%AB%E5%89%AA%23) `331.3K 🔥` `+92%`
1. [王力宏缝了39针 (Wang Leehom received 39 stitches)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E7%BC%9D%E4%BA%8639%E9%92%88%23) `314.0K 🔥` `+43%`
1. [卫生巾应该分坐用跟躺用](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E7%94%9F%E5%B7%BE%E5%BA%94%E8%AF%A5%E5%88%86%E5%9D%90%E7%94%A8%E8%B7%9F%E8%BA%BA%E7%94%A8%23) `245.8K 🔥` `+54%`
1. [台风天应急防范指南请收好 (Please keep the Typhoon Emergency Preparedness Guide)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%A4%A9%E5%BA%94%E6%80%A5%E9%98%B2%E8%8C%83%E6%8C%87%E5%8D%97%E8%AF%B7%E6%94%B6%E5%A5%BD%23) `883.5K 🔥`
1. [微信能不能别给表情取名字了](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%83%BD%E4%B8%8D%E8%83%BD%E5%88%AB%E7%BB%99%E8%A1%A8%E6%83%85%E5%8F%96%E5%90%8D%E5%AD%97%E4%BA%86%23) `633.2K 🔥`
1. [迪丽热巴深V开到腰了 (Dilireba’s deep V-cut reaches to her waist)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%B7%B1V%E5%BC%80%E5%88%B0%E8%85%B0%E4%BA%86%23) `358.3K 🔥`
1. [霉霉婚礼现场照片被泄漏](https://s.weibo.com/weibo?q=%23%E9%9C%89%E9%9C%89%E5%A9%9A%E7%A4%BC%E7%8E%B0%E5%9C%BA%E7%85%A7%E7%89%87%E8%A2%AB%E6%B3%84%E6%BC%8F%23) `320.9K 🔥`
1. [物价悄悄上涨真的很可怕](https://s.weibo.com/weibo?q=%23%E7%89%A9%E4%BB%B7%E6%82%84%E6%82%84%E4%B8%8A%E6%B6%A8%E7%9C%9F%E7%9A%84%E5%BE%88%E5%8F%AF%E6%80%95%23) `318.7K 🔥`
1. [陈奕恒陈浚铭陈思罕二班 (Chen Yiheng, Chen Junming, Chen Sihan, Class 2)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E9%99%88%E6%B5%9A%E9%93%AD%E9%99%88%E6%80%9D%E7%BD%95%E4%BA%8C%E7%8F%AD%23) `316.0K 🔥`
1. [王橹杰第五名](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%AC%AC%E4%BA%94%E5%90%8D%23) `287.0K 🔥`
1. [田曦薇黄明昊向王安宇道歉](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E9%BB%84%E6%98%8E%E6%98%8A%E5%90%91%E7%8E%8B%E5%AE%89%E5%AE%87%E9%81%93%E6%AD%89%23) `283.9K 🔥`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `275.4K 🔥`
1. [郭宇欣傲慢吐槽严子贤20分钟](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AE%87%E6%AC%A3%E5%82%B2%E6%85%A2%E5%90%90%E6%A7%BD%E4%B8%A5%E5%AD%90%E8%B4%A420%E5%88%86%E9%92%9F%23) `246.3K 🔥`
1. [美国父母早上吸毒18个月婴儿溺水](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%88%B6%E6%AF%8D%E6%97%A9%E4%B8%8A%E5%90%B8%E6%AF%9218%E4%B8%AA%E6%9C%88%E5%A9%B4%E5%84%BF%E6%BA%BA%E6%B0%B4%23) `245.9K 🔥`
1. [张丰毅70岁状态](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%B8%B0%E6%AF%8570%E5%B2%81%E7%8A%B6%E6%80%81%23) `211.6K 🔥`
1. [企业把核心数据交给闭源大模型](https://s.weibo.com/weibo?q=%23%E4%BC%81%E4%B8%9A%E6%8A%8A%E6%A0%B8%E5%BF%83%E6%95%B0%E6%8D%AE%E4%BA%A4%E7%BB%99%E9%97%AD%E6%BA%90%E5%A4%A7%E6%A8%A1%E5%9E%8B%23) `149.8K 🔥`
1. [奶奶删了77万条未读又来3万 (Grandma deleted 770,000 unread messages and received another 30,000.)](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E5%A5%B6%E5%88%A0%E4%BA%8677%E4%B8%87%E6%9D%A1%E6%9C%AA%E8%AF%BB%E5%8F%88%E6%9D%A53%E4%B8%87%23) `362.1K 🔥` `-68%`
1. [野狗骨头没错这就是南方烧烤 (Dingo Bones, yes, this is Southern BBQ.)](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E6%B2%A1%E9%94%99%E8%BF%99%E5%B0%B1%E6%98%AF%E5%8D%97%E6%96%B9%E7%83%A7%E7%83%A4%23) `346.5K 🔥` `-58%`
1. [已经对所有自助烤肉祛魅了](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E7%BB%8F%E5%AF%B9%E6%89%80%E6%9C%89%E8%87%AA%E5%8A%A9%E7%83%A4%E8%82%89%E7%A5%9B%E9%AD%85%E4%BA%86%23) `344.1K 🔥` `-51%`
1. [微信读书 赛博赎罪 (WeChat Reading Cyber ​​Atonement)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%AF%BB%E4%B9%A6%20%E8%B5%9B%E5%8D%9A%E8%B5%8E%E7%BD%AA%23) `257.1K 🔥` `-23%`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `181.5K 🔥` `-45%`
1. [电动车违规上高架桥宝马车主是否冤枉](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%8A%A8%E8%BD%A6%E8%BF%9D%E8%A7%84%E4%B8%8A%E9%AB%98%E6%9E%B6%E6%A1%A5%E5%AE%9D%E9%A9%AC%E8%BD%A6%E4%B8%BB%E6%98%AF%E5%90%A6%E5%86%A4%E6%9E%89%23) `181.0K 🔥` `-47%`
1. [苏醒又又又预测世界杯 (Su Xing predicts the World Cup again)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%E5%8F%88%E5%8F%88%E5%8F%88%E9%A2%84%E6%B5%8B%E4%B8%96%E7%95%8C%E6%9D%AF%23) `178.3K 🔥` `-46%`
1. [曝郭宇欣称非科班的抢了科班的戏](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%83%AD%E5%AE%87%E6%AC%A3%E7%A7%B0%E9%9D%9E%E7%A7%91%E7%8F%AD%E7%9A%84%E6%8A%A2%E4%BA%86%E7%A7%91%E7%8F%AD%E7%9A%84%E6%88%8F%23) `160.5K 🔥` `-52%`
1. [花儿与少年8墨西哥路透](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%84%BF%E4%B8%8E%E5%B0%91%E5%B9%B48%E5%A2%A8%E8%A5%BF%E5%93%A5%E8%B7%AF%E9%80%8F%23) `150.7K 🔥` `-46%`

Updated at 2026-07-05 22:42:51

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
