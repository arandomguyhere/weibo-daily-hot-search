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

1. [李荣浩否认抄袭 (Li Ronghao denies plagiarism)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%E5%90%A6%E8%AE%A4%E6%8A%84%E8%A2%AD%23) `7.7M 🔥` `NEW`
1. [从指甲看主角是真穷](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E6%8C%87%E7%94%B2%E7%9C%8B%E4%B8%BB%E8%A7%92%E6%98%AF%E7%9C%9F%E7%A9%B7%23) `1.1M 🔥` `NEW`
1. [雄安大脑赋能智慧城市](https://s.weibo.com/weibo?q=%23%E9%9B%84%E5%AE%89%E5%A4%A7%E8%84%91%E8%B5%8B%E8%83%BD%E6%99%BA%E6%85%A7%E5%9F%8E%E5%B8%82%23) `586.5K 🔥` `NEW`
1. [甲骨文凌晨6点突发裁员3万人](https://s.weibo.com/weibo?q=%23%E7%94%B2%E9%AA%A8%E6%96%87%E5%87%8C%E6%99%A86%E7%82%B9%E7%AA%81%E5%8F%91%E8%A3%81%E5%91%983%E4%B8%87%E4%BA%BA%23) `584.9K 🔥` `NEW`
1. [月鳞绮纪开播](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E5%BC%80%E6%92%AD%23) `439.5K 🔥` `NEW`
1. [伊朗愿意结束战争](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%84%BF%E6%84%8F%E7%BB%93%E6%9D%9F%E6%88%98%E4%BA%89%23) `369.5K 🔥` `NEW`
1. [公安机关查处网络谣言](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%AE%89%E6%9C%BA%E5%85%B3%E6%9F%A5%E5%A4%84%E7%BD%91%E7%BB%9C%E8%B0%A3%E8%A8%80%23) `347.2K 🔥` `NEW`
1. [邓超称4月4日五哈播不了了](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E7%A7%B04%E6%9C%884%E6%97%A5%E4%BA%94%E5%93%88%E6%92%AD%E4%B8%8D%E4%BA%86%E4%BA%86%23) `337.1K 🔥` `NEW`
1. [刷取餐码出了地铁站](https://s.weibo.com/weibo?q=%23%E5%88%B7%E5%8F%96%E9%A4%90%E7%A0%81%E5%87%BA%E4%BA%86%E5%9C%B0%E9%93%81%E7%AB%99%23) `300.3K 🔥` `NEW`
1. [优思益](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%23) `291.4K 🔥` `NEW`
1. [打耳洞时先戴上耳机 (Wear headphones first when getting your ears pierced)](https://s.weibo.com/weibo?q=%23%E6%89%93%E8%80%B3%E6%B4%9E%E6%97%B6%E5%85%88%E6%88%B4%E4%B8%8A%E8%80%B3%E6%9C%BA%23) `225.1K 🔥` `NEW`
1. [被杜海涛沈梦辰追着要合影](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%9D%9C%E6%B5%B7%E6%B6%9B%E6%B2%88%E6%A2%A6%E8%BE%B0%E8%BF%BD%E7%9D%80%E8%A6%81%E5%90%88%E5%BD%B1%23) `192.5K 🔥` `NEW`
1. [81192和歼35歼15并肩从福建舰起飞](https://s.weibo.com/weibo?q=%2381192%E5%92%8C%E6%AD%BC35%E6%AD%BC15%E5%B9%B6%E8%82%A9%E4%BB%8E%E7%A6%8F%E5%BB%BA%E8%88%B0%E8%B5%B7%E9%A3%9E%23) `155.6K 🔥` `NEW`
1. [够爱作词人拒绝授权曾沛慈演唱](https://s.weibo.com/weibo?q=%23%E5%A4%9F%E7%88%B1%E4%BD%9C%E8%AF%8D%E4%BA%BA%E6%8B%92%E7%BB%9D%E6%8E%88%E6%9D%83%E6%9B%BE%E6%B2%9B%E6%85%88%E6%BC%94%E5%94%B1%23) `154.0K 🔥` `NEW`
1. [张凌赫改了自动回复](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%94%B9%E4%BA%86%E8%87%AA%E5%8A%A8%E5%9B%9E%E5%A4%8D%23) `151.8K 🔥` `NEW`
1. [销冠澳洲优思益竟是假进口](https://s.weibo.com/weibo?q=%23%E9%94%80%E5%86%A0%E6%BE%B3%E6%B4%B2%E4%BC%98%E6%80%9D%E7%9B%8A%E7%AB%9F%E6%98%AF%E5%81%87%E8%BF%9B%E5%8F%A3%23) `149.9K 🔥` `NEW`
1. [美国一架F35战机坠毁](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%B8%80%E6%9E%B6F35%E6%88%98%E6%9C%BA%E5%9D%A0%E6%AF%81%23) `147.1K 🔥` `NEW`
1. [日本民众称不能忍受部署导弹](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%B0%91%E4%BC%97%E7%A7%B0%E4%B8%8D%E8%83%BD%E5%BF%8D%E5%8F%97%E9%83%A8%E7%BD%B2%E5%AF%BC%E5%BC%B9%23) `146.4K 🔥` `NEW`
1. [有线耳机穿搭火了](https://s.weibo.com/weibo?q=%23%E6%9C%89%E7%BA%BF%E8%80%B3%E6%9C%BA%E7%A9%BF%E6%90%AD%E7%81%AB%E4%BA%86%23) `142.2K 🔥` `NEW`
1. [80元一公斤的樱桃上市](https://s.weibo.com/weibo?q=%2380%E5%85%83%E4%B8%80%E5%85%AC%E6%96%A4%E7%9A%84%E6%A8%B1%E6%A1%83%E4%B8%8A%E5%B8%82%23) `139.5K 🔥` `NEW`
1. [蔡磊进入渐冻症终末期 (Cai Lei enters terminal stage of ALS)](https://s.weibo.com/weibo?q=%23%E8%94%A1%E7%A3%8A%E8%BF%9B%E5%85%A5%E6%B8%90%E5%86%BB%E7%97%87%E7%BB%88%E6%9C%AB%E6%9C%9F%23) `137.5K 🔥` `NEW`
1. [浙江宣传谈张雪的飞驰人生](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E5%AE%A3%E4%BC%A0%E8%B0%88%E5%BC%A0%E9%9B%AA%E7%9A%84%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F%23) `129.8K 🔥` `NEW`
1. [内存条价格大跳水](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%AD%98%E6%9D%A1%E4%BB%B7%E6%A0%BC%E5%A4%A7%E8%B7%B3%E6%B0%B4%23) `113.4K 🔥` `NEW`
1. [鹿晗回应五哈6定档](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%9B%9E%E5%BA%94%E4%BA%94%E5%93%886%E5%AE%9A%E6%A1%A3%23) `108.6K 🔥` `NEW`
1. [央视曝光优思益多平台下架](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E4%BC%98%E6%80%9D%E7%9B%8A%E5%A4%9A%E5%B9%B3%E5%8F%B0%E4%B8%8B%E6%9E%B6%23) `100.3K 🔥` `NEW`
1. [县委书记用6秒搞定足球赛闭幕式](https://s.weibo.com/weibo?q=%23%E5%8E%BF%E5%A7%94%E4%B9%A6%E8%AE%B0%E7%94%A86%E7%A7%92%E6%90%9E%E5%AE%9A%E8%B6%B3%E7%90%83%E8%B5%9B%E9%97%AD%E5%B9%95%E5%BC%8F%23) `94.2K 🔥` `NEW`
1. [新浪娱乐头像换成毅朱瞻基](https://s.weibo.com/weibo?q=%23%E6%96%B0%E6%B5%AA%E5%A8%B1%E4%B9%90%E5%A4%B4%E5%83%8F%E6%8D%A2%E6%88%90%E6%AF%85%E6%9C%B1%E7%9E%BB%E5%9F%BA%23) `89.7K 🔥` `NEW`
1. [水木年华维权](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E6%9C%A8%E5%B9%B4%E5%8D%8E%E7%BB%B4%E6%9D%83%23) `89.3K 🔥` `NEW`
1. [美军布什号航母启程赴中东](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E5%B8%83%E4%BB%80%E5%8F%B7%E8%88%AA%E6%AF%8D%E5%90%AF%E7%A8%8B%E8%B5%B4%E4%B8%AD%E4%B8%9C%23) `88.8K 🔥` `NEW`
1. [AI短片纸手机火了](https://s.weibo.com/weibo?q=%23AI%E7%9F%AD%E7%89%87%E7%BA%B8%E6%89%8B%E6%9C%BA%E7%81%AB%E4%BA%86%23) `87.2K 🔥` `NEW`
1. [镜头暴力 (camera violence)](https://s.weibo.com/weibo?q=%23%E9%95%9C%E5%A4%B4%E6%9A%B4%E5%8A%9B%23) `82.7K 🔥` `NEW`
1. [央视曝光伪进口保健品](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E4%BC%AA%E8%BF%9B%E5%8F%A3%E4%BF%9D%E5%81%A5%E5%93%81%23) `82.0K 🔥` `NEW`
1. [我坐一天400他躺一天500](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9D%90%E4%B8%80%E5%A4%A9400%E4%BB%96%E8%BA%BA%E4%B8%80%E5%A4%A9500%23) `81.6K 🔥` `NEW`
1. [张雪机车夺冠带火浙江国资神级操作](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%A4%BA%E5%86%A0%E5%B8%A6%E7%81%AB%E6%B5%99%E6%B1%9F%E5%9B%BD%E8%B5%84%E7%A5%9E%E7%BA%A7%E6%93%8D%E4%BD%9C%23) `81.2K 🔥` `NEW`
1. [haru拍的王俊凯](https://s.weibo.com/weibo?q=%23haru%E6%8B%8D%E7%9A%84%E7%8E%8B%E4%BF%8A%E5%87%AF%23) `80.5K 🔥` `NEW`
1. [华人夫妇美国豪宅离奇失踪一年](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%BA%BA%E5%A4%AB%E5%A6%87%E7%BE%8E%E5%9B%BD%E8%B1%AA%E5%AE%85%E7%A6%BB%E5%A5%87%E5%A4%B1%E8%B8%AA%E4%B8%80%E5%B9%B4%23) `78.5K 🔥` `NEW`
1. [宁德时代董事长向上海交大捐20亿](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E8%91%A3%E4%BA%8B%E9%95%BF%E5%90%91%E4%B8%8A%E6%B5%B7%E4%BA%A4%E5%A4%A7%E6%8D%9020%E4%BA%BF%23) `78.1K 🔥` `NEW`
1. [宠物冥币](https://s.weibo.com/weibo?q=%23%E5%AE%A0%E7%89%A9%E5%86%A5%E5%B8%81%23) `77.9K 🔥` `NEW`
1. [李维嘉不知道遗产传给谁](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BB%B4%E5%98%89%E4%B8%8D%E7%9F%A5%E9%81%93%E9%81%97%E4%BA%A7%E4%BC%A0%E7%BB%99%E8%B0%81%23) `75.5K 🔥` `NEW`
1. [李昀锐上次这么虐还是九重紫](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E4%B8%8A%E6%AC%A1%E8%BF%99%E4%B9%88%E8%99%90%E8%BF%98%E6%98%AF%E4%B9%9D%E9%87%8D%E7%B4%AB%23) `75.3K 🔥` `NEW`
1. [紫金矿业涨近7% (Zijin Mining rose nearly 7%)](https://s.weibo.com/weibo?q=%23%E7%B4%AB%E9%87%91%E7%9F%BF%E4%B8%9A%E6%B6%A8%E8%BF%917%25%23) `75.3K 🔥` `NEW`
1. [帕梅拉 你是我带过最差的一届](https://s.weibo.com/weibo?q=%23%E5%B8%95%E6%A2%85%E6%8B%89%20%E4%BD%A0%E6%98%AF%E6%88%91%E5%B8%A6%E8%BF%87%E6%9C%80%E5%B7%AE%E7%9A%84%E4%B8%80%E5%B1%8A%23) `75.3K 🔥` `NEW`
1. [浙创投为张雪机车投资9000万](https://s.weibo.com/weibo?q=%23%E6%B5%99%E5%88%9B%E6%8A%95%E4%B8%BA%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E6%8A%95%E8%B5%849000%E4%B8%87%23) `767.5K 🔥` `+136%`
1. [张雪](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%23) `142.6K 🔥`
1. [男子靠AI开一人公司年营收达150万 (Man relies on AI to start a one-person company with annual revenue of 1.5 million)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%9D%A0AI%E5%BC%80%E4%B8%80%E4%BA%BA%E5%85%AC%E5%8F%B8%E5%B9%B4%E8%90%A5%E6%94%B6%E8%BE%BE150%E4%B8%87%23) `280.1K 🔥` `-74%`
1. [en王翊恩 结婚但没同居](https://s.weibo.com/weibo?q=%23en%E7%8E%8B%E7%BF%8A%E6%81%A9%20%E7%BB%93%E5%A9%9A%E4%BD%86%E6%B2%A1%E5%90%8C%E5%B1%85%23) `127.5K 🔥` `-29%`
1. [张国荣](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%9B%BD%E8%8D%A3%23) `126.0K 🔥` `-28%`
1. [浪姐7人气排名](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%907%E4%BA%BA%E6%B0%94%E6%8E%92%E5%90%8D%23) `102.0K 🔥` `-62%`
1. [王者荣耀新赛季](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E6%96%B0%E8%B5%9B%E5%AD%A3%23) `88.0K 🔥` `-51%`
1. [歼35为歼8护航 (J-35 escorts J-8)](https://s.weibo.com/weibo?q=%23%E6%AD%BC35%E4%B8%BA%E6%AD%BC8%E6%8A%A4%E8%88%AA%23) `79.5K 🔥` `-51%`

Updated at 2026-04-01 12:21:37

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
