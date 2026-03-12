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

1. [代表建议取消中考分流 (Representatives suggest canceling the high school entrance exam diversion)](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E8%A1%A8%E5%BB%BA%E8%AE%AE%E5%8F%96%E6%B6%88%E4%B8%AD%E8%80%83%E5%88%86%E6%B5%81%23) `1.0M 🔥` `NEW`
1. [孙颖莎vs朱芊曦](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Evs%E6%9C%B1%E8%8A%8A%E6%9B%A6%23) `718.6K 🔥` `NEW`
1. [赛车场搬来市中心了](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E8%BD%A6%E5%9C%BA%E6%90%AC%E6%9D%A5%E5%B8%82%E4%B8%AD%E5%BF%83%E4%BA%86%23) `710.1K 🔥` `NEW`
1. [春天薯片也要吃新鲜的](https://s.weibo.com/weibo?q=%23%E6%98%A5%E5%A4%A9%E8%96%AF%E7%89%87%E4%B9%9F%E8%A6%81%E5%90%83%E6%96%B0%E9%B2%9C%E7%9A%84%23) `676.3K 🔥` `NEW`
1. [如何抓住孩子春季长高黄金期](https://s.weibo.com/weibo?q=%23%E5%A6%82%E4%BD%95%E6%8A%93%E4%BD%8F%E5%AD%A9%E5%AD%90%E6%98%A5%E5%AD%A3%E9%95%BF%E9%AB%98%E9%BB%84%E9%87%91%E6%9C%9F%23) `271.9K 🔥` `NEW`
1. [建议严惩网络医闹](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%B8%A5%E6%83%A9%E7%BD%91%E7%BB%9C%E5%8C%BB%E9%97%B9%23) `245.3K 🔥` `NEW`
1. [微信视频通话终于有锁定功能了](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%A7%86%E9%A2%91%E9%80%9A%E8%AF%9D%E7%BB%88%E4%BA%8E%E6%9C%89%E9%94%81%E5%AE%9A%E5%8A%9F%E8%83%BD%E4%BA%86%23) `189.8K 🔥` `NEW`
1. [年轻人不知道的交公粮](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84%E4%BA%A4%E5%85%AC%E7%B2%AE%23) `174.7K 🔥` `NEW`
1. [王不染直播关美颜](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%8D%E6%9F%93%E7%9B%B4%E6%92%AD%E5%85%B3%E7%BE%8E%E9%A2%9C%23) `134.3K 🔥` `NEW`
1. [德国选手拒绝与俄中选手合影](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E9%80%89%E6%89%8B%E6%8B%92%E7%BB%9D%E4%B8%8E%E4%BF%84%E4%B8%AD%E9%80%89%E6%89%8B%E5%90%88%E5%BD%B1%23) `132.4K 🔥` `NEW`
1. [周杰伦南宁站抢票 (Jay Chou grabs tickets at Nanning Station)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E5%8D%97%E5%AE%81%E7%AB%99%E6%8A%A2%E7%A5%A8%23) `126.1K 🔥` `NEW`
1. [白敬亭小学同学录](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E5%B0%8F%E5%AD%A6%E5%90%8C%E5%AD%A6%E5%BD%95%23) `97.3K 🔥` `NEW`
1. [苏翊鸣坐拉塞尔副驾飙速](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%9D%90%E6%8B%89%E5%A1%9E%E5%B0%94%E5%89%AF%E9%A9%BE%E9%A3%99%E9%80%9F%23) `89.1K 🔥` `NEW`
1. [存多少钱够我们这一代体面养老](https://s.weibo.com/weibo?q=%23%E5%AD%98%E5%A4%9A%E5%B0%91%E9%92%B1%E5%A4%9F%E6%88%91%E4%BB%AC%E8%BF%99%E4%B8%80%E4%BB%A3%E4%BD%93%E9%9D%A2%E5%85%BB%E8%80%81%23) `86.2K 🔥` `NEW`
1. [姐妹俩互用化妆品双双查出肾病](https://s.weibo.com/weibo?q=%23%E5%A7%90%E5%A6%B9%E4%BF%A9%E4%BA%92%E7%94%A8%E5%8C%96%E5%A6%86%E5%93%81%E5%8F%8C%E5%8F%8C%E6%9F%A5%E5%87%BA%E8%82%BE%E7%97%85%23) `86.1K 🔥` `NEW`
1. [森林狼vs快船](https://s.weibo.com/weibo?q=%23%E6%A3%AE%E6%9E%97%E7%8B%BCvs%E5%BF%AB%E8%88%B9%23) `84.3K 🔥` `NEW`
1. [原来努力和天赋并存是这种感觉](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%8A%AA%E5%8A%9B%E5%92%8C%E5%A4%A9%E8%B5%8B%E5%B9%B6%E5%AD%98%E6%98%AF%E8%BF%99%E7%A7%8D%E6%84%9F%E8%A7%89%23) `77.0K 🔥` `NEW`
1. [张杰演唱会抢票](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%E6%8A%A2%E7%A5%A8%23) `76.0K 🔥` `NEW`
1. [代表称老师的职责不该向家长转移](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E8%A1%A8%E7%A7%B0%E8%80%81%E5%B8%88%E7%9A%84%E8%81%8C%E8%B4%A3%E4%B8%8D%E8%AF%A5%E5%90%91%E5%AE%B6%E9%95%BF%E8%BD%AC%E7%A7%BB%23) `738.6K 🔥` `+587%`
1. [3月12日两会日程 (Agenda for the two sessions on March 12)](https://s.weibo.com/weibo?q=%233%E6%9C%8812%E6%97%A5%E4%B8%A4%E4%BC%9A%E6%97%A5%E7%A8%8B%23) `733.7K 🔥` `+22%`
1. [来格力寻找真Ai (Come to Gree to find true love)](https://s.weibo.com/weibo?q=%23%E6%9D%A5%E6%A0%BC%E5%8A%9B%E5%AF%BB%E6%89%BE%E7%9C%9FAi%23) `729.3K 🔥` `+23%`
1. [微信语音视频来电能忽略了](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%AF%AD%E9%9F%B3%E8%A7%86%E9%A2%91%E6%9D%A5%E7%94%B5%E8%83%BD%E5%BF%BD%E7%95%A5%E4%BA%86%23) `728.4K 🔥` `+178%`
1. [建议提高待遇激励医学生扎根基层 (It is recommended to improve the salary to encourage medical students to take root at the grassroots level)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%8F%90%E9%AB%98%E5%BE%85%E9%81%87%E6%BF%80%E5%8A%B1%E5%8C%BB%E5%AD%A6%E7%94%9F%E6%89%8E%E6%A0%B9%E5%9F%BA%E5%B1%82%23) `702.3K 🔥` `+177%`
1. [安理会决议要求伊朗停止打海湾国家](https://s.weibo.com/weibo?q=%23%E5%AE%89%E7%90%86%E4%BC%9A%E5%86%B3%E8%AE%AE%E8%A6%81%E6%B1%82%E4%BC%8A%E6%9C%97%E5%81%9C%E6%AD%A2%E6%89%93%E6%B5%B7%E6%B9%BE%E5%9B%BD%E5%AE%B6%23) `694.5K 🔥` `+173%`
1. [在春天里奔赴新征程](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E6%98%A5%E5%A4%A9%E9%87%8C%E5%A5%94%E8%B5%B4%E6%96%B0%E5%BE%81%E7%A8%8B%23) `688.8K 🔥` `+173%`
1. [建议让全年无休的照护者能喘口气 (Recommendations to give year-round caregivers a breather)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E8%AE%A9%E5%85%A8%E5%B9%B4%E6%97%A0%E4%BC%91%E7%9A%84%E7%85%A7%E6%8A%A4%E8%80%85%E8%83%BD%E5%96%98%E5%8F%A3%E6%B0%94%23) `681.2K 🔥` `+172%`
1. [辛辛苦苦考了一份辛辛苦苦的工作](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%BE%9B%E8%8B%A6%E8%8B%A6%E8%80%83%E4%BA%86%E4%B8%80%E4%BB%BD%E8%BE%9B%E8%BE%9B%E8%8B%A6%E8%8B%A6%E7%9A%84%E5%B7%A5%E4%BD%9C%23) `679.5K 🔥` `+417%`
1. [腾讯视频修改逐玉战报](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E8%A7%86%E9%A2%91%E4%BF%AE%E6%94%B9%E9%80%90%E7%8E%89%E6%88%98%E6%8A%A5%23) `674.7K 🔥` `+178%`
1. [多邻国绿鸟 离职](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E9%82%BB%E5%9B%BD%E7%BB%BF%E9%B8%9F%20%E7%A6%BB%E8%81%8C%23) `645.7K 🔥` `+319%`
1. [逐玉 业内](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E4%B8%9A%E5%86%85%23) `540.6K 🔥` `+489%`
1. [美国伊朗冲突](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%BC%8A%E6%9C%97%E5%86%B2%E7%AA%81%23) `390.6K 🔥` `+57%`
1. [随手拍的照片帮我赚一年生活费](https://s.weibo.com/weibo?q=%23%E9%9A%8F%E6%89%8B%E6%8B%8D%E7%9A%84%E7%85%A7%E7%89%87%E5%B8%AE%E6%88%91%E8%B5%9A%E4%B8%80%E5%B9%B4%E7%94%9F%E6%B4%BB%E8%B4%B9%23) `260.5K 🔥` `+48%`
1. [3名美国富豪强奸性侵60名女性 (3 wealthy Americans raped and sexually assaulted 60 women)](https://s.weibo.com/weibo?q=%233%E5%90%8D%E7%BE%8E%E5%9B%BD%E5%AF%8C%E8%B1%AA%E5%BC%BA%E5%A5%B8%E6%80%A7%E4%BE%B560%E5%90%8D%E5%A5%B3%E6%80%A7%23) `245.0K 🔥` `+38%`
1. [张凌赫田曦薇头纱照](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%E5%A4%B4%E7%BA%B1%E7%85%A7%23) `244.4K 🔥` `+38%`
1. [双胞胎老了后 (When the twins grow old)](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E8%83%9E%E8%83%8E%E8%80%81%E4%BA%86%E5%90%8E%23) `227.8K 🔥` `+97%`
1. [逐玉女二 穿越](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%A5%B3%E4%BA%8C%20%E7%A9%BF%E8%B6%8A%23) `225.1K 🔥` `+66%`
1. [逐玉破万 经纪人亲一个](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E7%A0%B4%E4%B8%87%20%E7%BB%8F%E7%BA%AA%E4%BA%BA%E4%BA%B2%E4%B8%80%E4%B8%AA%23) `294.8K 🔥`
1. [章子怡求剧本 (Zhang Ziyi asks for script)](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%AD%90%E6%80%A1%E6%B1%82%E5%89%A7%E6%9C%AC%23) `219.4K 🔥`
1. [宋雨琦于谦不新鲜才怪](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E4%BA%8E%E8%B0%A6%E4%B8%8D%E6%96%B0%E9%B2%9C%E6%89%8D%E6%80%AA%23) `168.3K 🔥`
1. [意识到同事不傻只是在逃避工作](https://s.weibo.com/weibo?q=%23%E6%84%8F%E8%AF%86%E5%88%B0%E5%90%8C%E4%BA%8B%E4%B8%8D%E5%82%BB%E5%8F%AA%E6%98%AF%E5%9C%A8%E9%80%83%E9%81%BF%E5%B7%A5%E4%BD%9C%23) `165.9K 🔥`
1. [一胎双胞胎女儿二胎双胞胎儿子 (One birth of twin girls and two births of twin sons.)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%83%8E%E5%8F%8C%E8%83%9E%E8%83%8E%E5%A5%B3%E5%84%BF%E4%BA%8C%E8%83%8E%E5%8F%8C%E8%83%9E%E8%83%8E%E5%84%BF%E5%AD%90%23) `133.7K 🔥`
1. [原来给肉去腥这么简单](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%BB%99%E8%82%89%E5%8E%BB%E8%85%A5%E8%BF%99%E4%B9%88%E7%AE%80%E5%8D%95%23) `101.7K 🔥`
1. [代表刚回屋建议就收到回复 (The representative received a reply as soon as he returned to the house to advise.)](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E8%A1%A8%E5%88%9A%E5%9B%9E%E5%B1%8B%E5%BB%BA%E8%AE%AE%E5%B0%B1%E6%94%B6%E5%88%B0%E5%9B%9E%E5%A4%8D%23) `710.6K 🔥` `-30%`
1. [张凌赫看了好几次田曦薇的手](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9C%8B%E4%BA%86%E5%A5%BD%E5%87%A0%E6%AC%A1%E7%94%B0%E6%9B%A6%E8%96%87%E7%9A%84%E6%89%8B%23) `186.6K 🔥` `-23%`
1. [鹿晗新商务](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E6%96%B0%E5%95%86%E5%8A%A1%23) `119.4K 🔥` `-32%`
1. [苹果最贵手机要来了](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%9C%80%E8%B4%B5%E6%89%8B%E6%9C%BA%E8%A6%81%E6%9D%A5%E4%BA%86%23) `116.3K 🔥` `-53%`
1. [建议70岁以上农民养老金提至500](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE70%E5%B2%81%E4%BB%A5%E4%B8%8A%E5%86%9C%E6%B0%91%E5%85%BB%E8%80%81%E9%87%91%E6%8F%90%E8%87%B3500%23) `98.0K 🔥` `-87%`
1. [伊总统提出结束战争3大必要条件 (The President of Iraq proposed three necessary conditions to end the war)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%80%BB%E7%BB%9F%E6%8F%90%E5%87%BA%E7%BB%93%E6%9D%9F%E6%88%98%E4%BA%893%E5%A4%A7%E5%BF%85%E8%A6%81%E6%9D%A1%E4%BB%B6%23) `90.3K 🔥` `-41%`
1. [伊朗港口若遭袭将打击地区所有港口](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%B8%AF%E5%8F%A3%E8%8B%A5%E9%81%AD%E8%A2%AD%E5%B0%86%E6%89%93%E5%87%BB%E5%9C%B0%E5%8C%BA%E6%89%80%E6%9C%89%E6%B8%AF%E5%8F%A3%23) `88.4K 🔥` `-52%`
1. [汪苏泷明日世界MV (Wang Sulong Tomorrow's World MV)](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E6%98%8E%E6%97%A5%E4%B8%96%E7%95%8CMV%23) `86.5K 🔥` `-65%`
1. [景区买个水果捞没想到切完多了 (I bought some fruit in the scenic spot, but I didn’t expect that it would be too much to cut.)](https://s.weibo.com/weibo?q=%23%E6%99%AF%E5%8C%BA%E4%B9%B0%E4%B8%AA%E6%B0%B4%E6%9E%9C%E6%8D%9E%E6%B2%A1%E6%83%B3%E5%88%B0%E5%88%87%E5%AE%8C%E5%A4%9A%E4%BA%86%23) `81.0K 🔥` `-61%`
1. [腾讯视频版头有9部爆剧](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E8%A7%86%E9%A2%91%E7%89%88%E5%A4%B4%E6%9C%899%E9%83%A8%E7%88%86%E5%89%A7%23) `79.1K 🔥` `-57%`

Updated at 2026-03-12 13:38:04

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
