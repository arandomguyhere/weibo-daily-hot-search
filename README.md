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

1. [春运路上藏着这些马年彩蛋 (These Year of the Horse Easter Eggs are Hidden on the Spring Festival Transport Road)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%BF%90%E8%B7%AF%E4%B8%8A%E8%97%8F%E7%9D%80%E8%BF%99%E4%BA%9B%E9%A9%AC%E5%B9%B4%E5%BD%A9%E8%9B%8B%23) `596.9K 🔥` `NEW`
1. [天猫年货节最后冲刺24小时](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E7%8C%AB%E5%B9%B4%E8%B4%A7%E8%8A%82%E6%9C%80%E5%90%8E%E5%86%B2%E5%88%BA24%E5%B0%8F%E6%97%B6%23) `551.5K 🔥` `NEW`
1. [周深忘词](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E5%BF%98%E8%AF%8D%23) `546.5K 🔥` `NEW`
1. [香港女记者转型警队重案组总督察](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%A5%B3%E8%AE%B0%E8%80%85%E8%BD%AC%E5%9E%8B%E8%AD%A6%E9%98%9F%E9%87%8D%E6%A1%88%E7%BB%84%E6%80%BB%E7%9D%A3%E5%AF%9F%23) `228.5K 🔥` `NEW`
1. [女演员投资失败搬进出租屋](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%BC%94%E5%91%98%E6%8A%95%E8%B5%84%E5%A4%B1%E8%B4%A5%E6%90%AC%E8%BF%9B%E5%87%BA%E7%A7%9F%E5%B1%8B%23) `226.8K 🔥` `NEW`
1. [保姆遇到有钱雇主吓得下户](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%A7%86%E9%81%87%E5%88%B0%E6%9C%89%E9%92%B1%E9%9B%87%E4%B8%BB%E5%90%93%E5%BE%97%E4%B8%8B%E6%88%B7%23) `226.6K 🔥` `NEW`
1. [长征十号箭体落点并非失误](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%BE%81%E5%8D%81%E5%8F%B7%E7%AE%AD%E4%BD%93%E8%90%BD%E7%82%B9%E5%B9%B6%E9%9D%9E%E5%A4%B1%E8%AF%AF%23) `209.8K 🔥` `NEW`
1. [沈月晒春晚后台合照](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E6%99%92%E6%98%A5%E6%99%9A%E5%90%8E%E5%8F%B0%E5%90%88%E7%85%A7%23) `199.8K 🔥` `NEW`
1. [沈月王赫野春晚约好带ta串门](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E7%8E%8B%E8%B5%AB%E9%87%8E%E6%98%A5%E6%99%9A%E7%BA%A6%E5%A5%BD%E5%B8%A6ta%E4%B8%B2%E9%97%A8%23) `196.8K 🔥` `NEW`
1. [羽绒服定制店家订单已排到年后](https://s.weibo.com/weibo?q=%23%E7%BE%BD%E7%BB%92%E6%9C%8D%E5%AE%9A%E5%88%B6%E5%BA%97%E5%AE%B6%E8%AE%A2%E5%8D%95%E5%B7%B2%E6%8E%92%E5%88%B0%E5%B9%B4%E5%90%8E%23) `181.2K 🔥` `NEW`
1. [宋威龙抽到马上有对象的反应 (Song Weilong immediately responded to the target when he drew it)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E6%8A%BD%E5%88%B0%E9%A9%AC%E4%B8%8A%E6%9C%89%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%8F%8D%E5%BA%94%23) `162.2K 🔥` `NEW`
1. [时代少年团春晚ilikeulike舞台](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%98%A5%E6%99%9Ailikeulike%E8%88%9E%E5%8F%B0%23) `136.9K 🔥` `NEW`
1. [何炅回应嗓子哑了](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E5%9B%9E%E5%BA%94%E5%97%93%E5%AD%90%E5%93%91%E4%BA%86%23) `129.4K 🔥` `NEW`
1. [伊朗总统道歉](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E9%81%93%E6%AD%89%23) `124.5K 🔥` `NEW`
1. [郑钦文vs莱巴金娜](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87vs%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%23) `109.2K 🔥` `NEW`
1. [宋亚轩怎么那么高](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E6%80%8E%E4%B9%88%E9%82%A3%E4%B9%88%E9%AB%98%23) `107.4K 🔥` `NEW`
1. [薛之谦歌曲被抄袭部分歌词被照搬](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%AD%8C%E6%9B%B2%E8%A2%AB%E6%8A%84%E8%A2%AD%E9%83%A8%E5%88%86%E6%AD%8C%E8%AF%8D%E8%A2%AB%E7%85%A7%E6%90%AC%23) `104.1K 🔥` `NEW`
1. [赵睿道歉声明](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E7%9D%BF%E9%81%93%E6%AD%89%E5%A3%B0%E6%98%8E%23) `102.8K 🔥` `NEW`
1. [岳阳一救护车装橘子开警灯闯红灯](https://s.weibo.com/weibo?q=%23%E5%B2%B3%E9%98%B3%E4%B8%80%E6%95%91%E6%8A%A4%E8%BD%A6%E8%A3%85%E6%A9%98%E5%AD%90%E5%BC%80%E8%AD%A6%E7%81%AF%E9%97%AF%E7%BA%A2%E7%81%AF%23) `93.0K 🔥` `NEW`
1. [生命树](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%23) `89.3K 🔥` `NEW`
1. [女教师聊八卦被拘口头传播者没被罚 (Female teacher was detained for gossiping and those who spread the gossip were not punished)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%95%99%E5%B8%88%E8%81%8A%E5%85%AB%E5%8D%A6%E8%A2%AB%E6%8B%98%E5%8F%A3%E5%A4%B4%E4%BC%A0%E6%92%AD%E8%80%85%E6%B2%A1%E8%A2%AB%E7%BD%9A%23) `84.9K 🔥` `NEW`
1. [警方回应2岁男童在家失踪超140天](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E5%9B%9E%E5%BA%942%E5%B2%81%E7%94%B7%E7%AB%A5%E5%9C%A8%E5%AE%B6%E5%A4%B1%E8%B8%AA%E8%B6%85140%E5%A4%A9%23) `84.5K 🔥` `NEW`
1. [网球](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%90%83%23) `77.5K 🔥` `NEW`
1. [宋威龙赵今麦惊天动地的一秒](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E8%B5%B5%E4%BB%8A%E9%BA%A6%E6%83%8A%E5%A4%A9%E5%8A%A8%E5%9C%B0%E7%9A%84%E4%B8%80%E7%A7%92%23) `225.8K 🔥` `+24%`
1. [内娱CP粉众生相](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1CP%E7%B2%89%E4%BC%97%E7%94%9F%E7%9B%B8%23) `225.2K 🔥` `+117%`
1. [湖南卫视春晚 (Hunan Satellite TV Spring Festival Gala)](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E6%98%A5%E6%99%9A%23) `1.1M 🔥`
1. [KK园区2.0内部照首曝光](https://s.weibo.com/weibo?q=%23KK%E5%9B%AD%E5%8C%BA2.0%E5%86%85%E9%83%A8%E7%85%A7%E9%A6%96%E6%9B%9D%E5%85%89%23) `739.9K 🔥`
1. [新加坡女子误以为中大奖](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8A%A0%E5%9D%A1%E5%A5%B3%E5%AD%90%E8%AF%AF%E4%BB%A5%E4%B8%BA%E4%B8%AD%E5%A4%A7%E5%A5%96%23) `497.4K 🔥`
1. [长尾猫林允松弛新主张 (Long-tailed cat Lin Yun relaxes new ideas)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%B0%BE%E7%8C%AB%E6%9E%97%E5%85%81%E6%9D%BE%E5%BC%9B%E6%96%B0%E4%B8%BB%E5%BC%A0%23) `255.4K 🔥`
1. [以前的宠妃美貌都是这种级别](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%89%8D%E7%9A%84%E5%AE%A0%E5%A6%83%E7%BE%8E%E8%B2%8C%E9%83%BD%E6%98%AF%E8%BF%99%E7%A7%8D%E7%BA%A7%E5%88%AB%23) `229.5K 🔥`
1. [李一桐 假唱](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%20%E5%81%87%E5%94%B1%23) `227.8K 🔥`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `227.3K 🔥`
1. [查理苏 (Charlie Sue)](https://s.weibo.com/weibo?q=%23%E6%9F%A5%E7%90%86%E8%8B%8F%23) `225.5K 🔥`
1. [月薪2000的环卫工困在电子镣铐](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA2000%E7%9A%84%E7%8E%AF%E5%8D%AB%E5%B7%A5%E5%9B%B0%E5%9C%A8%E7%94%B5%E5%AD%90%E9%95%A3%E9%93%90%23) `200.5K 🔥`
1. [女护士与已婚男吃饭被灌醉拍私密照](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%8A%A4%E5%A3%AB%E4%B8%8E%E5%B7%B2%E5%A9%9A%E7%94%B7%E5%90%83%E9%A5%AD%E8%A2%AB%E7%81%8C%E9%86%89%E6%8B%8D%E7%A7%81%E5%AF%86%E7%85%A7%23) `184.8K 🔥`
1. [郭麒麟 爸爸还是您不争气啊](https://s.weibo.com/weibo?q=%23%E9%83%AD%E9%BA%92%E9%BA%9F%20%E7%88%B8%E7%88%B8%E8%BF%98%E6%98%AF%E6%82%A8%E4%B8%8D%E4%BA%89%E6%B0%94%E5%95%8A%23) `170.9K 🔥`
1. [全国房价止跌信号出现 (Signal for national house prices to stop falling appears)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E6%88%BF%E4%BB%B7%E6%AD%A2%E8%B7%8C%E4%BF%A1%E5%8F%B7%E5%87%BA%E7%8E%B0%23) `164.3K 🔥`
1. [陈哲远李一桐用一个麦](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E6%9D%8E%E4%B8%80%E6%A1%90%E7%94%A8%E4%B8%80%E4%B8%AA%E9%BA%A6%23) `276.6K 🔥` `-32%`
1. [米兰冬奥首位三金王诞生](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E9%A6%96%E4%BD%8D%E4%B8%89%E9%87%91%E7%8E%8B%E8%AF%9E%E7%94%9F%23) `229.4K 🔥` `-31%`
1. [刘佳宇现场救治近10分钟](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BD%B3%E5%AE%87%E7%8E%B0%E5%9C%BA%E6%95%91%E6%B2%BB%E8%BF%9110%E5%88%86%E9%92%9F%23) `228.7K 🔥` `-27%`
1. [何以琛今年50多岁了](https://s.weibo.com/weibo?q=%23%E4%BD%95%E4%BB%A5%E7%90%9B%E4%BB%8A%E5%B9%B450%E5%A4%9A%E5%B2%81%E4%BA%86%23) `151.4K 🔥` `-23%`
1. [英王室地产发现疑似涉爱泼斯坦案尸体](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E7%8E%8B%E5%AE%A4%E5%9C%B0%E4%BA%A7%E5%8F%91%E7%8E%B0%E7%96%91%E4%BC%BC%E6%B6%89%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%A1%88%E5%B0%B8%E4%BD%93%23) `137.1K 🔥` `-26%`
1. [刘亦菲陈瑶 双虞姬](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E9%99%88%E7%91%B6%20%E5%8F%8C%E8%99%9E%E5%A7%AC%23) `117.9K 🔥` `-41%`
1. [张函瑞跳自己的进行曲 (Zhang Hanrui dances his own march)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%BD%E7%91%9E%E8%B7%B3%E8%87%AA%E5%B7%B1%E7%9A%84%E8%BF%9B%E8%A1%8C%E6%9B%B2%23) `115.6K 🔥` `-38%`
1. [成何体统 (In what manner)](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `102.1K 🔥` `-21%`
1. [时代少年团有自己的食物链](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%9C%89%E8%87%AA%E5%B7%B1%E7%9A%84%E9%A3%9F%E7%89%A9%E9%93%BE%23) `93.4K 🔥` `-23%`
1. [爱泼斯坦羞辱性展示女孩视频曝光 (Video of Epstein humiliatingly showing girls exposed)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E7%BE%9E%E8%BE%B1%E6%80%A7%E5%B1%95%E7%A4%BA%E5%A5%B3%E5%AD%A9%E8%A7%86%E9%A2%91%E6%9B%9D%E5%85%89%23) `87.0K 🔥` `-52%`
1. [余茵曾多次与白鹿撞衫 (Yu Yin has clashed with Bai Lu many times)](https://s.weibo.com/weibo?q=%23%E4%BD%99%E8%8C%B5%E6%9B%BE%E5%A4%9A%E6%AC%A1%E4%B8%8E%E7%99%BD%E9%B9%BF%E6%92%9E%E8%A1%AB%23) `85.5K 🔥` `-31%`
1. [权志龙Chanel](https://s.weibo.com/weibo?q=%23%E6%9D%83%E5%BF%97%E9%BE%99Chanel%23) `83.2K 🔥` `-53%`
1. [保罗在美国被禁言](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E7%BD%97%E5%9C%A8%E7%BE%8E%E5%9B%BD%E8%A2%AB%E7%A6%81%E8%A8%80%23) `81.0K 🔥` `-43%`
1. [青海一家35口人开大巴春节自驾游](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%B5%B7%E4%B8%80%E5%AE%B635%E5%8F%A3%E4%BA%BA%E5%BC%80%E5%A4%A7%E5%B7%B4%E6%98%A5%E8%8A%82%E8%87%AA%E9%A9%BE%E6%B8%B8%23) `78.5K 🔥` `-50%`

Updated at 2026-02-11 23:43:19

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
