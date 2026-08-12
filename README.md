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

1. [朱镕基同志逝世 (Comrade Zhu Rongji passed away)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E9%80%9D%E4%B8%96%23) `19.3M 🔥` `NEW`
1. [小鹏G9L预售价25.98万元](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FG9L%E9%A2%84%E5%94%AE%E4%BB%B725.98%E4%B8%87%E5%85%83%23) `1.2M 🔥` `NEW`
1. [微信群聊可以彻底关闭通知了](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E7%BE%A4%E8%81%8A%E5%8F%AF%E4%BB%A5%E5%BD%BB%E5%BA%95%E5%85%B3%E9%97%AD%E9%80%9A%E7%9F%A5%E4%BA%86%23) `811.1K 🔥` `NEW`
1. [朱镕基同志永垂不朽](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E6%B0%B8%E5%9E%82%E4%B8%8D%E6%9C%BD%23) `521.9K 🔥` `NEW`
1. [结婚登记数 历史新低](https://s.weibo.com/weibo?q=%23%E7%BB%93%E5%A9%9A%E7%99%BB%E8%AE%B0%E6%95%B0%20%E5%8E%86%E5%8F%B2%E6%96%B0%E4%BD%8E%23) `485.1K 🔥` `NEW`
1. [李雪健已经完全听不见了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%AA%E5%81%A5%E5%B7%B2%E7%BB%8F%E5%AE%8C%E5%85%A8%E5%90%AC%E4%B8%8D%E8%A7%81%E4%BA%86%23) `484.3K 🔥` `NEW`
1. [朱镕基同志享年98岁](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E4%BA%AB%E5%B9%B498%E5%B2%81%23) `481.7K 🔥` `NEW`
1. [印度开始发钱催生](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%BC%80%E5%A7%8B%E5%8F%91%E9%92%B1%E5%82%AC%E7%94%9F%23) `472.2K 🔥` `NEW`
1. [姜潮麦迪娜婚礼伴手礼](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E6%BD%AE%E9%BA%A6%E8%BF%AA%E5%A8%9C%E5%A9%9A%E7%A4%BC%E4%BC%B4%E6%89%8B%E7%A4%BC%23) `463.4K 🔥` `NEW`
1. [贺涵和罗子君鞋品一致](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E6%B6%B5%E5%92%8C%E7%BD%97%E5%AD%90%E5%90%9B%E9%9E%8B%E5%93%81%E4%B8%80%E8%87%B4%23) `447.3K 🔥` `NEW`
1. [姆巴佩签约中国品牌 (Mbappe signs with Chinese brand)](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%AD%BE%E7%BA%A6%E4%B8%AD%E5%9B%BD%E5%93%81%E7%89%8C%23) `392.3K 🔥` `NEW`
1. [韩雨彤送考曾辉](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E9%9B%A8%E5%BD%A4%E9%80%81%E8%80%83%E6%9B%BE%E8%BE%89%23) `391.5K 🔥` `NEW`
1. [银行能办结婚证了](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E8%83%BD%E5%8A%9E%E7%BB%93%E5%A9%9A%E8%AF%81%E4%BA%86%23) `381.8K 🔥` `NEW`
1. [江泽民同志诞辰100周年](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E6%B3%BD%E6%B0%91%E5%90%8C%E5%BF%97%E8%AF%9E%E8%BE%B0100%E5%91%A8%E5%B9%B4%23) `363.0K 🔥` `NEW`
1. [婚外胚胎案原配希望调查丈夫财产](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E6%A1%88%E5%8E%9F%E9%85%8D%E5%B8%8C%E6%9C%9B%E8%B0%83%E6%9F%A5%E4%B8%88%E5%A4%AB%E8%B4%A2%E4%BA%A7%23) `314.7K 🔥` `NEW`
1. [黄灿灿刷经纪人卡做了新美甲](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E5%88%B7%E7%BB%8F%E7%BA%AA%E4%BA%BA%E5%8D%A1%E5%81%9A%E4%BA%86%E6%96%B0%E7%BE%8E%E7%94%B2%23) `313.4K 🔥` `NEW`
1. [花开锦绣](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%23) `312.1K 🔥` `NEW`
1. [陈奕恒泡泡视频唱baby](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E6%B3%A1%E6%B3%A1%E8%A7%86%E9%A2%91%E5%94%B1baby%23) `309.1K 🔥` `NEW`
1. [4月4日出生考444分选殡葬专业](https://s.weibo.com/weibo?q=%234%E6%9C%884%E6%97%A5%E5%87%BA%E7%94%9F%E8%80%83444%E5%88%86%E9%80%89%E6%AE%A1%E8%91%AC%E4%B8%93%E4%B8%9A%23) `307.9K 🔥` `NEW`
1. [Claude和Codex如何一起用](https://s.weibo.com/weibo?q=%23Claude%E5%92%8CCodex%E5%A6%82%E4%BD%95%E4%B8%80%E8%B5%B7%E7%94%A8%23) `306.6K 🔥` `NEW`
1. [张睿李若嘉在一起十年了 (Zhang Rui and Li Ruojia have been together for ten years)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%E6%9D%8E%E8%8B%A5%E5%98%89%E5%9C%A8%E4%B8%80%E8%B5%B7%E5%8D%81%E5%B9%B4%E4%BA%86%23) `275.6K 🔥` `NEW`
1. [公司不收门票已经是一种福利了吗](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E4%B8%8D%E6%94%B6%E9%97%A8%E7%A5%A8%E5%B7%B2%E7%BB%8F%E6%98%AF%E4%B8%80%E7%A7%8D%E7%A6%8F%E5%88%A9%E4%BA%86%E5%90%97%23) `273.6K 🔥` `NEW`
1. [韩剧导演安畔锡去世](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%89%A7%E5%AF%BC%E6%BC%94%E5%AE%89%E7%95%94%E9%94%A1%E5%8E%BB%E4%B8%96%23) `240.8K 🔥` `NEW`
1. [腾讯第二季度营收2048亿元](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E7%AC%AC%E4%BA%8C%E5%AD%A3%E5%BA%A6%E8%90%A5%E6%94%B62048%E4%BA%BF%E5%85%83%23) `231.6K 🔥` `NEW`
1. [上半年全国结婚登记327.5万对](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%8D%8A%E5%B9%B4%E5%85%A8%E5%9B%BD%E7%BB%93%E5%A9%9A%E7%99%BB%E8%AE%B0327.5%E4%B8%87%E5%AF%B9%23) `2.1M 🔥` `+110%`
1. [活力数据感知经济发展稳进好](https://s.weibo.com/weibo?q=%23%E6%B4%BB%E5%8A%9B%E6%95%B0%E6%8D%AE%E6%84%9F%E7%9F%A5%E7%BB%8F%E6%B5%8E%E5%8F%91%E5%B1%95%E7%A8%B3%E8%BF%9B%E5%A5%BD%23) `1.7M 🔥` `+59%`
1. [印度保安强奸女学生后求放过](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E4%BF%9D%E5%AE%89%E5%BC%BA%E5%A5%B8%E5%A5%B3%E5%AD%A6%E7%94%9F%E5%90%8E%E6%B1%82%E6%94%BE%E8%BF%87%23) `528.9K 🔥` `+59%`
1. [C罗宣布结婚 (Cristiano Ronaldo announces marriage)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%AE%A3%E5%B8%83%E7%BB%93%E5%A9%9A%23) `485.2K 🔥` `+30%`
1. [演唱会 11连坐](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%94%B1%E4%BC%9A%2011%E8%BF%9E%E5%9D%90%23) `483.6K 🔥` `+31%`
1. [原来姚安娜是艺名](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%A7%9A%E5%AE%89%E5%A8%9C%E6%98%AF%E8%89%BA%E5%90%8D%23) `481.9K 🔥` `+21%`
1. [丁禹兮回应脖子前倾](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%9B%9E%E5%BA%94%E8%84%96%E5%AD%90%E5%89%8D%E5%80%BE%23) `479.5K 🔥` `+25%`
1. [贾冰否认私人饭局爆粗口 (Jia Bing denies swearing during private dinner)](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E5%86%B0%E5%90%A6%E8%AE%A4%E7%A7%81%E4%BA%BA%E9%A5%AD%E5%B1%80%E7%88%86%E7%B2%97%E5%8F%A3%23) `478.6K 🔥` `+25%`
1. [腾讯自由现金流 (Tencent free cash flow)](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E8%87%AA%E7%94%B1%E7%8E%B0%E9%87%91%E6%B5%81%23) `475.6K 🔥` `+178%`
1. [邵兵回应退赛](https://s.weibo.com/weibo?q=%23%E9%82%B5%E5%85%B5%E5%9B%9E%E5%BA%94%E9%80%80%E8%B5%9B%23) `467.4K 🔥` `+37%`
1. [旅游了很多次才知道的事](https://s.weibo.com/weibo?q=%23%E6%97%85%E6%B8%B8%E4%BA%86%E5%BE%88%E5%A4%9A%E6%AC%A1%E6%89%8D%E7%9F%A5%E9%81%93%E7%9A%84%E4%BA%8B%23) `467.0K 🔥` `+48%`
1. [20岁的林徽因在北京真实样貌](https://s.weibo.com/weibo?q=%2320%E5%B2%81%E7%9A%84%E6%9E%97%E5%BE%BD%E5%9B%A0%E5%9C%A8%E5%8C%97%E4%BA%AC%E7%9C%9F%E5%AE%9E%E6%A0%B7%E8%B2%8C%23) `456.8K 🔥` `+27%`
1. [留几手说娜扎比热巴好看 (Leave a few words to say that Nazha is prettier than Reba)](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%87%A0%E6%89%8B%E8%AF%B4%E5%A8%9C%E6%89%8E%E6%AF%94%E7%83%AD%E5%B7%B4%E5%A5%BD%E7%9C%8B%23) `446.7K 🔥` `+37%`
1. [领克高管直播泄密新车 (Lynk & Co executive leaks new car details live)](https://s.weibo.com/weibo?q=%23%E9%A2%86%E5%85%8B%E9%AB%98%E7%AE%A1%E7%9B%B4%E6%92%AD%E6%B3%84%E5%AF%86%E6%96%B0%E8%BD%A6%23) `365.1K 🔥` `+100%`
1. [有车以后才明白的道理](https://s.weibo.com/weibo?q=%23%E6%9C%89%E8%BD%A6%E4%BB%A5%E5%90%8E%E6%89%8D%E6%98%8E%E7%99%BD%E7%9A%84%E9%81%93%E7%90%86%23) `347.9K 🔥` `+49%`
1. [帮180斤女友减肥致死男子智力仅及格](https://s.weibo.com/weibo?q=%23%E5%B8%AE180%E6%96%A4%E5%A5%B3%E5%8F%8B%E5%87%8F%E8%82%A5%E8%87%B4%E6%AD%BB%E7%94%B7%E5%AD%90%E6%99%BA%E5%8A%9B%E4%BB%85%E5%8F%8A%E6%A0%BC%23) `317.8K 🔥` `+49%`
1. [网传小S主持声生不息宝岛季](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%B0%8FS%E4%B8%BB%E6%8C%81%E5%A3%B0%E7%94%9F%E4%B8%8D%E6%81%AF%E5%AE%9D%E5%B2%9B%E5%AD%A3%23) `304.3K 🔥` `+97%`
1. [福州一事业单位员工24年未到岗](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%B7%9E%E4%B8%80%E4%BA%8B%E4%B8%9A%E5%8D%95%E4%BD%8D%E5%91%98%E5%B7%A524%E5%B9%B4%E6%9C%AA%E5%88%B0%E5%B2%97%23) `248.0K 🔥` `+34%`
1. [为什么方便面又好卖了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%96%B9%E4%BE%BF%E9%9D%A2%E5%8F%88%E5%A5%BD%E5%8D%96%E4%BA%86%23) `245.8K 🔥` `+34%`
1. [时代峰峻在招聘了](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%9C%A8%E6%8B%9B%E8%81%98%E4%BA%86%23) `370.8K 🔥`
1. [张雅琪 中餐厅存在感 (Zhang Yaqi Chinese restaurant presence)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%20%E4%B8%AD%E9%A4%90%E5%8E%85%E5%AD%98%E5%9C%A8%E6%84%9F%23) `230.2K 🔥`
1. [社保实缴严查中 (Social security payment is under strict inspection)](https://s.weibo.com/weibo?q=%23%E7%A4%BE%E4%BF%9D%E5%AE%9E%E7%BC%B4%E4%B8%A5%E6%9F%A5%E4%B8%AD%23) `773.5K 🔥` `-27%`
1. [喜欢穿洞洞鞋的人天塌了 (People who like to wear Crocs are in trouble)](https://s.weibo.com/weibo?q=%23%E5%96%9C%E6%AC%A2%E7%A9%BF%E6%B4%9E%E6%B4%9E%E9%9E%8B%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `750.4K 🔥` `-27%`
1. [日全食 (total solar eclipse)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%85%A8%E9%A3%9F%23) `551.5K 🔥` `-53%`
1. [华人富豪全裸坠亡女友发声](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%BA%BA%E5%AF%8C%E8%B1%AA%E5%85%A8%E8%A3%B8%E5%9D%A0%E4%BA%A1%E5%A5%B3%E5%8F%8B%E5%8F%91%E5%A3%B0%23) `483.2K 🔥` `-49%`
1. [邵兵 退赛](https://s.weibo.com/weibo?q=%23%E9%82%B5%E5%85%B5%20%E9%80%80%E8%B5%9B%23) `482.6K 🔥` `-53%`
1. [姜潮麦迪娜婚礼直播](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E6%BD%AE%E9%BA%A6%E8%BF%AA%E5%A8%9C%E5%A9%9A%E7%A4%BC%E7%9B%B4%E6%92%AD%23) `243.1K 🔥` `-21%`

Updated at 2026-08-12 19:05:02

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
