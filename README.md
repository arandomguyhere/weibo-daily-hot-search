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

1. [金鹰奖女主提名 (Golden Eagle Award for Leading Actress Nominated)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E5%A5%B3%E4%B8%BB%E6%8F%90%E5%90%8D%23) `1.3M 🔥` `NEW`
1. [今年以来我国生态环境质量持续向好](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E4%BB%A5%E6%9D%A5%E6%88%91%E5%9B%BD%E7%94%9F%E6%80%81%E7%8E%AF%E5%A2%83%E8%B4%A8%E9%87%8F%E6%8C%81%E7%BB%AD%E5%90%91%E5%A5%BD%23) `1.3M 🔥` `NEW`
1. [花48万买事业编](https://s.weibo.com/weibo?q=%23%E8%8A%B148%E4%B8%87%E4%B9%B0%E4%BA%8B%E4%B8%9A%E7%BC%96%23) `1.2M 🔥` `NEW`
1. [马天宇被姜潮搞不会了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E8%A2%AB%E5%A7%9C%E6%BD%AE%E6%90%9E%E4%B8%8D%E4%BC%9A%E4%BA%86%23) `566.5K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `552.8K 🔥` `NEW`
1. [五公伴手礼](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%85%AC%E4%BC%B4%E6%89%8B%E7%A4%BC%23) `492.6K 🔥` `NEW`
1. [李飞 使唤人](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%A3%9E%20%E4%BD%BF%E5%94%A4%E4%BA%BA%23) `452.6K 🔥` `NEW`
1. [官方调查郭德纲演出改编红歌](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E8%B0%83%E6%9F%A5%E9%83%AD%E5%BE%B7%E7%BA%B2%E6%BC%94%E5%87%BA%E6%94%B9%E7%BC%96%E7%BA%A2%E6%AD%8C%23) `320.2K 🔥` `NEW`
1. [董卿 抖音评论被造谣](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%8D%BF%20%E6%8A%96%E9%9F%B3%E8%AF%84%E8%AE%BA%E8%A2%AB%E9%80%A0%E8%B0%A3%23) `311.6K 🔥` `NEW`
1. [男子帮朋友装空调不慎12楼坠亡](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%B8%AE%E6%9C%8B%E5%8F%8B%E8%A3%85%E7%A9%BA%E8%B0%83%E4%B8%8D%E6%85%8E12%E6%A5%BC%E5%9D%A0%E4%BA%A1%23) `298.4K 🔥` `NEW`
1. [曝金鹰奖最佳女主提名有白鹿 (It is revealed that Bai Lu is nominated for the Golden Eagle Award for Best Actress)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%E6%8F%90%E5%90%8D%E6%9C%89%E7%99%BD%E9%B9%BF%23) `272.4K 🔥` `NEW`
1. [民警谎称可轻判向嫌犯家属要300万](https://s.weibo.com/weibo?q=%23%E6%B0%91%E8%AD%A6%E8%B0%8E%E7%A7%B0%E5%8F%AF%E8%BD%BB%E5%88%A4%E5%90%91%E5%AB%8C%E7%8A%AF%E5%AE%B6%E5%B1%9E%E8%A6%81300%E4%B8%87%23) `255.7K 🔥` `NEW`
1. [Lisa金九封面](https://s.weibo.com/weibo?q=%23Lisa%E9%87%91%E4%B9%9D%E5%B0%81%E9%9D%A2%23) `251.2K 🔥` `NEW`
1. [极简装修已经进化成这样了吗](https://s.weibo.com/weibo?q=%23%E6%9E%81%E7%AE%80%E8%A3%85%E4%BF%AE%E5%B7%B2%E7%BB%8F%E8%BF%9B%E5%8C%96%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%E5%90%97%23) `186.4K 🔥` `NEW`
1. [KSG被指冷处理流浪手伤](https://s.weibo.com/weibo?q=%23KSG%E8%A2%AB%E6%8C%87%E5%86%B7%E5%A4%84%E7%90%86%E6%B5%81%E6%B5%AA%E6%89%8B%E4%BC%A4%23) `182.2K 🔥` `NEW`
1. [夏季赛成都AG超玩会首发名单](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E5%AD%A3%E8%B5%9B%E6%88%90%E9%83%BDAG%E8%B6%85%E7%8E%A9%E4%BC%9A%E9%A6%96%E5%8F%91%E5%90%8D%E5%8D%95%23) `169.5K 🔥` `NEW`
1. [网传英伟达欲投资中际旭创新易盛](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%AC%B2%E6%8A%95%E8%B5%84%E4%B8%AD%E9%99%85%E6%97%AD%E5%88%9B%E6%96%B0%E6%98%93%E7%9B%9B%23) `160.9K 🔥` `NEW`
1. [处罚因台风迟到请假员工公司回应](https://s.weibo.com/weibo?q=%23%E5%A4%84%E7%BD%9A%E5%9B%A0%E5%8F%B0%E9%A3%8E%E8%BF%9F%E5%88%B0%E8%AF%B7%E5%81%87%E5%91%98%E5%B7%A5%E5%85%AC%E5%8F%B8%E5%9B%9E%E5%BA%94%23) `160.0K 🔥` `NEW`
1. [五公 错票](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%85%AC%20%E9%94%99%E7%A5%A8%23) `157.9K 🔥` `NEW`
1. [李家超深夜发文悼念朱镕基](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%B6%E8%B6%85%E6%B7%B1%E5%A4%9C%E5%8F%91%E6%96%87%E6%82%BC%E5%BF%B5%E6%9C%B1%E9%95%95%E5%9F%BA%23) `154.8K 🔥` `NEW`
1. [雷霆四少仅杜兰特未回应威少退役 (Of the Thunder's four young players, only Durant did not respond to Westbrook's retirement)](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E9%9C%86%E5%9B%9B%E5%B0%91%E4%BB%85%E6%9D%9C%E5%85%B0%E7%89%B9%E6%9C%AA%E5%9B%9E%E5%BA%94%E5%A8%81%E5%B0%91%E9%80%80%E5%BD%B9%23) `148.1K 🔥` `NEW`
1. [鞠婧祎版苏绿夏vs岳雨婷版苏绿夏](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E7%89%88%E8%8B%8F%E7%BB%BF%E5%A4%8Fvs%E5%B2%B3%E9%9B%A8%E5%A9%B7%E7%89%88%E8%8B%8F%E7%BB%BF%E5%A4%8F%23) `147.9K 🔥` `NEW`
1. [大冰说赚得越少越累](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E8%AF%B4%E8%B5%9A%E5%BE%97%E8%B6%8A%E5%B0%91%E8%B6%8A%E7%B4%AF%23) `147.6K 🔥` `NEW`
1. [宁艺卓花边黑裙](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%E8%8A%B1%E8%BE%B9%E9%BB%91%E8%A3%99%23) `147.1K 🔥` `NEW`
1. [空调安装哪家强](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E8%B0%83%E5%AE%89%E8%A3%85%E5%93%AA%E5%AE%B6%E5%BC%BA%23) `147.0K 🔥` `NEW`
1. [朱镕基同志逝世 (Comrade Zhu Rongji passed away)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E9%80%9D%E4%B8%96%23) `1.3M 🔥` `+30%`
1. [gap一年会失去什么](https://s.weibo.com/weibo?q=%23gap%E4%B8%80%E5%B9%B4%E4%BC%9A%E5%A4%B1%E5%8E%BB%E4%BB%80%E4%B9%88%23) `1.2M 🔥` `+178%`
1. [曝白鹿提名金鹰奖最佳女主 (White Deer nominated for Golden Eagle Award for Best Actress)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BD%E9%B9%BF%E6%8F%90%E5%90%8D%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%23) `1.2M 🔥` `+189%`
1. [普京登岛后日本急了](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E7%99%BB%E5%B2%9B%E5%90%8E%E6%97%A5%E6%9C%AC%E6%80%A5%E4%BA%86%23) `695.5K 🔥` `+56%`
1. [花48万买事业编事没办成中间人拒退款](https://s.weibo.com/weibo?q=%23%E8%8A%B148%E4%B8%87%E4%B9%B0%E4%BA%8B%E4%B8%9A%E7%BC%96%E4%BA%8B%E6%B2%A1%E5%8A%9E%E6%88%90%E4%B8%AD%E9%97%B4%E4%BA%BA%E6%8B%92%E9%80%80%E6%AC%BE%23) `285.5K 🔥` `+59%`
1. [生理性喜欢是很可怕的一件事 (Physiological love is a terrible thing)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E7%90%86%E6%80%A7%E5%96%9C%E6%AC%A2%E6%98%AF%E5%BE%88%E5%8F%AF%E6%80%95%E7%9A%84%E4%B8%80%E4%BB%B6%E4%BA%8B%23) `1.2M 🔥`
1. [情侣懒得拍婚纱照交给豆包](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E6%87%92%E5%BE%97%E6%8B%8D%E5%A9%9A%E7%BA%B1%E7%85%A7%E4%BA%A4%E7%BB%99%E8%B1%86%E5%8C%85%23) `849.1K 🔥`
1. [姜潮麦迪娜婚礼的切糕能买乌市一套房](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E6%BD%AE%E9%BA%A6%E8%BF%AA%E5%A8%9C%E5%A9%9A%E7%A4%BC%E7%9A%84%E5%88%87%E7%B3%95%E8%83%BD%E4%B9%B0%E4%B9%8C%E5%B8%82%E4%B8%80%E5%A5%97%E6%88%BF%23) `446.0K 🔥`
1. [小象超市文案部来高人了 (An expert is here from the copywriting department of Little Elephant Supermarket)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%B1%A1%E8%B6%85%E5%B8%82%E6%96%87%E6%A1%88%E9%83%A8%E6%9D%A5%E9%AB%98%E4%BA%BA%E4%BA%86%23) `305.0K 🔥`
1. [具建逸退出XdinaryHeroes](https://s.weibo.com/weibo?q=%23%E5%85%B7%E5%BB%BA%E9%80%B8%E9%80%80%E5%87%BAXdinaryHeroes%23) `184.7K 🔥`
1. [倒在姐姐的怀里感觉很幸福](https://s.weibo.com/weibo?q=%23%E5%80%92%E5%9C%A8%E5%A7%90%E5%A7%90%E7%9A%84%E6%80%80%E9%87%8C%E6%84%9F%E8%A7%89%E5%BE%88%E5%B9%B8%E7%A6%8F%23) `181.4K 🔥`
1. [歌手节目组联系耳帝](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E8%8A%82%E7%9B%AE%E7%BB%84%E8%81%94%E7%B3%BB%E8%80%B3%E5%B8%9D%23) `610.9K 🔥` `-24%`
1. [胖东来 房租翻倍](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%20%E6%88%BF%E7%A7%9F%E7%BF%BB%E5%80%8D%23) `463.2K 🔥` `-33%`
1. [我国生态治理迈向新阶段 (my country's ecological governance enters a new stage)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E7%94%9F%E6%80%81%E6%B2%BB%E7%90%86%E8%BF%88%E5%90%91%E6%96%B0%E9%98%B6%E6%AE%B5%23) `314.4K 🔥` `-69%`
1. [手机壳 偷拍](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E5%A3%B3%20%E5%81%B7%E6%8B%8D%23) `312.4K 🔥` `-63%`
1. [峰哥5000元请邹市明打一场](https://s.weibo.com/weibo?q=%23%E5%B3%B0%E5%93%A55000%E5%85%83%E8%AF%B7%E9%82%B9%E5%B8%82%E6%98%8E%E6%89%93%E4%B8%80%E5%9C%BA%23) `308.3K 🔥` `-21%`
1. [邹市明45岁重返拳击赛场 (Zou Shiming returns to boxing at the age of 45)](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E45%E5%B2%81%E9%87%8D%E8%BF%94%E6%8B%B3%E5%87%BB%E8%B5%9B%E5%9C%BA%23) `303.0K 🔥` `-21%`
1. [重罚台风请假员工公司多年0人参保](https://s.weibo.com/weibo?q=%23%E9%87%8D%E7%BD%9A%E5%8F%B0%E9%A3%8E%E8%AF%B7%E5%81%87%E5%91%98%E5%B7%A5%E5%85%AC%E5%8F%B8%E5%A4%9A%E5%B9%B40%E4%BA%BA%E5%8F%82%E4%BF%9D%23) `261.6K 🔥` `-60%`
1. [为什么结婚少了离婚多了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%BB%93%E5%A9%9A%E5%B0%91%E4%BA%86%E7%A6%BB%E5%A9%9A%E5%A4%9A%E4%BA%86%23) `231.1K 🔥` `-25%`
1. [孙彩瑛发布手写信离开JYP](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%BD%A9%E7%91%9B%E5%8F%91%E5%B8%83%E6%89%8B%E5%86%99%E4%BF%A1%E7%A6%BB%E5%BC%80JYP%23) `215.6K 🔥` `-43%`
1. [霍仙姑就是隔世老祖 (Huo Xiangu is the ancestor from another generation)](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E4%BB%99%E5%A7%91%E5%B0%B1%E6%98%AF%E9%9A%94%E4%B8%96%E8%80%81%E7%A5%96%23) `191.3K 🔥` `-70%`
1. [郭德纲 改编红歌](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%BE%B7%E7%BA%B2%20%E6%94%B9%E7%BC%96%E7%BA%A2%E6%AD%8C%23) `159.8K 🔥` `-48%`
1. [45岁邹市明重返拳击赛靠什么赚钱](https://s.weibo.com/weibo?q=%2345%E5%B2%81%E9%82%B9%E5%B8%82%E6%98%8E%E9%87%8D%E8%BF%94%E6%8B%B3%E5%87%BB%E8%B5%9B%E9%9D%A0%E4%BB%80%E4%B9%88%E8%B5%9A%E9%92%B1%23) `154.3K 🔥` `-29%`
1. [婚外胚胎案再添新诉讼](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E6%A1%88%E5%86%8D%E6%B7%BB%E6%96%B0%E8%AF%89%E8%AE%BC%23) `147.6K 🔥` `-73%`

Updated at 2026-08-13 16:07:30

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
