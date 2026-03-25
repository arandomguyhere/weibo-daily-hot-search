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

1. [和平统一后大陆可帮台湾建环岛高铁 (After peaceful reunification, the mainland can help Taiwan build a high-speed rail around the island)](https://s.weibo.com/weibo?q=%23%E5%92%8C%E5%B9%B3%E7%BB%9F%E4%B8%80%E5%90%8E%E5%A4%A7%E9%99%86%E5%8F%AF%E5%B8%AE%E5%8F%B0%E6%B9%BE%E5%BB%BA%E7%8E%AF%E5%B2%9B%E9%AB%98%E9%93%81%23) `771.2K 🔥` `NEW`
1. [博鳌亚洲论坛2026年年会看点](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E9%B3%8C%E4%BA%9A%E6%B4%B2%E8%AE%BA%E5%9D%9B2026%E5%B9%B4%E5%B9%B4%E4%BC%9A%E7%9C%8B%E7%82%B9%23) `643.1K 🔥` `NEW`
1. [去动物园一定不要穿水果鞋](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E5%8A%A8%E7%89%A9%E5%9B%AD%E4%B8%80%E5%AE%9A%E4%B8%8D%E8%A6%81%E7%A9%BF%E6%B0%B4%E6%9E%9C%E9%9E%8B%23) `258.6K 🔥` `NEW`
1. [国台办回应蔡正元入狱服刑](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%8F%B0%E5%8A%9E%E5%9B%9E%E5%BA%94%E8%94%A1%E6%AD%A3%E5%85%83%E5%85%A5%E7%8B%B1%E6%9C%8D%E5%88%91%23) `251.2K 🔥` `NEW`
1. [美国男子养老院强奸61岁老人被拍下](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%94%B7%E5%AD%90%E5%85%BB%E8%80%81%E9%99%A2%E5%BC%BA%E5%A5%B861%E5%B2%81%E8%80%81%E4%BA%BA%E8%A2%AB%E6%8B%8D%E4%B8%8B%23) `168.0K 🔥` `NEW`
1. [花27万买摊位老板开业5天快回本一半](https://s.weibo.com/weibo?q=%23%E8%8A%B127%E4%B8%87%E4%B9%B0%E6%91%8A%E4%BD%8D%E8%80%81%E6%9D%BF%E5%BC%80%E4%B8%9A5%E5%A4%A9%E5%BF%AB%E5%9B%9E%E6%9C%AC%E4%B8%80%E5%8D%8A%23) `144.2K 🔥` `NEW`
1. [张雪峰的封神演讲](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E7%9A%84%E5%B0%81%E7%A5%9E%E6%BC%94%E8%AE%B2%23) `140.5K 🔥` `NEW`
1. [曾沛慈 浪姐](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%20%E6%B5%AA%E5%A7%90%23) `131.4K 🔥` `NEW`
1. [何润东 翻红](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%20%E7%BF%BB%E7%BA%A2%23) `124.6K 🔥` `NEW`
1. [伊朗喊话美国别把失败说成协议](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%96%8A%E8%AF%9D%E7%BE%8E%E5%9B%BD%E5%88%AB%E6%8A%8A%E5%A4%B1%E8%B4%A5%E8%AF%B4%E6%88%90%E5%8D%8F%E8%AE%AE%23) `120.9K 🔥` `NEW`
1. [台湾赌王疑遛狗时身中29枪 (Taiwan gambling king shot 29 times while walking his dog)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E8%B5%8C%E7%8E%8B%E7%96%91%E9%81%9B%E7%8B%97%E6%97%B6%E8%BA%AB%E4%B8%AD29%E6%9E%AA%23) `120.1K 🔥` `NEW`
1. [日本教师自曝如何洗脑学生](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%95%99%E5%B8%88%E8%87%AA%E6%9B%9D%E5%A6%82%E4%BD%95%E6%B4%97%E8%84%91%E5%AD%A6%E7%94%9F%23) `119.4K 🔥` `NEW`
1. [陈飞宇迪丽热巴短剧预告](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9F%AD%E5%89%A7%E9%A2%84%E5%91%8A%23) `119.3K 🔥` `NEW`
1. [金价银价再次大涨](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E9%93%B6%E4%BB%B7%E5%86%8D%E6%AC%A1%E5%A4%A7%E6%B6%A8%23) `116.2K 🔥` `NEW`
1. [李艺彤哭着和粉丝道歉](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%89%BA%E5%BD%A4%E5%93%AD%E7%9D%80%E5%92%8C%E7%B2%89%E4%B8%9D%E9%81%93%E6%AD%89%23) `114.5K 🔥` `NEW`
1. [男大学生长期熬夜吃外卖突发心梗](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%A4%A7%E5%AD%A6%E7%94%9F%E9%95%BF%E6%9C%9F%E7%86%AC%E5%A4%9C%E5%90%83%E5%A4%96%E5%8D%96%E7%AA%81%E5%8F%91%E5%BF%83%E6%A2%97%23) `111.4K 🔥` `NEW`
1. [遭虐待男童反复说妈妈你能带我走吗](https://s.weibo.com/weibo?q=%23%E9%81%AD%E8%99%90%E5%BE%85%E7%94%B7%E7%AB%A5%E5%8F%8D%E5%A4%8D%E8%AF%B4%E5%A6%88%E5%A6%88%E4%BD%A0%E8%83%BD%E5%B8%A6%E6%88%91%E8%B5%B0%E5%90%97%23) `111.4K 🔥` `NEW`
1. [这5类人其实不适合跑步](https://s.weibo.com/weibo?q=%23%E8%BF%995%E7%B1%BB%E4%BA%BA%E5%85%B6%E5%AE%9E%E4%B8%8D%E9%80%82%E5%90%88%E8%B7%91%E6%AD%A5%23) `111.4K 🔥` `NEW`
1. [梅姨疑似居住地村民发声](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E7%96%91%E4%BC%BC%E5%B1%85%E4%BD%8F%E5%9C%B0%E6%9D%91%E6%B0%91%E5%8F%91%E5%A3%B0%23) `108.9K 🔥` `NEW`
1. [杀猪养你在魏哲鸣这续上了](https://s.weibo.com/weibo?q=%23%E6%9D%80%E7%8C%AA%E5%85%BB%E4%BD%A0%E5%9C%A8%E9%AD%8F%E5%93%B2%E9%B8%A3%E8%BF%99%E7%BB%AD%E4%B8%8A%E4%BA%86%23) `107.7K 🔥` `NEW`
1. [为什么互联网深深悼念雪峰老师 (Why the Internet deeply mourns Teacher Xuefeng)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BA%92%E8%81%94%E7%BD%91%E6%B7%B1%E6%B7%B1%E6%82%BC%E5%BF%B5%E9%9B%AA%E5%B3%B0%E8%80%81%E5%B8%88%23) `107.2K 🔥` `NEW`
1. [泡泡玛特直线跳水](https://s.weibo.com/weibo?q=%23%E6%B3%A1%E6%B3%A1%E7%8E%9B%E7%89%B9%E7%9B%B4%E7%BA%BF%E8%B7%B3%E6%B0%B4%23) `105.4K 🔥` `NEW`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `103.3K 🔥` `NEW`
1. [湖南姐弟遭继母生父虐待细节曝光](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%A7%90%E5%BC%9F%E9%81%AD%E7%BB%A7%E6%AF%8D%E7%94%9F%E7%88%B6%E8%99%90%E5%BE%85%E7%BB%86%E8%8A%82%E6%9B%9D%E5%85%89%23) `95.9K 🔥` `NEW`
1. [奔跑吧](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%23) `1.1M 🔥` `+567%`
1. [颜如晶一年减重2.9斤](https://s.weibo.com/weibo?q=%23%E9%A2%9C%E5%A6%82%E6%99%B6%E4%B8%80%E5%B9%B4%E5%87%8F%E9%87%8D2.9%E6%96%A4%23) `236.6K 🔥`
1. [随元青竟然欺负洪世贤艾莉儿子](https://s.weibo.com/weibo?q=%23%E9%9A%8F%E5%85%83%E9%9D%92%E7%AB%9F%E7%84%B6%E6%AC%BA%E8%B4%9F%E6%B4%AA%E4%B8%96%E8%B4%A4%E8%89%BE%E8%8E%89%E5%84%BF%E5%AD%90%23) `170.8K 🔥`
1. [安睡裤什么时候变成这样了 (When did Anpai pants become like this?)](https://s.weibo.com/weibo?q=%23%E5%AE%89%E7%9D%A1%E8%A3%A4%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E5%8F%98%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%23) `155.1K 🔥`
1. [日本对现役军人冲击中国使馆冷处理](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%AF%B9%E7%8E%B0%E5%BD%B9%E5%86%9B%E4%BA%BA%E5%86%B2%E5%87%BB%E4%B8%AD%E5%9B%BD%E4%BD%BF%E9%A6%86%E5%86%B7%E5%A4%84%E7%90%86%23) `146.0K 🔥`
1. [黄金连续突破](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%BF%9E%E7%BB%AD%E7%AA%81%E7%A0%B4%23) `119.3K 🔥`
1. [董洁回应没有做烤瓷牙](https://s.weibo.com/weibo?q=%23%E8%91%A3%E6%B4%81%E5%9B%9E%E5%BA%94%E6%B2%A1%E6%9C%89%E5%81%9A%E7%83%A4%E7%93%B7%E7%89%99%23) `111.5K 🔥`
1. [王俊凯 浪姐 (Wang Junkai Sister Lang)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%20%E6%B5%AA%E5%A7%90%23) `108.0K 🔥`
1. [过度自律](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%BA%A6%E8%87%AA%E5%BE%8B%23) `344.7K 🔥` `-56%`
1. [旧手机回收价暴涨五六倍](https://s.weibo.com/weibo?q=%23%E6%97%A7%E6%89%8B%E6%9C%BA%E5%9B%9E%E6%94%B6%E4%BB%B7%E6%9A%B4%E6%B6%A8%E4%BA%94%E5%85%AD%E5%80%8D%23) `261.9K 🔥` `-57%`
1. [员工称救心丸不会因张雪峰事件涨价](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A5%E7%A7%B0%E6%95%91%E5%BF%83%E4%B8%B8%E4%B8%8D%E4%BC%9A%E5%9B%A0%E5%BC%A0%E9%9B%AA%E5%B3%B0%E4%BA%8B%E4%BB%B6%E6%B6%A8%E4%BB%B7%23) `261.9K 🔥` `-27%`
1. [张雪峰微博曾5次提及猝死](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E5%BE%AE%E5%8D%9A%E6%9B%BE5%E6%AC%A1%E6%8F%90%E5%8F%8A%E7%8C%9D%E6%AD%BB%23) `257.3K 🔥` `-57%`
1. [央视新闻发了逐玉](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%96%B0%E9%97%BB%E5%8F%91%E4%BA%86%E9%80%90%E7%8E%89%23) `253.6K 🔥` `-58%`
1. [张雪峰曾给焦虑买房的员工借100万](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%B3%B0%E6%9B%BE%E7%BB%99%E7%84%A6%E8%99%91%E4%B9%B0%E6%88%BF%E7%9A%84%E5%91%98%E5%B7%A5%E5%80%9F100%E4%B8%87%23) `250.8K 🔥` `-21%`
1. [浪姐7阵容 (Lang Jie 7 lineup)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%907%E9%98%B5%E5%AE%B9%23) `247.5K 🔥` `-58%`
1. [大冰感谢张雪峰对小朋友的帮助](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E6%84%9F%E8%B0%A2%E5%BC%A0%E9%9B%AA%E5%B3%B0%E5%AF%B9%E5%B0%8F%E6%9C%8B%E5%8F%8B%E7%9A%84%E5%B8%AE%E5%8A%A9%23) `245.8K 🔥` `-58%`
1. [女儿殿下 夯 (Her Royal Highness Daughter)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E6%AE%BF%E4%B8%8B%20%E5%A4%AF%23) `243.9K 🔥` `-77%`
1. [周杰伦新歌从夯到拉排名 (Jay Chou's new songs ranked from popular to popular)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%B0%E6%AD%8C%E4%BB%8E%E5%A4%AF%E5%88%B0%E6%8B%89%E6%8E%92%E5%90%8D%23) `241.4K 🔥` `-54%`
1. [相当于老鼠开了一家粮仓了](https://s.weibo.com/weibo?q=%23%E7%9B%B8%E5%BD%93%E4%BA%8E%E8%80%81%E9%BC%A0%E5%BC%80%E4%BA%86%E4%B8%80%E5%AE%B6%E7%B2%AE%E4%BB%93%E4%BA%86%23) `240.1K 🔥` `-59%`
1. [向太说人一定要学会避谶](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E8%AF%B4%E4%BA%BA%E4%B8%80%E5%AE%9A%E8%A6%81%E5%AD%A6%E4%BC%9A%E9%81%BF%E8%B0%B6%23) `186.9K 🔥` `-52%`
1. [嘴唇发紫 心脏不好 (Purple lips, bad heart)](https://s.weibo.com/weibo?q=%23%E5%98%B4%E5%94%87%E5%8F%91%E7%B4%AB%20%E5%BF%83%E8%84%8F%E4%B8%8D%E5%A5%BD%23) `182.5K 🔥` `-69%`
1. [心源性猝死与跑步有什么关系](https://s.weibo.com/weibo?q=%23%E5%BF%83%E6%BA%90%E6%80%A7%E7%8C%9D%E6%AD%BB%E4%B8%8E%E8%B7%91%E6%AD%A5%E6%9C%89%E4%BB%80%E4%B9%88%E5%85%B3%E7%B3%BB%23) `149.3K 🔥` `-67%`
1. [霍启刚自曝为追求郭晶晶费尽心思](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%90%AF%E5%88%9A%E8%87%AA%E6%9B%9D%E4%B8%BA%E8%BF%BD%E6%B1%82%E9%83%AD%E6%99%B6%E6%99%B6%E8%B4%B9%E5%B0%BD%E5%BF%83%E6%80%9D%23) `144.2K 🔥` `-29%`
1. [一笑随歌](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%AC%91%E9%9A%8F%E6%AD%8C%23) `111.5K 🔥` `-72%`
1. [何润东 项羽杀秦军情况说明](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%20%E9%A1%B9%E7%BE%BD%E6%9D%80%E7%A7%A6%E5%86%9B%E6%83%85%E5%86%B5%E8%AF%B4%E6%98%8E%23) `111.4K 🔥` `-30%`
1. [硝酸甘油 速效救心丸](https://s.weibo.com/weibo?q=%23%E7%A1%9D%E9%85%B8%E7%94%98%E6%B2%B9%20%E9%80%9F%E6%95%88%E6%95%91%E5%BF%83%E4%B8%B8%23) `94.7K 🔥` `-33%`

Updated at 2026-03-25 14:15:56

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
