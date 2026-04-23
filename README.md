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

1. [神仙肉 AI配角 (Fairy meat AI supporting role)](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E4%BB%99%E8%82%89%20AI%E9%85%8D%E8%A7%92%23) `1.1M 🔥` `NEW`
1. [第六届亚洲沙滩运动会在三亚开幕](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E5%85%AD%E5%B1%8A%E4%BA%9A%E6%B4%B2%E6%B2%99%E6%BB%A9%E8%BF%90%E5%8A%A8%E4%BC%9A%E5%9C%A8%E4%B8%89%E4%BA%9A%E5%BC%80%E5%B9%95%23) `666.0K 🔥` `NEW`
1. [食物热量越来越极端了](https://s.weibo.com/weibo?q=%23%E9%A3%9F%E7%89%A9%E7%83%AD%E9%87%8F%E8%B6%8A%E6%9D%A5%E8%B6%8A%E6%9E%81%E7%AB%AF%E4%BA%86%23) `647.0K 🔥` `NEW`
1. [民政局回应马頔李纯结婚证是手写的](https://s.weibo.com/weibo?q=%23%E6%B0%91%E6%94%BF%E5%B1%80%E5%9B%9E%E5%BA%94%E9%A9%AC%E9%A0%94%E6%9D%8E%E7%BA%AF%E7%BB%93%E5%A9%9A%E8%AF%81%E6%98%AF%E6%89%8B%E5%86%99%E7%9A%84%23) `641.6K 🔥` `NEW`
1. [泰国榴莲正在疯狂涌入](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%A6%B4%E8%8E%B2%E6%AD%A3%E5%9C%A8%E7%96%AF%E7%8B%82%E6%B6%8C%E5%85%A5%23) `436.3K 🔥` `NEW`
1. [熊猫全球品牌代言人刘亦菲](https://s.weibo.com/weibo?q=%23%E7%86%8A%E7%8C%AB%E5%85%A8%E7%90%83%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%E5%88%98%E4%BA%A6%E8%8F%B2%23) `427.3K 🔥` `NEW`
1. [李小冉对王濛说大人说话别插嘴](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%AF%B9%E7%8E%8B%E6%BF%9B%E8%AF%B4%E5%A4%A7%E4%BA%BA%E8%AF%B4%E8%AF%9D%E5%88%AB%E6%8F%92%E5%98%B4%23) `327.0K 🔥` `NEW`
1. [刘宇宁否认与宋祖儿恋情](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E5%90%A6%E8%AE%A4%E4%B8%8E%E5%AE%8B%E7%A5%96%E5%84%BF%E6%81%8B%E6%83%85%23) `323.7K 🔥` `NEW`
1. [曝快手表哥公会签约多名未成年艺人](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BF%AB%E6%89%8B%E8%A1%A8%E5%93%A5%E5%85%AC%E4%BC%9A%E7%AD%BE%E7%BA%A6%E5%A4%9A%E5%90%8D%E6%9C%AA%E6%88%90%E5%B9%B4%E8%89%BA%E4%BA%BA%23) `320.5K 🔥` `NEW`
1. [被卖到电诈园女生说发位置会被打](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%8D%96%E5%88%B0%E7%94%B5%E8%AF%88%E5%9B%AD%E5%A5%B3%E7%94%9F%E8%AF%B4%E5%8F%91%E4%BD%8D%E7%BD%AE%E4%BC%9A%E8%A2%AB%E6%89%93%23) `313.3K 🔥` `NEW`
1. [张函瑞机场 (Zhanghanrui Airport)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%BD%E7%91%9E%E6%9C%BA%E5%9C%BA%23) `310.6K 🔥` `NEW`
1. [打赏案女孩与主播聊天记录像本书](https://s.weibo.com/weibo?q=%23%E6%89%93%E8%B5%8F%E6%A1%88%E5%A5%B3%E5%AD%A9%E4%B8%8E%E4%B8%BB%E6%92%AD%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%E5%83%8F%E6%9C%AC%E4%B9%A6%23) `300.4K 🔥` `NEW`
1. [林俊杰什么时候开演唱会](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E5%BC%80%E6%BC%94%E5%94%B1%E4%BC%9A%23) `294.1K 🔥` `NEW`
1. [1台车7个月狂揽400亿](https://s.weibo.com/weibo?q=%231%E5%8F%B0%E8%BD%A67%E4%B8%AA%E6%9C%88%E7%8B%82%E6%8F%BD400%E4%BA%BF%23) `292.4K 🔥` `NEW`
1. [iPhoneUltra金属机模](https://s.weibo.com/weibo?q=%23iPhoneUltra%E9%87%91%E5%B1%9E%E6%9C%BA%E6%A8%A1%23) `287.9K 🔥` `NEW`
1. [奔跑吧](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%23) `287.2K 🔥` `NEW`
1. [普通人一生的收入](https://s.weibo.com/weibo?q=%23%E6%99%AE%E9%80%9A%E4%BA%BA%E4%B8%80%E7%94%9F%E7%9A%84%E6%94%B6%E5%85%A5%23) `274.1K 🔥` `NEW`
1. [奔驰140年](https://s.weibo.com/weibo?q=%23%E5%A5%94%E9%A9%B0140%E5%B9%B4%23) `273.0K 🔥` `NEW`
1. [虐猫男子开大电视音量掩盖惨叫](https://s.weibo.com/weibo?q=%23%E8%99%90%E7%8C%AB%E7%94%B7%E5%AD%90%E5%BC%80%E5%A4%A7%E7%94%B5%E8%A7%86%E9%9F%B3%E9%87%8F%E6%8E%A9%E7%9B%96%E6%83%A8%E5%8F%AB%23) `267.5K 🔥` `NEW`
1. [第一次感受到相亲的无力感](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E6%84%9F%E5%8F%97%E5%88%B0%E7%9B%B8%E4%BA%B2%E7%9A%84%E6%97%A0%E5%8A%9B%E6%84%9F%23) `267.2K 🔥` `NEW`
1. [朴宝剑张元英 演员脸和爱豆脸 (Park Bo Gum, Jang Won Young, actor face and idol face)](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%AE%9D%E5%89%91%E5%BC%A0%E5%85%83%E8%8B%B1%20%E6%BC%94%E5%91%98%E8%84%B8%E5%92%8C%E7%88%B1%E8%B1%86%E8%84%B8%23) `217.2K 🔥` `NEW`
1. [被老板性侵女子带女儿送的项链出庭](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E8%80%81%E6%9D%BF%E6%80%A7%E4%BE%B5%E5%A5%B3%E5%AD%90%E5%B8%A6%E5%A5%B3%E5%84%BF%E9%80%81%E7%9A%84%E9%A1%B9%E9%93%BE%E5%87%BA%E5%BA%AD%23) `207.6K 🔥` `NEW`
1. [王者东皇太一禁用](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E4%B8%9C%E7%9A%87%E5%A4%AA%E4%B8%80%E7%A6%81%E7%94%A8%23) `200.1K 🔥` `NEW`
1. [医院通报幼童从4楼意外坠落](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E9%80%9A%E6%8A%A5%E5%B9%BC%E7%AB%A5%E4%BB%8E4%E6%A5%BC%E6%84%8F%E5%A4%96%E5%9D%A0%E8%90%BD%23) `199.4K 🔥` `NEW`
1. [乒乓球机器人打败日本顶尖选手](https://s.weibo.com/weibo?q=%23%E4%B9%92%E4%B9%93%E7%90%83%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%89%93%E8%B4%A5%E6%97%A5%E6%9C%AC%E9%A1%B6%E5%B0%96%E9%80%89%E6%89%8B%23) `198.9K 🔥` `NEW`
1. [孙颖莎三冠王特辑](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E4%B8%89%E5%86%A0%E7%8E%8B%E7%89%B9%E8%BE%91%23) `198.7K 🔥` `NEW`
1. [伊朗将恢复往返中国航班](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%B0%86%E6%81%A2%E5%A4%8D%E5%BE%80%E8%BF%94%E4%B8%AD%E5%9B%BD%E8%88%AA%E7%8F%AD%23) `198.3K 🔥` `NEW`
1. [女生过泼水节被卖园区警方立案](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E8%BF%87%E6%B3%BC%E6%B0%B4%E8%8A%82%E8%A2%AB%E5%8D%96%E5%9B%AD%E5%8C%BA%E8%AD%A6%E6%96%B9%E7%AB%8B%E6%A1%88%23) `197.4K 🔥` `NEW`
1. [孙颖莎亮相国际乒联记录片](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E4%BA%AE%E7%9B%B8%E5%9B%BD%E9%99%85%E4%B9%92%E8%81%94%E8%AE%B0%E5%BD%95%E7%89%87%23) `197.1K 🔥` `NEW`
1. [白鹿让张真源出去](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%AE%A9%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%87%BA%E5%8E%BB%23) `196.7K 🔥` `NEW`
1. [打洲本还得看荣耀WIN (If you want to buy from Zhouben, you have to look at Honor WIN.)](https://s.weibo.com/weibo?q=%23%E6%89%93%E6%B4%B2%E6%9C%AC%E8%BF%98%E5%BE%97%E7%9C%8B%E8%8D%A3%E8%80%80WIN%23) `196.4K 🔥` `NEW`
1. [怦然心动20岁](https://s.weibo.com/weibo?q=%23%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A820%E5%B2%81%23) `196.0K 🔥` `NEW`
1. [推荐点五一旅游人不从众的地方](https://s.weibo.com/weibo?q=%23%E6%8E%A8%E8%8D%90%E7%82%B9%E4%BA%94%E4%B8%80%E6%97%85%E6%B8%B8%E4%BA%BA%E4%B8%8D%E4%BB%8E%E4%BC%97%E7%9A%84%E5%9C%B0%E6%96%B9%23) `195.5K 🔥` `NEW`
1. [员工建600多个工作群离职拒交接](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A5%E5%BB%BA600%E5%A4%9A%E4%B8%AA%E5%B7%A5%E4%BD%9C%E7%BE%A4%E7%A6%BB%E8%81%8C%E6%8B%92%E4%BA%A4%E6%8E%A5%23) `767.2K 🔥` `+111%`
1. [花251块买的女装](https://s.weibo.com/weibo?q=%23%E8%8A%B1251%E5%9D%97%E4%B9%B0%E7%9A%84%E5%A5%B3%E8%A3%85%23) `327.3K 🔥` `+150%`
1. [布克救球砸到对手被吹技犯](https://s.weibo.com/weibo?q=%23%E5%B8%83%E5%85%8B%E6%95%91%E7%90%83%E7%A0%B8%E5%88%B0%E5%AF%B9%E6%89%8B%E8%A2%AB%E5%90%B9%E6%8A%80%E7%8A%AF%23) `199.9K 🔥` `+25%`
1. [王楚钦孙颖莎亮相世乒赛GOAT纪录片](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E4%BA%AE%E7%9B%B8%E4%B8%96%E4%B9%92%E8%B5%9BGOAT%E7%BA%AA%E5%BD%95%E7%89%87%23) `197.9K 🔥` `+54%`
1. [伊能静说孙杨不靠谱](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E8%AF%B4%E5%AD%99%E6%9D%A8%E4%B8%8D%E9%9D%A0%E8%B0%B1%23) `314.2K 🔥`
1. [华策影视大涨](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E7%AD%96%E5%BD%B1%E8%A7%86%E5%A4%A7%E6%B6%A8%23) `311.0K 🔥`
1. [陆地cp](https://s.weibo.com/weibo?q=%23%E9%99%86%E5%9C%B0cp%23) `306.7K 🔥`
1. [A股 4100点 (A shares 4100 points)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%204100%E7%82%B9%23) `303.0K 🔥`
1. [百花杀hi6剧宣](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E6%9D%80hi6%E5%89%A7%E5%AE%A3%23) `282.2K 🔥`
1. [男子24岁仍未发育](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%9024%E5%B2%81%E4%BB%8D%E6%9C%AA%E5%8F%91%E8%82%B2%23) `200.6K 🔥`
1. [齐思钧喊你来京东领补贴读好书 (Qi Sijun calls you to come to JD.com to receive subsidies and study well.)](https://s.weibo.com/weibo?q=%23%E9%BD%90%E6%80%9D%E9%92%A7%E5%96%8A%E4%BD%A0%E6%9D%A5%E4%BA%AC%E4%B8%9C%E9%A2%86%E8%A1%A5%E8%B4%B4%E8%AF%BB%E5%A5%BD%E4%B9%A6%23) `663.9K 🔥` `-22%`
1. [医生提醒40至60岁为神经梅毒高发人群](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E6%8F%90%E9%86%9240%E8%87%B360%E5%B2%81%E4%B8%BA%E7%A5%9E%E7%BB%8F%E6%A2%85%E6%AF%92%E9%AB%98%E5%8F%91%E4%BA%BA%E7%BE%A4%23) `412.6K 🔥` `-54%`
1. [曝广州一知名酒楼吃出嚼过的槟榔](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%B9%BF%E5%B7%9E%E4%B8%80%E7%9F%A5%E5%90%8D%E9%85%92%E6%A5%BC%E5%90%83%E5%87%BA%E5%9A%BC%E8%BF%87%E7%9A%84%E6%A7%9F%E6%A6%94%23) `324.0K 🔥` `-57%`
1. [学历全家最高 工资全家最低 (The highest education level in the family, the lowest salary in the family)](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E5%8E%86%E5%85%A8%E5%AE%B6%E6%9C%80%E9%AB%98%20%E5%B7%A5%E8%B5%84%E5%85%A8%E5%AE%B6%E6%9C%80%E4%BD%8E%23) `321.7K 🔥` `-45%`
1. [女生游泳月卡只用23天](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E6%B8%B8%E6%B3%B3%E6%9C%88%E5%8D%A1%E5%8F%AA%E7%94%A823%E5%A4%A9%23) `318.9K 🔥` `-53%`
1. [男子整日疑妻出轨确诊神经梅毒晚期](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%95%B4%E6%97%A5%E7%96%91%E5%A6%BB%E5%87%BA%E8%BD%A8%E7%A1%AE%E8%AF%8A%E7%A5%9E%E7%BB%8F%E6%A2%85%E6%AF%92%E6%99%9A%E6%9C%9F%23) `316.9K 🔥` `-55%`
1. [镜片装反孩子暴涨到900度妈妈崩溃 (The child’s lens was installed backwards and the temperature soared to 900 degrees, and the mother collapsed)](https://s.weibo.com/weibo?q=%23%E9%95%9C%E7%89%87%E8%A3%85%E5%8F%8D%E5%AD%A9%E5%AD%90%E6%9A%B4%E6%B6%A8%E5%88%B0900%E5%BA%A6%E5%A6%88%E5%A6%88%E5%B4%A9%E6%BA%83%23) `309.5K 🔥` `-58%`
1. [11岁娃偷钱买手机挨骂老板又卖他一个 (11-year-old boy stole money to buy a mobile phone and was scolded by his boss for selling him another one)](https://s.weibo.com/weibo?q=%2311%E5%B2%81%E5%A8%83%E5%81%B7%E9%92%B1%E4%B9%B0%E6%89%8B%E6%9C%BA%E6%8C%A8%E9%AA%82%E8%80%81%E6%9D%BF%E5%8F%88%E5%8D%96%E4%BB%96%E4%B8%80%E4%B8%AA%23) `280.3K 🔥` `-22%`
1. [宋慧乔长发现身 (Song Hye Kyo has long hair and is pregnant)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%85%A7%E4%B9%94%E9%95%BF%E5%8F%91%E7%8E%B0%E8%BA%AB%23) `200.8K 🔥` `-44%`

Updated at 2026-04-23 17:07:57

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
