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

1. [安慕希 百万撤离 (Anmuxi million evacuated)](https://s.weibo.com/weibo?q=%23%E5%AE%89%E6%85%95%E5%B8%8C%20%E7%99%BE%E4%B8%87%E6%92%A4%E7%A6%BB%23) `3.4M 🔥` `NEW`
1. [婴儿的握力能有多大](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%84%BF%E7%9A%84%E6%8F%A1%E5%8A%9B%E8%83%BD%E6%9C%89%E5%A4%9A%E5%A4%A7%23) `499.8K 🔥` `NEW`
1. [者来女 歌手2026合伙人](https://s.weibo.com/weibo?q=%23%E8%80%85%E6%9D%A5%E5%A5%B3%20%E6%AD%8C%E6%89%8B2026%E5%90%88%E4%BC%99%E4%BA%BA%23) `436.8K 🔥` `NEW`
1. [詹姆斯回应雷霆3比0湖人](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E5%9B%9E%E5%BA%94%E9%9B%B7%E9%9C%863%E6%AF%940%E6%B9%96%E4%BA%BA%23) `245.6K 🔥` `NEW`
1. [这下是真不认识张钧甯了](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%8B%E6%98%AF%E7%9C%9F%E4%B8%8D%E8%AE%A4%E8%AF%86%E5%BC%A0%E9%92%A7%E7%94%AF%E4%BA%86%23) `245.0K 🔥` `NEW`
1. [白鹿凌晨三点还在练歌](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%87%8C%E6%99%A8%E4%B8%89%E7%82%B9%E8%BF%98%E5%9C%A8%E7%BB%83%E6%AD%8C%23) `238.1K 🔥` `NEW`
1. [47岁女子10次妊娠失败终生子](https://s.weibo.com/weibo?q=%2347%E5%B2%81%E5%A5%B3%E5%AD%9010%E6%AC%A1%E5%A6%8A%E5%A8%A0%E5%A4%B1%E8%B4%A5%E7%BB%88%E7%94%9F%E5%AD%90%23) `236.9K 🔥` `NEW`
1. [桂林文旅为何不能直面一张脏凳子](https://s.weibo.com/weibo?q=%23%E6%A1%82%E6%9E%97%E6%96%87%E6%97%85%E4%B8%BA%E4%BD%95%E4%B8%8D%E8%83%BD%E7%9B%B4%E9%9D%A2%E4%B8%80%E5%BC%A0%E8%84%8F%E5%87%B3%E5%AD%90%23) `231.2K 🔥` `NEW`
1. [蓝盈莹和妈妈共用一张脸](https://s.weibo.com/weibo?q=%23%E8%93%9D%E7%9B%88%E8%8E%B9%E5%92%8C%E5%A6%88%E5%A6%88%E5%85%B1%E7%94%A8%E4%B8%80%E5%BC%A0%E8%84%B8%23) `230.3K 🔥` `NEW`
1. [虞书欣官方单独重点介绍的华人艺人](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%AE%98%E6%96%B9%E5%8D%95%E7%8B%AC%E9%87%8D%E7%82%B9%E4%BB%8B%E7%BB%8D%E7%9A%84%E5%8D%8E%E4%BA%BA%E8%89%BA%E4%BA%BA%23) `229.8K 🔥` `NEW`
1. [领克07GT公告图曝光 (Lynk & Co 07GT announcement image exposed)](https://s.weibo.com/weibo?q=%23%E9%A2%86%E5%85%8B07GT%E5%85%AC%E5%91%8A%E5%9B%BE%E6%9B%9D%E5%85%89%23) `228.8K 🔥` `NEW`
1. [紫金陈 低智商犯罪2](https://s.weibo.com/weibo?q=%23%E7%B4%AB%E9%87%91%E9%99%88%20%E4%BD%8E%E6%99%BA%E5%95%86%E7%8A%AF%E7%BD%AA2%23) `227.4K 🔥` `NEW`
1. [女子称遭侵犯为取证问其是否喜欢自己](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E9%81%AD%E4%BE%B5%E7%8A%AF%E4%B8%BA%E5%8F%96%E8%AF%81%E9%97%AE%E5%85%B6%E6%98%AF%E5%90%A6%E5%96%9C%E6%AC%A2%E8%87%AA%E5%B7%B1%23) `225.1K 🔥` `NEW`
1. [妈妈的哎永不缺席](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E7%9A%84%E5%93%8E%E6%B0%B8%E4%B8%8D%E7%BC%BA%E5%B8%AD%23) `223.3K 🔥` `NEW`
1. [去年起王暖暖已昏倒3次](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E5%B9%B4%E8%B5%B7%E7%8E%8B%E6%9A%96%E6%9A%96%E5%B7%B2%E6%98%8F%E5%80%923%E6%AC%A1%23) `222.8K 🔥` `NEW`
1. [张继科说世乒赛团体赛都是单打独斗](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%A7%E7%A7%91%E8%AF%B4%E4%B8%96%E4%B9%92%E8%B5%9B%E5%9B%A2%E4%BD%93%E8%B5%9B%E9%83%BD%E6%98%AF%E5%8D%95%E6%89%93%E7%8B%AC%E6%96%97%23) `221.1K 🔥` `NEW`
1. [张继科神预测国乒3比1赢法国](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%A7%E7%A7%91%E7%A5%9E%E9%A2%84%E6%B5%8B%E5%9B%BD%E4%B9%923%E6%AF%941%E8%B5%A2%E6%B3%95%E5%9B%BD%23) `219.8K 🔥` `NEW`
1. [王暖暖抱着孩子泪流满面](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9A%96%E6%9A%96%E6%8A%B1%E7%9D%80%E5%AD%A9%E5%AD%90%E6%B3%AA%E6%B5%81%E6%BB%A1%E9%9D%A2%23) `216.8K 🔥` `NEW`
1. [47名消费者准备正式起诉张静初](https://s.weibo.com/weibo?q=%2347%E5%90%8D%E6%B6%88%E8%B4%B9%E8%80%85%E5%87%86%E5%A4%87%E6%AD%A3%E5%BC%8F%E8%B5%B7%E8%AF%89%E5%BC%A0%E9%9D%99%E5%88%9D%23) `215.0K 🔥` `NEW`
1. [金银价格大涨](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%93%B6%E4%BB%B7%E6%A0%BC%E5%A4%A7%E6%B6%A8%23) `214.0K 🔥` `NEW`
1. [4天3名70岁员工突发心梗脑梗 (Three 70-year-old employees suffered heart attacks and cerebral infarctions in four days)](https://s.weibo.com/weibo?q=%234%E5%A4%A93%E5%90%8D70%E5%B2%81%E5%91%98%E5%B7%A5%E7%AA%81%E5%8F%91%E5%BF%83%E6%A2%97%E8%84%91%E6%A2%97%23) `212.8K 🔥` `NEW`
1. [林昀儒世乒赛铜牌](https://s.weibo.com/weibo?q=%23%E6%9E%97%E6%98%80%E5%84%92%E4%B8%96%E4%B9%92%E8%B5%9B%E9%93%9C%E7%89%8C%23) `212.0K 🔥` `NEW`
1. [32岁妈妈产后3年查出7种病](https://s.weibo.com/weibo?q=%2332%E5%B2%81%E5%A6%88%E5%A6%88%E4%BA%A7%E5%90%8E3%E5%B9%B4%E6%9F%A5%E5%87%BA7%E7%A7%8D%E7%97%85%23) `210.8K 🔥` `NEW`
1. [严浩翔新歌MV](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%96%B0%E6%AD%8CMV%23) `209.2K 🔥` `NEW`
1. [婆婆在特产里藏1万块让儿媳买手机](https://s.weibo.com/weibo?q=%23%E5%A9%86%E5%A9%86%E5%9C%A8%E7%89%B9%E4%BA%A7%E9%87%8C%E8%97%8F1%E4%B8%87%E5%9D%97%E8%AE%A9%E5%84%BF%E5%AA%B3%E4%B9%B0%E6%89%8B%E6%9C%BA%23) `205.0K 🔥` `NEW`
1. [高管一个月烧20亿Token自称惭愧](https://s.weibo.com/weibo?q=%23%E9%AB%98%E7%AE%A1%E4%B8%80%E4%B8%AA%E6%9C%88%E7%83%A720%E4%BA%BFToken%E8%87%AA%E7%A7%B0%E6%83%AD%E6%84%A7%23) `203.9K 🔥` `NEW`
1. [我妈当上了邓超MV的女主角](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%A6%88%E5%BD%93%E4%B8%8A%E4%BA%86%E9%82%93%E8%B6%85MV%E7%9A%84%E5%A5%B3%E4%B8%BB%E8%A7%92%23) `201.0K 🔥` `NEW`
1. [难怪现在在外面吃饭很少拉肚子了 (No wonder I rarely have diarrhea when eating out now.)](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E7%8E%B0%E5%9C%A8%E5%9C%A8%E5%A4%96%E9%9D%A2%E5%90%83%E9%A5%AD%E5%BE%88%E5%B0%91%E6%8B%89%E8%82%9A%E5%AD%90%E4%BA%86%23) `1.1M 🔥` `+168%`
1. [A哎 燕京啤酒是社交硬通货 (Ah, Yanjing Beer is social currency)](https://s.weibo.com/weibo?q=%23A%E5%93%8E%20%E7%87%95%E4%BA%AC%E5%95%A4%E9%85%92%E6%98%AF%E7%A4%BE%E4%BA%A4%E7%A1%AC%E9%80%9A%E8%B4%A7%23) `882.3K 🔥` `+261%`
1. [一季度全国结婚登记169.7万对](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AD%A3%E5%BA%A6%E5%85%A8%E5%9B%BD%E7%BB%93%E5%A9%9A%E7%99%BB%E8%AE%B0169.7%E4%B8%87%E5%AF%B9%23) `673.8K 🔥` `+68%`
1. [小伙连刮3天刮刮乐中百万连夜返乡](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E8%BF%9E%E5%88%AE3%E5%A4%A9%E5%88%AE%E5%88%AE%E4%B9%90%E4%B8%AD%E7%99%BE%E4%B8%87%E8%BF%9E%E5%A4%9C%E8%BF%94%E4%B9%A1%23) `243.1K 🔥` `+38%`
1. [缅甸又挖出一枚2.2公斤顶级红宝石](https://s.weibo.com/weibo?q=%23%E7%BC%85%E7%94%B8%E5%8F%88%E6%8C%96%E5%87%BA%E4%B8%80%E6%9E%9A2.2%E5%85%AC%E6%96%A4%E9%A1%B6%E7%BA%A7%E7%BA%A2%E5%AE%9D%E7%9F%B3%23) `239.9K 🔥` `+42%`
1. [DeepSeek被曝融资500亿 (DeepSeek was revealed to have raised 50 billion)](https://s.weibo.com/weibo?q=%23DeepSeek%E8%A2%AB%E6%9B%9D%E8%9E%8D%E8%B5%84500%E4%BA%BF%23) `234.6K 🔥` `+73%`
1. [鞠婧祎请张云龙喝阿黛特调 (Ju Jingyi invites Zhang Yunlong to drink Adette)](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E8%AF%B7%E5%BC%A0%E4%BA%91%E9%BE%99%E5%96%9D%E9%98%BF%E9%BB%9B%E7%89%B9%E8%B0%83%23) `208.7K 🔥` `+54%`
1. [哈啰回应员工聚会脚踩青桔美团](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%95%B0%E5%9B%9E%E5%BA%94%E5%91%98%E5%B7%A5%E8%81%9A%E4%BC%9A%E8%84%9A%E8%B8%A9%E9%9D%92%E6%A1%94%E7%BE%8E%E5%9B%A2%23) `202.2K 🔥` `+50%`
1. [先于所有人爱上你的是妈妈](https://s.weibo.com/weibo?q=%23%E5%85%88%E4%BA%8E%E6%89%80%E6%9C%89%E4%BA%BA%E7%88%B1%E4%B8%8A%E4%BD%A0%E7%9A%84%E6%98%AF%E5%A6%88%E5%A6%88%23) `898.0K 🔥`
1. [机器人有没有体面一点的打包方式](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%9C%89%E6%B2%A1%E6%9C%89%E4%BD%93%E9%9D%A2%E4%B8%80%E7%82%B9%E7%9A%84%E6%89%93%E5%8C%85%E6%96%B9%E5%BC%8F%23) `298.1K 🔥`
1. [到底谁是马雪晴啊](https://s.weibo.com/weibo?q=%23%E5%88%B0%E5%BA%95%E8%B0%81%E6%98%AF%E9%A9%AC%E9%9B%AA%E6%99%B4%E5%95%8A%23) `207.3K 🔥`
1. [原来这么多年牙齿都在负重前行](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E4%B9%88%E5%A4%9A%E5%B9%B4%E7%89%99%E9%BD%BF%E9%83%BD%E5%9C%A8%E8%B4%9F%E9%87%8D%E5%89%8D%E8%A1%8C%23) `531.3K 🔥` `-37%`
1. [母亲节](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E8%8A%82%23) `428.5K 🔥` `-25%`
1. [虞书欣G社生图](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3G%E7%A4%BE%E7%94%9F%E5%9B%BE%23) `243.9K 🔥` `-43%`
1. [陈赫回应邀请李晨上五哈](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%E5%9B%9E%E5%BA%94%E9%82%80%E8%AF%B7%E6%9D%8E%E6%99%A8%E4%B8%8A%E4%BA%94%E5%93%88%23) `241.2K 🔥` `-72%`
1. [蔡文静经纪人打电话让蔡文静下播](https://s.weibo.com/weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E7%BB%8F%E7%BA%AA%E4%BA%BA%E6%89%93%E7%94%B5%E8%AF%9D%E8%AE%A9%E8%94%A1%E6%96%87%E9%9D%99%E4%B8%8B%E6%92%AD%23) `240.7K 🔥` `-44%`
1. [田曦薇孙珍妮双女主 (Tian Xiwei and Sun Zhenni as two heroines)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%AD%99%E7%8F%8D%E5%A6%AE%E5%8F%8C%E5%A5%B3%E4%B8%BB%23) `235.6K 🔥` `-66%`
1. [叶祖新叫蔡文静醒醒](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E7%A5%96%E6%96%B0%E5%8F%AB%E8%94%A1%E6%96%87%E9%9D%99%E9%86%92%E9%86%92%23) `233.6K 🔥` `-22%`
1. [涉疫邮轮上唯一一名医生也感染了](https://s.weibo.com/weibo?q=%23%E6%B6%89%E7%96%AB%E9%82%AE%E8%BD%AE%E4%B8%8A%E5%94%AF%E4%B8%80%E4%B8%80%E5%90%8D%E5%8C%BB%E7%94%9F%E4%B9%9F%E6%84%9F%E6%9F%93%E4%BA%86%23) `233.2K 🔥` `-58%`
1. [王安宇对章若楠炫耀快杀青了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E5%AF%B9%E7%AB%A0%E8%8B%A5%E6%A5%A0%E7%82%AB%E8%80%80%E5%BF%AB%E6%9D%80%E9%9D%92%E4%BA%86%23) `226.0K 🔥` `-47%`
1. [王楚钦打哭F勒布伦 (Wang Chuqin cried F Lebrun)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%89%93%E5%93%ADF%E5%8B%92%E5%B8%83%E4%BC%A6%23) `220.0K 🔥` `-75%`
1. [张雪率车队参加儿子学校运动会](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E7%8E%87%E8%BD%A6%E9%98%9F%E5%8F%82%E5%8A%A0%E5%84%BF%E5%AD%90%E5%AD%A6%E6%A0%A1%E8%BF%90%E5%8A%A8%E4%BC%9A%23) `218.2K 🔥` `-29%`
1. [黄霄雲演出晕倒](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%9C%84%E9%9B%B2%E6%BC%94%E5%87%BA%E6%99%95%E5%80%92%23) `216.3K 🔥` `-49%`
1. [央视曝车企一次锁电可省数十亿元](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E8%BD%A6%E4%BC%81%E4%B8%80%E6%AC%A1%E9%94%81%E7%94%B5%E5%8F%AF%E7%9C%81%E6%95%B0%E5%8D%81%E4%BA%BF%E5%85%83%23) `205.6K 🔥` `-41%`

Updated at 2026-05-10 14:41:18

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
