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

1. [机器人伴侣价格11.98万至99万 (Robot companion price ranges from 119,800 to 990,000)](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E4%BC%B4%E4%BE%A3%E4%BB%B7%E6%A0%BC11.98%E4%B8%87%E8%87%B399%E4%B8%87%23) `1.4M 🔥` `NEW`
1. [欧洲人自豪举报20户邻居用空调](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E6%B4%B2%E4%BA%BA%E8%87%AA%E8%B1%AA%E4%B8%BE%E6%8A%A520%E6%88%B7%E9%82%BB%E5%B1%85%E7%94%A8%E7%A9%BA%E8%B0%83%23) `1.2M 🔥` `NEW`
1. [这是10128.6万分之一的回答](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%98%AF10128.6%E4%B8%87%E5%88%86%E4%B9%8B%E4%B8%80%E7%9A%84%E5%9B%9E%E7%AD%94%23) `1.1M 🔥` `NEW`
1. [折叠大满配vivo X Fold6开售](https://s.weibo.com/weibo?q=%23%E6%8A%98%E5%8F%A0%E5%A4%A7%E6%BB%A1%E9%85%8Dvivo%20X%20Fold6%E5%BC%80%E5%94%AE%23) `1.0M 🔥` `NEW`
1. [hr问我为什么有两个毕业证](https://s.weibo.com/weibo?q=%23hr%E9%97%AE%E6%88%91%E4%B8%BA%E4%BB%80%E4%B9%88%E6%9C%89%E4%B8%A4%E4%B8%AA%E6%AF%95%E4%B8%9A%E8%AF%81%23) `1.0M 🔥` `NEW`
1. [姜珮瑶体面](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E7%8F%AE%E7%91%B6%E4%BD%93%E9%9D%A2%23) `1.0M 🔥` `NEW`
1. [恋与深空账号背景图仍为6男主](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E8%B4%A6%E5%8F%B7%E8%83%8C%E6%99%AF%E5%9B%BE%E4%BB%8D%E4%B8%BA6%E7%94%B7%E4%B8%BB%23) `891.3K 🔥` `NEW`
1. [坐飞机不要把头靠在窗户上](https://s.weibo.com/weibo?q=%23%E5%9D%90%E9%A3%9E%E6%9C%BA%E4%B8%8D%E8%A6%81%E6%8A%8A%E5%A4%B4%E9%9D%A0%E5%9C%A8%E7%AA%97%E6%88%B7%E4%B8%8A%23) `766.1K 🔥` `NEW`
1. [中国造海上巨无霸又上新了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%80%A0%E6%B5%B7%E4%B8%8A%E5%B7%A8%E6%97%A0%E9%9C%B8%E5%8F%88%E4%B8%8A%E6%96%B0%E4%BA%86%23) `620.9K 🔥` `NEW`
1. [挪威队主厨为了喂饱哈兰德有多拼](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81%E9%98%9F%E4%B8%BB%E5%8E%A8%E4%B8%BA%E4%BA%86%E5%96%82%E9%A5%B1%E5%93%88%E5%85%B0%E5%BE%B7%E6%9C%89%E5%A4%9A%E6%8B%BC%23) `600.8K 🔥` `NEW`
1. [中国红的105种打开方式 (105 ways to open China Red)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%BA%A2%E7%9A%84105%E7%A7%8D%E6%89%93%E5%BC%80%E6%96%B9%E5%BC%8F%23) `593.9K 🔥` `NEW`
1. [姜乘澜欠税39.5元被公告](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E4%B9%98%E6%BE%9C%E6%AC%A0%E7%A8%8E39.5%E5%85%83%E8%A2%AB%E5%85%AC%E5%91%8A%23) `580.6K 🔥` `NEW`
1. [王曼昱0比3佐藤瞳](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B10%E6%AF%943%E4%BD%90%E8%97%A4%E7%9E%B3%23) `541.2K 🔥` `NEW`
1. [厄瓜多尔捂嘴红牌](https://s.weibo.com/weibo?q=%23%E5%8E%84%E7%93%9C%E5%A4%9A%E5%B0%94%E6%8D%82%E5%98%B4%E7%BA%A2%E7%89%8C%23) `530.3K 🔥` `NEW`
1. [成年人的体面就是周末勿扰](https://s.weibo.com/weibo?q=%23%E6%88%90%E5%B9%B4%E4%BA%BA%E7%9A%84%E4%BD%93%E9%9D%A2%E5%B0%B1%E6%98%AF%E5%91%A8%E6%9C%AB%E5%8B%BF%E6%89%B0%23) `527.6K 🔥` `NEW`
1. [张凌赫田曦薇迪丽热巴等都曾被敲诈](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%AD%89%E9%83%BD%E6%9B%BE%E8%A2%AB%E6%95%B2%E8%AF%88%23) `489.0K 🔥` `NEW`
1. [董明珠喊话股东不用格力凭什么分红](https://s.weibo.com/weibo?q=%23%E8%91%A3%E6%98%8E%E7%8F%A0%E5%96%8A%E8%AF%9D%E8%82%A1%E4%B8%9C%E4%B8%8D%E7%94%A8%E6%A0%BC%E5%8A%9B%E5%87%AD%E4%BB%80%E4%B9%88%E5%88%86%E7%BA%A2%23) `363.4K 🔥` `NEW`
1. [腾讯七月新剧](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E4%B8%83%E6%9C%88%E6%96%B0%E5%89%A7%23) `358.6K 🔥` `NEW`
1. [世界杯16强已定7队](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF16%E5%BC%BA%E5%B7%B2%E5%AE%9A7%E9%98%9F%23) `354.6K 🔥` `NEW`
1. [牛群裸捐全部财产](https://s.weibo.com/weibo?q=%23%E7%89%9B%E7%BE%A4%E8%A3%B8%E6%8D%90%E5%85%A8%E9%83%A8%E8%B4%A2%E4%BA%A7%23) `351.1K 🔥` `NEW`
1. [小鹏MONAL03太懂年轻人了 (Xiaopeng MONAL03 understands young people too well)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FMONAL03%E5%A4%AA%E6%87%82%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%BA%86%23) `347.8K 🔥` `NEW`
1. [千万网红臻臻中考634分](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E7%BD%91%E7%BA%A2%E8%87%BB%E8%87%BB%E4%B8%AD%E8%80%83634%E5%88%86%23) `343.1K 🔥` `NEW`
1. [泰山疑被135公里刀片铁丝网围住](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%B1%B1%E7%96%91%E8%A2%AB135%E5%85%AC%E9%87%8C%E5%88%80%E7%89%87%E9%93%81%E4%B8%9D%E7%BD%91%E5%9B%B4%E4%BD%8F%23) `339.0K 🔥` `NEW`
1. [姆巴佩回应世界杯射手榜第二](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%9B%9E%E5%BA%94%E4%B8%96%E7%95%8C%E6%9D%AF%E5%B0%84%E6%89%8B%E6%A6%9C%E7%AC%AC%E4%BA%8C%23) `334.7K 🔥` `NEW`
1. [关晓彤林一海边吻戏](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E6%9E%97%E4%B8%80%E6%B5%B7%E8%BE%B9%E5%90%BB%E6%88%8F%23) `333.5K 🔥` `NEW`
1. [七一勋章](https://s.weibo.com/weibo?q=%23%E4%B8%83%E4%B8%80%E5%8B%8B%E7%AB%A0%23) `331.6K 🔥` `NEW`
1. [被保姆抚养了23年女生希望找到父母](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E4%BF%9D%E5%A7%86%E6%8A%9A%E5%85%BB%E4%BA%8623%E5%B9%B4%E5%A5%B3%E7%94%9F%E5%B8%8C%E6%9C%9B%E6%89%BE%E5%88%B0%E7%88%B6%E6%AF%8D%23) `329.7K 🔥` `NEW`
1. [世界上倒数第一有眼力见的小狗](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%B8%8A%E5%80%92%E6%95%B0%E7%AC%AC%E4%B8%80%E6%9C%89%E7%9C%BC%E5%8A%9B%E8%A7%81%E7%9A%84%E5%B0%8F%E7%8B%97%23) `328.4K 🔥` `NEW`
1. [多囊其实是慢性全身性疾病](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9B%8A%E5%85%B6%E5%AE%9E%E6%98%AF%E6%85%A2%E6%80%A7%E5%85%A8%E8%BA%AB%E6%80%A7%E7%96%BE%E7%97%85%23) `327.5K 🔥` `NEW`
1. [日本男球迷猥亵女记者](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%94%B7%E7%90%83%E8%BF%B7%E7%8C%A5%E4%BA%B5%E5%A5%B3%E8%AE%B0%E8%80%85%23) `325.0K 🔥` `NEW`
1. [哈兰德女友感谢中国球迷 (Haaland's girlfriend thanks Chinese fans)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%A5%B3%E5%8F%8B%E6%84%9F%E8%B0%A2%E4%B8%AD%E5%9B%BD%E7%90%83%E8%BF%B7%23) `323.6K 🔥` `NEW`
1. [王楚钦3比0塔卡](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A63%E6%AF%940%E5%A1%94%E5%8D%A1%23) `321.9K 🔥` `NEW`
1. [原神](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E7%A5%9E%23) `320.1K 🔥` `NEW`
1. [任素汐拒绝用女性对比拉踩](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E7%B4%A0%E6%B1%90%E6%8B%92%E7%BB%9D%E7%94%A8%E5%A5%B3%E6%80%A7%E5%AF%B9%E6%AF%94%E6%8B%89%E8%B8%A9%23) `319.0K 🔥` `NEW`
1. [iPhone17或迎涨价](https://s.weibo.com/weibo?q=%23iPhone17%E6%88%96%E8%BF%8E%E6%B6%A8%E4%BB%B7%23) `317.8K 🔥` `NEW`
1. [陈龙去医院检查甲亢了](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%BE%99%E5%8E%BB%E5%8C%BB%E9%99%A2%E6%A3%80%E6%9F%A5%E7%94%B2%E4%BA%A2%E4%BA%86%23) `315.1K 🔥` `NEW`
1. [7月1日起公积金账户将多一笔钱](https://s.weibo.com/weibo?q=%237%E6%9C%881%E6%97%A5%E8%B5%B7%E5%85%AC%E7%A7%AF%E9%87%91%E8%B4%A6%E6%88%B7%E5%B0%86%E5%A4%9A%E4%B8%80%E7%AC%94%E9%92%B1%23) `313.4K 🔥` `NEW`
1. [七一香港同心庆回归](https://s.weibo.com/weibo?q=%23%E4%B8%83%E4%B8%80%E9%A6%99%E6%B8%AF%E5%90%8C%E5%BF%83%E5%BA%86%E5%9B%9E%E5%BD%92%23) `312.0K 🔥` `NEW`
1. [白玉兰视后杨紫手势舞](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E8%A7%86%E5%90%8E%E6%9D%A8%E7%B4%AB%E6%89%8B%E5%8A%BF%E8%88%9E%23) `310.9K 🔥` `NEW`
1. [丁程鑫左手是定制的拉链袖子](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%B7%A6%E6%89%8B%E6%98%AF%E5%AE%9A%E5%88%B6%E7%9A%84%E6%8B%89%E9%93%BE%E8%A2%96%E5%AD%90%23) `308.8K 🔥` `NEW`
1. [理想汽车6月交付新车30895辆 (Li Auto delivered 30,895 new cars in June)](https://s.weibo.com/weibo?q=%23%E7%90%86%E6%83%B3%E6%B1%BD%E8%BD%A66%E6%9C%88%E4%BA%A4%E4%BB%98%E6%96%B0%E8%BD%A630895%E8%BE%86%23) `307.2K 🔥` `NEW`
1. [已到工位消息秒回](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E5%88%B0%E5%B7%A5%E4%BD%8D%E6%B6%88%E6%81%AF%E7%A7%92%E5%9B%9E%23) `305.1K 🔥` `NEW`
1. [程靖淇谈王曼昱0比3佐藤瞳](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E9%9D%96%E6%B7%87%E8%B0%88%E7%8E%8B%E6%9B%BC%E6%98%B10%E6%AF%943%E4%BD%90%E8%97%A4%E7%9E%B3%23) `303.2K 🔥` `NEW`
1. [恋与深空取消置顶敖尹相关](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%8F%96%E6%B6%88%E7%BD%AE%E9%A1%B6%E6%95%96%E5%B0%B9%E7%9B%B8%E5%85%B3%23) `300.7K 🔥` `NEW`
1. [保时捷女销售连续六个月拿下销冠](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%97%B6%E6%8D%B7%E5%A5%B3%E9%94%80%E5%94%AE%E8%BF%9E%E7%BB%AD%E5%85%AD%E4%B8%AA%E6%9C%88%E6%8B%BF%E4%B8%8B%E9%94%80%E5%86%A0%23) `299.7K 🔥` `NEW`
1. [现在就出发4 金晨](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%20%E9%87%91%E6%99%A8%23) `621.5K 🔥` `+194%`
1. [罗晋眼里没光了](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%99%8B%E7%9C%BC%E9%87%8C%E6%B2%A1%E5%85%89%E4%BA%86%23) `563.4K 🔥` `+46%`
1. [姜珮瑶回应](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E7%8F%AE%E7%91%B6%E5%9B%9E%E5%BA%94%23) `472.2K 🔥` `+22%`
1. [金鹰奖最佳女主第二波入围名单](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%E7%AC%AC%E4%BA%8C%E6%B3%A2%E5%85%A5%E5%9B%B4%E5%90%8D%E5%8D%95%23) `306.5K 🔥`
1. [杨紫白玉兰庆功宴](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%99%BD%E7%8E%89%E5%85%B0%E5%BA%86%E5%8A%9F%E5%AE%B4%23) `339.1K 🔥` `-54%`
1. [陈瑶没发张月 (Chen Yao did not send Zhang Yue)](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E6%B2%A1%E5%8F%91%E5%BC%A0%E6%9C%88%23) `335.8K 🔥` `-62%`

Updated at 2026-07-01 12:58:00

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
