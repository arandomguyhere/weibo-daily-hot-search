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

1. [一组数据读懂中国经济底气 (A set of data to understand China’s economic confidence)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%BB%84%E6%95%B0%E6%8D%AE%E8%AF%BB%E6%87%82%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E5%BA%95%E6%B0%94%23) `681.9K 🔥` `NEW`
1. [BLG官宣Flandre加入](https://s.weibo.com/weibo?q=%23BLG%E5%AE%98%E5%AE%A3Flandre%E5%8A%A0%E5%85%A5%23) `674.3K 🔥` `NEW`
1. [张本智和4比2松岛辉空](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C4%E6%AF%942%E6%9D%BE%E5%B2%9B%E8%BE%89%E7%A9%BA%23) `592.0K 🔥` `NEW`
1. [哪吒之魔童降世七周年产粮节](https://s.weibo.com/weibo?q=%23%E5%93%AA%E5%90%92%E4%B9%8B%E9%AD%94%E7%AB%A5%E9%99%8D%E4%B8%96%E4%B8%83%E5%91%A8%E5%B9%B4%E4%BA%A7%E7%B2%AE%E8%8A%82%23) `541.9K 🔥` `NEW`
1. [樊振东入选中国品牌青年榜](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%85%A5%E9%80%89%E4%B8%AD%E5%9B%BD%E5%93%81%E7%89%8C%E9%9D%92%E5%B9%B4%E6%A6%9C%23) `385.0K 🔥` `NEW`
1. [叠纸心意 周边](https://s.weibo.com/weibo?q=%23%E5%8F%A0%E7%BA%B8%E5%BF%83%E6%84%8F%20%E5%91%A8%E8%BE%B9%23) `382.9K 🔥` `NEW`
1. [iPhone17下周或涨价](https://s.weibo.com/weibo?q=%23iPhone17%E4%B8%8B%E5%91%A8%E6%88%96%E6%B6%A8%E4%BB%B7%23) `369.8K 🔥` `NEW`
1. [台风白海豚没登陆就倒水](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%E6%B2%A1%E7%99%BB%E9%99%86%E5%B0%B1%E5%80%92%E6%B0%B4%23) `366.4K 🔥` `NEW`
1. [新疆陌生人的婚礼宴席挤满各地网友](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%96%86%E9%99%8C%E7%94%9F%E4%BA%BA%E7%9A%84%E5%A9%9A%E7%A4%BC%E5%AE%B4%E5%B8%AD%E6%8C%A4%E6%BB%A1%E5%90%84%E5%9C%B0%E7%BD%91%E5%8F%8B%23) `363.0K 🔥` `NEW`
1. [金智秀直播力挺哥哥](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E7%9B%B4%E6%92%AD%E5%8A%9B%E6%8C%BA%E5%93%A5%E5%93%A5%23) `360.6K 🔥` `NEW`
1. [00后制冰厂老板回应年入千万 (Ice factory owner born in 2000 responds to the annual income of tens of millions)](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E5%88%B6%E5%86%B0%E5%8E%82%E8%80%81%E6%9D%BF%E5%9B%9E%E5%BA%94%E5%B9%B4%E5%85%A5%E5%8D%83%E4%B8%87%23) `351.7K 🔥` `NEW`
1. [渤海首个千亿方大气田一期开发项目全面投产](https://s.weibo.com/weibo?q=%23%E6%B8%A4%E6%B5%B7%E9%A6%96%E4%B8%AA%E5%8D%83%E4%BA%BF%E6%96%B9%E5%A4%A7%E6%B0%94%E7%94%B0%E4%B8%80%E6%9C%9F%E5%BC%80%E5%8F%91%E9%A1%B9%E7%9B%AE%E5%85%A8%E9%9D%A2%E6%8A%95%E4%BA%A7%23) `315.6K 🔥` `NEW`
1. [时代少年团第四张专辑](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%AC%AC%E5%9B%9B%E5%BC%A0%E4%B8%93%E8%BE%91%23) `315.2K 🔥` `NEW`
1. [多名运动员入选中国品牌青年榜](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%90%8D%E8%BF%90%E5%8A%A8%E5%91%98%E5%85%A5%E9%80%89%E4%B8%AD%E5%9B%BD%E5%93%81%E7%89%8C%E9%9D%92%E5%B9%B4%E6%A6%9C%23) `305.3K 🔥` `NEW`
1. [预制娃](https://s.weibo.com/weibo?q=%23%E9%A2%84%E5%88%B6%E5%A8%83%23) `285.3K 🔥` `NEW`
1. [一诺入选中国品牌青年榜](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E5%85%A5%E9%80%89%E4%B8%AD%E5%9B%BD%E5%93%81%E7%89%8C%E9%9D%92%E5%B9%B4%E6%A6%9C%23) `246.2K 🔥` `NEW`
1. [杨幂我54岁](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%88%9154%E5%B2%81%23) `234.0K 🔥` `NEW`
1. [中国品牌青年榜](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%93%81%E7%89%8C%E9%9D%92%E5%B9%B4%E6%A6%9C%23) `233.2K 🔥` `NEW`
1. [这蛋糕也太秃然了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E8%9B%8B%E7%B3%95%E4%B9%9F%E5%A4%AA%E7%A7%83%E7%84%B6%E4%BA%86%23) `225.7K 🔥` `NEW`
1. [宇树科技中一签需缴7.54万元](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E4%B8%AD%E4%B8%80%E7%AD%BE%E9%9C%80%E7%BC%B47.54%E4%B8%87%E5%85%83%23) `213.6K 🔥` `NEW`
1. [关晓彤喊话披荆斩棘冲冲冲 (Guan Xiaotong’s slogan is to overcome all obstacles and rush forward)](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%96%8A%E8%AF%9D%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E5%86%B2%E5%86%B2%E5%86%B2%23) `540.5K 🔥` `+192%`
1. [九门吴老狗变干尸 (Jiumen Wu old dog turns into mummy)](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E5%90%B4%E8%80%81%E7%8B%97%E5%8F%98%E5%B9%B2%E5%B0%B8%23) `413.1K 🔥` `+104%`
1. [无穷小亮 曹操摔碗](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%A9%B7%E5%B0%8F%E4%BA%AE%20%E6%9B%B9%E6%93%8D%E6%91%94%E7%A2%97%23) `357.0K 🔥` `+24%`
1. [苹果官网删除千问使用手册](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%AE%98%E7%BD%91%E5%88%A0%E9%99%A4%E5%8D%83%E9%97%AE%E4%BD%BF%E7%94%A8%E6%89%8B%E5%86%8C%23) `352.5K 🔥` `+109%`
1. [白海豚最大可能登陆地点](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E6%9C%80%E5%A4%A7%E5%8F%AF%E8%83%BD%E7%99%BB%E9%99%86%E5%9C%B0%E7%82%B9%23) `805.4K 🔥`
1. [田曦薇没刘海差点认不出来](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%B2%A1%E5%88%98%E6%B5%B7%E5%B7%AE%E7%82%B9%E8%AE%A4%E4%B8%8D%E5%87%BA%E6%9D%A5%23) `380.7K 🔥`
1. [韩雨彤 鼻子 (Han Yutong nose)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E9%9B%A8%E5%BD%A4%20%E9%BC%BB%E5%AD%90%23) `378.2K 🔥`
1. [儿子去世老人要查孙子血缘儿媳拒绝](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E5%8E%BB%E4%B8%96%E8%80%81%E4%BA%BA%E8%A6%81%E6%9F%A5%E5%AD%99%E5%AD%90%E8%A1%80%E7%BC%98%E5%84%BF%E5%AA%B3%E6%8B%92%E7%BB%9D%23) `377.6K 🔥`
1. [古二曝繁花剧组有人吸毒](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E4%BA%8C%E6%9B%9D%E7%B9%81%E8%8A%B1%E5%89%A7%E7%BB%84%E6%9C%89%E4%BA%BA%E5%90%B8%E6%AF%92%23) `375.0K 🔥`
1. [曹骏圈内人缘](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E5%9C%88%E5%86%85%E4%BA%BA%E7%BC%98%23) `373.4K 🔥`
1. [长崎将把南京大屠杀改为南京事件](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%B4%8E%E5%B0%86%E6%8A%8A%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%B1%A0%E6%9D%80%E6%94%B9%E4%B8%BA%E5%8D%97%E4%BA%AC%E4%BA%8B%E4%BB%B6%23) `366.7K 🔥`
1. [荷兰弟婚礼 瞒着全世界办了三天](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E5%BC%9F%E5%A9%9A%E7%A4%BC%20%E7%9E%92%E7%9D%80%E5%85%A8%E4%B8%96%E7%95%8C%E5%8A%9E%E4%BA%86%E4%B8%89%E5%A4%A9%23) `359.2K 🔥`
1. [左航晒耳洞 (Zuo Hang gets his ears pierced)](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E8%88%AA%E6%99%92%E8%80%B3%E6%B4%9E%23) `355.7K 🔥`
1. [iPhone18Pro 涨价](https://s.weibo.com/weibo?q=%23iPhone18Pro%20%E6%B6%A8%E4%BB%B7%23) `336.1K 🔥`
1. [泰国嫌犯供述杀害中国富商之子过程](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E5%AB%8C%E7%8A%AF%E4%BE%9B%E8%BF%B0%E6%9D%80%E5%AE%B3%E4%B8%AD%E5%9B%BD%E5%AF%8C%E5%95%86%E4%B9%8B%E5%AD%90%E8%BF%87%E7%A8%8B%23) `325.6K 🔥`
1. [唐九洲看了披哥阵容天塌了](https://s.weibo.com/weibo?q=%23%E5%94%90%E4%B9%9D%E6%B4%B2%E7%9C%8B%E4%BA%86%E6%8A%AB%E5%93%A5%E9%98%B5%E5%AE%B9%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `263.9K 🔥`
1. [披荆斩棘阵容官宣 (Official announcement of the lineup to overcome all obstacles)](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `1.1M 🔥` `-34%`
1. [酥就是油多 脆就是糖多](https://s.weibo.com/weibo?q=%23%E9%85%A5%E5%B0%B1%E6%98%AF%E6%B2%B9%E5%A4%9A%20%E8%84%86%E5%B0%B1%E6%98%AF%E7%B3%96%E5%A4%9A%23) `553.7K 🔥` `-26%`
1. [王楚钦入选中国品牌青年榜 (Wang Chuqin was selected into the China Brand Youth List)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%85%A5%E9%80%89%E4%B8%AD%E5%9B%BD%E5%93%81%E7%89%8C%E9%9D%92%E5%B9%B4%E6%A6%9C%23) `357.1K 🔥` `-38%`
1. [王传君 披荆斩棘 (Wang Chuanjun overcoming obstacles)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%20%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%23) `351.2K 🔥` `-39%`
1. [邵兵上披哥认人发了狠忘了情](https://s.weibo.com/weibo?q=%23%E9%82%B5%E5%85%B5%E4%B8%8A%E6%8A%AB%E5%93%A5%E8%AE%A4%E4%BA%BA%E5%8F%91%E4%BA%86%E7%8B%A0%E5%BF%98%E4%BA%86%E6%83%85%23) `348.9K 🔥` `-43%`
1. [孕妇生病 硬抗](https://s.weibo.com/weibo?q=%23%E5%AD%95%E5%A6%87%E7%94%9F%E7%97%85%20%E7%A1%AC%E6%8A%97%23) `278.5K 🔥` `-31%`
1. [全上海都在偶遇赵丽颖](https://s.weibo.com/weibo?q=%23%E5%85%A8%E4%B8%8A%E6%B5%B7%E9%83%BD%E5%9C%A8%E5%81%B6%E9%81%87%E8%B5%B5%E4%B8%BD%E9%A2%96%23) `267.7K 🔥` `-33%`
1. [J人是这样备注的](https://s.weibo.com/weibo?q=%23J%E4%BA%BA%E6%98%AF%E8%BF%99%E6%A0%B7%E5%A4%87%E6%B3%A8%E7%9A%84%23) `246.9K 🔥` `-40%`
1. [Lisa十周年行程争议](https://s.weibo.com/weibo?q=%23Lisa%E5%8D%81%E5%91%A8%E5%B9%B4%E8%A1%8C%E7%A8%8B%E4%BA%89%E8%AE%AE%23) `246.6K 🔥` `-37%`
1. [费大厨小炒肉比赛 没人试吃 (Chef Fei’s stir-fried pork competition, no one tried it)](https://s.weibo.com/weibo?q=%23%E8%B4%B9%E5%A4%A7%E5%8E%A8%E5%B0%8F%E7%82%92%E8%82%89%E6%AF%94%E8%B5%9B%20%E6%B2%A1%E4%BA%BA%E8%AF%95%E5%90%83%23) `238.2K 🔥` `-41%`
1. [薛之谦杭州站退换票方案](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%9D%AD%E5%B7%9E%E7%AB%99%E9%80%80%E6%8D%A2%E7%A5%A8%E6%96%B9%E6%A1%88%23) `227.3K 🔥` `-30%`
1. [微信状态 新型日记本](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E7%8A%B6%E6%80%81%20%E6%96%B0%E5%9E%8B%E6%97%A5%E8%AE%B0%E6%9C%AC%23) `216.2K 🔥` `-45%`
1. [上半年国内手机销量TOP30出炉 (Top 30 domestic mobile phone sales in the first half of the year released)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%8D%8A%E5%B9%B4%E5%9B%BD%E5%86%85%E6%89%8B%E6%9C%BA%E9%94%80%E9%87%8FTOP30%E5%87%BA%E7%82%89%23) `215.7K 🔥` `-47%`
1. [上海极端强降雨](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E6%9E%81%E7%AB%AF%E5%BC%BA%E9%99%8D%E9%9B%A8%23) `213.0K 🔥` `-48%`
1. [杨幂 老年人作息](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%20%E8%80%81%E5%B9%B4%E4%BA%BA%E4%BD%9C%E6%81%AF%23) `211.7K 🔥` `-28%`

Updated at 2026-08-09 15:10:49

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
