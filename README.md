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

1. [微信状态 访客记录 (WeChat status visitor record)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E7%8A%B6%E6%80%81%20%E8%AE%BF%E5%AE%A2%E8%AE%B0%E5%BD%95%23) `1.0M 🔥` `+140%`
1. [烫牛奶是善良的食物 (Scalded milk is a kind food)](https://s.weibo.com/weibo?q=%23%E7%83%AB%E7%89%9B%E5%A5%B6%E6%98%AF%E5%96%84%E8%89%AF%E7%9A%84%E9%A3%9F%E7%89%A9%23) `456.4K 🔥` `+136%`
1. [2026互联中国公益行动](https://s.weibo.com/weibo?q=%232026%E4%BA%92%E8%81%94%E4%B8%AD%E5%9B%BD%E5%85%AC%E7%9B%8A%E8%A1%8C%E5%8A%A8%23) `361.5K 🔥` `+135%`
1. [微信公关总监曾回应访客功能 (WeChat Public Relations Director once responded to the guest function)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E5%85%AC%E5%85%B3%E6%80%BB%E7%9B%91%E6%9B%BE%E5%9B%9E%E5%BA%94%E8%AE%BF%E5%AE%A2%E5%8A%9F%E8%83%BD%23) `318.7K 🔥` `+125%`
1. [吴彤直播道歉](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%BD%A4%E7%9B%B4%E6%92%AD%E9%81%93%E6%AD%89%23) `211.0K 🔥` `+72%`
1. [焦虑型人格的真实表现](https://s.weibo.com/weibo?q=%23%E7%84%A6%E8%99%91%E5%9E%8B%E4%BA%BA%E6%A0%BC%E7%9A%84%E7%9C%9F%E5%AE%9E%E8%A1%A8%E7%8E%B0%23) `157.1K 🔥` `+106%`
1. [你脸上敷的嘴里吃的或含广东大蟑螂](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E8%84%B8%E4%B8%8A%E6%95%B7%E7%9A%84%E5%98%B4%E9%87%8C%E5%90%83%E7%9A%84%E6%88%96%E5%90%AB%E5%B9%BF%E4%B8%9C%E5%A4%A7%E8%9F%91%E8%9E%82%23) `104.0K 🔥` `+68%`
1. [常石磊国乐无双发言 (Chang Shilei's Chinese National Music Unparalleled Speech)](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E7%9F%B3%E7%A3%8A%E5%9B%BD%E4%B9%90%E6%97%A0%E5%8F%8C%E5%8F%91%E8%A8%80%23) `103.1K 🔥` `+105%`
1. [四川叫震生的孩子今年18岁](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%8F%AB%E9%9C%87%E7%94%9F%E7%9A%84%E5%AD%A9%E5%AD%90%E4%BB%8A%E5%B9%B418%E5%B2%81%23) `94.6K 🔥` `+124%`
1. [开榴莲开出三房榴莲糖](https://s.weibo.com/weibo?q=%23%E5%BC%80%E6%A6%B4%E8%8E%B2%E5%BC%80%E5%87%BA%E4%B8%89%E6%88%BF%E6%A6%B4%E8%8E%B2%E7%B3%96%23) `83.9K 🔥` `+76%`
1. [女孩演出完退礼服被商家曝光 (The girl took off her dress after the performance and was exposed by the merchant)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%BC%94%E5%87%BA%E5%AE%8C%E9%80%80%E7%A4%BC%E6%9C%8D%E8%A2%AB%E5%95%86%E5%AE%B6%E6%9B%9D%E5%85%89%23) `83.7K 🔥` `+77%`
1. [青海17岁失联高中女生遗体已找到](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%B5%B717%E5%B2%81%E5%A4%B1%E8%81%94%E9%AB%98%E4%B8%AD%E5%A5%B3%E7%94%9F%E9%81%97%E4%BD%93%E5%B7%B2%E6%89%BE%E5%88%B0%23) `83.3K 🔥` `+83%`
1. [儿子高三脑出血妈妈十几年失去自我](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E9%AB%98%E4%B8%89%E8%84%91%E5%87%BA%E8%A1%80%E5%A6%88%E5%A6%88%E5%8D%81%E5%87%A0%E5%B9%B4%E5%A4%B1%E5%8E%BB%E8%87%AA%E6%88%91%23) `82.4K 🔥` `+97%`
1. [马龙夏露晒伦敦同款情侣照](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E5%A4%8F%E9%9C%B2%E6%99%92%E4%BC%A6%E6%95%A6%E5%90%8C%E6%AC%BE%E6%83%85%E4%BE%A3%E7%85%A7%23) `82.0K 🔥` `+198%`
1. [男子凌晨遭追打直奔武警营门求救 (A man was chased and beaten early in the morning and went straight to the gate of the armed police camp to seek help.)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%87%8C%E6%99%A8%E9%81%AD%E8%BF%BD%E6%89%93%E7%9B%B4%E5%A5%94%E6%AD%A6%E8%AD%A6%E8%90%A5%E9%97%A8%E6%B1%82%E6%95%91%23) `81.5K 🔥` `+111%`
1. [成年人的崩溃从父母生病开始](https://s.weibo.com/weibo?q=%23%E6%88%90%E5%B9%B4%E4%BA%BA%E7%9A%84%E5%B4%A9%E6%BA%83%E4%BB%8E%E7%88%B6%E6%AF%8D%E7%94%9F%E7%97%85%E5%BC%80%E5%A7%8B%23) `81.1K 🔥` `+107%`
1. [A股史诗级爆发原因 (Reasons for the epic outbreak of A-shares)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%8F%B2%E8%AF%97%E7%BA%A7%E7%88%86%E5%8F%91%E5%8E%9F%E5%9B%A0%23) `80.7K 🔥` `+120%`
1. [玉泽演尼坤已婚和未婚的区别](https://s.weibo.com/weibo?q=%23%E7%8E%89%E6%B3%BD%E6%BC%94%E5%B0%BC%E5%9D%A4%E5%B7%B2%E5%A9%9A%E5%92%8C%E6%9C%AA%E5%A9%9A%E7%9A%84%E5%8C%BA%E5%88%AB%23) `62.1K 🔥` `+126%`
1. [12306回应动车卧铺加装床帘](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E5%8A%A8%E8%BD%A6%E5%8D%A7%E9%93%BA%E5%8A%A0%E8%A3%85%E5%BA%8A%E5%B8%98%23) `52.7K 🔥` `+35%`
1. [时代少年团演唱会 青岛 (Times Youth League Concert Qingdao)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%BC%94%E5%94%B1%E4%BC%9A%20%E9%9D%92%E5%B2%9B%23) `45.5K 🔥` `+66%`
1. [金银价格大涨](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%93%B6%E4%BB%B7%E6%A0%BC%E5%A4%A7%E6%B6%A8%23) `45.2K 🔥` `+22%`
1. [汶川地震18周年纪念海报](https://s.weibo.com/weibo?q=%23%E6%B1%B6%E5%B7%9D%E5%9C%B0%E9%9C%8718%E5%91%A8%E5%B9%B4%E7%BA%AA%E5%BF%B5%E6%B5%B7%E6%8A%A5%23) `44.1K 🔥` `+23%`
1. [萨摩耶偷面包全过程 (The whole process of Samoyed stealing bread)](https://s.weibo.com/weibo?q=%23%E8%90%A8%E6%91%A9%E8%80%B6%E5%81%B7%E9%9D%A2%E5%8C%85%E5%85%A8%E8%BF%87%E7%A8%8B%23) `42.4K 🔥` `+54%`
1. [下次我就这样喝牛奶](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E6%AC%A1%E6%88%91%E5%B0%B1%E8%BF%99%E6%A0%B7%E5%96%9D%E7%89%9B%E5%A5%B6%23) `42.4K 🔥` `+54%`
1. [张小斐新角色眼里全是野心 (Zhang Xiaofei's new character is full of ambition)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%E6%96%B0%E8%A7%92%E8%89%B2%E7%9C%BC%E9%87%8C%E5%85%A8%E6%98%AF%E9%87%8E%E5%BF%83%23) `42.4K 🔥` `+55%`
1. [消防队炒菜放油太多冒浓烟被当失火](https://s.weibo.com/weibo?q=%23%E6%B6%88%E9%98%B2%E9%98%9F%E7%82%92%E8%8F%9C%E6%94%BE%E6%B2%B9%E5%A4%AA%E5%A4%9A%E5%86%92%E6%B5%93%E7%83%9F%E8%A2%AB%E5%BD%93%E5%A4%B1%E7%81%AB%23) `42.4K 🔥` `+55%`
1. [佳偶天成大结局](https://s.weibo.com/weibo?q=%23%E4%BD%B3%E5%81%B6%E5%A4%A9%E6%88%90%E5%A4%A7%E7%BB%93%E5%B1%80%23) `42.4K 🔥` `+54%`
1. [韩国涨怕了 (South Korea is afraid of rising prices)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%B6%A8%E6%80%95%E4%BA%86%23) `42.4K 🔥` `+54%`
1. [加拿大温哥华发生一起离奇事故](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%8B%BF%E5%A4%A7%E6%B8%A9%E5%93%A5%E5%8D%8E%E5%8F%91%E7%94%9F%E4%B8%80%E8%B5%B7%E7%A6%BB%E5%A5%87%E4%BA%8B%E6%95%85%23) `42.4K 🔥` `+54%`
1. [王俊凯狄仁杰剧照 (Stills of Wang Junkai and Di Renjie)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%8B%84%E4%BB%81%E6%9D%B0%E5%89%A7%E7%85%A7%23) `42.3K 🔥` `+54%`
1. [妈妈的日记里有一只1990年的蚊子 (There is a mosquito from 1990 in my mother's diary)](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E7%9A%84%E6%97%A5%E8%AE%B0%E9%87%8C%E6%9C%89%E4%B8%80%E5%8F%AA1990%E5%B9%B4%E7%9A%84%E8%9A%8A%E5%AD%90%23) `42.3K 🔥` `+39%`
1. [急救宣布老人死亡家属发现仍有呼吸](https://s.weibo.com/weibo?q=%23%E6%80%A5%E6%95%91%E5%AE%A3%E5%B8%83%E8%80%81%E4%BA%BA%E6%AD%BB%E4%BA%A1%E5%AE%B6%E5%B1%9E%E5%8F%91%E7%8E%B0%E4%BB%8D%E6%9C%89%E5%91%BC%E5%90%B8%23) `42.3K 🔥` `+54%`
1. [等风热吻你 宋祖儿宋威龙](https://s.weibo.com/weibo?q=%23%E7%AD%89%E9%A3%8E%E7%83%AD%E5%90%BB%E4%BD%A0%20%E5%AE%8B%E7%A5%96%E5%84%BF%E5%AE%8B%E5%A8%81%E9%BE%99%23) `42.3K 🔥` `+55%`
1. [孙颖莎11350分女单世一](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E11350%E5%88%86%E5%A5%B3%E5%8D%95%E4%B8%96%E4%B8%80%23) `42.3K 🔥` `+55%`
1. [致敬重生的汶川 (Tribute to the rebirth of Wenchuan)](https://s.weibo.com/weibo?q=%23%E8%87%B4%E6%95%AC%E9%87%8D%E7%94%9F%E7%9A%84%E6%B1%B6%E5%B7%9D%23) `42.3K 🔥` `+35%`
1. [老人有房有儿有存款住超市10年](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E6%9C%89%E6%88%BF%E6%9C%89%E5%84%BF%E6%9C%89%E5%AD%98%E6%AC%BE%E4%BD%8F%E8%B6%85%E5%B8%8210%E5%B9%B4%23) `42.3K 🔥` `+54%`
1. [主角](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `42.3K 🔥` `+54%`
1. [女子戒碳水狂减重吃出糖尿病前期](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%88%92%E7%A2%B3%E6%B0%B4%E7%8B%82%E5%87%8F%E9%87%8D%E5%90%83%E5%87%BA%E7%B3%96%E5%B0%BF%E7%97%85%E5%89%8D%E6%9C%9F%23) `42.3K 🔥` `+54%`
1. [国际奥委会国际乒联盛赞国乒双冠卫冕 (The International Olympic Committee and ITTF praised the national table tennis team for defending its double crown.)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E5%A5%A5%E5%A7%94%E4%BC%9A%E5%9B%BD%E9%99%85%E4%B9%92%E8%81%94%E7%9B%9B%E8%B5%9E%E5%9B%BD%E4%B9%92%E5%8F%8C%E5%86%A0%E5%8D%AB%E5%86%95%23) `42.2K 🔥` `+54%`
1. [瑜伽馆回应女子天天上课被踢出群](https://s.weibo.com/weibo?q=%23%E7%91%9C%E4%BC%BD%E9%A6%86%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%90%E5%A4%A9%E5%A4%A9%E4%B8%8A%E8%AF%BE%E8%A2%AB%E8%B8%A2%E5%87%BA%E7%BE%A4%23) `42.2K 🔥` `+54%`
1. [优酷来了个全男综艺 (Youku has an all-male variety show)](https://s.weibo.com/weibo?q=%23%E4%BC%98%E9%85%B7%E6%9D%A5%E4%BA%86%E4%B8%AA%E5%85%A8%E7%94%B7%E7%BB%BC%E8%89%BA%23) `42.2K 🔥` `+22%`
1. [少年歌行 (Youth Song Xing)](https://s.weibo.com/weibo?q=%23%E5%B0%91%E5%B9%B4%E6%AD%8C%E8%A1%8C%23) `42.2K 🔥` `+54%`
1. [1颗话梅129元有人泡水喝3天](https://s.weibo.com/weibo?q=%231%E9%A2%97%E8%AF%9D%E6%A2%85129%E5%85%83%E6%9C%89%E4%BA%BA%E6%B3%A1%E6%B0%B4%E5%96%9D3%E5%A4%A9%23) `42.2K 🔥` `+54%`
1. [JDG首次晋级胜者组决赛](https://s.weibo.com/weibo?q=%23JDG%E9%A6%96%E6%AC%A1%E6%99%8B%E7%BA%A7%E8%83%9C%E8%80%85%E7%BB%84%E5%86%B3%E8%B5%9B%23) `42.2K 🔥` `+54%`
1. [佳偶天成 (A match made in heaven)](https://s.weibo.com/weibo?q=%23%E4%BD%B3%E5%81%B6%E5%A4%A9%E6%88%90%23) `42.2K 🔥` `+54%`
1. [腾讯客服称暂未支持访客记录查询](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E5%AE%A2%E6%9C%8D%E7%A7%B0%E6%9A%82%E6%9C%AA%E6%94%AF%E6%8C%81%E8%AE%BF%E5%AE%A2%E8%AE%B0%E5%BD%95%E6%9F%A5%E8%AF%A2%23) `42.2K 🔥` `+54%`
1. [20岁女子生5斤多女儿才知怀孕](https://s.weibo.com/weibo?q=%2320%E5%B2%81%E5%A5%B3%E5%AD%90%E7%94%9F5%E6%96%A4%E5%A4%9A%E5%A5%B3%E5%84%BF%E6%89%8D%E7%9F%A5%E6%80%80%E5%AD%95%23) `44.8K 🔥`
1. [突然发现拼豆B26很像酸豆角 (Suddenly I discovered that Pindou B26 looks like sour beans.)](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E6%8B%BC%E8%B1%86B26%E5%BE%88%E5%83%8F%E9%85%B8%E8%B1%86%E8%A7%92%23) `42.4K 🔥`
1. [单依纯说吴彤谨言慎行](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E8%AF%B4%E5%90%B4%E5%BD%A4%E8%B0%A8%E8%A8%80%E6%85%8E%E8%A1%8C%23) `42.4K 🔥`
1. [法医刘良因家属送梨被告与人串通](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%8C%BB%E5%88%98%E8%89%AF%E5%9B%A0%E5%AE%B6%E5%B1%9E%E9%80%81%E6%A2%A8%E8%A2%AB%E5%91%8A%E4%B8%8E%E4%BA%BA%E4%B8%B2%E9%80%9A%23) `42.3K 🔥`

Updated at 2026-05-12 06:41:38

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
