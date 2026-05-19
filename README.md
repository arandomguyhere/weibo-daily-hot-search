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

1. [普京到达北京 (Putin arrives in Beijing)](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E5%88%B0%E8%BE%BE%E5%8C%97%E4%BA%AC%23) `4.2M 🔥` `NEW`
1. [普京抵京画面](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E6%8A%B5%E4%BA%AC%E7%94%BB%E9%9D%A2%23) `2.1M 🔥` `NEW`
1. [走好网上群众路线百个成绩突出账号](https://s.weibo.com/weibo?q=%23%E8%B5%B0%E5%A5%BD%E7%BD%91%E4%B8%8A%E7%BE%A4%E4%BC%97%E8%B7%AF%E7%BA%BF%E7%99%BE%E4%B8%AA%E6%88%90%E7%BB%A9%E7%AA%81%E5%87%BA%E8%B4%A6%E5%8F%B7%23) `1.3M 🔥` `NEW`
1. [520送礼上淘宝更优惠](https://s.weibo.com/weibo?q=%23520%E9%80%81%E7%A4%BC%E4%B8%8A%E6%B7%98%E5%AE%9D%E6%9B%B4%E4%BC%98%E6%83%A0%23) `1.1M 🔥` `NEW`
1. [泰国终止60天免签](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E7%BB%88%E6%AD%A260%E5%A4%A9%E5%85%8D%E7%AD%BE%23) `1.0M 🔥` `NEW`
1. [普京走出机舱](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E8%B5%B0%E5%87%BA%E6%9C%BA%E8%88%B1%23) `680.5K 🔥` `NEW`
1. [iPhone或重回钛金属](https://s.weibo.com/weibo?q=%23iPhone%E6%88%96%E9%87%8D%E5%9B%9E%E9%92%9B%E9%87%91%E5%B1%9E%23) `508.6K 🔥` `NEW`
1. [田曦薇喊你喝沪上阿姨摩登咖啡](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%96%8A%E4%BD%A0%E5%96%9D%E6%B2%AA%E4%B8%8A%E9%98%BF%E5%A7%A8%E6%91%A9%E7%99%BB%E5%92%96%E5%95%A1%23) `438.4K 🔥` `NEW`
1. [葡萄牙公布世界杯名单](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99%E5%85%AC%E5%B8%83%E4%B8%96%E7%95%8C%E6%9D%AF%E5%90%8D%E5%8D%95%23) `427.9K 🔥` `NEW`
1. [曝白玉兰提名名单](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BD%E7%8E%89%E5%85%B0%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95%23) `392.1K 🔥` `NEW`
1. [普京抱过的中国男孩将再见普京 (The Chinese boy Putin hugged will see Putin again)](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E6%8A%B1%E8%BF%87%E7%9A%84%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%AD%A9%E5%B0%86%E5%86%8D%E8%A7%81%E6%99%AE%E4%BA%AC%23) `372.0K 🔥` `NEW`
1. [雨霖铃一二集重剪了](https://s.weibo.com/weibo?q=%23%E9%9B%A8%E9%9C%96%E9%93%83%E4%B8%80%E4%BA%8C%E9%9B%86%E9%87%8D%E5%89%AA%E4%BA%86%23) `287.1K 🔥` `NEW`
1. [林俊杰晒和七七合照](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E6%99%92%E5%92%8C%E4%B8%83%E4%B8%83%E5%90%88%E7%85%A7%23) `287.0K 🔥` `NEW`
1. [洁丽雅公示总裁石晶无婚姻登记记录](https://s.weibo.com/weibo?q=%23%E6%B4%81%E4%B8%BD%E9%9B%85%E5%85%AC%E7%A4%BA%E6%80%BB%E8%A3%81%E7%9F%B3%E6%99%B6%E6%97%A0%E5%A9%9A%E5%A7%BB%E7%99%BB%E8%AE%B0%E8%AE%B0%E5%BD%95%23) `286.7K 🔥` `NEW`
1. [七七的毕业作品](https://s.weibo.com/weibo?q=%23%E4%B8%83%E4%B8%83%E7%9A%84%E6%AF%95%E4%B8%9A%E4%BD%9C%E5%93%81%23) `286.6K 🔥` `NEW`
1. [杉杉来了真夫妻结婚13年了](https://s.weibo.com/weibo?q=%23%E6%9D%89%E6%9D%89%E6%9D%A5%E4%BA%86%E7%9C%9F%E5%A4%AB%E5%A6%BB%E7%BB%93%E5%A9%9A13%E5%B9%B4%E4%BA%86%23) `286.4K 🔥` `NEW`
1. [买东西不看尺寸的后果](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E4%B8%9C%E8%A5%BF%E4%B8%8D%E7%9C%8B%E5%B0%BA%E5%AF%B8%E7%9A%84%E5%90%8E%E6%9E%9C%23) `286.2K 🔥` `NEW`
1. [黄灿灿 发腮受益者](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%20%E5%8F%91%E8%85%AE%E5%8F%97%E7%9B%8A%E8%80%85%23) `278.8K 🔥` `NEW`
1. [娜扎咬面包 神图](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E5%92%AC%E9%9D%A2%E5%8C%85%20%E7%A5%9E%E5%9B%BE%23) `268.9K 🔥` `NEW`
1. [章晓梅章晓燕为婆媳关系非姐妹](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E6%99%93%E6%A2%85%E7%AB%A0%E6%99%93%E7%87%95%E4%B8%BA%E5%A9%86%E5%AA%B3%E5%85%B3%E7%B3%BB%E9%9D%9E%E5%A7%90%E5%A6%B9%23) `246.0K 🔥` `NEW`
1. [24岁短剧男演员去世 (Short drama actor dies at 24)](https://s.weibo.com/weibo?q=%2324%E5%B2%81%E7%9F%AD%E5%89%A7%E7%94%B7%E6%BC%94%E5%91%98%E5%8E%BB%E4%B8%96%23) `245.9K 🔥` `NEW`
1. [白鹿侯明昊17年拍的剧要上了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%BE%AF%E6%98%8E%E6%98%8A17%E5%B9%B4%E6%8B%8D%E7%9A%84%E5%89%A7%E8%A6%81%E4%B8%8A%E4%BA%86%23) `245.9K 🔥` `NEW`
1. [赖清德暗怼特朗普后心虚了](https://s.weibo.com/weibo?q=%23%E8%B5%96%E6%B8%85%E5%BE%B7%E6%9A%97%E6%80%BC%E7%89%B9%E6%9C%97%E6%99%AE%E5%90%8E%E5%BF%83%E8%99%9A%E4%BA%86%23) `245.7K 🔥` `NEW`
1. [杨紫把韩东君气疯了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%8A%8A%E9%9F%A9%E4%B8%9C%E5%90%9B%E6%B0%94%E7%96%AF%E4%BA%86%23) `245.7K 🔥` `NEW`
1. [王源衣服上手缝了三万多颗珠子](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E8%A1%A3%E6%9C%8D%E4%B8%8A%E6%89%8B%E7%BC%9D%E4%BA%86%E4%B8%89%E4%B8%87%E5%A4%9A%E9%A2%97%E7%8F%A0%E5%AD%90%23) `234.5K 🔥` `NEW`
1. [白发重新变黑的方法](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%8F%91%E9%87%8D%E6%96%B0%E5%8F%98%E9%BB%91%E7%9A%84%E6%96%B9%E6%B3%95%23) `205.4K 🔥` `NEW`
1. [家业收视率](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%E6%94%B6%E8%A7%86%E7%8E%87%23) `204.5K 🔥` `NEW`
1. [主角热度破29000](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%E7%83%AD%E5%BA%A6%E7%A0%B429000%23) `204.0K 🔥` `NEW`
1. [特斯拉放弃印度建厂](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E6%94%BE%E5%BC%83%E5%8D%B0%E5%BA%A6%E5%BB%BA%E5%8E%82%23) `203.4K 🔥` `NEW`
1. [主角](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `190.4K 🔥` `NEW`
1. [曝平台三部剧逃档 (It is revealed that three dramas on the platform have escaped from release)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%B9%B3%E5%8F%B0%E4%B8%89%E9%83%A8%E5%89%A7%E9%80%83%E6%A1%A3%23) `180.9K 🔥` `NEW`
1. [华尔街股神做空芯片股](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E5%B0%94%E8%A1%97%E8%82%A1%E7%A5%9E%E5%81%9A%E7%A9%BA%E8%8A%AF%E7%89%87%E8%82%A1%23) `178.3K 🔥` `NEW`
1. [杨洋释小龙展昭vs展昭](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E9%87%8A%E5%B0%8F%E9%BE%99%E5%B1%95%E6%98%ADvs%E5%B1%95%E6%98%AD%23) `176.1K 🔥` `NEW`
1. [孙杨采访时突然开始点餐](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E9%87%87%E8%AE%BF%E6%97%B6%E7%AA%81%E7%84%B6%E5%BC%80%E5%A7%8B%E7%82%B9%E9%A4%90%23) `175.1K 🔥` `NEW`
1. [拿婴儿形象擦边泄愤击穿伦理底线](https://s.weibo.com/weibo?q=%23%E6%8B%BF%E5%A9%B4%E5%84%BF%E5%BD%A2%E8%B1%A1%E6%93%A6%E8%BE%B9%E6%B3%84%E6%84%A4%E5%87%BB%E7%A9%BF%E4%BC%A6%E7%90%86%E5%BA%95%E7%BA%BF%23) `164.6K 🔥` `NEW`
1. [给阿嬷的情书 删减的最后一封信](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%20%E5%88%A0%E5%87%8F%E7%9A%84%E6%9C%80%E5%90%8E%E4%B8%80%E5%B0%81%E4%BF%A1%23) `156.6K 🔥` `NEW`
1. [爱情有烟火播出时间](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E6%9C%89%E7%83%9F%E7%81%AB%E6%92%AD%E5%87%BA%E6%97%B6%E9%97%B4%23) `140.6K 🔥` `NEW`
1. [3岁娃被独自分到8节外静音车厢](https://s.weibo.com/weibo?q=%233%E5%B2%81%E5%A8%83%E8%A2%AB%E7%8B%AC%E8%87%AA%E5%88%86%E5%88%B08%E8%8A%82%E5%A4%96%E9%9D%99%E9%9F%B3%E8%BD%A6%E5%8E%A2%23) `137.1K 🔥` `NEW`
1. [白玉兰](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%23) `117.3K 🔥` `NEW`
1. [十个勤天摇人式官宣](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%E6%91%87%E4%BA%BA%E5%BC%8F%E5%AE%98%E5%AE%A3%23) `115.1K 🔥` `NEW`
1. [警方通报中学女生跑操后死亡 (Police report middle school girl dies after running for exercise)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E4%B8%AD%E5%AD%A6%E5%A5%B3%E7%94%9F%E8%B7%91%E6%93%8D%E5%90%8E%E6%AD%BB%E4%BA%A1%23) `114.3K 🔥` `NEW`
1. [张佳宁宋茜提前约会](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BD%B3%E5%AE%81%E5%AE%8B%E8%8C%9C%E6%8F%90%E5%89%8D%E7%BA%A6%E4%BC%9A%23) `113.1K 🔥` `NEW`
1. [民政局回应女子遗体18年无人认领](https://s.weibo.com/weibo?q=%23%E6%B0%91%E6%94%BF%E5%B1%80%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%90%E9%81%97%E4%BD%9318%E5%B9%B4%E6%97%A0%E4%BA%BA%E8%AE%A4%E9%A2%86%23) `112.4K 🔥` `NEW`
1. [特朗普暗示日本过头了](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%9A%97%E7%A4%BA%E6%97%A5%E6%9C%AC%E8%BF%87%E5%A4%B4%E4%BA%86%23) `111.8K 🔥` `NEW`
1. [渣打银行宣布将裁员近8000人](https://s.weibo.com/weibo?q=%23%E6%B8%A3%E6%89%93%E9%93%B6%E8%A1%8C%E5%AE%A3%E5%B8%83%E5%B0%86%E8%A3%81%E5%91%98%E8%BF%918000%E4%BA%BA%23) `104.1K 🔥` `NEW`
1. [马嘉祺宋亚轩中戏校园卡照片](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E5%AE%8B%E4%BA%9A%E8%BD%A9%E4%B8%AD%E6%88%8F%E6%A0%A1%E5%9B%AD%E5%8D%A1%E7%85%A7%E7%89%87%23) `102.5K 🔥` `NEW`
1. [黄金直线跳水原因找到了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%9B%B4%E7%BA%BF%E8%B7%B3%E6%B0%B4%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `99.6K 🔥` `NEW`
1. [洁难财](https://s.weibo.com/weibo?q=%23%E6%B4%81%E9%9A%BE%E8%B4%A2%23) `98.0K 🔥` `NEW`
1. [天赐的声音 穆祉丞](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E8%B5%90%E7%9A%84%E5%A3%B0%E9%9F%B3%20%E7%A9%86%E7%A5%89%E4%B8%9E%23) `96.3K 🔥` `NEW`
1. [李登科谈卢昱晓薛之谦盗摄](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%99%BB%E7%A7%91%E8%B0%88%E5%8D%A2%E6%98%B1%E6%99%93%E8%96%9B%E4%B9%8B%E8%B0%A6%E7%9B%97%E6%91%84%23) `94.9K 🔥` `NEW`
1. [这种杨梅不要吃 (Don’t eat this kind of bayberry)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%A7%8D%E6%9D%A8%E6%A2%85%E4%B8%8D%E8%A6%81%E5%90%83%23) `93.8K 🔥` `NEW`
1. [林俊杰现身七七毕业典礼](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E7%8E%B0%E8%BA%AB%E4%B8%83%E4%B8%83%E6%AF%95%E4%B8%9A%E5%85%B8%E7%A4%BC%23) `92.9K 🔥` `NEW`

Updated at 2026-05-20 00:03:58

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
