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

1. [天涯社区 (Tianya Community)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B6%AF%E7%A4%BE%E5%8C%BA%23) `1.3M 🔥` `NEW`
1. [全国少先队员共1.12亿名](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E5%B0%91%E5%85%88%E9%98%9F%E5%91%98%E5%85%B11.12%E4%BA%BF%E5%90%8D%23) `806.2K 🔥` `NEW`
1. [好多明星去看了谢霆锋演唱会](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A4%9A%E6%98%8E%E6%98%9F%E5%8E%BB%E7%9C%8B%E4%BA%86%E8%B0%A2%E9%9C%86%E9%94%8B%E6%BC%94%E5%94%B1%E4%BC%9A%23) `722.9K 🔥` `NEW`
1. [哈尔滨大风过山车停摆倒挂半空](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B0%94%E6%BB%A8%E5%A4%A7%E9%A3%8E%E8%BF%87%E5%B1%B1%E8%BD%A6%E5%81%9C%E6%91%86%E5%80%92%E6%8C%82%E5%8D%8A%E7%A9%BA%23) `278.4K 🔥` `NEW`
1. [樊振东回应三冠王](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%9B%9E%E5%BA%94%E4%B8%89%E5%86%A0%E7%8E%8B%23) `250.9K 🔥` `NEW`
1. [万花世界4个原主每人不超过3分钟](https://s.weibo.com/weibo?q=%23%E4%B8%87%E8%8A%B1%E4%B8%96%E7%95%8C4%E4%B8%AA%E5%8E%9F%E4%B8%BB%E6%AF%8F%E4%BA%BA%E4%B8%8D%E8%B6%85%E8%BF%873%E5%88%86%E9%92%9F%23) `250.5K 🔥` `NEW`
1. [边牧被偷后宰杀主人痛哭拒绝和解](https://s.weibo.com/weibo?q=%23%E8%BE%B9%E7%89%A7%E8%A2%AB%E5%81%B7%E5%90%8E%E5%AE%B0%E6%9D%80%E4%B8%BB%E4%BA%BA%E7%97%9B%E5%93%AD%E6%8B%92%E7%BB%9D%E5%92%8C%E8%A7%A3%23) `247.6K 🔥` `NEW`
1. [刘亦菲刘诗诗 代言](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%88%98%E8%AF%97%E8%AF%97%20%E4%BB%A3%E8%A8%80%23) `246.9K 🔥` `NEW`
1. [白鹿喝中药调理身体和睡眠](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%96%9D%E4%B8%AD%E8%8D%AF%E8%B0%83%E7%90%86%E8%BA%AB%E4%BD%93%E5%92%8C%E7%9D%A1%E7%9C%A0%23) `245.3K 🔥` `NEW`
1. [58岁走红拉丁裁判紧绷了45年](https://s.weibo.com/weibo?q=%2358%E5%B2%81%E8%B5%B0%E7%BA%A2%E6%8B%89%E4%B8%81%E8%A3%81%E5%88%A4%E7%B4%A7%E7%BB%B7%E4%BA%8645%E5%B9%B4%23) `244.3K 🔥` `NEW`
1. [存储器价格暴涨近1000%原因 (Reasons why memory prices skyrocketed by nearly 1,000%)](https://s.weibo.com/weibo?q=%23%E5%AD%98%E5%82%A8%E5%99%A8%E4%BB%B7%E6%A0%BC%E6%9A%B4%E6%B6%A8%E8%BF%911000%25%E5%8E%9F%E5%9B%A0%23) `242.7K 🔥` `NEW`
1. [天涯社区发长文](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B6%AF%E7%A4%BE%E5%8C%BA%E5%8F%91%E9%95%BF%E6%96%87%23) `241.8K 🔥` `NEW`
1. [张峻豪在二手平台卖衣服](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B3%BB%E8%B1%AA%E5%9C%A8%E4%BA%8C%E6%89%8B%E5%B9%B3%E5%8F%B0%E5%8D%96%E8%A1%A3%E6%9C%8D%23) `241.4K 🔥` `NEW`
1. [爱情公寓2026迎来了NPC宣发期](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%932026%E8%BF%8E%E6%9D%A5%E4%BA%86NPC%E5%AE%A3%E5%8F%91%E6%9C%9F%23) `240.2K 🔥` `NEW`
1. [张雪安慰德比斯](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%AE%89%E6%85%B0%E5%BE%B7%E6%AF%94%E6%96%AF%23) `238.4K 🔥` `NEW`
1. [谷爱凌奚梦瑶婚礼晚宴合照](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%A9%9A%E7%A4%BC%E6%99%9A%E5%AE%B4%E5%90%88%E7%85%A7%23) `235.7K 🔥` `NEW`
1. [男子手机丢失献血时顺走护士手机](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%89%8B%E6%9C%BA%E4%B8%A2%E5%A4%B1%E7%8C%AE%E8%A1%80%E6%97%B6%E9%A1%BA%E8%B5%B0%E6%8A%A4%E5%A3%AB%E6%89%8B%E6%9C%BA%23) `233.6K 🔥` `NEW`
1. [关晓彤李昀锐这个搂肩对视](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E6%9D%8E%E6%98%80%E9%94%90%E8%BF%99%E4%B8%AA%E6%90%82%E8%82%A9%E5%AF%B9%E8%A7%86%23) `231.5K 🔥` `NEW`
1. [曾沛慈咳嗽因不舍粉丝仍在清唱](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%92%B3%E5%97%BD%E5%9B%A0%E4%B8%8D%E8%88%8D%E7%B2%89%E4%B8%9D%E4%BB%8D%E5%9C%A8%E6%B8%85%E5%94%B1%23) `228.5K 🔥` `NEW`
1. [菲律宾防长走后厨躲什么](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%BE%8B%E5%AE%BE%E9%98%B2%E9%95%BF%E8%B5%B0%E5%90%8E%E5%8E%A8%E8%BA%B2%E4%BB%80%E4%B9%88%23) `227.6K 🔥` `NEW`
1. [王橹杰生周 (Wang Lujie was born in Zhou)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%94%9F%E5%91%A8%23) `224.3K 🔥` `NEW`
1. [哈尔滨为何遭遇高温和沙尘暴突袭](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B0%94%E6%BB%A8%E4%B8%BA%E4%BD%95%E9%81%AD%E9%81%87%E9%AB%98%E6%B8%A9%E5%92%8C%E6%B2%99%E5%B0%98%E6%9A%B4%E7%AA%81%E8%A2%AD%23) `220.5K 🔥` `NEW`
1. [ARASHI解散演唱会](https://s.weibo.com/weibo?q=%23ARASHI%E8%A7%A3%E6%95%A3%E6%BC%94%E5%94%B1%E4%BC%9A%23) `220.1K 🔥` `NEW`
1. [中学生一出校门就点上烟了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%AD%A6%E7%94%9F%E4%B8%80%E5%87%BA%E6%A0%A1%E9%97%A8%E5%B0%B1%E7%82%B9%E4%B8%8A%E7%83%9F%E4%BA%86%23) `218.5K 🔥` `NEW`
1. [忆秦娥复出镜头](https://s.weibo.com/weibo?q=%23%E5%BF%86%E7%A7%A6%E5%A8%A5%E5%A4%8D%E5%87%BA%E9%95%9C%E5%A4%B4%23) `216.2K 🔥` `NEW`
1. [周鸿祎谈AI圈重要转折点](https://s.weibo.com/weibo?q=%23%E5%91%A8%E9%B8%BF%E7%A5%8E%E8%B0%88AI%E5%9C%88%E9%87%8D%E8%A6%81%E8%BD%AC%E6%8A%98%E7%82%B9%23) `215.1K 🔥` `NEW`
1. [啪姐卡哥登记结婚](https://s.weibo.com/weibo?q=%23%E5%95%AA%E5%A7%90%E5%8D%A1%E5%93%A5%E7%99%BB%E8%AE%B0%E7%BB%93%E5%A9%9A%23) `214.2K 🔥` `NEW`
1. [家业 煽情](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%20%E7%85%BD%E6%83%85%23) `212.4K 🔥` `NEW`
1. [哈尔滨大风](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B0%94%E6%BB%A8%E5%A4%A7%E9%A3%8E%23) `210.9K 🔥` `NEW`
1. [医生谈5岁男孩半夜咳嗽像小狗叫](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E8%B0%885%E5%B2%81%E7%94%B7%E5%AD%A9%E5%8D%8A%E5%A4%9C%E5%92%B3%E5%97%BD%E5%83%8F%E5%B0%8F%E7%8B%97%E5%8F%AB%23) `207.8K 🔥` `NEW`
1. [宋雨琦短发马甲线 (Song Yuqi short hair vest line)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E7%9F%AD%E5%8F%91%E9%A9%AC%E7%94%B2%E7%BA%BF%23) `206.6K 🔥` `NEW`
1. [王源工体上座率](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E5%B7%A5%E4%BD%93%E4%B8%8A%E5%BA%A7%E7%8E%87%23) `205.6K 🔥` `NEW`
1. [6月金股](https://s.weibo.com/weibo?q=%236%E6%9C%88%E9%87%91%E8%82%A1%23) `203.0K 🔥` `NEW`
1. [全网首档AI购物直播晚会在京东 (The first AI shopping live broadcast party on the Internet is held on JD.com)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BD%91%E9%A6%96%E6%A1%A3AI%E8%B4%AD%E7%89%A9%E7%9B%B4%E6%92%AD%E6%99%9A%E4%BC%9A%E5%9C%A8%E4%BA%AC%E4%B8%9C%23) `746.2K 🔥` `+278%`
1. [窦骁 咱娥今天可太美啦](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%AA%81%20%E5%92%B1%E5%A8%A5%E4%BB%8A%E5%A4%A9%E5%8F%AF%E5%A4%AA%E7%BE%8E%E5%95%A6%23) `346.2K 🔥` `+55%`
1. [这才是六一该办的活动](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%89%8D%E6%98%AF%E5%85%AD%E4%B8%80%E8%AF%A5%E5%8A%9E%E7%9A%84%E6%B4%BB%E5%8A%A8%23) `473.2K 🔥`
1. [何猷君奚梦瑶婚礼欢迎晚宴 (Welcome dinner for He Youjun and Xi Mengyao's wedding)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%8C%B7%E5%90%9B%E5%A5%9A%E6%A2%A6%E7%91%B6%E5%A9%9A%E7%A4%BC%E6%AC%A2%E8%BF%8E%E6%99%9A%E5%AE%B4%23) `249.1K 🔥`
1. [儿童节](https://s.weibo.com/weibo?q=%23%E5%84%BF%E7%AB%A5%E8%8A%82%23) `237.8K 🔥`
1. [天天吃鸡蛋和很少吃鸡蛋谁更健康 (Who is healthier, eating eggs every day or rarely eating eggs?)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%A4%A9%E5%90%83%E9%B8%A1%E8%9B%8B%E5%92%8C%E5%BE%88%E5%B0%91%E5%90%83%E9%B8%A1%E8%9B%8B%E8%B0%81%E6%9B%B4%E5%81%A5%E5%BA%B7%23) `234.9K 🔥`
1. [陈妍希开放自家给谢楠当舞蹈室](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E5%BC%80%E6%94%BE%E8%87%AA%E5%AE%B6%E7%BB%99%E8%B0%A2%E6%A5%A0%E5%BD%93%E8%88%9E%E8%B9%88%E5%AE%A4%23) `232.6K 🔥`
1. [曝85花七折捡漏代言 (It is revealed that 85 people spent 30% off to pick up endorsement deals)](https://s.weibo.com/weibo?q=%23%E6%9B%9D85%E8%8A%B1%E4%B8%83%E6%8A%98%E6%8D%A1%E6%BC%8F%E4%BB%A3%E8%A8%80%23) `226.4K 🔥`
1. [王鹤棣直播感谢粉丝 (Wang Hedi thanked fans during live broadcast)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E7%9B%B4%E6%92%AD%E6%84%9F%E8%B0%A2%E7%B2%89%E4%B8%9D%23) `223.7K 🔥`
1. [拉丁舞爆火裁判一个月跳瘦8斤](https://s.weibo.com/weibo?q=%23%E6%8B%89%E4%B8%81%E8%88%9E%E7%88%86%E7%81%AB%E8%A3%81%E5%88%A4%E4%B8%80%E4%B8%AA%E6%9C%88%E8%B7%B3%E7%98%A68%E6%96%A4%23) `217.7K 🔥`
1. [泥人村干部被卷走监控曝光](https://s.weibo.com/weibo?q=%23%E6%B3%A5%E4%BA%BA%E6%9D%91%E5%B9%B2%E9%83%A8%E8%A2%AB%E5%8D%B7%E8%B5%B0%E7%9B%91%E6%8E%A7%E6%9B%9D%E5%85%89%23) `210.4K 🔥`
1. [报告称孩子越多平均养育成本越低 (Report says the more children, the lower the average cost of raising children)](https://s.weibo.com/weibo?q=%23%E6%8A%A5%E5%91%8A%E7%A7%B0%E5%AD%A9%E5%AD%90%E8%B6%8A%E5%A4%9A%E5%B9%B3%E5%9D%87%E5%85%BB%E8%82%B2%E6%88%90%E6%9C%AC%E8%B6%8A%E4%BD%8E%23) `204.3K 🔥`
1. [天涯神帖 (Tianya Shentie)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B6%AF%E7%A5%9E%E5%B8%96%23) `2.3M 🔥` `-23%`
1. [天涯社区曾2次重启失败](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B6%AF%E7%A4%BE%E5%8C%BA%E6%9B%BE2%E6%AC%A1%E9%87%8D%E5%90%AF%E5%A4%B1%E8%B4%A5%23) `318.8K 🔥` `-43%`
1. [城事日记津彩有你 (City Affairs Diary Jincai has you)](https://s.weibo.com/weibo?q=%23%E5%9F%8E%E4%BA%8B%E6%97%A5%E8%AE%B0%E6%B4%A5%E5%BD%A9%E6%9C%89%E4%BD%A0%23) `229.8K 🔥` `-71%`
1. [日本拥抱印度](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%8B%A5%E6%8A%B1%E5%8D%B0%E5%BA%A6%23) `225.0K 🔥` `-77%`
1. [央视曝光劣质驱蚊产品](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E5%8A%A3%E8%B4%A8%E9%A9%B1%E8%9A%8A%E4%BA%A7%E5%93%81%23) `221.5K 🔥` `-27%`
1. [日系车溃败 (Japanese cars collapse)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E7%B3%BB%E8%BD%A6%E6%BA%83%E8%B4%A5%23) `209.2K 🔥` `-23%`

Updated at 2026-06-01 10:01:51

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
