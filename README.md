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

1. [异父异母但双胞胎 (Half-mother but twins)](https://s.weibo.com/weibo?q=%23%E5%BC%82%E7%88%B6%E5%BC%82%E6%AF%8D%E4%BD%86%E5%8F%8C%E8%83%9E%E8%83%8E%23) `1.1M 🔥` `NEW`
1. [老舅在五哈镜头前道歉](https://s.weibo.com/weibo?q=%23%E8%80%81%E8%88%85%E5%9C%A8%E4%BA%94%E5%93%88%E9%95%9C%E5%A4%B4%E5%89%8D%E9%81%93%E6%AD%89%23) `925.7K 🔥` `NEW`
1. [传祺向往E8开启预定](https://s.weibo.com/weibo?q=%23%E4%BC%A0%E7%A5%BA%E5%90%91%E5%BE%80E8%E5%BC%80%E5%90%AF%E9%A2%84%E5%AE%9A%23) `914.9K 🔥` `NEW`
1. [五一原来是放假七天的](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%8E%9F%E6%9D%A5%E6%98%AF%E6%94%BE%E5%81%87%E4%B8%83%E5%A4%A9%E7%9A%84%23) `417.0K 🔥` `NEW`
1. [三手烟会影响子代生长发育](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%89%8B%E7%83%9F%E4%BC%9A%E5%BD%B1%E5%93%8D%E5%AD%90%E4%BB%A3%E7%94%9F%E9%95%BF%E5%8F%91%E8%82%B2%23) `416.1K 🔥` `NEW`
1. [陶昕然发长文回应淘汰](https://s.weibo.com/weibo?q=%23%E9%99%B6%E6%98%95%E7%84%B6%E5%8F%91%E9%95%BF%E6%96%87%E5%9B%9E%E5%BA%94%E6%B7%98%E6%B1%B0%23) `413.8K 🔥` `NEW`
1. [李兰迪线下美成这样了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%85%B0%E8%BF%AA%E7%BA%BF%E4%B8%8B%E7%BE%8E%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%23) `408.1K 🔥` `NEW`
1. [范丞丞踩到白鹿裙子](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E8%B8%A9%E5%88%B0%E7%99%BD%E9%B9%BF%E8%A3%99%E5%AD%90%23) `343.3K 🔥` `NEW`
1. [花呗白条月付等面临重大调整](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%91%97%E7%99%BD%E6%9D%A1%E6%9C%88%E4%BB%98%E7%AD%89%E9%9D%A2%E4%B8%B4%E9%87%8D%E5%A4%A7%E8%B0%83%E6%95%B4%23) `338.0K 🔥` `NEW`
1. [这段话反复杀死了我的懒惰](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%AE%B5%E8%AF%9D%E5%8F%8D%E5%A4%8D%E6%9D%80%E6%AD%BB%E4%BA%86%E6%88%91%E7%9A%84%E6%87%92%E6%83%B0%23) `337.6K 🔥` `NEW`
1. [娜扎前经纪人回应离职 (Nazha’s former manager responds to resignation)](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E5%89%8D%E7%BB%8F%E7%BA%AA%E4%BA%BA%E5%9B%9E%E5%BA%94%E7%A6%BB%E8%81%8C%23) `316.1K 🔥` `NEW`
1. [启境GT7如何定义安全感](https://s.weibo.com/weibo?q=%23%E5%90%AF%E5%A2%83GT7%E5%A6%82%E4%BD%95%E5%AE%9A%E4%B9%89%E5%AE%89%E5%85%A8%E6%84%9F%23) `231.0K 🔥` `NEW`
1. [瘦人无法理解的吃饭习惯](https://s.weibo.com/weibo?q=%23%E7%98%A6%E4%BA%BA%E6%97%A0%E6%B3%95%E7%90%86%E8%A7%A3%E7%9A%84%E5%90%83%E9%A5%AD%E4%B9%A0%E6%83%AF%23) `226.3K 🔥` `NEW`
1. [林钟勋说王楚钦是左手特例](https://s.weibo.com/weibo?q=%23%E6%9E%97%E9%92%9F%E5%8B%8B%E8%AF%B4%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%98%AF%E5%B7%A6%E6%89%8B%E7%89%B9%E4%BE%8B%23) `150.5K 🔥` `NEW`
1. [鹿晗五哈工伤](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E4%BA%94%E5%93%88%E5%B7%A5%E4%BC%A4%23) `121.7K 🔥` `NEW`
1. [北京车展奥迪E7X那张床出圈了](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E8%BD%A6%E5%B1%95%E5%A5%A5%E8%BF%AAE7X%E9%82%A3%E5%BC%A0%E5%BA%8A%E5%87%BA%E5%9C%88%E4%BA%86%23) `119.0K 🔥` `NEW`
1. [昆明长水国际机场内漏水成帘](https://s.weibo.com/weibo?q=%23%E6%98%86%E6%98%8E%E9%95%BF%E6%B0%B4%E5%9B%BD%E9%99%85%E6%9C%BA%E5%9C%BA%E5%86%85%E6%BC%8F%E6%B0%B4%E6%88%90%E5%B8%98%23) `117.5K 🔥` `NEW`
1. [魏建军说汽车文化要从娃娃抓起](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%BB%BA%E5%86%9B%E8%AF%B4%E6%B1%BD%E8%BD%A6%E6%96%87%E5%8C%96%E8%A6%81%E4%BB%8E%E5%A8%83%E5%A8%83%E6%8A%93%E8%B5%B7%23) `117.4K 🔥` `NEW`
1. [何宣林浪姐上班哭了](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%E6%B5%AA%E5%A7%90%E4%B8%8A%E7%8F%AD%E5%93%AD%E4%BA%86%23) `117.1K 🔥` `NEW`
1. [警方称黄金被扣30年赔偿已过时效](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E7%A7%B0%E9%BB%84%E9%87%91%E8%A2%AB%E6%89%A330%E5%B9%B4%E8%B5%94%E5%81%BF%E5%B7%B2%E8%BF%87%E6%97%B6%E6%95%88%23) `1.1M 🔥` `+186%`
1. [全尺寸旗舰SUV大唐25万起开启预售 (Full-size flagship SUV Datang starts pre-sales starting at 250,000)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%B0%BA%E5%AF%B8%E6%97%97%E8%88%B0SUV%E5%A4%A7%E5%94%9025%E4%B8%87%E8%B5%B7%E5%BC%80%E5%90%AF%E9%A2%84%E5%94%AE%23) `1.1M 🔥` `+156%`
1. [三手烟 (thirdhand smoke)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%89%8B%E7%83%9F%23) `414.2K 🔥` `+143%`
1. [过了25就不敢甩头了 (After 25, you no longer dare to shake your head.)](https://s.weibo.com/weibo?q=%23%E8%BF%87%E4%BA%8625%E5%B0%B1%E4%B8%8D%E6%95%A2%E7%94%A9%E5%A4%B4%E4%BA%86%23) `413.2K 🔥` `+44%`
1. [杨威两女儿勇夺全国冠军和季军 (Yang Wei’s two daughters won the national championship and third runner-up)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%A8%81%E4%B8%A4%E5%A5%B3%E5%84%BF%E5%8B%87%E5%A4%BA%E5%85%A8%E5%9B%BD%E5%86%A0%E5%86%9B%E5%92%8C%E5%AD%A3%E5%86%9B%23) `313.5K 🔥` `+45%`
1. [7岁男童仅18斤被当脑瘫治7年](https://s.weibo.com/weibo?q=%237%E5%B2%81%E7%94%B7%E7%AB%A5%E4%BB%8518%E6%96%A4%E8%A2%AB%E5%BD%93%E8%84%91%E7%98%AB%E6%B2%BB7%E5%B9%B4%23) `1.2M 🔥`
1. [孟子义李昀锐下定决心拆cp的原因 (The reason why Meng Ziyi and Li Yunrui decided to dismantle CP)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E4%B8%8B%E5%AE%9A%E5%86%B3%E5%BF%83%E6%8B%86cp%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `415.9K 🔥`
1. [王濛隔空喊话黎明](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E9%9A%94%E7%A9%BA%E5%96%8A%E8%AF%9D%E9%BB%8E%E6%98%8E%23) `374.5K 🔥`
1. [iPhone18ProMax厚度近14mm](https://s.weibo.com/weibo?q=%23iPhone18ProMax%E5%8E%9A%E5%BA%A6%E8%BF%9114mm%23) `238.3K 🔥`
1. [KSG全员上败采](https://s.weibo.com/weibo?q=%23KSG%E5%85%A8%E5%91%98%E4%B8%8A%E8%B4%A5%E9%87%87%23) `203.8K 🔥`
1. [为什么很少听到工作狂这个标签了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BE%88%E5%B0%91%E5%90%AC%E5%88%B0%E5%B7%A5%E4%BD%9C%E7%8B%82%E8%BF%99%E4%B8%AA%E6%A0%87%E7%AD%BE%E4%BA%86%23) `159.1K 🔥`
1. [疾风骤雨中三枚历史首金光芒闪耀](https://s.weibo.com/weibo?q=%23%E7%96%BE%E9%A3%8E%E9%AA%A4%E9%9B%A8%E4%B8%AD%E4%B8%89%E6%9E%9A%E5%8E%86%E5%8F%B2%E9%A6%96%E9%87%91%E5%85%89%E8%8A%92%E9%97%AA%E8%80%80%23) `1.1M 🔥` `-21%`
1. [第一次对AI感到恐惧](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%AF%B9AI%E6%84%9F%E5%88%B0%E6%81%90%E6%83%A7%23) `1.1M 🔥` `-21%`
1. [花少导演在约张凌赫田曦薇](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%91%E5%AF%BC%E6%BC%94%E5%9C%A8%E7%BA%A6%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%23) `709.1K 🔥` `-32%`
1. [发现变胖真的太廉价了](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%8F%98%E8%83%96%E7%9C%9F%E7%9A%84%E5%A4%AA%E5%BB%89%E4%BB%B7%E4%BA%86%23) `632.7K 🔥` `-29%`
1. [鹿晗 爷们儿要脸 (Lu Han, you want face)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%20%E7%88%B7%E4%BB%AC%E5%84%BF%E8%A6%81%E8%84%B8%23) `410.2K 🔥` `-41%`
1. [KSG止步32强](https://s.weibo.com/weibo?q=%23KSG%E6%AD%A2%E6%AD%A532%E5%BC%BA%23) `402.3K 🔥` `-31%`
1. [多个国家抛售黄金](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%B8%AA%E5%9B%BD%E5%AE%B6%E6%8A%9B%E5%94%AE%E9%BB%84%E9%87%91%23) `279.0K 🔥` `-33%`
1. [何宣林道歉 (He Xuanlin apologizes)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%E9%81%93%E6%AD%89%23) `246.4K 🔥` `-35%`
1. [曝穆祉丞确认将进组十日终焉](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%A9%86%E7%A5%89%E4%B8%9E%E7%A1%AE%E8%AE%A4%E5%B0%86%E8%BF%9B%E7%BB%84%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `223.2K 🔥` `-21%`
1. [孟子义李昀锐方早已辟谣](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E6%96%B9%E6%97%A9%E5%B7%B2%E8%BE%9F%E8%B0%A3%23) `220.5K 🔥` `-36%`
1. [奔跑吧直播 (Run Live)](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E7%9B%B4%E6%92%AD%23) `203.1K 🔥` `-86%`
1. [孙丞潇 人永远不知道谁会旺你](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%B8%9E%E6%BD%87%20%E4%BA%BA%E6%B0%B8%E8%BF%9C%E4%B8%8D%E7%9F%A5%E9%81%93%E8%B0%81%E4%BC%9A%E6%97%BA%E4%BD%A0%23) `177.3K 🔥` `-52%`
1. [金价跌至近期新低](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%B7%8C%E8%87%B3%E8%BF%91%E6%9C%9F%E6%96%B0%E4%BD%8E%23) `173.2K 🔥` `-23%`
1. [霍思燕的蒙古獒又夺冠了](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E6%80%9D%E7%87%95%E7%9A%84%E8%92%99%E5%8F%A4%E7%8D%92%E5%8F%88%E5%A4%BA%E5%86%A0%E4%BA%86%23) `173.2K 🔥` `-44%`
1. [韩国新恋综太炸裂了](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%96%B0%E6%81%8B%E7%BB%BC%E5%A4%AA%E7%82%B8%E8%A3%82%E4%BA%86%23) `165.2K 🔥` `-44%`
1. [陶昕然骄傲拒撕节目组](https://s.weibo.com/weibo?q=%23%E9%99%B6%E6%98%95%E7%84%B6%E9%AA%84%E5%82%B2%E6%8B%92%E6%92%95%E8%8A%82%E7%9B%AE%E7%BB%84%23) `154.9K 🔥` `-51%`
1. [翁虹回应女儿被称最美星二代 (Weng Hong responded to her daughter being called the most beautiful second generation star)](https://s.weibo.com/weibo?q=%23%E7%BF%81%E8%99%B9%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%84%BF%E8%A2%AB%E7%A7%B0%E6%9C%80%E7%BE%8E%E6%98%9F%E4%BA%8C%E4%BB%A3%23) `153.4K 🔥` `-24%`
1. [何润东是霍建华的反义词](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E6%98%AF%E9%9C%8D%E5%BB%BA%E5%8D%8E%E7%9A%84%E5%8F%8D%E4%B9%89%E8%AF%8D%23) `149.4K 🔥` `-23%`
1. [迪丽热巴腿部肌肉线条](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%85%BF%E9%83%A8%E8%82%8C%E8%82%89%E7%BA%BF%E6%9D%A1%23) `148.7K 🔥` `-31%`
1. [网友在daiso买了个小狗不会用的东西](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%9C%A8daiso%E4%B9%B0%E4%BA%86%E4%B8%AA%E5%B0%8F%E7%8B%97%E4%B8%8D%E4%BC%9A%E7%94%A8%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `123.5K 🔥` `-71%`
1. [派克特没有道歉 (Packett didn't apologize)](https://s.weibo.com/weibo?q=%23%E6%B4%BE%E5%85%8B%E7%89%B9%E6%B2%A1%E6%9C%89%E9%81%93%E6%AD%89%23) `118.8K 🔥` `-30%`
1. [妈妈怀疑瑶一瑶有多动症 (Mother suspects Yao Yiyao has ADHD)](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E6%80%80%E7%96%91%E7%91%B6%E4%B8%80%E7%91%B6%E6%9C%89%E5%A4%9A%E5%8A%A8%E7%97%87%23) `117.3K 🔥` `-48%`

Updated at 2026-04-25 17:06:55

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
