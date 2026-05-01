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

1. [真的有人能成功请到这三天假吗 (Can anyone really successfully take these three days off?)](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E7%9A%84%E6%9C%89%E4%BA%BA%E8%83%BD%E6%88%90%E5%8A%9F%E8%AF%B7%E5%88%B0%E8%BF%99%E4%B8%89%E5%A4%A9%E5%81%87%E5%90%97%23) `479.6K 🔥` `NEW`
1. [吞噬星空我有一刀可斩宇宙](https://s.weibo.com/weibo?q=%23%E5%90%9E%E5%99%AC%E6%98%9F%E7%A9%BA%E6%88%91%E6%9C%89%E4%B8%80%E5%88%80%E5%8F%AF%E6%96%A9%E5%AE%87%E5%AE%99%23) `429.4K 🔥` `NEW`
1. [HLE对战T1](https://s.weibo.com/weibo?q=%23HLE%E5%AF%B9%E6%88%98T1%23) `354.7K 🔥` `NEW`
1. [成都车祸](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E8%BD%A6%E7%A5%B8%23) `350.9K 🔥` `NEW`
1. [李建宏讣告](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%BB%BA%E5%AE%8F%E8%AE%A3%E5%91%8A%23) `341.6K 🔥` `NEW`
1. [美伊停火谈判](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%81%9C%E7%81%AB%E8%B0%88%E5%88%A4%23) `334.0K 🔥` `NEW`
1. [明日方舟达美乐比萨联动](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%E8%BE%BE%E7%BE%8E%E4%B9%90%E6%AF%94%E8%90%A8%E8%81%94%E5%8A%A8%23) `333.8K 🔥` `NEW`
1. [一吻定情女主结婚](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%90%BB%E5%AE%9A%E6%83%85%E5%A5%B3%E4%B8%BB%E7%BB%93%E5%A9%9A%23) `333.6K 🔥` `NEW`
1. [阚清子为穿仙女裙有多拼](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E4%B8%BA%E7%A9%BF%E4%BB%99%E5%A5%B3%E8%A3%99%E6%9C%89%E5%A4%9A%E6%8B%BC%23) `333.0K 🔥` `NEW`
1. [曾沛慈一把牵走张慧雯](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E4%B8%80%E6%8A%8A%E7%89%B5%E8%B5%B0%E5%BC%A0%E6%85%A7%E9%9B%AF%23) `332.3K 🔥` `NEW`
1. [全国首位C919女机长顺利首飞 (The country's first female C919 captain made her first flight successfully)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E9%A6%96%E4%BD%8DC919%E5%A5%B3%E6%9C%BA%E9%95%BF%E9%A1%BA%E5%88%A9%E9%A6%96%E9%A3%9E%23) `331.8K 🔥` `NEW`
1. [美国人把英国国旗挂反了](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%BA%BA%E6%8A%8A%E8%8B%B1%E5%9B%BD%E5%9B%BD%E6%97%97%E6%8C%82%E5%8F%8D%E4%BA%86%23) `284.4K 🔥` `NEW`
1. [时代少年团演唱会直播](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%BC%94%E5%94%B1%E4%BC%9A%E7%9B%B4%E6%92%AD%23) `270.2K 🔥` `NEW`
1. [金靖说减脂最关键是保暖和睡眠](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%E8%AF%B4%E5%87%8F%E8%84%82%E6%9C%80%E5%85%B3%E9%94%AE%E6%98%AF%E4%BF%9D%E6%9A%96%E5%92%8C%E7%9D%A1%E7%9C%A0%23) `247.3K 🔥` `NEW`
1. [景区回应刘晓庆和王婆互动冷淡](https://s.weibo.com/weibo?q=%23%E6%99%AF%E5%8C%BA%E5%9B%9E%E5%BA%94%E5%88%98%E6%99%93%E5%BA%86%E5%92%8C%E7%8E%8B%E5%A9%86%E4%BA%92%E5%8A%A8%E5%86%B7%E6%B7%A1%23) `201.7K 🔥` `NEW`
1. [电影消失的人第89分钟全场尖叫](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E6%B6%88%E5%A4%B1%E7%9A%84%E4%BA%BA%E7%AC%AC89%E5%88%86%E9%92%9F%E5%85%A8%E5%9C%BA%E5%B0%96%E5%8F%AB%23) `188.7K 🔥` `NEW`
1. [寒战1994尺度](https://s.weibo.com/weibo?q=%23%E5%AF%92%E6%88%981994%E5%B0%BA%E5%BA%A6%23) `167.3K 🔥` `NEW`
1. [五一就该让千问AI劳动](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%B0%B1%E8%AF%A5%E8%AE%A9%E5%8D%83%E9%97%AEAI%E5%8A%B3%E5%8A%A8%23) `160.6K 🔥` `NEW`
1. [京东把项羽复刻铠甲送回宿迁](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E6%8A%8A%E9%A1%B9%E7%BE%BD%E5%A4%8D%E5%88%BB%E9%93%A0%E7%94%B2%E9%80%81%E5%9B%9E%E5%AE%BF%E8%BF%81%23) `155.6K 🔥` `NEW`
1. [看话剧偶遇王菲](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E8%AF%9D%E5%89%A7%E5%81%B6%E9%81%87%E7%8E%8B%E8%8F%B2%23) `144.4K 🔥` `NEW`
1. [甲亢哥在深圳买的手机掉海里了 (The mobile phone bought by the hyperthyroid brother in Shenzhen fell into the sea)](https://s.weibo.com/weibo?q=%23%E7%94%B2%E4%BA%A2%E5%93%A5%E5%9C%A8%E6%B7%B1%E5%9C%B3%E4%B9%B0%E7%9A%84%E6%89%8B%E6%9C%BA%E6%8E%89%E6%B5%B7%E9%87%8C%E4%BA%86%23) `1.1M 🔥` `+169%`
1. [著名企业家李建宏国外遭车祸去世 (Famous entrepreneur Li Jianhong died in a car accident abroad)](https://s.weibo.com/weibo?q=%23%E8%91%97%E5%90%8D%E4%BC%81%E4%B8%9A%E5%AE%B6%E6%9D%8E%E5%BB%BA%E5%AE%8F%E5%9B%BD%E5%A4%96%E9%81%AD%E8%BD%A6%E7%A5%B8%E5%8E%BB%E4%B8%96%23) `957.4K 🔥` `+171%`
1. [过桥咪线](https://s.weibo.com/weibo?q=%23%E8%BF%87%E6%A1%A5%E5%92%AA%E7%BA%BF%23) `419.1K 🔥` `+192%`
1. [什么细节让你觉得一个人可靠](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E7%BB%86%E8%8A%82%E8%AE%A9%E4%BD%A0%E8%A7%89%E5%BE%97%E4%B8%80%E4%B8%AA%E4%BA%BA%E5%8F%AF%E9%9D%A0%23) `333.1K 🔥` `+229%`
1. [妈妈自曝曾故意不让瑶一瑶白天睡觉](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E8%87%AA%E6%9B%9D%E6%9B%BE%E6%95%85%E6%84%8F%E4%B8%8D%E8%AE%A9%E7%91%B6%E4%B8%80%E7%91%B6%E7%99%BD%E5%A4%A9%E7%9D%A1%E8%A7%89%23) `332.7K 🔥` `+40%`
1. [男子健身时锁扣断裂被弹飞致瘫痪](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%81%A5%E8%BA%AB%E6%97%B6%E9%94%81%E6%89%A3%E6%96%AD%E8%A3%82%E8%A2%AB%E5%BC%B9%E9%A3%9E%E8%87%B4%E7%98%AB%E7%97%AA%23) `332.4K 🔥` `+41%`
1. [时代少年团演唱会 (Times Youth League Concert)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%BC%94%E5%94%B1%E4%BC%9A%23) `332.0K 🔥` `+110%`
1. [Angelababy的五月行程](https://s.weibo.com/weibo?q=%23Angelababy%E7%9A%84%E4%BA%94%E6%9C%88%E8%A1%8C%E7%A8%8B%23) `331.6K 🔥` `+40%`
1. [樊振东5月赛程](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C5%E6%9C%88%E8%B5%9B%E7%A8%8B%23) `148.3K 🔥` `+39%`
1. [用画笔定格追光的他们是什么体验](https://s.weibo.com/weibo?q=%23%E7%94%A8%E7%94%BB%E7%AC%94%E5%AE%9A%E6%A0%BC%E8%BF%BD%E5%85%89%E7%9A%84%E4%BB%96%E4%BB%AC%E6%98%AF%E4%BB%80%E4%B9%88%E4%BD%93%E9%AA%8C%23) `891.5K 🔥`
1. [陈芋汐卢为10米台金牌 (Chen Yuxilu wins gold medal in 10m platform)](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%8A%8B%E6%B1%90%E5%8D%A2%E4%B8%BA10%E7%B1%B3%E5%8F%B0%E9%87%91%E7%89%8C%23) `856.2K 🔥`
1. [发明创可贴当鼠标垫的是天才 (The person who invented Band-Aid as a mouse pad is a genius)](https://s.weibo.com/weibo?q=%23%E5%8F%91%E6%98%8E%E5%88%9B%E5%8F%AF%E8%B4%B4%E5%BD%93%E9%BC%A0%E6%A0%87%E5%9E%AB%E7%9A%84%E6%98%AF%E5%A4%A9%E6%89%8D%23) `853.9K 🔥`
1. [穿普拉达的女王 米兰达坐经济舱](https://s.weibo.com/weibo?q=%23%E7%A9%BF%E6%99%AE%E6%8B%89%E8%BE%BE%E7%9A%84%E5%A5%B3%E7%8E%8B%20%E7%B1%B3%E5%85%B0%E8%BE%BE%E5%9D%90%E7%BB%8F%E6%B5%8E%E8%88%B1%23) `374.2K 🔥`
1. [金靖回应瘦到认不出](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%9D%96%E5%9B%9E%E5%BA%94%E7%98%A6%E5%88%B0%E8%AE%A4%E4%B8%8D%E5%87%BA%23) `345.1K 🔥`
1. [狼队 人屠双向辜负 (Wolves, human slaughter, let down in both directions)](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%20%E4%BA%BA%E5%B1%A0%E5%8F%8C%E5%90%91%E8%BE%9C%E8%B4%9F%23) `340.7K 🔥`
1. [小米汽车4月交付量超3万台 (Xiaomi Motors delivered more than 30,000 units in April)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A64%E6%9C%88%E4%BA%A4%E4%BB%98%E9%87%8F%E8%B6%853%E4%B8%87%E5%8F%B0%23) `337.2K 🔥`
1. [顾茜茜怀孕五个月了 (Gu Qianqian is five months pregnant)](https://s.weibo.com/weibo?q=%23%E9%A1%BE%E8%8C%9C%E8%8C%9C%E6%80%80%E5%AD%95%E4%BA%94%E4%B8%AA%E6%9C%88%E4%BA%86%23) `333.4K 🔥`
1. [张月把你的水晶手串摘了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E6%8A%8A%E4%BD%A0%E7%9A%84%E6%B0%B4%E6%99%B6%E6%89%8B%E4%B8%B2%E6%91%98%E4%BA%86%23) `277.4K 🔥`
1. [南开大学已成立调查组 (Nankai University has established an investigation team)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%BC%80%E5%A4%A7%E5%AD%A6%E5%B7%B2%E6%88%90%E7%AB%8B%E8%B0%83%E6%9F%A5%E7%BB%84%23) `210.5K 🔥`
1. [你初来人间她已是暮年](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%88%9D%E6%9D%A5%E4%BA%BA%E9%97%B4%E5%A5%B9%E5%B7%B2%E6%98%AF%E6%9A%AE%E5%B9%B4%23) `176.2K 🔥`
1. [刘诗诗新西兰荡秋千 (Liu Shishi swings in New Zealand)](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E6%96%B0%E8%A5%BF%E5%85%B0%E8%8D%A1%E7%A7%8B%E5%8D%83%23) `167.2K 🔥`
1. [陕西11岁失联男孩遗体被发现](https://s.weibo.com/weibo?q=%23%E9%99%95%E8%A5%BF11%E5%B2%81%E5%A4%B1%E8%81%94%E7%94%B7%E5%AD%A9%E9%81%97%E4%BD%93%E8%A2%AB%E5%8F%91%E7%8E%B0%23) `351.0K 🔥` `-40%`
1. [对方拒绝了你的恶意](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E6%96%B9%E6%8B%92%E7%BB%9D%E4%BA%86%E4%BD%A0%E7%9A%84%E6%81%B6%E6%84%8F%23) `347.7K 🔥` `-56%`
1. [五一档票房 (May Day box office)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E6%A1%A3%E7%A5%A8%E6%88%BF%23) `334.6K 🔥` `-71%`
1. [不爱睡觉的国家迎来了最懂他的奶茶](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E7%88%B1%E7%9D%A1%E8%A7%89%E7%9A%84%E5%9B%BD%E5%AE%B6%E8%BF%8E%E6%9D%A5%E4%BA%86%E6%9C%80%E6%87%82%E4%BB%96%E7%9A%84%E5%A5%B6%E8%8C%B6%23) `257.5K 🔥` `-27%`
1. [何宣林 镜头](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%20%E9%95%9C%E5%A4%B4%23) `225.6K 🔥` `-36%`
1. [何不同舟渡 檀健次卢昱晓曹骏 (Why don’t you cross by boat Tan Jianci Lu Yuxiao Cao Jun)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E4%B8%8D%E5%90%8C%E8%88%9F%E6%B8%A1%20%E6%AA%80%E5%81%A5%E6%AC%A1%E5%8D%A2%E6%98%B1%E6%99%93%E6%9B%B9%E9%AA%8F%23) `154.6K 🔥` `-34%`
1. [初代跑男](https://s.weibo.com/weibo?q=%23%E5%88%9D%E4%BB%A3%E8%B7%91%E7%94%B7%23) `153.6K 🔥` `-79%`
1. [因为小三好看不让女儿好看](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E4%B8%BA%E5%B0%8F%E4%B8%89%E5%A5%BD%E7%9C%8B%E4%B8%8D%E8%AE%A9%E5%A5%B3%E5%84%BF%E5%A5%BD%E7%9C%8B%23) `151.3K 🔥` `-33%`
1. [白鹿 跑男](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%20%E8%B7%91%E7%94%B7%23) `148.5K 🔥` `-58%`
1. [特朗普称美国结束对伊朗战争 (Trump says US is ending war with Iran)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E7%BE%8E%E5%9B%BD%E7%BB%93%E6%9D%9F%E5%AF%B9%E4%BC%8A%E6%9C%97%E6%88%98%E4%BA%89%23) `145.9K 🔥` `-39%`

Updated at 2026-05-01 19:35:04

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
