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

1. [女子用漏洞0元买了3千台电器 (Woman used loophole to buy 3,000 electrical appliances for 0 yuan)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%94%A8%E6%BC%8F%E6%B4%9E0%E5%85%83%E4%B9%B0%E4%BA%863%E5%8D%83%E5%8F%B0%E7%94%B5%E5%99%A8%23) `1.4M 🔥` `NEW`
1. [双休](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E4%BC%91%23) `690.4K 🔥` `NEW`
1. [感觉全东北都在等7号](https://s.weibo.com/weibo?q=%23%E6%84%9F%E8%A7%89%E5%85%A8%E4%B8%9C%E5%8C%97%E9%83%BD%E5%9C%A8%E7%AD%897%E5%8F%B7%23) `542.9K 🔥` `NEW`
1. [全新QQ3快乐基因常用常新](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%96%B0QQ3%E5%BF%AB%E4%B9%90%E5%9F%BA%E5%9B%A0%E5%B8%B8%E7%94%A8%E5%B8%B8%E6%96%B0%23) `521.6K 🔥` `NEW`
1. [张启山抽了窄娘娘的脊梁骨](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%90%AF%E5%B1%B1%E6%8A%BD%E4%BA%86%E7%AA%84%E5%A8%98%E5%A8%98%E7%9A%84%E8%84%8A%E6%A2%81%E9%AA%A8%23) `521.3K 🔥` `NEW`
1. [朱志鑫用嘴给苏新皓传椰子](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%AB%E7%94%A8%E5%98%B4%E7%BB%99%E8%8B%8F%E6%96%B0%E7%9A%93%E4%BC%A0%E6%A4%B0%E5%AD%90%23) `516.9K 🔥` `NEW`
1. [阿根廷世界杯决赛前3人受伤](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E4%B8%96%E7%95%8C%E6%9D%AF%E5%86%B3%E8%B5%9B%E5%89%8D3%E4%BA%BA%E5%8F%97%E4%BC%A4%23) `514.1K 🔥` `NEW`
1. [DeepSeek推理到一半说自己饿了](https://s.weibo.com/weibo?q=%23DeepSeek%E6%8E%A8%E7%90%86%E5%88%B0%E4%B8%80%E5%8D%8A%E8%AF%B4%E8%87%AA%E5%B7%B1%E9%A5%BF%E4%BA%86%23) `509.4K 🔥` `NEW`
1. [直播自杀日本女网红已身亡](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E6%92%AD%E8%87%AA%E6%9D%80%E6%97%A5%E6%9C%AC%E5%A5%B3%E7%BD%91%E7%BA%A2%E5%B7%B2%E8%BA%AB%E4%BA%A1%23) `506.5K 🔥` `NEW`
1. [侯卓成已报案](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E5%8D%93%E6%88%90%E5%B7%B2%E6%8A%A5%E6%A1%88%23) `503.5K 🔥` `NEW`
1. [工作其实是很养人的 (Work is actually very nourishing.)](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E4%BD%9C%E5%85%B6%E5%AE%9E%E6%98%AF%E5%BE%88%E5%85%BB%E4%BA%BA%E7%9A%84%23) `496.9K 🔥` `NEW`
1. [张雅琪的性格](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E7%9A%84%E6%80%A7%E6%A0%BC%23) `488.7K 🔥` `NEW`
1. [电影功夫女足](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%23) `486.8K 🔥` `NEW`
1. [香港立法允许拒绝抢救](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E7%AB%8B%E6%B3%95%E5%85%81%E8%AE%B8%E6%8B%92%E7%BB%9D%E6%8A%A2%E6%95%91%23) `481.6K 🔥` `NEW`
1. [一部ai剧看完不知道男女主长啥样](https://s.weibo.com/weibo?q=%23%E4%B8%80%E9%83%A8ai%E5%89%A7%E7%9C%8B%E5%AE%8C%E4%B8%8D%E7%9F%A5%E9%81%93%E7%94%B7%E5%A5%B3%E4%B8%BB%E9%95%BF%E5%95%A5%E6%A0%B7%23) `478.5K 🔥` `NEW`
1. [车企开始回归静默上市](https://s.weibo.com/weibo?q=%23%E8%BD%A6%E4%BC%81%E5%BC%80%E5%A7%8B%E5%9B%9E%E5%BD%92%E9%9D%99%E9%BB%98%E4%B8%8A%E5%B8%82%23) `474.6K 🔥` `NEW`
1. [王者荣耀农活](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E5%86%9C%E6%B4%BB%23) `470.9K 🔥` `NEW`
1. [呵呵力挺白鹿](https://s.weibo.com/weibo?q=%23%E5%91%B5%E5%91%B5%E5%8A%9B%E6%8C%BA%E7%99%BD%E9%B9%BF%23) `463.9K 🔥` `NEW`
1. [妈妈偷改女儿高考志愿](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%81%B7%E6%94%B9%E5%A5%B3%E5%84%BF%E9%AB%98%E8%80%83%E5%BF%97%E6%84%BF%23) `461.3K 🔥` `NEW`
1. [关之琳模特新男友才27岁](https://s.weibo.com/weibo?q=%23%E5%85%B3%E4%B9%8B%E7%90%B3%E6%A8%A1%E7%89%B9%E6%96%B0%E7%94%B7%E5%8F%8B%E6%89%8D27%E5%B2%81%23) `459.4K 🔥` `NEW`
1. [王俊凯王源易烊千玺未公开合照 (Unpublished photos of Wang Junkai, Wang Yuan and Yi Yang Qianxi)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%8E%8B%E6%BA%90%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%9C%AA%E5%85%AC%E5%BC%80%E5%90%88%E7%85%A7%23) `455.7K 🔥` `NEW`
1. [儿子举报父亲伪造证件为私生子落户](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E4%B8%BE%E6%8A%A5%E7%88%B6%E4%BA%B2%E4%BC%AA%E9%80%A0%E8%AF%81%E4%BB%B6%E4%B8%BA%E7%A7%81%E7%94%9F%E5%AD%90%E8%90%BD%E6%88%B7%23) `453.2K 🔥` `NEW`
1. [白鹿回应开到荼蘼剧本](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%9B%9E%E5%BA%94%E5%BC%80%E5%88%B0%E8%8D%BC%E8%98%BC%E5%89%A7%E6%9C%AC%23) `418.9K 🔥` `NEW`
1. [BLCKPINK十周年见面会部分成员出席](https://s.weibo.com/weibo?q=%23BLCKPINK%E5%8D%81%E5%91%A8%E5%B9%B4%E8%A7%81%E9%9D%A2%E4%BC%9A%E9%83%A8%E5%88%86%E6%88%90%E5%91%98%E5%87%BA%E5%B8%AD%23) `370.1K 🔥` `NEW`
1. [为什么理性的长期主义者更喜欢租](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E7%90%86%E6%80%A7%E7%9A%84%E9%95%BF%E6%9C%9F%E4%B8%BB%E4%B9%89%E8%80%85%E6%9B%B4%E5%96%9C%E6%AC%A2%E7%A7%9F%23) `352.9K 🔥` `NEW`
1. [张雅琪直到现在都没有为自己辩解](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E7%9B%B4%E5%88%B0%E7%8E%B0%E5%9C%A8%E9%83%BD%E6%B2%A1%E6%9C%89%E4%B8%BA%E8%87%AA%E5%B7%B1%E8%BE%A9%E8%A7%A3%23) `313.7K 🔥` `NEW`
1. [C罗再次回应女友身材评论](https://s.weibo.com/weibo?q=%23C%E7%BD%97%E5%86%8D%E6%AC%A1%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%8F%8B%E8%BA%AB%E6%9D%90%E8%AF%84%E8%AE%BA%23) `289.0K 🔥` `NEW`
1. [享界G9静态评测首发](https://s.weibo.com/weibo?q=%23%E4%BA%AB%E7%95%8CG9%E9%9D%99%E6%80%81%E8%AF%84%E6%B5%8B%E9%A6%96%E5%8F%91%23) `234.4K 🔥` `NEW`
1. [陈都灵COSMO破茧化羽大片](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5COSMO%E7%A0%B4%E8%8C%A7%E5%8C%96%E7%BE%BD%E5%A4%A7%E7%89%87%23) `226.6K 🔥` `NEW`
1. [姆巴佩女友是迪奥宝格丽双代言人](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%A5%B3%E5%8F%8B%E6%98%AF%E8%BF%AA%E5%A5%A5%E5%AE%9D%E6%A0%BC%E4%B8%BD%E5%8F%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `221.2K 🔥` `NEW`
1. [苏泊尔 擦边 (Supor edge)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%B3%8A%E5%B0%94%20%E6%93%A6%E8%BE%B9%23) `220.8K 🔥` `NEW`
1. [演员也要靠上恋综找对象了](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E4%B9%9F%E8%A6%81%E9%9D%A0%E4%B8%8A%E6%81%8B%E7%BB%BC%E6%89%BE%E5%AF%B9%E8%B1%A1%E4%BA%86%23) `215.4K 🔥` `NEW`
1. [王者夏日奇幻副本生存实录](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E5%A4%8F%E6%97%A5%E5%A5%87%E5%B9%BB%E5%89%AF%E6%9C%AC%E7%94%9F%E5%AD%98%E5%AE%9E%E5%BD%95%23) `214.3K 🔥` `NEW`
1. [现在连AI韩剧都来了](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E8%BF%9EAI%E9%9F%A9%E5%89%A7%E9%83%BD%E6%9D%A5%E4%BA%86%23) `211.3K 🔥` `NEW`
1. [何与方辟谣恋情](https://s.weibo.com/weibo?q=%23%E4%BD%95%E4%B8%8E%E6%96%B9%E8%BE%9F%E8%B0%A3%E6%81%8B%E6%83%85%23) `206.9K 🔥` `NEW`
1. [专家建议优化或取消调休](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E5%BB%BA%E8%AE%AE%E4%BC%98%E5%8C%96%E6%88%96%E5%8F%96%E6%B6%88%E8%B0%83%E4%BC%91%23) `200.5K 🔥` `NEW`
1. [无限暖暖](https://s.weibo.com/weibo?q=%23%E6%97%A0%E9%99%90%E6%9A%96%E6%9A%96%23) `199.5K 🔥` `NEW`
1. [韩国到底有多热](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%88%B0%E5%BA%95%E6%9C%89%E5%A4%9A%E7%83%AD%23) `178.6K 🔥` `NEW`
1. [罗云熙 进组](https://s.weibo.com/weibo?q=%23%E7%BD%97%E4%BA%91%E7%86%99%20%E8%BF%9B%E7%BB%84%23) `178.3K 🔥` `NEW`
1. [女子点一份章鱼烧误拿三份称拿错了](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%82%B9%E4%B8%80%E4%BB%BD%E7%AB%A0%E9%B1%BC%E7%83%A7%E8%AF%AF%E6%8B%BF%E4%B8%89%E4%BB%BD%E7%A7%B0%E6%8B%BF%E9%94%99%E4%BA%86%23) `166.7K 🔥` `NEW`
1. [数据看中国智造硬核实力 (Data shows China’s smart manufacturing core strength)](https://s.weibo.com/weibo?q=%23%E6%95%B0%E6%8D%AE%E7%9C%8B%E4%B8%AD%E5%9B%BD%E6%99%BA%E9%80%A0%E7%A1%AC%E6%A0%B8%E5%AE%9E%E5%8A%9B%23) `734.1K 🔥`
1. [曝侯明昊违反交规被约谈](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E4%BE%AF%E6%98%8E%E6%98%8A%E8%BF%9D%E5%8F%8D%E4%BA%A4%E8%A7%84%E8%A2%AB%E7%BA%A6%E8%B0%88%23) `491.1K 🔥`
1. [侯卓成前女友](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E5%8D%93%E6%88%90%E5%89%8D%E5%A5%B3%E5%8F%8B%23) `467.5K 🔥`
1. [周五下午弹性离岗 (Flexible leave from work on Friday afternoon)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%BA%94%E4%B8%8B%E5%8D%88%E5%BC%B9%E6%80%A7%E7%A6%BB%E5%B2%97%23) `891.5K 🔥` `-24%`
1. [大白兔奶糖的包装纸火了](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%99%BD%E5%85%94%E5%A5%B6%E7%B3%96%E7%9A%84%E5%8C%85%E8%A3%85%E7%BA%B8%E7%81%AB%E4%BA%86%23) `522.0K 🔥` `-36%`
1. [田曦薇连续16部铁刘海剧](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%BF%9E%E7%BB%AD16%E9%83%A8%E9%93%81%E5%88%98%E6%B5%B7%E5%89%A7%23) `499.0K 🔥` `-40%`
1. [TFBOYS换置顶](https://s.weibo.com/weibo?q=%23TFBOYS%E6%8D%A2%E7%BD%AE%E9%A1%B6%23) `341.8K 🔥` `-25%`
1. [海口 80吨危化品](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%8F%A3%2080%E5%90%A8%E5%8D%B1%E5%8C%96%E5%93%81%23) `233.9K 🔥` `-45%`
1. [被梅姨拐卖者称已被养父母删除](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%A2%85%E5%A7%A8%E6%8B%90%E5%8D%96%E8%80%85%E7%A7%B0%E5%B7%B2%E8%A2%AB%E5%85%BB%E7%88%B6%E6%AF%8D%E5%88%A0%E9%99%A4%23) `208.7K 🔥` `-76%`
1. [卓晴cp都快结婚了 (CP Zhuo Qing is about to get married)](https://s.weibo.com/weibo?q=%23%E5%8D%93%E6%99%B4cp%E9%83%BD%E5%BF%AB%E7%BB%93%E5%A9%9A%E4%BA%86%23) `179.0K 🔥` `-59%`

Updated at 2026-08-06 15:17:32

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
