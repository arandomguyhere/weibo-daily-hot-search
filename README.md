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

1. [Rookie道歉 (Rookie apologizes)](https://s.weibo.com/weibo?q=%23Rookie%E9%81%93%E6%AD%89%23) `12.9M 🔥` `NEW`
1. [杀害女同学14岁男生听到判决面无表情](https://s.weibo.com/weibo?q=%23%E6%9D%80%E5%AE%B3%E5%A5%B3%E5%90%8C%E5%AD%A614%E5%B2%81%E7%94%B7%E7%94%9F%E5%90%AC%E5%88%B0%E5%88%A4%E5%86%B3%E9%9D%A2%E6%97%A0%E8%A1%A8%E6%83%85%23) `1.1M 🔥` `NEW`
1. [五一文旅消费红包雨来了](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E6%96%87%E6%97%85%E6%B6%88%E8%B4%B9%E7%BA%A2%E5%8C%85%E9%9B%A8%E6%9D%A5%E4%BA%86%23) `641.2K 🔥` `NEW`
1. [爱情没有神话开播](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E6%B2%A1%E6%9C%89%E7%A5%9E%E8%AF%9D%E5%BC%80%E6%92%AD%23) `537.8K 🔥` `NEW`
1. [阿联酋退出石油输出国组织](https://s.weibo.com/weibo?q=%23%E9%98%BF%E8%81%94%E9%85%8B%E9%80%80%E5%87%BA%E7%9F%B3%E6%B2%B9%E8%BE%93%E5%87%BA%E5%9B%BD%E7%BB%84%E7%BB%87%23) `517.6K 🔥` `NEW`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `509.0K 🔥` `NEW`
1. [小钰回应谣言](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%92%B0%E5%9B%9E%E5%BA%94%E8%B0%A3%E8%A8%80%23) `502.0K 🔥` `NEW`
1. [任敏被粉丝催着减肥](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%95%8F%E8%A2%AB%E7%B2%89%E4%B8%9D%E5%82%AC%E7%9D%80%E5%87%8F%E8%82%A5%23) `500.0K 🔥` `NEW`
1. [孙颖莎 红包](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%20%E7%BA%A2%E5%8C%85%23) `492.8K 🔥` `NEW`
1. [订婚强奸案男子将出狱](https://s.weibo.com/weibo?q=%23%E8%AE%A2%E5%A9%9A%E5%BC%BA%E5%A5%B8%E6%A1%88%E7%94%B7%E5%AD%90%E5%B0%86%E5%87%BA%E7%8B%B1%23) `490.7K 🔥` `NEW`
1. [朱珠钟汉良床戏 (Zhu Zhuzhong Hanliang bed scene)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E7%8F%A0%E9%92%9F%E6%B1%89%E8%89%AF%E5%BA%8A%E6%88%8F%23) `475.4K 🔥` `NEW`
1. [任敏回应胖了](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E6%95%8F%E5%9B%9E%E5%BA%94%E8%83%96%E4%BA%86%23) `469.3K 🔥` `NEW`
1. [阿联酋](https://s.weibo.com/weibo?q=%23%E9%98%BF%E8%81%94%E9%85%8B%23) `468.8K 🔥` `NEW`
1. [迪奥副总裁亲自迎接迪丽热巴](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E5%A5%A5%E5%89%AF%E6%80%BB%E8%A3%81%E4%BA%B2%E8%87%AA%E8%BF%8E%E6%8E%A5%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23) `467.3K 🔥` `NEW`
1. [独居以后我的冰箱](https://s.weibo.com/weibo?q=%23%E7%8B%AC%E5%B1%85%E4%BB%A5%E5%90%8E%E6%88%91%E7%9A%84%E5%86%B0%E7%AE%B1%23) `464.7K 🔥` `NEW`
1. [张桂源 吉隆坡](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%A1%82%E6%BA%90%20%E5%90%89%E9%9A%86%E5%9D%A1%23) `464.2K 🔥` `NEW`
1. [小钰 体面](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%92%B0%20%E4%BD%93%E9%9D%A2%23) `324.6K 🔥` `NEW`
1. [5年多网红查补税款30多亿元](https://s.weibo.com/weibo?q=%235%E5%B9%B4%E5%A4%9A%E7%BD%91%E7%BA%A2%E6%9F%A5%E8%A1%A5%E7%A8%8E%E6%AC%BE30%E5%A4%9A%E4%BA%BF%E5%85%83%23) `310.5K 🔥` `NEW`
1. [初中生淘到3本毒气战资料初鉴为真](https://s.weibo.com/weibo?q=%23%E5%88%9D%E4%B8%AD%E7%94%9F%E6%B7%98%E5%88%B03%E6%9C%AC%E6%AF%92%E6%B0%94%E6%88%98%E8%B5%84%E6%96%99%E5%88%9D%E9%89%B4%E4%B8%BA%E7%9C%9F%23) `310.0K 🔥` `NEW`
1. [变形计农村主人公丽姐港大研学](https://s.weibo.com/weibo?q=%23%E5%8F%98%E5%BD%A2%E8%AE%A1%E5%86%9C%E6%9D%91%E4%B8%BB%E4%BA%BA%E5%85%AC%E4%B8%BD%E5%A7%90%E6%B8%AF%E5%A4%A7%E7%A0%94%E5%AD%A6%23) `309.9K 🔥` `NEW`
1. [赵丽颖同款提拉米苏 (Zhao Liying's same style tiramisu)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%90%8C%E6%AC%BE%E6%8F%90%E6%8B%89%E7%B1%B3%E8%8B%8F%23) `292.3K 🔥` `NEW`
1. [福建闽清多名学生池塘溺亡](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E9%97%BD%E6%B8%85%E5%A4%9A%E5%90%8D%E5%AD%A6%E7%94%9F%E6%B1%A0%E5%A1%98%E6%BA%BA%E4%BA%A1%23) `256.8K 🔥` `NEW`
1. [35岁被AI替岗遭公司解雇获赔2N](https://s.weibo.com/weibo?q=%2335%E5%B2%81%E8%A2%ABAI%E6%9B%BF%E5%B2%97%E9%81%AD%E5%85%AC%E5%8F%B8%E8%A7%A3%E9%9B%87%E8%8E%B7%E8%B5%942N%23) `252.8K 🔥` `NEW`
1. [黄金被扣30年当事人家属发声](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%A2%AB%E6%89%A330%E5%B9%B4%E5%BD%93%E4%BA%8B%E4%BA%BA%E5%AE%B6%E5%B1%9E%E5%8F%91%E5%A3%B0%23) `239.5K 🔥` `NEW`
1. [副校长在工作群发亲密信息后撤回](https://s.weibo.com/weibo?q=%23%E5%89%AF%E6%A0%A1%E9%95%BF%E5%9C%A8%E5%B7%A5%E4%BD%9C%E7%BE%A4%E5%8F%91%E4%BA%B2%E5%AF%86%E4%BF%A1%E6%81%AF%E5%90%8E%E6%92%A4%E5%9B%9E%23) `234.9K 🔥` `NEW`
1. [刘宇宁直播](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E7%9B%B4%E6%92%AD%23) `230.2K 🔥` `NEW`
1. [黄金跌透了吗](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%B7%8C%E9%80%8F%E4%BA%86%E5%90%97%23) `205.2K 🔥` `NEW`
1. [男子5天连做5台手术惊呆医师](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%905%E5%A4%A9%E8%BF%9E%E5%81%9A5%E5%8F%B0%E6%89%8B%E6%9C%AF%E6%83%8A%E5%91%86%E5%8C%BB%E5%B8%88%23) `191.8K 🔥` `NEW`
1. [才知道潜伏这个结尾是姚晨争取后重拍的](https://s.weibo.com/weibo?q=%23%E6%89%8D%E7%9F%A5%E9%81%93%E6%BD%9C%E4%BC%8F%E8%BF%99%E4%B8%AA%E7%BB%93%E5%B0%BE%E6%98%AF%E5%A7%9A%E6%99%A8%E4%BA%89%E5%8F%96%E5%90%8E%E9%87%8D%E6%8B%8D%E7%9A%84%23) `186.1K 🔥` `NEW`
1. [范丞丞陈立农牵手演戏](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E9%99%88%E7%AB%8B%E5%86%9C%E7%89%B5%E6%89%8B%E6%BC%94%E6%88%8F%23) `185.4K 🔥` `NEW`
1. [单亲爸爸因长相血型查出儿子非亲生 (Single father discovers his son is not biological due to appearance and blood type)](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BA%B2%E7%88%B8%E7%88%B8%E5%9B%A0%E9%95%BF%E7%9B%B8%E8%A1%80%E5%9E%8B%E6%9F%A5%E5%87%BA%E5%84%BF%E5%AD%90%E9%9D%9E%E4%BA%B2%E7%94%9F%23) `174.1K 🔥` `NEW`
1. [印度男挖出亡姐遗骸扛到银行取款](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%94%B7%E6%8C%96%E5%87%BA%E4%BA%A1%E5%A7%90%E9%81%97%E9%AA%B8%E6%89%9B%E5%88%B0%E9%93%B6%E8%A1%8C%E5%8F%96%E6%AC%BE%23) `170.2K 🔥` `NEW`
1. [情绪压力对一个人体态的影响](https://s.weibo.com/weibo?q=%23%E6%83%85%E7%BB%AA%E5%8E%8B%E5%8A%9B%E5%AF%B9%E4%B8%80%E4%B8%AA%E4%BA%BA%E4%BD%93%E6%80%81%E7%9A%84%E5%BD%B1%E5%93%8D%23) `154.5K 🔥` `NEW`
1. [佳偶天成 念无双](https://s.weibo.com/weibo?q=%23%E4%BD%B3%E5%81%B6%E5%A4%A9%E6%88%90%20%E5%BF%B5%E6%97%A0%E5%8F%8C%23) `530.9K 🔥` `+53%`
1. [ILLIT新歌在外网引发热议](https://s.weibo.com/weibo?q=%23ILLIT%E6%96%B0%E6%AD%8C%E5%9C%A8%E5%A4%96%E7%BD%91%E5%BC%95%E5%8F%91%E7%83%AD%E8%AE%AE%23) `523.5K 🔥` `+93%`
1. [韩汶栩 ZXY雨](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%B1%B6%E6%A0%A9%20ZXY%E9%9B%A8%23) `470.6K 🔥` `+75%`
1. [韩汶栩 在红树林吹号的鹦鹉鱼](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%B1%B6%E6%A0%A9%20%E5%9C%A8%E7%BA%A2%E6%A0%91%E6%9E%97%E5%90%B9%E5%8F%B7%E7%9A%84%E9%B9%A6%E9%B9%89%E9%B1%BC%23) `418.0K 🔥` `+56%`
1. [建议亲人去世一两个月后主动查负债 (It is recommended that you proactively check your debts one or two months after the death of a loved one.)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%BA%B2%E4%BA%BA%E5%8E%BB%E4%B8%96%E4%B8%80%E4%B8%A4%E4%B8%AA%E6%9C%88%E5%90%8E%E4%B8%BB%E5%8A%A8%E6%9F%A5%E8%B4%9F%E5%80%BA%23) `810.7K 🔥`
1. [逐玉集均8000万](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E9%9B%86%E5%9D%878000%E4%B8%87%23) `476.9K 🔥`
1. [miumiu陷害女明星](https://s.weibo.com/weibo?q=%23miumiu%E9%99%B7%E5%AE%B3%E5%A5%B3%E6%98%8E%E6%98%9F%23) `465.3K 🔥`
1. [小黄油美式 全冰去水](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%BB%84%E6%B2%B9%E7%BE%8E%E5%BC%8F%20%E5%85%A8%E5%86%B0%E5%8E%BB%E6%B0%B4%23) `262.0K 🔥`
1. [一加Ace6至尊版 (OnePlus Ace6 Extreme Edition)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%8A%A0Ace6%E8%87%B3%E5%B0%8A%E7%89%88%23) `583.8K 🔥` `-26%`
1. [断崖式垮脸其实就是水毒](https://s.weibo.com/weibo?q=%23%E6%96%AD%E5%B4%96%E5%BC%8F%E5%9E%AE%E8%84%B8%E5%85%B6%E5%AE%9E%E5%B0%B1%E6%98%AF%E6%B0%B4%E6%AF%92%23) `547.1K 🔥` `-25%`
1. [赵心童vs墨菲](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%BF%83%E7%AB%A5vs%E5%A2%A8%E8%8F%B2%23) `543.2K 🔥` `-30%`
1. [领克900大五座上市限时25.48万起](https://s.weibo.com/weibo?q=%23%E9%A2%86%E5%85%8B900%E5%A4%A7%E4%BA%94%E5%BA%A7%E4%B8%8A%E5%B8%82%E9%99%90%E6%97%B625.48%E4%B8%87%E8%B5%B7%23) `537.3K 🔥` `-22%`
1. [DeepSeek还是最强国产AI吗](https://s.weibo.com/weibo?q=%23DeepSeek%E8%BF%98%E6%98%AF%E6%9C%80%E5%BC%BA%E5%9B%BD%E4%BA%A7AI%E5%90%97%23) `532.1K 🔥` `-30%`
1. [大冰谈人际交往的大忌](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E8%B0%88%E4%BA%BA%E9%99%85%E4%BA%A4%E5%BE%80%E7%9A%84%E5%A4%A7%E5%BF%8C%23) `483.3K 🔥` `-35%`
1. [网红白冰偷逃近千万为何没坐牢](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E7%99%BD%E5%86%B0%E5%81%B7%E9%80%83%E8%BF%91%E5%8D%83%E4%B8%87%E4%B8%BA%E4%BD%95%E6%B2%A1%E5%9D%90%E7%89%A2%23) `471.2K 🔥` `-56%`
1. [王亚飞 迪丽热巴](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BA%9A%E9%A3%9E%20%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%23) `310.0K 🔥` `-27%`
1. [奶龙高考落榜](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E9%BE%99%E9%AB%98%E8%80%83%E8%90%BD%E6%A6%9C%23) `283.8K 🔥` `-57%`
1. [断联42天的8岁伊朗男孩回绍兴上学 (An 8-year-old Iranian boy who was cut off from contact for 42 days returns to Shaoxing to go to school)](https://s.weibo.com/weibo?q=%23%E6%96%AD%E8%81%9442%E5%A4%A9%E7%9A%848%E5%B2%81%E4%BC%8A%E6%9C%97%E7%94%B7%E5%AD%A9%E5%9B%9E%E7%BB%8D%E5%85%B4%E4%B8%8A%E5%AD%A6%23) `162.3K 🔥` `-48%`

Updated at 2026-04-28 21:00:35

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
