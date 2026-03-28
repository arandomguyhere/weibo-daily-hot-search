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

1. [原来你是这样的河南 (It turns out you are like this in Henan)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%BD%A0%E6%98%AF%E8%BF%99%E6%A0%B7%E7%9A%84%E6%B2%B3%E5%8D%97%23) `758.8K 🔥` `NEW`
1. [徐良方致歉声明](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%AF%E6%96%B9%E8%87%B4%E6%AD%89%E5%A3%B0%E6%98%8E%23) `751.0K 🔥` `NEW`
1. [超级巅峰之夜快闪直播](https://s.weibo.com/weibo?q=%23%E8%B6%85%E7%BA%A7%E5%B7%85%E5%B3%B0%E4%B9%8B%E5%A4%9C%E5%BF%AB%E9%97%AA%E7%9B%B4%E6%92%AD%23) `567.4K 🔥` `NEW`
1. [张凌赫大一曾分享暗恋细节](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%A4%A7%E4%B8%80%E6%9B%BE%E5%88%86%E4%BA%AB%E6%9A%97%E6%81%8B%E7%BB%86%E8%8A%82%23) `221.0K 🔥` `NEW`
1. [男摄影师用白丝裸足引流卖女童视频](https://s.weibo.com/weibo?q=%23%E7%94%B7%E6%91%84%E5%BD%B1%E5%B8%88%E7%94%A8%E7%99%BD%E4%B8%9D%E8%A3%B8%E8%B6%B3%E5%BC%95%E6%B5%81%E5%8D%96%E5%A5%B3%E7%AB%A5%E8%A7%86%E9%A2%91%23) `164.3K 🔥` `NEW`
1. [女子在家被流浪狗咬伤3天后狗死了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9C%A8%E5%AE%B6%E8%A2%AB%E6%B5%81%E6%B5%AA%E7%8B%97%E5%92%AC%E4%BC%A43%E5%A4%A9%E5%90%8E%E7%8B%97%E6%AD%BB%E4%BA%86%23) `164.2K 🔥` `NEW`
1. [陈飞宇问迪丽热巴你看清过我吗](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%E9%97%AE%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%BD%A0%E7%9C%8B%E6%B8%85%E8%BF%87%E6%88%91%E5%90%97%23) `163.6K 🔥` `NEW`
1. [现货黄金](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E8%B4%A7%E9%BB%84%E9%87%91%23) `154.3K 🔥` `NEW`
1. [男医生做产检丈夫撞墙为何被群嘲](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%8C%BB%E7%94%9F%E5%81%9A%E4%BA%A7%E6%A3%80%E4%B8%88%E5%A4%AB%E6%92%9E%E5%A2%99%E4%B8%BA%E4%BD%95%E8%A2%AB%E7%BE%A4%E5%98%B2%23) `153.8K 🔥` `NEW`
1. [伊朗袭击沙特基地](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%A2%AD%E5%87%BB%E6%B2%99%E7%89%B9%E5%9F%BA%E5%9C%B0%23) `153.7K 🔥` `NEW`
1. [玮薇一笑很倾城 (Weiwei’s smile is charming)](https://s.weibo.com/weibo?q=%23%E7%8E%AE%E8%96%87%E4%B8%80%E7%AC%91%E5%BE%88%E5%80%BE%E5%9F%8E%23) `153.5K 🔥` `NEW`
1. [去年五大茶饮净赚百亿元](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E5%B9%B4%E4%BA%94%E5%A4%A7%E8%8C%B6%E9%A5%AE%E5%87%80%E8%B5%9A%E7%99%BE%E4%BA%BF%E5%85%83%23) `133.8K 🔥` `NEW`
1. [你好星期六](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%23) `114.8K 🔥` `NEW`
1. [精准杀伤癌细胞利器](https://s.weibo.com/weibo?q=%23%E7%B2%BE%E5%87%86%E6%9D%80%E4%BC%A4%E7%99%8C%E7%BB%86%E8%83%9E%E5%88%A9%E5%99%A8%23) `104.2K 🔥` `NEW`
1. [迪丽热巴Hi6开场舞台](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4Hi6%E5%BC%80%E5%9C%BA%E8%88%9E%E5%8F%B0%23) `104.0K 🔥` `NEW`
1. [轻语的关羽](https://s.weibo.com/weibo?q=%23%E8%BD%BB%E8%AF%AD%E7%9A%84%E5%85%B3%E7%BE%BD%23) `92.6K 🔥` `NEW`
1. [白日提灯腾讯视频热度值破25000](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E8%85%BE%E8%AE%AF%E8%A7%86%E9%A2%91%E7%83%AD%E5%BA%A6%E5%80%BC%E7%A0%B425000%23) `91.9K 🔥` `NEW`
1. [胡塞武装与伊朗并肩作战](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%A1%9E%E6%AD%A6%E8%A3%85%E4%B8%8E%E4%BC%8A%E6%9C%97%E5%B9%B6%E8%82%A9%E4%BD%9C%E6%88%98%23) `91.0K 🔥` `NEW`
1. [QQ音乐巅峰之夜直播](https://s.weibo.com/weibo?q=%23QQ%E9%9F%B3%E4%B9%90%E5%B7%85%E5%B3%B0%E4%B9%8B%E5%A4%9C%E7%9B%B4%E6%92%AD%23) `87.8K 🔥` `NEW`
1. [警方通报青岛胶州连环相撞事故](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E9%9D%92%E5%B2%9B%E8%83%B6%E5%B7%9E%E8%BF%9E%E7%8E%AF%E7%9B%B8%E6%92%9E%E4%BA%8B%E6%95%85%23) `87.8K 🔥` `NEW`
1. [女演员针灸治富贵包痛到飙泪 (Actress's acupuncture treatment caused the pain in Fugui's vagina to the point of tears)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%BC%94%E5%91%98%E9%92%88%E7%81%B8%E6%B2%BB%E5%AF%8C%E8%B4%B5%E5%8C%85%E7%97%9B%E5%88%B0%E9%A3%99%E6%B3%AA%23) `87.8K 🔥` `NEW`
1. [幼儿园自理比赛女孩靠佛系速度获胜](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E5%84%BF%E5%9B%AD%E8%87%AA%E7%90%86%E6%AF%94%E8%B5%9B%E5%A5%B3%E5%AD%A9%E9%9D%A0%E4%BD%9B%E7%B3%BB%E9%80%9F%E5%BA%A6%E8%8E%B7%E8%83%9C%23) `795.5K 🔥` `+87%`
1. [JDG对战AG](https://s.weibo.com/weibo?q=%23JDG%E5%AF%B9%E6%88%98AG%23) `731.1K 🔥` `+242%`
1. [穿上春装被误认为是保洁](https://s.weibo.com/weibo?q=%23%E7%A9%BF%E4%B8%8A%E6%98%A5%E8%A3%85%E8%A2%AB%E8%AF%AF%E8%AE%A4%E4%B8%BA%E6%98%AF%E4%BF%9D%E6%B4%81%23) `673.2K 🔥` `+220%`
1. [鞠婧祎巅峰之夜造型](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%B7%85%E5%B3%B0%E4%B9%8B%E5%A4%9C%E9%80%A0%E5%9E%8B%23) `469.7K 🔥` `+33%`
1. [伊朗称造成美军据点极其严重伤亡](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E9%80%A0%E6%88%90%E7%BE%8E%E5%86%9B%E6%8D%AE%E7%82%B9%E6%9E%81%E5%85%B6%E4%B8%A5%E9%87%8D%E4%BC%A4%E4%BA%A1%23) `269.6K 🔥` `+192%`
1. [人民币版冥币不可卖也不要用 (The RMB version of Mingcoin cannot be sold or used.)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E5%B8%81%E7%89%88%E5%86%A5%E5%B8%81%E4%B8%8D%E5%8F%AF%E5%8D%96%E4%B9%9F%E4%B8%8D%E8%A6%81%E7%94%A8%23) `221.9K 🔥` `+62%`
1. [陈牧驰陈冰结婚生子](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%89%A7%E9%A9%B0%E9%99%88%E5%86%B0%E7%BB%93%E5%A9%9A%E7%94%9F%E5%AD%90%23) `221.5K 🔥` `+64%`
1. [白日提灯直播 (Lantern live broadcast during the day)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E7%9B%B4%E6%92%AD%23) `194.4K 🔥` `+49%`
1. [金价急速飙涨](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%80%A5%E9%80%9F%E9%A3%99%E6%B6%A8%23) `164.0K 🔥` `+23%`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `163.5K 🔥` `+79%`
1. [粉底液将军 高跟鞋女战士 (Liquid foundation general high heels female warrior)](https://s.weibo.com/weibo?q=%23%E7%B2%89%E5%BA%95%E6%B6%B2%E5%B0%86%E5%86%9B%20%E9%AB%98%E8%B7%9F%E9%9E%8B%E5%A5%B3%E6%88%98%E5%A3%AB%23) `163.2K 🔥` `+25%`
1. [女子断碳水2月确诊糖尿病前期 (Woman cuts carbs and is diagnosed with prediabetes in February)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%96%AD%E7%A2%B3%E6%B0%B42%E6%9C%88%E7%A1%AE%E8%AF%8A%E7%B3%96%E5%B0%BF%E7%97%85%E5%89%8D%E6%9C%9F%23) `1.1M 🔥`
1. [俄罗斯4月1日起禁止汽油出口 (Russia bans gasoline exports from April 1)](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF4%E6%9C%881%E6%97%A5%E8%B5%B7%E7%A6%81%E6%AD%A2%E6%B1%BD%E6%B2%B9%E5%87%BA%E5%8F%A3%23) `219.9K 🔥`
1. [单依纯演唱会](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E6%BC%94%E5%94%B1%E4%BC%9A%23) `218.2K 🔥`
1. [建议一次请假请一天 (It is recommended to take one day off at a time)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%B8%80%E6%AC%A1%E8%AF%B7%E5%81%87%E8%AF%B7%E4%B8%80%E5%A4%A9%23) `215.1K 🔥`
1. [阚清子想从116斤瘦到90斤](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E6%83%B3%E4%BB%8E116%E6%96%A4%E7%98%A6%E5%88%B090%E6%96%A4%23) `215.1K 🔥`
1. [王俊凯工作室出图](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%87%BA%E5%9B%BE%23) `125.7K 🔥`
1. [孙俪回应陶昕然](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E5%9B%9E%E5%BA%94%E9%99%B6%E6%98%95%E7%84%B6%23) `97.7K 🔥`
1. [陈飞宇终于会用脸了](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%E7%BB%88%E4%BA%8E%E4%BC%9A%E7%94%A8%E8%84%B8%E4%BA%86%23) `90.9K 🔥`
1. [Angelababy梦回贝微微 (Angelababy Meng Huibei Weiwei)](https://s.weibo.com/weibo?q=%23Angelababy%E6%A2%A6%E5%9B%9E%E8%B4%9D%E5%BE%AE%E5%BE%AE%23) `89.2K 🔥`
1. [美国最强导弹击落了美国最强战机](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%9C%80%E5%BC%BA%E5%AF%BC%E5%BC%B9%E5%87%BB%E8%90%BD%E4%BA%86%E7%BE%8E%E5%9B%BD%E6%9C%80%E5%BC%BA%E6%88%98%E6%9C%BA%23) `278.5K 🔥` `-63%`
1. [夏之光被妈妈拉黑真相巨戳心 (The truth about Xia Zhiguang being blocked by her mother is heartbreaking)](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E4%B9%8B%E5%85%89%E8%A2%AB%E5%A6%88%E5%A6%88%E6%8B%89%E9%BB%91%E7%9C%9F%E7%9B%B8%E5%B7%A8%E6%88%B3%E5%BF%83%23) `218.4K 🔥` `-48%`
1. [原来淋巴肉这么好区分 (It turns out that lymphatic meat is so easy to distinguish)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%B7%8B%E5%B7%B4%E8%82%89%E8%BF%99%E4%B9%88%E5%A5%BD%E5%8C%BA%E5%88%86%23) `164.4K 🔥` `-28%`
1. [一念江南](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%23) `163.9K 🔥` `-25%`
1. [李昌钰母亲把13个子女培养成博士](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%8C%E9%92%B0%E6%AF%8D%E4%BA%B2%E6%8A%8A13%E4%B8%AA%E5%AD%90%E5%A5%B3%E5%9F%B9%E5%85%BB%E6%88%90%E5%8D%9A%E5%A3%AB%23) `163.3K 🔥` `-48%`
1. [奔跑吧直播](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E7%9B%B4%E6%92%AD%23) `157.7K 🔥` `-30%`
1. [白日提灯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `144.0K 🔥` `-32%`
1. [李昌钰去世知情人发声 (Insiders of Li Changyu’s death speak out)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%8C%E9%92%B0%E5%8E%BB%E4%B8%96%E7%9F%A5%E6%83%85%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `100.5K 🔥` `-22%`
1. [张凌赫多年前发文抨击影视圈 (Zhang Linghe published an article criticizing the film and television industry many years ago)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%A4%9A%E5%B9%B4%E5%89%8D%E5%8F%91%E6%96%87%E6%8A%A8%E5%87%BB%E5%BD%B1%E8%A7%86%E5%9C%88%23) `91.5K 🔥` `-28%`
1. [菲律宾最新涉台表态 (Philippines’ latest stance on Taiwan)](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%BE%8B%E5%AE%BE%E6%9C%80%E6%96%B0%E6%B6%89%E5%8F%B0%E8%A1%A8%E6%80%81%23) `90.9K 🔥` `-78%`

Updated at 2026-03-28 21:13:52

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
