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

1. [王鹤棣沈月疑似互删 (Wang Hedi and Shen Yue are suspected of deleting each other)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%B2%88%E6%9C%88%E7%96%91%E4%BC%BC%E4%BA%92%E5%88%A0%23) `12.0M 🔥` `NEW`
1. [留神峪煤矿有重大违法行为](https://s.weibo.com/weibo?q=%23%E7%95%99%E7%A5%9E%E5%B3%AA%E7%85%A4%E7%9F%BF%E6%9C%89%E9%87%8D%E5%A4%A7%E8%BF%9D%E6%B3%95%E8%A1%8C%E4%B8%BA%23) `1.3M 🔥` `NEW`
1. [狼队战胜AG](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E6%88%98%E8%83%9CAG%23) `1.1M 🔥` `NEW`
1. [新一轮强降雨今晚上线](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%B8%80%E8%BD%AE%E5%BC%BA%E9%99%8D%E9%9B%A8%E4%BB%8A%E6%99%9A%E4%B8%8A%E7%BA%BF%23) `1.1M 🔥` `NEW`
1. [孙怡看到曾沛慈票数的表情](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E7%9C%8B%E5%88%B0%E6%9B%BE%E6%B2%9B%E6%85%88%E7%A5%A8%E6%95%B0%E7%9A%84%E8%A1%A8%E6%83%85%23) `1.1M 🔥` `NEW`
1. [狼队信FMVP](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E4%BF%A1FMVP%23) `1.0M 🔥` `NEW`
1. [留神峪煤矿企业对作业人数统计不清](https://s.weibo.com/weibo?q=%23%E7%95%99%E7%A5%9E%E5%B3%AA%E7%85%A4%E7%9F%BF%E4%BC%81%E4%B8%9A%E5%AF%B9%E4%BD%9C%E4%B8%9A%E4%BA%BA%E6%95%B0%E7%BB%9F%E8%AE%A1%E4%B8%8D%E6%B8%85%23) `809.6K 🔥` `NEW`
1. [专家辟谣荔枝也泡药水](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E8%BE%9F%E8%B0%A3%E8%8D%94%E6%9E%9D%E4%B9%9F%E6%B3%A1%E8%8D%AF%E6%B0%B4%23) `762.4K 🔥` `NEW`
1. [窦靖童小时候是王菲的挂件](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%E5%B0%8F%E6%97%B6%E5%80%99%E6%98%AF%E7%8E%8B%E8%8F%B2%E7%9A%84%E6%8C%82%E4%BB%B6%23) `670.8K 🔥` `NEW`
1. [我要的是闺女不是大学生](https://s.weibo.com/weibo?q=%23%E6%88%91%E8%A6%81%E7%9A%84%E6%98%AF%E9%97%BA%E5%A5%B3%E4%B8%8D%E6%98%AF%E5%A4%A7%E5%AD%A6%E7%94%9F%23) `565.3K 🔥` `NEW`
1. [浪姐最合理的一次 (Sister Lang’s most reasonable time)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%9C%80%E5%90%88%E7%90%86%E7%9A%84%E4%B8%80%E6%AC%A1%23) `529.5K 🔥` `NEW`
1. [山西煤矿事故发布会现场默哀](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E7%85%A4%E7%9F%BF%E4%BA%8B%E6%95%85%E5%8F%91%E5%B8%83%E4%BC%9A%E7%8E%B0%E5%9C%BA%E9%BB%98%E5%93%80%23) `527.7K 🔥` `NEW`
1. [伊能静疑似力挺庾澄庆](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E7%96%91%E4%BC%BC%E5%8A%9B%E6%8C%BA%E5%BA%BE%E6%BE%84%E5%BA%86%23) `522.7K 🔥` `NEW`
1. [大帅](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B8%85%23) `521.5K 🔥` `NEW`
1. [曾沛慈 踢馆歌手](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%20%E8%B8%A2%E9%A6%86%E6%AD%8C%E6%89%8B%23) `517.6K 🔥` `NEW`
1. [小伙去银行定期存50万全程记录](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E5%8E%BB%E9%93%B6%E8%A1%8C%E5%AE%9A%E6%9C%9F%E5%AD%9850%E4%B8%87%E5%85%A8%E7%A8%8B%E8%AE%B0%E5%BD%95%23) `514.5K 🔥` `NEW`
1. [李登科声援沈月](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%99%BB%E7%A7%91%E5%A3%B0%E6%8F%B4%E6%B2%88%E6%9C%88%23) `513.8K 🔥` `NEW`
1. [王鹤棣 拆cp](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%20%E6%8B%86cp%23) `510.5K 🔥` `NEW`
1. [雷军透露小米下一步规划](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E9%80%8F%E9%9C%B2%E5%B0%8F%E7%B1%B3%E4%B8%8B%E4%B8%80%E6%AD%A5%E8%A7%84%E5%88%92%23) `506.9K 🔥` `NEW`
1. [湖南石门一受灾村庄几乎没了](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E7%9F%B3%E9%97%A8%E4%B8%80%E5%8F%97%E7%81%BE%E6%9D%91%E5%BA%84%E5%87%A0%E4%B9%8E%E6%B2%A1%E4%BA%86%23) `504.6K 🔥` `NEW`
1. [一诺错失大满贯 (Yinuo missed the Grand Slam)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E9%94%99%E5%A4%B1%E5%A4%A7%E6%BB%A1%E8%B4%AF%23) `503.3K 🔥` `NEW`
1. [单依纯终于原谅观众了](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E7%BB%88%E4%BA%8E%E5%8E%9F%E8%B0%85%E8%A7%82%E4%BC%97%E4%BA%86%23) `499.9K 🔥` `NEW`
1. [棣月系超话头像变黑了](https://s.weibo.com/weibo?q=%23%E6%A3%A3%E6%9C%88%E7%B3%BB%E8%B6%85%E8%AF%9D%E5%A4%B4%E5%83%8F%E5%8F%98%E9%BB%91%E4%BA%86%23) `498.6K 🔥` `NEW`
1. [不许再霸凌自己了](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%AE%B8%E5%86%8D%E9%9C%B8%E5%87%8C%E8%87%AA%E5%B7%B1%E4%BA%86%23) `495.8K 🔥` `NEW`
1. [AI光算力第一股上市首日暴涨380%](https://s.weibo.com/weibo?q=%23AI%E5%85%89%E7%AE%97%E5%8A%9B%E7%AC%AC%E4%B8%80%E8%82%A1%E4%B8%8A%E5%B8%82%E9%A6%96%E6%97%A5%E6%9A%B4%E6%B6%A8380%25%23) `491.8K 🔥` `NEW`
1. [王濛短道速滑 也许放弃才能靠近你](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%20%E4%B9%9F%E8%AE%B8%E6%94%BE%E5%BC%83%E6%89%8D%E8%83%BD%E9%9D%A0%E8%BF%91%E4%BD%A0%23) `491.1K 🔥` `NEW`
1. [留神峪矿工说跑了2小时才出来](https://s.weibo.com/weibo?q=%23%E7%95%99%E7%A5%9E%E5%B3%AA%E7%9F%BF%E5%B7%A5%E8%AF%B4%E8%B7%91%E4%BA%862%E5%B0%8F%E6%97%B6%E6%89%8D%E5%87%BA%E6%9D%A5%23) `488.4K 🔥` `NEW`
1. [张月队长solo秀第一名](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E9%98%9F%E9%95%BFsolo%E7%A7%80%E7%AC%AC%E4%B8%80%E5%90%8D%23) `485.9K 🔥` `NEW`
1. [留神峪煤矿事故82人遇难](https://s.weibo.com/weibo?q=%23%E7%95%99%E7%A5%9E%E5%B3%AA%E7%85%A4%E7%9F%BF%E4%BA%8B%E6%95%8582%E4%BA%BA%E9%81%87%E9%9A%BE%23) `481.2K 🔥` `NEW`
1. [张月好适合野心家](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E5%A5%BD%E9%80%82%E5%90%88%E9%87%8E%E5%BF%83%E5%AE%B6%23) `479.7K 🔥` `NEW`
1. [李昀锐撩的不是关晓彤是丁程鑫吧 (Li Yunrui is not flirting with Guan Xiaotong but Ding Chengxin, right?)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E6%92%A9%E7%9A%84%E4%B8%8D%E6%98%AF%E5%85%B3%E6%99%93%E5%BD%A4%E6%98%AF%E4%B8%81%E7%A8%8B%E9%91%AB%E5%90%A7%23) `476.3K 🔥` `NEW`
1. [小胖 转会](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%83%96%20%E8%BD%AC%E4%BC%9A%23) `475.4K 🔥` `NEW`
1. [家业收视率](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%E6%94%B6%E8%A7%86%E7%8E%87%23) `471.6K 🔥` `NEW`
1. [留神峪煤矿事故发布会](https://s.weibo.com/weibo?q=%23%E7%95%99%E7%A5%9E%E5%B3%AA%E7%85%A4%E7%9F%BF%E4%BA%8B%E6%95%85%E5%8F%91%E5%B8%83%E4%BC%9A%23) `469.4K 🔥` `NEW`
1. [喻言摔了](https://s.weibo.com/weibo?q=%23%E5%96%BB%E8%A8%80%E6%91%94%E4%BA%86%23) `467.2K 🔥` `NEW`
1. [浪姐 制造悬念](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%20%E5%88%B6%E9%80%A0%E6%82%AC%E5%BF%B5%23) `464.4K 🔥` `NEW`
1. [山西煤矿事故仍有2人失联](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E7%85%A4%E7%9F%BF%E4%BA%8B%E6%95%85%E4%BB%8D%E6%9C%892%E4%BA%BA%E5%A4%B1%E8%81%94%23) `460.8K 🔥` `NEW`
1. [周深一开嗓票价就回本了](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E4%B8%80%E5%BC%80%E5%97%93%E7%A5%A8%E4%BB%B7%E5%B0%B1%E5%9B%9E%E6%9C%AC%E4%BA%86%23) `456.1K 🔥` `NEW`
1. [狼队夺冠](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%A4%BA%E5%86%A0%23) `453.1K 🔥` `NEW`
1. [就说王源的演出少看一场会出事](https://s.weibo.com/weibo?q=%23%E5%B0%B1%E8%AF%B4%E7%8E%8B%E6%BA%90%E7%9A%84%E6%BC%94%E5%87%BA%E5%B0%91%E7%9C%8B%E4%B8%80%E5%9C%BA%E4%BC%9A%E5%87%BA%E4%BA%8B%23) `452.0K 🔥` `NEW`
1. [张杰唱的是天下也是归途 (Zhang Jie sings about the world and the way home)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E5%94%B1%E7%9A%84%E6%98%AF%E5%A4%A9%E4%B8%8B%E4%B9%9F%E6%98%AF%E5%BD%92%E9%80%94%23) `449.2K 🔥` `NEW`
1. [男子回应妻子胎停后脑梗智力变3岁](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%9E%E5%BA%94%E5%A6%BB%E5%AD%90%E8%83%8E%E5%81%9C%E5%90%8E%E8%84%91%E6%A2%97%E6%99%BA%E5%8A%9B%E5%8F%983%E5%B2%81%23) `446.9K 🔥` `NEW`
1. [bao教练](https://s.weibo.com/weibo?q=%23bao%E6%95%99%E7%BB%83%23) `442.9K 🔥` `NEW`
1. [银狐木马病毒变种来了](https://s.weibo.com/weibo?q=%23%E9%93%B6%E7%8B%90%E6%9C%A8%E9%A9%AC%E7%97%85%E6%AF%92%E5%8F%98%E7%A7%8D%E6%9D%A5%E4%BA%86%23) `441.9K 🔥` `NEW`
1. [阿史那隼站起来了](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%8F%B2%E9%82%A3%E9%9A%BC%E7%AB%99%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `438.1K 🔥` `NEW`
1. [张国清赶赴留神峪煤矿事故现场](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%9B%BD%E6%B8%85%E8%B5%B6%E8%B5%B4%E7%95%99%E7%A5%9E%E5%B3%AA%E7%85%A4%E7%9F%BF%E4%BA%8B%E6%95%85%E7%8E%B0%E5%9C%BA%23) `435.4K 🔥` `NEW`
1. [严肃等待FMVP皮肤](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E8%82%83%E7%AD%89%E5%BE%85FMVP%E7%9A%AE%E8%82%A4%23) `432.7K 🔥` `NEW`
1. [山西事故煤矿矿工晕倒一个多小时](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E4%BA%8B%E6%95%85%E7%85%A4%E7%9F%BF%E7%9F%BF%E5%B7%A5%E6%99%95%E5%80%92%E4%B8%80%E4%B8%AA%E5%A4%9A%E5%B0%8F%E6%97%B6%23) `431.1K 🔥` `NEW`
1. [东北超](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%8C%97%E8%B6%85%23) `429.8K 🔥` `NEW`
1. [王者荣耀](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `426.1K 🔥` `NEW`

Updated at 2026-05-24 00:13:15

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
