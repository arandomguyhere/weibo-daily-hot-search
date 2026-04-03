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

1. [原来身份证不是全国统一的 (It turns out that ID cards are not uniform across the country.)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BA%AB%E4%BB%BD%E8%AF%81%E4%B8%8D%E6%98%AF%E5%85%A8%E5%9B%BD%E7%BB%9F%E4%B8%80%E7%9A%84%23) `1.1M 🔥` `NEW`
1. [致敬所有隐蔽战线的无名英雄](https://s.weibo.com/weibo?q=%23%E8%87%B4%E6%95%AC%E6%89%80%E6%9C%89%E9%9A%90%E8%94%BD%E6%88%98%E7%BA%BF%E7%9A%84%E6%97%A0%E5%90%8D%E8%8B%B1%E9%9B%84%23) `676.6K 🔥` `NEW`
1. [欧阳娜娜同款小鹏MONA起售价11.98万](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%E5%90%8C%E6%AC%BE%E5%B0%8F%E9%B9%8FMONA%E8%B5%B7%E5%94%AE%E4%BB%B711.98%E4%B8%87%23) `653.7K 🔥` `NEW`
1. [黄灿灿浪姐直播闯祸](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%E9%97%AF%E7%A5%B8%23) `588.5K 🔥` `NEW`
1. [老爸评测就优思益事件道歉](https://s.weibo.com/weibo?q=%23%E8%80%81%E7%88%B8%E8%AF%84%E6%B5%8B%E5%B0%B1%E4%BC%98%E6%80%9D%E7%9B%8A%E4%BA%8B%E4%BB%B6%E9%81%93%E6%AD%89%23) `538.0K 🔥` `NEW`
1. [秦岚说沈月确实漂亮](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%B2%9A%E8%AF%B4%E6%B2%88%E6%9C%88%E7%A1%AE%E5%AE%9E%E6%BC%82%E4%BA%AE%23) `489.4K 🔥` `NEW`
1. [小米调价](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E8%B0%83%E4%BB%B7%23) `431.3K 🔥` `NEW`
1. [五角大楼被曝紧急采购](https://s.weibo.com/weibo?q=%23%E4%BA%94%E8%A7%92%E5%A4%A7%E6%A5%BC%E8%A2%AB%E6%9B%9D%E7%B4%A7%E6%80%A5%E9%87%87%E8%B4%AD%23) `410.1K 🔥` `NEW`
1. [半个娱乐圈为它道歉谁该负责](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E4%B8%AA%E5%A8%B1%E4%B9%90%E5%9C%88%E4%B8%BA%E5%AE%83%E9%81%93%E6%AD%89%E8%B0%81%E8%AF%A5%E8%B4%9F%E8%B4%A3%23) `343.8K 🔥` `NEW`
1. [官方通报重庆喜来登大酒店冒烟](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E9%87%8D%E5%BA%86%E5%96%9C%E6%9D%A5%E7%99%BB%E5%A4%A7%E9%85%92%E5%BA%97%E5%86%92%E7%83%9F%23) `312.4K 🔥` `NEW`
1. [特朗普放炸桥视频施压伊朗 (Trump releases video of bridge bombing to pressure Iran)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%94%BE%E7%82%B8%E6%A1%A5%E8%A7%86%E9%A2%91%E6%96%BD%E5%8E%8B%E4%BC%8A%E6%9C%97%23) `289.8K 🔥` `NEW`
1. [乘风2026](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%23) `272.3K 🔥` `NEW`
1. [老爸评测声明优思益消费者可退一赔三](https://s.weibo.com/weibo?q=%23%E8%80%81%E7%88%B8%E8%AF%84%E6%B5%8B%E5%A3%B0%E6%98%8E%E4%BC%98%E6%80%9D%E7%9B%8A%E6%B6%88%E8%B4%B9%E8%80%85%E5%8F%AF%E9%80%80%E4%B8%80%E8%B5%94%E4%B8%89%23) `268.1K 🔥` `NEW`
1. [涠洲岛20余艘观鲸船围堵鲸鱼](https://s.weibo.com/weibo?q=%23%E6%B6%A0%E6%B4%B2%E5%B2%9B20%E4%BD%99%E8%89%98%E8%A7%82%E9%B2%B8%E8%88%B9%E5%9B%B4%E5%A0%B5%E9%B2%B8%E9%B1%BC%23) `229.7K 🔥` `NEW`
1. [东契奇无对抗受伤](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E5%A5%91%E5%A5%87%E6%97%A0%E5%AF%B9%E6%8A%97%E5%8F%97%E4%BC%A4%23) `214.7K 🔥` `NEW`
1. [医保政策调整](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E4%BF%9D%E6%94%BF%E7%AD%96%E8%B0%83%E6%95%B4%23) `206.7K 🔥` `NEW`
1. [原来美女连最普通的披头发都有小心机](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%BE%8E%E5%A5%B3%E8%BF%9E%E6%9C%80%E6%99%AE%E9%80%9A%E7%9A%84%E6%8A%AB%E5%A4%B4%E5%8F%91%E9%83%BD%E6%9C%89%E5%B0%8F%E5%BF%83%E6%9C%BA%23) `203.4K 🔥` `NEW`
1. [张凌赫待播剧一个是医生一个是草根](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%BE%85%E6%92%AD%E5%89%A7%E4%B8%80%E4%B8%AA%E6%98%AF%E5%8C%BB%E7%94%9F%E4%B8%80%E4%B8%AA%E6%98%AF%E8%8D%89%E6%A0%B9%23) `169.3K 🔥` `NEW`
1. [谢娜 真人秀直播是全新的尝试](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%20%E7%9C%9F%E4%BA%BA%E7%A7%80%E7%9B%B4%E6%92%AD%E6%98%AF%E5%85%A8%E6%96%B0%E7%9A%84%E5%B0%9D%E8%AF%95%23) `168.3K 🔥` `NEW`
1. [天龙三号](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E9%BE%99%E4%B8%89%E5%8F%B7%23) `151.2K 🔥` `NEW`
1. [18岁缉毒烈士牺牲时姿势让人破防 (The 18-year-old anti-drug martyr’s posture when he died was shocking)](https://s.weibo.com/weibo?q=%2318%E5%B2%81%E7%BC%89%E6%AF%92%E7%83%88%E5%A3%AB%E7%89%BA%E7%89%B2%E6%97%B6%E5%A7%BF%E5%8A%BF%E8%AE%A9%E4%BA%BA%E7%A0%B4%E9%98%B2%23) `147.7K 🔥` `NEW`
1. [重仓黄金的人怎么样了](https://s.weibo.com/weibo?q=%23%E9%87%8D%E4%BB%93%E9%BB%84%E9%87%91%E7%9A%84%E4%BA%BA%E6%80%8E%E4%B9%88%E6%A0%B7%E4%BA%86%23) `147.2K 🔥` `NEW`
1. [浙江宣传锐评县委书记6秒发言](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E5%AE%A3%E4%BC%A0%E9%94%90%E8%AF%84%E5%8E%BF%E5%A7%94%E4%B9%A6%E8%AE%B06%E7%A7%92%E5%8F%91%E8%A8%80%23) `142.8K 🔥` `NEW`
1. [老虎伍兹被捕画面曝光](https://s.weibo.com/weibo?q=%23%E8%80%81%E8%99%8E%E4%BC%8D%E5%85%B9%E8%A2%AB%E6%8D%95%E7%94%BB%E9%9D%A2%E6%9B%9D%E5%85%89%23) `141.8K 🔥` `NEW`
1. [老虎伍兹被捕现场](https://s.weibo.com/weibo?q=%23%E8%80%81%E8%99%8E%E4%BC%8D%E5%85%B9%E8%A2%AB%E6%8D%95%E7%8E%B0%E5%9C%BA%23) `139.2K 🔥` `NEW`
1. [张雪回应浙创投投资9000万](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E5%9B%9E%E5%BA%94%E6%B5%99%E5%88%9B%E6%8A%95%E6%8A%95%E8%B5%849000%E4%B8%87%23) `109.5K 🔥` `NEW`
1. [骑行交警等红灯被男子窜出殴打](https://s.weibo.com/weibo?q=%23%E9%AA%91%E8%A1%8C%E4%BA%A4%E8%AD%A6%E7%AD%89%E7%BA%A2%E7%81%AF%E8%A2%AB%E7%94%B7%E5%AD%90%E7%AA%9C%E5%87%BA%E6%AE%B4%E6%89%93%23) `107.1K 🔥` `NEW`
1. [何润东回应不参加综艺](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E5%9B%9E%E5%BA%94%E4%B8%8D%E5%8F%82%E5%8A%A0%E7%BB%BC%E8%89%BA%23) `102.8K 🔥` `NEW`
1. [人和人走散真是太容易了](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%92%8C%E4%BA%BA%E8%B5%B0%E6%95%A3%E7%9C%9F%E6%98%AF%E5%A4%AA%E5%AE%B9%E6%98%93%E4%BA%86%23) `100.1K 🔥` `NEW`
1. [美国被曝想用停火换霍尔木兹海峡通航](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E8%A2%AB%E6%9B%9D%E6%83%B3%E7%94%A8%E5%81%9C%E7%81%AB%E6%8D%A2%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E9%80%9A%E8%88%AA%23) `98.0K 🔥` `NEW`
1. [王俊凯来浪姐的原因 (The reason why Wang Junkai came to Sister Lang)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%9D%A5%E6%B5%AA%E5%A7%90%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `97.7K 🔥` `NEW`
1. [白宫紧急下架特朗普讲话视频](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%AE%AB%E7%B4%A7%E6%80%A5%E4%B8%8B%E6%9E%B6%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%B2%E8%AF%9D%E8%A7%86%E9%A2%91%23) `97.6K 🔥` `NEW`
1. [八千里路云和月定档](https://s.weibo.com/weibo?q=%23%E5%85%AB%E5%8D%83%E9%87%8C%E8%B7%AF%E4%BA%91%E5%92%8C%E6%9C%88%E5%AE%9A%E6%A1%A3%23) `97.6K 🔥` `NEW`
1. [陈飞宇看迪丽热巴许愿的眼神](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%E7%9C%8B%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%AE%B8%E6%84%BF%E7%9A%84%E7%9C%BC%E7%A5%9E%23) `90.1K 🔥` `NEW`
1. [穆祉丞一句话让兄弟V50](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E4%B8%80%E5%8F%A5%E8%AF%9D%E8%AE%A9%E5%85%84%E5%BC%9FV50%23) `86.0K 🔥` `NEW`
1. [亲密关系里保持中立是一种冷漠](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E5%AF%86%E5%85%B3%E7%B3%BB%E9%87%8C%E4%BF%9D%E6%8C%81%E4%B8%AD%E7%AB%8B%E6%98%AF%E4%B8%80%E7%A7%8D%E5%86%B7%E6%BC%A0%23) `81.0K 🔥` `NEW`
1. [白鹿维权获赔1万元](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%BB%B4%E6%9D%83%E8%8E%B7%E8%B5%941%E4%B8%87%E5%85%83%23) `81.0K 🔥` `NEW`
1. [江苏七块五的馄饨六块是表演费](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E8%8B%8F%E4%B8%83%E5%9D%97%E4%BA%94%E7%9A%84%E9%A6%84%E9%A5%A8%E5%85%AD%E5%9D%97%E6%98%AF%E8%A1%A8%E6%BC%94%E8%B4%B9%23) `80.9K 🔥` `NEW`
1. [韩国40岁导演遭围殴致死引众怒](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD40%E5%B2%81%E5%AF%BC%E6%BC%94%E9%81%AD%E5%9B%B4%E6%AE%B4%E8%87%B4%E6%AD%BB%E5%BC%95%E4%BC%97%E6%80%92%23) `854.9K 🔥` `+89%`
1. [王一博在蕉内欢迎光临 (Welcome to Wang Yibo in Jiao Nei)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%9C%A8%E8%95%89%E5%86%85%E6%AC%A2%E8%BF%8E%E5%85%89%E4%B8%B4%23) `459.8K 🔥` `+143%`
1. [张天爱变样了 (Zhang Tianai has changed)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A4%A9%E7%88%B1%E5%8F%98%E6%A0%B7%E4%BA%86%23) `304.0K 🔥` `+35%`
1. [会计的噩梦](https://s.weibo.com/weibo?q=%23%E4%BC%9A%E8%AE%A1%E7%9A%84%E5%99%A9%E6%A2%A6%23) `261.4K 🔥` `+224%`
1. [陈畅说李小冉靠一张脸在北舞躺平七年 (Chen Chang said that Li Xiaoran stayed in Beiwu for seven years with just one face)](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%95%85%E8%AF%B4%E6%9D%8E%E5%B0%8F%E5%86%89%E9%9D%A0%E4%B8%80%E5%BC%A0%E8%84%B8%E5%9C%A8%E5%8C%97%E8%88%9E%E8%BA%BA%E5%B9%B3%E4%B8%83%E5%B9%B4%23) `230.6K 🔥`
1. [特斯拉再度产销失衡](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89%E5%86%8D%E5%BA%A6%E4%BA%A7%E9%94%80%E5%A4%B1%E8%A1%A1%23) `92.9K 🔥`
1. [张天爱发文回应变样](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A4%A9%E7%88%B1%E5%8F%91%E6%96%87%E5%9B%9E%E5%BA%94%E5%8F%98%E6%A0%B7%23) `250.4K 🔥` `-36%`
1. [伊朗袭击美甲骨文和亚马逊数据中心](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%A2%AD%E5%87%BB%E7%BE%8E%E7%94%B2%E9%AA%A8%E6%96%87%E5%92%8C%E4%BA%9A%E9%A9%AC%E9%80%8A%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%23) `231.0K 🔥` `-38%`
1. [女子流清水鼻涕20天竟是脑脊液](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%B5%81%E6%B8%85%E6%B0%B4%E9%BC%BB%E6%B6%9520%E5%A4%A9%E7%AB%9F%E6%98%AF%E8%84%91%E8%84%8A%E6%B6%B2%23) `127.1K 🔥` `-60%`
1. [男子出轨染病给女友同意赔50万又后悔](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%87%BA%E8%BD%A8%E6%9F%93%E7%97%85%E7%BB%99%E5%A5%B3%E5%8F%8B%E5%90%8C%E6%84%8F%E8%B5%9450%E4%B8%87%E5%8F%88%E5%90%8E%E6%82%94%23) `113.3K 🔥` `-33%`
1. [王楚然突发身体不适](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%AA%81%E5%8F%91%E8%BA%AB%E4%BD%93%E4%B8%8D%E9%80%82%23) `101.7K 🔥` `-21%`
1. [jennie比基尼大片](https://s.weibo.com/weibo?q=%23jennie%E6%AF%94%E5%9F%BA%E5%B0%BC%E5%A4%A7%E7%89%87%23) `95.5K 🔥` `-57%`
1. [伊朗真正意义上的核武器](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%9C%9F%E6%AD%A3%E6%84%8F%E4%B9%89%E4%B8%8A%E7%9A%84%E6%A0%B8%E6%AD%A6%E5%99%A8%23) `89.4K 🔥` `-56%`
1. [优思益代言人 (Yousiyi spokesperson)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E6%80%9D%E7%9B%8A%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `82.1K 🔥` `-49%`

Updated at 2026-04-03 12:37:02

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
