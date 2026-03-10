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

1. [推动新型城镇化今年有这些变化 (There are these changes in promoting new urbanization this year)](https://s.weibo.com/weibo?q=%23%E6%8E%A8%E5%8A%A8%E6%96%B0%E5%9E%8B%E5%9F%8E%E9%95%87%E5%8C%96%E4%BB%8A%E5%B9%B4%E6%9C%89%E8%BF%99%E4%BA%9B%E5%8F%98%E5%8C%96%23) `603.5K 🔥` `NEW`
1. [马琳王曼昱赛后一言不发](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E7%90%B3%E7%8E%8B%E6%9B%BC%E6%98%B1%E8%B5%9B%E5%90%8E%E4%B8%80%E8%A8%80%E4%B8%8D%E5%8F%91%23) `593.7K 🔥` `NEW`
1. [张钧甯美到巴黎了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%92%A7%E7%94%AF%E7%BE%8E%E5%88%B0%E5%B7%B4%E9%BB%8E%E4%BA%86%23) `534.9K 🔥` `NEW`
1. [126个走出大山的孩子老师全都记得](https://s.weibo.com/weibo?q=%23126%E4%B8%AA%E8%B5%B0%E5%87%BA%E5%A4%A7%E5%B1%B1%E7%9A%84%E5%AD%A9%E5%AD%90%E8%80%81%E5%B8%88%E5%85%A8%E9%83%BD%E8%AE%B0%E5%BE%97%23) `479.9K 🔥` `NEW`
1. [建议设夫妻陪护假解决住院无人陪](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E8%AE%BE%E5%A4%AB%E5%A6%BB%E9%99%AA%E6%8A%A4%E5%81%87%E8%A7%A3%E5%86%B3%E4%BD%8F%E9%99%A2%E6%97%A0%E4%BA%BA%E9%99%AA%23) `458.7K 🔥` `NEW`
1. [美的首发自进化家居智能体](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%9A%84%E9%A6%96%E5%8F%91%E8%87%AA%E8%BF%9B%E5%8C%96%E5%AE%B6%E5%B1%85%E6%99%BA%E8%83%BD%E4%BD%93%23) `231.1K 🔥` `NEW`
1. [董明珠呼吁中国企业要自主创新](https://s.weibo.com/weibo?q=%23%E8%91%A3%E6%98%8E%E7%8F%A0%E5%91%BC%E5%90%81%E4%B8%AD%E5%9B%BD%E4%BC%81%E4%B8%9A%E8%A6%81%E8%87%AA%E4%B8%BB%E5%88%9B%E6%96%B0%23) `222.2K 🔥` `NEW`
1. [女子看日本人商场扮熊猫称很搞笑](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%9C%8B%E6%97%A5%E6%9C%AC%E4%BA%BA%E5%95%86%E5%9C%BA%E6%89%AE%E7%86%8A%E7%8C%AB%E7%A7%B0%E5%BE%88%E6%90%9E%E7%AC%91%23) `192.7K 🔥` `NEW`
1. [汪峰要开演唱会了](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E5%B3%B0%E8%A6%81%E5%BC%80%E6%BC%94%E5%94%B1%E4%BC%9A%E4%BA%86%23) `177.9K 🔥` `NEW`
1. [爸妈用车vs我用车](https://s.weibo.com/weibo?q=%23%E7%88%B8%E5%A6%88%E7%94%A8%E8%BD%A6vs%E6%88%91%E7%94%A8%E8%BD%A6%23) `173.2K 🔥` `NEW`
1. [原来忌口辛辣是忌这些 (It turns out that these are the things you should avoid when eating spicy foods.)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%BF%8C%E5%8F%A3%E8%BE%9B%E8%BE%A3%E6%98%AF%E5%BF%8C%E8%BF%99%E4%BA%9B%23) `160.6K 🔥` `NEW`
1. [英国博物馆被曝藏超26万件人类遗骸](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E5%8D%9A%E7%89%A9%E9%A6%86%E8%A2%AB%E6%9B%9D%E8%97%8F%E8%B6%8526%E4%B8%87%E4%BB%B6%E4%BA%BA%E7%B1%BB%E9%81%97%E9%AA%B8%23) `160.6K 🔥` `NEW`
1. [王曼昱对日乒六年不败战绩被打破](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%AF%B9%E6%97%A5%E4%B9%92%E5%85%AD%E5%B9%B4%E4%B8%8D%E8%B4%A5%E6%88%98%E7%BB%A9%E8%A2%AB%E6%89%93%E7%A0%B4%23) `160.6K 🔥` `NEW`
1. [王曼昱输球后未接受采访](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E8%BE%93%E7%90%83%E5%90%8E%E6%9C%AA%E6%8E%A5%E5%8F%97%E9%87%87%E8%AE%BF%23) `160.5K 🔥` `NEW`
1. [孙颖莎些许犹豫](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E4%BA%9B%E8%AE%B8%E7%8A%B9%E8%B1%AB%23) `160.5K 🔥` `NEW`
1. [千元机快要消失了](https://s.weibo.com/weibo?q=%23%E5%8D%83%E5%85%83%E6%9C%BA%E5%BF%AB%E8%A6%81%E6%B6%88%E5%A4%B1%E4%BA%86%23) `160.5K 🔥` `NEW`
1. [宋平同志遗体在京火化 (Comrade Song Ping's body was cremated in Beijing)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%B9%B3%E5%90%8C%E5%BF%97%E9%81%97%E4%BD%93%E5%9C%A8%E4%BA%AC%E7%81%AB%E5%8C%96%23) `1.0M 🔥`
1. [中传回应砍掉16个专业](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BC%A0%E5%9B%9E%E5%BA%94%E7%A0%8D%E6%8E%8916%E4%B8%AA%E4%B8%93%E4%B8%9A%23) `743.0K 🔥`
1. [王曼昱爆冷](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E7%88%86%E5%86%B7%23) `578.8K 🔥`
1. [王曼昱0比3大藤沙月](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B10%E6%AF%943%E5%A4%A7%E8%97%A4%E6%B2%99%E6%9C%88%23) `540.0K 🔥`
1. [大藤沙月回应首胜王曼昱 (Da Teng Shayue responded to Wang Manyu's first victory)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%97%A4%E6%B2%99%E6%9C%88%E5%9B%9E%E5%BA%94%E9%A6%96%E8%83%9C%E7%8E%8B%E6%9B%BC%E6%98%B1%23) `523.1K 🔥`
1. [建议小学三年级前课间半小时 (It is recommended that half an hour be allowed in the recess before the third grade of primary school)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%B0%8F%E5%AD%A6%E4%B8%89%E5%B9%B4%E7%BA%A7%E5%89%8D%E8%AF%BE%E9%97%B4%E5%8D%8A%E5%B0%8F%E6%97%B6%23) `501.0K 🔥`
1. [伊朗提出停火条件](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8F%90%E5%87%BA%E5%81%9C%E7%81%AB%E6%9D%A1%E4%BB%B6%23) `422.7K 🔥` `-28%`
1. [35岁程序员写网文2年成大神 (35-year-old programmer became a master after 2 years of writing online articles)](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E7%A8%8B%E5%BA%8F%E5%91%98%E5%86%99%E7%BD%91%E6%96%872%E5%B9%B4%E6%88%90%E5%A4%A7%E7%A5%9E%23) `415.1K 🔥` `-23%`
1. [王劲松长文](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%B2%E6%9D%BE%E9%95%BF%E6%96%87%23) `378.4K 🔥` `-35%`
1. [手机集体涨价原因](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E9%9B%86%E4%BD%93%E6%B6%A8%E4%BB%B7%E5%8E%9F%E5%9B%A0%23) `364.0K 🔥` `-40%`
1. [黄金不再保值了吗](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E4%B8%8D%E5%86%8D%E4%BF%9D%E5%80%BC%E4%BA%86%E5%90%97%23) `300.9K 🔥` `-48%`
1. [白蛇传1924两天播放破2亿](https://s.weibo.com/weibo?q=%23%E7%99%BD%E8%9B%87%E4%BC%A01924%E4%B8%A4%E5%A4%A9%E6%92%AD%E6%94%BE%E7%A0%B42%E4%BA%BF%23) `250.2K 🔥` `-56%`
1. [樊长玉真实身份](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E9%95%BF%E7%8E%89%E7%9C%9F%E5%AE%9E%E8%BA%AB%E4%BB%BD%23) `248.2K 🔥` `-55%`
1. [香蕉有可能会灭绝](https://s.weibo.com/weibo?q=%23%E9%A6%99%E8%95%89%E6%9C%89%E5%8F%AF%E8%83%BD%E4%BC%9A%E7%81%AD%E7%BB%9D%23) `241.0K 🔥` `-58%`
1. [李羲承退队 (Li Xicheng quits the team)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BE%B2%E6%89%BF%E9%80%80%E9%98%9F%23) `210.7K 🔥` `-97%`
1. [JYP从JYP辞职了](https://s.weibo.com/weibo?q=%23JYP%E4%BB%8EJYP%E8%BE%9E%E8%81%8C%E4%BA%86%23) `210.0K 🔥` `-62%`
1. [50岁大姐睡觉时粉碎性骨折](https://s.weibo.com/weibo?q=%2350%E5%B2%81%E5%A4%A7%E5%A7%90%E7%9D%A1%E8%A7%89%E6%97%B6%E7%B2%89%E7%A2%8E%E6%80%A7%E9%AA%A8%E6%8A%98%23) `200.5K 🔥` `-64%`
1. [ZB1解散 (ZB1 disbanded)](https://s.weibo.com/weibo?q=%23ZB1%E8%A7%A3%E6%95%A3%23) `200.3K 🔥` `-64%`
1. [七人男团魔咒](https://s.weibo.com/weibo?q=%23%E4%B8%83%E4%BA%BA%E7%94%B7%E5%9B%A2%E9%AD%94%E5%92%92%23) `200.1K 🔥` `-63%`
1. [12岁女孩盘下文具店雇妈妈看店 (A 12-year-old girl hires her mother to look after a furniture store)](https://s.weibo.com/weibo?q=%2312%E5%B2%81%E5%A5%B3%E5%AD%A9%E7%9B%98%E4%B8%8B%E6%96%87%E5%85%B7%E5%BA%97%E9%9B%87%E5%A6%88%E5%A6%88%E7%9C%8B%E5%BA%97%23) `199.9K 🔥` `-65%`
1. [朴成训 门面](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E6%88%90%E8%AE%AD%20%E9%97%A8%E9%9D%A2%23) `199.9K 🔥` `-63%`
1. [李羲承进行曲](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BE%B2%E6%89%BF%E8%BF%9B%E8%A1%8C%E6%9B%B2%23) `185.5K 🔥` `-66%`
1. [时代峰峻把world打成word](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E6%8A%8Aworld%E6%89%93%E6%88%90word%23) `172.4K 🔥` `-68%`
1. [白日提灯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `160.6K 🔥` `-70%`
1. [伊朗驻华大使称美以必须离开 (Iran's ambassador to China says US and Israel must leave)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%A9%BB%E5%8D%8E%E5%A4%A7%E4%BD%BF%E7%A7%B0%E7%BE%8E%E4%BB%A5%E5%BF%85%E9%A1%BB%E7%A6%BB%E5%BC%80%23) `160.6K 🔥` `-70%`
1. [袁惟仁丧葬费用均由圈内好友支付 (Yuan Weiren’s funeral expenses were paid by friends in the circle)](https://s.weibo.com/weibo?q=%23%E8%A2%81%E6%83%9F%E4%BB%81%E4%B8%A7%E8%91%AC%E8%B4%B9%E7%94%A8%E5%9D%87%E7%94%B1%E5%9C%88%E5%86%85%E5%A5%BD%E5%8F%8B%E6%94%AF%E4%BB%98%23) `160.6K 🔥` `-70%`
1. [张凌赫回应天涯四美已合作两美](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%9E%E5%BA%94%E5%A4%A9%E6%B6%AF%E5%9B%9B%E7%BE%8E%E5%B7%B2%E5%90%88%E4%BD%9C%E4%B8%A4%E7%BE%8E%23) `160.6K 🔥` `-72%`
1. [长宁是未来皇后](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%AE%81%E6%98%AF%E6%9C%AA%E6%9D%A5%E7%9A%87%E5%90%8E%23) `160.6K 🔥` `-72%`
1. [美国开始甩锅了](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%BC%80%E5%A7%8B%E7%94%A9%E9%94%85%E4%BA%86%23) `160.6K 🔥` `-70%`
1. [德黑兰降黑雨 (Black rain falls in Tehran)](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E9%BB%91%E5%85%B0%E9%99%8D%E9%BB%91%E9%9B%A8%23) `160.5K 🔥` `-71%`
1. [自己做饭固然健康但能吃吗](https://s.weibo.com/weibo?q=%23%E8%87%AA%E5%B7%B1%E5%81%9A%E9%A5%AD%E5%9B%BA%E7%84%B6%E5%81%A5%E5%BA%B7%E4%BD%86%E8%83%BD%E5%90%83%E5%90%97%23) `160.5K 🔥` `-70%`
1. [150层酥皮连切30多刀雕出松鼠](https://s.weibo.com/weibo?q=%23150%E5%B1%82%E9%85%A5%E7%9A%AE%E8%BF%9E%E5%88%8730%E5%A4%9A%E5%88%80%E9%9B%95%E5%87%BA%E6%9D%BE%E9%BC%A0%23) `160.5K 🔥` `-70%`
1. [enhypen成员 (enhypenmembers)](https://s.weibo.com/weibo?q=%23enhypen%E6%88%90%E5%91%98%23) `160.5K 🔥` `-70%`
1. [美军急调韩国萨德系统部署中东](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E6%80%A5%E8%B0%83%E9%9F%A9%E5%9B%BD%E8%90%A8%E5%BE%B7%E7%B3%BB%E7%BB%9F%E9%83%A8%E7%BD%B2%E4%B8%AD%E4%B8%9C%23) `160.5K 🔥` `-70%`

Updated at 2026-03-10 17:26:18

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
