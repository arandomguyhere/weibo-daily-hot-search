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

1. [婚外胚胎案 重婚 (Extramarital embryo case Bigamy)](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E6%A1%88%20%E9%87%8D%E5%A9%9A%23) `1.4M 🔥` `NEW`
1. [豆包简直是压力全吃之人](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E7%AE%80%E7%9B%B4%E6%98%AF%E5%8E%8B%E5%8A%9B%E5%85%A8%E5%90%83%E4%B9%8B%E4%BA%BA%23) `973.4K 🔥` `NEW`
1. [这是国之重器也是国之底气](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%98%AF%E5%9B%BD%E4%B9%8B%E9%87%8D%E5%99%A8%E4%B9%9F%E6%98%AF%E5%9B%BD%E4%B9%8B%E5%BA%95%E6%B0%94%23) `915.2K 🔥` `NEW`
1. [女儿考上北大 请大家喝水](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E8%80%83%E4%B8%8A%E5%8C%97%E5%A4%A7%20%E8%AF%B7%E5%A4%A7%E5%AE%B6%E5%96%9D%E6%B0%B4%23) `910.1K 🔥` `NEW`
1. [从养老院回来后坚定了粗腿的决心](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E5%85%BB%E8%80%81%E9%99%A2%E5%9B%9E%E6%9D%A5%E5%90%8E%E5%9D%9A%E5%AE%9A%E4%BA%86%E7%B2%97%E8%85%BF%E7%9A%84%E5%86%B3%E5%BF%83%23) `904.3K 🔥` `NEW`
1. [竹知了 余承东](https://s.weibo.com/weibo?q=%23%E7%AB%B9%E7%9F%A5%E4%BA%86%20%E4%BD%99%E6%89%BF%E4%B8%9C%23) `886.7K 🔥` `NEW`
1. [不喜欢被叫泡菜妹的韩女](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%96%9C%E6%AC%A2%E8%A2%AB%E5%8F%AB%E6%B3%A1%E8%8F%9C%E5%A6%B9%E7%9A%84%E9%9F%A9%E5%A5%B3%23) `840.7K 🔥` `NEW`
1. [恋与深空夏以昼PV](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%A4%8F%E4%BB%A5%E6%98%BCPV%23) `589.0K 🔥` `NEW`
1. [花开锦绣](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%23) `589.0K 🔥` `NEW`
1. [天才女友下沉口碑](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%89%8D%E5%A5%B3%E5%8F%8B%E4%B8%8B%E6%B2%89%E5%8F%A3%E7%A2%91%23) `587.7K 🔥` `NEW`
1. [牛蛙 抗生素 (bullfrog antibiotics)](https://s.weibo.com/weibo?q=%23%E7%89%9B%E8%9B%99%20%E6%8A%97%E7%94%9F%E7%B4%A0%23) `586.4K 🔥` `NEW`
1. [内娱居然还有这么多积压的剧](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E5%B1%85%E7%84%B6%E8%BF%98%E6%9C%89%E8%BF%99%E4%B9%88%E5%A4%9A%E7%A7%AF%E5%8E%8B%E7%9A%84%E5%89%A7%23) `585.4K 🔥` `NEW`
1. [魏晨让关晓彤实现高跟鞋自由](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E6%99%A8%E8%AE%A9%E5%85%B3%E6%99%93%E5%BD%A4%E5%AE%9E%E7%8E%B0%E9%AB%98%E8%B7%9F%E9%9E%8B%E8%87%AA%E7%94%B1%23) `584.4K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `583.9K 🔥` `NEW`
1. [宋威龙换头像引CP粉解读](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E6%8D%A2%E5%A4%B4%E5%83%8F%E5%BC%95CP%E7%B2%89%E8%A7%A3%E8%AF%BB%23) `582.8K 🔥` `NEW`
1. [小黄豆 就这么被蔡徐坤踩到脚下](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%BB%84%E8%B1%86%20%E5%B0%B1%E8%BF%99%E4%B9%88%E8%A2%AB%E8%94%A1%E5%BE%90%E5%9D%A4%E8%B8%A9%E5%88%B0%E8%84%9A%E4%B8%8B%23) `581.4K 🔥` `NEW`
1. [儿科韩杰医生被判刑](https://s.weibo.com/weibo?q=%23%E5%84%BF%E7%A7%91%E9%9F%A9%E6%9D%B0%E5%8C%BB%E7%94%9F%E8%A2%AB%E5%88%A4%E5%88%91%23) `581.2K 🔥` `NEW`
1. [瑞幸对嘴喷奶油员工已开除](https://s.weibo.com/weibo?q=%23%E7%91%9E%E5%B9%B8%E5%AF%B9%E5%98%B4%E5%96%B7%E5%A5%B6%E6%B2%B9%E5%91%98%E5%B7%A5%E5%B7%B2%E5%BC%80%E9%99%A4%23) `471.2K 🔥` `NEW`
1. [心动的信号9开播](https://s.weibo.com/weibo?q=%23%E5%BF%83%E5%8A%A8%E7%9A%84%E4%BF%A1%E5%8F%B79%E5%BC%80%E6%92%AD%23) `403.8K 🔥` `NEW`
1. [曝理想CEO李想将迎来第六娃](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%90%86%E6%83%B3CEO%E6%9D%8E%E6%83%B3%E5%B0%86%E8%BF%8E%E6%9D%A5%E7%AC%AC%E5%85%AD%E5%A8%83%23) `389.7K 🔥` `NEW`
1. [宋威龙头像 (Song Weilong's head portrait)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E5%A4%B4%E5%83%8F%23) `388.4K 🔥` `NEW`
1. [存储芯片又崩了](https://s.weibo.com/weibo?q=%23%E5%AD%98%E5%82%A8%E8%8A%AF%E7%89%87%E5%8F%88%E5%B4%A9%E4%BA%86%23) `375.3K 🔥` `NEW`
1. [刘耀文偷偷抹眼泪](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E5%81%B7%E5%81%B7%E6%8A%B9%E7%9C%BC%E6%B3%AA%23) `353.0K 🔥` `NEW`
1. [大学生骑士搭档喜单选手上门送喜](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E7%94%9F%E9%AA%91%E5%A3%AB%E6%90%AD%E6%A1%A3%E5%96%9C%E5%8D%95%E9%80%89%E6%89%8B%E4%B8%8A%E9%97%A8%E9%80%81%E5%96%9C%23) `340.6K 🔥` `NEW`
1. [偶遇关晓彤打球](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E5%85%B3%E6%99%93%E5%BD%A4%E6%89%93%E7%90%83%23) `330.8K 🔥` `NEW`
1. [牛蛙加工厂灰色操作曝光](https://s.weibo.com/weibo?q=%23%E7%89%9B%E8%9B%99%E5%8A%A0%E5%B7%A5%E5%8E%82%E7%81%B0%E8%89%B2%E6%93%8D%E4%BD%9C%E6%9B%9D%E5%85%89%23) `326.8K 🔥` `NEW`
1. [王者荣耀](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `325.5K 🔥` `NEW`
1. [TOP登陆少年官宣首个团综](https://s.weibo.com/weibo?q=%23TOP%E7%99%BB%E9%99%86%E5%B0%91%E5%B9%B4%E5%AE%98%E5%AE%A3%E9%A6%96%E4%B8%AA%E5%9B%A2%E7%BB%BC%23) `317.0K 🔥` `NEW`
1. [央视曝光景区玩命项目](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E6%99%AF%E5%8C%BA%E7%8E%A9%E5%91%BD%E9%A1%B9%E7%9B%AE%23) `309.8K 🔥` `NEW`
1. [长期熬夜的人会有9个变化](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E7%86%AC%E5%A4%9C%E7%9A%84%E4%BA%BA%E4%BC%9A%E6%9C%899%E4%B8%AA%E5%8F%98%E5%8C%96%23) `309.7K 🔥` `NEW`
1. [贾乃亮陪甜馨逛虎园 (Jia Nailiang accompanies Tianxin to visit Tiger Garden)](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E4%B9%83%E4%BA%AE%E9%99%AA%E7%94%9C%E9%A6%A8%E9%80%9B%E8%99%8E%E5%9B%AD%23) `305.5K 🔥` `NEW`
1. [莫氏鸡煲老板说如果再来流量会关店](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E8%AF%B4%E5%A6%82%E6%9E%9C%E5%86%8D%E6%9D%A5%E6%B5%81%E9%87%8F%E4%BC%9A%E5%85%B3%E5%BA%97%23) `303.4K 🔥` `NEW`
1. [河南人事考试中心负责人被停职](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%BA%BA%E4%BA%8B%E8%80%83%E8%AF%95%E4%B8%AD%E5%BF%83%E8%B4%9F%E8%B4%A3%E4%BA%BA%E8%A2%AB%E5%81%9C%E8%81%8C%23) `302.4K 🔥` `NEW`
1. [台风白海豚](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%23) `301.6K 🔥` `NEW`
1. [15岁男生华山被强制买40元出山车票](https://s.weibo.com/weibo?q=%2315%E5%B2%81%E7%94%B7%E7%94%9F%E5%8D%8E%E5%B1%B1%E8%A2%AB%E5%BC%BA%E5%88%B6%E4%B9%B040%E5%85%83%E5%87%BA%E5%B1%B1%E8%BD%A6%E7%A5%A8%23) `295.4K 🔥` `NEW`
1. [球迷在王楚钦评论区晒录取通知书](https://s.weibo.com/weibo?q=%23%E7%90%83%E8%BF%B7%E5%9C%A8%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%AF%84%E8%AE%BA%E5%8C%BA%E6%99%92%E5%BD%95%E5%8F%96%E9%80%9A%E7%9F%A5%E4%B9%A6%23) `289.7K 🔥` `NEW`
1. [韩国股市逾百万账户爆仓](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%82%A1%E5%B8%82%E9%80%BE%E7%99%BE%E4%B8%87%E8%B4%A6%E6%88%B7%E7%88%86%E4%BB%93%23) `270.0K 🔥` `NEW`
1. [小朋友的社交主打一个开门见山](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%9C%8B%E5%8F%8B%E7%9A%84%E7%A4%BE%E4%BA%A4%E4%B8%BB%E6%89%93%E4%B8%80%E4%B8%AA%E5%BC%80%E9%97%A8%E8%A7%81%E5%B1%B1%23) `261.2K 🔥` `NEW`
1. [第48届世界技能大赛主题片](https://s.weibo.com/weibo?q=%23%E7%AC%AC48%E5%B1%8A%E4%B8%96%E7%95%8C%E6%8A%80%E8%83%BD%E5%A4%A7%E8%B5%9B%E4%B8%BB%E9%A2%98%E7%89%87%23) `257.9K 🔥` `NEW`
1. [王者海月神性](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E6%B5%B7%E6%9C%88%E7%A5%9E%E6%80%A7%23) `234.8K 🔥` `NEW`
1. [以色列破防了 (Israel is breached)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E7%A0%B4%E9%98%B2%E4%BA%86%23) `222.0K 🔥` `NEW`
1. [王者无尽之局平行世界皮肤](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E6%97%A0%E5%B0%BD%E4%B9%8B%E5%B1%80%E5%B9%B3%E8%A1%8C%E4%B8%96%E7%95%8C%E7%9A%AE%E8%82%A4%23) `221.0K 🔥` `NEW`
1. [罗正哭穷争议时间线](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%AD%A3%E5%93%AD%E7%A9%B7%E4%BA%89%E8%AE%AE%E6%97%B6%E9%97%B4%E7%BA%BF%23) `220.3K 🔥` `NEW`
1. [灿如繁星](https://s.weibo.com/weibo?q=%23%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%23) `219.5K 🔥` `NEW`
1. [全球大五座科技旗舰小鹏G9L来了](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E5%A4%A7%E4%BA%94%E5%BA%A7%E7%A7%91%E6%8A%80%E6%97%97%E8%88%B0%E5%B0%8F%E9%B9%8FG9L%E6%9D%A5%E4%BA%86%23) `218.9K 🔥` `NEW`
1. [宋亚轩四年前唱的空城又火了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%9B%9B%E5%B9%B4%E5%89%8D%E5%94%B1%E7%9A%84%E7%A9%BA%E5%9F%8E%E5%8F%88%E7%81%AB%E4%BA%86%23) `217.4K 🔥` `NEW`
1. [BND好动心上身了 (BND is so tempting)](https://s.weibo.com/weibo?q=%23BND%E5%A5%BD%E5%8A%A8%E5%BF%83%E4%B8%8A%E8%BA%AB%E4%BA%86%23) `878.9K 🔥` `+47%`
1. [认知差 人生真正的分水岭](https://s.weibo.com/weibo?q=%23%E8%AE%A4%E7%9F%A5%E5%B7%AE%20%E4%BA%BA%E7%94%9F%E7%9C%9F%E6%AD%A3%E7%9A%84%E5%88%86%E6%B0%B4%E5%B2%AD%23) `221.4K 🔥`
1. [显卡跳涨](https://s.weibo.com/weibo?q=%23%E6%98%BE%E5%8D%A1%E8%B7%B3%E6%B6%A8%23) `390.6K 🔥` `-35%`
1. [赛里木湖按人收费改为按车收费 (Sailimu Lake charges per person instead of per vehicle)](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E9%87%8C%E6%9C%A8%E6%B9%96%E6%8C%89%E4%BA%BA%E6%94%B6%E8%B4%B9%E6%94%B9%E4%B8%BA%E6%8C%89%E8%BD%A6%E6%94%B6%E8%B4%B9%23) `307.8K 🔥` `-75%`
1. [赛里木湖景区7人被行拘](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E9%87%8C%E6%9C%A8%E6%B9%96%E6%99%AF%E5%8C%BA7%E4%BA%BA%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `265.1K 🔥` `-93%`

Updated at 2026-08-03 12:51:50

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
