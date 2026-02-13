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

1. [TF家族新年音乐会纪录片 (TF Family New Year Concert Documentary)](https://s.weibo.com/weibo?q=%23TF%E5%AE%B6%E6%97%8F%E6%96%B0%E5%B9%B4%E9%9F%B3%E4%B9%90%E4%BC%9A%E7%BA%AA%E5%BD%95%E7%89%87%23) `566.6K 🔥` `NEW`
1. [沙特空军第一款隐身战机来自中国](https://s.weibo.com/weibo?q=%23%E6%B2%99%E7%89%B9%E7%A9%BA%E5%86%9B%E7%AC%AC%E4%B8%80%E6%AC%BE%E9%9A%90%E8%BA%AB%E6%88%98%E6%9C%BA%E6%9D%A5%E8%87%AA%E4%B8%AD%E5%9B%BD%23) `135.6K 🔥` `NEW`
1. [马年来许愿](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%B9%B4%E6%9D%A5%E8%AE%B8%E6%84%BF%23) `135.0K 🔥` `NEW`
1. [小狗船上走半天发现位移为0](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E8%88%B9%E4%B8%8A%E8%B5%B0%E5%8D%8A%E5%A4%A9%E5%8F%91%E7%8E%B0%E4%BD%8D%E7%A7%BB%E4%B8%BA0%23) `134.6K 🔥` `NEW`
1. [返乡大哥打工30多年攒近300万](https://s.weibo.com/weibo?q=%23%E8%BF%94%E4%B9%A1%E5%A4%A7%E5%93%A5%E6%89%93%E5%B7%A530%E5%A4%9A%E5%B9%B4%E6%94%92%E8%BF%91300%E4%B8%87%23) `134.4K 🔥` `NEW`
1. [官方回应湛江发现儒艮尸体](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E6%B9%9B%E6%B1%9F%E5%8F%91%E7%8E%B0%E5%84%92%E8%89%AE%E5%B0%B8%E4%BD%93%23) `134.4K 🔥` `NEW`
1. [衡水中学变了](https://s.weibo.com/weibo?q=%23%E8%A1%A1%E6%B0%B4%E4%B8%AD%E5%AD%A6%E5%8F%98%E4%BA%86%23) `133.9K 🔥` `NEW`
1. [偶遇向佐郭碧婷带女儿买衣服](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E5%90%91%E4%BD%90%E9%83%AD%E7%A2%A7%E5%A9%B7%E5%B8%A6%E5%A5%B3%E5%84%BF%E4%B9%B0%E8%A1%A3%E6%9C%8D%23) `133.6K 🔥` `NEW`
1. [女子为喝中药不苦嘴里塞塑料袋](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%BA%E5%96%9D%E4%B8%AD%E8%8D%AF%E4%B8%8D%E8%8B%A6%E5%98%B4%E9%87%8C%E5%A1%9E%E5%A1%91%E6%96%99%E8%A2%8B%23) `133.5K 🔥` `NEW`
1. [加拿大小偷已经放飞自我了](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%8B%BF%E5%A4%A7%E5%B0%8F%E5%81%B7%E5%B7%B2%E7%BB%8F%E6%94%BE%E9%A3%9E%E8%87%AA%E6%88%91%E4%BA%86%23) `132.8K 🔥` `NEW`
1. [TFING直播 (TFING live broadcast)](https://s.weibo.com/weibo?q=%23TFING%E7%9B%B4%E6%92%AD%23) `132.4K 🔥` `NEW`
1. [黄景瑜第一次吃到了身高的苦](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%AF%E7%91%9C%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%90%83%E5%88%B0%E4%BA%86%E8%BA%AB%E9%AB%98%E7%9A%84%E8%8B%A6%23) `131.4K 🔥` `NEW`
1. [关于婆婆带我花两百块烫了个头](https://s.weibo.com/weibo?q=%23%E5%85%B3%E4%BA%8E%E5%A9%86%E5%A9%86%E5%B8%A6%E6%88%91%E8%8A%B1%E4%B8%A4%E7%99%BE%E5%9D%97%E7%83%AB%E4%BA%86%E4%B8%AA%E5%A4%B4%23) `107.2K 🔥` `NEW`
1. [女童下楼扔垃圾找到悬赏2000元走失猫](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%AB%A5%E4%B8%8B%E6%A5%BC%E6%89%94%E5%9E%83%E5%9C%BE%E6%89%BE%E5%88%B0%E6%82%AC%E8%B5%8F2000%E5%85%83%E8%B5%B0%E5%A4%B1%E7%8C%AB%23) `107.2K 🔥` `NEW`
1. [男子闯入女浴室2分钟吓坏换衣女子](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%97%AF%E5%85%A5%E5%A5%B3%E6%B5%B4%E5%AE%A42%E5%88%86%E9%92%9F%E5%90%93%E5%9D%8F%E6%8D%A2%E8%A1%A3%E5%A5%B3%E5%AD%90%23) `106.2K 🔥` `NEW`
1. [车厘子或痛失年货水果头把交椅](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E5%8E%98%E5%AD%90%E6%88%96%E7%97%9B%E5%A4%B1%E5%B9%B4%E8%B4%A7%E6%B0%B4%E6%9E%9C%E5%A4%B4%E6%8A%8A%E4%BA%A4%E6%A4%85%23) `104.2K 🔥` `NEW`
1. [可以坐我车但不能突然坐我车](https://s.weibo.com/weibo?q=%23%E5%8F%AF%E4%BB%A5%E5%9D%90%E6%88%91%E8%BD%A6%E4%BD%86%E4%B8%8D%E8%83%BD%E7%AA%81%E7%84%B6%E5%9D%90%E6%88%91%E8%BD%A6%23) `98.8K 🔥` `NEW`
1. [13年后天娱又签了选秀冠军 (Houtian Entertainment signed another draft winner in 2013)](https://s.weibo.com/weibo?q=%2313%E5%B9%B4%E5%90%8E%E5%A4%A9%E5%A8%B1%E5%8F%88%E7%AD%BE%E4%BA%86%E9%80%89%E7%A7%80%E5%86%A0%E5%86%9B%23) `773.0K 🔥` `+348%`
1. [任子威首个且唯一1000米奥运冠军](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%AD%90%E5%A8%81%E9%A6%96%E4%B8%AA%E4%B8%94%E5%94%AF%E4%B8%801000%E7%B1%B3%E5%A5%A5%E8%BF%90%E5%86%A0%E5%86%9B%23) `269.8K 🔥` `+228%`
1. [苍蝇搓手为什么会意外截头](https://s.weibo.com/weibo?q=%23%E8%8B%8D%E8%9D%87%E6%90%93%E6%89%8B%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BC%9A%E6%84%8F%E5%A4%96%E6%88%AA%E5%A4%B4%23) `135.3K 🔥` `+73%`
1. [Angelababy兔耳朵撕拉片](https://s.weibo.com/weibo?q=%23Angelababy%E5%85%94%E8%80%B3%E6%9C%B5%E6%92%95%E6%8B%89%E7%89%87%23) `134.2K 🔥` `+29%`
1. [王艺瑾你对你的脸做了什么 (Wang Yijin, what did you do to your face?)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%89%BA%E7%91%BE%E4%BD%A0%E5%AF%B9%E4%BD%A0%E7%9A%84%E8%84%B8%E5%81%9A%E4%BA%86%E4%BB%80%E4%B9%88%23) `133.2K 🔥` `+33%`
1. [马上有乾崑好事即发生](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%B8%8A%E6%9C%89%E4%B9%BE%E5%B4%91%E5%A5%BD%E4%BA%8B%E5%8D%B3%E5%8F%91%E7%94%9F%23) `133.0K 🔥` `+71%`
1. [惠英红的眉眼 棠夫人的灵魂 (Hui Yinghong’s eyebrows and Mrs. Tang’s soul)](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%E7%9A%84%E7%9C%89%E7%9C%BC%20%E6%A3%A0%E5%A4%AB%E4%BA%BA%E7%9A%84%E7%81%B5%E9%AD%82%23) `132.6K 🔥` `+64%`
1. [WB对战狼队](https://s.weibo.com/weibo?q=%23WB%E5%AF%B9%E6%88%98%E7%8B%BC%E9%98%9F%23) `105.1K 🔥` `+34%`
1. [陈哲远回家过年](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E5%9B%9E%E5%AE%B6%E8%BF%87%E5%B9%B4%23) `104.9K 🔥` `+27%`
1. [B站春晚节目单来了](https://s.weibo.com/weibo?q=%23B%E7%AB%99%E6%98%A5%E6%99%9A%E8%8A%82%E7%9B%AE%E5%8D%95%E6%9D%A5%E4%BA%86%23) `104.1K 🔥` `+32%`
1. [薛之谦广州站官宣 (Joker Xue Guangzhou station official announcement)](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E5%B9%BF%E5%B7%9E%E7%AB%99%E5%AE%98%E5%AE%A3%23) `100.0K 🔥` `+21%`
1. [杭州大哥开1人公司靠AI月入200万 (Hangzhou eldest brother opens a one-person company and earns 2 million a month through AI)](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E5%A4%A7%E5%93%A5%E5%BC%801%E4%BA%BA%E5%85%AC%E5%8F%B8%E9%9D%A0AI%E6%9C%88%E5%85%A5200%E4%B8%87%23) `1.1M 🔥`
1. [战马贺春热血沸腾 (The war horse He Chun's blood is boiling)](https://s.weibo.com/weibo?q=%23%E6%88%98%E9%A9%AC%E8%B4%BA%E6%98%A5%E7%83%AD%E8%A1%80%E6%B2%B8%E8%85%BE%23) `620.4K 🔥`
1. [父母花了几十万装修的房子 (My parents spent hundreds of thousands renovating the house)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E8%8A%B1%E4%BA%86%E5%87%A0%E5%8D%81%E4%B8%87%E8%A3%85%E4%BF%AE%E7%9A%84%E6%88%BF%E5%AD%90%23) `178.0K 🔥`
1. [中戏已有两位表演系主任主动投案](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%88%8F%E5%B7%B2%E6%9C%89%E4%B8%A4%E4%BD%8D%E8%A1%A8%E6%BC%94%E7%B3%BB%E4%B8%BB%E4%BB%BB%E4%B8%BB%E5%8A%A8%E6%8A%95%E6%A1%88%23) `135.1K 🔥`
1. [前女友送的40克银镯子内含30克黄金](https://s.weibo.com/weibo?q=%23%E5%89%8D%E5%A5%B3%E5%8F%8B%E9%80%81%E7%9A%8440%E5%85%8B%E9%93%B6%E9%95%AF%E5%AD%90%E5%86%85%E5%90%AB30%E5%85%8B%E9%BB%84%E9%87%91%23) `134.9K 🔥`
1. [爱泼斯坦假尸体事件披露](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E5%81%87%E5%B0%B8%E4%BD%93%E4%BA%8B%E4%BB%B6%E6%8A%AB%E9%9C%B2%23) `134.8K 🔥`
1. [主动投案的王鑫是易烊千玺等人老师](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E5%8A%A8%E6%8A%95%E6%A1%88%E7%9A%84%E7%8E%8B%E9%91%AB%E6%98%AF%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E7%AD%89%E4%BA%BA%E8%80%81%E5%B8%88%23) `134.1K 🔥`
1. [瑶一瑶藏剪刀被安检发现 (Yao Yiyao’s hidden scissors were discovered by security)](https://s.weibo.com/weibo?q=%23%E7%91%B6%E4%B8%80%E7%91%B6%E8%97%8F%E5%89%AA%E5%88%80%E8%A2%AB%E5%AE%89%E6%A3%80%E5%8F%91%E7%8E%B0%23) `133.8K 🔥`
1. [虞书欣每天一杯奶茶 (Yu Shuxin drinks a cup of milk tea every day)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%AF%8F%E5%A4%A9%E4%B8%80%E6%9D%AF%E5%A5%B6%E8%8C%B6%23) `133.4K 🔥`
1. [马克龙获赠中国龙谕](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%85%8B%E9%BE%99%E8%8E%B7%E8%B5%A0%E4%B8%AD%E5%9B%BD%E9%BE%99%E8%B0%95%23) `133.1K 🔥`
1. [任敏回老家也得穿省服 (Ren Min also has to wear provincial clothes when she returns to her hometown.)](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%95%8F%E5%9B%9E%E8%80%81%E5%AE%B6%E4%B9%9F%E5%BE%97%E7%A9%BF%E7%9C%81%E6%9C%8D%23) `132.7K 🔥`
1. [A股蛇年十大牛股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E8%9B%87%E5%B9%B4%E5%8D%81%E5%A4%A7%E7%89%9B%E8%82%A1%23) `132.5K 🔥`
1. [宋雨琦跳了张函瑞进行曲](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E8%B7%B3%E4%BA%86%E5%BC%A0%E5%87%BD%E7%91%9E%E8%BF%9B%E8%A1%8C%E6%9B%B2%23) `98.5K 🔥`
1. [章若楠王安宇新剧开机](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E7%8E%8B%E5%AE%89%E5%AE%87%E6%96%B0%E5%89%A7%E5%BC%80%E6%9C%BA%23) `153.6K 🔥` `-43%`
1. [公司利润2.7亿拿1.8亿发年终奖 (The company made a profit of 270 million and received a year-end bonus of 180 million)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E5%88%A9%E6%B6%A62.7%E4%BA%BF%E6%8B%BF1.8%E4%BA%BF%E5%8F%91%E5%B9%B4%E7%BB%88%E5%A5%96%23) `143.4K 🔥` `-38%`
1. [华为内部反腐通报](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%86%85%E9%83%A8%E5%8F%8D%E8%85%90%E9%80%9A%E6%8A%A5%23) `135.7K 🔥` `-83%`
1. [关晓彤从小巷人家到大厂子弟](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E4%BB%8E%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B6%E5%88%B0%E5%A4%A7%E5%8E%82%E5%AD%90%E5%BC%9F%23) `135.6K 🔥` `-39%`
1. [中戏发生了什么 (What happened in the drama)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%88%8F%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88%23) `135.5K 🔥` `-38%`
1. [除夕来京东抽1折机器人](https://s.weibo.com/weibo?q=%23%E9%99%A4%E5%A4%95%E6%9D%A5%E4%BA%AC%E4%B8%9C%E6%8A%BD1%E6%8A%98%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `106.5K 🔥` `-25%`
1. [白鹿李昀锐春晚造型](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9D%8E%E6%98%80%E9%94%90%E6%98%A5%E6%99%9A%E9%80%A0%E5%9E%8B%23) `105.6K 🔥` `-26%`

Updated at 2026-02-13 18:39:46

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
