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

1. [金价](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `1.6M 🔥` `NEW`
1. [中国正在编织这样一张大网](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%AD%A3%E5%9C%A8%E7%BC%96%E7%BB%87%E8%BF%99%E6%A0%B7%E4%B8%80%E5%BC%A0%E5%A4%A7%E7%BD%91%23) `741.7K 🔥` `NEW`
1. [天猫双11限时返场最后1天](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E7%8C%AB%E5%8F%8C11%E9%99%90%E6%97%B6%E8%BF%94%E5%9C%BA%E6%9C%80%E5%90%8E1%E5%A4%A9%23) `732.7K 🔥` `NEW`
1. [后会友期民宿离晚餐地点不到四公里](https://s.weibo.com/weibo?q=%23%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E6%B0%91%E5%AE%BF%E7%A6%BB%E6%99%9A%E9%A4%90%E5%9C%B0%E7%82%B9%E4%B8%8D%E5%88%B0%E5%9B%9B%E5%85%AC%E9%87%8C%23) `702.1K 🔥` `NEW`
1. [大众5X超能上市9万99起](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BC%975X%E8%B6%85%E8%83%BD%E4%B8%8A%E5%B8%829%E4%B8%8799%E8%B5%B7%23) `664.5K 🔥` `NEW`
1. [王子璇白小纯4公里开了三小时](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AD%90%E7%92%87%E7%99%BD%E5%B0%8F%E7%BA%AF4%E5%85%AC%E9%87%8C%E5%BC%80%E4%BA%86%E4%B8%89%E5%B0%8F%E6%97%B6%23) `648.7K 🔥` `NEW`
1. [感觉杨超越不捂住董思成的嘴都要亲了](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E6%9D%A8%E8%B6%85%E8%B6%8A%E4%B8%8D%E6%8D%82%E4%BD%8F%E8%91%A3%E6%80%9D%E6%88%90%E7%9A%84%E5%98%B4%E9%83%BD%E8%A6%81%E4%BA%B2%E4%BA%86%23) `553.7K 🔥` `NEW`
1. [张萌马天宇聊王子璇](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%90%8C%E9%A9%AC%E5%A4%A9%E5%AE%87%E8%81%8A%E7%8E%8B%E5%AD%90%E7%92%87%23) `539.0K 🔥` `NEW`
1. [英伟达总市值重回4万亿美元](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%80%BB%E5%B8%82%E5%80%BC%E9%87%8D%E5%9B%9E4%E4%B8%87%E4%BA%BF%E7%BE%8E%E5%85%83%23) `507.3K 🔥` `NEW`
1. [厉娜节目里第一次叫许飞名字](https://s.weibo.com/weibo?q=%23%E5%8E%89%E5%A8%9C%E8%8A%82%E7%9B%AE%E9%87%8C%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%8F%AB%E8%AE%B8%E9%A3%9E%E5%90%8D%E5%AD%97%23) `475.1K 🔥` `NEW`
1. [意大利VS法国](https://s.weibo.com/weibo?q=%23%E6%84%8F%E5%A4%A7%E5%88%A9VS%E6%B3%95%E5%9B%BD%23) `461.4K 🔥` `NEW`
1. [王楚然现发4收官玩游戏路透](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%8E%B0%E5%8F%914%E6%94%B6%E5%AE%98%E7%8E%A9%E6%B8%B8%E6%88%8F%E8%B7%AF%E9%80%8F%23) `450.8K 🔥` `NEW`
1. [曝汤臣二公子和90花隐婚](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B1%A4%E8%87%A3%E4%BA%8C%E5%85%AC%E5%AD%90%E5%92%8C90%E8%8A%B1%E9%9A%90%E5%A9%9A%23) `428.8K 🔥` `NEW`
1. [白小纯眼睛就没离开过王子璇](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%B0%8F%E7%BA%AF%E7%9C%BC%E7%9D%9B%E5%B0%B1%E6%B2%A1%E7%A6%BB%E5%BC%80%E8%BF%87%E7%8E%8B%E5%AD%90%E7%92%87%23) `420.1K 🔥` `NEW`
1. [林允回应滑跪](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%85%81%E5%9B%9E%E5%BA%94%E6%BB%91%E8%B7%AA%23) `418.7K 🔥` `NEW`
1. [腾势N8这价格大家觉得行吗](https://s.weibo.com/weibo?q=%23%E8%85%BE%E5%8A%BFN8%E8%BF%99%E4%BB%B7%E6%A0%BC%E5%A4%A7%E5%AE%B6%E8%A7%89%E5%BE%97%E8%A1%8C%E5%90%97%23) `417.0K 🔥` `NEW`
1. [怀孕妻子发现丈夫的白月光](https://s.weibo.com/weibo?q=%23%E6%80%80%E5%AD%95%E5%A6%BB%E5%AD%90%E5%8F%91%E7%8E%B0%E4%B8%88%E5%A4%AB%E7%9A%84%E7%99%BD%E6%9C%88%E5%85%89%23) `416.4K 🔥` `NEW`
1. [刘欢癌症扩散后曾放手一搏试新药](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%E7%99%8C%E7%97%87%E6%89%A9%E6%95%A3%E5%90%8E%E6%9B%BE%E6%94%BE%E6%89%8B%E4%B8%80%E6%90%8F%E8%AF%95%E6%96%B0%E8%8D%AF%23) `415.8K 🔥` `NEW`
1. [金晨回应回归现在就出发4](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%A8%E5%9B%9E%E5%BA%94%E5%9B%9E%E5%BD%92%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%914%23) `415.8K 🔥` `NEW`
1. [科技新一说黄仁勋走了英伟达缺少灵魂](https://s.weibo.com/weibo?q=%23%E7%A7%91%E6%8A%80%E6%96%B0%E4%B8%80%E8%AF%B4%E9%BB%84%E4%BB%81%E5%8B%8B%E8%B5%B0%E4%BA%86%E8%8B%B1%E4%BC%9F%E8%BE%BE%E7%BC%BA%E5%B0%91%E7%81%B5%E9%AD%82%23) `415.5K 🔥` `NEW`
1. [7碗米饭摆拍事件更显媒体调查价值](https://s.weibo.com/weibo?q=%237%E7%A2%97%E7%B1%B3%E9%A5%AD%E6%91%86%E6%8B%8D%E4%BA%8B%E4%BB%B6%E6%9B%B4%E6%98%BE%E5%AA%92%E4%BD%93%E8%B0%83%E6%9F%A5%E4%BB%B7%E5%80%BC%23) `415.3K 🔥` `NEW`
1. [英伟达临时CEO曾因黄仁勋入职](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E4%B8%B4%E6%97%B6CEO%E6%9B%BE%E5%9B%A0%E9%BB%84%E4%BB%81%E5%8B%8B%E5%85%A5%E8%81%8C%23) `414.8K 🔥` `NEW`
1. [英伟达股民天塌了](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E8%82%A1%E6%B0%91%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `414.4K 🔥` `NEW`
1. [同事认你是领导才是领导](https://s.weibo.com/weibo?q=%23%E5%90%8C%E4%BA%8B%E8%AE%A4%E4%BD%A0%E6%98%AF%E9%A2%86%E5%AF%BC%E6%89%8D%E6%98%AF%E9%A2%86%E5%AF%BC%23) `413.6K 🔥` `NEW`
1. [赵丽颖的时尚资源](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%9A%84%E6%97%B6%E5%B0%9A%E8%B5%84%E6%BA%90%23) `411.8K 🔥` `NEW`
1. [穆祉丞把你们放在我的前面](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E6%8A%8A%E4%BD%A0%E4%BB%AC%E6%94%BE%E5%9C%A8%E6%88%91%E7%9A%84%E5%89%8D%E9%9D%A2%23) `409.7K 🔥` `NEW`
1. [高叶做的美甲丝毫不亚于去美甲店做的](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%8F%B6%E5%81%9A%E7%9A%84%E7%BE%8E%E7%94%B2%E4%B8%9D%E6%AF%AB%E4%B8%8D%E4%BA%9A%E4%BA%8E%E5%8E%BB%E7%BE%8E%E7%94%B2%E5%BA%97%E5%81%9A%E7%9A%84%23) `409.0K 🔥` `NEW`
1. [优酷6部佳作在2026中美电视节获奖](https://s.weibo.com/weibo?q=%23%E4%BC%98%E9%85%B76%E9%83%A8%E4%BD%B3%E4%BD%9C%E5%9C%A82026%E4%B8%AD%E7%BE%8E%E7%94%B5%E8%A7%86%E8%8A%82%E8%8E%B7%E5%A5%96%23) `408.2K 🔥` `NEW`
1. [刘欢妻子长文](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%E5%A6%BB%E5%AD%90%E9%95%BF%E6%96%87%23) `1.2M 🔥` `+813%`
1. [给阿嬷的情书获奖反应冷淡](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E8%8E%B7%E5%A5%96%E5%8F%8D%E5%BA%94%E5%86%B7%E6%B7%A1%23) `731.6K 🔥` `+800%`
1. [普通人用AI和会用AI的人](https://s.weibo.com/weibo?q=%23%E6%99%AE%E9%80%9A%E4%BA%BA%E7%94%A8AI%E5%92%8C%E4%BC%9A%E7%94%A8AI%E7%9A%84%E4%BA%BA%23) `673.8K 🔥` `+734%`
1. [英伟达大跌13%](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%A4%A7%E8%B7%8C13%25%23) `629.6K 🔥` `+723%`
1. [20岁男子疑遭拘禁殴打被解救后去世](https://s.weibo.com/weibo?q=%2320%E5%B2%81%E7%94%B7%E5%AD%90%E7%96%91%E9%81%AD%E6%8B%98%E7%A6%81%E6%AE%B4%E6%89%93%E8%A2%AB%E8%A7%A3%E6%95%91%E5%90%8E%E5%8E%BB%E4%B8%96%23) `585.2K 🔥` `+729%`
1. [金价再迎暴跌专家劝别抄底](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%86%8D%E8%BF%8E%E6%9A%B4%E8%B7%8C%E4%B8%93%E5%AE%B6%E5%8A%9D%E5%88%AB%E6%8A%84%E5%BA%95%23) `558.4K 🔥` `+630%`
1. [大冰谈夫妻异地城市选择](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E8%B0%88%E5%A4%AB%E5%A6%BB%E5%BC%82%E5%9C%B0%E5%9F%8E%E5%B8%82%E9%80%89%E6%8B%A9%23) `549.9K 🔥` `+676%`
1. [影视飓风Tim开通个人账号](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8ETim%E5%BC%80%E9%80%9A%E4%B8%AA%E4%BA%BA%E8%B4%A6%E5%8F%B7%23) `514.8K 🔥` `+627%`
1. [官方通报母女点豆芽吃7碗饭摆拍](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%AF%8D%E5%A5%B3%E7%82%B9%E8%B1%86%E8%8A%BD%E5%90%837%E7%A2%97%E9%A5%AD%E6%91%86%E6%8B%8D%23) `494.0K 🔥` `+546%`
1. [女孩腹痛持续一年癌细胞全身转移](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E8%85%B9%E7%97%9B%E6%8C%81%E7%BB%AD%E4%B8%80%E5%B9%B4%E7%99%8C%E7%BB%86%E8%83%9E%E5%85%A8%E8%BA%AB%E8%BD%AC%E7%A7%BB%23) `429.5K 🔥` `+507%`
1. [向太问许飞为什么当时不解开误会](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E9%97%AE%E8%AE%B8%E9%A3%9E%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BD%93%E6%97%B6%E4%B8%8D%E8%A7%A3%E5%BC%80%E8%AF%AF%E4%BC%9A%23) `423.5K 🔥` `+334%`
1. [男子怀疑女儿是外星人](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%80%80%E7%96%91%E5%A5%B3%E5%84%BF%E6%98%AF%E5%A4%96%E6%98%9F%E4%BA%BA%23) `420.8K 🔥` `+451%`
1. [发布朴树去世消息网友已私密账号](https://s.weibo.com/weibo?q=%23%E5%8F%91%E5%B8%83%E6%9C%B4%E6%A0%91%E5%8E%BB%E4%B8%96%E6%B6%88%E6%81%AF%E7%BD%91%E5%8F%8B%E5%B7%B2%E7%A7%81%E5%AF%86%E8%B4%A6%E5%8F%B7%23) `420.4K 🔥` `+439%`
1. [面试虚报500万面试官掏计算器](https://s.weibo.com/weibo?q=%23%E9%9D%A2%E8%AF%95%E8%99%9A%E6%8A%A5500%E4%B8%87%E9%9D%A2%E8%AF%95%E5%AE%98%E6%8E%8F%E8%AE%A1%E7%AE%97%E5%99%A8%23) `418.1K 🔥` `+490%`
1. [姜妍太适合当主持了](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E5%A6%8D%E5%A4%AA%E9%80%82%E5%90%88%E5%BD%93%E4%B8%BB%E6%8C%81%E4%BA%86%23) `417.6K 🔥` `+445%`
1. [女子腿疼找中医扎针血直往外喷](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%85%BF%E7%96%BC%E6%89%BE%E4%B8%AD%E5%8C%BB%E6%89%8E%E9%92%88%E8%A1%80%E7%9B%B4%E5%BE%80%E5%A4%96%E5%96%B7%23) `413.4K 🔥` `+441%`
1. [你王菲啊 厉娜](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%8E%8B%E8%8F%B2%E5%95%8A%20%E5%8E%89%E5%A8%9C%23) `412.9K 🔥` `+439%`
1. [金价明年有望冲击5300](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%98%8E%E5%B9%B4%E6%9C%89%E6%9C%9B%E5%86%B2%E5%87%BB5300%23) `412.2K 🔥` `+485%`
1. [用空气炸锅做苹果烤蛋奶](https://s.weibo.com/weibo?q=%23%E7%94%A8%E7%A9%BA%E6%B0%94%E7%82%B8%E9%94%85%E5%81%9A%E8%8B%B9%E6%9E%9C%E7%83%A4%E8%9B%8B%E5%A5%B6%23) `411.3K 🔥` `+481%`
1. [教育局回应小学教师上班聚众赌博](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E5%B1%80%E5%9B%9E%E5%BA%94%E5%B0%8F%E5%AD%A6%E6%95%99%E5%B8%88%E4%B8%8A%E7%8F%AD%E8%81%9A%E4%BC%97%E8%B5%8C%E5%8D%9A%23) `410.7K 🔥` `+483%`
1. [抓姐姐头发可以姐姐还手不行](https://s.weibo.com/weibo?q=%23%E6%8A%93%E5%A7%90%E5%A7%90%E5%A4%B4%E5%8F%91%E5%8F%AF%E4%BB%A5%E5%A7%90%E5%A7%90%E8%BF%98%E6%89%8B%E4%B8%8D%E8%A1%8C%23) `410.6K 🔥` `+480%`
1. [山姆399羽绒服 代工白牌200多](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86399%E7%BE%BD%E7%BB%92%E6%9C%8D%20%E4%BB%A3%E5%B7%A5%E7%99%BD%E7%89%8C200%E5%A4%9A%23) `410.1K 🔥` `+481%`
1. [朱一龙23岁演的剧要播了](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%9923%E5%B2%81%E6%BC%94%E7%9A%84%E5%89%A7%E8%A6%81%E6%92%AD%E4%BA%86%23) `408.4K 🔥` `+478%`

Updated at 2026-11-13 08:16:02

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
