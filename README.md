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

1. [把保障人民健康融入各项政策](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E4%BF%9D%E9%9A%9C%E4%BA%BA%E6%B0%91%E5%81%A5%E5%BA%B7%E8%9E%8D%E5%85%A5%E5%90%84%E9%A1%B9%E6%94%BF%E7%AD%96%23) `480.7K 🔥` `NEW`
1. [全体星店长喊你上京东11.11领红包](https://s.weibo.com/weibo?q=%23%E5%85%A8%E4%BD%93%E6%98%9F%E5%BA%97%E9%95%BF%E5%96%8A%E4%BD%A0%E4%B8%8A%E4%BA%AC%E4%B8%9C11.11%E9%A2%86%E7%BA%A2%E5%8C%85%23) `475.9K 🔥` `NEW`
1. [东北生化危机不知该怕还是笑](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%8C%97%E7%94%9F%E5%8C%96%E5%8D%B1%E6%9C%BA%E4%B8%8D%E7%9F%A5%E8%AF%A5%E6%80%95%E8%BF%98%E6%98%AF%E7%AC%91%23) `183.8K 🔥` `NEW`
1. [研究生欠十一个网贷全面逾期](https://s.weibo.com/weibo?q=%23%E7%A0%94%E7%A9%B6%E7%94%9F%E6%AC%A0%E5%8D%81%E4%B8%80%E4%B8%AA%E7%BD%91%E8%B4%B7%E5%85%A8%E9%9D%A2%E9%80%BE%E6%9C%9F%23) `138.9K 🔥` `NEW`
1. [国行iPhone接入通义千问](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%A1%8CiPhone%E6%8E%A5%E5%85%A5%E9%80%9A%E4%B9%89%E5%8D%83%E9%97%AE%23) `128.5K 🔥` `NEW`
1. [闫妮做宣传而已太累了可不好](https://s.weibo.com/weibo?q=%23%E9%97%AB%E5%A6%AE%E5%81%9A%E5%AE%A3%E4%BC%A0%E8%80%8C%E5%B7%B2%E5%A4%AA%E7%B4%AF%E4%BA%86%E5%8F%AF%E4%B8%8D%E5%A5%BD%23) `125.2K 🔥` `NEW`
1. [96岁老人独自坐43小时进西藏](https://s.weibo.com/weibo?q=%2396%E5%B2%81%E8%80%81%E4%BA%BA%E7%8B%AC%E8%87%AA%E5%9D%9043%E5%B0%8F%E6%97%B6%E8%BF%9B%E8%A5%BF%E8%97%8F%23) `125.1K 🔥` `NEW`
1. [周杰伦在墨尔本街头弹钢琴](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E5%9C%A8%E5%A2%A8%E5%B0%94%E6%9C%AC%E8%A1%97%E5%A4%B4%E5%BC%B9%E9%92%A2%E7%90%B4%23) `125.1K 🔥` `NEW`
1. [京津冀交界百米差别挺大](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E6%B4%A5%E5%86%80%E4%BA%A4%E7%95%8C%E7%99%BE%E7%B1%B3%E5%B7%AE%E5%88%AB%E6%8C%BA%E5%A4%A7%23) `125.0K 🔥` `NEW`
1. [柳州街头6元一份的糯米饭](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E5%B7%9E%E8%A1%97%E5%A4%B46%E5%85%83%E4%B8%80%E4%BB%BD%E7%9A%84%E7%B3%AF%E7%B1%B3%E9%A5%AD%23) `125.0K 🔥` `NEW`
1. [林茨3比6利物浦](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%8C%A83%E6%AF%946%E5%88%A9%E7%89%A9%E6%B5%A6%23) `124.9K 🔥` `NEW`
1. [星链限速致乌军多个任务中断](https://s.weibo.com/weibo?q=%23%E6%98%9F%E9%93%BE%E9%99%90%E9%80%9F%E8%87%B4%E4%B9%8C%E5%86%9B%E5%A4%9A%E4%B8%AA%E4%BB%BB%E5%8A%A1%E4%B8%AD%E6%96%AD%23) `124.9K 🔥` `NEW`
1. [与辉同行卫生巾30万单秒空](https://s.weibo.com/weibo?q=%23%E4%B8%8E%E8%BE%89%E5%90%8C%E8%A1%8C%E5%8D%AB%E7%94%9F%E5%B7%BE30%E4%B8%87%E5%8D%95%E7%A7%92%E7%A9%BA%23) `124.9K 🔥` `NEW`
1. [MLB美职棒大联盟](https://s.weibo.com/weibo?q=%23MLB%E7%BE%8E%E8%81%8C%E6%A3%92%E5%A4%A7%E8%81%94%E7%9B%9F%23) `124.8K 🔥` `NEW`
1. [入职第一天因截图社死](https://s.weibo.com/weibo?q=%23%E5%85%A5%E8%81%8C%E7%AC%AC%E4%B8%80%E5%A4%A9%E5%9B%A0%E6%88%AA%E5%9B%BE%E7%A4%BE%E6%AD%BB%23) `866.3K 🔥` `+409%`
1. [好一个乖乖女热度登顶](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E4%B8%80%E4%B8%AA%E4%B9%96%E4%B9%96%E5%A5%B3%E7%83%AD%E5%BA%A6%E7%99%BB%E9%A1%B6%23) `639.8K 🔥` `+469%`
1. [黄金白银断崖式大跌](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%99%BD%E9%93%B6%E6%96%AD%E5%B4%96%E5%BC%8F%E5%A4%A7%E8%B7%8C%23) `462.8K 🔥` `+1820%`
1. [好一个乖乖女](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E4%B8%80%E4%B8%AA%E4%B9%96%E4%B9%96%E5%A5%B3%23) `268.4K 🔥` `+491%`
1. [7天6夜堵截蒙古国火灾330余公里](https://s.weibo.com/weibo?q=%237%E5%A4%A96%E5%A4%9C%E5%A0%B5%E6%88%AA%E8%92%99%E5%8F%A4%E5%9B%BD%E7%81%AB%E7%81%BE330%E4%BD%99%E5%85%AC%E9%87%8C%23) `235.3K 🔥` `+1047%`
1. [警惕售卖人脸制作AI形象风险](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%83%95%E5%94%AE%E5%8D%96%E4%BA%BA%E8%84%B8%E5%88%B6%E4%BD%9CAI%E5%BD%A2%E8%B1%A1%E9%A3%8E%E9%99%A9%23) `231.2K 🔥` `+424%`
1. [男子因经济拮据心生怨愤杀陌生女子](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%A0%E7%BB%8F%E6%B5%8E%E6%8B%AE%E6%8D%AE%E5%BF%83%E7%94%9F%E6%80%A8%E6%84%A4%E6%9D%80%E9%99%8C%E7%94%9F%E5%A5%B3%E5%AD%90%23) `194.1K 🔥` `+255%`
1. [徐梦洁演技口碑](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%B4%81%E6%BC%94%E6%8A%80%E5%8F%A3%E7%A2%91%23) `152.7K 🔥` `+533%`
1. [陈小春](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%8F%E6%98%A5%23) `148.5K 🔥` `+236%`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `134.2K 🔥` `+249%`
1. [aijing母亲道歉](https://s.weibo.com/weibo?q=%23aijing%E6%AF%8D%E4%BA%B2%E9%81%93%E6%AD%89%23) `129.0K 🔥` `+198%`
1. [陈小春和疑似弟弟耳朵都有个窝痕](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%8F%E6%98%A5%E5%92%8C%E7%96%91%E4%BC%BC%E5%BC%9F%E5%BC%9F%E8%80%B3%E6%9C%B5%E9%83%BD%E6%9C%89%E4%B8%AA%E7%AA%9D%E7%97%95%23) `128.8K 🔥` `+267%`
1. [马来西亚偶遇王一博](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%9D%A5%E8%A5%BF%E4%BA%9A%E5%81%B6%E9%81%87%E7%8E%8B%E4%B8%80%E5%8D%9A%23) `128.7K 🔥` `+544%`
1. [虎跳峡观景台跳江者尚未打捞到](https://s.weibo.com/weibo?q=%23%E8%99%8E%E8%B7%B3%E5%B3%A1%E8%A7%82%E6%99%AF%E5%8F%B0%E8%B7%B3%E6%B1%9F%E8%80%85%E5%B0%9A%E6%9C%AA%E6%89%93%E6%8D%9E%E5%88%B0%23) `128.2K 🔥` `+217%`
1. [CPI](https://s.weibo.com/weibo?q=%23CPI%23) `127.9K 🔥` `+345%`
1. [女孩月经量大补铁食补](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%9C%88%E7%BB%8F%E9%87%8F%E5%A4%A7%E8%A1%A5%E9%93%81%E9%A3%9F%E8%A1%A5%23) `127.7K 🔥` `+426%`
1. [母亲没争抚养权想住儿子家](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E6%B2%A1%E4%BA%89%E6%8A%9A%E5%85%BB%E6%9D%83%E6%83%B3%E4%BD%8F%E5%84%BF%E5%AD%90%E5%AE%B6%23) `127.4K 🔥` `+344%`
1. [狗被提着一路偷吃油条没被发现](https://s.weibo.com/weibo?q=%23%E7%8B%97%E8%A2%AB%E6%8F%90%E7%9D%80%E4%B8%80%E8%B7%AF%E5%81%B7%E5%90%83%E6%B2%B9%E6%9D%A1%E6%B2%A1%E8%A2%AB%E5%8F%91%E7%8E%B0%23) `127.4K 🔥` `+348%`
1. [人赚不到认知以外的钱](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E8%B5%9A%E4%B8%8D%E5%88%B0%E8%AE%A4%E7%9F%A5%E4%BB%A5%E5%A4%96%E7%9A%84%E9%92%B1%23) `127.0K 🔥` `+343%`
1. [莫氏鸡煲珠海店开业未满半年暂停营业](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E7%8F%A0%E6%B5%B7%E5%BA%97%E5%BC%80%E4%B8%9A%E6%9C%AA%E6%BB%A1%E5%8D%8A%E5%B9%B4%E6%9A%82%E5%81%9C%E8%90%A5%E4%B8%9A%23) `126.8K 🔥` `+538%`
1. [原来农村的柴火灶已经这么有型了](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%86%9C%E6%9D%91%E7%9A%84%E6%9F%B4%E7%81%AB%E7%81%B6%E5%B7%B2%E7%BB%8F%E8%BF%99%E4%B9%88%E6%9C%89%E5%9E%8B%E4%BA%86%23) `126.6K 🔥` `+427%`
1. [低血糖女生以为不吃饭只会饿](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E8%A1%80%E7%B3%96%E5%A5%B3%E7%94%9F%E4%BB%A5%E4%B8%BA%E4%B8%8D%E5%90%83%E9%A5%AD%E5%8F%AA%E4%BC%9A%E9%A5%BF%23) `126.3K 🔥` `+344%`
1. [曼城vs巴黎圣日耳曼](https://s.weibo.com/weibo?q=%23%E6%9B%BC%E5%9F%8Evs%E5%B7%B4%E9%BB%8E%E5%9C%A3%E6%97%A5%E8%80%B3%E6%9B%BC%23) `126.1K 🔥` `+341%`
1. [盛艾敬朋友也发声了](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E8%89%BE%E6%95%AC%E6%9C%8B%E5%8F%8B%E4%B9%9F%E5%8F%91%E5%A3%B0%E4%BA%86%23) `126.0K 🔥` `+228%`
1. [快递车我管你这个那个的](https://s.weibo.com/weibo?q=%23%E5%BF%AB%E9%80%92%E8%BD%A6%E6%88%91%E7%AE%A1%E4%BD%A0%E8%BF%99%E4%B8%AA%E9%82%A3%E4%B8%AA%E7%9A%84%23) `125.6K 🔥` `+430%`
1. [被白女的服美役程度震惊到了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%99%BD%E5%A5%B3%E7%9A%84%E6%9C%8D%E7%BE%8E%E5%BD%B9%E7%A8%8B%E5%BA%A6%E9%9C%87%E6%83%8A%E5%88%B0%E4%BA%86%23) `125.3K 🔥` `+417%`
1. [雷军官宣小米汽车北方冬季六重保障](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%AE%98%E5%AE%A3%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%E5%8C%97%E6%96%B9%E5%86%AC%E5%AD%A3%E5%85%AD%E9%87%8D%E4%BF%9D%E9%9A%9C%23) `125.1K 🔥` `+420%`
1. [胡先煦 刁卓](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6%20%E5%88%81%E5%8D%93%23) `125.0K 🔥` `+383%`
1. [三十岁真的没啥好焦虑](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%8D%81%E5%B2%81%E7%9C%9F%E7%9A%84%E6%B2%A1%E5%95%A5%E5%A5%BD%E7%84%A6%E8%99%91%23) `125.0K 🔥` `+340%`
1. [iPhoneDuo维修价格出炉](https://s.weibo.com/weibo?q=%23iPhoneDuo%E7%BB%B4%E4%BF%AE%E4%BB%B7%E6%A0%BC%E5%87%BA%E7%82%89%23) `125.0K 🔥` `+525%`
1. [熬夜的账身体都在记着](https://s.weibo.com/weibo?q=%23%E7%86%AC%E5%A4%9C%E7%9A%84%E8%B4%A6%E8%BA%AB%E4%BD%93%E9%83%BD%E5%9C%A8%E8%AE%B0%E7%9D%80%23) `124.9K 🔥` `+338%`
1. [郑钦文火遍外网](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E7%81%AB%E9%81%8D%E5%A4%96%E7%BD%91%23) `124.9K 🔥` `+308%`
1. [萨巴伦卡武网爆冷出局](https://s.weibo.com/weibo?q=%23%E8%90%A8%E5%B7%B4%E4%BC%A6%E5%8D%A1%E6%AD%A6%E7%BD%91%E7%88%86%E5%86%B7%E5%87%BA%E5%B1%80%23) `124.8K 🔥` `+424%`
1. [贾静雯吃饭的菜居然全是蛋白质](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E9%9D%99%E9%9B%AF%E5%90%83%E9%A5%AD%E7%9A%84%E8%8F%9C%E5%B1%85%E7%84%B6%E5%85%A8%E6%98%AF%E8%9B%8B%E7%99%BD%E8%B4%A8%23) `124.8K 🔥` `+355%`
1. [李吉妮2比1萨巴伦卡](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%90%89%E5%A6%AE2%E6%AF%941%E8%90%A8%E5%B7%B4%E4%BC%A6%E5%8D%A1%23) `124.8K 🔥` `+538%`
1. [iPhoneDuo早鸟包重新上架](https://s.weibo.com/weibo?q=%23iPhoneDuo%E6%97%A9%E9%B8%9F%E5%8C%85%E9%87%8D%E6%96%B0%E4%B8%8A%E6%9E%B6%23) `124.7K 🔥`

Updated at 2026-10-15 07:27:13

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
