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

1. [何猷君奚梦瑶婚礼欢迎晚宴 (Welcome dinner for He Youjun and Xi Mengyao's wedding)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%8C%B7%E5%90%9B%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%A9%9A%E7%A4%BC%E6%AC%A2%E8%BF%8E%E6%99%9A%E5%AE%B4%23) `220.2K 🔥` `NEW`
1. [儿童节](https://s.weibo.com/weibo?q=%23%E5%84%BF%E7%AB%A5%E8%8A%82%23) `218.7K 🔥` `NEW`
1. [樊振东十全十美收官](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%8D%81%E5%85%A8%E5%8D%81%E7%BE%8E%E6%94%B6%E5%AE%98%23) `214.6K 🔥` `NEW`
1. [丞磊给白鹿拍照没开镜头盖](https://s.weibo.com/weibo?q=%23%E4%B8%9E%E7%A3%8A%E7%BB%99%E7%99%BD%E9%B9%BF%E6%8B%8D%E7%85%A7%E6%B2%A1%E5%BC%80%E9%95%9C%E5%A4%B4%E7%9B%96%23) `201.1K 🔥` `NEW`
1. [樊振东3比2贾哈](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C3%E6%AF%942%E8%B4%BE%E5%93%88%23) `200.6K 🔥` `NEW`
1. [法网2026](https://s.weibo.com/weibo?q=%23%E6%B3%95%E7%BD%912026%23) `197.3K 🔥` `NEW`
1. [杨博文16岁发文](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%8D%9A%E6%96%8716%E5%B2%81%E5%8F%91%E6%96%87%23) `195.4K 🔥` `NEW`
1. [智商决定收入在这一刻具象化了](https://s.weibo.com/weibo?q=%23%E6%99%BA%E5%95%86%E5%86%B3%E5%AE%9A%E6%94%B6%E5%85%A5%E5%9C%A8%E8%BF%99%E4%B8%80%E5%88%BB%E5%85%B7%E8%B1%A1%E5%8C%96%E4%BA%86%23) `193.7K 🔥` `NEW`
1. [陈妍希说谢霆锋也太帅了](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E8%AF%B4%E8%B0%A2%E9%9C%86%E9%94%8B%E4%B9%9F%E5%A4%AA%E5%B8%85%E4%BA%86%23) `193.2K 🔥` `NEW`
1. [疑似王安宇自己找的路演观众](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E7%8E%8B%E5%AE%89%E5%AE%87%E8%87%AA%E5%B7%B1%E6%89%BE%E7%9A%84%E8%B7%AF%E6%BC%94%E8%A7%82%E4%BC%97%23) `191.5K 🔥` `NEW`
1. [成毅沉迷下象棋 (Cheng Yi is addicted to playing chess)](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E6%B2%89%E8%BF%B7%E4%B8%8B%E8%B1%A1%E6%A3%8B%23) `188.1K 🔥` `NEW`
1. [萨尔布吕肯回应三冠王](https://s.weibo.com/weibo?q=%23%E8%90%A8%E5%B0%94%E5%B8%83%E5%90%95%E8%82%AF%E5%9B%9E%E5%BA%94%E4%B8%89%E5%86%A0%E7%8E%8B%23) `180.1K 🔥` `NEW`
1. [天涯神帖 (Tianya Shentie)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B6%AF%E7%A5%9E%E5%B8%96%23) `3.0M 🔥` `+176%`
1. [日本拥抱印度](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%8B%A5%E6%8A%B1%E5%8D%B0%E5%BA%A6%23) `990.2K 🔥` `+119%`
1. [城事日记津彩有你](https://s.weibo.com/weibo?q=%23%E5%9F%8E%E4%BA%8B%E6%97%A5%E8%AE%B0%E6%B4%A5%E5%BD%A9%E6%9C%89%E4%BD%A0%23) `781.3K 🔥` `+129%`
1. [华为nova16及全场景新品发布 (Huawei nova16 and new products released in all scenarios)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAnova16%E5%8F%8A%E5%85%A8%E5%9C%BA%E6%99%AF%E6%96%B0%E5%93%81%E5%8F%91%E5%B8%83%23) `625.6K 🔥` `+644%`
1. [天涯社区曾2次重启失败](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B6%AF%E7%A4%BE%E5%8C%BA%E6%9B%BE2%E6%AC%A1%E9%87%8D%E5%90%AF%E5%A4%B1%E8%B4%A5%23) `562.0K 🔥` `+588%`
1. [这才是六一该办的活动](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%89%8D%E6%98%AF%E5%85%AD%E4%B8%80%E8%AF%A5%E5%8A%9E%E7%9A%84%E6%B4%BB%E5%8A%A8%23) `406.1K 🔥` `+642%`
1. [央视曝光劣质驱蚊产品](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E5%8A%A3%E8%B4%A8%E9%A9%B1%E8%9A%8A%E4%BA%A7%E5%93%81%23) `301.9K 🔥` `+122%`
1. [樊振东德甲夺冠 (Fan Zhendong wins Bundesliga title)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%BE%B7%E7%94%B2%E5%A4%BA%E5%86%A0%23) `274.7K 🔥` `+94%`
1. [日系车溃败 (Japanese cars collapse)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E7%B3%BB%E8%BD%A6%E6%BA%83%E8%B4%A5%23) `272.8K 🔥` `+194%`
1. [窦骁 咱娥今天可太美啦](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%AA%81%20%E5%92%B1%E5%A8%A5%E4%BB%8A%E5%A4%A9%E5%8F%AF%E5%A4%AA%E7%BE%8E%E5%95%A6%23) `223.4K 🔥` `+122%`
1. [周深又被攻击了 (Zhou Shen was attacked again)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E5%8F%88%E8%A2%AB%E6%94%BB%E5%87%BB%E4%BA%86%23) `222.5K 🔥` `+514%`
1. [多名艺人辞演后特朗普决定自己上台](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%90%8D%E8%89%BA%E4%BA%BA%E8%BE%9E%E6%BC%94%E5%90%8E%E7%89%B9%E6%9C%97%E6%99%AE%E5%86%B3%E5%AE%9A%E8%87%AA%E5%B7%B1%E4%B8%8A%E5%8F%B0%23) `221.7K 🔥` `+67%`
1. [网红边牧锄头主人拒绝和解 (Internet celebrity Bianmu hoe owner refuses to reconcile)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E8%BE%B9%E7%89%A7%E9%94%84%E5%A4%B4%E4%B8%BB%E4%BA%BA%E6%8B%92%E7%BB%9D%E5%92%8C%E8%A7%A3%23) `217.8K 🔥` `+170%`
1. [泥人村干部被卷走监控曝光](https://s.weibo.com/weibo?q=%23%E6%B3%A5%E4%BA%BA%E6%9D%91%E5%B9%B2%E9%83%A8%E8%A2%AB%E5%8D%B7%E8%B5%B0%E7%9B%91%E6%8E%A7%E6%9B%9D%E5%85%89%23) `216.0K 🔥` `+169%`
1. [报告称孩子越多平均养育成本越低 (Report says the more children, the lower the average cost of raising children)](https://s.weibo.com/weibo?q=%23%E6%8A%A5%E5%91%8A%E7%A7%B0%E5%AD%A9%E5%AD%90%E8%B6%8A%E5%A4%9A%E5%B9%B3%E5%9D%87%E5%85%BB%E8%82%B2%E6%88%90%E6%9C%AC%E8%B6%8A%E4%BD%8E%23) `212.1K 🔥` `+223%`
1. [天天吃鸡蛋和很少吃鸡蛋谁更健康 (Who is healthier, eating eggs every day or rarely eating eggs?)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%A4%A9%E5%90%83%E9%B8%A1%E8%9B%8B%E5%92%8C%E5%BE%88%E5%B0%91%E5%90%83%E9%B8%A1%E8%9B%8B%E8%B0%81%E6%9B%B4%E5%81%A5%E5%BA%B7%23) `210.6K 🔥` `+281%`
1. [二次元不是软色情遮羞布](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E6%AC%A1%E5%85%83%E4%B8%8D%E6%98%AF%E8%BD%AF%E8%89%B2%E6%83%85%E9%81%AE%E7%BE%9E%E5%B8%83%23) `210.5K 🔥` `+166%`
1. [拉丁舞爆火裁判一个月跳瘦8斤](https://s.weibo.com/weibo?q=%23%E6%8B%89%E4%B8%81%E8%88%9E%E7%88%86%E7%81%AB%E8%A3%81%E5%88%A4%E4%B8%80%E4%B8%AA%E6%9C%88%E8%B7%B3%E7%98%A68%E6%96%A4%23) `209.4K 🔥` `+170%`
1. [关晓彤李昀锐耀眼冰箱吻 (Guan Xiaotong and Li Yunrui's dazzling refrigerator kiss)](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E6%9D%8E%E6%98%80%E9%94%90%E8%80%80%E7%9C%BC%E5%86%B0%E7%AE%B1%E5%90%BB%23) `208.2K 🔥` `+279%`
1. [女子住酒店半夜遭陌生男子站床头](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BD%8F%E9%85%92%E5%BA%97%E5%8D%8A%E5%A4%9C%E9%81%AD%E9%99%8C%E7%94%9F%E7%94%B7%E5%AD%90%E7%AB%99%E5%BA%8A%E5%A4%B4%23) `206.5K 🔥` `+159%`
1. [天涯社区将正式恢复访问](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B6%AF%E7%A4%BE%E5%8C%BA%E5%B0%86%E6%AD%A3%E5%BC%8F%E6%81%A2%E5%A4%8D%E8%AE%BF%E9%97%AE%23) `205.5K 🔥` `+150%`
1. [夏美 王洋洋](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E7%BE%8E%20%E7%8E%8B%E6%B4%8B%E6%B4%8B%23) `204.5K 🔥` `+56%`
1. [白鹿换头像过六一](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%8D%A2%E5%A4%B4%E5%83%8F%E8%BF%87%E5%85%AD%E4%B8%80%23) `203.2K 🔥` `+36%`
1. [其实补气血真的很简单](https://s.weibo.com/weibo?q=%23%E5%85%B6%E5%AE%9E%E8%A1%A5%E6%B0%94%E8%A1%80%E7%9C%9F%E7%9A%84%E5%BE%88%E7%AE%80%E5%8D%95%23) `202.8K 🔥` `+269%`
1. [哈尔滨突发沙尘暴市民称有点像世界末日](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B0%94%E6%BB%A8%E7%AA%81%E5%8F%91%E6%B2%99%E5%B0%98%E6%9A%B4%E5%B8%82%E6%B0%91%E7%A7%B0%E6%9C%89%E7%82%B9%E5%83%8F%E4%B8%96%E7%95%8C%E6%9C%AB%E6%97%A5%23) `199.0K 🔥` `+259%`
1. [新疆人未来一个月菜品](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%96%86%E4%BA%BA%E6%9C%AA%E6%9D%A5%E4%B8%80%E4%B8%AA%E6%9C%88%E8%8F%9C%E5%93%81%23) `198.6K 🔥` `+130%`
1. [孙杨 下沉市场口碑反转 (Sun Yang's sinking market reputation reverses)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%20%E4%B8%8B%E6%B2%89%E5%B8%82%E5%9C%BA%E5%8F%A3%E7%A2%91%E5%8F%8D%E8%BD%AC%23) `190.9K 🔥` `+145%`
1. [关晓彤演技 (Guan Xiaotong's acting skills)](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E6%BC%94%E6%8A%80%23) `190.2K 🔥` `+354%`
1. [被女主播开播前的调试震惊到了 (I was shocked by the female anchor’s debugging before the broadcast.)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%A5%B3%E4%B8%BB%E6%92%AD%E5%BC%80%E6%92%AD%E5%89%8D%E7%9A%84%E8%B0%83%E8%AF%95%E9%9C%87%E6%83%8A%E5%88%B0%E4%BA%86%23) `188.4K 🔥` `+328%`
1. [忆秦娥婚后 (Recalling Qin'e's marriage)](https://s.weibo.com/weibo?q=%23%E5%BF%86%E7%A7%A6%E5%A8%A5%E5%A9%9A%E5%90%8E%23) `186.9K 🔥` `+323%`
1. [哈尔滨沙尘暴](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B0%94%E6%BB%A8%E6%B2%99%E5%B0%98%E6%9A%B4%23) `186.0K 🔥` `+468%`
1. [在柬遇害中国地产商妻子发声 (Wife of Chinese real estate developer murdered in Cambodia speaks out)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E6%9F%AC%E9%81%87%E5%AE%B3%E4%B8%AD%E5%9B%BD%E5%9C%B0%E4%BA%A7%E5%95%86%E5%A6%BB%E5%AD%90%E5%8F%91%E5%A3%B0%23) `183.6K 🔥` `+377%`
1. [电视剧耀眼 (Dazzling TV series)](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%A7%86%E5%89%A7%E8%80%80%E7%9C%BC%23) `182.1K 🔥` `+136%`
1. [万花世界 鞠婧祎戏份 (World of Flowers Ju Jingyi scenes)](https://s.weibo.com/weibo?q=%23%E4%B8%87%E8%8A%B1%E4%B8%96%E7%95%8C%20%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%88%8F%E4%BB%BD%23) `181.5K 🔥` `+345%`
1. [王鹤棣直播感谢粉丝 (Wang Hedi thanked fans during live broadcast)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E7%9B%B4%E6%92%AD%E6%84%9F%E8%B0%A2%E7%B2%89%E4%B8%9D%23) `219.8K 🔥`
1. [曝85花七折捡漏代言 (It is revealed that 85 people spent 30% off to pick up endorsement deals)](https://s.weibo.com/weibo?q=%23%E6%9B%9D85%E8%8A%B1%E4%B8%83%E6%8A%98%E6%8D%A1%E6%BC%8F%E4%BB%A3%E8%A8%80%23) `215.1K 🔥`
1. [陈妍希开放自家给谢楠当舞蹈室](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E5%BC%80%E6%94%BE%E8%87%AA%E5%AE%B6%E7%BB%99%E8%B0%A2%E6%A5%A0%E5%BD%93%E8%88%9E%E8%B9%88%E5%AE%A4%23) `212.9K 🔥`
1. [张凌赫线下活动取消目击者发声 (Zhang Linghe’s offline event canceled, witnesses speak out)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%BA%BF%E4%B8%8B%E6%B4%BB%E5%8A%A8%E5%8F%96%E6%B6%88%E7%9B%AE%E5%87%BB%E8%80%85%E5%8F%91%E5%A3%B0%23) `196.0K 🔥`
1. [马嘉祺拍立得废片 (Ma Jiaqi's useless Polaroid film)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E6%8B%8D%E7%AB%8B%E5%BE%97%E5%BA%9F%E7%89%87%23) `183.9K 🔥`

Updated at 2026-06-01 07:41:41

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
