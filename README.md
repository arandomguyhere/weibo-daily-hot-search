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

1. [奥斯卡再陷歧视亚裔争议 (Oscars again mired in controversy over discrimination against Asians)](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E6%96%AF%E5%8D%A1%E5%86%8D%E9%99%B7%E6%AD%A7%E8%A7%86%E4%BA%9A%E8%A3%94%E4%BA%89%E8%AE%AE%23) `1.1M 🔥` `NEW`
1. [中国机器人开始打网球了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%BC%80%E5%A7%8B%E6%89%93%E7%BD%91%E7%90%83%E4%BA%86%23) `601.3K 🔥` `NEW`
1. [ZARA拉夫劳伦被点名通报](https://s.weibo.com/weibo?q=%23ZARA%E6%8B%89%E5%A4%AB%E5%8A%B3%E4%BC%A6%E8%A2%AB%E7%82%B9%E5%90%8D%E9%80%9A%E6%8A%A5%23) `268.4K 🔥` `NEW`
1. [安阳内黄荠菜地野菜免费挖为谣言](https://s.weibo.com/weibo?q=%23%E5%AE%89%E9%98%B3%E5%86%85%E9%BB%84%E8%8D%A0%E8%8F%9C%E5%9C%B0%E9%87%8E%E8%8F%9C%E5%85%8D%E8%B4%B9%E6%8C%96%E4%B8%BA%E8%B0%A3%E8%A8%80%23) `265.5K 🔥` `NEW`
1. [湘雅医院坠江身亡研究生导师已停诊](https://s.weibo.com/weibo?q=%23%E6%B9%98%E9%9B%85%E5%8C%BB%E9%99%A2%E5%9D%A0%E6%B1%9F%E8%BA%AB%E4%BA%A1%E7%A0%94%E7%A9%B6%E7%94%9F%E5%AF%BC%E5%B8%88%E5%B7%B2%E5%81%9C%E8%AF%8A%23) `265.2K 🔥` `NEW`
1. [湘雅医院学生坠江调查不容含糊](https://s.weibo.com/weibo?q=%23%E6%B9%98%E9%9B%85%E5%8C%BB%E9%99%A2%E5%AD%A6%E7%94%9F%E5%9D%A0%E6%B1%9F%E8%B0%83%E6%9F%A5%E4%B8%8D%E5%AE%B9%E5%90%AB%E7%B3%8A%23) `257.2K 🔥` `NEW`
1. [湘雅医院坠亡研究生导师已停诊](https://s.weibo.com/weibo?q=%23%E6%B9%98%E9%9B%85%E5%8C%BB%E9%99%A2%E5%9D%A0%E4%BA%A1%E7%A0%94%E7%A9%B6%E7%94%9F%E5%AF%BC%E5%B8%88%E5%B7%B2%E5%81%9C%E8%AF%8A%23) `257.1K 🔥` `NEW`
1. [鹿晗专辑发售](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E4%B8%93%E8%BE%91%E5%8F%91%E5%94%AE%23) `252.7K 🔥` `NEW`
1. [伊朗警告日本](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%AD%A6%E5%91%8A%E6%97%A5%E6%9C%AC%23) `250.5K 🔥` `NEW`
1. [湘雅医院坠江学生曾多次求助](https://s.weibo.com/weibo?q=%23%E6%B9%98%E9%9B%85%E5%8C%BB%E9%99%A2%E5%9D%A0%E6%B1%9F%E5%AD%A6%E7%94%9F%E6%9B%BE%E5%A4%9A%E6%AC%A1%E6%B1%82%E5%8A%A9%23) `238.8K 🔥` `NEW`
1. [苏炳添官宣代言小米汽车 (Su Bingtian officially announces endorsement of Xiaomi Motors)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%82%B3%E6%B7%BB%E5%AE%98%E5%AE%A3%E4%BB%A3%E8%A8%80%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%23) `238.6K 🔥` `NEW`
1. [包文婧产后10个月开练普拉提](https://s.weibo.com/weibo?q=%23%E5%8C%85%E6%96%87%E5%A9%A7%E4%BA%A7%E5%90%8E10%E4%B8%AA%E6%9C%88%E5%BC%80%E7%BB%83%E6%99%AE%E6%8B%89%E6%8F%90%23) `238.4K 🔥` `NEW`
1. [被于谦多新鲜呐洗脑了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E4%BA%8E%E8%B0%A6%E5%A4%9A%E6%96%B0%E9%B2%9C%E5%91%90%E6%B4%97%E8%84%91%E4%BA%86%23) `230.8K 🔥` `NEW`
1. [刘文祥 杨国福粉丝](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%96%87%E7%A5%A5%20%E6%9D%A8%E5%9B%BD%E7%A6%8F%E7%B2%89%E4%B8%9D%23) `227.1K 🔥` `NEW`
1. [李一桐 天选种田文女主](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%20%E5%A4%A9%E9%80%89%E7%A7%8D%E7%94%B0%E6%96%87%E5%A5%B3%E4%B8%BB%23) `198.7K 🔥` `NEW`
1. [金价下跌却买不进](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E4%B8%8B%E8%B7%8C%E5%8D%B4%E4%B9%B0%E4%B8%8D%E8%BF%9B%23) `188.7K 🔥` `NEW`
1. [公司把猫裁了](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E6%8A%8A%E7%8C%AB%E8%A3%81%E4%BA%86%23) `183.5K 🔥` `NEW`
1. [刘在石经常使用的破冰问题](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%9C%A8%E7%9F%B3%E7%BB%8F%E5%B8%B8%E4%BD%BF%E7%94%A8%E7%9A%84%E7%A0%B4%E5%86%B0%E9%97%AE%E9%A2%98%23) `179.4K 🔥` `NEW`
1. [郑合惠子任宥纶同款手机壳](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%90%88%E6%83%A0%E5%AD%90%E4%BB%BB%E5%AE%A5%E7%BA%B6%E5%90%8C%E6%AC%BE%E6%89%8B%E6%9C%BA%E5%A3%B3%23) `174.9K 🔥` `NEW`
1. [鹿哈方称将追究工厂责任](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E5%93%88%E6%96%B9%E7%A7%B0%E5%B0%86%E8%BF%BD%E7%A9%B6%E5%B7%A5%E5%8E%82%E8%B4%A3%E4%BB%BB%23) `115.0K 🔥` `NEW`
1. [多方回应高中生过斑马线被撞飞身亡 (Many parties responded to the news that a high school student was hit and killed while crossing a zebra crossing.)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%94%E9%AB%98%E4%B8%AD%E7%94%9F%E8%BF%87%E6%96%91%E9%A9%AC%E7%BA%BF%E8%A2%AB%E6%92%9E%E9%A3%9E%E8%BA%AB%E4%BA%A1%23) `114.1K 🔥` `NEW`
1. [张凌赫说舍不得逐玉](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%AF%B4%E8%88%8D%E4%B8%8D%E5%BE%97%E9%80%90%E7%8E%89%23) `112.2K 🔥` `NEW`
1. [章子怡嗑cp战绩可查](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%AD%90%E6%80%A1%E5%97%91cp%E6%88%98%E7%BB%A9%E5%8F%AF%E6%9F%A5%23) `103.2K 🔥` `NEW`
1. [张凌赫说浴池戏像打架](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%AF%B4%E6%B5%B4%E6%B1%A0%E6%88%8F%E5%83%8F%E6%89%93%E6%9E%B6%23) `100.7K 🔥` `NEW`
1. [伊朗对以色列心脏地带展开袭击](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%B9%E4%BB%A5%E8%89%B2%E5%88%97%E5%BF%83%E8%84%8F%E5%9C%B0%E5%B8%A6%E5%B1%95%E5%BC%80%E8%A2%AD%E5%87%BB%23) `99.8K 🔥` `NEW`
1. [边牧 请苍天辨忠奸](https://s.weibo.com/weibo?q=%23%E8%BE%B9%E7%89%A7%20%E8%AF%B7%E8%8B%8D%E5%A4%A9%E8%BE%A8%E5%BF%A0%E5%A5%B8%23) `88.1K 🔥` `NEW`
1. [樊振东转发杜塞官宣发文](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%BD%AC%E5%8F%91%E6%9D%9C%E5%A1%9E%E5%AE%98%E5%AE%A3%E5%8F%91%E6%96%87%23) `87.5K 🔥` `NEW`
1. [直井怜让粉丝别说场周贵](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E4%BA%95%E6%80%9C%E8%AE%A9%E7%B2%89%E4%B8%9D%E5%88%AB%E8%AF%B4%E5%9C%BA%E5%91%A8%E8%B4%B5%23) `81.9K 🔥` `NEW`
1. [苹果烧排骨](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E7%83%A7%E6%8E%92%E9%AA%A8%23) `80.1K 🔥` `NEW`
1. [大理寺米线 泼天的富贵 (Dali Temple Rice Noodles The Wealth of the Sky)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%90%86%E5%AF%BA%E7%B1%B3%E7%BA%BF%20%E6%B3%BC%E5%A4%A9%E7%9A%84%E5%AF%8C%E8%B4%B5%23) `383.3K 🔥` `+227%`
1. [全是不想坐B座的聪明人](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%98%AF%E4%B8%8D%E6%83%B3%E5%9D%90B%E5%BA%A7%E7%9A%84%E8%81%AA%E6%98%8E%E4%BA%BA%23) `265.9K 🔥` `+148%`
1. [AI 裁员 (AI layoffs)](https://s.weibo.com/weibo?q=%23AI%20%E8%A3%81%E5%91%98%23) `250.2K 🔥` `+32%`
1. [高中生斑马线过马路被撞飞身亡](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%AD%E7%94%9F%E6%96%91%E9%A9%AC%E7%BA%BF%E8%BF%87%E9%A9%AC%E8%B7%AF%E8%A2%AB%E6%92%9E%E9%A3%9E%E8%BA%AB%E4%BA%A1%23) `245.8K 🔥` `+22%`
1. [赵本山近况](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%9C%AC%E5%B1%B1%E8%BF%91%E5%86%B5%23) `241.7K 🔥` `+76%`
1. [一个34岁研究生上岸后的猝死](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA34%E5%B2%81%E7%A0%94%E7%A9%B6%E7%94%9F%E4%B8%8A%E5%B2%B8%E5%90%8E%E7%9A%84%E7%8C%9D%E6%AD%BB%23) `240.7K 🔥` `+123%`
1. [当公交车突然没了台阶](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%85%AC%E4%BA%A4%E8%BD%A6%E7%AA%81%E7%84%B6%E6%B2%A1%E4%BA%86%E5%8F%B0%E9%98%B6%23) `227.9K 🔥` `+112%`
1. [睡得晚和睡得少哪个更伤身体](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E5%BE%97%E6%99%9A%E5%92%8C%E7%9D%A1%E5%BE%97%E5%B0%91%E5%93%AA%E4%B8%AA%E6%9B%B4%E4%BC%A4%E8%BA%AB%E4%BD%93%23) `207.0K 🔥` `+62%`
1. [你好1983今日开播](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD1983%E4%BB%8A%E6%97%A5%E5%BC%80%E6%92%AD%23) `111.4K 🔥` `+24%`
1. [逐玉 韩国](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E9%9F%A9%E5%9B%BD%23) `245.2K 🔥`
1. [AI 替代岗位](https://s.weibo.com/weibo?q=%23AI%20%E6%9B%BF%E4%BB%A3%E5%B2%97%E4%BD%8D%23) `109.7K 🔥`
1. [莫斯科遭大量无人机袭击 (Moscow was attacked by a large number of drones)](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%96%AF%E7%A7%91%E9%81%AD%E5%A4%A7%E9%87%8F%E6%97%A0%E4%BA%BA%E6%9C%BA%E8%A2%AD%E5%87%BB%23) `776.9K 🔥` `-30%`
1. [蒋超良被逮捕](https://s.weibo.com/weibo?q=%23%E8%92%8B%E8%B6%85%E8%89%AF%E8%A2%AB%E9%80%AE%E6%8D%95%23) `189.3K 🔥` `-25%`
1. [美国陷入孤立 (America in isolation)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E9%99%B7%E5%85%A5%E5%AD%A4%E7%AB%8B%23) `100.8K 🔥` `-45%`
1. [小伙卖卤肉饭被同行强行倒菜驱赶](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E5%8D%96%E5%8D%A4%E8%82%89%E9%A5%AD%E8%A2%AB%E5%90%8C%E8%A1%8C%E5%BC%BA%E8%A1%8C%E5%80%92%E8%8F%9C%E9%A9%B1%E8%B5%B6%23) `90.6K 🔥` `-29%`
1. [美军被曝对伊朗退出选项](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E8%A2%AB%E6%9B%9D%E5%AF%B9%E4%BC%8A%E6%9C%97%E9%80%80%E5%87%BA%E9%80%89%E9%A1%B9%23) `89.7K 🔥` `-63%`
1. [入职未满1年怀孕请假被拒获赔10万 (She was compensated NT$100,000 when she was refused leave due to pregnancy less than 1 year after joining the company.)](https://s.weibo.com/weibo?q=%23%E5%85%A5%E8%81%8C%E6%9C%AA%E6%BB%A11%E5%B9%B4%E6%80%80%E5%AD%95%E8%AF%B7%E5%81%87%E8%A2%AB%E6%8B%92%E8%8E%B7%E8%B5%9410%E4%B8%87%23) `86.2K 🔥` `-55%`
1. [爸爸买彩票中748万不告诉孩子](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E4%B9%B0%E5%BD%A9%E7%A5%A8%E4%B8%AD748%E4%B8%87%E4%B8%8D%E5%91%8A%E8%AF%89%E5%AD%A9%E5%AD%90%23) `85.4K 🔥` `-64%`
1. [华为渠道服](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E6%B8%A0%E9%81%93%E6%9C%8D%23) `85.4K 🔥` `-61%`
1. [考古的风终于轮到田曦薇了](https://s.weibo.com/weibo?q=%23%E8%80%83%E5%8F%A4%E7%9A%84%E9%A3%8E%E7%BB%88%E4%BA%8E%E8%BD%AE%E5%88%B0%E7%94%B0%E6%9B%A6%E8%96%87%E4%BA%86%23) `83.1K 🔥` `-26%`
1. [仅收280元牙医回应女孩将复查3次](https://s.weibo.com/weibo?q=%23%E4%BB%85%E6%94%B6280%E5%85%83%E7%89%99%E5%8C%BB%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%A9%E5%B0%86%E5%A4%8D%E6%9F%A53%E6%AC%A1%23) `80.7K 🔥` `-90%`
1. [樊长玉听见下聘成亲的反应](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E9%95%BF%E7%8E%89%E5%90%AC%E8%A7%81%E4%B8%8B%E8%81%98%E6%88%90%E4%BA%B2%E7%9A%84%E5%8F%8D%E5%BA%94%23) `80.5K 🔥` `-55%`

Updated at 2026-03-17 13:13:26

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
