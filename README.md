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

1. [苏格兰vs巴西 (Scotland vs Brazil)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%A0%BC%E5%85%B0vs%E5%B7%B4%E8%A5%BF%23) `1.0M 🔥` `NEW`
1. [医生辟谣点蚊香等于吸几十支烟](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E8%BE%9F%E8%B0%A3%E7%82%B9%E8%9A%8A%E9%A6%99%E7%AD%89%E4%BA%8E%E5%90%B8%E5%87%A0%E5%8D%81%E6%94%AF%E7%83%9F%23) `733.3K 🔥` `NEW`
1. [张凌赫宣完这一秒过火宣归鸾](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%AE%A3%E5%AE%8C%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%E5%AE%A3%E5%BD%92%E9%B8%BE%23) `429.6K 🔥` `NEW`
1. [豆包收费功能](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E6%94%B6%E8%B4%B9%E5%8A%9F%E8%83%BD%23) `427.3K 🔥` `NEW`
1. [里夫斯顶薪续约湖人](https://s.weibo.com/weibo?q=%23%E9%87%8C%E5%A4%AB%E6%96%AF%E9%A1%B6%E8%96%AA%E7%BB%AD%E7%BA%A6%E6%B9%96%E4%BA%BA%23) `427.2K 🔥` `NEW`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `360.7K 🔥` `NEW`
1. [李金铭假婆婆称不知影响会这么大](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E9%87%91%E9%93%AD%E5%81%87%E5%A9%86%E5%A9%86%E7%A7%B0%E4%B8%8D%E7%9F%A5%E5%BD%B1%E5%93%8D%E4%BC%9A%E8%BF%99%E4%B9%88%E5%A4%A7%23) `244.5K 🔥` `NEW`
1. [AI协助报志愿靠谱吗](https://s.weibo.com/weibo?q=%23AI%E5%8D%8F%E5%8A%A9%E6%8A%A5%E5%BF%97%E6%84%BF%E9%9D%A0%E8%B0%B1%E5%90%97%23) `209.4K 🔥` `NEW`
1. [朱志鑫 纹身](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%20%E7%BA%B9%E8%BA%AB%23) `209.4K 🔥` `NEW`
1. [剑来](https://s.weibo.com/weibo?q=%23%E5%89%91%E6%9D%A5%23) `209.3K 🔥` `NEW`
1. [沈星回 敖尹 (Shen Xinghui Ao Yin)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%98%9F%E5%9B%9E%20%E6%95%96%E5%B0%B9%23) `159.6K 🔥` `NEW`
1. [日本地震](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%B0%E9%9C%87%23) `158.6K 🔥` `NEW`
1. [赵本山女儿家保姆谈工资待遇](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%9C%AC%E5%B1%B1%E5%A5%B3%E5%84%BF%E5%AE%B6%E4%BF%9D%E5%A7%86%E8%B0%88%E5%B7%A5%E8%B5%84%E5%BE%85%E9%81%87%23) `150.7K 🔥` `NEW`
1. [GTA6](https://s.weibo.com/weibo?q=%23GTA6%23) `143.9K 🔥` `NEW`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `136.5K 🔥` `NEW`
1. [宋祖儿直接用真名自我介绍](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%96%E5%84%BF%E7%9B%B4%E6%8E%A5%E7%94%A8%E7%9C%9F%E5%90%8D%E8%87%AA%E6%88%91%E4%BB%8B%E7%BB%8D%23) `132.8K 🔥` `NEW`
1. [维尼修斯梅开二度](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E5%B0%BC%E4%BF%AE%E6%96%AF%E6%A2%85%E5%BC%80%E4%BA%8C%E5%BA%A6%23) `126.8K 🔥` `NEW`
1. [男子在法国性侵山羊被驱逐出境](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9C%A8%E6%B3%95%E5%9B%BD%E6%80%A7%E4%BE%B5%E5%B1%B1%E7%BE%8A%E8%A2%AB%E9%A9%B1%E9%80%90%E5%87%BA%E5%A2%83%23) `122.7K 🔥` `NEW`
1. [尹净汉退伍](https://s.weibo.com/weibo?q=%23%E5%B0%B9%E5%87%80%E6%B1%89%E9%80%80%E4%BC%8D%23) `113.2K 🔥` `NEW`
1. [丁禹兮南部档案涨粉](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%88%E6%B6%A8%E7%B2%89%23) `96.6K 🔥` `NEW`
1. [内马尔首秀 (Neymar's debut)](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E9%A6%96%E7%A7%80%23) `1.8M 🔥` `+237%`
1. [十日终焉 预感大爆](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%20%E9%A2%84%E6%84%9F%E5%A4%A7%E7%88%86%23) `1.3M 🔥` `+107%`
1. [世界最快高铁跑出中国创新加速度](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9C%80%E5%BF%AB%E9%AB%98%E9%93%81%E8%B7%91%E5%87%BA%E4%B8%AD%E5%9B%BD%E5%88%9B%E6%96%B0%E5%8A%A0%E9%80%9F%E5%BA%A6%23) `1.1M 🔥` `+212%`
1. [大众点评必吃榜10周年](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E4%BC%97%E7%82%B9%E8%AF%84%E5%BF%85%E5%90%83%E6%A6%9C10%E5%91%A8%E5%B9%B4%23) `1.1M 🔥` `+204%`
1. [内马尔替补 (Neymar substitute)](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E6%9B%BF%E8%A1%A5%23) `894.7K 🔥` `+153%`
1. [1点点 背刺 (1 point backstab)](https://s.weibo.com/weibo?q=%231%E7%82%B9%E7%82%B9%20%E8%83%8C%E5%88%BA%23) `771.3K 🔥` `+131%`
1. [故意不接领导电话事情反而解决了](https://s.weibo.com/weibo?q=%23%E6%95%85%E6%84%8F%E4%B8%8D%E6%8E%A5%E9%A2%86%E5%AF%BC%E7%94%B5%E8%AF%9D%E4%BA%8B%E6%83%85%E5%8F%8D%E8%80%8C%E8%A7%A3%E5%86%B3%E4%BA%86%23) `709.0K 🔥` `+267%`
1. [鹅今天官宣了120部大剧](https://s.weibo.com/weibo?q=%23%E9%B9%85%E4%BB%8A%E5%A4%A9%E5%AE%98%E5%AE%A3%E4%BA%86120%E9%83%A8%E5%A4%A7%E5%89%A7%23) `426.8K 🔥` `+96%`
1. [做饭锅柄一定不要冲着自己](https://s.weibo.com/weibo?q=%23%E5%81%9A%E9%A5%AD%E9%94%85%E6%9F%84%E4%B8%80%E5%AE%9A%E4%B8%8D%E8%A6%81%E5%86%B2%E7%9D%80%E8%87%AA%E5%B7%B1%23) `347.2K 🔥` `+172%`
1. [37岁教师身体不适坚持上课心梗去世](https://s.weibo.com/weibo?q=%2337%E5%B2%81%E6%95%99%E5%B8%88%E8%BA%AB%E4%BD%93%E4%B8%8D%E9%80%82%E5%9D%9A%E6%8C%81%E4%B8%8A%E8%AF%BE%E5%BF%83%E6%A2%97%E5%8E%BB%E4%B8%96%23) `245.3K 🔥` `+96%`
1. [美光科技财报 (Micron Technology Financial Report)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%85%89%E7%A7%91%E6%8A%80%E8%B4%A2%E6%8A%A5%23) `229.9K 🔥` `+88%`
1. [12岁女孩服感冒药后急性心衰死亡](https://s.weibo.com/weibo?q=%2312%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%9C%8D%E6%84%9F%E5%86%92%E8%8D%AF%E5%90%8E%E6%80%A5%E6%80%A7%E5%BF%83%E8%A1%B0%E6%AD%BB%E4%BA%A1%23) `228.4K 🔥` `+96%`
1. [发明这么吃早餐的绝对是个天才](https://s.weibo.com/weibo?q=%23%E5%8F%91%E6%98%8E%E8%BF%99%E4%B9%88%E5%90%83%E6%97%A9%E9%A4%90%E7%9A%84%E7%BB%9D%E5%AF%B9%E6%98%AF%E4%B8%AA%E5%A4%A9%E6%89%8D%23) `227.2K 🔥` `+90%`
1. [副院长出轨眼科主任女方离职男复出 (The vice president cheated on the director of the ophthalmology department, the woman resigned and the man returned)](https://s.weibo.com/weibo?q=%23%E5%89%AF%E9%99%A2%E9%95%BF%E5%87%BA%E8%BD%A8%E7%9C%BC%E7%A7%91%E4%B8%BB%E4%BB%BB%E5%A5%B3%E6%96%B9%E7%A6%BB%E8%81%8C%E7%94%B7%E5%A4%8D%E5%87%BA%23) `210.9K 🔥` `+75%`
1. [印度5名歹徒轮奸30岁已婚女子 (Five gangsters gang-rape 30-year-old married woman in India)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A65%E5%90%8D%E6%AD%B9%E5%BE%92%E8%BD%AE%E5%A5%B830%E5%B2%81%E5%B7%B2%E5%A9%9A%E5%A5%B3%E5%AD%90%23) `208.3K 🔥` `+149%`
1. [建议不要把快递带回家里拆](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%B8%8D%E8%A6%81%E6%8A%8A%E5%BF%AB%E9%80%92%E5%B8%A6%E5%9B%9E%E5%AE%B6%E9%87%8C%E6%8B%86%23) `200.1K 🔥` `+146%`
1. [13岁女孩称被强奸案细节披露](https://s.weibo.com/weibo?q=%2313%E5%B2%81%E5%A5%B3%E5%AD%A9%E7%A7%B0%E8%A2%AB%E5%BC%BA%E5%A5%B8%E6%A1%88%E7%BB%86%E8%8A%82%E6%8A%AB%E9%9C%B2%23) `149.7K 🔥` `+32%`
1. [山西沁源县委原书记李丁夫主动投案 (Li Dingfu, former secretary of the Qinyuan County Party Committee in Shanxi, voluntarily surrendered)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E6%B2%81%E6%BA%90%E5%8E%BF%E5%A7%94%E5%8E%9F%E4%B9%A6%E8%AE%B0%E6%9D%8E%E4%B8%81%E5%A4%AB%E4%B8%BB%E5%8A%A8%E6%8A%95%E6%A1%88%23) `149.2K 🔥` `+160%`
1. [河南高考分数线 (Henan college entrance examination score line)](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E9%AB%98%E8%80%83%E5%88%86%E6%95%B0%E7%BA%BF%23) `148.2K 🔥` `+42%`
1. [网友发现每只大熊猫都长得不一样](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%8F%91%E7%8E%B0%E6%AF%8F%E5%8F%AA%E5%A4%A7%E7%86%8A%E7%8C%AB%E9%83%BD%E9%95%BF%E5%BE%97%E4%B8%8D%E4%B8%80%E6%A0%B7%23) `147.3K 🔥` `+211%`
1. [恋与深空一意孤行只会自损口碑](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%E4%B8%80%E6%84%8F%E5%AD%A4%E8%A1%8C%E5%8F%AA%E4%BC%9A%E8%87%AA%E6%8D%9F%E5%8F%A3%E7%A2%91%23) `147.3K 🔥` `+105%`
1. [孟子义亲李昀锐镜头太欲了](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E4%BA%B2%E6%9D%8E%E6%98%80%E9%94%90%E9%95%9C%E5%A4%B4%E5%A4%AA%E6%AC%B2%E4%BA%86%23) `147.1K 🔥` `+41%`
1. [白鹿回复陆虎](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%9B%9E%E5%A4%8D%E9%99%86%E8%99%8E%23) `135.9K 🔥` `+125%`
1. [毛晓彤吓到我了](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E6%99%93%E5%BD%A4%E5%90%93%E5%88%B0%E6%88%91%E4%BA%86%23) `125.4K 🔥` `+61%`
1. [刘学义杨幂胡军领衔主演 (Starring Liu Xueyi, Yang Mi and Hu Jun)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AD%A6%E4%B9%89%E6%9D%A8%E5%B9%82%E8%83%A1%E5%86%9B%E9%A2%86%E8%A1%94%E4%B8%BB%E6%BC%94%23) `121.7K 🔥` `+85%`
1. [副院长出轨眼科主任事件最新进展 (The latest developments in the case of the vice president cheating on the director of the ophthalmology department)](https://s.weibo.com/weibo?q=%23%E5%89%AF%E9%99%A2%E9%95%BF%E5%87%BA%E8%BD%A8%E7%9C%BC%E7%A7%91%E4%B8%BB%E4%BB%BB%E4%BA%8B%E4%BB%B6%E6%9C%80%E6%96%B0%E8%BF%9B%E5%B1%95%23) `118.5K 🔥` `+41%`
1. [张凌赫林允这两张脸赢麻了 (Zhang Ling, He and Lin Yun are so stupid.)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%9E%97%E5%85%81%E8%BF%99%E4%B8%A4%E5%BC%A0%E8%84%B8%E8%B5%A2%E9%BA%BB%E4%BA%86%23) `115.0K 🔥` `+100%`
1. [无畏的猫真的太太太大了](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E7%9A%84%E7%8C%AB%E7%9C%9F%E7%9A%84%E5%A4%AA%E5%A4%AA%E5%A4%AA%E5%A4%A7%E4%BA%86%23) `101.4K 🔥` `+55%`
1. [剑来全阵容正式官宣](https://s.weibo.com/weibo?q=%23%E5%89%91%E6%9D%A5%E5%85%A8%E9%98%B5%E5%AE%B9%E6%AD%A3%E5%BC%8F%E5%AE%98%E5%AE%A3%23) `99.1K 🔥` `+99%`
1. [第一次听说迷你版的大小周 (This is the first time I heard about the mini version of Da Zhou)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%90%AC%E8%AF%B4%E8%BF%B7%E4%BD%A0%E7%89%88%E7%9A%84%E5%A4%A7%E5%B0%8F%E5%91%A8%23) `94.5K 🔥` `+79%`
1. [李宛妲在十日终焉美得像bjd (Li Wanda is as beautiful as bjd in the final ten days)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%9B%E5%A6%B2%E5%9C%A8%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E7%BE%8E%E5%BE%97%E5%83%8Fbjd%23) `150.9K 🔥`
1. [摩洛哥vs海地](https://s.weibo.com/weibo?q=%23%E6%91%A9%E6%B4%9B%E5%93%A5vs%E6%B5%B7%E5%9C%B0%23) `128.9K 🔥`

Updated at 2026-06-25 08:02:14

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
