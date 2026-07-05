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

1. [绵竹地震 (Mianzhu earthquake)](https://s.weibo.com/weibo?q=%23%E7%BB%B5%E7%AB%B9%E5%9C%B0%E9%9C%87%23) `12.8M 🔥` `NEW`
1. [成都震感](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E9%9C%87%E6%84%9F%23) `2.1M 🔥` `NEW`
1. [数说中国经济6月成绩单](https://s.weibo.com/weibo?q=%23%E6%95%B0%E8%AF%B4%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E6%E6%9C%88%E6%88%90%E7%BB%A9%E5%8D%95%23) `1.7M 🔥` `NEW`
1. [佛得角队在机场被疯狂包围](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%98%9F%E5%9C%A8%E6%9C%BA%E5%9C%BA%E8%A2%AB%E7%96%AF%E7%8B%82%E5%8C%85%E5%9B%B4%23) `460.0K 🔥` `NEW`
1. [迪丽热巴全程都很不自在](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%85%A8%E7%A8%8B%E9%83%BD%E5%BE%88%E4%B8%8D%E8%87%AA%E5%9C%A8%23) `338.5K 🔥` `NEW`
1. [绵阳震感](https://s.weibo.com/weibo?q=%23%E7%BB%B5%E9%98%B3%E9%9C%87%E6%84%9F%23) `336.2K 🔥` `NEW`
1. [绵竹还让不让人睡了](https://s.weibo.com/weibo?q=%23%E7%BB%B5%E7%AB%B9%E8%BF%98%E8%AE%A9%E4%B8%8D%E8%AE%A9%E4%BA%BA%E7%9D%A1%E4%BA%86%23) `334.4K 🔥` `NEW`
1. [F1](https://s.weibo.com/weibo?q=%23F1%23) `328.6K 🔥` `NEW`
1. [有线耳机此生从此分明了](https://s.weibo.com/weibo?q=%23%E6%9C%89%E7%BA%BF%E8%80%B3%E6%9C%BA%E6%AD%A4%E7%94%9F%E4%BB%8E%E6%AD%A4%E5%88%86%E6%98%8E%E4%BA%86%23) `326.6K 🔥` `NEW`
1. [男子曾承认养6年儿子非亲生是剧本](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%9B%BE%E6%89%BF%E8%AE%A4%E5%85%BB6%E5%B9%B4%E5%84%BF%E5%AD%90%E9%9D%9E%E4%BA%B2%E7%94%9F%E6%98%AF%E5%89%A7%E6%9C%AC%23) `321.7K 🔥` `NEW`
1. [四川绵竹4.7级左右地震 (An earthquake of around 4.7 magnitude occurred in Mianzhu, Sichuan)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E7%BB%B5%E7%AB%B94.7%E7%BA%A7%E5%B7%A6%E5%8F%B3%E5%9C%B0%E9%9C%87%23) `320.5K 🔥` `NEW`
1. [虞书欣蚌精仿妆](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%9A%8C%E7%B2%BE%E4%BB%BF%E5%A6%86%23) `312.9K 🔥` `NEW`
1. [TF四代将重组一二班](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E5%B0%86%E9%87%8D%E7%BB%84%E4%B8%80%E4%BA%8C%E7%8F%AD%23) `297.9K 🔥` `NEW`
1. [计算机跌出本科专业月收入前十](https://s.weibo.com/weibo?q=%23%E8%AE%A1%E7%AE%97%E6%9C%BA%E8%B7%8C%E5%87%BA%E6%9C%AC%E7%A7%91%E4%B8%93%E4%B8%9A%E6%9C%88%E6%94%B6%E5%85%A5%E5%89%8D%E5%8D%81%23) `296.9K 🔥` `NEW`
1. [郭宇欣资源](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AE%87%E6%AC%A3%E8%B5%84%E6%BA%90%23) `296.1K 🔥` `NEW`
1. [我欲乘风](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%AC%B2%E4%B9%98%E9%A3%8E%23) `249.2K 🔥` `NEW`
1. [长期关系的本质是什么](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E5%85%B3%E7%B3%BB%E7%9A%84%E6%9C%AC%E8%B4%A8%E6%98%AF%E4%BB%80%E4%B9%88%23) `229.5K 🔥` `NEW`
1. [沈梦瑶工作室声明](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%A2%A6%E7%91%B6%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%A3%B0%E6%98%8E%23) `215.1K 🔥` `NEW`
1. [野狗骨头cp名 陈靖可](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4cp%E5%90%8D%20%E9%99%88%E9%9D%96%E5%8F%AF%23) `201.5K 🔥` `NEW`
1. [司机回应李要得50万奖金分配](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E6%9C%BA%E5%9B%9E%E5%BA%94%E6%9D%8E%E8%A6%81%E5%BE%9750%E4%B8%87%E5%A5%96%E9%87%91%E5%88%86%E9%85%8D%23) `195.0K 🔥` `NEW`
1. [蒋敦豪鹭卓李耕耘版燃冬 (Jiang Dunhao, Lu Zhuo, Li Gengyun version burns the winter)](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%95%A6%E8%B1%AA%E9%B9%AD%E5%8D%93%E6%9D%8E%E8%80%95%E8%80%98%E7%89%88%E7%87%83%E5%86%AC%23) `165.2K 🔥` `NEW`
1. [19块的外卖用玻璃罐装](https://s.weibo.com/weibo?q=%2319%E5%9D%97%E7%9A%84%E5%A4%96%E5%8D%96%E7%94%A8%E7%8E%BB%E7%92%83%E7%BD%90%E8%A3%85%23) `571.1K 🔥` `+110%`
1. [伊朗已故最高领袖哈梅内伊三子现身](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%B7%B2%E6%95%85%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E4%B8%89%E5%AD%90%E7%8E%B0%E8%BA%AB%23) `325.6K 🔥` `+25%`
1. [美国父母早上吸毒18个月婴儿溺水](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%88%B6%E6%AF%8D%E6%97%A9%E4%B8%8A%E5%90%B8%E6%AF%9218%E4%B8%AA%E6%9C%88%E5%A9%B4%E5%84%BF%E6%BA%BA%E6%B0%B4%23) `297.0K 🔥` `+21%`
1. [智能体下线与责任之争](https://s.weibo.com/weibo?q=%23%E6%99%BA%E8%83%BD%E4%BD%93%E4%B8%8B%E7%BA%BF%E4%B8%8E%E8%B4%A3%E4%BB%BB%E4%B9%8B%E4%BA%89%23) `296.9K 🔥` `+52%`
1. [张新成演唱会翻唱率](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%96%B0%E6%88%90%E6%BC%94%E5%94%B1%E4%BC%9A%E7%BF%BB%E5%94%B1%E7%8E%87%23) `972.1K 🔥`
1. [短发哈兰德将对阵巴西](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%8F%91%E5%93%88%E5%85%B0%E5%BE%B7%E5%B0%86%E5%AF%B9%E9%98%B5%E5%B7%B4%E8%A5%BF%23) `500.9K 🔥`
1. [我欲乘风男主](https://s.weibo.com/weibo?q=%23%E6%88%91%E6%AC%B2%E4%B9%98%E9%A3%8E%E7%94%B7%E4%B8%BB%23) `338.9K 🔥`
1. [霉霉婚前协议堪称史上最复杂](https://s.weibo.com/weibo?q=%23%E9%9C%89%E9%9C%89%E5%A9%9A%E5%89%8D%E5%8D%8F%E8%AE%AE%E5%A0%AA%E7%A7%B0%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%A4%8D%E6%9D%82%23) `335.4K 🔥`
1. [迪丽热巴深V开到腰了 (Dilireba’s deep V-cut reaches to her waist)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%B7%B1V%E5%BC%80%E5%88%B0%E8%85%B0%E4%BA%86%23) `330.6K 🔥`
1. [王力宏缝了39针 (Wang Leehom received 39 stitches)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E7%BC%9D%E4%BA%8639%E9%92%88%23) `329.0K 🔥`
1. [物价悄悄上涨真的很可怕](https://s.weibo.com/weibo?q=%23%E7%89%A9%E4%BB%B7%E6%82%84%E6%82%84%E4%B8%8A%E6%B6%A8%E7%9C%9F%E7%9A%84%E5%BE%88%E5%8F%AF%E6%80%95%23) `323.4K 🔥`
1. [霉霉婚礼现场照片被泄漏 (Swift's wedding photos leaked)](https://s.weibo.com/weibo?q=%23%E9%9C%89%E9%9C%89%E5%A9%9A%E7%A4%BC%E7%8E%B0%E5%9C%BA%E7%85%A7%E7%89%87%E8%A2%AB%E6%B3%84%E6%BC%8F%23) `322.1K 🔥`
1. [野狗骨头没错这就是南方烧烤 (Dingo Bones, yes, this is Southern BBQ.)](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E6%B2%A1%E9%94%99%E8%BF%99%E5%B0%B1%E6%98%AF%E5%8D%97%E6%96%B9%E7%83%A7%E7%83%A4%23) `320.0K 🔥`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `279.8K 🔥`
1. [田曦薇黄明昊向王安宇道歉](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E9%BB%84%E6%98%8E%E6%98%8A%E5%90%91%E7%8E%8B%E5%AE%89%E5%AE%87%E9%81%93%E6%AD%89%23) `228.3K 🔥`
1. [卫生巾应该分坐用跟躺用](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E7%94%9F%E5%B7%BE%E5%BA%94%E8%AF%A5%E5%88%86%E5%9D%90%E7%94%A8%E8%B7%9F%E8%BA%BA%E7%94%A8%23) `226.3K 🔥`
1. [张丰毅70岁状态](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%B8%B0%E6%AF%8570%E5%B2%81%E7%8A%B6%E6%80%81%23) `176.4K 🔥`
1. [企业把核心数据交给闭源大模型](https://s.weibo.com/weibo?q=%23%E4%BC%81%E4%B8%9A%E6%8A%8A%E6%A0%B8%E5%BF%83%E6%95%B0%E6%8D%AE%E4%BA%A4%E7%BB%99%E9%97%AD%E6%BA%90%E5%A4%A7%E6%A8%A1%E5%9E%8B%23) `149.9K 🔥`
1. [未发现蒋方舟存在学术不端行为 (No academic misconduct was found by Jiang Fangzhou)](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E5%8F%91%E7%8E%B0%E8%92%8B%E6%96%B9%E8%88%9F%E5%AD%98%E5%9C%A8%E5%AD%A6%E6%9C%AF%E4%B8%8D%E7%AB%AF%E8%A1%8C%E4%B8%BA%23) `541.2K 🔥` `-63%`
1. [熬夜精力续航计划](https://s.weibo.com/weibo?q=%23%E7%86%AC%E5%A4%9C%E7%B2%BE%E5%8A%9B%E7%BB%AD%E8%88%AA%E8%AE%A1%E5%88%92%23) `526.3K 🔥` `-23%`
1. [野狗骨头收视率](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%E6%94%B6%E8%A7%86%E7%8E%87%23) `493.0K 🔥` `-53%`
1. [微信能不能别给表情取名字了](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%83%BD%E4%B8%8D%E8%83%BD%E5%88%AB%E7%BB%99%E8%A1%A8%E6%83%85%E5%8F%96%E5%90%8D%E5%AD%97%E4%BA%86%23) `332.5K 🔥` `-47%`
1. [巴拉圭第99分钟了还在扒拉](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%8B%89%E5%9C%AD%E7%AC%AC99%E5%88%86%E9%92%9F%E4%BA%86%E8%BF%98%E5%9C%A8%E6%89%92%E6%8B%89%23) `298.0K 🔥` `-61%`
1. [灿如繁星 (as bright as stars)](https://s.weibo.com/weibo?q=%23%E7%81%BF%E5%A6%82%E7%B9%81%E6%98%9F%23) `237.3K 🔥` `-35%`
1. [王橹杰第五名](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%AC%AC%E4%BA%94%E5%90%8D%23) `218.7K 🔥` `-24%`
1. [已经对所有自助烤肉祛魅了](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E7%BB%8F%E5%AF%B9%E6%89%80%E6%9C%89%E8%87%AA%E5%8A%A9%E7%83%A4%E8%82%89%E7%A5%9B%E9%AD%85%E4%BA%86%23) `182.4K 🔥` `-47%`
1. [U17国足3比0澳大利亚](https://s.weibo.com/weibo?q=%23U17%E5%9B%BD%E8%B6%B33%E6%AF%940%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%23) `158.0K 🔥` `-38%`
1. [陈奕恒陈浚铭陈思罕二班 (Chen Yiheng, Chen Junming, Chen Sihan, Class 2)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A5%95%E6%81%92%E9%99%88%E6%B5%9A%E9%93%AD%E9%99%88%E6%80%9D%E7%BD%95%E4%BA%8C%E7%8F%AD%23) `156.2K 🔥` `-51%`
1. [特朗普将自己头像加在林肯旁边](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%B0%86%E8%87%AA%E5%B7%B1%E5%A4%B4%E5%83%8F%E5%8A%A0%E5%9C%A8%E6%9E%97%E8%82%AF%E6%97%81%E8%BE%B9%23) `155.0K 🔥` `-52%`
1. [日产赛道电驱体验官](https://s.weibo.com/weibo?q=%23%E6%97%A5%E4%BA%A7%E8%B5%9B%E9%81%93%E7%94%B5%E9%A9%B1%E4%BD%93%E9%AA%8C%E5%AE%98%23) `153.3K 🔥` `-57%`

Updated at 2026-07-05 23:53:04

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
