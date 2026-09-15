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

1. [涉嫌猎杀玳瑁中国籍教练发声](https://s.weibo.com/weibo?q=%23%E6%B6%89%E5%AB%8C%E7%8C%8E%E6%9D%80%E7%8E%B3%E7%91%81%E4%B8%AD%E5%9B%BD%E7%B1%8D%E6%95%99%E7%BB%83%E5%8F%91%E5%A3%B0%23) `1.1M 🔥` `NEW`
1. [微信AI 隐私](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1AI%20%E9%9A%90%E7%A7%81%23) `859.7K 🔥` `NEW`
1. [2026年国家网络安全宣传周](https://s.weibo.com/weibo?q=%232026%E5%B9%B4%E5%9B%BD%E5%AE%B6%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8%E5%AE%A3%E4%BC%A0%E5%91%A8%23) `791.1K 🔥` `NEW`
1. [地平线智驾芯片量产突破1500万](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E5%B9%B3%E7%BA%BF%E6%99%BA%E9%A9%BE%E8%8A%AF%E7%89%87%E9%87%8F%E4%BA%A7%E7%AA%81%E7%A0%B41500%E4%B8%87%23) `775.0K 🔥` `NEW`
1. [手机价格够买全屋家电了](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E4%BB%B7%E6%A0%BC%E5%A4%9F%E4%B9%B0%E5%85%A8%E5%B1%8B%E5%AE%B6%E7%94%B5%E4%BA%86%23) `774.5K 🔥` `NEW`
1. [演唱会求婚事件后排观众发声](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%94%B1%E4%BC%9A%E6%B1%82%E5%A9%9A%E4%BA%8B%E4%BB%B6%E5%90%8E%E6%8E%92%E8%A7%82%E4%BC%97%E5%8F%91%E5%A3%B0%23) `707.7K 🔥` `NEW`
1. [一线城市房价涨了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%BA%BF%E5%9F%8E%E5%B8%82%E6%88%BF%E4%BB%B7%E6%B6%A8%E4%BA%86%23) `614.9K 🔥` `NEW`
1. [天玑9600Pro旗舰芯](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E7%8E%919600Pro%E6%97%97%E8%88%B0%E8%8A%AF%23) `612.3K 🔥` `NEW`
1. [刘萧旭领衔主演前进前进](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%90%A7%E6%97%AD%E9%A2%86%E8%A1%94%E4%B8%BB%E6%BC%94%E5%89%8D%E8%BF%9B%E5%89%8D%E8%BF%9B%23) `599.4K 🔥` `NEW`
1. [姆巴佩登贝莱因争金球奖闹翻](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E7%99%BB%E8%B4%9D%E8%8E%B1%E5%9B%A0%E4%BA%89%E9%87%91%E7%90%83%E5%A5%96%E9%97%B9%E7%BF%BB%23) `423.6K 🔥` `NEW`
1. [2026亚运会乒乓球](https://s.weibo.com/weibo?q=%232026%E4%BA%9A%E8%BF%90%E4%BC%9A%E4%B9%92%E4%B9%93%E7%90%83%23) `404.1K 🔥` `NEW`
1. [杨洋李沁曾是彼此初恋](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E6%9D%8E%E6%B2%81%E6%9B%BE%E6%98%AF%E5%BD%BC%E6%AD%A4%E5%88%9D%E6%81%8B%23) `400.5K 🔥` `NEW`
1. [卫健委新出生人口800万左右](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E5%81%A5%E5%A7%94%E6%96%B0%E5%87%BA%E7%94%9F%E4%BA%BA%E5%8F%A3800%E4%B8%87%E5%B7%A6%E5%8F%B3%23) `399.5K 🔥` `NEW`
1. [韩路谈华为赛力斯合作模式调整](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E8%B7%AF%E8%B0%88%E5%8D%8E%E4%B8%BA%E8%B5%9B%E5%8A%9B%E6%96%AF%E5%90%88%E4%BD%9C%E6%A8%A1%E5%BC%8F%E8%B0%83%E6%95%B4%23) `396.0K 🔥` `NEW`
1. [关晓彤演白化病人眼球轻颤](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E6%BC%94%E7%99%BD%E5%8C%96%E7%97%85%E4%BA%BA%E7%9C%BC%E7%90%83%E8%BD%BB%E9%A2%A4%23) `352.4K 🔥` `NEW`
1. [iOS27首批用户反馈](https://s.weibo.com/weibo?q=%23iOS27%E9%A6%96%E6%89%B9%E7%94%A8%E6%88%B7%E5%8F%8D%E9%A6%88%23) `341.2K 🔥` `NEW`
1. [14岁奥莉这么大了](https://s.weibo.com/weibo?q=%2314%E5%B2%81%E5%A5%A5%E8%8E%89%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `338.5K 🔥` `NEW`
1. [iQOO16一眼科幻](https://s.weibo.com/weibo?q=%23iQOO16%E4%B8%80%E7%9C%BC%E7%A7%91%E5%B9%BB%23) `333.3K 🔥` `NEW`
1. [血观音 公主命丫鬟身](https://s.weibo.com/weibo?q=%23%E8%A1%80%E8%A7%82%E9%9F%B3%20%E5%85%AC%E4%B8%BB%E5%91%BD%E4%B8%AB%E9%AC%9F%E8%BA%AB%23) `329.6K 🔥` `NEW`
1. [这届年轻人有勇气结婚也有实力离](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B1%8A%E5%B9%B4%E8%BD%BB%E4%BA%BA%E6%9C%89%E5%8B%87%E6%B0%94%E7%BB%93%E5%A9%9A%E4%B9%9F%E6%9C%89%E5%AE%9E%E5%8A%9B%E7%A6%BB%23) `326.0K 🔥` `NEW`
1. [美国首次承认具备太空进攻能力](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E9%A6%96%E6%AC%A1%E6%89%BF%E8%AE%A4%E5%85%B7%E5%A4%87%E5%A4%AA%E7%A9%BA%E8%BF%9B%E6%94%BB%E8%83%BD%E5%8A%9B%23) `320.7K 🔥` `NEW`
1. [华为PuraXMax销量暴涨](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAPuraXMax%E9%94%80%E9%87%8F%E6%9A%B4%E6%B6%A8%23) `318.4K 🔥` `NEW`
1. [华伦天奴认领田栩宁](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%BC%A6%E5%A4%A9%E5%A5%B4%E8%AE%A4%E9%A2%86%E7%94%B0%E6%A0%A9%E5%AE%81%23) `312.3K 🔥` `NEW`
1. [樊振东登上亚运会海报](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%99%BB%E4%B8%8A%E4%BA%9A%E8%BF%90%E4%BC%9A%E6%B5%B7%E6%8A%A5%23) `308.5K 🔥` `NEW`
1. [韩国网民称韩文比汉字更高级](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%BD%91%E6%B0%91%E7%A7%B0%E9%9F%A9%E6%96%87%E6%AF%94%E6%B1%89%E5%AD%97%E6%9B%B4%E9%AB%98%E7%BA%A7%23) `285.5K 🔥` `NEW`
1. [心动9第七期就亲上了](https://s.weibo.com/weibo?q=%23%E5%BF%83%E5%8A%A89%E7%AC%AC%E4%B8%83%E6%9C%9F%E5%B0%B1%E4%BA%B2%E4%B8%8A%E4%BA%86%23) `263.4K 🔥` `NEW`
1. [李小鹏带女儿奥莉参加慈善晚宴](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E9%B9%8F%E5%B8%A6%E5%A5%B3%E5%84%BF%E5%A5%A5%E8%8E%89%E5%8F%82%E5%8A%A0%E6%85%88%E5%96%84%E6%99%9A%E5%AE%B4%23) `230.9K 🔥` `NEW`
1. [赵雷鸟巢求婚当事人报警](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E9%9B%B7%E9%B8%9F%E5%B7%A2%E6%B1%82%E5%A9%9A%E5%BD%93%E4%BA%8B%E4%BA%BA%E6%8A%A5%E8%AD%A6%23) `229.4K 🔥` `NEW`
1. [心动的信号9](https://s.weibo.com/weibo?q=%23%E5%BF%83%E5%8A%A8%E7%9A%84%E4%BF%A1%E5%8F%B79%23) `226.4K 🔥` `NEW`
1. [血观音 翻红](https://s.weibo.com/weibo?q=%23%E8%A1%80%E8%A7%82%E9%9F%B3%20%E7%BF%BB%E7%BA%A2%23) `225.7K 🔥` `NEW`
1. [保险公司花钱雇人开会称为了报销](https://s.weibo.com/weibo?q=%23%E4%BF%9D%E9%99%A9%E5%85%AC%E5%8F%B8%E8%8A%B1%E9%92%B1%E9%9B%87%E4%BA%BA%E5%BC%80%E4%BC%9A%E7%A7%B0%E4%B8%BA%E4%BA%86%E6%8A%A5%E9%94%80%23) `223.7K 🔥` `NEW`
1. [女婴死亡涉事月子中心成立仅1年](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%A9%B4%E6%AD%BB%E4%BA%A1%E6%B6%89%E4%BA%8B%E6%9C%88%E5%AD%90%E4%B8%AD%E5%BF%83%E6%88%90%E7%AB%8B%E4%BB%851%E5%B9%B4%23) `223.2K 🔥` `NEW`
1. [陈柏霖赖雨濛麦当劳之争](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%9F%8F%E9%9C%96%E8%B5%96%E9%9B%A8%E6%BF%9B%E9%BA%A6%E5%BD%93%E5%8A%B3%E4%B9%8B%E4%BA%89%23) `221.7K 🔥` `NEW`
1. [杨幂唐明皇未公开旧照](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E5%94%90%E6%98%8E%E7%9A%87%E6%9C%AA%E5%85%AC%E5%BC%80%E6%97%A7%E7%85%A7%23) `220.2K 🔥` `NEW`
1. [我国人口总量14.05亿](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E4%BA%BA%E5%8F%A3%E6%80%BB%E9%87%8F14.05%E4%BA%BF%23) `212.4K 🔥` `NEW`
1. [原来陈妍希曾经是南加大的校花](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E9%99%88%E5%A6%8D%E5%B8%8C%E6%9B%BE%E7%BB%8F%E6%98%AF%E5%8D%97%E5%8A%A0%E5%A4%A7%E7%9A%84%E6%A0%A1%E8%8A%B1%23) `207.3K 🔥` `NEW`
1. [陶喆一家三口合照](https://s.weibo.com/weibo?q=%23%E9%99%B6%E5%96%86%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E5%90%88%E7%85%A7%23) `202.3K 🔥` `NEW`
1. [穆婷婷 腰马合一](https://s.weibo.com/weibo?q=%23%E7%A9%86%E5%A9%B7%E5%A9%B7%20%E8%85%B0%E9%A9%AC%E5%90%88%E4%B8%80%23) `196.1K 🔥` `NEW`
1. [发明两床共用一梯的有没有上过大学啊](https://s.weibo.com/weibo?q=%23%E5%8F%91%E6%98%8E%E4%B8%A4%E5%BA%8A%E5%85%B1%E7%94%A8%E4%B8%80%E6%A2%AF%E7%9A%84%E6%9C%89%E6%B2%A1%E6%9C%89%E4%B8%8A%E8%BF%87%E5%A4%A7%E5%AD%A6%E5%95%8A%23) `181.5K 🔥` `NEW`
1. [燃油车还能撑多久](https://s.weibo.com/weibo?q=%23%E7%87%83%E6%B2%B9%E8%BD%A6%E8%BF%98%E8%83%BD%E6%92%91%E5%A4%9A%E4%B9%85%23) `165.2K 🔥` `NEW`
1. [汪苏泷宋雨琦新歌上线](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E5%AE%8B%E9%9B%A8%E7%90%A6%E6%96%B0%E6%AD%8C%E4%B8%8A%E7%BA%BF%23) `164.9K 🔥` `NEW`
1. [倪妮这个撒娇抖肩](https://s.weibo.com/weibo?q=%23%E5%80%AA%E5%A6%AE%E8%BF%99%E4%B8%AA%E6%92%92%E5%A8%87%E6%8A%96%E8%82%A9%23) `147.4K 🔥` `NEW`
1. [豆包手机预约量突破36万人](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E6%89%8B%E6%9C%BA%E9%A2%84%E7%BA%A6%E9%87%8F%E7%AA%81%E7%A0%B436%E4%B8%87%E4%BA%BA%23) `146.2K 🔥` `NEW`
1. [国家统计局8月数据](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E7%BB%9F%E8%AE%A1%E5%B1%808%E6%9C%88%E6%95%B0%E6%8D%AE%23) `146.1K 🔥` `NEW`
1. [兰香如故配角营销被吐槽](https://s.weibo.com/weibo?q=%23%E5%85%B0%E9%A6%99%E5%A6%82%E6%95%85%E9%85%8D%E8%A7%92%E8%90%A5%E9%94%80%E8%A2%AB%E5%90%90%E6%A7%BD%23) `146.0K 🔥` `NEW`
1. [王楚钦亚运会出战男单男团混双](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%BA%9A%E8%BF%90%E4%BC%9A%E5%87%BA%E6%88%98%E7%94%B7%E5%8D%95%E7%94%B7%E5%9B%A2%E6%B7%B7%E5%8F%8C%23) `145.7K 🔥` `NEW`
1. [俄外长使用中国三折叠](https://s.weibo.com/weibo?q=%23%E4%BF%84%E5%A4%96%E9%95%BF%E4%BD%BF%E7%94%A8%E4%B8%AD%E5%9B%BD%E4%B8%89%E6%8A%98%E5%8F%A0%23) `145.6K 🔥` `NEW`
1. [囤iPhone17的手机商亏惨了](https://s.weibo.com/weibo?q=%23%E5%9B%A4iPhone17%E7%9A%84%E6%89%8B%E6%9C%BA%E5%95%86%E4%BA%8F%E6%83%A8%E4%BA%86%23) `196.8K 🔥`
1. [我国灵活就业人员规模已超过2亿人](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E7%81%B5%E6%B4%BB%E5%B0%B1%E4%B8%9A%E4%BA%BA%E5%91%98%E8%A7%84%E6%A8%A1%E5%B7%B2%E8%B6%85%E8%BF%872%E4%BA%BF%E4%BA%BA%23) `229.2K 🔥` `-67%`
1. [面试完才懂关系户有多动人](https://s.weibo.com/weibo?q=%23%E9%9D%A2%E8%AF%95%E5%AE%8C%E6%89%8D%E6%87%82%E5%85%B3%E7%B3%BB%E6%88%B7%E6%9C%89%E5%A4%9A%E5%8A%A8%E4%BA%BA%23) `175.5K 🔥` `-52%`

Updated at 2026-09-15 13:33:28

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
