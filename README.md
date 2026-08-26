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

1. [欢子起诉湖南卫视](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%E8%B5%B7%E8%AF%89%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%23) `904.6K 🔥` `NEW`
1. [孙千第一集穿的假名牌](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E7%AC%AC%E4%B8%80%E9%9B%86%E7%A9%BF%E7%9A%84%E5%81%87%E5%90%8D%E7%89%8C%23) `894.7K 🔥` `NEW`
1. [GucciPrimavera](https://s.weibo.com/weibo?q=%23GucciPrimavera%23) `892.5K 🔥` `NEW`
1. [逐夏开机照](https://s.weibo.com/weibo?q=%23%E9%80%90%E5%A4%8F%E5%BC%80%E6%9C%BA%E7%85%A7%23) `889.5K 🔥` `NEW`
1. [西藏泥石流](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E6%B3%A5%E7%9F%B3%E6%B5%81%23) `878.4K 🔥` `NEW`
1. [张延张锦程离婚](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%BB%B6%E5%BC%A0%E9%94%A6%E7%A8%8B%E7%A6%BB%E5%A9%9A%23) `869.0K 🔥` `NEW`
1. [张锦程回应与张延离婚](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%94%A6%E7%A8%8B%E5%9B%9E%E5%BA%94%E4%B8%8E%E5%BC%A0%E5%BB%B6%E7%A6%BB%E5%A9%9A%23) `293.3K 🔥` `NEW`
1. [遭索赔店主将休养一段时间](https://s.weibo.com/weibo?q=%23%E9%81%AD%E7%B4%A2%E8%B5%94%E5%BA%97%E4%B8%BB%E5%B0%86%E4%BC%91%E5%85%BB%E4%B8%80%E6%AE%B5%E6%97%B6%E9%97%B4%23) `273.6K 🔥` `NEW`
1. [范丞丞晒了现发团合照](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E6%99%92%E4%BA%86%E7%8E%B0%E5%8F%91%E5%9B%A2%E5%90%88%E7%85%A7%23) `263.7K 🔥` `NEW`
1. [虞书欣 丝巾当抹胸穿](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%20%E4%B8%9D%E5%B7%BE%E5%BD%93%E6%8A%B9%E8%83%B8%E7%A9%BF%23) `257.6K 🔥` `NEW`
1. [韩国警方陷入信任危机](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%AD%A6%E6%96%B9%E9%99%B7%E5%85%A5%E4%BF%A1%E4%BB%BB%E5%8D%B1%E6%9C%BA%23) `253.7K 🔥` `NEW`
1. [西藏吉隆口岸发生泥石流](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E5%90%89%E9%9A%86%E5%8F%A3%E5%B2%B8%E5%8F%91%E7%94%9F%E6%B3%A5%E7%9F%B3%E6%B5%81%23) `242.8K 🔥` `NEW`
1. [第一批请3休13理由出现了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E8%AF%B73%E4%BC%9113%E7%90%86%E7%94%B1%E5%87%BA%E7%8E%B0%E4%BA%86%23) `242.3K 🔥` `NEW`
1. [男子断头路晒花生被车碾碎数十斤](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%96%AD%E5%A4%B4%E8%B7%AF%E6%99%92%E8%8A%B1%E7%94%9F%E8%A2%AB%E8%BD%A6%E7%A2%BE%E7%A2%8E%E6%95%B0%E5%8D%81%E6%96%A4%23) `232.6K 🔥` `NEW`
1. [网传时代峰峻要搬出长江国际了](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E8%A6%81%E6%90%AC%E5%87%BA%E9%95%BF%E6%B1%9F%E5%9B%BD%E9%99%85%E4%BA%86%23) `211.9K 🔥` `NEW`
1. [金价大涨卖金人冲进金店](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%A4%A7%E6%B6%A8%E5%8D%96%E9%87%91%E4%BA%BA%E5%86%B2%E8%BF%9B%E9%87%91%E5%BA%97%23) `211.3K 🔥` `NEW`
1. [女生猛拉15下引体向上看呆观众](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E7%8C%9B%E6%8B%8915%E4%B8%8B%E5%BC%95%E4%BD%93%E5%90%91%E4%B8%8A%E7%9C%8B%E5%91%86%E8%A7%82%E4%BC%97%23) `210.3K 🔥` `NEW`
1. [丈夫与第三者在医院登记为配偶](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E4%B8%8E%E7%AC%AC%E4%B8%89%E8%80%85%E5%9C%A8%E5%8C%BB%E9%99%A2%E7%99%BB%E8%AE%B0%E4%B8%BA%E9%85%8D%E5%81%B6%23) `199.6K 🔥` `NEW`
1. [欢乐颂3可以开拍了](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E4%B9%90%E9%A2%823%E5%8F%AF%E4%BB%A5%E5%BC%80%E6%8B%8D%E4%BA%86%23) `195.1K 🔥` `NEW`
1. [机器人有自己的智勇大冲关](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%9C%89%E8%87%AA%E5%B7%B1%E7%9A%84%E6%99%BA%E5%8B%87%E5%A4%A7%E5%86%B2%E5%85%B3%23) `194.5K 🔥` `NEW`
1. [前LGD上单开团Peanut](https://s.weibo.com/weibo?q=%23%E5%89%8DLGD%E4%B8%8A%E5%8D%95%E5%BC%80%E5%9B%A2Peanut%23) `164.4K 🔥` `NEW`
1. [古茗时团预热](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E8%8C%97%E6%97%B6%E5%9B%A2%E9%A2%84%E7%83%AD%23) `158.5K 🔥` `NEW`
1. [芭莎金九宝格丽高珠](https://s.weibo.com/weibo?q=%23%E8%8A%AD%E8%8E%8E%E9%87%91%E4%B9%9D%E5%AE%9D%E6%A0%BC%E4%B8%BD%E9%AB%98%E7%8F%A0%23) `156.0K 🔥` `NEW`
1. [监控拍下嫌犯男扮女装拉行李箱抛尸](https://s.weibo.com/weibo?q=%23%E7%9B%91%E6%8E%A7%E6%8B%8D%E4%B8%8B%E5%AB%8C%E7%8A%AF%E7%94%B7%E6%89%AE%E5%A5%B3%E8%A3%85%E6%8B%89%E8%A1%8C%E6%9D%8E%E7%AE%B1%E6%8A%9B%E5%B0%B8%23) `153.9K 🔥` `NEW`
1. [杭州电梯事件不是谁先发声谁有理](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E7%94%B5%E6%A2%AF%E4%BA%8B%E4%BB%B6%E4%B8%8D%E6%98%AF%E8%B0%81%E5%85%88%E5%8F%91%E5%A3%B0%E8%B0%81%E6%9C%89%E7%90%86%23) `1.8M 🔥` `+55%`
1. [杭州电梯事件女子已清空账号作品](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E7%94%B5%E6%A2%AF%E4%BA%8B%E4%BB%B6%E5%A5%B3%E5%AD%90%E5%B7%B2%E6%B8%85%E7%A9%BA%E8%B4%A6%E5%8F%B7%E4%BD%9C%E5%93%81%23) `911.1K 🔥` `+135%`
1. [万千气象瞰宁夏](https://s.weibo.com/weibo?q=%23%E4%B8%87%E5%8D%83%E6%B0%94%E8%B1%A1%E7%9E%B0%E5%AE%81%E5%A4%8F%23) `906.3K 🔥` `+34%`
1. [孙红雷新座驾泰钽700上市了 (Sun Honglei’s new car Taitan 700 is launched)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%BA%A2%E9%9B%B7%E6%96%B0%E5%BA%A7%E9%A9%BE%E6%B3%B0%E9%92%BD700%E4%B8%8A%E5%B8%82%E4%BA%86%23) `905.6K 🔥` `+59%`
1. [央视曝光擦边手办乱象](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E6%93%A6%E8%BE%B9%E6%89%8B%E5%8A%9E%E4%B9%B1%E8%B1%A1%23) `897.5K 🔥` `+183%`
1. [纽约市长宣布建国营供销社](https://s.weibo.com/weibo?q=%23%E7%BA%BD%E7%BA%A6%E5%B8%82%E9%95%BF%E5%AE%A3%E5%B8%83%E5%BB%BA%E5%9B%BD%E8%90%A5%E4%BE%9B%E9%94%80%E7%A4%BE%23) `876.0K 🔥` `+271%`
1. [金鹰奖 刘亦菲国籍](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%20%E5%88%98%E4%BA%A6%E8%8F%B2%E5%9B%BD%E7%B1%8D%23) `866.3K 🔥` `+132%`
1. [丈夫带婚内孩子去看出轨生的孩子](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E5%B8%A6%E5%A9%9A%E5%86%85%E5%AD%A9%E5%AD%90%E5%8E%BB%E7%9C%8B%E5%87%BA%E8%BD%A8%E7%94%9F%E7%9A%84%E5%AD%A9%E5%AD%90%23) `470.0K 🔥` `+26%`
1. [小酒窝给杜华女儿让C位](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%85%92%E7%AA%9D%E7%BB%99%E6%9D%9C%E5%8D%8E%E5%A5%B3%E5%84%BF%E8%AE%A9C%E4%BD%8D%23) `466.6K 🔥` `+25%`
1. [曝杀害中国女生嫌犯曾威胁学生延毕](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%80%E5%AE%B3%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E5%AB%8C%E7%8A%AF%E6%9B%BE%E5%A8%81%E8%83%81%E5%AD%A6%E7%94%9F%E5%BB%B6%E6%AF%95%23) `458.9K 🔥` `+45%`
1. [中国学生想去日本上学被劝放弃滤镜](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%AD%A6%E7%94%9F%E6%83%B3%E5%8E%BB%E6%97%A5%E6%9C%AC%E4%B8%8A%E5%AD%A6%E8%A2%AB%E5%8A%9D%E6%94%BE%E5%BC%83%E6%BB%A4%E9%95%9C%23) `207.6K 🔥` `+38%`
1. [哪个年龄段的娃最难带](https://s.weibo.com/weibo?q=%23%E5%93%AA%E4%B8%AA%E5%B9%B4%E9%BE%84%E6%AE%B5%E7%9A%84%E5%A8%83%E6%9C%80%E9%9A%BE%E5%B8%A6%23) `194.1K 🔥` `+23%`
1. [国家反诈中心测出德芙声明是AI](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E5%8F%8D%E8%AF%88%E4%B8%AD%E5%BF%83%E6%B5%8B%E5%87%BA%E5%BE%B7%E8%8A%99%E5%A3%B0%E6%98%8E%E6%98%AFAI%23) `882.1K 🔥`
1. [井柏然字体](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%AD%97%E4%BD%93%23) `301.4K 🔥`
1. [包文婧生二胎产后抑郁](https://s.weibo.com/weibo?q=%23%E5%8C%85%E6%96%87%E5%A9%A7%E7%94%9F%E4%BA%8C%E8%83%8E%E4%BA%A7%E5%90%8E%E6%8A%91%E9%83%81%23) `263.5K 🔥`
1. [日本85岁夫妻不敢退休](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC85%E5%B2%81%E5%A4%AB%E5%A6%BB%E4%B8%8D%E6%95%A2%E9%80%80%E4%BC%91%23) `260.2K 🔥`
1. [运动对人的改变被严重低估了](https://s.weibo.com/weibo?q=%23%E8%BF%90%E5%8A%A8%E5%AF%B9%E4%BA%BA%E7%9A%84%E6%94%B9%E5%8F%98%E8%A2%AB%E4%B8%A5%E9%87%8D%E4%BD%8E%E4%BC%B0%E4%BA%86%23) `256.4K 🔥`
1. [蛋烘糕奶奶](https://s.weibo.com/weibo?q=%23%E8%9B%8B%E7%83%98%E7%B3%95%E5%A5%B6%E5%A5%B6%23) `286.4K 🔥` `-23%`
1. [刘亦菲梦回19岁时的金鹰女神](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E6%A2%A6%E5%9B%9E19%E5%B2%81%E6%97%B6%E7%9A%84%E9%87%91%E9%B9%B0%E5%A5%B3%E7%A5%9E%23) `250.1K 🔥` `-33%`
1. [网友劝包文婧离婚](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%8A%9D%E5%8C%85%E6%96%87%E5%A9%A7%E7%A6%BB%E5%A9%9A%23) `248.6K 🔥` `-22%`
1. [女子不吃早晚饭减肥1个月胖100斤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%8D%E5%90%83%E6%97%A9%E6%99%9A%E9%A5%AD%E5%87%8F%E8%82%A51%E4%B8%AA%E6%9C%88%E8%83%96100%E6%96%A4%23) `246.0K 🔥` `-23%`
1. [井柏然孙千你们在脸红什么](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%AD%99%E5%8D%83%E4%BD%A0%E4%BB%AC%E5%9C%A8%E8%84%B8%E7%BA%A2%E4%BB%80%E4%B9%88%23) `244.6K 🔥` `-35%`
1. [丁禹兮雅顿代言人](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E9%9B%85%E9%A1%BF%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `242.4K 🔥` `-23%`
1. [汪峰女儿小苹果20岁近照](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E5%B3%B0%E5%A5%B3%E5%84%BF%E5%B0%8F%E8%8B%B9%E6%9E%9C20%E5%B2%81%E8%BF%91%E7%85%A7%23) `202.7K 🔥` `-36%`
1. [关晓彤低脂彩椒碗返场](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E4%BD%8E%E8%84%82%E5%BD%A9%E6%A4%92%E7%A2%97%E8%BF%94%E5%9C%BA%23) `194.3K 🔥` `-39%`
1. [小猫把自己睡成小手套了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E6%8A%8A%E8%87%AA%E5%B7%B1%E7%9D%A1%E6%88%90%E5%B0%8F%E6%89%8B%E5%A5%97%E4%BA%86%23) `194.2K 🔥` `-48%`
1. [早春晴朗 (Sunny early spring)](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%23) `155.3K 🔥` `-51%`
1. [金鹰奖只提名了3个90后演员](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E5%8F%AA%E6%8F%90%E5%90%8D%E4%BA%863%E4%B8%AA90%E5%90%8E%E6%BC%94%E5%91%98%23) `155.0K 🔥` `-59%`

Updated at 2026-08-26 16:05:48

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
