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

1. [面试时就这样解释空窗期 (This is how you explain your window period during the interview)](https://s.weibo.com/weibo?q=%23%E9%9D%A2%E8%AF%95%E6%97%B6%E5%B0%B1%E8%BF%99%E6%A0%B7%E8%A7%A3%E9%87%8A%E7%A9%BA%E7%AA%97%E6%9C%9F%23) `194.2K 🔥` `NEW`
1. [其实旅游根本不用担心语言不通](https://s.weibo.com/weibo?q=%23%E5%85%B6%E5%AE%9E%E6%97%85%E6%B8%B8%E6%A0%B9%E6%9C%AC%E4%B8%8D%E7%94%A8%E6%8B%85%E5%BF%83%E8%AF%AD%E8%A8%80%E4%B8%8D%E9%80%9A%23) `62.6K 🔥` `NEW`
1. [应聘店长因乙肝携带被拒录用](https://s.weibo.com/weibo?q=%23%E5%BA%94%E8%81%98%E5%BA%97%E9%95%BF%E5%9B%A0%E4%B9%99%E8%82%9D%E6%90%BA%E5%B8%A6%E8%A2%AB%E6%8B%92%E5%BD%95%E7%94%A8%23) `62.3K 🔥` `NEW`
1. [日本民众为南京大屠杀流泪致歉](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%B0%91%E4%BC%97%E4%B8%BA%E5%8D%97%E4%BA%AC%E5%A4%A7%E5%B1%A0%E6%9D%80%E6%B5%81%E6%B3%AA%E8%87%B4%E6%AD%89%23) `62.2K 🔥` `NEW`
1. [96年女生远洋货轮当大副月入1万美元](https://s.weibo.com/weibo?q=%2396%E5%B9%B4%E5%A5%B3%E7%94%9F%E8%BF%9C%E6%B4%8B%E8%B4%A7%E8%BD%AE%E5%BD%93%E5%A4%A7%E5%89%AF%E6%9C%88%E5%85%A51%E4%B8%87%E7%BE%8E%E5%85%83%23) `61.9K 🔥` `NEW`
1. [谢娜称演唱会票价覆盖不了成本](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E7%A7%B0%E6%BC%94%E5%94%B1%E4%BC%9A%E7%A5%A8%E4%BB%B7%E8%A6%86%E7%9B%96%E4%B8%8D%E4%BA%86%E6%88%90%E6%9C%AC%23) `61.8K 🔥` `NEW`
1. [王俊凯巅峰之夜全记录](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B7%85%E5%B3%B0%E4%B9%8B%E5%A4%9C%E5%85%A8%E8%AE%B0%E5%BD%95%23) `61.7K 🔥` `NEW`
1. [乌克兰与以色列爆发口水战](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E5%85%8B%E5%85%B0%E4%B8%8E%E4%BB%A5%E8%89%B2%E5%88%97%E7%88%86%E5%8F%91%E5%8F%A3%E6%B0%B4%E6%88%98%23) `61.7K 🔥` `NEW`
1. [刘浩存好会撩](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E5%A5%BD%E4%BC%9A%E6%92%A9%23) `61.6K 🔥` `NEW`
1. [鞠婧祎谈对行业的敬畏心](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E8%B0%88%E5%AF%B9%E8%A1%8C%E4%B8%9A%E7%9A%84%E6%95%AC%E7%95%8F%E5%BF%83%23) `61.5K 🔥` `NEW`
1. [现货黄金 (spot gold)](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E8%B4%A7%E9%BB%84%E9%87%91%23) `61.5K 🔥` `NEW`
1. [宇宙或仅剩约333亿年的寿命](https://s.weibo.com/weibo?q=%23%E5%AE%87%E5%AE%99%E6%88%96%E4%BB%85%E5%89%A9%E7%BA%A6333%E4%BA%BF%E5%B9%B4%E7%9A%84%E5%AF%BF%E5%91%BD%23) `314.8K 🔥` `-34%`
1. [男子借宿同学家致一死一伤案取消开庭](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%80%9F%E5%AE%BF%E5%90%8C%E5%AD%A6%E5%AE%B6%E8%87%B4%E4%B8%80%E6%AD%BB%E4%B8%80%E4%BC%A4%E6%A1%88%E5%8F%96%E6%B6%88%E5%BC%80%E5%BA%AD%23) `233.3K 🔥` `-51%`
1. [世界艺术与科技对话](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E8%89%BA%E6%9C%AF%E4%B8%8E%E7%A7%91%E6%8A%80%E5%AF%B9%E8%AF%9D%23) `199.1K 🔥` `-58%`
1. [孙杨向张豆豆挥拳的表情](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%90%91%E5%BC%A0%E8%B1%86%E8%B1%86%E6%8C%A5%E6%8B%B3%E7%9A%84%E8%A1%A8%E6%83%85%23) `197.8K 🔥` `-58%`
1. [多读书真的会影响你的三观](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E8%AF%BB%E4%B9%A6%E7%9C%9F%E7%9A%84%E4%BC%9A%E5%BD%B1%E5%93%8D%E4%BD%A0%E7%9A%84%E4%B8%89%E8%A7%82%23) `149.0K 🔥` `-51%`
1. [赵心童vs墨菲 (Zhao Xintong vs Murphy)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%BF%83%E7%AB%A5vs%E5%A2%A8%E8%8F%B2%23) `133.7K 🔥` `-79%`
1. [霍尔木兹海峡上演奇葩大戏](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E4%B8%8A%E6%BC%94%E5%A5%87%E8%91%A9%E5%A4%A7%E6%88%8F%23) `102.6K 🔥` `-59%`
1. [电脑涨价20%市场人流空荡荡](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%84%91%E6%B6%A8%E4%BB%B720%25%E5%B8%82%E5%9C%BA%E4%BA%BA%E6%B5%81%E7%A9%BA%E8%8D%A1%E8%8D%A1%23) `102.0K 🔥` `-59%`
1. [金价](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `101.9K 🔥` `-57%`
1. [老式水果为何消失了](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%BC%8F%E6%B0%B4%E6%9E%9C%E4%B8%BA%E4%BD%95%E6%B6%88%E5%A4%B1%E4%BA%86%23) `101.1K 🔥` `-57%`
1. [谭松韵任嘉伦 二搭 (Tan Songyun and Ren Jialun second partner)](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E4%BB%BB%E5%98%89%E4%BC%A6%20%E4%BA%8C%E6%90%AD%23) `100.7K 🔥` `-56%`
1. [高铁上C座D座齐刷刷伸手](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%93%81%E4%B8%8AC%E5%BA%A7D%E5%BA%A7%E9%BD%90%E5%88%B7%E5%88%B7%E4%BC%B8%E6%89%8B%23) `99.9K 🔥` `-55%`
1. [婆婆一次性给足三年20万保姆费](https://s.weibo.com/weibo?q=%23%E5%A9%86%E5%A9%86%E4%B8%80%E6%AC%A1%E6%80%A7%E7%BB%99%E8%B6%B3%E4%B8%89%E5%B9%B420%E4%B8%87%E4%BF%9D%E5%A7%86%E8%B4%B9%23) `99.5K 🔥` `-67%`
1. [拍照显瘦20斤姿势](https://s.weibo.com/weibo?q=%23%E6%8B%8D%E7%85%A7%E6%98%BE%E7%98%A620%E6%96%A4%E5%A7%BF%E5%8A%BF%23) `99.0K 🔥` `-52%`
1. [韩国梨泰院惨案救人英雄被发现死亡](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%A2%A8%E6%B3%B0%E9%99%A2%E6%83%A8%E6%A1%88%E6%95%91%E4%BA%BA%E8%8B%B1%E9%9B%84%E8%A2%AB%E5%8F%91%E7%8E%B0%E6%AD%BB%E4%BA%A1%23) `98.3K 🔥` `-37%`
1. [历届北京大学生电影节影帝影后](https://s.weibo.com/weibo?q=%23%E5%8E%86%E5%B1%8A%E5%8C%97%E4%BA%AC%E5%A4%A7%E5%AD%A6%E7%94%9F%E7%94%B5%E5%BD%B1%E8%8A%82%E5%BD%B1%E5%B8%9D%E5%BD%B1%E5%90%8E%23) `87.5K 🔥` `-60%`
1. [唐嫣新剧 假发](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E6%96%B0%E5%89%A7%20%E5%81%87%E5%8F%91%23) `87.2K 🔥` `-60%`
1. [女子身份证不离身1000万存款被转走](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%BA%AB%E4%BB%BD%E8%AF%81%E4%B8%8D%E7%A6%BB%E8%BA%AB1000%E4%B8%87%E5%AD%98%E6%AC%BE%E8%A2%AB%E8%BD%AC%E8%B5%B0%23) `78.7K 🔥` `-38%`
1. [女子洁癖严重结婚19年无法同房](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%B4%81%E7%99%96%E4%B8%A5%E9%87%8D%E7%BB%93%E5%A9%9A19%E5%B9%B4%E6%97%A0%E6%B3%95%E5%90%8C%E6%88%BF%23) `78.6K 🔥` `-52%`
1. [转走储户1800万银行员工喝药轻生](https://s.weibo.com/weibo?q=%23%E8%BD%AC%E8%B5%B0%E5%82%A8%E6%88%B71800%E4%B8%87%E9%93%B6%E8%A1%8C%E5%91%98%E5%B7%A5%E5%96%9D%E8%8D%AF%E8%BD%BB%E7%94%9F%23) `71.6K 🔥` `-32%`
1. [唐嫣叫胡歌宝总 (Tang Yan calls Mr. Hu Gebao)](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E5%8F%AB%E8%83%A1%E6%AD%8C%E5%AE%9D%E6%80%BB%23) `71.5K 🔥` `-54%`
1. [凯凯拍的颜颜发](https://s.weibo.com/weibo?q=%23%E5%87%AF%E5%87%AF%E6%8B%8D%E7%9A%84%E9%A2%9C%E9%A2%9C%E5%8F%91%23) `71.1K 🔥` `-51%`
1. [霸王茶姬异物系购买人投放](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E5%BC%82%E7%89%A9%E7%B3%BB%E8%B4%AD%E4%B9%B0%E4%BA%BA%E6%8A%95%E6%94%BE%23) `70.2K 🔥` `-44%`
1. [油价又大涨了](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E5%8F%88%E5%A4%A7%E6%B6%A8%E4%BA%86%23) `69.6K 🔥` `-40%`
1. [特朗普再次无视英王室规矩拍国王肩膀](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%86%8D%E6%AC%A1%E6%97%A0%E8%A7%86%E8%8B%B1%E7%8E%8B%E5%AE%A4%E8%A7%84%E7%9F%A9%E6%8B%8D%E5%9B%BD%E7%8E%8B%E8%82%A9%E8%86%80%23) `62.7K 🔥` `-52%`
1. [何以笙箫默当年赵默笙的假发套 (Why Shengxiaomo Zhao Mosheng's wig)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E4%BB%A5%E7%AC%99%E7%AE%AB%E9%BB%98%E5%BD%93%E5%B9%B4%E8%B5%B5%E9%BB%98%E7%AC%99%E7%9A%84%E5%81%87%E5%8F%91%E5%A5%97%23) `62.6K 🔥` `-52%`
1. [胖东来回应249元奢侈品毛巾](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E5%9B%9E%E5%BA%94249%E5%85%83%E5%A5%A2%E4%BE%88%E5%93%81%E6%AF%9B%E5%B7%BE%23) `62.5K 🔥` `-36%`
1. [23岁中国女孩在澳被两女子打成重伤 (A 23-year-old Chinese girl was seriously injured by two women in Australia)](https://s.weibo.com/weibo?q=%2323%E5%B2%81%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%A9%E5%9C%A8%E6%BE%B3%E8%A2%AB%E4%B8%A4%E5%A5%B3%E5%AD%90%E6%89%93%E6%88%90%E9%87%8D%E4%BC%A4%23) `62.5K 🔥` `-37%`
1. [曾沛慈合照含灿量好高](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%90%88%E7%85%A7%E5%90%AB%E7%81%BF%E9%87%8F%E5%A5%BD%E9%AB%98%23) `62.5K 🔥` `-60%`
1. [刘耀文宋亚轩 小宇](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E5%AE%8B%E4%BA%9A%E8%BD%A9%20%E5%B0%8F%E5%AE%87%23) `62.4K 🔥` `-46%`
1. [孙怡什么时候才能原谅现偶](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E6%89%8D%E8%83%BD%E5%8E%9F%E8%B0%85%E7%8E%B0%E5%81%B6%23) `62.3K 🔥` `-29%`
1. [保姆将幼童关狗笼自己只顾玩手机](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%A7%86%E5%B0%86%E5%B9%BC%E7%AB%A5%E5%85%B3%E7%8B%97%E7%AC%BC%E8%87%AA%E5%B7%B1%E5%8F%AA%E9%A1%BE%E7%8E%A9%E6%89%8B%E6%9C%BA%23) `62.2K 🔥` `-30%`
1. [阿姨菜场豪横买肉取消支付70多万 (Haoheng canceled the payment of more than 700,000 yuan for buying meat at Auntie Market)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%A7%A8%E8%8F%9C%E5%9C%BA%E8%B1%AA%E6%A8%AA%E4%B9%B0%E8%82%89%E5%8F%96%E6%B6%88%E6%94%AF%E4%BB%9870%E5%A4%9A%E4%B8%87%23) `62.1K 🔥` `-60%`
1. [斯诺克](https://s.weibo.com/weibo?q=%23%E6%96%AF%E8%AF%BA%E5%85%8B%23) `62.0K 🔥` `-47%`
1. [1岁宝宝走路险摔倒瞬间伸出一排手](https://s.weibo.com/weibo?q=%231%E5%B2%81%E5%AE%9D%E5%AE%9D%E8%B5%B0%E8%B7%AF%E9%99%A9%E6%91%94%E5%80%92%E7%9E%AC%E9%97%B4%E4%BC%B8%E5%87%BA%E4%B8%80%E6%8E%92%E6%89%8B%23) `61.9K 🔥` `-30%`
1. [曝iPhoneFold定价14999元](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhoneFold%E5%AE%9A%E4%BB%B714999%E5%85%83%23) `61.6K 🔥` `-25%`
1. [林子烨 下巴后缩 (Lin Ziye’s chin recedes)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%90%E7%83%A8%20%E4%B8%8B%E5%B7%B4%E5%90%8E%E7%BC%A9%23) `61.5K 🔥` `-75%`

Updated at 2026-04-30 02:18:07

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
