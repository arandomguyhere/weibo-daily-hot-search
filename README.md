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

1. [春节摄影大赛 (Spring Festival Photography Contest)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E6%91%84%E5%BD%B1%E5%A4%A7%E8%B5%9B%23) `507.5K 🔥` `NEW`
1. [专家辟谣穿聚酯纤维衣服等于穿塑料瓶](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E8%BE%9F%E8%B0%A3%E7%A9%BF%E8%81%9A%E9%85%AF%E7%BA%A4%E7%BB%B4%E8%A1%A3%E6%9C%8D%E7%AD%89%E4%BA%8E%E7%A9%BF%E5%A1%91%E6%96%99%E7%93%B6%23) `196.4K 🔥` `NEW`
1. [原来侯佩岑三岁时就有明星相](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%BE%AF%E4%BD%A9%E5%B2%91%E4%B8%89%E5%B2%81%E6%97%B6%E5%B0%B1%E6%9C%89%E6%98%8E%E6%98%9F%E7%9B%B8%23) `196.2K 🔥` `NEW`
1. [奥巴马回应被特朗普恶搞成猴](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%B7%B4%E9%A9%AC%E5%9B%9E%E5%BA%94%E8%A2%AB%E7%89%B9%E6%9C%97%E6%99%AE%E6%81%B6%E6%90%9E%E6%88%90%E7%8C%B4%23) `188.4K 🔥` `NEW`
1. [Seedance2.0和Kling3.0视频对比](https://s.weibo.com/weibo?q=%23Seedance2.0%E5%92%8CKling3.0%E8%A7%86%E9%A2%91%E5%AF%B9%E6%AF%94%23) `175.5K 🔥` `NEW`
1. [冯提莫因被网友说矮生气了](https://s.weibo.com/weibo?q=%23%E5%86%AF%E6%8F%90%E8%8E%AB%E5%9B%A0%E8%A2%AB%E7%BD%91%E5%8F%8B%E8%AF%B4%E7%9F%AE%E7%94%9F%E6%B0%94%E4%BA%86%23) `157.0K 🔥` `NEW`
1. [郭艾伦林书豪比拼三分球](https://s.weibo.com/weibo?q=%23%E9%83%AD%E8%89%BE%E4%BC%A6%E6%9E%97%E4%B9%A6%E8%B1%AA%E6%AF%94%E6%8B%BC%E4%B8%89%E5%88%86%E7%90%83%23) `142.1K 🔥` `NEW`
1. [男子聚会被下药提前离场躲过一劫](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%81%9A%E4%BC%9A%E8%A2%AB%E4%B8%8B%E8%8D%AF%E6%8F%90%E5%89%8D%E7%A6%BB%E5%9C%BA%E8%BA%B2%E8%BF%87%E4%B8%80%E5%8A%AB%23) `123.4K 🔥` `NEW`
1. [连中通都被黄景瑜拿下了](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E4%B8%AD%E9%80%9A%E9%83%BD%E8%A2%AB%E9%BB%84%E6%99%AF%E7%91%9C%E6%8B%BF%E4%B8%8B%E4%BA%86%23) `122.4K 🔥` `NEW`
1. [再次提醒中国公民避免赴日](https://s.weibo.com/weibo?q=%23%E5%86%8D%E6%AC%A1%E6%8F%90%E9%86%92%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E9%81%BF%E5%85%8D%E8%B5%B4%E6%97%A5%23) `100.9K 🔥` `NEW`
1. [还以为王阳衣服湿了 (I thought Wang Yang’s clothes were wet)](https://s.weibo.com/weibo?q=%23%E8%BF%98%E4%BB%A5%E4%B8%BA%E7%8E%8B%E9%98%B3%E8%A1%A3%E6%9C%8D%E6%B9%BF%E4%BA%86%23) `94.1K 🔥` `NEW`
1. [沈阳一温泉酒店推暴风雨主题SPA](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E4%B8%80%E6%B8%A9%E6%B3%89%E9%85%92%E5%BA%97%E6%8E%A8%E6%9A%B4%E9%A3%8E%E9%9B%A8%E4%B8%BB%E9%A2%98SPA%23) `93.9K 🔥` `NEW`
1. [害怕过年的原因](https://s.weibo.com/weibo?q=%23%E5%AE%B3%E6%80%95%E8%BF%87%E5%B9%B4%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `93.9K 🔥` `NEW`
1. [结婚20年给妻子转52给情人转21万](https://s.weibo.com/weibo?q=%23%E7%BB%93%E5%A9%9A20%E5%B9%B4%E7%BB%99%E5%A6%BB%E5%AD%90%E8%BD%AC52%E7%BB%99%E6%83%85%E4%BA%BA%E8%BD%AC21%E4%B8%87%23) `89.1K 🔥` `NEW`
1. [白百何带娃随地小便该不该被指责](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%99%BE%E4%BD%95%E5%B8%A6%E5%A8%83%E9%9A%8F%E5%9C%B0%E5%B0%8F%E4%BE%BF%E8%AF%A5%E4%B8%8D%E8%AF%A5%E8%A2%AB%E6%8C%87%E8%B4%A3%23) `81.1K 🔥` `NEW`
1. [老同学聚会男子被下药设局诈骗](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%90%8C%E5%AD%A6%E8%81%9A%E4%BC%9A%E7%94%B7%E5%AD%90%E8%A2%AB%E4%B8%8B%E8%8D%AF%E8%AE%BE%E5%B1%80%E8%AF%88%E9%AA%97%23) `80.1K 🔥` `NEW`
1. [2026红包分组](https://s.weibo.com/weibo?q=%232026%E7%BA%A2%E5%8C%85%E5%88%86%E7%BB%84%23) `1.1M 🔥` `+145%`
1. [辽宁春晚官宣节目单](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E6%98%A5%E6%99%9A%E5%AE%98%E5%AE%A3%E8%8A%82%E7%9B%AE%E5%8D%95%23) `198.5K 🔥` `+76%`
1. [九尾买完票被取消了](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%E4%B9%B0%E5%AE%8C%E7%A5%A8%E8%A2%AB%E5%8F%96%E6%B6%88%E4%BA%86%23) `192.6K 🔥` `+47%`
1. [Angelababy邓超即将合拍](https://s.weibo.com/weibo?q=%23Angelababy%E9%82%93%E8%B6%85%E5%8D%B3%E5%B0%86%E5%90%88%E6%8B%8D%23) `190.2K 🔥` `+26%`
1. [EXO公主泡泡袖 (EXO princess puff sleeves)](https://s.weibo.com/weibo?q=%23EXO%E5%85%AC%E4%B8%BB%E6%B3%A1%E6%B3%A1%E8%A2%96%23) `188.9K 🔥` `+30%`
1. [赵今麦女团门面级别的美貌](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E5%A5%B3%E5%9B%A2%E9%97%A8%E9%9D%A2%E7%BA%A7%E5%88%AB%E7%9A%84%E7%BE%8E%E8%B2%8C%23) `186.7K 🔥` `+30%`
1. [李沅禧购物视频被日本网友炎上](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B2%85%E7%A6%A7%E8%B4%AD%E7%89%A9%E8%A7%86%E9%A2%91%E8%A2%AB%E6%97%A5%E6%9C%AC%E7%BD%91%E5%8F%8B%E7%82%8E%E4%B8%8A%23) `186.2K 🔥` `+24%`
1. [马年清清来送签名红包](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%B9%B4%E6%B8%85%E6%B8%85%E6%9D%A5%E9%80%81%E7%AD%BE%E5%90%8D%E7%BA%A2%E5%8C%85%23) `185.5K 🔥` `+24%`
1. [郭富城王一博 法拉利遇上兰博基尼](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AF%8C%E5%9F%8E%E7%8E%8B%E4%B8%80%E5%8D%9A%20%E6%B3%95%E6%8B%89%E5%88%A9%E9%81%87%E4%B8%8A%E5%85%B0%E5%8D%9A%E5%9F%BA%E5%B0%BC%23) `181.8K 🔥` `+23%`
1. [副省长电话被拉黑后](https://s.weibo.com/weibo?q=%23%E5%89%AF%E7%9C%81%E9%95%BF%E7%94%B5%E8%AF%9D%E8%A2%AB%E6%8B%89%E9%BB%91%E5%90%8E%23) `176.9K 🔥` `+23%`
1. [30多岁中国女子在韩机场高架桥坠亡 (Chinese woman in her 30s fell to her death from an airport viaduct in South Korea)](https://s.weibo.com/weibo?q=%2330%E5%A4%9A%E5%B2%81%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%AD%90%E5%9C%A8%E9%9F%A9%E6%9C%BA%E5%9C%BA%E9%AB%98%E6%9E%B6%E6%A1%A5%E5%9D%A0%E4%BA%A1%23) `161.5K 🔥` `+82%`
1. [马年春晚部分节目单曝光](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%B9%B4%E6%98%A5%E6%99%9A%E9%83%A8%E5%88%86%E8%8A%82%E7%9B%AE%E5%8D%95%E6%9B%9D%E5%85%89%23) `111.4K 🔥` `+36%`
1. [过年放假模式已开启 (New Year holiday mode is on)](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%B9%B4%E6%94%BE%E5%81%87%E6%A8%A1%E5%BC%8F%E5%B7%B2%E5%BC%80%E5%90%AF%23) `622.8K 🔥`
1. [迪丽热巴马年央视春晚](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%A9%AC%E5%B9%B4%E5%A4%AE%E8%A7%86%E6%98%A5%E6%99%9A%23) `430.6K 🔥`
1. [谷爱凌直言睡不太够想多休息 (Gu Ailing said frankly that she didn’t sleep enough and wanted to rest more)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%9B%B4%E8%A8%80%E7%9D%A1%E4%B8%8D%E5%A4%AA%E5%A4%9F%E6%83%B3%E5%A4%9A%E4%BC%91%E6%81%AF%23) `181.7K 🔥`
1. [几杯去世](https://s.weibo.com/weibo?q=%23%E5%87%A0%E6%9D%AF%E5%8E%BB%E4%B8%96%23) `171.3K 🔥`
1. [白敬亭 宋轶 (Bai Jingting Song Yi)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%20%E5%AE%8B%E8%BD%B6%23) `168.1K 🔥`
1. [吴迪说后悔生三个孩子](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%BF%AA%E8%AF%B4%E5%90%8E%E6%82%94%E7%94%9F%E4%B8%89%E4%B8%AA%E5%AD%A9%E5%AD%90%23) `164.3K 🔥`
1. [小S小女儿长大了 (Little S’s little daughter has grown up)](https://s.weibo.com/weibo?q=%23%E5%B0%8FS%E5%B0%8F%E5%A5%B3%E5%84%BF%E9%95%BF%E5%A4%A7%E4%BA%86%23) `160.1K 🔥`
1. [建议大家千万不要一边做一边怀疑](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E4%B8%80%E8%BE%B9%E5%81%9A%E4%B8%80%E8%BE%B9%E6%80%80%E7%96%91%23) `155.4K 🔥`
1. [千问让我实现了景区门票自由](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E8%AE%A9%E6%88%91%E5%AE%9E%E7%8E%B0%E4%BA%86%E6%99%AF%E5%8C%BA%E9%97%A8%E7%A5%A8%E8%87%AA%E7%94%B1%23) `136.0K 🔥`
1. [宋轶 情侣背景](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E8%BD%B6%20%E6%83%85%E4%BE%A3%E8%83%8C%E6%99%AF%23) `135.1K 🔥`
1. [土耳其一航班上发生大规模斗殴](https://s.weibo.com/weibo?q=%23%E5%9C%9F%E8%80%B3%E5%85%B6%E4%B8%80%E8%88%AA%E7%8F%AD%E4%B8%8A%E5%8F%91%E7%94%9F%E5%A4%A7%E8%A7%84%E6%A8%A1%E6%96%97%E6%AE%B4%23) `129.5K 🔥`
1. [伤心swimming爆料后再怒发8条 (Sad swimming posted 8 more angry messages after breaking the news)](https://s.weibo.com/weibo?q=%23%E4%BC%A4%E5%BF%83swimming%E7%88%86%E6%96%99%E5%90%8E%E5%86%8D%E6%80%92%E5%8F%918%E6%9D%A1%23) `129.1K 🔥`
1. [奥斯卡回应什么时候和孙乐言结婚](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E6%96%AF%E5%8D%A1%E5%9B%9E%E5%BA%94%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E5%92%8C%E5%AD%99%E4%B9%90%E8%A8%80%E7%BB%93%E5%A9%9A%23) `115.0K 🔥`
1. [乡镇公务员相亲称现实有时远超感情](https://s.weibo.com/weibo?q=%23%E4%B9%A1%E9%95%87%E5%85%AC%E5%8A%A1%E5%91%98%E7%9B%B8%E4%BA%B2%E7%A7%B0%E7%8E%B0%E5%AE%9E%E6%9C%89%E6%97%B6%E8%BF%9C%E8%B6%85%E6%84%9F%E6%83%85%23) `93.6K 🔥`
1. [郑钦文退赛](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E9%80%80%E8%B5%9B%23) `770.4K 🔥` `-26%`
1. [猫 算我求你了洗洗脚吧](https://s.weibo.com/weibo?q=%23%E7%8C%AB%20%E7%AE%97%E6%88%91%E6%B1%82%E4%BD%A0%E4%BA%86%E6%B4%97%E6%B4%97%E8%84%9A%E5%90%A7%23) `196.5K 🔥` `-47%`
1. [春节偏财运爆表的星座](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E5%81%8F%E8%B4%A2%E8%BF%90%E7%88%86%E8%A1%A8%E7%9A%84%E6%98%9F%E5%BA%A7%23) `192.6K 🔥` `-35%`
1. [谷爱凌被迫损失1天U池训练时间 (Gu Ailing was forced to lose 1 day of U pool training time)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E8%A2%AB%E8%BF%AB%E6%8D%9F%E5%A4%B11%E5%A4%A9U%E6%B1%A0%E8%AE%AD%E7%BB%83%E6%97%B6%E9%97%B4%23) `191.2K 🔥` `-75%`
1. [过年做美甲别窝囊](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%B9%B4%E5%81%9A%E7%BE%8E%E7%94%B2%E5%88%AB%E7%AA%9D%E5%9B%8A%23) `121.9K 🔥` `-21%`
1. [27岁乡村女教师相亲20次 (A 27-year-old rural female teacher went on blind dates 20 times)](https://s.weibo.com/weibo?q=%2327%E5%B2%81%E4%B9%A1%E6%9D%91%E5%A5%B3%E6%95%99%E5%B8%88%E7%9B%B8%E4%BA%B220%E6%AC%A1%23) `93.9K 🔥` `-35%`
1. [宋威龙赵今麦抱着同一束花](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E8%B5%B5%E4%BB%8A%E9%BA%A6%E6%8A%B1%E7%9D%80%E5%90%8C%E4%B8%80%E6%9D%9F%E8%8A%B1%23) `93.0K 🔥` `-37%`
1. [迪丽热巴六点多就起床健身](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%85%AD%E7%82%B9%E5%A4%9A%E5%B0%B1%E8%B5%B7%E5%BA%8A%E5%81%A5%E8%BA%AB%23) `84.0K 🔥` `-28%`
1. [Angelababy撕拉片 权威脸蛋](https://s.weibo.com/weibo?q=%23Angelababy%E6%92%95%E6%8B%89%E7%89%87%20%E6%9D%83%E5%A8%81%E8%84%B8%E8%9B%8B%23) `83.8K 🔥` `-42%`
1. [80后未婚男子纠结过年是否发红包](https://s.weibo.com/weibo?q=%2380%E5%90%8E%E6%9C%AA%E5%A9%9A%E7%94%B7%E5%AD%90%E7%BA%A0%E7%BB%93%E8%BF%87%E5%B9%B4%E6%98%AF%E5%90%A6%E5%8F%91%E7%BA%A2%E5%8C%85%23) `81.1K 🔥` `-44%`

Updated at 2026-02-15 16:53:32

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
