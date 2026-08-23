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

1. [硕士生签约管理岗入职被安排打螺丝](https://s.weibo.com/weibo?q=%23%E7%A1%95%E5%A3%AB%E7%94%9F%E7%AD%BE%E7%BA%A6%E7%AE%A1%E7%90%86%E5%B2%97%E5%85%A5%E8%81%8C%E8%A2%AB%E5%AE%89%E6%8E%92%E6%89%93%E8%9E%BA%E4%B8%9D%23) `821.5K 🔥` `NEW`
1. [王俊凯JOTOYS品牌全球代言人](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AFJOTOYS%E5%93%81%E7%89%8C%E5%85%A8%E7%90%83%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `424.6K 🔥` `NEW`
1. [四六级成绩](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%85%AD%E7%BA%A7%E6%88%90%E7%BB%A9%23) `338.1K 🔥` `NEW`
1. [宋亚轩爱马仕项链](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E7%88%B1%E9%A9%AC%E4%BB%95%E9%A1%B9%E9%93%BE%23) `234.1K 🔥` `NEW`
1. [白鹿曾买了835张宋雨琦数字专辑](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9B%BE%E4%B9%B0%E4%BA%86835%E5%BC%A0%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%95%B0%E5%AD%97%E4%B8%93%E8%BE%91%23) `120.3K 🔥` `NEW`
1. [刘浩存 韩沛颖](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%20%E9%9F%A9%E6%B2%9B%E9%A2%96%23) `119.9K 🔥` `NEW`
1. [韩沛颖直播](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%B2%9B%E9%A2%96%E7%9B%B4%E6%92%AD%23) `118.6K 🔥` `NEW`
1. [李昀锐可以去参加披荆斩棘了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%8F%AF%E4%BB%A5%E5%8E%BB%E5%8F%82%E5%8A%A0%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E4%BA%86%23) `117.5K 🔥` `NEW`
1. [人类400米纪录保持者祝贺闪电破纪录](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%B1%BB400%E7%B1%B3%E7%BA%AA%E5%BD%95%E4%BF%9D%E6%8C%81%E8%80%85%E7%A5%9D%E8%B4%BA%E9%97%AA%E7%94%B5%E7%A0%B4%E7%BA%AA%E5%BD%95%23) `115.7K 🔥` `NEW`
1. [韩沛颖说刘浩存14岁就跟某某某导了](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%B2%9B%E9%A2%96%E8%AF%B4%E5%88%98%E6%B5%A9%E5%AD%9814%E5%B2%81%E5%B0%B1%E8%B7%9F%E6%9F%90%E6%9F%90%E6%9F%90%E5%AF%BC%E4%BA%86%23) `114.1K 🔥` `NEW`
1. [那英杨晓培朋友圈重合度](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E6%9D%A8%E6%99%93%E5%9F%B9%E6%9C%8B%E5%8F%8B%E5%9C%88%E9%87%8D%E5%90%88%E5%BA%A6%23) `113.9K 🔥` `NEW`
1. [林一没穿鞋就跑去看瘦了的郭京飞](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%B8%80%E6%B2%A1%E7%A9%BF%E9%9E%8B%E5%B0%B1%E8%B7%91%E5%8E%BB%E7%9C%8B%E7%98%A6%E4%BA%86%E7%9A%84%E9%83%AD%E4%BA%AC%E9%A3%9E%23) `112.2K 🔥` `NEW`
1. [贵州舅舅带外甥打针像按年猪](https://s.weibo.com/weibo?q=%23%E8%B4%B5%E5%B7%9E%E8%88%85%E8%88%85%E5%B8%A6%E5%A4%96%E7%94%A5%E6%89%93%E9%92%88%E5%83%8F%E6%8C%89%E5%B9%B4%E7%8C%AA%23) `111.6K 🔥` `NEW`
1. [宋亚轩身上没有展示位了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E8%BA%AB%E4%B8%8A%E6%B2%A1%E6%9C%89%E5%B1%95%E7%A4%BA%E4%BD%8D%E4%BA%86%23) `110.8K 🔥` `NEW`
1. [曹骏组唱时代少年团要你管](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E7%BB%84%E5%94%B1%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E8%A6%81%E4%BD%A0%E7%AE%A1%23) `109.4K 🔥` `NEW`
1. [2026成都车展](https://s.weibo.com/weibo?q=%232026%E6%88%90%E9%83%BD%E8%BD%A6%E5%B1%95%23) `104.9K 🔥` `NEW`
1. [买票占座规则明确了然后呢](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E7%A5%A8%E5%8D%A0%E5%BA%A7%E8%A7%84%E5%88%99%E6%98%8E%E7%A1%AE%E4%BA%86%E7%84%B6%E5%90%8E%E5%91%A2%23) `595.9K 🔥` `+33%`
1. [2万件中央救灾物资支持广西](https://s.weibo.com/weibo?q=%232%E4%B8%87%E4%BB%B6%E4%B8%AD%E5%A4%AE%E6%95%91%E7%81%BE%E7%89%A9%E8%B5%84%E6%94%AF%E6%8C%81%E5%B9%BF%E8%A5%BF%23) `561.2K 🔥` `+33%`
1. [从140瘦到了95斤](https://s.weibo.com/weibo?q=%23%E4%BB%8E140%E7%98%A6%E5%88%B0%E4%BA%8695%E6%96%A4%23) `545.5K 🔥` `+31%`
1. [张韶涵演唱会突发心脏不适](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9F%B6%E6%B6%B5%E6%BC%94%E5%94%B1%E4%BC%9A%E7%AA%81%E5%8F%91%E5%BF%83%E8%84%8F%E4%B8%8D%E9%80%82%23) `533.8K 🔥` `+46%`
1. [破产姐妹史上最长售后](https://s.weibo.com/weibo?q=%23%E7%A0%B4%E4%BA%A7%E5%A7%90%E5%A6%B9%E5%8F%B2%E4%B8%8A%E6%9C%80%E9%95%BF%E5%94%AE%E5%90%8E%23) `351.3K 🔥` `+41%`
1. [老人店内离世店主协商赔偿1.9万元](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E5%BA%97%E5%86%85%E7%A6%BB%E4%B8%96%E5%BA%97%E4%B8%BB%E5%8D%8F%E5%95%86%E8%B5%94%E5%81%BF1.9%E4%B8%87%E5%85%83%23) `241.2K 🔥` `+154%`
1. [一定要珍惜你身体里尚存的欲望](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%9A%E8%A6%81%E7%8F%8D%E6%83%9C%E4%BD%A0%E8%BA%AB%E4%BD%93%E9%87%8C%E5%B0%9A%E5%AD%98%E7%9A%84%E6%AC%B2%E6%9C%9B%23) `236.9K 🔥` `+58%`
1. [傅首尔前夫发文怼留几手](https://s.weibo.com/weibo?q=%23%E5%82%85%E9%A6%96%E5%B0%94%E5%89%8D%E5%A4%AB%E5%8F%91%E6%96%87%E6%80%BC%E7%95%99%E5%87%A0%E6%89%8B%23) `236.6K 🔥` `+38%`
1. [甲醛白菜让多重抽检成摆设](https://s.weibo.com/weibo?q=%23%E7%94%B2%E9%86%9B%E7%99%BD%E8%8F%9C%E8%AE%A9%E5%A4%9A%E9%87%8D%E6%8A%BD%E6%A3%80%E6%88%90%E6%91%86%E8%AE%BE%23) `160.5K 🔥` `+168%`
1. [父亲直播目睹儿子篮球赛倒地后离世](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E7%9B%B4%E6%92%AD%E7%9B%AE%E7%9D%B9%E5%84%BF%E5%AD%90%E7%AF%AE%E7%90%83%E8%B5%9B%E5%80%92%E5%9C%B0%E5%90%8E%E7%A6%BB%E4%B8%96%23) `153.3K 🔥` `+41%`
1. [梁王世锦赛夺冠](https://s.weibo.com/weibo?q=%23%E6%A2%81%E7%8E%8B%E4%B8%96%E9%94%A6%E8%B5%9B%E5%A4%BA%E5%86%A0%23) `146.7K 🔥` `+43%`
1. [芒果新人向王一博道歉](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E6%96%B0%E4%BA%BA%E5%90%91%E7%8E%8B%E4%B8%80%E5%8D%9A%E9%81%93%E6%AD%89%23) `121.0K 🔥` `+21%`
1. [嫦娥七号任务不能在今年预定窗口实施](https://s.weibo.com/weibo?q=%23%E5%AB%A6%E5%A8%A5%E4%B8%83%E5%8F%B7%E4%BB%BB%E5%8A%A1%E4%B8%8D%E8%83%BD%E5%9C%A8%E4%BB%8A%E5%B9%B4%E9%A2%84%E5%AE%9A%E7%AA%97%E5%8F%A3%E5%AE%9E%E6%96%BD%23) `120.9K 🔥` `+210%`
1. [四十多岁女丁克想生孩子](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%8D%81%E5%A4%9A%E5%B2%81%E5%A5%B3%E4%B8%81%E5%85%8B%E6%83%B3%E7%94%9F%E5%AD%A9%E5%AD%90%23) `119.0K 🔥` `+156%`
1. [原来内向的人都是这样交朋友的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%86%85%E5%90%91%E7%9A%84%E4%BA%BA%E9%83%BD%E6%98%AF%E8%BF%99%E6%A0%B7%E4%BA%A4%E6%9C%8B%E5%8F%8B%E7%9A%84%23) `115.0K 🔥` `+43%`
1. [我题目都没听懂他答案就出来了](https://s.weibo.com/weibo?q=%23%E6%88%91%E9%A2%98%E7%9B%AE%E9%83%BD%E6%B2%A1%E5%90%AC%E6%87%82%E4%BB%96%E7%AD%94%E6%A1%88%E5%B0%B1%E5%87%BA%E6%9D%A5%E4%BA%86%23) `113.2K 🔥` `+207%`
1. [我的前半生删去原著罗子君女儿](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%E5%88%A0%E5%8E%BB%E5%8E%9F%E8%91%97%E7%BD%97%E5%AD%90%E5%90%9B%E5%A5%B3%E5%84%BF%23) `110.2K 🔥` `+199%`
1. [打赏要求陪睡案女主播合租室友发声](https://s.weibo.com/weibo?q=%23%E6%89%93%E8%B5%8F%E8%A6%81%E6%B1%82%E9%99%AA%E7%9D%A1%E6%A1%88%E5%A5%B3%E4%B8%BB%E6%92%AD%E5%90%88%E7%A7%9F%E5%AE%A4%E5%8F%8B%E5%8F%91%E5%A3%B0%23) `110.0K 🔥` `+170%`
1. [美国女记者无法对孩子说中国不好](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A5%B3%E8%AE%B0%E8%80%85%E6%97%A0%E6%B3%95%E5%AF%B9%E5%AD%A9%E5%AD%90%E8%AF%B4%E4%B8%AD%E5%9B%BD%E4%B8%8D%E5%A5%BD%23) `108.9K 🔥` `+194%`
1. [留几手回应傅首尔瘦了](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%87%A0%E6%89%8B%E5%9B%9E%E5%BA%94%E5%82%85%E9%A6%96%E5%B0%94%E7%98%A6%E4%BA%86%23) `108.2K 🔥` `+146%`
1. [陈星旭王玉雯好浓的姐狗味](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%98%9F%E6%97%AD%E7%8E%8B%E7%8E%89%E9%9B%AF%E5%A5%BD%E6%B5%93%E7%9A%84%E5%A7%90%E7%8B%97%E5%91%B3%23) `107.9K 🔥` `+87%`
1. [难道樊振东是暑期档又一黑马](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E9%81%93%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%98%AF%E6%9A%91%E6%9C%9F%E6%A1%A3%E5%8F%88%E4%B8%80%E9%BB%91%E9%A9%AC%23) `106.9K 🔥` `+188%`
1. [中国男孩和小黄鸭在外网火了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%AD%A9%E5%92%8C%E5%B0%8F%E9%BB%84%E9%B8%AD%E5%9C%A8%E5%A4%96%E7%BD%91%E7%81%AB%E4%BA%86%23) `106.4K 🔥` `+187%`
1. [永康公厕被打女子发声](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E5%BA%B7%E5%85%AC%E5%8E%95%E8%A2%AB%E6%89%93%E5%A5%B3%E5%AD%90%E5%8F%91%E5%A3%B0%23) `105.9K 🔥` `+128%`
1. [巴西连颅女婴分离手术后相继去世](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E8%BF%9E%E9%A2%85%E5%A5%B3%E5%A9%B4%E5%88%86%E7%A6%BB%E6%89%8B%E6%9C%AF%E5%90%8E%E7%9B%B8%E7%BB%A7%E5%8E%BB%E4%B8%96%23) `105.7K 🔥` `+187%`
1. [印度1家3口坠崖前母亲曾哭求愿离婚](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A61%E5%AE%B63%E5%8F%A3%E5%9D%A0%E5%B4%96%E5%89%8D%E6%AF%8D%E4%BA%B2%E6%9B%BE%E5%93%AD%E6%B1%82%E6%84%BF%E7%A6%BB%E5%A9%9A%23) `104.4K 🔥` `+182%`
1. [辽宁文旅女厅长湖南乡音发言火了](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E6%96%87%E6%97%85%E5%A5%B3%E5%8E%85%E9%95%BF%E6%B9%96%E5%8D%97%E4%B9%A1%E9%9F%B3%E5%8F%91%E8%A8%80%E7%81%AB%E4%BA%86%23) `103.7K 🔥` `+181%`
1. [亲密关系和婚育制度绑定太深](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E5%AF%86%E5%85%B3%E7%B3%BB%E5%92%8C%E5%A9%9A%E8%82%B2%E5%88%B6%E5%BA%A6%E7%BB%91%E5%AE%9A%E5%A4%AA%E6%B7%B1%23) `504.0K 🔥`
1. [韩红基金会救护车供应商大门紧闭](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BA%A2%E5%9F%BA%E9%87%91%E4%BC%9A%E6%95%91%E6%8A%A4%E8%BD%A6%E4%BE%9B%E5%BA%94%E5%95%86%E5%A4%A7%E9%97%A8%E7%B4%A7%E9%97%AD%23) `231.4K 🔥`
1. [公厕被殴案施暴男子已出狱](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8E%95%E8%A2%AB%E6%AE%B4%E6%A1%88%E6%96%BD%E6%9A%B4%E7%94%B7%E5%AD%90%E5%B7%B2%E5%87%BA%E7%8B%B1%23) `117.8K 🔥`
1. [一代人有一代人的隐形家务](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BB%A3%E4%BA%BA%E6%9C%89%E4%B8%80%E4%BB%A3%E4%BA%BA%E7%9A%84%E9%9A%90%E5%BD%A2%E5%AE%B6%E5%8A%A1%23) `116.7K 🔥`
1. [张元英走路姿势](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E8%B5%B0%E8%B7%AF%E5%A7%BF%E5%8A%BF%23) `163.4K 🔥` `-21%`
1. [宋雨琦曾说白鹿对自己很好](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%9B%BE%E8%AF%B4%E7%99%BD%E9%B9%BF%E5%AF%B9%E8%87%AA%E5%B7%B1%E5%BE%88%E5%A5%BD%23) `115.4K 🔥` `-31%`

Updated at 2026-08-24 07:27:21

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
