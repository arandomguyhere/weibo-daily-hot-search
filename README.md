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

1. [章小蕙让阚清子放下过去 (Zhang Xiaohui asked Kan Qingzi to let go of the past)](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%B0%8F%E8%95%99%E8%AE%A9%E9%98%9A%E6%B8%85%E5%AD%90%E6%94%BE%E4%B8%8B%E8%BF%87%E5%8E%BB%23) `315.4K 🔥` `NEW`
1. [男子拔掉祖坟旁槟榔苗被判刑](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8B%94%E6%8E%89%E7%A5%96%E5%9D%9F%E6%97%81%E6%A7%9F%E6%A6%94%E8%8B%97%E8%A2%AB%E5%88%A4%E5%88%91%23) `308.7K 🔥` `NEW`
1. [倪萍真的给人看力竭了](https://s.weibo.com/weibo?q=%23%E5%80%AA%E8%90%8D%E7%9C%9F%E7%9A%84%E7%BB%99%E4%BA%BA%E7%9C%8B%E5%8A%9B%E7%AB%AD%E4%BA%86%23) `282.9K 🔥` `NEW`
1. [好多人装修没有去家务化的意识](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A4%9A%E4%BA%BA%E8%A3%85%E4%BF%AE%E6%B2%A1%E6%9C%89%E5%8E%BB%E5%AE%B6%E5%8A%A1%E5%8C%96%E7%9A%84%E6%84%8F%E8%AF%86%23) `261.9K 🔥` `NEW`
1. [伊朗国产防空系统vs美战机](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%9B%BD%E4%BA%A7%E9%98%B2%E7%A9%BA%E7%B3%BB%E7%BB%9Fvs%E7%BE%8E%E6%88%98%E6%9C%BA%23) `106.0K 🔥` `NEW`
1. [三甲医院医生建议重病有三不治](https://s.weibo.com/weibo?q=%23%E4%B8%89%E7%94%B2%E5%8C%BB%E9%99%A2%E5%8C%BB%E7%94%9F%E5%BB%BA%E8%AE%AE%E9%87%8D%E7%97%85%E6%9C%89%E4%B8%89%E4%B8%8D%E6%B2%BB%23) `104.3K 🔥` `NEW`
1. [有结节的人要在春天做4件事](https://s.weibo.com/weibo?q=%23%E6%9C%89%E7%BB%93%E8%8A%82%E7%9A%84%E4%BA%BA%E8%A6%81%E5%9C%A8%E6%98%A5%E5%A4%A9%E5%81%9A4%E4%BB%B6%E4%BA%8B%23) `101.9K 🔥` `NEW`
1. [黄灿灿表情](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E8%A1%A8%E6%83%85%23) `99.5K 🔥` `NEW`
1. [美军黑鹰直升机疑似被伊朗击中](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E9%BB%91%E9%B9%B0%E7%9B%B4%E5%8D%87%E6%9C%BA%E7%96%91%E4%BC%BC%E8%A2%AB%E4%BC%8A%E6%9C%97%E5%87%BB%E4%B8%AD%23) `67.1K 🔥` `NEW`
1. [发现小猫长牙齿之后天天都要看](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E5%B0%8F%E7%8C%AB%E9%95%BF%E7%89%99%E9%BD%BF%E4%B9%8B%E5%90%8E%E5%A4%A9%E5%A4%A9%E9%83%BD%E8%A6%81%E7%9C%8B%23) `63.3K 🔥` `NEW`
1. [张雪机车烟台店把展厅卖空了 (Zhang Xue Motorcycle Yantai Store sold out the showroom)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E7%83%9F%E5%8F%B0%E5%BA%97%E6%8A%8A%E5%B1%95%E5%8E%85%E5%8D%96%E7%A9%BA%E4%BA%86%23) `55.0K 🔥` `NEW`
1. [喜人在张杰鸟巢演唱会团建](https://s.weibo.com/weibo?q=%23%E5%96%9C%E4%BA%BA%E5%9C%A8%E5%BC%A0%E6%9D%B0%E9%B8%9F%E5%B7%A2%E6%BC%94%E5%94%B1%E4%BC%9A%E5%9B%A2%E5%BB%BA%23) `54.5K 🔥` `NEW`
1. [伊朗被曝实施打了就跑战术](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%A2%AB%E6%9B%9D%E5%AE%9E%E6%96%BD%E6%89%93%E4%BA%86%E5%B0%B1%E8%B7%91%E6%88%98%E6%9C%AF%23) `51.9K 🔥` `NEW`
1. [AirPodsMax2拆解](https://s.weibo.com/weibo?q=%23AirPodsMax2%E6%8B%86%E8%A7%A3%23) `51.5K 🔥` `NEW`
1. [打通霍尔木兹海峡的唯一途径](https://s.weibo.com/weibo?q=%23%E6%89%93%E9%80%9A%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E7%9A%84%E5%94%AF%E4%B8%80%E9%80%94%E5%BE%84%23) `50.3K 🔥` `NEW`
1. [伊朗导弹高速俯冲击中以色列目标](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E9%AB%98%E9%80%9F%E4%BF%AF%E5%86%B2%E5%87%BB%E4%B8%AD%E4%BB%A5%E8%89%B2%E5%88%97%E7%9B%AE%E6%A0%87%23) `49.4K 🔥` `NEW`
1. [伊朗导弹击中以色列中部城市](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E5%87%BB%E4%B8%AD%E4%BB%A5%E8%89%B2%E5%88%97%E4%B8%AD%E9%83%A8%E5%9F%8E%E5%B8%82%23) `47.8K 🔥` `NEW`
1. [女生午睡5小时被领导警告发视频哭诉 (A girl was warned by her boss after taking a 5-hour nap and posted a video crying.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E5%8D%88%E7%9D%A15%E5%B0%8F%E6%97%B6%E8%A2%AB%E9%A2%86%E5%AF%BC%E8%AD%A6%E5%91%8A%E5%8F%91%E8%A7%86%E9%A2%91%E5%93%AD%E8%AF%89%23) `922.9K 🔥` `+53%`
1. [与辉同行宣布全额退款 (Hehui Peer announces full refund)](https://s.weibo.com/weibo?q=%23%E4%B8%8E%E8%BE%89%E5%90%8C%E8%A1%8C%E5%AE%A3%E5%B8%83%E5%85%A8%E9%A2%9D%E9%80%80%E6%AC%BE%23) `672.2K 🔥` `+50%`
1. [赏花踏青特色主题专列来了 (Special themed train for flower viewing and outing is here)](https://s.weibo.com/weibo?q=%23%E8%B5%8F%E8%8A%B1%E8%B8%8F%E9%9D%92%E7%89%B9%E8%89%B2%E4%B8%BB%E9%A2%98%E4%B8%93%E5%88%97%E6%9D%A5%E4%BA%86%23) `550.7K 🔥` `+57%`
1. [工信部紧急提醒苹果用户](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BF%A1%E9%83%A8%E7%B4%A7%E6%80%A5%E6%8F%90%E9%86%92%E8%8B%B9%E6%9E%9C%E7%94%A8%E6%88%B7%23) `234.1K 🔥` `+100%`
1. [美战机在伊朗坠毁美军展开搜救 (US fighter jet crashes in Iran, US military launches search and rescue)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E6%88%98%E6%9C%BA%E5%9C%A8%E4%BC%8A%E6%9C%97%E5%9D%A0%E6%AF%81%E7%BE%8E%E5%86%9B%E5%B1%95%E5%BC%80%E6%90%9C%E6%95%91%23) `210.7K 🔥` `+45%`
1. [王楚钦直言0比2落后真没机会 (Wang Chuqin bluntly said that he really had no chance after falling behind 0-2.)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%9B%B4%E8%A8%800%E6%AF%942%E8%90%BD%E5%90%8E%E7%9C%9F%E6%B2%A1%E6%9C%BA%E4%BC%9A%23) `117.4K 🔥` `+63%`
1. [唐艺昕因皮肤原因4年未拍戏 (Tang Yixin stopped filming for 4 years due to skin reasons)](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E5%9B%A0%E7%9A%AE%E8%82%A4%E5%8E%9F%E5%9B%A04%E5%B9%B4%E6%9C%AA%E6%8B%8D%E6%88%8F%23) `116.9K 🔥` `+33%`
1. [浪姐排名 (Sister Lang ranking)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%8E%92%E5%90%8D%23) `115.5K 🔥` `+32%`
1. [阚清子 尊重游戏规则](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%20%E5%B0%8A%E9%87%8D%E6%B8%B8%E6%88%8F%E8%A7%84%E5%88%99%23) `112.4K 🔥` `+31%`
1. [林沐然疑似有女友](https://s.weibo.com/weibo?q=%23%E6%9E%97%E6%B2%90%E7%84%B6%E7%96%91%E4%BC%BC%E6%9C%89%E5%A5%B3%E5%8F%8B%23) `111.6K 🔥` `+28%`
1. [浪姐改赛制 (Sister Lang changes the competition system)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E6%94%B9%E8%B5%9B%E5%88%B6%23) `106.6K 🔥` `+27%`
1. [张若昀发唐艺昕直拍 (Zhang Ruoyun sends Tang Yixin to shoot directly)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%8B%A5%E6%98%80%E5%8F%91%E5%94%90%E8%89%BA%E6%98%95%E7%9B%B4%E6%8B%8D%23) `105.6K 🔥` `+55%`
1. [男子发私照让豆包测评身材被封号 (Man's account banned after posting private photos for Doubao to assess his figure)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%8F%91%E7%A7%81%E7%85%A7%E8%AE%A9%E8%B1%86%E5%8C%85%E6%B5%8B%E8%AF%84%E8%BA%AB%E6%9D%90%E8%A2%AB%E5%B0%81%E5%8F%B7%23) `98.1K 🔥` `+21%`
1. [张凌赫因为帅被同学偷拍 (Zhang Linghe was secretly photographed by his classmates because he was handsome)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%A0%E4%B8%BA%E5%B8%85%E8%A2%AB%E5%90%8C%E5%AD%A6%E5%81%B7%E6%8B%8D%23) `75.4K 🔥` `+53%`
1. [老爸评测涉多起纠纷 (Dad’s comments have been involved in many disputes)](https://s.weibo.com/weibo?q=%23%E8%80%81%E7%88%B8%E8%AF%84%E6%B5%8B%E6%B6%89%E5%A4%9A%E8%B5%B7%E7%BA%A0%E7%BA%B7%23) `72.9K 🔥` `+40%`
1. [优思益发布海外工厂情况声明 (Unisei releases statement on overseas factory conditions)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%E5%8F%91%E5%B8%83%E6%B5%B7%E5%A4%96%E5%B7%A5%E5%8E%82%E6%83%85%E5%86%B5%E5%A3%B0%E6%98%8E%23) `72.2K 🔥` `+27%`
1. [浪姐今晚不淘汰 (Sister Lang will not be eliminated tonight)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%BB%8A%E6%99%9A%E4%B8%8D%E6%B7%98%E6%B1%B0%23) `66.3K 🔥` `+58%`
1. [89岁奶奶翻窗从27楼外墙爬到21楼](https://s.weibo.com/weibo?q=%2389%E5%B2%81%E5%A5%B6%E5%A5%B6%E7%BF%BB%E7%AA%97%E4%BB%8E27%E6%A5%BC%E5%A4%96%E5%A2%99%E7%88%AC%E5%88%B021%E6%A5%BC%23) `60.4K 🔥` `+23%`
1. [女演员三平台破万剧盘点 (List of actresses who have broken through 10,000 dramas on three platforms)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%BC%94%E5%91%98%E4%B8%89%E5%B9%B3%E5%8F%B0%E7%A0%B4%E4%B8%87%E5%89%A7%E7%9B%98%E7%82%B9%23) `51.9K 🔥` `+58%`
1. [马兴瑞被查 (Ma Xingrui was investigated)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%85%B4%E7%91%9E%E8%A2%AB%E6%9F%A5%23) `49.3K 🔥` `+44%`
1. [谁来救救代斯 (Who will save Dais?)](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%9D%A5%E6%95%91%E6%95%91%E4%BB%A3%E6%96%AF%23) `49.1K 🔥` `+34%`
1. [月鳞绮纪白日提灯谁能笑到最后 (Who can have the last laugh when holding a lantern during the day?)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E8%B0%81%E8%83%BD%E7%AC%91%E5%88%B0%E6%9C%80%E5%90%8E%23) `48.5K 🔥` `+50%`
1. [当你过午不食六个月](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BD%A0%E8%BF%87%E5%8D%88%E4%B8%8D%E9%A3%9F%E5%85%AD%E4%B8%AA%E6%9C%88%23) `114.1K 🔥`
1. [优思益称无力售后](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%E7%A7%B0%E6%97%A0%E5%8A%9B%E5%94%AE%E5%90%8E%23) `110.9K 🔥`
1. [孟村杀妻案金昊已被执行死刑](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E6%9D%91%E6%9D%80%E5%A6%BB%E6%A1%88%E9%87%91%E6%98%8A%E5%B7%B2%E8%A2%AB%E6%89%A7%E8%A1%8C%E6%AD%BB%E5%88%91%23) `107.9K 🔥`
1. [以色列铁穹被伊朗击穿 (Israel’s Iron Dome was penetrated by Iran)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E9%93%81%E7%A9%B9%E8%A2%AB%E4%BC%8A%E6%9C%97%E5%87%BB%E7%A9%BF%23) `99.4K 🔥`
1. [冯提莫回应腋下管理 (Feng Timo responded to armpit management)](https://s.weibo.com/weibo?q=%23%E5%86%AF%E6%8F%90%E8%8E%AB%E5%9B%9E%E5%BA%94%E8%85%8B%E4%B8%8B%E7%AE%A1%E7%90%86%23) `90.1K 🔥`
1. [何宣林 给短人争气 (He Xuanlin gives credit to the short man)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%20%E7%BB%99%E7%9F%AD%E4%BA%BA%E4%BA%89%E6%B0%94%23) `84.5K 🔥`
1. [马兴瑞涉嫌严重违纪违法 (Ma Xingrui is suspected of serious violations of discipline and law)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%85%B4%E7%91%9E%E6%B6%89%E5%AB%8C%E4%B8%A5%E9%87%8D%E8%BF%9D%E7%BA%AA%E8%BF%9D%E6%B3%95%23) `77.1K 🔥`
1. [东部战区发布海报为了这个省](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%83%A8%E6%88%98%E5%8C%BA%E5%8F%91%E5%B8%83%E6%B5%B7%E6%8A%A5%E4%B8%BA%E4%BA%86%E8%BF%99%E4%B8%AA%E7%9C%81%23) `71.7K 🔥`
1. [清华学霸一开口就把人点醒了 (The top student from Tsinghua University woke people up as soon as he opened his mouth)](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8D%8E%E5%AD%A6%E9%9C%B8%E4%B8%80%E5%BC%80%E5%8F%A3%E5%B0%B1%E6%8A%8A%E4%BA%BA%E7%82%B9%E9%86%92%E4%BA%86%23) `59.2K 🔥`
1. [何宣林 黑马 (He Xuanlin Dark Horse)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%AE%A3%E6%9E%97%20%E9%BB%91%E9%A9%AC%23) `62.5K 🔥` `-29%`

Updated at 2026-04-04 07:38:43

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
