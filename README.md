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

1. [王橹杰彝族祖先姓mu (Wang Lujie's Yi ancestor's surname is mu)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%BD%9D%E6%97%8F%E7%A5%96%E5%85%88%E5%A7%93mu%23) `279.0K 🔥` `NEW`
1. [百度第二季度营收313.3亿元](https://s.weibo.com/weibo?q=%23%E7%99%BE%E5%BA%A6%E7%AC%AC%E4%BA%8C%E5%AD%A3%E5%BA%A6%E8%90%A5%E6%94%B6313.3%E4%BA%BF%E5%85%83%23) `273.5K 🔥` `NEW`
1. [武汉百年历史建筑被擅自刷成金色](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E6%B1%89%E7%99%BE%E5%B9%B4%E5%8E%86%E5%8F%B2%E5%BB%BA%E7%AD%91%E8%A2%AB%E6%93%85%E8%87%AA%E5%88%B7%E6%88%90%E9%87%91%E8%89%B2%23) `270.9K 🔥` `NEW`
1. [胡锡进称杭州酒局涉事者吃了豹子胆](https://s.weibo.com/weibo?q=%23%E8%83%A1%E9%94%A1%E8%BF%9B%E7%A7%B0%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E6%B6%89%E4%BA%8B%E8%80%85%E5%90%83%E4%BA%86%E8%B1%B9%E5%AD%90%E8%83%86%23) `265.3K 🔥` `NEW`
1. [新学期宿舍开黑神器belike](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%AD%A6%E6%9C%9F%E5%AE%BF%E8%88%8D%E5%BC%80%E9%BB%91%E7%A5%9E%E5%99%A8belike%23) `263.2K 🔥` `NEW`
1. [冰箱里放了两年的苹果](https://s.weibo.com/weibo?q=%23%E5%86%B0%E7%AE%B1%E9%87%8C%E6%94%BE%E4%BA%86%E4%B8%A4%E5%B9%B4%E7%9A%84%E8%8B%B9%E6%9E%9C%23) `247.3K 🔥` `NEW`
1. [沈月你的CP复活了](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E4%BD%A0%E7%9A%84CP%E5%A4%8D%E6%B4%BB%E4%BA%86%23) `243.2K 🔥` `NEW`
1. [制止家暴获刑母亲卖70只羊打官司](https://s.weibo.com/weibo?q=%23%E5%88%B6%E6%AD%A2%E5%AE%B6%E6%9A%B4%E8%8E%B7%E5%88%91%E6%AF%8D%E4%BA%B2%E5%8D%9670%E5%8F%AA%E7%BE%8A%E6%89%93%E5%AE%98%E5%8F%B8%23) `242.2K 🔥` `NEW`
1. [赵一鸣门店称重严重偏差被立案调查](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%80%E9%B8%A3%E9%97%A8%E5%BA%97%E7%A7%B0%E9%87%8D%E4%B8%A5%E9%87%8D%E5%81%8F%E5%B7%AE%E8%A2%AB%E7%AB%8B%E6%A1%88%E8%B0%83%E6%9F%A5%23) `240.2K 🔥` `NEW`
1. [王者840倍农作物](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85840%E5%80%8D%E5%86%9C%E4%BD%9C%E7%89%A9%23) `232.2K 🔥` `NEW`
1. [男子写招嫖广告获刑妻儿报复女邻居 (Man was jailed for writing an advertisement for prostitutes, and his wife and children took revenge on their female neighbor)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%86%99%E6%8B%9B%E5%AB%96%E5%B9%BF%E5%91%8A%E8%8E%B7%E5%88%91%E5%A6%BB%E5%84%BF%E6%8A%A5%E5%A4%8D%E5%A5%B3%E9%82%BB%E5%B1%85%23) `226.1K 🔥` `NEW`
1. [住房公积金新政来了](https://s.weibo.com/weibo?q=%23%E4%BD%8F%E6%88%BF%E5%85%AC%E7%A7%AF%E9%87%91%E6%96%B0%E6%94%BF%E6%9D%A5%E4%BA%86%23) `1.1M 🔥` `+46%`
1. [外交部不再称靖国神社直接叫战犯神社](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E4%B8%8D%E5%86%8D%E7%A7%B0%E9%9D%96%E5%9B%BD%E7%A5%9E%E7%A4%BE%E7%9B%B4%E6%8E%A5%E5%8F%AB%E6%88%98%E7%8A%AF%E7%A5%9E%E7%A4%BE%23) `734.5K 🔥` `+115%`
1. [租房提取公积金取消收入比例门槛](https://s.weibo.com/weibo?q=%23%E7%A7%9F%E6%88%BF%E6%8F%90%E5%8F%96%E5%85%AC%E7%A7%AF%E9%87%91%E5%8F%96%E6%B6%88%E6%94%B6%E5%85%A5%E6%AF%94%E4%BE%8B%E9%97%A8%E6%A7%9B%23) `285.3K 🔥` `+24%`
1. [朱镕基同志生平 (Comrade Zhu Rongji's Life)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%E7%94%9F%E5%B9%B3%23) `2.8M 🔥`
1. [公积金](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%23) `2.2M 🔥`
1. [中国医师节致敬不平凡的你 (Chinese Doctors’ Day pays tribute to you, the extraordinary person)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%8C%BB%E5%B8%88%E8%8A%82%E8%87%B4%E6%95%AC%E4%B8%8D%E5%B9%B3%E5%87%A1%E7%9A%84%E4%BD%A0%23) `1.5M 🔥`
1. [公积金条例修改 (Amendment to Provident Fund Regulations)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E6%9D%A1%E4%BE%8B%E4%BF%AE%E6%94%B9%23) `680.3K 🔥`
1. [建议开车一定要远离马路牙子](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%BC%80%E8%BD%A6%E4%B8%80%E5%AE%9A%E8%A6%81%E8%BF%9C%E7%A6%BB%E9%A9%AC%E8%B7%AF%E7%89%99%E5%AD%90%23) `344.0K 🔥`
1. [书卷一梦全台陆剧收视冠军 ("Shujuan Yimeng" ranks first among Taiwanese mainland dramas in ratings)](https://s.weibo.com/weibo?q=%23%E4%B9%A6%E5%8D%B7%E4%B8%80%E6%A2%A6%E5%85%A8%E5%8F%B0%E9%99%86%E5%89%A7%E6%94%B6%E8%A7%86%E5%86%A0%E5%86%9B%23) `284.7K 🔥`
1. [刘亦菲整个团队都穿黑色](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E6%95%B4%E4%B8%AA%E5%9B%A2%E9%98%9F%E9%83%BD%E7%A9%BF%E9%BB%91%E8%89%B2%23) `282.8K 🔥`
1. [轻伤二级已经很严重了](https://s.weibo.com/weibo?q=%23%E8%BD%BB%E4%BC%A4%E4%BA%8C%E7%BA%A7%E5%B7%B2%E7%BB%8F%E5%BE%88%E4%B8%A5%E9%87%8D%E4%BA%86%23) `281.2K 🔥`
1. [郭敬明把艾米婴儿肥减没了](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E6%8A%8A%E8%89%BE%E7%B1%B3%E5%A9%B4%E5%84%BF%E8%82%A5%E5%87%8F%E6%B2%A1%E4%BA%86%23) `279.7K 🔥`
1. [手机价格涨20%以上 (Mobile phone prices increased by more than 20%)](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E4%BB%B7%E6%A0%BC%E6%B6%A820%25%E4%BB%A5%E4%B8%8A%23) `276.6K 🔥`
1. [吴磊宋祖儿 京洛再无佳人 (Wu Lei and Song Zuer, there is no beauty in Beijing and Luo)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E7%A3%8A%E5%AE%8B%E7%A5%96%E5%84%BF%20%E4%BA%AC%E6%B4%9B%E5%86%8D%E6%97%A0%E4%BD%B3%E4%BA%BA%23) `275.1K 🔥`
1. [小米Q2净利润62亿](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3Q2%E5%87%80%E5%88%A9%E6%B6%A662%E4%BA%BF%23) `274.7K 🔥`
1. [时代少年团工作人员行程 (Times Youth League staff itinerary)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E8%A1%8C%E7%A8%8B%23) `269.8K 🔥`
1. [涉侵害女性的酒局到底发生了什么 (What happened at the bar where women were assaulted?)](https://s.weibo.com/weibo?q=%23%E6%B6%89%E4%BE%B5%E5%AE%B3%E5%A5%B3%E6%80%A7%E7%9A%84%E9%85%92%E5%B1%80%E5%88%B0%E5%BA%95%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88%23) `268.6K 🔥`
1. [虞书欣Esther House上线](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3Esther%20House%E4%B8%8A%E7%BA%BF%23) `266.7K 🔥`
1. [苹果公布16款设备将停止系统更新](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%85%AC%E5%B8%8316%E6%AC%BE%E8%AE%BE%E5%A4%87%E5%B0%86%E5%81%9C%E6%AD%A2%E7%B3%BB%E7%BB%9F%E6%9B%B4%E6%96%B0%23) `263.5K 🔥`
1. [何炅提问谁是何炅接班人 (He Jiong asked who is He Jiong’s successor?)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E6%8F%90%E9%97%AE%E8%B0%81%E6%98%AF%E4%BD%95%E7%82%85%E6%8E%A5%E7%8F%AD%E4%BA%BA%23) `261.5K 🔥`
1. [幸运咖 阴阳瑞幸](https://s.weibo.com/weibo?q=%23%E5%B9%B8%E8%BF%90%E5%92%96%20%E9%98%B4%E9%98%B3%E7%91%9E%E5%B9%B8%23) `259.8K 🔥`
1. [让迪丽热巴涨粉八百万的台词](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%B6%A8%E7%B2%89%E5%85%AB%E7%99%BE%E4%B8%87%E7%9A%84%E5%8F%B0%E8%AF%8D%23) `258.2K 🔥`
1. [小米Q2营收1089亿元](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3Q2%E8%90%A5%E6%94%B61089%E4%BA%BF%E5%85%83%23) `256.5K 🔥`
1. [王橹杰的耳夹是发夹 (Wang Lujie’s ear clips are hair clips)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%9A%84%E8%80%B3%E5%A4%B9%E6%98%AF%E5%8F%91%E5%A4%B9%23) `255.7K 🔥`
1. [以为是姐弟结果是母子](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BA%E6%98%AF%E5%A7%90%E5%BC%9F%E7%BB%93%E6%9E%9C%E6%98%AF%E6%AF%8D%E5%AD%90%23) `253.6K 🔥`
1. [林志颖说小儿子可能当韩国练习生](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%BF%97%E9%A2%96%E8%AF%B4%E5%B0%8F%E5%84%BF%E5%AD%90%E5%8F%AF%E8%83%BD%E5%BD%93%E9%9F%A9%E5%9B%BD%E7%BB%83%E4%B9%A0%E7%94%9F%23) `252.8K 🔥`
1. [多方回应副区长卷入杭州地产酒局 (Many parties responded to the deputy district chief’s involvement in the Hangzhou Real Estate and Wine Bureau)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%94%E5%89%AF%E5%8C%BA%E9%95%BF%E5%8D%B7%E5%85%A5%E6%9D%AD%E5%B7%9E%E5%9C%B0%E4%BA%A7%E9%85%92%E5%B1%80%23) `250.8K 🔥`
1. [易立竞当面拆穿蓝盈莹](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%AB%8B%E7%AB%9E%E5%BD%93%E9%9D%A2%E6%8B%86%E7%A9%BF%E8%93%9D%E7%9B%88%E8%8E%B9%23) `249.1K 🔥`
1. [七夕其实是女生的事业节](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%E5%85%B6%E5%AE%9E%E6%98%AF%E5%A5%B3%E7%94%9F%E7%9A%84%E4%BA%8B%E4%B8%9A%E8%8A%82%23) `246.8K 🔥`
1. [赵某峰郁某栋被刑拘 (Zhao Moufeng and Yu Moudong were detained)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%9F%90%E5%B3%B0%E9%83%81%E6%9F%90%E6%A0%8B%E8%A2%AB%E5%88%91%E6%8B%98%23) `245.6K 🔥`
1. [曝TF四代27年出道战](https://s.weibo.com/weibo?q=%23%E6%9B%9DTF%E5%9B%9B%E4%BB%A327%E5%B9%B4%E5%87%BA%E9%81%93%E6%88%98%23) `238.5K 🔥`
1. [我真的抠抠搜搜花了很多钱](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9C%9F%E7%9A%84%E6%8A%A0%E6%8A%A0%E6%90%9C%E6%90%9C%E8%8A%B1%E4%BA%86%E5%BE%88%E5%A4%9A%E9%92%B1%23) `235.6K 🔥`
1. [张子枫长发以为内娱上新了 (Zhang Zifeng has long hair and thinks there is something new in domestic entertainment)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E6%9E%AB%E9%95%BF%E5%8F%91%E4%BB%A5%E4%B8%BA%E5%86%85%E5%A8%B1%E4%B8%8A%E6%96%B0%E4%BA%86%23) `234.6K 🔥`
1. [小米财报](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E8%B4%A2%E6%8A%A5%23) `230.3K 🔥`
1. [花开锦绣](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%23) `229.5K 🔥`
1. [姚琛陪曾辉练到半夜](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E7%90%9B%E9%99%AA%E6%9B%BE%E8%BE%89%E7%BB%83%E5%88%B0%E5%8D%8A%E5%A4%9C%23) `227.0K 🔥`
1. [调查组通报杭州酒局事件 (Investigation team reports incident at Hangzhou Wine Bureau)](https://s.weibo.com/weibo?q=%23%E8%B0%83%E6%9F%A5%E7%BB%84%E9%80%9A%E6%8A%A5%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E4%BA%8B%E4%BB%B6%23) `10.3M 🔥` `-22%`
1. [离异家庭的底线是保护好孩子 (The bottom line for divorced families is to protect their children)](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E5%BC%82%E5%AE%B6%E5%BA%AD%E7%9A%84%E5%BA%95%E7%BA%BF%E6%98%AF%E4%BF%9D%E6%8A%A4%E5%A5%BD%E5%AD%A9%E5%AD%90%23) `2.2M 🔥` `-21%`
1. [杭州酒局事件](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E4%BA%8B%E4%BB%B6%23) `237.4K 🔥` `-23%`

Updated at 2026-08-18 19:45:53

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
