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

1. [宝马iX3价格 (BMW iX3 price)](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E9%A9%ACiX3%E4%BB%B7%E6%A0%BC%23) `1.2M 🔥` `NEW`
1. [人工智能助力中国传统文化推陈出新](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%8A%A9%E5%8A%9B%E4%B8%AD%E5%9B%BD%E4%BC%A0%E7%BB%9F%E6%96%87%E5%8C%96%E6%8E%A8%E9%99%88%E5%87%BA%E6%96%B0%23) `665.9K 🔥` `NEW`
1. [新世代BMW iX3 26.99万起](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%B8%96%E4%BB%A3BMW%20iX3%2026.99%E4%B8%87%E8%B5%B7%23) `665.7K 🔥` `NEW`
1. [在公厕差点被陌生人杀害](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%85%AC%E5%8E%95%E5%B7%AE%E7%82%B9%E8%A2%AB%E9%99%8C%E7%94%9F%E4%BA%BA%E6%9D%80%E5%AE%B3%23) `665.5K 🔥` `NEW`
1. [公摊 霍英东](https://s.weibo.com/weibo?q=%23%E5%85%AC%E6%91%8A%20%E9%9C%8D%E8%8B%B1%E4%B8%9C%23) `664.1K 🔥` `NEW`
1. [绍兴柯桥蓝天广场](https://s.weibo.com/weibo?q=%23%E7%BB%8D%E5%85%B4%E6%9F%AF%E6%A1%A5%E8%93%9D%E5%A4%A9%E5%B9%BF%E5%9C%BA%23) `553.2K 🔥` `NEW`
1. [尹昉辛芷蕾金色定档](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E6%98%89%E8%BE%9B%E8%8A%B7%E8%95%BE%E9%87%91%E8%89%B2%E5%AE%9A%E6%A1%A3%23) `514.1K 🔥` `NEW`
1. [餐厅辟谣398一杯的芋圆葡萄](https://s.weibo.com/weibo?q=%23%E9%A4%90%E5%8E%85%E8%BE%9F%E8%B0%A3398%E4%B8%80%E6%9D%AF%E7%9A%84%E8%8A%8B%E5%9C%86%E8%91%A1%E8%90%84%23) `504.7K 🔥` `NEW`
1. [诶特一下酷酷的王俊凯](https://s.weibo.com/weibo?q=%23%E8%AF%B6%E7%89%B9%E4%B8%80%E4%B8%8B%E9%85%B7%E9%85%B7%E7%9A%84%E7%8E%8B%E4%BF%8A%E5%87%AF%23) `482.6K 🔥` `NEW`
1. [樊振东首秀已售超3000张票](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E9%A6%96%E7%A7%80%E5%B7%B2%E5%94%AE%E8%B6%853000%E5%BC%A0%E7%A5%A8%23) `415.9K 🔥` `NEW`
1. [保护艾滋患者配偶不被伤害是底线 (Protecting spouses of AIDS patients from being harmed is the bottom line)](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%8A%A4%E8%89%BE%E6%BB%8B%E6%82%A3%E8%80%85%E9%85%8D%E5%81%B6%E4%B8%8D%E8%A2%AB%E4%BC%A4%E5%AE%B3%E6%98%AF%E5%BA%95%E7%BA%BF%23) `375.6K 🔥` `NEW`
1. [废弃输液管被曝做成9.9元手机壳](https://s.weibo.com/weibo?q=%23%E5%BA%9F%E5%BC%83%E8%BE%93%E6%B6%B2%E7%AE%A1%E8%A2%AB%E6%9B%9D%E5%81%9A%E6%88%909.9%E5%85%83%E6%89%8B%E6%9C%BA%E5%A3%B3%23) `308.4K 🔥` `NEW`
1. [单位没有人情味](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BD%8D%E6%B2%A1%E6%9C%89%E4%BA%BA%E6%83%85%E5%91%B3%23) `266.0K 🔥` `NEW`
1. [醒来定档](https://s.weibo.com/weibo?q=%23%E9%86%92%E6%9D%A5%E5%AE%9A%E6%A1%A3%23) `244.5K 🔥` `NEW`
1. [孟子义郝念角色照](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E9%83%9D%E5%BF%B5%E8%A7%92%E8%89%B2%E7%85%A7%23) `196.2K 🔥` `NEW`
1. [杜兰特NBA历史总收入第一](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%85%B0%E7%89%B9NBA%E5%8E%86%E5%8F%B2%E6%80%BB%E6%94%B6%E5%85%A5%E7%AC%AC%E4%B8%80%23) `186.2K 🔥` `NEW`
1. [北大教授称灵活就业是福利](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%A4%A7%E6%95%99%E6%8E%88%E7%A7%B0%E7%81%B5%E6%B4%BB%E5%B0%B1%E4%B8%9A%E6%98%AF%E7%A6%8F%E5%88%A9%23) `178.1K 🔥` `NEW`
1. [胡锡进谈北大教授灵活就业是福利言论](https://s.weibo.com/weibo?q=%23%E8%83%A1%E9%94%A1%E8%BF%9B%E8%B0%88%E5%8C%97%E5%A4%A7%E6%95%99%E6%8E%88%E7%81%B5%E6%B4%BB%E5%B0%B1%E4%B8%9A%E6%98%AF%E7%A6%8F%E5%88%A9%E8%A8%80%E8%AE%BA%23) `159.3K 🔥` `NEW`
1. [小米高管谈冰箱得房率](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E9%AB%98%E7%AE%A1%E8%B0%88%E5%86%B0%E7%AE%B1%E5%BE%97%E6%88%BF%E7%8E%87%23) `158.0K 🔥` `NEW`
1. [美国赌AI中国全都要](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E8%B5%8CAI%E4%B8%AD%E5%9B%BD%E5%85%A8%E9%83%BD%E8%A6%81%23) `157.1K 🔥` `NEW`
1. [醒来 (wake up)](https://s.weibo.com/weibo?q=%23%E9%86%92%E6%9D%A5%23) `144.0K 🔥` `NEW`
1. [孙骁骁曾说十年以后应该有两个孩子](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%AA%81%E9%AA%81%E6%9B%BE%E8%AF%B4%E5%8D%81%E5%B9%B4%E4%BB%A5%E5%90%8E%E5%BA%94%E8%AF%A5%E6%9C%89%E4%B8%A4%E4%B8%AA%E5%AD%A9%E5%AD%90%23) `142.9K 🔥` `NEW`
1. [易烊千玺实体专备案](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%AE%9E%E4%BD%93%E4%B8%93%E5%A4%87%E6%A1%88%23) `139.8K 🔥` `NEW`
1. [曝湖人将全力追逐约基奇](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B9%96%E4%BA%BA%E5%B0%86%E5%85%A8%E5%8A%9B%E8%BF%BD%E9%80%90%E7%BA%A6%E5%9F%BA%E5%A5%87%23) `134.2K 🔥` `NEW`
1. [王者荣耀全网寻撞持刀男子外卖员](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E5%85%A8%E7%BD%91%E5%AF%BB%E6%92%9E%E6%8C%81%E5%88%80%E7%94%B7%E5%AD%90%E5%A4%96%E5%8D%96%E5%91%98%23) `587.2K 🔥` `+50%`
1. [孟子义李昀锐第三视角](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E7%AC%AC%E4%B8%89%E8%A7%86%E8%A7%92%23) `523.3K 🔥` `+50%`
1. [孙骁骁说生二胎是对老公和婆家的肯定](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%AA%81%E9%AA%81%E8%AF%B4%E7%94%9F%E4%BA%8C%E8%83%8E%E6%98%AF%E5%AF%B9%E8%80%81%E5%85%AC%E5%92%8C%E5%A9%86%E5%AE%B6%E7%9A%84%E8%82%AF%E5%AE%9A%23) `495.6K 🔥` `+61%`
1. [大冰称婚后上交工资是三观问题](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E7%A7%B0%E5%A9%9A%E5%90%8E%E4%B8%8A%E4%BA%A4%E5%B7%A5%E8%B5%84%E6%98%AF%E4%B8%89%E8%A7%82%E9%97%AE%E9%A2%98%23) `489.9K 🔥` `+62%`
1. [韩雪 你是要气死妈妈吗](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E9%9B%AA%20%E4%BD%A0%E6%98%AF%E8%A6%81%E6%B0%94%E6%AD%BB%E5%A6%88%E5%A6%88%E5%90%97%23) `464.4K 🔥` `+95%`
1. [爱在无尽夏开机路透](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%9C%A8%E6%97%A0%E5%B0%BD%E5%A4%8F%E5%BC%80%E6%9C%BA%E8%B7%AF%E9%80%8F%23) `352.1K 🔥` `+21%`
1. [外貌红利 人高马大 (Appearance bonus: tall and powerful)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E8%B2%8C%E7%BA%A2%E5%88%A9%20%E4%BA%BA%E9%AB%98%E9%A9%AC%E5%A4%A7%23) `250.2K 🔥` `+71%`
1. [男孩子见到相亲对象瞬间](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E5%AD%90%E8%A7%81%E5%88%B0%E7%9B%B8%E4%BA%B2%E5%AF%B9%E8%B1%A1%E7%9E%AC%E9%97%B4%23) `211.6K 🔥` `+28%`
1. [泡泡玛特IP格局大变](https://s.weibo.com/weibo?q=%23%E6%B3%A1%E6%B3%A1%E7%8E%9B%E7%89%B9IP%E6%A0%BC%E5%B1%80%E5%A4%A7%E5%8F%98%23) `858.9K 🔥`
1. [张雪说送到统一为止 (Zhang Xue said that it would be sent to Tongyuan)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E8%AF%B4%E9%80%81%E5%88%B0%E7%BB%9F%E4%B8%80%E4%B8%BA%E6%AD%A2%23) `505.1K 🔥`
1. [哈尔滨速滑运动员截肢](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%B0%94%E6%BB%A8%E9%80%9F%E6%BB%91%E8%BF%90%E5%8A%A8%E5%91%98%E6%88%AA%E8%82%A2%23) `479.8K 🔥`
1. [长城偶遇冯绍峰父子](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%9F%8E%E5%81%B6%E9%81%87%E5%86%AF%E7%BB%8D%E5%B3%B0%E7%88%B6%E5%AD%90%23) `292.5K 🔥`
1. [早春晴朗定档](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E5%AE%9A%E6%A1%A3%23) `197.1K 🔥`
1. [银行员工称考核压力大自己买1万 (Bank employees said the assessment pressure was so great that they bought 10,000 yuan)](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E5%91%98%E5%B7%A5%E7%A7%B0%E8%80%83%E6%A0%B8%E5%8E%8B%E5%8A%9B%E5%A4%A7%E8%87%AA%E5%B7%B1%E4%B9%B01%E4%B8%87%23) `196.5K 🔥`
1. [前妻否认窦唯给过四合院](https://s.weibo.com/weibo?q=%23%E5%89%8D%E5%A6%BB%E5%90%A6%E8%AE%A4%E7%AA%A6%E5%94%AF%E7%BB%99%E8%BF%87%E5%9B%9B%E5%90%88%E9%99%A2%23) `188.3K 🔥`
1. [爱在无尽夏](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%9C%A8%E6%97%A0%E5%B0%BD%E5%A4%8F%23) `177.9K 🔥`
1. [享界G9动态评测首发](https://s.weibo.com/weibo?q=%23%E4%BA%AB%E7%95%8CG9%E5%8A%A8%E6%80%81%E8%AF%84%E6%B5%8B%E9%A6%96%E5%8F%91%23) `166.5K 🔥`
1. [樊振东加盟杜塞尔多夫反响惊人](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%8A%A0%E7%9B%9F%E6%9D%9C%E5%A1%9E%E5%B0%94%E5%A4%9A%E5%A4%AB%E5%8F%8D%E5%93%8D%E6%83%8A%E4%BA%BA%23) `157.0K 🔥`
1. [将门毒后广播剧投票 (Vote for the radio drama after Jiangmen was poisoned)](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E6%AF%92%E5%90%8E%E5%B9%BF%E6%92%AD%E5%89%A7%E6%8A%95%E7%A5%A8%23) `147.0K 🔥`
1. [女子离婚当晚被殴打到昏迷](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A6%BB%E5%A9%9A%E5%BD%93%E6%99%9A%E8%A2%AB%E6%AE%B4%E6%89%93%E5%88%B0%E6%98%8F%E8%BF%B7%23) `142.5K 🔥`
1. [殷世航恭喜男德当爸](https://s.weibo.com/weibo?q=%23%E6%AE%B7%E4%B8%96%E8%88%AA%E6%81%AD%E5%96%9C%E7%94%B7%E5%BE%B7%E5%BD%93%E7%88%B8%23) `139.8K 🔥`
1. [网红卖淫秽视频被抓时问会判刑吗 (If an internet celebrity is caught selling pornographic videos, will he be sentenced?)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E5%8D%96%E6%B7%AB%E7%A7%BD%E8%A7%86%E9%A2%91%E8%A2%AB%E6%8A%93%E6%97%B6%E9%97%AE%E4%BC%9A%E5%88%A4%E5%88%91%E5%90%97%23) `665.5K 🔥` `-43%`
1. [398一杯的芋圆葡萄 (398 cup of taro grapes)](https://s.weibo.com/weibo?q=%23398%E4%B8%80%E6%9D%AF%E7%9A%84%E8%8A%8B%E5%9C%86%E8%91%A1%E8%90%84%23) `337.4K 🔥` `-44%`
1. [男子捡3根金条以为假的随手扔掉 (Man picked up 3 gold bars and threw them away thinking they were fake)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8D%A13%E6%A0%B9%E9%87%91%E6%9D%A1%E4%BB%A5%E4%B8%BA%E5%81%87%E7%9A%84%E9%9A%8F%E6%89%8B%E6%89%94%E6%8E%89%23) `266.7K 🔥` `-41%`
1. [广州地铁挤门事件不少乘客未能下车](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E5%9C%B0%E9%93%81%E6%8C%A4%E9%97%A8%E4%BA%8B%E4%BB%B6%E4%B8%8D%E5%B0%91%E4%B9%98%E5%AE%A2%E6%9C%AA%E8%83%BD%E4%B8%8B%E8%BD%A6%23) `190.5K 🔥` `-25%`
1. [网购水果骗局](https://s.weibo.com/weibo?q=%23%E7%BD%91%E8%B4%AD%E6%B0%B4%E6%9E%9C%E9%AA%97%E5%B1%80%23) `176.5K 🔥` `-40%`
1. [我国气候异常 (my country's climate anomalies)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%B0%94%E5%80%99%E5%BC%82%E5%B8%B8%23) `132.7K 🔥` `-35%`

Updated at 2026-08-21 11:37:10

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
