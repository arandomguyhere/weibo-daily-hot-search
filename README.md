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

1. [连体女婴分离28年后当了妈妈 (Conjoined twin girls become mothers after 28 years of separation)](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E4%BD%93%E5%A5%B3%E5%A9%B4%E5%88%86%E7%A6%BB28%E5%B9%B4%E5%90%8E%E5%BD%93%E4%BA%86%E5%A6%88%E5%A6%88%23) `250.3K 🔥` `NEW`
1. [考研查分能不能给个确切的时间](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%A0%94%E6%9F%A5%E5%88%86%E8%83%BD%E4%B8%8D%E8%83%BD%E7%BB%99%E4%B8%AA%E7%A1%AE%E5%88%87%E7%9A%84%E6%97%B6%E9%97%B4%23) `224.5K 🔥` `NEW`
1. [衣服的成本价在水洗标上](https://s.weibo.com/weibo?q=%23%E8%A1%A3%E6%9C%8D%E7%9A%84%E6%88%90%E6%9C%AC%E4%BB%B7%E5%9C%A8%E6%B0%B4%E6%B4%97%E6%A0%87%E4%B8%8A%23) `224.5K 🔥` `NEW`
1. [张婧仪王楚然 通天路你们走不走](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E7%8E%8B%E6%A5%9A%E7%84%B6%20%E9%80%9A%E5%A4%A9%E8%B7%AF%E4%BD%A0%E4%BB%AC%E8%B5%B0%E4%B8%8D%E8%B5%B0%23) `224.2K 🔥` `NEW`
1. [沈腾马丽这种鞋也要穿同款吗](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E9%A9%AC%E4%B8%BD%E8%BF%99%E7%A7%8D%E9%9E%8B%E4%B9%9F%E8%A6%81%E7%A9%BF%E5%90%8C%E6%AC%BE%E5%90%97%23) `223.9K 🔥` `NEW`
1. [吴京发谛听 郭帆不转发](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%E5%8F%91%E8%B0%9B%E5%90%AC%20%E9%83%AD%E5%B8%86%E4%B8%8D%E8%BD%AC%E5%8F%91%23) `223.5K 🔥` `NEW`
1. [张远演我年后减肥状态](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%BF%9C%E6%BC%94%E6%88%91%E5%B9%B4%E5%90%8E%E5%87%8F%E8%82%A5%E7%8A%B6%E6%80%81%23) `203.6K 🔥` `NEW`
1. [新年BBA车价大降](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%B9%B4BBA%E8%BD%A6%E4%BB%B7%E5%A4%A7%E9%99%8D%23) `184.6K 🔥` `NEW`
1. [小猫的汗脚](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E7%9A%84%E6%B1%97%E8%84%9A%23) `180.3K 🔥` `NEW`
1. [宋威龙和周围人不在一个图层](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E5%92%8C%E5%91%A8%E5%9B%B4%E4%BA%BA%E4%B8%8D%E5%9C%A8%E4%B8%80%E4%B8%AA%E5%9B%BE%E5%B1%82%23) `170.2K 🔥` `NEW`
1. [汪涵11岁儿子在咖啡店当义工 (Wang Han’s 11-year-old son works as a volunteer in a coffee shop)](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E6%B6%B511%E5%B2%81%E5%84%BF%E5%AD%90%E5%9C%A8%E5%92%96%E5%95%A1%E5%BA%97%E5%BD%93%E4%B9%89%E5%B7%A5%23) `168.5K 🔥` `NEW`
1. [默茨就任以来首次访华](https://s.weibo.com/weibo?q=%23%E9%BB%98%E8%8C%A8%E5%B0%B1%E4%BB%BB%E4%BB%A5%E6%9D%A5%E9%A6%96%E6%AC%A1%E8%AE%BF%E5%8D%8E%23) `126.6K 🔥` `NEW`
1. [丁程鑫回复时代少年团](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%9B%9E%E5%A4%8D%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%23) `125.6K 🔥` `NEW`
1. [女子带娃放烟花赔80万获刑2年](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B8%A6%E5%A8%83%E6%94%BE%E7%83%9F%E8%8A%B1%E8%B5%9480%E4%B8%87%E8%8E%B7%E5%88%912%E5%B9%B4%23) `123.7K 🔥` `NEW`
1. [苹果春季发布会全部新品曝光](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%98%A5%E5%AD%A3%E5%8F%91%E5%B8%83%E4%BC%9A%E5%85%A8%E9%83%A8%E6%96%B0%E5%93%81%E6%9B%9D%E5%85%89%23) `120.2K 🔥` `NEW`
1. [张峻豪发的照片好像通缉令](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B3%BB%E8%B1%AA%E5%8F%91%E7%9A%84%E7%85%A7%E7%89%87%E5%A5%BD%E5%83%8F%E9%80%9A%E7%BC%89%E4%BB%A4%23) `103.7K 🔥` `NEW`
1. [女孩贱卖奢侈品家长质疑回收平台](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E8%B4%B1%E5%8D%96%E5%A5%A2%E4%BE%88%E5%93%81%E5%AE%B6%E9%95%BF%E8%B4%A8%E7%96%91%E5%9B%9E%E6%94%B6%E5%B9%B3%E5%8F%B0%23) `103.5K 🔥` `NEW`
1. [董璇张维伊带小酒窝回北京](https://s.weibo.com/weibo?q=%23%E8%91%A3%E7%92%87%E5%BC%A0%E7%BB%B4%E4%BC%8A%E5%B8%A6%E5%B0%8F%E9%85%92%E7%AA%9D%E5%9B%9E%E5%8C%97%E4%BA%AC%23) `103.4K 🔥` `NEW`
1. [金秋天solo持续领先张元英](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%A7%8B%E5%A4%A9solo%E6%8C%81%E7%BB%AD%E9%A2%86%E5%85%88%E5%BC%A0%E5%85%83%E8%8B%B1%23) `102.7K 🔥` `NEW`
1. [员工回应雷军发红包](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A5%E5%9B%9E%E5%BA%94%E9%9B%B7%E5%86%9B%E5%8F%91%E7%BA%A2%E5%8C%85%23) `98.0K 🔥` `NEW`
1. [谷爱凌金色蝴蝶结来历曝光 (The origin of Gu Ailing’s golden bow exposed)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E9%87%91%E8%89%B2%E8%9D%B4%E8%9D%B6%E7%BB%93%E6%9D%A5%E5%8E%86%E6%9B%9D%E5%85%89%23) `94.8K 🔥` `NEW`
1. [中国中免回应股价跌停](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%B8%AD%E5%85%8D%E5%9B%9E%E5%BA%94%E8%82%A1%E4%BB%B7%E8%B7%8C%E5%81%9C%23) `89.9K 🔥` `NEW`
1. [宋雨琦 她说的全是我的词](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%20%E5%A5%B9%E8%AF%B4%E7%9A%84%E5%85%A8%E6%98%AF%E6%88%91%E7%9A%84%E8%AF%8D%23) `88.8K 🔥` `NEW`
1. [正月剃头死舅舅的真相来了](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E6%9C%88%E5%89%83%E5%A4%B4%E6%AD%BB%E8%88%85%E8%88%85%E7%9A%84%E7%9C%9F%E7%9B%B8%E6%9D%A5%E4%BA%86%23) `1.3M 🔥` `+891%`
1. [男子误喝过期牛奶暴瘦53斤](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%AF%AF%E5%96%9D%E8%BF%87%E6%9C%9F%E7%89%9B%E5%A5%B6%E6%9A%B4%E7%98%A653%E6%96%A4%23) `426.3K 🔥` `+52%`
1. [黄金再迎直线跳水](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%86%8D%E8%BF%8E%E7%9B%B4%E7%BA%BF%E8%B7%B3%E6%B0%B4%23) `359.1K 🔥` `+253%`
1. [孟子义将门独后紫衣造型](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E7%B4%AB%E8%A1%A3%E9%80%A0%E5%9E%8B%23) `296.5K 🔥` `+49%`
1. [葡萄330草莓360元一斤网友惊呆 (Netizens were shocked when grapes cost 330 yuan and strawberries cost 360 yuan per pound.)](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84330%E8%8D%89%E8%8E%93360%E5%85%83%E4%B8%80%E6%96%A4%E7%BD%91%E5%8F%8B%E6%83%8A%E5%91%86%23) `859.6K 🔥`
1. [米兰冬奥超越胜负的动人瞬间 (Moving moments beyond victory and defeat at the Milan Winter Olympics)](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E8%B6%85%E8%B6%8A%E8%83%9C%E8%B4%9F%E7%9A%84%E5%8A%A8%E4%BA%BA%E7%9E%AC%E9%97%B4%23) `697.5K 🔥`
1. [沈腾个人总票房达400亿](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E4%B8%AA%E4%BA%BA%E6%80%BB%E7%A5%A8%E6%88%BF%E8%BE%BE400%E4%BA%BF%23) `225.8K 🔥`
1. [任敏 比例](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%95%8F%20%E6%AF%94%E4%BE%8B%23) `224.3K 🔥`
1. [开了个公众号和父母进行魔法对轰](https://s.weibo.com/weibo?q=%23%E5%BC%80%E4%BA%86%E4%B8%AA%E5%85%AC%E4%BC%97%E5%8F%B7%E5%92%8C%E7%88%B6%E6%AF%8D%E8%BF%9B%E8%A1%8C%E9%AD%94%E6%B3%95%E5%AF%B9%E8%BD%B0%23) `224.0K 🔥`
1. [卢昱晓回复外婆去世的粉丝 (Lu Yuxiao replies to fans whose grandmother passed away)](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E5%9B%9E%E5%A4%8D%E5%A4%96%E5%A9%86%E5%8E%BB%E4%B8%96%E7%9A%84%E7%B2%89%E4%B8%9D%23) `223.7K 🔥`
1. [湖南湘阴一男子放烟花时炸膛致身亡](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E6%B9%98%E9%98%B4%E4%B8%80%E7%94%B7%E5%AD%90%E6%94%BE%E7%83%9F%E8%8A%B1%E6%97%B6%E7%82%B8%E8%86%9B%E8%87%B4%E8%BA%AB%E4%BA%A1%23) `223.7K 🔥`
1. [李现和杨紫父母穿同款外套](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E5%92%8C%E6%9D%A8%E7%B4%AB%E7%88%B6%E6%AF%8D%E7%A9%BF%E5%90%8C%E6%AC%BE%E5%A4%96%E5%A5%97%23) `206.6K 🔥`
1. [iPhone18 折叠](https://s.weibo.com/weibo?q=%23iPhone18%20%E6%8A%98%E5%8F%A0%23) `205.5K 🔥`
1. [白鹿首尔回国 (Bailu Seoul returns home)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E9%A6%96%E5%B0%94%E5%9B%9E%E5%9B%BD%23) `122.0K 🔥`
1. [孩子妈晒童锦程的红包](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E5%A6%88%E6%99%92%E7%AB%A5%E9%94%A6%E7%A8%8B%E7%9A%84%E7%BA%A2%E5%8C%85%23) `112.1K 🔥`
1. [赵老师说的太好了 鸡蛋灌饼](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E8%80%81%E5%B8%88%E8%AF%B4%E7%9A%84%E5%A4%AA%E5%A5%BD%E4%BA%86%20%E9%B8%A1%E8%9B%8B%E7%81%8C%E9%A5%BC%23) `104.1K 🔥`
1. [镖人](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `98.8K 🔥`
1. [看演唱会旁边坐的白鹿](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E6%97%81%E8%BE%B9%E5%9D%90%E7%9A%84%E7%99%BD%E9%B9%BF%23) `92.7K 🔥`
1. [考研出分时间 (Postgraduate entrance examination score time)](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%A0%94%E5%87%BA%E5%88%86%E6%97%B6%E9%97%B4%23) `368.3K 🔥` `-66%`
1. [12306半夜候补成功1700元车票作废 (12306 Successful waiting list in the middle of the night, ticket worth 1,700 yuan is invalid)](https://s.weibo.com/weibo?q=%2312306%E5%8D%8A%E5%A4%9C%E5%80%99%E8%A1%A5%E6%88%90%E5%8A%9F1700%E5%85%83%E8%BD%A6%E7%A5%A8%E4%BD%9C%E5%BA%9F%23) `217.2K 🔥` `-46%`
1. [36斤活羊烤完6.9斤涉事餐馆已无顾客](https://s.weibo.com/weibo?q=%2336%E6%96%A4%E6%B4%BB%E7%BE%8A%E7%83%A4%E5%AE%8C6.9%E6%96%A4%E6%B6%89%E4%BA%8B%E9%A4%90%E9%A6%86%E5%B7%B2%E6%97%A0%E9%A1%BE%E5%AE%A2%23) `207.0K 🔥` `-22%`
1. [女生失联后用牛粪保温在牛棚被找到](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E5%A4%B1%E8%81%94%E5%90%8E%E7%94%A8%E7%89%9B%E7%B2%AA%E4%BF%9D%E6%B8%A9%E5%9C%A8%E7%89%9B%E6%A3%9A%E8%A2%AB%E6%89%BE%E5%88%B0%23) `129.5K 🔥` `-49%`
1. [短国年代剧已经拍到了05年 (The short Chinese period drama has been filmed in 2005)](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%9B%BD%E5%B9%B4%E4%BB%A3%E5%89%A7%E5%B7%B2%E7%BB%8F%E6%8B%8D%E5%88%B0%E4%BA%8605%E5%B9%B4%23) `126.5K 🔥` `-52%`
1. [小S二女儿参加伦敦时装周](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E4%BA%8C%E5%A5%B3%E5%84%BF%E5%8F%82%E5%8A%A0%E4%BC%A6%E6%95%A6%E6%97%B6%E8%A3%85%E5%91%A8%23) `104.5K 🔥` `-42%`
1. [一栗小莎子第三次化疗](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%A0%97%E5%B0%8F%E8%8E%8E%E5%AD%90%E7%AC%AC%E4%B8%89%E6%AC%A1%E5%8C%96%E7%96%97%23) `103.7K 🔥` `-53%`
1. [考研查分 (Postgraduate entrance examination score check)](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%A0%94%E6%9F%A5%E5%88%86%23) `98.9K 🔥` `-63%`
1. [张元英solo成绩](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1solo%E6%88%90%E7%BB%A9%23) `94.2K 🔥` `-44%`

Updated at 2026-02-24 16:57:41

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
