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

1. [日本出现取消吃饭现象](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%87%BA%E7%8E%B0%E5%8F%96%E6%B6%88%E5%90%83%E9%A5%AD%E7%8E%B0%E8%B1%A1%23) `1.1M 🔥` `NEW`
1. [接到网贷催收电话统一说不认识](https://s.weibo.com/weibo?q=%23%E6%8E%A5%E5%88%B0%E7%BD%91%E8%B4%B7%E5%82%AC%E6%94%B6%E7%94%B5%E8%AF%9D%E7%BB%9F%E4%B8%80%E8%AF%B4%E4%B8%8D%E8%AE%A4%E8%AF%86%23) `821.7K 🔥` `NEW`
1. [多措并举推动银发经济提质升级](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%8E%AA%E5%B9%B6%E4%B8%BE%E6%8E%A8%E5%8A%A8%E9%93%B6%E5%8F%91%E7%BB%8F%E6%B5%8E%E6%8F%90%E8%B4%A8%E5%8D%87%E7%BA%A7%23) `798.6K 🔥` `NEW`
1. [神父弥撒时被十字架砸中身亡](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E7%88%B6%E5%BC%A5%E6%92%92%E6%97%B6%E8%A2%AB%E5%8D%81%E5%AD%97%E6%9E%B6%E7%A0%B8%E4%B8%AD%E8%BA%AB%E4%BA%A1%23) `764.8K 🔥` `NEW`
1. [水中贵族网球美学](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E4%B8%AD%E8%B4%B5%E6%97%8F%E7%BD%91%E7%90%83%E7%BE%8E%E5%AD%A6%23) `509.5K 🔥` `NEW`
1. [建议售价1980的眼镜片批发价30](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%94%AE%E4%BB%B71980%E7%9A%84%E7%9C%BC%E9%95%9C%E7%89%87%E6%89%B9%E5%8F%91%E4%BB%B730%23) `410.4K 🔥` `NEW`
1. [父亲遛狗幼童坠亡案母亲最新发声](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E9%81%9B%E7%8B%97%E5%B9%BC%E7%AB%A5%E5%9D%A0%E4%BA%A1%E6%A1%88%E6%AF%8D%E4%BA%B2%E6%9C%80%E6%96%B0%E5%8F%91%E5%A3%B0%23) `379.7K 🔥` `NEW`
1. [披荆斩棘6总决赛歌单](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%986%E6%80%BB%E5%86%B3%E8%B5%9B%E6%AD%8C%E5%8D%95%23) `379.3K 🔥` `NEW`
1. [茉莉奶白爆单店员劝退消费者](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E7%88%86%E5%8D%95%E5%BA%97%E5%91%98%E5%8A%9D%E9%80%80%E6%B6%88%E8%B4%B9%E8%80%85%23) `370.9K 🔥` `NEW`
1. [梅艳芳骨灰或流向东南亚](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%89%B3%E8%8A%B3%E9%AA%A8%E7%81%B0%E6%88%96%E6%B5%81%E5%90%91%E4%B8%9C%E5%8D%97%E4%BA%9A%23) `366.2K 🔥` `NEW`
1. [刘丁硕说樊振东都不会正眼看我一眼](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%B8%81%E7%A1%95%E8%AF%B4%E6%A8%8A%E6%8C%AF%E4%B8%9C%E9%83%BD%E4%B8%8D%E4%BC%9A%E6%AD%A3%E7%9C%BC%E7%9C%8B%E6%88%91%E4%B8%80%E7%9C%BC%23) `363.0K 🔥` `NEW`
1. [黄磊带着黄多多交际一开口落落大方](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%A3%8A%E5%B8%A6%E7%9D%80%E9%BB%84%E5%A4%9A%E5%A4%9A%E4%BA%A4%E9%99%85%E4%B8%80%E5%BC%80%E5%8F%A3%E8%90%BD%E8%90%BD%E5%A4%A7%E6%96%B9%23) `354.3K 🔥` `NEW`
1. [广交会AI新品热度拉满](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%BA%A4%E4%BC%9AAI%E6%96%B0%E5%93%81%E7%83%AD%E5%BA%A6%E6%8B%89%E6%BB%A1%23) `343.3K 🔥` `NEW`
1. [王源模仿者王扁摆摊被打](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E6%A8%A1%E4%BB%BF%E8%80%85%E7%8E%8B%E6%89%81%E6%91%86%E6%91%8A%E8%A2%AB%E6%89%93%23) `331.1K 🔥` `NEW`
1. [王自如喊话罗永浩](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%87%AA%E5%A6%82%E5%96%8A%E8%AF%9D%E7%BD%97%E6%B0%B8%E6%B5%A9%23) `324.6K 🔥` `NEW`
1. [男子服刑期间账户被民警转走1.9万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%9C%8D%E5%88%91%E6%9C%9F%E9%97%B4%E8%B4%A6%E6%88%B7%E8%A2%AB%E6%B0%91%E8%AD%A6%E8%BD%AC%E8%B5%B01.9%E4%B8%87%23) `324.2K 🔥` `NEW`
1. [停车收到0元欠费告知函附诉讼警告](https://s.weibo.com/weibo?q=%23%E5%81%9C%E8%BD%A6%E6%94%B6%E5%88%B00%E5%85%83%E6%AC%A0%E8%B4%B9%E5%91%8A%E7%9F%A5%E5%87%BD%E9%99%84%E8%AF%89%E8%AE%BC%E8%AD%A6%E5%91%8A%23) `323.5K 🔥` `NEW`
1. [黄多多背肌](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A%E8%83%8C%E8%82%8C%23) `321.5K 🔥` `NEW`
1. [郭富城给奕境X9车主交车](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AF%8C%E5%9F%8E%E7%BB%99%E5%A5%95%E5%A2%83X9%E8%BD%A6%E4%B8%BB%E4%BA%A4%E8%BD%A6%23) `320.5K 🔥` `NEW`
1. [到底谁抢到了易烊千玺的周边](https://s.weibo.com/weibo?q=%23%E5%88%B0%E5%BA%95%E8%B0%81%E6%8A%A2%E5%88%B0%E4%BA%86%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E7%9A%84%E5%91%A8%E8%BE%B9%23) `318.2K 🔥` `NEW`
1. [田曦薇三部剧三平台破万](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E4%B8%89%E9%83%A8%E5%89%A7%E4%B8%89%E5%B9%B3%E5%8F%B0%E7%A0%B4%E4%B8%87%23) `286.3K 🔥` `NEW`
1. [在大厂工作的真实感受](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%A4%A7%E5%8E%82%E5%B7%A5%E4%BD%9C%E7%9A%84%E7%9C%9F%E5%AE%9E%E6%84%9F%E5%8F%97%23) `270.2K 🔥` `NEW`
1. [陈都灵跟粉丝求婚](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E8%B7%9F%E7%B2%89%E4%B8%9D%E6%B1%82%E5%A9%9A%23) `262.5K 🔥` `NEW`
1. [梅艳芳骨灰疑似被寺庙工作人员盗走](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%89%B3%E8%8A%B3%E9%AA%A8%E7%81%B0%E7%96%91%E4%BC%BC%E8%A2%AB%E5%AF%BA%E5%BA%99%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E7%9B%97%E8%B5%B0%23) `250.3K 🔥` `NEW`
1. [吉利星瑞TCR成都主场夺冠](https://s.weibo.com/weibo?q=%23%E5%90%89%E5%88%A9%E6%98%9F%E7%91%9ETCR%E6%88%90%E9%83%BD%E4%B8%BB%E5%9C%BA%E5%A4%BA%E5%86%A0%23) `247.5K 🔥` `NEW`
1. [嫁金钗破万](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E7%A0%B4%E4%B8%87%23) `246.0K 🔥` `NEW`
1. [李昀锐 脱粉](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%20%E8%84%B1%E7%B2%89%23) `245.1K 🔥` `NEW`
1. [鹿晗今天更帅了](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E4%BB%8A%E5%A4%A9%E6%9B%B4%E5%B8%85%E4%BA%86%23) `239.7K 🔥` `NEW`
1. [成毅直播](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E7%9B%B4%E6%92%AD%23) `239.2K 🔥` `NEW`
1. [张继科直播谈及刘丁硕六个鸡蛋事件](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%A7%E7%A7%91%E7%9B%B4%E6%92%AD%E8%B0%88%E5%8F%8A%E5%88%98%E4%B8%81%E7%A1%95%E5%85%AD%E4%B8%AA%E9%B8%A1%E8%9B%8B%E4%BA%8B%E4%BB%B6%23) `238.0K 🔥` `NEW`
1. [张雪机车德比斯年度亚军](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%BE%B7%E6%AF%94%E6%96%AF%E5%B9%B4%E5%BA%A6%E4%BA%9A%E5%86%9B%23) `232.8K 🔥` `NEW`
1. [嫁金钗这段没有一秒是不好笑的](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%E8%BF%99%E6%AE%B5%E6%B2%A1%E6%9C%89%E4%B8%80%E7%A7%92%E6%98%AF%E4%B8%8D%E5%A5%BD%E7%AC%91%E7%9A%84%23) `224.7K 🔥` `NEW`
1. [全家回应公厕拖把池洗茶叶蛋锅](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%AE%B6%E5%9B%9E%E5%BA%94%E5%85%AC%E5%8E%95%E6%8B%96%E6%8A%8A%E6%B1%A0%E6%B4%97%E8%8C%B6%E5%8F%B6%E8%9B%8B%E9%94%85%23) `223.0K 🔥` `NEW`
1. [王嘉尔神之九秒](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E7%A5%9E%E4%B9%8B%E4%B9%9D%E7%A7%92%23) `223.0K 🔥` `NEW`
1. [球迷说刘丁硕把樊振东签名卖了五千一个](https://s.weibo.com/weibo?q=%23%E7%90%83%E8%BF%B7%E8%AF%B4%E5%88%98%E4%B8%81%E7%A1%95%E6%8A%8A%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%AD%BE%E5%90%8D%E5%8D%96%E4%BA%86%E4%BA%94%E5%8D%83%E4%B8%80%E4%B8%AA%23) `212.4K 🔥` `NEW`
1. [法国骚乱苹果爱马仕也成了目标](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E9%AA%9A%E4%B9%B1%E8%8B%B9%E6%9E%9C%E7%88%B1%E9%A9%AC%E4%BB%95%E4%B9%9F%E6%88%90%E4%BA%86%E7%9B%AE%E6%A0%87%23) `196.7K 🔥` `NEW`
1. [盛艾敬是否应该退团](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E8%89%BE%E6%95%AC%E6%98%AF%E5%90%A6%E5%BA%94%E8%AF%A5%E9%80%80%E5%9B%A2%23) `184.3K 🔥` `NEW`
1. [量化也撑不住了](https://s.weibo.com/weibo?q=%23%E9%87%8F%E5%8C%96%E4%B9%9F%E6%92%91%E4%B8%8D%E4%BD%8F%E4%BA%86%23) `171.4K 🔥` `NEW`
1. [京东校园之星选手唱我的太阳](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E6%A0%A1%E5%9B%AD%E4%B9%8B%E6%98%9F%E9%80%89%E6%89%8B%E5%94%B1%E6%88%91%E7%9A%84%E5%A4%AA%E9%98%B3%23) `166.9K 🔥` `NEW`
1. [博主聊河南童年饮食快哭了](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E4%B8%BB%E8%81%8A%E6%B2%B3%E5%8D%97%E7%AB%A5%E5%B9%B4%E9%A5%AE%E9%A3%9F%E5%BF%AB%E5%93%AD%E4%BA%86%23) `163.1K 🔥` `NEW`
1. [胰腺癌真的太会伪装了](https://s.weibo.com/weibo?q=%23%E8%83%B0%E8%85%BA%E7%99%8C%E7%9C%9F%E7%9A%84%E5%A4%AA%E4%BC%9A%E4%BC%AA%E8%A3%85%E4%BA%86%23) `161.3K 🔥` `NEW`
1. [iPhoneDuo晚买一周或可省一月工资](https://s.weibo.com/weibo?q=%23iPhoneDuo%E6%99%9A%E4%B9%B0%E4%B8%80%E5%91%A8%E6%88%96%E5%8F%AF%E7%9C%81%E4%B8%80%E6%9C%88%E5%B7%A5%E8%B5%84%23) `140.7K 🔥` `NEW`
1. [Angelababy回应被说显老](https://s.weibo.com/weibo?q=%23Angelababy%E5%9B%9E%E5%BA%94%E8%A2%AB%E8%AF%B4%E6%98%BE%E8%80%81%23) `348.6K 🔥`
1. [韩国网友要求盛艾敬退团](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%BD%91%E5%8F%8B%E8%A6%81%E6%B1%82%E7%9B%9B%E8%89%BE%E6%95%AC%E9%80%80%E5%9B%A2%23) `336.0K 🔥`
1. [难怪北京没有穿搭焦虑哈哈](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E5%8C%97%E4%BA%AC%E6%B2%A1%E6%9C%89%E7%A9%BF%E6%90%AD%E7%84%A6%E8%99%91%E5%93%88%E5%93%88%23) `319.7K 🔥`
1. [法国民众这次真急了](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E6%B0%91%E4%BC%97%E8%BF%99%E6%AC%A1%E7%9C%9F%E6%80%A5%E4%BA%86%23) `604.8K 🔥` `-49%`
1. [文化中国行九九重阳节](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%8C%96%E4%B8%AD%E5%9B%BD%E8%A1%8C%E4%B9%9D%E4%B9%9D%E9%87%8D%E9%98%B3%E8%8A%82%23) `239.8K 🔥` `-64%`
1. [弟弟缺氧严重姐姐网上找免费救援](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%E7%BC%BA%E6%B0%A7%E4%B8%A5%E9%87%8D%E5%A7%90%E5%A7%90%E7%BD%91%E4%B8%8A%E6%89%BE%E5%85%8D%E8%B4%B9%E6%95%91%E6%8F%B4%23) `186.0K 🔥` `-40%`
1. [长期喝牛奶vs从来不喝牛奶](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E5%96%9D%E7%89%9B%E5%A5%B6vs%E4%BB%8E%E6%9D%A5%E4%B8%8D%E5%96%9D%E7%89%9B%E5%A5%B6%23) `179.3K 🔥` `-42%`

Updated at 2026-10-18 21:16:11

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
