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

1. [体操运动员坠楼涉事教练被立案调查 (Coach involved in gymnast's fall is under investigation)](https://s.weibo.com/weibo?q=%23%E4%BD%93%E6%93%8D%E8%BF%90%E5%8A%A8%E5%91%98%E5%9D%A0%E6%A5%BC%E6%B6%89%E4%BA%8B%E6%95%99%E7%BB%83%E8%A2%AB%E7%AB%8B%E6%A1%88%E8%B0%83%E6%9F%A5%23) `1.1M 🔥` `NEW`
1. [两名小孩扔爆竹致1200年古树起火](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%90%8D%E5%B0%8F%E5%AD%A9%E6%89%94%E7%88%86%E7%AB%B9%E8%87%B41200%E5%B9%B4%E5%8F%A4%E6%A0%91%E8%B5%B7%E7%81%AB%23) `810.9K 🔥` `NEW`
1. [12家第三方火车票网售平台被约谈](https://s.weibo.com/weibo?q=%2312%E5%AE%B6%E7%AC%AC%E4%B8%89%E6%96%B9%E7%81%AB%E8%BD%A6%E7%A5%A8%E7%BD%91%E5%94%AE%E5%B9%B3%E5%8F%B0%E8%A2%AB%E7%BA%A6%E8%B0%88%23) `403.7K 🔥` `NEW`
1. [开始推理吧 接原班人马](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%A7%8B%E6%8E%A8%E7%90%86%E5%90%A7%20%E6%8E%A5%E5%8E%9F%E7%8F%AD%E4%BA%BA%E9%A9%AC%23) `335.1K 🔥` `NEW`
1. [周深忘词 天花板没有提词器](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E5%BF%98%E8%AF%8D%20%E5%A4%A9%E8%8A%B1%E6%9D%BF%E6%B2%A1%E6%9C%89%E6%8F%90%E8%AF%8D%E5%99%A8%23) `233.0K 🔥` `NEW`
1. [阚清子演技](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E6%BC%94%E6%8A%80%23) `197.8K 🔥` `NEW`
1. [林孝埈刘少昂孙龙出战1000米](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%88%E5%88%98%E5%B0%91%E6%98%82%E5%AD%99%E9%BE%99%E5%87%BA%E6%88%981000%E7%B1%B3%23) `197.5K 🔥` `NEW`
1. [春节中国赴日旅客量腰斩了](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E4%B8%AD%E5%9B%BD%E8%B5%B4%E6%97%A5%E6%97%85%E5%AE%A2%E9%87%8F%E8%85%B0%E6%96%A9%E4%BA%86%23) `197.5K 🔥` `NEW`
1. [李一桐高情商公关](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E9%AB%98%E6%83%85%E5%95%86%E5%85%AC%E5%85%B3%23) `197.0K 🔥` `NEW`
1. [巴黎是杨超越家](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E9%BB%8E%E6%98%AF%E6%9D%A8%E8%B6%85%E8%B6%8A%E5%AE%B6%23) `196.7K 🔥` `NEW`
1. [黄金白银直线下跌 (Gold and silver plummet)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%99%BD%E9%93%B6%E7%9B%B4%E7%BA%BF%E4%B8%8B%E8%B7%8C%23) `196.3K 🔥` `NEW`
1. [ZB1将以五人组活动](https://s.weibo.com/weibo?q=%23ZB1%E5%B0%86%E4%BB%A5%E4%BA%94%E4%BA%BA%E7%BB%84%E6%B4%BB%E5%8A%A8%23) `196.1K 🔥` `NEW`
1. [宋旻浩或将被判刑](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%97%BB%E6%B5%A9%E6%88%96%E5%B0%86%E8%A2%AB%E5%88%A4%E5%88%91%23) `195.5K 🔥` `NEW`
1. [换头像就是换人设了](https://s.weibo.com/weibo?q=%23%E6%8D%A2%E5%A4%B4%E5%83%8F%E5%B0%B1%E6%98%AF%E6%8D%A2%E4%BA%BA%E8%AE%BE%E4%BA%86%23) `195.5K 🔥` `NEW`
1. [李一桐发了49999的红包](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E5%8F%91%E4%BA%8649999%E7%9A%84%E7%BA%A2%E5%8C%85%23) `192.0K 🔥` `NEW`
1. [德云社陶阳结婚](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E4%BA%91%E7%A4%BE%E9%99%B6%E9%98%B3%E7%BB%93%E5%A9%9A%23) `191.2K 🔥` `NEW`
1. [男子称亲吻搂抱女子说不算恋爱](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%A7%B0%E4%BA%B2%E5%90%BB%E6%90%82%E6%8A%B1%E5%A5%B3%E5%AD%90%E8%AF%B4%E4%B8%8D%E7%AE%97%E6%81%8B%E7%88%B1%23) `184.4K 🔥` `NEW`
1. [游乐王子的女儿感染合胞病毒](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E4%B9%90%E7%8E%8B%E5%AD%90%E7%9A%84%E5%A5%B3%E5%84%BF%E6%84%9F%E6%9F%93%E5%90%88%E8%83%9E%E7%97%85%E6%AF%92%23) `183.3K 🔥` `NEW`
1. [爱泼斯坦死后遗体被秘密转移](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%AD%BB%E5%90%8E%E9%81%97%E4%BD%93%E8%A2%AB%E7%A7%98%E5%AF%86%E8%BD%AC%E7%A7%BB%23) `179.9K 🔥` `NEW`
1. [28岁华人女孩遭前男友枪杀](https://s.weibo.com/weibo?q=%2328%E5%B2%81%E5%8D%8E%E4%BA%BA%E5%A5%B3%E5%AD%A9%E9%81%AD%E5%89%8D%E7%94%B7%E5%8F%8B%E6%9E%AA%E6%9D%80%23) `148.9K 🔥` `NEW`
1. [玫瑰丛生定档 (Rose bushes scheduled)](https://s.weibo.com/weibo?q=%23%E7%8E%AB%E7%91%B0%E4%B8%9B%E7%94%9F%E5%AE%9A%E6%A1%A3%23) `145.0K 🔥` `NEW`
1. [iPhone安卓无缝换机](https://s.weibo.com/weibo?q=%23iPhone%E5%AE%89%E5%8D%93%E6%97%A0%E7%BC%9D%E6%8D%A2%E6%9C%BA%23) `143.5K 🔥` `NEW`
1. [郑嘉颖越说越快越说越气越说越疯](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%98%89%E9%A2%96%E8%B6%8A%E8%AF%B4%E8%B6%8A%E5%BF%AB%E8%B6%8A%E8%AF%B4%E8%B6%8A%E6%B0%94%E8%B6%8A%E8%AF%B4%E8%B6%8A%E7%96%AF%23) `141.6K 🔥` `NEW`
1. [点外卖点到僵尸店当事女子发声](https://s.weibo.com/weibo?q=%23%E7%82%B9%E5%A4%96%E5%8D%96%E7%82%B9%E5%88%B0%E5%83%B5%E5%B0%B8%E5%BA%97%E5%BD%93%E4%BA%8B%E5%A5%B3%E5%AD%90%E5%8F%91%E5%A3%B0%23) `133.3K 🔥` `NEW`
1. [年少有为](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%B0%91%E6%9C%89%E4%B8%BA%23) `94.0K 🔥` `NEW`
1. [美国反对特朗普](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%8F%8D%E5%AF%B9%E7%89%B9%E6%9C%97%E6%99%AE%23) `93.9K 🔥` `NEW`
1. [丞磊 上位者](https://s.weibo.com/weibo?q=%23%E4%B8%9E%E7%A3%8A%20%E4%B8%8A%E4%BD%8D%E8%80%85%23) `93.5K 🔥` `NEW`
1. [当狗狗发现挠它的人不认识时](https://s.weibo.com/weibo?q=%23%E5%BD%93%E7%8B%97%E7%8B%97%E5%8F%91%E7%8E%B0%E6%8C%A0%E5%AE%83%E7%9A%84%E4%BA%BA%E4%B8%8D%E8%AE%A4%E8%AF%86%E6%97%B6%23) `90.7K 🔥` `NEW`
1. [小马糕](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%A9%AC%E7%B3%95%23) `83.3K 🔥` `NEW`
1. [廉子文向对手致歉反遭挥打](https://s.weibo.com/weibo?q=%23%E5%BB%89%E5%AD%90%E6%96%87%E5%90%91%E5%AF%B9%E6%89%8B%E8%87%B4%E6%AD%89%E5%8F%8D%E9%81%AD%E6%8C%A5%E6%89%93%23) `83.1K 🔥` `NEW`
1. [短道速滑 (short track speed skating)](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%23) `79.6K 🔥` `NEW`
1. [iPhoneFold或引爆大折叠市场](https://s.weibo.com/weibo?q=%23iPhoneFold%E6%88%96%E5%BC%95%E7%88%86%E5%A4%A7%E6%8A%98%E5%8F%A0%E5%B8%82%E5%9C%BA%23) `76.3K 🔥` `NEW`
1. [马斯克回应公司高管离职潮](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%9B%9E%E5%BA%94%E5%85%AC%E5%8F%B8%E9%AB%98%E7%AE%A1%E7%A6%BB%E8%81%8C%E6%BD%AE%23) `72.9K 🔥` `NEW`
1. [荷兰选手埋怨廉子文](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E9%80%89%E6%89%8B%E5%9F%8B%E6%80%A8%E5%BB%89%E5%AD%90%E6%96%87%23) `70.6K 🔥` `NEW`
1. [黄晓明 时代少年团永远在一起](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%20%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%B0%B8%E8%BF%9C%E5%9C%A8%E4%B8%80%E8%B5%B7%23) `67.7K 🔥` `NEW`
1. [完全可以上春晚的程度](https://s.weibo.com/weibo?q=%23%E5%AE%8C%E5%85%A8%E5%8F%AF%E4%BB%A5%E4%B8%8A%E6%98%A5%E6%99%9A%E7%9A%84%E7%A8%8B%E5%BA%A6%23) `65.5K 🔥` `NEW`
1. [每天吃25克榛子或能降低坏胆固醇](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%A4%A9%E5%90%8325%E5%85%8B%E6%A6%9B%E5%AD%90%E6%88%96%E8%83%BD%E9%99%8D%E4%BD%8E%E5%9D%8F%E8%83%86%E5%9B%BA%E9%86%87%23) `65.3K 🔥` `NEW`
1. [你的磁场很好天生就是富婆命](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E7%A3%81%E5%9C%BA%E5%BE%88%E5%A5%BD%E5%A4%A9%E7%94%9F%E5%B0%B1%E6%98%AF%E5%AF%8C%E5%A9%86%E5%91%BD%23) `59.8K 🔥` `NEW`
1. [携程为何让民宿酒店陷入生存困境](https://s.weibo.com/weibo?q=%23%E6%90%BA%E7%A8%8B%E4%B8%BA%E4%BD%95%E8%AE%A9%E6%B0%91%E5%AE%BF%E9%85%92%E5%BA%97%E9%99%B7%E5%85%A5%E7%94%9F%E5%AD%98%E5%9B%B0%E5%A2%83%23) `58.0K 🔥` `NEW`
1. [iOS26.3正式版来了](https://s.weibo.com/weibo?q=%23iOS26.3%E6%AD%A3%E5%BC%8F%E7%89%88%E6%9D%A5%E4%BA%86%23) `57.2K 🔥` `NEW`
1. [李佳琦蜜丝婷带团勇闯普吉岛 (Li Jiaqi and Misting lead a group to explore Phuket Island)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BD%B3%E7%90%A6%E8%9C%9C%E4%B8%9D%E5%A9%B7%E5%B8%A6%E5%9B%A2%E5%8B%87%E9%97%AF%E6%99%AE%E5%90%89%E5%B2%9B%23) `417.5K 🔥` `+879%`
1. [生小孩需要一个发达的前额叶 (Having a baby requires a developed prefrontal lobe)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%B0%8F%E5%AD%A9%E9%9C%80%E8%A6%81%E4%B8%80%E4%B8%AA%E5%8F%91%E8%BE%BE%E7%9A%84%E5%89%8D%E9%A2%9D%E5%8F%B6%23) `332.4K 🔥` `+62%`
1. [宋亚轩怎么那么高 (Why is Song Yaxuan so tall?)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E6%80%8E%E4%B9%88%E9%82%A3%E4%B9%88%E9%AB%98%23) `171.1K 🔥` `+66%`
1. [男子出轨公婆照料婚外幼童刺痛女子 (Man cheats on in-laws and hurts woman by taking care of child outside marriage)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%87%BA%E8%BD%A8%E5%85%AC%E5%A9%86%E7%85%A7%E6%96%99%E5%A9%9A%E5%A4%96%E5%B9%BC%E7%AB%A5%E5%88%BA%E7%97%9B%E5%A5%B3%E5%AD%90%23) `100.6K 🔥` `+22%`
1. [切除子宫的她们](https://s.weibo.com/weibo?q=%23%E5%88%87%E9%99%A4%E5%AD%90%E5%AE%AB%E7%9A%84%E5%A5%B9%E4%BB%AC%23) `87.6K 🔥` `+50%`
1. [查理苏 (Charlie Sue)](https://s.weibo.com/weibo?q=%23%E6%9F%A5%E7%90%86%E8%8B%8F%23) `86.8K 🔥` `+137%`
1. [春运路上藏着这些马年彩蛋 (These Year of the Horse Easter Eggs are Hidden on the Spring Festival Transport Road)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%BF%90%E8%B7%AF%E4%B8%8A%E8%97%8F%E7%9D%80%E8%BF%99%E4%BA%9B%E9%A9%AC%E5%B9%B4%E5%BD%A9%E8%9B%8B%23) `599.8K 🔥`
1. [女演员投资失败搬进出租屋 (Actress’ investment failed and she moved into a rental house)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%BC%94%E5%91%98%E6%8A%95%E8%B5%84%E5%A4%B1%E8%B4%A5%E6%90%AC%E8%BF%9B%E5%87%BA%E7%A7%9F%E5%B1%8B%23) `93.5K 🔥`
1. [廉子文被取消成绩](https://s.weibo.com/weibo?q=%23%E5%BB%89%E5%AD%90%E6%96%87%E8%A2%AB%E5%8F%96%E6%B6%88%E6%88%90%E7%BB%A9%23) `184.4K 🔥` `-82%`
1. [宋威龙抽到马上有对象的反应 (Song Weilong immediately responded to the target when he drew it)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E6%8A%BD%E5%88%B0%E9%A9%AC%E4%B8%8A%E6%9C%89%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%8F%8D%E5%BA%94%23) `69.6K 🔥` `-30%`
1. [谭松韵上春晚没和家人说 (Tan Songyun went to the Spring Festival Gala without telling her family)](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E4%B8%8A%E6%98%A5%E6%99%9A%E6%B2%A1%E5%92%8C%E5%AE%B6%E4%BA%BA%E8%AF%B4%23) `61.2K 🔥` `-73%`

Updated at 2026-02-12 10:34:00

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
