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

1. [国乒男团3比1法国男团 (The national table tennis men's team beat the French men's team 3-1)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A23%E6%AF%941%E6%B3%95%E5%9B%BD%E7%94%B7%E5%9B%A2%23) `2.9M 🔥` `NEW`
1. [国乒男团进世乒赛决赛](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E8%BF%9B%E4%B8%96%E4%B9%92%E8%B5%9B%E5%86%B3%E8%B5%9B%23) `490.1K 🔥` `NEW`
1. [林诗栋0比3F勒布伦](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B0%E6%AF%943F%E5%8B%92%E5%B8%83%E4%BC%A6%23) `439.0K 🔥` `NEW`
1. [国乒男团决赛对阵日本](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E5%86%B3%E8%B5%9B%E5%AF%B9%E9%98%B5%E6%97%A5%E6%9C%AC%23) `215.6K 🔥` `NEW`
1. [中国男团2比1法国](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%9B%A22%E6%AF%941%E6%B3%95%E5%9B%BD%23) `66.9K 🔥` `NEW`
1. [奥迪E7X把家装进车里了](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E8%BF%AAE7X%E6%8A%8A%E5%AE%B6%E8%A3%85%E8%BF%9B%E8%BD%A6%E9%87%8C%E4%BA%86%23) `66.8K 🔥` `NEW`
1. [外网博主4年前预测汉坦病毒来袭](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%BD%91%E5%8D%9A%E4%B8%BB4%E5%B9%B4%E5%89%8D%E9%A2%84%E6%B5%8B%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%E6%9D%A5%E8%A2%AD%23) `66.8K 🔥` `NEW`
1. [母亲节](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E8%8A%82%23) `736.5K 🔥` `+358%`
1. [太空快递跑出中国加速度](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E7%A9%BA%E5%BF%AB%E9%80%92%E8%B7%91%E5%87%BA%E4%B8%AD%E5%9B%BD%E5%8A%A0%E9%80%9F%E5%BA%A6%23) `606.9K 🔥` `+57%`
1. [一根烟头烧掉212万 (One cigarette butt burns 2.12 million)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%A0%B9%E7%83%9F%E5%A4%B4%E7%83%A7%E6%8E%89212%E4%B8%87%23) `356.5K 🔥` `+106%`
1. [何赛飞怒批姜贞羽](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B5%9B%E9%A3%9E%E6%80%92%E6%89%B9%E5%A7%9C%E8%B4%9E%E7%BE%BD%23) `220.5K 🔥` `+38%`
1. [这一秒过火 (This second went too far)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%23) `94.6K 🔥` `+91%`
1. [越来越理解什么叫事缓则圆 (I understand more and more what it means to slow things down and make things right)](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E6%9D%A5%E8%B6%8A%E7%90%86%E8%A7%A3%E4%BB%80%E4%B9%88%E5%8F%AB%E4%BA%8B%E7%BC%93%E5%88%99%E5%9C%86%23) `90.4K 🔥` `+25%`
1. [交管队长回应被举报与女性举止亲密 (Traffic control team leader responds to reports of being intimate with women)](https://s.weibo.com/weibo?q=%23%E4%BA%A4%E7%AE%A1%E9%98%9F%E9%95%BF%E5%9B%9E%E5%BA%94%E8%A2%AB%E4%B8%BE%E6%8A%A5%E4%B8%8E%E5%A5%B3%E6%80%A7%E4%B8%BE%E6%AD%A2%E4%BA%B2%E5%AF%86%23) `80.7K 🔥` `+27%`
1. [安倍晋三遗孀陪赖清德跪日本人](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%80%8D%E6%99%8B%E4%B8%89%E9%81%97%E5%AD%80%E9%99%AA%E8%B5%96%E6%B8%85%E5%BE%B7%E8%B7%AA%E6%97%A5%E6%9C%AC%E4%BA%BA%23) `74.2K 🔥` `+35%`
1. [给阿嬷的情书票房破亿](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E7%A5%A8%E6%88%BF%E7%A0%B4%E4%BA%BF%23) `74.1K 🔥` `+50%`
1. [央视网更正锁电相关报道 (CCTV corrects reports related to power lockout)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E7%BD%91%E6%9B%B4%E6%AD%A3%E9%94%81%E7%94%B5%E7%9B%B8%E5%85%B3%E6%8A%A5%E9%81%93%23) `73.9K 🔥` `+50%`
1. [美国女子做特殊癖好服务致对方身亡 (American woman performed a special fetish service and the other party died)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A5%B3%E5%AD%90%E5%81%9A%E7%89%B9%E6%AE%8A%E7%99%96%E5%A5%BD%E6%9C%8D%E5%8A%A1%E8%87%B4%E5%AF%B9%E6%96%B9%E8%BA%AB%E4%BA%A1%23) `73.5K 🔥` `+49%`
1. [马龙为男团半决赛开场](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E4%B8%BA%E7%94%B7%E5%9B%A2%E5%8D%8A%E5%86%B3%E8%B5%9B%E5%BC%80%E5%9C%BA%23) `73.3K 🔥` `+48%`
1. [一家三口候车室吃东西垃圾扔满地 (A family of three eats food and litters the floor in the waiting room)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E5%80%99%E8%BD%A6%E5%AE%A4%E5%90%83%E4%B8%9C%E8%A5%BF%E5%9E%83%E5%9C%BE%E6%89%94%E6%BB%A1%E5%9C%B0%23) `72.5K 🔥` `+46%`
1. [马龙为世乒赛开场 (Malone opens the World Table Tennis Championships)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E4%B8%BA%E4%B8%96%E4%B9%92%E8%B5%9B%E5%BC%80%E5%9C%BA%23) `71.9K 🔥` `+45%`
1. [国际足联急了](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E8%B6%B3%E8%81%94%E6%80%A5%E4%BA%86%23) `66.9K 🔥` `+35%`
1. [浪7三公是浪姐史上浓墨重彩的一笔](https://s.weibo.com/weibo?q=%23%E6%B5%AA7%E4%B8%89%E5%85%AC%E6%98%AF%E6%B5%AA%E5%A7%90%E5%8F%B2%E4%B8%8A%E6%B5%93%E5%A2%A8%E9%87%8D%E5%BD%A9%E7%9A%84%E4%B8%80%E7%AC%94%23) `66.9K 🔥` `+35%`
1. [21世纪大君夫人](https://s.weibo.com/weibo?q=%2321%E4%B8%96%E7%BA%AA%E5%A4%A7%E5%90%9B%E5%A4%AB%E4%BA%BA%23) `66.9K 🔥` `+35%`
1. [俄罗斯胜利日阅兵](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E8%83%9C%E5%88%A9%E6%97%A5%E9%98%85%E5%85%B5%23) `66.9K 🔥` `+35%`
1. [给六只猫猫同时洗澡](https://s.weibo.com/weibo?q=%23%E7%BB%99%E5%85%AD%E5%8F%AA%E7%8C%AB%E7%8C%AB%E5%90%8C%E6%97%B6%E6%B4%97%E6%BE%A1%23) `66.9K 🔥` `+35%`
1. [显微镜下的辣条](https://s.weibo.com/weibo?q=%23%E6%98%BE%E5%BE%AE%E9%95%9C%E4%B8%8B%E7%9A%84%E8%BE%A3%E6%9D%A1%23) `66.9K 🔥` `+35%`
1. [吴宜泽4比5希金斯 (Wu Yize 4 to 5 Higgins)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%9C%E6%B3%BD4%E6%AF%945%E5%B8%8C%E9%87%91%E6%96%AF%23) `66.9K 🔥` `+35%`
1. [香港富豪孙女被绑架案细节披露 (Details of kidnapping case of Hong Kong rich man’s granddaughter revealed)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%AF%8C%E8%B1%AA%E5%AD%99%E5%A5%B3%E8%A2%AB%E7%BB%91%E6%9E%B6%E6%A1%88%E7%BB%86%E8%8A%82%E6%8A%AB%E9%9C%B2%23) `66.9K 🔥` `+21%`
1. [周深阿信在鸟巢修提词器 (Zhou Shen and Ashin are repairing the teleprompter in the Bird's Nest)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E9%98%BF%E4%BF%A1%E5%9C%A8%E9%B8%9F%E5%B7%A2%E4%BF%AE%E6%8F%90%E8%AF%8D%E5%99%A8%23) `66.9K 🔥` `+35%`
1. [孙颖莎甜妹攻击](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%94%9C%E5%A6%B9%E6%94%BB%E5%87%BB%23) `66.9K 🔥` `+35%`
1. [赖清德跪拜日本殖民者 (Lai Ching-te knelt down to worship the Japanese colonizers)](https://s.weibo.com/weibo?q=%23%E8%B5%96%E6%B8%85%E5%BE%B7%E8%B7%AA%E6%8B%9C%E6%97%A5%E6%9C%AC%E6%AE%96%E6%B0%91%E8%80%85%23) `66.9K 🔥` `+35%`
1. [国际乒联惊叹王楚钦的球感](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E4%B9%92%E8%81%94%E6%83%8A%E5%8F%B9%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%9A%84%E7%90%83%E6%84%9F%23) `66.9K 🔥` `+35%`
1. [煎饼夏天 enemy (pancake summer enemy)](https://s.weibo.com/weibo?q=%23%E7%85%8E%E9%A5%BC%E5%A4%8F%E5%A4%A9%20enemy%23) `66.9K 🔥` `+35%`
1. [感觉妈妈才是初代甜妹](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E5%A6%88%E5%A6%88%E6%89%8D%E6%98%AF%E5%88%9D%E4%BB%A3%E7%94%9C%E5%A6%B9%23) `66.8K 🔥` `+35%`
1. [已证实安第斯病毒具备人际传播能力](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E8%AF%81%E5%AE%9E%E5%AE%89%E7%AC%AC%E6%96%AF%E7%97%85%E6%AF%92%E5%85%B7%E5%A4%87%E4%BA%BA%E9%99%85%E4%BC%A0%E6%92%AD%E8%83%BD%E5%8A%9B%23) `66.8K 🔥` `+35%`
1. [丈夫背叛女子哭晕妹妹套塑料袋急救](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E8%83%8C%E5%8F%9B%E5%A5%B3%E5%AD%90%E5%93%AD%E6%99%95%E5%A6%B9%E5%A6%B9%E5%A5%97%E5%A1%91%E6%96%99%E8%A2%8B%E6%80%A5%E6%95%91%23) `66.8K 🔥` `+35%`
1. [广东男篮绝杀 (Guangdong Men’s Basketball Team’s Defeat)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E7%94%B7%E7%AF%AE%E7%BB%9D%E6%9D%80%23) `66.8K 🔥` `+35%`
1. [国乒女团晋级决赛](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A2%E6%99%8B%E7%BA%A7%E5%86%B3%E8%B5%9B%23) `66.8K 🔥` `+35%`
1. [Cui71 韩国游戏 (Cui71 Korean game)](https://s.weibo.com/weibo?q=%23Cui71%20%E9%9F%A9%E5%9B%BD%E6%B8%B8%E6%88%8F%23) `66.8K 🔥` `+35%`
1. [孙颖莎逗笑邱贻可马琳 (Sun Yingsha makes Qiu Yike and Ma Lin laugh)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E9%80%97%E7%AC%91%E9%82%B1%E8%B4%BB%E5%8F%AF%E9%A9%AC%E7%90%B3%23) `83.9K 🔥`
1. [女子遭8年爱人背叛哭到呼吸碱中毒](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%81%AD8%E5%B9%B4%E7%88%B1%E4%BA%BA%E8%83%8C%E5%8F%9B%E5%93%AD%E5%88%B0%E5%91%BC%E5%90%B8%E7%A2%B1%E4%B8%AD%E6%AF%92%23) `72.9K 🔥`
1. [29岁未婚育女子宫颈癌离世 (29-year-old unmarried woman with childbirth died of cervical cancer)](https://s.weibo.com/weibo?q=%2329%E5%B2%81%E6%9C%AA%E5%A9%9A%E8%82%B2%E5%A5%B3%E5%AD%90%E5%AE%AB%E9%A2%88%E7%99%8C%E7%A6%BB%E4%B8%96%23) `72.8K 🔥`
1. [跑男收视率 浪姐没播 (Rating of Running Man: Sister Lang is not on the air)](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E6%94%B6%E8%A7%86%E7%8E%87%20%E6%B5%AA%E5%A7%90%E6%B2%A1%E6%92%AD%23) `66.9K 🔥`
1. [中国男团1比1法国 (Chinese men's team 1-1 France)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%9B%A21%E6%AF%941%E6%B3%95%E5%9B%BD%23) `361.9K 🔥` `-68%`
1. [怪不得虫子总围着头顶飞 (No wonder bugs always fly around your head)](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E8%99%AB%E5%AD%90%E6%80%BB%E5%9B%B4%E7%9D%80%E5%A4%B4%E9%A1%B6%E9%A3%9E%23) `94.0K 🔥` `-27%`
1. [王楚钦15比13科顿](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A615%E6%AF%9413%E7%A7%91%E9%A1%BF%23) `88.4K 🔥` `-57%`
1. [伦敦世乒赛半决赛 (London World Table Tennis Championships semi-finals)](https://s.weibo.com/weibo?q=%23%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B%E5%8D%8A%E5%86%B3%E8%B5%9B%23) `78.1K 🔥` `-86%`
1. [王楚钦vs科顿 (Wang Chuqin vs Cotton)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E7%A7%91%E9%A1%BF%23) `72.0K 🔥` `-74%`
1. [中国男团1比0法国](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%9B%A21%E6%AF%940%E6%B3%95%E5%9B%BD%23) `66.9K 🔥` `-38%`

Updated at 2026-05-10 07:02:29

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
