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

1. [报告里的民生温度热气腾腾 (People’s livelihood is hot in the report)](https://s.weibo.com/weibo?q=%23%E6%8A%A5%E5%91%8A%E9%87%8C%E7%9A%84%E6%B0%91%E7%94%9F%E6%B8%A9%E5%BA%A6%E7%83%AD%E6%B0%94%E8%85%BE%E8%85%BE%23) `623.7K 🔥` `NEW`
1. [教师法](https://s.weibo.com/weibo?q=%23%E6%95%99%E5%B8%88%E6%B3%95%23) `528.6K 🔥` `NEW`
1. [中国拥有全球规模最大的海运船队](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%8B%A5%E6%9C%89%E5%85%A8%E7%90%83%E8%A7%84%E6%A8%A1%E6%9C%80%E5%A4%A7%E7%9A%84%E6%B5%B7%E8%BF%90%E8%88%B9%E9%98%9F%23) `512.4K 🔥` `NEW`
1. [99年女生读博时转行开全女维修公司](https://s.weibo.com/weibo?q=%2399%E5%B9%B4%E5%A5%B3%E7%94%9F%E8%AF%BB%E5%8D%9A%E6%97%B6%E8%BD%AC%E8%A1%8C%E5%BC%80%E5%85%A8%E5%A5%B3%E7%BB%B4%E4%BF%AE%E5%85%AC%E5%8F%B8%23) `508.0K 🔥` `NEW`
1. [91岁女儿受委屈向113岁妈妈哭诉](https://s.weibo.com/weibo?q=%2391%E5%B2%81%E5%A5%B3%E5%84%BF%E5%8F%97%E5%A7%94%E5%B1%88%E5%90%91113%E5%B2%81%E5%A6%88%E5%A6%88%E5%93%AD%E8%AF%89%23) `505.3K 🔥` `NEW`
1. [91岁还能和妈妈撒娇是什么体验](https://s.weibo.com/weibo?q=%2391%E5%B2%81%E8%BF%98%E8%83%BD%E5%92%8C%E5%A6%88%E5%A6%88%E6%92%92%E5%A8%87%E6%98%AF%E4%BB%80%E4%B9%88%E4%BD%93%E9%AA%8C%23) `496.2K 🔥` `NEW`
1. [腾讯视频 版本回调](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E8%A7%86%E9%A2%91%20%E7%89%88%E6%9C%AC%E5%9B%9E%E8%B0%83%23) `495.1K 🔥` `NEW`
1. [腾讯近期因内容违规被罚](https://s.weibo.com/weibo?q=%23%E8%85%BE%E8%AE%AF%E8%BF%91%E6%9C%9F%E5%9B%A0%E5%86%85%E5%AE%B9%E8%BF%9D%E8%A7%84%E8%A2%AB%E7%BD%9A%23) `407.1K 🔥` `NEW`
1. [导演说郭晓婷王天辰不要在一起](https://s.weibo.com/weibo?q=%23%E5%AF%BC%E6%BC%94%E8%AF%B4%E9%83%AD%E6%99%93%E5%A9%B7%E7%8E%8B%E5%A4%A9%E8%BE%B0%E4%B8%8D%E8%A6%81%E5%9C%A8%E4%B8%80%E8%B5%B7%23) `375.3K 🔥` `NEW`
1. [CELINE秀场细节满分](https://s.weibo.com/weibo?q=%23CELINE%E7%A7%80%E5%9C%BA%E7%BB%86%E8%8A%82%E6%BB%A1%E5%88%86%23) `331.7K 🔥` `NEW`
1. [胖东来12名店长共分2.4亿资产利润 (Fat Donglai’s 12 store managers shared a total of 240 million in asset profits)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A512%E5%90%8D%E5%BA%97%E9%95%BF%E5%85%B1%E5%88%862.4%E4%BA%BF%E8%B5%84%E4%BA%A7%E5%88%A9%E6%B6%A6%23) `282.6K 🔥` `NEW`
1. [油价将上调加油站员工发声](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E5%B0%86%E4%B8%8A%E8%B0%83%E5%8A%A0%E6%B2%B9%E7%AB%99%E5%91%98%E5%B7%A5%E5%8F%91%E5%A3%B0%23) `282.6K 🔥` `NEW`
1. [张伯礼说久坐不宜超过1小时](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BC%AF%E7%A4%BC%E8%AF%B4%E4%B9%85%E5%9D%90%E4%B8%8D%E5%AE%9C%E8%B6%85%E8%BF%871%E5%B0%8F%E6%97%B6%23) `282.6K 🔥` `NEW`
1. [逐玉热度](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E7%83%AD%E5%BA%A6%23) `282.6K 🔥` `NEW`
1. [脾堵不堵一个动作自测](https://s.weibo.com/weibo?q=%23%E8%84%BE%E5%A0%B5%E4%B8%8D%E5%A0%B5%E4%B8%80%E4%B8%AA%E5%8A%A8%E4%BD%9C%E8%87%AA%E6%B5%8B%23) `282.5K 🔥` `NEW`
1. [高至霆回应耿耿吴柏松he了](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%87%B3%E9%9C%86%E5%9B%9E%E5%BA%94%E8%80%BF%E8%80%BF%E5%90%B4%E6%9F%8F%E6%9D%BEhe%E4%BA%86%23) `282.5K 🔥` `NEW`
1. [我上班简直在乱摸鱼](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%B8%8A%E7%8F%AD%E7%AE%80%E7%9B%B4%E5%9C%A8%E4%B9%B1%E6%91%B8%E9%B1%BC%23) `282.5K 🔥` `NEW`
1. [卢昱晓 拿到了金灿灿的苹果](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%20%E6%8B%BF%E5%88%B0%E4%BA%86%E9%87%91%E7%81%BF%E7%81%BF%E7%9A%84%E8%8B%B9%E6%9E%9C%23) `282.4K 🔥` `NEW`
1. [王者荣耀打击代练上分](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E6%89%93%E5%87%BB%E4%BB%A3%E7%BB%83%E4%B8%8A%E5%88%86%23) `282.4K 🔥` `NEW`
1. [宁德时代2025年净利润722亿元](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A32025%E5%B9%B4%E5%87%80%E5%88%A9%E6%B6%A6722%E4%BA%BF%E5%85%83%23) `282.4K 🔥` `NEW`
1. [13岁中国小孩哥夺得世界街舞冠军 (13-year-old Chinese kid wins world hip-hop dance championship)](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E4%B8%AD%E5%9B%BD%E5%B0%8F%E5%AD%A9%E5%93%A5%E5%A4%BA%E5%BE%97%E4%B8%96%E7%95%8C%E8%A1%97%E8%88%9E%E5%86%A0%E5%86%9B%23) `1.1M 🔥` `+137%`
1. [农业农村部部长建议大家少吃点油 (The Minister of Agriculture and Rural Affairs advises everyone to eat less oil)](https://s.weibo.com/weibo?q=%23%E5%86%9C%E4%B8%9A%E5%86%9C%E6%9D%91%E9%83%A8%E9%83%A8%E9%95%BF%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%B0%91%E5%90%83%E7%82%B9%E6%B2%B9%23) `800.6K 🔥`
1. [听劝淘宝闪购真的合作F1了 (After listening to the advice, Taobao’s flash sale really cooperated with F1)](https://s.weibo.com/weibo?q=%23%E5%90%AC%E5%8A%9D%E6%B7%98%E5%AE%9D%E9%97%AA%E8%B4%AD%E7%9C%9F%E7%9A%84%E5%90%88%E4%BD%9CF1%E4%BA%86%23) `568.5K 🔥`
1. [周深1天官宣8场演唱会 (Zhou Shen officially announces 8 concerts in 1 day)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%B7%B11%E5%A4%A9%E5%AE%98%E5%AE%A38%E5%9C%BA%E6%BC%94%E5%94%B1%E4%BC%9A%23) `526.0K 🔥`
1. [美被迫中止军事行动的可能性上升](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%A2%AB%E8%BF%AB%E4%B8%AD%E6%AD%A2%E5%86%9B%E4%BA%8B%E8%A1%8C%E5%8A%A8%E7%9A%84%E5%8F%AF%E8%83%BD%E6%80%A7%E4%B8%8A%E5%8D%87%23) `521.4K 🔥`
1. [人大报告精华版 (Highlights of the National People's Congress Report)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%A4%A7%E6%8A%A5%E5%91%8A%E7%B2%BE%E5%8D%8E%E7%89%88%23) `489.2K 🔥`
1. [千万不要在洗澡时做人脸认证](https://s.weibo.com/weibo?q=%23%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E5%9C%A8%E6%B4%97%E6%BE%A1%E6%97%B6%E5%81%9A%E4%BA%BA%E8%84%B8%E8%AE%A4%E8%AF%81%23) `479.3K 🔥`
1. [杨超越 中国有自己的张元英 (Yang Chaoyue China has its own Zhang Yuanying)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E8%B6%85%E8%B6%8A%20%E4%B8%AD%E5%9B%BD%E6%9C%89%E8%87%AA%E5%B7%B1%E7%9A%84%E5%BC%A0%E5%85%83%E8%8B%B1%23) `420.8K 🔥`
1. [王安宇火星人全球品牌代言人](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E7%81%AB%E6%98%9F%E4%BA%BA%E5%85%A8%E7%90%83%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `516.0K 🔥` `-29%`
1. [重案六组 张一山李沐宸 (Serious Case Group Six Zhang Yishan and Li Muchen)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E6%A1%88%E5%85%AD%E7%BB%84%20%E5%BC%A0%E4%B8%80%E5%B1%B1%E6%9D%8E%E6%B2%90%E5%AE%B8%23) `390.9K 🔥` `-28%`
1. [建议中小学周边禁设台球厅](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%B8%AD%E5%B0%8F%E5%AD%A6%E5%91%A8%E8%BE%B9%E7%A6%81%E8%AE%BE%E5%8F%B0%E7%90%83%E5%8E%85%23) `382.0K 🔥` `-34%`
1. [爱玩拼豆的人天塌了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E7%8E%A9%E6%8B%BC%E8%B1%86%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `282.6K 🔥` `-39%`
1. [白鹿别把白敬亭扇感冒了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%88%AB%E6%8A%8A%E7%99%BD%E6%95%AC%E4%BA%AD%E6%89%87%E6%84%9F%E5%86%92%E4%BA%86%23) `282.6K 🔥` `-41%`
1. [逐玉 杀人者的噩梦竟然是杀猪](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%20%E6%9D%80%E4%BA%BA%E8%80%85%E7%9A%84%E5%99%A9%E6%A2%A6%E7%AB%9F%E7%84%B6%E6%98%AF%E6%9D%80%E7%8C%AA%23) `282.6K 🔥` `-39%`
1. [长玉大人开恩 谢征都杀喽 (Lord Changyu, please show mercy. Xie Zhengdu will be killed.)](https://s.weibo.com/weibo?q=%23%E9%95%BF%E7%8E%89%E5%A4%A7%E4%BA%BA%E5%BC%80%E6%81%A9%20%E8%B0%A2%E5%BE%81%E9%83%BD%E6%9D%80%E5%96%BD%23) `282.6K 🔥` `-39%`
1. [TVB女主播靠指纹破37年杀人悬案](https://s.weibo.com/weibo?q=%23TVB%E5%A5%B3%E4%B8%BB%E6%92%AD%E9%9D%A0%E6%8C%87%E7%BA%B9%E7%A0%B437%E5%B9%B4%E6%9D%80%E4%BA%BA%E6%82%AC%E6%A1%88%23) `282.6K 🔥` `-39%`
1. [宋亚轩直播](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E7%9B%B4%E6%92%AD%23) `282.6K 🔥` `-39%`
1. [日本部署远程导弹 (Japan deploys long-range missiles)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E9%83%A8%E7%BD%B2%E8%BF%9C%E7%A8%8B%E5%AF%BC%E5%BC%B9%23) `282.6K 🔥` `-39%`
1. [甜茶卖上霉豆腐了 (Sweet tea now sells molded tofu)](https://s.weibo.com/weibo?q=%23%E7%94%9C%E8%8C%B6%E5%8D%96%E4%B8%8A%E9%9C%89%E8%B1%86%E8%85%90%E4%BA%86%23) `282.6K 🔥` `-39%`
1. [嘉人镜头冲到王一博怀里了](https://s.weibo.com/weibo?q=%23%E5%98%89%E4%BA%BA%E9%95%9C%E5%A4%B4%E5%86%B2%E5%88%B0%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%80%80%E9%87%8C%E4%BA%86%23) `282.5K 🔥` `-39%`
1. [逐玉弹幕 恶语伤牛心](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%BC%B9%E5%B9%95%20%E6%81%B6%E8%AF%AD%E4%BC%A4%E7%89%9B%E5%BF%83%23) `282.5K 🔥` `-39%`
1. [普京祝贺伊朗新任最高领袖](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E7%A5%9D%E8%B4%BA%E4%BC%8A%E6%9C%97%E6%96%B0%E4%BB%BB%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%23) `282.5K 🔥` `-39%`
1. [品质盛典后台直播](https://s.weibo.com/weibo?q=%23%E5%93%81%E8%B4%A8%E7%9B%9B%E5%85%B8%E5%90%8E%E5%8F%B0%E7%9B%B4%E6%92%AD%23) `282.5K 🔥` `-39%`
1. [妈妈在被子上缝了一道线](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%9C%A8%E8%A2%AB%E5%AD%90%E4%B8%8A%E7%BC%9D%E4%BA%86%E4%B8%80%E9%81%93%E7%BA%BF%23) `282.5K 🔥` `-39%`
1. [青岛女子回应十几万黄金藏冰箱冷冻](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E5%A5%B3%E5%AD%90%E5%9B%9E%E5%BA%94%E5%8D%81%E5%87%A0%E4%B8%87%E9%BB%84%E9%87%91%E8%97%8F%E5%86%B0%E7%AE%B1%E5%86%B7%E5%86%BB%23) `282.5K 🔥` `-39%`
1. [镖人 全女版 (Escort all-female version)](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%20%E5%85%A8%E5%A5%B3%E7%89%88%23) `282.5K 🔥` `-39%`
1. [广东名医欧阳卫权去世](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E5%90%8D%E5%8C%BB%E6%AC%A7%E9%98%B3%E5%8D%AB%E6%9D%83%E5%8E%BB%E4%B8%96%23) `282.5K 🔥` `-39%`
1. [美议员称推翻伊朗美国将在中东大赚](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%AE%AE%E5%91%98%E7%A7%B0%E6%8E%A8%E7%BF%BB%E4%BC%8A%E6%9C%97%E7%BE%8E%E5%9B%BD%E5%B0%86%E5%9C%A8%E4%B8%AD%E4%B8%9C%E5%A4%A7%E8%B5%9A%23) `282.4K 🔥` `-39%`
1. [48岁中国女博导在埃及突然去世](https://s.weibo.com/weibo?q=%2348%E5%B2%81%E4%B8%AD%E5%9B%BD%E5%A5%B3%E5%8D%9A%E5%AF%BC%E5%9C%A8%E5%9F%83%E5%8F%8A%E7%AA%81%E7%84%B6%E5%8E%BB%E4%B8%96%23) `282.4K 🔥` `-39%`
1. [公司辞退闭眼小憩3分钟员工违法 (Company fires employee for taking 3-minute nap with eyes closed, illegal)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E8%BE%9E%E9%80%80%E9%97%AD%E7%9C%BC%E5%B0%8F%E6%86%A93%E5%88%86%E9%92%9F%E5%91%98%E5%B7%A5%E8%BF%9D%E6%B3%95%23) `282.4K 🔥` `-50%`

Updated at 2026-03-09 21:46:16

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
