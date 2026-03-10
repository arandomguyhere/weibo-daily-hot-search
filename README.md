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

1. [张婧仪浪莎品牌代言人 (Zhang Jingyi Langsha brand spokesperson)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%E6%B5%AA%E8%8E%8E%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `970.5K 🔥` `NEW`
1. [福建舰入列就形成了战斗力](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E8%88%B0%E5%85%A5%E5%88%97%E5%B0%B1%E5%BD%A2%E6%88%90%E4%BA%86%E6%88%98%E6%96%97%E5%8A%9B%23) `970.0K 🔥` `NEW`
1. [建议关注大学生心理健康问题](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%85%B3%E6%B3%A8%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%BF%83%E7%90%86%E5%81%A5%E5%BA%B7%E9%97%AE%E9%A2%98%23) `943.7K 🔥` `NEW`
1. [甜茶买了孙颖莎海报](https://s.weibo.com/weibo?q=%23%E7%94%9C%E8%8C%B6%E4%B9%B0%E4%BA%86%E5%AD%99%E9%A2%96%E8%8E%8E%E6%B5%B7%E6%8A%A5%23) `855.2K 🔥` `NEW`
1. [未婚夫去世了该不该赡养对方父母](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E5%A9%9A%E5%A4%AB%E5%8E%BB%E4%B8%96%E4%BA%86%E8%AF%A5%E4%B8%8D%E8%AF%A5%E8%B5%A1%E5%85%BB%E5%AF%B9%E6%96%B9%E7%88%B6%E6%AF%8D%23) `832.8K 🔥` `NEW`
1. [杨紫紫色高定](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%B4%AB%E8%89%B2%E9%AB%98%E5%AE%9A%23) `763.5K 🔥` `NEW`
1. [倪虹洁走完红毯天塌了](https://s.weibo.com/weibo?q=%23%E5%80%AA%E8%99%B9%E6%B4%81%E8%B5%B0%E5%AE%8C%E7%BA%A2%E6%AF%AF%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `760.9K 🔥` `NEW`
1. [BeADreamer](https://s.weibo.com/weibo?q=%23BeADreamer%23) `760.4K 🔥` `NEW`
1. [罗永浩说手机行业好久没创新了](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%B8%E6%B5%A9%E8%AF%B4%E6%89%8B%E6%9C%BA%E8%A1%8C%E4%B8%9A%E5%A5%BD%E4%B9%85%E6%B2%A1%E5%88%9B%E6%96%B0%E4%BA%86%23) `758.0K 🔥` `NEW`
1. [手机涨价潮下老款机型遭疯抢](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E6%B6%A8%E4%BB%B7%E6%BD%AE%E4%B8%8B%E8%80%81%E6%AC%BE%E6%9C%BA%E5%9E%8B%E9%81%AD%E7%96%AF%E6%8A%A2%23) `750.4K 🔥` `NEW`
1. [原来茶叶会越放越香 (It turns out that the tea will become more fragrant the longer it is left.)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%8C%B6%E5%8F%B6%E4%BC%9A%E8%B6%8A%E6%94%BE%E8%B6%8A%E9%A6%99%23) `750.0K 🔥` `NEW`
1. [国宝级兵王亮相](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%9D%E7%BA%A7%E5%85%B5%E7%8E%8B%E4%BA%AE%E7%9B%B8%23) `747.0K 🔥` `NEW`
1. [在医院生个孩子只花了2块5](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%8C%BB%E9%99%A2%E7%94%9F%E4%B8%AA%E5%AD%A9%E5%AD%90%E5%8F%AA%E8%8A%B1%E4%BA%862%E5%9D%975%23) `745.2K 🔥` `NEW`
1. [王曼昱重庆冠军赛状态](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E9%87%8D%E5%BA%86%E5%86%A0%E5%86%9B%E8%B5%9B%E7%8A%B6%E6%80%81%23) `736.8K 🔥` `NEW`
1. [宋平同志遗体在京火化 (Comrade Song Ping's body was cremated in Beijing)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%B9%B3%E5%90%8C%E5%BF%97%E9%81%97%E4%BD%93%E5%9C%A8%E4%BA%AC%E7%81%AB%E5%8C%96%23) `1.0M 🔥` `+35%`
1. [2026年安排国防支出1.94万亿元](https://s.weibo.com/weibo?q=%232026%E5%B9%B4%E5%AE%89%E6%8E%92%E5%9B%BD%E9%98%B2%E6%94%AF%E5%87%BA1.94%E4%B8%87%E4%BA%BF%E5%85%83%23) `1.0M 🔥` `+271%`
1. [推动新型城镇化今年有这些变化 (There are these changes in promoting new urbanization this year)](https://s.weibo.com/weibo?q=%23%E6%8E%A8%E5%8A%A8%E6%96%B0%E5%9E%8B%E5%9F%8E%E9%95%87%E5%8C%96%E4%BB%8A%E5%B9%B4%E6%9C%89%E8%BF%99%E4%BA%9B%E5%8F%98%E5%8C%96%23) `1.0M 🔥` `+76%`
1. [中方回应北京至平壤列车恢复运行](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E5%8C%97%E4%BA%AC%E8%87%B3%E5%B9%B3%E5%A3%A4%E5%88%97%E8%BD%A6%E6%81%A2%E5%A4%8D%E8%BF%90%E8%A1%8C%23) `1.0M 🔥` `+240%`
1. [52条中日航线2月取消全部航班 (All 52 China-Japan routes canceled flights in February)](https://s.weibo.com/weibo?q=%2352%E6%9D%A1%E4%B8%AD%E6%97%A5%E8%88%AA%E7%BA%BF2%E6%9C%88%E5%8F%96%E6%B6%88%E5%85%A8%E9%83%A8%E8%88%AA%E7%8F%AD%23) `993.5K 🔥` `+237%`
1. [150层酥皮连切30多刀雕出松鼠](https://s.weibo.com/weibo?q=%23150%E5%B1%82%E9%85%A5%E7%9A%AE%E8%BF%9E%E5%88%8730%E5%A4%9A%E5%88%80%E9%9B%95%E5%87%BA%E6%9D%BE%E9%BC%A0%23) `987.4K 🔥` `+238%`
1. [建议推出老年人防沉迷模式](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%8E%A8%E5%87%BA%E8%80%81%E5%B9%B4%E4%BA%BA%E9%98%B2%E6%B2%89%E8%BF%B7%E6%A8%A1%E5%BC%8F%23) `966.8K 🔥` `+368%`
1. [中传回应砍掉16个专业](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BC%A0%E5%9B%9E%E5%BA%94%E7%A0%8D%E6%8E%8916%E4%B8%AA%E4%B8%93%E4%B8%9A%23) `955.6K 🔥` `+243%`
1. [伊朗提出停火条件 (Iran proposes ceasefire conditions)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8F%90%E5%87%BA%E5%81%9C%E7%81%AB%E6%9D%A1%E4%BB%B6%23) `936.3K 🔥` `+250%`
1. [周雨推测王曼昱爆冷输球原因](https://s.weibo.com/weibo?q=%23%E5%91%A8%E9%9B%A8%E6%8E%A8%E6%B5%8B%E7%8E%8B%E6%9B%BC%E6%98%B1%E7%88%86%E5%86%B7%E8%BE%93%E7%90%83%E5%8E%9F%E5%9B%A0%23) `914.8K 🔥` `+223%`
1. [白蛇传1924两天播放破2亿 (The Legend of White Snake 1924 exceeded 200 million views in two days)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E8%9B%87%E4%BC%A01924%E4%B8%A4%E5%A4%A9%E6%92%AD%E6%94%BE%E7%A0%B42%E4%BA%BF%23) `901.8K 🔥` `+240%`
1. [孔雪儿回应和田曦薇二搭 (Kong Xueer responded to dating Tian Xiwei)](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E5%9B%9E%E5%BA%94%E5%92%8C%E7%94%B0%E6%9B%A6%E8%96%87%E4%BA%8C%E6%90%AD%23) `890.2K 🔥` `+539%`
1. [原来忌口辛辣是忌这些 (It turns out that these are the things you should avoid when eating spicy foods.)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%BF%8C%E5%8F%A3%E8%BE%9B%E8%BE%A3%E6%98%AF%E5%BF%8C%E8%BF%99%E4%BA%9B%23) `875.5K 🔥` `+389%`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `868.6K 🔥` `+270%`
1. [黄金不再保值了吗](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E4%B8%8D%E5%86%8D%E4%BF%9D%E5%80%BC%E4%BA%86%E5%90%97%23) `846.8K 🔥` `+317%`
1. [JYP考公上岸了](https://s.weibo.com/weibo?q=%23JYP%E8%80%83%E5%85%AC%E4%B8%8A%E5%B2%B8%E4%BA%86%23) `823.1K 🔥` `+406%`
1. [女子怀孕后送护肤品朋友感到冒犯](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%80%80%E5%AD%95%E5%90%8E%E9%80%81%E6%8A%A4%E8%82%A4%E5%93%81%E6%9C%8B%E5%8F%8B%E6%84%9F%E5%88%B0%E5%86%92%E7%8A%AF%23) `818.0K 🔥` `+391%`
1. [李羲承退队 (Li Xicheng quits the team)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BE%B2%E6%89%BF%E9%80%80%E9%98%9F%23) `811.6K 🔥` `+361%`
1. [LV大秀](https://s.weibo.com/weibo?q=%23LV%E5%A4%A7%E7%A7%80%23) `762.9K 🔥` `+375%`
1. [刘亦菲看秀造型](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E7%9C%8B%E7%A7%80%E9%80%A0%E5%9E%8B%23) `761.8K 🔥` `+404%`
1. [李羲承有点像我离职的lastday](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BE%B2%E6%89%BF%E6%9C%89%E7%82%B9%E5%83%8F%E6%88%91%E7%A6%BB%E8%81%8C%E7%9A%84lastday%23) `758.7K 🔥` `+363%`
1. [JYP从JYP辞职了](https://s.weibo.com/weibo?q=%23JYP%E4%BB%8EJYP%E8%BE%9E%E8%81%8C%E4%BA%86%23) `756.6K 🔥` `+333%`
1. [ZB1解散 (ZB1 disbanded)](https://s.weibo.com/weibo?q=%23ZB1%E8%A7%A3%E6%95%A3%23) `755.4K 🔥` `+341%`
1. [英国博物馆被曝藏超26万件人类遗骸](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E5%8D%9A%E7%89%A9%E9%A6%86%E8%A2%AB%E6%9B%9D%E8%97%8F%E8%B6%8526%E4%B8%87%E4%BB%B6%E4%BA%BA%E7%B1%BB%E9%81%97%E9%AA%B8%23) `755.1K 🔥` `+251%`
1. [鹿晗五哈上班 (Luhan Wuha goes to work)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E4%BA%94%E5%93%88%E4%B8%8A%E7%8F%AD%23) `753.4K 🔥` `+343%`
1. [50岁大姐睡觉时粉碎性骨折 (A 50-year-old sister suffered a comminuted fracture while sleeping)](https://s.weibo.com/weibo?q=%2350%E5%B2%81%E5%A4%A7%E5%A7%90%E7%9D%A1%E8%A7%89%E6%97%B6%E7%B2%89%E7%A2%8E%E6%80%A7%E9%AA%A8%E6%8A%98%23) `752.4K 🔥` `+397%`
1. [手机集体涨价原因 (Reasons for collective price increase of mobile phones)](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E9%9B%86%E4%BD%93%E6%B6%A8%E4%BB%B7%E5%8E%9F%E5%9B%A0%23) `752.0K 🔥` `+336%`
1. [哄自己多喝水的邪修方法](https://s.weibo.com/weibo?q=%23%E5%93%84%E8%87%AA%E5%B7%B1%E5%A4%9A%E5%96%9D%E6%B0%B4%E7%9A%84%E9%82%AA%E4%BF%AE%E6%96%B9%E6%B3%95%23) `748.6K 🔥` `+585%`
1. [袁惟仁丧葬费用均由圈内好友支付 (Yuan Weiren’s funeral expenses were paid by friends in the circle)](https://s.weibo.com/weibo?q=%23%E8%A2%81%E6%83%9F%E4%BB%81%E4%B8%A7%E8%91%AC%E8%B4%B9%E7%94%A8%E5%9D%87%E7%94%B1%E5%9C%88%E5%86%85%E5%A5%BD%E5%8F%8B%E6%94%AF%E4%BB%98%23) `746.6K 🔥` `+486%`
1. [你的下一部手机要多花1000元](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E4%B8%8B%E4%B8%80%E9%83%A8%E6%89%8B%E6%9C%BA%E8%A6%81%E5%A4%9A%E8%8A%B11000%E5%85%83%23) `743.8K 🔥` `+453%`
1. [马琳王曼昱赛后一言不发 (Ma Lin and Wang Manyu said nothing after the game)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E7%90%B3%E7%8E%8B%E6%9B%BC%E6%98%B1%E8%B5%9B%E5%90%8E%E4%B8%80%E8%A8%80%E4%B8%8D%E5%8F%91%23) `743.0K 🔥` `+317%`
1. [35岁程序员写网文2年成大神 (35-year-old programmer became a master after 2 years of writing online articles)](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E7%A8%8B%E5%BA%8F%E5%91%98%E5%86%99%E7%BD%91%E6%96%872%E5%B9%B4%E6%88%90%E5%A4%A7%E7%A5%9E%23) `742.4K 🔥` `+491%`
1. [美的稳坐全球智能家电销量第一](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%9A%84%E7%A8%B3%E5%9D%90%E5%85%A8%E7%90%83%E6%99%BA%E8%83%BD%E5%AE%B6%E7%94%B5%E9%94%80%E9%87%8F%E7%AC%AC%E4%B8%80%23) `740.7K 🔥` `+315%`
1. [白日提灯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `740.4K 🔥` `+617%`
1. [王曼昱爆冷](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E7%88%86%E5%86%B7%23) `738.7K 🔥` `+546%`
1. [王曼昱输球后未接受采访](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E8%BE%93%E7%90%83%E5%90%8E%E6%9C%AA%E6%8E%A5%E5%8F%97%E9%87%87%E8%AE%BF%23) `737.8K 🔥` `+698%`
1. [建议消除育龄女性职场顾虑 (Suggestions to eliminate workplace concerns of women of childbearing age)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%B6%88%E9%99%A4%E8%82%B2%E9%BE%84%E5%A5%B3%E6%80%A7%E8%81%8C%E5%9C%BA%E9%A1%BE%E8%99%91%23) `926.5K 🔥`

Updated at 2026-03-10 19:40:57

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
