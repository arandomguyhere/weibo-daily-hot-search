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

1. [蔡徐坤林里全球品牌代言人 (Cai Xukun Linli Global Brand Spokesperson)](https://s.weibo.com/weibo?q=%23%E8%94%A1%E5%BE%90%E5%9D%A4%E6%9E%97%E9%87%8C%E5%85%A8%E7%90%83%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `282.4K 🔥` `NEW`
1. [广西柳州地震已致3人失联](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%9F%B3%E5%B7%9E%E5%9C%B0%E9%9C%87%E5%B7%B2%E8%87%B43%E4%BA%BA%E5%A4%B1%E8%81%94%23) `38.4K 🔥` `NEW`
1. [胖东来回应主动退顾客iPhone差价](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E5%9B%9E%E5%BA%94%E4%B8%BB%E5%8A%A8%E9%80%80%E9%A1%BE%E5%AE%A2iPhone%E5%B7%AE%E4%BB%B7%23) `38.2K 🔥` `NEW`
1. [樊振东欧冠冠军 (Fan Zhendong Champions League Champion)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%AC%A7%E5%86%A0%E5%86%A0%E5%86%9B%23) `620.2K 🔥` `+230%`
1. [家业 磨皮 (Family business microdermabrasion)](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%20%E7%A3%A8%E7%9A%AE%23) `526.4K 🔥` `+175%`
1. [以德润网 (Yiderun.com)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%BE%B7%E6%B6%A6%E7%BD%91%23) `521.7K 🔥` `+171%`
1. [樊振东0比3大勒布伦 (Fan Zhendong 0-3 LeBron)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C0%E6%AF%943%E5%A4%A7%E5%8B%92%E5%B8%83%E4%BC%A6%23) `313.9K 🔥` `+152%`
1. [陈泽](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B3%BD%23) `311.9K 🔥` `+41%`
1. [仇人租到这种房我也释怀了 (I feel relieved that my enemy rented a house like this.)](https://s.weibo.com/weibo?q=%23%E4%BB%87%E4%BA%BA%E7%A7%9F%E5%88%B0%E8%BF%99%E7%A7%8D%E6%88%BF%E6%88%91%E4%B9%9F%E9%87%8A%E6%80%80%E4%BA%86%23) `202.6K 🔥` `+120%`
1. [广西柳州5.2级左右地震 (An earthquake of around 5.2 magnitude occurred in Liuzhou, Guangxi)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E6%9F%B3%E5%B7%9E5.2%E7%BA%A7%E5%B7%A6%E5%8F%B3%E5%9C%B0%E9%9C%87%23) `194.8K 🔥` `+250%`
1. [曝最终版白玉兰男主提名](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9C%80%E7%BB%88%E7%89%88%E7%99%BD%E7%8E%89%E5%85%B0%E7%94%B7%E4%B8%BB%E6%8F%90%E5%90%8D%23) `160.0K 🔥` `+181%`
1. [家业收视率](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%E6%94%B6%E8%A7%86%E7%8E%87%23) `106.9K 🔥` `+115%`
1. [男子拒绝广州调岗山东被炒获赔50万](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8B%92%E7%BB%9D%E5%B9%BF%E5%B7%9E%E8%B0%83%E5%B2%97%E5%B1%B1%E4%B8%9C%E8%A2%AB%E7%82%92%E8%8E%B7%E8%B5%9450%E4%B8%87%23) `103.3K 🔥` `+86%`
1. [八旬老人公交上闭眼休息实则已死亡](https://s.weibo.com/weibo?q=%23%E5%85%AB%E6%97%AC%E8%80%81%E4%BA%BA%E5%85%AC%E4%BA%A4%E4%B8%8A%E9%97%AD%E7%9C%BC%E4%BC%91%E6%81%AF%E5%AE%9E%E5%88%99%E5%B7%B2%E6%AD%BB%E4%BA%A1%23) `97.0K 🔥` `+175%`
1. [欧冠决赛](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A0%E5%86%B3%E8%B5%9B%23) `79.8K 🔥` `+32%`
1. [张雪机车夺得5冠](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%A4%BA%E5%BE%975%E5%86%A0%23) `77.4K 🔥` `+80%`
1. [店员回应降价iPhone17被疯抢 (The store clerk responded to the price reduction and iPhone 17 was snapped up)](https://s.weibo.com/weibo?q=%23%E5%BA%97%E5%91%98%E5%9B%9E%E5%BA%94%E9%99%8D%E4%BB%B7iPhone17%E8%A2%AB%E7%96%AF%E6%8A%A2%23) `69.9K 🔥` `+151%`
1. [和平统一后台湾可获稳定廉价能源 (After peaceful reunification, Taiwan can obtain stable and cheap energy)](https://s.weibo.com/weibo?q=%23%E5%92%8C%E5%B9%B3%E7%BB%9F%E4%B8%80%E5%90%8E%E5%8F%B0%E6%B9%BE%E5%8F%AF%E8%8E%B7%E7%A8%B3%E5%AE%9A%E5%BB%89%E4%BB%B7%E8%83%BD%E6%BA%90%23) `67.9K 🔥` `+99%`
1. [刘浩存穿十厘米高跟鞋定点转圈 (Liu Haocun wears ten centimeter high heels and spins in circles)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E7%A9%BF%E5%8D%81%E5%8E%98%E7%B1%B3%E9%AB%98%E8%B7%9F%E9%9E%8B%E5%AE%9A%E7%82%B9%E8%BD%AC%E5%9C%88%23) `62.5K 🔥` `+122%`
1. [马尔代夫发生史上最严重单次潜水事故](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%B0%94%E4%BB%A3%E5%A4%AB%E5%8F%91%E7%94%9F%E5%8F%B2%E4%B8%8A%E6%9C%80%E4%B8%A5%E9%87%8D%E5%8D%95%E6%AC%A1%E6%BD%9C%E6%B0%B4%E4%BA%8B%E6%95%85%23) `60.4K 🔥` `+76%`
1. [南宁震感](https://s.weibo.com/weibo?q=%23%E5%8D%97%E5%AE%81%E9%9C%87%E6%84%9F%23) `51.3K 🔥` `+54%`
1. [专家称4岁以下穿机能鞋干扰足弓发育 (Experts say wearing functional shoes under 4 years old can interfere with arch development)](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E7%A7%B04%E5%B2%81%E4%BB%A5%E4%B8%8B%E7%A9%BF%E6%9C%BA%E8%83%BD%E9%9E%8B%E5%B9%B2%E6%89%B0%E8%B6%B3%E5%BC%93%E5%8F%91%E8%82%B2%23) `50.1K 🔥` `+70%`
1. [男子连买9副耳机全部申请退货](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%BF%9E%E4%B9%B09%E5%89%AF%E8%80%B3%E6%9C%BA%E5%85%A8%E9%83%A8%E7%94%B3%E8%AF%B7%E9%80%80%E8%B4%A7%23) `44.9K 🔥` `+53%`
1. [成毅两京十五日生贺图 (Cheng Yi's 15th birthday celebrations in Liangjing)](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E4%B8%A4%E4%BA%AC%E5%8D%81%E4%BA%94%E6%97%A5%E7%94%9F%E8%B4%BA%E5%9B%BE%23) `44.4K 🔥` `+61%`
1. [樊振东赛后摇了摇头 (Fan Zhendong shook his head after the game)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%B5%9B%E5%90%8E%E6%91%87%E4%BA%86%E6%91%87%E5%A4%B4%23) `43.1K 🔥` `+44%`
1. [樊振东失2分](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%A4%B12%E5%88%86%23) `39.4K 🔥` `+43%`
1. [主角 神器认主 (The protagonist identifies the owner of the artifact)](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%20%E7%A5%9E%E5%99%A8%E8%AE%A4%E4%B8%BB%23) `39.2K 🔥` `+43%`
1. [亚历山大MVP](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E5%8E%86%E5%B1%B1%E5%A4%A7MVP%23) `39.2K 🔥` `+43%`
1. [家业刚开播豆瓣大量一星](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%E5%88%9A%E5%BC%80%E6%92%AD%E8%B1%86%E7%93%A3%E5%A4%A7%E9%87%8F%E4%B8%80%E6%98%9F%23) `38.4K 🔥` `+40%`
1. [任何关系里都要遵守有客之道 (In any relationship, we must abide by the principle of hospitality)](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E4%BD%95%E5%85%B3%E7%B3%BB%E9%87%8C%E9%83%BD%E8%A6%81%E9%81%B5%E5%AE%88%E6%9C%89%E5%AE%A2%E4%B9%8B%E9%81%93%23) `38.2K 🔥` `+39%`
1. [为啥半夜醒来千万不要看时间](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E5%95%A5%E5%8D%8A%E5%A4%9C%E9%86%92%E6%9D%A5%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E7%9C%8B%E6%97%B6%E9%97%B4%23) `38.2K 🔥` `+36%`
1. [家业](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%23) `38.2K 🔥` `+39%`
1. [主角 (main character)](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E8%A7%92%23) `38.2K 🔥` `+39%`
1. [樊振东vs小勒布伦](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9Cvs%E5%B0%8F%E5%8B%92%E5%B8%83%E4%BC%A6%23) `38.2K 🔥` `+39%`
1. [张雪机车德比斯仅落后榜首19分 (Zhang Xue Motorcycle Derby is only 19 points behind the top spot)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%BE%B7%E6%AF%94%E6%96%AF%E4%BB%85%E8%90%BD%E5%90%8E%E6%A6%9C%E9%A6%9619%E5%88%86%23) `38.2K 🔥` `+39%`
1. [杨紫台词 (Yang Zi's lines)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%8F%B0%E8%AF%8D%23) `38.2K 🔥` `+39%`
1. [穆祉丞戛纳人气](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E6%88%9B%E7%BA%B3%E4%BA%BA%E6%B0%94%23) `38.2K 🔥` `+39%`
1. [广西皮卡坠河9人失联均为女性](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E8%A5%BF%E7%9A%AE%E5%8D%A1%E5%9D%A0%E6%B2%B39%E4%BA%BA%E5%A4%B1%E8%81%94%E5%9D%87%E4%B8%BA%E5%A5%B3%E6%80%A7%23) `38.1K 🔥` `+39%`
1. [樊振东0比3小勒布伦 (Fan Zhendong 0-3 LeBron Jr.)](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C0%E6%AF%943%E5%B0%8F%E5%8B%92%E5%B8%83%E4%BC%A6%23) `38.1K 🔥` `+39%`
1. [欧冠](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A0%23) `38.1K 🔥` `+21%`
1. [杨紫曾被自己的脖子吓到 (Yang Zi was once frightened by her own neck)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%9B%BE%E8%A2%AB%E8%87%AA%E5%B7%B1%E7%9A%84%E8%84%96%E5%AD%90%E5%90%93%E5%88%B0%23) `38.1K 🔥` `+38%`
1. [给阿嬷的情书 (A love letter to grandma)](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%23) `38.1K 🔥` `+39%`
1. [白鹿李昀锐是李晨让牵的](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E6%9D%8E%E6%98%80%E9%94%90%E6%98%AF%E6%9D%8E%E6%99%A8%E8%AE%A9%E7%89%B5%E7%9A%84%23) `38.1K 🔥` `+39%`
1. [萨尔布吕肯欧冠四连冠 (Saarbrücken wins four consecutive Champions League titles)](https://s.weibo.com/weibo?q=%23%E8%90%A8%E5%B0%94%E5%B8%83%E5%90%95%E8%82%AF%E6%AC%A7%E5%86%A0%E5%9B%9B%E8%BF%9E%E5%86%A0%23) `38.1K 🔥` `+39%`
1. [电脑微信会惩罚每一个恋旧的人](https://s.weibo.com/weibo?q=%23%E7%94%B5%E8%84%91%E5%BE%AE%E4%BF%A1%E4%BC%9A%E6%83%A9%E7%BD%9A%E6%AF%8F%E4%B8%80%E4%B8%AA%E6%81%8B%E6%97%A7%E7%9A%84%E4%BA%BA%23) `38.1K 🔥` `+91%`
1. [樊振东vs大勒布伦](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9Cvs%E5%A4%A7%E5%8B%92%E5%B8%83%E4%BC%A6%23) `38.1K 🔥` `+38%`
1. [柳州地震 (Liuzhou earthquake)](https://s.weibo.com/weibo?q=%23%E6%9F%B3%E5%B7%9E%E5%9C%B0%E9%9C%87%23) `520.8K 🔥`
1. [给阿嬷的情书拍得女主直掉眼泪](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E6%8B%8D%E5%BE%97%E5%A5%B3%E4%B8%BB%E7%9B%B4%E6%8E%89%E7%9C%BC%E6%B3%AA%23) `54.2K 🔥`
1. [猫咪躲在阴凉地睡觉进屋瞬间震惊了 (The cat was sleeping in the shade and was shocked when he entered the house.)](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%92%AA%E8%BA%B2%E5%9C%A8%E9%98%B4%E5%87%89%E5%9C%B0%E7%9D%A1%E8%A7%89%E8%BF%9B%E5%B1%8B%E7%9E%AC%E9%97%B4%E9%9C%87%E6%83%8A%E4%BA%86%23) `38.2K 🔥`
1. [以为是被关心了其实是看错了](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E4%B8%BA%E6%98%AF%E8%A2%AB%E5%85%B3%E5%BF%83%E4%BA%86%E5%85%B6%E5%AE%9E%E6%98%AF%E7%9C%8B%E9%94%99%E4%BA%86%23) `41.9K 🔥` `-52%`

Updated at 2026-05-18 06:35:06

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
