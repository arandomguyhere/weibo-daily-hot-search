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

1. [AI剧 一本万利 (AI Drama: A Lot of Money)](https://s.weibo.com/weibo?q=%23AI%E5%89%A7%20%E4%B8%80%E6%9C%AC%E4%B8%87%E5%88%A9%23) `1.4M 🔥` `NEW`
1. [王戟是谁](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%88%9F%E6%98%AF%E8%B0%81%23) `1.0M 🔥` `NEW`
1. [这是真上过班的](https://s.weibo.com/weibo?q=%23%E8%BF%99%E6%98%AF%E7%9C%9F%E4%B8%8A%E8%BF%87%E7%8F%AD%E7%9A%84%23) `1.0M 🔥` `NEW`
1. [将门独后](https://s.weibo.com/weibo?q=%23%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%23) `934.1K 🔥` `NEW`
1. [一觉没睡和豆包聊了8个小时](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%A7%89%E6%B2%A1%E7%9D%A1%E5%92%8C%E8%B1%86%E5%8C%85%E8%81%8A%E4%BA%868%E4%B8%AA%E5%B0%8F%E6%97%B6%23) `919.0K 🔥` `NEW`
1. [开推4疯狂动物趴](https://s.weibo.com/weibo?q=%23%E5%BC%80%E6%8E%A84%E7%96%AF%E7%8B%82%E5%8A%A8%E7%89%A9%E8%B6%B4%23) `917.5K 🔥` `NEW`
1. [莫氏鸡煲老板称现在压力非常大](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E8%80%81%E6%9D%BF%E7%A7%B0%E7%8E%B0%E5%9C%A8%E5%8E%8B%E5%8A%9B%E9%9D%9E%E5%B8%B8%E5%A4%A7%23) `902.9K 🔥` `NEW`
1. [心动的信号9](https://s.weibo.com/weibo?q=%23%E5%BF%83%E5%8A%A8%E7%9A%84%E4%BF%A1%E5%8F%B79%23) `757.2K 🔥` `NEW`
1. [泸溪河坚果桃酥 山姆专供](https://s.weibo.com/weibo?q=%23%E6%B3%B8%E6%BA%AA%E6%B2%B3%E5%9D%9A%E6%9E%9C%E6%A1%83%E9%85%A5%20%E5%B1%B1%E5%A7%86%E4%B8%93%E4%BE%9B%23) `755.5K 🔥` `NEW`
1. [Bin把自己拉扯没了](https://s.weibo.com/weibo?q=%23Bin%E6%8A%8A%E8%87%AA%E5%B7%B1%E6%8B%89%E6%89%AF%E6%B2%A1%E4%BA%86%23) `755.5K 🔥` `NEW`
1. [迪丽热巴老绷家也没绷住 (Dilireba’s family didn’t hold back either)](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%80%81%E7%BB%B7%E5%AE%B6%E4%B9%9F%E6%B2%A1%E7%BB%B7%E4%BD%8F%23) `753.9K 🔥` `NEW`
1. [日本强震 列车脱轨](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%BC%BA%E9%9C%87%20%E5%88%97%E8%BD%A6%E8%84%B1%E8%BD%A8%23) `751.5K 🔥` `NEW`
1. [文根英结婚](https://s.weibo.com/weibo?q=%23%E6%96%87%E6%A0%B9%E8%8B%B1%E7%BB%93%E5%A9%9A%23) `749.8K 🔥` `NEW`
1. [小米澎程可加92号汽油引争议](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E5%8F%AF%E5%8A%A092%E5%8F%B7%E6%B1%BD%E6%B2%B9%E5%BC%95%E4%BA%89%E8%AE%AE%23) `749.3K 🔥` `NEW`
1. [AI帮他69次投递拿下工作](https://s.weibo.com/weibo?q=%23AI%E5%B8%AE%E4%BB%9669%E6%AC%A1%E6%8A%95%E9%80%92%E6%8B%BF%E4%B8%8B%E5%B7%A5%E4%BD%9C%23) `658.1K 🔥` `NEW`
1. [吴镇宇儿子费曼晒高中毕业照](https://s.weibo.com/weibo?q=%23%E5%90%B4%E9%95%87%E5%AE%87%E5%84%BF%E5%AD%90%E8%B4%B9%E6%9B%BC%E6%99%92%E9%AB%98%E4%B8%AD%E6%AF%95%E4%B8%9A%E7%85%A7%23) `654.9K 🔥` `NEW`
1. [金允植开通微博](https://s.weibo.com/weibo?q=%23%E9%87%91%E5%85%81%E6%A4%8D%E5%BC%80%E9%80%9A%E5%BE%AE%E5%8D%9A%23) `587.9K 🔥` `NEW`
1. [韩股跳水熔断](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E8%82%A1%E8%B7%B3%E6%B0%B4%E7%86%94%E6%96%AD%23) `586.0K 🔥` `NEW`
1. [刘宇宁连续8年悼念去世粉丝](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E8%BF%9E%E7%BB%AD8%E5%B9%B4%E6%82%BC%E5%BF%B5%E5%8E%BB%E4%B8%96%E7%B2%89%E4%B8%9D%23) `582.9K 🔥` `NEW`
1. [白鹿周翊然合作透明爱人MV](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%91%A8%E7%BF%8A%E7%84%B6%E5%90%88%E4%BD%9C%E9%80%8F%E6%98%8E%E7%88%B1%E4%BA%BAMV%23) `580.3K 🔥` `NEW`
1. [71岁白冰冰发文怀念女儿 (71-year-old Bai Bingbing posted a message in memory of her daughter)](https://s.weibo.com/weibo?q=%2371%E5%B2%81%E7%99%BD%E5%86%B0%E5%86%B0%E5%8F%91%E6%96%87%E6%80%80%E5%BF%B5%E5%A5%B3%E5%84%BF%23) `576.9K 🔥` `NEW`
1. [涉密文件经废旧硒鼓被再次打印](https://s.weibo.com/weibo?q=%23%E6%B6%89%E5%AF%86%E6%96%87%E4%BB%B6%E7%BB%8F%E5%BA%9F%E6%97%A7%E7%A1%92%E9%BC%93%E8%A2%AB%E5%86%8D%E6%AC%A1%E6%89%93%E5%8D%B0%23) `574.0K 🔥` `NEW`
1. [白冰冰曾7年做16次试管婴儿](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%86%B0%E5%86%B0%E6%9B%BE7%E5%B9%B4%E5%81%9A16%E6%AC%A1%E8%AF%95%E7%AE%A1%E5%A9%B4%E5%84%BF%23) `572.9K 🔥` `NEW`
1. [于正 我跟哲远没有恩怨](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%20%E6%88%91%E8%B7%9F%E5%93%B2%E8%BF%9C%E6%B2%A1%E6%9C%89%E6%81%A9%E6%80%A8%23) `568.8K 🔥` `NEW`
1. [医院药学部主任帮药商卖药超10亿元](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E8%8D%AF%E5%AD%A6%E9%83%A8%E4%B8%BB%E4%BB%BB%E5%B8%AE%E8%8D%AF%E5%95%86%E5%8D%96%E8%8D%AF%E8%B6%8510%E4%BA%BF%E5%85%83%23) `566.4K 🔥` `NEW`
1. [李宏毅工作室道歉](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AE%8F%E6%AF%85%E5%B7%A5%E4%BD%9C%E5%AE%A4%E9%81%93%E6%AD%89%23) `564.4K 🔥` `NEW`
1. [布克与C罗前任交往](https://s.weibo.com/weibo?q=%23%E5%B8%83%E5%85%8B%E4%B8%8EC%E7%BD%97%E5%89%8D%E4%BB%BB%E4%BA%A4%E5%BE%80%23) `561.3K 🔥` `NEW`
1. [吴谨言新剧扔真蛇](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%B0%A8%E8%A8%80%E6%96%B0%E5%89%A7%E6%89%94%E7%9C%9F%E8%9B%87%23) `558.1K 🔥` `NEW`
1. [特朗普被发现在格雷厄姆葬礼打瞌睡](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%A2%AB%E5%8F%91%E7%8E%B0%E5%9C%A8%E6%A0%BC%E9%9B%B7%E5%8E%84%E5%A7%86%E8%91%AC%E7%A4%BC%E6%89%93%E7%9E%8C%E7%9D%A1%23) `552.9K 🔥` `NEW`
1. [乐事薯片废料回收制成食用淀粉](https://s.weibo.com/weibo?q=%23%E4%B9%90%E4%BA%8B%E8%96%AF%E7%89%87%E5%BA%9F%E6%96%99%E5%9B%9E%E6%94%B6%E5%88%B6%E6%88%90%E9%A3%9F%E7%94%A8%E6%B7%80%E7%B2%89%23) `549.7K 🔥` `NEW`
1. [官方通报中学老师教育不当行为 (Official notification of educational misconduct by middle school teacher)](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E4%B8%AD%E5%AD%A6%E8%80%81%E5%B8%88%E6%95%99%E8%82%B2%E4%B8%8D%E5%BD%93%E8%A1%8C%E4%B8%BA%23) `542.5K 🔥` `NEW`
1. [王者荣耀萌新之夜阵容](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E8%90%8C%E6%96%B0%E4%B9%8B%E5%A4%9C%E9%98%B5%E5%AE%B9%23) `539.5K 🔥` `NEW`
1. [戚薇女儿11岁的身高](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%87%E5%A5%B3%E5%84%BF11%E5%B2%81%E7%9A%84%E8%BA%AB%E9%AB%98%23) `533.1K 🔥` `NEW`
1. [17岁哥哥上中科大15岁妹妹上北大](https://s.weibo.com/weibo?q=%2317%E5%B2%81%E5%93%A5%E5%93%A5%E4%B8%8A%E4%B8%AD%E7%A7%91%E5%A4%A715%E5%B2%81%E5%A6%B9%E5%A6%B9%E4%B8%8A%E5%8C%97%E5%A4%A7%23) `531.1K 🔥` `NEW`
1. [娜然霍震霆给霍启山拍照](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E7%84%B6%E9%9C%8D%E9%9C%87%E9%9C%86%E7%BB%99%E9%9C%8D%E5%90%AF%E5%B1%B1%E6%8B%8D%E7%85%A7%23) `527.7K 🔥` `NEW`
1. [周星驰珠海重遇春芳理发店老板娘](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%98%9F%E9%A9%B0%E7%8F%A0%E6%B5%B7%E9%87%8D%E9%81%87%E6%98%A5%E8%8A%B3%E7%90%86%E5%8F%91%E5%BA%97%E8%80%81%E6%9D%BF%E5%A8%98%23) `526.1K 🔥` `NEW`
1. [AI时代最侮辱人的话出现了](https://s.weibo.com/weibo?q=%23AI%E6%97%B6%E4%BB%A3%E6%9C%80%E4%BE%AE%E8%BE%B1%E4%BA%BA%E7%9A%84%E8%AF%9D%E5%87%BA%E7%8E%B0%E4%BA%86%23) `522.5K 🔥` `NEW`
1. [14岁女生因提醒同学勿睡被老师打](https://s.weibo.com/weibo?q=%2314%E5%B2%81%E5%A5%B3%E7%94%9F%E5%9B%A0%E6%8F%90%E9%86%92%E5%90%8C%E5%AD%A6%E5%8B%BF%E7%9D%A1%E8%A2%AB%E8%80%81%E5%B8%88%E6%89%93%23) `519.5K 🔥` `NEW`
1. [马斯克太空数据中心或致地球灾难](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%A4%AA%E7%A9%BA%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%E6%88%96%E8%87%B4%E5%9C%B0%E7%90%83%E7%81%BE%E9%9A%BE%23) `516.3K 🔥` `NEW`
1. [泸溪河客服回应](https://s.weibo.com/weibo?q=%23%E6%B3%B8%E6%BA%AA%E6%B2%B3%E5%AE%A2%E6%9C%8D%E5%9B%9E%E5%BA%94%23) `513.8K 🔥` `NEW`
1. [孟子义将门独后拍了153天 (Meng Ziyi took pictures of the single queen for 153 days)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E5%B0%86%E9%97%A8%E7%8B%AC%E5%90%8E%E6%8B%8D%E4%BA%86153%E5%A4%A9%23) `509.1K 🔥` `NEW`
1. [吴世勋中文歌上线](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%B8%96%E5%8B%8B%E4%B8%AD%E6%96%87%E6%AD%8C%E4%B8%8A%E7%BA%BF%23) `508.9K 🔥` `NEW`
1. [十年前的离谱消费有哪些](https://s.weibo.com/weibo?q=%23%E5%8D%81%E5%B9%B4%E5%89%8D%E7%9A%84%E7%A6%BB%E8%B0%B1%E6%B6%88%E8%B4%B9%E6%9C%89%E5%93%AA%E4%BA%9B%23) `504.3K 🔥` `NEW`
1. [这谁能认出来是李现](https://s.weibo.com/weibo?q=%23%E8%BF%99%E8%B0%81%E8%83%BD%E8%AE%A4%E5%87%BA%E6%9D%A5%E6%98%AF%E6%9D%8E%E7%8E%B0%23) `501.6K 🔥` `NEW`
1. [迪丽热巴第7位20亿票房内地女演员](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%AC%AC7%E4%BD%8D20%E4%BA%BF%E7%A5%A8%E6%88%BF%E5%86%85%E5%9C%B0%E5%A5%B3%E6%BC%94%E5%91%98%23) `498.3K 🔥` `NEW`
1. [暑假年轻人开始用美团小团AI预订](https://s.weibo.com/weibo?q=%23%E6%9A%91%E5%81%87%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%BC%80%E5%A7%8B%E7%94%A8%E7%BE%8E%E5%9B%A2%E5%B0%8F%E5%9B%A2AI%E9%A2%84%E8%AE%A2%23) `495.8K 🔥` `NEW`
1. [长鑫科技大涨](https://s.weibo.com/weibo?q=%23%E9%95%BF%E9%91%AB%E7%A7%91%E6%8A%80%E5%A4%A7%E6%B6%A8%23) `493.6K 🔥` `NEW`
1. [泸溪河桃酥 牙冠](https://s.weibo.com/weibo?q=%23%E6%B3%B8%E6%BA%AA%E6%B2%B3%E6%A1%83%E9%85%A5%20%E7%89%99%E5%86%A0%23) `2.5M 🔥` `+171%`
1. [刘浩存代言飞鹤 (Liu Haocun endorses Feihe)](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%E4%BB%A3%E8%A8%80%E9%A3%9E%E9%B9%A4%23) `1.0M 🔥`
1. [日本坍塌购物中心多人确认死亡 (Many people confirmed dead in collapsed shopping mall in Japan)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9D%8D%E5%A1%8C%E8%B4%AD%E7%89%A9%E4%B8%AD%E5%BF%83%E5%A4%9A%E4%BA%BA%E7%A1%AE%E8%AE%A4%E6%AD%BB%E4%BA%A1%23) `550.7K 🔥` `-23%`
1. [医生群里发除非死人不要临时请假 (Doctors' group message: Don't ask for temporary leave unless the patient is dead)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E7%BE%A4%E9%87%8C%E5%8F%91%E9%99%A4%E9%9D%9E%E6%AD%BB%E4%BA%BA%E4%B8%8D%E8%A6%81%E4%B8%B4%E6%97%B6%E8%AF%B7%E5%81%87%23) `544.1K 🔥` `-68%`
1. [李沁 花少被指背锅](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%B2%81%20%E8%8A%B1%E5%B0%91%E8%A2%AB%E6%8C%87%E8%83%8C%E9%94%85%23) `536.9K 🔥` `-43%`

Updated at 2026-07-29 12:25:10

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
