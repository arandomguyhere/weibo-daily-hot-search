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

1. [携程被罚51.79亿 (Ctrip was fined 5.179 billion)](https://s.weibo.com/weibo?q=%23%E6%90%BA%E7%A8%8B%E8%A2%AB%E7%BD%9A51.79%E4%BA%BF%23) `11.1M 🔥` `NEW`
1. [责令携程退还强制扣除酒店的1.22亿](https://s.weibo.com/weibo?q=%23%E8%B4%A3%E4%BB%A4%E6%90%BA%E7%A8%8B%E9%80%80%E8%BF%98%E5%BC%BA%E5%88%B6%E6%89%A3%E9%99%A4%E9%85%92%E5%BA%97%E7%9A%841.22%E4%BA%BF%23) `2.2M 🔥` `NEW`
1. [老外被中国避暑游硬控了](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%A4%96%E8%A2%AB%E4%B8%AD%E5%9B%BD%E9%81%BF%E6%9A%91%E6%B8%B8%E7%A1%AC%E6%8E%A7%E4%BA%86%23) `2.0M 🔥` `NEW`
1. [泡面 换水](https://s.weibo.com/weibo?q=%23%E6%B3%A1%E9%9D%A2%20%E6%8D%A2%E6%B0%B4%23) `2.0M 🔥` `NEW`
1. [除了玩手机还有这么多低成本爱好](https://s.weibo.com/weibo?q=%23%E9%99%A4%E4%BA%86%E7%8E%A9%E6%89%8B%E6%9C%BA%E8%BF%98%E6%9C%89%E8%BF%99%E4%B9%88%E5%A4%9A%E4%BD%8E%E6%88%90%E6%9C%AC%E7%88%B1%E5%A5%BD%23) `1.7M 🔥` `NEW`
1. [王楚钦vs张煜东](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6vs%E5%BC%A0%E7%85%9C%E4%B8%9C%23) `978.6K 🔥` `NEW`
1. [八仙产粮接力计划](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%E4%BA%A7%E7%B2%AE%E6%8E%A5%E5%8A%9B%E8%AE%A1%E5%88%92%23) `961.6K 🔥` `NEW`
1. [携程回应被罚51.79亿](https://s.weibo.com/weibo?q=%23%E6%90%BA%E7%A8%8B%E5%9B%9E%E5%BA%94%E8%A2%AB%E7%BD%9A51.79%E4%BA%BF%23) `937.1K 🔥` `NEW`
1. [胡彦斌问这是王源自己写的吗](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%BD%A6%E6%96%8C%E9%97%AE%E8%BF%99%E6%98%AF%E7%8E%8B%E6%BA%90%E8%87%AA%E5%B7%B1%E5%86%99%E7%9A%84%E5%90%97%23) `575.3K 🔥` `NEW`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `569.0K 🔥` `NEW`
1. [郭碧婷说什么叫我给人家生孩子 (What did Guo Biting ask me to give birth to?)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E7%A2%A7%E5%A9%B7%E8%AF%B4%E4%BB%80%E4%B9%88%E5%8F%AB%E6%88%91%E7%BB%99%E4%BA%BA%E5%AE%B6%E7%94%9F%E5%AD%A9%E5%AD%90%23) `294.0K 🔥` `NEW`
1. [国乒 身体透支](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%20%E8%BA%AB%E4%BD%93%E9%80%8F%E6%94%AF%23) `293.2K 🔥` `NEW`
1. [孔雪儿一个人努力好心酸](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E4%B8%80%E4%B8%AA%E4%BA%BA%E5%8A%AA%E5%8A%9B%E5%A5%BD%E5%BF%83%E9%85%B8%23) `288.6K 🔥` `NEW`
1. [佛得角门将再就业](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%E5%86%8D%E5%B0%B1%E4%B8%9A%23) `283.9K 🔥` `NEW`
1. [24岁女孩地包天做手术反成鞋拔子脸](https://s.weibo.com/weibo?q=%2324%E5%B2%81%E5%A5%B3%E5%AD%A9%E5%9C%B0%E5%8C%85%E5%A4%A9%E5%81%9A%E6%89%8B%E6%9C%AF%E5%8F%8D%E6%88%90%E9%9E%8B%E6%8B%94%E5%AD%90%E8%84%B8%23) `281.1K 🔥` `NEW`
1. [白鹿与欢娱解约后首部新剧](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%B8%8E%E6%AC%A2%E5%A8%B1%E8%A7%A3%E7%BA%A6%E5%90%8E%E9%A6%96%E9%83%A8%E6%96%B0%E5%89%A7%23) `280.3K 🔥` `NEW`
1. [特朗普称詹姆斯是种族主义者](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E8%A9%B9%E5%A7%86%E6%96%AF%E6%98%AF%E7%A7%8D%E6%97%8F%E4%B8%BB%E4%B9%89%E8%80%85%23) `278.2K 🔥` `NEW`
1. [小米新机入网](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%96%B0%E6%9C%BA%E5%85%A5%E7%BD%91%23) `276.1K 🔥` `NEW`
1. [普陀山同款螃蟹3个价整懵游客](https://s.weibo.com/weibo?q=%23%E6%99%AE%E9%99%80%E5%B1%B1%E5%90%8C%E6%AC%BE%E8%9E%83%E8%9F%B93%E4%B8%AA%E4%BB%B7%E6%95%B4%E6%87%B5%E6%B8%B8%E5%AE%A2%23) `272.9K 🔥` `NEW`
1. [詹姆斯疯狂降薪4875万](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E7%96%AF%E7%8B%82%E9%99%8D%E8%96%AA4875%E4%B8%87%23) `269.5K 🔥` `NEW`
1. [曝讲真打布洛芬 (Exposed to tell the truth about taking ibuprofen)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%AE%B2%E7%9C%9F%E6%89%93%E5%B8%83%E6%B4%9B%E8%8A%AC%23) `268.5K 🔥` `NEW`
1. [十个勤天力挺团粉](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%B8%AA%E5%8B%A4%E5%A4%A9%E5%8A%9B%E6%8C%BA%E5%9B%A2%E7%B2%89%23) `265.2K 🔥` `NEW`
1. [王冰冰再演短剧](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%86%B0%E5%86%B0%E5%86%8D%E6%BC%94%E7%9F%AD%E5%89%A7%23) `250.2K 🔥` `NEW`
1. [这一秒过火14集尺度](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB14%E9%9B%86%E5%B0%BA%E5%BA%A6%23) `247.2K 🔥` `NEW`
1. [官俊臣 985](https://s.weibo.com/weibo?q=%23%E5%AE%98%E4%BF%8A%E8%87%A3%20985%23) `230.5K 🔥` `NEW`
1. [鹿晗给夜排粉丝发食物](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E7%BB%99%E5%A4%9C%E6%8E%92%E7%B2%89%E4%B8%9D%E5%8F%91%E9%A3%9F%E7%89%A9%23) `220.4K 🔥` `NEW`
1. [携程为何挨了最重的罚](https://s.weibo.com/weibo?q=%23%E6%90%BA%E7%A8%8B%E4%B8%BA%E4%BD%95%E6%8C%A8%E4%BA%86%E6%9C%80%E9%87%8D%E7%9A%84%E7%BD%9A%23) `219.2K 🔥` `NEW`
1. [左奇函给杨博文讲助眠故事](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E5%A5%87%E5%87%BD%E7%BB%99%E6%9D%A8%E5%8D%9A%E6%96%87%E8%AE%B2%E5%8A%A9%E7%9C%A0%E6%95%85%E4%BA%8B%23) `191.7K 🔥` `NEW`
1. [王一博刷新昨天的个人最快圈速](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%88%B7%E6%96%B0%E6%98%A8%E5%A4%A9%E7%9A%84%E4%B8%AA%E4%BA%BA%E6%9C%80%E5%BF%AB%E5%9C%88%E9%80%9F%23) `191.4K 🔥` `NEW`
1. [佛得角门将身价暴涨](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%E8%BA%AB%E4%BB%B7%E6%9A%B4%E6%B6%A8%23) `191.1K 🔥` `NEW`
1. [父亲去世后谢霆锋首度露面 (Nicholas Tse makes his first appearance since his father's death)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E5%8E%BB%E4%B8%96%E5%90%8E%E8%B0%A2%E9%9C%86%E9%94%8B%E9%A6%96%E5%BA%A6%E9%9C%B2%E9%9D%A2%23) `190.7K 🔥` `NEW`
1. [鹭卓直播删了](https://s.weibo.com/weibo?q=%23%E9%B9%AD%E5%8D%93%E7%9B%B4%E6%92%AD%E5%88%A0%E4%BA%86%23) `181.9K 🔥` `NEW`
1. [gap两年相当于休完50年年假](https://s.weibo.com/weibo?q=%23gap%E4%B8%A4%E5%B9%B4%E7%9B%B8%E5%BD%93%E4%BA%8E%E4%BC%91%E5%AE%8C50%E5%B9%B4%E5%B9%B4%E5%81%87%23) `180.5K 🔥` `NEW`
1. [白鹿短发港风女郎](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%9F%AD%E5%8F%91%E6%B8%AF%E9%A3%8E%E5%A5%B3%E9%83%8E%23) `179.7K 🔥` `NEW`
1. [夏天千万不要把食物敞开放](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E5%A4%A9%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E6%8A%8A%E9%A3%9F%E7%89%A9%E6%95%9E%E5%BC%80%E6%94%BE%23) `178.1K 🔥` `NEW`
1. [特朗普宣布新一轮加征关税](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%AE%A3%E5%B8%83%E6%96%B0%E4%B8%80%E8%BD%AE%E5%8A%A0%E5%BE%81%E5%85%B3%E7%A8%8E%23) `176.6K 🔥` `NEW`
1. [台风红霞加强了](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%BA%A2%E9%9C%9E%E5%8A%A0%E5%BC%BA%E4%BA%86%23) `176.6K 🔥` `NEW`
1. [雪崩](https://s.weibo.com/weibo?q=%23%E9%9B%AA%E5%B4%A9%23) `172.2K 🔥` `NEW`
1. [工信部赴广汽埃安小鹏监督检查](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BF%A1%E9%83%A8%E8%B5%B4%E5%B9%BF%E6%B1%BD%E5%9F%83%E5%AE%89%E5%B0%8F%E9%B9%8F%E7%9B%91%E7%9D%A3%E6%A3%80%E6%9F%A5%23) `171.4K 🔥` `NEW`
1. [AI血检提前15年预警心脏病](https://s.weibo.com/weibo?q=%23AI%E8%A1%80%E6%A3%80%E6%8F%90%E5%89%8D15%E5%B9%B4%E9%A2%84%E8%AD%A6%E5%BF%83%E8%84%8F%E7%97%85%23) `170.9K 🔥` `NEW`
1. [心有凌犀选铂智7 (If you have a strong heart, choose Platinum Wisdom 7)](https://s.weibo.com/weibo?q=%23%E5%BF%83%E6%9C%89%E5%87%8C%E7%8A%80%E9%80%89%E9%93%82%E6%99%BA7%23) `2.0M 🔥` `+96%`
1. [印度和日本因高铁闹翻了 (India and Japan fall out over high-speed rail)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%92%8C%E6%97%A5%E6%9C%AC%E5%9B%A0%E9%AB%98%E9%93%81%E9%97%B9%E7%BF%BB%E4%BA%86%23) `247.7K 🔥`
1. [徐若晗爱你再次迎来了伟大的宣发期](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%8B%A5%E6%99%97%E7%88%B1%E4%BD%A0%E5%86%8D%E6%AC%A1%E8%BF%8E%E6%9D%A5%E4%BA%86%E4%BC%9F%E5%A4%A7%E7%9A%84%E5%AE%A3%E5%8F%91%E6%9C%9F%23) `295.5K 🔥` `-72%`
1. [男生中考699分偷偷改志愿读中职](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E4%B8%AD%E8%80%83699%E5%88%86%E5%81%B7%E5%81%B7%E6%94%B9%E5%BF%97%E6%84%BF%E8%AF%BB%E4%B8%AD%E8%81%8C%23) `290.6K 🔥` `-81%`
1. [全宇宙最阴的物件 (The most sinister object in the universe)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%AE%87%E5%AE%99%E6%9C%80%E9%98%B4%E7%9A%84%E7%89%A9%E4%BB%B6%23) `262.9K 🔥` `-26%`
1. [王楚然绊了一下反而出了神图](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E7%BB%8A%E4%BA%86%E4%B8%80%E4%B8%8B%E5%8F%8D%E8%80%8C%E5%87%BA%E4%BA%86%E7%A5%9E%E5%9B%BE%23) `260.7K 🔥` `-23%`
1. [出师表翻译成日语再翻回来 (Translate the apprenticeship list into Japanese and back again)](https://s.weibo.com/weibo?q=%23%E5%87%BA%E5%B8%88%E8%A1%A8%E7%BF%BB%E8%AF%91%E6%88%90%E6%97%A5%E8%AF%AD%E5%86%8D%E7%BF%BB%E5%9B%9E%E6%9D%A5%23) `234.0K 🔥` `-33%`
1. [詹姆斯加盟76人 (James joins 76ers)](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E5%8A%A0%E7%9B%9F76%E4%BA%BA%23) `199.3K 🔥` `-76%`
1. [王虹回应为何没直接读北大数学系](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%99%B9%E5%9B%9E%E5%BA%94%E4%B8%BA%E4%BD%95%E6%B2%A1%E7%9B%B4%E6%8E%A5%E8%AF%BB%E5%8C%97%E5%A4%A7%E6%95%B0%E5%AD%A6%E7%B3%BB%23) `176.7K 🔥` `-84%`
1. [王源雪崩口碑](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E9%9B%AA%E5%B4%A9%E5%8F%A3%E7%A2%91%23) `176.6K 🔥` `-39%`
1. [副教授被举报18年前高考移民](https://s.weibo.com/weibo?q=%23%E5%89%AF%E6%95%99%E6%8E%88%E8%A2%AB%E4%B8%BE%E6%8A%A518%E5%B9%B4%E5%89%8D%E9%AB%98%E8%80%83%E7%A7%BB%E6%B0%91%23) `170.9K 🔥` `-35%`

Updated at 2026-07-25 12:32:00

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
