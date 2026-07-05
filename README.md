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

1. [患者控诉每天要早起等医生查房 (Patients complain that they have to get up early every day to wait for the doctor’s rounds)](https://s.weibo.com/weibo?q=%23%E6%82%A3%E8%80%85%E6%8E%A7%E8%AF%89%E6%AF%8F%E5%A4%A9%E8%A6%81%E6%97%A9%E8%B5%B7%E7%AD%89%E5%8C%BB%E7%94%9F%E6%9F%A5%E6%88%BF%23) `804.1K 🔥` `NEW`
1. [字节申请热门网络梗著作权](https://s.weibo.com/weibo?q=%23%E5%AD%97%E8%8A%82%E7%94%B3%E8%AF%B7%E7%83%AD%E9%97%A8%E7%BD%91%E7%BB%9C%E6%A2%97%E8%91%97%E4%BD%9C%E6%9D%83%23) `289.0K 🔥` `NEW`
1. [哈兰德回应淘汰巴西](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%9B%9E%E5%BA%94%E6%B7%98%E6%B1%B0%E5%B7%B4%E8%A5%BF%23) `287.4K 🔥` `NEW`
1. [司晓迪疑似发鹿晗](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E6%99%93%E8%BF%AA%E7%96%91%E4%BC%BC%E5%8F%91%E9%B9%BF%E6%99%97%23) `284.2K 🔥` `NEW`
1. [迪丽热巴全程都很不自在](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%85%A8%E7%A8%8B%E9%83%BD%E5%BE%88%E4%B8%8D%E8%87%AA%E5%9C%A8%23) `282.7K 🔥` `NEW`
1. [马思纯直言再瘦就认不出郭麒麟了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%80%9D%E7%BA%AF%E7%9B%B4%E8%A8%80%E5%86%8D%E7%98%A6%E5%B0%B1%E8%AE%A4%E4%B8%8D%E5%87%BA%E9%83%AD%E9%BA%92%E9%BA%9F%E4%BA%86%23) `276.7K 🔥` `NEW`
1. [司晓迪发了好多男明星](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E6%99%93%E8%BF%AA%E5%8F%91%E4%BA%86%E5%A5%BD%E5%A4%9A%E7%94%B7%E6%98%8E%E6%98%9F%23) `273.6K 🔥` `NEW`
1. [挪威是巴西唯一没战胜过的国家](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81%E6%98%AF%E5%B7%B4%E8%A5%BF%E5%94%AF%E4%B8%80%E6%B2%A1%E6%88%98%E8%83%9C%E8%BF%87%E7%9A%84%E5%9B%BD%E5%AE%B6%23) `271.6K 🔥` `NEW`
1. [哈兰德天神下凡](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%A4%A9%E7%A5%9E%E4%B8%8B%E5%87%A1%23) `270.0K 🔥` `NEW`
1. [内马尔点球破门](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E7%82%B9%E7%90%83%E7%A0%B4%E9%97%A8%23) `268.1K 🔥` `NEW`
1. [林一在下此生分明了 (Lin Yi's life is clear)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%B8%80%E5%9C%A8%E4%B8%8B%E6%AD%A4%E7%94%9F%E5%88%86%E6%98%8E%E4%BA%86%23) `263.0K 🔥` `NEW`
1. [蒯曼vs张本美和](https://s.weibo.com/weibo?q=%23%E8%92%AF%E6%9B%BCvs%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `262.3K 🔥` `NEW`
1. [迪丽热巴深V开到腰了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%B7%B1V%E5%BC%80%E5%88%B0%E8%85%B0%E4%BA%86%23) `259.9K 🔥` `NEW`
1. [哈兰德敲鼓带队划船庆祝](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E6%95%B2%E9%BC%93%E5%B8%A6%E9%98%9F%E5%88%92%E8%88%B9%E5%BA%86%E7%A5%9D%23) `256.2K 🔥` `NEW`
1. [霉霉婚前协议堪称史上最复杂](https://s.weibo.com/weibo?q=%23%E9%9C%89%E9%9C%89%E5%A9%9A%E5%89%8D%E5%8D%8F%E8%AE%AE%E5%A0%AA%E7%A7%B0%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%A4%8D%E6%9D%82%23) `249.8K 🔥` `NEW`
1. [西藏文旅奖励李要得50万奖金](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E8%97%8F%E6%96%87%E6%97%85%E5%A5%96%E5%8A%B1%E6%9D%8E%E8%A6%81%E5%BE%9750%E4%B8%87%E5%A5%96%E9%87%91%23) `247.4K 🔥` `NEW`
1. [五星巴西回家了](https://s.weibo.com/weibo?q=%23%E4%BA%94%E6%98%9F%E5%B7%B4%E8%A5%BF%E5%9B%9E%E5%AE%B6%E4%BA%86%23) `244.7K 🔥` `NEW`
1. [日产赛道电驱体验官](https://s.weibo.com/weibo?q=%23%E6%97%A5%E4%BA%A7%E8%B5%9B%E9%81%93%E7%94%B5%E9%A9%B1%E4%BD%93%E9%AA%8C%E5%AE%98%23) `237.3K 🔥` `NEW`
1. [内马尔哭了](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E5%93%AD%E4%BA%86%23) `4.0M 🔥` `+90%`
1. [数说中国经济6月成绩单 (Numbers say China’s economic report card for June)](https://s.weibo.com/weibo?q=%23%E6%95%B0%E8%AF%B4%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E6%E6%9C%88%E6%88%90%E7%BB%A9%E5%8D%95%23) `3.0M 🔥` `+33%`
1. [巴西1比2挪威](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF1%E6%AF%942%E6%8C%AA%E5%A8%81%23) `2.6M 🔥` `+151%`
1. [有线耳机此生从此分明了 (Wired headphones are now clear in this life)](https://s.weibo.com/weibo?q=%23%E6%9C%89%E7%BA%BF%E8%80%B3%E6%9C%BA%E6%AD%A4%E7%94%9F%E4%BB%8E%E6%AD%A4%E5%88%86%E6%98%8E%E4%BA%86%23) `372.8K 🔥` `+146%`
1. [张新成演唱会翻唱率 (Zhang Xincheng's concert cover rate)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%96%B0%E6%88%90%E6%BC%94%E5%94%B1%E4%BC%9A%E7%BF%BB%E5%94%B1%E7%8E%87%23) `290.9K 🔥` `+159%`
1. [虞书欣蚌精仿妆 (Yu Shuxin Clam Essence Imitation Makeup)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%9A%8C%E7%B2%BE%E4%BB%BF%E5%A6%86%23) `290.6K 🔥` `+304%`
1. [未发现蒋方舟存在学术不端行为 (No academic misconduct was found by Jiang Fangzhou)](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E5%8F%91%E7%8E%B0%E8%92%8B%E6%96%B9%E8%88%9F%E5%AD%98%E5%9C%A8%E5%AD%A6%E6%9C%AF%E4%B8%8D%E7%AB%AF%E8%A1%8C%E4%B8%BA%23) `278.0K 🔥` `+186%`
1. [虞书欣陈靖可灿如繁星热度破7400 (Yu Shuxin and Chen Jingke are as bright as stars and their popularity exceeded 7400)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E9%99%88%E9%9D%96%E5%8F%AF%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%E7%83%AD%E5%BA%A6%E7%A0%B47400%23) `275.6K 🔥` `+200%`
1. [特朗普将自己头像加在林肯旁边](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%B0%86%E8%87%AA%E5%B7%B1%E5%A4%B4%E5%83%8F%E5%8A%A0%E5%9C%A8%E6%9E%97%E8%82%AF%E6%97%81%E8%BE%B9%23) `274.6K 🔥` `+711%`
1. [理解人性是一种永远吃香的能力](https://s.weibo.com/weibo?q=%23%E7%90%86%E8%A7%A3%E4%BA%BA%E6%80%A7%E6%98%AF%E4%B8%80%E7%A7%8D%E6%B0%B8%E8%BF%9C%E5%90%83%E9%A6%99%E7%9A%84%E8%83%BD%E5%8A%9B%23) `265.6K 🔥` `+206%`
1. [计算机跌出本科专业月收入前十 (Computer science falls out of the top ten monthly income undergraduate majors)](https://s.weibo.com/weibo?q=%23%E8%AE%A1%E7%AE%97%E6%9C%BA%E8%B7%8C%E5%87%BA%E6%9C%AC%E7%A7%91%E4%B8%93%E4%B8%9A%E6%9C%88%E6%94%B6%E5%85%A5%E5%89%8D%E5%8D%81%23) `261.5K 🔥` `+398%`
1. [LV在中国疯狂打官司](https://s.weibo.com/weibo?q=%23LV%E5%9C%A8%E4%B8%AD%E5%9B%BD%E7%96%AF%E7%8B%82%E6%89%93%E5%AE%98%E5%8F%B8%23) `256.6K 🔥` `+155%`
1. [绵竹地震](https://s.weibo.com/weibo?q=%23%E7%BB%B5%E7%AB%B9%E5%9C%B0%E9%9C%87%23) `252.4K 🔥` `+227%`
1. [物价悄悄上涨真的很可怕 (It’s really scary that prices are rising quietly)](https://s.weibo.com/weibo?q=%23%E7%89%A9%E4%BB%B7%E6%82%84%E6%82%84%E4%B8%8A%E6%B6%A8%E7%9C%9F%E7%9A%84%E5%BE%88%E5%8F%AF%E6%80%95%23) `251.3K 🔥` `+174%`
1. [野狗骨头](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%23) `248.5K 🔥` `+373%`
1. [19块的外卖用玻璃罐装 (19 yuan takeaway in glass jar)](https://s.weibo.com/weibo?q=%2319%E5%9D%97%E7%9A%84%E5%A4%96%E5%8D%96%E7%94%A8%E7%8E%BB%E7%92%83%E7%BD%90%E8%A3%85%23) `245.7K 🔥` `+73%`
1. [佛得角队在机场被疯狂包围 (Cape Verde team surrounded by madness at airport)](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%98%9F%E5%9C%A8%E6%9C%BA%E5%9C%BA%E8%A2%AB%E7%96%AF%E7%8B%82%E5%8C%85%E5%9B%B4%23) `243.5K 🔥` `+280%`
1. [司机回应李要得50万奖金分配 (The driver responded that Li wanted 500,000 bonus distribution)](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E6%9C%BA%E5%9B%9E%E5%BA%94%E6%9D%8E%E8%A6%81%E5%BE%9750%E4%B8%87%E5%A5%96%E9%87%91%E5%88%86%E9%85%8D%23) `242.9K 🔥` `+208%`
1. [王力宏缝了39针](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E7%BC%9D%E4%BA%8639%E9%92%88%23) `240.9K 🔥` `+359%`
1. [绵竹半小时三震](https://s.weibo.com/weibo?q=%23%E7%BB%B5%E7%AB%B9%E5%8D%8A%E5%B0%8F%E6%97%B6%E4%B8%89%E9%9C%87%23) `239.2K 🔥` `+251%`
1. [边水往事 悬案](https://s.weibo.com/weibo?q=%23%E8%BE%B9%E6%B0%B4%E5%BE%80%E4%BA%8B%20%E6%82%AC%E6%A1%88%23) `237.7K 🔥` `+334%`
1. [孙颖莎4比1王艺迪](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E4%E6%AF%941%E7%8E%8B%E8%89%BA%E8%BF%AA%23) `235.2K 🔥` `+66%`
1. [台风 (typhoon)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `233.9K 🔥` `+346%`
1. [巴西VS挪威 (Brazil vs Norway)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BFVS%E6%8C%AA%E5%A8%81%23) `6.2M 🔥` `-32%`
1. [哈兰德](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%23) `286.6K 🔥` `-76%`
1. [巴西点球不进](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E7%82%B9%E7%90%83%E4%B8%8D%E8%BF%9B%23) `284.3K 🔥` `-78%`
1. [哈兰德梅开二度](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E6%A2%85%E5%BC%80%E4%BA%8C%E5%BA%A6%23) `280.3K 🔥` `-87%`
1. [内马尔 (Neymar)](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%23) `279.1K 🔥` `-89%`
1. [孙颖莎晋级美国大满贯决赛](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%99%8B%E7%BA%A7%E7%BE%8E%E5%9B%BD%E5%A4%A7%E6%BB%A1%E8%B4%AF%E5%86%B3%E8%B5%9B%23) `268.8K 🔥` `-47%`
1. [内马尔替补出场](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E6%9B%BF%E8%A1%A5%E5%87%BA%E5%9C%BA%23) `266.8K 🔥` `-64%`
1. [哈兰德头球破门](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%A4%B4%E7%90%83%E7%A0%B4%E9%97%A8%23) `258.3K 🔥` `-24%`
1. [巴西淘汰](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E6%B7%98%E6%B1%B0%23) `253.9K 🔥` `-25%`

Updated at 2026-07-06 07:46:22

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
