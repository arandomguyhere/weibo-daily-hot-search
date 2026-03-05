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

1. [攻玉主演 侯明昊鹤男 (Gong Yu starring Hou Minghao and Henan)](https://s.weibo.com/weibo?q=%23%E6%94%BB%E7%8E%89%E4%B8%BB%E6%BC%94%20%E4%BE%AF%E6%98%8E%E6%98%8A%E9%B9%A4%E7%94%B7%23) `589.5K 🔥` `NEW`
1. [李宁品牌代言人白鹿](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%81%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%E7%99%BD%E9%B9%BF%23) `579.4K 🔥` `NEW`
1. [WBG对战AL](https://s.weibo.com/weibo?q=%23WBG%E5%AF%B9%E6%88%98AL%23) `566.3K 🔥` `NEW`
1. [建议短视频凌晨1点至5点深夜静默](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E7%9F%AD%E8%A7%86%E9%A2%91%E5%87%8C%E6%99%A81%E7%82%B9%E8%87%B35%E7%82%B9%E6%B7%B1%E5%A4%9C%E9%9D%99%E9%BB%98%23) `531.0K 🔥` `NEW`
1. [薛之谦万兽之王巡回演唱会](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E4%B8%87%E5%85%BD%E4%B9%8B%E7%8E%8B%E5%B7%A1%E5%9B%9E%E6%BC%94%E5%94%B1%E4%BC%9A%23) `267.1K 🔥` `NEW`
1. [全世界都在321上链接](https://s.weibo.com/weibo?q=%23%E5%85%A8%E4%B8%96%E7%95%8C%E9%83%BD%E5%9C%A8321%E4%B8%8A%E9%93%BE%E6%8E%A5%23) `200.0K 🔥` `NEW`
1. [伊朗报复美以](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8A%A5%E5%A4%8D%E7%BE%8E%E4%BB%A5%23) `199.9K 🔥` `NEW`
1. [薛之谦万兽之王长沙站开启预售](https://s.weibo.com/weibo?q=%23%E8%96%9B%E4%B9%8B%E8%B0%A6%E4%B8%87%E5%85%BD%E4%B9%8B%E7%8E%8B%E9%95%BF%E6%B2%99%E7%AB%99%E5%BC%80%E5%90%AF%E9%A2%84%E5%94%AE%23) `183.1K 🔥` `NEW`
1. [王天辰侯雯元 莞莞类卿](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%A4%A9%E8%BE%B0%E4%BE%AF%E9%9B%AF%E5%85%83%20%E8%8E%9E%E8%8E%9E%E7%B1%BB%E5%8D%BF%23) `151.1K 🔥` `NEW`
1. [种地吧](https://s.weibo.com/weibo?q=%23%E7%A7%8D%E5%9C%B0%E5%90%A7%23) `117.9K 🔥` `NEW`
1. [刘国梁谈奥运备战 (Liu Guoliang talks about preparations for the Olympics)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%9B%BD%E6%A2%81%E8%B0%88%E5%A5%A5%E8%BF%90%E5%A4%87%E6%88%98%23) `110.5K 🔥` `NEW`
1. [大狗小心翼翼给小鼻嘎铲飞了](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%8B%97%E5%B0%8F%E5%BF%83%E7%BF%BC%E7%BF%BC%E7%BB%99%E5%B0%8F%E9%BC%BB%E5%98%8E%E9%93%B2%E9%A3%9E%E4%BA%86%23) `82.8K 🔥` `NEW`
1. [王俊凯拍自己无所谓 拍自担必须帅](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E6%8B%8D%E8%87%AA%E5%B7%B1%E6%97%A0%E6%89%80%E8%B0%93%20%E6%8B%8D%E8%87%AA%E6%8B%85%E5%BF%85%E9%A1%BB%E5%B8%85%23) `78.2K 🔥` `NEW`
1. [花84万买到的140平步梯顶楼](https://s.weibo.com/weibo?q=%23%E8%8A%B184%E4%B8%87%E4%B9%B0%E5%88%B0%E7%9A%84140%E5%B9%B3%E6%AD%A5%E6%A2%AF%E9%A1%B6%E6%A5%BC%23) `76.3K 🔥` `NEW`
1. [宋亚轩 内娱窝囊系爱豆](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%20%E5%86%85%E5%A8%B1%E7%AA%9D%E5%9B%8A%E7%B3%BB%E7%88%B1%E8%B1%86%23) `76.3K 🔥` `NEW`
1. [现在就出发](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%91%23) `794.8K 🔥` `+536%`
1. [纯真年代的爱情 烂尾](https://s.weibo.com/weibo?q=%23%E7%BA%AF%E7%9C%9F%E5%B9%B4%E4%BB%A3%E7%9A%84%E7%88%B1%E6%83%85%20%E7%83%82%E5%B0%BE%23) `619.0K 🔥` `+22%`
1. [建议医务人员薪酬不得与创收挂钩 (It is recommended that the remuneration of medical staff should not be linked to income generation)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%8C%BB%E5%8A%A1%E4%BA%BA%E5%91%98%E8%96%AA%E9%85%AC%E4%B8%8D%E5%BE%97%E4%B8%8E%E5%88%9B%E6%94%B6%E6%8C%82%E9%92%A9%23) `613.6K 🔥` `+108%`
1. [伊朗首次使用最快自杀式无人机 (Iran uses fastest suicide drone for first time)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%A6%96%E6%AC%A1%E4%BD%BF%E7%94%A8%E6%9C%80%E5%BF%AB%E8%87%AA%E6%9D%80%E5%BC%8F%E6%97%A0%E4%BA%BA%E6%9C%BA%23) `575.5K 🔥` `+127%`
1. [2026发展主要预期目标速览](https://s.weibo.com/weibo?q=%232026%E5%8F%91%E5%B1%95%E4%B8%BB%E8%A6%81%E9%A2%84%E6%9C%9F%E7%9B%AE%E6%A0%87%E9%80%9F%E8%A7%88%23) `551.8K 🔥` `+107%`
1. [比Deepfake更严重的AI出现了](https://s.weibo.com/weibo?q=%23%E6%AF%94Deepfake%E6%9B%B4%E4%B8%A5%E9%87%8D%E7%9A%84AI%E5%87%BA%E7%8E%B0%E4%BA%86%23) `527.8K 🔥` `+201%`
1. [高铁一等座4元二等座8元 (High-speed rail first-class seat 4 yuan, second-class seat 8 yuan)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%93%81%E4%B8%80%E7%AD%89%E5%BA%A74%E5%85%83%E4%BA%8C%E7%AD%89%E5%BA%A78%E5%85%83%23) `503.5K 🔥` `+182%`
1. [伊拉克全境断电](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%8B%89%E5%85%8B%E5%85%A8%E5%A2%83%E6%96%AD%E7%94%B5%23) `429.5K 🔥` `+255%`
1. [租房能不能别再开广角拍房子 (When renting a house, can you please stop taking wide-angle shots of the house?)](https://s.weibo.com/weibo?q=%23%E7%A7%9F%E6%88%BF%E8%83%BD%E4%B8%8D%E8%83%BD%E5%88%AB%E5%86%8D%E5%BC%80%E5%B9%BF%E8%A7%92%E6%8B%8D%E6%88%BF%E5%AD%90%23) `379.4K 🔥` `+125%`
1. [本以为一次煎7条鱼就够吹牛了](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E4%BB%A5%E4%B8%BA%E4%B8%80%E6%AC%A1%E7%85%8E7%E6%9D%A1%E9%B1%BC%E5%B0%B1%E5%A4%9F%E5%90%B9%E7%89%9B%E4%BA%86%23) `328.2K 🔥` `+90%`
1. [丰田铂智7预售权益价15.68万起](https://s.weibo.com/weibo?q=%23%E4%B8%B0%E7%94%B0%E9%93%82%E6%99%BA7%E9%A2%84%E5%94%AE%E6%9D%83%E7%9B%8A%E4%BB%B715.68%E4%B8%87%E8%B5%B7%23) `267.6K 🔥` `+115%`
1. [少夫人来自东北](https://s.weibo.com/weibo?q=%23%E5%B0%91%E5%A4%AB%E4%BA%BA%E6%9D%A5%E8%87%AA%E4%B8%9C%E5%8C%97%23) `264.9K 🔥` `+42%`
1. [日本正紧张研判是否支援美军](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%AD%A3%E7%B4%A7%E5%BC%A0%E7%A0%94%E5%88%A4%E6%98%AF%E5%90%A6%E6%94%AF%E6%8F%B4%E7%BE%8E%E5%86%9B%23) `176.9K 🔥` `+30%`
1. [唐嫣穿得像个灯笼就出来了](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E7%A9%BF%E5%BE%97%E5%83%8F%E4%B8%AA%E7%81%AF%E7%AC%BC%E5%B0%B1%E5%87%BA%E6%9D%A5%E4%BA%86%23) `117.2K 🔥` `+35%`
1. [建议不调休的代表被记者围住了 (The representative who suggested not taking the day off was surrounded by reporters)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%B8%8D%E8%B0%83%E4%BC%91%E7%9A%84%E4%BB%A3%E8%A1%A8%E8%A2%AB%E8%AE%B0%E8%80%85%E5%9B%B4%E4%BD%8F%E4%BA%86%23) `1.1M 🔥`
1. [政府工作报告里的民生红包](https://s.weibo.com/weibo?q=%23%E6%94%BF%E5%BA%9C%E5%B7%A5%E4%BD%9C%E6%8A%A5%E5%91%8A%E9%87%8C%E7%9A%84%E6%B0%91%E7%94%9F%E7%BA%A2%E5%8C%85%23) `648.7K 🔥`
1. [全皮层修护真相揭秘 (The truth behind full skin repair)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%9A%AE%E5%B1%82%E4%BF%AE%E6%8A%A4%E7%9C%9F%E7%9B%B8%E6%8F%AD%E7%A7%98%23) `630.3K 🔥`
1. [猫 讨厌和瘦子拍照](https://s.weibo.com/weibo?q=%23%E7%8C%AB%20%E8%AE%A8%E5%8E%8C%E5%92%8C%E7%98%A6%E5%AD%90%E6%8B%8D%E7%85%A7%23) `212.7K 🔥`
1. [广西整个四月都在上四休三](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%95%B4%E4%B8%AA%E5%9B%9B%E6%9C%88%E9%83%BD%E5%9C%A8%E4%B8%8A%E5%9B%9B%E4%BC%91%E4%B8%89%23) `159.9K 🔥`
1. [斗罗大陆小舞](https://s.weibo.com/weibo?q=%23%E6%96%97%E7%BD%97%E5%A4%A7%E9%99%86%E5%B0%8F%E8%88%9E%23) `146.9K 🔥`
1. [我国就业形势有两大不匹配现象 (There are two major mismatches in my country’s employment situation)](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E5%B0%B1%E4%B8%9A%E5%BD%A2%E5%8A%BF%E6%9C%89%E4%B8%A4%E5%A4%A7%E4%B8%8D%E5%8C%B9%E9%85%8D%E7%8E%B0%E8%B1%A1%23) `146.6K 🔥`
1. [张杰鸟巢演唱会12万张票秒罄 (120,000 tickets for Zhang Jie’s Bird’s Nest concert sold out in seconds)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E9%B8%9F%E5%B7%A2%E6%BC%94%E5%94%B1%E4%BC%9A12%E4%B8%87%E5%BC%A0%E7%A5%A8%E7%A7%92%E7%BD%84%23) `128.3K 🔥`
1. [伊朗高官让特朗普想想美以谁优先 (Senior Iranian official asks Trump to think about which priority is the United States and Israel)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%AB%98%E5%AE%98%E8%AE%A9%E7%89%B9%E6%9C%97%E6%99%AE%E6%83%B3%E6%83%B3%E7%BE%8E%E4%BB%A5%E8%B0%81%E4%BC%98%E5%85%88%23) `126.6K 🔥`
1. [斯里兰卡称力保另一伊朗军舰安全](https://s.weibo.com/weibo?q=%23%E6%96%AF%E9%87%8C%E5%85%B0%E5%8D%A1%E7%A7%B0%E5%8A%9B%E4%BF%9D%E5%8F%A6%E4%B8%80%E4%BC%8A%E6%9C%97%E5%86%9B%E8%88%B0%E5%AE%89%E5%85%A8%23) `121.2K 🔥`
1. [李一桐差点摔倒](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%B8%80%E6%A1%90%E5%B7%AE%E7%82%B9%E6%91%94%E5%80%92%23) `88.9K 🔥`
1. [女子苦寻臭八爪鱼三天拆车抓出](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%8B%A6%E5%AF%BB%E8%87%AD%E5%85%AB%E7%88%AA%E9%B1%BC%E4%B8%89%E5%A4%A9%E6%8B%86%E8%BD%A6%E6%8A%93%E5%87%BA%23) `83.9K 🔥`
1. [斗罗大陆](https://s.weibo.com/weibo?q=%23%E6%96%97%E7%BD%97%E5%A4%A7%E9%99%86%23) `74.1K 🔥`
1. [建议优化大学生婚育教育体系](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%BC%98%E5%8C%96%E5%A4%A7%E5%AD%A6%E7%94%9F%E5%A9%9A%E8%82%B2%E6%95%99%E8%82%B2%E4%BD%93%E7%B3%BB%23) `198.4K 🔥` `-76%`
1. [建议三孩每月补贴5000元至3岁](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%B8%89%E5%AD%A9%E6%AF%8F%E6%9C%88%E8%A1%A5%E8%B4%B45000%E5%85%83%E8%87%B33%E5%B2%81%23) `121.3K 🔥` `-25%`
1. [中方将派特使访问中东](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%B0%86%E6%B4%BE%E7%89%B9%E4%BD%BF%E8%AE%BF%E9%97%AE%E4%B8%AD%E4%B8%9C%23) `116.1K 🔥` `-29%`
1. [洗头公式](https://s.weibo.com/weibo?q=%23%E6%B4%97%E5%A4%B4%E5%85%AC%E5%BC%8F%23) `114.4K 🔥` `-24%`
1. [女子半年未回家走廊被邻居装修了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%8D%8A%E5%B9%B4%E6%9C%AA%E5%9B%9E%E5%AE%B6%E8%B5%B0%E5%BB%8A%E8%A2%AB%E9%82%BB%E5%B1%85%E8%A3%85%E4%BF%AE%E4%BA%86%23) `109.7K 🔥` `-31%`
1. [建议春节9天假代表收到很多祝贺 (The representatives received many congratulations on the proposed 9-day Spring Festival holiday.)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%98%A5%E8%8A%829%E5%A4%A9%E5%81%87%E4%BB%A3%E8%A1%A8%E6%94%B6%E5%88%B0%E5%BE%88%E5%A4%9A%E7%A5%9D%E8%B4%BA%23) `95.6K 🔥` `-48%`
1. [人大代表说年轻人11点一定要睡觉 (NPC deputies say young people must go to bed at 11 o'clock)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%A4%A7%E4%BB%A3%E8%A1%A8%E8%AF%B4%E5%B9%B4%E8%BD%BB%E4%BA%BA11%E7%82%B9%E4%B8%80%E5%AE%9A%E8%A6%81%E7%9D%A1%E8%A7%89%23) `87.3K 🔥` `-44%`
1. [赵丽颖第一视角打戏好飒](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E7%AC%AC%E4%B8%80%E8%A7%86%E8%A7%92%E6%89%93%E6%88%8F%E5%A5%BD%E9%A3%92%23) `82.6K 🔥` `-32%`
1. [郭敬明发了邓为眼部特写 (Guo Jingming posted a close-up of Deng Wei’s eyes)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E5%8F%91%E4%BA%86%E9%82%93%E4%B8%BA%E7%9C%BC%E9%83%A8%E7%89%B9%E5%86%99%23) `75.8K 🔥` `-27%`
1. [日本火箭在记者赞美声中发射失败](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%81%AB%E7%AE%AD%E5%9C%A8%E8%AE%B0%E8%80%85%E8%B5%9E%E7%BE%8E%E5%A3%B0%E4%B8%AD%E5%8F%91%E5%B0%84%E5%A4%B1%E8%B4%A5%23) `73.8K 🔥` `-24%`

Updated at 2026-03-05 18:59:53

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
