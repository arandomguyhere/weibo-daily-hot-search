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

1. [建议尽量不要调休 (It is recommended not to take any time off as much as possible)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%B0%BD%E9%87%8F%E4%B8%8D%E8%A6%81%E8%B0%83%E4%BC%91%23) `837.4K 🔥` `NEW`
1. [张杰演唱会抢票](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%E6%8A%A2%E7%A5%A8%23) `475.3K 🔥` `NEW`
1. [微博超有用视频大赛](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E5%8D%9A%E8%B6%85%E6%9C%89%E7%94%A8%E8%A7%86%E9%A2%91%E5%A4%A7%E8%B5%9B%23) `398.4K 🔥` `NEW`
1. [Xteam对战北京WBG](https://s.weibo.com/weibo?q=%23Xteam%E5%AF%B9%E6%88%98%E5%8C%97%E4%BA%ACWBG%23) `244.3K 🔥` `NEW`
1. [应对人工智能对就业影响](https://s.weibo.com/weibo?q=%23%E5%BA%94%E5%AF%B9%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E5%AF%B9%E5%B0%B1%E4%B8%9A%E5%BD%B1%E5%93%8D%23) `242.2K 🔥` `NEW`
1. [鼓励3岁以下婴幼儿父母弹性工作制](https://s.weibo.com/weibo?q=%23%E9%BC%93%E5%8A%B13%E5%B2%81%E4%BB%A5%E4%B8%8B%E5%A9%B4%E5%B9%BC%E5%84%BF%E7%88%B6%E6%AF%8D%E5%BC%B9%E6%80%A7%E5%B7%A5%E4%BD%9C%E5%88%B6%23) `205.3K 🔥` `NEW`
1. [麦吉丽首发3核PDRN](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E5%90%89%E4%B8%BD%E9%A6%96%E5%8F%913%E6%A0%B8PDRN%23) `205.2K 🔥` `NEW`
1. [有序扩大研究生培养规模](https://s.weibo.com/weibo?q=%23%E6%9C%89%E5%BA%8F%E6%89%A9%E5%A4%A7%E7%A0%94%E7%A9%B6%E7%94%9F%E5%9F%B9%E5%85%BB%E8%A7%84%E6%A8%A1%23) `202.0K 🔥` `NEW`
1. [何老师淋过雨所以想为别人撑伞](https://s.weibo.com/weibo?q=%23%E4%BD%95%E8%80%81%E5%B8%88%E6%B7%8B%E8%BF%87%E9%9B%A8%E6%89%80%E4%BB%A5%E6%83%B3%E4%B8%BA%E5%88%AB%E4%BA%BA%E6%92%91%E4%BC%9E%23) `108.7K 🔥` `NEW`
1. [靳东说不能让年轻人只沉迷游戏短视频](https://s.weibo.com/weibo?q=%23%E9%9D%B3%E4%B8%9C%E8%AF%B4%E4%B8%8D%E8%83%BD%E8%AE%A9%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%8F%AA%E6%B2%89%E8%BF%B7%E6%B8%B8%E6%88%8F%E7%9F%AD%E8%A7%86%E9%A2%91%23) `103.0K 🔥` `NEW`
1. [未来真正的竞争力将转向语言型人才 (The real competitiveness in the future will shift to language talents)](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A5%E7%9C%9F%E6%AD%A3%E7%9A%84%E7%AB%9E%E4%BA%89%E5%8A%9B%E5%B0%86%E8%BD%AC%E5%90%91%E8%AF%AD%E8%A8%80%E5%9E%8B%E4%BA%BA%E6%89%8D%23) `100.8K 🔥` `NEW`
1. [建议将保姆费纳入个税抵扣](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%B0%86%E4%BF%9D%E5%A7%86%E8%B4%B9%E7%BA%B3%E5%85%A5%E4%B8%AA%E7%A8%8E%E6%8A%B5%E6%89%A3%23) `96.9K 🔥` `NEW`
1. [和平精英让侯明昊演嗨了](https://s.weibo.com/weibo?q=%23%E5%92%8C%E5%B9%B3%E7%B2%BE%E8%8B%B1%E8%AE%A9%E4%BE%AF%E6%98%8E%E6%98%8A%E6%BC%94%E5%97%A8%E4%BA%86%23) `92.4K 🔥` `NEW`
1. [中国人均预期寿命79.25岁](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%9D%87%E9%A2%84%E6%9C%9F%E5%AF%BF%E5%91%BD79.25%E5%B2%81%23) `92.3K 🔥` `NEW`
1. [一关灯陈哲远就什么都招了](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%85%B3%E7%81%AF%E9%99%88%E5%93%B2%E8%BF%9C%E5%B0%B1%E4%BB%80%E4%B9%88%E9%83%BD%E6%8B%9B%E4%BA%86%23) `91.7K 🔥` `NEW`
1. [彩礼把社会责任转移成了家庭矛盾](https://s.weibo.com/weibo?q=%23%E5%BD%A9%E7%A4%BC%E6%8A%8A%E7%A4%BE%E4%BC%9A%E8%B4%A3%E4%BB%BB%E8%BD%AC%E7%A7%BB%E6%88%90%E4%BA%86%E5%AE%B6%E5%BA%AD%E7%9F%9B%E7%9B%BE%23) `86.9K 🔥` `NEW`
1. [230元买螃蟹60元买绳子](https://s.weibo.com/weibo?q=%23230%E5%85%83%E4%B9%B0%E8%9E%83%E8%9F%B960%E5%85%83%E4%B9%B0%E7%BB%B3%E5%AD%90%23) `86.9K 🔥` `NEW`
1. [明日方舟](https://s.weibo.com/weibo?q=%23%E6%98%8E%E6%97%A5%E6%96%B9%E8%88%9F%23) `86.9K 🔥` `NEW`
1. [建议三孩每月补贴5000元至3岁](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E4%B8%89%E5%AD%A9%E6%AF%8F%E6%9C%88%E8%A1%A5%E8%B4%B45000%E5%85%83%E8%87%B33%E5%B2%81%23) `1.1M 🔥` `+53%`
1. [百妖谱](https://s.weibo.com/weibo?q=%23%E7%99%BE%E5%A6%96%E8%B0%B1%23) `403.6K 🔥` `+230%`
1. [伊朗首次使用最快自杀式无人机 (Iran uses fastest suicide drone for first time)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E9%A6%96%E6%AC%A1%E4%BD%BF%E7%94%A8%E6%9C%80%E5%BF%AB%E8%87%AA%E6%9D%80%E5%BC%8F%E6%97%A0%E4%BA%BA%E6%9C%BA%23) `399.6K 🔥` `+237%`
1. [迪丽热巴报平安](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%8A%A5%E5%B9%B3%E5%AE%89%23) `198.4K 🔥` `+30%`
1. [办公室被张柏芝美貌暴击](https://s.weibo.com/weibo?q=%23%E5%8A%9E%E5%85%AC%E5%AE%A4%E8%A2%AB%E5%BC%A0%E6%9F%8F%E8%8A%9D%E7%BE%8E%E8%B2%8C%E6%9A%B4%E5%87%BB%23) `195.1K 🔥` `+60%`
1. [文咏珊出个国帅成啥了](https://s.weibo.com/weibo?q=%23%E6%96%87%E5%92%8F%E7%8F%8A%E5%87%BA%E4%B8%AA%E5%9B%BD%E5%B8%85%E6%88%90%E5%95%A5%E4%BA%86%23) `181.2K 🔥` `+49%`
1. [中国2025成绩单](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD2025%E6%88%90%E7%BB%A9%E5%8D%95%23) `674.4K 🔥`
1. [吴京 公了别人嬷了自己](https://s.weibo.com/weibo?q=%23%E5%90%B4%E4%BA%AC%20%E5%85%AC%E4%BA%86%E5%88%AB%E4%BA%BA%E5%AC%B7%E4%BA%86%E8%87%AA%E5%B7%B1%23) `233.4K 🔥`
1. [终于明白项羽为什么不肯过江东 (Finally understood why Xiang Yu refused to cross Jiangdong)](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%98%8E%E7%99%BD%E9%A1%B9%E7%BE%BD%E4%B8%BA%E4%BB%80%E4%B9%88%E4%B8%8D%E8%82%AF%E8%BF%87%E6%B1%9F%E4%B8%9C%23) `227.7K 🔥`
1. [孔雪儿撑伞又出神图](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E6%92%91%E4%BC%9E%E5%8F%88%E5%87%BA%E7%A5%9E%E5%9B%BE%23) `96.9K 🔥`
1. [因为自助没吃回本生气了](https://s.weibo.com/weibo?q=%23%E5%9B%A0%E4%B8%BA%E8%87%AA%E5%8A%A9%E6%B2%A1%E5%90%83%E5%9B%9E%E6%9C%AC%E7%94%9F%E6%B0%94%E4%BA%86%23) `86.9K 🔥`
1. [张凌赫是懂我们想看什么的 (Zhang Linghe knows what we want to see)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%98%AF%E6%87%82%E6%88%91%E4%BB%AC%E6%83%B3%E7%9C%8B%E4%BB%80%E4%B9%88%E7%9A%84%23) `86.9K 🔥`
1. [奶奶你是一块金子放错了地方](https://s.weibo.com/weibo?q=%23%E5%A5%B6%E5%A5%B6%E4%BD%A0%E6%98%AF%E4%B8%80%E5%9D%97%E9%87%91%E5%AD%90%E6%94%BE%E9%94%99%E4%BA%86%E5%9C%B0%E6%96%B9%23) `394.5K 🔥` `-41%`
1. [方寸之间看见中国](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AF%B8%E4%B9%8B%E9%97%B4%E7%9C%8B%E8%A7%81%E4%B8%AD%E5%9B%BD%23) `243.7K 🔥` `-57%`
1. [伊朗袭击以国防部大楼 (Iran attacks Israeli defense building)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%A2%AD%E5%87%BB%E4%BB%A5%E5%9B%BD%E9%98%B2%E9%83%A8%E5%A4%A7%E6%A5%BC%23) `238.9K 🔥` `-68%`
1. [建议禁止性侵未成年罪犯进入幼儿园 (It is recommended that juvenile sexual offenders be prohibited from entering kindergartens)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E7%A6%81%E6%AD%A2%E6%80%A7%E4%BE%B5%E6%9C%AA%E6%88%90%E5%B9%B4%E7%BD%AA%E7%8A%AF%E8%BF%9B%E5%85%A5%E5%B9%BC%E5%84%BF%E5%9B%AD%23) `238.2K 🔥` `-53%`
1. [小偷来了都要先玩俩小时](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E5%81%B7%E6%9D%A5%E4%BA%86%E9%83%BD%E8%A6%81%E5%85%88%E7%8E%A9%E4%BF%A9%E5%B0%8F%E6%97%B6%23) `236.6K 🔥` `-48%`
1. [懂中日韩语的都沉默了](https://s.weibo.com/weibo?q=%23%E6%87%82%E4%B8%AD%E6%97%A5%E9%9F%A9%E8%AF%AD%E7%9A%84%E9%83%BD%E6%B2%89%E9%BB%98%E4%BA%86%23) `234.4K 🔥` `-44%`
1. [阿里已批准林俊旸离职](https://s.weibo.com/weibo?q=%23%E9%98%BF%E9%87%8C%E5%B7%B2%E6%89%B9%E5%87%86%E6%9E%97%E4%BF%8A%E6%97%B8%E7%A6%BB%E8%81%8C%23) `230.0K 🔥` `-65%`
1. [中国芯片攻关取得新突破 (China has made new breakthroughs in chip research)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%8A%AF%E7%89%87%E6%94%BB%E5%85%B3%E5%8F%96%E5%BE%97%E6%96%B0%E7%AA%81%E7%A0%B4%23) `194.2K 🔥` `-82%`
1. [2026政府工作报告 (2026 Government Work Report)](https://s.weibo.com/weibo?q=%232026%E6%94%BF%E5%BA%9C%E5%B7%A5%E4%BD%9C%E6%8A%A5%E5%91%8A%23) `169.1K 🔥` `-33%`
1. [电影我的妈耶定档](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E6%88%91%E7%9A%84%E5%A6%88%E8%80%B6%E5%AE%9A%E6%A1%A3%23) `152.0K 🔥` `-80%`
1. [没见过气血虚成这样的 (I have never seen such a person with Qi and blood deficiency.)](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E8%A7%81%E8%BF%87%E6%B0%94%E8%A1%80%E8%99%9A%E6%88%90%E8%BF%99%E6%A0%B7%E7%9A%84%23) `126.1K 🔥` `-38%`
1. [推进祖国统一 (Promote the reunification of the motherland)](https://s.weibo.com/weibo?q=%23%E6%8E%A8%E8%BF%9B%E7%A5%96%E5%9B%BD%E7%BB%9F%E4%B8%80%23) `125.7K 🔥` `-83%`
1. [伊朗总统强调尊重邻国主权](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E5%BC%BA%E8%B0%83%E5%B0%8A%E9%87%8D%E9%82%BB%E5%9B%BD%E4%B8%BB%E6%9D%83%23) `113.2K 🔥` `-59%`
1. [逐玉](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `103.6K 🔥` `-28%`
1. [十四届全国人大四次会议开幕会](https://s.weibo.com/weibo?q=%23%E5%8D%81%E5%9B%9B%E5%B1%8A%E5%85%A8%E5%9B%BD%E4%BA%BA%E5%A4%A7%E5%9B%9B%E6%AC%A1%E4%BC%9A%E8%AE%AE%E5%BC%80%E5%B9%95%E4%BC%9A%23) `97.6K 🔥` `-22%`
1. [140斤狗送狗肉馆途中女子600元买下](https://s.weibo.com/weibo?q=%23140%E6%96%A4%E7%8B%97%E9%80%81%E7%8B%97%E8%82%89%E9%A6%86%E9%80%94%E4%B8%AD%E5%A5%B3%E5%AD%90600%E5%85%83%E4%B9%B0%E4%B8%8B%23) `95.8K 🔥` `-26%`
1. [金毛发现自己的床躺满了小猫](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%AF%9B%E5%8F%91%E7%8E%B0%E8%87%AA%E5%B7%B1%E7%9A%84%E5%BA%8A%E8%BA%BA%E6%BB%A1%E4%BA%86%E5%B0%8F%E7%8C%AB%23) `91.5K 🔥` `-40%`
1. [原著里方穆静是妍妍的偶像 (In the original work, Fang Mujing is Yanyan’s idol)](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E8%91%97%E9%87%8C%E6%96%B9%E7%A9%86%E9%9D%99%E6%98%AF%E5%A6%8D%E5%A6%8D%E7%9A%84%E5%81%B6%E5%83%8F%23) `86.9K 🔥` `-43%`
1. [逐玉OST全阵容官宣 (Zhuyu OST full lineup officially announced)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89OST%E5%85%A8%E9%98%B5%E5%AE%B9%E5%AE%98%E5%AE%A3%23) `86.9K 🔥` `-33%`
1. [雷军回应小米手机是否涨价](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94%E5%B0%8F%E7%B1%B3%E6%89%8B%E6%9C%BA%E6%98%AF%E5%90%A6%E6%B6%A8%E4%BB%B7%23) `86.9K 🔥` `-43%`
1. [金饰克价涨到1605元](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E5%85%8B%E4%BB%B7%E6%B6%A8%E5%88%B01605%E5%85%83%23) `86.9K 🔥` `-33%`

Updated at 2026-03-05 13:59:48

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
