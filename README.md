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

1. [大连地震 (Dalian earthquake)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E8%BF%9E%E5%9C%B0%E9%9C%87%23) `2.7M 🔥` `NEW`
1. [迪丽热巴Hi6卷发上班路透](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4Hi6%E5%8D%B7%E5%8F%91%E4%B8%8A%E7%8F%AD%E8%B7%AF%E9%80%8F%23) `247.6K 🔥` `NEW`
1. [新年上千问让美好生成](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%B9%B4%E4%B8%8A%E5%8D%83%E9%97%AE%E8%AE%A9%E7%BE%8E%E5%A5%BD%E7%94%9F%E6%88%90%23) `235.3K 🔥` `NEW`
1. [孙颖莎亚洲杯夺冠后发文](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E4%BA%9A%E6%B4%B2%E6%9D%AF%E5%A4%BA%E5%86%A0%E5%90%8E%E5%8F%91%E6%96%87%23) `176.7K 🔥` `NEW`
1. [时代峰峻包场支持惊蛰无声](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%8C%85%E5%9C%BA%E6%94%AF%E6%8C%81%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%23) `174.4K 🔥` `NEW`
1. [权珉娥医美后毁容](https://s.weibo.com/weibo?q=%23%E6%9D%83%E7%8F%89%E5%A8%A5%E5%8C%BB%E7%BE%8E%E5%90%8E%E6%AF%81%E5%AE%B9%23) `172.2K 🔥` `NEW`
1. [我是炸鸡薄皮党](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%98%AF%E7%82%B8%E9%B8%A1%E8%96%84%E7%9A%AE%E5%85%9A%23) `150.7K 🔥` `NEW`
1. [日本彻底右转](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%BD%BB%E5%BA%95%E5%8F%B3%E8%BD%AC%23) `149.7K 🔥` `NEW`
1. [爱泼斯坦案亚裔受害者曝性虐待细节](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%A1%88%E4%BA%9A%E8%A3%94%E5%8F%97%E5%AE%B3%E8%80%85%E6%9B%9D%E6%80%A7%E8%99%90%E5%BE%85%E7%BB%86%E8%8A%82%23) `148.8K 🔥` `NEW`
1. [国务院挂牌督办山西朔州公司爆炸](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%8A%A1%E9%99%A2%E6%8C%82%E7%89%8C%E7%9D%A3%E5%8A%9E%E5%B1%B1%E8%A5%BF%E6%9C%94%E5%B7%9E%E5%85%AC%E5%8F%B8%E7%88%86%E7%82%B8%23) `147.4K 🔥` `NEW`
1. [成何体统谢永儿吓晕了 (How unbecoming Xie Yong'er was so frightened that he fainted)](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%E8%B0%A2%E6%B0%B8%E5%84%BF%E5%90%93%E6%99%95%E4%BA%86%23) `147.1K 🔥` `NEW`
1. [沈佳润的资源](https://s.weibo.com/weibo?q=%23%E6%B2%88%E4%BD%B3%E6%B6%A6%E7%9A%84%E8%B5%84%E6%BA%90%23) `143.8K 🔥` `NEW`
1. [史上最长的春节要来了](https://s.weibo.com/weibo?q=%23%E5%8F%B2%E4%B8%8A%E6%9C%80%E9%95%BF%E7%9A%84%E6%98%A5%E8%8A%82%E8%A6%81%E6%9D%A5%E4%BA%86%23) `143.3K 🔥` `NEW`
1. [庄序你早这样林屿森都是你的](https://s.weibo.com/weibo?q=%23%E5%BA%84%E5%BA%8F%E4%BD%A0%E6%97%A9%E8%BF%99%E6%A0%B7%E6%9E%97%E5%B1%BF%E6%A3%AE%E9%83%BD%E6%98%AF%E4%BD%A0%E7%9A%84%23) `128.5K 🔥` `NEW`
1. [上咪咕见证谷爱凌冲金](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E5%92%AA%E5%92%95%E8%A7%81%E8%AF%81%E8%B0%B7%E7%88%B1%E5%87%8C%E5%86%B2%E9%87%91%23) `127.5K 🔥` `NEW`
1. [朴彩英现身超级碗](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%BD%A9%E8%8B%B1%E7%8E%B0%E8%BA%AB%E8%B6%85%E7%BA%A7%E7%A2%97%23) `126.7K 🔥` `NEW`
1. [周一请假和周五请假的区别](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B8%80%E8%AF%B7%E5%81%87%E5%92%8C%E5%91%A8%E4%BA%94%E8%AF%B7%E5%81%87%E7%9A%84%E5%8C%BA%E5%88%AB%23) `124.0K 🔥` `NEW`
1. [对方拒绝催婚并跳了段舞蹈](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E6%96%B9%E6%8B%92%E7%BB%9D%E5%82%AC%E5%A9%9A%E5%B9%B6%E8%B7%B3%E4%BA%86%E6%AE%B5%E8%88%9E%E8%B9%88%23) `122.5K 🔥` `NEW`
1. [这样抢票成功率高出一截](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%A0%B7%E6%8A%A2%E7%A5%A8%E6%88%90%E5%8A%9F%E7%8E%87%E9%AB%98%E5%87%BA%E4%B8%80%E6%88%AA%23) `120.1K 🔥` `NEW`
1. [游戏科学CEO冯骥测试Seedance2.0](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E6%88%8F%E7%A7%91%E5%AD%A6CEO%E5%86%AF%E9%AA%A5%E6%B5%8B%E8%AF%95Seedance2.0%23) `112.6K 🔥` `NEW`
1. [吉赛尔否认和宁艺卓约会 (Gisele denies dating Ning Yizhuo)](https://s.weibo.com/weibo?q=%23%E5%90%89%E8%B5%9B%E5%B0%94%E5%90%A6%E8%AE%A4%E5%92%8C%E5%AE%81%E8%89%BA%E5%8D%93%E7%BA%A6%E4%BC%9A%23) `106.5K 🔥` `NEW`
1. [丑照全在骑手的手机里](https://s.weibo.com/weibo?q=%23%E4%B8%91%E7%85%A7%E5%85%A8%E5%9C%A8%E9%AA%91%E6%89%8B%E7%9A%84%E6%89%8B%E6%9C%BA%E9%87%8C%23) `106.0K 🔥` `NEW`
1. [樊振东和中国冬奥首金得主合影](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%92%8C%E4%B8%AD%E5%9B%BD%E5%86%AC%E5%A5%A5%E9%A6%96%E9%87%91%E5%BE%97%E4%B8%BB%E5%90%88%E5%BD%B1%23) `104.4K 🔥` `NEW`
1. [过年回家别做散财童子](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%B9%B4%E5%9B%9E%E5%AE%B6%E5%88%AB%E5%81%9A%E6%95%A3%E8%B4%A2%E7%AB%A5%E5%AD%90%23) `103.7K 🔥` `NEW`
1. [金饰价涨到1568元](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E6%B6%A8%E5%88%B01568%E5%85%83%23) `103.6K 🔥` `NEW`
1. [当你长期坚持做一件事后](https://s.weibo.com/weibo?q=%23%E5%BD%93%E4%BD%A0%E9%95%BF%E6%9C%9F%E5%9D%9A%E6%8C%81%E5%81%9A%E4%B8%80%E4%BB%B6%E4%BA%8B%E5%90%8E%23) `100.0K 🔥` `NEW`
1. [周峻炜这次真的不一样](https://s.weibo.com/weibo?q=%23%E5%91%A8%E5%B3%BB%E7%82%9C%E8%BF%99%E6%AC%A1%E7%9C%9F%E7%9A%84%E4%B8%8D%E4%B8%80%E6%A0%B7%23) `88.5K 🔥` `NEW`
1. [众多App春节送礼](https://s.weibo.com/weibo?q=%23%E4%BC%97%E5%A4%9AApp%E6%98%A5%E8%8A%82%E9%80%81%E7%A4%BC%23) `87.5K 🔥` `NEW`
1. [陈哲远 空红包对广东人的杀伤力](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%20%E7%A9%BA%E7%BA%A2%E5%8C%85%E5%AF%B9%E5%B9%BF%E4%B8%9C%E4%BA%BA%E7%9A%84%E6%9D%80%E4%BC%A4%E5%8A%9B%23) `86.9K 🔥` `NEW`
1. [坐着火车去卖菜是啥体验](https://s.weibo.com/weibo?q=%23%E5%9D%90%E7%9D%80%E7%81%AB%E8%BD%A6%E5%8E%BB%E5%8D%96%E8%8F%9C%E6%98%AF%E5%95%A5%E4%BD%93%E9%AA%8C%23) `788.7K 🔥` `+32%`
1. [年后辞职我都不敢这么演 (I don’t dare to act like this even if I resign after the year)](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E5%90%8E%E8%BE%9E%E8%81%8C%E6%88%91%E9%83%BD%E4%B8%8D%E6%95%A2%E8%BF%99%E4%B9%88%E6%BC%94%23) `238.9K 🔥` `+133%`
1. [王楚然剧宣送黄金](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%89%A7%E5%AE%A3%E9%80%81%E9%BB%84%E9%87%91%23) `229.9K 🔥` `+52%`
1. [超级碗 (super bowl)](https://s.weibo.com/weibo?q=%23%E8%B6%85%E7%BA%A7%E7%A2%97%23) `1.0M 🔥`
1. [空气炸锅半年清洗一次](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%B0%94%E7%82%B8%E9%94%85%E5%8D%8A%E5%B9%B4%E6%B8%85%E6%B4%97%E4%B8%80%E6%AC%A1%23) `253.3K 🔥`
1. [瑶一瑶摆拍后一年掉粉近120万 (Yao Yiyao lost nearly 1.2 million followers in one year after posing for photos)](https://s.weibo.com/weibo?q=%23%E7%91%B6%E4%B8%80%E7%91%B6%E6%91%86%E6%8B%8D%E5%90%8E%E4%B8%80%E5%B9%B4%E6%8E%89%E7%B2%89%E8%BF%91120%E4%B8%87%23) `165.8K 🔥`
1. [迪丽热巴给粉丝点了奶茶面包鸡汤](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%BB%99%E7%B2%89%E4%B8%9D%E7%82%B9%E4%BA%86%E5%A5%B6%E8%8C%B6%E9%9D%A2%E5%8C%85%E9%B8%A1%E6%B1%A4%23) `163.5K 🔥`
1. [中国特警vs美国特警 (Chinese SWAT vs American SWAT)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%89%B9%E8%AD%A6vs%E7%BE%8E%E5%9B%BD%E7%89%B9%E8%AD%A6%23) `151.3K 🔥`
1. [爱吃桃酥的人天塌了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%90%83%E6%A1%83%E9%85%A5%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `145.8K 🔥`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `144.9K 🔥`
1. [章昊赖伟明刚认识就出去玩了](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E6%98%8A%E8%B5%96%E4%BC%9F%E6%98%8E%E5%88%9A%E8%AE%A4%E8%AF%86%E5%B0%B1%E5%87%BA%E5%8E%BB%E7%8E%A9%E4%BA%86%23) `136.7K 🔥`
1. [6个中国人在太空聚餐烧烤](https://s.weibo.com/weibo?q=%236%E4%B8%AA%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%9C%A8%E5%A4%AA%E7%A9%BA%E8%81%9A%E9%A4%90%E7%83%A7%E7%83%A4%23) `124.2K 🔥`
1. [惊蛰无声](https://s.weibo.com/weibo?q=%23%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%23) `89.7K 🔥`
1. [黑诊所放血疗法地面血流成泊](https://s.weibo.com/weibo?q=%23%E9%BB%91%E8%AF%8A%E6%89%80%E6%94%BE%E8%A1%80%E7%96%97%E6%B3%95%E5%9C%B0%E9%9D%A2%E8%A1%80%E6%B5%81%E6%88%90%E6%B3%8A%23) `176.5K 🔥` `-52%`
1. [朋友圈跳赞 (Like in Moments)](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E8%B7%B3%E8%B5%9E%23) `170.1K 🔥` `-53%`
1. [自嗨锅濒临破产](https://s.weibo.com/weibo?q=%23%E8%87%AA%E5%97%A8%E9%94%85%E6%BF%92%E4%B8%B4%E7%A0%B4%E4%BA%A7%23) `161.6K 🔥` `-80%`
1. [爱泼斯坦案秘密照片曝光 (Secret photos from Epstein case revealed)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E6%A1%88%E7%A7%98%E5%AF%86%E7%85%A7%E7%89%87%E6%9B%9D%E5%85%89%23) `123.3K 🔥` `-25%`
1. [都暻秀 奶茶也太好喝了 (Do Kyungsoo’s milk tea is so delicious too)](https://s.weibo.com/weibo?q=%23%E9%83%BD%E6%9A%BB%E7%A7%80%20%E5%A5%B6%E8%8C%B6%E4%B9%9F%E5%A4%AA%E5%A5%BD%E5%96%9D%E4%BA%86%23) `121.3K 🔥` `-30%`
1. [贺娇龙抢救前还在安排工作 (He Jiaolong was still arranging work before the rescue)](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%A8%87%E9%BE%99%E6%8A%A2%E6%95%91%E5%89%8D%E8%BF%98%E5%9C%A8%E5%AE%89%E6%8E%92%E5%B7%A5%E4%BD%9C%23) `120.0K 🔥` `-67%`
1. [孟子义微博之夜带走了四盒饼干](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%BE%AE%E5%8D%9A%E4%B9%8B%E5%A4%9C%E5%B8%A6%E8%B5%B0%E4%BA%86%E5%9B%9B%E7%9B%92%E9%A5%BC%E5%B9%B2%23) `106.5K 🔥` `-29%`
1. [美国牙医称自己差点掉入斩杀线](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%89%99%E5%8C%BB%E7%A7%B0%E8%87%AA%E5%B7%B1%E5%B7%AE%E7%82%B9%E6%8E%89%E5%85%A5%E6%96%A9%E6%9D%80%E7%BA%BF%23) `105.1K 🔥` `-44%`
1. [王鹤棣宋茜又跳了屋顶着火 (Wang Hedi and Song Qian jumped off the roof again and caught fire)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%AE%8B%E8%8C%9C%E5%8F%88%E8%B7%B3%E4%BA%86%E5%B1%8B%E9%A1%B6%E7%9D%80%E7%81%AB%23) `83.7K 🔥` `-36%`

Updated at 2026-02-09 15:35:32

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
