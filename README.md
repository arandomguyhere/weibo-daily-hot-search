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

1. [巴拉圭法国冲突 (Paraguay France Conflict)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%8B%89%E5%9C%AD%E6%B3%95%E5%9B%BD%E5%86%B2%E7%AA%81%23) `4.7M 🔥` `NEW`
1. [姆巴佩被肘击](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E8%A2%AB%E8%82%98%E5%87%BB%23) `935.4K 🔥` `NEW`
1. [巴拉圭 扒拉龟](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%8B%89%E5%9C%AD%20%E6%89%92%E6%8B%89%E9%BE%9F%23) `107.3K 🔥` `NEW`
1. [姆巴佩点球命中](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%82%B9%E7%90%83%E5%91%BD%E4%B8%AD%23) `97.2K 🔥` `NEW`
1. [周深给王力宏团队送水果](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B1%E7%BB%99%E7%8E%8B%E5%8A%9B%E5%AE%8F%E5%9B%A2%E9%98%9F%E9%80%81%E6%B0%B4%E6%9E%9C%23) `89.7K 🔥` `NEW`
1. [巴拉圭 小动作](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%8B%89%E5%9C%AD%20%E5%B0%8F%E5%8A%A8%E4%BD%9C%23) `88.3K 🔥` `NEW`
1. [杨紫称为角色控制体重](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%A7%B0%E4%B8%BA%E8%A7%92%E8%89%B2%E6%8E%A7%E5%88%B6%E4%BD%93%E9%87%8D%23) `87.0K 🔥` `NEW`
1. [裁判 尺度](https://s.weibo.com/weibo?q=%23%E8%A3%81%E5%88%A4%20%E5%B0%BA%E5%BA%A6%23) `77.6K 🔥` `NEW`
1. [李静自曝43岁后逐年变胖](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%9D%99%E8%87%AA%E6%9B%9D43%E5%B2%81%E5%90%8E%E9%80%90%E5%B9%B4%E5%8F%98%E8%83%96%23) `70.0K 🔥` `NEW`
1. [杨紫工作室发了五张图有两张是黑屏](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%8F%91%E4%BA%86%E4%BA%94%E5%BC%A0%E5%9B%BE%E6%9C%89%E4%B8%A4%E5%BC%A0%E6%98%AF%E9%BB%91%E5%B1%8F%23) `69.6K 🔥` `NEW`
1. [不会嘴人去于正评论区找灵感 (People who don’t know how to talk should go to Yu Zheng’s comment section to find inspiration.)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E4%BC%9A%E5%98%B4%E4%BA%BA%E5%8E%BB%E4%BA%8E%E6%AD%A3%E8%AF%84%E8%AE%BA%E5%8C%BA%E6%89%BE%E7%81%B5%E6%84%9F%23) `69.3K 🔥` `NEW`
1. [摩洛哥进世界杯8强](https://s.weibo.com/weibo?q=%23%E6%91%A9%E6%B4%9B%E5%93%A5%E8%BF%9B%E4%B8%96%E7%95%8C%E6%9D%AF8%E5%BC%BA%23) `68.6K 🔥` `NEW`
1. [一句话生成专业市场分析报告](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%8F%A5%E8%AF%9D%E7%94%9F%E6%88%90%E4%B8%93%E4%B8%9A%E5%B8%82%E5%9C%BA%E5%88%86%E6%9E%90%E6%8A%A5%E5%91%8A%23) `68.2K 🔥` `NEW`
1. [巴拉圭vs法国 (Paraguay vs France)](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%8B%89%E5%9C%ADvs%E6%B3%95%E5%9B%BD%23) `1.6M 🔥` `+47%`
1. [十五五期间美丽中国建设规划亮点](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E6%9C%9F%E9%97%B4%E7%BE%8E%E4%B8%BD%E4%B8%AD%E5%9B%BD%E5%BB%BA%E8%AE%BE%E8%A7%84%E5%88%92%E4%BA%AE%E7%82%B9%23) `1.2M 🔥` `+153%`
1. [王力宏缝了39针 (Wang Leehom received 39 stitches)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E7%BC%9D%E4%BA%8639%E9%92%88%23) `1.1M 🔥` `+154%`
1. [意识到了隐形支出的可怕 (Realize the horror of hidden expenses)](https://s.weibo.com/weibo?q=%23%E6%84%8F%E8%AF%86%E5%88%B0%E4%BA%86%E9%9A%90%E5%BD%A2%E6%94%AF%E5%87%BA%E7%9A%84%E5%8F%AF%E6%80%95%23) `746.8K 🔥` `+69%`
1. [教育机构员工泄愤删除考生志愿致落榜](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E6%9C%BA%E6%9E%84%E5%91%98%E5%B7%A5%E6%B3%84%E6%84%A4%E5%88%A0%E9%99%A4%E8%80%83%E7%94%9F%E5%BF%97%E6%84%BF%E8%87%B4%E8%90%BD%E6%A6%9C%23) `339.2K 🔥` `+76%`
1. [VaVa梁源吵起来了 (VaVa Liang Yuan started arguing)](https://s.weibo.com/weibo?q=%23VaVa%E6%A2%81%E6%BA%90%E5%90%B5%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `107.9K 🔥` `+32%`
1. [央视曝次抛衣健康风险](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E6%AC%A1%E6%8A%9B%E8%A1%A3%E5%81%A5%E5%BA%B7%E9%A3%8E%E9%99%A9%23) `96.6K 🔥` `+136%`
1. [野狗骨头 (wild dog bones)](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%23) `94.5K 🔥` `+70%`
1. [王濛预测世界杯四强](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E9%A2%84%E6%B5%8B%E4%B8%96%E7%95%8C%E6%9D%AF%E5%9B%9B%E5%BC%BA%23) `91.0K 🔥` `+86%`
1. [日本首次公布跟踪中国航母视频 (Japan releases video of tracking Chinese aircraft carrier for first time)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%A6%96%E6%AC%A1%E5%85%AC%E5%B8%83%E8%B7%9F%E8%B8%AA%E4%B8%AD%E5%9B%BD%E8%88%AA%E6%AF%8D%E8%A7%86%E9%A2%91%23) `89.9K 🔥` `+120%`
1. [iPadPro首发M7芯片](https://s.weibo.com/weibo?q=%23iPadPro%E9%A6%96%E5%8F%91M7%E8%8A%AF%E7%89%87%23) `89.8K 🔥` `+141%`
1. [人一定要去上班](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E5%AE%9A%E8%A6%81%E5%8E%BB%E4%B8%8A%E7%8F%AD%23) `89.8K 🔥` `+119%`
1. [新疆自驾遇山洪母子失联6天](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%96%86%E8%87%AA%E9%A9%BE%E9%81%87%E5%B1%B1%E6%B4%AA%E6%AF%8D%E5%AD%90%E5%A4%B1%E8%81%946%E5%A4%A9%23) `82.1K 🔥` `+101%`
1. [低成本恢复生命力的小事 (Little things to restore vitality at low cost)](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E6%88%90%E6%9C%AC%E6%81%A2%E5%A4%8D%E7%94%9F%E5%91%BD%E5%8A%9B%E7%9A%84%E5%B0%8F%E4%BA%8B%23) `80.1K 🔥` `+68%`
1. [不同年龄段是有不同的欲求 (Different age groups have different desires)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%90%8C%E5%B9%B4%E9%BE%84%E6%AE%B5%E6%98%AF%E6%9C%89%E4%B8%8D%E5%90%8C%E7%9A%84%E6%AC%B2%E6%B1%82%23) `79.0K 🔥` `+69%`
1. [白鹿把大结局看了好几遍](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%8A%8A%E5%A4%A7%E7%BB%93%E5%B1%80%E7%9C%8B%E4%BA%86%E5%A5%BD%E5%87%A0%E9%81%8D%23) `70.9K 🔥` `+73%`
1. [美网友说日本被轰炸过还对我们好](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%BD%91%E5%8F%8B%E8%AF%B4%E6%97%A5%E6%9C%AC%E8%A2%AB%E8%BD%B0%E7%82%B8%E8%BF%87%E8%BF%98%E5%AF%B9%E6%88%91%E4%BB%AC%E5%A5%BD%23) `70.3K 🔥` `+71%`
1. [白厄 沈星回 (Bai E Shen Xinghui)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%8E%84%20%E6%B2%88%E6%98%9F%E5%9B%9E%23) `69.6K 🔥` `+69%`
1. [真正的门神是佛得角门将 (The real goalkeeper is the Cape Verde goalkeeper)](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E7%9A%84%E9%97%A8%E7%A5%9E%E6%98%AF%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E5%B0%86%23) `69.5K 🔥` `+47%`
1. [当女生开始有大女主感](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%A5%B3%E7%94%9F%E5%BC%80%E5%A7%8B%E6%9C%89%E5%A4%A7%E5%A5%B3%E4%B8%BB%E6%84%9F%23) `69.4K 🔥` `+69%`
1. [BLG已反馈直播镜头露出BP板](https://s.weibo.com/weibo?q=%23BLG%E5%B7%B2%E5%8F%8D%E9%A6%88%E7%9B%B4%E6%92%AD%E9%95%9C%E5%A4%B4%E9%9C%B2%E5%87%BABP%E6%9D%BF%23) `69.3K 🔥` `+57%`
1. [问心2盛年结局 (Questioning Heart 2 Finale)](https://s.weibo.com/weibo?q=%23%E9%97%AE%E5%BF%832%E7%9B%9B%E5%B9%B4%E7%BB%93%E5%B1%80%23) `69.1K 🔥` `+69%`
1. [世界上真的有母亲这么爱孩子](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%B8%8A%E7%9C%9F%E7%9A%84%E6%9C%89%E6%AF%8D%E4%BA%B2%E8%BF%99%E4%B9%88%E7%88%B1%E5%AD%A9%E5%AD%90%23) `69.1K 🔥` `+69%`
1. [摩洛哥进球](https://s.weibo.com/weibo?q=%23%E6%91%A9%E6%B4%9B%E5%93%A5%E8%BF%9B%E7%90%83%23) `69.0K 🔥` `+68%`
1. [茉莉奶白门店四叶花卉包装未更换 (The four-leaf flower packaging in the Jasmine Milk White store has not been changed.)](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E9%97%A8%E5%BA%97%E5%9B%9B%E5%8F%B6%E8%8A%B1%E5%8D%89%E5%8C%85%E8%A3%85%E6%9C%AA%E6%9B%B4%E6%8D%A2%23) `68.9K 🔥` `+68%`
1. [宋亚轩看刘耀文耍帅的反应](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E7%9C%8B%E5%88%98%E8%80%80%E6%96%87%E8%80%8D%E5%B8%85%E7%9A%84%E5%8F%8D%E5%BA%94%23) `68.8K 🔥` `+68%`
1. [加拿大vs摩洛哥 (Canada vs Morocco)](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%8B%BF%E5%A4%A7vs%E6%91%A9%E6%B4%9B%E5%93%A5%23) `68.7K 🔥` `+67%`
1. [已经到不再被任何朋友内耗的状态](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E7%BB%8F%E5%88%B0%E4%B8%8D%E5%86%8D%E8%A2%AB%E4%BB%BB%E4%BD%95%E6%9C%8B%E5%8F%8B%E5%86%85%E8%80%97%E7%9A%84%E7%8A%B6%E6%80%81%23) `68.5K 🔥` `+67%`
1. [王源结婚也不是不能有](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E7%BB%93%E5%A9%9A%E4%B9%9F%E4%B8%8D%E6%98%AF%E4%B8%8D%E8%83%BD%E6%9C%89%23) `68.5K 🔥` `+68%`
1. [王俊凯帮丁程鑫做主 (Wang Junkai helps Ding Chengxin make the decision)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B8%AE%E4%B8%81%E7%A8%8B%E9%91%AB%E5%81%9A%E4%B8%BB%23) `68.5K 🔥` `+68%`
1. [哈梅内伊葬礼出现一把标志性椅子](https://s.weibo.com/weibo?q=%23%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E8%91%AC%E7%A4%BC%E5%87%BA%E7%8E%B0%E4%B8%80%E6%8A%8A%E6%A0%87%E5%BF%97%E6%80%A7%E6%A4%85%E5%AD%90%23) `68.3K 🔥` `+67%`
1. [女子确诊肺癌晚期在地铁上介绍自己 (Woman diagnosed with terminal lung cancer introduced herself on the subway)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A1%AE%E8%AF%8A%E8%82%BA%E7%99%8C%E6%99%9A%E6%9C%9F%E5%9C%A8%E5%9C%B0%E9%93%81%E4%B8%8A%E4%BB%8B%E7%BB%8D%E8%87%AA%E5%B7%B1%23) `68.3K 🔥` `+72%`
1. [加拿大0比3摩洛哥](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%8B%BF%E5%A4%A70%E6%AF%943%E6%91%A9%E6%B4%9B%E5%93%A5%23) `334.8K 🔥`
1. [袪魅一下西方的不赡养父母的设定](https://s.weibo.com/weibo?q=%23%E8%A2%AA%E9%AD%85%E4%B8%80%E4%B8%8B%E8%A5%BF%E6%96%B9%E7%9A%84%E4%B8%8D%E8%B5%A1%E5%85%BB%E7%88%B6%E6%AF%8D%E7%9A%84%E8%AE%BE%E5%AE%9A%23) `103.9K 🔥`
1. [杭州暴雨](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E6%9A%B4%E9%9B%A8%23) `101.2K 🔥`
1. [永远不要害怕任何关系破裂](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E8%BF%9C%E4%B8%8D%E8%A6%81%E5%AE%B3%E6%80%95%E4%BB%BB%E4%BD%95%E5%85%B3%E7%B3%BB%E7%A0%B4%E8%A3%82%23) `99.9K 🔥`
1. [加拿大摩洛哥冲突 (Canada Morocco Conflict)](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%8B%BF%E5%A4%A7%E6%91%A9%E6%B4%9B%E5%93%A5%E5%86%B2%E7%AA%81%23) `271.2K 🔥` `-48%`

Updated at 2026-07-05 07:11:54

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
