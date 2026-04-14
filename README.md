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

1. [孙怡 者来姨 (Sun Yi Aunt Zhe Lai)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%20%E8%80%85%E6%9D%A5%E5%A7%A8%23) `252.0K 🔥` `NEW`
1. [沈清曝王阳杀青宴被指着鼻子骂](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%B8%85%E6%9B%9D%E7%8E%8B%E9%98%B3%E6%9D%80%E9%9D%92%E5%AE%B4%E8%A2%AB%E6%8C%87%E7%9D%80%E9%BC%BB%E5%AD%90%E9%AA%82%23) `228.2K 🔥` `NEW`
1. [外交部回应韩国标注中国台湾](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E5%9B%9E%E5%BA%94%E9%9F%A9%E5%9B%BD%E6%A0%87%E6%B3%A8%E4%B8%AD%E5%9B%BD%E5%8F%B0%E6%B9%BE%23) `218.9K 🔥` `NEW`
1. [TOP更新站位](https://s.weibo.com/weibo?q=%23TOP%E6%9B%B4%E6%96%B0%E7%AB%99%E4%BD%8D%23) `214.6K 🔥` `NEW`
1. [IG对战TES](https://s.weibo.com/weibo?q=%23IG%E5%AF%B9%E6%88%98TES%23) `191.7K 🔥` `NEW`
1. [左航换头像](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E8%88%AA%E6%8D%A2%E5%A4%B4%E5%83%8F%23) `188.6K 🔥` `NEW`
1. [男女点同一份外卖分量却差一半](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%A5%B3%E7%82%B9%E5%90%8C%E4%B8%80%E4%BB%BD%E5%A4%96%E5%8D%96%E5%88%86%E9%87%8F%E5%8D%B4%E5%B7%AE%E4%B8%80%E5%8D%8A%23) `142.0K 🔥` `NEW`
1. [朱志鑫 黑猫天使](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%20%E9%BB%91%E7%8C%AB%E5%A4%A9%E4%BD%BF%23) `139.8K 🔥` `NEW`
1. [被割断气管男孩哥哥说会陪弟弟康复](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%89%B2%E6%96%AD%E6%B0%94%E7%AE%A1%E7%94%B7%E5%AD%A9%E5%93%A5%E5%93%A5%E8%AF%B4%E4%BC%9A%E9%99%AA%E5%BC%9F%E5%BC%9F%E5%BA%B7%E5%A4%8D%23) `139.7K 🔥` `NEW`
1. [苏新皓头像换饼图](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E5%A4%B4%E5%83%8F%E6%8D%A2%E9%A5%BC%E5%9B%BE%23) `139.2K 🔥` `NEW`
1. [女子挖野菜挖到大蛇双方都吓坏了 (Woman digs wild vegetables and digs out big snake, both parties are frightened)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8C%96%E9%87%8E%E8%8F%9C%E6%8C%96%E5%88%B0%E5%A4%A7%E8%9B%87%E5%8F%8C%E6%96%B9%E9%83%BD%E5%90%93%E5%9D%8F%E4%BA%86%23) `139.1K 🔥` `NEW`
1. [唐诡2造型指导致歉承认侵权](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%AF%A12%E9%80%A0%E5%9E%8B%E6%8C%87%E5%AF%BC%E8%87%B4%E6%AD%89%E6%89%BF%E8%AE%A4%E4%BE%B5%E6%9D%83%23) `114.5K 🔥` `NEW`
1. [男子1胎儿子2胎三胞胎儿子狂吃辣](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%901%E8%83%8E%E5%84%BF%E5%AD%902%E8%83%8E%E4%B8%89%E8%83%9E%E8%83%8E%E5%84%BF%E5%AD%90%E7%8B%82%E5%90%83%E8%BE%A3%23) `113.9K 🔥` `NEW`
1. [AG一诺回归](https://s.weibo.com/weibo?q=%23AG%E4%B8%80%E8%AF%BA%E5%9B%9E%E5%BD%92%23) `113.7K 🔥` `NEW`
1. [lululemon中国市场成救命稻草](https://s.weibo.com/weibo?q=%23lululemon%E4%B8%AD%E5%9B%BD%E5%B8%82%E5%9C%BA%E6%88%90%E6%95%91%E5%91%BD%E7%A8%BB%E8%8D%89%23) `101.8K 🔥` `NEW`
1. [上海一超市大连黄樱桃卖1692元一盒](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E4%B8%80%E8%B6%85%E5%B8%82%E5%A4%A7%E8%BF%9E%E9%BB%84%E6%A8%B1%E6%A1%83%E5%8D%961692%E5%85%83%E4%B8%80%E7%9B%92%23) `101.4K 🔥` `NEW`
1. [TOP换头像](https://s.weibo.com/weibo?q=%23TOP%E6%8D%A2%E5%A4%B4%E5%83%8F%23) `94.7K 🔥` `NEW`
1. [霉霉婚礼花卉布置预算超820万元](https://s.weibo.com/weibo?q=%23%E9%9C%89%E9%9C%89%E5%A9%9A%E7%A4%BC%E8%8A%B1%E5%8D%89%E5%B8%83%E7%BD%AE%E9%A2%84%E7%AE%97%E8%B6%85820%E4%B8%87%E5%85%83%23) `92.4K 🔥` `NEW`
1. [骑行被割断气管男孩哥哥发声](https://s.weibo.com/weibo?q=%23%E9%AA%91%E8%A1%8C%E8%A2%AB%E5%89%B2%E6%96%AD%E6%B0%94%E7%AE%A1%E7%94%B7%E5%AD%A9%E5%93%A5%E5%93%A5%E5%8F%91%E5%A3%B0%23) `92.0K 🔥` `NEW`
1. [养了7年的猎犬咬死19岁女主人](https://s.weibo.com/weibo?q=%23%E5%85%BB%E4%BA%867%E5%B9%B4%E7%9A%84%E7%8C%8E%E7%8A%AC%E5%92%AC%E6%AD%BB19%E5%B2%81%E5%A5%B3%E4%B8%BB%E4%BA%BA%23) `83.2K 🔥` `NEW`
1. [五一飞往东南亚航班大规模取消 (Massive cancellations of flights to Southeast Asia on May Day)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E9%A3%9E%E5%BE%80%E4%B8%9C%E5%8D%97%E4%BA%9A%E8%88%AA%E7%8F%AD%E5%A4%A7%E8%A7%84%E6%A8%A1%E5%8F%96%E6%B6%88%23) `76.4K 🔥` `NEW`
1. [韩国专家说韩国AI已被中国超过](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E4%B8%93%E5%AE%B6%E8%AF%B4%E9%9F%A9%E5%9B%BDAI%E5%B7%B2%E8%A2%AB%E4%B8%AD%E5%9B%BD%E8%B6%85%E8%BF%87%23) `68.2K 🔥` `NEW`
1. [33岁抗癌博主去世](https://s.weibo.com/weibo?q=%2333%E5%B2%81%E6%8A%97%E7%99%8C%E5%8D%9A%E4%B8%BB%E5%8E%BB%E4%B8%96%23) `1.1M 🔥` `+411%`
1. [胖东来多宝鱼被指吃出溯源标签 (Fat Donglai Turbot was accused of eating traceability labels)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E5%A4%9A%E5%AE%9D%E9%B1%BC%E8%A2%AB%E6%8C%87%E5%90%83%E5%87%BA%E6%BA%AF%E6%BA%90%E6%A0%87%E7%AD%BE%23) `800.6K 🔥` `+673%`
1. [谁懂这次换手机的意义](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%87%82%E8%BF%99%E6%AC%A1%E6%8D%A2%E6%89%8B%E6%9C%BA%E7%9A%84%E6%84%8F%E4%B9%89%23) `431.9K 🔥` `+256%`
1. [出生4天女婴被秤砣砸伤母亲发声](https://s.weibo.com/weibo?q=%23%E5%87%BA%E7%94%9F4%E5%A4%A9%E5%A5%B3%E5%A9%B4%E8%A2%AB%E7%A7%A4%E7%A0%A3%E7%A0%B8%E4%BC%A4%E6%AF%8D%E4%BA%B2%E5%8F%91%E5%A3%B0%23) `310.2K 🔥` `+91%`
1. [卖不完的果切都去哪了](https://s.weibo.com/weibo?q=%23%E5%8D%96%E4%B8%8D%E5%AE%8C%E7%9A%84%E6%9E%9C%E5%88%87%E9%83%BD%E5%8E%BB%E5%93%AA%E4%BA%86%23) `260.8K 🔥` `+36%`
1. [朴宝剑 费大厨](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%AE%9D%E5%89%91%20%E8%B4%B9%E5%A4%A7%E5%8E%A8%23) `226.9K 🔥` `+78%`
1. [马頔为了装修李乃文为了什么](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E4%B8%BA%E4%BA%86%E8%A3%85%E4%BF%AE%E6%9D%8E%E4%B9%83%E6%96%87%E4%B8%BA%E4%BA%86%E4%BB%80%E4%B9%88%23) `118.8K 🔥` `+24%`
1. [贾国龙新店50元焖面不够两个男人吃](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E5%9B%BD%E9%BE%99%E6%96%B0%E5%BA%9750%E5%85%83%E7%84%96%E9%9D%A2%E4%B8%8D%E5%A4%9F%E4%B8%A4%E4%B8%AA%E7%94%B7%E4%BA%BA%E5%90%83%23) `113.1K 🔥` `+33%`
1. [我国外贸起势有力开局良好 (my country's foreign trade is gaining momentum and getting off to a good start)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%A4%96%E8%B4%B8%E8%B5%B7%E5%8A%BF%E6%9C%89%E5%8A%9B%E5%BC%80%E5%B1%80%E8%89%AF%E5%A5%BD%23) `633.1K 🔥`
1. [罗志祥方否认猝死传闻 (Luo Zhixiang denies rumors of sudden death)](https://s.weibo.com/weibo?q=%23%E7%BD%97%E5%BF%97%E7%A5%A5%E6%96%B9%E5%90%A6%E8%AE%A4%E7%8C%9D%E6%AD%BB%E4%BC%A0%E9%97%BB%23) `206.9K 🔥`
1. [郭敬明的剧连演员本人都看不懂](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E7%9A%84%E5%89%A7%E8%BF%9E%E6%BC%94%E5%91%98%E6%9C%AC%E4%BA%BA%E9%83%BD%E7%9C%8B%E4%B8%8D%E6%87%82%23) `173.4K 🔥`
1. [张钧甯不去浪姐的原因 (The reason why Zhang Junning didn’t go to Sister Lang)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%92%A7%E7%94%AF%E4%B8%8D%E5%8E%BB%E6%B5%AA%E5%A7%90%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `140.2K 🔥`
1. [时代少年团直播](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%9B%B4%E6%92%AD%23) `139.5K 🔥`
1. [体检肝功能都正常怎么就肝癌了 (Liver function tests are normal, so why does he have liver cancer?)](https://s.weibo.com/weibo?q=%23%E4%BD%93%E6%A3%80%E8%82%9D%E5%8A%9F%E8%83%BD%E9%83%BD%E6%AD%A3%E5%B8%B8%E6%80%8E%E4%B9%88%E5%B0%B1%E8%82%9D%E7%99%8C%E4%BA%86%23) `129.5K 🔥`
1. [印度女生拒嫁艾滋男被注射毒血报复](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%A5%B3%E7%94%9F%E6%8B%92%E5%AB%81%E8%89%BE%E6%BB%8B%E7%94%B7%E8%A2%AB%E6%B3%A8%E5%B0%84%E6%AF%92%E8%A1%80%E6%8A%A5%E5%A4%8D%23) `119.9K 🔥`
1. [Lululemon被调查 (Lululemon under investigation)](https://s.weibo.com/weibo?q=%23Lululemon%E8%A2%AB%E8%B0%83%E6%9F%A5%23) `337.0K 🔥` `-69%`
1. [曝等风热吻你两组主演](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%AD%89%E9%A3%8E%E7%83%AD%E5%90%BB%E4%BD%A0%E4%B8%A4%E7%BB%84%E4%B8%BB%E6%BC%94%23) `256.8K 🔥` `-32%`
1. [中方从不承认所谓阿鲁纳恰尔邦 (China has never recognized the so-called Arunachal Pradesh)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E4%BB%8E%E4%B8%8D%E6%89%BF%E8%AE%A4%E6%89%80%E8%B0%93%E9%98%BF%E9%B2%81%E7%BA%B3%E6%81%B0%E5%B0%94%E9%82%A6%23) `229.4K 🔥` `-62%`
1. [突然意识到长辈从没独居过](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E6%84%8F%E8%AF%86%E5%88%B0%E9%95%BF%E8%BE%88%E4%BB%8E%E6%B2%A1%E7%8B%AC%E5%B1%85%E8%BF%87%23) `140.2K 🔥` `-40%`
1. [朴宝剑 茶姬卖场在哪](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%AE%9D%E5%89%91%20%E8%8C%B6%E5%A7%AC%E5%8D%96%E5%9C%BA%E5%9C%A8%E5%93%AA%23) `94.9K 🔥` `-42%`
1. [Faker被举报逃税](https://s.weibo.com/weibo?q=%23Faker%E8%A2%AB%E4%B8%BE%E6%8A%A5%E9%80%83%E7%A8%8E%23) `94.7K 🔥` `-81%`
1. [天安门挂起中西越三国国旗](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%AE%89%E9%97%A8%E6%8C%82%E8%B5%B7%E4%B8%AD%E8%A5%BF%E8%B6%8A%E4%B8%89%E5%9B%BD%E5%9B%BD%E6%97%97%23) `91.5K 🔥` `-89%`
1. [受困霍尔木兹海峡船员已有精神问题](https://s.weibo.com/weibo?q=%23%E5%8F%97%E5%9B%B0%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E8%88%B9%E5%91%98%E5%B7%B2%E6%9C%89%E7%B2%BE%E7%A5%9E%E9%97%AE%E9%A2%98%23) `90.3K 🔥` `-42%`
1. [家里三口人有57把雨伞 (There are 57 umbrellas in the family of three)](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%87%8C%E4%B8%89%E5%8F%A3%E4%BA%BA%E6%9C%8957%E6%8A%8A%E9%9B%A8%E4%BC%9E%23) `89.1K 🔥` `-65%`
1. [张紫宁没选上浪姐是因为不够drama](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%B4%AB%E5%AE%81%E6%B2%A1%E9%80%89%E4%B8%8A%E6%B5%AA%E5%A7%90%E6%98%AF%E5%9B%A0%E4%B8%BA%E4%B8%8D%E5%A4%9Fdrama%23) `81.9K 🔥` `-49%`
1. [怦然心动20岁 (Heart-thumping 20 years old)](https://s.weibo.com/weibo?q=%23%E6%80%A6%E7%84%B6%E5%BF%83%E5%8A%A820%E5%B2%81%23) `68.9K 🔥` `-63%`
1. [偏偏宠爱 闫桉](https://s.weibo.com/weibo?q=%23%E5%81%8F%E5%81%8F%E5%AE%A0%E7%88%B1%20%E9%97%AB%E6%A1%89%23) `68.7K 🔥` `-32%`
1. [迪丽热巴工作室回应审美争议 (Dilraba's studio responds to aesthetic controversy)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%9B%9E%E5%BA%94%E5%AE%A1%E7%BE%8E%E4%BA%89%E8%AE%AE%23) `68.3K 🔥` `-44%`

Updated at 2026-04-14 20:41:49

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
