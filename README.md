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

1. [北京台春晚收视十三连冠 (Beijing TV Spring Festival Gala wins 13th consecutive ratings)](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E5%8F%B0%E6%98%A5%E6%99%9A%E6%94%B6%E8%A7%86%E5%8D%81%E4%B8%89%E8%BF%9E%E5%86%A0%23) `855.6K 🔥` `NEW`
1. [苏翊鸣两轮排第一](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E4%B8%A4%E8%BD%AE%E6%8E%92%E7%AC%AC%E4%B8%80%23) `771.7K 🔥` `NEW`
1. [谷爱凌 顶级狩猎者的眼神](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%20%E9%A1%B6%E7%BA%A7%E7%8B%A9%E7%8C%8E%E8%80%85%E7%9A%84%E7%9C%BC%E7%A5%9E%23) `306.2K 🔥` `NEW`
1. [段永平1200亿持仓曝光](https://s.weibo.com/weibo?q=%23%E6%AE%B5%E6%B0%B8%E5%B9%B31200%E4%BA%BF%E6%8C%81%E4%BB%93%E6%9B%9D%E5%85%89%23) `170.8K 🔥` `NEW`
1. [豆包解密春晚魔术](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E8%A7%A3%E5%AF%86%E6%98%A5%E6%99%9A%E9%AD%94%E6%9C%AF%23) `167.2K 🔥` `NEW`
1. [冬奥会](https://s.weibo.com/weibo?q=%23%E5%86%AC%E5%A5%A5%E4%BC%9A%23) `164.4K 🔥` `NEW`
1. [曝邓超怒怼项目方维护孙俪](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%82%93%E8%B6%85%E6%80%92%E6%80%BC%E9%A1%B9%E7%9B%AE%E6%96%B9%E7%BB%B4%E6%8A%A4%E5%AD%99%E4%BF%AA%23) `163.8K 🔥` `NEW`
1. [沈腾听到王安宇没有他帅的反应](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E5%90%AC%E5%88%B0%E7%8E%8B%E5%AE%89%E5%AE%87%E6%B2%A1%E6%9C%89%E4%BB%96%E5%B8%85%E7%9A%84%E5%8F%8D%E5%BA%94%23) `159.5K 🔥` `NEW`
1. [CCTV6 三女休夫](https://s.weibo.com/weibo?q=%23CCTV6%20%E4%B8%89%E5%A5%B3%E4%BC%91%E5%A4%AB%23) `152.4K 🔥` `NEW`
1. [第一次感受到了宗族的威力](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E6%84%9F%E5%8F%97%E5%88%B0%E4%BA%86%E5%AE%97%E6%97%8F%E7%9A%84%E5%A8%81%E5%8A%9B%23) `144.3K 🔥` `NEW`
1. [镖人惠英红没打戏好可惜 (It's a pity that escort Hui Yinghong didn't have any scenes)](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E6%83%A0%E8%8B%B1%E7%BA%A2%E6%B2%A1%E6%89%93%E6%88%8F%E5%A5%BD%E5%8F%AF%E6%83%9C%23) `132.2K 🔥` `NEW`
1. [苏翊鸣第二滑79.90分](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E7%AC%AC%E4%BA%8C%E6%BB%9179.90%E5%88%86%23) `119.8K 🔥` `NEW`
1. [陈梅婷第二跳100.29分](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%A2%85%E5%A9%B7%E7%AC%AC%E4%BA%8C%E8%B7%B3100.29%E5%88%86%23) `110.6K 🔥` `NEW`
1. [韩信踏浪归皮肤](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E4%BF%A1%E8%B8%8F%E6%B5%AA%E5%BD%92%E7%9A%AE%E8%82%A4%23) `107.4K 🔥` `NEW`
1. [大年初二迎福健康是第一福](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B9%B4%E5%88%9D%E4%BA%8C%E8%BF%8E%E7%A6%8F%E5%81%A5%E5%BA%B7%E6%98%AF%E7%AC%AC%E4%B8%80%E7%A6%8F%23) `103.3K 🔥` `NEW`
1. [苏翊鸣首轮排第一](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E9%A6%96%E8%BD%AE%E6%8E%92%E7%AC%AC%E4%B8%80%23) `102.9K 🔥` `NEW`
1. [冰壶](https://s.weibo.com/weibo?q=%23%E5%86%B0%E5%A3%B6%23) `88.0K 🔥` `NEW`
1. [苏翊鸣单板滑雪坡障技巧决赛](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E5%8D%95%E6%9D%BF%E6%BB%91%E9%9B%AA%E5%9D%A1%E9%9A%9C%E6%8A%80%E5%B7%A7%E5%86%B3%E8%B5%9B%23) `3.1M 🔥` `+1070%`
1. [新婚第一次回婆家过年全程尬笑 (The newlyweds went back to their in-laws’ house for the Chinese New Year for the first time and laughed the whole time)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A9%9A%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%9B%9E%E5%A9%86%E5%AE%B6%E8%BF%87%E5%B9%B4%E5%85%A8%E7%A8%8B%E5%B0%AC%E7%AC%91%23) `1.1M 🔥` `+227%`
1. [用千问一句话下单每日首单必减](https://s.weibo.com/weibo?q=%23%E7%94%A8%E5%8D%83%E9%97%AE%E4%B8%80%E5%8F%A5%E8%AF%9D%E4%B8%8B%E5%8D%95%E6%AF%8F%E6%97%A5%E9%A6%96%E5%8D%95%E5%BF%85%E5%87%8F%23) `774.2K 🔥` `+141%`
1. [看熊出没孩子开心家长放心 (Watching bears come and go, children are happy, parents are reassured)](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E7%86%8A%E5%87%BA%E6%B2%A1%E5%AD%A9%E5%AD%90%E5%BC%80%E5%BF%83%E5%AE%B6%E9%95%BF%E6%94%BE%E5%BF%83%23) `352.8K 🔥` `+42%`
1. [朱一龙 家里诗诗外面师姐](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%20%E5%AE%B6%E9%87%8C%E8%AF%97%E8%AF%97%E5%A4%96%E9%9D%A2%E5%B8%88%E5%A7%90%23) `352.3K 🔥` `+142%`
1. [日本挖到含稀土泥浆的真相来了 (Here’s the truth about mud containing rare earths dug up in Japan)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%8C%96%E5%88%B0%E5%90%AB%E7%A8%80%E5%9C%9F%E6%B3%A5%E6%B5%86%E7%9A%84%E7%9C%9F%E7%9B%B8%E6%9D%A5%E4%BA%86%23) `274.4K 🔥` `+110%`
1. [苏翊鸣第一滑82.41分](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E7%AC%AC%E4%B8%80%E6%BB%9182.41%E5%88%86%23) `231.4K 🔥` `+86%`
1. [走亲戚时父母说的要走了](https://s.weibo.com/weibo?q=%23%E8%B5%B0%E4%BA%B2%E6%88%9A%E6%97%B6%E7%88%B6%E6%AF%8D%E8%AF%B4%E7%9A%84%E8%A6%81%E8%B5%B0%E4%BA%86%23) `161.3K 🔥` `+37%`
1. [赵丽颖王源也是当上门神了](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%8E%8B%E6%BA%90%E4%B9%9F%E6%98%AF%E5%BD%93%E4%B8%8A%E9%97%A8%E7%A5%9E%E4%BA%86%23) `144.1K 🔥` `+22%`
1. [孩子存1000比你存20万利息高 (If your child saves 1,000, the interest will be higher than if you save 200,000.)](https://s.weibo.com/weibo?q=%23%E5%AD%A9%E5%AD%90%E5%AD%981000%E6%AF%94%E4%BD%A0%E5%AD%9820%E4%B8%87%E5%88%A9%E6%81%AF%E9%AB%98%23) `290.4K 🔥`
1. [太奶摇来了我太奶](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E5%A5%B6%E6%91%87%E6%9D%A5%E4%BA%86%E6%88%91%E5%A4%AA%E5%A5%B6%23) `280.3K 🔥`
1. [成何体统大结局 仓促](https://s.weibo.com/weibo?q=%23%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%E5%A4%A7%E7%BB%93%E5%B1%80%20%E4%BB%93%E4%BF%83%23) `225.6K 🔥`
1. [网红阿沁直播首次谈前任刘阳](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E9%98%BF%E6%B2%81%E7%9B%B4%E6%92%AD%E9%A6%96%E6%AC%A1%E8%B0%88%E5%89%8D%E4%BB%BB%E5%88%98%E9%98%B3%23) `163.2K 🔥`
1. [打麻将输7万4名牌友全获刑](https://s.weibo.com/weibo?q=%23%E6%89%93%E9%BA%BB%E5%B0%86%E8%BE%937%E4%B8%874%E5%90%8D%E7%89%8C%E5%8F%8B%E5%85%A8%E8%8E%B7%E5%88%91%23) `162.4K 🔥`
1. [云旗郝熠然滑雪](https://s.weibo.com/weibo?q=%23%E4%BA%91%E6%97%97%E9%83%9D%E7%86%A0%E7%84%B6%E6%BB%91%E9%9B%AA%23) `161.4K 🔥`
1. [镖人 武侠不死](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%20%E6%AD%A6%E4%BE%A0%E4%B8%8D%E6%AD%BB%23) `160.6K 🔥`
1. [写族谱发现祖上是正二品 (When I wrote a genealogy, I found out that my ancestor was the second grade of Zheng.)](https://s.weibo.com/weibo?q=%23%E5%86%99%E6%97%8F%E8%B0%B1%E5%8F%91%E7%8E%B0%E7%A5%96%E4%B8%8A%E6%98%AF%E6%AD%A3%E4%BA%8C%E5%93%81%23) `159.1K 🔥`
1. [徐梦桃邵琪孔凡钰进决赛](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E9%82%B5%E7%90%AA%E5%AD%94%E5%87%A1%E9%92%B0%E8%BF%9B%E5%86%B3%E8%B5%9B%23) `156.0K 🔥`
1. [印度一大学拿中国机器狗冒充自研](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E4%B8%80%E5%A4%A7%E5%AD%A6%E6%8B%BF%E4%B8%AD%E5%9B%BD%E6%9C%BA%E5%99%A8%E7%8B%97%E5%86%92%E5%85%85%E8%87%AA%E7%A0%94%23) `154.2K 🔥`
1. [赖清德被喷溅呕吐物](https://s.weibo.com/weibo?q=%23%E8%B5%96%E6%B8%85%E5%BE%B7%E8%A2%AB%E5%96%B7%E6%BA%85%E5%91%95%E5%90%90%E7%89%A9%23) `153.4K 🔥`
1. [惊蛰无声 反转](https://s.weibo.com/weibo?q=%23%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%20%E5%8F%8D%E8%BD%AC%23) `144.6K 🔥`
1. [摆摊卖春联姐弟13天收入3万元 (Siblings sell Spring Festival couplets at stall and earn NT$30,000 in 13 days)](https://s.weibo.com/weibo?q=%23%E6%91%86%E6%91%8A%E5%8D%96%E6%98%A5%E8%81%94%E5%A7%90%E5%BC%9F13%E5%A4%A9%E6%94%B6%E5%85%A53%E4%B8%87%E5%85%83%23) `114.6K 🔥`
1. [王橹杰娃娃](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%A8%83%E5%A8%83%23) `91.7K 🔥`
1. [苏翊鸣或将收获生日大礼](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E6%88%96%E5%B0%86%E6%94%B6%E8%8E%B7%E7%94%9F%E6%97%A5%E5%A4%A7%E7%A4%BC%23) `87.4K 🔥`
1. [谷爱凌大跳台决赛第三跳前眼神 (Gu Ailing’s eyes before the third jump in the big platform finals)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%A4%A7%E8%B7%B3%E5%8F%B0%E5%86%B3%E8%B5%9B%E7%AC%AC%E4%B8%89%E8%B7%B3%E5%89%8D%E7%9C%BC%E7%A5%9E%23) `353.9K 🔥` `-68%`
1. [龙洋主持完春晚哭了 (Long Yang cried after hosting the Spring Festival Gala)](https://s.weibo.com/weibo?q=%23%E9%BE%99%E6%B4%8B%E4%B8%BB%E6%8C%81%E5%AE%8C%E6%98%A5%E6%99%9A%E5%93%AD%E4%BA%86%23) `353.2K 🔥` `-25%`
1. [镖人](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `266.4K 🔥` `-65%`
1. [徐梦桃第一跳89.29分](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%A2%A6%E6%A1%83%E7%AC%AC%E4%B8%80%E8%B7%B389.29%E5%88%86%23) `245.0K 🔥` `-34%`
1. [贡菜是莴笋](https://s.weibo.com/weibo?q=%23%E8%B4%A1%E8%8F%9C%E6%98%AF%E8%8E%B4%E7%AC%8B%23) `196.2K 🔥` `-21%`
1. [看完惊蛰无声想掏垃圾桶 (After watching Jingzhe, I wanted to take out the trash can)](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E5%AE%8C%E6%83%8A%E8%9B%B0%E6%97%A0%E5%A3%B0%E6%83%B3%E6%8E%8F%E5%9E%83%E5%9C%BE%E6%A1%B6%23) `176.3K 🔥` `-42%`
1. [党员干部春节期间打麻将违规吗](https://s.weibo.com/weibo?q=%23%E5%85%9A%E5%91%98%E5%B9%B2%E9%83%A8%E6%98%A5%E8%8A%82%E6%9C%9F%E9%97%B4%E6%89%93%E9%BA%BB%E5%B0%86%E8%BF%9D%E8%A7%84%E5%90%97%23) `111.3K 🔥` `-54%`
1. [娜然与霍家父子同游意大利 (Naran traveled to Italy with the Huo family and his son)](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E7%84%B6%E4%B8%8E%E9%9C%8D%E5%AE%B6%E7%88%B6%E5%AD%90%E5%90%8C%E6%B8%B8%E6%84%8F%E5%A4%A7%E5%88%A9%23) `108.2K 🔥` `-27%`
1. [诗幂 (poetry power)](https://s.weibo.com/weibo?q=%23%E8%AF%97%E5%B9%82%23) `103.9K 🔥` `-26%`
1. [飞驰人生3赢麻了 (Flying Life 3 is a win)](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E9%A9%B0%E4%BA%BA%E7%94%9F3%E8%B5%A2%E9%BA%BB%E4%BA%86%23) `96.3K 🔥` `-21%`
1. [中国女队全员晋级空中技巧决赛](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E9%98%9F%E5%85%A8%E5%91%98%E6%99%8B%E7%BA%A7%E7%A9%BA%E4%B8%AD%E6%8A%80%E5%B7%A7%E5%86%B3%E8%B5%9B%23) `89.8K 🔥` `-39%`

Updated at 2026-02-18 19:49:04

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
