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

1. [李小冉 你吃过麻辣拌吗 (Li Xiaoran, have you ever eaten spicy mix?)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E4%BD%A0%E5%90%83%E8%BF%87%E9%BA%BB%E8%BE%A3%E6%8B%8C%E5%90%97%23) `787.7K 🔥` `NEW`
1. [郑州以文化之名点亮夜空](https://s.weibo.com/weibo?q=%23%E9%83%91%E5%B7%9E%E4%BB%A5%E6%96%87%E5%8C%96%E4%B9%8B%E5%90%8D%E7%82%B9%E4%BA%AE%E5%A4%9C%E7%A9%BA%23) `762.4K 🔥` `NEW`
1. [俄罗斯一载40名中国游客大巴翻车](https://s.weibo.com/weibo?q=%23%E4%BF%84%E7%BD%97%E6%96%AF%E4%B8%80%E8%BD%BD40%E5%90%8D%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E5%A4%A7%E5%B7%B4%E7%BF%BB%E8%BD%A6%23) `290.4K 🔥` `NEW`
1. [中国城市宜居水平排行榜](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%9F%8E%E5%B8%82%E5%AE%9C%E5%B1%85%E6%B0%B4%E5%B9%B3%E6%8E%92%E8%A1%8C%E6%A6%9C%23) `287.6K 🔥` `NEW`
1. [苏超](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E8%B6%85%23) `276.6K 🔥` `NEW`
1. [HLE暴打GEN](https://s.weibo.com/weibo?q=%23HLE%E6%9A%B4%E6%89%93GEN%23) `275.3K 🔥` `NEW`
1. [王一博一人带动一个赛事](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%B8%80%E4%BA%BA%E5%B8%A6%E5%8A%A8%E4%B8%80%E4%B8%AA%E8%B5%9B%E4%BA%8B%23) `274.1K 🔥` `NEW`
1. [孟美岐解约乐华的第一个活动](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E7%BE%8E%E5%B2%90%E8%A7%A3%E7%BA%A6%E4%B9%90%E5%8D%8E%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E6%B4%BB%E5%8A%A8%23) `264.1K 🔥` `NEW`
1. [安崎偏偏你最争气](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%B4%8E%E5%81%8F%E5%81%8F%E4%BD%A0%E6%9C%80%E4%BA%89%E6%B0%94%23) `188.7K 🔥` `NEW`
1. [女友跳楼男友未拽住担责冤不冤](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%8F%8B%E8%B7%B3%E6%A5%BC%E7%94%B7%E5%8F%8B%E6%9C%AA%E6%8B%BD%E4%BD%8F%E6%8B%85%E8%B4%A3%E5%86%A4%E4%B8%8D%E5%86%A4%23) `139.5K 🔥` `NEW`
1. [伊朗宣布多个机场重新开放 (Iran announces reopening of many airports)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AE%A3%E5%B8%83%E5%A4%9A%E4%B8%AA%E6%9C%BA%E5%9C%BA%E9%87%8D%E6%96%B0%E5%BC%80%E6%94%BE%23) `126.7K 🔥` `NEW`
1. [留几手胖了12斤](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%87%A0%E6%89%8B%E8%83%96%E4%BA%8612%E6%96%A4%23) `115.5K 🔥` `NEW`
1. [张雪解释车手最后两圈才刷出好成绩](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E8%A7%A3%E9%87%8A%E8%BD%A6%E6%89%8B%E6%9C%80%E5%90%8E%E4%B8%A4%E5%9C%88%E6%89%8D%E5%88%B7%E5%87%BA%E5%A5%BD%E6%88%90%E7%BB%A9%23) `112.3K 🔥` `NEW`
1. [解放军凌晨四点管控日舰过航台湾海峡](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E5%87%8C%E6%99%A8%E5%9B%9B%E7%82%B9%E7%AE%A1%E6%8E%A7%E6%97%A5%E8%88%B0%E8%BF%87%E8%88%AA%E5%8F%B0%E6%B9%BE%E6%B5%B7%E5%B3%A1%23) `777.7K 🔥` `+296%`
1. [伊朗恢复对霍尔木兹海峡的控制](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%81%A2%E5%A4%8D%E5%AF%B9%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E7%9A%84%E6%8E%A7%E5%88%B6%23) `760.1K 🔥` `+288%`
1. [老板在抓药顾客在买药猫咪在吃药](https://s.weibo.com/weibo?q=%23%E8%80%81%E6%9D%BF%E5%9C%A8%E6%8A%93%E8%8D%AF%E9%A1%BE%E5%AE%A2%E5%9C%A8%E4%B9%B0%E8%8D%AF%E7%8C%AB%E5%92%AA%E5%9C%A8%E5%90%83%E8%8D%AF%23) `281.8K 🔥` `+60%`
1. [张雪机车热身赛第一](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E7%83%AD%E8%BA%AB%E8%B5%9B%E7%AC%AC%E4%B8%80%23) `278.6K 🔥` `+39%`
1. [金智秀的姐姐](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E7%9A%84%E5%A7%90%E5%A7%90%23) `272.4K 🔥` `+39%`
1. [高三女生借摊贩手机作弊已被处理](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%89%E5%A5%B3%E7%94%9F%E5%80%9F%E6%91%8A%E8%B4%A9%E6%89%8B%E6%9C%BA%E4%BD%9C%E5%BC%8A%E5%B7%B2%E8%A2%AB%E5%A4%84%E7%90%86%23) `270.4K 🔥` `+38%`
1. [LPL和LCK真不一样了](https://s.weibo.com/weibo?q=%23LPL%E5%92%8CLCK%E7%9C%9F%E4%B8%8D%E4%B8%80%E6%A0%B7%E4%BA%86%23) `261.0K 🔥` `+33%`
1. [华晨宇造物者歌词被指抄袭周杰伦 (Hua Chenyu Creator's lyrics were accused of plagiarizing Jay Chou)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E9%80%A0%E7%89%A9%E8%80%85%E6%AD%8C%E8%AF%8D%E8%A2%AB%E6%8C%87%E6%8A%84%E8%A2%AD%E5%91%A8%E6%9D%B0%E4%BC%A6%23) `260.7K 🔥` `+33%`
1. [曾沛慈 垫完你的垫你的](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%20%E5%9E%AB%E5%AE%8C%E4%BD%A0%E7%9A%84%E5%9E%AB%E4%BD%A0%E7%9A%84%23) `256.9K 🔥` `+32%`
1. [亲爸后妈离婚女孩选择跟后妈生活](https://s.weibo.com/weibo?q=%23%E4%BA%B2%E7%88%B8%E5%90%8E%E5%A6%88%E7%A6%BB%E5%A9%9A%E5%A5%B3%E5%AD%A9%E9%80%89%E6%8B%A9%E8%B7%9F%E5%90%8E%E5%A6%88%E7%94%9F%E6%B4%BB%23) `238.7K 🔥` `+26%`
1. [赵雅芝73岁状态](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E9%9B%85%E8%8A%9D73%E5%B2%81%E7%8A%B6%E6%80%81%23) `237.7K 🔥` `+57%`
1. [一个蛋糕引出7平台35.97亿元罚单 (A cake led to a 3.597 billion yuan fine on 7 platforms)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%AA%E8%9B%8B%E7%B3%95%E5%BC%95%E5%87%BA7%E5%B9%B3%E5%8F%B035.97%E4%BA%BF%E5%85%83%E7%BD%9A%E5%8D%95%23) `820.2K 🔥`
1. [中国硬核新成就刷屏 (China’s new hard-core achievements hit the screen)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%A1%AC%E6%A0%B8%E6%96%B0%E6%88%90%E5%B0%B1%E5%88%B7%E5%B1%8F%23) `795.0K 🔥`
1. [怪不得韩国人爱去张家界旅游](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E9%9F%A9%E5%9B%BD%E4%BA%BA%E7%88%B1%E5%8E%BB%E5%BC%A0%E5%AE%B6%E7%95%8C%E6%97%85%E6%B8%B8%23) `792.5K 🔥`
1. [女子机场两次拒绝帮陌生人带行李 (Woman refused to help strangers with luggage at airport twice)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%9C%BA%E5%9C%BA%E4%B8%A4%E6%AC%A1%E6%8B%92%E7%BB%9D%E5%B8%AE%E9%99%8C%E7%94%9F%E4%BA%BA%E5%B8%A6%E8%A1%8C%E6%9D%8E%23) `702.0K 🔥`
1. [雷军激动到破音了 (Lei Jun was so excited that his voice broke.)](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E6%BF%80%E5%8A%A8%E5%88%B0%E7%A0%B4%E9%9F%B3%E4%BA%86%23) `290.9K 🔥`
1. [库里回应与勇士续约](https://s.weibo.com/weibo?q=%23%E5%BA%93%E9%87%8C%E5%9B%9E%E5%BA%94%E4%B8%8E%E5%8B%87%E5%A3%AB%E7%BB%AD%E7%BA%A6%23) `261.9K 🔥`
1. [校方通报女生骗摊主手机作弊被抓](https://s.weibo.com/weibo?q=%23%E6%A0%A1%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A5%B3%E7%94%9F%E9%AA%97%E6%91%8A%E4%B8%BB%E6%89%8B%E6%9C%BA%E4%BD%9C%E5%BC%8A%E8%A2%AB%E6%8A%93%23) `166.7K 🔥`
1. [王濛cue黎明](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9Bcue%E9%BB%8E%E6%98%8E%23) `164.3K 🔥`
1. [五一航班大面积取消 (Widespread cancellation of May Day flights)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E8%88%AA%E7%8F%AD%E5%A4%A7%E9%9D%A2%E7%A7%AF%E5%8F%96%E6%B6%88%23) `1.2M 🔥` `-21%`
1. [时代少年团 郭敬明审美](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E9%83%AD%E6%95%AC%E6%98%8E%E5%AE%A1%E7%BE%8E%23) `284.9K 🔥` `-26%`
1. [李小冉 在记了两个胳膊都记了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%20%E5%9C%A8%E8%AE%B0%E4%BA%86%E4%B8%A4%E4%B8%AA%E8%83%B3%E8%86%8A%E9%83%BD%E8%AE%B0%E4%BA%86%23) `282.5K 🔥` `-60%`
1. [许凯 怪我 (Xu Kai Blame me)](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%87%AF%20%E6%80%AA%E6%88%91%23) `280.8K 🔥` `-30%`
1. [金智秀哥哥前妻发声](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E5%93%A5%E5%93%A5%E5%89%8D%E5%A6%BB%E5%8F%91%E5%A3%B0%23) `280.3K 🔥` `-30%`
1. [张雪机车仅以0.071秒差距落后榜首 (Zhang Xue's motorcycle is only 0.071 seconds behind the top spot.)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E4%BB%85%E4%BB%A50.071%E7%A7%92%E5%B7%AE%E8%B7%9D%E8%90%BD%E5%90%8E%E6%A6%9C%E9%A6%96%23) `278.8K 🔥` `-31%`
1. [谁敢听达拉崩吧小考](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%95%A2%E5%90%AC%E8%BE%BE%E6%8B%89%E5%B4%A9%E5%90%A7%E5%B0%8F%E8%80%83%23) `268.9K 🔥` `-36%`
1. [杨蓉晒烫伤后疤痕恢复照](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%93%89%E6%99%92%E7%83%AB%E4%BC%A4%E5%90%8E%E7%96%A4%E7%97%95%E6%81%A2%E5%A4%8D%E7%85%A7%23) `267.8K 🔥` `-23%`
1. [女子靠试管阻断截瘫遗传生健康女婴](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%9D%A0%E8%AF%95%E7%AE%A1%E9%98%BB%E6%96%AD%E6%88%AA%E7%98%AB%E9%81%97%E4%BC%A0%E7%94%9F%E5%81%A5%E5%BA%B7%E5%A5%B3%E5%A9%B4%23) `265.9K 🔥` `-32%`
1. [时代少年团 没有抢到票的风险](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%20%E6%B2%A1%E6%9C%89%E6%8A%A2%E5%88%B0%E7%A5%A8%E7%9A%84%E9%A3%8E%E9%99%A9%23) `263.7K 🔥` `-46%`
1. [杨紫作品豆瓣分数 (Douban score of Yang Zi's works)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E4%BD%9C%E5%93%81%E8%B1%86%E7%93%A3%E5%88%86%E6%95%B0%23) `142.3K 🔥` `-25%`
1. [马頔要退五哈通告费 (Ma Di wants to refund Wuha’s notice fee)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E8%A6%81%E9%80%80%E4%BA%94%E5%93%88%E9%80%9A%E5%91%8A%E8%B4%B9%23) `135.1K 🔥` `-21%`
1. [马頔说幸亏我结婚了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E8%AF%B4%E5%B9%B8%E4%BA%8F%E6%88%91%E7%BB%93%E5%A9%9A%E4%BA%86%23) `128.4K 🔥` `-35%`
1. [公积金功能上新了](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E5%8A%9F%E8%83%BD%E4%B8%8A%E6%96%B0%E4%BA%86%23) `121.7K 🔥` `-32%`
1. [17岁少年离世前还在看暗黑动漫 (17-year-old boy was still watching dark anime before his death)](https://s.weibo.com/weibo?q=%2317%E5%B2%81%E5%B0%91%E5%B9%B4%E7%A6%BB%E4%B8%96%E5%89%8D%E8%BF%98%E5%9C%A8%E7%9C%8B%E6%9A%97%E9%BB%91%E5%8A%A8%E6%BC%AB%23) `119.4K 🔥` `-28%`
1. [格林两场附加赛狂轰71分 (Green scored 71 points in two playoff games)](https://s.weibo.com/weibo?q=%23%E6%A0%BC%E6%9E%97%E4%B8%A4%E5%9C%BA%E9%99%84%E5%8A%A0%E8%B5%9B%E7%8B%82%E8%BD%B071%E5%88%86%23) `112.2K 🔥` `-43%`
1. [排位赛王一博成绩](https://s.weibo.com/weibo?q=%23%E6%8E%92%E4%BD%8D%E8%B5%9B%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%88%90%E7%BB%A9%23) `111.3K 🔥` `-29%`
1. [格林布克双双驱逐 (Greenbook was both ejected)](https://s.weibo.com/weibo?q=%23%E6%A0%BC%E6%9E%97%E5%B8%83%E5%85%8B%E5%8F%8C%E5%8F%8C%E9%A9%B1%E9%80%90%23) `110.4K 🔥` `-34%`
1. [雷军在临沂一服务区被米粉送炒鸡 (Lei Jun was served fried chicken by rice noodles in a service area in Linyi)](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9C%A8%E4%B8%B4%E6%B2%82%E4%B8%80%E6%9C%8D%E5%8A%A1%E5%8C%BA%E8%A2%AB%E7%B1%B3%E7%B2%89%E9%80%81%E7%82%92%E9%B8%A1%23) `109.7K 🔥` `-25%`

Updated at 2026-04-18 18:22:55

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
