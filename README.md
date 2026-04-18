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

1. [何润东现身宿迁奥体 (Peter Ho appeared at Suqian Olympic Stadium)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E7%8E%B0%E8%BA%AB%E5%AE%BF%E8%BF%81%E5%A5%A5%E4%BD%93%23) `334.0K 🔥` `NEW`
1. [魏建军王濛聊棱角是一种责任](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%BB%BA%E5%86%9B%E7%8E%8B%E6%BF%9B%E8%81%8A%E6%A3%B1%E8%A7%92%E6%98%AF%E4%B8%80%E7%A7%8D%E8%B4%A3%E4%BB%BB%23) `278.0K 🔥` `NEW`
1. [官方通报男子被装载机铲入身亡](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E7%94%B7%E5%AD%90%E8%A2%AB%E8%A3%85%E8%BD%BD%E6%9C%BA%E9%93%B2%E5%85%A5%E8%BA%AB%E4%BA%A1%23) `243.6K 🔥` `NEW`
1. [日本军舰过航台海为何选4月17日](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%86%9B%E8%88%B0%E8%BF%87%E8%88%AA%E5%8F%B0%E6%B5%B7%E4%B8%BA%E4%BD%95%E9%80%894%E6%9C%8817%E6%97%A5%23) `235.8K 🔥` `NEW`
1. [何润东项羽盔甲做好了](https://s.weibo.com/weibo?q=%23%E4%BD%95%E6%B6%A6%E4%B8%9C%E9%A1%B9%E7%BE%BD%E7%9B%94%E7%94%B2%E5%81%9A%E5%A5%BD%E4%BA%86%23) `231.7K 🔥` `NEW`
1. [喂娃流感药除了连哄带骗有啥招](https://s.weibo.com/weibo?q=%23%E5%96%82%E5%A8%83%E6%B5%81%E6%84%9F%E8%8D%AF%E9%99%A4%E4%BA%86%E8%BF%9E%E5%93%84%E5%B8%A6%E9%AA%97%E6%9C%89%E5%95%A5%E6%8B%9B%23) `224.4K 🔥` `NEW`
1. [重返未来1999](https://s.weibo.com/weibo?q=%23%E9%87%8D%E8%BF%94%E6%9C%AA%E6%9D%A51999%23) `221.8K 🔥` `NEW`
1. [苏超直播](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%E7%9B%B4%E6%92%AD%23) `206.3K 🔥` `NEW`
1. [杨紫生命树官媒发文统计](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%94%9F%E5%91%BD%E6%A0%91%E5%AE%98%E5%AA%92%E5%8F%91%E6%96%87%E7%BB%9F%E8%AE%A1%23) `178.2K 🔥` `NEW`
1. [老太占道卖菜城管执法时倒地身亡](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%A4%AA%E5%8D%A0%E9%81%93%E5%8D%96%E8%8F%9C%E5%9F%8E%E7%AE%A1%E6%89%A7%E6%B3%95%E6%97%B6%E5%80%92%E5%9C%B0%E8%BA%AB%E4%BA%A1%23) `175.7K 🔥` `NEW`
1. [刘宇宁南京 (Liu YuningNanjing)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E5%8D%97%E4%BA%AC%23) `175.6K 🔥` `NEW`
1. [官方通报村支书被举报违建1500平楼房](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E6%9D%91%E6%94%AF%E4%B9%A6%E8%A2%AB%E4%B8%BE%E6%8A%A5%E8%BF%9D%E5%BB%BA1500%E5%B9%B3%E6%A5%BC%E6%88%BF%23) `170.9K 🔥` `NEW`
1. [咪豆 徐明浩](https://s.weibo.com/weibo?q=%23%E5%92%AA%E8%B1%86%20%E5%BE%90%E6%98%8E%E6%B5%A9%23) `144.7K 🔥` `NEW`
1. [六位数的狗坐在七位数的车里](https://s.weibo.com/weibo?q=%23%E5%85%AD%E4%BD%8D%E6%95%B0%E7%9A%84%E7%8B%97%E5%9D%90%E5%9C%A8%E4%B8%83%E4%BD%8D%E6%95%B0%E7%9A%84%E8%BD%A6%E9%87%8C%23) `128.6K 🔥` `NEW`
1. [苏超 (Su Chao)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `1.1M 🔥` `+415%`
1. [深圳一小学老师批改作业时崩溃大哭](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E4%B8%80%E5%B0%8F%E5%AD%A6%E8%80%81%E5%B8%88%E6%89%B9%E6%94%B9%E4%BD%9C%E4%B8%9A%E6%97%B6%E5%B4%A9%E6%BA%83%E5%A4%A7%E5%93%AD%23) `477.0K 🔥` `+124%`
1. [中国城市宜居水平排行榜](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%9F%8E%E5%B8%82%E5%AE%9C%E5%B1%85%E6%B0%B4%E5%B9%B3%E6%8E%92%E8%A1%8C%E6%A6%9C%23) `330.5K 🔥` `+44%`
1. [孟美岐解约乐华的第一个活动](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E7%BE%8E%E5%B2%90%E8%A7%A3%E7%BA%A6%E4%B9%90%E5%8D%8E%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%B4%BB%E5%8A%A8%23) `327.5K 🔥` `+45%`
1. [时代少年团 郭敬明审美](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E9%83%AD%E6%95%AC%E6%98%8E%E5%AE%A1%E7%BE%8E%23) `326.0K 🔥` `+46%`
1. [日媒集体噤声](https://s.weibo.com/weibo?q=%23%E6%97%A5%E5%AA%92%E9%9B%86%E4%BD%93%E5%99%A4%E5%A3%B0%23) `323.0K 🔥` `+127%`
1. [萧蔷翻温峥嵘白眼](https://s.weibo.com/weibo?q=%23%E8%90%A7%E8%94%B7%E7%BF%BB%E6%B8%A9%E5%B3%A5%E5%B5%98%E7%99%BD%E7%9C%BC%23) `317.2K 🔥` `+51%`
1. [张婉婷坐飞机惊恐发作差点被驱逐 (Zhang Wanting had a panic attack on a plane and was almost deported)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%89%E5%A9%B7%E5%9D%90%E9%A3%9E%E6%9C%BA%E6%83%8A%E6%81%90%E5%8F%91%E4%BD%9C%E5%B7%AE%E7%82%B9%E8%A2%AB%E9%A9%B1%E9%80%90%23) `313.7K 🔥` `+72%`
1. [雷军激动到破音了 (Lei Jun was so excited that his voice broke.)](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E6%BF%80%E5%8A%A8%E5%88%B0%E7%A0%B4%E9%9F%B3%E4%BA%86%23) `312.2K 🔥` `+49%`
1. [李小冉 你吃过麻辣拌吗 (Li Xiaoran, have you ever eaten spicy mix?)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E4%BD%A0%E5%90%83%E8%BF%87%E9%BA%BB%E8%BE%A3%E6%8B%8C%E5%90%97%23) `305.2K 🔥` `+40%`
1. [许凯 怪我 (Xu Kai Blame me)](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%87%AF%20%E6%80%AA%E6%88%91%23) `268.0K 🔥` `+24%`
1. [内耗人的终极解药](https://s.weibo.com/weibo?q=%23%E5%86%85%E8%80%97%E4%BA%BA%E7%9A%84%E7%BB%88%E6%9E%81%E8%A7%A3%E8%8D%AF%23) `267.6K 🔥` `+95%`
1. [时代少年团 没有抢到票的风险](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E6%B2%A1%E6%9C%89%E6%8A%A2%E5%88%B0%E7%A5%A8%E7%9A%84%E9%A3%8E%E9%99%A9%23) `253.3K 🔥` `+26%`
1. [李小冉 在记了两个胳膊都记了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E5%9C%A8%E8%AE%B0%E4%BA%86%E4%B8%A4%E4%B8%AA%E8%83%B3%E8%86%8A%E9%83%BD%E8%AE%B0%E4%BA%86%23) `252.4K 🔥` `+21%`
1. [金智秀哥哥前妻发声](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E5%93%A5%E5%93%A5%E5%89%8D%E5%A6%BB%E5%8F%91%E5%A3%B0%23) `241.0K 🔥` `+31%`
1. [富人付费狙杀平民偏好儿童年轻女性 (Rich people pay to kill civilians, preferring children and young women)](https://s.weibo.com/weibo?q=%23%E5%AF%8C%E4%BA%BA%E4%BB%98%E8%B4%B9%E7%8B%99%E6%9D%80%E5%B9%B3%E6%B0%91%E5%81%8F%E5%A5%BD%E5%84%BF%E7%AB%A5%E5%B9%B4%E8%BD%BB%E5%A5%B3%E6%80%A7%23) `225.7K 🔥` `+75%`
1. [日本可短时间内造出原子弹](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%8F%AF%E7%9F%AD%E6%97%B6%E9%97%B4%E5%86%85%E9%80%A0%E5%87%BA%E5%8E%9F%E5%AD%90%E5%BC%B9%23) `224.3K 🔥` `+42%`
1. [日本远程导弹射程覆盖中国军港](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E8%BF%9C%E7%A8%8B%E5%AF%BC%E5%BC%B9%E5%B0%84%E7%A8%8B%E8%A6%86%E7%9B%96%E4%B8%AD%E5%9B%BD%E5%86%9B%E6%B8%AF%23) `190.6K 🔥` `+29%`
1. [曾沛慈 垫完你的垫你的](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%20%E5%9E%AB%E5%AE%8C%E4%BD%A0%E7%9A%84%E5%9E%AB%E4%BD%A0%E7%9A%84%23) `130.3K 🔥` `+21%`
1. [解放军凌晨四点管控日舰过航台湾海峡](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E5%87%8C%E6%99%A8%E5%9B%9B%E7%82%B9%E7%AE%A1%E6%8E%A7%E6%97%A5%E8%88%B0%E8%BF%87%E8%88%AA%E5%8F%B0%E6%B9%BE%E6%B5%B7%E5%B3%A1%23) `803.5K 🔥`
1. [中国硬核新成就刷屏 (China’s new hard-core achievements hit the screen)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%A1%AC%E6%A0%B8%E6%96%B0%E6%88%90%E5%B0%B1%E5%88%B7%E5%B1%8F%23) `668.1K 🔥`
1. [女子机场两次拒绝帮陌生人带行李 (Woman refused to help strangers with luggage at airport twice)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%9C%BA%E5%9C%BA%E4%B8%A4%E6%AC%A1%E6%8B%92%E7%BB%9D%E5%B8%AE%E9%99%8C%E7%94%9F%E4%BA%BA%E5%B8%A6%E8%A1%8C%E6%9D%8E%23) `633.9K 🔥`
1. [怪不得韩国人爱去张家界旅游](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E9%9F%A9%E5%9B%BD%E4%BA%BA%E7%88%B1%E5%8E%BB%E5%BC%A0%E5%AE%B6%E7%95%8C%E6%97%85%E6%B8%B8%23) `561.7K 🔥`
1. [大众这波郭培合作审美在大气层 (Volkswagen’s Guo Pei collaboration aesthetic is in the atmosphere)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BC%97%E8%BF%99%E6%B3%A2%E9%83%AD%E5%9F%B9%E5%90%88%E4%BD%9C%E5%AE%A1%E7%BE%8E%E5%9C%A8%E5%A4%A7%E6%B0%94%E5%B1%82%23) `560.0K 🔥`
1. [老板在抓药顾客在买药猫咪在吃药 (The boss is grabbing medicine. The customer is buying medicine. The cat is taking medicine.)](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%9D%BF%E5%9C%A8%E6%8A%93%E8%8D%AF%E9%A1%BE%E5%AE%A2%E5%9C%A8%E4%B9%B0%E8%8D%AF%E7%8C%AB%E5%92%AA%E5%9C%A8%E5%90%83%E8%8D%AF%23) `392.4K 🔥`
1. [一个蛋糕引出7平台35.97亿元罚单 (A cake led to a 3.597 billion yuan fine on 7 platforms)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E8%9B%8B%E7%B3%95%E5%BC%95%E5%87%BA7%E5%B9%B3%E5%8F%B035.97%E4%BA%BF%E5%85%83%E7%BD%9A%E5%8D%95%23) `304.9K 🔥`
1. [金智秀的姐姐](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E7%9A%84%E5%A7%90%E5%A7%90%23) `224.0K 🔥`
1. [谁敢听达拉崩吧小考](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%95%A2%E5%90%AC%E8%BE%BE%E6%8B%89%E5%B4%A9%E5%90%A7%E5%B0%8F%E8%80%83%23) `188.6K 🔥`
1. [王一博一人带动一个赛事](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%B8%80%E4%BA%BA%E5%B8%A6%E5%8A%A8%E4%B8%80%E4%B8%AA%E8%B5%9B%E4%BA%8B%23) `169.9K 🔥`
1. [华晨宇造物者歌词被指抄袭周杰伦 (Hua Chenyu Creator's lyrics were accused of plagiarizing Jay Chou)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E9%80%A0%E7%89%A9%E8%80%85%E6%AD%8C%E8%AF%8D%E8%A2%AB%E6%8C%87%E6%8A%84%E8%A2%AD%E5%91%A8%E6%9D%B0%E4%BC%A6%23) `163.3K 🔥`
1. [北约30国大使集体访日](https://s.weibo.com/weibo?q=%23%E5%8C%97%E7%BA%A630%E5%9B%BD%E5%A4%A7%E4%BD%BF%E9%9B%86%E4%BD%93%E8%AE%BF%E6%97%A5%23) `154.6K 🔥`
1. [杨蓉晒烫伤后疤痕恢复照 (Photos of Yang Rong’s scar recovery after sunburn)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%93%89%E6%99%92%E7%83%AB%E4%BC%A4%E5%90%8E%E7%96%A4%E7%97%95%E6%81%A2%E5%A4%8D%E7%85%A7%23) `152.8K 🔥`
1. [校方通报女生骗摊主手机作弊被抓](https://s.weibo.com/weibo?q=%23%E6%A0%A1%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%B3%E7%94%9F%E9%AA%97%E6%91%8A%E4%B8%BB%E6%89%8B%E6%9C%BA%E4%BD%9C%E5%BC%8A%E8%A2%AB%E6%8A%93%23) `150.7K 🔥`
1. [五一航班大面积取消 (Widespread cancellation of May Day flights)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E8%88%AA%E7%8F%AD%E5%A4%A7%E9%9D%A2%E7%A7%AF%E5%8F%96%E6%B6%88%23) `654.8K 🔥` `-43%`
1. [伊朗恢复对霍尔木兹海峡的控制](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%81%A2%E5%A4%8D%E5%AF%B9%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E7%9A%84%E6%8E%A7%E5%88%B6%23) `388.5K 🔥` `-41%`
1. [AG夺得CFPL第十三冠 (AG wins the 13th CFPL championship)](https://s.weibo.com/weibo?q=%23AG%E5%A4%BA%E5%BE%97CFPL%E7%AC%AC%E5%8D%81%E4%B8%89%E5%86%A0%23) `194.0K 🔥` `-42%`
1. [张雪机车仅以0.071秒差距落后榜首 (Zhang Xue's motorcycle is only 0.071 seconds behind the top spot.)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E4%BB%85%E4%BB%A50.071%E7%A7%92%E5%B7%AE%E8%B7%9D%E8%90%BD%E5%90%8E%E6%A6%9C%E9%A6%96%23) `137.0K 🔥` `-34%`

Updated at 2026-04-18 19:48:12

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
