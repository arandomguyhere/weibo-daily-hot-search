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

1. [歌手排名 (Singer ranking)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%23) `5.8M 🔥` `NEW`
1. [我国社会稳定形势持续向好](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E7%A4%BE%E4%BC%9A%E7%A8%B3%E5%AE%9A%E5%BD%A2%E5%8A%BF%E6%8C%81%E7%BB%AD%E5%90%91%E5%A5%BD%23) `1.1M 🔥` `NEW`
1. [周星驰叫迪丽热巴巴爷](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E5%8F%AB%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%B7%B4%E7%88%B7%23) `619.9K 🔥` `NEW`
1. [窦靖童第一](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%E7%AC%AC%E4%B8%80%23) `432.7K 🔥` `NEW`
1. [霸王茶姬王者荣耀联名上线](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E8%81%94%E5%90%8D%E4%B8%8A%E7%BA%BF%23) `356.4K 🔥` `NEW`
1. [射雕英雄传侠之大者全网收视榜](https://s.weibo.com/weibo?q=%23%E5%B0%84%E9%9B%95%E8%8B%B1%E9%9B%84%E4%BC%A0%E4%BE%A0%E4%B9%8B%E5%A4%A7%E8%80%85%E5%85%A8%E7%BD%91%E6%94%B6%E8%A7%86%E6%A6%9C%23) `347.0K 🔥` `NEW`
1. [女生没结婚席上问亲戚谁笑话我妈了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E6%B2%A1%E7%BB%93%E5%A9%9A%E5%B8%AD%E4%B8%8A%E9%97%AE%E4%BA%B2%E6%88%9A%E8%B0%81%E7%AC%91%E8%AF%9D%E6%88%91%E5%A6%88%E4%BA%86%23) `312.9K 🔥` `NEW`
1. [小伙在土耳其为孕妻买甜品被刺6刀](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E5%9C%A8%E5%9C%9F%E8%80%B3%E5%85%B6%E4%B8%BA%E5%AD%95%E5%A6%BB%E4%B9%B0%E7%94%9C%E5%93%81%E8%A2%AB%E5%88%BA6%E5%88%80%23) `312.9K 🔥` `NEW`
1. [赛里木湖](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E9%87%8C%E6%9C%A8%E6%B9%96%23) `312.7K 🔥` `NEW`
1. [全宇宙最阴的物件](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%AE%87%E5%AE%99%E6%9C%80%E9%98%B4%E7%9A%84%E7%89%A9%E4%BB%B6%23) `312.5K 🔥` `NEW`
1. [狼队对战TES (Wolves vs. TES)](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%AF%B9%E6%88%98TES%23) `311.7K 🔥` `NEW`
1. [林依轮复刻白鹿周生如故红衣造型](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BE%9D%E8%BD%AE%E5%A4%8D%E5%88%BB%E7%99%BD%E9%B9%BF%E5%91%A8%E7%94%9F%E5%A6%82%E6%95%85%E7%BA%A2%E8%A1%A3%E9%80%A0%E5%9E%8B%23) `311.5K 🔥` `NEW`
1. [峰学蔚来武亮住院](https://s.weibo.com/weibo?q=%23%E5%B3%B0%E5%AD%A6%E8%94%9A%E6%9D%A5%E6%AD%A6%E4%BA%AE%E4%BD%8F%E9%99%A2%23) `311.3K 🔥` `NEW`
1. [高分考生为何开始偏好编制](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%88%86%E8%80%83%E7%94%9F%E4%B8%BA%E4%BD%95%E5%BC%80%E5%A7%8B%E5%81%8F%E5%A5%BD%E7%BC%96%E5%88%B6%23) `311.1K 🔥` `NEW`
1. [江山为聘改名](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E5%B1%B1%E4%B8%BA%E8%81%98%E6%94%B9%E5%90%8D%23) `311.0K 🔥` `NEW`
1. [王源说也算是上过歌手了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E8%AF%B4%E4%B9%9F%E7%AE%97%E6%98%AF%E4%B8%8A%E8%BF%87%E6%AD%8C%E6%89%8B%E4%BA%86%23) `310.4K 🔥` `NEW`
1. [每周2天少吃坚持一月瘦5斤](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%91%A82%E5%A4%A9%E5%B0%91%E5%90%83%E5%9D%9A%E6%8C%81%E4%B8%80%E6%9C%88%E7%98%A65%E6%96%A4%23) `310.2K 🔥` `NEW`
1. [广东多地停工停运停航](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E5%A4%9A%E5%9C%B0%E5%81%9C%E5%B7%A5%E5%81%9C%E8%BF%90%E5%81%9C%E8%88%AA%23) `310.0K 🔥` `NEW`
1. [A股最大股票回购](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%9C%80%E5%A4%A7%E8%82%A1%E7%A5%A8%E5%9B%9E%E8%B4%AD%23) `309.5K 🔥` `NEW`
1. [跳舞的孔雪儿太媚了](https://s.weibo.com/weibo?q=%23%E8%B7%B3%E8%88%9E%E7%9A%84%E5%AD%94%E9%9B%AA%E5%84%BF%E5%A4%AA%E5%AA%9A%E4%BA%86%23) `309.3K 🔥` `NEW`
1. [头天晚上把明天衣服叠好的人 (Someone who folded tomorrow's clothes the night before)](https://s.weibo.com/weibo?q=%23%E5%A4%B4%E5%A4%A9%E6%99%9A%E4%B8%8A%E6%8A%8A%E6%98%8E%E5%A4%A9%E8%A1%A3%E6%9C%8D%E5%8F%A0%E5%A5%BD%E7%9A%84%E4%BA%BA%23) `299.6K 🔥` `NEW`
1. [张远一开口 布洛芬都不知道我哪痛](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%BF%9C%E4%B8%80%E5%BC%80%E5%8F%A3%20%E5%B8%83%E6%B4%9B%E8%8A%AC%E9%83%BD%E4%B8%8D%E7%9F%A5%E9%81%93%E6%88%91%E5%93%AA%E7%97%9B%23) `297.4K 🔥` `NEW`
1. [重庆彭水新搜寻出3名遇难者](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%BD%AD%E6%B0%B4%E6%96%B0%E6%90%9C%E5%AF%BB%E5%87%BA3%E5%90%8D%E9%81%87%E9%9A%BE%E8%80%85%23) `293.9K 🔥` `NEW`
1. [万妮达又秒了](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%A6%AE%E8%BE%BE%E5%8F%88%E7%A7%92%E4%BA%86%23) `256.1K 🔥` `NEW`
1. [孙颖莎给小朋友的回信](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%BB%99%E5%B0%8F%E6%9C%8B%E5%8F%8B%E7%9A%84%E5%9B%9E%E4%BF%A1%23) `247.0K 🔥` `NEW`
1. [魏如萱雪崩砸在心上](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A6%82%E8%90%B1%E9%9B%AA%E5%B4%A9%E7%A0%B8%E5%9C%A8%E5%BF%83%E4%B8%8A%23) `224.0K 🔥` `NEW`
1. [13岁女孩体重超220斤确诊多囊](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E5%A5%B3%E5%AD%A9%E4%BD%93%E9%87%8D%E8%B6%85220%E6%96%A4%E7%A1%AE%E8%AF%8A%E5%A4%9A%E5%9B%8A%23) `223.8K 🔥` `NEW`
1. [张函瑞rzn](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%BD%E7%91%9Erzn%23) `223.7K 🔥` `NEW`
1. [守关歌手 不是邓紫棋](https://s.weibo.com/weibo?q=%23%E5%AE%88%E5%85%B3%E6%AD%8C%E6%89%8B%20%E4%B8%8D%E6%98%AF%E9%82%93%E7%B4%AB%E6%A3%8B%23) `221.5K 🔥` `NEW`
1. [春秋航空道歉](https://s.weibo.com/weibo?q=%23%E6%98%A5%E7%A7%8B%E8%88%AA%E7%A9%BA%E9%81%93%E6%AD%89%23) `219.5K 🔥` `NEW`
1. [丰田铂智7首个承诺电池事故起火赔付 (Toyota Platinum 7 is the first to promise compensation for battery fire accidents)](https://s.weibo.com/weibo?q=%23%E4%B8%B0%E7%94%B0%E9%93%82%E6%99%BA7%E9%A6%96%E4%B8%AA%E6%89%BF%E8%AF%BA%E7%94%B5%E6%B1%A0%E4%BA%8B%E6%95%85%E8%B5%B7%E7%81%AB%E8%B5%94%E4%BB%98%23) `217.6K 🔥` `NEW`
1. [宁德时代上半年净利润432.84亿](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E4%B8%8A%E5%8D%8A%E5%B9%B4%E5%87%80%E5%88%A9%E6%B6%A6432.84%E4%BA%BF%23) `216.7K 🔥` `NEW`
1. [朋友圈开始用AI照片代替旅游照](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%BC%80%E5%A7%8B%E7%94%A8AI%E7%85%A7%E7%89%87%E4%BB%A3%E6%9B%BF%E6%97%85%E6%B8%B8%E7%85%A7%23) `215.7K 🔥` `NEW`
1. [银河战舰700全球首秀](https://s.weibo.com/weibo?q=%23%E9%93%B6%E6%B2%B3%E6%88%98%E8%88%B0700%E5%85%A8%E7%90%83%E9%A6%96%E7%A7%80%23) `214.9K 🔥` `NEW`
1. [雪崩大王上桌](https://s.weibo.com/weibo?q=%23%E9%9B%AA%E5%B4%A9%E5%A4%A7%E7%8E%8B%E4%B8%8A%E6%A1%8C%23) `213.8K 🔥` `NEW`
1. [宇树发布新机器狗](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E5%8F%91%E5%B8%83%E6%96%B0%E6%9C%BA%E5%99%A8%E7%8B%97%23) `311.8K 🔥` `+89%`
1. [微信撤回消息后可删除提示字 (Prompt words can be deleted after WeChat withdraws the message)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E6%92%A4%E5%9B%9E%E6%B6%88%E6%81%AF%E5%90%8E%E5%8F%AF%E5%88%A0%E9%99%A4%E6%8F%90%E7%A4%BA%E5%AD%97%23) `1.4M 🔥`
1. [乔欣晒瑞士旅行随拍 (Qiao Xin shares photos of her travels in Switzerland)](https://s.weibo.com/weibo?q=%23%E4%B9%94%E6%AC%A3%E6%99%92%E7%91%9E%E5%A3%AB%E6%97%85%E8%A1%8C%E9%9A%8F%E6%8B%8D%23) `312.3K 🔥`
1. [张柏芝这些年被路人偶遇时拍到的图片](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D%E8%BF%99%E4%BA%9B%E5%B9%B4%E8%A2%AB%E8%B7%AF%E4%BA%BA%E5%81%B6%E9%81%87%E6%97%B6%E6%8B%8D%E5%88%B0%E7%9A%84%E5%9B%BE%E7%89%87%23) `310.6K 🔥`
1. [TF四代陪官俊臣查分](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E9%99%AA%E5%AE%98%E4%BF%8A%E8%87%A3%E6%9F%A5%E5%88%86%23) `309.6K 🔥`
1. [刘耀文去办美签了](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E5%8E%BB%E5%8A%9E%E7%BE%8E%E7%AD%BE%E4%BA%86%23) `309.2K 🔥`
1. [张凌赫王楚然回复那英](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%9B%9E%E5%A4%8D%E9%82%A3%E8%8B%B1%23) `293.8K 🔥`
1. [黄璐再婚 (Huang Lu remarries)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%92%90%E5%86%8D%E5%A9%9A%23) `219.8K 🔥`
1. [四字名已经满足不了90后家长了](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%AD%97%E5%90%8D%E5%B7%B2%E7%BB%8F%E6%BB%A1%E8%B6%B3%E4%B8%8D%E4%BA%8690%E5%90%8E%E5%AE%B6%E9%95%BF%E4%BA%86%23) `472.6K 🔥` `-48%`
1. [孙颖莎俱乐部回应伤情](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E4%BF%B1%E4%B9%90%E9%83%A8%E5%9B%9E%E5%BA%94%E4%BC%A4%E6%83%85%23) `313.1K 🔥` `-61%`
1. [Angelababy13岁旧照](https://s.weibo.com/weibo?q=%23Angelababy13%E5%B2%81%E6%97%A7%E7%85%A7%23) `312.1K 🔥` `-21%`
1. [证监会原副主席方星海被查 (Fang Xinghai, former vice chairman of China Securities Regulatory Commission, under investigation)](https://s.weibo.com/weibo?q=%23%E8%AF%81%E7%9B%91%E4%BC%9A%E5%8E%9F%E5%89%AF%E4%B8%BB%E5%B8%AD%E6%96%B9%E6%98%9F%E6%B5%B7%E8%A2%AB%E6%9F%A5%23) `310.8K 🔥` `-62%`
1. [白鹿回应新剧短发造型](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%9B%9E%E5%BA%94%E6%96%B0%E5%89%A7%E7%9F%AD%E5%8F%91%E9%80%A0%E5%9E%8B%23) `309.9K 🔥` `-46%`
1. [歌手直播 (Singer live broadcast)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E7%9B%B4%E6%92%AD%23) `235.9K 🔥` `-65%`
1. [取消午休四点下班你会同意吗](https://s.weibo.com/weibo?q=%23%E5%8F%96%E6%B6%88%E5%8D%88%E4%BC%91%E5%9B%9B%E7%82%B9%E4%B8%8B%E7%8F%AD%E4%BD%A0%E4%BC%9A%E5%90%8C%E6%84%8F%E5%90%97%23) `227.3K 🔥` `-41%`
1. [原来生理性喜欢是这样的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%94%9F%E7%90%86%E6%80%A7%E5%96%9C%E6%AC%A2%E6%98%AF%E8%BF%99%E6%A0%B7%E7%9A%84%23) `220.1K 🔥` `-28%`

Updated at 2026-07-24 22:51:12

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
