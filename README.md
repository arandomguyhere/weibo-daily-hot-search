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

1. [中方宣布特朗普访华日期 (China announces date of Trump’s visit to China)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%AE%A3%E5%B8%83%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E5%8D%8E%E6%97%A5%E6%9C%9F%23) `3.2M 🔥` `NEW`
1. [桂林文旅致歉](https://s.weibo.com/weibo?q=%23%E6%A1%82%E6%9E%97%E6%96%87%E6%97%85%E8%87%B4%E6%AD%89%23) `1.9M 🔥` `NEW`
1. [神行者8定义豪华新旗舰](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E8%A1%8C%E8%80%858%E5%AE%9A%E4%B9%89%E8%B1%AA%E5%8D%8E%E6%96%B0%E6%97%97%E8%88%B0%23) `1.1M 🔥` `NEW`
1. [17岁女生写作业至凌晨外出复印失联](https://s.weibo.com/weibo?q=%2317%E5%B2%81%E5%A5%B3%E7%94%9F%E5%86%99%E4%BD%9C%E4%B8%9A%E8%87%B3%E5%87%8C%E6%99%A8%E5%A4%96%E5%87%BA%E5%A4%8D%E5%8D%B0%E5%A4%B1%E8%81%94%23) `1.1M 🔥` `NEW`
1. [文班亚马被驱逐](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%8F%AD%E4%BA%9A%E9%A9%AC%E8%A2%AB%E9%A9%B1%E9%80%90%23) `987.8K 🔥` `NEW`
1. [曝神仙肉换男主](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%A5%9E%E4%BB%99%E8%82%89%E6%8D%A2%E7%94%B7%E4%B8%BB%23) `980.9K 🔥` `NEW`
1. [刘宪华 歌手2026](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%AA%E5%8D%8E%20%E6%AD%8C%E6%89%8B2026%23) `976.7K 🔥` `NEW`
1. [特朗普将于近日访华](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%B0%86%E4%BA%8E%E8%BF%91%E6%97%A5%E8%AE%BF%E5%8D%8E%23) `709.2K 🔥` `NEW`
1. [15岁女孩被强奸杀害父母最新发声](https://s.weibo.com/weibo?q=%2315%E5%B2%81%E5%A5%B3%E5%AD%A9%E8%A2%AB%E5%BC%BA%E5%A5%B8%E6%9D%80%E5%AE%B3%E7%88%B6%E6%AF%8D%E6%9C%80%E6%96%B0%E5%8F%91%E5%A3%B0%23) `645.2K 🔥` `NEW`
1. [许昕回应国乒双冠](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%98%95%E5%9B%9E%E5%BA%94%E5%9B%BD%E4%B9%92%E5%8F%8C%E5%86%A0%23) `610.0K 🔥` `NEW`
1. [天舟十号发射任务圆满成功 (The Tianzhou-10 launch mission was a complete success)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E8%88%9F%E5%8D%81%E5%8F%B7%E5%8F%91%E5%B0%84%E4%BB%BB%E5%8A%A1%E5%9C%86%E6%BB%A1%E6%88%90%E5%8A%9F%23) `545.5K 🔥` `NEW`
1. [NBA](https://s.weibo.com/weibo?q=%23NBA%23) `360.3K 🔥` `NEW`
1. [苹果或将打破对台积电依赖](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%88%96%E5%B0%86%E6%89%93%E7%A0%B4%E5%AF%B9%E5%8F%B0%E7%A7%AF%E7%94%B5%E4%BE%9D%E8%B5%96%23) `295.5K 🔥` `NEW`
1. [王皓比王楚钦还激动](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9A%93%E6%AF%94%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%BF%98%E6%BF%80%E5%8A%A8%23) `292.6K 🔥` `NEW`
1. [张凌赫拍的绿色](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%8B%8D%E7%9A%84%E7%BB%BF%E8%89%B2%23) `287.7K 🔥` `NEW`
1. [饭店石锅爬密密麻麻白色小虫](https://s.weibo.com/weibo?q=%23%E9%A5%AD%E5%BA%97%E7%9F%B3%E9%94%85%E7%88%AC%E5%AF%86%E5%AF%86%E9%BA%BB%E9%BA%BB%E7%99%BD%E8%89%B2%E5%B0%8F%E8%99%AB%23) `286.1K 🔥` `NEW`
1. [奇才状元签](https://s.weibo.com/weibo?q=%23%E5%A5%87%E6%89%8D%E7%8A%B6%E5%85%83%E7%AD%BE%23) `283.8K 🔥` `NEW`
1. [虞书欣GoldGala红毯路透](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3GoldGala%E7%BA%A2%E6%AF%AF%E8%B7%AF%E9%80%8F%23) `283.4K 🔥` `NEW`
1. [翘楚首发预告](https://s.weibo.com/weibo?q=%23%E7%BF%98%E6%A5%9A%E9%A6%96%E5%8F%91%E9%A2%84%E5%91%8A%23) `280.3K 🔥` `NEW`
1. [长七火箭将验证智慧飞行](https://s.weibo.com/weibo?q=%23%E9%95%BF%E4%B8%83%E7%81%AB%E7%AE%AD%E5%B0%86%E9%AA%8C%E8%AF%81%E6%99%BA%E6%85%A7%E9%A3%9E%E8%A1%8C%23) `279.3K 🔥` `NEW`
1. [王楚钦拥抱马龙 (Wang Chuqin hugs Ma Long)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%8B%A5%E6%8A%B1%E9%A9%AC%E9%BE%99%23) `266.7K 🔥` `NEW`
1. [张本智和称距离金牌依然非常遥远](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E7%A7%B0%E8%B7%9D%E7%A6%BB%E9%87%91%E7%89%8C%E4%BE%9D%E7%84%B6%E9%9D%9E%E5%B8%B8%E9%81%A5%E8%BF%9C%23) `254.1K 🔥` `NEW`
1. [女孩说妈妈不喜欢我爸爸一句话化解](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E8%AF%B4%E5%A6%88%E5%A6%88%E4%B8%8D%E5%96%9C%E6%AC%A2%E6%88%91%E7%88%B8%E7%88%B8%E4%B8%80%E5%8F%A5%E8%AF%9D%E5%8C%96%E8%A7%A3%23) `239.5K 🔥` `NEW`
1. [成毅狩谎宣传节奏](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E7%8B%A9%E8%B0%8E%E5%AE%A3%E4%BC%A0%E8%8A%82%E5%A5%8F%23) `237.2K 🔥` `NEW`
1. [武汉大学要走出谁闹谁有理](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E5%A4%A7%E5%AD%A6%E8%A6%81%E8%B5%B0%E5%87%BA%E8%B0%81%E9%97%B9%E8%B0%81%E6%9C%89%E7%90%86%23) `230.0K 🔥` `NEW`
1. [初代跑男](https://s.weibo.com/weibo?q=%23%E5%88%9D%E4%BB%A3%E8%B7%91%E7%94%B7%23) `229.3K 🔥` `NEW`
1. [藏海传2](https://s.weibo.com/weibo?q=%23%E8%97%8F%E6%B5%B7%E4%BC%A02%23) `228.2K 🔥` `NEW`
1. [深圳男篮晋级季后赛四强](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E7%94%B7%E7%AF%AE%E6%99%8B%E7%BA%A7%E5%AD%A3%E5%90%8E%E8%B5%9B%E5%9B%9B%E5%BC%BA%23) `225.4K 🔥` `NEW`
1. [中国潜水器发现深海生命绿洲 (Chinese submersible discovers deep-sea oasis of life)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%BD%9C%E6%B0%B4%E5%99%A8%E5%8F%91%E7%8E%B0%E6%B7%B1%E6%B5%B7%E7%94%9F%E5%91%BD%E7%BB%BF%E6%B4%B2%23) `1.4M 🔥` `+78%`
1. [疑似维嘉卖掉的衣服被马丁淘回来了](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E7%BB%B4%E5%98%89%E5%8D%96%E6%8E%89%E7%9A%84%E8%A1%A3%E6%9C%8D%E8%A2%AB%E9%A9%AC%E4%B8%81%E6%B7%98%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `706.5K 🔥` `+136%`
1. [王楚钦当选MVP](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%BD%93%E9%80%89MVP%23) `692.4K 🔥` `+223%`
1. [村民被眼镜王蛇咬伤打了13支血清 (A villager bitten by a king cobra received 13 doses of serum)](https://s.weibo.com/weibo?q=%23%E6%9D%91%E6%B0%91%E8%A2%AB%E7%9C%BC%E9%95%9C%E7%8E%8B%E8%9B%87%E5%92%AC%E4%BC%A4%E6%89%93%E4%BA%8613%E6%94%AF%E8%A1%80%E6%B8%85%23) `594.6K 🔥` `+121%`
1. [盼弟 来弟](https://s.weibo.com/weibo?q=%23%E7%9B%BC%E5%BC%9F%20%E6%9D%A5%E5%BC%9F%23) `542.3K 🔥` `+77%`
1. [何猷君关联公司近7亿元三亚拿地](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%8C%B7%E5%90%9B%E5%85%B3%E8%81%94%E5%85%AC%E5%8F%B8%E8%BF%917%E4%BA%BF%E5%85%83%E4%B8%89%E4%BA%9A%E6%8B%BF%E5%9C%B0%23) `297.0K 🔥` `+21%`
1. [德国跨国迷奸案涉华人高管名校学生](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E8%B7%A8%E5%9B%BD%E8%BF%B7%E5%A5%B8%E6%A1%88%E6%B6%89%E5%8D%8E%E4%BA%BA%E9%AB%98%E7%AE%A1%E5%90%8D%E6%A0%A1%E5%AD%A6%E7%94%9F%23) `294.3K 🔥` `+155%`
1. [汉坦病毒邮轮零号病人身份曝光 (Hantavirus cruise ship patient zero’s identity revealed)](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%E9%82%AE%E8%BD%AE%E9%9B%B6%E5%8F%B7%E7%97%85%E4%BA%BA%E8%BA%AB%E4%BB%BD%E6%9B%9D%E5%85%89%23) `277.4K 🔥` `+77%`
1. [吃出24块鸡头顾客被免单仍想市监介入 (The customer who ate 24 pieces of chicken head was exempted from the order but still wants the city supervisor to intervene)](https://s.weibo.com/weibo?q=%23%E5%90%83%E5%87%BA24%E5%9D%97%E9%B8%A1%E5%A4%B4%E9%A1%BE%E5%AE%A2%E8%A2%AB%E5%85%8D%E5%8D%95%E4%BB%8D%E6%83%B3%E5%B8%82%E7%9B%91%E4%BB%8B%E5%85%A5%23) `274.9K 🔥` `+83%`
1. [国家体育总局中国奥委会贺信](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E4%BD%93%E8%82%B2%E6%80%BB%E5%B1%80%E4%B8%AD%E5%9B%BD%E5%A5%A5%E5%A7%94%E4%BC%9A%E8%B4%BA%E4%BF%A1%23) `264.6K 🔥` `+29%`
1. [身体有炎症要忌口4种食物 (4 foods to avoid if you have inflammation in your body)](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BD%93%E6%9C%89%E7%82%8E%E7%97%87%E8%A6%81%E5%BF%8C%E5%8F%A34%E7%A7%8D%E9%A3%9F%E7%89%A9%23) `256.1K 🔥` `+48%`
1. [严浩翔正常毕业流程当中](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%AD%A3%E5%B8%B8%E6%AF%95%E4%B8%9A%E6%B5%81%E7%A8%8B%E5%BD%93%E4%B8%AD%23) `229.8K 🔥` `+34%`
1. [优酷官宣藏海传2等高分续作 (Youku officially announces high-scoring sequel to Hidden Haiden 2)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E9%85%B7%E5%AE%98%E5%AE%A3%E8%97%8F%E6%B5%B7%E4%BC%A02%E7%AD%89%E9%AB%98%E5%88%86%E7%BB%AD%E4%BD%9C%23) `1.1M 🔥`
1. [中国妇女报评OPPO母亲节文案](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A6%87%E5%A5%B3%E6%8A%A5%E8%AF%84OPPO%E6%AF%8D%E4%BA%B2%E8%8A%82%E6%96%87%E6%A1%88%23) `272.7K 🔥`
1. [有生之年还能看见猪肉下岗](https://s.weibo.com/weibo?q=%23%E6%9C%89%E7%94%9F%E4%B9%8B%E5%B9%B4%E8%BF%98%E8%83%BD%E7%9C%8B%E8%A7%81%E7%8C%AA%E8%82%89%E4%B8%8B%E5%B2%97%23) `272.1K 🔥`
1. [梁靖崑逆转张本智和](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%91%E9%80%86%E8%BD%AC%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `269.1K 🔥`
1. [国乒男团12连冠 (National table tennis men's team wins 12th consecutive championship)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A212%E8%BF%9E%E5%86%A0%23) `265.2K 🔥`
1. [巴萨2比0皇马](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%90%A82%E6%AF%940%E7%9A%87%E9%A9%AC%23) `236.6K 🔥`
1. [美客机撞到人致其被吸入引擎死亡 (US passenger plane hits man and dies after being sucked into engine)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AE%A2%E6%9C%BA%E6%92%9E%E5%88%B0%E4%BA%BA%E8%87%B4%E5%85%B6%E8%A2%AB%E5%90%B8%E5%85%A5%E5%BC%95%E6%93%8E%E6%AD%BB%E4%BA%A1%23) `228.7K 🔥`
1. [孙颖莎不停支招王曼昱 (Sun Yingsha keeps supporting Wang Manyu)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E4%B8%8D%E5%81%9C%E6%94%AF%E6%8B%9B%E7%8E%8B%E6%9B%BC%E6%98%B1%23) `228.1K 🔥`
1. [主角收视率 (Protagonist ratings)](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%E6%94%B6%E8%A7%86%E7%8E%87%23) `223.1K 🔥`
1. [国乒男团3比0大胜日本](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A23%E6%AF%940%E5%A4%A7%E8%83%9C%E6%97%A5%E6%9C%AC%23) `1.1M 🔥` `-70%`
1. [身体的炎症全部消失22个tips (22 tips to make all inflammation in your body disappear)](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BD%93%E7%9A%84%E7%82%8E%E7%97%87%E5%85%A8%E9%83%A8%E6%B6%88%E5%A4%B122%E4%B8%AAtips%23) `289.6K 🔥` `-55%`

Updated at 2026-05-11 09:23:04

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
