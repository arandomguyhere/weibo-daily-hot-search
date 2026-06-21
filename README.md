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

1. [伊朗因球员跑不动多次换人 (Iran made many substitutions because players could not move)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%9B%A0%E7%90%83%E5%91%98%E8%B7%91%E4%B8%8D%E5%8A%A8%E5%A4%9A%E6%AC%A1%E6%8D%A2%E4%BA%BA%23) `1.2M 🔥` `NEW`
1. [南部档案2](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%882%23) `858.2K 🔥` `NEW`
1. [龙舟经济火爆](https://s.weibo.com/weibo?q=%23%E9%BE%99%E8%88%9F%E7%BB%8F%E6%B5%8E%E7%81%AB%E7%88%86%23) `667.0K 🔥` `NEW`
1. [刘强东称将来不需要快递员](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%BC%BA%E4%B8%9C%E7%A7%B0%E5%B0%86%E6%9D%A5%E4%B8%8D%E9%9C%80%E8%A6%81%E5%BF%AB%E9%80%92%E5%91%98%23) `592.1K 🔥` `NEW`
1. [郑嘉颖在披哥和浪姐都被淘汰了](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%98%89%E9%A2%96%E5%9C%A8%E6%8A%AB%E5%93%A5%E5%92%8C%E6%B5%AA%E5%A7%90%E9%83%BD%E8%A2%AB%E6%B7%98%E6%B1%B0%E4%BA%86%23) `384.4K 🔥` `NEW`
1. [纸尿裤事件](https://s.weibo.com/weibo?q=%23%E7%BA%B8%E5%B0%BF%E8%A3%A4%E4%BA%8B%E4%BB%B6%23) `272.8K 🔥` `NEW`
1. [卢昱晓重游英国](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E9%87%8D%E6%B8%B8%E8%8B%B1%E5%9B%BD%23) `270.3K 🔥` `NEW`
1. [曝白玉兰场刊是各家团队自己撰写的](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BD%E7%8E%89%E5%85%B0%E5%9C%BA%E5%88%8A%E6%98%AF%E5%90%84%E5%AE%B6%E5%9B%A2%E9%98%9F%E8%87%AA%E5%B7%B1%E6%92%B0%E5%86%99%E7%9A%84%23) `267.2K 🔥` `NEW`
1. [纸尿裤调查记者公开信](https://s.weibo.com/weibo?q=%23%E7%BA%B8%E5%B0%BF%E8%A3%A4%E8%B0%83%E6%9F%A5%E8%AE%B0%E8%80%85%E5%85%AC%E5%BC%80%E4%BF%A1%23) `261.1K 🔥` `NEW`
1. [李耕耘 你们还要怎样](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%80%95%E8%80%98%20%E4%BD%A0%E4%BB%AC%E8%BF%98%E8%A6%81%E6%80%8E%E6%A0%B7%23) `261.0K 🔥` `NEW`
1. [赖伟明21年给刘浩存视频的评论 (Lai Weiming’s comments on Liu Haocun’s video in 2021)](https://s.weibo.com/weibo?q=%23%E8%B5%96%E4%BC%9F%E6%98%8E21%E5%B9%B4%E7%BB%99%E5%88%98%E6%B5%A9%E5%AD%98%E8%A7%86%E9%A2%91%E7%9A%84%E8%AF%84%E8%AE%BA%23) `259.5K 🔥` `NEW`
1. [磷酸铁锂卖爆了](https://s.weibo.com/weibo?q=%23%E7%A3%B7%E9%85%B8%E9%93%81%E9%94%82%E5%8D%96%E7%88%86%E4%BA%86%23) `259.4K 🔥` `NEW`
1. [杨超越 有效沟通](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%20%E6%9C%89%E6%95%88%E6%B2%9F%E9%80%9A%23) `258.3K 🔥` `NEW`
1. [刘耀文FE合照C位](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87FE%E5%90%88%E7%85%A7C%E4%BD%8D%23) `256.4K 🔥` `NEW`
1. [何宣林忘不了范玮琪为她发声](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%E5%BF%98%E4%B8%8D%E4%BA%86%E8%8C%83%E7%8E%AE%E7%90%AA%E4%B8%BA%E5%A5%B9%E5%8F%91%E5%A3%B0%23) `255.4K 🔥` `NEW`
1. [白鹿在睡丞磊在拍](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%9C%A8%E7%9D%A1%E4%B8%9E%E7%A3%8A%E5%9C%A8%E6%8B%8D%23) `254.6K 🔥` `NEW`
1. [为什么23点到凌晨3点一定要睡觉](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%8823%E7%82%B9%E5%88%B0%E5%87%8C%E6%99%A83%E7%82%B9%E4%B8%80%E5%AE%9A%E8%A6%81%E7%9D%A1%E8%A7%89%23) `253.2K 🔥` `NEW`
1. [穆祉丞父亲节给爸爸发红包](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E7%88%B6%E4%BA%B2%E8%8A%82%E7%BB%99%E7%88%B8%E7%88%B8%E5%8F%91%E7%BA%A2%E5%8C%85%23) `252.2K 🔥` `NEW`
1. [AG对战WST](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98WST%23) `207.5K 🔥` `NEW`
1. [九尾钟意pk镜](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%E9%92%9F%E6%84%8Fpk%E9%95%9C%23) `198.3K 🔥` `NEW`
1. [世界杯32强已出3席 (Three of the top 32 players in the World Cup have been represented)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF32%E5%BC%BA%E5%B7%B2%E5%87%BA3%E5%B8%AD%23) `195.1K 🔥` `NEW`
1. [张卫健配音胡迪27年](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%8D%AB%E5%81%A5%E9%85%8D%E9%9F%B3%E8%83%A1%E8%BF%AA27%E5%B9%B4%23) `194.3K 🔥` `NEW`
1. [蔡磊2年几乎没离开过卧室](https://s.weibo.com/weibo?q=%23%E8%94%A1%E7%A3%8A2%E5%B9%B4%E5%87%A0%E4%B9%8E%E6%B2%A1%E7%A6%BB%E5%BC%80%E8%BF%87%E5%8D%A7%E5%AE%A4%23) `194.0K 🔥` `NEW`
1. [宋亚轩E到想啃别人](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9E%E5%88%B0%E6%83%B3%E5%95%83%E5%88%AB%E4%BA%BA%23) `192.4K 🔥` `NEW`
1. [退租一年了房东还在帮我卖冰箱](https://s.weibo.com/weibo?q=%23%E9%80%80%E7%A7%9F%E4%B8%80%E5%B9%B4%E4%BA%86%E6%88%BF%E4%B8%9C%E8%BF%98%E5%9C%A8%E5%B8%AE%E6%88%91%E5%8D%96%E5%86%B0%E7%AE%B1%23) `182.1K 🔥` `NEW`
1. [女足定档时间](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E8%B6%B3%E5%AE%9A%E6%A1%A3%E6%97%B6%E9%97%B4%23) `182.0K 🔥` `NEW`
1. [清融评分](https://s.weibo.com/weibo?q=%23%E6%B8%85%E8%9E%8D%E8%AF%84%E5%88%86%23) `181.9K 🔥` `NEW`
1. [无畏赵怀真全肯定](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E8%B5%B5%E6%80%80%E7%9C%9F%E5%85%A8%E8%82%AF%E5%AE%9A%23) `180.7K 🔥` `NEW`
1. [罗永浩误吃安眠药](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E8%AF%AF%E5%90%83%E5%AE%89%E7%9C%A0%E8%8D%AF%23) `162.8K 🔥` `NEW`
1. [单依纯舞台疑似抄袭安室奈美惠](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E8%88%9E%E5%8F%B0%E7%96%91%E4%BC%BC%E6%8A%84%E8%A2%AD%E5%AE%89%E5%AE%A4%E5%A5%88%E7%BE%8E%E6%83%A0%23) `617.2K 🔥` `+41%`
1. [安静公主李昀锐合照 (A group photo of Princess Anjing and Li Yunrui)](https://s.weibo.com/weibo?q=%23%E5%AE%89%E9%9D%99%E5%85%AC%E4%B8%BB%E6%9D%8E%E6%98%80%E9%94%90%E5%90%88%E7%85%A7%23) `260.3K 🔥` `+51%`
1. [医生说孩子剩18个月外公续命9年 (The doctor said the baby has 18 months left and the grandfather has 9 years to live.)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E8%AF%B4%E5%AD%A9%E5%AD%90%E5%89%A918%E4%B8%AA%E6%9C%88%E5%A4%96%E5%85%AC%E7%BB%AD%E5%91%BD9%E5%B9%B4%23) `260.0K 🔥` `+69%`
1. [西班牙若再被爆冷将失去晋级主动权](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E8%8B%A5%E5%86%8D%E8%A2%AB%E7%88%86%E5%86%B7%E5%B0%86%E5%A4%B1%E5%8E%BB%E6%99%8B%E7%BA%A7%E4%B8%BB%E5%8A%A8%E6%9D%83%23) `253.0K 🔥` `+29%`
1. [中国男篮vs澳大利亚男篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AEvs%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%E7%94%B7%E7%AF%AE%23) `458.8K 🔥`
1. [爸爸熟睡压住宝宝挣扎许久未果](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E7%86%9F%E7%9D%A1%E5%8E%8B%E4%BD%8F%E5%AE%9D%E5%AE%9D%E6%8C%A3%E6%89%8E%E8%AE%B8%E4%B9%85%E6%9C%AA%E6%9E%9C%23) `255.9K 🔥`
1. [国内金饰价格迎来大幅下调](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%86%85%E9%87%91%E9%A5%B0%E4%BB%B7%E6%A0%BC%E8%BF%8E%E6%9D%A5%E5%A4%A7%E5%B9%85%E4%B8%8B%E8%B0%83%23) `254.7K 🔥`
1. [爸爸不收红包是全国统一的吗 (Is it a nationwide rule that dads don’t accept red envelopes?)](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E4%B8%8D%E6%94%B6%E7%BA%A2%E5%8C%85%E6%98%AF%E5%85%A8%E5%9B%BD%E7%BB%9F%E4%B8%80%E7%9A%84%E5%90%97%23) `655.5K 🔥` `-42%`
1. [蔡磊说将亲眼见证渐冻症被终结 (Cai Lei said he would witness the end of ALS with his own eyes)](https://s.weibo.com/weibo?q=%23%E8%94%A1%E7%A3%8A%E8%AF%B4%E5%B0%86%E4%BA%B2%E7%9C%BC%E8%A7%81%E8%AF%81%E6%B8%90%E5%86%BB%E7%97%87%E8%A2%AB%E7%BB%88%E7%BB%93%23) `521.6K 🔥` `-55%`
1. [天赐爸爸称怀孕时没有告诉子女](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E8%B5%90%E7%88%B8%E7%88%B8%E7%A7%B0%E6%80%80%E5%AD%95%E6%97%B6%E6%B2%A1%E6%9C%89%E5%91%8A%E8%AF%89%E5%AD%90%E5%A5%B3%23) `258.7K 🔥` `-40%`
1. [白鹿早期竟然这么清纯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%97%A9%E6%9C%9F%E7%AB%9F%E7%84%B6%E8%BF%99%E4%B9%88%E6%B8%85%E7%BA%AF%23) `258.1K 🔥` `-39%`
1. [女孩点燃野草父亲扑火不幸身亡](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E7%82%B9%E7%87%83%E9%87%8E%E8%8D%89%E7%88%B6%E4%BA%B2%E6%89%91%E7%81%AB%E4%B8%8D%E5%B9%B8%E8%BA%AB%E4%BA%A1%23) `257.5K 🔥` `-78%`
1. [余华说朱一龙退出文城很及时 (Yu Hua said that Zhu Yilong's withdrawal from Wencheng was timely)](https://s.weibo.com/weibo?q=%23%E4%BD%99%E5%8D%8E%E8%AF%B4%E6%9C%B1%E4%B8%80%E9%BE%99%E9%80%80%E5%87%BA%E6%96%87%E5%9F%8E%E5%BE%88%E5%8F%8A%E6%97%B6%23) `256.8K 🔥` `-41%`
1. [杨天真复胖](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%A4%A9%E7%9C%9F%E5%A4%8D%E8%83%96%23) `255.6K 🔥` `-40%`
1. [周洁琼来看IOI演唱会了](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B4%81%E7%90%BC%E6%9D%A5%E7%9C%8BIOI%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BA%86%23) `243.4K 🔥` `-42%`
1. [侯明昊歌手见活动见开机见 (Hou Minghao's singer meeting event and opening meeting)](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E6%AD%8C%E6%89%8B%E8%A7%81%E6%B4%BB%E5%8A%A8%E8%A7%81%E5%BC%80%E6%9C%BA%E8%A7%81%23) `204.7K 🔥` `-32%`
1. [三大85花白玉兰场刊介绍](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%A4%A785%E8%8A%B1%E7%99%BD%E7%8E%89%E5%85%B0%E5%9C%BA%E5%88%8A%E4%BB%8B%E7%BB%8D%23) `200.5K 🔥` `-56%`
1. [邓超说孙俪和他领完证哭了](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E8%AF%B4%E5%AD%99%E4%BF%AA%E5%92%8C%E4%BB%96%E9%A2%86%E5%AE%8C%E8%AF%81%E5%93%AD%E4%BA%86%23) `188.3K 🔥` `-32%`
1. [夫妻肺部感染撬开家中地板长满霉菌](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E8%82%BA%E9%83%A8%E6%84%9F%E6%9F%93%E6%92%AC%E5%BC%80%E5%AE%B6%E4%B8%AD%E5%9C%B0%E6%9D%BF%E9%95%BF%E6%BB%A1%E9%9C%89%E8%8F%8C%23) `167.6K 🔥` `-40%`
1. [海棠春官宣](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%A3%A0%E6%98%A5%E5%AE%98%E5%AE%A3%23) `167.0K 🔥` `-60%`
1. [金价大跌消费者涌入柜台](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%A4%A7%E8%B7%8C%E6%B6%88%E8%B4%B9%E8%80%85%E6%B6%8C%E5%85%A5%E6%9F%9C%E5%8F%B0%23) `163.2K 🔥` `-61%`

Updated at 2026-06-21 21:46:35

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
