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

1. [心有凌犀选铂智7 (If you have a strong heart, choose Platinum Wisdom 7)](https://s.weibo.com/weibo?q=%23%E5%BF%83%E6%9C%89%E5%87%8C%E7%8A%80%E9%80%89%E9%93%82%E6%99%BA7%23) `286.5K 🔥` `NEW`
1. [北京大学发文祝贺王虹邓煜](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%A4%A7%E5%AD%A6%E5%8F%91%E6%96%87%E7%A5%9D%E8%B4%BA%E7%8E%8B%E8%99%B9%E9%82%93%E7%85%9C%23) `45.0K 🔥` `NEW`
1. [詹姆斯加盟76人 (James joins 76ers)](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E5%8A%A0%E7%9B%9F76%E4%BA%BA%23) `712.2K 🔥` `+106%`
1. [方星海涉嫌严重违纪违法 (Fang Xinghai is suspected of serious violations of discipline and law)](https://s.weibo.com/weibo?q=%23%E6%96%B9%E6%98%9F%E6%B5%B7%E6%B6%89%E5%AB%8C%E4%B8%A5%E9%87%8D%E8%BF%9D%E7%BA%AA%E8%BF%9D%E6%B3%95%23) `414.6K 🔥` `+93%`
1. [我国首条穿越长江高铁隧道贯通 (my country's first high-speed railway tunnel crossing the Yangtze River is completed)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E9%A6%96%E6%9D%A1%E7%A9%BF%E8%B6%8A%E9%95%BF%E6%B1%9F%E9%AB%98%E9%93%81%E9%9A%A7%E9%81%93%E8%B4%AF%E9%80%9A%23) `341.5K 🔥` `+140%`
1. [林依轮复刻白鹿周生如故红衣造型](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BE%9D%E8%BD%AE%E5%A4%8D%E5%88%BB%E7%99%BD%E9%B9%BF%E5%91%A8%E7%94%9F%E5%A6%82%E6%95%85%E7%BA%A2%E8%A1%A3%E9%80%A0%E5%9E%8B%23) `229.1K 🔥` `+99%`
1. [詹姆斯发长文](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E5%8F%91%E9%95%BF%E6%96%87%23) `223.1K 🔥` `+58%`
1. [歌手排名](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%8E%92%E5%90%8D%23) `190.3K 🔥` `+84%`
1. [微信撤回消息后可删除提示字](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E6%92%A4%E5%9B%9E%E6%B6%88%E6%81%AF%E5%90%8E%E5%8F%AF%E5%88%A0%E9%99%A4%E6%8F%90%E7%A4%BA%E5%AD%97%23) `174.7K 🔥` `+40%`
1. [一招区分动物奶油和植物奶油](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%8B%9B%E5%8C%BA%E5%88%86%E5%8A%A8%E7%89%A9%E5%A5%B6%E6%B2%B9%E5%92%8C%E6%A4%8D%E7%89%A9%E5%A5%B6%E6%B2%B9%23) `143.8K 🔥` `+96%`
1. [感觉宋威龙好会谈恋爱 (I feel like Song Weilong is good at dating)](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E5%AE%8B%E5%A8%81%E9%BE%99%E5%A5%BD%E4%BC%9A%E8%B0%88%E6%81%8B%E7%88%B1%23) `140.0K 🔥` `+220%`
1. [詹姆斯底薪](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E5%BA%95%E8%96%AA%23) `61.7K 🔥` `+40%`
1. [全宇宙最阴的物件 (The most sinister object in the universe)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%AE%87%E5%AE%99%E6%9C%80%E9%98%B4%E7%9A%84%E7%89%A9%E4%BB%B6%23) `61.6K 🔥` `+40%`
1. [男生中考699分偷偷改志愿读中职](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E4%B8%AD%E8%80%83699%E5%88%86%E5%81%B7%E5%81%B7%E6%94%B9%E5%BF%97%E6%84%BF%E8%AF%BB%E4%B8%AD%E8%81%8C%23) `61.5K 🔥` `+40%`
1. [出师表翻译成日语再翻回来 (Translate the apprenticeship list into Japanese and back again)](https://s.weibo.com/weibo?q=%23%E5%87%BA%E5%B8%88%E8%A1%A8%E7%BF%BB%E8%AF%91%E6%88%90%E6%97%A5%E8%AF%AD%E5%86%8D%E7%BF%BB%E5%9B%9E%E6%9D%A5%23) `61.3K 🔥` `+40%`
1. [韦东奕课后向王虹追问请教 (Wei Dongyi asked Wang Hong for advice after class)](https://s.weibo.com/weibo?q=%23%E9%9F%A6%E4%B8%9C%E5%A5%95%E8%AF%BE%E5%90%8E%E5%90%91%E7%8E%8B%E8%99%B9%E8%BF%BD%E9%97%AE%E8%AF%B7%E6%95%99%23) `61.2K 🔥` `+40%`
1. [台风红霞逼近广东强度将爆发](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%BA%A2%E9%9C%9E%E9%80%BC%E8%BF%91%E5%B9%BF%E4%B8%9C%E5%BC%BA%E5%BA%A6%E5%B0%86%E7%88%86%E5%8F%91%23) `61.1K 🔥` `+54%`
1. [白鹿真发长度 (White deer real hair length)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%9C%9F%E5%8F%91%E9%95%BF%E5%BA%A6%23) `55.6K 🔥` `+48%`
1. [汪苏泷肩带掉了](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E8%82%A9%E5%B8%A6%E6%8E%89%E4%BA%86%23) `55.6K 🔥` `+82%`
1. [峰学蔚来武亮住院](https://s.weibo.com/weibo?q=%23%E5%B3%B0%E5%AD%A6%E8%94%9A%E6%9D%A5%E6%AD%A6%E4%BA%AE%E4%BD%8F%E9%99%A2%23) `54.4K 🔥` `+71%`
1. [每周2天少吃坚持一月瘦5斤 (Eat less 2 days a week and lose 5 pounds in a month)](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%91%A82%E5%A4%A9%E5%B0%91%E5%90%83%E5%9D%9A%E6%8C%81%E4%B8%80%E6%9C%88%E7%98%A65%E6%96%A4%23) `51.6K 🔥` `+47%`
1. [父亲为初恋想离婚要分女儿630万房款](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E4%B8%BA%E5%88%9D%E6%81%8B%E6%83%B3%E7%A6%BB%E5%A9%9A%E8%A6%81%E5%88%86%E5%A5%B3%E5%84%BF630%E4%B8%87%E6%88%BF%E6%AC%BE%23) `51.6K 🔥` `+48%`
1. [头天晚上把明天衣服叠好的人](https://s.weibo.com/weibo?q=%23%E5%A4%B4%E5%A4%A9%E6%99%9A%E4%B8%8A%E6%8A%8A%E6%98%8E%E5%A4%A9%E8%A1%A3%E6%9C%8D%E5%8F%A0%E5%A5%BD%E7%9A%84%E4%BA%BA%23) `50.7K 🔥` `+45%`
1. [张凌赫演的生理性面部抽搐](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%BC%94%E7%9A%84%E7%94%9F%E7%90%86%E6%80%A7%E9%9D%A2%E9%83%A8%E6%8A%BD%E6%90%90%23) `47.5K 🔥` `+50%`
1. [小伙在土耳其为孕妻买甜品被刺6刀 (Man stabbed 6 times in Türkiye while buying dessert for pregnant wife)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E5%9C%A8%E5%9C%9F%E8%80%B3%E5%85%B6%E4%B8%BA%E5%AD%95%E5%A6%BB%E4%B9%B0%E7%94%9C%E5%93%81%E8%A2%AB%E5%88%BA6%E5%88%80%23) `46.7K 🔥` `+33%`
1. [过分对人执着是很土的一件事](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%88%86%E5%AF%B9%E4%BA%BA%E6%89%A7%E7%9D%80%E6%98%AF%E5%BE%88%E5%9C%9F%E7%9A%84%E4%B8%80%E4%BB%B6%E4%BA%8B%23) `45.9K 🔥` `+38%`
1. [射雕英雄传侠之大者全网收视榜](https://s.weibo.com/weibo?q=%23%E5%B0%84%E9%9B%95%E8%8B%B1%E9%9B%84%E4%BC%A0%E4%BE%A0%E4%B9%8B%E5%A4%A7%E8%80%85%E5%85%A8%E7%BD%91%E6%94%B6%E8%A7%86%E6%A6%9C%23) `45.0K 🔥` `+48%`
1. [耳帝评价歌手](https://s.weibo.com/weibo?q=%23%E8%80%B3%E5%B8%9D%E8%AF%84%E4%BB%B7%E6%AD%8C%E6%89%8B%23) `44.9K 🔥` `+47%`
1. [王虹告诉我们天才可以云淡风轻](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%99%B9%E5%91%8A%E8%AF%89%E6%88%91%E4%BB%AC%E5%A4%A9%E6%89%8D%E5%8F%AF%E4%BB%A5%E4%BA%91%E6%B7%A1%E9%A3%8E%E8%BD%BB%23) `44.9K 🔥` `+47%`
1. [把豆包逼出来幸福者退让了 (The happy ones gave in after forcing the bean bag out.)](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E8%B1%86%E5%8C%85%E9%80%BC%E5%87%BA%E6%9D%A5%E5%B9%B8%E7%A6%8F%E8%80%85%E9%80%80%E8%AE%A9%E4%BA%86%23) `44.9K 🔥` `+31%`
1. [爸妈吵架都走了男孩抱妹妹找奶奶 (After the parents quarreled and left, the boy hugged his sister and went to find his grandma.)](https://s.weibo.com/weibo?q=%23%E7%88%B8%E5%A6%88%E5%90%B5%E6%9E%B6%E9%83%BD%E8%B5%B0%E4%BA%86%E7%94%B7%E5%AD%A9%E6%8A%B1%E5%A6%B9%E5%A6%B9%E6%89%BE%E5%A5%B6%E5%A5%B6%23) `44.9K 🔥` `+48%`
1. [女生没结婚席上问亲戚谁笑话我妈了 (When a girl didn’t ask her relatives at the wedding party, who was laughing at my mother?)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E6%B2%A1%E7%BB%93%E5%A9%9A%E5%B8%AD%E4%B8%8A%E9%97%AE%E4%BA%B2%E6%88%9A%E8%B0%81%E7%AC%91%E8%AF%9D%E6%88%91%E5%A6%88%E4%BA%86%23) `44.9K 🔥` `+47%`
1. [张凌赫王楚然回复那英](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%9B%9E%E5%A4%8D%E9%82%A3%E8%8B%B1%23) `44.9K 🔥` `+47%`
1. [演唱会黄牛被抓时面前好几排手机](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%94%B1%E4%BC%9A%E9%BB%84%E7%89%9B%E8%A2%AB%E6%8A%93%E6%97%B6%E9%9D%A2%E5%89%8D%E5%A5%BD%E5%87%A0%E6%8E%92%E6%89%8B%E6%9C%BA%23) `44.9K 🔥` `+47%`
1. [朋友圈开始用AI照片代替旅游照 (Moments began to use AI photos to replace travel photos)](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%BC%80%E5%A7%8B%E7%94%A8AI%E7%85%A7%E7%89%87%E4%BB%A3%E6%9B%BF%E6%97%85%E6%B8%B8%E7%85%A7%23) `44.8K 🔥` `+47%`
1. [窦靖童第一 (Dou Jingtong first)](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%E7%AC%AC%E4%B8%80%23) `44.8K 🔥` `+47%`
1. [韩国初中生KTV遭10名同学围殴3小时](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%88%9D%E4%B8%AD%E7%94%9FKTV%E9%81%AD10%E5%90%8D%E5%90%8C%E5%AD%A6%E5%9B%B4%E6%AE%B43%E5%B0%8F%E6%97%B6%23) `44.8K 🔥` `+47%`
1. [49岁男子杀害82岁老师细节曝光 (Details of 49-year-old man’s murder of 82-year-old teacher revealed)](https://s.weibo.com/weibo?q=%2349%E5%B2%81%E7%94%B7%E5%AD%90%E6%9D%80%E5%AE%B382%E5%B2%81%E8%80%81%E5%B8%88%E7%BB%86%E8%8A%82%E6%9B%9D%E5%85%89%23) `44.8K 🔥` `+47%`
1. [孙颖莎俱乐部回应伤情](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E4%BF%B1%E4%B9%90%E9%83%A8%E5%9B%9E%E5%BA%94%E4%BC%A4%E6%83%85%23) `44.8K 🔥` `+47%`
1. [孙颖莎说我们国乒是一个整体](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E8%AF%B4%E6%88%91%E4%BB%AC%E5%9B%BD%E4%B9%92%E6%98%AF%E4%B8%80%E4%B8%AA%E6%95%B4%E4%BD%93%23) `44.7K 🔥` `+47%`
1. [Gucci给这一秒过火投广 (Gucci went overboard with advertising for this second)](https://s.weibo.com/weibo?q=%23Gucci%E7%BB%99%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E6%8A%95%E5%B9%BF%23) `44.7K 🔥` `+47%`
1. [荷兰弟说逛上海是赞达亚做攻略 (The Dutch brother said that Zendaya is the guide when visiting Shanghai.)](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E5%BC%9F%E8%AF%B4%E9%80%9B%E4%B8%8A%E6%B5%B7%E6%98%AF%E8%B5%9E%E8%BE%BE%E4%BA%9A%E5%81%9A%E6%94%BB%E7%95%A5%23) `44.7K 🔥` `+47%`
1. [薛之谦演唱会](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E6%BC%94%E5%94%B1%E4%BC%9A%23) `44.7K 🔥` `+47%`
1. [李宏毅剧宣表情](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%8F%E6%AF%85%E5%89%A7%E5%AE%A3%E8%A1%A8%E6%83%85%23) `44.7K 🔥` `+47%`
1. [Wenbo Bin](https://s.weibo.com/weibo?q=%23Wenbo%20Bin%23) `44.6K 🔥` `+47%`
1. [靠出轨剧情出海小游戏日入338万](https://s.weibo.com/weibo?q=%23%E9%9D%A0%E5%87%BA%E8%BD%A8%E5%89%A7%E6%83%85%E5%87%BA%E6%B5%B7%E5%B0%8F%E6%B8%B8%E6%88%8F%E6%97%A5%E5%85%A5338%E4%B8%87%23) `44.6K 🔥` `+28%`
1. [RedVelvet披萨盒专辑创意简直是天才 (The RedVelvet pizza box album idea is pure genius)](https://s.weibo.com/weibo?q=%23RedVelvet%E6%8A%AB%E8%90%A8%E7%9B%92%E4%B8%93%E8%BE%91%E5%88%9B%E6%84%8F%E7%AE%80%E7%9B%B4%E6%98%AF%E5%A4%A9%E6%89%8D%23) `44.6K 🔥` `+47%`
1. [赵小童是天使 (Zhao Xiaotong is an angel)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%B0%8F%E7%AB%A5%E6%98%AF%E5%A4%A9%E4%BD%BF%23) `59.3K 🔥`
1. [76人阵容](https://s.weibo.com/weibo?q=%2376%E4%BA%BA%E9%98%B5%E5%AE%B9%23) `52.7K 🔥`
1. [年会不能停2口碑](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E4%BC%9A%E4%B8%8D%E8%83%BD%E5%81%9C2%E5%8F%A3%E7%A2%91%23) `49.3K 🔥`
1. [歌手 孙楠](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%20%E5%AD%99%E6%A5%A0%23) `44.7K 🔥` `-54%`

Updated at 2026-07-25 06:45:40

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
