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

1. [奔跑吧直播 (Run Live)](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E7%9B%B4%E6%92%AD%23) `1.4M 🔥` `NEW`
1. [疾风骤雨中三枚历史首金光芒闪耀](https://s.weibo.com/weibo?q=%23%E7%96%BE%E9%A3%8E%E9%AA%A4%E9%9B%A8%E4%B8%AD%E4%B8%89%E6%9E%9A%E5%8E%86%E5%8F%B2%E9%A6%96%E9%87%91%E5%85%89%E8%8A%92%E9%97%AA%E8%80%80%23) `1.4M 🔥` `NEW`
1. [花少导演在约张凌赫田曦薇](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%91%E5%AF%BC%E6%BC%94%E5%9C%A8%E7%BA%A6%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%23) `1.1M 🔥` `NEW`
1. [全家被魔力歌硬控在沙发上](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%AE%B6%E8%A2%AB%E9%AD%94%E5%8A%9B%E6%AD%8C%E7%A1%AC%E6%8E%A7%E5%9C%A8%E6%B2%99%E5%8F%91%E4%B8%8A%23) `701.9K 🔥` `NEW`
1. [KSG止步32强](https://s.weibo.com/weibo?q=%23KSG%E6%AD%A2%E6%AD%A532%E5%BC%BA%23) `583.4K 🔥` `NEW`
1. [王濛隔空喊话黎明](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E9%9A%94%E7%A9%BA%E5%96%8A%E8%AF%9D%E9%BB%8E%E6%98%8E%23) `397.3K 🔥` `NEW`
1. [警方称黄金被扣30年赔偿已过时效](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E7%A7%B0%E9%BB%84%E9%87%91%E8%A2%AB%E6%89%A330%E5%B9%B4%E8%B5%94%E5%81%BF%E5%B7%B2%E8%BF%87%E6%97%B6%E6%95%88%23) `385.5K 🔥` `NEW`
1. [大众9X智能辅助驾驶跻身第一梯队](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BC%979X%E6%99%BA%E8%83%BD%E8%BE%85%E5%8A%A9%E9%A9%BE%E9%A9%B6%E8%B7%BB%E8%BA%AB%E7%AC%AC%E4%B8%80%E6%A2%AF%E9%98%9F%23) `346.4K 🔥` `NEW`
1. [孟子义李昀锐方早已辟谣](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E6%96%B9%E6%97%A9%E5%B7%B2%E8%BE%9F%E8%B0%A3%23) `344.9K 🔥` `NEW`
1. [官方核查商家教唆游客喂怀孕母猴酒](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E6%A0%B8%E6%9F%A5%E5%95%86%E5%AE%B6%E6%95%99%E5%94%86%E6%B8%B8%E5%AE%A2%E5%96%82%E6%80%80%E5%AD%95%E6%AF%8D%E7%8C%B4%E9%85%92%23) `308.7K 🔥` `NEW`
1. [过了25就不敢甩头了 (After 25, you no longer dare to shake your head.)](https://s.weibo.com/weibo?q=%23%E8%BF%87%E4%BA%8625%E5%B0%B1%E4%B8%8D%E6%95%A2%E7%94%A9%E5%A4%B4%E4%BA%86%23) `287.2K 🔥` `NEW`
1. [佳偶天成开播2小时登顶热播榜](https://s.weibo.com/weibo?q=%23%E4%BD%B3%E5%81%B6%E5%A4%A9%E6%88%90%E5%BC%80%E6%92%AD2%E5%B0%8F%E6%97%B6%E7%99%BB%E9%A1%B6%E7%83%AD%E6%92%AD%E6%A6%9C%23) `265.0K 🔥` `NEW`
1. [KSG全员上败采](https://s.weibo.com/weibo?q=%23KSG%E5%85%A8%E5%91%98%E4%B8%8A%E8%B4%A5%E9%87%87%23) `230.6K 🔥` `NEW`
1. [逃犯没想到路人身手这么好](https://s.weibo.com/weibo?q=%23%E9%80%83%E7%8A%AF%E6%B2%A1%E6%83%B3%E5%88%B0%E8%B7%AF%E4%BA%BA%E8%BA%AB%E6%89%8B%E8%BF%99%E4%B9%88%E5%A5%BD%23) `224.5K 🔥` `NEW`
1. [华为大阔折真香](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%A4%A7%E9%98%94%E6%8A%98%E7%9C%9F%E9%A6%99%23) `222.5K 🔥` `NEW`
1. [二手烟 健康权](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E6%89%8B%E7%83%9F%20%E5%81%A5%E5%BA%B7%E6%9D%83%23) `221.9K 🔥` `NEW`
1. [杨威两女儿勇夺全国冠军和季军](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%A8%81%E4%B8%A4%E5%A5%B3%E5%84%BF%E5%8B%87%E5%A4%BA%E5%85%A8%E5%9B%BD%E5%86%A0%E5%86%9B%E5%92%8C%E5%AD%A3%E5%86%9B%23) `216.3K 🔥` `NEW`
1. [何润东是霍建华的反义词](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E6%98%AF%E9%9C%8D%E5%BB%BA%E5%8D%8E%E7%9A%84%E5%8F%8D%E4%B9%89%E8%AF%8D%23) `193.8K 🔥` `NEW`
1. [烧烤摊主停业10天去救人](https://s.weibo.com/weibo?q=%23%E7%83%A7%E7%83%A4%E6%91%8A%E4%B8%BB%E5%81%9C%E4%B8%9A10%E5%A4%A9%E5%8E%BB%E6%95%91%E4%BA%BA%23) `190.5K 🔥` `NEW`
1. [为什么很少听到工作狂这个标签了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BE%88%E5%B0%91%E5%90%AC%E5%88%B0%E5%B7%A5%E4%BD%9C%E7%8B%82%E8%BF%99%E4%B8%AA%E6%A0%87%E7%AD%BE%E4%BA%86%23) `174.1K 🔥` `NEW`
1. [三手烟 (thirdhand smoke)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%89%8B%E7%83%9F%23) `170.2K 🔥` `NEW`
1. [天蝎座的小猫](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E8%9D%8E%E5%BA%A7%E7%9A%84%E5%B0%8F%E7%8C%AB%23) `168.3K 🔥` `NEW`
1. [7岁男童仅18斤被当脑瘫治7年](https://s.weibo.com/weibo?q=%237%E5%B2%81%E7%94%B7%E7%AB%A5%E4%BB%8518%E6%96%A4%E8%A2%AB%E5%BD%93%E8%84%91%E7%98%AB%E6%B2%BB7%E5%B9%B4%23) `1.4M 🔥` `+301%`
1. [第一次对AI感到恐惧](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%AF%B9AI%E6%84%9F%E5%88%B0%E6%81%90%E6%83%A7%23) `1.4M 🔥` `+49%`
1. [鹿晗 爷们儿要脸](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%20%E7%88%B7%E4%BB%AC%E5%84%BF%E8%A6%81%E8%84%B8%23) `695.8K 🔥` `+95%`
1. [多个国家抛售黄金](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%B8%AA%E5%9B%BD%E5%AE%B6%E6%8A%9B%E5%94%AE%E9%BB%84%E9%87%91%23) `414.2K 🔥` `+33%`
1. [孙丞潇 人永远不知道谁会旺你](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%B8%9E%E6%BD%87%20%E4%BA%BA%E6%B0%B8%E8%BF%9C%E4%B8%8D%E7%9F%A5%E9%81%93%E8%B0%81%E4%BC%9A%E6%97%BA%E4%BD%A0%23) `371.1K 🔥` `+43%`
1. [东方甄选感谢明明天权](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E6%84%9F%E8%B0%A2%E6%98%8E%E6%98%8E%E5%A4%A9%E6%9D%83%23) `309.3K 🔥` `+101%`
1. [发现变胖真的太廉价了](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%8F%98%E8%83%96%E7%9C%9F%E7%9A%84%E5%A4%AA%E5%BB%89%E4%BB%B7%E4%BA%86%23) `897.0K 🔥`
1. [网友在daiso买了个小狗不会用的东西](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%9C%A8daiso%E4%B9%B0%E4%BA%86%E4%B8%AA%E5%B0%8F%E7%8B%97%E4%B8%8D%E4%BC%9A%E7%94%A8%E7%9A%84%E4%B8%9C%E8%A5%BF%23) `428.0K 🔥`
1. [孟子义李昀锐下定决心拆cp的原因 (The reason why Meng Ziyi and Li Yunrui decided to dismantle CP)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E4%B8%8B%E5%AE%9A%E5%86%B3%E5%BF%83%E6%8B%86cp%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `405.1K 🔥`
1. [陶昕然骄傲拒撕节目组](https://s.weibo.com/weibo?q=%23%E9%99%B6%E6%98%95%E7%84%B6%E9%AA%84%E5%82%B2%E6%8B%92%E6%92%95%E8%8A%82%E7%9B%AE%E7%BB%84%23) `313.9K 🔥`
1. [霍思燕的蒙古獒又夺冠了](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E6%80%9D%E7%87%95%E7%9A%84%E8%92%99%E5%8F%A4%E7%8D%92%E5%8F%88%E5%A4%BA%E5%86%A0%E4%BA%86%23) `308.7K 🔥`
1. [曝穆祉丞确认将进组十日终焉](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%A9%86%E7%A5%89%E4%B8%9E%E7%A1%AE%E8%AE%A4%E5%B0%86%E8%BF%9B%E7%BB%84%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `281.5K 🔥`
1. [iPhone18ProMax厚度近14mm](https://s.weibo.com/weibo?q=%23iPhone18ProMax%E5%8E%9A%E5%BA%A6%E8%BF%9114mm%23) `222.7K 🔥`
1. [派克特没有道歉 (Packett didn't apologize)](https://s.weibo.com/weibo?q=%23%E6%B4%BE%E5%85%8B%E7%89%B9%E6%B2%A1%E6%9C%89%E9%81%93%E6%AD%89%23) `169.1K 🔥`
1. [何宣林道歉 (He Xuanlin apologizes)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%E9%81%93%E6%AD%89%23) `379.3K 🔥` `-44%`
1. [韩国新恋综太炸裂了](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%96%B0%E6%81%8B%E7%BB%BC%E5%A4%AA%E7%82%B8%E8%A3%82%E4%BA%86%23) `293.1K 🔥` `-72%`
1. [金价跌至近期新低](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E8%B7%8C%E8%87%B3%E8%BF%91%E6%9C%9F%E6%96%B0%E4%BD%8E%23) `225.9K 🔥` `-37%`
1. [詹姆斯三分 (James three-pointer)](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E4%B8%89%E5%88%86%23) `225.3K 🔥` `-79%`
1. [三佛塔电诈园区航拍曝光](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BD%9B%E5%A1%94%E7%94%B5%E8%AF%88%E5%9B%AD%E5%8C%BA%E8%88%AA%E6%8B%8D%E6%9B%9D%E5%85%89%23) `225.1K 🔥` `-37%`
1. [妈妈怀疑瑶一瑶有多动症 (Mother suspects Yao Yiyao has ADHD)](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E6%80%80%E7%96%91%E7%91%B6%E4%B8%80%E7%91%B6%E6%9C%89%E5%A4%9A%E5%8A%A8%E7%97%87%23) `223.5K 🔥` `-37%`
1. [迪丽热巴腿部肌肉线条](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%85%BF%E9%83%A8%E8%82%8C%E8%82%89%E7%BA%BF%E6%9D%A1%23) `215.7K 🔥` `-22%`
1. [翁虹回应女儿被称最美星二代](https://s.weibo.com/weibo?q=%23%E7%BF%81%E8%99%B9%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%84%BF%E8%A2%AB%E7%A7%B0%E6%9C%80%E7%BE%8E%E6%98%9F%E4%BA%8C%E4%BB%A3%23) `202.1K 🔥` `-43%`
1. [KSG对战TTG (KSG vs. TTG)](https://s.weibo.com/weibo?q=%23KSG%E5%AF%B9%E6%88%98TTG%23) `195.9K 🔥` `-74%`
1. [唐艺昕回应重新分词](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E5%9B%9E%E5%BA%94%E9%87%8D%E6%96%B0%E5%88%86%E8%AF%8D%23) `190.3K 🔥` `-31%`
1. [TXT观看苏新皓翻跳GGUM](https://s.weibo.com/weibo?q=%23TXT%E8%A7%82%E7%9C%8B%E8%8B%8F%E6%96%B0%E7%9A%93%E7%BF%BB%E8%B7%B3GGUM%23) `175.0K 🔥` `-42%`
1. [唐艺昕离开李小冉后成了李小冉](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E7%A6%BB%E5%BC%80%E6%9D%8E%E5%B0%8F%E5%86%89%E5%90%8E%E6%88%90%E4%BA%86%E6%9D%8E%E5%B0%8F%E5%86%89%23) `168.9K 🔥` `-53%`
1. [余茵拍上部戏体重才60多斤](https://s.weibo.com/weibo?q=%23%E4%BD%99%E8%8C%B5%E6%8B%8D%E4%B8%8A%E9%83%A8%E6%88%8F%E4%BD%93%E9%87%8D%E6%89%8D60%E5%A4%9A%E6%96%A4%23) `152.3K 🔥` `-45%`
1. [以色列引进印度移民](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%BC%95%E8%BF%9B%E5%8D%B0%E5%BA%A6%E7%A7%BB%E6%B0%91%23) `137.9K 🔥` `-50%`
1. [第一次见外国人误闯天家](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E5%A4%96%E5%9B%BD%E4%BA%BA%E8%AF%AF%E9%97%AF%E5%A4%A9%E5%AE%B6%23) `137.2K 🔥` `-61%`

Updated at 2026-04-25 16:03:33

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
