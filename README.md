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

1. [美国回应全国航班停飞](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%9B%9E%E5%BA%94%E5%85%A8%E5%9B%BD%E8%88%AA%E7%8F%AD%E5%81%9C%E9%A3%9E%23) `1.4M 🔥` `NEW`
1. [美全国范围实施地面停飞](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%85%A8%E5%9B%BD%E8%8C%83%E5%9B%B4%E5%AE%9E%E6%96%BD%E5%9C%B0%E9%9D%A2%E5%81%9C%E9%A3%9E%23) `889.2K 🔥` `NEW`
1. [张泉灵新视频被指内涵白小纯](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%B3%89%E7%81%B5%E6%96%B0%E8%A7%86%E9%A2%91%E8%A2%AB%E6%8C%87%E5%86%85%E6%B6%B5%E7%99%BD%E5%B0%8F%E7%BA%AF%23) `862.3K 🔥` `NEW`
1. [2027英雄联盟赛事举办地公布](https://s.weibo.com/weibo?q=%232027%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9F%E8%B5%9B%E4%BA%8B%E4%B8%BE%E5%8A%9E%E5%9C%B0%E5%85%AC%E5%B8%83%23) `769.1K 🔥` `NEW`
1. [吃了这么多年鸡蛋可能吃错了](https://s.weibo.com/weibo?q=%23%E5%90%83%E4%BA%86%E8%BF%99%E4%B9%88%E5%A4%9A%E5%B9%B4%E9%B8%A1%E8%9B%8B%E5%8F%AF%E8%83%BD%E5%90%83%E9%94%99%E4%BA%86%23) `676.1K 🔥` `NEW`
1. [全校仅50多岁教师一人自愿当班主任](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%A0%A1%E4%BB%8550%E5%A4%9A%E5%B2%81%E6%95%99%E5%B8%88%E4%B8%80%E4%BA%BA%E8%87%AA%E6%84%BF%E5%BD%93%E7%8F%AD%E4%B8%BB%E4%BB%BB%23) `638.4K 🔥` `NEW`
1. [许飞 厉娜之下众生平等](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E9%A3%9E%20%E5%8E%89%E5%A8%9C%E4%B9%8B%E4%B8%8B%E4%BC%97%E7%94%9F%E5%B9%B3%E7%AD%89%23) `362.0K 🔥` `NEW`
1. [男孩玩手机肘击奶奶被妈妈用胶带绑起](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E7%8E%A9%E6%89%8B%E6%9C%BA%E8%82%98%E5%87%BB%E5%A5%B6%E5%A5%B6%E8%A2%AB%E5%A6%88%E5%A6%88%E7%94%A8%E8%83%B6%E5%B8%A6%E7%BB%91%E8%B5%B7%23) `300.5K 🔥` `NEW`
1. [911后第二次全美停飞](https://s.weibo.com/weibo?q=%23911%E5%90%8E%E7%AC%AC%E4%BA%8C%E6%AC%A1%E5%85%A8%E7%BE%8E%E5%81%9C%E9%A3%9E%23) `267.0K 🔥` `NEW`
1. [JessieJ在上海住酒店开着灯睡了九个小时](https://s.weibo.com/weibo?q=%23JessieJ%E5%9C%A8%E4%B8%8A%E6%B5%B7%E4%BD%8F%E9%85%92%E5%BA%97%E5%BC%80%E7%9D%80%E7%81%AF%E7%9D%A1%E4%BA%86%E4%B9%9D%E4%B8%AA%E5%B0%8F%E6%97%B6%23) `263.1K 🔥` `NEW`
1. [Lisa一脚把人踹下台了](https://s.weibo.com/weibo?q=%23Lisa%E4%B8%80%E8%84%9A%E6%8A%8A%E4%BA%BA%E8%B8%B9%E4%B8%8B%E5%8F%B0%E4%BA%86%23) `259.5K 🔥` `NEW`
1. [请回答1988善宇扮演者酒驾](https://s.weibo.com/weibo?q=%23%E8%AF%B7%E5%9B%9E%E7%AD%941988%E5%96%84%E5%AE%87%E6%89%AE%E6%BC%94%E8%80%85%E9%85%92%E9%A9%BE%23) `258.6K 🔥` `NEW`
1. [黄仁勋辞职或影响史上最大IPO](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E8%BE%9E%E8%81%8C%E6%88%96%E5%BD%B1%E5%93%8D%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%A4%A7IPO%23) `256.1K 🔥` `NEW`
1. [刘宇宁 归期雨抄高音获赞](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%20%E5%BD%92%E6%9C%9F%E9%9B%A8%E6%8A%84%E9%AB%98%E9%9F%B3%E8%8E%B7%E8%B5%9E%23) `252.9K 🔥` `NEW`
1. [英伟达女员工哭了](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%A5%B3%E5%91%98%E5%B7%A5%E5%93%AD%E4%BA%86%23) `247.1K 🔥` `NEW`
1. [Lisa似乎不再是以前那个Lisa了](https://s.weibo.com/weibo?q=%23Lisa%E4%BC%BC%E4%B9%8E%E4%B8%8D%E5%86%8D%E6%98%AF%E4%BB%A5%E5%89%8D%E9%82%A3%E4%B8%AALisa%E4%BA%86%23) `245.6K 🔥` `NEW`
1. [顾客尝了口面整碗扔垃圾桶付钱走人](https://s.weibo.com/weibo?q=%23%E9%A1%BE%E5%AE%A2%E5%B0%9D%E4%BA%86%E5%8F%A3%E9%9D%A2%E6%95%B4%E7%A2%97%E6%89%94%E5%9E%83%E5%9C%BE%E6%A1%B6%E4%BB%98%E9%92%B1%E8%B5%B0%E4%BA%BA%23) `240.2K 🔥` `NEW`
1. [英伟达临时CEO是制衡黄仁勋重要力量](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E4%B8%B4%E6%97%B6CEO%E6%98%AF%E5%88%B6%E8%A1%A1%E9%BB%84%E4%BB%81%E5%8B%8B%E9%87%8D%E8%A6%81%E5%8A%9B%E9%87%8F%23) `233.4K 🔥` `NEW`
1. [顾居居 白小纯](https://s.weibo.com/weibo?q=%23%E9%A1%BE%E5%B1%85%E5%B1%85%20%E7%99%BD%E5%B0%8F%E7%BA%AF%23) `221.9K 🔥` `NEW`
1. [艾薇儿当妈](https://s.weibo.com/weibo?q=%23%E8%89%BE%E8%96%87%E5%84%BF%E5%BD%93%E5%A6%88%23) `207.9K 🔥` `NEW`
1. [深夜徐老师怀孕13周胖7斤](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%A4%9C%E5%BE%90%E8%80%81%E5%B8%88%E6%80%80%E5%AD%9513%E5%91%A8%E8%83%967%E6%96%A4%23) `179.8K 🔥` `NEW`
1. [梓渝说想念的人是YUNI](https://s.weibo.com/weibo?q=%23%E6%A2%93%E6%B8%9D%E8%AF%B4%E6%83%B3%E5%BF%B5%E7%9A%84%E4%BA%BA%E6%98%AFYUNI%23) `178.6K 🔥` `NEW`
1. [产妇剖腹产第二天头发打结全剃光](https://s.weibo.com/weibo?q=%23%E4%BA%A7%E5%A6%87%E5%89%96%E8%85%B9%E4%BA%A7%E7%AC%AC%E4%BA%8C%E5%A4%A9%E5%A4%B4%E5%8F%91%E6%89%93%E7%BB%93%E5%85%A8%E5%89%83%E5%85%89%23) `171.4K 🔥` `NEW`
1. [高迪预告曝光聊天记录](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%BF%AA%E9%A2%84%E5%91%8A%E6%9B%9D%E5%85%89%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `162.5K 🔥` `NEW`
1. [南京零元面馆周边7家店转让](https://s.weibo.com/weibo?q=%23%E5%8D%97%E4%BA%AC%E9%9B%B6%E5%85%83%E9%9D%A2%E9%A6%86%E5%91%A8%E8%BE%B97%E5%AE%B6%E5%BA%97%E8%BD%AC%E8%AE%A9%23) `160.9K 🔥` `NEW`
1. [李嘉格想让小董出去找工作](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%98%89%E6%A0%BC%E6%83%B3%E8%AE%A9%E5%B0%8F%E8%91%A3%E5%87%BA%E5%8E%BB%E6%89%BE%E5%B7%A5%E4%BD%9C%23) `156.6K 🔥` `NEW`
1. [女子回应读博期间3年生下3个孩子](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%9E%E5%BA%94%E8%AF%BB%E5%8D%9A%E6%9C%9F%E9%97%B43%E5%B9%B4%E7%94%9F%E4%B8%8B3%E4%B8%AA%E5%AD%A9%E5%AD%90%23) `137.0K 🔥` `NEW`
1. [青梅竹马结婚双方妈妈是30年闺蜜](https://s.weibo.com/weibo?q=%23%E9%9D%92%E6%A2%85%E7%AB%B9%E9%A9%AC%E7%BB%93%E5%A9%9A%E5%8F%8C%E6%96%B9%E5%A6%88%E5%A6%88%E6%98%AF30%E5%B9%B4%E9%97%BA%E8%9C%9C%23) `136.6K 🔥` `NEW`
1. [BLG和GEN选手对位投票](https://s.weibo.com/weibo?q=%23BLG%E5%92%8CGEN%E9%80%89%E6%89%8B%E5%AF%B9%E4%BD%8D%E6%8A%95%E7%A5%A8%23) `125.0K 🔥` `NEW`
1. [女子推理社](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8E%A8%E7%90%86%E7%A4%BE%23) `119.8K 🔥` `NEW`
1. [陈俊菘0比3方博](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BF%8A%E8%8F%980%E6%AF%943%E6%96%B9%E5%8D%9A%23) `119.4K 🔥` `NEW`
1. [铁路部门通报外籍旅客高铁吸烟](https://s.weibo.com/weibo?q=%23%E9%93%81%E8%B7%AF%E9%83%A8%E9%97%A8%E9%80%9A%E6%8A%A5%E5%A4%96%E7%B1%8D%E6%97%85%E5%AE%A2%E9%AB%98%E9%93%81%E5%90%B8%E7%83%9F%23) `118.6K 🔥` `NEW`
1. [7266次列车员工违规收费被停职](https://s.weibo.com/weibo?q=%237266%E6%AC%A1%E5%88%97%E8%BD%A6%E5%91%98%E5%B7%A5%E8%BF%9D%E8%A7%84%E6%94%B6%E8%B4%B9%E8%A2%AB%E5%81%9C%E8%81%8C%23) `112.7K 🔥` `NEW`
1. [美国夫妇中国旅游试戴假发](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A4%AB%E5%A6%87%E4%B8%AD%E5%9B%BD%E6%97%85%E6%B8%B8%E8%AF%95%E6%88%B4%E5%81%87%E5%8F%91%23) `110.3K 🔥` `NEW`
1. [萨巴伦卡vs斯维托丽娜](https://s.weibo.com/weibo?q=%23%E8%90%A8%E5%B7%B4%E4%BC%A6%E5%8D%A1vs%E6%96%AF%E7%BB%B4%E6%89%98%E4%B8%BD%E5%A8%9C%23) `109.9K 🔥` `NEW`
1. [出击致对手死亡门将被顶格处罚](https://s.weibo.com/weibo?q=%23%E5%87%BA%E5%87%BB%E8%87%B4%E5%AF%B9%E6%89%8B%E6%AD%BB%E4%BA%A1%E9%97%A8%E5%B0%86%E8%A2%AB%E9%A1%B6%E6%A0%BC%E5%A4%84%E7%BD%9A%23) `106.0K 🔥` `NEW`
1. [APEC时隔12年再次来到中国](https://s.weibo.com/weibo?q=%23APEC%E6%97%B6%E9%9A%9412%E5%B9%B4%E5%86%8D%E6%AC%A1%E6%9D%A5%E5%88%B0%E4%B8%AD%E5%9B%BD%23) `864.6K 🔥` `+932%`
1. [老板假装扫了500余次付款码](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%9D%BF%E5%81%87%E8%A3%85%E6%89%AB%E4%BA%86500%E4%BD%99%E6%AC%A1%E4%BB%98%E6%AC%BE%E7%A0%81%23) `676.9K 🔥` `+560%`
1. [父亲动手打孩子路过女子心疼到崩溃](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E5%8A%A8%E6%89%8B%E6%89%93%E5%AD%A9%E5%AD%90%E8%B7%AF%E8%BF%87%E5%A5%B3%E5%AD%90%E5%BF%83%E7%96%BC%E5%88%B0%E5%B4%A9%E6%BA%83%23) `268.5K 🔥` `+570%`
1. [产妇求剖腹产遭拒孩子脑瘫丈夫发声](https://s.weibo.com/weibo?q=%23%E4%BA%A7%E5%A6%87%E6%B1%82%E5%89%96%E8%85%B9%E4%BA%A7%E9%81%AD%E6%8B%92%E5%AD%A9%E5%AD%90%E8%84%91%E7%98%AB%E4%B8%88%E5%A4%AB%E5%8F%91%E5%A3%B0%23) `266.0K 🔥` `+555%`
1. [英伟达股价累涨47万倍](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E8%82%A1%E4%BB%B7%E7%B4%AF%E6%B6%A847%E4%B8%87%E5%80%8D%23) `249.9K 🔥` `+550%`
1. [曝魏晨被雪藏的原因](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%AD%8F%E6%99%A8%E8%A2%AB%E9%9B%AA%E8%97%8F%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `248.1K 🔥` `+455%`
1. [小猫以为人也是怀孕两个月就生](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E4%BB%A5%E4%B8%BA%E4%BA%BA%E4%B9%9F%E6%98%AF%E6%80%80%E5%AD%95%E4%B8%A4%E4%B8%AA%E6%9C%88%E5%B0%B1%E7%94%9F%23) `173.4K 🔥` `+348%`
1. [小男孩山林失联5只狗狗不离不弃](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%94%B7%E5%AD%A9%E5%B1%B1%E6%9E%97%E5%A4%B1%E8%81%945%E5%8F%AA%E7%8B%97%E7%8B%97%E4%B8%8D%E7%A6%BB%E4%B8%8D%E5%BC%83%23) `145.4K 🔥` `+263%`
1. [顾居居拉表让白小纯不要愧疚](https://s.weibo.com/weibo?q=%23%E9%A1%BE%E5%B1%85%E5%B1%85%E6%8B%89%E8%A1%A8%E8%AE%A9%E7%99%BD%E5%B0%8F%E7%BA%AF%E4%B8%8D%E8%A6%81%E6%84%A7%E7%96%9A%23) `142.4K 🔥` `+95%`
1. [儿子问独生子女难有责任感吗](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E9%97%AE%E7%8B%AC%E7%94%9F%E5%AD%90%E5%A5%B3%E9%9A%BE%E6%9C%89%E8%B4%A3%E4%BB%BB%E6%84%9F%E5%90%97%23) `141.0K 🔥` `+265%`
1. [青稚马天宇看许飞给厉娜夹菜的表情](https://s.weibo.com/weibo?q=%23%E9%9D%92%E7%A8%9A%E9%A9%AC%E5%A4%A9%E5%AE%87%E7%9C%8B%E8%AE%B8%E9%A3%9E%E7%BB%99%E5%8E%89%E5%A8%9C%E5%A4%B9%E8%8F%9C%E7%9A%84%E8%A1%A8%E6%83%85%23) `123.0K 🔥` `+215%`
1. [成年人的相爱其实难度很高](https://s.weibo.com/weibo?q=%23%E6%88%90%E5%B9%B4%E4%BA%BA%E7%9A%84%E7%9B%B8%E7%88%B1%E5%85%B6%E5%AE%9E%E9%9A%BE%E5%BA%A6%E5%BE%88%E9%AB%98%23) `113.6K 🔥` `+189%`
1. [老公一天干了一辈子家务](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%85%AC%E4%B8%80%E5%A4%A9%E5%B9%B2%E4%BA%86%E4%B8%80%E8%BE%88%E5%AD%90%E5%AE%B6%E5%8A%A1%23) `103.4K 🔥` `+149%`
1. [主人提醒邻居别给猫按电梯](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E4%BA%BA%E6%8F%90%E9%86%92%E9%82%BB%E5%B1%85%E5%88%AB%E7%BB%99%E7%8C%AB%E6%8C%89%E7%94%B5%E6%A2%AF%23) `159.6K 🔥`

Updated at 2026-11-14 09:37:22

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
