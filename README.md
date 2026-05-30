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

1. [上京东买宋妍霏同款荣耀补贴600元 (Go to JD.com and get a subsidy of 600 yuan for the same Honor model as Song Yanfei)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E4%BA%AC%E4%B8%9C%E4%B9%B0%E5%AE%8B%E5%A6%8D%E9%9C%8F%E5%90%8C%E6%AC%BE%E8%8D%A3%E8%80%80%E8%A1%A5%E8%B4%B4600%E5%85%83%23) `868.0K 🔥` `NEW`
1. [麦当劳汉堡缩小比例](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E5%BD%93%E5%8A%B3%E6%B1%89%E5%A0%A1%E7%BC%A9%E5%B0%8F%E6%AF%94%E4%BE%8B%23) `642.7K 🔥` `NEW`
1. [神仙肉](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E4%BB%99%E8%82%89%23) `502.6K 🔥` `NEW`
1. [她家长真去找你你又不敢见](https://s.weibo.com/weibo?q=%23%E5%A5%B9%E5%AE%B6%E9%95%BF%E7%9C%9F%E5%8E%BB%E6%89%BE%E4%BD%A0%E4%BD%A0%E5%8F%88%E4%B8%8D%E6%95%A2%E8%A7%81%23) `451.5K 🔥` `NEW`
1. [张雪机车阿拉贡站第8](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E9%98%BF%E6%8B%89%E8%B4%A1%E7%AB%99%E7%AC%AC8%23) `444.9K 🔥` `NEW`
1. [徐志胜在桃花坞聊沈月王鹤棣](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%BF%97%E8%83%9C%E5%9C%A8%E6%A1%83%E8%8A%B1%E5%9D%9E%E8%81%8A%E6%B2%88%E6%9C%88%E7%8E%8B%E9%B9%A4%E6%A3%A3%23) `413.8K 🔥` `NEW`
1. [致13人遇难客车车厢里有电动车](https://s.weibo.com/weibo?q=%23%E8%87%B413%E4%BA%BA%E9%81%87%E9%9A%BE%E5%AE%A2%E8%BD%A6%E8%BD%A6%E5%8E%A2%E9%87%8C%E6%9C%89%E7%94%B5%E5%8A%A8%E8%BD%A6%23) `380.4K 🔥` `NEW`
1. [爷爷不泡茶樱桃小丸子](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E4%B8%8D%E6%B3%A1%E8%8C%B6%E6%A8%B1%E6%A1%83%E5%B0%8F%E4%B8%B8%E5%AD%90%23) `253.4K 🔥` `NEW`
1. [鞠婧祎敖瑞鹏万花世界路透](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E6%95%96%E7%91%9E%E9%B9%8F%E4%B8%87%E8%8A%B1%E4%B8%96%E7%95%8C%E8%B7%AF%E9%80%8F%23) `239.7K 🔥` `NEW`
1. [虞书欣侯明昊念相思](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%BE%AF%E6%98%8E%E6%98%8A%E5%BF%B5%E7%9B%B8%E6%80%9D%23) `212.4K 🔥` `NEW`
1. [我妈让我蹲京东超市花生油降价 (My mother asked me to squat in Jingdong supermarket to reduce the price of peanut oil)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%A6%88%E8%AE%A9%E6%88%91%E8%B9%B2%E4%BA%AC%E4%B8%9C%E8%B6%85%E5%B8%82%E8%8A%B1%E7%94%9F%E6%B2%B9%E9%99%8D%E4%BB%B7%23) `203.0K 🔥` `NEW`
1. [京东这波红包给到夯](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E8%BF%99%E6%B3%A2%E7%BA%A2%E5%8C%85%E7%BB%99%E5%88%B0%E5%A4%AF%23) `201.0K 🔥` `NEW`
1. [组合购薅京东羊毛10万减5.2万](https://s.weibo.com/weibo?q=%23%E7%BB%84%E5%90%88%E8%B4%AD%E8%96%85%E4%BA%AC%E4%B8%9C%E7%BE%8A%E6%AF%9B10%E4%B8%87%E5%87%8F5.2%E4%B8%87%23) `198.4K 🔥` `NEW`
1. [鞠婧祎对接回应万花世界争议](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%AF%B9%E6%8E%A5%E5%9B%9E%E5%BA%94%E4%B8%87%E8%8A%B1%E4%B8%96%E7%95%8C%E4%BA%89%E8%AE%AE%23) `195.9K 🔥` `NEW`
1. [法国高温天气已造成7人死亡](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E9%AB%98%E6%B8%A9%E5%A4%A9%E6%B0%94%E5%B7%B2%E9%80%A0%E6%88%907%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `191.7K 🔥` `NEW`
1. [陈都灵化着妆睡着了](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E5%8C%96%E7%9D%80%E5%A6%86%E7%9D%A1%E7%9D%80%E4%BA%86%23) `191.4K 🔥` `NEW`
1. [两千亿巨头高管减持套现超4.3亿](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%8D%83%E4%BA%BF%E5%B7%A8%E5%A4%B4%E9%AB%98%E7%AE%A1%E5%87%8F%E6%8C%81%E5%A5%97%E7%8E%B0%E8%B6%854.3%E4%BA%BF%23) `170.8K 🔥` `NEW`
1. [灵隐寺门口没人围堵推销了](https://s.weibo.com/weibo?q=%23%E7%81%B5%E9%9A%90%E5%AF%BA%E9%97%A8%E5%8F%A3%E6%B2%A1%E4%BA%BA%E5%9B%B4%E5%A0%B5%E6%8E%A8%E9%94%80%E4%BA%86%23) `163.0K 🔥` `NEW`
1. [孙怡说唐艺昕保输](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E8%AF%B4%E5%94%90%E8%89%BA%E6%98%95%E4%BF%9D%E8%BE%93%23) `160.3K 🔥` `NEW`
1. [拨打戒网瘾学校多个电话无人接通](https://s.weibo.com/weibo?q=%23%E6%8B%A8%E6%89%93%E6%88%92%E7%BD%91%E7%98%BE%E5%AD%A6%E6%A0%A1%E5%A4%9A%E4%B8%AA%E7%94%B5%E8%AF%9D%E6%97%A0%E4%BA%BA%E6%8E%A5%E9%80%9A%23) `159.5K 🔥` `NEW`
1. [很多人都不知道的生活知识 (Life knowledge that many people don’t know)](https://s.weibo.com/weibo?q=%23%E5%BE%88%E5%A4%9A%E4%BA%BA%E9%83%BD%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84%E7%94%9F%E6%B4%BB%E7%9F%A5%E8%AF%86%23) `157.2K 🔥` `NEW`
1. [念相思开机](https://s.weibo.com/weibo?q=%23%E5%BF%B5%E7%9B%B8%E6%80%9D%E5%BC%80%E6%9C%BA%23) `154.6K 🔥` `NEW`
1. [刘诗诗 从此不敢见观音](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%20%E4%BB%8E%E6%AD%A4%E4%B8%8D%E6%95%A2%E8%A7%81%E8%A7%82%E9%9F%B3%23) `148.7K 🔥` `NEW`
1. [广州洛溪大桥被吐槽热得像烤炉](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E6%B4%9B%E6%BA%AA%E5%A4%A7%E6%A1%A5%E8%A2%AB%E5%90%90%E6%A7%BD%E7%83%AD%E5%BE%97%E5%83%8F%E7%83%A4%E7%82%89%23) `146.1K 🔥` `NEW`
1. [BLG对战WE](https://s.weibo.com/weibo?q=%23BLG%E5%AF%B9%E6%88%98WE%23) `143.2K 🔥` `NEW`
1. [王曼昱防守反攻速度有多快](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E9%98%B2%E5%AE%88%E5%8F%8D%E6%94%BB%E9%80%9F%E5%BA%A6%E6%9C%89%E5%A4%9A%E5%BF%AB%23) `142.5K 🔥` `NEW`
1. [这样的衣服才配预售](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%A0%B7%E7%9A%84%E8%A1%A3%E6%9C%8D%E6%89%8D%E9%85%8D%E9%A2%84%E5%94%AE%23) `136.5K 🔥` `NEW`
1. [广东已经从红烧鸡腿变成大紫薯了](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E5%B7%B2%E7%BB%8F%E4%BB%8E%E7%BA%A2%E7%83%A7%E9%B8%A1%E8%85%BF%E5%8F%98%E6%88%90%E5%A4%A7%E7%B4%AB%E8%96%AF%E4%BA%86%23) `1.0M 🔥` `+358%`
1. [网友阻止印度游客在水源区洗澡](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E9%98%BB%E6%AD%A2%E5%8D%B0%E5%BA%A6%E6%B8%B8%E5%AE%A2%E5%9C%A8%E6%B0%B4%E6%BA%90%E5%8C%BA%E6%B4%97%E6%BE%A1%23) `855.6K 🔥` `+309%`
1. [钱学森儿子回应钱学森热梗](https://s.weibo.com/weibo?q=%23%E9%92%B1%E5%AD%A6%E6%A3%AE%E5%84%BF%E5%AD%90%E5%9B%9E%E5%BA%94%E9%92%B1%E5%AD%A6%E6%A3%AE%E7%83%AD%E6%A2%97%23) `706.5K 🔥` `+152%`
1. [万花世界原主换了一个人演 (The original host of Wanhua World has been replaced by another person)](https://s.weibo.com/weibo?q=%23%E4%B8%87%E8%8A%B1%E4%B8%96%E7%95%8C%E5%8E%9F%E4%B8%BB%E6%8D%A2%E4%BA%86%E4%B8%80%E4%B8%AA%E4%BA%BA%E6%BC%94%23) `430.1K 🔥` `+37%`
1. [高志凯预测全球将爆发的危机](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%BF%97%E5%87%AF%E9%A2%84%E6%B5%8B%E5%85%A8%E7%90%83%E5%B0%86%E7%88%86%E5%8F%91%E7%9A%84%E5%8D%B1%E6%9C%BA%23) `397.4K 🔥` `+34%`
1. [曝唐嫣罗晋经常一起参加女儿活动](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%94%90%E5%AB%A3%E7%BD%97%E6%99%8B%E7%BB%8F%E5%B8%B8%E4%B8%80%E8%B5%B7%E5%8F%82%E5%8A%A0%E5%A5%B3%E5%84%BF%E6%B4%BB%E5%8A%A8%23) `381.7K 🔥` `+22%`
1. [鹿晗不让节目组说](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E4%B8%8D%E8%AE%A9%E8%8A%82%E7%9B%AE%E7%BB%84%E8%AF%B4%23) `358.7K 🔥` `+53%`
1. [神21航天员210天出差名场面 (Famous scenes of God-21 astronauts’ 210-day business trip)](https://s.weibo.com/weibo?q=%23%E7%A5%9E21%E8%88%AA%E5%A4%A9%E5%91%98210%E5%A4%A9%E5%87%BA%E5%B7%AE%E5%90%8D%E5%9C%BA%E9%9D%A2%23) `874.7K 🔥`
1. [上班斯道普华莱士喊我过六一了](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E6%96%AF%E9%81%93%E6%99%AE%E5%8D%8E%E8%8E%B1%E5%A3%AB%E5%96%8A%E6%88%91%E8%BF%87%E5%85%AD%E4%B8%80%E4%BA%86%23) `639.5K 🔥`
1. [对早睡起了敬意](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E6%97%A9%E7%9D%A1%E8%B5%B7%E4%BA%86%E6%95%AC%E6%84%8F%23) `618.2K 🔥`
1. [一个人的执行力怎么可以这么强](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E4%BA%BA%E7%9A%84%E6%89%A7%E8%A1%8C%E5%8A%9B%E6%80%8E%E4%B9%88%E5%8F%AF%E4%BB%A5%E8%BF%99%E4%B9%88%E5%BC%BA%23) `183.9K 🔥`
1. [微信几乎把每个人捆绑在线上](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E5%87%A0%E4%B9%8E%E6%8A%8A%E6%AF%8F%E4%B8%AA%E4%BA%BA%E6%8D%86%E7%BB%91%E5%9C%A8%E7%BA%BF%E4%B8%8A%23) `1.0M 🔥` `-57%`
1. [住东北就别熬夜了](https://s.weibo.com/weibo?q=%23%E4%BD%8F%E4%B8%9C%E5%8C%97%E5%B0%B1%E5%88%AB%E7%86%AC%E5%A4%9C%E4%BA%86%23) `367.8K 🔥` `-41%`
1. [女子想买1斤荔枝一个操作收到100斤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%83%B3%E4%B9%B01%E6%96%A4%E8%8D%94%E6%9E%9D%E4%B8%80%E4%B8%AA%E6%93%8D%E4%BD%9C%E6%94%B6%E5%88%B0100%E6%96%A4%23) `222.9K 🔥` `-28%`
1. [张维威回应隐瞒肖旭恋情 (Zhang Weiwei responded to concealing Xiao Xu’s relationship)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%B4%E5%A8%81%E5%9B%9E%E5%BA%94%E9%9A%90%E7%9E%92%E8%82%96%E6%97%AD%E6%81%8B%E6%83%85%23) `214.3K 🔥` `-24%`
1. [六一表演小朋友失误却意外出彩](https://s.weibo.com/weibo?q=%23%E5%85%AD%E4%B8%80%E8%A1%A8%E6%BC%94%E5%B0%8F%E6%9C%8B%E5%8F%8B%E5%A4%B1%E8%AF%AF%E5%8D%B4%E6%84%8F%E5%A4%96%E5%87%BA%E5%BD%A9%23) `205.3K 🔥` `-55%`
1. [时代峰峻高会泡泡工作人员代聊](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E9%AB%98%E4%BC%9A%E6%B3%A1%E6%B3%A1%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E4%BB%A3%E8%81%8A%23) `204.8K 🔥` `-33%`
1. [豆包压缩证件照有多离谱](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%8E%8B%E7%BC%A9%E8%AF%81%E4%BB%B6%E7%85%A7%E6%9C%89%E5%A4%9A%E7%A6%BB%E8%B0%B1%23) `193.6K 🔥` `-36%`
1. [判断饿的最好方法 (The best way to tell if you’re hungry)](https://s.weibo.com/weibo?q=%23%E5%88%A4%E6%96%AD%E9%A5%BF%E7%9A%84%E6%9C%80%E5%A5%BD%E6%96%B9%E6%B3%95%23) `189.6K 🔥` `-34%`
1. [生命树被标注白玉兰奖 (Tree of Life Awarded Magnolia Award)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E8%A2%AB%E6%A0%87%E6%B3%A8%E7%99%BD%E7%8E%89%E5%85%B0%E5%A5%96%23) `186.9K 🔥` `-47%`
1. [泡鲁达](https://s.weibo.com/weibo?q=%23%E6%B3%A1%E9%B2%81%E8%BE%BE%23) `159.0K 🔥` `-50%`
1. [女子仅退款70次称最多算占小便宜](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BB%85%E9%80%80%E6%AC%BE70%E6%AC%A1%E7%A7%B0%E6%9C%80%E5%A4%9A%E7%AE%97%E5%8D%A0%E5%B0%8F%E4%BE%BF%E5%AE%9C%23) `147.5K 🔥` `-34%`
1. [具身智能最强大脑在中国](https://s.weibo.com/weibo?q=%23%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD%E6%9C%80%E5%BC%BA%E5%A4%A7%E8%84%91%E5%9C%A8%E4%B8%AD%E5%9B%BD%23) `139.7K 🔥` `-27%`
1. [再见朋友综艺真要来了 (Goodbye Friends variety show is really coming)](https://s.weibo.com/weibo?q=%23%E5%86%8D%E8%A7%81%E6%9C%8B%E5%8F%8B%E7%BB%BC%E8%89%BA%E7%9C%9F%E8%A6%81%E6%9D%A5%E4%BA%86%23) `139.4K 🔥` `-61%`
1. [李晨提醒白鹿看粉丝饭撒](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%A8%E6%8F%90%E9%86%92%E7%99%BD%E9%B9%BF%E7%9C%8B%E7%B2%89%E4%B8%9D%E9%A5%AD%E6%92%92%23) `138.1K 🔥` `-29%`

Updated at 2026-05-30 19:45:52

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
