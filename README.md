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

1. [椰树 追求胸大是让婴儿有奶吃 (Coconut tree pursues big breasts so that the baby can have milk to drink)](https://s.weibo.com/weibo?q=%23%E6%A4%B0%E6%A0%91%20%E8%BF%BD%E6%B1%82%E8%83%B8%E5%A4%A7%E6%98%AF%E8%AE%A9%E5%A9%B4%E5%84%BF%E6%9C%89%E5%A5%B6%E5%90%83%23) `107.4K 🔥` `NEW`
1. [以方称哈梅内伊遗体被找到](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E6%96%B9%E7%A7%B0%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E9%81%97%E4%BD%93%E8%A2%AB%E6%89%BE%E5%88%B0%23) `84.1K 🔥` `NEW`
1. [伊朗称哈梅内伊安然无恙](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E5%AE%89%E7%84%B6%E6%97%A0%E6%81%99%23) `84.0K 🔥` `NEW`
1. [迪丽热巴全维语采访](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%85%A8%E7%BB%B4%E8%AF%AD%E9%87%87%E8%AE%BF%23) `83.9K 🔥` `NEW`
1. [利物浦5比2西汉姆联](https://s.weibo.com/weibo?q=%23%E5%88%A9%E7%89%A9%E6%B5%A65%E6%AF%942%E8%A5%BF%E6%B1%89%E5%A7%86%E8%81%94%23) `83.6K 🔥` `NEW`
1. [哈梅内伊将发表公开讲话 (Khamenei will make a public speech)](https://s.weibo.com/weibo?q=%23%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E5%B0%86%E5%8F%91%E8%A1%A8%E5%85%AC%E5%BC%80%E8%AE%B2%E8%AF%9D%23) `1.1M 🔥` `+84%`
1. [退税](https://s.weibo.com/weibo?q=%23%E9%80%80%E7%A8%8E%23) `779.2K 🔥` `+890%`
1. [迪拜国际机场航站楼遭到袭击](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E6%8B%9C%E5%9B%BD%E9%99%85%E6%9C%BA%E5%9C%BA%E8%88%AA%E7%AB%99%E6%A5%BC%E9%81%AD%E5%88%B0%E8%A2%AD%E5%87%BB%23) `122.0K 🔥` `+97%`
1. [山姆520元巧克力降到99元 (Sam’s 520 yuan chocolate reduced to 99 yuan)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86520%E5%85%83%E5%B7%A7%E5%85%8B%E5%8A%9B%E9%99%8D%E5%88%B099%E5%85%83%23) `103.1K 🔥` `+63%`
1. [这居然是侯明昊的素颜 (This is actually Hou Minghao’s bare face)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B1%85%E7%84%B6%E6%98%AF%E4%BE%AF%E6%98%8E%E6%98%8A%E7%9A%84%E7%B4%A0%E9%A2%9C%23) `87.9K 🔥` `+39%`
1. [伊媒曝无人机击中美军基地画面 (Iranian media reveals footage of drone hitting US military base)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E5%AA%92%E6%9B%9D%E6%97%A0%E4%BA%BA%E6%9C%BA%E5%87%BB%E4%B8%AD%E7%BE%8E%E5%86%9B%E5%9F%BA%E5%9C%B0%E7%94%BB%E9%9D%A2%23) `86.5K 🔥` `+37%`
1. [国乒仅王楚钦晋级男单四强 (Only Wang Chuqin of the national table tennis team advanced to the men’s singles semi-finals)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E4%BB%85%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%99%8B%E7%BA%A7%E7%94%B7%E5%8D%95%E5%9B%9B%E5%BC%BA%23) `84.3K 🔥` `+33%`
1. [老铺黄金46.9万元金如意售空 (Laopu gold sold out for 469,000 yuan.)](https://s.weibo.com/weibo?q=%23%E8%80%81%E9%93%BA%E9%BB%84%E9%87%9146.9%E4%B8%87%E5%85%83%E9%87%91%E5%A6%82%E6%84%8F%E5%94%AE%E7%A9%BA%23) `84.1K 🔥` `+68%`
1. [以色列高级官员称哈梅内伊已死](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E9%AB%98%E7%BA%A7%E5%AE%98%E5%91%98%E7%A7%B0%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E5%B7%B2%E6%AD%BB%23) `84.1K 🔥` `+35%`
1. [胃癌等消化系统肿瘤呈年轻化趋势](https://s.weibo.com/weibo?q=%23%E8%83%83%E7%99%8C%E7%AD%89%E6%B6%88%E5%8C%96%E7%B3%BB%E7%BB%9F%E8%82%BF%E7%98%A4%E5%91%88%E5%B9%B4%E8%BD%BB%E5%8C%96%E8%B6%8B%E5%8A%BF%23) `84.0K 🔥` `+25%`
1. [美方披露战斗受损情况 (U.S. discloses battle damage)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E6%96%B9%E6%8A%AB%E9%9C%B2%E6%88%98%E6%96%97%E5%8F%97%E6%8D%9F%E6%83%85%E5%86%B5%23) `84.0K 🔥` `+33%`
1. [伊朗摧毁卡塔尔美军基地设备 (Iran destroys equipment at US military base in Qatar)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%91%A7%E6%AF%81%E5%8D%A1%E5%A1%94%E5%B0%94%E7%BE%8E%E5%86%9B%E5%9F%BA%E5%9C%B0%E8%AE%BE%E5%A4%87%23) `83.9K 🔥` `+67%`
1. [三月](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%9C%88%23) `83.9K 🔥` `+66%`
1. [王楚钦拒绝申请鹰眼挑战 (Wang Chuqin refused to apply for the Eagle Eye Challenge)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%8B%92%E7%BB%9D%E7%94%B3%E8%AF%B7%E9%B9%B0%E7%9C%BC%E6%8C%91%E6%88%98%23) `83.9K 🔥` `+67%`
1. [据称伊朗革命卫队总司令和防长身亡 (Iran's Revolutionary Guard Commander-in-Chief and Defense Minister Reportedly Dead)](https://s.weibo.com/weibo?q=%23%E6%8D%AE%E7%A7%B0%E4%BC%8A%E6%9C%97%E9%9D%A9%E5%91%BD%E5%8D%AB%E9%98%9F%E6%80%BB%E5%8F%B8%E4%BB%A4%E5%92%8C%E9%98%B2%E9%95%BF%E8%BA%AB%E4%BA%A1%23) `83.8K 🔥` `+47%`
1. [卓沅的粉丝 (Zhuo Yuan's fans)](https://s.weibo.com/weibo?q=%23%E5%8D%93%E6%B2%85%E7%9A%84%E7%B2%89%E4%B8%9D%23) `83.8K 🔥` `+67%`
1. [伊朗小学遭袭死亡升至85人](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%B0%8F%E5%AD%A6%E9%81%AD%E8%A2%AD%E6%AD%BB%E4%BA%A1%E5%8D%87%E8%87%B385%E4%BA%BA%23) `83.8K 🔥` `+67%`
1. [迪拜再次传出爆炸声 (Another explosion in Dubai)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E6%8B%9C%E5%86%8D%E6%AC%A1%E4%BC%A0%E5%87%BA%E7%88%86%E7%82%B8%E5%A3%B0%23) `83.8K 🔥` `+42%`
1. [以色列宣布袭击伊朗 (Israel announces attack on Iran)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%AE%A3%E5%B8%83%E8%A2%AD%E5%87%BB%E4%BC%8A%E6%9C%97%23) `83.7K 🔥` `+67%`
1. [男朋友送的草莓蛋糕第一次见 (The strawberry cake given by my boyfriend was the first time I saw it)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E6%9C%8B%E5%8F%8B%E9%80%81%E7%9A%84%E8%8D%89%E8%8E%93%E8%9B%8B%E7%B3%95%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%23) `83.7K 🔥` `+66%`
1. [伊朗袭击已致约200名美军伤亡 (Iran's attack has caused about 200 US military casualties)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%A2%AD%E5%87%BB%E5%B7%B2%E8%87%B4%E7%BA%A6200%E5%90%8D%E7%BE%8E%E5%86%9B%E4%BC%A4%E4%BA%A1%23) `83.7K 🔥` `+67%`
1. [比尔盖茨出轨对象照片曝光 (Photos of Bill Gates' cheating partner exposed)](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%B0%94%E7%9B%96%E8%8C%A8%E5%87%BA%E8%BD%A8%E5%AF%B9%E8%B1%A1%E7%85%A7%E7%89%87%E6%9B%9D%E5%85%89%23) `83.7K 🔥` `+66%`
1. [伊朗一小学遭袭51人死60人伤 (Attack on primary school in Iran kills 51 people and injures 60 others)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%80%E5%B0%8F%E5%AD%A6%E9%81%AD%E8%A2%AD51%E4%BA%BA%E6%AD%BB60%E4%BA%BA%E4%BC%A4%23) `83.6K 🔥` `+66%`
1. [3月起一批国家标准开始实施 (A number of national standards will be implemented starting from March)](https://s.weibo.com/weibo?q=%233%E6%9C%88%E8%B5%B7%E4%B8%80%E6%89%B9%E5%9B%BD%E5%AE%B6%E6%A0%87%E5%87%86%E5%BC%80%E5%A7%8B%E5%AE%9E%E6%96%BD%23) `616.0K 🔥`
1. [伊朗发射法塔赫高超音速导弹 (Iran launches Fatah hypersonic missile)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E5%B0%84%E6%B3%95%E5%A1%94%E8%B5%AB%E9%AB%98%E8%B6%85%E9%9F%B3%E9%80%9F%E5%AF%BC%E5%BC%B9%23) `555.5K 🔥`
1. [中东这场仗越打越大了 (The war in the Middle East is getting bigger and bigger)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%B8%9C%E8%BF%99%E5%9C%BA%E4%BB%97%E8%B6%8A%E6%89%93%E8%B6%8A%E5%A4%A7%E4%BA%86%23) `125.4K 🔥`
1. [宋茜佐川眼镜全球代言人 (Song Qian Sagawa glasses global spokesperson)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E8%8C%9C%E4%BD%90%E5%B7%9D%E7%9C%BC%E9%95%9C%E5%85%A8%E7%90%83%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `125.4K 🔥`
1. [金价](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `125.4K 🔥`
1. [椰树广告 擦边](https://s.weibo.com/weibo?q=%23%E6%A4%B0%E6%A0%91%E5%B9%BF%E5%91%8A%20%E6%93%A6%E8%BE%B9%23) `112.4K 🔥`
1. [伊朗总统之子发声 (The son of the Iranian president speaks out)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E4%B9%8B%E5%AD%90%E5%8F%91%E5%A3%B0%23) `111.4K 🔥`
1. [伊朗拥有中东最大弹道导弹库存 (Iran has the largest ballistic missile inventory in the Middle East)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8B%A5%E6%9C%89%E4%B8%AD%E4%B8%9C%E6%9C%80%E5%A4%A7%E5%BC%B9%E9%81%93%E5%AF%BC%E5%BC%B9%E5%BA%93%E5%AD%98%23) `104.8K 🔥`
1. [母亲回应18岁女儿感染多种高危HPV (Mother responds to 18-year-old daughter’s infection with multiple high-risk HPVs)](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E5%9B%9E%E5%BA%9418%E5%B2%81%E5%A5%B3%E5%84%BF%E6%84%9F%E6%9F%93%E5%A4%9A%E7%A7%8D%E9%AB%98%E5%8D%B1HPV%23) `99.6K 🔥`
1. [伊朗称导弹击中美军舰](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%AF%BC%E5%BC%B9%E5%87%BB%E4%B8%AD%E7%BE%8E%E5%86%9B%E8%88%B0%23) `95.7K 🔥`
1. [伊朗禁止船只通行霍尔木兹海峡 (Iran bans ships from passing through Strait of Hormuz)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A6%81%E6%AD%A2%E8%88%B9%E5%8F%AA%E9%80%9A%E8%A1%8C%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%23) `94.5K 🔥`
1. [伊朗退了一步炮火进了一步 (Iran took a step back and advanced its artillery fire)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%80%80%E4%BA%86%E4%B8%80%E6%AD%A5%E7%82%AE%E7%81%AB%E8%BF%9B%E4%BA%86%E4%B8%80%E6%AD%A5%23) `91.7K 🔥`
1. [安理会应中俄要求紧急开会 (The Security Council held an emergency meeting at the request of China and Russia)](https://s.weibo.com/weibo?q=%23%E5%AE%89%E7%90%86%E4%BC%9A%E5%BA%94%E4%B8%AD%E4%BF%84%E8%A6%81%E6%B1%82%E7%B4%A7%E6%80%A5%E5%BC%80%E4%BC%9A%23) `90.5K 🔥`
1. [俄罗斯对美以袭击伊朗表态 (Russia expresses its stance on US-Israeli attack on Iran)](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E5%AF%B9%E7%BE%8E%E4%BB%A5%E8%A2%AD%E5%87%BB%E4%BC%8A%E6%9C%97%E8%A1%A8%E6%80%81%23) `84.1K 🔥`
1. [为什么中国人把这么多钱花在吃上 (Why do Chinese people spend so much money on food?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%8A%8A%E8%BF%99%E4%B9%88%E5%A4%9A%E9%92%B1%E8%8A%B1%E5%9C%A8%E5%90%83%E4%B8%8A%23) `125.4K 🔥` `-84%`
1. [小米发布会 (Xiaomi press conference)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%8F%91%E5%B8%83%E4%BC%9A%23) `125.4K 🔥` `-78%`
1. [玫瑰丛生 (rose bush)](https://s.weibo.com/weibo?q=%23%E7%8E%AB%E7%91%B0%E4%B8%9B%E7%94%9F%23) `125.4K 🔥` `-72%`
1. [小米超跑亮相 (Xiaomi supercar unveiled)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E8%B6%85%E8%B7%91%E4%BA%AE%E7%9B%B8%23) `125.4K 🔥` `-76%`
1. [五粮液](https://s.weibo.com/weibo?q=%23%E4%BA%94%E7%B2%AE%E6%B6%B2%23) `125.4K 🔥` `-62%`
1. [哈梅内伊 (Khamenei)](https://s.weibo.com/weibo?q=%23%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%23) `125.4K 🔥` `-40%`
1. [特朗普称哈梅内伊已死 (Trump says Khamenei is dead)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E5%B7%B2%E6%AD%BB%23) `125.4K 🔥` `-93%`
1. [小米滑板车 (Xiaomi scooter)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BB%91%E6%9D%BF%E8%BD%A6%23) `84.1K 🔥` `-68%`

Updated at 2026-03-01 07:54:55

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
