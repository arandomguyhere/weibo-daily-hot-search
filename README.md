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

1. [曝詹姆斯突然改变想法 (LeBron James suddenly changed his mind)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%A9%B9%E5%A7%86%E6%96%AF%E7%AA%81%E7%84%B6%E6%94%B9%E5%8F%98%E6%83%B3%E6%B3%95%23) `1.2M 🔥` `NEW`
1. [九门 提档](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%20%E6%8F%90%E6%A1%A3%23) `829.1K 🔥` `NEW`
1. [宗馥莉18亿美元资产被冻结](https://s.weibo.com/weibo?q=%23%E5%AE%97%E9%A6%A5%E8%8E%8918%E4%BA%BF%E7%BE%8E%E5%85%83%E8%B5%84%E4%BA%A7%E8%A2%AB%E5%86%BB%E7%BB%93%23) `713.3K 🔥` `NEW`
1. [阿根廷队仅3人祝贺西班牙夺冠](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E4%BB%853%E4%BA%BA%E7%A5%9D%E8%B4%BA%E8%A5%BF%E7%8F%AD%E7%89%99%E5%A4%BA%E5%86%A0%23) `313.8K 🔥` `NEW`
1. [曝张雅琪和万俊丰同行照片](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BC%A0%E9%9B%85%E7%90%AA%E5%92%8C%E4%B8%87%E4%BF%8A%E4%B8%B0%E5%90%8C%E8%A1%8C%E7%85%A7%E7%89%87%23) `302.2K 🔥` `NEW`
1. [演员凯莉霍特尔车祸去世](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E5%87%AF%E8%8E%89%E9%9C%8D%E7%89%B9%E5%B0%94%E8%BD%A6%E7%A5%B8%E5%8E%BB%E4%B8%96%23) `297.7K 🔥` `NEW`
1. [汪明荃认谢婷婷做干女儿](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E6%98%8E%E8%8D%83%E8%AE%A4%E8%B0%A2%E5%A9%B7%E5%A9%B7%E5%81%9A%E5%B9%B2%E5%A5%B3%E5%84%BF%23) `285.3K 🔥` `NEW`
1. [长鑫科技打新弃购658万股](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E6%89%93%E6%96%B0%E5%BC%83%E8%B4%AD658%E4%B8%87%E8%82%A1%23) `273.7K 🔥` `NEW`
1. [aespa预告](https://s.weibo.com/weibo?q=%23aespa%E9%A2%84%E5%91%8A%23) `245.0K 🔥` `NEW`
1. [许昕回应为何不打乒超](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%98%95%E5%9B%9E%E5%BA%94%E4%B8%BA%E4%BD%95%E4%B8%8D%E6%89%93%E4%B9%92%E8%B6%85%23) `243.4K 🔥` `NEW`
1. [父亲在家长群公开夫妻矛盾被认定家暴 (Father was found guilty of domestic violence after disclosing conflict between husband and wife in parents group)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E5%9C%A8%E5%AE%B6%E9%95%BF%E7%BE%A4%E5%85%AC%E5%BC%80%E5%A4%AB%E5%A6%BB%E7%9F%9B%E7%9B%BE%E8%A2%AB%E8%AE%A4%E5%AE%9A%E5%AE%B6%E6%9A%B4%23) `242.5K 🔥` `NEW`
1. [谢贤前女友CoCo账号头像变黑](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B4%A4%E5%89%8D%E5%A5%B3%E5%8F%8BCoCo%E8%B4%A6%E5%8F%B7%E5%A4%B4%E5%83%8F%E5%8F%98%E9%BB%91%23) `238.1K 🔥` `NEW`
1. [张籽沐刘楚恬15年闺蜜](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%B1%BD%E6%B2%90%E5%88%98%E6%A5%9A%E6%81%AC15%E5%B9%B4%E9%97%BA%E8%9C%9C%23) `235.1K 🔥` `NEW`
1. [特朗普想让FIFA主席当联合国秘书长](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%83%B3%E8%AE%A9FIFA%E4%B8%BB%E5%B8%AD%E5%BD%93%E8%81%94%E5%90%88%E5%9B%BD%E7%A7%98%E4%B9%A6%E9%95%BF%23) `234.7K 🔥` `NEW`
1. [周佑凌 柳柳](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%BD%91%E5%87%8C%20%E6%9F%B3%E6%9F%B3%23) `234.4K 🔥` `NEW`
1. [马犬被洪水冲走10天奇迹回家](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E7%8A%AC%E8%A2%AB%E6%B4%AA%E6%B0%B4%E5%86%B2%E8%B5%B010%E5%A4%A9%E5%A5%87%E8%BF%B9%E5%9B%9E%E5%AE%B6%23) `230.1K 🔥` `NEW`
1. [A股再次迎来批量利好](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%86%8D%E6%AC%A1%E8%BF%8E%E6%9D%A5%E6%89%B9%E9%87%8F%E5%88%A9%E5%A5%BD%23) `227.9K 🔥` `NEW`
1. [Danielle发了ins](https://s.weibo.com/weibo?q=%23Danielle%E5%8F%91%E4%BA%86ins%23) `216.4K 🔥` `NEW`
1. [恋与深空为何能让13岁女孩狂刷3万](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E4%B8%BA%E4%BD%95%E8%83%BD%E8%AE%A913%E5%B2%81%E5%A5%B3%E5%AD%A9%E7%8B%82%E5%88%B73%E4%B8%87%23) `205.2K 🔥` `NEW`
1. [哥斯拉大战金刚](https://s.weibo.com/weibo?q=%23%E5%93%A5%E6%96%AF%E6%8B%89%E5%A4%A7%E6%88%98%E9%87%91%E5%88%9A%23) `201.6K 🔥` `NEW`
1. [女孩也很好但新生男孩越来越多 (Girls are fine too but there are more and more new boys)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E4%B9%9F%E5%BE%88%E5%A5%BD%E4%BD%86%E6%96%B0%E7%94%9F%E7%94%B7%E5%AD%A9%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%A4%9A%23) `186.9K 🔥` `NEW`
1. [游轮沉没漂流数小时中国游客发声](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E8%BD%AE%E6%B2%89%E6%B2%A1%E6%BC%82%E6%B5%81%E6%95%B0%E5%B0%8F%E6%97%B6%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E5%8F%91%E5%A3%B0%23) `166.0K 🔥` `NEW`
1. [陈妍希说身体不好但脑子还行](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E8%AF%B4%E8%BA%AB%E4%BD%93%E4%B8%8D%E5%A5%BD%E4%BD%86%E8%84%91%E5%AD%90%E8%BF%98%E8%A1%8C%23) `163.3K 🔥` `NEW`
1. [切尔西1.17亿镑签下罗杰斯](https://s.weibo.com/weibo?q=%23%E5%88%87%E5%B0%94%E8%A5%BF1.17%E4%BA%BF%E9%95%91%E7%AD%BE%E4%B8%8B%E7%BD%97%E6%9D%B0%E6%96%AF%23) `140.1K 🔥` `NEW`
1. [中国船员被韩方扣押期间死亡家属赴韩](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%88%B9%E5%91%98%E8%A2%AB%E9%9F%A9%E6%96%B9%E6%89%A3%E6%8A%BC%E6%9C%9F%E9%97%B4%E6%AD%BB%E4%BA%A1%E5%AE%B6%E5%B1%9E%E8%B5%B4%E9%9F%A9%23) `131.8K 🔥` `NEW`
1. [高鑫王一楠女儿要上大学了](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%91%AB%E7%8E%8B%E4%B8%80%E6%A5%A0%E5%A5%B3%E5%84%BF%E8%A6%81%E4%B8%8A%E5%A4%A7%E5%AD%A6%E4%BA%86%23) `131.6K 🔥` `NEW`
1. [机器人商业化落地加速](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%95%86%E4%B8%9A%E5%8C%96%E8%90%BD%E5%9C%B0%E5%8A%A0%E9%80%9F%23) `130.6K 🔥` `NEW`
1. [退钱哥晒世界杯球票账单 (Brother who refunded money posted the World Cup ticket bill)](https://s.weibo.com/weibo?q=%23%E9%80%80%E9%92%B1%E5%93%A5%E6%99%92%E4%B8%96%E7%95%8C%E6%9D%AF%E7%90%83%E7%A5%A8%E8%B4%A6%E5%8D%95%23) `840.7K 🔥` `+175%`
1. [梦想启程且歌且行 (Dreams start and sing and go)](https://s.weibo.com/weibo?q=%23%E6%A2%A6%E6%83%B3%E5%90%AF%E7%A8%8B%E4%B8%94%E6%AD%8C%E4%B8%94%E8%A1%8C%23) `834.0K 🔥` `+45%`
1. [朋友圈和微博的差别belike](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%92%8C%E5%BE%AE%E5%8D%9A%E7%9A%84%E5%B7%AE%E5%88%ABbelike%23) `719.8K 🔥` `+58%`
1. [还是以前的老师比较敢写评语 (Teachers in the past were more daring to write comments)](https://s.weibo.com/weibo?q=%23%E8%BF%98%E6%98%AF%E4%BB%A5%E5%89%8D%E7%9A%84%E8%80%81%E5%B8%88%E6%AF%94%E8%BE%83%E6%95%A2%E5%86%99%E8%AF%84%E8%AF%AD%23) `694.7K 🔥` `+73%`
1. [仿佛打开了一本婴儿使用说明书](https://s.weibo.com/weibo?q=%23%E4%BB%BF%E4%BD%9B%E6%89%93%E5%BC%80%E4%BA%86%E4%B8%80%E6%9C%AC%E5%A9%B4%E5%84%BF%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E%E4%B9%A6%23) `418.7K 🔥` `+57%`
1. [妈妈回应儿子681分选择中本贯通 (Mother responds to her son’s choice of Nakamoto Pass with 681 points)](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%9B%9E%E5%BA%94%E5%84%BF%E5%AD%90681%E5%88%86%E9%80%89%E6%8B%A9%E4%B8%AD%E6%9C%AC%E8%B4%AF%E9%80%9A%23) `292.7K 🔥` `+21%`
1. [50万的蛋糕掉下来完好无损](https://s.weibo.com/weibo?q=%2350%E4%B8%87%E7%9A%84%E8%9B%8B%E7%B3%95%E6%8E%89%E4%B8%8B%E6%9D%A5%E5%AE%8C%E5%A5%BD%E6%97%A0%E6%8D%9F%23) `277.4K 🔥` `+24%`
1. [不要用豆包解决人际关系矛盾 (Don’t use bean bags to resolve interpersonal conflicts)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E7%94%A8%E8%B1%86%E5%8C%85%E8%A7%A3%E5%86%B3%E4%BA%BA%E9%99%85%E5%85%B3%E7%B3%BB%E7%9F%9B%E7%9B%BE%23) `314.9K 🔥`
1. [主体性强的人会觉得谈恋爱很无聊 (People with a strong sense of subjectivity may find falling in love boring.)](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E4%BD%93%E6%80%A7%E5%BC%BA%E7%9A%84%E4%BA%BA%E4%BC%9A%E8%A7%89%E5%BE%97%E8%B0%88%E6%81%8B%E7%88%B1%E5%BE%88%E6%97%A0%E8%81%8A%23) `244.8K 🔥`
1. [人工智能 文科生](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%20%E6%96%87%E7%A7%91%E7%94%9F%23) `244.4K 🔥`
1. [曝张雅琪已婚 (It is revealed that Zhang Yaqi is married)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%BC%A0%E9%9B%85%E7%90%AA%E5%B7%B2%E5%A9%9A%23) `244.0K 🔥`
1. [面试因无证驾驶计算机被拒了](https://s.weibo.com/weibo?q=%23%E9%9D%A2%E8%AF%95%E5%9B%A0%E6%97%A0%E8%AF%81%E9%A9%BE%E9%A9%B6%E8%AE%A1%E7%AE%97%E6%9C%BA%E8%A2%AB%E6%8B%92%E4%BA%86%23) `243.0K 🔥`
1. [NewJeans回归预告 (NewJeans comeback trailer)](https://s.weibo.com/weibo?q=%23NewJeans%E5%9B%9E%E5%BD%92%E9%A2%84%E5%91%8A%23) `242.9K 🔥`
1. [央视曝九极真美传销陷阱 (CCTV exposes Jiuji Zhenmei’s pyramid scheme trap)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E4%B9%9D%E6%9E%81%E7%9C%9F%E7%BE%8E%E4%BC%A0%E9%94%80%E9%99%B7%E9%98%B1%23) `233.1K 🔥`
1. [深圳26岁女子体检发现是男性](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B326%E5%B2%81%E5%A5%B3%E5%AD%90%E4%BD%93%E6%A3%80%E5%8F%91%E7%8E%B0%E6%98%AF%E7%94%B7%E6%80%A7%23) `231.4K 🔥`
1. [小伙背15kg物资赴广西救灾不幸离世 (Young man carrying 15kg of supplies to Guangxi for disaster relief died unfortunately)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E8%83%8C15kg%E7%89%A9%E8%B5%84%E8%B5%B4%E5%B9%BF%E8%A5%BF%E6%95%91%E7%81%BE%E4%B8%8D%E5%B9%B8%E7%A6%BB%E4%B8%96%23) `227.8K 🔥`
1. [路人看到辛芷蕾以为去入伍了 (When passers-by saw Xin Zhilei, they thought she was enlisting in the army.)](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E4%BA%BA%E7%9C%8B%E5%88%B0%E8%BE%9B%E8%8A%B7%E8%95%BE%E4%BB%A5%E4%B8%BA%E5%8E%BB%E5%85%A5%E4%BC%8D%E4%BA%86%23) `214.6K 🔥`
1. [王源好明显的震颤 (Wang Yuan was clearly trembling)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E5%A5%BD%E6%98%8E%E6%98%BE%E7%9A%84%E9%9C%87%E9%A2%A4%23) `320.7K 🔥` `-21%`
1. [这一秒过火 听劝 (This second is too much. Listen to me.)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%20%E5%90%AC%E5%8A%9D%23) `181.7K 🔥` `-27%`
1. [九门](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%23) `143.2K 🔥` `-44%`
1. [何运晨维权 (He Yunchen rights protection)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%BF%90%E6%99%A8%E7%BB%B4%E6%9D%83%23) `139.7K 🔥` `-43%`
1. [花儿与少年8](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%84%BF%E4%B8%8E%E5%B0%91%E5%B9%B48%23) `139.4K 🔥` `-45%`
1. [海尔空调海外销量中企第一](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%B0%94%E7%A9%BA%E8%B0%83%E6%B5%B7%E5%A4%96%E9%94%80%E9%87%8F%E4%B8%AD%E4%BC%81%E7%AC%AC%E4%B8%80%23) `129.8K 🔥` `-40%`

Updated at 2026-07-22 09:25:06

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
