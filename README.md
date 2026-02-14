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

1. [央视官宣王菲春晚新歌 (CCTV officially announces Faye Wong’s new song for Spring Festival Gala)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E5%AE%98%E5%AE%A3%E7%8E%8B%E8%8F%B2%E6%98%A5%E6%99%9A%E6%96%B0%E6%AD%8C%23) `170.3K 🔥` `NEW`
1. [苏翊鸣今日再出战](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E4%BB%8A%E6%97%A5%E5%86%8D%E5%87%BA%E6%88%98%23) `135.4K 🔥` `NEW`
1. [张晶 战术](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%99%B6%20%E6%88%98%E6%9C%AF%23) `62.6K 🔥` `NEW`
1. [王一博马年春晚造型](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E9%A9%AC%E5%B9%B4%E6%98%A5%E6%99%9A%E9%80%A0%E5%9E%8B%23) `50.3K 🔥` `NEW`
1. [千问超级免单卡能买年货能买票 (Qianwen super free single card can buy new year goods and tickets)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E8%B6%85%E7%BA%A7%E5%85%8D%E5%8D%95%E5%8D%A1%E8%83%BD%E4%B9%B0%E5%B9%B4%E8%B4%A7%E8%83%BD%E4%B9%B0%E7%A5%A8%23) `523.4K 🔥` `+187%`
1. [王毅警告日本现场爆发热烈掌声 (Wang Yi warned Japan that the scene broke out into loud applause)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AF%85%E8%AD%A6%E5%91%8A%E6%97%A5%E6%9C%AC%E7%8E%B0%E5%9C%BA%E7%88%86%E5%8F%91%E7%83%AD%E7%83%88%E6%8E%8C%E5%A3%B0%23) `370.4K 🔥` `+25%`
1. [王一博2026年央视总台春晚](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A2026%E5%B9%B4%E5%A4%AE%E8%A7%86%E6%80%BB%E5%8F%B0%E6%98%A5%E6%99%9A%23) `263.5K 🔥` `+33%`
1. [被用碰红包卡的人秀到了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E7%94%A8%E7%A2%B0%E7%BA%A2%E5%8C%85%E5%8D%A1%E7%9A%84%E4%BA%BA%E7%A7%80%E5%88%B0%E4%BA%86%23) `188.8K 🔥` `+41%`
1. [丈夫破产负债10亿妻子卖珠宝帮还债](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E7%A0%B4%E4%BA%A7%E8%B4%9F%E5%80%BA10%E4%BA%BF%E5%A6%BB%E5%AD%90%E5%8D%96%E7%8F%A0%E5%AE%9D%E5%B8%AE%E8%BF%98%E5%80%BA%23) `136.3K 🔥` `+22%`
1. [王菲春晚后台路透](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%8F%B2%E6%98%A5%E6%99%9A%E5%90%8E%E5%8F%B0%E8%B7%AF%E9%80%8F%23) `135.8K 🔥` `+33%`
1. [霍启刚三兄弟飞米兰为父庆生 (Huo Qigang's three brothers flew to Milan to celebrate their father's birthday)](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%90%AF%E5%88%9A%E4%B8%89%E5%85%84%E5%BC%9F%E9%A3%9E%E7%B1%B3%E5%85%B0%E4%B8%BA%E7%88%B6%E5%BA%86%E7%94%9F%23) `134.6K 🔥` `+23%`
1. [河南春晚 大量广告里穿插了少量节目](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E6%98%A5%E6%99%9A%20%E5%A4%A7%E9%87%8F%E5%B9%BF%E5%91%8A%E9%87%8C%E7%A9%BF%E6%8F%92%E4%BA%86%E5%B0%91%E9%87%8F%E8%8A%82%E7%9B%AE%23) `132.1K 🔥` `+22%`
1. [谷爱凌大跳台170.75分](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%A4%A7%E8%B7%B3%E5%8F%B0170.75%E5%88%86%23) `120.0K 🔥` `+43%`
1. [医院回应男童吃猪脚被卡喉去世 (Hospital responds to boy's death after eating pig's feet and getting stuck in throat)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E5%9B%9E%E5%BA%94%E7%94%B7%E7%AB%A5%E5%90%83%E7%8C%AA%E8%84%9A%E8%A2%AB%E5%8D%A1%E5%96%89%E5%8E%BB%E4%B8%96%23) `112.4K 🔥` `+34%`
1. [迪丽热巴作品豆瓣评分 (Douban ratings of Dilraba's works)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%BD%9C%E5%93%81%E8%B1%86%E7%93%A3%E8%AF%84%E5%88%86%23) `112.2K 🔥` `+34%`
1. [从疲劳到癌症只有4步 (There are only 4 steps from fatigue to cancer)](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E7%96%B2%E5%8A%B3%E5%88%B0%E7%99%8C%E7%97%87%E5%8F%AA%E6%9C%894%E6%AD%A5%23) `111.7K 🔥` `+37%`
1. [曝黄子弘凡爸爸诈骗学生 (Exposed Huang Zihongfan’s father defrauded students)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E7%88%B8%E7%88%B8%E8%AF%88%E9%AA%97%E5%AD%A6%E7%94%9F%23) `111.1K 🔥` `+35%`
1. [河南春晚 没有主持人和舞台 (Henan Spring Festival Gala has no host or stage)](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E6%98%A5%E6%99%9A%20%E6%B2%A1%E6%9C%89%E4%B8%BB%E6%8C%81%E4%BA%BA%E5%92%8C%E8%88%9E%E5%8F%B0%23) `110.8K 🔥` `+32%`
1. [56岁阿姨长期情绪失控痛哭右眼失明 (A 56-year-old aunt loses sight in her right eye after losing control of her emotions for a long time and crying bitterly)](https://s.weibo.com/weibo?q=%2356%E5%B2%81%E9%98%BF%E5%A7%A8%E9%95%BF%E6%9C%9F%E6%83%85%E7%BB%AA%E5%A4%B1%E6%8E%A7%E7%97%9B%E5%93%AD%E5%8F%B3%E7%9C%BC%E5%A4%B1%E6%98%8E%23) `98.4K 🔥` `+21%`
1. [为什么朋友圈没人秀恩爱了 (Why is no one showing affection in the circle of friends anymore?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%9C%8B%E5%8F%8B%E5%9C%88%E6%B2%A1%E4%BA%BA%E7%A7%80%E6%81%A9%E7%88%B1%E4%BA%86%23) `81.3K 🔥` `+75%`
1. [全明星三分大赛神仙打架](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%98%8E%E6%98%9F%E4%B8%89%E5%88%86%E5%A4%A7%E8%B5%9B%E7%A5%9E%E4%BB%99%E6%89%93%E6%9E%B6%23) `80.4K 🔥` `+41%`
1. [为什么招上门女婿的女性越来越多了](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E6%8B%9B%E4%B8%8A%E9%97%A8%E5%A5%B3%E5%A9%BF%E7%9A%84%E5%A5%B3%E6%80%A7%E8%B6%8A%E6%9D%A5%E8%B6%8A%E5%A4%9A%E4%BA%86%23) `79.5K 🔥` `+69%`
1. [吉林一女子中1204万大奖](https://s.weibo.com/weibo?q=%23%E5%90%89%E6%9E%97%E4%B8%80%E5%A5%B3%E5%AD%90%E4%B8%AD1204%E4%B8%87%E5%A4%A7%E5%A5%96%23) `76.9K 🔥` `+72%`
1. [任子威说中国队战术太保守了](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%AD%90%E5%A8%81%E8%AF%B4%E4%B8%AD%E5%9B%BD%E9%98%9F%E6%88%98%E6%9C%AF%E5%A4%AA%E4%BF%9D%E5%AE%88%E4%BA%86%23) `71.3K 🔥` `+34%`
1. [红包 (Red envelope)](https://s.weibo.com/weibo?q=%23%E7%BA%A2%E5%8C%85%23) `44.9K 🔥` `+22%`
1. [英国选手撞倒孙龙刘少昂](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E9%80%89%E6%89%8B%E6%92%9E%E5%80%92%E5%AD%99%E9%BE%99%E5%88%98%E5%B0%91%E6%98%82%23) `1.1M 🔥`
1. [林孝埈1500米摔倒 (Lin Xiaojuan fell at 1500 meters)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%881500%E7%B1%B3%E6%91%94%E5%80%92%23) `780.6K 🔥`
1. [一杯热水暖了几十年归途 (A cup of hot water warms the way home after decades)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E6%9D%AF%E7%83%AD%E6%B0%B4%E6%9A%96%E4%BA%86%E5%87%A0%E5%8D%81%E5%B9%B4%E5%BD%92%E9%80%94%23) `592.1K 🔥`
1. [孙龙膝盖流血 (Sun Long’s knee bleeds)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%BE%99%E8%86%9D%E7%9B%96%E6%B5%81%E8%A1%80%23) `189.2K 🔥`
1. [谷爱凌](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%23) `146.9K 🔥`
1. [谷爱凌第2跳摔倒 (Gu Ailing fell in the second jump)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%AC%AC2%E8%B7%B3%E6%91%94%E5%80%92%23) `142.8K 🔥`
1. [王者荣耀崩了 (King of Glory collapsed)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E5%B4%A9%E4%BA%86%23) `137.2K 🔥`
1. [黄子弘凡爸爸是国家一级演员](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E7%88%B8%E7%88%B8%E6%98%AF%E5%9B%BD%E5%AE%B6%E4%B8%80%E7%BA%A7%E6%BC%94%E5%91%98%23) `136.7K 🔥`
1. [黄子韬回应扇了徐艺洋](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%AD%90%E9%9F%AC%E5%9B%9E%E5%BA%94%E6%89%87%E4%BA%86%E5%BE%90%E8%89%BA%E6%B4%8B%23) `134.6K 🔥`
1. [关晓彤 青鸟神女 (Guan Xiaotong Blue Bird Goddess)](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%20%E9%9D%92%E9%B8%9F%E7%A5%9E%E5%A5%B3%23) `113.5K 🔥`
1. [谷爱凌第一跳86.00分](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E7%AC%AC%E4%B8%80%E8%B7%B386.00%E5%88%86%23) `112.7K 🔥`
1. [千问红包 (Qianwen red envelope)](https://s.weibo.com/weibo?q=%23%E5%8D%83%E9%97%AE%E7%BA%A2%E5%8C%85%23) `110.7K 🔥`
1. [短道速滑 (short track speed skating)](https://s.weibo.com/weibo?q=%23%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%91%23) `101.0K 🔥`
1. [马君妍宣布二胎宝宝已有30周 (Ma Junyan announced that her second baby is 30 weeks old)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%90%9B%E5%A6%8D%E5%AE%A3%E5%B8%83%E4%BA%8C%E8%83%8E%E5%AE%9D%E5%AE%9D%E5%B7%B2%E6%9C%8930%E5%91%A8%23) `93.8K 🔥`
1. [生命树多杰死因反转 (The cause of death of Dorje the Tree of Life is reversed)](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%A0%91%E5%A4%9A%E6%9D%B0%E6%AD%BB%E5%9B%A0%E5%8F%8D%E8%BD%AC%23) `82.1K 🔥`
1. [黄大宪1500米银牌 (Huang Daxian 1500m silver medal)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%A7%E5%AE%AA1500%E7%B1%B3%E9%93%B6%E7%89%8C%23) `81.2K 🔥`
1. [四川大学 (Sichuan University)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%A4%A7%E5%AD%A6%23) `77.7K 🔥`
1. [白百何孩子五岁了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%99%BE%E4%BD%95%E5%AD%A9%E5%AD%90%E4%BA%94%E5%B2%81%E4%BA%86%23) `75.9K 🔥`
1. [黄金还能买吗 (Can I still buy gold?)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E8%BF%98%E8%83%BD%E4%B9%B0%E5%90%97%23) `61.2K 🔥`
1. [檀健次也太欲太会钓了 (Tan Kenci is also too horny and good at fishing.)](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E4%B9%9F%E5%A4%AA%E6%AC%B2%E5%A4%AA%E4%BC%9A%E9%92%93%E4%BA%86%23) `54.0K 🔥`
1. [情人节发现男朋友联系高中女同学 (On Valentine’s Day, I discovered that my boyfriend was contacting a female high school classmate.)](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BA%BA%E8%8A%82%E5%8F%91%E7%8E%B0%E7%94%B7%E6%9C%8B%E5%8F%8B%E8%81%94%E7%B3%BB%E9%AB%98%E4%B8%AD%E5%A5%B3%E5%90%8C%E5%AD%A6%23) `53.9K 🔥`
1. [林孝埈短道速滑1500米加油](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%9D%E5%9F%88%E7%9F%AD%E9%81%93%E9%80%9F%E6%BB%911500%E7%B1%B3%E5%8A%A0%E6%B2%B9%23) `48.8K 🔥`
1. [孙龙安慰林孝埈 (Sun Long comforts Lin Xiaoquan)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%BE%99%E5%AE%89%E6%85%B0%E6%9E%97%E5%AD%9D%E5%9F%88%23) `46.4K 🔥`
1. [刘一手承认欠款2000万 (Liu Yishou admitted that he owed 20 million yuan)](https://s.weibo.com/weibo?q=%23%E5%88%98%E4%B8%80%E6%89%8B%E6%89%BF%E8%AE%A4%E6%AC%A0%E6%AC%BE2000%E4%B8%87%23) `45.7K 🔥`
1. [王者荣耀](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%23) `42.8K 🔥`
1. [速度滑冰](https://s.weibo.com/weibo?q=%23%E9%80%9F%E5%BA%A6%E6%BB%91%E5%86%B0%23) `42.6K 🔥`
1. [王毅就中日关系重申严正立场 (Wang Yi reiterates his solemn position on China-Japan relations)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%AF%85%E5%B0%B1%E4%B8%AD%E6%97%A5%E5%85%B3%E7%B3%BB%E9%87%8D%E7%94%B3%E4%B8%A5%E6%AD%A3%E7%AB%8B%E5%9C%BA%23) `47.8K 🔥` `-35%`

Updated at 2026-02-15 07:58:33

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
