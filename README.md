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

1. [白日提灯第28集无广 (Lantern in the Daytime Episode 28 Wu Guang)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%E7%AC%AC28%E9%9B%86%E6%97%A0%E5%B9%BF%23) `226.0K 🔥` `NEW`
1. [张元英看BTS演唱会](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%85%83%E8%8B%B1%E7%9C%8BBTS%E6%BC%94%E5%94%B1%E4%BC%9A%23) `209.8K 🔥` `NEW`
1. [sbti测试爆火](https://s.weibo.com/weibo?q=%23sbti%E6%B5%8B%E8%AF%95%E7%88%86%E7%81%AB%23) `208.4K 🔥` `NEW`
1. [小米YU7GT纽北测试图再曝](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3YU7GT%E7%BA%BD%E5%8C%97%E6%B5%8B%E8%AF%95%E5%9B%BE%E5%86%8D%E6%9B%9D%23) `199.9K 🔥` `NEW`
1. [内娱嘴亲烂了都拍不出这样汹涌的爱意](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E5%98%B4%E4%BA%B2%E7%83%82%E4%BA%86%E9%83%BD%E6%8B%8D%E4%B8%8D%E5%87%BA%E8%BF%99%E6%A0%B7%E6%B1%B9%E6%B6%8C%E7%9A%84%E7%88%B1%E6%84%8F%23) `193.1K 🔥` `NEW`
1. [三个内娱神奇工作室](https://s.weibo.com/weibo?q=%23%E4%B8%89%E4%B8%AA%E5%86%85%E5%A8%B1%E7%A5%9E%E5%A5%87%E5%B7%A5%E4%BD%9C%E5%AE%A4%23) `178.2K 🔥` `NEW`
1. [德系品质藏在大众黄金标准里](https://s.weibo.com/weibo?q=%23%E5%BE%B7%E7%B3%BB%E5%93%81%E8%B4%A8%E8%97%8F%E5%9C%A8%E5%A4%A7%E4%BC%97%E9%BB%84%E9%87%91%E6%A0%87%E5%87%86%E9%87%8C%23) `175.7K 🔥` `NEW`
1. [男子开路虎加油500元后逃单](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%BC%80%E8%B7%AF%E8%99%8E%E5%8A%A0%E6%B2%B9500%E5%85%83%E5%90%8E%E9%80%83%E5%8D%95%23) `155.7K 🔥` `NEW`
1. [伊朗为黎巴嫩硬刚美国](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%BA%E9%BB%8E%E5%B7%B4%E5%AB%A9%E7%A1%AC%E5%88%9A%E7%BE%8E%E5%9B%BD%23) `119.5K 🔥` `NEW`
1. [陈添祥长文道歉](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B7%BB%E7%A5%A5%E9%95%BF%E6%96%87%E9%81%93%E6%AD%89%23) `113.8K 🔥` `NEW`
1. [男二被防爆 当观众坐第一排 (The second male lead was caught in an explosion while the audience was sitting in the front row)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E4%BA%8C%E8%A2%AB%E9%98%B2%E7%88%86%20%E5%BD%93%E8%A7%82%E4%BC%97%E5%9D%90%E7%AC%AC%E4%B8%80%E6%8E%92%23) `96.4K 🔥` `NEW`
1. [周迅 奖运](https://s.weibo.com/weibo?q=%23%E5%91%A8%E8%BF%85%20%E5%A5%96%E8%BF%90%23) `95.5K 🔥` `NEW`
1. [降至300元的降脂针被纳入医保](https://s.weibo.com/weibo?q=%23%E9%99%8D%E8%87%B3300%E5%85%83%E7%9A%84%E9%99%8D%E8%84%82%E9%92%88%E8%A2%AB%E7%BA%B3%E5%85%A5%E5%8C%BB%E4%BF%9D%23) `94.9K 🔥` `NEW`
1. [孙颖莎学队医姐姐说话](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%AD%A6%E9%98%9F%E5%8C%BB%E5%A7%90%E5%A7%90%E8%AF%B4%E8%AF%9D%23) `94.9K 🔥` `NEW`
1. [已婚女子回应男同学逼其离婚](https://s.weibo.com/weibo?q=%23%E5%B7%B2%E5%A9%9A%E5%A5%B3%E5%AD%90%E5%9B%9E%E5%BA%94%E7%94%B7%E5%90%8C%E5%AD%A6%E9%80%BC%E5%85%B6%E7%A6%BB%E5%A9%9A%23) `85.2K 🔥` `NEW`
1. [李亚鹏心疼张雪加码捐赠嫣然](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BA%9A%E9%B9%8F%E5%BF%83%E7%96%BC%E5%BC%A0%E9%9B%AA%E5%8A%A0%E7%A0%81%E6%8D%90%E8%B5%A0%E5%AB%A3%E7%84%B6%23) `82.7K 🔥` `NEW`
1. [郭敬明拍的九尾妖狐月下变身](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E6%8B%8D%E7%9A%84%E4%B9%9D%E5%B0%BE%E5%A6%96%E7%8B%90%E6%9C%88%E4%B8%8B%E5%8F%98%E8%BA%AB%23) `82.0K 🔥` `NEW`
1. [NIP战胜WBG](https://s.weibo.com/weibo?q=%23NIP%E6%88%98%E8%83%9CWBG%23) `69.4K 🔥` `NEW`
1. [猫咪浑身带火冲进店铺求助](https://s.weibo.com/weibo?q=%23%E7%8C%AB%E5%92%AA%E6%B5%91%E8%BA%AB%E5%B8%A6%E7%81%AB%E5%86%B2%E8%BF%9B%E5%BA%97%E9%93%BA%E6%B1%82%E5%8A%A9%23) `68.9K 🔥` `NEW`
1. [新加坡双尸案细节曝光](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8A%A0%E5%9D%A1%E5%8F%8C%E5%B0%B8%E6%A1%88%E7%BB%86%E8%8A%82%E6%9B%9D%E5%85%89%23) `68.8K 🔥` `NEW`
1. [曝某大厂超大杯手机停更 (It is revealed that a major manufacturer has stopped updating extra-large-cup mobile phones)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%9F%90%E5%A4%A7%E5%8E%82%E8%B6%85%E5%A4%A7%E6%9D%AF%E6%89%8B%E6%9C%BA%E5%81%9C%E6%9B%B4%23) `67.0K 🔥` `NEW`
1. [被保时捷车主威胁男子获道歉赔偿](https://s.weibo.com/weibo?q=%23%E8%A2%AB%E4%BF%9D%E6%97%B6%E6%8D%B7%E8%BD%A6%E4%B8%BB%E5%A8%81%E8%83%81%E7%94%B7%E5%AD%90%E8%8E%B7%E9%81%93%E6%AD%89%E8%B5%94%E5%81%BF%23) `65.8K 🔥` `NEW`
1. [语数英老师笑了半天不知道谁教的](https://s.weibo.com/weibo?q=%23%E8%AF%AD%E6%95%B0%E8%8B%B1%E8%80%81%E5%B8%88%E7%AC%91%E4%BA%86%E5%8D%8A%E5%A4%A9%E4%B8%8D%E7%9F%A5%E9%81%93%E8%B0%81%E6%95%99%E7%9A%84%23) `65.4K 🔥` `NEW`
1. [花生配可乐](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E7%94%9F%E9%85%8D%E5%8F%AF%E4%B9%90%23) `60.1K 🔥` `NEW`
1. [女子靠转弯让直行碰瓷30余起被刑拘 (Woman was detained in more than 30 cases for making a turn to let someone go straight and hit a porcelain)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%9D%A0%E8%BD%AC%E5%BC%AF%E8%AE%A9%E7%9B%B4%E8%A1%8C%E7%A2%B0%E7%93%B730%E4%BD%99%E8%B5%B7%E8%A2%AB%E5%88%91%E6%8B%98%23) `1.0M 🔥` `+30%`
1. [女子头痛硬扛7天昏迷确诊李斯特菌](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%A4%B4%E7%97%9B%E7%A1%AC%E6%89%9B7%E5%A4%A9%E6%98%8F%E8%BF%B7%E7%A1%AE%E8%AF%8A%E6%9D%8E%E6%96%AF%E7%89%B9%E8%8F%8C%23) `750.9K 🔥` `+1017%`
1. [5人坠河遇难女孩刚搬入新房读书](https://s.weibo.com/weibo?q=%235%E4%BA%BA%E5%9D%A0%E6%B2%B3%E9%81%87%E9%9A%BE%E5%A5%B3%E5%AD%A9%E5%88%9A%E6%90%AC%E5%85%A5%E6%96%B0%E6%88%BF%E8%AF%BB%E4%B9%A6%23) `232.0K 🔥` `+148%`
1. [伊朗威胁退出停火](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%A8%81%E8%83%81%E9%80%80%E5%87%BA%E5%81%9C%E7%81%AB%23) `200.6K 🔥` `+171%`
1. [BTS演唱会](https://s.weibo.com/weibo?q=%23BTS%E6%BC%94%E5%94%B1%E4%BC%9A%23) `104.4K 🔥` `+57%`
1. [最新暴雨强对流预警 (Latest heavy rain and severe convection warning)](https://s.weibo.com/weibo?q=%23%E6%9C%80%E6%96%B0%E6%9A%B4%E9%9B%A8%E5%BC%BA%E5%AF%B9%E6%B5%81%E9%A2%84%E8%AD%A6%23) `617.0K 🔥`
1. [蔚来ES9正式发布](https://s.weibo.com/weibo?q=%23%E8%94%9A%E6%9D%A5ES9%E6%AD%A3%E5%BC%8F%E5%8F%91%E5%B8%83%23) `216.8K 🔥`
1. [刘畊宏再晒王俊凯小泡芙合照](https://s.weibo.com/weibo?q=%23%E5%88%98%E7%95%8A%E5%AE%8F%E5%86%8D%E6%99%92%E7%8E%8B%E4%BF%8A%E5%87%AF%E5%B0%8F%E6%B3%A1%E8%8A%99%E5%90%88%E7%85%A7%23) `163.1K 🔥`
1. [孙杨张豆豆有孩子了 (Sun Yang and Zhang Doudou have a child)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%E5%BC%A0%E8%B1%86%E8%B1%86%E6%9C%89%E5%AD%A9%E5%AD%90%E4%BA%86%23) `159.7K 🔥`
1. [胃病拖成胃癌会经历5个阶段 (Stomach disease will go through 5 stages leading to gastric cancer)](https://s.weibo.com/weibo?q=%23%E8%83%83%E7%97%85%E6%8B%96%E6%88%90%E8%83%83%E7%99%8C%E4%BC%9A%E7%BB%8F%E5%8E%865%E4%B8%AA%E9%98%B6%E6%AE%B5%23) `129.1K 🔥`
1. [巴基斯坦总理明确说停火包括黎巴嫩](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E6%80%BB%E7%90%86%E6%98%8E%E7%A1%AE%E8%AF%B4%E5%81%9C%E7%81%AB%E5%8C%85%E6%8B%AC%E9%BB%8E%E5%B7%B4%E5%AB%A9%23) `247.7K 🔥` `-32%`
1. [瘫痪女孩误买邓紫棋演唱会票平台拒退](https://s.weibo.com/weibo?q=%23%E7%98%AB%E7%97%AA%E5%A5%B3%E5%AD%A9%E8%AF%AF%E4%B9%B0%E9%82%93%E7%B4%AB%E6%A3%8B%E6%BC%94%E5%94%B1%E4%BC%9A%E7%A5%A8%E5%B9%B3%E5%8F%B0%E6%8B%92%E9%80%80%23) `188.1K 🔥` `-60%`
1. [美议员称外星人已与人类接触 (US congressman says aliens have made contact with humans)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%AE%AE%E5%91%98%E7%A7%B0%E5%A4%96%E6%98%9F%E4%BA%BA%E5%B7%B2%E4%B8%8E%E4%BA%BA%E7%B1%BB%E6%8E%A5%E8%A7%A6%23) `184.5K 🔥` `-83%`
1. [金莎孙丞潇领证 (Jinsha Sun Chengxiao receives the certificate)](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E5%AD%99%E4%B8%9E%E6%BD%87%E9%A2%86%E8%AF%81%23) `168.3K 🔥` `-29%`
1. [爷爷卖16000个烧饼孙女打赏给主播 (Grandpa sold 16,000 sesame seed cakes and granddaughter rewarded the anchor)](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E5%8D%9616000%E4%B8%AA%E7%83%A7%E9%A5%BC%E5%AD%99%E5%A5%B3%E6%89%93%E8%B5%8F%E7%BB%99%E4%B8%BB%E6%92%AD%23) `160.9K 🔥` `-55%`
1. [papi酱已退出papitube (papijiang has exited papitube)](https://s.weibo.com/weibo?q=%23papi%E9%85%B1%E5%B7%B2%E9%80%80%E5%87%BApapitube%23) `160.6K 🔥` `-31%`
1. [女子推迟婚礼捐骨髓8年后双方相见](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8E%A8%E8%BF%9F%E5%A9%9A%E7%A4%BC%E6%8D%90%E9%AA%A8%E9%AB%938%E5%B9%B4%E5%90%8E%E5%8F%8C%E6%96%B9%E7%9B%B8%E8%A7%81%23) `159.8K 🔥` `-23%`
1. [黄金再反转](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%86%8D%E5%8F%8D%E8%BD%AC%23) `97.3K 🔥` `-63%`
1. [李纯马頔不办婚礼不拍婚纱照](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%BA%AF%E9%A9%AC%E9%A0%94%E4%B8%8D%E5%8A%9E%E5%A9%9A%E7%A4%BC%E4%B8%8D%E6%8B%8D%E5%A9%9A%E7%BA%B1%E7%85%A7%23) `94.8K 🔥` `-44%`
1. [迟重瑞现身陈丽华告别仪式 (Chi Chongrui appeared at Chan Laiwa's farewell ceremony)](https://s.weibo.com/weibo?q=%23%E8%BF%9F%E9%87%8D%E7%91%9E%E7%8E%B0%E8%BA%AB%E9%99%88%E4%B8%BD%E5%8D%8E%E5%91%8A%E5%88%AB%E4%BB%AA%E5%BC%8F%23) `90.5K 🔥` `-23%`
1. [男子被保时捷车主当交警面威胁](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%A2%AB%E4%BF%9D%E6%97%B6%E6%8D%B7%E8%BD%A6%E4%B8%BB%E5%BD%93%E4%BA%A4%E8%AD%A6%E9%9D%A2%E5%A8%81%E8%83%81%23) `74.4K 🔥` `-80%`
1. [张萌曾找过楚乔传原班人马](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%90%8C%E6%9B%BE%E6%89%BE%E8%BF%87%E6%A5%9A%E4%B9%94%E4%BC%A0%E5%8E%9F%E7%8F%AD%E4%BA%BA%E9%A9%AC%23) `69.2K 🔥` `-78%`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `67.5K 🔥` `-61%`
1. [民勤种树女生遭恶意凝视引众怒](https://s.weibo.com/weibo?q=%23%E6%B0%91%E5%8B%A4%E7%A7%8D%E6%A0%91%E5%A5%B3%E7%94%9F%E9%81%AD%E6%81%B6%E6%84%8F%E5%87%9D%E8%A7%86%E5%BC%95%E4%BC%97%E6%80%92%23) `65.8K 🔥` `-76%`
1. [金莎回应质疑 (Jinsha responds to doubts)](https://s.weibo.com/weibo?q=%23%E9%87%91%E8%8E%8E%E5%9B%9E%E5%BA%94%E8%B4%A8%E7%96%91%23) `64.8K 🔥` `-78%`
1. [女孩玩拼豆不幸触电离世 (Girl dies after being electrocuted while playing Pinto)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E7%8E%A9%E6%8B%BC%E8%B1%86%E4%B8%8D%E5%B9%B8%E8%A7%A6%E7%94%B5%E7%A6%BB%E4%B8%96%23) `64.7K 🔥` `-86%`
1. [戛纳](https://s.weibo.com/weibo?q=%23%E6%88%9B%E7%BA%B3%23) `64.7K 🔥` `-29%`

Updated at 2026-04-09 20:47:50

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
