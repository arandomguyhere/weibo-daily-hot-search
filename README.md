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

1. [中国荣耀李宁同行 (China Honor Li Ning Travels Together)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%8D%A3%E8%80%80%E6%9D%8E%E5%AE%81%E5%90%8C%E8%A1%8C%23) `323.6K 🔥` `NEW`
1. [林诗栋vs户上隼辅](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8Bvs%E6%88%B7%E4%B8%8A%E9%9A%BC%E8%BE%85%23) `247.8K 🔥` `NEW`
1. [成何体统 癫剧](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%20%E7%99%AB%E5%89%A7%23) `214.3K 🔥` `NEW`
1. [美军基地被指向日本直排污染物](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E5%9F%BA%E5%9C%B0%E8%A2%AB%E6%8C%87%E5%90%91%E6%97%A5%E6%9C%AC%E7%9B%B4%E6%8E%92%E6%B1%A1%E6%9F%93%E7%89%A9%23) `167.5K 🔥` `NEW`
1. [白鹿王星越连续4年拍同样的照片](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%8E%8B%E6%98%9F%E8%B6%8A%E8%BF%9E%E7%BB%AD4%E5%B9%B4%E6%8B%8D%E5%90%8C%E6%A0%B7%E7%9A%84%E7%85%A7%E7%89%87%23) `129.6K 🔥` `NEW`
1. [脚臭的人洗脚时建议加点盐](https://s.weibo.com/weibo?q=%23%E8%84%9A%E8%87%AD%E7%9A%84%E4%BA%BA%E6%B4%97%E8%84%9A%E6%97%B6%E5%BB%BA%E8%AE%AE%E5%8A%A0%E7%82%B9%E7%9B%90%23) `128.6K 🔥` `NEW`
1. [公厕免费取纸机不出纸还被订阅业务](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8E%95%E5%85%8D%E8%B4%B9%E5%8F%96%E7%BA%B8%E6%9C%BA%E4%B8%8D%E5%87%BA%E7%BA%B8%E8%BF%98%E8%A2%AB%E8%AE%A2%E9%98%85%E4%B8%9A%E5%8A%A1%23) `122.5K 🔥` `NEW`
1. [Tian和王濛比速滑](https://s.weibo.com/weibo?q=%23Tian%E5%92%8C%E7%8E%8B%E6%BF%9B%E6%AF%94%E9%80%9F%E6%BB%91%23) `120.0K 🔥` `NEW`
1. [王濛冠军的含金量还在上升](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%86%A0%E5%86%9B%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%E8%BF%98%E5%9C%A8%E4%B8%8A%E5%8D%87%23) `117.6K 🔥` `NEW`
1. [王楚钦屡遭干扰官方发声](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%B1%A1%E9%81%AD%E5%B9%B2%E6%89%B0%E5%AE%98%E6%96%B9%E5%8F%91%E5%A3%B0%23) `108.1K 🔥` `NEW`
1. [金玟庭中文版Blue (Kim Min Jung Chinese version Blue)](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%8E%9F%E5%BA%AD%E4%B8%AD%E6%96%87%E7%89%88Blue%23) `105.4K 🔥` `NEW`
1. [小朋友的过年问题能有多离谱](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%9C%8B%E5%8F%8B%E7%9A%84%E8%BF%87%E5%B9%B4%E9%97%AE%E9%A2%98%E8%83%BD%E6%9C%89%E5%A4%9A%E7%A6%BB%E8%B0%B1%23) `99.3K 🔥` `NEW`
1. [杨紫新剧既是掌姐又是扇弟](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%96%B0%E5%89%A7%E6%97%A2%E6%98%AF%E6%8E%8C%E5%A7%90%E5%8F%88%E6%98%AF%E6%89%87%E5%BC%9F%23) `99.0K 🔥` `NEW`
1. [黄明昊演唱会嘉宾马思纯](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%98%8E%E6%98%8A%E6%BC%94%E5%94%B1%E4%BC%9A%E5%98%89%E5%AE%BE%E9%A9%AC%E6%80%9D%E7%BA%AF%23) `93.7K 🔥` `NEW`
1. [多名领到千问免费奶茶网友发声](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%90%8D%E9%A2%86%E5%88%B0%E5%8D%83%E9%97%AE%E5%85%8D%E8%B4%B9%E5%A5%B6%E8%8C%B6%E7%BD%91%E5%8F%8B%E5%8F%91%E5%A3%B0%23) `89.5K 🔥` `NEW`
1. [男子网购椅子竟多出15公斤银板](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%BD%91%E8%B4%AD%E6%A4%85%E5%AD%90%E7%AB%9F%E5%A4%9A%E5%87%BA15%E5%85%AC%E6%96%A4%E9%93%B6%E6%9D%BF%23) `1.1M 🔥` `+414%`
1. [生命树张扬去世 (The tree of life Zhang Yang passed away)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E5%BC%A0%E6%89%AC%E5%8E%BB%E4%B8%96%23) `675.9K 🔥` `+26%`
1. [教育局回应成绩单用星星显示 (The Education Bureau’s response report card is displayed with stars)](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E5%B1%80%E5%9B%9E%E5%BA%94%E6%88%90%E7%BB%A9%E5%8D%95%E7%94%A8%E6%98%9F%E6%98%9F%E6%98%BE%E7%A4%BA%23) `651.5K 🔥` `+21%`
1. [因上菜慢辱骂服务员老太太拒道歉](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E4%B8%8A%E8%8F%9C%E6%85%A2%E8%BE%B1%E9%AA%82%E6%9C%8D%E5%8A%A1%E5%91%98%E8%80%81%E5%A4%AA%E5%A4%AA%E6%8B%92%E9%81%93%E6%AD%89%23) `214.4K 🔥` `+66%`
1. [谷爱凌第一滑摔倒 (Gu Ailing fell down in her first slip)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%AC%AC%E4%B8%80%E6%BB%91%E6%91%94%E5%80%92%23) `196.6K 🔥` `+36%`
1. [中国网络视听盛典 (China Internet Audiovisual Festival)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%BD%91%E7%BB%9C%E8%A7%86%E5%90%AC%E7%9B%9B%E5%85%B8%23) `717.9K 🔥`
1. [买冰雪运动同款就上淘宝 (Buy winter sports gear on Taobao)](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E5%86%B0%E9%9B%AA%E8%BF%90%E5%8A%A8%E5%90%8C%E6%AC%BE%E5%B0%B1%E4%B8%8A%E6%B7%98%E5%AE%9D%23) `694.0K 🔥`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `373.4K 🔥`
1. [男子因1条评论杀害2人 (Man kills 2 people over 1 comment)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%A01%E6%9D%A1%E8%AF%84%E8%AE%BA%E6%9D%80%E5%AE%B32%E4%BA%BA%23) `214.9K 🔥`
1. [立威廉得知恶耗时才49岁](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E5%A8%81%E5%BB%89%E5%BE%97%E7%9F%A5%E6%81%B6%E8%80%97%E6%97%B6%E6%89%8D49%E5%B2%81%23) `214.7K 🔥`
1. [王楚然演技](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E6%BC%94%E6%8A%80%23) `214.6K 🔥`
1. [谷爱凌第二轮75.30分 (Gu Ailing scored 75.30 points in the second round)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%AC%AC%E4%BA%8C%E8%BD%AE75.30%E5%88%86%23) `203.1K 🔥`
1. [演员立威廉已重新安排遗嘱 (Actor William Li has rearranged his will)](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E7%AB%8B%E5%A8%81%E5%BB%89%E5%B7%B2%E9%87%8D%E6%96%B0%E5%AE%89%E6%8E%92%E9%81%97%E5%98%B1%23) `162.7K 🔥`
1. [陈幸同1比4张本美和](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B9%B8%E5%90%8C1%E6%AF%944%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `131.4K 🔥`
1. [谷爱凌摔倒场边观众吓坏了](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E6%91%94%E5%80%92%E5%9C%BA%E8%BE%B9%E8%A7%82%E4%BC%97%E5%90%93%E5%9D%8F%E4%BA%86%23) `122.5K 🔥`
1. [王楚钦男单4强](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%94%B7%E5%8D%954%E5%BC%BA%23) `115.0K 🔥`
1. [米兰冬奥首金诞生](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E9%A6%96%E9%87%91%E8%AF%9E%E7%94%9F%23) `775.6K 🔥` `-40%`
1. [六个合法查询网站帮你看清一个人 (Six legal search websites to help you identify a person clearly)](https://s.weibo.com/weibo?q=%23%E5%85%AD%E4%B8%AA%E5%90%88%E6%B3%95%E6%9F%A5%E8%AF%A2%E7%BD%91%E7%AB%99%E5%B8%AE%E4%BD%A0%E7%9C%8B%E6%B8%85%E4%B8%80%E4%B8%AA%E4%BA%BA%23) `319.8K 🔥` `-65%`
1. [山姆你还续卡吗 (Are you still renewing your Sam's Club membership?)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E4%BD%A0%E8%BF%98%E7%BB%AD%E5%8D%A1%E5%90%97%23) `300.5K 🔥` `-32%`
1. [女子托运宠物猫至哈尔滨却送到新疆 (Woman consigned pet cat to Harbin but sent to Xinjiang)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%89%98%E8%BF%90%E5%AE%A0%E7%89%A9%E7%8C%AB%E8%87%B3%E5%93%88%E5%B0%94%E6%BB%A8%E5%8D%B4%E9%80%81%E5%88%B0%E6%96%B0%E7%96%86%23) `215.0K 🔥` `-23%`
1. [山姆品控危机引发退卡风波 (Sam's Club quality control crisis sparks membership cancellation wave)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E5%93%81%E6%8E%A7%E5%8D%B1%E6%9C%BA%E5%BC%95%E5%8F%91%E9%80%80%E5%8D%A1%E9%A3%8E%E6%B3%A2%23) `167.2K 🔥` `-24%`
1. [马伯骞回关虞书欣](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E4%BC%AF%E9%AA%9E%E5%9B%9E%E5%85%B3%E8%99%9E%E4%B9%A6%E6%AC%A3%23) `159.7K 🔥` `-22%`
1. [为什么很多餐馆都在提供免费柠檬水](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BE%88%E5%A4%9A%E9%A4%90%E9%A6%86%E9%83%BD%E5%9C%A8%E6%8F%90%E4%BE%9B%E5%85%8D%E8%B4%B9%E6%9F%A0%E6%AA%AC%E6%B0%B4%23) `150.7K 🔥` `-23%`
1. [我们的少年时代2开机花篮 (Our Boyhood 2 boot flower basket)](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%E5%BC%80%E6%9C%BA%E8%8A%B1%E7%AF%AE%23) `146.0K 🔥` `-31%`
1. [程潇真的拥有芭比的容貌和人生](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%BD%87%E7%9C%9F%E7%9A%84%E6%8B%A5%E6%9C%89%E8%8A%AD%E6%AF%94%E7%9A%84%E5%AE%B9%E8%B2%8C%E5%92%8C%E4%BA%BA%E7%94%9F%23) `142.1K 🔥` `-32%`
1. [很火但难吃的水果 (Very popular but unpalatable fruit)](https://s.weibo.com/weibo?q=%23%E5%BE%88%E7%81%AB%E4%BD%86%E9%9A%BE%E5%90%83%E7%9A%84%E6%B0%B4%E6%9E%9C%23) `122.7K 🔥` `-43%`
1. [湖南卫视春晚全阵容官宣 (Hunan TV Spring Festival Gala full lineup announced)](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%8D%AB%E8%A7%86%E6%98%A5%E6%99%9A%E5%85%A8%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `101.6K 🔥` `-22%`
1. [工作留痕真的能保命](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E7%95%99%E7%97%95%E7%9C%9F%E7%9A%84%E8%83%BD%E4%BF%9D%E5%91%BD%23) `98.8K 🔥` `-23%`
1. [华晨宇 本命年和本命人一起过 (Hua Chenyu spends his natal year with his natal person)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%20%E6%9C%AC%E5%91%BD%E5%B9%B4%E5%92%8C%E6%9C%AC%E5%91%BD%E4%BA%BA%E4%B8%80%E8%B5%B7%E8%BF%87%23) `96.7K 🔥` `-22%`
1. [周启豪晋级后调侃王楚钦和孙颖莎](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%90%AF%E8%B1%AA%E6%99%8B%E7%BA%A7%E5%90%8E%E8%B0%83%E4%BE%83%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%92%8C%E5%AD%99%E9%A2%96%E8%8E%8E%23) `96.0K 🔥` `-31%`
1. [孕妇独自驾车就医致一男子死亡 (Pregnant woman drove alone to seek medical treatment, killing a man)](https://s.weibo.com/weibo?q=%23%E5%AD%95%E5%A6%87%E7%8B%AC%E8%87%AA%E9%A9%BE%E8%BD%A6%E5%B0%B1%E5%8C%BB%E8%87%B4%E4%B8%80%E7%94%B7%E5%AD%90%E6%AD%BB%E4%BA%A1%23) `93.7K 🔥` `-55%`
1. [妈妈对谷爱凌说了什么](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%AF%B9%E8%B0%B7%E7%88%B1%E5%87%8C%E8%AF%B4%E4%BA%86%E4%BB%80%E4%B9%88%23) `90.8K 🔥` `-40%`
1. [谷爱凌锁定决赛 (Gu Ailing locked in the finals)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E9%94%81%E5%AE%9A%E5%86%B3%E8%B5%9B%23) `89.0K 🔥` `-35%`
1. [黄明昊演唱会](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%98%8E%E6%98%8A%E6%BC%94%E5%94%B1%E4%BC%9A%23) `84.5K 🔥` `-31%`

Updated at 2026-02-07 22:25:05

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
