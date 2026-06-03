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

1. [赵露思自由点新品发布会 (Zhao Lusi Free Point New Product Launch Conference)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E9%9C%B2%E6%80%9D%E8%87%AA%E7%94%B1%E7%82%B9%E6%96%B0%E5%93%81%E5%8F%91%E5%B8%83%E4%BC%9A%23) `87.5K 🔥` `NEW`
1. [把京东洗衣当旅行外挂的是天才](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E4%BA%AC%E4%B8%9C%E6%B4%97%E8%A1%A3%E5%BD%93%E6%97%85%E8%A1%8C%E5%A4%96%E6%8C%82%E7%9A%84%E6%98%AF%E5%A4%A9%E6%89%8D%23) `75.9K 🔥` `NEW`
1. [女子花2万查丈夫出轨揪出辅警内鬼](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%8A%B12%E4%B8%87%E6%9F%A5%E4%B8%88%E5%A4%AB%E5%87%BA%E8%BD%A8%E6%8F%AA%E5%87%BA%E8%BE%85%E8%AD%A6%E5%86%85%E9%AC%BC%23) `457.2K 🔥` `+554%`
1. [馒头从空气炸锅留学回来了](https://s.weibo.com/weibo?q=%23%E9%A6%92%E5%A4%B4%E4%BB%8E%E7%A9%BA%E6%B0%94%E7%82%B8%E9%94%85%E7%95%99%E5%AD%A6%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `334.7K 🔥` `+606%`
1. [一组数据看我国物流越跑越稳](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%BB%84%E6%95%B0%E6%8D%AE%E7%9C%8B%E6%88%91%E5%9B%BD%E7%89%A9%E6%B5%81%E8%B6%8A%E8%B7%91%E8%B6%8A%E7%A8%B3%23) `259.1K 🔥` `+472%`
1. [都大结局了翟子路还在遗憾](https://s.weibo.com/weibo?q=%23%E9%83%BD%E5%A4%A7%E7%BB%93%E5%B1%80%E4%BA%86%E7%BF%9F%E5%AD%90%E8%B7%AF%E8%BF%98%E5%9C%A8%E9%81%97%E6%86%BE%23) `230.1K 🔥` `+579%`
1. [张宸逍夸王鹤棣 吴泽林捂耳朵](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B8%E9%80%8D%E5%A4%B8%E7%8E%8B%E9%B9%A4%E6%A3%A3%20%E5%90%B4%E6%B3%BD%E6%9E%97%E6%8D%82%E8%80%B3%E6%9C%B5%23) `104.3K 🔥` `+182%`
1. [退休夫妻离婚互揭老底牵出近亿财产](https://s.weibo.com/weibo?q=%23%E9%80%80%E4%BC%91%E5%A4%AB%E5%A6%BB%E7%A6%BB%E5%A9%9A%E4%BA%92%E6%8F%AD%E8%80%81%E5%BA%95%E7%89%B5%E5%87%BA%E8%BF%91%E4%BA%BF%E8%B4%A2%E4%BA%A7%23) `91.1K 🔥` `+112%`
1. [俄方提出停战条件](https://s.weibo.com/weibo?q=%23%E4%BF%84%E6%96%B9%E6%8F%90%E5%87%BA%E5%81%9C%E6%88%98%E6%9D%A1%E4%BB%B6%23) `73.5K 🔥` `+137%`
1. [一进入高温就会人品消失 (Your character will disappear as soon as you enter the high temperature.)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%BF%9B%E5%85%A5%E9%AB%98%E6%B8%A9%E5%B0%B1%E4%BC%9A%E4%BA%BA%E5%93%81%E6%B6%88%E5%A4%B1%23) `70.9K 🔥` `+58%`
1. [薛艳华年仅36岁 (Xue Yanhua is only 36 years old)](https://s.weibo.com/weibo?q=%23%E8%96%9B%E8%89%B3%E5%8D%8E%E5%B9%B4%E4%BB%8536%E5%B2%81%23) `65.4K 🔥` `+134%`
1. [国企干部公职人员离婚分割近亿财产 (Divorce of state-owned enterprise cadres and public officials split nearly 100 million yuan in property)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BC%81%E5%B9%B2%E9%83%A8%E5%85%AC%E8%81%8C%E4%BA%BA%E5%91%98%E7%A6%BB%E5%A9%9A%E5%88%86%E5%89%B2%E8%BF%91%E4%BA%BF%E8%B4%A2%E4%BA%A7%23) `64.8K 🔥` `+62%`
1. [日本停留现金社会的唯一好处](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%81%9C%E7%95%99%E7%8E%B0%E9%87%91%E7%A4%BE%E4%BC%9A%E7%9A%84%E5%94%AF%E4%B8%80%E5%A5%BD%E5%A4%84%23) `64.0K 🔥` `+68%`
1. [油泼面这段赵本山不让张艺谋删 (Zhao Benshan refused to let Zhang Yimou delete the scene about oily noodles)](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E6%B3%BC%E9%9D%A2%E8%BF%99%E6%AE%B5%E8%B5%B5%E6%9C%AC%E5%B1%B1%E4%B8%8D%E8%AE%A9%E5%BC%A0%E8%89%BA%E8%B0%8B%E5%88%A0%23) `63.1K 🔥` `+40%`
1. [要分清执念和执念的区别](https://s.weibo.com/weibo?q=%23%E8%A6%81%E5%88%86%E6%B8%85%E6%89%A7%E5%BF%B5%E5%92%8C%E6%89%A7%E5%BF%B5%E7%9A%84%E5%8C%BA%E5%88%AB%23) `62.2K 🔥` `+71%`
1. [主角结局 刘红兵和孩子都死了](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%E7%BB%93%E5%B1%80%20%E5%88%98%E7%BA%A2%E5%85%B5%E5%92%8C%E5%AD%A9%E5%AD%90%E9%83%BD%E6%AD%BB%E4%BA%86%23) `61.4K 🔥` `+66%`
1. [生理期结束的第一天](https://s.weibo.com/weibo?q=%23%E7%94%9F%E7%90%86%E6%9C%9F%E7%BB%93%E6%9D%9F%E7%9A%84%E7%AC%AC%E4%B8%80%E5%A4%A9%23) `60.6K 🔥` `+116%`
1. [刘浩存演技](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E6%BC%94%E6%8A%80%23) `60.3K 🔥` `+33%`
1. [家业热度](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%E7%83%AD%E5%BA%A6%23) `53.1K 🔥` `+90%`
1. [王菲不打低端局](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E4%B8%8D%E6%89%93%E4%BD%8E%E7%AB%AF%E5%B1%80%23) `52.8K 🔥` `+88%`
1. [男子11年前买29.7万元手机懊悔不已 (Man regrets buying 297,000 yuan mobile phone 11 years ago)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%9011%E5%B9%B4%E5%89%8D%E4%B9%B029.7%E4%B8%87%E5%85%83%E6%89%8B%E6%9C%BA%E6%87%8A%E6%82%94%E4%B8%8D%E5%B7%B2%23) `48.8K 🔥` `+49%`
1. [小猫每天都在宝宝的被窝里](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E6%AF%8F%E5%A4%A9%E9%83%BD%E5%9C%A8%E5%AE%9D%E5%AE%9D%E7%9A%84%E8%A2%AB%E7%AA%9D%E9%87%8C%23) `48.8K 🔥` `+59%`
1. [要学会把自己养得很好](https://s.weibo.com/weibo?q=%23%E8%A6%81%E5%AD%A6%E4%BC%9A%E6%8A%8A%E8%87%AA%E5%B7%B1%E5%85%BB%E5%BE%97%E5%BE%88%E5%A5%BD%23) `47.9K 🔥` `+71%`
1. [最信豆包的人出现了](https://s.weibo.com/weibo?q=%23%E6%9C%80%E4%BF%A1%E8%B1%86%E5%8C%85%E7%9A%84%E4%BA%BA%E5%87%BA%E7%8E%B0%E4%BA%86%23) `47.3K 🔥` `+69%`
1. [中国小姐姐卖麻糍分量太夸张 (The Chinese girl sells mochi with exaggerated portions)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%B0%8F%E5%A7%90%E5%A7%90%E5%8D%96%E9%BA%BB%E7%B3%8D%E5%88%86%E9%87%8F%E5%A4%AA%E5%A4%B8%E5%BC%A0%23) `46.4K 🔥` `+66%`
1. [丁程鑫爆料宋亚轩不爱回消息](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E7%88%86%E6%96%99%E5%AE%8B%E4%BA%9A%E8%BD%A9%E4%B8%8D%E7%88%B1%E5%9B%9E%E6%B6%88%E6%81%AF%23) `44.6K 🔥` `+45%`
1. [日本开始售卖黑白包装零食](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%BC%80%E5%A7%8B%E5%94%AE%E5%8D%96%E9%BB%91%E7%99%BD%E5%8C%85%E8%A3%85%E9%9B%B6%E9%A3%9F%23) `41.9K 🔥` `+37%`
1. [家业大结局](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%E5%A4%A7%E7%BB%93%E5%B1%80%23) `41.9K 🔥` `+50%`
1. [翘楚](https://s.weibo.com/weibo?q=%23%E7%BF%98%E6%A5%9A%23) `41.9K 🔥` `+23%`
1. [中国女排0比3捷克女排](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E6%8E%920%E6%AF%943%E6%8D%B7%E5%85%8B%E5%A5%B3%E6%8E%92%23) `41.8K 🔥` `+49%`
1. [行政楼盖章老师的各种态度](https://s.weibo.com/weibo?q=%23%E8%A1%8C%E6%94%BF%E6%A5%BC%E7%9B%96%E7%AB%A0%E8%80%81%E5%B8%88%E7%9A%84%E5%90%84%E7%A7%8D%E6%80%81%E5%BA%A6%23) `41.8K 🔥` `+49%`
1. [女儿没怀疑自己饭量怀疑妈妈没交钱](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E6%B2%A1%E6%80%80%E7%96%91%E8%87%AA%E5%B7%B1%E9%A5%AD%E9%87%8F%E6%80%80%E7%96%91%E5%A6%88%E5%A6%88%E6%B2%A1%E4%BA%A4%E9%92%B1%23) `41.8K 🔥` `+49%`
1. [跟物理不好的人解释不清](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E7%89%A9%E7%90%86%E4%B8%8D%E5%A5%BD%E7%9A%84%E4%BA%BA%E8%A7%A3%E9%87%8A%E4%B8%8D%E6%B8%85%23) `41.7K 🔥` `+49%`
1. [说唱歌手上恋综了](https://s.weibo.com/weibo?q=%23%E8%AF%B4%E5%94%B1%E6%AD%8C%E6%89%8B%E4%B8%8A%E6%81%8B%E7%BB%BC%E4%BA%86%23) `41.7K 🔥` `+49%`
1. [凯文加内特公开批评维克托文班亚马 (Kevin Garnett publicly criticizes Victor Wunbanyama)](https://s.weibo.com/weibo?q=%23%E5%87%AF%E6%96%87%E5%8A%A0%E5%86%85%E7%89%B9%E5%85%AC%E5%BC%80%E6%89%B9%E8%AF%84%E7%BB%B4%E5%85%8B%E6%89%98%E6%96%87%E7%8F%AD%E4%BA%9A%E9%A9%AC%23) `41.7K 🔥` `+49%`
1. [上海野生动物园回应老虎吃草 (Shanghai Wildlife Park responds to tiger eating grass)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E9%87%8E%E7%94%9F%E5%8A%A8%E7%89%A9%E5%9B%AD%E5%9B%9E%E5%BA%94%E8%80%81%E8%99%8E%E5%90%83%E8%8D%89%23) `41.7K 🔥` `+49%`
1. [家业广告](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%E5%B9%BF%E5%91%8A%23) `41.6K 🔥` `+49%`
1. [宋师去世](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%B8%88%E5%8E%BB%E4%B8%96%23) `41.6K 🔥` `+49%`
1. [Bin没击掌 (Bin didn't give high fives)](https://s.weibo.com/weibo?q=%23Bin%E6%B2%A1%E5%87%BB%E6%8E%8C%23) `41.6K 🔥` `+48%`
1. [不爱出门的人belike (People who don’t like to go out belike)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E7%88%B1%E5%87%BA%E9%97%A8%E7%9A%84%E4%BA%BAbelike%23) `41.5K 🔥` `+48%`
1. [委内瑞拉女警聊天时突然向女子开枪](https://s.weibo.com/weibo?q=%23%E5%A7%94%E5%86%85%E7%91%9E%E6%8B%89%E5%A5%B3%E8%AD%A6%E8%81%8A%E5%A4%A9%E6%97%B6%E7%AA%81%E7%84%B6%E5%90%91%E5%A5%B3%E5%AD%90%E5%BC%80%E6%9E%AA%23) `41.5K 🔥` `+46%`
1. [赫瓦林斯卡晋级法网4强](https://s.weibo.com/weibo?q=%23%E8%B5%AB%E7%93%A6%E6%9E%97%E6%96%AF%E5%8D%A1%E6%99%8B%E7%BA%A7%E6%B3%95%E7%BD%914%E5%BC%BA%23) `41.5K 🔥` `+48%`
1. [杭州2个月抓蛇近900起创5年新高](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E2%E4%B8%AA%E6%9C%88%E6%8A%93%E8%9B%87%E8%BF%91900%E8%B5%B7%E5%88%9B5%E5%B9%B4%E6%96%B0%E9%AB%98%23) `41.5K 🔥` `+48%`
1. [萨巴伦卡无缘法网4强](https://s.weibo.com/weibo?q=%23%E8%90%A8%E5%B7%B4%E4%BC%A6%E5%8D%A1%E6%97%A0%E7%BC%98%E6%B3%95%E7%BD%914%E5%BC%BA%23) `41.5K 🔥` `+48%`
1. [钎城民族风耳饰](https://s.weibo.com/weibo?q=%23%E9%92%8E%E5%9F%8E%E6%B0%91%E6%97%8F%E9%A3%8E%E8%80%B3%E9%A5%B0%23) `41.4K 🔥` `+48%`
1. [2026世界女排联赛](https://s.weibo.com/weibo?q=%232026%E4%B8%96%E7%95%8C%E5%A5%B3%E6%8E%92%E8%81%94%E8%B5%9B%23) `41.4K 🔥` `+48%`
1. [主角 苦难文学 (Protagonist Suffering Literature)](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%20%E8%8B%A6%E9%9A%BE%E6%96%87%E5%AD%A6%23) `41.4K 🔥` `+48%`
1. [忆秦娥在刘红兵掌心蹭眼泪 (Recalling Qin'e wiping her tears in Liu Hongbing's palm)](https://s.weibo.com/weibo?q=%23%E5%BF%86%E7%A7%A6%E5%A8%A5%E5%9C%A8%E5%88%98%E7%BA%A2%E5%85%B5%E6%8E%8C%E5%BF%83%E8%B9%AD%E7%9C%BC%E6%B3%AA%23) `41.9K 🔥`
1. [主角大结局](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%E5%A4%A7%E7%BB%93%E5%B1%80%23) `41.8K 🔥`
1. [20块的奶茶vs10块的牛奶 (20 yuan milk tea vs 10 yuan milk)](https://s.weibo.com/weibo?q=%2320%E5%9D%97%E7%9A%84%E5%A5%B6%E8%8C%B6vs10%E5%9D%97%E7%9A%84%E7%89%9B%E5%A5%B6%23) `41.6K 🔥`
1. [家业大结局he](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%E5%A4%A7%E7%BB%93%E5%B1%80he%23) `41.3K 🔥` `-43%`

Updated at 2026-06-04 06:39:17

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
