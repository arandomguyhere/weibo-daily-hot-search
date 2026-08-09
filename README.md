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

1. [张本智和横滨赛冠军 (Zhang Benzhi and the Yokohama champion)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E6%A8%AA%E6%BB%A8%E8%B5%9B%E5%86%A0%E5%86%9B%23) `1.1M 🔥` `NEW`
1. [张本智和vs吴晙诚](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8Cvs%E5%90%B4%E6%99%99%E8%AF%9A%23) `438.7K 🔥` `NEW`
1. [白海豚 没囤东西就来了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%20%E6%B2%A1%E5%9B%A4%E4%B8%9C%E8%A5%BF%E5%B0%B1%E6%9D%A5%E4%BA%86%23) `426.5K 🔥` `NEW`
1. [低估了白海豚](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E4%BC%B0%E4%BA%86%E7%99%BD%E6%B5%B7%E8%B1%9A%23) `421.4K 🔥` `NEW`
1. [白海豚提前登陆当地大片树木被吹倒](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E6%8F%90%E5%89%8D%E7%99%BB%E9%99%86%E5%BD%93%E5%9C%B0%E5%A4%A7%E7%89%87%E6%A0%91%E6%9C%A8%E8%A2%AB%E5%90%B9%E5%80%92%23) `290.8K 🔥` `NEW`
1. [王橹杰黑色皮衣大片](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E9%BB%91%E8%89%B2%E7%9A%AE%E8%A1%A3%E5%A4%A7%E7%89%87%23) `287.8K 🔥` `NEW`
1. [WTT](https://s.weibo.com/weibo?q=%23WTT%23) `287.4K 🔥` `NEW`
1. [蔡文静辣到我了](https://s.weibo.com/weibo?q=%23%E8%94%A1%E6%96%87%E9%9D%99%E8%BE%A3%E5%88%B0%E6%88%91%E4%BA%86%23) `285.8K 🔥` `NEW`
1. [TF四代庆祝突围结束](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E5%BA%86%E7%A5%9D%E7%AA%81%E5%9B%B4%E7%BB%93%E6%9D%9F%23) `284.7K 🔥` `NEW`
1. [周佑凌柳柳直播](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%BD%91%E5%87%8C%E6%9F%B3%E6%9F%B3%E7%9B%B4%E6%92%AD%23) `275.8K 🔥` `NEW`
1. [曝iPhone18Pro黑色被取消 (iPhone 18 Pro black color revealed to have been cancelled)](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhone18Pro%E9%BB%91%E8%89%B2%E8%A2%AB%E5%8F%96%E6%B6%88%23) `271.1K 🔥` `NEW`
1. [一组数据读懂中国经济底气 (A set of data to understand China’s economic confidence)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%BB%84%E6%95%B0%E6%8D%AE%E8%AF%BB%E6%87%82%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E5%BA%95%E6%B0%94%23) `820.0K 🔥`
1. [中国留学生写差评的方式太隐晦了 (The way Chinese students write negative reviews is too subtle)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%95%99%E5%AD%A6%E7%94%9F%E5%86%99%E5%B7%AE%E8%AF%84%E7%9A%84%E6%96%B9%E5%BC%8F%E5%A4%AA%E9%9A%90%E6%99%A6%E4%BA%86%23) `411.9K 🔥`
1. [台风琵鹭来了 (Typhoon Spoonbill is coming)](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%90%B5%E9%B9%AD%E6%9D%A5%E4%BA%86%23) `379.5K 🔥`
1. [原来性格还会影响一个人的声音](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%80%A7%E6%A0%BC%E8%BF%98%E4%BC%9A%E5%BD%B1%E5%93%8D%E4%B8%80%E4%B8%AA%E4%BA%BA%E7%9A%84%E5%A3%B0%E9%9F%B3%23) `324.7K 🔥`
1. [田曦薇没刘海差点认不出来 (Tian Xiwei is almost unrecognizable without bangs)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E6%B2%A1%E5%88%98%E6%B5%B7%E5%B7%AE%E7%82%B9%E8%AE%A4%E4%B8%8D%E5%87%BA%E6%9D%A5%23) `323.6K 🔥`
1. [沈腾 影帝](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%20%E5%BD%B1%E5%B8%9D%23) `322.4K 🔥`
1. [老坛酸菜 脚踩 (Laotan pickled cabbage)](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%9D%9B%E9%85%B8%E8%8F%9C%20%E8%84%9A%E8%B8%A9%23) `320.8K 🔥`
1. [朱一龙鼻子怎么了](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E4%B8%80%E9%BE%99%E9%BC%BB%E5%AD%90%E6%80%8E%E4%B9%88%E4%BA%86%23) `319.4K 🔥`
1. [迪丽热巴素颜香港plog](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%B4%A0%E9%A2%9C%E9%A6%99%E6%B8%AFplog%23) `317.0K 🔥`
1. [程晓玥谈离婚](https://s.weibo.com/weibo?q=%23%E7%A8%8B%E6%99%93%E7%8E%A5%E8%B0%88%E7%A6%BB%E5%A9%9A%23) `314.5K 🔥`
1. [宇树科技中一签需缴7.54万元](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E4%B8%AD%E4%B8%80%E7%AD%BE%E9%9C%80%E7%BC%B47.54%E4%B8%87%E5%85%83%23) `312.1K 🔥`
1. [郑雅贤为中文回复道歉](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%9B%85%E8%B4%A4%E4%B8%BA%E4%B8%AD%E6%96%87%E5%9B%9E%E5%A4%8D%E9%81%93%E6%AD%89%23) `311.8K 🔥`
1. [寒山寺猫咪吵架回头全是人](https://s.weibo.com/weibo?q=%23%E5%AF%92%E5%B1%B1%E5%AF%BA%E7%8C%AB%E5%92%AA%E5%90%B5%E6%9E%B6%E5%9B%9E%E5%A4%B4%E5%85%A8%E6%98%AF%E4%BA%BA%23) `309.7K 🔥`
1. [金冬天田柾国点赞同一条帖子](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%86%AC%E5%A4%A9%E7%94%B0%E6%9F%BE%E5%9B%BD%E7%82%B9%E8%B5%9E%E5%90%8C%E4%B8%80%E6%9D%A1%E5%B8%96%E5%AD%90%23) `308.0K 🔥`
1. [男孩1年暴长20厘米全身长满纹 (Boy grows 20 centimeters in one year and is covered in lines)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A91%E5%B9%B4%E6%9A%B4%E9%95%BF20%E5%8E%98%E7%B1%B3%E5%85%A8%E8%BA%AB%E9%95%BF%E6%BB%A1%E7%BA%B9%23) `307.5K 🔥`
1. [月经前的9个身体信号 (9 body signals before your period)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E7%BB%8F%E5%89%8D%E7%9A%849%E4%B8%AA%E8%BA%AB%E4%BD%93%E4%BF%A1%E5%8F%B7%23) `306.0K 🔥`
1. [苏醒 控制内娱几乎实锤了 (Su Xing’s control over internal entertainment is almost real.)](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E9%86%92%20%E6%8E%A7%E5%88%B6%E5%86%85%E5%A8%B1%E5%87%A0%E4%B9%8E%E5%AE%9E%E9%94%A4%E4%BA%86%23) `303.7K 🔥`
1. [孙怡好长的腿 (Sun Yi has such long legs)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E5%A5%BD%E9%95%BF%E7%9A%84%E8%85%BF%23) `302.6K 🔥`
1. [伊朗要求美国赔偿](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%A6%81%E6%B1%82%E7%BE%8E%E5%9B%BD%E8%B5%94%E5%81%BF%23) `301.8K 🔥`
1. [王传君潮得有点不敢认了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BC%A0%E5%90%9B%E6%BD%AE%E5%BE%97%E6%9C%89%E7%82%B9%E4%B8%8D%E6%95%A2%E8%AE%A4%E4%BA%86%23) `299.7K 🔥`
1. [TF四代突围2](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E7%AA%81%E5%9B%B42%23) `299.0K 🔥`
1. [台风白海豚二次登陆](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%E4%BA%8C%E6%AC%A1%E7%99%BB%E9%99%86%23) `297.1K 🔥`
1. [白海豚登陆监控画面剧烈摇晃](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E7%99%BB%E9%99%86%E7%9B%91%E6%8E%A7%E7%94%BB%E9%9D%A2%E5%89%A7%E7%83%88%E6%91%87%E6%99%83%23) `295.3K 🔥`
1. [郑雅贤回应裙子穿反了](https://s.weibo.com/weibo?q=%23%E9%83%91%E9%9B%85%E8%B4%A4%E5%9B%9E%E5%BA%94%E8%A3%99%E5%AD%90%E7%A9%BF%E5%8F%8D%E4%BA%86%23) `294.2K 🔥`
1. [自闭症哥哥的话唠妹妹堪比心理医生](https://s.weibo.com/weibo?q=%23%E8%87%AA%E9%97%AD%E7%97%87%E5%93%A5%E5%93%A5%E7%9A%84%E8%AF%9D%E5%94%A0%E5%A6%B9%E5%A6%B9%E5%A0%AA%E6%AF%94%E5%BF%83%E7%90%86%E5%8C%BB%E7%94%9F%23) `292.9K 🔥`
1. [金智秀直播力挺哥哥 (Kim Ji Soo supports her brother during live broadcast)](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%99%BA%E7%A7%80%E7%9B%B4%E6%92%AD%E5%8A%9B%E6%8C%BA%E5%93%A5%E5%93%A5%23) `289.7K 🔥`
1. [陈幸同2比4张本美和](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B9%B8%E5%90%8C2%E6%AF%944%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%23) `283.2K 🔥`
1. [李昀锐周翊然合照 (Group photo of Li Yunrui and Zhou Yiran)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%91%A8%E7%BF%8A%E7%84%B6%E5%90%88%E7%85%A7%23) `280.6K 🔥`
1. [花开锦绣 好看 (Beautiful flowers blooming)](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%20%E5%A5%BD%E7%9C%8B%23) `279.5K 🔥`
1. [仙逆](https://s.weibo.com/weibo?q=%23%E4%BB%99%E9%80%86%23) `278.9K 🔥`
1. [白鹿手里的剧本打了马赛克 (The script in Bai Lu's hand is mosaic)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%89%8B%E9%87%8C%E7%9A%84%E5%89%A7%E6%9C%AC%E6%89%93%E4%BA%86%E9%A9%AC%E8%B5%9B%E5%85%8B%23) `276.3K 🔥`
1. [孙颖莎前十中唯一运动员](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%89%8D%E5%8D%81%E4%B8%AD%E5%94%AF%E4%B8%80%E8%BF%90%E5%8A%A8%E5%91%98%23) `274.4K 🔥`
1. [刘耀文百花奖人没到但感言到了 (Liu Yaowen's Hundred Flowers Award winner didn't arrive but he did give his speech)](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E7%99%BE%E8%8A%B1%E5%A5%96%E4%BA%BA%E6%B2%A1%E5%88%B0%E4%BD%86%E6%84%9F%E8%A8%80%E5%88%B0%E4%BA%86%23) `273.1K 🔥`
1. [小巷人家披荆斩棘团建](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%B7%B7%E4%BA%BA%E5%AE%B6%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E5%9B%A2%E5%BB%BA%23) `270.6K 🔥`
1. [钟睒睒认为电商平台本质就是中间商](https://s.weibo.com/weibo?q=%23%E9%92%9F%E7%9D%92%E7%9D%92%E8%AE%A4%E4%B8%BA%E7%94%B5%E5%95%86%E5%B9%B3%E5%8F%B0%E6%9C%AC%E8%B4%A8%E5%B0%B1%E6%98%AF%E4%B8%AD%E9%97%B4%E5%95%86%23) `268.9K 🔥`
1. [白海豚提前登陆 (White dolphins land early)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E6%8F%90%E5%89%8D%E7%99%BB%E9%99%86%23) `2.8M 🔥` `-25%`
1. [伯爵熠眼心动 (The earl's eyes are moved)](https://s.weibo.com/weibo?q=%23%E4%BC%AF%E7%88%B5%E7%86%A0%E7%9C%BC%E5%BF%83%E5%8A%A8%23) `415.5K 🔥` `-28%`
1. [耳机左右耳电量未解之谜 (The mystery of the battery capacity of the left and right earphones)](https://s.weibo.com/weibo?q=%23%E8%80%B3%E6%9C%BA%E5%B7%A6%E5%8F%B3%E8%80%B3%E7%94%B5%E9%87%8F%E6%9C%AA%E8%A7%A3%E4%B9%8B%E8%B0%9C%23) `365.6K 🔥` `-34%`
1. [张本美和横滨赛冠军](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E7%BE%8E%E5%92%8C%E6%A8%AA%E6%BB%A8%E8%B5%9B%E5%86%A0%E5%86%9B%23) `318.0K 🔥` `-71%`
1. [工资5000能存4999的吃法 (How to save 4999 with a salary of 5000)](https://s.weibo.com/weibo?q=%23%E5%B7%A5%E8%B5%845000%E8%83%BD%E5%AD%984999%E7%9A%84%E5%90%83%E6%B3%95%23) `315.9K 🔥` `-21%`

Updated at 2026-08-09 19:58:39

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
