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

1. [中秋放假3天不调休高速不免费](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%A7%8B%E6%94%BE%E5%81%873%E5%A4%A9%E4%B8%8D%E8%B0%83%E4%BC%91%E9%AB%98%E9%80%9F%E4%B8%8D%E5%85%8D%E8%B4%B9%23) `1.2M 🔥` `NEW`
1. [葫芦娃爷爷隔壁咖啡店挂了7个葫芦](https://s.weibo.com/weibo?q=%23%E8%91%AB%E8%8A%A6%E5%A8%83%E7%88%B7%E7%88%B7%E9%9A%94%E5%A3%81%E5%92%96%E5%95%A1%E5%BA%97%E6%8C%82%E4%BA%867%E4%B8%AA%E8%91%AB%E8%8A%A6%23) `910.1K 🔥` `NEW`
1. [失去双腿的他说继续冲锋](https://s.weibo.com/weibo?q=%23%E5%A4%B1%E5%8E%BB%E5%8F%8C%E8%85%BF%E7%9A%84%E4%BB%96%E8%AF%B4%E7%BB%A7%E7%BB%AD%E5%86%B2%E9%94%8B%23) `852.9K 🔥` `NEW`
1. [家长群 教师负担](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%95%BF%E7%BE%A4%20%E6%95%99%E5%B8%88%E8%B4%9F%E6%8B%85%23) `849.6K 🔥` `NEW`
1. [单亲妈妈说没钱再捐后公益机构笑了](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BA%B2%E5%A6%88%E5%A6%88%E8%AF%B4%E6%B2%A1%E9%92%B1%E5%86%8D%E6%8D%90%E5%90%8E%E5%85%AC%E7%9B%8A%E6%9C%BA%E6%9E%84%E7%AC%91%E4%BA%86%23) `487.5K 🔥` `NEW`
1. [陈丽君解锁东阿阿胶武侠大片](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%90%9B%E8%A7%A3%E9%94%81%E4%B8%9C%E9%98%BF%E9%98%BF%E8%83%B6%E6%AD%A6%E4%BE%A0%E5%A4%A7%E7%89%87%23) `473.9K 🔥` `NEW`
1. [星宇人力资源总监免职](https://s.weibo.com/weibo?q=%23%E6%98%9F%E5%AE%87%E4%BA%BA%E5%8A%9B%E8%B5%84%E6%BA%90%E6%80%BB%E7%9B%91%E5%85%8D%E8%81%8C%23) `468.9K 🔥` `NEW`
1. [詹青云宣传早春晴朗被吐槽](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E9%9D%92%E4%BA%91%E5%AE%A3%E4%BC%A0%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E8%A2%AB%E5%90%90%E6%A7%BD%23) `467.7K 🔥` `NEW`
1. [现在不是出轨的问题](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E4%B8%8D%E6%98%AF%E5%87%BA%E8%BD%A8%E7%9A%84%E9%97%AE%E9%A2%98%23) `464.9K 🔥` `NEW`
1. [国乒10人出战亚运会](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%9210%E4%BA%BA%E5%87%BA%E6%88%98%E4%BA%9A%E8%BF%90%E4%BC%9A%23) `464.4K 🔥` `NEW`
1. [曝井柏然刘雯结婚了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%BA%95%E6%9F%8F%E7%84%B6%E5%88%98%E9%9B%AF%E7%BB%93%E5%A9%9A%E4%BA%86%23) `460.7K 🔥` `NEW`
1. [陈晓 陈妍希](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%99%93%20%E9%99%88%E5%A6%8D%E5%B8%8C%23) `460.0K 🔥` `NEW`
1. [母亲哄睡3岁儿子外出喝酒儿子坠亡](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E5%93%84%E7%9D%A13%E5%B2%81%E5%84%BF%E5%AD%90%E5%A4%96%E5%87%BA%E5%96%9D%E9%85%92%E5%84%BF%E5%AD%90%E5%9D%A0%E4%BA%A1%23) `457.0K 🔥` `NEW`
1. [詹青云删除宣传早春晴朗视频](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E9%9D%92%E4%BA%91%E5%88%A0%E9%99%A4%E5%AE%A3%E4%BC%A0%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E8%A7%86%E9%A2%91%23) `455.9K 🔥` `NEW`
1. [和贫困生喝咖啡一样的困境](https://s.weibo.com/weibo?q=%23%E5%92%8C%E8%B4%AB%E5%9B%B0%E7%94%9F%E5%96%9D%E5%92%96%E5%95%A1%E4%B8%80%E6%A0%B7%E7%9A%84%E5%9B%B0%E5%A2%83%23) `453.3K 🔥` `NEW`
1. [早春晴朗删掉的亲密戏](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E5%88%A0%E6%8E%89%E7%9A%84%E4%BA%B2%E5%AF%86%E6%88%8F%23) `451.5K 🔥` `NEW`
1. [雷军新头像有澎程](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E6%96%B0%E5%A4%B4%E5%83%8F%E6%9C%89%E6%BE%8E%E7%A8%8B%23) `449.3K 🔥` `NEW`
1. [摩尔线程回应20cm跌停](https://s.weibo.com/weibo?q=%23%E6%91%A9%E5%B0%94%E7%BA%BF%E7%A8%8B%E5%9B%9E%E5%BA%9420cm%E8%B7%8C%E5%81%9C%23) `447.5K 🔥` `NEW`
1. [孙千气质](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E6%B0%94%E8%B4%A8%23) `444.2K 🔥` `NEW`
1. [看演唱会被取消低保不该简单一刀切](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E8%A2%AB%E5%8F%96%E6%B6%88%E4%BD%8E%E4%BF%9D%E4%B8%8D%E8%AF%A5%E7%AE%80%E5%8D%95%E4%B8%80%E5%88%80%E5%88%87%23) `442.9K 🔥` `NEW`
1. [身体的炎症全部消失的方法](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BD%93%E7%9A%84%E7%82%8E%E7%97%87%E5%85%A8%E9%83%A8%E6%B6%88%E5%A4%B1%E7%9A%84%E6%96%B9%E6%B3%95%23) `439.9K 🔥` `NEW`
1. [曝王晓慧结婚了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E6%99%93%E6%85%A7%E7%BB%93%E5%A9%9A%E4%BA%86%23) `437.7K 🔥` `NEW`
1. [前阿里高管死在加州路边](https://s.weibo.com/weibo?q=%23%E5%89%8D%E9%98%BF%E9%87%8C%E9%AB%98%E7%AE%A1%E6%AD%BB%E5%9C%A8%E5%8A%A0%E5%B7%9E%E8%B7%AF%E8%BE%B9%23) `436.7K 🔥` `NEW`
1. [李沐宸道歉](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B2%90%E5%AE%B8%E9%81%93%E6%AD%89%23) `432.7K 🔥` `NEW`
1. [早春晴朗tracy演员被造型师讨薪](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97tracy%E6%BC%94%E5%91%98%E8%A2%AB%E9%80%A0%E5%9E%8B%E5%B8%88%E8%AE%A8%E8%96%AA%23) `431.8K 🔥` `NEW`
1. [网红Tiny泰国手术失败去世](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2Tiny%E6%B3%B0%E5%9B%BD%E6%89%8B%E6%9C%AF%E5%A4%B1%E8%B4%A5%E5%8E%BB%E4%B8%96%23) `430.3K 🔥` `NEW`
1. [念相思](https://s.weibo.com/weibo?q=%23%E5%BF%B5%E7%9B%B8%E6%80%9D%23) `427.5K 🔥` `NEW`
1. [平儿扮演者在中戏迎新晚会上跳舞](https://s.weibo.com/weibo?q=%23%E5%B9%B3%E5%84%BF%E6%89%AE%E6%BC%94%E8%80%85%E5%9C%A8%E4%B8%AD%E6%88%8F%E8%BF%8E%E6%96%B0%E6%99%9A%E4%BC%9A%E4%B8%8A%E8%B7%B3%E8%88%9E%23) `424.9K 🔥` `NEW`
1. [第一批用AI当恋爱军师的直男出现了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E7%94%A8AI%E5%BD%93%E6%81%8B%E7%88%B1%E5%86%9B%E5%B8%88%E7%9A%84%E7%9B%B4%E7%94%B7%E5%87%BA%E7%8E%B0%E4%BA%86%23) `423.6K 🔥` `NEW`
1. [冯德伦的超预期选择](https://s.weibo.com/weibo?q=%23%E5%86%AF%E5%BE%B7%E4%BC%A6%E7%9A%84%E8%B6%85%E9%A2%84%E6%9C%9F%E9%80%89%E6%8B%A9%23) `420.4K 🔥` `NEW`
1. [小狗被咬死主人骑车追撞大狗](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E8%A2%AB%E5%92%AC%E6%AD%BB%E4%B8%BB%E4%BA%BA%E9%AA%91%E8%BD%A6%E8%BF%BD%E6%92%9E%E5%A4%A7%E7%8B%97%23) `419.4K 🔥` `NEW`
1. [迪丽热巴太帅了](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%A4%AA%E5%B8%85%E4%BA%86%23) `416.8K 🔥` `NEW`
1. [赵丽颖长发](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E9%95%BF%E5%8F%91%23) `415.3K 🔥` `NEW`
1. [明日方舟新周边](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%E6%96%B0%E5%91%A8%E8%BE%B9%23) `412.8K 🔥` `NEW`
1. [王俊凯 英雄联盟](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%20%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9F%23) `410.1K 🔥` `NEW`
1. [马嘉祺的鸡蛋歌当年有多火](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E7%9A%84%E9%B8%A1%E8%9B%8B%E6%AD%8C%E5%BD%93%E5%B9%B4%E6%9C%89%E5%A4%9A%E7%81%AB%23) `407.2K 🔥` `NEW`
1. [英雄联盟15周年盛典](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9F15%E5%91%A8%E5%B9%B4%E7%9B%9B%E5%85%B8%23) `406.4K 🔥` `NEW`
1. [张馨予瘦成啥样了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A6%A8%E4%BA%88%E7%98%A6%E6%88%90%E5%95%A5%E6%A0%B7%E4%BA%86%23) `402.8K 🔥` `NEW`
1. [才知道郑佩佩去世后捐赠了大脑](https://s.weibo.com/weibo?q=%23%E6%89%8D%E7%9F%A5%E9%81%93%E9%83%91%E4%BD%A9%E4%BD%A9%E5%8E%BB%E4%B8%96%E5%90%8E%E6%8D%90%E8%B5%A0%E4%BA%86%E5%A4%A7%E8%84%91%23) `402.0K 🔥` `NEW`
1. [武亮称接棒张雪峰后压力大到斑秃](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E4%BA%AE%E7%A7%B0%E6%8E%A5%E6%A3%92%E5%BC%A0%E9%9B%AA%E5%B3%B0%E5%90%8E%E5%8E%8B%E5%8A%9B%E5%A4%A7%E5%88%B0%E6%96%91%E7%A7%83%23) `399.8K 🔥` `NEW`
1. [麦琳和锤娜丽莎分别瘦了快三十斤](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E7%90%B3%E5%92%8C%E9%94%A4%E5%A8%9C%E4%B8%BD%E8%8E%8E%E5%88%86%E5%88%AB%E7%98%A6%E4%BA%86%E5%BF%AB%E4%B8%89%E5%8D%81%E6%96%A4%23) `396.9K 🔥` `NEW`
1. [特朗普换发色了吗](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E6%8D%A2%E5%8F%91%E8%89%B2%E4%BA%86%E5%90%97%23) `394.4K 🔥` `NEW`
1. [苏晓彤 拍戏的意义是什么](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%99%93%E5%BD%A4%20%E6%8B%8D%E6%88%8F%E7%9A%84%E6%84%8F%E4%B9%89%E6%98%AF%E4%BB%80%E4%B9%88%23) `393.9K 🔥` `NEW`
1. [王楚钦说最近在补基础](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%AF%B4%E6%9C%80%E8%BF%91%E5%9C%A8%E8%A1%A5%E5%9F%BA%E7%A1%80%23) `391.6K 🔥` `NEW`
1. [马嘉祺每首歌的进度条](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E6%AF%8F%E9%A6%96%E6%AD%8C%E7%9A%84%E8%BF%9B%E5%BA%A6%E6%9D%A1%23) `388.2K 🔥` `NEW`
1. [你那个情人也有妻子](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E9%82%A3%E4%B8%AA%E6%83%85%E4%BA%BA%E4%B9%9F%E6%9C%89%E5%A6%BB%E5%AD%90%23) `386.7K 🔥` `NEW`
1. [黄金 散户](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%20%E6%95%A3%E6%88%B7%23) `385.4K 🔥` `NEW`
1. [张靓颖三国志玩家身份被曝](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9D%93%E9%A2%96%E4%B8%89%E5%9B%BD%E5%BF%97%E7%8E%A9%E5%AE%B6%E8%BA%AB%E4%BB%BD%E8%A2%AB%E6%9B%9D%23) `383.3K 🔥` `NEW`
1. [电影界已经不能没有AI了](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E7%95%8C%E5%B7%B2%E7%BB%8F%E4%B8%8D%E8%83%BD%E6%B2%A1%E6%9C%89AI%E4%BA%86%23) `379.5K 🔥` `NEW`
1. [鹿晗拓路者品牌全球代言人](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E6%8B%93%E8%B7%AF%E8%80%85%E5%93%81%E7%89%8C%E5%85%A8%E7%90%83%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `852.3K 🔥` `+105%`
1. [官方回应赴港看演唱会被取消全家低保](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E8%B5%B4%E6%B8%AF%E7%9C%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E8%A2%AB%E5%8F%96%E6%B6%88%E5%85%A8%E5%AE%B6%E4%BD%8E%E4%BF%9D%23) `592.1K 🔥` `-87%`

Updated at 2026-09-07 13:16:20

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
