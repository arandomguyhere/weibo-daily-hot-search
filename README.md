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

1. [张凌赫多年前发文抨击影视圈 (Zhang Linghe published an article criticizing the film and television industry many years ago)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%A4%9A%E5%B9%B4%E5%89%8D%E5%8F%91%E6%96%87%E6%8A%A8%E5%87%BB%E5%BD%B1%E8%A7%86%E5%9C%88%23) `127.8K 🔥` `NEW`
1. [伊朗称造成美军据点极其严重伤亡](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E9%80%A0%E6%88%90%E7%BE%8E%E5%86%9B%E6%8D%AE%E7%82%B9%E6%9E%81%E5%85%B6%E4%B8%A5%E9%87%8D%E4%BC%A4%E4%BA%A1%23) `92.2K 🔥` `NEW`
1. [孙俪回应陶昕然](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E5%9B%9E%E5%BA%94%E9%99%B6%E6%98%95%E7%84%B6%23) `87.3K 🔥` `NEW`
1. [陈飞宇终于会用脸了](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%E7%BB%88%E4%BA%8E%E4%BC%9A%E7%94%A8%E8%84%B8%E4%BA%86%23) `85.1K 🔥` `NEW`
1. [伊朗媒体嘲讽美军好莱坞大军](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AA%92%E4%BD%93%E5%98%B2%E8%AE%BD%E7%BE%8E%E5%86%9B%E5%A5%BD%E8%8E%B1%E5%9D%9E%E5%A4%A7%E5%86%9B%23) `84.5K 🔥` `NEW`
1. [1亿元资金被挪用不仅是家贼难防](https://s.weibo.com/weibo?q=%231%E4%BA%BF%E5%85%83%E8%B5%84%E9%87%91%E8%A2%AB%E6%8C%AA%E7%94%A8%E4%B8%8D%E4%BB%85%E6%98%AF%E5%AE%B6%E8%B4%BC%E9%9A%BE%E9%98%B2%23) `71.7K 🔥` `NEW`
1. [舆论要求日政府就闯中国使馆道歉](https://s.weibo.com/weibo?q=%23%E8%88%86%E8%AE%BA%E8%A6%81%E6%B1%82%E6%97%A5%E6%94%BF%E5%BA%9C%E5%B0%B1%E9%97%AF%E4%B8%AD%E5%9B%BD%E4%BD%BF%E9%A6%86%E9%81%93%E6%AD%89%23) `71.6K 🔥` `NEW`
1. [幼儿园自理比赛女孩靠佛系速度获胜](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E5%84%BF%E5%9B%AD%E8%87%AA%E7%90%86%E6%AF%94%E8%B5%9B%E5%A5%B3%E5%AD%A9%E9%9D%A0%E4%BD%9B%E7%B3%BB%E9%80%9F%E5%BA%A6%E8%8E%B7%E8%83%9C%23) `425.7K 🔥` `+349%`
1. [鞠婧祎巅峰之夜造型](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%B7%85%E5%B3%B0%E4%B9%8B%E5%A4%9C%E9%80%A0%E5%9E%8B%23) `352.1K 🔥` `+99%`
1. [穿上春装被误认为是保洁](https://s.weibo.com/weibo?q=%23%E7%A9%BF%E4%B8%8A%E6%98%A5%E8%A3%85%E8%A2%AB%E8%AF%AF%E8%AE%A4%E4%B8%BA%E6%98%AF%E4%BF%9D%E6%B4%81%23) `210.5K 🔥` `+124%`
1. [人民币版冥币不可卖也不要用 (The RMB version of Mingcoin cannot be sold or used.)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E5%B8%81%E7%89%88%E5%86%A5%E5%B8%81%E4%B8%8D%E5%8F%AF%E5%8D%96%E4%B9%9F%E4%B8%8D%E8%A6%81%E7%94%A8%23) `136.7K 🔥` `+91%`
1. [Angelababy梦回贝微微 (Angelababy Meng Huibei Weiwei)](https://s.weibo.com/weibo?q=%23Angelababy%E6%A2%A6%E5%9B%9E%E8%B4%9D%E5%BE%AE%E5%BE%AE%23) `105.3K 🔥` `+29%`
1. [女子断碳水2月确诊糖尿病前期 (Woman cuts carbs and is diagnosed with prediabetes in February)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%96%AD%E7%A2%B3%E6%B0%B42%E6%9C%88%E7%A1%AE%E8%AF%8A%E7%B3%96%E5%B0%BF%E7%97%85%E5%89%8D%E6%9C%9F%23) `1.0M 🔥`
1. [美国最强导弹击落了美国最强战机](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%9C%80%E5%BC%BA%E5%AF%BC%E5%BC%B9%E5%87%BB%E8%90%BD%E4%BA%86%E7%BE%8E%E5%9B%BD%E6%9C%80%E5%BC%BA%E6%88%98%E6%9C%BA%23) `758.1K 🔥`
1. [正能量创作者大会 (Positive Energy Creator Conference)](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E8%83%BD%E9%87%8F%E5%88%9B%E4%BD%9C%E8%80%85%E5%A4%A7%E4%BC%9A%23) `619.0K 🔥`
1. [夏之光被妈妈拉黑真相巨戳心 (The truth about Xia Zhiguang being blocked by her mother is heartbreaking)](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E4%B9%8B%E5%85%89%E8%A2%AB%E5%A6%88%E5%A6%88%E6%8B%89%E9%BB%91%E7%9C%9F%E7%9B%B8%E5%B7%A8%E6%88%B3%E5%BF%83%23) `417.8K 🔥`
1. [李昌钰母亲把13个子女培养成博士](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%8C%E9%92%B0%E6%AF%8D%E4%BA%B2%E6%8A%8A13%E4%B8%AA%E5%AD%90%E5%A5%B3%E5%9F%B9%E5%85%BB%E6%88%90%E5%8D%9A%E5%A3%AB%23) `312.9K 🔥`
1. [JDG对战AG](https://s.weibo.com/weibo?q=%23JDG%E5%AF%B9%E6%88%98AG%23) `213.9K 🔥`
1. [单依纯演唱会](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E6%BC%94%E5%94%B1%E4%BC%9A%23) `212.6K 🔥`
1. [白日提灯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `210.9K 🔥`
1. [阚清子想从116斤瘦到90斤](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E6%83%B3%E4%BB%8E116%E6%96%A4%E7%98%A6%E5%88%B090%E6%96%A4%23) `190.1K 🔥`
1. [陈牧驰陈冰结婚生子](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%89%A7%E9%A9%B0%E9%99%88%E5%86%B0%E7%BB%93%E5%A9%9A%E7%94%9F%E5%AD%90%23) `134.9K 🔥`
1. [金价急速飙涨](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%80%A5%E9%80%9F%E9%A3%99%E6%B6%A8%23) `133.8K 🔥`
1. [粉底液将军 高跟鞋女战士 (Liquid foundation general high heels female warrior)](https://s.weibo.com/weibo?q=%23%E7%B2%89%E5%BA%95%E6%B6%B2%E5%B0%86%E5%86%9B%20%E9%AB%98%E8%B7%9F%E9%9E%8B%E5%A5%B3%E6%88%98%E5%A3%AB%23) `131.0K 🔥`
1. [白日提灯直播 (Lantern live broadcast during the day)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E7%9B%B4%E6%92%AD%23) `130.4K 🔥`
1. [王俊凯工作室出图](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%87%BA%E5%9B%BE%23) `123.0K 🔥`
1. [QQ音乐巅峰之夜红毯 (QQ Music Peak Night Red Carpet)](https://s.weibo.com/weibo?q=%23QQ%E9%9F%B3%E4%B9%90%E5%B7%85%E5%B3%B0%E4%B9%8B%E5%A4%9C%E7%BA%A2%E6%AF%AF%23) `104.3K 🔥`
1. [巅峰之夜全场大喊王俊凯](https://s.weibo.com/weibo?q=%23%E5%B7%85%E5%B3%B0%E4%B9%8B%E5%A4%9C%E5%85%A8%E5%9C%BA%E5%A4%A7%E5%96%8A%E7%8E%8B%E4%BF%8A%E5%87%AF%23) `92.7K 🔥`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `91.6K 🔥`
1. [全红婵19岁气场全开 (Quan Hongchan is full of energy at the age of 19)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B519%E5%B2%81%E6%B0%94%E5%9C%BA%E5%85%A8%E5%BC%80%23) `88.9K 🔥`
1. [白日提灯热度](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E7%83%AD%E5%BA%A6%23) `87.0K 🔥`
1. [升糖刺客](https://s.weibo.com/weibo?q=%23%E5%8D%87%E7%B3%96%E5%88%BA%E5%AE%A2%23) `85.2K 🔥`
1. [以军出动50余架战机打击伊朗核设施](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E5%87%BA%E5%8A%A850%E4%BD%99%E6%9E%B6%E6%88%98%E6%9C%BA%E6%89%93%E5%87%BB%E4%BC%8A%E6%9C%97%E6%A0%B8%E8%AE%BE%E6%96%BD%23) `84.4K 🔥`
1. [宋威龙签约天浩盛世 (Song Weilong signed a contract with Tianhao Shengshi)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E7%AD%BE%E7%BA%A6%E5%A4%A9%E6%B5%A9%E7%9B%9B%E4%B8%96%23) `81.8K 🔥`
1. [徐良删除汪苏泷后会无期作词作曲](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%AF%E5%88%A0%E9%99%A4%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%90%8E%E4%BC%9A%E6%97%A0%E6%9C%9F%E4%BD%9C%E8%AF%8D%E4%BD%9C%E6%9B%B2%23) `80.6K 🔥`
1. [TF四代二班见面会 (TF fourth generation second class meeting)](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E4%BA%8C%E7%8F%AD%E8%A7%81%E9%9D%A2%E4%BC%9A%23) `71.8K 🔥`
1. [这7种食物不甜却能让你血糖飙升](https://s.weibo.com/weibo?q=%23%E8%BF%997%E7%A7%8D%E9%A3%9F%E7%89%A9%E4%B8%8D%E7%94%9C%E5%8D%B4%E8%83%BD%E8%AE%A9%E4%BD%A0%E8%A1%80%E7%B3%96%E9%A3%99%E5%8D%87%23) `71.7K 🔥`
1. [菲律宾最新涉台表态 (Philippines’ latest stance on Taiwan)](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%BE%8B%E5%AE%BE%E6%9C%80%E6%96%B0%E6%B6%89%E5%8F%B0%E8%A1%A8%E6%80%81%23) `420.6K 🔥` `-24%`
1. [奔跑吧](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%23) `271.3K 🔥` `-36%`
1. [原来淋巴肉这么好区分 (It turns out that lymphatic meat is so easy to distinguish)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%B7%8B%E5%B7%B4%E8%82%89%E8%BF%99%E4%B9%88%E5%A5%BD%E5%8C%BA%E5%88%86%23) `228.1K 🔥` `-35%`
1. [奔跑吧直播](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E7%9B%B4%E6%92%AD%23) `226.9K 🔥` `-27%`
1. [俄罗斯4月1日起禁止汽油出口 (Russia bans gasoline exports from April 1)](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF4%E6%9C%881%E6%97%A5%E8%B5%B7%E7%A6%81%E6%AD%A2%E6%B1%BD%E6%B2%B9%E5%87%BA%E5%8F%A3%23) `223.1K 🔥` `-27%`
1. [一念江南](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%23) `219.9K 🔥` `-28%`
1. [建议一次请假请一天](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%B8%80%E6%AC%A1%E8%AF%B7%E5%81%87%E8%AF%B7%E4%B8%80%E5%A4%A9%23) `217.1K 🔥` `-28%`
1. [李昌钰去世知情人发声](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%8C%E9%92%B0%E5%8E%BB%E4%B8%96%E7%9F%A5%E6%83%85%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `128.5K 🔥` `-26%`
1. [40岁心梗幸存者已辞职回农村静养 (40-year-old myocardial infarction survivor has resigned and returned to the countryside to rest)](https://s.weibo.com/weibo?q=%2340%E5%B2%81%E5%BF%83%E6%A2%97%E5%B9%B8%E5%AD%98%E8%80%85%E5%B7%B2%E8%BE%9E%E8%81%8C%E5%9B%9E%E5%86%9C%E6%9D%91%E9%9D%99%E5%85%BB%23) `113.1K 🔥` `-68%`
1. [315曝光问题地方政府负责人被约谈](https://s.weibo.com/weibo?q=%23315%E6%9B%9D%E5%85%89%E9%97%AE%E9%A2%98%E5%9C%B0%E6%96%B9%E6%94%BF%E5%BA%9C%E8%B4%9F%E8%B4%A3%E4%BA%BA%E8%A2%AB%E7%BA%A6%E8%B0%88%23) `92.8K 🔥` `-27%`
1. [年仅21岁牺牲母亲跨400公里扫墓](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E4%BB%8521%E5%B2%81%E7%89%BA%E7%89%B2%E6%AF%8D%E4%BA%B2%E8%B7%A8400%E5%85%AC%E9%87%8C%E6%89%AB%E5%A2%93%23) `84.7K 🔥` `-37%`
1. [青菜焦虑症](https://s.weibo.com/weibo?q=%23%E9%9D%92%E8%8F%9C%E7%84%A6%E8%99%91%E7%97%87%23) `71.8K 🔥` `-25%`
1. [粉底液将军被嘲不该仅演员承担 (The foundation liquid general was ridiculed and it’s not just the actors who should bear the responsibility)](https://s.weibo.com/weibo?q=%23%E7%B2%89%E5%BA%95%E6%B6%B2%E5%B0%86%E5%86%9B%E8%A2%AB%E5%98%B2%E4%B8%8D%E8%AF%A5%E4%BB%85%E6%BC%94%E5%91%98%E6%89%BF%E6%8B%85%23) `71.8K 🔥` `-22%`

Updated at 2026-03-28 19:57:46

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
