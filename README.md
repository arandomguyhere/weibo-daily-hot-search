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

1. [爷爷不泡茶七夕限定泰奶 (Grandpa doesn’t make tea, Thai milk is limited to Chinese Valentine’s Day)](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E4%B8%8D%E6%B3%A1%E8%8C%B6%E4%B8%83%E5%A4%95%E9%99%90%E5%AE%9A%E6%B3%B0%E5%A5%B6%23) `703.4K 🔥` `NEW`
1. [披荆斩棘一公突袭直播](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%E4%B8%80%E5%85%AC%E7%AA%81%E8%A2%AD%E7%9B%B4%E6%92%AD%23) `479.7K 🔥` `NEW`
1. [村民称升学宴事故主家是低保户](https://s.weibo.com/weibo?q=%23%E6%9D%91%E6%B0%91%E7%A7%B0%E5%8D%87%E5%AD%A6%E5%AE%B4%E4%BA%8B%E6%95%85%E4%B8%BB%E5%AE%B6%E6%98%AF%E4%BD%8E%E4%BF%9D%E6%88%B7%23) `459.8K 🔥` `NEW`
1. [if我消失去cafe找我](https://s.weibo.com/weibo?q=%23if%E6%88%91%E6%B6%88%E5%A4%B1%E5%8E%BBcafe%E6%89%BE%E6%88%91%23) `330.4K 🔥` `NEW`
1. [美团闪购联名一二布布](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%A2%E9%97%AA%E8%B4%AD%E8%81%94%E5%90%8D%E4%B8%80%E4%BA%8C%E5%B8%83%E5%B8%83%23) `326.6K 🔥` `NEW`
1. [KPL](https://s.weibo.com/weibo?q=%23KPL%23) `325.3K 🔥` `NEW`
1. [喜欢你我也是](https://s.weibo.com/weibo?q=%23%E5%96%9C%E6%AC%A2%E4%BD%A0%E6%88%91%E4%B9%9F%E6%98%AF%23) `324.2K 🔥` `NEW`
1. [60岁大爷20天做出一部AI动漫](https://s.weibo.com/weibo?q=%2360%E5%B2%81%E5%A4%A7%E7%88%B720%E5%A4%A9%E5%81%9A%E5%87%BA%E4%B8%80%E9%83%A8AI%E5%8A%A8%E6%BC%AB%23) `274.0K 🔥` `NEW`
1. [受害者同事听说杭州酒局事件哭了](https://s.weibo.com/weibo?q=%23%E5%8F%97%E5%AE%B3%E8%80%85%E5%90%8C%E4%BA%8B%E5%90%AC%E8%AF%B4%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E4%BA%8B%E4%BB%B6%E5%93%AD%E4%BA%86%23) `263.6K 🔥` `NEW`
1. [空枪](https://s.weibo.com/weibo?q=%23%E7%A9%BA%E6%9E%AA%23) `257.7K 🔥` `NEW`
1. [虞书欣estherhouse崩了 (Yu Shuxin estherhouse collapsed)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3estherhouse%E5%B4%A9%E4%BA%86%23) `239.8K 🔥` `NEW`
1. [致5死升学宴主家本不想办 (The host’s family didn’t want to host the banquet that caused 5 deaths)](https://s.weibo.com/weibo?q=%23%E8%87%B45%E6%AD%BB%E5%8D%87%E5%AD%A6%E5%AE%B4%E4%B8%BB%E5%AE%B6%E6%9C%AC%E4%B8%8D%E6%83%B3%E5%8A%9E%23) `3.9M 🔥` `+124%`
1. [剩菜剩饭直接喂猪违法](https://s.weibo.com/weibo?q=%23%E5%89%A9%E8%8F%9C%E5%89%A9%E9%A5%AD%E7%9B%B4%E6%8E%A5%E5%96%82%E7%8C%AA%E8%BF%9D%E6%B3%95%23) `1.6M 🔥` `+33%`
1. [七夕送礼上美团闪购](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%E9%80%81%E7%A4%BC%E4%B8%8A%E7%BE%8E%E5%9B%A2%E9%97%AA%E8%B4%AD%23) `1.1M 🔥` `+112%`
1. [孟子义李昀锐白天避嫌晚上营业](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E7%99%BD%E5%A4%A9%E9%81%BF%E5%AB%8C%E6%99%9A%E4%B8%8A%E8%90%A5%E4%B8%9A%23) `1.1M 🔥` `+87%`
1. [中国重复使用火箭陆地回收成功](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%87%8D%E5%A4%8D%E4%BD%BF%E7%94%A8%E7%81%AB%E7%AE%AD%E9%99%86%E5%9C%B0%E5%9B%9E%E6%94%B6%E6%88%90%E5%8A%9F%23) `1.1M 🔥`
1. [厨房纸 致癌物](https://s.weibo.com/weibo?q=%23%E5%8E%A8%E6%88%BF%E7%BA%B8%20%E8%87%B4%E7%99%8C%E7%89%A9%23) `798.6K 🔥`
1. [宇树股价跳水带崩机器人板块](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E8%82%A1%E4%BB%B7%E8%B7%B3%E6%B0%B4%E5%B8%A6%E5%B4%A9%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%9D%BF%E5%9D%97%23) `618.4K 🔥`
1. [韩国被曝性贿赂3名中国足协人士](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%A2%AB%E6%9B%9D%E6%80%A7%E8%B4%BF%E8%B5%823%E5%90%8D%E4%B8%AD%E5%9B%BD%E8%B6%B3%E5%8D%8F%E4%BA%BA%E5%A3%AB%23) `485.6K 🔥`
1. [胖东来 刑期五年以上门槛 (Fat Donglai’s sentence exceeds the threshold of five years)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%20%E5%88%91%E6%9C%9F%E4%BA%94%E5%B9%B4%E4%BB%A5%E4%B8%8A%E9%97%A8%E6%A7%9B%23) `736.9K 🔥` `-29%`
1. [白鹿和彭冠英常华森都有贴脸剧照](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E5%92%8C%E5%BD%AD%E5%86%A0%E8%8B%B1%E5%B8%B8%E5%8D%8E%E6%A3%AE%E9%83%BD%E6%9C%89%E8%B4%B4%E8%84%B8%E5%89%A7%E7%85%A7%23) `688.4K 🔥` `-28%`
1. [四川一升学宴突发事故5人死亡 (5 people died in accident at Sichuan Yisheng University Banquet)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E4%B8%80%E5%8D%87%E5%AD%A6%E5%AE%B4%E7%AA%81%E5%8F%91%E4%BA%8B%E6%95%855%E4%BA%BA%E6%AD%BB%E4%BA%A1%23) `608.5K 🔥` `-39%`
1. [尚公主 (Princess Shang)](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%23) `544.1K 🔥` `-50%`
1. [七夕 冷清](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%20%E5%86%B7%E6%B8%85%23) `539.8K 🔥` `-27%`
1. [孟子义李昀锐尚公主情侣自拍 (Meng Ziyi, Li Yun, Ruishang and Princess couple selfie)](https://s.weibo.com/weibo?q=%23%E5%AD%9F%E5%AD%90%E4%B9%89%E6%9D%8E%E6%98%80%E9%94%90%E5%B0%9A%E5%85%AC%E4%B8%BB%E6%83%85%E4%BE%A3%E8%87%AA%E6%8B%8D%23) `522.1K 🔥` `-32%`
1. [女孩深夜遭强奸4人均称只是协助](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%B7%B1%E5%A4%9C%E9%81%AD%E5%BC%BA%E5%A5%B84%E4%BA%BA%E5%9D%87%E7%A7%B0%E5%8F%AA%E6%98%AF%E5%8D%8F%E5%8A%A9%23) `510.1K 🔥` `-32%`
1. [蓝盈莹要求工作群消息尽量秒回](https://s.weibo.com/weibo?q=%23%E8%93%9D%E7%9B%88%E8%8E%B9%E8%A6%81%E6%B1%82%E5%B7%A5%E4%BD%9C%E7%BE%A4%E6%B6%88%E6%81%AF%E5%B0%BD%E9%87%8F%E7%A7%92%E5%9B%9E%23) `501.0K 🔥` `-31%`
1. [昀牵孟绕](https://s.weibo.com/weibo?q=%23%E6%98%80%E7%89%B5%E5%AD%9F%E7%BB%95%23) `476.0K 🔥` `-32%`
1. [iPhone17涨价倒计时](https://s.weibo.com/weibo?q=%23iPhone17%E6%B6%A8%E4%BB%B7%E5%80%92%E8%AE%A1%E6%97%B6%23) `404.7K 🔥` `-25%`
1. [中国医师节 (Chinese Doctors' Day)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%8C%BB%E5%B8%88%E8%8A%82%23) `400.9K 🔥` `-30%`
1. [七夕 (Chinese Valentine's Day)](https://s.weibo.com/weibo?q=%23%E4%B8%83%E5%A4%95%23) `398.3K 🔥` `-29%`
1. [升学宴逃生村民称身旁邻居当场遇难](https://s.weibo.com/weibo?q=%23%E5%8D%87%E5%AD%A6%E5%AE%B4%E9%80%83%E7%94%9F%E6%9D%91%E6%B0%91%E7%A7%B0%E8%BA%AB%E6%97%81%E9%82%BB%E5%B1%85%E5%BD%93%E5%9C%BA%E9%81%87%E9%9A%BE%23) `396.9K 🔥` `-25%`
1. [窦唯女儿自曝与父亲20年无联系](https://s.weibo.com/weibo?q=%23%E7%AA%A6%E5%94%AF%E5%A5%B3%E5%84%BF%E8%87%AA%E6%9B%9D%E4%B8%8E%E7%88%B6%E4%BA%B220%E5%B9%B4%E6%97%A0%E8%81%94%E7%B3%BB%23) `379.7K 🔥` `-31%`
1. [宇树科技中一签赚47万](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E4%B8%AD%E4%B8%80%E7%AD%BE%E8%B5%9A47%E4%B8%87%23) `350.2K 🔥` `-39%`
1. [章子怡套现3亿 (Zhang Ziyi cashed out 300 million)](https://s.weibo.com/weibo?q=%23%E7%AB%A0%E5%AD%90%E6%80%A1%E5%A5%97%E7%8E%B03%E4%BA%BF%23) `349.3K 🔥` `-38%`
1. [贝儿17岁才第一次剥虾](https://s.weibo.com/weibo?q=%23%E8%B4%9D%E5%84%BF17%E5%B2%81%E6%89%8D%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%89%A5%E8%99%BE%23) `346.5K 🔥` `-36%`
1. [王兴兴拿下90后新首富](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%85%B4%E5%85%B4%E6%8B%BF%E4%B8%8B90%E5%90%8E%E6%96%B0%E9%A6%96%E5%AF%8C%23) `333.4K 🔥` `-44%`
1. [中国新能源的审美开窍了 (China’s new energy aesthetics are enlightened)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E6%96%B0%E8%83%BD%E6%BA%90%E7%9A%84%E5%AE%A1%E7%BE%8E%E5%BC%80%E7%AA%8D%E4%BA%86%23) `332.7K 🔥` `-54%`
1. [女子买猫窝到货后爬出一只猫](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%B9%B0%E7%8C%AB%E7%AA%9D%E5%88%B0%E8%B4%A7%E5%90%8E%E7%88%AC%E5%87%BA%E4%B8%80%E5%8F%AA%E7%8C%AB%23) `308.9K 🔥` `-43%`
1. [张凌赫林允归鸾相拥海报 (Zhang Ling, Lin Yun and Gui Luan embrace each other poster)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%9E%97%E5%85%81%E5%BD%92%E9%B8%BE%E7%9B%B8%E6%8B%A5%E6%B5%B7%E6%8A%A5%23) `297.3K 🔥` `-44%`
1. [武磊官博发文寻人 (Wu Lei’s official blog post is looking for someone)](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E7%A3%8A%E5%AE%98%E5%8D%9A%E5%8F%91%E6%96%87%E5%AF%BB%E4%BA%BA%23) `292.2K 🔥` `-47%`
1. [四川升学宴 错别字](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%8D%87%E5%AD%A6%E5%AE%B4%20%E9%94%99%E5%88%AB%E5%AD%97%23) `288.0K 🔥` `-52%`
1. [披荆斩棘](https://s.weibo.com/weibo?q=%23%E6%8A%AB%E8%8D%86%E6%96%A9%E6%A3%98%23) `260.0K 🔥` `-53%`
1. [家属发现受害人淤青才知其被猥亵](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E5%B1%9E%E5%8F%91%E7%8E%B0%E5%8F%97%E5%AE%B3%E4%BA%BA%E6%B7%A4%E9%9D%92%E6%89%8D%E7%9F%A5%E5%85%B6%E8%A2%AB%E7%8C%A5%E4%BA%B5%23) `240.0K 🔥` `-54%`
1. [升学宴致5死17伤主家亲属发声](https://s.weibo.com/weibo?q=%23%E5%8D%87%E5%AD%A6%E5%AE%B4%E8%87%B45%E6%AD%BB17%E4%BC%A4%E4%B8%BB%E5%AE%B6%E4%BA%B2%E5%B1%9E%E5%8F%91%E5%A3%B0%23) `239.8K 🔥` `-76%`
1. [尚公主杀死比赛](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E5%85%AC%E4%B8%BB%E6%9D%80%E6%AD%BB%E6%AF%94%E8%B5%9B%23) `238.4K 🔥` `-52%`
1. [电影空枪发了声明](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E7%A9%BA%E6%9E%AA%E5%8F%91%E4%BA%86%E5%A3%B0%E6%98%8E%23) `228.8K 🔥` `-56%`
1. [宇树科技3位高管均为90后](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%803%E4%BD%8D%E9%AB%98%E7%AE%A1%E5%9D%87%E4%B8%BA90%E5%90%8E%23) `224.5K 🔥` `-56%`
1. [飞猪帮帮给留学生一点小小震撼](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E7%8C%AA%E5%B8%AE%E5%B8%AE%E7%BB%99%E7%95%99%E5%AD%A6%E7%94%9F%E4%B8%80%E7%82%B9%E5%B0%8F%E5%B0%8F%E9%9C%87%E6%92%BC%23) `222.8K 🔥` `-60%`
1. [武磊找的父子疑似遭到申花球迷围攻 (The father and son Wu Lei was looking for were suspected to be besieged by Shenhua fans)](https://s.weibo.com/weibo?q=%23%E6%AD%A6%E7%A3%8A%E6%89%BE%E7%9A%84%E7%88%B6%E5%AD%90%E7%96%91%E4%BC%BC%E9%81%AD%E5%88%B0%E7%94%B3%E8%8A%B1%E7%90%83%E8%BF%B7%E5%9B%B4%E6%94%BB%23) `222.7K 🔥` `-57%`

Updated at 2026-08-19 13:18:06

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
