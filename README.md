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

1. [庆祝建党105周年大会温暖瞬间 (Warm moments at the conference celebrating the 105th anniversary of the founding of the Party)](https://s.weibo.com/weibo?q=%23%E5%BA%86%E7%A5%9D%E5%BB%BA%E5%85%9A105%E5%91%A8%E5%B9%B4%E5%A4%A7%E4%BC%9A%E6%B8%A9%E6%9A%96%E7%9E%AC%E9%97%B4%23) `1.0M 🔥` `NEW`
1. [比亚迪销量](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E9%94%80%E9%87%8F%23) `834.4K 🔥` `NEW`
1. [七一勋章获得者的歌声](https://s.weibo.com/weibo?q=%23%E4%B8%83%E4%B8%80%E5%8B%8B%E7%AB%A0%E8%8E%B7%E5%BE%97%E8%80%85%E7%9A%84%E6%AD%8C%E5%A3%B0%23) `599.1K 🔥` `NEW`
1. [黄金创13年来最大暴跌](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%88%9B13%E5%B9%B4%E6%9D%A5%E6%9C%80%E5%A4%A7%E6%9A%B4%E8%B7%8C%23) `543.3K 🔥` `NEW`
1. [公积金 结息](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%20%E7%BB%93%E6%81%AF%23) `398.6K 🔥` `NEW`
1. [AI漫剧 降维打击](https://s.weibo.com/weibo?q=%23AI%E6%BC%AB%E5%89%A7%20%E9%99%8D%E7%BB%B4%E6%89%93%E5%87%BB%23) `391.9K 🔥` `NEW`
1. [体制内头像都很山清水秀](https://s.weibo.com/weibo?q=%23%E4%BD%93%E5%88%B6%E5%86%85%E5%A4%B4%E5%83%8F%E9%83%BD%E5%BE%88%E5%B1%B1%E6%B8%85%E6%B0%B4%E7%A7%80%23) `374.7K 🔥` `NEW`
1. [樊振东正式加盟杜塞尔多夫](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%AD%A3%E5%BC%8F%E5%8A%A0%E7%9B%9F%E6%9D%9C%E5%A1%9E%E5%B0%94%E5%A4%9A%E5%A4%AB%23) `373.4K 🔥` `NEW`
1. [新时代中国青年要这样做](https://s.weibo.com/weibo?q=%23%E6%96%B0%E6%97%B6%E4%BB%A3%E4%B8%AD%E5%9B%BD%E9%9D%92%E5%B9%B4%E8%A6%81%E8%BF%99%E6%A0%B7%E5%81%9A%23) `354.6K 🔥` `NEW`
1. [A股交易新规7月6日起施行](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%BA%A4%E6%98%93%E6%96%B0%E8%A7%847%E6%9C%886%E6%97%A5%E8%B5%B7%E6%96%BD%E8%A1%8C%23) `344.9K 🔥` `NEW`
1. [985毕业大厂离职玄学月入10万感悟 (985 Graduation, Resignation from a Big Factory, My Thoughts on the Metaphysics of Making 100,000 RMB a Month)](https://s.weibo.com/weibo?q=%23985%E6%AF%95%E4%B8%9A%E5%A4%A7%E5%8E%82%E7%A6%BB%E8%81%8C%E7%8E%84%E5%AD%A6%E6%9C%88%E5%85%A510%E4%B8%87%E6%84%9F%E6%82%9F%23) `334.9K 🔥` `NEW`
1. [内娱年度最差编剧](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E5%B9%B4%E5%BA%A6%E6%9C%80%E5%B7%AE%E7%BC%96%E5%89%A7%23) `328.9K 🔥` `NEW`
1. [卢昱晓 上镜淡颜线下浓颜](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%20%E4%B8%8A%E9%95%9C%E6%B7%A1%E9%A2%9C%E7%BA%BF%E4%B8%8B%E6%B5%93%E9%A2%9C%23) `326.6K 🔥` `NEW`
1. [绿源电动车 擦边](https://s.weibo.com/weibo?q=%23%E7%BB%BF%E6%BA%90%E7%94%B5%E5%8A%A8%E8%BD%A6%20%E6%93%A6%E8%BE%B9%23) `323.9K 🔥` `NEW`
1. [疑似赖伟明车厢脱鞋被吐槽](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E8%B5%96%E4%BC%9F%E6%98%8E%E8%BD%A6%E5%8E%A2%E8%84%B1%E9%9E%8B%E8%A2%AB%E5%90%90%E6%A7%BD%23) `320.4K 🔥` `NEW`
1. [四个女明星撞衫同一款礼服](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E4%B8%AA%E5%A5%B3%E6%98%8E%E6%98%9F%E6%92%9E%E8%A1%AB%E5%90%8C%E4%B8%80%E6%AC%BE%E7%A4%BC%E6%9C%8D%23) `316.6K 🔥` `NEW`
1. [小米高层重大调整](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E9%AB%98%E5%B1%82%E9%87%8D%E5%A4%A7%E8%B0%83%E6%95%B4%23) `315.9K 🔥` `NEW`
1. [金冬天体态](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%86%AC%E5%A4%A9%E4%BD%93%E6%80%81%23) `313.7K 🔥` `NEW`
1. [韩雨彤否认与曾辉领证](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E9%9B%A8%E5%BD%A4%E5%90%A6%E8%AE%A4%E4%B8%8E%E6%9B%BE%E8%BE%89%E9%A2%86%E8%AF%81%23) `313.7K 🔥` `NEW`
1. [樊振东新定妆照出炉](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%96%B0%E5%AE%9A%E5%A6%86%E7%85%A7%E5%87%BA%E7%82%89%23) `308.6K 🔥` `NEW`
1. [低智商犯罪庆功宴 (Celebration party for low-IQ criminals)](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E6%99%BA%E5%95%86%E7%8A%AF%E7%BD%AA%E5%BA%86%E5%8A%9F%E5%AE%B4%23) `285.0K 🔥` `NEW`
1. [白玉兰评委称藏海传叙事不足](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E8%AF%84%E5%A7%94%E7%A7%B0%E8%97%8F%E6%B5%B7%E4%BC%A0%E5%8F%99%E4%BA%8B%E4%B8%8D%E8%B6%B3%23) `275.3K 🔥` `NEW`
1. [大姐吃14天控糖餐腰围瘦13厘米](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%A7%90%E5%90%8314%E5%A4%A9%E6%8E%A7%E7%B3%96%E9%A4%90%E8%85%B0%E5%9B%B4%E7%98%A613%E5%8E%98%E7%B1%B3%23) `272.6K 🔥` `NEW`
1. [黄多多纯素颜](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A%E7%BA%AF%E7%B4%A0%E9%A2%9C%23) `271.0K 🔥` `NEW`
1. [田曦薇低智商犯罪庆功宴合照](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E4%BD%8E%E6%99%BA%E5%95%86%E7%8A%AF%E7%BD%AA%E5%BA%86%E5%8A%9F%E5%AE%B4%E5%90%88%E7%85%A7%23) `262.0K 🔥` `NEW`
1. [赵丽颖纪梵希彩妆大片](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%BA%AA%E6%A2%B5%E5%B8%8C%E5%BD%A9%E5%A6%86%E5%A4%A7%E7%89%87%23) `255.6K 🔥` `NEW`
1. [小猫居然分得清睡衣和出门衣服](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E5%B1%85%E7%84%B6%E5%88%86%E5%BE%97%E6%B8%85%E7%9D%A1%E8%A1%A3%E5%92%8C%E5%87%BA%E9%97%A8%E8%A1%A3%E6%9C%8D%23) `244.7K 🔥` `NEW`
1. [严浩翔知道信任在消磨](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%9F%A5%E9%81%93%E4%BF%A1%E4%BB%BB%E5%9C%A8%E6%B6%88%E7%A3%A8%23) `243.1K 🔥` `NEW`
1. [男子用马桶疏通器改出2把气枪](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%94%A8%E9%A9%AC%E6%A1%B6%E7%96%8F%E9%80%9A%E5%99%A8%E6%94%B9%E5%87%BA2%E6%8A%8A%E6%B0%94%E6%9E%AA%23) `223.8K 🔥` `NEW`
1. [大冰谈不结婚怎么过下半生](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E8%B0%88%E4%B8%8D%E7%BB%93%E5%A9%9A%E6%80%8E%E4%B9%88%E8%BF%87%E4%B8%8B%E5%8D%8A%E7%94%9F%23) `222.4K 🔥` `NEW`
1. [亚马尔居然这么贵 (Yamal is so expensive)](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E5%B1%85%E7%84%B6%E8%BF%99%E4%B9%88%E8%B4%B5%23) `213.3K 🔥` `NEW`
1. [刘耀文夏天穿羽绒服](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E5%A4%8F%E5%A4%A9%E7%A9%BF%E7%BE%BD%E7%BB%92%E6%9C%8D%23) `209.6K 🔥` `NEW`
1. [有一种人就是上班狂热者](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%B8%80%E7%A7%8D%E4%BA%BA%E5%B0%B1%E6%98%AF%E4%B8%8A%E7%8F%AD%E7%8B%82%E7%83%AD%E8%80%85%23) `208.4K 🔥` `NEW`
1. [BLG将与T1交手](https://s.weibo.com/weibo?q=%23BLG%E5%B0%86%E4%B8%8ET1%E4%BA%A4%E6%89%8B%23) `207.7K 🔥` `NEW`
1. [周杰伦十一年没去金曲奖](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E5%8D%81%E4%B8%80%E5%B9%B4%E6%B2%A1%E5%8E%BB%E9%87%91%E6%9B%B2%E5%A5%96%23) `205.8K 🔥` `NEW`
1. [哈兰德绝杀惊动挪威测震仪](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E7%BB%9D%E6%9D%80%E6%83%8A%E5%8A%A8%E6%8C%AA%E5%A8%81%E6%B5%8B%E9%9C%87%E4%BB%AA%23) `205.4K 🔥` `NEW`
1. [2026MSI](https://s.weibo.com/weibo?q=%232026MSI%23) `171.9K 🔥` `NEW`
1. [关晓彤一撑伞就出神图](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E4%B8%80%E6%92%91%E4%BC%9E%E5%B0%B1%E5%87%BA%E7%A5%9E%E5%9B%BE%23) `162.3K 🔥` `NEW`
1. [iPhone18Pro还有银灰浅蓝配色](https://s.weibo.com/weibo?q=%23iPhone18Pro%E8%BF%98%E6%9C%89%E9%93%B6%E7%81%B0%E6%B5%85%E8%93%9D%E9%85%8D%E8%89%B2%23) `138.2K 🔥` `NEW`
1. [韩国女消防员被迫陪酒自杀细节曝光](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%A5%B3%E6%B6%88%E9%98%B2%E5%91%98%E8%A2%AB%E8%BF%AB%E9%99%AA%E9%85%92%E8%87%AA%E6%9D%80%E7%BB%86%E8%8A%82%E6%9B%9D%E5%85%89%23) `138.2K 🔥` `NEW`
1. [比亚迪6月新能源车销量40.35万辆 (BYD sold 403,500 new energy vehicles in June)](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA6%E6%9C%88%E6%96%B0%E8%83%BD%E6%BA%90%E8%BD%A6%E9%94%80%E9%87%8F40.35%E4%B8%87%E8%BE%86%23) `137.8K 🔥` `NEW`
1. [网红出租车甘A88888招手即停](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E5%87%BA%E7%A7%9F%E8%BD%A6%E7%94%98A88888%E6%8B%9B%E6%89%8B%E5%8D%B3%E5%81%9C%23) `137.5K 🔥` `NEW`
1. [跟没上过班的人沟通真的好累](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E6%B2%A1%E4%B8%8A%E8%BF%87%E7%8F%AD%E7%9A%84%E4%BA%BA%E6%B2%9F%E9%80%9A%E7%9C%9F%E7%9A%84%E5%A5%BD%E7%B4%AF%23) `341.2K 🔥` `+74%`
1. [福建天雷劈庙](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E5%A4%A9%E9%9B%B7%E5%8A%88%E5%BA%99%23) `261.6K 🔥` `+33%`
1. [丁禹兮 姜珮瑶](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%20%E5%A7%9C%E7%8F%AE%E7%91%B6%23) `343.1K 🔥` `-30%`
1. [虞书欣都瘦出脚脖子了](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E9%83%BD%E7%98%A6%E5%87%BA%E8%84%9A%E8%84%96%E5%AD%90%E4%BA%86%23) `336.1K 🔥` `-31%`
1. [人一旦有了考编的念头](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E6%97%A6%E6%9C%89%E4%BA%86%E8%80%83%E7%BC%96%E7%9A%84%E5%BF%B5%E5%A4%B4%23) `308.8K 🔥` `-24%`
1. [这样安排工资简直是天才](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%A0%B7%E5%AE%89%E6%8E%92%E5%B7%A5%E8%B5%84%E7%AE%80%E7%9B%B4%E6%98%AF%E5%A4%A9%E6%89%8D%23) `306.4K 🔥` `-38%`
1. [陈添祥 十年合约](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B7%BB%E7%A5%A5%20%E5%8D%81%E5%B9%B4%E5%90%88%E7%BA%A6%23) `241.1K 🔥` `-50%`
1. [河南西瓜1400斤100元](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E8%A5%BF%E7%93%9C1400%E6%96%A4100%E5%85%83%23) `197.2K 🔥` `-53%`

Updated at 2026-07-01 19:54:18

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
