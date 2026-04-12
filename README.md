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

1. [朱苏 第三个吻痕 (Zhu Su’s third hickey)](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E8%8B%8F%20%E7%AC%AC%E4%B8%89%E4%B8%AA%E5%90%BB%E7%97%95%23) `785.9K 🔥` `NEW`
1. [卫星互联网技术试验卫星发射任务圆满成功](https://s.weibo.com/weibo?q=%23%E5%8D%AB%E6%98%9F%E4%BA%92%E8%81%94%E7%BD%91%E6%8A%80%E6%9C%AF%E8%AF%95%E9%AA%8C%E5%8D%AB%E6%98%9F%E5%8F%91%E5%B0%84%E4%BB%BB%E5%8A%A1%E5%9C%86%E6%BB%A1%E6%88%90%E5%8A%9F%23) `590.9K 🔥` `NEW`
1. [仙逆](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%23) `213.3K 🔥` `NEW`
1. [李荣浩真转我五百了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%8D%A3%E6%B5%A9%E7%9C%9F%E8%BD%AC%E6%88%91%E4%BA%94%E7%99%BE%E4%BA%86%23) `181.3K 🔥` `NEW`
1. [业内称平台不再相信演员能单扛了](https://s.weibo.com/weibo?q=%23%E4%B8%9A%E5%86%85%E7%A7%B0%E5%B9%B3%E5%8F%B0%E4%B8%8D%E5%86%8D%E7%9B%B8%E4%BF%A1%E6%BC%94%E5%91%98%E8%83%BD%E5%8D%95%E6%89%9B%E4%BA%86%23) `167.9K 🔥` `NEW`
1. [迪丽热巴补偿去巴黎的粉丝](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%A1%A5%E5%81%BF%E5%8E%BB%E5%B7%B4%E9%BB%8E%E7%9A%84%E7%B2%89%E4%B8%9D%23) `166.8K 🔥` `NEW`
1. [王橹杰语音好可爱](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E8%AF%AD%E9%9F%B3%E5%A5%BD%E5%8F%AF%E7%88%B1%23) `161.0K 🔥` `NEW`
1. [郭碧婷生一胎的时候没备孕](https://s.weibo.com/weibo?q=%23%E9%83%AD%E7%A2%A7%E5%A9%B7%E7%94%9F%E4%B8%80%E8%83%8E%E7%9A%84%E6%97%B6%E5%80%99%E6%B2%A1%E5%A4%87%E5%AD%95%23) `156.0K 🔥` `NEW`
1. [浪姐封神舞台](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E5%B0%81%E7%A5%9E%E8%88%9E%E5%8F%B0%23) `135.0K 🔥` `NEW`
1. [三甲医生回应郭碧婷二胎生育损伤](https://s.weibo.com/weibo?q=%23%E4%B8%89%E7%94%B2%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%94%E9%83%AD%E7%A2%A7%E5%A9%B7%E4%BA%8C%E8%83%8E%E7%94%9F%E8%82%B2%E6%8D%9F%E4%BC%A4%23) `99.2K 🔥` `NEW`
1. [马嘉祺 杨柳絮别飘了 (Ma Jiaqi, don’t let the willow catkins float.)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%20%E6%9D%A8%E6%9F%B3%E7%B5%AE%E5%88%AB%E9%A3%98%E4%BA%86%23) `85.9K 🔥` `NEW`
1. [西班牙小镇炸毁内塔尼亚胡塑像](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%E5%B0%8F%E9%95%87%E7%82%B8%E6%AF%81%E5%86%85%E5%A1%94%E5%B0%BC%E4%BA%9A%E8%83%A1%E5%A1%91%E5%83%8F%23) `82.6K 🔥` `NEW`
1. [尼泊尔珠峰发生超1亿元骗保大案](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E7%8F%A0%E5%B3%B0%E5%8F%91%E7%94%9F%E8%B6%851%E4%BA%BF%E5%85%83%E9%AA%97%E4%BF%9D%E5%A4%A7%E6%A1%88%23) `79.3K 🔥` `NEW`
1. [阚清子二公分组](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E4%BA%8C%E5%85%AC%E5%88%86%E7%BB%84%23) `76.1K 🔥` `NEW`
1. [温瑞博李和宸夺冠](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E7%91%9E%E5%8D%9A%E6%9D%8E%E5%92%8C%E5%AE%B8%E5%A4%BA%E5%86%A0%23) `67.0K 🔥` `NEW`
1. [王者世界野区逛不完](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E4%B8%96%E7%95%8C%E9%87%8E%E5%8C%BA%E9%80%9B%E4%B8%8D%E5%AE%8C%23) `64.7K 🔥` `NEW`
1. [双高胎抢票](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E9%AB%98%E8%83%8E%E6%8A%A2%E7%A5%A8%23) `64.2K 🔥` `NEW`
1. [徐洁儿回应自己没人选](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B4%81%E5%84%BF%E5%9B%9E%E5%BA%94%E8%87%AA%E5%B7%B1%E6%B2%A1%E4%BA%BA%E9%80%89%23) `61.1K 🔥` `NEW`
1. [赌王何鸿燊17名子女已有3人离世](https://s.weibo.com/weibo?q=%23%E8%B5%8C%E7%8E%8B%E4%BD%95%E9%B8%BF%E7%87%8A17%E5%90%8D%E5%AD%90%E5%A5%B3%E5%B7%B2%E6%9C%893%E4%BA%BA%E7%A6%BB%E4%B8%96%23) `1.1M 🔥` `+992%`
1. [李小冉唐艺昕后台玩手机](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E5%94%90%E8%89%BA%E6%98%95%E5%90%8E%E5%8F%B0%E7%8E%A9%E6%89%8B%E6%9C%BA%23) `389.1K 🔥` `+83%`
1. [何超蕸终身未婚 (He Chaoqiu never married)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E8%95%B8%E7%BB%88%E8%BA%AB%E6%9C%AA%E5%A9%9A%23) `309.9K 🔥` `+31%`
1. [赵子琪硬刚浪姐 (Zhao Ziqi is tough on Sister Lang)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%AD%90%E7%90%AA%E7%A1%AC%E5%88%9A%E6%B5%AA%E5%A7%90%23) `180.8K 🔥` `+23%`
1. [雪碧拌面](https://s.weibo.com/weibo?q=%23%E9%9B%AA%E7%A2%A7%E6%8B%8C%E9%9D%A2%23) `163.3K 🔥` `+108%`
1. [何超蕸去世 (He Chaogui passed away)](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E8%95%B8%E5%8E%BB%E4%B8%96%23) `158.1K 🔥` `+36%`
1. [女子离婚3天后再婚前夫净身出户](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A6%BB%E5%A9%9A3%E5%A4%A9%E5%90%8E%E5%86%8D%E5%A9%9A%E5%89%8D%E5%A4%AB%E5%87%80%E8%BA%AB%E5%87%BA%E6%88%B7%23) `150.2K 🔥` `+30%`
1. [钢铁森林](https://s.weibo.com/weibo?q=%23%E9%92%A2%E9%93%81%E6%A3%AE%E6%9E%97%23) `100.3K 🔥` `+34%`
1. [何超琼偕弟妹哀告](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%B6%85%E7%90%BC%E5%81%95%E5%BC%9F%E5%A6%B9%E5%93%80%E5%91%8A%23) `99.3K 🔥` `+47%`
1. [蜜雪冰城南美首店开业多位华人发声](https://s.weibo.com/weibo?q=%23%E8%9C%9C%E9%9B%AA%E5%86%B0%E5%9F%8E%E5%8D%97%E7%BE%8E%E9%A6%96%E5%BA%97%E5%BC%80%E4%B8%9A%E5%A4%9A%E4%BD%8D%E5%8D%8E%E4%BA%BA%E5%8F%91%E5%A3%B0%23) `88.4K 🔥` `+27%`
1. [官方辟谣发放2026年度综合补贴](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E8%BE%9F%E8%B0%A3%E5%8F%91%E6%94%BE2026%E5%B9%B4%E5%BA%A6%E7%BB%BC%E5%90%88%E8%A1%A5%E8%B4%B4%23) `228.7K 🔥`
1. [王濛公司大部分是退役运动员](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%85%AC%E5%8F%B8%E5%A4%A7%E9%83%A8%E5%88%86%E6%98%AF%E9%80%80%E5%BD%B9%E8%BF%90%E5%8A%A8%E5%91%98%23) `217.0K 🔥`
1. [老人私栓绳子致男孩气管全断裂](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E7%A7%81%E6%A0%93%E7%BB%B3%E5%AD%90%E8%87%B4%E7%94%B7%E5%AD%A9%E6%B0%94%E7%AE%A1%E5%85%A8%E6%96%AD%E8%A3%82%23) `176.5K 🔥`
1. [杨天真吐槽很多很红的明星漂亮无脑](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%A4%A9%E7%9C%9F%E5%90%90%E6%A7%BD%E5%BE%88%E5%A4%9A%E5%BE%88%E7%BA%A2%E7%9A%84%E6%98%8E%E6%98%9F%E6%BC%82%E4%BA%AE%E6%97%A0%E8%84%91%23) `175.1K 🔥`
1. [你们俩是要毁了芒果吗 (Are you two going to destroy the mango?)](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E4%BB%AC%E4%BF%A9%E6%98%AF%E8%A6%81%E6%AF%81%E4%BA%86%E8%8A%92%E6%9E%9C%E5%90%97%23) `171.2K 🔥`
1. [洛克王国 (Locke Kingdom)](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E5%85%8B%E7%8E%8B%E5%9B%BD%23) `170.4K 🔥`
1. [A股交易重要调整来了](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E4%BA%A4%E6%98%93%E9%87%8D%E8%A6%81%E8%B0%83%E6%95%B4%E6%9D%A5%E4%BA%86%23) `158.5K 🔥`
1. [男子住48元宾馆身亡家属索赔40万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%BD%8F48%E5%85%83%E5%AE%BE%E9%A6%86%E8%BA%AB%E4%BA%A1%E5%AE%B6%E5%B1%9E%E7%B4%A2%E8%B5%9440%E4%B8%87%23) `139.7K 🔥`
1. [妈妈替女儿申请不上早读 (Mother applies for early education for her daughter)](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E6%9B%BF%E5%A5%B3%E5%84%BF%E7%94%B3%E8%AF%B7%E4%B8%8D%E4%B8%8A%E6%97%A9%E8%AF%BB%23) `109.7K 🔥`
1. [莫氏鸡煲日均营业额不低于6万](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E6%97%A5%E5%9D%87%E8%90%A5%E4%B8%9A%E9%A2%9D%E4%B8%8D%E4%BD%8E%E4%BA%8E6%E4%B8%87%23) `100.3K 🔥`
1. [伊朗代表团离开巴基斯坦 (Iranian delegation leaves Pakistan)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%BB%A3%E8%A1%A8%E5%9B%A2%E7%A6%BB%E5%BC%80%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%23) `99.4K 🔥`
1. [iPhone17系列最新销量](https://s.weibo.com/weibo?q=%23iPhone17%E7%B3%BB%E5%88%97%E6%9C%80%E6%96%B0%E9%94%80%E9%87%8F%23) `97.5K 🔥`
1. [张凌赫今天素颜好性感](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E4%BB%8A%E5%A4%A9%E7%B4%A0%E9%A2%9C%E5%A5%BD%E6%80%A7%E6%84%9F%23) `94.4K 🔥`
1. [朱志鑫solo舞台音响故障](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E5%BF%97%E9%91%ABsolo%E8%88%9E%E5%8F%B0%E9%9F%B3%E5%93%8D%E6%95%85%E9%9A%9C%23) `91.2K 🔥`
1. [一男子血管堵塞99%仍要飞](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%94%B7%E5%AD%90%E8%A1%80%E7%AE%A1%E5%A0%B5%E5%A1%9E99%25%E4%BB%8D%E8%A6%81%E9%A3%9E%23) `83.0K 🔥`
1. [常州暂时改名常洲](https://s.weibo.com/weibo?q=%23%E5%B8%B8%E5%B7%9E%E6%9A%82%E6%97%B6%E6%94%B9%E5%90%8D%E5%B8%B8%E6%B4%B2%23) `319.1K 🔥` `-70%`
1. [莫氏鸡煲要卖汤底药包了](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%A6%81%E5%8D%96%E6%B1%A4%E5%BA%95%E8%8D%AF%E5%8C%85%E4%BA%86%23) `220.6K 🔥` `-71%`
1. [RW 卖队 (RW selling the team)](https://s.weibo.com/weibo?q=%23RW%20%E5%8D%96%E9%98%9F%23) `99.6K 🔥` `-46%`
1. [王濛剪蕾丝](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%89%AA%E8%95%BE%E4%B8%9D%23) `83.7K 🔥` `-27%`
1. [比伯嗓子太好了](https://s.weibo.com/weibo?q=%23%E6%AF%94%E4%BC%AF%E5%97%93%E5%AD%90%E5%A4%AA%E5%A5%BD%E4%BA%86%23) `82.9K 🔥` `-43%`
1. [罗生门](https://s.weibo.com/weibo?q=%23%E7%BD%97%E7%94%9F%E9%97%A8%23) `75.7K 🔥` `-36%`
1. [张杰力挺谢娜演唱会](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E5%8A%9B%E6%8C%BA%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%23) `66.7K 🔥` `-31%`
1. [这个大国重器够重](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%AA%E5%A4%A7%E5%9B%BD%E9%87%8D%E5%99%A8%E5%A4%9F%E9%87%8D%23) `64.4K 🔥` `-89%`

Updated at 2026-04-12 18:48:01

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
