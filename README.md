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

1. [孙杨博士入学资格受质疑 (Dr. Sun Yang’s admission qualifications questioned)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%8D%9A%E5%A3%AB%E5%85%A5%E5%AD%A6%E8%B5%84%E6%A0%BC%E5%8F%97%E8%B4%A8%E7%96%91%23) `1.2M 🔥` `NEW`
1. [火箭湖人冰火两重天](https://s.weibo.com/weibo?q=%23%E7%81%AB%E7%AE%AD%E6%B9%96%E4%BA%BA%E5%86%B0%E7%81%AB%E4%B8%A4%E9%87%8D%E5%A4%A9%23) `839.4K 🔥` `NEW`
1. [五一假期全国高速公路免费](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%81%87%E6%9C%9F%E5%85%A8%E5%9B%BD%E9%AB%98%E9%80%9F%E5%85%AC%E8%B7%AF%E5%85%8D%E8%B4%B9%23) `673.0K 🔥` `NEW`
1. [我妈养我vs我养我自己](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%A6%88%E5%85%BB%E6%88%91vs%E6%88%91%E5%85%BB%E6%88%91%E8%87%AA%E5%B7%B1%23) `672.3K 🔥` `NEW`
1. [微信从聊天工具变成了工作软件](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E4%BB%8E%E8%81%8A%E5%A4%A9%E5%B7%A5%E5%85%B7%E5%8F%98%E6%88%90%E4%BA%86%E5%B7%A5%E4%BD%9C%E8%BD%AF%E4%BB%B6%23) `670.4K 🔥` `NEW`
1. [宋雨琦 跑男](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E9%9B%A8%E7%90%A6%20%E8%B7%91%E7%94%B7%23) `655.1K 🔥` `NEW`
1. [超话签到状态上线](https://s.weibo.com/weibo?q=%23%E8%B6%85%E8%AF%9D%E7%AD%BE%E5%88%B0%E7%8A%B6%E6%80%81%E4%B8%8A%E7%BA%BF%23) `572.6K 🔥` `NEW`
1. [特斯拉Semi首辆量产车下线](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%96%AF%E6%8B%89Semi%E9%A6%96%E8%BE%86%E9%87%8F%E4%BA%A7%E8%BD%A6%E4%B8%8B%E7%BA%BF%23) `317.4K 🔥` `NEW`
1. [马頔发言争议后首发博](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E5%8F%91%E8%A8%80%E4%BA%89%E8%AE%AE%E5%90%8E%E9%A6%96%E5%8F%91%E5%8D%9A%23) `316.7K 🔥` `NEW`
1. [阿姨买肉误输79万多随即取消支付](https://s.weibo.com/weibo?q=%23%E9%98%BF%E5%A7%A8%E4%B9%B0%E8%82%89%E8%AF%AF%E8%BE%9379%E4%B8%87%E5%A4%9A%E9%9A%8F%E5%8D%B3%E5%8F%96%E6%B6%88%E6%94%AF%E4%BB%98%23) `316.5K 🔥` `NEW`
1. [古天乐被传隐婚生子 (Louis Koo is rumored to have a child from a hidden marriage)](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E5%A4%A9%E4%B9%90%E8%A2%AB%E4%BC%A0%E9%9A%90%E5%A9%9A%E7%94%9F%E5%AD%90%23) `316.3K 🔥` `NEW`
1. [孙杨 再见爱人](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%20%E5%86%8D%E8%A7%81%E7%88%B1%E4%BA%BA%23) `315.4K 🔥` `NEW`
1. [王腾称加仓了小米股票](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%85%BE%E7%A7%B0%E5%8A%A0%E4%BB%93%E4%BA%86%E5%B0%8F%E7%B1%B3%E8%82%A1%E7%A5%A8%23) `314.6K 🔥` `NEW`
1. [儿子被骗至缅甸9个月母亲哽咽发声](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E8%A2%AB%E9%AA%97%E8%87%B3%E7%BC%85%E7%94%B89%E4%B8%AA%E6%9C%88%E6%AF%8D%E4%BA%B2%E5%93%BD%E5%92%BD%E5%8F%91%E5%A3%B0%23) `313.1K 🔥` `NEW`
1. [孙怡给谢娜吓出汗来了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E7%BB%99%E8%B0%A2%E5%A8%9C%E5%90%93%E5%87%BA%E6%B1%97%E6%9D%A5%E4%BA%86%23) `311.5K 🔥` `NEW`
1. [金饰价格断崖下跌](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E6%A0%BC%E6%96%AD%E5%B4%96%E4%B8%8B%E8%B7%8C%23) `311.3K 🔥` `NEW`
1. [李小冉上五哈也难逃抽象](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E4%B8%8A%E4%BA%94%E5%93%88%E4%B9%9F%E9%9A%BE%E9%80%83%E6%8A%BD%E8%B1%A1%23) `285.8K 🔥` `NEW`
1. [强烈建议大家去看语文综艺](https://s.weibo.com/weibo?q=%23%E5%BC%BA%E7%83%88%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%8E%BB%E7%9C%8B%E8%AF%AD%E6%96%87%E7%BB%BC%E8%89%BA%23) `265.6K 🔥` `NEW`
1. [C罗霸气回应挑衅我有五个欧冠](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E9%9C%B8%E6%B0%94%E5%9B%9E%E5%BA%94%E6%8C%91%E8%A1%85%E6%88%91%E6%9C%89%E4%BA%94%E4%B8%AA%E6%AC%A7%E5%86%A0%23) `265.5K 🔥` `NEW`
1. [杨幂主持KPL演技大赏](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E4%B8%BB%E6%8C%81KPL%E6%BC%94%E6%8A%80%E5%A4%A7%E8%B5%8F%23) `264.6K 🔥` `NEW`
1. [问界M6交付速度刺激购买决策 (Wenjie M6 delivery speed stimulates purchase decision)](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8CM6%E4%BA%A4%E4%BB%98%E9%80%9F%E5%BA%A6%E5%88%BA%E6%BF%80%E8%B4%AD%E4%B9%B0%E5%86%B3%E7%AD%96%23) `263.4K 🔥` `NEW`
1. [乐华艺人都没有看过合同](https://s.weibo.com/weibo?q=%23%E4%B9%90%E5%8D%8E%E8%89%BA%E4%BA%BA%E9%83%BD%E6%B2%A1%E6%9C%89%E7%9C%8B%E8%BF%87%E5%90%88%E5%90%8C%23) `263.3K 🔥` `NEW`
1. [韩国演员朴东彬去世](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%BC%94%E5%91%98%E6%9C%B4%E4%B8%9C%E5%BD%AC%E5%8E%BB%E4%B8%96%23) `245.8K 🔥` `NEW`
1. [歼15喊话日本军机你在我射程之内](https://s.weibo.com/weibo?q=%23%E6%AD%BC15%E5%96%8A%E8%AF%9D%E6%97%A5%E6%9C%AC%E5%86%9B%E6%9C%BA%E4%BD%A0%E5%9C%A8%E6%88%91%E5%B0%84%E7%A8%8B%E4%B9%8B%E5%86%85%23) `245.0K 🔥` `NEW`
1. [李煜东 我姓刘](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%85%9C%E4%B8%9C%20%E6%88%91%E5%A7%93%E5%88%98%23) `228.3K 🔥` `NEW`
1. [母亲谈判期间吴宣仪身体不适](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E8%B0%88%E5%88%A4%E6%9C%9F%E9%97%B4%E5%90%B4%E5%AE%A3%E4%BB%AA%E8%BA%AB%E4%BD%93%E4%B8%8D%E9%80%82%23) `222.0K 🔥` `NEW`
1. [黄灿灿曾因自卑不敢和杨紫交朋友](https://s.weibo.com/weibo?q=%23%E9%BB%84%E7%81%BF%E7%81%BF%E6%9B%BE%E5%9B%A0%E8%87%AA%E5%8D%91%E4%B8%8D%E6%95%A2%E5%92%8C%E6%9D%A8%E7%B4%AB%E4%BA%A4%E6%9C%8B%E5%8F%8B%23) `207.0K 🔥` `NEW`
1. [思虑过重的人一定要学会自救](https://s.weibo.com/weibo?q=%23%E6%80%9D%E8%99%91%E8%BF%87%E9%87%8D%E7%9A%84%E4%BA%BA%E4%B8%80%E5%AE%9A%E8%A6%81%E5%AD%A6%E4%BC%9A%E8%87%AA%E6%95%91%23) `195.8K 🔥` `NEW`
1. [A股新晋股王寒武纪](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%96%B0%E6%99%8B%E8%82%A1%E7%8E%8B%E5%AF%92%E6%AD%A6%E7%BA%AA%23) `190.5K 🔥` `NEW`
1. [时团五月行程安排](https://s.weibo.com/weibo?q=%23%E6%97%B6%E5%9B%A2%E4%BA%94%E6%9C%88%E8%A1%8C%E7%A8%8B%E5%AE%89%E6%8E%92%23) `190.1K 🔥` `NEW`
1. [香奈儿回应无底绑带鞋 (Chanel responds to bottomless lace-up shoes)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E5%A5%88%E5%84%BF%E5%9B%9E%E5%BA%94%E6%97%A0%E5%BA%95%E7%BB%91%E5%B8%A6%E9%9E%8B%23) `159.4K 🔥` `NEW`
1. [孟子义行程图](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E8%A1%8C%E7%A8%8B%E5%9B%BE%23) `158.0K 🔥` `NEW`
1. [黄晓明合照状态](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%99%93%E6%98%8E%E5%90%88%E7%85%A7%E7%8A%B6%E6%80%81%23) `157.2K 🔥` `NEW`
1. [贺峻霖callback十年前发的微博](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96callback%E5%8D%81%E5%B9%B4%E5%89%8D%E5%8F%91%E7%9A%84%E5%BE%AE%E5%8D%9A%23) `154.2K 🔥` `NEW`
1. [GPT5.5 少说多做](https://s.weibo.com/weibo?q=%23GPT5.5%20%E5%B0%91%E8%AF%B4%E5%A4%9A%E5%81%9A%23) `153.3K 🔥` `NEW`
1. [曾辉韩雨彤牵手逛夜市](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E9%9F%A9%E9%9B%A8%E5%BD%A4%E7%89%B5%E6%89%8B%E9%80%9B%E5%A4%9C%E5%B8%82%23) `153.3K 🔥` `NEW`
1. [韩汶栩删16级粉丝解散粉丝群](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E6%B1%B6%E6%A0%A9%E5%88%A016%E7%BA%A7%E7%B2%89%E4%B8%9D%E8%A7%A3%E6%95%A3%E7%B2%89%E4%B8%9D%E7%BE%A4%23) `312.5K 🔥` `+27%`
1. [年轻人出门越来越极简了](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%87%BA%E9%97%A8%E8%B6%8A%E6%9D%A5%E8%B6%8A%E6%9E%81%E7%AE%80%E4%BA%86%23) `528.2K 🔥` `-36%`
1. [中1000w彩票冷知识](https://s.weibo.com/weibo?q=%23%E4%B8%AD1000w%E5%BD%A9%E7%A5%A8%E5%86%B7%E7%9F%A5%E8%AF%86%23) `453.1K 🔥` `-45%`
1. [5月起未经同意不得发送商业短信 (From May, no commercial text messages can be sent without consent)](https://s.weibo.com/weibo?q=%235%E6%9C%88%E8%B5%B7%E6%9C%AA%E7%BB%8F%E5%90%8C%E6%84%8F%E4%B8%8D%E5%BE%97%E5%8F%91%E9%80%81%E5%95%86%E4%B8%9A%E7%9F%AD%E4%BF%A1%23) `317.5K 🔥` `-78%`
1. [吴宣仪母亲与乐华谈判视频首曝光](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%A3%E4%BB%AA%E6%AF%8D%E4%BA%B2%E4%B8%8E%E4%B9%90%E5%8D%8E%E8%B0%88%E5%88%A4%E8%A7%86%E9%A2%91%E9%A6%96%E6%9B%9D%E5%85%89%23) `317.0K 🔥` `-32%`
1. [霍尔木兹海峡部分被困船员已遇难 (Some crew members trapped in the Strait of Hormuz have died)](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E9%83%A8%E5%88%86%E8%A2%AB%E5%9B%B0%E8%88%B9%E5%91%98%E5%B7%B2%E9%81%87%E9%9A%BE%23) `316.4K 🔥` `-56%`
1. [苹果印度生产线陷入停摆 (Apple production lines in India come to a halt)](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%8D%B0%E5%BA%A6%E7%94%9F%E4%BA%A7%E7%BA%BF%E9%99%B7%E5%85%A5%E5%81%9C%E6%91%86%23) `313.9K 🔥` `-32%`
1. [赛力斯一季度净利润7.54亿元](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E5%8A%9B%E6%96%AF%E4%B8%80%E5%AD%A3%E5%BA%A6%E5%87%80%E5%88%A9%E6%B6%A67.54%E4%BA%BF%E5%85%83%23) `313.7K 🔥` `-24%`
1. [陈坤晒北电表演系96班30年合照](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%9D%A4%E6%99%92%E5%8C%97%E7%94%B5%E8%A1%A8%E6%BC%94%E7%B3%BB96%E7%8F%AD30%E5%B9%B4%E5%90%88%E7%85%A7%23) `302.9K 🔥` `-35%`
1. [火箭vs湖人](https://s.weibo.com/weibo?q=%23%E7%81%AB%E7%AE%ADvs%E6%B9%96%E4%BA%BA%23) `264.3K 🔥` `-43%`
1. [女生攒到10万怕被嘲笑网友全是鼓励](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E6%94%92%E5%88%B010%E4%B8%87%E6%80%95%E8%A2%AB%E5%98%B2%E7%AC%91%E7%BD%91%E5%8F%8B%E5%85%A8%E6%98%AF%E9%BC%93%E5%8A%B1%23) `211.5K 🔥` `-75%`
1. [YG新女团第三位成员公开](https://s.weibo.com/weibo?q=%23YG%E6%96%B0%E5%A5%B3%E5%9B%A2%E7%AC%AC%E4%B8%89%E4%BD%8D%E6%88%90%E5%91%98%E5%85%AC%E5%BC%80%23) `192.7K 🔥` `-58%`
1. [朱珠回复唐嫣](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E7%8F%A0%E5%9B%9E%E5%A4%8D%E5%94%90%E5%AB%A3%23) `191.4K 🔥` `-47%`
1. [青岛偶遇关晓彤 (Meeting Guan Xiaotong in Qingdao)](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E5%81%B6%E9%81%87%E5%85%B3%E6%99%93%E5%BD%A4%23) `185.7K 🔥` `-60%`
1. [老式水果为何消失了](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%BC%8F%E6%B0%B4%E6%9E%9C%E4%B8%BA%E4%BD%95%E6%B6%88%E5%A4%B1%E4%BA%86%23) `154.2K 🔥` `-70%`

Updated at 2026-04-30 14:37:50

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
