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

1. [AG夺得CFPL第十三冠 (AG wins the 13th CFPL championship)](https://s.weibo.com/weibo?q=%23AG%E5%A4%BA%E5%BE%97CFPL%E7%AC%AC%E5%8D%81%E4%B8%89%E5%86%A0%23) `332.3K 🔥` `NEW`
1. [拼多多用暴力软对抗手段阻碍监管执法](https://s.weibo.com/weibo?q=%23%E6%8B%BC%E5%A4%9A%E5%A4%9A%E7%94%A8%E6%9A%B4%E5%8A%9B%E8%BD%AF%E5%AF%B9%E6%8A%97%E6%89%8B%E6%AE%B5%E9%98%BB%E7%A2%8D%E7%9B%91%E7%AE%A1%E6%89%A7%E6%B3%95%23) `231.0K 🔥` `NEW`
1. [深圳一小学老师批改作业时崩溃大哭](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E4%B8%80%E5%B0%8F%E5%AD%A6%E8%80%81%E5%B8%88%E6%89%B9%E6%94%B9%E4%BD%9C%E4%B8%9A%E6%97%B6%E5%B4%A9%E6%BA%83%E5%A4%A7%E5%93%AD%23) `212.6K 🔥` `NEW`
1. [萧蔷翻温峥嵘白眼](https://s.weibo.com/weibo?q=%23%E8%90%A7%E8%94%B7%E7%BF%BB%E6%B8%A9%E5%B3%A5%E5%B5%98%E7%99%BD%E7%9C%BC%23) `209.4K 🔥` `NEW`
1. [张婉婷坐飞机惊恐发作差点被驱逐](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%89%E5%A9%B7%E5%9D%90%E9%A3%9E%E6%9C%BA%E6%83%8A%E6%81%90%E5%8F%91%E4%BD%9C%E5%B7%AE%E7%82%B9%E8%A2%AB%E9%A9%B1%E9%80%90%23) `182.5K 🔥` `NEW`
1. [北约30国大使集体访日](https://s.weibo.com/weibo?q=%23%E5%8C%97%E7%BA%A630%E5%9B%BD%E5%A4%A7%E4%BD%BF%E9%9B%86%E4%BD%93%E8%AE%BF%E6%97%A5%23) `163.0K 🔥` `NEW`
1. [日本可短时间内造出原子弹](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%8F%AF%E7%9F%AD%E6%97%B6%E9%97%B4%E5%86%85%E9%80%A0%E5%87%BA%E5%8E%9F%E5%AD%90%E5%BC%B9%23) `158.0K 🔥` `NEW`
1. [日本远程导弹射程覆盖中国军港](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%BF%9C%E7%A8%8B%E5%AF%BC%E5%BC%B9%E5%B0%84%E7%A8%8B%E8%A6%86%E7%9B%96%E4%B8%AD%E5%9B%BD%E5%86%9B%E6%B8%AF%23) `147.3K 🔥` `NEW`
1. [日媒集体噤声](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%AA%92%E9%9B%86%E4%BD%93%E5%99%A4%E5%A3%B0%23) `142.5K 🔥` `NEW`
1. [内耗人的终极解药](https://s.weibo.com/weibo?q=%23%E5%86%85%E8%80%97%E4%BA%BA%E7%9A%84%E7%BB%88%E6%9E%81%E8%A7%A3%E8%8D%AF%23) `137.2K 🔥` `NEW`
1. [富人付费狙杀平民偏好儿童年轻女性 (Rich people pay to kill civilians, preferring children and young women)](https://s.weibo.com/weibo?q=%23%E5%AF%8C%E4%BA%BA%E4%BB%98%E8%B4%B9%E7%8B%99%E6%9D%80%E5%B9%B3%E6%B0%91%E5%81%8F%E5%A5%BD%E5%84%BF%E7%AB%A5%E5%B9%B4%E8%BD%BB%E5%A5%B3%E6%80%A7%23) `128.9K 🔥` `NEW`
1. [张奕然一口气14个舞台](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A5%95%E7%84%B6%E4%B8%80%E5%8F%A3%E6%B0%9414%E4%B8%AA%E8%88%9E%E5%8F%B0%23) `111.4K 🔥` `NEW`
1. [暖阳送镜星元](https://s.weibo.com/weibo?q=%23%E6%9A%96%E9%98%B3%E9%80%81%E9%95%9C%E6%98%9F%E5%85%83%23) `106.6K 🔥` `NEW`
1. [老板在抓药顾客在买药猫咪在吃药](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%9D%BF%E5%9C%A8%E6%8A%93%E8%8D%AF%E9%A1%BE%E5%AE%A2%E5%9C%A8%E4%B9%B0%E8%8D%AF%E7%8C%AB%E5%92%AA%E5%9C%A8%E5%90%83%E8%8D%AF%23) `394.6K 🔥` `+40%`
1. [五一航班大面积取消 (Widespread cancellation of May Day flights)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E8%88%AA%E7%8F%AD%E5%A4%A7%E9%9D%A2%E7%A7%AF%E5%8F%96%E6%B6%88%23) `1.1M 🔥`
1. [解放军凌晨四点管控日舰过航台湾海峡](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E5%87%8C%E6%99%A8%E5%9B%9B%E7%82%B9%E7%AE%A1%E6%8E%A7%E6%97%A5%E8%88%B0%E8%BF%87%E8%88%AA%E5%8F%B0%E6%B9%BE%E6%B5%B7%E5%B3%A1%23) `808.7K 🔥`
1. [中国硬核新成就刷屏 (China’s new hard-core achievements hit the screen)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%A1%AC%E6%A0%B8%E6%96%B0%E6%88%90%E5%B0%B1%E5%88%B7%E5%B1%8F%23) `656.3K 🔥`
1. [女子机场两次拒绝帮陌生人带行李 (Woman refused to help strangers with luggage at airport twice)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%9C%BA%E5%9C%BA%E4%B8%A4%E6%AC%A1%E6%8B%92%E7%BB%9D%E5%B8%AE%E9%99%8C%E7%94%9F%E4%BA%BA%E5%B8%A6%E8%A1%8C%E6%9D%8E%23) `654.8K 🔥`
1. [伊朗恢复对霍尔木兹海峡的控制](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%81%A2%E5%A4%8D%E5%AF%B9%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E7%9A%84%E6%8E%A7%E5%88%B6%23) `653.7K 🔥`
1. [怪不得韩国人爱去张家界旅游](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E9%9F%A9%E5%9B%BD%E4%BA%BA%E7%88%B1%E5%8E%BB%E5%BC%A0%E5%AE%B6%E7%95%8C%E6%97%85%E6%B8%B8%23) `653.7K 🔥`
1. [大众这波郭培合作审美在大气层 (Volkswagen’s Guo Pei collaboration aesthetic is in the atmosphere)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BC%97%E8%BF%99%E6%B3%A2%E9%83%AD%E5%9F%B9%E5%90%88%E4%BD%9C%E5%AE%A1%E7%BE%8E%E5%9C%A8%E5%A4%A7%E6%B0%94%E5%B1%82%23) `648.5K 🔥`
1. [谁敢听达拉崩吧小考](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%95%A2%E5%90%AC%E8%BE%BE%E6%8B%89%E5%B4%A9%E5%90%A7%E5%B0%8F%E8%80%83%23) `232.4K 🔥`
1. [中国城市宜居水平排行榜](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%9F%8E%E5%B8%82%E5%AE%9C%E5%B1%85%E6%B0%B4%E5%B9%B3%E6%8E%92%E8%A1%8C%E6%A6%9C%23) `229.4K 🔥`
1. [孟美岐解约乐华的第一个活动](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E7%BE%8E%E5%B2%90%E8%A7%A3%E7%BA%A6%E4%B9%90%E5%8D%8E%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%B4%BB%E5%8A%A8%23) `225.6K 🔥`
1. [苏超 (Su Chao)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `220.5K 🔥`
1. [马頔要退五哈通告费 (Ma Di wants to refund Wuha’s notice fee)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E8%A6%81%E9%80%80%E4%BA%94%E5%93%88%E9%80%9A%E5%91%8A%E8%B4%B9%23) `143.2K 🔥`
1. [校方通报女生骗摊主手机作弊被抓](https://s.weibo.com/weibo?q=%23%E6%A0%A1%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%B3%E7%94%9F%E9%AA%97%E6%91%8A%E4%B8%BB%E6%89%8B%E6%9C%BA%E4%BD%9C%E5%BC%8A%E8%A2%AB%E6%8A%93%23) `138.3K 🔥`
1. [雷军在临沂一服务区被米粉送炒鸡 (Lei Jun was served fried chicken by rice noodles in a service area in Linyi)](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9C%A8%E4%B8%B4%E6%B2%82%E4%B8%80%E6%9C%8D%E5%8A%A1%E5%8C%BA%E8%A2%AB%E7%B1%B3%E7%B2%89%E9%80%81%E7%82%92%E9%B8%A1%23) `105.1K 🔥`
1. [一个蛋糕引出7平台35.97亿元罚单 (A cake led to a 3.597 billion yuan fine on 7 platforms)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E8%9B%8B%E7%B3%95%E5%BC%95%E5%87%BA7%E5%B9%B3%E5%8F%B035.97%E4%BA%BF%E5%85%83%E7%BD%9A%E5%8D%95%23) `368.8K 🔥` `-55%`
1. [时代少年团 郭敬明审美](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E9%83%AD%E6%95%AC%E6%98%8E%E5%AE%A1%E7%BE%8E%23) `224.0K 🔥` `-21%`
1. [李小冉 你吃过麻辣拌吗 (Li Xiaoran, have you ever eaten spicy mix?)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E4%BD%A0%E5%90%83%E8%BF%87%E9%BA%BB%E8%BE%A3%E6%8B%8C%E5%90%97%23) `218.4K 🔥` `-72%`
1. [许凯 怪我 (Xu Kai Blame me)](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%87%AF%20%E6%80%AA%E6%88%91%23) `215.8K 🔥` `-23%`
1. [雷军激动到破音了 (Lei Jun was so excited that his voice broke.)](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E6%BF%80%E5%8A%A8%E5%88%B0%E7%A0%B4%E9%9F%B3%E4%BA%86%23) `209.1K 🔥` `-28%`
1. [李小冉 在记了两个胳膊都记了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E5%9C%A8%E8%AE%B0%E4%BA%86%E4%B8%A4%E4%B8%AA%E8%83%B3%E8%86%8A%E9%83%BD%E8%AE%B0%E4%BA%86%23) `208.5K 🔥` `-26%`
1. [金智秀的姐姐](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E7%9A%84%E5%A7%90%E5%A7%90%23) `208.1K 🔥` `-24%`
1. [张雪机车仅以0.071秒差距落后榜首 (Zhang Xue's motorcycle is only 0.071 seconds behind the top spot.)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E4%BB%85%E4%BB%A50.071%E7%A7%92%E5%B7%AE%E8%B7%9D%E8%90%BD%E5%90%8E%E6%A6%9C%E9%A6%96%23) `207.1K 🔥` `-26%`
1. [王一博一人带动一个赛事](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%B8%80%E4%BA%BA%E5%B8%A6%E5%8A%A8%E4%B8%80%E4%B8%AA%E8%B5%9B%E4%BA%8B%23) `200.7K 🔥` `-27%`
1. [时代少年团 没有抢到票的风险](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E6%B2%A1%E6%9C%89%E6%8A%A2%E5%88%B0%E7%A5%A8%E7%9A%84%E9%A3%8E%E9%99%A9%23) `200.6K 🔥` `-24%`
1. [高三女生借摊贩手机作弊已被处理](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%89%E5%A5%B3%E7%94%9F%E5%80%9F%E6%91%8A%E8%B4%A9%E6%89%8B%E6%9C%BA%E4%BD%9C%E5%BC%8A%E5%B7%B2%E8%A2%AB%E5%A4%84%E7%90%86%23) `188.5K 🔥` `-30%`
1. [金智秀哥哥前妻发声](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E5%93%A5%E5%93%A5%E5%89%8D%E5%A6%BB%E5%8F%91%E5%A3%B0%23) `184.3K 🔥` `-34%`
1. [亲爸后妈离婚女孩选择跟后妈生活](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E7%88%B8%E5%90%8E%E5%A6%88%E7%A6%BB%E5%A9%9A%E5%A5%B3%E5%AD%A9%E9%80%89%E6%8B%A9%E8%B7%9F%E5%90%8E%E5%A6%88%E7%94%9F%E6%B4%BB%23) `178.8K 🔥` `-25%`
1. [杨蓉晒烫伤后疤痕恢复照 (Photos of Yang Rong’s scar recovery after sunburn)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%93%89%E6%99%92%E7%83%AB%E4%BC%A4%E5%90%8E%E7%96%A4%E7%97%95%E6%81%A2%E5%A4%8D%E7%85%A7%23) `162.8K 🔥` `-39%`
1. [华晨宇造物者歌词被指抄袭周杰伦 (Hua Chenyu Creator's lyrics were accused of plagiarizing Jay Chou)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E9%80%A0%E7%89%A9%E8%80%85%E6%AD%8C%E8%AF%8D%E8%A2%AB%E6%8C%87%E6%8A%84%E8%A2%AD%E5%91%A8%E6%9D%B0%E4%BC%A6%23) `162.5K 🔥` `-38%`
1. [张雪机车热身赛第一](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E7%83%AD%E8%BA%AB%E8%B5%9B%E7%AC%AC%E4%B8%80%23) `162.1K 🔥` `-42%`
1. [HLE暴打GEN](https://s.weibo.com/weibo?q=%23HLE%E6%9A%B4%E6%89%93GEN%23) `154.4K 🔥` `-44%`
1. [安崎偏偏你最争气](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%B4%8E%E5%81%8F%E5%81%8F%E4%BD%A0%E6%9C%80%E4%BA%89%E6%B0%94%23) `136.0K 🔥` `-28%`
1. [女子靠试管阻断截瘫遗传生健康女婴](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%9D%A0%E8%AF%95%E7%AE%A1%E9%98%BB%E6%96%AD%E6%88%AA%E7%98%AB%E9%81%97%E4%BC%A0%E7%94%9F%E5%81%A5%E5%BA%B7%E5%A5%B3%E5%A9%B4%23) `128.6K 🔥` `-52%`
1. [赵雅芝73岁状态](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E9%9B%85%E8%8A%9D73%E5%B2%81%E7%8A%B6%E6%80%81%23) `126.4K 🔥` `-47%`
1. [俄罗斯一载40名中国游客大巴翻车](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E4%B8%80%E8%BD%BD40%E5%90%8D%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E5%A4%A7%E5%B7%B4%E7%BF%BB%E8%BD%A6%23) `121.2K 🔥` `-58%`
1. [库里回应与勇士续约](https://s.weibo.com/weibo?q=%23%E5%BA%93%E9%87%8C%E5%9B%9E%E5%BA%94%E4%B8%8E%E5%8B%87%E5%A3%AB%E7%BB%AD%E7%BA%A6%23) `109.5K 🔥` `-58%`
1. [曾沛慈 垫完你的垫你的](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%20%E5%9E%AB%E5%AE%8C%E4%BD%A0%E7%9A%84%E5%9E%AB%E4%BD%A0%E7%9A%84%23) `107.4K 🔥` `-58%`

Updated at 2026-04-18 19:06:06

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
