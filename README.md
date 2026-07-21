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

1. [阿根廷队再说一万次谢谢 (Argentina says thank you 10,000 times again)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E5%86%8D%E8%AF%B4%E4%B8%80%E4%B8%87%E6%AC%A1%E8%B0%A2%E8%B0%A2%23) `36.4K 🔥` `NEW`
1. [警方介入烈性犬惊吓外卖员事件](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E4%BB%8B%E5%85%A5%E7%83%88%E6%80%A7%E7%8A%AC%E6%83%8A%E5%90%93%E5%A4%96%E5%8D%96%E5%91%98%E4%BA%8B%E4%BB%B6%23) `31.3K 🔥` `NEW`
1. [央视曝九极真美传销陷阱](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%9B%9D%E4%B9%9D%E6%9E%81%E7%9C%9F%E7%BE%8E%E4%BC%A0%E9%94%80%E9%99%B7%E9%98%B1%23) `28.0K 🔥` `NEW`
1. [朋友圈和微博的差别belike](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%92%8C%E5%BE%AE%E5%8D%9A%E7%9A%84%E5%B7%AE%E5%88%ABbelike%23) `246.4K 🔥` `+61%`
1. [还是以前的老师比较敢写评语 (Teachers in the past were more daring to write comments)](https://s.weibo.com/weibo?q=%23%E8%BF%98%E6%98%AF%E4%BB%A5%E5%89%8D%E7%9A%84%E8%80%81%E5%B8%88%E6%AF%94%E8%BE%83%E6%95%A2%E5%86%99%E8%AF%84%E8%AF%AD%23) `180.4K 🔥` `+207%`
1. [开局之年看中国](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B1%80%E4%B9%8B%E5%B9%B4%E7%9C%8B%E4%B8%AD%E5%9B%BD%23) `140.6K 🔥` `+139%`
1. [王源好明显的震颤 (Wang Yuan was clearly trembling)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E5%A5%BD%E6%98%8E%E6%98%BE%E7%9A%84%E9%9C%87%E9%A2%A4%23) `117.9K 🔥` `+100%`
1. [面试因无证驾驶计算机被拒了](https://s.weibo.com/weibo?q=%23%E9%9D%A2%E8%AF%95%E5%9B%A0%E6%97%A0%E8%AF%81%E9%A9%BE%E9%A9%B6%E8%AE%A1%E7%AE%97%E6%9C%BA%E8%A2%AB%E6%8B%92%E4%BA%86%23) `97.2K 🔥` `+72%`
1. [仿佛打开了一本婴儿使用说明书](https://s.weibo.com/weibo?q=%23%E4%BB%BF%E4%BD%9B%E6%89%93%E5%BC%80%E4%BA%86%E4%B8%80%E6%9C%AC%E5%A9%B4%E5%84%BF%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E%E4%B9%A6%23) `85.5K 🔥` `+45%`
1. [樊振东缺席乒超本不该被过度聚焦](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%BC%BA%E5%B8%AD%E4%B9%92%E8%B6%85%E6%9C%AC%E4%B8%8D%E8%AF%A5%E8%A2%AB%E8%BF%87%E5%BA%A6%E8%81%9A%E7%84%A6%23) `64.6K 🔥` `+27%`
1. [路人看到辛芷蕾以为去入伍了 (When passers-by saw Xin Zhilei, they thought she was enlisting in the army.)](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E4%BA%BA%E7%9C%8B%E5%88%B0%E8%BE%9B%E8%8A%B7%E8%95%BE%E4%BB%A5%E4%B8%BA%E5%8E%BB%E5%85%A5%E4%BC%8D%E4%BA%86%23) `43.7K 🔥` `+21%`
1. [7万多买37件香奈儿3个月没到手](https://s.weibo.com/weibo?q=%237%E4%B8%87%E5%A4%9A%E4%B9%B037%E4%BB%B6%E9%A6%99%E5%A5%88%E5%84%BF3%E4%B8%AA%E6%9C%88%E6%B2%A1%E5%88%B0%E6%89%8B%23) `40.5K 🔥` `+58%`
1. [驰援广西离世小伙骨灰已回四川](https://s.weibo.com/weibo?q=%23%E9%A9%B0%E6%8F%B4%E5%B9%BF%E8%A5%BF%E7%A6%BB%E4%B8%96%E5%B0%8F%E4%BC%99%E9%AA%A8%E7%81%B0%E5%B7%B2%E5%9B%9E%E5%9B%9B%E5%B7%9D%23) `32.2K 🔥` `+25%`
1. [不要用豆包解决人际关系矛盾 (Don’t use bean bags to resolve interpersonal conflicts)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E7%94%A8%E8%B1%86%E5%8C%85%E8%A7%A3%E5%86%B3%E4%BA%BA%E9%99%85%E5%85%B3%E7%B3%BB%E7%9F%9B%E7%9B%BE%23) `31.2K 🔥` `+22%`
1. [这一秒过火 听劝 (This second is too much. Listen to me.)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E7%A7%92%E8%BF%87%E7%81%AB%20%E5%90%AC%E5%8A%9D%23) `62.8K 🔥`
1. [NewJeans回归预告](https://s.weibo.com/weibo?q=%23NewJeans%E5%9B%9E%E5%BD%92%E9%A2%84%E5%91%8A%23) `52.3K 🔥`
1. [主体性强的人会觉得谈恋爱很无聊](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E4%BD%93%E6%80%A7%E5%BC%BA%E7%9A%84%E4%BA%BA%E4%BC%9A%E8%A7%89%E5%BE%97%E8%B0%88%E6%81%8B%E7%88%B1%E5%BE%88%E6%97%A0%E8%81%8A%23) `48.0K 🔥`
1. [退钱哥晒世界杯球票账单](https://s.weibo.com/weibo?q=%23%E9%80%80%E9%92%B1%E5%93%A5%E6%99%92%E4%B8%96%E7%95%8C%E6%9D%AF%E7%90%83%E7%A5%A8%E8%B4%A6%E5%8D%95%23) `44.8K 🔥`
1. [小伙背15kg物资赴广西救灾不幸离世 (Young man carrying 15kg of supplies to Guangxi for disaster relief died unfortunately)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E8%83%8C15kg%E7%89%A9%E8%B5%84%E8%B5%B4%E5%B9%BF%E8%A5%BF%E6%95%91%E7%81%BE%E4%B8%8D%E5%B9%B8%E7%A6%BB%E4%B8%96%23) `44.2K 🔥`
1. [电影功夫女足票房破16亿](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E5%8A%9F%E5%A4%AB%E5%A5%B3%E8%B6%B3%E7%A5%A8%E6%88%BF%E7%A0%B416%E4%BA%BF%23) `37.2K 🔥`
1. [九门](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%23) `36.8K 🔥`
1. [你需要大量的无聊 (you need a lot of boredom)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E9%9C%80%E8%A6%81%E5%A4%A7%E9%87%8F%E7%9A%84%E6%97%A0%E8%81%8A%23) `31.2K 🔥`
1. [花儿与少年8](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%84%BF%E4%B8%8E%E5%B0%91%E5%B9%B48%23) `31.2K 🔥`
1. [汪苏泷许嵩徐良演唱会撞档](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E8%AE%B8%E5%B5%A9%E5%BE%90%E8%89%AF%E6%BC%94%E5%94%B1%E4%BC%9A%E6%92%9E%E6%A1%A3%23) `31.2K 🔥`
1. [买的金针菇忘记吃了成这样了 (I forgot to eat the enoki mushrooms I bought and ended up like this)](https://s.weibo.com/weibo?q=%23%E4%B9%B0%E7%9A%84%E9%87%91%E9%92%88%E8%8F%87%E5%BF%98%E8%AE%B0%E5%90%83%E4%BA%86%E6%88%90%E8%BF%99%E6%A0%B7%E4%BA%86%23) `29.9K 🔥`
1. [因提亲一句玩笑公公送5吨西瓜](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E6%8F%90%E4%BA%B2%E4%B8%80%E5%8F%A5%E7%8E%A9%E7%AC%91%E5%85%AC%E5%85%AC%E9%80%815%E5%90%A8%E8%A5%BF%E7%93%9C%23) `28.6K 🔥`
1. [我们的少年时代2](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BB%AC%E7%9A%84%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A32%23) `28.6K 🔥`
1. [14吨鱼被扣押腐烂获国家赔偿62万 (14 tons of fish were seized and rotted, and the state compensated 620,000 yuan)](https://s.weibo.com/weibo?q=%2314%E5%90%A8%E9%B1%BC%E8%A2%AB%E6%89%A3%E6%8A%BC%E8%85%90%E7%83%82%E8%8E%B7%E5%9B%BD%E5%AE%B6%E8%B5%94%E5%81%BF62%E4%B8%87%23) `28.1K 🔥`
1. [阴阳师 (Onmyoji)](https://s.weibo.com/weibo?q=%23%E9%98%B4%E9%98%B3%E5%B8%88%23) `28.1K 🔥`
1. [怡颗莓 致癌物](https://s.weibo.com/weibo?q=%23%E6%80%A1%E9%A2%97%E8%8E%93%20%E8%87%B4%E7%99%8C%E7%89%A9%23) `28.1K 🔥`
1. [普洱5.0级地震最新情况](https://s.weibo.com/weibo?q=%23%E6%99%AE%E6%B4%B15.0%E7%BA%A7%E5%9C%B0%E9%9C%87%E6%9C%80%E6%96%B0%E6%83%85%E5%86%B5%23) `28.1K 🔥`
1. [妈妈回应儿子681分选择中本贯通 (Mother responds to her son’s choice of Nakamoto Pass with 681 points)](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E5%9B%9E%E5%BA%94%E5%84%BF%E5%AD%90681%E5%88%86%E9%80%89%E6%8B%A9%E4%B8%AD%E6%9C%AC%E8%B4%AF%E9%80%9A%23) `28.1K 🔥`
1. [小高和刚母亲去世](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E9%AB%98%E5%92%8C%E5%88%9A%E6%AF%8D%E4%BA%B2%E5%8E%BB%E4%B8%96%23) `28.1K 🔥`
1. [评论区像打开婴儿使用说明书](https://s.weibo.com/weibo?q=%23%E8%AF%84%E8%AE%BA%E5%8C%BA%E5%83%8F%E6%89%93%E5%BC%80%E5%A9%B4%E5%84%BF%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E%E4%B9%A6%23) `28.1K 🔥`
1. [人只有幸福的时候才会话多](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%8F%AA%E6%9C%89%E5%B9%B8%E7%A6%8F%E7%9A%84%E6%97%B6%E5%80%99%E6%89%8D%E4%BC%9A%E8%AF%9D%E5%A4%9A%23) `28.1K 🔥`
1. [今年暑假雀骨守住了长剧的体面](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E6%9A%91%E5%81%87%E9%9B%80%E9%AA%A8%E5%AE%88%E4%BD%8F%E4%BA%86%E9%95%BF%E5%89%A7%E7%9A%84%E4%BD%93%E9%9D%A2%23) `28.1K 🔥`
1. [国产剧终于不强行圆回来了](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BA%A7%E5%89%A7%E7%BB%88%E4%BA%8E%E4%B8%8D%E5%BC%BA%E8%A1%8C%E5%9C%86%E5%9B%9E%E6%9D%A5%E4%BA%86%23) `28.1K 🔥`
1. [豆包被逼疯但我是真的不会](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E8%A2%AB%E9%80%BC%E7%96%AF%E4%BD%86%E6%88%91%E6%98%AF%E7%9C%9F%E7%9A%84%E4%B8%8D%E4%BC%9A%23) `28.1K 🔥`
1. [深圳26岁女子体检发现是男性](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B326%E5%B2%81%E5%A5%B3%E5%AD%90%E4%BD%93%E6%A3%80%E5%8F%91%E7%8E%B0%E6%98%AF%E7%94%B7%E6%80%A7%23) `28.1K 🔥`
1. [陈都灵新剧造型 不符合人设 (Chen Duling’s new drama look doesn’t fit the character)](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E6%96%B0%E5%89%A7%E9%80%A0%E5%9E%8B%20%E4%B8%8D%E7%AC%A6%E5%90%88%E4%BA%BA%E8%AE%BE%23) `28.1K 🔥`
1. [王源南京演唱会可以4连坐 (Wang Yuan’s Nanjing concert can seat 4 people in a row)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E5%8D%97%E4%BA%AC%E6%BC%94%E5%94%B1%E4%BC%9A%E5%8F%AF%E4%BB%A54%E8%BF%9E%E5%9D%90%23) `28.0K 🔥`
1. [阿根廷队多人面临禁赛 (Several members of Argentina team face suspensions)](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A0%B9%E5%BB%B7%E9%98%9F%E5%A4%9A%E4%BA%BA%E9%9D%A2%E4%B8%B4%E7%A6%81%E8%B5%9B%23) `28.0K 🔥`
1. [谁来救救瘦子在夏天的食欲 (Who will save the thin man's appetite in summer?)](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%9D%A5%E6%95%91%E6%95%91%E7%98%A6%E5%AD%90%E5%9C%A8%E5%A4%8F%E5%A4%A9%E7%9A%84%E9%A3%9F%E6%AC%B2%23) `28.0K 🔥`
1. [王楚然刘令姿cp名](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E7%84%B6%E5%88%98%E4%BB%A4%E5%A7%BFcp%E5%90%8D%23) `28.0K 🔥`
1. [足协杯](https://s.weibo.com/weibo?q=%23%E8%B6%B3%E5%8D%8F%E6%9D%AF%23) `28.0K 🔥`
1. [男子用免打孔单杠倒立锻炼摔成脑疝](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%94%A8%E5%85%8D%E6%89%93%E5%AD%94%E5%8D%95%E6%9D%A0%E5%80%92%E7%AB%8B%E9%94%BB%E7%82%BC%E6%91%94%E6%88%90%E8%84%91%E7%96%9D%23) `28.0K 🔥`
1. [德明利跌停爆仓传闻 (Rumors about Demingli falling to the limit and liquidating its positions)](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E6%98%8E%E5%88%A9%E8%B7%8C%E5%81%9C%E7%88%86%E4%BB%93%E4%BC%A0%E9%97%BB%23) `28.0K 🔥`
1. [广州家长因孩子选择中本贯通落泪 (Guangzhou parents shed tears because their children chose Zhongben University)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E5%B7%9E%E5%AE%B6%E9%95%BF%E5%9B%A0%E5%AD%A9%E5%AD%90%E9%80%89%E6%8B%A9%E4%B8%AD%E6%9C%AC%E8%B4%AF%E9%80%9A%E8%90%BD%E6%B3%AA%23) `28.0K 🔥`
1. [人工智能 文科生](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%20%E6%96%87%E7%A7%91%E7%94%9F%23) `28.0K 🔥`
1. [90后清华天才 干崩了美股](https://s.weibo.com/weibo?q=%2390%E5%90%8E%E6%B8%85%E5%8D%8E%E5%A4%A9%E6%89%8D%20%E5%B9%B2%E5%B4%A9%E4%BA%86%E7%BE%8E%E8%82%A1%23) `28.0K 🔥`

Updated at 2026-07-22 05:53:28

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
