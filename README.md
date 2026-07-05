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

1. [内马尔 (Neymar)](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%23) `2.6M 🔥` `NEW`
1. [哈兰德梅开二度](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E6%A2%85%E5%BC%80%E4%BA%8C%E5%BA%A6%23) `2.2M 🔥` `NEW`
1. [内马尔哭了](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E5%93%AD%E4%BA%86%23) `2.1M 🔥` `NEW`
1. [你刷到的内幕可能是AI编的](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E5%88%B7%E5%88%B0%E7%9A%84%E5%86%85%E5%B9%95%E5%8F%AF%E8%83%BD%E6%98%AFAI%E7%BC%96%E7%9A%84%23) `1.2M 🔥` `NEW`
1. [哈兰德](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%23) `1.2M 🔥` `NEW`
1. [巴西1比2挪威](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF1%E6%AF%942%E6%8C%AA%E5%A8%81%23) `1.1M 🔥` `NEW`
1. [内马尔替补出场](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E6%9B%BF%E8%A1%A5%E5%87%BA%E5%9C%BA%23) `742.1K 🔥` `NEW`
1. [巴西淘汰](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E6%B7%98%E6%B1%B0%23) `339.7K 🔥` `NEW`
1. [哈兰德头球破门](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%A4%B4%E7%90%83%E7%A0%B4%E9%97%A8%23) `338.2K 🔥` `NEW`
1. [挪威淘汰巴西](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81%E6%B7%98%E6%B1%B0%E5%B7%B4%E8%A5%BF%23) `112.8K 🔥` `NEW`
1. [哈兰德又双响了 (Haaland doubles again)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E5%8F%88%E5%8F%8C%E5%93%8D%E4%BA%86%23) `77.0K 🔥` `NEW`
1. [挪威领先巴西](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81%E9%A2%86%E5%85%88%E5%B7%B4%E8%A5%BF%23) `55.1K 🔥` `NEW`
1. [巴西VS挪威 (Brazil vs Norway)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BFVS%E6%8C%AA%E5%A8%81%23) `9.1M 🔥` `+507%`
1. [数说中国经济6月成绩单 (Numbers say China’s economic report card for June)](https://s.weibo.com/weibo?q=%23%E6%95%B0%E8%AF%B4%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E6%E6%9C%88%E6%88%90%E7%BB%A9%E5%8D%95%23) `2.3M 🔥` `+743%`
1. [巴西点球不进](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E7%82%B9%E7%90%83%E4%B8%8D%E8%BF%9B%23) `1.3M 🔥` `+182%`
1. [孙颖莎晋级美国大满贯决赛](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E6%99%8B%E7%BA%A7%E7%BE%8E%E5%9B%BD%E5%A4%A7%E6%BB%A1%E8%B4%AF%E5%86%B3%E8%B5%9B%23) `509.3K 🔥` `+260%`
1. [孙颖莎4比1王艺迪](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E4%E6%AF%941%E7%8E%8B%E8%89%BA%E8%BF%AA%23) `142.0K 🔥` `+105%`
1. [张新成演唱会翻唱率 (Zhang Xincheng's concert cover rate)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%96%B0%E6%88%90%E6%BC%94%E5%94%B1%E4%BC%9A%E7%BF%BB%E5%94%B1%E7%8E%87%23) `112.4K 🔥` `+80%`
1. [LV在中国疯狂打官司](https://s.weibo.com/weibo?q=%23LV%E5%9C%A8%E4%B8%AD%E5%9B%BD%E7%96%AF%E7%8B%82%E6%89%93%E5%AE%98%E5%8F%B8%23) `100.8K 🔥` `+67%`
1. [未发现蒋方舟存在学术不端行为 (No academic misconduct was found by Jiang Fangzhou)](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E5%8F%91%E7%8E%B0%E8%92%8B%E6%96%B9%E8%88%9F%E5%AD%98%E5%9C%A8%E5%AD%A6%E6%9C%AF%E4%B8%8D%E7%AB%AF%E8%A1%8C%E4%B8%BA%23) `97.3K 🔥` `+104%`
1. [虞书欣陈靖可灿如繁星热度破7400 (Yu Shuxin and Chen Jingke are as bright as stars and their popularity exceeded 7400)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E9%99%88%E9%9D%96%E5%8F%AF%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%E7%83%AD%E5%BA%A6%E7%A0%B47400%23) `91.9K 🔥` `+90%`
1. [物价悄悄上涨真的很可怕 (It’s really scary that prices are rising quietly)](https://s.weibo.com/weibo?q=%23%E7%89%A9%E4%BB%B7%E6%82%84%E6%82%84%E4%B8%8A%E6%B6%A8%E7%9C%9F%E7%9A%84%E5%BE%88%E5%8F%AF%E6%80%95%23) `91.9K 🔥` `+116%`
1. [理解人性是一种永远吃香的能力](https://s.weibo.com/weibo?q=%23%E7%90%86%E8%A7%A3%E4%BA%BA%E6%80%A7%E6%98%AF%E4%B8%80%E7%A7%8D%E6%B0%B8%E8%BF%9C%E5%90%83%E9%A6%99%E7%9A%84%E8%83%BD%E5%8A%9B%23) `86.8K 🔥` `+64%`
1. [司机回应李要得50万奖金分配 (The driver responded that Li wanted 500,000 bonus distribution)](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E6%9C%BA%E5%9B%9E%E5%BA%94%E6%9D%8E%E8%A6%81%E5%BE%9750%E4%B8%87%E5%A5%96%E9%87%91%E5%88%86%E9%85%8D%23) `78.8K 🔥` `+28%`
1. [绵竹地震](https://s.weibo.com/weibo?q=%23%E7%BB%B5%E7%AB%B9%E5%9C%B0%E9%9C%87%23) `77.2K 🔥` `+127%`
1. [虞书欣蚌精仿妆](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%9A%8C%E7%B2%BE%E4%BB%BF%E5%A6%86%23) `72.0K 🔥` `+69%`
1. [绵竹半小时三震](https://s.weibo.com/weibo?q=%23%E7%BB%B5%E7%AB%B9%E5%8D%8A%E5%B0%8F%E6%97%B6%E4%B8%89%E9%9C%87%23) `68.2K 🔥` `+61%`
1. [哈兰德说被加布抓伤对女友难交代 (Haaland says being scratched by Gabe is hard for his girlfriend to explain)](https://s.weibo.com/weibo?q=%23%E5%93%88%E5%85%B0%E5%BE%B7%E8%AF%B4%E8%A2%AB%E5%8A%A0%E5%B8%83%E6%8A%93%E4%BC%A4%E5%AF%B9%E5%A5%B3%E5%8F%8B%E9%9A%BE%E4%BA%A4%E4%BB%A3%23) `62.4K 🔥` `+32%`
1. [挪威破门被秒吹 (Norway scored and was blown away instantly)](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E5%A8%81%E7%A0%B4%E9%97%A8%E8%A2%AB%E7%A7%92%E5%90%B9%23) `60.4K 🔥` `+78%`
1. [义乌缝纫机被踩到冒烟](https://s.weibo.com/weibo?q=%23%E4%B9%89%E4%B9%8C%E7%BC%9D%E7%BA%AB%E6%9C%BA%E8%A2%AB%E8%B8%A9%E5%88%B0%E5%86%92%E7%83%9F%23) `58.2K 🔥` `+72%`
1. [长期关系的本质是什么 (What is the nature of a long-term relationship?)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E5%85%B3%E7%B3%BB%E7%9A%84%E6%9C%AC%E8%B4%A8%E6%98%AF%E4%BB%80%E4%B9%88%23) `53.0K 🔥` `+47%`
1. [野狗骨头](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%23) `52.5K 🔥` `+42%`
1. [热水器付了钱10年后才想到提货](https://s.weibo.com/weibo?q=%23%E7%83%AD%E6%B0%B4%E5%99%A8%E4%BB%98%E4%BA%86%E9%92%B110%E5%B9%B4%E5%90%8E%E6%89%8D%E6%83%B3%E5%88%B0%E6%8F%90%E8%B4%A7%23) `52.5K 🔥` `+55%`
1. [王力宏缝了39针](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E7%BC%9D%E4%BA%8639%E9%92%88%23) `52.5K 🔥` `+36%`
1. [卫生巾应该分坐用跟躺用](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E7%94%9F%E5%B7%BE%E5%BA%94%E8%AF%A5%E5%88%86%E5%9D%90%E7%94%A8%E8%B7%9F%E8%BA%BA%E7%94%A8%23) `52.5K 🔥` `+54%`
1. [凌晨5点的咖啡店](https://s.weibo.com/weibo?q=%23%E5%87%8C%E6%99%A85%E7%82%B9%E7%9A%84%E5%92%96%E5%95%A1%E5%BA%97%23) `52.5K 🔥` `+23%`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `52.5K 🔥` `+48%`
1. [一调多用 (One tune for multiple uses)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%B0%83%E5%A4%9A%E7%94%A8%23) `52.5K 🔥` `+55%`
1. [F1](https://s.weibo.com/weibo?q=%23F1%23) `52.5K 🔥` `+54%`
1. [成都震感](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E9%9C%87%E6%84%9F%23) `52.5K 🔥` `+53%`
1. [计算机跌出本科专业月收入前十 (Computer science falls out of the top ten monthly income undergraduate majors)](https://s.weibo.com/weibo?q=%23%E8%AE%A1%E7%AE%97%E6%9C%BA%E8%B7%8C%E5%87%BA%E6%9C%AC%E7%A7%91%E4%B8%93%E4%B8%9A%E6%9C%88%E6%94%B6%E5%85%A5%E5%89%8D%E5%8D%81%23) `52.5K 🔥` `+55%`
1. [王曼昱首位集齐五大满贯女双 (Wang Manyu is the first to collect all five Grand Slam women's doubles)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E9%A6%96%E4%BD%8D%E9%9B%86%E9%BD%90%E4%BA%94%E5%A4%A7%E6%BB%A1%E8%B4%AF%E5%A5%B3%E5%8F%8C%23) `52.5K 🔥` `+55%`
1. [田曦薇黄明昊向王安宇道歉 (Tian Xiwei and Huang Minghao apologized to Wang Anyu)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E9%BB%84%E6%98%8E%E6%98%8A%E5%90%91%E7%8E%8B%E5%AE%89%E5%AE%87%E9%81%93%E6%AD%89%23) `52.5K 🔥` `+54%`
1. [野狗骨头收视率 (Dingo Bones Ratings)](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E6%94%B6%E8%A7%86%E7%8E%87%23) `52.5K 🔥` `+54%`
1. [我欲乘风](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%AC%B2%E4%B9%98%E9%A3%8E%23) `52.5K 🔥` `+55%`
1. [有线耳机此生从此分明了 (Wired headphones are now clear in this life)](https://s.weibo.com/weibo?q=%23%E6%9C%89%E7%BA%BF%E8%80%B3%E6%9C%BA%E6%AD%A4%E7%94%9F%E4%BB%8E%E6%AD%A4%E5%88%86%E6%98%8E%E4%BA%86%23) `151.6K 🔥`
1. [19块的外卖用玻璃罐装 (19 yuan takeaway in glass jar)](https://s.weibo.com/weibo?q=%2319%E5%9D%97%E7%9A%84%E5%A4%96%E5%8D%96%E7%94%A8%E7%8E%BB%E7%92%83%E7%BD%90%E8%A3%85%23) `142.0K 🔥`
1. [藏马熊进酒店跟开罐头似的](https://s.weibo.com/weibo?q=%23%E8%97%8F%E9%A9%AC%E7%86%8A%E8%BF%9B%E9%85%92%E5%BA%97%E8%B7%9F%E5%BC%80%E7%BD%90%E5%A4%B4%E4%BC%BC%E7%9A%84%23) `65.4K 🔥`
1. [佛得角队在机场被疯狂包围 (Cape Verde team surrounded by madness at airport)](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%98%9F%E5%9C%A8%E6%9C%BA%E5%9C%BA%E8%A2%AB%E7%96%AF%E7%8B%82%E5%8C%85%E5%9B%B4%23) `64.1K 🔥`
1. [TCL回应国家一级文物上有其广告](https://s.weibo.com/weibo?q=%23TCL%E5%9B%9E%E5%BA%94%E5%9B%BD%E5%AE%B6%E4%B8%80%E7%BA%A7%E6%96%87%E7%89%A9%E4%B8%8A%E6%9C%89%E5%85%B6%E5%B9%BF%E5%91%8A%23) `54.9K 🔥`
1. [巴西半场0比0挪威](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E5%8D%8A%E5%9C%BA0%E6%AF%940%E6%8C%AA%E5%A8%81%23) `54.8K 🔥` `-27%`

Updated at 2026-07-06 06:41:43

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
