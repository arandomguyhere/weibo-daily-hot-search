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

1. [好好的时光真会吊人胃口 (Good times really whet your appetite)](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A5%BD%E7%9A%84%E6%97%B6%E5%85%89%E7%9C%9F%E4%BC%9A%E5%90%8A%E4%BA%BA%E8%83%83%E5%8F%A3%23) `348.8K 🔥` `NEW`
1. [阿里通义实验室紧急召开会议](https://s.weibo.com/weibo?q=%23%E9%98%BF%E9%87%8C%E9%80%9A%E4%B9%89%E5%AE%9E%E9%AA%8C%E5%AE%A4%E7%B4%A7%E6%80%A5%E5%8F%AC%E5%BC%80%E4%BC%9A%E8%AE%AE%23) `339.1K 🔥` `NEW`
1. [微信转账1万没写借条同学不还钱了](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%BD%AC%E8%B4%A61%E4%B8%87%E6%B2%A1%E5%86%99%E5%80%9F%E6%9D%A1%E5%90%8C%E5%AD%A6%E4%B8%8D%E8%BF%98%E9%92%B1%E4%BA%86%23) `338.7K 🔥` `NEW`
1. [十日终焉](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `338.6K 🔥` `NEW`
1. [易烊千玺告眼镜公司侵权索赔50.5万](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%91%8A%E7%9C%BC%E9%95%9C%E5%85%AC%E5%8F%B8%E4%BE%B5%E6%9D%83%E7%B4%A2%E8%B5%9450.5%E4%B8%87%23) `337.9K 🔥` `NEW`
1. [人大代表反问微短剧爽完之后呢](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%A4%A7%E4%BB%A3%E8%A1%A8%E5%8F%8D%E9%97%AE%E5%BE%AE%E7%9F%AD%E5%89%A7%E7%88%BD%E5%AE%8C%E4%B9%8B%E5%90%8E%E5%91%A2%23) `337.8K 🔥` `NEW`
1. [考研MVP结算画面](https://s.weibo.com/weibo?q=%23%E8%80%83%E7%A0%94MVP%E7%BB%93%E7%AE%97%E7%94%BB%E9%9D%A2%23) `337.7K 🔥` `NEW`
1. [AG让二追四](https://s.weibo.com/weibo?q=%23AG%E8%AE%A9%E4%BA%8C%E8%BF%BD%E5%9B%9B%23) `337.5K 🔥` `NEW`
1. [MacBookNeo定价4599元起](https://s.weibo.com/weibo?q=%23MacBookNeo%E5%AE%9A%E4%BB%B74599%E5%85%83%E8%B5%B7%23) `337.5K 🔥` `NEW`
1. [Viper我们继续加油](https://s.weibo.com/weibo?q=%23Viper%E6%88%91%E4%BB%AC%E7%BB%A7%E7%BB%AD%E5%8A%A0%E6%B2%B9%23) `336.9K 🔥` `NEW`
1. [AG确认第三轮S组 (AG confirms Group S for third round)](https://s.weibo.com/weibo?q=%23AG%E7%A1%AE%E8%AE%A4%E7%AC%AC%E4%B8%89%E8%BD%AES%E7%BB%84%23) `336.9K 🔥` `NEW`
1. [On冰鸟辅助](https://s.weibo.com/weibo?q=%23On%E5%86%B0%E9%B8%9F%E8%BE%85%E5%8A%A9%23) `336.8K 🔥` `NEW`
1. [纯真年代 真替身](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%9C%9F%E5%B9%B4%E4%BB%A3%20%E7%9C%9F%E6%9B%BF%E8%BA%AB%23) `1.2M 🔥` `+294%`
1. [宋平同志逝世 (Comrade Song Ping passed away)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%B9%B3%E5%90%8C%E5%BF%97%E9%80%9D%E4%B8%96%23) `344.4K 🔥` `+25%`
1. [纯真年代的爱情大结局](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%9C%9F%E5%B9%B4%E4%BB%A3%E7%9A%84%E7%88%B1%E6%83%85%E5%A4%A7%E7%BB%93%E5%B1%80%23) `343.0K 🔥` `+29%`
1. [中东局势彻底失控 (The situation in the Middle East is completely out of control)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%B8%9C%E5%B1%80%E5%8A%BF%E5%BD%BB%E5%BA%95%E5%A4%B1%E6%8E%A7%23) `341.8K 🔥` `+24%`
1. [苹果发布会](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%8F%91%E5%B8%83%E4%BC%9A%23) `340.5K 🔥` `+23%`
1. [弟弟你的相貌很容易让人轻敌啊](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%E4%BD%A0%E7%9A%84%E7%9B%B8%E8%B2%8C%E5%BE%88%E5%AE%B9%E6%98%93%E8%AE%A9%E4%BA%BA%E8%BD%BB%E6%95%8C%E5%95%8A%23) `339.4K 🔥` `+23%`
1. [方穆静出国](https://s.weibo.com/weibo?q=%23%E6%96%B9%E7%A9%86%E9%9D%99%E5%87%BA%E5%9B%BD%23) `339.4K 🔥` `+104%`
1. [凭微信转账记录起诉同学还钱被驳回](https://s.weibo.com/weibo?q=%23%E5%87%AD%E5%BE%AE%E4%BF%A1%E8%BD%AC%E8%B4%A6%E8%AE%B0%E5%BD%95%E8%B5%B7%E8%AF%89%E5%90%8C%E5%AD%A6%E8%BF%98%E9%92%B1%E8%A2%AB%E9%A9%B3%E5%9B%9E%23) `339.3K 🔥` `+24%`
1. [新豪华旗舰昊铂A800上市补贴后16.48万起](https://s.weibo.com/weibo?q=%23%E6%96%B0%E8%B1%AA%E5%8D%8E%E6%97%97%E8%88%B0%E6%98%8A%E9%93%82A800%E4%B8%8A%E5%B8%82%E8%A1%A5%E8%B4%B4%E5%90%8E16.48%E4%B8%87%E8%B5%B7%23) `339.2K 🔥` `+26%`
1. [MacBook Neo](https://s.weibo.com/weibo?q=%23MacBook%20Neo%23) `339.2K 🔥` `+98%`
1. [十日终焉没女主 (There is no heroine in ten days)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E6%B2%A1%E5%A5%B3%E4%B8%BB%23) `339.0K 🔥` `+58%`
1. [最长学期后迎来史上最短学期](https://s.weibo.com/weibo?q=%23%E6%9C%80%E9%95%BF%E5%AD%A6%E6%9C%9F%E5%90%8E%E8%BF%8E%E6%9D%A5%E5%8F%B2%E4%B8%8A%E6%9C%80%E7%9F%AD%E5%AD%A6%E6%9C%9F%23) `338.9K 🔥` `+134%`
1. [伊朗展开高强度连环反击 (Iran launches high-intensity series of counterattacks)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%B1%95%E5%BC%80%E9%AB%98%E5%BC%BA%E5%BA%A6%E8%BF%9E%E7%8E%AF%E5%8F%8D%E5%87%BB%23) `338.8K 🔥` `+56%`
1. [伊朗军舰遭袭101人失踪78人伤 (Iranian warship attacked, 101 people missing, 78 injured)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%86%9B%E8%88%B0%E9%81%AD%E8%A2%AD101%E4%BA%BA%E5%A4%B1%E8%B8%AA78%E4%BA%BA%E4%BC%A4%23) `338.6K 🔥` `+57%`
1. [63岁失独妈妈剖腹产生下健康女婴](https://s.weibo.com/weibo?q=%2363%E5%B2%81%E5%A4%B1%E7%8B%AC%E5%A6%88%E5%A6%88%E5%89%96%E8%85%B9%E4%BA%A7%E7%94%9F%E4%B8%8B%E5%81%A5%E5%BA%B7%E5%A5%B3%E5%A9%B4%23) `338.5K 🔥` `+56%`
1. [伊朗局势最新情况](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%B1%80%E5%8A%BF%E6%9C%80%E6%96%B0%E6%83%85%E5%86%B5%23) `338.4K 🔥` `+101%`
1. [BLG战胜JDG](https://s.weibo.com/weibo?q=%23BLG%E6%88%98%E8%83%9CJDG%23) `338.3K 🔥` `+23%`
1. [女员工手一抖摔破3000多元飞天茅台 (Female employee shook her hand and broke more than 3,000 yuan of Feitian Moutai)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%91%98%E5%B7%A5%E6%89%8B%E4%B8%80%E6%8A%96%E6%91%94%E7%A0%B43000%E5%A4%9A%E5%85%83%E9%A3%9E%E5%A4%A9%E8%8C%85%E5%8F%B0%23) `338.3K 🔥` `+56%`
1. [IF椰子水严正声明 (IF coconut water solemn statement)](https://s.weibo.com/weibo?q=%23IF%E6%A4%B0%E5%AD%90%E6%B0%B4%E4%B8%A5%E6%AD%A3%E5%A3%B0%E6%98%8E%23) `338.2K 🔥` `+49%`
1. [韩蛇蝎美人被确认为反社会人格](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E8%9B%87%E8%9D%8E%E7%BE%8E%E4%BA%BA%E8%A2%AB%E7%A1%AE%E8%AE%A4%E4%B8%BA%E5%8F%8D%E7%A4%BE%E4%BC%9A%E4%BA%BA%E6%A0%BC%23) `338.2K 🔥` `+111%`
1. [建议将香港机场纳入国际航空体系](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%B0%86%E9%A6%99%E6%B8%AF%E6%9C%BA%E5%9C%BA%E7%BA%B3%E5%85%A5%E5%9B%BD%E9%99%85%E8%88%AA%E7%A9%BA%E4%BD%93%E7%B3%BB%23) `338.1K 🔥` `+134%`
1. [谈到美国电网中国白发院士笑了](https://s.weibo.com/weibo?q=%23%E8%B0%88%E5%88%B0%E7%BE%8E%E5%9B%BD%E7%94%B5%E7%BD%91%E4%B8%AD%E5%9B%BD%E7%99%BD%E5%8F%91%E9%99%A2%E5%A3%AB%E7%AC%91%E4%BA%86%23) `337.9K 🔥` `+111%`
1. [伊朗确定最高领袖候选人](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A1%AE%E5%AE%9A%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E5%80%99%E9%80%89%E4%BA%BA%23) `337.7K 🔥` `+86%`
1. [伊朗称击中10多艘油轮](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E5%87%BB%E4%B8%AD10%E5%A4%9A%E8%89%98%E6%B2%B9%E8%BD%AE%23) `337.4K 🔥` `+133%`
1. [1克拉钻石价格已经1000多了 (The price of 1 carat diamond is already over 1,000)](https://s.weibo.com/weibo?q=%231%E5%85%8B%E6%8B%89%E9%92%BB%E7%9F%B3%E4%BB%B7%E6%A0%BC%E5%B7%B2%E7%BB%8F1000%E5%A4%9A%E4%BA%86%23) `337.4K 🔥` `+121%`
1. [热水器不能一开一关 (The water heater cannot be turned on and off at the same time)](https://s.weibo.com/weibo?q=%23%E7%83%AD%E6%B0%B4%E5%99%A8%E4%B8%8D%E8%83%BD%E4%B8%80%E5%BC%80%E4%B8%80%E5%85%B3%23) `337.3K 🔥` `+111%`
1. [中国驻日大使馆再发提醒](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%A9%BB%E6%97%A5%E5%A4%A7%E4%BD%BF%E9%A6%86%E5%86%8D%E5%8F%91%E6%8F%90%E9%86%92%23) `337.2K 🔥` `+127%`
1. [纯真年代的爱情 (Love in the Age of Innocence)](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%9C%9F%E5%B9%B4%E4%BB%A3%E7%9A%84%E7%88%B1%E6%83%85%23) `337.1K 🔥` `+133%`
1. [小狗做雾化不理解但很配合](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E5%81%9A%E9%9B%BE%E5%8C%96%E4%B8%8D%E7%90%86%E8%A7%A3%E4%BD%86%E5%BE%88%E9%85%8D%E5%90%88%23) `337.1K 🔥` `+133%`
1. [伊朗的导弹能用多久](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%9A%84%E5%AF%BC%E5%BC%B9%E8%83%BD%E7%94%A8%E5%A4%9A%E4%B9%85%23) `337.0K 🔥` `+133%`
1. [迪丽热巴报平安 (Dilireba says she is safe)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%8A%A5%E5%B9%B3%E5%AE%89%23) `7.0M 🔥`
1. [在中国式现代化新征程上策马奔腾 (Galloping forward on the new journey of Chinese-style modernization)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E4%B8%AD%E5%9B%BD%E5%BC%8F%E7%8E%B0%E4%BB%A3%E5%8C%96%E6%96%B0%E5%BE%81%E7%A8%8B%E4%B8%8A%E7%AD%96%E9%A9%AC%E5%A5%94%E8%85%BE%23) `647.5K 🔥`
1. [奥迪破马年吉尼斯世界纪录 (Audi breaks Guinness world record in Year of the Horse)](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E8%BF%AA%E7%A0%B4%E9%A9%AC%E5%B9%B4%E5%90%89%E5%B0%BC%E6%96%AF%E4%B8%96%E7%95%8C%E7%BA%AA%E5%BD%95%23) `555.0K 🔥`
1. [伊朗玫瑰宫遭袭前后对比](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%8E%AB%E7%91%B0%E5%AE%AB%E9%81%AD%E8%A2%AD%E5%89%8D%E5%90%8E%E5%AF%B9%E6%AF%94%23) `349.0K 🔥`
1. [建议鼓励大学生加入家政行业 (It is recommended to encourage college students to join the housekeeping industry)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E9%BC%93%E5%8A%B1%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%8A%A0%E5%85%A5%E5%AE%B6%E6%94%BF%E8%A1%8C%E4%B8%9A%23) `348.3K 🔥`
1. [中国拥有全球门类最齐全制造业体系](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%8B%A5%E6%9C%89%E5%85%A8%E7%90%83%E9%97%A8%E7%B1%BB%E6%9C%80%E9%BD%90%E5%85%A8%E5%88%B6%E9%80%A0%E4%B8%9A%E4%BD%93%E7%B3%BB%23) `345.9K 🔥`
1. [TTG对战AG (TTG vs. AG)](https://s.weibo.com/weibo?q=%23TTG%E5%AF%B9%E6%88%98AG%23) `338.0K 🔥`
1. [社保迎来第六险](https://s.weibo.com/weibo?q=%23%E7%A4%BE%E4%BF%9D%E8%BF%8E%E6%9D%A5%E7%AC%AC%E5%85%AD%E9%99%A9%23) `842.1K 🔥` `-33%`
1. [Bin 先锋赛给大伙带个冠军回来](https://s.weibo.com/weibo?q=%23Bin%20%E5%85%88%E9%94%8B%E8%B5%9B%E7%BB%99%E5%A4%A7%E4%BC%99%E5%B8%A6%E4%B8%AA%E5%86%A0%E5%86%9B%E5%9B%9E%E6%9D%A5%23) `416.1K 🔥` `-31%`
1. [建议废除劳务派遣制度 (It is recommended to abolish the labor dispatch system)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%BA%9F%E9%99%A4%E5%8A%B3%E5%8A%A1%E6%B4%BE%E9%81%A3%E5%88%B6%E5%BA%A6%23) `349.9K 🔥` `-60%`

Updated at 2026-03-04 23:04:51

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
