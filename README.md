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

1. [裁判无视中国队员举手示意 (The referee ignored the Chinese player’s raise of hands)](https://s.weibo.com/weibo?q=%23%E8%A3%81%E5%88%A4%E6%97%A0%E8%A7%86%E4%B8%AD%E5%9B%BD%E9%98%9F%E5%91%98%E4%B8%BE%E6%89%8B%E7%A4%BA%E6%84%8F%23) `1.1M 🔥` `NEW`
1. [马年春晚部分节目单曝光](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%B9%B4%E6%98%A5%E6%99%9A%E9%83%A8%E5%88%86%E8%8A%82%E7%9B%AE%E5%8D%95%E6%9B%9D%E5%85%89%23) `785.0K 🔥` `NEW`
1. [京彩闹春不打烊](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E5%BD%A9%E9%97%B9%E6%98%A5%E4%B8%8D%E6%89%93%E7%83%8A%23) `631.8K 🔥` `NEW`
1. [AI车生活](https://s.weibo.com/weibo?q=%23AI%E8%BD%A6%E7%94%9F%E6%B4%BB%23) `614.7K 🔥` `NEW`
1. [谷爱凌吐槽国际雪联安排不公平](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%90%90%E6%A7%BD%E5%9B%BD%E9%99%85%E9%9B%AA%E8%81%94%E5%AE%89%E6%8E%92%E4%B8%8D%E5%85%AC%E5%B9%B3%23) `386.6K 🔥` `NEW`
1. [深圳18岁CEO爆火后现状](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B318%E5%B2%81CEO%E7%88%86%E7%81%AB%E5%90%8E%E7%8E%B0%E7%8A%B6%23) `339.6K 🔥` `NEW`
1. [辽宁春晚一马当先](https://s.weibo.com/weibo?q=%23%E8%BE%BD%E5%AE%81%E6%98%A5%E6%99%9A%E4%B8%80%E9%A9%AC%E5%BD%93%E5%85%88%23) `224.0K 🔥` `NEW`
1. [cbc解说林孝埈摔倒似脚下冰面裂开](https://s.weibo.com/weibo?q=%23cbc%E8%A7%A3%E8%AF%B4%E6%9E%97%E5%AD%9D%E5%9F%88%E6%91%94%E5%80%92%E4%BC%BC%E8%84%9A%E4%B8%8B%E5%86%B0%E9%9D%A2%E8%A3%82%E5%BC%80%23) `216.7K 🔥` `NEW`
1. [王一博太燃根本拦不住](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%A4%AA%E7%87%83%E6%A0%B9%E6%9C%AC%E6%8B%A6%E4%B8%8D%E4%BD%8F%23) `212.8K 🔥` `NEW`
1. [一搭二搭全是青梅竹马](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%90%AD%E4%BA%8C%E6%90%AD%E5%85%A8%E6%98%AF%E9%9D%92%E6%A2%85%E7%AB%B9%E9%A9%AC%23) `194.2K 🔥` `NEW`
1. [网红99元4斤带货牛肉自称假一赔万 (Internet celebrity sells 4 pounds of beef for 99 yuan, claiming to be fake and paying 10,000 yuan)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A299%E5%85%834%E6%96%A4%E5%B8%A6%E8%B4%A7%E7%89%9B%E8%82%89%E8%87%AA%E7%A7%B0%E5%81%87%E4%B8%80%E8%B5%94%E4%B8%87%23) `189.4K 🔥` `NEW`
1. [留几手聊葛夕上春晚](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%87%A0%E6%89%8B%E8%81%8A%E8%91%9B%E5%A4%95%E4%B8%8A%E6%98%A5%E6%99%9A%23) `186.2K 🔥` `NEW`
1. [镖人](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `173.4K 🔥` `NEW`
1. [电影镖人新春版特别预告](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E9%95%96%E4%BA%BA%E6%96%B0%E6%98%A5%E7%89%88%E7%89%B9%E5%88%AB%E9%A2%84%E5%91%8A%23) `151.8K 🔥` `NEW`
1. [一中国公民在新加坡赌博跳楼身亡](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E5%9C%A8%E6%96%B0%E5%8A%A0%E5%9D%A1%E8%B5%8C%E5%8D%9A%E8%B7%B3%E6%A5%BC%E8%BA%AB%E4%BA%A1%23) `148.1K 🔥` `NEW`
1. [金饰价格一夜跌17元](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E6%A0%BC%E4%B8%80%E5%A4%9C%E8%B7%8C17%E5%85%83%23) `129.7K 🔥` `NEW`
1. [大爷挑着一床被子返乡](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%88%B7%E6%8C%91%E7%9D%80%E4%B8%80%E5%BA%8A%E8%A2%AB%E5%AD%90%E8%BF%94%E4%B9%A1%23) `125.1K 🔥` `NEW`
1. [白敬亭 宋轶](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%20%E5%AE%8B%E8%BD%B6%23) `125.0K 🔥` `NEW`
1. [伤心swimming发完整时间线](https://s.weibo.com/weibo?q=%23%E4%BC%A4%E5%BF%83swimming%E5%8F%91%E5%AE%8C%E6%95%B4%E6%97%B6%E9%97%B4%E7%BA%BF%23) `124.9K 🔥` `NEW`
1. [女子左手被50吨冲床碾成泥](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B7%A6%E6%89%8B%E8%A2%AB50%E5%90%A8%E5%86%B2%E5%BA%8A%E7%A2%BE%E6%88%90%E6%B3%A5%23) `124.7K 🔥` `NEW`
1. [陈小春言承旭罗嘉豪易烊千玺同台 (Chen Xiaochun, Yan Chengxu, Luo Jiahao and Yi Yang Qianxi were on the same stage)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%8F%E6%98%A5%E8%A8%80%E6%89%BF%E6%97%AD%E7%BD%97%E5%98%89%E8%B1%AA%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E5%90%8C%E5%8F%B0%23) `124.6K 🔥` `NEW`
1. [黄子弘凡方起诉伤心swimming](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E6%96%B9%E8%B5%B7%E8%AF%89%E4%BC%A4%E5%BF%83swimming%23) `122.1K 🔥` `NEW`
1. [刘少昂眼神里都看见金牌了](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%B0%91%E6%98%82%E7%9C%BC%E7%A5%9E%E9%87%8C%E9%83%BD%E7%9C%8B%E8%A7%81%E9%87%91%E7%89%8C%E4%BA%86%23) `117.2K 🔥` `NEW`
1. [宋轶 情侣背景](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E8%BD%B6%20%E6%83%85%E4%BE%A3%E8%83%8C%E6%99%AF%23) `113.6K 🔥` `NEW`
1. [尼格买提Mate80探班春晚后台](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%A0%BC%E4%B9%B0%E6%8F%90Mate80%E6%8E%A2%E7%8F%AD%E6%98%A5%E6%99%9A%E5%90%8E%E5%8F%B0%23) `109.2K 🔥` `NEW`
1. [家政大姐带4个空瓶回家过年](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E6%94%BF%E5%A4%A7%E5%A7%90%E5%B8%A64%E4%B8%AA%E7%A9%BA%E7%93%B6%E5%9B%9E%E5%AE%B6%E8%BF%87%E5%B9%B4%23) `107.3K 🔥` `NEW`
1. [惊蛰无声](https://s.weibo.com/weibo?q=%23%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%23) `107.2K 🔥` `NEW`
1. [张凌赫超话20秒语音](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%B6%85%E8%AF%9D20%E7%A7%92%E8%AF%AD%E9%9F%B3%23) `102.1K 🔥` `NEW`
1. [伤心swimming晒聊天转账记录](https://s.weibo.com/weibo?q=%23%E4%BC%A4%E5%BF%83swimming%E6%99%92%E8%81%8A%E5%A4%A9%E8%BD%AC%E8%B4%A6%E8%AE%B0%E5%BD%95%23) `97.0K 🔥` `NEW`
1. [情绪不好时马上可以做的10件小事](https://s.weibo.com/weibo?q=%23%E6%83%85%E7%BB%AA%E4%B8%8D%E5%A5%BD%E6%97%B6%E9%A9%AC%E4%B8%8A%E5%8F%AF%E4%BB%A5%E5%81%9A%E7%9A%8410%E4%BB%B6%E5%B0%8F%E4%BA%8B%23) `85.0K 🔥` `NEW`
1. [虞书欣从苍兰诀就用胶片拍群像了 (Yu Shuxin has been using film to take group portraits since Canglanjue)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%BB%8E%E8%8B%8D%E5%85%B0%E8%AF%80%E5%B0%B1%E7%94%A8%E8%83%B6%E7%89%87%E6%8B%8D%E7%BE%A4%E5%83%8F%E4%BA%86%23) `84.7K 🔥` `NEW`
1. [央视春晚彩排碰到了易烊千玺](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%98%A5%E6%99%9A%E5%BD%A9%E6%8E%92%E7%A2%B0%E5%88%B0%E4%BA%86%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%23) `83.5K 🔥` `NEW`
1. [建设银行被罚没超4350万](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%BE%E9%93%B6%E8%A1%8C%E8%A2%AB%E7%BD%9A%E6%B2%A1%E8%B6%854350%E4%B8%87%23) `80.6K 🔥` `NEW`
1. [扣篮大赛](https://s.weibo.com/weibo?q=%23%E6%89%A3%E7%AF%AE%E5%A4%A7%E8%B5%9B%23) `80.5K 🔥` `NEW`
1. [刘亦菲情人节素颜营业](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E6%83%85%E4%BA%BA%E8%8A%82%E7%B4%A0%E9%A2%9C%E8%90%A5%E4%B8%9A%23) `75.9K 🔥` `NEW`
1. [佟丽娅美得像AI仙鹤真得像特效](https://s.weibo.com/weibo?q=%23%E4%BD%9F%E4%B8%BD%E5%A8%85%E7%BE%8E%E5%BE%97%E5%83%8FAI%E4%BB%99%E9%B9%A4%E7%9C%9F%E5%BE%97%E5%83%8F%E7%89%B9%E6%95%88%23) `73.1K 🔥` `NEW`
1. [无双祈愿王者荣耀](https://s.weibo.com/weibo?q=%23%E6%97%A0%E5%8F%8C%E7%A5%88%E6%84%BF%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `72.5K 🔥` `NEW`
1. [英语口语水平恐怕在我之上](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E8%AF%AD%E5%8F%A3%E8%AF%AD%E6%B0%B4%E5%B9%B3%E6%81%90%E6%80%95%E5%9C%A8%E6%88%91%E4%B9%8B%E4%B8%8A%23) `72.1K 🔥` `NEW`
1. [扣篮大赛还能这么失冠](https://s.weibo.com/weibo?q=%23%E6%89%A3%E7%AF%AE%E5%A4%A7%E8%B5%9B%E8%BF%98%E8%83%BD%E8%BF%99%E4%B9%88%E5%A4%B1%E5%86%A0%23) `66.6K 🔥` `NEW`
1. [刘少昂说还有两个项目不能放弃](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%B0%91%E6%98%82%E8%AF%B4%E8%BF%98%E6%9C%89%E4%B8%A4%E4%B8%AA%E9%A1%B9%E7%9B%AE%E4%B8%8D%E8%83%BD%E6%94%BE%E5%BC%83%23) `63.2K 🔥` `NEW`
1. [镖人路演 (escort road show)](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E8%B7%AF%E6%BC%94%23) `62.8K 🔥` `NEW`
1. [央视官宣王菲春晚新歌 (CCTV officially announces Faye Wong’s new song for Spring Festival Gala)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E5%AE%98%E5%AE%A3%E7%8E%8B%E8%8F%B2%E6%98%A5%E6%99%9A%E6%96%B0%E6%AD%8C%23) `228.2K 🔥` `+34%`
1. [为什么朋友圈没人秀恩爱了 (Why is no one showing affection in the circle of friends anymore?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%9C%8B%E5%8F%8B%E5%9C%88%E6%B2%A1%E4%BA%BA%E7%A7%80%E6%81%A9%E7%88%B1%E4%BA%86%23) `214.8K 🔥` `+164%`
1. [黄子韬回应扇了徐艺洋](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E5%9B%9E%E5%BA%94%E6%89%87%E4%BA%86%E5%BE%90%E8%89%BA%E6%B4%8B%23) `186.4K 🔥` `+39%`
1. [谷爱凌大跳台170.75分](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%A4%A7%E8%B7%B3%E5%8F%B0170.75%E5%88%86%23) `180.0K 🔥` `+50%`
1. [丈夫破产负债10亿妻子卖珠宝帮还债](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E7%A0%B4%E4%BA%A7%E8%B4%9F%E5%80%BA10%E4%BA%BF%E5%A6%BB%E5%AD%90%E5%8D%96%E7%8F%A0%E5%AE%9D%E5%B8%AE%E8%BF%98%E5%80%BA%23) `125.2K 🔥`
1. [曝黄子弘凡爸爸诈骗学生 (Exposed Huang Zihongfan’s father defrauded students)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E7%88%B8%E7%88%B8%E8%AF%88%E9%AA%97%E5%AD%A6%E7%94%9F%23) `107.4K 🔥`
1. [王毅警告日本现场爆发热烈掌声 (Wang Yi warned Japan that the scene broke out into loud applause)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AF%85%E8%AD%A6%E5%91%8A%E6%97%A5%E6%9C%AC%E7%8E%B0%E5%9C%BA%E7%88%86%E5%8F%91%E7%83%AD%E7%83%88%E6%8E%8C%E5%A3%B0%23) `107.9K 🔥` `-71%`
1. [林孝埈1500米摔倒 (Lin Xiaojuan fell at 1500 meters)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%881500%E7%B1%B3%E6%91%94%E5%80%92%23) `106.9K 🔥` `-86%`
1. [迪丽热巴作品豆瓣评分 (Douban ratings of Dilraba's works)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%BD%9C%E5%93%81%E8%B1%86%E7%93%A3%E8%AF%84%E5%88%86%23) `68.0K 🔥` `-39%`
1. [英国选手撞倒孙龙刘少昂](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E9%80%89%E6%89%8B%E6%92%9E%E5%80%92%E5%AD%99%E9%BE%99%E5%88%98%E5%B0%91%E6%98%82%23) `63.6K 🔥` `-94%`
1. [王一博2026年央视总台春晚](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A2026%E5%B9%B4%E5%A4%AE%E8%A7%86%E6%80%BB%E5%8F%B0%E6%98%A5%E6%99%9A%23) `63.5K 🔥` `-76%`

Updated at 2026-02-15 11:16:22

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
