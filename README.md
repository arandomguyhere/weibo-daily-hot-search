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

1. [杨梅泡药事件冲击浙江杨梅市场 (Incident of soaked bayberry medicine affects Zhejiang bayberry market)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%A2%85%E6%B3%A1%E8%8D%AF%E4%BA%8B%E4%BB%B6%E5%86%B2%E5%87%BB%E6%B5%99%E6%B1%9F%E6%9D%A8%E6%A2%85%E5%B8%82%E5%9C%BA%23) `1.2M 🔥` `NEW`
1. [普京访华俄方代表团名单公布](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E8%AE%BF%E5%8D%8E%E4%BF%84%E6%96%B9%E4%BB%A3%E8%A1%A8%E5%9B%A2%E5%90%8D%E5%8D%95%E5%85%AC%E5%B8%83%23) `859.7K 🔥` `NEW`
1. [让高品质文旅点亮诗和远方](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E9%AB%98%E5%93%81%E8%B4%A8%E6%96%87%E6%97%85%E7%82%B9%E4%BA%AE%E8%AF%97%E5%92%8C%E8%BF%9C%E6%96%B9%23) `840.9K 🔥` `NEW`
1. [白鹿侯明昊17年拍的剧要上了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%BE%AF%E6%98%8E%E6%98%8A17%E5%B9%B4%E6%8B%8D%E7%9A%84%E5%89%A7%E8%A6%81%E4%B8%8A%E4%BA%86%23) `808.4K 🔥` `NEW`
1. [长白头发不是因为老是你太累了](https://s.weibo.com/weibo?q=%23%E9%95%BF%E7%99%BD%E5%A4%B4%E5%8F%91%E4%B8%8D%E6%98%AF%E5%9B%A0%E4%B8%BA%E8%80%81%E6%98%AF%E4%BD%A0%E5%A4%AA%E7%B4%AF%E4%BA%86%23) `780.5K 🔥` `NEW`
1. [2026数码流行色是什么](https://s.weibo.com/weibo?q=%232026%E6%95%B0%E7%A0%81%E6%B5%81%E8%A1%8C%E8%89%B2%E6%98%AF%E4%BB%80%E4%B9%88%23) `778.5K 🔥` `NEW`
1. [第一次被中式美学震撼到](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A2%AB%E4%B8%AD%E5%BC%8F%E7%BE%8E%E5%AD%A6%E9%9C%87%E6%92%BC%E5%88%B0%23) `775.4K 🔥` `NEW`
1. [文班亚马谈亚历山大获MVP](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%8F%AD%E4%BA%9A%E9%A9%AC%E8%B0%88%E4%BA%9A%E5%8E%86%E5%B1%B1%E5%A4%A7%E8%8E%B7MVP%23) `515.7K 🔥` `NEW`
1. [孙杨采访时突然开始点餐](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E9%87%87%E8%AE%BF%E6%97%B6%E7%AA%81%E7%84%B6%E5%BC%80%E5%A7%8B%E7%82%B9%E9%A4%90%23) `514.4K 🔥` `NEW`
1. [黄灿灿 发腮受益者](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%20%E5%8F%91%E8%85%AE%E5%8F%97%E7%9B%8A%E8%80%85%23) `513.7K 🔥` `NEW`
1. [24岁短剧男演员去世 (Short drama actor dies at 24)](https://s.weibo.com/weibo?q=%2324%E5%B2%81%E7%9F%AD%E5%89%A7%E7%94%B7%E6%BC%94%E5%91%98%E5%8E%BB%E4%B8%96%23) `513.3K 🔥` `NEW`
1. [特朗普暗示日本过头了](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%9A%97%E7%A4%BA%E6%97%A5%E6%9C%AC%E8%BF%87%E5%A4%B4%E4%BA%86%23) `512.6K 🔥` `NEW`
1. [金手镯没直接给新娘一周后得知丢了](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%89%8B%E9%95%AF%E6%B2%A1%E7%9B%B4%E6%8E%A5%E7%BB%99%E6%96%B0%E5%A8%98%E4%B8%80%E5%91%A8%E5%90%8E%E5%BE%97%E7%9F%A5%E4%B8%A2%E4%BA%86%23) `504.4K 🔥` `NEW`
1. [林允 女孩儿胖一点真的好](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%85%81%20%E5%A5%B3%E5%AD%A9%E5%84%BF%E8%83%96%E4%B8%80%E7%82%B9%E7%9C%9F%E7%9A%84%E5%A5%BD%23) `467.6K 🔥` `NEW`
1. [徐若晗情商](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%8B%A5%E6%99%97%E6%83%85%E5%95%86%23) `363.0K 🔥` `NEW`
1. [离职要上交公司小狗](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E8%81%8C%E8%A6%81%E4%B8%8A%E4%BA%A4%E5%85%AC%E5%8F%B8%E5%B0%8F%E7%8B%97%23) `325.0K 🔥` `NEW`
1. [阿Sa否认含泪控诉丈夫](https://s.weibo.com/weibo?q=%23%E9%98%BFSa%E5%90%A6%E8%AE%A4%E5%90%AB%E6%B3%AA%E6%8E%A7%E8%AF%89%E4%B8%88%E5%A4%AB%23) `308.8K 🔥` `NEW`
1. [孟子义方否认加塞](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%96%B9%E5%90%A6%E8%AE%A4%E5%8A%A0%E5%A1%9E%23) `283.6K 🔥` `NEW`
1. [我婆婆和王安宇妈妈是同事](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%A9%86%E5%A9%86%E5%92%8C%E7%8E%8B%E5%AE%89%E5%AE%87%E5%A6%88%E5%A6%88%E6%98%AF%E5%90%8C%E4%BA%8B%23) `279.2K 🔥` `NEW`
1. [高市早苗访问韩国](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E8%AE%BF%E9%97%AE%E9%9F%A9%E5%9B%BD%23) `272.5K 🔥` `NEW`
1. [攻玉路透 (Attack jade Reuters)](https://s.weibo.com/weibo?q=%23%E6%94%BB%E7%8E%89%E8%B7%AF%E9%80%8F%23) `266.2K 🔥` `NEW`
1. [时代峰峻艺人520红包时间](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E8%89%BA%E4%BA%BA520%E7%BA%A2%E5%8C%85%E6%97%B6%E9%97%B4%23) `243.5K 🔥` `NEW`
1. [警方回应洁丽雅案件](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E5%9B%9E%E5%BA%94%E6%B4%81%E4%B8%BD%E9%9B%85%E6%A1%88%E4%BB%B6%23) `243.4K 🔥` `NEW`
1. [古装剧孩童终于不梳大人发型了](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E8%A3%85%E5%89%A7%E5%AD%A9%E7%AB%A5%E7%BB%88%E4%BA%8E%E4%B8%8D%E6%A2%B3%E5%A4%A7%E4%BA%BA%E5%8F%91%E5%9E%8B%E4%BA%86%23) `243.1K 🔥` `NEW`
1. [一生两口牙真不够用](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%94%9F%E4%B8%A4%E5%8F%A3%E7%89%99%E7%9C%9F%E4%B8%8D%E5%A4%9F%E7%94%A8%23) `242.8K 🔥` `NEW`
1. [王源十个勤天也有六人定律](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%E4%B9%9F%E6%9C%89%E5%85%AD%E4%BA%BA%E5%AE%9A%E5%BE%8B%23) `238.1K 🔥` `NEW`
1. [鹿晗 不是佛子是妖僧](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%20%E4%B8%8D%E6%98%AF%E4%BD%9B%E5%AD%90%E6%98%AF%E5%A6%96%E5%83%A7%23) `223.9K 🔥` `NEW`
1. [广西一蛋糕店用柳州地震营销](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E4%B8%80%E8%9B%8B%E7%B3%95%E5%BA%97%E7%94%A8%E6%9F%B3%E5%B7%9E%E5%9C%B0%E9%9C%87%E8%90%A5%E9%94%80%23) `211.7K 🔥` `NEW`
1. [台湾必将回归祖国怀抱](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E5%BF%85%E5%B0%86%E5%9B%9E%E5%BD%92%E7%A5%96%E5%9B%BD%E6%80%80%E6%8A%B1%23) `207.2K 🔥` `NEW`
1. [时代少年团最全综艺拉表](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%9C%80%E5%85%A8%E7%BB%BC%E8%89%BA%E6%8B%89%E8%A1%A8%23) `204.9K 🔥` `NEW`
1. [洁丽雅晒公证书 (Jie Liya’s notarial certificate)](https://s.weibo.com/weibo?q=%23%E6%B4%81%E4%B8%BD%E9%9B%85%E6%99%92%E5%85%AC%E8%AF%81%E4%B9%A6%23) `193.8K 🔥` `NEW`
1. [女子帮亲哥贷款23万买房后成黑户](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B8%AE%E4%BA%B2%E5%93%A5%E8%B4%B7%E6%AC%BE23%E4%B8%87%E4%B9%B0%E6%88%BF%E5%90%8E%E6%88%90%E9%BB%91%E6%88%B7%23) `188.2K 🔥` `NEW`
1. [国产家电有多夯](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BA%A7%E5%AE%B6%E7%94%B5%E6%9C%89%E5%A4%9A%E5%A4%AF%23) `185.8K 🔥` `NEW`
1. [大冰识人的两个标准](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E8%AF%86%E4%BA%BA%E7%9A%84%E4%B8%A4%E4%B8%AA%E6%A0%87%E5%87%86%23) `185.0K 🔥` `NEW`
1. [520明星红包](https://s.weibo.com/weibo?q=%23520%E6%98%8E%E6%98%9F%E7%BA%A2%E5%8C%85%23) `184.6K 🔥` `NEW`
1. [超5成肠道肿瘤里检出微塑料](https://s.weibo.com/weibo?q=%23%E8%B6%855%E6%88%90%E8%82%A0%E9%81%93%E8%82%BF%E7%98%A4%E9%87%8C%E6%A3%80%E5%87%BA%E5%BE%AE%E5%A1%91%E6%96%99%23) `184.6K 🔥` `NEW`
1. [曾舜晞鹤男cp感](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%88%9C%E6%99%9E%E9%B9%A4%E7%94%B7cp%E6%84%9F%23) `178.1K 🔥` `NEW`
1. [十个勤天工装照](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%E5%B7%A5%E8%A3%85%E7%85%A7%23) `174.4K 🔥` `NEW`
1. [一国企招考多岗位考生全部弃考](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%9B%BD%E4%BC%81%E6%8B%9B%E8%80%83%E5%A4%9A%E5%B2%97%E4%BD%8D%E8%80%83%E7%94%9F%E5%85%A8%E9%83%A8%E5%BC%83%E8%80%83%23) `173.4K 🔥` `NEW`
1. [中美同意开展人工智能政府间对话](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%90%8C%E6%84%8F%E5%BC%80%E5%B1%95%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E6%94%BF%E5%BA%9C%E9%97%B4%E5%AF%B9%E8%AF%9D%23) `173.0K 🔥` `NEW`
1. [时代少年团发520红包 (Times Youth League distributes 520 red envelopes)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%8F%91520%E7%BA%A2%E5%8C%85%23) `172.7K 🔥` `NEW`
1. [攻玉](https://s.weibo.com/weibo?q=%23%E6%94%BB%E7%8E%89%23) `160.9K 🔥` `NEW`
1. [张艺兴君佩全球首位品牌代言人 (Zhang Yixing Junpei is the world's first brand spokesperson)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%89%BA%E5%85%B4%E5%90%9B%E4%BD%A9%E5%85%A8%E7%90%83%E9%A6%96%E4%BD%8D%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `830.3K 🔥` `+26%`
1. [五月份不要轻易离职](https://s.weibo.com/weibo?q=%23%E4%BA%94%E6%9C%88%E4%BB%BD%E4%B8%8D%E8%A6%81%E8%BD%BB%E6%98%93%E7%A6%BB%E8%81%8C%23) `829.1K 🔥`
1. [徐若晗没有理方媛](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%8B%A5%E6%99%97%E6%B2%A1%E6%9C%89%E7%90%86%E6%96%B9%E5%AA%9B%23) `516.7K 🔥`
1. [多方祝贺小米YU7GT新纪录](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E7%A5%9D%E8%B4%BA%E5%B0%8F%E7%B1%B3YU7GT%E6%96%B0%E7%BA%AA%E5%BD%95%23) `516.6K 🔥`
1. [女子亲宝宝脚丫嘴唇肿成香肠](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BA%B2%E5%AE%9D%E5%AE%9D%E8%84%9A%E4%B8%AB%E5%98%B4%E5%94%87%E8%82%BF%E6%88%90%E9%A6%99%E8%82%A0%23) `366.8K 🔥`
1. [奔跑吧发孟子义](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E5%8F%91%E5%AD%9F%E5%AD%90%E4%B9%89%23) `447.0K 🔥` `-44%`
1. [跑男 加塞](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%20%E5%8A%A0%E5%A1%9E%23) `340.6K 🔥` `-38%`
1. [林俊杰现身七七毕业典礼](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E7%8E%B0%E8%BA%AB%E4%B8%83%E4%B8%83%E6%AF%95%E4%B8%9A%E5%85%B8%E7%A4%BC%23) `314.6K 🔥` `-30%`
1. [普京访华](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E8%AE%BF%E5%8D%8E%23) `288.5K 🔥` `-62%`
1. [李冰冰说来生绝不和妹妹一起工作 (Li Bingbing said she would never work with her sister in the next life)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%86%B0%E5%86%B0%E8%AF%B4%E6%9D%A5%E7%94%9F%E7%BB%9D%E4%B8%8D%E5%92%8C%E5%A6%B9%E5%A6%B9%E4%B8%80%E8%B5%B7%E5%B7%A5%E4%BD%9C%23) `209.5K 🔥` `-52%`

Updated at 2026-05-19 17:57:10

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
