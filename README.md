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

1. [哈梅内伊遇害 (Khamenei killed)](https://s.weibo.com/weibo?q=%23%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E9%81%87%E5%AE%B3%23) `18.9M 🔥` `NEW`
1. [中方呼吁军事行动立即停止](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%91%BC%E5%90%81%E5%86%9B%E4%BA%8B%E8%A1%8C%E5%8A%A8%E7%AB%8B%E5%8D%B3%E5%81%9C%E6%AD%A2%23) `4.1M 🔥` `NEW`
1. [哈梅内伊的女儿女婿等遇难](https://s.weibo.com/weibo?q=%23%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E7%9A%84%E5%A5%B3%E5%84%BF%E5%A5%B3%E5%A9%BF%E7%AD%89%E9%81%87%E9%9A%BE%23) `3.0M 🔥` `NEW`
1. [国防部回应美方指责中方](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%98%B2%E9%83%A8%E5%9B%9E%E5%BA%94%E7%BE%8E%E6%96%B9%E6%8C%87%E8%B4%A3%E4%B8%AD%E6%96%B9%23) `743.7K 🔥` `NEW`
1. [伊朗政府宣布40天全国哀悼](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%94%BF%E5%BA%9C%E5%AE%A3%E5%B8%8340%E5%A4%A9%E5%85%A8%E5%9B%BD%E5%93%80%E6%82%BC%23) `726.4K 🔥` `NEW`
1. [迪拜帆船酒店在袭击中起火](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E6%8B%9C%E5%B8%86%E8%88%B9%E9%85%92%E5%BA%97%E5%9C%A8%E8%A2%AD%E5%87%BB%E4%B8%AD%E8%B5%B7%E7%81%AB%23) `697.3K 🔥` `NEW`
1. [美伊以冲突](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E4%BB%A5%E5%86%B2%E7%AA%81%23) `622.1K 🔥` `NEW`
1. [美以袭击致伊朗201人死747人伤](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BB%A5%E8%A2%AD%E5%87%BB%E8%87%B4%E4%BC%8A%E6%9C%97201%E4%BA%BA%E6%AD%BB747%E4%BA%BA%E4%BC%A4%23) `617.1K 🔥` `NEW`
1. [伊朗遭袭小学超150人死亡](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%81%AD%E8%A2%AD%E5%B0%8F%E5%AD%A6%E8%B6%85150%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `601.4K 🔥` `NEW`
1. [专家称未来48小时决定金价走势](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E7%A7%B0%E6%9C%AA%E6%9D%A548%E5%B0%8F%E6%97%B6%E5%86%B3%E5%AE%9A%E9%87%91%E4%BB%B7%E8%B5%B0%E5%8A%BF%23) `598.5K 🔥` `NEW`
1. [杨紫爱自己少吃多睡戒色 (Yang Zi loves herself to eat less, sleep more and reboot)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%88%B1%E8%87%AA%E5%B7%B1%E5%B0%91%E5%90%83%E5%A4%9A%E7%9D%A1%E6%88%92%E8%89%B2%23) `405.2K 🔥` `NEW`
1. [伊朗遭袭小学课本上沾着鲜血](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%81%AD%E8%A2%AD%E5%B0%8F%E5%AD%A6%E8%AF%BE%E6%9C%AC%E4%B8%8A%E6%B2%BE%E7%9D%80%E9%B2%9C%E8%A1%80%23) `367.3K 🔥` `NEW`
1. [这样的房子才配收我的房租](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%A0%B7%E7%9A%84%E6%88%BF%E5%AD%90%E6%89%8D%E9%85%8D%E6%94%B6%E6%88%91%E7%9A%84%E6%88%BF%E7%A7%9F%23) `333.4K 🔥` `NEW`
1. [中东空域关闭致全球航空大乱](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%B8%9C%E7%A9%BA%E5%9F%9F%E5%85%B3%E9%97%AD%E8%87%B4%E5%85%A8%E7%90%83%E8%88%AA%E7%A9%BA%E5%A4%A7%E4%B9%B1%23) `325.9K 🔥` `NEW`
1. [哈梅内伊开会时遇袭](https://s.weibo.com/weibo?q=%23%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E5%BC%80%E4%BC%9A%E6%97%B6%E9%81%87%E8%A2%AD%23) `315.1K 🔥` `NEW`
1. [婴儿肚皮开裂多器官裸露环绕在外](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%84%BF%E8%82%9A%E7%9A%AE%E5%BC%80%E8%A3%82%E5%A4%9A%E5%99%A8%E5%AE%98%E8%A3%B8%E9%9C%B2%E7%8E%AF%E7%BB%95%E5%9C%A8%E5%A4%96%23) `313.0K 🔥` `NEW`
1. [解放军进入菲美日澳巡航区域](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E8%BF%9B%E5%85%A5%E8%8F%B2%E7%BE%8E%E6%97%A5%E6%BE%B3%E5%B7%A1%E8%88%AA%E5%8C%BA%E5%9F%9F%23) `259.6K 🔥` `NEW`
1. [最近24小时全球15万人爆仓](https://s.weibo.com/weibo?q=%23%E6%9C%80%E8%BF%9124%E5%B0%8F%E6%97%B6%E5%85%A8%E7%90%8315%E4%B8%87%E4%BA%BA%E7%88%86%E4%BB%93%23) `258.1K 🔥` `NEW`
1. [伊朗足协主席称很难期待世界杯了](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%B6%B3%E5%8D%8F%E4%B8%BB%E5%B8%AD%E7%A7%B0%E5%BE%88%E9%9A%BE%E6%9C%9F%E5%BE%85%E4%B8%96%E7%95%8C%E6%9D%AF%E4%BA%86%23) `245.4K 🔥` `NEW`
1. [18岁少女感染HPV多种高危型号](https://s.weibo.com/weibo?q=%2318%E5%B2%81%E5%B0%91%E5%A5%B3%E6%84%9F%E6%9F%93HPV%E5%A4%9A%E7%A7%8D%E9%AB%98%E5%8D%B1%E5%9E%8B%E5%8F%B7%23) `243.5K 🔥` `NEW`
1. [迪拜国际机场大量旅客滞留 (Massive passengers stranded at Dubai International Airport)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E6%8B%9C%E5%9B%BD%E9%99%85%E6%9C%BA%E5%9C%BA%E5%A4%A7%E9%87%8F%E6%97%85%E5%AE%A2%E6%BB%9E%E7%95%99%23) `219.8K 🔥` `NEW`
1. [一觉醒来伊朗怎样了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%A7%89%E9%86%92%E6%9D%A5%E4%BC%8A%E6%9C%97%E6%80%8E%E6%A0%B7%E4%BA%86%23) `216.9K 🔥` `NEW`
1. [专家称伊朗还有一个撒手锏](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E7%A7%B0%E4%BC%8A%E6%9C%97%E8%BF%98%E6%9C%89%E4%B8%80%E4%B8%AA%E6%92%92%E6%89%8B%E9%94%8F%23) `212.3K 🔥` `NEW`
1. [迪拜棕榈岛一酒店因伊朗袭击起火](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E6%8B%9C%E6%A3%95%E6%A6%88%E5%B2%9B%E4%B8%80%E9%85%92%E5%BA%97%E5%9B%A0%E4%BC%8A%E6%9C%97%E8%A2%AD%E5%87%BB%E8%B5%B7%E7%81%AB%23) `203.3K 🔥` `NEW`
1. [桃黑黑秒下播](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E7%A7%92%E4%B8%8B%E6%92%AD%23) `200.7K 🔥` `NEW`
1. [方大同才二十三MV上线](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%A4%A7%E5%90%8C%E6%89%8D%E4%BA%8C%E5%8D%81%E4%B8%89MV%E4%B8%8A%E7%BA%BF%23) `173.5K 🔥` `NEW`
1. [王安宇 季总点天灯吗](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%20%E5%AD%A3%E6%80%BB%E7%82%B9%E5%A4%A9%E7%81%AF%E5%90%97%23) `161.0K 🔥` `NEW`
1. [美国要的是没有主权的伊朗](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E8%A6%81%E7%9A%84%E6%98%AF%E6%B2%A1%E6%9C%89%E4%B8%BB%E6%9D%83%E7%9A%84%E4%BC%8A%E6%9C%97%23) `152.3K 🔥` `NEW`
1. [在以华人称路上听到警报躲进防空洞](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E4%BB%A5%E5%8D%8E%E4%BA%BA%E7%A7%B0%E8%B7%AF%E4%B8%8A%E5%90%AC%E5%88%B0%E8%AD%A6%E6%8A%A5%E8%BA%B2%E8%BF%9B%E9%98%B2%E7%A9%BA%E6%B4%9E%23) `146.5K 🔥` `NEW`
1. [以色列中国留学生7小时进7次防空洞](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E4%B8%AD%E5%9B%BD%E7%95%99%E5%AD%A6%E7%94%9F7%E5%B0%8F%E6%97%B6%E8%BF%9B7%E6%AC%A1%E9%98%B2%E7%A9%BA%E6%B4%9E%23) `146.2K 🔥` `NEW`
1. [宋佳称脸上的痣从来不遮 (Song Jia said she never covers the moles on her face)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BD%B3%E7%A7%B0%E8%84%B8%E4%B8%8A%E7%9A%84%E7%97%A3%E4%BB%8E%E6%9D%A5%E4%B8%8D%E9%81%AE%23) `142.2K 🔥` `NEW`
1. [孕期常见致畸因子](https://s.weibo.com/weibo?q=%23%E5%AD%95%E6%9C%9F%E5%B8%B8%E8%A7%81%E8%87%B4%E7%95%B8%E5%9B%A0%E5%AD%90%23) `142.2K 🔥` `NEW`
1. [小米VisionGT实车](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3VisionGT%E5%AE%9E%E8%BD%A6%23) `142.2K 🔥` `NEW`
1. [A股黄金原油接下来怎么走](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E9%BB%84%E9%87%91%E5%8E%9F%E6%B2%B9%E6%8E%A5%E4%B8%8B%E6%9D%A5%E6%80%8E%E4%B9%88%E8%B5%B0%23) `142.1K 🔥` `NEW`
1. [我驻以使馆通知中国公民转移撤离登记](https://s.weibo.com/weibo?q=%23%E6%88%91%E9%A9%BB%E4%BB%A5%E4%BD%BF%E9%A6%86%E9%80%9A%E7%9F%A5%E4%B8%AD%E5%9B%BD%E5%85%AC%E6%B0%91%E8%BD%AC%E7%A7%BB%E6%92%A4%E7%A6%BB%E7%99%BB%E8%AE%B0%23) `142.1K 🔥` `NEW`
1. [全国政协会议议程来了](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E6%94%BF%E5%8D%8F%E4%BC%9A%E8%AE%AE%E8%AE%AE%E7%A8%8B%E6%9D%A5%E4%BA%86%23) `142.1K 🔥` `NEW`
1. [刘国梁现场祝贺孙颖莎](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%9B%BD%E6%A2%81%E7%8E%B0%E5%9C%BA%E7%A5%9D%E8%B4%BA%E5%AD%99%E9%A2%96%E8%8E%8E%23) `142.1K 🔥` `NEW`
1. [3月起一批国家标准开始实施 (A number of national standards will be implemented starting from March)](https://s.weibo.com/weibo?q=%233%E6%9C%88%E8%B5%B7%E4%B8%80%E6%89%B9%E5%9B%BD%E5%AE%B6%E6%A0%87%E5%87%86%E5%BC%80%E5%A7%8B%E5%AE%9E%E6%96%BD%23) `3.4M 🔥` `+451%`
1. [小米徕卡全球影像大赛 (Xiaomi Leica Global Imaging Competition)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%BE%95%E5%8D%A1%E5%85%A8%E7%90%83%E5%BD%B1%E5%83%8F%E5%A4%A7%E8%B5%9B%23) `3.3M 🔥` `+631%`
1. [油价或出现历史性飙升 (Oil prices may see historic surge)](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E6%88%96%E5%87%BA%E7%8E%B0%E5%8E%86%E5%8F%B2%E6%80%A7%E9%A3%99%E5%8D%87%23) `620.0K 🔥` `+478%`
1. [椰树 追求胸大是让婴儿有奶吃 (Coconut tree pursues big breasts so that the baby can have milk to drink)](https://s.weibo.com/weibo?q=%23%E6%A4%B0%E6%A0%91%20%E8%BF%BD%E6%B1%82%E8%83%B8%E5%A4%A7%E6%98%AF%E8%AE%A9%E5%A9%B4%E5%84%BF%E6%9C%89%E5%A5%B6%E5%90%83%23) `610.2K 🔥` `+468%`
1. [迪拜国际机场航站楼遭到袭击](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E6%8B%9C%E5%9B%BD%E9%99%85%E6%9C%BA%E5%9C%BA%E8%88%AA%E7%AB%99%E6%A5%BC%E9%81%AD%E5%88%B0%E8%A2%AD%E5%87%BB%23) `605.9K 🔥` `+396%`
1. [伊朗拥有中东最大弹道导弹库存 (Iran has the largest ballistic missile inventory in the Middle East)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8B%A5%E6%9C%89%E4%B8%AD%E4%B8%9C%E6%9C%80%E5%A4%A7%E5%BC%B9%E9%81%93%E5%AF%BC%E5%BC%B9%E5%BA%93%E5%AD%98%23) `295.8K 🔥` `+182%`
1. [中东这场仗越打越大了 (The war in the Middle East is getting bigger and bigger)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%B8%9C%E8%BF%99%E5%9C%BA%E4%BB%97%E8%B6%8A%E6%89%93%E8%B6%8A%E5%A4%A7%E4%BA%86%23) `272.3K 🔥` `+117%`
1. [金价](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `238.9K 🔥` `+91%`
1. [伊朗禁止船只通行霍尔木兹海峡 (Iran bans ships from passing through Strait of Hormuz)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A6%81%E6%AD%A2%E8%88%B9%E5%8F%AA%E9%80%9A%E8%A1%8C%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%23) `212.8K 🔥` `+125%`
1. [迪丽热巴全维语采访](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%85%A8%E7%BB%B4%E8%AF%AD%E9%87%87%E8%AE%BF%23) `146.4K 🔥` `+74%`
1. [母亲回应18岁女儿感染多种高危HPV (Mother responds to 18-year-old daughter’s infection with multiple high-risk HPVs)](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E5%9B%9E%E5%BA%9418%E5%B2%81%E5%A5%B3%E5%84%BF%E6%84%9F%E6%9F%93%E5%A4%9A%E7%A7%8D%E9%AB%98%E5%8D%B1HPV%23) `142.2K 🔥` `+43%`
1. [为什么中国人把这么多钱花在吃上 (Why do Chinese people spend so much money on food?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%8A%8A%E8%BF%99%E4%B9%88%E5%A4%9A%E9%92%B1%E8%8A%B1%E5%9C%A8%E5%90%83%E4%B8%8A%23) `148.8K 🔥`
1. [退税 (tax refund)](https://s.weibo.com/weibo?q=%23%E9%80%80%E7%A8%8E%23) `330.3K 🔥` `-58%`
1. [伊朗发射法塔赫高超音速导弹 (Iran launches Fatah hypersonic missile)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E5%B0%84%E6%B3%95%E5%A1%94%E8%B5%AB%E9%AB%98%E8%B6%85%E9%9F%B3%E9%80%9F%E5%AF%BC%E5%BC%B9%23) `274.7K 🔥` `-51%`

Updated at 2026-03-01 10:27:01

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
