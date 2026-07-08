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

1. [台风 (typhoon)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `2.6M 🔥` `NEW`
1. [世界杯四分之一决赛门票暴跌近60%](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E5%9B%9B%E5%88%86%E4%B9%8B%E4%B8%80%E5%86%B3%E8%B5%9B%E9%97%A8%E7%A5%A8%E6%9A%B4%E8%B7%8C%E8%BF%9160%25%23) `1.0M 🔥` `NEW`
1. [G2战胜T1](https://s.weibo.com/weibo?q=%23G2%E6%88%98%E8%83%9CT1%23) `904.3K 🔥` `NEW`
1. [广西贵港12000名师生被困](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E8%B4%B5%E6%B8%AF12000%E5%90%8D%E5%B8%88%E7%94%9F%E8%A2%AB%E5%9B%B0%23) `460.7K 🔥` `NEW`
1. [虞书欣穿足球剧宣被踢一脚](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%A9%BF%E8%B6%B3%E7%90%83%E5%89%A7%E5%AE%A3%E8%A2%AB%E8%B8%A2%E4%B8%80%E8%84%9A%23) `427.0K 🔥` `NEW`
1. [华为几乎把整本山海经都注册了](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%87%A0%E4%B9%8E%E6%8A%8A%E6%95%B4%E6%9C%AC%E5%B1%B1%E6%B5%B7%E7%BB%8F%E9%83%BD%E6%B3%A8%E5%86%8C%E4%BA%86%23) `425.5K 🔥` `NEW`
1. [功夫女足的观后感](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%9A%84%E8%A7%82%E5%90%8E%E6%84%9F%23) `422.0K 🔥` `NEW`
1. [雀骨](https://s.weibo.com/weibo?q=%23%E9%9B%80%E9%AA%A8%23) `415.9K 🔥` `NEW`
1. [张婧仪合作过最帅的男演员宋威龙](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%90%88%E4%BD%9C%E8%BF%87%E6%9C%80%E5%B8%85%E7%9A%84%E7%94%B7%E6%BC%94%E5%91%98%E5%AE%8B%E5%A8%81%E9%BE%99%23) `411.4K 🔥` `NEW`
1. [特朗普认为美伊谅解备忘录已终结](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%A4%E4%B8%BA%E7%BE%8E%E4%BC%8A%E8%B0%85%E8%A7%A3%E5%A4%87%E5%BF%98%E5%BD%95%E5%B7%B2%E7%BB%88%E7%BB%93%23) `408.4K 🔥` `NEW`
1. [7000米入门雪山夺命3人已遇难 (Three people died in the 7000-meter entry snow mountain)](https://s.weibo.com/weibo?q=%237000%E7%B1%B3%E5%85%A5%E9%97%A8%E9%9B%AA%E5%B1%B1%E5%A4%BA%E5%91%BD3%E4%BA%BA%E5%B7%B2%E9%81%87%E9%9A%BE%23) `407.2K 🔥` `NEW`
1. [印13岁女孩遭32人轮奸涉事酒店被拆](https://s.weibo.com/weibo?q=%23%E5%8D%B013%E5%B2%81%E5%A5%B3%E5%AD%A9%E9%81%AD32%E4%BA%BA%E8%BD%AE%E5%A5%B8%E6%B6%89%E4%BA%8B%E9%85%92%E5%BA%97%E8%A2%AB%E6%8B%86%23) `396.6K 🔥` `NEW`
1. [恋与深空道歉自查自纠仍是将来时](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E9%81%93%E6%AD%89%E8%87%AA%E6%9F%A5%E8%87%AA%E7%BA%A0%E4%BB%8D%E6%98%AF%E5%B0%86%E6%9D%A5%E6%97%B6%23) `384.6K 🔥` `NEW`
1. [吴彤回应大变样](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%BD%A4%E5%9B%9E%E5%BA%94%E5%A4%A7%E5%8F%98%E6%A0%B7%23) `383.9K 🔥` `NEW`
1. [周深胜诉](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E8%83%9C%E8%AF%89%23) `381.4K 🔥` `NEW`
1. [奔驰纯电GLC来了](https://s.weibo.com/weibo?q=%23%E5%A5%94%E9%A9%B0%E7%BA%AF%E7%94%B5GLC%E6%9D%A5%E4%BA%86%23) `380.0K 🔥` `NEW`
1. [董思成热转区](https://s.weibo.com/weibo?q=%23%E8%91%A3%E6%80%9D%E6%88%90%E7%83%AD%E8%BD%AC%E5%8C%BA%23) `376.3K 🔥` `NEW`
1. [8个月高烧孕妇被紧急送医](https://s.weibo.com/weibo?q=%238%E4%B8%AA%E6%9C%88%E9%AB%98%E7%83%A7%E5%AD%95%E5%A6%87%E8%A2%AB%E7%B4%A7%E6%80%A5%E9%80%81%E5%8C%BB%23) `374.9K 🔥` `NEW`
1. [T1淘汰](https://s.weibo.com/weibo?q=%23T1%E6%B7%98%E6%B1%B0%23) `373.2K 🔥` `NEW`
1. [明显能感受到暑假工上班了](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%BE%E8%83%BD%E6%84%9F%E5%8F%97%E5%88%B0%E6%9A%91%E5%81%87%E5%B7%A5%E4%B8%8A%E7%8F%AD%E4%BA%86%23) `372.3K 🔥` `NEW`
1. [TF四代去登陆日连纸钥匙都拿不到 (The fourth generation of TF went to D-day and couldn’t even get a paper key.)](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E5%8E%BB%E7%99%BB%E9%99%86%E6%97%A5%E8%BF%9E%E7%BA%B8%E9%92%A5%E5%8C%99%E9%83%BD%E6%8B%BF%E4%B8%8D%E5%88%B0%23) `370.2K 🔥` `NEW`
1. [宋亚轩写的这句话是懒羊羊歌词](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%86%99%E7%9A%84%E8%BF%99%E5%8F%A5%E8%AF%9D%E6%98%AF%E6%87%92%E7%BE%8A%E7%BE%8A%E6%AD%8C%E8%AF%8D%23) `365.2K 🔥` `NEW`
1. [刘浩存新风格美翻了](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E6%96%B0%E9%A3%8E%E6%A0%BC%E7%BE%8E%E7%BF%BB%E4%BA%86%23) `361.1K 🔥` `NEW`
1. [气象台今天继续发布暴雨橙色预警](https://s.weibo.com/weibo?q=%23%E6%B0%94%E8%B1%A1%E5%8F%B0%E4%BB%8A%E5%A4%A9%E7%BB%A7%E7%BB%AD%E5%8F%91%E5%B8%83%E6%9A%B4%E9%9B%A8%E6%A9%99%E8%89%B2%E9%A2%84%E8%AD%A6%23) `355.8K 🔥` `NEW`
1. [大叔被毒蛇咬伤将蛇剪两段蛇头跑了](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%8F%94%E8%A2%AB%E6%AF%92%E8%9B%87%E5%92%AC%E4%BC%A4%E5%B0%86%E8%9B%87%E5%89%AA%E4%B8%A4%E6%AE%B5%E8%9B%87%E5%A4%B4%E8%B7%91%E4%BA%86%23) `349.5K 🔥` `NEW`
1. [科学应对台风指南](https://s.weibo.com/weibo?q=%23%E7%A7%91%E5%AD%A6%E5%BA%94%E5%AF%B9%E5%8F%B0%E9%A3%8E%E6%8C%87%E5%8D%97%23) `941.4K 🔥`
1. [全新奔驰纯电GLC (All-new Mercedes-Benz pure electric GLC)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%96%B0%E5%A5%94%E9%A9%B0%E7%BA%AF%E7%94%B5GLC%23) `939.1K 🔥`
1. [法拉利高管称中国车企像在开发快消品](https://s.weibo.com/weibo?q=%23%E6%B3%95%E6%8B%89%E5%88%A9%E9%AB%98%E7%AE%A1%E7%A7%B0%E4%B8%AD%E5%9B%BD%E8%BD%A6%E4%BC%81%E5%83%8F%E5%9C%A8%E5%BC%80%E5%8F%91%E5%BF%AB%E6%B6%88%E5%93%81%23) `432.6K 🔥` `-26%`
1. [台风巴威路径又开始摇摆了](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E5%B7%B4%E5%A8%81%E8%B7%AF%E5%BE%84%E5%8F%88%E5%BC%80%E5%A7%8B%E6%91%87%E6%91%86%E4%BA%86%23) `432.5K 🔥` `-26%`
1. [莫德里奇点赞达利奇](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E5%BE%B7%E9%87%8C%E5%A5%87%E7%82%B9%E8%B5%9E%E8%BE%BE%E5%88%A9%E5%A5%87%23) `430.4K 🔥` `-54%`
1. [金晨仍持续掉粉](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%E4%BB%8D%E6%8C%81%E7%BB%AD%E6%8E%89%E7%B2%89%23) `424.8K 🔥` `-26%`
1. [千万不要侧躺玩手机 (Never lie on your side and play with your phone)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E4%BE%A7%E8%BA%BA%E7%8E%A9%E6%89%8B%E6%9C%BA%23) `419.5K 🔥` `-41%`
1. [赵丽颖闺蜜暂代经纪人 (Zhao Liying's best friend temporarily acts as agent)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E9%97%BA%E8%9C%9C%E6%9A%82%E4%BB%A3%E7%BB%8F%E7%BA%AA%E4%BA%BA%23) `418.3K 🔥` `-27%`
1. [有没有体面一点的午休方式](https://s.weibo.com/weibo?q=%23%E6%9C%89%E6%B2%A1%E6%9C%89%E4%BD%93%E9%9D%A2%E4%B8%80%E7%82%B9%E7%9A%84%E5%8D%88%E4%BC%91%E6%96%B9%E5%BC%8F%23) `413.5K 🔥` `-27%`
1. [身体严重缺觉的8个迹象](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BD%93%E4%B8%A5%E9%87%8D%E7%BC%BA%E8%A7%89%E7%9A%848%E4%B8%AA%E8%BF%B9%E8%B1%A1%23) `410.7K 🔥` `-25%`
1. [范丞丞方起诉司晓迪 (Fan Chengcheng sues Si Xiaodi)](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E6%96%B9%E8%B5%B7%E8%AF%89%E5%8F%B8%E6%99%93%E8%BF%AA%23) `403.4K 🔥` `-96%`
1. [阿根廷 脏 (argentina dirty)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%20%E8%84%8F%23) `402.5K 🔥` `-30%`
1. [大厂人的消费观好可怕](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%8E%82%E4%BA%BA%E7%9A%84%E6%B6%88%E8%B4%B9%E8%A7%82%E5%A5%BD%E5%8F%AF%E6%80%95%23) `399.9K 🔥` `-22%`
1. [董思成退出NCT](https://s.weibo.com/weibo?q=%23%E8%91%A3%E6%80%9D%E6%88%90%E9%80%80%E5%87%BANCT%23) `398.4K 🔥` `-26%`
1. [野狗骨头疑似剧宣抄袭](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E7%96%91%E4%BC%BC%E5%89%A7%E5%AE%A3%E6%8A%84%E8%A2%AD%23) `395.6K 🔥` `-30%`
1. [广西 血清](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%20%E8%A1%80%E6%B8%85%23) `392.7K 🔥` `-27%`
1. [薛小婉任权领结婚证了](https://s.weibo.com/weibo?q=%23%E8%96%9B%E5%B0%8F%E5%A9%89%E4%BB%BB%E6%9D%83%E9%A2%86%E7%BB%93%E5%A9%9A%E8%AF%81%E4%BA%86%23) `390.4K 🔥` `-27%`
1. [丁程鑫张凌赫看到刘宇宁身上有草莓的反应](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9C%8B%E5%88%B0%E5%88%98%E5%AE%87%E5%AE%81%E8%BA%AB%E4%B8%8A%E6%9C%89%E8%8D%89%E8%8E%93%E7%9A%84%E5%8F%8D%E5%BA%94%23) `388.1K 🔥` `-30%`
1. [曾和儿子换血美国富豪患不治之症](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E5%92%8C%E5%84%BF%E5%AD%90%E6%8D%A2%E8%A1%80%E7%BE%8E%E5%9B%BD%E5%AF%8C%E8%B1%AA%E6%82%A3%E4%B8%8D%E6%B2%BB%E4%B9%8B%E7%97%87%23) `387.0K 🔥` `-26%`
1. [哈兰德 没白偷水喝 (Haaland didn’t steal the water for free.)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%20%E6%B2%A1%E7%99%BD%E5%81%B7%E6%B0%B4%E5%96%9D%23) `368.2K 🔥` `-29%`
1. [虞书欣陈靖可老钱风剧宣](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E9%99%88%E9%9D%96%E5%8F%AF%E8%80%81%E9%92%B1%E9%A3%8E%E5%89%A7%E5%AE%A3%23) `364.3K 🔥` `-34%`
1. [上海一儿童小区内遭狗撕咬](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%B8%80%E5%84%BF%E7%AB%A5%E5%B0%8F%E5%8C%BA%E5%86%85%E9%81%AD%E7%8B%97%E6%92%95%E5%92%AC%23) `360.3K 🔥` `-32%`
1. [霉霉已经可以买下月球了 (Swifty Swift can already buy the moon)](https://s.weibo.com/weibo?q=%23%E9%9C%89%E9%9C%89%E5%B7%B2%E7%BB%8F%E5%8F%AF%E4%BB%A5%E4%B9%B0%E4%B8%8B%E6%9C%88%E7%90%83%E4%BA%86%23) `356.8K 🔥` `-31%`
1. [玄彬孙艺珍带儿子逛科技馆](https://s.weibo.com/weibo?q=%23%E7%8E%84%E5%BD%AC%E5%AD%99%E8%89%BA%E7%8F%8D%E5%B8%A6%E5%84%BF%E5%AD%90%E9%80%9B%E7%A7%91%E6%8A%80%E9%A6%86%23) `351.6K 🔥` `-29%`
1. [gemini为了偷懒不择手段](https://s.weibo.com/weibo?q=%23gemini%E4%B8%BA%E4%BA%86%E5%81%B7%E6%87%92%E4%B8%8D%E6%8B%A9%E6%89%8B%E6%AE%B5%23) `348.8K 🔥` `-36%`

Updated at 2026-07-08 19:29:20

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
