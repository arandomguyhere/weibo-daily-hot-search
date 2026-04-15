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

1. [百万网红称取消对骗B太大山女孩资助 (Millions of Internet celebrities said they would cancel funding for the girl who deceived B Taishan)](https://s.weibo.com/weibo?q=%23%E7%99%BE%E4%B8%87%E7%BD%91%E7%BA%A2%E7%A7%B0%E5%8F%96%E6%B6%88%E5%AF%B9%E9%AA%97B%E5%A4%AA%E5%A4%A7%E5%B1%B1%E5%A5%B3%E5%AD%A9%E8%B5%84%E5%8A%A9%23) `754.1K 🔥` `NEW`
1. [5人虚构继母虐待女孩关狗笼被抓](https://s.weibo.com/weibo?q=%235%E4%BA%BA%E8%99%9A%E6%9E%84%E7%BB%A7%E6%AF%8D%E8%99%90%E5%BE%85%E5%A5%B3%E5%AD%A9%E5%85%B3%E7%8B%97%E7%AC%BC%E8%A2%AB%E6%8A%93%23) `217.4K 🔥` `NEW`
1. [WST 命苦](https://s.weibo.com/weibo?q=%23WST%20%E5%91%BD%E8%8B%A6%23) `114.3K 🔥` `NEW`
1. [DYG 误闯天家](https://s.weibo.com/weibo?q=%23DYG%20%E8%AF%AF%E9%97%AF%E5%A4%A9%E5%AE%B6%23) `111.6K 🔥` `NEW`
1. [DeepSeek高薪招聘数据中心人才](https://s.weibo.com/weibo?q=%23DeepSeek%E9%AB%98%E8%96%AA%E6%8B%9B%E8%81%98%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%E4%BA%BA%E6%89%8D%23) `109.9K 🔥` `NEW`
1. [80万开店倒闭又投40万开店小伙发声](https://s.weibo.com/weibo?q=%2380%E4%B8%87%E5%BC%80%E5%BA%97%E5%80%92%E9%97%AD%E5%8F%88%E6%8A%9540%E4%B8%87%E5%BC%80%E5%BA%97%E5%B0%8F%E4%BC%99%E5%8F%91%E5%A3%B0%23) `107.9K 🔥` `NEW`
1. [谈莉娜孕35周胎位不正产检落泪](https://s.weibo.com/weibo?q=%23%E8%B0%88%E8%8E%89%E5%A8%9C%E5%AD%9535%E5%91%A8%E8%83%8E%E4%BD%8D%E4%B8%8D%E6%AD%A3%E4%BA%A7%E6%A3%80%E8%90%BD%E6%B3%AA%23) `107.2K 🔥` `NEW`
1. [蓝莓价格卷疯了](https://s.weibo.com/weibo?q=%23%E8%93%9D%E8%8E%93%E4%BB%B7%E6%A0%BC%E5%8D%B7%E7%96%AF%E4%BA%86%23) `90.7K 🔥` `NEW`
1. [郭晶晶现身沃尔沃99周年庆典](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%B6%E6%99%B6%E7%8E%B0%E8%BA%AB%E6%B2%83%E5%B0%94%E6%B2%8399%E5%91%A8%E5%B9%B4%E5%BA%86%E5%85%B8%23) `88.2K 🔥` `NEW`
1. [8岁女童化疗前冻存卵巢组织](https://s.weibo.com/weibo?q=%238%E5%B2%81%E5%A5%B3%E7%AB%A5%E5%8C%96%E7%96%97%E5%89%8D%E5%86%BB%E5%AD%98%E5%8D%B5%E5%B7%A2%E7%BB%84%E7%BB%87%23) `81.2K 🔥` `NEW`
1. [RW签运 (RW signing)](https://s.weibo.com/weibo?q=%23RW%E7%AD%BE%E8%BF%90%23) `78.6K 🔥` `NEW`
1. [24岁抗癌博主徐平安去世](https://s.weibo.com/weibo?q=%2324%E5%B2%81%E6%8A%97%E7%99%8C%E5%8D%9A%E4%B8%BB%E5%BE%90%E5%B9%B3%E5%AE%89%E5%8E%BB%E4%B8%96%23) `76.7K 🔥` `NEW`
1. [男子遭开门杀碾压身亡目击者发声](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%81%AD%E5%BC%80%E9%97%A8%E6%9D%80%E7%A2%BE%E5%8E%8B%E8%BA%AB%E4%BA%A1%E7%9B%AE%E5%87%BB%E8%80%85%E5%8F%91%E5%A3%B0%23) `75.9K 🔥` `NEW`
1. [印度一男子举铁管赶猴碰高压线身亡](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E4%B8%80%E7%94%B7%E5%AD%90%E4%B8%BE%E9%93%81%E7%AE%A1%E8%B5%B6%E7%8C%B4%E7%A2%B0%E9%AB%98%E5%8E%8B%E7%BA%BF%E8%BA%AB%E4%BA%A1%23) `66.9K 🔥` `NEW`
1. [被臭味yue上热搜的记者发声](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E8%87%AD%E5%91%B3yue%E4%B8%8A%E7%83%AD%E6%90%9C%E7%9A%84%E8%AE%B0%E8%80%85%E5%8F%91%E5%A3%B0%23) `64.8K 🔥` `NEW`
1. [乙肝是肝癌的一大诱因](https://s.weibo.com/weibo?q=%23%E4%B9%99%E8%82%9D%E6%98%AF%E8%82%9D%E7%99%8C%E7%9A%84%E4%B8%80%E5%A4%A7%E8%AF%B1%E5%9B%A0%23) `62.3K 🔥` `NEW`
1. [吕严一口吃一个包子](https://s.weibo.com/weibo?q=%23%E5%90%95%E4%B8%A5%E4%B8%80%E5%8F%A3%E5%90%83%E4%B8%80%E4%B8%AA%E5%8C%85%E5%AD%90%23) `61.5K 🔥` `NEW`
1. [黄金还要折腾多久](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%BF%98%E8%A6%81%E6%8A%98%E8%85%BE%E5%A4%9A%E4%B9%85%23) `59.2K 🔥` `NEW`
1. [贺峻霖完全青春男大](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E5%AE%8C%E5%85%A8%E9%9D%92%E6%98%A5%E7%94%B7%E5%A4%A7%23) `56.3K 🔥` `NEW`
1. [宁德时代拟300亿设立时代资源集团](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E6%8B%9F300%E4%BA%BF%E8%AE%BE%E7%AB%8B%E6%97%B6%E4%BB%A3%E8%B5%84%E6%BA%90%E9%9B%86%E5%9B%A2%23) `55.9K 🔥` `NEW`
1. [宁德时代连发多条公告 (CATL issued multiple announcements)](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E8%BF%9E%E5%8F%91%E5%A4%9A%E6%9D%A1%E5%85%AC%E5%91%8A%23) `55.7K 🔥` `NEW`
1. [法国罕见全票通过文物归还法案 (France passes a rare unanimous vote to repatriate cultural relics)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E7%BD%95%E8%A7%81%E5%85%A8%E7%A5%A8%E9%80%9A%E8%BF%87%E6%96%87%E7%89%A9%E5%BD%92%E8%BF%98%E6%B3%95%E6%A1%88%23) `402.3K 🔥` `+236%`
1. [田曦薇张凌赫庆功宴小动作](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%BA%86%E5%8A%9F%E5%AE%B4%E5%B0%8F%E5%8A%A8%E4%BD%9C%23) `217.4K 🔥` `+70%`
1. [B太回应曝光大山女孩事件](https://s.weibo.com/weibo?q=%23B%E5%A4%AA%E5%9B%9E%E5%BA%94%E6%9B%9D%E5%85%89%E5%A4%A7%E5%B1%B1%E5%A5%B3%E5%AD%A9%E4%BA%8B%E4%BB%B6%23) `127.0K 🔥` `+88%`
1. [美伊原则上同意延长停火](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%8E%9F%E5%88%99%E4%B8%8A%E5%90%8C%E6%84%8F%E5%BB%B6%E9%95%BF%E5%81%9C%E7%81%AB%23) `86.0K 🔥` `+27%`
1. [美国将退还超1万亿元关税 (The United States will refund more than 1 trillion yuan in tariffs)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%B0%86%E9%80%80%E8%BF%98%E8%B6%851%E4%B8%87%E4%BA%BF%E5%85%83%E5%85%B3%E7%A8%8E%23) `1.0M 🔥`
1. [广交会增设智能穿戴等9大专区](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%BA%A4%E4%BC%9A%E5%A2%9E%E8%AE%BE%E6%99%BA%E8%83%BD%E7%A9%BF%E6%88%B4%E7%AD%899%E5%A4%A7%E4%B8%93%E5%8C%BA%23) `667.8K 🔥`
1. [陈伟霆解锁新身份](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E8%A7%A3%E9%94%81%E6%96%B0%E8%BA%AB%E4%BB%BD%23) `667.2K 🔥`
1. [阚清子孙怡还没和好吗](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%AD%99%E6%80%A1%E8%BF%98%E6%B2%A1%E5%92%8C%E5%A5%BD%E5%90%97%23) `634.9K 🔥`
1. [是最脏排行榜不是必吃榜](https://s.weibo.com/weibo?q=%23%E6%98%AF%E6%9C%80%E8%84%8F%E6%8E%92%E8%A1%8C%E6%A6%9C%E4%B8%8D%E6%98%AF%E5%BF%85%E5%90%83%E6%A6%9C%23) `347.6K 🔥`
1. [骑车遭开门杀致1人被碾压身亡](https://s.weibo.com/weibo?q=%23%E9%AA%91%E8%BD%A6%E9%81%AD%E5%BC%80%E9%97%A8%E6%9D%80%E8%87%B41%E4%BA%BA%E8%A2%AB%E7%A2%BE%E5%8E%8B%E8%BA%AB%E4%BA%A1%23) `113.6K 🔥`
1. [唐艺昕产后两个月没有吃过米饭](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E4%BA%A7%E5%90%8E%E4%B8%A4%E4%B8%AA%E6%9C%88%E6%B2%A1%E6%9C%89%E5%90%83%E8%BF%87%E7%B1%B3%E9%A5%AD%23) `112.9K 🔥`
1. [白鹿蕾丝露肩 (White deer lace off the shoulder)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%95%BE%E4%B8%9D%E9%9C%B2%E8%82%A9%23) `111.1K 🔥`
1. [白日提灯 双结局 (Lantern by Day Double Ending)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%20%E5%8F%8C%E7%BB%93%E5%B1%80%23) `110.6K 🔥`
1. [何润东谈张凌赫被评粉底液将军](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E8%B0%88%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%A2%AB%E8%AF%84%E7%B2%89%E5%BA%95%E6%B6%B2%E5%B0%86%E5%86%9B%23) `107.7K 🔥`
1. [母亲喊女儿吃饭才惊觉其已遇害530天 (The mother called her daughter for dinner only to realize that it had been 530 days since her death)](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E5%96%8A%E5%A5%B3%E5%84%BF%E5%90%83%E9%A5%AD%E6%89%8D%E6%83%8A%E8%A7%89%E5%85%B6%E5%B7%B2%E9%81%87%E5%AE%B3530%E5%A4%A9%23) `106.1K 🔥`
1. [刘耀文空降](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E7%A9%BA%E9%99%8D%23) `106.1K 🔥`
1. [何润东说翻红后接到很多工作邀约](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E8%AF%B4%E7%BF%BB%E7%BA%A2%E5%90%8E%E6%8E%A5%E5%88%B0%E5%BE%88%E5%A4%9A%E5%B7%A5%E4%BD%9C%E9%82%80%E7%BA%A6%23) `90.1K 🔥`
1. [曝宋宁峰近况 (Revealing Song Ningfeng’s recent situation)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%AE%8B%E5%AE%81%E5%B3%B0%E8%BF%91%E5%86%B5%23) `86.4K 🔥`
1. [by2空中劈叉直接给我看傻了](https://s.weibo.com/weibo?q=%23by2%E7%A9%BA%E4%B8%AD%E5%8A%88%E5%8F%89%E7%9B%B4%E6%8E%A5%E7%BB%99%E6%88%91%E7%9C%8B%E5%82%BB%E4%BA%86%23) `84.5K 🔥`
1. [万能抑制食欲法 (Universal Appetite Suppressant)](https://s.weibo.com/weibo?q=%23%E4%B8%87%E8%83%BD%E6%8A%91%E5%88%B6%E9%A3%9F%E6%AC%B2%E6%B3%95%23) `114.4K 🔥` `-44%`
1. [孟子义李昀锐 等风热吻你 (Meng Ziyi and Li Yunrui waiting for the wind to kiss you passionately)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%20%E7%AD%89%E9%A3%8E%E7%83%AD%E5%90%BB%E4%BD%A0%23) `112.2K 🔥` `-65%`
1. [婴儿哭闹20分钟男乘客30秒哄好](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%84%BF%E5%93%AD%E9%97%B920%E5%88%86%E9%92%9F%E7%94%B7%E4%B9%98%E5%AE%A230%E7%A7%92%E5%93%84%E5%A5%BD%23) `109.1K 🔥` `-60%`
1. [机器人切除肿瘤不彻底患者去世](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%88%87%E9%99%A4%E8%82%BF%E7%98%A4%E4%B8%8D%E5%BD%BB%E5%BA%95%E6%82%A3%E8%80%85%E5%8E%BB%E4%B8%96%23) `108.7K 🔥` `-73%`
1. [姚安娜代言华为 (Anna Yao endorses Huawei)](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E5%AE%89%E5%A8%9C%E4%BB%A3%E8%A8%80%E5%8D%8E%E4%B8%BA%23) `98.0K 🔥` `-27%`
1. [在德读硕中国小伙多次下药迷奸女友 (A Chinese guy studying for a master's degree in Germany drugged and raped his girlfriend multiple times)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%BE%B7%E8%AF%BB%E7%A1%95%E4%B8%AD%E5%9B%BD%E5%B0%8F%E4%BC%99%E5%A4%9A%E6%AC%A1%E4%B8%8B%E8%8D%AF%E8%BF%B7%E5%A5%B8%E5%A5%B3%E5%8F%8B%23) `72.9K 🔥` `-31%`
1. [朱一龙直播紧张到腿抖](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E7%9B%B4%E6%92%AD%E7%B4%A7%E5%BC%A0%E5%88%B0%E8%85%BF%E6%8A%96%23) `71.7K 🔥` `-31%`
1. [痞幼胖了17斤](https://s.weibo.com/weibo?q=%23%E7%97%9E%E5%B9%BC%E8%83%96%E4%BA%8617%E6%96%A4%23) `69.4K 🔥` `-21%`
1. [唐禹哲承认逃兵役](https://s.weibo.com/weibo?q=%23%E5%94%90%E7%A6%B9%E5%93%B2%E6%89%BF%E8%AE%A4%E9%80%83%E5%85%B5%E5%BD%B9%23) `64.7K 🔥` `-27%`
1. [郑丽文返台后穿大陆定制中山装亮相 (Cheng Lai-wen wears a custom-made Chinese tunic suit after returning to Taiwan)](https://s.weibo.com/weibo?q=%23%E9%83%91%E4%B8%BD%E6%96%87%E8%BF%94%E5%8F%B0%E5%90%8E%E7%A9%BF%E5%A4%A7%E9%99%86%E5%AE%9A%E5%88%B6%E4%B8%AD%E5%B1%B1%E8%A3%85%E4%BA%AE%E7%9B%B8%23) `64.5K 🔥` `-38%`
1. [曝张豆豆两年前有的宝宝](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BC%A0%E8%B1%86%E8%B1%86%E4%B8%A4%E5%B9%B4%E5%89%8D%E6%9C%89%E7%9A%84%E5%AE%9D%E5%AE%9D%23) `56.4K 🔥` `-39%`
1. [蜜语纪热度超过月鳞绮纪](https://s.weibo.com/weibo?q=%23%E8%9C%9C%E8%AF%AD%E7%BA%AA%E7%83%AD%E5%BA%A6%E8%B6%85%E8%BF%87%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%23) `56.0K 🔥` `-27%`

Updated at 2026-04-15 23:40:22

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
