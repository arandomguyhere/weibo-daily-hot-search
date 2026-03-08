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

1. [从海底1万米到距地球4300万公里 (From 10,000 meters under the sea to 43 million kilometers from the earth)](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E6%B5%B7%E5%BA%951%E4%B8%87%E7%B1%B3%E5%88%B0%E8%B7%9D%E5%9C%B0%E7%90%834300%E4%B8%87%E5%85%AC%E9%87%8C%23) `595.3K 🔥` `NEW`
1. [不同意授权不能用App是霸王条款](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%90%8C%E6%84%8F%E6%8E%88%E6%9D%83%E4%B8%8D%E8%83%BD%E7%94%A8App%E6%98%AF%E9%9C%B8%E7%8E%8B%E6%9D%A1%E6%AC%BE%23) `380.9K 🔥` `NEW`
1. [中国式现代化圈粉全球](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%BC%8F%E7%8E%B0%E4%BB%A3%E5%8C%96%E5%9C%88%E7%B2%89%E5%85%A8%E7%90%83%23) `374.8K 🔥` `NEW`
1. [小麦代表的麦田情](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%BA%A6%E4%BB%A3%E8%A1%A8%E7%9A%84%E9%BA%A6%E7%94%B0%E6%83%85%23) `371.3K 🔥` `NEW`
1. [逐玉播放量超过狂飙](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E6%92%AD%E6%94%BE%E9%87%8F%E8%B6%85%E8%BF%87%E7%8B%82%E9%A3%99%23) `368.8K 🔥` `NEW`
1. [27岁女子挤痘痘后确诊2型糖尿病](https://s.weibo.com/weibo?q=%2327%E5%B2%81%E5%A5%B3%E5%AD%90%E6%8C%A4%E7%97%98%E7%97%98%E5%90%8E%E7%A1%AE%E8%AF%8A2%E5%9E%8B%E7%B3%96%E5%B0%BF%E7%97%85%23) `304.7K 🔥` `NEW`
1. [王一博看完你的看你的](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%9C%8B%E5%AE%8C%E4%BD%A0%E7%9A%84%E7%9C%8B%E4%BD%A0%E7%9A%84%23) `301.0K 🔥` `NEW`
1. [王一博Mai合影](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9AMai%E5%90%88%E5%BD%B1%23) `151.0K 🔥` `NEW`
1. [胡明轩三分大赛冠军](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%98%8E%E8%BD%A9%E4%B8%89%E5%88%86%E5%A4%A7%E8%B5%9B%E5%86%A0%E5%86%9B%23) `141.9K 🔥` `NEW`
1. [赵雅芝红包](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E9%9B%85%E8%8A%9D%E7%BA%A2%E5%8C%85%23) `119.7K 🔥` `NEW`
1. [国际劳动妇女节 (international women's day)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E5%8A%B3%E5%8A%A8%E5%A6%87%E5%A5%B3%E8%8A%82%23) `113.4K 🔥` `NEW`
1. [王一博 巴黎也有回南天](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%20%E5%B7%B4%E9%BB%8E%E4%B9%9F%E6%9C%89%E5%9B%9E%E5%8D%97%E5%A4%A9%23) `92.4K 🔥` `NEW`
1. [所有对伊作战的美军基地全被打了](https://s.weibo.com/weibo?q=%23%E6%89%80%E6%9C%89%E5%AF%B9%E4%BC%8A%E4%BD%9C%E6%88%98%E7%9A%84%E7%BE%8E%E5%86%9B%E5%9F%BA%E5%9C%B0%E5%85%A8%E8%A2%AB%E6%89%93%E4%BA%86%23) `86.2K 🔥` `NEW`
1. [Bin说要打爆Kiin](https://s.weibo.com/weibo?q=%23Bin%E8%AF%B4%E8%A6%81%E6%89%93%E7%88%86Kiin%23) `86.1K 🔥` `NEW`
1. [武汉三镇0比2北京国安](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E4%B8%89%E9%95%870%E6%AF%942%E5%8C%97%E4%BA%AC%E5%9B%BD%E5%AE%89%23) `86.0K 🔥` `NEW`
1. [武大食堂4元熬夜水日销百斤](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A4%A7%E9%A3%9F%E5%A0%824%E5%85%83%E7%86%AC%E5%A4%9C%E6%B0%B4%E6%97%A5%E9%94%80%E7%99%BE%E6%96%A4%23) `499.5K 🔥` `+127%`
1. [JDG对战狼队](https://s.weibo.com/weibo?q=%23JDG%E5%AF%B9%E6%88%98%E7%8B%BC%E9%98%9F%23) `355.8K 🔥` `+50%`
1. [谁懂妇女能顶半边天的含金量 (Who knows that women can hold up half the sky?)](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%87%82%E5%A6%87%E5%A5%B3%E8%83%BD%E9%A1%B6%E5%8D%8A%E8%BE%B9%E5%A4%A9%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%23) `350.1K 🔥` `+60%`
1. [退出APP显示残忍离开到底谁发明的](https://s.weibo.com/weibo?q=%23%E9%80%80%E5%87%BAAPP%E6%98%BE%E7%A4%BA%E6%AE%8B%E5%BF%8D%E7%A6%BB%E5%BC%80%E5%88%B0%E5%BA%95%E8%B0%81%E5%8F%91%E6%98%8E%E7%9A%84%23) `343.7K 🔥` `+55%`
1. [回避型差评需要一个引导型商家](https://s.weibo.com/weibo?q=%23%E5%9B%9E%E9%81%BF%E5%9E%8B%E5%B7%AE%E8%AF%84%E9%9C%80%E8%A6%81%E4%B8%80%E4%B8%AA%E5%BC%95%E5%AF%BC%E5%9E%8B%E5%95%86%E5%AE%B6%23) `319.8K 🔥` `+189%`
1. [严屹宽一出场皇帝瞬间被衬成公公 (As soon as Yan Yikuan appeared, the emperor was instantly transformed into a father-in-law)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E5%B1%B9%E5%AE%BD%E4%B8%80%E5%87%BA%E5%9C%BA%E7%9A%87%E5%B8%9D%E7%9E%AC%E9%97%B4%E8%A2%AB%E8%A1%AC%E6%88%90%E5%85%AC%E5%85%AC%23) `311.8K 🔥` `+43%`
1. [伊朗选出新最高领袖 (Iran elects new supreme leader)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%80%89%E5%87%BA%E6%96%B0%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%23) `270.0K 🔥` `+29%`
1. [伊朗发起第28波攻势](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E8%B5%B7%E7%AC%AC28%E6%B3%A2%E6%94%BB%E5%8A%BF%23) `187.1K 🔥` `+24%`
1. [逐玉 (Zhuyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `183.7K 🔥` `+22%`
1. [我妈以为的早熟vs实际上的早熟 (What my mother thought was precocious vs. what she actually was)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%A6%88%E4%BB%A5%E4%B8%BA%E7%9A%84%E6%97%A9%E7%86%9Fvs%E5%AE%9E%E9%99%85%E4%B8%8A%E7%9A%84%E6%97%A9%E7%86%9F%23) `118.1K 🔥` `+29%`
1. [童禹坤直播 (Tong Yukun live broadcast)](https://s.weibo.com/weibo?q=%23%E7%AB%A5%E7%A6%B9%E5%9D%A4%E7%9B%B4%E6%92%AD%23) `117.3K 🔥` `+46%`
1. [98岁爷爷在西湖边火了](https://s.weibo.com/weibo?q=%2398%E5%B2%81%E7%88%B7%E7%88%B7%E5%9C%A8%E8%A5%BF%E6%B9%96%E8%BE%B9%E7%81%AB%E4%BA%86%23) `98.1K 🔥` `+29%`
1. [王毅回应两岸统一时间表 (Wang Yi responded to the timetable for cross-Strait reunification)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AF%85%E5%9B%9E%E5%BA%94%E4%B8%A4%E5%B2%B8%E7%BB%9F%E4%B8%80%E6%97%B6%E9%97%B4%E8%A1%A8%23) `1.1M 🔥`
1. [AI龙虾爆火工信部发布高危风险预警](https://s.weibo.com/weibo?q=%23AI%E9%BE%99%E8%99%BE%E7%88%86%E7%81%AB%E5%B7%A5%E4%BF%A1%E9%83%A8%E5%8F%91%E5%B8%83%E9%AB%98%E5%8D%B1%E9%A3%8E%E9%99%A9%E9%A2%84%E8%AD%A6%23) `752.3K 🔥`
1. [Bin获FMVP](https://s.weibo.com/weibo?q=%23Bin%E8%8E%B7FMVP%23) `389.5K 🔥`
1. [多架美军机相继离开韩国基地](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%9E%B6%E7%BE%8E%E5%86%9B%E6%9C%BA%E7%9B%B8%E7%BB%A7%E7%A6%BB%E5%BC%80%E9%9F%A9%E5%9B%BD%E5%9F%BA%E5%9C%B0%23) `388.5K 🔥`
1. [很喜欢用嘿嘿这两个字](https://s.weibo.com/weibo?q=%23%E5%BE%88%E5%96%9C%E6%AC%A2%E7%94%A8%E5%98%BF%E5%98%BF%E8%BF%99%E4%B8%A4%E4%B8%AA%E5%AD%97%23) `382.2K 🔥`
1. [伊朗亮底线 (Iran shows bottom line)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%BA%AE%E5%BA%95%E7%BA%BF%23) `361.1K 🔥`
1. [逐玉走势](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E8%B5%B0%E5%8A%BF%23) `358.7K 🔥`
1. [孔雪儿逐玉出场](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E9%80%90%E7%8E%89%E5%87%BA%E5%9C%BA%23) `348.8K 🔥`
1. [BLG对战JDG](https://s.weibo.com/weibo?q=%23BLG%E5%AF%B9%E6%88%98JDG%23) `336.7K 🔥`
1. [逐玉9集封神了](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%899%E9%9B%86%E5%B0%81%E7%A5%9E%E4%BA%86%23) `328.9K 🔥`
1. [杨紫罗马时装周 (Yang Zi Rome Fashion Week)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%BD%97%E9%A9%AC%E6%97%B6%E8%A3%85%E5%91%A8%23) `222.1K 🔥`
1. [伊朗宣布将采用全新攻击方式](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AE%A3%E5%B8%83%E5%B0%86%E9%87%87%E7%94%A8%E5%85%A8%E6%96%B0%E6%94%BB%E5%87%BB%E6%96%B9%E5%BC%8F%23) `172.4K 🔥`
1. [女子糖尿病不忌口8年变尿毒症 (A woman with diabetes develops uremia in 8 years without tabooing food)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%B3%96%E5%B0%BF%E7%97%85%E4%B8%8D%E5%BF%8C%E5%8F%A38%E5%B9%B4%E5%8F%98%E5%B0%BF%E6%AF%92%E7%97%87%23) `125.1K 🔥`
1. [金智秀新剧韩趋第一](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E6%96%B0%E5%89%A7%E9%9F%A9%E8%B6%8B%E7%AC%AC%E4%B8%80%23) `89.4K 🔥`
1. [妇女节 (women's day)](https://s.weibo.com/weibo?q=%23%E5%A6%87%E5%A5%B3%E8%8A%82%23) `86.3K 🔥`
1. [女子抽中工资翻倍要把产线干停](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8A%BD%E4%B8%AD%E5%B7%A5%E8%B5%84%E7%BF%BB%E5%80%8D%E8%A6%81%E6%8A%8A%E4%BA%A7%E7%BA%BF%E5%B9%B2%E5%81%9C%23) `86.1K 🔥`
1. [时代少年团广州演唱会 (Times Youth League Guangzhou Concert)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%B9%BF%E5%B7%9E%E6%BC%94%E5%94%B1%E4%BC%9A%23) `133.4K 🔥` `-64%`
1. [中国孩子坐警车看表演火爆外网](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%AD%A9%E5%AD%90%E5%9D%90%E8%AD%A6%E8%BD%A6%E7%9C%8B%E8%A1%A8%E6%BC%94%E7%81%AB%E7%88%86%E5%A4%96%E7%BD%91%23) `94.2K 🔥` `-74%`
1. [建议70岁以上农村老人免缴医保](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE70%E5%B2%81%E4%BB%A5%E4%B8%8A%E5%86%9C%E6%9D%91%E8%80%81%E4%BA%BA%E5%85%8D%E7%BC%B4%E5%8C%BB%E4%BF%9D%23) `90.3K 🔥` `-75%`
1. [桃黑黑抽奖 (Peach Hei Hei Lottery)](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E6%8A%BD%E5%A5%96%23) `89.3K 🔥` `-23%`
1. [在北京穿了将近半年的羽绒服](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%8C%97%E4%BA%AC%E7%A9%BF%E4%BA%86%E5%B0%86%E8%BF%91%E5%8D%8A%E5%B9%B4%E7%9A%84%E7%BE%BD%E7%BB%92%E6%9C%8D%23) `87.9K 🔥` `-37%`
1. [BLG夺得优胜者](https://s.weibo.com/weibo?q=%23BLG%E5%A4%BA%E5%BE%97%E4%BC%98%E8%83%9C%E8%80%85%23) `86.2K 🔥` `-40%`
1. [时代少年团直播](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E7%9B%B4%E6%92%AD%23) `86.1K 🔥` `-21%`

Updated at 2026-03-08 21:49:14

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
