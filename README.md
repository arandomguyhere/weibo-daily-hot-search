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

1. [王石否认被抓 (Wang Shi denies being arrested)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9F%B3%E5%90%A6%E8%AE%A4%E8%A2%AB%E6%8A%93%23) `1.3M 🔥` `NEW`
1. [温瑞博太原站双冠](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E7%91%9E%E5%8D%9A%E5%A4%AA%E5%8E%9F%E7%AB%99%E5%8F%8C%E5%86%A0%23) `307.7K 🔥` `NEW`
1. [楚乔传 知否](https://s.weibo.com/weibo?q=%23%E6%A5%9A%E4%B9%94%E4%BC%A0%20%E7%9F%A5%E5%90%A6%23) `276.2K 🔥` `NEW`
1. [伊朗议长说美国未能赢得伊朗信任](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%AE%AE%E9%95%BF%E8%AF%B4%E7%BE%8E%E5%9B%BD%E6%9C%AA%E8%83%BD%E8%B5%A2%E5%BE%97%E4%BC%8A%E6%9C%97%E4%BF%A1%E4%BB%BB%23) `274.8K 🔥` `NEW`
1. [吕梁中院一法官被指猥亵女当事人](https://s.weibo.com/weibo?q=%23%E5%90%95%E6%A2%81%E4%B8%AD%E9%99%A2%E4%B8%80%E6%B3%95%E5%AE%98%E8%A2%AB%E6%8C%87%E7%8C%A5%E4%BA%B5%E5%A5%B3%E5%BD%93%E4%BA%8B%E4%BA%BA%23) `256.6K 🔥` `NEW`
1. [王石 秦枫](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9F%B3%20%E7%A7%A6%E6%9E%AB%23) `190.8K 🔥` `NEW`
1. [被绳割断气管男孩家境很不好](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%BB%B3%E5%89%B2%E6%96%AD%E6%B0%94%E7%AE%A1%E7%94%B7%E5%AD%A9%E5%AE%B6%E5%A2%83%E5%BE%88%E4%B8%8D%E5%A5%BD%23) `169.5K 🔥` `NEW`
1. [纽约地铁站发生持刀伤人](https://s.weibo.com/weibo?q=%23%E7%BA%BD%E7%BA%A6%E5%9C%B0%E9%93%81%E7%AB%99%E5%8F%91%E7%94%9F%E6%8C%81%E5%88%80%E4%BC%A4%E4%BA%BA%23) `133.1K 🔥` `NEW`
1. [果然领导一眼就能看出来是领导](https://s.weibo.com/weibo?q=%23%E6%9E%9C%E7%84%B6%E9%A2%86%E5%AF%BC%E4%B8%80%E7%9C%BC%E5%B0%B1%E8%83%BD%E7%9C%8B%E5%87%BA%E6%9D%A5%E6%98%AF%E9%A2%86%E5%AF%BC%23) `88.8K 🔥` `NEW`
1. [温瑞博4比2吉村真晴](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E7%91%9E%E5%8D%9A4%E6%AF%942%E5%90%89%E6%9D%91%E7%9C%9F%E6%99%B4%23) `84.9K 🔥` `NEW`
1. [曝苹果已攻克折叠屏2大难题 (It is revealed that Apple has overcome two major problems with folding screens)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%8B%B9%E6%9E%9C%E5%B7%B2%E6%94%BB%E5%85%8B%E6%8A%98%E5%8F%A0%E5%B1%8F2%E5%A4%A7%E9%9A%BE%E9%A2%98%23) `82.9K 🔥` `NEW`
1. [脑雾](https://s.weibo.com/weibo?q=%23%E8%84%91%E9%9B%BE%23) `77.5K 🔥` `NEW`
1. [原来乌鸦喝水的课文是真的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%B9%8C%E9%B8%A6%E5%96%9D%E6%B0%B4%E7%9A%84%E8%AF%BE%E6%96%87%E6%98%AF%E7%9C%9F%E7%9A%84%23) `74.9K 🔥` `NEW`
1. [一直以为谈恋爱都是朋友转对象](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9B%B4%E4%BB%A5%E4%B8%BA%E8%B0%88%E6%81%8B%E7%88%B1%E9%83%BD%E6%98%AF%E6%9C%8B%E5%8F%8B%E8%BD%AC%E5%AF%B9%E8%B1%A1%23) `74.4K 🔥` `NEW`
1. [迪丽热巴无实物表演](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%97%A0%E5%AE%9E%E7%89%A9%E8%A1%A8%E6%BC%94%23) `72.2K 🔥` `NEW`
1. [A股交易重要调整来了](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%BA%A4%E6%98%93%E9%87%8D%E8%A6%81%E8%B0%83%E6%95%B4%E6%9D%A5%E4%BA%86%23) `277.4K 🔥` `+73%`
1. [浪姐封神舞台](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%B0%81%E7%A5%9E%E8%88%9E%E5%8F%B0%23) `276.8K 🔥` `+55%`
1. [官方辟谣发放2026年度综合补贴 (Officials refute rumors and issue comprehensive subsidies for 2026)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E8%BE%9F%E8%B0%A3%E5%8F%91%E6%94%BE2026%E5%B9%B4%E5%BA%A6%E7%BB%BC%E5%90%88%E8%A1%A5%E8%B4%B4%23) `276.6K 🔥` `+21%`
1. [我轻断食2个小时后](https://s.weibo.com/weibo?q=%23%E6%88%91%E8%BD%BB%E6%96%AD%E9%A3%9F2%E4%B8%AA%E5%B0%8F%E6%97%B6%E5%90%8E%23) `276.5K 🔥` `+105%`
1. [田朴珺回应网传王石被抓](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9C%B4%E7%8F%BA%E5%9B%9E%E5%BA%94%E7%BD%91%E4%BC%A0%E7%8E%8B%E7%9F%B3%E8%A2%AB%E6%8A%93%23) `275.7K 🔥` `+74%`
1. [李荣浩真转我五百了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%E7%9C%9F%E8%BD%AC%E6%88%91%E4%BA%94%E7%99%BE%E4%BA%86%23) `274.6K 🔥` `+74%`
1. [仙逆 (Immortal Ni)](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%23) `273.8K 🔥` `+27%`
1. [赵子琪硬刚浪姐 (Zhao Ziqi is tough on Sister Lang)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E7%A1%AC%E5%88%9A%E6%B5%AA%E5%A7%90%23) `273.1K 🔥` `+75%`
1. [逝者托梦家属投诉入殓师未脱纸尿裤](https://s.weibo.com/weibo?q=%23%E9%80%9D%E8%80%85%E6%89%98%E6%A2%A6%E5%AE%B6%E5%B1%9E%E6%8A%95%E8%AF%89%E5%85%A5%E6%AE%93%E5%B8%88%E6%9C%AA%E8%84%B1%E7%BA%B8%E5%B0%BF%E8%A3%A4%23) `272.9K 🔥` `+44%`
1. [业内称平台不再相信演员能单扛了](https://s.weibo.com/weibo?q=%23%E4%B8%9A%E5%86%85%E7%A7%B0%E5%B9%B3%E5%8F%B0%E4%B8%8D%E5%86%8D%E7%9B%B8%E4%BF%A1%E6%BC%94%E5%91%98%E8%83%BD%E5%8D%95%E6%89%9B%E4%BA%86%23) `272.5K 🔥` `+77%`
1. [迪丽热巴补偿去巴黎的粉丝](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%A1%A5%E5%81%BF%E5%8E%BB%E5%B7%B4%E9%BB%8E%E7%9A%84%E7%B2%89%E4%B8%9D%23) `271.8K 🔥` `+75%`
1. [王濛公司大部分是退役运动员](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%85%AC%E5%8F%B8%E5%A4%A7%E9%83%A8%E5%88%86%E6%98%AF%E9%80%80%E5%BD%B9%E8%BF%90%E5%8A%A8%E5%91%98%23) `271.1K 🔥` `+69%`
1. [李小冉唐艺昕后台玩手机](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%94%90%E8%89%BA%E6%98%95%E5%90%8E%E5%8F%B0%E7%8E%A9%E6%89%8B%E6%9C%BA%23) `270.9K 🔥` `+82%`
1. [钢铁森林 删吻戏](https://s.weibo.com/weibo?q=%23%E9%92%A2%E9%93%81%E6%A3%AE%E6%9E%97%20%E5%88%A0%E5%90%BB%E6%88%8F%23) `270.2K 🔥` `+86%`
1. [男子住48元宾馆身亡家属索赔40万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%BD%8F48%E5%85%83%E5%AE%BE%E9%A6%86%E8%BA%AB%E4%BA%A1%E5%AE%B6%E5%B1%9E%E7%B4%A2%E8%B5%9440%E4%B8%87%23) `247.8K 🔥` `+63%`
1. [何超蕸去世 (He Chaogui passed away)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E8%95%B8%E5%8E%BB%E4%B8%96%23) `247.2K 🔥` `+63%`
1. [老人私栓绳子致男孩气管全断裂](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E7%A7%81%E6%A0%93%E7%BB%B3%E5%AD%90%E8%87%B4%E7%94%B7%E5%AD%A9%E6%B0%94%E7%AE%A1%E5%85%A8%E6%96%AD%E8%A3%82%23) `245.0K 🔥` `+60%`
1. [百妖谱 刘些宁](https://s.weibo.com/weibo?q=%23%E7%99%BE%E5%A6%96%E8%B0%B1%20%E5%88%98%E4%BA%9B%E5%AE%81%23) `216.9K 🔥` `+50%`
1. [赌王何鸿燊17名子女已有3人离世 (Three of gambling king Stanley Ho’s 17 children have passed away)](https://s.weibo.com/weibo?q=%23%E8%B5%8C%E7%8E%8B%E4%BD%95%E9%B8%BF%E7%87%8A17%E5%90%8D%E5%AD%90%E5%A5%B3%E5%B7%B2%E6%9C%893%E4%BA%BA%E7%A6%BB%E4%B8%96%23) `198.9K 🔥` `+27%`
1. [你们俩是要毁了芒果吗 (Are you two going to destroy the mango?)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%BB%AC%E4%BF%A9%E6%98%AF%E8%A6%81%E6%AF%81%E4%BA%86%E8%8A%92%E6%9E%9C%E5%90%97%23) `187.1K 🔥` `+28%`
1. [莫氏鸡煲老板终于是闲下来了 (The owner of Mo’s Chicken Pot is finally free)](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E7%BB%88%E4%BA%8E%E6%98%AF%E9%97%B2%E4%B8%8B%E6%9D%A5%E4%BA%86%23) `97.0K 🔥` `+30%`
1. [常州暂时改名常洲](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E5%B7%9E%E6%9A%82%E6%97%B6%E6%94%B9%E5%90%8D%E5%B8%B8%E6%B4%B2%23) `882.6K 🔥`
1. [卫星互联网技术试验卫星发射任务圆满成功 (Satellite Internet technology test satellite launch mission was a complete success)](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E6%98%9F%E4%BA%92%E8%81%94%E7%BD%91%E6%8A%80%E6%9C%AF%E8%AF%95%E9%AA%8C%E5%8D%AB%E6%98%9F%E5%8F%91%E5%B0%84%E4%BB%BB%E5%8A%A1%E5%9C%86%E6%BB%A1%E6%88%90%E5%8A%9F%23) `677.1K 🔥`
1. [杨天真吐槽很多很红的明星漂亮无脑](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%A4%A9%E7%9C%9F%E5%90%90%E6%A7%BD%E5%BE%88%E5%A4%9A%E5%BE%88%E7%BA%A2%E7%9A%84%E6%98%8E%E6%98%9F%E6%BC%82%E4%BA%AE%E6%97%A0%E8%84%91%23) `160.1K 🔥`
1. [郭碧婷生一胎的时候没备孕 (Guo Biting did not prepare for pregnancy when she gave birth to her first child)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E7%A2%A7%E5%A9%B7%E7%94%9F%E4%B8%80%E8%83%8E%E7%9A%84%E6%97%B6%E5%80%99%E6%B2%A1%E5%A4%87%E5%AD%95%23) `133.0K 🔥`
1. [雪碧拌面](https://s.weibo.com/weibo?q=%23%E9%9B%AA%E7%A2%A7%E6%8B%8C%E9%9D%A2%23) `130.0K 🔥`
1. [何超蕸终身未婚 (He Chaoqiu never married)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E8%95%B8%E7%BB%88%E8%BA%AB%E6%9C%AA%E5%A9%9A%23) `125.2K 🔥`
1. [女子离婚3天后再婚前夫净身出户](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A6%BB%E5%A9%9A3%E5%A4%A9%E5%90%8E%E5%86%8D%E5%A9%9A%E5%89%8D%E5%A4%AB%E5%87%80%E8%BA%AB%E5%87%BA%E6%88%B7%23) `124.5K 🔥`
1. [阚清子二公分组](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E4%BA%8C%E5%85%AC%E5%88%86%E7%BB%84%23) `112.8K 🔥`
1. [三甲医生回应郭碧婷二胎生育损伤](https://s.weibo.com/weibo?q=%23%E4%B8%89%E7%94%B2%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E9%83%AD%E7%A2%A7%E5%A9%B7%E4%BA%8C%E8%83%8E%E7%94%9F%E8%82%B2%E6%8D%9F%E4%BC%A4%23) `106.1K 🔥`
1. [张凌赫今天素颜好性感](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%BB%8A%E5%A4%A9%E7%B4%A0%E9%A2%9C%E5%A5%BD%E6%80%A7%E6%84%9F%23) `72.7K 🔥`
1. [莫叔说鸡煲店未必做到五一 (Uncle Mo said that chicken pot restaurants may not be able to make it to May Day)](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E5%8F%94%E8%AF%B4%E9%B8%A1%E7%85%B2%E5%BA%97%E6%9C%AA%E5%BF%85%E5%81%9A%E5%88%B0%E4%BA%94%E4%B8%80%23) `71.1K 🔥`
1. [石宇奇首夺亚锦赛冠军 (Shi Yuqi wins first Asian Championship title)](https://s.weibo.com/weibo?q=%23%E7%9F%B3%E5%AE%87%E5%A5%87%E9%A6%96%E5%A4%BA%E4%BA%9A%E9%94%A6%E8%B5%9B%E5%86%A0%E5%86%9B%23) `135.7K 🔥` `-82%`
1. [王橹杰语音好可爱](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E8%AF%AD%E9%9F%B3%E5%A5%BD%E5%8F%AF%E7%88%B1%23) `96.5K 🔥` `-29%`
1. [错换人生28年姚策养母索赔被驳回](https://s.weibo.com/weibo?q=%23%E9%94%99%E6%8D%A2%E4%BA%BA%E7%94%9F28%E5%B9%B4%E5%A7%9A%E7%AD%96%E5%85%BB%E6%AF%8D%E7%B4%A2%E8%B5%94%E8%A2%AB%E9%A9%B3%E5%9B%9E%23) `89.0K 🔥` `-41%`
1. [钢铁森林 (steel forest)](https://s.weibo.com/weibo?q=%23%E9%92%A2%E9%93%81%E6%A3%AE%E6%9E%97%23) `86.7K 🔥` `-45%`

Updated at 2026-04-12 19:55:06

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
