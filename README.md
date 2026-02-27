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

1. [现在就出发4 (Let's go now 4)](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%23) `1.1M 🔥` `NEW`
1. [丈夫准备给诞下5胞胎老婆送黄金](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E5%87%86%E5%A4%87%E7%BB%99%E8%AF%9E%E4%B8%8B5%E8%83%9E%E8%83%8E%E8%80%81%E5%A9%86%E9%80%81%E9%BB%84%E9%87%91%23) `787.6K 🔥` `NEW`
1. [京东百亿超市大补贴超便宜](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E7%99%BE%E4%BA%BF%E8%B6%85%E5%B8%82%E5%A4%A7%E8%A1%A5%E8%B4%B4%E8%B6%85%E4%BE%BF%E5%AE%9C%23) `563.2K 🔥` `NEW`
1. [周冬雨自曝和余文乐录恋综很走心](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%86%AC%E9%9B%A8%E8%87%AA%E6%9B%9D%E5%92%8C%E4%BD%99%E6%96%87%E4%B9%90%E5%BD%95%E6%81%8B%E7%BB%BC%E5%BE%88%E8%B5%B0%E5%BF%83%23) `553.1K 🔥` `NEW`
1. [千元机或将消失](https://s.weibo.com/weibo?q=%23%E5%8D%83%E5%85%83%E6%9C%BA%E6%88%96%E5%B0%86%E6%B6%88%E5%A4%B1%23) `244.7K 🔥` `NEW`
1. [小徐六级277分](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%BE%90%E5%85%AD%E7%BA%A7277%E5%88%86%23) `243.4K 🔥` `NEW`
1. [BLACKPINK GO MV](https://s.weibo.com/weibo?q=%23BLACKPINK%20GO%20MV%23) `232.9K 🔥` `NEW`
1. [陈熠vs桥本帆乃香](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%86%A0vs%E6%A1%A5%E6%9C%AC%E5%B8%86%E4%B9%83%E9%A6%99%23) `163.5K 🔥` `NEW`
1. [极客湾](https://s.weibo.com/weibo?q=%23%E6%9E%81%E5%AE%A2%E6%B9%BE%23) `158.3K 🔥` `NEW`
1. [姐姐姐夫](https://s.weibo.com/weibo?q=%23%E5%A7%90%E5%A7%90%E5%A7%90%E5%A4%AB%23) `158.2K 🔥` `NEW`
1. [aespa新歌 (aespa new song)](https://s.weibo.com/weibo?q=%23aespa%E6%96%B0%E6%AD%8C%23) `158.2K 🔥` `NEW`
1. [山东一工厂开工员工集体跪拜](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E4%B8%80%E5%B7%A5%E5%8E%82%E5%BC%80%E5%B7%A5%E5%91%98%E5%B7%A5%E9%9B%86%E4%BD%93%E8%B7%AA%E6%8B%9C%23) `158.0K 🔥` `NEW`
1. [秦彻 洇染瑰色](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%BD%BB%20%E6%B4%87%E6%9F%93%E7%91%B0%E8%89%B2%23) `123.9K 🔥` `NEW`
1. [比尔盖茨被曝是裸体夜店常客](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%B0%94%E7%9B%96%E8%8C%A8%E8%A2%AB%E6%9B%9D%E6%98%AF%E8%A3%B8%E4%BD%93%E5%A4%9C%E5%BA%97%E5%B8%B8%E5%AE%A2%23) `122.2K 🔥` `NEW`
1. [谷爱凌一边写作业一边和妈妈斗嘴](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E4%B8%80%E8%BE%B9%E5%86%99%E4%BD%9C%E4%B8%9A%E4%B8%80%E8%BE%B9%E5%92%8C%E5%A6%88%E5%A6%88%E6%96%97%E5%98%B4%23) `118.3K 🔥` `NEW`
1. [男子患肺结核过年串门引家族焦虑](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%82%A3%E8%82%BA%E7%BB%93%E6%A0%B8%E8%BF%87%E5%B9%B4%E4%B8%B2%E9%97%A8%E5%BC%95%E5%AE%B6%E6%97%8F%E7%84%A6%E8%99%91%23) `110.6K 🔥` `NEW`
1. [德国总理为宇树机器人竖大拇指](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E6%80%BB%E7%90%86%E4%B8%BA%E5%AE%87%E6%A0%91%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%AB%96%E5%A4%A7%E6%8B%87%E6%8C%87%23) `109.3K 🔥` `NEW`
1. [替父请假2小时致其被开除女子发声](https://s.weibo.com/weibo?q=%23%E6%9B%BF%E7%88%B6%E8%AF%B7%E5%81%872%E5%B0%8F%E6%97%B6%E8%87%B4%E5%85%B6%E8%A2%AB%E5%BC%80%E9%99%A4%E5%A5%B3%E5%AD%90%E5%8F%91%E5%A3%B0%23) `109.2K 🔥` `NEW`
1. [TheShy打乒乓球去了](https://s.weibo.com/weibo?q=%23TheShy%E6%89%93%E4%B9%92%E4%B9%93%E7%90%83%E5%8E%BB%E4%BA%86%23) `103.4K 🔥` `NEW`
1. [二十年前内娱吃的什么细糠啊](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E5%8D%81%E5%B9%B4%E5%89%8D%E5%86%85%E5%A8%B1%E5%90%83%E7%9A%84%E4%BB%80%E4%B9%88%E7%BB%86%E7%B3%A0%E5%95%8A%23) `103.0K 🔥` `NEW`
1. [王嘉尔抽到了热巴的礼物 (Wang Jiaer got a gift from Reba)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E6%8A%BD%E5%88%B0%E4%BA%86%E7%83%AD%E5%B7%B4%E7%9A%84%E7%A4%BC%E7%89%A9%23) `101.9K 🔥` `NEW`
1. [逐玉我对缘分小心翼翼MV](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E6%88%91%E5%AF%B9%E7%BC%98%E5%88%86%E5%B0%8F%E5%BF%83%E7%BF%BC%E7%BF%BCMV%23) `101.0K 🔥` `NEW`
1. [小鸡崽穿雨衣还有各种款式](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B8%A1%E5%B4%BD%E7%A9%BF%E9%9B%A8%E8%A1%A3%E8%BF%98%E6%9C%89%E5%90%84%E7%A7%8D%E6%AC%BE%E5%BC%8F%23) `91.8K 🔥` `NEW`
1. [谢娜毛坯生活精装朋友圈](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%AF%9B%E5%9D%AF%E7%94%9F%E6%B4%BB%E7%B2%BE%E8%A3%85%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `84.1K 🔥` `NEW`
1. [山西卫健委已严肃约谈市急救中心](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E5%8D%AB%E5%81%A5%E5%A7%94%E5%B7%B2%E4%B8%A5%E8%82%83%E7%BA%A6%E8%B0%88%E5%B8%82%E6%80%A5%E6%95%91%E4%B8%AD%E5%BF%83%23) `403.7K 🔥` `+57%`
1. [台独刘世芳亲属在大陆投资谋利](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E7%8B%AC%E5%88%98%E4%B8%96%E8%8A%B3%E4%BA%B2%E5%B1%9E%E5%9C%A8%E5%A4%A7%E9%99%86%E6%8A%95%E8%B5%84%E8%B0%8B%E5%88%A9%23) `264.1K 🔥` `+36%`
1. [BLACKPINK 回归](https://s.weibo.com/weibo?q=%23BLACKPINK%20%E5%9B%9E%E5%BD%92%23) `243.4K 🔥` `+24%`
1. [尘白禁区联动取消](https://s.weibo.com/weibo?q=%23%E5%B0%98%E7%99%BD%E7%A6%81%E5%8C%BA%E8%81%94%E5%8A%A8%E5%8F%96%E6%B6%88%23) `243.1K 🔥` `+23%`
1. [美国发动网攻侵占全球虚拟资产](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%8F%91%E5%8A%A8%E7%BD%91%E6%94%BB%E4%BE%B5%E5%8D%A0%E5%85%A8%E7%90%83%E8%99%9A%E6%8B%9F%E8%B5%84%E4%BA%A7%23) `665.6K 🔥`
1. [不建议在朋友圈展示技能](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%BB%BA%E8%AE%AE%E5%9C%A8%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%B1%95%E7%A4%BA%E6%8A%80%E8%83%BD%23) `264.9K 🔥`
1. [将微胖还给真正胖的人 (Return the slight fatness to the really fat people)](https://s.weibo.com/weibo?q=%23%E5%B0%86%E5%BE%AE%E8%83%96%E8%BF%98%E7%BB%99%E7%9C%9F%E6%AD%A3%E8%83%96%E7%9A%84%E4%BA%BA%23) `233.4K 🔥`
1. [程晓玥自曝孕晚期呼吸很困难](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%99%93%E7%8E%A5%E8%87%AA%E6%9B%9D%E5%AD%95%E6%99%9A%E6%9C%9F%E5%91%BC%E5%90%B8%E5%BE%88%E5%9B%B0%E9%9A%BE%23) `228.3K 🔥`
1. [赖清德罕见改口称中国大陆](https://s.weibo.com/weibo?q=%23%E8%B5%96%E6%B8%85%E5%BE%B7%E7%BD%95%E8%A7%81%E6%94%B9%E5%8F%A3%E7%A7%B0%E4%B8%AD%E5%9B%BD%E5%A4%A7%E9%99%86%23) `161.9K 🔥`
1. [白宇和前女友分手原因](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%AE%87%E5%92%8C%E5%89%8D%E5%A5%B3%E5%8F%8B%E5%88%86%E6%89%8B%E5%8E%9F%E5%9B%A0%23) `158.3K 🔥`
1. [陈飞宇半夜健身偶遇陈哲远](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%E5%8D%8A%E5%A4%9C%E5%81%A5%E8%BA%AB%E5%81%B6%E9%81%87%E9%99%88%E5%93%B2%E8%BF%9C%23) `158.3K 🔥`
1. [可以恢复视力的微习惯](https://s.weibo.com/weibo?q=%23%E5%8F%AF%E4%BB%A5%E6%81%A2%E5%A4%8D%E8%A7%86%E5%8A%9B%E7%9A%84%E5%BE%AE%E4%B9%A0%E6%83%AF%23) `158.3K 🔥`
1. [疑似白宇前女友发文](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E7%99%BD%E5%AE%87%E5%89%8D%E5%A5%B3%E5%8F%8B%E5%8F%91%E6%96%87%23) `158.0K 🔥`
1. [28岁小伙长期吃炸鸡抽出猪油汤血](https://s.weibo.com/weibo?q=%2328%E5%B2%81%E5%B0%8F%E4%BC%99%E9%95%BF%E6%9C%9F%E5%90%83%E7%82%B8%E9%B8%A1%E6%8A%BD%E5%87%BA%E7%8C%AA%E6%B2%B9%E6%B1%A4%E8%A1%80%23) `99.9K 🔥`
1. [逐玉定档全是柿子 (Zhuyu’s set files are all persimmons)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%AE%9A%E6%A1%A3%E5%85%A8%E6%98%AF%E6%9F%BF%E5%AD%90%23) `288.1K 🔥` `-73%`
1. [父亲退还18.8万彩礼新娘发声 (Bride speaks out after father returns 188,000 yuan gift)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E9%80%80%E8%BF%9818.8%E4%B8%87%E5%BD%A9%E7%A4%BC%E6%96%B0%E5%A8%98%E5%8F%91%E5%A3%B0%23) `243.5K 🔥` `-69%`
1. [何与虞书欣 二搭](https://s.weibo.com/weibo?q=%23%E4%BD%95%E4%B8%8E%E8%99%9E%E4%B9%A6%E6%AC%A3%20%E4%BA%8C%E6%90%AD%23) `240.3K 🔥` `-50%`
1. [金泰梨对杨幂比心 (Kim Tae-ri is in love with Yang Mi)](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%B3%B0%E6%A2%A8%E5%AF%B9%E6%9D%A8%E5%B9%82%E6%AF%94%E5%BF%83%23) `157.9K 🔥` `-21%`
1. [FIBA社媒称中国男篮偷走胜利 (FIBA social media said the Chinese men's basketball team stole the victory)](https://s.weibo.com/weibo?q=%23FIBA%E7%A4%BE%E5%AA%92%E7%A7%B0%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AE%E5%81%B7%E8%B5%B0%E8%83%9C%E5%88%A9%23) `138.4K 🔥` `-40%`
1. [最容易胖肚子的一种食物](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%AE%B9%E6%98%93%E8%83%96%E8%82%9A%E5%AD%90%E7%9A%84%E4%B8%80%E7%A7%8D%E9%A3%9F%E7%89%A9%23) `119.6K 🔥` `-24%`
1. [杨幂Prada顶级待遇 (Yang Mi Prada top treatment)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82Prada%E9%A1%B6%E7%BA%A7%E5%BE%85%E9%81%87%23) `114.9K 🔥` `-26%`
1. [南京档案馆找到谷爱凌外婆户籍卡 (Grandma Gu Ailing’s household registration card found in Nanjing Archives)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E4%BA%AC%E6%A1%A3%E6%A1%88%E9%A6%86%E6%89%BE%E5%88%B0%E8%B0%B7%E7%88%B1%E5%87%8C%E5%A4%96%E5%A9%86%E6%88%B7%E7%B1%8D%E5%8D%A1%23) `101.1K 🔥` `-53%`
1. [淘宝图标 褪色](https://s.weibo.com/weibo?q=%23%E6%B7%98%E5%AE%9D%E5%9B%BE%E6%A0%87%20%E8%A4%AA%E8%89%B2%23) `94.2K 🔥` `-23%`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `92.2K 🔥` `-24%`
1. [工业辣椒挂禁止食用提示牌引热议 (Industrial chili peppers are hung with warning signs prohibiting consumption, sparking heated debate)](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%B8%9A%E8%BE%A3%E6%A4%92%E6%8C%82%E7%A6%81%E6%AD%A2%E9%A3%9F%E7%94%A8%E6%8F%90%E7%A4%BA%E7%89%8C%E5%BC%95%E7%83%AD%E8%AE%AE%23) `85.7K 🔥` `-44%`
1. [逐玉定档](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%AE%9A%E6%A1%A3%23) `83.1K 🔥` `-47%`

Updated at 2026-02-27 14:03:31

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
