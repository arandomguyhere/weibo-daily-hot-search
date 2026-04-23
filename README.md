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

1. [华谊兄弟被申请破产重整 (Huayi Brothers was filed for bankruptcy and reorganization)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E8%B0%8A%E5%85%84%E5%BC%9F%E8%A2%AB%E7%94%B3%E8%AF%B7%E7%A0%B4%E4%BA%A7%E9%87%8D%E6%95%B4%23) `1.1M 🔥` `NEW`
1. [沉浸式感受舰艇开放日](https://s.weibo.com/weibo?q=%23%E6%B2%89%E6%B5%B8%E5%BC%8F%E6%84%9F%E5%8F%97%E8%88%B0%E8%89%87%E5%BC%80%E6%94%BE%E6%97%A5%23) `645.6K 🔥` `NEW`
1. [人怎么可以争气成这样](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%80%8E%E4%B9%88%E5%8F%AF%E4%BB%A5%E4%BA%89%E6%B0%94%E6%88%90%E8%BF%99%E6%A0%B7%23) `584.3K 🔥` `NEW`
1. [NIP战胜BLG](https://s.weibo.com/weibo?q=%23NIP%E6%88%98%E8%83%9CBLG%23) `516.2K 🔥` `NEW`
1. [迪丽热巴陈飞宇校园小剧场](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E9%99%88%E9%A3%9E%E5%AE%87%E6%A0%A1%E5%9B%AD%E5%B0%8F%E5%89%A7%E5%9C%BA%23) `508.8K 🔥` `NEW`
1. [小米首次登顶全球开源大模型第一](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E9%A6%96%E6%AC%A1%E7%99%BB%E9%A1%B6%E5%85%A8%E7%90%83%E5%BC%80%E6%BA%90%E5%A4%A7%E6%A8%A1%E5%9E%8B%E7%AC%AC%E4%B8%80%23) `504.1K 🔥` `NEW`
1. [陈泽报备](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B3%BD%E6%8A%A5%E5%A4%87%23) `491.2K 🔥` `NEW`
1. [王星越 退货用的我以为是设计](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%98%9F%E8%B6%8A%20%E9%80%80%E8%B4%A7%E7%94%A8%E7%9A%84%E6%88%91%E4%BB%A5%E4%B8%BA%E6%98%AF%E8%AE%BE%E8%AE%A1%23) `483.8K 🔥` `NEW`
1. [赵丽颖白玉兰宣传大使](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%99%BD%E7%8E%89%E5%85%B0%E5%AE%A3%E4%BC%A0%E5%A4%A7%E4%BD%BF%23) `459.6K 🔥` `NEW`
1. [业内谈华晨宇演唱会场地搭建难度](https://s.weibo.com/weibo?q=%23%E4%B8%9A%E5%86%85%E8%B0%88%E5%8D%8E%E6%99%A8%E5%AE%87%E6%BC%94%E5%94%B1%E4%BC%9A%E5%9C%BA%E5%9C%B0%E6%90%AD%E5%BB%BA%E9%9A%BE%E5%BA%A6%23) `389.0K 🔥` `NEW`
1. [30岁宝妈每天只睡3小时查出乳腺癌 (30-year-old mother was diagnosed with breast cancer after sleeping only 3 hours a day)](https://s.weibo.com/weibo?q=%2330%E5%B2%81%E5%AE%9D%E5%A6%88%E6%AF%8F%E5%A4%A9%E5%8F%AA%E7%9D%A13%E5%B0%8F%E6%97%B6%E6%9F%A5%E5%87%BA%E4%B9%B3%E8%85%BA%E7%99%8C%23) `366.2K 🔥` `NEW`
1. [员工15年无年假月薪降到600后醒了](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A515%E5%B9%B4%E6%97%A0%E5%B9%B4%E5%81%87%E6%9C%88%E8%96%AA%E9%99%8D%E5%88%B0600%E5%90%8E%E9%86%92%E4%BA%86%23) `355.1K 🔥` `NEW`
1. [印度大举进口250万吨尿素](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%A4%A7%E4%B8%BE%E8%BF%9B%E5%8F%A3250%E4%B8%87%E5%90%A8%E5%B0%BF%E7%B4%A0%23) `350.4K 🔥` `NEW`
1. [医生称金莎已经接近超高龄产妇](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E7%A7%B0%E9%87%91%E8%8E%8E%E5%B7%B2%E7%BB%8F%E6%8E%A5%E8%BF%91%E8%B6%85%E9%AB%98%E9%BE%84%E4%BA%A7%E5%A6%87%23) `332.6K 🔥` `NEW`
1. [百年乒乓纪录片第一个镜头是王楚钦](https://s.weibo.com/weibo?q=%23%E7%99%BE%E5%B9%B4%E4%B9%92%E4%B9%93%E7%BA%AA%E5%BD%95%E7%89%87%E7%AC%AC%E4%B8%80%E4%B8%AA%E9%95%9C%E5%A4%B4%E6%98%AF%E7%8E%8B%E6%A5%9A%E9%92%A6%23) `240.6K 🔥` `NEW`
1. [陈丽君晋升副主任](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%90%9B%E6%99%8B%E5%8D%87%E5%89%AF%E4%B8%BB%E4%BB%BB%23) `201.2K 🔥` `NEW`
1. [女子打减肥针半年减70斤险危及生命](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%89%93%E5%87%8F%E8%82%A5%E9%92%88%E5%8D%8A%E5%B9%B4%E5%87%8F70%E6%96%A4%E9%99%A9%E5%8D%B1%E5%8F%8A%E7%94%9F%E5%91%BD%23) `175.9K 🔥` `NEW`
1. [王鸥 丑衣服](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B8%A5%20%E4%B8%91%E8%A1%A3%E6%9C%8D%23) `175.7K 🔥` `NEW`
1. [阮经天的家](https://s.weibo.com/weibo?q=%23%E9%98%AE%E7%BB%8F%E5%A4%A9%E7%9A%84%E5%AE%B6%23) `147.5K 🔥` `NEW`
1. [教育部门已介入女生被卖到电诈园案](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E9%83%A8%E9%97%A8%E5%B7%B2%E4%BB%8B%E5%85%A5%E5%A5%B3%E7%94%9F%E8%A2%AB%E5%8D%96%E5%88%B0%E7%94%B5%E8%AF%88%E5%9B%AD%E6%A1%88%23) `144.5K 🔥` `NEW`
1. [孙杨性格 (Sun Yang's character)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E6%80%A7%E6%A0%BC%23) `144.4K 🔥` `NEW`
1. [曾沛慈与老公结婚前做了10年好友](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E4%B8%8E%E8%80%81%E5%85%AC%E7%BB%93%E5%A9%9A%E5%89%8D%E5%81%9A%E4%BA%8610%E5%B9%B4%E5%A5%BD%E5%8F%8B%23) `144.1K 🔥` `NEW`
1. [你在地库找车迷路过吗](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%9C%A8%E5%9C%B0%E5%BA%93%E6%89%BE%E8%BD%A6%E8%BF%B7%E8%B7%AF%E8%BF%87%E5%90%97%23) `139.6K 🔥` `NEW`
1. [白银大跌特跌](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%93%B6%E5%A4%A7%E8%B7%8C%E7%89%B9%E8%B7%8C%23) `137.5K 🔥` `NEW`
1. [崔丽丽连说两遍我不服我不服](https://s.weibo.com/weibo?q=%23%E5%B4%94%E4%B8%BD%E4%B8%BD%E8%BF%9E%E8%AF%B4%E4%B8%A4%E9%81%8D%E6%88%91%E4%B8%8D%E6%9C%8D%E6%88%91%E4%B8%8D%E6%9C%8D%23) `135.2K 🔥` `NEW`
1. [李沁夏梦两版淳儿意难平](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B2%81%E5%A4%8F%E6%A2%A6%E4%B8%A4%E7%89%88%E6%B7%B3%E5%84%BF%E6%84%8F%E9%9A%BE%E5%B9%B3%23) `119.0K 🔥` `NEW`
1. [突然发现事缓则圆可能是真的](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E4%BA%8B%E7%BC%93%E5%88%99%E5%9C%86%E5%8F%AF%E8%83%BD%E6%98%AF%E7%9C%9F%E7%9A%84%23) `517.4K 🔥` `+48%`
1. [唐艺昕回应没网感](https://s.weibo.com/weibo?q=%23%E5%94%90%E8%89%BA%E6%98%95%E5%9B%9E%E5%BA%94%E6%B2%A1%E7%BD%91%E6%84%9F%23) `494.3K 🔥` `+44%`
1. [外国人震惊中国水果摊老板开门睡觉](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E4%BA%BA%E9%9C%87%E6%83%8A%E4%B8%AD%E5%9B%BD%E6%B0%B4%E6%9E%9C%E6%91%8A%E8%80%81%E6%9D%BF%E5%BC%80%E9%97%A8%E7%9D%A1%E8%A7%89%23) `803.7K 🔥`
1. [打洲又养虾 荣耀笔记本夯到家 (Traveling to the island and raising shrimps, the Honor notebook is ready for home)](https://s.weibo.com/weibo?q=%23%E6%89%93%E6%B4%B2%E5%8F%88%E5%85%BB%E8%99%BE%20%E8%8D%A3%E8%80%80%E7%AC%94%E8%AE%B0%E6%9C%AC%E5%A4%AF%E5%88%B0%E5%AE%B6%23) `611.3K 🔥`
1. [华为乾崑赋能阿维塔06T巅峰上市](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91%E8%B5%8B%E8%83%BD%E9%98%BF%E7%BB%B4%E5%A1%9406T%E5%B7%85%E5%B3%B0%E4%B8%8A%E5%B8%82%23) `514.2K 🔥`
1. [神仙肉 (Fairy Meat)](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E4%BB%99%E8%82%89%23) `500.1K 🔥`
1. [刘宇宁否认与宋祖儿恋情](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E5%90%A6%E8%AE%A4%E4%B8%8E%E5%AE%8B%E7%A5%96%E5%84%BF%E6%81%8B%E6%83%85%23) `486.7K 🔥`
1. [美部长称600美元降到10美元是降价600%](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E9%83%A8%E9%95%BF%E7%A7%B0600%E7%BE%8E%E5%85%83%E9%99%8D%E5%88%B010%E7%BE%8E%E5%85%83%E6%98%AF%E9%99%8D%E4%BB%B7600%25%23) `467.5K 🔥`
1. [刘宇宁曾自曝离婚无娃](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E6%9B%BE%E8%87%AA%E6%9B%9D%E7%A6%BB%E5%A9%9A%E6%97%A0%E5%A8%83%23) `342.8K 🔥`
1. [宫颈粘液栓是什么](https://s.weibo.com/weibo?q=%23%E5%AE%AB%E9%A2%88%E7%B2%98%E6%B6%B2%E6%A0%93%E6%98%AF%E4%BB%80%E4%B9%88%23) `329.3K 🔥`
1. [何润东和老婆是在夜店认识的 (Peter Ho and his wife met in a nightclub)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E5%92%8C%E8%80%81%E5%A9%86%E6%98%AF%E5%9C%A8%E5%A4%9C%E5%BA%97%E8%AE%A4%E8%AF%86%E7%9A%84%23) `322.2K 🔥`
1. [民政局回应马頔李纯结婚证是手写的 (Civil Affairs Bureau responded that Ma Di and Li Chun’s marriage certificate was handwritten)](https://s.weibo.com/weibo?q=%23%E6%B0%91%E6%94%BF%E5%B1%80%E5%9B%9E%E5%BA%94%E9%A9%AC%E9%A0%94%E6%9D%8E%E7%BA%AF%E7%BB%93%E5%A9%9A%E8%AF%81%E6%98%AF%E6%89%8B%E5%86%99%E7%9A%84%23) `361.0K 🔥` `-35%`
1. [普通人一生的收入](https://s.weibo.com/weibo?q=%23%E6%99%AE%E9%80%9A%E4%BA%BA%E4%B8%80%E7%94%9F%E7%9A%84%E6%94%B6%E5%85%A5%23) `262.5K 🔥` `-28%`
1. [崔丽丽案发前年薪120多万元](https://s.weibo.com/weibo?q=%23%E5%B4%94%E4%B8%BD%E4%B8%BD%E6%A1%88%E5%8F%91%E5%89%8D%E5%B9%B4%E8%96%AA120%E5%A4%9A%E4%B8%87%E5%85%83%23) `254.1K 🔥` `-35%`
1. [华晨宇演唱会场地开始拆了](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E6%BC%94%E5%94%B1%E4%BC%9A%E5%9C%BA%E5%9C%B0%E5%BC%80%E5%A7%8B%E6%8B%86%E4%BA%86%23) `253.2K 🔥` `-34%`
1. [宋威龙张凌赫同品牌同姿势](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%90%8C%E5%93%81%E7%89%8C%E5%90%8C%E5%A7%BF%E5%8A%BF%23) `252.5K 🔥` `-37%`
1. [伊称已收到首笔霍尔木兹通行费](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E7%A7%B0%E5%B7%B2%E6%94%B6%E5%88%B0%E9%A6%96%E7%AC%94%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E9%80%9A%E8%A1%8C%E8%B4%B9%23) `239.1K 🔥` `-37%`
1. [女子指甲总长13米涂一次需20瓶指甲油 (A woman's nails are 13 meters long and require 20 bottles of nail polish for one application)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8C%87%E7%94%B2%E6%80%BB%E9%95%BF13%E7%B1%B3%E6%B6%82%E4%B8%80%E6%AC%A1%E9%9C%8020%E7%93%B6%E6%8C%87%E7%94%B2%E6%B2%B9%23) `238.8K 🔥` `-31%`
1. [小猫吐了一颗小乳牙 (The kitten spit out a baby tooth)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E5%90%90%E4%BA%86%E4%B8%80%E9%A2%97%E5%B0%8F%E4%B9%B3%E7%89%99%23) `227.9K 🔥` `-54%`
1. [转卖女大学生电诈园要求撤掉报道](https://s.weibo.com/weibo?q=%23%E8%BD%AC%E5%8D%96%E5%A5%B3%E5%A4%A7%E5%AD%A6%E7%94%9F%E7%94%B5%E8%AF%88%E5%9B%AD%E8%A6%81%E6%B1%82%E6%92%A4%E6%8E%89%E6%8A%A5%E9%81%93%23) `198.7K 🔥` `-46%`
1. [何润东黄晓明 王不见王](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E9%BB%84%E6%99%93%E6%98%8E%20%E7%8E%8B%E4%B8%8D%E8%A7%81%E7%8E%8B%23) `188.5K 🔥` `-53%`
1. [谢娜在浪姐群发张杰](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%9C%A8%E6%B5%AA%E5%A7%90%E7%BE%A4%E5%8F%91%E5%BC%A0%E6%9D%B0%23) `177.1K 🔥` `-54%`
1. [家长向老师索要试卷引发激烈争执](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E5%90%91%E8%80%81%E5%B8%88%E7%B4%A2%E8%A6%81%E8%AF%95%E5%8D%B7%E5%BC%95%E5%8F%91%E6%BF%80%E7%83%88%E4%BA%89%E6%89%A7%23) `139.6K 🔥` `-64%`
1. [鹿晗去王勉家带了臭豆腐](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%8E%BB%E7%8E%8B%E5%8B%89%E5%AE%B6%E5%B8%A6%E4%BA%86%E8%87%AD%E8%B1%86%E8%85%90%23) `113.4K 🔥` `-67%`
1. [国际乒联称马龙是goat](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E4%B9%92%E8%81%94%E7%A7%B0%E9%A9%AC%E9%BE%99%E6%98%AFgoat%23) `113.0K 🔥` `-69%`
1. [金莎线下状态 (Jinsha offline status)](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E7%BA%BF%E4%B8%8B%E7%8A%B6%E6%80%81%23) `112.9K 🔥` `-71%`

Updated at 2026-04-23 23:06:32

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
