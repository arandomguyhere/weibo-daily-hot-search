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

1. [白小纯 王子璇](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%20%E7%8E%8B%E5%AD%90%E7%92%87%23) `12.4M 🔥` `NEW`
1. [大型SUV第一名是小米澎程N90](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%9E%8BSUV%E7%AC%AC%E4%B8%80%E5%90%8D%E6%98%AF%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8BN90%23) `2.1M 🔥` `NEW`
1. [铸牢共同体中华一家亲](https://s.weibo.com/weibo?q=%23%E9%93%B8%E7%89%A2%E5%85%B1%E5%90%8C%E4%BD%93%E4%B8%AD%E5%8D%8E%E4%B8%80%E5%AE%B6%E4%BA%B2%23) `1.8M 🔥` `NEW`
1. [领克07GT帕尔马紫调高定版上市](https://s.weibo.com/weibo?q=%23%E9%A2%86%E5%85%8B07GT%E5%B8%95%E5%B0%94%E9%A9%AC%E7%B4%AB%E8%B0%83%E9%AB%98%E5%AE%9A%E7%89%88%E4%B8%8A%E5%B8%82%23) `1.8M 🔥` `NEW`
1. [尚公主官方拆cp](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%E5%AE%98%E6%96%B9%E6%8B%86cp%23) `1.7M 🔥` `NEW`
1. [国乒问题并非王楚钦一个人问题](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E9%97%AE%E9%A2%98%E5%B9%B6%E9%9D%9E%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%B8%80%E4%B8%AA%E4%BA%BA%E9%97%AE%E9%A2%98%23) `1.7M 🔥` `NEW`
1. [W盛典内场](https://s.weibo.com/weibo?q=%23W%E7%9B%9B%E5%85%B8%E5%86%85%E5%9C%BA%23) `1.7M 🔥` `NEW`
1. [比亚迪大唐前后轮毂装反](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E5%A4%A7%E5%94%90%E5%89%8D%E5%90%8E%E8%BD%AE%E6%AF%82%E8%A3%85%E5%8F%8D%23) `1.7M 🔥` `NEW`
1. [王楚钦发文反思总结](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%8F%91%E6%96%87%E5%8F%8D%E6%80%9D%E6%80%BB%E7%BB%93%23) `1.6M 🔥` `NEW`
1. [金鸡奖最佳男主角提名](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B8%A1%E5%A5%96%E6%9C%80%E4%BD%B3%E7%94%B7%E4%B8%BB%E8%A7%92%E6%8F%90%E5%90%8D%23) `1.6M 🔥` `NEW`
1. [墨尔本中国骑手遇害案嫌犯大闹法庭](https://s.weibo.com/weibo?q=%23%E5%A2%A8%E5%B0%94%E6%9C%AC%E4%B8%AD%E5%9B%BD%E9%AA%91%E6%89%8B%E9%81%87%E5%AE%B3%E6%A1%88%E5%AB%8C%E7%8A%AF%E5%A4%A7%E9%97%B9%E6%B3%95%E5%BA%AD%23) `1.6M 🔥` `NEW`
1. [曝白小纯小号和王子璇发了同一棵树](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%B0%8F%E5%8F%B7%E5%92%8C%E7%8E%8B%E5%AD%90%E7%92%87%E5%8F%91%E4%BA%86%E5%90%8C%E4%B8%80%E6%A3%B5%E6%A0%91%23) `1.5M 🔥` `NEW`
1. [白敬亭井柏然宋威龙王嘉尔张凌赫同框](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E4%BA%95%E6%9F%8F%E7%84%B6%E5%AE%8B%E5%A8%81%E9%BE%99%E7%8E%8B%E5%98%89%E5%B0%94%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%90%8C%E6%A1%86%23) `726.2K 🔥` `NEW`
1. [刘诗诗躲了半天还是没躲过](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E8%BA%B2%E4%BA%86%E5%8D%8A%E5%A4%A9%E8%BF%98%E6%98%AF%E6%B2%A1%E8%BA%B2%E8%BF%87%23) `479.8K 🔥` `NEW`
1. [黄仁勋出事看似是八卦其实是生意](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E5%87%BA%E4%BA%8B%E7%9C%8B%E4%BC%BC%E6%98%AF%E5%85%AB%E5%8D%A6%E5%85%B6%E5%AE%9E%E6%98%AF%E7%94%9F%E6%84%8F%23) `460.0K 🔥` `NEW`
1. [白小纯青稚飞升](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E9%9D%92%E7%A8%9A%E9%A3%9E%E5%8D%87%23) `458.6K 🔥` `NEW`
1. [黄仁勋持股不足4%为何能主导英伟达](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E6%8C%81%E8%82%A1%E4%B8%8D%E8%B6%B34%25%E4%B8%BA%E4%BD%95%E8%83%BD%E4%B8%BB%E5%AF%BC%E8%8B%B1%E4%BC%9F%E8%BE%BE%23) `453.4K 🔥` `NEW`
1. [山姆现20元一包泡面](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E7%8E%B020%E5%85%83%E4%B8%80%E5%8C%85%E6%B3%A1%E9%9D%A2%23) `440.5K 🔥` `NEW`
1. [白小纯在发现有人没上车的30秒](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E5%9C%A8%E5%8F%91%E7%8E%B0%E6%9C%89%E4%BA%BA%E6%B2%A1%E4%B8%8A%E8%BD%A6%E7%9A%8430%E7%A7%92%23) `432.2K 🔥` `NEW`
1. [哈尔滨烤地瓜原价1688到手8元](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B0%94%E6%BB%A8%E7%83%A4%E5%9C%B0%E7%93%9C%E5%8E%9F%E4%BB%B71688%E5%88%B0%E6%89%8B8%E5%85%83%23) `417.3K 🔥` `NEW`
1. [没钱时的你不是真实的你](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E9%92%B1%E6%97%B6%E7%9A%84%E4%BD%A0%E4%B8%8D%E6%98%AF%E7%9C%9F%E5%AE%9E%E7%9A%84%E4%BD%A0%23) `404.5K 🔥` `NEW`
1. [白敬亭井柏然 你穿着貂我露着背](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E4%BA%95%E6%9F%8F%E7%84%B6%20%E4%BD%A0%E7%A9%BF%E7%9D%80%E8%B2%82%E6%88%91%E9%9C%B2%E7%9D%80%E8%83%8C%23) `399.4K 🔥` `NEW`
1. [疑似自费高定艺人回复网友](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E8%87%AA%E8%B4%B9%E9%AB%98%E5%AE%9A%E8%89%BA%E4%BA%BA%E5%9B%9E%E5%A4%8D%E7%BD%91%E5%8F%8B%23) `392.2K 🔥` `NEW`
1. [老人将6亿遗产留给再婚妻子](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E5%B0%866%E4%BA%BF%E9%81%97%E4%BA%A7%E7%95%99%E7%BB%99%E5%86%8D%E5%A9%9A%E5%A6%BB%E5%AD%90%23) `385.5K 🔥` `NEW`
1. [虞书欣吓张凌赫一跳](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%90%93%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%B8%80%E8%B7%B3%23) `384.0K 🔥` `NEW`
1. [杨幂刘诗诗倪妮刘浩存同框](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%88%98%E8%AF%97%E8%AF%97%E5%80%AA%E5%A6%AE%E5%88%98%E6%B5%A9%E5%AD%98%E5%90%8C%E6%A1%86%23) `325.2K 🔥` `NEW`
1. [舍友用婴幼儿洗发水我满脸问号](https://s.weibo.com/weibo?q=%23%E8%88%8D%E5%8F%8B%E7%94%A8%E5%A9%B4%E5%B9%BC%E5%84%BF%E6%B4%97%E5%8F%91%E6%B0%B4%E6%88%91%E6%BB%A1%E8%84%B8%E9%97%AE%E5%8F%B7%23) `313.2K 🔥` `NEW`
1. [W盛典晚宴座位](https://s.weibo.com/weibo?q=%23W%E7%9B%9B%E5%85%B8%E6%99%9A%E5%AE%B4%E5%BA%A7%E4%BD%8D%23) `307.2K 🔥` `NEW`
1. [用空气炸锅烤奶茶太香了](https://s.weibo.com/weibo?q=%23%E7%94%A8%E7%A9%BA%E6%B0%94%E7%82%B8%E9%94%85%E7%83%A4%E5%A5%B6%E8%8C%B6%E5%A4%AA%E9%A6%99%E4%BA%86%23) `297.2K 🔥` `NEW`
1. [民办小学骗捐多部门称管不了](https://s.weibo.com/weibo?q=%23%E6%B0%91%E5%8A%9E%E5%B0%8F%E5%AD%A6%E9%AA%97%E6%8D%90%E5%A4%9A%E9%83%A8%E9%97%A8%E7%A7%B0%E7%AE%A1%E4%B8%8D%E4%BA%86%23) `293.0K 🔥` `NEW`
1. [舍友狗去世全宿舍要披麻戴孝吗](https://s.weibo.com/weibo?q=%23%E8%88%8D%E5%8F%8B%E7%8B%97%E5%8E%BB%E4%B8%96%E5%85%A8%E5%AE%BF%E8%88%8D%E8%A6%81%E6%8A%AB%E9%BA%BB%E6%88%B4%E5%AD%9D%E5%90%97%23) `292.7K 🔥` `NEW`
1. [刘恺威陪读小糯米一年半没安排工作](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%81%BA%E5%A8%81%E9%99%AA%E8%AF%BB%E5%B0%8F%E7%B3%AF%E7%B1%B3%E4%B8%80%E5%B9%B4%E5%8D%8A%E6%B2%A1%E5%AE%89%E6%8E%92%E5%B7%A5%E4%BD%9C%23) `292.4K 🔥` `NEW`
1. [虞书欣宋威龙干杯](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%AE%8B%E5%A8%81%E9%BE%99%E5%B9%B2%E6%9D%AF%23) `287.7K 🔥` `NEW`
1. [许飞抢完明星红包也取关](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%E6%8A%A2%E5%AE%8C%E6%98%8E%E6%98%9F%E7%BA%A2%E5%8C%85%E4%B9%9F%E5%8F%96%E5%85%B3%23) `191.9K 🔥` `NEW`
1. [唐嫣W盛典内场](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3W%E7%9B%9B%E5%85%B8%E5%86%85%E5%9C%BA%23) `190.4K 🔥` `NEW`
1. [闲鱼聊天记录太尴尬了](https://s.weibo.com/weibo?q=%23%E9%97%B2%E9%B1%BC%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%E5%A4%AA%E5%B0%B4%E5%B0%AC%E4%BA%86%23) `187.8K 🔥` `NEW`
1. [顺其自然累计捐款1907万](https://s.weibo.com/weibo?q=%23%E9%A1%BA%E5%85%B6%E8%87%AA%E7%84%B6%E7%B4%AF%E8%AE%A1%E6%8D%90%E6%AC%BE1907%E4%B8%87%23) `186.3K 🔥` `NEW`
1. [朱一龙左边杨幂右边倪妮](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E5%B7%A6%E8%BE%B9%E6%9D%A8%E5%B9%82%E5%8F%B3%E8%BE%B9%E5%80%AA%E5%A6%AE%23) `186.3K 🔥` `NEW`
1. [尚界销量连续四个月下滑](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E7%95%8C%E9%94%80%E9%87%8F%E8%BF%9E%E7%BB%AD%E5%9B%9B%E4%B8%AA%E6%9C%88%E4%B8%8B%E6%BB%91%23) `186.3K 🔥` `NEW`
1. [hanghang](https://s.weibo.com/weibo?q=%23hanghang%23) `185.9K 🔥` `NEW`
1. [蓉城总经理不夺冠就下课应验](https://s.weibo.com/weibo?q=%23%E8%93%89%E5%9F%8E%E6%80%BB%E7%BB%8F%E7%90%86%E4%B8%8D%E5%A4%BA%E5%86%A0%E5%B0%B1%E4%B8%8B%E8%AF%BE%E5%BA%94%E9%AA%8C%23) `185.7K 🔥` `NEW`
1. [Faker的格局](https://s.weibo.com/weibo?q=%23Faker%E7%9A%84%E6%A0%BC%E5%B1%80%23) `185.5K 🔥` `NEW`
1. [骨科医生做手术要戴可撕式面罩](https://s.weibo.com/weibo?q=%23%E9%AA%A8%E7%A7%91%E5%8C%BB%E7%94%9F%E5%81%9A%E6%89%8B%E6%9C%AF%E8%A6%81%E6%88%B4%E5%8F%AF%E6%92%95%E5%BC%8F%E9%9D%A2%E7%BD%A9%23) `185.2K 🔥` `NEW`
1. [迪丽热巴爸爸20分钟卖了7000单苹果](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%88%B8%E7%88%B820%E5%88%86%E9%92%9F%E5%8D%96%E4%BA%867000%E5%8D%95%E8%8B%B9%E6%9E%9C%23) `185.0K 🔥` `NEW`
1. [oner称赞Xun](https://s.weibo.com/weibo?q=%23oner%E7%A7%B0%E8%B5%9EXun%23) `184.7K 🔥` `NEW`
1. [程靖淇谈王楚钦发文](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E9%9D%96%E6%B7%87%E8%B0%88%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%8F%91%E6%96%87%23) `184.6K 🔥` `NEW`
1. [小米汽车10月全系破万](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A610%E6%9C%88%E5%85%A8%E7%B3%BB%E7%A0%B4%E4%B8%87%23) `184.3K 🔥` `NEW`
1. [白鹿疯狂好六夜彩排造型](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%96%AF%E7%8B%82%E5%A5%BD%E5%85%AD%E5%A4%9C%E5%BD%A9%E6%8E%92%E9%80%A0%E5%9E%8B%23) `184.1K 🔥` `NEW`
1. [伊朗向特朗普发48小时最后通牒](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%90%91%E7%89%B9%E6%9C%97%E6%99%AE%E5%8F%9148%E5%B0%8F%E6%97%B6%E6%9C%80%E5%90%8E%E9%80%9A%E7%89%92%23) `183.9K 🔥` `NEW`
1. [黄仁勋 英伟达](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%20%E8%8B%B1%E4%BC%9F%E8%BE%BE%23) `183.8K 🔥` `NEW`
1. [蓉城离任三人公告均只有一句话](https://s.weibo.com/weibo?q=%23%E8%93%89%E5%9F%8E%E7%A6%BB%E4%BB%BB%E4%B8%89%E4%BA%BA%E5%85%AC%E5%91%8A%E5%9D%87%E5%8F%AA%E6%9C%89%E4%B8%80%E5%8F%A5%E8%AF%9D%23) `159.8K 🔥` `NEW`

Updated at 2026-11-10 00:01:56

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
