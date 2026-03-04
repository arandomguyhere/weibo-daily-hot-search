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

1. [IF椰子水严正声明 (IF coconut water solemn statement)](https://s.weibo.com/weibo?q=%23IF%E6%A4%B0%E5%AD%90%E6%B0%B4%E4%B8%A5%E6%AD%A3%E5%A3%B0%E6%98%8E%23) `791.7K 🔥` `NEW`
1. [建议严禁免密支付默认勾选](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%B8%A5%E7%A6%81%E5%85%8D%E5%AF%86%E6%94%AF%E4%BB%98%E9%BB%98%E8%AE%A4%E5%8B%BE%E9%80%89%23) `264.5K 🔥` `NEW`
1. [伊朗确定最高领袖候选人](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A1%AE%E5%AE%9A%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E5%80%99%E9%80%89%E4%BA%BA%23) `252.0K 🔥` `NEW`
1. [JDG战胜情久](https://s.weibo.com/weibo?q=%23JDG%E6%88%98%E8%83%9C%E6%83%85%E4%B9%85%23) `163.3K 🔥` `NEW`
1. [网传杨超越十日终焉女主](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%9D%A8%E8%B6%85%E8%B6%8A%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E5%A5%B3%E4%B8%BB%23) `141.9K 🔥` `NEW`
1. [委员建议每天下班后投入地玩半小时](https://s.weibo.com/weibo?q=%23%E5%A7%94%E5%91%98%E5%BB%BA%E8%AE%AE%E6%AF%8F%E5%A4%A9%E4%B8%8B%E7%8F%AD%E5%90%8E%E6%8A%95%E5%85%A5%E5%9C%B0%E7%8E%A9%E5%8D%8A%E5%B0%8F%E6%97%B6%23) `141.9K 🔥` `NEW`
1. [无畏S组](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8FS%E7%BB%84%23) `141.7K 🔥` `NEW`
1. [伊朗军舰遭袭101人失踪78人伤](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%86%9B%E8%88%B0%E9%81%AD%E8%A2%AD101%E4%BA%BA%E5%A4%B1%E8%B8%AA78%E4%BA%BA%E4%BC%A4%23) `141.7K 🔥` `NEW`
1. [太爷爷摔倒1岁宝宝连滚带爬去扶](https://s.weibo.com/weibo?q=%23%E5%A4%AA%E7%88%B7%E7%88%B7%E6%91%94%E5%80%921%E5%B2%81%E5%AE%9D%E5%AE%9D%E8%BF%9E%E6%BB%9A%E5%B8%A6%E7%88%AC%E5%8E%BB%E6%89%B6%23) `141.5K 🔥` `NEW`
1. [荣耀MagicV6带飞李杰灵](https://s.weibo.com/weibo?q=%23%E8%8D%A3%E8%80%80MagicV6%E5%B8%A6%E9%A3%9E%E6%9D%8E%E6%9D%B0%E7%81%B5%23) `141.4K 🔥` `NEW`
1. [JDG晋级S组 (JDG advances to Group S)](https://s.weibo.com/weibo?q=%23JDG%E6%99%8B%E7%BA%A7S%E7%BB%84%23) `141.3K 🔥` `NEW`
1. [对方撤回了5条QQ消息](https://s.weibo.com/weibo?q=%23%E5%AF%B9%E6%96%B9%E6%92%A4%E5%9B%9E%E4%BA%865%E6%9D%A1QQ%E6%B6%88%E6%81%AF%23) `141.2K 🔥` `NEW`
1. [无畏赵怀真抢龙](https://s.weibo.com/weibo?q=%23%E6%97%A0%E7%95%8F%E8%B5%B5%E6%80%80%E7%9C%9F%E6%8A%A2%E9%BE%99%23) `140.9K 🔥` `NEW`
1. [建议彩礼不超6万元为何引热议](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%BD%A9%E7%A4%BC%E4%B8%8D%E8%B6%856%E4%B8%87%E5%85%83%E4%B8%BA%E4%BD%95%E5%BC%95%E7%83%AD%E8%AE%AE%23) `140.6K 🔥` `NEW`
1. [KPL春季赛](https://s.weibo.com/weibo?q=%23KPL%E6%98%A5%E5%AD%A3%E8%B5%9B%23) `140.4K 🔥` `NEW`
1. [建议将农村医保改为储蓄型](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%B0%86%E5%86%9C%E6%9D%91%E5%8C%BB%E4%BF%9D%E6%94%B9%E4%B8%BA%E5%82%A8%E8%93%84%E5%9E%8B%23) `140.3K 🔥` `NEW`
1. [JDG首次锁定S组](https://s.weibo.com/weibo?q=%23JDG%E9%A6%96%E6%AC%A1%E9%94%81%E5%AE%9AS%E7%BB%84%23) `140.2K 🔥` `NEW`
1. [这不是周大福的但可能是周大娘的](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%8D%E6%98%AF%E5%91%A8%E5%A4%A7%E7%A6%8F%E7%9A%84%E4%BD%86%E5%8F%AF%E8%83%BD%E6%98%AF%E5%91%A8%E5%A4%A7%E5%A8%98%E7%9A%84%23) `140.2K 🔥` `NEW`
1. [弟弟 不管你是谁从我姐身上下来](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%20%E4%B8%8D%E7%AE%A1%E4%BD%A0%E6%98%AF%E8%B0%81%E4%BB%8E%E6%88%91%E5%A7%90%E8%BA%AB%E4%B8%8A%E4%B8%8B%E6%9D%A5%23) `211.2K 🔥` `+165%`
1. [一上班物欲就缠上来了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%B8%8A%E7%8F%AD%E7%89%A9%E6%AC%B2%E5%B0%B1%E7%BC%A0%E4%B8%8A%E6%9D%A5%E4%BA%86%23) `141.1K 🔥` `+47%`
1. [A股半导体公司集体发涨价函 (A-share semiconductor companies collectively issued price increase letters)](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E5%8D%8A%E5%AF%BC%E4%BD%93%E5%85%AC%E5%8F%B8%E9%9B%86%E4%BD%93%E5%8F%91%E6%B6%A8%E4%BB%B7%E5%87%BD%23) `141.0K 🔥` `+59%`
1. [两会 (two sessions)](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E4%BC%9A%23) `141.0K 🔥` `+65%`
1. [全国政协十四届四次会议开幕 (The Fourth Session of the 14th CPPCC National Committee opens)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E6%94%BF%E5%8D%8F%E5%8D%81%E5%9B%9B%E5%B1%8A%E5%9B%9B%E6%AC%A1%E4%BC%9A%E8%AE%AE%E5%BC%80%E5%B9%95%23) `140.9K 🔥` `+56%`
1. [这竟然是甄嬛传里的温宜公主](https://s.weibo.com/weibo?q=%23%E8%BF%99%E7%AB%9F%E7%84%B6%E6%98%AF%E7%94%84%E5%AC%9B%E4%BC%A0%E9%87%8C%E7%9A%84%E6%B8%A9%E5%AE%9C%E5%85%AC%E4%B8%BB%23) `140.7K 🔥` `+23%`
1. [伊朗低成本武器正耗空美国高端弹药](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%BD%8E%E6%88%90%E6%9C%AC%E6%AD%A6%E5%99%A8%E6%AD%A3%E8%80%97%E7%A9%BA%E7%BE%8E%E5%9B%BD%E9%AB%98%E7%AB%AF%E5%BC%B9%E8%8D%AF%23) `140.7K 🔥` `+29%`
1. [我国今年将大力提振消费](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E4%BB%8A%E5%B9%B4%E5%B0%86%E5%A4%A7%E5%8A%9B%E6%8F%90%E6%8C%AF%E6%B6%88%E8%B4%B9%23) `140.5K 🔥` `+22%`
1. [委员建议00后不要进入加班文化](https://s.weibo.com/weibo?q=%23%E5%A7%94%E5%91%98%E5%BB%BA%E8%AE%AE00%E5%90%8E%E4%B8%8D%E8%A6%81%E8%BF%9B%E5%85%A5%E5%8A%A0%E7%8F%AD%E6%96%87%E5%8C%96%23) `1.1M 🔥`
1. [开放的中国现代化的中国 (Open China Modern China)](https://s.weibo.com/weibo?q=%23%E5%BC%80%E6%94%BE%E7%9A%84%E4%B8%AD%E5%9B%BD%E7%8E%B0%E4%BB%A3%E5%8C%96%E7%9A%84%E4%B8%AD%E5%9B%BD%23) `624.8K 🔥`
1. [鸿蒙智行技术焕新发布会 (Hongmeng Zhixing technology refresh conference)](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%99%E6%99%BA%E8%A1%8C%E6%8A%80%E6%9C%AF%E7%84%95%E6%96%B0%E5%8F%91%E5%B8%83%E4%BC%9A%23) `619.9K 🔥`
1. [中东局势彻底失控 (The situation in the Middle East is completely out of control)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%B8%9C%E5%B1%80%E5%8A%BF%E5%BD%BB%E5%BA%95%E5%A4%B1%E6%8E%A7%23) `310.6K 🔥`
1. [2025年立法工作取得新进展](https://s.weibo.com/weibo?q=%232025%E5%B9%B4%E7%AB%8B%E6%B3%95%E5%B7%A5%E4%BD%9C%E5%8F%96%E5%BE%97%E6%96%B0%E8%BF%9B%E5%B1%95%23) `303.5K 🔥`
1. [花店老板 死手快点绑啊 (Flower shop owner, please tie up your dead hands quickly.)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BA%97%E8%80%81%E6%9D%BF%20%E6%AD%BB%E6%89%8B%E5%BF%AB%E7%82%B9%E7%BB%91%E5%95%8A%23) `303.0K 🔥`
1. [王励勤回应樊振东归队问题](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%8A%B1%E5%8B%A4%E5%9B%9E%E5%BA%94%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%BD%92%E9%98%9F%E9%97%AE%E9%A2%98%23) `299.8K 🔥`
1. [建议居民身份证去地址化 (It is recommended that resident ID cards be de-addressed)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%B1%85%E6%B0%91%E8%BA%AB%E4%BB%BD%E8%AF%81%E5%8E%BB%E5%9C%B0%E5%9D%80%E5%8C%96%23) `230.6K 🔥`
1. [牛奶再放个把月就能喝了](https://s.weibo.com/weibo?q=%23%E7%89%9B%E5%A5%B6%E5%86%8D%E6%94%BE%E4%B8%AA%E6%8A%8A%E6%9C%88%E5%B0%B1%E8%83%BD%E5%96%9D%E4%BA%86%23) `186.2K 🔥`
1. [建议高考英语降为100分](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E9%AB%98%E8%80%83%E8%8B%B1%E8%AF%AD%E9%99%8D%E4%B8%BA100%E5%88%86%23) `142.7K 🔥`
1. [伊朗局势最新情况](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%B1%80%E5%8A%BF%E6%9C%80%E6%96%B0%E6%83%85%E5%86%B5%23) `141.8K 🔥`
1. [王楚然大方介绍自己来自中国 (Wang Churan generously introduced that he is from China)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%A4%A7%E6%96%B9%E4%BB%8B%E7%BB%8D%E8%87%AA%E5%B7%B1%E6%9D%A5%E8%87%AA%E4%B8%AD%E5%9B%BD%23) `141.6K 🔥`
1. [伊朗的导弹能用多久](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%9A%84%E5%AF%BC%E5%BC%B9%E8%83%BD%E7%94%A8%E5%A4%9A%E4%B9%85%23) `141.5K 🔥`
1. [王天辰 就是很想亲 (Wang Tianchen, I just want to kiss you)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%A4%A9%E8%BE%B0%20%E5%B0%B1%E6%98%AF%E5%BE%88%E6%83%B3%E4%BA%B2%23) `141.3K 🔥`
1. [伊拉克被美以当成打伊朗的免费跳板](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%8B%89%E5%85%8B%E8%A2%AB%E7%BE%8E%E4%BB%A5%E5%BD%93%E6%88%90%E6%89%93%E4%BC%8A%E6%9C%97%E7%9A%84%E5%85%8D%E8%B4%B9%E8%B7%B3%E6%9D%BF%23) `141.3K 🔥`
1. [未来10多年中国中等收入群体可能超8亿](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A510%E5%A4%9A%E5%B9%B4%E4%B8%AD%E5%9B%BD%E4%B8%AD%E7%AD%89%E6%94%B6%E5%85%A5%E7%BE%A4%E4%BD%93%E5%8F%AF%E8%83%BD%E8%B6%858%E4%BA%BF%23) `141.1K 🔥`
1. [问界M9 (Wenjie M9)](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8CM9%23) `140.8K 🔥`
1. [建议提高个税起征点至8000或1万](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%8F%90%E9%AB%98%E4%B8%AA%E7%A8%8E%E8%B5%B7%E5%BE%81%E7%82%B9%E8%87%B38000%E6%88%961%E4%B8%87%23) `140.6K 🔥`
1. [建议合理增加下半年节假日](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%90%88%E7%90%86%E5%A2%9E%E5%8A%A0%E4%B8%8B%E5%8D%8A%E5%B9%B4%E8%8A%82%E5%81%87%E6%97%A5%23) `140.5K 🔥`
1. [尚界Z7](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E7%95%8CZ7%23) `140.4K 🔥`
1. [热水器不能一开一关](https://s.weibo.com/weibo?q=%23%E7%83%AD%E6%B0%B4%E5%99%A8%E4%B8%8D%E8%83%BD%E4%B8%80%E5%BC%80%E4%B8%80%E5%85%B3%23) `593.8K 🔥` `-35%`
1. [建议推广农村不超过2万彩礼](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%8E%A8%E5%B9%BF%E5%86%9C%E6%9D%91%E4%B8%8D%E8%B6%85%E8%BF%872%E4%B8%87%E5%BD%A9%E7%A4%BC%23) `316.4K 🔥` `-31%`
1. [情久对战JDG](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%B9%85%E5%AF%B9%E6%88%98JDG%23) `145.8K 🔥` `-31%`
1. [建议彩礼金额不超过6万元 (It is recommended that the amount of the betrothal gift should not exceed 60,000 yuan)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%BD%A9%E7%A4%BC%E9%87%91%E9%A2%9D%E4%B8%8D%E8%B6%85%E8%BF%876%E4%B8%87%E5%85%83%23) `141.9K 🔥` `-26%`
1. [专家表示伊朗导弹必须改打法 (Experts say Iran’s missiles must change their approach)](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E8%A1%A8%E7%A4%BA%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E5%BF%85%E9%A1%BB%E6%94%B9%E6%89%93%E6%B3%95%23) `141.6K 🔥` `-38%`

Updated at 2026-03-04 18:38:16

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
