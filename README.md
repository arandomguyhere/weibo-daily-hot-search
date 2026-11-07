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

1. [女子和已婚男交往被原配发现后坠亡](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%92%8C%E5%B7%B2%E5%A9%9A%E7%94%B7%E4%BA%A4%E5%BE%80%E8%A2%AB%E5%8E%9F%E9%85%8D%E5%8F%91%E7%8E%B0%E5%90%8E%E5%9D%A0%E4%BA%A1%23) `1.1M 🔥` `NEW`
1. [曝青稚被蛐蛐的原因](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%9D%92%E7%A8%9A%E8%A2%AB%E8%9B%90%E8%9B%90%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `812.8K 🔥` `NEW`
1. [6图看进博会磁吸力持续增强](https://s.weibo.com/weibo?q=%236%E5%9B%BE%E7%9C%8B%E8%BF%9B%E5%8D%9A%E4%BC%9A%E7%A3%81%E5%90%B8%E5%8A%9B%E6%8C%81%E7%BB%AD%E5%A2%9E%E5%BC%BA%23) `641.2K 🔥` `NEW`
1. [炎亚纶谈王子璇文吉儿写序事件](https://s.weibo.com/weibo?q=%23%E7%82%8E%E4%BA%9A%E7%BA%B6%E8%B0%88%E7%8E%8B%E5%AD%90%E7%92%87%E6%96%87%E5%90%89%E5%84%BF%E5%86%99%E5%BA%8F%E4%BA%8B%E4%BB%B6%23) `610.9K 🔥` `NEW`
1. [男子被小奶狗抓伤确诊狂犬病](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%A2%AB%E5%B0%8F%E5%A5%B6%E7%8B%97%E6%8A%93%E4%BC%A4%E7%A1%AE%E8%AF%8A%E7%8B%82%E7%8A%AC%E7%97%85%23) `454.4K 🔥` `NEW`
1. [墨尔本遇害外卖员妻子已抵京](https://s.weibo.com/weibo?q=%23%E5%A2%A8%E5%B0%94%E6%9C%AC%E9%81%87%E5%AE%B3%E5%A4%96%E5%8D%96%E5%91%98%E5%A6%BB%E5%AD%90%E5%B7%B2%E6%8A%B5%E4%BA%AC%23) `431.7K 🔥` `NEW`
1. [立冬了又可以看甄嬛传了](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E5%86%AC%E4%BA%86%E5%8F%88%E5%8F%AF%E4%BB%A5%E7%9C%8B%E7%94%84%E5%AC%9B%E4%BC%A0%E4%BA%86%23) `430.8K 🔥` `NEW`
1. [江南 今何在](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E5%8D%97%20%E4%BB%8A%E4%BD%95%E5%9C%A8%23) `340.5K 🔥` `NEW`
1. [别人说日照香炉生紫烟我装死](https://s.weibo.com/weibo?q=%23%E5%88%AB%E4%BA%BA%E8%AF%B4%E6%97%A5%E7%85%A7%E9%A6%99%E7%82%89%E7%94%9F%E7%B4%AB%E7%83%9F%E6%88%91%E8%A3%85%E6%AD%BB%23) `333.7K 🔥` `NEW`
1. [王子璇文吉儿黄焖鸡事变路人视角](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E6%96%87%E5%90%89%E5%84%BF%E9%BB%84%E7%84%96%E9%B8%A1%E4%BA%8B%E5%8F%98%E8%B7%AF%E4%BA%BA%E8%A7%86%E8%A7%92%23) `333.3K 🔥` `NEW`
1. [马斯克说我爱中国](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E8%AF%B4%E6%88%91%E7%88%B1%E4%B8%AD%E5%9B%BD%23) `332.2K 🔥` `NEW`
1. [李一桐疑似内涵芒果](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E7%96%91%E4%BC%BC%E5%86%85%E6%B6%B5%E8%8A%92%E6%9E%9C%23) `329.9K 🔥` `NEW`
1. [马天宇直播被工作人员叫停](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E7%9B%B4%E6%92%AD%E8%A2%AB%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E5%8F%AB%E5%81%9C%23) `310.4K 🔥` `NEW`
1. [大S剥虾论八年后被读懂](https://s.weibo.com/weibo?q=%23%E5%A4%A7S%E5%89%A5%E8%99%BE%E8%AE%BA%E5%85%AB%E5%B9%B4%E5%90%8E%E8%A2%AB%E8%AF%BB%E6%87%82%23) `302.7K 🔥` `NEW`
1. [HPV疫苗是不是骗局](https://s.weibo.com/weibo?q=%23HPV%E7%96%AB%E8%8B%97%E6%98%AF%E4%B8%8D%E6%98%AF%E9%AA%97%E5%B1%80%23) `284.6K 🔥` `NEW`
1. [曝90剧花美国待产](https://s.weibo.com/weibo?q=%23%E6%9B%9D90%E5%89%A7%E8%8A%B1%E7%BE%8E%E5%9B%BD%E5%BE%85%E4%BA%A7%23) `277.9K 🔥` `NEW`
1. [全球汽车销量前十中国占三席](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E6%B1%BD%E8%BD%A6%E9%94%80%E9%87%8F%E5%89%8D%E5%8D%81%E4%B8%AD%E5%9B%BD%E5%8D%A0%E4%B8%89%E5%B8%AD%23) `270.9K 🔥` `NEW`
1. [马天宇 李明德](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%20%E6%9D%8E%E6%98%8E%E5%BE%B7%23) `270.7K 🔥` `NEW`
1. [京东家乡美食大赛带火冠军同款锅](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E5%AE%B6%E4%B9%A1%E7%BE%8E%E9%A3%9F%E5%A4%A7%E8%B5%9B%E5%B8%A6%E7%81%AB%E5%86%A0%E5%86%9B%E5%90%8C%E6%AC%BE%E9%94%85%23) `270.6K 🔥` `NEW`
1. [男子站台离世距AED仅1分钟路程](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%AB%99%E5%8F%B0%E7%A6%BB%E4%B8%96%E8%B7%9DAED%E4%BB%851%E5%88%86%E9%92%9F%E8%B7%AF%E7%A8%8B%23) `270.2K 🔥` `NEW`
1. [影视飓风Tim镜头下的美妆黑科技](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8ETim%E9%95%9C%E5%A4%B4%E4%B8%8B%E7%9A%84%E7%BE%8E%E5%A6%86%E9%BB%91%E7%A7%91%E6%8A%80%23) `270.1K 🔥` `NEW`
1. [保定一大桥坍塌被砸车辆受损严重](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%AE%9A%E4%B8%80%E5%A4%A7%E6%A1%A5%E5%9D%8D%E5%A1%8C%E8%A2%AB%E7%A0%B8%E8%BD%A6%E8%BE%86%E5%8F%97%E6%8D%9F%E4%B8%A5%E9%87%8D%23) `269.9K 🔥` `NEW`
1. [男子倒在站台去世无人用AED施救](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%80%92%E5%9C%A8%E7%AB%99%E5%8F%B0%E5%8E%BB%E4%B8%96%E6%97%A0%E4%BA%BA%E7%94%A8AED%E6%96%BD%E6%95%91%23) `269.6K 🔥` `NEW`
1. [汪苏泷告小红书AI助手点点](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%91%8A%E5%B0%8F%E7%BA%A2%E4%B9%A6AI%E5%8A%A9%E6%89%8B%E7%82%B9%E7%82%B9%23) `269.5K 🔥` `NEW`
1. [曝尚雯婕翻译一小时四五千](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%B0%9A%E9%9B%AF%E5%A9%95%E7%BF%BB%E8%AF%91%E4%B8%80%E5%B0%8F%E6%97%B6%E5%9B%9B%E4%BA%94%E5%8D%83%23) `269.3K 🔥` `NEW`
1. [头一次觉得平板这么有用](https://s.weibo.com/weibo?q=%23%E5%A4%B4%E4%B8%80%E6%AC%A1%E8%A7%89%E5%BE%97%E5%B9%B3%E6%9D%BF%E8%BF%99%E4%B9%88%E6%9C%89%E7%94%A8%23) `268.9K 🔥` `NEW`
1. [保定一立交桥坍塌砸中车辆](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%AE%9A%E4%B8%80%E7%AB%8B%E4%BA%A4%E6%A1%A5%E5%9D%8D%E5%A1%8C%E7%A0%B8%E4%B8%AD%E8%BD%A6%E8%BE%86%23) `268.8K 🔥` `NEW`
1. [月嫂剧烈摇晃20天宝宝家长怒了](https://s.weibo.com/weibo?q=%23%E6%9C%88%E5%AB%82%E5%89%A7%E7%83%88%E6%91%87%E6%99%8320%E5%A4%A9%E5%AE%9D%E5%AE%9D%E5%AE%B6%E9%95%BF%E6%80%92%E4%BA%86%23) `268.5K 🔥` `NEW`
1. [北京下雪](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E4%B8%8B%E9%9B%AA%23) `268.3K 🔥` `NEW`
1. [癌症晚期女子1个月前检查无异常](https://s.weibo.com/weibo?q=%23%E7%99%8C%E7%97%87%E6%99%9A%E6%9C%9F%E5%A5%B3%E5%AD%901%E4%B8%AA%E6%9C%88%E5%89%8D%E6%A3%80%E6%9F%A5%E6%97%A0%E5%BC%82%E5%B8%B8%23) `268.1K 🔥` `NEW`
1. [监控拍下58岁丈夫与按摩女亲密行为](https://s.weibo.com/weibo?q=%23%E7%9B%91%E6%8E%A7%E6%8B%8D%E4%B8%8B58%E5%B2%81%E4%B8%88%E5%A4%AB%E4%B8%8E%E6%8C%89%E6%91%A9%E5%A5%B3%E4%BA%B2%E5%AF%86%E8%A1%8C%E4%B8%BA%23) `268.0K 🔥` `NEW`
1. [李一桐 女推](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%20%E5%A5%B3%E6%8E%A8%23) `267.7K 🔥` `NEW`
1. [闫桉给田曦薇无名指戴戒指](https://s.weibo.com/weibo?q=%23%E9%97%AB%E6%A1%89%E7%BB%99%E7%94%B0%E6%9B%A6%E8%96%87%E6%97%A0%E5%90%8D%E6%8C%87%E6%88%B4%E6%88%92%E6%8C%87%23) `267.5K 🔥` `NEW`
1. [iG和GEN热身方式曝光](https://s.weibo.com/weibo?q=%23iG%E5%92%8CGEN%E7%83%AD%E8%BA%AB%E6%96%B9%E5%BC%8F%E6%9B%9D%E5%85%89%23) `262.8K 🔥` `NEW`
1. [杨幂银杏叶饺子是什么馅的](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E9%93%B6%E6%9D%8F%E5%8F%B6%E9%A5%BA%E5%AD%90%E6%98%AF%E4%BB%80%E4%B9%88%E9%A6%85%E7%9A%84%23) `259.8K 🔥` `NEW`
1. [厉娜用鸭舌比心](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E7%94%A8%E9%B8%AD%E8%88%8C%E6%AF%94%E5%BF%83%23) `254.3K 🔥` `NEW`
1. [官方通报保定桥体脱落事故](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E4%BF%9D%E5%AE%9A%E6%A1%A5%E4%BD%93%E8%84%B1%E8%90%BD%E4%BA%8B%E6%95%85%23) `209.9K 🔥` `NEW`
1. [白小纯 原生家庭](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%20%E5%8E%9F%E7%94%9F%E5%AE%B6%E5%BA%AD%23) `194.5K 🔥` `NEW`
1. [嫁金钗回门宴](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E5%9B%9E%E9%97%A8%E5%AE%B4%23) `162.8K 🔥` `NEW`
1. [黄景瑜说小林变小木木了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E8%AF%B4%E5%B0%8F%E6%9E%97%E5%8F%98%E5%B0%8F%E6%9C%A8%E6%9C%A8%E4%BA%86%23) `158.3K 🔥` `NEW`
1. [大月份还上班因为要发工资](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E6%9C%88%E4%BB%BD%E8%BF%98%E4%B8%8A%E7%8F%AD%E5%9B%A0%E4%B8%BA%E8%A6%81%E5%8F%91%E5%B7%A5%E8%B5%84%23) `158.1K 🔥` `NEW`
1. [后会友期 吸干大盘](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%20%E5%90%B8%E5%B9%B2%E5%A4%A7%E7%9B%98%23) `154.5K 🔥` `NEW`
1. [余承东发汽车动态](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E5%8F%91%E6%B1%BD%E8%BD%A6%E5%8A%A8%E6%80%81%23) `140.3K 🔥` `NEW`
1. [白小纯杂志](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E6%9D%82%E5%BF%97%23) `138.2K 🔥` `NEW`
1. [中国不买英伟达芯片美国人急什么](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%B8%8D%E4%B9%B0%E8%8B%B1%E4%BC%9F%E8%BE%BE%E8%8A%AF%E7%89%87%E7%BE%8E%E5%9B%BD%E4%BA%BA%E6%80%A5%E4%BB%80%E4%B9%88%23) `134.7K 🔥` `NEW`
1. [后会友期 母带](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%20%E6%AF%8D%E5%B8%A6%23) `134.6K 🔥` `NEW`
1. [白小纯说被骂会自己骂回去](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E8%AF%B4%E8%A2%AB%E9%AA%82%E4%BC%9A%E8%87%AA%E5%B7%B1%E9%AA%82%E5%9B%9E%E5%8E%BB%23) `133.8K 🔥` `NEW`
1. [白敬亭你要毁了范丞丞吗](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E4%BD%A0%E8%A6%81%E6%AF%81%E4%BA%86%E8%8C%83%E4%B8%9E%E4%B8%9E%E5%90%97%23) `126.3K 🔥` `NEW`
1. [原来车企各有各的副业](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BD%A6%E4%BC%81%E5%90%84%E6%9C%89%E5%90%84%E7%9A%84%E5%89%AF%E4%B8%9A%23) `125.7K 🔥` `NEW`
1. [青稚现队友说青稚录完回来变开朗了](https://s.weibo.com/weibo?q=%23%E9%9D%92%E7%A8%9A%E7%8E%B0%E9%98%9F%E5%8F%8B%E8%AF%B4%E9%9D%92%E7%A8%9A%E5%BD%95%E5%AE%8C%E5%9B%9E%E6%9D%A5%E5%8F%98%E5%BC%80%E6%9C%97%E4%BA%86%23) `125.5K 🔥` `NEW`
1. [趵突泉夫妇领证了](https://s.weibo.com/weibo?q=%23%E8%B6%B5%E7%AA%81%E6%B3%89%E5%A4%AB%E5%A6%87%E9%A2%86%E8%AF%81%E4%BA%86%23) `123.7K 🔥` `NEW`

Updated at 2026-11-07 17:47:17

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
