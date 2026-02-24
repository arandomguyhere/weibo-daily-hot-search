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

1. [葡萄330草莓360元一斤网友惊呆 (Netizens were shocked when grapes cost 330 yuan and strawberries cost 360 yuan per pound.)](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84330%E8%8D%89%E8%8E%93360%E5%85%83%E4%B8%80%E6%96%A4%E7%BD%91%E5%8F%8B%E6%83%8A%E5%91%86%23) `785.6K 🔥` `NEW`
1. [律师说法](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E8%AF%B4%E6%B3%95%23) `565.3K 🔥` `NEW`
1. [男子误喝过期牛奶暴瘦53斤](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%AF%AF%E5%96%9D%E8%BF%87%E6%9C%9F%E7%89%9B%E5%A5%B6%E6%9A%B4%E7%98%A653%E6%96%A4%23) `279.9K 🔥` `NEW`
1. [36斤活羊烤完6.9斤涉事餐馆已无顾客](https://s.weibo.com/weibo?q=%2336%E6%96%A4%E6%B4%BB%E7%BE%8A%E7%83%A4%E5%AE%8C6.9%E6%96%A4%E6%B6%89%E4%BA%8B%E9%A4%90%E9%A6%86%E5%B7%B2%E6%97%A0%E9%A1%BE%E5%AE%A2%23) `266.4K 🔥` `NEW`
1. [短国年代剧已经拍到了05年](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%9B%BD%E5%B9%B4%E4%BB%A3%E5%89%A7%E5%B7%B2%E7%BB%8F%E6%8B%8D%E5%88%B0%E4%BA%8605%E5%B9%B4%23) `266.1K 🔥` `NEW`
1. [任敏 比例](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%95%8F%20%E6%AF%94%E4%BE%8B%23) `249.2K 🔥` `NEW`
1. [沈腾个人总票房达400亿](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E4%B8%AA%E4%BA%BA%E6%80%BB%E7%A5%A8%E6%88%BF%E8%BE%BE400%E4%BA%BF%23) `223.3K 🔥` `NEW`
1. [孟子义将门独后紫衣造型](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E7%B4%AB%E8%A1%A3%E9%80%A0%E5%9E%8B%23) `199.2K 🔥` `NEW`
1. [咖啡是打工人的吊瓶](https://s.weibo.com/weibo?q=%23%E5%92%96%E5%95%A1%E6%98%AF%E6%89%93%E5%B7%A5%E4%BA%BA%E7%9A%84%E5%90%8A%E7%93%B6%23) `193.8K 🔥` `NEW`
1. [小S二女儿参加伦敦时装周](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E4%BA%8C%E5%A5%B3%E5%84%BF%E5%8F%82%E5%8A%A0%E4%BC%A6%E6%95%A6%E6%97%B6%E8%A3%85%E5%91%A8%23) `181.4K 🔥` `NEW`
1. [白鹿首尔回国 (Bailu Seoul returns home)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E9%A6%96%E5%B0%94%E5%9B%9E%E5%9B%BD%23) `145.2K 🔥` `NEW`
1. [正月剃头死舅舅的真相来了](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E6%9C%88%E5%89%83%E5%A4%B4%E6%AD%BB%E8%88%85%E8%88%85%E7%9A%84%E7%9C%9F%E7%9B%B8%E6%9D%A5%E4%BA%86%23) `130.8K 🔥` `NEW`
1. [孩子妈晒童锦程的红包](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E5%A6%88%E6%99%92%E7%AB%A5%E9%94%A6%E7%A8%8B%E7%9A%84%E7%BA%A2%E5%8C%85%23) `115.7K 🔥` `NEW`
1. [赵老师说的太好了 鸡蛋灌饼](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E8%80%81%E5%B8%88%E8%AF%B4%E7%9A%84%E5%A4%AA%E5%A5%BD%E4%BA%86%20%E9%B8%A1%E8%9B%8B%E7%81%8C%E9%A5%BC%23) `103.0K 🔥` `NEW`
1. [黄金再迎直线跳水](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%86%8D%E8%BF%8E%E7%9B%B4%E7%BA%BF%E8%B7%B3%E6%B0%B4%23) `101.8K 🔥` `NEW`
1. [九尾 KPL第一交朋友塑](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%20KPL%E7%AC%AC%E4%B8%80%E4%BA%A4%E6%9C%8B%E5%8F%8B%E5%A1%91%23) `99.9K 🔥` `NEW`
1. [109只个股涨停](https://s.weibo.com/weibo?q=%23109%E5%8F%AA%E4%B8%AA%E8%82%A1%E6%B6%A8%E5%81%9C%23) `97.7K 🔥` `NEW`
1. [迪桑特 东北男人爆款战袍](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E6%A1%91%E7%89%B9%20%E4%B8%9C%E5%8C%97%E7%94%B7%E4%BA%BA%E7%88%86%E6%AC%BE%E6%88%98%E8%A2%8D%23) `94.8K 🔥` `NEW`
1. [38岁中国商人在土耳其被绑架杀害](https://s.weibo.com/weibo?q=%2338%E5%B2%81%E4%B8%AD%E5%9B%BD%E5%95%86%E4%BA%BA%E5%9C%A8%E5%9C%9F%E8%80%B3%E5%85%B6%E8%A2%AB%E7%BB%91%E6%9E%B6%E6%9D%80%E5%AE%B3%23) `87.2K 🔥` `NEW`
1. [A股油气股集体大涨](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%B2%B9%E6%B0%94%E8%82%A1%E9%9B%86%E4%BD%93%E5%A4%A7%E6%B6%A8%23) `77.0K 🔥` `NEW`
1. [侵权杨紫方被判道歉赔偿 (Yang Zifang was sentenced to apologize and pay compensation for copyright infringement)](https://s.weibo.com/weibo?q=%23%E4%BE%B5%E6%9D%83%E6%9D%A8%E7%B4%AB%E6%96%B9%E8%A2%AB%E5%88%A4%E9%81%93%E6%AD%89%E8%B5%94%E5%81%BF%23) `76.6K 🔥` `NEW`
1. [开了个公众号和父母进行魔法对轰](https://s.weibo.com/weibo?q=%23%E5%BC%80%E4%BA%86%E4%B8%AA%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E7%88%B6%E6%AF%8D%E8%BF%9B%E8%A1%8C%E9%AD%94%E6%B3%95%E5%AF%B9%E8%BD%B0%23) `277.0K 🔥` `+32%`
1. [志胜跟大哥十指紧扣](https://s.weibo.com/weibo?q=%23%E5%BF%97%E8%83%9C%E8%B7%9F%E5%A4%A7%E5%93%A5%E5%8D%81%E6%8C%87%E7%B4%A7%E6%89%A3%23) `213.3K 🔥` `+81%`
1. [考研](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%A0%94%23) `161.7K 🔥` `+21%`
1. [考研出分时间 (Postgraduate entrance examination score time)](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%A0%94%E5%87%BA%E5%88%86%E6%97%B6%E9%97%B4%23) `1.1M 🔥`
1. [米兰冬奥超越胜负的动人瞬间 (Moving moments beyond victory and defeat at the Milan Winter Olympics)](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E8%B6%85%E8%B6%8A%E8%83%9C%E8%B4%9F%E7%9A%84%E5%8A%A8%E4%BA%BA%E7%9E%AC%E9%97%B4%23) `631.3K 🔥`
1. [考研查分 (Postgraduate entrance examination score check)](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%A0%94%E6%9F%A5%E5%88%86%23) `271.0K 🔥`
1. [卢昱晓回复外婆去世的粉丝](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E5%9B%9E%E5%A4%8D%E5%A4%96%E5%A9%86%E5%8E%BB%E4%B8%96%E7%9A%84%E7%B2%89%E4%B8%9D%23) `241.7K 🔥`
1. [湖南湘阴一男子放烟花时炸膛致身亡](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E6%B9%98%E9%98%B4%E4%B8%80%E7%94%B7%E5%AD%90%E6%94%BE%E7%83%9F%E8%8A%B1%E6%97%B6%E7%82%B8%E8%86%9B%E8%87%B4%E8%BA%AB%E4%BA%A1%23) `236.4K 🔥`
1. [iPhone18 折叠](https://s.weibo.com/weibo?q=%23iPhone18%20%E6%8A%98%E5%8F%A0%23) `228.9K 🔥`
1. [一栗小莎子第三次化疗](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%A0%97%E5%B0%8F%E8%8E%8E%E5%AD%90%E7%AC%AC%E4%B8%89%E6%AC%A1%E5%8C%96%E7%96%97%23) `220.4K 🔥`
1. [李现和杨紫父母穿同款外套](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E5%92%8C%E6%9D%A8%E7%B4%AB%E7%88%B6%E6%AF%8D%E7%A9%BF%E5%90%8C%E6%AC%BE%E5%A4%96%E5%A5%97%23) `192.9K 🔥`
1. [日本 (Japan)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%23) `191.5K 🔥`
1. [张元英solo成绩](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1solo%E6%88%90%E7%BB%A9%23) `167.9K 🔥`
1. [金银价格大涨原因 (Reasons for the surge in gold and silver prices)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%93%B6%E4%BB%B7%E6%A0%BC%E5%A4%A7%E6%B6%A8%E5%8E%9F%E5%9B%A0%23) `132.2K 🔥`
1. [墨西哥特种部队与毒枭火拼](https://s.weibo.com/weibo?q=%23%E5%A2%A8%E8%A5%BF%E5%93%A5%E7%89%B9%E7%A7%8D%E9%83%A8%E9%98%9F%E4%B8%8E%E6%AF%92%E6%9E%AD%E7%81%AB%E6%8B%BC%23) `130.8K 🔥`
1. [镖人](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `102.5K 🔥`
1. [丁程鑫严浩翔比24 (Ding Chengxin Yan Hao Xiangbi 24)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%AF%9424%23) `83.2K 🔥`
1. [12306半夜候补成功1700元车票作废 (12306 Successful waiting list in the middle of the night, ticket worth 1,700 yuan is invalid)](https://s.weibo.com/weibo?q=%2312306%E5%8D%8A%E5%A4%9C%E5%80%99%E8%A1%A5%E6%88%90%E5%8A%9F1700%E5%85%83%E8%BD%A6%E7%A5%A8%E4%BD%9C%E5%BA%9F%23) `403.6K 🔥` `-51%`
1. [女生失联后用牛粪保温在牛棚被找到](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E5%A4%B1%E8%81%94%E5%90%8E%E7%94%A8%E7%89%9B%E7%B2%AA%E4%BF%9D%E6%B8%A9%E5%9C%A8%E7%89%9B%E6%A3%9A%E8%A2%AB%E6%89%BE%E5%88%B0%23) `252.3K 🔥` `-45%`
1. [灵隐寺惊现110万家厂商祈福](https://s.weibo.com/weibo?q=%23%E7%81%B5%E9%9A%90%E5%AF%BA%E6%83%8A%E7%8E%B0110%E4%B8%87%E5%AE%B6%E5%8E%82%E5%95%86%E7%A5%88%E7%A6%8F%23) `217.0K 🔥` `-25%`
1. [开工第一天 请假](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B7%A5%E7%AC%AC%E4%B8%80%E5%A4%A9%20%E8%AF%B7%E5%81%87%23) `184.9K 🔥` `-40%`
1. [妈妈回应瑶一瑶表演时不开心](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%9B%9E%E5%BA%94%E7%91%B6%E4%B8%80%E7%91%B6%E8%A1%A8%E6%BC%94%E6%97%B6%E4%B8%8D%E5%BC%80%E5%BF%83%23) `160.6K 🔥` `-24%`
1. [金所泫宋江二搭 (Kim So Hyun and Song Jiang Erdu)](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%89%80%E6%B3%AB%E5%AE%8B%E6%B1%9F%E4%BA%8C%E6%90%AD%23) `129.6K 🔥` `-46%`
1. [官方通报36斤羊烤完仅剩6.9斤](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A536%E6%96%A4%E7%BE%8A%E7%83%A4%E5%AE%8C%E4%BB%85%E5%89%A96.9%E6%96%A4%23) `122.0K 🔥` `-43%`
1. [看演唱会旁边坐的白鹿](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E6%97%81%E8%BE%B9%E5%9D%90%E7%9A%84%E7%99%BD%E9%B9%BF%23) `112.6K 🔥` `-31%`
1. [iPhone18Pro新配色目标一眼最新款 (iPhone 18 Pro new color target at a glance the latest model)](https://s.weibo.com/weibo?q=%23iPhone18Pro%E6%96%B0%E9%85%8D%E8%89%B2%E7%9B%AE%E6%A0%87%E4%B8%80%E7%9C%BC%E6%9C%80%E6%96%B0%E6%AC%BE%23) `94.1K 🔥` `-45%`
1. [迅猛龙考研估分190考出来223 (The Velociraptor postgraduate entrance examination score was estimated to be 190 and the score was 223)](https://s.weibo.com/weibo?q=%23%E8%BF%85%E7%8C%9B%E9%BE%99%E8%80%83%E7%A0%94%E4%BC%B0%E5%88%86190%E8%80%83%E5%87%BA%E6%9D%A5223%23) `84.9K 🔥` `-45%`
1. [研招网](https://s.weibo.com/weibo?q=%23%E7%A0%94%E6%8B%9B%E7%BD%91%23) `84.5K 🔥` `-32%`
1. [边伯贤 SM (Byeon Baekhyun SM)](https://s.weibo.com/weibo?q=%23%E8%BE%B9%E4%BC%AF%E8%B4%A4%20SM%23) `79.4K 🔥` `-47%`
1. [50岁的陈坤24岁的张康乐](https://s.weibo.com/weibo?q=%2350%E5%B2%81%E7%9A%84%E9%99%88%E5%9D%A424%E5%B2%81%E7%9A%84%E5%BC%A0%E5%BA%B7%E4%B9%90%23) `73.1K 🔥` `-59%`

Updated at 2026-02-24 15:56:55

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
