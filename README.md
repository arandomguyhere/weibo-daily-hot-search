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

1. [国考](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%80%83%23) `1.2M 🔥` `NEW`
1. [南拳妈妈成员帕劳潜水遭水下袭击](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%8B%B3%E5%A6%88%E5%A6%88%E6%88%90%E5%91%98%E5%B8%95%E5%8A%B3%E6%BD%9C%E6%B0%B4%E9%81%AD%E6%B0%B4%E4%B8%8B%E8%A2%AD%E5%87%BB%23) `953.8K 🔥` `NEW`
1. [红星照耀中国](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%98%9F%E7%85%A7%E8%80%80%E4%B8%AD%E5%9B%BD%23) `673.6K 🔥` `NEW`
1. [韩路谈尊界V800制动踏板检测结果](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E8%B7%AF%E8%B0%88%E5%B0%8A%E7%95%8CV800%E5%88%B6%E5%8A%A8%E8%B8%8F%E6%9D%BF%E6%A3%80%E6%B5%8B%E7%BB%93%E6%9E%9C%23) `599.9K 🔥` `NEW`
1. [夫妻点一杯58元咖啡只能一人落座](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E7%82%B9%E4%B8%80%E6%9D%AF58%E5%85%83%E5%92%96%E5%95%A1%E5%8F%AA%E8%83%BD%E4%B8%80%E4%BA%BA%E8%90%BD%E5%BA%A7%23) `427.3K 🔥` `NEW`
1. [尊界V800公布制动踏板第三方检测结果](https://s.weibo.com/weibo?q=%23%E5%B0%8A%E7%95%8CV800%E5%85%AC%E5%B8%83%E5%88%B6%E5%8A%A8%E8%B8%8F%E6%9D%BF%E7%AC%AC%E4%B8%89%E6%96%B9%E6%A3%80%E6%B5%8B%E7%BB%93%E6%9E%9C%23) `415.0K 🔥` `NEW`
1. [尊界踏板检测未出现裂纹和损坏](https://s.weibo.com/weibo?q=%23%E5%B0%8A%E7%95%8C%E8%B8%8F%E6%9D%BF%E6%A3%80%E6%B5%8B%E6%9C%AA%E5%87%BA%E7%8E%B0%E8%A3%82%E7%BA%B9%E5%92%8C%E6%8D%9F%E5%9D%8F%23) `380.6K 🔥` `NEW`
1. [理记被禁止关注了](https://s.weibo.com/weibo?q=%23%E7%90%86%E8%AE%B0%E8%A2%AB%E7%A6%81%E6%AD%A2%E5%85%B3%E6%B3%A8%E4%BA%86%23) `362.1K 🔥` `NEW`
1. [央视批藏手机神器太无底线](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%89%B9%E8%97%8F%E6%89%8B%E6%9C%BA%E7%A5%9E%E5%99%A8%E5%A4%AA%E6%97%A0%E5%BA%95%E7%BA%BF%23) `362.0K 🔥` `NEW`
1. [曝aijing父母是老赖](https://s.weibo.com/weibo?q=%23%E6%9B%9Daijing%E7%88%B6%E6%AF%8D%E6%98%AF%E8%80%81%E8%B5%96%23) `361.2K 🔥` `NEW`
1. [陈赫直播怼鹿晗](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E7%9B%B4%E6%92%AD%E6%80%BC%E9%B9%BF%E6%99%97%23) `361.0K 🔥` `NEW`
1. [李佳琦持续掉粉](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BD%B3%E7%90%A6%E6%8C%81%E7%BB%AD%E6%8E%89%E7%B2%89%23) `360.6K 🔥` `NEW`
1. [领克10翻下百米悬崖车主仅轻伤](https://s.weibo.com/weibo?q=%23%E9%A2%86%E5%85%8B10%E7%BF%BB%E4%B8%8B%E7%99%BE%E7%B1%B3%E6%82%AC%E5%B4%96%E8%BD%A6%E4%B8%BB%E4%BB%85%E8%BD%BB%E4%BC%A4%23) `360.3K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `360.0K 🔥` `NEW`
1. [aijing妈妈报警](https://s.weibo.com/weibo?q=%23aijing%E5%A6%88%E5%A6%88%E6%8A%A5%E8%AD%A6%23) `359.7K 🔥` `NEW`
1. [央视官宣成毅](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E5%AE%98%E5%AE%A3%E6%88%90%E6%AF%85%23) `359.4K 🔥` `NEW`
1. [中国网友杀伐果断在巴西火了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%BD%91%E5%8F%8B%E6%9D%80%E4%BC%90%E6%9E%9C%E6%96%AD%E5%9C%A8%E5%B7%B4%E8%A5%BF%E7%81%AB%E4%BA%86%23) `359.1K 🔥` `NEW`
1. [李善宝 捏到一只咩咩](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%96%84%E5%AE%9D%20%E6%8D%8F%E5%88%B0%E4%B8%80%E5%8F%AA%E5%92%A9%E5%92%A9%23) `358.8K 🔥` `NEW`
1. [董卿与丈夫密春雷国庆现身美术馆](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%8D%BF%E4%B8%8E%E4%B8%88%E5%A4%AB%E5%AF%86%E6%98%A5%E9%9B%B7%E5%9B%BD%E5%BA%86%E7%8E%B0%E8%BA%AB%E7%BE%8E%E6%9C%AF%E9%A6%86%23) `336.0K 🔥` `NEW`
1. [尊界车主已收到第三方报告推送](https://s.weibo.com/weibo?q=%23%E5%B0%8A%E7%95%8C%E8%BD%A6%E4%B8%BB%E5%B7%B2%E6%94%B6%E5%88%B0%E7%AC%AC%E4%B8%89%E6%96%B9%E6%8A%A5%E5%91%8A%E6%8E%A8%E9%80%81%23) `329.4K 🔥` `NEW`
1. [孙颖莎与海尔国民组合有多适配](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E4%B8%8E%E6%B5%B7%E5%B0%94%E5%9B%BD%E6%B0%91%E7%BB%84%E5%90%88%E6%9C%89%E5%A4%9A%E9%80%82%E9%85%8D%23) `320.1K 🔥` `NEW`
1. [宋茜面试韩国娱乐公司的时候](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E8%8C%9C%E9%9D%A2%E8%AF%95%E9%9F%A9%E5%9B%BD%E5%A8%B1%E4%B9%90%E5%85%AC%E5%8F%B8%E7%9A%84%E6%97%B6%E5%80%99%23) `314.2K 🔥` `NEW`
1. [周云杰欢迎孙颖莎](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%BA%91%E6%9D%B0%E6%AC%A2%E8%BF%8E%E5%AD%99%E9%A2%96%E8%8E%8E%23) `308.3K 🔥` `NEW`
1. [C罗和马宁交涉](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%92%8C%E9%A9%AC%E5%AE%81%E4%BA%A4%E6%B6%89%23) `285.9K 🔥` `NEW`
1. [绝命毒师老白儿子演员去世](https://s.weibo.com/weibo?q=%23%E7%BB%9D%E5%91%BD%E6%AF%92%E5%B8%88%E8%80%81%E7%99%BD%E5%84%BF%E5%AD%90%E6%BC%94%E5%91%98%E5%8E%BB%E4%B8%96%23) `260.2K 🔥` `NEW`
1. [冯禧总是被打岔也没有被打乱节奏](https://s.weibo.com/weibo?q=%23%E5%86%AF%E7%A6%A7%E6%80%BB%E6%98%AF%E8%A2%AB%E6%89%93%E5%B2%94%E4%B9%9F%E6%B2%A1%E6%9C%89%E8%A2%AB%E6%89%93%E4%B9%B1%E8%8A%82%E5%A5%8F%23) `239.1K 🔥` `NEW`
1. [尊界委托中国汽研进行第三方检测](https://s.weibo.com/weibo?q=%23%E5%B0%8A%E7%95%8C%E5%A7%94%E6%89%98%E4%B8%AD%E5%9B%BD%E6%B1%BD%E7%A0%94%E8%BF%9B%E8%A1%8C%E7%AC%AC%E4%B8%89%E6%96%B9%E6%A3%80%E6%B5%8B%23) `239.0K 🔥` `NEW`
1. [网传大学生在东南亚黑市报价](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%9C%A8%E4%B8%9C%E5%8D%97%E4%BA%9A%E9%BB%91%E5%B8%82%E6%8A%A5%E4%BB%B7%23) `239.0K 🔥` `NEW`
1. [现在看陈小纭于小彤这段还是会很窒息](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9C%8B%E9%99%88%E5%B0%8F%E7%BA%AD%E4%BA%8E%E5%B0%8F%E5%BD%A4%E8%BF%99%E6%AE%B5%E8%BF%98%E6%98%AF%E4%BC%9A%E5%BE%88%E7%AA%92%E6%81%AF%23) `238.9K 🔥` `NEW`
1. [周深音乐缘计划3首次录制](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E9%9F%B3%E4%B9%90%E7%BC%98%E8%AE%A1%E5%88%923%E9%A6%96%E6%AC%A1%E5%BD%95%E5%88%B6%23) `237.0K 🔥` `NEW`
1. [2027年度国考计划招录3.57万人](https://s.weibo.com/weibo?q=%232027%E5%B9%B4%E5%BA%A6%E5%9B%BD%E8%80%83%E8%AE%A1%E5%88%92%E6%8B%9B%E5%BD%953.57%E4%B8%87%E4%BA%BA%23) `220.7K 🔥` `NEW`
1. [2027国考明天开始报名](https://s.weibo.com/weibo?q=%232027%E5%9B%BD%E8%80%83%E6%98%8E%E5%A4%A9%E5%BC%80%E5%A7%8B%E6%8A%A5%E5%90%8D%23) `217.8K 🔥` `NEW`
1. [女子35楼坠落苏醒后选择性失忆](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%9035%E6%A5%BC%E5%9D%A0%E8%90%BD%E8%8B%8F%E9%86%92%E5%90%8E%E9%80%89%E6%8B%A9%E6%80%A7%E5%A4%B1%E5%BF%86%23) `199.4K 🔥` `NEW`
1. [付费进天眼核心区需彻查监管漏洞](https://s.weibo.com/weibo?q=%23%E4%BB%98%E8%B4%B9%E8%BF%9B%E5%A4%A9%E7%9C%BC%E6%A0%B8%E5%BF%83%E5%8C%BA%E9%9C%80%E5%BD%BB%E6%9F%A5%E7%9B%91%E7%AE%A1%E6%BC%8F%E6%B4%9E%23) `198.7K 🔥` `NEW`
1. [莫兰特回应杨瀚森13分4板4助](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E5%85%B0%E7%89%B9%E5%9B%9E%E5%BA%94%E6%9D%A8%E7%80%9A%E6%A3%AE13%E5%88%864%E6%9D%BF4%E5%8A%A9%23) `198.2K 🔥` `NEW`
1. [美人余卢蕙又看见前夫出轨了](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BA%BA%E4%BD%99%E5%8D%A2%E8%95%99%E5%8F%88%E7%9C%8B%E8%A7%81%E5%89%8D%E5%A4%AB%E5%87%BA%E8%BD%A8%E4%BA%86%23) `180.5K 🔥` `NEW`
1. [法国青年马库斯称在东京遭攻击](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E9%9D%92%E5%B9%B4%E9%A9%AC%E5%BA%93%E6%96%AF%E7%A7%B0%E5%9C%A8%E4%B8%9C%E4%BA%AC%E9%81%AD%E6%94%BB%E5%87%BB%23) `175.0K 🔥` `NEW`
1. [音乐缘计划3首录阵容](https://s.weibo.com/weibo?q=%23%E9%9F%B3%E4%B9%90%E7%BC%98%E8%AE%A1%E5%88%923%E9%A6%96%E5%BD%95%E9%98%B5%E5%AE%B9%23) `174.2K 🔥` `NEW`
1. [百日宴海报疑写爸爸妈妈在一起1314天](https://s.weibo.com/weibo?q=%23%E7%99%BE%E6%97%A5%E5%AE%B4%E6%B5%B7%E6%8A%A5%E7%96%91%E5%86%99%E7%88%B8%E7%88%B8%E5%A6%88%E5%A6%88%E5%9C%A8%E4%B8%80%E8%B5%B71314%E5%A4%A9%23) `173.0K 🔥` `NEW`
1. [内蒙古呼伦贝尔发布鼠疫风险提示](https://s.weibo.com/weibo?q=%23%E5%86%85%E8%92%99%E5%8F%A4%E5%91%BC%E4%BC%A6%E8%B4%9D%E5%B0%94%E5%8F%91%E5%B8%83%E9%BC%A0%E7%96%AB%E9%A3%8E%E9%99%A9%E6%8F%90%E7%A4%BA%23) `159.0K 🔥` `NEW`
1. [徐良自曝以为被小三结果自己是小三](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%AF%E8%87%AA%E6%9B%9D%E4%BB%A5%E4%B8%BA%E8%A2%AB%E5%B0%8F%E4%B8%89%E7%BB%93%E6%9E%9C%E8%87%AA%E5%B7%B1%E6%98%AF%E5%B0%8F%E4%B8%89%23) `157.9K 🔥` `NEW`
1. [2025全球新生儿中国第二](https://s.weibo.com/weibo?q=%232025%E5%85%A8%E7%90%83%E6%96%B0%E7%94%9F%E5%84%BF%E4%B8%AD%E5%9B%BD%E7%AC%AC%E4%BA%8C%23) `157.3K 🔥` `NEW`
1. [人写不出自己没有经历过的事情](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%86%99%E4%B8%8D%E5%87%BA%E8%87%AA%E5%B7%B1%E6%B2%A1%E6%9C%89%E7%BB%8F%E5%8E%86%E8%BF%87%E7%9A%84%E4%BA%8B%E6%83%85%23) `157.1K 🔥` `NEW`
1. [备婚女生因三金折现和父母争吵](https://s.weibo.com/weibo?q=%23%E5%A4%87%E5%A9%9A%E5%A5%B3%E7%94%9F%E5%9B%A0%E4%B8%89%E9%87%91%E6%8A%98%E7%8E%B0%E5%92%8C%E7%88%B6%E6%AF%8D%E4%BA%89%E5%90%B5%23) `326.9K 🔥` `+267%`
1. [谭松韵计划27岁结婚30岁前生娃](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E8%AE%A1%E5%88%9227%E5%B2%81%E7%BB%93%E5%A9%9A30%E5%B2%81%E5%89%8D%E7%94%9F%E5%A8%83%23) `309.6K 🔥` `+248%`
1. [霸王茶姬加盟商发声](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E5%8A%A0%E7%9B%9F%E5%95%86%E5%8F%91%E5%A3%B0%23) `238.9K 🔥` `+165%`
1. [性格好的人根本不觉得被惹](https://s.weibo.com/weibo?q=%23%E6%80%A7%E6%A0%BC%E5%A5%BD%E7%9A%84%E4%BA%BA%E6%A0%B9%E6%9C%AC%E4%B8%8D%E8%A7%89%E5%BE%97%E8%A2%AB%E6%83%B9%23) `213.9K 🔥` `+198%`
1. [陈小纭已经是完全认不出的程度了](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%8F%E7%BA%AD%E5%B7%B2%E7%BB%8F%E6%98%AF%E5%AE%8C%E5%85%A8%E8%AE%A4%E4%B8%8D%E5%87%BA%E7%9A%84%E7%A8%8B%E5%BA%A6%E4%BA%86%23) `174.1K 🔥` `+50%`

Updated at 2026-10-13 11:24:45

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
