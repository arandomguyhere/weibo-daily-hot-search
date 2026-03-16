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

1. [开心消消乐发错版本了 (Happy Xiaoxiaole sent the wrong version)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%BF%83%E6%B6%88%E6%B6%88%E4%B9%90%E5%8F%91%E9%94%99%E7%89%88%E6%9C%AC%E4%BA%86%23) `273.7K 🔥` `NEW`
1. [刘文祥致歉信已不可见](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%96%87%E7%A5%A5%E8%87%B4%E6%AD%89%E4%BF%A1%E5%B7%B2%E4%B8%8D%E5%8F%AF%E8%A7%81%23) `269.6K 🔥` `NEW`
1. [长玉说和离 谢征吐血](https://s.weibo.com/weibo?q=%23%E9%95%BF%E7%8E%89%E8%AF%B4%E5%92%8C%E7%A6%BB%20%E8%B0%A2%E5%BE%81%E5%90%90%E8%A1%80%23) `268.0K 🔥` `NEW`
1. [联合调查组调查湘雅医院学生坠江身亡](https://s.weibo.com/weibo?q=%23%E8%81%94%E5%90%88%E8%B0%83%E6%9F%A5%E7%BB%84%E8%B0%83%E6%9F%A5%E6%B9%98%E9%9B%85%E5%8C%BB%E9%99%A2%E5%AD%A6%E7%94%9F%E5%9D%A0%E6%B1%9F%E8%BA%AB%E4%BA%A1%23) `166.3K 🔥` `NEW`
1. [手机电脑迎来涨价潮](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E7%94%B5%E8%84%91%E8%BF%8E%E6%9D%A5%E6%B6%A8%E4%BB%B7%E6%BD%AE%23) `166.0K 🔥` `NEW`
1. [保护消费者权益不能靠每年315算总账](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%8A%A4%E6%B6%88%E8%B4%B9%E8%80%85%E6%9D%83%E7%9B%8A%E4%B8%8D%E8%83%BD%E9%9D%A0%E6%AF%8F%E5%B9%B4315%E7%AE%97%E6%80%BB%E8%B4%A6%23) `164.3K 🔥` `NEW`
1. [跟着周云杰打卡无人家务黑科技](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E7%9D%80%E5%91%A8%E4%BA%91%E6%9D%B0%E6%89%93%E5%8D%A1%E6%97%A0%E4%BA%BA%E5%AE%B6%E5%8A%A1%E9%BB%91%E7%A7%91%E6%8A%80%23) `159.2K 🔥` `NEW`
1. [孔雪儿伟大的爱豆时期](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E4%BC%9F%E5%A4%A7%E7%9A%84%E7%88%B1%E8%B1%86%E6%97%B6%E6%9C%9F%23) `155.9K 🔥` `NEW`
1. [韩已故演员崔真实女儿结婚请帖公开](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%B7%B2%E6%95%85%E6%BC%94%E5%91%98%E5%B4%94%E7%9C%9F%E5%AE%9E%E5%A5%B3%E5%84%BF%E7%BB%93%E5%A9%9A%E8%AF%B7%E5%B8%96%E5%85%AC%E5%BC%80%23) `118.8K 🔥` `NEW`
1. [F1官方未回应吴艳妮合影被裁](https://s.weibo.com/weibo?q=%23F1%E5%AE%98%E6%96%B9%E6%9C%AA%E5%9B%9E%E5%BA%94%E5%90%B4%E8%89%B3%E5%A6%AE%E5%90%88%E5%BD%B1%E8%A2%AB%E8%A3%81%23) `111.4K 🔥` `NEW`
1. [张艺凡 黄子韬老娘来了 (Zhang Yifan and Huang Zitao are here)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%89%BA%E5%87%A1%20%E9%BB%84%E5%AD%90%E9%9F%AC%E8%80%81%E5%A8%98%E6%9D%A5%E4%BA%86%23) `106.2K 🔥` `NEW`
1. [黄亦玫你又去找庄国栋了吗](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BA%A6%E7%8E%AB%E4%BD%A0%E5%8F%88%E5%8E%BB%E6%89%BE%E5%BA%84%E5%9B%BD%E6%A0%8B%E4%BA%86%E5%90%97%23) `102.3K 🔥` `NEW`
1. [谁给李煜东戴的大直径美瞳](https://s.weibo.com/weibo?q=%23%E8%B0%81%E7%BB%99%E6%9D%8E%E7%85%9C%E4%B8%9C%E6%88%B4%E7%9A%84%E5%A4%A7%E7%9B%B4%E5%BE%84%E7%BE%8E%E7%9E%B3%23) `99.8K 🔥` `NEW`
1. [黄天鹅多平台遭退单](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%A9%E9%B9%85%E5%A4%9A%E5%B9%B3%E5%8F%B0%E9%81%AD%E9%80%80%E5%8D%95%23) `99.5K 🔥` `NEW`
1. [宋威龙私底下烟酒都不来](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E7%A7%81%E5%BA%95%E4%B8%8B%E7%83%9F%E9%85%92%E9%83%BD%E4%B8%8D%E6%9D%A5%23) `99.5K 🔥` `NEW`
1. [刚起床的素颜张柏芝](https://s.weibo.com/weibo?q=%23%E5%88%9A%E8%B5%B7%E5%BA%8A%E7%9A%84%E7%B4%A0%E9%A2%9C%E5%BC%A0%E6%9F%8F%E8%8A%9D%23) `95.6K 🔥` `NEW`
1. [李门槛 齐本宫](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%97%A8%E6%A7%9B%20%E9%BD%90%E6%9C%AC%E5%AE%AB%23) `93.3K 🔥` `NEW`
1. [恋与深空 偷跑](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%20%E5%81%B7%E8%B7%91%23) `91.1K 🔥` `NEW`
1. [王楚钦开心吃雪糕](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%BC%80%E5%BF%83%E5%90%83%E9%9B%AA%E7%B3%95%23) `86.4K 🔥` `NEW`
1. [事业单位招人岗位在海拔3614米山顶](https://s.weibo.com/weibo?q=%23%E4%BA%8B%E4%B8%9A%E5%8D%95%E4%BD%8D%E6%8B%9B%E4%BA%BA%E5%B2%97%E4%BD%8D%E5%9C%A8%E6%B5%B7%E6%8B%943614%E7%B1%B3%E5%B1%B1%E9%A1%B6%23) `790.1K 🔥` `+175%`
1. [香港西贡码头惊现身绑砖头浮尸 (Surprised discovery of body floating with bricks tied to Sai Kung Pier in Hong Kong)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E8%A5%BF%E8%B4%A1%E7%A0%81%E5%A4%B4%E6%83%8A%E7%8E%B0%E8%BA%AB%E7%BB%91%E7%A0%96%E5%A4%B4%E6%B5%AE%E5%B0%B8%23) `170.3K 🔥` `+69%`
1. [何小鹏直播第二代VLA推送](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%B0%8F%E9%B9%8F%E7%9B%B4%E6%92%AD%E7%AC%AC%E4%BA%8C%E4%BB%A3VLA%E6%8E%A8%E9%80%81%23) `121.2K 🔥` `+37%`
1. [樊振东下赛季加盟杜塞尔多夫 (Fan Zhendong joins Dusseldorf next season)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E4%B8%8B%E8%B5%9B%E5%AD%A3%E5%8A%A0%E7%9B%9F%E6%9D%9C%E5%A1%9E%E5%B0%94%E5%A4%9A%E5%A4%AB%23) `1.1M 🔥`
1. [2026年以旧换新数据亮眼](https://s.weibo.com/weibo?q=%232026%E5%B9%B4%E4%BB%A5%E6%97%A7%E6%8D%A2%E6%96%B0%E6%95%B0%E6%8D%AE%E4%BA%AE%E7%9C%BC%23) `620.6K 🔥`
1. [爱上逐玉是我的宿命](https://s.weibo.com/weibo?q=%23%E7%88%B1%E4%B8%8A%E9%80%90%E7%8E%89%E6%98%AF%E6%88%91%E7%9A%84%E5%AE%BF%E5%91%BD%23) `272.5K 🔥`
1. [樊振东回应转会](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%9B%9E%E5%BA%94%E8%BD%AC%E4%BC%9A%23) `270.9K 🔥`
1. [315塌房全总结](https://s.weibo.com/weibo?q=%23315%E5%A1%8C%E6%88%BF%E5%85%A8%E6%80%BB%E7%BB%93%23) `268.4K 🔥`
1. [26岁患癌女子冒生命危险坚持备孕 (26-year-old cancer-stricken woman risks her life to prepare for pregnancy)](https://s.weibo.com/weibo?q=%2326%E5%B2%81%E6%82%A3%E7%99%8C%E5%A5%B3%E5%AD%90%E5%86%92%E7%94%9F%E5%91%BD%E5%8D%B1%E9%99%A9%E5%9D%9A%E6%8C%81%E5%A4%87%E5%AD%95%23) `157.8K 🔥`
1. [李诞说现在失业的人可能是一件好事](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%AF%9E%E8%AF%B4%E7%8E%B0%E5%9C%A8%E5%A4%B1%E4%B8%9A%E7%9A%84%E4%BA%BA%E5%8F%AF%E8%83%BD%E6%98%AF%E4%B8%80%E4%BB%B6%E5%A5%BD%E4%BA%8B%23) `157.6K 🔥`
1. [痞幼自曝彩礼只要10万](https://s.weibo.com/weibo?q=%23%E7%97%9E%E5%B9%BC%E8%87%AA%E6%9B%9D%E5%BD%A9%E7%A4%BC%E5%8F%AA%E8%A6%8110%E4%B8%87%23) `124.1K 🔥`
1. [男子喝咖啡后头晕送检查出伟哥成分](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%96%9D%E5%92%96%E5%95%A1%E5%90%8E%E5%A4%B4%E6%99%95%E9%80%81%E6%A3%80%E6%9F%A5%E5%87%BA%E4%BC%9F%E5%93%A5%E6%88%90%E5%88%86%23) `113.9K 🔥`
1. [向太给郭碧婷买了4块地 (Xiangtai bought 4 pieces of land for Guo Biting)](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E7%BB%99%E9%83%AD%E7%A2%A7%E5%A9%B7%E4%B9%B0%E4%BA%864%E5%9D%97%E5%9C%B0%23) `89.2K 🔥`
1. [王一栩虞书欣 三搭](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E6%A0%A9%E8%99%9E%E4%B9%A6%E6%AC%A3%20%E4%B8%89%E6%90%AD%23) `81.9K 🔥`
1. [樊振东将离开萨尔队 (Fan Zhendong will leave Salle)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%B0%86%E7%A6%BB%E5%BC%80%E8%90%A8%E5%B0%94%E9%98%9F%23) `273.6K 🔥` `-51%`
1. [爱吃薯片的人天塌了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%90%83%E8%96%AF%E7%89%87%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `272.8K 🔥` `-51%`
1. [发现虾腿有肉以后](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E8%99%BE%E8%85%BF%E6%9C%89%E8%82%89%E4%BB%A5%E5%90%8E%23) `271.8K 🔥` `-51%`
1. [鸿蒙智行 小米](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%99%E6%99%BA%E8%A1%8C%20%E5%B0%8F%E7%B1%B3%23) `270.4K 🔥` `-53%`
1. [教体局通报女孩遭殴打不予立案原因](https://s.weibo.com/weibo?q=%23%E6%95%99%E4%BD%93%E5%B1%80%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%A9%E9%81%AD%E6%AE%B4%E6%89%93%E4%B8%8D%E4%BA%88%E7%AB%8B%E6%A1%88%E5%8E%9F%E5%9B%A0%23) `267.4K 🔥` `-42%`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `260.5K 🔥` `-26%`
1. [中方回应特朗普呼吁多国派军舰护航](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE%E5%91%BC%E5%90%81%E5%A4%9A%E5%9B%BD%E6%B4%BE%E5%86%9B%E8%88%B0%E6%8A%A4%E8%88%AA%23) `173.2K 🔥` `-44%`
1. [张凌赫田曦薇浴池戏](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%E6%B5%B4%E6%B1%A0%E6%88%8F%23) `171.9K 🔥` `-46%`
1. [鹿晗 关晓彤](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%20%E5%85%B3%E6%99%93%E5%BD%A4%23) `163.3K 🔥` `-42%`
1. [孙燕姿胖了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%87%95%E5%A7%BF%E8%83%96%E4%BA%86%23) `162.3K 🔥` `-40%`
1. [女子借5万还不上履约做对方女友 (A woman borrowed 50,000 yuan but still failed to fulfill the contract to become his girlfriend)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%80%9F5%E4%B8%87%E8%BF%98%E4%B8%8D%E4%B8%8A%E5%B1%A5%E7%BA%A6%E5%81%9A%E5%AF%B9%E6%96%B9%E5%A5%B3%E5%8F%8B%23) `162.0K 🔥` `-40%`
1. [范丞丞开始减肥第一天 (Fan Chengcheng’s first day of losing weight)](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E5%BC%80%E5%A7%8B%E5%87%8F%E8%82%A5%E7%AC%AC%E4%B8%80%E5%A4%A9%23) `160.8K 🔥` `-31%`
1. [周冬雨 刘昊然 (Zhou Dongyu Liu Haoran)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%86%AC%E9%9B%A8%20%E5%88%98%E6%98%8A%E7%84%B6%23) `158.5K 🔥` `-28%`
1. [王一栩 虞书欣演过最好的都是我给的](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E6%A0%A9%20%E8%99%9E%E4%B9%A6%E6%AC%A3%E6%BC%94%E8%BF%87%E6%9C%80%E5%A5%BD%E7%9A%84%E9%83%BD%E6%98%AF%E6%88%91%E7%BB%99%E7%9A%84%23) `158.0K 🔥` `-44%`
1. [以为是火腿肠其实是炸药 (I thought it was ham sausage but it was actually explosives)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BA%E6%98%AF%E7%81%AB%E8%85%BF%E8%82%A0%E5%85%B6%E5%AE%9E%E6%98%AF%E7%82%B8%E8%8D%AF%23) `156.7K 🔥` `-80%`
1. [埃文凯尔官宣定居中国 (Evan Kyle officially announced to settle in China)](https://s.weibo.com/weibo?q=%23%E5%9F%83%E6%96%87%E5%87%AF%E5%B0%94%E5%AE%98%E5%AE%A3%E5%AE%9A%E5%B1%85%E4%B8%AD%E5%9B%BD%23) `97.1K 🔥` `-68%`
1. [张檬想给孩子喂母乳到2岁](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%AA%AC%E6%83%B3%E7%BB%99%E5%AD%A9%E5%AD%90%E5%96%82%E6%AF%8D%E4%B9%B3%E5%88%B02%E5%B2%81%23) `88.6K 🔥` `-30%`
1. [逐玉 编剧浪费演员颜值](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E7%BC%96%E5%89%A7%E6%B5%AA%E8%B4%B9%E6%BC%94%E5%91%98%E9%A2%9C%E5%80%BC%23) `86.0K 🔥` `-71%`

Updated at 2026-03-16 20:00:00

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
