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

1. [我国服务业增加值实现三连跳 (The added value of my country’s service industry has jumped three times in a row)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%9C%8D%E5%8A%A1%E4%B8%9A%E5%A2%9E%E5%8A%A0%E5%80%BC%E5%AE%9E%E7%8E%B0%E4%B8%89%E8%BF%9E%E8%B7%B3%23) `800.9K 🔥` `NEW`
1. [赵心童vs墨菲](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%BF%83%E7%AB%A5vs%E5%A2%A8%E8%8F%B2%23) `777.6K 🔥` `NEW`
1. [DeepSeek还是最强国产AI吗](https://s.weibo.com/weibo?q=%23DeepSeek%E8%BF%98%E6%98%AF%E6%9C%80%E5%BC%BA%E5%9B%BD%E4%BA%A7AI%E5%90%97%23) `761.6K 🔥` `NEW`
1. [大冰谈人际交往的大忌](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E8%B0%88%E4%BA%BA%E9%99%85%E4%BA%A4%E5%BE%80%E7%9A%84%E5%A4%A7%E5%BF%8C%23) `743.0K 🔥` `NEW`
1. [积分抽盲盒](https://s.weibo.com/weibo?q=%23%E7%A7%AF%E5%88%86%E6%8A%BD%E7%9B%B2%E7%9B%92%23) `743.0K 🔥` `NEW`
1. [摆拍孕妇遭骂引产事件透支大众关切](https://s.weibo.com/weibo?q=%23%E6%91%86%E6%8B%8D%E5%AD%95%E5%A6%87%E9%81%AD%E9%AA%82%E5%BC%95%E4%BA%A7%E4%BA%8B%E4%BB%B6%E9%80%8F%E6%94%AF%E5%A4%A7%E4%BC%97%E5%85%B3%E5%88%87%23) `735.0K 🔥` `NEW`
1. [断崖式垮脸其实就是水毒](https://s.weibo.com/weibo?q=%23%E6%96%AD%E5%B4%96%E5%BC%8F%E5%9E%AE%E8%84%B8%E5%85%B6%E5%AE%9E%E5%B0%B1%E6%98%AF%E6%B0%B4%E6%AF%92%23) `725.5K 🔥` `NEW`
1. [奶龙高考落榜](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E9%BE%99%E9%AB%98%E8%80%83%E8%90%BD%E6%A6%9C%23) `666.1K 🔥` `NEW`
1. [逐玉集均8000万](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E9%9B%86%E5%9D%878000%E4%B8%87%23) `478.0K 🔥` `NEW`
1. [佳偶天成 念无双](https://s.weibo.com/weibo?q=%23%E4%BD%B3%E5%81%B6%E5%A4%A9%E6%88%90%20%E5%BF%B5%E6%97%A0%E5%8F%8C%23) `348.0K 🔥` `NEW`
1. [断联42天的8岁伊朗男孩回绍兴上学 (An 8-year-old Iranian boy who was cut off from contact for 42 days returns to Shaoxing to go to school)](https://s.weibo.com/weibo?q=%23%E6%96%AD%E8%81%9442%E5%A4%A9%E7%9A%848%E5%B2%81%E4%BC%8A%E6%9C%97%E7%94%B7%E5%AD%A9%E5%9B%9E%E7%BB%8D%E5%85%B4%E4%B8%8A%E5%AD%A6%23) `313.9K 🔥` `NEW`
1. [ILLIT新歌在外网引发热议](https://s.weibo.com/weibo?q=%23ILLIT%E6%96%B0%E6%AD%8C%E5%9C%A8%E5%A4%96%E7%BD%91%E5%BC%95%E5%8F%91%E7%83%AD%E8%AE%AE%23) `271.8K 🔥` `NEW`
1. [老师批注学生你的字和你一样丑](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%B8%88%E6%89%B9%E6%B3%A8%E5%AD%A6%E7%94%9F%E4%BD%A0%E7%9A%84%E5%AD%97%E5%92%8C%E4%BD%A0%E4%B8%80%E6%A0%B7%E4%B8%91%23) `270.3K 🔥` `NEW`
1. [韩汶栩 ZXY雨](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%B1%B6%E6%A0%A9%20ZXY%E9%9B%A8%23) `269.2K 🔥` `NEW`
1. [Dior南京活动](https://s.weibo.com/weibo?q=%23Dior%E5%8D%97%E4%BA%AC%E6%B4%BB%E5%8A%A8%23) `266.2K 🔥` `NEW`
1. [田曦薇青天大老爷这次来真的了](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E9%9D%92%E5%A4%A9%E5%A4%A7%E8%80%81%E7%88%B7%E8%BF%99%E6%AC%A1%E6%9D%A5%E7%9C%9F%E7%9A%84%E4%BA%86%23) `264.1K 🔥` `NEW`
1. [蜜语纪](https://s.weibo.com/weibo?q=%23%E8%9C%9C%E8%AF%AD%E7%BA%AA%23) `263.7K 🔥` `NEW`
1. [金价涨不动了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%B6%A8%E4%B8%8D%E5%8A%A8%E4%BA%86%23) `262.6K 🔥` `NEW`
1. [你心目中的道](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%BF%83%E7%9B%AE%E4%B8%AD%E7%9A%84%E9%81%93%23) `261.3K 🔥` `NEW`
1. [你给商家的差评正被明码标价删除](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%BB%99%E5%95%86%E5%AE%B6%E7%9A%84%E5%B7%AE%E8%AF%84%E6%AD%A3%E8%A2%AB%E6%98%8E%E7%A0%81%E6%A0%87%E4%BB%B7%E5%88%A0%E9%99%A4%23) `252.5K 🔥` `NEW`
1. [同事因为我离职哭了 (My colleagues cried because I resigned)](https://s.weibo.com/weibo?q=%23%E5%90%8C%E4%BA%8B%E5%9B%A0%E4%B8%BA%E6%88%91%E7%A6%BB%E8%81%8C%E5%93%AD%E4%BA%86%23) `250.5K 🔥` `NEW`
1. [女子为爱远嫁生3个娃被升职丈夫嫌弃](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B8%BA%E7%88%B1%E8%BF%9C%E5%AB%81%E7%94%9F3%E4%B8%AA%E5%A8%83%E8%A2%AB%E5%8D%87%E8%81%8C%E4%B8%88%E5%A4%AB%E5%AB%8C%E5%BC%83%23) `248.0K 🔥` `NEW`
1. [DiorCigale](https://s.weibo.com/weibo?q=%23DiorCigale%23) `247.2K 🔥` `NEW`
1. [员工孕期请假未获批被以旷工开除](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A5%E5%AD%95%E6%9C%9F%E8%AF%B7%E5%81%87%E6%9C%AA%E8%8E%B7%E6%89%B9%E8%A2%AB%E4%BB%A5%E6%97%B7%E5%B7%A5%E5%BC%80%E9%99%A4%23) `243.6K 🔥` `NEW`
1. [强奸又刺死见义勇为者凶手死刑](https://s.weibo.com/weibo?q=%23%E5%BC%BA%E5%A5%B8%E5%8F%88%E5%88%BA%E6%AD%BB%E8%A7%81%E4%B9%89%E5%8B%87%E4%B8%BA%E8%80%85%E5%87%B6%E6%89%8B%E6%AD%BB%E5%88%91%23) `242.5K 🔥` `NEW`
1. [朋友之间别聊太沉重的话题](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E4%B9%8B%E9%97%B4%E5%88%AB%E8%81%8A%E5%A4%AA%E6%B2%89%E9%87%8D%E7%9A%84%E8%AF%9D%E9%A2%98%23) `241.6K 🔥` `NEW`
1. [MPV欠大家一个防滚梁](https://s.weibo.com/weibo?q=%23MPV%E6%AC%A0%E5%A4%A7%E5%AE%B6%E4%B8%80%E4%B8%AA%E9%98%B2%E6%BB%9A%E6%A2%81%23) `240.1K 🔥` `NEW`
1. [英伟达晒黄仁勋樊振东合照](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%99%92%E9%BB%84%E4%BB%81%E5%8B%8B%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%90%88%E7%85%A7%23) `239.3K 🔥` `NEW`
1. [中方回应高市早苗为长期战争做准备](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E4%B8%BA%E9%95%BF%E6%9C%9F%E6%88%98%E4%BA%89%E5%81%9A%E5%87%86%E5%A4%87%23) `235.6K 🔥` `NEW`
1. [张月清唱言不由衷](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E6%B8%85%E5%94%B1%E8%A8%80%E4%B8%8D%E7%94%B1%E8%A1%B7%23) `233.9K 🔥` `NEW`
1. [高三学生将槟榔伴侣滴入同桌饮水杯 (A senior high school student dropped betel nut mate into the drinking glass at the same table)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%89%E5%AD%A6%E7%94%9F%E5%B0%86%E6%A7%9F%E6%A6%94%E4%BC%B4%E4%BE%A3%E6%BB%B4%E5%85%A5%E5%90%8C%E6%A1%8C%E9%A5%AE%E6%B0%B4%E6%9D%AF%23) `231.6K 🔥` `NEW`
1. [网红白冰偷逃近千万为何没坐牢](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E7%99%BD%E5%86%B0%E5%81%B7%E9%80%83%E8%BF%91%E5%8D%83%E4%B8%87%E4%B8%BA%E4%BD%95%E6%B2%A1%E5%9D%90%E7%89%A2%23) `1.1M 🔥` `+226%`
1. [建议亲人去世一两个月后主动查负债 (It is recommended that you proactively check your debts one or two months after the death of a loved one.)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%BA%B2%E4%BA%BA%E5%8E%BB%E4%B8%96%E4%B8%80%E4%B8%A4%E4%B8%AA%E6%9C%88%E5%90%8E%E4%B8%BB%E5%8A%A8%E6%9F%A5%E8%B4%9F%E5%80%BA%23) `804.4K 🔥` `+204%`
1. [miumiu陷害女明星](https://s.weibo.com/weibo?q=%23miumiu%E9%99%B7%E5%AE%B3%E5%A5%B3%E6%98%8E%E6%98%9F%23) `470.7K 🔥` `+46%`
1. [王亚飞 迪丽热巴](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BA%9A%E9%A3%9E%20%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23) `422.0K 🔥` `+37%`
1. [小英变卡戴英了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%8B%B1%E5%8F%98%E5%8D%A1%E6%88%B4%E8%8B%B1%E4%BA%86%23) `314.5K 🔥` `+21%`
1. [韩汶栩 在红树林吹号的鹦鹉鱼](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%B1%B6%E6%A0%A9%20%E5%9C%A8%E7%BA%A2%E6%A0%91%E6%9E%97%E5%90%B9%E5%8F%B7%E7%9A%84%E9%B9%A6%E9%B9%89%E9%B1%BC%23) `267.6K 🔥` `+33%`
1. [女子看病被要求脱光衣物遭医生袭胸](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%9C%8B%E7%97%85%E8%A2%AB%E8%A6%81%E6%B1%82%E8%84%B1%E5%85%89%E8%A1%A3%E7%89%A9%E9%81%AD%E5%8C%BB%E7%94%9F%E8%A2%AD%E8%83%B8%23) `259.7K 🔥` `+43%`
1. [小黄油美式 全冰去水](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%BB%84%E6%B2%B9%E7%BE%8E%E5%BC%8F%20%E5%85%A8%E5%86%B0%E5%8E%BB%E6%B0%B4%23) `255.8K 🔥` `+38%`
1. [猫咪硬生生在小区绕了8圈才回家](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%92%AA%E7%A1%AC%E7%94%9F%E7%94%9F%E5%9C%A8%E5%B0%8F%E5%8C%BA%E7%BB%95%E4%BA%868%E5%9C%88%E6%89%8D%E5%9B%9E%E5%AE%B6%23) `251.7K 🔥` `+39%`
1. [Rookie小钰事件法律层面解读](https://s.weibo.com/weibo?q=%23Rookie%E5%B0%8F%E9%92%B0%E4%BA%8B%E4%BB%B6%E6%B3%95%E5%BE%8B%E5%B1%82%E9%9D%A2%E8%A7%A3%E8%AF%BB%23) `246.1K 🔥` `+32%`
1. [卜凡跳团舞踢队友 (Bu Fan dances in a group dance and kicks his teammates)](https://s.weibo.com/weibo?q=%23%E5%8D%9C%E5%87%A1%E8%B7%B3%E5%9B%A2%E8%88%9E%E8%B8%A2%E9%98%9F%E5%8F%8B%23) `237.9K 🔥` `+31%`
1. [H股大涨15% (H shares soared 15%)](https://s.weibo.com/weibo?q=%23H%E8%82%A1%E5%A4%A7%E6%B6%A815%25%23) `236.3K 🔥` `+26%`
1. [一加Ace6至尊版](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%8A%A0Ace6%E8%87%B3%E5%B0%8A%E7%89%88%23) `786.7K 🔥`
1. [网红白冰偷税911.18万 (Internet celebrity Bai Bing evaded 9.1118 million in taxes)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E7%99%BD%E5%86%B0%E5%81%B7%E7%A8%8E911.18%E4%B8%87%23) `257.8K 🔥`
1. [金钟仁说EXO是六人组](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%92%9F%E4%BB%81%E8%AF%B4EXO%E6%98%AF%E5%85%AD%E4%BA%BA%E7%BB%84%23) `254.7K 🔥`
1. [建议想减肥的人去一趟云南](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%83%B3%E5%87%8F%E8%82%A5%E7%9A%84%E4%BA%BA%E5%8E%BB%E4%B8%80%E8%B6%9F%E4%BA%91%E5%8D%97%23) `422.7K 🔥` `-53%`
1. [云南14岁男孩杀害女同学被判无期](https://s.weibo.com/weibo?q=%23%E4%BA%91%E5%8D%9714%E5%B2%81%E7%94%B7%E5%AD%A9%E6%9D%80%E5%AE%B3%E5%A5%B3%E5%90%8C%E5%AD%A6%E8%A2%AB%E5%88%A4%E6%97%A0%E6%9C%9F%23) `314.8K 🔥` `-37%`
1. [强奸出狱后又杀人男子被执行死刑](https://s.weibo.com/weibo?q=%23%E5%BC%BA%E5%A5%B8%E5%87%BA%E7%8B%B1%E5%90%8E%E5%8F%88%E6%9D%80%E4%BA%BA%E7%94%B7%E5%AD%90%E8%A2%AB%E6%89%A7%E8%A1%8C%E6%AD%BB%E5%88%91%23) `270.5K 🔥` `-46%`
1. [张雪曾拒绝跟华为合作 (Zhang Xue once refused to cooperate with Huawei)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9B%BE%E6%8B%92%E7%BB%9D%E8%B7%9F%E5%8D%8E%E4%B8%BA%E5%90%88%E4%BD%9C%23) `256.7K 🔥` `-78%`
1. [3只虾21块钱](https://s.weibo.com/weibo?q=%233%E5%8F%AA%E8%99%BE21%E5%9D%97%E9%92%B1%23) `249.2K 🔥` `-52%`
1. [孔雪儿说不接俞浅浅这种角色是笨蛋](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E8%AF%B4%E4%B8%8D%E6%8E%A5%E4%BF%9E%E6%B5%85%E6%B5%85%E8%BF%99%E7%A7%8D%E8%A7%92%E8%89%B2%E6%98%AF%E7%AC%A8%E8%9B%8B%23) `233.3K 🔥` `-28%`

Updated at 2026-04-28 19:16:37

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
