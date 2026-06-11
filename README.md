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

1. [家长为防网贷让18岁孩子征信逾期 (Parents prevent 18-year-old child from overdue credit due to online loans)](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E4%B8%BA%E9%98%B2%E7%BD%91%E8%B4%B7%E8%AE%A918%E5%B2%81%E5%AD%A9%E5%AD%90%E5%BE%81%E4%BF%A1%E9%80%BE%E6%9C%9F%23) `1.2M 🔥` `NEW`
1. [鬼怪这个名场面真的过了10年了](https://s.weibo.com/weibo?q=%23%E9%AC%BC%E6%80%AA%E8%BF%99%E4%B8%AA%E5%90%8D%E5%9C%BA%E9%9D%A2%E7%9C%9F%E7%9A%84%E8%BF%87%E4%BA%8610%E5%B9%B4%E4%BA%86%23) `884.3K 🔥` `NEW`
1. [中国人在沙漠建巨型充电宝](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%9C%A8%E6%B2%99%E6%BC%A0%E5%BB%BA%E5%B7%A8%E5%9E%8B%E5%85%85%E7%94%B5%E5%AE%9D%23) `670.1K 🔥` `NEW`
1. [陈妍希经期喝古方五红气血夯爆了](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E7%BB%8F%E6%9C%9F%E5%96%9D%E5%8F%A4%E6%96%B9%E4%BA%94%E7%BA%A2%E6%B0%94%E8%A1%80%E5%A4%AF%E7%88%86%E4%BA%86%23) `668.7K 🔥` `NEW`
1. [孙丞潇找不到金莎哭了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%B8%9E%E6%BD%87%E6%89%BE%E4%B8%8D%E5%88%B0%E9%87%91%E8%8E%8E%E5%93%AD%E4%BA%86%23) `623.8K 🔥` `NEW`
1. [120斤西瓜瓜王拍卖仅617元成交](https://s.weibo.com/weibo?q=%23120%E6%96%A4%E8%A5%BF%E7%93%9C%E7%93%9C%E7%8E%8B%E6%8B%8D%E5%8D%96%E4%BB%85617%E5%85%83%E6%88%90%E4%BA%A4%23) `573.1K 🔥` `NEW`
1. [五粮液喊大咖来预测世界杯冠军](https://s.weibo.com/weibo?q=%23%E4%BA%94%E7%B2%AE%E6%B6%B2%E5%96%8A%E5%A4%A7%E5%92%96%E6%9D%A5%E9%A2%84%E6%B5%8B%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%A0%E5%86%9B%23) `473.4K 🔥` `NEW`
1. [法拉利高管质疑首席设计师加盟智界](https://s.weibo.com/weibo?q=%23%E6%B3%95%E6%8B%89%E5%88%A9%E9%AB%98%E7%AE%A1%E8%B4%A8%E7%96%91%E9%A6%96%E5%B8%AD%E8%AE%BE%E8%AE%A1%E5%B8%88%E5%8A%A0%E7%9B%9F%E6%99%BA%E7%95%8C%23) `451.5K 🔥` `NEW`
1. [减脂期误食了8个鸡腿](https://s.weibo.com/weibo?q=%23%E5%87%8F%E8%84%82%E6%9C%9F%E8%AF%AF%E9%A3%9F%E4%BA%868%E4%B8%AA%E9%B8%A1%E8%85%BF%23) `440.9K 🔥` `NEW`
1. [王楚钦体坛零距离](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%BD%93%E5%9D%9B%E9%9B%B6%E8%B7%9D%E7%A6%BB%23) `429.7K 🔥` `NEW`
1. [迪丽热巴剧宣为陈飞宇破了好多例 (The announcement of Dilraba's drama set many precedents for Chen Feiyu)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%89%A7%E5%AE%A3%E4%B8%BA%E9%99%88%E9%A3%9E%E5%AE%87%E7%A0%B4%E4%BA%86%E5%A5%BD%E5%A4%9A%E4%BE%8B%23) `426.3K 🔥` `NEW`
1. [毕业租房就是一场巨大的祛魅](https://s.weibo.com/weibo?q=%23%E6%AF%95%E4%B8%9A%E7%A7%9F%E6%88%BF%E5%B0%B1%E6%98%AF%E4%B8%80%E5%9C%BA%E5%B7%A8%E5%A4%A7%E7%9A%84%E7%A5%9B%E9%AD%85%23) `411.9K 🔥` `NEW`
1. [高叶好辣](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%8F%B6%E5%A5%BD%E8%BE%A3%23) `402.3K 🔥` `NEW`
1. [仅剩25分钟考生大喊我要换答题卡](https://s.weibo.com/weibo?q=%23%E4%BB%85%E5%89%A925%E5%88%86%E9%92%9F%E8%80%83%E7%94%9F%E5%A4%A7%E5%96%8A%E6%88%91%E8%A6%81%E6%8D%A2%E7%AD%94%E9%A2%98%E5%8D%A1%23) `391.3K 🔥` `NEW`
1. [林玉芬心疼白鹿](https://s.weibo.com/weibo?q=%23%E6%9E%97%E7%8E%89%E8%8A%AC%E5%BF%83%E7%96%BC%E7%99%BD%E9%B9%BF%23) `376.2K 🔥` `NEW`
1. [谢娜北京演唱会售罄](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%8C%97%E4%BA%AC%E6%BC%94%E5%94%B1%E4%BC%9A%E5%94%AE%E7%BD%84%23) `369.1K 🔥` `NEW`
1. [折叠屏的未来终于被想通了](https://s.weibo.com/weibo?q=%23%E6%8A%98%E5%8F%A0%E5%B1%8F%E7%9A%84%E6%9C%AA%E6%9D%A5%E7%BB%88%E4%BA%8E%E8%A2%AB%E6%83%B3%E9%80%9A%E4%BA%86%23) `358.9K 🔥` `NEW`
1. [A股超4500只股下跌](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E8%B6%854500%E5%8F%AA%E8%82%A1%E4%B8%8B%E8%B7%8C%23) `324.5K 🔥` `NEW`
1. [金条克价从1600跌到970](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%9D%A1%E5%85%8B%E4%BB%B7%E4%BB%8E1600%E8%B7%8C%E5%88%B0970%23) `316.7K 🔥` `NEW`
1. [起猛了看到一群苹果去上班](https://s.weibo.com/weibo?q=%23%E8%B5%B7%E7%8C%9B%E4%BA%86%E7%9C%8B%E5%88%B0%E4%B8%80%E7%BE%A4%E8%8B%B9%E6%9E%9C%E5%8E%BB%E4%B8%8A%E7%8F%AD%23) `316.0K 🔥` `NEW`
1. [陈飞宇迪丽热巴同城频率 (Chen Feiyu and Dilireba city frequency)](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%90%8C%E5%9F%8E%E9%A2%91%E7%8E%87%23) `312.5K 🔥` `NEW`
1. [白鹿真诚喊话观众](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%9C%9F%E8%AF%9A%E5%96%8A%E8%AF%9D%E8%A7%82%E4%BC%97%23) `235.8K 🔥` `NEW`
1. [男子隐瞒性功能障碍被撤销婚姻](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%9A%90%E7%9E%92%E6%80%A7%E5%8A%9F%E8%83%BD%E9%9A%9C%E7%A2%8D%E8%A2%AB%E6%92%A4%E9%94%80%E5%A9%9A%E5%A7%BB%23) `235.0K 🔥` `NEW`
1. [我发现胃真的很势利眼](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%8F%91%E7%8E%B0%E8%83%83%E7%9C%9F%E7%9A%84%E5%BE%88%E5%8A%BF%E5%88%A9%E7%9C%BC%23) `208.9K 🔥` `NEW`
1. [美军对伊朗打击持续4小时左右](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E5%AF%B9%E4%BC%8A%E6%9C%97%E6%89%93%E5%87%BB%E6%8C%81%E7%BB%AD4%E5%B0%8F%E6%97%B6%E5%B7%A6%E5%8F%B3%23) `195.2K 🔥` `NEW`
1. [为了不进医院一直坚持的好习惯](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BA%86%E4%B8%8D%E8%BF%9B%E5%8C%BB%E9%99%A2%E4%B8%80%E7%9B%B4%E5%9D%9A%E6%8C%81%E7%9A%84%E5%A5%BD%E4%B9%A0%E6%83%AF%23) `194.9K 🔥` `NEW`
1. [儿媳故意把剩菜放自己面前婆婆挪走](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AA%B3%E6%95%85%E6%84%8F%E6%8A%8A%E5%89%A9%E8%8F%9C%E6%94%BE%E8%87%AA%E5%B7%B1%E9%9D%A2%E5%89%8D%E5%A9%86%E5%A9%86%E6%8C%AA%E8%B5%B0%23) `193.7K 🔥` `NEW`
1. [张凌赫最近在调理身体](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%9C%80%E8%BF%91%E5%9C%A8%E8%B0%83%E7%90%86%E8%BA%AB%E4%BD%93%23) `191.4K 🔥` `NEW`
1. [查到了十年前的高考成绩](https://s.weibo.com/weibo?q=%23%E6%9F%A5%E5%88%B0%E4%BA%86%E5%8D%81%E5%B9%B4%E5%89%8D%E7%9A%84%E9%AB%98%E8%80%83%E6%88%90%E7%BB%A9%23) `188.2K 🔥` `NEW`
1. [看世界杯就要配蒙牛](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E4%B8%96%E7%95%8C%E6%9D%AF%E5%B0%B1%E8%A6%81%E9%85%8D%E8%92%99%E7%89%9B%23) `185.9K 🔥` `NEW`
1. [汪苏泷给李嘉琦结婚随礼99 (Wang Sulong gave Li Jiaqi a wedding gift of 99)](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E7%BB%99%E6%9D%8E%E5%98%89%E7%90%A6%E7%BB%93%E5%A9%9A%E9%9A%8F%E7%A4%BC99%23) `183.8K 🔥` `NEW`
1. [LOL官宣Peanut断开连接](https://s.weibo.com/weibo?q=%23LOL%E5%AE%98%E5%AE%A3Peanut%E6%96%AD%E5%BC%80%E8%BF%9E%E6%8E%A5%23) `179.2K 🔥` `NEW`
1. [河北水泥库大叔确诊尘肺二期](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8C%97%E6%B0%B4%E6%B3%A5%E5%BA%93%E5%A4%A7%E5%8F%94%E7%A1%AE%E8%AF%8A%E5%B0%98%E8%82%BA%E4%BA%8C%E6%9C%9F%23) `176.8K 🔥` `NEW`
1. [酒吧190男生真相](https://s.weibo.com/weibo?q=%23%E9%85%92%E5%90%A7190%E7%94%B7%E7%94%9F%E7%9C%9F%E7%9B%B8%23) `176.0K 🔥` `NEW`
1. [梅西问该不该染蓝白头发](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%A5%BF%E9%97%AE%E8%AF%A5%E4%B8%8D%E8%AF%A5%E6%9F%93%E8%93%9D%E7%99%BD%E5%A4%B4%E5%8F%91%23) `175.2K 🔥` `NEW`
1. [丁程鑫宣传张颜齐新歌](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%AE%A3%E4%BC%A0%E5%BC%A0%E9%A2%9C%E9%BD%90%E6%96%B0%E6%AD%8C%23) `174.9K 🔥` `NEW`
1. [林志玲小S招谁惹谁了](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%97%E7%8E%B2%E5%B0%8FS%E6%8B%9B%E8%B0%81%E6%83%B9%E8%B0%81%E4%BA%86%23) `174.8K 🔥` `NEW`
1. [这电梯我起码能坐十个来回](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%94%B5%E6%A2%AF%E6%88%91%E8%B5%B7%E7%A0%81%E8%83%BD%E5%9D%90%E5%8D%81%E4%B8%AA%E6%9D%A5%E5%9B%9E%23) `162.4K 🔥` `NEW`
1. [爱在无尽夏 孟子义丁禹兮](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%9C%A8%E6%97%A0%E5%B0%BD%E5%A4%8F%20%E5%AD%9F%E5%AD%90%E4%B9%89%E4%B8%81%E7%A6%B9%E5%85%AE%23) `161.1K 🔥` `NEW`
1. [小米超高端万元阔折叠曝光](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E8%B6%85%E9%AB%98%E7%AB%AF%E4%B8%87%E5%85%83%E9%98%94%E6%8A%98%E5%8F%A0%E6%9B%9D%E5%85%89%23) `155.1K 🔥` `NEW`
1. [南部档案云包场 (Southern Archives Cloud Package Site)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88%E4%BA%91%E5%8C%85%E5%9C%BA%23) `146.2K 🔥` `NEW`
1. [梁靖崑回应把王楚钦抵押饭店](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%91%E5%9B%9E%E5%BA%94%E6%8A%8A%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%8A%B5%E6%8A%BC%E9%A5%AD%E5%BA%97%23) `139.2K 🔥` `NEW`
1. [莫离云合12.4](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E7%A6%BB%E4%BA%91%E5%90%8812.4%23) `124.4K 🔥` `NEW`
1. [宁德时代董事长谈奋斗还是生活](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E8%91%A3%E4%BA%8B%E9%95%BF%E8%B0%88%E5%A5%8B%E6%96%97%E8%BF%98%E6%98%AF%E7%94%9F%E6%B4%BB%23) `119.9K 🔥` `NEW`
1. [邓为黄多多相差十一岁](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%B8%BA%E9%BB%84%E5%A4%9A%E5%A4%9A%E7%9B%B8%E5%B7%AE%E5%8D%81%E4%B8%80%E5%B2%81%23) `398.5K 🔥`
1. [第一次见女明星化妆比美妆博主还专业](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E5%A5%B3%E6%98%8E%E6%98%9F%E5%8C%96%E5%A6%86%E6%AF%94%E7%BE%8E%E5%A6%86%E5%8D%9A%E4%B8%BB%E8%BF%98%E4%B8%93%E4%B8%9A%23) `358.6K 🔥`
1. [爱吃生菜的人天塌了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%90%83%E7%94%9F%E8%8F%9C%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `667.4K 🔥` `-22%`
1. [色情漫画网站浏览量超1亿次](https://s.weibo.com/weibo?q=%23%E8%89%B2%E6%83%85%E6%BC%AB%E7%94%BB%E7%BD%91%E7%AB%99%E6%B5%8F%E8%A7%88%E9%87%8F%E8%B6%851%E4%BA%BF%E6%AC%A1%23) `453.0K 🔥` `-42%`
1. [张杰谢娜持续掉粉](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E8%B0%A2%E5%A8%9C%E6%8C%81%E7%BB%AD%E6%8E%89%E7%B2%89%23) `316.5K 🔥` `-29%`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `245.5K 🔥` `-34%`
1. [榴莲仅退款买家父亲向商家道歉 (Durian buyer’s father only refunds money and apologizes to merchant)](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E4%BB%85%E9%80%80%E6%AC%BE%E4%B9%B0%E5%AE%B6%E7%88%B6%E4%BA%B2%E5%90%91%E5%95%86%E5%AE%B6%E9%81%93%E6%AD%89%23) `196.4K 🔥` `-84%`
1. [舒舒服服爽一辈子有啥错](https://s.weibo.com/weibo?q=%23%E8%88%92%E8%88%92%E6%9C%8D%E6%9C%8D%E7%88%BD%E4%B8%80%E8%BE%88%E5%AD%90%E6%9C%89%E5%95%A5%E9%94%99%23) `135.5K 🔥` `-63%`

Updated at 2026-06-11 17:18:43

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
