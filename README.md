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

1. [和平精英七周年嘉年华 (Peace Elite 7th Anniversary Carnival)](https://s.weibo.com/weibo?q=%23%E5%92%8C%E5%B9%B3%E7%B2%BE%E8%8B%B1%E4%B8%83%E5%91%A8%E5%B9%B4%E5%98%89%E5%B9%B4%E5%8D%8E%23) `805.6K 🔥` `NEW`
1. [AG春季赛总冠军](https://s.weibo.com/weibo?q=%23AG%E6%98%A5%E5%AD%A3%E8%B5%9B%E6%80%BB%E5%86%A0%E5%86%9B%23) `805.2K 🔥` `NEW`
1. [张颂文没看过狂飙](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A2%82%E6%96%87%E6%B2%A1%E7%9C%8B%E8%BF%87%E7%8B%82%E9%A3%99%23) `374.1K 🔥` `NEW`
1. [阿迪达斯助人类马拉松首次破二](https://s.weibo.com/weibo?q=%23%E9%98%BF%E8%BF%AA%E8%BE%BE%E6%96%AF%E5%8A%A9%E4%BA%BA%E7%B1%BB%E9%A9%AC%E6%8B%89%E6%9D%BE%E9%A6%96%E6%AC%A1%E7%A0%B4%E4%BA%8C%23) `346.1K 🔥` `NEW`
1. [花少总导演回复苏新皓粉丝](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%91%E6%80%BB%E5%AF%BC%E6%BC%94%E5%9B%9E%E5%A4%8D%E8%8B%8F%E6%96%B0%E7%9A%93%E7%B2%89%E4%B8%9D%23) `334.7K 🔥` `NEW`
1. [aespa回归预告](https://s.weibo.com/weibo?q=%23aespa%E5%9B%9E%E5%BD%92%E9%A2%84%E5%91%8A%23) `322.9K 🔥` `NEW`
1. [韦雪回应脖子显老](https://s.weibo.com/weibo?q=%23%E9%9F%A6%E9%9B%AA%E5%9B%9E%E5%BA%94%E8%84%96%E5%AD%90%E6%98%BE%E8%80%81%23) `296.9K 🔥` `NEW`
1. [边伯贤宠没边了](https://s.weibo.com/weibo?q=%23%E8%BE%B9%E4%BC%AF%E8%B4%A4%E5%AE%A0%E6%B2%A1%E8%BE%B9%E4%BA%86%23) `274.5K 🔥` `NEW`
1. [枪案现场特朗普旁华裔女记者是谁](https://s.weibo.com/weibo?q=%23%E6%9E%AA%E6%A1%88%E7%8E%B0%E5%9C%BA%E7%89%B9%E6%9C%97%E6%99%AE%E6%97%81%E5%8D%8E%E8%A3%94%E5%A5%B3%E8%AE%B0%E8%80%85%E6%98%AF%E8%B0%81%23) `231.4K 🔥` `NEW`
1. [网店卖8年假耐克赚了126万](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%BA%97%E5%8D%968%E5%B9%B4%E5%81%87%E8%80%90%E5%85%8B%E8%B5%9A%E4%BA%86126%E4%B8%87%23) `228.1K 🔥` `NEW`
1. [父亲病重去世主播停播失联遭公司索赔 (His father died of a serious illness, the anchor stopped broadcasting and lost contact, and the company claimed compensation)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E7%97%85%E9%87%8D%E5%8E%BB%E4%B8%96%E4%B8%BB%E6%92%AD%E5%81%9C%E6%92%AD%E5%A4%B1%E8%81%94%E9%81%AD%E5%85%AC%E5%8F%B8%E7%B4%A2%E8%B5%94%23) `208.1K 🔥` `NEW`
1. [于适再现骑马名场面](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E9%80%82%E5%86%8D%E7%8E%B0%E9%AA%91%E9%A9%AC%E5%90%8D%E5%9C%BA%E9%9D%A2%23) `207.6K 🔥` `NEW`
1. [一笙 我并没有大家想的那么好](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%AC%99%20%E6%88%91%E5%B9%B6%E6%B2%A1%E6%9C%89%E5%A4%A7%E5%AE%B6%E6%83%B3%E7%9A%84%E9%82%A3%E4%B9%88%E5%A5%BD%23) `205.7K 🔥` `NEW`
1. [其实张若昀唱歌也很心酸](https://s.weibo.com/weibo?q=%23%E5%85%B6%E5%AE%9E%E5%BC%A0%E8%8B%A5%E6%98%80%E5%94%B1%E6%AD%8C%E4%B9%9F%E5%BE%88%E5%BF%83%E9%85%B8%23) `169.3K 🔥` `NEW`
1. [天权祝福东方甄选](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%9D%83%E7%A5%9D%E7%A6%8F%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%23) `163.4K 🔥` `NEW`
1. [曝一笙小号收藏德州相关帖子](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%B8%80%E7%AC%99%E5%B0%8F%E5%8F%B7%E6%94%B6%E8%97%8F%E5%BE%B7%E5%B7%9E%E7%9B%B8%E5%85%B3%E5%B8%96%E5%AD%90%23) `161.2K 🔥` `NEW`
1. [RW对战AG](https://s.weibo.com/weibo?q=%23RW%E5%AF%B9%E6%88%98AG%23) `635.4K 🔥` `+151%`
1. [山姆29.9元羽衣甘蓝盆栽被抢空](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%8629.9%E5%85%83%E7%BE%BD%E8%A1%A3%E7%94%98%E8%93%9D%E7%9B%86%E6%A0%BD%E8%A2%AB%E6%8A%A2%E7%A9%BA%23) `633.0K 🔥` `+132%`
1. [为什么先救万斯](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%85%88%E6%95%91%E4%B8%87%E6%96%AF%23) `606.3K 🔥` `+52%`
1. [唐艺昕 何宣林](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%20%E4%BD%95%E5%AE%A3%E6%9E%97%23) `594.8K 🔥` `+48%`
1. [佳偶天成 (A match made in heaven)](https://s.weibo.com/weibo?q=%23%E4%BD%B3%E5%81%B6%E5%A4%A9%E6%88%90%23) `577.4K 🔥` `+95%`
1. [女生腹痛以为肠胃不适查出满肚肿瘤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E8%85%B9%E7%97%9B%E4%BB%A5%E4%B8%BA%E8%82%A0%E8%83%83%E4%B8%8D%E9%80%82%E6%9F%A5%E5%87%BA%E6%BB%A1%E8%82%9A%E8%82%BF%E7%98%A4%23) `549.0K 🔥` `+55%`
1. [胖东来18元瓶装矿泉水遭哄抢](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A518%E5%85%83%E7%93%B6%E8%A3%85%E7%9F%BF%E6%B3%89%E6%B0%B4%E9%81%AD%E5%93%84%E6%8A%A2%23) `547.6K 🔥` `+37%`
1. [井柏然 老人味太重](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%20%E8%80%81%E4%BA%BA%E5%91%B3%E5%A4%AA%E9%87%8D%23) `530.6K 🔥` `+32%`
1. [连续两周上四休三 (Two weeks in a row, four days off and three days off)](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E7%BB%AD%E4%B8%A4%E5%91%A8%E4%B8%8A%E5%9B%9B%E4%BC%91%E4%B8%89%23) `327.3K 🔥` `+38%`
1. [歌手2026 (singer 2026)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%23) `1.5M 🔥`
1. [男子从内地偷运51公斤盒饭回澳门](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%BB%8E%E5%86%85%E5%9C%B0%E5%81%B7%E8%BF%9051%E5%85%AC%E6%96%A4%E7%9B%92%E9%A5%AD%E5%9B%9E%E6%BE%B3%E9%97%A8%23) `893.3K 🔥`
1. [影视文旅成消费新风口](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E6%96%87%E6%97%85%E6%88%90%E6%B6%88%E8%B4%B9%E6%96%B0%E9%A3%8E%E5%8F%A3%23) `887.5K 🔥`
1. [张月 挂电 (Zhang Yue hung up the phone)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%20%E6%8C%82%E7%94%B5%23) `871.0K 🔥`
1. [身份证照片最接近别人肉眼看到的自己](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BB%BD%E8%AF%81%E7%85%A7%E7%89%87%E6%9C%80%E6%8E%A5%E8%BF%91%E5%88%AB%E4%BA%BA%E8%82%89%E7%9C%BC%E7%9C%8B%E5%88%B0%E7%9A%84%E8%87%AA%E5%B7%B1%23) `836.9K 🔥`
1. [迪丽热巴跑男只录了12天](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%B7%91%E7%94%B7%E5%8F%AA%E5%BD%95%E4%BA%8612%E5%A4%A9%23) `806.3K 🔥`
1. [世界上两个最离不开手的东西合体了](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%B8%8A%E4%B8%A4%E4%B8%AA%E6%9C%80%E7%A6%BB%E4%B8%8D%E5%BC%80%E6%89%8B%E7%9A%84%E4%B8%9C%E8%A5%BF%E5%90%88%E4%BD%93%E4%BA%86%23) `661.8K 🔥`
1. [人类马拉松破二 (Human marathon breaks second)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%B1%BB%E9%A9%AC%E6%8B%89%E6%9D%BE%E7%A0%B4%E4%BA%8C%23) `554.5K 🔥`
1. [浪姐直播疑似没人理何宣林](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%E7%96%91%E4%BC%BC%E6%B2%A1%E4%BA%BA%E7%90%86%E4%BD%95%E5%AE%A3%E6%9E%97%23) `423.5K 🔥`
1. [俞敏洪坦言公司管理方式出现偏差 (Yu Minhong admitted that there were deviations in the company’s management methods)](https://s.weibo.com/weibo?q=%23%E4%BF%9E%E6%95%8F%E6%B4%AA%E5%9D%A6%E8%A8%80%E5%85%AC%E5%8F%B8%E7%AE%A1%E7%90%86%E6%96%B9%E5%BC%8F%E5%87%BA%E7%8E%B0%E5%81%8F%E5%B7%AE%23) `374.4K 🔥`
1. [杨幂冯太后盘发造型路透 (Yang Mi and Queen Mother Feng’s hairstyle Reuters)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%86%AF%E5%A4%AA%E5%90%8E%E7%9B%98%E5%8F%91%E9%80%A0%E5%9E%8B%E8%B7%AF%E9%80%8F%23) `360.5K 🔥`
1. [一笙回应](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%AC%99%E5%9B%9E%E5%BA%94%23) `352.4K 🔥`
1. [张月 没保护好者来女是我的遗憾](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%20%E6%B2%A1%E4%BF%9D%E6%8A%A4%E5%A5%BD%E8%80%85%E6%9D%A5%E5%A5%B3%E6%98%AF%E6%88%91%E7%9A%84%E9%81%97%E6%86%BE%23) `340.1K 🔥`
1. [别在乱充电提早损害电池健康了](https://s.weibo.com/weibo?q=%23%E5%88%AB%E5%9C%A8%E4%B9%B1%E5%85%85%E7%94%B5%E6%8F%90%E6%97%A9%E6%8D%9F%E5%AE%B3%E7%94%B5%E6%B1%A0%E5%81%A5%E5%BA%B7%E4%BA%86%23) `169.1K 🔥`
1. [俞敏洪曾力挺的新CEO是谁](https://s.weibo.com/weibo?q=%23%E4%BF%9E%E6%95%8F%E6%B4%AA%E6%9B%BE%E5%8A%9B%E6%8C%BA%E7%9A%84%E6%96%B0CEO%E6%98%AF%E8%B0%81%23) `167.1K 🔥`
1. [特斯拉为什么不参加车展](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E5%8F%82%E5%8A%A0%E8%BD%A6%E5%B1%95%23) `165.9K 🔥`
1. [A股一季度最赚钱公司曝光](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%B8%80%E5%AD%A3%E5%BA%A6%E6%9C%80%E8%B5%9A%E9%92%B1%E5%85%AC%E5%8F%B8%E6%9B%9D%E5%85%89%23) `309.0K 🔥` `-27%`
1. [赵心童战胜丁俊晖进八强 (Zhao Xintong defeats Ding Junhui and enters quarterfinals)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%BF%83%E7%AB%A5%E6%88%98%E8%83%9C%E4%B8%81%E4%BF%8A%E6%99%96%E8%BF%9B%E5%85%AB%E5%BC%BA%23) `280.1K 🔥` `-30%`
1. [橹穆双人舞台百天播放量 (Lu Mu double stage 100-day views)](https://s.weibo.com/weibo?q=%23%E6%A9%B9%E7%A9%86%E5%8F%8C%E4%BA%BA%E8%88%9E%E5%8F%B0%E7%99%BE%E5%A4%A9%E6%92%AD%E6%94%BE%E9%87%8F%23) `271.6K 🔥` `-32%`
1. [集体离职撕开东方甄选内部乱象 (Collective resignations opened up internal chaos at Oriental Selection)](https://s.weibo.com/weibo?q=%23%E9%9B%86%E4%BD%93%E7%A6%BB%E8%81%8C%E6%92%95%E5%BC%80%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E5%86%85%E9%83%A8%E4%B9%B1%E8%B1%A1%23) `251.3K 🔥` `-37%`
1. [男童泡温泉遇蛇吓出应激创伤](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%AB%A5%E6%B3%A1%E6%B8%A9%E6%B3%89%E9%81%87%E8%9B%87%E5%90%93%E5%87%BA%E5%BA%94%E6%BF%80%E5%88%9B%E4%BC%A4%23) `233.8K 🔥` `-42%`
1. [乘风2026三公淘汰四位姐姐](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E4%B8%89%E5%85%AC%E6%B7%98%E6%B1%B0%E5%9B%9B%E4%BD%8D%E5%A7%90%E5%A7%90%23) `226.4K 🔥` `-44%`
1. [张凯丽女儿出道9年第一次拍吻戏](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%AF%E4%B8%BD%E5%A5%B3%E5%84%BF%E5%87%BA%E9%81%939%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E6%8B%8D%E5%90%BB%E6%88%8F%23) `207.4K 🔥` `-38%`
1. [狗狗脚脱臼了医患双方都很紧张 (The dog's foot was dislocated and both the doctor and the patient were nervous.)](https://s.weibo.com/weibo?q=%23%E7%8B%97%E7%8B%97%E8%84%9A%E8%84%B1%E8%87%BC%E4%BA%86%E5%8C%BB%E6%82%A3%E5%8F%8C%E6%96%B9%E9%83%BD%E5%BE%88%E7%B4%A7%E5%BC%A0%23) `170.5K 🔥` `-26%`
1. [伊朗最高领袖突然发文 (Iran’s supreme leader suddenly issued a message)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E7%AA%81%E7%84%B6%E5%8F%91%E6%96%87%23) `169.8K 🔥` `-58%`
1. [鸿星尔克的陪伴从校园到职场](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E6%98%9F%E5%B0%94%E5%85%8B%E7%9A%84%E9%99%AA%E4%BC%B4%E4%BB%8E%E6%A0%A1%E5%9B%AD%E5%88%B0%E8%81%8C%E5%9C%BA%23) `161.9K 🔥` `-60%`

Updated at 2026-04-26 23:28:59

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
