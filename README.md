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

1. [网红温婉偷税被罚后换号复活](https://s.weibo.com/weibo?q=%23%E7%BD%91%E7%BA%A2%E6%B8%A9%E5%A9%89%E5%81%B7%E7%A8%8E%E8%A2%AB%E7%BD%9A%E5%90%8E%E6%8D%A2%E5%8F%B7%E5%A4%8D%E6%B4%BB%23) `899.8K 🔥` `NEW`
1. [电影欢迎来龙餐馆口碑](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E6%AC%A2%E8%BF%8E%E6%9D%A5%E9%BE%99%E9%A4%90%E9%A6%86%E5%8F%A3%E7%A2%91%23) `550.6K 🔥` `NEW`
1. [我的前半生官博都活了](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%E5%AE%98%E5%8D%9A%E9%83%BD%E6%B4%BB%E4%BA%86%23) `541.5K 🔥` `NEW`
1. [原来明媚又开朗的女生是这样的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%98%8E%E5%AA%9A%E5%8F%88%E5%BC%80%E6%9C%97%E7%9A%84%E5%A5%B3%E7%94%9F%E6%98%AF%E8%BF%99%E6%A0%B7%E7%9A%84%23) `520.8K 🔥` `NEW`
1. [去西班牙旅游出门不要带包](https://s.weibo.com/weibo?q=%23%E5%8E%BB%E8%A5%BF%E7%8F%AD%E7%89%99%E6%97%85%E6%B8%B8%E5%87%BA%E9%97%A8%E4%B8%8D%E8%A6%81%E5%B8%A6%E5%8C%85%23) `386.7K 🔥` `NEW`
1. [华晨宇失眠照流出](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E5%A4%B1%E7%9C%A0%E7%85%A7%E6%B5%81%E5%87%BA%23) `348.7K 🔥` `NEW`
1. [李现章若楠一起看汪苏泷演唱会](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E7%AB%A0%E8%8B%A5%E6%A5%A0%E4%B8%80%E8%B5%B7%E7%9C%8B%E6%B1%AA%E8%8B%8F%E6%B3%B7%E6%BC%94%E5%94%B1%E4%BC%9A%23) `335.0K 🔥` `NEW`
1. [原来王传君以前那么开朗](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%8E%8B%E4%BC%A0%E5%90%9B%E4%BB%A5%E5%89%8D%E9%82%A3%E4%B9%88%E5%BC%80%E6%9C%97%23) `310.9K 🔥` `NEW`
1. [张雅琪去了那英演唱会](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E5%8E%BB%E4%BA%86%E9%82%A3%E8%8B%B1%E6%BC%94%E5%94%B1%E4%BC%9A%23) `287.6K 🔥` `NEW`
1. [AGAL夺冠](https://s.weibo.com/weibo?q=%23AGAL%E5%A4%BA%E5%86%A0%23) `259.5K 🔥` `NEW`
1. [鞠婧祎细高跟](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E7%BB%86%E9%AB%98%E8%B7%9F%23) `246.5K 🔥` `NEW`
1. [樊振东让德国换球馆](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%AE%A9%E5%BE%B7%E5%9B%BD%E6%8D%A2%E7%90%83%E9%A6%86%23) `241.1K 🔥` `NEW`
1. [追觅办公室大片工位闲置](https://s.weibo.com/weibo?q=%23%E8%BF%BD%E8%A7%85%E5%8A%9E%E5%85%AC%E5%AE%A4%E5%A4%A7%E7%89%87%E5%B7%A5%E4%BD%8D%E9%97%B2%E7%BD%AE%23) `165.5K 🔥` `NEW`
1. [机器人解说机器人](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%A7%A3%E8%AF%B4%E6%9C%BA%E5%99%A8%E4%BA%BA%23) `156.4K 🔥` `NEW`
1. [杜塞尔多夫3比1巴特柯尼希斯霍芬](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%A1%9E%E5%B0%94%E5%A4%9A%E5%A4%AB3%E6%AF%941%E5%B7%B4%E7%89%B9%E6%9F%AF%E5%B0%BC%E5%B8%8C%E6%96%AF%E9%9C%8D%E8%8A%AC%23) `156.2K 🔥` `NEW`
1. [张凌赫卡住了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%8D%A1%E4%BD%8F%E4%BA%86%23) `151.6K 🔥` `NEW`
1. [金季酒店与全季酒店已达成和解](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%AD%A3%E9%85%92%E5%BA%97%E4%B8%8E%E5%85%A8%E5%AD%A3%E9%85%92%E5%BA%97%E5%B7%B2%E8%BE%BE%E6%88%90%E5%92%8C%E8%A7%A3%23) `151.5K 🔥` `NEW`
1. [EWC](https://s.weibo.com/weibo?q=%23EWC%23) `141.9K 🔥` `NEW`
1. [张月学到了孟子义的精髓](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E5%AD%A6%E5%88%B0%E4%BA%86%E5%AD%9F%E5%AD%90%E4%B9%89%E7%9A%84%E7%B2%BE%E9%AB%93%23) `137.1K 🔥` `NEW`
1. [严浩翔看黄子弘凡帮唱组票数的表情](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%9C%8B%E9%BB%84%E5%AD%90%E5%BC%98%E5%87%A1%E5%B8%AE%E5%94%B1%E7%BB%84%E7%A5%A8%E6%95%B0%E7%9A%84%E8%A1%A8%E6%83%85%23) `123.0K 🔥` `NEW`
1. [樊振东开门红](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%BC%80%E9%97%A8%E7%BA%A2%23) `118.1K 🔥` `NEW`
1. [刘宇宁在海报的C位](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E5%9C%A8%E6%B5%B7%E6%8A%A5%E7%9A%84C%E4%BD%8D%23) `117.4K 🔥` `NEW`
1. [曾被狼群抚养12年狼孩去世](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%A2%AB%E7%8B%BC%E7%BE%A4%E6%8A%9A%E5%85%BB12%E5%B9%B4%E7%8B%BC%E5%AD%A9%E5%8E%BB%E4%B8%96%23) `524.8K 🔥` `+272%`
1. [韩国狗肉馆迎来最后一批食客](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%8B%97%E8%82%89%E9%A6%86%E8%BF%8E%E6%9D%A5%E6%9C%80%E5%90%8E%E4%B8%80%E6%89%B9%E9%A3%9F%E5%AE%A2%23) `423.6K 🔥` `+30%`
1. [宇树机器人100米预赛小组垫底](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E6%9C%BA%E5%99%A8%E4%BA%BA100%E7%B1%B3%E9%A2%84%E8%B5%9B%E5%B0%8F%E7%BB%84%E5%9E%AB%E5%BA%95%23) `352.3K 🔥` `+81%`
1. [王传君说的是乔任梁吗 (Is Wang Chuanjun talking about Qiao Renliang?)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E8%AF%B4%E7%9A%84%E6%98%AF%E4%B9%94%E4%BB%BB%E6%A2%81%E5%90%97%23) `351.9K 🔥` `+84%`
1. [台风简拉维突然大拐弯](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%AE%80%E6%8B%89%E7%BB%B4%E7%AA%81%E7%84%B6%E5%A4%A7%E6%8B%90%E5%BC%AF%23) `319.3K 🔥` `+129%`
1. [德甲](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E7%94%B2%23) `234.6K 🔥` `+118%`
1. [郭敬明剧组减肥方法](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E5%89%A7%E7%BB%84%E5%87%8F%E8%82%A5%E6%96%B9%E6%B3%95%23) `231.9K 🔥` `+27%`
1. [4名男子拒付嫖资勒索卖淫女后赌光 (4 men blackmailed prostitutes after refusing to pay for prostitution and then gambled away their money)](https://s.weibo.com/weibo?q=%234%E5%90%8D%E7%94%B7%E5%AD%90%E6%8B%92%E4%BB%98%E5%AB%96%E8%B5%84%E5%8B%92%E7%B4%A2%E5%8D%96%E6%B7%AB%E5%A5%B3%E5%90%8E%E8%B5%8C%E5%85%89%23) `187.6K 🔥` `+168%`
1. [女子回应男友转账30万后自缢身亡 (Woman hanged herself after responding to her boyfriend's transfer of 300,000 yuan)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%9E%E5%BA%94%E7%94%B7%E5%8F%8B%E8%BD%AC%E8%B4%A630%E4%B8%87%E5%90%8E%E8%87%AA%E7%BC%A2%E8%BA%AB%E4%BA%A1%23) `128.6K 🔥` `+97%`
1. [欢子淘汰 压根没来](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E5%AD%90%E6%B7%98%E6%B1%B0%20%E5%8E%8B%E6%A0%B9%E6%B2%A1%E6%9D%A5%23) `110.5K 🔥` `+64%`
1. [人民日报谈火车零食占座 (People's Daily talks about snacks occupying seats on trains)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E6%97%A5%E6%8A%A5%E8%B0%88%E7%81%AB%E8%BD%A6%E9%9B%B6%E9%A3%9F%E5%8D%A0%E5%BA%A7%23) `1.4M 🔥`
1. [中国经济是一片大海经得起风浪](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E6%98%AF%E4%B8%80%E7%89%87%E5%A4%A7%E6%B5%B7%E7%BB%8F%E5%BE%97%E8%B5%B7%E9%A3%8E%E6%B5%AA%23) `692.7K 🔥`
1. [李维嘉追星成功王菲](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BB%B4%E5%98%89%E8%BF%BD%E6%98%9F%E6%88%90%E5%8A%9F%E7%8E%8B%E8%8F%B2%23) `226.0K 🔥`
1. [零食占座当事人母亲发声 (The mother of the person involved in snacks occupying a seat speaks out)](https://s.weibo.com/weibo?q=%23%E9%9B%B6%E9%A3%9F%E5%8D%A0%E5%BA%A7%E5%BD%93%E4%BA%8B%E4%BA%BA%E6%AF%8D%E4%BA%B2%E5%8F%91%E5%A3%B0%23) `215.3K 🔥`
1. [处暑](https://s.weibo.com/weibo?q=%23%E5%A4%84%E6%9A%91%23) `156.7K 🔥`
1. [樊振东首秀现场爆满](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E9%A6%96%E7%A7%80%E7%8E%B0%E5%9C%BA%E7%88%86%E6%BB%A1%23) `155.9K 🔥`
1. [陈俊生一块表63万](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BF%8A%E7%94%9F%E4%B8%80%E5%9D%97%E8%A1%A863%E4%B8%87%23) `151.8K 🔥`
1. [西班牙人1比2皇马](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E4%BA%BA1%E6%AF%942%E7%9A%87%E9%A9%AC%23) `122.0K 🔥`
1. [日本地震](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9C%B0%E9%9C%87%23) `338.0K 🔥` `-60%`
1. [必须从速从严处置甲醛白菜](https://s.weibo.com/weibo?q=%23%E5%BF%85%E9%A1%BB%E4%BB%8E%E9%80%9F%E4%BB%8E%E4%B8%A5%E5%A4%84%E7%BD%AE%E7%94%B2%E9%86%9B%E7%99%BD%E8%8F%9C%23) `184.0K 🔥` `-31%`
1. [王源一句话让几万人低头看手机](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BA%90%E4%B8%80%E5%8F%A5%E8%AF%9D%E8%AE%A9%E5%87%A0%E4%B8%87%E4%BA%BA%E4%BD%8E%E5%A4%B4%E7%9C%8B%E6%89%8B%E6%9C%BA%23) `135.9K 🔥` `-22%`
1. [沙德尔加强为超强台风](https://s.weibo.com/weibo?q=%23%E6%B2%99%E5%BE%B7%E5%B0%94%E5%8A%A0%E5%BC%BA%E4%B8%BA%E8%B6%85%E5%BC%BA%E5%8F%B0%E9%A3%8E%23) `118.1K 🔥` `-39%`
1. [樊振东一单两分率队取胜](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E4%B8%80%E5%8D%95%E4%B8%A4%E5%88%86%E7%8E%87%E9%98%9F%E5%8F%96%E8%83%9C%23) `116.3K 🔥` `-34%`
1. [披荆斩棘淘汰 (Overcome all obstacles and eliminate)](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E6%B7%98%E6%B1%B0%23) `115.0K 🔥` `-33%`
1. [住破房穿20块衣服男子20年攒下789万](https://s.weibo.com/weibo?q=%23%E4%BD%8F%E7%A0%B4%E6%88%BF%E7%A9%BF20%E5%9D%97%E8%A1%A3%E6%9C%8D%E7%94%B7%E5%AD%9020%E5%B9%B4%E6%94%92%E4%B8%8B789%E4%B8%87%23) `110.9K 🔥` `-30%`
1. [张睿故意还是不小心的](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9D%BF%E6%95%85%E6%84%8F%E8%BF%98%E6%98%AF%E4%B8%8D%E5%B0%8F%E5%BF%83%E7%9A%84%23) `109.8K 🔥` `-27%`

Updated at 2026-08-23 09:54:28

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
