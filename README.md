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

1. [白鹿告别欢娱 (Bailu bids farewell to joy)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%91%8A%E5%88%AB%E6%AC%A2%E5%A8%B1%23) `8.6M 🔥` `NEW`
1. [LV起诉国家知识产权局案开庭](https://s.weibo.com/weibo?q=%23LV%E8%B5%B7%E8%AF%89%E5%9B%BD%E5%AE%B6%E7%9F%A5%E8%AF%86%E4%BA%A7%E6%9D%83%E5%B1%80%E6%A1%88%E5%BC%80%E5%BA%AD%23) `1.1M 🔥` `NEW`
1. [硬核数据看中国经济脉动](https://s.weibo.com/weibo?q=%23%E7%A1%AC%E6%A0%B8%E6%95%B0%E6%8D%AE%E7%9C%8B%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E8%84%89%E5%8A%A8%23) `1.1M 🔥` `NEW`
1. [沈阳暴雨](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E6%9A%B4%E9%9B%A8%23) `1.0M 🔥` `NEW`
1. [贝林厄姆打人疑似被西语脏话激怒](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E6%9E%97%E5%8E%84%E5%A7%86%E6%89%93%E4%BA%BA%E7%96%91%E4%BC%BC%E8%A2%AB%E8%A5%BF%E8%AF%AD%E8%84%8F%E8%AF%9D%E6%BF%80%E6%80%92%23) `945.9K 🔥` `NEW`
1. [与赵丽颖共探纪梵希缎光艺境](https://s.weibo.com/weibo?q=%23%E4%B8%8E%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%85%B1%E6%8E%A2%E7%BA%AA%E6%A2%B5%E5%B8%8C%E7%BC%8E%E5%85%89%E8%89%BA%E5%A2%83%23) `821.8K 🔥` `NEW`
1. [开到荼蘼](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%88%B0%E8%8D%BC%E8%98%BC%23) `412.0K 🔥` `NEW`
1. [仅两千人想看逐玉演唱会](https://s.weibo.com/weibo?q=%23%E4%BB%85%E4%B8%A4%E5%8D%83%E4%BA%BA%E6%83%B3%E7%9C%8B%E9%80%90%E7%8E%89%E6%BC%94%E5%94%B1%E4%BC%9A%23) `411.8K 🔥` `NEW`
1. [张天陈奕辰分手](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A4%A9%E9%99%88%E5%A5%95%E8%BE%B0%E5%88%86%E6%89%8B%23) `404.9K 🔥` `NEW`
1. [小城春色开机](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E6%98%A5%E8%89%B2%E5%BC%80%E6%9C%BA%23) `401.3K 🔥` `NEW`
1. [偷票房 (Steal the box office)](https://s.weibo.com/weibo?q=%23%E5%81%B7%E7%A5%A8%E6%88%BF%23) `400.2K 🔥` `NEW`
1. [男生高考596分被学费愁哭](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E9%AB%98%E8%80%83596%E5%88%86%E8%A2%AB%E5%AD%A6%E8%B4%B9%E6%84%81%E5%93%AD%23) `397.8K 🔥` `NEW`
1. [匈牙利前外长将入职比亚迪](https://s.weibo.com/weibo?q=%23%E5%8C%88%E7%89%99%E5%88%A9%E5%89%8D%E5%A4%96%E9%95%BF%E5%B0%86%E5%85%A5%E8%81%8C%E6%AF%94%E4%BA%9A%E8%BF%AA%23) `396.3K 🔥` `NEW`
1. [于正回应白鹿到期不续](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E5%9B%9E%E5%BA%94%E7%99%BD%E9%B9%BF%E5%88%B0%E6%9C%9F%E4%B8%8D%E7%BB%AD%23) `394.1K 🔥` `NEW`
1. [妈妈没有批评只有满眼欣赏和羡慕](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E6%B2%A1%E6%9C%89%E6%89%B9%E8%AF%84%E5%8F%AA%E6%9C%89%E6%BB%A1%E7%9C%BC%E6%AC%A3%E8%B5%8F%E5%92%8C%E7%BE%A1%E6%85%95%23) `393.0K 🔥` `NEW`
1. [男子酒后刺死妻子儿子出具谅解书](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%85%92%E5%90%8E%E5%88%BA%E6%AD%BB%E5%A6%BB%E5%AD%90%E5%84%BF%E5%AD%90%E5%87%BA%E5%85%B7%E8%B0%85%E8%A7%A3%E4%B9%A6%23) `390.8K 🔥` `NEW`
1. [育儿嫂20天前体检正常上户前得HPV](https://s.weibo.com/weibo?q=%23%E8%82%B2%E5%84%BF%E5%AB%8220%E5%A4%A9%E5%89%8D%E4%BD%93%E6%A3%80%E6%AD%A3%E5%B8%B8%E4%B8%8A%E6%88%B7%E5%89%8D%E5%BE%97HPV%23) `389.6K 🔥` `NEW`
1. [白鹿工作室](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%B7%A5%E4%BD%9C%E5%AE%A4%23) `387.6K 🔥` `NEW`
1. [第一批用AI的受害者出现了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E7%94%A8AI%E7%9A%84%E5%8F%97%E5%AE%B3%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86%23) `385.5K 🔥` `NEW`
1. [冉莹颖人设](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E4%BA%BA%E8%AE%BE%23) `382.4K 🔥` `NEW`
1. [只有王橹杰一人回复这条微博 (Only Wang Lujie replied to this Weibo post)](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E6%9C%89%E7%8E%8B%E6%A9%B9%E6%9D%B0%E4%B8%80%E4%BA%BA%E5%9B%9E%E5%A4%8D%E8%BF%99%E6%9D%A1%E5%BE%AE%E5%8D%9A%23) `377.8K 🔥` `NEW`
1. [于正回应哭晕在厕所](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E5%9B%9E%E5%BA%94%E5%93%AD%E6%99%95%E5%9C%A8%E5%8E%95%E6%89%80%23) `377.0K 🔥` `NEW`
1. [长鑫科技中一签需缴4330元](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E4%B8%AD%E4%B8%80%E7%AD%BE%E9%9C%80%E7%BC%B44330%E5%85%83%23) `375.1K 🔥` `NEW`
1. [关晓彤陈星旭红掌路透](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E9%99%88%E6%98%9F%E6%97%AD%E7%BA%A2%E6%8E%8C%E8%B7%AF%E9%80%8F%23) `373.4K 🔥` `NEW`
1. [陈伟霆MV女主是章若楠](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86MV%E5%A5%B3%E4%B8%BB%E6%98%AF%E7%AB%A0%E8%8B%A5%E6%A5%A0%23) `370.6K 🔥` `NEW`
1. [吉利星愿累计销量突破80万辆](https://s.weibo.com/weibo?q=%23%E5%90%89%E5%88%A9%E6%98%9F%E6%84%BF%E7%B4%AF%E8%AE%A1%E9%94%80%E9%87%8F%E7%AA%81%E7%A0%B480%E4%B8%87%E8%BE%86%23) `368.3K 🔥` `NEW`
1. [英格兰队长赛后直言很心碎](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E9%98%9F%E9%95%BF%E8%B5%9B%E5%90%8E%E7%9B%B4%E8%A8%80%E5%BE%88%E5%BF%83%E7%A2%8E%23) `367.2K 🔥` `NEW`
1. [英媒列举阿根廷31宗罪](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%AA%92%E5%88%97%E4%B8%BE%E9%98%BF%E6%A0%B9%E5%BB%B731%E5%AE%97%E7%BD%AA%23) `365.5K 🔥` `NEW`
1. [阿根廷救命神球被王濛神预测](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E6%95%91%E5%91%BD%E7%A5%9E%E7%90%83%E8%A2%AB%E7%8E%8B%E6%BF%9B%E7%A5%9E%E9%A2%84%E6%B5%8B%23) `362.5K 🔥` `NEW`
1. [王者荣耀奥特曼联动皮肤](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E5%A5%A5%E7%89%B9%E6%9B%BC%E8%81%94%E5%8A%A8%E7%9A%AE%E8%82%A4%23) `362.0K 🔥` `NEW`
1. [泽连斯基拧瓶盖方式疑违反欧盟规定 (Zelensky's method of twisting bottle caps suspected of violating EU regulations)](https://s.weibo.com/weibo?q=%23%E6%B3%BD%E8%BF%9E%E6%96%AF%E5%9F%BA%E6%8B%A7%E7%93%B6%E7%9B%96%E6%96%B9%E5%BC%8F%E7%96%91%E8%BF%9D%E5%8F%8D%E6%AC%A7%E7%9B%9F%E8%A7%84%E5%AE%9A%23) `359.2K 🔥` `NEW`
1. [沉默断交](https://s.weibo.com/weibo?q=%23%E6%B2%89%E9%BB%98%E6%96%AD%E4%BA%A4%23) `358.2K 🔥` `NEW`
1. [官方发布我在南海很想你英文MV](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%8F%91%E5%B8%83%E6%88%91%E5%9C%A8%E5%8D%97%E6%B5%B7%E5%BE%88%E6%83%B3%E4%BD%A0%E8%8B%B1%E6%96%87MV%23) `353.7K 🔥` `NEW`
1. [尼坤回应长胖了](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E5%9D%A4%E5%9B%9E%E5%BA%94%E9%95%BF%E8%83%96%E4%BA%86%23) `352.3K 🔥` `NEW`
1. [这么巧你也被马宁叫醒了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B9%88%E5%B7%A7%E4%BD%A0%E4%B9%9F%E8%A2%AB%E9%A9%AC%E5%AE%81%E5%8F%AB%E9%86%92%E4%BA%86%23) `349.8K 🔥` `NEW`
1. [野狗骨头又加广了](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E5%8F%88%E5%8A%A0%E5%B9%BF%E4%BA%86%23) `347.0K 🔥` `NEW`
1. [韩娱限薪令](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%A8%B1%E9%99%90%E8%96%AA%E4%BB%A4%23) `344.2K 🔥` `NEW`
1. [红掌开机](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%8E%8C%E5%BC%80%E6%9C%BA%23) `342.8K 🔥` `NEW`
1. [贝林厄姆回应淘汰](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E6%9E%97%E5%8E%84%E5%A7%86%E5%9B%9E%E5%BA%94%E6%B7%98%E6%B1%B0%23) `341.0K 🔥` `NEW`
1. [来武汉渡江与热爱共奔赴](https://s.weibo.com/weibo?q=%23%E6%9D%A5%E6%AD%A6%E6%B1%89%E6%B8%A1%E6%B1%9F%E4%B8%8E%E7%83%AD%E7%88%B1%E5%85%B1%E5%A5%94%E8%B5%B4%23) `339.4K 🔥` `NEW`
1. [TF运动会 (TF Games)](https://s.weibo.com/weibo?q=%23TF%E8%BF%90%E5%8A%A8%E4%BC%9A%23) `338.4K 🔥` `NEW`
1. [王濛受伤后父亲一夜白头](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%8F%97%E4%BC%A4%E5%90%8E%E7%88%B6%E4%BA%B2%E4%B8%80%E5%A4%9C%E7%99%BD%E5%A4%B4%23) `335.5K 🔥` `NEW`
1. [职场最先被AI淘汰的是老员工吗](https://s.weibo.com/weibo?q=%23%E8%81%8C%E5%9C%BA%E6%9C%80%E5%85%88%E8%A2%ABAI%E6%B7%98%E6%B1%B0%E7%9A%84%E6%98%AF%E8%80%81%E5%91%98%E5%B7%A5%E5%90%97%23) `333.2K 🔥` `NEW`
1. [小米澎程无伪装实车曝光](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E6%97%A0%E4%BC%AA%E8%A3%85%E5%AE%9E%E8%BD%A6%E6%9B%9D%E5%85%89%23) `408.5K 🔥` `+66%`
1. [世界第1对世界第2](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E7%AC%AC1%E5%AF%B9%E4%B8%96%E7%95%8C%E7%AC%AC2%23) `402.9K 🔥` `+50%`
1. [赵丽颖 泡芙小姐](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%20%E6%B3%A1%E8%8A%99%E5%B0%8F%E5%A7%90%23) `383.1K 🔥` `+44%`
1. [阿根廷或遭罚 (Argentina may be punished)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E6%88%96%E9%81%AD%E7%BD%9A%23) `2.8M 🔥`
1. [中国用户终于迎来满血iPhone (Chinese users finally get a full-blooded iPhone)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%A8%E6%88%B7%E7%BB%88%E4%BA%8E%E8%BF%8E%E6%9D%A5%E6%BB%A1%E8%A1%80iPhone%23) `380.2K 🔥`
1. [DeepSeek工资待遇太恐怖了 (DeepSeek’s salary package is terrible)](https://s.weibo.com/weibo?q=%23DeepSeek%E5%B7%A5%E8%B5%84%E5%BE%85%E9%81%87%E5%A4%AA%E6%81%90%E6%80%96%E4%BA%86%23) `355.4K 🔥`
1. [贝林厄姆 赛后打人](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E6%9E%97%E5%8E%84%E5%A7%86%20%E8%B5%9B%E5%90%8E%E6%89%93%E4%BA%BA%23) `899.9K 🔥` `-79%`
1. [阿根廷绝杀英格兰](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%BB%9D%E6%9D%80%E8%8B%B1%E6%A0%BC%E5%85%B0%23) `348.8K 🔥` `-97%`

Updated at 2026-07-16 12:22:16

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
