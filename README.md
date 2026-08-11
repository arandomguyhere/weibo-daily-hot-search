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

1. [曝卢昱晓不演刺棠进七星彩 (Revealed that Lu Yuxiao will not play Ci Tang in Qixingcai)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8D%A2%E6%98%B1%E6%99%93%E4%B8%8D%E6%BC%94%E5%88%BA%E6%A3%A0%E8%BF%9B%E4%B8%83%E6%98%9F%E5%BD%A9%23) `1.0M 🔥` `NEW`
1. [樊振东WTT冠军榜位列第二](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9CWTT%E5%86%A0%E5%86%9B%E6%A6%9C%E4%BD%8D%E5%88%97%E7%AC%AC%E4%BA%8C%23) `825.5K 🔥` `NEW`
1. [小菜园致歉](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%8F%9C%E5%9B%AD%E8%87%B4%E6%AD%89%23) `747.9K 🔥` `NEW`
1. [欢迎来龙餐馆](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E8%BF%8E%E6%9D%A5%E9%BE%99%E9%A4%90%E9%A6%86%23) `603.2K 🔥` `NEW`
1. [台风白海豚](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%23) `503.1K 🔥` `NEW`
1. [我听交警的涉事女子道歉赔偿](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%90%AC%E4%BA%A4%E8%AD%A6%E7%9A%84%E6%B6%89%E4%BA%8B%E5%A5%B3%E5%AD%90%E9%81%93%E6%AD%89%E8%B5%94%E5%81%BF%23) `424.0K 🔥` `NEW`
1. [NBA圣诞大战](https://s.weibo.com/weibo?q=%23NBA%E5%9C%A3%E8%AF%9E%E5%A4%A7%E6%88%98%23) `423.5K 🔥` `NEW`
1. [宇树科技中签者发声](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E4%B8%AD%E7%AD%BE%E8%80%85%E5%8F%91%E5%A3%B0%23) `405.8K 🔥` `NEW`
1. [妻子孕晚期出轨博士后写道歉信](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%AD%95%E6%99%9A%E6%9C%9F%E5%87%BA%E8%BD%A8%E5%8D%9A%E5%A3%AB%E5%90%8E%E5%86%99%E9%81%93%E6%AD%89%E4%BF%A1%23) `405.0K 🔥` `NEW`
1. [七星彩](https://s.weibo.com/weibo?q=%23%E4%B8%83%E6%98%9F%E5%BD%A9%23) `402.0K 🔥` `NEW`
1. [陈思罕完全成男形态 (Chen Sihan completely transformed into a man)](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%80%9D%E7%BD%95%E5%AE%8C%E5%85%A8%E6%88%90%E7%94%B7%E5%BD%A2%E6%80%81%23) `306.0K 🔥` `NEW`
1. [龙餐馆豆瓣开分8.4](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%E8%B1%86%E7%93%A3%E5%BC%80%E5%88%868.4%23) `297.6K 🔥` `NEW`
1. [杨洋陈都灵 等风热吻你](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E9%99%88%E9%83%BD%E7%81%B5%20%E7%AD%89%E9%A3%8E%E7%83%AD%E5%90%BB%E4%BD%A0%23) `254.7K 🔥` `NEW`
1. [我的前半生有五个视帝视后](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%E6%9C%89%E4%BA%94%E4%B8%AA%E8%A7%86%E5%B8%9D%E8%A7%86%E5%90%8E%23) `192.9K 🔥` `NEW`
1. [山东平度已叫停问题睫毛胶水](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E5%B9%B3%E5%BA%A6%E5%B7%B2%E5%8F%AB%E5%81%9C%E9%97%AE%E9%A2%98%E7%9D%AB%E6%AF%9B%E8%83%B6%E6%B0%B4%23) `191.6K 🔥` `NEW`
1. [失望性情感隔离](https://s.weibo.com/weibo?q=%23%E5%A4%B1%E6%9C%9B%E6%80%A7%E6%83%85%E6%84%9F%E9%9A%94%E7%A6%BB%23) `171.0K 🔥` `NEW`
1. [白海豚直接吞并了台风鲸鱼](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E7%9B%B4%E6%8E%A5%E5%90%9E%E5%B9%B6%E4%BA%86%E5%8F%B0%E9%A3%8E%E9%B2%B8%E9%B1%BC%23) `170.6K 🔥` `NEW`
1. [燃油车为什么卖不动了](https://s.weibo.com/weibo?q=%23%E7%87%83%E6%B2%B9%E8%BD%A6%E4%B8%BA%E4%BB%80%E4%B9%88%E5%8D%96%E4%B8%8D%E5%8A%A8%E4%BA%86%23) `156.6K 🔥` `NEW`
1. [赴泰失联女子9日晚发过朋友圈](https://s.weibo.com/weibo?q=%23%E8%B5%B4%E6%B3%B0%E5%A4%B1%E8%81%94%E5%A5%B3%E5%AD%909%E6%97%A5%E6%99%9A%E5%8F%91%E8%BF%87%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `150.7K 🔥` `NEW`
1. [王曼昱11分钟下班](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B111%E5%88%86%E9%92%9F%E4%B8%8B%E7%8F%AD%23) `149.8K 🔥` `NEW`
1. [为什么新能源车涉水能力更强 (Why new energy vehicles are more capable of wading through water)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%96%B0%E8%83%BD%E6%BA%90%E8%BD%A6%E6%B6%89%E6%B0%B4%E8%83%BD%E5%8A%9B%E6%9B%B4%E5%BC%BA%23) `148.9K 🔥` `NEW`
1. [哪吒获奖台下嘉宾反应冷淡原因](https://s.weibo.com/weibo?q=%23%E5%93%AA%E5%90%92%E8%8E%B7%E5%A5%96%E5%8F%B0%E4%B8%8B%E5%98%89%E5%AE%BE%E5%8F%8D%E5%BA%94%E5%86%B7%E6%B7%A1%E5%8E%9F%E5%9B%A0%23) `2.1M 🔥` `+21%`
1. [请查收这份暴雨天避险指南 (Please check this guide to avoid heavy rainstorms)](https://s.weibo.com/weibo?q=%23%E8%AF%B7%E6%9F%A5%E6%94%B6%E8%BF%99%E4%BB%BD%E6%9A%B4%E9%9B%A8%E5%A4%A9%E9%81%BF%E9%99%A9%E6%8C%87%E5%8D%97%23) `1.3M 🔥` `+28%`
1. [建议女生不要在网上过度分享 (It is recommended that girls not over-share online)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A5%B3%E7%94%9F%E4%B8%8D%E8%A6%81%E5%9C%A8%E7%BD%91%E4%B8%8A%E8%BF%87%E5%BA%A6%E5%88%86%E4%BA%AB%23) `1.0M 🔥` `+35%`
1. [董宇辉1000万成立新公司](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%AE%87%E8%BE%891000%E4%B8%87%E6%88%90%E7%AB%8B%E6%96%B0%E5%85%AC%E5%8F%B8%23) `578.0K 🔥` `+306%`
1. [巴旦木公主晒结婚证](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%97%A6%E6%9C%A8%E5%85%AC%E4%B8%BB%E6%99%92%E7%BB%93%E5%A9%9A%E8%AF%81%23) `576.7K 🔥` `+57%`
1. [台风白海豚停止编号](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%E5%81%9C%E6%AD%A2%E7%BC%96%E5%8F%B7%23) `248.6K 🔥` `+30%`
1. [曝赵一鸣4块牛肉干64元复称仅17元 (It was revealed that Zhao Yiming’s 4 pieces of beef jerky cost 64 yuan and were renamed to only 17 yuan.)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%B5%B5%E4%B8%80%E9%B8%A34%E5%9D%97%E7%89%9B%E8%82%89%E5%B9%B264%E5%85%83%E5%A4%8D%E7%A7%B0%E4%BB%8517%E5%85%83%23) `1.8M 🔥`
1. [恢复生命力只需要一些低成本爱好](https://s.weibo.com/weibo?q=%23%E6%81%A2%E5%A4%8D%E7%94%9F%E5%91%BD%E5%8A%9B%E5%8F%AA%E9%9C%80%E8%A6%81%E4%B8%80%E4%BA%9B%E4%BD%8E%E6%88%90%E6%9C%AC%E7%88%B1%E5%A5%BD%23) `612.1K 🔥`
1. [男子上班脑出血家属无奈拔管后死亡](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%8A%E7%8F%AD%E8%84%91%E5%87%BA%E8%A1%80%E5%AE%B6%E5%B1%9E%E6%97%A0%E5%A5%88%E6%8B%94%E7%AE%A1%E5%90%8E%E6%AD%BB%E4%BA%A1%23) `571.8K 🔥`
1. [叙利亚前总统被判死刑](https://s.weibo.com/weibo?q=%23%E5%8F%99%E5%88%A9%E4%BA%9A%E5%89%8D%E6%80%BB%E7%BB%9F%E8%A2%AB%E5%88%A4%E6%AD%BB%E5%88%91%23) `425.2K 🔥`
1. [白鹿直播](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%9B%B4%E6%92%AD%23) `417.6K 🔥`
1. [TF四代单人拍立得](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E5%8D%95%E4%BA%BA%E6%8B%8D%E7%AB%8B%E5%BE%97%23) `407.4K 🔥`
1. [哪吒159亿票房为何换不来全体起立 (Why can’t everyone stand up in exchange for Nezha’s 15.9 billion box office?)](https://s.weibo.com/weibo?q=%23%E5%93%AA%E5%90%92159%E4%BA%BF%E7%A5%A8%E6%88%BF%E4%B8%BA%E4%BD%95%E6%8D%A2%E4%B8%8D%E6%9D%A5%E5%85%A8%E4%BD%93%E8%B5%B7%E7%AB%8B%23) `405.0K 🔥`
1. [白鹿直播七分钟人数破500万 (Bailu live broadcast reached 5 million viewers in seven minutes)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%9B%B4%E6%92%AD%E4%B8%83%E5%88%86%E9%92%9F%E4%BA%BA%E6%95%B0%E7%A0%B4500%E4%B8%87%23) `404.9K 🔥`
1. [北京暴雨 (Heavy rain in Beijing)](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E6%9A%B4%E9%9B%A8%23) `403.0K 🔥`
1. [娜扎上户口的时候名字多打字了](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E4%B8%8A%E6%88%B7%E5%8F%A3%E7%9A%84%E6%97%B6%E5%80%99%E5%90%8D%E5%AD%97%E5%A4%9A%E6%89%93%E5%AD%97%E4%BA%86%23) `391.1K 🔥`
1. [夫妻结婚40年都AA制丈夫在家装监控 (The couple has been married for 40 years and the husband has been monitoring the home decorations.)](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E7%BB%93%E5%A9%9A40%E5%B9%B4%E9%83%BDAA%E5%88%B6%E4%B8%88%E5%A4%AB%E5%9C%A8%E5%AE%B6%E8%A3%85%E7%9B%91%E6%8E%A7%23) `310.1K 🔥`
1. [曝唐探4肖央主演王宝强客串](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%94%90%E6%8E%A24%E8%82%96%E5%A4%AE%E4%B8%BB%E6%BC%94%E7%8E%8B%E5%AE%9D%E5%BC%BA%E5%AE%A2%E4%B8%B2%23) `265.6K 🔥`
1. [陈俊生150万年薪让罗子君买8万的鞋 (Chen Junsheng's annual salary of 1.5 million asked Luo Zijun to buy 80,000 shoes)](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BF%8A%E7%94%9F150%E4%B8%87%E5%B9%B4%E8%96%AA%E8%AE%A9%E7%BD%97%E5%AD%90%E5%90%9B%E4%B9%B08%E4%B8%87%E7%9A%84%E9%9E%8B%23) `191.0K 🔥`
1. [王格格新剧因拍摄难度大取消 (Wang Gege’s new drama canceled due to difficulty in filming)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A0%BC%E6%A0%BC%E6%96%B0%E5%89%A7%E5%9B%A0%E6%8B%8D%E6%91%84%E9%9A%BE%E5%BA%A6%E5%A4%A7%E5%8F%96%E6%B6%88%23) `186.3K 🔥`
1. [科目二挂了教练换的头像](https://s.weibo.com/weibo?q=%23%E7%A7%91%E7%9B%AE%E4%BA%8C%E6%8C%82%E4%BA%86%E6%95%99%E7%BB%83%E6%8D%A2%E7%9A%84%E5%A4%B4%E5%83%8F%23) `287.7K 🔥` `-21%`
1. [百万网红姜小柔遗体在广州安葬](https://s.weibo.com/weibo?q=%23%E7%99%BE%E4%B8%87%E7%BD%91%E7%BA%A2%E5%A7%9C%E5%B0%8F%E6%9F%94%E9%81%97%E4%BD%93%E5%9C%A8%E5%B9%BF%E5%B7%9E%E5%AE%89%E8%91%AC%23) `286.1K 🔥` `-22%`
1. [红米K100Pro系列价格](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E7%B1%B3K100Pro%E7%B3%BB%E5%88%97%E4%BB%B7%E6%A0%BC%23) `256.4K 🔥` `-31%`
1. [左奇函杨博文彩排骨骼谢幕](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E5%A5%87%E5%87%BD%E6%9D%A8%E5%8D%9A%E6%96%87%E5%BD%A9%E6%8E%92%E9%AA%A8%E9%AA%BC%E8%B0%A2%E5%B9%95%23) `252.7K 🔥` `-28%`
1. [张婉婷疑似怀三胎了 (Zhang Wanting is suspected to be pregnant with three children)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%89%E5%A9%B7%E7%96%91%E4%BC%BC%E6%80%80%E4%B8%89%E8%83%8E%E4%BA%86%23) `246.8K 🔥` `-32%`
1. [张桂源张函瑞眼鼻嘴彩排](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%A1%82%E6%BA%90%E5%BC%A0%E5%87%BD%E7%91%9E%E7%9C%BC%E9%BC%BB%E5%98%B4%E5%BD%A9%E6%8E%92%23) `227.3K 🔥` `-45%`
1. [女子做核磁忘摘金手镯疯狂抖动 (Woman shakes like crazy after forgetting to take off gold bracelet for MRI)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%81%9A%E6%A0%B8%E7%A3%81%E5%BF%98%E6%91%98%E9%87%91%E6%89%8B%E9%95%AF%E7%96%AF%E7%8B%82%E6%8A%96%E5%8A%A8%23) `194.3K 🔥` `-47%`
1. [阚清子咋又瘦了](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%92%8B%E5%8F%88%E7%98%A6%E4%BA%86%23) `161.1K 🔥` `-50%`
1. [王曼昱极限倒地爆冲](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E6%9E%81%E9%99%90%E5%80%92%E5%9C%B0%E7%88%86%E5%86%B2%23) `150.8K 🔥` `-59%`

Updated at 2026-08-11 22:57:48

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
