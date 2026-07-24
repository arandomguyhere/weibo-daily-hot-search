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

1. [赛里木湖景区致歉 (Sailimu Lake Scenic Area apologizes)](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E9%87%8C%E6%9C%A8%E6%B9%96%E6%99%AF%E5%8C%BA%E8%87%B4%E6%AD%89%23) `557.2K 🔥` `NEW`
1. [卖淫案涉事派出所副所长被判无罪](https://s.weibo.com/weibo?q=%23%E5%8D%96%E6%B7%AB%E6%A1%88%E6%B6%89%E4%BA%8B%E6%B4%BE%E5%87%BA%E6%89%80%E5%89%AF%E6%89%80%E9%95%BF%E8%A2%AB%E5%88%A4%E6%97%A0%E7%BD%AA%23) `553.2K 🔥` `NEW`
1. [我家家电太有品了](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E5%AE%B6%E7%94%B5%E5%A4%AA%E6%9C%89%E5%93%81%E4%BA%86%23) `477.0K 🔥` `NEW`
1. [取消午休四点下班你会同意吗](https://s.weibo.com/weibo?q=%23%E5%8F%96%E6%B6%88%E5%8D%88%E4%BC%91%E5%9B%9B%E7%82%B9%E4%B8%8B%E7%8F%AD%E4%BD%A0%E4%BC%9A%E5%90%8C%E6%84%8F%E5%90%97%23) `451.2K 🔥` `NEW`
1. [这一秒过火豆瓣开分](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E8%B1%86%E7%93%A3%E5%BC%80%E5%88%86%23) `198.9K 🔥` `NEW`
1. [刘耀文去办美签了](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E5%8E%BB%E5%8A%9E%E7%BE%8E%E7%AD%BE%E4%BA%86%23) `198.6K 🔥` `NEW`
1. [菲律宾](https://s.weibo.com/weibo?q=%23%E8%8F%B2%E5%BE%8B%E5%AE%BE%23) `197.6K 🔥` `NEW`
1. [李宏毅变化好大](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%8F%E6%AF%85%E5%8F%98%E5%8C%96%E5%A5%BD%E5%A4%A7%23) `195.0K 🔥` `NEW`
1. [俄罗斯奶牛猫运毒被抓只能喵喵喵](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E5%A5%B6%E7%89%9B%E7%8C%AB%E8%BF%90%E6%AF%92%E8%A2%AB%E6%8A%93%E5%8F%AA%E8%83%BD%E5%96%B5%E5%96%B5%E5%96%B5%23) `194.1K 🔥` `NEW`
1. [男子在家裸体被女邻居发群是谁错了](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9C%A8%E5%AE%B6%E8%A3%B8%E4%BD%93%E8%A2%AB%E5%A5%B3%E9%82%BB%E5%B1%85%E5%8F%91%E7%BE%A4%E6%98%AF%E8%B0%81%E9%94%99%E4%BA%86%23) `178.9K 🔥` `NEW`
1. [今年饮料卖不动了 (I can’t sell drinks this year.)](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E9%A5%AE%E6%96%99%E5%8D%96%E4%B8%8D%E5%8A%A8%E4%BA%86%23) `177.5K 🔥` `NEW`
1. [贺峻霖中传研究生录取通知书到了](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%E4%B8%AD%E4%BC%A0%E7%A0%94%E7%A9%B6%E7%94%9F%E5%BD%95%E5%8F%96%E9%80%9A%E7%9F%A5%E4%B9%A6%E5%88%B0%E4%BA%86%23) `176.5K 🔥` `NEW`
1. [阿根廷队回应奥塔门迪退役](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E5%9B%9E%E5%BA%94%E5%A5%A5%E5%A1%94%E9%97%A8%E8%BF%AA%E9%80%80%E5%BD%B9%23) `173.0K 🔥` `NEW`
1. [逐玉红利](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E7%BA%A2%E5%88%A9%23) `170.6K 🔥` `NEW`
1. [张柏芝这些年被路人偶遇时拍到的图片](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9F%8F%E8%8A%9D%E8%BF%99%E4%BA%9B%E5%B9%B4%E8%A2%AB%E8%B7%AF%E4%BA%BA%E5%81%B6%E9%81%87%E6%97%B6%E6%8B%8D%E5%88%B0%E7%9A%84%E5%9B%BE%E7%89%87%23) `168.3K 🔥` `NEW`
1. [歌手直播](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E7%9B%B4%E6%92%AD%23) `162.4K 🔥` `NEW`
1. [孙千的备忘录好有文采](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E7%9A%84%E5%A4%87%E5%BF%98%E5%BD%95%E5%A5%BD%E6%9C%89%E6%96%87%E9%87%87%23) `160.2K 🔥` `NEW`
1. [苏新皓大C](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E5%A4%A7C%23) `158.0K 🔥` `NEW`
1. [男子捂死妻子埋尸荒野谎称她跑了](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8D%82%E6%AD%BB%E5%A6%BB%E5%AD%90%E5%9F%8B%E5%B0%B8%E8%8D%92%E9%87%8E%E8%B0%8E%E7%A7%B0%E5%A5%B9%E8%B7%91%E4%BA%86%23) `155.2K 🔥` `NEW`
1. [魏如萱跟王源说不用叫姐](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%A6%82%E8%90%B1%E8%B7%9F%E7%8E%8B%E6%BA%90%E8%AF%B4%E4%B8%8D%E7%94%A8%E5%8F%AB%E5%A7%90%23) `154.0K 🔥` `NEW`
1. [谢霆锋林依晨吃鱼子酱被咸到 (Nicholas Tse and Ariel Lin were so salty after eating caviar)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E6%9E%97%E4%BE%9D%E6%99%A8%E5%90%83%E9%B1%BC%E5%AD%90%E9%85%B1%E8%A2%AB%E5%92%B8%E5%88%B0%23) `151.9K 🔥` `NEW`
1. [侯明昊来开场了](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E6%9D%A5%E5%BC%80%E5%9C%BA%E4%BA%86%23) `148.6K 🔥` `NEW`
1. [张凌赫王楚然吻戏给我看红温了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%90%BB%E6%88%8F%E7%BB%99%E6%88%91%E7%9C%8B%E7%BA%A2%E6%B8%A9%E4%BA%86%23) `147.1K 🔥` `NEW`
1. [大家都工作留痕到什么程度](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AE%B6%E9%83%BD%E5%B7%A5%E4%BD%9C%E7%95%99%E7%97%95%E5%88%B0%E4%BB%80%E4%B9%88%E7%A8%8B%E5%BA%A6%23) `143.6K 🔥` `NEW`
1. [白鹿新剧导演李木戈](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%96%B0%E5%89%A7%E5%AF%BC%E6%BC%94%E6%9D%8E%E6%9C%A8%E6%88%88%23) `142.7K 🔥` `NEW`
1. [开完两小时会豆包提取的会议纪要](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%AE%8C%E4%B8%A4%E5%B0%8F%E6%97%B6%E4%BC%9A%E8%B1%86%E5%8C%85%E6%8F%90%E5%8F%96%E7%9A%84%E4%BC%9A%E8%AE%AE%E7%BA%AA%E8%A6%81%23) `142.6K 🔥` `NEW`
1. [蜘蛛侠](https://s.weibo.com/weibo?q=%23%E8%9C%98%E8%9B%9B%E4%BE%A0%23) `138.6K 🔥` `NEW`
1. [范丞丞直播松弛感拉满了](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E7%9B%B4%E6%92%AD%E6%9D%BE%E5%BC%9B%E6%84%9F%E6%8B%89%E6%BB%A1%E4%BA%86%23) `136.2K 🔥` `NEW`
1. [小鹏召回33473辆X9汽车](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8F%E5%8F%AC%E5%9B%9E33473%E8%BE%86X9%E6%B1%BD%E8%BD%A6%23) `136.1K 🔥` `NEW`
1. [长相思超爽的结算画面](https://s.weibo.com/weibo?q=%23%E9%95%BF%E7%9B%B8%E6%80%9D%E8%B6%85%E7%88%BD%E7%9A%84%E7%BB%93%E7%AE%97%E7%94%BB%E9%9D%A2%23) `134.4K 🔥` `NEW`
1. [A股超4900只个股飘绿 (Over 4,900 A-share stocks are turning green)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E8%B6%854900%E5%8F%AA%E4%B8%AA%E8%82%A1%E9%A3%98%E7%BB%BF%23) `132.3K 🔥` `NEW`
1. [贴地飞行领克07GT上市14.58万起 (Lynk & Co's 07GT, which flies close to the ground, is launched with a starting price of 145,800)](https://s.weibo.com/weibo?q=%23%E8%B4%B4%E5%9C%B0%E9%A3%9E%E8%A1%8C%E9%A2%86%E5%85%8B07GT%E4%B8%8A%E5%B8%8214.58%E4%B8%87%E8%B5%B7%23) `667.4K 🔥`
1. [王虹教授在清华大学开讲挂谷猜想 (Professor Wang Hong gave a lecture on Kakeya Conjecture at Tsinghua University)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%99%B9%E6%95%99%E6%8E%88%E5%9C%A8%E6%B8%85%E5%8D%8E%E5%A4%A7%E5%AD%A6%E5%BC%80%E8%AE%B2%E6%8C%82%E8%B0%B7%E7%8C%9C%E6%83%B3%23) `267.4K 🔥`
1. [微信撤回消息后可删除提示字 (Prompt words can be deleted after WeChat withdraws the message)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E6%92%A4%E5%9B%9E%E6%B6%88%E6%81%AF%E5%90%8E%E5%8F%AF%E5%88%A0%E9%99%A4%E6%8F%90%E7%A4%BA%E5%AD%97%23) `1.9M 🔥` `-21%`
1. [产妇羊水栓塞抢救11小时换3次血](https://s.weibo.com/weibo?q=%23%E4%BA%A7%E5%A6%87%E7%BE%8A%E6%B0%B4%E6%A0%93%E5%A1%9E%E6%8A%A2%E6%95%9111%E5%B0%8F%E6%97%B6%E6%8D%A23%E6%AC%A1%E8%A1%80%23) `952.1K 🔥` `-40%`
1. [长江十年行](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%B1%9F%E5%8D%81%E5%B9%B4%E8%A1%8C%23) `726.8K 🔥` `-48%`
1. [四字名已经满足不了90后家长了](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%AD%97%E5%90%8D%E5%B7%B2%E7%BB%8F%E6%BB%A1%E8%B6%B3%E4%B8%8D%E4%BA%8690%E5%90%8E%E5%AE%B6%E9%95%BF%E4%BA%86%23) `486.0K 🔥` `-63%`
1. [瘦了二十斤后手的变化](https://s.weibo.com/weibo?q=%23%E7%98%A6%E4%BA%86%E4%BA%8C%E5%8D%81%E6%96%A4%E5%90%8E%E6%89%8B%E7%9A%84%E5%8F%98%E5%8C%96%23) `294.1K 🔥` `-52%`
1. [Angelababy13岁旧照](https://s.weibo.com/weibo?q=%23Angelababy13%E5%B2%81%E6%97%A7%E7%85%A7%23) `196.7K 🔥` `-35%`
1. [台风红霞](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%BA%A2%E9%9C%9E%23) `195.4K 🔥` `-25%`
1. [白鹿戴假发没遮全](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%88%B4%E5%81%87%E5%8F%91%E6%B2%A1%E9%81%AE%E5%85%A8%23) `181.3K 🔥` `-60%`
1. [BLG Hoya](https://s.weibo.com/weibo?q=%23BLG%20Hoya%23) `181.3K 🔥` `-41%`
1. [刘亦菲带哈哈晒太阳](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E5%B8%A6%E5%93%88%E5%93%88%E6%99%92%E5%A4%AA%E9%98%B3%23) `174.8K 🔥` `-41%`
1. [DeepSeek纠结了10秒还是决定谄媚 (DeepSeek hesitated for 10 seconds and decided to flatter)](https://s.weibo.com/weibo?q=%23DeepSeek%E7%BA%A0%E7%BB%93%E4%BA%8610%E7%A7%92%E8%BF%98%E6%98%AF%E5%86%B3%E5%AE%9A%E8%B0%84%E5%AA%9A%23) `174.2K 🔥` `-28%`
1. [原来生理性喜欢是这样的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%94%9F%E7%90%86%E6%80%A7%E5%96%9C%E6%AC%A2%E6%98%AF%E8%BF%99%E6%A0%B7%E7%9A%84%23) `171.1K 🔥` `-31%`
1. [金饰价格一夜大跌](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E6%A0%BC%E4%B8%80%E5%A4%9C%E5%A4%A7%E8%B7%8C%23) `167.3K 🔥` `-33%`
1. [铁拐李曹国舅动漫形象被批太丑](https://s.weibo.com/weibo?q=%23%E9%93%81%E6%8B%90%E6%9D%8E%E6%9B%B9%E5%9B%BD%E8%88%85%E5%8A%A8%E6%BC%AB%E5%BD%A2%E8%B1%A1%E8%A2%AB%E6%89%B9%E5%A4%AA%E4%B8%91%23) `165.7K 🔥` `-31%`
1. [男子在家裸体被邻居拍照发群](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9C%A8%E5%AE%B6%E8%A3%B8%E4%BD%93%E8%A2%AB%E9%82%BB%E5%B1%85%E6%8B%8D%E7%85%A7%E5%8F%91%E7%BE%A4%23) `161.1K 🔥` `-44%`
1. [裸体在家犯法还是拍别人裸照犯法](https://s.weibo.com/weibo?q=%23%E8%A3%B8%E4%BD%93%E5%9C%A8%E5%AE%B6%E7%8A%AF%E6%B3%95%E8%BF%98%E6%98%AF%E6%8B%8D%E5%88%AB%E4%BA%BA%E8%A3%B8%E7%85%A7%E7%8A%AF%E6%B3%95%23) `153.0K 🔥` `-38%`
1. [TOP张艺凡Prada大片](https://s.weibo.com/weibo?q=%23TOP%E5%BC%A0%E8%89%BA%E5%87%A1Prada%E5%A4%A7%E7%89%87%23) `150.1K 🔥` `-43%`
1. [王一博刷新圈速](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%88%B7%E6%96%B0%E5%9C%88%E9%80%9F%23) `142.6K 🔥` `-36%`
1. [郑恺看到苗苗剪短发后的反应 (Zheng Kai's reaction after seeing Miaomiao cutting her hair short)](https://s.weibo.com/weibo?q=%23%E9%83%91%E6%81%BA%E7%9C%8B%E5%88%B0%E8%8B%97%E8%8B%97%E5%89%AA%E7%9F%AD%E5%8F%91%E5%90%8E%E7%9A%84%E5%8F%8D%E5%BA%94%23) `138.1K 🔥` `-50%`

Updated at 2026-07-24 19:22:07

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
