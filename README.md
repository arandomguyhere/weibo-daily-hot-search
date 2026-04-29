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

1. [霸王茶姬异物系购买人投放 (Buyer of Overlord Tea Princess Foreign Object Department puts it)](https://s.weibo.com/weibo?q=%23%E9%9C%B8%E7%8E%8B%E8%8C%B6%E5%A7%AC%E5%BC%82%E7%89%A9%E7%B3%BB%E8%B4%AD%E4%B9%B0%E4%BA%BA%E6%8A%95%E6%94%BE%23) `775.7K 🔥` `NEW`
1. [理响中国](https://s.weibo.com/weibo?q=%23%E7%90%86%E5%93%8D%E4%B8%AD%E5%9B%BD%23) `631.1K 🔥` `NEW`
1. [128项全系标配埃安N60上市10.68万起](https://s.weibo.com/weibo?q=%23128%E9%A1%B9%E5%85%A8%E7%B3%BB%E6%A0%87%E9%85%8D%E5%9F%83%E5%AE%89N60%E4%B8%8A%E5%B8%8210.68%E4%B8%87%E8%B5%B7%23) `608.9K 🔥` `NEW`
1. [查尔斯国王给特朗普送了口钟](https://s.weibo.com/weibo?q=%23%E6%9F%A5%E5%B0%94%E6%96%AF%E5%9B%BD%E7%8E%8B%E7%BB%99%E7%89%B9%E6%9C%97%E6%99%AE%E9%80%81%E4%BA%86%E5%8F%A3%E9%92%9F%23) `371.5K 🔥` `NEW`
1. [一年没剪头发的结果](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%B9%B4%E6%B2%A1%E5%89%AA%E5%A4%B4%E5%8F%91%E7%9A%84%E7%BB%93%E6%9E%9C%23) `365.5K 🔥` `NEW`
1. [21.99万起极狐问道V9预售](https://s.weibo.com/weibo?q=%2321.99%E4%B8%87%E8%B5%B7%E6%9E%81%E7%8B%90%E9%97%AE%E9%81%93V9%E9%A2%84%E5%94%AE%23) `357.3K 🔥` `NEW`
1. [男子看错一个字转错100万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%9C%8B%E9%94%99%E4%B8%80%E4%B8%AA%E5%AD%97%E8%BD%AC%E9%94%99100%E4%B8%87%23) `321.7K 🔥` `NEW`
1. [妈妈接2孩子放学掉水中3人均身亡](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E6%8E%A52%E5%AD%A9%E5%AD%90%E6%94%BE%E5%AD%A6%E6%8E%89%E6%B0%B4%E4%B8%AD3%E4%BA%BA%E5%9D%87%E8%BA%AB%E4%BA%A1%23) `318.7K 🔥` `NEW`
1. [前男友曝黄一鸣涉毒](https://s.weibo.com/weibo?q=%23%E5%89%8D%E7%94%B7%E5%8F%8B%E6%9B%9D%E9%BB%84%E4%B8%80%E9%B8%A3%E6%B6%89%E6%AF%92%23) `317.7K 🔥` `NEW`
1. [前车女司机被按喇叭原地掉头](https://s.weibo.com/weibo?q=%23%E5%89%8D%E8%BD%A6%E5%A5%B3%E5%8F%B8%E6%9C%BA%E8%A2%AB%E6%8C%89%E5%96%87%E5%8F%AD%E5%8E%9F%E5%9C%B0%E6%8E%89%E5%A4%B4%23) `316.9K 🔥` `NEW`
1. [谢娜称演唱会票价覆盖不了成本 (Xie Na said the concert ticket price could not cover the cost)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E7%A7%B0%E6%BC%94%E5%94%B1%E4%BC%9A%E7%A5%A8%E4%BB%B7%E8%A6%86%E7%9B%96%E4%B8%8D%E4%BA%86%E6%88%90%E6%9C%AC%23) `316.1K 🔥` `NEW`
1. [女子洁癖严重结婚19年无法同房](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%B4%81%E7%99%96%E4%B8%A5%E9%87%8D%E7%BB%93%E5%A9%9A19%E5%B9%B4%E6%97%A0%E6%B3%95%E5%90%8C%E6%88%BF%23) `314.1K 🔥` `NEW`
1. [汤唯确认怀二胎](https://s.weibo.com/weibo?q=%23%E6%B1%A4%E5%94%AF%E7%A1%AE%E8%AE%A4%E6%80%80%E4%BA%8C%E8%83%8E%23) `312.5K 🔥` `NEW`
1. [使用给跪了表情包11年后被索赔1万](https://s.weibo.com/weibo?q=%23%E4%BD%BF%E7%94%A8%E7%BB%99%E8%B7%AA%E4%BA%86%E8%A1%A8%E6%83%85%E5%8C%8511%E5%B9%B4%E5%90%8E%E8%A2%AB%E7%B4%A2%E8%B5%941%E4%B8%87%23) `310.7K 🔥` `NEW`
1. [黄金重要信号](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E9%87%8D%E8%A6%81%E4%BF%A1%E5%8F%B7%23) `310.4K 🔥` `NEW`
1. [女子购止血药被骑手偷拍还公布住址](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%B4%AD%E6%AD%A2%E8%A1%80%E8%8D%AF%E8%A2%AB%E9%AA%91%E6%89%8B%E5%81%B7%E6%8B%8D%E8%BF%98%E5%85%AC%E5%B8%83%E4%BD%8F%E5%9D%80%23) `243.9K 🔥` `NEW`
1. [终于知道林志玲为什么能红这么久](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E6%9E%97%E5%BF%97%E7%8E%B2%E4%B8%BA%E4%BB%80%E4%B9%88%E8%83%BD%E7%BA%A2%E8%BF%99%E4%B9%88%E4%B9%85%23) `243.4K 🔥` `NEW`
1. [化疗胖了40斤付辛博也能一眼认出我](https://s.weibo.com/weibo?q=%23%E5%8C%96%E7%96%97%E8%83%96%E4%BA%8640%E6%96%A4%E4%BB%98%E8%BE%9B%E5%8D%9A%E4%B9%9F%E8%83%BD%E4%B8%80%E7%9C%BC%E8%AE%A4%E5%87%BA%E6%88%91%23) `221.4K 🔥` `NEW`
1. [差点没认出任敏](https://s.weibo.com/weibo?q=%23%E5%B7%AE%E7%82%B9%E6%B2%A1%E8%AE%A4%E5%87%BA%E4%BB%BB%E6%95%8F%23) `220.6K 🔥` `NEW`
1. [金钟大的女儿都这么大了](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%92%9F%E5%A4%A7%E7%9A%84%E5%A5%B3%E5%84%BF%E9%83%BD%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `220.5K 🔥` `NEW`
1. [大学生买16套表演服穿完集体退货 (College students bought 16 sets of performance clothes and returned them collectively after wearing them)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%AD%A6%E7%94%9F%E4%B9%B016%E5%A5%97%E8%A1%A8%E6%BC%94%E6%9C%8D%E7%A9%BF%E5%AE%8C%E9%9B%86%E4%BD%93%E9%80%80%E8%B4%A7%23) `220.1K 🔥` `NEW`
1. [赖冠霖给wannaone拍了新物料](https://s.weibo.com/weibo?q=%23%E8%B5%96%E5%86%A0%E9%9C%96%E7%BB%99wannaone%E6%8B%8D%E4%BA%86%E6%96%B0%E7%89%A9%E6%96%99%23) `219.8K 🔥` `NEW`
1. [陈律求痞幼复合](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%BE%8B%E6%B1%82%E7%97%9E%E5%B9%BC%E5%A4%8D%E5%90%88%23) `219.7K 🔥` `NEW`
1. [胡歌包场唐嫣爱情没有神话](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%AD%8C%E5%8C%85%E5%9C%BA%E5%94%90%E5%AB%A3%E7%88%B1%E6%83%85%E6%B2%A1%E6%9C%89%E7%A5%9E%E8%AF%9D%23) `166.3K 🔥` `NEW`
1. [唐嫣工作室 宣发](https://s.weibo.com/weibo?q=%23%E5%94%90%E5%AB%A3%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E5%AE%A3%E5%8F%91%23) `159.4K 🔥` `NEW`
1. [12306回应动车工作人员站台抽烟](https://s.weibo.com/weibo?q=%2312306%E5%9B%9E%E5%BA%94%E5%8A%A8%E8%BD%A6%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E7%AB%99%E5%8F%B0%E6%8A%BD%E7%83%9F%23) `148.2K 🔥` `NEW`
1. [男生有必要打HPV疫苗吗](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E6%9C%89%E5%BF%85%E8%A6%81%E6%89%93HPV%E7%96%AB%E8%8B%97%E5%90%97%23) `144.5K 🔥` `NEW`
1. [恋与深空PV](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BAPV%23) `144.3K 🔥` `NEW`
1. [曝iPhoneFold定价14999元](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhoneFold%E5%AE%9A%E4%BB%B714999%E5%85%83%23) `319.4K 🔥` `+84%`
1. [男子请假10天做了5台手术直呼后悔](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%AF%B7%E5%81%8710%E5%A4%A9%E5%81%9A%E4%BA%865%E5%8F%B0%E6%89%8B%E6%9C%AF%E7%9B%B4%E5%91%BC%E5%90%8E%E6%82%94%23) `311.2K 🔥` `+66%`
1. [朋友圈改版 (Moments revamped)](https://s.weibo.com/weibo?q=%23%E6%9C%8B%E5%8F%8B%E5%9C%88%E6%94%B9%E7%89%88%23) `1.1M 🔥`
1. [转走储户1800万银行员工喝药轻生](https://s.weibo.com/weibo?q=%23%E8%BD%AC%E8%B5%B0%E5%82%A8%E6%88%B71800%E4%B8%87%E9%93%B6%E8%A1%8C%E5%91%98%E5%B7%A5%E5%96%9D%E8%8D%AF%E8%BD%BB%E7%94%9F%23) `514.3K 🔥`
1. [孙杨妈妈早期言论](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%A6%88%E5%A6%88%E6%97%A9%E6%9C%9F%E8%A8%80%E8%AE%BA%23) `312.0K 🔥`
1. [明星水晶手串](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%9F%E6%B0%B4%E6%99%B6%E6%89%8B%E4%B8%B2%23) `311.3K 🔥`
1. [普通人化妆最有效的一步](https://s.weibo.com/weibo?q=%23%E6%99%AE%E9%80%9A%E4%BA%BA%E5%8C%96%E5%A6%86%E6%9C%80%E6%9C%89%E6%95%88%E7%9A%84%E4%B8%80%E6%AD%A5%23) `170.0K 🔥`
1. [时代少年团轮番叮嘱谢娜](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E8%BD%AE%E7%95%AA%E5%8F%AE%E5%98%B1%E8%B0%A2%E5%A8%9C%23) `144.4K 🔥`
1. [马斯克天价薪酬方案曝光了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%A4%A9%E4%BB%B7%E8%96%AA%E9%85%AC%E6%96%B9%E6%A1%88%E6%9B%9D%E5%85%89%E4%BA%86%23) `144.3K 🔥`
1. [被淘汰的水果 (eliminated fruit)](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E6%B7%98%E6%B1%B0%E7%9A%84%E6%B0%B4%E6%9E%9C%23) `356.9K 🔥` `-30%`
1. [中国羽毛球协会主席张军被查 (Zhang Jun, chairman of the Chinese Badminton Association, was investigated)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%BE%BD%E6%AF%9B%E7%90%83%E5%8D%8F%E4%BC%9A%E4%B8%BB%E5%B8%AD%E5%BC%A0%E5%86%9B%E8%A2%AB%E6%9F%A5%23) `322.6K 🔥` `-61%`
1. [原来真的有人能把字写成这样](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%9C%9F%E7%9A%84%E6%9C%89%E4%BA%BA%E8%83%BD%E6%8A%8A%E5%AD%97%E5%86%99%E6%88%90%E8%BF%99%E6%A0%B7%23) `322.0K 🔥` `-49%`
1. [林子烨 下巴后缩](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%AD%90%E7%83%A8%20%E4%B8%8B%E5%B7%B4%E5%90%8E%E7%BC%A9%23) `321.2K 🔥` `-33%`
1. [瑶一瑶被要求配合拍摄回怼妈妈](https://s.weibo.com/weibo?q=%23%E7%91%B6%E4%B8%80%E7%91%B6%E8%A2%AB%E8%A6%81%E6%B1%82%E9%85%8D%E5%90%88%E6%8B%8D%E6%91%84%E5%9B%9E%E6%80%BC%E5%A6%88%E5%A6%88%23) `320.3K 🔥` `-32%`
1. [孙杨夫妇录妻旅原因曝光 (Reasons why Sun Yang and his wife recorded traveling abroad were exposed)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%A4%AB%E5%A6%87%E5%BD%95%E5%A6%BB%E6%97%85%E5%8E%9F%E5%9B%A0%E6%9B%9D%E5%85%89%23) `317.3K 🔥` `-24%`
1. [吴宣仪母亲被赶出公司](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%A3%E4%BB%AA%E6%AF%8D%E4%BA%B2%E8%A2%AB%E8%B5%B6%E5%87%BA%E5%85%AC%E5%8F%B8%23) `314.8K 🔥` `-35%`
1. [妻子的浪漫旅行节目组回应](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E7%9A%84%E6%B5%AA%E6%BC%AB%E6%97%85%E8%A1%8C%E8%8A%82%E7%9B%AE%E7%BB%84%E5%9B%9E%E5%BA%94%23) `313.1K 🔥` `-38%`
1. [孙杨下沉市场口碑](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E4%B8%8B%E6%B2%89%E5%B8%82%E5%9C%BA%E5%8F%A3%E7%A2%91%23) `311.9K 🔥` `-34%`
1. [我国新发现13个亿吨级油田](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E6%96%B0%E5%8F%91%E7%8E%B013%E4%B8%AA%E4%BA%BF%E5%90%A8%E7%BA%A7%E6%B2%B9%E7%94%B0%23) `310.1K 🔥` `-51%`
1. [刘宇宁说年轻演员里没几个能扛招商的 (Liu Yuning said that few young actors are capable of attracting investment)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E8%AF%B4%E5%B9%B4%E8%BD%BB%E6%BC%94%E5%91%98%E9%87%8C%E6%B2%A1%E5%87%A0%E4%B8%AA%E8%83%BD%E6%89%9B%E6%8B%9B%E5%95%86%E7%9A%84%23) `309.7K 🔥` `-34%`
1. [GUCCI官宣宁艺卓](https://s.weibo.com/weibo?q=%23GUCCI%E5%AE%98%E5%AE%A3%E5%AE%81%E8%89%BA%E5%8D%93%23) `273.5K 🔥` `-35%`
1. [110斤女孩两个月瘦成纸片人](https://s.weibo.com/weibo?q=%23110%E6%96%A4%E5%A5%B3%E5%AD%A9%E4%B8%A4%E4%B8%AA%E6%9C%88%E7%98%A6%E6%88%90%E7%BA%B8%E7%89%87%E4%BA%BA%23) `255.5K 🔥` `-40%`
1. [乐华就吴宣仪事件发声明](https://s.weibo.com/weibo?q=%23%E4%B9%90%E5%8D%8E%E5%B0%B1%E5%90%B4%E5%AE%A3%E4%BB%AA%E4%BA%8B%E4%BB%B6%E5%8F%91%E5%A3%B0%E6%98%8E%23) `221.3K 🔥` `-37%`

Updated at 2026-04-29 19:15:27

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
