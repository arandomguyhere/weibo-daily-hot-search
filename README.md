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

1. [阿里员工十三薪将并入年终奖 (Alibaba employees’ 13-year salary will be incorporated into year-end bonus)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E9%87%8C%E5%91%98%E5%B7%A5%E5%8D%81%E4%B8%89%E8%96%AA%E5%B0%86%E5%B9%B6%E5%85%A5%E5%B9%B4%E7%BB%88%E5%A5%96%23) `967.0K 🔥` `NEW`
1. [高质量发展看荆楚](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%B4%A8%E9%87%8F%E5%8F%91%E5%B1%95%E7%9C%8B%E8%8D%86%E6%A5%9A%23) `857.0K 🔥` `NEW`
1. [法拉利前主席怒喷首款电车](https://s.weibo.com/weibo?q=%23%E6%B3%95%E6%8B%89%E5%88%A9%E5%89%8D%E4%B8%BB%E5%B8%AD%E6%80%92%E5%96%B7%E9%A6%96%E6%AC%BE%E7%94%B5%E8%BD%A6%23) `809.4K 🔥` `NEW`
1. [女子被大狗撞倒身亡养犬人接受调查](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A2%AB%E5%A4%A7%E7%8B%97%E6%92%9E%E5%80%92%E8%BA%AB%E4%BA%A1%E5%85%BB%E7%8A%AC%E4%BA%BA%E6%8E%A5%E5%8F%97%E8%B0%83%E6%9F%A5%23) `528.2K 🔥` `NEW`
1. [陈瑶晒和张月合照](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E6%99%92%E5%92%8C%E5%BC%A0%E6%9C%88%E5%90%88%E7%85%A7%23) `466.6K 🔥` `NEW`
1. [拓路者与山共生](https://s.weibo.com/weibo?q=%23%E6%8B%93%E8%B7%AF%E8%80%85%E4%B8%8E%E5%B1%B1%E5%85%B1%E7%94%9F%23) `425.8K 🔥` `NEW`
1. [富士山已处于随时可能喷发状态](https://s.weibo.com/weibo?q=%23%E5%AF%8C%E5%A3%AB%E5%B1%B1%E5%B7%B2%E5%A4%84%E4%BA%8E%E9%9A%8F%E6%97%B6%E5%8F%AF%E8%83%BD%E5%96%B7%E5%8F%91%E7%8A%B6%E6%80%81%23) `393.8K 🔥` `NEW`
1. [白玉兰评选标准只有一个](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E8%AF%84%E9%80%89%E6%A0%87%E5%87%86%E5%8F%AA%E6%9C%89%E4%B8%80%E4%B8%AA%23) `384.7K 🔥` `NEW`
1. [TheShy终于现身了](https://s.weibo.com/weibo?q=%23TheShy%E7%BB%88%E4%BA%8E%E7%8E%B0%E8%BA%AB%E4%BA%86%23) `260.5K 🔥` `NEW`
1. [深圳南坪快速大火](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%8D%97%E5%9D%AA%E5%BF%AB%E9%80%9F%E5%A4%A7%E7%81%AB%23) `255.5K 🔥` `NEW`
1. [官方回应深圳南坪快速大火 (Official response to rapid fire in Nanping, Shenzhen)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E6%B7%B1%E5%9C%B3%E5%8D%97%E5%9D%AA%E5%BF%AB%E9%80%9F%E5%A4%A7%E7%81%AB%23) `248.4K 🔥` `NEW`
1. [孙俪眼睛血管破裂](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BF%AA%E7%9C%BC%E7%9D%9B%E8%A1%80%E7%AE%A1%E7%A0%B4%E8%A3%82%23) `242.3K 🔥` `NEW`
1. [暴雨淹家夫妻俩1个玩手机1个补觉](https://s.weibo.com/weibo?q=%23%E6%9A%B4%E9%9B%A8%E6%B7%B9%E5%AE%B6%E5%A4%AB%E5%A6%BB%E4%BF%A91%E4%B8%AA%E7%8E%A9%E6%89%8B%E6%9C%BA1%E4%B8%AA%E8%A1%A5%E8%A7%89%23) `228.9K 🔥` `NEW`
1. [向太曝古天乐出道前坐过牢](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E6%9B%9D%E5%8F%A4%E5%A4%A9%E4%B9%90%E5%87%BA%E9%81%93%E5%89%8D%E5%9D%90%E8%BF%87%E7%89%A2%23) `226.4K 🔥` `NEW`
1. [全球存储三巨头](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E5%AD%98%E5%82%A8%E4%B8%89%E5%B7%A8%E5%A4%B4%23) `222.3K 🔥` `NEW`
1. [王楚钦登上数学模考卷](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%99%BB%E4%B8%8A%E6%95%B0%E5%AD%A6%E6%A8%A1%E8%80%83%E5%8D%B7%23) `220.5K 🔥` `NEW`
1. [陈丽君一眼好戏开场](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%90%9B%E4%B8%80%E7%9C%BC%E5%A5%BD%E6%88%8F%E5%BC%80%E5%9C%BA%23) `219.4K 🔥` `NEW`
1. [物业经理酒后把女业主扇脑震荡](https://s.weibo.com/weibo?q=%23%E7%89%A9%E4%B8%9A%E7%BB%8F%E7%90%86%E9%85%92%E5%90%8E%E6%8A%8A%E5%A5%B3%E4%B8%9A%E4%B8%BB%E6%89%87%E8%84%91%E9%9C%87%E8%8D%A1%23) `215.7K 🔥` `NEW`
1. [王者荣耀](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `213.9K 🔥` `NEW`
1. [女子吃完三房榴莲要退货老板气坏了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%90%83%E5%AE%8C%E4%B8%89%E6%88%BF%E6%A6%B4%E8%8E%B2%E8%A6%81%E9%80%80%E8%B4%A7%E8%80%81%E6%9D%BF%E6%B0%94%E5%9D%8F%E4%BA%86%23) `211.0K 🔥` `NEW`
1. [问界M9售价47.98至65.98万元 (Wenjie M9 is priced from 479,800 yuan to 659,800 yuan)](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8CM9%E5%94%AE%E4%BB%B747.98%E8%87%B365.98%E4%B8%87%E5%85%83%23) `208.9K 🔥` `NEW`
1. [娱乐圈三大神级公关](https://s.weibo.com/weibo?q=%23%E5%A8%B1%E4%B9%90%E5%9C%88%E4%B8%89%E5%A4%A7%E7%A5%9E%E7%BA%A7%E5%85%AC%E5%85%B3%23) `208.9K 🔥` `NEW`
1. [536分捡漏上北大学生打算读博](https://s.weibo.com/weibo?q=%23536%E5%88%86%E6%8D%A1%E6%BC%8F%E4%B8%8A%E5%8C%97%E5%A4%A7%E5%AD%A6%E7%94%9F%E6%89%93%E7%AE%97%E8%AF%BB%E5%8D%9A%23) `208.7K 🔥` `NEW`
1. [李昀锐腋下管理](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E8%85%8B%E4%B8%8B%E7%AE%A1%E7%90%86%23) `208.4K 🔥` `NEW`
1. [吴磊晒黑后的身材好火辣](https://s.weibo.com/weibo?q=%23%E5%90%B4%E7%A3%8A%E6%99%92%E9%BB%91%E5%90%8E%E7%9A%84%E8%BA%AB%E6%9D%90%E5%A5%BD%E7%81%AB%E8%BE%A3%23) `208.4K 🔥` `NEW`
1. [一些旺自己的小方法](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BA%9B%E6%97%BA%E8%87%AA%E5%B7%B1%E7%9A%84%E5%B0%8F%E6%96%B9%E6%B3%95%23) `208.1K 🔥` `NEW`
1. [Jennie舞蹈动作](https://s.weibo.com/weibo?q=%23Jennie%E8%88%9E%E8%B9%88%E5%8A%A8%E4%BD%9C%23) `208.0K 🔥` `NEW`
1. [网友说王鹤棣家炸串店卫生差](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E8%AF%B4%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%AE%B6%E7%82%B8%E4%B8%B2%E5%BA%97%E5%8D%AB%E7%94%9F%E5%B7%AE%23) `207.7K 🔥` `NEW`
1. [迪丽热巴粉丝也不舒服了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%B2%89%E4%B8%9D%E4%B9%9F%E4%B8%8D%E8%88%92%E6%9C%8D%E4%BA%86%23) `207.5K 🔥` `NEW`
1. [巴西患癌男子通过CART疗法一个月缓解](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E6%82%A3%E7%99%8C%E7%94%B7%E5%AD%90%E9%80%9A%E8%BF%87CART%E7%96%97%E6%B3%95%E4%B8%80%E4%B8%AA%E6%9C%88%E7%BC%93%E8%A7%A3%23) `207.3K 🔥` `NEW`
1. [薛小婉回应和任权分手 (Xue Xiaowan responded to breaking up with Ren Quan)](https://s.weibo.com/weibo?q=%23%E8%96%9B%E5%B0%8F%E5%A9%89%E5%9B%9E%E5%BA%94%E5%92%8C%E4%BB%BB%E6%9D%83%E5%88%86%E6%89%8B%23) `207.0K 🔥` `NEW`
1. [曝白鹿团队重组](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BD%E9%B9%BF%E5%9B%A2%E9%98%9F%E9%87%8D%E7%BB%84%23) `206.9K 🔥` `NEW`
1. [耳朵总是痒可能暗示5种问题](https://s.weibo.com/weibo?q=%23%E8%80%B3%E6%9C%B5%E6%80%BB%E6%98%AF%E7%97%92%E5%8F%AF%E8%83%BD%E6%9A%97%E7%A4%BA5%E7%A7%8D%E9%97%AE%E9%A2%98%23) `206.7K 🔥` `NEW`
1. [国外男子连续21天被AI吹捧精神崩溃](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%A4%96%E7%94%B7%E5%AD%90%E8%BF%9E%E7%BB%AD21%E5%A4%A9%E8%A2%ABAI%E5%90%B9%E6%8D%A7%E7%B2%BE%E7%A5%9E%E5%B4%A9%E6%BA%83%23) `206.5K 🔥` `NEW`
1. [洛阳一宝妈抱婴儿躺马路中间](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E9%98%B3%E4%B8%80%E5%AE%9D%E5%A6%88%E6%8A%B1%E5%A9%B4%E5%84%BF%E8%BA%BA%E9%A9%AC%E8%B7%AF%E4%B8%AD%E9%97%B4%23) `206.3K 🔥` `NEW`
1. [起飞后男子欲拉应急舱门被拦](https://s.weibo.com/weibo?q=%23%E8%B5%B7%E9%A3%9E%E5%90%8E%E7%94%B7%E5%AD%90%E6%AC%B2%E6%8B%89%E5%BA%94%E6%80%A5%E8%88%B1%E9%97%A8%E8%A2%AB%E6%8B%A6%23) `206.2K 🔥` `NEW`
1. [金高银 淡极生艳](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%AB%98%E9%93%B6%20%E6%B7%A1%E6%9E%81%E7%94%9F%E8%89%B3%23) `205.9K 🔥` `NEW`
1. [难怪有菀菀之姿 原来是菀菀之子](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E6%9C%89%E8%8F%80%E8%8F%80%E4%B9%8B%E5%A7%BF%20%E5%8E%9F%E6%9D%A5%E6%98%AF%E8%8F%80%E8%8F%80%E4%B9%8B%E5%AD%90%23) `205.6K 🔥` `NEW`
1. [和前任的拍立得怎么处理](https://s.weibo.com/weibo?q=%23%E5%92%8C%E5%89%8D%E4%BB%BB%E7%9A%84%E6%8B%8D%E7%AB%8B%E5%BE%97%E6%80%8E%E4%B9%88%E5%A4%84%E7%90%86%23) `205.6K 🔥` `NEW`
1. [张真源帮丁程鑫说句公道话](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E5%B8%AE%E4%B8%81%E7%A8%8B%E9%91%AB%E8%AF%B4%E5%8F%A5%E5%85%AC%E9%81%93%E8%AF%9D%23) `201.8K 🔥` `NEW`
1. [张凌赫知道和王玉雯是兄妹的反应 (Zhang Linghe’s reaction when he found out that he and Wang Yuwen were siblings)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9F%A5%E9%81%93%E5%92%8C%E7%8E%8B%E7%8E%89%E9%9B%AF%E6%98%AF%E5%85%84%E5%A6%B9%E7%9A%84%E5%8F%8D%E5%BA%94%23) `200.6K 🔥` `NEW`
1. [鞠婧祎被工作人员搂走了](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E8%A2%AB%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E6%90%82%E8%B5%B0%E4%BA%86%23) `197.1K 🔥` `NEW`
1. [浪姐X秀张月孙怡合唱指纹](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90X%E7%A7%80%E5%BC%A0%E6%9C%88%E5%AD%99%E6%80%A1%E5%90%88%E5%94%B1%E6%8C%87%E7%BA%B9%23) `178.2K 🔥` `NEW`
1. [问界M9发布会](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8CM9%E5%8F%91%E5%B8%83%E4%BC%9A%23) `147.1K 🔥` `NEW`
1. [LBK 朋友圈](https://s.weibo.com/weibo?q=%23LBK%20%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `146.7K 🔥` `NEW`
1. [户口以后没那么重要了](https://s.weibo.com/weibo?q=%23%E6%88%B7%E5%8F%A3%E4%BB%A5%E5%90%8E%E6%B2%A1%E9%82%A3%E4%B9%88%E9%87%8D%E8%A6%81%E4%BA%86%23) `1.2M 🔥` `+317%`
1. [外卖订书钉什么时候可以灭绝](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%8D%96%E8%AE%A2%E4%B9%A6%E9%92%89%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E5%8F%AF%E4%BB%A5%E7%81%AD%E7%BB%9D%23) `281.6K 🔥` `-64%`
1. [沈月曾自曝和王鹤棣打得飞起 (Shen Yue once revealed that she had a good fight with Wang Hedi)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E6%9B%BE%E8%87%AA%E6%9B%9D%E5%92%8C%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%89%93%E5%BE%97%E9%A3%9E%E8%B5%B7%23) `240.0K 🔥` `-57%`
1. [武契奇夫人在上海买买买](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E5%A5%91%E5%A5%87%E5%A4%AB%E4%BA%BA%E5%9C%A8%E4%B8%8A%E6%B5%B7%E4%B9%B0%E4%B9%B0%E4%B9%B0%23) `207.8K 🔥` `-53%`
1. [隐形旅游成本](https://s.weibo.com/weibo?q=%23%E9%9A%90%E5%BD%A2%E6%97%85%E6%B8%B8%E6%88%90%E6%9C%AC%23) `197.8K 🔥` `-54%`

Updated at 2026-05-27 18:34:33

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
