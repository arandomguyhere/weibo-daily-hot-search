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

1. [王楚钦vs科顿 (Wang Chuqin vs Cotton)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E7%A7%91%E9%A1%BF%23) `467.6K 🔥` `NEW`
1. [王楚钦15比13科顿](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A615%E6%AF%9413%E7%A7%91%E9%A1%BF%23) `153.3K 🔥` `NEW`
1. [中国男团1比0法国](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%9B%A21%E6%AF%940%E6%B3%95%E5%9B%BD%23) `148.6K 🔥` `NEW`
1. [中国男团1比1法国](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%9B%A21%E6%AF%941%E6%B3%95%E5%9B%BD%23) `23.9K 🔥` `NEW`
1. [马龙为男团半决赛开场](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E4%B8%BA%E7%94%B7%E5%9B%A2%E5%8D%8A%E5%86%B3%E8%B5%9B%E5%BC%80%E5%9C%BA%23) `23.0K 🔥` `NEW`
1. [伦敦世乒赛半决赛 (London World Table Tennis Championships semi-finals)](https://s.weibo.com/weibo?q=%23%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B%E5%8D%8A%E5%86%B3%E8%B5%9B%23) `532.5K 🔥` `+46%`
1. [太空快递跑出中国加速度](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E7%A9%BA%E5%BF%AB%E9%80%92%E8%B7%91%E5%87%BA%E4%B8%AD%E5%9B%BD%E5%8A%A0%E9%80%9F%E5%BA%A6%23) `251.4K 🔥` `+93%`
1. [吃米线有助于调节脂肪肝是谣言](https://s.weibo.com/weibo?q=%23%E5%90%83%E7%B1%B3%E7%BA%BF%E6%9C%89%E5%8A%A9%E4%BA%8E%E8%B0%83%E8%8A%82%E8%84%82%E8%82%AA%E8%82%9D%E6%98%AF%E8%B0%A3%E8%A8%80%23) `129.9K 🔥` `+22%`
1. [母亲节](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E8%8A%82%23) `93.2K 🔥` `+23%`
1. [交管队长回应被举报与女性举止亲密](https://s.weibo.com/weibo?q=%23%E4%BA%A4%E7%AE%A1%E9%98%9F%E9%95%BF%E5%9B%9E%E5%BA%94%E8%A2%AB%E4%B8%BE%E6%8A%A5%E4%B8%8E%E5%A5%B3%E6%80%A7%E4%B8%BE%E6%AD%A2%E4%BA%B2%E5%AF%86%23) `45.2K 🔥` `+31%`
1. [香港富豪孙女被绑架案细节披露 (Details of kidnapping case of Hong Kong rich man’s granddaughter revealed)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%AF%8C%E8%B1%AA%E5%AD%99%E5%A5%B3%E8%A2%AB%E7%BB%91%E6%9E%B6%E6%A1%88%E7%BB%86%E8%8A%82%E6%8A%AB%E9%9C%B2%23) `44.5K 🔥` `+21%`
1. [A哎 燕京啤酒是社交硬通货 (Ah, Yanjing Beer is social currency)](https://s.weibo.com/weibo?q=%23A%E5%93%8E%20%E7%87%95%E4%BA%AC%E5%95%A4%E9%85%92%E6%98%AF%E7%A4%BE%E4%BA%A4%E7%A1%AC%E9%80%9A%E8%B4%A7%23) `244.5K 🔥`
1. [何赛飞怒批姜贞羽](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B5%9B%E9%A3%9E%E6%80%92%E6%89%B9%E5%A7%9C%E8%B4%9E%E7%BE%BD%23) `147.7K 🔥`
1. [一根烟头烧掉212万 (One cigarette butt burns 2.12 million)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%A0%B9%E7%83%9F%E5%A4%B4%E7%83%A7%E6%8E%89212%E4%B8%87%23) `129.1K 🔥`
1. [怪不得虫子总围着头顶飞 (No wonder bugs always fly around your head)](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E8%99%AB%E5%AD%90%E6%80%BB%E5%9B%B4%E7%9D%80%E5%A4%B4%E9%A1%B6%E9%A3%9E%23) `95.9K 🔥`
1. [29岁未婚育女子宫颈癌离世 (29-year-old unmarried woman with childbirth died of cervical cancer)](https://s.weibo.com/weibo?q=%2329%E5%B2%81%E6%9C%AA%E5%A9%9A%E8%82%B2%E5%A5%B3%E5%AD%90%E5%AE%AB%E9%A2%88%E7%99%8C%E7%A6%BB%E4%B8%96%23) `60.9K 🔥`
1. [浪7三公是浪姐史上浓墨重彩的一笔](https://s.weibo.com/weibo?q=%23%E6%B5%AA7%E4%B8%89%E5%85%AC%E6%98%AF%E6%B5%AA%E5%A7%90%E5%8F%B2%E4%B8%8A%E6%B5%93%E5%A2%A8%E9%87%8D%E5%BD%A9%E7%9A%84%E4%B8%80%E7%AC%94%23) `59.4K 🔥`
1. [越来越理解什么叫事缓则圆 (I understand more and more what it means to slow things down and make things right)](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E6%9D%A5%E8%B6%8A%E7%90%86%E8%A7%A3%E4%BB%80%E4%B9%88%E5%8F%AB%E4%BA%8B%E7%BC%93%E5%88%99%E5%9C%86%23) `53.3K 🔥`
1. [孙颖莎逗笑邱贻可马琳 (Sun Yingsha makes Qiu Yike and Ma Lin laugh)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E9%80%97%E7%AC%91%E9%82%B1%E8%B4%BB%E5%8F%AF%E9%A9%AC%E7%90%B3%23) `47.4K 🔥`
1. [女子遭8年爱人背叛哭到呼吸碱中毒](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%81%AD8%E5%B9%B4%E7%88%B1%E4%BA%BA%E8%83%8C%E5%8F%9B%E5%93%AD%E5%88%B0%E5%91%BC%E5%90%B8%E7%A2%B1%E4%B8%AD%E6%AF%92%23) `47.4K 🔥`
1. [给阿嬷的情书票房破亿](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E7%A5%A8%E6%88%BF%E7%A0%B4%E4%BA%BF%23) `40.3K 🔥`
1. [安倍晋三遗孀陪赖清德跪日本人](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%80%8D%E6%99%8B%E4%B8%89%E9%81%97%E5%AD%80%E9%99%AA%E8%B5%96%E6%B8%85%E5%BE%B7%E8%B7%AA%E6%97%A5%E6%9C%AC%E4%BA%BA%23) `38.5K 🔥`
1. [国际足联急了](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E8%B6%B3%E8%81%94%E6%80%A5%E4%BA%86%23) `37.3K 🔥`
1. [21世纪大君夫人](https://s.weibo.com/weibo?q=%2321%E4%B8%96%E7%BA%AA%E5%A4%A7%E5%90%9B%E5%A4%AB%E4%BA%BA%23) `34.2K 🔥`
1. [一家三口候车室吃东西垃圾扔满地](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E5%80%99%E8%BD%A6%E5%AE%A4%E5%90%83%E4%B8%9C%E8%A5%BF%E5%9E%83%E5%9C%BE%E6%89%94%E6%BB%A1%E5%9C%B0%23) `32.8K 🔥`
1. [给六只猫猫同时洗澡](https://s.weibo.com/weibo?q=%23%E7%BB%99%E5%85%AD%E5%8F%AA%E7%8C%AB%E7%8C%AB%E5%90%8C%E6%97%B6%E6%B4%97%E6%BE%A1%23) `29.4K 🔥`
1. [丈夫背叛女子哭晕妹妹套塑料袋急救](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E8%83%8C%E5%8F%9B%E5%A5%B3%E5%AD%90%E5%93%AD%E6%99%95%E5%A6%B9%E5%A6%B9%E5%A5%97%E5%A1%91%E6%96%99%E8%A2%8B%E6%80%A5%E6%95%91%23) `25.7K 🔥`
1. [吴宜泽4比5希金斯 (Wu Yize 4 to 5 Higgins)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%9C%E6%B3%BD4%E6%AF%945%E5%B8%8C%E9%87%91%E6%96%AF%23) `24.2K 🔥`
1. [马龙为世乒赛开场 (Malone opens the World Table Tennis Championships)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E4%B8%BA%E4%B8%96%E4%B9%92%E8%B5%9B%E5%BC%80%E5%9C%BA%23) `23.7K 🔥`
1. [国际乒联惊叹王楚钦的球感](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E4%B9%92%E8%81%94%E6%83%8A%E5%8F%B9%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%9A%84%E7%90%83%E6%84%9F%23) `22.6K 🔥`
1. [已证实安第斯病毒具备人际传播能力](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E8%AF%81%E5%AE%9E%E5%AE%89%E7%AC%AC%E6%96%AF%E7%97%85%E6%AF%92%E5%85%B7%E5%A4%87%E4%BA%BA%E9%99%85%E4%BC%A0%E6%92%AD%E8%83%BD%E5%8A%9B%23) `22.4K 🔥`
1. [赖清德跪拜日本殖民者 (Lai Ching-te knelt down to worship the Japanese colonizers)](https://s.weibo.com/weibo?q=%23%E8%B5%96%E6%B8%85%E5%BE%B7%E8%B7%AA%E6%8B%9C%E6%97%A5%E6%9C%AC%E6%AE%96%E6%B0%91%E8%80%85%23) `22.2K 🔥`
1. [孙颖莎甜妹攻击](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%94%9C%E5%A6%B9%E6%94%BB%E5%87%BB%23) `21.9K 🔥`
1. [央视网更正锁电相关报道 (CCTV corrects reports related to power lockout)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E7%BD%91%E6%9B%B4%E6%AD%A3%E9%94%81%E7%94%B5%E7%9B%B8%E5%85%B3%E6%8A%A5%E9%81%93%23) `21.2K 🔥`
1. [周深五月天合唱 (Zhou Shen Mayday Chorus)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E4%BA%94%E6%9C%88%E5%A4%A9%E5%90%88%E5%94%B1%23) `21.2K 🔥`
1. [孙杨感谢母亲的强大](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E6%84%9F%E8%B0%A2%E6%AF%8D%E4%BA%B2%E7%9A%84%E5%BC%BA%E5%A4%A7%23) `21.2K 🔥`
1. [国乒女团晋级决赛](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A2%E6%99%8B%E7%BA%A7%E5%86%B3%E8%B5%9B%23) `21.2K 🔥`
1. [俄罗斯胜利日阅兵](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E8%83%9C%E5%88%A9%E6%97%A5%E9%98%85%E5%85%B5%23) `21.2K 🔥`
1. [女子打水光针后吃小龙虾满脸肉芽肿](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%89%93%E6%B0%B4%E5%85%89%E9%92%88%E5%90%8E%E5%90%83%E5%B0%8F%E9%BE%99%E8%99%BE%E6%BB%A1%E8%84%B8%E8%82%89%E8%8A%BD%E8%82%BF%23) `21.2K 🔥`
1. [周深阿信在鸟巢修提词器](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E9%98%BF%E4%BF%A1%E5%9C%A8%E9%B8%9F%E5%B7%A2%E4%BF%AE%E6%8F%90%E8%AF%8D%E5%99%A8%23) `21.2K 🔥`
1. [苏超 (Su Chao)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `21.2K 🔥`
1. [国乐无双 (Unparalleled Chinese Music)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%90%E6%97%A0%E5%8F%8C%23) `21.2K 🔥`
1. [麦当劳铲子](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E5%BD%93%E5%8A%B3%E9%93%B2%E5%AD%90%23) `21.2K 🔥`
1. [跑男收视率 浪姐没播 (Rating of Running Man: Sister Lang is not on the air)](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E6%94%B6%E8%A7%86%E7%8E%87%20%E6%B5%AA%E5%A7%90%E6%B2%A1%E6%92%AD%23) `78.2K 🔥` `-44%`
1. [这一秒过火 (This second went too far)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%23) `40.6K 🔥` `-23%`
1. [尼坤演唱会状态 (Nichkhun concert status)](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E5%9D%A4%E6%BC%94%E5%94%B1%E4%BC%9A%E7%8A%B6%E6%80%81%23) `30.6K 🔥` `-24%`
1. [美国女子做特殊癖好服务致对方身亡 (American woman performed a special fetish service and the other party died)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A5%B3%E5%AD%90%E5%81%9A%E7%89%B9%E6%AE%8A%E7%99%96%E5%A5%BD%E6%9C%8D%E5%8A%A1%E8%87%B4%E5%AF%B9%E6%96%B9%E8%BA%AB%E4%BA%A1%23) `28.0K 🔥` `-24%`
1. [Cui71 韩国游戏 (Cui71 Korean game)](https://s.weibo.com/weibo?q=%23Cui71%20%E9%9F%A9%E5%9B%BD%E6%B8%B8%E6%88%8F%23) `27.5K 🔥` `-28%`
1. [显微镜下的辣条](https://s.weibo.com/weibo?q=%23%E6%98%BE%E5%BE%AE%E9%95%9C%E4%B8%8B%E7%9A%84%E8%BE%A3%E6%9D%A1%23) `24.8K 🔥` `-24%`
1. [感觉妈妈才是初代甜妹](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E5%A6%88%E5%A6%88%E6%89%8D%E6%98%AF%E5%88%9D%E4%BB%A3%E7%94%9C%E5%A6%B9%23) `22.0K 🔥` `-21%`
1. [煎饼夏天 enemy (pancake summer enemy)](https://s.weibo.com/weibo?q=%23%E7%85%8E%E9%A5%BC%E5%A4%8F%E5%A4%A9%20enemy%23) `21.4K 🔥` `-26%`
1. [广东男篮绝杀](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E7%94%B7%E7%AF%AE%E7%BB%9D%E6%9D%80%23) `21.2K 🔥` `-30%`

Updated at 2026-05-10 05:23:27

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
