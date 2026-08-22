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

1. [王菲字体 (Faye Wong font)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E5%AD%97%E4%BD%93%23) `261.3K 🔥` `NEW`
1. [甲醛白菜并非首次出现](https://s.weibo.com/weibo?q=%23%E7%94%B2%E9%86%9B%E7%99%BD%E8%8F%9C%E5%B9%B6%E9%9D%9E%E9%A6%96%E6%AC%A1%E5%87%BA%E7%8E%B0%23) `196.5K 🔥` `NEW`
1. [披荆斩棘直播](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E7%9B%B4%E6%92%AD%23) `164.5K 🔥` `NEW`
1. [零食占座当事人母亲发声](https://s.weibo.com/weibo?q=%23%E9%9B%B6%E9%A3%9F%E5%8D%A0%E5%BA%A7%E5%BD%93%E4%BA%8B%E4%BA%BA%E6%AF%8D%E4%BA%B2%E5%8F%91%E5%A3%B0%23) `149.1K 🔥` `NEW`
1. [博主生吃芋头花中毒云南网友急疯了](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E4%B8%BB%E7%94%9F%E5%90%83%E8%8A%8B%E5%A4%B4%E8%8A%B1%E4%B8%AD%E6%AF%92%E4%BA%91%E5%8D%97%E7%BD%91%E5%8F%8B%E6%80%A5%E7%96%AF%E4%BA%86%23) `133.4K 🔥` `NEW`
1. [62岁女子孕晚期血压超过140](https://s.weibo.com/weibo?q=%2362%E5%B2%81%E5%A5%B3%E5%AD%90%E5%AD%95%E6%99%9A%E6%9C%9F%E8%A1%80%E5%8E%8B%E8%B6%85%E8%BF%87140%23) `116.0K 🔥` `NEW`
1. [动漫展有人cos山上彻也](https://s.weibo.com/weibo?q=%23%E5%8A%A8%E6%BC%AB%E5%B1%95%E6%9C%89%E4%BA%BAcos%E5%B1%B1%E4%B8%8A%E5%BD%BB%E4%B9%9F%23) `115.9K 🔥` `NEW`
1. [宁艺卓周安信李灿荣TIMA主持](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E5%91%A8%E5%AE%89%E4%BF%A1%E6%9D%8E%E7%81%BF%E8%8D%A3TIMA%E4%B8%BB%E6%8C%81%23) `112.8K 🔥` `NEW`
1. [美国男子竟大笑承认虐待并肢解少女](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%94%B7%E5%AD%90%E7%AB%9F%E5%A4%A7%E7%AC%91%E6%89%BF%E8%AE%A4%E8%99%90%E5%BE%85%E5%B9%B6%E8%82%A2%E8%A7%A3%E5%B0%91%E5%A5%B3%23) `103.4K 🔥` `NEW`
1. [亚朵卖枕头被子收入快赶上酒店主业](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E6%9C%B5%E5%8D%96%E6%9E%95%E5%A4%B4%E8%A2%AB%E5%AD%90%E6%94%B6%E5%85%A5%E5%BF%AB%E8%B5%B6%E4%B8%8A%E9%85%92%E5%BA%97%E4%B8%BB%E4%B8%9A%23) `638.6K 🔥` `+105%`
1. [多方回应23楼开灯被对面20楼投诉 (Many parties responded to complaints from the 20th floor opposite when the lights were turned on on the 23rd floor.)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%9423%E6%A5%BC%E5%BC%80%E7%81%AF%E8%A2%AB%E5%AF%B9%E9%9D%A220%E6%A5%BC%E6%8A%95%E8%AF%89%23) `220.8K 🔥` `+43%`
1. [台湾节目嘉宾说北京没有冰箱引群嘲](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E8%8A%82%E7%9B%AE%E5%98%89%E5%AE%BE%E8%AF%B4%E5%8C%97%E4%BA%AC%E6%B2%A1%E6%9C%89%E5%86%B0%E7%AE%B1%E5%BC%95%E7%BE%A4%E5%98%B2%23) `1.5M 🔥`
1. [ACC辅助驾驶追撞致3人死亡](https://s.weibo.com/weibo?q=%23ACC%E8%BE%85%E5%8A%A9%E9%A9%BE%E9%A9%B6%E8%BF%BD%E6%92%9E%E8%87%B43%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `926.4K 🔥`
1. [6图看财政清单里的民生温度](https://s.weibo.com/weibo?q=%236%E5%9B%BE%E7%9C%8B%E8%B4%A2%E6%94%BF%E6%B8%85%E5%8D%95%E9%87%8C%E7%9A%84%E6%B0%91%E7%94%9F%E6%B8%A9%E5%BA%A6%23) `695.7K 🔥`
1. [开学上拼多多买立白 香到没朋友 (When school starts, I buy Libai on Pinduoduo. It’s so popular that I have no friends.)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%AD%A6%E4%B8%8A%E6%8B%BC%E5%A4%9A%E5%A4%9A%E4%B9%B0%E7%AB%8B%E7%99%BD%20%E9%A6%99%E5%88%B0%E6%B2%A1%E6%9C%8B%E5%8F%8B%23) `683.9K 🔥`
1. [与已婚男开房180次保险员称谈业务 (Booked a house with a married man 180 times and discussed business with the insurance agent)](https://s.weibo.com/weibo?q=%23%E4%B8%8E%E5%B7%B2%E5%A9%9A%E7%94%B7%E5%BC%80%E6%88%BF180%E6%AC%A1%E4%BF%9D%E9%99%A9%E5%91%98%E7%A7%B0%E8%B0%88%E4%B8%9A%E5%8A%A1%23) `678.1K 🔥`
1. [巫哲顶着这张脸叫狗蛋儿](https://s.weibo.com/weibo?q=%23%E5%B7%AB%E5%93%B2%E9%A1%B6%E7%9D%80%E8%BF%99%E5%BC%A0%E8%84%B8%E5%8F%AB%E7%8B%97%E8%9B%8B%E5%84%BF%23) `617.0K 🔥`
1. [电影大唐妖探今日上映 (The movie "The Demon Detective of the Tang Dynasty" is released today)](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E5%A4%A7%E5%94%90%E5%A6%96%E6%8E%A2%E4%BB%8A%E6%97%A5%E4%B8%8A%E6%98%A0%23) `613.6K 🔥`
1. [逐玉长月烬明版权费上千万](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E9%95%BF%E6%9C%88%E7%83%AC%E6%98%8E%E7%89%88%E6%9D%83%E8%B4%B9%E4%B8%8A%E5%8D%83%E4%B8%87%23) `547.9K 🔥`
1. [龙餐馆](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%23) `455.6K 🔥`
1. [亚运会电子竞技项目国家队成立 (Asian Games e-sports national team established)](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E7%94%B5%E5%AD%90%E7%AB%9E%E6%8A%80%E9%A1%B9%E7%9B%AE%E5%9B%BD%E5%AE%B6%E9%98%9F%E6%88%90%E7%AB%8B%23) `379.2K 🔥`
1. [晋江作者大会 (Jinjiang Author Conference)](https://s.weibo.com/weibo?q=%23%E6%99%8B%E6%B1%9F%E4%BD%9C%E8%80%85%E5%A4%A7%E4%BC%9A%23) `281.8K 🔥`
1. [稚楚美到我了 (Childish and beautiful to me)](https://s.weibo.com/weibo?q=%23%E7%A8%9A%E6%A5%9A%E7%BE%8E%E5%88%B0%E6%88%91%E4%BA%86%23) `242.8K 🔥`
1. [李灿荣全中文主持 (Hosted in Chinese by Li Canrong)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%81%BF%E8%8D%A3%E5%85%A8%E4%B8%AD%E6%96%87%E4%B8%BB%E6%8C%81%23) `239.6K 🔥`
1. [律师回应王橹杰妈妈打掉私生手机](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E5%9B%9E%E5%BA%94%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%A6%88%E5%A6%88%E6%89%93%E6%8E%89%E7%A7%81%E7%94%9F%E6%89%8B%E6%9C%BA%23) `223.7K 🔥`
1. [高市早苗搬出孔子言论强行辩解 (Sanae Takaichi used Confucius’ remarks to forcefully defend himself)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E6%90%AC%E5%87%BA%E5%AD%94%E5%AD%90%E8%A8%80%E8%AE%BA%E5%BC%BA%E8%A1%8C%E8%BE%A9%E8%A7%A3%23) `199.2K 🔥`
1. [中国留学生吐槽回国后学历贬值](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%95%99%E5%AD%A6%E7%94%9F%E5%90%90%E6%A7%BD%E5%9B%9E%E5%9B%BD%E5%90%8E%E5%AD%A6%E5%8E%86%E8%B4%AC%E5%80%BC%23) `174.3K 🔥`
1. [关晓彤走机场也戴负重手环 (Guan Xiaotong also wears a weight-bearing bracelet when walking to the airport)](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E8%B5%B0%E6%9C%BA%E5%9C%BA%E4%B9%9F%E6%88%B4%E8%B4%9F%E9%87%8D%E6%89%8B%E7%8E%AF%23) `138.8K 🔥`
1. [突然发现善意是流动的](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E5%96%84%E6%84%8F%E6%98%AF%E6%B5%81%E5%8A%A8%E7%9A%84%23) `116.1K 🔥`
1. [大明王朝1566 (Ming Dynasty 1566)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E6%98%8E%E7%8E%8B%E6%9C%9D1566%23) `113.9K 🔥`
1. [私生尾随王橹杰或涉嫌违法](https://s.weibo.com/weibo?q=%23%E7%A7%81%E7%94%9F%E5%B0%BE%E9%9A%8F%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%88%96%E6%B6%89%E5%AB%8C%E8%BF%9D%E6%B3%95%23) `102.1K 🔥`
1. [人形机器人为什么一定要是人形](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%80%E5%AE%9A%E8%A6%81%E6%98%AF%E4%BA%BA%E5%BD%A2%23) `99.6K 🔥`
1. [墨香铜臭 亿级版权 (The fragrance of ink and the smell of copper, billion-level copyright)](https://s.weibo.com/weibo?q=%23%E5%A2%A8%E9%A6%99%E9%93%9C%E8%87%AD%20%E4%BA%BF%E7%BA%A7%E7%89%88%E6%9D%83%23) `264.2K 🔥` `-40%`
1. [F1](https://s.weibo.com/weibo?q=%23F1%23) `236.3K 🔥` `-23%`
1. [亚运会 (Asian Games)](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `231.6K 🔥` `-25%`
1. [甲醛白菜流向哪里 (Where does formaldehyde go?)](https://s.weibo.com/weibo?q=%23%E7%94%B2%E9%86%9B%E7%99%BD%E8%8F%9C%E6%B5%81%E5%90%91%E5%93%AA%E9%87%8C%23) `231.0K 🔥` `-72%`
1. [甲醛白菜 工人癌症风险](https://s.weibo.com/weibo?q=%23%E7%94%B2%E9%86%9B%E7%99%BD%E8%8F%9C%20%E5%B7%A5%E4%BA%BA%E7%99%8C%E7%97%87%E9%A3%8E%E9%99%A9%23) `229.5K 🔥` `-67%`
1. [那英演唱会](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E6%BC%94%E5%94%B1%E4%BC%9A%23) `229.3K 🔥` `-27%`
1. [一点没有情趣的直男震撼](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%82%B9%E6%B2%A1%E6%9C%89%E6%83%85%E8%B6%A3%E7%9A%84%E7%9B%B4%E7%94%B7%E9%9C%87%E6%92%BC%23) `228.3K 🔥` `-25%`
1. [宋雨琦马甲线比我人生还清晰](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E9%A9%AC%E7%94%B2%E7%BA%BF%E6%AF%94%E6%88%91%E4%BA%BA%E7%94%9F%E8%BF%98%E6%B8%85%E6%99%B0%23) `226.8K 🔥` `-24%`
1. [张婧仪大理素颜爬山 (Zhang Jingyi Dali mountain climbing without makeup)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E5%A4%A7%E7%90%86%E7%B4%A0%E9%A2%9C%E7%88%AC%E5%B1%B1%23) `225.7K 🔥` `-28%`
1. [巫哲首次公开露脸 (Wu Zhe's first public appearance)](https://s.weibo.com/weibo?q=%23%E5%B7%AB%E5%93%B2%E9%A6%96%E6%AC%A1%E5%85%AC%E5%BC%80%E9%9C%B2%E8%84%B8%23) `224.8K 🔥` `-25%`
1. [白菜蘸甲醛 (Cabbage dipped in formaldehyde)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E8%8F%9C%E8%98%B8%E7%94%B2%E9%86%9B%23) `221.8K 🔥` `-30%`
1. [55元捡漏1.41万项链女子获5元补偿](https://s.weibo.com/weibo?q=%2355%E5%85%83%E6%8D%A1%E6%BC%8F1.41%E4%B8%87%E9%A1%B9%E9%93%BE%E5%A5%B3%E5%AD%90%E8%8E%B75%E5%85%83%E8%A1%A5%E5%81%BF%23) `208.0K 🔥` `-22%`
1. [宁艺卓担任TIMA主持人](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E6%8B%85%E4%BB%BBTIMA%E4%B8%BB%E6%8C%81%E4%BA%BA%23) `199.1K 🔥` `-32%`
1. [TOP彩排goodthings (TOP rehearsalgoodthings)](https://s.weibo.com/weibo?q=%23TOP%E5%BD%A9%E6%8E%92goodthings%23) `174.5K 🔥` `-23%`
1. [晋江热门作品版权费好贵 (Copyright fees for popular works in Jinjiang are so expensive)](https://s.weibo.com/weibo?q=%23%E6%99%8B%E6%B1%9F%E7%83%AD%E9%97%A8%E4%BD%9C%E5%93%81%E7%89%88%E6%9D%83%E8%B4%B9%E5%A5%BD%E8%B4%B5%23) `166.3K 🔥` `-30%`
1. [父子因iPhone争执坠崖母亲也跳下 (Father and son fall off cliff after arguing over iPhone, mother also jumps)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E5%AD%90%E5%9B%A0iPhone%E4%BA%89%E6%89%A7%E5%9D%A0%E5%B4%96%E6%AF%8D%E4%BA%B2%E4%B9%9F%E8%B7%B3%E4%B8%8B%23) `106.3K 🔥` `-24%`
1. [陈伟霆十年了还没释怀人贩子梗 (William Chan still hasn’t let go of the human trafficker plot after ten years)](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E5%8D%81%E5%B9%B4%E4%BA%86%E8%BF%98%E6%B2%A1%E9%87%8A%E6%80%80%E4%BA%BA%E8%B4%A9%E5%AD%90%E6%A2%97%23) `104.9K 🔥` `-29%`
1. [白血病不再是不治之症 (Leukemia is no longer an incurable disease)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E8%A1%80%E7%97%85%E4%B8%8D%E5%86%8D%E6%98%AF%E4%B8%8D%E6%B2%BB%E4%B9%8B%E7%97%87%23) `99.5K 🔥` `-22%`

Updated at 2026-08-22 19:34:58

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
