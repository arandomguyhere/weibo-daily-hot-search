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

1. [安徽多人因编造台风谣言被处罚 (Several people in Anhui were punished for fabricating typhoon rumors)](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%BE%BD%E5%A4%9A%E4%BA%BA%E5%9B%A0%E7%BC%96%E9%80%A0%E5%8F%B0%E9%A3%8E%E8%B0%A3%E8%A8%80%E8%A2%AB%E5%A4%84%E7%BD%9A%23) `453.3K 🔥` `NEW`
1. [王俊凯演唱会](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%94%B1%E4%BC%9A%23) `242.4K 🔥` `NEW`
1. [花开锦绣S加](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3S%E5%8A%A0%23) `227.8K 🔥` `NEW`
1. [短剧车祸戏居然是真撞](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E8%BD%A6%E7%A5%B8%E6%88%8F%E5%B1%85%E7%84%B6%E6%98%AF%E7%9C%9F%E6%92%9E%23) `217.7K 🔥` `NEW`
1. [杨幂ELLE金九封面预告](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82ELLE%E9%87%91%E4%B9%9D%E5%B0%81%E9%9D%A2%E9%A2%84%E5%91%8A%23) `215.8K 🔥` `NEW`
1. [4个孩子玩火把家烧了](https://s.weibo.com/weibo?q=%234%E4%B8%AA%E5%AD%A9%E5%AD%90%E7%8E%A9%E7%81%AB%E6%8A%8A%E5%AE%B6%E7%83%A7%E4%BA%86%23) `212.5K 🔥` `NEW`
1. [大二学生暑假舟山搬蟹18天赚1万](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BA%8C%E5%AD%A6%E7%94%9F%E6%9A%91%E5%81%87%E8%88%9F%E5%B1%B1%E6%90%AC%E8%9F%B918%E5%A4%A9%E8%B5%9A1%E4%B8%87%23) `175.1K 🔥` `NEW`
1. [骗儿子进戒网瘾机构母亲称自己被骗](https://s.weibo.com/weibo?q=%23%E9%AA%97%E5%84%BF%E5%AD%90%E8%BF%9B%E6%88%92%E7%BD%91%E7%98%BE%E6%9C%BA%E6%9E%84%E6%AF%8D%E4%BA%B2%E7%A7%B0%E8%87%AA%E5%B7%B1%E8%A2%AB%E9%AA%97%23) `174.9K 🔥` `NEW`
1. [赵丽颖三个清宫女配没有重合感](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E4%B8%89%E4%B8%AA%E6%B8%85%E5%AE%AB%E5%A5%B3%E9%85%8D%E6%B2%A1%E6%9C%89%E9%87%8D%E5%90%88%E6%84%9F%23) `164.4K 🔥` `NEW`
1. [王橹杰影之八秒](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%BD%B1%E4%B9%8B%E5%85%AB%E7%A7%92%23) `163.4K 🔥` `NEW`
1. [中598万男子不告诉妻儿父母 (5.98 million men do not tell their wives, children and parents)](https://s.weibo.com/weibo?q=%23%E4%B8%AD598%E4%B8%87%E7%94%B7%E5%AD%90%E4%B8%8D%E5%91%8A%E8%AF%89%E5%A6%BB%E5%84%BF%E7%88%B6%E6%AF%8D%23) `137.6K 🔥` `NEW`
1. [旺旺 配料表 (Wangwang ingredient list)](https://s.weibo.com/weibo?q=%23%E6%97%BA%E6%97%BA%20%E9%85%8D%E6%96%99%E8%A1%A8%23) `529.9K 🔥` `+94%`
1. [保时捷溜车2员工拼命阻拦获加薪](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E6%97%B6%E6%8D%B7%E6%BA%9C%E8%BD%A62%E5%91%98%E5%B7%A5%E6%8B%BC%E5%91%BD%E9%98%BB%E6%8B%A6%E8%8E%B7%E5%8A%A0%E8%96%AA%23) `483.8K 🔥` `+109%`
1. [葡萄树的主人终于上当了 (The owner of the vine was finally fooled)](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E6%A0%91%E7%9A%84%E4%B8%BB%E4%BA%BA%E7%BB%88%E4%BA%8E%E4%B8%8A%E5%BD%93%E4%BA%86%23) `255.4K 🔥` `+45%`
1. [JDG对战TTG](https://s.weibo.com/weibo?q=%23JDG%E5%AF%B9%E6%88%98TTG%23) `209.6K 🔥` `+27%`
1. [体脂率才是检验胖瘦的关键](https://s.weibo.com/weibo?q=%23%E4%BD%93%E8%84%82%E7%8E%87%E6%89%8D%E6%98%AF%E6%A3%80%E9%AA%8C%E8%83%96%E7%98%A6%E7%9A%84%E5%85%B3%E9%94%AE%23) `157.8K 🔥` `+37%`
1. [谁杀死了驾校 (Who killed the driving school?)](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%9D%80%E6%AD%BB%E4%BA%86%E9%A9%BE%E6%A0%A1%23) `1.3M 🔥`
1. [胖东来 刑释人员](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%20%E5%88%91%E9%87%8A%E4%BA%BA%E5%91%98%23) `874.2K 🔥`
1. [这一天值得每一名中国人铭记 (This day is worth remembering by every Chinese)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E5%A4%A9%E5%80%BC%E5%BE%97%E6%AF%8F%E4%B8%80%E5%90%8D%E4%B8%AD%E5%9B%BD%E4%BA%BA%E9%93%AD%E8%AE%B0%23) `707.6K 🔥`
1. [原来活体器官运输不是专门的飞机](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%B4%BB%E4%BD%93%E5%99%A8%E5%AE%98%E8%BF%90%E8%BE%93%E4%B8%8D%E6%98%AF%E4%B8%93%E9%97%A8%E7%9A%84%E9%A3%9E%E6%9C%BA%23) `410.0K 🔥`
1. [终于明白减重减肥减脂区别](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%98%8E%E7%99%BD%E5%87%8F%E9%87%8D%E5%87%8F%E8%82%A5%E5%87%8F%E8%84%82%E5%8C%BA%E5%88%AB%23) `344.6K 🔥`
1. [疯狂动物城3官宣 (Zootopia 3 official announcement)](https://s.weibo.com/weibo?q=%23%E7%96%AF%E7%8B%82%E5%8A%A8%E7%89%A9%E5%9F%8E3%E5%AE%98%E5%AE%A3%23) `257.9K 🔥`
1. [isa聊天记录](https://s.weibo.com/weibo?q=%23isa%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `253.7K 🔥`
1. [曝与张凌赫合照价格](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%B8%8E%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%90%88%E7%85%A7%E4%BB%B7%E6%A0%BC%23) `250.2K 🔥`
1. [公司空调已经做到这种程度了 (The company's air conditioners have already reached this level.)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E7%A9%BA%E8%B0%83%E5%B7%B2%E7%BB%8F%E5%81%9A%E5%88%B0%E8%BF%99%E7%A7%8D%E7%A8%8B%E5%BA%A6%E4%BA%86%23) `247.0K 🔥`
1. [邓超给初代跑男合照签名](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E7%BB%99%E5%88%9D%E4%BB%A3%E8%B7%91%E7%94%B7%E5%90%88%E7%85%A7%E7%AD%BE%E5%90%8D%23) `245.3K 🔥`
1. [比利时一学生挖到大量金币金条 (A student in Belgium dug up a large number of gold coins and gold bars)](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B6%E4%B8%80%E5%AD%A6%E7%94%9F%E6%8C%96%E5%88%B0%E5%A4%A7%E9%87%8F%E9%87%91%E5%B8%81%E9%87%91%E6%9D%A1%23) `239.4K 🔥`
1. [手机涨得快买不起了 (Mobile phones are so expensive that they are almost unaffordable.)](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E6%B6%A8%E5%BE%97%E5%BF%AB%E4%B9%B0%E4%B8%8D%E8%B5%B7%E4%BA%86%23) `237.4K 🔥`
1. [好多明星暴瘦](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A4%9A%E6%98%8E%E6%98%9F%E6%9A%B4%E7%98%A6%23) `233.7K 🔥`
1. [杜女士你的身份证在邢昭林这儿](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%A5%B3%E5%A3%AB%E4%BD%A0%E7%9A%84%E8%BA%AB%E4%BB%BD%E8%AF%81%E5%9C%A8%E9%82%A2%E6%98%AD%E6%9E%97%E8%BF%99%E5%84%BF%23) `232.1K 🔥`
1. [oner一语成谶](https://s.weibo.com/weibo?q=%23oner%E4%B8%80%E8%AF%AD%E6%88%90%E8%B0%B6%23) `223.9K 🔥`
1. [王嘉尔吃自己的瓜 (Wang Jiaer eats his own melon)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%98%89%E5%B0%94%E5%90%83%E8%87%AA%E5%B7%B1%E7%9A%84%E7%93%9C%23) `218.7K 🔥`
1. [朱女士案赶快拿钱离婚才是上策](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%A5%B3%E5%A3%AB%E6%A1%88%E8%B5%B6%E5%BF%AB%E6%8B%BF%E9%92%B1%E7%A6%BB%E5%A9%9A%E6%89%8D%E6%98%AF%E4%B8%8A%E7%AD%96%23) `217.8K 🔥`
1. [徐梦桃听到婆婆被家暴的反应](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E5%90%AC%E5%88%B0%E5%A9%86%E5%A9%86%E8%A2%AB%E5%AE%B6%E6%9A%B4%E7%9A%84%E5%8F%8D%E5%BA%94%23) `215.2K 🔥`
1. [天津已经进化成这样了吗 (Has Tianjin evolved into this?)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B4%A5%E5%B7%B2%E7%BB%8F%E8%BF%9B%E5%8C%96%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%E5%90%97%23) `213.9K 🔥`
1. [杨超越黄裙高定 (Yang Chaoyue yellow dress haute couture)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%E9%BB%84%E8%A3%99%E9%AB%98%E5%AE%9A%23) `210.1K 🔥`
1. [丈夫多年给丧偶初中女同学逐条留言](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E5%A4%9A%E5%B9%B4%E7%BB%99%E4%B8%A7%E5%81%B6%E5%88%9D%E4%B8%AD%E5%A5%B3%E5%90%8C%E5%AD%A6%E9%80%90%E6%9D%A1%E7%95%99%E8%A8%80%23) `208.7K 🔥`
1. [魏子宸 剪发](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%AD%90%E5%AE%B8%20%E5%89%AA%E5%8F%91%23) `207.5K 🔥`
1. [曝王嘉尔宋雨琦恋情 (Wang Jiaer and Song Yuqi's romance revealed)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E5%98%89%E5%B0%94%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%81%8B%E6%83%85%23) `206.4K 🔥`
1. [卖霉豆腐已经有人实操上了 (Someone has already started selling moldy tofu.)](https://s.weibo.com/weibo?q=%23%E5%8D%96%E9%9C%89%E8%B1%86%E8%85%90%E5%B7%B2%E7%BB%8F%E6%9C%89%E4%BA%BA%E5%AE%9E%E6%93%8D%E4%B8%8A%E4%BA%86%23) `204.1K 🔥`
1. [周深在宋亚轩面前像个新兵蛋子](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E5%9C%A8%E5%AE%8B%E4%BA%9A%E8%BD%A9%E9%9D%A2%E5%89%8D%E5%83%8F%E4%B8%AA%E6%96%B0%E5%85%B5%E8%9B%8B%E5%AD%90%23) `175.9K 🔥`
1. [建议大家少吃这6种食物](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%B0%91%E5%90%83%E8%BF%996%E7%A7%8D%E9%A3%9F%E7%89%A9%23) `174.8K 🔥`
1. [王一博 飞天奖 (Wang Yibo Feitian Award)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%20%E9%A3%9E%E5%A4%A9%E5%A5%96%23) `145.8K 🔥`
1. [高市早苗战败日讲话删去反省 (Takaichi Sanae's speech on the day of defeat was deleted and reflected on)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E6%88%98%E8%B4%A5%E6%97%A5%E8%AE%B2%E8%AF%9D%E5%88%A0%E5%8E%BB%E5%8F%8D%E7%9C%81%23) `131.2K 🔥`
1. [路虎亏钱卖车](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E8%99%8E%E4%BA%8F%E9%92%B1%E5%8D%96%E8%BD%A6%23) `130.9K 🔥`
1. [豪华旗舰神行者8震撼33.99万元起 (The luxury flagship Freelander 8 is shocking, starting from 339,900 yuan)](https://s.weibo.com/weibo?q=%23%E8%B1%AA%E5%8D%8E%E6%97%97%E8%88%B0%E7%A5%9E%E8%A1%8C%E8%80%858%E9%9C%87%E6%92%BC33.99%E4%B8%87%E5%85%83%E8%B5%B7%23) `551.2K 🔥` `-56%`
1. [我们的少年时代2有36集 (Our Boyhood 2 has 36 episodes)](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%E6%9C%8936%E9%9B%86%23) `463.4K 🔥` `-23%`
1. [王俊凯演唱会舞台海浪效果 (Wang Junkai concert stage wave effect)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E8%88%9E%E5%8F%B0%E6%B5%B7%E6%B5%AA%E6%95%88%E6%9E%9C%23) `222.4K 🔥` `-47%`
1. [张婧仪 怎么会有人睡觉也这么好看](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%A7%E4%BB%AA%20%E6%80%8E%E4%B9%88%E4%BC%9A%E6%9C%89%E4%BA%BA%E7%9D%A1%E8%A7%89%E4%B9%9F%E8%BF%99%E4%B9%88%E5%A5%BD%E7%9C%8B%23) `211.8K 🔥` `-21%`
1. [鹿晗给汪苏泷送花篮了 (Lu Han sent a flower basket to Wang Sulong)](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E7%BB%99%E6%B1%AA%E8%8B%8F%E6%B3%B7%E9%80%81%E8%8A%B1%E7%AF%AE%E4%BA%86%23) `192.1K 🔥` `-30%`
1. [东京地铁被淹却见水质清澈 (Tokyo subway was flooded but the water was clear)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E4%BA%AC%E5%9C%B0%E9%93%81%E8%A2%AB%E6%B7%B9%E5%8D%B4%E8%A7%81%E6%B0%B4%E8%B4%A8%E6%B8%85%E6%BE%88%23) `181.1K 🔥` `-22%`
1. [李雪琴看汪苏泷演唱会](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9B%AA%E7%90%B4%E7%9C%8B%E6%B1%AA%E8%8B%8F%E6%B3%B7%E6%BC%94%E5%94%B1%E4%BC%9A%23) `174.9K 🔥` `-24%`

Updated at 2026-08-15 19:14:58

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
