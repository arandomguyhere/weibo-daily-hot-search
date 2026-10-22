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

1. [上海婚纱店疑删除祖海高定内容](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%A9%9A%E7%BA%B1%E5%BA%97%E7%96%91%E5%88%A0%E9%99%A4%E7%A5%96%E6%B5%B7%E9%AB%98%E5%AE%9A%E5%86%85%E5%AE%B9%23) `1.2M 🔥` `NEW`
1. [女子称地铁站内看5小时书被扣15元](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E5%9C%B0%E9%93%81%E7%AB%99%E5%86%85%E7%9C%8B5%E5%B0%8F%E6%97%B6%E4%B9%A6%E8%A2%AB%E6%89%A315%E5%85%83%23) `822.6K 🔥` `NEW`
1. [走好属于我们这一代的长征路](https://s.weibo.com/weibo?q=%23%E8%B5%B0%E5%A5%BD%E5%B1%9E%E4%BA%8E%E6%88%91%E4%BB%AC%E8%BF%99%E4%B8%80%E4%BB%A3%E7%9A%84%E9%95%BF%E5%BE%81%E8%B7%AF%23) `722.3K 🔥` `NEW`
1. [原来用AI写论文是会有痕迹的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%94%A8AI%E5%86%99%E8%AE%BA%E6%96%87%E6%98%AF%E4%BC%9A%E6%9C%89%E7%97%95%E8%BF%B9%E7%9A%84%23) `673.0K 🔥` `NEW`
1. [君黛到死都没叫魏恒娥一声阿母](https://s.weibo.com/weibo?q=%23%E5%90%9B%E9%BB%9B%E5%88%B0%E6%AD%BB%E9%83%BD%E6%B2%A1%E5%8F%AB%E9%AD%8F%E6%81%92%E5%A8%A5%E4%B8%80%E5%A3%B0%E9%98%BF%E6%AF%8D%23) `406.0K 🔥` `NEW`
1. [全球首款乙肝功能性治愈药物](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E9%A6%96%E6%AC%BE%E4%B9%99%E8%82%9D%E5%8A%9F%E8%83%BD%E6%80%A7%E6%B2%BB%E6%84%88%E8%8D%AF%E7%89%A9%23) `381.0K 🔥` `NEW`
1. [沿着长征路看中国](https://s.weibo.com/weibo?q=%23%E6%B2%BF%E7%9D%80%E9%95%BF%E5%BE%81%E8%B7%AF%E7%9C%8B%E4%B8%AD%E5%9B%BD%23) `369.6K 🔥` `NEW`
1. [中国体操女团夺冠解说哽咽了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BD%93%E6%93%8D%E5%A5%B3%E5%9B%A2%E5%A4%BA%E5%86%A0%E8%A7%A3%E8%AF%B4%E5%93%BD%E5%92%BD%E4%BA%86%23) `356.1K 🔥` `NEW`
1. [浓眉奇才首秀34分12篮板](https://s.weibo.com/weibo?q=%23%E6%B5%93%E7%9C%89%E5%A5%87%E6%89%8D%E9%A6%96%E7%A7%8034%E5%88%8612%E7%AF%AE%E6%9D%BF%23) `295.5K 🔥` `NEW`
1. [君黛喝毒酒下线](https://s.weibo.com/weibo?q=%23%E5%90%9B%E9%BB%9B%E5%96%9D%E6%AF%92%E9%85%92%E4%B8%8B%E7%BA%BF%23) `294.7K 🔥` `NEW`
1. [90年前的10月22日](https://s.weibo.com/weibo?q=%2390%E5%B9%B4%E5%89%8D%E7%9A%8410%E6%9C%8822%E6%97%A5%23) `293.4K 🔥` `NEW`
1. [A股](https://s.weibo.com/weibo?q=%23A%E8%82%A1%23) `292.4K 🔥` `NEW`
1. [郑欣宜在沈殿霞墓前哭](https://s.weibo.com/weibo?q=%23%E9%83%91%E6%AC%A3%E5%AE%9C%E5%9C%A8%E6%B2%88%E6%AE%BF%E9%9C%9E%E5%A2%93%E5%89%8D%E5%93%AD%23) `290.9K 🔥` `NEW`
1. [离婚后发现前夫婚内继承400余万](https://s.weibo.com/weibo?q=%23%E7%A6%BB%E5%A9%9A%E5%90%8E%E5%8F%91%E7%8E%B0%E5%89%8D%E5%A4%AB%E5%A9%9A%E5%86%85%E7%BB%A7%E6%89%BF400%E4%BD%99%E4%B8%87%23) `289.9K 🔥` `NEW`
1. [中国体操女团面临洛奥激烈竞争](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BD%93%E6%93%8D%E5%A5%B3%E5%9B%A2%E9%9D%A2%E4%B8%B4%E6%B4%9B%E5%A5%A5%E6%BF%80%E7%83%88%E7%AB%9E%E4%BA%89%23) `289.2K 🔥` `NEW`
1. [负债7w另有1万信用卡即将逾期](https://s.weibo.com/weibo?q=%23%E8%B4%9F%E5%80%BA7w%E5%8F%A6%E6%9C%891%E4%B8%87%E4%BF%A1%E7%94%A8%E5%8D%A1%E5%8D%B3%E5%B0%86%E9%80%BE%E6%9C%9F%23) `283.9K 🔥` `NEW`
1. [张小斐体面人](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%E4%BD%93%E9%9D%A2%E4%BA%BA%23) `279.6K 🔥` `NEW`
1. [奥黛丽厚本称自己站在红毯上无比自信](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E9%BB%9B%E4%B8%BD%E5%8E%9A%E6%9C%AC%E7%A7%B0%E8%87%AA%E5%B7%B1%E7%AB%99%E5%9C%A8%E7%BA%A2%E6%AF%AF%E4%B8%8A%E6%97%A0%E6%AF%94%E8%87%AA%E4%BF%A1%23) `277.2K 🔥` `NEW`
1. [iPhoneDuo仅适合特定人群](https://s.weibo.com/weibo?q=%23iPhoneDuo%E4%BB%85%E9%80%82%E5%90%88%E7%89%B9%E5%AE%9A%E4%BA%BA%E7%BE%A4%23) `265.1K 🔥` `NEW`
1. [陆濯知道魏娆身份后就开始放飞自我了](https://s.weibo.com/weibo?q=%23%E9%99%86%E6%BF%AF%E7%9F%A5%E9%81%93%E9%AD%8F%E5%A8%86%E8%BA%AB%E4%BB%BD%E5%90%8E%E5%B0%B1%E5%BC%80%E5%A7%8B%E6%94%BE%E9%A3%9E%E8%87%AA%E6%88%91%E4%BA%86%23) `263.6K 🔥` `NEW`
1. [中国奥委会祝贺体操女团夺冠](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%A5%E5%A7%94%E4%BC%9A%E7%A5%9D%E8%B4%BA%E4%BD%93%E6%93%8D%E5%A5%B3%E5%9B%A2%E5%A4%BA%E5%86%A0%23) `260.6K 🔥` `NEW`
1. [小城良方前四集观后感](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E5%89%8D%E5%9B%9B%E9%9B%86%E8%A7%82%E5%90%8E%E6%84%9F%23) `231.7K 🔥` `NEW`
1. [蔡文静工作留痕的重要性](https://s.weibo.com/weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E5%B7%A5%E4%BD%9C%E7%95%99%E7%97%95%E7%9A%84%E9%87%8D%E8%A6%81%E6%80%A7%23) `188.8K 🔥` `NEW`
1. [原死了么APP服务人群转至老人](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%AD%BB%E4%BA%86%E4%B9%88APP%E6%9C%8D%E5%8A%A1%E4%BA%BA%E7%BE%A4%E8%BD%AC%E8%87%B3%E8%80%81%E4%BA%BA%23) `186.6K 🔥` `NEW`
1. [一天杀一只白马股](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%A4%A9%E6%9D%80%E4%B8%80%E5%8F%AA%E7%99%BD%E9%A9%AC%E8%82%A1%23) `181.8K 🔥` `NEW`
1. [何同学说iPhoneDuo手感差](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%90%8C%E5%AD%A6%E8%AF%B4iPhoneDuo%E6%89%8B%E6%84%9F%E5%B7%AE%23) `166.0K 🔥` `NEW`
1. [VOGUE 还没宣](https://s.weibo.com/weibo?q=%23VOGUE%20%E8%BF%98%E6%B2%A1%E5%AE%A3%23) `165.7K 🔥` `NEW`
1. [小城良方云包场](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%9F%8E%E8%89%AF%E6%96%B9%E4%BA%91%E5%8C%85%E5%9C%BA%23) `165.6K 🔥` `NEW`
1. [Zeus说需要警惕369](https://s.weibo.com/weibo?q=%23Zeus%E8%AF%B4%E9%9C%80%E8%A6%81%E8%AD%A6%E6%83%95369%23) `161.3K 🔥` `NEW`
1. [客栈新组合疯抢京东组合购](https://s.weibo.com/weibo?q=%23%E5%AE%A2%E6%A0%88%E6%96%B0%E7%BB%84%E5%90%88%E7%96%AF%E6%8A%A2%E4%BA%AC%E4%B8%9C%E7%BB%84%E5%90%88%E8%B4%AD%23) `160.4K 🔥` `NEW`
1. [曝文咏珊生女](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%96%87%E5%92%8F%E7%8F%8A%E7%94%9F%E5%A5%B3%23) `159.9K 🔥` `NEW`
1. [疑似盛艾敬父母欠薪事件当事人回应](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E7%9B%9B%E8%89%BE%E6%95%AC%E7%88%B6%E6%AF%8D%E6%AC%A0%E8%96%AA%E4%BA%8B%E4%BB%B6%E5%BD%93%E4%BA%8B%E4%BA%BA%E5%9B%9E%E5%BA%94%23) `156.3K 🔥` `NEW`
1. [问界称起火车辆事发时为超速状态](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8C%E7%A7%B0%E8%B5%B7%E7%81%AB%E8%BD%A6%E8%BE%86%E4%BA%8B%E5%8F%91%E6%97%B6%E4%B8%BA%E8%B6%85%E9%80%9F%E7%8A%B6%E6%80%81%23) `155.3K 🔥` `NEW`
1. [iPhoneDuo3.2万次折叠后手感无变化](https://s.weibo.com/weibo?q=%23iPhoneDuo3.2%E4%B8%87%E6%AC%A1%E6%8A%98%E5%8F%A0%E5%90%8E%E6%89%8B%E6%84%9F%E6%97%A0%E5%8F%98%E5%8C%96%23) `153.7K 🔥` `NEW`
1. [红果短剧暂无全面收费计划](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E6%9A%82%E6%97%A0%E5%85%A8%E9%9D%A2%E6%94%B6%E8%B4%B9%E8%AE%A1%E5%88%92%23) `145.7K 🔥` `NEW`
1. [女子称遭陌生男拍背猥亵索赔被驳回](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E9%81%AD%E9%99%8C%E7%94%9F%E7%94%B7%E6%8B%8D%E8%83%8C%E7%8C%A5%E4%BA%B5%E7%B4%A2%E8%B5%94%E8%A2%AB%E9%A9%B3%E5%9B%9E%23) `142.2K 🔥` `NEW`
1. [比亚迪第二代海鸥7万级唯一闪充](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BA%9A%E8%BF%AA%E7%AC%AC%E4%BA%8C%E4%BB%A3%E6%B5%B7%E9%B8%A57%E4%B8%87%E7%BA%A7%E5%94%AF%E4%B8%80%E9%97%AA%E5%85%85%23) `712.5K 🔥` `+80%`
1. [宇树机器人展示举起汽车救人](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%B1%95%E7%A4%BA%E4%B8%BE%E8%B5%B7%E6%B1%BD%E8%BD%A6%E6%95%91%E4%BA%BA%23) `365.6K 🔥` `+65%`
1. [曝自费高定艺人名字](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%87%AA%E8%B4%B9%E9%AB%98%E5%AE%9A%E8%89%BA%E4%BA%BA%E5%90%8D%E5%AD%97%23) `291.9K 🔥` `+29%`
1. [周杰伦说我是中国人有什么可讨论的](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E8%AF%B4%E6%88%91%E6%98%AF%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%9C%89%E4%BB%80%E4%B9%88%E5%8F%AF%E8%AE%A8%E8%AE%BA%E7%9A%84%23) `288.8K 🔥` `+28%`
1. [料酒去腥的惊天骗局](https://s.weibo.com/weibo?q=%23%E6%96%99%E9%85%92%E5%8E%BB%E8%85%A5%E7%9A%84%E6%83%8A%E5%A4%A9%E9%AA%97%E5%B1%80%23) `273.8K 🔥` `+23%`
1. [曝陈天润恋情](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%99%88%E5%A4%A9%E6%B6%A6%E6%81%8B%E6%83%85%23) `167.8K 🔥` `+97%`
1. [卢旺达抄作业连面相都抄了](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%97%BA%E8%BE%BE%E6%8A%84%E4%BD%9C%E4%B8%9A%E8%BF%9E%E9%9D%A2%E7%9B%B8%E9%83%BD%E6%8A%84%E4%BA%86%23) `165.5K 🔥` `+85%`
1. [嫁金钗](https://s.weibo.com/weibo?q=%23%E5%AB%81%E9%87%91%E9%92%97%23) `162.6K 🔥` `+400%`
1. [原来明星租一次高定这么贵啊](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%98%8E%E6%98%9F%E7%A7%9F%E4%B8%80%E6%AC%A1%E9%AB%98%E5%AE%9A%E8%BF%99%E4%B9%88%E8%B4%B5%E5%95%8A%23) `240.5K 🔥`
1. [张小斐 救场](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%B0%8F%E6%96%90%20%E6%95%91%E5%9C%BA%23) `209.9K 🔥`
1. [刘铮亮父亲冬泳溺亡](https://s.weibo.com/weibo?q=%23%E5%88%98%E9%93%AE%E4%BA%AE%E7%88%B6%E4%BA%B2%E5%86%AC%E6%B3%B3%E6%BA%BA%E4%BA%A1%23) `199.3K 🔥`
1. [芭莎 有人在后台不出来](https://s.weibo.com/weibo?q=%23%E8%8A%AD%E8%8E%8E%20%E6%9C%89%E4%BA%BA%E5%9C%A8%E5%90%8E%E5%8F%B0%E4%B8%8D%E5%87%BA%E6%9D%A5%23) `185.9K 🔥`
1. [中国体操女团时隔20年夺冠](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BD%93%E6%93%8D%E5%A5%B3%E5%9B%A2%E6%97%B6%E9%9A%9420%E5%B9%B4%E5%A4%BA%E5%86%A0%23) `205.8K 🔥` `-81%`
1. [红果短剧自砍摇钱树](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E6%9E%9C%E7%9F%AD%E5%89%A7%E8%87%AA%E7%A0%8D%E6%91%87%E9%92%B1%E6%A0%91%23) `192.2K 🔥` `-76%`

Updated at 2026-10-22 11:18:19

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
