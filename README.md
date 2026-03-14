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

1. [315调查眼镜到底有多暴利 (315 investigates how profitable glasses are)](https://s.weibo.com/weibo?q=%23315%E8%B0%83%E6%9F%A5%E7%9C%BC%E9%95%9C%E5%88%B0%E5%BA%95%E6%9C%89%E5%A4%9A%E6%9A%B4%E5%88%A9%23) `370.9K 🔥` `NEW`
1. [孙颖莎2比4蒯曼](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E2%E6%AF%944%E8%92%AF%E6%9B%BC%23) `341.1K 🔥` `NEW`
1. [怪不得有人做饭这么好吃](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E6%9C%89%E4%BA%BA%E5%81%9A%E9%A5%AD%E8%BF%99%E4%B9%88%E5%A5%BD%E5%90%83%23) `243.2K 🔥` `NEW`
1. [100元就能让三无机构登AI医美推荐榜](https://s.weibo.com/weibo?q=%23100%E5%85%83%E5%B0%B1%E8%83%BD%E8%AE%A9%E4%B8%89%E6%97%A0%E6%9C%BA%E6%9E%84%E7%99%BBAI%E5%8C%BB%E7%BE%8E%E6%8E%A8%E8%8D%90%E6%A6%9C%23) `237.3K 🔥` `NEW`
1. [爸爸给被丢弃厕所女儿准备金手镯](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E7%BB%99%E8%A2%AB%E4%B8%A2%E5%BC%83%E5%8E%95%E6%89%80%E5%A5%B3%E5%84%BF%E5%87%86%E5%A4%87%E9%87%91%E6%89%8B%E9%95%AF%23) `230.1K 🔥` `NEW`
1. [15岁男孩嘴歪发现智齿长到眼窝里](https://s.weibo.com/weibo?q=%2315%E5%B2%81%E7%94%B7%E5%AD%A9%E5%98%B4%E6%AD%AA%E5%8F%91%E7%8E%B0%E6%99%BA%E9%BD%BF%E9%95%BF%E5%88%B0%E7%9C%BC%E7%AA%9D%E9%87%8C%23) `221.3K 🔥` `NEW`
1. [谢征没有言正帅 谁上班谁知道](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%BE%81%E6%B2%A1%E6%9C%89%E8%A8%80%E6%AD%A3%E5%B8%85%20%E8%B0%81%E4%B8%8A%E7%8F%AD%E8%B0%81%E7%9F%A5%E9%81%93%23) `189.0K 🔥` `NEW`
1. [余承东AWE现场解读MateX7新体验](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9CAWE%E7%8E%B0%E5%9C%BA%E8%A7%A3%E8%AF%BBMateX7%E6%96%B0%E4%BD%93%E9%AA%8C%23) `156.5K 🔥` `NEW`
1. [幽灵直播间30万的名表卖300块](https://s.weibo.com/weibo?q=%23%E5%B9%BD%E7%81%B5%E7%9B%B4%E6%92%AD%E9%97%B430%E4%B8%87%E7%9A%84%E5%90%8D%E8%A1%A8%E5%8D%96300%E5%9D%97%23) `151.6K 🔥` `NEW`
1. [王鹤润王玉雯 反转](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%B6%A6%E7%8E%8B%E7%8E%89%E9%9B%AF%20%E5%8F%8D%E8%BD%AC%23) `151.4K 🔥` `NEW`
1. [WB对战JDG (WB vs. JDG)](https://s.weibo.com/weibo?q=%23WB%E5%AF%B9%E6%88%98JDG%23) `150.6K 🔥` `NEW`
1. [孙颖莎14比16蒯曼](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E14%E6%AF%9416%E8%92%AF%E6%9B%BC%23) `106.7K 🔥` `NEW`
1. [打赏女主播167万发现已婚起诉退款](https://s.weibo.com/weibo?q=%23%E6%89%93%E8%B5%8F%E5%A5%B3%E4%B8%BB%E6%92%AD167%E4%B8%87%E5%8F%91%E7%8E%B0%E5%B7%B2%E5%A9%9A%E8%B5%B7%E8%AF%89%E9%80%80%E6%AC%BE%23) `106.0K 🔥` `NEW`
1. [多花1.5万买的智驾版不如普通版](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E8%8A%B11.5%E4%B8%87%E4%B9%B0%E7%9A%84%E6%99%BA%E9%A9%BE%E7%89%88%E4%B8%8D%E5%A6%82%E6%99%AE%E9%80%9A%E7%89%88%23) `95.9K 🔥` `NEW`
1. [谢征收到了和离书](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%BE%81%E6%94%B6%E5%88%B0%E4%BA%86%E5%92%8C%E7%A6%BB%E4%B9%A6%23) `95.6K 🔥` `NEW`
1. [赵丽颖已经三提白玉兰了](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%B7%B2%E7%BB%8F%E4%B8%89%E6%8F%90%E7%99%BD%E7%8E%89%E5%85%B0%E4%BA%86%23) `93.5K 🔥` `NEW`
1. [中国女足vs中国台北女足](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E8%B6%B3vs%E4%B8%AD%E5%9B%BD%E5%8F%B0%E5%8C%97%E5%A5%B3%E8%B6%B3%23) `88.7K 🔥` `NEW`
1. [秦牛正威回应订婚被指炒作](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E7%89%9B%E6%AD%A3%E5%A8%81%E5%9B%9E%E5%BA%94%E8%AE%A2%E5%A9%9A%E8%A2%AB%E6%8C%87%E7%82%92%E4%BD%9C%23) `88.1K 🔥` `NEW`
1. [王鹤棣 邵子恒一字一句都在杀我](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%20%E9%82%B5%E5%AD%90%E6%81%92%E4%B8%80%E5%AD%97%E4%B8%80%E5%8F%A5%E9%83%BD%E5%9C%A8%E6%9D%80%E6%88%91%23) `85.9K 🔥` `NEW`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `85.4K 🔥` `NEW`
1. [花13.8万买家电3年没收到货 (I spent 138,000 yuan to buy appliances but haven’t received them in 3 years.)](https://s.weibo.com/weibo?q=%23%E8%8A%B113.8%E4%B8%87%E4%B9%B0%E5%AE%B6%E7%94%B53%E5%B9%B4%E6%B2%A1%E6%94%B6%E5%88%B0%E8%B4%A7%23) `75.6K 🔥` `NEW`
1. [金莎孙丞潇录妻旅全程牵手](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E5%AD%99%E4%B8%9E%E6%BD%87%E5%BD%95%E5%A6%BB%E6%97%85%E5%85%A8%E7%A8%8B%E7%89%B5%E6%89%8B%23) `74.4K 🔥` `NEW`
1. [白玉兰预测](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E9%A2%84%E6%B5%8B%23) `73.6K 🔥` `NEW`
1. [孙颖莎蒯曼爆分](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%92%AF%E6%9B%BC%E7%88%86%E5%88%86%23) `71.1K 🔥` `NEW`
1. [伊能静秦昊秀恩爱不管孙杨死活](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E7%A7%A6%E6%98%8A%E7%A7%80%E6%81%A9%E7%88%B1%E4%B8%8D%E7%AE%A1%E5%AD%99%E6%9D%A8%E6%AD%BB%E6%B4%BB%23) `71.1K 🔥` `NEW`
1. [上海F1偶遇关晓彤](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7F1%E5%81%B6%E9%81%87%E5%85%B3%E6%99%93%E5%BD%A4%23) `71.0K 🔥` `NEW`
1. [王艺迪希望申裕斌没事](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%89%BA%E8%BF%AA%E5%B8%8C%E6%9C%9B%E7%94%B3%E8%A3%95%E6%96%8C%E6%B2%A1%E4%BA%8B%23) `71.0K 🔥` `NEW`
1. [清明节放假安排来了](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%98%8E%E8%8A%82%E6%94%BE%E5%81%87%E5%AE%89%E6%8E%92%E6%9D%A5%E4%BA%86%23) `70.3K 🔥` `NEW`
1. [马杜罗彻夜高喊我是总统正被虐待 (Maduro shouted all night that I am the president and is being abused)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%9D%9C%E7%BD%97%E5%BD%BB%E5%A4%9C%E9%AB%98%E5%96%8A%E6%88%91%E6%98%AF%E6%80%BB%E7%BB%9F%E6%AD%A3%E8%A2%AB%E8%99%90%E5%BE%85%23) `1.1M 🔥` `+39%`
1. [孙颖莎vs蒯曼](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Evs%E8%92%AF%E6%9B%BC%23) `777.7K 🔥` `+653%`
1. [国家摄影队独有的两会时间](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E6%91%84%E5%BD%B1%E9%98%9F%E7%8B%AC%E6%9C%89%E7%9A%84%E4%B8%A4%E4%BC%9A%E6%97%B6%E9%97%B4%23) `345.3K 🔥` `+128%`
1. [吉利银河迈入长续航时代 (Geely Galaxy enters the era of long battery life)](https://s.weibo.com/weibo?q=%23%E5%90%89%E5%88%A9%E9%93%B6%E6%B2%B3%E8%BF%88%E5%85%A5%E9%95%BF%E7%BB%AD%E8%88%AA%E6%97%B6%E4%BB%A3%23) `317.6K 🔥` `+42%`
1. [近半老年人在租房时被拒绝 (Nearly half of seniors are turned away when renting a house)](https://s.weibo.com/weibo?q=%23%E8%BF%91%E5%8D%8A%E8%80%81%E5%B9%B4%E4%BA%BA%E5%9C%A8%E7%A7%9F%E6%88%BF%E6%97%B6%E8%A2%AB%E6%8B%92%E7%BB%9D%23) `242.9K 🔥` `+60%`
1. [田曦薇张凌赫经纪人依旧纯恨中 (Tian Xiwei, Zhang Linghe’s manager is still in pure hatred)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%BB%8F%E7%BA%AA%E4%BA%BA%E4%BE%9D%E6%97%A7%E7%BA%AF%E6%81%A8%E4%B8%AD%23) `235.4K 🔥` `+56%`
1. [林依晨谈做脑部手术经历](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BE%9D%E6%99%A8%E8%B0%88%E5%81%9A%E8%84%91%E9%83%A8%E6%89%8B%E6%9C%AF%E7%BB%8F%E5%8E%86%23) `225.9K 🔥` `+50%`
1. [25岁硕士曝光剧本直播间被死亡威胁](https://s.weibo.com/weibo?q=%2325%E5%B2%81%E7%A1%95%E5%A3%AB%E6%9B%9D%E5%85%89%E5%89%A7%E6%9C%AC%E7%9B%B4%E6%92%AD%E9%97%B4%E8%A2%AB%E6%AD%BB%E4%BA%A1%E5%A8%81%E8%83%81%23) `224.8K 🔥` `+50%`
1. [女子错转23万给老赖无法追回](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%94%99%E8%BD%AC23%E4%B8%87%E7%BB%99%E8%80%81%E8%B5%96%E6%97%A0%E6%B3%95%E8%BF%BD%E5%9B%9E%23) `156.8K 🔥` `+29%`
1. [吴艳妮为拉塞尔颁奖](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%89%B3%E5%A6%AE%E4%B8%BA%E6%8B%89%E5%A1%9E%E5%B0%94%E9%A2%81%E5%A5%96%23) `117.3K 🔥` `+47%`
1. [十五五向你发出奋斗邀请 (The 15th Five-Year Plan sends you an invitation to struggle.)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E5%90%91%E4%BD%A0%E5%8F%91%E5%87%BA%E5%A5%8B%E6%96%97%E9%82%80%E8%AF%B7%23) `660.4K 🔥`
1. [第31届白玉兰奖 (The 31st Magnolia Award)](https://s.weibo.com/weibo?q=%23%E7%AC%AC31%E5%B1%8A%E7%99%BD%E7%8E%89%E5%85%B0%E5%A5%96%23) `137.1K 🔥`
1. [孙杨张豆豆俄罗斯街头牵手举高高](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%BC%A0%E8%B1%86%E8%B1%86%E4%BF%84%E7%BD%97%E6%96%AF%E8%A1%97%E5%A4%B4%E7%89%B5%E6%89%8B%E4%B8%BE%E9%AB%98%E9%AB%98%23) `132.4K 🔥`
1. [杨幂赵丽颖 白玉兰 (Yang Mi, Zhao Liying, Magnolia)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%B5%B5%E4%B8%BD%E9%A2%96%20%E7%99%BD%E7%8E%89%E5%85%B0%23) `116.4K 🔥`
1. [耳帝说内娱音综彻底放下身段了](https://s.weibo.com/weibo?q=%23%E8%80%B3%E5%B8%9D%E8%AF%B4%E5%86%85%E5%A8%B1%E9%9F%B3%E7%BB%BC%E5%BD%BB%E5%BA%95%E6%94%BE%E4%B8%8B%E8%BA%AB%E6%AE%B5%E4%BA%86%23) `95.0K 🔥`
1. [女孩用胡萝卜啃出70cm高黄鹤楼 (Girl gnaws out a 70cm tall Yellow Crane Tower from carrots)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E7%94%A8%E8%83%A1%E8%90%9D%E5%8D%9C%E5%95%83%E5%87%BA70cm%E9%AB%98%E9%BB%84%E9%B9%A4%E6%A5%BC%23) `87.5K 🔥`
1. [陈哲远骨折是自己洗澡摔的](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E9%AA%A8%E6%8A%98%E6%98%AF%E8%87%AA%E5%B7%B1%E6%B4%97%E6%BE%A1%E6%91%94%E7%9A%84%23) `85.6K 🔥`
1. [苏醒为胡辣汤事件道歉](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%E4%B8%BA%E8%83%A1%E8%BE%A3%E6%B1%A4%E4%BA%8B%E4%BB%B6%E9%81%93%E6%AD%89%23) `271.9K 🔥` `-42%`
1. [省考](https://s.weibo.com/weibo?q=%23%E7%9C%81%E8%80%83%23) `156.4K 🔥` `-86%`
1. [人民大会堂的热水瓶用了30年 (The thermos bottle in the Great Hall of the People has been used for 30 years)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E5%A4%A7%E4%BC%9A%E5%A0%82%E7%9A%84%E7%83%AD%E6%B0%B4%E7%93%B6%E7%94%A8%E4%BA%8630%E5%B9%B4%23) `96.8K 🔥` `-21%`
1. [丰巢超时收5毛钱恶心又得咽下](https://s.weibo.com/weibo?q=%23%E4%B8%B0%E5%B7%A2%E8%B6%85%E6%97%B6%E6%94%B65%E6%AF%9B%E9%92%B1%E6%81%B6%E5%BF%83%E5%8F%88%E5%BE%97%E5%92%BD%E4%B8%8B%23) `95.2K 🔥` `-38%`
1. [我们的少年时代2 (Our Boyhood 2)](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%23) `85.4K 🔥` `-25%`
1. [鞠婧祎杂志开售](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%9D%82%E5%BF%97%E5%BC%80%E5%94%AE%23) `81.8K 🔥` `-26%`

Updated at 2026-03-14 14:38:48

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
