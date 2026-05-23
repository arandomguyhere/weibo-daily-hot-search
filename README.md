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

1. [浪姐直播 (Sister Lang live broadcast)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E7%9B%B4%E6%92%AD%23) `583.3K 🔥` `NEW`
1. [沈月工作室 你仅仅是沈月就很好](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E5%B7%A5%E4%BD%9C%E5%AE%A4%20%E4%BD%A0%E4%BB%85%E4%BB%85%E6%98%AF%E6%B2%88%E6%9C%88%E5%B0%B1%E5%BE%88%E5%A5%BD%23) `458.6K 🔥` `NEW`
1. [秦海璐你头发沾上凉皮汁儿了](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E6%B5%B7%E7%92%90%E4%BD%A0%E5%A4%B4%E5%8F%91%E6%B2%BE%E4%B8%8A%E5%87%89%E7%9A%AE%E6%B1%81%E5%84%BF%E4%BA%86%23) `449.8K 🔥` `NEW`
1. [魏晨带儿子逛超市](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E6%99%A8%E5%B8%A6%E5%84%BF%E5%AD%90%E9%80%9B%E8%B6%85%E5%B8%82%23) `435.7K 🔥` `NEW`
1. [蒋毅老婆起诉赵樱子](https://s.weibo.com/weibo?q=%23%E8%92%8B%E6%AF%85%E8%80%81%E5%A9%86%E8%B5%B7%E8%AF%89%E8%B5%B5%E6%A8%B1%E5%AD%90%23) `416.0K 🔥` `NEW`
1. [杨紫玉兰花开君再来杀青合照](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%8E%89%E5%85%B0%E8%8A%B1%E5%BC%80%E5%90%9B%E5%86%8D%E6%9D%A5%E6%9D%80%E9%9D%92%E5%90%88%E7%85%A7%23) `408.5K 🔥` `NEW`
1. [宋亚轩国乐无双新歌写了二十天](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%9B%BD%E4%B9%90%E6%97%A0%E5%8F%8C%E6%96%B0%E6%AD%8C%E5%86%99%E4%BA%86%E4%BA%8C%E5%8D%81%E5%A4%A9%23) `404.4K 🔥` `NEW`
1. [王烁然回复粉丝评论](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E7%83%81%E7%84%B6%E5%9B%9E%E5%A4%8D%E7%B2%89%E4%B8%9D%E8%AF%84%E8%AE%BA%23) `394.2K 🔥` `NEW`
1. [猪被洪水冲走听主人喊话成功自救](https://s.weibo.com/weibo?q=%23%E7%8C%AA%E8%A2%AB%E6%B4%AA%E6%B0%B4%E5%86%B2%E8%B5%B0%E5%90%AC%E4%B8%BB%E4%BA%BA%E5%96%8A%E8%AF%9D%E6%88%90%E5%8A%9F%E8%87%AA%E6%95%91%23) `389.3K 🔥` `NEW`
1. [曝白玉兰提名终极预测](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%99%BD%E7%8E%89%E5%85%B0%E6%8F%90%E5%90%8D%E7%BB%88%E6%9E%81%E9%A2%84%E6%B5%8B%23) `387.6K 🔥` `NEW`
1. [在大眼音乐节嚼起来了 (Chewed up at the Big Eye Music Festival)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%A4%A7%E7%9C%BC%E9%9F%B3%E4%B9%90%E8%8A%82%E5%9A%BC%E8%B5%B7%E6%9D%A5%E4%BA%86%23) `383.8K 🔥` `NEW`
1. [翟一莹群内发文](https://s.weibo.com/weibo?q=%23%E7%BF%9F%E4%B8%80%E8%8E%B9%E7%BE%A4%E5%86%85%E5%8F%91%E6%96%87%23) `381.6K 🔥` `NEW`
1. [男子因单身被调座在店门口官宣分手](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%9B%A0%E5%8D%95%E8%BA%AB%E8%A2%AB%E8%B0%83%E5%BA%A7%E5%9C%A8%E5%BA%97%E9%97%A8%E5%8F%A3%E5%AE%98%E5%AE%A3%E5%88%86%E6%89%8B%23) `378.2K 🔥` `NEW`
1. [殷世航哭着回应鞋装厂起火](https://s.weibo.com/weibo?q=%23%E6%AE%B7%E4%B8%96%E8%88%AA%E5%93%AD%E7%9D%80%E5%9B%9E%E5%BA%94%E9%9E%8B%E8%A3%85%E5%8E%82%E8%B5%B7%E7%81%AB%23) `376.3K 🔥` `NEW`
1. [小澈瘦了好多](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%BE%88%E7%98%A6%E4%BA%86%E5%A5%BD%E5%A4%9A%23) `374.4K 🔥` `NEW`
1. [秦统一至今麦子不过熟了2246次](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E7%BB%9F%E4%B8%80%E8%87%B3%E4%BB%8A%E9%BA%A6%E5%AD%90%E4%B8%8D%E8%BF%87%E7%86%9F%E4%BA%862246%E6%AC%A1%23) `372.1K 🔥` `NEW`
1. [申请美国绿卡须返回原籍国提申请](https://s.weibo.com/weibo?q=%23%E7%94%B3%E8%AF%B7%E7%BE%8E%E5%9B%BD%E7%BB%BF%E5%8D%A1%E9%A1%BB%E8%BF%94%E5%9B%9E%E5%8E%9F%E7%B1%8D%E5%9B%BD%E6%8F%90%E7%94%B3%E8%AF%B7%23) `924.3K 🔥` `+140%`
1. [徐留平被查 (Xu Liuping was investigated)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E7%95%99%E5%B9%B3%E8%A2%AB%E6%9F%A5%23) `609.7K 🔥` `+84%`
1. [不上班靠一对善良的夫妇救济](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E4%B8%8A%E7%8F%AD%E9%9D%A0%E4%B8%80%E5%AF%B9%E5%96%84%E8%89%AF%E7%9A%84%E5%A4%AB%E5%A6%87%E6%95%91%E6%B5%8E%23) `465.2K 🔥` `+40%`
1. [原来吃完虾不能马上运动 (It turns out that you can’t exercise immediately after eating shrimp.)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%90%83%E5%AE%8C%E8%99%BE%E4%B8%8D%E8%83%BD%E9%A9%AC%E4%B8%8A%E8%BF%90%E5%8A%A8%23) `465.1K 🔥` `+41%`
1. [一诺射手开团](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%AF%BA%E5%B0%84%E6%89%8B%E5%BC%80%E5%9B%A2%23) `462.7K 🔥` `+55%`
1. [棣月系超话头像变黑了](https://s.weibo.com/weibo?q=%23%E6%A3%A3%E6%9C%88%E7%B3%BB%E8%B6%85%E8%AF%9D%E5%A4%B4%E5%83%8F%E5%8F%98%E9%BB%91%E4%BA%86%23) `452.9K 🔥` `+35%`
1. [沈月向王鹤棣道歉 (Shen Yue apologized to Wang Hedi)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%9C%88%E5%90%91%E7%8E%8B%E9%B9%A4%E6%A3%A3%E9%81%93%E6%AD%89%23) `446.5K 🔥` `+30%`
1. [山西煤矿爆炸点附近出现积水 (Water accumulates near Shanxi coal mine explosion site)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E7%85%A4%E7%9F%BF%E7%88%86%E7%82%B8%E7%82%B9%E9%99%84%E8%BF%91%E5%87%BA%E7%8E%B0%E7%A7%AF%E6%B0%B4%23) `440.6K 🔥` `+52%`
1. [庾澄庆格局](https://s.weibo.com/weibo?q=%23%E5%BA%BE%E6%BE%84%E5%BA%86%E6%A0%BC%E5%B1%80%23) `438.8K 🔥` `+27%`
1. [丁程鑫误入巨人国 (Ding Chengxin accidentally entered the Giant Kingdom)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E8%AF%AF%E5%85%A5%E5%B7%A8%E4%BA%BA%E5%9B%BD%23) `432.2K 🔥` `+34%`
1. [感情里有一个最微妙的悖论](https://s.weibo.com/weibo?q=%23%E6%84%9F%E6%83%85%E9%87%8C%E6%9C%89%E4%B8%80%E4%B8%AA%E6%9C%80%E5%BE%AE%E5%A6%99%E7%9A%84%E6%82%96%E8%AE%BA%23) `431.0K 🔥` `+36%`
1. [ally打肉毒导致脸部僵硬](https://s.weibo.com/weibo?q=%23ally%E6%89%93%E8%82%89%E6%AF%92%E5%AF%BC%E8%87%B4%E8%84%B8%E9%83%A8%E5%83%B5%E7%A1%AC%23) `427.3K 🔥` `+47%`
1. [国家卫健委组织专家赴山西](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E5%8D%AB%E5%81%A5%E5%A7%94%E7%BB%84%E7%BB%87%E4%B8%93%E5%AE%B6%E8%B5%B4%E5%B1%B1%E8%A5%BF%23) `423.5K 🔥` `+36%`
1. [赵又廷这么发高圆圆知道吗](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%8F%88%E5%BB%B7%E8%BF%99%E4%B9%88%E5%8F%91%E9%AB%98%E5%9C%86%E5%9C%86%E7%9F%A5%E9%81%93%E5%90%97%23) `422.4K 🔥` `+33%`
1. [AI光算力第一股上市首日暴涨380%](https://s.weibo.com/weibo?q=%23AI%E5%85%89%E7%AE%97%E5%8A%9B%E7%AC%AC%E4%B8%80%E8%82%A1%E4%B8%8A%E5%B8%82%E9%A6%96%E6%97%A5%E6%9A%B4%E6%B6%A8380%25%23) `419.5K 🔥` `+29%`
1. [男子忘记池里有鱼一年后瘦成蝌蚪](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%BF%98%E8%AE%B0%E6%B1%A0%E9%87%8C%E6%9C%89%E9%B1%BC%E4%B8%80%E5%B9%B4%E5%90%8E%E7%98%A6%E6%88%90%E8%9D%8C%E8%9A%AA%23) `413.8K 🔥` `+34%`
1. [沙溢跑男高反吸氧开车 (Sha Yi, a male high school student, inhales oxygen while driving)](https://s.weibo.com/weibo?q=%23%E6%B2%99%E6%BA%A2%E8%B7%91%E7%94%B7%E9%AB%98%E5%8F%8D%E5%90%B8%E6%B0%A7%E5%BC%80%E8%BD%A6%23) `412.6K 🔥` `+26%`
1. [孕妻脑梗变3岁丈夫900多天不离不弃](https://s.weibo.com/weibo?q=%23%E5%AD%95%E5%A6%BB%E8%84%91%E6%A2%97%E5%8F%983%E5%B2%81%E4%B8%88%E5%A4%AB900%E5%A4%9A%E5%A4%A9%E4%B8%8D%E7%A6%BB%E4%B8%8D%E5%BC%83%23) `410.2K 🔥` `+30%`
1. [小狗护主中弹三次手术后出院](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E6%8A%A4%E4%B8%BB%E4%B8%AD%E5%BC%B9%E4%B8%89%E6%AC%A1%E6%89%8B%E6%9C%AF%E5%90%8E%E5%87%BA%E9%99%A2%23) `405.0K 🔥` `+34%`
1. [为了省停车费烧了一箱油 (I burned a tank of gas to save on parking fees.)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BA%86%E7%9C%81%E5%81%9C%E8%BD%A6%E8%B4%B9%E7%83%A7%E4%BA%86%E4%B8%80%E7%AE%B1%E6%B2%B9%23) `400.5K 🔥` `+39%`
1. [谁家酒店在门口放个游泳池](https://s.weibo.com/weibo?q=%23%E8%B0%81%E5%AE%B6%E9%85%92%E5%BA%97%E5%9C%A8%E9%97%A8%E5%8F%A3%E6%94%BE%E4%B8%AA%E6%B8%B8%E6%B3%B3%E6%B1%A0%23) `399.6K 🔥` `+31%`
1. [明星看粉丝分析](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%9F%E7%9C%8B%E7%B2%89%E4%B8%9D%E5%88%86%E6%9E%90%23) `396.8K 🔥` `+30%`
1. [孙亚龙买了两万克黄金](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%BA%9A%E9%BE%99%E4%B9%B0%E4%BA%86%E4%B8%A4%E4%B8%87%E5%85%8B%E9%BB%84%E9%87%91%23) `391.3K 🔥` `+32%`
1. [山西煤矿事故已致90人死亡 (Shanxi coal mine accident kills 90 people)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E7%85%A4%E7%9F%BF%E4%BA%8B%E6%95%85%E5%B7%B2%E8%87%B490%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `1.6M 🔥`
1. [神23航天员乘组公布](https://s.weibo.com/weibo?q=%23%E7%A5%9E23%E8%88%AA%E5%A4%A9%E5%91%98%E4%B9%98%E7%BB%84%E5%85%AC%E5%B8%83%23) `731.8K 🔥`
1. [山西事故煤矿矿工晕倒一个多小时](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E4%BA%8B%E6%95%85%E7%85%A4%E7%9F%BF%E7%9F%BF%E5%B7%A5%E6%99%95%E5%80%92%E4%B8%80%E4%B8%AA%E5%A4%9A%E5%B0%8F%E6%97%B6%23) `710.4K 🔥`
1. [山西留神峪煤矿内部画面 (Interior picture of Shanxi Liushenyu Coal Mine)](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E8%A5%BF%E7%95%99%E7%A5%9E%E5%B3%AA%E7%85%A4%E7%9F%BF%E5%86%85%E9%83%A8%E7%94%BB%E9%9D%A2%23) `552.6K 🔥`
1. [王鹤棣 拆cp](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%A3%A3%20%E6%8B%86cp%23) `457.6K 🔥`
1. [女子住院被朋友殴打昏迷数天后死亡](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BD%8F%E9%99%A2%E8%A2%AB%E6%9C%8B%E5%8F%8B%E6%AE%B4%E6%89%93%E6%98%8F%E8%BF%B7%E6%95%B0%E5%A4%A9%E5%90%8E%E6%AD%BB%E4%BA%A1%23) `456.0K 🔥`
1. [易烊千玺给王源演唱会送花篮了](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E7%BB%99%E7%8E%8B%E6%BA%90%E6%BC%94%E5%94%B1%E4%BC%9A%E9%80%81%E8%8A%B1%E7%AF%AE%E4%BA%86%23) `443.2K 🔥`
1. [赵嘉敏去看一诺决赛](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E5%98%89%E6%95%8F%E5%8E%BB%E7%9C%8B%E4%B8%80%E8%AF%BA%E5%86%B3%E8%B5%9B%23) `386.7K 🔥`
1. [AG对战狼队 (AG vs. Wolves)](https://s.weibo.com/weibo?q=%23AG%E5%AF%B9%E6%88%98%E7%8B%BC%E9%98%9F%23) `448.2K 🔥` `-25%`
1. [iPhone20渲染视频 (iPhone20 rendering video)](https://s.weibo.com/weibo?q=%23iPhone20%E6%B8%B2%E6%9F%93%E8%A7%86%E9%A2%91%23) `436.3K 🔥` `-53%`
1. [庾澄庆 被换6首歌 (Yu Chengqing was replaced by 6 songs)](https://s.weibo.com/weibo?q=%23%E5%BA%BE%E6%BE%84%E5%BA%86%20%E8%A2%AB%E6%8D%A26%E9%A6%96%E6%AD%8C%23) `426.2K 🔥` `-40%`

Updated at 2026-05-23 20:00:01

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
