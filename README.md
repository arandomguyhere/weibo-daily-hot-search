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

1. [MG07发布10.59万起](https://s.weibo.com/weibo?q=%23MG07%E5%8F%91%E5%B8%8310.59%E4%B8%87%E8%B5%B7%23) `391.0K 🔥` `NEW`
1. [张智霖儿子担任演唱会吉他手](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%99%BA%E9%9C%96%E5%84%BF%E5%AD%90%E6%8B%85%E4%BB%BB%E6%BC%94%E5%94%B1%E4%BC%9A%E5%90%89%E4%BB%96%E6%89%8B%23) `376.7K 🔥` `NEW`
1. [什么时候看到凌玲梗能不笑](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E7%9C%8B%E5%88%B0%E5%87%8C%E7%8E%B2%E6%A2%97%E8%83%BD%E4%B8%8D%E7%AC%91%23) `300.0K 🔥` `NEW`
1. [王橹杰演技](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E6%BC%94%E6%8A%80%23) `289.0K 🔥` `NEW`
1. [火车座位设计初衷是为了载人](https://s.weibo.com/weibo?q=%23%E7%81%AB%E8%BD%A6%E5%BA%A7%E4%BD%8D%E8%AE%BE%E8%AE%A1%E5%88%9D%E8%A1%B7%E6%98%AF%E4%B8%BA%E4%BA%86%E8%BD%BD%E4%BA%BA%23) `280.3K 🔥` `NEW`
1. [卫生巾居然能卷成这样](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E7%94%9F%E5%B7%BE%E5%B1%85%E7%84%B6%E8%83%BD%E5%8D%B7%E6%88%90%E8%BF%99%E6%A0%B7%23) `280.1K 🔥` `NEW`
1. [巴西女子遭前男友多重器械囚禁现场](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%A5%BF%E5%A5%B3%E5%AD%90%E9%81%AD%E5%89%8D%E7%94%B7%E5%8F%8B%E5%A4%9A%E9%87%8D%E5%99%A8%E6%A2%B0%E5%9B%9A%E7%A6%81%E7%8E%B0%E5%9C%BA%23) `255.1K 🔥` `NEW`
1. [找到梁博了](https://s.weibo.com/weibo?q=%23%E6%89%BE%E5%88%B0%E6%A2%81%E5%8D%9A%E4%BA%86%23) `190.4K 🔥` `NEW`
1. [金莎听到多子多福的反应](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E5%90%AC%E5%88%B0%E5%A4%9A%E5%AD%90%E5%A4%9A%E7%A6%8F%E7%9A%84%E5%8F%8D%E5%BA%94%23) `187.0K 🔥` `NEW`
1. [19岁大学生天台走秀挣2万](https://s.weibo.com/weibo?q=%2319%E5%B2%81%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%A4%A9%E5%8F%B0%E8%B5%B0%E7%A7%80%E6%8C%A32%E4%B8%87%23) `185.4K 🔥` `NEW`
1. [李乃文龚俊林一刚见面就躺一被窝了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B9%83%E6%96%87%E9%BE%9A%E4%BF%8A%E6%9E%97%E4%B8%80%E5%88%9A%E8%A7%81%E9%9D%A2%E5%B0%B1%E8%BA%BA%E4%B8%80%E8%A2%AB%E7%AA%9D%E4%BA%86%23) `158.9K 🔥` `NEW`
1. [英伟达涨价通知](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E4%BC%9F%E8%BE%BE%E6%B6%A8%E4%BB%B7%E9%80%9A%E7%9F%A5%23) `144.1K 🔥` `NEW`
1. [温婉售卖高仿巴黎世家T恤Prada背心](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%A9%89%E5%94%AE%E5%8D%96%E9%AB%98%E4%BB%BF%E5%B7%B4%E9%BB%8E%E4%B8%96%E5%AE%B6T%E6%81%A4Prada%E8%83%8C%E5%BF%83%23) `424.5K 🔥` `+62%`
1. [我家那闺女2026开播](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E9%82%A3%E9%97%BA%E5%A5%B32026%E5%BC%80%E6%92%AD%23) `335.5K 🔥` `+21%`
1. [蔬菜 甲醛](https://s.weibo.com/weibo?q=%23%E8%94%AC%E8%8F%9C%20%E7%94%B2%E9%86%9B%23) `315.7K 🔥` `+70%`
1. [空枪](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%23) `256.3K 🔥` `+40%`
1. [韩红基金会回应救护车采购质疑](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BA%A2%E5%9F%BA%E9%87%91%E4%BC%9A%E5%9B%9E%E5%BA%94%E6%95%91%E6%8A%A4%E8%BD%A6%E9%87%87%E8%B4%AD%E8%B4%A8%E7%96%91%23) `193.8K 🔥` `+30%`
1. [网红温婉偷税被罚后换号复活](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E6%B8%A9%E5%A9%89%E5%81%B7%E7%A8%8E%E8%A2%AB%E7%BD%9A%E5%90%8E%E6%8D%A2%E5%8F%B7%E5%A4%8D%E6%B4%BB%23) `1.1M 🔥`
1. [中国人形机器人跑出加速度](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%B7%91%E5%87%BA%E5%8A%A0%E9%80%9F%E5%BA%A6%23) `1.0M 🔥`
1. [最近是全体教师最脆弱的时候](https://s.weibo.com/weibo?q=%23%E6%9C%80%E8%BF%91%E6%98%AF%E5%85%A8%E4%BD%93%E6%95%99%E5%B8%88%E6%9C%80%E8%84%86%E5%BC%B1%E7%9A%84%E6%97%B6%E5%80%99%23) `986.6K 🔥`
1. [巫哲回应好帅](https://s.weibo.com/weibo?q=%23%E5%B7%AB%E5%93%B2%E5%9B%9E%E5%BA%94%E5%A5%BD%E5%B8%85%23) `364.0K 🔥`
1. [王传君 乔任梁](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%20%E4%B9%94%E4%BB%BB%E6%A2%81%23) `329.7K 🔥`
1. [卢昱晓瘦了好多](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E7%98%A6%E4%BA%86%E5%A5%BD%E5%A4%9A%23) `311.4K 🔥`
1. [李金铭李佳航聚餐](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%87%91%E9%93%AD%E6%9D%8E%E4%BD%B3%E8%88%AA%E8%81%9A%E9%A4%90%23) `300.4K 🔥`
1. [公务员碾死醉汉被认定过失致死](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8A%A1%E5%91%98%E7%A2%BE%E6%AD%BB%E9%86%89%E6%B1%89%E8%A2%AB%E8%AE%A4%E5%AE%9A%E8%BF%87%E5%A4%B1%E8%87%B4%E6%AD%BB%23) `293.4K 🔥`
1. [虞书欣好辣](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%A5%BD%E8%BE%A3%23) `292.7K 🔥`
1. [小狗洗澡洗得太干净主人不敢认](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E6%B4%97%E6%BE%A1%E6%B4%97%E5%BE%97%E5%A4%AA%E5%B9%B2%E5%87%80%E4%B8%BB%E4%BA%BA%E4%B8%8D%E6%95%A2%E8%AE%A4%23) `280.3K 🔥`
1. [玉米一种很健康的食物](https://s.weibo.com/weibo?q=%23%E7%8E%89%E7%B1%B3%E4%B8%80%E7%A7%8D%E5%BE%88%E5%81%A5%E5%BA%B7%E7%9A%84%E9%A3%9F%E7%89%A9%23) `259.5K 🔥`
1. [店家扶老人被索赔10万对方言论荒唐](https://s.weibo.com/weibo?q=%23%E5%BA%97%E5%AE%B6%E6%89%B6%E8%80%81%E4%BA%BA%E8%A2%AB%E7%B4%A2%E8%B5%9410%E4%B8%87%E5%AF%B9%E6%96%B9%E8%A8%80%E8%AE%BA%E8%8D%92%E5%94%90%23) `255.8K 🔥`
1. [梦中那片海在那英演唱会团建](https://s.weibo.com/weibo?q=%23%E6%A2%A6%E4%B8%AD%E9%82%A3%E7%89%87%E6%B5%B7%E5%9C%A8%E9%82%A3%E8%8B%B1%E6%BC%94%E5%94%B1%E4%BC%9A%E5%9B%A2%E5%BB%BA%23) `255.7K 🔥`
1. [王传君说的是乔任梁吗 (Is Wang Chuanjun talking about Qiao Renliang?)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E8%AF%B4%E7%9A%84%E6%98%AF%E4%B9%94%E4%BB%BB%E6%A2%81%E5%90%97%23) `242.0K 🔥`
1. [只卖一只鞋的人](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E5%8D%96%E4%B8%80%E5%8F%AA%E9%9E%8B%E7%9A%84%E4%BA%BA%23) `240.6K 🔥`
1. [原来明媚又开朗的女生是这样的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%98%8E%E5%AA%9A%E5%8F%88%E5%BC%80%E6%9C%97%E7%9A%84%E5%A5%B3%E7%94%9F%E6%98%AF%E8%BF%99%E6%A0%B7%E7%9A%84%23) `240.4K 🔥`
1. [程莉莎看郭晓东披哥心疼到睡不着](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E8%8E%89%E8%8E%8E%E7%9C%8B%E9%83%AD%E6%99%93%E4%B8%9C%E6%8A%AB%E5%93%A5%E5%BF%83%E7%96%BC%E5%88%B0%E7%9D%A1%E4%B8%8D%E7%9D%80%23) `235.4K 🔥`
1. [李维嘉曾拒绝王菲加好友](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BB%B4%E5%98%89%E6%9B%BE%E6%8B%92%E7%BB%9D%E7%8E%8B%E8%8F%B2%E5%8A%A0%E5%A5%BD%E5%8F%8B%23) `217.2K 🔥`
1. [45岁网红大帅去世](https://s.weibo.com/weibo?q=%2345%E5%B2%81%E7%BD%91%E7%BA%A2%E5%A4%A7%E5%B8%85%E5%8E%BB%E4%B8%96%23) `212.1K 🔥`
1. [宁艺卓Gucci成衣广告](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93Gucci%E6%88%90%E8%A1%A3%E5%B9%BF%E5%91%8A%23) `183.8K 🔥`
1. [德甲](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E7%94%B2%23) `142.0K 🔥`
1. [老人进店休息离世店家帮扶遭索赔10万](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E8%BF%9B%E5%BA%97%E4%BC%91%E6%81%AF%E7%A6%BB%E4%B8%96%E5%BA%97%E5%AE%B6%E5%B8%AE%E6%89%B6%E9%81%AD%E7%B4%A2%E8%B5%9410%E4%B8%87%23) `3.4M 🔥` `-22%`
1. [上班立什么人设最吃香](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E7%8F%AD%E7%AB%8B%E4%BB%80%E4%B9%88%E4%BA%BA%E8%AE%BE%E6%9C%80%E5%90%83%E9%A6%99%23) `615.6K 🔥` `-27%`
1. [多国印度移民拒签率飙升](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9B%BD%E5%8D%B0%E5%BA%A6%E7%A7%BB%E6%B0%91%E6%8B%92%E7%AD%BE%E7%8E%87%E9%A3%99%E5%8D%87%23) `337.6K 🔥` `-27%`
1. [刘昊然提醒李兰迪调整裙子](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%98%8A%E7%84%B6%E6%8F%90%E9%86%92%E6%9D%8E%E5%85%B0%E8%BF%AA%E8%B0%83%E6%95%B4%E8%A3%99%E5%AD%90%23) `298.8K 🔥` `-23%`
1. [宋丹丹穿20年前家有儿女的衣服](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%B8%B9%E4%B8%B9%E7%A9%BF20%E5%B9%B4%E5%89%8D%E5%AE%B6%E6%9C%89%E5%84%BF%E5%A5%B3%E7%9A%84%E8%A1%A3%E6%9C%8D%23) `217.7K 🔥` `-39%`
1. [人民日报谈火车零食占座 (People's Daily talks about snacks occupying seats on trains)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%B0%88%E7%81%AB%E8%BD%A6%E9%9B%B6%E9%A3%9F%E5%8D%A0%E5%BA%A7%23) `217.3K 🔥` `-22%`
1. [华晨宇失眠照流出](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E5%A4%B1%E7%9C%A0%E7%85%A7%E6%B5%81%E5%87%BA%23) `184.9K 🔥` `-29%`
1. [甲醛白菜未流入北京新发地](https://s.weibo.com/weibo?q=%23%E7%94%B2%E9%86%9B%E7%99%BD%E8%8F%9C%E6%9C%AA%E6%B5%81%E5%85%A5%E5%8C%97%E4%BA%AC%E6%96%B0%E5%8F%91%E5%9C%B0%23) `178.0K 🔥` `-32%`
1. [马斯克妈妈在上海被偶遇逛名创优品](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%A6%88%E5%A6%88%E5%9C%A8%E4%B8%8A%E6%B5%B7%E8%A2%AB%E5%81%B6%E9%81%87%E9%80%9B%E5%90%8D%E5%88%9B%E4%BC%98%E5%93%81%23) `147.9K 🔥` `-23%`
1. [莫雷加德最想和孙颖莎搭档混双](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E9%9B%B7%E5%8A%A0%E5%BE%B7%E6%9C%80%E6%83%B3%E5%92%8C%E5%AD%99%E9%A2%96%E8%8E%8E%E6%90%AD%E6%A1%A3%E6%B7%B7%E5%8F%8C%23) `139.9K 🔥` `-21%`
1. [电影欢迎来龙餐馆口碑](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E6%AC%A2%E8%BF%8E%E6%9D%A5%E9%BE%99%E9%A4%90%E9%A6%86%E5%8F%A3%E7%A2%91%23) `138.4K 🔥` `-31%`

Updated at 2026-08-23 14:16:21

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
