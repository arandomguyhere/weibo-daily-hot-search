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

1. [宝曼兰朵全球品牌代言人杨紫 (Yang Zi, the global brand spokesperson of Powerland)](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E6%9B%BC%E5%85%B0%E6%9C%B5%E5%85%A8%E7%90%83%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%E6%9D%A8%E7%B4%AB%23) `183.2K 🔥` `NEW`
1. [李昊演唱会](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%8A%E6%BC%94%E5%94%B1%E4%BC%9A%23) `84.8K 🔥` `NEW`
1. [医院里儿子被夸帅盲人妈妈连追问](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E9%87%8C%E5%84%BF%E5%AD%90%E8%A2%AB%E5%A4%B8%E5%B8%85%E7%9B%B2%E4%BA%BA%E5%A6%88%E5%A6%88%E8%BF%9E%E8%BF%BD%E9%97%AE%23) `77.8K 🔥` `NEW`
1. [穷鬼年轻人被免费试吃坑麻了](https://s.weibo.com/weibo?q=%23%E7%A9%B7%E9%AC%BC%E5%B9%B4%E8%BD%BB%E4%BA%BA%E8%A2%AB%E5%85%8D%E8%B4%B9%E8%AF%95%E5%90%83%E5%9D%91%E9%BA%BB%E4%BA%86%23) `77.6K 🔥` `NEW`
1. [张泽禹戴皇冠](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%B3%BD%E7%A6%B9%E6%88%B4%E7%9A%87%E5%86%A0%23) `77.5K 🔥` `NEW`
1. [不要被人当五折券用 (Don't be used as a 50% off coupon)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E8%A2%AB%E4%BA%BA%E5%BD%93%E4%BA%94%E6%8A%98%E5%88%B8%E7%94%A8%23) `183.1K 🔥` `+27%`
1. [保安与业主冲突后摔下楼梯身亡](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%AE%89%E4%B8%8E%E4%B8%9A%E4%B8%BB%E5%86%B2%E7%AA%81%E5%90%8E%E6%91%94%E4%B8%8B%E6%A5%BC%E6%A2%AF%E8%BA%AB%E4%BA%A1%23) `158.2K 🔥` `+35%`
1. [自家冰箱里拿出来的雪糕不要着急吃](https://s.weibo.com/weibo?q=%23%E8%87%AA%E5%AE%B6%E5%86%B0%E7%AE%B1%E9%87%8C%E6%8B%BF%E5%87%BA%E6%9D%A5%E7%9A%84%E9%9B%AA%E7%B3%95%E4%B8%8D%E8%A6%81%E7%9D%80%E6%80%A5%E5%90%83%23) `100.9K 🔥`
1. [千万不要把手机交给商家写好评](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E6%8A%8A%E6%89%8B%E6%9C%BA%E4%BA%A4%E7%BB%99%E5%95%86%E5%AE%B6%E5%86%99%E5%A5%BD%E8%AF%84%23) `375.1K 🔥` `-42%`
1. [网友曝胖东来直饮水成免费取水点](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%9B%9D%E8%83%96%E4%B8%9C%E6%9D%A5%E7%9B%B4%E9%A5%AE%E6%B0%B4%E6%88%90%E5%85%8D%E8%B4%B9%E5%8F%96%E6%B0%B4%E7%82%B9%23) `300.9K 🔥` `-29%`
1. [制胜预告片震撼首发](https://s.weibo.com/weibo?q=%23%E5%88%B6%E8%83%9C%E9%A2%84%E5%91%8A%E7%89%87%E9%9C%87%E6%92%BC%E9%A6%96%E5%8F%91%23) `261.4K 🔥` `-27%`
1. [张泽禹道歉 (Zhang Zeyu apologizes)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%B3%BD%E7%A6%B9%E9%81%93%E6%AD%89%23) `244.1K 🔥` `-31%`
1. [赵昭仪演戏一直这样吗 (Has Zhao Zhaoyi always acted like this?)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%98%AD%E4%BB%AA%E6%BC%94%E6%88%8F%E4%B8%80%E7%9B%B4%E8%BF%99%E6%A0%B7%E5%90%97%23) `189.2K 🔥` `-45%`
1. [小区电梯失控从31楼下坠到负2楼 (The elevator in the community lost control and fell from the 31st floor to the negative 2nd floor.)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%8C%BA%E7%94%B5%E6%A2%AF%E5%A4%B1%E6%8E%A7%E4%BB%8E31%E6%A5%BC%E4%B8%8B%E5%9D%A0%E5%88%B0%E8%B4%9F2%E6%A5%BC%23) `186.4K 🔥` `-44%`
1. [莫氏鸡煲首轮遭淘汰](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E9%A6%96%E8%BD%AE%E9%81%AD%E6%B7%98%E6%B1%B0%23) `98.4K 🔥` `-52%`
1. [周佑凌因柳柳给民宿改名](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%BD%91%E5%87%8C%E5%9B%A0%E6%9F%B3%E6%9F%B3%E7%BB%99%E6%B0%91%E5%AE%BF%E6%94%B9%E5%90%8D%23) `97.6K 🔥` `-39%`
1. [孔雪儿邓凯一天内二搭变三搭 (Kong Xueer and Deng Kai’s two outfits turned into three outfits in one day)](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E9%82%93%E5%87%AF%E4%B8%80%E5%A4%A9%E5%86%85%E4%BA%8C%E6%90%AD%E5%8F%98%E4%B8%89%E6%90%AD%23) `90.8K 🔥` `-31%`
1. [高个子最为薄弱的地方](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%AA%E5%AD%90%E6%9C%80%E4%B8%BA%E8%96%84%E5%BC%B1%E7%9A%84%E5%9C%B0%E6%96%B9%23) `89.5K 🔥` `-45%`
1. [开车是最容易进入心流状态的活动](https://s.weibo.com/weibo?q=%23%E5%BC%80%E8%BD%A6%E6%98%AF%E6%9C%80%E5%AE%B9%E6%98%93%E8%BF%9B%E5%85%A5%E5%BF%83%E6%B5%81%E7%8A%B6%E6%80%81%E7%9A%84%E6%B4%BB%E5%8A%A8%23) `84.4K 🔥` `-63%`
1. [十日终焉杀青出现了血月](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E6%9D%80%E9%9D%92%E5%87%BA%E7%8E%B0%E4%BA%86%E8%A1%80%E6%9C%88%23) `84.1K 🔥` `-41%`
1. [女子隐私照未打码被医美发朋友圈](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%9A%90%E7%A7%81%E7%85%A7%E6%9C%AA%E6%89%93%E7%A0%81%E8%A2%AB%E5%8C%BB%E7%BE%8E%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `83.9K 🔥` `-45%`
1. [不抠字眼是一种认知高的表现](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E6%8A%A0%E5%AD%97%E7%9C%BC%E6%98%AF%E4%B8%80%E7%A7%8D%E8%AE%A4%E7%9F%A5%E9%AB%98%E7%9A%84%E8%A1%A8%E7%8E%B0%23) `78.6K 🔥` `-26%`
1. [已经忘了微信是怎么取代QQ的了](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E7%BB%8F%E5%BF%98%E4%BA%86%E5%BE%AE%E4%BF%A1%E6%98%AF%E6%80%8E%E4%B9%88%E5%8F%96%E4%BB%A3QQ%E7%9A%84%E4%BA%86%23) `78.3K 🔥` `-51%`
1. [眼镜蛇断头5分钟后把人咬成重伤](https://s.weibo.com/weibo?q=%23%E7%9C%BC%E9%95%9C%E8%9B%87%E6%96%AD%E5%A4%B45%E5%88%86%E9%92%9F%E5%90%8E%E6%8A%8A%E4%BA%BA%E5%92%AC%E6%88%90%E9%87%8D%E4%BC%A4%23) `78.1K 🔥` `-28%`
1. [蜘蛛侠4 (spider man 4)](https://s.weibo.com/weibo?q=%23%E8%9C%98%E8%9B%9B%E4%BE%A04%23) `77.9K 🔥` `-44%`
1. [赛里木湖75元自驾服务费已依法备案](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E9%87%8C%E6%9C%A8%E6%B9%9675%E5%85%83%E8%87%AA%E9%A9%BE%E6%9C%8D%E5%8A%A1%E8%B4%B9%E5%B7%B2%E4%BE%9D%E6%B3%95%E5%A4%87%E6%A1%88%23) `77.9K 🔥` `-26%`
1. [日本在731这天成立新特高课其心可诛](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%A8731%E8%BF%99%E5%A4%A9%E6%88%90%E7%AB%8B%E6%96%B0%E7%89%B9%E9%AB%98%E8%AF%BE%E5%85%B6%E5%BF%83%E5%8F%AF%E8%AF%9B%23) `77.9K 🔥` `-28%`
1. [司晓迪反复碰瓷艺人收割流量该管了 (Si Xiaodi repeatedly touched the porcelain artist and harvested traffic. It’s time to control it.)](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E6%99%93%E8%BF%AA%E5%8F%8D%E5%A4%8D%E7%A2%B0%E7%93%B7%E8%89%BA%E4%BA%BA%E6%94%B6%E5%89%B2%E6%B5%81%E9%87%8F%E8%AF%A5%E7%AE%A1%E4%BA%86%23) `77.9K 🔥` `-41%`
1. [二次元毛娘因甲醛中毒永久停单](https://s.weibo.com/weibo?q=%23%E4%BA%8C%E6%AC%A1%E5%85%83%E6%AF%9B%E5%A8%98%E5%9B%A0%E7%94%B2%E9%86%9B%E4%B8%AD%E6%AF%92%E6%B0%B8%E4%B9%85%E5%81%9C%E5%8D%95%23) `77.9K 🔥` `-27%`
1. [薛之谦全部专辑版权归自己](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E5%85%A8%E9%83%A8%E4%B8%93%E8%BE%91%E7%89%88%E6%9D%83%E5%BD%92%E8%87%AA%E5%B7%B1%23) `77.9K 🔥` `-27%`
1. [苏新皓发言哽咽 (Su Xinhao choked up while speaking)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E5%8F%91%E8%A8%80%E5%93%BD%E5%92%BD%23) `77.8K 🔥` `-36%`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `77.8K 🔥` `-27%`
1. [人民日报谈广西纸贵](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%B0%88%E5%B9%BF%E8%A5%BF%E7%BA%B8%E8%B4%B5%23) `77.8K 🔥` `-25%`
1. [物尽其用才是最大的珍惜](https://s.weibo.com/weibo?q=%23%E7%89%A9%E5%B0%BD%E5%85%B6%E7%94%A8%E6%89%8D%E6%98%AF%E6%9C%80%E5%A4%A7%E7%9A%84%E7%8F%8D%E6%83%9C%23) `77.8K 🔥` `-24%`
1. [不要再指责现在的人过度防晒了](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E5%86%8D%E6%8C%87%E8%B4%A3%E7%8E%B0%E5%9C%A8%E7%9A%84%E4%BA%BA%E8%BF%87%E5%BA%A6%E9%98%B2%E6%99%92%E4%BA%86%23) `77.8K 🔥` `-28%`
1. [BLG战胜LGD (BLG defeated LGD)](https://s.weibo.com/weibo?q=%23BLG%E6%88%98%E8%83%9CLGD%23) `77.8K 🔥` `-27%`
1. [女孩摆拍盲道被撞细节曝光](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%91%86%E6%8B%8D%E7%9B%B2%E9%81%93%E8%A2%AB%E6%92%9E%E7%BB%86%E8%8A%82%E6%9B%9D%E5%85%89%23) `77.7K 🔥` `-28%`
1. [燕云十六声 (Yanyun sixteen tones)](https://s.weibo.com/weibo?q=%23%E7%87%95%E4%BA%91%E5%8D%81%E5%85%AD%E5%A3%B0%23) `77.7K 🔥` `-25%`
1. [周佑凌之前直播是从柳柳家回自己家播](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%BD%91%E5%87%8C%E4%B9%8B%E5%89%8D%E7%9B%B4%E6%92%AD%E6%98%AF%E4%BB%8E%E6%9F%B3%E6%9F%B3%E5%AE%B6%E5%9B%9E%E8%87%AA%E5%B7%B1%E5%AE%B6%E6%92%AD%23) `77.7K 🔥` `-27%`
1. [泸溪河桃酥牙冠当事人发声](https://s.weibo.com/weibo?q=%23%E6%B3%B8%E6%BA%AA%E6%B2%B3%E6%A1%83%E9%85%A5%E7%89%99%E5%86%A0%E5%BD%93%E4%BA%8B%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `77.7K 🔥` `-27%`
1. [周星驰做客董宇辉直播间](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E5%81%9A%E5%AE%A2%E8%91%A3%E5%AE%87%E8%BE%89%E7%9B%B4%E6%92%AD%E9%97%B4%23) `77.7K 🔥` `-26%`
1. [保姆因不能生育拐走雇主家10月大男婴](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%A7%86%E5%9B%A0%E4%B8%8D%E8%83%BD%E7%94%9F%E8%82%B2%E6%8B%90%E8%B5%B0%E9%9B%87%E4%B8%BB%E5%AE%B610%E6%9C%88%E5%A4%A7%E7%94%B7%E5%A9%B4%23) `77.7K 🔥` `-27%`
1. [中国男排vs日本男排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E6%8E%92vs%E6%97%A5%E6%9C%AC%E7%94%B7%E6%8E%92%23) `77.7K 🔥` `-25%`
1. [密逃连夜给陈哲远做了英寡特效](https://s.weibo.com/weibo?q=%23%E5%AF%86%E9%80%83%E8%BF%9E%E5%A4%9C%E7%BB%99%E9%99%88%E5%93%B2%E8%BF%9C%E5%81%9A%E4%BA%86%E8%8B%B1%E5%AF%A1%E7%89%B9%E6%95%88%23) `77.6K 🔥` `-24%`
1. [丁俊晖vs赵心童](https://s.weibo.com/weibo?q=%23%E4%B8%81%E4%BF%8A%E6%99%96vs%E8%B5%B5%E5%BF%83%E7%AB%A5%23) `77.6K 🔥` `-26%`
1. [亮宇好惨](https://s.weibo.com/weibo?q=%23%E4%BA%AE%E5%AE%87%E5%A5%BD%E6%83%A8%23) `77.6K 🔥` `-25%`
1. [郑钦文排名跌至123位](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%8E%92%E5%90%8D%E8%B7%8C%E8%87%B3123%E4%BD%8D%23) `77.6K 🔥` `-25%`
1. [蜘蛛侠 好看 (spiderman good looking)](https://s.weibo.com/weibo?q=%23%E8%9C%98%E8%9B%9B%E4%BE%A0%20%E5%A5%BD%E7%9C%8B%23) `77.6K 🔥` `-26%`
1. [胡一天时隔两年播剧](https://s.weibo.com/weibo?q=%23%E8%83%A1%E4%B8%80%E5%A4%A9%E6%97%B6%E9%9A%94%E4%B8%A4%E5%B9%B4%E6%92%AD%E5%89%A7%23) `77.6K 🔥` `-26%`
1. [开车久了真的会有准确的直觉](https://s.weibo.com/weibo?q=%23%E5%BC%80%E8%BD%A6%E4%B9%85%E4%BA%86%E7%9C%9F%E7%9A%84%E4%BC%9A%E6%9C%89%E5%87%86%E7%A1%AE%E7%9A%84%E7%9B%B4%E8%A7%89%23) `77.5K 🔥` `-25%`

Updated at 2026-07-30 02:34:55

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
