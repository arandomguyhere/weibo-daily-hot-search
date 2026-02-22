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

1. [半夜出发的大聪明全堵在高速上了 (The smart guy who set out in the middle of the night was stuck on the highway.)](https://s.weibo.com/weibo?q=%23%E5%8D%8A%E5%A4%9C%E5%87%BA%E5%8F%91%E7%9A%84%E5%A4%A7%E8%81%AA%E6%98%8E%E5%85%A8%E5%A0%B5%E5%9C%A8%E9%AB%98%E9%80%9F%E4%B8%8A%E4%BA%86%23) `839.9K 🔥` `NEW`
1. [中国红闪耀米兰冬奥闭幕式](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%BA%A2%E9%97%AA%E8%80%80%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E9%97%AD%E5%B9%95%E5%BC%8F%23) `174.8K 🔥` `NEW`
1. [女子动车厕所冲走50g金手链](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%8A%A8%E8%BD%A6%E5%8E%95%E6%89%80%E5%86%B2%E8%B5%B050g%E9%87%91%E6%89%8B%E9%93%BE%23) `96.5K 🔥` `NEW`
1. [女子跟男友回老家看到木棍梯子惊呆](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%B7%9F%E7%94%B7%E5%8F%8B%E5%9B%9E%E8%80%81%E5%AE%B6%E7%9C%8B%E5%88%B0%E6%9C%A8%E6%A3%8D%E6%A2%AF%E5%AD%90%E6%83%8A%E5%91%86%23) `84.9K 🔥` `NEW`
1. [伊朗革命卫队据报接管真主党](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%9D%A9%E5%91%BD%E5%8D%AB%E9%98%9F%E6%8D%AE%E6%8A%A5%E6%8E%A5%E7%AE%A1%E7%9C%9F%E4%B8%BB%E5%85%9A%23) `67.6K 🔥` `NEW`
1. [大年初七](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B9%B4%E5%88%9D%E4%B8%83%23) `60.7K 🔥` `NEW`
1. [本周做什么都顺的星座](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%A8%E5%81%9A%E4%BB%80%E4%B9%88%E9%83%BD%E9%A1%BA%E7%9A%84%E6%98%9F%E5%BA%A7%23) `53.0K 🔥` `NEW`
1. [八段锦跟练版来了](https://s.weibo.com/weibo?q=%23%E5%85%AB%E6%AE%B5%E9%94%A6%E8%B7%9F%E7%BB%83%E7%89%88%E6%9D%A5%E4%BA%86%23) `49.1K 🔥` `NEW`
1. [徐梦桃换个身份亮相闭幕式](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E6%8D%A2%E4%B8%AA%E8%BA%AB%E4%BB%BD%E4%BA%AE%E7%9B%B8%E9%97%AD%E5%B9%95%E5%BC%8F%23) `45.9K 🔥` `NEW`
1. [王濛刘翔真是几十年难遇](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%88%98%E7%BF%94%E7%9C%9F%E6%98%AF%E5%87%A0%E5%8D%81%E5%B9%B4%E9%9A%BE%E9%81%87%23) `41.9K 🔥` `NEW`
1. [谷爱凌说拿到奖牌让世界尊重中国队 (Gu Ailing said winning medals will make the world respect the Chinese team)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E8%AF%B4%E6%8B%BF%E5%88%B0%E5%A5%96%E7%89%8C%E8%AE%A9%E4%B8%96%E7%95%8C%E5%B0%8A%E9%87%8D%E4%B8%AD%E5%9B%BD%E9%98%9F%23) `30.2K 🔥` `NEW`
1. [英雄志群演分享第一次拍戏见到成毅](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E9%9B%84%E5%BF%97%E7%BE%A4%E6%BC%94%E5%88%86%E4%BA%AB%E7%AC%AC%E4%B8%80%E6%AC%A1%E6%8B%8D%E6%88%8F%E8%A7%81%E5%88%B0%E6%88%90%E6%AF%85%23) `27.9K 🔥` `NEW`
1. [谷爱凌壁纸](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%A3%81%E7%BA%B8%23) `26.6K 🔥` `NEW`
1. [意大利把闭幕式办成文旅宣传片](https://s.weibo.com/weibo?q=%23%E6%84%8F%E5%A4%A7%E5%88%A9%E6%8A%8A%E9%97%AD%E5%B9%95%E5%BC%8F%E5%8A%9E%E6%88%90%E6%96%87%E6%97%85%E5%AE%A3%E4%BC%A0%E7%89%87%23) `626.5K 🔥` `+1978%`
1. [返程前的告别看泪目了 (I cried when I said goodbye before returning home)](https://s.weibo.com/weibo?q=%23%E8%BF%94%E7%A8%8B%E5%89%8D%E7%9A%84%E5%91%8A%E5%88%AB%E7%9C%8B%E6%B3%AA%E7%9B%AE%E4%BA%86%23) `495.6K 🔥` `+57%`
1. [苏翊鸣手持五星红旗入场 (Su Yiming entered the venue holding a five-star red flag)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E6%89%8B%E6%8C%81%E4%BA%94%E6%98%9F%E7%BA%A2%E6%97%97%E5%85%A5%E5%9C%BA%23) `186.0K 🔥` `+65%`
1. [本届冬奥会最佳镜头 (The best shots from this Winter Olympics)](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%B1%8A%E5%86%AC%E5%A5%A5%E4%BC%9A%E6%9C%80%E4%BD%B3%E9%95%9C%E5%A4%B4%23) `83.3K 🔥` `+66%`
1. [一觉醒来米兰冬奥闭幕了 (When I woke up, the Milan Winter Olympics ended)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%A7%89%E9%86%92%E6%9D%A5%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E9%97%AD%E5%B9%95%E4%BA%86%23) `82.9K 🔥` `+96%`
1. [谷爱凌夺冠后得知奶奶去世 (After Gu Ailing won the championship, she learned that her grandmother had passed away)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%A4%BA%E5%86%A0%E5%90%8E%E5%BE%97%E7%9F%A5%E5%A5%B6%E5%A5%B6%E5%8E%BB%E4%B8%96%23) `80.6K 🔥` `+94%`
1. [奶奶已不记得谷爱凌参加过冬奥会 (Grandma no longer remembers that Gu Ailing participated in the Winter Olympics)](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E5%A5%B6%E5%B7%B2%E4%B8%8D%E8%AE%B0%E5%BE%97%E8%B0%B7%E7%88%B1%E5%87%8C%E5%8F%82%E5%8A%A0%E8%BF%87%E5%86%AC%E5%A5%A5%E4%BC%9A%23) `77.9K 🔥` `+88%`
1. [贾玲剧组 女演员可以坐箱子 (Jia Ling crew actress can sit on the box)](https://s.weibo.com/weibo?q=%23%E8%B4%BE%E7%8E%B2%E5%89%A7%E7%BB%84%20%E5%A5%B3%E6%BC%94%E5%91%98%E5%8F%AF%E4%BB%A5%E5%9D%90%E7%AE%B1%E5%AD%90%23) `75.7K 🔥` `+88%`
1. [贝加尔湖溺亡中国游客遗体全部打捞上岸](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%8A%A0%E5%B0%94%E6%B9%96%E6%BA%BA%E4%BA%A1%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E9%81%97%E4%BD%93%E5%85%A8%E9%83%A8%E6%89%93%E6%8D%9E%E4%B8%8A%E5%B2%B8%23) `72.2K 🔥` `+77%`
1. [周深 王一博老师什么不火呀 (Zhou Shen, why is Teacher Wang Yibo not popular?)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%20%E7%8E%8B%E4%B8%80%E5%8D%9A%E8%80%81%E5%B8%88%E4%BB%80%E4%B9%88%E4%B8%8D%E7%81%AB%E5%91%80%23) `71.3K 🔥` `+75%`
1. [父亲遇3岁儿子坠楼下意识伸手接 (Father subconsciously reaches out to catch his 3-year-old son after he falls downstairs)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E9%81%873%E5%B2%81%E5%84%BF%E5%AD%90%E5%9D%A0%E6%A5%BC%E4%B8%8B%E6%84%8F%E8%AF%86%E4%BC%B8%E6%89%8B%E6%8E%A5%23) `69.5K 🔥` `+74%`
1. [林志颖客串韩剧上MBC打歌舞台 (Jimmy Lin guest-starred in a Korean drama on MBC's singing stage)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%97%E9%A2%96%E5%AE%A2%E4%B8%B2%E9%9F%A9%E5%89%A7%E4%B8%8AMBC%E6%89%93%E6%AD%8C%E8%88%9E%E5%8F%B0%23) `66.7K 🔥` `+88%`
1. [孟子义李昀锐 四搭 (Meng Ziyi Li Yunrui Si Da)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%20%E5%9B%9B%E6%90%AD%23) `65.5K 🔥` `+66%`
1. [日本一寺庙举行裸祭上万名男性参加 (A Japanese temple holds a nude festival attended by tens of thousands of men)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%B8%80%E5%AF%BA%E5%BA%99%E4%B8%BE%E8%A1%8C%E8%A3%B8%E7%A5%AD%E4%B8%8A%E4%B8%87%E5%90%8D%E7%94%B7%E6%80%A7%E5%8F%82%E5%8A%A0%23) `60.3K 🔥` `+71%`
1. [90位外嫁女集体回村过年当事人发声 (90 married women collectively returned to the village to celebrate the New Year. The client spoke out)](https://s.weibo.com/weibo?q=%2390%E4%BD%8D%E5%A4%96%E5%AB%81%E5%A5%B3%E9%9B%86%E4%BD%93%E5%9B%9E%E6%9D%91%E8%BF%87%E5%B9%B4%E5%BD%93%E4%BA%8B%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `50.9K 🔥` `+50%`
1. [虞书欣何与 神仙肉 (Yu Shuxin He and Fairy Meat)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%BD%95%E4%B8%8E%20%E7%A5%9E%E4%BB%99%E8%82%89%23) `44.6K 🔥` `+29%`
1. [中国队的镜头好长](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E7%9A%84%E9%95%9C%E5%A4%B4%E5%A5%BD%E9%95%BF%23) `41.9K 🔥` `+61%`
1. [白鹿曾舜晞梁永棋陈鹤一韩国逛街 (White Deer Zeng Shun Xi Liang Yongqi Chen Heyi Shopping in Korea)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9B%BE%E8%88%9C%E6%99%9E%E6%A2%81%E6%B0%B8%E6%A3%8B%E9%99%88%E9%B9%A4%E4%B8%80%E9%9F%A9%E5%9B%BD%E9%80%9B%E8%A1%97%23) `40.8K 🔥` `+77%`
1. [曝iPhone18Pro正测试深红色](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhone18Pro%E6%AD%A3%E6%B5%8B%E8%AF%95%E6%B7%B1%E7%BA%A2%E8%89%B2%23) `40.8K 🔥` `+23%`
1. [4千元相机没舍得买5年后涨至9千](https://s.weibo.com/weibo?q=%234%E5%8D%83%E5%85%83%E7%9B%B8%E6%9C%BA%E6%B2%A1%E8%88%8D%E5%BE%97%E4%B9%B05%E5%B9%B4%E5%90%8E%E6%B6%A8%E8%87%B39%E5%8D%83%23) `36.7K 🔥` `+55%`
1. [64岁演员江华暴瘦引网友担忧 (64-year-old actor Jiang Hua's sudden weight loss worries netizens)](https://s.weibo.com/weibo?q=%2364%E5%B2%81%E6%BC%94%E5%91%98%E6%B1%9F%E5%8D%8E%E6%9A%B4%E7%98%A6%E5%BC%95%E7%BD%91%E5%8F%8B%E6%8B%85%E5%BF%A7%23) `35.8K 🔥` `+56%`
1. [镖人 (escort)](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `32.4K 🔥` `+27%`
1. [大学生唯一拒绝的红包](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%94%AF%E4%B8%80%E6%8B%92%E7%BB%9D%E7%9A%84%E7%BA%A2%E5%8C%85%23) `29.4K 🔥` `+28%`
1. [谷爱凌金牌 (Gu Ailing gold medal)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E9%87%91%E7%89%8C%23) `53.5K 🔥`
1. [意大利人是真懂艺术的](https://s.weibo.com/weibo?q=%23%E6%84%8F%E5%A4%A7%E5%88%A9%E4%BA%BA%E6%98%AF%E7%9C%9F%E6%87%82%E8%89%BA%E6%9C%AF%E7%9A%84%23) `48.7K 🔥`
1. [中国队5金4银6铜收官 (The Chinese team finished with 5 golds, 4 silvers and 6 bronzes)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F5%E9%87%914%E9%93%B66%E9%93%9C%E6%94%B6%E5%AE%98%23) `42.5K 🔥`
1. [俄外交部警告韩国 (Russian Foreign Ministry warns South Korea)](https://s.weibo.com/weibo?q=%23%E4%BF%84%E5%A4%96%E4%BA%A4%E9%83%A8%E8%AD%A6%E5%91%8A%E9%9F%A9%E5%9B%BD%23) `32.6K 🔥`
1. [再见米兰你好阿尔卑斯 (Goodbye Milan hello Alps)](https://s.weibo.com/weibo?q=%23%E5%86%8D%E8%A7%81%E7%B1%B3%E5%85%B0%E4%BD%A0%E5%A5%BD%E9%98%BF%E5%B0%94%E5%8D%91%E6%96%AF%23) `31.2K 🔥`
1. [白鹿这眼线是自己画的吧 (Did Bailu draw this eyeliner himself?)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%BF%99%E7%9C%BC%E7%BA%BF%E6%98%AF%E8%87%AA%E5%B7%B1%E7%94%BB%E7%9A%84%E5%90%A7%23) `30.7K 🔥`
1. [孙耀威当年真没骗人简直是仙女下凡 (Sun Yaowei really didn't lie back then, she was like a fairy descending to earth.)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E8%80%80%E5%A8%81%E5%BD%93%E5%B9%B4%E7%9C%9F%E6%B2%A1%E9%AA%97%E4%BA%BA%E7%AE%80%E7%9B%B4%E6%98%AF%E4%BB%99%E5%A5%B3%E4%B8%8B%E5%87%A1%23) `30.5K 🔥`
1. [男子返程堵车12小时变24小时 (Man stuck in traffic jam on return trip from 12 hours to 24 hours)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%BF%94%E7%A8%8B%E5%A0%B5%E8%BD%A612%E5%B0%8F%E6%97%B6%E5%8F%9824%E5%B0%8F%E6%97%B6%23) `27.2K 🔥`
1. [不让江山 (Don't give way to the country)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%AE%A9%E6%B1%9F%E5%B1%B1%23) `27.1K 🔥`
1. [镖人连续4天票房逆跌 (The box office of Daredevil fell for 4 consecutive days)](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E8%BF%9E%E7%BB%AD4%E5%A4%A9%E7%A5%A8%E6%88%BF%E9%80%86%E8%B7%8C%23) `172.7K 🔥` `-59%`
1. [米兰冬奥会圣火熄灭 (Milan Winter Olympics flame extinguished)](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E4%BC%9A%E5%9C%A3%E7%81%AB%E7%86%84%E7%81%AD%23) `56.6K 🔥` `-90%`
1. [冬奥会闭幕式 (Winter Olympics Closing Ceremony)](https://s.weibo.com/weibo?q=%23%E5%86%AC%E5%A5%A5%E4%BC%9A%E9%97%AD%E5%B9%95%E5%BC%8F%23) `33.9K 🔥` `-65%`
1. [此时的观众还不知跑男将会有多爆火](https://s.weibo.com/weibo?q=%23%E6%AD%A4%E6%97%B6%E7%9A%84%E8%A7%82%E4%BC%97%E8%BF%98%E4%B8%8D%E7%9F%A5%E8%B7%91%E7%94%B7%E5%B0%86%E4%BC%9A%E6%9C%89%E5%A4%9A%E7%88%86%E7%81%AB%23) `27.7K 🔥` `-30%`

Updated at 2026-02-23 07:33:36

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
