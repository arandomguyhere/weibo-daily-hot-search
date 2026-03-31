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

1. [长鹰8大型运输无人机首飞成功 (Changying 8 large-scale transport drone successfully made its maiden flight)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%B9%B08%E5%A4%A7%E5%9E%8B%E8%BF%90%E8%BE%93%E6%97%A0%E4%BA%BA%E6%9C%BA%E9%A6%96%E9%A3%9E%E6%88%90%E5%8A%9F%23) `631.4K 🔥` `NEW`
1. [曾沛慈人气第一](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E4%BA%BA%E6%B0%94%E7%AC%AC%E4%B8%80%23) `535.5K 🔥` `NEW`
1. [麻辣烫里最夯的是啥菜](https://s.weibo.com/weibo?q=%23%E9%BA%BB%E8%BE%A3%E7%83%AB%E9%87%8C%E6%9C%80%E5%A4%AF%E7%9A%84%E6%98%AF%E5%95%A5%E8%8F%9C%23) `256.2K 🔥` `NEW`
1. [范世錡工作室回应被删](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%96%E9%8C%A1%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%9B%9E%E5%BA%94%E8%A2%AB%E5%88%A0%23) `253.4K 🔥` `NEW`
1. [河南一高中近半历史老师无学生可教](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%80%E9%AB%98%E4%B8%AD%E8%BF%91%E5%8D%8A%E5%8E%86%E5%8F%B2%E8%80%81%E5%B8%88%E6%97%A0%E5%AD%A6%E7%94%9F%E5%8F%AF%E6%95%99%23) `235.6K 🔥` `NEW`
1. [月鳞绮纪](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%23) `215.2K 🔥` `NEW`
1. [米饭拌白糖](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E9%A5%AD%E6%8B%8C%E7%99%BD%E7%B3%96%23) `209.9K 🔥` `NEW`
1. [痞幼直播时抽烟](https://s.weibo.com/weibo?q=%23%E7%97%9E%E5%B9%BC%E7%9B%B4%E6%92%AD%E6%97%B6%E6%8A%BD%E7%83%9F%23) `199.7K 🔥` `NEW`
1. [严浩翔考核试卷](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E8%80%83%E6%A0%B8%E8%AF%95%E5%8D%B7%23) `194.5K 🔥` `NEW`
1. [怪不得公司一边招人一边裁员](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E5%85%AC%E5%8F%B8%E4%B8%80%E8%BE%B9%E6%8B%9B%E4%BA%BA%E4%B8%80%E8%BE%B9%E8%A3%81%E5%91%98%23) `188.3K 🔥` `NEW`
1. [李健硬要给许飞版权费 (Li Jian insists on paying royalties to Xu Fei)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%81%A5%E7%A1%AC%E8%A6%81%E7%BB%99%E8%AE%B8%E9%A3%9E%E7%89%88%E6%9D%83%E8%B4%B9%23) `187.0K 🔥` `NEW`
1. [谢谢科学家](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B0%A2%E7%A7%91%E5%AD%A6%E5%AE%B6%23) `181.0K 🔥` `NEW`
1. [乒坛泰斗和樊振东对练](https://s.weibo.com/weibo?q=%23%E4%B9%92%E5%9D%9B%E6%B3%B0%E6%96%97%E5%92%8C%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%AF%B9%E7%BB%83%23) `175.8K 🔥` `NEW`
1. [女子冒充老师谈恋爱诈骗20多万](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%86%92%E5%85%85%E8%80%81%E5%B8%88%E8%B0%88%E6%81%8B%E7%88%B1%E8%AF%88%E9%AA%9720%E5%A4%9A%E4%B8%87%23) `173.5K 🔥` `NEW`
1. [普通人被AI短剧偷脸成猥琐好色角色](https://s.weibo.com/weibo?q=%23%E6%99%AE%E9%80%9A%E4%BA%BA%E8%A2%ABAI%E7%9F%AD%E5%89%A7%E5%81%B7%E8%84%B8%E6%88%90%E7%8C%A5%E7%90%90%E5%A5%BD%E8%89%B2%E8%A7%92%E8%89%B2%23) `168.8K 🔥` `NEW`
1. [九三阅兵直播总导演谈超级运镜](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E4%B8%89%E9%98%85%E5%85%B5%E7%9B%B4%E6%92%AD%E6%80%BB%E5%AF%BC%E6%BC%94%E8%B0%88%E8%B6%85%E7%BA%A7%E8%BF%90%E9%95%9C%23) `164.7K 🔥` `NEW`
1. [动荡的内娱迎来了最清醒的粉丝](https://s.weibo.com/weibo?q=%23%E5%8A%A8%E8%8D%A1%E7%9A%84%E5%86%85%E5%A8%B1%E8%BF%8E%E6%9D%A5%E4%BA%86%E6%9C%80%E6%B8%85%E9%86%92%E7%9A%84%E7%B2%89%E4%B8%9D%23) `156.3K 🔥` `NEW`
1. [辛苦考上幼师后幼儿园却没了](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8B%A6%E8%80%83%E4%B8%8A%E5%B9%BC%E5%B8%88%E5%90%8E%E5%B9%BC%E5%84%BF%E5%9B%AD%E5%8D%B4%E6%B2%A1%E4%BA%86%23) `148.4K 🔥` `NEW`
1. [孙怡女团风穿搭也是有了新的退展](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E5%A5%B3%E5%9B%A2%E9%A3%8E%E7%A9%BF%E6%90%AD%E4%B9%9F%E6%98%AF%E6%9C%89%E4%BA%86%E6%96%B0%E7%9A%84%E9%80%80%E5%B1%95%23) `141.5K 🔥` `NEW`
1. [国足0比2喀麦隆](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B30%E6%AF%942%E5%96%80%E9%BA%A6%E9%9A%86%23) `135.1K 🔥` `NEW`
1. [中国3艘船成功通过霍尔木兹海峡 (Three Chinese ships successfully passed through the Strait of Hormuz)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD3%E8%89%98%E8%88%B9%E6%88%90%E5%8A%9F%E9%80%9A%E8%BF%87%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%23) `129.9K 🔥` `NEW`
1. [你能想到的乒乓顶流可能都在这了](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E8%83%BD%E6%83%B3%E5%88%B0%E7%9A%84%E4%B9%92%E4%B9%93%E9%A1%B6%E6%B5%81%E5%8F%AF%E8%83%BD%E9%83%BD%E5%9C%A8%E8%BF%99%E4%BA%86%23) `115.1K 🔥` `NEW`
1. [A股3月收官](https://s.weibo.com/weibo?q=%23A%E8%82%A13%E6%9C%88%E6%94%B6%E5%AE%98%23) `114.2K 🔥` `NEW`
1. [梁靖崑2比3西福恩特斯](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%912%E6%AF%943%E8%A5%BF%E7%A6%8F%E6%81%A9%E7%89%B9%E6%96%AF%23) `113.8K 🔥` `NEW`
1. [李昀锐王鹤棣宋茜当上宣传委员了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%AE%8B%E8%8C%9C%E5%BD%93%E4%B8%8A%E5%AE%A3%E4%BC%A0%E5%A7%94%E5%91%98%E4%BA%86%23) `112.3K 🔥` `NEW`
1. [孙俪的权威我早就知道](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E7%9A%84%E6%9D%83%E5%A8%81%E6%88%91%E6%97%A9%E5%B0%B1%E7%9F%A5%E9%81%93%23) `111.1K 🔥` `NEW`
1. [民警苦劝4小时保住女子110万婚资](https://s.weibo.com/weibo?q=%23%E6%B0%91%E8%AD%A6%E8%8B%A6%E5%8A%9D4%E5%B0%8F%E6%97%B6%E4%BF%9D%E4%BD%8F%E5%A5%B3%E5%AD%90110%E4%B8%87%E5%A9%9A%E8%B5%84%23) `111.0K 🔥` `NEW`
1. [养了一年猫感觉嘴里都是猫毛](https://s.weibo.com/weibo?q=%23%E5%85%BB%E4%BA%86%E4%B8%80%E5%B9%B4%E7%8C%AB%E6%84%9F%E8%A7%89%E5%98%B4%E9%87%8C%E9%83%BD%E6%98%AF%E7%8C%AB%E6%AF%9B%23) `98.3K 🔥` `NEW`
1. [月鳞绮纪全员be](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E5%85%A8%E5%91%98be%23) `94.6K 🔥` `NEW`
1. [花间令给鞠婧祎月鳞绮纪打call](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E9%97%B4%E4%BB%A4%E7%BB%99%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E6%89%93call%23) `91.2K 🔥` `NEW`
1. [每天午睡vs从不午睡有多大差别 (What’s the difference between napping every day vs. never napping?)](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%A4%A9%E5%8D%88%E7%9D%A1vs%E4%BB%8E%E4%B8%8D%E5%8D%88%E7%9D%A1%E6%9C%89%E5%A4%9A%E5%A4%A7%E5%B7%AE%E5%88%AB%23) `88.9K 🔥` `NEW`
1. [张雪](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%23) `1.1M 🔥` `+41%`
1. [国足9分钟内连丢2球](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B39%E5%88%86%E9%92%9F%E5%86%85%E8%BF%9E%E4%B8%A22%E7%90%83%23) `832.3K 🔥` `+697%`
1. [广州长隆回应狮子静坐淋雨](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E9%95%BF%E9%9A%86%E5%9B%9E%E5%BA%94%E7%8B%AE%E5%AD%90%E9%9D%99%E5%9D%90%E6%B7%8B%E9%9B%A8%23) `250.2K 🔥` `+145%`
1. [一年前离职的时候就预判了今天](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%B9%B4%E5%89%8D%E7%A6%BB%E8%81%8C%E7%9A%84%E6%97%B6%E5%80%99%E5%B0%B1%E9%A2%84%E5%88%A4%E4%BA%86%E4%BB%8A%E5%A4%A9%23) `244.7K 🔥` `+134%`
1. [张雪机车订单排到六月底](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E8%AE%A2%E5%8D%95%E6%8E%92%E5%88%B0%E5%85%AD%E6%9C%88%E5%BA%95%23) `136.9K 🔥` `+33%`
1. [大通全新星际L上市](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%80%9A%E5%85%A8%E6%96%B0%E6%98%9F%E9%99%85L%E4%B8%8A%E5%B8%82%23) `588.2K 🔥`
1. [黄油年糕被改名为韩国年糕](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%B2%B9%E5%B9%B4%E7%B3%95%E8%A2%AB%E6%94%B9%E5%90%8D%E4%B8%BA%E9%9F%A9%E5%9B%BD%E5%B9%B4%E7%B3%95%23) `161.3K 🔥`
1. [森林北自曝曾抑制身高 (Forest North revealed that he had suppressed his height)](https://s.weibo.com/weibo?q=%23%E6%A3%AE%E6%9E%97%E5%8C%97%E8%87%AA%E6%9B%9D%E6%9B%BE%E6%8A%91%E5%88%B6%E8%BA%AB%E9%AB%98%23) `129.6K 🔥`
1. [鞠婧祎工作室声明 (Ju Jingyi Studio Statement)](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%A3%B0%E6%98%8E%23) `5.7M 🔥` `-25%`
1. [人民日报曾评单依纯李白改编争议 (People's Daily once commented on the controversy over Shan Yichun's adaptation of Li Bai)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E6%9B%BE%E8%AF%84%E5%8D%95%E4%BE%9D%E7%BA%AF%E6%9D%8E%E7%99%BD%E6%94%B9%E7%BC%96%E4%BA%89%E8%AE%AE%23) `151.3K 🔥` `-42%`
1. [爸爸去哪儿的阿拉蕾长大了](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%8E%BB%E5%93%AA%E5%84%BF%E7%9A%84%E9%98%BF%E6%8B%89%E8%95%BE%E9%95%BF%E5%A4%A7%E4%BA%86%23) `147.9K 🔥` `-51%`
1. [官方通报男子玩真人CS高坠身亡](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E7%94%B7%E5%AD%90%E7%8E%A9%E7%9C%9F%E4%BA%BACS%E9%AB%98%E5%9D%A0%E8%BA%AB%E4%BA%A1%23) `126.4K 🔥` `-70%`
1. [AI演员 拼尸块 (AI actor pieced together corpse)](https://s.weibo.com/weibo?q=%23AI%E6%BC%94%E5%91%98%20%E6%8B%BC%E5%B0%B8%E5%9D%97%23) `121.7K 🔥` `-66%`
1. [我不成仙](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%B8%8D%E6%88%90%E4%BB%99%23) `115.6K 🔥` `-85%`
1. [卜凡团播](https://s.weibo.com/weibo?q=%23%E5%8D%9C%E5%87%A1%E5%9B%A2%E6%92%AD%23) `110.9K 🔥` `-38%`
1. [伊朗最大岛屿遭美以袭击](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%80%E5%A4%A7%E5%B2%9B%E5%B1%BF%E9%81%AD%E7%BE%8E%E4%BB%A5%E8%A2%AD%E5%87%BB%23) `92.7K 🔥` `-77%`
1. [国足vs喀麦隆 (National Football Team vs Cameroon)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%B6%B3vs%E5%96%80%E9%BA%A6%E9%9A%86%23) `92.6K 🔥` `-91%`
1. [阿沁曾说自己靠版权年收入破千万](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%B2%81%E6%9B%BE%E8%AF%B4%E8%87%AA%E5%B7%B1%E9%9D%A0%E7%89%88%E6%9D%83%E5%B9%B4%E6%94%B6%E5%85%A5%E7%A0%B4%E5%8D%83%E4%B8%87%23) `89.1K 🔥` `-26%`
1. [地铁吐血女孩账户因转账频繁被封](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E9%93%81%E5%90%90%E8%A1%80%E5%A5%B3%E5%AD%A9%E8%B4%A6%E6%88%B7%E5%9B%A0%E8%BD%AC%E8%B4%A6%E9%A2%91%E7%B9%81%E8%A2%AB%E5%B0%81%23) `88.8K 🔥` `-77%`
1. [中国人海上百米高空吊装百米叶片](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B5%B7%E4%B8%8A%E7%99%BE%E7%B1%B3%E9%AB%98%E7%A9%BA%E5%90%8A%E8%A3%85%E7%99%BE%E7%B1%B3%E5%8F%B6%E7%89%87%23) `85.4K 🔥` `-86%`

Updated at 2026-03-31 16:16:10

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
