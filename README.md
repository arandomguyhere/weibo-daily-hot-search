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

1. [女子被强拉开车门泼水车内部冒烟 (The woman was forced to open the car door and water was poured on her. There was smoke inside the car.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%A2%AB%E5%BC%BA%E6%8B%89%E5%BC%80%E8%BD%A6%E9%97%A8%E6%B3%BC%E6%B0%B4%E8%BD%A6%E5%86%85%E9%83%A8%E5%86%92%E7%83%9F%23) `1.1M 🔥` `NEW`
1. [河南一景区露脚踝大象系演员扮演](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%80%E6%99%AF%E5%8C%BA%E9%9C%B2%E8%84%9A%E8%B8%9D%E5%A4%A7%E8%B1%A1%E7%B3%BB%E6%BC%94%E5%91%98%E6%89%AE%E6%BC%94%23) `813.6K 🔥` `NEW`
1. [孙杨三连追问张豆豆](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E4%B8%89%E8%BF%9E%E8%BF%BD%E9%97%AE%E5%BC%A0%E8%B1%86%E8%B1%86%23) `314.7K 🔥` `NEW`
1. [乙肝抗体没了要不要补打疫苗](https://s.weibo.com/weibo?q=%23%E4%B9%99%E8%82%9D%E6%8A%97%E4%BD%93%E6%B2%A1%E4%BA%86%E8%A6%81%E4%B8%8D%E8%A6%81%E8%A1%A5%E6%89%93%E7%96%AB%E8%8B%97%23) `295.3K 🔥` `NEW`
1. [中方要求两大航司立即停止巴拿马港口运营](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E8%A6%81%E6%B1%82%E4%B8%A4%E5%A4%A7%E8%88%AA%E5%8F%B8%E7%AB%8B%E5%8D%B3%E5%81%9C%E6%AD%A2%E5%B7%B4%E6%8B%BF%E9%A9%AC%E6%B8%AF%E5%8F%A3%E8%BF%90%E8%90%A5%23) `279.2K 🔥` `NEW`
1. [赵子琪质问芒果TV](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E8%B4%A8%E9%97%AE%E8%8A%92%E6%9E%9CTV%23) `265.2K 🔥` `NEW`
1. [曝鹤男年龄造假](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%B9%A4%E7%94%B7%E5%B9%B4%E9%BE%84%E9%80%A0%E5%81%87%23) `145.8K 🔥` `NEW`
1. [赵子琪 是逼我爆所有的料吗](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%20%E6%98%AF%E9%80%BC%E6%88%91%E7%88%86%E6%89%80%E6%9C%89%E7%9A%84%E6%96%99%E5%90%97%23) `139.3K 🔥` `NEW`
1. [伊朗总统感谢中国](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E6%84%9F%E8%B0%A2%E4%B8%AD%E5%9B%BD%23) `136.9K 🔥` `NEW`
1. [刘耀文评论自己的第一条微博](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E8%AF%84%E8%AE%BA%E8%87%AA%E5%B7%B1%E7%9A%84%E7%AC%AC%E4%B8%80%E6%9D%A1%E5%BE%AE%E5%8D%9A%23) `132.3K 🔥` `NEW`
1. [小米史上最大电池手机曝光 (Xiaomi’s phone with the largest battery in history exposed)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%8F%B2%E4%B8%8A%E6%9C%80%E5%A4%A7%E7%94%B5%E6%B1%A0%E6%89%8B%E6%9C%BA%E6%9B%9D%E5%85%89%23) `113.6K 🔥` `NEW`
1. [越吃越胖素菜名单](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E5%90%83%E8%B6%8A%E8%83%96%E7%B4%A0%E8%8F%9C%E5%90%8D%E5%8D%95%23) `113.4K 🔥` `NEW`
1. [建议大家自己做饭](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E8%87%AA%E5%B7%B1%E5%81%9A%E9%A5%AD%23) `112.6K 🔥` `NEW`
1. [杨国福门店称重把斤按公斤算](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%9B%BD%E7%A6%8F%E9%97%A8%E5%BA%97%E7%A7%B0%E9%87%8D%E6%8A%8A%E6%96%A4%E6%8C%89%E5%85%AC%E6%96%A4%E7%AE%97%23) `112.0K 🔥` `NEW`
1. [徐海乔郭晓婷蜜语纪官配](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B5%B7%E4%B9%94%E9%83%AD%E6%99%93%E5%A9%B7%E8%9C%9C%E8%AF%AD%E7%BA%AA%E5%AE%98%E9%85%8D%23) `111.5K 🔥` `NEW`
1. [吴向飞发李荣浩相关情况说明](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%90%91%E9%A3%9E%E5%8F%91%E6%9D%8E%E8%8D%A3%E6%B5%A9%E7%9B%B8%E5%85%B3%E6%83%85%E5%86%B5%E8%AF%B4%E6%98%8E%23) `111.2K 🔥` `NEW`
1. [黄金大起大落](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%A4%A7%E8%B5%B7%E5%A4%A7%E8%90%BD%23) `110.8K 🔥` `NEW`
1. [1岁半宝宝腹痛查出肝功能受损](https://s.weibo.com/weibo?q=%231%E5%B2%81%E5%8D%8A%E5%AE%9D%E5%AE%9D%E8%85%B9%E7%97%9B%E6%9F%A5%E5%87%BA%E8%82%9D%E5%8A%9F%E8%83%BD%E5%8F%97%E6%8D%9F%23) `109.5K 🔥` `NEW`
1. [皇马两大球星场上吵架](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%AC%E4%B8%A4%E5%A4%A7%E7%90%83%E6%98%9F%E5%9C%BA%E4%B8%8A%E5%90%B5%E6%9E%B6%23) `107.2K 🔥` `NEW`
1. [迪丽热巴白日提灯全集有广](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E5%85%A8%E9%9B%86%E6%9C%89%E5%B9%BF%23) `96.9K 🔥` `NEW`
1. [宠物医院给狗洗澡把狗吊死 (The pet hospital bathes the dog and then hangs it to death)](https://s.weibo.com/weibo?q=%23%E5%AE%A0%E7%89%A9%E5%8C%BB%E9%99%A2%E7%BB%99%E7%8B%97%E6%B4%97%E6%BE%A1%E6%8A%8A%E7%8B%97%E5%90%8A%E6%AD%BB%23) `96.7K 🔥` `NEW`
1. [洛克王国](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E5%85%8B%E7%8E%8B%E5%9B%BD%23) `92.5K 🔥` `NEW`
1. [村干部曾向B太证实阿吉情况属实](https://s.weibo.com/weibo?q=%23%E6%9D%91%E5%B9%B2%E9%83%A8%E6%9B%BE%E5%90%91B%E5%A4%AA%E8%AF%81%E5%AE%9E%E9%98%BF%E5%90%89%E6%83%85%E5%86%B5%E5%B1%9E%E5%AE%9E%23) `91.9K 🔥` `NEW`
1. [现在小学生强得可怕](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%8F%E5%AD%A6%E7%94%9F%E5%BC%BA%E5%BE%97%E5%8F%AF%E6%80%95%23) `84.0K 🔥` `NEW`
1. [金银价格冲高回落](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%93%B6%E4%BB%B7%E6%A0%BC%E5%86%B2%E9%AB%98%E5%9B%9E%E8%90%BD%23) `81.2K 🔥` `NEW`
1. [伊朗总统连发数问怒斥美国凭什么](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E8%BF%9E%E5%8F%91%E6%95%B0%E9%97%AE%E6%80%92%E6%96%A5%E7%BE%8E%E5%9B%BD%E5%87%AD%E4%BB%80%E4%B9%88%23) `78.5K 🔥` `NEW`
1. [永辉向大连富豪追讨36亿尾款](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E8%BE%89%E5%90%91%E5%A4%A7%E8%BF%9E%E5%AF%8C%E8%B1%AA%E8%BF%BD%E8%AE%A836%E4%BA%BF%E5%B0%BE%E6%AC%BE%23) `76.6K 🔥` `NEW`
1. [皇马球员赛后集体抗议裁判](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%AC%E7%90%83%E5%91%98%E8%B5%9B%E5%90%8E%E9%9B%86%E4%BD%93%E6%8A%97%E8%AE%AE%E8%A3%81%E5%88%A4%23) `75.5K 🔥` `NEW`
1. [魏建军力排众议兑现网友定名权](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%BB%BA%E5%86%9B%E5%8A%9B%E6%8E%92%E4%BC%97%E8%AE%AE%E5%85%91%E7%8E%B0%E7%BD%91%E5%8F%8B%E5%AE%9A%E5%90%8D%E6%9D%83%23) `73.2K 🔥` `NEW`
1. [广交会增设智能穿戴等9大专区](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%BA%A4%E4%BC%9A%E5%A2%9E%E8%AE%BE%E6%99%BA%E8%83%BD%E7%A9%BF%E6%88%B4%E7%AD%899%E5%A4%A7%E4%B8%93%E5%8C%BA%23) `633.2K 🔥` `+25%`
1. [金莎孙丞潇试婚纱压价 (Jinsha Sun Chengxiao tries on wedding dress and lowers the price)](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E5%AD%99%E4%B8%9E%E6%BD%87%E8%AF%95%E5%A9%9A%E7%BA%B1%E5%8E%8B%E4%BB%B7%23) `393.3K 🔥` `+352%`
1. [被破窗取AED车辆获免费换车窗](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%A0%B4%E7%AA%97%E5%8F%96AED%E8%BD%A6%E8%BE%86%E8%8E%B7%E5%85%8D%E8%B4%B9%E6%8D%A2%E8%BD%A6%E7%AA%97%23) `143.1K 🔥` `+61%`
1. [美军妄想威慑中国内陆](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E5%A6%84%E6%83%B3%E5%A8%81%E6%85%91%E4%B8%AD%E5%9B%BD%E5%86%85%E9%99%86%23) `141.0K 🔥` `+56%`
1. [何润东谈张凌赫被评粉底液将军 (Peter Ho talks about Zhang Linghe being criticized as a foundation general)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E8%B0%88%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%A2%AB%E8%AF%84%E7%B2%89%E5%BA%95%E6%B6%B2%E5%B0%86%E5%86%9B%23) `112.9K 🔥` `+49%`
1. [痞幼胖了17斤](https://s.weibo.com/weibo?q=%23%E7%97%9E%E5%B9%BC%E8%83%96%E4%BA%8617%E6%96%A4%23) `82.2K 🔥` `+103%`
1. [法国将不义之财归还被抢掠的中国 (France returns ill-gotten gains to plundered China)](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E5%B0%86%E4%B8%8D%E4%B9%89%E4%B9%8B%E8%B4%A2%E5%BD%92%E8%BF%98%E8%A2%AB%E6%8A%A2%E6%8E%A0%E7%9A%84%E4%B8%AD%E5%9B%BD%23) `375.4K 🔥`
1. [男子遭开门杀碾压身亡目击者发声 (Man was hit by a door and crushed to death. Witnesses speak out)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%81%AD%E5%BC%80%E9%97%A8%E6%9D%80%E7%A2%BE%E5%8E%8B%E8%BA%AB%E4%BA%A1%E7%9B%AE%E5%87%BB%E8%80%85%E5%8F%91%E5%A3%B0%23) `135.2K 🔥`
1. [印度3000万人要没饭吃](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A63000%E4%B8%87%E4%BA%BA%E8%A6%81%E6%B2%A1%E9%A5%AD%E5%90%83%23) `112.4K 🔥`
1. [刘耀文提到了张真源SLY乐队](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E6%8F%90%E5%88%B0%E4%BA%86%E5%BC%A0%E7%9C%9F%E6%BA%90SLY%E4%B9%90%E9%98%9F%23) `105.3K 🔥`
1. [印度裔男子假意助人实施二次性侵](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E8%A3%94%E7%94%B7%E5%AD%90%E5%81%87%E6%84%8F%E5%8A%A9%E4%BA%BA%E5%AE%9E%E6%96%BD%E4%BA%8C%E6%AC%A1%E6%80%A7%E4%BE%B5%23) `103.2K 🔥`
1. [欧冠4强出炉](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A04%E5%BC%BA%E5%87%BA%E7%82%89%23) `93.7K 🔥`
1. [谈莉娜孕35周胎位不正产检落泪](https://s.weibo.com/weibo?q=%23%E8%B0%88%E8%8E%89%E5%A8%9C%E5%AD%9535%E5%91%A8%E8%83%8E%E4%BD%8D%E4%B8%8D%E6%AD%A3%E4%BA%A7%E6%A3%80%E8%90%BD%E6%B3%AA%23) `83.3K 🔥`
1. [樊振东英文告别主场球迷 (Fan Zhendong bid farewell to home fans in English)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%8B%B1%E6%96%87%E5%91%8A%E5%88%AB%E4%B8%BB%E5%9C%BA%E7%90%83%E8%BF%B7%23) `146.9K 🔥` `-84%`
1. [阚清子孙怡还没和好吗 (Kan Qingzi and Sun Yi haven't reconciled yet?)](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E5%AD%99%E6%80%A1%E8%BF%98%E6%B2%A1%E5%92%8C%E5%A5%BD%E5%90%97%23) `134.2K 🔥` `-38%`
1. [80万开店倒闭又投40万开店小伙发声 (A shop that opened with RMB 800,000 went bankrupt and another guy who invested RMB 400,000 to open a shop speaks out.)](https://s.weibo.com/weibo?q=%2380%E4%B8%87%E5%BC%80%E5%BA%97%E5%80%92%E9%97%AD%E5%8F%88%E6%8A%9540%E4%B8%87%E5%BC%80%E5%BA%97%E5%B0%8F%E4%BC%99%E5%8F%91%E5%A3%B0%23) `116.4K 🔥` `-82%`
1. [拜仁4比3皇马](https://s.weibo.com/weibo?q=%23%E6%8B%9C%E4%BB%814%E6%AF%943%E7%9A%87%E9%A9%AC%23) `106.2K 🔥` `-49%`
1. [多条东南亚航线突然取消原因曝光 (The reasons for the sudden cancellation of many Southeast Asian routes are exposed)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%9D%A1%E4%B8%9C%E5%8D%97%E4%BA%9A%E8%88%AA%E7%BA%BF%E7%AA%81%E7%84%B6%E5%8F%96%E6%B6%88%E5%8E%9F%E5%9B%A0%E6%9B%9D%E5%85%89%23) `89.5K 🔥` `-50%`
1. [孟子义李昀锐 等风热吻你 (Meng Ziyi and Li Yunrui waiting for the wind to kiss you passionately)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%20%E7%AD%89%E9%A3%8E%E7%83%AD%E5%90%BB%E4%BD%A0%23) `87.5K 🔥` `-29%`
1. [24岁抗癌博主徐平安去世](https://s.weibo.com/weibo?q=%2324%E5%B2%81%E6%8A%97%E7%99%8C%E5%8D%9A%E4%B8%BB%E5%BE%90%E5%B9%B3%E5%AE%89%E5%8E%BB%E4%B8%96%23) `79.0K 🔥` `-64%`
1. [美国将退还超1万亿元关税 (The United States will refund more than 1 trillion yuan in tariffs)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%B0%86%E9%80%80%E8%BF%98%E8%B6%851%E4%B8%87%E4%BA%BF%E5%85%83%E5%85%B3%E7%A8%8E%23) `73.6K 🔥` `-44%`

Updated at 2026-04-16 09:13:13

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
