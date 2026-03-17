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

1. [多家商场厕所隐藏洗手液擦手纸 (Hand sanitizer and paper towels hidden in toilets in many shopping malls)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6%E5%95%86%E5%9C%BA%E5%8E%95%E6%89%80%E9%9A%90%E8%97%8F%E6%B4%97%E6%89%8B%E6%B6%B2%E6%93%A6%E6%89%8B%E7%BA%B8%23) `1.1M 🔥` `NEW`
1. [12306回应不想坐B座怎么办](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E4%B8%8D%E6%83%B3%E5%9D%90B%E5%BA%A7%E6%80%8E%E4%B9%88%E5%8A%9E%23) `796.5K 🔥` `NEW`
1. [警方通报高中生过斑马线被撞身亡](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A5%E9%AB%98%E4%B8%AD%E7%94%9F%E8%BF%87%E6%96%91%E9%A9%AC%E7%BA%BF%E8%A2%AB%E6%92%9E%E8%BA%AB%E4%BA%A1%23) `377.1K 🔥` `NEW`
1. [甩脂机躺瘦是谣言](https://s.weibo.com/weibo?q=%23%E7%94%A9%E8%84%82%E6%9C%BA%E8%BA%BA%E7%98%A6%E6%98%AF%E8%B0%A3%E8%A8%80%23) `194.3K 🔥` `NEW`
1. [官方给油菜花喷药致蜜蜂大量死亡](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E7%BB%99%E6%B2%B9%E8%8F%9C%E8%8A%B1%E5%96%B7%E8%8D%AF%E8%87%B4%E8%9C%9C%E8%9C%82%E5%A4%A7%E9%87%8F%E6%AD%BB%E4%BA%A1%23) `176.9K 🔥` `NEW`
1. [谢征樊长玉圆房吻](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%BE%81%E6%A8%8A%E9%95%BF%E7%8E%89%E5%9C%86%E6%88%BF%E5%90%BB%23) `174.5K 🔥` `NEW`
1. [儿媳挪用婆婆900万给姐姐300万遗产](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AA%B3%E6%8C%AA%E7%94%A8%E5%A9%86%E5%A9%86900%E4%B8%87%E7%BB%99%E5%A7%90%E5%A7%90300%E4%B8%87%E9%81%97%E4%BA%A7%23) `172.6K 🔥` `NEW`
1. [华为广汽跨界合作打造启境品牌](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%B9%BF%E6%B1%BD%E8%B7%A8%E7%95%8C%E5%90%88%E4%BD%9C%E6%89%93%E9%80%A0%E5%90%AF%E5%A2%83%E5%93%81%E7%89%8C%23) `171.3K 🔥` `NEW`
1. [睡觉大赛7小时不许上厕所](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E8%A7%89%E5%A4%A7%E8%B5%9B7%E5%B0%8F%E6%97%B6%E4%B8%8D%E8%AE%B8%E4%B8%8A%E5%8E%95%E6%89%80%23) `171.2K 🔥` `NEW`
1. [水沟玩耍无人管姐弟系母亲去世](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E6%B2%9F%E7%8E%A9%E8%80%8D%E6%97%A0%E4%BA%BA%E7%AE%A1%E5%A7%90%E5%BC%9F%E7%B3%BB%E6%AF%8D%E4%BA%B2%E5%8E%BB%E4%B8%96%23) `170.2K 🔥` `NEW`
1. [金价波动 (Gold price fluctuations)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E6%B3%A2%E5%8A%A8%23) `165.1K 🔥` `NEW`
1. [下次油价调整每升或涨1元以上](https://s.weibo.com/weibo?q=%23%E4%B8%8B%E6%AC%A1%E6%B2%B9%E4%BB%B7%E8%B0%83%E6%95%B4%E6%AF%8F%E5%8D%87%E6%88%96%E6%B6%A81%E5%85%83%E4%BB%A5%E4%B8%8A%23) `106.1K 🔥` `NEW`
1. [内塔尼亚胡下令消灭伊朗政府高官](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A1%94%E5%B0%BC%E4%BA%9A%E8%83%A1%E4%B8%8B%E4%BB%A4%E6%B6%88%E7%81%AD%E4%BC%8A%E6%9C%97%E6%94%BF%E5%BA%9C%E9%AB%98%E5%AE%98%23) `104.5K 🔥` `NEW`
1. [周杰伦预热新专辑](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E9%A2%84%E7%83%AD%E6%96%B0%E4%B8%93%E8%BE%91%23) `102.2K 🔥` `NEW`
1. [张维伊为了减肥把零食全给吕严](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%BB%B4%E4%BC%8A%E4%B8%BA%E4%BA%86%E5%87%8F%E8%82%A5%E6%8A%8A%E9%9B%B6%E9%A3%9F%E5%85%A8%E7%BB%99%E5%90%95%E4%B8%A5%23) `102.0K 🔥` `NEW`
1. [陶喆广州站](https://s.weibo.com/weibo?q=%23%E9%99%B6%E5%96%86%E5%B9%BF%E5%B7%9E%E7%AB%99%23) `93.4K 🔥` `NEW`
1. [宝宝巴士被罚30万元](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E5%AE%9D%E5%B7%B4%E5%A3%AB%E8%A2%AB%E7%BD%9A30%E4%B8%87%E5%85%83%23) `90.7K 🔥` `NEW`
1. [公司回应招聘不建议大龄报名](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E5%9B%9E%E5%BA%94%E6%8B%9B%E8%81%98%E4%B8%8D%E5%BB%BA%E8%AE%AE%E5%A4%A7%E9%BE%84%E6%8A%A5%E5%90%8D%23) `87.6K 🔥` `NEW`
1. [宜宾高速口贴告示脏车禁止入城](https://s.weibo.com/weibo?q=%23%E5%AE%9C%E5%AE%BE%E9%AB%98%E9%80%9F%E5%8F%A3%E8%B4%B4%E5%91%8A%E7%A4%BA%E8%84%8F%E8%BD%A6%E7%A6%81%E6%AD%A2%E5%85%A5%E5%9F%8E%23) `87.4K 🔥` `NEW`
1. [伊朗的新战法让美国很头疼](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%9A%84%E6%96%B0%E6%88%98%E6%B3%95%E8%AE%A9%E7%BE%8E%E5%9B%BD%E5%BE%88%E5%A4%B4%E7%96%BC%23) `87.3K 🔥` `NEW`
1. [杨紫在罗马许愿池报身份证号 (Yang Zi reported her ID number at the Trevi Fountain in Rome)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%9C%A8%E7%BD%97%E9%A9%AC%E8%AE%B8%E6%84%BF%E6%B1%A0%E6%8A%A5%E8%BA%AB%E4%BB%BD%E8%AF%81%E5%8F%B7%23) `85.2K 🔥` `NEW`
1. [中国女足无缘亚洲杯决赛](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E8%B6%B3%E6%97%A0%E7%BC%98%E4%BA%9A%E6%B4%B2%E6%9D%AF%E5%86%B3%E8%B5%9B%23) `79.9K 🔥` `NEW`
1. [猫 再碰我就生气了](https://s.weibo.com/weibo?q=%23%E7%8C%AB%20%E5%86%8D%E7%A2%B0%E6%88%91%E5%B0%B1%E7%94%9F%E6%B0%94%E4%BA%86%23) `79.6K 🔥` `NEW`
1. [李卿咋这帅](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%8D%BF%E5%92%8B%E8%BF%99%E5%B8%85%23) `72.0K 🔥` `NEW`
1. [A股调整背后原因](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E8%B0%83%E6%95%B4%E8%83%8C%E5%90%8E%E5%8E%9F%E5%9B%A0%23) `71.5K 🔥` `NEW`
1. [伊朗最高领袖驳回斡旋提案](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E9%A9%B3%E5%9B%9E%E6%96%A1%E6%97%8B%E6%8F%90%E6%A1%88%23) `207.0K 🔥` `+77%`
1. [原来这就是小鸟胃啊](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E5%B0%B1%E6%98%AF%E5%B0%8F%E9%B8%9F%E8%83%83%E5%95%8A%23) `176.2K 🔥` `+29%`
1. [中国女足1比2澳大利亚](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E8%B6%B31%E6%AF%942%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%23) `175.7K 🔥` `+57%`
1. [小巷人家2官宣 (Alley People 2 Official Announcement)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B62%E5%AE%98%E5%AE%A3%23) `175.1K 🔥` `+27%`
1. [公安介入调查高中生过斑马线被撞亡](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%AE%89%E4%BB%8B%E5%85%A5%E8%B0%83%E6%9F%A5%E9%AB%98%E4%B8%AD%E7%94%9F%E8%BF%87%E6%96%91%E9%A9%AC%E7%BA%BF%E8%A2%AB%E6%92%9E%E4%BA%A1%23) `173.9K 🔥` `+27%`
1. [韩国网友吐槽逐玉](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%BD%91%E5%8F%8B%E5%90%90%E6%A7%BD%E9%80%90%E7%8E%89%23) `173.3K 🔥` `+25%`
1. [郑恺苗苗公开三胎小女儿 (Zheng Kai and Miaomiao reveal their third baby daughter)](https://s.weibo.com/weibo?q=%23%E9%83%91%E6%81%BA%E8%8B%97%E8%8B%97%E5%85%AC%E5%BC%80%E4%B8%89%E8%83%8E%E5%B0%8F%E5%A5%B3%E5%84%BF%23) `169.5K 🔥` `+29%`
1. [小巷人家2 范丞丞卢昱晓](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B62%20%E8%8C%83%E4%B8%9E%E4%B8%9E%E5%8D%A2%E6%98%B1%E6%99%93%23) `168.4K 🔥` `+25%`
1. [刘昊然 周冬雨](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%98%8A%E7%84%B6%20%E5%91%A8%E5%86%AC%E9%9B%A8%23) `166.3K 🔥` `+24%`
1. [唐嫣杨晨 真闺蜜N搭](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E6%9D%A8%E6%99%A8%20%E7%9C%9F%E9%97%BA%E8%9C%9CN%E6%90%AD%23) `161.6K 🔥` `+131%`
1. [正午阳光又要拍宅斗了 (Noon Sunshine is going to film a house fight again)](https://s.weibo.com/weibo?q=%23%E6%AD%A3%E5%8D%88%E9%98%B3%E5%85%89%E5%8F%88%E8%A6%81%E6%8B%8D%E5%AE%85%E6%96%97%E4%BA%86%23) `88.1K 🔥` `+24%`
1. [神21乘组圆满完成第二次出舱活动](https://s.weibo.com/weibo?q=%23%E7%A5%9E21%E4%B9%98%E7%BB%84%E5%9C%86%E6%BB%A1%E5%AE%8C%E6%88%90%E7%AC%AC%E4%BA%8C%E6%AC%A1%E5%87%BA%E8%88%B1%E6%B4%BB%E5%8A%A8%23) `591.7K 🔥`
1. [曝小巷人家2以庄图南李佳为主视角](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B62%E4%BB%A5%E5%BA%84%E5%9B%BE%E5%8D%97%E6%9D%8E%E4%BD%B3%E4%B8%BA%E4%B8%BB%E8%A7%86%E8%A7%92%23) `172.2K 🔥`
1. [伊朗这次不想忍了 (Iran doesn’t want to tolerate it this time)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%BF%99%E6%AC%A1%E4%B8%8D%E6%83%B3%E5%BF%8D%E4%BA%86%23) `168.3K 🔥`
1. [马斯克对所有人工智能公司放狠话](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%AF%B9%E6%89%80%E6%9C%89%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%85%AC%E5%8F%B8%E6%94%BE%E7%8B%A0%E8%AF%9D%23) `149.2K 🔥`
1. [30岁小伙确诊红斑狼疮 (30-year-old man diagnosed with lupus erythematosus)](https://s.weibo.com/weibo?q=%2330%E5%B2%81%E5%B0%8F%E4%BC%99%E7%A1%AE%E8%AF%8A%E7%BA%A2%E6%96%91%E7%8B%BC%E7%96%AE%23) `122.2K 🔥`
1. [齐旻是邓凯临时救场的](https://s.weibo.com/weibo?q=%23%E9%BD%90%E6%97%BB%E6%98%AF%E9%82%93%E5%87%AF%E4%B8%B4%E6%97%B6%E6%95%91%E5%9C%BA%E7%9A%84%23) `108.4K 🔥`
1. [赵丽颖于适 浮华之上 (Zhao Liying is suitable for the glitz and glamor)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E4%BA%8E%E9%80%82%20%E6%B5%AE%E5%8D%8E%E4%B9%8B%E4%B8%8A%23) `73.8K 🔥`
1. [一个烟头夺走22条生命谁该担责](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E7%83%9F%E5%A4%B4%E5%A4%BA%E8%B5%B022%E6%9D%A1%E7%94%9F%E5%91%BD%E8%B0%81%E8%AF%A5%E6%8B%85%E8%B4%A3%23) `271.9K 🔥` `-74%`
1. [OPPO发布会 (OPPO press conference)](https://s.weibo.com/weibo?q=%23OPPO%E5%8F%91%E5%B8%83%E4%BC%9A%23) `176.8K 🔥` `-27%`
1. [省考第一P分诈胡后道歉称自己卑劣 (He got the highest P score in the provincial exam and then apologized and said he was despicable after cheating)](https://s.weibo.com/weibo?q=%23%E7%9C%81%E8%80%83%E7%AC%AC%E4%B8%80P%E5%88%86%E8%AF%88%E8%83%A1%E5%90%8E%E9%81%93%E6%AD%89%E7%A7%B0%E8%87%AA%E5%B7%B1%E5%8D%91%E5%8A%A3%23) `171.9K 🔥` `-78%`
1. [金价银价下跌原因找到了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E9%93%B6%E4%BB%B7%E4%B8%8B%E8%B7%8C%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `102.8K 🔥` `-24%`
1. [AI大厂月薪3万疯抢文科生 (Big AI companies are snapping up liberal arts students with a monthly salary of RMB 30,000)](https://s.weibo.com/weibo?q=%23AI%E5%A4%A7%E5%8E%82%E6%9C%88%E8%96%AA3%E4%B8%87%E7%96%AF%E6%8A%A2%E6%96%87%E7%A7%91%E7%94%9F%23) `94.2K 🔥` `-41%`
1. [谢征樊长玉亲的好响](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%BE%81%E6%A8%8A%E9%95%BF%E7%8E%89%E4%BA%B2%E7%9A%84%E5%A5%BD%E5%93%8D%23) `85.5K 🔥` `-37%`
1. [拉里贾尼发表手写悼词](https://s.weibo.com/weibo?q=%23%E6%8B%89%E9%87%8C%E8%B4%BE%E5%B0%BC%E5%8F%91%E8%A1%A8%E6%89%8B%E5%86%99%E6%82%BC%E8%AF%8D%23) `80.5K 🔥` `-40%`
1. [金价大跌黄金9点开卖9点01分售罄](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%A4%A7%E8%B7%8C%E9%BB%84%E9%87%919%E7%82%B9%E5%BC%80%E5%8D%969%E7%82%B901%E5%88%86%E5%94%AE%E7%BD%84%23) `71.4K 🔥` `-46%`

Updated at 2026-03-17 21:12:50

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
