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

1. [高寒司宫令改名高鹤元 (Gao Hansi changed his name to Gao Heyuan)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%AF%92%E5%8F%B8%E5%AE%AB%E4%BB%A4%E6%94%B9%E5%90%8D%E9%AB%98%E9%B9%A4%E5%85%83%23) `28.2K 🔥` `NEW`
1. [贺峻霖 今天我盯片](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%20%E4%BB%8A%E5%A4%A9%E6%88%91%E7%9B%AF%E7%89%87%23) `26.1K 🔥` `NEW`
1. [侯明昊官宣南京站](https://s.weibo.com/weibo?q=%23%E4%BE%AF%E6%98%8E%E6%98%8A%E5%AE%98%E5%AE%A3%E5%8D%97%E4%BA%AC%E7%AB%99%23) `22.5K 🔥` `NEW`
1. [德甲乒乓球联赛](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E7%94%B2%E4%B9%92%E4%B9%93%E7%90%83%E8%81%94%E8%B5%9B%23) `20.5K 🔥` `NEW`
1. [租客装修后退房房东让恢复成毛坯](https://s.weibo.com/weibo?q=%23%E7%A7%9F%E5%AE%A2%E8%A3%85%E4%BF%AE%E5%90%8E%E9%80%80%E6%88%BF%E6%88%BF%E4%B8%9C%E8%AE%A9%E6%81%A2%E5%A4%8D%E6%88%90%E6%AF%9B%E5%9D%AF%23) `495.1K 🔥` `+727%`
1. [中方反对美方单边的301调查 (China opposes the US’s unilateral Section 301 investigation)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%8F%8D%E5%AF%B9%E7%BE%8E%E6%96%B9%E5%8D%95%E8%BE%B9%E7%9A%84301%E8%B0%83%E6%9F%A5%23) `363.5K 🔥` `+1026%`
1. [奋进十五五你会看到这样的中国 (You will see China like this during the 15th Five-Year Plan)](https://s.weibo.com/weibo?q=%23%E5%A5%8B%E8%BF%9B%E5%8D%81%E4%BA%94%E4%BA%94%E4%BD%A0%E4%BC%9A%E7%9C%8B%E5%88%B0%E8%BF%99%E6%A0%B7%E7%9A%84%E4%B8%AD%E5%9B%BD%23) `278.6K 🔥` `+68%`
1. [中美就一些议题取得初步共识 (China and the United States have reached preliminary consensus on some issues)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E5%B0%B1%E4%B8%80%E4%BA%9B%E8%AE%AE%E9%A2%98%E5%8F%96%E5%BE%97%E5%88%9D%E6%AD%A5%E5%85%B1%E8%AF%86%23) `26.1K 🔥` `+55%`
1. [BLG中上](https://s.weibo.com/weibo?q=%23BLG%E4%B8%AD%E4%B8%8A%23) `26.1K 🔥` `+43%`
1. [KPL老乡杯](https://s.weibo.com/weibo?q=%23KPL%E8%80%81%E4%B9%A1%E6%9D%AF%23) `25.1K 🔥` `+55%`
1. [本周做什么都顺的星座](https://s.weibo.com/weibo?q=%23%E6%9C%AC%E5%91%A8%E5%81%9A%E4%BB%80%E4%B9%88%E9%83%BD%E9%A1%BA%E7%9A%84%E6%98%9F%E5%BA%A7%23) `24.6K 🔥` `+32%`
1. [Bin 外战看BLG (Bin Watch BLG during foreign wars)](https://s.weibo.com/weibo?q=%23Bin%20%E5%A4%96%E6%88%98%E7%9C%8BBLG%23) `24.5K 🔥` `+31%`
1. [伊朗称逮捕500名间谍](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E9%80%AE%E6%8D%95500%E5%90%8D%E9%97%B4%E8%B0%8D%23) `23.9K 🔥` `+37%`
1. [极氪8X](https://s.weibo.com/weibo?q=%23%E6%9E%81%E6%B0%AA8X%23) `23.4K 🔥` `+45%`
1. [伊朗成功执行第55轮打击 (Iran successfully executes 55th round of strikes)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%88%90%E5%8A%9F%E6%89%A7%E8%A1%8C%E7%AC%AC55%E8%BD%AE%E6%89%93%E5%87%BB%23) `23.3K 🔥` `+40%`
1. [宋威龙私底下烟酒都不来 (Song Weilong doesn’t smoke or drink in private)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%E7%A7%81%E5%BA%95%E4%B8%8B%E7%83%9F%E9%85%92%E9%83%BD%E4%B8%8D%E6%9D%A5%23) `22.5K 🔥` `+39%`
1. [樊振东回应转会 (Fan Zhendong responded to the transfer)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%9B%9E%E5%BA%94%E8%BD%AC%E4%BC%9A%23) `22.5K 🔥` `+39%`
1. [外交部回应中国特使赴阿巴穿梭斡旋 (The Ministry of Foreign Affairs responded to the Chinese special envoy’s trip to Afghanistan and Pakistan to mediate)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E4%BA%A4%E9%83%A8%E5%9B%9E%E5%BA%94%E4%B8%AD%E5%9B%BD%E7%89%B9%E4%BD%BF%E8%B5%B4%E9%98%BF%E5%B7%B4%E7%A9%BF%E6%A2%AD%E6%96%A1%E6%97%8B%23) `22.4K 🔥` `+28%`
1. [丁禹兮空降 (Ding Yuxi airborne)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E7%A9%BA%E9%99%8D%23) `22.4K 🔥` `+38%`
1. [宇宙闪烁请注意 (Please note that the universe is twinkling)](https://s.weibo.com/weibo?q=%23%E5%AE%87%E5%AE%99%E9%97%AA%E7%83%81%E8%AF%B7%E6%B3%A8%E6%84%8F%23) `21.8K 🔥` `+35%`
1. [坠江研究生疑留遗言曾遭导师训斥 (Graduate student who fell into the river was reprimanded by his tutor for allegedly leaving last words)](https://s.weibo.com/weibo?q=%23%E5%9D%A0%E6%B1%9F%E7%A0%94%E7%A9%B6%E7%94%9F%E7%96%91%E7%95%99%E9%81%97%E8%A8%80%E6%9B%BE%E9%81%AD%E5%AF%BC%E5%B8%88%E8%AE%AD%E6%96%A5%23) `20.6K 🔥` `+27%`
1. [丁禹兮司宫令权谋人设 (Ding Yuxi's command of the palace and his personal design)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E5%8F%B8%E5%AE%AB%E4%BB%A4%E6%9D%83%E8%B0%8B%E4%BA%BA%E8%AE%BE%23) `20.5K 🔥` `+26%`
1. [AirPodsMax2发布](https://s.weibo.com/weibo?q=%23AirPodsMax2%E5%8F%91%E5%B8%83%23) `20.5K 🔥` `+26%`
1. [邓凯演技](https://s.weibo.com/weibo?q=%23%E9%82%93%E5%87%AF%E6%BC%94%E6%8A%80%23) `20.5K 🔥` `+26%`
1. [不挑食 感观度低 (Not picky about food, low sensory perception)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E6%8C%91%E9%A3%9F%20%E6%84%9F%E8%A7%82%E5%BA%A6%E4%BD%8E%23) `20.5K 🔥` `+25%`
1. [英雄联盟全球先锋赛 (League of Legends Global Pioneer Tournament)](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9F%E5%85%A8%E7%90%83%E5%85%88%E9%94%8B%E8%B5%9B%23) `20.5K 🔥` `+53%`
1. [樊振东说准备好迈出新的步伐](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%AF%B4%E5%87%86%E5%A4%87%E5%A5%BD%E8%BF%88%E5%87%BA%E6%96%B0%E7%9A%84%E6%AD%A5%E4%BC%90%23) `29.2K 🔥`
1. [BLG战胜BFX (BLG defeated BFX)](https://s.weibo.com/weibo?q=%23BLG%E6%88%98%E8%83%9CBFX%23) `26.7K 🔥`
1. [伊朗发起第56波打击 (Iran launches 56th wave of strikes)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E8%B5%B7%E7%AC%AC56%E6%B3%A2%E6%89%93%E5%87%BB%23) `26.1K 🔥`
1. [赵丽颖 电影 (Zhao Liying movies)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%20%E7%94%B5%E5%BD%B1%23) `24.1K 🔥`
1. [42岁女子从不抽烟确诊肺癌晚期](https://s.weibo.com/weibo?q=%2342%E5%B2%81%E5%A5%B3%E5%AD%90%E4%BB%8E%E4%B8%8D%E6%8A%BD%E7%83%9F%E7%A1%AE%E8%AF%8A%E8%82%BA%E7%99%8C%E6%99%9A%E6%9C%9F%23) `23.8K 🔥`
1. [中国援助伊朗人道主义物资完成交接 (China completes handover of humanitarian aid to Iran)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%8F%B4%E5%8A%A9%E4%BC%8A%E6%9C%97%E4%BA%BA%E9%81%93%E4%B8%BB%E4%B9%89%E7%89%A9%E8%B5%84%E5%AE%8C%E6%88%90%E4%BA%A4%E6%8E%A5%23) `22.5K 🔥`
1. [周五晚高疯 (Friday night high)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%BA%94%E6%99%9A%E9%AB%98%E7%96%AF%23) `21.1K 🔥`
1. [截瘫女子植入脑机1年后能刷手机了 (Paraplegic woman can swipe her phone one year after implanting brain machine)](https://s.weibo.com/weibo?q=%23%E6%88%AA%E7%98%AB%E5%A5%B3%E5%AD%90%E6%A4%8D%E5%85%A5%E8%84%91%E6%9C%BA1%E5%B9%B4%E5%90%8E%E8%83%BD%E5%88%B7%E6%89%8B%E6%9C%BA%E4%BA%86%23) `20.5K 🔥`
1. [瞿颖好大的雨啊 (Qu Ying It’s raining heavily)](https://s.weibo.com/weibo?q=%23%E7%9E%BF%E9%A2%96%E5%A5%BD%E5%A4%A7%E7%9A%84%E9%9B%A8%E5%95%8A%23) `20.5K 🔥`
1. [18岁女孩腹中肿块里还有24颗牙齿](https://s.weibo.com/weibo?q=%2318%E5%B2%81%E5%A5%B3%E5%AD%A9%E8%85%B9%E4%B8%AD%E8%82%BF%E5%9D%97%E9%87%8C%E8%BF%98%E6%9C%8924%E9%A2%97%E7%89%99%E9%BD%BF%23) `20.5K 🔥`
1. [女子借5万还不上履约做对方女友](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%80%9F5%E4%B8%87%E8%BF%98%E4%B8%8D%E4%B8%8A%E5%B1%A5%E7%BA%A6%E5%81%9A%E5%AF%B9%E6%96%B9%E5%A5%B3%E5%8F%8B%23) `20.5K 🔥`
1. [爱吃薯片的人天塌了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%90%83%E8%96%AF%E7%89%87%E7%9A%84%E4%BA%BA%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `31.0K 🔥` `-28%`
1. [伊朗打击美军阿联酋基地弹药库](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%89%93%E5%87%BB%E7%BE%8E%E5%86%9B%E9%98%BF%E8%81%94%E9%85%8B%E5%9F%BA%E5%9C%B0%E5%BC%B9%E8%8D%AF%E5%BA%93%23) `28.9K 🔥` `-32%`
1. [胖东来169元1克拉方糖戒指再上架 (Pang Donglai’s 169 yuan 1 carat sugar cube ring is back on the shelves)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5169%E5%85%831%E5%85%8B%E6%8B%89%E6%96%B9%E7%B3%96%E6%88%92%E6%8C%87%E5%86%8D%E4%B8%8A%E6%9E%B6%23) `26.7K 🔥` `-87%`
1. [美宜佳被曝光后半小时无一人进店 (No one entered Meiyijia store for half an hour after it was exposed)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AE%9C%E4%BD%B3%E8%A2%AB%E6%9B%9D%E5%85%89%E5%90%8E%E5%8D%8A%E5%B0%8F%E6%97%B6%E6%97%A0%E4%B8%80%E4%BA%BA%E8%BF%9B%E5%BA%97%23) `26.1K 🔥` `-91%`
1. [入职未满1年怀孕请假被拒获赔10万 (She was compensated NT$100,000 when she was refused leave due to pregnancy less than 1 year after joining the company.)](https://s.weibo.com/weibo?q=%23%E5%85%A5%E8%81%8C%E6%9C%AA%E6%BB%A11%E5%B9%B4%E6%80%80%E5%AD%95%E8%AF%B7%E5%81%87%E8%A2%AB%E6%8B%92%E8%8E%B7%E8%B5%9410%E4%B8%87%23) `25.5K 🔥` `-22%`
1. [永辉公开喊话山姆](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E8%BE%89%E5%85%AC%E5%BC%80%E5%96%8A%E8%AF%9D%E5%B1%B1%E5%A7%86%23) `24.7K 🔥` `-36%`
1. [消耗战之下伊朗亮出反击新手段 (Under war of attrition, Iran reveals new means of counterattack)](https://s.weibo.com/weibo?q=%23%E6%B6%88%E8%80%97%E6%88%98%E4%B9%8B%E4%B8%8B%E4%BC%8A%E6%9C%97%E4%BA%AE%E5%87%BA%E5%8F%8D%E5%87%BB%E6%96%B0%E6%89%8B%E6%AE%B5%23) `23.7K 🔥` `-24%`
1. [因为瞿颖盒马的菠菜都标上英文了 (Because Quying Hema’s spinach is all labeled in English)](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E4%B8%BA%E7%9E%BF%E9%A2%96%E7%9B%92%E9%A9%AC%E7%9A%84%E8%8F%A0%E8%8F%9C%E9%83%BD%E6%A0%87%E4%B8%8A%E8%8B%B1%E6%96%87%E4%BA%86%23) `22.5K 🔥` `-29%`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `20.5K 🔥` `-30%`
1. [马斯克5万美金小屋简陋似仓库 (Musk’s $50,000 cabin looks like a warehouse)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B5%E4%B8%87%E7%BE%8E%E9%87%91%E5%B0%8F%E5%B1%8B%E7%AE%80%E9%99%8B%E4%BC%BC%E4%BB%93%E5%BA%93%23) `20.5K 🔥` `-35%`
1. [管泽元 (Guan Zeyuan)](https://s.weibo.com/weibo?q=%23%E7%AE%A1%E6%B3%BD%E5%85%83%23) `20.5K 🔥` `-22%`
1. [鹿哈毛肚事件获商家退款消费者发声](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E5%93%88%E6%AF%9B%E8%82%9A%E4%BA%8B%E4%BB%B6%E8%8E%B7%E5%95%86%E5%AE%B6%E9%80%80%E6%AC%BE%E6%B6%88%E8%B4%B9%E8%80%85%E5%8F%91%E5%A3%B0%23) `20.5K 🔥` `-30%`
1. [张凌赫 导演你管管她 (Director Zhang Linghe, please take care of her.)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%20%E5%AF%BC%E6%BC%94%E4%BD%A0%E7%AE%A1%E7%AE%A1%E5%A5%B9%23) `20.5K 🔥` `-34%`

Updated at 2026-03-17 06:49:33

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
