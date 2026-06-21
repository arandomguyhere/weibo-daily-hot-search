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

1. [国乒全员淘汰 (All members of the national table tennis team eliminated)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%85%A8%E5%91%98%E6%B7%98%E6%B1%B0%23) `1.9M 🔥` `NEW`
1. [雷军说当初不该和董明珠打赌](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E8%AF%B4%E5%BD%93%E5%88%9D%E4%B8%8D%E8%AF%A5%E5%92%8C%E8%91%A3%E6%98%8E%E7%8F%A0%E6%89%93%E8%B5%8C%23) `1.3M 🔥` `NEW`
1. [张靓颖清唱太多被罚款](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9D%93%E9%A2%96%E6%B8%85%E5%94%B1%E5%A4%AA%E5%A4%9A%E8%A2%AB%E7%BD%9A%E6%AC%BE%23) `983.4K 🔥` `NEW`
1. [陈小春边哭边改](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%8F%E6%98%A5%E8%BE%B9%E5%93%AD%E8%BE%B9%E6%94%B9%23) `524.3K 🔥` `NEW`
1. [董路直言我不欣赏马宁](https://s.weibo.com/weibo?q=%23%E8%91%A3%E8%B7%AF%E7%9B%B4%E8%A8%80%E6%88%91%E4%B8%8D%E6%AC%A3%E8%B5%8F%E9%A9%AC%E5%AE%81%23) `522.3K 🔥` `NEW`
1. [西班牙首发](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E9%A6%96%E5%8F%91%23) `496.9K 🔥` `NEW`
1. [一诺回归击杀榜一](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E5%9B%9E%E5%BD%92%E5%87%BB%E6%9D%80%E6%A6%9C%E4%B8%80%23) `335.9K 🔥` `NEW`
1. [向太拉黑向佑后首次联系](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E6%8B%89%E9%BB%91%E5%90%91%E4%BD%91%E5%90%8E%E9%A6%96%E6%AC%A1%E8%81%94%E7%B3%BB%23) `334.7K 🔥` `NEW`
1. [路人对着关晓彤喊鹿晗](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E4%BA%BA%E5%AF%B9%E7%9D%80%E5%85%B3%E6%99%93%E5%BD%A4%E5%96%8A%E9%B9%BF%E6%99%97%23) `333.0K 🔥` `NEW`
1. [马宁梅西名场面](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%AE%81%E6%A2%85%E8%A5%BF%E5%90%8D%E5%9C%BA%E9%9D%A2%23) `330.9K 🔥` `NEW`
1. [月经弄脏火车床单女子再发声 (Woman speaks out again after menstruation stained train sheets)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E7%BB%8F%E5%BC%84%E8%84%8F%E7%81%AB%E8%BD%A6%E5%BA%8A%E5%8D%95%E5%A5%B3%E5%AD%90%E5%86%8D%E5%8F%91%E5%A3%B0%23) `325.2K 🔥` `NEW`
1. [杨舒予余承恩解锁Prada米兰秀场](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%88%92%E4%BA%88%E4%BD%99%E6%89%BF%E6%81%A9%E8%A7%A3%E9%94%81Prada%E7%B1%B3%E5%85%B0%E7%A7%80%E5%9C%BA%23) `323.7K 🔥` `NEW`
1. [家里4个地方是霉菌重灾区](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%87%8C4%E4%B8%AA%E5%9C%B0%E6%96%B9%E6%98%AF%E9%9C%89%E8%8F%8C%E9%87%8D%E7%81%BE%E5%8C%BA%23) `312.1K 🔥` `NEW`
1. [搞砸了赖伟明的暗恋](https://s.weibo.com/weibo?q=%23%E6%90%9E%E7%A0%B8%E4%BA%86%E8%B5%96%E4%BC%9F%E6%98%8E%E7%9A%84%E6%9A%97%E6%81%8B%23) `308.8K 🔥` `NEW`
1. [纸尿裤调查记者质疑企业送检数据](https://s.weibo.com/weibo?q=%23%E7%BA%B8%E5%B0%BF%E8%A3%A4%E8%B0%83%E6%9F%A5%E8%AE%B0%E8%80%85%E8%B4%A8%E7%96%91%E4%BC%81%E4%B8%9A%E9%80%81%E6%A3%80%E6%95%B0%E6%8D%AE%23) `305.8K 🔥` `NEW`
1. [美国与伊朗在瑞士会谈开始](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%B8%8E%E4%BC%8A%E6%9C%97%E5%9C%A8%E7%91%9E%E5%A3%AB%E4%BC%9A%E8%B0%88%E5%BC%80%E5%A7%8B%23) `305.7K 🔥` `NEW`
1. [杨博文忘了cos值等于零的角是90度](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%8D%9A%E6%96%87%E5%BF%98%E4%BA%86cos%E5%80%BC%E7%AD%89%E4%BA%8E%E9%9B%B6%E7%9A%84%E8%A7%92%E6%98%AF90%E5%BA%A6%23) `305.7K 🔥` `NEW`
1. [顾客称爱犬被海底捞带办公室后死亡](https://s.weibo.com/weibo?q=%23%E9%A1%BE%E5%AE%A2%E7%A7%B0%E7%88%B1%E7%8A%AC%E8%A2%AB%E6%B5%B7%E5%BA%95%E6%8D%9E%E5%B8%A6%E5%8A%9E%E5%85%AC%E5%AE%A4%E5%90%8E%E6%AD%BB%E4%BA%A1%23) `291.8K 🔥` `NEW`
1. [学渣学霸写作业状态区别](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E6%B8%A3%E5%AD%A6%E9%9C%B8%E5%86%99%E4%BD%9C%E4%B8%9A%E7%8A%B6%E6%80%81%E5%8C%BA%E5%88%AB%23) `280.7K 🔥` `NEW`
1. [张月陈瑶 想见你想见你想见你](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E9%99%88%E7%91%B6%20%E6%83%B3%E8%A7%81%E4%BD%A0%E6%83%B3%E8%A7%81%E4%BD%A0%E6%83%B3%E8%A7%81%E4%BD%A0%23) `279.4K 🔥` `NEW`
1. [张丹峰张镐濂父亲节大片 (Zhang Danfeng and Zhang Haolian's Father's Day blockbuster)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%B8%B9%E5%B3%B0%E5%BC%A0%E9%95%90%E6%BF%82%E7%88%B6%E4%BA%B2%E8%8A%82%E5%A4%A7%E7%89%87%23) `266.4K 🔥` `NEW`
1. [孩子体内的甲酰胺从何而来](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E4%BD%93%E5%86%85%E7%9A%84%E7%94%B2%E9%85%B0%E8%83%BA%E4%BB%8E%E4%BD%95%E8%80%8C%E6%9D%A5%23) `235.6K 🔥` `NEW`
1. [等风热吻你网传全换新人](https://s.weibo.com/weibo?q=%23%E7%AD%89%E9%A3%8E%E7%83%AD%E5%90%BB%E4%BD%A0%E7%BD%91%E4%BC%A0%E5%85%A8%E6%8D%A2%E6%96%B0%E4%BA%BA%23) `235.6K 🔥` `NEW`
1. [C罗B费打破队内不和传言](https://s.weibo.com/weibo?q=%23C%E7%BD%97B%E8%B4%B9%E6%89%93%E7%A0%B4%E9%98%9F%E5%86%85%E4%B8%8D%E5%92%8C%E4%BC%A0%E8%A8%80%23) `221.8K 🔥` `NEW`
1. [伊朗球员上场前体能已透支](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%90%83%E5%91%98%E4%B8%8A%E5%9C%BA%E5%89%8D%E4%BD%93%E8%83%BD%E5%B7%B2%E9%80%8F%E6%94%AF%23) `220.4K 🔥` `NEW`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `212.1K 🔥` `NEW`
1. [王濛李小冉 落泪情绪零碎](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E6%9D%8E%E5%B0%8F%E5%86%89%20%E8%90%BD%E6%B3%AA%E6%83%85%E7%BB%AA%E9%9B%B6%E7%A2%8E%23) `210.6K 🔥` `NEW`
1. [供应链已向折叠iPhone供货](https://s.weibo.com/weibo?q=%23%E4%BE%9B%E5%BA%94%E9%93%BE%E5%B7%B2%E5%90%91%E6%8A%98%E5%8F%A0iPhone%E4%BE%9B%E8%B4%A7%23) `179.8K 🔥` `NEW`
1. [龙舟经济火爆](https://s.weibo.com/weibo?q=%23%E9%BE%99%E8%88%9F%E7%BB%8F%E6%B5%8E%E7%81%AB%E7%88%86%23) `1.3M 🔥` `+99%`
1. [爸爸不收红包是全国统一的吗 (Is it a nationwide rule that dads don’t accept red envelopes?)](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E4%B8%8D%E6%94%B6%E7%BA%A2%E5%8C%85%E6%98%AF%E5%85%A8%E5%9B%BD%E7%BB%9F%E4%B8%80%E7%9A%84%E5%90%97%23) `1.3M 🔥` `+102%`
1. [赖伟明21年给刘浩存视频的评论 (Lai Weiming’s comments on Liu Haocun’s video in 2021)](https://s.weibo.com/weibo?q=%23%E8%B5%96%E4%BC%9F%E6%98%8E21%E5%B9%B4%E7%BB%99%E5%88%98%E6%B5%A9%E5%AD%98%E8%A7%86%E9%A2%91%E7%9A%84%E8%AF%84%E8%AE%BA%23) `418.8K 🔥` `+61%`
1. [卢昱晓重游英国](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E9%87%8D%E6%B8%B8%E8%8B%B1%E5%9B%BD%23) `327.9K 🔥` `+21%`
1. [退租一年了房东还在帮我卖冰箱 (One year after I quit my lease, my landlord is still helping me sell my refrigerator.)](https://s.weibo.com/weibo?q=%23%E9%80%80%E7%A7%9F%E4%B8%80%E5%B9%B4%E4%BA%86%E6%88%BF%E4%B8%9C%E8%BF%98%E5%9C%A8%E5%B8%AE%E6%88%91%E5%8D%96%E5%86%B0%E7%AE%B1%23) `319.5K 🔥` `+75%`
1. [磷酸铁锂卖爆了](https://s.weibo.com/weibo?q=%23%E7%A3%B7%E9%85%B8%E9%93%81%E9%94%82%E5%8D%96%E7%88%86%E4%BA%86%23) `317.4K 🔥` `+22%`
1. [李耕耘 你们还要怎样](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%80%95%E8%80%98%20%E4%BD%A0%E4%BB%AC%E8%BF%98%E8%A6%81%E6%80%8E%E6%A0%B7%23) `316.7K 🔥` `+21%`
1. [罗永浩误吃安眠药](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E8%AF%AF%E5%90%83%E5%AE%89%E7%9C%A0%E8%8D%AF%23) `306.1K 🔥` `+88%`
1. [曝白玉兰场刊是各家团队自己撰写的](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BD%E7%8E%89%E5%85%B0%E5%9C%BA%E5%88%8A%E6%98%AF%E5%90%84%E5%AE%B6%E5%9B%A2%E9%98%9F%E8%87%AA%E5%B7%B1%E6%92%B0%E5%86%99%E7%9A%84%23) `312.6K 🔥`
1. [白鹿早期竟然这么清纯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%97%A9%E6%9C%9F%E7%AB%9F%E7%84%B6%E8%BF%99%E4%B9%88%E6%B8%85%E7%BA%AF%23) `307.6K 🔥`
1. [刘耀文FE合照C位](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87FE%E5%90%88%E7%85%A7C%E4%BD%8D%23) `288.5K 🔥`
1. [医生说孩子剩18个月外公续命9年 (The doctor said the baby has 18 months left and the grandfather has 9 years to live.)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E8%AF%B4%E5%AD%A9%E5%AD%90%E5%89%A918%E4%B8%AA%E6%9C%88%E5%A4%96%E5%85%AC%E7%BB%AD%E5%91%BD9%E5%B9%B4%23) `239.0K 🔥`
1. [杨超越 有效沟通](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%20%E6%9C%89%E6%95%88%E6%B2%9F%E9%80%9A%23) `229.1K 🔥`
1. [世界杯32强已出3席 (Three of the top 32 players in the World Cup have been represented)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF32%E5%BC%BA%E5%B7%B2%E5%87%BA3%E5%B8%AD%23) `224.4K 🔥`
1. [安静公主李昀锐合照 (A group photo of Princess Anjing and Li Yunrui)](https://s.weibo.com/weibo?q=%23%E5%AE%89%E9%9D%99%E5%85%AC%E4%B8%BB%E6%9D%8E%E6%98%80%E9%94%90%E5%90%88%E7%85%A7%23) `221.5K 🔥`
1. [金价大跌消费者涌入柜台](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%A4%A7%E8%B7%8C%E6%B6%88%E8%B4%B9%E8%80%85%E6%B6%8C%E5%85%A5%E6%9F%9C%E5%8F%B0%23) `177.7K 🔥`
1. [无畏赵怀真全肯定](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E8%B5%B5%E6%80%80%E7%9C%9F%E5%85%A8%E8%82%AF%E5%AE%9A%23) `177.5K 🔥`
1. [伊朗因球员跑不动多次换人 (Iran made many substitutions because players could not move)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%9B%A0%E7%90%83%E5%91%98%E8%B7%91%E4%B8%8D%E5%8A%A8%E5%A4%9A%E6%AC%A1%E6%8D%A2%E4%BA%BA%23) `540.5K 🔥` `-53%`
1. [南部档案2 (Southern Files 2)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%882%23) `453.6K 🔥` `-47%`
1. [郑嘉颖在披哥和浪姐都被淘汰了](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%98%89%E9%A2%96%E5%9C%A8%E6%8A%AB%E5%93%A5%E5%92%8C%E6%B5%AA%E5%A7%90%E9%83%BD%E8%A2%AB%E6%B7%98%E6%B1%B0%E4%BA%86%23) `290.8K 🔥` `-24%`
1. [蔡磊说将亲眼见证渐冻症被终结 (Cai Lei said he would witness the end of ALS with his own eyes)](https://s.weibo.com/weibo?q=%23%E8%94%A1%E7%A3%8A%E8%AF%B4%E5%B0%86%E4%BA%B2%E7%9C%BC%E8%A7%81%E8%AF%81%E6%B8%90%E5%86%BB%E7%97%87%E8%A2%AB%E7%BB%88%E7%BB%93%23) `211.7K 🔥` `-59%`
1. [中国男篮vs澳大利亚男篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AEvs%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E7%94%B7%E7%AF%AE%23) `194.4K 🔥` `-58%`

Updated at 2026-06-21 23:31:03

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
