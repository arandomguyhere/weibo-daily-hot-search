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

1. [王曼昱vs申裕斌 (Wang Manyu vs. Shin Yubin)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1vs%E7%94%B3%E8%A3%95%E6%96%8C%23) `1.2M 🔥` `NEW`
1. [跑男 只允许不喜欢郑恺李晨](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%20%E5%8F%AA%E5%85%81%E8%AE%B8%E4%B8%8D%E5%96%9C%E6%AC%A2%E9%83%91%E6%81%BA%E6%9D%8E%E6%99%A8%23) `835.5K 🔥` `NEW`
1. [全李酒店已更名](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%9D%8E%E9%85%92%E5%BA%97%E5%B7%B2%E6%9B%B4%E5%90%8D%23) `804.7K 🔥` `NEW`
1. [银行已支付一储户1000万本金利息](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E5%B7%B2%E6%94%AF%E4%BB%98%E4%B8%80%E5%82%A8%E6%88%B71000%E4%B8%87%E6%9C%AC%E9%87%91%E5%88%A9%E6%81%AF%23) `661.1K 🔥` `NEW`
1. [歌手2026](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%23) `557.7K 🔥` `NEW`
1. [以为晾衣服偏心是很小众的事](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BA%E6%99%BE%E8%A1%A3%E6%9C%8D%E5%81%8F%E5%BF%83%E6%98%AF%E5%BE%88%E5%B0%8F%E4%BC%97%E7%9A%84%E4%BA%8B%23) `463.4K 🔥` `NEW`
1. [新物种广西两头蛇被发现](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%89%A9%E7%A7%8D%E5%B9%BF%E8%A5%BF%E4%B8%A4%E5%A4%B4%E8%9B%87%E8%A2%AB%E5%8F%91%E7%8E%B0%23) `446.6K 🔥` `NEW`
1. [白鹿晒手搓眼线](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%99%92%E6%89%8B%E6%90%93%E7%9C%BC%E7%BA%BF%23) `446.6K 🔥` `NEW`
1. [傅首尔回应被说瘦了像杨紫](https://s.weibo.com/weibo?q=%23%E5%82%85%E9%A6%96%E5%B0%94%E5%9B%9E%E5%BA%94%E8%A2%AB%E8%AF%B4%E7%98%A6%E4%BA%86%E5%83%8F%E6%9D%A8%E7%B4%AB%23) `446.5K 🔥` `NEW`
1. [日本街头疑现芬太尼丧尸](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%A1%97%E5%A4%B4%E7%96%91%E7%8E%B0%E8%8A%AC%E5%A4%AA%E5%B0%BC%E4%B8%A7%E5%B0%B8%23) `446.5K 🔥` `NEW`
1. [马頔是我们没有辅佐好 (Ma Di, it’s because we didn’t have any help.)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E6%98%AF%E6%88%91%E4%BB%AC%E6%B2%A1%E6%9C%89%E8%BE%85%E4%BD%90%E5%A5%BD%23) `446.5K 🔥` `NEW`
1. [峨眉山景区通报男子猛推猴子](https://s.weibo.com/weibo?q=%23%E5%B3%A8%E7%9C%89%E5%B1%B1%E6%99%AF%E5%8C%BA%E9%80%9A%E6%8A%A5%E7%94%B7%E5%AD%90%E7%8C%9B%E6%8E%A8%E7%8C%B4%E5%AD%90%23) `407.7K 🔥` `NEW`
1. [Faker开自定义给自己庆生](https://s.weibo.com/weibo?q=%23Faker%E5%BC%80%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%99%E8%87%AA%E5%B7%B1%E5%BA%86%E7%94%9F%23) `406.7K 🔥` `NEW`
1. [三问享界S9零重力座椅夹人事件](https://s.weibo.com/weibo?q=%23%E4%B8%89%E9%97%AE%E4%BA%AB%E7%95%8CS9%E9%9B%B6%E9%87%8D%E5%8A%9B%E5%BA%A7%E6%A4%85%E5%A4%B9%E4%BA%BA%E4%BA%8B%E4%BB%B6%23) `350.1K 🔥` `NEW`
1. [救救孙丞潇](https://s.weibo.com/weibo?q=%23%E6%95%91%E6%95%91%E5%AD%99%E4%B8%9E%E6%BD%87%23) `300.4K 🔥` `NEW`
1. [裁判向孙颖莎行绅士礼](https://s.weibo.com/weibo?q=%23%E8%A3%81%E5%88%A4%E5%90%91%E5%AD%99%E9%A2%96%E8%8E%8E%E8%A1%8C%E7%BB%85%E5%A3%AB%E7%A4%BC%23) `295.1K 🔥` `NEW`
1. [Diplo发了与Jennie的合照](https://s.weibo.com/weibo?q=%23Diplo%E5%8F%91%E4%BA%86%E4%B8%8EJennie%E7%9A%84%E5%90%88%E7%85%A7%23) `257.6K 🔥` `NEW`
1. [6旬加班身亡男子几乎无双休](https://s.weibo.com/weibo?q=%236%E6%97%AC%E5%8A%A0%E7%8F%AD%E8%BA%AB%E4%BA%A1%E7%94%B7%E5%AD%90%E5%87%A0%E4%B9%8E%E6%97%A0%E5%8F%8C%E4%BC%91%23) `234.3K 🔥` `NEW`
1. [手机付款怎么变成了贷款](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E4%BB%98%E6%AC%BE%E6%80%8E%E4%B9%88%E5%8F%98%E6%88%90%E4%BA%86%E8%B4%B7%E6%AC%BE%23) `206.1K 🔥` `NEW`
1. [国乒女团4天2战韩国](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A24%E5%A4%A92%E6%88%98%E9%9F%A9%E5%9B%BD%23) `200.4K 🔥` `NEW`
1. [孙颖莎打得对手直跺脚 (Sun Yingsha beat her opponent until she stomped her feet)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%89%93%E5%BE%97%E5%AF%B9%E6%89%8B%E7%9B%B4%E8%B7%BA%E8%84%9A%23) `200.2K 🔥` `NEW`
1. [中国女团vs韩国对阵名单](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%9B%A2vs%E9%9F%A9%E5%9B%BD%E5%AF%B9%E9%98%B5%E5%90%8D%E5%8D%95%23) `200.1K 🔥` `NEW`
1. [湖北一男子曝光餐馆阴阳价](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8C%97%E4%B8%80%E7%94%B7%E5%AD%90%E6%9B%9D%E5%85%89%E9%A4%90%E9%A6%86%E9%98%B4%E9%98%B3%E4%BB%B7%23) `196.3K 🔥` `NEW`
1. [1岁半女婴私处发育异常险变男孩](https://s.weibo.com/weibo?q=%231%E5%B2%81%E5%8D%8A%E5%A5%B3%E5%A9%B4%E7%A7%81%E5%A4%84%E5%8F%91%E8%82%B2%E5%BC%82%E5%B8%B8%E9%99%A9%E5%8F%98%E7%94%B7%E5%AD%A9%23) `187.6K 🔥` `NEW`
1. [郑钦文vs布克沙](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E5%B8%83%E5%85%8B%E6%B2%99%23) `186.9K 🔥` `NEW`
1. [汉坦病毒疫情扩散](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%E7%96%AB%E6%83%85%E6%89%A9%E6%95%A3%23) `166.6K 🔥` `NEW`
1. [宁艺卓内场图](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E5%86%85%E5%9C%BA%E5%9B%BE%23) `161.2K 🔥` `NEW`
1. [男子被毒蛇咬后打死蛇就医](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%A2%AB%E6%AF%92%E8%9B%87%E5%92%AC%E5%90%8E%E6%89%93%E6%AD%BB%E8%9B%87%E5%B0%B1%E5%8C%BB%23) `159.0K 🔥` `NEW`
1. [马龙观赛从沙发到看台](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%A7%82%E8%B5%9B%E4%BB%8E%E6%B2%99%E5%8F%91%E5%88%B0%E7%9C%8B%E5%8F%B0%23) `150.1K 🔥` `NEW`
1. [章子怡宁艺卓同款封面姿势](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%AD%90%E6%80%A1%E5%AE%81%E8%89%BA%E5%8D%93%E5%90%8C%E6%AC%BE%E5%B0%81%E9%9D%A2%E5%A7%BF%E5%8A%BF%23) `148.7K 🔥` `NEW`
1. [香港男演员公开交代后事 (Hong Kong actor publicly reveals his funeral details)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E7%94%B7%E6%BC%94%E5%91%98%E5%85%AC%E5%BC%80%E4%BA%A4%E4%BB%A3%E5%90%8E%E4%BA%8B%23) `141.5K 🔥` `NEW`
1. [5月桃花运最旺的星座](https://s.weibo.com/weibo?q=%235%E6%9C%88%E6%A1%83%E8%8A%B1%E8%BF%90%E6%9C%80%E6%97%BA%E7%9A%84%E6%98%9F%E5%BA%A7%23) `412.5K 🔥` `+143%`
1. [禁止向动物索要食物](https://s.weibo.com/weibo?q=%23%E7%A6%81%E6%AD%A2%E5%90%91%E5%8A%A8%E7%89%A9%E7%B4%A2%E8%A6%81%E9%A3%9F%E7%89%A9%23) `446.7K 🔥`
1. [白鹿卢昱晓 抖音下沉市场](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8D%A2%E6%98%B1%E6%99%93%20%E6%8A%96%E9%9F%B3%E4%B8%8B%E6%B2%89%E5%B8%82%E5%9C%BA%23) `446.7K 🔥`
1. [谢娜演唱会卫生间配了卫生巾](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E5%8D%AB%E7%94%9F%E9%97%B4%E9%85%8D%E4%BA%86%E5%8D%AB%E7%94%9F%E5%B7%BE%23) `443.8K 🔥`
1. [麻辣烫日本火爆被年轻女性当成药膳](https://s.weibo.com/weibo?q=%23%E9%BA%BB%E8%BE%A3%E7%83%AB%E6%97%A5%E6%9C%AC%E7%81%AB%E7%88%86%E8%A2%AB%E5%B9%B4%E8%BD%BB%E5%A5%B3%E6%80%A7%E5%BD%93%E6%88%90%E8%8D%AF%E8%86%B3%23) `338.2K 🔥`
1. [质子不争](https://s.weibo.com/weibo?q=%23%E8%B4%A8%E5%AD%90%E4%B8%8D%E4%BA%89%23) `283.9K 🔥`
1. [男孩厕所捡到15万劳力士绿水鬼](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E5%8E%95%E6%89%80%E6%8D%A1%E5%88%B015%E4%B8%87%E5%8A%B3%E5%8A%9B%E5%A3%AB%E7%BB%BF%E6%B0%B4%E9%AC%BC%23) `195.3K 🔥`
1. [淘宝免单 (Taobao free order)](https://s.weibo.com/weibo?q=%23%E6%B7%98%E5%AE%9D%E5%85%8D%E5%8D%95%23) `901.0K 🔥` `-92%`
1. [大国重器硬核升级 (Hard-core upgrade of powerful weapons)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%9B%BD%E9%87%8D%E5%99%A8%E7%A1%AC%E6%A0%B8%E5%8D%87%E7%BA%A7%23) `843.0K 🔥` `-46%`
1. [五一买24件衣服全退光店主心态崩了](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E4%B9%B024%E4%BB%B6%E8%A1%A3%E6%9C%8D%E5%85%A8%E9%80%80%E5%85%89%E5%BA%97%E4%B8%BB%E5%BF%83%E6%80%81%E5%B4%A9%E4%BA%86%23) `544.8K 🔥` `-72%`
1. [孙杨张豆豆给我看力竭了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%BC%A0%E8%B1%86%E8%B1%86%E7%BB%99%E6%88%91%E7%9C%8B%E5%8A%9B%E7%AB%AD%E4%BA%86%23) `446.7K 🔥` `-56%`
1. [市监局称4只皮皮虾1035元价格合规 (The Municipal Supervision Bureau said that the price of 4 Pipi shrimps at 1,035 yuan complied with the regulations)](https://s.weibo.com/weibo?q=%23%E5%B8%82%E7%9B%91%E5%B1%80%E7%A7%B04%E5%8F%AA%E7%9A%AE%E7%9A%AE%E8%99%BE1035%E5%85%83%E4%BB%B7%E6%A0%BC%E5%90%88%E8%A7%84%23) `294.1K 🔥` `-51%`
1. [孙杨被伊能静开导哭了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E8%A2%AB%E4%BC%8A%E8%83%BD%E9%9D%99%E5%BC%80%E5%AF%BC%E5%93%AD%E4%BA%86%23) `263.5K 🔥` `-34%`
1. [全村老人已读乱回火了](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%9D%91%E8%80%81%E4%BA%BA%E5%B7%B2%E8%AF%BB%E4%B9%B1%E5%9B%9E%E7%81%AB%E4%BA%86%23) `252.7K 🔥` `-52%`
1. [浪姐至今为止翻红最成功的艺人](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E8%87%B3%E4%BB%8A%E4%B8%BA%E6%AD%A2%E7%BF%BB%E7%BA%A2%E6%9C%80%E6%88%90%E5%8A%9F%E7%9A%84%E8%89%BA%E4%BA%BA%23) `237.2K 🔥` `-39%`
1. [泰康人寿全国销冠被拘 (Taikang Life Insurance Co., Ltd. was arrested for being the top seller in the country)](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%BA%B7%E4%BA%BA%E5%AF%BF%E5%85%A8%E5%9B%BD%E9%94%80%E5%86%A0%E8%A2%AB%E6%8B%98%23) `205.2K 🔥` `-47%`
1. [生活中的真正奢侈](https://s.weibo.com/weibo?q=%23%E7%94%9F%E6%B4%BB%E4%B8%AD%E7%9A%84%E7%9C%9F%E6%AD%A3%E5%A5%A2%E4%BE%88%23) `203.4K 🔥` `-34%`
1. [歌手2026 AI歌手](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%20AI%E6%AD%8C%E6%89%8B%23) `202.7K 🔥` `-33%`
1. [尘白禁区重新开服](https://s.weibo.com/weibo?q=%23%E5%B0%98%E7%99%BD%E7%A6%81%E5%8C%BA%E9%87%8D%E6%96%B0%E5%BC%80%E6%9C%8D%23) `154.8K 🔥` `-61%`

Updated at 2026-05-07 18:05:35

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
