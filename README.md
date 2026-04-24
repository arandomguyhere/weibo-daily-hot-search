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

1. [快手 低龄化伪成人 (Kuaishou, young and pseudo-adult)](https://s.weibo.com/weibo?q=%23%E5%BF%AB%E6%89%8B%20%E4%BD%8E%E9%BE%84%E5%8C%96%E4%BC%AA%E6%88%90%E4%BA%BA%23) `1.7M 🔥` `NEW`
1. [小米YU7GT](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3YU7GT%23) `1.3M 🔥` `NEW`
1. [第11个中国航天日](https://s.weibo.com/weibo?q=%23%E7%AC%AC11%E4%B8%AA%E4%B8%AD%E5%9B%BD%E8%88%AA%E5%A4%A9%E6%97%A5%23) `1.2M 🔥` `NEW`
1. [建议装修一定要去家务化](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E8%A3%85%E4%BF%AE%E4%B8%80%E5%AE%9A%E8%A6%81%E5%8E%BB%E5%AE%B6%E5%8A%A1%E5%8C%96%23) `1.1M 🔥` `NEW`
1. [过度坦诚会失去吸引力](https://s.weibo.com/weibo?q=%23%E8%BF%87%E5%BA%A6%E5%9D%A6%E8%AF%9A%E4%BC%9A%E5%A4%B1%E5%8E%BB%E5%90%B8%E5%BC%95%E5%8A%9B%23) `623.2K 🔥` `NEW`
1. [金智秀戛纳获奖感言](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E6%88%9B%E7%BA%B3%E8%8E%B7%E5%A5%96%E6%84%9F%E8%A8%80%23) `598.0K 🔥` `NEW`
1. [DeepSeekV4发布](https://s.weibo.com/weibo?q=%23DeepSeekV4%E5%8F%91%E5%B8%83%23) `384.9K 🔥` `NEW`
1. [丁禹兮把水晶手串拆了送粉丝](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E6%8A%8A%E6%B0%B4%E6%99%B6%E6%89%8B%E4%B8%B2%E6%8B%86%E4%BA%86%E9%80%81%E7%B2%89%E4%B8%9D%23) `380.7K 🔥` `NEW`
1. [爷爷得知孙女怀孕立刻搭了个鸡窝](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E5%BE%97%E7%9F%A5%E5%AD%99%E5%A5%B3%E6%80%80%E5%AD%95%E7%AB%8B%E5%88%BB%E6%90%AD%E4%BA%86%E4%B8%AA%E9%B8%A1%E7%AA%9D%23) `376.1K 🔥` `NEW`
1. [孙杨上妻旅后的表现争议](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E4%B8%8A%E5%A6%BB%E6%97%85%E5%90%8E%E7%9A%84%E8%A1%A8%E7%8E%B0%E4%BA%89%E8%AE%AE%23) `370.3K 🔥` `NEW`
1. [侯明昊演唱会舞美被指抄袭檀健次 (Hou Minghao's concert choreography was accused of plagiarizing Tan Jianci)](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E6%BC%94%E5%94%B1%E4%BC%9A%E8%88%9E%E7%BE%8E%E8%A2%AB%E6%8C%87%E6%8A%84%E8%A2%AD%E6%AA%80%E5%81%A5%E6%AC%A1%23) `359.4K 🔥` `NEW`
1. [雷军官宣小米YU7GT5月底发布](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%AE%98%E5%AE%A3%E5%B0%8F%E7%B1%B3YU7GT5%E6%9C%88%E5%BA%95%E5%8F%91%E5%B8%83%23) `357.9K 🔥` `NEW`
1. [伊朗末代国王长子巴列维在德国遇袭](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%AB%E4%BB%A3%E5%9B%BD%E7%8E%8B%E9%95%BF%E5%AD%90%E5%B7%B4%E5%88%97%E7%BB%B4%E5%9C%A8%E5%BE%B7%E5%9B%BD%E9%81%87%E8%A2%AD%23) `324.0K 🔥` `NEW`
1. [郭晓婷王天辰 三搭](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%99%93%E5%A9%B7%E7%8E%8B%E5%A4%A9%E8%BE%B0%20%E4%B8%89%E6%90%AD%23) `256.2K 🔥` `NEW`
1. [宝马展台人气王竟是TA](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E9%A9%AC%E5%B1%95%E5%8F%B0%E4%BA%BA%E6%B0%94%E7%8E%8B%E7%AB%9F%E6%98%AFTA%23) `254.0K 🔥` `NEW`
1. [女子穿睡衣买12万黄金首饰店主报警](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A9%BF%E7%9D%A1%E8%A1%A3%E4%B9%B012%E4%B8%87%E9%BB%84%E9%87%91%E9%A6%96%E9%A5%B0%E5%BA%97%E4%B8%BB%E6%8A%A5%E8%AD%A6%23) `252.8K 🔥` `NEW`
1. [官方发布华晨宇演唱会补偿申请说明](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%8F%91%E5%B8%83%E5%8D%8E%E6%99%A8%E5%AE%87%E6%BC%94%E5%94%B1%E4%BC%9A%E8%A1%A5%E5%81%BF%E7%94%B3%E8%AF%B7%E8%AF%B4%E6%98%8E%23) `251.4K 🔥` `NEW`
1. [华谊兄弟为何衰落](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E8%B0%8A%E5%85%84%E5%BC%9F%E4%B8%BA%E4%BD%95%E8%A1%B0%E8%90%BD%23) `250.4K 🔥` `NEW`
1. [孟子义 不再依赖别人算我们有骨气](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%20%E4%B8%8D%E5%86%8D%E4%BE%9D%E8%B5%96%E5%88%AB%E4%BA%BA%E7%AE%97%E6%88%91%E4%BB%AC%E6%9C%89%E9%AA%A8%E6%B0%94%23) `249.1K 🔥` `NEW`
1. [张凌赫想尝试拍电影](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%83%B3%E5%B0%9D%E8%AF%95%E6%8B%8D%E7%94%B5%E5%BD%B1%23) `248.5K 🔥` `NEW`
1. [2PM将在玉泽演婚礼合体 (2PM will perform wedding ceremony in Yutaek)](https://s.weibo.com/weibo?q=%232PM%E5%B0%86%E5%9C%A8%E7%8E%89%E6%B3%BD%E6%BC%94%E5%A9%9A%E7%A4%BC%E5%90%88%E4%BD%93%23) `245.5K 🔥` `NEW`
1. [北京车展看新SU7真材实料](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E8%BD%A6%E5%B1%95%E7%9C%8B%E6%96%B0SU7%E7%9C%9F%E6%9D%90%E5%AE%9E%E6%96%99%23) `242.9K 🔥` `NEW`
1. [孙杨张豆豆因行李箱打膜不愉快](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%BC%A0%E8%B1%86%E8%B1%86%E5%9B%A0%E8%A1%8C%E6%9D%8E%E7%AE%B1%E6%89%93%E8%86%9C%E4%B8%8D%E6%84%89%E5%BF%AB%23) `239.1K 🔥` `NEW`
1. [王濛因为喝多了才来浪姐](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%9B%A0%E4%B8%BA%E5%96%9D%E5%A4%9A%E4%BA%86%E6%89%8D%E6%9D%A5%E6%B5%AA%E5%A7%90%23) `237.4K 🔥` `NEW`
1. [美部长称中国未买英伟达芯片想自己搞](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E9%83%A8%E9%95%BF%E7%A7%B0%E4%B8%AD%E5%9B%BD%E6%9C%AA%E4%B9%B0%E8%8B%B1%E4%BC%9F%E8%BE%BE%E8%8A%AF%E7%89%87%E6%83%B3%E8%87%AA%E5%B7%B1%E6%90%9E%23) `236.2K 🔥` `NEW`
1. [马頔李纯快餐时代的老派爱情](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E6%9D%8E%E7%BA%AF%E5%BF%AB%E9%A4%90%E6%97%B6%E4%BB%A3%E7%9A%84%E8%80%81%E6%B4%BE%E7%88%B1%E6%83%85%23) `234.9K 🔥` `NEW`
1. [奔跑吧14今晚雷霆开播](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A714%E4%BB%8A%E6%99%9A%E9%9B%B7%E9%9C%86%E5%BC%80%E6%92%AD%23) `233.8K 🔥` `NEW`
1. [女子回应减掉95斤后再减61斤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%9E%E5%BA%94%E5%87%8F%E6%8E%8995%E6%96%A4%E5%90%8E%E5%86%8D%E5%87%8F61%E6%96%A4%23) `232.8K 🔥` `NEW`
1. [崔丽丽案涉事公司首度回应](https://s.weibo.com/weibo?q=%23%E5%B4%94%E4%B8%BD%E4%B8%BD%E6%A1%88%E6%B6%89%E4%BA%8B%E5%85%AC%E5%8F%B8%E9%A6%96%E5%BA%A6%E5%9B%9E%E5%BA%94%23) `229.7K 🔥` `NEW`
1. [月薪1.6万招人牧场注册资本仅5万](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA1.6%E4%B8%87%E6%8B%9B%E4%BA%BA%E7%89%A7%E5%9C%BA%E6%B3%A8%E5%86%8C%E8%B5%84%E6%9C%AC%E4%BB%855%E4%B8%87%23) `228.8K 🔥` `NEW`
1. [Bin真不对劲了 (Something is really wrong with Bin)](https://s.weibo.com/weibo?q=%23Bin%E7%9C%9F%E4%B8%8D%E5%AF%B9%E5%8A%B2%E4%BA%86%23) `227.0K 🔥` `NEW`
1. [NBA](https://s.weibo.com/weibo?q=%23NBA%23) `226.1K 🔥` `NEW`
1. [掘金vs森林狼](https://s.weibo.com/weibo?q=%23%E6%8E%98%E9%87%91vs%E6%A3%AE%E6%9E%97%E7%8B%BC%23) `225.5K 🔥` `NEW`
1. [新易盛暴跌原因](https://s.weibo.com/weibo?q=%23%E6%96%B0%E6%98%93%E7%9B%9B%E6%9A%B4%E8%B7%8C%E5%8E%9F%E5%9B%A0%23) `224.3K 🔥` `NEW`
1. [斯诺克世锦赛中国4人晋级16强](https://s.weibo.com/weibo?q=%23%E6%96%AF%E8%AF%BA%E5%85%8B%E4%B8%96%E9%94%A6%E8%B5%9B%E4%B8%AD%E5%9B%BD4%E4%BA%BA%E6%99%8B%E7%BA%A716%E5%BC%BA%23) `222.6K 🔥` `NEW`
1. [无限暖暖维护补偿](https://s.weibo.com/weibo?q=%23%E6%97%A0%E9%99%90%E6%9A%96%E6%9A%96%E7%BB%B4%E6%8A%A4%E8%A1%A5%E5%81%BF%23) `222.0K 🔥` `NEW`
1. [老鹰2比1尼克斯](https://s.weibo.com/weibo?q=%23%E8%80%81%E9%B9%B02%E6%AF%941%E5%B0%BC%E5%85%8B%E6%96%AF%23) `219.8K 🔥` `NEW`
1. [刘宇宁宋祖儿无商业关联](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E5%AE%8B%E7%A5%96%E5%84%BF%E6%97%A0%E5%95%86%E4%B8%9A%E5%85%B3%E8%81%94%23) `219.3K 🔥` `NEW`
1. [赵丽颖对接辟谣白玉兰宣传大使](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%AF%B9%E6%8E%A5%E8%BE%9F%E8%B0%A3%E7%99%BD%E7%8E%89%E5%85%B0%E5%AE%A3%E4%BC%A0%E5%A4%A7%E4%BD%BF%23) `217.5K 🔥` `NEW`
1. [方程豹发布会](https://s.weibo.com/weibo?q=%23%E6%96%B9%E7%A8%8B%E8%B1%B9%E5%8F%91%E5%B8%83%E4%BC%9A%23) `216.3K 🔥` `NEW`
1. [华为乾崑旗舰境奕境X9全球发布 (Huawei Qiankun flagship Jingyijing X9 released globally)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91%E6%97%97%E8%88%B0%E5%A2%83%E5%A5%95%E5%A2%83X9%E5%85%A8%E7%90%83%E5%8F%91%E5%B8%83%23) `1.2M 🔥` `+1006%`
1. [秦昊说外面有人了还要送啊 (Qin Hao said that there was someone outside and he still wanted to send it away.)](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E6%98%8A%E8%AF%B4%E5%A4%96%E9%9D%A2%E6%9C%89%E4%BA%BA%E4%BA%86%E8%BF%98%E8%A6%81%E9%80%81%E5%95%8A%23) `721.3K 🔥` `+37%`
1. [女歌手因恐飞取消北京巡演](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%AD%8C%E6%89%8B%E5%9B%A0%E6%81%90%E9%A3%9E%E5%8F%96%E6%B6%88%E5%8C%97%E4%BA%AC%E5%B7%A1%E6%BC%94%23) `679.1K 🔥` `+346%`
1. [焕新极氪009新一代旗舰MPV](https://s.weibo.com/weibo?q=%23%E7%84%95%E6%96%B0%E6%9E%81%E6%B0%AA009%E6%96%B0%E4%B8%80%E4%BB%A3%E6%97%97%E8%88%B0MPV%23) `650.6K 🔥` `+21%`
1. [女生拉账单发现爸爸10年转了20多万](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E6%8B%89%E8%B4%A6%E5%8D%95%E5%8F%91%E7%8E%B0%E7%88%B8%E7%88%B810%E5%B9%B4%E8%BD%AC%E4%BA%8620%E5%A4%9A%E4%B8%87%23) `246.8K 🔥` `+38%`
1. [月薪1.6万招人放3000只羊老板发声 (The boss with a monthly salary of 16,000 wants to herd 3,000 sheep speaks out)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA1.6%E4%B8%87%E6%8B%9B%E4%BA%BA%E6%94%BE3000%E5%8F%AA%E7%BE%8A%E8%80%81%E6%9D%BF%E5%8F%91%E5%A3%B0%23) `231.6K 🔥` `+21%`
1. [陈丽君晋升副主任 (Chen Lijun promoted to deputy director)](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%90%9B%E6%99%8B%E5%8D%87%E5%89%AF%E4%B8%BB%E4%BB%BB%23) `244.8K 🔥`
1. [刘宇宁曾自曝离婚无娃](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E6%9B%BE%E8%87%AA%E6%9B%9D%E7%A6%BB%E5%A9%9A%E6%97%A0%E5%A8%83%23) `241.7K 🔥`
1. [爱喝无糖饮料的天塌了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%96%9D%E6%97%A0%E7%B3%96%E9%A5%AE%E6%96%99%E7%9A%84%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `511.2K 🔥` `-23%`
1. [26岁女子穿袜子睡觉睡出千层甲](https://s.weibo.com/weibo?q=%2326%E5%B2%81%E5%A5%B3%E5%AD%90%E7%A9%BF%E8%A2%9C%E5%AD%90%E7%9D%A1%E8%A7%89%E7%9D%A1%E5%87%BA%E5%8D%83%E5%B1%82%E7%94%B2%23) `256.0K 🔥` `-42%`
1. [演员回应脱掉和服才向观众鞠躬致谢](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E5%9B%9E%E5%BA%94%E8%84%B1%E6%8E%89%E5%92%8C%E6%9C%8D%E6%89%8D%E5%90%91%E8%A7%82%E4%BC%97%E9%9E%A0%E8%BA%AC%E8%87%B4%E8%B0%A2%23) `240.9K 🔥` `-64%`
1. [月薪1.6万招人放羊包吃住有WiFi (Recruiting people to herd sheep with a monthly salary of 16,000, including food, accommodation and WiFi.)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA1.6%E4%B8%87%E6%8B%9B%E4%BA%BA%E6%94%BE%E7%BE%8A%E5%8C%85%E5%90%83%E4%BD%8F%E6%9C%89WiFi%23) `240.2K 🔥` `-81%`

Updated at 2026-04-24 11:45:51

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
