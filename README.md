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

1. [王鹤棣新歌歌词 (Wang Hedi's new song lyrics)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%96%B0%E6%AD%8C%E6%AD%8C%E8%AF%8D%23) `300.2K 🔥` `NEW`
1. [蒯曼回应4比2孙颖莎](https://s.weibo.com/weibo?q=%23%E8%92%AF%E6%9B%BC%E5%9B%9E%E5%BA%944%E6%AF%942%E5%AD%99%E9%A2%96%E8%8E%8E%23) `296.1K 🔥` `NEW`
1. [F1排位赛](https://s.weibo.com/weibo?q=%23F1%E6%8E%92%E4%BD%8D%E8%B5%9B%23) `272.6K 🔥` `NEW`
1. [美国凭啥从委内瑞拉搬走1亿美元黄金](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%87%AD%E5%95%A5%E4%BB%8E%E5%A7%94%E5%86%85%E7%91%9E%E6%8B%89%E6%90%AC%E8%B5%B01%E4%BA%BF%E7%BE%8E%E5%85%83%E9%BB%84%E9%87%91%23) `155.3K 🔥` `NEW`
1. [王一博给品牌发title](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%BB%99%E5%93%81%E7%89%8C%E5%8F%91title%23) `154.0K 🔥` `NEW`
1. [王霜下一场停赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%9C%9C%E4%B8%8B%E4%B8%80%E5%9C%BA%E5%81%9C%E8%B5%9B%23) `145.6K 🔥` `NEW`
1. [女足](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E8%B6%B3%23) `124.1K 🔥` `NEW`
1. [逛华为展看鸿蒙车](https://s.weibo.com/weibo?q=%23%E9%80%9B%E5%8D%8E%E4%B8%BA%E5%B1%95%E7%9C%8B%E9%B8%BF%E8%92%99%E8%BD%A6%23) `116.2K 🔥` `NEW`
1. [云南花香蓝莓](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%8D%97%E8%8A%B1%E9%A6%99%E8%93%9D%E8%8E%93%23) `115.3K 🔥` `NEW`
1. [马思纯发文](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%80%9D%E7%BA%AF%E5%8F%91%E6%96%87%23) `105.9K 🔥` `NEW`
1. [蒯曼说拼劲咬劲比之前更好 (Kuaiman said that Pinjin bites Jin better than before)](https://s.weibo.com/weibo?q=%23%E8%92%AF%E6%9B%BC%E8%AF%B4%E6%8B%BC%E5%8A%B2%E5%92%AC%E5%8A%B2%E6%AF%94%E4%B9%8B%E5%89%8D%E6%9B%B4%E5%A5%BD%23) `102.2K 🔥` `NEW`
1. [官方通报12345投诉被泄露个人信息](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A512345%E6%8A%95%E8%AF%89%E8%A2%AB%E6%B3%84%E9%9C%B2%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF%23) `94.6K 🔥` `NEW`
1. [唐嫣刺绣吊带裙](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E5%88%BA%E7%BB%A3%E5%90%8A%E5%B8%A6%E8%A3%99%23) `87.9K 🔥` `NEW`
1. [工资都没群聊多](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E8%B5%84%E9%83%BD%E6%B2%A1%E7%BE%A4%E8%81%8A%E5%A4%9A%23) `80.9K 🔥` `NEW`
1. [孔雪儿 只想演强制爱](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%20%E5%8F%AA%E6%83%B3%E6%BC%94%E5%BC%BA%E5%88%B6%E7%88%B1%23) `80.3K 🔥` `NEW`
1. [外卖到了白鹿就这样跑步迎接](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%8D%96%E5%88%B0%E4%BA%86%E7%99%BD%E9%B9%BF%E5%B0%B1%E8%BF%99%E6%A0%B7%E8%B7%91%E6%AD%A5%E8%BF%8E%E6%8E%A5%23) `77.2K 🔥` `NEW`
1. [春游](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%B8%B8%23) `76.0K 🔥` `NEW`
1. [关晓彤程潇F1观赛造型](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E7%A8%8B%E6%BD%87F1%E8%A7%82%E8%B5%9B%E9%80%A0%E5%9E%8B%23) `75.8K 🔥` `NEW`
1. [15岁男孩智齿长到眼窝里妈妈发声](https://s.weibo.com/weibo?q=%2315%E5%B2%81%E7%94%B7%E5%AD%A9%E6%99%BA%E9%BD%BF%E9%95%BF%E5%88%B0%E7%9C%BC%E7%AA%9D%E9%87%8C%E5%A6%88%E5%A6%88%E5%8F%91%E5%A3%B0%23) `75.3K 🔥` `NEW`
1. [原神](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E7%A5%9E%23) `75.0K 🔥` `NEW`
1. [星穹铁道白厄 (Star Dome Railway Baie)](https://s.weibo.com/weibo?q=%23%E6%98%9F%E7%A9%B9%E9%93%81%E9%81%93%E7%99%BD%E5%8E%84%23) `74.9K 🔥` `NEW`
1. [315调查眼镜到底有多暴利 (315 investigates how profitable glasses are)](https://s.weibo.com/weibo?q=%23315%E8%B0%83%E6%9F%A5%E7%9C%BC%E9%95%9C%E5%88%B0%E5%BA%95%E6%9C%89%E5%A4%9A%E6%9A%B4%E5%88%A9%23) `1.1M 🔥` `+196%`
1. [孙颖莎2比4蒯曼](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E2%E6%AF%944%E8%92%AF%E6%9B%BC%23) `816.3K 🔥` `+139%`
1. [谢征没有言正帅 谁上班谁知道](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%BE%81%E6%B2%A1%E6%9C%89%E8%A8%80%E6%AD%A3%E5%B8%85%20%E8%B0%81%E4%B8%8A%E7%8F%AD%E8%B0%81%E7%9F%A5%E9%81%93%23) `306.5K 🔥` `+62%`
1. [江汉大米重金属污染风险高系谣言](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E6%B1%89%E5%A4%A7%E7%B1%B3%E9%87%8D%E9%87%91%E5%B1%9E%E6%B1%A1%E6%9F%93%E9%A3%8E%E9%99%A9%E9%AB%98%E7%B3%BB%E8%B0%A3%E8%A8%80%23) `298.7K 🔥` `+45%`
1. [谢征收到了和离书](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%BE%81%E6%94%B6%E5%88%B0%E4%BA%86%E5%92%8C%E7%A6%BB%E4%B9%A6%23) `292.6K 🔥` `+206%`
1. [中国女足vs中国台北女足](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E8%B6%B3vs%E4%B8%AD%E5%9B%BD%E5%8F%B0%E5%8C%97%E5%A5%B3%E8%B6%B3%23) `173.3K 🔥` `+95%`
1. [赵丽颖已经三提白玉兰了](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%B7%B2%E7%BB%8F%E4%B8%89%E6%8F%90%E7%99%BD%E7%8E%89%E5%85%B0%E4%BA%86%23) `171.0K 🔥` `+83%`
1. [上海F1偶遇关晓彤](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7F1%E5%81%B6%E9%81%87%E5%85%B3%E6%99%93%E5%BD%A4%23) `151.4K 🔥` `+113%`
1. [打赏女主播167万发现已婚起诉退款](https://s.weibo.com/weibo?q=%23%E6%89%93%E8%B5%8F%E5%A5%B3%E4%B8%BB%E6%92%AD167%E4%B8%87%E5%8F%91%E7%8E%B0%E5%B7%B2%E5%A9%9A%E8%B5%B7%E8%AF%89%E9%80%80%E6%AC%BE%23) `137.2K 🔥` `+29%`
1. [伊能静秦昊秀恩爱不管孙杨死活](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E7%A7%A6%E6%98%8A%E7%A7%80%E6%81%A9%E7%88%B1%E4%B8%8D%E7%AE%A1%E5%AD%99%E6%9D%A8%E6%AD%BB%E6%B4%BB%23) `129.9K 🔥` `+83%`
1. [清明节放假安排来了 (Tomb Sweeping Day holiday arrangements are here)](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%98%8E%E8%8A%82%E6%94%BE%E5%81%87%E5%AE%89%E6%8E%92%E6%9D%A5%E4%BA%86%23) `106.9K 🔥` `+52%`
1. [十五五向你发出奋斗邀请 (The 15th Five-Year Plan sends you an invitation to struggle.)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E5%90%91%E4%BD%A0%E5%8F%91%E5%87%BA%E5%A5%8B%E6%96%97%E9%82%80%E8%AF%B7%23) `654.1K 🔥`
1. [美团外卖周末半价吃大餐 (Meituan Takeaway offers half-price meals on weekends)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%A2%E5%A4%96%E5%8D%96%E5%91%A8%E6%9C%AB%E5%8D%8A%E4%BB%B7%E5%90%83%E5%A4%A7%E9%A4%90%23) `598.5K 🔥`
1. [国家摄影队独有的两会时间](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E6%91%84%E5%BD%B1%E9%98%9F%E7%8B%AC%E6%9C%89%E7%9A%84%E4%B8%A4%E4%BC%9A%E6%97%B6%E9%97%B4%23) `301.3K 🔥`
1. [近半老年人在租房时被拒绝 (Nearly half of seniors are turned away when renting a house)](https://s.weibo.com/weibo?q=%23%E8%BF%91%E5%8D%8A%E8%80%81%E5%B9%B4%E4%BA%BA%E5%9C%A8%E7%A7%9F%E6%88%BF%E6%97%B6%E8%A2%AB%E6%8B%92%E7%BB%9D%23) `277.6K 🔥`
1. [爸爸给被丢弃厕所女儿准备金手镯](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E7%BB%99%E8%A2%AB%E4%B8%A2%E5%BC%83%E5%8E%95%E6%89%80%E5%A5%B3%E5%84%BF%E5%87%86%E5%A4%87%E9%87%91%E6%89%8B%E9%95%AF%23) `265.5K 🔥`
1. [田曦薇张凌赫经纪人依旧纯恨中 (Tian Xiwei, Zhang Linghe’s manager is still in pure hatred)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%BB%8F%E7%BA%AA%E4%BA%BA%E4%BE%9D%E6%97%A7%E7%BA%AF%E6%81%A8%E4%B8%AD%23) `262.4K 🔥`
1. [怪不得有人做饭这么好吃](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E6%9C%89%E4%BA%BA%E5%81%9A%E9%A5%AD%E8%BF%99%E4%B9%88%E5%A5%BD%E5%90%83%23) `213.3K 🔥`
1. [王鹤润王玉雯 反转](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%B6%A6%E7%8E%8B%E7%8E%89%E9%9B%AF%20%E5%8F%8D%E8%BD%AC%23) `145.1K 🔥`
1. [第31届白玉兰奖 (The 31st Magnolia Award)](https://s.weibo.com/weibo?q=%23%E7%AC%AC31%E5%B1%8A%E7%99%BD%E7%8E%89%E5%85%B0%E5%A5%96%23) `114.1K 🔥`
1. [白玉兰预测](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E9%A2%84%E6%B5%8B%23) `80.6K 🔥`
1. [我们的少年时代2 (Our Boyhood 2)](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%23) `76.5K 🔥`
1. [林依晨谈做脑部手术经历](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BE%9D%E6%99%A8%E8%B0%88%E5%81%9A%E8%84%91%E9%83%A8%E6%89%8B%E6%9C%AF%E7%BB%8F%E5%8E%86%23) `162.3K 🔥` `-28%`
1. [15岁男孩嘴歪发现智齿长到眼窝里](https://s.weibo.com/weibo?q=%2315%E5%B2%81%E7%94%B7%E5%AD%A9%E5%98%B4%E6%AD%AA%E5%8F%91%E7%8E%B0%E6%99%BA%E9%BD%BF%E9%95%BF%E5%88%B0%E7%9C%BC%E7%AA%9D%E9%87%8C%23) `144.4K 🔥` `-35%`
1. [苏醒为胡辣汤事件道歉](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%E4%B8%BA%E8%83%A1%E8%BE%A3%E6%B1%A4%E4%BA%8B%E4%BB%B6%E9%81%93%E6%AD%89%23) `129.6K 🔥` `-52%`
1. [25岁硕士曝光剧本直播间被死亡威胁](https://s.weibo.com/weibo?q=%2325%E5%B2%81%E7%A1%95%E5%A3%AB%E6%9B%9D%E5%85%89%E5%89%A7%E6%9C%AC%E7%9B%B4%E6%92%AD%E9%97%B4%E8%A2%AB%E6%AD%BB%E4%BA%A1%E5%A8%81%E8%83%81%23) `129.0K 🔥` `-43%`
1. [孙颖莎vs蒯曼 (Sun Yingsha vs Kuaiman)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Evs%E8%92%AF%E6%9B%BC%23) `117.6K 🔥` `-85%`
1. [省考](https://s.weibo.com/weibo?q=%23%E7%9C%81%E8%80%83%23) `89.9K 🔥` `-43%`
1. [杨幂赵丽颖 白玉兰 (Yang Mi, Zhao Liying, Magnolia)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%B5%B5%E4%B8%BD%E9%A2%96%20%E7%99%BD%E7%8E%89%E5%85%B0%23) `85.6K 🔥` `-26%`
1. [吴艳妮为拉塞尔颁奖](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%89%B3%E5%A6%AE%E4%B8%BA%E6%8B%89%E5%A1%9E%E5%B0%94%E9%A2%81%E5%A5%96%23) `78.2K 🔥` `-33%`
1. [耳帝说内娱音综彻底放下身段了](https://s.weibo.com/weibo?q=%23%E8%80%B3%E5%B8%9D%E8%AF%B4%E5%86%85%E5%A8%B1%E9%9F%B3%E7%BB%BC%E5%BD%BB%E5%BA%95%E6%94%BE%E4%B8%8B%E8%BA%AB%E6%AE%B5%E4%BA%86%23) `74.7K 🔥` `-21%`

Updated at 2026-03-14 15:24:00

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
