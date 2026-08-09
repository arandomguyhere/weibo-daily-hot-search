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

1. [张本兄妹 乒坛格局松动 (Brother and sister Zhang Ben, the table tennis world is loosening)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E5%85%84%E5%A6%B9%20%E4%B9%92%E5%9D%9B%E6%A0%BC%E5%B1%80%E6%9D%BE%E5%8A%A8%23) `559.7K 🔥` `NEW`
1. [白海豚 居家办公](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%20%E5%B1%85%E5%AE%B6%E5%8A%9E%E5%85%AC%23) `456.7K 🔥` `NEW`
1. [张本智和说和妹妹同时夺冠意义重大](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E8%AF%B4%E5%92%8C%E5%A6%B9%E5%A6%B9%E5%90%8C%E6%97%B6%E5%A4%BA%E5%86%A0%E6%84%8F%E4%B9%89%E9%87%8D%E5%A4%A7%23) `449.7K 🔥` `NEW`
1. [公园偶遇张极街头唱歌](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%9B%AD%E5%81%B6%E9%81%87%E5%BC%A0%E6%9E%81%E8%A1%97%E5%A4%B4%E5%94%B1%E6%AD%8C%23) `406.9K 🔥` `NEW`
1. [4.2平卫生间补漏注胶花1.55万](https://s.weibo.com/weibo?q=%234.2%E5%B9%B3%E5%8D%AB%E7%94%9F%E9%97%B4%E8%A1%A5%E6%BC%8F%E6%B3%A8%E8%83%B6%E8%8A%B11.55%E4%B8%87%23) `399.5K 🔥` `NEW`
1. [白海豚减弱为台风级](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E5%87%8F%E5%BC%B1%E4%B8%BA%E5%8F%B0%E9%A3%8E%E7%BA%A7%23) `387.7K 🔥` `NEW`
1. [我叫巴威 是的我重生了](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%8F%AB%E5%B7%B4%E5%A8%81%20%E6%98%AF%E7%9A%84%E6%88%91%E9%87%8D%E7%94%9F%E4%BA%86%23) `383.3K 🔥` `NEW`
1. [鉴定3个孩子非亲生奶奶仍想接手抚养](https://s.weibo.com/weibo?q=%23%E9%89%B4%E5%AE%9A3%E4%B8%AA%E5%AD%A9%E5%AD%90%E9%9D%9E%E4%BA%B2%E7%94%9F%E5%A5%B6%E5%A5%B6%E4%BB%8D%E6%83%B3%E6%8E%A5%E6%89%8B%E6%8A%9A%E5%85%BB%23) `379.6K 🔥` `NEW`
1. [易烊千玺满头彩带退场](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%BB%A1%E5%A4%B4%E5%BD%A9%E5%B8%A6%E9%80%80%E5%9C%BA%23) `378.1K 🔥` `NEW`
1. [上海地铁停运](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%9C%B0%E9%93%81%E5%81%9C%E8%BF%90%23) `804.8K 🔥` `+67%`
1. [百花奖 (Hundred Flowers Award)](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%23) `2.9M 🔥`
1. [中国制造硬核瞬间 (Hardcore moments made in China)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%88%B6%E9%80%A0%E7%A1%AC%E6%A0%B8%E7%9E%AC%E9%97%B4%23) `1.4M 🔥`
1. [沈腾 影帝](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%20%E5%BD%B1%E5%B8%9D%23) `1.3M 🔥`
1. [朱一龙鼻子怎么了 (What happened to Zhu Yilong’s nose?)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E9%BC%BB%E5%AD%90%E6%80%8E%E4%B9%88%E4%BA%86%23) `579.2K 🔥`
1. [极氪7X充电起火](https://s.weibo.com/weibo?q=%23%E6%9E%81%E6%B0%AA7X%E5%85%85%E7%94%B5%E8%B5%B7%E7%81%AB%23) `463.2K 🔥`
1. [儿子去世孙子不捧骨灰盒被查出非亲生 (After the death of the son, the grandson did not hold the urn and was found to be not his biological son.)](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E5%8E%BB%E4%B8%96%E5%AD%99%E5%AD%90%E4%B8%8D%E6%8D%A7%E9%AA%A8%E7%81%B0%E7%9B%92%E8%A2%AB%E6%9F%A5%E5%87%BA%E9%9D%9E%E4%BA%B2%E7%94%9F%23) `461.5K 🔥`
1. [迪丽热巴给路人打码](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%BB%99%E8%B7%AF%E4%BA%BA%E6%89%93%E7%A0%81%23) `459.6K 🔥`
1. [田曦薇没刘海差点认不出来 (Tian Xiwei is almost unrecognizable without bangs)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%B2%A1%E5%88%98%E6%B5%B7%E5%B7%AE%E7%82%B9%E8%AE%A4%E4%B8%8D%E5%87%BA%E6%9D%A5%23) `458.9K 🔥`
1. [程晓玥谈离婚](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%99%93%E7%8E%A5%E8%B0%88%E7%A6%BB%E5%A9%9A%23) `453.1K 🔥`
1. [孟子义泰媒生图](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%B3%B0%E5%AA%92%E7%94%9F%E5%9B%BE%23) `450.7K 🔥`
1. [耳机左右耳电量未解之谜 (The mystery of the battery capacity of the left and right earphones)](https://s.weibo.com/weibo?q=%23%E8%80%B3%E6%9C%BA%E5%B7%A6%E5%8F%B3%E8%80%B3%E7%94%B5%E9%87%8F%E6%9C%AA%E8%A7%A3%E4%B9%8B%E8%B0%9C%23) `446.3K 🔥`
1. [江波龙定增溢价45%投资者炸锅](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E6%B3%A2%E9%BE%99%E5%AE%9A%E5%A2%9E%E6%BA%A2%E4%BB%B745%25%E6%8A%95%E8%B5%84%E8%80%85%E7%82%B8%E9%94%85%23) `444.2K 🔥`
1. [张凌赫红海](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%BA%A2%E6%B5%B7%23) `442.8K 🔥`
1. [SBS夏日歌谣大战MC失误争议](https://s.weibo.com/weibo?q=%23SBS%E5%A4%8F%E6%97%A5%E6%AD%8C%E8%B0%A3%E5%A4%A7%E6%88%98MC%E5%A4%B1%E8%AF%AF%E4%BA%89%E8%AE%AE%23) `441.7K 🔥`
1. [婴儿被子蒙头快窒息时小猫扒醒宝妈](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%84%BF%E8%A2%AB%E5%AD%90%E8%92%99%E5%A4%B4%E5%BF%AB%E7%AA%92%E6%81%AF%E6%97%B6%E5%B0%8F%E7%8C%AB%E6%89%92%E9%86%92%E5%AE%9D%E5%A6%88%23) `438.2K 🔥`
1. [姚琛程潇 标准的男人女人 (Yao Chen Cheng Xiao standard man and woman)](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E7%90%9B%E7%A8%8B%E6%BD%87%20%E6%A0%87%E5%87%86%E7%9A%84%E7%94%B7%E4%BA%BA%E5%A5%B3%E4%BA%BA%23) `436.1K 🔥`
1. [易烊千玺文俊辉热聊](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%96%87%E4%BF%8A%E8%BE%89%E7%83%AD%E8%81%8A%23) `433.8K 🔥`
1. [男孩1年暴长20厘米全身长满纹 (Boy grows 20 centimeters in one year and is covered in lines)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A91%E5%B9%B4%E6%9A%B4%E9%95%BF20%E5%8E%98%E7%B1%B3%E5%85%A8%E8%BA%AB%E9%95%BF%E6%BB%A1%E7%BA%B9%23) `432.2K 🔥`
1. [张凌赫直播 (Zhang Linghe live broadcast)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%9B%B4%E6%92%AD%23) `429.1K 🔥`
1. [印度女子出轨被撞破在院子内遭毒打](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%A5%B3%E5%AD%90%E5%87%BA%E8%BD%A8%E8%A2%AB%E6%92%9E%E7%A0%B4%E5%9C%A8%E9%99%A2%E5%AD%90%E5%86%85%E9%81%AD%E6%AF%92%E6%89%93%23) `428.3K 🔥`
1. [迪丽热巴素颜香港plog](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%B4%A0%E9%A2%9C%E9%A6%99%E6%B8%AFplog%23) `424.8K 🔥`
1. [娜扎称眼睛恢复情况不太妙](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E7%A7%B0%E7%9C%BC%E7%9D%9B%E6%81%A2%E5%A4%8D%E6%83%85%E5%86%B5%E4%B8%8D%E5%A4%AA%E5%A6%99%23) `422.7K 🔥`
1. [白海豚提前登陆 (White dolphins land early)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E6%8F%90%E5%89%8D%E7%99%BB%E9%99%86%23) `421.3K 🔥`
1. [赵寅成背后拉手](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AF%85%E6%88%90%E8%83%8C%E5%90%8E%E6%8B%89%E6%89%8B%23) `418.7K 🔥`
1. [听泉鉴宝炒股亏到吃泡面](https://s.weibo.com/weibo?q=%23%E5%90%AC%E6%B3%89%E9%89%B4%E5%AE%9D%E7%82%92%E8%82%A1%E4%BA%8F%E5%88%B0%E5%90%83%E6%B3%A1%E9%9D%A2%23) `417.5K 🔥`
1. [沈月 希腊神女](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%20%E5%B8%8C%E8%85%8A%E7%A5%9E%E5%A5%B3%23) `412.8K 🔥`
1. [郭京飞薛佳凝的钱都在鲍蕾那](https://s.weibo.com/weibo?q=%23%E9%83%AD%E4%BA%AC%E9%A3%9E%E8%96%9B%E4%BD%B3%E5%87%9D%E7%9A%84%E9%92%B1%E9%83%BD%E5%9C%A8%E9%B2%8D%E8%95%BE%E9%82%A3%23) `410.0K 🔥`
1. [自闭症哥哥的话唠妹妹堪比心理医生](https://s.weibo.com/weibo?q=%23%E8%87%AA%E9%97%AD%E7%97%87%E5%93%A5%E5%93%A5%E7%9A%84%E8%AF%9D%E5%94%A0%E5%A6%B9%E5%A6%B9%E5%A0%AA%E6%AF%94%E5%BF%83%E7%90%86%E5%8C%BB%E7%94%9F%23) `408.9K 🔥`
1. [人鱼 (mermaid)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E9%B1%BC%23) `401.8K 🔥`
1. [百花奖最佳女配角提名片段](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%E6%9C%80%E4%BD%B3%E5%A5%B3%E9%85%8D%E8%A7%92%E6%8F%90%E5%90%8D%E7%89%87%E6%AE%B5%23) `396.9K 🔥`
1. [老坛酸菜 脚踩 (Laotan pickled cabbage)](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%9D%9B%E9%85%B8%E8%8F%9C%20%E8%84%9A%E8%B8%A9%23) `393.7K 🔥`
1. [大家都走到职场的哪一步了](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AE%B6%E9%83%BD%E8%B5%B0%E5%88%B0%E8%81%8C%E5%9C%BA%E7%9A%84%E5%93%AA%E4%B8%80%E6%AD%A5%E4%BA%86%23) `390.7K 🔥`
1. [患者走了医生躲角落哭半小时](https://s.weibo.com/weibo?q=%23%E6%82%A3%E8%80%85%E8%B5%B0%E4%BA%86%E5%8C%BB%E7%94%9F%E8%BA%B2%E8%A7%92%E8%90%BD%E5%93%AD%E5%8D%8A%E5%B0%8F%E6%97%B6%23) `389.1K 🔥`
1. [杨幂对接确认出席百花奖颁奖典礼 (Yang Mi confirmed to attend Hundred Flowers Awards ceremony)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%AF%B9%E6%8E%A5%E7%A1%AE%E8%AE%A4%E5%87%BA%E5%B8%AD%E7%99%BE%E8%8A%B1%E5%A5%96%E9%A2%81%E5%A5%96%E5%85%B8%E7%A4%BC%23) `385.7K 🔥`
1. [台风白海豚 (Typhoon White Dolphin)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%23) `1.6M 🔥` `-25%`
1. [龙餐馆 奥斯卡](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%20%E5%A5%A5%E6%96%AF%E5%8D%A1%23) `772.6K 🔥` `-28%`
1. [上海地铁](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%9C%B0%E9%93%81%23) `678.2K 🔥` `-26%`
1. [医疗垃圾 手机壳](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%96%97%E5%9E%83%E5%9C%BE%20%E6%89%8B%E6%9C%BA%E5%A3%B3%23) `414.6K 🔥` `-23%`
1. [伊朗婉转回应最高领袖病危传闻](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A9%89%E8%BD%AC%E5%9B%9E%E5%BA%94%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E7%97%85%E5%8D%B1%E4%BC%A0%E9%97%BB%23) `405.1K 🔥` `-21%`
1. [韩乔生谈张本智和获横滨赛冠军](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E4%B9%94%E7%94%9F%E8%B0%88%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E8%8E%B7%E6%A8%AA%E6%BB%A8%E8%B5%9B%E5%86%A0%E5%86%9B%23) `396.0K 🔥` `-26%`

Updated at 2026-08-09 23:05:41

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
