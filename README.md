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

1. [白玉兰提名晚宴 (Magnolia Nomination Dinner)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E6%8F%90%E5%90%8D%E6%99%9A%E5%AE%B4%23) `1.5M 🔥` `NEW`
1. [韩国南非赛后发生冲突](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%8D%97%E9%9D%9E%E8%B5%9B%E5%90%8E%E5%8F%91%E7%94%9F%E5%86%B2%E7%AA%81%23) `879.7K 🔥` `NEW`
1. [收好这份防汛避险攻略](https://s.weibo.com/weibo?q=%23%E6%94%B6%E5%A5%BD%E8%BF%99%E4%BB%BD%E9%98%B2%E6%B1%9B%E9%81%BF%E9%99%A9%E6%94%BB%E7%95%A5%23) `742.9K 🔥` `NEW`
1. [山河为卷万象郑州](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E6%B2%B3%E4%B8%BA%E5%8D%B7%E4%B8%87%E8%B1%A1%E9%83%91%E5%B7%9E%23) `742.3K 🔥` `NEW`
1. [建议大家不要和AI太好了](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E4%B8%8D%E8%A6%81%E5%92%8CAI%E5%A4%AA%E5%A5%BD%E4%BA%86%23) `735.3K 🔥` `NEW`
1. [四川高考分数线公布](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E9%AB%98%E8%80%83%E5%88%86%E6%95%B0%E7%BA%BF%E5%85%AC%E5%B8%83%23) `671.1K 🔥` `NEW`
1. [杨幂白玉兰红唇黑长直](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%99%BD%E7%8E%89%E5%85%B0%E7%BA%A2%E5%94%87%E9%BB%91%E9%95%BF%E7%9B%B4%23) `607.9K 🔥` `NEW`
1. [白鹿哭肿了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%93%AD%E8%82%BF%E4%BA%86%23) `606.9K 🔥` `NEW`
1. [吴尊发文控诉国泰航空](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%B0%8A%E5%8F%91%E6%96%87%E6%8E%A7%E8%AF%89%E5%9B%BD%E6%B3%B0%E8%88%AA%E7%A9%BA%23) `594.1K 🔥` `NEW`
1. [白玉兰提名晚宴绿毯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E6%8F%90%E5%90%8D%E6%99%9A%E5%AE%B4%E7%BB%BF%E6%AF%AF%23) `592.2K 🔥` `NEW`
1. [吴谨言 产后发胖受益人 (Wu Jinyan, a beneficiary who gained weight after childbirth)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%B0%A8%E8%A8%80%20%E4%BA%A7%E5%90%8E%E5%8F%91%E8%83%96%E5%8F%97%E7%9B%8A%E4%BA%BA%23) `585.7K 🔥` `NEW`
1. [钟丽缇呼吁停止传播相关内容](https://s.weibo.com/weibo?q=%23%E9%92%9F%E4%B8%BD%E7%BC%87%E5%91%BC%E5%90%81%E5%81%9C%E6%AD%A2%E4%BC%A0%E6%92%AD%E7%9B%B8%E5%85%B3%E5%86%85%E5%AE%B9%23) `583.0K 🔥` `NEW`
1. [又有品牌纸尿裤被检出甲酰胺](https://s.weibo.com/weibo?q=%23%E5%8F%88%E6%9C%89%E5%93%81%E7%89%8C%E7%BA%B8%E5%B0%BF%E8%A3%A4%E8%A2%AB%E6%A3%80%E5%87%BA%E7%94%B2%E9%85%B0%E8%83%BA%23) `577.3K 🔥` `NEW`
1. [美国少女遭性侵被囚烘干机](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%B0%91%E5%A5%B3%E9%81%AD%E6%80%A7%E4%BE%B5%E8%A2%AB%E5%9B%9A%E7%83%98%E5%B9%B2%E6%9C%BA%23) `574.8K 🔥` `NEW`
1. [李玟精神科医生被起诉](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%9F%E7%B2%BE%E7%A5%9E%E7%A7%91%E5%8C%BB%E7%94%9F%E8%A2%AB%E8%B5%B7%E8%AF%89%23) `570.5K 🔥` `NEW`
1. [赵今麦的健身痕迹](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E7%9A%84%E5%81%A5%E8%BA%AB%E7%97%95%E8%BF%B9%23) `569.5K 🔥` `NEW`
1. [特训学校何以成为700亿元的生意](https://s.weibo.com/weibo?q=%23%E7%89%B9%E8%AE%AD%E5%AD%A6%E6%A0%A1%E4%BD%95%E4%BB%A5%E6%88%90%E4%B8%BA700%E4%BA%BF%E5%85%83%E7%9A%84%E7%94%9F%E6%84%8F%23) `566.0K 🔥` `NEW`
1. [A股半日4300股下跌](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%8D%8A%E6%97%A54300%E8%82%A1%E4%B8%8B%E8%B7%8C%23) `563.6K 🔥` `NEW`
1. [恋与深空嘴上认错实际行动全无](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E5%98%B4%E4%B8%8A%E8%AE%A4%E9%94%99%E5%AE%9E%E9%99%85%E8%A1%8C%E5%8A%A8%E5%85%A8%E6%97%A0%23) `559.2K 🔥` `NEW`
1. [杨紫白玉兰最佳女主提名公式照](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%99%BD%E7%8E%89%E5%85%B0%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%E6%8F%90%E5%90%8D%E5%85%AC%E5%BC%8F%E7%85%A7%23) `551.6K 🔥` `NEW`
1. [男生查分输错2次验证码淡定说高保 (A boy checked his score and entered the verification code incorrectly twice and said calmly that he would be guaranteed high security.)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E6%9F%A5%E5%88%86%E8%BE%93%E9%94%992%E6%AC%A1%E9%AA%8C%E8%AF%81%E7%A0%81%E6%B7%A1%E5%AE%9A%E8%AF%B4%E9%AB%98%E4%BF%9D%23) `547.3K 🔥` `NEW`
1. [链博会把AI全产业链搬来了](https://s.weibo.com/weibo?q=%23%E9%93%BE%E5%8D%9A%E4%BC%9A%E6%8A%8AAI%E5%85%A8%E4%BA%A7%E4%B8%9A%E9%93%BE%E6%90%AC%E6%9D%A5%E4%BA%86%23) `546.0K 🔥` `NEW`
1. [杨幂白玉兰提名晚宴公式照](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%99%BD%E7%8E%89%E5%85%B0%E6%8F%90%E5%90%8D%E6%99%9A%E5%AE%B4%E5%85%AC%E5%BC%8F%E7%85%A7%23) `542.0K 🔥` `NEW`
1. [莫氏鸡煲新增空调区仍销售惨淡](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E6%96%B0%E5%A2%9E%E7%A9%BA%E8%B0%83%E5%8C%BA%E4%BB%8D%E9%94%80%E5%94%AE%E6%83%A8%E6%B7%A1%23) `536.7K 🔥` `NEW`
1. [英国女子因胸部过大严重影响生活](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E5%A5%B3%E5%AD%90%E5%9B%A0%E8%83%B8%E9%83%A8%E8%BF%87%E5%A4%A7%E4%B8%A5%E9%87%8D%E5%BD%B1%E5%93%8D%E7%94%9F%E6%B4%BB%23) `534.4K 🔥` `NEW`
1. [钟丽缇为考拉事件致歉](https://s.weibo.com/weibo?q=%23%E9%92%9F%E4%B8%BD%E7%BC%87%E4%B8%BA%E8%80%83%E6%8B%89%E4%BA%8B%E4%BB%B6%E8%87%B4%E6%AD%89%23) `530.9K 🔥` `NEW`
1. [孙凡清 腹有诗书气自华的美女](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%87%A1%E6%B8%85%20%E8%85%B9%E6%9C%89%E8%AF%97%E4%B9%A6%E6%B0%94%E8%87%AA%E5%8D%8E%E7%9A%84%E7%BE%8E%E5%A5%B3%23) `527.4K 🔥` `NEW`
1. [穿洛丽塔面试行政岗](https://s.weibo.com/weibo?q=%23%E7%A9%BF%E6%B4%9B%E4%B8%BD%E5%A1%94%E9%9D%A2%E8%AF%95%E8%A1%8C%E6%94%BF%E5%B2%97%23) `524.6K 🔥` `NEW`
1. [张凌赫身高190体重136](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%BA%AB%E9%AB%98190%E4%BD%93%E9%87%8D136%23) `522.4K 🔥` `NEW`
1. [沈梦辰 杜海涛善良但真的不瘦](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%A2%A6%E8%BE%B0%20%E6%9D%9C%E6%B5%B7%E6%B6%9B%E5%96%84%E8%89%AF%E4%BD%86%E7%9C%9F%E7%9A%84%E4%B8%8D%E7%98%A6%23) `513.6K 🔥` `NEW`
1. [翻译这不得不爱大姐姐一辈子 (Translation: I have to love my big sister for the rest of my life)](https://s.weibo.com/weibo?q=%23%E7%BF%BB%E8%AF%91%E8%BF%99%E4%B8%8D%E5%BE%97%E4%B8%8D%E7%88%B1%E5%A4%A7%E5%A7%90%E5%A7%90%E4%B8%80%E8%BE%88%E5%AD%90%23) `511.7K 🔥` `NEW`
1. [女顾客刚坐下店里瞬间坐满](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E9%A1%BE%E5%AE%A2%E5%88%9A%E5%9D%90%E4%B8%8B%E5%BA%97%E9%87%8C%E7%9E%AC%E9%97%B4%E5%9D%90%E6%BB%A1%23) `506.0K 🔥` `NEW`
1. [十日终焉视频回来了](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E8%A7%86%E9%A2%91%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `502.6K 🔥` `NEW`
1. [杀害3岁女童嫌疑人目前在哺乳期](https://s.weibo.com/weibo?q=%23%E6%9D%80%E5%AE%B33%E5%B2%81%E5%A5%B3%E7%AB%A5%E5%AB%8C%E7%96%91%E4%BA%BA%E7%9B%AE%E5%89%8D%E5%9C%A8%E5%93%BA%E4%B9%B3%E6%9C%9F%23) `497.6K 🔥` `NEW`
1. [乘风2026](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%23) `494.7K 🔥` `NEW`
1. [李飞飞说未来职场将只剩下这两种人](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%A3%9E%E9%A3%9E%E8%AF%B4%E6%9C%AA%E6%9D%A5%E8%81%8C%E5%9C%BA%E5%B0%86%E5%8F%AA%E5%89%A9%E4%B8%8B%E8%BF%99%E4%B8%A4%E7%A7%8D%E4%BA%BA%23) `492.9K 🔥` `NEW`
1. [麦琳瘦了后状态](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E7%90%B3%E7%98%A6%E4%BA%86%E5%90%8E%E7%8A%B6%E6%80%81%23) `487.9K 🔥` `NEW`
1. [高温天运动后不要猛吹空调](https://s.weibo.com/weibo?q=%23%E9%AB%98%E6%B8%A9%E5%A4%A9%E8%BF%90%E5%8A%A8%E5%90%8E%E4%B8%8D%E8%A6%81%E7%8C%9B%E5%90%B9%E7%A9%BA%E8%B0%83%23) `483.1K 🔥` `NEW`
1. [13岁女孩称遭性侵已刑事立案](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E5%A5%B3%E5%AD%A9%E7%A7%B0%E9%81%AD%E6%80%A7%E4%BE%B5%E5%B7%B2%E5%88%91%E4%BA%8B%E7%AB%8B%E6%A1%88%23) `481.5K 🔥` `NEW`
1. [日本韩国世界杯死亡前景](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%9F%A9%E5%9B%BD%E4%B8%96%E7%95%8C%E6%9D%AF%E6%AD%BB%E4%BA%A1%E5%89%8D%E6%99%AF%23) `599.2K 🔥` `+30%`
1. [久病床前无孝咪 (There is no filial piety in front of the bed after a long illness)](https://s.weibo.com/weibo?q=%23%E4%B9%85%E7%97%85%E5%BA%8A%E5%89%8D%E6%97%A0%E5%AD%9D%E5%92%AA%23) `597.4K 🔥` `+51%`
1. [高考493分放弃本科读专科女生现状](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83493%E5%88%86%E6%94%BE%E5%BC%83%E6%9C%AC%E7%A7%91%E8%AF%BB%E4%B8%93%E7%A7%91%E5%A5%B3%E7%94%9F%E7%8E%B0%E7%8A%B6%23) `580.5K 🔥` `+44%`
1. [蔚来高管感谢增程车让大家爱上用电](https://s.weibo.com/weibo?q=%23%E8%94%9A%E6%9D%A5%E9%AB%98%E7%AE%A1%E6%84%9F%E8%B0%A2%E5%A2%9E%E7%A8%8B%E8%BD%A6%E8%AE%A9%E5%A4%A7%E5%AE%B6%E7%88%B1%E4%B8%8A%E7%94%A8%E7%94%B5%23) `556.5K 🔥` `+26%`
1. [网红陈慧敏引产](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E9%99%88%E6%85%A7%E6%95%8F%E5%BC%95%E4%BA%A7%23) `554.5K 🔥` `+52%`
1. [十日终焉预告2连发](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E9%A2%84%E5%91%8A2%E8%BF%9E%E5%8F%91%23) `539.5K 🔥` `+103%`
1. [papi拍完繁花两年没吃鸡爪](https://s.weibo.com/weibo?q=%23papi%E6%8B%8D%E5%AE%8C%E7%B9%81%E8%8A%B1%E4%B8%A4%E5%B9%B4%E6%B2%A1%E5%90%83%E9%B8%A1%E7%88%AA%23) `519.6K 🔥` `+223%`
1. [00后小伙按摩持刀逼技师脱衣后坠亡](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E5%B0%8F%E4%BC%99%E6%8C%89%E6%91%A9%E6%8C%81%E5%88%80%E9%80%BC%E6%8A%80%E5%B8%88%E8%84%B1%E8%A1%A3%E5%90%8E%E5%9D%A0%E4%BA%A1%23) `516.1K 🔥` `+106%`
1. [李纯两年没戏拍坐法院哭](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BA%AF%E4%B8%A4%E5%B9%B4%E6%B2%A1%E6%88%8F%E6%8B%8D%E5%9D%90%E6%B3%95%E9%99%A2%E5%93%AD%23) `503.9K 🔥` `+121%`
1. [向佐弟弟向佑身体疑似躯体化](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%BD%90%E5%BC%9F%E5%BC%9F%E5%90%91%E4%BD%91%E8%BA%AB%E4%BD%93%E7%96%91%E4%BC%BC%E8%BA%AF%E4%BD%93%E5%8C%96%23) `489.5K 🔥`
1. [山东高考分数线 (Shandong college entrance examination score line)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E9%AB%98%E8%80%83%E5%88%86%E6%95%B0%E7%BA%BF%23) `604.1K 🔥` `-72%`
1. [浙江高考分数线](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E9%AB%98%E8%80%83%E5%88%86%E6%95%B0%E7%BA%BF%23) `588.4K 🔥` `-56%`

Updated at 2026-06-25 18:49:23

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
