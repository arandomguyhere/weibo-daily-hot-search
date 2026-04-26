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

1. [张月 挂电 (Zhang Yue hung up the phone)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%20%E6%8C%82%E7%94%B5%23) `861.8K 🔥` `NEW`
1. [俞敏洪坦言公司管理方式出现偏差](https://s.weibo.com/weibo?q=%23%E4%BF%9E%E6%95%8F%E6%B4%AA%E5%9D%A6%E8%A8%80%E5%85%AC%E5%8F%B8%E7%AE%A1%E7%90%86%E6%96%B9%E5%BC%8F%E5%87%BA%E7%8E%B0%E5%81%8F%E5%B7%AE%23) `400.6K 🔥` `NEW`
1. [伊朗最高领袖突然发文](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E7%AA%81%E7%84%B6%E5%8F%91%E6%96%87%23) `400.5K 🔥` `NEW`
1. [员工搞副业被判赔公司580万](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A5%E6%90%9E%E5%89%AF%E4%B8%9A%E8%A2%AB%E5%88%A4%E8%B5%94%E5%85%AC%E5%8F%B8580%E4%B8%87%23) `400.3K 🔥` `NEW`
1. [男童泡温泉遇蛇吓出应激创伤](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%AB%A5%E6%B3%A1%E6%B8%A9%E6%B3%89%E9%81%87%E8%9B%87%E5%90%93%E5%87%BA%E5%BA%94%E6%BF%80%E5%88%9B%E4%BC%A4%23) `400.3K 🔥` `NEW`
1. [为什么先救万斯](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%85%88%E6%95%91%E4%B8%87%E6%96%AF%23) `400.1K 🔥` `NEW`
1. [鸿星尔克的陪伴从校园到职场](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E6%98%9F%E5%B0%94%E5%85%8B%E7%9A%84%E9%99%AA%E4%BC%B4%E4%BB%8E%E6%A0%A1%E5%9B%AD%E5%88%B0%E8%81%8C%E5%9C%BA%23) `399.9K 🔥` `NEW`
1. [PEL](https://s.weibo.com/weibo?q=%23PEL%23) `399.9K 🔥` `NEW`
1. [张月 没保护好者来女是我的遗憾](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%20%E6%B2%A1%E4%BF%9D%E6%8A%A4%E5%A5%BD%E8%80%85%E6%9D%A5%E5%A5%B3%E6%98%AF%E6%88%91%E7%9A%84%E9%81%97%E6%86%BE%23) `394.5K 🔥` `NEW`
1. [佳偶天成](https://s.weibo.com/weibo?q=%23%E4%BD%B3%E5%81%B6%E5%A4%A9%E6%88%90%23) `296.7K 🔥` `NEW`
1. [连续两周上四休三 (Two weeks in a row, four days off and three days off)](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E7%BB%AD%E4%B8%A4%E5%91%A8%E4%B8%8A%E5%9B%9B%E4%BC%91%E4%B8%89%23) `237.1K 🔥` `NEW`
1. [边伯贤追加了舞台](https://s.weibo.com/weibo?q=%23%E8%BE%B9%E4%BC%AF%E8%B4%A4%E8%BF%BD%E5%8A%A0%E4%BA%86%E8%88%9E%E5%8F%B0%23) `209.3K 🔥` `NEW`
1. [浪姐三公淘汰赛制](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%B8%89%E5%85%AC%E6%B7%98%E6%B1%B0%E8%B5%9B%E5%88%B6%23) `199.6K 🔥` `NEW`
1. [特斯拉为什么不参加车展](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E5%8F%82%E5%8A%A0%E8%BD%A6%E5%B1%95%23) `197.0K 🔥` `NEW`
1. [李小冉跟心愿便利贴女主陈乔恩相遇了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E8%B7%9F%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4%E5%A5%B3%E4%B8%BB%E9%99%88%E4%B9%94%E6%81%A9%E7%9B%B8%E9%81%87%E4%BA%86%23) `195.9K 🔥` `NEW`
1. [Faker与Keria破纪录](https://s.weibo.com/weibo?q=%23Faker%E4%B8%8EKeria%E7%A0%B4%E7%BA%AA%E5%BD%95%23) `165.9K 🔥` `NEW`
1. [俞敏洪曾力挺的新CEO是谁](https://s.weibo.com/weibo?q=%23%E4%BF%9E%E6%95%8F%E6%B4%AA%E6%9B%BE%E5%8A%9B%E6%8C%BA%E7%9A%84%E6%96%B0CEO%E6%98%AF%E8%B0%81%23) `159.0K 🔥` `NEW`
1. [男子从内地偷运51公斤盒饭回澳门](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%BB%8E%E5%86%85%E5%9C%B0%E5%81%B7%E8%BF%9051%E5%85%AC%E6%96%A4%E7%9B%92%E9%A5%AD%E5%9B%9E%E6%BE%B3%E9%97%A8%23) `945.1K 🔥` `+174%`
1. [世界上两个最离不开手的东西合体了](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%B8%8A%E4%B8%A4%E4%B8%AA%E6%9C%80%E7%A6%BB%E4%B8%8D%E5%BC%80%E6%89%8B%E7%9A%84%E4%B8%9C%E8%A5%BF%E5%90%88%E4%BD%93%E4%BA%86%23) `741.7K 🔥` `+317%`
1. [杨幂冯太后盘发造型路透 (Yang Mi and Queen Mother Feng’s hairstyle Reuters)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%86%AF%E5%A4%AA%E5%90%8E%E7%9B%98%E5%8F%91%E9%80%A0%E5%9E%8B%E8%B7%AF%E9%80%8F%23) `300.5K 🔥` `+26%`
1. [RW对战AG](https://s.weibo.com/weibo?q=%23RW%E5%AF%B9%E6%88%98AG%23) `253.3K 🔥` `+57%`
1. [特朗普夫人反应迅速 (Mrs. Trump reacted quickly)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%A4%AB%E4%BA%BA%E5%8F%8D%E5%BA%94%E8%BF%85%E9%80%9F%23) `184.2K 🔥` `+27%`
1. [影视文旅成消费新风口](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E6%96%87%E6%97%85%E6%88%90%E6%B6%88%E8%B4%B9%E6%96%B0%E9%A3%8E%E5%8F%A3%23) `905.9K 🔥`
1. [东方小国礼 新国雅行政新典范 (Oriental Small Country Etiquette, New Country Elegance New Model of Administration)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E5%B0%8F%E5%9B%BD%E7%A4%BC%20%E6%96%B0%E5%9B%BD%E9%9B%85%E8%A1%8C%E6%94%BF%E6%96%B0%E5%85%B8%E8%8C%83%23) `897.1K 🔥`
1. [身份证照片最接近别人肉眼看到的自己](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BB%BD%E8%AF%81%E7%85%A7%E7%89%87%E6%9C%80%E6%8E%A5%E8%BF%91%E5%88%AB%E4%BA%BA%E8%82%89%E7%9C%BC%E7%9C%8B%E5%88%B0%E7%9A%84%E8%87%AA%E5%B7%B1%23) `797.5K 🔥`
1. [迪丽热巴跑男只录了12天](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%B7%91%E7%94%B7%E5%8F%AA%E5%BD%95%E4%BA%8612%E5%A4%A9%23) `776.7K 🔥`
1. [A股一季度最赚钱公司曝光](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%B8%80%E5%AD%A3%E5%BA%A6%E6%9C%80%E8%B5%9A%E9%92%B1%E5%85%AC%E5%8F%B8%E6%9B%9D%E5%85%89%23) `424.4K 🔥`
1. [集体离职撕开东方甄选内部乱象 (Collective resignations opened up internal chaos at Oriental Selection)](https://s.weibo.com/weibo?q=%23%E9%9B%86%E4%BD%93%E7%A6%BB%E8%81%8C%E6%92%95%E5%BC%80%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E5%86%85%E9%83%A8%E4%B9%B1%E8%B1%A1%23) `401.1K 🔥`
1. [唐艺昕 何宣林](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%20%E4%BD%95%E5%AE%A3%E6%9E%97%23) `401.1K 🔥`
1. [一笙回应](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%AC%99%E5%9B%9E%E5%BA%94%23) `401.0K 🔥`
1. [井柏然 老人味太重](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%20%E8%80%81%E4%BA%BA%E5%91%B3%E5%A4%AA%E9%87%8D%23) `400.9K 🔥`
1. [乘风2026三公淘汰四位姐姐](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E4%B8%89%E5%85%AC%E6%B7%98%E6%B1%B0%E5%9B%9B%E4%BD%8D%E5%A7%90%E5%A7%90%23) `400.8K 🔥`
1. [胖东来18元瓶装矿泉水遭哄抢](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A518%E5%85%83%E7%93%B6%E8%A3%85%E7%9F%BF%E6%B3%89%E6%B0%B4%E9%81%AD%E5%93%84%E6%8A%A2%23) `400.7K 🔥`
1. [赵心童战胜丁俊晖进八强 (Zhao Xintong defeats Ding Junhui and enters quarterfinals)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%BF%83%E7%AB%A5%E6%88%98%E8%83%9C%E4%B8%81%E4%BF%8A%E6%99%96%E8%BF%9B%E5%85%AB%E5%BC%BA%23) `400.2K 🔥`
1. [橹穆双人舞台百天播放量 (Lu Mu double stage 100-day views)](https://s.weibo.com/weibo?q=%23%E6%A9%B9%E7%A9%86%E5%8F%8C%E4%BA%BA%E8%88%9E%E5%8F%B0%E7%99%BE%E5%A4%A9%E6%92%AD%E6%94%BE%E9%87%8F%23) `400.0K 🔥`
1. [女生腹痛以为肠胃不适查出满肚肿瘤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E8%85%B9%E7%97%9B%E4%BB%A5%E4%B8%BA%E8%82%A0%E8%83%83%E4%B8%8D%E9%80%82%E6%9F%A5%E5%87%BA%E6%BB%A1%E8%82%9A%E8%82%BF%E7%98%A4%23) `355.1K 🔥`
1. [张凯丽女儿出道9年第一次拍吻戏](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%AF%E4%B8%BD%E5%A5%B3%E5%84%BF%E5%87%BA%E9%81%939%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E6%8B%8D%E5%90%BB%E6%88%8F%23) `335.7K 🔥`
1. [王濛手臂图案 (Wang Meng's arm pattern)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E6%89%8B%E8%87%82%E5%9B%BE%E6%A1%88%23) `322.9K 🔥`
1. [一笙后援会集体辞职](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%AC%99%E5%90%8E%E6%8F%B4%E4%BC%9A%E9%9B%86%E4%BD%93%E8%BE%9E%E8%81%8C%23) `303.2K 🔥`
1. [张小斐 没有讨好感的眼神和动作](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%20%E6%B2%A1%E6%9C%89%E8%AE%A8%E5%A5%BD%E6%84%9F%E7%9A%84%E7%9C%BC%E7%A5%9E%E5%92%8C%E5%8A%A8%E4%BD%9C%23) `268.9K 🔥`
1. [女子不知怀孕医院上厕所时生二胎 (Woman didn't know she was pregnant, gave birth to second child while using hospital toilet)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%8D%E7%9F%A5%E6%80%80%E5%AD%95%E5%8C%BB%E9%99%A2%E4%B8%8A%E5%8E%95%E6%89%80%E6%97%B6%E7%94%9F%E4%BA%8C%E8%83%8E%23) `177.7K 🔥`
1. [巴基斯坦总统访华现场画面 (Live footage of the President of Pakistan’s visit to China)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E6%80%BB%E7%BB%9F%E8%AE%BF%E5%8D%8E%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `176.7K 🔥`
1. [鸿星尔克董事长比员工更想下班](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E6%98%9F%E5%B0%94%E5%85%8B%E8%91%A3%E4%BA%8B%E9%95%BF%E6%AF%94%E5%91%98%E5%B7%A5%E6%9B%B4%E6%83%B3%E4%B8%8B%E7%8F%AD%23) `160.9K 🔥`
1. [别在乱充电提早损害电池健康了](https://s.weibo.com/weibo?q=%23%E5%88%AB%E5%9C%A8%E4%B9%B1%E5%85%85%E7%94%B5%E6%8F%90%E6%97%A9%E6%8D%9F%E5%AE%B3%E7%94%B5%E6%B1%A0%E5%81%A5%E5%BA%B7%E4%BA%86%23) `159.3K 🔥`
1. [歌手2026 (singer 2026)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%23) `1.7M 🔥` `-29%`
1. [人类马拉松破二 (Human marathon breaks second)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%B1%BB%E9%A9%AC%E6%8B%89%E6%9D%BE%E7%A0%B4%E4%BA%8C%23) `488.3K 🔥` `-50%`
1. [浪姐直播疑似没人理何宣林](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%E7%96%91%E4%BC%BC%E6%B2%A1%E4%BA%BA%E7%90%86%E4%BD%95%E5%AE%A3%E6%9E%97%23) `400.6K 🔥` `-46%`
1. [山姆29.9元羽衣甘蓝盆栽被抢空](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%8629.9%E5%85%83%E7%BE%BD%E8%A1%A3%E7%94%98%E8%93%9D%E7%9B%86%E6%A0%BD%E8%A2%AB%E6%8A%A2%E7%A9%BA%23) `272.8K 🔥` `-31%`
1. [狗狗脚脱臼了医患双方都很紧张 (The dog's foot was dislocated and both the doctor and the patient were nervous.)](https://s.weibo.com/weibo?q=%23%E7%8B%97%E7%8B%97%E8%84%9A%E8%84%B1%E8%87%BC%E4%BA%86%E5%8C%BB%E6%82%A3%E5%8F%8C%E6%96%B9%E9%83%BD%E5%BE%88%E7%B4%A7%E5%BC%A0%23) `230.8K 🔥` `-37%`
1. [男大学生压力大喝农药10天才就医](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%8E%8B%E5%8A%9B%E5%A4%A7%E5%96%9D%E5%86%9C%E8%8D%AF10%E5%A4%A9%E6%89%8D%E5%B0%B1%E5%8C%BB%23) `163.5K 🔥` `-34%`
1. [三鲜豆皮 (Three fresh bean curds)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E9%B2%9C%E8%B1%86%E7%9A%AE%23) `161.7K 🔥` `-60%`

Updated at 2026-04-26 22:42:01

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
