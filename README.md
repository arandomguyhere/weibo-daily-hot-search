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

1. [记者曝光地下代孕实验室遭拖拽骨折 (Reporter exposed underground surrogacy laboratory was dragged and fractured)](https://s.weibo.com/weibo?q=%23%E8%AE%B0%E8%80%85%E6%9B%9D%E5%85%89%E5%9C%B0%E4%B8%8B%E4%BB%A3%E5%AD%95%E5%AE%9E%E9%AA%8C%E5%AE%A4%E9%81%AD%E6%8B%96%E6%8B%BD%E9%AA%A8%E6%8A%98%23) `1.1M 🔥` `NEW`
1. [关晓彤剧宣人脉](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%89%A7%E5%AE%A3%E4%BA%BA%E8%84%89%23) `820.2K 🔥` `NEW`
1. [优质网络主播中国行天津行](https://s.weibo.com/weibo?q=%23%E4%BC%98%E8%B4%A8%E7%BD%91%E7%BB%9C%E4%B8%BB%E6%92%AD%E4%B8%AD%E5%9B%BD%E8%A1%8C%E5%A4%A9%E6%B4%A5%E8%A1%8C%23) `756.1K 🔥` `NEW`
1. [米兰 坐牢](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%20%E5%9D%90%E7%89%A2%23) `753.8K 🔥` `NEW`
1. [店家是不是对小菜有什么误解](https://s.weibo.com/weibo?q=%23%E5%BA%97%E5%AE%B6%E6%98%AF%E4%B8%8D%E6%98%AF%E5%AF%B9%E5%B0%8F%E8%8F%9C%E6%9C%89%E4%BB%80%E4%B9%88%E8%AF%AF%E8%A7%A3%23) `738.8K 🔥` `NEW`
1. [女教师打伞事件双方并非父女](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%95%99%E5%B8%88%E6%89%93%E4%BC%9E%E4%BA%8B%E4%BB%B6%E5%8F%8C%E6%96%B9%E5%B9%B6%E9%9D%9E%E7%88%B6%E5%A5%B3%23) `725.3K 🔥` `NEW`
1. [八大技术引领重塑科技旗舰](https://s.weibo.com/weibo?q=%23%E5%85%AB%E5%A4%A7%E6%8A%80%E6%9C%AF%E5%BC%95%E9%A2%86%E9%87%8D%E5%A1%91%E7%A7%91%E6%8A%80%E6%97%97%E8%88%B0%23) `708.3K 🔥` `NEW`
1. [刘强东最新内部讲话](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%BC%BA%E4%B8%9C%E6%9C%80%E6%96%B0%E5%86%85%E9%83%A8%E8%AE%B2%E8%AF%9D%23) `692.6K 🔥` `NEW`
1. [忆秦娥和刘红兵结婚了](https://s.weibo.com/weibo?q=%23%E5%BF%86%E7%A7%A6%E5%A8%A5%E5%92%8C%E5%88%98%E7%BA%A2%E5%85%B5%E7%BB%93%E5%A9%9A%E4%BA%86%23) `503.6K 🔥` `NEW`
1. [南部战区回应荷兰军舰侵闯](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%88%98%E5%8C%BA%E5%9B%9E%E5%BA%94%E8%8D%B7%E5%85%B0%E5%86%9B%E8%88%B0%E4%BE%B5%E9%97%AF%23) `499.2K 🔥` `NEW`
1. [腾讯游戏发布会 (Tencent Game Conference)](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E6%B8%B8%E6%88%8F%E5%8F%91%E5%B8%83%E4%BC%9A%23) `496.9K 🔥` `NEW`
1. [Angelababy参加小海绵学校义卖会](https://s.weibo.com/weibo?q=%23Angelababy%E5%8F%82%E5%8A%A0%E5%B0%8F%E6%B5%B7%E7%BB%B5%E5%AD%A6%E6%A0%A1%E4%B9%89%E5%8D%96%E4%BC%9A%23) `492.0K 🔥` `NEW`
1. [古天乐曾回应入狱22个月](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E5%A4%A9%E4%B9%90%E6%9B%BE%E5%9B%9E%E5%BA%94%E5%85%A5%E7%8B%B122%E4%B8%AA%E6%9C%88%23) `474.0K 🔥` `NEW`
1. [一诺律师声明](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E5%BE%8B%E5%B8%88%E5%A3%B0%E6%98%8E%23) `465.8K 🔥` `NEW`
1. [戴军曝某综艺男主持欺负女主持](https://s.weibo.com/weibo?q=%23%E6%88%B4%E5%86%9B%E6%9B%9D%E6%9F%90%E7%BB%BC%E8%89%BA%E7%94%B7%E4%B8%BB%E6%8C%81%E6%AC%BA%E8%B4%9F%E5%A5%B3%E4%B8%BB%E6%8C%81%23) `459.3K 🔥` `NEW`
1. [金银油集体大跌](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%93%B6%E6%B2%B9%E9%9B%86%E4%BD%93%E5%A4%A7%E8%B7%8C%23) `453.8K 🔥` `NEW`
1. [忆秦娥三公](https://s.weibo.com/weibo?q=%23%E5%BF%86%E7%A7%A6%E5%A8%A5%E4%B8%89%E5%85%AC%23) `450.8K 🔥` `NEW`
1. [曾沛慈直播](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E7%9B%B4%E6%92%AD%23) `448.7K 🔥` `NEW`
1. [欧洲热冒烟了](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E6%B4%B2%E7%83%AD%E5%86%92%E7%83%9F%E4%BA%86%23) `448.6K 🔥` `NEW`
1. [武契奇说台湾属于中国就这么简单](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A5%91%E5%A5%87%E8%AF%B4%E5%8F%B0%E6%B9%BE%E5%B1%9E%E4%BA%8E%E4%B8%AD%E5%9B%BD%E5%B0%B1%E8%BF%99%E4%B9%88%E7%AE%80%E5%8D%95%23) `448.2K 🔥` `NEW`
1. [行政旗舰市场进入纯电时代 (The administrative flagship market enters the pure electric era)](https://s.weibo.com/weibo?q=%23%E8%A1%8C%E6%94%BF%E6%97%97%E8%88%B0%E5%B8%82%E5%9C%BA%E8%BF%9B%E5%85%A5%E7%BA%AF%E7%94%B5%E6%97%B6%E4%BB%A3%23) `448.0K 🔥` `NEW`
1. [25岁小伙恋32岁女老板因88万彩礼分手](https://s.weibo.com/weibo?q=%2325%E5%B2%81%E5%B0%8F%E4%BC%99%E6%81%8B32%E5%B2%81%E5%A5%B3%E8%80%81%E6%9D%BF%E5%9B%A088%E4%B8%87%E5%BD%A9%E7%A4%BC%E5%88%86%E6%89%8B%23) `447.5K 🔥` `NEW`
1. [刘宇宁粉丝不舒服了](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E7%B2%89%E4%B8%9D%E4%B8%8D%E8%88%92%E6%9C%8D%E4%BA%86%23) `447.5K 🔥` `NEW`
1. [孙红雷气哭半个娱乐圈](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%BA%A2%E9%9B%B7%E6%B0%94%E5%93%AD%E5%8D%8A%E4%B8%AA%E5%A8%B1%E4%B9%90%E5%9C%88%23) `446.9K 🔥` `NEW`
1. [两儿子非亲生案大儿子拒绝亲子鉴定](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%84%BF%E5%AD%90%E9%9D%9E%E4%BA%B2%E7%94%9F%E6%A1%88%E5%A4%A7%E5%84%BF%E5%AD%90%E6%8B%92%E7%BB%9D%E4%BA%B2%E5%AD%90%E9%89%B4%E5%AE%9A%23) `446.8K 🔥` `NEW`
1. [蔡康永 你知道TFBOYS现在有多红吗](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BA%B7%E6%B0%B8%20%E4%BD%A0%E7%9F%A5%E9%81%93TFBOYS%E7%8E%B0%E5%9C%A8%E6%9C%89%E5%A4%9A%E7%BA%A2%E5%90%97%23) `446.5K 🔥` `NEW`
1. [蔚来ES9](https://s.weibo.com/weibo?q=%23%E8%94%9A%E6%9D%A5ES9%23) `426.1K 🔥` `NEW`
1. [家业云包场乱成一锅粥了](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%E4%BA%91%E5%8C%85%E5%9C%BA%E4%B9%B1%E6%88%90%E4%B8%80%E9%94%85%E7%B2%A5%E4%BA%86%23) `424.8K 🔥` `NEW`
1. [张天爱 我被高圆圆喂胖了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A4%A9%E7%88%B1%20%E6%88%91%E8%A2%AB%E9%AB%98%E5%9C%86%E5%9C%86%E5%96%82%E8%83%96%E4%BA%86%23) `393.8K 🔥` `NEW`
1. [蔚来发布会](https://s.weibo.com/weibo?q=%23%E8%94%9A%E6%9D%A5%E5%8F%91%E5%B8%83%E4%BC%9A%23) `371.4K 🔥` `NEW`
1. [张月三公赛后千字长文 (Zhang Yuesan wrote a thousand-word essay after the third public match)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E4%B8%89%E5%85%AC%E8%B5%9B%E5%90%8E%E5%8D%83%E5%AD%97%E9%95%BF%E6%96%87%23) `369.3K 🔥` `NEW`
1. [美军事力量将撤出伊朗周边](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E4%BA%8B%E5%8A%9B%E9%87%8F%E5%B0%86%E6%92%A4%E5%87%BA%E4%BC%8A%E6%9C%97%E5%91%A8%E8%BE%B9%23) `331.4K 🔥` `NEW`
1. [王鹤棣不舒服只是迟到的自我保护](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E4%B8%8D%E8%88%92%E6%9C%8D%E5%8F%AA%E6%98%AF%E8%BF%9F%E5%88%B0%E7%9A%84%E8%87%AA%E6%88%91%E4%BF%9D%E6%8A%A4%23) `331.1K 🔥` `NEW`
1. [浪姐侯宇发长文推荐主角](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%BE%AF%E5%AE%87%E5%8F%91%E9%95%BF%E6%96%87%E6%8E%A8%E8%8D%90%E4%B8%BB%E8%A7%92%23) `327.8K 🔥` `NEW`
1. [小雪 无言](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%9B%AA%20%E6%97%A0%E8%A8%80%23) `327.1K 🔥` `NEW`
1. [美印日澳就东海及南海局势表态](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%8D%B0%E6%97%A5%E6%BE%B3%E5%B0%B1%E4%B8%9C%E6%B5%B7%E5%8F%8A%E5%8D%97%E6%B5%B7%E5%B1%80%E5%8A%BF%E8%A1%A8%E6%80%81%23) `326.8K 🔥` `NEW`
1. [两子非亲生案男子为儿子求情](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%AD%90%E9%9D%9E%E4%BA%B2%E7%94%9F%E6%A1%88%E7%94%B7%E5%AD%90%E4%B8%BA%E5%84%BF%E5%AD%90%E6%B1%82%E6%83%85%23) `298.8K 🔥` `NEW`
1. [张凌赫王玉雯演爽了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8E%8B%E7%8E%89%E9%9B%AF%E6%BC%94%E7%88%BD%E4%BA%86%23) `264.5K 🔥` `NEW`
1. [aespa 全员制服](https://s.weibo.com/weibo?q=%23aespa%20%E5%85%A8%E5%91%98%E5%88%B6%E6%9C%8D%23) `182.8K 🔥` `NEW`
1. [吴泽林涨粉](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%B3%BD%E6%9E%97%E6%B6%A8%E7%B2%89%23) `181.8K 🔥` `NEW`
1. [44岁女子花10万求子反得一身妇科病 (A 44-year-old woman spent 100,000 yuan to beg for a child but ended up suffering from gynecological diseases)](https://s.weibo.com/weibo?q=%2344%E5%B2%81%E5%A5%B3%E5%AD%90%E8%8A%B110%E4%B8%87%E6%B1%82%E5%AD%90%E5%8F%8D%E5%BE%97%E4%B8%80%E8%BA%AB%E5%A6%87%E7%A7%91%E7%97%85%23) `180.6K 🔥` `NEW`
1. [369消失了](https://s.weibo.com/weibo?q=%23369%E6%B6%88%E5%A4%B1%E4%BA%86%23) `168.0K 🔥` `NEW`
1. [耀眼](https://s.weibo.com/weibo?q=%23%E8%80%80%E7%9C%BC%23) `167.6K 🔥` `NEW`
1. [打个伞 怎么了](https://s.weibo.com/weibo?q=%23%E6%89%93%E4%B8%AA%E4%BC%9E%20%E6%80%8E%E4%B9%88%E4%BA%86%23) `166.5K 🔥` `NEW`
1. [沈月曾自曝和王鹤棣打得飞起 (Shen Yue once revealed that she had a good fight with Wang Hedi)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E6%9B%BE%E8%87%AA%E6%9B%9D%E5%92%8C%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%89%93%E5%BE%97%E9%A3%9E%E8%B5%B7%23) `488.6K 🔥` `+104%`
1. [孙俪眼睛血管破裂](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E7%9C%BC%E7%9D%9B%E8%A1%80%E7%AE%A1%E7%A0%B4%E8%A3%82%23) `469.5K 🔥` `+94%`
1. [李昀锐腋下管理](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E8%85%8B%E4%B8%8B%E7%AE%A1%E7%90%86%23) `446.3K 🔥` `+114%`
1. [Jennie舞蹈动作](https://s.weibo.com/weibo?q=%23Jennie%E8%88%9E%E8%B9%88%E5%8A%A8%E4%BD%9C%23) `281.3K 🔥` `+35%`
1. [户口以后没那么重要了](https://s.weibo.com/weibo?q=%23%E6%88%B7%E5%8F%A3%E4%BB%A5%E5%90%8E%E6%B2%A1%E9%82%A3%E4%B9%88%E9%87%8D%E8%A6%81%E4%BA%86%23) `480.9K 🔥` `-59%`
1. [法拉利前主席怒喷首款电车](https://s.weibo.com/weibo?q=%23%E6%B3%95%E6%8B%89%E5%88%A9%E5%89%8D%E4%B8%BB%E5%B8%AD%E6%80%92%E5%96%B7%E9%A6%96%E6%AC%BE%E7%94%B5%E8%BD%A6%23) `183.9K 🔥` `-77%`

Updated at 2026-05-27 22:01:23

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
