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

1. [野生母狼怀孕后主动到保护站待产 (After becoming pregnant, a wild female wolf takes the initiative to go to the conservation station to wait for her birth)](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%94%9F%E6%AF%8D%E7%8B%BC%E6%80%80%E5%AD%95%E5%90%8E%E4%B8%BB%E5%8A%A8%E5%88%B0%E4%BF%9D%E6%8A%A4%E7%AB%99%E5%BE%85%E4%BA%A7%23) `1.1M 🔥` `NEW`
1. [心愿便利贴 万通筋骨贴](https://s.weibo.com/weibo?q=%23%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4%20%E4%B8%87%E9%80%9A%E7%AD%8B%E9%AA%A8%E8%B4%B4%23) `761.5K 🔥` `NEW`
1. [中国船舶出品真的一屏放不下](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%88%B9%E8%88%B6%E5%87%BA%E5%93%81%E7%9C%9F%E7%9A%84%E4%B8%80%E5%B1%8F%E6%94%BE%E4%B8%8D%E4%B8%8B%23) `655.7K 🔥` `NEW`
1. [胡先煦十日终焉被曝1天杀青](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E8%A2%AB%E6%9B%9D1%E5%A4%A9%E6%9D%80%E9%9D%92%23) `625.2K 🔥` `NEW`
1. [美向伊朗提出最终方案](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%90%91%E4%BC%8A%E6%9C%97%E6%8F%90%E5%87%BA%E6%9C%80%E7%BB%88%E6%96%B9%E6%A1%88%23) `596.7K 🔥` `NEW`
1. [不要穿浅色去做妆造](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E7%A9%BF%E6%B5%85%E8%89%B2%E5%8E%BB%E5%81%9A%E5%A6%86%E9%80%A0%23) `302.5K 🔥` `NEW`
1. [伊朗通报谈判进展](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%80%9A%E6%8A%A5%E8%B0%88%E5%88%A4%E8%BF%9B%E5%B1%95%23) `302.5K 🔥` `NEW`
1. [大英赛](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%8B%B1%E8%B5%9B%23) `302.1K 🔥` `NEW`
1. [王濛 色令智昏](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%20%E8%89%B2%E4%BB%A4%E6%99%BA%E6%98%8F%23) `301.6K 🔥` `NEW`
1. [女孩追星被骗爸爸受伤家有4个孩子](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E8%BF%BD%E6%98%9F%E8%A2%AB%E9%AA%97%E7%88%B8%E7%88%B8%E5%8F%97%E4%BC%A4%E5%AE%B6%E6%9C%894%E4%B8%AA%E5%AD%A9%E5%AD%90%23) `301.3K 🔥` `NEW`
1. [孟子义突发身体不适 (Meng Ziyi suddenly felt unwell)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E7%AA%81%E5%8F%91%E8%BA%AB%E4%BD%93%E4%B8%8D%E9%80%82%23) `301.0K 🔥` `NEW`
1. [浪姐 剧本](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%20%E5%89%A7%E6%9C%AC%23) `301.0K 🔥` `NEW`
1. [宇树机器人百米冲刺10米每秒](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%99%BE%E7%B1%B3%E5%86%B2%E5%88%BA10%E7%B1%B3%E6%AF%8F%E7%A7%92%23) `277.6K 🔥` `NEW`
1. [LPL和LCK变天了](https://s.weibo.com/weibo?q=%23LPL%E5%92%8CLCK%E5%8F%98%E5%A4%A9%E4%BA%86%23) `275.6K 🔥` `NEW`
1. [芒果 改口癖](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%20%E6%94%B9%E5%8F%A3%E7%99%96%23) `274.7K 🔥` `NEW`
1. [奥迪逃单加油站员工垫付4天工资](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E8%BF%AA%E9%80%83%E5%8D%95%E5%8A%A0%E6%B2%B9%E7%AB%99%E5%91%98%E5%B7%A5%E5%9E%AB%E4%BB%984%E5%A4%A9%E5%B7%A5%E8%B5%84%23) `270.8K 🔥` `NEW`
1. [曾沛慈对王濛贴脸开大](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%AF%B9%E7%8E%8B%E6%BF%9B%E8%B4%B4%E8%84%B8%E5%BC%80%E5%A4%A7%23) `270.0K 🔥` `NEW`
1. [以军袭击致黎巴嫩2020人死6436人伤](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E8%A2%AD%E5%87%BB%E8%87%B4%E9%BB%8E%E5%B7%B4%E5%AB%A92020%E4%BA%BA%E6%AD%BB6436%E4%BA%BA%E4%BC%A4%23) `188.6K 🔥` `NEW`
1. [祝绪丹一亲嘴家里盆都端冒烟了](https://s.weibo.com/weibo?q=%23%E7%A5%9D%E7%BB%AA%E4%B8%B9%E4%B8%80%E4%BA%B2%E5%98%B4%E5%AE%B6%E9%87%8C%E7%9B%86%E9%83%BD%E7%AB%AF%E5%86%92%E7%83%9F%E4%BA%86%23) `168.9K 🔥` `NEW`
1. [好美 好难听](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E7%BE%8E%20%E5%A5%BD%E9%9A%BE%E5%90%AC%23) `167.5K 🔥` `NEW`
1. [高三学生学习困难去医院测出智障 (A senior high school student with learning difficulties went to the hospital to be diagnosed with mental retardation)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%89%E5%AD%A6%E7%94%9F%E5%AD%A6%E4%B9%A0%E5%9B%B0%E9%9A%BE%E5%8E%BB%E5%8C%BB%E9%99%A2%E6%B5%8B%E5%87%BA%E6%99%BA%E9%9A%9C%23) `163.0K 🔥` `NEW`
1. [鹿晗卖家秀邓超买家秀](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%8D%96%E5%AE%B6%E7%A7%80%E9%82%93%E8%B6%85%E4%B9%B0%E5%AE%B6%E7%A7%80%23) `161.9K 🔥` `NEW`
1. [汪东城曾沛慈平行时空同框](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E4%B8%9C%E5%9F%8E%E6%9B%BE%E6%B2%9B%E6%85%88%E5%B9%B3%E8%A1%8C%E6%97%B6%E7%A9%BA%E5%90%8C%E6%A1%86%23) `161.5K 🔥` `NEW`
1. [采茶女](https://s.weibo.com/weibo?q=%23%E9%87%87%E8%8C%B6%E5%A5%B3%23) `161.2K 🔥` `NEW`
1. [小狗也是会洗头的](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E4%B9%9F%E6%98%AF%E4%BC%9A%E6%B4%97%E5%A4%B4%E7%9A%84%23) `131.9K 🔥` `NEW`
1. [谢娜演唱会用张杰的团队](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E7%94%A8%E5%BC%A0%E6%9D%B0%E7%9A%84%E5%9B%A2%E9%98%9F%23) `121.8K 🔥` `NEW`
1. [美国逮捕伊朗前副总统儿子](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E9%80%AE%E6%8D%95%E4%BC%8A%E6%9C%97%E5%89%8D%E5%89%AF%E6%80%BB%E7%BB%9F%E5%84%BF%E5%AD%90%23) `106.7K 🔥` `NEW`
1. [葛荟婕自曝从未支付过女儿抚养费](https://s.weibo.com/weibo?q=%23%E8%91%9B%E8%8D%9F%E5%A9%95%E8%87%AA%E6%9B%9D%E4%BB%8E%E6%9C%AA%E6%94%AF%E4%BB%98%E8%BF%87%E5%A5%B3%E5%84%BF%E6%8A%9A%E5%85%BB%E8%B4%B9%23) `105.7K 🔥` `NEW`
1. [宋浩然又做医美了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%B5%A9%E7%84%B6%E5%8F%88%E5%81%9A%E5%8C%BB%E7%BE%8E%E4%BA%86%23) `103.2K 🔥` `NEW`
1. [19岁女孩回家奔丧买错车票崩溃大哭](https://s.weibo.com/weibo?q=%2319%E5%B2%81%E5%A5%B3%E5%AD%A9%E5%9B%9E%E5%AE%B6%E5%A5%94%E4%B8%A7%E4%B9%B0%E9%94%99%E8%BD%A6%E7%A5%A8%E5%B4%A9%E6%BA%83%E5%A4%A7%E5%93%AD%23) `99.4K 🔥` `NEW`
1. [时代少年团广州演唱会批文 (Times Youth League Guangzhou Concert Approval)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%B9%BF%E5%B7%9E%E6%BC%94%E5%94%B1%E4%BC%9A%E6%89%B9%E6%96%87%23) `98.9K 🔥` `NEW`
1. [萧蔷 不要哭两个没有用的](https://s.weibo.com/weibo?q=%23%E8%90%A7%E8%94%B7%20%E4%B8%8D%E8%A6%81%E5%93%AD%E4%B8%A4%E4%B8%AA%E6%B2%A1%E6%9C%89%E7%94%A8%E7%9A%84%23) `98.3K 🔥` `NEW`
1. [奥迪车加油632元后逃单](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E8%BF%AA%E8%BD%A6%E5%8A%A0%E6%B2%B9632%E5%85%83%E5%90%8E%E9%80%83%E5%8D%95%23) `90.6K 🔥` `NEW`
1. [张柏芝晒与小儿子迪士尼游玩vlog](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D%E6%99%92%E4%B8%8E%E5%B0%8F%E5%84%BF%E5%AD%90%E8%BF%AA%E5%A3%AB%E5%B0%BC%E6%B8%B8%E7%8E%A9vlog%23) `84.7K 🔥` `NEW`
1. [李楷灿绯闻女友疑似出现在nctwish物料里](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%A5%B7%E7%81%BF%E7%BB%AF%E9%97%BB%E5%A5%B3%E5%8F%8B%E7%96%91%E4%BC%BC%E5%87%BA%E7%8E%B0%E5%9C%A8nctwish%E7%89%A9%E6%96%99%E9%87%8C%23) `81.5K 🔥` `NEW`
1. [泰柬边境一电诈园内部环境曝光](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E6%9F%AC%E8%BE%B9%E5%A2%83%E4%B8%80%E7%94%B5%E8%AF%88%E5%9B%AD%E5%86%85%E9%83%A8%E7%8E%AF%E5%A2%83%E6%9B%9D%E5%85%89%23) `74.8K 🔥` `NEW`
1. [巴萨4比1西班牙人](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%90%A84%E6%AF%941%E8%A5%BF%E7%8F%AD%E7%89%99%E4%BA%BA%23) `73.2K 🔥` `NEW`
1. [宇树科技H1机器人短跑达10米每秒](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80H1%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%9F%AD%E8%B7%91%E8%BE%BE10%E7%B1%B3%E6%AF%8F%E7%A7%92%23) `72.3K 🔥` `NEW`
1. [网传浪姐二公分组](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%B5%AA%E5%A7%90%E4%BA%8C%E5%85%AC%E5%88%86%E7%BB%84%23) `72.3K 🔥` `NEW`
1. [西安一幼儿园老师粗暴对待多名幼儿](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E4%B8%80%E5%B9%BC%E5%84%BF%E5%9B%AD%E8%80%81%E5%B8%88%E7%B2%97%E6%9A%B4%E5%AF%B9%E5%BE%85%E5%A4%9A%E5%90%8D%E5%B9%BC%E5%84%BF%23) `72.1K 🔥` `NEW`
1. [莫氏鸡煲老板原本是中医 (The owner of Mo’s Chicken Pot was originally a Chinese medicine practitioner)](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E5%8E%9F%E6%9C%AC%E6%98%AF%E4%B8%AD%E5%8C%BB%23) `302.0K 🔥` `+316%`
1. [郭碧婷劝小鹿不要生二胎](https://s.weibo.com/weibo?q=%23%E9%83%AD%E7%A2%A7%E5%A9%B7%E5%8A%9D%E5%B0%8F%E9%B9%BF%E4%B8%8D%E8%A6%81%E7%94%9F%E4%BA%8C%E8%83%8E%23) `161.1K 🔥` `+113%`
1. [恭喜那些洗袜子不翻面的人](https://s.weibo.com/weibo?q=%23%E6%81%AD%E5%96%9C%E9%82%A3%E4%BA%9B%E6%B4%97%E8%A2%9C%E5%AD%90%E4%B8%8D%E7%BF%BB%E9%9D%A2%E7%9A%84%E4%BA%BA%23) `134.7K 🔥` `+77%`
1. [无忧渡](https://s.weibo.com/weibo?q=%23%E6%97%A0%E5%BF%A7%E6%B8%A1%23) `114.1K 🔥` `+53%`
1. [每天喝2杯咖啡的好处](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%A4%A9%E5%96%9D2%E6%9D%AF%E5%92%96%E5%95%A1%E7%9A%84%E5%A5%BD%E5%A4%84%23) `71.2K 🔥` `+46%`
1. [谢娜成都演唱会票价 (Xie Na Chengdu concert ticket price)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%88%90%E9%83%BD%E6%BC%94%E5%94%B1%E4%BC%9A%E7%A5%A8%E4%BB%B7%23) `311.6K 🔥`
1. [孙怡阚清子直播零互动 (Sun Yi Kan Qingzi live broadcast with zero interaction)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E9%98%9A%E6%B8%85%E5%AD%90%E7%9B%B4%E6%92%AD%E9%9B%B6%E4%BA%92%E5%8A%A8%23) `301.8K 🔥` `-46%`
1. [女子1天爬2次华山收到景区问候 (Woman climbs Mount Huashan twice in one day and receives greetings from scenic spot)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%901%E5%A4%A9%E7%88%AC2%E6%AC%A1%E5%8D%8E%E5%B1%B1%E6%94%B6%E5%88%B0%E6%99%AF%E5%8C%BA%E9%97%AE%E5%80%99%23) `274.8K 🔥` `-74%`
1. [海底捞已通知一千多家门店内部排查 (Haidilao has notified more than a thousand stores for internal inspections)](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%BA%95%E6%8D%9E%E5%B7%B2%E9%80%9A%E7%9F%A5%E4%B8%80%E5%8D%83%E5%A4%9A%E5%AE%B6%E9%97%A8%E5%BA%97%E5%86%85%E9%83%A8%E6%8E%92%E6%9F%A5%23) `161.1K 🔥` `-79%`

Updated at 2026-04-12 11:42:27

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
