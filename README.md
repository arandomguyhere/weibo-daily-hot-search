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

1. [服刑人员遭狱警虐待后身亡 (Inmate dies after being tortured by prison guards)](https://s.weibo.com/weibo?q=%23%E6%9C%8D%E5%88%91%E4%BA%BA%E5%91%98%E9%81%AD%E7%8B%B1%E8%AD%A6%E8%99%90%E5%BE%85%E5%90%8E%E8%BA%AB%E4%BA%A1%23) `1.1M 🔥` `NEW`
1. [爱奇艺 长剧](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%20%E9%95%BF%E5%89%A7%23) `817.3K 🔥` `NEW`
1. [秦岚少榨点果汁嗓子早好了](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%B2%9A%E5%B0%91%E6%A6%A8%E7%82%B9%E6%9E%9C%E6%B1%81%E5%97%93%E5%AD%90%E6%97%A9%E5%A5%BD%E4%BA%86%23) `693.4K 🔥` `NEW`
1. [造谣天津突发8.8级地震者被罚](https://s.weibo.com/weibo?q=%23%E9%80%A0%E8%B0%A3%E5%A4%A9%E6%B4%A5%E7%AA%81%E5%8F%918.8%E7%BA%A7%E5%9C%B0%E9%9C%87%E8%80%85%E8%A2%AB%E7%BD%9A%23) `601.2K 🔥` `NEW`
1. [字节跳动去年净利润下滑超70%](https://s.weibo.com/weibo?q=%23%E5%AD%97%E8%8A%82%E8%B7%B3%E5%8A%A8%E5%8E%BB%E5%B9%B4%E5%87%80%E5%88%A9%E6%B6%A6%E4%B8%8B%E6%BB%91%E8%B6%8570%25%23) `512.6K 🔥` `NEW`
1. [爱情慢慢首宣](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E6%85%A2%E6%85%A2%E9%A6%96%E5%AE%A3%23) `495.5K 🔥` `NEW`
1. [AI观众](https://s.weibo.com/weibo?q=%23AI%E8%A7%82%E4%BC%97%23) `462.7K 🔥` `NEW`
1. [低情商演员失业 高情商更多休息](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E6%83%85%E5%95%86%E6%BC%94%E5%91%98%E5%A4%B1%E4%B8%9A%20%E9%AB%98%E6%83%85%E5%95%86%E6%9B%B4%E5%A4%9A%E4%BC%91%E6%81%AF%23) `461.7K 🔥` `NEW`
1. [时代峰峻大楼被雷劈了](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%A4%A7%E6%A5%BC%E8%A2%AB%E9%9B%B7%E5%8A%88%E4%BA%86%23) `460.8K 🔥` `NEW`
1. [妈妈被埋尸28年他永远停在10岁](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E8%A2%AB%E5%9F%8B%E5%B0%B828%E5%B9%B4%E4%BB%96%E6%B0%B8%E8%BF%9C%E5%81%9C%E5%9C%A810%E5%B2%81%23) `459.4K 🔥` `NEW`
1. [张若昀工作室 没签过AI授权 (Zhang Ruoyun Studio has not signed an AI authorization)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%8B%A5%E6%98%80%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E6%B2%A1%E7%AD%BE%E8%BF%87AI%E6%8E%88%E6%9D%83%23) `458.0K 🔥` `NEW`
1. [AI艺人库 自掘坟墓](https://s.weibo.com/weibo?q=%23AI%E8%89%BA%E4%BA%BA%E5%BA%93%20%E8%87%AA%E6%8E%98%E5%9D%9F%E5%A2%93%23) `456.8K 🔥` `NEW`
1. [孩子归华住会抚养](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E5%BD%92%E5%8D%8E%E4%BD%8F%E4%BC%9A%E6%8A%9A%E5%85%BB%23) `455.9K 🔥` `NEW`
1. [爱奇艺疯了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E7%96%AF%E4%BA%86%23) `433.4K 🔥` `NEW`
1. [2天只吃燕麦身体会发生什么](https://s.weibo.com/weibo?q=%232%E5%A4%A9%E5%8F%AA%E5%90%83%E7%87%95%E9%BA%A6%E8%BA%AB%E4%BD%93%E4%BC%9A%E5%8F%91%E7%94%9F%E4%BB%80%E4%B9%88%23) `429.3K 🔥` `NEW`
1. [陈哲远丞磊曾舜晞入驻爱奇艺AI艺人库](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E4%B8%9E%E7%A3%8A%E6%9B%BE%E8%88%9C%E6%99%9E%E5%85%A5%E9%A9%BB%E7%88%B1%E5%A5%87%E8%89%BAAI%E8%89%BA%E4%BA%BA%E5%BA%93%23) `428.5K 🔥` `NEW`
1. [女子拆快递误甩美工刀打到同事脖颈](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8B%86%E5%BF%AB%E9%80%92%E8%AF%AF%E7%94%A9%E7%BE%8E%E5%B7%A5%E5%88%80%E6%89%93%E5%88%B0%E5%90%8C%E4%BA%8B%E8%84%96%E9%A2%88%23) `428.2K 🔥` `NEW`
1. [华为发布会](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%8F%91%E5%B8%83%E4%BC%9A%23) `426.7K 🔥` `NEW`
1. [王橹杰跳伞](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E8%B7%B3%E4%BC%9E%23) `426.4K 🔥` `NEW`
1. [伊朗军方晒导弹和无人机库存](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%86%9B%E6%96%B9%E6%99%92%E5%AF%BC%E5%BC%B9%E5%92%8C%E6%97%A0%E4%BA%BA%E6%9C%BA%E5%BA%93%E5%AD%98%23) `425.7K 🔥` `NEW`
1. [何润东 车代 (Peter Ho Car Agent)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%20%E8%BD%A6%E4%BB%A3%23) `413.6K 🔥` `NEW`
1. [王一博28分钟连续超6台赛车](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A28%E5%88%86%E9%92%9F%E8%BF%9E%E7%BB%AD%E8%B6%856%E5%8F%B0%E8%B5%9B%E8%BD%A6%23) `370.2K 🔥` `NEW`
1. [爱奇艺AI艺人库](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BAAI%E8%89%BA%E4%BA%BA%E5%BA%93%23) `357.5K 🔥` `NEW`
1. [阚清子听劝](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%90%AC%E5%8A%9D%23) `322.1K 🔥` `NEW`
1. [Gemini能登顶老君山吗](https://s.weibo.com/weibo?q=%23Gemini%E8%83%BD%E7%99%BB%E9%A1%B6%E8%80%81%E5%90%9B%E5%B1%B1%E5%90%97%23) `265.1K 🔥` `NEW`
1. [河南男子美国摆摊1元商品卖5美元](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E7%94%B7%E5%AD%90%E7%BE%8E%E5%9B%BD%E6%91%86%E6%91%8A1%E5%85%83%E5%95%86%E5%93%81%E5%8D%965%E7%BE%8E%E5%85%83%23) `260.2K 🔥` `NEW`
1. [大侦探](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BE%A6%E6%8E%A2%23) `256.5K 🔥` `NEW`
1. [张凌赫王楚然相依海报](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%9B%B8%E4%BE%9D%E6%B5%B7%E6%8A%A5%23) `254.0K 🔥` `NEW`
1. [万达电影告别王健林时代](https://s.weibo.com/weibo?q=%23%E4%B8%87%E8%BE%BE%E7%94%B5%E5%BD%B1%E5%91%8A%E5%88%AB%E7%8E%8B%E5%81%A5%E6%9E%97%E6%97%B6%E4%BB%A3%23) `252.3K 🔥` `NEW`
1. [清华大学发布叶君讣告](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8D%8E%E5%A4%A7%E5%AD%A6%E5%8F%91%E5%B8%83%E5%8F%B6%E5%90%9B%E8%AE%A3%E5%91%8A%23) `251.0K 🔥` `NEW`
1. [大冰谈人到中年什么最重要 (Da Bing talks about what is most important in middle age)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E8%B0%88%E4%BA%BA%E5%88%B0%E4%B8%AD%E5%B9%B4%E4%BB%80%E4%B9%88%E6%9C%80%E9%87%8D%E8%A6%81%23) `235.0K 🔥` `NEW`
1. [花27万买摊位老板大半个月回本盈利](https://s.weibo.com/weibo?q=%23%E8%8A%B127%E4%B8%87%E4%B9%B0%E6%91%8A%E4%BD%8D%E8%80%81%E6%9D%BF%E5%A4%A7%E5%8D%8A%E4%B8%AA%E6%9C%88%E5%9B%9E%E6%9C%AC%E7%9B%88%E5%88%A9%23) `199.2K 🔥` `NEW`
1. [全部暴露 孩子归谁](https://s.weibo.com/weibo?q=%23%E5%85%A8%E9%83%A8%E6%9A%B4%E9%9C%B2%20%E5%AD%A9%E5%AD%90%E5%BD%92%E8%B0%81%23) `698.9K 🔥` `+32%`
1. [沙溢大儿子和女生逛街](https://s.weibo.com/weibo?q=%23%E6%B2%99%E6%BA%A2%E5%A4%A7%E5%84%BF%E5%AD%90%E5%92%8C%E5%A5%B3%E7%94%9F%E9%80%9B%E8%A1%97%23) `427.4K 🔥` `+51%`
1. [黄金跳水暴跌](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%B7%B3%E6%B0%B4%E6%9A%B4%E8%B7%8C%23) `427.1K 🔥` `+41%`
1. [遭家暴俏黄蓉离婚给了前夫25万](https://s.weibo.com/weibo?q=%23%E9%81%AD%E5%AE%B6%E6%9A%B4%E4%BF%8F%E9%BB%84%E8%93%89%E7%A6%BB%E5%A9%9A%E7%BB%99%E4%BA%86%E5%89%8D%E5%A4%AB25%E4%B8%87%23) `404.6K 🔥` `+68%`
1. [玄彬孙艺珍儿子拍的夫妇照](https://s.weibo.com/weibo?q=%23%E7%8E%84%E5%BD%AC%E5%AD%99%E8%89%BA%E7%8F%8D%E5%84%BF%E5%AD%90%E6%8B%8D%E7%9A%84%E5%A4%AB%E5%A6%87%E7%85%A7%23) `400.2K 🔥` `+85%`
1. [万千气象看湖南](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%B0%94%E8%B1%A1%E7%9C%8B%E6%B9%96%E5%8D%97%23) `702.7K 🔥`
1. [买点便宜衣服穿就显年轻了](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E7%82%B9%E4%BE%BF%E5%AE%9C%E8%A1%A3%E6%9C%8D%E7%A9%BF%E5%B0%B1%E6%98%BE%E5%B9%B4%E8%BD%BB%E4%BA%86%23) `698.1K 🔥`
1. [邓紫棋患地中海贫血](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E6%82%A3%E5%9C%B0%E4%B8%AD%E6%B5%B7%E8%B4%AB%E8%A1%80%23) `428.1K 🔥`
1. [綦美合潮牌 (Qimeihe trendy brand)](https://s.weibo.com/weibo?q=%23%E7%B6%A6%E7%BE%8E%E5%90%88%E6%BD%AE%E7%89%8C%23) `425.6K 🔥`
1. [豆包回应豆脚机器人 (Doubao responds to Doujiao robot)](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%9B%9E%E5%BA%94%E8%B1%86%E8%84%9A%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `172.4K 🔥`
1. [iOS27全新Siri界面](https://s.weibo.com/weibo?q=%23iOS27%E5%85%A8%E6%96%B0Siri%E7%95%8C%E9%9D%A2%23) `172.3K 🔥`
1. [多厂商仍未公开辅助驾驶里程](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%8E%82%E5%95%86%E4%BB%8D%E6%9C%AA%E5%85%AC%E5%BC%80%E8%BE%85%E5%8A%A9%E9%A9%BE%E9%A9%B6%E9%87%8C%E7%A8%8B%23) `172.1K 🔥`
1. [英伟达178美元黄仁勋毛衣走红](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE178%E7%BE%8E%E5%85%83%E9%BB%84%E4%BB%81%E5%8B%8B%E6%AF%9B%E8%A1%A3%E8%B5%B0%E7%BA%A2%23) `171.8K 🔥`
1. [入职第一周vs入职一年](https://s.weibo.com/weibo?q=%23%E5%85%A5%E8%81%8C%E7%AC%AC%E4%B8%80%E5%91%A8vs%E5%85%A5%E8%81%8C%E4%B8%80%E5%B9%B4%23) `463.5K 🔥` `-34%`
1. [这句话让我决定每天多喝水了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%8F%A5%E8%AF%9D%E8%AE%A9%E6%88%91%E5%86%B3%E5%AE%9A%E6%AF%8F%E5%A4%A9%E5%A4%9A%E5%96%9D%E6%B0%B4%E4%BA%86%23) `429.5K 🔥` `-40%`
1. [鹿晗 关晓彤](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%20%E5%85%B3%E6%99%93%E5%BD%A4%23) `428.8K 🔥` `-95%`
1. [伊朗油轮突破美国海上封锁](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%B2%B9%E8%BD%AE%E7%AA%81%E7%A0%B4%E7%BE%8E%E5%9B%BD%E6%B5%B7%E4%B8%8A%E5%B0%81%E9%94%81%23) `426.1K 🔥` `-46%`
1. [佳偶天成定档 (Couples are made in heaven)](https://s.weibo.com/weibo?q=%23%E4%BD%B3%E5%81%B6%E5%A4%A9%E6%88%90%E5%AE%9A%E6%A1%A3%23) `393.7K 🔥` `-71%`

Updated at 2026-04-20 14:34:27

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
