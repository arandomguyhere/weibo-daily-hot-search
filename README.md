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

1. [神21航天员210天出差名场面 (Famous scenes of God-21 astronauts’ 210-day business trip)](https://s.weibo.com/weibo?q=%23%E7%A5%9E21%E8%88%AA%E5%A4%A9%E5%91%98210%E5%A4%A9%E5%87%BA%E5%B7%AE%E5%90%8D%E5%9C%BA%E9%9D%A2%23) `778.5K 🔥` `NEW`
1. [对早睡起了敬意](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E6%97%A9%E7%9D%A1%E8%B5%B7%E4%BA%86%E6%95%AC%E6%84%8F%23) `771.6K 🔥` `NEW`
1. [山姆会员是什么梗](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E4%BC%9A%E5%91%98%E6%98%AF%E4%BB%80%E4%B9%88%E6%A2%97%23) `720.6K 🔥` `NEW`
1. [上班斯道普华莱士喊我过六一了](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E6%96%AF%E9%81%93%E6%99%AE%E5%8D%8E%E8%8E%B1%E5%A3%AB%E5%96%8A%E6%88%91%E8%BF%87%E5%85%AD%E4%B8%80%E4%BA%86%23) `597.9K 🔥` `NEW`
1. [泡鲁达](https://s.weibo.com/weibo?q=%23%E6%B3%A1%E9%B2%81%E8%BE%BE%23) `315.8K 🔥` `NEW`
1. [万花世界原主换了一个人演](https://s.weibo.com/weibo?q=%23%E4%B8%87%E8%8A%B1%E4%B8%96%E7%95%8C%E5%8E%9F%E4%B8%BB%E6%8D%A2%E4%BA%86%E4%B8%80%E4%B8%AA%E4%BA%BA%E6%BC%94%23) `314.8K 🔥` `NEW`
1. [雷霆双标球风引众怒](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E9%9C%86%E5%8F%8C%E6%A0%87%E7%90%83%E9%A3%8E%E5%BC%95%E4%BC%97%E6%80%92%23) `298.9K 🔥` `NEW`
1. [高志凯预测全球将爆发的危机](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%BF%97%E5%87%AF%E9%A2%84%E6%B5%8B%E5%85%A8%E7%90%83%E5%B0%86%E7%88%86%E5%8F%91%E7%9A%84%E5%8D%B1%E6%9C%BA%23) `296.8K 🔥` `NEW`
1. [不敢想当她的孩子有多幸福](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E6%95%A2%E6%83%B3%E5%BD%93%E5%A5%B9%E7%9A%84%E5%AD%A9%E5%AD%90%E6%9C%89%E5%A4%9A%E5%B9%B8%E7%A6%8F%23) `294.3K 🔥` `NEW`
1. [AL战胜EDG](https://s.weibo.com/weibo?q=%23AL%E6%88%98%E8%83%9CEDG%23) `291.7K 🔥` `NEW`
1. [强制送女儿去戒网瘾学校涉嫌违法 (It is illegal to force my daughter to go to a school to treat Internet addiction.)](https://s.weibo.com/weibo?q=%23%E5%BC%BA%E5%88%B6%E9%80%81%E5%A5%B3%E5%84%BF%E5%8E%BB%E6%88%92%E7%BD%91%E7%98%BE%E5%AD%A6%E6%A0%A1%E6%B6%89%E5%AB%8C%E8%BF%9D%E6%B3%95%23) `287.4K 🔥` `NEW`
1. [张维威回应隐瞒肖旭恋情](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%B4%E5%A8%81%E5%9B%9E%E5%BA%94%E9%9A%90%E7%9E%92%E8%82%96%E6%97%AD%E6%81%8B%E6%83%85%23) `283.6K 🔥` `NEW`
1. [钱学森儿子回应钱学森热梗](https://s.weibo.com/weibo?q=%23%E9%92%B1%E5%AD%A6%E6%A3%AE%E5%84%BF%E5%AD%90%E5%9B%9E%E5%BA%94%E9%92%B1%E5%AD%A6%E6%A3%AE%E7%83%AD%E6%A2%97%23) `280.2K 🔥` `NEW`
1. [官方通报博物馆青铜剑疑似拼接](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%8D%9A%E7%89%A9%E9%A6%86%E9%9D%92%E9%93%9C%E5%89%91%E7%96%91%E4%BC%BC%E6%8B%BC%E6%8E%A5%23) `237.1K 🔥` `NEW`
1. [鹿晗不让节目组说](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E4%B8%8D%E8%AE%A9%E8%8A%82%E7%9B%AE%E7%BB%84%E8%AF%B4%23) `234.8K 🔥` `NEW`
1. [广东已经从红烧鸡腿变成大紫薯了](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E5%B7%B2%E7%BB%8F%E4%BB%8E%E7%BA%A2%E7%83%A7%E9%B8%A1%E8%85%BF%E5%8F%98%E6%88%90%E5%A4%A7%E7%B4%AB%E8%96%AF%E4%BA%86%23) `227.7K 🔥` `NEW`
1. [女子仅退款70次称最多算占小便宜](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BB%85%E9%80%80%E6%AC%BE70%E6%AC%A1%E7%A7%B0%E6%9C%80%E5%A4%9A%E7%AE%97%E5%8D%A0%E5%B0%8F%E4%BE%BF%E5%AE%9C%23) `225.2K 🔥` `NEW`
1. [网友阻止印度游客在水源区洗澡](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E9%98%BB%E6%AD%A2%E5%8D%B0%E5%BA%A6%E6%B8%B8%E5%AE%A2%E5%9C%A8%E6%B0%B4%E6%BA%90%E5%8C%BA%E6%B4%97%E6%BE%A1%23) `209.2K 🔥` `NEW`
1. [奥迪E7X上市火爆ta们都入手了](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E8%BF%AAE7X%E4%B8%8A%E5%B8%82%E7%81%AB%E7%88%86ta%E4%BB%AC%E9%83%BD%E5%85%A5%E6%89%8B%E4%BA%86%23) `200.5K 🔥` `NEW`
1. [李晨提醒白鹿看粉丝饭撒](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%A8%E6%8F%90%E9%86%92%E7%99%BD%E9%B9%BF%E7%9C%8B%E7%B2%89%E4%B8%9D%E9%A5%AD%E6%92%92%23) `194.1K 🔥` `NEW`
1. [高会泡泡违禁词 (Banned words in high-level conference bubbles)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%BC%9A%E6%B3%A1%E6%B3%A1%E8%BF%9D%E7%A6%81%E8%AF%8D%23) `193.1K 🔥` `NEW`
1. [陈雨菲止步新加坡赛四强](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%9B%A8%E8%8F%B2%E6%AD%A2%E6%AD%A5%E6%96%B0%E5%8A%A0%E5%9D%A1%E8%B5%9B%E5%9B%9B%E5%BC%BA%23) `192.9K 🔥` `NEW`
1. [张慧雯合照里的乌兰图雅](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%85%A7%E9%9B%AF%E5%90%88%E7%85%A7%E9%87%8C%E7%9A%84%E4%B9%8C%E5%85%B0%E5%9B%BE%E9%9B%85%23) `192.2K 🔥` `NEW`
1. [京东直播神仙水真便宜](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E7%9B%B4%E6%92%AD%E7%A5%9E%E4%BB%99%E6%B0%B4%E7%9C%9F%E4%BE%BF%E5%AE%9C%23) `192.0K 🔥` `NEW`
1. [具身智能最强大脑在中国](https://s.weibo.com/weibo?q=%23%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD%E6%9C%80%E5%BC%BA%E5%A4%A7%E8%84%91%E5%9C%A8%E4%B8%AD%E5%9B%BD%23) `191.7K 🔥` `NEW`
1. [一个人的执行力怎么可以这么强](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E4%BA%BA%E7%9A%84%E6%89%A7%E8%A1%8C%E5%8A%9B%E6%80%8E%E4%B9%88%E5%8F%AF%E4%BB%A5%E8%BF%99%E4%B9%88%E5%BC%BA%23) `191.2K 🔥` `NEW`
1. [窦靖童曾自曝从没和王菲吵过架](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%E6%9B%BE%E8%87%AA%E6%9B%9D%E4%BB%8E%E6%B2%A1%E5%92%8C%E7%8E%8B%E8%8F%B2%E5%90%B5%E8%BF%87%E6%9E%B6%23) `175.2K 🔥` `NEW`
1. [微信几乎把每个人捆绑在线上](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E5%87%A0%E4%B9%8E%E6%8A%8A%E6%AF%8F%E4%B8%AA%E4%BA%BA%E6%8D%86%E7%BB%91%E5%9C%A8%E7%BA%BF%E4%B8%8A%23) `2.4M 🔥` `+203%`
1. [D1804次列车被困隧道内超2小时](https://s.weibo.com/weibo?q=%23D1804%E6%AC%A1%E5%88%97%E8%BD%A6%E8%A2%AB%E5%9B%B0%E9%9A%A7%E9%81%93%E5%86%85%E8%B6%852%E5%B0%8F%E6%97%B6%23) `978.8K 🔥` `+120%`
1. [今晚8点上京东 百亿补贴低至1折](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E6%99%9A8%E7%82%B9%E4%B8%8A%E4%BA%AC%E4%B8%9C%20%E7%99%BE%E4%BA%BF%E8%A1%A5%E8%B4%B4%E4%BD%8E%E8%87%B31%E6%8A%98%23) `776.3K 🔥` `+27%`
1. [会所老板诈骗7亿潜逃奢靡生活曝光 (Club owner defrauded 700 million and absconded to live a luxurious life exposed)](https://s.weibo.com/weibo?q=%23%E4%BC%9A%E6%89%80%E8%80%81%E6%9D%BF%E8%AF%88%E9%AA%977%E4%BA%BF%E6%BD%9C%E9%80%83%E5%A5%A2%E9%9D%A1%E7%94%9F%E6%B4%BB%E6%9B%9D%E5%85%89%23) `272.2K 🔥` `+54%`
1. [宁德时代钠电池将规模量产](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E9%92%A0%E7%94%B5%E6%B1%A0%E5%B0%86%E8%A7%84%E6%A8%A1%E9%87%8F%E4%BA%A7%23) `234.9K 🔥` `+41%`
1. [豆包压缩证件照有多离谱](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%8E%8B%E7%BC%A9%E8%AF%81%E4%BB%B6%E7%85%A7%E6%9C%89%E5%A4%9A%E7%A6%BB%E8%B0%B1%23) `301.4K 🔥`
1. [获Offer后辞职入职前岗位被取消](https://s.weibo.com/weibo?q=%23%E8%8E%B7Offer%E5%90%8E%E8%BE%9E%E8%81%8C%E5%85%A5%E8%81%8C%E5%89%8D%E5%B2%97%E4%BD%8D%E8%A2%AB%E5%8F%96%E6%B6%88%23) `275.8K 🔥`
1. [万花世界](https://s.weibo.com/weibo?q=%23%E4%B8%87%E8%8A%B1%E4%B8%96%E7%95%8C%23) `234.1K 🔥`
1. [Jasper要去英国读书了 (Jasper is going to study in England)](https://s.weibo.com/weibo?q=%23Jasper%E8%A6%81%E5%8E%BB%E8%8B%B1%E5%9B%BD%E8%AF%BB%E4%B9%A6%E4%BA%86%23) `227.3K 🔥`
1. [住东北就别熬夜了](https://s.weibo.com/weibo?q=%23%E4%BD%8F%E4%B8%9C%E5%8C%97%E5%B0%B1%E5%88%AB%E7%86%AC%E5%A4%9C%E4%BA%86%23) `619.5K 🔥` `-22%`
1. [六一表演小朋友失误却意外出彩](https://s.weibo.com/weibo?q=%23%E5%85%AD%E4%B8%80%E8%A1%A8%E6%BC%94%E5%B0%8F%E6%9C%8B%E5%8F%8B%E5%A4%B1%E8%AF%AF%E5%8D%B4%E6%84%8F%E5%A4%96%E5%87%BA%E5%BD%A9%23) `453.4K 🔥` `-41%`
1. [再见朋友综艺真要来了 (Goodbye Friends variety show is really coming)](https://s.weibo.com/weibo?q=%23%E5%86%8D%E8%A7%81%E6%9C%8B%E5%8F%8B%E7%BB%BC%E8%89%BA%E7%9C%9F%E8%A6%81%E6%9D%A5%E4%BA%86%23) `356.8K 🔥` `-49%`
1. [生命树被标注白玉兰奖 (Tree of Life Awarded Magnolia Award)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E8%A2%AB%E6%A0%87%E6%B3%A8%E7%99%BD%E7%8E%89%E5%85%B0%E5%A5%96%23) `351.2K 🔥` `-70%`
1. [曝唐嫣罗晋经常一起参加女儿活动](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%94%90%E5%AB%A3%E7%BD%97%E6%99%8B%E7%BB%8F%E5%B8%B8%E4%B8%80%E8%B5%B7%E5%8F%82%E5%8A%A0%E5%A5%B3%E5%84%BF%E6%B4%BB%E5%8A%A8%23) `312.4K 🔥` `-37%`
1. [女子想买1斤荔枝一个操作收到100斤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%83%B3%E4%B9%B01%E6%96%A4%E8%8D%94%E6%9E%9D%E4%B8%80%E4%B8%AA%E6%93%8D%E4%BD%9C%E6%94%B6%E5%88%B0100%E6%96%A4%23) `309.4K 🔥` `-65%`
1. [时代峰峻高会泡泡工作人员代聊](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E9%AB%98%E4%BC%9A%E6%B3%A1%E6%B3%A1%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E4%BB%A3%E8%81%8A%23) `306.8K 🔥` `-38%`
1. [判断饿的最好方法 (The best way to tell if you’re hungry)](https://s.weibo.com/weibo?q=%23%E5%88%A4%E6%96%AD%E9%A5%BF%E7%9A%84%E6%9C%80%E5%A5%BD%E6%96%B9%E6%B3%95%23) `286.3K 🔥` `-28%`
1. [鹿晗被张雨霏公主抱 (Lu Han is hugged by Princess Zhang Yufei)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E8%A2%AB%E5%BC%A0%E9%9B%A8%E9%9C%8F%E5%85%AC%E4%B8%BB%E6%8A%B1%23) `272.1K 🔥` `-50%`
1. [白鹿孟子义说今天穿长裤太开心了 (Bailu Meng Ziyi said that she was so happy to wear trousers today)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%AD%9F%E5%AD%90%E4%B9%89%E8%AF%B4%E4%BB%8A%E5%A4%A9%E7%A9%BF%E9%95%BF%E8%A3%A4%E5%A4%AA%E5%BC%80%E5%BF%83%E4%BA%86%23) `254.0K 🔥` `-42%`
1. [6月狗屎运最旺的星座](https://s.weibo.com/weibo?q=%236%E6%9C%88%E7%8B%97%E5%B1%8E%E8%BF%90%E6%9C%80%E6%97%BA%E7%9A%84%E6%98%9F%E5%BA%A7%23) `237.7K 🔥` `-52%`
1. [演员刘洵去世](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E5%88%98%E6%B4%B5%E5%8E%BB%E4%B8%96%23) `236.5K 🔥` `-26%`
1. [体坛周报一员工发表不当言论被停职](https://s.weibo.com/weibo?q=%23%E4%BD%93%E5%9D%9B%E5%91%A8%E6%8A%A5%E4%B8%80%E5%91%98%E5%B7%A5%E5%8F%91%E8%A1%A8%E4%B8%8D%E5%BD%93%E8%A8%80%E8%AE%BA%E8%A2%AB%E5%81%9C%E8%81%8C%23) `235.7K 🔥` `-24%`
1. [减肥第一名冬瓜苹果煮水](https://s.weibo.com/weibo?q=%23%E5%87%8F%E8%82%A5%E7%AC%AC%E4%B8%80%E5%90%8D%E5%86%AC%E7%93%9C%E8%8B%B9%E6%9E%9C%E7%85%AE%E6%B0%B4%23) `212.8K 🔥` `-45%`
1. [特朗普名字被判从肯尼迪中心移除](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%90%8D%E5%AD%97%E8%A2%AB%E5%88%A4%E4%BB%8E%E8%82%AF%E5%B0%BC%E8%BF%AA%E4%B8%AD%E5%BF%83%E7%A7%BB%E9%99%A4%23) `209.3K 🔥` `-33%`

Updated at 2026-05-30 18:12:46

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
