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

1. [荣耀更换logo (Honor changes logo)](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80%E6%9B%B4%E6%8D%A2logo%23) `821.9K 🔥` `NEW`
1. [共赴亚太数字之约](https://s.weibo.com/weibo?q=%23%E5%85%B1%E8%B5%B4%E4%BA%9A%E5%A4%AA%E6%95%B0%E5%AD%97%E4%B9%8B%E7%BA%A6%23) `680.1K 🔥` `NEW`
1. [其实不想上班根本不需要辞职](https://s.weibo.com/weibo?q=%23%E5%85%B6%E5%AE%9E%E4%B8%8D%E6%83%B3%E4%B8%8A%E7%8F%AD%E6%A0%B9%E6%9C%AC%E4%B8%8D%E9%9C%80%E8%A6%81%E8%BE%9E%E8%81%8C%23) `636.8K 🔥` `NEW`
1. [王楚然让张凌赫身上痒就去洗澡](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E8%AE%A9%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%BA%AB%E4%B8%8A%E7%97%92%E5%B0%B1%E5%8E%BB%E6%B4%97%E6%BE%A1%23) `487.5K 🔥` `NEW`
1. [今日辟谣](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E6%97%A5%E8%BE%9F%E8%B0%A3%23) `465.4K 🔥` `NEW`
1. [王楚钦回应1比2徐海东](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%9B%9E%E5%BA%941%E6%AF%942%E5%BE%90%E6%B5%B7%E4%B8%9C%23) `436.6K 🔥` `NEW`
1. [广州文旅编辑王俊凯演唱会](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E6%96%87%E6%97%85%E7%BC%96%E8%BE%91%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%BC%94%E5%94%B1%E4%BC%9A%23) `409.4K 🔥` `NEW`
1. [时代峰峻学历排行榜](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%AD%A6%E5%8E%86%E6%8E%92%E8%A1%8C%E6%A6%9C%23) `390.2K 🔥` `NEW`
1. [清华毕业生李龙被北大医学部录取](https://s.weibo.com/weibo?q=%23%E6%B8%85%E5%8D%8E%E6%AF%95%E4%B8%9A%E7%94%9F%E6%9D%8E%E9%BE%99%E8%A2%AB%E5%8C%97%E5%A4%A7%E5%8C%BB%E5%AD%A6%E9%83%A8%E5%BD%95%E5%8F%96%23) `384.1K 🔥` `NEW`
1. [前经纪人怒斥王菲破坏锋芝婚姻谣言](https://s.weibo.com/weibo?q=%23%E5%89%8D%E7%BB%8F%E7%BA%AA%E4%BA%BA%E6%80%92%E6%96%A5%E7%8E%8B%E8%8F%B2%E7%A0%B4%E5%9D%8F%E9%94%8B%E8%8A%9D%E5%A9%9A%E5%A7%BB%E8%B0%A3%E8%A8%80%23) `382.7K 🔥` `NEW`
1. [虞书欣 丝巾当上衣穿 (Yu Shuxin wears silk scarf as top)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%20%E4%B8%9D%E5%B7%BE%E5%BD%93%E4%B8%8A%E8%A1%A3%E7%A9%BF%23) `379.7K 🔥` `NEW`
1. [AI工作台教程](https://s.weibo.com/weibo?q=%23AI%E5%B7%A5%E4%BD%9C%E5%8F%B0%E6%95%99%E7%A8%8B%23) `373.3K 🔥` `NEW`
1. [女子买一本刮刮乐第一张就中20万](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B9%B0%E4%B8%80%E6%9C%AC%E5%88%AE%E5%88%AE%E4%B9%90%E7%AC%AC%E4%B8%80%E5%BC%A0%E5%B0%B1%E4%B8%AD20%E4%B8%87%23) `373.1K 🔥` `NEW`
1. [演员寇占文被法院悬赏](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E5%AF%87%E5%8D%A0%E6%96%87%E8%A2%AB%E6%B3%95%E9%99%A2%E6%82%AC%E8%B5%8F%23) `370.9K 🔥` `NEW`
1. [耳石症自救方法](https://s.weibo.com/weibo?q=%23%E8%80%B3%E7%9F%B3%E7%97%87%E8%87%AA%E6%95%91%E6%96%B9%E6%B3%95%23) `369.1K 🔥` `NEW`
1. [白鹿碎花泳衣](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%A2%8E%E8%8A%B1%E6%B3%B3%E8%A1%A3%23) `366.3K 🔥` `NEW`
1. [外星人到底有没有认真找地球](https://s.weibo.com/weibo?q=%23%E5%A4%96%E6%98%9F%E4%BA%BA%E5%88%B0%E5%BA%95%E6%9C%89%E6%B2%A1%E6%9C%89%E8%AE%A4%E7%9C%9F%E6%89%BE%E5%9C%B0%E7%90%83%23) `364.3K 🔥` `NEW`
1. [开局之年看中国](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B1%80%E4%B9%8B%E5%B9%B4%E7%9C%8B%E4%B8%AD%E5%9B%BD%23) `363.9K 🔥` `NEW`
1. [密逃8热度](https://s.weibo.com/weibo?q=%23%E5%AF%86%E9%80%838%E7%83%AD%E5%BA%A6%23) `358.8K 🔥` `NEW`
1. [A股电网设备掀涨停潮](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E7%94%B5%E7%BD%91%E8%AE%BE%E5%A4%87%E6%8E%80%E6%B6%A8%E5%81%9C%E6%BD%AE%23) `356.6K 🔥` `NEW`
1. [邓超探班鹿晗音乐节 (Deng Chao visits Lu Han Music Festival)](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E6%8E%A2%E7%8F%AD%E9%B9%BF%E6%99%97%E9%9F%B3%E4%B9%90%E8%8A%82%23) `353.8K 🔥` `NEW`
1. [男子嫌弃母亲长相被老板辞退](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%AB%8C%E5%BC%83%E6%AF%8D%E4%BA%B2%E9%95%BF%E7%9B%B8%E8%A2%AB%E8%80%81%E6%9D%BF%E8%BE%9E%E9%80%80%23) `352.8K 🔥` `NEW`
1. [网传TF四代出演新版红楼梦](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0TF%E5%9B%9B%E4%BB%A3%E5%87%BA%E6%BC%94%E6%96%B0%E7%89%88%E7%BA%A2%E6%A5%BC%E6%A2%A6%23) `345.3K 🔥` `NEW`
1. [网传穆祉丞商务约签给和颂了](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E7%A9%86%E7%A5%89%E4%B8%9E%E5%95%86%E5%8A%A1%E7%BA%A6%E7%AD%BE%E7%BB%99%E5%92%8C%E9%A2%82%E4%BA%86%23) `341.1K 🔥` `NEW`
1. [Bin开始摆烂的原因](https://s.weibo.com/weibo?q=%23Bin%E5%BC%80%E5%A7%8B%E6%91%86%E7%83%82%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `340.0K 🔥` `NEW`
1. [中美正就降税安排征求意见](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E6%AD%A3%E5%B0%B1%E9%99%8D%E7%A8%8E%E5%AE%89%E6%8E%92%E5%BE%81%E6%B1%82%E6%84%8F%E8%A7%81%23) `338.1K 🔥` `NEW`
1. [目前看来AI还代替不了人类演戏](https://s.weibo.com/weibo?q=%23%E7%9B%AE%E5%89%8D%E7%9C%8B%E6%9D%A5AI%E8%BF%98%E4%BB%A3%E6%9B%BF%E4%B8%8D%E4%BA%86%E4%BA%BA%E7%B1%BB%E6%BC%94%E6%88%8F%23) `336.2K 🔥` `NEW`
1. [迪丽热巴发了八张比8暗号](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%8F%91%E4%BA%86%E5%85%AB%E5%BC%A0%E6%AF%948%E6%9A%97%E5%8F%B7%23) `332.2K 🔥` `NEW`
1. [郭碧婷说女儿很漂亮](https://s.weibo.com/weibo?q=%23%E9%83%AD%E7%A2%A7%E5%A9%B7%E8%AF%B4%E5%A5%B3%E5%84%BF%E5%BE%88%E6%BC%82%E4%BA%AE%23) `330.3K 🔥` `NEW`
1. [替你挡下所有肮脏 只愿你红得干净](https://s.weibo.com/weibo?q=%23%E6%9B%BF%E4%BD%A0%E6%8C%A1%E4%B8%8B%E6%89%80%E6%9C%89%E8%82%AE%E8%84%8F%20%E5%8F%AA%E6%84%BF%E4%BD%A0%E7%BA%A2%E5%BE%97%E5%B9%B2%E5%87%80%23) `328.0K 🔥` `NEW`
1. [旭旭宝宝传媒法务部已报案 (The legal department of Xuxu Baby Media has reported the case)](https://s.weibo.com/weibo?q=%23%E6%97%AD%E6%97%AD%E5%AE%9D%E5%AE%9D%E4%BC%A0%E5%AA%92%E6%B3%95%E5%8A%A1%E9%83%A8%E5%B7%B2%E6%8A%A5%E6%A1%88%23) `324.9K 🔥` `NEW`
1. [丁程鑫金靖杨超越误入巨人国](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E9%87%91%E9%9D%96%E6%9D%A8%E8%B6%85%E8%B6%8A%E8%AF%AF%E5%85%A5%E5%B7%A8%E4%BA%BA%E5%9B%BD%23) `324.1K 🔥` `NEW`
1. [泰国男子醉酒后抱蛇回家醒来懵了](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E7%94%B7%E5%AD%90%E9%86%89%E9%85%92%E5%90%8E%E6%8A%B1%E8%9B%87%E5%9B%9E%E5%AE%B6%E9%86%92%E6%9D%A5%E6%87%B5%E4%BA%86%23) `321.7K 🔥` `NEW`
1. [日本车企集体学中国](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%BD%A6%E4%BC%81%E9%9B%86%E4%BD%93%E5%AD%A6%E4%B8%AD%E5%9B%BD%23) `320.8K 🔥` `NEW`
1. [AI的七个弱点](https://s.weibo.com/weibo?q=%23AI%E7%9A%84%E4%B8%83%E4%B8%AA%E5%BC%B1%E7%82%B9%23) `318.0K 🔥` `NEW`
1. [男子对女同事开黄腔被打遭开除称不公](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%AF%B9%E5%A5%B3%E5%90%8C%E4%BA%8B%E5%BC%80%E9%BB%84%E8%85%94%E8%A2%AB%E6%89%93%E9%81%AD%E5%BC%80%E9%99%A4%E7%A7%B0%E4%B8%8D%E5%85%AC%23) `635.3K 🔥` `+103%`
1. [建议婚前谈话全国普及](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A9%9A%E5%89%8D%E8%B0%88%E8%AF%9D%E5%85%A8%E5%9B%BD%E6%99%AE%E5%8F%8A%23) `461.8K 🔥` `+33%`
1. [上海偶遇赞达亚荷兰弟](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%81%B6%E9%81%87%E8%B5%9E%E8%BE%BE%E4%BA%9A%E8%8D%B7%E5%85%B0%E5%BC%9F%23) `350.2K 🔥` `+58%`
1. [陈妍希姐姐追星张凌赫](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E5%A7%90%E5%A7%90%E8%BF%BD%E6%98%9F%E5%BC%A0%E5%87%8C%E8%B5%AB%23) `376.7K 🔥`
1. [个人贷款新规8月1日起施行 (New regulations on personal loans will come into effect on August 1)](https://s.weibo.com/weibo?q=%23%E4%B8%AA%E4%BA%BA%E8%B4%B7%E6%AC%BE%E6%96%B0%E8%A7%848%E6%9C%881%E6%97%A5%E8%B5%B7%E6%96%BD%E8%A1%8C%23) `333.7K 🔥`
1. [A380备降杭州乘客被困机舱10小时](https://s.weibo.com/weibo?q=%23A380%E5%A4%87%E9%99%8D%E6%9D%AD%E5%B7%9E%E4%B9%98%E5%AE%A2%E8%A2%AB%E5%9B%B0%E6%9C%BA%E8%88%B110%E5%B0%8F%E6%97%B6%23) `329.5K 🔥`
1. [滔搏暴力打折甩卖耐克库存 (Taobao violently discounts and sells Nike inventory)](https://s.weibo.com/weibo?q=%23%E6%BB%94%E6%90%8F%E6%9A%B4%E5%8A%9B%E6%89%93%E6%8A%98%E7%94%A9%E5%8D%96%E8%80%90%E5%85%8B%E5%BA%93%E5%AD%98%23) `1.2M 🔥` `-42%`
1. [大爷摸知了猴3小时赚近400元](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%88%B7%E6%91%B8%E7%9F%A5%E4%BA%86%E7%8C%B43%E5%B0%8F%E6%97%B6%E8%B5%9A%E8%BF%91400%E5%85%83%23) `401.5K 🔥` `-36%`
1. [谁敢认这是娜扎](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%95%A2%E8%AE%A4%E8%BF%99%E6%98%AF%E5%A8%9C%E6%89%8E%23) `394.3K 🔥` `-26%`
1. [谢贤遗嘱附带多项约束条款 (Xie Xian’s will comes with many binding clauses)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E9%81%97%E5%98%B1%E9%99%84%E5%B8%A6%E5%A4%9A%E9%A1%B9%E7%BA%A6%E6%9D%9F%E6%9D%A1%E6%AC%BE%23) `381.4K 🔥` `-27%`
1. [男子AI伪造烂水果仅退款连累全县](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90AI%E4%BC%AA%E9%80%A0%E7%83%82%E6%B0%B4%E6%9E%9C%E4%BB%85%E9%80%80%E6%AC%BE%E8%BF%9E%E7%B4%AF%E5%85%A8%E5%8E%BF%23) `377.5K 🔥` `-25%`
1. [王楚钦1比2徐海东](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A61%E6%AF%942%E5%BE%90%E6%B5%B7%E4%B8%9C%23) `362.2K 🔥` `-61%`
1. [爱情公寓的结局在这一刻释怀了 (The ending of love apartment is relieved at this moment)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%83%85%E5%85%AC%E5%AF%93%E7%9A%84%E7%BB%93%E5%B1%80%E5%9C%A8%E8%BF%99%E4%B8%80%E5%88%BB%E9%87%8A%E6%80%80%E4%BA%86%23) `359.9K 🔥` `-63%`
1. [闫闯被指数年前曾过失致人死亡 (Yan Chuang was found guilty of negligent death a few years ago)](https://s.weibo.com/weibo?q=%23%E9%97%AB%E9%97%AF%E8%A2%AB%E6%8C%87%E6%95%B0%E5%B9%B4%E5%89%8D%E6%9B%BE%E8%BF%87%E5%A4%B1%E8%87%B4%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `349.0K 🔥` `-21%`
1. [贝克汉姆秃顶了 (Beckham is bald)](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%85%8B%E6%B1%89%E5%A7%86%E7%A7%83%E9%A1%B6%E4%BA%86%23) `347.1K 🔥` `-60%`
1. [第一个发明睡帽的人简直就是天才](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8F%91%E6%98%8E%E7%9D%A1%E5%B8%BD%E7%9A%84%E4%BA%BA%E7%AE%80%E7%9B%B4%E5%B0%B1%E6%98%AF%E5%A4%A9%E6%89%8D%23) `344.2K 🔥` `-63%`

Updated at 2026-07-23 17:04:34

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
