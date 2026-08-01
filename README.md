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

1. [哥哥冒用弟弟高考成绩一路读到博士 (My elder brother used his younger brother’s college entrance examination results to study for a Ph.D.)](https://s.weibo.com/weibo?q=%23%E5%93%A5%E5%93%A5%E5%86%92%E7%94%A8%E5%BC%9F%E5%BC%9F%E9%AB%98%E8%80%83%E6%88%90%E7%BB%A9%E4%B8%80%E8%B7%AF%E8%AF%BB%E5%88%B0%E5%8D%9A%E5%A3%AB%23) `1.2M 🔥` `NEW`
1. [绿化工人留遗言后坠亡](https://s.weibo.com/weibo?q=%23%E7%BB%BF%E5%8C%96%E5%B7%A5%E4%BA%BA%E7%95%99%E9%81%97%E8%A8%80%E5%90%8E%E5%9D%A0%E4%BA%A1%23) `921.1K 🔥` `NEW`
1. [逐玉作者道歉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E4%BD%9C%E8%80%85%E9%81%93%E6%AD%89%23) `709.7K 🔥` `NEW`
1. [你的暑期余额已不足一个月](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E6%9A%91%E6%9C%9F%E4%BD%99%E9%A2%9D%E5%B7%B2%E4%B8%8D%E8%B6%B3%E4%B8%80%E4%B8%AA%E6%9C%88%23) `573.9K 🔥` `NEW`
1. [嫁金钗](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%23) `569.5K 🔥` `NEW`
1. [女子住酒店退房搬空用品只剩电视](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BD%8F%E9%85%92%E5%BA%97%E9%80%80%E6%88%BF%E6%90%AC%E7%A9%BA%E7%94%A8%E5%93%81%E5%8F%AA%E5%89%A9%E7%94%B5%E8%A7%86%23) `517.6K 🔥` `NEW`
1. [医院回应相差55分钟出生女婴被错抱](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E5%9B%9E%E5%BA%94%E7%9B%B8%E5%B7%AE55%E5%88%86%E9%92%9F%E5%87%BA%E7%94%9F%E5%A5%B3%E5%A9%B4%E8%A2%AB%E9%94%99%E6%8A%B1%23) `467.5K 🔥` `NEW`
1. [客人笑了半小时才吃这碗蛋炒饭](https://s.weibo.com/weibo?q=%23%E5%AE%A2%E4%BA%BA%E7%AC%91%E4%BA%86%E5%8D%8A%E5%B0%8F%E6%97%B6%E6%89%8D%E5%90%83%E8%BF%99%E7%A2%97%E8%9B%8B%E7%82%92%E9%A5%AD%23) `464.2K 🔥` `NEW`
1. [黄多多晒与弟弟妹妹合影](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A%E6%99%92%E4%B8%8E%E5%BC%9F%E5%BC%9F%E5%A6%B9%E5%A6%B9%E5%90%88%E5%BD%B1%23) `406.3K 🔥` `NEW`
1. [森碟都会开车了](https://s.weibo.com/weibo?q=%23%E6%A3%AE%E7%A2%9F%E9%83%BD%E4%BC%9A%E5%BC%80%E8%BD%A6%E4%BA%86%23) `389.4K 🔥` `NEW`
1. [奥德赛 (Odyssey)](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%BE%B7%E8%B5%9B%23) `313.4K 🔥` `NEW`
1. [网传谢娜歌手歌王之战帮唱](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E8%B0%A2%E5%A8%9C%E6%AD%8C%E6%89%8B%E6%AD%8C%E7%8E%8B%E4%B9%8B%E6%88%98%E5%B8%AE%E5%94%B1%23) `306.9K 🔥` `NEW`
1. [奇瑞七月销量276820辆](https://s.weibo.com/weibo?q=%23%E5%A5%87%E7%91%9E%E4%B8%83%E6%9C%88%E9%94%80%E9%87%8F276820%E8%BE%86%23) `301.8K 🔥` `NEW`
1. [盐城六旬返聘教师校内游泳馆溺亡](https://s.weibo.com/weibo?q=%23%E7%9B%90%E5%9F%8E%E5%85%AD%E6%97%AC%E8%BF%94%E8%81%98%E6%95%99%E5%B8%88%E6%A0%A1%E5%86%85%E6%B8%B8%E6%B3%B3%E9%A6%86%E6%BA%BA%E4%BA%A1%23) `301.8K 🔥` `NEW`
1. [罗正口碑](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%AD%A3%E5%8F%A3%E7%A2%91%23) `301.7K 🔥` `NEW`
1. [我们的少年时代2](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%23) `280.7K 🔥` `NEW`
1. [皇马给维尼修斯下续约最后通牒](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%AC%E7%BB%99%E7%BB%B4%E5%B0%BC%E4%BF%AE%E6%96%AF%E4%B8%8B%E7%BB%AD%E7%BA%A6%E6%9C%80%E5%90%8E%E9%80%9A%E7%89%92%23) `277.3K 🔥` `NEW`
1. [时差3阵容遭质疑](https://s.weibo.com/weibo?q=%23%E6%97%B6%E5%B7%AE3%E9%98%B5%E5%AE%B9%E9%81%AD%E8%B4%A8%E7%96%91%23) `235.6K 🔥` `NEW`
1. [曝Jiejie离开WBG原因](https://s.weibo.com/weibo?q=%23%E6%9B%9DJiejie%E7%A6%BB%E5%BC%80WBG%E5%8E%9F%E5%9B%A0%23) `227.0K 🔥` `NEW`
1. [登陆少年5o呢](https://s.weibo.com/weibo?q=%23%E7%99%BB%E9%99%86%E5%B0%91%E5%B9%B45o%E5%91%A2%23) `212.8K 🔥` `NEW`
1. [Wolves对战FPX.ZQ (Wolves vs. FPX.ZQ)](https://s.weibo.com/weibo?q=%23Wolves%E5%AF%B9%E6%88%98FPX.ZQ%23) `204.3K 🔥` `NEW`
1. [房主任改变不了女儿重复自己的命运](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%BB%E4%BB%BB%E6%94%B9%E5%8F%98%E4%B8%8D%E4%BA%86%E5%A5%B3%E5%84%BF%E9%87%8D%E5%A4%8D%E8%87%AA%E5%B7%B1%E7%9A%84%E5%91%BD%E8%BF%90%23) `198.4K 🔥` `NEW`
1. [DeepSeekV4Flash 便宜](https://s.weibo.com/weibo?q=%23DeepSeekV4Flash%20%E4%BE%BF%E5%AE%9C%23) `192.6K 🔥` `NEW`
1. [登机柜台出现了好小众词汇](https://s.weibo.com/weibo?q=%23%E7%99%BB%E6%9C%BA%E6%9F%9C%E5%8F%B0%E5%87%BA%E7%8E%B0%E4%BA%86%E5%A5%BD%E5%B0%8F%E4%BC%97%E8%AF%8D%E6%B1%87%23) `180.1K 🔥` `NEW`
1. [21岁女子漂流呛水后吐血不止](https://s.weibo.com/weibo?q=%2321%E5%B2%81%E5%A5%B3%E5%AD%90%E6%BC%82%E6%B5%81%E5%91%9B%E6%B0%B4%E5%90%8E%E5%90%90%E8%A1%80%E4%B8%8D%E6%AD%A2%23) `174.9K 🔥` `NEW`
1. [医院错抱女婴致父亲疑妻出轨](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E9%94%99%E6%8A%B1%E5%A5%B3%E5%A9%B4%E8%87%B4%E7%88%B6%E4%BA%B2%E7%96%91%E5%A6%BB%E5%87%BA%E8%BD%A8%23) `174.4K 🔥` `NEW`
1. [TES打野](https://s.weibo.com/weibo?q=%23TES%E6%89%93%E9%87%8E%23) `171.5K 🔥` `NEW`
1. [白鹿苏醒给时代少年团送花篮了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%8B%8F%E9%86%92%E7%BB%99%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E9%80%81%E8%8A%B1%E7%AF%AE%E4%BA%86%23) `167.3K 🔥` `NEW`
1. [外婆朋友圈背景是床边一面墙](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%A9%86%E6%9C%8B%E5%8F%8B%E5%9C%88%E8%83%8C%E6%99%AF%E6%98%AF%E5%BA%8A%E8%BE%B9%E4%B8%80%E9%9D%A2%E5%A2%99%23) `161.3K 🔥` `NEW`
1. [新疆IP网友称大盘鸡里有土豆](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%96%86IP%E7%BD%91%E5%8F%8B%E7%A7%B0%E5%A4%A7%E7%9B%98%E9%B8%A1%E9%87%8C%E6%9C%89%E5%9C%9F%E8%B1%86%23) `151.2K 🔥` `NEW`
1. [任嘉伦红毯压轴出场 (Ren Jialun makes the red carpet finale)](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%98%89%E4%BC%A6%E7%BA%A2%E6%AF%AF%E5%8E%8B%E8%BD%B4%E5%87%BA%E5%9C%BA%23) `138.1K 🔥` `NEW`
1. [韩国两女子吸毒后在马路现骇人行为](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E4%B8%A4%E5%A5%B3%E5%AD%90%E5%90%B8%E6%AF%92%E5%90%8E%E5%9C%A8%E9%A9%AC%E8%B7%AF%E7%8E%B0%E9%AA%87%E4%BA%BA%E8%A1%8C%E4%B8%BA%23) `132.7K 🔥` `NEW`
1. [歼15飞行员雨中盲操安全着舰](https://s.weibo.com/weibo?q=%23%E6%AD%BC15%E9%A3%9E%E8%A1%8C%E5%91%98%E9%9B%A8%E4%B8%AD%E7%9B%B2%E6%93%8D%E5%AE%89%E5%85%A8%E7%9D%80%E8%88%B0%23) `712.7K 🔥` `+76%`
1. [遭公公强奸儿媳被鉴定为精神发育迟滞](https://s.weibo.com/weibo?q=%23%E9%81%AD%E5%85%AC%E5%85%AC%E5%BC%BA%E5%A5%B8%E5%84%BF%E5%AA%B3%E8%A2%AB%E9%89%B4%E5%AE%9A%E4%B8%BA%E7%B2%BE%E7%A5%9E%E5%8F%91%E8%82%B2%E8%BF%9F%E6%BB%9E%23) `566.5K 🔥` `+119%`
1. [小朋友的社交不谈感情全是事情](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%9C%8B%E5%8F%8B%E7%9A%84%E7%A4%BE%E4%BA%A4%E4%B8%8D%E8%B0%88%E6%84%9F%E6%83%85%E5%85%A8%E6%98%AF%E4%BA%8B%E6%83%85%23) `167.5K 🔥` `+30%`
1. [陈瑶霍仙姑下线了](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E9%9C%8D%E4%BB%99%E5%A7%91%E4%B8%8B%E7%BA%BF%E4%BA%86%23) `669.4K 🔥`
1. [这样的外卖才配收我的打包费](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%A0%B7%E7%9A%84%E5%A4%96%E5%8D%96%E6%89%8D%E9%85%8D%E6%94%B6%E6%88%91%E7%9A%84%E6%89%93%E5%8C%85%E8%B4%B9%23) `574.4K 🔥`
1. [jiejie EDG](https://s.weibo.com/weibo?q=%23jiejie%20EDG%23) `484.5K 🔥`
1. [借1万块1年利息掏了2400元](https://s.weibo.com/weibo?q=%23%E5%80%9F1%E4%B8%87%E5%9D%971%E5%B9%B4%E5%88%A9%E6%81%AF%E6%8E%8F%E4%BA%862400%E5%85%83%23) `301.8K 🔥`
1. [俄罗斯姐弟在泰国被杀害](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E5%A7%90%E5%BC%9F%E5%9C%A8%E6%B3%B0%E5%9B%BD%E8%A2%AB%E6%9D%80%E5%AE%B3%23) `190.2K 🔥`
1. [董宇辉看500遍大话西游是什么概念 (Dong Yuhui has watched Westward Journey 500 times. What is the concept?)](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%AE%87%E8%BE%89%E7%9C%8B500%E9%81%8D%E5%A4%A7%E8%AF%9D%E8%A5%BF%E6%B8%B8%E6%98%AF%E4%BB%80%E4%B9%88%E6%A6%82%E5%BF%B5%23) `179.6K 🔥`
1. [喜羊羊与灰太狼回应被指擦边](https://s.weibo.com/weibo?q=%23%E5%96%9C%E7%BE%8A%E7%BE%8A%E4%B8%8E%E7%81%B0%E5%A4%AA%E7%8B%BC%E5%9B%9E%E5%BA%94%E8%A2%AB%E6%8C%87%E6%93%A6%E8%BE%B9%23) `315.3K 🔥` `-53%`
1. [花儿与少年8](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%84%BF%E4%B8%8E%E5%B0%91%E5%B9%B48%23) `187.9K 🔥` `-51%`
1. [上海偶遇Angelababy吃甜品 (Meeting Angelababy for dessert in Shanghai)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%81%B6%E9%81%87Angelababy%E5%90%83%E7%94%9C%E5%93%81%23) `173.9K 🔥` `-33%`
1. [你的骑手正在追迪丽热巴](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%9A%84%E9%AA%91%E6%89%8B%E6%AD%A3%E5%9C%A8%E8%BF%BD%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23) `167.5K 🔥` `-33%`
1. [罗正演过多少男主剧 (How many male-leading dramas has Luo Zheng acted in?)](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%AD%A3%E6%BC%94%E8%BF%87%E5%A4%9A%E5%B0%91%E7%94%B7%E4%B8%BB%E5%89%A7%23) `160.6K 🔥` `-37%`
1. [小澈直播被封](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%BE%88%E7%9B%B4%E6%92%AD%E8%A2%AB%E5%B0%81%23) `150.0K 🔥` `-42%`
1. [KSG 时差3](https://s.weibo.com/weibo?q=%23KSG%20%E6%97%B6%E5%B7%AE3%23) `133.5K 🔥` `-49%`
1. [车企7月份销量数据](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E4%BC%817%E6%9C%88%E4%BB%BD%E9%94%80%E9%87%8F%E6%95%B0%E6%8D%AE%23) `132.5K 🔥` `-47%`
1. [小鹏7月交付超3.8万台](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8F7%E6%9C%88%E4%BA%A4%E4%BB%98%E8%B6%853.8%E4%B8%87%E5%8F%B0%23) `132.4K 🔥` `-34%`
1. [佛得角门将加盟科洛科洛生变](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%E5%8A%A0%E7%9B%9F%E7%A7%91%E6%B4%9B%E7%A7%91%E6%B4%9B%E7%94%9F%E5%8F%98%23) `132.4K 🔥` `-53%`

Updated at 2026-08-01 18:57:08

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
