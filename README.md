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

1. [奕境X9全球首秀鸿蒙座舱6 (Yijing X9 debuts Hongmeng Cockpit 6 in the world)](https://s.weibo.com/weibo?q=%23%E5%A5%95%E5%A2%83X9%E5%85%A8%E7%90%83%E9%A6%96%E7%A7%80%E9%B8%BF%E8%92%99%E5%BA%A7%E8%88%B16%23) `776.8K 🔥` `NEW`
1. [建议大家装修不要太大众](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E8%A3%85%E4%BF%AE%E4%B8%8D%E8%A6%81%E5%A4%AA%E5%A4%A7%E4%BC%97%23) `776.7K 🔥` `NEW`
1. [阿维塔 华为](https://s.weibo.com/weibo?q=%23%E9%98%BF%E7%BB%B4%E5%A1%94%20%E5%8D%8E%E4%B8%BA%23) `680.0K 🔥` `NEW`
1. [C罗年薪19亿足坛断档第一](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%B9%B4%E8%96%AA19%E4%BA%BF%E8%B6%B3%E5%9D%9B%E6%96%AD%E6%A1%A3%E7%AC%AC%E4%B8%80%23) `476.6K 🔥` `NEW`
1. [陈俊生150万年薪让罗子君买8万的鞋](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BF%8A%E7%94%9F150%E4%B8%87%E5%B9%B4%E8%96%AA%E8%AE%A9%E7%BD%97%E5%AD%90%E5%90%9B%E4%B9%B08%E4%B8%87%E7%9A%84%E9%9E%8B%23) `434.2K 🔥` `NEW`
1. [张凌赫一秒入戏太夯了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%B8%80%E7%A7%92%E5%85%A5%E6%88%8F%E5%A4%AA%E5%A4%AF%E4%BA%86%23) `419.2K 🔥` `NEW`
1. [锦州城管12345热线连刷5年假好评](https://s.weibo.com/weibo?q=%23%E9%94%A6%E5%B7%9E%E5%9F%8E%E7%AE%A112345%E7%83%AD%E7%BA%BF%E8%BF%9E%E5%88%B75%E5%B9%B4%E5%81%87%E5%A5%BD%E8%AF%84%23) `412.6K 🔥` `NEW`
1. [去过金字塔的人嘴是真的严](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E8%BF%87%E9%87%91%E5%AD%97%E5%A1%94%E7%9A%84%E4%BA%BA%E5%98%B4%E6%98%AF%E7%9C%9F%E7%9A%84%E4%B8%A5%23) `393.3K 🔥` `NEW`
1. [马薇薇回应消失5年](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E8%96%87%E8%96%87%E5%9B%9E%E5%BA%94%E6%B6%88%E5%A4%B15%E5%B9%B4%23) `362.9K 🔥` `NEW`
1. [遇难女孩闺蜜提供线索锁定消失点](https://s.weibo.com/weibo?q=%23%E9%81%87%E9%9A%BE%E5%A5%B3%E5%AD%A9%E9%97%BA%E8%9C%9C%E6%8F%90%E4%BE%9B%E7%BA%BF%E7%B4%A2%E9%94%81%E5%AE%9A%E6%B6%88%E5%A4%B1%E7%82%B9%23) `287.9K 🔥` `NEW`
1. [日本大量网帖否认核爆 (Japan's massive online posts deny nuclear explosions)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A4%A7%E9%87%8F%E7%BD%91%E5%B8%96%E5%90%A6%E8%AE%A4%E6%A0%B8%E7%88%86%23) `228.8K 🔥` `NEW`
1. [山西中阳残存明代城墙遭拆旧建新](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E4%B8%AD%E9%98%B3%E6%AE%8B%E5%AD%98%E6%98%8E%E4%BB%A3%E5%9F%8E%E5%A2%99%E9%81%AD%E6%8B%86%E6%97%A7%E5%BB%BA%E6%96%B0%23) `227.5K 🔥` `NEW`
1. [泰国枪击案凶手记者会上未戴手铐](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%9E%AA%E5%87%BB%E6%A1%88%E5%87%B6%E6%89%8B%E8%AE%B0%E8%80%85%E4%BC%9A%E4%B8%8A%E6%9C%AA%E6%88%B4%E6%89%8B%E9%93%90%23) `207.9K 🔥` `NEW`
1. [九门](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%23) `183.8K 🔥` `NEW`
1. [没被原子弹炸言论让日本人破防](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E8%A2%AB%E5%8E%9F%E5%AD%90%E5%BC%B9%E7%82%B8%E8%A8%80%E8%AE%BA%E8%AE%A9%E6%97%A5%E6%9C%AC%E4%BA%BA%E7%A0%B4%E9%98%B2%23) `182.7K 🔥` `NEW`
1. [小鹏G9L首发评测](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FG9L%E9%A6%96%E5%8F%91%E8%AF%84%E6%B5%8B%23) `182.3K 🔥` `NEW`
1. [田曦薇胡一天的捧花是生菜](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%83%A1%E4%B8%80%E5%A4%A9%E7%9A%84%E6%8D%A7%E8%8A%B1%E6%98%AF%E7%94%9F%E8%8F%9C%23) `182.2K 🔥` `NEW`
1. [我可以苦但朋友圈不行](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%8F%AF%E4%BB%A5%E8%8B%A6%E4%BD%86%E6%9C%8B%E5%8F%8B%E5%9C%88%E4%B8%8D%E8%A1%8C%23) `177.4K 🔥` `NEW`
1. [上海偶遇Bin](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%81%B6%E9%81%87Bin%23) `164.0K 🔥` `NEW`
1. [工作中什么事让你突然开智了](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E4%B8%AD%E4%BB%80%E4%B9%88%E4%BA%8B%E8%AE%A9%E4%BD%A0%E7%AA%81%E7%84%B6%E5%BC%80%E6%99%BA%E4%BA%86%23) `164.0K 🔥` `NEW`
1. [2026暑期最热女性角色 (The Hottest Female Characters of Summer 2026)](https://s.weibo.com/weibo?q=%232026%E6%9A%91%E6%9C%9F%E6%9C%80%E7%83%AD%E5%A5%B3%E6%80%A7%E8%A7%92%E8%89%B2%23) `164.0K 🔥` `NEW`
1. [真正的顶级友谊这种分寸感](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E7%9A%84%E9%A1%B6%E7%BA%A7%E5%8F%8B%E8%B0%8A%E8%BF%99%E7%A7%8D%E5%88%86%E5%AF%B8%E6%84%9F%23) `769.9K 🔥` `+38%`
1. [Jennie堵鼻子](https://s.weibo.com/weibo?q=%23Jennie%E5%A0%B5%E9%BC%BB%E5%AD%90%23) `429.4K 🔥` `+26%`
1. [韩网友因张元英说中文愤怒](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BD%91%E5%8F%8B%E5%9B%A0%E5%BC%A0%E5%85%83%E8%8B%B1%E8%AF%B4%E4%B8%AD%E6%96%87%E6%84%A4%E6%80%92%23) `426.3K 🔥` `+21%`
1. [TF五代魏新航家庭环境](https://s.weibo.com/weibo?q=%23TF%E4%BA%94%E4%BB%A3%E9%AD%8F%E6%96%B0%E8%88%AA%E5%AE%B6%E5%BA%AD%E7%8E%AF%E5%A2%83%23) `421.5K 🔥` `+27%`
1. [睡车里被酒店收150元住宿费事件反转](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E8%BD%A6%E9%87%8C%E8%A2%AB%E9%85%92%E5%BA%97%E6%94%B6150%E5%85%83%E4%BD%8F%E5%AE%BF%E8%B4%B9%E4%BA%8B%E4%BB%B6%E5%8F%8D%E8%BD%AC%23) `1.3M 🔥`
1. [胖东来公布2起侵犯员工人格尊严案例](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E5%85%AC%E5%B8%832%E8%B5%B7%E4%BE%B5%E7%8A%AF%E5%91%98%E5%B7%A5%E4%BA%BA%E6%A0%BC%E5%B0%8A%E4%B8%A5%E6%A1%88%E4%BE%8B%23) `878.9K 🔥`
1. [两部门紧急预拨1.8亿元救灾资金 (The two departments urgently allocated 180 million yuan in disaster relief funds)](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E9%83%A8%E9%97%A8%E7%B4%A7%E6%80%A5%E9%A2%84%E6%8B%A81.8%E4%BA%BF%E5%85%83%E6%95%91%E7%81%BE%E8%B5%84%E9%87%91%23) `776.8K 🔥`
1. [女子被拐关地下室被虐8年 (Woman abducted, locked up in basement and tortured for 8 years)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A2%AB%E6%8B%90%E5%85%B3%E5%9C%B0%E4%B8%8B%E5%AE%A4%E8%A2%AB%E8%99%908%E5%B9%B4%23) `431.7K 🔥`
1. [凶手父母多次热情招待溺亡女孩父母](https://s.weibo.com/weibo?q=%23%E5%87%B6%E6%89%8B%E7%88%B6%E6%AF%8D%E5%A4%9A%E6%AC%A1%E7%83%AD%E6%83%85%E6%8B%9B%E5%BE%85%E6%BA%BA%E4%BA%A1%E5%A5%B3%E5%AD%A9%E7%88%B6%E6%AF%8D%23) `424.9K 🔥`
1. [白鹿黑丝御姐黑西装](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E9%BB%91%E4%B8%9D%E5%BE%A1%E5%A7%90%E9%BB%91%E8%A5%BF%E8%A3%85%23) `423.9K 🔥`
1. [苹果液态玻璃图标大改](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E6%B6%B2%E6%80%81%E7%8E%BB%E7%92%83%E5%9B%BE%E6%A0%87%E5%A4%A7%E6%94%B9%23) `417.7K 🔥`
1. [百妖谱官宣开机 (Official announcement of the launch of Bai Yao Pu)](https://s.weibo.com/weibo?q=%23%E7%99%BE%E5%A6%96%E8%B0%B1%E5%AE%98%E5%AE%A3%E5%BC%80%E6%9C%BA%23) `415.2K 🔥`
1. [王一博滑雪摔懵了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%BB%91%E9%9B%AA%E6%91%94%E6%87%B5%E4%BA%86%23) `412.6K 🔥`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `404.9K 🔥`
1. [陈雪凝疑似生孩子了 (Chen Xuening is suspected of giving birth to a baby)](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%9B%AA%E5%87%9D%E7%96%91%E4%BC%BC%E7%94%9F%E5%AD%A9%E5%AD%90%E4%BA%86%23) `379.9K 🔥`
1. [李嘉诚又要套现了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%98%89%E8%AF%9A%E5%8F%88%E8%A6%81%E5%A5%97%E7%8E%B0%E4%BA%86%23) `460.7K 🔥` `-49%`
1. [龙餐馆灯塔预测票房35亿](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%E7%81%AF%E5%A1%94%E9%A2%84%E6%B5%8B%E7%A5%A8%E6%88%BF35%E4%BA%BF%23) `433.3K 🔥` `-29%`
1. [易烊千玺回应最年轻双料影帝](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%9B%9E%E5%BA%94%E6%9C%80%E5%B9%B4%E8%BD%BB%E5%8F%8C%E6%96%99%E5%BD%B1%E5%B8%9D%23) `244.3K 🔥` `-33%`
1. [艾米百妖谱出妆](https://s.weibo.com/weibo?q=%23%E8%89%BE%E7%B1%B3%E7%99%BE%E5%A6%96%E8%B0%B1%E5%87%BA%E5%A6%86%23) `229.8K 🔥` `-39%`
1. [NBA将放行伦纳德交易](https://s.weibo.com/weibo?q=%23NBA%E5%B0%86%E6%94%BE%E8%A1%8C%E4%BC%A6%E7%BA%B3%E5%BE%B7%E4%BA%A4%E6%98%93%23) `229.5K 🔥` `-40%`
1. [少年强抱女友跳河自己上岸女友溺亡](https://s.weibo.com/weibo?q=%23%E5%B0%91%E5%B9%B4%E5%BC%BA%E6%8A%B1%E5%A5%B3%E5%8F%8B%E8%B7%B3%E6%B2%B3%E8%87%AA%E5%B7%B1%E4%B8%8A%E5%B2%B8%E5%A5%B3%E5%8F%8B%E6%BA%BA%E4%BA%A1%23) `226.7K 🔥` `-39%`
1. [被宣告死亡小狗跨越十几公里寻主人](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%AE%A3%E5%91%8A%E6%AD%BB%E4%BA%A1%E5%B0%8F%E7%8B%97%E8%B7%A8%E8%B6%8A%E5%8D%81%E5%87%A0%E5%85%AC%E9%87%8C%E5%AF%BB%E4%B8%BB%E4%BA%BA%23) `225.4K 🔥` `-48%`
1. [邓为这个链子太妙了 (Deng Wei, this chain is so wonderful.)](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%B8%BA%E8%BF%99%E4%B8%AA%E9%93%BE%E5%AD%90%E5%A4%AA%E5%A6%99%E4%BA%86%23) `225.2K 🔥` `-40%`
1. [雅典娜案设局者仍在境外逃亡](https://s.weibo.com/weibo?q=%23%E9%9B%85%E5%85%B8%E5%A8%9C%E6%A1%88%E8%AE%BE%E5%B1%80%E8%80%85%E4%BB%8D%E5%9C%A8%E5%A2%83%E5%A4%96%E9%80%83%E4%BA%A1%23) `216.5K 🔥` `-42%`
1. [A股又来大肉签](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%8F%88%E6%9D%A5%E5%A4%A7%E8%82%89%E7%AD%BE%23) `203.5K 🔥` `-43%`
1. [朱一龙成了百花奖获奖者打卡点](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E6%88%90%E4%BA%86%E7%99%BE%E8%8A%B1%E5%A5%96%E8%8E%B7%E5%A5%96%E8%80%85%E6%89%93%E5%8D%A1%E7%82%B9%23) `202.1K 🔥` `-44%`
1. [金价会涨到多高](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E4%BC%9A%E6%B6%A8%E5%88%B0%E5%A4%9A%E9%AB%98%23) `182.2K 🔥` `-48%`
1. [张元英口红像偷吃完辣条](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E5%8F%A3%E7%BA%A2%E5%83%8F%E5%81%B7%E5%90%83%E5%AE%8C%E8%BE%A3%E6%9D%A1%23) `167.4K 🔥` `-55%`
1. [LCK主持人建议Bin去LCK (The LCK host suggested that Bin go to LCK)](https://s.weibo.com/weibo?q=%23LCK%E4%B8%BB%E6%8C%81%E4%BA%BA%E5%BB%BA%E8%AE%AEBin%E5%8E%BBLCK%23) `164.3K 🔥` `-48%`
1. [百花奖 (Hundred Flowers Award)](https://s.weibo.com/weibo?q=%23%E7%99%BE%E8%8A%B1%E5%A5%96%23) `162.1K 🔥` `-52%`

Updated at 2026-08-11 13:42:55

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
