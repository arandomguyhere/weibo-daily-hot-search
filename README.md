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

1. [将门独后 天崩开局 (The only queen in the sect will start with Heavenly Collapse)](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%20%E5%A4%A9%E5%B4%A9%E5%BC%80%E5%B1%80%23) `1.6M 🔥` `NEW`
1. [女子买20元奶茶中奖黄金约25000元](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B9%B020%E5%85%83%E5%A5%B6%E8%8C%B6%E4%B8%AD%E5%A5%96%E9%BB%84%E9%87%91%E7%BA%A625000%E5%85%83%23) `480.1K 🔥` `NEW`
1. [男子用AI鉴定玉石8个月收入上百万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%94%A8AI%E9%89%B4%E5%AE%9A%E7%8E%89%E7%9F%B38%E4%B8%AA%E6%9C%88%E6%94%B6%E5%85%A5%E4%B8%8A%E7%99%BE%E4%B8%87%23) `459.9K 🔥` `NEW`
1. [WTT](https://s.weibo.com/weibo?q=%23WTT%23) `206.7K 🔥` `NEW`
1. [王兴兴说宇树的对手就是自己](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%85%B4%E5%85%B4%E8%AF%B4%E5%AE%87%E6%A0%91%E7%9A%84%E5%AF%B9%E6%89%8B%E5%B0%B1%E6%98%AF%E8%87%AA%E5%B7%B1%23) `206.4K 🔥` `NEW`
1. [宁忠岩绝杀时刻各国解说员都疯了](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BF%A0%E5%B2%A9%E7%BB%9D%E6%9D%80%E6%97%B6%E5%88%BB%E5%90%84%E5%9B%BD%E8%A7%A3%E8%AF%B4%E5%91%98%E9%83%BD%E7%96%AF%E4%BA%86%23) `206.3K 🔥` `NEW`
1. [扶老人被交警定次责非法院终局依据](https://s.weibo.com/weibo?q=%23%E6%89%B6%E8%80%81%E4%BA%BA%E8%A2%AB%E4%BA%A4%E8%AD%A6%E5%AE%9A%E6%AC%A1%E8%B4%A3%E9%9D%9E%E6%B3%95%E9%99%A2%E7%BB%88%E5%B1%80%E4%BE%9D%E6%8D%AE%23) `195.0K 🔥` `NEW`
1. [勇敢的陈妍希先享受生活](https://s.weibo.com/weibo?q=%23%E5%8B%87%E6%95%A2%E7%9A%84%E9%99%88%E5%A6%8D%E5%B8%8C%E5%85%88%E4%BA%AB%E5%8F%97%E7%94%9F%E6%B4%BB%23) `181.0K 🔥` `NEW`
1. [卖霉豆腐已经有人实操上了](https://s.weibo.com/weibo?q=%23%E5%8D%96%E9%9C%89%E8%B1%86%E8%85%90%E5%B7%B2%E7%BB%8F%E6%9C%89%E4%BA%BA%E5%AE%9E%E6%93%8D%E4%B8%8A%E4%BA%86%23) `167.8K 🔥` `NEW`
1. [春节人形机器人都在忙啥](https://s.weibo.com/weibo?q=%23%E6%98%A5%E8%8A%82%E4%BA%BA%E5%BD%A2%E6%9C%BA%E5%99%A8%E4%BA%BA%E9%83%BD%E5%9C%A8%E5%BF%99%E5%95%A5%23) `166.2K 🔥` `NEW`
1. [父亲偷拿儿子压岁钱被判返还82750元 (Father who stole his son's New Year's money was sentenced to pay back 82,750 yuan)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E5%81%B7%E6%8B%BF%E5%84%BF%E5%AD%90%E5%8E%8B%E5%B2%81%E9%92%B1%E8%A2%AB%E5%88%A4%E8%BF%94%E8%BF%9882750%E5%85%83%23) `164.6K 🔥` `NEW`
1. [女子回村吃饭被超大电动餐桌惊呆](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%9E%E6%9D%91%E5%90%83%E9%A5%AD%E8%A2%AB%E8%B6%85%E5%A4%A7%E7%94%B5%E5%8A%A8%E9%A4%90%E6%A1%8C%E6%83%8A%E5%91%86%23) `146.8K 🔥` `NEW`
1. [于适半夜三点还在刷二创](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E9%80%82%E5%8D%8A%E5%A4%9C%E4%B8%89%E7%82%B9%E8%BF%98%E5%9C%A8%E5%88%B7%E4%BA%8C%E5%88%9B%23) `136.4K 🔥` `NEW`
1. [谷爱凌赌上职业生涯的一跳](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E8%B5%8C%E4%B8%8A%E8%81%8C%E4%B8%9A%E7%94%9F%E6%B6%AF%E7%9A%84%E4%B8%80%E8%B7%B3%23) `135.2K 🔥` `NEW`
1. [王鹤棣观众盘](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E8%A7%82%E4%BC%97%E7%9B%98%23) `118.8K 🔥` `NEW`
1. [檀健次委屈巴巴的告状](https://s.weibo.com/weibo?q=%23%E6%AA%80%E5%81%A5%E6%AC%A1%E5%A7%94%E5%B1%88%E5%B7%B4%E5%B7%B4%E7%9A%84%E5%91%8A%E7%8A%B6%23) `67.7K 🔥` `NEW`
1. [飞驰3林臻东掏兜是黄景瑜本人](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E9%A9%B03%E6%9E%97%E8%87%BB%E4%B8%9C%E6%8E%8F%E5%85%9C%E6%98%AF%E9%BB%84%E6%99%AF%E7%91%9C%E6%9C%AC%E4%BA%BA%23) `66.9K 🔥` `NEW`
1. [H2H新歌MV](https://s.weibo.com/weibo?q=%23H2H%E6%96%B0%E6%AD%8CMV%23) `65.9K 🔥` `NEW`
1. [宁忠岩夺金打破欧美百年垄断](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BF%A0%E5%B2%A9%E5%A4%BA%E9%87%91%E6%89%93%E7%A0%B4%E6%AC%A7%E7%BE%8E%E7%99%BE%E5%B9%B4%E5%9E%84%E6%96%AD%23) `65.1K 🔥` `NEW`
1. [老己已经到了气血不足的年纪](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%B7%B1%E5%B7%B2%E7%BB%8F%E5%88%B0%E4%BA%86%E6%B0%94%E8%A1%80%E4%B8%8D%E8%B6%B3%E7%9A%84%E5%B9%B4%E7%BA%AA%23) `65.0K 🔥` `NEW`
1. [宁忠岩金牌含金量恐怖如斯 (The gold content of Ning Zhongyan’s gold medal is so terrifying)](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BF%A0%E5%B2%A9%E9%87%91%E7%89%8C%E5%90%AB%E9%87%91%E9%87%8F%E6%81%90%E6%80%96%E5%A6%82%E6%96%AF%23) `893.3K 🔥` `+347%`
1. [充电器一拔又是一年](https://s.weibo.com/weibo?q=%23%E5%85%85%E7%94%B5%E5%99%A8%E4%B8%80%E6%8B%94%E5%8F%88%E6%98%AF%E4%B8%80%E5%B9%B4%23) `455.8K 🔥` `+235%`
1. [剧版镖人](https://s.weibo.com/weibo?q=%23%E5%89%A7%E7%89%88%E9%95%96%E4%BA%BA%23) `222.4K 🔥` `+144%`
1. [镖人 (escort)](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%23) `146.6K 🔥` `+47%`
1. [穆祉丞 海口](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%20%E6%B5%B7%E5%8F%A3%23) `144.1K 🔥` `+29%`
1. [镖人改编 删吻戏](https://s.weibo.com/weibo?q=%23%E9%95%96%E4%BA%BA%E6%94%B9%E7%BC%96%20%E5%88%A0%E5%90%BB%E6%88%8F%23) `138.8K 🔥` `+31%`
1. [每一位中国冰雪健儿都闪闪发光 (Every Chinese ice and snow athlete shines brightly)](https://s.weibo.com/weibo?q=%23%E6%AF%8F%E4%B8%80%E4%BD%8D%E4%B8%AD%E5%9B%BD%E5%86%B0%E9%9B%AA%E5%81%A5%E5%84%BF%E9%83%BD%E9%97%AA%E9%97%AA%E5%8F%91%E5%85%89%23) `726.0K 🔥`
1. [吴京 我的夫人姓谢](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%20%E6%88%91%E7%9A%84%E5%A4%AB%E4%BA%BA%E5%A7%93%E8%B0%A2%23) `302.5K 🔥`
1. [王腾回应换iPhone17](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%85%BE%E5%9B%9E%E5%BA%94%E6%8D%A2iPhone17%23) `232.0K 🔥`
1. [王乐乐官宣恋情](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B9%90%E4%B9%90%E5%AE%98%E5%AE%A3%E6%81%8B%E6%83%85%23) `166.0K 🔥`
1. [金泰亨指责闵熙珍泄露聊天记录](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%B3%B0%E4%BA%A8%E6%8C%87%E8%B4%A3%E9%97%B5%E7%86%99%E7%8F%8D%E6%B3%84%E9%9C%B2%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `165.4K 🔥`
1. [关晓彤发表情后秒删](https://s.weibo.com/weibo?q=%23%E5%85%B3%E6%99%93%E5%BD%A4%E5%8F%91%E8%A1%A8%E6%83%85%E5%90%8E%E7%A7%92%E5%88%A0%23) `157.1K 🔥`
1. [解放军有效处置美军在黄海活动 (The People's Liberation Army effectively handles U.S. military activities in the Yellow Sea)](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E6%9C%89%E6%95%88%E5%A4%84%E7%BD%AE%E7%BE%8E%E5%86%9B%E5%9C%A8%E9%BB%84%E6%B5%B7%E6%B4%BB%E5%8A%A8%23) `141.2K 🔥`
1. [将门独后开机 (Turn on the door alone)](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E5%BC%80%E6%9C%BA%23) `133.0K 🔥`
1. [将门毒后](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E6%AF%92%E5%90%8E%23) `65.1K 🔥`
1. [陈妍希回应小笼包](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E5%9B%9E%E5%BA%94%E5%B0%8F%E7%AC%BC%E5%8C%85%23) `65.1K 🔥`
1. [广东地震 (Guangdong earthquake)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C%E5%9C%B0%E9%9C%87%23) `303.3K 🔥` `-49%`
1. [容止 谢景行 (Rong Zhi Xie Jingxing)](https://s.weibo.com/weibo?q=%23%E5%AE%B9%E6%AD%A2%20%E8%B0%A2%E6%99%AF%E8%A1%8C%23) `261.4K 🔥` `-76%`
1. [露上牙说话和露下牙说话的区别](https://s.weibo.com/weibo?q=%23%E9%9C%B2%E4%B8%8A%E7%89%99%E8%AF%B4%E8%AF%9D%E5%92%8C%E9%9C%B2%E4%B8%8B%E7%89%99%E8%AF%B4%E8%AF%9D%E7%9A%84%E5%8C%BA%E5%88%AB%23) `234.0K 🔥` `-56%`
1. [无接触事故扶老人女生该不该担责](https://s.weibo.com/weibo?q=%23%E6%97%A0%E6%8E%A5%E8%A7%A6%E4%BA%8B%E6%95%85%E6%89%B6%E8%80%81%E4%BA%BA%E5%A5%B3%E7%94%9F%E8%AF%A5%E4%B8%8D%E8%AF%A5%E6%8B%85%E8%B4%A3%23) `228.2K 🔥` `-24%`
1. [将门独后官宣王鹤棣孟子义 (The only queen in the general family announced Wang Hedi and Meng Ziyi)](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E5%AE%98%E5%AE%A3%E7%8E%8B%E9%B9%A4%E6%A3%A3%E5%AD%9F%E5%AD%90%E4%B9%89%23) `161.0K 🔥` `-70%`
1. [苏翊鸣连考古都是高清的](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E7%BF%8A%E9%B8%A3%E8%BF%9E%E8%80%83%E5%8F%A4%E9%83%BD%E6%98%AF%E9%AB%98%E6%B8%85%E7%9A%84%23) `97.9K 🔥` `-55%`
1. [杨清柠祝福王乐乐](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B8%85%E6%9F%A0%E7%A5%9D%E7%A6%8F%E7%8E%8B%E4%B9%90%E4%B9%90%23) `95.4K 🔥` `-34%`
1. [悉尼偶遇张极张峻豪 (Encountering Zhang Ji and Zhang Junhao in Sydney)](https://s.weibo.com/weibo?q=%23%E6%82%89%E5%B0%BC%E5%81%B6%E9%81%87%E5%BC%A0%E6%9E%81%E5%BC%A0%E5%B3%BB%E8%B1%AA%23) `94.2K 🔥` `-22%`
1. [儿子寒假睡到中午爸爸不许家人打扰](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E5%AF%92%E5%81%87%E7%9D%A1%E5%88%B0%E4%B8%AD%E5%8D%88%E7%88%B8%E7%88%B8%E4%B8%8D%E8%AE%B8%E5%AE%B6%E4%BA%BA%E6%89%93%E6%89%B0%23) `90.8K 🔥` `-21%`
1. [一家三口返乡途中患病儿子突然离世 (A family of three fell ill and their son died suddenly on their way back home.)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%B6%E4%B8%89%E5%8F%A3%E8%BF%94%E4%B9%A1%E9%80%94%E4%B8%AD%E6%82%A3%E7%97%85%E5%84%BF%E5%AD%90%E7%AA%81%E7%84%B6%E7%A6%BB%E4%B8%96%23) `66.3K 🔥` `-55%`
1. [张元英ins更新](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1ins%E6%9B%B4%E6%96%B0%23) `65.8K 🔥` `-28%`
1. [80岁老人把金手镯做成5枚金戒指](https://s.weibo.com/weibo?q=%2380%E5%B2%81%E8%80%81%E4%BA%BA%E6%8A%8A%E9%87%91%E6%89%8B%E9%95%AF%E5%81%9A%E6%88%905%E6%9E%9A%E9%87%91%E6%88%92%E6%8C%87%23) `65.1K 🔥` `-91%`
1. [奶奶养大的孩子看不得祝绪丹这段 (Children raised by grandma cannot watch Zhu Xudan's episode)](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E5%A5%B6%E5%85%BB%E5%A4%A7%E7%9A%84%E5%AD%A9%E5%AD%90%E7%9C%8B%E4%B8%8D%E5%BE%97%E7%A5%9D%E7%BB%AA%E4%B8%B9%E8%BF%99%E6%AE%B5%23) `65.0K 🔥` `-47%`

Updated at 2026-02-20 17:53:00

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
