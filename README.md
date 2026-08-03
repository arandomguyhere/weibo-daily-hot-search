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

1. [孙颖莎回应缺席发布仪式 (Sun Yingsha responded to her absence from the launch ceremony)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%9B%9E%E5%BA%94%E7%BC%BA%E5%B8%AD%E5%8F%91%E5%B8%83%E4%BB%AA%E5%BC%8F%23) `1.0M 🔥` `NEW`
1. [21.54亿元支持防灾救灾](https://s.weibo.com/weibo?q=%2321.54%E4%BA%BF%E5%85%83%E6%94%AF%E6%8C%81%E9%98%B2%E7%81%BE%E6%95%91%E7%81%BE%23) `795.4K 🔥` `NEW`
1. [丁程鑫手流血](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E6%89%8B%E6%B5%81%E8%A1%80%23) `768.1K 🔥` `NEW`
1. [女子阻止男友吸烟起冲突将其捅死](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%98%BB%E6%AD%A2%E7%94%B7%E5%8F%8B%E5%90%B8%E7%83%9F%E8%B5%B7%E5%86%B2%E7%AA%81%E5%B0%86%E5%85%B6%E6%8D%85%E6%AD%BB%23) `674.2K 🔥` `NEW`
1. [亚运会](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `534.2K 🔥` `NEW`
1. [贺峻霖哭了](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E5%93%AD%E4%BA%86%23) `512.4K 🔥` `NEW`
1. [煮火锅突然爆炸全屋溅满红油](https://s.weibo.com/weibo?q=%23%E7%85%AE%E7%81%AB%E9%94%85%E7%AA%81%E7%84%B6%E7%88%86%E7%82%B8%E5%85%A8%E5%B1%8B%E6%BA%85%E6%BB%A1%E7%BA%A2%E6%B2%B9%23) `461.9K 🔥` `NEW`
1. [虞书欣开球](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%BC%80%E7%90%83%23) `455.7K 🔥` `NEW`
1. [恋与深空敖尹下线争议](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E6%95%96%E5%B0%B9%E4%B8%8B%E7%BA%BF%E4%BA%89%E8%AE%AE%23) `440.0K 🔥` `NEW`
1. [白鹿回复孙珍妮](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%9B%9E%E5%A4%8D%E5%AD%99%E7%8F%8D%E5%A6%AE%23) `424.7K 🔥` `NEW`
1. [律师称蔡徐坤红手套不构成抄袭 (Lawyer says Cai Xukun’s red gloves do not constitute plagiarism)](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E7%A7%B0%E8%94%A1%E5%BE%90%E5%9D%A4%E7%BA%A2%E6%89%8B%E5%A5%97%E4%B8%8D%E6%9E%84%E6%88%90%E6%8A%84%E8%A2%AD%23) `413.1K 🔥` `NEW`
1. [韦唯和王楚钦王曼昱同唱亚洲雄风](https://s.weibo.com/weibo?q=%23%E9%9F%A6%E5%94%AF%E5%92%8C%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%90%8C%E5%94%B1%E4%BA%9A%E6%B4%B2%E9%9B%84%E9%A3%8E%23) `395.1K 🔥` `NEW`
1. [三名辅警以罚代刑致醉驾司机身亡](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%90%8D%E8%BE%85%E8%AD%A6%E4%BB%A5%E7%BD%9A%E4%BB%A3%E5%88%91%E8%87%B4%E9%86%89%E9%A9%BE%E5%8F%B8%E6%9C%BA%E8%BA%AB%E4%BA%A1%23) `360.7K 🔥` `NEW`
1. [76岁男星和28岁女星演情侣](https://s.weibo.com/weibo?q=%2376%E5%B2%81%E7%94%B7%E6%98%9F%E5%92%8C28%E5%B2%81%E5%A5%B3%E6%98%9F%E6%BC%94%E6%83%85%E4%BE%A3%23) `360.6K 🔥` `NEW`
1. [科技股还在跌原因](https://s.weibo.com/weibo?q=%23%E7%A7%91%E6%8A%80%E8%82%A1%E8%BF%98%E5%9C%A8%E8%B7%8C%E5%8E%9F%E5%9B%A0%23) `360.5K 🔥` `NEW`
1. [女教师因男友吸电子烟将其捅死](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%95%99%E5%B8%88%E5%9B%A0%E7%94%B7%E5%8F%8B%E5%90%B8%E7%94%B5%E5%AD%90%E7%83%9F%E5%B0%86%E5%85%B6%E6%8D%85%E6%AD%BB%23) `360.3K 🔥` `NEW`
1. [刘耀文深V扣子崩开了](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E6%B7%B1V%E6%89%A3%E5%AD%90%E5%B4%A9%E5%BC%80%E4%BA%86%23) `360.2K 🔥` `NEW`
1. [马嘉祺才知道自己昨天裤链没拉](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E6%89%8D%E7%9F%A5%E9%81%93%E8%87%AA%E5%B7%B1%E6%98%A8%E5%A4%A9%E8%A3%A4%E9%93%BE%E6%B2%A1%E6%8B%89%23) `360.0K 🔥` `NEW`
1. [医生提醒洞洞鞋不要长期穿](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E6%8F%90%E9%86%92%E6%B4%9E%E6%B4%9E%E9%9E%8B%E4%B8%8D%E8%A6%81%E9%95%BF%E6%9C%9F%E7%A9%BF%23) `359.8K 🔥` `NEW`
1. [贺峻霖吐舌头](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E5%90%90%E8%88%8C%E5%A4%B4%23) `359.7K 🔥` `NEW`
1. [王楚钦接过火炬 (Wang Chuqin took over the torch)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%8E%A5%E8%BF%87%E7%81%AB%E7%82%AC%23) `359.5K 🔥` `NEW`
1. [歌手2026](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%23) `350.2K 🔥` `NEW`
1. [雪崩遇难10人为各国登山高手](https://s.weibo.com/weibo?q=%23%E9%9B%AA%E5%B4%A9%E9%81%87%E9%9A%BE10%E4%BA%BA%E4%B8%BA%E5%90%84%E5%9B%BD%E7%99%BB%E5%B1%B1%E9%AB%98%E6%89%8B%23) `325.3K 🔥` `NEW`
1. [刘耀文我不能做美甲吗](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E6%88%91%E4%B8%8D%E8%83%BD%E5%81%9A%E7%BE%8E%E7%94%B2%E5%90%97%23) `317.6K 🔥` `NEW`
1. [婚外胚胎案丈夫主张零财产](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E6%A1%88%E4%B8%88%E5%A4%AB%E4%B8%BB%E5%BC%A0%E9%9B%B6%E8%B4%A2%E4%BA%A7%23) `309.2K 🔥` `NEW`
1. [严浩翔好爽的表情](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E5%A5%BD%E7%88%BD%E7%9A%84%E8%A1%A8%E6%83%85%23) `309.1K 🔥` `NEW`
1. [虞书欣黑长直短裙](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E9%BB%91%E9%95%BF%E7%9B%B4%E7%9F%AD%E8%A3%99%23) `304.7K 🔥` `NEW`
1. [王曼昱王楚钦亮相中国领奖服发布仪式](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%BA%AE%E7%9B%B8%E4%B8%AD%E5%9B%BD%E9%A2%86%E5%A5%96%E6%9C%8D%E5%8F%91%E5%B8%83%E4%BB%AA%E5%BC%8F%23) `252.5K 🔥` `NEW`
1. [中国U17vs阿森纳U17](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BDU17vs%E9%98%BF%E6%A3%AE%E7%BA%B3U17%23) `225.5K 🔥` `NEW`
1. [小米公司向警方报案](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%85%AC%E5%8F%B8%E5%90%91%E8%AD%A6%E6%96%B9%E6%8A%A5%E6%A1%88%23) `218.7K 🔥` `NEW`
1. [宋亚轩金发 (Song Yaxuan's blonde hair)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E9%87%91%E5%8F%91%23) `207.2K 🔥` `NEW`
1. [樊振东金标球拍溢价](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E9%87%91%E6%A0%87%E7%90%83%E6%8B%8D%E6%BA%A2%E4%BB%B7%23) `175.5K 🔥` `NEW`
1. [亚运会中国领奖服今晚发布](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E4%B8%AD%E5%9B%BD%E9%A2%86%E5%A5%96%E6%9C%8D%E4%BB%8A%E6%99%9A%E5%8F%91%E5%B8%83%23) `174.5K 🔥` `NEW`
1. [海底捞偶遇aespa](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%BA%95%E6%8D%9E%E5%81%B6%E9%81%87aespa%23) `169.9K 🔥` `NEW`
1. [JOY朴秀荣上了12年班的状态](https://s.weibo.com/weibo?q=%23JOY%E6%9C%B4%E7%A7%80%E8%8D%A3%E4%B8%8A%E4%BA%8612%E5%B9%B4%E7%8F%AD%E7%9A%84%E7%8A%B6%E6%80%81%23) `167.6K 🔥` `NEW`
1. [直播间一句话让东方甄选赔了30万](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E6%92%AD%E9%97%B4%E4%B8%80%E5%8F%A5%E8%AF%9D%E8%AE%A9%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E8%B5%94%E4%BA%8630%E4%B8%87%23) `165.1K 🔥` `NEW`
1. [孟子义百花杀收官发文](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E7%99%BE%E8%8A%B1%E6%9D%80%E6%94%B6%E5%AE%98%E5%8F%91%E6%96%87%23) `154.8K 🔥` `NEW`
1. [药明康德最新业绩](https://s.weibo.com/weibo?q=%23%E8%8D%AF%E6%98%8E%E5%BA%B7%E5%BE%B7%E6%9C%80%E6%96%B0%E4%B8%9A%E7%BB%A9%23) `150.3K 🔥` `NEW`
1. [徐洁云支持车企直播拆车](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B4%81%E4%BA%91%E6%94%AF%E6%8C%81%E8%BD%A6%E4%BC%81%E7%9B%B4%E6%92%AD%E6%8B%86%E8%BD%A6%23) `149.9K 🔥` `NEW`
1. [DeepSeek一天消耗了8万亿 (DeepSeek consumes 8 trillion a day)](https://s.weibo.com/weibo?q=%23DeepSeek%E4%B8%80%E5%A4%A9%E6%B6%88%E8%80%97%E4%BA%868%E4%B8%87%E4%BA%BF%23) `1.9M 🔥` `+1147%`
1. [低精力可以去医院查有没有疾病](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E7%B2%BE%E5%8A%9B%E5%8F%AF%E4%BB%A5%E5%8E%BB%E5%8C%BB%E9%99%A2%E6%9F%A5%E6%9C%89%E6%B2%A1%E6%9C%89%E7%96%BE%E7%97%85%23) `756.1K 🔥` `+106%`
1. [罗正 千万存款 (Luo Zheng Ten million deposit)](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%AD%A3%20%E5%8D%83%E4%B8%87%E5%AD%98%E6%AC%BE%23) `450.6K 🔥` `+53%`
1. [偶遇胡一天在韩国坐地铁](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E8%83%A1%E4%B8%80%E5%A4%A9%E5%9C%A8%E9%9F%A9%E5%9B%BD%E5%9D%90%E5%9C%B0%E9%93%81%23) `378.7K 🔥` `+180%`
1. [功夫女足上映24天票房逆跌](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E4%B8%8A%E6%98%A024%E5%A4%A9%E7%A5%A8%E6%88%BF%E9%80%86%E8%B7%8C%23) `354.6K 🔥`
1. [日本股市](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%82%A1%E5%B8%82%23) `337.3K 🔥`
1. [章泽天比刘亦菲还像刘亦菲妈妈 (Zhang Zetian looks more like Liu Yifei’s mother than Liu Yifei)](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E6%B3%BD%E5%A4%A9%E6%AF%94%E5%88%98%E4%BA%A6%E8%8F%B2%E8%BF%98%E5%83%8F%E5%88%98%E4%BA%A6%E8%8F%B2%E5%A6%88%E5%A6%88%23) `313.6K 🔥`
1. [男乒世排前5只剩下王楚钦](https://s.weibo.com/weibo?q=%23%E7%94%B7%E4%B9%92%E4%B8%96%E6%8E%92%E5%89%8D5%E5%8F%AA%E5%89%A9%E4%B8%8B%E7%8E%8B%E6%A5%9A%E9%92%A6%23) `235.3K 🔥`
1. [我小时候全撕了一点一点撒的算什么](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%B0%8F%E6%97%B6%E5%80%99%E5%85%A8%E6%92%95%E4%BA%86%E4%B8%80%E7%82%B9%E4%B8%80%E7%82%B9%E6%92%92%E7%9A%84%E7%AE%97%E4%BB%80%E4%B9%88%23) `200.8K 🔥`
1. [AI短剧女主60秒广告报价25万8 (The AI ​​short drama heroine’s 60-second advertising quotation is 250,800)](https://s.weibo.com/weibo?q=%23AI%E7%9F%AD%E5%89%A7%E5%A5%B3%E4%B8%BB60%E7%A7%92%E5%B9%BF%E5%91%8A%E6%8A%A5%E4%BB%B725%E4%B8%878%23) `514.7K 🔥` `-65%`
1. [白鹿请客孙珍妮剧组](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%AF%B7%E5%AE%A2%E5%AD%99%E7%8F%8D%E5%A6%AE%E5%89%A7%E7%BB%84%23) `155.1K 🔥` `-30%`

Updated at 2026-08-03 22:24:17

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
