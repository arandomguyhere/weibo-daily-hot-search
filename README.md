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

1. [歌手2026 (singer 2026)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%23) `2.3M 🔥` `NEW`
1. [A股一季度最赚钱公司曝光](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%B8%80%E5%AD%A3%E5%BA%A6%E6%9C%80%E8%B5%9A%E9%92%B1%E5%85%AC%E5%8F%B8%E6%9B%9D%E5%85%89%23) `489.4K 🔥` `NEW`
1. [一笙回应](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%AC%99%E5%9B%9E%E5%BA%94%23) `405.4K 🔥` `NEW`
1. [胖东来18元瓶装矿泉水遭哄抢](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A518%E5%85%83%E7%93%B6%E8%A3%85%E7%9F%BF%E6%B3%89%E6%B0%B4%E9%81%AD%E5%93%84%E6%8A%A2%23) `401.1K 🔥` `NEW`
1. [橹穆双人舞台百天播放量](https://s.weibo.com/weibo?q=%23%E6%A9%B9%E7%A9%86%E5%8F%8C%E4%BA%BA%E8%88%9E%E5%8F%B0%E7%99%BE%E5%A4%A9%E6%92%AD%E6%94%BE%E9%87%8F%23) `399.8K 🔥` `NEW`
1. [女生腹痛以为肠胃不适查出满肚肿瘤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E8%85%B9%E7%97%9B%E4%BB%A5%E4%B8%BA%E8%82%A0%E8%83%83%E4%B8%8D%E9%80%82%E6%9F%A5%E5%87%BA%E6%BB%A1%E8%82%9A%E8%82%BF%E7%98%A4%23) `397.7K 🔥` `NEW`
1. [山姆29.9元羽衣甘蓝盆栽被抢空](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%8629.9%E5%85%83%E7%BE%BD%E8%A1%A3%E7%94%98%E8%93%9D%E7%9B%86%E6%A0%BD%E8%A2%AB%E6%8A%A2%E7%A9%BA%23) `395.6K 🔥` `NEW`
1. [陈律自曝痞幼是他前女友](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%BE%8B%E8%87%AA%E6%9B%9D%E7%97%9E%E5%B9%BC%E6%98%AF%E4%BB%96%E5%89%8D%E5%A5%B3%E5%8F%8B%23) `387.1K 🔥` `NEW`
1. [男子从内地偷运51公斤盒饭回澳门](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%BB%8E%E5%86%85%E5%9C%B0%E5%81%B7%E8%BF%9051%E5%85%AC%E6%96%A4%E7%9B%92%E9%A5%AD%E5%9B%9E%E6%BE%B3%E9%97%A8%23) `344.3K 🔥` `NEW`
1. [乘风2026三公淘汰四位姐姐](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E4%B8%89%E5%85%AC%E6%B7%98%E6%B1%B0%E5%9B%9B%E4%BD%8D%E5%A7%90%E5%A7%90%23) `335.6K 🔥` `NEW`
1. [杨幂冯太后盘发造型路透 (Yang Mi and Queen Mother Feng’s hairstyle Reuters)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%86%AF%E5%A4%AA%E5%90%8E%E7%9B%98%E5%8F%91%E9%80%A0%E5%9E%8B%E8%B7%AF%E9%80%8F%23) `238.8K 🔥` `NEW`
1. [曝某剧组威胁演员](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9F%90%E5%89%A7%E7%BB%84%E5%A8%81%E8%83%81%E6%BC%94%E5%91%98%23) `229.2K 🔥` `NEW`
1. [世界上两个最离不开手的东西合体了](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%B8%8A%E4%B8%A4%E4%B8%AA%E6%9C%80%E7%A6%BB%E4%B8%8D%E5%BC%80%E6%89%8B%E7%9A%84%E4%B8%9C%E8%A5%BF%E5%90%88%E4%BD%93%E4%BA%86%23) `177.9K 🔥` `NEW`
1. [陶昕然女儿说想哭的时候可以哭](https://s.weibo.com/weibo?q=%23%E9%99%B6%E6%98%95%E7%84%B6%E5%A5%B3%E5%84%BF%E8%AF%B4%E6%83%B3%E5%93%AD%E7%9A%84%E6%97%B6%E5%80%99%E5%8F%AF%E4%BB%A5%E5%93%AD%23) `177.6K 🔥` `NEW`
1. [于适簪花](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E9%80%82%E7%B0%AA%E8%8A%B1%23) `177.3K 🔥` `NEW`
1. [BLG战胜wbg](https://s.weibo.com/weibo?q=%23BLG%E6%88%98%E8%83%9Cwbg%23) `176.3K 🔥` `NEW`
1. [健身房小狗被踢飞后都有肌肉记忆了](https://s.weibo.com/weibo?q=%23%E5%81%A5%E8%BA%AB%E6%88%BF%E5%B0%8F%E7%8B%97%E8%A2%AB%E8%B8%A2%E9%A3%9E%E5%90%8E%E9%83%BD%E6%9C%89%E8%82%8C%E8%82%89%E8%AE%B0%E5%BF%86%E4%BA%86%23) `175.7K 🔥` `NEW`
1. [LEMAIRE陷辱华争议发长文解释](https://s.weibo.com/weibo?q=%23LEMAIRE%E9%99%B7%E8%BE%B1%E5%8D%8E%E4%BA%89%E8%AE%AE%E5%8F%91%E9%95%BF%E6%96%87%E8%A7%A3%E9%87%8A%23) `173.0K 🔥` `NEW`
1. [前妻自曝出轨男子发现儿子非亲生](https://s.weibo.com/weibo?q=%23%E5%89%8D%E5%A6%BB%E8%87%AA%E6%9B%9D%E5%87%BA%E8%BD%A8%E7%94%B7%E5%AD%90%E5%8F%91%E7%8E%B0%E5%84%BF%E5%AD%90%E9%9D%9E%E4%BA%B2%E7%94%9F%23) `164.1K 🔥` `NEW`
1. [解放军编队强势亮剑划出红线](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E7%BC%96%E9%98%9F%E5%BC%BA%E5%8A%BF%E4%BA%AE%E5%89%91%E5%88%92%E5%87%BA%E7%BA%A2%E7%BA%BF%23) `162.0K 🔥` `NEW`
1. [高瀚宇害怕老板鹿晗 (Gao Hanyu is afraid of his boss Lu Han)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E7%80%9A%E5%AE%87%E5%AE%B3%E6%80%95%E8%80%81%E6%9D%BF%E9%B9%BF%E6%99%97%23) `144.5K 🔥` `NEW`
1. [身份证照片最接近别人肉眼看到的自己](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BB%BD%E8%AF%81%E7%85%A7%E7%89%87%E6%9C%80%E6%8E%A5%E8%BF%91%E5%88%AB%E4%BA%BA%E8%82%89%E7%9C%BC%E7%9C%8B%E5%88%B0%E7%9A%84%E8%87%AA%E5%B7%B1%23) `765.3K 🔥` `+76%`
1. [浪姐直播疑似没人理何宣林](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%E7%96%91%E4%BC%BC%E6%B2%A1%E4%BA%BA%E7%90%86%E4%BD%95%E5%AE%A3%E6%9E%97%23) `739.0K 🔥` `+137%`
1. [张凯丽女儿出道9年第一次拍吻戏](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%AF%E4%B8%BD%E5%A5%B3%E5%84%BF%E5%87%BA%E9%81%939%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E6%8B%8D%E5%90%BB%E6%88%8F%23) `395.8K 🔥` `+21%`
1. [孙怡 爱与不爱很明显 (Sun Yi It’s obvious whether you love or not love)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%20%E7%88%B1%E4%B8%8E%E4%B8%8D%E7%88%B1%E5%BE%88%E6%98%8E%E6%98%BE%23) `174.1K 🔥` `+48%`
1. [RW对战AG](https://s.weibo.com/weibo?q=%23RW%E5%AF%B9%E6%88%98AG%23) `161.0K 🔥` `+52%`
1. [影视文旅成消费新风口](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E6%96%87%E6%97%85%E6%88%90%E6%B6%88%E8%B4%B9%E6%96%B0%E9%A3%8E%E5%8F%A3%23) `793.0K 🔥`
1. [东方小国礼 新国雅行政新典范 (Oriental Small Country Etiquette, New Country Elegance New Model of Administration)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E5%B0%8F%E5%9B%BD%E7%A4%BC%20%E6%96%B0%E5%9B%BD%E9%9B%85%E8%A1%8C%E6%94%BF%E6%96%B0%E5%85%B8%E8%8C%83%23) `787.4K 🔥`
1. [迪丽热巴跑男只录了12天](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%B7%91%E7%94%B7%E5%8F%AA%E5%BD%95%E4%BA%8612%E5%A4%A9%23) `687.2K 🔥`
1. [三鲜豆皮](https://s.weibo.com/weibo?q=%23%E4%B8%89%E9%B2%9C%E8%B1%86%E7%9A%AE%23) `408.9K 🔥`
1. [唐艺昕 何宣林](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%20%E4%BD%95%E5%AE%A3%E6%9E%97%23) `403.7K 🔥`
1. [井柏然 老人味太重](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%20%E8%80%81%E4%BA%BA%E5%91%B3%E5%A4%AA%E9%87%8D%23) `403.1K 🔥`
1. [王濛手臂图案 (Wang Meng's arm pattern)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E6%89%8B%E8%87%82%E5%9B%BE%E6%A1%88%23) `398.7K 🔥`
1. [一笙后援会集体辞职](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%AC%99%E5%90%8E%E6%8F%B4%E4%BC%9A%E9%9B%86%E4%BD%93%E8%BE%9E%E8%81%8C%23) `371.1K 🔥`
1. [狗狗脚脱臼了医患双方都很紧张 (The dog's foot was dislocated and both the doctor and the patient were nervous.)](https://s.weibo.com/weibo?q=%23%E7%8B%97%E7%8B%97%E8%84%9A%E8%84%B1%E8%87%BC%E4%BA%86%E5%8C%BB%E6%82%A3%E5%8F%8C%E6%96%B9%E9%83%BD%E5%BE%88%E7%B4%A7%E5%BC%A0%23) `364.6K 🔥`
1. [王鹤棣演技](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%BC%94%E6%8A%80%23) `176.9K 🔥`
1. [阚清子老公投到第二就不投了](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E8%80%81%E5%85%AC%E6%8A%95%E5%88%B0%E7%AC%AC%E4%BA%8C%E5%B0%B1%E4%B8%8D%E6%8A%95%E4%BA%86%23) `176.0K 🔥`
1. [蜜语纪30.5%](https://s.weibo.com/weibo?q=%23%E8%9C%9C%E8%AF%AD%E7%BA%AA30.5%25%23) `156.7K 🔥`
1. [别在乱充电提早损害电池健康了](https://s.weibo.com/weibo?q=%23%E5%88%AB%E5%9C%A8%E4%B9%B1%E5%85%85%E7%94%B5%E6%8F%90%E6%97%A9%E6%8D%9F%E5%AE%B3%E7%94%B5%E6%B1%A0%E5%81%A5%E5%BA%B7%E4%BA%86%23) `150.4K 🔥`
1. [人类马拉松破二 (Human marathon breaks second)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%B1%BB%E9%A9%AC%E6%8B%89%E6%9D%BE%E7%A0%B4%E4%BA%8C%23) `971.0K 🔥` `-34%`
1. [29.98万起大众9X真香](https://s.weibo.com/weibo?q=%2329.98%E4%B8%87%E8%B5%B7%E5%A4%A7%E4%BC%979X%E7%9C%9F%E9%A6%99%23) `584.4K 🔥` `-24%`
1. [赵心童战胜丁俊晖进八强 (Zhao Xintong defeats Ding Junhui and enters quarterfinals)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%BF%83%E7%AB%A5%E6%88%98%E8%83%9C%E4%B8%81%E4%BF%8A%E6%99%96%E8%BF%9B%E5%85%AB%E5%BC%BA%23) `432.6K 🔥` `-51%`
1. [集体离职撕开东方甄选内部乱象 (Collective resignations opened up internal chaos at Oriental Selection)](https://s.weibo.com/weibo?q=%23%E9%9B%86%E4%BD%93%E7%A6%BB%E8%81%8C%E6%92%95%E5%BC%80%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E5%86%85%E9%83%A8%E4%B9%B1%E8%B1%A1%23) `408.9K 🔥` `-30%`
1. [马斯克把方向盘删了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E6%8A%8A%E6%96%B9%E5%90%91%E7%9B%98%E5%88%A0%E4%BA%86%23) `407.4K 🔥` `-44%`
1. [张小斐 没有讨好感的眼神和动作](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%20%E6%B2%A1%E6%9C%89%E8%AE%A8%E5%A5%BD%E6%84%9F%E7%9A%84%E7%9C%BC%E7%A5%9E%E5%92%8C%E5%8A%A8%E4%BD%9C%23) `287.6K 🔥` `-41%`
1. [男大学生压力大喝农药10天才就医](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%8E%8B%E5%8A%9B%E5%A4%A7%E5%96%9D%E5%86%9C%E8%8D%AF10%E5%A4%A9%E6%89%8D%E5%B0%B1%E5%8C%BB%23) `246.9K 🔥` `-27%`
1. [巴基斯坦总统访华现场画面 (Live footage of the President of Pakistan’s visit to China)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E6%80%BB%E7%BB%9F%E8%AE%BF%E5%8D%8E%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `178.0K 🔥` `-45%`
1. [女子不知怀孕医院上厕所时生二胎 (Woman didn't know she was pregnant, gave birth to second child while using hospital toilet)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%8D%E7%9F%A5%E6%80%80%E5%AD%95%E5%8C%BB%E9%99%A2%E4%B8%8A%E5%8E%95%E6%89%80%E6%97%B6%E7%94%9F%E4%BA%8C%E8%83%8E%23) `176.7K 🔥` `-32%`
1. [鸿星尔克董事长比员工更想下班](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E6%98%9F%E5%B0%94%E5%85%8B%E8%91%A3%E4%BA%8B%E9%95%BF%E6%AF%94%E5%91%98%E5%B7%A5%E6%9B%B4%E6%83%B3%E4%B8%8B%E7%8F%AD%23) `176.4K 🔥` `-45%`
1. [18万月子会所月子餐是冰饮和炸物](https://s.weibo.com/weibo?q=%2318%E4%B8%87%E6%9C%88%E5%AD%90%E4%BC%9A%E6%89%80%E6%9C%88%E5%AD%90%E9%A4%90%E6%98%AF%E5%86%B0%E9%A5%AE%E5%92%8C%E7%82%B8%E7%89%A9%23) `151.3K 🔥` `-37%`
1. [仙逆](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%23) `148.4K 🔥` `-34%`
1. [特朗普夫人反应迅速](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%A4%AB%E4%BA%BA%E5%8F%8D%E5%BA%94%E8%BF%85%E9%80%9F%23) `144.5K 🔥` `-29%`

Updated at 2026-04-26 21:54:16

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
