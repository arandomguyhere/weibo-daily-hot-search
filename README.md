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

1. [一张物流网跑出中国加速度](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%BC%A0%E7%89%A9%E6%B5%81%E7%BD%91%E8%B7%91%E5%87%BA%E4%B8%AD%E5%9B%BD%E5%8A%A0%E9%80%9F%E5%BA%A6%23) `683.1K 🔥` `NEW`
1. [OPPOFindX10系列今日开售](https://s.weibo.com/weibo?q=%23OPPOFindX10%E7%B3%BB%E5%88%97%E4%BB%8A%E6%97%A5%E5%BC%80%E5%94%AE%23) `676.4K 🔥` `NEW`
1. [林诗栋 打疯了](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B%20%E6%89%93%E7%96%AF%E4%BA%86%23) `386.9K 🔥` `NEW`
1. [吉利AI智充](https://s.weibo.com/weibo?q=%23%E5%90%89%E5%88%A9AI%E6%99%BA%E5%85%85%23) `383.5K 🔥` `NEW`
1. [山姆采购换帅能救选品吗](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E9%87%87%E8%B4%AD%E6%8D%A2%E5%B8%85%E8%83%BD%E6%95%91%E9%80%89%E5%93%81%E5%90%97%23) `269.8K 🔥` `NEW`
1. [王源为了拍汪苏泷同框也是绞尽脑汁](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E4%B8%BA%E4%BA%86%E6%8B%8D%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%90%8C%E6%A1%86%E4%B9%9F%E6%98%AF%E7%BB%9E%E5%B0%BD%E8%84%91%E6%B1%81%23) `268.7K 🔥` `NEW`
1. [专家称美国总统接机非常罕见](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E7%A7%B0%E7%BE%8E%E5%9B%BD%E6%80%BB%E7%BB%9F%E6%8E%A5%E6%9C%BA%E9%9D%9E%E5%B8%B8%E7%BD%95%E8%A7%81%23) `255.4K 🔥` `NEW`
1. [美科技股集体大跌](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%A7%91%E6%8A%80%E8%82%A1%E9%9B%86%E4%BD%93%E5%A4%A7%E8%B7%8C%23) `249.7K 🔥` `NEW`
1. [险遭性侵女子称全身伤口溃烂不愈合](https://s.weibo.com/weibo?q=%23%E9%99%A9%E9%81%AD%E6%80%A7%E4%BE%B5%E5%A5%B3%E5%AD%90%E7%A7%B0%E5%85%A8%E8%BA%AB%E4%BC%A4%E5%8F%A3%E6%BA%83%E7%83%82%E4%B8%8D%E6%84%88%E5%90%88%23) `226.7K 🔥` `NEW`
1. [郭宇欣风波后状态](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AE%87%E6%AC%A3%E9%A3%8E%E6%B3%A2%E5%90%8E%E7%8A%B6%E6%80%81%23) `181.4K 🔥` `NEW`
1. [BLG丹尼因BP分歧发火](https://s.weibo.com/weibo?q=%23BLG%E4%B8%B9%E5%B0%BC%E5%9B%A0BP%E5%88%86%E6%AD%A7%E5%8F%91%E7%81%AB%23) `179.5K 🔥` `NEW`
1. [别说高铁垫坐垫女生矫情](https://s.weibo.com/weibo?q=%23%E5%88%AB%E8%AF%B4%E9%AB%98%E9%93%81%E5%9E%AB%E5%9D%90%E5%9E%AB%E5%A5%B3%E7%94%9F%E7%9F%AB%E6%83%85%23) `178.0K 🔥` `NEW`
1. [田馥甄](https://s.weibo.com/weibo?q=%23%E7%94%B0%E9%A6%A5%E7%94%84%23) `176.0K 🔥` `NEW`
1. [马克龙急了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%85%8B%E9%BE%99%E6%80%A5%E4%BA%86%23) `176.0K 🔥` `NEW`
1. [刘耀文两个未公开视频都带着丁程鑫的水印](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E4%B8%A4%E4%B8%AA%E6%9C%AA%E5%85%AC%E5%BC%80%E8%A7%86%E9%A2%91%E9%83%BD%E5%B8%A6%E7%9D%80%E4%B8%81%E7%A8%8B%E9%91%AB%E7%9A%84%E6%B0%B4%E5%8D%B0%23) `173.4K 🔥` `NEW`
1. [能看出王源不经常玩手机](https://s.weibo.com/weibo?q=%23%E8%83%BD%E7%9C%8B%E5%87%BA%E7%8E%8B%E6%BA%90%E4%B8%8D%E7%BB%8F%E5%B8%B8%E7%8E%A9%E6%89%8B%E6%9C%BA%23) `169.5K 🔥` `NEW`
1. [河南矿山发现金被指作秀员工家属力挺](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E7%9F%BF%E5%B1%B1%E5%8F%91%E7%8E%B0%E9%87%91%E8%A2%AB%E6%8C%87%E4%BD%9C%E7%A7%80%E5%91%98%E5%B7%A5%E5%AE%B6%E5%B1%9E%E5%8A%9B%E6%8C%BA%23) `168.3K 🔥` `NEW`
1. [他以为她吃喜饼只是饿了](https://s.weibo.com/weibo?q=%23%E4%BB%96%E4%BB%A5%E4%B8%BA%E5%A5%B9%E5%90%83%E5%96%9C%E9%A5%BC%E5%8F%AA%E6%98%AF%E9%A5%BF%E4%BA%86%23) `164.4K 🔥` `NEW`
1. [刘耀文只对宋亚轩不叫哥](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E5%8F%AA%E5%AF%B9%E5%AE%8B%E4%BA%9A%E8%BD%A9%E4%B8%8D%E5%8F%AB%E5%93%A5%23) `157.5K 🔥` `NEW`
1. [不二之臣吻戏尺度](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E4%BA%8C%E4%B9%8B%E8%87%A3%E5%90%BB%E6%88%8F%E5%B0%BA%E5%BA%A6%23) `157.0K 🔥` `NEW`
1. [张雨霏刷新中国女子游泳亚运金牌纪录](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%A8%E9%9C%8F%E5%88%B7%E6%96%B0%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E6%B8%B8%E6%B3%B3%E4%BA%9A%E8%BF%90%E9%87%91%E7%89%8C%E7%BA%AA%E5%BD%95%23) `129.6K 🔥` `NEW`
1. [内娱第一女团Red要了](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E7%AC%AC%E4%B8%80%E5%A5%B3%E5%9B%A2Red%E8%A6%81%E4%BA%86%23) `128.5K 🔥` `NEW`
1. [美股集体跳水原因](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%82%A1%E9%9B%86%E4%BD%93%E8%B7%B3%E6%B0%B4%E5%8E%9F%E5%9B%A0%23) `125.8K 🔥` `NEW`
1. [林锦岐迷晕许兰香](https://s.weibo.com/weibo?q=%23%E6%9E%97%E9%94%A6%E5%B2%90%E8%BF%B7%E6%99%95%E8%AE%B8%E5%85%B0%E9%A6%99%23) `124.2K 🔥` `NEW`
1. [许昕说孙颖莎学他](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%98%95%E8%AF%B4%E5%AD%99%E9%A2%96%E8%8E%8E%E5%AD%A6%E4%BB%96%23) `117.9K 🔥` `NEW`
1. [亚运会羽毛球女团决赛](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E7%BE%BD%E6%AF%9B%E7%90%83%E5%A5%B3%E5%9B%A2%E5%86%B3%E8%B5%9B%23) `111.4K 🔥` `NEW`
1. [BLG主教练力竭了](https://s.weibo.com/weibo?q=%23BLG%E4%B8%BB%E6%95%99%E7%BB%83%E5%8A%9B%E7%AB%AD%E4%BA%86%23) `108.8K 🔥` `NEW`
1. [兰香如故姐姐错过了的姻缘三妹妹接住了](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E5%A7%90%E5%A7%90%E9%94%99%E8%BF%87%E4%BA%86%E7%9A%84%E5%A7%BB%E7%BC%98%E4%B8%89%E5%A6%B9%E5%A6%B9%E6%8E%A5%E4%BD%8F%E4%BA%86%23) `98.8K 🔥` `NEW`
1. [女子熬夜抓丈夫出轨确诊阿尔兹海默症](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%86%AC%E5%A4%9C%E6%8A%93%E4%B8%88%E5%A4%AB%E5%87%BA%E8%BD%A8%E7%A1%AE%E8%AF%8A%E9%98%BF%E5%B0%94%E5%85%B9%E6%B5%B7%E9%BB%98%E7%97%87%23) `96.3K 🔥` `NEW`
1. [中美元首半年内实现国事互访](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E5%8D%8A%E5%B9%B4%E5%86%85%E5%AE%9E%E7%8E%B0%E5%9B%BD%E4%BA%8B%E4%BA%92%E8%AE%BF%23) `1.2M 🔥` `+1637%`
1. [中美元首华盛顿会晤](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%83%E9%A6%96%E5%8D%8E%E7%9B%9B%E9%A1%BF%E4%BC%9A%E6%99%A4%23) `993.9K 🔥` `+127%`
1. [特朗普抵达机场](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%8A%B5%E8%BE%BE%E6%9C%BA%E5%9C%BA%23) `649.4K 🔥` `+214%`
1. [降压疫苗要来了](https://s.weibo.com/weibo?q=%23%E9%99%8D%E5%8E%8B%E7%96%AB%E8%8B%97%E8%A6%81%E6%9D%A5%E4%BA%86%23) `545.2K 🔥` `+73%`
1. [豆包员工感慨豆包成边缘产品](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%91%98%E5%B7%A5%E6%84%9F%E6%85%A8%E8%B1%86%E5%8C%85%E6%88%90%E8%BE%B9%E7%BC%98%E4%BA%A7%E5%93%81%23) `362.2K 🔥` `+435%`
1. [花少2搬箱子楼梯实际长这样](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%912%E6%90%AC%E7%AE%B1%E5%AD%90%E6%A5%BC%E6%A2%AF%E5%AE%9E%E9%99%85%E9%95%BF%E8%BF%99%E6%A0%B7%23) `361.2K 🔥` `+174%`
1. [小米18ProMax透明版上手](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B318ProMax%E9%80%8F%E6%98%8E%E7%89%88%E4%B8%8A%E6%89%8B%23) `293.3K 🔥` `+259%`
1. [你们仔细看她的手有着地过吗](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%BB%AC%E4%BB%94%E7%BB%86%E7%9C%8B%E5%A5%B9%E7%9A%84%E6%89%8B%E6%9C%89%E7%9D%80%E5%9C%B0%E8%BF%87%E5%90%97%23) `255.1K 🔥` `+275%`
1. [杨幂骗了全网](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E9%AA%97%E4%BA%86%E5%85%A8%E7%BD%91%23) `175.9K 🔥` `+37%`
1. [3名中国女子在泰遭诱骗锁链囚禁](https://s.weibo.com/weibo?q=%233%E5%90%8D%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E5%9C%A8%E6%B3%B0%E9%81%AD%E8%AF%B1%E9%AA%97%E9%94%81%E9%93%BE%E5%9B%9A%E7%A6%81%23) `174.1K 🔥` `+309%`
1. [加拿大游客称中国街头喝酒自由](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%8B%BF%E5%A4%A7%E6%B8%B8%E5%AE%A2%E7%A7%B0%E4%B8%AD%E5%9B%BD%E8%A1%97%E5%A4%B4%E5%96%9D%E9%85%92%E8%87%AA%E7%94%B1%23) `172.4K 🔥` `+359%`
1. [男友疑似拿别人外卖女生懵了](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%8F%8B%E7%96%91%E4%BC%BC%E6%8B%BF%E5%88%AB%E4%BA%BA%E5%A4%96%E5%8D%96%E5%A5%B3%E7%94%9F%E6%87%B5%E4%BA%86%23) `170.7K 🔥` `+295%`
1. [一个视频解决所有铁锅粘锅问题](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E8%A7%86%E9%A2%91%E8%A7%A3%E5%86%B3%E6%89%80%E6%9C%89%E9%93%81%E9%94%85%E7%B2%98%E9%94%85%E9%97%AE%E9%A2%98%23) `168.1K 🔥` `+40%`
1. [日本男团3比0晋级决赛](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%94%B7%E5%9B%A23%E6%AF%940%E6%99%8B%E7%BA%A7%E5%86%B3%E8%B5%9B%23) `164.8K 🔥` `+260%`
1. [小米电视](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E7%94%B5%E8%A7%86%23) `163.5K 🔥` `+152%`
1. [冯小刚回应垃圾观众言论](https://s.weibo.com/weibo?q=%23%E5%86%AF%E5%B0%8F%E5%88%9A%E5%9B%9E%E5%BA%94%E5%9E%83%E5%9C%BE%E8%A7%82%E4%BC%97%E8%A8%80%E8%AE%BA%23) `128.4K 🔥` `+89%`
1. [小米手环11](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%89%8B%E7%8E%AF11%23) `127.3K 🔥` `+162%`
1. [猫咪见到已故主人的双胞胎兄弟](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%92%AA%E8%A7%81%E5%88%B0%E5%B7%B2%E6%95%85%E4%B8%BB%E4%BA%BA%E7%9A%84%E5%8F%8C%E8%83%9E%E8%83%8E%E5%85%84%E5%BC%9F%23) `126.9K 🔥` `+201%`
1. [院长说北京电影学院不生产大明星](https://s.weibo.com/weibo?q=%23%E9%99%A2%E9%95%BF%E8%AF%B4%E5%8C%97%E4%BA%AC%E7%94%B5%E5%BD%B1%E5%AD%A6%E9%99%A2%E4%B8%8D%E7%94%9F%E4%BA%A7%E5%A4%A7%E6%98%8E%E6%98%9F%23) `117.1K 🔥` `+110%`
1. [中国女子回应在泰国遭囚禁侵犯](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E5%9B%9E%E5%BA%94%E5%9C%A8%E6%B3%B0%E5%9B%BD%E9%81%AD%E5%9B%9A%E7%A6%81%E4%BE%B5%E7%8A%AF%23) `111.7K 🔥` `+172%`
1. [泰警方解救3名被囚禁中国女子](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E8%AD%A6%E6%96%B9%E8%A7%A3%E6%95%913%E5%90%8D%E8%A2%AB%E5%9B%9A%E7%A6%81%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%23) `97.0K 🔥` `+81%`

Updated at 2026-09-24 08:36:03

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
