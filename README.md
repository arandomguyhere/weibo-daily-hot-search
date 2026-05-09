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

1. [王楚钦打哭F勒布伦 (Wang Chuqin cried F Lebrun)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%89%93%E5%93%ADF%E5%8B%92%E5%B8%83%E4%BC%A6%23) `1.3M 🔥` `NEW`
1. [梁靖崑让二追三](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%91%E8%AE%A9%E4%BA%8C%E8%BF%BD%E4%B8%89%23) `327.9K 🔥` `NEW`
1. [全世界我妈妈的名字最好听](https://s.weibo.com/weibo?q=%23%E5%85%A8%E4%B8%96%E7%95%8C%E6%88%91%E5%A6%88%E5%A6%88%E7%9A%84%E5%90%8D%E5%AD%97%E6%9C%80%E5%A5%BD%E5%90%AC%23) `158.2K 🔥` `NEW`
1. [世界杯中国转播费从3亿腰斩到1.5亿](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E4%B8%AD%E5%9B%BD%E8%BD%AC%E6%92%AD%E8%B4%B9%E4%BB%8E3%E4%BA%BF%E8%85%B0%E6%96%A9%E5%88%B01.5%E4%BA%BF%23) `158.0K 🔥` `NEW`
1. [蔡文静经纪人打电话让蔡文静下播](https://s.weibo.com/weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E7%BB%8F%E7%BA%AA%E4%BA%BA%E6%89%93%E7%94%B5%E8%AF%9D%E8%AE%A9%E8%94%A1%E6%96%87%E9%9D%99%E4%B8%8B%E6%92%AD%23) `157.8K 🔥` `NEW`
1. [乘客拒付高速费00后车主果断返程](https://s.weibo.com/weibo?q=%23%E4%B9%98%E5%AE%A2%E6%8B%92%E4%BB%98%E9%AB%98%E9%80%9F%E8%B4%B900%E5%90%8E%E8%BD%A6%E4%B8%BB%E6%9E%9C%E6%96%AD%E8%BF%94%E7%A8%8B%23) `157.6K 🔥` `NEW`
1. [辛芷蕾骑车又摔了四肢全费](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%E9%AA%91%E8%BD%A6%E5%8F%88%E6%91%94%E4%BA%86%E5%9B%9B%E8%82%A2%E5%85%A8%E8%B4%B9%23) `157.4K 🔥` `NEW`
1. [大量UFO画面公布](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%87%8FUFO%E7%94%BB%E9%9D%A2%E5%85%AC%E5%B8%83%23) `157.1K 🔥` `NEW`
1. [月鳞绮纪](https://s.weibo.com/weibo?q=%23%E6%9C%88%E9%B3%9E%E7%BB%AE%E7%BA%AA%23) `157.1K 🔥` `NEW`
1. [刷圈霸榜的奥迪E7X卖28.98万起](https://s.weibo.com/weibo?q=%23%E5%88%B7%E5%9C%88%E9%9C%B8%E6%A6%9C%E7%9A%84%E5%A5%A5%E8%BF%AAE7X%E5%8D%9628.98%E4%B8%87%E8%B5%B7%23) `156.7K 🔥` `NEW`
1. [王暖暖自曝不达成涨粉KPI下播就挨骂 (Wang Nuannuan revealed that she would be scolded if she didn’t reach the follower increase KPI when she downloaded the broadcast.)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9A%96%E6%9A%96%E8%87%AA%E6%9B%9D%E4%B8%8D%E8%BE%BE%E6%88%90%E6%B6%A8%E7%B2%89KPI%E4%B8%8B%E6%92%AD%E5%B0%B1%E6%8C%A8%E9%AA%82%23) `156.4K 🔥` `NEW`
1. [如果一个人长期不工作](https://s.weibo.com/weibo?q=%23%E5%A6%82%E6%9E%9C%E4%B8%80%E4%B8%AA%E4%BA%BA%E9%95%BF%E6%9C%9F%E4%B8%8D%E5%B7%A5%E4%BD%9C%23) `156.3K 🔥` `NEW`
1. [舅妈不敢置信第一时间掀帽确认](https://s.weibo.com/weibo?q=%23%E8%88%85%E5%A6%88%E4%B8%8D%E6%95%A2%E7%BD%AE%E4%BF%A1%E7%AC%AC%E4%B8%80%E6%97%B6%E9%97%B4%E6%8E%80%E5%B8%BD%E7%A1%AE%E8%AE%A4%23) `155.8K 🔥` `NEW`
1. [两张图片成榴莲卖家维权成功关键](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E5%BC%A0%E5%9B%BE%E7%89%87%E6%88%90%E6%A6%B4%E8%8E%B2%E5%8D%96%E5%AE%B6%E7%BB%B4%E6%9D%83%E6%88%90%E5%8A%9F%E5%85%B3%E9%94%AE%23) `155.1K 🔥` `NEW`
1. [小伙刮20元刮刮乐中100万](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E5%88%AE20%E5%85%83%E5%88%AE%E5%88%AE%E4%B9%90%E4%B8%AD100%E4%B8%87%23) `154.9K 🔥` `NEW`
1. [日本男团3比0中国台北](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%94%B7%E5%9B%A23%E6%AF%940%E4%B8%AD%E5%9B%BD%E5%8F%B0%E5%8C%97%23) `154.7K 🔥` `NEW`
1. [央视曝车企一次锁电可省数十亿元](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E8%BD%A6%E4%BC%81%E4%B8%80%E6%AC%A1%E9%94%81%E7%94%B5%E5%8F%AF%E7%9C%81%E6%95%B0%E5%8D%81%E4%BA%BF%E5%85%83%23) `129.4K 🔥` `NEW`
1. [骑士1比2活塞](https://s.weibo.com/weibo?q=%23%E9%AA%91%E5%A3%AB1%E6%AF%942%E6%B4%BB%E5%A1%9E%23) `127.0K 🔥` `NEW`
1. [榴莲事件买家冒用姓名牵连无辜女孩](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E4%BA%8B%E4%BB%B6%E4%B9%B0%E5%AE%B6%E5%86%92%E7%94%A8%E5%A7%93%E5%90%8D%E7%89%B5%E8%BF%9E%E6%97%A0%E8%BE%9C%E5%A5%B3%E5%AD%A9%23) `120.2K 🔥` `NEW`
1. [王楚钦回应国乒3比1法国队](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%9B%9E%E5%BA%94%E5%9B%BD%E4%B9%923%E6%AF%941%E6%B3%95%E5%9B%BD%E9%98%9F%23) `98.3K 🔥` `NEW`
1. [童星阿尔法出演油腻大叔被嘲长歪 (Child star Alpha was teased for his appearance as a greasy uncle)](https://s.weibo.com/weibo?q=%23%E7%AB%A5%E6%98%9F%E9%98%BF%E5%B0%94%E6%B3%95%E5%87%BA%E6%BC%94%E6%B2%B9%E8%85%BB%E5%A4%A7%E5%8F%94%E8%A2%AB%E5%98%B2%E9%95%BF%E6%AD%AA%23) `97.9K 🔥` `NEW`
1. [美国制药巨头正研发汉坦病毒疫苗](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%88%B6%E8%8D%AF%E5%B7%A8%E5%A4%B4%E6%AD%A3%E7%A0%94%E5%8F%91%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%E7%96%AB%E8%8B%97%23) `92.4K 🔥` `NEW`
1. [太空快递跑出中国加速度](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E7%A9%BA%E5%BF%AB%E9%80%92%E8%B7%91%E5%87%BA%E4%B8%AD%E5%9B%BD%E5%8A%A0%E9%80%9F%E5%BA%A6%23) `1.1M 🔥` `+82%`
1. [母亲节](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E8%8A%82%23) `1.0M 🔥` `+40%`
1. [吃米线有助于调节脂肪肝是谣言](https://s.weibo.com/weibo?q=%23%E5%90%83%E7%B1%B3%E7%BA%BF%E6%9C%89%E5%8A%A9%E4%BA%8E%E8%B0%83%E8%8A%82%E8%84%82%E8%82%AA%E8%82%9D%E6%98%AF%E8%B0%A3%E8%A8%80%23) `328.8K 🔥` `+153%`
1. [这一秒过火 (This second went too far)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%23) `158.3K 🔥` `+67%`
1. [怪不得虫子总围着头顶飞 (No wonder bugs always fly around your head)](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E8%99%AB%E5%AD%90%E6%80%BB%E5%9B%B4%E7%9D%80%E5%A4%B4%E9%A1%B6%E9%A3%9E%23) `157.3K 🔥` `+67%`
1. [央视网更正锁电相关报道 (CCTV corrects reports related to power lockout)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E7%BD%91%E6%9B%B4%E6%AD%A3%E9%94%81%E7%94%B5%E7%9B%B8%E5%85%B3%E6%8A%A5%E9%81%93%23) `156.8K 🔥` `+112%`
1. [交管队长回应被举报与女性举止亲密 (Traffic control team leader responds to reports of being intimate with women)](https://s.weibo.com/weibo?q=%23%E4%BA%A4%E7%AE%A1%E9%98%9F%E9%95%BF%E5%9B%9E%E5%BA%94%E8%A2%AB%E4%B8%BE%E6%8A%A5%E4%B8%8E%E5%A5%B3%E6%80%A7%E4%B8%BE%E6%AD%A2%E4%BA%B2%E5%AF%86%23) `155.6K 🔥` `+93%`
1. [给阿嬷的情书票房破亿](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E7%A5%A8%E6%88%BF%E7%A0%B4%E4%BA%BF%23) `155.5K 🔥` `+110%`
1. [跑男收视率 浪姐没播 (Rating of Running Man: Sister Lang is not on the air)](https://s.weibo.com/weibo?q=%23%E8%B7%91%E7%94%B7%E6%94%B6%E8%A7%86%E7%8E%87%20%E6%B5%AA%E5%A7%90%E6%B2%A1%E6%92%AD%23) `155.4K 🔥` `+132%`
1. [美国女子做特殊癖好服务致对方身亡 (American woman performed a special fetish service and the other party died)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A5%B3%E5%AD%90%E5%81%9A%E7%89%B9%E6%AE%8A%E7%99%96%E5%A5%BD%E6%9C%8D%E5%8A%A1%E8%87%B4%E5%AF%B9%E6%96%B9%E8%BA%AB%E4%BA%A1%23) `155.2K 🔥` `+111%`
1. [马龙为男团半决赛开场](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E4%B8%BA%E7%94%B7%E5%9B%A2%E5%8D%8A%E5%86%B3%E8%B5%9B%E5%BC%80%E5%9C%BA%23) `154.5K 🔥` `+111%`
1. [孙颖莎逗笑邱贻可马琳 (Sun Yingsha makes Qiu Yike and Ma Lin laugh)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E9%80%97%E7%AC%91%E9%82%B1%E8%B4%BB%E5%8F%AF%E9%A9%AC%E7%90%B3%23) `154.3K 🔥` `+84%`
1. [29岁未婚育女子宫颈癌离世 (29-year-old unmarried woman with childbirth died of cervical cancer)](https://s.weibo.com/weibo?q=%2329%E5%B2%81%E6%9C%AA%E5%A9%9A%E8%82%B2%E5%A5%B3%E5%AD%90%E5%AE%AB%E9%A2%88%E7%99%8C%E7%A6%BB%E4%B8%96%23) `144.3K 🔥` `+98%`
1. [女子遭8年爱人背叛哭到呼吸碱中毒](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%81%AD8%E5%B9%B4%E7%88%B1%E4%BA%BA%E8%83%8C%E5%8F%9B%E5%93%AD%E5%88%B0%E5%91%BC%E5%90%B8%E7%A2%B1%E4%B8%AD%E6%AF%92%23) `136.8K 🔥` `+88%`
1. [越来越理解什么叫事缓则圆 (I understand more and more what it means to slow things down and make things right)](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E6%9D%A5%E8%B6%8A%E7%90%86%E8%A7%A3%E4%BB%80%E4%B9%88%E5%8F%AB%E4%BA%8B%E7%BC%93%E5%88%99%E5%9C%86%23) `115.1K 🔥` `+27%`
1. [一家三口候车室吃东西垃圾扔满地 (A family of three eats food and litters the floor in the waiting room)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E5%80%99%E8%BD%A6%E5%AE%A4%E5%90%83%E4%B8%9C%E8%A5%BF%E5%9E%83%E5%9C%BE%E6%89%94%E6%BB%A1%E5%9C%B0%23) `111.2K 🔥` `+53%`
1. [安倍晋三遗孀陪赖清德跪日本人](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%80%8D%E6%99%8B%E4%B8%89%E9%81%97%E5%AD%80%E9%99%AA%E8%B5%96%E6%B8%85%E5%BE%B7%E8%B7%AA%E6%97%A5%E6%9C%AC%E4%BA%BA%23) `103.6K 🔥` `+40%`
1. [21世纪大君夫人](https://s.weibo.com/weibo?q=%2321%E4%B8%96%E7%BA%AA%E5%A4%A7%E5%90%9B%E5%A4%AB%E4%BA%BA%23) `94.2K 🔥` `+41%`
1. [周深阿信在鸟巢修提词器 (Zhou Shen and Ashin are repairing the teleprompter in the Bird's Nest)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E9%98%BF%E4%BF%A1%E5%9C%A8%E9%B8%9F%E5%B7%A2%E4%BF%AE%E6%8F%90%E8%AF%8D%E5%99%A8%23) `91.4K 🔥` `+37%`
1. [国乒男团3比1法国男团 (The national table tennis men's team beat the French men's team 3-1)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A23%E6%AF%941%E6%B3%95%E5%9B%BD%E7%94%B7%E5%9B%A2%23) `2.8M 🔥`
1. [林诗栋0比3F勒布伦 (Lin Shidong 0-3F Lebrun)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%AF%97%E6%A0%8B0%E6%AF%943F%E5%8B%92%E5%B8%83%E4%BC%A6%23) `385.0K 🔥`
1. [一根烟头烧掉212万 (One cigarette butt burns 2.12 million)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%A0%B9%E7%83%9F%E5%A4%B4%E7%83%A7%E6%8E%89212%E4%B8%87%23) `350.5K 🔥`
1. [何赛飞怒批姜贞羽](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B5%9B%E9%A3%9E%E6%80%92%E6%89%B9%E5%A7%9C%E8%B4%9E%E7%BE%BD%23) `225.6K 🔥`
1. [陈赫 谁能欺负李晨 (Chen He, who can bully Li Chen?)](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%B5%AB%20%E8%B0%81%E8%83%BD%E6%AC%BA%E8%B4%9F%E6%9D%8E%E6%99%A8%23) `157.9K 🔥` `-45%`
1. [森林北否认与汪峰分手](https://s.weibo.com/weibo?q=%23%E6%A3%AE%E6%9E%97%E5%8C%97%E5%90%A6%E8%AE%A4%E4%B8%8E%E6%B1%AA%E5%B3%B0%E5%88%86%E6%89%8B%23) `156.6K 🔥` `-34%`
1. [国乒男团决赛对阵日本](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E5%86%B3%E8%B5%9B%E5%AF%B9%E9%98%B5%E6%97%A5%E6%9C%AC%23) `156.0K 🔥` `-28%`
1. [蔡文静直播哭着唱歌 (Cai Wenjing cried and sang live)](https://s.weibo.com/weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E7%9B%B4%E6%92%AD%E5%93%AD%E7%9D%80%E5%94%B1%E6%AD%8C%23) `156.0K 🔥` `-45%`
1. [国乒男团进世乒赛决赛](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A2%E8%BF%9B%E4%B8%96%E4%B9%92%E8%B5%9B%E5%86%B3%E8%B5%9B%23) `154.6K 🔥` `-68%`
1. [中国男团1比1法国 (Chinese men's team 1-1 France)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%9B%A21%E6%AF%941%E6%B3%95%E5%9B%BD%23) `91.3K 🔥` `-75%`

Updated at 2026-05-10 07:59:05

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
