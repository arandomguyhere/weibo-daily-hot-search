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

1. [清华姚班 全球AI半壁江山 (Yao class at Tsinghua University accounts for half of the world’s AI)](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8D%8E%E5%A7%9A%E7%8F%AD%20%E5%85%A8%E7%90%83AI%E5%8D%8A%E5%A3%81%E6%B1%9F%E5%B1%B1%23) `1.7M 🔥` `NEW`
1. [情侣采10斤菌子被本地小孩扔到2斤](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E9%87%8710%E6%96%A4%E8%8F%8C%E5%AD%90%E8%A2%AB%E6%9C%AC%E5%9C%B0%E5%B0%8F%E5%AD%A9%E6%89%94%E5%88%B02%E6%96%A4%23) `930.6K 🔥` `NEW`
1. [数读上半年工业和信息化经济成绩单](https://s.weibo.com/weibo?q=%23%E6%95%B0%E8%AF%BB%E4%B8%8A%E5%8D%8A%E5%B9%B4%E5%B7%A5%E4%B8%9A%E5%92%8C%E4%BF%A1%E6%81%AF%E5%8C%96%E7%BB%8F%E6%B5%8E%E6%88%90%E7%BB%A9%E5%8D%95%23) `712.3K 🔥` `NEW`
1. [驾照考得早的好处还在提升](https://s.weibo.com/weibo?q=%23%E9%A9%BE%E7%85%A7%E8%80%83%E5%BE%97%E6%97%A9%E7%9A%84%E5%A5%BD%E5%A4%84%E8%BF%98%E5%9C%A8%E6%8F%90%E5%8D%87%23) `684.8K 🔥` `NEW`
1. [Bin BLG](https://s.weibo.com/weibo?q=%23Bin%20BLG%23) `612.6K 🔥` `NEW`
1. [乒超名单](https://s.weibo.com/weibo?q=%23%E4%B9%92%E8%B6%85%E5%90%8D%E5%8D%95%23) `576.8K 🔥` `NEW`
1. [淘宝闪购邀你拼团庆祝捧杯](https://s.weibo.com/weibo?q=%23%E6%B7%98%E5%AE%9D%E9%97%AA%E8%B4%AD%E9%82%80%E4%BD%A0%E6%8B%BC%E5%9B%A2%E5%BA%86%E7%A5%9D%E6%8D%A7%E6%9D%AF%23) `567.2K 🔥` `NEW`
1. [张小斐晒周星驰签名球衣](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%E6%99%92%E5%91%A8%E6%98%9F%E9%A9%B0%E7%AD%BE%E5%90%8D%E7%90%83%E8%A1%A3%23) `553.9K 🔥` `NEW`
1. [张凌赫王楚然飞行员造型](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8E%8B%E6%A5%9A%E7%84%B6%E9%A3%9E%E8%A1%8C%E5%91%98%E9%80%A0%E5%9E%8B%23) `546.9K 🔥` `NEW`
1. [菲方围顶冲撞中方巡逻艇](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E6%96%B9%E5%9B%B4%E9%A1%B6%E5%86%B2%E6%92%9E%E4%B8%AD%E6%96%B9%E5%B7%A1%E9%80%BB%E8%89%87%23) `539.9K 🔥` `NEW`
1. [芒果台重播来不及说我爱你 (Mango Channel replayed it too late to say I love you)](https://s.weibo.com/weibo?q=%23%E8%8A%92%E6%9E%9C%E5%8F%B0%E9%87%8D%E6%92%AD%E6%9D%A5%E4%B8%8D%E5%8F%8A%E8%AF%B4%E6%88%91%E7%88%B1%E4%BD%A0%23) `534.0K 🔥` `NEW`
1. [看关晓彤吃才知道有紫色西蓝花](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%85%B3%E6%99%93%E5%BD%A4%E5%90%83%E6%89%8D%E7%9F%A5%E9%81%93%E6%9C%89%E7%B4%AB%E8%89%B2%E8%A5%BF%E8%93%9D%E8%8A%B1%23) `502.0K 🔥` `NEW`
1. [A股再次突变原因](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%86%8D%E6%AC%A1%E7%AA%81%E5%8F%98%E5%8E%9F%E5%9B%A0%23) `487.8K 🔥` `NEW`
1. [谢贤部分遗产由林青霞保管](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E9%83%A8%E5%88%86%E9%81%97%E4%BA%A7%E7%94%B1%E6%9E%97%E9%9D%92%E9%9C%9E%E4%BF%9D%E7%AE%A1%23) `484.1K 🔥` `NEW`
1. [谢贤曾多次夸赞张柏芝善待孙子](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E6%9B%BE%E5%A4%9A%E6%AC%A1%E5%A4%B8%E8%B5%9E%E5%BC%A0%E6%9F%8F%E8%8A%9D%E5%96%84%E5%BE%85%E5%AD%99%E5%AD%90%23) `468.9K 🔥` `NEW`
1. [AI的六大美德](https://s.weibo.com/weibo?q=%23AI%E7%9A%84%E5%85%AD%E5%A4%A7%E7%BE%8E%E5%BE%B7%23) `460.7K 🔥` `NEW`
1. [文科生迎来了编程时代](https://s.weibo.com/weibo?q=%23%E6%96%87%E7%A7%91%E7%94%9F%E8%BF%8E%E6%9D%A5%E4%BA%86%E7%BC%96%E7%A8%8B%E6%97%B6%E4%BB%A3%23) `391.3K 🔥` `NEW`
1. [富婆和男演员拍短剧加了60多场吻戏](https://s.weibo.com/weibo?q=%23%E5%AF%8C%E5%A9%86%E5%92%8C%E7%94%B7%E6%BC%94%E5%91%98%E6%8B%8D%E7%9F%AD%E5%89%A7%E5%8A%A0%E4%BA%8660%E5%A4%9A%E5%9C%BA%E5%90%BB%E6%88%8F%23) `381.0K 🔥` `NEW`
1. [证监会资本市场](https://s.weibo.com/weibo?q=%23%E8%AF%81%E7%9B%91%E4%BC%9A%E8%B5%84%E6%9C%AC%E5%B8%82%E5%9C%BA%23) `370.2K 🔥` `NEW`
1. [张凌赫连续两部剧开播即登顶](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%BF%9E%E7%BB%AD%E4%B8%A4%E9%83%A8%E5%89%A7%E5%BC%80%E6%92%AD%E5%8D%B3%E7%99%BB%E9%A1%B6%23) `368.9K 🔥` `NEW`
1. [阿根廷 怎么进的决赛 (How did Argentina reach the finals?)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%20%E6%80%8E%E4%B9%88%E8%BF%9B%E7%9A%84%E5%86%B3%E8%B5%9B%23) `368.6K 🔥` `NEW`
1. [小英cos贝微微](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%8B%B1cos%E8%B4%9D%E5%BE%AE%E5%BE%AE%23) `368.6K 🔥` `NEW`
1. [建议普通人都尽早用上AI](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%99%AE%E9%80%9A%E4%BA%BA%E9%83%BD%E5%B0%BD%E6%97%A9%E7%94%A8%E4%B8%8AAI%23) `365.3K 🔥` `NEW`
1. [闫玉晨回应恋情](https://s.weibo.com/weibo?q=%23%E9%97%AB%E7%8E%89%E6%99%A8%E5%9B%9E%E5%BA%94%E6%81%8B%E6%83%85%23) `314.5K 🔥` `NEW`
1. [阿根廷西班牙赛后冲突对话曝光](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E8%A5%BF%E7%8F%AD%E7%89%99%E8%B5%9B%E5%90%8E%E5%86%B2%E7%AA%81%E5%AF%B9%E8%AF%9D%E6%9B%9D%E5%85%89%23) `311.6K 🔥` `NEW`
1. [花海清清顶级E人的合作](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E6%B5%B7%E6%B8%85%E6%B8%85%E9%A1%B6%E7%BA%A7E%E4%BA%BA%E7%9A%84%E5%90%88%E4%BD%9C%23) `291.6K 🔥` `NEW`
1. [海警回应菲方恶意攻击中方执法人员](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E8%AD%A6%E5%9B%9E%E5%BA%94%E8%8F%B2%E6%96%B9%E6%81%B6%E6%84%8F%E6%94%BB%E5%87%BB%E4%B8%AD%E6%96%B9%E6%89%A7%E6%B3%95%E4%BA%BA%E5%91%98%23) `288.1K 🔥` `NEW`
1. [男生预防HPV防下这一波](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E9%A2%84%E9%98%B2HPV%E9%98%B2%E4%B8%8B%E8%BF%99%E4%B8%80%E6%B3%A2%23) `286.5K 🔥` `NEW`
1. [章若楠向金靖安利林允孟子义](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E5%90%91%E9%87%91%E9%9D%96%E5%AE%89%E5%88%A9%E6%9E%97%E5%85%81%E5%AD%9F%E5%AD%90%E4%B9%89%23) `284.6K 🔥` `NEW`
1. [三伏天感冒了带薪养病](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%BC%8F%E5%A4%A9%E6%84%9F%E5%86%92%E4%BA%86%E5%B8%A6%E8%96%AA%E5%85%BB%E7%97%85%23) `279.7K 🔥` `NEW`
1. [决赛花5万块坐山顶就拍个这 (In the finals, I spent 50,000 yuan to sit on the top of the mountain and take this photo)](https://s.weibo.com/weibo?q=%23%E5%86%B3%E8%B5%9B%E8%8A%B15%E4%B8%87%E5%9D%97%E5%9D%90%E5%B1%B1%E9%A1%B6%E5%B0%B1%E6%8B%8D%E4%B8%AA%E8%BF%99%23) `276.7K 🔥` `NEW`
1. [IU咽鼓管开放症](https://s.weibo.com/weibo?q=%23IU%E5%92%BD%E9%BC%93%E7%AE%A1%E5%BC%80%E6%94%BE%E7%97%87%23) `276.4K 🔥` `NEW`
1. [王俊凯唱功](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%94%B1%E5%8A%9F%23) `178.3K 🔥` `NEW`
1. [八仙 一吒之下](https://s.weibo.com/weibo?q=%23%E5%85%AB%E4%BB%99%20%E4%B8%80%E5%90%92%E4%B9%8B%E4%B8%8B%23) `171.1K 🔥` `NEW`
1. [男子泼硫酸捅刺女子致重伤被执行死刑](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%B3%BC%E7%A1%AB%E9%85%B8%E6%8D%85%E5%88%BA%E5%A5%B3%E5%AD%90%E8%87%B4%E9%87%8D%E4%BC%A4%E8%A2%AB%E6%89%A7%E8%A1%8C%E6%AD%BB%E5%88%91%23) `168.6K 🔥` `NEW`
1. [最古老的降温方式](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%8F%A4%E8%80%81%E7%9A%84%E9%99%8D%E6%B8%A9%E6%96%B9%E5%BC%8F%23) `168.5K 🔥` `NEW`
1. [妹妹在日薪差距2元的工作中纠结](https://s.weibo.com/weibo?q=%23%E5%A6%B9%E5%A6%B9%E5%9C%A8%E6%97%A5%E8%96%AA%E5%B7%AE%E8%B7%9D2%E5%85%83%E7%9A%84%E5%B7%A5%E4%BD%9C%E4%B8%AD%E7%BA%A0%E7%BB%93%23) `502.3K 🔥` `+73%`
1. [姆巴佩没去领奖原来在游艇上看决赛](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%B2%A1%E5%8E%BB%E9%A2%86%E5%A5%96%E5%8E%9F%E6%9D%A5%E5%9C%A8%E6%B8%B8%E8%89%87%E4%B8%8A%E7%9C%8B%E5%86%B3%E8%B5%9B%23) `473.0K 🔥` `+62%`
1. [张柏芝头像变黑 (Cecilia Cheung's avatar turns black)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D%E5%A4%B4%E5%83%8F%E5%8F%98%E9%BB%91%23) `530.7K 🔥`
1. [性交易发现避孕套脱落勒索8万](https://s.weibo.com/weibo?q=%23%E6%80%A7%E4%BA%A4%E6%98%93%E5%8F%91%E7%8E%B0%E9%81%BF%E5%AD%95%E5%A5%97%E8%84%B1%E8%90%BD%E5%8B%92%E7%B4%A28%E4%B8%87%23) `520.7K 🔥`
1. [谢贤九成遗产留给两孙子](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E4%B9%9D%E6%88%90%E9%81%97%E4%BA%A7%E7%95%99%E7%BB%99%E4%B8%A4%E5%AD%99%E5%AD%90%23) `511.2K 🔥`
1. [谢贤去世 (Xie Xian passed away)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E5%8E%BB%E4%B8%96%23) `508.1K 🔥`
1. [白鹿奔跑吧下一季投票第一](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%A5%94%E8%B7%91%E5%90%A7%E4%B8%8B%E4%B8%80%E5%AD%A3%E6%8A%95%E7%A5%A8%E7%AC%AC%E4%B8%80%23) `490.5K 🔥`
1. [CRYBABY心动了](https://s.weibo.com/weibo?q=%23CRYBABY%E5%BF%83%E5%8A%A8%E4%BA%86%23) `685.6K 🔥` `-83%`
1. [谢婷婷发文悼念父亲谢贤](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A9%B7%E5%A9%B7%E5%8F%91%E6%96%87%E6%82%BC%E5%BF%B5%E7%88%B6%E4%BA%B2%E8%B0%A2%E8%B4%A4%23) `459.0K 🔥` `-22%`
1. [千万不要在网上买低价饮料](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E5%9C%A8%E7%BD%91%E4%B8%8A%E4%B9%B0%E4%BD%8E%E4%BB%B7%E9%A5%AE%E6%96%99%23) `453.9K 🔥` `-45%`
1. [谢霆锋发讣告](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E5%8F%91%E8%AE%A3%E5%91%8A%23) `379.8K 🔥` `-53%`
1. [谢贤年轻时有多帅](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E5%B9%B4%E8%BD%BB%E6%97%B6%E6%9C%89%E5%A4%9A%E5%B8%85%23) `345.8K 🔥` `-40%`
1. [阿根廷队无法接受输掉决赛的事实 (Argentina cannot accept losing the final)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E6%97%A0%E6%B3%95%E6%8E%A5%E5%8F%97%E8%BE%93%E6%8E%89%E5%86%B3%E8%B5%9B%E7%9A%84%E4%BA%8B%E5%AE%9E%23) `331.7K 🔥` `-73%`
1. [被大佬的工作留痕意识震撼到 (I was shocked by the boss’s awareness of the traces left behind by his work)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%A4%A7%E4%BD%AC%E7%9A%84%E5%B7%A5%E4%BD%9C%E7%95%99%E7%97%95%E6%84%8F%E8%AF%86%E9%9C%87%E6%92%BC%E5%88%B0%23) `290.5K 🔥` `-33%`
1. [虞书欣 女人中的女人](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%20%E5%A5%B3%E4%BA%BA%E4%B8%AD%E7%9A%84%E5%A5%B3%E4%BA%BA%23) `198.7K 🔥` `-46%`
1. [鹅鸭杀](https://s.weibo.com/weibo?q=%23%E9%B9%85%E9%B8%AD%E6%9D%80%23) `191.3K 🔥` `-26%`

Updated at 2026-07-20 20:53:23

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
