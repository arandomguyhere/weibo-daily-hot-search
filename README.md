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

1. [网警提醒规避考研查分陷阱 (Internet police remind you to avoid the trap of postgraduate entrance examination score checking)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E8%AD%A6%E6%8F%90%E9%86%92%E8%A7%84%E9%81%BF%E8%80%83%E7%A0%94%E6%9F%A5%E5%88%86%E9%99%B7%E9%98%B1%23) `1.2M 🔥` `NEW`
1. [伊朗导弹击中以军总参谋部](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%BC%E5%BC%B9%E5%87%BB%E4%B8%AD%E4%BB%A5%E5%86%9B%E6%80%BB%E5%8F%82%E8%B0%8B%E9%83%A8%23) `485.0K 🔥` `NEW`
1. [寿星千万种海底捞都宠](https://s.weibo.com/weibo?q=%23%E5%AF%BF%E6%98%9F%E5%8D%83%E4%B8%87%E7%A7%8D%E6%B5%B7%E5%BA%95%E6%8D%9E%E9%83%BD%E5%AE%A0%23) `392.4K 🔥` `NEW`
1. [孙颖莎vs陈熠](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8Evs%E9%99%88%E7%86%A0%23) `391.4K 🔥` `NEW`
1. [烤香蕉](https://s.weibo.com/weibo?q=%23%E7%83%A4%E9%A6%99%E8%95%89%23) `363.9K 🔥` `NEW`
1. [28岁男子性格淡漠误诊精分治疗2年](https://s.weibo.com/weibo?q=%2328%E5%B2%81%E7%94%B7%E5%AD%90%E6%80%A7%E6%A0%BC%E6%B7%A1%E6%BC%A0%E8%AF%AF%E8%AF%8A%E7%B2%BE%E5%88%86%E6%B2%BB%E7%96%972%E5%B9%B4%23) `350.3K 🔥` `NEW`
1. [杨幂 得罪就得罪吧](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%20%E5%BE%97%E7%BD%AA%E5%B0%B1%E5%BE%97%E7%BD%AA%E5%90%A7%23) `333.9K 🔥` `NEW`
1. [反美领袖哈梅内伊的一生](https://s.weibo.com/weibo?q=%23%E5%8F%8D%E7%BE%8E%E9%A2%86%E8%A2%96%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E7%9A%84%E4%B8%80%E7%94%9F%23) `287.0K 🔥` `NEW`
1. [苏新皓抢到TOP专辑了](https://s.weibo.com/weibo?q=%23%E8%8B%8F%E6%96%B0%E7%9A%93%E6%8A%A2%E5%88%B0TOP%E4%B8%93%E8%BE%91%E4%BA%86%23) `214.5K 🔥` `NEW`
1. [携程回应大马士革到上海机票550万](https://s.weibo.com/weibo?q=%23%E6%90%BA%E7%A8%8B%E5%9B%9E%E5%BA%94%E5%A4%A7%E9%A9%AC%E5%A3%AB%E9%9D%A9%E5%88%B0%E4%B8%8A%E6%B5%B7%E6%9C%BA%E7%A5%A8550%E4%B8%87%23) `213.7K 🔥` `NEW`
1. [陈妍希状态满40减20 (Michelle Chen gets 20 off if her status reaches 40)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E7%8A%B6%E6%80%81%E6%BB%A140%E5%87%8F20%23) `208.4K 🔥` `NEW`
1. [女子感觉金手镯变轻报警前男友自首](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%84%9F%E8%A7%89%E9%87%91%E6%89%8B%E9%95%AF%E5%8F%98%E8%BD%BB%E6%8A%A5%E8%AD%A6%E5%89%8D%E7%94%B7%E5%8F%8B%E8%87%AA%E9%A6%96%23) `205.8K 🔥` `NEW`
1. [中国人民永远都要保持居安思危的清醒](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91%E6%B0%B8%E8%BF%9C%E9%83%BD%E8%A6%81%E4%BF%9D%E6%8C%81%E5%B1%85%E5%AE%89%E6%80%9D%E5%8D%B1%E7%9A%84%E6%B8%85%E9%86%92%23) `199.1K 🔥` `NEW`
1. [EXO参加金俊勉哥哥婚礼](https://s.weibo.com/weibo?q=%23EXO%E5%8F%82%E5%8A%A0%E9%87%91%E4%BF%8A%E5%8B%89%E5%93%A5%E5%93%A5%E5%A9%9A%E7%A4%BC%23) `153.5K 🔥` `NEW`
1. [峡谷元宵乐](https://s.weibo.com/weibo?q=%23%E5%B3%A1%E8%B0%B7%E5%85%83%E5%AE%B5%E4%B9%90%23) `122.2K 🔥` `NEW`
1. [王曼昱晋级新加坡大满贯决赛](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E6%99%8B%E7%BA%A7%E6%96%B0%E5%8A%A0%E5%9D%A1%E5%A4%A7%E6%BB%A1%E8%B4%AF%E5%86%B3%E8%B5%9B%23) `117.6K 🔥` `NEW`
1. [伊朗确认继任者后或将扩大反击](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A1%AE%E8%AE%A4%E7%BB%A7%E4%BB%BB%E8%80%85%E5%90%8E%E6%88%96%E5%B0%86%E6%89%A9%E5%A4%A7%E5%8F%8D%E5%87%BB%23) `117.3K 🔥` `NEW`
1. [女孩自拍被吐槽长得吓人](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E8%87%AA%E6%8B%8D%E8%A2%AB%E5%90%90%E6%A7%BD%E9%95%BF%E5%BE%97%E5%90%93%E4%BA%BA%23) `116.2K 🔥` `NEW`
1. [女童投喂狮子被拖曳涉事动物园停业](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%AB%A5%E6%8A%95%E5%96%82%E7%8B%AE%E5%AD%90%E8%A2%AB%E6%8B%96%E6%9B%B3%E6%B6%89%E4%BA%8B%E5%8A%A8%E7%89%A9%E5%9B%AD%E5%81%9C%E4%B8%9A%23) `111.5K 🔥` `NEW`
1. [王曼昱15比13温特](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B115%E6%AF%9413%E6%B8%A9%E7%89%B9%23) `93.9K 🔥` `NEW`
1. [新加坡机场偶遇贺峻霖 (Encountering He Junlin at Singapore Airport)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8A%A0%E5%9D%A1%E6%9C%BA%E5%9C%BA%E5%81%B6%E9%81%87%E8%B4%BA%E5%B3%BB%E9%9C%96%23) `83.1K 🔥` `NEW`
1. [何炅王嘉尔顺手给刘宪华改名](https://s.weibo.com/weibo?q=%23%E4%BD%95%E7%82%85%E7%8E%8B%E5%98%89%E5%B0%94%E9%A1%BA%E6%89%8B%E7%BB%99%E5%88%98%E5%AE%AA%E5%8D%8E%E6%94%B9%E5%90%8D%23) `74.4K 🔥` `NEW`
1. [小米徕卡联名新机海外售价16000元](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E5%BE%95%E5%8D%A1%E8%81%94%E5%90%8D%E6%96%B0%E6%9C%BA%E6%B5%B7%E5%A4%96%E5%94%AE%E4%BB%B716000%E5%85%83%23) `73.2K 🔥` `NEW`
1. [家属单位楼里藏了个别墅](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E5%B1%9E%E5%8D%95%E4%BD%8D%E6%A5%BC%E9%87%8C%E8%97%8F%E4%BA%86%E4%B8%AA%E5%88%AB%E5%A2%85%23) `401.9K 🔥` `+200%`
1. [有人凌晨蹲点退税退了3万多 (Someone stayed early in the morning to get a tax refund and got a refund of more than 30,000 yuan)](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%BA%E5%87%8C%E6%99%A8%E8%B9%B2%E7%82%B9%E9%80%80%E7%A8%8E%E9%80%80%E4%BA%863%E4%B8%87%E5%A4%9A%23) `1.4M 🔥`
1. [李健巡演官宣](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%81%A5%E5%B7%A1%E6%BC%94%E5%AE%98%E5%AE%A3%23) `385.5K 🔥`
1. [椰树 追求胸大是让婴儿有奶吃 (Coconut tree pursues big breasts so that the baby can have milk to drink)](https://s.weibo.com/weibo?q=%23%E6%A4%B0%E6%A0%91%20%E8%BF%BD%E6%B1%82%E8%83%B8%E5%A4%A7%E6%98%AF%E8%AE%A9%E5%A9%B4%E5%84%BF%E6%9C%89%E5%A5%B6%E5%90%83%23) `317.8K 🔥`
1. [迪丽热巴3月份行程图 (Dilireba’s itinerary in March)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B43%E6%9C%88%E4%BB%BD%E8%A1%8C%E7%A8%8B%E5%9B%BE%23) `229.0K 🔥`
1. [美军公布对伊朗行动视频](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E5%85%AC%E5%B8%83%E5%AF%B9%E4%BC%8A%E6%9C%97%E8%A1%8C%E5%8A%A8%E8%A7%86%E9%A2%91%23) `129.2K 🔥`
1. [超过25岁就不适合劝分了](https://s.weibo.com/weibo?q=%23%E8%B6%85%E8%BF%8725%E5%B2%81%E5%B0%B1%E4%B8%8D%E9%80%82%E5%90%88%E5%8A%9D%E5%88%86%E4%BA%86%23) `108.9K 🔥`
1. [美以袭击致伊朗201人死747人伤](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BB%A5%E8%A2%AD%E5%87%BB%E8%87%B4%E4%BC%8A%E6%9C%97201%E4%BA%BA%E6%AD%BB747%E4%BA%BA%E4%BC%A4%23) `104.5K 🔥`
1. [王安宇 季总点天灯吗](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%20%E5%AD%A3%E6%80%BB%E7%82%B9%E5%A4%A9%E7%81%AF%E5%90%97%23) `91.0K 🔥`
1. [哈梅内伊遇害 (Khamenei killed)](https://s.weibo.com/weibo?q=%23%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E9%81%87%E5%AE%B3%23) `6.3M 🔥` `-25%`
1. [撞人族已成为日本全国性问题](https://s.weibo.com/weibo?q=%23%E6%92%9E%E4%BA%BA%E6%97%8F%E5%B7%B2%E6%88%90%E4%B8%BA%E6%97%A5%E6%9C%AC%E5%85%A8%E5%9B%BD%E6%80%A7%E9%97%AE%E9%A2%98%23) `413.7K 🔥` `-51%`
1. [哈梅内伊的女儿女婿等遇难 (Khamenei’s daughter and son-in-law were killed)](https://s.weibo.com/weibo?q=%23%E5%93%88%E6%A2%85%E5%86%85%E4%BC%8A%E7%9A%84%E5%A5%B3%E5%84%BF%E5%A5%B3%E5%A9%BF%E7%AD%89%E9%81%87%E9%9A%BE%23) `328.5K 🔥` `-54%`
1. [伊朗政府宣布40天全国哀悼](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%94%BF%E5%BA%9C%E5%AE%A3%E5%B8%8340%E5%A4%A9%E5%85%A8%E5%9B%BD%E5%93%80%E6%82%BC%23) `224.2K 🔥` `-31%`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `201.0K 🔥` `-34%`
1. [杨紫爱自己少吃多睡戒色 (Yang Zi loves herself to eat less, sleep more and reboot)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E7%88%B1%E8%87%AA%E5%B7%B1%E5%B0%91%E5%90%83%E5%A4%9A%E7%9D%A1%E6%88%92%E8%89%B2%23) `196.4K 🔥` `-29%`
1. [伊朗3场世界杯小组赛都在美国球场踢](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%973%E5%9C%BA%E4%B8%96%E7%95%8C%E6%9D%AF%E5%B0%8F%E7%BB%84%E8%B5%9B%E9%83%BD%E5%9C%A8%E7%BE%8E%E5%9B%BD%E7%90%83%E5%9C%BA%E8%B8%A2%23) `160.1K 🔥` `-27%`
1. [迪丽热巴第一语言不是汉语](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%AC%AC%E4%B8%80%E8%AF%AD%E8%A8%80%E4%B8%8D%E6%98%AF%E6%B1%89%E8%AF%AD%23) `150.9K 🔥` `-27%`
1. [桃黑黑秒下播](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E7%A7%92%E4%B8%8B%E6%92%AD%23) `144.6K 🔥` `-54%`
1. [婴儿肚皮开裂多器官裸露环绕在外 (The baby's belly is cracked and many organs are exposed)](https://s.weibo.com/weibo?q=%23%E5%A9%B4%E5%84%BF%E8%82%9A%E7%9A%AE%E5%BC%80%E8%A3%82%E5%A4%9A%E5%99%A8%E5%AE%98%E8%A3%B8%E9%9C%B2%E7%8E%AF%E7%BB%95%E5%9C%A8%E5%A4%96%23) `116.8K 🔥` `-28%`
1. [国防部回应美方指责中方](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E9%98%B2%E9%83%A8%E5%9B%9E%E5%BA%94%E7%BE%8E%E6%96%B9%E6%8C%87%E8%B4%A3%E4%B8%AD%E6%96%B9%23) `95.9K 🔥` `-70%`
1. [中方呼吁军事行动立即停止](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%91%BC%E5%90%81%E5%86%9B%E4%BA%8B%E8%A1%8C%E5%8A%A8%E7%AB%8B%E5%8D%B3%E5%81%9C%E6%AD%A2%23) `95.8K 🔥` `-50%`
1. [A股行情](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E8%A1%8C%E6%83%85%23) `83.9K 🔥` `-27%`
1. [你是张栋梁那他是谁](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%98%AF%E5%BC%A0%E6%A0%8B%E6%A2%81%E9%82%A3%E4%BB%96%E6%98%AF%E8%B0%81%23) `81.9K 🔥` `-61%`
1. [退税 (tax refund)](https://s.weibo.com/weibo?q=%23%E9%80%80%E7%A8%8E%23) `80.8K 🔥` `-37%`
1. [天官赐福全新动画内容 (God bless new animated content)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%AE%98%E8%B5%90%E7%A6%8F%E5%85%A8%E6%96%B0%E5%8A%A8%E7%94%BB%E5%86%85%E5%AE%B9%23) `78.8K 🔥` `-28%`
1. [18岁少女感染HPV多种高危型号](https://s.weibo.com/weibo?q=%2318%E5%B2%81%E5%B0%91%E5%A5%B3%E6%84%9F%E6%9F%93HPV%E5%A4%9A%E7%A7%8D%E9%AB%98%E5%8D%B1%E5%9E%8B%E5%8F%B7%23) `72.1K 🔥` `-70%`
1. [中方说谈判之际美以袭击令人震惊](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E8%AF%B4%E8%B0%88%E5%88%A4%E4%B9%8B%E9%99%85%E7%BE%8E%E4%BB%A5%E8%A2%AD%E5%87%BB%E4%BB%A4%E4%BA%BA%E9%9C%87%E6%83%8A%23) `72.0K 🔥` `-45%`

Updated at 2026-03-01 13:39:19

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
