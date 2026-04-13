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

1. [被老鼠咬10天后确诊鼠咬热 (Diagnosed with rat bite fever 10 days after being bitten by a rat)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E8%80%81%E9%BC%A0%E5%92%AC10%E5%A4%A9%E5%90%8E%E7%A1%AE%E8%AF%8A%E9%BC%A0%E5%92%AC%E7%83%AD%23) `852.4K 🔥` `NEW`
1. [伊朗曝美方要均分霍尔木兹收益](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9B%9D%E7%BE%8E%E6%96%B9%E8%A6%81%E5%9D%87%E5%88%86%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%94%B6%E7%9B%8A%23) `658.0K 🔥` `NEW`
1. [京洛再无佳人 吴磊](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E6%B4%9B%E5%86%8D%E6%97%A0%E4%BD%B3%E4%BA%BA%20%E5%90%B4%E7%A3%8A%23) `407.0K 🔥` `NEW`
1. [老百姓看病应该多留个心眼](https://s.weibo.com/weibo?q=%23%E8%80%81%E7%99%BE%E5%A7%93%E7%9C%8B%E7%97%85%E5%BA%94%E8%AF%A5%E5%A4%9A%E7%95%99%E4%B8%AA%E5%BF%83%E7%9C%BC%23) `404.6K 🔥` `NEW`
1. [赵丽颖林更新楚乔传百指](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E6%9E%97%E6%9B%B4%E6%96%B0%E6%A5%9A%E4%B9%94%E4%BC%A0%E7%99%BE%E6%8C%87%23) `316.0K 🔥` `NEW`
1. [梦龙广告 芭蕾舞鞋](https://s.weibo.com/weibo?q=%23%E6%A2%A6%E9%BE%99%E5%B9%BF%E5%91%8A%20%E8%8A%AD%E8%95%BE%E8%88%9E%E9%9E%8B%23) `233.9K 🔥` `NEW`
1. [国际油价大幅上涨](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%99%85%E6%B2%B9%E4%BB%B7%E5%A4%A7%E5%B9%85%E4%B8%8A%E6%B6%A8%23) `158.8K 🔥` `NEW`
1. [徐艺洋竟然和孙怡合作过](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%89%BA%E6%B4%8B%E7%AB%9F%E7%84%B6%E5%92%8C%E5%AD%99%E6%80%A1%E5%90%88%E4%BD%9C%E8%BF%87%23) `155.3K 🔥` `NEW`
1. [演员郑雷去世](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E9%83%91%E9%9B%B7%E5%8E%BB%E4%B8%96%23) `145.6K 🔥` `NEW`
1. [张雪问了自己3个问题后辞职](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E9%97%AE%E4%BA%86%E8%87%AA%E5%B7%B13%E4%B8%AA%E9%97%AE%E9%A2%98%E5%90%8E%E8%BE%9E%E8%81%8C%23) `129.2K 🔥` `NEW`
1. [北京野生动物园豚豚情绪稳定消灭杨絮 (Dolphins in Beijing Wildlife Park are emotionally stable and eliminate Yang Xu)](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E9%87%8E%E7%94%9F%E5%8A%A8%E7%89%A9%E5%9B%AD%E8%B1%9A%E8%B1%9A%E6%83%85%E7%BB%AA%E7%A8%B3%E5%AE%9A%E6%B6%88%E7%81%AD%E6%9D%A8%E7%B5%AE%23) `127.8K 🔥` `NEW`
1. [女子连吃两天蓝莓胃里堵成石墙](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%BF%9E%E5%90%83%E4%B8%A4%E5%A4%A9%E8%93%9D%E8%8E%93%E8%83%83%E9%87%8C%E5%A0%B5%E6%88%90%E7%9F%B3%E5%A2%99%23) `103.8K 🔥` `NEW`
1. [两车剐蹭藏族大哥坚持赔偿女子婉拒](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E8%BD%A6%E5%89%90%E8%B9%AD%E8%97%8F%E6%97%8F%E5%A4%A7%E5%93%A5%E5%9D%9A%E6%8C%81%E8%B5%94%E5%81%BF%E5%A5%B3%E5%AD%90%E5%A9%89%E6%8B%92%23) `100.4K 🔥` `NEW`
1. [伊朗总统称美伊谈判已毫无意义](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E7%A7%B0%E7%BE%8E%E4%BC%8A%E8%B0%88%E5%88%A4%E5%B7%B2%E6%AF%AB%E6%97%A0%E6%84%8F%E4%B9%89%23) `99.3K 🔥` `NEW`
1. [官方通报从云南拉11吨西瓜全坏](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E4%BB%8E%E4%BA%91%E5%8D%97%E6%8B%8911%E5%90%A8%E8%A5%BF%E7%93%9C%E5%85%A8%E5%9D%8F%23) `98.6K 🔥` `NEW`
1. [女子戴美瞳十几年眼角膜长疙瘩](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%88%B4%E7%BE%8E%E7%9E%B3%E5%8D%81%E5%87%A0%E5%B9%B4%E7%9C%BC%E8%A7%92%E8%86%9C%E9%95%BF%E7%96%99%E7%98%A9%23) `98.4K 🔥` `NEW`
1. [每天做好这3件事能延寿近10年](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E5%A4%A9%E5%81%9A%E5%A5%BD%E8%BF%993%E4%BB%B6%E4%BA%8B%E8%83%BD%E5%BB%B6%E5%AF%BF%E8%BF%9110%E5%B9%B4%23) `95.9K 🔥` `NEW`
1. [高铁站工作人员回应站台全面禁烟](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%93%81%E7%AB%99%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E5%9B%9E%E5%BA%94%E7%AB%99%E5%8F%B0%E5%85%A8%E9%9D%A2%E7%A6%81%E7%83%9F%23) `95.0K 🔥` `NEW`
1. [宋亚轩 没副歌](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%20%E6%B2%A1%E5%89%AF%E6%AD%8C%23) `91.5K 🔥` `NEW`
1. [小猫居然理解了影子](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E5%B1%85%E7%84%B6%E7%90%86%E8%A7%A3%E4%BA%86%E5%BD%B1%E5%AD%90%23) `82.5K 🔥` `NEW`
1. [伊朗称美国荒唐可笑 (Iran calls the United States ridiculous)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E7%BE%8E%E5%9B%BD%E8%8D%92%E5%94%90%E5%8F%AF%E7%AC%91%23) `75.7K 🔥` `NEW`
1. [谢霆锋的破洞牛仔裤能看到底裤](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E9%9C%86%E9%94%8B%E7%9A%84%E7%A0%B4%E6%B4%9E%E7%89%9B%E4%BB%94%E8%A3%A4%E8%83%BD%E7%9C%8B%E5%88%B0%E5%BA%95%E8%A3%A4%23) `73.6K 🔥` `NEW`
1. [爵士vs湖人](https://s.weibo.com/weibo?q=%23%E7%88%B5%E5%A3%ABvs%E6%B9%96%E4%BA%BA%23) `70.2K 🔥` `NEW`
1. [赵子琪曾硬刚搜狐](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E6%9B%BE%E7%A1%AC%E5%88%9A%E6%90%9C%E7%8B%90%23) `65.2K 🔥` `NEW`
1. [掘金vs马刺](https://s.weibo.com/weibo?q=%23%E6%8E%98%E9%87%91vs%E9%A9%AC%E5%88%BA%23) `61.8K 🔥` `NEW`
1. [哩布哩布AI被曝生成涉黄违规视频](https://s.weibo.com/weibo?q=%23%E5%93%A9%E5%B8%83%E5%93%A9%E5%B8%83AI%E8%A2%AB%E6%9B%9D%E7%94%9F%E6%88%90%E6%B6%89%E9%BB%84%E8%BF%9D%E8%A7%84%E8%A7%86%E9%A2%91%23) `61.3K 🔥` `NEW`
1. [员工中了1500万彩票后直接离职 (Employee resigned immediately after winning 15 million yuan in lottery)](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A5%E4%B8%AD%E4%BA%861500%E4%B8%87%E5%BD%A9%E7%A5%A8%E5%90%8E%E7%9B%B4%E6%8E%A5%E7%A6%BB%E8%81%8C%23) `1.3M 🔥` `+24%`
1. [OPPOFindX9Ultra今日官宣 (OPPO Find X9 Ultra is officially announced today)](https://s.weibo.com/weibo?q=%23OPPOFindX9Ultra%E4%BB%8A%E6%97%A5%E5%AE%98%E5%AE%A3%23) `666.9K 🔥` `+30%`
1. [中国航天不断刷新宇宙级精彩 (China's aerospace industry continues to create world-class excitement)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%88%AA%E5%A4%A9%E4%B8%8D%E6%96%AD%E5%88%B7%E6%96%B0%E5%AE%87%E5%AE%99%E7%BA%A7%E7%B2%BE%E5%BD%A9%23) `677.4K 🔥`
1. [女子遭法官猥亵16分钟录音曝光](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%81%AD%E6%B3%95%E5%AE%98%E7%8C%A5%E4%BA%B516%E5%88%86%E9%92%9F%E5%BD%95%E9%9F%B3%E6%9B%9D%E5%85%89%23) `152.4K 🔥`
1. [短剧剧宣误入豪门少夫人聚会局 (The short play tells the story of accidentally entering a party of a wealthy young lady.)](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E5%89%A7%E5%89%A7%E5%AE%A3%E8%AF%AF%E5%85%A5%E8%B1%AA%E9%97%A8%E5%B0%91%E5%A4%AB%E4%BA%BA%E8%81%9A%E4%BC%9A%E5%B1%80%23) `117.3K 🔥`
1. [郑恺晒女儿全英文对话](https://s.weibo.com/weibo?q=%23%E9%83%91%E6%81%BA%E6%99%92%E5%A5%B3%E5%84%BF%E5%85%A8%E8%8B%B1%E6%96%87%E5%AF%B9%E8%AF%9D%23) `104.3K 🔥`
1. [男子掉14颗牙剩下14颗也得全拔掉](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8E%8914%E9%A2%97%E7%89%99%E5%89%A9%E4%B8%8B14%E9%A2%97%E4%B9%9F%E5%BE%97%E5%85%A8%E6%8B%94%E6%8E%89%23) `102.4K 🔥`
1. [箱包女王破产后卖包子重启人生](https://s.weibo.com/weibo?q=%23%E7%AE%B1%E5%8C%85%E5%A5%B3%E7%8E%8B%E7%A0%B4%E4%BA%A7%E5%90%8E%E5%8D%96%E5%8C%85%E5%AD%90%E9%87%8D%E5%90%AF%E4%BA%BA%E7%94%9F%23) `100.7K 🔥`
1. [12306回应静音车厢售货不叫卖 (12306 responded to sales in silent carriages instead of hawking)](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E9%9D%99%E9%9F%B3%E8%BD%A6%E5%8E%A2%E5%94%AE%E8%B4%A7%E4%B8%8D%E5%8F%AB%E5%8D%96%23) `99.7K 🔥`
1. [孙子怕爷爷去世每天偷偷带肉回家 (My grandson is afraid that his grandfather will die and he secretly brings meat home every day.)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%AD%90%E6%80%95%E7%88%B7%E7%88%B7%E5%8E%BB%E4%B8%96%E6%AF%8F%E5%A4%A9%E5%81%B7%E5%81%B7%E5%B8%A6%E8%82%89%E5%9B%9E%E5%AE%B6%23) `96.1K 🔥`
1. [王石否认被抓 (Wang Shi denies being arrested)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%9F%B3%E5%90%A6%E8%AE%A4%E8%A2%AB%E6%8A%93%23) `77.0K 🔥`
1. [欧尔班承认败选 (Orban admits defeat)](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%B0%94%E7%8F%AD%E6%89%BF%E8%AE%A4%E8%B4%A5%E9%80%89%23) `290.7K 🔥` `-33%`
1. [网传浪姐7一公个人喜爱度排名 (According to the Internet, the personal favorite ranking of Sister Lang 7)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%B5%AA%E5%A7%907%E4%B8%80%E5%85%AC%E4%B8%AA%E4%BA%BA%E5%96%9C%E7%88%B1%E5%BA%A6%E6%8E%92%E5%90%8D%23) `139.7K 🔥` `-81%`
1. [朴宝剑探班王安宇 (Park Bo Gum visits Wang Anyu)](https://s.weibo.com/weibo?q=%23%E6%9C%B4%E5%AE%9D%E5%89%91%E6%8E%A2%E7%8F%AD%E7%8E%8B%E5%AE%89%E5%AE%87%23) `114.4K 🔥` `-26%`
1. [伊朗公布驱离美军舰视频](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%85%AC%E5%B8%83%E9%A9%B1%E7%A6%BB%E7%BE%8E%E5%86%9B%E8%88%B0%E8%A7%86%E9%A2%91%23) `107.6K 🔥` `-57%`
1. [仙逆王林](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%E7%8E%8B%E6%9E%97%23) `104.7K 🔥` `-41%`
1. [匈牙利](https://s.weibo.com/weibo?q=%23%E5%8C%88%E7%89%99%E5%88%A9%23) `103.0K 🔥` `-35%`
1. [官方回应为什么不能把杨柳树都砍了 (Official response: Why can’t all willow trees be cut down?)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E8%83%BD%E6%8A%8A%E6%9D%A8%E6%9F%B3%E6%A0%91%E9%83%BD%E7%A0%8D%E4%BA%86%23) `101.8K 🔥` `-47%`
1. [赵子琪硬刚浪姐](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E7%A1%AC%E5%88%9A%E6%B5%AA%E5%A7%90%23) `101.3K 🔥` `-22%`
1. [境外涉黄AI软件绕过监管流入国内](https://s.weibo.com/weibo?q=%23%E5%A2%83%E5%A4%96%E6%B6%89%E9%BB%84AI%E8%BD%AF%E4%BB%B6%E7%BB%95%E8%BF%87%E7%9B%91%E7%AE%A1%E6%B5%81%E5%85%A5%E5%9B%BD%E5%86%85%23) `93.3K 🔥` `-50%`
1. [A股交易将迎重要调整](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%BA%A4%E6%98%93%E5%B0%86%E8%BF%8E%E9%87%8D%E8%A6%81%E8%B0%83%E6%95%B4%23) `82.2K 🔥` `-45%`
1. [张雪机车竞拍者拒绝加价500万转售 (Zhang Xue's motorcycle bidder refused to increase the price by 5 million for resale)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E7%AB%9E%E6%8B%8D%E8%80%85%E6%8B%92%E7%BB%9D%E5%8A%A0%E4%BB%B7500%E4%B8%87%E8%BD%AC%E5%94%AE%23) `80.5K 🔥` `-46%`
1. [男子住48元宾馆身亡家属索赔被驳回 (Man’s family’s claim for death after staying in a 48-yuan hotel was rejected)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%BD%8F48%E5%85%83%E5%AE%BE%E9%A6%86%E8%BA%AB%E4%BA%A1%E5%AE%B6%E5%B1%9E%E7%B4%A2%E8%B5%94%E8%A2%AB%E9%A9%B3%E5%9B%9E%23) `68.5K 🔥` `-45%`
1. [李荣浩真转我五百了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%E7%9C%9F%E8%BD%AC%E6%88%91%E4%BA%94%E7%99%BE%E4%BA%86%23) `64.7K 🔥` `-40%`
1. [王橹杰小咴故事原型](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%B0%8F%E5%92%B4%E6%95%85%E4%BA%8B%E5%8E%9F%E5%9E%8B%23) `61.8K 🔥` `-36%`

Updated at 2026-04-13 09:11:36

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
