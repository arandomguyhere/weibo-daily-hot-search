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

1. [歌手第一轮排名 (Singer first round ranking)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E7%AC%AC%E4%B8%80%E8%BD%AE%E6%8E%92%E5%90%8D%23) `4.6M 🔥` `NEW`
1. [齐豫 躲歌王](https://s.weibo.com/weibo?q=%23%E9%BD%90%E8%B1%AB%20%E8%BA%B2%E6%AD%8C%E7%8E%8B%23) `570.8K 🔥` `NEW`
1. [华为乾崑智驾ADS5真不一样](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91%E6%99%BA%E9%A9%BEADS5%E7%9C%9F%E4%B8%8D%E4%B8%80%E6%A0%B7%23) `529.3K 🔥` `NEW`
1. [陈情令外鹅版VS内鹅版](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%83%85%E4%BB%A4%E5%A4%96%E9%B9%85%E7%89%88VS%E5%86%85%E9%B9%85%E7%89%88%23) `351.4K 🔥` `NEW`
1. [原来戴泳帽真的会影响颜值](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%88%B4%E6%B3%B3%E5%B8%BD%E7%9C%9F%E7%9A%84%E4%BC%9A%E5%BD%B1%E5%93%8D%E9%A2%9C%E5%80%BC%23) `338.8K 🔥` `NEW`
1. [娄艺潇海南租房1个月15000](https://s.weibo.com/weibo?q=%23%E5%A8%84%E8%89%BA%E6%BD%87%E6%B5%B7%E5%8D%97%E7%A7%9F%E6%88%BF1%E4%B8%AA%E6%9C%8815000%23) `338.1K 🔥` `NEW`
1. [非京籍社保个税缴1年可购房](https://s.weibo.com/weibo?q=%23%E9%9D%9E%E4%BA%AC%E7%B1%8D%E7%A4%BE%E4%BF%9D%E4%B8%AA%E7%A8%8E%E7%BC%B41%E5%B9%B4%E5%8F%AF%E8%B4%AD%E6%88%BF%23) `323.1K 🔥` `NEW`
1. [员工刻意隐瞒自身价值遭索赔200万](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A5%E5%88%BB%E6%84%8F%E9%9A%90%E7%9E%92%E8%87%AA%E8%BA%AB%E4%BB%B7%E5%80%BC%E9%81%AD%E7%B4%A2%E8%B5%94200%E4%B8%87%23) `317.8K 🔥` `NEW`
1. [万妮达你让我哭](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%A6%AE%E8%BE%BE%E4%BD%A0%E8%AE%A9%E6%88%91%E5%93%AD%23) `312.3K 🔥` `NEW`
1. [去你的岛](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E4%BD%A0%E7%9A%84%E5%B2%9B%23) `266.5K 🔥` `NEW`
1. [歌手帮唱 下季首发 (Singer Helps Sing, First Release Next Season)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E5%B8%AE%E5%94%B1%20%E4%B8%8B%E5%AD%A3%E9%A6%96%E5%8F%91%23) `260.4K 🔥` `NEW`
1. [尤长靖跳得好心酸](https://s.weibo.com/weibo?q=%23%E5%B0%A4%E9%95%BF%E9%9D%96%E8%B7%B3%E5%BE%97%E5%A5%BD%E5%BF%83%E9%85%B8%23) `260.3K 🔥` `NEW`
1. [天赐给侯明昊肚子打码](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E8%B5%90%E7%BB%99%E4%BE%AF%E6%98%8E%E6%98%8A%E8%82%9A%E5%AD%90%E6%89%93%E7%A0%81%23) `260.2K 🔥` `NEW`
1. [陈冲给易烊千玺的信](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%86%B2%E7%BB%99%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E7%9A%84%E4%BF%A1%23) `252.0K 🔥` `NEW`
1. [歌手早该请黄子弘凡了](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%97%A9%E8%AF%A5%E8%AF%B7%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E4%BA%86%23) `252.0K 🔥` `NEW`
1. [白鹿给周深送花篮](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%BB%99%E5%91%A8%E6%B7%B1%E9%80%81%E8%8A%B1%E7%AF%AE%23) `229.3K 🔥` `NEW`
1. [山姆发布泸溪河桃酥事件情况说明](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E5%8F%91%E5%B8%83%E6%B3%B8%E6%BA%AA%E6%B2%B3%E6%A1%83%E9%85%A5%E4%BA%8B%E4%BB%B6%E6%83%85%E5%86%B5%E8%AF%B4%E6%98%8E%23) `215.5K 🔥` `NEW`
1. [中国U17男足vs河床U17](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BDU17%E7%94%B7%E8%B6%B3vs%E6%B2%B3%E5%BA%8AU17%23) `202.0K 🔥` `NEW`
1. [美国7月非农就业人数减少2.3万人](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD7%E6%9C%88%E9%9D%9E%E5%86%9C%E5%B0%B1%E4%B8%9A%E4%BA%BA%E6%95%B0%E5%87%8F%E5%B0%912.3%E4%B8%87%E4%BA%BA%23) `201.8K 🔥` `NEW`
1. [一个没有空调外挂机的城市](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E6%B2%A1%E6%9C%89%E7%A9%BA%E8%B0%83%E5%A4%96%E6%8C%82%E6%9C%BA%E7%9A%84%E5%9F%8E%E5%B8%82%23) `1.3M 🔥` `+58%`
1. [暑期档票房超80亿 (Summer box office exceeds 8 billion)](https://s.weibo.com/weibo?q=%23%E6%9A%91%E6%9C%9F%E6%A1%A3%E7%A5%A8%E6%88%BF%E8%B6%8580%E4%BA%BF%23) `985.0K 🔥` `+50%`
1. [刘浩存红裙跳舞 (Liu Haocun dances in red dress)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E7%BA%A2%E8%A3%99%E8%B7%B3%E8%88%9E%23) `771.9K 🔥` `+186%`
1. [歌手总决赛](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%80%BB%E5%86%B3%E8%B5%9B%23) `528.4K 🔥` `+56%`
1. [北京出台房地产新政策](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%87%BA%E5%8F%B0%E6%88%BF%E5%9C%B0%E4%BA%A7%E6%96%B0%E6%94%BF%E7%AD%96%23) `417.6K 🔥` `+47%`
1. [外国网友也认了中式天庭](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E7%BD%91%E5%8F%8B%E4%B9%9F%E8%AE%A4%E4%BA%86%E4%B8%AD%E5%BC%8F%E5%A4%A9%E5%BA%AD%23) `379.8K 🔥` `+28%`
1. [理解了孩子平庸就承欢膝下的意义](https://s.weibo.com/weibo?q=%23%E7%90%86%E8%A7%A3%E4%BA%86%E5%AD%A9%E5%AD%90%E5%B9%B3%E5%BA%B8%E5%B0%B1%E6%89%BF%E6%AC%A2%E8%86%9D%E4%B8%8B%E7%9A%84%E6%84%8F%E4%B9%89%23) `368.8K 🔥` `+62%`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `361.4K 🔥` `+33%`
1. [齐豫毛阿敏秒了](https://s.weibo.com/weibo?q=%23%E9%BD%90%E8%B1%AB%E6%AF%9B%E9%98%BF%E6%95%8F%E7%A7%92%E4%BA%86%23) `351.7K 🔥` `+31%`
1. [雪佛兰将停止在华销售](https://s.weibo.com/weibo?q=%23%E9%9B%AA%E4%BD%9B%E5%85%B0%E5%B0%86%E5%81%9C%E6%AD%A2%E5%9C%A8%E5%8D%8E%E9%94%80%E5%94%AE%23) `330.7K 🔥` `+81%`
1. [这居然是李行亮](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B1%85%E7%84%B6%E6%98%AF%E6%9D%8E%E8%A1%8C%E4%BA%AE%23) `325.3K 🔥` `+33%`
1. [歌手总决赛 孙燕姿吴青峰太伟大了](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%80%BB%E5%86%B3%E8%B5%9B%20%E5%AD%99%E7%87%95%E5%A7%BF%E5%90%B4%E9%9D%92%E5%B3%B0%E5%A4%AA%E4%BC%9F%E5%A4%A7%E4%BA%86%23) `318.9K 🔥` `+24%`
1. [非农数据 (Non-agricultural data)](https://s.weibo.com/weibo?q=%23%E9%9D%9E%E5%86%9C%E6%95%B0%E6%8D%AE%23) `271.9K 🔥` `+32%`
1. [中山大学23岁直博生确诊胃癌晚期](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%B1%B1%E5%A4%A7%E5%AD%A623%E5%B2%81%E7%9B%B4%E5%8D%9A%E7%94%9F%E7%A1%AE%E8%AF%8A%E8%83%83%E7%99%8C%E6%99%9A%E6%9C%9F%23) `271.7K 🔥` `+50%`
1. [三星折叠屏薄到离谱了](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%E6%8A%98%E5%8F%A0%E5%B1%8F%E8%96%84%E5%88%B0%E7%A6%BB%E8%B0%B1%E4%BA%86%23) `788.9K 🔥`
1. [我支持万妮达当歌王](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%94%AF%E6%8C%81%E4%B8%87%E5%A6%AE%E8%BE%BE%E5%BD%93%E6%AD%8C%E7%8E%8B%23) `332.4K 🔥`
1. [窦靖童欧阳娜娜 好听](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%20%E5%A5%BD%E5%90%AC%23) `310.5K 🔥`
1. [iPhone18Pro起售或破万](https://s.weibo.com/weibo?q=%23iPhone18Pro%E8%B5%B7%E5%94%AE%E6%88%96%E7%A0%B4%E4%B8%87%23) `308.2K 🔥`
1. [胡彦斌韩磊 谁帮谁 (Hu Yanbin Han Lei Who helps whom?)](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%BD%A6%E6%96%8C%E9%9F%A9%E7%A3%8A%20%E8%B0%81%E5%B8%AE%E8%B0%81%23) `296.0K 🔥`
1. [原来这就是抑郁躯体化](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E5%B0%B1%E6%98%AF%E6%8A%91%E9%83%81%E8%BA%AF%E4%BD%93%E5%8C%96%23) `273.7K 🔥`
1. [吴碧霞 国家队就是国家队](https://s.weibo.com/weibo?q=%23%E5%90%B4%E7%A2%A7%E9%9C%9E%20%E5%9B%BD%E5%AE%B6%E9%98%9F%E5%B0%B1%E6%98%AF%E5%9B%BD%E5%AE%B6%E9%98%9F%23) `266.4K 🔥`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `260.3K 🔥`
1. [歌手](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%23) `260.2K 🔥`
1. [立秋 (beginning of autumn)](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E7%A7%8B%23) `252.0K 🔥`
1. [九尾看九门被陈伟霆盯上了 (Jiuwei sees Jiumen being targeted by William Chan)](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%E7%9C%8B%E4%B9%9D%E9%97%A8%E8%A2%AB%E9%99%88%E4%BC%9F%E9%9C%86%E7%9B%AF%E4%B8%8A%E4%BA%86%23) `252.0K 🔥`
1. [百花奖开幕式](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%E5%BC%80%E5%B9%95%E5%BC%8F%23) `213.6K 🔥`
1. [突然理解了大爷的绝望感](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E7%90%86%E8%A7%A3%E4%BA%86%E5%A4%A7%E7%88%B7%E7%9A%84%E7%BB%9D%E6%9C%9B%E6%84%9F%23) `209.2K 🔥`
1. [PYL暂停解说LPL (PYL pauses commentary on LPL)](https://s.weibo.com/weibo?q=%23PYL%E6%9A%82%E5%81%9C%E8%A7%A3%E8%AF%B4LPL%23) `202.2K 🔥`
1. [湖人 詹姆斯 (lakers james)](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BA%20%E8%A9%B9%E5%A7%86%E6%96%AF%23) `679.5K 🔥` `-40%`
1. [黄子弘凡好稳](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E5%A5%BD%E7%A8%B3%23) `295.7K 🔥` `-51%`
1. [国乒男单横滨冠军赛全军覆没](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%8D%95%E6%A8%AA%E6%BB%A8%E5%86%A0%E5%86%9B%E8%B5%9B%E5%85%A8%E5%86%9B%E8%A6%86%E6%B2%A1%23) `260.4K 🔥` `-25%`
1. [四川高县地震1人死亡](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E9%AB%98%E5%8E%BF%E5%9C%B0%E9%9C%871%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `201.7K 🔥` `-24%`
1. [三支一扶作弊案 (Three-support and one-support cheating case)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%E4%BD%9C%E5%BC%8A%E6%A1%88%23) `188.3K 🔥` `-30%`

Updated at 2026-08-07 22:41:58

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
