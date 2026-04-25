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

1. [一汽大众T6亮相北京车展 (FAW-Volkswagen T6 debuts at Beijing Auto Show)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%B1%BD%E5%A4%A7%E4%BC%97T6%E4%BA%AE%E7%9B%B8%E5%8C%97%E4%BA%AC%E8%BD%A6%E5%B1%95%23) `835.3K 🔥` `NEW`
1. [茶百道星穹铁道联名](https://s.weibo.com/weibo?q=%23%E8%8C%B6%E7%99%BE%E9%81%93%E6%98%9F%E7%A9%B9%E9%93%81%E9%81%93%E8%81%94%E5%90%8D%23) `819.4K 🔥` `NEW`
1. [李昀锐连孟子义名字都不提](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E8%BF%9E%E5%AD%9F%E5%AD%90%E4%B9%89%E5%90%8D%E5%AD%97%E9%83%BD%E4%B8%8D%E6%8F%90%23) `373.9K 🔥` `NEW`
1. [美国富豪遭5头大象踩踏身亡](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%AF%8C%E8%B1%AA%E9%81%AD5%E5%A4%B4%E5%A4%A7%E8%B1%A1%E8%B8%A9%E8%B8%8F%E8%BA%AB%E4%BA%A1%23) `365.2K 🔥` `NEW`
1. [泰山游客为抢日出拍摄机位起冲突](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%B1%B1%E6%B8%B8%E5%AE%A2%E4%B8%BA%E6%8A%A2%E6%97%A5%E5%87%BA%E6%8B%8D%E6%91%84%E6%9C%BA%E4%BD%8D%E8%B5%B7%E5%86%B2%E7%AA%81%23) `299.8K 🔥` `NEW`
1. [谢娜感谢陶昕然能来乘风](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%84%9F%E8%B0%A2%E9%99%B6%E6%98%95%E7%84%B6%E8%83%BD%E6%9D%A5%E4%B9%98%E9%A3%8E%23) `194.7K 🔥` `NEW`
1. [大众9X上市1小时内锁单破万](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BC%979X%E4%B8%8A%E5%B8%821%E5%B0%8F%E6%97%B6%E5%86%85%E9%94%81%E5%8D%95%E7%A0%B4%E4%B8%87%23) `191.8K 🔥` `NEW`
1. [TES战胜NIP](https://s.weibo.com/weibo?q=%23TES%E6%88%98%E8%83%9CNIP%23) `163.3K 🔥` `NEW`
1. [近3公斤黄金被扣30年银行账目已毁](https://s.weibo.com/weibo?q=%23%E8%BF%913%E5%85%AC%E6%96%A4%E9%BB%84%E9%87%91%E8%A2%AB%E6%89%A330%E5%B9%B4%E9%93%B6%E8%A1%8C%E8%B4%A6%E7%9B%AE%E5%B7%B2%E6%AF%81%23) `153.3K 🔥` `NEW`
1. [中科院科技创新发展中心主任被查](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%A7%91%E9%99%A2%E7%A7%91%E6%8A%80%E5%88%9B%E6%96%B0%E5%8F%91%E5%B1%95%E4%B8%AD%E5%BF%83%E4%B8%BB%E4%BB%BB%E8%A2%AB%E6%9F%A5%23) `153.0K 🔥` `NEW`
1. [2名女子地铁打架被行拘 (2 women arrested for fighting on subway)](https://s.weibo.com/weibo?q=%232%E5%90%8D%E5%A5%B3%E5%AD%90%E5%9C%B0%E9%93%81%E6%89%93%E6%9E%B6%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `140.7K 🔥` `NEW`
1. [成都一小区起火居民发声](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E4%B8%80%E5%B0%8F%E5%8C%BA%E8%B5%B7%E7%81%AB%E5%B1%85%E6%B0%91%E5%8F%91%E5%A3%B0%23) `124.5K 🔥` `NEW`
1. [中灿回应离开东方甄选](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%81%BF%E5%9B%9E%E5%BA%94%E7%A6%BB%E5%BC%80%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%23) `123.7K 🔥` `NEW`
1. [原村支书用铲车掩埋村民被刑拘](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%91%E6%94%AF%E4%B9%A6%E7%94%A8%E9%93%B2%E8%BD%A6%E6%8E%A9%E5%9F%8B%E6%9D%91%E6%B0%91%E8%A2%AB%E5%88%91%E6%8B%98%23) `123.1K 🔥` `NEW`
1. [华晨宇把音乐节开成了乐园](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E6%8A%8A%E9%9F%B3%E4%B9%90%E8%8A%82%E5%BC%80%E6%88%90%E4%BA%86%E4%B9%90%E5%9B%AD%23) `119.6K 🔥` `NEW`
1. [佳偶天成开播2小时登顶热播榜](https://s.weibo.com/weibo?q=%23%E4%BD%B3%E5%81%B6%E5%A4%A9%E6%88%90%E5%BC%80%E6%92%AD2%E5%B0%8F%E6%97%B6%E7%99%BB%E9%A1%B6%E7%83%AD%E6%92%AD%E6%A6%9C%23) `108.7K 🔥` `NEW`
1. [花呗白条月付等面临重大调整](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%91%97%E7%99%BD%E6%9D%A1%E6%9C%88%E4%BB%98%E7%AD%89%E9%9D%A2%E4%B8%B4%E9%87%8D%E5%A4%A7%E8%B0%83%E6%95%B4%23) `1.3M 🔥` `+274%`
1. [五一原来是放假七天的](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%8E%9F%E6%9D%A5%E6%98%AF%E6%94%BE%E5%81%87%E4%B8%83%E5%A4%A9%E7%9A%84%23) `830.3K 🔥` `+99%`
1. [何宣林浪姐上班哭了](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%E6%B5%AA%E5%A7%90%E4%B8%8A%E7%8F%AD%E5%93%AD%E4%BA%86%23) `728.5K 🔥` `+522%`
1. [瘦人无法理解的吃饭习惯](https://s.weibo.com/weibo?q=%23%E7%98%A6%E4%BA%BA%E6%97%A0%E6%B3%95%E7%90%86%E8%A7%A3%E7%9A%84%E5%90%83%E9%A5%AD%E4%B9%A0%E6%83%AF%23) `582.5K 🔥` `+157%`
1. [孟子义李昀锐下定决心拆cp的原因 (The reason why Meng Ziyi and Li Yunrui decided to dismantle CP)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E4%B8%8B%E5%AE%9A%E5%86%B3%E5%BF%83%E6%8B%86cp%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `517.0K 🔥` `+24%`
1. [三手烟 (thirdhand smoke)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%89%8B%E7%83%9F%23) `516.0K 🔥` `+25%`
1. [陶昕然发长文回应淘汰 (Tao Xinran posted a long post in response to the elimination)](https://s.weibo.com/weibo?q=%23%E9%99%B6%E6%98%95%E7%84%B6%E5%8F%91%E9%95%BF%E6%96%87%E5%9B%9E%E5%BA%94%E6%B7%98%E6%B1%B0%23) `515.6K 🔥` `+25%`
1. [杨威两女儿勇夺全国冠军和季军 (Yang Wei’s two daughters won the national championship and third runner-up)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%A8%81%E4%B8%A4%E5%A5%B3%E5%84%BF%E5%8B%87%E5%A4%BA%E5%85%A8%E5%9B%BD%E5%86%A0%E5%86%9B%E5%92%8C%E5%AD%A3%E5%86%9B%23) `381.7K 🔥` `+22%`
1. [鹿晗五哈工伤](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E4%BA%94%E5%93%88%E5%B7%A5%E4%BC%A4%23) `174.1K 🔥` `+43%`
1. [老舅在五哈镜头前道歉](https://s.weibo.com/weibo?q=%23%E8%80%81%E8%88%85%E5%9C%A8%E4%BA%94%E5%93%88%E9%95%9C%E5%A4%B4%E5%89%8D%E9%81%93%E6%AD%89%23) `815.1K 🔥`
1. [发现变胖真的太廉价了](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%8F%98%E8%83%96%E7%9C%9F%E7%9A%84%E5%A4%AA%E5%BB%89%E4%BB%B7%E4%BA%86%23) `519.5K 🔥`
1. [鹿晗 爷们儿要脸 (Lu Han, you want face)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%20%E7%88%B7%E4%BB%AC%E5%84%BF%E8%A6%81%E8%84%B8%23) `371.7K 🔥`
1. [王濛隔空喊话黎明](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E9%9A%94%E7%A9%BA%E5%96%8A%E8%AF%9D%E9%BB%8E%E6%98%8E%23) `357.0K 🔥`
1. [这段话反复杀死了我的懒惰](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%AE%B5%E8%AF%9D%E5%8F%8D%E5%A4%8D%E6%9D%80%E6%AD%BB%E4%BA%86%E6%88%91%E7%9A%84%E6%87%92%E6%83%B0%23) `298.5K 🔥`
1. [iPhone18ProMax厚度近14mm](https://s.weibo.com/weibo?q=%23iPhone18ProMax%E5%8E%9A%E5%BA%A6%E8%BF%9114mm%23) `192.8K 🔥`
1. [曝穆祉丞确认将进组十日终焉](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%A9%86%E7%A5%89%E4%B8%9E%E7%A1%AE%E8%AE%A4%E5%B0%86%E8%BF%9B%E7%BB%84%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `191.5K 🔥`
1. [为什么很少听到工作狂这个标签了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BE%88%E5%B0%91%E5%90%AC%E5%88%B0%E5%B7%A5%E4%BD%9C%E7%8B%82%E8%BF%99%E4%B8%AA%E6%A0%87%E7%AD%BE%E4%BA%86%23) `153.0K 🔥`
1. [派克特没有道歉 (Packett didn't apologize)](https://s.weibo.com/weibo?q=%23%E6%B4%BE%E5%85%8B%E7%89%B9%E6%B2%A1%E6%9C%89%E9%81%93%E6%AD%89%23) `126.3K 🔥`
1. [何润东是霍建华的反义词](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E6%98%AF%E9%9C%8D%E5%BB%BA%E5%8D%8E%E7%9A%84%E5%8F%8D%E4%B9%89%E8%AF%8D%23) `123.0K 🔥`
1. [7岁男童仅18斤被当脑瘫治7年 (A 7-year-old boy weighing only 18 pounds was treated as having cerebral palsy for 7 years)](https://s.weibo.com/weibo?q=%237%E5%B2%81%E7%94%B7%E7%AB%A5%E4%BB%8518%E6%96%A4%E8%A2%AB%E5%BD%93%E8%84%91%E7%98%AB%E6%B2%BB7%E5%B9%B4%23) `880.8K 🔥` `-24%`
1. [疾风骤雨中三枚历史首金光芒闪耀](https://s.weibo.com/weibo?q=%23%E7%96%BE%E9%A3%8E%E9%AA%A4%E9%9B%A8%E4%B8%AD%E4%B8%89%E6%9E%9A%E5%8E%86%E5%8F%B2%E9%A6%96%E9%87%91%E5%85%89%E8%8A%92%E9%97%AA%E8%80%80%23) `839.6K 🔥` `-23%`
1. [异父异母但双胞胎 (Half-mother but twins)](https://s.weibo.com/weibo?q=%23%E5%BC%82%E7%88%B6%E5%BC%82%E6%AF%8D%E4%BD%86%E5%8F%8C%E8%83%9E%E8%83%8E%23) `835.2K 🔥` `-24%`
1. [第一次对AI感到恐惧](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%AF%B9AI%E6%84%9F%E5%88%B0%E6%81%90%E6%83%A7%23) `820.5K 🔥` `-25%`
1. [花少导演在约张凌赫田曦薇](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%91%E5%AF%BC%E6%BC%94%E5%9C%A8%E7%BA%A6%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%23) `513.6K 🔥` `-28%`
1. [KSG止步32强](https://s.weibo.com/weibo?q=%23KSG%E6%AD%A2%E6%AD%A532%E5%BC%BA%23) `295.2K 🔥` `-27%`
1. [过了25就不敢甩头了 (After 25, you no longer dare to shake your head.)](https://s.weibo.com/weibo?q=%23%E8%BF%87%E4%BA%8625%E5%B0%B1%E4%B8%8D%E6%95%A2%E7%94%A9%E5%A4%B4%E4%BA%86%23) `249.5K 🔥` `-40%`
1. [娜扎前经纪人回应离职 (Nazha’s former manager responds to resignation)](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E5%89%8D%E7%BB%8F%E7%BA%AA%E4%BA%BA%E5%9B%9E%E5%BA%94%E7%A6%BB%E8%81%8C%23) `248.4K 🔥` `-21%`
1. [警方称黄金被扣30年赔偿已过时效](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E7%A7%B0%E9%BB%84%E9%87%91%E8%A2%AB%E6%89%A330%E5%B9%B4%E8%B5%94%E5%81%BF%E5%B7%B2%E8%BF%87%E6%97%B6%E6%95%88%23) `218.5K 🔥` `-80%`
1. [范丞丞踩到白鹿裙子](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E8%B8%A9%E5%88%B0%E7%99%BD%E9%B9%BF%E8%A3%99%E5%AD%90%23) `204.2K 🔥` `-41%`
1. [何宣林道歉 (He Xuanlin apologizes)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%E9%81%93%E6%AD%89%23) `152.2K 🔥` `-38%`
1. [多个国家抛售黄金](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%B8%AA%E5%9B%BD%E5%AE%B6%E6%8A%9B%E5%94%AE%E9%BB%84%E9%87%91%23) `145.8K 🔥` `-48%`
1. [KSG全员上败采](https://s.weibo.com/weibo?q=%23KSG%E5%85%A8%E5%91%98%E4%B8%8A%E8%B4%A5%E9%87%87%23) `123.3K 🔥` `-40%`
1. [金价跌至近期新低](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%B7%8C%E8%87%B3%E8%BF%91%E6%9C%9F%E6%96%B0%E4%BD%8E%23) `119.3K 🔥` `-31%`
1. [迪丽热巴腿部肌肉线条 (Dilireba's leg muscle lines)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%85%BF%E9%83%A8%E8%82%8C%E8%82%89%E7%BA%BF%E6%9D%A1%23) `114.4K 🔥` `-23%`
1. [林钟勋说王楚钦是左手特例](https://s.weibo.com/weibo?q=%23%E6%9E%97%E9%92%9F%E5%8B%8B%E8%AF%B4%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%98%AF%E5%B7%A6%E6%89%8B%E7%89%B9%E4%BE%8B%23) `105.8K 🔥` `-30%`
1. [孙丞潇 人永远不知道谁会旺你](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%B8%9E%E6%BD%87%20%E4%BA%BA%E6%B0%B8%E8%BF%9C%E4%B8%8D%E7%9F%A5%E9%81%93%E8%B0%81%E4%BC%9A%E6%97%BA%E4%BD%A0%23) `105.7K 🔥` `-40%`

Updated at 2026-04-25 18:03:55

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
