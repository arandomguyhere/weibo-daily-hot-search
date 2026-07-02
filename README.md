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

1. [奕境华为乾崑创天穹智盾安全架构 (Yijing Huawei Qiankunchuang Tianqiong Intelligent Shield Security Architecture)](https://s.weibo.com/weibo?q=%23%E5%A5%95%E5%A2%83%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91%E5%88%9B%E5%A4%A9%E7%A9%B9%E6%99%BA%E7%9B%BE%E5%AE%89%E5%85%A8%E6%9E%B6%E6%9E%84%23) `118.5K 🔥` `NEW`
1. [西班牙进球被吹](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E8%BF%9B%E7%90%83%E8%A2%AB%E5%90%B9%23) `104.9K 🔥` `NEW`
1. [西班牙半场1比0奥地利](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E5%8D%8A%E5%9C%BA1%E6%AF%940%E5%A5%A5%E5%9C%B0%E5%88%A9%23) `94.1K 🔥` `NEW`
1. [王一博代言骆驼防晒](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%BB%A3%E8%A8%80%E9%AA%86%E9%A9%BC%E9%98%B2%E6%99%92%23) `89.9K 🔥` `NEW`
1. [奥亚萨瓦尔破门](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E4%BA%9A%E8%90%A8%E7%93%A6%E5%B0%94%E7%A0%B4%E9%97%A8%23) `78.4K 🔥` `NEW`
1. [猫猫有点像堕天使的眼泪](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E7%8C%AB%E6%9C%89%E7%82%B9%E5%83%8F%E5%A0%95%E5%A4%A9%E4%BD%BF%E7%9A%84%E7%9C%BC%E6%B3%AA%23) `36.7K 🔥` `NEW`
1. [北京JDG对战西安WE](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%ACJDG%E5%AF%B9%E6%88%98%E8%A5%BF%E5%AE%89WE%23) `36.7K 🔥` `NEW`
1. [你不能赌每一个学生都阳光活泼](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%B8%8D%E8%83%BD%E8%B5%8C%E6%AF%8F%E4%B8%80%E4%B8%AA%E5%AD%A6%E7%94%9F%E9%83%BD%E9%98%B3%E5%85%89%E6%B4%BB%E6%B3%BC%23) `36.4K 🔥` `NEW`
1. [西班牙vs奥地利](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99vs%E5%A5%A5%E5%9C%B0%E5%88%A9%23) `326.8K 🔥` `+172%`
1. [C罗8场世界杯淘汰赛0球0助 (Cristiano Ronaldo has 0 goals and 0 assists in 8 World Cup knockout games)](https://s.weibo.com/weibo?q=%23C%E7%BD%978%E5%9C%BA%E4%B8%96%E7%95%8C%E6%9D%AF%E6%B7%98%E6%B1%B0%E8%B5%9B0%E7%90%830%E5%8A%A9%23) `191.1K 🔥` `-45%`
1. [我国发展动能持续迸发 (my country's development momentum continues to burst out)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%8F%91%E5%B1%95%E5%8A%A8%E8%83%BD%E6%8C%81%E7%BB%AD%E8%BF%B8%E5%8F%91%23) `122.4K 🔥` `-38%`
1. [瑶一瑶妈妈瘦了20斤](https://s.weibo.com/weibo?q=%23%E7%91%B6%E4%B8%80%E7%91%B6%E5%A6%88%E5%A6%88%E7%98%A6%E4%BA%8620%E6%96%A4%23) `99.2K 🔥` `-50%`
1. [白鹿方回应喝茶替身 (Bai Lufang responded to drinking tea as a substitute)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%96%B9%E5%9B%9E%E5%BA%94%E5%96%9D%E8%8C%B6%E6%9B%BF%E8%BA%AB%23) `61.7K 🔥` `-43%`
1. [影视飓风员工道歉](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8E%E5%91%98%E5%B7%A5%E9%81%93%E6%AD%89%23) `59.2K 🔥` `-51%`
1. [日本网友以为酱油是日本特有的](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%BD%91%E5%8F%8B%E4%BB%A5%E4%B8%BA%E9%85%B1%E6%B2%B9%E6%98%AF%E6%97%A5%E6%9C%AC%E7%89%B9%E6%9C%89%E7%9A%84%23) `55.2K 🔥` `-49%`
1. [突然发现普通家庭没教社会化](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E6%99%AE%E9%80%9A%E5%AE%B6%E5%BA%AD%E6%B2%A1%E6%95%99%E7%A4%BE%E4%BC%9A%E5%8C%96%23) `55.2K 🔥` `-49%`
1. [茉莉奶白换彩色头像](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E6%8D%A2%E5%BD%A9%E8%89%B2%E5%A4%B4%E5%83%8F%23) `54.8K 🔥` `-49%`
1. [姆巴佩的脸怎么了](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%9A%84%E8%84%B8%E6%80%8E%E4%B9%88%E4%BA%86%23) `54.8K 🔥` `-76%`
1. [LV 欺负古代人不会注册商标 (LV bullies ancient people and doesn’t know how to register a trademark)](https://s.weibo.com/weibo?q=%23LV%20%E6%AC%BA%E8%B4%9F%E5%8F%A4%E4%BB%A3%E4%BA%BA%E4%B8%8D%E4%BC%9A%E6%B3%A8%E5%86%8C%E5%95%86%E6%A0%87%23) `54.1K 🔥` `-50%`
1. [茉莉奶白形似LV商标被判无效](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E5%BD%A2%E4%BC%BCLV%E5%95%86%E6%A0%87%E8%A2%AB%E5%88%A4%E6%97%A0%E6%95%88%23) `48.6K 🔥` `-55%`
1. [月薪5千男子为结婚给女友转账141万](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA5%E5%8D%83%E7%94%B7%E5%AD%90%E4%B8%BA%E7%BB%93%E5%A9%9A%E7%BB%99%E5%A5%B3%E5%8F%8B%E8%BD%AC%E8%B4%A6141%E4%B8%87%23) `46.5K 🔥` `-57%`
1. [教师职称待遇培养未来5年有变化](https://s.weibo.com/weibo?q=%23%E6%95%99%E5%B8%88%E8%81%8C%E7%A7%B0%E5%BE%85%E9%81%87%E5%9F%B9%E5%85%BB%E6%9C%AA%E6%9D%A55%E5%B9%B4%E6%9C%89%E5%8F%98%E5%8C%96%23) `42.3K 🔥` `-61%`
1. [山航很着急为您服务哈](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%88%AA%E5%BE%88%E7%9D%80%E6%80%A5%E4%B8%BA%E6%82%A8%E6%9C%8D%E5%8A%A1%E5%93%88%23) `42.0K 🔥` `-61%`
1. [LV起诉茉莉奶白判赔1030万 (LV sues Jasmine Milk and awards 10.3 million yuan in damages)](https://s.weibo.com/weibo?q=%23LV%E8%B5%B7%E8%AF%89%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E5%88%A4%E8%B5%941030%E4%B8%87%23) `40.6K 🔥` `-62%`
1. [高考699分女孩家被围堵善意变负担](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%80%83699%E5%88%86%E5%A5%B3%E5%AD%A9%E5%AE%B6%E8%A2%AB%E5%9B%B4%E5%A0%B5%E5%96%84%E6%84%8F%E5%8F%98%E8%B4%9F%E6%8B%85%23) `39.5K 🔥` `-63%`
1. [微博访客记录](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E8%AE%BF%E5%AE%A2%E8%AE%B0%E5%BD%95%23) `39.3K 🔥` `-63%`
1. [德国牧羊犬因不放毛绒大象未过考核](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E5%9B%BD%E7%89%A7%E7%BE%8A%E7%8A%AC%E5%9B%A0%E4%B8%8D%E6%94%BE%E6%AF%9B%E7%BB%92%E5%A4%A7%E8%B1%A1%E6%9C%AA%E8%BF%87%E8%80%83%E6%A0%B8%23) `39.2K 🔥` `-63%`
1. [LV你身后空无一人](https://s.weibo.com/weibo?q=%23LV%E4%BD%A0%E8%BA%AB%E5%90%8E%E7%A9%BA%E6%97%A0%E4%B8%80%E4%BA%BA%23) `38.9K 🔥` `-64%`
1. [亚马尔希望半决赛对法国](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E5%B8%8C%E6%9C%9B%E5%8D%8A%E5%86%B3%E8%B5%9B%E5%AF%B9%E6%B3%95%E5%9B%BD%23) `38.9K 🔥` `-63%`
1. [办公室已经三天没人开口说话了](https://s.weibo.com/weibo?q=%23%E5%8A%9E%E5%85%AC%E5%AE%A4%E5%B7%B2%E7%BB%8F%E4%B8%89%E5%A4%A9%E6%B2%A1%E4%BA%BA%E5%BC%80%E5%8F%A3%E8%AF%B4%E8%AF%9D%E4%BA%86%23) `38.8K 🔥` `-64%`
1. [C罗莫德里奇正面交锋](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E8%8E%AB%E5%BE%B7%E9%87%8C%E5%A5%87%E6%AD%A3%E9%9D%A2%E4%BA%A4%E9%94%8B%23) `38.6K 🔥` `-64%`
1. [男子不掀马桶圈妻子跟擦10年后崩溃](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%8D%E6%8E%80%E9%A9%AC%E6%A1%B6%E5%9C%88%E5%A6%BB%E5%AD%90%E8%B7%9F%E6%93%A610%E5%B9%B4%E5%90%8E%E5%B4%A9%E6%BA%83%23) `38.6K 🔥` `-63%`
1. [毛不易 音乐节](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E4%B8%8D%E6%98%93%20%E9%9F%B3%E4%B9%90%E8%8A%82%23) `38.4K 🔥` `-64%`
1. [男子山里死守3.5小时静等菌子长大 (Man stayed in the mountains for 3.5 hours waiting for the fungi to grow)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%B1%B1%E9%87%8C%E6%AD%BB%E5%AE%883.5%E5%B0%8F%E6%97%B6%E9%9D%99%E7%AD%89%E8%8F%8C%E5%AD%90%E9%95%BF%E5%A4%A7%23) `38.4K 🔥` `-64%`
1. [影视飓风员工下岛第一件事暴揍Tim](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8E%E5%91%98%E5%B7%A5%E4%B8%8B%E5%B2%9B%E7%AC%AC%E4%B8%80%E4%BB%B6%E4%BA%8B%E6%9A%B4%E6%8F%8DTim%23) `38.3K 🔥` `-64%`
1. [一个妈妈在女儿小学毕业典礼上的发言 (A mother's speech at her daughter's elementary school graduation ceremony)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E5%A6%88%E5%A6%88%E5%9C%A8%E5%A5%B3%E5%84%BF%E5%B0%8F%E5%AD%A6%E6%AF%95%E4%B8%9A%E5%85%B8%E7%A4%BC%E4%B8%8A%E7%9A%84%E5%8F%91%E8%A8%80%23) `38.2K 🔥` `-64%`
1. [熬夜晕倒后尿失禁了](https://s.weibo.com/weibo?q=%23%E7%86%AC%E5%A4%9C%E6%99%95%E5%80%92%E5%90%8E%E5%B0%BF%E5%A4%B1%E7%A6%81%E4%BA%86%23) `38.1K 🔥` `-65%`
1. [婚纱照还在 拍婚纱照的铂爵旅拍没了](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E7%BA%B1%E7%85%A7%E8%BF%98%E5%9C%A8%20%E6%8B%8D%E5%A9%9A%E7%BA%B1%E7%85%A7%E7%9A%84%E9%93%82%E7%88%B5%E6%97%85%E6%8B%8D%E6%B2%A1%E4%BA%86%23) `38.0K 🔥` `-64%`
1. [影视飓风 直播事故 (Film and television hurricane live broadcast accident)](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E9%A3%93%E9%A3%8E%20%E7%9B%B4%E6%92%AD%E4%BA%8B%E6%95%85%23) `37.9K 🔥` `-64%`
1. [王俊凯你要不回头看看伴舞](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%BD%A0%E8%A6%81%E4%B8%8D%E5%9B%9E%E5%A4%B4%E7%9C%8B%E7%9C%8B%E4%BC%B4%E8%88%9E%23) `37.8K 🔥` `-64%`
1. [爸爸揍儿子的视频火了](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E6%8F%8D%E5%84%BF%E5%AD%90%E7%9A%84%E8%A7%86%E9%A2%91%E7%81%AB%E4%BA%86%23) `37.7K 🔥` `-64%`
1. [小鹏MONAL03价格](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FMONAL03%E4%BB%B7%E6%A0%BC%23) `37.6K 🔥` `-65%`
1. [小县城的瑜伽馆审美](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%8E%BF%E5%9F%8E%E7%9A%84%E7%91%9C%E4%BC%BD%E9%A6%86%E5%AE%A1%E7%BE%8E%23) `37.5K 🔥` `-65%`
1. [男顾客酒后伸手摸老板娘臀部](https://s.weibo.com/weibo?q=%23%E7%94%B7%E9%A1%BE%E5%AE%A2%E9%85%92%E5%90%8E%E4%BC%B8%E6%89%8B%E6%91%B8%E8%80%81%E6%9D%BF%E5%A8%98%E8%87%80%E9%83%A8%23) `37.4K 🔥` `-64%`
1. [野狗骨头拍出了宋威龙的死角 (Wild Dog Bones captured Song Weilong’s blind spot)](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E6%8B%8D%E5%87%BA%E4%BA%86%E5%AE%8B%E5%A8%81%E9%BE%99%E7%9A%84%E6%AD%BB%E8%A7%92%23) `37.3K 🔥` `-65%`
1. [女子吃隔夜卤味进ICU炎症超标400倍](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%90%83%E9%9A%94%E5%A4%9C%E5%8D%A4%E5%91%B3%E8%BF%9BICU%E7%82%8E%E7%97%87%E8%B6%85%E6%A0%87400%E5%80%8D%23) `37.2K 🔥` `-64%`
1. [男子在柬埔寨被两次转卖惨不忍睹 (The man was resold twice in Cambodia in terrible circumstances)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9C%A8%E6%9F%AC%E5%9F%94%E5%AF%A8%E8%A2%AB%E4%B8%A4%E6%AC%A1%E8%BD%AC%E5%8D%96%E6%83%A8%E4%B8%8D%E5%BF%8D%E7%9D%B9%23) `37.1K 🔥` `-65%`
1. [3人发布涉赛格坠楼事件谣言被罚 (Three people were fined for publishing rumors about SEG falling from a building)](https://s.weibo.com/weibo?q=%233%E4%BA%BA%E5%8F%91%E5%B8%83%E6%B6%89%E8%B5%9B%E6%A0%BC%E5%9D%A0%E6%A5%BC%E4%BA%8B%E4%BB%B6%E8%B0%A3%E8%A8%80%E8%A2%AB%E7%BD%9A%23) `37.0K 🔥` `-64%`
1. [2026F1英国大奖赛 (2026 F1 British Grand Prix)](https://s.weibo.com/weibo?q=%232026F1%E8%8B%B1%E5%9B%BD%E5%A4%A7%E5%A5%96%E8%B5%9B%23) `37.0K 🔥` `-65%`
1. [非农数据](https://s.weibo.com/weibo?q=%23%E9%9D%9E%E5%86%9C%E6%95%B0%E6%8D%AE%23) `36.9K 🔥` `-65%`
1. [C罗喊话给我们主场](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%96%8A%E8%AF%9D%E7%BB%99%E6%88%91%E4%BB%AC%E4%B8%BB%E5%9C%BA%23) `36.6K 🔥` `-65%`
1. [勒布伦祝贺王楚钦孙颖莎](https://s.weibo.com/weibo?q=%23%E5%8B%92%E5%B8%83%E4%BC%A6%E7%A5%9D%E8%B4%BA%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%23) `36.4K 🔥` `-88%`

Updated at 2026-07-03 04:12:40

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
