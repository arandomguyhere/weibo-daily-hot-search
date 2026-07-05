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

1. [王曼昱蒯曼美国大满贯夺冠 (Wang Manyu and Kuaiman win the US Grand Slam)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E8%92%AF%E6%9B%BC%E7%BE%8E%E5%9B%BD%E5%A4%A7%E6%BB%A1%E8%B4%AF%E5%A4%BA%E5%86%A0%23) `700.6K 🔥` `NEW`
1. [女子化妆摆拍被打伤视频受罚](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%8C%96%E5%A6%86%E6%91%86%E6%8B%8D%E8%A2%AB%E6%89%93%E4%BC%A4%E8%A7%86%E9%A2%91%E5%8F%97%E7%BD%9A%23) `475.6K 🔥` `NEW`
1. [曝郭宇欣掉饼](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%83%AD%E5%AE%87%E6%AC%A3%E6%8E%89%E9%A5%BC%23) `184.3K 🔥` `NEW`
1. [心梗老人看1颗牙被全口拔光](https://s.weibo.com/weibo?q=%23%E5%BF%83%E6%A2%97%E8%80%81%E4%BA%BA%E7%9C%8B1%E9%A2%97%E7%89%99%E8%A2%AB%E5%85%A8%E5%8F%A3%E6%8B%94%E5%85%89%23) `182.3K 🔥` `NEW`
1. [霉霉送场外粉丝婚礼甜品](https://s.weibo.com/weibo?q=%23%E9%9C%89%E9%9C%89%E9%80%81%E5%9C%BA%E5%A4%96%E7%B2%89%E4%B8%9D%E5%A9%9A%E7%A4%BC%E7%94%9C%E5%93%81%23) `178.9K 🔥` `NEW`
1. [苹果史上最大电池](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%A4%A7%E7%94%B5%E6%B1%A0%23) `177.5K 🔥` `NEW`
1. [为找稀土日本开始拆空调了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E6%89%BE%E7%A8%80%E5%9C%9F%E6%97%A5%E6%9C%AC%E5%BC%80%E5%A7%8B%E6%8B%86%E7%A9%BA%E8%B0%83%E4%BA%86%23) `151.5K 🔥` `NEW`
1. [张凌赫这一秒过火双平台第一](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E5%8F%8C%E5%B9%B3%E5%8F%B0%E7%AC%AC%E4%B8%80%23) `130.3K 🔥` `NEW`
1. [字节跳动注册咕咕嘎嘎著作权](https://s.weibo.com/weibo?q=%23%E5%AD%97%E8%8A%82%E8%B7%B3%E5%8A%A8%E6%B3%A8%E5%86%8C%E5%92%95%E5%92%95%E5%98%8E%E5%98%8E%E8%91%97%E4%BD%9C%E6%9D%83%23) `130.3K 🔥` `NEW`
1. [巴拉圭0比1法国](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%8B%89%E5%9C%AD0%E6%AF%941%E6%B3%95%E5%9B%BD%23) `129.8K 🔥` `NEW`
1. [短剧演员卖凉皮日营业额最高200元 (A skit actor's daily turnover is up to NT$200 selling Liangpi.)](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E6%BC%94%E5%91%98%E5%8D%96%E5%87%89%E7%9A%AE%E6%97%A5%E8%90%A5%E4%B8%9A%E9%A2%9D%E6%9C%80%E9%AB%98200%E5%85%83%23) `129.2K 🔥` `NEW`
1. [网络情感导师称搭讪10分钟能发生关系](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BB%9C%E6%83%85%E6%84%9F%E5%AF%BC%E5%B8%88%E7%A7%B0%E6%90%AD%E8%AE%AA10%E5%88%86%E9%92%9F%E8%83%BD%E5%8F%91%E7%94%9F%E5%85%B3%E7%B3%BB%23) `129.0K 🔥` `NEW`
1. [众星为佛得角发声](https://s.weibo.com/weibo?q=%23%E4%BC%97%E6%98%9F%E4%B8%BA%E4%BD%9B%E5%BE%97%E8%A7%92%E5%8F%91%E5%A3%B0%23) `128.6K 🔥` `NEW`
1. [巴拉圭全场0黄牌](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%8B%89%E5%9C%AD%E5%85%A8%E5%9C%BA0%E9%BB%84%E7%89%8C%23) `128.6K 🔥` `NEW`
1. [FIFA真的有偏袒某位球星吗](https://s.weibo.com/weibo?q=%23FIFA%E7%9C%9F%E7%9A%84%E6%9C%89%E5%81%8F%E8%A2%92%E6%9F%90%E4%BD%8D%E7%90%83%E6%98%9F%E5%90%97%23) `128.4K 🔥` `NEW`
1. [法国进8强](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E8%BF%9B8%E5%BC%BA%23) `128.2K 🔥` `NEW`
1. [吃对碳水1个月生理年龄年轻近4岁](https://s.weibo.com/weibo?q=%23%E5%90%83%E5%AF%B9%E7%A2%B3%E6%B0%B41%E4%B8%AA%E6%9C%88%E7%94%9F%E7%90%86%E5%B9%B4%E9%BE%84%E5%B9%B4%E8%BD%BB%E8%BF%914%E5%B2%81%23) `128.1K 🔥` `NEW`
1. [小黄豆替任权保管身份证](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%BB%84%E8%B1%86%E6%9B%BF%E4%BB%BB%E6%9D%83%E4%BF%9D%E7%AE%A1%E8%BA%AB%E4%BB%BD%E8%AF%81%23) `113.7K 🔥` `NEW`
1. [世界杯最佳射手是乌龙](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%E6%9C%80%E4%BD%B3%E5%B0%84%E6%89%8B%E6%98%AF%E4%B9%8C%E9%BE%99%23) `113.4K 🔥` `NEW`
1. [奥利塞黄牌](https://s.weibo.com/weibo?q=%23%E5%A5%A5%E5%88%A9%E5%A1%9E%E9%BB%84%E7%89%8C%23) `113.1K 🔥` `NEW`
1. [梁汉文晒成毅片场随拍 (Liang Hanwen and Sun Chengyi were filmed on the set)](https://s.weibo.com/weibo?q=%23%E6%A2%81%E6%B1%89%E6%96%87%E6%99%92%E6%88%90%E6%AF%85%E7%89%87%E5%9C%BA%E9%9A%8F%E6%8B%8D%23) `101.5K 🔥` `NEW`
1. [姆巴佩被肘击](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E8%A2%AB%E8%82%98%E5%87%BB%23) `1.6M 🔥` `+72%`
1. [意识到了隐形支出的可怕 (Realize the horror of hidden expenses)](https://s.weibo.com/weibo?q=%23%E6%84%8F%E8%AF%86%E5%88%B0%E4%BA%86%E9%9A%90%E5%BD%A2%E6%94%AF%E5%87%BA%E7%9A%84%E5%8F%AF%E6%80%95%23) `1.2M 🔥` `+58%`
1. [教育机构员工泄愤删除考生志愿致落榜](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E6%9C%BA%E6%9E%84%E5%91%98%E5%B7%A5%E6%B3%84%E6%84%A4%E5%88%A0%E9%99%A4%E8%80%83%E7%94%9F%E5%BF%97%E6%84%BF%E8%87%B4%E8%90%BD%E6%A6%9C%23) `475.6K 🔥` `+40%`
1. [巴拉圭 扒拉龟](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%8B%89%E5%9C%AD%20%E6%89%92%E6%8B%89%E9%BE%9F%23) `451.3K 🔥` `+321%`
1. [姆巴佩点球命中](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%82%B9%E7%90%83%E5%91%BD%E4%B8%AD%23) `371.4K 🔥` `+282%`
1. [周深给王力宏团队送水果](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E7%BB%99%E7%8E%8B%E5%8A%9B%E5%AE%8F%E5%9B%A2%E9%98%9F%E9%80%81%E6%B0%B4%E6%9E%9C%23) `185.1K 🔥` `+106%`
1. [袪魅一下西方的不赡养父母的设定](https://s.weibo.com/weibo?q=%23%E8%A2%AA%E9%AD%85%E4%B8%80%E4%B8%8B%E8%A5%BF%E6%96%B9%E7%9A%84%E4%B8%8D%E8%B5%A1%E5%85%BB%E7%88%B6%E6%AF%8D%E7%9A%84%E8%AE%BE%E5%AE%9A%23) `180.4K 🔥` `+74%`
1. [野狗骨头 (wild dog bones)](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%23) `141.8K 🔥` `+50%`
1. [人一定要去上班](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E5%AE%9A%E8%A6%81%E5%8E%BB%E4%B8%8A%E7%8F%AD%23) `130.1K 🔥` `+45%`
1. [杭州暴雨](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E6%9A%B4%E9%9B%A8%23) `130.0K 🔥` `+28%`
1. [裁判 尺度](https://s.weibo.com/weibo?q=%23%E8%A3%81%E5%88%A4%20%E5%B0%BA%E5%BA%A6%23) `129.4K 🔥` `+67%`
1. [白鹿把大结局看了好几遍 (Bai Lu watched the finale several times)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%8A%8A%E5%A4%A7%E7%BB%93%E5%B1%80%E7%9C%8B%E4%BA%86%E5%A5%BD%E5%87%A0%E9%81%8D%23) `129.3K 🔥` `+82%`
1. [新疆自驾遇山洪母子失联6天](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%96%86%E8%87%AA%E9%A9%BE%E9%81%87%E5%B1%B1%E6%B4%AA%E6%AF%8D%E5%AD%90%E5%A4%B1%E8%81%946%E5%A4%A9%23) `128.3K 🔥` `+56%`
1. [永远不要害怕任何关系破裂](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E8%BF%9C%E4%B8%8D%E8%A6%81%E5%AE%B3%E6%80%95%E4%BB%BB%E4%BD%95%E5%85%B3%E7%B3%BB%E7%A0%B4%E8%A3%82%23) `124.5K 🔥` `+25%`
1. [杨紫称为角色控制体重](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%A7%B0%E4%B8%BA%E8%A7%92%E8%89%B2%E6%8E%A7%E5%88%B6%E4%BD%93%E9%87%8D%23) `119.0K 🔥` `+37%`
1. [iPadPro首发M7芯片](https://s.weibo.com/weibo?q=%23iPadPro%E9%A6%96%E5%8F%91M7%E8%8A%AF%E7%89%87%23) `111.3K 🔥` `+24%`
1. [美网友说日本被轰炸过还对我们好](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%BD%91%E5%8F%8B%E8%AF%B4%E6%97%A5%E6%9C%AC%E8%A2%AB%E8%BD%B0%E7%82%B8%E8%BF%87%E8%BF%98%E5%AF%B9%E6%88%91%E4%BB%AC%E5%A5%BD%23) `100.3K 🔥` `+43%`
1. [巴拉圭法国冲突 (Paraguay France Conflict)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%8B%89%E5%9C%AD%E6%B3%95%E5%9B%BD%E5%86%B2%E7%AA%81%23) `4.8M 🔥`
1. [十五五期间美丽中国建设规划亮点](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E6%9C%9F%E9%97%B4%E7%BE%8E%E4%B8%BD%E4%B8%AD%E5%9B%BD%E5%BB%BA%E8%AE%BE%E8%A7%84%E5%88%92%E4%BA%AE%E7%82%B9%23) `1.3M 🔥`
1. [王力宏缝了39针 (Wang Leehom received 39 stitches)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E7%BC%9D%E4%BA%8639%E9%92%88%23) `1.3M 🔥`
1. [VaVa梁源吵起来了 (VaVa Liang Yuan started arguing)](https://s.weibo.com/weibo?q=%23VaVa%E6%A2%81%E6%BA%90%E5%90%B5%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `106.2K 🔥`
1. [日本首次公布跟踪中国航母视频 (Japan releases video of tracking Chinese aircraft carrier for first time)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%A6%96%E6%AC%A1%E5%85%AC%E5%B8%83%E8%B7%9F%E8%B8%AA%E4%B8%AD%E5%9B%BD%E8%88%AA%E6%AF%8D%E8%A7%86%E9%A2%91%23) `104.4K 🔥`
1. [央视曝次抛衣健康风险](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E6%AC%A1%E6%8A%9B%E8%A1%A3%E5%81%A5%E5%BA%B7%E9%A3%8E%E9%99%A9%23) `103.2K 🔥`
1. [加拿大0比3摩洛哥](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%8B%BF%E5%A4%A70%E6%AF%943%E6%91%A9%E6%B4%9B%E5%93%A5%23) `181.6K 🔥` `-46%`
1. [曝郭宇欣一直喜欢背后说人闲话](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%83%AD%E5%AE%87%E6%AC%A3%E4%B8%80%E7%9B%B4%E5%96%9C%E6%AC%A2%E8%83%8C%E5%90%8E%E8%AF%B4%E4%BA%BA%E9%97%B2%E8%AF%9D%23) `130.0K 🔥` `-61%`
1. [巴拉圭vs法国 (Paraguay vs France)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%8B%89%E5%9C%ADvs%E6%B3%95%E5%9B%BD%23) `129.6K 🔥` `-92%`
1. [加拿大摩洛哥冲突 (Canada Morocco Conflict)](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%8B%BF%E5%A4%A7%E6%91%A9%E6%B4%9B%E5%93%A5%E5%86%B2%E7%AA%81%23) `129.6K 🔥` `-52%`
1. [韩网扒出SM练习生版致美丽的你 (Korean network reveals SM trainee version of "To the Beautiful You")](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E7%BD%91%E6%89%92%E5%87%BASM%E7%BB%83%E4%B9%A0%E7%94%9F%E7%89%88%E8%87%B4%E7%BE%8E%E4%B8%BD%E7%9A%84%E4%BD%A0%23) `128.9K 🔥` `-63%`
1. [台风 (typhoon)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `128.8K 🔥` `-90%`
1. [迪丽热巴收了好大一包信 (Dilireba received a big package of letters)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%94%B6%E4%BA%86%E5%A5%BD%E5%A4%A7%E4%B8%80%E5%8C%85%E4%BF%A1%23) `110.6K 🔥` `-65%`

Updated at 2026-07-05 08:13:53

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
