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

1. [王力宏缝了39针 (Wang Leehom received 39 stitches)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E7%BC%9D%E4%BA%8639%E9%92%88%23) `342.7K 🔥` `NEW`
1. [加拿大0比3摩洛哥](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%8B%BF%E5%A4%A70%E6%AF%943%E6%91%A9%E6%B4%9B%E5%93%A5%23) `296.0K 🔥` `NEW`
1. [网传邕江主航道开放水上运动系曲解误读](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E9%82%95%E6%B1%9F%E4%B8%BB%E8%88%AA%E9%81%93%E5%BC%80%E6%94%BE%E6%B0%B4%E4%B8%8A%E8%BF%90%E5%8A%A8%E7%B3%BB%E6%9B%B2%E8%A7%A3%E8%AF%AF%E8%AF%BB%23) `163.4K 🔥` `NEW`
1. [摩洛哥进球](https://s.weibo.com/weibo?q=%23%E6%91%A9%E6%B4%9B%E5%93%A5%E8%BF%9B%E7%90%83%23) `80.9K 🔥` `NEW`
1. [野狗骨头](https://s.weibo.com/weibo?q=%23%E9%87%8E%E7%8B%97%E9%AA%A8%E5%A4%B4%23) `66.3K 🔥` `NEW`
1. [加拿大摩洛哥10分钟5黄牌](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%8B%BF%E5%A4%A7%E6%91%A9%E6%B4%9B%E5%93%A510%E5%88%86%E9%92%9F5%E9%BB%84%E7%89%8C%23) `50.8K 🔥` `NEW`
1. [已经到不再被任何朋友内耗的状态](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E7%BB%8F%E5%88%B0%E4%B8%8D%E5%86%8D%E8%A2%AB%E4%BB%BB%E4%BD%95%E6%9C%8B%E5%8F%8B%E5%86%85%E8%80%97%E7%9A%84%E7%8A%B6%E6%80%81%23) `50.5K 🔥` `NEW`
1. [塞巴里受伤](https://s.weibo.com/weibo?q=%23%E5%A1%9E%E5%B7%B4%E9%87%8C%E5%8F%97%E4%BC%A4%23) `49.5K 🔥` `NEW`
1. [十五五期间美丽中国建设规划亮点](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E6%9C%9F%E9%97%B4%E7%BE%8E%E4%B8%BD%E4%B8%AD%E5%9B%BD%E5%BB%BA%E8%AE%BE%E8%A7%84%E5%88%92%E4%BA%AE%E7%82%B9%23) `344.6K 🔥`
1. [杭州暴雨](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E6%9A%B4%E9%9B%A8%23) `187.7K 🔥`
1. [意识到了隐形支出的可怕 (Realize the horror of hidden expenses)](https://s.weibo.com/weibo?q=%23%E6%84%8F%E8%AF%86%E5%88%B0%E4%BA%86%E9%9A%90%E5%BD%A2%E6%94%AF%E5%87%BA%E7%9A%84%E5%8F%AF%E6%80%95%23) `583.0K 🔥` `-48%`
1. [加拿大摩洛哥冲突 (Canada Morocco Conflict)](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%8B%BF%E5%A4%A7%E6%91%A9%E6%B4%9B%E5%93%A5%E5%86%B2%E7%AA%81%23) `419.2K 🔥` `-36%`
1. [VaVa梁源吵起来了](https://s.weibo.com/weibo?q=%23VaVa%E6%A2%81%E6%BA%90%E5%90%B5%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `103.9K 🔥` `-44%`
1. [永远不要害怕任何关系破裂](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E8%BF%9C%E4%B8%8D%E8%A6%81%E5%AE%B3%E6%80%95%E4%BB%BB%E4%BD%95%E5%85%B3%E7%B3%BB%E7%A0%B4%E8%A3%82%23) `90.3K 🔥` `-34%`
1. [加拿大vs摩洛哥 (Canada vs Morocco)](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%8B%BF%E5%A4%A7vs%E6%91%A9%E6%B4%9B%E5%93%A5%23) `86.0K 🔥` `-69%`
1. [教育机构员工泄愤删除考生志愿致落榜](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E6%9C%BA%E6%9E%84%E5%91%98%E5%B7%A5%E6%B3%84%E6%84%A4%E5%88%A0%E9%99%A4%E8%80%83%E7%94%9F%E5%BF%97%E6%84%BF%E8%87%B4%E8%90%BD%E6%A6%9C%23) `78.6K 🔥` `-42%`
1. [王濛预测世界杯四强](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E9%A2%84%E6%B5%8B%E4%B8%96%E7%95%8C%E6%9D%AF%E5%9B%9B%E5%BC%BA%23) `73.8K 🔥` `-45%`
1. [BLG已反馈直播镜头露出BP板](https://s.weibo.com/weibo?q=%23BLG%E5%B7%B2%E5%8F%8D%E9%A6%88%E7%9B%B4%E6%92%AD%E9%95%9C%E5%A4%B4%E9%9C%B2%E5%87%BABP%E6%9D%BF%23) `69.0K 🔥` `-49%`
1. [袪魅一下西方的不赡养父母的设定](https://s.weibo.com/weibo?q=%23%E8%A2%AA%E9%AD%85%E4%B8%80%E4%B8%8B%E8%A5%BF%E6%96%B9%E7%9A%84%E4%B8%8D%E8%B5%A1%E5%85%BB%E7%88%B6%E6%AF%8D%E7%9A%84%E8%AE%BE%E5%AE%9A%23) `66.0K 🔥` `-51%`
1. [王力宏好深的伤口 (Wang Leehom’s deep wound)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%9B%E5%AE%8F%E5%A5%BD%E6%B7%B1%E7%9A%84%E4%BC%A4%E5%8F%A3%23) `61.4K 🔥` `-80%`
1. [北京闪电](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E9%97%AA%E7%94%B5%23) `59.5K 🔥` `-56%`
1. [打车到拉萨网红回应50万大奖](https://s.weibo.com/weibo?q=%23%E6%89%93%E8%BD%A6%E5%88%B0%E6%8B%89%E8%90%A8%E7%BD%91%E7%BA%A2%E5%9B%9E%E5%BA%9450%E4%B8%87%E5%A4%A7%E5%A5%96%23) `55.8K 🔥` `-59%`
1. [哈梅内伊葬礼出现一把标志性椅子](https://s.weibo.com/weibo?q=%23%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E8%91%AC%E7%A4%BC%E5%87%BA%E7%8E%B0%E4%B8%80%E6%8A%8A%E6%A0%87%E5%BF%97%E6%80%A7%E6%A4%85%E5%AD%90%23) `54.4K 🔥` `-60%`
1. [茉莉奶白门店四叶花卉包装未更换 (The four-leaf flower packaging in the Jasmine Milk White store has not been changed.)](https://s.weibo.com/weibo?q=%23%E8%8C%89%E8%8E%89%E5%A5%B6%E7%99%BD%E9%97%A8%E5%BA%97%E5%9B%9B%E5%8F%B6%E8%8A%B1%E5%8D%89%E5%8C%85%E8%A3%85%E6%9C%AA%E6%9B%B4%E6%8D%A2%23) `53.8K 🔥` `-60%`
1. [白厄 沈星回 (Bai E Shen Xinghui)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%8E%84%20%E6%B2%88%E6%98%9F%E5%9B%9E%23) `53.8K 🔥` `-60%`
1. [人一定要去上班](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E4%B8%80%E5%AE%9A%E8%A6%81%E5%8E%BB%E4%B8%8A%E7%8F%AD%23) `53.5K 🔥` `-60%`
1. [加纳巫师预测干不过中国大爷 (The Ghanaian wizard predicts that he will not be able to defeat the Chinese uncle)](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E7%BA%B3%E5%B7%AB%E5%B8%88%E9%A2%84%E6%B5%8B%E5%B9%B2%E4%B8%8D%E8%BF%87%E4%B8%AD%E5%9B%BD%E5%A4%A7%E7%88%B7%23) `51.7K 🔥` `-62%`
1. [白鹿把大结局看了好几遍](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%8A%8A%E5%A4%A7%E7%BB%93%E5%B1%80%E7%9C%8B%E4%BA%86%E5%A5%BD%E5%87%A0%E9%81%8D%23) `51.4K 🔥` `-62%`
1. [当女生开始有大女主感](https://s.weibo.com/weibo?q=%23%E5%BD%93%E5%A5%B3%E7%94%9F%E5%BC%80%E5%A7%8B%E6%9C%89%E5%A4%A7%E5%A5%B3%E4%B8%BB%E6%84%9F%23) `51.3K 🔥` `-62%`
1. [问心2盛年结局](https://s.weibo.com/weibo?q=%23%E9%97%AE%E5%BF%832%E7%9B%9B%E5%B9%B4%E7%BB%93%E5%B1%80%23) `51.2K 🔥` `-62%`
1. [应对台风美莎克 (Coping with Typhoon Maysak)](https://s.weibo.com/weibo?q=%23%E5%BA%94%E5%AF%B9%E5%8F%B0%E9%A3%8E%E7%BE%8E%E8%8E%8E%E5%85%8B%23) `51.2K 🔥` `-62%`
1. [阿根廷队致敬佛得角 (Argentina pays tribute to Cape Verde)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E8%87%B4%E6%95%AC%E4%BD%9B%E5%BE%97%E8%A7%92%23) `51.1K 🔥` `-62%`
1. [低成本恢复生命力的小事 (Little things to restore vitality at low cost)](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E6%88%90%E6%9C%AC%E6%81%A2%E5%A4%8D%E7%94%9F%E5%91%BD%E5%8A%9B%E7%9A%84%E5%B0%8F%E4%BA%8B%23) `51.0K 🔥` `-62%`
1. [央视曝次抛衣健康风险](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E6%AC%A1%E6%8A%9B%E8%A1%A3%E5%81%A5%E5%BA%B7%E9%A3%8E%E9%99%A9%23) `50.9K 🔥` `-62%`
1. [世界上真的有母亲这么爱孩子](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E4%B8%8A%E7%9C%9F%E7%9A%84%E6%9C%89%E6%AF%8D%E4%BA%B2%E8%BF%99%E4%B9%88%E7%88%B1%E5%AD%A9%E5%AD%90%23) `50.7K 🔥` `-62%`
1. [宋亚轩看刘耀文耍帅的反应](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E7%9C%8B%E5%88%98%E8%80%80%E6%96%87%E8%80%8D%E5%B8%85%E7%9A%84%E5%8F%8D%E5%BA%94%23) `50.7K 🔥` `-63%`
1. [佛得角再次感谢中国](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E5%86%8D%E6%AC%A1%E6%84%9F%E8%B0%A2%E4%B8%AD%E5%9B%BD%23) `50.4K 🔥` `-63%`
1. [新疆自驾遇山洪母子失联6天](https://s.weibo.com/weibo?q=%23%E6%96%B0%E7%96%86%E8%87%AA%E9%A9%BE%E9%81%87%E5%B1%B1%E6%B4%AA%E6%AF%8D%E5%AD%90%E5%A4%B1%E8%81%946%E5%A4%A9%23) `50.4K 🔥` `-63%`
1. [女子确诊肺癌晚期在地铁上介绍自己 (Woman diagnosed with terminal lung cancer introduced herself on the subway)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A1%AE%E8%AF%8A%E8%82%BA%E7%99%8C%E6%99%9A%E6%9C%9F%E5%9C%A8%E5%9C%B0%E9%93%81%E4%B8%8A%E4%BB%8B%E7%BB%8D%E8%87%AA%E5%B7%B1%23) `50.2K 🔥` `-63%`
1. [吴宣仪演唱会](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%A3%E4%BB%AA%E6%BC%94%E5%94%B1%E4%BC%9A%23) `50.1K 🔥` `-63%`
1. [丁程鑫受伤后首秀 (Ding Chengxin makes his first appearance after injury)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%8F%97%E4%BC%A4%E5%90%8E%E9%A6%96%E7%A7%80%23) `50.1K 🔥` `-63%`
1. [不同年龄段是有不同的欲求](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E5%90%8C%E5%B9%B4%E9%BE%84%E6%AE%B5%E6%98%AF%E6%9C%89%E4%B8%8D%E5%90%8C%E7%9A%84%E6%AC%B2%E6%B1%82%23) `50.0K 🔥` `-63%`
1. [汪苏泷哭了4次](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%93%AD%E4%BA%864%E6%AC%A1%23) `49.9K 🔥` `-63%`
1. [王源结婚也不是不能有](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E7%BB%93%E5%A9%9A%E4%B9%9F%E4%B8%8D%E6%98%AF%E4%B8%8D%E8%83%BD%E6%9C%89%23) `49.8K 🔥` `-63%`
1. [C罗推测葡萄牙16进8会很艰苦 (Cristiano Ronaldo speculates that it will be difficult for Portugal to reach 8 out of 16)](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E6%8E%A8%E6%B5%8B%E8%91%A1%E8%90%84%E7%89%9916%E8%BF%9B8%E4%BC%9A%E5%BE%88%E8%89%B0%E8%8B%A6%23) `49.7K 🔥` `-63%`
1. [王俊凯帮丁程鑫做主](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B8%AE%E4%B8%81%E7%A8%8B%E9%91%AB%E5%81%9A%E4%B8%BB%23) `49.6K 🔥` `-63%`
1. [BLG战胜T1 (BLG defeated T1)](https://s.weibo.com/weibo?q=%23BLG%E6%88%98%E8%83%9CT1%23) `49.4K 🔥` `-63%`
1. [王源耳返飞了 (Wang Yuan'er has returned)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E8%80%B3%E8%BF%94%E9%A3%9E%E4%BA%86%23) `49.4K 🔥` `-63%`
1. [周也圈内口碑](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E5%9C%88%E5%86%85%E5%8F%A3%E7%A2%91%23) `49.3K 🔥` `-64%`
1. [iPadPro首发M7芯片](https://s.weibo.com/weibo?q=%23iPadPro%E9%A6%96%E5%8F%91M7%E8%8A%AF%E7%89%87%23) `49.1K 🔥` `-64%`
1. [美网友说日本被轰炸过还对我们好](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%BD%91%E5%8F%8B%E8%AF%B4%E6%97%A5%E6%9C%AC%E8%A2%AB%E8%BD%B0%E7%82%B8%E8%BF%87%E8%BF%98%E5%AF%B9%E6%88%91%E4%BB%AC%E5%A5%BD%23) `49.1K 🔥` `-64%`

Updated at 2026-07-05 03:56:33

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
