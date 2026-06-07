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

1. [高考语文 (College Entrance Examination Chinese)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E8%AF%AD%E6%96%87%23) `6.2M 🔥` `NEW`
1. [静音护航就是最棒的高考应援](https://s.weibo.com/weibo?q=%23%E9%9D%99%E9%9F%B3%E6%8A%A4%E8%88%AA%E5%B0%B1%E6%98%AF%E6%9C%80%E6%A3%92%E7%9A%84%E9%AB%98%E8%80%83%E5%BA%94%E6%8F%B4%23) `1.9M 🔥` `NEW`
1. [阿里内网7万字长文](https://s.weibo.com/weibo?q=%23%E9%98%BF%E9%87%8C%E5%86%85%E7%BD%917%E4%B8%87%E5%AD%97%E9%95%BF%E6%96%87%23) `1.6M 🔥` `NEW`
1. [曾沛慈凌晨四点半发长文](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%87%8C%E6%99%A8%E5%9B%9B%E7%82%B9%E5%8D%8A%E5%8F%91%E9%95%BF%E6%96%87%23) `812.9K 🔥` `NEW`
1. [第一批00后老师送考](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B900%E5%90%8E%E8%80%81%E5%B8%88%E9%80%81%E8%80%83%23) `462.2K 🔥` `NEW`
1. [安崎的情商](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%B4%8E%E7%9A%84%E6%83%85%E5%95%86%23) `424.0K 🔥` `NEW`
1. [2026高考第1天](https://s.weibo.com/weibo?q=%232026%E9%AB%98%E8%80%83%E7%AC%AC1%E5%A4%A9%23) `417.1K 🔥` `NEW`
1. [民警怕考生丢身份证把机房搬来](https://s.weibo.com/weibo?q=%23%E6%B0%91%E8%AD%A6%E6%80%95%E8%80%83%E7%94%9F%E4%B8%A2%E8%BA%AB%E4%BB%BD%E8%AF%81%E6%8A%8A%E6%9C%BA%E6%88%BF%E6%90%AC%E6%9D%A5%23) `402.5K 🔥` `NEW`
1. [世界杯热身赛葡萄牙智利爆发冲突](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E7%83%AD%E8%BA%AB%E8%B5%9B%E8%91%A1%E8%90%84%E7%89%99%E6%99%BA%E5%88%A9%E7%88%86%E5%8F%91%E5%86%B2%E7%AA%81%23) `389.1K 🔥` `NEW`
1. [骗大佬投十几亿的4S店老板被抓了](https://s.weibo.com/weibo?q=%23%E9%AA%97%E5%A4%A7%E4%BD%AC%E6%8A%95%E5%8D%81%E5%87%A0%E4%BA%BF%E7%9A%844S%E5%BA%97%E8%80%81%E6%9D%BF%E8%A2%AB%E6%8A%93%E4%BA%86%23) `279.7K 🔥` `NEW`
1. [这次都听李荣浩的 (This time I will listen to Li Ronghao)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%AC%A1%E9%83%BD%E5%90%AC%E6%9D%8E%E8%8D%A3%E6%B5%A9%E7%9A%84%23) `255.4K 🔥` `NEW`
1. [演员杨雪自曝结婚原因](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E6%9D%A8%E9%9B%AA%E8%87%AA%E6%9B%9D%E7%BB%93%E5%A9%9A%E5%8E%9F%E5%9B%A0%23) `254.7K 🔥` `NEW`
1. [李晨妹妹结婚](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%A8%E5%A6%B9%E5%A6%B9%E7%BB%93%E5%A9%9A%23) `254.6K 🔥` `NEW`
1. [上班族一眼认出学生](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E6%97%8F%E4%B8%80%E7%9C%BC%E8%AE%A4%E5%87%BA%E5%AD%A6%E7%94%9F%23) `254.3K 🔥` `NEW`
1. [湖北一考生每科可增加30%作答时间](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8C%97%E4%B8%80%E8%80%83%E7%94%9F%E6%AF%8F%E7%A7%91%E5%8F%AF%E5%A2%9E%E5%8A%A030%25%E4%BD%9C%E7%AD%94%E6%97%B6%E9%97%B4%23) `253.5K 🔥` `NEW`
1. [詹姆斯将高尔夫球打进地中海被起诉](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E5%B0%86%E9%AB%98%E5%B0%94%E5%A4%AB%E7%90%83%E6%89%93%E8%BF%9B%E5%9C%B0%E4%B8%AD%E6%B5%B7%E8%A2%AB%E8%B5%B7%E8%AF%89%23) `253.3K 🔥` `NEW`
1. [猫咪一定要跳上床](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%92%AA%E4%B8%80%E5%AE%9A%E8%A6%81%E8%B7%B3%E4%B8%8A%E5%BA%8A%23) `217.3K 🔥` `NEW`
1. [人民币存贷计息或将迎调整](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E5%B8%81%E5%AD%98%E8%B4%B7%E8%AE%A1%E6%81%AF%E6%88%96%E5%B0%86%E8%BF%8E%E8%B0%83%E6%95%B4%23) `197.2K 🔥` `NEW`
1. [世界杯伊朗代表团十余人遭美国拒签](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E4%BC%8A%E6%9C%97%E4%BB%A3%E8%A1%A8%E5%9B%A2%E5%8D%81%E4%BD%99%E4%BA%BA%E9%81%AD%E7%BE%8E%E5%9B%BD%E6%8B%92%E7%AD%BE%23) `190.6K 🔥` `NEW`
1. [杨紫告别家业](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%91%8A%E5%88%AB%E5%AE%B6%E4%B8%9A%23) `181.9K 🔥` `NEW`
1. [张桂梅高考当天早上吃了六七种药 (Zhang Guimei took six or seven kinds of medicine on the morning of the college entrance examination)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%A1%82%E6%A2%85%E9%AB%98%E8%80%83%E5%BD%93%E5%A4%A9%E6%97%A9%E4%B8%8A%E5%90%83%E4%BA%86%E5%85%AD%E4%B8%83%E7%A7%8D%E8%8D%AF%23) `151.7K 🔥` `NEW`
1. [张桂梅回应放狠话](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%A1%82%E6%A2%85%E5%9B%9E%E5%BA%94%E6%94%BE%E7%8B%A0%E8%AF%9D%23) `150.7K 🔥` `NEW`
1. [黄宗泽否认牙龈萎缩](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AE%97%E6%B3%BD%E5%90%A6%E8%AE%A4%E7%89%99%E9%BE%88%E8%90%8E%E7%BC%A9%23) `150.4K 🔥` `NEW`
1. [马斯克解释太空算力中心](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E8%A7%A3%E9%87%8A%E5%A4%AA%E7%A9%BA%E7%AE%97%E5%8A%9B%E4%B8%AD%E5%BF%83%23) `139.5K 🔥` `NEW`
1. [阿根廷后卫因伤无缘世界杯](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%90%8E%E5%8D%AB%E5%9B%A0%E4%BC%A4%E6%97%A0%E7%BC%98%E4%B8%96%E7%95%8C%E6%9D%AF%23) `130.8K 🔥` `NEW`
1. [明代状元试卷2460字无一误笔](https://s.weibo.com/weibo?q=%23%E6%98%8E%E4%BB%A3%E7%8A%B6%E5%85%83%E8%AF%95%E5%8D%B72460%E5%AD%97%E6%97%A0%E4%B8%80%E8%AF%AF%E7%AC%94%23) `127.9K 🔥` `NEW`
1. [开考前1小时考生身份证丢了](https://s.weibo.com/weibo?q=%23%E5%BC%80%E8%80%83%E5%89%8D1%E5%B0%8F%E6%97%B6%E8%80%83%E7%94%9F%E8%BA%AB%E4%BB%BD%E8%AF%81%E4%B8%A2%E4%BA%86%23) `120.4K 🔥` `NEW`
1. [多款新能源车涨价了](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%AC%BE%E6%96%B0%E8%83%BD%E6%BA%90%E8%BD%A6%E6%B6%A8%E4%BB%B7%E4%BA%86%23) `107.1K 🔥` `NEW`
1. [印度厨师被冰箱炸死惊悚画面曝光](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%8E%A8%E5%B8%88%E8%A2%AB%E5%86%B0%E7%AE%B1%E7%82%B8%E6%AD%BB%E6%83%8A%E6%82%9A%E7%94%BB%E9%9D%A2%E6%9B%9D%E5%85%89%23) `105.3K 🔥` `NEW`
1. [高考第一天 (First day of college entrance examination)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E7%AC%AC%E4%B8%80%E5%A4%A9%23) `3.5M 🔥` `+579%`
1. [野人先生忽然在日本引起了讨论 (Mr. Savage suddenly caused discussion in Japan)](https://s.weibo.com/weibo?q=%23%E9%87%8E%E4%BA%BA%E5%85%88%E7%94%9F%E5%BF%BD%E7%84%B6%E5%9C%A8%E6%97%A5%E6%9C%AC%E5%BC%95%E8%B5%B7%E4%BA%86%E8%AE%A8%E8%AE%BA%23) `580.5K 🔥` `+169%`
1. [小米回应SU7电吸门无防夹功能](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%9B%9E%E5%BA%94SU7%E7%94%B5%E5%90%B8%E9%97%A8%E6%97%A0%E9%98%B2%E5%A4%B9%E5%8A%9F%E8%83%BD%23) `410.6K 🔥` `+185%`
1. [唐艺昕疑似皮肤病复发 (Tang Yixin is suspected of having a recurrence of skin disease)](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E7%96%91%E4%BC%BC%E7%9A%AE%E8%82%A4%E7%97%85%E5%A4%8D%E5%8F%91%23) `409.0K 🔥` `+125%`
1. [李佳航这是咋了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BD%B3%E8%88%AA%E8%BF%99%E6%98%AF%E5%92%8B%E4%BA%86%23) `395.1K 🔥` `+83%`
1. [雪饼猴称4元烤肠嫌贵可以不吃 (Snow Pancake Monkey said the 4 yuan grilled sausage is too expensive and you can skip it)](https://s.weibo.com/weibo?q=%23%E9%9B%AA%E9%A5%BC%E7%8C%B4%E7%A7%B04%E5%85%83%E7%83%A4%E8%82%A0%E5%AB%8C%E8%B4%B5%E5%8F%AF%E4%BB%A5%E4%B8%8D%E5%90%83%23) `392.5K 🔥` `+153%`
1. [中国记者采访菲代表团竟被嘲笑辱骂](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%AE%B0%E8%80%85%E9%87%87%E8%AE%BF%E8%8F%B2%E4%BB%A3%E8%A1%A8%E5%9B%A2%E7%AB%9F%E8%A2%AB%E5%98%B2%E7%AC%91%E8%BE%B1%E9%AA%82%23) `305.5K 🔥` `+25%`
1. [谢娜演唱会全国巡演](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E5%85%A8%E5%9B%BD%E5%B7%A1%E6%BC%94%23) `281.0K 🔥` `+31%`
1. [5个部位疼可能是心梗先兆](https://s.weibo.com/weibo?q=%235%E4%B8%AA%E9%83%A8%E4%BD%8D%E7%96%BC%E5%8F%AF%E8%83%BD%E6%98%AF%E5%BF%83%E6%A2%97%E5%85%88%E5%85%86%23) `255.1K 🔥` `+78%`
1. [百妖谱 邓为](https://s.weibo.com/weibo?q=%23%E7%99%BE%E5%A6%96%E8%B0%B1%20%E9%82%93%E4%B8%BA%23) `207.3K 🔥` `+92%`
1. [阚清子甩头发完全魅魔](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E7%94%A9%E5%A4%B4%E5%8F%91%E5%AE%8C%E5%85%A8%E9%AD%85%E9%AD%94%23) `189.2K 🔥` `+35%`
1. [香港全职妈妈做的晚餐](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%85%A8%E8%81%8C%E5%A6%88%E5%A6%88%E5%81%9A%E7%9A%84%E6%99%9A%E9%A4%90%23) `151.4K 🔥` `+53%`
1. [高考新增AI监考员 (College Entrance Examination Adds AI Invigilator)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%96%B0%E5%A2%9EAI%E7%9B%91%E8%80%83%E5%91%98%23) `150.5K 🔥` `+39%`
1. [奔跑吧 (run)](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%23) `136.2K 🔥` `+33%`
1. [万千惠路边哭惨了](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%83%A0%E8%B7%AF%E8%BE%B9%E5%93%AD%E6%83%A8%E4%BA%86%23) `306.4K 🔥`
1. [唐艺昕又过敏了吗 (Is Tang Yixin allergic again?)](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E5%8F%88%E8%BF%87%E6%95%8F%E4%BA%86%E5%90%97%23) `179.3K 🔥`
1. [公积金新政有望唤醒十万亿沉睡资金 (The new provident fund policy is expected to awaken 10 trillion dormant funds)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E6%96%B0%E6%94%BF%E6%9C%89%E6%9C%9B%E5%94%A4%E9%86%92%E5%8D%81%E4%B8%87%E4%BA%BF%E6%B2%89%E7%9D%A1%E8%B5%84%E9%87%91%23) `174.5K 🔥`
1. [高考为什么定在6月](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E4%B8%BA%E4%BB%80%E4%B9%88%E5%AE%9A%E5%9C%A86%E6%9C%88%23) `157.5K 🔥`
1. [以为是爱狗人士结果是爱心人士 (I thought I was a dog lover but turned out to be a caring person)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BA%E6%98%AF%E7%88%B1%E7%8B%97%E4%BA%BA%E5%A3%AB%E7%BB%93%E6%9E%9C%E6%98%AF%E7%88%B1%E5%BF%83%E4%BA%BA%E5%A3%AB%23) `125.8K 🔥`
1. [高考一定带好身份证准考证 (You must bring your ID card and admission ticket for the college entrance examination)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E4%B8%80%E5%AE%9A%E5%B8%A6%E5%A5%BD%E8%BA%AB%E4%BB%BD%E8%AF%81%E5%87%86%E8%80%83%E8%AF%81%23) `254.0K 🔥` `-53%`
1. [女生请求天鹅帮忙捡反光板](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E8%AF%B7%E6%B1%82%E5%A4%A9%E9%B9%85%E5%B8%AE%E5%BF%99%E6%8D%A1%E5%8F%8D%E5%85%89%E6%9D%BF%23) `187.8K 🔥` `-47%`

Updated at 2026-06-07 10:05:42

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
