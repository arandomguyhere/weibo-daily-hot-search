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

1. [东野圭吾去世 (Keigo Higashino passed away)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%87%8E%E5%9C%AD%E5%90%BE%E5%8E%BB%E4%B8%96%23) `34.6M 🔥` `NEW`
1. [东野圭吾代表作](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%87%8E%E5%9C%AD%E5%90%BE%E4%BB%A3%E8%A1%A8%E4%BD%9C%23) `3.7M 🔥` `NEW`
1. [大国重器解锁中国科创新高度](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%9B%BD%E9%87%8D%E5%99%A8%E8%A7%A3%E9%94%81%E4%B8%AD%E5%9B%BD%E7%A7%91%E5%88%9B%E6%96%B0%E9%AB%98%E5%BA%A6%23) `2.2M 🔥` `NEW`
1. [东野圭吾 大肠癌](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%87%8E%E5%9C%AD%E5%90%BE%20%E5%A4%A7%E8%82%A0%E7%99%8C%23) `2.2M 🔥` `NEW`
1. [有微信之前人是可以不用一直在线的](https://s.weibo.com/weibo?q=%23%E6%9C%89%E5%BE%AE%E4%BF%A1%E4%B9%8B%E5%89%8D%E4%BA%BA%E6%98%AF%E5%8F%AF%E4%BB%A5%E4%B8%8D%E7%94%A8%E4%B8%80%E7%9B%B4%E5%9C%A8%E7%BA%BF%E7%9A%84%23) `1.5M 🔥` `NEW`
1. [发现朋友圈没人晒旅游照了](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E6%9C%8B%E5%8F%8B%E5%9C%88%E6%B2%A1%E4%BA%BA%E6%99%92%E6%97%85%E6%B8%B8%E7%85%A7%E4%BA%86%23) `1.4M 🔥` `NEW`
1. [那英吐槽冉莹颖败家](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E5%90%90%E6%A7%BD%E5%86%89%E8%8E%B9%E9%A2%96%E8%B4%A5%E5%AE%B6%23) `784.3K 🔥` `NEW`
1. [Bin BLG](https://s.weibo.com/weibo?q=%23Bin%20BLG%23) `504.9K 🔥` `NEW`
1. [马嘉祺回复万一](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E5%9B%9E%E5%A4%8D%E4%B8%87%E4%B8%80%23) `434.4K 🔥` `NEW`
1. [垫底辣孩说做他助理24小时都要工作](https://s.weibo.com/weibo?q=%23%E5%9E%AB%E5%BA%95%E8%BE%A3%E5%AD%A9%E8%AF%B4%E5%81%9A%E4%BB%96%E5%8A%A9%E7%90%8624%E5%B0%8F%E6%97%B6%E9%83%BD%E8%A6%81%E5%B7%A5%E4%BD%9C%23) `431.5K 🔥` `NEW`
1. [梁文锋打新长鑫科技浮盈8.27亿 (Liang Wenfeng makes a profit of 827 million from new Changxin Technology)](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%96%87%E9%94%8B%E6%89%93%E6%96%B0%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E6%B5%AE%E7%9B%888.27%E4%BA%BF%23) `429.3K 🔥` `NEW`
1. [林志颖kimi车内合照](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%97%E9%A2%96kimi%E8%BD%A6%E5%86%85%E5%90%88%E7%85%A7%23) `425.0K 🔥` `NEW`
1. [妈妈好像没意识到我已经30岁了](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%A5%BD%E5%83%8F%E6%B2%A1%E6%84%8F%E8%AF%86%E5%88%B0%E6%88%91%E5%B7%B2%E7%BB%8F30%E5%B2%81%E4%BA%86%23) `422.1K 🔥` `NEW`
1. [河南三支一扶 高分](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%20%E9%AB%98%E5%88%86%23) `417.3K 🔥` `NEW`
1. [去过茶卡盐湖的嘴真严](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E8%BF%87%E8%8C%B6%E5%8D%A1%E7%9B%90%E6%B9%96%E7%9A%84%E5%98%B4%E7%9C%9F%E4%B8%A5%23) `414.9K 🔥` `NEW`
1. [八仙全天票房预测跌到了5300万](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%E5%85%A8%E5%A4%A9%E7%A5%A8%E6%88%BF%E9%A2%84%E6%B5%8B%E8%B7%8C%E5%88%B0%E4%BA%865300%E4%B8%87%23) `413.1K 🔥` `NEW`
1. [熊孩子和美团AI聊天订了18家餐厅](https://s.weibo.com/weibo?q=%23%E7%86%8A%E5%AD%A9%E5%AD%90%E5%92%8C%E7%BE%8E%E5%9B%A2AI%E8%81%8A%E5%A4%A9%E8%AE%A2%E4%BA%8618%E5%AE%B6%E9%A4%90%E5%8E%85%23) `381.5K 🔥` `NEW`
1. [才发现ai的人味还能这么浓](https://s.weibo.com/weibo?q=%23%E6%89%8D%E5%8F%91%E7%8E%B0ai%E7%9A%84%E4%BA%BA%E5%91%B3%E8%BF%98%E8%83%BD%E8%BF%99%E4%B9%88%E6%B5%93%23) `378.8K 🔥` `NEW`
1. [患脑梗的人有这6大共性](https://s.weibo.com/weibo?q=%23%E6%82%A3%E8%84%91%E6%A2%97%E7%9A%84%E4%BA%BA%E6%9C%89%E8%BF%996%E5%A4%A7%E5%85%B1%E6%80%A7%23) `373.9K 🔥` `NEW`
1. [林志颖回应Kimi网上照片](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%97%E9%A2%96%E5%9B%9E%E5%BA%94Kimi%E7%BD%91%E4%B8%8A%E7%85%A7%E7%89%87%23) `369.3K 🔥` `NEW`
1. [邓紫棋晚晚上过一个幼儿园 (Deng Ziqi spent the evening in a kindergarten)](https://s.weibo.com/weibo?q=%23%E9%82%93%E7%B4%AB%E6%A3%8B%E6%99%9A%E6%99%9A%E4%B8%8A%E8%BF%87%E4%B8%80%E4%B8%AA%E5%B9%BC%E5%84%BF%E5%9B%AD%23) `365.5K 🔥` `NEW`
1. [突然开始理解不办婚礼的人了](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%BC%80%E5%A7%8B%E7%90%86%E8%A7%A3%E4%B8%8D%E5%8A%9E%E5%A9%9A%E7%A4%BC%E7%9A%84%E4%BA%BA%E4%BA%86%23) `362.4K 🔥` `NEW`
1. [阿里投资长鑫浮盈1600亿元](https://s.weibo.com/weibo?q=%23%E9%98%BF%E9%87%8C%E6%8A%95%E8%B5%84%E9%95%BF%E9%91%AB%E6%B5%AE%E7%9B%881600%E4%BA%BF%E5%85%83%23) `361.2K 🔥` `NEW`
1. [赵雷鸟巢演唱会](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E9%9B%B7%E9%B8%9F%E5%B7%A2%E6%BC%94%E5%94%B1%E4%BC%9A%23) `349.7K 🔥` `NEW`
1. [张凌赫对章若楠吹口哨](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%AF%B9%E7%AB%A0%E8%8B%A5%E6%A5%A0%E5%90%B9%E5%8F%A3%E5%93%A8%23) `283.9K 🔥` `NEW`
1. [王励勤说男乒比女乒压力大](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%B1%E5%8B%A4%E8%AF%B4%E7%94%B7%E4%B9%92%E6%AF%94%E5%A5%B3%E4%B9%92%E5%8E%8B%E5%8A%9B%E5%A4%A7%23) `283.6K 🔥` `NEW`
1. [王虹未参加北大本科毕业合照](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%99%B9%E6%9C%AA%E5%8F%82%E5%8A%A0%E5%8C%97%E5%A4%A7%E6%9C%AC%E7%A7%91%E6%AF%95%E4%B8%9A%E5%90%88%E7%85%A7%23) `283.2K 🔥` `NEW`
1. [西瓜滞销村干部要求村民撤回求助](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%93%9C%E6%BB%9E%E9%94%80%E6%9D%91%E5%B9%B2%E9%83%A8%E8%A6%81%E6%B1%82%E6%9D%91%E6%B0%91%E6%92%A4%E5%9B%9E%E6%B1%82%E5%8A%A9%23) `283.0K 🔥` `NEW`
1. [男孩胸前挂幼童在车流中骑行](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E8%83%B8%E5%89%8D%E6%8C%82%E5%B9%BC%E7%AB%A5%E5%9C%A8%E8%BD%A6%E6%B5%81%E4%B8%AD%E9%AA%91%E8%A1%8C%23) `282.7K 🔥` `NEW`
1. [白鹿欢娱分手戏 朝玉阶](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%AC%A2%E5%A8%B1%E5%88%86%E6%89%8B%E6%88%8F%20%E6%9C%9D%E7%8E%89%E9%98%B6%23) `282.2K 🔥` `NEW`
1. [马嘉祺换置顶 (Ma Jiaqi replaced the top)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E6%8D%A2%E7%BD%AE%E9%A1%B6%23) `281.9K 🔥` `NEW`
1. [印男子祖母火化时抱住遗体钻入焚尸炉](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E7%94%B7%E5%AD%90%E7%A5%96%E6%AF%8D%E7%81%AB%E5%8C%96%E6%97%B6%E6%8A%B1%E4%BD%8F%E9%81%97%E4%BD%93%E9%92%BB%E5%85%A5%E7%84%9A%E5%B0%B8%E7%82%89%23) `281.6K 🔥` `NEW`
1. [张柏芝家里墙上都是三个儿子的照片](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D%E5%AE%B6%E9%87%8C%E5%A2%99%E4%B8%8A%E9%83%BD%E6%98%AF%E4%B8%89%E4%B8%AA%E5%84%BF%E5%AD%90%E7%9A%84%E7%85%A7%E7%89%87%23) `280.8K 🔥` `NEW`
1. [迪丽热巴 VOGUE](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%20VOGUE%23) `280.5K 🔥` `NEW`
1. [腾讯全新QQ宠物上线](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E5%85%A8%E6%96%B0QQ%E5%AE%A0%E7%89%A9%E4%B8%8A%E7%BA%BF%23) `280.2K 🔥` `NEW`
1. [怪不得你们的AI这么好用](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E4%BD%A0%E4%BB%AC%E7%9A%84AI%E8%BF%99%E4%B9%88%E5%A5%BD%E7%94%A8%23) `279.6K 🔥` `NEW`
1. [26应届生没找到工作决定去当总裁](https://s.weibo.com/weibo?q=%2326%E5%BA%94%E5%B1%8A%E7%94%9F%E6%B2%A1%E6%89%BE%E5%88%B0%E5%B7%A5%E4%BD%9C%E5%86%B3%E5%AE%9A%E5%8E%BB%E5%BD%93%E6%80%BB%E8%A3%81%23) `279.2K 🔥` `NEW`
1. [关晓彤红掌短发造型](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E7%BA%A2%E6%8E%8C%E7%9F%AD%E5%8F%91%E9%80%A0%E5%9E%8B%23) `278.9K 🔥` `NEW`
1. [陈伟霆一出场佛爷味就来](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E4%B8%80%E5%87%BA%E5%9C%BA%E4%BD%9B%E7%88%B7%E5%91%B3%E5%B0%B1%E6%9D%A5%23) `278.7K 🔥` `NEW`
1. [越来越多中国人不去日本旅游](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%A4%9A%E4%B8%AD%E5%9B%BD%E4%BA%BA%E4%B8%8D%E5%8E%BB%E6%97%A5%E6%9C%AC%E6%97%85%E6%B8%B8%23) `278.3K 🔥` `NEW`
1. [孙怡遗憾舞台返场 (Sun Yi regrets her stage return)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E9%81%97%E6%86%BE%E8%88%9E%E5%8F%B0%E8%BF%94%E5%9C%BA%23) `277.7K 🔥` `NEW`
1. [合肥国资持股长鑫市值超1万亿](https://s.weibo.com/weibo?q=%23%E5%90%88%E8%82%A5%E5%9B%BD%E8%B5%84%E6%8C%81%E8%82%A1%E9%95%BF%E9%91%AB%E5%B8%82%E5%80%BC%E8%B6%851%E4%B8%87%E4%BA%BF%23) `277.4K 🔥` `NEW`
1. [侯明昊 丁禹兮](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%20%E4%B8%81%E7%A6%B9%E5%85%AE%23) `277.0K 🔥` `NEW`
1. [黄寸芷观察室痛哭](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AF%B8%E8%8A%B7%E8%A7%82%E5%AF%9F%E5%AE%A4%E7%97%9B%E5%93%AD%23) `276.4K 🔥` `NEW`
1. [张雷说国乒想多培养出几个马龙王楚钦](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%B7%E8%AF%B4%E5%9B%BD%E4%B9%92%E6%83%B3%E5%A4%9A%E5%9F%B9%E5%85%BB%E5%87%BA%E5%87%A0%E4%B8%AA%E9%A9%AC%E9%BE%99%E7%8E%8B%E6%A5%9A%E9%92%A6%23) `266.8K 🔥` `NEW`
1. [管泽元总结BLG失利因素](https://s.weibo.com/weibo?q=%23%E7%AE%A1%E6%B3%BD%E5%85%83%E6%80%BB%E7%BB%93BLG%E5%A4%B1%E5%88%A9%E5%9B%A0%E7%B4%A0%23) `265.3K 🔥` `NEW`
1. [发现好多大学生不懂邮件礼仪](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%A5%BD%E5%A4%9A%E5%A4%A7%E5%AD%A6%E7%94%9F%E4%B8%8D%E6%87%82%E9%82%AE%E4%BB%B6%E7%A4%BC%E4%BB%AA%23) `1.8M 🔥` `+693%`
1. [使馆通报中国公民遭保安强力对待](https://s.weibo.com/weibo?q=%23%E4%BD%BF%E9%A6%86%E9%80%9A%E6%8A%A5%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E9%81%AD%E4%BF%9D%E5%AE%89%E5%BC%BA%E5%8A%9B%E5%AF%B9%E5%BE%85%23) `383.4K 🔥` `+34%`
1. [李权哲道歉](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%9D%83%E5%93%B2%E9%81%93%E6%AD%89%23) `277.8K 🔥`
1. [重庆山体崩塌现场发现人体残骸 (Human remains found at Chongqing mountain collapse site)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%B1%B1%E4%BD%93%E5%B4%A9%E5%A1%8C%E7%8E%B0%E5%9C%BA%E5%8F%91%E7%8E%B0%E4%BA%BA%E4%BD%93%E6%AE%8B%E9%AA%B8%23) `281.1K 🔥` `-86%`

Updated at 2026-07-27 15:46:05

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
