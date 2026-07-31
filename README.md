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

1. [连云港火灾丈夫大喊不要喷水 (Lianyungang fire: Husband yells not to spray water)](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E4%BA%91%E6%B8%AF%E7%81%AB%E7%81%BE%E4%B8%88%E5%A4%AB%E5%A4%A7%E5%96%8A%E4%B8%8D%E8%A6%81%E5%96%B7%E6%B0%B4%23) `3.5M 🔥` `NEW`
1. [连云港消防 水枪喷水](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E4%BA%91%E6%B8%AF%E6%B6%88%E9%98%B2%20%E6%B0%B4%E6%9E%AA%E5%96%B7%E6%B0%B4%23) `1.1M 🔥` `NEW`
1. [小米澎程SUV首发评测](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8BSUV%E9%A6%96%E5%8F%91%E8%AF%84%E6%B5%8B%23) `701.3K 🔥` `NEW`
1. [连云港火灾女童父亲成功逃生](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E4%BA%91%E6%B8%AF%E7%81%AB%E7%81%BE%E5%A5%B3%E7%AB%A5%E7%88%B6%E4%BA%B2%E6%88%90%E5%8A%9F%E9%80%83%E7%94%9F%23) `635.5K 🔥` `NEW`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `590.9K 🔥` `NEW`
1. [千万不要把自己的身体当做耗材](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E6%8A%8A%E8%87%AA%E5%B7%B1%E7%9A%84%E8%BA%AB%E4%BD%93%E5%BD%93%E5%81%9A%E8%80%97%E6%9D%90%23) `590.4K 🔥` `NEW`
1. [蜘蛛侠带飞暑期档](https://s.weibo.com/weibo?q=%23%E8%9C%98%E8%9B%9B%E4%BE%A0%E5%B8%A6%E9%A3%9E%E6%9A%91%E6%9C%9F%E6%A1%A3%23) `587.2K 🔥` `NEW`
1. [高管爸爸教孩子只交条件好的人](https://s.weibo.com/weibo?q=%23%E9%AB%98%E7%AE%A1%E7%88%B8%E7%88%B8%E6%95%99%E5%AD%A9%E5%AD%90%E5%8F%AA%E4%BA%A4%E6%9D%A1%E4%BB%B6%E5%A5%BD%E7%9A%84%E4%BA%BA%23) `584.6K 🔥` `NEW`
1. [BLG战胜WE](https://s.weibo.com/weibo?q=%23BLG%E6%88%98%E8%83%9CWE%23) `582.4K 🔥` `NEW`
1. [无畏赵怀真打野](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E8%B5%B5%E6%80%80%E7%9C%9F%E6%89%93%E9%87%8E%23) `580.4K 🔥` `NEW`
1. [王楚钦3比0龙宇 (Wang Chuqin 3-0 Long Yu)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A63%E6%AF%940%E9%BE%99%E5%AE%87%23) `572.3K 🔥` `NEW`
1. [连云港火灾坠楼女童身亡](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E4%BA%91%E6%B8%AF%E7%81%AB%E7%81%BE%E5%9D%A0%E6%A5%BC%E5%A5%B3%E7%AB%A5%E8%BA%AB%E4%BA%A1%23) `567.7K 🔥` `NEW`
1. [唐艺昕没有妊娠纹](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E6%B2%A1%E6%9C%89%E5%A6%8A%E5%A8%A0%E7%BA%B9%23) `564.1K 🔥` `NEW`
1. [TF四代五公 审批](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E4%BA%94%E5%85%AC%20%E5%AE%A1%E6%89%B9%23) `552.5K 🔥` `NEW`
1. [高三学生被邻居撞死前曾躲3次](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%89%E5%AD%A6%E7%94%9F%E8%A2%AB%E9%82%BB%E5%B1%85%E6%92%9E%E6%AD%BB%E5%89%8D%E6%9B%BE%E8%BA%B23%E6%AC%A1%23) `546.3K 🔥` `NEW`
1. [张雅琪送客人孔明锁](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E9%80%81%E5%AE%A2%E4%BA%BA%E5%AD%94%E6%98%8E%E9%94%81%23) `538.2K 🔥` `NEW`
1. [外交部回应王虹邓煜获菲尔兹奖](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E5%9B%9E%E5%BA%94%E7%8E%8B%E8%99%B9%E9%82%93%E7%85%9C%E8%8E%B7%E8%8F%B2%E5%B0%94%E5%85%B9%E5%A5%96%23) `533.0K 🔥` `NEW`
1. [消防云梯气垫](https://s.weibo.com/weibo?q=%23%E6%B6%88%E9%98%B2%E4%BA%91%E6%A2%AF%E6%B0%94%E5%9E%AB%23) `528.7K 🔥` `NEW`
1. [白鹿广东凉鞋](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%B9%BF%E4%B8%9C%E5%87%89%E9%9E%8B%23) `525.5K 🔥` `NEW`
1. [健身房偷拍事件女子道歉后仍咬定偷拍](https://s.weibo.com/weibo?q=%23%E5%81%A5%E8%BA%AB%E6%88%BF%E5%81%B7%E6%8B%8D%E4%BA%8B%E4%BB%B6%E5%A5%B3%E5%AD%90%E9%81%93%E6%AD%89%E5%90%8E%E4%BB%8D%E5%92%AC%E5%AE%9A%E5%81%B7%E6%8B%8D%23) `442.4K 🔥` `NEW`
1. [时代峰峻星探 小学扫楼 (Times Fengjun Star Scout sweeps the building in primary school)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E6%98%9F%E6%8E%A2%20%E5%B0%8F%E5%AD%A6%E6%89%AB%E6%A5%BC%23) `397.7K 🔥` `NEW`
1. [狗狗配种被骗主人喊话为狗讨公道](https://s.weibo.com/weibo?q=%23%E7%8B%97%E7%8B%97%E9%85%8D%E7%A7%8D%E8%A2%AB%E9%AA%97%E4%B8%BB%E4%BA%BA%E5%96%8A%E8%AF%9D%E4%B8%BA%E7%8B%97%E8%AE%A8%E5%85%AC%E9%81%93%23) `396.9K 🔥` `NEW`
1. [孙珍妮胳膊瘦到只剩骨头了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%8F%8D%E5%A6%AE%E8%83%B3%E8%86%8A%E7%98%A6%E5%88%B0%E5%8F%AA%E5%89%A9%E9%AA%A8%E5%A4%B4%E4%BA%86%23) `382.7K 🔥` `NEW`
1. [DeepSeekV4能力在GLM5.2和KimiK3之间](https://s.weibo.com/weibo?q=%23DeepSeekV4%E8%83%BD%E5%8A%9B%E5%9C%A8GLM5.2%E5%92%8CKimiK3%E4%B9%8B%E9%97%B4%23) `370.3K 🔥` `NEW`
1. [杀死比尔撤档](https://s.weibo.com/weibo?q=%23%E6%9D%80%E6%AD%BB%E6%AF%94%E5%B0%94%E6%92%A4%E6%A1%A3%23) `360.8K 🔥` `NEW`
1. [西班牙强烈不满](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E5%BC%BA%E7%83%88%E4%B8%8D%E6%BB%A1%23) `332.7K 🔥` `NEW`
1. [国务院关于出境入境管理的规定](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%8A%A1%E9%99%A2%E5%85%B3%E4%BA%8E%E5%87%BA%E5%A2%83%E5%85%A5%E5%A2%83%E7%AE%A1%E7%90%86%E7%9A%84%E8%A7%84%E5%AE%9A%23) `325.8K 🔥` `NEW`
1. [闵塔鲨回应迪丽热巴裙子](https://s.weibo.com/weibo?q=%23%E9%97%B5%E5%A1%94%E9%B2%A8%E5%9B%9E%E5%BA%94%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%A3%99%E5%AD%90%23) `318.0K 🔥` `NEW`
1. [黄晓明点赞极氪9X外观正大光明](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E7%82%B9%E8%B5%9E%E6%9E%81%E6%B0%AA9X%E5%A4%96%E8%A7%82%E6%AD%A3%E5%A4%A7%E5%85%89%E6%98%8E%23) `290.9K 🔥` `NEW`
1. [鬼鬼谈女儿哽咽落泪](https://s.weibo.com/weibo?q=%23%E9%AC%BC%E9%AC%BC%E8%B0%88%E5%A5%B3%E5%84%BF%E5%93%BD%E5%92%BD%E8%90%BD%E6%B3%AA%23) `290.5K 🔥` `NEW`
1. [代拍发的田曦薇生图 (Photos of Tian Xiwei's life on behalf of the auctioneer)](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E6%8B%8D%E5%8F%91%E7%9A%84%E7%94%B0%E6%9B%A6%E8%96%87%E7%94%9F%E5%9B%BE%23) `287.8K 🔥` `NEW`
1. [王楚然耳夹掉了耳朵都红了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E8%80%B3%E5%A4%B9%E6%8E%89%E4%BA%86%E8%80%B3%E6%9C%B5%E9%83%BD%E7%BA%A2%E4%BA%86%23) `181.0K 🔥` `NEW`
1. [T1战胜GEN](https://s.weibo.com/weibo?q=%23T1%E6%88%98%E8%83%9CGEN%23) `174.9K 🔥` `NEW`
1. [给杨勇记国防科技一等功](https://s.weibo.com/weibo?q=%23%E7%BB%99%E6%9D%A8%E5%8B%87%E8%AE%B0%E5%9B%BD%E9%98%B2%E7%A7%91%E6%8A%80%E4%B8%80%E7%AD%89%E5%8A%9F%23) `164.8K 🔥` `NEW`
1. [保时捷女销冠已向法院立案](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%97%B6%E6%8D%B7%E5%A5%B3%E9%94%80%E5%86%A0%E5%B7%B2%E5%90%91%E6%B3%95%E9%99%A2%E7%AB%8B%E6%A1%88%23) `162.2K 🔥` `NEW`
1. [AI泡沫进入倒计时](https://s.weibo.com/weibo?q=%23AI%E6%B3%A1%E6%B2%AB%E8%BF%9B%E5%85%A5%E5%80%92%E8%AE%A1%E6%97%B6%23) `161.9K 🔥` `NEW`
1. [娜扎拍写真又差点热晕过去](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E6%8B%8D%E5%86%99%E7%9C%9F%E5%8F%88%E5%B7%AE%E7%82%B9%E7%83%AD%E6%99%95%E8%BF%87%E5%8E%BB%23) `161.9K 🔥` `NEW`
1. [NMIXX成员汉字名](https://s.weibo.com/weibo?q=%23NMIXX%E6%88%90%E5%91%98%E6%B1%89%E5%AD%97%E5%90%8D%23) `155.1K 🔥` `NEW`
1. [张子墨打断梁源](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E5%A2%A8%E6%89%93%E6%96%AD%E6%A2%81%E6%BA%90%23) `142.3K 🔥` `NEW`
1. [张绍刚打断周深](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%8D%E5%88%9A%E6%89%93%E6%96%AD%E5%91%A8%E6%B7%B1%23) `139.6K 🔥` `NEW`
1. [我的花园世界 (my garden world)](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E8%8A%B1%E5%9B%AD%E4%B8%96%E7%95%8C%23) `139.5K 🔥` `NEW`
1. [燃油附加费又下降了](https://s.weibo.com/weibo?q=%23%E7%87%83%E6%B2%B9%E9%99%84%E5%8A%A0%E8%B4%B9%E5%8F%88%E4%B8%8B%E9%99%8D%E4%BA%86%23) `138.3K 🔥` `NEW`
1. [黄子弘凡唱王俊凯的歌](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E5%94%B1%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%9A%84%E6%AD%8C%23) `135.6K 🔥` `NEW`
1. [虞书欣大腿淤青](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%A4%A7%E8%85%BF%E6%B7%A4%E9%9D%92%23) `560.4K 🔥` `+56%`
1. [油价](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%23) `559.1K 🔥` `+22%`
1. [读懂好感度攀升背后的中国魅力](https://s.weibo.com/weibo?q=%23%E8%AF%BB%E6%87%82%E5%A5%BD%E6%84%9F%E5%BA%A6%E6%94%80%E5%8D%87%E8%83%8C%E5%90%8E%E7%9A%84%E4%B8%AD%E5%9B%BD%E9%AD%85%E5%8A%9B%23) `888.7K 🔥`
1. [卫健委回应原配申请销毁婚外胚胎 (Health Commission responds to original wife’s request to destroy extramarital embryos)](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E5%81%A5%E5%A7%94%E5%9B%9E%E5%BA%94%E5%8E%9F%E9%85%8D%E7%94%B3%E8%AF%B7%E9%94%80%E6%AF%81%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%23) `263.1K 🔥`
1. [百花奖 (Hundred Flowers Award)](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%23) `575.4K 🔥` `-31%`
1. [敖瑞鹏工作室回应接中剧](https://s.weibo.com/weibo?q=%23%E6%95%96%E7%91%9E%E9%B9%8F%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%9B%9E%E5%BA%94%E6%8E%A5%E4%B8%AD%E5%89%A7%23) `214.5K 🔥` `-39%`
1. [C罗晒与16岁儿子肌肉合照](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%99%92%E4%B8%8E16%E5%B2%81%E5%84%BF%E5%AD%90%E8%82%8C%E8%82%89%E5%90%88%E7%85%A7%23) `148.0K 🔥` `-87%`
1. [DeepSeekV4Flash正式版上线](https://s.weibo.com/weibo?q=%23DeepSeekV4Flash%E6%AD%A3%E5%BC%8F%E7%89%88%E4%B8%8A%E7%BA%BF%23) `139.5K 🔥` `-63%`

Updated at 2026-07-31 19:08:20

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
