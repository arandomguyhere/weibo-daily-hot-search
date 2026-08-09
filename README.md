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

1. [百花奖 (Hundred Flowers Award)](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%23) `1.6M 🔥` `NEW`
1. [台风白海豚](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%23) `949.4K 🔥` `NEW`
1. [中国制造硬核瞬间](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%88%B6%E9%80%A0%E7%A1%AC%E6%A0%B8%E7%9E%AC%E9%97%B4%23) `866.7K 🔥` `NEW`
1. [沈腾 影帝](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%20%E5%BD%B1%E5%B8%9D%23) `862.8K 🔥` `NEW`
1. [我叫巴威 是的我重生了](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%8F%AB%E5%B7%B4%E5%A8%81%20%E6%98%AF%E7%9A%84%E6%88%91%E9%87%8D%E7%94%9F%E4%BA%86%23) `855.8K 🔥` `NEW`
1. [上海地铁停运](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%9C%B0%E9%93%81%E5%81%9C%E8%BF%90%23) `607.7K 🔥` `NEW`
1. [欧阳娜娜周翊然天猫七夕线定爱](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E9%98%B3%E5%A8%9C%E5%A8%9C%E5%91%A8%E7%BF%8A%E7%84%B6%E5%A4%A9%E7%8C%AB%E4%B8%83%E5%A4%95%E7%BA%BF%E5%AE%9A%E7%88%B1%23) `414.7K 🔥` `NEW`
1. [龙餐馆 奥斯卡](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%20%E5%A5%A5%E6%96%AF%E5%8D%A1%23) `400.2K 🔥` `NEW`
1. [白海豚 居家办公](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%20%E5%B1%85%E5%AE%B6%E5%8A%9E%E5%85%AC%23) `397.4K 🔥` `NEW`
1. [张本智和说和妹妹同时夺冠意义重大](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E8%AF%B4%E5%92%8C%E5%A6%B9%E5%A6%B9%E5%90%8C%E6%97%B6%E5%A4%BA%E5%86%A0%E6%84%8F%E4%B9%89%E9%87%8D%E5%A4%A7%23) `396.0K 🔥` `NEW`
1. [极氪7X充电起火 (JiKrypton 7X catches fire while charging)](https://s.weibo.com/weibo?q=%23%E6%9E%81%E6%B0%AA7X%E5%85%85%E7%94%B5%E8%B5%B7%E7%81%AB%23) `395.0K 🔥` `NEW`
1. [女演员朱锐自曝破产失业](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%BC%94%E5%91%98%E6%9C%B1%E9%94%90%E8%87%AA%E6%9B%9D%E7%A0%B4%E4%BA%A7%E5%A4%B1%E4%B8%9A%23) `393.2K 🔥` `NEW`
1. [儿子去世孙子不捧骨灰盒被查出非亲生](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E5%8E%BB%E4%B8%96%E5%AD%99%E5%AD%90%E4%B8%8D%E6%8D%A7%E9%AA%A8%E7%81%B0%E7%9B%92%E8%A2%AB%E6%9F%A5%E5%87%BA%E9%9D%9E%E4%BA%B2%E7%94%9F%23) `390.7K 🔥` `NEW`
1. [迪丽热巴给路人打码](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%BB%99%E8%B7%AF%E4%BA%BA%E6%89%93%E7%A0%81%23) `390.0K 🔥` `NEW`
1. [田曦薇没刘海差点认不出来](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%B2%A1%E5%88%98%E6%B5%B7%E5%B7%AE%E7%82%B9%E8%AE%A4%E4%B8%8D%E5%87%BA%E6%9D%A5%23) `387.3K 🔥` `NEW`
1. [上海地铁](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%9C%B0%E9%93%81%23) `385.6K 🔥` `NEW`
1. [公园偶遇张极街头唱歌](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%9B%AD%E5%81%B6%E9%81%87%E5%BC%A0%E6%9E%81%E8%A1%97%E5%A4%B4%E5%94%B1%E6%AD%8C%23) `383.9K 🔥` `NEW`
1. [江波龙定增溢价45%投资者炸锅](https://s.weibo.com/weibo?q=%23%E6%B1%9F%E6%B3%A2%E9%BE%99%E5%AE%9A%E5%A2%9E%E6%BA%A2%E4%BB%B745%25%E6%8A%95%E8%B5%84%E8%80%85%E7%82%B8%E9%94%85%23) `381.2K 🔥` `NEW`
1. [程晓玥谈离婚](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%99%93%E7%8E%A5%E8%B0%88%E7%A6%BB%E5%A9%9A%23) `380.8K 🔥` `NEW`
1. [上海地铁明天4条线路全线停运](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%9C%B0%E9%93%81%E6%98%8E%E5%A4%A94%E6%9D%A1%E7%BA%BF%E8%B7%AF%E5%85%A8%E7%BA%BF%E5%81%9C%E8%BF%90%23) `378.8K 🔥` `NEW`
1. [朱一龙鼻子怎么了 (What happened to Zhu Yilong’s nose?)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E9%BC%BB%E5%AD%90%E6%80%8E%E4%B9%88%E4%BA%86%23) `375.7K 🔥` `NEW`
1. [SBS夏日歌谣大战MC失误争议](https://s.weibo.com/weibo?q=%23SBS%E5%A4%8F%E6%97%A5%E6%AD%8C%E8%B0%A3%E5%A4%A7%E6%88%98MC%E5%A4%B1%E8%AF%AF%E4%BA%89%E8%AE%AE%23) `374.5K 🔥` `NEW`
1. [印度女子出轨被撞破在院子内遭毒打](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%A5%B3%E5%AD%90%E5%87%BA%E8%BD%A8%E8%A2%AB%E6%92%9E%E7%A0%B4%E5%9C%A8%E9%99%A2%E5%AD%90%E5%86%85%E9%81%AD%E6%AF%92%E6%89%93%23) `372.8K 🔥` `NEW`
1. [孟子义泰媒生图](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%B3%B0%E5%AA%92%E7%94%9F%E5%9B%BE%23) `371.8K 🔥` `NEW`
1. [姚琛程潇 标准的男人女人](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E7%90%9B%E7%A8%8B%E6%BD%87%20%E6%A0%87%E5%87%86%E7%9A%84%E7%94%B7%E4%BA%BA%E5%A5%B3%E4%BA%BA%23) `368.4K 🔥` `NEW`
1. [易烊千玺工作室感谢百花奖认可](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%B7%A5%E4%BD%9C%E5%AE%A4%E6%84%9F%E8%B0%A2%E7%99%BE%E8%8A%B1%E5%A5%96%E8%AE%A4%E5%8F%AF%23) `368.1K 🔥` `NEW`
1. [婴儿被子蒙头快窒息时小猫扒醒宝妈](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%84%BF%E8%A2%AB%E5%AD%90%E8%92%99%E5%A4%B4%E5%BF%AB%E7%AA%92%E6%81%AF%E6%97%B6%E5%B0%8F%E7%8C%AB%E6%89%92%E9%86%92%E5%AE%9D%E5%A6%88%23) `365.6K 🔥` `NEW`
1. [张凌赫红海](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%BA%A2%E6%B5%B7%23) `364.6K 🔥` `NEW`
1. [赵寅成背后拉手](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AF%85%E6%88%90%E8%83%8C%E5%90%8E%E6%8B%89%E6%89%8B%23) `361.4K 🔥` `NEW`
1. [南京地铁](https://s.weibo.com/weibo?q=%23%E5%8D%97%E4%BA%AC%E5%9C%B0%E9%93%81%23) `360.0K 🔥` `NEW`
1. [白海豚提前登陆 (White dolphins land early)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E6%8F%90%E5%89%8D%E7%99%BB%E9%99%86%23) `357.6K 🔥` `NEW`
1. [易烊千玺文俊辉热聊](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%96%87%E4%BF%8A%E8%BE%89%E7%83%AD%E8%81%8A%23) `355.7K 🔥` `NEW`
1. [娜扎称眼睛恢复情况不太妙](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E7%A7%B0%E7%9C%BC%E7%9D%9B%E6%81%A2%E5%A4%8D%E6%83%85%E5%86%B5%E4%B8%8D%E5%A4%AA%E5%A6%99%23) `354.9K 🔥` `NEW`
1. [山东泰山2比1天津津门虎](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E4%B8%9C%E6%B3%B0%E5%B1%B12%E6%AF%941%E5%A4%A9%E6%B4%A5%E6%B4%A5%E9%97%A8%E8%99%8E%23) `353.3K 🔥` `NEW`
1. [张凌赫红包 万事胜意](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%BA%A2%E5%8C%85%20%E4%B8%87%E4%BA%8B%E8%83%9C%E6%84%8F%23) `350.2K 🔥` `NEW`
1. [男孩1年暴长20厘米全身长满纹](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A91%E5%B9%B4%E6%9A%B4%E9%95%BF20%E5%8E%98%E7%B1%B3%E5%85%A8%E8%BA%AB%E9%95%BF%E6%BB%A1%E7%BA%B9%23) `349.5K 🔥` `NEW`
1. [大家都走到职场的哪一步了](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AE%B6%E9%83%BD%E8%B5%B0%E5%88%B0%E8%81%8C%E5%9C%BA%E7%9A%84%E5%93%AA%E4%B8%80%E6%AD%A5%E4%BA%86%23) `347.1K 🔥` `NEW`
1. [人鱼](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E9%B1%BC%23) `345.6K 🔥` `NEW`
1. [患者走了医生躲角落哭半小时](https://s.weibo.com/weibo?q=%23%E6%82%A3%E8%80%85%E8%B5%B0%E4%BA%86%E5%8C%BB%E7%94%9F%E8%BA%B2%E8%A7%92%E8%90%BD%E5%93%AD%E5%8D%8A%E5%B0%8F%E6%97%B6%23) `343.6K 🔥` `NEW`
1. [陈哲远 我是什么神人](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%20%E6%88%91%E6%98%AF%E4%BB%80%E4%B9%88%E7%A5%9E%E4%BA%BA%23) `342.9K 🔥` `NEW`
1. [杭州交警建议明早提前一小时出门 (Hangzhou traffic police recommend leaving the house one hour early tomorrow morning)](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E4%BA%A4%E8%AD%A6%E5%BB%BA%E8%AE%AE%E6%98%8E%E6%97%A9%E6%8F%90%E5%89%8D%E4%B8%80%E5%B0%8F%E6%97%B6%E5%87%BA%E9%97%A8%23) `340.4K 🔥` `NEW`
1. [听泉鉴宝炒股亏到吃泡面](https://s.weibo.com/weibo?q=%23%E5%90%AC%E6%B3%89%E9%89%B4%E5%AE%9D%E7%82%92%E8%82%A1%E4%BA%8F%E5%88%B0%E5%90%83%E6%B3%A1%E9%9D%A2%23) `337.7K 🔥` `NEW`
1. [迪丽热巴素颜香港plog](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%B4%A0%E9%A2%9C%E9%A6%99%E6%B8%AFplog%23) `337.3K 🔥` `NEW`
1. [鉴定3个孩子非亲生奶奶仍想接手抚养](https://s.weibo.com/weibo?q=%23%E9%89%B4%E5%AE%9A3%E4%B8%AA%E5%AD%A9%E5%AD%90%E9%9D%9E%E4%BA%B2%E7%94%9F%E5%A5%B6%E5%A5%B6%E4%BB%8D%E6%83%B3%E6%8E%A5%E6%89%8B%E6%8A%9A%E5%85%BB%23) `334.5K 🔥` `NEW`
1. [医疗垃圾 手机壳](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%96%97%E5%9E%83%E5%9C%BE%20%E6%89%8B%E6%9C%BA%E5%A3%B3%23) `332.7K 🔥` `NEW`
1. [自闭症哥哥的话唠妹妹堪比心理医生](https://s.weibo.com/weibo?q=%23%E8%87%AA%E9%97%AD%E7%97%87%E5%93%A5%E5%93%A5%E7%9A%84%E8%AF%9D%E5%94%A0%E5%A6%B9%E5%A6%B9%E5%A0%AA%E6%AF%94%E5%BF%83%E7%90%86%E5%8C%BB%E7%94%9F%23) `331.4K 🔥` `NEW`
1. [百花奖最佳女配角提名片段](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%E6%9C%80%E4%BD%B3%E5%A5%B3%E9%85%8D%E8%A7%92%E6%8F%90%E5%90%8D%E7%89%87%E6%AE%B5%23) `329.1K 🔥` `NEW`
1. [杨幂对接确认出席百花奖颁奖典礼](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%AF%B9%E6%8E%A5%E7%A1%AE%E8%AE%A4%E5%87%BA%E5%B8%AD%E7%99%BE%E8%8A%B1%E5%A5%96%E9%A2%81%E5%A5%96%E5%85%B8%E7%A4%BC%23) `326.7K 🔥` `NEW`
1. [耳机左右耳电量未解之谜](https://s.weibo.com/weibo?q=%23%E8%80%B3%E6%9C%BA%E5%B7%A6%E5%8F%B3%E8%80%B3%E7%94%B5%E9%87%8F%E6%9C%AA%E8%A7%A3%E4%B9%8B%E8%B0%9C%23) `326.0K 🔥` `NEW`
1. [温州发布海水倒灌风险预警](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B7%9E%E5%8F%91%E5%B8%83%E6%B5%B7%E6%B0%B4%E5%80%92%E7%81%8C%E9%A3%8E%E9%99%A9%E9%A2%84%E8%AD%A6%23) `324.7K 🔥` `NEW`
1. [母亲看自闭症孩子独自玩耍情绪失控 (Mother loses control when watching autistic child playing alone)](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E7%9C%8B%E8%87%AA%E9%97%AD%E7%97%87%E5%AD%A9%E5%AD%90%E7%8B%AC%E8%87%AA%E7%8E%A9%E8%80%8D%E6%83%85%E7%BB%AA%E5%A4%B1%E6%8E%A7%23) `321.8K 🔥` `NEW`

Updated at 2026-08-10 00:13:59

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
