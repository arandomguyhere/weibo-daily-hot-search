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

1. [女孩顺风车内暴晒2小时向家人求救 (Girl was exposed to the sun for 2 hours in a hitchhiking car and asked for help from her family)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E9%A1%BA%E9%A3%8E%E8%BD%A6%E5%86%85%E6%9A%B4%E6%99%922%E5%B0%8F%E6%97%B6%E5%90%91%E5%AE%B6%E4%BA%BA%E6%B1%82%E6%95%91%23) `622.8K 🔥` `NEW`
1. [B站大物是也停更](https://s.weibo.com/weibo?q=%23B%E7%AB%99%E5%A4%A7%E7%89%A9%E6%98%AF%E4%B9%9F%E5%81%9C%E6%9B%B4%23) `620.2K 🔥` `NEW`
1. [青山刚昌回应名侦探柯南大结局](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B1%B1%E5%88%9A%E6%98%8C%E5%9B%9E%E5%BA%94%E5%90%8D%E4%BE%A6%E6%8E%A2%E6%9F%AF%E5%8D%97%E5%A4%A7%E7%BB%93%E5%B1%80%23) `370.8K 🔥` `NEW`
1. [九门彩蛋](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E5%BD%A9%E8%9B%8B%23) `370.8K 🔥` `NEW`
1. [胖东来被指招强奸犯](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E8%A2%AB%E6%8C%87%E6%8B%9B%E5%BC%BA%E5%A5%B8%E7%8A%AF%23) `370.7K 🔥` `NEW`
1. [王菲基因发力了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E5%9F%BA%E5%9B%A0%E5%8F%91%E5%8A%9B%E4%BA%86%23) `370.5K 🔥` `NEW`
1. [时代峰峻就伪造授权文件发律师声明](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B3%B0%E5%B3%BB%E5%B0%B1%E4%BC%AA%E9%80%A0%E6%8E%88%E6%9D%83%E6%96%87%E4%BB%B6%E5%8F%91%E5%BE%8B%E5%B8%88%E5%A3%B0%E6%98%8E%23) `361.6K 🔥` `NEW`
1. [欢天喜地七仙女纱裙设计](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%A4%A9%E5%96%9C%E5%9C%B0%E4%B8%83%E4%BB%99%E5%A5%B3%E7%BA%B1%E8%A3%99%E8%AE%BE%E8%AE%A1%23) `263.2K 🔥` `NEW`
1. [四川巴中3999万资金等待认领](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%B7%B4%E4%B8%AD3999%E4%B8%87%E8%B5%84%E9%87%91%E7%AD%89%E5%BE%85%E8%AE%A4%E9%A2%86%23) `263.2K 🔥` `NEW`
1. [游客称一家三口遭遇网约车司机尾随威胁](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E5%AE%A2%E7%A7%B0%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E9%81%AD%E9%81%87%E7%BD%91%E7%BA%A6%E8%BD%A6%E5%8F%B8%E6%9C%BA%E5%B0%BE%E9%9A%8F%E5%A8%81%E8%83%81%23) `263.1K 🔥` `NEW`
1. [蓝盈莹曹骏在一起三年 (Lan Yingying and Cao Jun have been together for three years)](https://s.weibo.com/weibo?q=%23%E8%93%9D%E7%9B%88%E8%8E%B9%E6%9B%B9%E9%AA%8F%E5%9C%A8%E4%B8%80%E8%B5%B7%E4%B8%89%E5%B9%B4%23) `196.0K 🔥` `NEW`
1. [巴中警方寻3999万资金主人](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E4%B8%AD%E8%AD%A6%E6%96%B9%E5%AF%BB3999%E4%B8%87%E8%B5%84%E9%87%91%E4%B8%BB%E4%BA%BA%23) `189.4K 🔥` `NEW`
1. [贫穷限制了DeepSeek的想象力](https://s.weibo.com/weibo?q=%23%E8%B4%AB%E7%A9%B7%E9%99%90%E5%88%B6%E4%BA%86DeepSeek%E7%9A%84%E6%83%B3%E8%B1%A1%E5%8A%9B%23) `189.3K 🔥` `NEW`
1. [孙颖莎王曼昱仅差708分](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E7%8E%8B%E6%9B%BC%E6%98%B1%E4%BB%85%E5%B7%AE708%E5%88%86%23) `189.2K 🔥` `NEW`
1. [杨幂造型王安](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E9%80%A0%E5%9E%8B%E7%8E%8B%E5%AE%89%23) `170.8K 🔥` `NEW`
1. [公公撞破儿媳出轨犹豫不敢告诉儿子](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%85%AC%E6%92%9E%E7%A0%B4%E5%84%BF%E5%AA%B3%E5%87%BA%E8%BD%A8%E7%8A%B9%E8%B1%AB%E4%B8%8D%E6%95%A2%E5%91%8A%E8%AF%89%E5%84%BF%E5%AD%90%23) `166.1K 🔥` `NEW`
1. [爸爸说幸不幸福跟嫁给谁没关系](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E8%AF%B4%E5%B9%B8%E4%B8%8D%E5%B9%B8%E7%A6%8F%E8%B7%9F%E5%AB%81%E7%BB%99%E8%B0%81%E6%B2%A1%E5%85%B3%E7%B3%BB%23) `370.9K 🔥` `+101%`
1. [刘亦菲成都](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%BA%A6%E8%8F%B2%E6%88%90%E9%83%BD%23) `263.3K 🔥` `+25%`
1. [蓝盈莹承认恋情](https://s.weibo.com/weibo?q=%23%E8%93%9D%E7%9B%88%E8%8E%B9%E6%89%BF%E8%AE%A4%E6%81%8B%E6%83%85%23) `263.0K 🔥` `+23%`
1. [建议这类手机壳赶紧扔掉](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E8%BF%99%E7%B1%BB%E6%89%8B%E6%9C%BA%E5%A3%B3%E8%B5%B6%E7%B4%A7%E6%89%94%E6%8E%89%23) `262.9K 🔥` `+21%`
1. [原来排卵期一直被误解了 (It turns out that the ovulation period has been misunderstood.)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%8E%92%E5%8D%B5%E6%9C%9F%E4%B8%80%E7%9B%B4%E8%A2%AB%E8%AF%AF%E8%A7%A3%E4%BA%86%23) `256.3K 🔥` `+21%`
1. [怎么发现一个人不是好人](https://s.weibo.com/weibo?q=%23%E6%80%8E%E4%B9%88%E5%8F%91%E7%8E%B0%E4%B8%80%E4%B8%AA%E4%BA%BA%E4%B8%8D%E6%98%AF%E5%A5%BD%E4%BA%BA%23) `228.2K 🔥` `+22%`
1. [得爱成啥样才能接受异地恋](https://s.weibo.com/weibo?q=%23%E5%BE%97%E7%88%B1%E6%88%90%E5%95%A5%E6%A0%B7%E6%89%8D%E8%83%BD%E6%8E%A5%E5%8F%97%E5%BC%82%E5%9C%B0%E6%81%8B%23) `189.4K 🔥` `+24%`
1. [宇树发布超人机器人 (Yushu releases superman robot)](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E5%8F%91%E5%B8%83%E8%B6%85%E4%BA%BA%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `1.1M 🔥`
1. [小欢喜未播出镜头 (Unbroadcast scenes of Little Joy)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%AC%A2%E5%96%9C%E6%9C%AA%E6%92%AD%E5%87%BA%E9%95%9C%E5%A4%B4%23) `814.2K 🔥`
1. [第一视角体验非遗文旅](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E8%A7%86%E8%A7%92%E4%BD%93%E9%AA%8C%E9%9D%9E%E9%81%97%E6%96%87%E6%97%85%23) `629.2K 🔥`
1. [泡面不健康不是因为防腐剂](https://s.weibo.com/weibo?q=%23%E6%B3%A1%E9%9D%A2%E4%B8%8D%E5%81%A5%E5%BA%B7%E4%B8%8D%E6%98%AF%E5%9B%A0%E4%B8%BA%E9%98%B2%E8%85%90%E5%89%82%23) `624.9K 🔥`
1. [谢谢你医生 (thank you doctor)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E8%B0%A2%E4%BD%A0%E5%8C%BB%E7%94%9F%23) `441.8K 🔥`
1. [黄山一猴子误触高压电身亡](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%B1%B1%E4%B8%80%E7%8C%B4%E5%AD%90%E8%AF%AF%E8%A7%A6%E9%AB%98%E5%8E%8B%E7%94%B5%E8%BA%AB%E4%BA%A1%23) `397.3K 🔥`
1. [Jennie不得不用头发遮挡](https://s.weibo.com/weibo?q=%23Jennie%E4%B8%8D%E5%BE%97%E4%B8%8D%E7%94%A8%E5%A4%B4%E5%8F%91%E9%81%AE%E6%8C%A1%23) `370.6K 🔥`
1. [9块9的手机壳还敢买吗](https://s.weibo.com/weibo?q=%239%E5%9D%979%E7%9A%84%E6%89%8B%E6%9C%BA%E5%A3%B3%E8%BF%98%E6%95%A2%E4%B9%B0%E5%90%97%23) `370.5K 🔥`
1. [胡一天去韩国也逃不过三件套](https://s.weibo.com/weibo?q=%23%E8%83%A1%E4%B8%80%E5%A4%A9%E5%8E%BB%E9%9F%A9%E5%9B%BD%E4%B9%9F%E9%80%83%E4%B8%8D%E8%BF%87%E4%B8%89%E4%BB%B6%E5%A5%97%23) `369.8K 🔥`
1. [厚本瘦了18斤](https://s.weibo.com/weibo?q=%23%E5%8E%9A%E6%9C%AC%E7%98%A6%E4%BA%8618%E6%96%A4%23) `197.2K 🔥`
1. [长鑫科技总市值逼近4万亿 (The total market value of Changxin Technology is approaching 4 trillion)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E6%80%BB%E5%B8%82%E5%80%BC%E9%80%BC%E8%BF%914%E4%B8%87%E4%BA%BF%23) `192.2K 🔥`
1. [父子在海拔4000米高原发现塔黄 (Father and son discovered Tahuang on a plateau 4,000 meters above sea level)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E5%AD%90%E5%9C%A8%E6%B5%B7%E6%8B%944000%E7%B1%B3%E9%AB%98%E5%8E%9F%E5%8F%91%E7%8E%B0%E5%A1%94%E9%BB%84%23) `190.2K 🔥`
1. [王楚然三里屯](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E4%B8%89%E9%87%8C%E5%B1%AF%23) `189.8K 🔥`
1. [陈都灵吃到关晓彤的瓜会去求证 (Chen Duling will seek confirmation after eating Guan Xiaotong's melon)](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E5%90%83%E5%88%B0%E5%85%B3%E6%99%93%E5%BD%A4%E7%9A%84%E7%93%9C%E4%BC%9A%E5%8E%BB%E6%B1%82%E8%AF%81%23) `189.6K 🔥`
1. [炎亚纶开团 辰亦儒秒跟 (Yan Yalun starts a group and Chen Yiru follows immediately)](https://s.weibo.com/weibo?q=%23%E7%82%8E%E4%BA%9A%E7%BA%B6%E5%BC%80%E5%9B%A2%20%E8%BE%B0%E4%BA%A6%E5%84%92%E7%A7%92%E8%B7%9F%23) `189.5K 🔥`
1. [手机壳 性早熟](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E5%A3%B3%20%E6%80%A7%E6%97%A9%E7%86%9F%23) `189.5K 🔥`
1. [长辈的冰箱vs我的冰箱](https://s.weibo.com/weibo?q=%23%E9%95%BF%E8%BE%88%E7%9A%84%E5%86%B0%E7%AE%B1vs%E6%88%91%E7%9A%84%E5%86%B0%E7%AE%B1%23) `189.5K 🔥`
1. [终于懂意大利人看菠萝披萨了 (I finally understand how Italians look at pineapple pizza)](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%87%82%E6%84%8F%E5%A4%A7%E5%88%A9%E4%BA%BA%E7%9C%8B%E8%8F%A0%E8%90%9D%E6%8A%AB%E8%90%A8%E4%BA%86%23) `189.4K 🔥`
1. [爸爸酒后熟睡翻身压住婴儿脑袋](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E9%85%92%E5%90%8E%E7%86%9F%E7%9D%A1%E7%BF%BB%E8%BA%AB%E5%8E%8B%E4%BD%8F%E5%A9%B4%E5%84%BF%E8%84%91%E8%A2%8B%23) `189.2K 🔥`
1. [牙齿疼一夜钻开瞬间流出脓血](https://s.weibo.com/weibo?q=%23%E7%89%99%E9%BD%BF%E7%96%BC%E4%B8%80%E5%A4%9C%E9%92%BB%E5%BC%80%E7%9E%AC%E9%97%B4%E6%B5%81%E5%87%BA%E8%84%93%E8%A1%80%23) `189.2K 🔥`
1. [协和医生破解22年数学难题论文被扒](https://s.weibo.com/weibo?q=%23%E5%8D%8F%E5%92%8C%E5%8C%BB%E7%94%9F%E7%A0%B4%E8%A7%A322%E5%B9%B4%E6%95%B0%E5%AD%A6%E9%9A%BE%E9%A2%98%E8%AE%BA%E6%96%87%E8%A2%AB%E6%89%92%23) `189.1K 🔥`
1. [王一博手环戴了七百多天](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%89%8B%E7%8E%AF%E6%88%B4%E4%BA%86%E4%B8%83%E7%99%BE%E5%A4%9A%E5%A4%A9%23) `189.1K 🔥`
1. [宇树超人能原地跳高2米 (Yushu Superman can jump 2 meters high on the spot)](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E8%B6%85%E4%BA%BA%E8%83%BD%E5%8E%9F%E5%9C%B0%E8%B7%B3%E9%AB%982%E7%B1%B3%23) `185.0K 🔥`
1. [好想把披哥淘汰了复活浪姐](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E6%83%B3%E6%8A%8A%E6%8A%AB%E5%93%A5%E6%B7%98%E6%B1%B0%E4%BA%86%E5%A4%8D%E6%B4%BB%E6%B5%AA%E5%A7%90%23) `174.0K 🔥`
1. [A股牛终于来了吗 (Is the A-share bull finally here?)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E7%89%9B%E7%BB%88%E4%BA%8E%E6%9D%A5%E4%BA%86%E5%90%97%23) `307.3K 🔥` `-32%`
1. [夫妻俩砌了一堵墙结果救了自己命 (The couple built a wall and saved their lives)](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E4%BF%A9%E7%A0%8C%E4%BA%86%E4%B8%80%E5%A0%B5%E5%A2%99%E7%BB%93%E6%9E%9C%E6%95%91%E4%BA%86%E8%87%AA%E5%B7%B1%E5%91%BD%23) `190.3K 🔥` `-58%`
1. [同事这辈子都不会忘记这个词了](https://s.weibo.com/weibo?q=%23%E5%90%8C%E4%BA%8B%E8%BF%99%E8%BE%88%E5%AD%90%E9%83%BD%E4%B8%8D%E4%BC%9A%E5%BF%98%E8%AE%B0%E8%BF%99%E4%B8%AA%E8%AF%8D%E4%BA%86%23) `190.1K 🔥` `-57%`
1. [双高胎为了看自担演唱会才肯打扮 (The twin-talls are willing to dress up just to watch Zidan’s concert)](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E9%AB%98%E8%83%8E%E4%B8%BA%E4%BA%86%E7%9C%8B%E8%87%AA%E6%8B%85%E6%BC%94%E5%94%B1%E4%BC%9A%E6%89%8D%E8%82%AF%E6%89%93%E6%89%AE%23) `189.3K 🔥` `-57%`

Updated at 2026-08-17 18:15:49

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
