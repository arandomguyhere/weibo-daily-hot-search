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

1. [法国vs塞内加尔 (France vs Senegal)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BDvs%E5%A1%9E%E5%86%85%E5%8A%A0%E5%B0%94%23) `758.2K 🔥` `NEW`
1. [法国阵容 豪华](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E9%98%B5%E5%AE%B9%20%E8%B1%AA%E5%8D%8E%23) `194.5K 🔥` `NEW`
1. [京东明星红包最后一波6180元](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E6%98%8E%E6%98%9F%E7%BA%A2%E5%8C%85%E6%9C%80%E5%90%8E%E4%B8%80%E6%B3%A26180%E5%85%83%23) `138.2K 🔥` `NEW`
1. [裁判尺度](https://s.weibo.com/weibo?q=%23%E8%A3%81%E5%88%A4%E5%B0%BA%E5%BA%A6%23) `128.8K 🔥` `NEW`
1. [塞内加尔中柱](https://s.weibo.com/weibo?q=%23%E5%A1%9E%E5%86%85%E5%8A%A0%E5%B0%94%E4%B8%AD%E6%9F%B1%23) `48.6K 🔥` `NEW`
1. [姆巴佩还没睡醒吗](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E8%BF%98%E6%B2%A1%E7%9D%A1%E9%86%92%E5%90%97%23) `42.5K 🔥` `NEW`
1. [小狗之心度猫子之腹](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E4%B9%8B%E5%BF%83%E5%BA%A6%E7%8C%AB%E5%AD%90%E4%B9%8B%E8%85%B9%23) `42.3K 🔥` `NEW`
1. [这就是我的冰饮人生观](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B0%B1%E6%98%AF%E6%88%91%E7%9A%84%E5%86%B0%E9%A5%AE%E4%BA%BA%E7%94%9F%E8%A7%82%23) `42.0K 🔥` `NEW`
1. [王鹤棣是黄子韬演唱会嘉宾](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%98%AF%E9%BB%84%E5%AD%90%E9%9F%AC%E6%BC%94%E5%94%B1%E4%BC%9A%E5%98%89%E5%AE%BE%23) `41.9K 🔥` `NEW`
1. [莫离](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%23) `41.6K 🔥` `NEW`
1. [追星治好了我的精神内耗 (Chasing stars cured my mental internal friction)](https://s.weibo.com/weibo?q=%23%E8%BF%BD%E6%98%9F%E6%B2%BB%E5%A5%BD%E4%BA%86%E6%88%91%E7%9A%84%E7%B2%BE%E7%A5%9E%E5%86%85%E8%80%97%23) `41.5K 🔥` `NEW`
1. [画主被安排当托不慎拍下自己的画](https://s.weibo.com/weibo?q=%23%E7%94%BB%E4%B8%BB%E8%A2%AB%E5%AE%89%E6%8E%92%E5%BD%93%E6%89%98%E4%B8%8D%E6%85%8E%E6%8B%8D%E4%B8%8B%E8%87%AA%E5%B7%B1%E7%9A%84%E7%94%BB%23) `41.2K 🔥` `NEW`
1. [前5个月国民经济延续向新向优发展态势](https://s.weibo.com/weibo?q=%23%E5%89%8D5%E4%B8%AA%E6%9C%88%E5%9B%BD%E6%B0%91%E7%BB%8F%E6%B5%8E%E5%BB%B6%E7%BB%AD%E5%90%91%E6%96%B0%E5%90%91%E4%BC%98%E5%8F%91%E5%B1%95%E6%80%81%E5%8A%BF%23) `141.3K 🔥` `-65%`
1. [现在知道短剧滤镜有多吓人了吧 (Now you know how scary the skit filter is)](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9F%A5%E9%81%93%E7%9F%AD%E5%89%A7%E6%BB%A4%E9%95%9C%E6%9C%89%E5%A4%9A%E5%90%93%E4%BA%BA%E4%BA%86%E5%90%A7%23) `123.2K 🔥` `-84%`
1. [丁禹兮为剧宣取关张新成](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E4%B8%BA%E5%89%A7%E5%AE%A3%E5%8F%96%E5%85%B3%E5%BC%A0%E6%96%B0%E6%88%90%23) `91.0K 🔥` `-76%`
1. [曝电梯坠亡监控缺失](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%94%B5%E6%A2%AF%E5%9D%A0%E4%BA%A1%E7%9B%91%E6%8E%A7%E7%BC%BA%E5%A4%B1%23) `60.1K 🔥` `-82%`
1. [首尔电视剧大赏中国明星Top10](https://s.weibo.com/weibo?q=%23%E9%A6%96%E5%B0%94%E7%94%B5%E8%A7%86%E5%89%A7%E5%A4%A7%E8%B5%8F%E4%B8%AD%E5%9B%BD%E6%98%8E%E6%98%9FTop10%23) `59.2K 🔥` `-55%`
1. [两句毫不相干的诗放一起天衣无缝 (Two unrelated poems go together seamlessly)](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%8F%A5%E6%AF%AB%E4%B8%8D%E7%9B%B8%E5%B9%B2%E7%9A%84%E8%AF%97%E6%94%BE%E4%B8%80%E8%B5%B7%E5%A4%A9%E8%A1%A3%E6%97%A0%E7%BC%9D%23) `42.6K 🔥` `-69%`
1. [26岁游戏代练被母亲骗进戒网瘾机构](https://s.weibo.com/weibo?q=%2326%E5%B2%81%E6%B8%B8%E6%88%8F%E4%BB%A3%E7%BB%83%E8%A2%AB%E6%AF%8D%E4%BA%B2%E9%AA%97%E8%BF%9B%E6%88%92%E7%BD%91%E7%98%BE%E6%9C%BA%E6%9E%84%23) `42.5K 🔥` `-92%`
1. [王冰冰足球照](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%86%B0%E5%86%B0%E8%B6%B3%E7%90%83%E7%85%A7%23) `42.3K 🔥` `-80%`
1. [一个人在家洗澡千万不要锁门](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E4%BA%BA%E5%9C%A8%E5%AE%B6%E6%B4%97%E6%BE%A1%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E9%94%81%E9%97%A8%23) `42.3K 🔥` `-72%`
1. [梅西发微博](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%A5%BF%E5%8F%91%E5%BE%AE%E5%8D%9A%23) `42.2K 🔥` `-67%`
1. [内娱女演员什么时候高跟鞋自由 (When will domestic entertainment actresses be free to wear high heels?)](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E5%A5%B3%E6%BC%94%E5%91%98%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E9%AB%98%E8%B7%9F%E9%9E%8B%E8%87%AA%E7%94%B1%23) `42.2K 🔥` `-71%`
1. [张凌赫亚洲明星奖得票断层第一 (Zhang Linghe won the first place in the Asian Star Award)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%BA%9A%E6%B4%B2%E6%98%8E%E6%98%9F%E5%A5%96%E5%BE%97%E7%A5%A8%E6%96%AD%E5%B1%82%E7%AC%AC%E4%B8%80%23) `42.1K 🔥` `-66%`
1. [接连施暴发小男生母亲为跨区民警](https://s.weibo.com/weibo?q=%23%E6%8E%A5%E8%BF%9E%E6%96%BD%E6%9A%B4%E5%8F%91%E5%B0%8F%E7%94%B7%E7%94%9F%E6%AF%8D%E4%BA%B2%E4%B8%BA%E8%B7%A8%E5%8C%BA%E6%B0%91%E8%AD%A6%23) `42.1K 🔥` `-65%`
1. [何炅维嘉搞得人也心酸酸的](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E7%BB%B4%E5%98%89%E6%90%9E%E5%BE%97%E4%BA%BA%E4%B9%9F%E5%BF%83%E9%85%B8%E9%85%B8%E7%9A%84%23) `42.1K 🔥` `-67%`
1. [100万存1年利息不到1万](https://s.weibo.com/weibo?q=%23100%E4%B8%87%E5%AD%981%E5%B9%B4%E5%88%A9%E6%81%AF%E4%B8%8D%E5%88%B01%E4%B8%87%23) `42.1K 🔥` `-66%`
1. [这三类运动猝死风险更高](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%89%E7%B1%BB%E8%BF%90%E5%8A%A8%E7%8C%9D%E6%AD%BB%E9%A3%8E%E9%99%A9%E6%9B%B4%E9%AB%98%23) `42.0K 🔥` `-65%`
1. [日本网友称日本男子很少做家务](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%BD%91%E5%8F%8B%E7%A7%B0%E6%97%A5%E6%9C%AC%E7%94%B7%E5%AD%90%E5%BE%88%E5%B0%91%E5%81%9A%E5%AE%B6%E5%8A%A1%23) `42.0K 🔥` `-66%`
1. [王俊凯新专辑](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%96%B0%E4%B8%93%E8%BE%91%23) `41.9K 🔥` `-67%`
1. [第一部遵守广电新规的剧出现了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E9%83%A8%E9%81%B5%E5%AE%88%E5%B9%BF%E7%94%B5%E6%96%B0%E8%A7%84%E7%9A%84%E5%89%A7%E5%87%BA%E7%8E%B0%E4%BA%86%23) `41.8K 🔥` `-65%`
1. [哈登被捕后照片](https://s.weibo.com/weibo?q=%23%E5%93%88%E7%99%BB%E8%A2%AB%E6%8D%95%E5%90%8E%E7%85%A7%E7%89%87%23) `41.8K 🔥` `-69%`
1. [张凌赫半年还没从沈梦辰心里走出来 (Zhang Linghe hasn't come out of Shen Mengchen's heart for half a year)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%8D%8A%E5%B9%B4%E8%BF%98%E6%B2%A1%E4%BB%8E%E6%B2%88%E6%A2%A6%E8%BE%B0%E5%BF%83%E9%87%8C%E8%B5%B0%E5%87%BA%E6%9D%A5%23) `41.8K 🔥` `-65%`
1. [中国地震局已启动三级应急响应](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%9C%B0%E9%9C%87%E5%B1%80%E5%B7%B2%E5%90%AF%E5%8A%A8%E4%B8%89%E7%BA%A7%E5%BA%94%E6%80%A5%E5%93%8D%E5%BA%94%23) `41.8K 🔥` `-65%`
1. [果汁龙头拟跨界PCB (Juice faucet plans to cross-border PCB)](https://s.weibo.com/weibo?q=%23%E6%9E%9C%E6%B1%81%E9%BE%99%E5%A4%B4%E6%8B%9F%E8%B7%A8%E7%95%8CPCB%23) `41.7K 🔥` `-65%`
1. [雷军回应雷军同款](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94%E9%9B%B7%E5%86%9B%E5%90%8C%E6%AC%BE%23) `41.7K 🔥` `-71%`
1. [梅西姆巴佩哈兰德同一天登场](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%A5%BF%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%93%88%E5%85%B0%E5%BE%B7%E5%90%8C%E4%B8%80%E5%A4%A9%E7%99%BB%E5%9C%BA%23) `41.7K 🔥` `-65%`
1. [SpaceX大涨](https://s.weibo.com/weibo?q=%23SpaceX%E5%A4%A7%E6%B6%A8%23) `41.6K 🔥` `-65%`
1. [女子被困电梯救援时坠落身亡](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A2%AB%E5%9B%B0%E7%94%B5%E6%A2%AF%E6%95%91%E6%8F%B4%E6%97%B6%E5%9D%A0%E8%90%BD%E8%BA%AB%E4%BA%A1%23) `41.6K 🔥` `-65%`
1. [周柯宇演技](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9F%AF%E5%AE%87%E6%BC%94%E6%8A%80%23) `41.5K 🔥` `-67%`
1. [许嵩 洛阳纸](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%B5%A9%20%E6%B4%9B%E9%98%B3%E7%BA%B8%23) `41.5K 🔥` `-68%`
1. [佛得角门将说不让进就不让进](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%E8%AF%B4%E4%B8%8D%E8%AE%A9%E8%BF%9B%E5%B0%B1%E4%B8%8D%E8%AE%A9%E8%BF%9B%23) `41.5K 🔥` `-65%`
1. [过度用眼要学会暴力恢复](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%BA%A6%E7%94%A8%E7%9C%BC%E8%A6%81%E5%AD%A6%E4%BC%9A%E6%9A%B4%E5%8A%9B%E6%81%A2%E5%A4%8D%23) `41.4K 🔥` `-65%`
1. [深圳暴雨一饭店楼梯变瀑布](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E6%9A%B4%E9%9B%A8%E4%B8%80%E9%A5%AD%E5%BA%97%E6%A5%BC%E6%A2%AF%E5%8F%98%E7%80%91%E5%B8%83%23) `41.4K 🔥` `-65%`
1. [有人赌西班牙不会获胜赢470万美元 (Man wins $4.7 million betting Spain won't win)](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%BA%E8%B5%8C%E8%A5%BF%E7%8F%AD%E7%89%99%E4%B8%8D%E4%BC%9A%E8%8E%B7%E8%83%9C%E8%B5%A2470%E4%B8%87%E7%BE%8E%E5%85%83%23) `41.4K 🔥` `-65%`
1. [特朗普称没有美国以色列早不存在了](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E6%B2%A1%E6%9C%89%E7%BE%8E%E5%9B%BD%E4%BB%A5%E8%89%B2%E5%88%97%E6%97%A9%E4%B8%8D%E5%AD%98%E5%9C%A8%E4%BA%86%23) `41.3K 🔥` `-65%`
1. [小姑娘兼职模特被商家骂颜值诈骗](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%A7%91%E5%A8%98%E5%85%BC%E8%81%8C%E6%A8%A1%E7%89%B9%E8%A2%AB%E5%95%86%E5%AE%B6%E9%AA%82%E9%A2%9C%E5%80%BC%E8%AF%88%E9%AA%97%23) `41.3K 🔥` `-65%`
1. [XLG败者组对阵LEV](https://s.weibo.com/weibo?q=%23XLG%E8%B4%A5%E8%80%85%E7%BB%84%E5%AF%B9%E9%98%B5LEV%23) `41.3K 🔥` `-65%`
1. [伊朗队被勒令离开美国](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%98%9F%E8%A2%AB%E5%8B%92%E4%BB%A4%E7%A6%BB%E5%BC%80%E7%BE%8E%E5%9B%BD%23) `41.2K 🔥` `-66%`
1. [AI时代的稀缺能力](https://s.weibo.com/weibo?q=%23AI%E6%97%B6%E4%BB%A3%E7%9A%84%E7%A8%80%E7%BC%BA%E8%83%BD%E5%8A%9B%23) `41.2K 🔥` `-65%`
1. [DeepSeek首轮融资梁文锋出资200亿](https://s.weibo.com/weibo?q=%23DeepSeek%E9%A6%96%E8%BD%AE%E8%9E%8D%E8%B5%84%E6%A2%81%E6%96%87%E9%94%8B%E5%87%BA%E8%B5%84200%E4%BA%BF%23) `41.1K 🔥` `-67%`

Updated at 2026-06-17 04:26:41

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
