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

1. [广西抗洪 (Guangxi flood fighting)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%8A%97%E6%B4%AA%23) `5.8M 🔥` `NEW`
1. [LV胜诉敲响中国纹样版权保护警钟](https://s.weibo.com/weibo?q=%23LV%E8%83%9C%E8%AF%89%E6%95%B2%E5%93%8D%E4%B8%AD%E5%9B%BD%E7%BA%B9%E6%A0%B7%E7%89%88%E6%9D%83%E4%BF%9D%E6%8A%A4%E8%AD%A6%E9%92%9F%23) `1.3M 🔥` `NEW`
1. [公安部教育部推出暑期安全视频](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%AE%89%E9%83%A8%E6%95%99%E8%82%B2%E9%83%A8%E6%8E%A8%E5%87%BA%E6%9A%91%E6%9C%9F%E5%AE%89%E5%85%A8%E8%A7%86%E9%A2%91%23) `1.1M 🔥` `NEW`
1. [最强一战葡萄牙死磕西班牙](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%BC%BA%E4%B8%80%E6%88%98%E8%91%A1%E8%90%84%E7%89%99%E6%AD%BB%E7%A3%95%E8%A5%BF%E7%8F%AD%E7%89%99%23) `1.1M 🔥` `NEW`
1. [word删除空白页 义务教育](https://s.weibo.com/weibo?q=%23word%E5%88%A0%E9%99%A4%E7%A9%BA%E7%99%BD%E9%A1%B5%20%E4%B9%89%E5%8A%A1%E6%95%99%E8%82%B2%23) `1.0M 🔥` `NEW`
1. [湖北龙卷风](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8C%97%E9%BE%99%E5%8D%B7%E9%A3%8E%23) `624.0K 🔥` `NEW`
1. [印度嫌犯奸杀12岁女孩遭民众打死](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%AB%8C%E7%8A%AF%E5%A5%B8%E6%9D%8012%E5%B2%81%E5%A5%B3%E5%AD%A9%E9%81%AD%E6%B0%91%E4%BC%97%E6%89%93%E6%AD%BB%23) `589.5K 🔥` `NEW`
1. [陈瑶出道十一周年直播](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E5%87%BA%E9%81%93%E5%8D%81%E4%B8%80%E5%91%A8%E5%B9%B4%E7%9B%B4%E6%92%AD%23) `585.9K 🔥` `NEW`
1. [哈兰德是我见过最搞笑的足球明星](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E6%98%AF%E6%88%91%E8%A7%81%E8%BF%87%E6%9C%80%E6%90%9E%E7%AC%91%E7%9A%84%E8%B6%B3%E7%90%83%E6%98%8E%E6%98%9F%23) `583.2K 🔥` `NEW`
1. [暴雨天牢记这些保命知识](https://s.weibo.com/weibo?q=%23%E6%9A%B4%E9%9B%A8%E5%A4%A9%E7%89%A2%E8%AE%B0%E8%BF%99%E4%BA%9B%E4%BF%9D%E5%91%BD%E7%9F%A5%E8%AF%86%23) `489.5K 🔥` `NEW`
1. [王俊凯王源同款抢票失败 (Wang Junkai and Wang Yuan failed to grab tickets for the same model)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%8E%8B%E6%BA%90%E5%90%8C%E6%AC%BE%E6%8A%A2%E7%A5%A8%E5%A4%B1%E8%B4%A5%23) `453.6K 🔥` `NEW`
1. [功夫女足成本3.8亿](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E6%88%90%E6%9C%AC3.8%E4%BA%BF%23) `292.9K 🔥` `NEW`
1. [香蕉是世界上最善良的水果](https://s.weibo.com/weibo?q=%23%E9%A6%99%E8%95%89%E6%98%AF%E4%B8%96%E7%95%8C%E4%B8%8A%E6%9C%80%E5%96%84%E8%89%AF%E7%9A%84%E6%B0%B4%E6%9E%9C%23) `289.0K 🔥` `NEW`
1. [广西洪涝灾害致2人死亡](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%B4%AA%E6%B6%9D%E7%81%BE%E5%AE%B3%E8%87%B42%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `287.0K 🔥` `NEW`
1. [房租才是我生活拮据的罪魁祸首](https://s.weibo.com/weibo?q=%23%E6%88%BF%E7%A7%9F%E6%89%8D%E6%98%AF%E6%88%91%E7%94%9F%E6%B4%BB%E6%8B%AE%E6%8D%AE%E7%9A%84%E7%BD%AA%E9%AD%81%E7%A5%B8%E9%A6%96%23) `277.1K 🔥` `NEW`
1. [广西灾情可能进一步扩大](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E7%81%BE%E6%83%85%E5%8F%AF%E8%83%BD%E8%BF%9B%E4%B8%80%E6%AD%A5%E6%89%A9%E5%A4%A7%23) `247.9K 🔥` `NEW`
1. [宋佳镂空泳衣](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BD%B3%E9%95%82%E7%A9%BA%E6%B3%B3%E8%A1%A3%23) `247.1K 🔥` `NEW`
1. [特朗普插手世界杯红牌](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%8F%92%E6%89%8B%E4%B8%96%E7%95%8C%E6%9D%AF%E7%BA%A2%E7%89%8C%23) `245.4K 🔥` `NEW`
1. [全新坦克300年轻人的潮流大玩具](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%96%B0%E5%9D%A6%E5%85%8B300%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%9A%84%E6%BD%AE%E6%B5%81%E5%A4%A7%E7%8E%A9%E5%85%B7%23) `241.3K 🔥` `NEW`
1. [字节 草地牛](https://s.weibo.com/weibo?q=%23%E5%AD%97%E8%8A%82%20%E8%8D%89%E5%9C%B0%E7%89%9B%23) `240.9K 🔥` `NEW`
1. [王橹杰新歌part (Wang Lujie's new song part)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%96%B0%E6%AD%8Cpart%23) `203.0K 🔥` `NEW`
1. [博物馆通报国家一级文物现TCL字样](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E7%89%A9%E9%A6%86%E9%80%9A%E6%8A%A5%E5%9B%BD%E5%AE%B6%E4%B8%80%E7%BA%A7%E6%96%87%E7%89%A9%E7%8E%B0TCL%E5%AD%97%E6%A0%B7%23) `192.3K 🔥` `NEW`
1. [虞书欣就这么把脸伸过来了](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%B0%B1%E8%BF%99%E4%B9%88%E6%8A%8A%E8%84%B8%E4%BC%B8%E8%BF%87%E6%9D%A5%E4%BA%86%23) `192.1K 🔥` `NEW`
1. [三星SK海力士股价震荡](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9FSK%E6%B5%B7%E5%8A%9B%E5%A3%AB%E8%82%A1%E4%BB%B7%E9%9C%87%E8%8D%A1%23) `188.3K 🔥` `NEW`
1. [TF四代 五公地点](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%20%E4%BA%94%E5%85%AC%E5%9C%B0%E7%82%B9%23) `186.4K 🔥` `NEW`
1. [醪糟加牛奶放一放就可以做成冰酥酪](https://s.weibo.com/weibo?q=%23%E9%86%AA%E7%B3%9F%E5%8A%A0%E7%89%9B%E5%A5%B6%E6%94%BE%E4%B8%80%E6%94%BE%E5%B0%B1%E5%8F%AF%E4%BB%A5%E5%81%9A%E6%88%90%E5%86%B0%E9%85%A5%E9%85%AA%23) `185.2K 🔥` `NEW`
1. [美国队红牌引发全球二创热潮](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E9%98%9F%E7%BA%A2%E7%89%8C%E5%BC%95%E5%8F%91%E5%85%A8%E7%90%83%E4%BA%8C%E5%88%9B%E7%83%AD%E6%BD%AE%23) `183.4K 🔥` `NEW`
1. [C罗预测葡萄牙会获胜](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E9%A2%84%E6%B5%8B%E8%91%A1%E8%90%84%E7%89%99%E4%BC%9A%E8%8E%B7%E8%83%9C%23) `180.2K 🔥` `NEW`
1. [王俊凯也抢不到自己演唱会票](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%B9%9F%E6%8A%A2%E4%B8%8D%E5%88%B0%E8%87%AA%E5%B7%B1%E6%BC%94%E5%94%B1%E4%BC%9A%E7%A5%A8%23) `179.3K 🔥` `NEW`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `179.1K 🔥` `NEW`
1. [台风巴威登陆地点 (Where Typhoon Bavi made landfall)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E7%99%BB%E9%99%86%E5%9C%B0%E7%82%B9%23) `177.7K 🔥` `NEW`
1. [有编制后立刻分手是否人品有问题](https://s.weibo.com/weibo?q=%23%E6%9C%89%E7%BC%96%E5%88%B6%E5%90%8E%E7%AB%8B%E5%88%BB%E5%88%86%E6%89%8B%E6%98%AF%E5%90%A6%E4%BA%BA%E5%93%81%E6%9C%89%E9%97%AE%E9%A2%98%23) `167.3K 🔥` `NEW`
1. [鞠婧祎比基尼手机壳](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%AF%94%E5%9F%BA%E5%B0%BC%E6%89%8B%E6%9C%BA%E5%A3%B3%23) `167.2K 🔥` `NEW`
1. [青岛暴雨](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E6%9A%B4%E9%9B%A8%23) `158.4K 🔥` `NEW`
1. [上海理工公布徐志摩成绩单](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E7%90%86%E5%B7%A5%E5%85%AC%E5%B8%83%E5%BE%90%E5%BF%97%E6%91%A9%E6%88%90%E7%BB%A9%E5%8D%95%23) `155.4K 🔥` `NEW`
1. [19岁大学生立遗嘱将所有财产赠发小](https://s.weibo.com/weibo?q=%2319%E5%B2%81%E5%A4%A7%E5%AD%A6%E7%94%9F%E7%AB%8B%E9%81%97%E5%98%B1%E5%B0%86%E6%89%80%E6%9C%89%E8%B4%A2%E4%BA%A7%E8%B5%A0%E5%8F%91%E5%B0%8F%23) `154.8K 🔥` `NEW`
1. [女儿不吃蛋黄妈妈摇匀鸡蛋再煮](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E4%B8%8D%E5%90%83%E8%9B%8B%E9%BB%84%E5%A6%88%E5%A6%88%E6%91%87%E5%8C%80%E9%B8%A1%E8%9B%8B%E5%86%8D%E7%85%AE%23) `147.0K 🔥` `NEW`
1. [虞书欣一款气血很足的女明星](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%B8%80%E6%AC%BE%E6%B0%94%E8%A1%80%E5%BE%88%E8%B6%B3%E7%9A%84%E5%A5%B3%E6%98%8E%E6%98%9F%23) `130.8K 🔥` `NEW`
1. [半熟5柳柳去过边伯贤签售会](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E7%86%9F5%E6%9F%B3%E6%9F%B3%E5%8E%BB%E8%BF%87%E8%BE%B9%E4%BC%AF%E8%B4%A4%E7%AD%BE%E5%94%AE%E4%BC%9A%23) `130.4K 🔥` `NEW`
1. [广西洪水 (Guangxi floods)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%B4%AA%E6%B0%B4%23) `290.8K 🔥` `-94%`
1. [过去24小时广西下了多少雨](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%8E%BB24%E5%B0%8F%E6%97%B6%E5%B9%BF%E8%A5%BF%E4%B8%8B%E4%BA%86%E5%A4%9A%E5%B0%91%E9%9B%A8%23) `284.3K 🔥` `-36%`
1. [世界第一把解放双手的免提伞 (The world’s first hands-free umbrella)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E7%AC%AC%E4%B8%80%E6%8A%8A%E8%A7%A3%E6%94%BE%E5%8F%8C%E6%89%8B%E7%9A%84%E5%85%8D%E6%8F%90%E4%BC%9E%23) `279.5K 🔥` `-38%`
1. [杨有林死刑 (Yang Youlin sentenced to death)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%9C%89%E6%9E%97%E6%AD%BB%E5%88%91%23) `272.6K 🔥` `-79%`
1. [影视寒冬具象化了](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E5%AF%92%E5%86%AC%E5%85%B7%E8%B1%A1%E5%8C%96%E4%BA%86%23) `268.2K 🔥` `-45%`
1. [哈兰德连发5条中文动态](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E8%BF%9E%E5%8F%915%E6%9D%A1%E4%B8%AD%E6%96%87%E5%8A%A8%E6%80%81%23) `267.5K 🔥` `-66%`
1. [迪丽热巴代言投广功夫女足](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%BB%A3%E8%A8%80%E6%8A%95%E5%B9%BF%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%23) `189.6K 🔥` `-56%`
1. [何与探班孟子义](https://s.weibo.com/weibo?q=%23%E4%BD%95%E4%B8%8E%E6%8E%A2%E7%8F%AD%E5%AD%9F%E5%AD%90%E4%B9%89%23) `187.4K 🔥` `-52%`
1. [美客机在空中被烟花击中](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AE%A2%E6%9C%BA%E5%9C%A8%E7%A9%BA%E4%B8%AD%E8%A2%AB%E7%83%9F%E8%8A%B1%E5%87%BB%E4%B8%AD%23) `184.2K 🔥` `-58%`
1. [papi酱 好实用的图](https://s.weibo.com/weibo?q=%23papi%E9%85%B1%20%E5%A5%BD%E5%AE%9E%E7%94%A8%E7%9A%84%E5%9B%BE%23) `156.1K 🔥` `-64%`
1. [欧足联声明](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E8%B6%B3%E8%81%94%E5%A3%B0%E6%98%8E%23) `144.9K 🔥` `-71%`
1. [朱珠身高166体重108](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E7%8F%A0%E8%BA%AB%E9%AB%98166%E4%BD%93%E9%87%8D108%23) `131.7K 🔥` `-72%`
1. [iPhoneUltra和18ProMax对比](https://s.weibo.com/weibo?q=%23iPhoneUltra%E5%92%8C18ProMax%E5%AF%B9%E6%AF%94%23) `130.5K 🔥` `-67%`

Updated at 2026-07-06 22:31:43

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
