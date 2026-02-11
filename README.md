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

1. [一首歌唱出中国航天蓬勃发展 (A song sings the booming development of China’s aerospace industry)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E9%A6%96%E6%AD%8C%E5%94%B1%E5%87%BA%E4%B8%AD%E5%9B%BD%E8%88%AA%E5%A4%A9%E8%93%AC%E5%8B%83%E5%8F%91%E5%B1%95%23) `619.3K 🔥` `NEW`
1. [新加坡女子误以为中大奖](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8A%A0%E5%9D%A1%E5%A5%B3%E5%AD%90%E8%AF%AF%E4%BB%A5%E4%B8%BA%E4%B8%AD%E5%A4%A7%E5%A5%96%23) `456.3K 🔥` `NEW`
1. [陈哲远李一桐用一个麦](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E6%9D%8E%E4%B8%80%E6%A1%90%E7%94%A8%E4%B8%80%E4%B8%AA%E9%BA%A6%23) `403.9K 🔥` `NEW`
1. [米兰冬奥首位三金王诞生](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E9%A6%96%E4%BD%8D%E4%B8%89%E9%87%91%E7%8E%8B%E8%AF%9E%E7%94%9F%23) `334.3K 🔥` `NEW`
1. [湖南卫视春晚这么多人来了](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E6%98%A5%E6%99%9A%E8%BF%99%E4%B9%88%E5%A4%9A%E4%BA%BA%E6%9D%A5%E4%BA%86%23) `330.6K 🔥` `NEW`
1. [刘佳宇现场救治近10分钟](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BD%B3%E5%AE%87%E7%8E%B0%E5%9C%BA%E6%95%91%E6%B2%BB%E8%BF%9110%E5%88%86%E9%92%9F%23) `314.7K 🔥` `NEW`
1. [以前的宠妃美貌都是这种级别](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%89%8D%E7%9A%84%E5%AE%A0%E5%A6%83%E7%BE%8E%E8%B2%8C%E9%83%BD%E6%98%AF%E8%BF%99%E7%A7%8D%E7%BA%A7%E5%88%AB%23) `203.6K 🔥` `NEW`
1. [李一桐 假唱](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%20%E5%81%87%E5%94%B1%23) `203.0K 🔥` `NEW`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `197.2K 🔥` `NEW`
1. [何以琛今年50多岁了](https://s.weibo.com/weibo?q=%23%E4%BD%95%E4%BB%A5%E7%90%9B%E4%BB%8A%E5%B9%B450%E5%A4%9A%E5%B2%81%E4%BA%86%23) `196.3K 🔥` `NEW`
1. [好多明星发神马卡啊啊啊 (There are so many celebrities showing off their magic cards)](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A4%9A%E6%98%8E%E6%98%9F%E5%8F%91%E7%A5%9E%E9%A9%AC%E5%8D%A1%E5%95%8A%E5%95%8A%E5%95%8A%23) `193.7K 🔥` `NEW`
1. [查理苏](https://s.weibo.com/weibo?q=%23%E6%9F%A5%E7%90%86%E8%8B%8F%23) `191.2K 🔥` `NEW`
1. [张函瑞跳自己的进行曲](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%BD%E7%91%9E%E8%B7%B3%E8%87%AA%E5%B7%B1%E7%9A%84%E8%BF%9B%E8%A1%8C%E6%9B%B2%23) `187.9K 🔥` `NEW`
1. [宋威龙赵今麦惊天动地的一秒](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E8%B5%B5%E4%BB%8A%E9%BA%A6%E6%83%8A%E5%A4%A9%E5%8A%A8%E5%9C%B0%E7%9A%84%E4%B8%80%E7%A7%92%23) `182.8K 🔥` `NEW`
1. [武侠小说的瘴气竟真实存在](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E4%BE%A0%E5%B0%8F%E8%AF%B4%E7%9A%84%E7%98%B4%E6%B0%94%E7%AB%9F%E7%9C%9F%E5%AE%9E%E5%AD%98%E5%9C%A8%23) `129.6K 🔥` `NEW`
1. [时代少年团有自己的食物链](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%9C%89%E8%87%AA%E5%B7%B1%E7%9A%84%E9%A3%9F%E7%89%A9%E9%93%BE%23) `120.6K 🔥` `NEW`
1. [张拿铁两国交战全靠使者](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%8B%BF%E9%93%81%E4%B8%A4%E5%9B%BD%E4%BA%A4%E6%88%98%E5%85%A8%E9%9D%A0%E4%BD%BF%E8%80%85%23) `103.8K 🔥` `NEW`
1. [女骑手春节纠结回家还是挣1万补贴](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E9%AA%91%E6%89%8B%E6%98%A5%E8%8A%82%E7%BA%A0%E7%BB%93%E5%9B%9E%E5%AE%B6%E8%BF%98%E6%98%AF%E6%8C%A31%E4%B8%87%E8%A1%A5%E8%B4%B4%23) `103.8K 🔥` `NEW`
1. [内娱CP粉众生相](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1CP%E7%B2%89%E4%BC%97%E7%94%9F%E7%9B%B8%23) `103.8K 🔥` `NEW`
1. [夫妻回家过年带一锅饭上高速](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E5%9B%9E%E5%AE%B6%E8%BF%87%E5%B9%B4%E5%B8%A6%E4%B8%80%E9%94%85%E9%A5%AD%E4%B8%8A%E9%AB%98%E9%80%9F%23) `103.7K 🔥` `NEW`
1. [小孩哥减肥按点赞量跳绳获180万赞 (Kid brother lost weight and jumped rope and received 1.8 million likes based on the number of likes)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A9%E5%93%A5%E5%87%8F%E8%82%A5%E6%8C%89%E7%82%B9%E8%B5%9E%E9%87%8F%E8%B7%B3%E7%BB%B3%E8%8E%B7180%E4%B8%87%E8%B5%9E%23) `103.7K 🔥` `NEW`
1. [Seedance爆火后可灵3.0出圈](https://s.weibo.com/weibo?q=%23Seedance%E7%88%86%E7%81%AB%E5%90%8E%E5%8F%AF%E7%81%B53.0%E5%87%BA%E5%9C%88%23) `97.4K 🔥` `NEW`
1. [DYG战胜情久](https://s.weibo.com/weibo?q=%23DYG%E6%88%98%E8%83%9C%E6%83%85%E4%B9%85%23) `93.1K 🔥` `NEW`
1. [享界样过马年](https://s.weibo.com/weibo?q=%23%E4%BA%AB%E7%95%8C%E6%A0%B7%E8%BF%87%E9%A9%AC%E5%B9%B4%23) `480.7K 🔥` `+31%`
1. [刘亦菲陈瑶 双虞姬](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E9%99%88%E7%91%B6%20%E5%8F%8C%E8%99%9E%E5%A7%AC%23) `200.3K 🔥` `+58%`
1. [英王室地产发现疑似涉爱泼斯坦案尸体](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E7%8E%8B%E5%AE%A4%E5%9C%B0%E4%BA%A7%E5%8F%91%E7%8E%B0%E7%96%91%E4%BC%BC%E6%B6%89%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%A1%88%E5%B0%B8%E4%BD%93%23) `186.4K 🔥` `+27%`
1. [月薪2000的环卫工困在电子镣铐](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA2000%E7%9A%84%E7%8E%AF%E5%8D%AB%E5%B7%A5%E5%9B%B0%E5%9C%A8%E7%94%B5%E5%AD%90%E9%95%A3%E9%93%90%23) `184.4K 🔥` `+26%`
1. [女护士与已婚男吃饭被灌醉拍私密照](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%8A%A4%E5%A3%AB%E4%B8%8E%E5%B7%B2%E5%A9%9A%E7%94%B7%E5%90%83%E9%A5%AD%E8%A2%AB%E7%81%8C%E9%86%89%E6%8B%8D%E7%A7%81%E5%AF%86%E7%85%A7%23) `180.0K 🔥` `+26%`
1. [爱泼斯坦羞辱性展示女孩视频曝光 (Video of Epstein humiliatingly showing girls exposed)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E7%BE%9E%E8%BE%B1%E6%80%A7%E5%B1%95%E7%A4%BA%E5%A5%B3%E5%AD%A9%E8%A7%86%E9%A2%91%E6%9B%9D%E5%85%89%23) `179.6K 🔥` `+24%`
1. [权志龙Chanel](https://s.weibo.com/weibo?q=%23%E6%9D%83%E5%BF%97%E9%BE%99Chanel%23) `177.8K 🔥` `+22%`
1. [赵睿停赛三场罚款5万](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E7%9D%BF%E5%81%9C%E8%B5%9B%E4%B8%89%E5%9C%BA%E7%BD%9A%E6%AC%BE5%E4%B8%87%23) `143.4K 🔥` `+30%`
1. [沈月双马尾机械姬 (Shen Yue's double ponytail Ex Machina)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E5%8F%8C%E9%A9%AC%E5%B0%BE%E6%9C%BA%E6%A2%B0%E5%A7%AC%23) `102.8K 🔥` `+23%`
1. [湖南卫视春晚 (Hunan Satellite TV Spring Festival Gala)](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E6%98%A5%E6%99%9A%23) `1.1M 🔥`
1. [KK园区2.0内部照首曝光](https://s.weibo.com/weibo?q=%23KK%E5%9B%AD%E5%8C%BA2.0%E5%86%85%E9%83%A8%E7%85%A7%E9%A6%96%E6%9B%9D%E5%85%89%23) `793.1K 🔥`
1. [何老师嗓子哑了](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%80%81%E5%B8%88%E5%97%93%E5%AD%90%E5%93%91%E4%BA%86%23) `242.7K 🔥`
1. [全国房价止跌信号出现 (Signal for national house prices to stop falling appears)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E6%88%BF%E4%BB%B7%E6%AD%A2%E8%B7%8C%E4%BF%A1%E5%8F%B7%E5%87%BA%E7%8E%B0%23) `203.7K 🔥`
1. [生命树下篇狂飙上了](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E4%B8%8B%E7%AF%87%E7%8B%82%E9%A3%99%E4%B8%8A%E4%BA%86%23) `161.8K 🔥`
1. [保罗在美国被禁言](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E7%BD%97%E5%9C%A8%E7%BE%8E%E5%9B%BD%E8%A2%AB%E7%A6%81%E8%A8%80%23) `141.4K 🔥`
1. [刘佳宇摔倒](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BD%B3%E5%AE%87%E6%91%94%E5%80%92%23) `130.4K 🔥`
1. [陈楚生 卡拉永远OK (Chen Chusheng Karaoke is always OK)](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%A5%9A%E7%94%9F%20%E5%8D%A1%E6%8B%89%E6%B0%B8%E8%BF%9COK%23) `129.2K 🔥`
1. [成何体统 (In what manner)](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `128.5K 🔥`
1. [听闻姐姐分家产儿子打了母亲两巴掌](https://s.weibo.com/weibo?q=%23%E5%90%AC%E9%97%BB%E5%A7%90%E5%A7%90%E5%88%86%E5%AE%B6%E4%BA%A7%E5%84%BF%E5%AD%90%E6%89%93%E4%BA%86%E6%AF%8D%E4%BA%B2%E4%B8%A4%E5%B7%B4%E6%8E%8C%23) `123.6K 🔥`
1. [余茵曾多次与白鹿撞衫 (Yu Yin has clashed with Bai Lu many times)](https://s.weibo.com/weibo?q=%23%E4%BD%99%E8%8C%B5%E6%9B%BE%E5%A4%9A%E6%AC%A1%E4%B8%8E%E7%99%BD%E9%B9%BF%E6%92%9E%E8%A1%AB%23) `123.1K 🔥`
1. [喜欢侧睡的受害者出现了](https://s.weibo.com/weibo?q=%23%E5%96%9C%E6%AC%A2%E4%BE%A7%E7%9D%A1%E7%9A%84%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86%23) `100.1K 🔥`
1. [郭麒麟 爸爸还是您不争气啊](https://s.weibo.com/weibo?q=%23%E9%83%AD%E9%BA%92%E9%BA%9F%20%E7%88%B8%E7%88%B8%E8%BF%98%E6%98%AF%E6%82%A8%E4%B8%8D%E4%BA%89%E6%B0%94%E5%95%8A%23) `180.7K 🔥` `-72%`
1. [青海一家35口人开大巴春节自驾游](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%B5%B7%E4%B8%80%E5%AE%B635%E5%8F%A3%E4%BA%BA%E5%BC%80%E5%A4%A7%E5%B7%B4%E6%98%A5%E8%8A%82%E8%87%AA%E9%A9%BE%E6%B8%B8%23) `157.7K 🔥` `-22%`
1. [于东来账号已改名傻坏蛋 (Yu Donglai’s account has been renamed Silly Bad Guy)](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E4%B8%9C%E6%9D%A5%E8%B4%A6%E5%8F%B7%E5%B7%B2%E6%94%B9%E5%90%8D%E5%82%BB%E5%9D%8F%E8%9B%8B%23) `103.8K 🔥` `-48%`
1. [2026新春走基层 (2026 New Year Goes to the Grassroots)](https://s.weibo.com/weibo?q=%232026%E6%96%B0%E6%98%A5%E8%B5%B0%E5%9F%BA%E5%B1%82%23) `103.7K 🔥` `-84%`
1. [J人已经买好27年的过年机票](https://s.weibo.com/weibo?q=%23J%E4%BA%BA%E5%B7%B2%E7%BB%8F%E4%B9%B0%E5%A5%BD27%E5%B9%B4%E7%9A%84%E8%BF%87%E5%B9%B4%E6%9C%BA%E7%A5%A8%23) `102.4K 🔥` `-30%`
1. [日本法律只罚卖淫卖方不罚买方](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%B3%95%E5%BE%8B%E5%8F%AA%E7%BD%9A%E5%8D%96%E6%B7%AB%E5%8D%96%E6%96%B9%E4%B8%8D%E7%BD%9A%E4%B9%B0%E6%96%B9%23) `97.3K 🔥` `-42%`
1. [9岁抗癌女孩去世前整夜呼喊妈妈](https://s.weibo.com/weibo?q=%239%E5%B2%81%E6%8A%97%E7%99%8C%E5%A5%B3%E5%AD%A9%E5%8E%BB%E4%B8%96%E5%89%8D%E6%95%B4%E5%A4%9C%E5%91%BC%E5%96%8A%E5%A6%88%E5%A6%88%23) `92.9K 🔥` `-35%`

Updated at 2026-02-11 22:44:19

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
