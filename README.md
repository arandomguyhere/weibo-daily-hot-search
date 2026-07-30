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

1. [天价退票费全额退了 (The sky-high refund fee has been refunded in full)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E4%BB%B7%E9%80%80%E7%A5%A8%E8%B4%B9%E5%85%A8%E9%A2%9D%E9%80%80%E4%BA%86%23) `2.5M 🔥` `NEW`
1. [A股科技退潮](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E7%A7%91%E6%8A%80%E9%80%80%E6%BD%AE%23) `1.2M 🔥` `NEW`
1. [天链三号01星发射成功](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E9%93%BE%E4%B8%89%E5%8F%B701%E6%98%9F%E5%8F%91%E5%B0%84%E6%88%90%E5%8A%9F%23) `1.0M 🔥` `NEW`
1. [白鹿周翊然透明爱人MV亲了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%91%A8%E7%BF%8A%E7%84%B6%E9%80%8F%E6%98%8E%E7%88%B1%E4%BA%BAMV%E4%BA%B2%E4%BA%86%23) `997.1K 🔥` `NEW`
1. [30岁小伙负债170万卖饺子翻身](https://s.weibo.com/weibo?q=%2330%E5%B2%81%E5%B0%8F%E4%BC%99%E8%B4%9F%E5%80%BA170%E4%B8%87%E5%8D%96%E9%A5%BA%E5%AD%90%E7%BF%BB%E8%BA%AB%23) `923.8K 🔥` `NEW`
1. [张雅琪 花少](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%20%E8%8A%B1%E5%B0%91%23) `857.4K 🔥` `NEW`
1. [泸溪河](https://s.weibo.com/weibo?q=%23%E6%B3%B8%E6%BA%AA%E6%B2%B3%23) `750.3K 🔥` `NEW`
1. [1.5万元机票仅退432元后续](https://s.weibo.com/weibo?q=%231.5%E4%B8%87%E5%85%83%E6%9C%BA%E7%A5%A8%E4%BB%85%E9%80%80432%E5%85%83%E5%90%8E%E7%BB%AD%23) `712.2K 🔥` `NEW`
1. [雷军强调两遍只有澎程能做](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%BC%BA%E8%B0%83%E4%B8%A4%E9%81%8D%E5%8F%AA%E6%9C%89%E6%BE%8E%E7%A8%8B%E8%83%BD%E5%81%9A%23) `417.9K 🔥` `NEW`
1. [李昊道歉](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%8A%E9%81%93%E6%AD%89%23) `416.1K 🔥` `NEW`
1. [罗技中国区营收喜人 曾侮辱顾客是狗 (Logitech’s sales in China are impressive, but it once insulted customers as dogs)](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%8A%80%E4%B8%AD%E5%9B%BD%E5%8C%BA%E8%90%A5%E6%94%B6%E5%96%9C%E4%BA%BA%20%E6%9B%BE%E4%BE%AE%E8%BE%B1%E9%A1%BE%E5%AE%A2%E6%98%AF%E7%8B%97%23) `415.6K 🔥` `NEW`
1. [阿根廷队3人或面临长期禁赛](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F3%E4%BA%BA%E6%88%96%E9%9D%A2%E4%B8%B4%E9%95%BF%E6%9C%9F%E7%A6%81%E8%B5%9B%23) `415.0K 🔥` `NEW`
1. [关晓彤的腿屏幕快装不下了](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E7%9A%84%E8%85%BF%E5%B1%8F%E5%B9%95%E5%BF%AB%E8%A3%85%E4%B8%8D%E4%B8%8B%E4%BA%86%23) `397.4K 🔥` `NEW`
1. [格莱美方回应BTS不报名](https://s.weibo.com/weibo?q=%23%E6%A0%BC%E8%8E%B1%E7%BE%8E%E6%96%B9%E5%9B%9E%E5%BA%94BTS%E4%B8%8D%E6%8A%A5%E5%90%8D%23) `288.2K 🔥` `NEW`
1. [雷军晒小米机器人工作视频](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E6%99%92%E5%B0%8F%E7%B1%B3%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%B7%A5%E4%BD%9C%E8%A7%86%E9%A2%91%23) `283.0K 🔥` `NEW`
1. [定格迪奥惊艳时刻](https://s.weibo.com/weibo?q=%23%E5%AE%9A%E6%A0%BC%E8%BF%AA%E5%A5%A5%E6%83%8A%E8%89%B3%E6%97%B6%E5%88%BB%23) `272.6K 🔥` `NEW`
1. [来这里才是鼓浪屿的高级玩法](https://s.weibo.com/weibo?q=%23%E6%9D%A5%E8%BF%99%E9%87%8C%E6%89%8D%E6%98%AF%E9%BC%93%E6%B5%AA%E5%B1%BF%E7%9A%84%E9%AB%98%E7%BA%A7%E7%8E%A9%E6%B3%95%23) `265.0K 🔥` `NEW`
1. [张馨予比基尼](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A6%A8%E4%BA%88%E6%AF%94%E5%9F%BA%E5%B0%BC%23) `253.0K 🔥` `NEW`
1. [周润发降价卖房](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B6%A6%E5%8F%91%E9%99%8D%E4%BB%B7%E5%8D%96%E6%88%BF%23) `245.0K 🔥` `NEW`
1. [詹姆斯曾拒绝快船2000万年薪](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E6%9B%BE%E6%8B%92%E7%BB%9D%E5%BF%AB%E8%88%B92000%E4%B8%87%E5%B9%B4%E8%96%AA%23) `244.1K 🔥` `NEW`
1. [白鹿让周翊然快原谅现偶 (Bai Lu asked Zhou Yiran to quickly forgive Xian Ou)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E8%AE%A9%E5%91%A8%E7%BF%8A%E7%84%B6%E5%BF%AB%E5%8E%9F%E8%B0%85%E7%8E%B0%E5%81%B6%23) `241.8K 🔥` `NEW`
1. [九门今日开播](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E4%BB%8A%E6%97%A5%E5%BC%80%E6%92%AD%23) `240.2K 🔥` `NEW`
1. [28岁女子脖子酸痛按了几下脑梗了](https://s.weibo.com/weibo?q=%2328%E5%B2%81%E5%A5%B3%E5%AD%90%E8%84%96%E5%AD%90%E9%85%B8%E7%97%9B%E6%8C%89%E4%BA%86%E5%87%A0%E4%B8%8B%E8%84%91%E6%A2%97%E4%BA%86%23) `235.1K 🔥` `NEW`
1. [医保家庭共济沦为套现工具](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E4%BF%9D%E5%AE%B6%E5%BA%AD%E5%85%B1%E6%B5%8E%E6%B2%A6%E4%B8%BA%E5%A5%97%E7%8E%B0%E5%B7%A5%E5%85%B7%23) `234.3K 🔥` `NEW`
1. [田曦薇胡一天天才女友预告](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%83%A1%E4%B8%80%E5%A4%A9%E5%A4%A9%E6%89%8D%E5%A5%B3%E5%8F%8B%E9%A2%84%E5%91%8A%23) `234.0K 🔥` `NEW`
1. [A股科技股拥挤度](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E7%A7%91%E6%8A%80%E8%82%A1%E6%8B%A5%E6%8C%A4%E5%BA%A6%23) `214.2K 🔥` `NEW`
1. [18楼坠楼女孩苏醒男友欲闯病房](https://s.weibo.com/weibo?q=%2318%E6%A5%BC%E5%9D%A0%E6%A5%BC%E5%A5%B3%E5%AD%A9%E8%8B%8F%E9%86%92%E7%94%B7%E5%8F%8B%E6%AC%B2%E9%97%AF%E7%97%85%E6%88%BF%23) `206.9K 🔥` `NEW`
1. [赵今麦喝酒给工作人员逗笑了](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E5%96%9D%E9%85%92%E7%BB%99%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E9%80%97%E7%AC%91%E4%BA%86%23) `205.5K 🔥` `NEW`
1. [保姆拐走婴儿35年仅获刑三年](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E5%A7%86%E6%8B%90%E8%B5%B0%E5%A9%B4%E5%84%BF35%E5%B9%B4%E4%BB%85%E8%8E%B7%E5%88%91%E4%B8%89%E5%B9%B4%23) `192.3K 🔥` `NEW`
1. [王的猜想作者回忆标题创作过程](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9A%84%E7%8C%9C%E6%83%B3%E4%BD%9C%E8%80%85%E5%9B%9E%E5%BF%86%E6%A0%87%E9%A2%98%E5%88%9B%E4%BD%9C%E8%BF%87%E7%A8%8B%23) `185.3K 🔥` `NEW`
1. [退票费霸王条款靠谁约束 (Who controls the overbearing terms of refund fees?)](https://s.weibo.com/weibo?q=%23%E9%80%80%E7%A5%A8%E8%B4%B9%E9%9C%B8%E7%8E%8B%E6%9D%A1%E6%AC%BE%E9%9D%A0%E8%B0%81%E7%BA%A6%E6%9D%9F%23) `185.3K 🔥` `NEW`
1. [小猫上厕所还要人扶着](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E4%B8%8A%E5%8E%95%E6%89%80%E8%BF%98%E8%A6%81%E4%BA%BA%E6%89%B6%E7%9D%80%23) `170.9K 🔥` `NEW`
1. [朱志鑫张泽禹给黄誉博比心](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E5%BC%A0%E6%B3%BD%E7%A6%B9%E7%BB%99%E9%BB%84%E8%AA%89%E5%8D%9A%E6%AF%94%E5%BF%83%23) `161.0K 🔥` `NEW`
1. [领导真的会对家境好的客气一点吗](https://s.weibo.com/weibo?q=%23%E9%A2%86%E5%AF%BC%E7%9C%9F%E7%9A%84%E4%BC%9A%E5%AF%B9%E5%AE%B6%E5%A2%83%E5%A5%BD%E7%9A%84%E5%AE%A2%E6%B0%94%E4%B8%80%E7%82%B9%E5%90%97%23) `157.1K 🔥` `NEW`
1. [1岁被拐13岁遭养家抛弃男子发声](https://s.weibo.com/weibo?q=%231%E5%B2%81%E8%A2%AB%E6%8B%9013%E5%B2%81%E9%81%AD%E5%85%BB%E5%AE%B6%E6%8A%9B%E5%BC%83%E7%94%B7%E5%AD%90%E5%8F%91%E5%A3%B0%23) `154.8K 🔥` `NEW`
1. [吉林大量菌包菌棒被冲上街头](https://s.weibo.com/weibo?q=%23%E5%90%89%E6%9E%97%E5%A4%A7%E9%87%8F%E8%8F%8C%E5%8C%85%E8%8F%8C%E6%A3%92%E8%A2%AB%E5%86%B2%E4%B8%8A%E8%A1%97%E5%A4%B4%23) `152.3K 🔥` `NEW`
1. [周星驰反向采访董宇辉](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E5%8F%8D%E5%90%91%E9%87%87%E8%AE%BF%E8%91%A3%E5%AE%87%E8%BE%89%23) `152.2K 🔥` `NEW`
1. [马嘉祺一首不退太燃了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E4%B8%80%E9%A6%96%E4%B8%8D%E9%80%80%E5%A4%AA%E7%87%83%E4%BA%86%23) `149.2K 🔥` `NEW`
1. [洗衣机上有诡异奶奶](https://s.weibo.com/weibo?q=%23%E6%B4%97%E8%A1%A3%E6%9C%BA%E4%B8%8A%E6%9C%89%E8%AF%A1%E5%BC%82%E5%A5%B6%E5%A5%B6%23) `147.7K 🔥` `NEW`
1. [AI公司被曝大量收购旧书](https://s.weibo.com/weibo?q=%23AI%E5%85%AC%E5%8F%B8%E8%A2%AB%E6%9B%9D%E5%A4%A7%E9%87%8F%E6%94%B6%E8%B4%AD%E6%97%A7%E4%B9%A6%23) `146.8K 🔥` `NEW`
1. [这放在整个烧烤界都是相当炸裂的 (This is quite explosive in the entire barbecue industry.)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%94%BE%E5%9C%A8%E6%95%B4%E4%B8%AA%E7%83%A7%E7%83%A4%E7%95%8C%E9%83%BD%E6%98%AF%E7%9B%B8%E5%BD%93%E7%82%B8%E8%A3%82%E7%9A%84%23) `146.4K 🔥` `NEW`
1. [奇瑞捷豹路虎神行者8首车下线 (Chery Jaguar Land Rover Freelander 8 rolls off production line)](https://s.weibo.com/weibo?q=%23%E5%A5%87%E7%91%9E%E6%8D%B7%E8%B1%B9%E8%B7%AF%E8%99%8E%E7%A5%9E%E8%A1%8C%E8%80%858%E9%A6%96%E8%BD%A6%E4%B8%8B%E7%BA%BF%23) `997.3K 🔥` `+47%`
1. [宝曼兰朵全球品牌代言人杨紫 (Yang Zi, the global brand spokesperson of Powerland)](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E6%9B%BC%E5%85%B0%E6%9C%B5%E5%85%A8%E7%90%83%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%E6%9D%A8%E7%B4%AB%23) `751.3K 🔥` `+777%`
1. [17岁小将爆冷击败世界冠军蒯曼](https://s.weibo.com/weibo?q=%2317%E5%B2%81%E5%B0%8F%E5%B0%86%E7%88%86%E5%86%B7%E5%87%BB%E8%B4%A5%E4%B8%96%E7%95%8C%E5%86%A0%E5%86%9B%E8%92%AF%E6%9B%BC%23) `566.6K 🔥` `+175%`
1. [关晓彤背链](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E8%83%8C%E9%93%BE%23) `417.1K 🔥` `+98%`
1. [黄多多的清冷和黄少艾的俏皮可爱](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A%E7%9A%84%E6%B8%85%E5%86%B7%E5%92%8C%E9%BB%84%E5%B0%91%E8%89%BE%E7%9A%84%E4%BF%8F%E7%9A%AE%E5%8F%AF%E7%88%B1%23) `220.9K 🔥`
1. [网友曝胖东来直饮水成免费取水点](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%9B%9D%E8%83%96%E4%B8%9C%E6%9D%A5%E7%9B%B4%E9%A5%AE%E6%B0%B4%E6%88%90%E5%85%8D%E8%B4%B9%E5%8F%96%E6%B0%B4%E7%82%B9%23) `411.2K 🔥` `-28%`
1. [小区电梯失控从31楼下坠到负2楼 (The elevator in the community lost control and fell from the 31st floor to the negative 2nd floor.)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%8C%BA%E7%94%B5%E6%A2%AF%E5%A4%B1%E6%8E%A7%E4%BB%8E31%E6%A5%BC%E4%B8%8B%E5%9D%A0%E5%88%B0%E8%B4%9F2%E6%A5%BC%23) `185.4K 🔥` `-68%`
1. [电影悟空大圣宣布撤档](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E6%82%9F%E7%A9%BA%E5%A4%A7%E5%9C%A3%E5%AE%A3%E5%B8%83%E6%92%A4%E6%A1%A3%23) `173.5K 🔥` `-71%`
1. [官方通报乒乓球运动员挥拳击打对手](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E4%B9%92%E4%B9%93%E7%90%83%E8%BF%90%E5%8A%A8%E5%91%98%E6%8C%A5%E6%8B%B3%E5%87%BB%E6%89%93%E5%AF%B9%E6%89%8B%23) `165.1K 🔥` `-81%`
1. [修杰楷开庭认罪请求缓刑](https://s.weibo.com/weibo?q=%23%E4%BF%AE%E6%9D%B0%E6%A5%B7%E5%BC%80%E5%BA%AD%E8%AE%A4%E7%BD%AA%E8%AF%B7%E6%B1%82%E7%BC%93%E5%88%91%23) `153.5K 🔥` `-23%`

Updated at 2026-07-30 11:32:56

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
