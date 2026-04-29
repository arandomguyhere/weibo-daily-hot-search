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

1. [拍照显瘦20斤姿势 (Photo pose to lose 20 pounds)](https://s.weibo.com/weibo?q=%23%E6%8B%8D%E7%85%A7%E6%98%BE%E7%98%A620%E6%96%A4%E5%A7%BF%E5%8A%BF%23) `561.2K 🔥` `NEW`
1. [刘耀文宋亚轩 小宇](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E5%AE%8B%E4%BA%9A%E8%BD%A9%20%E5%B0%8F%E5%AE%87%23) `532.0K 🔥` `NEW`
1. [10.98万起吉利银河M7远航家上市](https://s.weibo.com/weibo?q=%2310.98%E4%B8%87%E8%B5%B7%E5%90%89%E5%88%A9%E9%93%B6%E6%B2%B3M7%E8%BF%9C%E8%88%AA%E5%AE%B6%E4%B8%8A%E5%B8%82%23) `490.7K 🔥` `NEW`
1. [小米玄戒O3曝光](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E7%8E%84%E6%88%92O3%E6%9B%9D%E5%85%89%23) `319.9K 🔥` `NEW`
1. [婆婆一次性给足三年20万保姆费](https://s.weibo.com/weibo?q=%23%E5%A9%86%E5%A9%86%E4%B8%80%E6%AC%A1%E6%80%A7%E7%BB%99%E8%B6%B3%E4%B8%89%E5%B9%B420%E4%B8%87%E4%BF%9D%E5%A7%86%E8%B4%B9%23) `319.7K 🔥` `NEW`
1. [杜华给金子涵所属女团开会发言](https://s.weibo.com/weibo?q=%23%E6%9D%9C%E5%8D%8E%E7%BB%99%E9%87%91%E5%AD%90%E6%B6%B5%E6%89%80%E5%B1%9E%E5%A5%B3%E5%9B%A2%E5%BC%80%E4%BC%9A%E5%8F%91%E8%A8%80%23) `319.4K 🔥` `NEW`
1. [这对儿带货CP要火](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%AF%B9%E5%84%BF%E5%B8%A6%E8%B4%A7CP%E8%A6%81%E7%81%AB%23) `294.0K 🔥` `NEW`
1. [唐嫣新剧 假发](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E6%96%B0%E5%89%A7%20%E5%81%87%E5%8F%91%23) `223.2K 🔥` `NEW`
1. [白鹿举着滚动字幕说明私人行程](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E4%B8%BE%E7%9D%80%E6%BB%9A%E5%8A%A8%E5%AD%97%E5%B9%95%E8%AF%B4%E6%98%8E%E7%A7%81%E4%BA%BA%E8%A1%8C%E7%A8%8B%23) `209.5K 🔥` `NEW`
1. [烂片可退钱影院试行2个月无人退票](https://s.weibo.com/weibo?q=%23%E7%83%82%E7%89%87%E5%8F%AF%E9%80%80%E9%92%B1%E5%BD%B1%E9%99%A2%E8%AF%95%E8%A1%8C2%E4%B8%AA%E6%9C%88%E6%97%A0%E4%BA%BA%E9%80%80%E7%A5%A8%23) `200.7K 🔥` `NEW`
1. [多读书真的会影响你的三观 (Reading more will really affect your outlook on life)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E8%AF%BB%E4%B9%A6%E7%9C%9F%E7%9A%84%E4%BC%9A%E5%BD%B1%E5%93%8D%E4%BD%A0%E7%9A%84%E4%B8%89%E8%A7%82%23) `179.3K 🔥` `NEW`
1. [张月直播](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E7%9B%B4%E6%92%AD%23) `166.1K 🔥` `NEW`
1. [公婆拎3年20万保姆费产房慰问儿媳](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%A9%86%E6%8B%8E3%E5%B9%B420%E4%B8%87%E4%BF%9D%E5%A7%86%E8%B4%B9%E4%BA%A7%E6%88%BF%E6%85%B0%E9%97%AE%E5%84%BF%E5%AA%B3%23) `163.0K 🔥` `NEW`
1. [唐嫣扛剧能力](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E6%89%9B%E5%89%A7%E8%83%BD%E5%8A%9B%23) `154.0K 🔥` `NEW`
1. [男子拆鸟窝遭喜鹊叼垃圾封窗报复](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8B%86%E9%B8%9F%E7%AA%9D%E9%81%AD%E5%96%9C%E9%B9%8A%E5%8F%BC%E5%9E%83%E5%9C%BE%E5%B0%81%E7%AA%97%E6%8A%A5%E5%A4%8D%23) `149.7K 🔥` `NEW`
1. [王楚钦说伤病得到了好转](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E8%AF%B4%E4%BC%A4%E7%97%85%E5%BE%97%E5%88%B0%E4%BA%86%E5%A5%BD%E8%BD%AC%23) `125.4K 🔥` `NEW`
1. [A股锂矿满屏涨停](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E9%94%82%E7%9F%BF%E6%BB%A1%E5%B1%8F%E6%B6%A8%E5%81%9C%23) `120.8K 🔥` `NEW`
1. [女子购止血药被骑手偷拍还公布住址](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%B4%AD%E6%AD%A2%E8%A1%80%E8%8D%AF%E8%A2%AB%E9%AA%91%E6%89%8B%E5%81%B7%E6%8B%8D%E8%BF%98%E5%85%AC%E5%B8%83%E4%BD%8F%E5%9D%80%23) `1.2M 🔥` `+379%`
1. [理响中国](https://s.weibo.com/weibo?q=%23%E7%90%86%E5%93%8D%E4%B8%AD%E5%9B%BD%23) `822.4K 🔥` `+30%`
1. [谢娜称演唱会票价覆盖不了成本 (Xie Na said the concert ticket price could not cover the cost)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E7%A7%B0%E6%BC%94%E5%94%B1%E4%BC%9A%E7%A5%A8%E4%BB%B7%E8%A6%86%E7%9B%96%E4%B8%8D%E4%BA%86%E6%88%90%E6%9C%AC%23) `402.7K 🔥` `+27%`
1. [普通人化妆最有效的一步](https://s.weibo.com/weibo?q=%23%E6%99%AE%E9%80%9A%E4%BA%BA%E5%8C%96%E5%A6%86%E6%9C%80%E6%9C%89%E6%95%88%E7%9A%84%E4%B8%80%E6%AD%A5%23) `320.1K 🔥` `+88%`
1. [马斯克天价薪酬方案曝光了 (Musk’s sky-high salary package exposed)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%A4%A9%E4%BB%B7%E8%96%AA%E9%85%AC%E6%96%B9%E6%A1%88%E6%9B%9D%E5%85%89%E4%BA%86%23) `308.4K 🔥` `+114%`
1. [霸王茶姬异物系购买人投放 (Buyer of Overlord Tea Princess Foreign Object Department puts it)](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E5%BC%82%E7%89%A9%E7%B3%BB%E8%B4%AD%E4%B9%B0%E4%BA%BA%E6%8A%95%E6%94%BE%23) `846.6K 🔥`
1. [飞猪五一免单送送送送送送送 (Fliggy’s May 1st free order, get it, get it, get it, get it)](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E7%8C%AA%E4%BA%94%E4%B8%80%E5%85%8D%E5%8D%95%E9%80%81%E9%80%81%E9%80%81%E9%80%81%E9%80%81%E9%80%81%E9%80%81%23) `819.0K 🔥`
1. [中国羽毛球协会主席张军被查 (Zhang Jun, chairman of the Chinese Badminton Association, was investigated)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%BE%BD%E6%AF%9B%E7%90%83%E5%8D%8F%E4%BC%9A%E4%B8%BB%E5%B8%AD%E5%BC%A0%E5%86%9B%E8%A2%AB%E6%9F%A5%23) `320.1K 🔥`
1. [林子烨 下巴后缩](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%90%E7%83%A8%20%E4%B8%8B%E5%B7%B4%E5%90%8E%E7%BC%A9%23) `319.7K 🔥`
1. [瑶一瑶被要求配合拍摄回怼妈妈](https://s.weibo.com/weibo?q=%23%E7%91%B6%E4%B8%80%E7%91%B6%E8%A2%AB%E8%A6%81%E6%B1%82%E9%85%8D%E5%90%88%E6%8B%8D%E6%91%84%E5%9B%9E%E6%80%BC%E5%A6%88%E5%A6%88%23) `319.2K 🔥`
1. [曝iPhoneFold定价14999元](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhoneFold%E5%AE%9A%E4%BB%B714999%E5%85%83%23) `319.2K 🔥`
1. [孙杨夫妇录妻旅原因曝光 (Reasons why Sun Yang and his wife recorded traveling abroad were exposed)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%A4%AB%E5%A6%87%E5%BD%95%E5%A6%BB%E6%97%85%E5%8E%9F%E5%9B%A0%E6%9B%9D%E5%85%89%23) `312.9K 🔥`
1. [终于知道林志玲为什么能红这么久](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E6%9E%97%E5%BF%97%E7%8E%B2%E4%B8%BA%E4%BB%80%E4%B9%88%E8%83%BD%E7%BA%A2%E8%BF%99%E4%B9%88%E4%B9%85%23) `282.6K 🔥`
1. [汤唯确认怀二胎](https://s.weibo.com/weibo?q=%23%E6%B1%A4%E5%94%AF%E7%A1%AE%E8%AE%A4%E6%80%80%E4%BA%8C%E8%83%8E%23) `268.1K 🔥`
1. [女子洁癖严重结婚19年无法同房](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%B4%81%E7%99%96%E4%B8%A5%E9%87%8D%E7%BB%93%E5%A9%9A19%E5%B9%B4%E6%97%A0%E6%B3%95%E5%90%8C%E6%88%BF%23) `261.8K 🔥`
1. [陈律求痞幼复合](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%BE%8B%E6%B1%82%E7%97%9E%E5%B9%BC%E5%A4%8D%E5%90%88%23) `245.8K 🔥`
1. [金钟大的女儿都这么大了](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%92%9F%E5%A4%A7%E7%9A%84%E5%A5%B3%E5%84%BF%E9%83%BD%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `236.3K 🔥`
1. [赖冠霖给wannaone拍了新物料](https://s.weibo.com/weibo?q=%23%E8%B5%96%E5%86%A0%E9%9C%96%E7%BB%99wannaone%E6%8B%8D%E4%BA%86%E6%96%B0%E7%89%A9%E6%96%99%23) `191.9K 🔥`
1. [唐嫣工作室 宣发 (Tang Yan Studio Xuanfa)](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E5%AE%A3%E5%8F%91%23) `146.6K 🔥`
1. [转走储户1800万银行员工喝药轻生](https://s.weibo.com/weibo?q=%23%E8%BD%AC%E8%B5%B0%E5%82%A8%E6%88%B71800%E4%B8%87%E9%93%B6%E8%A1%8C%E5%91%98%E5%B7%A5%E5%96%9D%E8%8D%AF%E8%BD%BB%E7%94%9F%23) `319.6K 🔥` `-38%`
1. [孙杨妈妈早期言论](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%A6%88%E5%A6%88%E6%97%A9%E6%9C%9F%E8%A8%80%E8%AE%BA%23) `231.0K 🔥` `-26%`
1. [黄金重要信号](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E9%87%8D%E8%A6%81%E4%BF%A1%E5%8F%B7%23) `221.2K 🔥` `-29%`
1. [前男友曝黄一鸣涉毒](https://s.weibo.com/weibo?q=%23%E5%89%8D%E7%94%B7%E5%8F%8B%E6%9B%9D%E9%BB%84%E4%B8%80%E9%B8%A3%E6%B6%89%E6%AF%92%23) `218.4K 🔥` `-31%`
1. [男子看错一个字转错100万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%9C%8B%E9%94%99%E4%B8%80%E4%B8%AA%E5%AD%97%E8%BD%AC%E9%94%99100%E4%B8%87%23) `216.1K 🔥` `-33%`
1. [我国新发现13个亿吨级油田](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%96%B0%E5%8F%91%E7%8E%B013%E4%B8%AA%E4%BA%BF%E5%90%A8%E7%BA%A7%E6%B2%B9%E7%94%B0%23) `213.0K 🔥` `-31%`
1. [刘宇宁说年轻演员里没几个能扛招商的 (Liu Yuning said that few young actors are capable of attracting investment)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E8%AF%B4%E5%B9%B4%E8%BD%BB%E6%BC%94%E5%91%98%E9%87%8C%E6%B2%A1%E5%87%A0%E4%B8%AA%E8%83%BD%E6%89%9B%E6%8B%9B%E5%95%86%E7%9A%84%23) `209.5K 🔥` `-32%`
1. [前车女司机被按喇叭原地掉头](https://s.weibo.com/weibo?q=%23%E5%89%8D%E8%BD%A6%E5%A5%B3%E5%8F%B8%E6%9C%BA%E8%A2%AB%E6%8C%89%E5%96%87%E5%8F%AD%E5%8E%9F%E5%9C%B0%E6%8E%89%E5%A4%B4%23) `184.6K 🔥` `-42%`
1. [明星水晶手串](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%9F%E6%B0%B4%E6%99%B6%E6%89%8B%E4%B8%B2%23) `179.3K 🔥` `-42%`
1. [孙杨下沉市场口碑](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E4%B8%8B%E6%B2%89%E5%B8%82%E5%9C%BA%E5%8F%A3%E7%A2%91%23) `177.2K 🔥` `-43%`
1. [110斤女孩两个月瘦成纸片人 (A 110-pound girl lost weight and turned into a paper doll in two months)](https://s.weibo.com/weibo?q=%23110%E6%96%A4%E5%A5%B3%E5%AD%A9%E4%B8%A4%E4%B8%AA%E6%9C%88%E7%98%A6%E6%88%90%E7%BA%B8%E7%89%87%E4%BA%BA%23) `174.8K 🔥` `-32%`
1. [化疗胖了40斤付辛博也能一眼认出我](https://s.weibo.com/weibo?q=%23%E5%8C%96%E7%96%97%E8%83%96%E4%BA%8640%E6%96%A4%E4%BB%98%E8%BE%9B%E5%8D%9A%E4%B9%9F%E8%83%BD%E4%B8%80%E7%9C%BC%E8%AE%A4%E5%87%BA%E6%88%91%23) `174.2K 🔥` `-21%`
1. [吴宣仪母亲被赶出公司](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%A3%E4%BB%AA%E6%AF%8D%E4%BA%B2%E8%A2%AB%E8%B5%B6%E5%87%BA%E5%85%AC%E5%8F%B8%23) `163.0K 🔥` `-48%`
1. [妻子的浪漫旅行节目组回应](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E7%9A%84%E6%B5%AA%E6%BC%AB%E6%97%85%E8%A1%8C%E8%8A%82%E7%9B%AE%E7%BB%84%E5%9B%9E%E5%BA%94%23) `119.7K 🔥` `-62%`

Updated at 2026-04-29 20:57:07

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
