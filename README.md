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

1. [生理性喜欢是很可怕的一件事 (Physiological love is a terrible thing)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E7%90%86%E6%80%A7%E5%96%9C%E6%AC%A2%E6%98%AF%E5%BE%88%E5%8F%AF%E6%80%95%E7%9A%84%E4%B8%80%E4%BB%B6%E4%BA%8B%23) `999.2K 🔥` `NEW`
1. [歌手节目组联系耳帝](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E8%8A%82%E7%9B%AE%E7%BB%84%E8%81%94%E7%B3%BB%E8%80%B3%E5%B8%9D%23) `808.0K 🔥` `NEW`
1. [胖东来 房租翻倍](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%20%E6%88%BF%E7%A7%9F%E7%BF%BB%E5%80%8D%23) `696.2K 🔥` `NEW`
1. [霍仙姑就是隔世老祖](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E4%BB%99%E5%A7%91%E5%B0%B1%E6%98%AF%E9%9A%94%E4%B8%96%E8%80%81%E7%A5%96%23) `643.1K 🔥` `NEW`
1. [清华美院教授将红军画成眯眯眼](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8D%8E%E7%BE%8E%E9%99%A2%E6%95%99%E6%8E%88%E5%B0%86%E7%BA%A2%E5%86%9B%E7%94%BB%E6%88%90%E7%9C%AF%E7%9C%AF%E7%9C%BC%23) `614.6K 🔥` `NEW`
1. [美国渣男王水牛](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E6%B8%A3%E7%94%B7%E7%8E%8B%E6%B0%B4%E7%89%9B%23) `591.6K 🔥` `NEW`
1. [婚外胚胎案再添新诉讼](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E6%A1%88%E5%86%8D%E6%B7%BB%E6%96%B0%E8%AF%89%E8%AE%BC%23) `546.1K 🔥` `NEW`
1. [普京登岛后日本急了](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E7%99%BB%E5%B2%9B%E5%90%8E%E6%97%A5%E6%9C%AC%E6%80%A5%E4%BA%86%23) `445.4K 🔥` `NEW`
1. [姜潮麦迪娜婚礼的切糕能买乌市一套房](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E6%BD%AE%E9%BA%A6%E8%BF%AA%E5%A8%9C%E5%A9%9A%E7%A4%BC%E7%9A%84%E5%88%87%E7%B3%95%E8%83%BD%E4%B9%B0%E4%B9%8C%E5%B8%82%E4%B8%80%E5%A5%97%E6%88%BF%23) `427.3K 🔥` `NEW`
1. [gap一年会失去什么](https://s.weibo.com/weibo?q=%23gap%E4%B8%80%E5%B9%B4%E4%BC%9A%E5%A4%B1%E5%8E%BB%E4%BB%80%E4%B9%88%23) `418.3K 🔥` `NEW`
1. [曝白鹿提名金鹰奖最佳女主 (White Deer nominated for Golden Eagle Award for Best Actress)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BD%E9%B9%BF%E6%8F%90%E5%90%8D%E9%87%91%E9%B9%B0%E5%A5%96%E6%9C%80%E4%BD%B3%E5%A5%B3%E4%B8%BB%23) `402.3K 🔥` `NEW`
1. [DeepSeekV4Pro和Grok4.6谁更强](https://s.weibo.com/weibo?q=%23DeepSeekV4Pro%E5%92%8CGrok4.6%E8%B0%81%E6%9B%B4%E5%BC%BA%23) `382.8K 🔥` `NEW`
1. [孙彩瑛发布手写信离开JYP](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%BD%A9%E7%91%9B%E5%8F%91%E5%B8%83%E6%89%8B%E5%86%99%E4%BF%A1%E7%A6%BB%E5%BC%80JYP%23) `377.3K 🔥` `NEW`
1. [小象超市文案部来高人了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%B1%A1%E8%B6%85%E5%B8%82%E6%96%87%E6%A1%88%E9%83%A8%E6%9D%A5%E9%AB%98%E4%BA%BA%E4%BA%86%23) `311.1K 🔥` `NEW`
1. [郭德纲 改编红歌](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%BE%B7%E7%BA%B2%20%E6%94%B9%E7%BC%96%E7%BA%A2%E6%AD%8C%23) `306.2K 🔥` `NEW`
1. [45岁邹市明重返拳击赛靠什么赚钱](https://s.weibo.com/weibo?q=%2345%E5%B2%81%E9%82%B9%E5%B8%82%E6%98%8E%E9%87%8D%E8%BF%94%E6%8B%B3%E5%87%BB%E8%B5%9B%E9%9D%A0%E4%BB%80%E4%B9%88%E8%B5%9A%E9%92%B1%23) `216.9K 🔥` `NEW`
1. [具建逸退出XdinaryHeroes](https://s.weibo.com/weibo?q=%23%E5%85%B7%E5%BB%BA%E9%80%B8%E9%80%80%E5%87%BAXdinaryHeroes%23) `205.0K 🔥` `NEW`
1. [花48万买事业编事没办成中间人拒退款](https://s.weibo.com/weibo?q=%23%E8%8A%B148%E4%B8%87%E4%B9%B0%E4%BA%8B%E4%B8%9A%E7%BC%96%E4%BA%8B%E6%B2%A1%E5%8A%9E%E6%88%90%E4%B8%AD%E9%97%B4%E4%BA%BA%E6%8B%92%E9%80%80%E6%AC%BE%23) `180.1K 🔥` `NEW`
1. [李诞李娟一场拒绝美化的对谈](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%AF%9E%E6%9D%8E%E5%A8%9F%E4%B8%80%E5%9C%BA%E6%8B%92%E7%BB%9D%E7%BE%8E%E5%8C%96%E7%9A%84%E5%AF%B9%E8%B0%88%23) `175.4K 🔥` `NEW`
1. [王者联动小李飞刀](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%81%94%E5%8A%A8%E5%B0%8F%E6%9D%8E%E9%A3%9E%E5%88%80%23) `172.5K 🔥` `NEW`
1. [浙江省博物馆就长征版画错误致歉 (Zhejiang Provincial Museum apologizes for errors in Long March prints)](https://s.weibo.com/weibo?q=%23%E6%B5%99%E6%B1%9F%E7%9C%81%E5%8D%9A%E7%89%A9%E9%A6%86%E5%B0%B1%E9%95%BF%E5%BE%81%E7%89%88%E7%94%BB%E9%94%99%E8%AF%AF%E8%87%B4%E6%AD%89%23) `167.4K 🔥` `NEW`
1. [倒在姐姐的怀里感觉很幸福](https://s.weibo.com/weibo?q=%23%E5%80%92%E5%9C%A8%E5%A7%90%E5%A7%90%E7%9A%84%E6%80%80%E9%87%8C%E6%84%9F%E8%A7%89%E5%BE%88%E5%B9%B8%E7%A6%8F%23) `162.4K 🔥` `NEW`
1. [发现我和上班的关系很暧昧](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E6%88%91%E5%92%8C%E4%B8%8A%E7%8F%AD%E7%9A%84%E5%85%B3%E7%B3%BB%E5%BE%88%E6%9A%A7%E6%98%A7%23) `145.3K 🔥` `NEW`
1. [普京视察俄日争议岛屿](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E8%A7%86%E5%AF%9F%E4%BF%84%E6%97%A5%E4%BA%89%E8%AE%AE%E5%B2%9B%E5%B1%BF%23) `142.6K 🔥` `NEW`
1. [情侣懒得拍婚纱照交给豆包](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E6%87%92%E5%BE%97%E6%8B%8D%E5%A9%9A%E7%BA%B1%E7%85%A7%E4%BA%A4%E7%BB%99%E8%B1%86%E5%8C%85%23) `1.0M 🔥` `+72%`
1. [我国生态治理迈向新阶段 (my country's ecological governance enters a new stage)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E7%94%9F%E6%80%81%E6%B2%BB%E7%90%86%E8%BF%88%E5%90%91%E6%96%B0%E9%98%B6%E6%AE%B5%23) `1.0M 🔥` `+70%`
1. [手机壳 偷拍](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E5%A3%B3%20%E5%81%B7%E6%8B%8D%23) `836.6K 🔥` `+61%`
1. [姜潮麦迪娜新疆婚礼含金量太高了 (Jiang Chao Medina’s wedding in Xinjiang is too valuable)](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E6%BD%AE%E9%BA%A6%E8%BF%AA%E5%A8%9C%E6%96%B0%E7%96%86%E5%A9%9A%E7%A4%BC%E5%90%AB%E9%87%91%E9%87%8F%E5%A4%AA%E9%AB%98%E4%BA%86%23) `604.5K 🔥` `+63%`
1. [TF四代五公](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E4%BA%94%E5%85%AC%23) `407.3K 🔥` `+68%`
1. [邹市明45岁重返拳击赛场 (Zou Shiming returns to boxing at the age of 45)](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E45%E5%B2%81%E9%87%8D%E8%BF%94%E6%8B%B3%E5%87%BB%E8%B5%9B%E5%9C%BA%23) `382.2K 🔥` `+25%`
1. [为什么结婚少了离婚多了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%BB%93%E5%A9%9A%E5%B0%91%E4%BA%86%E7%A6%BB%E5%A9%9A%E5%A4%9A%E4%BA%86%23) `307.5K 🔥` `+30%`
1. [曝张凌赫孙千刺棠领衔主演](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%AD%99%E5%8D%83%E5%88%BA%E6%A3%A0%E9%A2%86%E8%A1%94%E4%B8%BB%E6%BC%94%23) `235.5K 🔥` `+21%`
1. [朱镕基同志逝世 (Comrade Zhu Rongji passed away)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E9%80%9D%E4%B8%96%23) `1.0M 🔥`
1. [重罚台风请假员工公司多年0人参保](https://s.weibo.com/weibo?q=%23%E9%87%8D%E7%BD%9A%E5%8F%B0%E9%A3%8E%E8%AF%B7%E5%81%87%E5%91%98%E5%B7%A5%E5%85%AC%E5%8F%B8%E5%A4%9A%E5%B9%B40%E4%BA%BA%E5%8F%82%E4%BF%9D%23) `651.8K 🔥`
1. [2026暑期最热cp (The hottest cp in summer 2026)](https://s.weibo.com/weibo?q=%232026%E6%9A%91%E6%9C%9F%E6%9C%80%E7%83%ADcp%23) `625.9K 🔥`
1. [刘晓庆 女帝和她的将相 (Liu Xiaoqing The Empress and Her Generals)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%99%93%E5%BA%86%20%E5%A5%B3%E5%B8%9D%E5%92%8C%E5%A5%B9%E7%9A%84%E5%B0%86%E7%9B%B8%23) `331.0K 🔥`
1. [曝曾辉送考人不是韩雨彤了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9B%BE%E8%BE%89%E9%80%81%E8%80%83%E4%BA%BA%E4%B8%8D%E6%98%AF%E9%9F%A9%E9%9B%A8%E5%BD%A4%E4%BA%86%23) `319.6K 🔥`
1. [西班牙日全食](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E6%97%A5%E5%85%A8%E9%A3%9F%23) `306.5K 🔥`
1. [峰哥5000元请邹市明打一场](https://s.weibo.com/weibo?q=%23%E5%B3%B0%E5%93%A55000%E5%85%83%E8%AF%B7%E9%82%B9%E5%B8%82%E6%98%8E%E6%89%93%E4%B8%80%E5%9C%BA%23) `390.7K 🔥` `-30%`
1. [胖东来许昌老店关闭周边商户发声 (Fat Dong Lai’s old store in Xuchang closes surrounding businesses to speak out)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E8%AE%B8%E6%98%8C%E8%80%81%E5%BA%97%E5%85%B3%E9%97%AD%E5%91%A8%E8%BE%B9%E5%95%86%E6%88%B7%E5%8F%91%E5%A3%B0%23) `325.9K 🔥` `-55%`
1. [骑行辅警被刺死其父亲发声](https://s.weibo.com/weibo?q=%23%E9%AA%91%E8%A1%8C%E8%BE%85%E8%AD%A6%E8%A2%AB%E5%88%BA%E6%AD%BB%E5%85%B6%E7%88%B6%E4%BA%B2%E5%8F%91%E5%A3%B0%23) `284.9K 🔥` `-25%`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `280.1K 🔥` `-22%`
1. [比Lululemon还贵的瑜伽服来中国了 (Yoga clothes more expensive than Lululemon are coming to China)](https://s.weibo.com/weibo?q=%23%E6%AF%94Lululemon%E8%BF%98%E8%B4%B5%E7%9A%84%E7%91%9C%E4%BC%BD%E6%9C%8D%E6%9D%A5%E4%B8%AD%E5%9B%BD%E4%BA%86%23) `225.3K 🔥` `-38%`
1. [胡先煦好结实的身材](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6%E5%A5%BD%E7%BB%93%E5%AE%9E%E7%9A%84%E8%BA%AB%E6%9D%90%23) `161.5K 🔥` `-28%`
1. [章若楠被金靖穿搭可爱到受不了](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E8%A2%AB%E9%87%91%E9%9D%96%E7%A9%BF%E6%90%AD%E5%8F%AF%E7%88%B1%E5%88%B0%E5%8F%97%E4%B8%8D%E4%BA%86%23) `144.3K 🔥` `-62%`
1. [TFBOYS的歌多少带点预言](https://s.weibo.com/weibo?q=%23TFBOYS%E7%9A%84%E6%AD%8C%E5%A4%9A%E5%B0%91%E5%B8%A6%E7%82%B9%E9%A2%84%E8%A8%80%23) `141.4K 🔥` `-60%`
1. [长期血糖失控可能会经历什么](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E8%A1%80%E7%B3%96%E5%A4%B1%E6%8E%A7%E5%8F%AF%E8%83%BD%E4%BC%9A%E7%BB%8F%E5%8E%86%E4%BB%80%E4%B9%88%23) `140.8K 🔥` `-31%`
1. [升学宴35桌无人上桌 (No one served at table 35 of the entrance banquet)](https://s.weibo.com/weibo?q=%23%E5%8D%87%E5%AD%A6%E5%AE%B435%E6%A1%8C%E6%97%A0%E4%BA%BA%E4%B8%8A%E6%A1%8C%23) `140.0K 🔥` `-58%`

Updated at 2026-08-13 14:47:45

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
