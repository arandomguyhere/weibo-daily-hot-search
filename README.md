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

1. [高考 (college entrance examination)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%23) `1.0M 🔥` `NEW`
1. [发现外星生命须立即通报联合国](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%A4%96%E6%98%9F%E7%94%9F%E5%91%BD%E9%A1%BB%E7%AB%8B%E5%8D%B3%E9%80%9A%E6%8A%A5%E8%81%94%E5%90%88%E5%9B%BD%23) `718.9K 🔥` `NEW`
1. [埃里克森在比赛中晕倒](https://s.weibo.com/weibo?q=%23%E5%9F%83%E9%87%8C%E5%85%8B%E6%A3%AE%E5%9C%A8%E6%AF%94%E8%B5%9B%E4%B8%AD%E6%99%95%E5%80%92%23) `609.7K 🔥` `NEW`
1. [伊朗向以色列发射多轮导弹](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%90%91%E4%BB%A5%E8%89%B2%E5%88%97%E5%8F%91%E5%B0%84%E5%A4%9A%E8%BD%AE%E5%AF%BC%E5%BC%B9%23) `444.9K 🔥` `NEW`
1. [曝浪姐五公队长](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B5%AA%E5%A7%90%E4%BA%94%E5%85%AC%E9%98%9F%E9%95%BF%23) `393.6K 🔥` `NEW`
1. [林子聪1天减重超5斤](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%90%E8%81%AA1%E5%A4%A9%E5%87%8F%E9%87%8D%E8%B6%855%E6%96%A4%23) `389.4K 🔥` `NEW`
1. [华为昇腾910C完成训练](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E6%98%87%E8%85%BE910C%E5%AE%8C%E6%88%90%E8%AE%AD%E7%BB%83%23) `381.8K 🔥` `NEW`
1. [上海最有性价比的旅游 骑行](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E6%9C%80%E6%9C%89%E6%80%A7%E4%BB%B7%E6%AF%94%E7%9A%84%E6%97%85%E6%B8%B8%20%E9%AA%91%E8%A1%8C%23) `380.2K 🔥` `NEW`
1. [杨超越素人时期遭职场霸凌](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E7%B4%A0%E4%BA%BA%E6%97%B6%E6%9C%9F%E9%81%AD%E8%81%8C%E5%9C%BA%E9%9C%B8%E5%87%8C%23) `375.1K 🔥` `NEW`
1. [女子多次恶意退款健身时被抓](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%A4%9A%E6%AC%A1%E6%81%B6%E6%84%8F%E9%80%80%E6%AC%BE%E5%81%A5%E8%BA%AB%E6%97%B6%E8%A2%AB%E6%8A%93%23) `371.4K 🔥` `NEW`
1. [惠英红代言loewe 终结年龄焦虑 (Hui Yinghong endorses loewe to end age anxiety)](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%E4%BB%A3%E8%A8%80loewe%20%E7%BB%88%E7%BB%93%E5%B9%B4%E9%BE%84%E7%84%A6%E8%99%91%23) `361.3K 🔥` `NEW`
1. [张慧雯直播](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%85%A7%E9%9B%AF%E7%9B%B4%E6%92%AD%23) `358.9K 🔥` `NEW`
1. [浪姐五公分组](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%BA%94%E5%85%AC%E5%88%86%E7%BB%84%23) `352.8K 🔥` `NEW`
1. [江语晨四公个喜倒一](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%AF%AD%E6%99%A8%E5%9B%9B%E5%85%AC%E4%B8%AA%E5%96%9C%E5%80%92%E4%B8%80%23) `348.5K 🔥` `NEW`
1. [男子以免费摘花生诱杀留守妇女藏尸](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%BB%A5%E5%85%8D%E8%B4%B9%E6%91%98%E8%8A%B1%E7%94%9F%E8%AF%B1%E6%9D%80%E7%95%99%E5%AE%88%E5%A6%87%E5%A5%B3%E8%97%8F%E5%B0%B8%23) `346.2K 🔥` `NEW`
1. [陪考爸爸开房车路边泡茶松弛感拉满](https://s.weibo.com/weibo?q=%23%E9%99%AA%E8%80%83%E7%88%B8%E7%88%B8%E5%BC%80%E6%88%BF%E8%BD%A6%E8%B7%AF%E8%BE%B9%E6%B3%A1%E8%8C%B6%E6%9D%BE%E5%BC%9B%E6%84%9F%E6%8B%89%E6%BB%A1%23) `337.5K 🔥` `NEW`
1. [独行侠曾两次拒绝布伦森续约请求](https://s.weibo.com/weibo?q=%23%E7%8B%AC%E8%A1%8C%E4%BE%A0%E6%9B%BE%E4%B8%A4%E6%AC%A1%E6%8B%92%E7%BB%9D%E5%B8%83%E4%BC%A6%E6%A3%AE%E7%BB%AD%E7%BA%A6%E8%AF%B7%E6%B1%82%23) `331.2K 🔥` `NEW`
1. [何宣林自己救自己](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%E8%87%AA%E5%B7%B1%E6%95%91%E8%87%AA%E5%B7%B1%23) `327.1K 🔥` `NEW`
1. [金饰价跌回2025年水平](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E8%B7%8C%E5%9B%9E2025%E5%B9%B4%E6%B0%B4%E5%B9%B3%23) `319.4K 🔥` `NEW`
1. [张月直接离场了 (Zhang Yue left the scene directly)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E7%9B%B4%E6%8E%A5%E7%A6%BB%E5%9C%BA%E4%BA%86%23) `2.6M 🔥` `+102%`
1. [中国基建上新要编织六张网 (China’s new infrastructure needs to weave six networks)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%9F%BA%E5%BB%BA%E4%B8%8A%E6%96%B0%E8%A6%81%E7%BC%96%E7%BB%87%E5%85%AD%E5%BC%A0%E7%BD%91%23) `791.9K 🔥` `+92%`
1. [浪姐四公个喜人气排名 (The popularity rankings of Sister Lang and Si Gong)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%9B%9B%E5%85%AC%E4%B8%AA%E5%96%9C%E4%BA%BA%E6%B0%94%E6%8E%92%E5%90%8D%23) `668.6K 🔥` `+86%`
1. [张月不可置信的看了很久 (Zhang Yue looked at it in disbelief for a long time)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E4%B8%8D%E5%8F%AF%E7%BD%AE%E4%BF%A1%E7%9A%84%E7%9C%8B%E4%BA%86%E5%BE%88%E4%B9%85%23) `413.5K 🔥` `+476%`
1. [12306回应火车出发7小时中途折返](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E7%81%AB%E8%BD%A6%E5%87%BA%E5%8F%917%E5%B0%8F%E6%97%B6%E4%B8%AD%E9%80%94%E6%8A%98%E8%BF%94%23) `397.2K 🔥` `+108%`
1. [兹维列夫首夺大满贯冠军 (Zverev wins first Grand Slam title)](https://s.weibo.com/weibo?q=%23%E5%85%B9%E7%BB%B4%E5%88%97%E5%A4%AB%E9%A6%96%E5%A4%BA%E5%A4%A7%E6%BB%A1%E8%B4%AF%E5%86%A0%E5%86%9B%23) `391.9K 🔥` `+66%`
1. [张远演唱会主题押中高考作文 (Zhang Yuan's concert theme essay for high school entrance examination)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%BF%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%BB%E9%A2%98%E6%8A%BC%E4%B8%AD%E9%AB%98%E8%80%83%E4%BD%9C%E6%96%87%23) `390.2K 🔥` `+459%`
1. [耐克市值几乎蒸发掉一个阿迪达斯 (Nike's market value has almost evaporated compared to Adidas)](https://s.weibo.com/weibo?q=%23%E8%80%90%E5%85%8B%E5%B8%82%E5%80%BC%E5%87%A0%E4%B9%8E%E8%92%B8%E5%8F%91%E6%8E%89%E4%B8%80%E4%B8%AA%E9%98%BF%E8%BF%AA%E8%BE%BE%E6%96%AF%23) `385.9K 🔥` `+202%`
1. [齐思钧 雷霆雨露俱是天恩 (Qi Sijun Thunder, rain and dew are all gifts from God)](https://s.weibo.com/weibo?q=%23%E9%BD%90%E6%80%9D%E9%92%A7%20%E9%9B%B7%E9%9C%86%E9%9B%A8%E9%9C%B2%E4%BF%B1%E6%98%AF%E5%A4%A9%E6%81%A9%23) `384.9K 🔥` `+451%`
1. [中产家族的破产七件套](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BA%A7%E5%AE%B6%E6%97%8F%E7%9A%84%E7%A0%B4%E4%BA%A7%E4%B8%83%E4%BB%B6%E5%A5%97%23) `376.5K 🔥` `+426%`
1. [懂张若昀了 唐艺昕是明媚的解药](https://s.weibo.com/weibo?q=%23%E6%87%82%E5%BC%A0%E8%8B%A5%E6%98%80%E4%BA%86%20%E5%94%90%E8%89%BA%E6%98%95%E6%98%AF%E6%98%8E%E5%AA%9A%E7%9A%84%E8%A7%A3%E8%8D%AF%23) `372.7K 🔥` `+82%`
1. [曾沛慈看到张慧雯淘汰泪崩了](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E7%9C%8B%E5%88%B0%E5%BC%A0%E6%85%A7%E9%9B%AF%E6%B7%98%E6%B1%B0%E6%B3%AA%E5%B4%A9%E4%BA%86%23) `368.3K 🔥` `+422%`
1. [央视曝光小作坊翻新牙刷](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E5%B0%8F%E4%BD%9C%E5%9D%8A%E7%BF%BB%E6%96%B0%E7%89%99%E5%88%B7%23) `366.8K 🔥` `+447%`
1. [江苏一考生8点59才发现走错考场](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%8B%8F%E4%B8%80%E8%80%83%E7%94%9F8%E7%82%B959%E6%89%8D%E5%8F%91%E7%8E%B0%E8%B5%B0%E9%94%99%E8%80%83%E5%9C%BA%23) `364.2K 🔥` `+439%`
1. [朝鲜平壤街头挂起五星红旗 (The five-star red flag hangs on the streets of Pyongyang, North Korea)](https://s.weibo.com/weibo?q=%23%E6%9C%9D%E9%B2%9C%E5%B9%B3%E5%A3%A4%E8%A1%97%E5%A4%B4%E6%8C%82%E8%B5%B7%E4%BA%94%E6%98%9F%E7%BA%A2%E6%97%97%23) `362.1K 🔥` `+427%`
1. [高考数学](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83%E6%95%B0%E5%AD%A6%23) `355.9K 🔥` `+472%`
1. [九寨沟县发生一起车祸致6死](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%AF%A8%E6%B2%9F%E5%8E%BF%E5%8F%91%E7%94%9F%E4%B8%80%E8%B5%B7%E8%BD%A6%E7%A5%B8%E8%87%B46%E6%AD%BB%23) `354.4K 🔥` `+389%`
1. [狗子回家高烧三天](https://s.weibo.com/weibo?q=%23%E7%8B%97%E5%AD%90%E5%9B%9E%E5%AE%B6%E9%AB%98%E7%83%A7%E4%B8%89%E5%A4%A9%23) `350.9K 🔥` `+438%`
1. [蔡明为王濛发声](https://s.weibo.com/weibo?q=%23%E8%94%A1%E6%98%8E%E4%B8%BA%E7%8E%8B%E6%BF%9B%E5%8F%91%E5%A3%B0%23) `345.5K 🔥` `+492%`
1. [我军电子干扰让荷兰军舰变瞎变聋 (Our military's electronic interference caused the Dutch warship to become blind and deaf)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%86%9B%E7%94%B5%E5%AD%90%E5%B9%B2%E6%89%B0%E8%AE%A9%E8%8D%B7%E5%85%B0%E5%86%9B%E8%88%B0%E5%8F%98%E7%9E%8E%E5%8F%98%E8%81%8B%23) `343.1K 🔥` `+497%`
1. [喜欢独处的人是这么想的 (This is what people who like to be alone think)](https://s.weibo.com/weibo?q=%23%E5%96%9C%E6%AC%A2%E7%8B%AC%E5%A4%84%E7%9A%84%E4%BA%BA%E6%98%AF%E8%BF%99%E4%B9%88%E6%83%B3%E7%9A%84%23) `340.0K 🔥` `+292%`
1. [七根心简2 (Seven Roots Heart Jane 2)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E6%A0%B9%E5%BF%83%E7%AE%802%23) `338.2K 🔥` `+579%`
1. [搁浅夯爆了 (Stranded and exploded)](https://s.weibo.com/weibo?q=%23%E6%90%81%E6%B5%85%E5%A4%AF%E7%88%86%E4%BA%86%23) `334.3K 🔥` `+565%`
1. [代斯 我再也不唱歌了 (Dys I will never sing again)](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E6%96%AF%20%E6%88%91%E5%86%8D%E4%B9%9F%E4%B8%8D%E5%94%B1%E6%AD%8C%E4%BA%86%23) `333.3K 🔥` `+489%`
1. [孙怡一公队友全部淘汰](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E4%B8%80%E5%85%AC%E9%98%9F%E5%8F%8B%E5%85%A8%E9%83%A8%E6%B7%98%E6%B1%B0%23) `329.9K 🔥` `+397%`
1. [49岁男子在香港至舟山货船上失踪](https://s.weibo.com/weibo?q=%2349%E5%B2%81%E7%94%B7%E5%AD%90%E5%9C%A8%E9%A6%99%E6%B8%AF%E8%87%B3%E8%88%9F%E5%B1%B1%E8%B4%A7%E8%88%B9%E4%B8%8A%E5%A4%B1%E8%B8%AA%23) `324.5K 🔥` `+396%`
1. [安崎问阚清子还会选择那个人吗](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%B4%8E%E9%97%AE%E9%98%9A%E6%B8%85%E5%AD%90%E8%BF%98%E4%BC%9A%E9%80%89%E6%8B%A9%E9%82%A3%E4%B8%AA%E4%BA%BA%E5%90%97%23) `322.7K 🔥` `+566%`
1. [杰士邦又要被卖了](https://s.weibo.com/weibo?q=%23%E6%9D%B0%E5%A3%AB%E9%82%A6%E5%8F%88%E8%A6%81%E8%A2%AB%E5%8D%96%E4%BA%86%23) `321.2K 🔥` `+514%`
1. [不要擅自回复外星人](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E6%93%85%E8%87%AA%E5%9B%9E%E5%A4%8D%E5%A4%96%E6%98%9F%E4%BA%BA%23) `766.4K 🔥` `-38%`
1. [傅子纯去世 (Fu Zichun passed away)](https://s.weibo.com/weibo?q=%23%E5%82%85%E5%AD%90%E7%BA%AF%E5%8E%BB%E4%B8%96%23) `395.4K 🔥` `-49%`
1. [黄子韬怒斥偷拍牙医 (Huang Zitao angrily criticized the dentist for secretly filming him)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E6%80%92%E6%96%A5%E5%81%B7%E6%8B%8D%E7%89%99%E5%8C%BB%23) `379.1K 🔥` `-54%`

Updated at 2026-06-08 07:58:18

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
