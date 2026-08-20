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

1. [我国消费市场向新向优 (my country's consumer market is moving towards new and better conditions)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%B6%88%E8%B4%B9%E5%B8%82%E5%9C%BA%E5%90%91%E6%96%B0%E5%90%91%E4%BC%98%23) `1.8M 🔥` `NEW`
1. [与众09从容见优雅](https://s.weibo.com/weibo?q=%23%E4%B8%8E%E4%BC%9709%E4%BB%8E%E5%AE%B9%E8%A7%81%E4%BC%98%E9%9B%85%23) `553.6K 🔥` `NEW`
1. [李响8年3次求婚孙骁骁未果](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%93%8D8%E5%B9%B43%E6%AC%A1%E6%B1%82%E5%A9%9A%E5%AD%99%E9%AA%81%E9%AA%81%E6%9C%AA%E6%9E%9C%23) `457.2K 🔥` `NEW`
1. [青岛文旅关闭评论区天才是真塌了](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E6%96%87%E6%97%85%E5%85%B3%E9%97%AD%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%A4%A9%E6%89%8D%E6%98%AF%E7%9C%9F%E5%A1%8C%E4%BA%86%23) `447.8K 🔥` `NEW`
1. [谁在七夕送了李小冉一辆车](https://s.weibo.com/weibo?q=%23%E8%B0%81%E5%9C%A8%E4%B8%83%E5%A4%95%E9%80%81%E4%BA%86%E6%9D%8E%E5%B0%8F%E5%86%89%E4%B8%80%E8%BE%86%E8%BD%A6%23) `374.9K 🔥` `NEW`
1. [宇树总市值已跌超1500亿](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E6%80%BB%E5%B8%82%E5%80%BC%E5%B7%B2%E8%B7%8C%E8%B6%851500%E4%BA%BF%23) `374.1K 🔥` `NEW`
1. [原来我们看过的爆剧都是be](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%88%91%E4%BB%AC%E7%9C%8B%E8%BF%87%E7%9A%84%E7%88%86%E5%89%A7%E9%83%BD%E6%98%AFbe%23) `331.9K 🔥` `NEW`
1. [惠英红感谢鲁豫11年前雪中送炭](https://s.weibo.com/weibo?q=%23%E6%83%A0%E8%8B%B1%E7%BA%A2%E6%84%9F%E8%B0%A2%E9%B2%81%E8%B1%AB11%E5%B9%B4%E5%89%8D%E9%9B%AA%E4%B8%AD%E9%80%81%E7%82%AD%23) `270.1K 🔥` `NEW`
1. [MRC对战成都GG](https://s.weibo.com/weibo?q=%23MRC%E5%AF%B9%E6%88%98%E6%88%90%E9%83%BDGG%23) `212.9K 🔥` `NEW`
1. [空枪票房倒挂](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%E7%A5%A8%E6%88%BF%E5%80%92%E6%8C%82%23) `206.4K 🔥` `NEW`
1. [青岛遭男子辱骂女子称愿下跪道歉 (A woman in Qingdao who was insulted by a man said she was willing to kneel down and apologize.)](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E9%81%AD%E7%94%B7%E5%AD%90%E8%BE%B1%E9%AA%82%E5%A5%B3%E5%AD%90%E7%A7%B0%E6%84%BF%E4%B8%8B%E8%B7%AA%E9%81%93%E6%AD%89%23) `203.3K 🔥` `NEW`
1. [许家印前妻信托](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%AE%B6%E5%8D%B0%E5%89%8D%E5%A6%BB%E4%BF%A1%E6%89%98%23) `202.3K 🔥` `NEW`
1. [女童景区遭海蜇蜇伤下病危通知书](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%AB%A5%E6%99%AF%E5%8C%BA%E9%81%AD%E6%B5%B7%E8%9C%87%E8%9C%87%E4%BC%A4%E4%B8%8B%E7%97%85%E5%8D%B1%E9%80%9A%E7%9F%A5%E4%B9%A6%23) `202.0K 🔥` `NEW`
1. [警方回应骂人男子自称精神有问题](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E5%9B%9E%E5%BA%94%E9%AA%82%E4%BA%BA%E7%94%B7%E5%AD%90%E8%87%AA%E7%A7%B0%E7%B2%BE%E7%A5%9E%E6%9C%89%E9%97%AE%E9%A2%98%23) `201.9K 🔥` `NEW`
1. [许家印前妻信托是否被打穿](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%AE%B6%E5%8D%B0%E5%89%8D%E5%A6%BB%E4%BF%A1%E6%89%98%E6%98%AF%E5%90%A6%E8%A2%AB%E6%89%93%E7%A9%BF%23) `200.7K 🔥` `NEW`
1. [好的睡眠是什么感觉](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E7%9A%84%E7%9D%A1%E7%9C%A0%E6%98%AF%E4%BB%80%E4%B9%88%E6%84%9F%E8%A7%89%23) `159.2K 🔥` `NEW`
1. [为什么日韩家庭都喜欢嵌入式冰箱](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%97%A5%E9%9F%A9%E5%AE%B6%E5%BA%AD%E9%83%BD%E5%96%9C%E6%AC%A2%E5%B5%8C%E5%85%A5%E5%BC%8F%E5%86%B0%E7%AE%B1%23) `144.9K 🔥` `NEW`
1. [杨幂开叉皮裙](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%BC%80%E5%8F%89%E7%9A%AE%E8%A3%99%23) `143.6K 🔥` `NEW`
1. [谷歌Gemini平等地爱世人](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E6%AD%8CGemini%E5%B9%B3%E7%AD%89%E5%9C%B0%E7%88%B1%E4%B8%96%E4%BA%BA%23) `139.1K 🔥` `NEW`
1. [九门没了](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E6%B2%A1%E4%BA%86%23) `139.1K 🔥` `NEW`
1. [没收许家印个人全部财产 (Confiscate all Xu Jiayin’s personal property)](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%94%B6%E8%AE%B8%E5%AE%B6%E5%8D%B0%E4%B8%AA%E4%BA%BA%E5%85%A8%E9%83%A8%E8%B4%A2%E4%BA%A7%23) `128.2K 🔥` `NEW`
1. [冯骥杨奇黑神话转发区](https://s.weibo.com/weibo?q=%23%E5%86%AF%E9%AA%A5%E6%9D%A8%E5%A5%87%E9%BB%91%E7%A5%9E%E8%AF%9D%E8%BD%AC%E5%8F%91%E5%8C%BA%23) `125.7K 🔥` `NEW`
1. [朱志鑫OMG你吓到苏新皓了](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%ABOMG%E4%BD%A0%E5%90%93%E5%88%B0%E8%8B%8F%E6%96%B0%E7%9A%93%E4%BA%86%23) `121.3K 🔥` `NEW`
1. [警方通报时代峰峻楼下聚集事件 (Police report on gathering incident downstairs at Times Fengjun)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E6%A5%BC%E4%B8%8B%E8%81%9A%E9%9B%86%E4%BA%8B%E4%BB%B6%23) `15.6M 🔥` `+1326%`
1. [连续值了5年夜班 只愿你健健康康 (I have been working night shifts for 5 consecutive years. I just wish you good health.)](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E7%BB%AD%E5%80%BC%E4%BA%865%E5%B9%B4%E5%A4%9C%E7%8F%AD%20%E5%8F%AA%E6%84%BF%E4%BD%A0%E5%81%A5%E5%81%A5%E5%BA%B7%E5%BA%B7%23) `3.1M 🔥` `+141%`
1. [孕妇产检因医生疏忽误服有毒液体](https://s.weibo.com/weibo?q=%23%E5%AD%95%E5%A6%87%E4%BA%A7%E6%A3%80%E5%9B%A0%E5%8C%BB%E7%94%9F%E7%96%8F%E5%BF%BD%E8%AF%AF%E6%9C%8D%E6%9C%89%E6%AF%92%E6%B6%B2%E4%BD%93%23) `2.3M 🔥` `+917%`
1. [月薪4000存款20w](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA4000%E5%AD%98%E6%AC%BE20w%23) `1.8M 🔥` `+408%`
1. [恒大集团被罚88.2亿元](https://s.weibo.com/weibo?q=%23%E6%81%92%E5%A4%A7%E9%9B%86%E5%9B%A2%E8%A2%AB%E7%BD%9A88.2%E4%BA%BF%E5%85%83%23) `509.0K 🔥` `+39%`
1. [曾辉一公没人选](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E4%B8%80%E5%85%AC%E6%B2%A1%E4%BA%BA%E9%80%89%23) `457.7K 🔥` `+23%`
1. [艾滋病检测结果不得告知配偶 (HIV test results must not be disclosed to spouse)](https://s.weibo.com/weibo?q=%23%E8%89%BE%E6%BB%8B%E7%97%85%E6%A3%80%E6%B5%8B%E7%BB%93%E6%9E%9C%E4%B8%8D%E5%BE%97%E5%91%8A%E7%9F%A5%E9%85%8D%E5%81%B6%23) `457.3K 🔥` `+33%`
1. [疑似缅北电诈园区图片曝光 (Pictures of suspected telecom fraud park in northern Myanmar exposed)](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E7%BC%85%E5%8C%97%E7%94%B5%E8%AF%88%E5%9B%AD%E5%8C%BA%E5%9B%BE%E7%89%87%E6%9B%9D%E5%85%89%23) `383.3K 🔥` `+102%`
1. [开推5拟邀阵容](https://s.weibo.com/weibo?q=%23%E5%BC%80%E6%8E%A85%E6%8B%9F%E9%82%80%E9%98%B5%E5%AE%B9%23) `352.4K 🔥` `+66%`
1. [又一家新能源汽车公司入局](https://s.weibo.com/weibo?q=%23%E5%8F%88%E4%B8%80%E5%AE%B6%E6%96%B0%E8%83%BD%E6%BA%90%E6%B1%BD%E8%BD%A6%E5%85%AC%E5%8F%B8%E5%85%A5%E5%B1%80%23) `338.4K 🔥` `+44%`
1. [存钱重要还是旅游重要](https://s.weibo.com/weibo?q=%23%E5%AD%98%E9%92%B1%E9%87%8D%E8%A6%81%E8%BF%98%E6%98%AF%E6%97%85%E6%B8%B8%E9%87%8D%E8%A6%81%23) `318.3K 🔥` `+41%`
1. [建议大家去看外贸综艺 (I suggest you watch the foreign trade variety show)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%8E%BB%E7%9C%8B%E5%A4%96%E8%B4%B8%E7%BB%BC%E8%89%BA%23) `304.9K 🔥` `+33%`
1. [许家印一审被判无期 (Xu Jiayin was sentenced to life in the first instance)](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%AE%B6%E5%8D%B0%E4%B8%80%E5%AE%A1%E8%A2%AB%E5%88%A4%E6%97%A0%E6%9C%9F%23) `3.1M 🔥`
1. [和思想贫瘠的人聊天有多痛苦](https://s.weibo.com/weibo?q=%23%E5%92%8C%E6%80%9D%E6%83%B3%E8%B4%AB%E7%98%A0%E7%9A%84%E4%BA%BA%E8%81%8A%E5%A4%A9%E6%9C%89%E5%A4%9A%E7%97%9B%E8%8B%A6%23) `572.7K 🔥`
1. [李响 孙骁骁](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%93%8D%20%E5%AD%99%E9%AA%81%E9%AA%81%23) `205.1K 🔥`
1. [宇树大跌](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E5%A4%A7%E8%B7%8C%23) `203.3K 🔥`
1. [宇树上市第2天王兴兴最新发声 (Wang Xingxing’s latest statement on the second day of Yushu’s listing)](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E4%B8%8A%E5%B8%82%E7%AC%AC2%E5%A4%A9%E7%8E%8B%E5%85%B4%E5%85%B4%E6%9C%80%E6%96%B0%E5%8F%91%E5%A3%B0%23) `202.7K 🔥`
1. [刘亦菲把我拉过去的望周知](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E6%8A%8A%E6%88%91%E6%8B%89%E8%BF%87%E5%8E%BB%E7%9A%84%E6%9C%9B%E5%91%A8%E7%9F%A5%23) `197.5K 🔥`
1. [Lisa比基尼泳池照](https://s.weibo.com/weibo?q=%23Lisa%E6%AF%94%E5%9F%BA%E5%B0%BC%E6%B3%B3%E6%B1%A0%E7%85%A7%23) `172.3K 🔥`
1. [上海发布楼市沪八条](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%8F%91%E5%B8%83%E6%A5%BC%E5%B8%82%E6%B2%AA%E5%85%AB%E6%9D%A1%23) `128.2K 🔥`
1. [河北涿州 代孕机构 (Hebei Zhuozhou surrogacy agency)](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8C%97%E6%B6%BF%E5%B7%9E%20%E4%BB%A3%E5%AD%95%E6%9C%BA%E6%9E%84%23) `498.9K 🔥` `-69%`
1. [我家那闺女2026官宣节奏 (My daughter 2026 official announcement rhythm)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%AE%B6%E9%82%A3%E9%97%BA%E5%A5%B32026%E5%AE%98%E5%AE%A3%E8%8A%82%E5%A5%8F%23) `464.0K 🔥` `-34%`
1. [比收到更卑微的词出现了 (A word more humble than received came up.)](https://s.weibo.com/weibo?q=%23%E6%AF%94%E6%94%B6%E5%88%B0%E6%9B%B4%E5%8D%91%E5%BE%AE%E7%9A%84%E8%AF%8D%E5%87%BA%E7%8E%B0%E4%BA%86%23) `456.6K 🔥` `-31%`
1. [华晨宇官宣南京站演唱会](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E5%AE%98%E5%AE%A3%E5%8D%97%E4%BA%AC%E7%AB%99%E6%BC%94%E5%94%B1%E4%BC%9A%23) `202.8K 🔥` `-28%`
1. [黑神话](https://s.weibo.com/weibo?q=%23%E9%BB%91%E7%A5%9E%E8%AF%9D%23) `142.2K 🔥` `-21%`
1. [兄妹恋和姐弟恋真的不一样 (Brother-sister love and sister-brother love are really different)](https://s.weibo.com/weibo?q=%23%E5%85%84%E5%A6%B9%E6%81%8B%E5%92%8C%E5%A7%90%E5%BC%9F%E6%81%8B%E7%9C%9F%E7%9A%84%E4%B8%8D%E4%B8%80%E6%A0%B7%23) `139.5K 🔥` `-59%`
1. [孟子义还没亲呢李昀锐就先闭眼睛了](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E8%BF%98%E6%B2%A1%E4%BA%B2%E5%91%A2%E6%9D%8E%E6%98%80%E9%94%90%E5%B0%B1%E5%85%88%E9%97%AD%E7%9C%BC%E7%9D%9B%E4%BA%86%23) `133.0K 🔥` `-39%`
1. [内娱国产剧尺度都这么大了吗 (Are all domestic entertainment dramas this big?)](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E5%9B%BD%E4%BA%A7%E5%89%A7%E5%B0%BA%E5%BA%A6%E9%83%BD%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%E5%90%97%23) `128.2K 🔥` `-22%`
1. [空枪](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%23) `124.0K 🔥` `-26%`

Updated at 2026-08-20 15:50:07

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
