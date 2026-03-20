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

1. [领克07碳纤维尾翼版带感登场 (Lynk & Co 07 carbon fiber rear wing version debuts)](https://s.weibo.com/weibo?q=%23%E9%A2%86%E5%85%8B07%E7%A2%B3%E7%BA%A4%E7%BB%B4%E5%B0%BE%E7%BF%BC%E7%89%88%E5%B8%A6%E6%84%9F%E7%99%BB%E5%9C%BA%23) `36.8K 🔥` `NEW`
1. [黄金白银瀑布式下跌](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E7%99%BD%E9%93%B6%E7%80%91%E5%B8%83%E5%BC%8F%E4%B8%8B%E8%B7%8C%23) `27.9K 🔥` `NEW`
1. [易烊千玺CMG年度剧情电影男演员](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BACMG%E5%B9%B4%E5%BA%A6%E5%89%A7%E6%83%85%E7%94%B5%E5%BD%B1%E7%94%B7%E6%BC%94%E5%91%98%23) `27.6K 🔥` `NEW`
1. [挽救计划](https://s.weibo.com/weibo?q=%23%E6%8C%BD%E6%95%91%E8%AE%A1%E5%88%92%23) `27.5K 🔥` `NEW`
1. [官方通报月经弄脏卧铺事件详情](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%9C%88%E7%BB%8F%E5%BC%84%E8%84%8F%E5%8D%A7%E9%93%BA%E4%BA%8B%E4%BB%B6%E8%AF%A6%E6%83%85%23) `34.9K 🔥` `+27%`
1. [深圳一公司公告称副总在办公室偷吃 (A company in Shenzhen announced that the vice president was eating in the office)](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E4%B8%80%E5%85%AC%E5%8F%B8%E5%85%AC%E5%91%8A%E7%A7%B0%E5%89%AF%E6%80%BB%E5%9C%A8%E5%8A%9E%E5%85%AC%E5%AE%A4%E5%81%B7%E5%90%83%23) `31.8K 🔥` `+34%`
1. [伊朗攻击美国多个军事基地 (Iran attacks multiple US military bases)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%94%BB%E5%87%BB%E7%BE%8E%E5%9B%BD%E5%A4%9A%E4%B8%AA%E5%86%9B%E4%BA%8B%E5%9F%BA%E5%9C%B0%23) `37.0K 🔥`
1. [薛之谦广州演唱会](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E5%B9%BF%E5%B7%9E%E6%BC%94%E5%94%B1%E4%BC%9A%23) `35.5K 🔥`
1. [谢征给樊长玉脖子亲出吻痕](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%BE%81%E7%BB%99%E6%A8%8A%E9%95%BF%E7%8E%89%E8%84%96%E5%AD%90%E4%BA%B2%E5%87%BA%E5%90%BB%E7%97%95%23) `33.4K 🔥`
1. [金饰价格再次大幅下跌](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E6%A0%BC%E5%86%8D%E6%AC%A1%E5%A4%A7%E5%B9%85%E4%B8%8B%E8%B7%8C%23) `28.9K 🔥`
1. [孟佳开撕品牌方](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E4%BD%B3%E5%BC%80%E6%92%95%E5%93%81%E7%89%8C%E6%96%B9%23) `28.1K 🔥`
1. [王橹杰爱柠檬](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%88%B1%E6%9F%A0%E6%AA%AC%23) `28.1K 🔥`
1. [丁彦雨航退役 (Ding Yanyuhang retires)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E5%BD%A6%E9%9B%A8%E8%88%AA%E9%80%80%E5%BD%B9%23) `28.1K 🔥`
1. [周冬雨穿自己淘的裙子走红毯 (Zhou Dongyu wears a dress she purchased on the red carpet)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%86%AC%E9%9B%A8%E7%A9%BF%E8%87%AA%E5%B7%B1%E6%B7%98%E7%9A%84%E8%A3%99%E5%AD%90%E8%B5%B0%E7%BA%A2%E6%AF%AF%23) `28.1K 🔥`
1. [爷爷酒后多次用力掌掴幼儿](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E9%85%92%E5%90%8E%E5%A4%9A%E6%AC%A1%E7%94%A8%E5%8A%9B%E6%8E%8C%E6%8E%B4%E5%B9%BC%E5%84%BF%23) `28.0K 🔥`
1. [伊朗动员穷人组织情报部门负责人身亡](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8A%A8%E5%91%98%E7%A9%B7%E4%BA%BA%E7%BB%84%E7%BB%87%E6%83%85%E6%8A%A5%E9%83%A8%E9%97%A8%E8%B4%9F%E8%B4%A3%E4%BA%BA%E8%BA%AB%E4%BA%A1%23) `28.0K 🔥`
1. [LYON对战JDG](https://s.weibo.com/weibo?q=%23LYON%E5%AF%B9%E6%88%98JDG%23) `28.0K 🔥`
1. [伊朗发动第67波攻势](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E5%8A%A8%E7%AC%AC67%E6%B3%A2%E6%94%BB%E5%8A%BF%23) `28.0K 🔥`
1. [菲方飞机非法闯入中国空域 (Philippine plane illegally intrudes into Chinese airspace)](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E6%96%B9%E9%A3%9E%E6%9C%BA%E9%9D%9E%E6%B3%95%E9%97%AF%E5%85%A5%E4%B8%AD%E5%9B%BD%E7%A9%BA%E5%9F%9F%23) `27.9K 🔥`
1. [THE9出道组现状 (Current status of THE9 debut group)](https://s.weibo.com/weibo?q=%23THE9%E5%87%BA%E9%81%93%E7%BB%84%E7%8E%B0%E7%8A%B6%23) `27.9K 🔥`
1. [被宝妈劝阻吸烟情绪失控游客已道歉](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%AE%9D%E5%A6%88%E5%8A%9D%E9%98%BB%E5%90%B8%E7%83%9F%E6%83%85%E7%BB%AA%E5%A4%B1%E6%8E%A7%E6%B8%B8%E5%AE%A2%E5%B7%B2%E9%81%93%E6%AD%89%23) `27.9K 🔥`
1. [Steam春促](https://s.weibo.com/weibo?q=%23Steam%E6%98%A5%E4%BF%83%23) `27.8K 🔥`
1. [嫁金钗预约破50w](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E9%A2%84%E7%BA%A6%E7%A0%B450w%23) `27.8K 🔥`
1. [刘昊然易烊千玺CMG双黄蛋 (Liu Haoran Yi Yang Qianxi CMG double yolk egg)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%98%8A%E7%84%B6%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BACMG%E5%8F%8C%E9%BB%84%E8%9B%8B%23) `27.8K 🔥`
1. [阿维塔12](https://s.weibo.com/weibo?q=%23%E9%98%BF%E7%BB%B4%E5%A1%9412%23) `27.7K 🔥`
1. [前员工爆料海底捞高层点炮制度](https://s.weibo.com/weibo?q=%23%E5%89%8D%E5%91%98%E5%B7%A5%E7%88%86%E6%96%99%E6%B5%B7%E5%BA%95%E6%8D%9E%E9%AB%98%E5%B1%82%E7%82%B9%E7%82%AE%E5%88%B6%E5%BA%A6%23) `27.7K 🔥`
1. [最强大脑 (The most powerful brain)](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%BC%BA%E5%A4%A7%E8%84%91%23) `27.7K 🔥`
1. [杨幂清唱讲真的 (Yang Mi sings a cappella to tell the truth)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E6%B8%85%E5%94%B1%E8%AE%B2%E7%9C%9F%E7%9A%84%23) `27.6K 🔥`
1. [你好星期六 (hello saturday)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%A5%BD%E6%98%9F%E6%9C%9F%E5%85%AD%23) `27.6K 🔥`
1. [DIOR活动 (DIOR activities)](https://s.weibo.com/weibo?q=%23DIOR%E6%B4%BB%E5%8A%A8%23) `27.5K 🔥`
1. [直播间禁售13类食品新规今起实施 (New rules banning the sale of 13 types of food in live broadcast rooms will be implemented from now on)](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E6%92%AD%E9%97%B4%E7%A6%81%E5%94%AE13%E7%B1%BB%E9%A3%9F%E5%93%81%E6%96%B0%E8%A7%84%E4%BB%8A%E8%B5%B7%E5%AE%9E%E6%96%BD%23) `100.5K 🔥` `-44%`
1. [好想来上架山姆零食](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E6%83%B3%E6%9D%A5%E4%B8%8A%E6%9E%B6%E5%B1%B1%E5%A7%86%E9%9B%B6%E9%A3%9F%23) `43.4K 🔥` `-66%`
1. [沙某编造传播涉科大讯飞网络谣言被拘](https://s.weibo.com/weibo?q=%23%E6%B2%99%E6%9F%90%E7%BC%96%E9%80%A0%E4%BC%A0%E6%92%AD%E6%B6%89%E7%A7%91%E5%A4%A7%E8%AE%AF%E9%A3%9E%E7%BD%91%E7%BB%9C%E8%B0%A3%E8%A8%80%E8%A2%AB%E6%8B%98%23) `39.2K 🔥` `-63%`
1. [超话同人绘画大赛 (Super Talk Fan Drawing Contest)](https://s.weibo.com/weibo?q=%23%E8%B6%85%E8%AF%9D%E5%90%8C%E4%BA%BA%E7%BB%98%E7%94%BB%E5%A4%A7%E8%B5%9B%23) `38.2K 🔥` `-61%`
1. [章子怡脸咋了](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%AD%90%E6%80%A1%E8%84%B8%E5%92%8B%E4%BA%86%23) `38.1K 🔥` `-61%`
1. [小狗不会握前手只会握后手](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E4%B8%8D%E4%BC%9A%E6%8F%A1%E5%89%8D%E6%89%8B%E5%8F%AA%E4%BC%9A%E6%8F%A1%E5%90%8E%E6%89%8B%23) `37.0K 🔥` `-46%`
1. [伊朗问美国为何不敢让航母靠近](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%97%AE%E7%BE%8E%E5%9B%BD%E4%B8%BA%E4%BD%95%E4%B8%8D%E6%95%A2%E8%AE%A9%E8%88%AA%E6%AF%8D%E9%9D%A0%E8%BF%91%23) `36.7K 🔥` `-46%`
1. [72岁蔡正元入狱前最后直播 (72-year-old Cai Zhengyuan’s last live broadcast before being imprisoned)](https://s.weibo.com/weibo?q=%2372%E5%B2%81%E8%94%A1%E6%AD%A3%E5%85%83%E5%85%A5%E7%8B%B1%E5%89%8D%E6%9C%80%E5%90%8E%E7%9B%B4%E6%92%AD%23) `35.9K 🔥` `-42%`
1. [章子怡高叶影后双黄蛋](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%AD%90%E6%80%A1%E9%AB%98%E5%8F%B6%E5%BD%B1%E5%90%8E%E5%8F%8C%E9%BB%84%E8%9B%8B%23) `35.8K 🔥` `-44%`
1. [papi酱又给内娱指了条明路 (Papi Jiang once again pointed out a clear path for internal entertainment)](https://s.weibo.com/weibo?q=%23papi%E9%85%B1%E5%8F%88%E7%BB%99%E5%86%85%E5%A8%B1%E6%8C%87%E4%BA%86%E6%9D%A1%E6%98%8E%E8%B7%AF%23) `35.1K 🔥` `-43%`
1. [逐玉 (Zhuyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `34.7K 🔥` `-40%`
1. [外网也意识到韩国偷文化了](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%BD%91%E4%B9%9F%E6%84%8F%E8%AF%86%E5%88%B0%E9%9F%A9%E5%9B%BD%E5%81%B7%E6%96%87%E5%8C%96%E4%BA%86%23) `34.2K 🔥` `-42%`
1. [铁路通报女子月经弄脏卧铺事件](https://s.weibo.com/weibo?q=%23%E9%93%81%E8%B7%AF%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%90%E6%9C%88%E7%BB%8F%E5%BC%84%E8%84%8F%E5%8D%A7%E9%93%BA%E4%BA%8B%E4%BB%B6%23) `33.9K 🔥` `-41%`
1. [迪丽热巴迪奥活动直拍](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%AA%E5%A5%A5%E6%B4%BB%E5%8A%A8%E7%9B%B4%E6%8B%8D%23) `33.6K 🔥` `-39%`
1. [七旬老人呼吸困难自行拿剪刀捅胸 (A 70-year-old man has difficulty breathing and stabs his chest with scissors)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E6%97%AC%E8%80%81%E4%BA%BA%E5%91%BC%E5%90%B8%E5%9B%B0%E9%9A%BE%E8%87%AA%E8%A1%8C%E6%8B%BF%E5%89%AA%E5%88%80%E6%8D%85%E8%83%B8%23) `30.6K 🔥` `-35%`
1. [为什么生物地理会被踢出中考计分 (Why was biogeography kicked out of the high school entrance exam?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%94%9F%E7%89%A9%E5%9C%B0%E7%90%86%E4%BC%9A%E8%A2%AB%E8%B8%A2%E5%87%BA%E4%B8%AD%E8%80%83%E8%AE%A1%E5%88%86%23) `28.9K 🔥` `-57%`
1. [时代峰峻后期你睡得着吗](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%90%8E%E6%9C%9F%E4%BD%A0%E7%9D%A1%E5%BE%97%E7%9D%80%E5%90%97%23) `28.1K 🔥` `-27%`
1. [迪丽热巴 女王回归](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%20%E5%A5%B3%E7%8E%8B%E5%9B%9E%E5%BD%92%23) `27.9K 🔥` `-21%`
1. [母亲带女儿买鞋在店门口犹豫半小时](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E5%B8%A6%E5%A5%B3%E5%84%BF%E4%B9%B0%E9%9E%8B%E5%9C%A8%E5%BA%97%E9%97%A8%E5%8F%A3%E7%8A%B9%E8%B1%AB%E5%8D%8A%E5%B0%8F%E6%97%B6%23) `27.8K 🔥` `-21%`
1. [桃黑黑直播 (Taoheihei live broadcast)](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E7%9B%B4%E6%92%AD%23) `27.7K 🔥` `-58%`
1. [英雄联盟全球先锋赛 (League of Legends Global Pioneer Tournament)](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9F%E5%85%A8%E7%90%83%E5%85%88%E9%94%8B%E8%B5%9B%23) `27.6K 🔥` `-63%`

Updated at 2026-03-21 03:21:02

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
