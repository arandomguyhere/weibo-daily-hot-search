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

1. [利雅得机场遭袭致12死309伤](https://s.weibo.com/weibo?q=%23%E5%88%A9%E9%9B%85%E5%BE%97%E6%9C%BA%E5%9C%BA%E9%81%AD%E8%A2%AD%E8%87%B412%E6%AD%BB309%E4%BC%A4%23) `1.4M 🔥` `NEW`
1. [虎鲸妈妈带幼崽尸体十七天](https://s.weibo.com/weibo?q=%23%E8%99%8E%E9%B2%B8%E5%A6%88%E5%A6%88%E5%B8%A6%E5%B9%BC%E5%B4%BD%E5%B0%B8%E4%BD%93%E5%8D%81%E4%B8%83%E5%A4%A9%23) `461.6K 🔥` `NEW`
1. [解酒饮料10分钟能解酒是假的](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E9%85%92%E9%A5%AE%E6%96%9910%E5%88%86%E9%92%9F%E8%83%BD%E8%A7%A3%E9%85%92%E6%98%AF%E5%81%87%E7%9A%84%23) `434.1K 🔥` `NEW`
1. [四川巴中12345员工投诉欠薪](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%B7%B4%E4%B8%AD12345%E5%91%98%E5%B7%A5%E6%8A%95%E8%AF%89%E6%AC%A0%E8%96%AA%23) `429.4K 🔥` `NEW`
1. [第一次见领奖一脸问号的飞天视帝](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E9%A2%86%E5%A5%96%E4%B8%80%E8%84%B8%E9%97%AE%E5%8F%B7%E7%9A%84%E9%A3%9E%E5%A4%A9%E8%A7%86%E5%B8%9D%23) `301.6K 🔥` `NEW`
1. [尿毒症大多是吃出来的](https://s.weibo.com/weibo?q=%23%E5%B0%BF%E6%AF%92%E7%97%87%E5%A4%A7%E5%A4%9A%E6%98%AF%E5%90%83%E5%87%BA%E6%9D%A5%E7%9A%84%23) `291.5K 🔥` `NEW`
1. [王楚然接替金晨](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E6%8E%A5%E6%9B%BF%E9%87%91%E6%99%A8%23) `288.4K 🔥` `NEW`
1. [小黄豆宣布与刘琳琳绝交](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%BB%84%E8%B1%86%E5%AE%A3%E5%B8%83%E4%B8%8E%E5%88%98%E7%90%B3%E7%90%B3%E7%BB%9D%E4%BA%A4%23) `281.0K 🔥` `NEW`
1. [曝李勒优崔晋私下和解](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9D%8E%E5%8B%92%E4%BC%98%E5%B4%94%E6%99%8B%E7%A7%81%E4%B8%8B%E5%92%8C%E8%A7%A3%23) `280.9K 🔥` `NEW`
1. [威尼修斯 皇马](https://s.weibo.com/weibo?q=%23%E5%A8%81%E5%B0%BC%E4%BF%AE%E6%96%AF%20%E7%9A%87%E9%A9%AC%23) `229.1K 🔥` `NEW`
1. [兰香如故编剧的地位](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E7%BC%96%E5%89%A7%E7%9A%84%E5%9C%B0%E4%BD%8D%23) `166.0K 🔥` `NEW`
1. [大冰称想把剩下时间浪费掉](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%86%B0%E7%A7%B0%E6%83%B3%E6%8A%8A%E5%89%A9%E4%B8%8B%E6%97%B6%E9%97%B4%E6%B5%AA%E8%B4%B9%E6%8E%89%23) `165.9K 🔥` `NEW`
1. [梅艳芳龛位当初特意用乳名登记](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%89%B3%E8%8A%B3%E9%BE%9B%E4%BD%8D%E5%BD%93%E5%88%9D%E7%89%B9%E6%84%8F%E7%94%A8%E4%B9%B3%E5%90%8D%E7%99%BB%E8%AE%B0%23) `165.3K 🔥` `NEW`
1. [女生一定要学会藏锋](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E4%B8%80%E5%AE%9A%E8%A6%81%E5%AD%A6%E4%BC%9A%E8%97%8F%E9%94%8B%23) `165.1K 🔥` `NEW`
1. [王仁君没想到怎么称呼高露](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BB%81%E5%90%9B%E6%B2%A1%E6%83%B3%E5%88%B0%E6%80%8E%E4%B9%88%E7%A7%B0%E5%91%BC%E9%AB%98%E9%9C%B2%23) `141.2K 🔥` `NEW`
1. [黄子韬带徐艺洋去健身真的太好笑了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E5%B8%A6%E5%BE%90%E8%89%BA%E6%B4%8B%E5%8E%BB%E5%81%A5%E8%BA%AB%E7%9C%9F%E7%9A%84%E5%A4%AA%E5%A5%BD%E7%AC%91%E4%BA%86%23) `138.1K 🔥` `NEW`
1. [大二专科生称靠切片三年赚七百万](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BA%8C%E4%B8%93%E7%A7%91%E7%94%9F%E7%A7%B0%E9%9D%A0%E5%88%87%E7%89%87%E4%B8%89%E5%B9%B4%E8%B5%9A%E4%B8%83%E7%99%BE%E4%B8%87%23) `135.8K 🔥` `NEW`
1. [英国动物园回应男子遭老虎袭击身亡](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E5%8A%A8%E7%89%A9%E5%9B%AD%E5%9B%9E%E5%BA%94%E7%94%B7%E5%AD%90%E9%81%AD%E8%80%81%E8%99%8E%E8%A2%AD%E5%87%BB%E8%BA%AB%E4%BA%A1%23) `132.1K 🔥` `NEW`
1. [香港骨灰盗窃案疑涉跨境犯罪集团](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E9%AA%A8%E7%81%B0%E7%9B%97%E7%AA%83%E6%A1%88%E7%96%91%E6%B6%89%E8%B7%A8%E5%A2%83%E7%8A%AF%E7%BD%AA%E9%9B%86%E5%9B%A2%23) `131.8K 🔥` `NEW`
1. [好多品牌都不约而同开始剪吊牌了](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E5%A4%9A%E5%93%81%E7%89%8C%E9%83%BD%E4%B8%8D%E7%BA%A6%E8%80%8C%E5%90%8C%E5%BC%80%E5%A7%8B%E5%89%AA%E5%90%8A%E7%89%8C%E4%BA%86%23) `130.1K 🔥` `NEW`
1. [员工拒绝晚上六点至八点加班被辞退](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A5%E6%8B%92%E7%BB%9D%E6%99%9A%E4%B8%8A%E5%85%AD%E7%82%B9%E8%87%B3%E5%85%AB%E7%82%B9%E5%8A%A0%E7%8F%AD%E8%A2%AB%E8%BE%9E%E9%80%80%23) `127.2K 🔥` `NEW`
1. [台湾民众在台北街头高喊要统一](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E6%B9%BE%E6%B0%91%E4%BC%97%E5%9C%A8%E5%8F%B0%E5%8C%97%E8%A1%97%E5%A4%B4%E9%AB%98%E5%96%8A%E8%A6%81%E7%BB%9F%E4%B8%80%23) `126.1K 🔥` `NEW`
1. [谢娜刘烨十多年都没有同台过](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%88%98%E7%83%A8%E5%8D%81%E5%A4%9A%E5%B9%B4%E9%83%BD%E6%B2%A1%E6%9C%89%E5%90%8C%E5%8F%B0%E8%BF%87%23) `119.7K 🔥` `NEW`
1. [速成车乱象整治](https://s.weibo.com/weibo?q=%23%E9%80%9F%E6%88%90%E8%BD%A6%E4%B9%B1%E8%B1%A1%E6%95%B4%E6%B2%BB%23) `114.1K 🔥` `NEW`
1. [金智媛空窗两年再出爆剧](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E5%AA%9B%E7%A9%BA%E7%AA%97%E4%B8%A4%E5%B9%B4%E5%86%8D%E5%87%BA%E7%88%86%E5%89%A7%23) `99.0K 🔥` `NEW`
1. [王祖贤加拿大艾灸馆价格表](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%A5%96%E8%B4%A4%E5%8A%A0%E6%8B%BF%E5%A4%A7%E8%89%BE%E7%81%B8%E9%A6%86%E4%BB%B7%E6%A0%BC%E8%A1%A8%23) `94.0K 🔥` `NEW`
1. [iPhone标准版越来越值得等了吗](https://s.weibo.com/weibo?q=%23iPhone%E6%A0%87%E5%87%86%E7%89%88%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%80%BC%E5%BE%97%E7%AD%89%E4%BA%86%E5%90%97%23) `87.8K 🔥` `NEW`
1. [泰国警方回应大概率已被转至缅甸](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E8%AD%A6%E6%96%B9%E5%9B%9E%E5%BA%94%E5%A4%A7%E6%A6%82%E7%8E%87%E5%B7%B2%E8%A2%AB%E8%BD%AC%E8%87%B3%E7%BC%85%E7%94%B8%23) `1.1M 🔥` `+451%`
1. [以青春之我建强农之业](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E9%9D%92%E6%98%A5%E4%B9%8B%E6%88%91%E5%BB%BA%E5%BC%BA%E5%86%9C%E4%B9%8B%E4%B8%9A%23) `678.4K 🔥` `+497%`
1. [梅艳芳骨灰被盗](https://s.weibo.com/weibo?q=%23%E6%A2%85%E8%89%B3%E8%8A%B3%E9%AA%A8%E7%81%B0%E8%A2%AB%E7%9B%97%23) `664.3K 🔥` `+534%`
1. [明知不该买房却想要自己的家](https://s.weibo.com/weibo?q=%23%E6%98%8E%E7%9F%A5%E4%B8%8D%E8%AF%A5%E4%B9%B0%E6%88%BF%E5%8D%B4%E6%83%B3%E8%A6%81%E8%87%AA%E5%B7%B1%E7%9A%84%E5%AE%B6%23) `461.8K 🔥` `+224%`
1. [AI把数学干废了](https://s.weibo.com/weibo?q=%23AI%E6%8A%8A%E6%95%B0%E5%AD%A6%E5%B9%B2%E5%BA%9F%E4%BA%86%23) `432.3K 🔥` `+1464%`
1. [香港近年多位名人骨灰被盗](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E8%BF%91%E5%B9%B4%E5%A4%9A%E4%BD%8D%E5%90%8D%E4%BA%BA%E9%AA%A8%E7%81%B0%E8%A2%AB%E7%9B%97%23) `296.9K 🔥` `+547%`
1. [四部门终结速成车乱象](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E9%83%A8%E9%97%A8%E7%BB%88%E7%BB%93%E9%80%9F%E6%88%90%E8%BD%A6%E4%B9%B1%E8%B1%A1%23) `230.1K 🔥` `+403%`
1. [华为整体成本涨了1400元](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E6%95%B4%E4%BD%93%E6%88%90%E6%9C%AC%E6%B6%A8%E4%BA%861400%E5%85%83%23) `179.2K 🔥` `+547%`
1. [刘琳琳抖音账号被封](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%90%B3%E7%90%B3%E6%8A%96%E9%9F%B3%E8%B4%A6%E5%8F%B7%E8%A2%AB%E5%B0%81%23) `178.3K 🔥` `+88%`
1. [打一针让癌细胞生锈而死](https://s.weibo.com/weibo?q=%23%E6%89%93%E4%B8%80%E9%92%88%E8%AE%A9%E7%99%8C%E7%BB%86%E8%83%9E%E7%94%9F%E9%94%88%E8%80%8C%E6%AD%BB%23) `173.9K 🔥` `+233%`
1. [嫁人也要嫁舍得开灯的家庭](https://s.weibo.com/weibo?q=%23%E5%AB%81%E4%BA%BA%E4%B9%9F%E8%A6%81%E5%AB%81%E8%88%8D%E5%BE%97%E5%BC%80%E7%81%AF%E7%9A%84%E5%AE%B6%E5%BA%AD%23) `165.5K 🔥` `+370%`
1. [晒太阳补维D最好选这个时段](https://s.weibo.com/weibo?q=%23%E6%99%92%E5%A4%AA%E9%98%B3%E8%A1%A5%E7%BB%B4D%E6%9C%80%E5%A5%BD%E9%80%89%E8%BF%99%E4%B8%AA%E6%97%B6%E6%AE%B5%23) `164.9K 🔥` `+372%`
1. [郑钦文谈决赛对手安德列娃](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E8%B0%88%E5%86%B3%E8%B5%9B%E5%AF%B9%E6%89%8B%E5%AE%89%E5%BE%B7%E5%88%97%E5%A8%83%23) `164.8K 🔥` `+495%`
1. [花店老板说李勒优是真没钱](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BA%97%E8%80%81%E6%9D%BF%E8%AF%B4%E6%9D%8E%E5%8B%92%E4%BC%98%E6%98%AF%E7%9C%9F%E6%B2%A1%E9%92%B1%23) `143.4K 🔥` `+227%`
1. [怪不得张国立在娱乐圈地位这么高](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E5%BC%A0%E5%9B%BD%E7%AB%8B%E5%9C%A8%E5%A8%B1%E4%B9%90%E5%9C%88%E5%9C%B0%E4%BD%8D%E8%BF%99%E4%B9%88%E9%AB%98%23) `139.0K 🔥` `+289%`
1. [老一辈的书是教真东西啊](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%B8%80%E8%BE%88%E7%9A%84%E4%B9%A6%E6%98%AF%E6%95%99%E7%9C%9F%E4%B8%9C%E8%A5%BF%E5%95%8A%23) `133.6K 🔥` `+381%`
1. [餐厅里全程站着的妈妈](https://s.weibo.com/weibo?q=%23%E9%A4%90%E5%8E%85%E9%87%8C%E5%85%A8%E7%A8%8B%E7%AB%99%E7%9D%80%E7%9A%84%E5%A6%88%E5%A6%88%23) `109.9K 🔥` `+296%`
1. [四川妹子打麻将悟道了](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%A6%B9%E5%AD%90%E6%89%93%E9%BA%BB%E5%B0%86%E6%82%9F%E9%81%93%E4%BA%86%23) `108.4K 🔥` `+293%`
1. [王楚钦孙颖莎林诗栋梁靖崑均伤病](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E5%AD%99%E9%A2%96%E8%8E%8E%E6%9E%97%E8%AF%97%E6%A0%8B%E6%A2%81%E9%9D%96%E5%B4%91%E5%9D%87%E4%BC%A4%E7%97%85%23) `106.4K 🔥` `+283%`
1. [郑钦文创中网历史](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E5%88%9B%E4%B8%AD%E7%BD%91%E5%8E%86%E5%8F%B2%23) `106.1K 🔥` `+122%`
1. [郑钦文解释为何提醒观众](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%92%A6%E6%96%87%E8%A7%A3%E9%87%8A%E4%B8%BA%E4%BD%95%E6%8F%90%E9%86%92%E8%A7%82%E4%BC%97%23) `96.7K 🔥` `+135%`
1. [云旗跳了神之八秒](https://s.weibo.com/weibo?q=%23%E4%BA%91%E6%97%97%E8%B7%B3%E4%BA%86%E7%A5%9E%E4%B9%8B%E5%85%AB%E7%A7%92%23) `94.3K 🔥` `+242%`
1. [内娱的神之八秒](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E7%9A%84%E7%A5%9E%E4%B9%8B%E5%85%AB%E7%A7%92%23) `84.4K 🔥` `+194%`
1. [小姨对李勒优说的话](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%A7%A8%E5%AF%B9%E6%9D%8E%E5%8B%92%E4%BC%98%E8%AF%B4%E7%9A%84%E8%AF%9D%23) `84.0K 🔥` `+120%`

Updated at 2026-10-11 08:28:20

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
