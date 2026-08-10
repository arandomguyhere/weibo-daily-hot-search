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

1. [偶像来了 重启回归 (Idol is here, reboot and return)](https://s.weibo.com/weibo?q=%23%E5%81%B6%E5%83%8F%E6%9D%A5%E4%BA%86%20%E9%87%8D%E5%90%AF%E5%9B%9E%E5%BD%92%23) `2.3M 🔥` `NEW`
1. [上海变海上](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%8F%98%E6%B5%B7%E4%B8%8A%23) `1.0M 🔥` `NEW`
1. [贺涵 能来接我吗](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E6%B6%B5%20%E8%83%BD%E6%9D%A5%E6%8E%A5%E6%88%91%E5%90%97%23) `940.0K 🔥` `NEW`
1. [古茗排队](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E8%8C%97%E6%8E%92%E9%98%9F%23) `812.6K 🔥` `NEW`
1. [武汉天桥打人 以暴制暴](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E5%A4%A9%E6%A1%A5%E6%89%93%E4%BA%BA%20%E4%BB%A5%E6%9A%B4%E5%88%B6%E6%9A%B4%23) `390.3K 🔥` `NEW`
1. [这届年轻人真的在整顿婚礼](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B1%8A%E5%B9%B4%E8%BD%BB%E4%BA%BA%E7%9C%9F%E7%9A%84%E5%9C%A8%E6%95%B4%E9%A1%BF%E5%A9%9A%E7%A4%BC%23) `387.4K 🔥` `NEW`
1. [胚胎案丈夫称患癌妻子是雷](https://s.weibo.com/weibo?q=%23%E8%83%9A%E8%83%8E%E6%A1%88%E4%B8%88%E5%A4%AB%E7%A7%B0%E6%82%A3%E7%99%8C%E5%A6%BB%E5%AD%90%E6%98%AF%E9%9B%B7%23) `382.3K 🔥` `NEW`
1. [上海徐家汇出现特大暴雨](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%BE%90%E5%AE%B6%E6%B1%87%E5%87%BA%E7%8E%B0%E7%89%B9%E5%A4%A7%E6%9A%B4%E9%9B%A8%23) `378.6K 🔥` `NEW`
1. [费大厨撤下全国小炒肉大王称号](https://s.weibo.com/weibo?q=%23%E8%B4%B9%E5%A4%A7%E5%8E%A8%E6%92%A4%E4%B8%8B%E5%85%A8%E5%9B%BD%E5%B0%8F%E7%82%92%E8%82%89%E5%A4%A7%E7%8E%8B%E7%A7%B0%E5%8F%B7%23) `357.4K 🔥` `NEW`
1. [79年出了三个魔丸](https://s.weibo.com/weibo?q=%2379%E5%B9%B4%E5%87%BA%E4%BA%86%E4%B8%89%E4%B8%AA%E9%AD%94%E4%B8%B8%23) `353.6K 🔥` `NEW`
1. [李晟张睿 我的古早cp还有售后 (Li Sheng Zhang Rui My ancient CP still has after-sales service)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%9F%E5%BC%A0%E7%9D%BF%20%E6%88%91%E7%9A%84%E5%8F%A4%E6%97%A9cp%E8%BF%98%E6%9C%89%E5%94%AE%E5%90%8E%23) `343.0K 🔥` `NEW`
1. [执法中心回应武汉天桥打人事件](https://s.weibo.com/weibo?q=%23%E6%89%A7%E6%B3%95%E4%B8%AD%E5%BF%83%E5%9B%9E%E5%BA%94%E6%AD%A6%E6%B1%89%E5%A4%A9%E6%A1%A5%E6%89%93%E4%BA%BA%E4%BA%8B%E4%BB%B6%23) `331.7K 🔥` `NEW`
1. [无锡降雨量第一](https://s.weibo.com/weibo?q=%23%E6%97%A0%E9%94%A1%E9%99%8D%E9%9B%A8%E9%87%8F%E7%AC%AC%E4%B8%80%23) `297.7K 🔥` `NEW`
1. [伯爵Sixtie梯形表有多绝](https://s.weibo.com/weibo?q=%23%E4%BC%AF%E7%88%B5Sixtie%E6%A2%AF%E5%BD%A2%E8%A1%A8%E6%9C%89%E5%A4%9A%E7%BB%9D%23) `292.1K 🔥` `NEW`
1. [俞定延离开JYP](https://s.weibo.com/weibo?q=%23%E4%BF%9E%E5%AE%9A%E5%BB%B6%E7%A6%BB%E5%BC%80JYP%23) `289.0K 🔥` `NEW`
1. [我的花园世界](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E8%8A%B1%E5%9B%AD%E4%B8%96%E7%95%8C%23) `283.5K 🔥` `NEW`
1. [宇树科技创始人曾短暂入职大疆](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E5%88%9B%E5%A7%8B%E4%BA%BA%E6%9B%BE%E7%9F%AD%E6%9A%82%E5%85%A5%E8%81%8C%E5%A4%A7%E7%96%86%23) `280.1K 🔥` `NEW`
1. [物业费的欠费原因](https://s.weibo.com/weibo?q=%23%E7%89%A9%E4%B8%9A%E8%B4%B9%E7%9A%84%E6%AC%A0%E8%B4%B9%E5%8E%9F%E5%9B%A0%23) `279.7K 🔥` `NEW`
1. [龙餐馆 左宗棠鸡李鸿章杂碎](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%20%E5%B7%A6%E5%AE%97%E6%A3%A0%E9%B8%A1%E6%9D%8E%E9%B8%BF%E7%AB%A0%E6%9D%82%E7%A2%8E%23) `263.9K 🔥` `NEW`
1. [迪丽热巴拍照被认出仓皇跑到车上](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%8B%8D%E7%85%A7%E8%A2%AB%E8%AE%A4%E5%87%BA%E4%BB%93%E7%9A%87%E8%B7%91%E5%88%B0%E8%BD%A6%E4%B8%8A%23) `259.6K 🔥` `NEW`
1. [田曦薇接天才女友的原因 (The reason why Tian Xiwei picked up a genius girlfriend)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%8E%A5%E5%A4%A9%E6%89%8D%E5%A5%B3%E5%8F%8B%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `251.1K 🔥` `NEW`
1. [上门女婿出轨女邻居双双被判重婚罪](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E9%97%A8%E5%A5%B3%E5%A9%BF%E5%87%BA%E8%BD%A8%E5%A5%B3%E9%82%BB%E5%B1%85%E5%8F%8C%E5%8F%8C%E8%A2%AB%E5%88%A4%E9%87%8D%E5%A9%9A%E7%BD%AA%23) `203.9K 🔥` `NEW`
1. [李晟叫张睿蛙哥](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%9F%E5%8F%AB%E5%BC%A0%E7%9D%BF%E8%9B%99%E5%93%A5%23) `196.9K 🔥` `NEW`
1. [内娱晋江式演技是否失灵了](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E6%99%8B%E6%B1%9F%E5%BC%8F%E6%BC%94%E6%8A%80%E6%98%AF%E5%90%A6%E5%A4%B1%E7%81%B5%E4%BA%86%23) `191.0K 🔥` `NEW`
1. [日本流水素面](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%B5%81%E6%B0%B4%E7%B4%A0%E9%9D%A2%23) `186.8K 🔥` `NEW`
1. [日本涩谷偶遇李惠仁](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%B6%A9%E8%B0%B7%E5%81%B6%E9%81%87%E6%9D%8E%E6%83%A0%E4%BB%81%23) `185.1K 🔥` `NEW`
1. [剑网3](https://s.weibo.com/weibo?q=%23%E5%89%91%E7%BD%913%23) `182.5K 🔥` `NEW`
1. [极氪起火车发生事故未在官方维修](https://s.weibo.com/weibo?q=%23%E6%9E%81%E6%B0%AA%E8%B5%B7%E7%81%AB%E8%BD%A6%E5%8F%91%E7%94%9F%E4%BA%8B%E6%95%85%E6%9C%AA%E5%9C%A8%E5%AE%98%E6%96%B9%E7%BB%B4%E4%BF%AE%23) `182.2K 🔥` `NEW`
1. [樊振东说上海欢迎您](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%AF%B4%E4%B8%8A%E6%B5%B7%E6%AC%A2%E8%BF%8E%E6%82%A8%23) `181.8K 🔥` `NEW`
1. [内塔尼亚胡称永不接受巴勒斯坦国](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A1%94%E5%B0%BC%E4%BA%9A%E8%83%A1%E7%A7%B0%E6%B0%B8%E4%B8%8D%E6%8E%A5%E5%8F%97%E5%B7%B4%E5%8B%92%E6%96%AF%E5%9D%A6%E5%9B%BD%23) `181.4K 🔥` `NEW`
1. [疑似高智adhd在评论区泄露天才经验 (Suspected Gao Zhi ADHD leaked genius experience in the comment area)](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E9%AB%98%E6%99%BAadhd%E5%9C%A8%E8%AF%84%E8%AE%BA%E5%8C%BA%E6%B3%84%E9%9C%B2%E5%A4%A9%E6%89%8D%E7%BB%8F%E9%AA%8C%23) `850.5K 🔥` `+279%`
1. [欧阳娜娜周翊然天猫七夕线定爱 (Ouyang Nana and Zhou Yiran set love on Tmall Chinese Valentine's Day online)](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%E5%91%A8%E7%BF%8A%E7%84%B6%E5%A4%A9%E7%8C%AB%E4%B8%83%E5%A4%95%E7%BA%BF%E5%AE%9A%E7%88%B1%23) `815.3K 🔥` `+86%`
1. [DeepSeek会偷偷给人取外号](https://s.weibo.com/weibo?q=%23DeepSeek%E4%BC%9A%E5%81%B7%E5%81%B7%E7%BB%99%E4%BA%BA%E5%8F%96%E5%A4%96%E5%8F%B7%23) `390.5K 🔥` `+104%`
1. [荷兰弟赞达亚好吓人的点赞量](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E5%BC%9F%E8%B5%9E%E8%BE%BE%E4%BA%9A%E5%A5%BD%E5%90%93%E4%BA%BA%E7%9A%84%E7%82%B9%E8%B5%9E%E9%87%8F%23) `379.8K 🔥` `+38%`
1. [易烊千玺走红毯前吃什么了](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E8%B5%B0%E7%BA%A2%E6%AF%AF%E5%89%8D%E5%90%83%E4%BB%80%E4%B9%88%E4%BA%86%23) `273.4K 🔥` `+40%`
1. [蔡磊说渐冻症晚期近似水刑般窒息 (Cai Lei said that the late stage of ALS is like suffocation like waterboarding)](https://s.weibo.com/weibo?q=%23%E8%94%A1%E7%A3%8A%E8%AF%B4%E6%B8%90%E5%86%BB%E7%97%87%E6%99%9A%E6%9C%9F%E8%BF%91%E4%BC%BC%E6%B0%B4%E5%88%91%E8%88%AC%E7%AA%92%E6%81%AF%23) `268.4K 🔥` `+44%`
1. [大疆错失宇树](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%96%86%E9%94%99%E5%A4%B1%E5%AE%87%E6%A0%91%23) `918.7K 🔥`
1. [C罗婚礼闹乌龙](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%A9%9A%E7%A4%BC%E9%97%B9%E4%B9%8C%E9%BE%99%23) `664.0K 🔥`
1. [孟子义这个背](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E8%BF%99%E4%B8%AA%E8%83%8C%23) `374.9K 🔥`
1. [钟楚曦自己化妆全脸就这么点粉底](https://s.weibo.com/weibo?q=%23%E9%92%9F%E6%A5%9A%E6%9B%A6%E8%87%AA%E5%B7%B1%E5%8C%96%E5%A6%86%E5%85%A8%E8%84%B8%E5%B0%B1%E8%BF%99%E4%B9%88%E7%82%B9%E7%B2%89%E5%BA%95%23) `370.3K 🔥`
1. [白海豚](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%23) `370.1K 🔥`
1. [中国银幕认证迪丽热巴90花首位视后](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%93%B6%E5%B9%95%E8%AE%A4%E8%AF%81%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B490%E8%8A%B1%E9%A6%96%E4%BD%8D%E8%A7%86%E5%90%8E%23) `279.1K 🔥`
1. [从热词迭代读懂鲜活中国 (Understand the vivid China through iteration of hot words)](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E7%83%AD%E8%AF%8D%E8%BF%AD%E4%BB%A3%E8%AF%BB%E6%87%82%E9%B2%9C%E6%B4%BB%E4%B8%AD%E5%9B%BD%23) `941.0K 🔥` `-42%`
1. [沈腾400亿票房中国影史第一人](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE400%E4%BA%BF%E7%A5%A8%E6%88%BF%E4%B8%AD%E5%9B%BD%E5%BD%B1%E5%8F%B2%E7%AC%AC%E4%B8%80%E4%BA%BA%23) `546.4K 🔥` `-46%`
1. [肖申克的救赎定档](https://s.weibo.com/weibo?q=%23%E8%82%96%E7%94%B3%E5%85%8B%E7%9A%84%E6%95%91%E8%B5%8E%E5%AE%9A%E6%A1%A3%23) `327.5K 🔥` `-65%`
1. [成毅音乐节延时疑似被催下台](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E9%9F%B3%E4%B9%90%E8%8A%82%E5%BB%B6%E6%97%B6%E7%96%91%E4%BC%BC%E8%A2%AB%E5%82%AC%E4%B8%8B%E5%8F%B0%23) `319.5K 🔥` `-53%`
1. [iPhone18Pro发布会时间](https://s.weibo.com/weibo?q=%23iPhone18Pro%E5%8F%91%E5%B8%83%E4%BC%9A%E6%97%B6%E9%97%B4%23) `318.7K 🔥` `-73%`
1. [梅婷12岁女儿百花奖发言落落大方 (Mei Ting's 12-year-old daughter gave a graceful speech at the Hundred Flowers Award)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A9%B712%E5%B2%81%E5%A5%B3%E5%84%BF%E7%99%BE%E8%8A%B1%E5%A5%96%E5%8F%91%E8%A8%80%E8%90%BD%E8%90%BD%E5%A4%A7%E6%96%B9%23) `265.6K 🔥` `-36%`
1. [蔡磊不想做第二个冰桶挑战](https://s.weibo.com/weibo?q=%23%E8%94%A1%E7%A3%8A%E4%B8%8D%E6%83%B3%E5%81%9A%E7%AC%AC%E4%BA%8C%E4%B8%AA%E5%86%B0%E6%A1%B6%E6%8C%91%E6%88%98%23) `261.7K 🔥` `-47%`
1. [男子杀害母子原地隐匿20年至退休 (Man killed mother and son and hid in hiding for 20 years until retirement)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%9D%80%E5%AE%B3%E6%AF%8D%E5%AD%90%E5%8E%9F%E5%9C%B0%E9%9A%90%E5%8C%BF20%E5%B9%B4%E8%87%B3%E9%80%80%E4%BC%91%23) `183.0K 🔥` `-31%`
1. [建议每个人都用AI做的三件事](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%AF%8F%E4%B8%AA%E4%BA%BA%E9%83%BD%E7%94%A8AI%E5%81%9A%E7%9A%84%E4%B8%89%E4%BB%B6%E4%BA%8B%23) `182.8K 🔥` `-34%`

Updated at 2026-08-10 13:48:23

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
