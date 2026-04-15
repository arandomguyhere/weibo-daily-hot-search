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

1. [第1天入职第2天就出国 (On the first day of employment, he left the country on the second day)](https://s.weibo.com/weibo?q=%23%E7%AC%AC1%E5%A4%A9%E5%85%A5%E8%81%8C%E7%AC%AC2%E5%A4%A9%E5%B0%B1%E5%87%BA%E5%9B%BD%23) `1.1M 🔥` `NEW`
1. [网民平均每人每天刷视频超200分钟](https://s.weibo.com/weibo?q=%23%E7%BD%91%E6%B0%91%E5%B9%B3%E5%9D%87%E6%AF%8F%E4%BA%BA%E6%AF%8F%E5%A4%A9%E5%88%B7%E8%A7%86%E9%A2%91%E8%B6%85200%E5%88%86%E9%92%9F%23) `625.0K 🔥` `NEW`
1. [美团会员无限次骑行](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%A2%E4%BC%9A%E5%91%98%E6%97%A0%E9%99%90%E6%AC%A1%E9%AA%91%E8%A1%8C%23) `561.6K 🔥` `NEW`
1. [2026中国大学排名](https://s.weibo.com/weibo?q=%232026%E4%B8%AD%E5%9B%BD%E5%A4%A7%E5%AD%A6%E6%8E%92%E5%90%8D%23) `495.9K 🔥` `NEW`
1. [钟汉良居然抱过小时候的郭晓婷](https://s.weibo.com/weibo?q=%23%E9%92%9F%E6%B1%89%E8%89%AF%E5%B1%85%E7%84%B6%E6%8A%B1%E8%BF%87%E5%B0%8F%E6%97%B6%E5%80%99%E7%9A%84%E9%83%AD%E6%99%93%E5%A9%B7%23) `441.9K 🔥` `NEW`
1. [成都凶宅第三次拍卖拍出98.6万](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E5%87%B6%E5%AE%85%E7%AC%AC%E4%B8%89%E6%AC%A1%E6%8B%8D%E5%8D%96%E6%8B%8D%E5%87%BA98.6%E4%B8%87%23) `234.5K 🔥` `NEW`
1. [74岁老太杀害73岁老太后曾误导办案](https://s.weibo.com/weibo?q=%2374%E5%B2%81%E8%80%81%E5%A4%AA%E6%9D%80%E5%AE%B373%E5%B2%81%E8%80%81%E5%A4%AA%E5%90%8E%E6%9B%BE%E8%AF%AF%E5%AF%BC%E5%8A%9E%E6%A1%88%23) `132.4K 🔥` `NEW`
1. [痞幼胖了17斤](https://s.weibo.com/weibo?q=%23%E7%97%9E%E5%B9%BC%E8%83%96%E4%BA%8617%E6%96%A4%23) `132.4K 🔥` `NEW`
1. [特朗普震惊意大利总理不帮美国](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E9%9C%87%E6%83%8A%E6%84%8F%E5%A4%A7%E5%88%A9%E6%80%BB%E7%90%86%E4%B8%8D%E5%B8%AE%E7%BE%8E%E5%9B%BD%23) `132.3K 🔥` `NEW`
1. [罗志祥举日期为自己辟谣](https://s.weibo.com/weibo?q=%23%E7%BD%97%E5%BF%97%E7%A5%A5%E4%B8%BE%E6%97%A5%E6%9C%9F%E4%B8%BA%E8%87%AA%E5%B7%B1%E8%BE%9F%E8%B0%A3%23) `132.3K 🔥` `NEW`
1. [张婉婷自曝妈妈不是亲生母亲 (Zhang Wanting revealed that her mother is not her biological mother)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%89%E5%A9%B7%E8%87%AA%E6%9B%9D%E5%A6%88%E5%A6%88%E4%B8%8D%E6%98%AF%E4%BA%B2%E7%94%9F%E6%AF%8D%E4%BA%B2%23) `132.2K 🔥` `NEW`
1. [三星阔屏三折叠手机曝光](https://s.weibo.com/weibo?q=%23%E4%B8%89%E6%98%9F%E9%98%94%E5%B1%8F%E4%B8%89%E6%8A%98%E5%8F%A0%E6%89%8B%E6%9C%BA%E6%9B%9D%E5%85%89%23) `132.1K 🔥` `NEW`
1. [首发叶舒华恋情者已道歉](https://s.weibo.com/weibo?q=%23%E9%A6%96%E5%8F%91%E5%8F%B6%E8%88%92%E5%8D%8E%E6%81%8B%E6%83%85%E8%80%85%E5%B7%B2%E9%81%93%E6%AD%89%23) `132.1K 🔥` `NEW`
1. [肝癌症状常常被误以为是太累](https://s.weibo.com/weibo?q=%23%E8%82%9D%E7%99%8C%E7%97%87%E7%8A%B6%E5%B8%B8%E5%B8%B8%E8%A2%AB%E8%AF%AF%E4%BB%A5%E4%B8%BA%E6%98%AF%E5%A4%AA%E7%B4%AF%23) `132.1K 🔥` `NEW`
1. [谢娜发文说手抖](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%8F%91%E6%96%87%E8%AF%B4%E6%89%8B%E6%8A%96%23) `132.0K 🔥` `NEW`
1. [曾沛慈 毛巾包头](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%20%E6%AF%9B%E5%B7%BE%E5%8C%85%E5%A4%B4%23) `126.9K 🔥` `NEW`
1. [2女子遭高压水枪狂喷官方将调查](https://s.weibo.com/weibo?q=%232%E5%A5%B3%E5%AD%90%E9%81%AD%E9%AB%98%E5%8E%8B%E6%B0%B4%E6%9E%AA%E7%8B%82%E5%96%B7%E5%AE%98%E6%96%B9%E5%B0%86%E8%B0%83%E6%9F%A5%23) `116.4K 🔥` `NEW`
1. [蜜语纪](https://s.weibo.com/weibo?q=%23%E8%9C%9C%E8%AF%AD%E7%BA%AA%23) `115.7K 🔥` `NEW`
1. [何润东接上王者荣耀商务了](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E6%8E%A5%E4%B8%8A%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E5%95%86%E5%8A%A1%E4%BA%86%23) `107.2K 🔥` `NEW`
1. [向太全款买地写郭碧婷名下](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E5%85%A8%E6%AC%BE%E4%B9%B0%E5%9C%B0%E5%86%99%E9%83%AD%E7%A2%A7%E5%A9%B7%E5%90%8D%E4%B8%8B%23) `106.6K 🔥` `NEW`
1. [马嘉祺点到发现重名 (Ma Jiaqi clicked and found the same name)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E7%82%B9%E5%88%B0%E5%8F%91%E7%8E%B0%E9%87%8D%E5%90%8D%23) `105.0K 🔥` `NEW`
1. [韩国存储芯片重大风险](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%AD%98%E5%82%A8%E8%8A%AF%E7%89%87%E9%87%8D%E5%A4%A7%E9%A3%8E%E9%99%A9%23) `104.7K 🔥` `NEW`
1. [哪个艺人授权AI了](https://s.weibo.com/weibo?q=%23%E5%93%AA%E4%B8%AA%E8%89%BA%E4%BA%BA%E6%8E%88%E6%9D%83AI%E4%BA%86%23) `103.0K 🔥` `NEW`
1. [郑丽文访陆返台后真情流露](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%BD%E6%96%87%E8%AE%BF%E9%99%86%E8%BF%94%E5%8F%B0%E5%90%8E%E7%9C%9F%E6%83%85%E6%B5%81%E9%9C%B2%23) `86.6K 🔥` `NEW`
1. [三国是外国人最认的中国ip](https://s.weibo.com/weibo?q=%23%E4%B8%89%E5%9B%BD%E6%98%AF%E5%A4%96%E5%9B%BD%E4%BA%BA%E6%9C%80%E8%AE%A4%E7%9A%84%E4%B8%AD%E5%9B%BDip%23) `82.0K 🔥` `NEW`
1. [k总要当爸爸了](https://s.weibo.com/weibo?q=%23k%E6%80%BB%E8%A6%81%E5%BD%93%E7%88%B8%E7%88%B8%E4%BA%86%23) `81.9K 🔥` `NEW`
1. [Yami 抱头痛哭](https://s.weibo.com/weibo?q=%23Yami%20%E6%8A%B1%E5%A4%B4%E7%97%9B%E5%93%AD%23) `80.8K 🔥` `NEW`
1. [文章面馆周边餐厅店长发声](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%AB%A0%E9%9D%A2%E9%A6%86%E5%91%A8%E8%BE%B9%E9%A4%90%E5%8E%85%E5%BA%97%E9%95%BF%E5%8F%91%E5%A3%B0%23) `76.7K 🔥` `NEW`
1. [加拿大等10国联合声明](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%8B%BF%E5%A4%A7%E7%AD%8910%E5%9B%BD%E8%81%94%E5%90%88%E5%A3%B0%E6%98%8E%23) `72.1K 🔥` `NEW`
1. [TFBOYS的前缀还在](https://s.weibo.com/weibo?q=%23TFBOYS%E7%9A%84%E5%89%8D%E7%BC%80%E8%BF%98%E5%9C%A8%23) `68.9K 🔥` `NEW`
1. [民政局回应博主帮扶凉山女孩 (Civil Affairs Bureau responds to blogger’s support for Liangshan girls)](https://s.weibo.com/weibo?q=%23%E6%B0%91%E6%94%BF%E5%B1%80%E5%9B%9E%E5%BA%94%E5%8D%9A%E4%B8%BB%E5%B8%AE%E6%89%B6%E5%87%89%E5%B1%B1%E5%A5%B3%E5%AD%A9%23) `67.2K 🔥` `NEW`
1. [萨尔队告别致敬樊振东](https://s.weibo.com/weibo?q=%23%E8%90%A8%E5%B0%94%E9%98%9F%E5%91%8A%E5%88%AB%E8%87%B4%E6%95%AC%E6%A8%8A%E6%8C%AF%E4%B8%9C%23) `65.1K 🔥` `NEW`
1. [我旅游不跟三种人出去](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%97%85%E6%B8%B8%E4%B8%8D%E8%B7%9F%E4%B8%89%E7%A7%8D%E4%BA%BA%E5%87%BA%E5%8E%BB%23) `64.0K 🔥` `NEW`
1. [五一档电影](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E6%A1%A3%E7%94%B5%E5%BD%B1%23) `60.8K 🔥` `NEW`
1. [韩国存储芯片面临重大风险](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%AD%98%E5%82%A8%E8%8A%AF%E7%89%87%E9%9D%A2%E4%B8%B4%E9%87%8D%E5%A4%A7%E9%A3%8E%E9%99%A9%23) `60.7K 🔥` `NEW`
1. [洛阳这牡丹长得菜里菜气](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E9%98%B3%E8%BF%99%E7%89%A1%E4%B8%B9%E9%95%BF%E5%BE%97%E8%8F%9C%E9%87%8C%E8%8F%9C%E6%B0%94%23) `60.4K 🔥` `NEW`
1. [谢娜演唱会门票秒罄](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E9%97%A8%E7%A5%A8%E7%A7%92%E7%BD%84%23) `543.7K 🔥` `+242%`
1. [女装模特能不能多用些普通人](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E8%A3%85%E6%A8%A1%E7%89%B9%E8%83%BD%E4%B8%8D%E8%83%BD%E5%A4%9A%E7%94%A8%E4%BA%9B%E6%99%AE%E9%80%9A%E4%BA%BA%23) `106.7K 🔥` `+52%`
1. [腾势Z9GT首登时尚顶刊 (Denza Z9GT appears in top fashion magazine for the first time)](https://s.weibo.com/weibo?q=%23%E8%85%BE%E5%8A%BFZ9GT%E9%A6%96%E7%99%BB%E6%97%B6%E5%B0%9A%E9%A1%B6%E5%88%8A%23) `412.8K 🔥`
1. [何润东cos项羽](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9Ccos%E9%A1%B9%E7%BE%BD%23) `132.1K 🔥`
1. [驻外人员嫖娼遭仙人跳出卖国家秘密](https://s.weibo.com/weibo?q=%23%E9%A9%BB%E5%A4%96%E4%BA%BA%E5%91%98%E5%AB%96%E5%A8%BC%E9%81%AD%E4%BB%99%E4%BA%BA%E8%B7%B3%E5%87%BA%E5%8D%96%E5%9B%BD%E5%AE%B6%E7%A7%98%E5%AF%86%23) `764.9K 🔥` `-28%`
1. [王者荣耀 (King of Glory)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `212.2K 🔥` `-28%`
1. [霍尔木兹堵不住中国](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E5%A0%B5%E4%B8%8D%E4%BD%8F%E4%B8%AD%E5%9B%BD%23) `158.6K 🔥` `-41%`
1. [张雪回应交警打鸡血质问 (Zhang Xue responded to the traffic police's questioning)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%9B%9E%E5%BA%94%E4%BA%A4%E8%AD%A6%E6%89%93%E9%B8%A1%E8%A1%80%E8%B4%A8%E9%97%AE%23) `132.5K 🔥` `-82%`
1. [魏晨儿子都这么大了](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E6%99%A8%E5%84%BF%E5%AD%90%E9%83%BD%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `132.4K 🔥` `-21%`
1. [孙红雷连夜关闭了人脸支付](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%BA%A2%E9%9B%B7%E8%BF%9E%E5%A4%9C%E5%85%B3%E9%97%AD%E4%BA%86%E4%BA%BA%E8%84%B8%E6%94%AF%E4%BB%98%23) `132.3K 🔥` `-21%`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `132.3K 🔥` `-21%`
1. [李小冉 舞蹈界失去了一个无关紧要的人 (Li Xiaoran, the dance world has lost an insignificant person)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E8%88%9E%E8%B9%88%E7%95%8C%E5%A4%B1%E5%8E%BB%E4%BA%86%E4%B8%80%E4%B8%AA%E6%97%A0%E5%85%B3%E7%B4%A7%E8%A6%81%E7%9A%84%E4%BA%BA%23) `132.2K 🔥` `-55%`
1. [森碟18岁了](https://s.weibo.com/weibo?q=%23%E6%A3%AE%E7%A2%9F18%E5%B2%81%E4%BA%86%23) `98.5K 🔥` `-41%`
1. [B太帮扶大山女孩用苹果手机](https://s.weibo.com/weibo?q=%23B%E5%A4%AA%E5%B8%AE%E6%89%B6%E5%A4%A7%E5%B1%B1%E5%A5%B3%E5%AD%A9%E7%94%A8%E8%8B%B9%E6%9E%9C%E6%89%8B%E6%9C%BA%23) `82.9K 🔥` `-55%`
1. [李昀锐关晓彤牵手剧宣](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%85%B3%E6%99%93%E5%BD%A4%E7%89%B5%E6%89%8B%E5%89%A7%E5%AE%A3%23) `82.1K 🔥` `-51%`
1. [金立创始人被曝在印尼卖家具](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%AB%8B%E5%88%9B%E5%A7%8B%E4%BA%BA%E8%A2%AB%E6%9B%9D%E5%9C%A8%E5%8D%B0%E5%B0%BC%E5%8D%96%E5%AE%B6%E5%85%B7%23) `74.1K 🔥` `-46%`

Updated at 2026-04-15 16:56:30

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
