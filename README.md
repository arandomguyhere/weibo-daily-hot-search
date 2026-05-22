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

1. [暴雨为啥来得这么猛 (Why is the rainstorm coming so hard?)](https://s.weibo.com/weibo?q=%23%E6%9A%B4%E9%9B%A8%E4%B8%BA%E5%95%A5%E6%9D%A5%E5%BE%97%E8%BF%99%E4%B9%88%E7%8C%9B%23) `744.3K 🔥` `NEW`
1. [晚上一定要拉窗帘](https://s.weibo.com/weibo?q=%23%E6%99%9A%E4%B8%8A%E4%B8%80%E5%AE%9A%E8%A6%81%E6%8B%89%E7%AA%97%E5%B8%98%23) `739.7K 🔥` `NEW`
1. [曾沛慈 全部看浪姐不准看歌手](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%20%E5%85%A8%E9%83%A8%E7%9C%8B%E6%B5%AA%E5%A7%90%E4%B8%8D%E5%87%86%E7%9C%8B%E6%AD%8C%E6%89%8B%23) `732.7K 🔥` `NEW`
1. [水果含糖量金字塔](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E6%9E%9C%E5%90%AB%E7%B3%96%E9%87%8F%E9%87%91%E5%AD%97%E5%A1%94%23) `724.2K 🔥` `NEW`
1. [欧阳娜娜真在纽约给我打电话了](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%E7%9C%9F%E5%9C%A8%E7%BA%BD%E7%BA%A6%E7%BB%99%E6%88%91%E6%89%93%E7%94%B5%E8%AF%9D%E4%BA%86%23) `604.0K 🔥` `NEW`
1. [伊能静自曝48岁生女肚子被打开2次](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E8%87%AA%E6%9B%9D48%E5%B2%81%E7%94%9F%E5%A5%B3%E8%82%9A%E5%AD%90%E8%A2%AB%E6%89%93%E5%BC%802%E6%AC%A1%23) `310.7K 🔥` `NEW`
1. [伦敦世乒赛团体赛](https://s.weibo.com/weibo?q=%23%E4%BC%A6%E6%95%A6%E4%B8%96%E4%B9%92%E8%B5%9B%E5%9B%A2%E4%BD%93%E8%B5%9B%23) `310.3K 🔥` `NEW`
1. [女子没来过月经却生了三个孩子](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%B2%A1%E6%9D%A5%E8%BF%87%E6%9C%88%E7%BB%8F%E5%8D%B4%E7%94%9F%E4%BA%86%E4%B8%89%E4%B8%AA%E5%AD%A9%E5%AD%90%23) `309.5K 🔥` `NEW`
1. [景甜变装](https://s.weibo.com/weibo?q=%23%E6%99%AF%E7%94%9C%E5%8F%98%E8%A3%85%23) `308.5K 🔥` `NEW`
1. [孙千这个腿长](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E8%BF%99%E4%B8%AA%E8%85%BF%E9%95%BF%23) `307.2K 🔥` `NEW`
1. [除了日本七国集团高层接连访华 (In addition to Japan’s successive visits to China by senior leaders of the Group of Seven)](https://s.weibo.com/weibo?q=%23%E9%99%A4%E4%BA%86%E6%97%A5%E6%9C%AC%E4%B8%83%E5%9B%BD%E9%9B%86%E5%9B%A2%E9%AB%98%E5%B1%82%E6%8E%A5%E8%BF%9E%E8%AE%BF%E5%8D%8E%23) `306.4K 🔥` `NEW`
1. [赵丽颖林子烨演母子](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E6%9E%97%E5%AD%90%E7%83%A8%E6%BC%94%E6%AF%8D%E5%AD%90%23) `305.4K 🔥` `NEW`
1. [张豆豆曾反复跟孙杨确认是否真的结婚](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%B1%86%E8%B1%86%E6%9B%BE%E5%8F%8D%E5%A4%8D%E8%B7%9F%E5%AD%99%E6%9D%A8%E7%A1%AE%E8%AE%A4%E6%98%AF%E5%90%A6%E7%9C%9F%E7%9A%84%E7%BB%93%E5%A9%9A%23) `304.7K 🔥` `NEW`
1. [原来驼背会让脸变大](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E9%A9%BC%E8%83%8C%E4%BC%9A%E8%AE%A9%E8%84%B8%E5%8F%98%E5%A4%A7%23) `302.3K 🔥` `NEW`
1. [有韩国媒体道歉了](https://s.weibo.com/weibo?q=%23%E6%9C%89%E9%9F%A9%E5%9B%BD%E5%AA%92%E4%BD%93%E9%81%93%E6%AD%89%E4%BA%86%23) `299.3K 🔥` `NEW`
1. [不小心把DeepSeek叫成豆包](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%B0%8F%E5%BF%83%E6%8A%8ADeepSeek%E5%8F%AB%E6%88%90%E8%B1%86%E5%8C%85%23) `295.7K 🔥` `NEW`
1. [地铁吐血女孩打工挣6000元捐助石门](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E9%93%81%E5%90%90%E8%A1%80%E5%A5%B3%E5%AD%A9%E6%89%93%E5%B7%A5%E6%8C%A36000%E5%85%83%E6%8D%90%E5%8A%A9%E7%9F%B3%E9%97%A8%23) `293.0K 🔥` `NEW`
1. [小猫突然把小狗脑袋扶正](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E7%AA%81%E7%84%B6%E6%8A%8A%E5%B0%8F%E7%8B%97%E8%84%91%E8%A2%8B%E6%89%B6%E6%AD%A3%23) `291.6K 🔥` `NEW`
1. [易长痘体质](https://s.weibo.com/weibo?q=%23%E6%98%93%E9%95%BF%E7%97%98%E4%BD%93%E8%B4%A8%23) `283.5K 🔥` `NEW`
1. [马嘉祺录综艺还在论文查重](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E5%BD%95%E7%BB%BC%E8%89%BA%E8%BF%98%E5%9C%A8%E8%AE%BA%E6%96%87%E6%9F%A5%E9%87%8D%23) `212.7K 🔥` `NEW`
1. [谢娜栀子花大战菠萝蜜是真的 (Xie Na gardenia vs. jackfruit is real)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%A0%80%E5%AD%90%E8%8A%B1%E5%A4%A7%E6%88%98%E8%8F%A0%E8%90%9D%E8%9C%9C%E6%98%AF%E7%9C%9F%E7%9A%84%23) `207.9K 🔥` `NEW`
1. [特朗普说去不去儿子婚礼都会被骂](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E5%8E%BB%E4%B8%8D%E5%8E%BB%E5%84%BF%E5%AD%90%E5%A9%9A%E7%A4%BC%E9%83%BD%E4%BC%9A%E8%A2%AB%E9%AA%82%23) `207.1K 🔥` `NEW`
1. [孙颖莎王楚钦世乒赛全胜海报](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%B8%96%E4%B9%92%E8%B5%9B%E5%85%A8%E8%83%9C%E6%B5%B7%E6%8A%A5%23) `196.9K 🔥` `NEW`
1. [刘耀文宋亚轩完全暴露](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%AE%8C%E5%85%A8%E6%9A%B4%E9%9C%B2%23) `189.0K 🔥` `NEW`
1. [身上有这种小红点是疾病信号](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%B8%8A%E6%9C%89%E8%BF%99%E7%A7%8D%E5%B0%8F%E7%BA%A2%E7%82%B9%E6%98%AF%E7%96%BE%E7%97%85%E4%BF%A1%E5%8F%B7%23) `177.4K 🔥` `NEW`
1. [护士忘给化疗药女子各项指标异常](https://s.weibo.com/weibo?q=%23%E6%8A%A4%E5%A3%AB%E5%BF%98%E7%BB%99%E5%8C%96%E7%96%97%E8%8D%AF%E5%A5%B3%E5%AD%90%E5%90%84%E9%A1%B9%E6%8C%87%E6%A0%87%E5%BC%82%E5%B8%B8%23) `174.3K 🔥` `NEW`
1. [刘浩存胶原满满撑起主角脸](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E8%83%B6%E5%8E%9F%E6%BB%A1%E6%BB%A1%E6%92%91%E8%B5%B7%E4%B8%BB%E8%A7%92%E8%84%B8%23) `169.2K 🔥` `NEW`
1. [宋威龙直播](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E7%9B%B4%E6%92%AD%23) `164.9K 🔥` `NEW`
1. [极简生活一年的真实感受](https://s.weibo.com/weibo?q=%23%E6%9E%81%E7%AE%80%E7%94%9F%E6%B4%BB%E4%B8%80%E5%B9%B4%E7%9A%84%E7%9C%9F%E5%AE%9E%E6%84%9F%E5%8F%97%23) `164.6K 🔥` `NEW`
1. [田曦薇gucci第二套](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87gucci%E7%AC%AC%E4%BA%8C%E5%A5%97%23) `164.5K 🔥` `NEW`
1. [何与西藏骑行 与少遇到宇少 (He rides with Tibet and Yu Shao meets Yu Shao)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E4%B8%8E%E8%A5%BF%E8%97%8F%E9%AA%91%E8%A1%8C%20%E4%B8%8E%E5%B0%91%E9%81%87%E5%88%B0%E5%AE%87%E5%B0%91%23) `151.1K 🔥` `NEW`
1. [九尾见面会](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%E8%A7%81%E9%9D%A2%E4%BC%9A%23) `143.0K 🔥` `NEW`
1. [魏坤琳老了](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%9D%A4%E7%90%B3%E8%80%81%E4%BA%86%23) `139.5K 🔥` `NEW`
1. [男子深夜把孩子拖拽出门](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%B7%B1%E5%A4%9C%E6%8A%8A%E5%AD%A9%E5%AD%90%E6%8B%96%E6%8B%BD%E5%87%BA%E9%97%A8%23) `138.1K 🔥` `NEW`
1. [猫猫觉得这是人类尾巴](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E7%8C%AB%E8%A7%89%E5%BE%97%E8%BF%99%E6%98%AF%E4%BA%BA%E7%B1%BB%E5%B0%BE%E5%B7%B4%23) `131.7K 🔥` `NEW`
1. [美国暂停一项对台军售案](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%9A%82%E5%81%9C%E4%B8%80%E9%A1%B9%E5%AF%B9%E5%8F%B0%E5%86%9B%E5%94%AE%E6%A1%88%23) `130.9K 🔥` `NEW`
1. [深圳开公司十年房租交了一千万](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%BC%80%E5%85%AC%E5%8F%B8%E5%8D%81%E5%B9%B4%E6%88%BF%E7%A7%9F%E4%BA%A4%E4%BA%86%E4%B8%80%E5%8D%83%E4%B8%87%23) `129.9K 🔥` `NEW`
1. [歌手浪姐联动](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%B5%AA%E5%A7%90%E8%81%94%E5%8A%A8%23) `117.4K 🔥` `NEW`
1. [警方通报女子被陌生男子从背后踢倒](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%90%E8%A2%AB%E9%99%8C%E7%94%9F%E7%94%B7%E5%AD%90%E4%BB%8E%E8%83%8C%E5%90%8E%E8%B8%A2%E5%80%92%23) `117.0K 🔥` `NEW`
1. [张柏芝好考验骨相的造型](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D%E5%A5%BD%E8%80%83%E9%AA%8C%E9%AA%A8%E7%9B%B8%E7%9A%84%E9%80%A0%E5%9E%8B%23) `116.7K 🔥` `NEW`
1. [朱自清散文AI率超60% (The AI ​​rate of Zhu Ziqing’s prose exceeds 60%)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E8%87%AA%E6%B8%85%E6%95%A3%E6%96%87AI%E7%8E%87%E8%B6%8560%25%23) `315.5K 🔥` `+73%`
1. [韩国服饰品牌抄袭汉服](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%9C%8D%E9%A5%B0%E5%93%81%E7%89%8C%E6%8A%84%E8%A2%AD%E6%B1%89%E6%9C%8D%23) `212.8K 🔥` `+48%`
1. [女子捡到金项链发现异常立马扔掉 (A woman picked up a gold necklace and threw it away immediately after noticing something strange.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8D%A1%E5%88%B0%E9%87%91%E9%A1%B9%E9%93%BE%E5%8F%91%E7%8E%B0%E5%BC%82%E5%B8%B8%E7%AB%8B%E9%A9%AC%E6%89%94%E6%8E%89%23) `1.2M 🔥`
1. [微信回应只能撤回2分钟内消息](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E5%9B%9E%E5%BA%94%E5%8F%AA%E8%83%BD%E6%92%A4%E5%9B%9E2%E5%88%86%E9%92%9F%E5%86%85%E6%B6%88%E6%81%AF%23) `835.1K 🔥`
1. [第一次觉得excel好吵](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%89%E5%BE%97excel%E5%A5%BD%E5%90%B5%23) `390.2K 🔥` `-51%`
1. [赵丽颖易烊千玺三搭](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E4%B8%89%E6%90%AD%23) `256.5K 🔥` `-64%`
1. [景甜方否认代孕协议 (Jing Tianfang denies surrogacy agreement)](https://s.weibo.com/weibo?q=%23%E6%99%AF%E7%94%9C%E6%96%B9%E5%90%A6%E8%AE%A4%E4%BB%A3%E5%AD%95%E5%8D%8F%E8%AE%AE%23) `215.3K 🔥` `-50%`
1. [汪峰又把人设立住了](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E5%B3%B0%E5%8F%88%E6%8A%8A%E4%BA%BA%E8%AE%BE%E7%AB%8B%E4%BD%8F%E4%BA%86%23) `206.2K 🔥` `-49%`
1. [易烊千玺演皇帝](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%BC%94%E7%9A%87%E5%B8%9D%23) `163.5K 🔥` `-61%`
1. [白鹿 年纪大了有点尴尬](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%20%E5%B9%B4%E7%BA%AA%E5%A4%A7%E4%BA%86%E6%9C%89%E7%82%B9%E5%B0%B4%E5%B0%AC%23) `134.3K 🔥` `-41%`
1. [用上AI后工作时间反而更长了 (Working hours will be longer after using AI)](https://s.weibo.com/weibo?q=%23%E7%94%A8%E4%B8%8AAI%E5%90%8E%E5%B7%A5%E4%BD%9C%E6%97%B6%E9%97%B4%E5%8F%8D%E8%80%8C%E6%9B%B4%E9%95%BF%E4%BA%86%23) `117.2K 🔥` `-72%`

Updated at 2026-05-22 16:00:01

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
