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

1. [周五下午弹性离岗 (Flexible leave from work on Friday afternoon)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%BA%94%E4%B8%8B%E5%8D%88%E5%BC%B9%E6%80%A7%E7%A6%BB%E5%B2%97%23) `1.2M 🔥` `NEW`
1. [数据看中国智造硬核实力](https://s.weibo.com/weibo?q=%23%E6%95%B0%E6%8D%AE%E7%9C%8B%E4%B8%AD%E5%9B%BD%E6%99%BA%E9%80%A0%E7%A1%AC%E6%A0%B8%E5%AE%9E%E5%8A%9B%23) `833.4K 🔥` `NEW`
1. [凯乐石未登峰计划20年](https://s.weibo.com/weibo?q=%23%E5%87%AF%E4%B9%90%E7%9F%B3%E6%9C%AA%E7%99%BB%E5%B3%B0%E8%AE%A1%E5%88%9220%E5%B9%B4%23) `833.1K 🔥` `NEW`
1. [田曦薇连续16部铁刘海剧](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%BF%9E%E7%BB%AD16%E9%83%A8%E9%93%81%E5%88%98%E6%B5%B7%E5%89%A7%23) `826.1K 🔥` `NEW`
1. [大白兔奶糖的包装纸火了](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%99%BD%E5%85%94%E5%A5%B6%E7%B3%96%E7%9A%84%E5%8C%85%E8%A3%85%E7%BA%B8%E7%81%AB%E4%BA%86%23) `811.5K 🔥` `NEW`
1. [婚外胚胎案父亲已10个月没见过女儿](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E6%A1%88%E7%88%B6%E4%BA%B2%E5%B7%B210%E4%B8%AA%E6%9C%88%E6%B2%A1%E8%A7%81%E8%BF%87%E5%A5%B3%E5%84%BF%23) `552.7K 🔥` `NEW`
1. [DeepSeek计划大幅涨价](https://s.weibo.com/weibo?q=%23DeepSeek%E8%AE%A1%E5%88%92%E5%A4%A7%E5%B9%85%E6%B6%A8%E4%BB%B7%23) `465.8K 🔥` `NEW`
1. [舒畅演短剧有种降维打击的感觉](https://s.weibo.com/weibo?q=%23%E8%88%92%E7%95%85%E6%BC%94%E7%9F%AD%E5%89%A7%E6%9C%89%E7%A7%8D%E9%99%8D%E7%BB%B4%E6%89%93%E5%87%BB%E7%9A%84%E6%84%9F%E8%A7%89%23) `465.3K 🔥` `NEW`
1. [理想i8发布](https://s.weibo.com/weibo?q=%23%E7%90%86%E6%83%B3i8%E5%8F%91%E5%B8%83%23) `462.4K 🔥` `NEW`
1. [姆巴佩新女友是西班牙顶流女星](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E6%96%B0%E5%A5%B3%E5%8F%8B%E6%98%AF%E8%A5%BF%E7%8F%AD%E7%89%99%E9%A1%B6%E6%B5%81%E5%A5%B3%E6%98%9F%23) `459.8K 🔥` `NEW`
1. [张雅琪中餐厅海报被改 (Zhang Yaqi Chinese restaurant poster changed)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E4%B8%AD%E9%A4%90%E5%8E%85%E6%B5%B7%E6%8A%A5%E8%A2%AB%E6%94%B9%23) `458.5K 🔥` `NEW`
1. [为什么年轻人更容易疲惫](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%B9%B4%E8%BD%BB%E4%BA%BA%E6%9B%B4%E5%AE%B9%E6%98%93%E7%96%B2%E6%83%AB%23) `454.1K 🔥` `NEW`
1. [曝侯明昊违反交规被约谈](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%BE%AF%E6%98%8E%E6%98%8A%E8%BF%9D%E5%8F%8D%E4%BA%A4%E8%A7%84%E8%A2%AB%E7%BA%A6%E8%B0%88%23) `452.6K 🔥` `NEW`
1. [白鹿方持续全网取证](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%96%B9%E6%8C%81%E7%BB%AD%E5%85%A8%E7%BD%91%E5%8F%96%E8%AF%81%23) `450.6K 🔥` `NEW`
1. [金银狂飙原因](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%93%B6%E7%8B%82%E9%A3%99%E5%8E%9F%E5%9B%A0%23) `445.9K 🔥` `NEW`
1. [淘宝闪购红包](https://s.weibo.com/weibo?q=%23%E6%B7%98%E5%AE%9D%E9%97%AA%E8%B4%AD%E7%BA%A2%E5%8C%85%23) `444.3K 🔥` `NEW`
1. [刘昊然撕掉标签做自己](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%98%8A%E7%84%B6%E6%92%95%E6%8E%89%E6%A0%87%E7%AD%BE%E5%81%9A%E8%87%AA%E5%B7%B1%23) `440.5K 🔥` `NEW`
1. [每个人心中都有一座未登峰](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E4%B8%AA%E4%BA%BA%E5%BF%83%E4%B8%AD%E9%83%BD%E6%9C%89%E4%B8%80%E5%BA%A7%E6%9C%AA%E7%99%BB%E5%B3%B0%23) `439.7K 🔥` `NEW`
1. [这就是AI漫剧顶级建模吗](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%B0%B1%E6%98%AFAI%E6%BC%AB%E5%89%A7%E9%A1%B6%E7%BA%A7%E5%BB%BA%E6%A8%A1%E5%90%97%23) `437.2K 🔥` `NEW`
1. [侯卓成前女友](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E5%8D%93%E6%88%90%E5%89%8D%E5%A5%B3%E5%8F%8B%23) `434.2K 🔥` `NEW`
1. [卓晴cp都快结婚了 (CP Zhuo Qing is about to get married)](https://s.weibo.com/weibo?q=%23%E5%8D%93%E6%99%B4cp%E9%83%BD%E5%BF%AB%E7%BB%93%E5%A9%9A%E4%BA%86%23) `432.4K 🔥` `NEW`
1. [海口 80吨危化品](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%8F%A3%2080%E5%90%A8%E5%8D%B1%E5%8C%96%E5%93%81%23) `428.5K 🔥` `NEW`
1. [周杰伦方回应传闻](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E6%96%B9%E5%9B%9E%E5%BA%94%E4%BC%A0%E9%97%BB%23) `426.8K 🔥` `NEW`
1. [黄多多把黄磊孙莉的好基因全继承了](https://s.weibo.com/weibo?q=%23%E9%BB%84%E5%A4%9A%E5%A4%9A%E6%8A%8A%E9%BB%84%E7%A3%8A%E5%AD%99%E8%8E%89%E7%9A%84%E5%A5%BD%E5%9F%BA%E5%9B%A0%E5%85%A8%E7%BB%A7%E6%89%BF%E4%BA%86%23) `424.7K 🔥` `NEW`
1. [人在高位久了必然开上帝视角](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%9C%A8%E9%AB%98%E4%BD%8D%E4%B9%85%E4%BA%86%E5%BF%85%E7%84%B6%E5%BC%80%E4%B8%8A%E5%B8%9D%E8%A7%86%E8%A7%92%23) `419.1K 🔥` `NEW`
1. [因凡蒂诺道歉](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E5%87%A1%E8%92%82%E8%AF%BA%E9%81%93%E6%AD%89%23) `417.3K 🔥` `NEW`
1. [张一鸣 字节不走模型蒸馏捷径](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%B8%80%E9%B8%A3%20%E5%AD%97%E8%8A%82%E4%B8%8D%E8%B5%B0%E6%A8%A1%E5%9E%8B%E8%92%B8%E9%A6%8F%E6%8D%B7%E5%BE%84%23) `410.8K 🔥` `NEW`
1. [广岛投原子弹飞行员从未后悔](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B2%9B%E6%8A%95%E5%8E%9F%E5%AD%90%E5%BC%B9%E9%A3%9E%E8%A1%8C%E5%91%98%E4%BB%8E%E6%9C%AA%E5%90%8E%E6%82%94%23) `408.3K 🔥` `NEW`
1. [一看这个电脑就不是要离职的](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%9C%8B%E8%BF%99%E4%B8%AA%E7%94%B5%E8%84%91%E5%B0%B1%E4%B8%8D%E6%98%AF%E8%A6%81%E7%A6%BB%E8%81%8C%E7%9A%84%23) `405.0K 🔥` `NEW`
1. [无期迷途](https://s.weibo.com/weibo?q=%23%E6%97%A0%E6%9C%9F%E8%BF%B7%E9%80%94%23) `403.1K 🔥` `NEW`
1. [38岁山东财大教授刘海明逝世 (Liu Haiming, a professor at Shandong University of Finance and Economics, passed away at the age of 38)](https://s.weibo.com/weibo?q=%2338%E5%B2%81%E5%B1%B1%E4%B8%9C%E8%B4%A2%E5%A4%A7%E6%95%99%E6%8E%88%E5%88%98%E6%B5%B7%E6%98%8E%E9%80%9D%E4%B8%96%23) `400.2K 🔥` `NEW`
1. [当我让ChatGPT锐评同行](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%88%91%E8%AE%A9ChatGPT%E9%94%90%E8%AF%84%E5%90%8C%E8%A1%8C%23) `399.1K 🔥` `NEW`
1. [王源看见一些些小事](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E7%9C%8B%E8%A7%81%E4%B8%80%E4%BA%9B%E4%BA%9B%E5%B0%8F%E4%BA%8B%23) `396.8K 🔥` `NEW`
1. [御廷谣 编剧](https://s.weibo.com/weibo?q=%23%E5%BE%A1%E5%BB%B7%E8%B0%A3%20%E7%BC%96%E5%89%A7%23) `394.6K 🔥` `NEW`
1. [TOP登陆少年直播手瓦](https://s.weibo.com/weibo?q=%23TOP%E7%99%BB%E9%99%86%E5%B0%91%E5%B9%B4%E7%9B%B4%E6%92%AD%E6%89%8B%E7%93%A6%23) `391.4K 🔥` `NEW`
1. [雷军回应小米汽车保值率成绩](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94%E5%B0%8F%E7%B1%B3%E6%B1%BD%E8%BD%A6%E4%BF%9D%E5%80%BC%E7%8E%87%E6%88%90%E7%BB%A9%23) `389.8K 🔥` `NEW`
1. [三角洲外挂开发者获刑4年](https://s.weibo.com/weibo?q=%23%E4%B8%89%E8%A7%92%E6%B4%B2%E5%A4%96%E6%8C%82%E5%BC%80%E5%8F%91%E8%80%85%E8%8E%B7%E5%88%914%E5%B9%B4%23) `388.0K 🔥` `NEW`
1. [这一秒过火](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%23) `385.3K 🔥` `NEW`
1. [凌玲是吴越包装很丑的礼物](https://s.weibo.com/weibo?q=%23%E5%87%8C%E7%8E%B2%E6%98%AF%E5%90%B4%E8%B6%8A%E5%8C%85%E8%A3%85%E5%BE%88%E4%B8%91%E7%9A%84%E7%A4%BC%E7%89%A9%23) `383.2K 🔥` `NEW`
1. [直观感受到了物理防晒的威力](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E8%A7%82%E6%84%9F%E5%8F%97%E5%88%B0%E4%BA%86%E7%89%A9%E7%90%86%E9%98%B2%E6%99%92%E7%9A%84%E5%A8%81%E5%8A%9B%23) `381.8K 🔥` `NEW`
1. [男子靠AI减肥45天瘦40斤险丧命 (Man relies on AI to lose weight and nearly dies after losing 40 pounds in 45 days)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%9D%A0AI%E5%87%8F%E8%82%A545%E5%A4%A9%E7%98%A640%E6%96%A4%E9%99%A9%E4%B8%A7%E5%91%BD%23) `379.1K 🔥` `NEW`
1. [中餐厅](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%85%23) `377.1K 🔥` `NEW`
1. [钟丽缇每7天染一次头发](https://s.weibo.com/weibo?q=%23%E9%92%9F%E4%B8%BD%E7%BC%87%E6%AF%8F7%E5%A4%A9%E6%9F%93%E4%B8%80%E6%AC%A1%E5%A4%B4%E5%8F%91%23) `375.1K 🔥` `NEW`
1. [被梅姨拐卖者称已被养父母删除](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%A2%85%E5%A7%A8%E6%8B%90%E5%8D%96%E8%80%85%E7%A7%B0%E5%B7%B2%E8%A2%AB%E5%85%BB%E7%88%B6%E6%AF%8D%E5%88%A0%E9%99%A4%23) `871.6K 🔥` `+36%`
1. [海尔空调AI新品发布盛典 (Haier Air Conditioning AI New Product Release Ceremony)](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%B0%94%E7%A9%BA%E8%B0%83AI%E6%96%B0%E5%93%81%E5%8F%91%E5%B8%83%E7%9B%9B%E5%85%B8%23) `468.4K 🔥` `+61%`
1. [TFBOYS换置顶](https://s.weibo.com/weibo?q=%23TFBOYS%E6%8D%A2%E7%BD%AE%E9%A1%B6%23) `455.8K 🔥` `+31%`
1. [日本女网红自杀过程被完整直播 (The suicide process of a Japanese female internet celebrity was broadcast live in full)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A5%B3%E7%BD%91%E7%BA%A2%E8%87%AA%E6%9D%80%E8%BF%87%E7%A8%8B%E8%A2%AB%E5%AE%8C%E6%95%B4%E7%9B%B4%E6%92%AD%23) `429.7K 🔥` `+32%`
1. [侯卓成 王垲智](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E5%8D%93%E6%88%90%20%E7%8E%8B%E5%9E%B2%E6%99%BA%23) `422.8K 🔥` `+28%`
1. [最近你买黄金了没 (Have you bought gold recently?)](https://s.weibo.com/weibo?q=%23%E6%9C%80%E8%BF%91%E4%BD%A0%E4%B9%B0%E9%BB%84%E9%87%91%E4%BA%86%E6%B2%A1%23) `416.7K 🔥` `+27%`
1. [王垲智回应](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%9E%B2%E6%99%BA%E5%9B%9E%E5%BA%94%23) `413.2K 🔥` `+37%`
1. [TFBOYS这组头像用了九年了](https://s.weibo.com/weibo?q=%23TFBOYS%E8%BF%99%E7%BB%84%E5%A4%B4%E5%83%8F%E7%94%A8%E4%BA%86%E4%B9%9D%E5%B9%B4%E4%BA%86%23) `409.1K 🔥` `+21%`
1. [梅姨真实姓名首曝光 (Aunt Mei’s real first name revealed)](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%A7%A8%E7%9C%9F%E5%AE%9E%E5%A7%93%E5%90%8D%E9%A6%96%E6%9B%9D%E5%85%89%23) `448.3K 🔥` `-56%`

Updated at 2026-08-06 12:27:04

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
