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

1. [大奉打更人 (Da Feng the watchman)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%A5%89%E6%89%93%E6%9B%B4%E4%BA%BA%23) `809.4K 🔥` `NEW`
1. [李晨郑恺跑男停宣了](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%A8%E9%83%91%E6%81%BA%E8%B7%91%E7%94%B7%E5%81%9C%E5%AE%A3%E4%BA%86%23) `639.5K 🔥` `NEW`
1. [赵今麦流浪地球3杀青](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E6%B5%81%E6%B5%AA%E5%9C%B0%E7%90%833%E6%9D%80%E9%9D%92%23) `585.7K 🔥` `NEW`
1. [女子谎称蜱虫咬死多人被行拘](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%B0%8E%E7%A7%B0%E8%9C%B1%E8%99%AB%E5%92%AC%E6%AD%BB%E5%A4%9A%E4%BA%BA%E8%A2%AB%E8%A1%8C%E6%8B%98%23) `571.5K 🔥` `NEW`
1. [FBI已赶到白宫](https://s.weibo.com/weibo?q=%23FBI%E5%B7%B2%E8%B5%B6%E5%88%B0%E7%99%BD%E5%AE%AB%23) `562.8K 🔥` `NEW`
1. [骑士vs尼克斯](https://s.weibo.com/weibo?q=%23%E9%AA%91%E5%A3%ABvs%E5%B0%BC%E5%85%8B%E6%96%AF%23) `505.7K 🔥` `NEW`
1. [湖南衡阳发生火灾5死1伤](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E8%A1%A1%E9%98%B3%E5%8F%91%E7%94%9F%E7%81%AB%E7%81%BE5%E6%AD%BB1%E4%BC%A4%23) `458.2K 🔥` `NEW`
1. [王鹤棣沈月 再见朋友](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%B2%88%E6%9C%88%20%E5%86%8D%E8%A7%81%E6%9C%8B%E5%8F%8B%23) `428.7K 🔥` `NEW`
1. [丈夫抱了一下妻子抗拒到呕吐](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E6%8A%B1%E4%BA%86%E4%B8%80%E4%B8%8B%E5%A6%BB%E5%AD%90%E6%8A%97%E6%8B%92%E5%88%B0%E5%91%95%E5%90%90%23) `426.2K 🔥` `NEW`
1. [特朗普称基本谈成美伊协议](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E5%9F%BA%E6%9C%AC%E8%B0%88%E6%88%90%E7%BE%8E%E4%BC%8A%E5%8D%8F%E8%AE%AE%23) `363.2K 🔥` `NEW`
1. [洛克王国 (Locke Kingdom)](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E5%85%8B%E7%8E%8B%E5%9B%BD%23) `350.6K 🔥` `NEW`
1. [张凌赫这明明是个live咋不动了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E8%BF%99%E6%98%8E%E6%98%8E%E6%98%AF%E4%B8%AAlive%E5%92%8B%E4%B8%8D%E5%8A%A8%E4%BA%86%23) `347.7K 🔥` `NEW`
1. [程涛为白鹿发声](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%B6%9B%E4%B8%BA%E7%99%BD%E9%B9%BF%E5%8F%91%E5%A3%B0%23) `343.3K 🔥` `NEW`
1. [男子回应结婚近两年从未同房](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%9E%E5%BA%94%E7%BB%93%E5%A9%9A%E8%BF%91%E4%B8%A4%E5%B9%B4%E4%BB%8E%E6%9C%AA%E5%90%8C%E6%88%BF%23) `338.7K 🔥` `NEW`
1. [棣月](https://s.weibo.com/weibo?q=%23%E6%A3%A3%E6%9C%88%23) `334.4K 🔥` `NEW`
1. [高迪大美的狗在车库被车碾死](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%BF%AA%E5%A4%A7%E7%BE%8E%E7%9A%84%E7%8B%97%E5%9C%A8%E8%BD%A6%E5%BA%93%E8%A2%AB%E8%BD%A6%E7%A2%BE%E6%AD%BB%23) `330.0K 🔥` `NEW`
1. [男子因单身被调座在店门口官宣分手](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%A0%E5%8D%95%E8%BA%AB%E8%A2%AB%E8%B0%83%E5%BA%A7%E5%9C%A8%E5%BA%97%E9%97%A8%E5%8F%A3%E5%AE%98%E5%AE%A3%E5%88%86%E6%89%8B%23) `327.9K 🔥` `NEW`
1. [尼克斯vs骑士](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E5%85%8B%E6%96%AFvs%E9%AA%91%E5%A3%AB%23) `325.7K 🔥` `NEW`
1. [婚后长期分居无亲密关系男方盼离婚](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%90%8E%E9%95%BF%E6%9C%9F%E5%88%86%E5%B1%85%E6%97%A0%E4%BA%B2%E5%AF%86%E5%85%B3%E7%B3%BB%E7%94%B7%E6%96%B9%E7%9B%BC%E7%A6%BB%E5%A9%9A%23) `323.9K 🔥` `NEW`
1. [娜扎好震撼的腿](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E5%A5%BD%E9%9C%87%E6%92%BC%E7%9A%84%E8%85%BF%23) `319.6K 🔥` `NEW`
1. [悄悄升高血糖的5个习惯 (5 habits that secretly raise blood sugar)](https://s.weibo.com/weibo?q=%23%E6%82%84%E6%82%84%E5%8D%87%E9%AB%98%E8%A1%80%E7%B3%96%E7%9A%845%E4%B8%AA%E4%B9%A0%E6%83%AF%23) `318.3K 🔥` `NEW`
1. [6岁患癌女童冻存卵巢](https://s.weibo.com/weibo?q=%236%E5%B2%81%E6%82%A3%E7%99%8C%E5%A5%B3%E7%AB%A5%E5%86%BB%E5%AD%98%E5%8D%B5%E5%B7%A2%23) `314.8K 🔥` `NEW`
1. [不舒服文学](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%88%92%E6%9C%8D%E6%96%87%E5%AD%A6%23) `311.6K 🔥` `NEW`
1. [老爸的歌老妈的嗓 老姑伴奏老那哭](https://s.weibo.com/weibo?q=%23%E8%80%81%E7%88%B8%E7%9A%84%E6%AD%8C%E8%80%81%E5%A6%88%E7%9A%84%E5%97%93%20%E8%80%81%E5%A7%91%E4%BC%B4%E5%A5%8F%E8%80%81%E9%82%A3%E5%93%AD%23) `310.1K 🔥` `NEW`
1. [一诺哭了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E5%93%AD%E4%BA%86%23) `307.2K 🔥` `NEW`
1. [拉小群时间线](https://s.weibo.com/weibo?q=%23%E6%8B%89%E5%B0%8F%E7%BE%A4%E6%97%B6%E9%97%B4%E7%BA%BF%23) `304.1K 🔥` `NEW`
1. [已经到了看不了高干文的年纪了](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E7%BB%8F%E5%88%B0%E4%BA%86%E7%9C%8B%E4%B8%8D%E4%BA%86%E9%AB%98%E5%B9%B2%E6%96%87%E7%9A%84%E5%B9%B4%E7%BA%AA%E4%BA%86%23) `301.0K 🔥` `NEW`
1. [白宫附近枪击案的嫌疑人在医院死亡](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%AE%AB%E9%99%84%E8%BF%91%E6%9E%AA%E5%87%BB%E6%A1%88%E7%9A%84%E5%AB%8C%E7%96%91%E4%BA%BA%E5%9C%A8%E5%8C%BB%E9%99%A2%E6%AD%BB%E4%BA%A1%23) `298.9K 🔥` `NEW`
1. [猫头鹰幼崽的报恩方式让人意想不到](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%A4%B4%E9%B9%B0%E5%B9%BC%E5%B4%BD%E7%9A%84%E6%8A%A5%E6%81%A9%E6%96%B9%E5%BC%8F%E8%AE%A9%E4%BA%BA%E6%84%8F%E6%83%B3%E4%B8%8D%E5%88%B0%23) `291.7K 🔥` `NEW`
1. [留神峪煤矿事故82人遇难 (82 people were killed in the Heshenyu coal mine accident)](https://s.weibo.com/weibo?q=%23%E7%95%99%E7%A5%9E%E5%B3%AA%E7%85%A4%E7%9F%BF%E4%BA%8B%E6%95%8582%E4%BA%BA%E9%81%87%E9%9A%BE%23) `1.1M 🔥` `+22%`
1. [在泳池游泳一定要学会踩水](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E6%B3%B3%E6%B1%A0%E6%B8%B8%E6%B3%B3%E4%B8%80%E5%AE%9A%E8%A6%81%E5%AD%A6%E4%BC%9A%E8%B8%A9%E6%B0%B4%23) `625.9K 🔥` `+175%`
1. [留神峪煤矿有重大违法行为 (Pay attention to serious illegal activities at Shenyu Coal Mine)](https://s.weibo.com/weibo?q=%23%E7%95%99%E7%A5%9E%E5%B3%AA%E7%85%A4%E7%9F%BF%E6%9C%89%E9%87%8D%E5%A4%A7%E8%BF%9D%E6%B3%95%E8%A1%8C%E4%B8%BA%23) `519.4K 🔥` `+103%`
1. [山西煤矿爆炸事故进展 (Progress of Shanxi Coal Mine Explosion Accident)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E7%85%A4%E7%9F%BF%E7%88%86%E7%82%B8%E4%BA%8B%E6%95%85%E8%BF%9B%E5%B1%95%23) `341.4K 🔥` `+41%`
1. [孙怡看到曾沛慈票数的表情 (Sun Yi's expression when she saw Zeng Peici's votes)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E7%9C%8B%E5%88%B0%E6%9B%BE%E6%B2%9B%E6%85%88%E7%A5%A8%E6%95%B0%E7%9A%84%E8%A1%A8%E6%83%85%23) `339.0K 🔥` `+44%`
1. [伊能静疑似力挺庾澄庆](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E7%96%91%E4%BC%BC%E5%8A%9B%E6%8C%BA%E5%BA%BE%E6%BE%84%E5%BA%86%23) `335.6K 🔥` `+41%`
1. [小伙去银行定期存50万全程记录](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E5%8E%BB%E9%93%B6%E8%A1%8C%E5%AE%9A%E6%9C%9F%E5%AD%9850%E4%B8%87%E5%85%A8%E7%A8%8B%E8%AE%B0%E5%BD%95%23) `332.0K 🔥` `+39%`
1. [不许再霸凌自己了](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%AE%B8%E5%86%8D%E9%9C%B8%E5%87%8C%E8%87%AA%E5%B7%B1%E4%BA%86%23) `329.9K 🔥` `+35%`
1. [单依纯终于原谅观众了](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E7%BB%88%E4%BA%8E%E5%8E%9F%E8%B0%85%E8%A7%82%E4%BC%97%E4%BA%86%23) `322.6K 🔥` `+40%`
1. [留神峪煤矿企业对作业人数统计不清 (Pay attention to the coal mine company's unclear statistics on the number of workers)](https://s.weibo.com/weibo?q=%23%E7%95%99%E7%A5%9E%E5%B3%AA%E7%85%A4%E7%9F%BF%E4%BC%81%E4%B8%9A%E5%AF%B9%E4%BD%9C%E4%B8%9A%E4%BA%BA%E6%95%B0%E7%BB%9F%E8%AE%A1%E4%B8%8D%E6%B8%85%23) `316.6K 🔥` `+29%`
1. [神舟二十三号出征 (Shenzhou 23 sets off)](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E8%88%9F%E4%BA%8C%E5%8D%81%E4%B8%89%E5%8F%B7%E5%87%BA%E5%BE%81%23) `313.0K 🔥` `+34%`
1. [曾沛慈 踢馆歌手 (Tsang Pei-chi, kicking singer)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%20%E8%B8%A2%E9%A6%86%E6%AD%8C%E6%89%8B%23) `306.3K 🔥` `+35%`
1. [我要的是闺女不是大学生 (What I want is a daughter, not a college student)](https://s.weibo.com/weibo?q=%23%E6%88%91%E8%A6%81%E7%9A%84%E6%98%AF%E9%97%BA%E5%A5%B3%E4%B8%8D%E6%98%AF%E5%A4%A7%E5%AD%A6%E7%94%9F%23) `301.7K 🔥` `+24%`
1. [F1](https://s.weibo.com/weibo?q=%23F1%23) `297.2K 🔥` `+27%`
1. [窦靖童小时候是王菲的挂件 (Dou Jingtong was Faye Wong’s pendant when she was a child)](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E9%9D%96%E7%AB%A5%E5%B0%8F%E6%97%B6%E5%80%99%E6%98%AF%E7%8E%8B%E8%8F%B2%E7%9A%84%E6%8C%82%E4%BB%B6%23) `296.1K 🔥` `+31%`
1. [李昀锐撩的不是关晓彤是丁程鑫吧 (Li Yunrui is not flirting with Guan Xiaotong but Ding Chengxin, right?)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E6%92%A9%E7%9A%84%E4%B8%8D%E6%98%AF%E5%85%B3%E6%99%93%E5%BD%A4%E6%98%AF%E4%B8%81%E7%A8%8B%E9%91%AB%E5%90%A7%23) `293.3K 🔥` `+34%`
1. [神二十三航天员公布](https://s.weibo.com/weibo?q=%23%E7%A5%9E%E4%BA%8C%E5%8D%81%E4%B8%89%E8%88%AA%E5%A4%A9%E5%91%98%E5%85%AC%E5%B8%83%23) `290.1K 🔥` `+45%`
1. [家业收视率](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%E6%94%B6%E8%A7%86%E7%8E%87%23) `288.2K 🔥` `+34%`
1. [张月队长solo秀第一名](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%88%E9%98%9F%E9%95%BFsolo%E7%A7%80%E7%AC%AC%E4%B8%80%E5%90%8D%23) `285.8K 🔥` `+29%`
1. [中国硬核实力又刷屏了 (China’s hard core strength has been refreshed again)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%A1%AC%E6%A0%B8%E5%AE%9E%E5%8A%9B%E5%8F%88%E5%88%B7%E5%B1%8F%E4%BA%86%23) `655.6K 🔥`
1. [王鹤棣沈月疑似互删 (Wang Hedi and Shen Yue are suspected of deleting each other)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%E6%B2%88%E6%9C%88%E7%96%91%E4%BC%BC%E4%BA%92%E5%88%A0%23) `346.5K 🔥` `-97%`
1. [香港航天员黎家盈](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E8%88%AA%E5%A4%A9%E5%91%98%E9%BB%8E%E5%AE%B6%E7%9B%88%23) `344.6K 🔥` `-57%`

Updated at 2026-05-24 09:34:37

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
