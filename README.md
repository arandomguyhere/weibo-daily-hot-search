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

1. [台风 (typhoon)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `1.3M 🔥` `NEW`
1. [佛得角再次感谢中国](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E5%86%8D%E6%AC%A1%E6%84%9F%E8%B0%A2%E4%B8%AD%E5%9B%BD%23) `693.9K 🔥` `NEW`
1. [十五五期间美丽中国建设规划亮点](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E6%9C%9F%E9%97%B4%E7%BE%8E%E4%B8%BD%E4%B8%AD%E5%9B%BD%E5%BB%BA%E8%AE%BE%E8%A7%84%E5%88%92%E4%BA%AE%E7%82%B9%23) `556.6K 🔥` `NEW`
1. [赛道见证日产电动技术真实力](https://s.weibo.com/weibo?q=%23%E8%B5%9B%E9%81%93%E8%A7%81%E8%AF%81%E6%97%A5%E4%BA%A7%E7%94%B5%E5%8A%A8%E6%8A%80%E6%9C%AF%E7%9C%9F%E5%AE%9E%E5%8A%9B%23) `554.2K 🔥` `NEW`
1. [意识到了隐形支出的可怕](https://s.weibo.com/weibo?q=%23%E6%84%8F%E8%AF%86%E5%88%B0%E4%BA%86%E9%9A%90%E5%BD%A2%E6%94%AF%E5%87%BA%E7%9A%84%E5%8F%AF%E6%80%95%23) `553.0K 🔥` `NEW`
1. [王力宏好深的伤口](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E5%A5%BD%E6%B7%B1%E7%9A%84%E4%BC%A4%E5%8F%A3%23) `547.9K 🔥` `NEW`
1. [BLG已反馈直播镜头露出BP板](https://s.weibo.com/weibo?q=%23BLG%E5%B7%B2%E5%8F%8D%E9%A6%88%E7%9B%B4%E6%92%AD%E9%95%9C%E5%A4%B4%E9%9C%B2%E5%87%BABP%E6%9D%BF%23) `476.5K 🔥` `NEW`
1. [VaVa梁源吵起来了](https://s.weibo.com/weibo?q=%23VaVa%E6%A2%81%E6%BA%90%E5%90%B5%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `381.6K 🔥` `NEW`
1. [当女生开始有大女主感](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%A5%B3%E7%94%9F%E5%BC%80%E5%A7%8B%E6%9C%89%E5%A4%A7%E5%A5%B3%E4%B8%BB%E6%84%9F%23) `353.2K 🔥` `NEW`
1. [吃桃子也有南北方差异](https://s.weibo.com/weibo?q=%23%E5%90%83%E6%A1%83%E5%AD%90%E4%B9%9F%E6%9C%89%E5%8D%97%E5%8C%97%E6%96%B9%E5%B7%AE%E5%BC%82%23) `352.6K 🔥` `NEW`
1. [低成本恢复生命力的小事 (Little things to restore vitality at low cost)](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E6%88%90%E6%9C%AC%E6%81%A2%E5%A4%8D%E7%94%9F%E5%91%BD%E5%8A%9B%E7%9A%84%E5%B0%8F%E4%BA%8B%23) `350.0K 🔥` `NEW`
1. [秦牛正威承认整容了](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E7%89%9B%E6%AD%A3%E5%A8%81%E6%89%BF%E8%AE%A4%E6%95%B4%E5%AE%B9%E4%BA%86%23) `348.8K 🔥` `NEW`
1. [韩网扒出SM练习生版致美丽的你](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BD%91%E6%89%92%E5%87%BASM%E7%BB%83%E4%B9%A0%E7%94%9F%E7%89%88%E8%87%B4%E7%BE%8E%E4%B8%BD%E7%9A%84%E4%BD%A0%23) `347.2K 🔥` `NEW`
1. [女子确诊肺癌晚期在地铁上介绍自己](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A1%AE%E8%AF%8A%E8%82%BA%E7%99%8C%E6%99%9A%E6%9C%9F%E5%9C%A8%E5%9C%B0%E9%93%81%E4%B8%8A%E4%BB%8B%E7%BB%8D%E8%87%AA%E5%B7%B1%23) `346.1K 🔥` `NEW`
1. [霉霉婚礼伴手礼](https://s.weibo.com/weibo?q=%23%E9%9C%89%E9%9C%89%E5%A9%9A%E7%A4%BC%E4%BC%B4%E6%89%8B%E7%A4%BC%23) `343.8K 🔥` `NEW`
1. [人到了年纪就会觉醒老式听觉](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%88%B0%E4%BA%86%E5%B9%B4%E7%BA%AA%E5%B0%B1%E4%BC%9A%E8%A7%89%E9%86%92%E8%80%81%E5%BC%8F%E5%90%AC%E8%A7%89%23) `342.5K 🔥` `NEW`
1. [全智贤手背皱纹](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%99%BA%E8%B4%A4%E6%89%8B%E8%83%8C%E7%9A%B1%E7%BA%B9%23) `340.6K 🔥` `NEW`
1. [王力宏摔倒](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E6%91%94%E5%80%92%23) `340.0K 🔥` `NEW`
1. [iPadPro首发M7芯片](https://s.weibo.com/weibo?q=%23iPadPro%E9%A6%96%E5%8F%91M7%E8%8A%AF%E7%89%87%23) `337.3K 🔥` `NEW`
1. [央视曝次抛衣健康风险](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E6%AC%A1%E6%8A%9B%E8%A1%A3%E5%81%A5%E5%BA%B7%E9%A3%8E%E9%99%A9%23) `336.6K 🔥` `NEW`
1. [重庆小伙打车到拉萨哭了司机爆梗 (A Chongqing guy took a taxi to Lhasa and the driver cried.)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E5%BA%86%E5%B0%8F%E4%BC%99%E6%89%93%E8%BD%A6%E5%88%B0%E6%8B%89%E8%90%A8%E5%93%AD%E4%BA%86%E5%8F%B8%E6%9C%BA%E7%88%86%E6%A2%97%23) `334.7K 🔥` `NEW`
1. [曝郭宇欣一直喜欢背后说人闲话](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%83%AD%E5%AE%87%E6%AC%A3%E4%B8%80%E7%9B%B4%E5%96%9C%E6%AC%A2%E8%83%8C%E5%90%8E%E8%AF%B4%E4%BA%BA%E9%97%B2%E8%AF%9D%23) `332.6K 🔥` `NEW`
1. [人一定要去上班](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E5%AE%9A%E8%A6%81%E5%8E%BB%E4%B8%8A%E7%8F%AD%23) `332.0K 🔥` `NEW`
1. [秦岚嗓子恢复了](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%B2%9A%E5%97%93%E5%AD%90%E6%81%A2%E5%A4%8D%E4%BA%86%23) `329.5K 🔥` `NEW`
1. [郭宇欣 我和周也还不一定谁蹭谁呢](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AE%87%E6%AC%A3%20%E6%88%91%E5%92%8C%E5%91%A8%E4%B9%9F%E8%BF%98%E4%B8%8D%E4%B8%80%E5%AE%9A%E8%B0%81%E8%B9%AD%E8%B0%81%E5%91%A2%23) `327.5K 🔥` `NEW`
1. [白厄 沈星回](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%8E%84%20%E6%B2%88%E6%98%9F%E5%9B%9E%23) `326.2K 🔥` `NEW`
1. [白鹿把大结局看了好几遍](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%8A%8A%E5%A4%A7%E7%BB%93%E5%B1%80%E7%9C%8B%E4%BA%86%E5%A5%BD%E5%87%A0%E9%81%8D%23) `325.2K 🔥` `NEW`
1. [王俊凯帮丁程鑫做主](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B8%AE%E4%B8%81%E7%A8%8B%E9%91%AB%E5%81%9A%E4%B8%BB%23) `323.1K 🔥` `NEW`
1. [虞书欣工作室换名](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%B7%A5%E4%BD%9C%E5%AE%A4%E6%8D%A2%E5%90%8D%23) `321.9K 🔥` `NEW`
1. [阿根廷佛得角全球观看量最高](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%BD%9B%E5%BE%97%E8%A7%92%E5%85%A8%E7%90%83%E8%A7%82%E7%9C%8B%E9%87%8F%E6%9C%80%E9%AB%98%23) `320.4K 🔥` `NEW`
1. [阿根廷队致敬佛得角 (Argentina pays tribute to Cape Verde)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E8%87%B4%E6%95%AC%E4%BD%9B%E5%BE%97%E8%A7%92%23) `317.9K 🔥` `NEW`
1. [迪丽热巴收了好大一包信](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%94%B6%E4%BA%86%E5%A5%BD%E5%A4%A7%E4%B8%80%E5%8C%85%E4%BF%A1%23) `317.3K 🔥` `NEW`
1. [日本首次公布跟踪中国航母视频](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%A6%96%E6%AC%A1%E5%85%AC%E5%B8%83%E8%B7%9F%E8%B8%AA%E4%B8%AD%E5%9B%BD%E8%88%AA%E6%AF%8D%E8%A7%86%E9%A2%91%23) `314.4K 🔥` `NEW`
1. [杨紫都瘦成啥样了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E9%83%BD%E7%98%A6%E6%88%90%E5%95%A5%E6%A0%B7%E4%BA%86%23) `314.2K 🔥` `NEW`
1. [曝霉霉婚礼上唯一允许带手机的人](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%9C%89%E9%9C%89%E5%A9%9A%E7%A4%BC%E4%B8%8A%E5%94%AF%E4%B8%80%E5%85%81%E8%AE%B8%E5%B8%A6%E6%89%8B%E6%9C%BA%E7%9A%84%E4%BA%BA%23) `312.6K 🔥` `NEW`
1. [BLG战胜T1](https://s.weibo.com/weibo?q=%23BLG%E6%88%98%E8%83%9CT1%23) `309.7K 🔥` `NEW`
1. [鹿晗去了周震南演唱会](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%8E%BB%E4%BA%86%E5%91%A8%E9%9C%87%E5%8D%97%E6%BC%94%E5%94%B1%E4%BC%9A%23) `308.7K 🔥` `NEW`
1. [汪苏泷哭了4次](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%93%AD%E4%BA%864%E6%AC%A1%23) `307.2K 🔥` `NEW`
1. [王楚钦孙颖莎获混双亚军](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E8%8E%B7%E6%B7%B7%E5%8F%8C%E4%BA%9A%E5%86%9B%23) `304.8K 🔥` `NEW`
1. [香港偶遇王安宇吃烤肉](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E5%81%B6%E9%81%87%E7%8E%8B%E5%AE%89%E5%AE%87%E5%90%83%E7%83%A4%E8%82%89%23) `303.2K 🔥` `NEW`
1. [王源耳返飞了 (Wang Yuan'er has returned)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E8%80%B3%E8%BF%94%E9%A3%9E%E4%BA%86%23) `302.1K 🔥` `NEW`
1. [无畏鲁班大师MVP](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E9%B2%81%E7%8F%AD%E5%A4%A7%E5%B8%88MVP%23) `300.6K 🔥` `NEW`
1. [丁程鑫受伤后首秀](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%8F%97%E4%BC%A4%E5%90%8E%E9%A6%96%E7%A7%80%23) `298.8K 🔥` `NEW`
1. [吴宣仪演唱会](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%A3%E4%BB%AA%E6%BC%94%E5%94%B1%E4%BC%9A%23) `297.3K 🔥` `NEW`
1. [莱巴金娜温网爆冷出局](https://s.weibo.com/weibo?q=%23%E8%8E%B1%E5%B7%B4%E9%87%91%E5%A8%9C%E6%B8%A9%E7%BD%91%E7%88%86%E5%86%B7%E5%87%BA%E5%B1%80%23) `296.4K 🔥` `NEW`
1. [王源结婚也不是不能有](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E7%BB%93%E5%A9%9A%E4%B9%9F%E4%B8%8D%E6%98%AF%E4%B8%8D%E8%83%BD%E6%9C%89%23) `294.0K 🔥` `NEW`
1. [严浩翔也不敢说话了](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E4%B9%9F%E4%B8%8D%E6%95%A2%E8%AF%B4%E8%AF%9D%E4%BA%86%23) `291.8K 🔥` `NEW`
1. [美网友说日本被轰炸过还对我们好](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%BD%91%E5%8F%8B%E8%AF%B4%E6%97%A5%E6%9C%AC%E8%A2%AB%E8%BD%B0%E7%82%B8%E8%BF%87%E8%BF%98%E5%AF%B9%E6%88%91%E4%BB%AC%E5%A5%BD%23) `291.0K 🔥` `NEW`
1. [内娱明星眼里的王一博](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E6%98%8E%E6%98%9F%E7%9C%BC%E9%87%8C%E7%9A%84%E7%8E%8B%E4%B8%80%E5%8D%9A%23) `289.5K 🔥` `NEW`
1. [姆巴佩预测自己是最佳射手](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E9%A2%84%E6%B5%8B%E8%87%AA%E5%B7%B1%E6%98%AF%E6%9C%80%E4%BD%B3%E5%B0%84%E6%89%8B%23) `287.0K 🔥` `NEW`
1. [无言身体怎么了 (What's wrong with Wu Yan's body?)](https://s.weibo.com/weibo?q=%23%E6%97%A0%E8%A8%80%E8%BA%AB%E4%BD%93%E6%80%8E%E4%B9%88%E4%BA%86%23) `285.9K 🔥` `NEW`

Updated at 2026-07-05 00:36:21

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
