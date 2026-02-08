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

1. [王曼昱VS张本美和 (Wang Manyu VS Zhang Benmeihe)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1VS%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `1.1M 🔥` `NEW`
1. [李昀锐的桃花马在孟子义那](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E7%9A%84%E6%A1%83%E8%8A%B1%E9%A9%AC%E5%9C%A8%E5%AD%9F%E5%AD%90%E4%B9%89%E9%82%A3%23) `643.5K 🔥` `NEW`
1. [王楚钦男单争冠](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%94%B7%E5%8D%95%E4%BA%89%E5%86%A0%23) `152.3K 🔥` `NEW`
1. [男子编少年淫秽视频逼学校家长回应](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%BC%96%E5%B0%91%E5%B9%B4%E6%B7%AB%E7%A7%BD%E8%A7%86%E9%A2%91%E9%80%BC%E5%AD%A6%E6%A0%A1%E5%AE%B6%E9%95%BF%E5%9B%9E%E5%BA%94%23) `142.5K 🔥` `NEW`
1. [拍奶茶给阿福看](https://s.weibo.com/weibo?q=%23%E6%8B%8D%E5%A5%B6%E8%8C%B6%E7%BB%99%E9%98%BF%E7%A6%8F%E7%9C%8B%23) `142.3K 🔥` `NEW`
1. [白鹿发开播红包](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8F%91%E5%BC%80%E6%92%AD%E7%BA%A2%E5%8C%85%23) `142.2K 🔥` `NEW`
1. [演唱会背痛包 偶像比粉丝先认出对方](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%94%B1%E4%BC%9A%E8%83%8C%E7%97%9B%E5%8C%85%20%E5%81%B6%E5%83%8F%E6%AF%94%E7%B2%89%E4%B8%9D%E5%85%88%E8%AE%A4%E5%87%BA%E5%AF%B9%E6%96%B9%23) `137.2K 🔥` `NEW`
1. [偶遇杨洋吃铁锅炖](https://s.weibo.com/weibo?q=%23%E5%81%B6%E9%81%87%E6%9D%A8%E6%B4%8B%E5%90%83%E9%93%81%E9%94%85%E7%82%96%23) `112.1K 🔥` `NEW`
1. [女子吐槽飞机餐仅一根青菜配米饭](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%90%90%E6%A7%BD%E9%A3%9E%E6%9C%BA%E9%A4%90%E4%BB%85%E4%B8%80%E6%A0%B9%E9%9D%92%E8%8F%9C%E9%85%8D%E7%B1%B3%E9%A5%AD%23) `107.2K 🔥` `NEW`
1. [哈登骑士首秀](https://s.weibo.com/weibo?q=%23%E5%93%88%E7%99%BB%E9%AA%91%E5%A3%AB%E9%A6%96%E7%A7%80%23) `102.8K 🔥` `NEW`
1. [坐直不是脊柱喜欢的完美姿势 (Sitting up straight is not the perfect position for your spine)](https://s.weibo.com/weibo?q=%23%E5%9D%90%E7%9B%B4%E4%B8%8D%E6%98%AF%E8%84%8A%E6%9F%B1%E5%96%9C%E6%AC%A2%E7%9A%84%E5%AE%8C%E7%BE%8E%E5%A7%BF%E5%8A%BF%23) `91.1K 🔥` `NEW`
1. [LPL选手集体上线看Bin腹肌照](https://s.weibo.com/weibo?q=%23LPL%E9%80%89%E6%89%8B%E9%9B%86%E4%BD%93%E4%B8%8A%E7%BA%BF%E7%9C%8BBin%E8%85%B9%E8%82%8C%E7%85%A7%23) `84.1K 🔥` `NEW`
1. [减肥一年 以最胖的姿态迎来了新年](https://s.weibo.com/weibo?q=%23%E5%87%8F%E8%82%A5%E4%B8%80%E5%B9%B4%20%E4%BB%A5%E6%9C%80%E8%83%96%E7%9A%84%E5%A7%BF%E6%80%81%E8%BF%8E%E6%9D%A5%E4%BA%86%E6%96%B0%E5%B9%B4%23) `82.2K 🔥` `NEW`
1. [孙颖莎称目前抛开成绩立足于拼](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%A7%B0%E7%9B%AE%E5%89%8D%E6%8A%9B%E5%BC%80%E6%88%90%E7%BB%A9%E7%AB%8B%E8%B6%B3%E4%BA%8E%E6%8B%BC%23) `81.1K 🔥` `NEW`
1. [女子做美甲后摔倒致指甲断裂](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%81%9A%E7%BE%8E%E7%94%B2%E5%90%8E%E6%91%94%E5%80%92%E8%87%B4%E6%8C%87%E7%94%B2%E6%96%AD%E8%A3%82%23) `78.4K 🔥` `NEW`
1. [每年初一下午失落感](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%B9%B4%E5%88%9D%E4%B8%80%E4%B8%8B%E5%8D%88%E5%A4%B1%E8%90%BD%E6%84%9F%23) `77.3K 🔥` `NEW`
1. [周柯宇拍金吾不禁瘦了10斤](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9F%AF%E5%AE%87%E6%8B%8D%E9%87%91%E5%90%BE%E4%B8%8D%E7%A6%81%E7%98%A6%E4%BA%8610%E6%96%A4%23) `72.3K 🔥` `NEW`
1. [王楚钦4比0张佑安](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A64%E6%AF%940%E5%BC%A0%E4%BD%91%E5%AE%89%23) `71.3K 🔥` `NEW`
1. [办婚礼没领证男子去世婆媳争18万彩礼 (A man who held a wedding without a certificate died and his mother-in-law and daughter-in-law competed for 180,000 yuan in gift)](https://s.weibo.com/weibo?q=%23%E5%8A%9E%E5%A9%9A%E7%A4%BC%E6%B2%A1%E9%A2%86%E8%AF%81%E7%94%B7%E5%AD%90%E5%8E%BB%E4%B8%96%E5%A9%86%E5%AA%B3%E4%BA%8918%E4%B8%87%E5%BD%A9%E7%A4%BC%23) `645.8K 🔥` `+309%`
1. [这才是真正的道歉](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%89%8D%E6%98%AF%E7%9C%9F%E6%AD%A3%E7%9A%84%E9%81%93%E6%AD%89%23) `643.1K 🔥` `+239%`
1. [年少有为全员为老板养马](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%B0%91%E6%9C%89%E4%B8%BA%E5%85%A8%E5%91%98%E4%B8%BA%E8%80%81%E6%9D%BF%E5%85%BB%E9%A9%AC%23) `510.4K 🔥` `+171%`
1. [朱易点赞苏翊鸣 (Zhu Yi likes Su Yiming)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E6%98%93%E7%82%B9%E8%B5%9E%E8%8B%8F%E7%BF%8A%E9%B8%A3%23) `167.6K 🔥` `+116%`
1. [全球第四大汽车巨头爆雷](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E7%AC%AC%E5%9B%9B%E5%A4%A7%E6%B1%BD%E8%BD%A6%E5%B7%A8%E5%A4%B4%E7%88%86%E9%9B%B7%23) `748.4K 🔥`
1. [窗里窗外皆是归途的美好](https://s.weibo.com/weibo?q=%23%E7%AA%97%E9%87%8C%E7%AA%97%E5%A4%96%E7%9A%86%E6%98%AF%E5%BD%92%E9%80%94%E7%9A%84%E7%BE%8E%E5%A5%BD%23) `654.4K 🔥`
1. [千问 (Qianwen)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%23) `142.7K 🔥`
1. [梁源发文怼吴克群](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%BA%90%E5%8F%91%E6%96%87%E6%80%BC%E5%90%B4%E5%85%8B%E7%BE%A4%23) `142.6K 🔥`
1. [老一辈对子女睡懒觉的执念](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%B8%80%E8%BE%88%E5%AF%B9%E5%AD%90%E5%A5%B3%E7%9D%A1%E6%87%92%E8%A7%89%E7%9A%84%E6%89%A7%E5%BF%B5%23) `142.3K 🔥`
1. [爱吃柚子的人天塌了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%90%83%E6%9F%9A%E5%AD%90%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `141.9K 🔥`
1. [巨火但很反感的梗](https://s.weibo.com/weibo?q=%23%E5%B7%A8%E7%81%AB%E4%BD%86%E5%BE%88%E5%8F%8D%E6%84%9F%E7%9A%84%E6%A2%97%23) `141.9K 🔥`
1. [天选守护者苏翊鸣](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E9%80%89%E5%AE%88%E6%8A%A4%E8%80%85%E8%8B%8F%E7%BF%8A%E9%B8%A3%23) `141.7K 🔥`
1. [华晨宇脖子上的唇印](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E8%84%96%E5%AD%90%E4%B8%8A%E7%9A%84%E5%94%87%E5%8D%B0%23) `141.7K 🔥`
1. [Bin腹肌对标Gala](https://s.weibo.com/weibo?q=%23Bin%E8%85%B9%E8%82%8C%E5%AF%B9%E6%A0%87Gala%23) `141.5K 🔥`
1. [吴克群帮农民卖掉3万斤菜 (Wu Kequn helps farmers sell 30,000 kilograms of vegetables)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%85%8B%E7%BE%A4%E5%B8%AE%E5%86%9C%E6%B0%91%E5%8D%96%E6%8E%893%E4%B8%87%E6%96%A4%E8%8F%9C%23) `141.5K 🔥`
1. [断联一年的闺蜜突然发消息](https://s.weibo.com/weibo?q=%23%E6%96%AD%E8%81%94%E4%B8%80%E5%B9%B4%E7%9A%84%E9%97%BA%E8%9C%9C%E7%AA%81%E7%84%B6%E5%8F%91%E6%B6%88%E6%81%AF%23) `141.4K 🔥`
1. [男生有必要打HPV疫苗吗](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E6%9C%89%E5%BF%85%E8%A6%81%E6%89%93HPV%E7%96%AB%E8%8B%97%E5%90%97%23) `141.2K 🔥`
1. [金晨被认定逃逸的三大客观依据](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%E8%A2%AB%E8%AE%A4%E5%AE%9A%E9%80%83%E9%80%B8%E7%9A%84%E4%B8%89%E5%A4%A7%E5%AE%A2%E8%A7%82%E4%BE%9D%E6%8D%AE%23) `114.7K 🔥`
1. [华东政法大学学生起诉微信收提现费](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%9C%E6%94%BF%E6%B3%95%E5%A4%A7%E5%AD%A6%E5%AD%A6%E7%94%9F%E8%B5%B7%E8%AF%89%E5%BE%AE%E4%BF%A1%E6%94%B6%E6%8F%90%E7%8E%B0%E8%B4%B9%23) `109.6K 🔥`
1. [小马糕 (pony cake)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%A9%AC%E7%B3%95%23) `96.9K 🔥`
1. [谢依霖回应提问赵丽颖](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E4%BE%9D%E9%9C%96%E5%9B%9E%E5%BA%94%E6%8F%90%E9%97%AE%E8%B5%B5%E4%B8%BD%E9%A2%96%23) `200.6K 🔥` `-35%`
1. [韩员工手滑发62万枚比特币](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%91%98%E5%B7%A5%E6%89%8B%E6%BB%91%E5%8F%9162%E4%B8%87%E6%9E%9A%E6%AF%94%E7%89%B9%E5%B8%81%23) `142.7K 🔥` `-28%`
1. [苏翊鸣疑似被日本裁判压分](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E7%96%91%E4%BC%BC%E8%A2%AB%E6%97%A5%E6%9C%AC%E8%A3%81%E5%88%A4%E5%8E%8B%E5%88%86%23) `142.1K 🔥` `-21%`
1. [张维伊被内推再见爱人](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%B4%E4%BC%8A%E8%A2%AB%E5%86%85%E6%8E%A8%E5%86%8D%E8%A7%81%E7%88%B1%E4%BA%BA%23) `141.2K 🔥` `-23%`
1. [孙颖莎VS蒯曼 (Sun Yingsha VS Kuaiman)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8EVS%E8%92%AF%E6%9B%BC%23) `115.1K 🔥` `-89%`
1. [王一博点赞了苏翊鸣](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E7%82%B9%E8%B5%9E%E4%BA%86%E8%8B%8F%E7%BF%8A%E9%B8%A3%23) `108.1K 🔥` `-32%`
1. [吴谨言洪尧同框现身机场 (Wu Jinyan and Hong Yao appeared at the airport together)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%B0%A8%E8%A8%80%E6%B4%AA%E5%B0%A7%E5%90%8C%E6%A1%86%E7%8E%B0%E8%BA%AB%E6%9C%BA%E5%9C%BA%23) `104.5K 🔥` `-35%`
1. [洗澡时不要总弯腰洗头 (Don’t always bend down to wash your hair when taking a shower)](https://s.weibo.com/weibo?q=%23%E6%B4%97%E6%BE%A1%E6%97%B6%E4%B8%8D%E8%A6%81%E6%80%BB%E5%BC%AF%E8%85%B0%E6%B4%97%E5%A4%B4%23) `101.5K 🔥` `-37%`
1. [曝爱泼斯坦为印度首富弟弟献女郎](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E4%B8%BA%E5%8D%B0%E5%BA%A6%E9%A6%96%E5%AF%8C%E5%BC%9F%E5%BC%9F%E7%8C%AE%E5%A5%B3%E9%83%8E%23) `89.4K 🔥` `-29%`
1. [男生感染HPV后果很严重 (The consequences of HPV infection for boys are serious)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E6%84%9F%E6%9F%93HPV%E5%90%8E%E6%9E%9C%E5%BE%88%E4%B8%A5%E9%87%8D%23) `86.8K 🔥` `-36%`
1. [郭宇欣最甜的脸演最飒的将军](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AE%87%E6%AC%A3%E6%9C%80%E7%94%9C%E7%9A%84%E8%84%B8%E6%BC%94%E6%9C%80%E9%A3%92%E7%9A%84%E5%B0%86%E5%86%9B%23) `80.4K 🔥` `-26%`
1. [王俊凯的话只有朱志鑫听进去了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%9A%84%E8%AF%9D%E5%8F%AA%E6%9C%89%E6%9C%B1%E5%BF%97%E9%91%AB%E5%90%AC%E8%BF%9B%E5%8E%BB%E4%BA%86%23) `78.3K 🔥` `-43%`
1. [孙颖莎期待和王曼昱会师决赛](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%9C%9F%E5%BE%85%E5%92%8C%E7%8E%8B%E6%9B%BC%E6%98%B1%E4%BC%9A%E5%B8%88%E5%86%B3%E8%B5%9B%23) `69.8K 🔥` `-53%`

Updated at 2026-02-08 14:09:24

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
