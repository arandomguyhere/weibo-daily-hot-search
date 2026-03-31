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

1. [鞠婧祎工作室声明 (Ju Jingyi Studio Statement)](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%A3%B0%E6%98%8E%23) `9.7M 🔥` `NEW`
1. [地铁吐血女孩账户因转账频繁被封](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E9%93%81%E5%90%90%E8%A1%80%E5%A5%B3%E5%AD%A9%E8%B4%A6%E6%88%B7%E5%9B%A0%E8%BD%AC%E8%B4%A6%E9%A2%91%E7%B9%81%E8%A2%AB%E5%B0%81%23) `1.8M 🔥` `NEW`
1. [月鳞绮纪OST](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AAOST%23) `381.2K 🔥` `NEW`
1. [ID.ERA 9X 32.98万元起售](https://s.weibo.com/weibo?q=%23ID.ERA%209X%2032.98%E4%B8%87%E5%85%83%E8%B5%B7%E5%94%AE%23) `210.4K 🔥` `NEW`
1. [广州大暴雨把动物也整emo了](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E5%A4%A7%E6%9A%B4%E9%9B%A8%E6%8A%8A%E5%8A%A8%E7%89%A9%E4%B9%9F%E6%95%B4emo%E4%BA%86%23) `194.2K 🔥` `NEW`
1. [地球使用费](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E7%90%83%E4%BD%BF%E7%94%A8%E8%B4%B9%23) `166.6K 🔥` `NEW`
1. [爸爸去哪儿的阿拉蕾长大了](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%8E%BB%E5%93%AA%E5%84%BF%E7%9A%84%E9%98%BF%E6%8B%89%E8%95%BE%E9%95%BF%E5%A4%A7%E4%BA%86%23) `166.3K 🔥` `NEW`
1. [人民日报曾评单依纯李白改编争议](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E6%9B%BE%E8%AF%84%E5%8D%95%E4%BE%9D%E7%BA%AF%E6%9D%8E%E7%99%BD%E6%94%B9%E7%BC%96%E4%BA%89%E8%AE%AE%23) `165.5K 🔥` `NEW`
1. [AI演员 拼尸块](https://s.weibo.com/weibo?q=%23AI%E6%BC%94%E5%91%98%20%E6%8B%BC%E5%B0%B8%E5%9D%97%23) `162.7K 🔥` `NEW`
1. [新能源汽车安全没有上限](https://s.weibo.com/weibo?q=%23%E6%96%B0%E8%83%BD%E6%BA%90%E6%B1%BD%E8%BD%A6%E5%AE%89%E5%85%A8%E6%B2%A1%E6%9C%89%E4%B8%8A%E9%99%90%23) `162.1K 🔥` `NEW`
1. [鹿晗超绝版权意识 (Luhan has extraordinary copyright awareness)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E8%B6%85%E7%BB%9D%E7%89%88%E6%9D%83%E6%84%8F%E8%AF%86%23) `161.2K 🔥` `NEW`
1. [曝iPhoneXX将配屏下摄像头](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhoneXX%E5%B0%86%E9%85%8D%E5%B1%8F%E4%B8%8B%E6%91%84%E5%83%8F%E5%A4%B4%23) `160.6K 🔥` `NEW`
1. [伊朗最大岛屿遭美以袭击](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%80%E5%A4%A7%E5%B2%9B%E5%B1%BF%E9%81%AD%E7%BE%8E%E4%BB%A5%E8%A2%AD%E5%87%BB%23) `159.9K 🔥` `NEW`
1. [马嘉祺月鳞绮纪OST](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AAOST%23) `158.3K 🔥` `NEW`
1. [午睡时间超过1小时死亡风险增加30%](https://s.weibo.com/weibo?q=%23%E5%8D%88%E7%9D%A1%E6%97%B6%E9%97%B4%E8%B6%85%E8%BF%871%E5%B0%8F%E6%97%B6%E6%AD%BB%E4%BA%A1%E9%A3%8E%E9%99%A9%E5%A2%9E%E5%8A%A030%25%23) `157.3K 🔥` `NEW`
1. [邓紫棋巡演内地六站](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E5%B7%A1%E6%BC%94%E5%86%85%E5%9C%B0%E5%85%AD%E7%AB%99%23) `148.4K 🔥` `NEW`
1. [猫把摇粒绒舔不摇了](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E6%8A%8A%E6%91%87%E7%B2%92%E7%BB%92%E8%88%94%E4%B8%8D%E6%91%87%E4%BA%86%23) `133.7K 🔥` `NEW`
1. [曾舜晞陈都灵吻戏镜头](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%88%9C%E6%99%9E%E9%99%88%E9%83%BD%E7%81%B5%E5%90%BB%E6%88%8F%E9%95%9C%E5%A4%B4%23) `123.4K 🔥` `NEW`
1. [美军使用钻地弹袭击伊大型弹药库](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E4%BD%BF%E7%94%A8%E9%92%BB%E5%9C%B0%E5%BC%B9%E8%A2%AD%E5%87%BB%E4%BC%8A%E5%A4%A7%E5%9E%8B%E5%BC%B9%E8%8D%AF%E5%BA%93%23) `113.0K 🔥` `NEW`
1. [祖孙3人遭搅拌车碾压1死1重伤](https://s.weibo.com/weibo?q=%23%E7%A5%96%E5%AD%993%E4%BA%BA%E9%81%AD%E6%90%85%E6%8B%8C%E8%BD%A6%E7%A2%BE%E5%8E%8B1%E6%AD%BB1%E9%87%8D%E4%BC%A4%23) `108.9K 🔥` `NEW`
1. [买车先试开爽7天再下单 (When buying a car, test drive it for 7 days before placing an order.)](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E8%BD%A6%E5%85%88%E8%AF%95%E5%BC%80%E7%88%BD7%E5%A4%A9%E5%86%8D%E4%B8%8B%E5%8D%95%23) `107.2K 🔥` `NEW`
1. [王者后羿海月战令](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E5%90%8E%E7%BE%BF%E6%B5%B7%E6%9C%88%E6%88%98%E4%BB%A4%23) `106.1K 🔥` `NEW`
1. [刘宇宁抢票](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E6%8A%A2%E7%A5%A8%23) `102.3K 🔥` `NEW`
1. [AI大厂月薪6万招不到人](https://s.weibo.com/weibo?q=%23AI%E5%A4%A7%E5%8E%82%E6%9C%88%E8%96%AA6%E4%B8%87%E6%8B%9B%E4%B8%8D%E5%88%B0%E4%BA%BA%23) `102.2K 🔥` `NEW`
1. [两个手握20个经典角色的人合作了](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%B8%AA%E6%89%8B%E6%8F%A120%E4%B8%AA%E7%BB%8F%E5%85%B8%E8%A7%92%E8%89%B2%E7%9A%84%E4%BA%BA%E5%90%88%E4%BD%9C%E4%BA%86%23) `96.6K 🔥` `NEW`
1. [原来有情商的面试是这样子的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%9C%89%E6%83%85%E5%95%86%E7%9A%84%E9%9D%A2%E8%AF%95%E6%98%AF%E8%BF%99%E6%A0%B7%E5%AD%90%E7%9A%84%23) `95.6K 🔥` `NEW`
1. [月鳞绮纪夏之光演谁](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E5%A4%8F%E4%B9%8B%E5%85%89%E6%BC%94%E8%B0%81%23) `89.5K 🔥` `NEW`
1. [苹果称锁定模式至今无人攻破](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E7%A7%B0%E9%94%81%E5%AE%9A%E6%A8%A1%E5%BC%8F%E8%87%B3%E4%BB%8A%E6%97%A0%E4%BA%BA%E6%94%BB%E7%A0%B4%23) `83.5K 🔥` `NEW`
1. [张雪不介意开放影视版权](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E4%B8%8D%E4%BB%8B%E6%84%8F%E5%BC%80%E6%94%BE%E5%BD%B1%E8%A7%86%E7%89%88%E6%9D%83%23) `81.0K 🔥` `NEW`
1. [冰湖重生月鳞绮纪对打](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E5%AF%B9%E6%89%93%23) `79.6K 🔥` `NEW`
1. [文班亚马8分钟两双历史最快 (Bunyama's 8-minute double-double is the fastest in history)](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%8F%AD%E4%BA%9A%E9%A9%AC8%E5%88%86%E9%92%9F%E4%B8%A4%E5%8F%8C%E5%8E%86%E5%8F%B2%E6%9C%80%E5%BF%AB%23) `79.6K 🔥` `NEW`
1. [中国人海上百米高空吊装百米叶片](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B5%B7%E4%B8%8A%E7%99%BE%E7%B1%B3%E9%AB%98%E7%A9%BA%E5%90%8A%E8%A3%85%E7%99%BE%E7%B1%B3%E5%8F%B6%E7%89%87%23) `1.5M 🔥` `+142%`
1. [京东AI家电家居以旧换新不止5折 (JD AI home appliances trade-in for new ones is more than 50% off)](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9CAI%E5%AE%B6%E7%94%B5%E5%AE%B6%E5%B1%85%E4%BB%A5%E6%97%A7%E6%8D%A2%E6%96%B0%E4%B8%8D%E6%AD%A25%E6%8A%98%23) `1.3M 🔥` `+425%`
1. [卜凡团播](https://s.weibo.com/weibo?q=%23%E5%8D%9C%E5%87%A1%E5%9B%A2%E6%92%AD%23) `163.8K 🔥` `+23%`
1. [人民日报评张雪 (People's Daily comments on Zhang Xue)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%AF%84%E5%BC%A0%E9%9B%AA%23) `127.2K 🔥` `+29%`
1. [00后女生逆袭考上985竟是病了](https://s.weibo.com/weibo?q=%2300%E5%90%8E%E5%A5%B3%E7%94%9F%E9%80%86%E8%A2%AD%E8%80%83%E4%B8%8A985%E7%AB%9F%E6%98%AF%E7%97%85%E4%BA%86%23) `151.9K 🔥`
1. [韩国向中国14城发放十年签](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%90%91%E4%B8%AD%E5%9B%BD14%E5%9F%8E%E5%8F%91%E6%94%BE%E5%8D%81%E5%B9%B4%E7%AD%BE%23) `228.3K 🔥` `-44%`
1. [陈都灵预告15秒换了13套衣服](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E9%A2%84%E5%91%8A15%E7%A7%92%E6%8D%A2%E4%BA%8613%E5%A5%97%E8%A1%A3%E6%9C%8D%23) `218.4K 🔥` `-40%`
1. [数学考17的人学会计](https://s.weibo.com/weibo?q=%23%E6%95%B0%E5%AD%A6%E8%80%8317%E7%9A%84%E4%BA%BA%E5%AD%A6%E4%BC%9A%E8%AE%A1%23) `172.3K 🔥` `-38%`
1. [张雪机车一战封神](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E4%B8%80%E6%88%98%E5%B0%81%E7%A5%9E%23) `166.8K 🔥` `-22%`
1. [在意遇难博士床上四件套用了7年](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E6%84%8F%E9%81%87%E9%9A%BE%E5%8D%9A%E5%A3%AB%E5%BA%8A%E4%B8%8A%E5%9B%9B%E4%BB%B6%E5%A5%97%E7%94%A8%E4%BA%867%E5%B9%B4%23) `164.5K 🔥` `-33%`
1. [父母搬砖供出的博士在意遇难](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E6%90%AC%E7%A0%96%E4%BE%9B%E5%87%BA%E7%9A%84%E5%8D%9A%E5%A3%AB%E5%9C%A8%E6%84%8F%E9%81%87%E9%9A%BE%23) `158.9K 🔥` `-79%`
1. [跳楼机原唱实在是忍不下去了 (The original singer of "Jumping Machine" is really unbearable.)](https://s.weibo.com/weibo?q=%23%E8%B7%B3%E6%A5%BC%E6%9C%BA%E5%8E%9F%E5%94%B1%E5%AE%9E%E5%9C%A8%E6%98%AF%E5%BF%8D%E4%B8%8D%E4%B8%8B%E5%8E%BB%E4%BA%86%23) `157.6K 🔥` `-26%`
1. [月鳞绮纪定档 (Moonscale Qi Ji is scheduled to be released)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E5%AE%9A%E6%A1%A3%23) `157.2K 🔥` `-86%`
1. [5种炎症确认与癌症有关 (5 types of inflammation confirmed to be linked to cancer)](https://s.weibo.com/weibo?q=%235%E7%A7%8D%E7%82%8E%E7%97%87%E7%A1%AE%E8%AE%A4%E4%B8%8E%E7%99%8C%E7%97%87%E6%9C%89%E5%85%B3%23) `142.1K 🔥` `-21%`
1. [严浩翔高会更新](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E9%AB%98%E4%BC%9A%E6%9B%B4%E6%96%B0%23) `99.3K 🔥` `-44%`
1. [10部影片定档2026五一档](https://s.weibo.com/weibo?q=%2310%E9%83%A8%E5%BD%B1%E7%89%87%E5%AE%9A%E6%A1%A32026%E4%BA%94%E4%B8%80%E6%A1%A3%23) `88.0K 🔥` `-51%`
1. [伊朗导弹高速突破以色列拦截](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E9%AB%98%E9%80%9F%E7%AA%81%E7%A0%B4%E4%BB%A5%E8%89%B2%E5%88%97%E6%8B%A6%E6%88%AA%23) `87.0K 🔥` `-59%`
1. [虎跳峡落水男子遗体打捞失败](https://s.weibo.com/weibo?q=%23%E8%99%8E%E8%B7%B3%E5%B3%A1%E8%90%BD%E6%B0%B4%E7%94%B7%E5%AD%90%E9%81%97%E4%BD%93%E6%89%93%E6%8D%9E%E5%A4%B1%E8%B4%A5%23) `86.0K 🔥` `-60%`
1. [郭敬明 审美](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%20%E5%AE%A1%E7%BE%8E%23) `81.7K 🔥` `-62%`
1. [桃黑黑网断了](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E7%BD%91%E6%96%AD%E4%BA%86%23) `79.7K 🔥` `-56%`
1. [白日提灯第8集30分5秒 (Lantern in the Day Episode 8 30 minutes and 5 seconds)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E7%AC%AC8%E9%9B%8630%E5%88%865%E7%A7%92%23) `79.5K 🔥` `-55%`

Updated at 2026-03-31 13:53:35

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
