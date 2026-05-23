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

1. [汪苏泷跳了三次误闯天家 (Wang Sulong jumped three times and accidentally broke into Tianjia)](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E8%B7%B3%E4%BA%86%E4%B8%89%E6%AC%A1%E8%AF%AF%E9%97%AF%E5%A4%A9%E5%AE%B6%23) `51.3K 🔥` `NEW`
1. [留神峪煤矿事故最新进展](https://s.weibo.com/weibo?q=%23%E7%95%99%E7%A5%9E%E5%B3%AA%E7%85%A4%E7%9F%BF%E4%BA%8B%E6%95%85%E6%9C%80%E6%96%B0%E8%BF%9B%E5%B1%95%23) `50.9K 🔥` `NEW`
1. [留神峪煤矿事故82人遇难 (82 people were killed in the Heshenyu coal mine accident)](https://s.weibo.com/weibo?q=%23%E7%95%99%E7%A5%9E%E5%B3%AA%E7%85%A4%E7%9F%BF%E4%BA%8B%E6%95%8582%E4%BA%BA%E9%81%87%E9%9A%BE%23) `178.6K 🔥` `-33%`
1. [不许再霸凌自己了](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%AE%B8%E5%86%8D%E9%9C%B8%E5%87%8C%E8%87%AA%E5%B7%B1%E4%BA%86%23) `135.5K 🔥` `-23%`
1. [中国硬核实力又刷屏了 (China’s hard core strength has been refreshed again)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%A1%AC%E6%A0%B8%E5%AE%9E%E5%8A%9B%E5%8F%88%E5%88%B7%E5%B1%8F%E4%BA%86%23) `114.5K 🔥` `-34%`
1. [王鹤棣对徐志胜的态度 (Wang Hedi's attitude towards Xu Zhisheng)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%AF%B9%E5%BE%90%E5%BF%97%E8%83%9C%E7%9A%84%E6%80%81%E5%BA%A6%23) `112.9K 🔥` `-35%`
1. [孙怡看到曾沛慈票数的表情](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E7%9C%8B%E5%88%B0%E6%9B%BE%E6%B2%9B%E6%85%88%E7%A5%A8%E6%95%B0%E7%9A%84%E8%A1%A8%E6%83%85%23) `109.9K 🔥` `-37%`
1. [留神峪煤矿有重大违法行为](https://s.weibo.com/weibo?q=%23%E7%95%99%E7%A5%9E%E5%B3%AA%E7%85%A4%E7%9F%BF%E6%9C%89%E9%87%8D%E5%A4%A7%E8%BF%9D%E6%B3%95%E8%A1%8C%E4%B8%BA%23) `78.3K 🔥` `-50%`
1. [我要的是闺女不是大学生](https://s.weibo.com/weibo?q=%23%E6%88%91%E8%A6%81%E7%9A%84%E6%98%AF%E9%97%BA%E5%A5%B3%E4%B8%8D%E6%98%AF%E5%A4%A7%E5%AD%A6%E7%94%9F%23) `75.9K 🔥` `-56%`
1. [浪姐最合理的一次 (Sister Lang’s most reasonable time)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%9C%80%E5%90%88%E7%90%86%E7%9A%84%E4%B8%80%E6%AC%A1%23) `67.9K 🔥` `-58%`
1. [航司取消航班 无赔偿](https://s.weibo.com/weibo?q=%23%E8%88%AA%E5%8F%B8%E5%8F%96%E6%B6%88%E8%88%AA%E7%8F%AD%20%E6%97%A0%E8%B5%94%E5%81%BF%23) `56.2K 🔥` `-63%`
1. [留神峪煤矿企业对作业人数统计不清 (Pay attention to the coal mine company's unclear statistics on the number of workers)](https://s.weibo.com/weibo?q=%23%E7%95%99%E7%A5%9E%E5%B3%AA%E7%85%A4%E7%9F%BF%E4%BC%81%E4%B8%9A%E5%AF%B9%E4%BD%9C%E4%B8%9A%E4%BA%BA%E6%95%B0%E7%BB%9F%E8%AE%A1%E4%B8%8D%E6%B8%85%23) `52.0K 🔥` `-63%`
1. [伊能静疑似力挺庾澄庆](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E7%96%91%E4%BC%BC%E5%8A%9B%E6%8C%BA%E5%BA%BE%E6%BE%84%E5%BA%86%23) `52.0K 🔥` `-63%`
1. [小伙去银行定期存50万全程记录](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E5%8E%BB%E9%93%B6%E8%A1%8C%E5%AE%9A%E6%9C%9F%E5%AD%9850%E4%B8%87%E5%85%A8%E7%A8%8B%E8%AE%B0%E5%BD%95%23) `52.0K 🔥` `-39%`
1. [单依纯终于原谅观众了](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E7%BB%88%E4%BA%8E%E5%8E%9F%E8%B0%85%E8%A7%82%E4%BC%97%E4%BA%86%23) `52.0K 🔥` `-61%`
1. [曾沛慈 踢馆歌手 (Tsang Pei-chi, kicking singer)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%20%E8%B8%A2%E9%A6%86%E6%AD%8C%E6%89%8B%23) `51.9K 🔥` `-53%`
1. [窦靖童小时候是王菲的挂件 (Dou Jingtong was Faye Wong’s pendant when she was a child)](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%E5%B0%8F%E6%97%B6%E5%80%99%E6%98%AF%E7%8E%8B%E8%8F%B2%E7%9A%84%E6%8C%82%E4%BB%B6%23) `51.9K 🔥` `-50%`
1. [小胖 转会](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%83%96%20%E8%BD%AC%E4%BC%9A%23) `51.9K 🔥` `-57%`
1. [张月队长solo秀第一名](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E9%98%9F%E9%95%BFsolo%E7%A7%80%E7%AC%AC%E4%B8%80%E5%90%8D%23) `51.9K 🔥` `-39%`
1. [狼队战胜AG](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E6%88%98%E8%83%9CAG%23) `51.8K 🔥` `-41%`
1. [郭本尼唯爱孙怡 (Benny Guo only loves Sun Yi)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%9C%AC%E5%B0%BC%E5%94%AF%E7%88%B1%E5%AD%99%E6%80%A1%23) `51.8K 🔥` `-40%`
1. [一诺错失大满贯 (Yinuo missed the Grand Slam)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E9%94%99%E5%A4%B1%E5%A4%A7%E6%BB%A1%E8%B4%AF%23) `51.8K 🔥` `-39%`
1. [王濛短道速滑 也许放弃才能靠近你](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%20%E4%B9%9F%E8%AE%B8%E6%94%BE%E5%BC%83%E6%89%8D%E8%83%BD%E9%9D%A0%E8%BF%91%E4%BD%A0%23) `51.8K 🔥` `-39%`
1. [潮汕女子嫁到五常吐槽插秧累](https://s.weibo.com/weibo?q=%23%E6%BD%AE%E6%B1%95%E5%A5%B3%E5%AD%90%E5%AB%81%E5%88%B0%E4%BA%94%E5%B8%B8%E5%90%90%E6%A7%BD%E6%8F%92%E7%A7%A7%E7%B4%AF%23) `51.7K 🔥` `-38%`
1. [大帅](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B8%85%23) `51.7K 🔥` `-39%`
1. [王者荣耀](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `51.7K 🔥` `-35%`
1. [香港航天员黎家盈](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E8%88%AA%E5%A4%A9%E5%91%98%E9%BB%8E%E5%AE%B6%E7%9B%88%23) `51.6K 🔥` `-39%`
1. [留神峪矿工说跑了2小时才出来 (The miners from Heshenyu said they ran for 2 hours before they came out.)](https://s.weibo.com/weibo?q=%23%E7%95%99%E7%A5%9E%E5%B3%AA%E7%9F%BF%E5%B7%A5%E8%AF%B4%E8%B7%91%E4%BA%862%E5%B0%8F%E6%97%B6%E6%89%8D%E5%87%BA%E6%9D%A5%23) `51.6K 🔥` `-38%`
1. [男子回应妻子胎停后脑梗智力变3岁](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%9E%E5%BA%94%E5%A6%BB%E5%AD%90%E8%83%8E%E5%81%9C%E5%90%8E%E8%84%91%E6%A2%97%E6%99%BA%E5%8A%9B%E5%8F%983%E5%B2%81%23) `51.5K 🔥` `-38%`
1. [张国清赶赴留神峪煤矿事故现场 (Zhang Guoqing rushed to the scene of the accident in Liaoshenyu Coal Mine)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%9B%BD%E6%B8%85%E8%B5%B6%E8%B5%B4%E7%95%99%E7%A5%9E%E5%B3%AA%E7%85%A4%E7%9F%BF%E4%BA%8B%E6%95%85%E7%8E%B0%E5%9C%BA%23) `51.5K 🔥` `-36%`
1. [家业收视率](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%E6%94%B6%E8%A7%86%E7%8E%87%23) `51.5K 🔥` `-37%`
1. [李昀锐撩的不是关晓彤是丁程鑫吧 (Li Yunrui is not flirting with Guan Xiaotong but Ding Chengxin, right?)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E6%92%A9%E7%9A%84%E4%B8%8D%E6%98%AF%E5%85%B3%E6%99%93%E5%BD%A4%E6%98%AF%E4%B8%81%E7%A8%8B%E9%91%AB%E5%90%A7%23) `51.5K 🔥` `-39%`
1. [阿史那隼站起来了](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%8F%B2%E9%82%A3%E9%9A%BC%E7%AB%99%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `51.4K 🔥` `-35%`
1. [孕妻脑梗变3岁当事人3年后新变化](https://s.weibo.com/weibo?q=%23%E5%AD%95%E5%A6%BB%E8%84%91%E6%A2%97%E5%8F%983%E5%B2%81%E5%BD%93%E4%BA%8B%E4%BA%BA3%E5%B9%B4%E5%90%8E%E6%96%B0%E5%8F%98%E5%8C%96%23) `51.4K 🔥` `-36%`
1. [王源在我脸上饭撒了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E5%9C%A8%E6%88%91%E8%84%B8%E4%B8%8A%E9%A5%AD%E6%92%92%E4%BA%86%23) `51.4K 🔥` `-37%`
1. [狼队信FMVP](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E4%BF%A1FMVP%23) `51.3K 🔥` `-37%`
1. [山西煤矿事故仍有2人失联 (Two people still missing in Shanxi coal mine accident)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E7%85%A4%E7%9F%BF%E4%BA%8B%E6%95%85%E4%BB%8D%E6%9C%892%E4%BA%BA%E5%A4%B1%E8%81%94%23) `51.3K 🔥` `-34%`
1. [喻言摔了](https://s.weibo.com/weibo?q=%23%E5%96%BB%E8%A8%80%E6%91%94%E4%BA%86%23) `51.2K 🔥` `-39%`
1. [狼队夺冠 (Wolves win title)](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E5%A4%BA%E5%86%A0%23) `51.2K 🔥` `-36%`
1. [湖南石门一受灾村庄几乎没了](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E7%9F%B3%E9%97%A8%E4%B8%80%E5%8F%97%E7%81%BE%E6%9D%91%E5%BA%84%E5%87%A0%E4%B9%8E%E6%B2%A1%E4%BA%86%23) `51.2K 🔥` `-36%`
1. [山西煤矿事故发布会现场默哀 (A moment of silence was observed at the Shanxi coal mine accident press conference)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E7%85%A4%E7%9F%BF%E4%BA%8B%E6%95%85%E5%8F%91%E5%B8%83%E4%BC%9A%E7%8E%B0%E5%9C%BA%E9%BB%98%E5%93%80%23) `51.2K 🔥` `-38%`
1. [狼队首次BO9夺冠](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E9%A6%96%E6%AC%A1BO9%E5%A4%BA%E5%86%A0%23) `51.1K 🔥` `-35%`
1. [狼队金色雨](https://s.weibo.com/weibo?q=%23%E7%8B%BC%E9%98%9F%E9%87%91%E8%89%B2%E9%9B%A8%23) `51.1K 🔥` `-35%`
1. [李宇春港得好帅 (Li Yuchun is so handsome in Hong Kong)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%87%E6%98%A5%E6%B8%AF%E5%BE%97%E5%A5%BD%E5%B8%85%23) `51.1K 🔥` `-37%`
1. [周深一开嗓票价就回本了](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E4%B8%80%E5%BC%80%E5%97%93%E7%A5%A8%E4%BB%B7%E5%B0%B1%E5%9B%9E%E6%9C%AC%E4%BA%86%23) `51.0K 🔥` `-35%`
1. [就说王源的演出少看一场会出事](https://s.weibo.com/weibo?q=%23%E5%B0%B1%E8%AF%B4%E7%8E%8B%E6%BA%90%E7%9A%84%E6%BC%94%E5%87%BA%E5%B0%91%E7%9C%8B%E4%B8%80%E5%9C%BA%E4%BC%9A%E5%87%BA%E4%BA%8B%23) `51.0K 🔥` `-34%`
1. [少司缘在等一个叫信的人 (Shao Siyuan is waiting for a person named Xin)](https://s.weibo.com/weibo?q=%23%E5%B0%91%E5%8F%B8%E7%BC%98%E5%9C%A8%E7%AD%89%E4%B8%80%E4%B8%AA%E5%8F%AB%E4%BF%A1%E7%9A%84%E4%BA%BA%23) `51.0K 🔥` `-38%`
1. [重庆狼队十一冠 (Chongqing Wolves eleven championships)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E7%8B%BC%E9%98%9F%E5%8D%81%E4%B8%80%E5%86%A0%23) `50.9K 🔥` `-35%`
1. [成龙是有什么把柄在吴彤手上吗](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%BE%99%E6%98%AF%E6%9C%89%E4%BB%80%E4%B9%88%E6%8A%8A%E6%9F%84%E5%9C%A8%E5%90%B4%E5%BD%A4%E6%89%8B%E4%B8%8A%E5%90%97%23) `50.9K 🔥` `-38%`
1. [东北超](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%8C%97%E8%B6%85%23) `50.9K 🔥` `-34%`

Updated at 2026-05-24 04:35:32

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
