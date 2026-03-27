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

1. [罗技就侮辱性广告致歉 (Logitech apologizes for insulting ad)](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%8A%80%E5%B0%B1%E4%BE%AE%E8%BE%B1%E6%80%A7%E5%B9%BF%E5%91%8A%E8%87%B4%E6%AD%89%23) `1.2M 🔥` `NEW`
1. [食贫道谈日本女性养牛郎现象](https://s.weibo.com/weibo?q=%23%E9%A3%9F%E8%B4%AB%E9%81%93%E8%B0%88%E6%97%A5%E6%9C%AC%E5%A5%B3%E6%80%A7%E5%85%BB%E7%89%9B%E9%83%8E%E7%8E%B0%E8%B1%A1%23) `629.9K 🔥` `NEW`
1. [李昀锐孟子义撕名牌路透](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E5%AD%9F%E5%AD%90%E4%B9%89%E6%92%95%E5%90%8D%E7%89%8C%E8%B7%AF%E9%80%8F%23) `220.8K 🔥` `NEW`
1. [特朗普称对伊能源空袭再推迟10天](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E5%AF%B9%E4%BC%8A%E8%83%BD%E6%BA%90%E7%A9%BA%E8%A2%AD%E5%86%8D%E6%8E%A8%E8%BF%9F10%E5%A4%A9%23) `197.6K 🔥` `NEW`
1. [国产伟哥2025年少卖近800万片](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BA%A7%E4%BC%9F%E5%93%A52025%E5%B9%B4%E5%B0%91%E5%8D%96%E8%BF%91800%E4%B8%87%E7%89%87%23) `187.6K 🔥` `NEW`
1. [人民的名义演员被诉休庭未宣判](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%B0%91%E7%9A%84%E5%90%8D%E4%B9%89%E6%BC%94%E5%91%98%E8%A2%AB%E8%AF%89%E4%BC%91%E5%BA%AD%E6%9C%AA%E5%AE%A3%E5%88%A4%23) `187.2K 🔥` `NEW`
1. [白鹿录完跑男状态](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%BD%95%E5%AE%8C%E8%B7%91%E7%94%B7%E7%8A%B6%E6%80%81%23) `175.3K 🔥` `NEW`
1. [张凌赫回应最近好瘦](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%9B%9E%E5%BA%94%E6%9C%80%E8%BF%91%E5%A5%BD%E7%98%A6%23) `159.0K 🔥` `NEW`
1. [金价大涨大跌的原因找到了](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%A4%A7%E6%B6%A8%E5%A4%A7%E8%B7%8C%E7%9A%84%E5%8E%9F%E5%9B%A0%E6%89%BE%E5%88%B0%E4%BA%86%23) `150.6K 🔥` `NEW`
1. [南方将有暴雨大暴雨](https://s.weibo.com/weibo?q=%23%E5%8D%97%E6%96%B9%E5%B0%86%E6%9C%89%E6%9A%B4%E9%9B%A8%E5%A4%A7%E6%9A%B4%E9%9B%A8%23) `140.4K 🔥` `NEW`
1. [逐玉原著这段无法保持苹果肌扁平 (This paragraph of Zhuyu’s original work cannot keep the apple muscles flat)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%8E%9F%E8%91%97%E8%BF%99%E6%AE%B5%E6%97%A0%E6%B3%95%E4%BF%9D%E6%8C%81%E8%8B%B9%E6%9E%9C%E8%82%8C%E6%89%81%E5%B9%B3%23) `137.8K 🔥` `NEW`
1. [伊总统称伊朗致力于全面结束战争](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%80%BB%E7%BB%9F%E7%A7%B0%E4%BC%8A%E6%9C%97%E8%87%B4%E5%8A%9B%E4%BA%8E%E5%85%A8%E9%9D%A2%E7%BB%93%E6%9D%9F%E6%88%98%E4%BA%89%23) `127.9K 🔥` `NEW`
1. [存储芯片板块暴跌原因](https://s.weibo.com/weibo?q=%23%E5%AD%98%E5%82%A8%E8%8A%AF%E7%89%87%E6%9D%BF%E5%9D%97%E6%9A%B4%E8%B7%8C%E5%8E%9F%E5%9B%A0%23) `114.8K 🔥` `NEW`
1. [黄金又开始拉扯](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%8F%88%E5%BC%80%E5%A7%8B%E6%8B%89%E6%89%AF%23) `105.0K 🔥` `NEW`
1. [男子出差回来得知花36元中995万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%87%BA%E5%B7%AE%E5%9B%9E%E6%9D%A5%E5%BE%97%E7%9F%A5%E8%8A%B136%E5%85%83%E4%B8%AD995%E4%B8%87%23) `98.5K 🔥` `NEW`
1. [中国移动日赚3.76亿](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%A7%BB%E5%8A%A8%E6%97%A5%E8%B5%9A3.76%E4%BA%BF%23) `92.7K 🔥` `NEW`
1. [京城大师赛](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E5%9F%8E%E5%A4%A7%E5%B8%88%E8%B5%9B%23) `73.7K 🔥` `NEW`
1. [逐玉删了钻被窝](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%88%A0%E4%BA%86%E9%92%BB%E8%A2%AB%E7%AA%9D%23) `73.7K 🔥` `NEW`
1. [罗技称已处理相关涉事人员](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%8A%80%E7%A7%B0%E5%B7%B2%E5%A4%84%E7%90%86%E7%9B%B8%E5%85%B3%E6%B6%89%E4%BA%8B%E4%BA%BA%E5%91%98%23) `73.7K 🔥` `NEW`
1. [纳指大跌2.38%](https://s.weibo.com/weibo?q=%23%E7%BA%B3%E6%8C%87%E5%A4%A7%E8%B7%8C2.38%25%23) `71.4K 🔥` `NEW`
1. [斯柯达CEO曾称中国竞争太激烈了 (Skoda CEO once said competition in China is too fierce)](https://s.weibo.com/weibo?q=%23%E6%96%AF%E6%9F%AF%E8%BE%BECEO%E6%9B%BE%E7%A7%B0%E4%B8%AD%E5%9B%BD%E7%AB%9E%E4%BA%89%E5%A4%AA%E6%BF%80%E7%83%88%E4%BA%86%23) `70.9K 🔥` `NEW`
1. [8岁被领养至加拿大又遭遗弃 (Adopted to Canada at the age of 8 and then abandoned)](https://s.weibo.com/weibo?q=%238%E5%B2%81%E8%A2%AB%E9%A2%86%E5%85%BB%E8%87%B3%E5%8A%A0%E6%8B%BF%E5%A4%A7%E5%8F%88%E9%81%AD%E9%81%97%E5%BC%83%23) `839.7K 🔥` `+154%`
1. [伊朗正式回应美国15点停火协议](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%AD%A3%E5%BC%8F%E5%9B%9E%E5%BA%94%E7%BE%8E%E5%9B%BD15%E7%82%B9%E5%81%9C%E7%81%AB%E5%8D%8F%E8%AE%AE%23) `554.7K 🔥` `+197%`
1. [央视新闻夸了张凌赫雉鸡翎造型 (CCTV News praised Zhang Linghe’s pheasant feather appearance)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A7%86%E6%96%B0%E9%97%BB%E5%A4%B8%E4%BA%86%E5%BC%A0%E5%87%8C%E8%B5%AB%E9%9B%89%E9%B8%A1%E7%BF%8E%E9%80%A0%E5%9E%8B%23) `397.6K 🔥` `+40%`
1. [女子因停车争吵身亡家属索赔122万](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%A0%E5%81%9C%E8%BD%A6%E4%BA%89%E5%90%B5%E8%BA%AB%E4%BA%A1%E5%AE%B6%E5%B1%9E%E7%B4%A2%E8%B5%94122%E4%B8%87%23) `310.2K 🔥` `+46%`
1. [小孩哥淘到疑似日军细菌战账单 (Brother Kid found a suspected Japanese military germ warfare bill)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%AD%A9%E5%93%A5%E6%B7%98%E5%88%B0%E7%96%91%E4%BC%BC%E6%97%A5%E5%86%9B%E7%BB%86%E8%8F%8C%E6%88%98%E8%B4%A6%E5%8D%95%23) `286.9K 🔥` `+237%`
1. [杨笠的脑子转得太快了](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%AC%A0%E7%9A%84%E8%84%91%E5%AD%90%E8%BD%AC%E5%BE%97%E5%A4%AA%E5%BF%AB%E4%BA%86%23) `177.7K 🔥` `+40%`
1. [全国猪价已跌破5元](https://s.weibo.com/weibo?q=%23%E5%85%A8%E5%9B%BD%E7%8C%AA%E4%BB%B7%E5%B7%B2%E8%B7%8C%E7%A0%B45%E5%85%83%23) `167.5K 🔥` `+35%`
1. [日本6.4级地震](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC6.4%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `115.3K 🔥` `+35%`
1. [白敬亭郑合惠子互动](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%95%AC%E4%BA%AD%E9%83%91%E5%90%88%E6%83%A0%E5%AD%90%E4%BA%92%E5%8A%A8%23) `107.8K 🔥` `+53%`
1. [一笑随歌 (Smile and sing)](https://s.weibo.com/weibo?q=%23%E4%B8%80%E7%AC%91%E9%9A%8F%E6%AD%8C%23) `75.1K 🔥` `+50%`
1. [伊朗击落美军F18战机画面](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%87%BB%E8%90%BD%E7%BE%8E%E5%86%9BF18%E6%88%98%E6%9C%BA%E7%94%BB%E9%9D%A2%23) `72.1K 🔥` `+32%`
1. [2026中国网络媒体论坛 (2026 China Online Media Forum)](https://s.weibo.com/weibo?q=%232026%E4%B8%AD%E5%9B%BD%E7%BD%91%E7%BB%9C%E5%AA%92%E4%BD%93%E8%AE%BA%E5%9D%9B%23) `669.0K 🔥`
1. [没认出来这是王子异](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E8%AE%A4%E5%87%BA%E6%9D%A5%E8%BF%99%E6%98%AF%E7%8E%8B%E5%AD%90%E5%BC%82%23) `196.0K 🔥`
1. [逐玉谢征吸长玉锁骨](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E8%B0%A2%E5%BE%81%E5%90%B8%E9%95%BF%E7%8E%89%E9%94%81%E9%AA%A8%23) `180.6K 🔥`
1. [Crisp怒喷Kanavi (Crisp angrily blasts Kanavi)](https://s.weibo.com/weibo?q=%23Crisp%E6%80%92%E5%96%B7Kanavi%23) `168.2K 🔥`
1. [罗技侮辱消费者 (Logitech insults consumers)](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%8A%80%E4%BE%AE%E8%BE%B1%E6%B6%88%E8%B4%B9%E8%80%85%23) `167.6K 🔥`
1. [谢征樊长玉被窝戏删掉了](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%BE%81%E6%A8%8A%E9%95%BF%E7%8E%89%E8%A2%AB%E7%AA%9D%E6%88%8F%E5%88%A0%E6%8E%89%E4%BA%86%23) `147.9K 🔥`
1. [医院回应女婴刚出生一天没有肛门 (The hospital responded that the baby girl had no anus just one day after birth)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%A9%B4%E5%88%9A%E5%87%BA%E7%94%9F%E4%B8%80%E5%A4%A9%E6%B2%A1%E6%9C%89%E8%82%9B%E9%97%A8%23) `134.5K 🔥`
1. [孟子义李昀锐装不熟](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E8%A3%85%E4%B8%8D%E7%86%9F%23) `127.6K 🔥`
1. [林俊杰称自己生命的沙漏加速了 (JJ Lin said the hourglass of his life has accelerated)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BF%8A%E6%9D%B0%E7%A7%B0%E8%87%AA%E5%B7%B1%E7%94%9F%E5%91%BD%E7%9A%84%E6%B2%99%E6%BC%8F%E5%8A%A0%E9%80%9F%E4%BA%86%23) `111.1K 🔥`
1. [熬夜到哪种程度可能会猝死](https://s.weibo.com/weibo?q=%23%E7%86%AC%E5%A4%9C%E5%88%B0%E5%93%AA%E7%A7%8D%E7%A8%8B%E5%BA%A6%E5%8F%AF%E8%83%BD%E4%BC%9A%E7%8C%9D%E6%AD%BB%23) `72.1K 🔥`
1. [LPL进入大回归时代](https://s.weibo.com/weibo?q=%23LPL%E8%BF%9B%E5%85%A5%E5%A4%A7%E5%9B%9E%E5%BD%92%E6%97%B6%E4%BB%A3%23) `71.7K 🔥`
1. [游客因拍照设备太专业被景区驱赶 (Tourists were driven away from scenic spots because their photography equipment was too professional)](https://s.weibo.com/weibo?q=%23%E6%B8%B8%E5%AE%A2%E5%9B%A0%E6%8B%8D%E7%85%A7%E8%AE%BE%E5%A4%87%E5%A4%AA%E4%B8%93%E4%B8%9A%E8%A2%AB%E6%99%AF%E5%8C%BA%E9%A9%B1%E8%B5%B6%23) `192.4K 🔥` `-80%`
1. [马杜罗夫妇关押地如同人间炼狱 (The place where Maduro and his wife are being held is like hell on earth)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%9D%9C%E7%BD%97%E5%A4%AB%E5%A6%87%E5%85%B3%E6%8A%BC%E5%9C%B0%E5%A6%82%E5%90%8C%E4%BA%BA%E9%97%B4%E7%82%BC%E7%8B%B1%23) `180.5K 🔥` `-56%`
1. [这样的民族败类必将被钉在历史耻辱柱上 (Such national scum will surely be nailed to the pillar of historical shame.)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%A0%B7%E7%9A%84%E6%B0%91%E6%97%8F%E8%B4%A5%E7%B1%BB%E5%BF%85%E5%B0%86%E8%A2%AB%E9%92%89%E5%9C%A8%E5%8E%86%E5%8F%B2%E8%80%BB%E8%BE%B1%E6%9F%B1%E4%B8%8A%23) `104.5K 🔥` `-85%`
1. [罗技回应发布侮辱性广告 (Logitech responds to release of insulting ad)](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%8A%80%E5%9B%9E%E5%BA%94%E5%8F%91%E5%B8%83%E4%BE%AE%E8%BE%B1%E6%80%A7%E5%B9%BF%E5%91%8A%23) `88.4K 🔥` `-54%`
1. [38岁教培创始人突发心梗后怕不已 (The 38-year-old education and training founder was frightened after suffering a heart attack)](https://s.weibo.com/weibo?q=%2338%E5%B2%81%E6%95%99%E5%9F%B9%E5%88%9B%E5%A7%8B%E4%BA%BA%E7%AA%81%E5%8F%91%E5%BF%83%E6%A2%97%E5%90%8E%E6%80%95%E4%B8%8D%E5%B7%B2%23) `83.4K 🔥` `-61%`
1. [韩国垃圾袋一袋难求](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%9E%83%E5%9C%BE%E8%A2%8B%E4%B8%80%E8%A2%8B%E9%9A%BE%E6%B1%82%23) `80.5K 🔥` `-43%`
1. [陈飞宇迪丽热巴两集短剧 (Chen Feiyu and Dilireba two-episode short drama)](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%A3%9E%E5%AE%87%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E4%B8%A4%E9%9B%86%E7%9F%AD%E5%89%A7%23) `78.1K 🔥` `-39%`

Updated at 2026-03-27 09:01:46

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
