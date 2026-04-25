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

1. [数读一季度消费市场成绩单 (A digital reading of the consumer market report card for the first quarter)](https://s.weibo.com/weibo?q=%23%E6%95%B0%E8%AF%BB%E4%B8%80%E5%AD%A3%E5%BA%A6%E6%B6%88%E8%B4%B9%E5%B8%82%E5%9C%BA%E6%88%90%E7%BB%A9%E5%8D%95%23) `523.1K 🔥` `NEW`
1. [东风奕派携华为乾崑年内上新3车](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%A3%8E%E5%A5%95%E6%B4%BE%E6%90%BA%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91%E5%B9%B4%E5%86%85%E4%B8%8A%E6%96%B03%E8%BD%A6%23) `388.3K 🔥` `NEW`
1. [得知胎儿色盲孕晚期女子称害了孩子](https://s.weibo.com/weibo?q=%23%E5%BE%97%E7%9F%A5%E8%83%8E%E5%84%BF%E8%89%B2%E7%9B%B2%E5%AD%95%E6%99%9A%E6%9C%9F%E5%A5%B3%E5%AD%90%E7%A7%B0%E5%AE%B3%E4%BA%86%E5%AD%A9%E5%AD%90%23) `96.9K 🔥` `NEW`
1. [明日方舟](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%23) `95.0K 🔥` `NEW`
1. [建议大家衣服不要攒一起洗](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E8%A1%A3%E6%9C%8D%E4%B8%8D%E8%A6%81%E6%94%92%E4%B8%80%E8%B5%B7%E6%B4%97%23) `93.7K 🔥` `NEW`
1. [洗头发油慢的小方法](https://s.weibo.com/weibo?q=%23%E6%B4%97%E5%A4%B4%E5%8F%91%E6%B2%B9%E6%85%A2%E7%9A%84%E5%B0%8F%E6%96%B9%E6%B3%95%23) `92.3K 🔥` `NEW`
1. [39岁的横店戏王为何无戏可拍](https://s.weibo.com/weibo?q=%2339%E5%B2%81%E7%9A%84%E6%A8%AA%E5%BA%97%E6%88%8F%E7%8E%8B%E4%B8%BA%E4%BD%95%E6%97%A0%E6%88%8F%E5%8F%AF%E6%8B%8D%23) `77.6K 🔥` `NEW`
1. [斯诺克](https://s.weibo.com/weibo?q=%23%E6%96%AF%E8%AF%BA%E5%85%8B%23) `73.1K 🔥` `NEW`
1. [曾沛慈听到者来女淘汰爆哭](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E5%90%AC%E5%88%B0%E8%80%85%E6%9D%A5%E5%A5%B3%E6%B7%98%E6%B1%B0%E7%88%86%E5%93%AD%23) `72.9K 🔥` `NEW`
1. [剑来](https://s.weibo.com/weibo?q=%23%E5%89%91%E6%9D%A5%23) `68.2K 🔥` `NEW`
1. [丁俊晖vs赵心童第三阶段 (Ding Junhui vs Zhao Xintong third stage)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E4%BF%8A%E6%99%96vs%E8%B5%B5%E5%BF%83%E7%AB%A5%E7%AC%AC%E4%B8%89%E9%98%B6%E6%AE%B5%23) `67.1K 🔥` `NEW`
1. [拒绝退役军人如厕后续调查](https://s.weibo.com/weibo?q=%23%E6%8B%92%E7%BB%9D%E9%80%80%E5%BD%B9%E5%86%9B%E4%BA%BA%E5%A6%82%E5%8E%95%E5%90%8E%E7%BB%AD%E8%B0%83%E6%9F%A5%23) `65.7K 🔥` `NEW`
1. [中国乒乓运动员张缤月参加MLTT选秀](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%B9%92%E4%B9%93%E8%BF%90%E5%8A%A8%E5%91%98%E5%BC%A0%E7%BC%A4%E6%9C%88%E5%8F%82%E5%8A%A0MLTT%E9%80%89%E7%A7%80%23) `62.3K 🔥` `NEW`
1. [张慧雯一张嘴我就知道开麦了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%85%A7%E9%9B%AF%E4%B8%80%E5%BC%A0%E5%98%B4%E6%88%91%E5%B0%B1%E7%9F%A5%E9%81%93%E5%BC%80%E9%BA%A6%E4%BA%86%23) `57.9K 🔥` `NEW`
1. [曝金泰梨区别对待中粉](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E9%87%91%E6%B3%B0%E6%A2%A8%E5%8C%BA%E5%88%AB%E5%AF%B9%E5%BE%85%E4%B8%AD%E7%B2%89%23) `57.0K 🔥` `NEW`
1. [阿森纳vs纽卡斯尔联](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A3%AE%E7%BA%B3vs%E7%BA%BD%E5%8D%A1%E6%96%AF%E5%B0%94%E8%81%94%23) `50.4K 🔥` `NEW`
1. [副所长为完成任务设计让6人吸毒](https://s.weibo.com/weibo?q=%23%E5%89%AF%E6%89%80%E9%95%BF%E4%B8%BA%E5%AE%8C%E6%88%90%E4%BB%BB%E5%8A%A1%E8%AE%BE%E8%AE%A1%E8%AE%A96%E4%BA%BA%E5%90%B8%E6%AF%92%23) `919.1K 🔥` `+61%`
1. [美伊停火谈判 (US-Iran ceasefire negotiations)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%81%9C%E7%81%AB%E8%B0%88%E5%88%A4%23) `662.7K 🔥` `+1102%`
1. [齐思钧表情](https://s.weibo.com/weibo?q=%23%E9%BD%90%E6%80%9D%E9%92%A7%E8%A1%A8%E6%83%85%23) `384.1K 🔥` `+49%`
1. [东方甄选明明离职原因 (Oriental Selection’s clear reason for resignation)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E6%98%8E%E6%98%8E%E7%A6%BB%E8%81%8C%E5%8E%9F%E5%9B%A0%23) `229.7K 🔥` `+38%`
1. [者来女淘汰 (Whoever comes, the female will be eliminated)](https://s.weibo.com/weibo?q=%23%E8%80%85%E6%9D%A5%E5%A5%B3%E6%B7%98%E6%B1%B0%23) `228.2K 🔥` `+51%`
1. [被减肥背刺了](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E5%87%8F%E8%82%A5%E8%83%8C%E5%88%BA%E4%BA%86%23) `195.3K 🔥` `+77%`
1. [李小冉短短两周经历了什么](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E7%9F%AD%E7%9F%AD%E4%B8%A4%E5%91%A8%E7%BB%8F%E5%8E%86%E4%BA%86%E4%BB%80%E4%B9%88%23) `97.7K 🔥` `+26%`
1. [谢娜哭了 (Xie Na cried)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%93%AD%E4%BA%86%23) `96.8K 🔥` `+35%`
1. [断绝孩子手机上瘾最快的偏方 (The fastest way to stop your child’s cell phone addiction)](https://s.weibo.com/weibo?q=%23%E6%96%AD%E7%BB%9D%E5%AD%A9%E5%AD%90%E6%89%8B%E6%9C%BA%E4%B8%8A%E7%98%BE%E6%9C%80%E5%BF%AB%E7%9A%84%E5%81%8F%E6%96%B9%23) `95.9K 🔥` `+40%`
1. [王濛吐槽李小冉 (Wang Meng complained about Li Xiaoran)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E5%90%90%E6%A7%BD%E6%9D%8E%E5%B0%8F%E5%86%89%23) `95.6K 🔥` `+37%`
1. [李昀锐连孟子义名字都不提 (Li Yunrui didn’t even mention Meng Ziyi’s name)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E8%BF%9E%E5%AD%9F%E5%AD%90%E4%B9%89%E5%90%8D%E5%AD%97%E9%83%BD%E4%B8%8D%E6%8F%90%23) `95.3K 🔥` `+27%`
1. [东方甄选中灿官宣离职 (Can Guan announced his resignation from Oriental Screening)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E6%96%B9%E7%94%84%E9%80%89%E4%B8%AD%E7%81%BF%E5%AE%98%E5%AE%A3%E7%A6%BB%E8%81%8C%23) `94.3K 🔥` `+71%`
1. [青岛警方致歉 (Qingdao police apologize)](https://s.weibo.com/weibo?q=%23%E9%9D%92%E5%B2%9B%E8%AD%A6%E6%96%B9%E8%87%B4%E6%AD%89%23) `94.2K 🔥` `+28%`
1. [范丞丞你要毁了李昀锐吗](https://s.weibo.com/weibo?q=%23%E8%8C%83%E4%B8%9E%E4%B8%9E%E4%BD%A0%E8%A6%81%E6%AF%81%E4%BA%86%E6%9D%8E%E6%98%80%E9%94%90%E5%90%97%23) `89.5K 🔥` `+29%`
1. [中国超70%石油靠进口却不慌](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%B6%8570%25%E7%9F%B3%E6%B2%B9%E9%9D%A0%E8%BF%9B%E5%8F%A3%E5%8D%B4%E4%B8%8D%E6%85%8C%23) `72.3K 🔥` `+31%`
1. [16岁高中生或发现侵华日军新罪证](https://s.weibo.com/weibo?q=%2316%E5%B2%81%E9%AB%98%E4%B8%AD%E7%94%9F%E6%88%96%E5%8F%91%E7%8E%B0%E4%BE%B5%E5%8D%8E%E6%97%A5%E5%86%9B%E6%96%B0%E7%BD%AA%E8%AF%81%23) `125.3K 🔥`
1. [五一原来是放假七天的 (It turned out that May Day was a seven-day holiday.)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%8E%9F%E6%9D%A5%E6%98%AF%E6%94%BE%E5%81%87%E4%B8%83%E5%A4%A9%E7%9A%84%23) `97.8K 🔥`
1. [秦昊马頔孙丞潇都在点孙杨了 (Qin Hao, Ma Di, and Sun Chengxiao are all ordering Sun Yang)](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E6%98%8A%E9%A9%AC%E9%A0%94%E5%AD%99%E4%B8%9E%E6%BD%87%E9%83%BD%E5%9C%A8%E7%82%B9%E5%AD%99%E6%9D%A8%E4%BA%86%23) `96.0K 🔥`
1. [人生是一场巨大的后知后觉 (Life is a huge hindsight)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%94%9F%E6%98%AF%E4%B8%80%E5%9C%BA%E5%B7%A8%E5%A4%A7%E7%9A%84%E5%90%8E%E7%9F%A5%E5%90%8E%E8%A7%89%23) `85.0K 🔥`
1. [张慧雯跑了一整个舞台去拥抱者来女](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%85%A7%E9%9B%AF%E8%B7%91%E4%BA%86%E4%B8%80%E6%95%B4%E4%B8%AA%E8%88%9E%E5%8F%B0%E5%8E%BB%E6%8B%A5%E6%8A%B1%E8%80%85%E6%9D%A5%E5%A5%B3%23) `79.5K 🔥`
1. [香港最强控烟令没有首次免罚 (Hong Kong’s strongest smoking control law does not exempt fines for the first time)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E6%B8%AF%E6%9C%80%E5%BC%BA%E6%8E%A7%E7%83%9F%E4%BB%A4%E6%B2%A1%E6%9C%89%E9%A6%96%E6%AC%A1%E5%85%8D%E7%BD%9A%23) `65.9K 🔥`
1. [杨紫在片场跳了误闯天家 (Yang Zi jumped on the set and accidentally broke into Tianjia)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E5%9C%A8%E7%89%87%E5%9C%BA%E8%B7%B3%E4%BA%86%E8%AF%AF%E9%97%AF%E5%A4%A9%E5%AE%B6%23) `64.7K 🔥`
1. [谭松韵王栎鑫合唱最好的我们](https://s.weibo.com/weibo?q=%23%E8%B0%AD%E6%9D%BE%E9%9F%B5%E7%8E%8B%E6%A0%8E%E9%91%AB%E5%90%88%E5%94%B1%E6%9C%80%E5%A5%BD%E7%9A%84%E6%88%91%E4%BB%AC%23) `63.7K 🔥`
1. [曾沛慈一直在修音响 (Zeng Peici has been repairing speakers)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E4%B8%80%E7%9B%B4%E5%9C%A8%E4%BF%AE%E9%9F%B3%E5%93%8D%23) `60.9K 🔥`
1. [这周唐艺昕一个人站岗](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%91%A8%E5%94%90%E8%89%BA%E6%98%95%E4%B8%80%E4%B8%AA%E4%BA%BA%E7%AB%99%E5%B2%97%23) `57.9K 🔥`
1. [五一快点来我撑不住了](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%BF%AB%E7%82%B9%E6%9D%A5%E6%88%91%E6%92%91%E4%B8%8D%E4%BD%8F%E4%BA%86%23) `57.9K 🔥`
1. [伊朗武装部队强硬回应美军](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%AD%A6%E8%A3%85%E9%83%A8%E9%98%9F%E5%BC%BA%E7%A1%AC%E5%9B%9E%E5%BA%94%E7%BE%8E%E5%86%9B%23) `53.4K 🔥`
1. [刘诗诗天坛女神 (Liu Shishi Temple of Heaven goddess)](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E5%A4%A9%E5%9D%9B%E5%A5%B3%E7%A5%9E%23) `50.5K 🔥`
1. [失明男子租房每月50元20年没涨 (Blind man rents a house for 50 yuan a month, which hasn't increased in 20 years)](https://s.weibo.com/weibo?q=%23%E5%A4%B1%E6%98%8E%E7%94%B7%E5%AD%90%E7%A7%9F%E6%88%BF%E6%AF%8F%E6%9C%8850%E5%85%8320%E5%B9%B4%E6%B2%A1%E6%B6%A8%23) `50.4K 🔥`
1. [西安一职校学生被同学一刀捅进ICU](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E4%B8%80%E8%81%8C%E6%A0%A1%E5%AD%A6%E7%94%9F%E8%A2%AB%E5%90%8C%E5%AD%A6%E4%B8%80%E5%88%80%E6%8D%85%E8%BF%9BICU%23) `50.4K 🔥`
1. [中方将采取必要措施 (China will take necessary measures)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%B0%86%E9%87%87%E5%8F%96%E5%BF%85%E8%A6%81%E6%8E%AA%E6%96%BD%23) `50.4K 🔥`
1. [明明感谢俞敏洪 (Obviously thank you Yu Minhong)](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%98%8E%E6%84%9F%E8%B0%A2%E4%BF%9E%E6%95%8F%E6%B4%AA%23) `50.3K 🔥`
1. [旅游很多次才知道的事 (Things you only know after traveling many times)](https://s.weibo.com/weibo?q=%23%E6%97%85%E6%B8%B8%E5%BE%88%E5%A4%9A%E6%AC%A1%E6%89%8D%E7%9F%A5%E9%81%93%E7%9A%84%E4%BA%8B%23) `224.3K 🔥` `-47%`
1. [派克特道歉声明 (Parker's apology)](https://s.weibo.com/weibo?q=%23%E6%B4%BE%E5%85%8B%E7%89%B9%E9%81%93%E6%AD%89%E5%A3%B0%E6%98%8E%23) `50.5K 🔥` `-80%`
1. [周杰伦疑2.4亿购入澳百年庄园 (Jay Chou is suspected of buying a century-old estate in Australia for 240 million)](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E7%96%912.4%E4%BA%BF%E8%B4%AD%E5%85%A5%E6%BE%B3%E7%99%BE%E5%B9%B4%E5%BA%84%E5%9B%AD%23) `50.3K 🔥` `-79%`

Updated at 2026-04-26 07:38:10

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
