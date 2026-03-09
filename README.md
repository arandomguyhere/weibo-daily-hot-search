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

1. [云合 (Yunhe)](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%90%88%23) `597.6K 🔥` `NEW`
1. [镖人升至全球武侠片票房亚军](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E5%8D%87%E8%87%B3%E5%85%A8%E7%90%83%E6%AD%A6%E4%BE%A0%E7%89%87%E7%A5%A8%E6%88%BF%E4%BA%9A%E5%86%9B%23) `597.5K 🔥` `NEW`
1. [品质盛典红毯上新了](https://s.weibo.com/weibo?q=%23%E5%93%81%E8%B4%A8%E7%9B%9B%E5%85%B8%E7%BA%A2%E6%AF%AF%E4%B8%8A%E6%96%B0%E4%BA%86%23) `596.3K 🔥` `NEW`
1. [农业农村部部长建议大家少吃点油](https://s.weibo.com/weibo?q=%23%E5%86%9C%E4%B8%9A%E5%86%9C%E6%9D%91%E9%83%A8%E9%83%A8%E9%95%BF%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%B0%91%E5%90%83%E7%82%B9%E6%B2%B9%23) `595.1K 🔥` `NEW`
1. [逐玉 肥肠面](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E8%82%A5%E8%82%A0%E9%9D%A2%23) `591.5K 🔥` `NEW`
1. [江西一村老人满100岁发10万](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%A5%BF%E4%B8%80%E6%9D%91%E8%80%81%E4%BA%BA%E6%BB%A1100%E5%B2%81%E5%8F%9110%E4%B8%87%23) `587.3K 🔥` `NEW`
1. [建议允许护士给患者开药](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%85%81%E8%AE%B8%E6%8A%A4%E5%A3%AB%E7%BB%99%E6%82%A3%E8%80%85%E5%BC%80%E8%8D%AF%23) `586.2K 🔥` `NEW`
1. [大一到大四宿舍资产对比](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%B8%80%E5%88%B0%E5%A4%A7%E5%9B%9B%E5%AE%BF%E8%88%8D%E8%B5%84%E4%BA%A7%E5%AF%B9%E6%AF%94%23) `585.6K 🔥` `NEW`
1. [我家那小子](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E9%82%A3%E5%B0%8F%E5%AD%90%23) `581.4K 🔥` `NEW`
1. [张婧仪 谁说演员不能看镜头](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%20%E8%B0%81%E8%AF%B4%E6%BC%94%E5%91%98%E4%B8%8D%E8%83%BD%E7%9C%8B%E9%95%9C%E5%A4%B4%23) `578.9K 🔥` `NEW`
1. [伊朗驻华大使回应霍尔木兹海峡问题 (Iranian Ambassador to China Responds to Strait of Hormuz Issue)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%A9%BB%E5%8D%8E%E5%A4%A7%E4%BD%BF%E5%9B%9E%E5%BA%94%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E9%97%AE%E9%A2%98%23) `578.7K 🔥` `NEW`
1. [舍友睡了vs舍友醒了](https://s.weibo.com/weibo?q=%23%E8%88%8D%E5%8F%8B%E7%9D%A1%E4%BA%86vs%E8%88%8D%E5%8F%8B%E9%86%92%E4%BA%86%23) `576.4K 🔥` `NEW`
1. [刘亦菲抵达巴黎看秀](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E6%8A%B5%E8%BE%BE%E5%B7%B4%E9%BB%8E%E7%9C%8B%E7%A7%80%23) `575.5K 🔥` `NEW`
1. [林书豪爆科比私下性格](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%B9%A6%E8%B1%AA%E7%88%86%E7%A7%91%E6%AF%94%E7%A7%81%E4%B8%8B%E6%80%A7%E6%A0%BC%23) `572.8K 🔥` `NEW`
1. [电竞是钎城全部的青春](https://s.weibo.com/weibo?q=%23%E7%94%B5%E7%AB%9E%E6%98%AF%E9%92%8E%E5%9F%8E%E5%85%A8%E9%83%A8%E7%9A%84%E9%9D%92%E6%98%A5%23) `571.5K 🔥` `NEW`
1. [白鹿出场动画](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%87%BA%E5%9C%BA%E5%8A%A8%E7%94%BB%23) `570.0K 🔥` `NEW`
1. [妈妈在被子上缝了一道线](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%9C%A8%E8%A2%AB%E5%AD%90%E4%B8%8A%E7%BC%9D%E4%BA%86%E4%B8%80%E9%81%93%E7%BA%BF%23) `568.7K 🔥` `NEW`
1. [白鹿说自己最好的朋友是工作人员](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%AF%B4%E8%87%AA%E5%B7%B1%E6%9C%80%E5%A5%BD%E7%9A%84%E6%9C%8B%E5%8F%8B%E6%98%AF%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%23) `567.9K 🔥` `NEW`
1. [小米很快会推出L3L4驾驶](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%BE%88%E5%BF%AB%E4%BC%9A%E6%8E%A8%E5%87%BAL3L4%E9%A9%BE%E9%A9%B6%23) `566.0K 🔥` `NEW`
1. [中国女足vs朝鲜女足](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E8%B6%B3vs%E6%9C%9D%E9%B2%9C%E5%A5%B3%E8%B6%B3%23) `565.4K 🔥` `NEW`
1. [NBA常规赛 (NBA regular season)](https://s.weibo.com/weibo?q=%23NBA%E5%B8%B8%E8%A7%84%E8%B5%9B%23) `565.1K 🔥` `NEW`
1. [美被迫中止军事行动的可能性上升](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%A2%AB%E8%BF%AB%E4%B8%AD%E6%AD%A2%E5%86%9B%E4%BA%8B%E8%A1%8C%E5%8A%A8%E7%9A%84%E5%8F%AF%E8%83%BD%E6%80%A7%E4%B8%8A%E5%8D%87%23) `596.4K 🔥` `+345%`
1. [霍启刚希望有湾超湾BA](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%90%AF%E5%88%9A%E5%B8%8C%E6%9C%9B%E6%9C%89%E6%B9%BE%E8%B6%85%E6%B9%BEBA%23) `595.7K 🔥` `+278%`
1. [电视剧品质盛典 (TV Series Quality Ceremony)](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%A7%86%E5%89%A7%E5%93%81%E8%B4%A8%E7%9B%9B%E5%85%B8%23) `594.1K 🔥` `+95%`
1. [Uzi杯官宣](https://s.weibo.com/weibo?q=%23Uzi%E6%9D%AF%E5%AE%98%E5%AE%A3%23) `593.6K 🔥` `+95%`
1. [张凯丽说天价彩礼不应归咎于女性](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%AF%E4%B8%BD%E8%AF%B4%E5%A4%A9%E4%BB%B7%E5%BD%A9%E7%A4%BC%E4%B8%8D%E5%BA%94%E5%BD%92%E5%92%8E%E4%BA%8E%E5%A5%B3%E6%80%A7%23) `593.2K 🔥` `+97%`
1. [离职的红利终于让我吃上了](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E8%81%8C%E7%9A%84%E7%BA%A2%E5%88%A9%E7%BB%88%E4%BA%8E%E8%AE%A9%E6%88%91%E5%90%83%E4%B8%8A%E4%BA%86%23) `592.5K 🔥` `+98%`
1. [48岁中国女博导在埃及突然去世](https://s.weibo.com/weibo?q=%2348%E5%B2%81%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%8D%9A%E5%AF%BC%E5%9C%A8%E5%9F%83%E5%8F%8A%E7%AA%81%E7%84%B6%E5%8E%BB%E4%B8%96%23) `590.9K 🔥` `+97%`
1. [伊朗总统提醒邻国别被美以欺骗](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E6%8F%90%E9%86%92%E9%82%BB%E5%9B%BD%E5%88%AB%E8%A2%AB%E7%BE%8E%E4%BB%A5%E6%AC%BA%E9%AA%97%23) `589.9K 🔥` `+182%`
1. [田曦薇张凌赫 仇二代](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%BC%A0%E5%87%8C%E8%B5%AB%20%E4%BB%87%E4%BA%8C%E4%BB%A3%23) `589.4K 🔥` `+96%`
1. [周深发了194个啊](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E5%8F%91%E4%BA%86194%E4%B8%AA%E5%95%8A%23) `588.3K 🔥` `+209%`
1. [AI焦虑症 (AI anxiety disorder)](https://s.weibo.com/weibo?q=%23AI%E7%84%A6%E8%99%91%E7%97%87%23) `587.5K 🔥` `+341%`
1. [终于有人把相亲的感受说清楚了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%9C%89%E4%BA%BA%E6%8A%8A%E7%9B%B8%E4%BA%B2%E7%9A%84%E6%84%9F%E5%8F%97%E8%AF%B4%E6%B8%85%E6%A5%9A%E4%BA%86%23) `585.2K 🔥` `+215%`
1. [田曦薇新剧中杀的是金华两头乌 (Tian Xiwei’s new drama kills Jinhua Two-headed Crow)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%96%B0%E5%89%A7%E4%B8%AD%E6%9D%80%E7%9A%84%E6%98%AF%E9%87%91%E5%8D%8E%E4%B8%A4%E5%A4%B4%E4%B9%8C%23) `584.0K 🔥` `+214%`
1. [单依纯卖霉豆腐了](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E5%8D%96%E9%9C%89%E8%B1%86%E8%85%90%E4%BA%86%23) `583.8K 🔥` `+339%`
1. [华为Mate80销量国产第一 (Huawei Mate80 ranks first in domestic sales)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAMate80%E9%94%80%E9%87%8F%E5%9B%BD%E4%BA%A7%E7%AC%AC%E4%B8%80%23) `582.5K 🔥` `+92%`
1. [逐玉弹幕 恶语伤牛心](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%BC%B9%E5%B9%95%20%E6%81%B6%E8%AF%AD%E4%BC%A4%E7%89%9B%E5%BF%83%23) `582.2K 🔥` `+163%`
1. [伊朗驻华大使回应哈梅内伊之子当选](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%A9%BB%E5%8D%8E%E5%A4%A7%E4%BD%BF%E5%9B%9E%E5%BA%94%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E4%B9%8B%E5%AD%90%E5%BD%93%E9%80%89%23) `580.8K 🔥` `+203%`
1. [孙千发了和王安宇合照](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E5%8F%91%E4%BA%86%E5%92%8C%E7%8E%8B%E5%AE%89%E5%AE%87%E5%90%88%E7%85%A7%23) `580.2K 🔥` `+261%`
1. [岳雨婷去巴黎 带戏服](https://s.weibo.com/weibo?q=%23%E5%B2%B3%E9%9B%A8%E5%A9%B7%E5%8E%BB%E5%B7%B4%E9%BB%8E%20%E5%B8%A6%E6%88%8F%E6%9C%8D%23) `577.8K 🔥` `+279%`
1. [逐玉 (Zhuyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `574.7K 🔥` `+329%`
1. [金价会变但肌肉不会骗你](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E4%BC%9A%E5%8F%98%E4%BD%86%E8%82%8C%E8%82%89%E4%B8%8D%E4%BC%9A%E9%AA%97%E4%BD%A0%23) `574.5K 🔥` `+267%`
1. [胖东来超8成员工拒绝降薪增假 (Over 80% of employees at Fat Dong Lai refused to cut their salary and increase their vacation time)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E8%B6%858%E6%88%90%E5%91%98%E5%B7%A5%E6%8B%92%E7%BB%9D%E9%99%8D%E8%96%AA%E5%A2%9E%E5%81%87%23) `573.9K 🔥` `+203%`
1. [今年修改教师法 (The Teacher Law will be revised this year)](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E4%BF%AE%E6%94%B9%E6%95%99%E5%B8%88%E6%B3%95%23) `572.5K 🔥` `+328%`
1. [曝美不满以袭击伊朗燃料存储设施 (Exposing US dissatisfaction to attack Iranian fuel storage facilities)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%BE%8E%E4%B8%8D%E6%BB%A1%E4%BB%A5%E8%A2%AD%E5%87%BB%E4%BC%8A%E6%9C%97%E7%87%83%E6%96%99%E5%AD%98%E5%82%A8%E8%AE%BE%E6%96%BD%23) `570.7K 🔥` `+211%`
1. [品质盛典红毯直播](https://s.weibo.com/weibo?q=%23%E5%93%81%E8%B4%A8%E7%9B%9B%E5%85%B8%E7%BA%A2%E6%AF%AF%E7%9B%B4%E6%92%AD%23) `569.0K 🔥` `+325%`
1. [高敏感人的共性 (Common traits of highly sensitive people)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E6%95%8F%E6%84%9F%E4%BA%BA%E7%9A%84%E5%85%B1%E6%80%A7%23) `567.3K 🔥` `+325%`
1. [李延贺煽动分裂国家破坏国家统一](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%BB%B6%E8%B4%BA%E7%85%BD%E5%8A%A8%E5%88%86%E8%A3%82%E5%9B%BD%E5%AE%B6%E7%A0%B4%E5%9D%8F%E5%9B%BD%E5%AE%B6%E7%BB%9F%E4%B8%80%23) `1.0M 🔥`
1. [建议将8小时工作制缩短为7小时 (It is recommended to shorten the 8-hour working day to 7 hours)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%B0%868%E5%B0%8F%E6%97%B6%E5%B7%A5%E4%BD%9C%E5%88%B6%E7%BC%A9%E7%9F%AD%E4%B8%BA7%E5%B0%8F%E6%97%B6%23) `770.8K 🔥`
1. [人大报告精华版 (Highlights of the National People's Congress Report)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%A4%A7%E6%8A%A5%E5%91%8A%E7%B2%BE%E5%8D%8E%E7%89%88%23) `598.2K 🔥`

Updated at 2026-03-09 17:09:51

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
