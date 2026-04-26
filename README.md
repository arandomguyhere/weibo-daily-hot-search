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

1. [马刺3比1开拓者 (Spurs 3-1 Trail Blazers)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%88%BA3%E6%AF%941%E5%BC%80%E6%8B%93%E8%80%85%23) `317.9K 🔥` `NEW`
1. [郑钦文马德里1比2莱巴金娜](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E9%A9%AC%E5%BE%B7%E9%87%8C1%E6%AF%942%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%23) `290.7K 🔥` `NEW`
1. [宝妈18万坐月子违约被要求赔2万](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E5%A6%8818%E4%B8%87%E5%9D%90%E6%9C%88%E5%AD%90%E8%BF%9D%E7%BA%A6%E8%A2%AB%E8%A6%81%E6%B1%82%E8%B5%942%E4%B8%87%23) `285.4K 🔥` `NEW`
1. [东方甄选正在变成普通直播电商](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E6%AD%A3%E5%9C%A8%E5%8F%98%E6%88%90%E6%99%AE%E9%80%9A%E7%9B%B4%E6%92%AD%E7%94%B5%E5%95%86%23) `223.4K 🔥` `NEW`
1. [今年榴莲大丰收大幅降价](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E6%A6%B4%E8%8E%B2%E5%A4%A7%E4%B8%B0%E6%94%B6%E5%A4%A7%E5%B9%85%E9%99%8D%E4%BB%B7%23) `184.1K 🔥` `NEW`
1. [张月的实力](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E7%9A%84%E5%AE%9E%E5%8A%9B%23) `123.5K 🔥` `NEW`
1. [美芯片股史诗级暴涨](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%8A%AF%E7%89%87%E8%82%A1%E5%8F%B2%E8%AF%97%E7%BA%A7%E6%9A%B4%E6%B6%A8%23) `110.2K 🔥` `NEW`
1. [蜜语纪穿帮 手提行李箱](https://s.weibo.com/weibo?q=%23%E8%9C%9C%E8%AF%AD%E7%BA%AA%E7%A9%BF%E5%B8%AE%20%E6%89%8B%E6%8F%90%E8%A1%8C%E6%9D%8E%E7%AE%B1%23) `103.8K 🔥` `NEW`
1. [郑钦文成功破发莱巴金娜](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E6%88%90%E5%8A%9F%E7%A0%B4%E5%8F%91%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%23) `101.0K 🔥` `NEW`
1. [一诺 九周年见](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%20%E4%B9%9D%E5%91%A8%E5%B9%B4%E8%A7%81%23) `93.1K 🔥` `NEW`
1. [徐洁儿乌兰图雅唱言不由衷 (Xu Jie'er Wulan Tuya sings without sincerity)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B4%81%E5%84%BF%E4%B9%8C%E5%85%B0%E5%9B%BE%E9%9B%85%E5%94%B1%E8%A8%80%E4%B8%8D%E7%94%B1%E8%A1%B7%23) `87.4K 🔥` `NEW`
1. [薄膜铌酸锂迎来导入机遇](https://s.weibo.com/weibo?q=%23%E8%96%84%E8%86%9C%E9%93%8C%E9%85%B8%E9%94%82%E8%BF%8E%E6%9D%A5%E5%AF%BC%E5%85%A5%E6%9C%BA%E9%81%87%23) `69.5K 🔥` `NEW`
1. [精灵耳整形手术藏了大隐患](https://s.weibo.com/weibo?q=%23%E7%B2%BE%E7%81%B5%E8%80%B3%E6%95%B4%E5%BD%A2%E6%89%8B%E6%9C%AF%E8%97%8F%E4%BA%86%E5%A4%A7%E9%9A%90%E6%82%A3%23) `66.5K 🔥` `NEW`
1. [歌手2026 (singer 2026)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%23) `1.1M 🔥` `+55%`
1. [特朗普夫人反应迅速](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%A4%AB%E4%BA%BA%E5%8F%8D%E5%BA%94%E8%BF%85%E9%80%9F%23) `800.6K 🔥` `+62%`
1. [影视文旅成消费新风口](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E6%96%87%E6%97%85%E6%88%90%E6%B6%88%E8%B4%B9%E6%96%B0%E9%A3%8E%E5%8F%A3%23) `765.5K 🔥` `+92%`
1. [身份证照片最接近别人肉眼看到的自己 (The ID photo is the closest to what others see of you.)](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BB%BD%E8%AF%81%E7%85%A7%E7%89%87%E6%9C%80%E6%8E%A5%E8%BF%91%E5%88%AB%E4%BA%BA%E8%82%89%E7%9C%BC%E7%9C%8B%E5%88%B0%E7%9A%84%E8%87%AA%E5%B7%B1%23) `746.4K 🔥` `+92%`
1. [伊朗最高领袖突然发文 (Iran’s supreme leader suddenly issued a message)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E7%AA%81%E7%84%B6%E5%8F%91%E6%96%87%23) `512.7K 🔥` `+36%`
1. [张月 挂电](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%20%E6%8C%82%E7%94%B5%23) `479.4K 🔥` `+59%`
1. [东方甄选新CEO为何与老将难共存 (Why is it difficult for Dongfang to select a new CEO to coexist with veterans?)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E6%96%B0CEO%E4%B8%BA%E4%BD%95%E4%B8%8E%E8%80%81%E5%B0%86%E9%9A%BE%E5%85%B1%E5%AD%98%23) `414.8K 🔥` `+59%`
1. [迪丽热巴跑男只录了12天 (Di Lieba's Running Man only recorded for 12 days)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%B7%91%E7%94%B7%E5%8F%AA%E5%BD%95%E4%BA%8612%E5%A4%A9%23) `308.8K 🔥` `+27%`
1. [男子乱小便踹人致自己骨折](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B9%B1%E5%B0%8F%E4%BE%BF%E8%B8%B9%E4%BA%BA%E8%87%B4%E8%87%AA%E5%B7%B1%E9%AA%A8%E6%8A%98%23) `274.1K 🔥` `+64%`
1. [连续两周上四休三 (Two weeks in a row, four days off and three days off)](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E7%BB%AD%E4%B8%A4%E5%91%A8%E4%B8%8A%E5%9B%9B%E4%BC%91%E4%B8%89%23) `270.4K 🔥` `+51%`
1. [唐艺昕 何宣林 (Tang Yixin He Xuanlin)](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%20%E4%BD%95%E5%AE%A3%E6%9E%97%23) `261.5K 🔥` `+23%`
1. [女子老太地铁抢座打架谁更该羞愧 (Woman and old woman fight over subway seats, who should be ashamed more)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%80%81%E5%A4%AA%E5%9C%B0%E9%93%81%E6%8A%A2%E5%BA%A7%E6%89%93%E6%9E%B6%E8%B0%81%E6%9B%B4%E8%AF%A5%E7%BE%9E%E6%84%A7%23) `248.8K 🔥` `+23%`
1. [俞敏洪坦言公司管理方式出现偏差](https://s.weibo.com/weibo?q=%23%E4%BF%9E%E6%95%8F%E6%B4%AA%E5%9D%A6%E8%A8%80%E5%85%AC%E5%8F%B8%E7%AE%A1%E7%90%86%E6%96%B9%E5%BC%8F%E5%87%BA%E7%8E%B0%E5%81%8F%E5%B7%AE%23) `208.2K 🔥` `+203%`
1. [女生腹痛以为肠胃不适查出满肚肿瘤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E8%85%B9%E7%97%9B%E4%BB%A5%E4%B8%BA%E8%82%A0%E8%83%83%E4%B8%8D%E9%80%82%E6%9F%A5%E5%87%BA%E6%BB%A1%E8%82%9A%E8%82%BF%E7%98%A4%23) `189.8K 🔥` `+91%`
1. [佳偶天成](https://s.weibo.com/weibo?q=%23%E4%BD%B3%E5%81%B6%E5%A4%A9%E6%88%90%23) `177.8K 🔥` `+52%`
1. [宋茜到西安就像老鼠掉进了米缸 (Song Qian's arrival in Xi'an is like a mouse falling into a rice vat)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E8%8C%9C%E5%88%B0%E8%A5%BF%E5%AE%89%E5%B0%B1%E5%83%8F%E8%80%81%E9%BC%A0%E6%8E%89%E8%BF%9B%E4%BA%86%E7%B1%B3%E7%BC%B8%23) `147.9K 🔥` `+90%`
1. [1岁女童小区玩耍感染广州管圆线虫](https://s.weibo.com/weibo?q=%231%E5%B2%81%E5%A5%B3%E7%AB%A5%E5%B0%8F%E5%8C%BA%E7%8E%A9%E8%80%8D%E6%84%9F%E6%9F%93%E5%B9%BF%E5%B7%9E%E7%AE%A1%E5%9C%86%E7%BA%BF%E8%99%AB%23) `128.3K 🔥` `+101%`
1. [别在乱充电提早损害电池健康了 (Don’t charge randomly and damage the health of the battery in advance.)](https://s.weibo.com/weibo?q=%23%E5%88%AB%E5%9C%A8%E4%B9%B1%E5%85%85%E7%94%B5%E6%8F%90%E6%97%A9%E6%8D%9F%E5%AE%B3%E7%94%B5%E6%B1%A0%E5%81%A5%E5%BA%B7%E4%BA%86%23) `105.2K 🔥` `+38%`
1. [生命树杨紫的家成了打卡点](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E6%9D%A8%E7%B4%AB%E7%9A%84%E5%AE%B6%E6%88%90%E4%BA%86%E6%89%93%E5%8D%A1%E7%82%B9%23) `94.9K 🔥` `+77%`
1. [A股一季度最赚钱公司曝光 (The most profitable companies in A-share market in the first quarter exposed)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%B8%80%E5%AD%A3%E5%BA%A6%E6%9C%80%E8%B5%9A%E9%92%B1%E5%85%AC%E5%8F%B8%E6%9B%9D%E5%85%89%23) `80.1K 🔥` `+49%`
1. [张颂文没看过狂飙 (Zhang Songwen has never watched Kuangbiao)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A2%82%E6%96%87%E6%B2%A1%E7%9C%8B%E8%BF%87%E7%8B%82%E9%A3%99%23) `243.1K 🔥`
1. [AG确认晋级挑杯十六强](https://s.weibo.com/weibo?q=%23AG%E7%A1%AE%E8%AE%A4%E6%99%8B%E7%BA%A7%E6%8C%91%E6%9D%AF%E5%8D%81%E5%85%AD%E5%BC%BA%23) `234.3K 🔥`
1. [陈德修 够爱 (Chen Dexiu Love it enough)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%BE%B7%E4%BF%AE%20%E5%A4%9F%E7%88%B1%23) `218.9K 🔥`
1. [胖东来18元瓶装矿泉水遭哄抢 (Pang Donglai’s 18 yuan bottle of mineral water was robbed)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A518%E5%85%83%E7%93%B6%E8%A3%85%E7%9F%BF%E6%B3%89%E6%B0%B4%E9%81%AD%E5%93%84%E6%8A%A2%23) `207.1K 🔥`
1. [网店卖8年假耐克赚了126万 (Online store earns 1.26 million from selling 8-year-old fake Nike)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%BA%97%E5%8D%968%E5%B9%B4%E5%81%87%E8%80%90%E5%85%8B%E8%B5%9A%E4%BA%86126%E4%B8%87%23) `190.6K 🔥`
1. [世界上两个最离不开手的东西合体了](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%B8%8A%E4%B8%A4%E4%B8%AA%E6%9C%80%E7%A6%BB%E4%B8%8D%E5%BC%80%E6%89%8B%E7%9A%84%E4%B8%9C%E8%A5%BF%E5%90%88%E4%BD%93%E4%BA%86%23) `179.5K 🔥`
1. [男子从内地偷运51公斤盒饭回澳门 (Man smuggles 51 kilograms of lunch boxes from the mainland back to Macau)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%BB%8E%E5%86%85%E5%9C%B0%E5%81%B7%E8%BF%9051%E5%85%AC%E6%96%A4%E7%9B%92%E9%A5%AD%E5%9B%9E%E6%BE%B3%E9%97%A8%23) `178.5K 🔥`
1. [男童泡温泉遇蛇吓出应激创伤 (Boy encounters snake in hot spring and suffers from stress trauma)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%AB%A5%E6%B3%A1%E6%B8%A9%E6%B3%89%E9%81%87%E8%9B%87%E5%90%93%E5%87%BA%E5%BA%94%E6%BF%80%E5%88%9B%E4%BC%A4%23) `101.9K 🔥`
1. [浪姐直播疑似没人理何宣林](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%E7%96%91%E4%BC%BC%E6%B2%A1%E4%BA%BA%E7%90%86%E4%BD%95%E5%AE%A3%E6%9E%97%23) `97.5K 🔥`
1. [外籍游客三亚旅游15元误付1.5万 (Foreign tourist mistakenly paid 15,000 yuan for a trip to Sanya)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E7%B1%8D%E6%B8%B8%E5%AE%A2%E4%B8%89%E4%BA%9A%E6%97%85%E6%B8%B815%E5%85%83%E8%AF%AF%E4%BB%981.5%E4%B8%87%23) `80.8K 🔥`
1. [杨幂冯太后盘发造型路透 (Yang Mi and Queen Mother Feng’s hairstyle Reuters)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%86%AF%E5%A4%AA%E5%90%8E%E7%9B%98%E5%8F%91%E9%80%A0%E5%9E%8B%E8%B7%AF%E9%80%8F%23) `78.5K 🔥`
1. [浴室除霉菌 霉菌视角 (Bathroom Mold Removal Mold Perspective)](https://s.weibo.com/weibo?q=%23%E6%B5%B4%E5%AE%A4%E9%99%A4%E9%9C%89%E8%8F%8C%20%E9%9C%89%E8%8F%8C%E8%A7%86%E8%A7%92%23) `74.9K 🔥`
1. [集体离职撕开东方甄选内部乱象 (Collective resignations opened up internal chaos at Oriental Selection)](https://s.weibo.com/weibo?q=%23%E9%9B%86%E4%BD%93%E7%A6%BB%E8%81%8C%E6%92%95%E5%BC%80%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E5%86%85%E9%83%A8%E4%B9%B1%E8%B1%A1%23) `71.4K 🔥`
1. [韦雪回应脖子显老 (Wei Xue responded that her neck looks old)](https://s.weibo.com/weibo?q=%23%E9%9F%A6%E9%9B%AA%E5%9B%9E%E5%BA%94%E8%84%96%E5%AD%90%E6%98%BE%E8%80%81%23) `103.8K 🔥` `-27%`
1. [花少总导演回复苏新皓粉丝](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%91%E6%80%BB%E5%AF%BC%E6%BC%94%E5%9B%9E%E5%A4%8D%E8%8B%8F%E6%96%B0%E7%9A%93%E7%B2%89%E4%B8%9D%23) `101.8K 🔥` `-55%`
1. [许凯演技 (Xu Kai's acting skills)](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%87%AF%E6%BC%94%E6%8A%80%23) `69.7K 🔥` `-29%`

Updated at 2026-04-27 07:56:24

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
