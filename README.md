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

1. [春假来了踏春去 (Spring break is here, spring outing is here)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E5%81%87%E6%9D%A5%E4%BA%86%E8%B8%8F%E6%98%A5%E5%8E%BB%23) `528.8K 🔥` `NEW`
1. [张雪称5亿设计logo害死哪吒](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E7%A7%B05%E4%BA%BF%E8%AE%BE%E8%AE%A1logo%E5%AE%B3%E6%AD%BB%E5%93%AA%E5%90%92%23) `272.7K 🔥` `NEW`
1. [李兰迪回应何宣林wink](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%85%B0%E8%BF%AA%E5%9B%9E%E5%BA%94%E4%BD%95%E5%AE%A3%E6%9E%97wink%23) `245.6K 🔥` `NEW`
1. [林昀儒4比1张本智和](https://s.weibo.com/weibo?q=%23%E6%9E%97%E6%98%80%E5%84%924%E6%AF%941%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `146.8K 🔥` `NEW`
1. [浪姐改赛制给齐思钧苦得都掐眉头了](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%94%B9%E8%B5%9B%E5%88%B6%E7%BB%99%E9%BD%90%E6%80%9D%E9%92%A7%E8%8B%A6%E5%BE%97%E9%83%BD%E6%8E%90%E7%9C%89%E5%A4%B4%E4%BA%86%23) `127.8K 🔥` `NEW`
1. [谢霆锋戴与王菲26年前定情手镯](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E6%88%B4%E4%B8%8E%E7%8E%8B%E8%8F%B226%E5%B9%B4%E5%89%8D%E5%AE%9A%E6%83%85%E6%89%8B%E9%95%AF%23) `124.0K 🔥` `NEW`
1. [孙颖莎高达首局爆分](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E9%AB%98%E8%BE%BE%E9%A6%96%E5%B1%80%E7%88%86%E5%88%86%23) `112.7K 🔥` `NEW`
1. [女生回应午睡5小时被领导警告](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E5%9B%9E%E5%BA%94%E5%8D%88%E7%9D%A15%E5%B0%8F%E6%97%B6%E8%A2%AB%E9%A2%86%E5%AF%BC%E8%AD%A6%E5%91%8A%23) `110.9K 🔥` `NEW`
1. [刘亦菲G社最严厉的母亲](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2G%E7%A4%BE%E6%9C%80%E4%B8%A5%E5%8E%89%E7%9A%84%E6%AF%8D%E4%BA%B2%23) `102.4K 🔥` `NEW`
1. [孙颖莎13比11高达](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E13%E6%AF%9411%E9%AB%98%E8%BE%BE%23) `97.2K 🔥` `NEW`
1. [歌不是谁唱火的谁有版权 (The song is not about who sings it, but who owns the copyright?)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E4%B8%8D%E6%98%AF%E8%B0%81%E5%94%B1%E7%81%AB%E7%9A%84%E8%B0%81%E6%9C%89%E7%89%88%E6%9D%83%23) `89.3K 🔥` `NEW`
1. [孙颖莎14比16高达](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E14%E6%AF%9416%E9%AB%98%E8%BE%BE%23) `89.3K 🔥` `NEW`
1. [孙颖莎把高达打无奈了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%8A%8A%E9%AB%98%E8%BE%BE%E6%89%93%E6%97%A0%E5%A5%88%E4%BA%86%23) `89.2K 🔥` `NEW`
1. [汪蜂出现了](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%9C%82%E5%87%BA%E7%8E%B0%E4%BA%86%23) `88.5K 🔥` `NEW`
1. [王橹杰 锁骨连肩](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%20%E9%94%81%E9%AA%A8%E8%BF%9E%E8%82%A9%23) `87.5K 🔥` `NEW`
1. [谢依霖自曝酒后和老公狂恋](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E4%BE%9D%E9%9C%96%E8%87%AA%E6%9B%9D%E9%85%92%E5%90%8E%E5%92%8C%E8%80%81%E5%85%AC%E7%8B%82%E6%81%8B%23) `83.6K 🔥` `NEW`
1. [双高胎抢票](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E9%AB%98%E8%83%8E%E6%8A%A2%E7%A5%A8%23) `76.7K 🔥` `NEW`
1. [美军战机残骸有F15专用电子战设备](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E6%88%98%E6%9C%BA%E6%AE%8B%E9%AA%B8%E6%9C%89F15%E4%B8%93%E7%94%A8%E7%94%B5%E5%AD%90%E6%88%98%E8%AE%BE%E5%A4%87%23) `71.6K 🔥` `NEW`
1. [AG状态下滑原因](https://s.weibo.com/weibo?q=%23AG%E7%8A%B6%E6%80%81%E4%B8%8B%E6%BB%91%E5%8E%9F%E5%9B%A0%23) `71.0K 🔥` `NEW`
1. [杨瀚森20分7板2助2帽](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%80%9A%E6%A3%AE20%E5%88%867%E6%9D%BF2%E5%8A%A92%E5%B8%BD%23) `70.3K 🔥` `NEW`
1. [第一次走红毯的angelababy (angelababy walks the red carpet for the first time)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%B5%B0%E7%BA%A2%E6%AF%AF%E7%9A%84angelababy%23) `66.6K 🔥` `NEW`
1. [俩游客花86元就餐店家嫌消费太少](https://s.weibo.com/weibo?q=%23%E4%BF%A9%E6%B8%B8%E5%AE%A2%E8%8A%B186%E5%85%83%E5%B0%B1%E9%A4%90%E5%BA%97%E5%AE%B6%E5%AB%8C%E6%B6%88%E8%B4%B9%E5%A4%AA%E5%B0%91%23) `65.6K 🔥` `NEW`
1. [我妈以为的早熟vs实际上](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%A6%88%E4%BB%A5%E4%B8%BA%E7%9A%84%E6%97%A9%E7%86%9Fvs%E5%AE%9E%E9%99%85%E4%B8%8A%23) `64.2K 🔥` `NEW`
1. [1层3户只有1家被贴满小广告](https://s.weibo.com/weibo?q=%231%E5%B1%823%E6%88%B7%E5%8F%AA%E6%9C%891%E5%AE%B6%E8%A2%AB%E8%B4%B4%E6%BB%A1%E5%B0%8F%E5%B9%BF%E5%91%8A%23) `758.6K 🔥` `+529%`
1. [孙颖莎vs高达 (Sun Yingsha vs Gundam)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Evs%E9%AB%98%E8%BE%BE%23) `292.2K 🔥` `+118%`
1. [清明上山扫墓却发现母亲的墓不见了 (I went up the mountain to sweep graves during the Qingming Festival, only to find that my mother’s tomb was missing.)](https://s.weibo.com/weibo?q=%23%E6%B8%85%E6%98%8E%E4%B8%8A%E5%B1%B1%E6%89%AB%E5%A2%93%E5%8D%B4%E5%8F%91%E7%8E%B0%E6%AF%8D%E4%BA%B2%E7%9A%84%E5%A2%93%E4%B8%8D%E8%A7%81%E4%BA%86%23) `1.1M 🔥`
1. [属于中国人的清明仪式感](https://s.weibo.com/weibo?q=%23%E5%B1%9E%E4%BA%8E%E4%B8%AD%E5%9B%BD%E4%BA%BA%E7%9A%84%E6%B8%85%E6%98%8E%E4%BB%AA%E5%BC%8F%E6%84%9F%23) `599.5K 🔥`
1. [原来真有人住的房子这么大](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%9C%9F%E6%9C%89%E4%BA%BA%E4%BD%8F%E7%9A%84%E6%88%BF%E5%AD%90%E8%BF%99%E4%B9%88%E5%A4%A7%23) `223.3K 🔥`
1. [TXT新专 万妮达](https://s.weibo.com/weibo?q=%23TXT%E6%96%B0%E4%B8%93%20%E4%B8%87%E5%A6%AE%E8%BE%BE%23) `167.0K 🔥`
1. [美军经历开战以来最黑暗24小时](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E7%BB%8F%E5%8E%86%E5%BC%80%E6%88%98%E4%BB%A5%E6%9D%A5%E6%9C%80%E9%BB%91%E6%9A%9724%E5%B0%8F%E6%97%B6%23) `146.7K 🔥`
1. [王传君给陈赫送的花篮上叫他贤哥](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E7%BB%99%E9%99%88%E8%B5%AB%E9%80%81%E7%9A%84%E8%8A%B1%E7%AF%AE%E4%B8%8A%E5%8F%AB%E4%BB%96%E8%B4%A4%E5%93%A5%23) `146.7K 🔥`
1. [唐艺昕因皮肤原因4年未拍戏 (Tang Yixin stopped filming for 4 years due to skin reasons)](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E5%9B%A0%E7%9A%AE%E8%82%A4%E5%8E%9F%E5%9B%A04%E5%B9%B4%E6%9C%AA%E6%8B%8D%E6%88%8F%23) `146.7K 🔥`
1. [因为自制力差一下午赚了七千](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E4%B8%BA%E8%87%AA%E5%88%B6%E5%8A%9B%E5%B7%AE%E4%B8%80%E4%B8%8B%E5%8D%88%E8%B5%9A%E4%BA%86%E4%B8%83%E5%8D%83%23) `146.6K 🔥`
1. [月鳞绮纪疑似不足1广 (Moonscale Qiji is suspected to be less than 1 wide)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E7%96%91%E4%BC%BC%E4%B8%8D%E8%B6%B31%E5%B9%BF%23) `146.6K 🔥`
1. [何宣林是孟子义的大学班主任 (He Xuanlin is Meng Ziyi’s university class teacher)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%E6%98%AF%E5%AD%9F%E5%AD%90%E4%B9%89%E7%9A%84%E5%A4%A7%E5%AD%A6%E7%8F%AD%E4%B8%BB%E4%BB%BB%23) `146.5K 🔥`
1. [四月不能叫四月](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E6%9C%88%E4%B8%8D%E8%83%BD%E5%8F%AB%E5%9B%9B%E6%9C%88%23) `146.5K 🔥`
1. [南京被害女大学生父亲现状](https://s.weibo.com/weibo?q=%23%E5%8D%97%E4%BA%AC%E8%A2%AB%E5%AE%B3%E5%A5%B3%E5%A4%A7%E5%AD%A6%E7%94%9F%E7%88%B6%E4%BA%B2%E7%8E%B0%E7%8A%B6%23) `145.6K 🔥`
1. [午睡时间超1小时死亡风险增加30%](https://s.weibo.com/weibo?q=%23%E5%8D%88%E7%9D%A1%E6%97%B6%E9%97%B4%E8%B6%851%E5%B0%8F%E6%97%B6%E6%AD%BB%E4%BA%A1%E9%A3%8E%E9%99%A9%E5%A2%9E%E5%8A%A030%25%23) `118.3K 🔥`
1. [张若昀发唐艺昕直拍 (Zhang Ruoyun sends Tang Yixin to shoot directly)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%8B%A5%E6%98%80%E5%8F%91%E5%94%90%E8%89%BA%E6%98%95%E7%9B%B4%E6%8B%8D%23) `114.9K 🔥`
1. [阚清子说很感谢倪萍 (Kan Qingzi said he was very grateful to Ni Ping)](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E8%AF%B4%E5%BE%88%E6%84%9F%E8%B0%A2%E5%80%AA%E8%90%8D%23) `92.7K 🔥`
1. [女生午睡5小时被领导警告发视频哭诉 (A girl was warned by her boss after taking a 5-hour nap and posted a video crying.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E5%8D%88%E7%9D%A15%E5%B0%8F%E6%97%B6%E8%A2%AB%E9%A2%86%E5%AF%BC%E8%AD%A6%E5%91%8A%E5%8F%91%E8%A7%86%E9%A2%91%E5%93%AD%E8%AF%89%23) `89.2K 🔥`
1. [94岁爷爷吃饭神似年迈的兔子](https://s.weibo.com/weibo?q=%2394%E5%B2%81%E7%88%B7%E7%88%B7%E5%90%83%E9%A5%AD%E7%A5%9E%E4%BC%BC%E5%B9%B4%E8%BF%88%E7%9A%84%E5%85%94%E5%AD%90%23) `88.8K 🔥`
1. [养猫的人没有私人空间 (Cat owners have no personal space)](https://s.weibo.com/weibo?q=%23%E5%85%BB%E7%8C%AB%E7%9A%84%E4%BA%BA%E6%B2%A1%E6%9C%89%E7%A7%81%E4%BA%BA%E7%A9%BA%E9%97%B4%23) `67.5K 🔥`
1. [凡人修仙传](https://s.weibo.com/weibo?q=%23%E5%87%A1%E4%BA%BA%E4%BF%AE%E4%BB%99%E4%BC%A0%23) `235.5K 🔥` `-34%`
1. [华裔女子西安刚下飞机就被历史暴击](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E8%A3%94%E5%A5%B3%E5%AD%90%E8%A5%BF%E5%AE%89%E5%88%9A%E4%B8%8B%E9%A3%9E%E6%9C%BA%E5%B0%B1%E8%A2%AB%E5%8E%86%E5%8F%B2%E6%9A%B4%E5%87%BB%23) `128.9K 🔥` `-83%`
1. [美军2架黑鹰直升机被伊朗击中](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B2%E6%9E%B6%E9%BB%91%E9%B9%B0%E7%9B%B4%E5%8D%87%E6%9C%BA%E8%A2%AB%E4%BC%8A%E6%9C%97%E5%87%BB%E4%B8%AD%23) `89.6K 🔥` `-68%`
1. [优思益](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%23) `78.5K 🔥` `-27%`
1. [孔令奇再办婚礼](https://s.weibo.com/weibo?q=%23%E5%AD%94%E4%BB%A4%E5%A5%87%E5%86%8D%E5%8A%9E%E5%A9%9A%E7%A4%BC%23) `78.4K 🔥` `-31%`
1. [阿娇首部短剧 (Gillian's first short play)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%A8%87%E9%A6%96%E9%83%A8%E7%9F%AD%E5%89%A7%23) `71.4K 🔥` `-55%`
1. [吴世勋solo单曲MV](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%B8%96%E5%8B%8Bsolo%E5%8D%95%E6%9B%B2MV%23) `66.6K 🔥` `-43%`
1. [入伍2年返校发现专业没了](https://s.weibo.com/weibo?q=%23%E5%85%A5%E4%BC%8D2%E5%B9%B4%E8%BF%94%E6%A0%A1%E5%8F%91%E7%8E%B0%E4%B8%93%E4%B8%9A%E6%B2%A1%E4%BA%86%23) `63.9K 🔥` `-57%`

Updated at 2026-04-04 14:08:36

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
