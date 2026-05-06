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

1. [女游客秋千坠亡家属已和解 (The family of a female tourist who died after falling from a swing has reconciled)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%B8%B8%E5%AE%A2%E7%A7%8B%E5%8D%83%E5%9D%A0%E4%BA%A1%E5%AE%B6%E5%B1%9E%E5%B7%B2%E5%92%8C%E8%A7%A3%23) `3.1M 🔥` `NEW`
1. [拧巴的人谈恋爱belike](https://s.weibo.com/weibo?q=%23%E6%8B%A7%E5%B7%B4%E7%9A%84%E4%BA%BA%E8%B0%88%E6%81%8B%E7%88%B1belike%23) `789.4K 🔥` `NEW`
1. [玩悬崖秋千女子刚滑出安全平台就坠崖](https://s.weibo.com/weibo?q=%23%E7%8E%A9%E6%82%AC%E5%B4%96%E7%A7%8B%E5%8D%83%E5%A5%B3%E5%AD%90%E5%88%9A%E6%BB%91%E5%87%BA%E5%AE%89%E5%85%A8%E5%B9%B3%E5%8F%B0%E5%B0%B1%E5%9D%A0%E5%B4%96%23) `731.5K 🔥` `NEW`
1. [6万国民车飞上天](https://s.weibo.com/weibo?q=%236%E4%B8%87%E5%9B%BD%E6%B0%91%E8%BD%A6%E9%A3%9E%E4%B8%8A%E5%A4%A9%23) `698.6K 🔥` `NEW`
1. [高速全面免费还有多远](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%80%9F%E5%85%A8%E9%9D%A2%E5%85%8D%E8%B4%B9%E8%BF%98%E6%9C%89%E5%A4%9A%E8%BF%9C%23) `650.7K 🔥` `NEW`
1. [卢昱晓不敬业争议](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E4%B8%8D%E6%95%AC%E4%B8%9A%E4%BA%89%E8%AE%AE%23) `571.2K 🔥` `NEW`
1. [外地车误入夜市被堆满垃圾掰断车牌](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9C%B0%E8%BD%A6%E8%AF%AF%E5%85%A5%E5%A4%9C%E5%B8%82%E8%A2%AB%E5%A0%86%E6%BB%A1%E5%9E%83%E5%9C%BE%E6%8E%B0%E6%96%AD%E8%BD%A6%E7%89%8C%23) `561.1K 🔥` `NEW`
1. [一家人在山姆接了3大袋免费芥末酱](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B6%E4%BA%BA%E5%9C%A8%E5%B1%B1%E5%A7%86%E6%8E%A5%E4%BA%863%E5%A4%A7%E8%A2%8B%E5%85%8D%E8%B4%B9%E8%8A%A5%E6%9C%AB%E9%85%B1%23) `555.2K 🔥` `NEW`
1. [嘎子说结婚了不耽误他谈恋爱](https://s.weibo.com/weibo?q=%23%E5%98%8E%E5%AD%90%E8%AF%B4%E7%BB%93%E5%A9%9A%E4%BA%86%E4%B8%8D%E8%80%BD%E8%AF%AF%E4%BB%96%E8%B0%88%E6%81%8B%E7%88%B1%23) `550.5K 🔥` `NEW`
1. [下午洗澡是一种混沌的感觉](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E5%8D%88%E6%B4%97%E6%BE%A1%E6%98%AF%E4%B8%80%E7%A7%8D%E6%B7%B7%E6%B2%8C%E7%9A%84%E6%84%9F%E8%A7%89%23) `542.9K 🔥` `NEW`
1. [张一山回应与杨紫20年友情 (Zhang Yishan responded to his 20-year friendship with Yang Zi)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%B8%80%E5%B1%B1%E5%9B%9E%E5%BA%94%E4%B8%8E%E6%9D%A8%E7%B4%AB20%E5%B9%B4%E5%8F%8B%E6%83%85%23) `541.2K 🔥` `NEW`
1. [张子枫手臂都是伤疤](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E6%9E%AB%E6%89%8B%E8%87%82%E9%83%BD%E6%98%AF%E4%BC%A4%E7%96%A4%23) `489.4K 🔥` `NEW`
1. [没绑紧三个字不该成最后遗言](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E7%BB%91%E7%B4%A7%E4%B8%89%E4%B8%AA%E5%AD%97%E4%B8%8D%E8%AF%A5%E6%88%90%E6%9C%80%E5%90%8E%E9%81%97%E8%A8%80%23) `488.8K 🔥` `NEW`
1. [车主充电耽误20分钟错过高速免费](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E4%B8%BB%E5%85%85%E7%94%B5%E8%80%BD%E8%AF%AF20%E5%88%86%E9%92%9F%E9%94%99%E8%BF%87%E9%AB%98%E9%80%9F%E5%85%8D%E8%B4%B9%23) `482.7K 🔥` `NEW`
1. [詹姆斯回应不敌雷霆](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E5%9B%9E%E5%BA%94%E4%B8%8D%E6%95%8C%E9%9B%B7%E9%9C%86%23) `480.8K 🔥` `NEW`
1. [长大后才懂父母为啥总在家里吃饭](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%A4%A7%E5%90%8E%E6%89%8D%E6%87%82%E7%88%B6%E6%AF%8D%E4%B8%BA%E5%95%A5%E6%80%BB%E5%9C%A8%E5%AE%B6%E9%87%8C%E5%90%83%E9%A5%AD%23) `477.8K 🔥` `NEW`
1. [时代少年团五一演唱会带动消费14亿](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E4%BA%94%E4%B8%80%E6%BC%94%E5%94%B1%E4%BC%9A%E5%B8%A6%E5%8A%A8%E6%B6%88%E8%B4%B914%E4%BA%BF%23) `473.9K 🔥` `NEW`
1. [韩国民众对中国好感度达6年最高](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%B0%91%E4%BC%97%E5%AF%B9%E4%B8%AD%E5%9B%BD%E5%A5%BD%E6%84%9F%E5%BA%A6%E8%BE%BE6%E5%B9%B4%E6%9C%80%E9%AB%98%23) `471.7K 🔥` `NEW`
1. [张晚意说年下绝不叫姐姐](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%99%9A%E6%84%8F%E8%AF%B4%E5%B9%B4%E4%B8%8B%E7%BB%9D%E4%B8%8D%E5%8F%AB%E5%A7%90%E5%A7%90%23) `468.9K 🔥` `NEW`
1. [高速上一车辆主副驾疑似全在睡觉](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%80%9F%E4%B8%8A%E4%B8%80%E8%BD%A6%E8%BE%86%E4%B8%BB%E5%89%AF%E9%A9%BE%E7%96%91%E4%BC%BC%E5%85%A8%E5%9C%A8%E7%9D%A1%E8%A7%89%23) `464.2K 🔥` `NEW`
1. [中餐厅 (Chinese restaurant)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%85%23) `461.1K 🔥` `NEW`
1. [关晓彤苏知秋妆造](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E8%8B%8F%E7%9F%A5%E7%A7%8B%E5%A6%86%E9%80%A0%23) `457.8K 🔥` `NEW`
1. [这是哪个医学天才穿越到他身上了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%98%AF%E5%93%AA%E4%B8%AA%E5%8C%BB%E5%AD%A6%E5%A4%A9%E6%89%8D%E7%A9%BF%E8%B6%8A%E5%88%B0%E4%BB%96%E8%BA%AB%E4%B8%8A%E4%BA%86%23) `454.9K 🔥` `NEW`
1. [女子将高锰酸钾塞体内消毒引大出血](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B0%86%E9%AB%98%E9%94%B0%E9%85%B8%E9%92%BE%E5%A1%9E%E4%BD%93%E5%86%85%E6%B6%88%E6%AF%92%E5%BC%95%E5%A4%A7%E5%87%BA%E8%A1%80%23) `448.5K 🔥` `NEW`
1. [吴宜泽称决赛中奥沙利文发短信提点](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%9C%E6%B3%BD%E7%A7%B0%E5%86%B3%E8%B5%9B%E4%B8%AD%E5%A5%A5%E6%B2%99%E5%88%A9%E6%96%87%E5%8F%91%E7%9F%AD%E4%BF%A1%E6%8F%90%E7%82%B9%23) `442.1K 🔥` `NEW`
1. [偶遇娜扎在大孤山祈福](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E5%A8%9C%E6%89%8E%E5%9C%A8%E5%A4%A7%E5%AD%A4%E5%B1%B1%E7%A5%88%E7%A6%8F%23) `440.3K 🔥` `NEW`
1. [女子梦中反抗老公离谱行为误伤宝宝](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%A2%A6%E4%B8%AD%E5%8F%8D%E6%8A%97%E8%80%81%E5%85%AC%E7%A6%BB%E8%B0%B1%E8%A1%8C%E4%B8%BA%E8%AF%AF%E4%BC%A4%E5%AE%9D%E5%AE%9D%23) `437.8K 🔥` `NEW`
1. [今年母亲节主打一个懂妈](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E6%AF%8D%E4%BA%B2%E8%8A%82%E4%B8%BB%E6%89%93%E4%B8%80%E4%B8%AA%E6%87%82%E5%A6%88%23) `434.6K 🔥` `NEW`
1. [女子为摘枇杷掰弯树干](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%BA%E6%91%98%E6%9E%87%E6%9D%B7%E6%8E%B0%E5%BC%AF%E6%A0%91%E5%B9%B2%23) `432.4K 🔥` `NEW`
1. [伊朗外长身穿休闲装抵京](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A4%96%E9%95%BF%E8%BA%AB%E7%A9%BF%E4%BC%91%E9%97%B2%E8%A3%85%E6%8A%B5%E4%BA%AC%23) `428.7K 🔥` `NEW`
1. [奔跑吧 (run)](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%23) `425.4K 🔥` `NEW`
1. [痞幼订了张雪机车](https://s.weibo.com/weibo?q=%23%E7%97%9E%E5%B9%BC%E8%AE%A2%E4%BA%86%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%23) `422.2K 🔥` `NEW`
1. [DeepSeek崩了](https://s.weibo.com/weibo?q=%23DeepSeek%E5%B4%A9%E4%BA%86%23) `418.7K 🔥` `NEW`
1. [XC70被连续撞击三次会怎样](https://s.weibo.com/weibo?q=%23XC70%E8%A2%AB%E8%BF%9E%E7%BB%AD%E6%92%9E%E5%87%BB%E4%B8%89%E6%AC%A1%E4%BC%9A%E6%80%8E%E6%A0%B7%23) `407.1K 🔥` `NEW`
1. [王心凌演出被镭射激光烫到腿](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%BF%83%E5%87%8C%E6%BC%94%E5%87%BA%E8%A2%AB%E9%95%AD%E5%B0%84%E6%BF%80%E5%85%89%E7%83%AB%E5%88%B0%E8%85%BF%23) `879.7K 🔥` `+90%`
1. [丢失7年手机突然发定位机主找回](https://s.weibo.com/weibo?q=%23%E4%B8%A2%E5%A4%B17%E5%B9%B4%E6%89%8B%E6%9C%BA%E7%AA%81%E7%84%B6%E5%8F%91%E5%AE%9A%E4%BD%8D%E6%9C%BA%E4%B8%BB%E6%89%BE%E5%9B%9E%23) `669.5K 🔥` `+193%`
1. [詹姆斯尽力局](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E5%B0%BD%E5%8A%9B%E5%B1%80%23) `579.5K 🔥` `+147%`
1. [贺峻霖 但凡有人尊重一下我呢](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%20%E4%BD%86%E5%87%A1%E6%9C%89%E4%BA%BA%E5%B0%8A%E9%87%8D%E4%B8%80%E4%B8%8B%E6%88%91%E5%91%A2%23) `451.9K 🔥` `+32%`
1. [赖冠霖不参加WANNAONE重聚的原因](https://s.weibo.com/weibo?q=%23%E8%B5%96%E5%86%A0%E9%9C%96%E4%B8%8D%E5%8F%82%E5%8A%A0WANNAONE%E9%87%8D%E8%81%9A%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `446.2K 🔥` `+178%`
1. [小米首台万级大电池手机曝光](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E9%A6%96%E5%8F%B0%E4%B8%87%E7%BA%A7%E5%A4%A7%E7%94%B5%E6%B1%A0%E6%89%8B%E6%9C%BA%E6%9B%9D%E5%85%89%23) `421.4K 🔥` `+91%`
1. [穆祉丞高会掉粉了 (Mu Zhicheng will lose fans)](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E9%AB%98%E4%BC%9A%E6%8E%89%E7%B2%89%E4%BA%86%23) `415.7K 🔥` `+31%`
1. [淘宝免单轮番上阵](https://s.weibo.com/weibo?q=%23%E6%B7%98%E5%AE%9D%E5%85%8D%E5%8D%95%E8%BD%AE%E7%95%AA%E4%B8%8A%E9%98%B5%23) `1.1M 🔥`
1. [以旧换新加力扩围掀起消费新热潮](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E6%97%A7%E6%8D%A2%E6%96%B0%E5%8A%A0%E5%8A%9B%E6%89%A9%E5%9B%B4%E6%8E%80%E8%B5%B7%E6%B6%88%E8%B4%B9%E6%96%B0%E7%83%AD%E6%BD%AE%23) `897.0K 🔥`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `486.9K 🔥`
1. [王橹杰高会 (Wang Lujie Gaohui)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E9%AB%98%E4%BC%9A%23) `475.3K 🔥`
1. [谢娜45岁状态](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C45%E5%B2%81%E7%8A%B6%E6%80%81%23) `431.5K 🔥`
1. [卢昱晓下沉口碑 (Lu Yuxiao’s reputation sinks)](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E4%B8%8B%E6%B2%89%E5%8F%A3%E7%A2%91%23) `413.1K 🔥`
1. [谢娜演唱会上座率](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%8A%E5%BA%A7%E7%8E%87%23) `580.2K 🔥` `-48%`
1. [桃花坞6定档](https://s.weibo.com/weibo?q=%23%E6%A1%83%E8%8A%B1%E5%9D%9E6%E5%AE%9A%E6%A1%A3%23) `466.6K 🔥` `-42%`
1. [汉坦病毒疫情](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%E7%96%AB%E6%83%85%23) `450.9K 🔥` `-53%`
1. [我与爱同谋开机](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%B8%8E%E7%88%B1%E5%90%8C%E8%B0%8B%E5%BC%80%E6%9C%BA%23) `411.4K 🔥` `-53%`

Updated at 2026-05-06 14:40:04

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
