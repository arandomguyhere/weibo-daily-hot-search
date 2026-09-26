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

1. [华为 赛力斯](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%20%E8%B5%9B%E5%8A%9B%E6%96%AF%23) `1.0M 🔥` `NEW`
1. [中美关系的前途是光明的](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%B3%E7%B3%BB%E7%9A%84%E5%89%8D%E9%80%94%E6%98%AF%E5%85%89%E6%98%8E%E7%9A%84%23) `1.0M 🔥` `NEW`
1. [为什么你去旅游很无聊](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BD%A0%E5%8E%BB%E6%97%85%E6%B8%B8%E5%BE%88%E6%97%A0%E8%81%8A%23) `1.0M 🔥` `NEW`
1. [比尔盖茨发出严厉警告](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%B0%94%E7%9B%96%E8%8C%A8%E5%8F%91%E5%87%BA%E4%B8%A5%E5%8E%89%E8%AD%A6%E5%91%8A%23) `908.0K 🔥` `NEW`
1. [张家齐祝贺陈芋汐卢为夺金](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E7%A5%9D%E8%B4%BA%E9%99%88%E8%8A%8B%E6%B1%90%E5%8D%A2%E4%B8%BA%E5%A4%BA%E9%87%91%23) `904.4K 🔥` `NEW`
1. [假期的浪漫藏在河南宝泉](https://s.weibo.com/weibo?q=%23%E5%81%87%E6%9C%9F%E7%9A%84%E6%B5%AA%E6%BC%AB%E8%97%8F%E5%9C%A8%E6%B2%B3%E5%8D%97%E5%AE%9D%E6%B3%89%23) `897.6K 🔥` `NEW`
1. [盖茨称人工智能或致十亿人死亡](https://s.weibo.com/weibo?q=%23%E7%9B%96%E8%8C%A8%E7%A7%B0%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E6%88%96%E8%87%B4%E5%8D%81%E4%BA%BF%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `879.3K 🔥` `NEW`
1. [王楚钦说没有精力了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%AF%B4%E6%B2%A1%E6%9C%89%E7%B2%BE%E5%8A%9B%E4%BA%86%23) `840.2K 🔥` `NEW`
1. [大陆学生赴台交流被女间谍主动接近](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%99%86%E5%AD%A6%E7%94%9F%E8%B5%B4%E5%8F%B0%E4%BA%A4%E6%B5%81%E8%A2%AB%E5%A5%B3%E9%97%B4%E8%B0%8D%E4%B8%BB%E5%8A%A8%E6%8E%A5%E8%BF%91%23) `818.8K 🔥` `NEW`
1. [中美共同构建建设性战略稳定关系](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%85%B1%E5%90%8C%E6%9E%84%E5%BB%BA%E5%BB%BA%E8%AE%BE%E6%80%A7%E6%88%98%E7%95%A5%E7%A8%B3%E5%AE%9A%E5%85%B3%E7%B3%BB%23) `800.8K 🔥` `NEW`
1. [刘欢去世](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%E5%8E%BB%E4%B8%96%23) `768.7K 🔥` `NEW`
1. [被雪莉资助的孩子不知她已离世](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%9B%AA%E8%8E%89%E8%B5%84%E5%8A%A9%E7%9A%84%E5%AD%A9%E5%AD%90%E4%B8%8D%E7%9F%A5%E5%A5%B9%E5%B7%B2%E7%A6%BB%E4%B8%96%23) `762.8K 🔥` `NEW`
1. [众歌手悼念刘欢](https://s.weibo.com/weibo?q=%23%E4%BC%97%E6%AD%8C%E6%89%8B%E6%82%BC%E5%BF%B5%E5%88%98%E6%AC%A2%23) `742.4K 🔥` `NEW`
1. [国乒 陪练流失](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%20%E9%99%AA%E7%BB%83%E6%B5%81%E5%A4%B1%23) `721.0K 🔥` `NEW`
1. [刘欢7年前曾做支架手术](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A27%E5%B9%B4%E5%89%8D%E6%9B%BE%E5%81%9A%E6%94%AF%E6%9E%B6%E6%89%8B%E6%9C%AF%23) `719.0K 🔥` `NEW`
1. [缺血性股骨头坏死是什么病](https://s.weibo.com/weibo?q=%23%E7%BC%BA%E8%A1%80%E6%80%A7%E8%82%A1%E9%AA%A8%E5%A4%B4%E5%9D%8F%E6%AD%BB%E6%98%AF%E4%BB%80%E4%B9%88%E7%97%85%23) `716.7K 🔥` `NEW`
1. [刘欢讣告日是姚贝娜生日](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%E8%AE%A3%E5%91%8A%E6%97%A5%E6%98%AF%E5%A7%9A%E8%B4%9D%E5%A8%9C%E7%94%9F%E6%97%A5%23) `713.7K 🔥` `NEW`
1. [刘欢最后一次公开演出](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%E6%9C%80%E5%90%8E%E4%B8%80%E6%AC%A1%E5%85%AC%E5%BC%80%E6%BC%94%E5%87%BA%23) `708.7K 🔥` `NEW`
1. [陈芋汐卢为10米台夺金](https://s.weibo.com/weibo?q=%23%E9%99%88%E8%8A%8B%E6%B1%90%E5%8D%A2%E4%B8%BA10%E7%B1%B3%E5%8F%B0%E5%A4%BA%E9%87%91%23) `699.6K 🔥` `NEW`
1. [兰香如故兰香怀孕](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E5%85%B0%E9%A6%99%E6%80%80%E5%AD%95%23) `681.2K 🔥` `NEW`
1. [井柏然口碑翻车](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E5%8F%A3%E7%A2%91%E7%BF%BB%E8%BD%A6%23) `665.7K 🔥` `NEW`
1. [Gucci大秀回顾](https://s.weibo.com/weibo?q=%23Gucci%E5%A4%A7%E7%A7%80%E5%9B%9E%E9%A1%BE%23) `631.2K 🔥` `NEW`
1. [刘欢去世流浪地球3主题曲谁接棒](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%E5%8E%BB%E4%B8%96%E6%B5%81%E6%B5%AA%E5%9C%B0%E7%90%833%E4%B8%BB%E9%A2%98%E6%9B%B2%E8%B0%81%E6%8E%A5%E6%A3%92%23) `599.6K 🔥` `NEW`
1. [刘欢大学就读于法国文学专业](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%E5%A4%A7%E5%AD%A6%E5%B0%B1%E8%AF%BB%E4%BA%8E%E6%B3%95%E5%9B%BD%E6%96%87%E5%AD%A6%E4%B8%93%E4%B8%9A%23) `598.1K 🔥` `NEW`
1. [朋友圈已进入领证结婚时代](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%B7%B2%E8%BF%9B%E5%85%A5%E9%A2%86%E8%AF%81%E7%BB%93%E5%A9%9A%E6%97%B6%E4%BB%A3%23) `597.6K 🔥` `NEW`
1. [甄嬛传悼念刘欢](https://s.weibo.com/weibo?q=%23%E7%94%84%E5%AC%9B%E4%BC%A0%E6%82%BC%E5%BF%B5%E5%88%98%E6%AC%A2%23) `597.2K 🔥` `NEW`
1. [孙颖莎魔鬼赛程](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E9%AD%94%E9%AC%BC%E8%B5%9B%E7%A8%8B%23) `591.6K 🔥` `NEW`
1. [库里降薪2070万美元续约](https://s.weibo.com/weibo?q=%23%E5%BA%93%E9%87%8C%E9%99%8D%E8%96%AA2070%E4%B8%87%E7%BE%8E%E5%85%83%E7%BB%AD%E7%BA%A6%23) `590.7K 🔥` `NEW`
1. [歌手失去第二个歌王了](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E5%A4%B1%E5%8E%BB%E7%AC%AC%E4%BA%8C%E4%B8%AA%E6%AD%8C%E7%8E%8B%E4%BA%86%23) `590.1K 🔥` `NEW`
1. [刘欢去世不成立治丧委员会](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%E5%8E%BB%E4%B8%96%E4%B8%8D%E6%88%90%E7%AB%8B%E6%B2%BB%E4%B8%A7%E5%A7%94%E5%91%98%E4%BC%9A%23) `560.5K 🔥` `NEW`
1. [吉克隽逸吾师远去悲痛难抑](https://s.weibo.com/weibo?q=%23%E5%90%89%E5%85%8B%E9%9A%BD%E9%80%B8%E5%90%BE%E5%B8%88%E8%BF%9C%E5%8E%BB%E6%82%B2%E7%97%9B%E9%9A%BE%E6%8A%91%23) `556.9K 🔥` `NEW`
1. [刘欢09年确诊不死癌症](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A209%E5%B9%B4%E7%A1%AE%E8%AF%8A%E4%B8%8D%E6%AD%BB%E7%99%8C%E7%97%87%23) `556.6K 🔥` `NEW`
1. [华为Mate90真机图流出](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAMate90%E7%9C%9F%E6%9C%BA%E5%9B%BE%E6%B5%81%E5%87%BA%23) `555.2K 🔥` `NEW`
1. [王楚钦晋级男单八强](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E6%99%8B%E7%BA%A7%E7%94%B7%E5%8D%95%E5%85%AB%E5%BC%BA%23) `553.2K 🔥` `NEW`
1. [亚运会八强男单女单名单](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%85%AB%E5%BC%BA%E7%94%B7%E5%8D%95%E5%A5%B3%E5%8D%95%E5%90%8D%E5%8D%95%23) `552.6K 🔥` `NEW`
1. [邓为王星越你两有点暧昧了](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%B8%BA%E7%8E%8B%E6%98%9F%E8%B6%8A%E4%BD%A0%E4%B8%A4%E6%9C%89%E7%82%B9%E6%9A%A7%E6%98%A7%E4%BA%86%23) `550.8K 🔥` `NEW`
1. [刘欢改变了吉克隽逸的命运](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%AC%A2%E6%94%B9%E5%8F%98%E4%BA%86%E5%90%89%E5%85%8B%E9%9A%BD%E9%80%B8%E7%9A%84%E5%91%BD%E8%BF%90%23) `549.0K 🔥` `NEW`
1. [姚贝娜父亲哽咽回应刘欢去世](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E8%B4%9D%E5%A8%9C%E7%88%B6%E4%BA%B2%E5%93%BD%E5%92%BD%E5%9B%9E%E5%BA%94%E5%88%98%E6%AC%A2%E5%8E%BB%E4%B8%96%23) `547.6K 🔥` `NEW`
1. [那英发博悼念刘欢](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E5%8F%91%E5%8D%9A%E6%82%BC%E5%BF%B5%E5%88%98%E6%AC%A2%23) `547.0K 🔥` `NEW`
1. [喜脉洗脉](https://s.weibo.com/weibo?q=%23%E5%96%9C%E8%84%89%E6%B4%97%E8%84%89%23) `541.6K 🔥` `NEW`
1. [全国统一的洗澡前反复问](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E7%BB%9F%E4%B8%80%E7%9A%84%E6%B4%97%E6%BE%A1%E5%89%8D%E5%8F%8D%E5%A4%8D%E9%97%AE%23) `245.4K 🔥` `NEW`
1. [华为Mate90系列发布会定档](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAMate90%E7%B3%BB%E5%88%97%E5%8F%91%E5%B8%83%E4%BC%9A%E5%AE%9A%E6%A1%A3%23) `244.6K 🔥` `NEW`
1. [淡淡姐弟恋新恋情公开](https://s.weibo.com/weibo?q=%23%E6%B7%A1%E6%B7%A1%E5%A7%90%E5%BC%9F%E6%81%8B%E6%96%B0%E6%81%8B%E6%83%85%E5%85%AC%E5%BC%80%23) `243.4K 🔥` `NEW`
1. [张家齐从六岁到退役一共给了家里多少钱](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E9%BD%90%E4%BB%8E%E5%85%AD%E5%B2%81%E5%88%B0%E9%80%80%E5%BD%B9%E4%B8%80%E5%85%B1%E7%BB%99%E4%BA%86%E5%AE%B6%E9%87%8C%E5%A4%9A%E5%B0%91%E9%92%B1%23) `236.9K 🔥` `NEW`
1. [赛力斯 鸿蒙智行](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E5%8A%9B%E6%96%AF%20%E9%B8%BF%E8%92%99%E6%99%BA%E8%A1%8C%23) `226.3K 🔥` `NEW`
1. [成毅新剧史诗级阵容](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E6%96%B0%E5%89%A7%E5%8F%B2%E8%AF%97%E7%BA%A7%E9%98%B5%E5%AE%B9%23) `225.9K 🔥` `NEW`
1. [我欲成仙](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%AC%B2%E6%88%90%E4%BB%99%23) `194.7K 🔥` `NEW`
1. [王楚钦不该承受恶劣舆论环境](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%B8%8D%E8%AF%A5%E6%89%BF%E5%8F%97%E6%81%B6%E5%8A%A3%E8%88%86%E8%AE%BA%E7%8E%AF%E5%A2%83%23) `710.9K 🔥` `+231%`
1. [刘雯从头到尾又做错了什么](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%9B%AF%E4%BB%8E%E5%A4%B4%E5%88%B0%E5%B0%BE%E5%8F%88%E5%81%9A%E9%94%99%E4%BA%86%E4%BB%80%E4%B9%88%23) `627.8K 🔥` `+203%`
1. [新华社为王楚钦发声](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8D%8E%E7%A4%BE%E4%B8%BA%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%8F%91%E5%A3%B0%23) `564.8K 🔥` `+159%`
1. [中美两国元首夫妇参观美国国家档案馆](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E4%B8%A4%E5%9B%BD%E5%85%83%E9%A6%96%E5%A4%AB%E5%A6%87%E5%8F%82%E8%A7%82%E7%BE%8E%E5%9B%BD%E5%9B%BD%E5%AE%B6%E6%A1%A3%E6%A1%88%E9%A6%86%23) `1.0M 🔥`

Updated at 2026-09-26 13:55:30

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
