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

1. [以为库克真加入小米汽车了 (I thought Cook really joined Xiaomi Motors)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BA%E5%BA%93%E5%85%8B%E7%9C%9F%E5%8A%A0%E5%85%A5%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%E4%BA%86%23) `1.2M 🔥` `NEW`
1. [民政局称20岁小伙养6弟妹系人设](https://s.weibo.com/weibo?q=%23%E6%B0%91%E6%94%BF%E5%B1%80%E7%A7%B020%E5%B2%81%E5%B0%8F%E4%BC%99%E5%85%BB6%E5%BC%9F%E5%A6%B9%E7%B3%BB%E4%BA%BA%E8%AE%BE%23) `1.1M 🔥` `NEW`
1. [接英雄回家](https://s.weibo.com/weibo?q=%23%E6%8E%A5%E8%8B%B1%E9%9B%84%E5%9B%9E%E5%AE%B6%23) `921.6K 🔥` `NEW`
1. [国台办回应张凌赫被喊话赴台交流](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%8F%B0%E5%8A%9E%E5%9B%9E%E5%BA%94%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%A2%AB%E5%96%8A%E8%AF%9D%E8%B5%B4%E5%8F%B0%E4%BA%A4%E6%B5%81%23) `896.9K 🔥` `NEW`
1. [檀健次的好习惯](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E7%9A%84%E5%A5%BD%E4%B9%A0%E6%83%AF%23) `757.0K 🔥` `NEW`
1. [曝男明星KTV亲女网红](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%94%B7%E6%98%8E%E6%98%9FKTV%E4%BA%B2%E5%A5%B3%E7%BD%91%E7%BA%A2%23) `311.9K 🔥` `NEW`
1. [宋祖儿的脸 女娲炫技](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%96%E5%84%BF%E7%9A%84%E8%84%B8%20%E5%A5%B3%E5%A8%B2%E7%82%AB%E6%8A%80%23) `300.0K 🔥` `NEW`
1. [员工称不涨工资干不了3天后被离职](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A5%E7%A7%B0%E4%B8%8D%E6%B6%A8%E5%B7%A5%E8%B5%84%E5%B9%B2%E4%B8%8D%E4%BA%863%E5%A4%A9%E5%90%8E%E8%A2%AB%E7%A6%BB%E8%81%8C%23) `296.4K 🔥` `NEW`
1. [梅西姆巴佩又对上了](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%A5%BF%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%8F%88%E5%AF%B9%E4%B8%8A%E4%BA%86%23) `286.5K 🔥` `NEW`
1. [公共充电桩悄悄涨价](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%85%B1%E5%85%85%E7%94%B5%E6%A1%A9%E6%82%84%E6%82%84%E6%B6%A8%E4%BB%B7%23) `280.9K 🔥` `NEW`
1. [林子烨 5600不如和豆包聊 (Lin Ziye 5600 Why not chat with Doubao)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%90%E7%83%A8%205600%E4%B8%8D%E5%A6%82%E5%92%8C%E8%B1%86%E5%8C%85%E8%81%8A%23) `279.9K 🔥` `NEW`
1. [朱珠把保洁服穿出高定感](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E7%8F%A0%E6%8A%8A%E4%BF%9D%E6%B4%81%E6%9C%8D%E7%A9%BF%E5%87%BA%E9%AB%98%E5%AE%9A%E6%84%9F%23) `270.1K 🔥` `NEW`
1. [98年本科女孩做保洁爸妈认为扫大街](https://s.weibo.com/weibo?q=%2398%E5%B9%B4%E6%9C%AC%E7%A7%91%E5%A5%B3%E5%AD%A9%E5%81%9A%E4%BF%9D%E6%B4%81%E7%88%B8%E5%A6%88%E8%AE%A4%E4%B8%BA%E6%89%AB%E5%A4%A7%E8%A1%97%23) `258.2K 🔥` `NEW`
1. [外交部回应高市早苗拜鬼](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E5%9B%9E%E5%BA%94%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E6%8B%9C%E9%AC%BC%23) `239.5K 🔥` `NEW`
1. [10倍大牛股爆雷2万散户被埋](https://s.weibo.com/weibo?q=%2310%E5%80%8D%E5%A4%A7%E7%89%9B%E8%82%A1%E7%88%86%E9%9B%B72%E4%B8%87%E6%95%A3%E6%88%B7%E8%A2%AB%E5%9F%8B%23) `227.2K 🔥` `NEW`
1. [文班亚马确诊为脑震荡](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%8F%AD%E4%BA%9A%E9%A9%AC%E7%A1%AE%E8%AF%8A%E4%B8%BA%E8%84%91%E9%9C%87%E8%8D%A1%23) `218.5K 🔥` `NEW`
1. [女孩每月下腹剧痛检查发现是石女](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%AF%8F%E6%9C%88%E4%B8%8B%E8%85%B9%E5%89%A7%E7%97%9B%E6%A3%80%E6%9F%A5%E5%8F%91%E7%8E%B0%E6%98%AF%E7%9F%B3%E5%A5%B3%23) `211.4K 🔥` `NEW`
1. [吴千语晒照抱婴儿喂奶](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%8D%83%E8%AF%AD%E6%99%92%E7%85%A7%E6%8A%B1%E5%A9%B4%E5%84%BF%E5%96%82%E5%A5%B6%23) `197.6K 🔥` `NEW`
1. [女子脚踹保安被扇事件警方已立案](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%84%9A%E8%B8%B9%E4%BF%9D%E5%AE%89%E8%A2%AB%E6%89%87%E4%BA%8B%E4%BB%B6%E8%AD%A6%E6%96%B9%E5%B7%B2%E7%AB%8B%E6%A1%88%23) `185.9K 🔥` `NEW`
1. [多名消费者晒中了飞猪免单](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%90%8D%E6%B6%88%E8%B4%B9%E8%80%85%E6%99%92%E4%B8%AD%E4%BA%86%E9%A3%9E%E7%8C%AA%E5%85%8D%E5%8D%95%23) `172.9K 🔥` `NEW`
1. [lululemon质检结果 (lululemon quality inspection results)](https://s.weibo.com/weibo?q=%23lululemon%E8%B4%A8%E6%A3%80%E7%BB%93%E6%9E%9C%23) `170.0K 🔥` `NEW`
1. [国色芳华衍生收入3.7亿](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%89%B2%E8%8A%B3%E5%8D%8E%E8%A1%8D%E7%94%9F%E6%94%B6%E5%85%A53.7%E4%BA%BF%23) `160.3K 🔥` `NEW`
1. [王楚钦孙颖莎先后上训](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E5%85%88%E5%90%8E%E4%B8%8A%E8%AE%AD%23) `138.7K 🔥` `NEW`
1. [虞书欣戛纳生图](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%88%9B%E7%BA%B3%E7%94%9F%E5%9B%BE%23) `920.3K 🔥` `+152%`
1. [网传披荆斩棘6阵容](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%986%E9%98%B5%E5%AE%B9%23) `918.0K 🔥` `+49%`
1. [还好戴着它 (Good thing I'm wearing it)](https://s.weibo.com/weibo?q=%23%E8%BF%98%E5%A5%BD%E6%88%B4%E7%9D%80%E5%AE%83%23) `920.5K 🔥`
1. [终于知道为什么有些人做菜难吃了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E4%B8%BA%E4%BB%80%E4%B9%88%E6%9C%89%E4%BA%9B%E4%BA%BA%E5%81%9A%E8%8F%9C%E9%9A%BE%E5%90%83%E4%BA%86%23) `622.6K 🔥`
1. [全糖的写0脂 全脂的写0糖](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%B3%96%E7%9A%84%E5%86%990%E8%84%82%20%E5%85%A8%E8%84%82%E7%9A%84%E5%86%990%E7%B3%96%23) `441.6K 🔥`
1. [曹德旺说大不了把美国工厂关掉](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E5%BE%B7%E6%97%BA%E8%AF%B4%E5%A4%A7%E4%B8%8D%E4%BA%86%E6%8A%8A%E7%BE%8E%E5%9B%BD%E5%B7%A5%E5%8E%82%E5%85%B3%E6%8E%89%23) `488.2K 🔥` `-29%`
1. [詹姆斯暴扣杀死比赛](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E6%9A%B4%E6%89%A3%E6%9D%80%E6%AD%BB%E6%AF%94%E8%B5%9B%23) `315.6K 🔥` `-37%`
1. [陈妍希申请强制执行](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E7%94%B3%E8%AF%B7%E5%BC%BA%E5%88%B6%E6%89%A7%E8%A1%8C%23) `313.7K 🔥` `-37%`
1. [避孕套涨价原因 (Reasons for condom price increase)](https://s.weibo.com/weibo?q=%23%E9%81%BF%E5%AD%95%E5%A5%97%E6%B6%A8%E4%BB%B7%E5%8E%9F%E5%9B%A0%23) `305.8K 🔥` `-51%`
1. [GUCCI田曦薇张凌赫大片](https://s.weibo.com/weibo?q=%23GUCCI%E7%94%B0%E6%9B%A6%E8%96%87%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%A4%A7%E7%89%87%23) `305.0K 🔥` `-39%`
1. [华晨宇喂猫吃巧克力蛋糕](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E5%96%82%E7%8C%AB%E5%90%83%E5%B7%A7%E5%85%8B%E5%8A%9B%E8%9B%8B%E7%B3%95%23) `292.1K 🔥` `-41%`
1. [王安宇见面会票价](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E8%A7%81%E9%9D%A2%E4%BC%9A%E7%A5%A8%E4%BB%B7%23) `288.4K 🔥` `-53%`
1. [山城小栗旬老婆被前任骗钱后瘦80多斤](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%9F%8E%E5%B0%8F%E6%A0%97%E6%97%AC%E8%80%81%E5%A9%86%E8%A2%AB%E5%89%8D%E4%BB%BB%E9%AA%97%E9%92%B1%E5%90%8E%E7%98%A680%E5%A4%9A%E6%96%A4%23) `275.7K 🔥` `-25%`
1. [星巴克免费咖啡](https://s.weibo.com/weibo?q=%23%E6%98%9F%E5%B7%B4%E5%85%8B%E5%85%8D%E8%B4%B9%E5%92%96%E5%95%A1%23) `273.2K 🔥` `-44%`
1. [中国大蒜竟被列为国家安全威胁 (Chinese garlic is listed as a national security threat)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A4%A7%E8%92%9C%E7%AB%9F%E8%A2%AB%E5%88%97%E4%B8%BA%E5%9B%BD%E5%AE%B6%E5%AE%89%E5%85%A8%E5%A8%81%E8%83%81%23) `257.7K 🔥` `-58%`
1. [乘风2026三公帮唱](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E4%B8%89%E5%85%AC%E5%B8%AE%E5%94%B1%23) `214.2K 🔥` `-56%`
1. [断绝孩子手机上瘾最快的方法](https://s.weibo.com/weibo?q=%23%E6%96%AD%E7%BB%9D%E5%AD%A9%E5%AD%90%E6%89%8B%E6%9C%BA%E4%B8%8A%E7%98%BE%E6%9C%80%E5%BF%AB%E7%9A%84%E6%96%B9%E6%B3%95%23) `207.8K 🔥` `-44%`
1. [14岁女孩初次痛经查出双子宫双阴道](https://s.weibo.com/weibo?q=%2314%E5%B2%81%E5%A5%B3%E5%AD%A9%E5%88%9D%E6%AC%A1%E7%97%9B%E7%BB%8F%E6%9F%A5%E5%87%BA%E5%8F%8C%E5%AD%90%E5%AE%AB%E5%8F%8C%E9%98%B4%E9%81%93%23) `184.9K 🔥` `-44%`
1. [14岁女孩肠癌晚期腹痛半年以为痛经](https://s.weibo.com/weibo?q=%2314%E5%B2%81%E5%A5%B3%E5%AD%A9%E8%82%A0%E7%99%8C%E6%99%9A%E6%9C%9F%E8%85%B9%E7%97%9B%E5%8D%8A%E5%B9%B4%E4%BB%A5%E4%B8%BA%E7%97%9B%E7%BB%8F%23) `174.1K 🔥` `-41%`
1. [说好的谢楠乘风吴京在家带娃呢 (As promised, Xie Nan Chengfeng and Wu Jing are taking care of the baby at home.)](https://s.weibo.com/weibo?q=%23%E8%AF%B4%E5%A5%BD%E7%9A%84%E8%B0%A2%E6%A5%A0%E4%B9%98%E9%A3%8E%E5%90%B4%E4%BA%AC%E5%9C%A8%E5%AE%B6%E5%B8%A6%E5%A8%83%E5%91%A2%23) `172.7K 🔥` `-53%`
1. [文春 BTS](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%98%A5%20BTS%23) `169.0K 🔥` `-43%`
1. [挪用1700万女孩愿意坐牢换退款](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E7%94%A81700%E4%B8%87%E5%A5%B3%E5%AD%A9%E6%84%BF%E6%84%8F%E5%9D%90%E7%89%A2%E6%8D%A2%E9%80%80%E6%AC%BE%23) `166.7K 🔥` `-53%`
1. [贺峻霖答辩](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E7%AD%94%E8%BE%A9%23) `160.9K 🔥` `-39%`
1. [段奕宏参加烈士遗骸迎回仪式](https://s.weibo.com/weibo?q=%23%E6%AE%B5%E5%A5%95%E5%AE%8F%E5%8F%82%E5%8A%A0%E7%83%88%E5%A3%AB%E9%81%97%E9%AA%B8%E8%BF%8E%E5%9B%9E%E4%BB%AA%E5%BC%8F%23) `156.2K 🔥` `-58%`
1. [湖人2比0火箭 (Lakers 2-0 Rockets)](https://s.weibo.com/weibo?q=%23%E6%B9%96%E4%BA%BA2%E6%AF%940%E7%81%AB%E7%AE%AD%23) `139.0K 🔥` `-63%`
1. [伊朗抓住了美国的要害](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8A%93%E4%BD%8F%E4%BA%86%E7%BE%8E%E5%9B%BD%E7%9A%84%E8%A6%81%E5%AE%B3%23) `138.9K 🔥` `-61%`
1. [41岁詹姆斯折叠背扣 (41-year-old James folding back buckle)](https://s.weibo.com/weibo?q=%2341%E5%B2%81%E8%A9%B9%E5%A7%86%E6%96%AF%E6%8A%98%E5%8F%A0%E8%83%8C%E6%89%A3%23) `138.5K 🔥` `-63%`
1. [2026KPL春季赛最佳阵容候选人](https://s.weibo.com/weibo?q=%232026KPL%E6%98%A5%E5%AD%A3%E8%B5%9B%E6%9C%80%E4%BD%B3%E9%98%B5%E5%AE%B9%E5%80%99%E9%80%89%E4%BA%BA%23) `138.4K 🔥` `-44%`

Updated at 2026-04-22 17:00:11

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
