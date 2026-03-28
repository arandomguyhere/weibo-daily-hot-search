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

1. [2026中国网络媒体论坛 (2026 China Online Media Forum)](https://s.weibo.com/weibo?q=%232026%E4%B8%AD%E5%9B%BD%E7%BD%91%E7%BB%9C%E5%AA%92%E4%BD%93%E8%AE%BA%E5%9D%9B%23) `1.0M 🔥` `NEW`
1. [安崎回复孔雪儿](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%B4%8E%E5%9B%9E%E5%A4%8D%E5%AD%94%E9%9B%AA%E5%84%BF%23) `1.0M 🔥` `NEW`
1. [官方辟谣重庆武隆堰塘村出现老虎](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E8%BE%9F%E8%B0%A3%E9%87%8D%E5%BA%86%E6%AD%A6%E9%9A%86%E5%A0%B0%E5%A1%98%E6%9D%91%E5%87%BA%E7%8E%B0%E8%80%81%E8%99%8E%23) `1.0M 🔥` `NEW`
1. [男子腹痛忍1夜第二天晨练直接心梗](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%85%B9%E7%97%9B%E5%BF%8D1%E5%A4%9C%E7%AC%AC%E4%BA%8C%E5%A4%A9%E6%99%A8%E7%BB%83%E7%9B%B4%E6%8E%A5%E5%BF%83%E6%A2%97%23) `1.0M 🔥` `NEW`
1. [将军可以帅但不能没杀气](https://s.weibo.com/weibo?q=%23%E5%B0%86%E5%86%9B%E5%8F%AF%E4%BB%A5%E5%B8%85%E4%BD%86%E4%B8%8D%E8%83%BD%E6%B2%A1%E6%9D%80%E6%B0%94%23) `997.0K 🔥` `NEW`
1. [罗技](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%8A%80%23) `991.9K 🔥` `NEW`
1. [香港居民疯抢国产电动车](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%B1%85%E6%B0%91%E7%96%AF%E6%8A%A2%E5%9B%BD%E4%BA%A7%E7%94%B5%E5%8A%A8%E8%BD%A6%23) `980.2K 🔥` `NEW`
1. [演员李尚宝去世](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E6%9D%8E%E5%B0%9A%E5%AE%9D%E5%8E%BB%E4%B8%96%23) `979.9K 🔥` `NEW`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `569.6K 🔥` `NEW`
1. [舒畅还有剧压了16年才播](https://s.weibo.com/weibo?q=%23%E8%88%92%E7%95%85%E8%BF%98%E6%9C%89%E5%89%A7%E5%8E%8B%E4%BA%8616%E5%B9%B4%E6%89%8D%E6%92%AD%23) `569.5K 🔥` `NEW`
1. [祝绪丹 虞书欣 (Zhu Xudan Yu Shuxin)](https://s.weibo.com/weibo?q=%23%E7%A5%9D%E7%BB%AA%E4%B8%B9%20%E8%99%9E%E4%B9%A6%E6%AC%A3%23) `528.9K 🔥` `NEW`
1. [男子结婚月余遭家暴身高1米8不敢回家](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%BB%93%E5%A9%9A%E6%9C%88%E4%BD%99%E9%81%AD%E5%AE%B6%E6%9A%B4%E8%BA%AB%E9%AB%981%E7%B1%B38%E4%B8%8D%E6%95%A2%E5%9B%9E%E5%AE%B6%23) `405.9K 🔥` `NEW`
1. [李昌钰曾在80岁再婚](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%8C%E9%92%B0%E6%9B%BE%E5%9C%A880%E5%B2%81%E5%86%8D%E5%A9%9A%23) `184.6K 🔥` `NEW`
1. [鸿蒙智行车辆智驾状态下冲撞幼童](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%99%E6%99%BA%E8%A1%8C%E8%BD%A6%E8%BE%86%E6%99%BA%E9%A9%BE%E7%8A%B6%E6%80%81%E4%B8%8B%E5%86%B2%E6%92%9E%E5%B9%BC%E7%AB%A5%23) `180.6K 🔥` `NEW`
1. [张艺凡尊重6岁小画家的著作权](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%89%BA%E5%87%A1%E5%B0%8A%E9%87%8D6%E5%B2%81%E5%B0%8F%E7%94%BB%E5%AE%B6%E7%9A%84%E8%91%97%E4%BD%9C%E6%9D%83%23) `163.7K 🔥` `NEW`
1. [张云鹏继母回应被指强行出镜](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%91%E9%B9%8F%E7%BB%A7%E6%AF%8D%E5%9B%9E%E5%BA%94%E8%A2%AB%E6%8C%87%E5%BC%BA%E8%A1%8C%E5%87%BA%E9%95%9C%23) `160.8K 🔥` `NEW`
1. [花少导演回应神一季鬼一季](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%91%E5%AF%BC%E6%BC%94%E5%9B%9E%E5%BA%94%E7%A5%9E%E4%B8%80%E5%AD%A3%E9%AC%BC%E4%B8%80%E5%AD%A3%23) `160.8K 🔥` `NEW`
1. [伊朗称美军藏身海湾国家酒店公园](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E7%BE%8E%E5%86%9B%E8%97%8F%E8%BA%AB%E6%B5%B7%E6%B9%BE%E5%9B%BD%E5%AE%B6%E9%85%92%E5%BA%97%E5%85%AC%E5%9B%AD%23) `148.5K 🔥` `NEW`
1. [郭麒麟对接](https://s.weibo.com/weibo?q=%23%E9%83%AD%E9%BA%92%E9%BA%9F%E5%AF%B9%E6%8E%A5%23) `147.9K 🔥` `NEW`
1. [张凌赫回应因为太帅被忽略演技](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%9E%E5%BA%94%E5%9B%A0%E4%B8%BA%E5%A4%AA%E5%B8%85%E8%A2%AB%E5%BF%BD%E7%95%A5%E6%BC%94%E6%8A%80%23) `146.4K 🔥` `NEW`
1. [张杰鸟巢舞台够内娱学一辈子了 (Zhang Jie’s Bird’s Nest stage is enough to study domestic entertainment for a lifetime)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E9%B8%9F%E5%B7%A2%E8%88%9E%E5%8F%B0%E5%A4%9F%E5%86%85%E5%A8%B1%E5%AD%A6%E4%B8%80%E8%BE%88%E5%AD%90%E4%BA%86%23) `144.3K 🔥` `NEW`
1. [伊朗正式回应美停火协议](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%AD%A3%E5%BC%8F%E5%9B%9E%E5%BA%94%E7%BE%8E%E5%81%9C%E7%81%AB%E5%8D%8F%E8%AE%AE%23) `114.5K 🔥` `NEW`
1. [煲仔饭老板回应拍女儿视频后爆火](https://s.weibo.com/weibo?q=%23%E7%85%B2%E4%BB%94%E9%A5%AD%E8%80%81%E6%9D%BF%E5%9B%9E%E5%BA%94%E6%8B%8D%E5%A5%B3%E5%84%BF%E8%A7%86%E9%A2%91%E5%90%8E%E7%88%86%E7%81%AB%23) `103.3K 🔥` `NEW`
1. [这个刘诗诗美晕了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%AA%E5%88%98%E8%AF%97%E8%AF%97%E7%BE%8E%E6%99%95%E4%BA%86%23) `102.8K 🔥` `NEW`
1. [郭晓婷王天辰红毯牵手跑](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E5%A9%B7%E7%8E%8B%E5%A4%A9%E8%BE%B0%E7%BA%A2%E6%AF%AF%E7%89%B5%E6%89%8B%E8%B7%91%23) `99.9K 🔥` `NEW`
1. [美以空袭伊朗核设施](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BB%A5%E7%A9%BA%E8%A2%AD%E4%BC%8A%E6%9C%97%E6%A0%B8%E8%AE%BE%E6%96%BD%23) `99.5K 🔥` `NEW`
1. [赫丽摸金宇包场迪丽热巴白日提灯](https://s.weibo.com/weibo?q=%23%E8%B5%AB%E4%B8%BD%E6%91%B8%E9%87%91%E5%AE%87%E5%8C%85%E5%9C%BA%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `99.3K 🔥` `NEW`
1. [一碰就倒的咪咪](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%A2%B0%E5%B0%B1%E5%80%92%E7%9A%84%E5%92%AA%E5%92%AA%23) `94.5K 🔥` `NEW`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `93.5K 🔥` `NEW`
1. [杨紫为黄灿灿乘风2026打call](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E4%B8%BA%E9%BB%84%E7%81%BF%E7%81%BF%E4%B9%98%E9%A3%8E2026%E6%89%93call%23) `90.3K 🔥` `NEW`
1. [菲舰不顾中方反复喊话提醒 (The Philippine ship ignored China’s repeated reminders)](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E8%88%B0%E4%B8%8D%E9%A1%BE%E4%B8%AD%E6%96%B9%E5%8F%8D%E5%A4%8D%E5%96%8A%E8%AF%9D%E6%8F%90%E9%86%92%23) `1.0M 🔥` `+280%`
1. [樊振东3比0孟庆宇](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C3%E6%AF%940%E5%AD%9F%E5%BA%86%E5%AE%87%23) `1.0M 🔥` `+624%`
1. [中巴同意共同推动停火止战恢复和谈](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%B7%B4%E5%90%8C%E6%84%8F%E5%85%B1%E5%90%8C%E6%8E%A8%E5%8A%A8%E5%81%9C%E7%81%AB%E6%AD%A2%E6%88%98%E6%81%A2%E5%A4%8D%E5%92%8C%E8%B0%88%23) `1.0M 🔥` `+452%`
1. [竹林四侠彻底be了 (The Four Heroes of the Bamboo Forest are completely bereft)](https://s.weibo.com/weibo?q=%23%E7%AB%B9%E6%9E%97%E5%9B%9B%E4%BE%A0%E5%BD%BB%E5%BA%95be%E4%BA%86%23) `661.5K 🔥` `+444%`
1. [医院已安抚男医生产检丈夫撞墙孕妇](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E5%B7%B2%E5%AE%89%E6%8A%9A%E7%94%B7%E5%8C%BB%E7%94%9F%E4%BA%A7%E6%A3%80%E4%B8%88%E5%A4%AB%E6%92%9E%E5%A2%99%E5%AD%95%E5%A6%87%23) `472.2K 🔥` `+806%`
1. [霍尔木兹决战摊牌了](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E5%86%B3%E6%88%98%E6%91%8A%E7%89%8C%E4%BA%86%23) `385.6K 🔥` `+217%`
1. [锤娜丽莎瘦30斤公开减肥原因](https://s.weibo.com/weibo?q=%23%E9%94%A4%E5%A8%9C%E4%B8%BD%E8%8E%8E%E7%98%A630%E6%96%A4%E5%85%AC%E5%BC%80%E5%87%8F%E8%82%A5%E5%8E%9F%E5%9B%A0%23) `186.8K 🔥` `+54%`
1. [阚清子问我这么胖吗 (Kan Qingzi asked me if I was so fat)](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E9%97%AE%E6%88%91%E8%BF%99%E4%B9%88%E8%83%96%E5%90%97%23) `184.7K 🔥` `+53%`
1. [白鹿为乘风姐姐代斯加油](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%B8%BA%E4%B9%98%E9%A3%8E%E5%A7%90%E5%A7%90%E4%BB%A3%E6%96%AF%E5%8A%A0%E6%B2%B9%23) `184.6K 🔥` `+33%`
1. [陶昕然浪姐连线的是孙俪](https://s.weibo.com/weibo?q=%23%E9%99%B6%E6%98%95%E7%84%B6%E6%B5%AA%E5%A7%90%E8%BF%9E%E7%BA%BF%E7%9A%84%E6%98%AF%E5%AD%99%E4%BF%AA%23) `174.5K 🔥` `+234%`
1. [钧正平评粉底液将军 (Jun Zhengping commented on Liquid Foundation General)](https://s.weibo.com/weibo?q=%23%E9%92%A7%E6%AD%A3%E5%B9%B3%E8%AF%84%E7%B2%89%E5%BA%95%E6%B6%B2%E5%B0%86%E5%86%9B%23) `160.7K 🔥` `+32%`
1. [papi 公司使我的美德荡然无存](https://s.weibo.com/weibo?q=%23papi%20%E5%85%AC%E5%8F%B8%E4%BD%BF%E6%88%91%E7%9A%84%E7%BE%8E%E5%BE%B7%E8%8D%A1%E7%84%B6%E6%97%A0%E5%AD%98%23) `139.6K 🔥` `+184%`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `110.0K 🔥` `+114%`
1. [乘风2026初舞台就有淘汰 (Chengfeng will be eliminated on the first stage of 2026)](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E5%88%9D%E8%88%9E%E5%8F%B0%E5%B0%B1%E6%9C%89%E6%B7%98%E6%B1%B0%23) `96.3K 🔥` `+80%`
1. [西班牙25岁女孩被性侵多次后申请安乐死 (Spanish girl, 25, applies for euthanasia after being sexually assaulted multiple times)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%9925%E5%B2%81%E5%A5%B3%E5%AD%A9%E8%A2%AB%E6%80%A7%E4%BE%B5%E5%A4%9A%E6%AC%A1%E5%90%8E%E7%94%B3%E8%AF%B7%E5%AE%89%E4%B9%90%E6%AD%BB%23) `120.7K 🔥`
1. [王一博微博改名 (Wang Yibo changed his name on Weibo)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%BE%AE%E5%8D%9A%E6%94%B9%E5%90%8D%23) `118.8K 🔥`
1. [曝关晓彤喜提新车 (It is revealed that Guan Xiaotong likes to bring a new car)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%85%B3%E6%99%93%E5%BD%A4%E5%96%9C%E6%8F%90%E6%96%B0%E8%BD%A6%23) `113.0K 🔥`
1. [李昌钰去世 (Li Changyu passed away)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%8C%E9%92%B0%E5%8E%BB%E4%B8%96%23) `1.0M 🔥` `-53%`
1. [孩子生病后买彩票中500万妈妈发声](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E7%94%9F%E7%97%85%E5%90%8E%E4%B9%B0%E5%BD%A9%E7%A5%A8%E4%B8%AD500%E4%B8%87%E5%A6%88%E5%A6%88%E5%8F%91%E5%A3%B0%23) `146.3K 🔥` `-84%`
1. [3D还原女子因停车纠纷摔倒身亡 (3D restoration of woman falling and dying due to parking dispute)](https://s.weibo.com/weibo?q=%233D%E8%BF%98%E5%8E%9F%E5%A5%B3%E5%AD%90%E5%9B%A0%E5%81%9C%E8%BD%A6%E7%BA%A0%E7%BA%B7%E6%91%94%E5%80%92%E8%BA%AB%E4%BA%A1%23) `104.4K 🔥` `-48%`
1. [伊朗无人机群袭以色列最大运输中心](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%97%A0%E4%BA%BA%E6%9C%BA%E7%BE%A4%E8%A2%AD%E4%BB%A5%E8%89%B2%E5%88%97%E6%9C%80%E5%A4%A7%E8%BF%90%E8%BE%93%E4%B8%AD%E5%BF%83%23) `85.6K 🔥` `-44%`

Updated at 2026-03-28 08:57:39

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
