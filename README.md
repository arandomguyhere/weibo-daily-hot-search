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

1. [王曼昱4比1彭郁涵 (Wang Manyu 4 to 1 Peng Yuhan)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B14%E6%AF%941%E5%BD%AD%E9%83%81%E6%B6%B5%23) `257.7K 🔥` `NEW`
1. [王俊凯染粉发](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%9F%93%E7%B2%89%E5%8F%91%23) `240.2K 🔥` `NEW`
1. [我们的少年时代2](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%23) `239.9K 🔥` `NEW`
1. [被AI投毒后假400售后上门真演戏](https://s.weibo.com/weibo?q=%23%E8%A2%ABAI%E6%8A%95%E6%AF%92%E5%90%8E%E5%81%87400%E5%94%AE%E5%90%8E%E4%B8%8A%E9%97%A8%E7%9C%9F%E6%BC%94%E6%88%8F%23) `238.1K 🔥` `NEW`
1. [儿子40年未赡养分走180万遗产](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%9040%E5%B9%B4%E6%9C%AA%E8%B5%A1%E5%85%BB%E5%88%86%E8%B5%B0180%E4%B8%87%E9%81%97%E4%BA%A7%23) `237.5K 🔥` `NEW`
1. [汉奸石平参拜靖国神社](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%A5%B8%E7%9F%B3%E5%B9%B3%E5%8F%82%E6%8B%9C%E9%9D%96%E5%9B%BD%E7%A5%9E%E7%A4%BE%23) `236.6K 🔥` `NEW`
1. [杨超越提裙走这段](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E6%8F%90%E8%A3%99%E8%B5%B0%E8%BF%99%E6%AE%B5%23) `193.3K 🔥` `NEW`
1. [九尾申请加入九门](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%E7%94%B3%E8%AF%B7%E5%8A%A0%E5%85%A5%E4%B9%9D%E9%97%A8%23) `158.0K 🔥` `NEW`
1. [赵昭仪颜安喝同一杯饮料](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%98%AD%E4%BB%AA%E9%A2%9C%E5%AE%89%E5%96%9D%E5%90%8C%E4%B8%80%E6%9D%AF%E9%A5%AE%E6%96%99%23) `154.5K 🔥` `NEW`
1. [披荆斩棘直播](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E7%9B%B4%E6%92%AD%23) `154.3K 🔥` `NEW`
1. [停止发育是卵细胞的浪漫 (Stopping development is the romance of the egg cell)](https://s.weibo.com/weibo?q=%23%E5%81%9C%E6%AD%A2%E5%8F%91%E8%82%B2%E6%98%AF%E5%8D%B5%E7%BB%86%E8%83%9E%E7%9A%84%E6%B5%AA%E6%BC%AB%23) `132.9K 🔥` `NEW`
1. [日本人组成的战斗分队在乌克兰成立](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%BA%E7%BB%84%E6%88%90%E7%9A%84%E6%88%98%E6%96%97%E5%88%86%E9%98%9F%E5%9C%A8%E4%B9%8C%E5%85%8B%E5%85%B0%E6%88%90%E7%AB%8B%23) `132.4K 🔥` `NEW`
1. [公司空调已经做到这种程度了 (The company's air conditioners have already reached this level.)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E7%A9%BA%E8%B0%83%E5%B7%B2%E7%BB%8F%E5%81%9A%E5%88%B0%E8%BF%99%E7%A7%8D%E7%A8%8B%E5%BA%A6%E4%BA%86%23) `502.5K 🔥` `+103%`
1. [东京地铁被淹却见水质清澈 (Tokyo subway was flooded but the water was clear)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E4%BA%AC%E5%9C%B0%E9%93%81%E8%A2%AB%E6%B7%B9%E5%8D%B4%E8%A7%81%E6%B0%B4%E8%B4%A8%E6%B8%85%E6%BE%88%23) `239.0K 🔥` `+32%`
1. [李雪琴看汪苏泷演唱会](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%AA%E7%90%B4%E7%9C%8B%E6%B1%AA%E8%8B%8F%E6%B3%B7%E6%BC%94%E5%94%B1%E4%BC%9A%23) `212.2K 🔥` `+21%`
1. [谁杀死了驾校 (Who killed the driving school?)](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%9D%80%E6%AD%BB%E4%BA%86%E9%A9%BE%E6%A0%A1%23) `1.2M 🔥`
1. [胖东来 刑释人员](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%20%E5%88%91%E9%87%8A%E4%BA%BA%E5%91%98%23) `862.4K 🔥`
1. [这一天值得每一名中国人铭记 (This day is worth remembering by every Chinese)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E5%A4%A9%E5%80%BC%E5%BE%97%E6%AF%8F%E4%B8%80%E5%90%8D%E4%B8%AD%E5%9B%BD%E4%BA%BA%E9%93%AD%E8%AE%B0%23) `661.2K 🔥`
1. [815京东家电周年庆 低至8.15折](https://s.weibo.com/weibo?q=%23815%E4%BA%AC%E4%B8%9C%E5%AE%B6%E7%94%B5%E5%91%A8%E5%B9%B4%E5%BA%86%20%E4%BD%8E%E8%87%B38.15%E6%8A%98%23) `604.1K 🔥`
1. [保时捷溜车2员工拼命阻拦获加薪](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%97%B6%E6%8D%B7%E6%BA%9C%E8%BD%A62%E5%91%98%E5%B7%A5%E6%8B%BC%E5%91%BD%E9%98%BB%E6%8B%A6%E8%8E%B7%E5%8A%A0%E8%96%AA%23) `464.6K 🔥`
1. [我们的少年时代2有36集 (Our Boyhood 2 has 36 episodes)](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%E6%9C%8936%E9%9B%86%23) `451.2K 🔥`
1. [终于明白减重减肥减脂区别](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%98%8E%E7%99%BD%E5%87%8F%E9%87%8D%E5%87%8F%E8%82%A5%E5%87%8F%E8%84%82%E5%8C%BA%E5%88%AB%23) `306.6K 🔥`
1. [疯狂动物城3官宣 (Zootopia 3 official announcement)](https://s.weibo.com/weibo?q=%23%E7%96%AF%E7%8B%82%E5%8A%A8%E7%89%A9%E5%9F%8E3%E5%AE%98%E5%AE%A3%23) `264.0K 🔥`
1. [曝与张凌赫合照价格](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%B8%8E%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%90%88%E7%85%A7%E4%BB%B7%E6%A0%BC%23) `254.6K 🔥`
1. [好多明星暴瘦](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A4%9A%E6%98%8E%E6%98%9F%E6%9A%B4%E7%98%A6%23) `253.6K 🔥`
1. [oner一语成谶](https://s.weibo.com/weibo?q=%23oner%E4%B8%80%E8%AF%AD%E6%88%90%E8%B0%B6%23) `252.5K 🔥`
1. [邓超给初代跑男合照签名 (Deng Chao signed a group photo with the first generation of Running Man)](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E7%BB%99%E5%88%9D%E4%BB%A3%E8%B7%91%E7%94%B7%E5%90%88%E7%85%A7%E7%AD%BE%E5%90%8D%23) `252.2K 🔥`
1. [杨幂ELLE金九封面预告](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82ELLE%E9%87%91%E4%B9%9D%E5%B0%81%E9%9D%A2%E9%A2%84%E5%91%8A%23) `250.8K 🔥`
1. [朱女士案赶快拿钱离婚才是上策](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%A5%B3%E5%A3%AB%E6%A1%88%E8%B5%B6%E5%BF%AB%E6%8B%BF%E9%92%B1%E7%A6%BB%E5%A9%9A%E6%89%8D%E6%98%AF%E4%B8%8A%E7%AD%96%23) `250.3K 🔥`
1. [王嘉尔吃自己的瓜 (Wang Jiaer eats his own melon)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E5%90%83%E8%87%AA%E5%B7%B1%E7%9A%84%E7%93%9C%23) `249.3K 🔥`
1. [手机涨得快买不起了 (Mobile phones are so expensive that they are almost unaffordable.)](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E6%B6%A8%E5%BE%97%E5%BF%AB%E4%B9%B0%E4%B8%8D%E8%B5%B7%E4%BA%86%23) `248.1K 🔥`
1. [比利时一学生挖到大量金币金条 (A student in Belgium dug up a large number of gold coins and gold bars)](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B6%E4%B8%80%E5%AD%A6%E7%94%9F%E6%8C%96%E5%88%B0%E5%A4%A7%E9%87%8F%E9%87%91%E5%B8%81%E9%87%91%E6%9D%A1%23) `246.9K 🔥`
1. [王俊凯演唱会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%94%B1%E4%BC%9A%23) `246.4K 🔥`
1. [杜女士你的身份证在邢昭林这儿](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%A5%B3%E5%A3%AB%E4%BD%A0%E7%9A%84%E8%BA%AB%E4%BB%BD%E8%AF%81%E5%9C%A8%E9%82%A2%E6%98%AD%E6%9E%97%E8%BF%99%E5%84%BF%23) `245.2K 🔥`
1. [丈夫多年给丧偶初中女同学逐条留言](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E5%A4%9A%E5%B9%B4%E7%BB%99%E4%B8%A7%E5%81%B6%E5%88%9D%E4%B8%AD%E5%A5%B3%E5%90%8C%E5%AD%A6%E9%80%90%E6%9D%A1%E7%95%99%E8%A8%80%23) `244.3K 🔥`
1. [张婧仪 怎么会有人睡觉也这么好看](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%20%E6%80%8E%E4%B9%88%E4%BC%9A%E6%9C%89%E4%BA%BA%E7%9D%A1%E8%A7%89%E4%B9%9F%E8%BF%99%E4%B9%88%E5%A5%BD%E7%9C%8B%23) `243.1K 🔥`
1. [曝王嘉尔宋雨琦恋情 (Wang Jiaer and Song Yuqi's romance revealed)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E5%98%89%E5%B0%94%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%81%8B%E6%83%85%23) `243.0K 🔥`
1. [卖霉豆腐已经有人实操上了 (Someone has already started selling moldy tofu.)](https://s.weibo.com/weibo?q=%23%E5%8D%96%E9%9C%89%E8%B1%86%E8%85%90%E5%B7%B2%E7%BB%8F%E6%9C%89%E4%BA%BA%E5%AE%9E%E6%93%8D%E4%B8%8A%E4%BA%86%23) `240.3K 🔥`
1. [葡萄树的主人终于上当了 (The owner of the vine was finally fooled)](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E6%A0%91%E7%9A%84%E4%B8%BB%E4%BA%BA%E7%BB%88%E4%BA%8E%E4%B8%8A%E5%BD%93%E4%BA%86%23) `239.4K 🔥`
1. [杨超越黄裙高定 (Yang Chaoyue yellow dress haute couture)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E9%BB%84%E8%A3%99%E9%AB%98%E5%AE%9A%23) `237.1K 🔥`
1. [短剧车祸戏居然是真撞](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E8%BD%A6%E7%A5%B8%E6%88%8F%E5%B1%85%E7%84%B6%E6%98%AF%E7%9C%9F%E6%92%9E%23) `233.0K 🔥`
1. [骗儿子进戒网瘾机构母亲称自己被骗](https://s.weibo.com/weibo?q=%23%E9%AA%97%E5%84%BF%E5%AD%90%E8%BF%9B%E6%88%92%E7%BD%91%E7%98%BE%E6%9C%BA%E6%9E%84%E6%AF%8D%E4%BA%B2%E7%A7%B0%E8%87%AA%E5%B7%B1%E8%A2%AB%E9%AA%97%23) `197.7K 🔥`
1. [魏子宸 剪发](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%AD%90%E5%AE%B8%20%E5%89%AA%E5%8F%91%23) `195.4K 🔥`
1. [赵丽颖三个清宫女配没有重合感 (There is no sense of overlap between Zhao Liying and the three Qing court ladies)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E4%B8%89%E4%B8%AA%E6%B8%85%E5%AE%AB%E5%A5%B3%E9%85%8D%E6%B2%A1%E6%9C%89%E9%87%8D%E5%90%88%E6%84%9F%23) `155.4K 🔥`
1. [王橹杰影之八秒](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%BD%B1%E4%B9%8B%E5%85%AB%E7%A7%92%23) `140.1K 🔥`
1. [中598万男子不告诉妻儿父母 (5.98 million men do not tell their wives, children and parents)](https://s.weibo.com/weibo?q=%23%E4%B8%AD598%E4%B8%87%E7%94%B7%E5%AD%90%E4%B8%8D%E5%91%8A%E8%AF%89%E5%A6%BB%E5%84%BF%E7%88%B6%E6%AF%8D%23) `132.8K 🔥`
1. [奇瑞捷豹路虎首搭华为乾崑智驾 (Chery Jaguar Land Rover takes advantage of Huawei Qiankun Smart Driving for the first time)](https://s.weibo.com/weibo?q=%23%E5%A5%87%E7%91%9E%E6%8D%B7%E8%B1%B9%E8%B7%AF%E8%99%8E%E9%A6%96%E6%90%AD%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91%E6%99%BA%E9%A9%BE%23) `380.3K 🔥` `-27%`
1. [旺旺 配料表 (Wangwang ingredient list)](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%20%E9%85%8D%E6%96%99%E8%A1%A8%23) `255.3K 🔥` `-52%`
1. [isa聊天记录](https://s.weibo.com/weibo?q=%23isa%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `157.1K 🔥` `-38%`
1. [原来活体器官运输不是专门的飞机](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%B4%BB%E4%BD%93%E5%99%A8%E5%AE%98%E8%BF%90%E8%BE%93%E4%B8%8D%E6%98%AF%E4%B8%93%E9%97%A8%E7%9A%84%E9%A3%9E%E6%9C%BA%23) `154.4K 🔥` `-62%`
1. [鹿晗给汪苏泷送花篮了 (Lu Han sent a flower basket to Wang Sulong)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E7%BB%99%E6%B1%AA%E8%8B%8F%E6%B3%B7%E9%80%81%E8%8A%B1%E7%AF%AE%E4%BA%86%23) `132.7K 🔥` `-31%`
1. [JDG对战TTG](https://s.weibo.com/weibo?q=%23JDG%E5%AF%B9%E6%88%98TTG%23) `132.3K 🔥` `-37%`

Updated at 2026-08-15 19:37:41

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
