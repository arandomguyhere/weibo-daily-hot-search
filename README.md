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

1. [南京博物院致歉 (Nanjing Museum apologizes)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E4%BA%AC%E5%8D%9A%E7%89%A9%E9%99%A2%E8%87%B4%E6%AD%89%23) `906.2K 🔥` `NEW`
1. [谷爱凌回应米兰冬奥银牌](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%9B%9E%E5%BA%94%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E9%93%B6%E7%89%8C%23) `589.7K 🔥` `NEW`
1. [开始推理吧4](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%A7%8B%E6%8E%A8%E7%90%86%E5%90%A74%23) `529.5K 🔥` `NEW`
1. [发视频晒年味](https://s.weibo.com/weibo?q=%23%E5%8F%91%E8%A7%86%E9%A2%91%E6%99%92%E5%B9%B4%E5%91%B3%23) `444.1K 🔥` `NEW`
1. [网传开推4没有迪丽热巴](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%BC%80%E6%8E%A84%E6%B2%A1%E6%9C%89%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23) `386.6K 🔥` `NEW`
1. [金晨风波后现身澳门](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%E9%A3%8E%E6%B3%A2%E5%90%8E%E7%8E%B0%E8%BA%AB%E6%BE%B3%E9%97%A8%23) `289.8K 🔥` `NEW`
1. [谷爱凌这套动作太丝滑](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E8%BF%99%E5%A5%97%E5%8A%A8%E4%BD%9C%E5%A4%AA%E4%B8%9D%E6%BB%91%23) `208.2K 🔥` `NEW`
1. [江南春图卷已存入南博专库](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E5%8D%97%E6%98%A5%E5%9B%BE%E5%8D%B7%E5%B7%B2%E5%AD%98%E5%85%A5%E5%8D%97%E5%8D%9A%E4%B8%93%E5%BA%93%23) `207.7K 🔥` `NEW`
1. [易烊千玺打耳洞了](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%89%93%E8%80%B3%E6%B4%9E%E4%BA%86%23) `207.6K 🔥` `NEW`
1. [男子让6个月孩子看电视女友劝阻后被打](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%AE%A96%E4%B8%AA%E6%9C%88%E5%AD%A9%E5%AD%90%E7%9C%8B%E7%94%B5%E8%A7%86%E5%A5%B3%E5%8F%8B%E5%8A%9D%E9%98%BB%E5%90%8E%E8%A2%AB%E6%89%93%23) `203.5K 🔥` `NEW`
1. [时代少年团  外务 (Times Youth League Foreign Affairs)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%20%E5%A4%96%E5%8A%A1%23) `166.5K 🔥` `NEW`
1. [陈梦去看谷爱凌决赛了](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%A2%A6%E5%8E%BB%E7%9C%8B%E8%B0%B7%E7%88%B1%E5%87%8C%E5%86%B3%E8%B5%9B%E4%BA%86%23) `151.1K 🔥` `NEW`
1. [15岁男生天生神力面无表情掰苹果](https://s.weibo.com/weibo?q=%2315%E5%B2%81%E7%94%B7%E7%94%9F%E5%A4%A9%E7%94%9F%E7%A5%9E%E5%8A%9B%E9%9D%A2%E6%97%A0%E8%A1%A8%E6%83%85%E6%8E%B0%E8%8B%B9%E6%9E%9C%23) `118.1K 🔥` `NEW`
1. [网传丁程鑫常驻开推4](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E4%B8%81%E7%A8%8B%E9%91%AB%E5%B8%B8%E9%A9%BB%E5%BC%80%E6%8E%A84%23) `118.0K 🔥` `NEW`
1. [王者马年限定皮肤全家福](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E9%A9%AC%E5%B9%B4%E9%99%90%E5%AE%9A%E7%9A%AE%E8%82%A4%E5%85%A8%E5%AE%B6%E7%A6%8F%23) `114.4K 🔥` `NEW`
1. [陈飞宇 阿瑟帅回宫了](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%20%E9%98%BF%E7%91%9F%E5%B8%85%E5%9B%9E%E5%AE%AB%E4%BA%86%23) `108.7K 🔥` `NEW`
1. [谷爱凌站上米兰冬奥领奖台](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%AB%99%E4%B8%8A%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E9%A2%86%E5%A5%96%E5%8F%B0%23) `103.1K 🔥` `NEW`
1. [易烊千玺工作室出图](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%87%BA%E5%9B%BE%23) `102.8K 🔥` `NEW`
1. [谷爱凌领奖前赶紧补个妆](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E9%A2%86%E5%A5%96%E5%89%8D%E8%B5%B6%E7%B4%A7%E8%A1%A5%E4%B8%AA%E5%A6%86%23) `100.2K 🔥` `NEW`
1. [国企招考现场突然通知考试取消](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BC%81%E6%8B%9B%E8%80%83%E7%8E%B0%E5%9C%BA%E7%AA%81%E7%84%B6%E9%80%9A%E7%9F%A5%E8%80%83%E8%AF%95%E5%8F%96%E6%B6%88%23) `98.5K 🔥` `NEW`
1. [EDG晋级圣地亚哥大师赛 (EDG advance to San Diego Masters)](https://s.weibo.com/weibo?q=%23EDG%E6%99%8B%E7%BA%A7%E5%9C%A3%E5%9C%B0%E4%BA%9A%E5%93%A5%E5%A4%A7%E5%B8%88%E8%B5%9B%23) `88.6K 🔥` `NEW`
1. [苹果将发布多款新品](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%B0%86%E5%8F%91%E5%B8%83%E5%A4%9A%E6%AC%BE%E6%96%B0%E5%93%81%23) `85.1K 🔥` `NEW`
1. [张晚意林允希林娜依高为AUDI开麦 (Zhang Wanyi, Lin Yunxi, Lin Na and Yigao opened the mic for AUDI)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%99%9A%E6%84%8F%E6%9E%97%E5%85%81%E5%B8%8C%E6%9E%97%E5%A8%9C%E4%BE%9D%E9%AB%98%E4%B8%BAAUDI%E5%BC%80%E9%BA%A6%23) `592.1K 🔥` `+106%`
1. [格雷莫德](https://s.weibo.com/weibo?q=%23%E6%A0%BC%E9%9B%B7%E8%8E%AB%E5%BE%B7%23) `291.6K 🔥` `+149%`
1. [爱泼斯坦被爆可能没死 (Epstein may not be dead after being exposed)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E8%A2%AB%E7%88%86%E5%8F%AF%E8%83%BD%E6%B2%A1%E6%AD%BB%23) `290.8K 🔥` `+56%`
1. [贾乃亮公司年会奖励万元红包](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E4%B9%83%E4%BA%AE%E5%85%AC%E5%8F%B8%E5%B9%B4%E4%BC%9A%E5%A5%96%E5%8A%B1%E4%B8%87%E5%85%83%E7%BA%A2%E5%8C%85%23) `289.4K 🔥` `+88%`
1. [保姆按要求分房睡老人离世成被告](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%A7%86%E6%8C%89%E8%A6%81%E6%B1%82%E5%88%86%E6%88%BF%E7%9D%A1%E8%80%81%E4%BA%BA%E7%A6%BB%E4%B8%96%E6%88%90%E8%A2%AB%E5%91%8A%23) `288.6K 🔥` `+176%`
1. [丝芭学历最高的人出现了](https://s.weibo.com/weibo?q=%23%E4%B8%9D%E8%8A%AD%E5%AD%A6%E5%8E%86%E6%9C%80%E9%AB%98%E7%9A%84%E4%BA%BA%E5%87%BA%E7%8E%B0%E4%BA%86%23) `271.4K 🔥` `+58%`
1. [奚梦瑶三步变超模脸 (Xi Mengyao transforms into a supermodel in three steps)](https://s.weibo.com/weibo?q=%23%E5%A5%9A%E6%A2%A6%E7%91%B6%E4%B8%89%E6%AD%A5%E5%8F%98%E8%B6%85%E6%A8%A1%E8%84%B8%23) `234.0K 🔥` `+31%`
1. [老人连续7年用冥币买遍半条街](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E8%BF%9E%E7%BB%AD7%E5%B9%B4%E7%94%A8%E5%86%A5%E5%B8%81%E4%B9%B0%E9%81%8D%E5%8D%8A%E6%9D%A1%E8%A1%97%23) `207.3K 🔥` `+21%`
1. [只要华为不跪产品就不贵](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E8%A6%81%E5%8D%8E%E4%B8%BA%E4%B8%8D%E8%B7%AA%E4%BA%A7%E5%93%81%E5%B0%B1%E4%B8%8D%E8%B4%B5%23) `183.2K 🔥` `+42%`
1. [这家人的住商好高 (This family's residential property is so high)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%AE%B6%E4%BA%BA%E7%9A%84%E4%BD%8F%E5%95%86%E5%A5%BD%E9%AB%98%23) `181.0K 🔥` `+59%`
1. [终于知道为啥有人能集齐21张了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E4%B8%BA%E5%95%A5%E6%9C%89%E4%BA%BA%E8%83%BD%E9%9B%86%E9%BD%9021%E5%BC%A0%E4%BA%86%23) `118.7K 🔥` `+23%`
1. [郑钦文vs肯宁](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E8%82%AF%E5%AE%81%23) `349.8K 🔥`
1. [多只小鸟撞西安万象城玻璃墙死亡 (Several birds died after hitting the glass wall of Xi'an Vientiane City)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%8F%AA%E5%B0%8F%E9%B8%9F%E6%92%9E%E8%A5%BF%E5%AE%89%E4%B8%87%E8%B1%A1%E5%9F%8E%E7%8E%BB%E7%92%83%E5%A2%99%E6%AD%BB%E4%BA%A1%23) `287.8K 🔥`
1. [南博文物事件24人被处理](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%8D%9A%E6%96%87%E7%89%A9%E4%BA%8B%E4%BB%B624%E4%BA%BA%E8%A2%AB%E5%A4%84%E7%90%86%23) `201.2K 🔥`
1. [张元英 镜头](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%20%E9%95%9C%E5%A4%B4%23) `147.6K 🔥`
1. [杨洋吸血鬼伯爵 (Count Yang Yang vampire)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E5%90%B8%E8%A1%80%E9%AC%BC%E4%BC%AF%E7%88%B5%23) `141.6K 🔥`
1. [谷爱凌跟妈妈边抱边哭40秒](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E8%B7%9F%E5%A6%88%E5%A6%88%E8%BE%B9%E6%8A%B1%E8%BE%B9%E5%93%AD40%E7%A7%92%23) `135.5K 🔥`
1. [徐湖平正接受审查调查](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B9%96%E5%B9%B3%E6%AD%A3%E6%8E%A5%E5%8F%97%E5%AE%A1%E6%9F%A5%E8%B0%83%E6%9F%A5%23) `126.3K 🔥`
1. [生命树 (tree of life)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%23) `125.6K 🔥`
1. [南京博物院事件最新通报 (The latest report on the incident at Nanjing Museum)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E4%BA%AC%E5%8D%9A%E7%89%A9%E9%99%A2%E4%BA%8B%E4%BB%B6%E6%9C%80%E6%96%B0%E9%80%9A%E6%8A%A5%23) `1.4M 🔥` `-29%`
1. [动车组终点站有科幻片那味儿了](https://s.weibo.com/weibo?q=%23%E5%8A%A8%E8%BD%A6%E7%BB%84%E7%BB%88%E7%82%B9%E7%AB%99%E6%9C%89%E7%A7%91%E5%B9%BB%E7%89%87%E9%82%A3%E5%91%B3%E5%84%BF%E4%BA%86%23) `671.3K 🔥` `-50%`
1. [谷爱凌决赛 (Gu Ailing finals)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%86%B3%E8%B5%9B%23) `480.8K 🔥` `-90%`
1. [谷爱凌冬奥银牌](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%86%AC%E5%A5%A5%E9%93%B6%E7%89%8C%23) `312.0K 🔥` `-76%`
1. [谷爱凌第一跳后哭了](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%AC%AC%E4%B8%80%E8%B7%B3%E5%90%8E%E5%93%AD%E4%BA%86%23) `243.6K 🔥` `-47%`
1. [杨幂被朱一龙吓到尖叫](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%A2%AB%E6%9C%B1%E4%B8%80%E9%BE%99%E5%90%93%E5%88%B0%E5%B0%96%E5%8F%AB%23) `173.6K 🔥` `-29%`
1. [宁艺卓到底丑在哪了](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E5%88%B0%E5%BA%95%E4%B8%91%E5%9C%A8%E5%93%AA%E4%BA%86%23) `114.2K 🔥` `-25%`
1. [谷爱凌第二滑23.00分 (Gu Ailing skated second with 23.00 points)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%AC%AC%E4%BA%8C%E6%BB%9123.00%E5%88%86%23) `112.3K 🔥` `-61%`
1. [虞书欣让桐哥抱走超大应援棒](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%AE%A9%E6%A1%90%E5%93%A5%E6%8A%B1%E8%B5%B0%E8%B6%85%E5%A4%A7%E5%BA%94%E6%8F%B4%E6%A3%92%23) `99.3K 🔥` `-24%`
1. [李亚鹏带货莲花味精销售额近500万](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BA%9A%E9%B9%8F%E5%B8%A6%E8%B4%A7%E8%8E%B2%E8%8A%B1%E5%91%B3%E7%B2%BE%E9%94%80%E5%94%AE%E9%A2%9D%E8%BF%91500%E4%B8%87%23) `99.1K 🔥` `-28%`
1. [王楚然古装好美](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%8F%A4%E8%A3%85%E5%A5%BD%E7%BE%8E%23) `98.3K 🔥` `-31%`

Updated at 2026-02-09 22:43:05

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
