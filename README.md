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

1. [骑马踏雪巡逻的边防战士 (Border guards patrolling on horseback in the snow)](https://s.weibo.com/weibo?q=%23%E9%AA%91%E9%A9%AC%E8%B8%8F%E9%9B%AA%E5%B7%A1%E9%80%BB%E7%9A%84%E8%BE%B9%E9%98%B2%E6%88%98%E5%A3%AB%23) `739.2K 🔥` `NEW`
1. [AI情话新年](https://s.weibo.com/weibo?q=%23AI%E6%83%85%E8%AF%9D%E6%96%B0%E5%B9%B4%23) `728.7K 🔥` `NEW`
1. [80岁老人把金手镯做成5枚金戒指](https://s.weibo.com/weibo?q=%2380%E5%B2%81%E8%80%81%E4%BA%BA%E6%8A%8A%E9%87%91%E6%89%8B%E9%95%AF%E5%81%9A%E6%88%905%E6%9E%9A%E9%87%91%E6%88%92%E6%8C%87%23) `695.5K 🔥` `NEW`
1. [杨烁居然转行做了导演](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%83%81%E5%B1%85%E7%84%B6%E8%BD%AC%E8%A1%8C%E5%81%9A%E4%BA%86%E5%AF%BC%E6%BC%94%23) `692.3K 🔥` `NEW`
1. [关晓彤发表情后秒删](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%8F%91%E8%A1%A8%E6%83%85%E5%90%8E%E7%A7%92%E5%88%A0%23) `689.7K 🔥` `NEW`
1. [内蒙古男子因喂流浪猫被杀害](https://s.weibo.com/weibo?q=%23%E5%86%85%E8%92%99%E5%8F%A4%E7%94%B7%E5%AD%90%E5%9B%A0%E5%96%82%E6%B5%81%E6%B5%AA%E7%8C%AB%E8%A2%AB%E6%9D%80%E5%AE%B3%23) `569.9K 🔥` `NEW`
1. [黄一鸣回应长得像刘亦菲](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%B8%80%E9%B8%A3%E5%9B%9E%E5%BA%94%E9%95%BF%E5%BE%97%E5%83%8F%E5%88%98%E4%BA%A6%E8%8F%B2%23) `350.3K 🔥` `NEW`
1. [五年了沃尔沃总裁怎么还在玩命](https://s.weibo.com/weibo?q=%23%E4%BA%94%E5%B9%B4%E4%BA%86%E6%B2%83%E5%B0%94%E6%B2%83%E6%80%BB%E8%A3%81%E6%80%8E%E4%B9%88%E8%BF%98%E5%9C%A8%E7%8E%A9%E5%91%BD%23) `256.8K 🔥` `NEW`
1. [于正金粉红包 还没领完](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E9%87%91%E7%B2%89%E7%BA%A2%E5%8C%85%20%E8%BF%98%E6%B2%A1%E9%A2%86%E5%AE%8C%23) `156.8K 🔥` `NEW`
1. [镖人改编 删吻戏](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E6%94%B9%E7%BC%96%20%E5%88%A0%E5%90%BB%E6%88%8F%23) `147.8K 🔥` `NEW`
1. [飞驰人生3杀疯了 (Flying Life 3 is crazy)](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F3%E6%9D%80%E7%96%AF%E4%BA%86%23) `146.4K 🔥` `NEW`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `143.0K 🔥` `NEW`
1. [吴京跳刀马 扣了16次扳机](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%E8%B7%B3%E5%88%80%E9%A9%AC%20%E6%89%A3%E4%BA%8616%E6%AC%A1%E6%89%B3%E6%9C%BA%23) `142.0K 🔥` `NEW`
1. [夜王](https://s.weibo.com/weibo?q=%23%E5%A4%9C%E7%8E%8B%23) `132.5K 🔥` `NEW`
1. [短剧上星](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E4%B8%8A%E6%98%9F%23) `120.8K 🔥` `NEW`
1. [亲爱的客栈](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E7%88%B1%E7%9A%84%E5%AE%A2%E6%A0%88%23) `112.3K 🔥` `NEW`
1. [齐广璞冲金](https://s.weibo.com/weibo?q=%23%E9%BD%90%E5%B9%BF%E7%92%9E%E5%86%B2%E9%87%91%23) `108.8K 🔥` `NEW`
1. [陈泽觉得张元英比柳智敏漂亮](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B3%BD%E8%A7%89%E5%BE%97%E5%BC%A0%E5%85%83%E8%8B%B1%E6%AF%94%E6%9F%B3%E6%99%BA%E6%95%8F%E6%BC%82%E4%BA%AE%23) `108.6K 🔥` `NEW`
1. [祭祖闯祸](https://s.weibo.com/weibo?q=%23%E7%A5%AD%E7%A5%96%E9%97%AF%E7%A5%B8%23) `107.1K 🔥` `NEW`
1. [陈妍希脱口秀首秀](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E8%84%B1%E5%8F%A3%E7%A7%80%E9%A6%96%E7%A7%80%23) `106.4K 🔥` `NEW`
1. [男子连番自摸突然栽倒血压200多 (Man touched himself repeatedly and suddenly his blood pressure dropped to over 200)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%BF%9E%E7%95%AA%E8%87%AA%E6%91%B8%E7%AA%81%E7%84%B6%E6%A0%BD%E5%80%92%E8%A1%80%E5%8E%8B200%E5%A4%9A%23) `105.5K 🔥` `NEW`
1. [10年前被抓拍母女家属发声](https://s.weibo.com/weibo?q=%2310%E5%B9%B4%E5%89%8D%E8%A2%AB%E6%8A%93%E6%8B%8D%E6%AF%8D%E5%A5%B3%E5%AE%B6%E5%B1%9E%E5%8F%91%E5%A3%B0%23) `98.7K 🔥` `NEW`
1. [黑龙江体育局慰问宁忠岩父母](https://s.weibo.com/weibo?q=%23%E9%BB%91%E9%BE%99%E6%B1%9F%E4%BD%93%E8%82%B2%E5%B1%80%E6%85%B0%E9%97%AE%E5%AE%81%E5%BF%A0%E5%B2%A9%E7%88%B6%E6%AF%8D%23) `94.2K 🔥` `NEW`
1. [王鹤棣大年初四开工](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%A4%A7%E5%B9%B4%E5%88%9D%E5%9B%9B%E5%BC%80%E5%B7%A5%23) `90.8K 🔥` `NEW`
1. [中国队还有三个夺金点](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E8%BF%98%E6%9C%89%E4%B8%89%E4%B8%AA%E5%A4%BA%E9%87%91%E7%82%B9%23) `868.0K 🔥` `+343%`
1. [一家三口返乡途中患病儿子突然离世](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E8%BF%94%E4%B9%A1%E9%80%94%E4%B8%AD%E6%82%A3%E7%97%85%E5%84%BF%E5%AD%90%E7%AA%81%E7%84%B6%E7%A6%BB%E4%B8%96%23) `725.6K 🔥` `+40%`
1. [吴京 我的夫人姓谢](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%20%E6%88%91%E7%9A%84%E5%A4%AB%E4%BA%BA%E5%A7%93%E8%B0%A2%23) `720.8K 🔥` `+40%`
1. [将门独后开机 (Turn on the door alone)](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E5%BC%80%E6%9C%BA%23) `715.7K 🔥` `+44%`
1. [500块压岁钱发出5万的感觉](https://s.weibo.com/weibo?q=%23500%E5%9D%97%E5%8E%8B%E5%B2%81%E9%92%B1%E5%8F%91%E5%87%BA5%E4%B8%87%E7%9A%84%E6%84%9F%E8%A7%89%23) `701.5K 🔥` `+52%`
1. [金泰亨说illit像newjeans](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%B3%B0%E4%BA%A8%E8%AF%B4illit%E5%83%8Fnewjeans%23) `383.4K 🔥` `+48%`
1. [镖人](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `139.2K 🔥` `+54%`
1. [容止 谢景行 (Rong Zhi Xie Jingxing)](https://s.weibo.com/weibo?q=%23%E5%AE%B9%E6%AD%A2%20%E8%B0%A2%E6%99%AF%E8%A1%8C%23) `1.2M 🔥`
1. [将门独后官宣王鹤棣孟子义 (The only queen in the general family announced Wang Hedi and Meng Ziyi)](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E5%AE%98%E5%AE%A3%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%AD%9F%E5%AD%90%E4%B9%89%23) `727.9K 🔥`
1. [中国队米兰冬奥第3金](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%98%9F%E7%B1%B3%E5%85%B0%E5%86%AC%E5%A5%A5%E7%AC%AC3%E9%87%91%23) `707.2K 🔥`
1. [贫穷最可怕的是贫穷的思维基因](https://s.weibo.com/weibo?q=%23%E8%B4%AB%E7%A9%B7%E6%9C%80%E5%8F%AF%E6%80%95%E7%9A%84%E6%98%AF%E8%B4%AB%E7%A9%B7%E7%9A%84%E6%80%9D%E7%BB%B4%E5%9F%BA%E5%9B%A0%23) `158.2K 🔥`
1. [将门毒后](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E6%AF%92%E5%90%8E%23) `153.2K 🔥`
1. [陈慧琳回应大儿子像宋仲基](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%85%A7%E7%90%B3%E5%9B%9E%E5%BA%94%E5%A4%A7%E5%84%BF%E5%AD%90%E5%83%8F%E5%AE%8B%E4%BB%B2%E5%9F%BA%23) `151.4K 🔥`
1. [宁忠岩金牌 (Ning Zhongyan gold medal)](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BF%A0%E5%B2%A9%E9%87%91%E7%89%8C%23) `149.7K 🔥`
1. [大年初四 扔穷](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B9%B4%E5%88%9D%E5%9B%9B%20%E6%89%94%E7%A9%B7%23) `140.7K 🔥`
1. [春节机器人卖爆了 (Robots sold out during the Spring Festival)](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%8D%96%E7%88%86%E4%BA%86%23) `125.1K 🔥`
1. [谷爱凌说不是故意吓大家 (Gu Ailing said she didn’t mean to scare everyone.)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E8%AF%B4%E4%B8%8D%E6%98%AF%E6%95%85%E6%84%8F%E5%90%93%E5%A4%A7%E5%AE%B6%23) `365.9K 🔥` `-57%`
1. [女子疑似输液过敏导致不适身亡](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%96%91%E4%BC%BC%E8%BE%93%E6%B6%B2%E8%BF%87%E6%95%8F%E5%AF%BC%E8%87%B4%E4%B8%8D%E9%80%82%E8%BA%AB%E4%BA%A1%23) `176.1K 🔥` `-61%`
1. [原来亲戚们都是故意的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E4%BA%B2%E6%88%9A%E4%BB%AC%E9%83%BD%E6%98%AF%E6%95%85%E6%84%8F%E7%9A%84%23) `162.4K 🔥` `-32%`
1. [谷爱凌妈妈眼圈哭红了](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%A6%88%E5%A6%88%E7%9C%BC%E5%9C%88%E5%93%AD%E7%BA%A2%E4%BA%86%23) `160.3K 🔥` `-53%`
1. [将门独后原著 大女主](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E5%8E%9F%E8%91%97%20%E5%A4%A7%E5%A5%B3%E4%B8%BB%23) `157.2K 🔥` `-49%`
1. [手术室为什么会放花生米 (Why are peanuts placed in the operating room?)](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%AF%E5%AE%A4%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BC%9A%E6%94%BE%E8%8A%B1%E7%94%9F%E7%B1%B3%23) `154.3K 🔥` `-47%`
1. [曝王男融梗](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E7%94%B7%E8%9E%8D%E6%A2%97%23) `96.9K 🔥` `-46%`
1. [谢霆锋 天啊于适好可爱](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%20%E5%A4%A9%E5%95%8A%E4%BA%8E%E9%80%82%E5%A5%BD%E5%8F%AF%E7%88%B1%23) `95.6K 🔥` `-31%`
1. [朱志鑫左航 伯克利 (Zhu Zhixin Zuo Hang Berkeley)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E5%B7%A6%E8%88%AA%20%E4%BC%AF%E5%85%8B%E5%88%A9%23) `93.4K 🔥` `-64%`
1. [刘美贤夺冠 (Liu Meixian won the championship)](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%BE%8E%E8%B4%A4%E5%A4%BA%E5%86%A0%23) `92.4K 🔥` `-46%`
1. [郭富城说与王一博只聊赛车](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AF%8C%E5%9F%8E%E8%AF%B4%E4%B8%8E%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%8F%AA%E8%81%8A%E8%B5%9B%E8%BD%A6%23) `92.0K 🔥` `-60%`

Updated at 2026-02-20 13:39:23

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
