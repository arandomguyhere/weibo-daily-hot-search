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

1. [杜华 差点让披哥停播 (Du Hua almost made Brother Pi stop broadcasting)](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%8D%8E%20%E5%B7%AE%E7%82%B9%E8%AE%A9%E6%8A%AB%E5%93%A5%E5%81%9C%E6%92%AD%23) `383.3K 🔥` `NEW`
1. [张本智和4比0大勒布伦](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C4%E6%AF%940%E5%A4%A7%E5%8B%92%E5%B8%83%E4%BC%A6%23) `380.3K 🔥` `NEW`
1. [小沈阳秒了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%B2%88%E9%98%B3%E7%A7%92%E4%BA%86%23) `373.7K 🔥` `NEW`
1. [王俊凯徐洁儿友谊](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%BE%90%E6%B4%81%E5%84%BF%E5%8F%8B%E8%B0%8A%23) `357.9K 🔥` `NEW`
1. [金鹰奖 赛制改革](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%20%E8%B5%9B%E5%88%B6%E6%94%B9%E9%9D%A9%23) `355.2K 🔥` `NEW`
1. [主播母亲回应榜一大哥打赏千万要陪睡](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E6%92%AD%E6%AF%8D%E4%BA%B2%E5%9B%9E%E5%BA%94%E6%A6%9C%E4%B8%80%E5%A4%A7%E5%93%A5%E6%89%93%E8%B5%8F%E5%8D%83%E4%B8%87%E8%A6%81%E9%99%AA%E7%9D%A1%23) `352.9K 🔥` `NEW`
1. [王俊凯听到粉丝表白的反应](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%90%AC%E5%88%B0%E7%B2%89%E4%B8%9D%E8%A1%A8%E7%99%BD%E7%9A%84%E5%8F%8D%E5%BA%94%23) `345.8K 🔥` `NEW`
1. [曝宋亚轩刘耀文又去自驾游了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%88%98%E8%80%80%E6%96%87%E5%8F%88%E5%8E%BB%E8%87%AA%E9%A9%BE%E6%B8%B8%E4%BA%86%23) `329.4K 🔥` `NEW`
1. [4岁男童被找回父亲准备5头猪答谢](https://s.weibo.com/weibo?q=%234%E5%B2%81%E7%94%B7%E7%AB%A5%E8%A2%AB%E6%89%BE%E5%9B%9E%E7%88%B6%E4%BA%B2%E5%87%86%E5%A4%875%E5%A4%B4%E7%8C%AA%E7%AD%94%E8%B0%A2%23) `326.8K 🔥` `NEW`
1. [新乡胖东来搬走前VS搬走后](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%B9%A1%E8%83%96%E4%B8%9C%E6%9D%A5%E6%90%AC%E8%B5%B0%E5%89%8DVS%E6%90%AC%E8%B5%B0%E5%90%8E%23) `322.3K 🔥` `NEW`
1. [电影院直播樊振东比赛黄金位已售罄 (The prime seats for the live broadcast of Fan Zhendong’s match in cinemas have been sold out)](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E9%99%A2%E7%9B%B4%E6%92%AD%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%AF%94%E8%B5%9B%E9%BB%84%E9%87%91%E4%BD%8D%E5%B7%B2%E5%94%AE%E7%BD%84%23) `317.4K 🔥` `NEW`
1. [XG 退役](https://s.weibo.com/weibo?q=%23XG%20%E9%80%80%E5%BD%B9%23) `316.3K 🔥` `NEW`
1. [人到中年一定要舍得吃](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%88%B0%E4%B8%AD%E5%B9%B4%E4%B8%80%E5%AE%9A%E8%A6%81%E8%88%8D%E5%BE%97%E5%90%83%23) `315.5K 🔥` `NEW`
1. [段永平最新美股持仓曝光](https://s.weibo.com/weibo?q=%23%E6%AE%B5%E6%B0%B8%E5%B9%B3%E6%9C%80%E6%96%B0%E7%BE%8E%E8%82%A1%E6%8C%81%E4%BB%93%E6%9B%9D%E5%85%89%23) `311.4K 🔥` `NEW`
1. [汉奸石平参拜靖国神社](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%A5%B8%E7%9F%B3%E5%B9%B3%E5%8F%82%E6%8B%9C%E9%9D%96%E5%9B%BD%E7%A5%9E%E7%A4%BE%23) `1.9M 🔥` `+23%`
1. [山西挖眼案男孩高考721分选了中医学](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E6%8C%96%E7%9C%BC%E6%A1%88%E7%94%B7%E5%AD%A9%E9%AB%98%E8%80%83721%E5%88%86%E9%80%89%E4%BA%86%E4%B8%AD%E5%8C%BB%E5%AD%A6%23) `385.0K 🔥` `+93%`
1. [韩方强烈敦促日本领导人正视历史](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%96%B9%E5%BC%BA%E7%83%88%E6%95%A6%E4%BF%83%E6%97%A5%E6%9C%AC%E9%A2%86%E5%AF%BC%E4%BA%BA%E6%AD%A3%E8%A7%86%E5%8E%86%E5%8F%B2%23) `363.7K 🔥` `+97%`
1. [妈妈路上不慎弄丢儿子录取通知书 (Mother accidentally lost her son’s admission letter on the road)](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E8%B7%AF%E4%B8%8A%E4%B8%8D%E6%85%8E%E5%BC%84%E4%B8%A2%E5%84%BF%E5%AD%90%E5%BD%95%E5%8F%96%E9%80%9A%E7%9F%A5%E4%B9%A6%23) `348.5K 🔥` `+22%`
1. [丁禹兮演唱会 (Ding Yuxi concert)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E6%BC%94%E5%94%B1%E4%BC%9A%23) `334.8K 🔥` `+44%`
1. [中国男篮vs乌拉圭男篮](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E7%AF%AEvs%E4%B9%8C%E6%8B%89%E5%9C%AD%E7%94%B7%E7%AF%AE%23) `333.8K 🔥` `+28%`
1. [李雪琴回复汪苏泷](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%AA%E7%90%B4%E5%9B%9E%E5%A4%8D%E6%B1%AA%E8%8B%8F%E6%B3%B7%23) `328.8K 🔥` `+72%`
1. [曝王嘉尔宋雨琦恋情 (Wang Jiaer and Song Yuqi's romance revealed)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E5%98%89%E5%B0%94%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%81%8B%E6%83%85%23) `324.2K 🔥` `+61%`
1. [纪念江泽民同志诞辰100周年大会](https://s.weibo.com/weibo?q=%23%E7%BA%AA%E5%BF%B5%E6%B1%9F%E6%B3%BD%E6%B0%91%E5%90%8C%E5%BF%97%E8%AF%9E%E8%BE%B0100%E5%91%A8%E5%B9%B4%E5%A4%A7%E4%BC%9A%23) `323.6K 🔥` `+71%`
1. [我们的少年时代2 (Our Boyhood 2)](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%23) `312.8K 🔥` `+50%`
1. [披荆斩棘直播 (Overcoming obstacles live broadcast)](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E7%9B%B4%E6%92%AD%23) `985.2K 🔥`
1. [50秒看中国的绿色奇迹 (50 seconds to see China’s green miracle)](https://s.weibo.com/weibo?q=%2350%E7%A7%92%E7%9C%8B%E4%B8%AD%E5%9B%BD%E7%9A%84%E7%BB%BF%E8%89%B2%E5%A5%87%E8%BF%B9%23) `764.8K 🔥`
1. [王传君终于原谅爱情公寓了 (Wang Chuanjun finally forgives iPartment)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E7%BB%88%E4%BA%8E%E5%8E%9F%E8%B0%85%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E4%BA%86%23) `705.0K 🔥`
1. [谁杀死了驾校 (Who killed the driving school?)](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%9D%80%E6%AD%BB%E4%BA%86%E9%A9%BE%E6%A0%A1%23) `377.9K 🔥`
1. [好多明星暴瘦 (Many celebrities have lost weight)](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A4%9A%E6%98%8E%E6%98%9F%E6%9A%B4%E7%98%A6%23) `376.3K 🔥`
1. [Bin 回归 (Bin returns)](https://s.weibo.com/weibo?q=%23Bin%20%E5%9B%9E%E5%BD%92%23) `372.6K 🔥`
1. [赵丽颖13个月没进组了](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%9613%E4%B8%AA%E6%9C%88%E6%B2%A1%E8%BF%9B%E7%BB%84%E4%BA%86%23) `370.7K 🔥`
1. [曝与张凌赫合照价格](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%B8%8E%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%90%88%E7%85%A7%E4%BB%B7%E6%A0%BC%23) `368.8K 🔥`
1. [C罗若离婚乔治娜每月将获10万欧元](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E8%8B%A5%E7%A6%BB%E5%A9%9A%E4%B9%94%E6%B2%BB%E5%A8%9C%E6%AF%8F%E6%9C%88%E5%B0%86%E8%8E%B710%E4%B8%87%E6%AC%A7%E5%85%83%23) `366.7K 🔥`
1. [被AI投毒后假400售后上门真演戏](https://s.weibo.com/weibo?q=%23%E8%A2%ABAI%E6%8A%95%E6%AF%92%E5%90%8E%E5%81%87400%E5%94%AE%E5%90%8E%E4%B8%8A%E9%97%A8%E7%9C%9F%E6%BC%94%E6%88%8F%23) `365.1K 🔥`
1. [张睿 梦回新还珠](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%20%E6%A2%A6%E5%9B%9E%E6%96%B0%E8%BF%98%E7%8F%A0%23) `360.0K 🔥`
1. [这和亲生的有什么区别](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%92%8C%E4%BA%B2%E7%94%9F%E7%9A%84%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB%23) `359.5K 🔥`
1. [余文乐赢了曹骏 (Shawn Yue defeated Cao Jun)](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%96%87%E4%B9%90%E8%B5%A2%E4%BA%86%E6%9B%B9%E9%AA%8F%23) `351.2K 🔥`
1. [王传君唱rap](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E5%94%B1rap%23) `350.4K 🔥`
1. [当我有一个快递到了](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E6%9C%89%E4%B8%80%E4%B8%AA%E5%BF%AB%E9%80%92%E5%88%B0%E4%BA%86%23) `343.5K 🔥`
1. [余文乐 港星的含金量还在上升](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%96%87%E4%B9%90%20%E6%B8%AF%E6%98%9F%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E8%BF%98%E5%9C%A8%E4%B8%8A%E5%8D%87%23) `342.2K 🔥`
1. [邓超给初代跑男合照签名 (Deng Chao signed a group photo with the first generation of Running Man)](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E7%BB%99%E5%88%9D%E4%BB%A3%E8%B7%91%E7%94%B7%E5%90%88%E7%85%A7%E7%AD%BE%E5%90%8D%23) `340.4K 🔥`
1. [东京地铁被淹却见水质清澈 (Tokyo subway was flooded but the water was clear)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E4%BA%AC%E5%9C%B0%E9%93%81%E8%A2%AB%E6%B7%B9%E5%8D%B4%E8%A7%81%E6%B0%B4%E8%B4%A8%E6%B8%85%E6%BE%88%23) `337.9K 🔥`
1. [张睿 中国内地郭富城 (Zhang Rui, Mainland China, Aaron Kwok)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%20%E4%B8%AD%E5%9B%BD%E5%86%85%E5%9C%B0%E9%83%AD%E5%AF%8C%E5%9F%8E%23) `336.8K 🔥`
1. [宋亚轩缺席国乐那期在拍运动会](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E7%BC%BA%E5%B8%AD%E5%9B%BD%E4%B9%90%E9%82%A3%E6%9C%9F%E5%9C%A8%E6%8B%8D%E8%BF%90%E5%8A%A8%E4%BC%9A%23) `320.4K 🔥`
1. [苏超](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `309.1K 🔥`
1. [披荆斩棘初舞台](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E5%88%9D%E8%88%9E%E5%8F%B0%23) `382.6K 🔥` `-24%`
1. [胖东来 刑释人员 (Fat Donglai, ex-convict)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%20%E5%88%91%E9%87%8A%E4%BA%BA%E5%91%98%23) `378.8K 🔥` `-22%`
1. [曹骏跳操前后对比 (Comparison before and after Cao Jun's jumping exercises)](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E8%B7%B3%E6%93%8D%E5%89%8D%E5%90%8E%E5%AF%B9%E6%AF%94%23) `361.5K 🔥` `-30%`
1. [榜一大哥打赏千万后要求陪睡 (The top brother on the list asked to sleep with him after giving him a reward of tens of millions)](https://s.weibo.com/weibo?q=%23%E6%A6%9C%E4%B8%80%E5%A4%A7%E5%93%A5%E6%89%93%E8%B5%8F%E5%8D%83%E4%B8%87%E5%90%8E%E8%A6%81%E6%B1%82%E9%99%AA%E7%9D%A1%23) `346.2K 🔥` `-34%`
1. [王楚钦兼项负荷过重](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%85%BC%E9%A1%B9%E8%B4%9F%E8%8D%B7%E8%BF%87%E9%87%8D%23) `332.0K 🔥` `-38%`

Updated at 2026-08-15 22:33:17

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
