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

1. [新一轮大范围雨雪天气来袭 (A new round of widespread rain and snow is coming)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%B8%80%E8%BD%AE%E5%A4%A7%E8%8C%83%E5%9B%B4%E9%9B%A8%E9%9B%AA%E5%A4%A9%E6%B0%94%E6%9D%A5%E8%A2%AD%23) `610.3K 🔥` `NEW`
1. [明星都在用AI点外卖了](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%9F%E9%83%BD%E5%9C%A8%E7%94%A8AI%E7%82%B9%E5%A4%96%E5%8D%96%E4%BA%86%23) `389.5K 🔥` `NEW`
1. [古茗回应外卖小哥打翻32杯奶茶](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E8%8C%97%E5%9B%9E%E5%BA%94%E5%A4%96%E5%8D%96%E5%B0%8F%E5%93%A5%E6%89%93%E7%BF%BB32%E6%9D%AF%E5%A5%B6%E8%8C%B6%23) `185.9K 🔥` `NEW`
1. [黄一鸣直播中途崩溃大哭](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%B8%80%E9%B8%A3%E7%9B%B4%E6%92%AD%E4%B8%AD%E9%80%94%E5%B4%A9%E6%BA%83%E5%A4%A7%E5%93%AD%23) `121.4K 🔥` `NEW`
1. [多家银行阶段性上调存款利率](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6%E9%93%B6%E8%A1%8C%E9%98%B6%E6%AE%B5%E6%80%A7%E4%B8%8A%E8%B0%83%E5%AD%98%E6%AC%BE%E5%88%A9%E7%8E%87%23) `114.6K 🔥` `NEW`
1. [一诺浮潜](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E6%B5%AE%E6%BD%9C%23) `114.6K 🔥` `NEW`
1. [何同学谢谢AI请客](https://s.weibo.com/weibo?q=%23%E4%BD%95%E5%90%8C%E5%AD%A6%E8%B0%A2%E8%B0%A2AI%E8%AF%B7%E5%AE%A2%23) `89.9K 🔥` `NEW`
1. [小米租车测试引争议](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E7%A7%9F%E8%BD%A6%E6%B5%8B%E8%AF%95%E5%BC%95%E4%BA%89%E8%AE%AE%23) `89.9K 🔥` `NEW`
1. [张凌赫 放过我给你枪皮](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%20%E6%94%BE%E8%BF%87%E6%88%91%E7%BB%99%E4%BD%A0%E6%9E%AA%E7%9A%AE%23) `85.9K 🔥` `NEW`
1. [办婚礼未领证男方去世彩礼该退吗](https://s.weibo.com/weibo?q=%23%E5%8A%9E%E5%A9%9A%E7%A4%BC%E6%9C%AA%E9%A2%86%E8%AF%81%E7%94%B7%E6%96%B9%E5%8E%BB%E4%B8%96%E5%BD%A9%E7%A4%BC%E8%AF%A5%E9%80%80%E5%90%97%23) `75.5K 🔥` `NEW`
1. [为何萝莉岛不叫爱泼斯坦岛 (Why isn’t Loli Island called Epstein Island?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BD%95%E8%90%9D%E8%8E%89%E5%B2%9B%E4%B8%8D%E5%8F%AB%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E5%B2%9B%23) `74.9K 🔥` `NEW`
1. [一箱牛奶完成了串门的使命](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%AE%B1%E7%89%9B%E5%A5%B6%E5%AE%8C%E6%88%90%E4%BA%86%E4%B8%B2%E9%97%A8%E7%9A%84%E4%BD%BF%E5%91%BD%23) `72.2K 🔥` `NEW`
1. [央视揭免密支付乱象](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%8F%AD%E5%85%8D%E5%AF%86%E6%94%AF%E4%BB%98%E4%B9%B1%E8%B1%A1%23) `70.7K 🔥` `NEW`
1. [蒯曼收到Viper的祝福](https://s.weibo.com/weibo?q=%23%E8%92%AF%E6%9B%BC%E6%94%B6%E5%88%B0Viper%E7%9A%84%E7%A5%9D%E7%A6%8F%23) `70.4K 🔥` `NEW`
1. [成何体统 好看](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%20%E5%A5%BD%E7%9C%8B%23) `788.3K 🔥` `+241%`
1. [外卖小哥打翻32杯奶茶原地发愣](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%8D%96%E5%B0%8F%E5%93%A5%E6%89%93%E7%BF%BB32%E6%9D%AF%E5%A5%B6%E8%8C%B6%E5%8E%9F%E5%9C%B0%E5%8F%91%E6%84%A3%23) `587.9K 🔥` `+144%`
1. [春晚彩排](https://s.weibo.com/weibo?q=%23%E6%98%A5%E6%99%9A%E5%BD%A9%E6%8E%92%23) `571.8K 🔥` `+290%`
1. [爸爸弯了一辈子的腰终于断了](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%BC%AF%E4%BA%86%E4%B8%80%E8%BE%88%E5%AD%90%E7%9A%84%E8%85%B0%E7%BB%88%E4%BA%8E%E6%96%AD%E4%BA%86%23) `562.4K 🔥` `+134%`
1. [吴昕用千问把长沙小吃点了个遍](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%98%95%E7%94%A8%E5%8D%83%E9%97%AE%E6%8A%8A%E9%95%BF%E6%B2%99%E5%B0%8F%E5%90%83%E7%82%B9%E4%BA%86%E4%B8%AA%E9%81%8D%23) `121.0K 🔥` `+87%`
1. [以为王力宏裤子只穿了一条腿](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BA%E7%8E%8B%E5%8A%9B%E5%AE%8F%E8%A3%A4%E5%AD%90%E5%8F%AA%E7%A9%BF%E4%BA%86%E4%B8%80%E6%9D%A1%E8%85%BF%23) `79.8K 🔥` `+21%`
1. [女子吐槽飞机餐仅一根青菜配米饭 (Woman complains about plane meal only having one vegetable with rice)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%90%90%E6%A7%BD%E9%A3%9E%E6%9C%BA%E9%A4%90%E4%BB%85%E4%B8%80%E6%A0%B9%E9%9D%92%E8%8F%9C%E9%85%8D%E7%B1%B3%E9%A5%AD%23) `1.1M 🔥`
1. [苏翊鸣大跳台高燃上场时刻 (Su Yiming's big diving show was a great moment on the stage.)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%A4%A7%E8%B7%B3%E5%8F%B0%E9%AB%98%E7%87%83%E4%B8%8A%E5%9C%BA%E6%97%B6%E5%88%BB%23) `602.4K 🔥`
1. [老一辈做饭好吃的原因](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%B8%80%E8%BE%88%E5%81%9A%E9%A5%AD%E5%A5%BD%E5%90%83%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `124.9K 🔥`
1. [向太说郭碧婷从没开口要过东西](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E8%AF%B4%E9%83%AD%E7%A2%A7%E5%A9%B7%E4%BB%8E%E6%B2%A1%E5%BC%80%E5%8F%A3%E8%A6%81%E8%BF%87%E4%B8%9C%E8%A5%BF%23) `124.0K 🔥`
1. [梁源发文怼吴克群](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%BA%90%E5%8F%91%E6%96%87%E6%80%BC%E5%90%B4%E5%85%8B%E7%BE%A4%23) `123.6K 🔥`
1. [周震南把丰愉写进旋律里](https://s.weibo.com/weibo?q=%23%E5%91%A8%E9%9C%87%E5%8D%97%E6%8A%8A%E4%B8%B0%E6%84%89%E5%86%99%E8%BF%9B%E6%97%8B%E5%BE%8B%E9%87%8C%23) `123.0K 🔥`
1. [小英想把送养出去6年的女儿接回家](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%8B%B1%E6%83%B3%E6%8A%8A%E9%80%81%E5%85%BB%E5%87%BA%E5%8E%BB6%E5%B9%B4%E7%9A%84%E5%A5%B3%E5%84%BF%E6%8E%A5%E5%9B%9E%E5%AE%B6%23) `122.5K 🔥`
1. [老一辈对子女睡懒觉的执念](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%B8%80%E8%BE%88%E5%AF%B9%E5%AD%90%E5%A5%B3%E7%9D%A1%E6%87%92%E8%A7%89%E7%9A%84%E6%89%A7%E5%BF%B5%23) `122.4K 🔥`
1. [华晨宇脖子上的唇印 (Lip prints on Hua Chenyu’s neck)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E8%84%96%E5%AD%90%E4%B8%8A%E7%9A%84%E5%94%87%E5%8D%B0%23) `122.0K 🔥`
1. [断联一年的闺蜜突然发消息](https://s.weibo.com/weibo?q=%23%E6%96%AD%E8%81%94%E4%B8%80%E5%B9%B4%E7%9A%84%E9%97%BA%E8%9C%9C%E7%AA%81%E7%84%B6%E5%8F%91%E6%B6%88%E6%81%AF%23) `121.4K 🔥`
1. [成何体统](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%23) `120.3K 🔥`
1. [韩国运动员盒饭 (Korean athlete lunch box)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%BF%90%E5%8A%A8%E5%91%98%E7%9B%92%E9%A5%AD%23) `114.6K 🔥`
1. [王楚钦男单争冠](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%94%B7%E5%8D%95%E4%BA%89%E5%86%A0%23) `114.6K 🔥`
1. [海洋馆偶遇李纯马頔 (Encounter with Li Chun and Ma Di at the aquarium)](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%B4%8B%E9%A6%86%E5%81%B6%E9%81%87%E6%9D%8E%E7%BA%AF%E9%A9%AC%E9%A0%94%23) `94.6K 🔥`
1. [不会做饭的建议反复观看](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E4%BC%9A%E5%81%9A%E9%A5%AD%E7%9A%84%E5%BB%BA%E8%AE%AE%E5%8F%8D%E5%A4%8D%E8%A7%82%E7%9C%8B%23) `90.3K 🔥`
1. [华东政法大学学生起诉微信收提现费 (East China University of Political Science and Law students sue WeChat for charging cash withdrawal fees)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%9C%E6%94%BF%E6%B3%95%E5%A4%A7%E5%AD%A6%E5%AD%A6%E7%94%9F%E8%B5%B7%E8%AF%89%E5%BE%AE%E4%BF%A1%E6%94%B6%E6%8F%90%E7%8E%B0%E8%B4%B9%23) `88.9K 🔥`
1. [许凯魏哲鸣新剧阴湿诡味好重 (Xu Kai and Wei Zheming’s new drama is so dank and weird)](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%87%AF%E9%AD%8F%E5%93%B2%E9%B8%A3%E6%96%B0%E5%89%A7%E9%98%B4%E6%B9%BF%E8%AF%A1%E5%91%B3%E5%A5%BD%E9%87%8D%23) `86.9K 🔥`
1. [四川地震 (Sichuan earthquake)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%9C%B0%E9%9C%87%23) `216.5K 🔥` `-72%`
1. [丁真劝向佐退圈](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%9C%9F%E5%8A%9D%E5%90%91%E4%BD%90%E9%80%80%E5%9C%88%23) `193.0K 🔥` `-39%`
1. [无畏契约](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E5%A5%91%E7%BA%A6%23) `126.0K 🔥` `-32%`
1. [邓超忘给孙俪准备16年纪念日的礼物](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E5%BF%98%E7%BB%99%E5%AD%99%E4%BF%AA%E5%87%86%E5%A4%8716%E5%B9%B4%E7%BA%AA%E5%BF%B5%E6%97%A5%E7%9A%84%E7%A4%BC%E7%89%A9%23) `125.7K 🔥` `-24%`
1. [千问 (Qianwen)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%23) `125.5K 🔥` `-23%`
1. [张凌赫 电竞男主 (Zhang Linghe E-sports male protagonist)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%20%E7%94%B5%E7%AB%9E%E7%94%B7%E4%B8%BB%23) `125.0K 🔥` `-22%`
1. [吃上AI主理人的席了](https://s.weibo.com/weibo?q=%23%E5%90%83%E4%B8%8AAI%E4%B8%BB%E7%90%86%E4%BA%BA%E7%9A%84%E5%B8%AD%E4%BA%86%23) `124.4K 🔥` `-21%`
1. [爱泼斯坦在巴黎红房间拍下女孩跳舞](https://s.weibo.com/weibo?q=%23%E7%88%B1%E6%B3%BC%E6%96%AF%E5%9D%A6%E5%9C%A8%E5%B7%B4%E9%BB%8E%E7%BA%A2%E6%88%BF%E9%97%B4%E6%8B%8D%E4%B8%8B%E5%A5%B3%E5%AD%A9%E8%B7%B3%E8%88%9E%23) `124.1K 🔥` `-23%`
1. [没领证男子去世遭索18万彩礼女方发声](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E9%A2%86%E8%AF%81%E7%94%B7%E5%AD%90%E5%8E%BB%E4%B8%96%E9%81%AD%E7%B4%A218%E4%B8%87%E5%BD%A9%E7%A4%BC%E5%A5%B3%E6%96%B9%E5%8F%91%E5%A3%B0%23) `123.2K 🔥` `-27%`
1. [无畏契约直播 (Fearless Contract Live)](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E5%A5%91%E7%BA%A6%E7%9B%B4%E6%92%AD%23) `102.5K 🔥` `-40%`
1. [白鹿发开播红包](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%8F%91%E5%BC%80%E6%92%AD%E7%BA%A2%E5%8C%85%23) `90.7K 🔥` `-24%`
1. [全球第四大汽车巨头爆雷](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E7%AC%AC%E5%9B%9B%E5%A4%A7%E6%B1%BD%E8%BD%A6%E5%B7%A8%E5%A4%B4%E7%88%86%E9%9B%B7%23) `90.1K 🔥` `-37%`
1. [张本智和vs户上隼辅 (Tomokazu Hari vs. Hayasuke Togami)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8Cvs%E6%88%B7%E4%B8%8A%E9%9A%BC%E8%BE%85%23) `82.0K 🔥` `-39%`
1. [QQ音乐超级巅峰之夜抢票 (QQ Music Super Peak Night Grab Tickets)](https://s.weibo.com/weibo?q=%23QQ%E9%9F%B3%E4%B9%90%E8%B6%85%E7%BA%A7%E5%B7%85%E5%B3%B0%E4%B9%8B%E5%A4%9C%E6%8A%A2%E7%A5%A8%23) `81.1K 🔥` `-22%`
1. [这才是真正的道歉](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%89%8D%E6%98%AF%E7%9C%9F%E6%AD%A3%E7%9A%84%E9%81%93%E6%AD%89%23) `77.6K 🔥` `-45%`

Updated at 2026-02-08 16:53:28

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
