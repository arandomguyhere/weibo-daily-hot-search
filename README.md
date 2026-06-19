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

1. [越南前女首富爱马仕包拍出44万美元 (Hermès bag sold by Vietnam’s former richest woman for $440,000 at auction)](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E5%8D%97%E5%89%8D%E5%A5%B3%E9%A6%96%E5%AF%8C%E7%88%B1%E9%A9%AC%E4%BB%95%E5%8C%85%E6%8B%8D%E5%87%BA44%E4%B8%87%E7%BE%8E%E5%85%83%23) `88.0K 🔥` `NEW`
1. [49岁女子被困电梯坠亡女儿发声](https://s.weibo.com/weibo?q=%2349%E5%B2%81%E5%A5%B3%E5%AD%90%E8%A2%AB%E5%9B%B0%E7%94%B5%E6%A2%AF%E5%9D%A0%E4%BA%A1%E5%A5%B3%E5%84%BF%E5%8F%91%E5%A3%B0%23) `87.7K 🔥` `NEW`
1. [徐梦洁rap 好听](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%B4%81rap%20%E5%A5%BD%E5%90%AC%23) `87.1K 🔥` `NEW`
1. [美国vs澳大利亚 (USA vs Australia)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BDvs%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%23) `559.5K 🔥` `+131%`
1. [心引力开场 灾难 (Gravity Opening Disaster)](https://s.weibo.com/weibo?q=%23%E5%BF%83%E5%BC%95%E5%8A%9B%E5%BC%80%E5%9C%BA%20%E7%81%BE%E9%9A%BE%23) `393.3K 🔥` `+118%`
1. [端午假期第一天2.4亿人次跨区域流动](https://s.weibo.com/weibo?q=%23%E7%AB%AF%E5%8D%88%E5%81%87%E6%9C%9F%E7%AC%AC%E4%B8%80%E5%A4%A92.4%E4%BA%BF%E4%BA%BA%E6%AC%A1%E8%B7%A8%E5%8C%BA%E5%9F%9F%E6%B5%81%E5%8A%A8%23) `331.9K 🔥` `+98%`
1. [窦靖童王菲 泪痕妆 (Dou Jingtong Faye Wong tear stain makeup)](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%E7%8E%8B%E8%8F%B2%20%E6%B3%AA%E7%97%95%E5%A6%86%23) `221.3K 🔥` `+33%`
1. [歌手排名 (Singer ranking)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%23) `164.0K 🔥` `+102%`
1. [存储芯片涨价失控](https://s.weibo.com/weibo?q=%23%E5%AD%98%E5%82%A8%E8%8A%AF%E7%89%87%E6%B6%A8%E4%BB%B7%E5%A4%B1%E6%8E%A7%23) `122.7K 🔥` `+177%`
1. [2人散布有人抢女学生谣言被行拘](https://s.weibo.com/weibo?q=%232%E4%BA%BA%E6%95%A3%E5%B8%83%E6%9C%89%E4%BA%BA%E6%8A%A2%E5%A5%B3%E5%AD%A6%E7%94%9F%E8%B0%A3%E8%A8%80%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `113.6K 🔥` `+46%`
1. [日本签证费涨5倍](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%AD%BE%E8%AF%81%E8%B4%B9%E6%B6%A85%E5%80%8D%23) `88.7K 🔥` `+53%`
1. [郑州一汽车用品商城起火浓烟滚滚 (Fire breaks out at an auto supplies mall in Zhengzhou and smoke billows)](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%B7%9E%E4%B8%80%E6%B1%BD%E8%BD%A6%E7%94%A8%E5%93%81%E5%95%86%E5%9F%8E%E8%B5%B7%E7%81%AB%E6%B5%93%E7%83%9F%E6%BB%9A%E6%BB%9A%23) `88.7K 🔥` `+99%`
1. [女子遗体情夫车里被发现丈夫希望严判](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%81%97%E4%BD%93%E6%83%85%E5%A4%AB%E8%BD%A6%E9%87%8C%E8%A2%AB%E5%8F%91%E7%8E%B0%E4%B8%88%E5%A4%AB%E5%B8%8C%E6%9C%9B%E4%B8%A5%E5%88%A4%23) `88.7K 🔥` `+100%`
1. [运动会](https://s.weibo.com/weibo?q=%23%E8%BF%90%E5%8A%A8%E4%BC%9A%23) `88.6K 🔥` `+99%`
1. [特朗普和高市早苗因珍珠港发生争吵](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%92%8C%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E5%9B%A0%E7%8F%8D%E7%8F%A0%E6%B8%AF%E5%8F%91%E7%94%9F%E4%BA%89%E5%90%B5%23) `88.6K 🔥` `+100%`
1. [半裸救人被质疑不穿上衣贴近女性 (Half-naked rescuer was questioned about being close to women without wearing a shirt)](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E8%A3%B8%E6%95%91%E4%BA%BA%E8%A2%AB%E8%B4%A8%E7%96%91%E4%B8%8D%E7%A9%BF%E4%B8%8A%E8%A1%A3%E8%B4%B4%E8%BF%91%E5%A5%B3%E6%80%A7%23) `88.5K 🔥` `+101%`
1. [3名中国裁判同场执法世界杯 (3 Chinese referees officiating at the World Cup together)](https://s.weibo.com/weibo?q=%233%E5%90%8D%E4%B8%AD%E5%9B%BD%E8%A3%81%E5%88%A4%E5%90%8C%E5%9C%BA%E6%89%A7%E6%B3%95%E4%B8%96%E7%95%8C%E6%9D%AF%23) `88.5K 🔥` `+100%`
1. [金价陷入低迷](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E9%99%B7%E5%85%A5%E4%BD%8E%E8%BF%B7%23) `88.5K 🔥` `+141%`
1. [张远太争气了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%BF%9C%E5%A4%AA%E4%BA%89%E6%B0%94%E4%BA%86%23) `88.4K 🔥` `+109%`
1. [亚马尔父亲比C罗还年轻 (Yamal’s father is younger than Ronaldo)](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E7%88%B6%E4%BA%B2%E6%AF%94C%E7%BD%97%E8%BF%98%E5%B9%B4%E8%BD%BB%23) `88.4K 🔥` `+98%`
1. [北大女学霸谈数学50分如何逆袭](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%A4%A7%E5%A5%B3%E5%AD%A6%E9%9C%B8%E8%B0%88%E6%95%B0%E5%AD%A650%E5%88%86%E5%A6%82%E4%BD%95%E9%80%86%E8%A2%AD%23) `88.3K 🔥` `+101%`
1. [侯明昊歌声和脸一样能打](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E6%AD%8C%E5%A3%B0%E5%92%8C%E8%84%B8%E4%B8%80%E6%A0%B7%E8%83%BD%E6%89%93%23) `88.3K 🔥` `+171%`
1. [杨坤 为什么不留我多唱几首歌呢](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%9D%A4%20%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E7%95%99%E6%88%91%E5%A4%9A%E5%94%B1%E5%87%A0%E9%A6%96%E6%AD%8C%E5%91%A2%23) `88.2K 🔥` `+100%`
1. [浪姐能不能淘汰赵兆](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E8%83%BD%E4%B8%8D%E8%83%BD%E6%B7%98%E6%B1%B0%E8%B5%B5%E5%85%86%23) `88.2K 🔥` `+100%`
1. [莫离](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%23) `88.1K 🔥` `+145%`
1. [浪姐排名](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%8E%92%E5%90%8D%23) `88.1K 🔥` `+142%`
1. [杨坤哭了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%9D%A4%E5%93%AD%E4%BA%86%23) `88.0K 🔥` `+159%`
1. [科内手术成功 (Internal surgery was successful)](https://s.weibo.com/weibo?q=%23%E7%A7%91%E5%86%85%E6%89%8B%E6%9C%AF%E6%88%90%E5%8A%9F%23) `88.0K 🔥` `+197%`
1. [歌手 误入KTV (Singer accidentally entered KTV)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%20%E8%AF%AF%E5%85%A5KTV%23) `87.9K 🔥` `+160%`
1. [侯明昊安可唱雨天 (Hou Minghao encore sings rainy day)](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E5%AE%89%E5%8F%AF%E5%94%B1%E9%9B%A8%E5%A4%A9%23) `87.9K 🔥` `+177%`
1. [特朗普移动首款手机竟是中国制造](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%BB%E5%8A%A8%E9%A6%96%E6%AC%BE%E6%89%8B%E6%9C%BA%E7%AB%9F%E6%98%AF%E4%B8%AD%E5%9B%BD%E5%88%B6%E9%80%A0%23) `87.8K 🔥` `+170%`
1. [特朗普称要耗完美伊谈判60天期限](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E8%A6%81%E8%80%97%E5%AE%8C%E7%BE%8E%E4%BC%8A%E8%B0%88%E5%88%A460%E5%A4%A9%E6%9C%9F%E9%99%90%23) `87.7K 🔥` `+170%`
1. [阿什拉夫因强奸罪受审 (Ashraf on trial for rape)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E4%BB%80%E6%8B%89%E5%A4%AB%E5%9B%A0%E5%BC%BA%E5%A5%B8%E7%BD%AA%E5%8F%97%E5%AE%A1%23) `87.7K 🔥` `+194%`
1. [檀健次演技](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E6%BC%94%E6%8A%80%23) `87.6K 🔥` `+193%`
1. [机场能不能开个洗头店](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%9C%BA%E8%83%BD%E4%B8%8D%E8%83%BD%E5%BC%80%E4%B8%AA%E6%B4%97%E5%A4%B4%E5%BA%97%23) `87.6K 🔥` `+176%`
1. [苏醒手怎么了](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%E6%89%8B%E6%80%8E%E4%B9%88%E4%BA%86%23) `87.5K 🔥` `+197%`
1. [世界杯韩国还没出局但转播商破产了](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E9%9F%A9%E5%9B%BD%E8%BF%98%E6%B2%A1%E5%87%BA%E5%B1%80%E4%BD%86%E8%BD%AC%E6%92%AD%E5%95%86%E7%A0%B4%E4%BA%A7%E4%BA%86%23) `87.5K 🔥` `+138%`
1. [壁上观](https://s.weibo.com/weibo?q=%23%E5%A3%81%E4%B8%8A%E8%A7%82%23) `87.4K 🔥` `+123%`
1. [小白熊 清融 (Little White Bear Qingrong)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%99%BD%E7%86%8A%20%E6%B8%85%E8%9E%8D%23) `87.4K 🔥` `+176%`
1. [C罗球迷攻陷内维斯女友社媒](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E7%90%83%E8%BF%B7%E6%94%BB%E9%99%B7%E5%86%85%E7%BB%B4%E6%96%AF%E5%A5%B3%E5%8F%8B%E7%A4%BE%E5%AA%92%23) `87.4K 🔥` `+169%`
1. [歌手2026之好声音导师渡劫季](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%E4%B9%8B%E5%A5%BD%E5%A3%B0%E9%9F%B3%E5%AF%BC%E5%B8%88%E6%B8%A1%E5%8A%AB%E5%AD%A3%23) `87.3K 🔥` `+200%`
1. [侯明昊安可 (Hou Minghao encore)](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E5%AE%89%E5%8F%AF%23) `87.3K 🔥` `+199%`
1. [浪7最女团的一个唱跳舞台出现了](https://s.weibo.com/weibo?q=%23%E6%B5%AA7%E6%9C%80%E5%A5%B3%E5%9B%A2%E7%9A%84%E4%B8%80%E4%B8%AA%E5%94%B1%E8%B7%B3%E8%88%9E%E5%8F%B0%E5%87%BA%E7%8E%B0%E4%BA%86%23) `87.2K 🔥` `+189%`
1. [世界杯上补丁最多的球员](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E4%B8%8A%E8%A1%A5%E4%B8%81%E6%9C%80%E5%A4%9A%E7%9A%84%E7%90%83%E5%91%98%23) `87.2K 🔥` `+191%`
1. [陈瑶好A](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E5%A5%BDA%23) `87.1K 🔥` `+190%`
1. [林诗栋单双打连续出局 (Lin Shidong was eliminated in consecutive singles and doubles)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%E5%8D%95%E5%8F%8C%E6%89%93%E8%BF%9E%E7%BB%AD%E5%87%BA%E5%B1%80%23) `87.0K 🔥` `+194%`
1. [孙怡何宣林看到分数震惊了 (Sun Yi and He Xuanlin were shocked when they saw the scores)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E4%BD%95%E5%AE%A3%E6%9E%97%E7%9C%8B%E5%88%B0%E5%88%86%E6%95%B0%E9%9C%87%E6%83%8A%E4%BA%86%23) `87.0K 🔥` `+200%`
1. [中国女排3比0法国女排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%923%E6%AF%940%E6%B3%95%E5%9B%BD%E5%A5%B3%E6%8E%92%23) `86.9K 🔥` `+169%`
1. [Camera Ready](https://s.weibo.com/weibo?q=%23Camera%20Ready%23) `86.9K 🔥` `+171%`
1. [最适合打工人的老板出现了 (The most suitable boss for workers appears)](https://s.weibo.com/weibo?q=%23%E6%9C%80%E9%80%82%E5%90%88%E6%89%93%E5%B7%A5%E4%BA%BA%E7%9A%84%E8%80%81%E6%9D%BF%E5%87%BA%E7%8E%B0%E4%BA%86%23) `108.7K 🔥`
1. [张远 刘美含](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%BF%9C%20%E5%88%98%E7%BE%8E%E5%90%AB%23) `110.2K 🔥` `-26%`

Updated at 2026-06-20 06:51:58

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
