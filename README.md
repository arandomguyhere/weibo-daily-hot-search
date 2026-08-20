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

1. [华为阔直板手机亮相 (Huawei's wide straight phone unveiled)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E9%98%94%E7%9B%B4%E6%9D%BF%E6%89%8B%E6%9C%BA%E4%BA%AE%E7%9B%B8%23) `2.5M 🔥` `NEW`
1. [诋毁企业商誉触碰法律红线](https://s.weibo.com/weibo?q=%23%E8%AF%8B%E6%AF%81%E4%BC%81%E4%B8%9A%E5%95%86%E8%AA%89%E8%A7%A6%E7%A2%B0%E6%B3%95%E5%BE%8B%E7%BA%A2%E7%BA%BF%23) `523.0K 🔥` `NEW`
1. [成都偶遇王橹杰张函瑞](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E5%81%B6%E9%81%87%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%BC%A0%E5%87%BD%E7%91%9E%23) `300.9K 🔥` `NEW`
1. [AI开始报警抓人了](https://s.weibo.com/weibo?q=%23AI%E5%BC%80%E5%A7%8B%E6%8A%A5%E8%AD%A6%E6%8A%93%E4%BA%BA%E4%BA%86%23) `283.2K 🔥` `NEW`
1. [华为PuraXView](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAPuraXView%23) `262.9K 🔥` `NEW`
1. [享界G9的内饰有多豪华](https://s.weibo.com/weibo?q=%23%E4%BA%AB%E7%95%8CG9%E7%9A%84%E5%86%85%E9%A5%B0%E6%9C%89%E5%A4%9A%E8%B1%AA%E5%8D%8E%23) `217.7K 🔥` `NEW`
1. [水中拽出60斤大鱼男子称鱼状态不对](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E4%B8%AD%E6%8B%BD%E5%87%BA60%E6%96%A4%E5%A4%A7%E9%B1%BC%E7%94%B7%E5%AD%90%E7%A7%B0%E9%B1%BC%E7%8A%B6%E6%80%81%E4%B8%8D%E5%AF%B9%23) `216.1K 🔥` `NEW`
1. [蒸苹果和煮苹果作用大不同](https://s.weibo.com/weibo?q=%23%E8%92%B8%E8%8B%B9%E6%9E%9C%E5%92%8C%E7%85%AE%E8%8B%B9%E6%9E%9C%E4%BD%9C%E7%94%A8%E5%A4%A7%E4%B8%8D%E5%90%8C%23) `204.6K 🔥` `NEW`
1. [原来年薪60万助理是这么干活的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%B9%B4%E8%96%AA60%E4%B8%87%E5%8A%A9%E7%90%86%E6%98%AF%E8%BF%99%E4%B9%88%E5%B9%B2%E6%B4%BB%E7%9A%84%23) `202.7K 🔥` `NEW`
1. [维斯塔潘续约](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E6%96%AF%E5%A1%94%E6%BD%98%E7%BB%AD%E7%BA%A6%23) `185.9K 🔥` `NEW`
1. [童锦程的酒吧倒闭了 (Tong Jincheng's bar closed down)](https://s.weibo.com/weibo?q=%23%E7%AB%A5%E9%94%A6%E7%A8%8B%E7%9A%84%E9%85%92%E5%90%A7%E5%80%92%E9%97%AD%E4%BA%86%23) `167.6K 🔥` `NEW`
1. [90后女孩辟谷减肥瘦40斤后患脑病](https://s.weibo.com/weibo?q=%2390%E5%90%8E%E5%A5%B3%E5%AD%A9%E8%BE%9F%E8%B0%B7%E5%87%8F%E8%82%A5%E7%98%A640%E6%96%A4%E5%90%8E%E6%82%A3%E8%84%91%E7%97%85%23) `142.8K 🔥` `NEW`
1. [小房子也可以有大冰箱](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%88%BF%E5%AD%90%E4%B9%9F%E5%8F%AF%E4%BB%A5%E6%9C%89%E5%A4%A7%E5%86%B0%E7%AE%B1%23) `141.2K 🔥` `NEW`
1. [父母说Selina现在过得很好](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E8%AF%B4Selina%E7%8E%B0%E5%9C%A8%E8%BF%87%E5%BE%97%E5%BE%88%E5%A5%BD%23) `139.8K 🔥` `NEW`
1. [徐怀钰方回应不顾家还争遗产](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%80%80%E9%92%B0%E6%96%B9%E5%9B%9E%E5%BA%94%E4%B8%8D%E9%A1%BE%E5%AE%B6%E8%BF%98%E4%BA%89%E9%81%97%E4%BA%A7%23) `138.2K 🔥` `NEW`
1. [Lisa比基尼泳池照](https://s.weibo.com/weibo?q=%23Lisa%E6%AF%94%E5%9F%BA%E5%B0%BC%E6%B3%B3%E6%B1%A0%E7%85%A7%23) `134.5K 🔥` `NEW`
1. [空枪票房倒挂](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%E7%A5%A8%E6%88%BF%E5%80%92%E6%8C%82%23) `119.4K 🔥` `NEW`
1. [空枪](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%23) `104.4K 🔥` `NEW`
1. [宇树总市值已跌超1500亿](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E6%80%BB%E5%B8%82%E5%80%BC%E5%B7%B2%E8%B7%8C%E8%B6%851500%E4%BA%BF%23) `1.8M 🔥` `+383%`
1. [疑似缅北电诈园区图片曝光 (Pictures of suspected telecom fraud park in northern Myanmar exposed)](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E7%BC%85%E5%8C%97%E7%94%B5%E8%AF%88%E5%9B%AD%E5%8C%BA%E5%9B%BE%E7%89%87%E6%9B%9D%E5%85%89%23) `583.3K 🔥` `+63%`
1. [赵今麦美貌引外网热议](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E7%BE%8E%E8%B2%8C%E5%BC%95%E5%A4%96%E7%BD%91%E7%83%AD%E8%AE%AE%23) `349.2K 🔥` `+159%`
1. [内娱国产剧尺度都这么大了吗 (Are all domestic entertainment dramas this big?)](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E5%9B%BD%E4%BA%A7%E5%89%A7%E5%B0%BA%E5%BA%A6%E9%83%BD%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%E5%90%97%23) `262.0K 🔥` `+116%`
1. [早春晴朗亲密戏 (Intimate scene on a sunny day in early spring)](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E4%BA%B2%E5%AF%86%E6%88%8F%23) `260.5K 🔥` `+113%`
1. [中非视听之约北京启幕 (China-Africa Audiovisual Agreement kicks off in Beijing)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%9D%9E%E8%A7%86%E5%90%AC%E4%B9%8B%E7%BA%A6%E5%8C%97%E4%BA%AC%E5%90%AF%E5%B9%95%23) `1.4M 🔥`
1. [月薪4000存款20w (Monthly salary 4000, deposit 20w)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA4000%E5%AD%98%E6%AC%BE20w%23) `1.3M 🔥`
1. [和思想贫瘠的人聊天有多痛苦 (How painful it is to chat with poor-minded people)](https://s.weibo.com/weibo?q=%23%E5%92%8C%E6%80%9D%E6%83%B3%E8%B4%AB%E7%98%A0%E7%9A%84%E4%BA%BA%E8%81%8A%E5%A4%A9%E6%9C%89%E5%A4%9A%E7%97%9B%E8%8B%A6%23) `432.4K 🔥`
1. [我家那闺女2026官宣节奏 (My daughter 2026 official announcement rhythm)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E9%82%A3%E9%97%BA%E5%A5%B32026%E5%AE%98%E5%AE%A3%E8%8A%82%E5%A5%8F%23) `423.5K 🔥`
1. [曾辉一公没人选](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E4%B8%80%E5%85%AC%E6%B2%A1%E4%BA%BA%E9%80%89%23) `404.8K 🔥`
1. [青岛涉事女游客多次致歉求饶](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E6%B6%89%E4%BA%8B%E5%A5%B3%E6%B8%B8%E5%AE%A2%E5%A4%9A%E6%AC%A1%E8%87%B4%E6%AD%89%E6%B1%82%E9%A5%B6%23) `381.3K 🔥`
1. [李响8年3次求婚孙骁骁未果](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%93%8D8%E5%B9%B43%E6%AC%A1%E6%B1%82%E5%A9%9A%E5%AD%99%E9%AA%81%E9%AA%81%E6%9C%AA%E6%9E%9C%23) `379.8K 🔥`
1. [许家印违法所得追缴不足部分责令退赔](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%AE%B6%E5%8D%B0%E8%BF%9D%E6%B3%95%E6%89%80%E5%BE%97%E8%BF%BD%E7%BC%B4%E4%B8%8D%E8%B6%B3%E9%83%A8%E5%88%86%E8%B4%A3%E4%BB%A4%E9%80%80%E8%B5%94%23) `303.4K 🔥`
1. [存钱重要还是旅游重要](https://s.weibo.com/weibo?q=%23%E5%AD%98%E9%92%B1%E9%87%8D%E8%A6%81%E8%BF%98%E6%98%AF%E6%97%85%E6%B8%B8%E9%87%8D%E8%A6%81%23) `259.0K 🔥`
1. [好的睡眠是什么感觉](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E7%9A%84%E7%9D%A1%E7%9C%A0%E6%98%AF%E4%BB%80%E4%B9%88%E6%84%9F%E8%A7%89%23) `211.1K 🔥`
1. [惠英红感谢鲁豫11年前雪中送炭](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%E6%84%9F%E8%B0%A2%E9%B2%81%E8%B1%AB11%E5%B9%B4%E5%89%8D%E9%9B%AA%E4%B8%AD%E9%80%81%E7%82%AD%23) `167.2K 🔥`
1. [第五人格赛事超话](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%E8%B5%9B%E4%BA%8B%E8%B6%85%E8%AF%9D%23) `136.0K 🔥`
1. [宇树大跌](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E5%A4%A7%E8%B7%8C%23) `111.6K 🔥`
1. [我这一生最大的罪是把人写成了妖 (The biggest sin in my life is to write people into monsters)](https://s.weibo.com/weibo?q=%23%E6%88%91%E8%BF%99%E4%B8%80%E7%94%9F%E6%9C%80%E5%A4%A7%E7%9A%84%E7%BD%AA%E6%98%AF%E6%8A%8A%E4%BA%BA%E5%86%99%E6%88%90%E4%BA%86%E5%A6%96%23) `98.5K 🔥`
1. [警方通报时代峰峻楼下聚集事件 (Police report on gathering incident downstairs at Times Fengjun)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E6%A5%BC%E4%B8%8B%E8%81%9A%E9%9B%86%E4%BA%8B%E4%BB%B6%23) `10.1M 🔥` `-37%`
1. [孕妇产检因医生疏忽误服有毒液体](https://s.weibo.com/weibo?q=%23%E5%AD%95%E5%A6%87%E4%BA%A7%E6%A3%80%E5%9B%A0%E5%8C%BB%E7%94%9F%E7%96%8F%E5%BF%BD%E8%AF%AF%E6%9C%8D%E6%9C%89%E6%AF%92%E6%B6%B2%E4%BD%93%23) `504.0K 🔥` `-78%`
1. [许家印一审被判无期 (Xu Jiayin was sentenced to life in the first instance)](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%AE%B6%E5%8D%B0%E4%B8%80%E5%AE%A1%E8%A2%AB%E5%88%A4%E6%97%A0%E6%9C%9F%23) `363.0K 🔥` `-88%`
1. [杨幂开叉皮裙](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%BC%80%E5%8F%89%E7%9A%AE%E8%A3%99%23) `257.5K 🔥` `-28%`
1. [谁在七夕送了李小冉一辆车](https://s.weibo.com/weibo?q=%23%E8%B0%81%E5%9C%A8%E4%B8%83%E5%A4%95%E9%80%81%E4%BA%86%E6%9D%8E%E5%B0%8F%E5%86%89%E4%B8%80%E8%BE%86%E8%BD%A6%23) `257.5K 🔥` `-27%`
1. [开推5拟邀阵容](https://s.weibo.com/weibo?q=%23%E5%BC%80%E6%8E%A85%E6%8B%9F%E9%82%80%E9%98%B5%E5%AE%B9%23) `251.0K 🔥` `-30%`
1. [宇树大跌中签者说幸亏全卖了](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E5%A4%A7%E8%B7%8C%E4%B8%AD%E7%AD%BE%E8%80%85%E8%AF%B4%E5%B9%B8%E4%BA%8F%E5%85%A8%E5%8D%96%E4%BA%86%23) `250.7K 🔥` `-28%`
1. [比收到更卑微的词出现了 (A word more humble than received came up.)](https://s.weibo.com/weibo?q=%23%E6%AF%94%E6%94%B6%E5%88%B0%E6%9B%B4%E5%8D%91%E5%BE%AE%E7%9A%84%E8%AF%8D%E5%87%BA%E7%8E%B0%E4%BA%86%23) `220.8K 🔥` `-39%`
1. [李响 孙骁骁](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%93%8D%20%E5%AD%99%E9%AA%81%E9%AA%81%23) `199.3K 🔥` `-44%`
1. [享界G9首发800V全主动稳定杆](https://s.weibo.com/weibo?q=%23%E4%BA%AB%E7%95%8CG9%E9%A6%96%E5%8F%91800V%E5%85%A8%E4%B8%BB%E5%8A%A8%E7%A8%B3%E5%AE%9A%E6%9D%86%23) `188.5K 🔥` `-46%`
1. [我对迪丽热巴说我一辈子爱你](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AF%B9%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%AF%B4%E6%88%91%E4%B8%80%E8%BE%88%E5%AD%90%E7%88%B1%E4%BD%A0%23) `135.2K 🔥` `-62%`
1. [MRC对战成都GG](https://s.weibo.com/weibo?q=%23MRC%E5%AF%B9%E6%88%98%E6%88%90%E9%83%BDGG%23) `132.0K 🔥` `-34%`
1. [建议大家去看外贸综艺 (I suggest you watch the foreign trade variety show)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%8E%BB%E7%9C%8B%E5%A4%96%E8%B4%B8%E7%BB%BC%E8%89%BA%23) `131.6K 🔥` `-38%`
1. [九门没了 (Nine gates are gone)](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E6%B2%A1%E4%BA%86%23) `111.4K 🔥` `-62%`

Updated at 2026-08-20 17:02:43

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
