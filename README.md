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

1. [阅文IP盛典 (China Literature IP Festival)](https://s.weibo.com/weibo?q=%23%E9%98%85%E6%96%87IP%E7%9B%9B%E5%85%B8%23) `443.9K 🔥` `NEW`
1. [鞠婧祎巅峰之夜造型](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%B7%85%E5%B3%B0%E4%B9%8B%E5%A4%9C%E9%80%A0%E5%9E%8B%23) `177.3K 🔥` `NEW`
1. [李昌钰去世知情人发声](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%8C%E9%92%B0%E5%8E%BB%E4%B8%96%E7%9F%A5%E6%83%85%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `174.5K 🔥` `NEW`
1. [315曝光问题地方政府负责人被约谈](https://s.weibo.com/weibo?q=%23315%E6%9B%9D%E5%85%89%E9%97%AE%E9%A2%98%E5%9C%B0%E6%96%B9%E6%94%BF%E5%BA%9C%E8%B4%9F%E8%B4%A3%E4%BA%BA%E8%A2%AB%E7%BA%A6%E8%B0%88%23) `127.0K 🔥` `NEW`
1. [幼儿园自理比赛女孩靠佛系速度获胜](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E5%84%BF%E5%9B%AD%E8%87%AA%E7%90%86%E6%AF%94%E8%B5%9B%E5%A5%B3%E5%AD%A9%E9%9D%A0%E4%BD%9B%E7%B3%BB%E9%80%9F%E5%BA%A6%E8%8E%B7%E8%83%9C%23) `94.9K 🔥` `NEW`
1. [巅峰之夜全场大喊王俊凯](https://s.weibo.com/weibo?q=%23%E5%B7%85%E5%B3%B0%E4%B9%8B%E5%A4%9C%E5%85%A8%E5%9C%BA%E5%A4%A7%E5%96%8A%E7%8E%8B%E4%BF%8A%E5%87%AF%23) `94.3K 🔥` `NEW`
1. [穿上春装被误认为是保洁](https://s.weibo.com/weibo?q=%23%E7%A9%BF%E4%B8%8A%E6%98%A5%E8%A3%85%E8%A2%AB%E8%AF%AF%E8%AE%A4%E4%B8%BA%E6%98%AF%E4%BF%9D%E6%B4%81%23) `93.8K 🔥` `NEW`
1. [以军出动50余架战机打击伊朗核设施](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E5%87%BA%E5%8A%A850%E4%BD%99%E6%9E%B6%E6%88%98%E6%9C%BA%E6%89%93%E5%87%BB%E4%BC%8A%E6%9C%97%E6%A0%B8%E8%AE%BE%E6%96%BD%23) `93.8K 🔥` `NEW`
1. [奔跑吧黄蓝大战路透](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E9%BB%84%E8%93%9D%E5%A4%A7%E6%88%98%E8%B7%AF%E9%80%8F%23) `89.1K 🔥` `NEW`
1. [Angelababy梦回贝微微](https://s.weibo.com/weibo?q=%23Angelababy%E6%A2%A6%E5%9B%9E%E8%B4%9D%E5%BE%AE%E5%BE%AE%23) `81.8K 🔥` `NEW`
1. [人民币版冥币不可卖也不要用 (The RMB version of Mingcoin cannot be sold or used.)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E5%B8%81%E7%89%88%E5%86%A5%E5%B8%81%E4%B8%8D%E5%8F%AF%E5%8D%96%E4%B9%9F%E4%B8%8D%E8%A6%81%E7%94%A8%23) `71.5K 🔥` `NEW`
1. [挑战用200元起五个口播账号](https://s.weibo.com/weibo?q=%23%E6%8C%91%E6%88%98%E7%94%A8200%E5%85%83%E8%B5%B7%E4%BA%94%E4%B8%AA%E5%8F%A3%E6%92%AD%E8%B4%A6%E5%8F%B7%23) `68.5K 🔥` `NEW`
1. [女子断碳水2月确诊糖尿病前期 (Woman cuts carbs and is diagnosed with prediabetes in February)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%96%AD%E7%A2%B3%E6%B0%B42%E6%9C%88%E7%A1%AE%E8%AF%8A%E7%B3%96%E5%B0%BF%E7%97%85%E5%89%8D%E6%9C%9F%23) `1.0M 🔥` `+31%`
1. [美国最强导弹击落了美国最强战机](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%9C%80%E5%BC%BA%E5%AF%BC%E5%BC%B9%E5%87%BB%E8%90%BD%E4%BA%86%E7%BE%8E%E5%9B%BD%E6%9C%80%E5%BC%BA%E6%88%98%E6%9C%BA%23) `744.1K 🔥` `+476%`
1. [男生杀害15岁女孩后借讨水试探老人](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E6%9D%80%E5%AE%B315%E5%B2%81%E5%A5%B3%E5%AD%A9%E5%90%8E%E5%80%9F%E8%AE%A8%E6%B0%B4%E8%AF%95%E6%8E%A2%E8%80%81%E4%BA%BA%23) `516.1K 🔥` `+240%`
1. [40岁心梗幸存者已辞职回农村静养 (40-year-old myocardial infarction survivor has resigned and returned to the countryside to rest)](https://s.weibo.com/weibo?q=%2340%E5%B2%81%E5%BF%83%E6%A2%97%E5%B9%B8%E5%AD%98%E8%80%85%E5%B7%B2%E8%BE%9E%E8%81%8C%E5%9B%9E%E5%86%9C%E6%9D%91%E9%9D%99%E5%85%BB%23) `354.1K 🔥` `+79%`
1. [奔跑吧直播](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E7%9B%B4%E6%92%AD%23) `310.6K 🔥` `+75%`
1. [俄罗斯4月1日起禁止汽油出口](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF4%E6%9C%881%E6%97%A5%E8%B5%B7%E7%A6%81%E6%AD%A2%E6%B1%BD%E6%B2%B9%E5%87%BA%E5%8F%A3%23) `306.1K 🔥` `+62%`
1. [一念江南](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%23) `304.2K 🔥` `+65%`
1. [建议一次请假请一天](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%B8%80%E6%AC%A1%E8%AF%B7%E5%81%87%E8%AF%B7%E4%B8%80%E5%A4%A9%23) `300.0K 🔥` `+73%`
1. [单依纯演唱会](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E6%BC%94%E5%94%B1%E4%BC%9A%23) `211.9K 🔥` `+67%`
1. [JDG对战AG](https://s.weibo.com/weibo?q=%23JDG%E5%AF%B9%E6%88%98AG%23) `185.2K 🔥` `+67%`
1. [正能量创作者大会 (Positive Energy Creator Conference)](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E8%83%BD%E9%87%8F%E5%88%9B%E4%BD%9C%E8%80%85%E5%A4%A7%E4%BC%9A%23) `625.5K 🔥`
1. [菲律宾最新涉台表态 (Philippines’ latest stance on Taiwan)](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%BE%8B%E5%AE%BE%E6%9C%80%E6%96%B0%E6%B6%89%E5%8F%B0%E8%A1%A8%E6%80%81%23) `550.9K 🔥`
1. [夏之光被妈妈拉黑真相巨戳心 (The truth about Xia Zhiguang being blocked by her mother is heartbreaking)](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E4%B9%8B%E5%85%89%E8%A2%AB%E5%A6%88%E5%A6%88%E6%8B%89%E9%BB%91%E7%9C%9F%E7%9B%B8%E5%B7%A8%E6%88%B3%E5%BF%83%23) `494.0K 🔥`
1. [奔跑吧](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%23) `423.5K 🔥`
1. [白日提灯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `201.7K 🔥`
1. [阚清子想从116斤瘦到90斤](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E6%83%B3%E4%BB%8E116%E6%96%A4%E7%98%A6%E5%88%B090%E6%96%A4%23) `179.8K 🔥`
1. [陈牧驰陈冰结婚生子](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%89%A7%E9%A9%B0%E9%99%88%E5%86%B0%E7%BB%93%E5%A9%9A%E7%94%9F%E5%AD%90%23) `167.3K 🔥`
1. [粉底液将军 高跟鞋女战士 (Liquid foundation general high heels female warrior)](https://s.weibo.com/weibo?q=%23%E7%B2%89%E5%BA%95%E6%B6%B2%E5%B0%86%E5%86%9B%20%E9%AB%98%E8%B7%9F%E9%9E%8B%E5%A5%B3%E6%88%98%E5%A3%AB%23) `158.6K 🔥`
1. [白日提灯直播 (Lantern live broadcast during the day)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E7%9B%B4%E6%92%AD%23) `154.1K 🔥`
1. [年仅21岁牺牲母亲跨400公里扫墓](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E4%BB%8521%E5%B2%81%E7%89%BA%E7%89%B2%E6%AF%8D%E4%BA%B2%E8%B7%A8400%E5%85%AC%E9%87%8C%E6%89%AB%E5%A2%93%23) `135.2K 🔥`
1. [王俊凯工作室出图](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%87%BA%E5%9B%BE%23) `125.2K 🔥`
1. [QQ音乐巅峰之夜红毯](https://s.weibo.com/weibo?q=%23QQ%E9%9F%B3%E4%B9%90%E5%B7%85%E5%B3%B0%E4%B9%8B%E5%A4%9C%E7%BA%A2%E6%AF%AF%23) `123.7K 🔥`
1. [全红婵19岁气场全开 (Quan Hongchan is full of energy at the age of 19)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B519%E5%B2%81%E6%B0%94%E5%9C%BA%E5%85%A8%E5%BC%80%23) `93.7K 🔥`
1. [粉底液将军被嘲不该仅演员承担 (The foundation liquid general was ridiculed and it’s not just the actors who should bear the responsibility)](https://s.weibo.com/weibo?q=%23%E7%B2%89%E5%BA%95%E6%B6%B2%E5%B0%86%E5%86%9B%E8%A2%AB%E5%98%B2%E4%B8%8D%E8%AF%A5%E4%BB%85%E6%BC%94%E5%91%98%E6%89%BF%E6%8B%85%23) `91.9K 🔥`
1. [宋威龙签约天浩盛世 (Song Weilong signed a contract with Tianhao Shengshi)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E7%AD%BE%E7%BA%A6%E5%A4%A9%E6%B5%A9%E7%9B%9B%E4%B8%96%23) `90.4K 🔥`
1. [这7种食物不甜却能让你血糖飙升](https://s.weibo.com/weibo?q=%23%E8%BF%997%E7%A7%8D%E9%A3%9F%E7%89%A9%E4%B8%8D%E7%94%9C%E5%8D%B4%E8%83%BD%E8%AE%A9%E4%BD%A0%E8%A1%80%E7%B3%96%E9%A3%99%E5%8D%87%23) `87.9K 🔥`
1. [谢楠上浪姐像极了要交卷的我](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E6%A5%A0%E4%B8%8A%E6%B5%AA%E5%A7%90%E5%83%8F%E6%9E%81%E4%BA%86%E8%A6%81%E4%BA%A4%E5%8D%B7%E7%9A%84%E6%88%91%23) `87.0K 🔥`
1. [TF四代二班见面会 (TF fourth generation second class meeting)](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E4%BA%8C%E7%8F%AD%E8%A7%81%E9%9D%A2%E4%BC%9A%23) `86.1K 🔥`
1. [张凌赫体脂曾低到10 (Zhang Linghe's body fat was once as low as 10)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%BD%93%E8%84%82%E6%9B%BE%E4%BD%8E%E5%88%B010%23) `70.5K 🔥`
1. [原来淋巴肉这么好区分 (It turns out that lymphatic meat is so easy to distinguish)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%B7%8B%E5%B7%B4%E8%82%89%E8%BF%99%E4%B9%88%E5%A5%BD%E5%8C%BA%E5%88%86%23) `350.5K 🔥` `-27%`
1. [李昌钰母亲把13个子女培养成博士](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%8C%E9%92%B0%E6%AF%8D%E4%BA%B2%E6%8A%8A13%E4%B8%AA%E5%AD%90%E5%A5%B3%E5%9F%B9%E5%85%BB%E6%88%90%E5%8D%9A%E5%A3%AB%23) `311.3K 🔥` `-71%`
1. [金价急速飙涨](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%80%A5%E9%80%9F%E9%A3%99%E6%B6%A8%23) `160.3K 🔥` `-69%`
1. [青菜焦虑症](https://s.weibo.com/weibo?q=%23%E9%9D%92%E8%8F%9C%E7%84%A6%E8%99%91%E7%97%87%23) `95.3K 🔥` `-42%`
1. [白日提灯热度](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E7%83%AD%E5%BA%A6%23) `95.0K 🔥` `-33%`
1. [徐良删除汪苏泷后会无期作词作曲](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%AF%E5%88%A0%E9%99%A4%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%90%8E%E4%BC%9A%E6%97%A0%E6%9C%9F%E4%BD%9C%E8%AF%8D%E4%BD%9C%E6%9B%B2%23) `94.5K 🔥` `-43%`
1. [升糖刺客](https://s.weibo.com/weibo?q=%23%E5%8D%87%E7%B3%96%E5%88%BA%E5%AE%A2%23) `92.5K 🔥` `-22%`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `85.4K 🔥` `-39%`
1. [迪丽热巴好六的22个爱人](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%A5%BD%E5%85%AD%E7%9A%8422%E4%B8%AA%E7%88%B1%E4%BA%BA%23) `85.2K 🔥` `-27%`
1. [终于懂大学面积小的含金量了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%87%82%E5%A4%A7%E5%AD%A6%E9%9D%A2%E7%A7%AF%E5%B0%8F%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E4%BA%86%23) `68.7K 🔥` `-51%`

Updated at 2026-03-28 19:38:01

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
