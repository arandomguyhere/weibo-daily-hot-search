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

1. [王曼昱世排积分破万创新高 (Wang Manyu’s world ranking points reached a new high)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E4%B8%96%E6%8E%92%E7%A7%AF%E5%88%86%E7%A0%B4%E4%B8%87%E5%88%9B%E6%96%B0%E9%AB%98%23) `833.3K 🔥` `NEW`
1. [暑期服务消费潜能加速释放](https://s.weibo.com/weibo?q=%23%E6%9A%91%E6%9C%9F%E6%9C%8D%E5%8A%A1%E6%B6%88%E8%B4%B9%E6%BD%9C%E8%83%BD%E5%8A%A0%E9%80%9F%E9%87%8A%E6%94%BE%23) `797.3K 🔥` `NEW`
1. [王橹杰期待跟穆祉丞的双人舞台](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%9C%9F%E5%BE%85%E8%B7%9F%E7%A9%86%E7%A5%89%E4%B8%9E%E7%9A%84%E5%8F%8C%E4%BA%BA%E8%88%9E%E5%8F%B0%23) `536.0K 🔥` `NEW`
1. [我的微博日常](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%BE%AE%E5%8D%9A%E6%97%A5%E5%B8%B8%23) `494.1K 🔥` `NEW`
1. [问界儿童车即将上市](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8C%E5%84%BF%E7%AB%A5%E8%BD%A6%E5%8D%B3%E5%B0%86%E4%B8%8A%E5%B8%82%23) `454.4K 🔥` `NEW`
1. [iPhoneUltra备货量](https://s.weibo.com/weibo?q=%23iPhoneUltra%E5%A4%87%E8%B4%A7%E9%87%8F%23) `411.7K 🔥` `NEW`
1. [桃黑黑 骂人](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%20%E9%AA%82%E4%BA%BA%23) `390.8K 🔥` `NEW`
1. [胖东来](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%23) `377.8K 🔥` `NEW`
1. [Agent用久了失去独立思考能力](https://s.weibo.com/weibo?q=%23Agent%E7%94%A8%E4%B9%85%E4%BA%86%E5%A4%B1%E5%8E%BB%E7%8B%AC%E7%AB%8B%E6%80%9D%E8%80%83%E8%83%BD%E5%8A%9B%23) `322.1K 🔥` `NEW`
1. [老人两天被拔21颗牙卫健委称未违规](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E4%B8%A4%E5%A4%A9%E8%A2%AB%E6%8B%9421%E9%A2%97%E7%89%99%E5%8D%AB%E5%81%A5%E5%A7%94%E7%A7%B0%E6%9C%AA%E8%BF%9D%E8%A7%84%23) `320.6K 🔥` `NEW`
1. [AI预测未来增加1.7亿新岗位 (AI predicts 170 million new jobs will be created in the future)](https://s.weibo.com/weibo?q=%23AI%E9%A2%84%E6%B5%8B%E6%9C%AA%E6%9D%A5%E5%A2%9E%E5%8A%A01.7%E4%BA%BF%E6%96%B0%E5%B2%97%E4%BD%8D%23) `316.0K 🔥` `NEW`
1. [赵丽颖黑粉出镜致歉](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E9%BB%91%E7%B2%89%E5%87%BA%E9%95%9C%E8%87%B4%E6%AD%89%23) `312.0K 🔥` `NEW`
1. [演员海顿潘妮蒂尔去世](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E6%B5%B7%E9%A1%BF%E6%BD%98%E5%A6%AE%E8%92%82%E5%B0%94%E5%8E%BB%E4%B8%96%23) `308.1K 🔥` `NEW`
1. [VOGUE叫王一博王大胆](https://s.weibo.com/weibo?q=%23VOGUE%E5%8F%AB%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%8E%8B%E5%A4%A7%E8%83%86%23) `306.4K 🔥` `NEW`
1. [真的不建议临睡前洗澡](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E7%9A%84%E4%B8%8D%E5%BB%BA%E8%AE%AE%E4%B8%B4%E7%9D%A1%E5%89%8D%E6%B4%97%E6%BE%A1%23) `296.1K 🔥` `NEW`
1. [现货黄金再次突破4400美元](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E8%B4%A7%E9%BB%84%E9%87%91%E5%86%8D%E6%AC%A1%E7%AA%81%E7%A0%B44400%E7%BE%8E%E5%85%83%23) `295.1K 🔥` `NEW`
1. [耳帝也爱小沈阳](https://s.weibo.com/weibo?q=%23%E8%80%B3%E5%B8%9D%E4%B9%9F%E7%88%B1%E5%B0%8F%E6%B2%88%E9%98%B3%23) `290.4K 🔥` `NEW`
1. [9块9的手机壳还敢买吗](https://s.weibo.com/weibo?q=%239%E5%9D%979%E7%9A%84%E6%89%8B%E6%9C%BA%E5%A3%B3%E8%BF%98%E6%95%A2%E4%B9%B0%E5%90%97%23) `283.7K 🔥` `NEW`
1. [杨幂职场智性天花板](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%81%8C%E5%9C%BA%E6%99%BA%E6%80%A7%E5%A4%A9%E8%8A%B1%E6%9D%BF%23) `283.4K 🔥` `NEW`
1. [敖瑞鹏孙珍妮师兄太稳健定档](https://s.weibo.com/weibo?q=%23%E6%95%96%E7%91%9E%E9%B9%8F%E5%AD%99%E7%8F%8D%E5%A6%AE%E5%B8%88%E5%85%84%E5%A4%AA%E7%A8%B3%E5%81%A5%E5%AE%9A%E6%A1%A3%23) `280.6K 🔥` `NEW`
1. [鞠婧祎造型关键在发型 (The key to Ju Jingyi’s style lies in her hairstyle)](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E9%80%A0%E5%9E%8B%E5%85%B3%E9%94%AE%E5%9C%A8%E5%8F%91%E5%9E%8B%23) `277.9K 🔥` `NEW`
1. [心动的信号](https://s.weibo.com/weibo?q=%23%E5%BF%83%E5%8A%A8%E7%9A%84%E4%BF%A1%E5%8F%B7%23) `275.2K 🔥` `NEW`
1. [披哥一公8位队长](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E5%93%A5%E4%B8%80%E5%85%AC8%E4%BD%8D%E9%98%9F%E9%95%BF%23) `1.2M 🔥` `+530%`
1. [王俊凯妈妈好年轻](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%A6%88%E5%A6%88%E5%A5%BD%E5%B9%B4%E8%BD%BB%23) `386.8K 🔥` `+49%`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `383.5K 🔥` `+41%`
1. [王一博造型郭琪](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E9%80%A0%E5%9E%8B%E9%83%AD%E7%90%AA%23) `378.3K 🔥` `+52%`
1. [iPhone17或全球涨价](https://s.weibo.com/weibo?q=%23iPhone17%E6%88%96%E5%85%A8%E7%90%83%E6%B6%A8%E4%BB%B7%23) `356.4K 🔥` `+47%`
1. [欢天喜地七仙女凡间造型](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%A4%A9%E5%96%9C%E5%9C%B0%E4%B8%83%E4%BB%99%E5%A5%B3%E5%87%A1%E9%97%B4%E9%80%A0%E5%9E%8B%23) `319.6K 🔥` `+55%`
1. [曝虞书欣补偿一念江南换角亏损](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%A1%A5%E5%81%BF%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%E6%8D%A2%E8%A7%92%E4%BA%8F%E6%8D%9F%23) `316.9K 🔥` `+53%`
1. [瑞幸联名漫画 抄袭](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E8%81%94%E5%90%8D%E6%BC%AB%E7%94%BB%20%E6%8A%84%E8%A2%AD%23) `314.7K 🔥` `+53%`
1. [对瘦女淡饭产生了逆反心理 (I have a rebellious attitude toward thin women.)](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E7%98%A6%E5%A5%B3%E6%B7%A1%E9%A5%AD%E4%BA%A7%E7%94%9F%E4%BA%86%E9%80%86%E5%8F%8D%E5%BF%83%E7%90%86%23) `309.5K 🔥` `+23%`
1. [档案袋被外婆拆了好崩溃 (The file bag was opened by my grandma and I was so devastated.)](https://s.weibo.com/weibo?q=%23%E6%A1%A3%E6%A1%88%E8%A2%8B%E8%A2%AB%E5%A4%96%E5%A9%86%E6%8B%86%E4%BA%86%E5%A5%BD%E5%B4%A9%E6%BA%83%23) `303.7K 🔥` `+49%`
1. [辟谣恋情都按谷爱凌这个标准来 (To refute rumors about love affairs, follow Gu Ailing’s standards)](https://s.weibo.com/weibo?q=%23%E8%BE%9F%E8%B0%A3%E6%81%8B%E6%83%85%E9%83%BD%E6%8C%89%E8%B0%B7%E7%88%B1%E5%87%8C%E8%BF%99%E4%B8%AA%E6%A0%87%E5%87%86%E6%9D%A5%23) `302.9K 🔥` `+50%`
1. [3孩非亲生男子看出轨聊天记录腿软 (Man with 3 children who is not his biological child feels weak in legs after seeing cheating chat records)](https://s.weibo.com/weibo?q=%233%E5%AD%A9%E9%9D%9E%E4%BA%B2%E7%94%9F%E7%94%B7%E5%AD%90%E7%9C%8B%E5%87%BA%E8%BD%A8%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%E8%85%BF%E8%BD%AF%23) `301.5K 🔥` `+56%`
1. [披荆斩棘一公组队](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E4%B8%80%E5%85%AC%E7%BB%84%E9%98%9F%23) `300.0K 🔥` `+53%`
1. [有种缘分就到这的感觉了](https://s.weibo.com/weibo?q=%23%E6%9C%89%E7%A7%8D%E7%BC%98%E5%88%86%E5%B0%B1%E5%88%B0%E8%BF%99%E7%9A%84%E6%84%9F%E8%A7%89%E4%BA%86%23) `297.4K 🔥` `+50%`
1. [手机壳 医疗垃圾](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E5%A3%B3%20%E5%8C%BB%E7%96%97%E5%9E%83%E5%9C%BE%23) `293.5K 🔥` `+22%`
1. [四个儿子争着养95岁老母亲](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E4%B8%AA%E5%84%BF%E5%AD%90%E4%BA%89%E7%9D%80%E5%85%BB95%E5%B2%81%E8%80%81%E6%AF%8D%E4%BA%B2%23) `288.5K 🔥` `+48%`
1. [王楚钦三线作战](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%B8%89%E7%BA%BF%E4%BD%9C%E6%88%98%23) `286.1K 🔥` `+35%`
1. [罗牛山盘中涨停](https://s.weibo.com/weibo?q=%23%E7%BD%97%E7%89%9B%E5%B1%B1%E7%9B%98%E4%B8%AD%E6%B6%A8%E5%81%9C%23) `279.9K 🔥` `+56%`
1. [张元英水晶凉鞋](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E6%B0%B4%E6%99%B6%E5%87%89%E9%9E%8B%23) `277.0K 🔥` `+37%`
1. [建议这类手机壳赶紧扔掉](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E8%BF%99%E7%B1%BB%E6%89%8B%E6%9C%BA%E5%A3%B3%E8%B5%B6%E7%B4%A7%E6%89%94%E6%8E%89%23) `779.8K 🔥`
1. [人生不只有考公考研两条路 (There are not only two paths in life: public examination and postgraduate examination.)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%94%9F%E4%B8%8D%E5%8F%AA%E6%9C%89%E8%80%83%E5%85%AC%E8%80%83%E7%A0%94%E4%B8%A4%E6%9D%A1%E8%B7%AF%23) `746.6K 🔥`
1. [极少数巨婴碰瓷了大量公共资源 (A very small number of giant babies have access to a large amount of public resources)](https://s.weibo.com/weibo?q=%23%E6%9E%81%E5%B0%91%E6%95%B0%E5%B7%A8%E5%A9%B4%E7%A2%B0%E7%93%B7%E4%BA%86%E5%A4%A7%E9%87%8F%E5%85%AC%E5%85%B1%E8%B5%84%E6%BA%90%23) `484.2K 🔥`
1. [小沈阳一公组队](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E4%B8%80%E5%85%AC%E7%BB%84%E9%98%9F%23) `324.0K 🔥`
1. [李荣浩给杨丞琳送花篮落款先生 (Li Ronghao sent a flower basket to Rainie Yang and signed Mr.)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%E7%BB%99%E6%9D%A8%E4%B8%9E%E7%90%B3%E9%80%81%E8%8A%B1%E7%AF%AE%E8%90%BD%E6%AC%BE%E5%85%88%E7%94%9F%23) `313.6K 🔥`
1. [龙餐馆原型说当时做饭很难吃 (The prototype of Dragon Restaurant said that the cooking at that time was very difficult to eat)](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%E5%8E%9F%E5%9E%8B%E8%AF%B4%E5%BD%93%E6%97%B6%E5%81%9A%E9%A5%AD%E5%BE%88%E9%9A%BE%E5%90%83%23) `291.4K 🔥`
1. [胖东来被涨租逼走却从不涨商户租](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E8%A2%AB%E6%B6%A8%E7%A7%9F%E9%80%BC%E8%B5%B0%E5%8D%B4%E4%BB%8E%E4%B8%8D%E6%B6%A8%E5%95%86%E6%88%B7%E7%A7%9F%23) `286.9K 🔥`
1. [纪念江泽民同志诞辰100周年大会 (Conference to commemorate the 100th anniversary of the birth of Comrade Jiang Zemin)](https://s.weibo.com/weibo?q=%23%E7%BA%AA%E5%BF%B5%E6%B1%9F%E6%B3%BD%E6%B0%91%E5%90%8C%E5%BF%97%E8%AF%9E%E8%BE%B0100%E5%91%A8%E5%B9%B4%E5%A4%A7%E4%BC%9A%23) `397.5K 🔥` `-53%`
1. [美伊冲突](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%86%B2%E7%AA%81%23) `324.3K 🔥` `-23%`
1. [兰州拉面集体更名的背后](https://s.weibo.com/weibo?q=%23%E5%85%B0%E5%B7%9E%E6%8B%89%E9%9D%A2%E9%9B%86%E4%BD%93%E6%9B%B4%E5%90%8D%E7%9A%84%E8%83%8C%E5%90%8E%23) `305.5K 🔥` `-73%`

Updated at 2026-08-17 12:53:04

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
