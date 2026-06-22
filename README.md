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

1. [西班牙 杀疯了 (Spain is crazy)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%99%20%E6%9D%80%E7%96%AF%E4%BA%86%23) `1.0M 🔥` `NEW`
1. [乌拉圭半场2比1佛得角](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E6%8B%89%E5%9C%AD%E5%8D%8A%E5%9C%BA2%E6%AF%941%E4%BD%9B%E5%BE%97%E8%A7%92%23) `539.8K 🔥` `NEW`
1. [黑鲨社区关闭访问](https://s.weibo.com/weibo?q=%23%E9%BB%91%E9%B2%A8%E7%A4%BE%E5%8C%BA%E5%85%B3%E9%97%AD%E8%AE%BF%E9%97%AE%23) `311.3K 🔥` `NEW`
1. [亚马尔回应世界杯首球](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%E5%9B%9E%E5%BA%94%E4%B8%96%E7%95%8C%E6%9D%AF%E9%A6%96%E7%90%83%23) `310.9K 🔥` `NEW`
1. [李现开球](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E5%BC%80%E7%90%83%23) `307.1K 🔥` `NEW`
1. [搞砸了赖伟明的暗恋](https://s.weibo.com/weibo?q=%23%E6%90%9E%E7%A0%B8%E4%BA%86%E8%B5%96%E4%BC%9F%E6%98%8E%E7%9A%84%E6%9A%97%E6%81%8B%23) `304.2K 🔥` `NEW`
1. [向太拉黑向佑后首次联系](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E6%8B%89%E9%BB%91%E5%90%91%E4%BD%91%E5%90%8E%E9%A6%96%E6%AC%A1%E8%81%94%E7%B3%BB%23) `302.4K 🔥` `NEW`
1. [纸尿裤事件真相不能被口水淹没](https://s.weibo.com/weibo?q=%23%E7%BA%B8%E5%B0%BF%E8%A3%A4%E4%BA%8B%E4%BB%B6%E7%9C%9F%E7%9B%B8%E4%B8%8D%E8%83%BD%E8%A2%AB%E5%8F%A3%E6%B0%B4%E6%B7%B9%E6%B2%A1%23) `299.3K 🔥` `NEW`
1. [李现开球没转播](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E5%BC%80%E7%90%83%E6%B2%A1%E8%BD%AC%E6%92%AD%23) `293.9K 🔥` `NEW`
1. [南枝的爸爸原来是我们的老熟人](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%9E%9D%E7%9A%84%E7%88%B8%E7%88%B8%E5%8E%9F%E6%9D%A5%E6%98%AF%E6%88%91%E4%BB%AC%E7%9A%84%E8%80%81%E7%86%9F%E4%BA%BA%23) `292.1K 🔥` `NEW`
1. [难怪有故人之姿原来是故人之子 (No wonder the appearance of an old friend turns out to be the son of an old friend)](https://s.weibo.com/weibo?q=%23%E9%9A%BE%E6%80%AA%E6%9C%89%E6%95%85%E4%BA%BA%E4%B9%8B%E5%A7%BF%E5%8E%9F%E6%9D%A5%E6%98%AF%E6%95%85%E4%BA%BA%E4%B9%8B%E5%AD%90%23) `290.6K 🔥` `NEW`
1. [张婉婷回应给老员工降薪2000元](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%89%E5%A9%B7%E5%9B%9E%E5%BA%94%E7%BB%99%E8%80%81%E5%91%98%E5%B7%A5%E9%99%8D%E8%96%AA2000%E5%85%83%23) `289.5K 🔥` `NEW`
1. [路人对着关晓彤喊鹿晗](https://s.weibo.com/weibo?q=%23%E8%B7%AF%E4%BA%BA%E5%AF%B9%E7%9D%80%E5%85%B3%E6%99%93%E5%BD%A4%E5%96%8A%E9%B9%BF%E6%99%97%23) `281.9K 🔥` `NEW`
1. [孙杨全国游泳冠军赛收获2枚金牌](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%85%A8%E5%9B%BD%E6%B8%B8%E6%B3%B3%E5%86%A0%E5%86%9B%E8%B5%9B%E6%94%B6%E8%8E%B72%E6%9E%9A%E9%87%91%E7%89%8C%23) `280.7K 🔥` `NEW`
1. [一些含金量很高且后劲十足的书](https://s.weibo.com/weibo?q=%23%E4%B8%80%E4%BA%9B%E5%90%AB%E9%87%91%E9%87%8F%E5%BE%88%E9%AB%98%E4%B8%94%E5%90%8E%E5%8A%B2%E5%8D%81%E8%B6%B3%E7%9A%84%E4%B9%A6%23) `278.7K 🔥` `NEW`
1. [向佑与向太向华强已彻底断联](https://s.weibo.com/weibo?q=%23%E5%90%91%E4%BD%91%E4%B8%8E%E5%90%91%E5%A4%AA%E5%90%91%E5%8D%8E%E5%BC%BA%E5%B7%B2%E5%BD%BB%E5%BA%95%E6%96%AD%E8%81%94%23) `277.8K 🔥` `NEW`
1. [Niko赢得major冠军了](https://s.weibo.com/weibo?q=%23Niko%E8%B5%A2%E5%BE%97major%E5%86%A0%E5%86%9B%E4%BA%86%23) `274.7K 🔥` `NEW`
1. [佛得角门神母亲欢呼进球](https://s.weibo.com/weibo?q=%23%E4%BD%9B%E5%BE%97%E8%A7%92%E9%97%A8%E7%A5%9E%E6%AF%8D%E4%BA%B2%E6%AC%A2%E5%91%BC%E8%BF%9B%E7%90%83%23) `264.6K 🔥` `NEW`
1. [悬崖下发现29岁徒步失联小伙遗体](https://s.weibo.com/weibo?q=%23%E6%82%AC%E5%B4%96%E4%B8%8B%E5%8F%91%E7%8E%B029%E5%B2%81%E5%BE%92%E6%AD%A5%E5%A4%B1%E8%81%94%E5%B0%8F%E4%BC%99%E9%81%97%E4%BD%93%23) `254.9K 🔥` `NEW`
1. [世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E6%9D%AF%23) `250.9K 🔥` `NEW`
1. [乌拉圭vs佛得角 (Uruguay vs Cape Verde)](https://s.weibo.com/weibo?q=%23%E4%B9%8C%E6%8B%89%E5%9C%ADvs%E4%BD%9B%E5%BE%97%E8%A7%92%23) `2.4M 🔥` `+205%`
1. [龙舟经济火爆 (Dragon boat economy is booming)](https://s.weibo.com/weibo?q=%23%E9%BE%99%E8%88%9F%E7%BB%8F%E6%B5%8E%E7%81%AB%E7%88%86%23) `822.0K 🔥` `+88%`
1. [比利时0比0伊朗](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B60%E6%AF%940%E4%BC%8A%E6%9C%97%23) `635.3K 🔥` `+139%`
1. [学渣学霸写作业状态区别](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E6%B8%A3%E5%AD%A6%E9%9C%B8%E5%86%99%E4%BD%9C%E4%B8%9A%E7%8A%B6%E6%80%81%E5%8C%BA%E5%88%AB%23) `427.4K 🔥` `+227%`
1. [张靓颖清唱太多被罚款](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9D%93%E9%A2%96%E6%B8%85%E5%94%B1%E5%A4%AA%E5%A4%9A%E8%A2%AB%E7%BD%9A%E6%AC%BE%23) `313.9K 🔥` `+98%`
1. [白鹿在睡丞磊在拍](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%9C%A8%E7%9D%A1%E4%B8%9E%E7%A3%8A%E5%9C%A8%E6%8B%8D%23) `312.9K 🔥` `+335%`
1. [niko](https://s.weibo.com/weibo?q=%23niko%23) `308.0K 🔥` `+101%`
1. [雷军说当初不该和董明珠打赌 (Lei Jun said he should not have bet with Dong Mingzhu in the first place)](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E8%AF%B4%E5%BD%93%E5%88%9D%E4%B8%8D%E8%AF%A5%E5%92%8C%E8%91%A3%E6%98%8E%E7%8F%A0%E6%89%93%E8%B5%8C%23) `305.5K 🔥` `+64%`
1. [渐冻症女子安装监控拍下男护工猥亵](https://s.weibo.com/weibo?q=%23%E6%B8%90%E5%86%BB%E7%97%87%E5%A5%B3%E5%AD%90%E5%AE%89%E8%A3%85%E7%9B%91%E6%8E%A7%E6%8B%8D%E4%B8%8B%E7%94%B7%E6%8A%A4%E5%B7%A5%E7%8C%A5%E4%BA%B5%23) `301.6K 🔥` `+56%`
1. [美国伊朗在瑞士会谈 (US-Iran talks in Switzerland)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E4%BC%8A%E6%9C%97%E5%9C%A8%E7%91%9E%E5%A3%AB%E4%BC%9A%E8%B0%88%23) `297.0K 🔥` `+313%`
1. [米兰男装周](https://s.weibo.com/weibo?q=%23%E7%B1%B3%E5%85%B0%E7%94%B7%E8%A3%85%E5%91%A8%23) `295.3K 🔥` `+311%`
1. [家里4个地方是霉菌重灾区](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E9%87%8C4%E4%B8%AA%E5%9C%B0%E6%96%B9%E6%98%AF%E9%9C%89%E8%8F%8C%E9%87%8D%E7%81%BE%E5%8C%BA%23) `288.2K 🔥` `+301%`
1. [西班牙4比0沙特 (Spain 4-0 Saudi Arabia)](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E7%8F%AD%E7%89%994%E6%AF%940%E6%B2%99%E7%89%B9%23) `286.8K 🔥` `+62%`
1. [庄法好真诚的文字 (Zhuang Fa’s sincere words)](https://s.weibo.com/weibo?q=%23%E5%BA%84%E6%B3%95%E5%A5%BD%E7%9C%9F%E8%AF%9A%E7%9A%84%E6%96%87%E5%AD%97%23) `285.3K 🔥` `+297%`
1. [曝白玉兰场刊是各家团队自己撰写的](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BD%E7%8E%89%E5%85%B0%E5%9C%BA%E5%88%8A%E6%98%AF%E5%90%84%E5%AE%B6%E5%9B%A2%E9%98%9F%E8%87%AA%E5%B7%B1%E6%92%B0%E5%86%99%E7%9A%84%23) `283.1K 🔥` `+294%`
1. [年仅20岁外卖员跳河救人牺牲 (A 20-year-old deliveryman died after jumping into a river to save others)](https://s.weibo.com/weibo?q=%23%E5%B9%B4%E4%BB%8520%E5%B2%81%E5%A4%96%E5%8D%96%E5%91%98%E8%B7%B3%E6%B2%B3%E6%95%91%E4%BA%BA%E7%89%BA%E7%89%B2%23) `275.9K 🔥` `+140%`
1. [外地人对羊皮筏子的信任程度](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9C%B0%E4%BA%BA%E5%AF%B9%E7%BE%8A%E7%9A%AE%E7%AD%8F%E5%AD%90%E7%9A%84%E4%BF%A1%E4%BB%BB%E7%A8%8B%E5%BA%A6%23) `273.1K 🔥` `+280%`
1. [亚马尔 (Yamal)](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E9%A9%AC%E5%B0%94%23) `272.2K 🔥` `+34%`
1. [伊朗球员上场前体能已透支](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%90%83%E5%91%98%E4%B8%8A%E5%9C%BA%E5%89%8D%E4%BD%93%E8%83%BD%E5%B7%B2%E9%80%8F%E6%94%AF%23) `270.7K 🔥` `+231%`
1. [老爷爷卖饺子叉的视频火了](https://s.weibo.com/weibo?q=%23%E8%80%81%E7%88%B7%E7%88%B7%E5%8D%96%E9%A5%BA%E5%AD%90%E5%8F%89%E7%9A%84%E8%A7%86%E9%A2%91%E7%81%AB%E4%BA%86%23) `267.3K 🔥` `+272%`
1. [爸爸不收红包是全国统一的吗](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E4%B8%8D%E6%94%B6%E7%BA%A2%E5%8C%85%E6%98%AF%E5%85%A8%E5%9B%BD%E7%BB%9F%E4%B8%80%E7%9A%84%E5%90%97%23) `266.0K 🔥` `+146%`
1. [67岁生女父亲否认拖累其他子女](https://s.weibo.com/weibo?q=%2367%E5%B2%81%E7%94%9F%E5%A5%B3%E7%88%B6%E4%BA%B2%E5%90%A6%E8%AE%A4%E6%8B%96%E7%B4%AF%E5%85%B6%E4%BB%96%E5%AD%90%E5%A5%B3%23) `261.2K 🔥` `+264%`
1. [电脑也一天一个价了 (Computers are becoming more expensive every day.)](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%84%91%E4%B9%9F%E4%B8%80%E5%A4%A9%E4%B8%80%E4%B8%AA%E4%BB%B7%E4%BA%86%23) `259.7K 🔥` `+707%`
1. [新娘回应伴娘集体开错门 (The bride responded to the bridesmaids collectively opening the wrong door)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%A8%98%E5%9B%9E%E5%BA%94%E4%BC%B4%E5%A8%98%E9%9B%86%E4%BD%93%E5%BC%80%E9%94%99%E9%97%A8%23) `258.7K 🔥` `+260%`
1. [南部档案2](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E6%A1%A3%E6%A1%882%23) `257.0K 🔥` `+258%`
1. [等风热吻你网传全换新人](https://s.weibo.com/weibo?q=%23%E7%AD%89%E9%A3%8E%E7%83%AD%E5%90%BB%E4%BD%A0%E7%BD%91%E4%BC%A0%E5%85%A8%E6%8D%A2%E6%96%B0%E4%BA%BA%23) `253.8K 🔥` `+253%`
1. [Falcons夺得科隆Major冠军 (Falcons win Cologne Major)](https://s.weibo.com/weibo?q=%23Falcons%E5%A4%BA%E5%BE%97%E7%A7%91%E9%9A%86Major%E5%86%A0%E5%86%9B%23) `252.9K 🔥` `+178%`
1. [比利时vs伊朗](https://s.weibo.com/weibo?q=%23%E6%AF%94%E5%88%A9%E6%97%B6vs%E4%BC%8A%E6%9C%97%23) `269.2K 🔥` `-36%`
1. [月经弄脏火车床单女子再发声](https://s.weibo.com/weibo?q=%23%E6%9C%88%E7%BB%8F%E5%BC%84%E8%84%8F%E7%81%AB%E8%BD%A6%E5%BA%8A%E5%8D%95%E5%A5%B3%E5%AD%90%E5%86%8D%E5%8F%91%E5%A3%B0%23) `262.9K 🔥` `-45%`

Updated at 2026-06-22 08:10:08

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
