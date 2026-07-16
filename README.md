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

1. [阿根廷或遭罚 (Argentina may be punished)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E6%88%96%E9%81%AD%E7%BD%9A%23) `2.6M 🔥` `NEW`
1. [王者荣耀](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `735.1K 🔥` `NEW`
1. [网络辟谣标签](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BB%9C%E8%BE%9F%E8%B0%A3%E6%A0%87%E7%AD%BE%23) `728.9K 🔥` `NEW`
1. [李现张婧仪新剧婚礼迎宾牌](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E5%BC%A0%E5%A9%A7%E4%BB%AA%E6%96%B0%E5%89%A7%E5%A9%9A%E7%A4%BC%E8%BF%8E%E5%AE%BE%E7%89%8C%23) `542.1K 🔥` `NEW`
1. [四川宝兴车辆坠崖致6死](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%AE%9D%E5%85%B4%E8%BD%A6%E8%BE%86%E5%9D%A0%E5%B4%96%E8%87%B46%E6%AD%BB%23) `329.4K 🔥` `NEW`
1. [佛得角荣誉季军](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E8%8D%A3%E8%AA%89%E5%AD%A3%E5%86%9B%23) `304.0K 🔥` `NEW`
1. [长鑫科技IPO](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80IPO%23) `302.8K 🔥` `NEW`
1. [白鹿新剧开机应援人数](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%96%B0%E5%89%A7%E5%BC%80%E6%9C%BA%E5%BA%94%E6%8F%B4%E4%BA%BA%E6%95%B0%23) `300.3K 🔥` `NEW`
1. [陈哲远江山为聘不用原声](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%93%B2%E8%BF%9C%E6%B1%9F%E5%B1%B1%E4%B8%BA%E8%81%98%E4%B8%8D%E7%94%A8%E5%8E%9F%E5%A3%B0%23) `275.4K 🔥` `NEW`
1. [图赫尔回应称领先后过于保守](https://s.weibo.com/weibo?q=%23%E5%9B%BE%E8%B5%AB%E5%B0%94%E5%9B%9E%E5%BA%94%E7%A7%B0%E9%A2%86%E5%85%88%E5%90%8E%E8%BF%87%E4%BA%8E%E4%BF%9D%E5%AE%88%23) `273.6K 🔥` `NEW`
1. [王濛解说 (Wang Meng explains)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E8%A7%A3%E8%AF%B4%23) `272.0K 🔥` `NEW`
1. [世界第1对世界第2](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E7%AC%AC1%E5%AF%B9%E4%B8%96%E7%95%8C%E7%AC%AC2%23) `268.6K 🔥` `NEW`
1. [干部霸占车位事件通报被指春秋笔法](https://s.weibo.com/weibo?q=%23%E5%B9%B2%E9%83%A8%E9%9C%B8%E5%8D%A0%E8%BD%A6%E4%BD%8D%E4%BA%8B%E4%BB%B6%E9%80%9A%E6%8A%A5%E8%A2%AB%E6%8C%87%E6%98%A5%E7%A7%8B%E7%AC%94%E6%B3%95%23) `266.9K 🔥` `NEW`
1. [赵丽颖 泡芙小姐](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%20%E6%B3%A1%E8%8A%99%E5%B0%8F%E5%A7%90%23) `266.0K 🔥` `NEW`
1. [田曦薇泼水明媚到我了](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%B3%BC%E6%B0%B4%E6%98%8E%E5%AA%9A%E5%88%B0%E6%88%91%E4%BA%86%23) `264.0K 🔥` `NEW`
1. [王俊凯工作室演唱会声明错别字](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B7%A5%E4%BD%9C%E5%AE%A4%E6%BC%94%E5%94%B1%E4%BC%9A%E5%A3%B0%E6%98%8E%E9%94%99%E5%88%AB%E5%AD%97%23) `261.5K 🔥` `NEW`
1. [英格兰阿根廷 裁判](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E9%98%BF%E6%A0%B9%E5%BB%B7%20%E8%A3%81%E5%88%A4%23) `259.3K 🔥` `NEW`
1. [阿根廷更衣室疯狂庆祝](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E6%9B%B4%E8%A1%A3%E5%AE%A4%E7%96%AF%E7%8B%82%E5%BA%86%E7%A5%9D%23) `254.0K 🔥` `NEW`
1. [英格兰名宿集体炮轰图赫尔放弃进攻](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E5%90%8D%E5%AE%BF%E9%9B%86%E4%BD%93%E7%82%AE%E8%BD%B0%E5%9B%BE%E8%B5%AB%E5%B0%94%E6%94%BE%E5%BC%83%E8%BF%9B%E6%94%BB%23) `252.4K 🔥` `NEW`
1. [凯恩回应领先后一味死守](https://s.weibo.com/weibo?q=%23%E5%87%AF%E6%81%A9%E5%9B%9E%E5%BA%94%E9%A2%86%E5%85%88%E5%90%8E%E4%B8%80%E5%91%B3%E6%AD%BB%E5%AE%88%23) `251.5K 🔥` `NEW`
1. [下锅前一个人吃出锅后全家人吃 (One person eats it before cooking and the whole family eats it after cooking.)](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E9%94%85%E5%89%8D%E4%B8%80%E4%B8%AA%E4%BA%BA%E5%90%83%E5%87%BA%E9%94%85%E5%90%8E%E5%85%A8%E5%AE%B6%E4%BA%BA%E5%90%83%23) `250.5K 🔥` `NEW`
1. [小米澎程无伪装实车曝光](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E6%97%A0%E4%BC%AA%E8%A3%85%E5%AE%9E%E8%BD%A6%E6%9B%9D%E5%85%89%23) `246.1K 🔥` `NEW`
1. [心疼赖斯](https://s.weibo.com/weibo?q=%23%E5%BF%83%E7%96%BC%E8%B5%96%E6%96%AF%23) `243.2K 🔥` `NEW`
1. [侯明昊张碧晨杨坤 天赐的声音](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E5%BC%A0%E7%A2%A7%E6%99%A8%E6%9D%A8%E5%9D%A4%20%E5%A4%A9%E8%B5%90%E7%9A%84%E5%A3%B0%E9%9F%B3%23) `237.3K 🔥` `NEW`
1. [决赛阿根廷将对阵西班牙](https://s.weibo.com/weibo?q=%23%E5%86%B3%E8%B5%9B%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%B0%86%E5%AF%B9%E9%98%B5%E8%A5%BF%E7%8F%AD%E7%89%99%23) `236.2K 🔥` `NEW`
1. [阿根廷绝杀英格兰](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%BB%9D%E6%9D%80%E8%8B%B1%E6%A0%BC%E5%85%B0%23) `10.8M 🔥` `+97%`
1. [贝林厄姆 赛后打人](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E6%9E%97%E5%8E%84%E5%A7%86%20%E8%B5%9B%E5%90%8E%E6%89%93%E4%BA%BA%23) `4.2M 🔥` `+404%`
1. [打卡中国](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%8D%A1%E4%B8%AD%E5%9B%BD%23) `3.4M 🔥` `+83%`
1. [功夫女足票房](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A5%A8%E6%88%BF%23) `407.2K 🔥` `+267%`
1. [我也好奇冉莹颖在MBA班上都学了啥](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%B9%9F%E5%A5%BD%E5%A5%87%E5%86%89%E8%8E%B9%E9%A2%96%E5%9C%A8MBA%E7%8F%AD%E4%B8%8A%E9%83%BD%E5%AD%A6%E4%BA%86%E5%95%A5%23) `393.3K 🔥` `+29%`
1. [日本女护士输液管中混粪便致人死亡 (Japanese female nurse dies after feces mixed with infusion tube)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A5%B3%E6%8A%A4%E5%A3%AB%E8%BE%93%E6%B6%B2%E7%AE%A1%E4%B8%AD%E6%B7%B7%E7%B2%AA%E4%BE%BF%E8%87%B4%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `262.7K 🔥` `+135%`
1. [王橹杰的身高 (Wang Lujie's height)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E7%9A%84%E8%BA%AB%E9%AB%98%23) `249.4K 🔥` `+28%`
1. [71岁老太纵身跳河救人现场画面 (Footage of a 71-year-old woman jumping into a river to save someone)](https://s.weibo.com/weibo?q=%2371%E5%B2%81%E8%80%81%E5%A4%AA%E7%BA%B5%E8%BA%AB%E8%B7%B3%E6%B2%B3%E6%95%91%E4%BA%BA%E7%8E%B0%E5%9C%BA%E7%94%BB%E9%9D%A2%23) `242.0K 🔥` `+55%`
1. [河南多家NFC果汁生产车间竟无水果](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E5%A4%9A%E5%AE%B6NFC%E6%9E%9C%E6%B1%81%E7%94%9F%E4%BA%A7%E8%BD%A6%E9%97%B4%E7%AB%9F%E6%97%A0%E6%B0%B4%E6%9E%9C%23) `734.6K 🔥`
1. [苏醒](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%23) `377.3K 🔥`
1. [DeepSeek工资待遇太恐怖了 (DeepSeek’s salary package is terrible)](https://s.weibo.com/weibo?q=%23DeepSeek%E5%B7%A5%E8%B5%84%E5%BE%85%E9%81%87%E5%A4%AA%E6%81%90%E6%80%96%E4%BA%86%23) `366.6K 🔥`
1. [不建议大家辞职去做自媒体](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E8%BE%9E%E8%81%8C%E5%8E%BB%E5%81%9A%E8%87%AA%E5%AA%92%E4%BD%93%23) `350.4K 🔥`
1. [小鹏MONA L03今晚全球上市 (Xpeng MONA L03 will be launched globally tonight)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%B9%8FMONA%20L03%E4%BB%8A%E6%99%9A%E5%85%A8%E7%90%83%E4%B8%8A%E5%B8%82%23) `3.0M 🔥` `-30%`
1. [英格兰球迷怒喷主教练 (England fans angrily criticize manager)](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0%E7%90%83%E8%BF%B7%E6%80%92%E5%96%B7%E4%B8%BB%E6%95%99%E7%BB%83%23) `725.4K 🔥` `-44%`
1. [中国用户终于迎来满血iPhone (Chinese users finally get a full-blooded iPhone)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%A8%E6%88%B7%E7%BB%88%E4%BA%8E%E8%BF%8E%E6%9D%A5%E6%BB%A1%E8%A1%80iPhone%23) `405.8K 🔥` `-55%`
1. [英格兰vs阿根廷 (England vs Argentina)](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E6%A0%BC%E5%85%B0vs%E9%98%BF%E6%A0%B9%E5%BB%B7%23) `274.7K 🔥` `-91%`
1. [佛得角 常规赛时间踢平本届冠亚军](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%20%E5%B8%B8%E8%A7%84%E8%B5%9B%E6%97%B6%E9%97%B4%E8%B8%A2%E5%B9%B3%E6%9C%AC%E5%B1%8A%E5%86%A0%E4%BA%9A%E5%86%9B%23) `270.9K 🔥` `-77%`
1. [吴绮莉公开成龙拒认吴卓林原因 (Elaine Ng reveals why Jackie Chan refused to recognize Ng Zhuolin)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E7%BB%AE%E8%8E%89%E5%85%AC%E5%BC%80%E6%88%90%E9%BE%99%E6%8B%92%E8%AE%A4%E5%90%B4%E5%8D%93%E6%9E%97%E5%8E%9F%E5%9B%A0%23) `270.0K 🔥` `-41%`
1. [裁判 没带牌 (Referee didn't bring a card)](https://s.weibo.com/weibo?q=%23%E8%A3%81%E5%88%A4%20%E6%B2%A1%E5%B8%A6%E7%89%8C%23) `260.9K 🔥` `-32%`
1. [苏醒谈阿根廷绝杀英格兰](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%E8%B0%88%E9%98%BF%E6%A0%B9%E5%BB%B7%E7%BB%9D%E6%9D%80%E8%8B%B1%E6%A0%BC%E5%85%B0%23) `257.3K 🔥` `-62%`
1. [图赫尔 对不起英格兰 (Tuchel is sorry England)](https://s.weibo.com/weibo?q=%23%E5%9B%BE%E8%B5%AB%E5%B0%94%20%E5%AF%B9%E4%B8%8D%E8%B5%B7%E8%8B%B1%E6%A0%BC%E5%85%B0%23) `256.5K 🔥` `-73%`
1. [英阿大战 自由搏击 (British-Afghan War Free Fighting)](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E9%98%BF%E5%A4%A7%E6%88%98%20%E8%87%AA%E7%94%B1%E6%90%8F%E5%87%BB%23) `255.4K 🔥` `-21%`
1. [阿根廷回应晋级世界杯决赛](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E5%9B%9E%E5%BA%94%E6%99%8B%E7%BA%A7%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%23) `247.5K 🔥` `-59%`
1. [中老年妇女困境 (Dilemma of middle-aged and elderly women)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E8%80%81%E5%B9%B4%E5%A6%87%E5%A5%B3%E5%9B%B0%E5%A2%83%23) `245.5K 🔥` `-37%`
1. [王俊凯忙一天打开手机天塌了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%BF%99%E4%B8%80%E5%A4%A9%E6%89%93%E5%BC%80%E6%89%8B%E6%9C%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `241.6K 🔥` `-38%`
1. [功夫女足2 (Kung Fu Girls 2)](https://s.weibo.com/weibo?q=%23%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B32%23) `239.7K 🔥` `-74%`
1. [中式折扇爆单了](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%BC%8F%E6%8A%98%E6%89%87%E7%88%86%E5%8D%95%E4%BA%86%23) `238.1K 🔥` `-38%`

Updated at 2026-07-16 09:05:28

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
