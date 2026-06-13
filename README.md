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

1. [梅西6到飞起 (Messi takes off at 6)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%A5%BF6%E5%88%B0%E9%A3%9E%E8%B5%B7%23) `583.1K 🔥` `NEW`
1. [哈登涉嫌非法携带武器被捕](https://s.weibo.com/weibo?q=%23%E5%93%88%E7%99%BB%E6%B6%89%E5%AB%8C%E9%9D%9E%E6%B3%95%E6%90%BA%E5%B8%A6%E6%AD%A6%E5%99%A8%E8%A2%AB%E6%8D%95%23) `309.4K 🔥` `NEW`
1. [福原爱和现任丈夫结婚原因](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%8E%9F%E7%88%B1%E5%92%8C%E7%8E%B0%E4%BB%BB%E4%B8%88%E5%A4%AB%E7%BB%93%E5%A9%9A%E5%8E%9F%E5%9B%A0%23) `206.3K 🔥` `NEW`
1. [陈赫给Angelababy刷礼物](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E7%BB%99Angelababy%E5%88%B7%E7%A4%BC%E7%89%A9%23) `205.2K 🔥` `NEW`
1. [王天辰郭晓婷新剧导演黄天仁](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%A4%A9%E8%BE%B0%E9%83%AD%E6%99%93%E5%A9%B7%E6%96%B0%E5%89%A7%E5%AF%BC%E6%BC%94%E9%BB%84%E5%A4%A9%E4%BB%81%23) `203.8K 🔥` `NEW`
1. [Angelababy的榜一是陈赫](https://s.weibo.com/weibo?q=%23Angelababy%E7%9A%84%E6%A6%9C%E4%B8%80%E6%98%AF%E9%99%88%E8%B5%AB%23) `200.1K 🔥` `NEW`
1. [女子收到9万LV包结果笑容逐渐消失](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%94%B6%E5%88%B09%E4%B8%87LV%E5%8C%85%E7%BB%93%E6%9E%9C%E7%AC%91%E5%AE%B9%E9%80%90%E6%B8%90%E6%B6%88%E5%A4%B1%23) `198.3K 🔥` `NEW`
1. [迪丽热巴恋情风波后首现身](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%81%8B%E6%83%85%E9%A3%8E%E6%B3%A2%E5%90%8E%E9%A6%96%E7%8E%B0%E8%BA%AB%23) `196.4K 🔥` `NEW`
1. [疑似陈红点赞黄景瑜陈飞宇对比博](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E9%99%88%E7%BA%A2%E7%82%B9%E8%B5%9E%E9%BB%84%E6%99%AF%E7%91%9C%E9%99%88%E9%A3%9E%E5%AE%87%E5%AF%B9%E6%AF%94%E5%8D%9A%23) `195.8K 🔥` `NEW`
1. [美加墨世界杯首个点球](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%8A%A0%E5%A2%A8%E4%B8%96%E7%95%8C%E6%9D%AF%E9%A6%96%E4%B8%AA%E7%82%B9%E7%90%83%23) `194.1K 🔥` `NEW`
1. [李小冉一点儿苦都不想吃 (Li Xiaoran doesn’t want to suffer at all)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E4%B8%80%E7%82%B9%E5%84%BF%E8%8B%A6%E9%83%BD%E4%B8%8D%E6%83%B3%E5%90%83%23) `189.8K 🔥` `NEW`
1. [马斯克前妻描述看他失败时的感受](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%89%8D%E5%A6%BB%E6%8F%8F%E8%BF%B0%E7%9C%8B%E4%BB%96%E5%A4%B1%E8%B4%A5%E6%97%B6%E7%9A%84%E6%84%9F%E5%8F%97%23) `186.9K 🔥` `NEW`
1. [XLG战胜G2晋级六强](https://s.weibo.com/weibo?q=%23XLG%E6%88%98%E8%83%9CG2%E6%99%8B%E7%BA%A7%E5%85%AD%E5%BC%BA%23) `183.2K 🔥` `NEW`
1. [歧视韩国女球迷男子身份曝光](https://s.weibo.com/weibo?q=%23%E6%AD%A7%E8%A7%86%E9%9F%A9%E5%9B%BD%E5%A5%B3%E7%90%83%E8%BF%B7%E7%94%B7%E5%AD%90%E8%BA%AB%E4%BB%BD%E6%9B%9D%E5%85%89%23) `181.6K 🔥` `NEW`
1. [高考生一个机油桶用了4年](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E7%94%9F%E4%B8%80%E4%B8%AA%E6%9C%BA%E6%B2%B9%E6%A1%B6%E7%94%A8%E4%BA%864%E5%B9%B4%23) `179.9K 🔥` `NEW`
1. [卡塔尔制造世界杯首冷](https://s.weibo.com/weibo?q=%23%E5%8D%A1%E5%A1%94%E5%B0%94%E5%88%B6%E9%80%A0%E4%B8%96%E7%95%8C%E6%9D%AF%E9%A6%96%E5%86%B7%23) `172.5K 🔥` `NEW`
1. [安以轩沉寂多年复工](https://s.weibo.com/weibo?q=%23%E5%AE%89%E4%BB%A5%E8%BD%A9%E6%B2%89%E5%AF%82%E5%A4%9A%E5%B9%B4%E5%A4%8D%E5%B7%A5%23) `172.4K 🔥` `NEW`
1. [姜十七承认整容了](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E5%8D%81%E4%B8%83%E6%89%BF%E8%AE%A4%E6%95%B4%E5%AE%B9%E4%BA%86%23) `170.6K 🔥` `NEW`
1. [SpaceX市值破20000亿美元](https://s.weibo.com/weibo?q=%23SpaceX%E5%B8%82%E5%80%BC%E7%A0%B420000%E4%BA%BF%E7%BE%8E%E5%85%83%23) `170.2K 🔥` `NEW`
1. [日本通过外交渠道提醒特朗普AI火影](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%80%9A%E8%BF%87%E5%A4%96%E4%BA%A4%E6%B8%A0%E9%81%93%E6%8F%90%E9%86%92%E7%89%B9%E6%9C%97%E6%99%AEAI%E7%81%AB%E5%BD%B1%23) `168.3K 🔥` `NEW`
1. [巴西1比1摩洛哥 (Brazil 1-1 Morocco)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF1%E6%AF%941%E6%91%A9%E6%B4%9B%E5%93%A5%23) `924.6K 🔥` `+2369%`
1. [全国小麦收获进度已过8成 (The national wheat harvest progress has exceeded 80%)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E5%B0%8F%E9%BA%A6%E6%94%B6%E8%8E%B7%E8%BF%9B%E5%BA%A6%E5%B7%B2%E8%BF%878%E6%88%90%23) `731.2K 🔥` `+78%`
1. [任嘉伦内娱新规第一人](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%98%89%E4%BC%A6%E5%86%85%E5%A8%B1%E6%96%B0%E8%A7%84%E7%AC%AC%E4%B8%80%E4%BA%BA%23) `573.7K 🔥` `+95%`
1. [卡塔尔补时绝平](https://s.weibo.com/weibo?q=%23%E5%8D%A1%E5%A1%94%E5%B0%94%E8%A1%A5%E6%97%B6%E7%BB%9D%E5%B9%B3%23) `376.6K 🔥` `+79%`
1. [天梭全球形象代言人杨瀚森 (Tissot global image spokesperson Yang Hansen)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%A2%AD%E5%85%A8%E7%90%83%E5%BD%A2%E8%B1%A1%E4%BB%A3%E8%A8%80%E4%BA%BA%E6%9D%A8%E7%80%9A%E6%A3%AE%23) `353.7K 🔥` `+105%`
1. [巴西选内马尔去世界杯是正确决定吗](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E9%80%89%E5%86%85%E9%A9%AC%E5%B0%94%E5%8E%BB%E4%B8%96%E7%95%8C%E6%9D%AF%E6%98%AF%E6%AD%A3%E7%A1%AE%E5%86%B3%E5%AE%9A%E5%90%97%23) `264.9K 🔥` `+78%`
1. [莫离](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%23) `207.2K 🔥` `+512%`
1. [卡塔尔1比1瑞士](https://s.weibo.com/weibo?q=%23%E5%8D%A1%E5%A1%94%E5%B0%941%E6%AF%941%E7%91%9E%E5%A3%AB%23) `203.2K 🔥` `+39%`
1. [辛芷蕾顶级高定国内首穿](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%E9%A1%B6%E7%BA%A7%E9%AB%98%E5%AE%9A%E5%9B%BD%E5%86%85%E9%A6%96%E7%A9%BF%23) `202.7K 🔥` `+43%`
1. [虚岁的唯一作用就是给医生添乱 (The only purpose of missing the age is to cause trouble to the doctor)](https://s.weibo.com/weibo?q=%23%E8%99%9A%E5%B2%81%E7%9A%84%E5%94%AF%E4%B8%80%E4%BD%9C%E7%94%A8%E5%B0%B1%E6%98%AF%E7%BB%99%E5%8C%BB%E7%94%9F%E6%B7%BB%E4%B9%B1%23) `201.6K 🔥` `+136%`
1. [以为是食材结果是员工](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BA%E6%98%AF%E9%A3%9F%E6%9D%90%E7%BB%93%E6%9E%9C%E6%98%AF%E5%91%98%E5%B7%A5%23) `199.8K 🔥` `+56%`
1. [SpaceX亏损达413亿美元](https://s.weibo.com/weibo?q=%23SpaceX%E4%BA%8F%E6%8D%9F%E8%BE%BE413%E4%BA%BF%E7%BE%8E%E5%85%83%23) `197.4K 🔥` `+386%`
1. [南部档案云合第三](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88%E4%BA%91%E5%90%88%E7%AC%AC%E4%B8%89%23) `193.2K 🔥` `+521%`
1. [巴西20届首战不败 (Brazil undefeated in first match of 20th edition)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF20%E5%B1%8A%E9%A6%96%E6%88%98%E4%B8%8D%E8%B4%A5%23) `192.5K 🔥` `+35%`
1. [巴西扳平 (Brazil equalizes)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E6%89%B3%E5%B9%B3%23) `191.7K 🔥` `+396%`
1. [陈小春为了宋亚轩已成正规军](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%8F%E6%98%A5%E4%B8%BA%E4%BA%86%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%B7%B2%E6%88%90%E6%AD%A3%E8%A7%84%E5%86%9B%23) `190.4K 🔥` `+254%`
1. [外籍旅客带少数民族服装出境被拦](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%B1%8D%E6%97%85%E5%AE%A2%E5%B8%A6%E5%B0%91%E6%95%B0%E6%B0%91%E6%97%8F%E6%9C%8D%E8%A3%85%E5%87%BA%E5%A2%83%E8%A2%AB%E6%8B%A6%23) `188.8K 🔥` `+467%`
1. [全球艾滋病应对正进入危险时刻](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E8%89%BE%E6%BB%8B%E7%97%85%E5%BA%94%E5%AF%B9%E6%AD%A3%E8%BF%9B%E5%85%A5%E5%8D%B1%E9%99%A9%E6%97%B6%E5%88%BB%23) `185.2K 🔥` `+85%`
1. [威尼修斯爆射破门](https://s.weibo.com/weibo?q=%23%E5%A8%81%E5%B0%BC%E4%BF%AE%E6%96%AF%E7%88%86%E5%B0%84%E7%A0%B4%E9%97%A8%23) `184.8K 🔥` `+484%`
1. [白鹿莫离全网播放量破亿 (White Deer Moli has over 100 million views on the entire network)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%8E%AB%E7%A6%BB%E5%85%A8%E7%BD%91%E6%92%AD%E6%94%BE%E9%87%8F%E7%A0%B4%E4%BA%BF%23) `183.7K 🔥` `+490%`
1. [哈登 (Harden)](https://s.weibo.com/weibo?q=%23%E5%93%88%E7%99%BB%23) `181.1K 🔥` `+159%`
1. [姆巴佩想换位置被法国主帅拒绝 (Mbappe wants to change positions but French coach refuses)](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%83%B3%E6%8D%A2%E4%BD%8D%E7%BD%AE%E8%A2%AB%E6%B3%95%E5%9B%BD%E4%B8%BB%E5%B8%85%E6%8B%92%E7%BB%9D%23) `178.7K 🔥` `+62%`
1. [张雪机车六冠王 (Zhang Xue’s six motorcycle championships)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%85%AD%E5%86%A0%E7%8E%8B%23) `178.1K 🔥` `+152%`
1. [女生分手男方要求返还彩礼被告强奸](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E5%88%86%E6%89%8B%E7%94%B7%E6%96%B9%E8%A6%81%E6%B1%82%E8%BF%94%E8%BF%98%E5%BD%A9%E7%A4%BC%E8%A2%AB%E5%91%8A%E5%BC%BA%E5%A5%B8%23) `176.3K 🔥` `+87%`
1. [美国女市长性侵16岁男孩被判90天监禁 (American mayor sentenced to 90 days in prison for sexually assaulting 16-year-old boy)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A5%B3%E5%B8%82%E9%95%BF%E6%80%A7%E4%BE%B516%E5%B2%81%E7%94%B7%E5%AD%A9%E8%A2%AB%E5%88%A490%E5%A4%A9%E7%9B%91%E7%A6%81%23) `175.0K 🔥` `+109%`
1. [突然理解了自己为什么物欲这么高](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E7%90%86%E8%A7%A3%E4%BA%86%E8%87%AA%E5%B7%B1%E4%B8%BA%E4%BB%80%E4%B9%88%E7%89%A9%E6%AC%B2%E8%BF%99%E4%B9%88%E9%AB%98%23) `174.1K 🔥` `+170%`
1. [高圆圆让C](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%9C%86%E5%9C%86%E8%AE%A9C%23) `169.4K 🔥` `+337%`
1. [巴西vs摩洛哥 (Brazil vs Morocco)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BFvs%E6%91%A9%E6%B4%9B%E5%93%A5%23) `2.0M 🔥`
1. [考编第一被人递补维权后岗位取消 (The position that ranked first in the examination was canceled after safeguarding rights.)](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%BC%96%E7%AC%AC%E4%B8%80%E8%A2%AB%E4%BA%BA%E9%80%92%E8%A1%A5%E7%BB%B4%E6%9D%83%E5%90%8E%E5%B2%97%E4%BD%8D%E5%8F%96%E6%B6%88%23) `569.8K 🔥`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `207.7K 🔥`
1. [军师 你别偷偷跟你女朋友聊天了 (Military Advisor, stop secretly chatting with your girlfriend.)](https://s.weibo.com/weibo?q=%23%E5%86%9B%E5%B8%88%20%E4%BD%A0%E5%88%AB%E5%81%B7%E5%81%B7%E8%B7%9F%E4%BD%A0%E5%A5%B3%E6%9C%8B%E5%8F%8B%E8%81%8A%E5%A4%A9%E4%BA%86%23) `187.2K 🔥`
1. [摩洛哥进球](https://s.weibo.com/weibo?q=%23%E6%91%A9%E6%B4%9B%E5%93%A5%E8%BF%9B%E7%90%83%23) `176.7K 🔥`

Updated at 2026-06-14 07:51:17

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
