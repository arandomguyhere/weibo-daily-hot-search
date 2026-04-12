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

1. [何超蕸去世 (He Chaogui passed away)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E8%95%B8%E5%8E%BB%E4%B8%96%23) `3.9M 🔥` `NEW`
1. [这个大国重器够重](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%AA%E5%A4%A7%E5%9B%BD%E9%87%8D%E5%99%A8%E5%A4%9F%E9%87%8D%23) `897.4K 🔥` `NEW`
1. [韩国机场缉毒犬吃掉可疑蛋糕](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%9C%BA%E5%9C%BA%E7%BC%89%E6%AF%92%E7%8A%AC%E5%90%83%E6%8E%89%E5%8F%AF%E7%96%91%E8%9B%8B%E7%B3%95%23) `713.9K 🔥` `NEW`
1. [张杰力挺谢娜演唱会](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E5%8A%9B%E6%8C%BA%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%23) `378.4K 🔥` `NEW`
1. [2025中国篮球名人堂入堂仪式](https://s.weibo.com/weibo?q=%232025%E4%B8%AD%E5%9B%BD%E7%AF%AE%E7%90%83%E5%90%8D%E4%BA%BA%E5%A0%82%E5%85%A5%E5%A0%82%E4%BB%AA%E5%BC%8F%23) `327.3K 🔥` `NEW`
1. [东北阿姨煮泡面情绪价值拉满](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%8C%97%E9%98%BF%E5%A7%A8%E7%85%AE%E6%B3%A1%E9%9D%A2%E6%83%85%E7%BB%AA%E4%BB%B7%E5%80%BC%E6%8B%89%E6%BB%A1%23) `268.7K 🔥` `NEW`
1. [宁艺卓 我再也不玩抽象了](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%20%E6%88%91%E5%86%8D%E4%B9%9F%E4%B8%8D%E7%8E%A9%E6%8A%BD%E8%B1%A1%E4%BA%86%23) `230.1K 🔥` `NEW`
1. [何宣林二公分组](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%E4%BA%8C%E5%85%AC%E5%88%86%E7%BB%84%23) `183.6K 🔥` `NEW`
1. [王濛剪蕾丝](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%89%AA%E8%95%BE%E4%B8%9D%23) `154.9K 🔥` `NEW`
1. [我家那小子](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E9%82%A3%E5%B0%8F%E5%AD%90%23) `144.0K 🔥` `NEW`
1. [逃单奥迪车驾驶人已被拘留 (The driver of an Audi who escaped from traffic has been detained)](https://s.weibo.com/weibo?q=%23%E9%80%83%E5%8D%95%E5%A5%A5%E8%BF%AA%E8%BD%A6%E9%A9%BE%E9%A9%B6%E4%BA%BA%E5%B7%B2%E8%A2%AB%E6%8B%98%E7%95%99%23) `143.4K 🔥` `NEW`
1. [成都赵公山发现一具男性遗体](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E8%B5%B5%E5%85%AC%E5%B1%B1%E5%8F%91%E7%8E%B0%E4%B8%80%E5%85%B7%E7%94%B7%E6%80%A7%E9%81%97%E4%BD%93%23) `134.5K 🔥` `NEW`
1. [妈妈替女儿申请不上早读](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E6%9B%BF%E5%A5%B3%E5%84%BF%E7%94%B3%E8%AF%B7%E4%B8%8D%E4%B8%8A%E6%97%A9%E8%AF%BB%23) `123.4K 🔥` `NEW`
1. [A股全面适用盘后固定价格交易](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%85%A8%E9%9D%A2%E9%80%82%E7%94%A8%E7%9B%98%E5%90%8E%E5%9B%BA%E5%AE%9A%E4%BB%B7%E6%A0%BC%E4%BA%A4%E6%98%93%23) `111.7K 🔥` `NEW`
1. [苏新皓飞吻](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E9%A3%9E%E5%90%BB%23) `104.0K 🔥` `NEW`
1. [王婆说媒现场21男嘉宾抢1女嘉宾](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%A9%86%E8%AF%B4%E5%AA%92%E7%8E%B0%E5%9C%BA21%E7%94%B7%E5%98%89%E5%AE%BE%E6%8A%A21%E5%A5%B3%E5%98%89%E5%AE%BE%23) `99.2K 🔥` `NEW`
1. [37岁男子癌症去世留下一双儿女](https://s.weibo.com/weibo?q=%2337%E5%B2%81%E7%94%B7%E5%AD%90%E7%99%8C%E7%97%87%E5%8E%BB%E4%B8%96%E7%95%99%E4%B8%8B%E4%B8%80%E5%8F%8C%E5%84%BF%E5%A5%B3%23) `93.0K 🔥` `NEW`
1. [澳门听到藏海传主题曲了](https://s.weibo.com/weibo?q=%23%E6%BE%B3%E9%97%A8%E5%90%AC%E5%88%B0%E8%97%8F%E6%B5%B7%E4%BC%A0%E4%B8%BB%E9%A2%98%E6%9B%B2%E4%BA%86%23) `84.1K 🔥` `NEW`
1. [三代韩国女团成员闯中态度](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BB%A3%E9%9F%A9%E5%9B%BD%E5%A5%B3%E5%9B%A2%E6%88%90%E5%91%98%E9%97%AF%E4%B8%AD%E6%80%81%E5%BA%A6%23) `82.6K 🔥` `NEW`
1. [这才是音乐节该有的样子](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%89%8D%E6%98%AF%E9%9F%B3%E4%B9%90%E8%8A%82%E8%AF%A5%E6%9C%89%E7%9A%84%E6%A0%B7%E5%AD%90%23) `82.4K 🔥` `NEW`
1. [txt直播 (txt live broadcast)](https://s.weibo.com/weibo?q=%23txt%E7%9B%B4%E6%92%AD%23) `80.6K 🔥` `NEW`
1. [卫星互联网技术试验卫星发射任务圆满成功](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E6%98%9F%E4%BA%92%E8%81%94%E7%BD%91%E6%8A%80%E6%9C%AF%E8%AF%95%E9%AA%8C%E5%8D%AB%E6%98%9F%E5%8F%91%E5%B0%84%E4%BB%BB%E5%8A%A1%E5%9C%86%E6%BB%A1%E6%88%90%E5%8A%9F%23) `74.9K 🔥` `NEW`
1. [常州暂时改名常洲](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E5%B7%9E%E6%9A%82%E6%97%B6%E6%94%B9%E5%90%8D%E5%B8%B8%E6%B4%B2%23) `74.7K 🔥` `NEW`
1. [美国博主被凉山孩子问到挠头](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%8D%9A%E4%B8%BB%E8%A2%AB%E5%87%89%E5%B1%B1%E5%AD%A9%E5%AD%90%E9%97%AE%E5%88%B0%E6%8C%A0%E5%A4%B4%23) `74.6K 🔥` `NEW`
1. [95后姑娘养6万多条毒蛇年入百万](https://s.weibo.com/weibo?q=%2395%E5%90%8E%E5%A7%91%E5%A8%98%E5%85%BB6%E4%B8%87%E5%A4%9A%E6%9D%A1%E6%AF%92%E8%9B%87%E5%B9%B4%E5%85%A5%E7%99%BE%E4%B8%87%23) `284.8K 🔥` `+83%`
1. [美军宣布在霍尔木兹海峡扫雷](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E5%AE%A3%E5%B8%83%E5%9C%A8%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E6%89%AB%E9%9B%B7%23) `281.2K 🔥` `+93%`
1. [70多款机器人深夜竞速](https://s.weibo.com/weibo?q=%2370%E5%A4%9A%E6%AC%BE%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%B7%B1%E5%A4%9C%E7%AB%9E%E9%80%9F%23) `260.9K 🔥` `+302%`
1. [杨超越 虎鲸](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%20%E8%99%8E%E9%B2%B8%23) `253.4K 🔥` `+261%`
1. [孙怡阚清子直播零互动 (Sun Yi Kan Qingzi live broadcast with zero interaction)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E9%98%9A%E6%B8%85%E5%AD%90%E7%9B%B4%E6%92%AD%E9%9B%B6%E4%BA%92%E5%8A%A8%23) `250.7K 🔥` `+63%`
1. [王濛 色令智昏](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%20%E8%89%B2%E4%BB%A4%E6%99%BA%E6%98%8F%23) `225.0K 🔥` `+49%`
1. [高三学生学习困难去医院测出智障 (A senior high school student with learning difficulties went to the hospital to be diagnosed with mental retardation)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%89%E5%AD%A6%E7%94%9F%E5%AD%A6%E4%B9%A0%E5%9B%B0%E9%9A%BE%E5%8E%BB%E5%8C%BB%E9%99%A2%E6%B5%8B%E5%87%BA%E6%99%BA%E9%9A%9C%23) `203.3K 🔥` `+34%`
1. [胡先煦十日终焉被曝1天杀青](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E8%A2%AB%E6%9B%9D1%E5%A4%A9%E6%9D%80%E9%9D%92%23) `200.9K 🔥` `+31%`
1. [光与夜之恋 (Love of light and night)](https://s.weibo.com/weibo?q=%23%E5%85%89%E4%B8%8E%E5%A4%9C%E4%B9%8B%E6%81%8B%23) `192.2K 🔥` `+92%`
1. [你们俩是要毁了芒果吗 (Are you two going to destroy the mango?)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%BB%AC%E4%BF%A9%E6%98%AF%E8%A6%81%E6%AF%81%E4%BA%86%E8%8A%92%E6%9E%9C%E5%90%97%23) `1.1M 🔥`
1. [90后女子后背疼9分钟完成心梗自救](https://s.weibo.com/weibo?q=%2390%E5%90%8E%E5%A5%B3%E5%AD%90%E5%90%8E%E8%83%8C%E7%96%BC9%E5%88%86%E9%92%9F%E5%AE%8C%E6%88%90%E5%BF%83%E6%A2%97%E8%87%AA%E6%95%91%23) `234.0K 🔥`
1. [孙怡直播啃火腿肠](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E7%9B%B4%E6%92%AD%E5%95%83%E7%81%AB%E8%85%BF%E8%82%A0%23) `202.5K 🔥`
1. [郭碧婷生二胎后花好几年才瘦下来](https://s.weibo.com/weibo?q=%23%E9%83%AD%E7%A2%A7%E5%A9%B7%E7%94%9F%E4%BA%8C%E8%83%8E%E5%90%8E%E8%8A%B1%E5%A5%BD%E5%87%A0%E5%B9%B4%E6%89%8D%E7%98%A6%E4%B8%8B%E6%9D%A5%23) `142.9K 🔥`
1. [孟子义突发身体不适 (Meng Ziyi suddenly felt unwell)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E7%AA%81%E5%8F%91%E8%BA%AB%E4%BD%93%E4%B8%8D%E9%80%82%23) `141.7K 🔥`
1. [美向伊朗提出最终方案](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%90%91%E4%BC%8A%E6%9C%97%E6%8F%90%E5%87%BA%E6%9C%80%E7%BB%88%E6%96%B9%E6%A1%88%23) `140.3K 🔥`
1. [大冰告诫年轻人不要在单位聊私事 (Dabing warns young people not to talk about private matters at work)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E5%91%8A%E8%AF%AB%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%B8%8D%E8%A6%81%E5%9C%A8%E5%8D%95%E4%BD%8D%E8%81%8A%E7%A7%81%E4%BA%8B%23) `137.6K 🔥`
1. [护住周深的常州保安火了](https://s.weibo.com/weibo?q=%23%E6%8A%A4%E4%BD%8F%E5%91%A8%E6%B7%B1%E7%9A%84%E5%B8%B8%E5%B7%9E%E4%BF%9D%E5%AE%89%E7%81%AB%E4%BA%86%23) `95.7K 🔥`
1. [朱志鑫 师傅你快走啊 (Zhu Zhixin, master, please leave quickly.)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%20%E5%B8%88%E5%82%85%E4%BD%A0%E5%BF%AB%E8%B5%B0%E5%95%8A%23) `84.2K 🔥`
1. [上海福建居民赴台个人游试点 (Pilot program for Shanghai and Fujian residents to travel to Taiwan for individual travel)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E7%A6%8F%E5%BB%BA%E5%B1%85%E6%B0%91%E8%B5%B4%E5%8F%B0%E4%B8%AA%E4%BA%BA%E6%B8%B8%E8%AF%95%E7%82%B9%23) `75.2K 🔥`
1. [赵子琪 一分钟不多呆](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%20%E4%B8%80%E5%88%86%E9%92%9F%E4%B8%8D%E5%A4%9A%E5%91%86%23) `360.7K 🔥` `-32%`
1. [野生母狼怀孕后主动到保护站待产 (After becoming pregnant, a wild female wolf takes the initiative to go to the conservation station to wait for her birth)](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%94%9F%E6%AF%8D%E7%8B%BC%E6%80%80%E5%AD%95%E5%90%8E%E4%B8%BB%E5%8A%A8%E5%88%B0%E4%BF%9D%E6%8A%A4%E7%AB%99%E5%BE%85%E4%BA%A7%23) `144.3K 🔥` `-84%`
1. [王曼昱我再启航](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E6%88%91%E5%86%8D%E5%90%AF%E8%88%AA%23) `117.4K 🔥` `-24%`
1. [曝旺仔小乔要复出了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%97%BA%E4%BB%94%E5%B0%8F%E4%B9%94%E8%A6%81%E5%A4%8D%E5%87%BA%E4%BA%86%23) `115.7K 🔥` `-23%`
1. [伊朗媒体公布伊美谈判过程](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AA%92%E4%BD%93%E5%85%AC%E5%B8%83%E4%BC%8A%E7%BE%8E%E8%B0%88%E5%88%A4%E8%BF%87%E7%A8%8B%23) `84.0K 🔥` `-44%`
1. [不要穿浅色去做妆造 (Don’t wear light colors for makeup)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E7%A9%BF%E6%B5%85%E8%89%B2%E5%8E%BB%E5%81%9A%E5%A6%86%E9%80%A0%23) `82.2K 🔥` `-46%`
1. [鹿晗卖家秀邓超买家秀](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%8D%96%E5%AE%B6%E7%A7%80%E9%82%93%E8%B6%85%E4%B9%B0%E5%AE%B6%E7%A7%80%23) `82.2K 🔥` `-23%`
1. [张凌赫小狗塑是田曦薇的限定款](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%B0%8F%E7%8B%97%E5%A1%91%E6%98%AF%E7%94%B0%E6%9B%A6%E8%96%87%E7%9A%84%E9%99%90%E5%AE%9A%E6%AC%BE%23) `74.9K 🔥` `-48%`

Updated at 2026-04-12 14:58:57

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
