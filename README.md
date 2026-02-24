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

1. [飞驰人生3 (Flying Life 3)](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F3%23) `16.3K 🔥` `NEW`
1. [WTT新加坡大满贯](https://s.weibo.com/weibo?q=%23WTT%E6%96%B0%E5%8A%A0%E5%9D%A1%E5%A4%A7%E6%BB%A1%E8%B4%AF%23) `15.4K 🔥` `NEW`
1. [纯真年代 好嗑](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%9C%9F%E5%B9%B4%E4%BB%A3%20%E5%A5%BD%E5%97%91%23) `15.4K 🔥` `NEW`
1. [张极出席Prada米兰时装秀](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9E%81%E5%87%BA%E5%B8%ADPrada%E7%B1%B3%E5%85%B0%E6%97%B6%E8%A3%85%E7%A7%80%23) `15.4K 🔥` `NEW`
1. [惊蛰无声 (Waking of Insects is silent)](https://s.weibo.com/weibo?q=%23%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%23) `120.8K 🔥` `+23%`
1. [纯真年代的爱情](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%9C%9F%E5%B9%B4%E4%BB%A3%E7%9A%84%E7%88%B1%E6%83%85%23) `25.9K 🔥`
1. [谷爱凌U槽卫冕英媒质疑打分](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8CU%E6%A7%BD%E5%8D%AB%E5%86%95%E8%8B%B1%E5%AA%92%E8%B4%A8%E7%96%91%E6%89%93%E5%88%86%23) `21.0K 🔥`
1. [左航出席Prada米兰女装秀 (Zuo Hang attended the Prada Milan women's wear show)](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E8%88%AA%E5%87%BA%E5%B8%ADPrada%E7%B1%B3%E5%85%B0%E5%A5%B3%E8%A3%85%E7%A7%80%23) `19.5K 🔥`
1. [中方回应特朗普3月31日将访问中国](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE3%E6%9C%8831%E6%97%A5%E5%B0%86%E8%AE%BF%E9%97%AE%E4%B8%AD%E5%9B%BD%23) `19.0K 🔥`
1. [好标准的大熊猫长相](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E6%A0%87%E5%87%86%E7%9A%84%E5%A4%A7%E7%86%8A%E7%8C%AB%E9%95%BF%E7%9B%B8%23) `18.7K 🔥`
1. [李嘉格男友晒照](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%98%89%E6%A0%BC%E7%94%B7%E5%8F%8B%E6%99%92%E7%85%A7%23) `16.8K 🔥`
1. [纯真年代的爱情 男二女二戏份](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%9C%9F%E5%B9%B4%E4%BB%A3%E7%9A%84%E7%88%B1%E6%83%85%20%E7%94%B7%E4%BA%8C%E5%A5%B3%E4%BA%8C%E6%88%8F%E4%BB%BD%23) `16.4K 🔥`
1. [西安一市民除夕夜被AI给骂了 (A Xi'an citizen was scolded by AI on New Year's Eve)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E4%B8%80%E5%B8%82%E6%B0%91%E9%99%A4%E5%A4%95%E5%A4%9C%E8%A2%ABAI%E7%BB%99%E9%AA%82%E4%BA%86%23) `16.3K 🔥`
1. [杨博文周扬证件照](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%8D%9A%E6%96%87%E5%91%A8%E6%89%AC%E8%AF%81%E4%BB%B6%E7%85%A7%23) `16.1K 🔥`
1. [刘强东宣布进军游艇行业](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%BC%BA%E4%B8%9C%E5%AE%A3%E5%B8%83%E8%BF%9B%E5%86%9B%E6%B8%B8%E8%89%87%E8%A1%8C%E4%B8%9A%23) `15.9K 🔥`
1. [韩国新冠疫苗被爆含真菌毛发](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%96%B0%E5%86%A0%E7%96%AB%E8%8B%97%E8%A2%AB%E7%88%86%E5%90%AB%E7%9C%9F%E8%8F%8C%E6%AF%9B%E5%8F%91%23) `15.8K 🔥`
1. [王楚钦鹰眼挑战失败 (Wang Chuqin’s Eagle Eye challenge failed)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E9%B9%B0%E7%9C%BC%E6%8C%91%E6%88%98%E5%A4%B1%E8%B4%A5%23) `54.6K 🔥` `-58%`
1. [九组数据感受万马奔腾的活力春节](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E7%BB%84%E6%95%B0%E6%8D%AE%E6%84%9F%E5%8F%97%E4%B8%87%E9%A9%AC%E5%A5%94%E8%85%BE%E7%9A%84%E6%B4%BB%E5%8A%9B%E6%98%A5%E8%8A%82%23) `45.2K 🔥` `-41%`
1. [Prada出发图 (Prada departure map)](https://s.weibo.com/weibo?q=%23Prada%E5%87%BA%E5%8F%91%E5%9B%BE%23) `43.8K 🔥` `-39%`
1. [将门独后](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%23) `42.1K 🔥` `-44%`
1. [牛奶灌溉草莓卖出360元天价](https://s.weibo.com/weibo?q=%23%E7%89%9B%E5%A5%B6%E7%81%8C%E6%BA%89%E8%8D%89%E8%8E%93%E5%8D%96%E5%87%BA360%E5%85%83%E5%A4%A9%E4%BB%B7%23) `31.1K 🔥` `-30%`
1. [地球超新鲜2 (earth fresh 2)](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E7%90%83%E8%B6%85%E6%96%B0%E9%B2%9C2%23) `30.5K 🔥` `-38%`
1. [谷爱凌妈妈谷燕的人生轨迹](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%A6%88%E5%A6%88%E8%B0%B7%E7%87%95%E7%9A%84%E4%BA%BA%E7%94%9F%E8%BD%A8%E8%BF%B9%23) `30.4K 🔥` `-25%`
1. [不内耗的人脑子里是这样想的](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%86%85%E8%80%97%E7%9A%84%E4%BA%BA%E8%84%91%E5%AD%90%E9%87%8C%E6%98%AF%E8%BF%99%E6%A0%B7%E6%83%B3%E7%9A%84%23) `29.5K 🔥` `-55%`
1. [吴昕自曝录制快本三四个月还是想走 (Wu Xin reveals that she still wants to leave after three or four months of recording the album)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%98%95%E8%87%AA%E6%9B%9D%E5%BD%95%E5%88%B6%E5%BF%AB%E6%9C%AC%E4%B8%89%E5%9B%9B%E4%B8%AA%E6%9C%88%E8%BF%98%E6%98%AF%E6%83%B3%E8%B5%B0%23) `25.8K 🔥` `-36%`
1. [江西一家人自驾返程出车祸1死4伤](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%A5%BF%E4%B8%80%E5%AE%B6%E4%BA%BA%E8%87%AA%E9%A9%BE%E8%BF%94%E7%A8%8B%E5%87%BA%E8%BD%A6%E7%A5%B81%E6%AD%BB4%E4%BC%A4%23) `25.5K 🔥` `-34%`
1. [瑶一瑶小肉包近30天掉粉4万 (Yao Yiyao’s pork buns have lost 40,000 followers in the past 30 days)](https://s.weibo.com/weibo?q=%23%E7%91%B6%E4%B8%80%E7%91%B6%E5%B0%8F%E8%82%89%E5%8C%85%E8%BF%9130%E5%A4%A9%E6%8E%89%E7%B2%894%E4%B8%87%23) `25.3K 🔥` `-34%`
1. [不让江山作者取关剧组](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%AE%A9%E6%B1%9F%E5%B1%B1%E4%BD%9C%E8%80%85%E5%8F%96%E5%85%B3%E5%89%A7%E7%BB%84%23) `24.9K 🔥` `-33%`
1. [俄乌冲突](https://s.weibo.com/weibo?q=%23%E4%BF%84%E4%B9%8C%E5%86%B2%E7%AA%81%23) `24.3K 🔥` `-31%`
1. [93岁老人去世将千万财产赠邻居 (93-year-old man passed away and donated tens of millions of assets to his neighbors)](https://s.weibo.com/weibo?q=%2393%E5%B2%81%E8%80%81%E4%BA%BA%E5%8E%BB%E4%B8%96%E5%B0%86%E5%8D%83%E4%B8%87%E8%B4%A2%E4%BA%A7%E8%B5%A0%E9%82%BB%E5%B1%85%23) `24.1K 🔥` `-26%`
1. [被炸身亡男子从哪里买的烟花](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%82%B8%E8%BA%AB%E4%BA%A1%E7%94%B7%E5%AD%90%E4%BB%8E%E5%93%AA%E9%87%8C%E4%B9%B0%E7%9A%84%E7%83%9F%E8%8A%B1%23) `24.0K 🔥` `-29%`
1. [彻底击碎日本军国梦](https://s.weibo.com/weibo?q=%23%E5%BD%BB%E5%BA%95%E5%87%BB%E7%A2%8E%E6%97%A5%E6%9C%AC%E5%86%9B%E5%9B%BD%E6%A2%A6%23) `19.7K 🔥` `-41%`
1. [经常熬夜是在挑战甲状腺极限](https://s.weibo.com/weibo?q=%23%E7%BB%8F%E5%B8%B8%E7%86%AC%E5%A4%9C%E6%98%AF%E5%9C%A8%E6%8C%91%E6%88%98%E7%94%B2%E7%8A%B6%E8%85%BA%E6%9E%81%E9%99%90%23) `19.6K 🔥` `-38%`
1. [剑来 魔改](https://s.weibo.com/weibo?q=%23%E5%89%91%E6%9D%A5%20%E9%AD%94%E6%94%B9%23) `19.6K 🔥` `-52%`
1. [鞠婧祎跳了没有明天](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E8%B7%B3%E4%BA%86%E6%B2%A1%E6%9C%89%E6%98%8E%E5%A4%A9%23) `19.4K 🔥` `-21%`
1. [张元英ins更新](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1ins%E6%9B%B4%E6%96%B0%23) `19.3K 🔥` `-27%`
1. [女儿照顾大小便失禁的妈妈整整三年 (Daughter took care of incontinent mother for three years)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E7%85%A7%E9%A1%BE%E5%A4%A7%E5%B0%8F%E4%BE%BF%E5%A4%B1%E7%A6%81%E7%9A%84%E5%A6%88%E5%A6%88%E6%95%B4%E6%95%B4%E4%B8%89%E5%B9%B4%23) `19.3K 🔥` `-32%`
1. [杨幂演历史剧](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%BC%94%E5%8E%86%E5%8F%B2%E5%89%A7%23) `19.2K 🔥` `-37%`
1. [正月剃头死舅舅的真相来了 (The truth about my uncle who died after shaving his head in the first month is here)](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E6%9C%88%E5%89%83%E5%A4%B4%E6%AD%BB%E8%88%85%E8%88%85%E7%9A%84%E7%9C%9F%E7%9B%B8%E6%9D%A5%E4%BA%86%23) `18.4K 🔥` `-25%`
1. [江湖夜雨十年灯 (Rivers and lakes night rain ten years of lanterns)](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E6%B9%96%E5%A4%9C%E9%9B%A8%E5%8D%81%E5%B9%B4%E7%81%AF%23) `17.9K 🔥` `-27%`
1. [丁程鑫直播](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E7%9B%B4%E6%92%AD%23) `17.7K 🔥` `-32%`
1. [独来独往的女人没有一个是孬种](https://s.weibo.com/weibo?q=%23%E7%8B%AC%E6%9D%A5%E7%8B%AC%E5%BE%80%E7%9A%84%E5%A5%B3%E4%BA%BA%E6%B2%A1%E6%9C%89%E4%B8%80%E4%B8%AA%E6%98%AF%E5%AD%AC%E7%A7%8D%23) `17.3K 🔥` `-34%`
1. [杨洋的不让江山妆造](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E7%9A%84%E4%B8%8D%E8%AE%A9%E6%B1%9F%E5%B1%B1%E5%A6%86%E9%80%A0%23) `16.5K 🔥` `-39%`
1. [墨西哥毒枭残忍罪行被曝光 (Brutal crimes of Mexican drug lords exposed)](https://s.weibo.com/weibo?q=%23%E5%A2%A8%E8%A5%BF%E5%93%A5%E6%AF%92%E6%9E%AD%E6%AE%8B%E5%BF%8D%E7%BD%AA%E8%A1%8C%E8%A2%AB%E6%9B%9D%E5%85%89%23) `15.6K 🔥` `-21%`
1. [KPL春季赛](https://s.weibo.com/weibo?q=%23KPL%E6%98%A5%E5%AD%A3%E8%B5%9B%23) `15.4K 🔥` `-22%`
1. [多款相机价格暴涨近10倍 (Prices of many cameras soared nearly 10 times)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%AC%BE%E7%9B%B8%E6%9C%BA%E4%BB%B7%E6%A0%BC%E6%9A%B4%E6%B6%A8%E8%BF%9110%E5%80%8D%23) `15.4K 🔥` `-33%`
1. [林枫松陈稳直播 (Lin Fengsong and Chen Wen live broadcast)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E6%9E%AB%E6%9D%BE%E9%99%88%E7%A8%B3%E7%9B%B4%E6%92%AD%23) `15.4K 🔥` `-25%`
1. [以色列备战 (Israel prepares for war)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%A4%87%E6%88%98%23) `15.4K 🔥` `-57%`
1. [有奖发票违规抽奖将被追回奖金 (Prize invoices for illegal draws will result in the bonus being recovered)](https://s.weibo.com/weibo?q=%23%E6%9C%89%E5%A5%96%E5%8F%91%E7%A5%A8%E8%BF%9D%E8%A7%84%E6%8A%BD%E5%A5%96%E5%B0%86%E8%A2%AB%E8%BF%BD%E5%9B%9E%E5%A5%96%E9%87%91%23) `15.4K 🔥` `-51%`

Updated at 2026-02-25 03:40:16

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
