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

1. [山西一研学车辆侧翻已致2人死亡 (A vehicle rolled over in Shanxi Yanxue University killed 2 people)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E4%B8%80%E7%A0%94%E5%AD%A6%E8%BD%A6%E8%BE%86%E4%BE%A7%E7%BF%BB%E5%B7%B2%E8%87%B42%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `1.1M 🔥` `NEW`
1. [樊振东出战欧冠半决赛](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%87%BA%E6%88%98%E6%AC%A7%E5%86%A0%E5%8D%8A%E5%86%B3%E8%B5%9B%23) `410.3K 🔥` `NEW`
1. [女孩盲道被撞摆拍细节露馅](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E7%9B%B2%E9%81%93%E8%A2%AB%E6%92%9E%E6%91%86%E6%8B%8D%E7%BB%86%E8%8A%82%E9%9C%B2%E9%A6%85%23) `342.1K 🔥` `NEW`
1. [周深郑州演唱会预售](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E9%83%91%E5%B7%9E%E6%BC%94%E5%94%B1%E4%BC%9A%E9%A2%84%E5%94%AE%23) `341.1K 🔥` `NEW`
1. [张雪机车回应捷克站成绩](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%9B%9E%E5%BA%94%E6%8D%B7%E5%85%8B%E7%AB%99%E6%88%90%E7%BB%A9%23) `310.8K 🔥` `NEW`
1. [乒乓球欧冠联赛](https://s.weibo.com/weibo?q=%23%E4%B9%92%E4%B9%93%E7%90%83%E6%AC%A7%E5%86%A0%E8%81%94%E8%B5%9B%23) `307.9K 🔥` `NEW`
1. [李冰冰回归戛纳红毯](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%86%B0%E5%86%B0%E5%9B%9E%E5%BD%92%E6%88%9B%E7%BA%B3%E7%BA%A2%E6%AF%AF%23) `306.0K 🔥` `NEW`
1. [姑姑养大侄女却扣下16万彩礼拒返还](https://s.weibo.com/weibo?q=%23%E5%A7%91%E5%A7%91%E5%85%BB%E5%A4%A7%E4%BE%84%E5%A5%B3%E5%8D%B4%E6%89%A3%E4%B8%8B16%E4%B8%87%E5%BD%A9%E7%A4%BC%E6%8B%92%E8%BF%94%E8%BF%98%23) `301.1K 🔥` `NEW`
1. [铝型材厂因暴雨被淹称损失50万](https://s.weibo.com/weibo?q=%23%E9%93%9D%E5%9E%8B%E6%9D%90%E5%8E%82%E5%9B%A0%E6%9A%B4%E9%9B%A8%E8%A2%AB%E6%B7%B9%E7%A7%B0%E6%8D%9F%E5%A4%B150%E4%B8%87%23) `294.2K 🔥` `NEW`
1. [卢伟冰爆料小米17Max](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E4%BC%9F%E5%86%B0%E7%88%86%E6%96%99%E5%B0%8F%E7%B1%B317Max%23) `291.8K 🔥` `NEW`
1. [田曦薇抽抽乐 (Tian Xiwei has fun)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%8A%BD%E6%8A%BD%E4%B9%90%23) `282.9K 🔥` `NEW`
1. [韩红基金会去年收入7.8亿支出2.9亿](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BA%A2%E5%9F%BA%E9%87%91%E4%BC%9A%E5%8E%BB%E5%B9%B4%E6%94%B6%E5%85%A57.8%E4%BA%BF%E6%94%AF%E5%87%BA2.9%E4%BA%BF%23) `261.9K 🔥` `NEW`
1. [APINK全员到场尹普美婚礼](https://s.weibo.com/weibo?q=%23APINK%E5%85%A8%E5%91%98%E5%88%B0%E5%9C%BA%E5%B0%B9%E6%99%AE%E7%BE%8E%E5%A9%9A%E7%A4%BC%23) `231.4K 🔥` `NEW`
1. [虞书欣种地吧路透](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%A7%8D%E5%9C%B0%E5%90%A7%E8%B7%AF%E9%80%8F%23) `222.5K 🔥` `NEW`
1. [全山东最重视山姆超市之人](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%B1%B1%E4%B8%9C%E6%9C%80%E9%87%8D%E8%A7%86%E5%B1%B1%E5%A7%86%E8%B6%85%E5%B8%82%E4%B9%8B%E4%BA%BA%23) `214.0K 🔥` `NEW`
1. [安顺一县城突发13级大风破历史极值](https://s.weibo.com/weibo?q=%23%E5%AE%89%E9%A1%BA%E4%B8%80%E5%8E%BF%E5%9F%8E%E7%AA%81%E5%8F%9113%E7%BA%A7%E5%A4%A7%E9%A3%8E%E7%A0%B4%E5%8E%86%E5%8F%B2%E6%9E%81%E5%80%BC%23) `209.6K 🔥` `NEW`
1. [专家建议金价大跌多买小跌少买](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E5%BB%BA%E8%AE%AE%E9%87%91%E4%BB%B7%E5%A4%A7%E8%B7%8C%E5%A4%9A%E4%B9%B0%E5%B0%8F%E8%B7%8C%E5%B0%91%E4%B9%B0%23) `189.5K 🔥` `NEW`
1. [孟子义探班陈哲远](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%8E%A2%E7%8F%AD%E9%99%88%E5%93%B2%E8%BF%9C%23) `167.6K 🔥` `NEW`
1. [男子结婚8年发现3个女儿都非亲生](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%BB%93%E5%A9%9A8%E5%B9%B4%E5%8F%91%E7%8E%B03%E4%B8%AA%E5%A5%B3%E5%84%BF%E9%83%BD%E9%9D%9E%E4%BA%B2%E7%94%9F%23) `167.5K 🔥` `NEW`
1. [姜乘澜给化妆新手的8条建议](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E4%B9%98%E6%BE%9C%E7%BB%99%E5%8C%96%E5%A6%86%E6%96%B0%E6%89%8B%E7%9A%848%E6%9D%A1%E5%BB%BA%E8%AE%AE%23) `325.8K 🔥` `+52%`
1. [歌手2026的首期歌单 (The singer’s first playlist of 2026)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%E7%9A%84%E9%A6%96%E6%9C%9F%E6%AD%8C%E5%8D%95%23) `230.7K 🔥` `+25%`
1. [GEN对战T1](https://s.weibo.com/weibo?q=%23GEN%E5%AF%B9%E6%88%98T1%23) `193.2K 🔥` `+32%`
1. [盲人女孩盲道被撞系自导自演](https://s.weibo.com/weibo?q=%23%E7%9B%B2%E4%BA%BA%E5%A5%B3%E5%AD%A9%E7%9B%B2%E9%81%93%E8%A2%AB%E6%92%9E%E7%B3%BB%E8%87%AA%E5%AF%BC%E8%87%AA%E6%BC%94%23) `824.7K 🔥`
1. [一季度数字产业实现收入9.5万亿元](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AD%A3%E5%BA%A6%E6%95%B0%E5%AD%97%E4%BA%A7%E4%B8%9A%E5%AE%9E%E7%8E%B0%E6%94%B6%E5%85%A59.5%E4%B8%87%E4%BA%BF%E5%85%83%23) `674.3K 🔥`
1. [王鹤棣深圳派发巧乐兹 (Wang Hedi distributes Qiaolezi in Shenzhen)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%B7%B1%E5%9C%B3%E6%B4%BE%E5%8F%91%E5%B7%A7%E4%B9%90%E5%85%B9%23) `603.0K 🔥`
1. [范丞丞也在吃跑男的瓜](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E4%B9%9F%E5%9C%A8%E5%90%83%E8%B7%91%E7%94%B7%E7%9A%84%E7%93%9C%23) `289.5K 🔥`
1. [碳水哥震撼中国人](https://s.weibo.com/weibo?q=%23%E7%A2%B3%E6%B0%B4%E5%93%A5%E9%9C%87%E6%92%BC%E4%B8%AD%E5%9B%BD%E4%BA%BA%23) `341.2K 🔥` `-45%`
1. [歌手首发阵容 (Singer starting lineup)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E9%A6%96%E5%8F%91%E9%98%B5%E5%AE%B9%23) `340.8K 🔥` `-70%`
1. [这几类衣服普通人尽量不要买](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%87%A0%E7%B1%BB%E8%A1%A3%E6%9C%8D%E6%99%AE%E9%80%9A%E4%BA%BA%E5%B0%BD%E9%87%8F%E4%B8%8D%E8%A6%81%E4%B9%B0%23) `338.7K 🔥` `-45%`
1. [其实孩子在小时候已经报完恩了](https://s.weibo.com/weibo?q=%23%E5%85%B6%E5%AE%9E%E5%AD%A9%E5%AD%90%E5%9C%A8%E5%B0%8F%E6%97%B6%E5%80%99%E5%B7%B2%E7%BB%8F%E6%8A%A5%E5%AE%8C%E6%81%A9%E4%BA%86%23) `338.3K 🔥` `-44%`
1. [巨力索具股价](https://s.weibo.com/weibo?q=%23%E5%B7%A8%E5%8A%9B%E7%B4%A2%E5%85%B7%E8%82%A1%E4%BB%B7%23) `337.2K 🔥` `-35%`
1. [明星个人捐款名单](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%9F%E4%B8%AA%E4%BA%BA%E6%8D%90%E6%AC%BE%E5%90%8D%E5%8D%95%23) `335.6K 🔥` `-34%`
1. [丧假 上传证明 (Bereavement Leave Upload Certificate)](https://s.weibo.com/weibo?q=%23%E4%B8%A7%E5%81%87%20%E4%B8%8A%E4%BC%A0%E8%AF%81%E6%98%8E%23) `334.6K 🔥` `-35%`
1. [李昀锐白鹿跑男十指相扣 (Li Yunrui and White Deer Runner intertwined their fingers)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E7%99%BD%E9%B9%BF%E8%B7%91%E7%94%B7%E5%8D%81%E6%8C%87%E7%9B%B8%E6%89%A3%23) `333.8K 🔥` `-46%`
1. [特朗普抵达美国现场画面](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%8A%B5%E8%BE%BE%E7%BE%8E%E5%9B%BD%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `332.3K 🔥` `-34%`
1. [宋浩然整成李佳琦了 (Song Haoran has been transformed into Li Jiaqi)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E6%B5%A9%E7%84%B6%E6%95%B4%E6%88%90%E6%9D%8E%E4%BD%B3%E7%90%A6%E4%BA%86%23) `331.5K 🔥` `-35%`
1. [张凌赫Mai晚宴合照](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%ABMai%E6%99%9A%E5%AE%B4%E5%90%88%E7%85%A7%23) `330.1K 🔥` `-24%`
1. [孙颖莎王楚钦又一荣誉公示](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%8F%88%E4%B8%80%E8%8D%A3%E8%AA%89%E5%85%AC%E7%A4%BA%23) `328.4K 🔥` `-25%`
1. [鹿晗五哈哭了](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E4%BA%94%E5%93%88%E5%93%AD%E4%BA%86%23) `327.3K 🔥` `-37%`
1. [房东发现女租客怀孕不让在家坐月子](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%9C%E5%8F%91%E7%8E%B0%E5%A5%B3%E7%A7%9F%E5%AE%A2%E6%80%80%E5%AD%95%E4%B8%8D%E8%AE%A9%E5%9C%A8%E5%AE%B6%E5%9D%90%E6%9C%88%E5%AD%90%23) `327.2K 🔥` `-35%`
1. [女子穿着带有巨大吊牌旗袍街头拍照](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A9%BF%E7%9D%80%E5%B8%A6%E6%9C%89%E5%B7%A8%E5%A4%A7%E5%90%8A%E7%89%8C%E6%97%97%E8%A2%8D%E8%A1%97%E5%A4%B4%E6%8B%8D%E7%85%A7%23) `324.8K 🔥` `-25%`
1. [等等给孙俪买瑞士卷](https://s.weibo.com/weibo?q=%23%E7%AD%89%E7%AD%89%E7%BB%99%E5%AD%99%E4%BF%AA%E4%B9%B0%E7%91%9E%E5%A3%AB%E5%8D%B7%23) `313.8K 🔥` `-37%`
1. [中方宣布普京访华日期 (China announces the date of Putin’s visit to China)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%AE%A3%E5%B8%83%E6%99%AE%E4%BA%AC%E8%AE%BF%E5%8D%8E%E6%97%A5%E6%9C%9F%23) `303.8K 🔥` `-44%`
1. [30岁女子健身房摔倒身亡 (30-year-old woman falls and dies in gym)](https://s.weibo.com/weibo?q=%2330%E5%B2%81%E5%A5%B3%E5%AD%90%E5%81%A5%E8%BA%AB%E6%88%BF%E6%91%94%E5%80%92%E8%BA%AB%E4%BA%A1%23) `225.3K 🔥` `-21%`
1. [王一博个人捐款200万 (Wang Yibo personally donated 2 million)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%B8%AA%E4%BA%BA%E6%8D%90%E6%AC%BE200%E4%B8%87%23) `220.9K 🔥` `-36%`
1. [鞠婧祎 你被人鲨了但你是齐刘海](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%20%E4%BD%A0%E8%A2%AB%E4%BA%BA%E9%B2%A8%E4%BA%86%E4%BD%86%E4%BD%A0%E6%98%AF%E9%BD%90%E5%88%98%E6%B5%B7%23) `209.6K 🔥` `-39%`
1. [林俊杰个人捐款200万 (JJ Lin personally donated 2 million)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E4%B8%AA%E4%BA%BA%E6%8D%90%E6%AC%BE200%E4%B8%87%23) `207.4K 🔥` `-52%`
1. [多家酒店做不到床单一客一换](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6%E9%85%92%E5%BA%97%E5%81%9A%E4%B8%8D%E5%88%B0%E5%BA%8A%E5%8D%95%E4%B8%80%E5%AE%A2%E4%B8%80%E6%8D%A2%23) `203.2K 🔥` `-37%`
1. [房东回应要求怀孕女租客搬走 (Landlord responds by asking pregnant female tenant to move out)](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%9C%E5%9B%9E%E5%BA%94%E8%A6%81%E6%B1%82%E6%80%80%E5%AD%95%E5%A5%B3%E7%A7%9F%E5%AE%A2%E6%90%AC%E8%B5%B0%23) `170.2K 🔥` `-29%`
1. [22人集体断供银行数千万贷款追不回](https://s.weibo.com/weibo?q=%2322%E4%BA%BA%E9%9B%86%E4%BD%93%E6%96%AD%E4%BE%9B%E9%93%B6%E8%A1%8C%E6%95%B0%E5%8D%83%E4%B8%87%E8%B4%B7%E6%AC%BE%E8%BF%BD%E4%B8%8D%E5%9B%9E%23) `165.9K 🔥` `-31%`
1. [黄圣依叶一茜的孩子是同学](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%9C%A3%E4%BE%9D%E5%8F%B6%E4%B8%80%E8%8C%9C%E7%9A%84%E5%AD%A9%E5%AD%90%E6%98%AF%E5%90%8C%E5%AD%A6%23) `155.0K 🔥` `-43%`
1. [马嘉祺 风神 (Ma Jiaqi Fengshen)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%20%E9%A3%8E%E7%A5%9E%23) `154.7K 🔥` `-50%`

Updated at 2026-05-16 19:06:39

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
