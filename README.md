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

1. [开学了想开点就点美团外卖 (School has started. If you want to eat, order Meituan takeout.)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%AD%A6%E4%BA%86%E6%83%B3%E5%BC%80%E7%82%B9%E5%B0%B1%E7%82%B9%E7%BE%8E%E5%9B%A2%E5%A4%96%E5%8D%96%23) `416.7K 🔥` `NEW`
1. [姐姐把150万元黄金当垃圾扔掉](https://s.weibo.com/weibo?q=%23%E5%A7%90%E5%A7%90%E6%8A%8A150%E4%B8%87%E5%85%83%E9%BB%84%E9%87%91%E5%BD%93%E5%9E%83%E5%9C%BE%E6%89%94%E6%8E%89%23) `395.7K 🔥` `NEW`
1. [赵今麦范丞丞 电影](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E8%8C%83%E4%B8%9E%E4%B8%9E%20%E7%94%B5%E5%BD%B1%23) `355.5K 🔥` `NEW`
1. [多人反映贷款逾期被银行划走养老金](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%BA%BA%E5%8F%8D%E6%98%A0%E8%B4%B7%E6%AC%BE%E9%80%BE%E6%9C%9F%E8%A2%AB%E9%93%B6%E8%A1%8C%E5%88%92%E8%B5%B0%E5%85%BB%E8%80%81%E9%87%91%23) `335.9K 🔥` `NEW`
1. [鹿晗umbro茵宝品牌代言人](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97umbro%E8%8C%B5%E5%AE%9D%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `334.4K 🔥` `NEW`
1. [警方通报女子从行驶中出租车跳下](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%B3%E5%AD%90%E4%BB%8E%E8%A1%8C%E9%A9%B6%E4%B8%AD%E5%87%BA%E7%A7%9F%E8%BD%A6%E8%B7%B3%E4%B8%8B%23) `330.5K 🔥` `NEW`
1. [张凌赫田曦薇头纱转场](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E7%94%B0%E6%9B%A6%E8%96%87%E5%A4%B4%E7%BA%B1%E8%BD%AC%E5%9C%BA%23) `287.3K 🔥` `NEW`
1. [王一博完全不需要翻译](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%AE%8C%E5%85%A8%E4%B8%8D%E9%9C%80%E8%A6%81%E7%BF%BB%E8%AF%91%23) `276.0K 🔥` `NEW`
1. [教师值班病逝抢救超48小时未认工伤](https://s.weibo.com/weibo?q=%23%E6%95%99%E5%B8%88%E5%80%BC%E7%8F%AD%E7%97%85%E9%80%9D%E6%8A%A2%E6%95%91%E8%B6%8548%E5%B0%8F%E6%97%B6%E6%9C%AA%E8%AE%A4%E5%B7%A5%E4%BC%A4%23) `267.0K 🔥` `NEW`
1. [父亲回应女婴出生2天被爷爷丢弃厕所](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%A9%B4%E5%87%BA%E7%94%9F2%E5%A4%A9%E8%A2%AB%E7%88%B7%E7%88%B7%E4%B8%A2%E5%BC%83%E5%8E%95%E6%89%80%23) `198.6K 🔥` `NEW`
1. [整改一年啄木鸟归来仍是维修刺客 (After one year of rectification, Woodpecker returns and is still a maintenance assassin.)](https://s.weibo.com/weibo?q=%23%E6%95%B4%E6%94%B9%E4%B8%80%E5%B9%B4%E5%95%84%E6%9C%A8%E9%B8%9F%E5%BD%92%E6%9D%A5%E4%BB%8D%E6%98%AF%E7%BB%B4%E4%BF%AE%E5%88%BA%E5%AE%A2%23) `157.0K 🔥` `NEW`
1. [印度90岁妇人遭4蒙面男子强奸](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A690%E5%B2%81%E5%A6%87%E4%BA%BA%E9%81%AD4%E8%92%99%E9%9D%A2%E7%94%B7%E5%AD%90%E5%BC%BA%E5%A5%B8%23) `156.1K 🔥` `NEW`
1. [教官军训期间猥亵15岁少女](https://s.weibo.com/weibo?q=%23%E6%95%99%E5%AE%98%E5%86%9B%E8%AE%AD%E6%9C%9F%E9%97%B4%E7%8C%A5%E4%BA%B515%E5%B2%81%E5%B0%91%E5%A5%B3%23) `150.3K 🔥` `NEW`
1. [李现风格大变](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E9%A3%8E%E6%A0%BC%E5%A4%A7%E5%8F%98%23) `149.1K 🔥` `NEW`
1. [美军确认坠毁加油机上4人死亡](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E7%A1%AE%E8%AE%A4%E5%9D%A0%E6%AF%81%E5%8A%A0%E6%B2%B9%E6%9C%BA%E4%B8%8A4%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `137.9K 🔥` `NEW`
1. [穿prada的女王2 小时代](https://s.weibo.com/weibo?q=%23%E7%A9%BFprada%E7%9A%84%E5%A5%B3%E7%8E%8B2%20%E5%B0%8F%E6%97%B6%E4%BB%A3%23) `135.6K 🔥` `NEW`
1. [韩国外交部发声明](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%A4%96%E4%BA%A4%E9%83%A8%E5%8F%91%E5%A3%B0%E6%98%8E%23) `112.5K 🔥` `NEW`
1. [2026年政府工作报告全文](https://s.weibo.com/weibo?q=%232026%E5%B9%B4%E6%94%BF%E5%BA%9C%E5%B7%A5%E4%BD%9C%E6%8A%A5%E5%91%8A%E5%85%A8%E6%96%87%23) `109.3K 🔥` `NEW`
1. [金秀贤不愿赔广告主钱](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%A7%80%E8%B4%A4%E4%B8%8D%E6%84%BF%E8%B5%94%E5%B9%BF%E5%91%8A%E4%B8%BB%E9%92%B1%23) `109.3K 🔥` `NEW`
1. [移动副卡未启用扣费560](https://s.weibo.com/weibo?q=%23%E7%A7%BB%E5%8A%A8%E5%89%AF%E5%8D%A1%E6%9C%AA%E5%90%AF%E7%94%A8%E6%89%A3%E8%B4%B9560%23) `99.0K 🔥` `NEW`
1. [孙燕姿演唱会 (Stefanie Sun concert)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E7%87%95%E5%A7%BF%E6%BC%94%E5%94%B1%E4%BC%9A%23) `98.8K 🔥` `NEW`
1. [杨紫又被表扬了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%8F%88%E8%A2%AB%E8%A1%A8%E6%89%AC%E4%BA%86%23) `93.1K 🔥` `NEW`
1. [斗罗2最新一集嗑撑着了](https://s.weibo.com/weibo?q=%23%E6%96%97%E7%BD%972%E6%9C%80%E6%96%B0%E4%B8%80%E9%9B%86%E5%97%91%E6%92%91%E7%9D%80%E4%BA%86%23) `90.0K 🔥` `NEW`
1. [潦草野猫强行提亲](https://s.weibo.com/weibo?q=%23%E6%BD%A6%E8%8D%89%E9%87%8E%E7%8C%AB%E5%BC%BA%E8%A1%8C%E6%8F%90%E4%BA%B2%23) `86.2K 🔥` `NEW`
1. [呼啸山庄尺度好大](https://s.weibo.com/weibo?q=%23%E5%91%BC%E5%95%B8%E5%B1%B1%E5%BA%84%E5%B0%BA%E5%BA%A6%E5%A5%BD%E5%A4%A7%23) `86.1K 🔥` `NEW`
1. [股掌柜荐股让股民高位接盘血亏](https://s.weibo.com/weibo?q=%23%E8%82%A1%E6%8E%8C%E6%9F%9C%E8%8D%90%E8%82%A1%E8%AE%A9%E8%82%A1%E6%B0%91%E9%AB%98%E4%BD%8D%E6%8E%A5%E7%9B%98%E8%A1%80%E4%BA%8F%23) `86.1K 🔥` `NEW`
1. [洛克王国世界上线新画面首曝](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E5%85%8B%E7%8E%8B%E5%9B%BD%E4%B8%96%E7%95%8C%E4%B8%8A%E7%BA%BF%E6%96%B0%E7%94%BB%E9%9D%A2%E9%A6%96%E6%9B%9D%23) `85.2K 🔥` `NEW`
1. [崩坏星穹铁道](https://s.weibo.com/weibo?q=%23%E5%B4%A9%E5%9D%8F%E6%98%9F%E7%A9%B9%E9%93%81%E9%81%93%23) `83.2K 🔥` `NEW`
1. [钎九](https://s.weibo.com/weibo?q=%23%E9%92%8E%E4%B9%9D%23) `80.3K 🔥` `NEW`
1. [樊振东可可爱爱出场](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%8F%AF%E5%8F%AF%E7%88%B1%E7%88%B1%E5%87%BA%E5%9C%BA%23) `79.8K 🔥` `NEW`
1. [7000元月薪种地不到一周已招满 (Farming with a monthly salary of 7,000 yuan has been filled in less than a week)](https://s.weibo.com/weibo?q=%237000%E5%85%83%E6%9C%88%E8%96%AA%E7%A7%8D%E5%9C%B0%E4%B8%8D%E5%88%B0%E4%B8%80%E5%91%A8%E5%B7%B2%E6%8B%9B%E6%BB%A1%23) `1.1M 🔥` `+282%`
1. [这些两会好声音掷地有声](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%BA%9B%E4%B8%A4%E4%BC%9A%E5%A5%BD%E5%A3%B0%E9%9F%B3%E6%8E%B7%E5%9C%B0%E6%9C%89%E5%A3%B0%23) `322.2K 🔥` `+45%`
1. [康婆子下线看哭了](https://s.weibo.com/weibo?q=%23%E5%BA%B7%E5%A9%86%E5%AD%90%E4%B8%8B%E7%BA%BF%E7%9C%8B%E5%93%AD%E4%BA%86%23) `307.0K 🔥` `+135%`
1. [取消家长护学岗让家校关系回归正轨](https://s.weibo.com/weibo?q=%23%E5%8F%96%E6%B6%88%E5%AE%B6%E9%95%BF%E6%8A%A4%E5%AD%A6%E5%B2%97%E8%AE%A9%E5%AE%B6%E6%A0%A1%E5%85%B3%E7%B3%BB%E5%9B%9E%E5%BD%92%E6%AD%A3%E8%BD%A8%23) `296.7K 🔥` `+34%`
1. [张馨予因为减肥抵抗力下降](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A6%A8%E4%BA%88%E5%9B%A0%E4%B8%BA%E5%87%8F%E8%82%A5%E6%8A%B5%E6%8A%97%E5%8A%9B%E4%B8%8B%E9%99%8D%23) `239.1K 🔥` `+102%`
1. [逐玉18集太惨了](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%8918%E9%9B%86%E5%A4%AA%E6%83%A8%E4%BA%86%23) `133.5K 🔥` `+66%`
1. [华为回应15599元折叠屏用3天黑屏 (Huawei responds to a 15,599 yuan folding screen with a black screen for 3 days)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%9B%9E%E5%BA%9415599%E5%85%83%E6%8A%98%E5%8F%A0%E5%B1%8F%E7%94%A83%E5%A4%A9%E9%BB%91%E5%B1%8F%23) `777.1K 🔥`
1. [绿色低碳发展迈入法典时代 (Green and low-carbon development enters the code era)](https://s.weibo.com/weibo?q=%23%E7%BB%BF%E8%89%B2%E4%BD%8E%E7%A2%B3%E5%8F%91%E5%B1%95%E8%BF%88%E5%85%A5%E6%B3%95%E5%85%B8%E6%97%B6%E4%BB%A3%23) `587.3K 🔥`
1. [随元青我恨你 (Sui Yuanqing, I hate you)](https://s.weibo.com/weibo?q=%23%E9%9A%8F%E5%85%83%E9%9D%92%E6%88%91%E6%81%A8%E4%BD%A0%23) `257.7K 🔥`
1. [长期用小拇指托手机的后果 (The consequences of holding your phone with your little finger for a long time)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E7%94%A8%E5%B0%8F%E6%8B%87%E6%8C%87%E6%89%98%E6%89%8B%E6%9C%BA%E7%9A%84%E5%90%8E%E6%9E%9C%23) `160.1K 🔥`
1. [关晓彤紧急补救塌颅顶](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E7%B4%A7%E6%80%A5%E8%A1%A5%E6%95%91%E5%A1%8C%E9%A2%85%E9%A1%B6%23) `147.6K 🔥`
1. [严屹宽 双男主 (Yan Yikuan, two male protagonists)](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E5%B1%B9%E5%AE%BD%20%E5%8F%8C%E7%94%B7%E4%B8%BB%23) `109.5K 🔥`
1. [张云龙虞书欣聚餐 (Zhang Yunlong and Yu Shuxin have dinner together)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%91%E9%BE%99%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%81%9A%E9%A4%90%23) `90.0K 🔥`
1. [逐玉 (Zhuyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `197.2K 🔥` `-27%`
1. [爱奇艺股价](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E8%82%A1%E4%BB%B7%23) `158.3K 🔥` `-85%`
1. [研究称第二次怀孕会继续重塑大脑](https://s.weibo.com/weibo?q=%23%E7%A0%94%E7%A9%B6%E7%A7%B0%E7%AC%AC%E4%BA%8C%E6%AC%A1%E6%80%80%E5%AD%95%E4%BC%9A%E7%BB%A7%E7%BB%AD%E9%87%8D%E5%A1%91%E5%A4%A7%E8%84%91%23) `153.8K 🔥` `-65%`
1. [被盗国保琉璃竟在闲鱼公开售卖](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%9B%97%E5%9B%BD%E4%BF%9D%E7%90%89%E7%92%83%E7%AB%9F%E5%9C%A8%E9%97%B2%E9%B1%BC%E5%85%AC%E5%BC%80%E5%94%AE%E5%8D%96%23) `113.1K 🔥` `-49%`
1. [姓丁的有福了 丁永一 (Blessed are those with the surname Ding Ding Yongyi)](https://s.weibo.com/weibo?q=%23%E5%A7%93%E4%B8%81%E7%9A%84%E6%9C%89%E7%A6%8F%E4%BA%86%20%E4%B8%81%E6%B0%B8%E4%B8%80%23) `112.9K 🔥` `-49%`
1. [荷兰回国认亲女子生父回应遗弃女儿 (The biological father of a woman who returned to the Netherlands and recognized her biological father responded to abandoning his daughter)](https://s.weibo.com/weibo?q=%23%E8%8D%B7%E5%85%B0%E5%9B%9E%E5%9B%BD%E8%AE%A4%E4%BA%B2%E5%A5%B3%E5%AD%90%E7%94%9F%E7%88%B6%E5%9B%9E%E5%BA%94%E9%81%97%E5%BC%83%E5%A5%B3%E5%84%BF%23) `99.8K 🔥` `-52%`
1. [男子被忘核磁共振机医院曾被罚5900万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%A2%AB%E5%BF%98%E6%A0%B8%E7%A3%81%E5%85%B1%E6%8C%AF%E6%9C%BA%E5%8C%BB%E9%99%A2%E6%9B%BE%E8%A2%AB%E7%BD%9A5900%E4%B8%87%23) `90.1K 🔥` `-33%`
1. [铁证 孙红雷刘宇宁](https://s.weibo.com/weibo?q=%23%E9%93%81%E8%AF%81%20%E5%AD%99%E7%BA%A2%E9%9B%B7%E5%88%98%E5%AE%87%E5%AE%81%23) `86.1K 🔥` `-21%`

Updated at 2026-03-13 21:21:10

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
