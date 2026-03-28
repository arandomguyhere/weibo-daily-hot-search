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

1. [原来淋巴肉这么好区分 (It turns out that lymphatic meat is so easy to distinguish)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%B7%8B%E5%B7%B4%E8%82%89%E8%BF%99%E4%B9%88%E5%A5%BD%E5%8C%BA%E5%88%86%23) `278.0K 🔥` `NEW`
1. [俄罗斯4月1日起禁止汽油出口](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF4%E6%9C%881%E6%97%A5%E8%B5%B7%E7%A6%81%E6%AD%A2%E6%B1%BD%E6%B2%B9%E5%87%BA%E5%8F%A3%23) `210.9K 🔥` `NEW`
1. [夏之光被妈妈拉黑真相巨戳心](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E4%B9%8B%E5%85%89%E8%A2%AB%E5%A6%88%E5%A6%88%E6%8B%89%E9%BB%91%E7%9C%9F%E7%9B%B8%E5%B7%A8%E6%88%B3%E5%BF%83%23) `196.6K 🔥` `NEW`
1. [美国最强导弹击落了美国最强战机](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%9C%80%E5%BC%BA%E5%AF%BC%E5%BC%B9%E5%87%BB%E8%90%BD%E4%BA%86%E7%BE%8E%E5%9B%BD%E6%9C%80%E5%BC%BA%E6%88%98%E6%9C%BA%23) `110.5K 🔥` `NEW`
1. [菲律宾最新涉台表态](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%BE%8B%E5%AE%BE%E6%9C%80%E6%96%B0%E6%B6%89%E5%8F%B0%E8%A1%A8%E6%80%81%23) `110.4K 🔥` `NEW`
1. [这7种食物不甜却能让你血糖飙升](https://s.weibo.com/weibo?q=%23%E8%BF%997%E7%A7%8D%E9%A3%9F%E7%89%A9%E4%B8%8D%E7%94%9C%E5%8D%B4%E8%83%BD%E8%AE%A9%E4%BD%A0%E8%A1%80%E7%B3%96%E9%A3%99%E5%8D%87%23) `109.8K 🔥` `NEW`
1. [QQ音乐巅峰之夜红毯](https://s.weibo.com/weibo?q=%23QQ%E9%9F%B3%E4%B9%90%E5%B7%85%E5%B3%B0%E4%B9%8B%E5%A4%9C%E7%BA%A2%E6%AF%AF%23) `109.3K 🔥` `NEW`
1. [男生杀害15岁女孩后借讨水试探老人](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E6%9D%80%E5%AE%B315%E5%B2%81%E5%A5%B3%E5%AD%A9%E5%90%8E%E5%80%9F%E8%AE%A8%E6%B0%B4%E8%AF%95%E6%8E%A2%E8%80%81%E4%BA%BA%23) `102.0K 🔥` `NEW`
1. [张凌赫体脂曾低到10](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%BD%93%E8%84%82%E6%9B%BE%E4%BD%8E%E5%88%B010%23) `91.5K 🔥` `NEW`
1. [1亿元资金被挪用不仅是家贼难防](https://s.weibo.com/weibo?q=%231%E4%BA%BF%E5%85%83%E8%B5%84%E9%87%91%E8%A2%AB%E6%8C%AA%E7%94%A8%E4%B8%8D%E4%BB%85%E6%98%AF%E5%AE%B6%E8%B4%BC%E9%9A%BE%E9%98%B2%23) `91.3K 🔥` `NEW`
1. [李昌钰母亲用15个字教出了13个博士 (Li Changyu’s mother taught 13 Ph.D.s with 15 words)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%8C%E9%92%B0%E6%AF%8D%E4%BA%B2%E7%94%A815%E4%B8%AA%E5%AD%97%E6%95%99%E5%87%BA%E4%BA%8613%E4%B8%AA%E5%8D%9A%E5%A3%AB%23) `90.2K 🔥` `NEW`
1. [干饭人的梦中情饭来了](https://s.weibo.com/weibo?q=%23%E5%B9%B2%E9%A5%AD%E4%BA%BA%E7%9A%84%E6%A2%A6%E4%B8%AD%E6%83%85%E9%A5%AD%E6%9D%A5%E4%BA%86%23) `83.0K 🔥` `NEW`
1. [日料店 半成品](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%96%99%E5%BA%97%20%E5%8D%8A%E6%88%90%E5%93%81%23) `81.7K 🔥` `NEW`
1. [U19国足1比0胜澳大利亚U19](https://s.weibo.com/weibo?q=%23U19%E5%9B%BD%E8%B6%B31%E6%AF%940%E8%83%9C%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9AU19%23) `79.8K 🔥` `NEW`
1. [王俊凯巅峰之夜红毯生图](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B7%85%E5%B3%B0%E4%B9%8B%E5%A4%9C%E7%BA%A2%E6%AF%AF%E7%94%9F%E5%9B%BE%23) `75.6K 🔥` `NEW`
1. [李昌钰母亲把13个子女培养成博士](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%8C%E9%92%B0%E6%AF%8D%E4%BA%B2%E6%8A%8A13%E4%B8%AA%E5%AD%90%E5%A5%B3%E5%9F%B9%E5%85%BB%E6%88%90%E5%8D%9A%E5%A3%AB%23) `1.1M 🔥` `+389%`
1. [奔跑吧直播](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E7%9B%B4%E6%92%AD%23) `793.4K 🔥` `+161%`
1. [青菜焦虑症](https://s.weibo.com/weibo?q=%23%E9%9D%92%E8%8F%9C%E7%84%A6%E8%99%91%E7%97%87%23) `230.7K 🔥` `+26%`
1. [金价急速飙涨](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%80%A5%E9%80%9F%E9%A3%99%E6%B6%A8%23) `212.1K 🔥` `+72%`
1. [建议一次请假请一天](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%B8%80%E6%AC%A1%E8%AF%B7%E5%81%87%E8%AF%B7%E4%B8%80%E5%A4%A9%23) `168.3K 🔥` `+143%`
1. [粉底液将军 高跟鞋女战士 (Liquid foundation general high heels female warrior)](https://s.weibo.com/weibo?q=%23%E7%B2%89%E5%BA%95%E6%B6%B2%E5%B0%86%E5%86%9B%20%E9%AB%98%E8%B7%9F%E9%9E%8B%E5%A5%B3%E6%88%98%E5%A3%AB%23) `157.1K 🔥` `+23%`
1. [正能量创作者大会](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E8%83%BD%E9%87%8F%E5%88%9B%E4%BD%9C%E8%80%85%E5%A4%A7%E4%BC%9A%23) `635.1K 🔥`
1. [深蓝汽车第100万台电驱下线 (Deep Blue Auto’s 1 millionth electric drive rolls off the assembly line)](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E8%93%9D%E6%B1%BD%E8%BD%A6%E7%AC%AC100%E4%B8%87%E5%8F%B0%E7%94%B5%E9%A9%B1%E4%B8%8B%E7%BA%BF%23) `605.9K 🔥`
1. [一念江南](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%23) `543.7K 🔥`
1. [女子断碳水2月确诊糖尿病前期 (Woman cuts carbs and is diagnosed with prediabetes in February)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%96%AD%E7%A2%B3%E6%B0%B42%E6%9C%88%E7%A1%AE%E8%AF%8A%E7%B3%96%E5%B0%BF%E7%97%85%E5%89%8D%E6%9C%9F%23) `273.2K 🔥`
1. [奔跑吧](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%23) `254.3K 🔥`
1. [徐良删除汪苏泷后会无期作词作曲](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%AF%E5%88%A0%E9%99%A4%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%90%8E%E4%BC%9A%E6%97%A0%E6%9C%9F%E4%BD%9C%E8%AF%8D%E4%BD%9C%E6%9B%B2%23) `205.1K 🔥`
1. [阚清子想从116斤瘦到90斤](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E6%83%B3%E4%BB%8E116%E6%96%A4%E7%98%A6%E5%88%B090%E6%96%A4%23) `201.3K 🔥`
1. [点奶茶要求奶和茶分离 (When ordering milk tea, please separate the milk and tea.)](https://s.weibo.com/weibo?q=%23%E7%82%B9%E5%A5%B6%E8%8C%B6%E8%A6%81%E6%B1%82%E5%A5%B6%E5%92%8C%E8%8C%B6%E5%88%86%E7%A6%BB%23) `168.7K 🔥`
1. [张凌赫多年前发文抨击影视圈 (Zhang Linghe published an article criticizing the film and television industry many years ago)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%A4%9A%E5%B9%B4%E5%89%8D%E5%8F%91%E6%96%87%E6%8A%A8%E5%87%BB%E5%BD%B1%E8%A7%86%E5%9C%88%23) `164.8K 🔥`
1. [白日提灯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `144.7K 🔥`
1. [王俊凯工作室出图](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%87%BA%E5%9B%BE%23) `143.2K 🔥`
1. [全红婵19岁气场全开 (Quan Hongchan is full of energy at the age of 19)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B519%E5%B2%81%E6%B0%94%E5%9C%BA%E5%85%A8%E5%BC%80%23) `142.4K 🔥`
1. [宋威龙签约天浩盛世 (Song Weilong signed a contract with Tianhao Shengshi)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E7%AD%BE%E7%BA%A6%E5%A4%A9%E6%B5%A9%E7%9B%9B%E4%B8%96%23) `142.3K 🔥`
1. [TF四代二班见面会](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E4%BA%8C%E7%8F%AD%E8%A7%81%E9%9D%A2%E4%BC%9A%23) `135.0K 🔥`
1. [年仅21岁牺牲母亲跨400公里扫墓](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E4%BB%8521%E5%B2%81%E7%89%BA%E7%89%B2%E6%AF%8D%E4%BA%B2%E8%B7%A8400%E5%85%AC%E9%87%8C%E6%89%AB%E5%A2%93%23) `112.9K 🔥`
1. [粉底液将军被嘲不该仅演员承担 (The foundation liquid general was ridiculed and it’s not just the actors who should bear the responsibility)](https://s.weibo.com/weibo?q=%23%E7%B2%89%E5%BA%95%E6%B6%B2%E5%B0%86%E5%86%9B%E8%A2%AB%E5%98%B2%E4%B8%8D%E8%AF%A5%E4%BB%85%E6%BC%94%E5%91%98%E6%89%BF%E6%8B%85%23) `99.9K 🔥`
1. [每一个都是我妈会信的程度 (Each one is to the extent that my mother would believe it.)](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E4%B8%80%E4%B8%AA%E9%83%BD%E6%98%AF%E6%88%91%E5%A6%88%E4%BC%9A%E4%BF%A1%E7%9A%84%E7%A8%8B%E5%BA%A6%23) `79.0K 🔥`
1. [严浩翔Fly概念视频 (Yan Haoxiang Fly concept video)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94Fly%E6%A6%82%E5%BF%B5%E8%A7%86%E9%A2%91%23) `74.1K 🔥`
1. [40岁心梗幸存者已辞职回农村静养 (40-year-old myocardial infarction survivor has resigned and returned to the countryside to rest)](https://s.weibo.com/weibo?q=%2340%E5%B2%81%E5%BF%83%E6%A2%97%E5%B9%B8%E5%AD%98%E8%80%85%E5%B7%B2%E8%BE%9E%E8%81%8C%E5%9B%9E%E5%86%9C%E6%9D%91%E9%9D%99%E5%85%BB%23) `279.1K 🔥` `-63%`
1. [终于懂大学面积小的含金量了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%87%82%E5%A4%A7%E5%AD%A6%E9%9D%A2%E7%A7%AF%E5%B0%8F%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E4%BA%86%23) `199.5K 🔥` `-32%`
1. [白日提灯热度](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E7%83%AD%E5%BA%A6%23) `188.5K 🔥` `-32%`
1. [45岁男子心梗离世2天前还在跑马拉松](https://s.weibo.com/weibo?q=%2345%E5%B2%81%E7%94%B7%E5%AD%90%E5%BF%83%E6%A2%97%E7%A6%BB%E4%B8%962%E5%A4%A9%E5%89%8D%E8%BF%98%E5%9C%A8%E8%B7%91%E9%A9%AC%E6%8B%89%E6%9D%BE%23) `178.3K 🔥` `-83%`
1. [白日提灯直播 (Lantern live broadcast during the day)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E7%9B%B4%E6%92%AD%23) `173.7K 🔥` `-22%`
1. [升糖刺客](https://s.weibo.com/weibo?q=%23%E5%8D%87%E7%B3%96%E5%88%BA%E5%AE%A2%23) `144.9K 🔥` `-34%`
1. [单亲妈妈遭羁押821天被判无罪](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BA%B2%E5%A6%88%E5%A6%88%E9%81%AD%E7%BE%81%E6%8A%BC821%E5%A4%A9%E8%A2%AB%E5%88%A4%E6%97%A0%E7%BD%AA%23) `105.1K 🔥` `-53%`
1. [以色列多线作战或已在崩溃边缘](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%A4%9A%E7%BA%BF%E4%BD%9C%E6%88%98%E6%88%96%E5%B7%B2%E5%9C%A8%E5%B4%A9%E6%BA%83%E8%BE%B9%E7%BC%98%23) `96.1K 🔥` `-22%`
1. [新娘回应小伙用吸粪车做婚车](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E5%9B%9E%E5%BA%94%E5%B0%8F%E4%BC%99%E7%94%A8%E5%90%B8%E7%B2%AA%E8%BD%A6%E5%81%9A%E5%A9%9A%E8%BD%A6%23) `92.4K 🔥` `-51%`
1. [我家那小子](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E9%82%A3%E5%B0%8F%E5%AD%90%23) `80.5K 🔥` `-35%`
1. [华为王云鹤离职](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E7%8E%8B%E4%BA%91%E9%B9%A4%E7%A6%BB%E8%81%8C%23) `77.0K 🔥` `-33%`
1. [日本搞大杀器妄图覆盖中国全境 (Japan deploys mass murder weapons in an attempt to cover the entire territory of China)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%90%9E%E5%A4%A7%E6%9D%80%E5%99%A8%E5%A6%84%E5%9B%BE%E8%A6%86%E7%9B%96%E4%B8%AD%E5%9B%BD%E5%85%A8%E5%A2%83%23) `74.9K 🔥` `-40%`

Updated at 2026-03-28 18:41:35

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
