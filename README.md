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

1. [爸爸出门上班5个月孩子独自留家 (Dad went to work and the child was left home alone for 5 months)](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%87%BA%E9%97%A8%E4%B8%8A%E7%8F%AD5%E4%B8%AA%E6%9C%88%E5%AD%A9%E5%AD%90%E7%8B%AC%E8%87%AA%E7%95%99%E5%AE%B6%23) `1.1M 🔥` `NEW`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `170.1K 🔥` `NEW`
1. [以军士兵摆拍互动孩子不停颤抖](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E5%A3%AB%E5%85%B5%E6%91%86%E6%8B%8D%E4%BA%92%E5%8A%A8%E5%AD%A9%E5%AD%90%E4%B8%8D%E5%81%9C%E9%A2%A4%E6%8A%96%23) `170.0K 🔥` `NEW`
1. [鹿晗是扁头](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E6%98%AF%E6%89%81%E5%A4%B4%23) `169.9K 🔥` `NEW`
1. [朴宝剑拍的刘诗诗王安宇孙千](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%AE%9D%E5%89%91%E6%8B%8D%E7%9A%84%E5%88%98%E8%AF%97%E8%AF%97%E7%8E%8B%E5%AE%89%E5%AE%87%E5%AD%99%E5%8D%83%23) `169.8K 🔥` `NEW`
1. [用奔驰陪葬当事人被批评教育](https://s.weibo.com/weibo?q=%23%E7%94%A8%E5%A5%94%E9%A9%B0%E9%99%AA%E8%91%AC%E5%BD%93%E4%BA%8B%E4%BA%BA%E8%A2%AB%E6%89%B9%E8%AF%84%E6%95%99%E8%82%B2%23) `169.7K 🔥` `NEW`
1. [久坐真的会毁掉一个屁股](https://s.weibo.com/weibo?q=%23%E4%B9%85%E5%9D%90%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%AF%81%E6%8E%89%E4%B8%80%E4%B8%AA%E5%B1%81%E8%82%A1%23) `169.6K 🔥` `NEW`
1. [宁艺卓祝福柳智敏](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E7%A5%9D%E7%A6%8F%E6%9F%B3%E6%99%BA%E6%95%8F%23) `157.2K 🔥` `NEW`
1. [第五人格赛事](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%E8%B5%9B%E4%BA%8B%23) `139.8K 🔥` `NEW`
1. [韩国人称被叫小韩感觉不适](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E4%BA%BA%E7%A7%B0%E8%A2%AB%E5%8F%AB%E5%B0%8F%E9%9F%A9%E6%84%9F%E8%A7%89%E4%B8%8D%E9%80%82%23) `127.5K 🔥` `NEW`
1. [俄罗斯食客5点排队吃莫氏鸡煲 (Russian diners line up at 5 o'clock to eat Moh's Chicken Pot)](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E9%A3%9F%E5%AE%A25%E7%82%B9%E6%8E%92%E9%98%9F%E5%90%83%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%23) `123.5K 🔥` `NEW`
1. [IU新剧女王级别](https://s.weibo.com/weibo?q=%23IU%E6%96%B0%E5%89%A7%E5%A5%B3%E7%8E%8B%E7%BA%A7%E5%88%AB%23) `123.3K 🔥` `NEW`
1. [湖南一小学生在学校附近被撞身亡](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E4%B8%80%E5%B0%8F%E5%AD%A6%E7%94%9F%E5%9C%A8%E5%AD%A6%E6%A0%A1%E9%99%84%E8%BF%91%E8%A2%AB%E6%92%9E%E8%BA%AB%E4%BA%A1%23) `104.9K 🔥` `NEW`
1. [众星祝贺赵达杨小夕结婚](https://s.weibo.com/weibo?q=%23%E4%BC%97%E6%98%9F%E7%A5%9D%E8%B4%BA%E8%B5%B5%E8%BE%BE%E6%9D%A8%E5%B0%8F%E5%A4%95%E7%BB%93%E5%A9%9A%23) `98.2K 🔥` `NEW`
1. [朝鲜支持中国在台湾等问题上的立场](https://s.weibo.com/weibo?q=%23%E6%9C%9D%E9%B2%9C%E6%94%AF%E6%8C%81%E4%B8%AD%E5%9B%BD%E5%9C%A8%E5%8F%B0%E6%B9%BE%E7%AD%89%E9%97%AE%E9%A2%98%E4%B8%8A%E7%9A%84%E7%AB%8B%E5%9C%BA%23) `94.9K 🔥` `NEW`
1. [爸爸回应上班把5个月孩子独自留家](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%9B%9E%E5%BA%94%E4%B8%8A%E7%8F%AD%E6%8A%8A5%E4%B8%AA%E6%9C%88%E5%AD%A9%E5%AD%90%E7%8B%AC%E8%87%AA%E7%95%99%E5%AE%B6%23) `90.0K 🔥` `NEW`
1. [鞠婧祎 素衣绣蓝](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%20%E7%B4%A0%E8%A1%A3%E7%BB%A3%E8%93%9D%23) `89.3K 🔥` `NEW`
1. [美伊谈崩了怎么办](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E8%B0%88%E5%B4%A9%E4%BA%86%E6%80%8E%E4%B9%88%E5%8A%9E%23) `87.4K 🔥` `NEW`
1. [湖人锁定西部前四](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BA%E9%94%81%E5%AE%9A%E8%A5%BF%E9%83%A8%E5%89%8D%E5%9B%9B%23) `83.4K 🔥` `NEW`
1. [美代表团抵达巴基斯坦](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BB%A3%E8%A1%A8%E5%9B%A2%E6%8A%B5%E8%BE%BE%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%23) `73.7K 🔥` `NEW`
1. [小猫想进被窝被拒绝了 (The kitten wanted to get into the bed but was rejected)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E6%83%B3%E8%BF%9B%E8%A2%AB%E7%AA%9D%E8%A2%AB%E6%8B%92%E7%BB%9D%E4%BA%86%23) `69.4K 🔥` `NEW`
1. [单亲妈妈回应工地扛楼月入过万](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BA%B2%E5%A6%88%E5%A6%88%E5%9B%9E%E5%BA%94%E5%B7%A5%E5%9C%B0%E6%89%9B%E6%A5%BC%E6%9C%88%E5%85%A5%E8%BF%87%E4%B8%87%23) `67.5K 🔥` `NEW`
1. [华为PuraXMax曝光](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAPuraXMax%E6%9B%9D%E5%85%89%23) `66.1K 🔥` `NEW`
1. [马頔 我还要生孩子呢](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%20%E6%88%91%E8%BF%98%E8%A6%81%E7%94%9F%E5%AD%A9%E5%AD%90%E5%91%A2%23) `475.4K 🔥` `+58%`
1. [郑钧感谢全网为jagger操碎了心](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A7%E6%84%9F%E8%B0%A2%E5%85%A8%E7%BD%91%E4%B8%BAjagger%E6%93%8D%E7%A2%8E%E4%BA%86%E5%BF%83%23) `169.9K 🔥` `+62%`
1. [嫦娥七号计划下半年发射 (Chang'e-7 is planned to be launched in the second half of the year)](https://s.weibo.com/weibo?q=%23%E5%AB%A6%E5%A8%A5%E4%B8%83%E5%8F%B7%E8%AE%A1%E5%88%92%E4%B8%8B%E5%8D%8A%E5%B9%B4%E5%8F%91%E5%B0%84%23) `618.3K 🔥`
1. [19岁高中生复刻贝克汉姆惊天吊射](https://s.weibo.com/weibo?q=%2319%E5%B2%81%E9%AB%98%E4%B8%AD%E7%94%9F%E5%A4%8D%E5%88%BB%E8%B4%9D%E5%85%8B%E6%B1%89%E5%A7%86%E6%83%8A%E5%A4%A9%E5%90%8A%E5%B0%84%23) `170.0K 🔥`
1. [赵子琪不会再来浪姐](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E4%B8%8D%E4%BC%9A%E5%86%8D%E6%9D%A5%E6%B5%AA%E5%A7%90%23) `170.0K 🔥`
1. [向太说存款没有200万别买车](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E8%AF%B4%E5%AD%98%E6%AC%BE%E6%B2%A1%E6%9C%89200%E4%B8%87%E5%88%AB%E4%B9%B0%E8%BD%A6%23) `170.0K 🔥`
1. [伊朗谈判代表团命名米纳卜168](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%B0%88%E5%88%A4%E4%BB%A3%E8%A1%A8%E5%9B%A2%E5%91%BD%E5%90%8D%E7%B1%B3%E7%BA%B3%E5%8D%9C168%23) `169.8K 🔥`
1. [一栗小莎子已化疗4次还有8次 (Yili Xiaoshazi has had 4 chemotherapy treatments and there will be 8 more)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%A0%97%E5%B0%8F%E8%8E%8E%E5%AD%90%E5%B7%B2%E5%8C%96%E7%96%974%E6%AC%A1%E8%BF%98%E6%9C%898%E6%AC%A1%23) `169.8K 🔥`
1. [时代少年团 演唱会](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E6%BC%94%E5%94%B1%E4%BC%9A%23) `169.7K 🔥`
1. [疑似何与朋友点赞吐槽虞书欣言论 (It is suspected that He and his friends liked and complained about Yu Shuxin’s comments)](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E4%BD%95%E4%B8%8E%E6%9C%8B%E5%8F%8B%E7%82%B9%E8%B5%9E%E5%90%90%E6%A7%BD%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%A8%80%E8%AE%BA%23) `169.7K 🔥`
1. [突然意识到敲门好像不用抬手](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E6%95%B2%E9%97%A8%E5%A5%BD%E5%83%8F%E4%B8%8D%E7%94%A8%E6%8A%AC%E6%89%8B%23) `169.7K 🔥`
1. [朴宝剑刘诗诗王安宇孙千人生四格](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%AE%9D%E5%89%91%E5%88%98%E8%AF%97%E8%AF%97%E7%8E%8B%E5%AE%89%E5%AE%87%E5%AD%99%E5%8D%83%E4%BA%BA%E7%94%9F%E5%9B%9B%E6%A0%BC%23) `169.6K 🔥`
1. [赵子琪回应被指茶言茶语 (Zhao Ziqi responds to accusations of tea talk)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E5%9B%9E%E5%BA%94%E8%A2%AB%E6%8C%87%E8%8C%B6%E8%A8%80%E8%8C%B6%E8%AF%AD%23) `159.5K 🔥`
1. [刘雨鑫来完后自助粥锅店老板大吐苦水](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%A8%E9%91%AB%E6%9D%A5%E5%AE%8C%E5%90%8E%E8%87%AA%E5%8A%A9%E7%B2%A5%E9%94%85%E5%BA%97%E8%80%81%E6%9D%BF%E5%A4%A7%E5%90%90%E8%8B%A6%E6%B0%B4%23) `75.2K 🔥`
1. [湖南一路段插满白事灯笼](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E4%B8%80%E8%B7%AF%E6%AE%B5%E6%8F%92%E6%BB%A1%E7%99%BD%E4%BA%8B%E7%81%AF%E7%AC%BC%23) `800.8K 🔥` `-25%`
1. [天生没有四肢的母亲用嘴养活三个孩子](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E7%94%9F%E6%B2%A1%E6%9C%89%E5%9B%9B%E8%82%A2%E7%9A%84%E6%AF%8D%E4%BA%B2%E7%94%A8%E5%98%B4%E5%85%BB%E6%B4%BB%E4%B8%89%E4%B8%AA%E5%AD%A9%E5%AD%90%23) `202.2K 🔥` `-28%`
1. [孙怡送了一个白眼给芒果](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E9%80%81%E4%BA%86%E4%B8%80%E4%B8%AA%E7%99%BD%E7%9C%BC%E7%BB%99%E8%8A%92%E6%9E%9C%23) `195.2K 🔥` `-62%`
1. [海底捞礼物 员工罚款购入](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%BA%95%E6%8D%9E%E7%A4%BC%E7%89%A9%20%E5%91%98%E5%B7%A5%E7%BD%9A%E6%AC%BE%E8%B4%AD%E5%85%A5%23) `191.2K 🔥` `-34%`
1. [四川地震](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%9C%B0%E9%9C%87%23) `171.2K 🔥` `-44%`
1. [邓超发五哈新阵容照 (Deng Chao posts photos of Wuha’s new lineup)](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E5%8F%91%E4%BA%94%E5%93%88%E6%96%B0%E9%98%B5%E5%AE%B9%E7%85%A7%23) `138.5K 🔥` `-82%`
1. [白鹿晚餐吃水煮菜 (White Deer eats boiled vegetables for dinner)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%99%9A%E9%A4%90%E5%90%83%E6%B0%B4%E7%85%AE%E8%8F%9C%23) `137.5K 🔥` `-33%`
1. [每天做三顿饭肺癌风险高2.1倍](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%A4%A9%E5%81%9A%E4%B8%89%E9%A1%BF%E9%A5%AD%E8%82%BA%E7%99%8C%E9%A3%8E%E9%99%A9%E9%AB%982.1%E5%80%8D%23) `127.6K 🔥` `-35%`
1. [保护眼睛的简单方法 (Simple ways to protect your eyes)](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%8A%A4%E7%9C%BC%E7%9D%9B%E7%9A%84%E7%AE%80%E5%8D%95%E6%96%B9%E6%B3%95%23) `94.2K 🔥` `-36%`
1. [科切拉](https://s.weibo.com/weibo?q=%23%E7%A7%91%E5%88%87%E6%8B%89%23) `78.8K 🔥` `-29%`
1. [黄瓜拌菠萝](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%93%9C%E6%8B%8C%E8%8F%A0%E8%90%9D%23) `78.4K 🔥` `-72%`
1. [李楷灿疑似恋爱](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%A5%B7%E7%81%BF%E7%96%91%E4%BC%BC%E6%81%8B%E7%88%B1%23) `70.7K 🔥` `-26%`
1. [孙俪和小花看五哈](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E5%92%8C%E5%B0%8F%E8%8A%B1%E7%9C%8B%E4%BA%94%E5%93%88%23) `69.5K 🔥` `-35%`

Updated at 2026-04-11 14:11:58

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
