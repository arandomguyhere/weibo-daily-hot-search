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

1. [多平台公然传播被禁多年的暗黑动漫 (Dark anime that has been banned for many years is openly disseminated on multiple platforms)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%B9%B3%E5%8F%B0%E5%85%AC%E7%84%B6%E4%BC%A0%E6%92%AD%E8%A2%AB%E7%A6%81%E5%A4%9A%E5%B9%B4%E7%9A%84%E6%9A%97%E9%BB%91%E5%8A%A8%E6%BC%AB%23) `1.5M 🔥` `NEW`
1. [优质网络主播中国行山西行](https://s.weibo.com/weibo?q=%23%E4%BC%98%E8%B4%A8%E7%BD%91%E7%BB%9C%E4%B8%BB%E6%92%AD%E4%B8%AD%E5%9B%BD%E8%A1%8C%E5%B1%B1%E8%A5%BF%E8%A1%8C%23) `939.2K 🔥` `NEW`
1. [温峥嵘二公选人被拒绝五次](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B3%A5%E5%B5%98%E4%BA%8C%E5%85%AC%E9%80%89%E4%BA%BA%E8%A2%AB%E6%8B%92%E7%BB%9D%E4%BA%94%E6%AC%A1%23) `936.3K 🔥` `NEW`
1. [央视调查暗黑动漫正侵蚀青少年](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E8%B0%83%E6%9F%A5%E6%9A%97%E9%BB%91%E5%8A%A8%E6%BC%AB%E6%AD%A3%E4%BE%B5%E8%9A%80%E9%9D%92%E5%B0%91%E5%B9%B4%23) `934.0K 🔥` `NEW`
1. [辛芷蕾代言大众含金量飙升](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E8%8A%B7%E8%95%BE%E4%BB%A3%E8%A8%80%E5%A4%A7%E4%BC%97%E5%90%AB%E9%87%91%E9%87%8F%E9%A3%99%E5%8D%87%23) `887.8K 🔥` `NEW`
1. [男子4.5万月薪工作被前公司搅黄](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%904.5%E4%B8%87%E6%9C%88%E8%96%AA%E5%B7%A5%E4%BD%9C%E8%A2%AB%E5%89%8D%E5%85%AC%E5%8F%B8%E6%90%85%E9%BB%84%23) `625.6K 🔥` `NEW`
1. [杭州用一个针头给15人采血事件后续](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E7%94%A8%E4%B8%80%E4%B8%AA%E9%92%88%E5%A4%B4%E7%BB%9915%E4%BA%BA%E9%87%87%E8%A1%80%E4%BA%8B%E4%BB%B6%E5%90%8E%E7%BB%AD%23) `622.5K 🔥` `NEW`
1. [摊主因借给学生手机被家长逼到下跪](https://s.weibo.com/weibo?q=%23%E6%91%8A%E4%B8%BB%E5%9B%A0%E5%80%9F%E7%BB%99%E5%AD%A6%E7%94%9F%E6%89%8B%E6%9C%BA%E8%A2%AB%E5%AE%B6%E9%95%BF%E9%80%BC%E5%88%B0%E4%B8%8B%E8%B7%AA%23) `596.3K 🔥` `NEW`
1. [白象品牌代言人孙颖莎](https://s.weibo.com/weibo?q=%23%E7%99%BD%E8%B1%A1%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%E5%AD%99%E9%A2%96%E8%8E%8E%23) `523.2K 🔥` `NEW`
1. [周杰伦 者来父](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%20%E8%80%85%E6%9D%A5%E7%88%B6%23) `521.1K 🔥` `NEW`
1. [十五五首季中国经济观察 (China Economic Observation for the First Quarter of the 15th Five-Year Plan)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E9%A6%96%E5%AD%A3%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E8%A7%82%E5%AF%9F%23) `460.4K 🔥` `NEW`
1. [王濛说没人能管李小冉](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E8%AF%B4%E6%B2%A1%E4%BA%BA%E8%83%BD%E7%AE%A1%E6%9D%8E%E5%B0%8F%E5%86%89%23) `451.8K 🔥` `NEW`
1. [律师谈中国女生在韩遭男子性骚扰](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E8%B0%88%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E5%9C%A8%E9%9F%A9%E9%81%AD%E7%94%B7%E5%AD%90%E6%80%A7%E9%AA%9A%E6%89%B0%23) `350.1K 🔥` `NEW`
1. [医生和老师养孩子的区别](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%92%8C%E8%80%81%E5%B8%88%E5%85%BB%E5%AD%A9%E5%AD%90%E7%9A%84%E5%8C%BA%E5%88%AB%23) `341.9K 🔥` `NEW`
1. [橘子海乐队称华为侵权](https://s.weibo.com/weibo?q=%23%E6%A9%98%E5%AD%90%E6%B5%B7%E4%B9%90%E9%98%9F%E7%A7%B0%E5%8D%8E%E4%B8%BA%E4%BE%B5%E6%9D%83%23) `320.7K 🔥` `NEW`
1. [泼水节 变味儿](https://s.weibo.com/weibo?q=%23%E6%B3%BC%E6%B0%B4%E8%8A%82%20%E5%8F%98%E5%91%B3%E5%84%BF%23) `302.9K 🔥` `NEW`
1. [猝死的年轻人大多有两个共同点](https://s.weibo.com/weibo?q=%23%E7%8C%9D%E6%AD%BB%E7%9A%84%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%A4%A7%E5%A4%9A%E6%9C%89%E4%B8%A4%E4%B8%AA%E5%85%B1%E5%90%8C%E7%82%B9%23) `261.4K 🔥` `NEW`
1. [乘风2026二公队长名单](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E4%BA%8C%E5%85%AC%E9%98%9F%E9%95%BF%E5%90%8D%E5%8D%95%23) `232.7K 🔥` `NEW`
1. [大山女孩为何能骗到多位网红帮扶](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%B1%B1%E5%A5%B3%E5%AD%A9%E4%B8%BA%E4%BD%95%E8%83%BD%E9%AA%97%E5%88%B0%E5%A4%9A%E4%BD%8D%E7%BD%91%E7%BA%A2%E5%B8%AE%E6%89%B6%23) `219.2K 🔥` `NEW`
1. [老师低血糖晕倒前被学生稳稳托住](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%B8%88%E4%BD%8E%E8%A1%80%E7%B3%96%E6%99%95%E5%80%92%E5%89%8D%E8%A2%AB%E5%AD%A6%E7%94%9F%E7%A8%B3%E7%A8%B3%E6%89%98%E4%BD%8F%23) `216.0K 🔥` `NEW`
1. [狗 出大事了没空跟你解释 (Dog, something big happened and I don’t have time to explain to you.)](https://s.weibo.com/weibo?q=%23%E7%8B%97%20%E5%87%BA%E5%A4%A7%E4%BA%8B%E4%BA%86%E6%B2%A1%E7%A9%BA%E8%B7%9F%E4%BD%A0%E8%A7%A3%E9%87%8A%23) `214.5K 🔥` `NEW`
1. [神仙肉 念相思](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E4%BB%99%E8%82%89%20%E5%BF%B5%E7%9B%B8%E6%80%9D%23) `211.3K 🔥` `NEW`
1. [何以中国屋檐上的文脉](https://s.weibo.com/weibo?q=%23%E4%BD%95%E4%BB%A5%E4%B8%AD%E5%9B%BD%E5%B1%8B%E6%AA%90%E4%B8%8A%E7%9A%84%E6%96%87%E8%84%89%23) `203.9K 🔥` `NEW`
1. [曾沛慈个人喜爱度第五](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E4%B8%AA%E4%BA%BA%E5%96%9C%E7%88%B1%E5%BA%A6%E7%AC%AC%E4%BA%94%23) `200.5K 🔥` `NEW`
1. [时代峰峻助理 从一代干到四代](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%8A%A9%E7%90%86%20%E4%BB%8E%E4%B8%80%E4%BB%A3%E5%B9%B2%E5%88%B0%E5%9B%9B%E4%BB%A3%23) `193.7K 🔥` `NEW`
1. [泰国泼水节216人死亡](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%B3%BC%E6%B0%B4%E8%8A%82216%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `937.5K 🔥` `+90%`
1. [孙怡动用人脉当上了最不想当的队长](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E5%8A%A8%E7%94%A8%E4%BA%BA%E8%84%89%E5%BD%93%E4%B8%8A%E4%BA%86%E6%9C%80%E4%B8%8D%E6%83%B3%E5%BD%93%E7%9A%84%E9%98%9F%E9%95%BF%23) `882.6K 🔥` `+531%`
1. [被阴天的紫外线背刺了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E9%98%B4%E5%A4%A9%E7%9A%84%E7%B4%AB%E5%A4%96%E7%BA%BF%E8%83%8C%E5%88%BA%E4%BA%86%23) `667.7K 🔥` `+770%`
1. [雷军称考虑过出大众配置车型](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E7%A7%B0%E8%80%83%E8%99%91%E8%BF%87%E5%87%BA%E5%A4%A7%E4%BC%97%E9%85%8D%E7%BD%AE%E8%BD%A6%E5%9E%8B%23) `663.6K 🔥` `+715%`
1. [雷军回应是否做10万以内车型](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94%E6%98%AF%E5%90%A6%E5%81%9A10%E4%B8%87%E4%BB%A5%E5%86%85%E8%BD%A6%E5%9E%8B%23) `648.0K 🔥` `+350%`
1. [单依纯王菲 造型 (Shan Yichun Faye Wong styling)](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E7%8E%8B%E8%8F%B2%20%E9%80%A0%E5%9E%8B%23) `626.2K 🔥` `+339%`
1. [郭敬明 选秀](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%20%E9%80%89%E7%A7%80%23) `624.9K 🔥` `+341%`
1. [章若楠工作室喊话剧方](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%96%8A%E8%AF%9D%E5%89%A7%E6%96%B9%23) `621.6K 🔥` `+373%`
1. [爸爸 又怎么了我的大小姐](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%20%E5%8F%88%E6%80%8E%E4%B9%88%E4%BA%86%E6%88%91%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%A7%90%23) `524.2K 🔥` `+293%`
1. [鹿晗工作室 躺平](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E8%BA%BA%E5%B9%B3%23) `522.2K 🔥` `+295%`
1. [主体性好强的一句一下就被点醒了](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E4%BD%93%E6%80%A7%E5%A5%BD%E5%BC%BA%E7%9A%84%E4%B8%80%E5%8F%A5%E4%B8%80%E4%B8%8B%E5%B0%B1%E8%A2%AB%E7%82%B9%E9%86%92%E4%BA%86%23) `479.7K 🔥` `+265%`
1. [朴春手写信回应曝朴山多拉涉毒](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E6%98%A5%E6%89%8B%E5%86%99%E4%BF%A1%E5%9B%9E%E5%BA%94%E6%9B%9D%E6%9C%B4%E5%B1%B1%E5%A4%9A%E6%8B%89%E6%B6%89%E6%AF%92%23) `434.0K 🔥` `+217%`
1. [中国女生在韩遭男子性骚扰被劝和解](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E5%9C%A8%E9%9F%A9%E9%81%AD%E7%94%B7%E5%AD%90%E6%80%A7%E9%AA%9A%E6%89%B0%E8%A2%AB%E5%8A%9D%E5%92%8C%E8%A7%A3%23) `358.8K 🔥` `+163%`
1. [向太每月给向华强前妻10万赡养费](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E6%AF%8F%E6%9C%88%E7%BB%99%E5%90%91%E5%8D%8E%E5%BC%BA%E5%89%8D%E5%A6%BB10%E4%B8%87%E8%B5%A1%E5%85%BB%E8%B4%B9%23) `345.4K 🔥` `+156%`
1. [以色列剧本被撕了](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%89%A7%E6%9C%AC%E8%A2%AB%E6%92%95%E4%BA%86%23) `343.1K 🔥` `+22%`
1. [李纯爸爸回应李纯马頔恋情曝光 (Li Chun’s father responds to Li Chun and Ma Di’s relationship exposure)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BA%AF%E7%88%B8%E7%88%B8%E5%9B%9E%E5%BA%94%E6%9D%8E%E7%BA%AF%E9%A9%AC%E9%A0%94%E6%81%8B%E6%83%85%E6%9B%9D%E5%85%89%23) `267.0K 🔥` `+92%`
1. [北影节主持人裙子 吸雨变色 (Beijing Film Festival host's skirt changes color after absorbing rain)](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%BD%B1%E8%8A%82%E4%B8%BB%E6%8C%81%E4%BA%BA%E8%A3%99%E5%AD%90%20%E5%90%B8%E9%9B%A8%E5%8F%98%E8%89%B2%23) `252.0K 🔥` `+88%`
1. [曝清清性骚扰 (Qingqing sexual harassment exposed)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%B8%85%E6%B8%85%E6%80%A7%E9%AA%9A%E6%89%B0%23) `230.6K 🔥` `+78%`
1. [阿拉蕾长这么高了 (Arale has grown so tall)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%8B%89%E8%95%BE%E9%95%BF%E8%BF%99%E4%B9%88%E9%AB%98%E4%BA%86%23) `218.4K 🔥` `+65%`
1. [朴彩英宋雨琦活动生图 (Park Caiying and Song Yuqi activity pictures)](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%BD%A9%E8%8B%B1%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%B4%BB%E5%8A%A8%E7%94%9F%E5%9B%BE%23) `207.9K 🔥` `+60%`
1. [中方否决涉霍尔木兹海峡决议草案](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%90%A6%E5%86%B3%E6%B6%89%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E5%86%B3%E8%AE%AE%E8%8D%89%E6%A1%88%23) `184.2K 🔥` `+31%`
1. [TF四代 八小只](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%20%E5%85%AB%E5%B0%8F%E5%8F%AA%23) `177.3K 🔥` `+38%`
1. [爷爷生前录音赠孙女百万遗产无效 (Grandpa’s recording of a million-dollar inheritance gift to his granddaughter is invalid)](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E7%94%9F%E5%89%8D%E5%BD%95%E9%9F%B3%E8%B5%A0%E5%AD%99%E5%A5%B3%E7%99%BE%E4%B8%87%E9%81%97%E4%BA%A7%E6%97%A0%E6%95%88%23) `987.7K 🔥`
1. [李小冉一公第一名](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E4%B8%80%E5%85%AC%E7%AC%AC%E4%B8%80%E5%90%8D%23) `639.8K 🔥`
1. [章若楠片场拍戏走神 (Zhang Ruonan was distracted during filming on the set)](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E8%8B%A5%E6%A5%A0%E7%89%87%E5%9C%BA%E6%8B%8D%E6%88%8F%E8%B5%B0%E7%A5%9E%23) `302.6K 🔥`

Updated at 2026-04-17 16:08:46

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
