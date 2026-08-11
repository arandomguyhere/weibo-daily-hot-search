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

1. [疑山西一医院实习护士晒患者隐私照 (A trainee nurse at a hospital in Shanxi is suspected of posting private photos of patients)](https://s.weibo.com/weibo?q=%23%E7%96%91%E5%B1%B1%E8%A5%BF%E4%B8%80%E5%8C%BB%E9%99%A2%E5%AE%9E%E4%B9%A0%E6%8A%A4%E5%A3%AB%E6%99%92%E6%82%A3%E8%80%85%E9%9A%90%E7%A7%81%E7%85%A7%23) `1.2M 🔥` `NEW`
1. [易烊千玺工作室编辑加了刘春和](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%B7%A5%E4%BD%9C%E5%AE%A4%E7%BC%96%E8%BE%91%E5%8A%A0%E4%BA%86%E5%88%98%E6%98%A5%E5%92%8C%23) `1.0M 🔥` `NEW`
1. [王宝强是之前连金扫帚奖都去现场的人](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%9D%E5%BC%BA%E6%98%AF%E4%B9%8B%E5%89%8D%E8%BF%9E%E9%87%91%E6%89%AB%E5%B8%9A%E5%A5%96%E9%83%BD%E5%8E%BB%E7%8E%B0%E5%9C%BA%E7%9A%84%E4%BA%BA%23) `757.2K 🔥` `NEW`
1. [清凉一夏海南度假](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%87%89%E4%B8%80%E5%A4%8F%E6%B5%B7%E5%8D%97%E5%BA%A6%E5%81%87%23) `658.9K 🔥` `NEW`
1. [曾经月销5万的车现在卖不动了](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E7%BB%8F%E6%9C%88%E9%94%805%E4%B8%87%E7%9A%84%E8%BD%A6%E7%8E%B0%E5%9C%A8%E5%8D%96%E4%B8%8D%E5%8A%A8%E4%BA%86%23) `517.5K 🔥` `NEW`
1. [国乒男单上半区失守](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%8D%95%E4%B8%8A%E5%8D%8A%E5%8C%BA%E5%A4%B1%E5%AE%88%23) `439.7K 🔥` `NEW`
1. [上海偶遇Bin](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%81%B6%E9%81%87Bin%23) `436.5K 🔥` `NEW`
1. [易烊千玺婉拒黄晓明唱歌邀请](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%A9%89%E6%8B%92%E9%BB%84%E6%99%93%E6%98%8E%E5%94%B1%E6%AD%8C%E9%82%80%E8%AF%B7%23) `425.9K 🔥` `NEW`
1. [苹果9月发布会核心产品曝光](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C9%E6%9C%88%E5%8F%91%E5%B8%83%E4%BC%9A%E6%A0%B8%E5%BF%83%E4%BA%A7%E5%93%81%E6%9B%9D%E5%85%89%23) `422.5K 🔥` `NEW`
1. [杨幂 奖缘](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%20%E5%A5%96%E7%BC%98%23) `417.5K 🔥` `NEW`
1. [柬埔寨一园区围殴中国人监控曝光 (Surveillance of beating up Chinese people in a Cambodian park exposed)](https://s.weibo.com/weibo?q=%23%E6%9F%AC%E5%9F%94%E5%AF%A8%E4%B8%80%E5%9B%AD%E5%8C%BA%E5%9B%B4%E6%AE%B4%E4%B8%AD%E5%9B%BD%E4%BA%BA%E7%9B%91%E6%8E%A7%E6%9B%9D%E5%85%89%23) `415.5K 🔥` `NEW`
1. [优秀影片 导演3票](https://s.weibo.com/weibo?q=%23%E4%BC%98%E7%A7%80%E5%BD%B1%E7%89%87%20%E5%AF%BC%E6%BC%943%E7%A5%A8%23) `402.9K 🔥` `NEW`
1. [姜小柔家属称愿她能安静地离开](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E5%B0%8F%E6%9F%94%E5%AE%B6%E5%B1%9E%E7%A7%B0%E6%84%BF%E5%A5%B9%E8%83%BD%E5%AE%89%E9%9D%99%E5%9C%B0%E7%A6%BB%E5%BC%80%23) `400.1K 🔥` `NEW`
1. [哥伦比亚强震已致132死570伤](https://s.weibo.com/weibo?q=%23%E5%93%A5%E4%BC%A6%E6%AF%94%E4%BA%9A%E5%BC%BA%E9%9C%87%E5%B7%B2%E8%87%B4132%E6%AD%BB570%E4%BC%A4%23) `394.3K 🔥` `NEW`
1. [哥伦比亚地震](https://s.weibo.com/weibo?q=%23%E5%93%A5%E4%BC%A6%E6%AF%94%E4%BA%9A%E5%9C%B0%E9%9C%87%23) `388.4K 🔥` `NEW`
1. [ksg流浪夏季赛不打了](https://s.weibo.com/weibo?q=%23ksg%E6%B5%81%E6%B5%AA%E5%A4%8F%E5%AD%A3%E8%B5%9B%E4%B8%8D%E6%89%93%E4%BA%86%23) `386.5K 🔥` `NEW`
1. [月牙泉景区一瓶汽水180元](https://s.weibo.com/weibo?q=%23%E6%9C%88%E7%89%99%E6%B3%89%E6%99%AF%E5%8C%BA%E4%B8%80%E7%93%B6%E6%B1%BD%E6%B0%B4180%E5%85%83%23) `380.9K 🔥` `NEW`
1. [张新成2票](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%96%B0%E6%88%902%E7%A5%A8%23) `376.3K 🔥` `NEW`
1. [沈腾王宝强扛起了暑期档春节档的大盘](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E7%8E%8B%E5%AE%9D%E5%BC%BA%E6%89%9B%E8%B5%B7%E4%BA%86%E6%9A%91%E6%9C%9F%E6%A1%A3%E6%98%A5%E8%8A%82%E6%A1%A3%E7%9A%84%E5%A4%A7%E7%9B%98%23) `364.7K 🔥` `NEW`
1. [张泽禹和童禹坤一起吃烧烤](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%B3%BD%E7%A6%B9%E5%92%8C%E7%AB%A5%E7%A6%B9%E5%9D%A4%E4%B8%80%E8%B5%B7%E5%90%83%E7%83%A7%E7%83%A4%23) `361.5K 🔥` `NEW`
1. [内蒙古一警车被指换标长城汽车 (A police car in Inner Mongolia was accused of switching to Great Wall Motors)](https://s.weibo.com/weibo?q=%23%E5%86%85%E8%92%99%E5%8F%A4%E4%B8%80%E8%AD%A6%E8%BD%A6%E8%A2%AB%E6%8C%87%E6%8D%A2%E6%A0%87%E9%95%BF%E5%9F%8E%E6%B1%BD%E8%BD%A6%23) `358.0K 🔥` `NEW`
1. [方志友杨铭威官宣离婚](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%BF%97%E5%8F%8B%E6%9D%A8%E9%93%AD%E5%A8%81%E5%AE%98%E5%AE%A3%E7%A6%BB%E5%A9%9A%23) `351.6K 🔥` `NEW`
1. [白海豚突然大拐弯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E7%AA%81%E7%84%B6%E5%A4%A7%E6%8B%90%E5%BC%AF%23) `1.3M 🔥` `+193%`
1. [长江十年行 (A ten-year trip to the Yangtze River)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B1%9F%E5%8D%81%E5%B9%B4%E8%A1%8C%23) `1.1M 🔥` `+37%`
1. [小鹏G9L今晚预售 (Xpeng G9L is on pre-sale tonight)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FG9L%E4%BB%8A%E6%99%9A%E9%A2%84%E5%94%AE%23) `1.1M 🔥` `+884%`
1. [旅游发朋友圈为什么要带定位 (Why should you bring positioning when posting on Moments when traveling?)](https://s.weibo.com/weibo?q=%23%E6%97%85%E6%B8%B8%E5%8F%91%E6%9C%8B%E5%8F%8B%E5%9C%88%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E5%B8%A6%E5%AE%9A%E4%BD%8D%23) `814.9K 🔥`
1. [百花奖获奖名单 (List of Hundred Flowers Award Winners)](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%E8%8E%B7%E5%A5%96%E5%90%8D%E5%8D%95%23) `440.2K 🔥`
1. [陈思诚在家里气哭了](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%80%9D%E8%AF%9A%E5%9C%A8%E5%AE%B6%E9%87%8C%E6%B0%94%E5%93%AD%E4%BA%86%23) `434.9K 🔥`
1. [赵丽颖百花奖首提即中 (Zhao Liying won the Hundred Flowers Award for the first time)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%99%BE%E8%8A%B1%E5%A5%96%E9%A6%96%E6%8F%90%E5%8D%B3%E4%B8%AD%23) `432.8K 🔥`
1. [晚年独居女性如何面对老去的寂寞 (How do women who live alone in their later years face the loneliness of aging?)](https://s.weibo.com/weibo?q=%23%E6%99%9A%E5%B9%B4%E7%8B%AC%E5%B1%85%E5%A5%B3%E6%80%A7%E5%A6%82%E4%BD%95%E9%9D%A2%E5%AF%B9%E8%80%81%E5%8E%BB%E7%9A%84%E5%AF%82%E5%AF%9E%23) `430.2K 🔥`
1. [Angelababy85花首位百花奖](https://s.weibo.com/weibo?q=%23Angelababy85%E8%8A%B1%E9%A6%96%E4%BD%8D%E7%99%BE%E8%8A%B1%E5%A5%96%23) `428.6K 🔥`
1. [泰国 电诈园区](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%20%E7%94%B5%E8%AF%88%E5%9B%AD%E5%8C%BA%23) `423.9K 🔥`
1. [原来这才是金项链的正确戴法 (It turns out that this is the correct way to wear a gold necklace)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E6%89%8D%E6%98%AF%E9%87%91%E9%A1%B9%E9%93%BE%E7%9A%84%E6%AD%A3%E7%A1%AE%E6%88%B4%E6%B3%95%23) `419.9K 🔥`
1. [丈夫瞒妻子5年给父母转账50万](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E7%9E%92%E5%A6%BB%E5%AD%905%E5%B9%B4%E7%BB%99%E7%88%B6%E6%AF%8D%E8%BD%AC%E8%B4%A650%E4%B8%87%23) `413.0K 🔥`
1. [沈腾最大的奖 微博King (Shen Teng’s biggest award Weibo King)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E6%9C%80%E5%A4%A7%E7%9A%84%E5%A5%96%20%E5%BE%AE%E5%8D%9AKing%23) `410.8K 🔥`
1. [深圳已经这么科幻了 (Shenzhen is already so sci-fi)](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%B7%B2%E7%BB%8F%E8%BF%99%E4%B9%88%E7%A7%91%E5%B9%BB%E4%BA%86%23) `410.0K 🔥`
1. [杨幂顶级走位](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E9%A1%B6%E7%BA%A7%E8%B5%B0%E4%BD%8D%23) `407.9K 🔥`
1. [严屹宽自曝23岁在北京买了房](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E5%B1%B9%E5%AE%BD%E8%87%AA%E6%9B%9D23%E5%B2%81%E5%9C%A8%E5%8C%97%E4%BA%AC%E4%B9%B0%E4%BA%86%E6%88%BF%23) `405.9K 🔥`
1. [医生问诊27岁女子妈妈在旁不停打断](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E9%97%AE%E8%AF%8A27%E5%B2%81%E5%A5%B3%E5%AD%90%E5%A6%88%E5%A6%88%E5%9C%A8%E6%97%81%E4%B8%8D%E5%81%9C%E6%89%93%E6%96%AD%23) `401.0K 🔥`
1. [网友偶遇陈键锋满头金发身材圆润 (Netizens encounter Chen Jianfeng with blond hair and round figure)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%81%B6%E9%81%87%E9%99%88%E9%94%AE%E9%94%8B%E6%BB%A1%E5%A4%B4%E9%87%91%E5%8F%91%E8%BA%AB%E6%9D%90%E5%9C%86%E6%B6%A6%23) `397.4K 🔥`
1. [竟然不是高叶](https://s.weibo.com/weibo?q=%23%E7%AB%9F%E7%84%B6%E4%B8%8D%E6%98%AF%E9%AB%98%E5%8F%B6%23) `392.8K 🔥`
1. [iPhone18Pro等7款新品彻底泄密 (iPhone 18 Pro and other 7 new products completely leaked)](https://s.weibo.com/weibo?q=%23iPhone18Pro%E7%AD%897%E6%AC%BE%E6%96%B0%E5%93%81%E5%BD%BB%E5%BA%95%E6%B3%84%E5%AF%86%23) `390.0K 🔥`
1. [百花奖 (Hundred Flowers Award)](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%23) `383.9K 🔥`
1. [梁家辉安慰马丽不要哭 (Tony Leung Ka Fai comforts Ma Li not to cry)](https://s.weibo.com/weibo?q=%23%E6%A2%81%E5%AE%B6%E8%BE%89%E5%AE%89%E6%85%B0%E9%A9%AC%E4%B8%BD%E4%B8%8D%E8%A6%81%E5%93%AD%23) `382.6K 🔥`
1. [卫诗雅百花奖最佳女主 (Wei Shiya Hundred Flowers Award for Best Actress)](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E8%AF%97%E9%9B%85%E7%99%BE%E8%8A%B1%E5%A5%96%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%23) `377.8K 🔥`
1. [白海豚 (white dolphin)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%23) `374.7K 🔥`
1. [申奥获得艺谋奖 (Bid for Olympic Games and won Yimou Award)](https://s.weibo.com/weibo?q=%23%E7%94%B3%E5%A5%A5%E8%8E%B7%E5%BE%97%E8%89%BA%E8%B0%8B%E5%A5%96%23) `371.2K 🔥`
1. [王骁拿奖王馥荔眼睛红了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%AA%81%E6%8B%BF%E5%A5%96%E7%8E%8B%E9%A6%A5%E8%8D%94%E7%9C%BC%E7%9D%9B%E7%BA%A2%E4%BA%86%23) `369.5K 🔥`
1. [哥伦比亚发生7.5级地震](https://s.weibo.com/weibo?q=%23%E5%93%A5%E4%BC%A6%E6%AF%94%E4%BA%9A%E5%8F%91%E7%94%9F7.5%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `367.3K 🔥`
1. [徐州乐园女演员火裙舞烧到直哭](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%B7%9E%E4%B9%90%E5%9B%AD%E5%A5%B3%E6%BC%94%E5%91%98%E7%81%AB%E8%A3%99%E8%88%9E%E7%83%A7%E5%88%B0%E7%9B%B4%E5%93%AD%23) `363.9K 🔥`
1. [流浪](https://s.weibo.com/weibo?q=%23%E6%B5%81%E6%B5%AA%23) `357.4K 🔥`
1. [胡锡进警惕AI消灭行业剥夺饭碗](https://s.weibo.com/weibo?q=%23%E8%83%A1%E9%94%A1%E8%BF%9B%E8%AD%A6%E6%83%95AI%E6%B6%88%E7%81%AD%E8%A1%8C%E4%B8%9A%E5%89%A5%E5%A4%BA%E9%A5%AD%E7%A2%97%23) `355.7K 🔥`

Updated at 2026-08-11 09:28:31

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
