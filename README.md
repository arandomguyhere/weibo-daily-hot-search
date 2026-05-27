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

1. [聊天记录 十二生肖挑战 (Chat History Zodiac Challenge)](https://s.weibo.com/weibo?q=%23%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%20%E5%8D%81%E4%BA%8C%E7%94%9F%E8%82%96%E6%8C%91%E6%88%98%23) `755.3K 🔥` `NEW`
1. [杨紫白玉兰视后三连提](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%99%BD%E7%8E%89%E5%85%B0%E8%A7%86%E5%90%8E%E4%B8%89%E8%BF%9E%E6%8F%90%23) `462.8K 🔥` `NEW`
1. [钎城官宣演唱会](https://s.weibo.com/weibo?q=%23%E9%92%8E%E5%9F%8E%E5%AE%98%E5%AE%A3%E6%BC%94%E5%94%B1%E4%BC%9A%23) `455.2K 🔥` `NEW`
1. [京东健康618 蓝盈莹送同仁堂百万免单](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E5%81%A5%E5%BA%B7618%20%E8%93%9D%E7%9B%88%E8%8E%B9%E9%80%81%E5%90%8C%E4%BB%81%E5%A0%82%E7%99%BE%E4%B8%87%E5%85%8D%E5%8D%95%23) `454.9K 🔥` `NEW`
1. [马刺雷霆天王山之战](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%88%BA%E9%9B%B7%E9%9C%86%E5%A4%A9%E7%8E%8B%E5%B1%B1%E4%B9%8B%E6%88%98%23) `452.2K 🔥` `NEW`
1. [终于知道怎么拍照没色差了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E6%80%8E%E4%B9%88%E6%8B%8D%E7%85%A7%E6%B2%A1%E8%89%B2%E5%B7%AE%E4%BA%86%23) `450.0K 🔥` `NEW`
1. [女教师给父亲打伞为何被造谣](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%95%99%E5%B8%88%E7%BB%99%E7%88%B6%E4%BA%B2%E6%89%93%E4%BC%9E%E4%B8%BA%E4%BD%95%E8%A2%AB%E9%80%A0%E8%B0%A3%23) `448.3K 🔥` `NEW`
1. [网友去王鹤棣家炸串店玩梗我不舒服](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%8E%BB%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%AE%B6%E7%82%B8%E4%B8%B2%E5%BA%97%E7%8E%A9%E6%A2%97%E6%88%91%E4%B8%8D%E8%88%92%E6%9C%8D%23) `444.3K 🔥` `NEW`
1. [曝郑恺缺席跑男宣传当天心事重重](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%83%91%E6%81%BA%E7%BC%BA%E5%B8%AD%E8%B7%91%E7%94%B7%E5%AE%A3%E4%BC%A0%E5%BD%93%E5%A4%A9%E5%BF%83%E4%BA%8B%E9%87%8D%E9%87%8D%23) `443.5K 🔥` `NEW`
1. [男子自认为妻子已死怕担责扔妻下土崖](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%87%AA%E8%AE%A4%E4%B8%BA%E5%A6%BB%E5%AD%90%E5%B7%B2%E6%AD%BB%E6%80%95%E6%8B%85%E8%B4%A3%E6%89%94%E5%A6%BB%E4%B8%8B%E5%9C%9F%E5%B4%96%23) `441.8K 🔥` `NEW`
1. [曾沛慈急性咽喉炎和鼻炎 (Acute pharyngitis and rhinitis)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E6%80%A5%E6%80%A7%E5%92%BD%E5%96%89%E7%82%8E%E5%92%8C%E9%BC%BB%E7%82%8E%23) `438.4K 🔥` `NEW`
1. [李嘉凯 张笑颜](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%98%89%E5%87%AF%20%E5%BC%A0%E7%AC%91%E9%A2%9C%23) `432.0K 🔥` `NEW`
1. [SK海力士市值突破1万亿美元](https://s.weibo.com/weibo?q=%23SK%E6%B5%B7%E5%8A%9B%E5%A3%AB%E5%B8%82%E5%80%BC%E7%AA%81%E7%A0%B41%E4%B8%87%E4%BA%BF%E7%BE%8E%E5%85%83%23) `429.1K 🔥` `NEW`
1. [小米MiMo模型API降价](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3MiMo%E6%A8%A1%E5%9E%8BAPI%E9%99%8D%E4%BB%B7%23) `426.8K 🔥` `NEW`
1. [容易焦虑的人都有一个共性](https://s.weibo.com/weibo?q=%23%E5%AE%B9%E6%98%93%E7%84%A6%E8%99%91%E7%9A%84%E4%BA%BA%E9%83%BD%E6%9C%89%E4%B8%80%E4%B8%AA%E5%85%B1%E6%80%A7%23) `422.9K 🔥` `NEW`
1. [以防你不知道鹦鹉的体温有多高](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E9%98%B2%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E9%B9%A6%E9%B9%89%E7%9A%84%E4%BD%93%E6%B8%A9%E6%9C%89%E5%A4%9A%E9%AB%98%23) `421.4K 🔥` `NEW`
1. [出轨90后生双胞胎丈夫称未想过离婚](https://s.weibo.com/weibo?q=%23%E5%87%BA%E8%BD%A890%E5%90%8E%E7%94%9F%E5%8F%8C%E8%83%9E%E8%83%8E%E4%B8%88%E5%A4%AB%E7%A7%B0%E6%9C%AA%E6%83%B3%E8%BF%87%E7%A6%BB%E5%A9%9A%23) `418.1K 🔥` `NEW`
1. [JDG小北 虐猫梗](https://s.weibo.com/weibo?q=%23JDG%E5%B0%8F%E5%8C%97%20%E8%99%90%E7%8C%AB%E6%A2%97%23) `415.9K 🔥` `NEW`
1. [李登科回应娜扎张云龙恋情传闻](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%99%BB%E7%A7%91%E5%9B%9E%E5%BA%94%E5%A8%9C%E6%89%8E%E5%BC%A0%E4%BA%91%E9%BE%99%E6%81%8B%E6%83%85%E4%BC%A0%E9%97%BB%23) `414.9K 🔥` `NEW`
1. [万花世界](https://s.weibo.com/weibo?q=%23%E4%B8%87%E8%8A%B1%E4%B8%96%E7%95%8C%23) `407.1K 🔥` `NEW`
1. [田荣华其实是清鹤仙人的通房丫头 (Tian Ronghua is actually Qinghe Xianren’s intercourse girl)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E8%8D%A3%E5%8D%8E%E5%85%B6%E5%AE%9E%E6%98%AF%E6%B8%85%E9%B9%A4%E4%BB%99%E4%BA%BA%E7%9A%84%E9%80%9A%E6%88%BF%E4%B8%AB%E5%A4%B4%23) `405.0K 🔥` `NEW`
1. [美光科技大涨超19%](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%85%89%E7%A7%91%E6%8A%80%E5%A4%A7%E6%B6%A8%E8%B6%8519%25%23) `402.6K 🔥` `NEW`
1. [官方回应扔吸管女子被指系小学老师](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E6%89%94%E5%90%B8%E7%AE%A1%E5%A5%B3%E5%AD%90%E8%A2%AB%E6%8C%87%E7%B3%BB%E5%B0%8F%E5%AD%A6%E8%80%81%E5%B8%88%23) `400.7K 🔥` `NEW`
1. [宋亚轩包场关晓彤新剧](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%8C%85%E5%9C%BA%E5%85%B3%E6%99%93%E5%BD%A4%E6%96%B0%E5%89%A7%23) `397.6K 🔥` `NEW`
1. [联想集团涨疯了](https://s.weibo.com/weibo?q=%23%E8%81%94%E6%83%B3%E9%9B%86%E5%9B%A2%E6%B6%A8%E7%96%AF%E4%BA%86%23) `393.9K 🔥` `NEW`
1. [朋友圈发照片炫耀造成泄密](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%8F%91%E7%85%A7%E7%89%87%E7%82%AB%E8%80%80%E9%80%A0%E6%88%90%E6%B3%84%E5%AF%86%23) `393.3K 🔥` `NEW`
1. [13岁身高185的儿子跟妈妈要1块钱](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E8%BA%AB%E9%AB%98185%E7%9A%84%E5%84%BF%E5%AD%90%E8%B7%9F%E5%A6%88%E5%A6%88%E8%A6%811%E5%9D%97%E9%92%B1%23) `384.3K 🔥` `NEW`
1. [老祖宗在造词这块还是太权威了](https://s.weibo.com/weibo?q=%23%E8%80%81%E7%A5%96%E5%AE%97%E5%9C%A8%E9%80%A0%E8%AF%8D%E8%BF%99%E5%9D%97%E8%BF%98%E6%98%AF%E5%A4%AA%E6%9D%83%E5%A8%81%E4%BA%86%23) `377.7K 🔥` `NEW`
1. [遭差评后粉丝涌入棣爸炸串店刷好评](https://s.weibo.com/weibo?q=%23%E9%81%AD%E5%B7%AE%E8%AF%84%E5%90%8E%E7%B2%89%E4%B8%9D%E6%B6%8C%E5%85%A5%E6%A3%A3%E7%88%B8%E7%82%B8%E4%B8%B2%E5%BA%97%E5%88%B7%E5%A5%BD%E8%AF%84%23) `375.4K 🔥` `NEW`
1. [恰逢春](https://s.weibo.com/weibo?q=%23%E6%81%B0%E9%80%A2%E6%98%A5%23) `364.9K 🔥` `NEW`
1. [世界杯伊朗男足仅比赛日跨境赴美 (Iran's men's football team will only cross the border to the United States on match days at the World Cup)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E4%BC%8A%E6%9C%97%E7%94%B7%E8%B6%B3%E4%BB%85%E6%AF%94%E8%B5%9B%E6%97%A5%E8%B7%A8%E5%A2%83%E8%B5%B4%E7%BE%8E%23) `362.5K 🔥` `NEW`
1. [教育局回应小学女生遭多名同学霸凌](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E5%B1%80%E5%9B%9E%E5%BA%94%E5%B0%8F%E5%AD%A6%E5%A5%B3%E7%94%9F%E9%81%AD%E5%A4%9A%E5%90%8D%E5%90%8C%E5%AD%A6%E9%9C%B8%E5%87%8C%23) `360.1K 🔥` `NEW`
1. [褒姒和任权分手6年了](https://s.weibo.com/weibo?q=%23%E8%A4%92%E5%A7%92%E5%92%8C%E4%BB%BB%E6%9D%83%E5%88%86%E6%89%8B6%E5%B9%B4%E4%BA%86%23) `359.3K 🔥` `NEW`
1. [网红捐1047万其中1千万由粉丝捐出](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E6%8D%901047%E4%B8%87%E5%85%B6%E4%B8%AD1%E5%8D%83%E4%B8%87%E7%94%B1%E7%B2%89%E4%B8%9D%E6%8D%90%E5%87%BA%23) `1.3M 🔥` `+308%`
1. [张雪机车回复余华](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%9B%9E%E5%A4%8D%E4%BD%99%E5%8D%8E%23) `1.3M 🔥` `+323%`
1. [多地和降雨赛跑全力保粮 (Race against rainfall in multiple places to ensure food security)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E5%92%8C%E9%99%8D%E9%9B%A8%E8%B5%9B%E8%B7%91%E5%85%A8%E5%8A%9B%E4%BF%9D%E7%B2%AE%23) `856.9K 🔥` `+45%`
1. [王鹤棣父亲回应店铺遭多条差评](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E7%88%B6%E4%BA%B2%E5%9B%9E%E5%BA%94%E5%BA%97%E9%93%BA%E9%81%AD%E5%A4%9A%E6%9D%A1%E5%B7%AE%E8%AF%84%23) `433.4K 🔥` `+30%`
1. [于正回复余华 (Yu Zheng replied to Yu Hua)](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E5%9B%9E%E5%A4%8D%E4%BD%99%E5%8D%8E%23) `411.8K 🔥` `+25%`
1. [女子被养2年猫攻击致颅部3级损伤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A2%AB%E5%85%BB2%E5%B9%B4%E7%8C%AB%E6%94%BB%E5%87%BB%E8%87%B4%E9%A2%85%E9%83%A83%E7%BA%A7%E6%8D%9F%E4%BC%A4%23) `410.4K 🔥` `+28%`
1. [刘亦菲 咸雪](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%20%E5%92%B8%E9%9B%AA%23) `386.5K 🔥` `+22%`
1. [姜太显撞脸宋威龙 (Jiang Taixian bumps into Song Weilong)](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E5%A4%AA%E6%98%BE%E6%92%9E%E8%84%B8%E5%AE%8B%E5%A8%81%E9%BE%99%23) `371.6K 🔥` `+22%`
1. [武契奇在小米工厂下单了 (Vucic placed an order at Xiaomi factory)](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A5%91%E5%A5%87%E5%9C%A8%E5%B0%8F%E7%B1%B3%E5%B7%A5%E5%8E%82%E4%B8%8B%E5%8D%95%E4%BA%86%23) `370.7K 🔥` `+34%`
1. [濮阳地震 (Puyang earthquake)](https://s.weibo.com/weibo?q=%23%E6%BF%AE%E9%98%B3%E5%9C%B0%E9%9C%87%23) `398.2K 🔥`
1. [村民违规间种小麦31.7亩被刑拘](https://s.weibo.com/weibo?q=%23%E6%9D%91%E6%B0%91%E8%BF%9D%E8%A7%84%E9%97%B4%E7%A7%8D%E5%B0%8F%E9%BA%A631.7%E4%BA%A9%E8%A2%AB%E5%88%91%E6%8B%98%23) `390.6K 🔥`
1. [给阿嬷的情书 成本](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%20%E6%88%90%E6%9C%AC%23) `388.8K 🔥`
1. [钟铉雪莉荷拉赛纶的心理医生 (Jonghyun, Shirley, Halla Selon's psychiatrist)](https://s.weibo.com/weibo?q=%23%E9%92%9F%E9%93%89%E9%9B%AA%E8%8E%89%E8%8D%B7%E6%8B%89%E8%B5%9B%E7%BA%B6%E7%9A%84%E5%BF%83%E7%90%86%E5%8C%BB%E7%94%9F%23) `380.4K 🔥`
1. [我运气好因为我一直在往前走 (I'm lucky because I keep moving forward)](https://s.weibo.com/weibo?q=%23%E6%88%91%E8%BF%90%E6%B0%94%E5%A5%BD%E5%9B%A0%E4%B8%BA%E6%88%91%E4%B8%80%E7%9B%B4%E5%9C%A8%E5%BE%80%E5%89%8D%E8%B5%B0%23) `378.7K 🔥`
1. [武契奇夫人试穿旗袍直呼太喜欢了](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A5%91%E5%A5%87%E5%A4%AB%E4%BA%BA%E8%AF%95%E7%A9%BF%E6%97%97%E8%A2%8D%E7%9B%B4%E5%91%BC%E5%A4%AA%E5%96%9C%E6%AC%A2%E4%BA%86%23) `368.0K 🔥`
1. [雷军回应武契奇说小米车漂亮但买不起](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94%E6%AD%A6%E5%A5%91%E5%A5%87%E8%AF%B4%E5%B0%8F%E7%B1%B3%E8%BD%A6%E6%BC%82%E4%BA%AE%E4%BD%86%E4%B9%B0%E4%B8%8D%E8%B5%B7%23) `436.9K 🔥` `-56%`
1. [五个女博士被投诉喝了过敏](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%AA%E5%A5%B3%E5%8D%9A%E5%A3%AB%E8%A2%AB%E6%8A%95%E8%AF%89%E5%96%9D%E4%BA%86%E8%BF%87%E6%95%8F%23) `425.2K 🔥` `-39%`

Updated at 2026-05-27 09:55:21

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
