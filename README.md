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

1. [跟蒋敦豪上淘宝闪购买花送妈妈 (Go to Taobao with Jiang Dunhao to buy flowers for your mother)](https://s.weibo.com/weibo?q=%23%E8%B7%9F%E8%92%8B%E6%95%A6%E8%B1%AA%E4%B8%8A%E6%B7%98%E5%AE%9D%E9%97%AA%E8%B4%AD%E4%B9%B0%E8%8A%B1%E9%80%81%E5%A6%88%E5%A6%88%23) `3.1M 🔥` `NEW`
1. [中国男团vs日本](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%94%B7%E5%9B%A2vs%E6%97%A5%E6%9C%AC%23) `3.1M 🔥` `NEW`
1. [马琳指导哭了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E7%90%B3%E6%8C%87%E5%AF%BC%E5%93%AD%E4%BA%86%23) `911.6K 🔥` `NEW`
1. [中美将在韩国举行经贸磋商](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%B0%86%E5%9C%A8%E9%9F%A9%E5%9B%BD%E4%B8%BE%E8%A1%8C%E7%BB%8F%E8%B4%B8%E7%A3%8B%E5%95%86%23) `579.8K 🔥` `NEW`
1. [村民被眼镜王蛇咬伤打了13支血清](https://s.weibo.com/weibo?q=%23%E6%9D%91%E6%B0%91%E8%A2%AB%E7%9C%BC%E9%95%9C%E7%8E%8B%E8%9B%87%E5%92%AC%E4%BC%A4%E6%89%93%E4%BA%8613%E6%94%AF%E8%A1%80%E6%B8%85%23) `548.4K 🔥` `NEW`
1. [6000年炊具竟装人头骨](https://s.weibo.com/weibo?q=%236000%E5%B9%B4%E7%82%8A%E5%85%B7%E7%AB%9F%E8%A3%85%E4%BA%BA%E5%A4%B4%E9%AA%A8%23) `547.3K 🔥` `NEW`
1. [宋祖儿的腿瘦凹回去了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%96%E5%84%BF%E7%9A%84%E8%85%BF%E7%98%A6%E5%87%B9%E5%9B%9E%E5%8E%BB%E4%BA%86%23) `544.7K 🔥` `NEW`
1. [孙颖莎夺冠后飙英文感谢所有人](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%A4%BA%E5%86%A0%E5%90%8E%E9%A3%99%E8%8B%B1%E6%96%87%E6%84%9F%E8%B0%A2%E6%89%80%E6%9C%89%E4%BA%BA%23) `441.7K 🔥` `NEW`
1. [梁靖崑vs张本智和](https://s.weibo.com/weibo?q=%23%E6%A2%81%E9%9D%96%E5%B4%91vs%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%23) `441.3K 🔥` `NEW`
1. [水谷隼盛赞孙颖莎伟大](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E8%B0%B7%E9%9A%BC%E7%9B%9B%E8%B5%9E%E5%AD%99%E9%A2%96%E8%8E%8E%E4%BC%9F%E5%A4%A7%23) `383.4K 🔥` `NEW`
1. [孙颖莎世乒赛第10冠 (Sun Yingsha wins 10th World Table Tennis Championships title)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E4%B8%96%E4%B9%92%E8%B5%9B%E7%AC%AC10%E5%86%A0%23) `233.9K 🔥` `NEW`
1. [主角 老戏骨飙戏](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%20%E8%80%81%E6%88%8F%E9%AA%A8%E9%A3%99%E6%88%8F%23) `214.6K 🔥` `NEW`
1. [盼弟 来弟](https://s.weibo.com/weibo?q=%23%E7%9B%BC%E5%BC%9F%20%E6%9D%A5%E5%BC%9F%23) `2.1M 🔥` `+26%`
1. [严浩翔要求给每位小演员单独的镜头](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E8%A6%81%E6%B1%82%E7%BB%99%E6%AF%8F%E4%BD%8D%E5%B0%8F%E6%BC%94%E5%91%98%E5%8D%95%E7%8B%AC%E7%9A%84%E9%95%9C%E5%A4%B4%23) `551.1K 🔥` `+47%`
1. [伊朗已回应美国提出的结束战争方案](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%B7%B2%E5%9B%9E%E5%BA%94%E7%BE%8E%E5%9B%BD%E6%8F%90%E5%87%BA%E7%9A%84%E7%BB%93%E6%9D%9F%E6%88%98%E4%BA%89%E6%96%B9%E6%A1%88%23) `550.2K 🔥` `+149%`
1. [网传一念江南黄了](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E4%B8%80%E5%BF%B5%E6%B1%9F%E5%8D%97%E9%BB%84%E4%BA%86%23) `383.4K 🔥` `+28%`
1. [孙颖莎哽咽了](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%93%BD%E5%92%BD%E4%BA%86%23) `304.0K 🔥` `+37%`
1. [身体有炎症要忌口4种食物 (4 foods to avoid if you have inflammation in your body)](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BD%93%E6%9C%89%E7%82%8E%E7%97%87%E8%A6%81%E5%BF%8C%E5%8F%A34%E7%A7%8D%E9%A3%9F%E7%89%A9%23) `295.6K 🔥` `+35%`
1. [李金铭报平安第一天 (Li Jinming reported safety on the first day)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%87%91%E9%93%AD%E6%8A%A5%E5%B9%B3%E5%AE%89%E7%AC%AC%E4%B8%80%E5%A4%A9%23) `288.5K 🔥` `+31%`
1. [王俊凯说北京在我心里是首都](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E8%AF%B4%E5%8C%97%E4%BA%AC%E5%9C%A8%E6%88%91%E5%BF%83%E9%87%8C%E6%98%AF%E9%A6%96%E9%83%BD%23) `287.5K 🔥` `+30%`
1. [央视曝光三无手搓汽车](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E5%85%89%E4%B8%89%E6%97%A0%E6%89%8B%E6%90%93%E6%B1%BD%E8%BD%A6%23) `282.7K 🔥` `+69%`
1. [歌手2026 (singer 2026)](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%23) `216.4K 🔥` `+44%`
1. [领克07GT公告图曝光](https://s.weibo.com/weibo?q=%23%E9%A2%86%E5%85%8B07GT%E5%85%AC%E5%91%8A%E5%9B%BE%E6%9B%9D%E5%85%89%23) `209.1K 🔥` `+43%`
1. [中国潜水器发现深海生命绿洲 (Chinese submersible discovers deep-sea oasis of life)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%BD%9C%E6%B0%B4%E5%99%A8%E5%8F%91%E7%8E%B0%E6%B7%B1%E6%B5%B7%E7%94%9F%E5%91%BD%E7%BB%BF%E6%B4%B2%23) `3.4M 🔥`
1. [身体的炎症全部消失22个tips (22 tips to make all inflammation in your body disappear)](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BD%93%E7%9A%84%E7%82%8E%E7%97%87%E5%85%A8%E9%83%A8%E6%B6%88%E5%A4%B122%E4%B8%AAtips%23) `1.4M 🔥`
1. [睫毛掉进眼睛里钙化了](https://s.weibo.com/weibo?q=%23%E7%9D%AB%E6%AF%9B%E6%8E%89%E8%BF%9B%E7%9C%BC%E7%9D%9B%E9%87%8C%E9%92%99%E5%8C%96%E4%BA%86%23) `561.7K 🔥`
1. [马龙许昕为孙颖莎鼓掌](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95%E4%B8%BA%E5%AD%99%E9%A2%96%E8%8E%8E%E9%BC%93%E6%8E%8C%23) `554.4K 🔥`
1. [宛瑜饰演者赵霁近况](https://s.weibo.com/weibo?q=%23%E5%AE%9B%E7%91%9C%E9%A5%B0%E6%BC%94%E8%80%85%E8%B5%B5%E9%9C%81%E8%BF%91%E5%86%B5%23) `551.3K 🔥`
1. [我不买开口榴莲的原因](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%B8%8D%E4%B9%B0%E5%BC%80%E5%8F%A3%E6%A6%B4%E8%8E%B2%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `547.1K 🔥`
1. [马立奥妹妹早产](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E7%AB%8B%E5%A5%A5%E5%A6%B9%E5%A6%B9%E6%97%A9%E4%BA%A7%23) `541.0K 🔥`
1. [马琳感受到王皓的压力了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E7%90%B3%E6%84%9F%E5%8F%97%E5%88%B0%E7%8E%8B%E7%9A%93%E7%9A%84%E5%8E%8B%E5%8A%9B%E4%BA%86%23) `232.2K 🔥`
1. [邓超说孙俪带三个辛苦了](https://s.weibo.com/weibo?q=%23%E9%82%93%E8%B6%85%E8%AF%B4%E5%AD%99%E4%BF%AA%E5%B8%A6%E4%B8%89%E4%B8%AA%E8%BE%9B%E8%8B%A6%E4%BA%86%23) `224.6K 🔥`
1. [主角 电影质感](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%20%E7%94%B5%E5%BD%B1%E8%B4%A8%E6%84%9F%23) `222.1K 🔥`
1. [越南男子不慎卷入粉碎机身亡](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E5%8D%97%E7%94%B7%E5%AD%90%E4%B8%8D%E6%85%8E%E5%8D%B7%E5%85%A5%E7%B2%89%E7%A2%8E%E6%9C%BA%E8%BA%AB%E4%BA%A1%23) `220.1K 🔥`
1. [国乒女团7连冠 (National table tennis women's team wins 7 consecutive championships)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E5%A5%B3%E5%9B%A27%E8%BF%9E%E5%86%A0%23) `4.0M 🔥` `-70%`
1. [王曼昱哭了 (Wang Manyu cried)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E5%93%AD%E4%BA%86%23) `3.7M 🔥` `-31%`
1. [妈妈的平衡由自己定义](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E7%9A%84%E5%B9%B3%E8%A1%A1%E7%94%B1%E8%87%AA%E5%B7%B1%E5%AE%9A%E4%B9%89%23) `1.4M 🔥` `-22%`
1. [孙颖莎MVP](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8EMVP%23) `1.1M 🔥` `-57%`
1. [主角收视率](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%E6%94%B6%E8%A7%86%E7%8E%87%23) `583.2K 🔥` `-24%`
1. [严浩翔 延毕](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%20%E5%BB%B6%E6%AF%95%23) `572.7K 🔥` `-25%`
1. [蔡文静一觉醒来账号被没收了](https://s.weibo.com/weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E4%B8%80%E8%A7%89%E9%86%92%E6%9D%A5%E8%B4%A6%E5%8F%B7%E8%A2%AB%E6%B2%A1%E6%94%B6%E4%BA%86%23) `567.8K 🔥` `-23%`
1. [马琳战术](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E7%90%B3%E6%88%98%E6%9C%AF%23) `565.0K 🔥` `-68%`
1. [要对存钱有概念 (Have a concept of saving money)](https://s.weibo.com/weibo?q=%23%E8%A6%81%E5%AF%B9%E5%AD%98%E9%92%B1%E6%9C%89%E6%A6%82%E5%BF%B5%23) `530.8K 🔥` `-29%`
1. [吃出24块鸡头顾客被免单仍想市监介入](https://s.weibo.com/weibo?q=%23%E5%90%83%E5%87%BA24%E5%9D%97%E9%B8%A1%E5%A4%B4%E9%A1%BE%E5%AE%A2%E8%A2%AB%E5%85%8D%E5%8D%95%E4%BB%8D%E6%83%B3%E5%B8%82%E7%9B%91%E4%BB%8B%E5%85%A5%23) `399.8K 🔥` `-33%`
1. [汉坦病毒邮轮零号病人身份曝光](https://s.weibo.com/weibo?q=%23%E6%B1%89%E5%9D%A6%E7%97%85%E6%AF%92%E9%82%AE%E8%BD%AE%E9%9B%B6%E5%8F%B7%E7%97%85%E4%BA%BA%E8%BA%AB%E4%BB%BD%E6%9B%9D%E5%85%89%23) `385.2K 🔥` `-21%`
1. [主角 (main character)](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `383.7K 🔥` `-37%`
1. [小英道歉了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%8B%B1%E9%81%93%E6%AD%89%E4%BA%86%23) `381.4K 🔥` `-43%`
1. [中国女团vs日本 (Chinese women's team vs Japan)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%9B%A2vs%E6%97%A5%E6%9C%AC%23) `375.0K 🔥` `-66%`
1. [孙颖莎vs张本美和 (Sun Yingsha vs. Zhang Benmeihe)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Evs%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `370.3K 🔥` `-53%`
1. [压力给到孙颖莎](https://s.weibo.com/weibo?q=%23%E5%8E%8B%E5%8A%9B%E7%BB%99%E5%88%B0%E5%AD%99%E9%A2%96%E8%8E%8E%23) `329.3K 🔥` `-48%`
1. [影院卫生间用手握香蕉西柚代指男女](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E9%99%A2%E5%8D%AB%E7%94%9F%E9%97%B4%E7%94%A8%E6%89%8B%E6%8F%A1%E9%A6%99%E8%95%89%E8%A5%BF%E6%9F%9A%E4%BB%A3%E6%8C%87%E7%94%B7%E5%A5%B3%23) `239.4K 🔥` `-62%`
1. [EDG战胜XLG夺冠](https://s.weibo.com/weibo?q=%23EDG%E6%88%98%E8%83%9CXLG%E5%A4%BA%E5%86%A0%23) `226.9K 🔥` `-60%`

Updated at 2026-05-10 23:37:38

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
