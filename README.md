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

1. [爱情公寓的结局在这一刻释怀了 (The ending of love apartment is relieved at this moment)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E7%9A%84%E7%BB%93%E5%B1%80%E5%9C%A8%E8%BF%99%E4%B8%80%E5%88%BB%E9%87%8A%E6%80%80%E4%BA%86%23) `969.7K 🔥` `NEW`
1. [三星折叠屏薄到离谱了](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%E6%8A%98%E5%8F%A0%E5%B1%8F%E8%96%84%E5%88%B0%E7%A6%BB%E8%B0%B1%E4%BA%86%23) `929.1K 🔥` `NEW`
1. [王楚钦1比2徐海东](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A61%E6%AF%942%E5%BE%90%E6%B5%B7%E4%B8%9C%23) `929.0K 🔥` `NEW`
1. [昭阳公主开播](https://s.weibo.com/weibo?q=%23%E6%98%AD%E9%98%B3%E5%85%AC%E4%B8%BB%E5%BC%80%E6%92%AD%23) `845.1K 🔥` `NEW`
1. [台风红霞预计周末登陆](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%BA%A2%E9%9C%9E%E9%A2%84%E8%AE%A1%E5%91%A8%E6%9C%AB%E7%99%BB%E9%99%86%23) `674.4K 🔥` `NEW`
1. [大爷摸知了猴3小时赚近400元](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%88%B7%E6%91%B8%E7%9F%A5%E4%BA%86%E7%8C%B43%E5%B0%8F%E6%97%B6%E8%B5%9A%E8%BF%91400%E5%85%83%23) `623.3K 🔥` `NEW`
1. [理想新MEGA内饰曝光](https://s.weibo.com/weibo?q=%23%E7%90%86%E6%83%B3%E6%96%B0MEGA%E5%86%85%E9%A5%B0%E6%9B%9D%E5%85%89%23) `538.9K 🔥` `NEW`
1. [男子AI伪造烂水果仅退款连累全县](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90AI%E4%BC%AA%E9%80%A0%E7%83%82%E6%B0%B4%E6%9E%9C%E4%BB%85%E9%80%80%E6%AC%BE%E8%BF%9E%E7%B4%AF%E5%85%A8%E5%8E%BF%23) `502.2K 🔥` `NEW`
1. [这一秒过火追剧团](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E8%BF%BD%E5%89%A7%E5%9B%A2%23) `460.0K 🔥` `NEW`
1. [董璇张维伊当着小酒窝的面亲亲](https://s.weibo.com/weibo?q=%23%E8%91%A3%E7%92%87%E5%BC%A0%E7%BB%B4%E4%BC%8A%E5%BD%93%E7%9D%80%E5%B0%8F%E9%85%92%E7%AA%9D%E7%9A%84%E9%9D%A2%E4%BA%B2%E4%BA%B2%23) `394.6K 🔥` `NEW`
1. [个人贷款新规8月1日起施行 (New regulations on personal loans will come into effect on August 1)](https://s.weibo.com/weibo?q=%23%E4%B8%AA%E4%BA%BA%E8%B4%B7%E6%AC%BE%E6%96%B0%E8%A7%848%E6%9C%881%E6%97%A5%E8%B5%B7%E6%96%BD%E8%A1%8C%23) `372.2K 🔥` `NEW`
1. [胡锡进提醒杨植麟梁文锋别去美国](https://s.weibo.com/weibo?q=%23%E8%83%A1%E9%94%A1%E8%BF%9B%E6%8F%90%E9%86%92%E6%9D%A8%E6%A4%8D%E9%BA%9F%E6%A2%81%E6%96%87%E9%94%8B%E5%88%AB%E5%8E%BB%E7%BE%8E%E5%9B%BD%23) `347.3K 🔥` `NEW`
1. [建议婚前谈话全国普及](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A9%9A%E5%89%8D%E8%B0%88%E8%AF%9D%E5%85%A8%E5%9B%BD%E6%99%AE%E5%8F%8A%23) `346.4K 🔥` `NEW`
1. [A380备降杭州乘客被困机舱10小时](https://s.weibo.com/weibo?q=%23A380%E5%A4%87%E9%99%8D%E6%9D%AD%E5%B7%9E%E4%B9%98%E5%AE%A2%E8%A2%AB%E5%9B%B0%E6%9C%BA%E8%88%B110%E5%B0%8F%E6%97%B6%23) `344.2K 🔥` `NEW`
1. [苦难果然是文学的温床](https://s.weibo.com/weibo?q=%23%E8%8B%A6%E9%9A%BE%E6%9E%9C%E7%84%B6%E6%98%AF%E6%96%87%E5%AD%A6%E7%9A%84%E6%B8%A9%E5%BA%8A%23) `338.0K 🔥` `NEW`
1. [张伟丽鲁豫对谈几度泪目](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BC%9F%E4%B8%BD%E9%B2%81%E8%B1%AB%E5%AF%B9%E8%B0%88%E5%87%A0%E5%BA%A6%E6%B3%AA%E7%9B%AE%23) `336.6K 🔥` `NEW`
1. [梁文锋 格局](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%96%87%E9%94%8B%20%E6%A0%BC%E5%B1%80%23) `331.0K 🔥` `NEW`
1. [陈妍希姐姐追星张凌赫](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E5%A7%90%E5%A7%90%E8%BF%BD%E6%98%9F%E5%BC%A0%E5%87%8C%E8%B5%AB%23) `323.2K 🔥` `NEW`
1. [男子对女同事开黄腔被打遭开除称不公](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%AF%B9%E5%A5%B3%E5%90%8C%E4%BA%8B%E5%BC%80%E9%BB%84%E8%85%94%E8%A2%AB%E6%89%93%E9%81%AD%E5%BC%80%E9%99%A4%E7%A7%B0%E4%B8%8D%E5%85%AC%23) `313.3K 🔥` `NEW`
1. [这一秒过火直播](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E7%9B%B4%E6%92%AD%23) `303.2K 🔥` `NEW`
1. [个人所得税重回第三大税种 (Personal income tax returns to third largest tax category)](https://s.weibo.com/weibo?q=%23%E4%B8%AA%E4%BA%BA%E6%89%80%E5%BE%97%E7%A8%8E%E9%87%8D%E5%9B%9E%E7%AC%AC%E4%B8%89%E5%A4%A7%E7%A8%8E%E7%A7%8D%23) `302.0K 🔥` `NEW`
1. [山东魏桥4比5山东鲁能](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E9%AD%8F%E6%A1%A54%E6%AF%945%E5%B1%B1%E4%B8%9C%E9%B2%81%E8%83%BD%23) `301.5K 🔥` `NEW`
1. [这一秒过火](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%23) `280.0K 🔥` `NEW`
1. [留几手向葛夕道歉](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%87%A0%E6%89%8B%E5%90%91%E8%91%9B%E5%A4%95%E9%81%93%E6%AD%89%23) `241.2K 🔥` `NEW`
1. [梁文峰称DeepSeek只有一条主线](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%96%87%E5%B3%B0%E7%A7%B0DeepSeek%E5%8F%AA%E6%9C%89%E4%B8%80%E6%9D%A1%E4%B8%BB%E7%BA%BF%23) `239.7K 🔥` `NEW`
1. [2026乒超联赛](https://s.weibo.com/weibo?q=%232026%E4%B9%92%E8%B6%85%E8%81%94%E8%B5%9B%23) `237.9K 🔥` `NEW`
1. [李宏毅孔雪儿新剧第一集就圆房](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%8F%E6%AF%85%E5%AD%94%E9%9B%AA%E5%84%BF%E6%96%B0%E5%89%A7%E7%AC%AC%E4%B8%80%E9%9B%86%E5%B0%B1%E5%9C%86%E6%88%BF%23) `237.0K 🔥` `NEW`
1. [山东魏桥8比6山东鲁能](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E9%AD%8F%E6%A1%A58%E6%AF%946%E5%B1%B1%E4%B8%9C%E9%B2%81%E8%83%BD%23) `232.3K 🔥` `NEW`
1. [美国6艘巡逻舰现身南海](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD6%E8%89%98%E5%B7%A1%E9%80%BB%E8%88%B0%E7%8E%B0%E8%BA%AB%E5%8D%97%E6%B5%B7%23) `227.6K 🔥` `NEW`
1. [上海偶遇赞达亚荷兰弟](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%81%B6%E9%81%87%E8%B5%9E%E8%BE%BE%E4%BA%9A%E8%8D%B7%E5%85%B0%E5%BC%9F%23) `222.1K 🔥` `NEW`
1. [王楚钦周启豪2比1全开源徐海东 (Wang Chuqin, Zhou Qihao and Xu Haidong all opened up 2 to 1)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%91%A8%E5%90%AF%E8%B1%AA2%E6%AF%941%E5%85%A8%E5%BC%80%E6%BA%90%E5%BE%90%E6%B5%B7%E4%B8%9C%23) `208.6K 🔥` `NEW`
1. [商家诱导消费请香停业整顿7天](https://s.weibo.com/weibo?q=%23%E5%95%86%E5%AE%B6%E8%AF%B1%E5%AF%BC%E6%B6%88%E8%B4%B9%E8%AF%B7%E9%A6%99%E5%81%9C%E4%B8%9A%E6%95%B4%E9%A1%BF7%E5%A4%A9%23) `202.9K 🔥` `NEW`
1. [周星驰把张小斐迪丽热巴整害羞了](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E6%8A%8A%E5%BC%A0%E5%B0%8F%E6%96%90%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%95%B4%E5%AE%B3%E7%BE%9E%E4%BA%86%23) `201.8K 🔥` `NEW`
1. [女子买理财7万多本金一天亏157元](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B9%B0%E7%90%86%E8%B4%A27%E4%B8%87%E5%A4%9A%E6%9C%AC%E9%87%91%E4%B8%80%E5%A4%A9%E4%BA%8F157%E5%85%83%23) `199.7K 🔥` `NEW`
1. [电梯里不转身的都是狠人](https://s.weibo.com/weibo?q=%23%E7%94%B5%E6%A2%AF%E9%87%8C%E4%B8%8D%E8%BD%AC%E8%BA%AB%E7%9A%84%E9%83%BD%E6%98%AF%E7%8B%A0%E4%BA%BA%23) `196.7K 🔥` `NEW`
1. [haerin新cha好萌](https://s.weibo.com/weibo?q=%23haerin%E6%96%B0cha%E5%A5%BD%E8%90%8C%23) `180.0K 🔥` `NEW`
1. [人缘好的人结婚是这样的](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%BC%98%E5%A5%BD%E7%9A%84%E4%BA%BA%E7%BB%93%E5%A9%9A%E6%98%AF%E8%BF%99%E6%A0%B7%E7%9A%84%23) `170.8K 🔥` `NEW`
1. [滔搏暴力打折甩卖耐克库存](https://s.weibo.com/weibo?q=%23%E6%BB%94%E6%90%8F%E6%9A%B4%E5%8A%9B%E6%89%93%E6%8A%98%E7%94%A9%E5%8D%96%E8%80%90%E5%85%8B%E5%BA%93%E5%AD%98%23) `2.0M 🔥` `+619%`
1. [谁敢认这是娜扎](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%95%A2%E8%AE%A4%E8%BF%99%E6%98%AF%E5%A8%9C%E6%89%8E%23) `534.4K 🔥` `+223%`
1. [谢贤遗嘱附带多项约束条款 (Xie Xian’s will comes with many binding clauses)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E9%81%97%E5%98%B1%E9%99%84%E5%B8%A6%E5%A4%9A%E9%A1%B9%E7%BA%A6%E6%9D%9F%E6%9D%A1%E6%AC%BE%23) `522.2K 🔥` `+82%`
1. [AI演员生成毛孔瑕疵 真人演员磨皮](https://s.weibo.com/weibo?q=%23AI%E6%BC%94%E5%91%98%E7%94%9F%E6%88%90%E6%AF%9B%E5%AD%94%E7%91%95%E7%96%B5%20%E7%9C%9F%E4%BA%BA%E6%BC%94%E5%91%98%E7%A3%A8%E7%9A%AE%23) `450.5K 🔥` `+56%`
1. [闫闯被指数年前曾过失致人死亡 (Yan Chuang was found guilty of negligent death a few years ago)](https://s.weibo.com/weibo?q=%23%E9%97%AB%E9%97%AF%E8%A2%AB%E6%8C%87%E6%95%B0%E5%B9%B4%E5%89%8D%E6%9B%BE%E8%BF%87%E5%A4%B1%E8%87%B4%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `439.6K 🔥` `+52%`
1. [王楚然美得像游戏CG](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%BE%8E%E5%BE%97%E5%83%8F%E6%B8%B8%E6%88%8FCG%23) `334.7K 🔥` `+104%`
1. [梁文锋四小时投资人会议实录](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%96%87%E9%94%8B%E5%9B%9B%E5%B0%8F%E6%97%B6%E6%8A%95%E8%B5%84%E4%BA%BA%E4%BC%9A%E8%AE%AE%E5%AE%9E%E5%BD%95%23) `314.7K 🔥` `+75%`
1. [2026数字丝路发展论坛](https://s.weibo.com/weibo?q=%232026%E6%95%B0%E5%AD%97%E4%B8%9D%E8%B7%AF%E5%8F%91%E5%B1%95%E8%AE%BA%E5%9D%9B%23) `929.8K 🔥`
1. [第一个发明睡帽的人简直就是天才](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8F%91%E6%98%8E%E7%9D%A1%E5%B8%BD%E7%9A%84%E4%BA%BA%E7%AE%80%E7%9B%B4%E5%B0%B1%E6%98%AF%E5%A4%A9%E6%89%8D%23) `928.1K 🔥`
1. [田曦薇走路粉天菜](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%B5%B0%E8%B7%AF%E7%B2%89%E5%A4%A9%E8%8F%9C%23) `184.8K 🔥`
1. [为什么年轻人戒不掉熬夜 (Why can’t young people stop staying up late?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%B9%B4%E8%BD%BB%E4%BA%BA%E6%88%92%E4%B8%8D%E6%8E%89%E7%86%AC%E5%A4%9C%23) `173.3K 🔥`
1. [贝克汉姆秃顶了 (Beckham is bald)](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%85%8B%E6%B1%89%E5%A7%86%E7%A7%83%E9%A1%B6%E4%BA%86%23) `867.5K 🔥` `-47%`
1. [灿如繁星 数据异常](https://s.weibo.com/weibo?q=%23%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%20%E6%95%B0%E6%8D%AE%E5%BC%82%E5%B8%B8%23) `223.1K 🔥` `-65%`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `192.2K 🔥` `-80%`

Updated at 2026-07-23 14:21:02

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
