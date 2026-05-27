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

1. [比亚迪智能化战略发布会 (BYD Intelligent Strategy Conference)](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E6%99%BA%E8%83%BD%E5%8C%96%E6%88%98%E7%95%A5%E5%8F%91%E5%B8%83%E4%BC%9A%23) `419.6K 🔥` `NEW`
1. [全世界最容易撞衫的地方就是大学](https://s.weibo.com/weibo?q=%23%E5%85%A8%E4%B8%96%E7%95%8C%E6%9C%80%E5%AE%B9%E6%98%93%E6%92%9E%E8%A1%AB%E7%9A%84%E5%9C%B0%E6%96%B9%E5%B0%B1%E6%98%AF%E5%A4%A7%E5%AD%A6%23) `58.8K 🔥` `NEW`
1. [忆秦娥给刘红兵下药](https://s.weibo.com/weibo?q=%23%E5%BF%86%E7%A7%A6%E5%A8%A5%E7%BB%99%E5%88%98%E7%BA%A2%E5%85%B5%E4%B8%8B%E8%8D%AF%23) `57.6K 🔥` `NEW`
1. [给阿嬷的情书 (A love letter to grandma)](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%23) `593.5K 🔥` `+466%`
1. [外国网红中国搭便车的视频火到国外 (Video of foreign internet celebrity hitchhiking in China goes viral abroad)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E7%BD%91%E7%BA%A2%E4%B8%AD%E5%9B%BD%E6%90%AD%E4%BE%BF%E8%BD%A6%E7%9A%84%E8%A7%86%E9%A2%91%E7%81%AB%E5%88%B0%E5%9B%BD%E5%A4%96%23) `423.6K 🔥` `+201%`
1. [优质网络主播中国行天津行](https://s.weibo.com/weibo?q=%23%E4%BC%98%E8%B4%A8%E7%BD%91%E7%BB%9C%E4%B8%BB%E6%92%AD%E4%B8%AD%E5%9B%BD%E8%A1%8C%E5%A4%A9%E6%B4%A5%E8%A1%8C%23) `419.8K 🔥` `+406%`
1. [杨紫韩东君真的拍了落地签 (Yang Zi and Han Dongjun really took the visa on arrival)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E9%9F%A9%E4%B8%9C%E5%90%9B%E7%9C%9F%E7%9A%84%E6%8B%8D%E4%BA%86%E8%90%BD%E5%9C%B0%E7%AD%BE%23) `419.5K 🔥` `+432%`
1. [男子连吃半个月香蕉补钾进了ICU](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%BF%9E%E5%90%83%E5%8D%8A%E4%B8%AA%E6%9C%88%E9%A6%99%E8%95%89%E8%A1%A5%E9%92%BE%E8%BF%9B%E4%BA%86ICU%23) `419.3K 🔥` `+418%`
1. [王鹤棣不舒服只是迟到的自我保护](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E4%B8%8D%E8%88%92%E6%9C%8D%E5%8F%AA%E6%98%AF%E8%BF%9F%E5%88%B0%E7%9A%84%E8%87%AA%E6%88%91%E4%BF%9D%E6%8A%A4%23) `418.0K 🔥` `+426%`
1. [女教师打伞事件双方并非父女](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%95%99%E5%B8%88%E6%89%93%E4%BC%9E%E4%BA%8B%E4%BB%B6%E5%8F%8C%E6%96%B9%E5%B9%B6%E9%9D%9E%E7%88%B6%E5%A5%B3%23) `267.3K 🔥` `+399%`
1. [失去报刊亭的故事会 一生被毁了](https://s.weibo.com/weibo?q=%23%E5%A4%B1%E5%8E%BB%E6%8A%A5%E5%88%8A%E4%BA%AD%E7%9A%84%E6%95%85%E4%BA%8B%E4%BC%9A%20%E4%B8%80%E7%94%9F%E8%A2%AB%E6%AF%81%E4%BA%86%23) `191.3K 🔥` `+159%`
1. [店家是不是对小菜有什么误解](https://s.weibo.com/weibo?q=%23%E5%BA%97%E5%AE%B6%E6%98%AF%E4%B8%8D%E6%98%AF%E5%AF%B9%E5%B0%8F%E8%8F%9C%E6%9C%89%E4%BB%80%E4%B9%88%E8%AF%AF%E8%A7%A3%23) `124.7K 🔥` `+119%`
1. [莱巴金娜法网爆冷出局 (Rybakina crashes out of French Open)](https://s.weibo.com/weibo?q=%23%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%E6%B3%95%E7%BD%91%E7%88%86%E5%86%B7%E5%87%BA%E5%B1%80%23) `124.4K 🔥` `+123%`
1. [女记者暗访代孕窝点被打骨折](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E8%AE%B0%E8%80%85%E6%9A%97%E8%AE%BF%E4%BB%A3%E5%AD%95%E7%AA%9D%E7%82%B9%E8%A2%AB%E6%89%93%E9%AA%A8%E6%8A%98%23) `124.1K 🔥` `+129%`
1. [南方暴雨或最终影响所有人 (Heavy rain in the South may eventually affect everyone)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%96%B9%E6%9A%B4%E9%9B%A8%E6%88%96%E6%9C%80%E7%BB%88%E5%BD%B1%E5%93%8D%E6%89%80%E6%9C%89%E4%BA%BA%23) `123.6K 🔥` `+124%`
1. [刘宇宁说王玉雯跳出体弱多病的感觉](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E8%AF%B4%E7%8E%8B%E7%8E%89%E9%9B%AF%E8%B7%B3%E5%87%BA%E4%BD%93%E5%BC%B1%E5%A4%9A%E7%97%85%E7%9A%84%E6%84%9F%E8%A7%89%23) `122.9K 🔥` `+252%`
1. [四川彩民18元中2576万元大奖](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%BD%A9%E6%B0%9118%E5%85%83%E4%B8%AD2576%E4%B8%87%E5%85%83%E5%A4%A7%E5%A5%96%23) `122.1K 🔥` `+146%`
1. [南部战区回应荷兰军舰侵闯 (The southern theater responded to the intrusion of Dutch warships)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%88%98%E5%8C%BA%E5%9B%9E%E5%BA%94%E8%8D%B7%E5%85%B0%E5%86%9B%E8%88%B0%E4%BE%B5%E9%97%AF%23) `121.7K 🔥` `+129%`
1. [男子拐走网红边牧180元转卖宰杀](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8B%90%E8%B5%B0%E7%BD%91%E7%BA%A2%E8%BE%B9%E7%89%A7180%E5%85%83%E8%BD%AC%E5%8D%96%E5%AE%B0%E6%9D%80%23) `112.8K 🔥` `+182%`
1. [颜颜为李嘉凯发声 (Yan Yan speaks out for Li Jiakai)](https://s.weibo.com/weibo?q=%23%E9%A2%9C%E9%A2%9C%E4%B8%BA%E6%9D%8E%E5%98%89%E5%87%AF%E5%8F%91%E5%A3%B0%23) `100.1K 🔥` `+112%`
1. [金靖有了张凌赫忘了丁程鑫](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%E6%9C%89%E4%BA%86%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%BF%98%E4%BA%86%E4%B8%81%E7%A8%8B%E9%91%AB%23) `72.7K 🔥` `+307%`
1. [刘宇宁粉丝不舒服了](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E7%B2%89%E4%B8%9D%E4%B8%8D%E8%88%92%E6%9C%8D%E4%BA%86%23) `64.2K 🔥` `+243%`
1. [杭州非法代孕窝点现场曝光](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E9%9D%9E%E6%B3%95%E4%BB%A3%E5%AD%95%E7%AA%9D%E7%82%B9%E7%8E%B0%E5%9C%BA%E6%9B%9D%E5%85%89%23) `64.1K 🔥` `+87%`
1. [25岁小伙恋32岁女老板因88万彩礼分手 (A 25-year-old man fell in love with a 32-year-old female boss and broke up because of a gift of 880,000 yuan.)](https://s.weibo.com/weibo?q=%2325%E5%B2%81%E5%B0%8F%E4%BC%99%E6%81%8B32%E5%B2%81%E5%A5%B3%E8%80%81%E6%9D%BF%E5%9B%A088%E4%B8%87%E5%BD%A9%E7%A4%BC%E5%88%86%E6%89%8B%23) `64.0K 🔥` `+91%`
1. [身体这个部位莫名疼痛千万别不当回事](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BD%93%E8%BF%99%E4%B8%AA%E9%83%A8%E4%BD%8D%E8%8E%AB%E5%90%8D%E7%96%BC%E7%97%9B%E5%8D%83%E4%B8%87%E5%88%AB%E4%B8%8D%E5%BD%93%E5%9B%9E%E4%BA%8B%23) `63.9K 🔥` `+102%`
1. [4分钟黄金凯格尔运动 (4 Minutes Golden Kegel Exercise)](https://s.weibo.com/weibo?q=%234%E5%88%86%E9%92%9F%E9%BB%84%E9%87%91%E5%87%AF%E6%A0%BC%E5%B0%94%E8%BF%90%E5%8A%A8%23) `63.8K 🔥` `+203%`
1. [两儿子非亲生案大儿子拒绝亲子鉴定](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%84%BF%E5%AD%90%E9%9D%9E%E4%BA%B2%E7%94%9F%E6%A1%88%E5%A4%A7%E5%84%BF%E5%AD%90%E6%8B%92%E7%BB%9D%E4%BA%B2%E5%AD%90%E9%89%B4%E5%AE%9A%23) `62.8K 🔥` `+144%`
1. [家业云包场乱成一锅粥了](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%E4%BA%91%E5%8C%85%E5%9C%BA%E4%B9%B1%E6%88%90%E4%B8%80%E9%94%85%E7%B2%A5%E4%BA%86%23) `60.2K 🔥` `+224%`
1. [鞠婧祎看见粉丝cos露芜衣的表情 (Ju Jingyi saw the fan's cosplay expression showing off her clothes)](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E7%9C%8B%E8%A7%81%E7%B2%89%E4%B8%9Dcos%E9%9C%B2%E8%8A%9C%E8%A1%A3%E7%9A%84%E8%A1%A8%E6%83%85%23) `58.9K 🔥` `+167%`
1. [张月发文回应侯宇淘汰 (Zhang Yue wrote in response to Hou Yu’s elimination)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E5%8F%91%E6%96%87%E5%9B%9E%E5%BA%94%E4%BE%AF%E5%AE%87%E6%B7%98%E6%B1%B0%23) `58.8K 🔥` `+116%`
1. [户口以后没那么重要了](https://s.weibo.com/weibo?q=%23%E6%88%B7%E5%8F%A3%E4%BB%A5%E5%90%8E%E6%B2%A1%E9%82%A3%E4%B9%88%E9%87%8D%E8%A6%81%E4%BA%86%23) `58.6K 🔥` `+146%`
1. [耀眼人物关系图](https://s.weibo.com/weibo?q=%23%E8%80%80%E7%9C%BC%E4%BA%BA%E7%89%A9%E5%85%B3%E7%B3%BB%E5%9B%BE%23) `58.6K 🔥` `+147%`
1. [记者曝光地下代孕实验室遭拖拽骨折](https://s.weibo.com/weibo?q=%23%E8%AE%B0%E8%80%85%E6%9B%9D%E5%85%89%E5%9C%B0%E4%B8%8B%E4%BB%A3%E5%AD%95%E5%AE%9E%E9%AA%8C%E5%AE%A4%E9%81%AD%E6%8B%96%E6%8B%BD%E9%AA%A8%E6%8A%98%23) `58.4K 🔥` `+131%`
1. [男子脑梗女友想结婚被男方亲属拒绝](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%84%91%E6%A2%97%E5%A5%B3%E5%8F%8B%E6%83%B3%E7%BB%93%E5%A9%9A%E8%A2%AB%E7%94%B7%E6%96%B9%E4%BA%B2%E5%B1%9E%E6%8B%92%E7%BB%9D%23) `58.4K 🔥` `+132%`
1. [金银油集体大跌](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%93%B6%E6%B2%B9%E9%9B%86%E4%BD%93%E5%A4%A7%E8%B7%8C%23) `58.2K 🔥` `+236%`
1. [张凌赫王玉雯演爽了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8E%8B%E7%8E%89%E9%9B%AF%E6%BC%94%E7%88%BD%E4%BA%86%23) `58.1K 🔥` `+196%`
1. [50万买蔚来还是买宝马](https://s.weibo.com/weibo?q=%2350%E4%B8%87%E4%B9%B0%E8%94%9A%E6%9D%A5%E8%BF%98%E6%98%AF%E4%B9%B0%E5%AE%9D%E9%A9%AC%23) `57.9K 🔥` `+240%`
1. [关晓彤剧宣人脉](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%89%A7%E5%AE%A3%E4%BA%BA%E8%84%89%23) `57.8K 🔥` `+105%`
1. [刘强东最新内部讲话 (Liu Qiangdong’s latest internal speech)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%BC%BA%E4%B8%9C%E6%9C%80%E6%96%B0%E5%86%85%E9%83%A8%E8%AE%B2%E8%AF%9D%23) `57.8K 🔥` `+165%`
1. [耀眼](https://s.weibo.com/weibo?q=%23%E8%80%80%E7%9C%BC%23) `57.5K 🔥` `+120%`
1. [蔚来ES9 (NIO ES9)](https://s.weibo.com/weibo?q=%23%E8%94%9A%E6%9D%A5ES9%23) `57.5K 🔥` `+146%`
1. [女教师打伞事件男子系退休返聘教师 (In the incident involving a female teacher holding an umbrella, the man was rehired as a retired teacher)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%95%99%E5%B8%88%E6%89%93%E4%BC%9E%E4%BA%8B%E4%BB%B6%E7%94%B7%E5%AD%90%E7%B3%BB%E9%80%80%E4%BC%91%E8%BF%94%E8%81%98%E6%95%99%E5%B8%88%23) `57.4K 🔥` `+209%`
1. [打个伞 怎么了](https://s.weibo.com/weibo?q=%23%E6%89%93%E4%B8%AA%E4%BC%9E%20%E6%80%8E%E4%B9%88%E4%BA%86%23) `57.2K 🔥` `+93%`
1. [曾沛慈直播](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E7%9B%B4%E6%92%AD%23) `57.2K 🔥` `+172%`
1. [米兰 坐牢 (Milan jail)](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%20%E5%9D%90%E7%89%A2%23) `57.1K 🔥` `+236%`
1. [美军事力量将撤出伊朗周边 (US military forces will withdraw from Iran)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E4%BA%8B%E5%8A%9B%E9%87%8F%E5%B0%86%E6%92%A4%E5%87%BA%E4%BC%8A%E6%9C%97%E5%91%A8%E8%BE%B9%23) `57.0K 🔥` `+93%`
1. [陈都灵 翘楚 (Chen Duling, leader)](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%20%E7%BF%98%E6%A5%9A%23) `56.9K 🔥` `+227%`
1. [李昀锐腋下管理 (Li Yunrui's armpit management)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E8%85%8B%E4%B8%8B%E7%AE%A1%E7%90%86%23) `56.8K 🔥` `+234%`
1. [广州热到非洲狮都顶不住](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E7%83%AD%E5%88%B0%E9%9D%9E%E6%B4%B2%E7%8B%AE%E9%83%BD%E9%A1%B6%E4%B8%8D%E4%BD%8F%23) `56.7K 🔥` `+92%`
1. [将门独后 综艺](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%20%E7%BB%BC%E8%89%BA%23) `58.1K 🔥`

Updated at 2026-05-28 06:56:55

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
