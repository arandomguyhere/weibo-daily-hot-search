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

1. [关于左撇子的6个误区 (6 myths about left-handers)](https://s.weibo.com/weibo?q=%23%E5%85%B3%E4%BA%8E%E5%B7%A6%E6%92%87%E5%AD%90%E7%9A%846%E4%B8%AA%E8%AF%AF%E5%8C%BA%23) `588.2K 🔥` `NEW`
1. [AG 射辅](https://s.weibo.com/weibo?q=%23AG%20%E5%B0%84%E8%BE%85%23) `490.5K 🔥` `NEW`
1. [王橹杰四芒星耳钉](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%9B%9B%E8%8A%92%E6%98%9F%E8%80%B3%E9%92%89%23) `374.2K 🔥` `NEW`
1. [王安宇走路脖子前倾](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E8%B5%B0%E8%B7%AF%E8%84%96%E5%AD%90%E5%89%8D%E5%80%BE%23) `369.7K 🔥` `NEW`
1. [赵一鸣别把实惠便利做成算计](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%80%E9%B8%A3%E5%88%AB%E6%8A%8A%E5%AE%9E%E6%83%A0%E4%BE%BF%E5%88%A9%E5%81%9A%E6%88%90%E7%AE%97%E8%AE%A1%23) `365.9K 🔥` `NEW`
1. [华为即将推出五大新机](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%8D%B3%E5%B0%86%E6%8E%A8%E5%87%BA%E4%BA%94%E5%A4%A7%E6%96%B0%E6%9C%BA%23) `361.4K 🔥` `NEW`
1. [张桂源脖子上是Gui](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%A1%82%E6%BA%90%E8%84%96%E5%AD%90%E4%B8%8A%E6%98%AFGui%23) `351.6K 🔥` `NEW`
1. [五公](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%85%AC%23) `349.3K 🔥` `NEW`
1. [TES零封AG](https://s.weibo.com/weibo?q=%23TES%E9%9B%B6%E5%B0%81AG%23) `346.9K 🔥` `NEW`
1. [女子虐待亲生女儿致死后患重度抑郁](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%99%90%E5%BE%85%E4%BA%B2%E7%94%9F%E5%A5%B3%E5%84%BF%E8%87%B4%E6%AD%BB%E5%90%8E%E6%82%A3%E9%87%8D%E5%BA%A6%E6%8A%91%E9%83%81%23) `337.3K 🔥` `NEW`
1. [stew Jieni7](https://s.weibo.com/weibo?q=%23stew%20Jieni7%23) `242.8K 🔥` `NEW`
1. [AI已经实现了8小时工作制](https://s.weibo.com/weibo?q=%23AI%E5%B7%B2%E7%BB%8F%E5%AE%9E%E7%8E%B0%E4%BA%868%E5%B0%8F%E6%97%B6%E5%B7%A5%E4%BD%9C%E5%88%B6%23) `225.5K 🔥` `NEW`
1. [巴旦木公主疑似怀孕了](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%97%A6%E6%9C%A8%E5%85%AC%E4%B8%BB%E7%96%91%E4%BC%BC%E6%80%80%E5%AD%95%E4%BA%86%23) `224.9K 🔥` `NEW`
1. [亏50万股民借钱缴款中签宇树](https://s.weibo.com/weibo?q=%23%E4%BA%8F50%E4%B8%87%E8%82%A1%E6%B0%91%E5%80%9F%E9%92%B1%E7%BC%B4%E6%AC%BE%E4%B8%AD%E7%AD%BE%E5%AE%87%E6%A0%91%23) `213.8K 🔥` `NEW`
1. [杨洋把眼镜焊在脸上](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E6%8A%8A%E7%9C%BC%E9%95%9C%E7%84%8A%E5%9C%A8%E8%84%B8%E4%B8%8A%23) `210.2K 🔥` `NEW`
1. [小米澎湃OS4发布](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E6%B9%83OS4%E5%8F%91%E5%B8%83%23) `852.3K 🔥` `+45%`
1. [茉莉奶白伦敦门店被砸](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E4%BC%A6%E6%95%A6%E9%97%A8%E5%BA%97%E8%A2%AB%E7%A0%B8%23) `821.7K 🔥` `+75%`
1. [曝stew加入EDG](https://s.weibo.com/weibo?q=%23%E6%9B%9Dstew%E5%8A%A0%E5%85%A5EDG%23) `414.2K 🔥` `+34%`
1. [五公直播](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%85%AC%E7%9B%B4%E6%92%AD%23) `386.1K 🔥` `+54%`
1. [朱镕基同志逝世 (Comrade Zhu Rongji passed away)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E9%80%9D%E4%B8%96%23) `1.0M 🔥`
1. [地下试管婴儿](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E4%B8%8B%E8%AF%95%E7%AE%A1%E5%A9%B4%E5%84%BF%23) `943.0K 🔥`
1. [今年以来我国生态环境质量持续向好 (Since the beginning of this year, the quality of my country’s ecological environment has continued to improve.)](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E4%BB%A5%E6%9D%A5%E6%88%91%E5%9B%BD%E7%94%9F%E6%80%81%E7%8E%AF%E5%A2%83%E8%B4%A8%E9%87%8F%E6%8C%81%E7%BB%AD%E5%90%91%E5%A5%BD%23) `877.2K 🔥`
1. [长鑫科技 中国市值最大上市公司 (Changxin Technology China’s largest listed company by market capitalization)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%20%E4%B8%AD%E5%9B%BD%E5%B8%82%E5%80%BC%E6%9C%80%E5%A4%A7%E4%B8%8A%E5%B8%82%E5%85%AC%E5%8F%B8%23) `610.4K 🔥`
1. [罗氏虾自助吃12只回本太爽了](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%B0%8F%E8%99%BE%E8%87%AA%E5%8A%A9%E5%90%8312%E5%8F%AA%E5%9B%9E%E6%9C%AC%E5%A4%AA%E7%88%BD%E4%BA%86%23) `391.4K 🔥`
1. [郭德纲 紫禁城](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%BE%B7%E7%BA%B2%20%E7%B4%AB%E7%A6%81%E5%9F%8E%23) `380.3K 🔥`
1. [A股尾盘突发跳水 发生了什么](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%B0%BE%E7%9B%98%E7%AA%81%E5%8F%91%E8%B7%B3%E6%B0%B4%20%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88%23) `369.7K 🔥`
1. [90后女子爱生闷气乳腺癌去世丈夫痛哭](https://s.weibo.com/weibo?q=%2390%E5%90%8E%E5%A5%B3%E5%AD%90%E7%88%B1%E7%94%9F%E9%97%B7%E6%B0%94%E4%B9%B3%E8%85%BA%E7%99%8C%E5%8E%BB%E4%B8%96%E4%B8%88%E5%A4%AB%E7%97%9B%E5%93%AD%23) `355.3K 🔥`
1. [董卿 抖音评论被造谣](https://s.weibo.com/weibo?q=%23%E8%91%A3%E5%8D%BF%20%E6%8A%96%E9%9F%B3%E8%AF%84%E8%AE%BA%E8%A2%AB%E9%80%A0%E8%B0%A3%23) `345.4K 🔥`
1. [小米阔折叠意外曝光](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E9%98%94%E6%8A%98%E5%8F%A0%E6%84%8F%E5%A4%96%E6%9B%9D%E5%85%89%23) `319.6K 🔥`
1. [五公人气](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%85%AC%E4%BA%BA%E6%B0%94%23) `319.3K 🔥`
1. [您这样装修孙子孙女就愿意来了 (If you decorate like this, your grandchildren will be willing to come.)](https://s.weibo.com/weibo?q=%23%E6%82%A8%E8%BF%99%E6%A0%B7%E8%A3%85%E4%BF%AE%E5%AD%99%E5%AD%90%E5%AD%99%E5%A5%B3%E5%B0%B1%E6%84%BF%E6%84%8F%E6%9D%A5%E4%BA%86%23) `308.8K 🔥`
1. [女子0元购400根炸串退款被拒](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%900%E5%85%83%E8%B4%AD400%E6%A0%B9%E7%82%B8%E4%B8%B2%E9%80%80%E6%AC%BE%E8%A2%AB%E6%8B%92%23) `207.4K 🔥`
1. [怪不得医生有时候会反复套话](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E5%8C%BB%E7%94%9F%E6%9C%89%E6%97%B6%E5%80%99%E4%BC%9A%E5%8F%8D%E5%A4%8D%E5%A5%97%E8%AF%9D%23) `204.6K 🔥`
1. [王水牛 非复旦研究生 (Wang Shuiniu, non-Fudan graduate student)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%B0%B4%E7%89%9B%20%E9%9D%9E%E5%A4%8D%E6%97%A6%E7%A0%94%E7%A9%B6%E7%94%9F%23) `190.9K 🔥`
1. [2小孩超市混掺几十种杂粮被迫下架](https://s.weibo.com/weibo?q=%232%E5%B0%8F%E5%AD%A9%E8%B6%85%E5%B8%82%E6%B7%B7%E6%8E%BA%E5%87%A0%E5%8D%81%E7%A7%8D%E6%9D%82%E7%B2%AE%E8%A2%AB%E8%BF%AB%E4%B8%8B%E6%9E%B6%23) `187.0K 🔥`
1. [生理性喜欢是很可怕的一件事 (Physiological love is a terrible thing)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E7%90%86%E6%80%A7%E5%96%9C%E6%AC%A2%E6%98%AF%E5%BE%88%E5%8F%AF%E6%80%95%E7%9A%84%E4%B8%80%E4%BB%B6%E4%BA%8B%23) `594.7K 🔥` `-21%`
1. [金鹰奖女主提名 (Golden Eagle Award for Leading Actress Nominated)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E5%A5%B3%E4%B8%BB%E6%8F%90%E5%90%8D%23) `584.3K 🔥` `-31%`
1. [网传王水牛艾滋](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E7%8E%8B%E6%B0%B4%E7%89%9B%E8%89%BE%E6%BB%8B%23) `388.3K 🔥` `-25%`
1. [郭麒麟瘦到认不出](https://s.weibo.com/weibo?q=%23%E9%83%AD%E9%BA%92%E9%BA%9F%E7%98%A6%E5%88%B0%E8%AE%A4%E4%B8%8D%E5%87%BA%23) `383.6K 🔥` `-22%`
1. [博主评易烊千玺拿百花奖影帝](https://s.weibo.com/weibo?q=%23%E5%8D%9A%E4%B8%BB%E8%AF%84%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%8B%BF%E7%99%BE%E8%8A%B1%E5%A5%96%E5%BD%B1%E5%B8%9D%23) `366.8K 🔥` `-37%`
1. [马天宇被姜潮搞不会了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%A4%A9%E5%AE%87%E8%A2%AB%E5%A7%9C%E6%BD%AE%E6%90%9E%E4%B8%8D%E4%BC%9A%E4%BA%86%23) `342.1K 🔥` `-24%`
1. [麦迪娜金饰克重超1000克 (Medina’s gold jewelry weighs over 1,000 grams)](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E8%BF%AA%E5%A8%9C%E9%87%91%E9%A5%B0%E5%85%8B%E9%87%8D%E8%B6%851000%E5%85%8B%23) `332.4K 🔥` `-21%`
1. [王楚钦从小男孩到王队](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%BB%8E%E5%B0%8F%E7%94%B7%E5%AD%A9%E5%88%B0%E7%8E%8B%E9%98%9F%23) `321.5K 🔥` `-28%`
1. [俩孩子将超市内几十种杂粮混掺](https://s.weibo.com/weibo?q=%23%E4%BF%A9%E5%AD%A9%E5%AD%90%E5%B0%86%E8%B6%85%E5%B8%82%E5%86%85%E5%87%A0%E5%8D%81%E7%A7%8D%E6%9D%82%E7%B2%AE%E6%B7%B7%E6%8E%BA%23) `275.1K 🔥` `-26%`
1. [gap一年会失去什么](https://s.weibo.com/weibo?q=%23gap%E4%B8%80%E5%B9%B4%E4%BC%9A%E5%A4%B1%E5%8E%BB%E4%BB%80%E4%B9%88%23) `273.1K 🔥` `-52%`
1. [岳雨婷又喊话沈腾了](https://s.weibo.com/weibo?q=%23%E5%B2%B3%E9%9B%A8%E5%A9%B7%E5%8F%88%E5%96%8A%E8%AF%9D%E6%B2%88%E8%85%BE%E4%BA%86%23) `246.9K 🔥` `-27%`
1. [高市早苗强烈抗议普京登岛 (Takaichi Sanae strongly protests against Putin’s landing on the island)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E5%BC%BA%E7%83%88%E6%8A%97%E8%AE%AE%E6%99%AE%E4%BA%AC%E7%99%BB%E5%B2%9B%23) `235.4K 🔥` `-30%`
1. [关注女干部外貌比关注救灾更重要吗 (Is it more important to pay attention to the appearance of female cadres than to pay attention to disaster relief?)](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%B3%A8%E5%A5%B3%E5%B9%B2%E9%83%A8%E5%A4%96%E8%B2%8C%E6%AF%94%E5%85%B3%E6%B3%A8%E6%95%91%E7%81%BE%E6%9B%B4%E9%87%8D%E8%A6%81%E5%90%97%23) `233.8K 🔥` `-28%`
1. [宁艺卓 我是回到国内](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93%20%E6%88%91%E6%98%AF%E5%9B%9E%E5%88%B0%E5%9B%BD%E5%86%85%23) `223.8K 🔥` `-32%`
1. [王俊凯二开](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%BA%8C%E5%BC%80%23) `177.9K 🔥` `-51%`
1. [金鹰奖男主提名](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E7%94%B7%E4%B8%BB%E6%8F%90%E5%90%8D%23) `174.7K 🔥` `-68%`

Updated at 2026-08-13 19:27:57

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
