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

1. [宋平同志遗体在京火化 (Comrade Song Ping's body was cremated in Beijing)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%B9%B3%E5%90%8C%E5%BF%97%E9%81%97%E4%BD%93%E5%9C%A8%E4%BA%AC%E7%81%AB%E5%8C%96%23) `1.0M 🔥` `NEW`
1. [王劲松长文](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%B2%E6%9D%BE%E9%95%BF%E6%96%87%23) `581.9K 🔥` `NEW`
1. [12岁女孩盘下文具店雇妈妈看店](https://s.weibo.com/weibo?q=%2312%E5%B2%81%E5%A5%B3%E5%AD%A9%E7%9B%98%E4%B8%8B%E6%96%87%E5%85%B7%E5%BA%97%E9%9B%87%E5%A6%88%E5%A6%88%E7%9C%8B%E5%BA%97%23) `564.0K 🔥` `NEW`
1. [白蛇传1924两天播放破2亿](https://s.weibo.com/weibo?q=%23%E7%99%BD%E8%9B%87%E4%BC%A01924%E4%B8%A4%E5%A4%A9%E6%92%AD%E6%94%BE%E7%A0%B42%E4%BA%BF%23) `562.4K 🔥` `NEW`
1. [樊长玉真实身份](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E9%95%BF%E7%8E%89%E7%9C%9F%E5%AE%9E%E8%BA%AB%E4%BB%BD%23) `547.0K 🔥` `NEW`
1. [李羲承进行曲](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BE%B2%E6%89%BF%E8%BF%9B%E8%A1%8C%E6%9B%B2%23) `543.6K 🔥` `NEW`
1. [这位人大代表太飒了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BD%8D%E4%BA%BA%E5%A4%A7%E4%BB%A3%E8%A1%A8%E5%A4%AA%E9%A3%92%E4%BA%86%23) `543.4K 🔥` `NEW`
1. [建议初中阶段开展职业启蒙教育](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%88%9D%E4%B8%AD%E9%98%B6%E6%AE%B5%E5%BC%80%E5%B1%95%E8%81%8C%E4%B8%9A%E5%90%AF%E8%92%99%E6%95%99%E8%82%B2%23) `543.0K 🔥` `NEW`
1. [朴成训 门面](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E6%88%90%E8%AE%AD%20%E9%97%A8%E9%9D%A2%23) `542.5K 🔥` `NEW`
1. [enhypen成员](https://s.weibo.com/weibo?q=%23enhypen%E6%88%90%E5%91%98%23) `541.3K 🔥` `NEW`
1. [伊朗驻华大使称美以必须离开 (Iran's ambassador to China says US and Israel must leave)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%A9%BB%E5%8D%8E%E5%A4%A7%E4%BD%BF%E7%A7%B0%E7%BE%8E%E4%BB%A5%E5%BF%85%E9%A1%BB%E7%A6%BB%E5%BC%80%23) `541.0K 🔥` `NEW`
1. [自己做饭固然健康但能吃吗](https://s.weibo.com/weibo?q=%23%E8%87%AA%E5%B7%B1%E5%81%9A%E9%A5%AD%E5%9B%BA%E7%84%B6%E5%81%A5%E5%BA%B7%E4%BD%86%E8%83%BD%E5%90%83%E5%90%97%23) `540.3K 🔥` `NEW`
1. [时代峰峻把world打成word](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E6%8A%8Aworld%E6%89%93%E6%88%90word%23) `539.6K 🔥` `NEW`
1. [以军空袭伊朗核实验室](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E7%A9%BA%E8%A2%AD%E4%BC%8A%E6%9C%97%E6%A0%B8%E5%AE%9E%E9%AA%8C%E5%AE%A4%23) `539.4K 🔥` `NEW`
1. [35岁程序员写网文2年成大神](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E7%A8%8B%E5%BA%8F%E5%91%98%E5%86%99%E7%BD%91%E6%96%872%E5%B9%B4%E6%88%90%E5%A4%A7%E7%A5%9E%23) `537.6K 🔥` `NEW`
1. [iOS26.3.1更新九大问题](https://s.weibo.com/weibo?q=%23iOS26.3.1%E6%9B%B4%E6%96%B0%E4%B9%9D%E5%A4%A7%E9%97%AE%E9%A2%98%23) `536.7K 🔥` `NEW`
1. [中传回应砍掉16个专业](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BC%A0%E5%9B%9E%E5%BA%94%E7%A0%8D%E6%8E%8916%E4%B8%AA%E4%B8%93%E4%B8%9A%23) `744.0K 🔥` `+76%`
1. [手机集体涨价原因](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E9%9B%86%E4%BD%93%E6%B6%A8%E4%BB%B7%E5%8E%9F%E5%9B%A0%23) `603.4K 🔥` `+29%`
1. [王曼昱爆冷](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E7%88%86%E5%86%B7%23) `601.8K 🔥` `+27%`
1. [王曼昱0比3大藤沙月](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B10%E6%AF%943%E5%A4%A7%E8%97%A4%E6%B2%99%E6%9C%88%23) `599.6K 🔥` `+24%`
1. [大藤沙月回应首胜王曼昱 (Da Teng Shayue responded to Wang Manyu's first victory)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%97%A4%E6%B2%99%E6%9C%88%E5%9B%9E%E5%BA%94%E9%A6%96%E8%83%9C%E7%8E%8B%E6%9B%BC%E6%98%B1%23) `593.7K 🔥` `+55%`
1. [制造业升级的超级红包来了](https://s.weibo.com/weibo?q=%23%E5%88%B6%E9%80%A0%E4%B8%9A%E5%8D%87%E7%BA%A7%E7%9A%84%E8%B6%85%E7%BA%A7%E7%BA%A2%E5%8C%85%E6%9D%A5%E4%BA%86%23) `592.1K 🔥` `+29%`
1. [伊朗提出停火条件](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8F%90%E5%87%BA%E5%81%9C%E7%81%AB%E6%9D%A1%E4%BB%B6%23) `585.9K 🔥` `+38%`
1. [黄金不再保值了吗](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E4%B8%8D%E5%86%8D%E4%BF%9D%E5%80%BC%E4%BA%86%E5%90%97%23) `581.1K 🔥` `+42%`
1. [香蕉有可能会灭绝](https://s.weibo.com/weibo?q=%23%E9%A6%99%E8%95%89%E6%9C%89%E5%8F%AF%E8%83%BD%E4%BC%9A%E7%81%AD%E7%BB%9D%23) `577.1K 🔥` `+36%`
1. [张凌赫回应天涯四美已合作两美](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%9E%E5%BA%94%E5%A4%A9%E6%B6%AF%E5%9B%9B%E7%BE%8E%E5%B7%B2%E5%90%88%E4%BD%9C%E4%B8%A4%E7%BE%8E%23) `576.2K 🔥` `+31%`
1. [姑姑你明天没法上学了](https://s.weibo.com/weibo?q=%23%E5%A7%91%E5%A7%91%E4%BD%A0%E6%98%8E%E5%A4%A9%E6%B2%A1%E6%B3%95%E4%B8%8A%E5%AD%A6%E4%BA%86%23) `572.6K 🔥` `+36%`
1. [长宁是未来皇后](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%AE%81%E6%98%AF%E6%9C%AA%E6%9D%A5%E7%9A%87%E5%90%8E%23) `570.4K 🔥` `+36%`
1. [50岁大姐睡觉时粉碎性骨折](https://s.weibo.com/weibo?q=%2350%E5%B2%81%E5%A4%A7%E5%A7%90%E7%9D%A1%E8%A7%89%E6%97%B6%E7%B2%89%E7%A2%8E%E6%80%A7%E9%AA%A8%E6%8A%98%23) `555.4K 🔥` `+40%`
1. [JYP从JYP辞职了](https://s.weibo.com/weibo?q=%23JYP%E4%BB%8EJYP%E8%BE%9E%E8%81%8C%E4%BA%86%23) `552.1K 🔥` `+37%`
1. [ZB1解散 (ZB1 disbanded)](https://s.weibo.com/weibo?q=%23ZB1%E8%A7%A3%E6%95%A3%23) `550.7K 🔥` `+37%`
1. [七人男团魔咒](https://s.weibo.com/weibo?q=%23%E4%B8%83%E4%BA%BA%E7%94%B7%E5%9B%A2%E9%AD%94%E5%92%92%23) `543.8K 🔥` `+38%`
1. [美军急调韩国萨德系统部署中东](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E6%80%A5%E8%B0%83%E9%9F%A9%E5%9B%BD%E8%90%A8%E5%BE%B7%E7%B3%BB%E7%BB%9F%E9%83%A8%E7%BD%B2%E4%B8%AD%E4%B8%9C%23) `542.3K 🔥` `+30%`
1. [白日提灯](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `541.9K 🔥` `+42%`
1. [美国开始甩锅了](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%BC%80%E5%A7%8B%E7%94%A9%E9%94%85%E4%BA%86%23) `541.8K 🔥` `+23%`
1. [袁惟仁丧葬费用均由圈内好友支付 (Yuan Weiren’s funeral expenses were paid by friends in the circle)](https://s.weibo.com/weibo?q=%23%E8%A2%81%E6%83%9F%E4%BB%81%E4%B8%A7%E8%91%AC%E8%B4%B9%E7%94%A8%E5%9D%87%E7%94%B1%E5%9C%88%E5%86%85%E5%A5%BD%E5%8F%8B%E6%94%AF%E4%BB%98%23) `540.8K 🔥` `+44%`
1. [张凌赫像是在横店待疯了 (Zhang Linghe seems to have gone crazy staying in Hengdian)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%83%8F%E6%98%AF%E5%9C%A8%E6%A8%AA%E5%BA%97%E5%BE%85%E7%96%AF%E4%BA%86%23) `540.1K 🔥` `+44%`
1. [Ella送别袁惟仁哭到抽搐](https://s.weibo.com/weibo?q=%23Ella%E9%80%81%E5%88%AB%E8%A2%81%E6%83%9F%E4%BB%81%E5%93%AD%E5%88%B0%E6%8A%BD%E6%90%90%23) `539.0K 🔥` `+42%`
1. [OPPO涨价](https://s.weibo.com/weibo?q=%23OPPO%E6%B6%A8%E4%BB%B7%23) `538.7K 🔥` `+33%`
1. [2026白玉兰预测 (2026 Magnolia Forecast)](https://s.weibo.com/weibo?q=%232026%E7%99%BD%E7%8E%89%E5%85%B0%E9%A2%84%E6%B5%8B%23) `538.3K 🔥` `+43%`
1. [150层酥皮连切30多刀雕出松鼠](https://s.weibo.com/weibo?q=%23150%E5%B1%82%E9%85%A5%E7%9A%AE%E8%BF%9E%E5%88%8730%E5%A4%9A%E5%88%80%E9%9B%95%E5%87%BA%E6%9D%BE%E9%BC%A0%23) `538.1K 🔥` `+37%`
1. [我国约2.2亿人听力有问题](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E7%BA%A62.2%E4%BA%BF%E4%BA%BA%E5%90%AC%E5%8A%9B%E6%9C%89%E9%97%AE%E9%A2%98%23) `537.5K 🔥` `+43%`
1. [代表说儿子告诉他千万不要爹味太浓](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E8%A1%A8%E8%AF%B4%E5%84%BF%E5%AD%90%E5%91%8A%E8%AF%89%E4%BB%96%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E7%88%B9%E5%91%B3%E5%A4%AA%E6%B5%93%23) `536.2K 🔥` `+32%`
1. [两会声音传递法治力度民生温度 (The voices of the two sessions convey the strength of the rule of law and the warmth of people’s livelihood)](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%BC%9A%E5%A3%B0%E9%9F%B3%E4%BC%A0%E9%80%92%E6%B3%95%E6%B2%BB%E5%8A%9B%E5%BA%A6%E6%B0%91%E7%94%9F%E6%B8%A9%E5%BA%A6%23) `606.0K 🔥`
1. [大众9X九大黑科技 (Nine black technologies of Volkswagen 9X)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BC%979X%E4%B9%9D%E5%A4%A7%E9%BB%91%E7%A7%91%E6%8A%80%23) `598.4K 🔥`
1. [建议小学三年级前课间半小时 (It is recommended that half an hour be allowed in the recess before the third grade of primary school)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%B0%8F%E5%AD%A6%E4%B8%89%E5%B9%B4%E7%BA%A7%E5%89%8D%E8%AF%BE%E9%97%B4%E5%8D%8A%E5%B0%8F%E6%97%B6%23) `597.3K 🔥`
1. [德黑兰降黑雨 (Black rain falls in Tehran)](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E9%BB%91%E5%85%B0%E9%99%8D%E9%BB%91%E9%9B%A8%23) `546.1K 🔥`
1. [生命树](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%23) `536.9K 🔥`
1. [李羲承退队 (Li Xicheng quits the team)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BE%B2%E6%89%BF%E9%80%80%E9%98%9F%23) `7.5M 🔥` `-49%`
1. [6G网要来了 (6G network is coming)](https://s.weibo.com/weibo?q=%236G%E7%BD%91%E8%A6%81%E6%9D%A5%E4%BA%86%23) `587.5K 🔥` `-43%`

Updated at 2026-03-10 16:36:54

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
