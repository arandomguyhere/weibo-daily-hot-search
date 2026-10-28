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

1. [西甲主席与中国大使会面](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%94%B2%E4%B8%BB%E5%B8%AD%E4%B8%8E%E4%B8%AD%E5%9B%BD%E5%A4%A7%E4%BD%BF%E4%BC%9A%E9%9D%A2%23) `1.6M 🔥` `NEW`
1. [2027鹅厂片单](https://s.weibo.com/weibo?q=%232027%E9%B9%85%E5%8E%82%E7%89%87%E5%8D%95%23) `942.0K 🔥` `NEW`
1. [男性健康日 硬气向上](https://s.weibo.com/weibo?q=%23%E7%94%B7%E6%80%A7%E5%81%A5%E5%BA%B7%E6%97%A5%20%E7%A1%AC%E6%B0%94%E5%90%91%E4%B8%8A%23) `862.1K 🔥` `NEW`
1. [姆巴佩事件冲击皇马营收](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E4%BA%8B%E4%BB%B6%E5%86%B2%E5%87%BB%E7%9A%87%E9%A9%AC%E8%90%A5%E6%94%B6%23) `853.5K 🔥` `NEW`
1. [尚公主没想到文弱书生亲起来那么猛](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%E6%B2%A1%E6%83%B3%E5%88%B0%E6%96%87%E5%BC%B1%E4%B9%A6%E7%94%9F%E4%BA%B2%E8%B5%B7%E6%9D%A5%E9%82%A3%E4%B9%88%E7%8C%9B%23) `842.5K 🔥` `NEW`
1. [姆巴佩曾刻意运营中国市场社交内容](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%9B%BE%E5%88%BB%E6%84%8F%E8%BF%90%E8%90%A5%E4%B8%AD%E5%9B%BD%E5%B8%82%E5%9C%BA%E7%A4%BE%E4%BA%A4%E5%86%85%E5%AE%B9%23) `838.3K 🔥` `NEW`
1. [家长月均花约3000元住酒店陪读](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E6%9C%88%E5%9D%87%E8%8A%B1%E7%BA%A63000%E5%85%83%E4%BD%8F%E9%85%92%E5%BA%97%E9%99%AA%E8%AF%BB%23) `837.2K 🔥` `NEW`
1. [孙颖莎回应身体不佳3个月](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%9B%9E%E5%BA%94%E8%BA%AB%E4%BD%93%E4%B8%8D%E4%BD%B33%E4%B8%AA%E6%9C%88%23) `827.3K 🔥` `NEW`
1. [爱人离世半年外套里摸到戒指](https://s.weibo.com/weibo?q=%23%E7%88%B1%E4%BA%BA%E7%A6%BB%E4%B8%96%E5%8D%8A%E5%B9%B4%E5%A4%96%E5%A5%97%E9%87%8C%E6%91%B8%E5%88%B0%E6%88%92%E6%8C%87%23) `818.8K 🔥` `NEW`
1. [老人是一天天感知自己更老](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E6%98%AF%E4%B8%80%E5%A4%A9%E5%A4%A9%E6%84%9F%E7%9F%A5%E8%87%AA%E5%B7%B1%E6%9B%B4%E8%80%81%23) `812.0K 🔥` `NEW`
1. [中方强烈要求美国立即停止封锁古巴](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%BC%BA%E7%83%88%E8%A6%81%E6%B1%82%E7%BE%8E%E5%9B%BD%E7%AB%8B%E5%8D%B3%E5%81%9C%E6%AD%A2%E5%B0%81%E9%94%81%E5%8F%A4%E5%B7%B4%23) `802.8K 🔥` `NEW`
1. [人民日报锐评姆巴佩翻车](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E9%94%90%E8%AF%84%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%BF%BB%E8%BD%A6%23) `799.7K 🔥` `NEW`
1. [新加坡将提高退休年龄至65岁](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8A%A0%E5%9D%A1%E5%B0%86%E6%8F%90%E9%AB%98%E9%80%80%E4%BC%91%E5%B9%B4%E9%BE%84%E8%87%B365%E5%B2%81%23) `793.9K 🔥` `NEW`
1. [姆巴佩商业价值缩水](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%95%86%E4%B8%9A%E4%BB%B7%E5%80%BC%E7%BC%A9%E6%B0%B4%23) `790.9K 🔥` `NEW`
1. [浙江宣传批姆巴佩](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E5%AE%A3%E4%BC%A0%E6%89%B9%E5%A7%86%E5%B7%B4%E4%BD%A9%23) `783.9K 🔥` `NEW`
1. [49岁司机被自己拉的一车甘蔗活埋](https://s.weibo.com/weibo?q=%2349%E5%B2%81%E5%8F%B8%E6%9C%BA%E8%A2%AB%E8%87%AA%E5%B7%B1%E6%8B%89%E7%9A%84%E4%B8%80%E8%BD%A6%E7%94%98%E8%94%97%E6%B4%BB%E5%9F%8B%23) `777.0K 🔥` `NEW`
1. [皇马称姆巴佩仅代表个人](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%AC%E7%A7%B0%E5%A7%86%E5%B7%B4%E4%BD%A9%E4%BB%85%E4%BB%A3%E8%A1%A8%E4%B8%AA%E4%BA%BA%23) `770.3K 🔥` `NEW`
1. [法国访谈节目就姆巴佩事件道歉](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E8%AE%BF%E8%B0%88%E8%8A%82%E7%9B%AE%E5%B0%B1%E5%A7%86%E5%B7%B4%E4%BD%A9%E4%BA%8B%E4%BB%B6%E9%81%93%E6%AD%89%23) `759.8K 🔥` `NEW`
1. [谷歌推出最强世界模型Genie4](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E6%AD%8C%E6%8E%A8%E5%87%BA%E6%9C%80%E5%BC%BA%E4%B8%96%E7%95%8C%E6%A8%A1%E5%9E%8BGenie4%23) `753.2K 🔥` `NEW`
1. [龙丹妮接管天娱后解约风波](https://s.weibo.com/weibo?q=%23%E9%BE%99%E4%B8%B9%E5%A6%AE%E6%8E%A5%E7%AE%A1%E5%A4%A9%E5%A8%B1%E5%90%8E%E8%A7%A3%E7%BA%A6%E9%A3%8E%E6%B3%A2%23) `748.1K 🔥` `NEW`
1. [泰剧女主被一耳光扇下雷霆大楼梯](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%89%A7%E5%A5%B3%E4%B8%BB%E8%A2%AB%E4%B8%80%E8%80%B3%E5%85%89%E6%89%87%E4%B8%8B%E9%9B%B7%E9%9C%86%E5%A4%A7%E6%A5%BC%E6%A2%AF%23) `384.8K 🔥` `NEW`
1. [谢霆锋家庭五代遗传的高颜值](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E5%AE%B6%E5%BA%AD%E4%BA%94%E4%BB%A3%E9%81%97%E4%BC%A0%E7%9A%84%E9%AB%98%E9%A2%9C%E5%80%BC%23) `349.4K 🔥` `NEW`
1. [柬埔寨潮汕商会会长称两个肾都在](https://s.weibo.com/weibo?q=%23%E6%9F%AC%E5%9F%94%E5%AF%A8%E6%BD%AE%E6%B1%95%E5%95%86%E4%BC%9A%E4%BC%9A%E9%95%BF%E7%A7%B0%E4%B8%A4%E4%B8%AA%E8%82%BE%E9%83%BD%E5%9C%A8%23) `231.2K 🔥` `NEW`
1. [中新网评姆巴佩事件](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B0%E7%BD%91%E8%AF%84%E5%A7%86%E5%B7%B4%E4%BD%A9%E4%BA%8B%E4%BB%B6%23) `226.2K 🔥` `NEW`
1. [谢晋元遗孀收留八百壮士](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E6%99%8B%E5%85%83%E9%81%97%E5%AD%80%E6%94%B6%E7%95%99%E5%85%AB%E7%99%BE%E5%A3%AE%E5%A3%AB%23) `225.6K 🔥` `NEW`
1. [王俊凯铺垫了这么多原来在这等着](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E9%93%BA%E5%9E%AB%E4%BA%86%E8%BF%99%E4%B9%88%E5%A4%9A%E5%8E%9F%E6%9D%A5%E5%9C%A8%E8%BF%99%E7%AD%89%E7%9D%80%23) `210.1K 🔥` `NEW`
1. [演员孙茜去拉萨祭拜哥哥](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E5%AD%99%E8%8C%9C%E5%8E%BB%E6%8B%89%E8%90%A8%E7%A5%AD%E6%8B%9C%E5%93%A5%E5%93%A5%23) `186.6K 🔥` `NEW`
1. [王楚然真的星味好浓](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%9C%9F%E7%9A%84%E6%98%9F%E5%91%B3%E5%A5%BD%E6%B5%93%23) `179.6K 🔥` `NEW`
1. [田曦薇可以吃胖点了](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%8F%AF%E4%BB%A5%E5%90%83%E8%83%96%E7%82%B9%E4%BA%86%23) `158.9K 🔥` `NEW`
1. [美国女子将手伸出船抚摸大白鲨](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%A5%B3%E5%AD%90%E5%B0%86%E6%89%8B%E4%BC%B8%E5%87%BA%E8%88%B9%E6%8A%9A%E6%91%B8%E5%A4%A7%E7%99%BD%E9%B2%A8%23) `143.7K 🔥` `NEW`
1. [巴西女店员遭性侵夺刀反杀男子](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E5%A5%B3%E5%BA%97%E5%91%98%E9%81%AD%E6%80%A7%E4%BE%B5%E5%A4%BA%E5%88%80%E5%8F%8D%E6%9D%80%E7%94%B7%E5%AD%90%23) `137.6K 🔥` `NEW`
1. [极客湾 评测可信度](https://s.weibo.com/weibo?q=%23%E6%9E%81%E5%AE%A2%E6%B9%BE%20%E8%AF%84%E6%B5%8B%E5%8F%AF%E4%BF%A1%E5%BA%A6%23) `133.2K 🔥` `NEW`
1. [看完后会友期爱上厉娜了](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%AE%8C%E5%90%8E%E4%BC%9A%E5%8F%8B%E6%9C%9F%E7%88%B1%E4%B8%8A%E5%8E%89%E5%A8%9C%E4%BA%86%23) `123.1K 🔥` `NEW`
1. [大唐辟珠记副CP选角](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%94%90%E8%BE%9F%E7%8F%A0%E8%AE%B0%E5%89%AFCP%E9%80%89%E8%A7%92%23) `113.6K 🔥` `NEW`
1. [我国产业结构向新向优向好升级](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E4%BA%A7%E4%B8%9A%E7%BB%93%E6%9E%84%E5%90%91%E6%96%B0%E5%90%91%E4%BC%98%E5%90%91%E5%A5%BD%E5%8D%87%E7%BA%A7%23) `868.1K 🔥` `+86%`
1. [睡前9分钟修复皮质醇](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E5%89%8D9%E5%88%86%E9%92%9F%E4%BF%AE%E5%A4%8D%E7%9A%AE%E8%B4%A8%E9%86%87%23) `831.4K 🔥` `+699%`
1. [北京动物园通报萌兰身体状态](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%8A%A8%E7%89%A9%E5%9B%AD%E9%80%9A%E6%8A%A5%E8%90%8C%E5%85%B0%E8%BA%AB%E4%BD%93%E7%8A%B6%E6%80%81%23) `823.0K 🔥` `+212%`
1. [坠亡幼童父亲说孩子3岁前没记忆](https://s.weibo.com/weibo?q=%23%E5%9D%A0%E4%BA%A1%E5%B9%BC%E7%AB%A5%E7%88%B6%E4%BA%B2%E8%AF%B4%E5%AD%A9%E5%AD%903%E5%B2%81%E5%89%8D%E6%B2%A1%E8%AE%B0%E5%BF%86%23) `787.6K 🔥` `+652%`
1. [你吃的烤肠可能是鸡脖子做的](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%90%83%E7%9A%84%E7%83%A4%E8%82%A0%E5%8F%AF%E8%83%BD%E6%98%AF%E9%B8%A1%E8%84%96%E5%AD%90%E5%81%9A%E7%9A%84%23) `771.5K 🔥` `+494%`
1. [中国新晋女首富身家1270亿](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%96%B0%E6%99%8B%E5%A5%B3%E9%A6%96%E5%AF%8C%E8%BA%AB%E5%AE%B61270%E4%BA%BF%23) `752.4K 🔥` `+121%`
1. [小米员工房只卖给正式员工](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%91%98%E5%B7%A5%E6%88%BF%E5%8F%AA%E5%8D%96%E7%BB%99%E6%AD%A3%E5%BC%8F%E5%91%98%E5%B7%A5%23) `602.1K 🔥` `+474%`
1. [以后度假可以只带丝巾不带衣服了](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%90%8E%E5%BA%A6%E5%81%87%E5%8F%AF%E4%BB%A5%E5%8F%AA%E5%B8%A6%E4%B8%9D%E5%B7%BE%E4%B8%8D%E5%B8%A6%E8%A1%A3%E6%9C%8D%E4%BA%86%23) `457.8K 🔥` `+340%`
1. [李沁张晚意当上皇帝皇后了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B2%81%E5%BC%A0%E6%99%9A%E6%84%8F%E5%BD%93%E4%B8%8A%E7%9A%87%E5%B8%9D%E7%9A%87%E5%90%8E%E4%BA%86%23) `399.8K 🔥` `+283%`
1. [人类一天三顿饭很累](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%B1%BB%E4%B8%80%E5%A4%A9%E4%B8%89%E9%A1%BF%E9%A5%AD%E5%BE%88%E7%B4%AF%23) `331.3K 🔥` `+217%`
1. [看到熊猫烧香病毒感觉年轻了](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%88%B0%E7%86%8A%E7%8C%AB%E7%83%A7%E9%A6%99%E7%97%85%E6%AF%92%E6%84%9F%E8%A7%89%E5%B9%B4%E8%BD%BB%E4%BA%86%23) `202.8K 🔥` `+94%`
1. [长期熬夜工作建议自查血糖](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E7%86%AC%E5%A4%9C%E5%B7%A5%E4%BD%9C%E5%BB%BA%E8%AE%AE%E8%87%AA%E6%9F%A5%E8%A1%80%E7%B3%96%23) `168.0K 🔥` `+61%`
1. [事后道歉救不了姆巴佩](https://s.weibo.com/weibo?q=%23%E4%BA%8B%E5%90%8E%E9%81%93%E6%AD%89%E6%95%91%E4%B8%8D%E4%BA%86%E5%A7%86%E5%B7%B4%E4%BD%A9%23) `807.8K 🔥` `-24%`
1. [小城良方高开颠走](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E9%AB%98%E5%BC%80%E9%A2%A0%E8%B5%B0%23) `324.9K 🔥` `-56%`
1. [婚恋关系唯一重要的是你舒服](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E6%81%8B%E5%85%B3%E7%B3%BB%E5%94%AF%E4%B8%80%E9%87%8D%E8%A6%81%E7%9A%84%E6%98%AF%E4%BD%A0%E8%88%92%E6%9C%8D%23) `195.5K 🔥` `-53%`

Updated at 2026-10-28 10:20:35

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
