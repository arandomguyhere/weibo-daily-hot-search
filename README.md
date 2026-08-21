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

1. [王俊凯红犀牛大中华区品牌代言人 (Wang Junkai Red Rhino Greater China Brand Spokesperson)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E7%BA%A2%E7%8A%80%E7%89%9B%E5%A4%A7%E4%B8%AD%E5%8D%8E%E5%8C%BA%E5%93%81%E7%89%8C%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `452.9K 🔥` `NEW`
1. [微信聊天框 难看](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E8%81%8A%E5%A4%A9%E6%A1%86%20%E9%9A%BE%E7%9C%8B%23) `403.4K 🔥` `NEW`
1. [北大张丹丹 何不食肉糜](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%A4%A7%E5%BC%A0%E4%B8%B9%E4%B8%B9%20%E4%BD%95%E4%B8%8D%E9%A3%9F%E8%82%89%E7%B3%9C%23) `343.5K 🔥` `NEW`
1. [临沂爆炸](https://s.weibo.com/weibo?q=%23%E4%B8%B4%E6%B2%82%E7%88%86%E7%82%B8%23) `342.1K 🔥` `NEW`
1. [女子游泳馆内偷拍他人洗澡发给丈夫](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%B8%B8%E6%B3%B3%E9%A6%86%E5%86%85%E5%81%B7%E6%8B%8D%E4%BB%96%E4%BA%BA%E6%B4%97%E6%BE%A1%E5%8F%91%E7%BB%99%E4%B8%88%E5%A4%AB%23) `339.4K 🔥` `NEW`
1. [LV将彻底退出贵州市场](https://s.weibo.com/weibo?q=%23LV%E5%B0%86%E5%BD%BB%E5%BA%95%E9%80%80%E5%87%BA%E8%B4%B5%E5%B7%9E%E5%B8%82%E5%9C%BA%23) `337.5K 🔥` `NEW`
1. [扬州男子钓鱼钓出一袋疑似公章](https://s.weibo.com/weibo?q=%23%E6%89%AC%E5%B7%9E%E7%94%B7%E5%AD%90%E9%92%93%E9%B1%BC%E9%92%93%E5%87%BA%E4%B8%80%E8%A2%8B%E7%96%91%E4%BC%BC%E5%85%AC%E7%AB%A0%23) `332.0K 🔥` `NEW`
1. [金价再突破4600美元](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%E5%86%8D%E7%AA%81%E7%A0%B44600%E7%BE%8E%E5%85%83%23) `316.7K 🔥` `NEW`
1. [汪苏泷罗曼城 音乐节](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E8%8B%8F%E6%B3%B7%E7%BD%97%E6%9B%BC%E5%9F%8E%20%E9%9F%B3%E4%B9%90%E8%8A%82%23) `238.2K 🔥` `NEW`
1. [为什么建议定期更换水杯](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%BB%BA%E8%AE%AE%E5%AE%9A%E6%9C%9F%E6%9B%B4%E6%8D%A2%E6%B0%B4%E6%9D%AF%23) `169.1K 🔥` `NEW`
1. [18岁护士遭侵害时觉得丢人未大声呼救 (18-year-old nurse felt ashamed and did not cry out for help when she was assaulted)](https://s.weibo.com/weibo?q=%2318%E5%B2%81%E6%8A%A4%E5%A3%AB%E9%81%AD%E4%BE%B5%E5%AE%B3%E6%97%B6%E8%A7%89%E5%BE%97%E4%B8%A2%E4%BA%BA%E6%9C%AA%E5%A4%A7%E5%A3%B0%E5%91%BC%E6%95%91%23) `166.9K 🔥` `NEW`
1. [大王瘦了47斤](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%8E%8B%E7%98%A6%E4%BA%8647%E6%96%A4%23) `145.1K 🔥` `NEW`
1. [柯淳爱在无尽夏男二](https://s.weibo.com/weibo?q=%23%E6%9F%AF%E6%B7%B3%E7%88%B1%E5%9C%A8%E6%97%A0%E5%B0%BD%E5%A4%8F%E7%94%B7%E4%BA%8C%23) `144.2K 🔥` `NEW`
1. [MG07价格爆爆爆爆爆爆爆爆爆爆爆](https://s.weibo.com/weibo?q=%23MG07%E4%BB%B7%E6%A0%BC%E7%88%86%E7%88%86%E7%88%86%E7%88%86%E7%88%86%E7%88%86%E7%88%86%E7%88%86%E7%88%86%E7%88%86%E7%88%86%23) `143.8K 🔥` `NEW`
1. [女子退款不退货薅了13万](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E9%80%80%E6%AC%BE%E4%B8%8D%E9%80%80%E8%B4%A7%E8%96%85%E4%BA%8613%E4%B8%87%23) `130.2K 🔥` `NEW`
1. [北京WBG对战MRC](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%ACWBG%E5%AF%B9%E6%88%98MRC%23) `114.1K 🔥` `NEW`
1. [得闲谨制入围金鹿奖](https://s.weibo.com/weibo?q=%23%E5%BE%97%E9%97%B2%E8%B0%A8%E5%88%B6%E5%85%A5%E5%9B%B4%E9%87%91%E9%B9%BF%E5%A5%96%23) `113.6K 🔥` `NEW`
1. [南部空军正告菲方](https://s.weibo.com/weibo?q=%23%E5%8D%97%E9%83%A8%E7%A9%BA%E5%86%9B%E6%AD%A3%E5%91%8A%E8%8F%B2%E6%96%B9%23) `110.9K 🔥` `NEW`
1. [丁禹兮柯淳新剧状态](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E6%9F%AF%E6%B7%B3%E6%96%B0%E5%89%A7%E7%8A%B6%E6%80%81%23) `394.0K 🔥` `+80%`
1. [张子枫瘦得脸颊肉都没了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E6%9E%AB%E7%98%A6%E5%BE%97%E8%84%B8%E9%A2%8A%E8%82%89%E9%83%BD%E6%B2%A1%E4%BA%86%23) `338.7K 🔥` `+55%`
1. [永远尊重教你工作的人 (Always respect the person who teaches you work)](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E8%BF%9C%E5%B0%8A%E9%87%8D%E6%95%99%E4%BD%A0%E5%B7%A5%E4%BD%9C%E7%9A%84%E4%BA%BA%23) `337.1K 🔥` `+56%`
1. [日本公务人员与情人开房时出席线上会 (Japanese civil servants attended an online meeting with their lover when they checked into a hotel room)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%85%AC%E5%8A%A1%E4%BA%BA%E5%91%98%E4%B8%8E%E6%83%85%E4%BA%BA%E5%BC%80%E6%88%BF%E6%97%B6%E5%87%BA%E5%B8%AD%E7%BA%BF%E4%B8%8A%E4%BC%9A%23) `336.2K 🔥` `+54%`
1. [LV全国多地门店关闭 (LV stores are closed across the country)](https://s.weibo.com/weibo?q=%23LV%E5%85%A8%E5%9B%BD%E5%A4%9A%E5%9C%B0%E9%97%A8%E5%BA%97%E5%85%B3%E9%97%AD%23) `937.5K 🔥`
1. [今年以旧换新已惠及1.78亿人次 (This year’s trade-in has benefited 178 million people)](https://s.weibo.com/weibo?q=%23%E4%BB%8A%E5%B9%B4%E4%BB%A5%E6%97%A7%E6%8D%A2%E6%96%B0%E5%B7%B2%E6%83%A0%E5%8F%8A1.78%E4%BA%BF%E4%BA%BA%E6%AC%A1%23) `710.1K 🔥`
1. [美团会员联动原神送至冬好礼 (Meituan members collaborate with Genshin Impact to send winter gifts)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%A2%E4%BC%9A%E5%91%98%E8%81%94%E5%8A%A8%E5%8E%9F%E7%A5%9E%E9%80%81%E8%87%B3%E5%86%AC%E5%A5%BD%E7%A4%BC%23) `710.1K 🔥`
1. [中餐厅给张雅琪配了时钟后期](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%85%E7%BB%99%E5%BC%A0%E9%9B%85%E7%90%AA%E9%85%8D%E4%BA%86%E6%97%B6%E9%92%9F%E5%90%8E%E6%9C%9F%23) `710.0K 🔥`
1. [原来爱真的可以细腻成这样](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%88%B1%E7%9C%9F%E7%9A%84%E5%8F%AF%E4%BB%A5%E7%BB%86%E8%85%BB%E6%88%90%E8%BF%99%E6%A0%B7%23) `619.2K 🔥`
1. [户口 区别待遇](https://s.weibo.com/weibo?q=%23%E6%88%B7%E5%8F%A3%20%E5%8C%BA%E5%88%AB%E5%BE%85%E9%81%87%23) `553.3K 🔥`
1. [问界儿童车售价15800](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8C%E5%84%BF%E7%AB%A5%E8%BD%A6%E5%94%AE%E4%BB%B715800%23) `344.8K 🔥`
1. [横店长剧在拍仅16部 (There are only 16 Hengdian dramas in production)](https://s.weibo.com/weibo?q=%23%E6%A8%AA%E5%BA%97%E9%95%BF%E5%89%A7%E5%9C%A8%E6%8B%8D%E4%BB%8516%E9%83%A8%23) `344.0K 🔥`
1. [45岁的陈冠希48岁的黄晓明](https://s.weibo.com/weibo?q=%2345%E5%B2%81%E7%9A%84%E9%99%88%E5%86%A0%E5%B8%8C48%E5%B2%81%E7%9A%84%E9%BB%84%E6%99%93%E6%98%8E%23) `342.9K 🔥`
1. [周杰伦以昆凌名义购入豪宅](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E4%BB%A5%E6%98%86%E5%87%8C%E5%90%8D%E4%B9%89%E8%B4%AD%E5%85%A5%E8%B1%AA%E5%AE%85%23) `341.4K 🔥`
1. [加木遭遇严重车祸 (Jiamu suffered a serious car accident)](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%9C%A8%E9%81%AD%E9%81%87%E4%B8%A5%E9%87%8D%E8%BD%A6%E7%A5%B8%23) `340.5K 🔥`
1. [时代少年团F1商标相似度](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2F1%E5%95%86%E6%A0%87%E7%9B%B8%E4%BC%BC%E5%BA%A6%23) `335.7K 🔥`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `331.8K 🔥`
1. [老爷爷抱两只打架猫咪拍照 (Grandpa takes photos with two fighting cats)](https://s.weibo.com/weibo?q=%23%E8%80%81%E7%88%B7%E7%88%B7%E6%8A%B1%E4%B8%A4%E5%8F%AA%E6%89%93%E6%9E%B6%E7%8C%AB%E5%92%AA%E6%8B%8D%E7%85%A7%23) `315.5K 🔥`
1. [怪不得金店不许留指甲](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E9%87%91%E5%BA%97%E4%B8%8D%E8%AE%B8%E7%95%99%E6%8C%87%E7%94%B2%23) `253.4K 🔥`
1. [胡先煦海边的快乐小狗 (Hu Xianxu’s happy puppy at the beach)](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%85%88%E7%85%A6%E6%B5%B7%E8%BE%B9%E7%9A%84%E5%BF%AB%E4%B9%90%E5%B0%8F%E7%8B%97%23) `144.9K 🔥`
1. [王俊凯一句话昆凌天塌了 (Wang Junkai said one sentence and Kun Ling's sky fell.)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%B8%80%E5%8F%A5%E8%AF%9D%E6%98%86%E5%87%8C%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `143.7K 🔥`
1. [刘冲回应安妮海瑟薇封面争议 (Liu Chong responds to Anne Hathaway cover controversy)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%86%B2%E5%9B%9E%E5%BA%94%E5%AE%89%E5%A6%AE%E6%B5%B7%E7%91%9F%E8%96%87%E5%B0%81%E9%9D%A2%E4%BA%89%E8%AE%AE%23) `123.2K 🔥`
1. [微信 按住转文字 (WeChat press and hold to text)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%20%E6%8C%89%E4%BD%8F%E8%BD%AC%E6%96%87%E5%AD%97%23) `1.7M 🔥` `-30%`
1. [癌症疫苗价格 (cancer vaccine prices)](https://s.weibo.com/weibo?q=%23%E7%99%8C%E7%97%87%E7%96%AB%E8%8B%97%E4%BB%B7%E6%A0%BC%23) `269.1K 🔥` `-27%`
1. [赵丽颖儿子想想7岁身高](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%84%BF%E5%AD%90%E6%83%B3%E6%83%B37%E5%B2%81%E8%BA%AB%E9%AB%98%23) `256.0K 🔥` `-24%`
1. [现在就出发 (Let's go now)](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%91%23) `211.8K 🔥` `-32%`
1. [陈妍希曝40岁女演员现状](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%A6%8D%E5%B8%8C%E6%9B%9D40%E5%B2%81%E5%A5%B3%E6%BC%94%E5%91%98%E7%8E%B0%E7%8A%B6%23) `168.5K 🔥` `-23%`
1. [打工人的通病有救了](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%B7%A5%E4%BA%BA%E7%9A%84%E9%80%9A%E7%97%85%E6%9C%89%E6%95%91%E4%BA%86%23) `166.9K 🔥` `-54%`
1. [结婚一个月离婚拒退50万彩礼](https://s.weibo.com/weibo?q=%23%E7%BB%93%E5%A9%9A%E4%B8%80%E4%B8%AA%E6%9C%88%E7%A6%BB%E5%A9%9A%E6%8B%92%E9%80%8050%E4%B8%87%E5%BD%A9%E7%A4%BC%23) `166.9K 🔥` `-54%`
1. [时团演唱会官摄打码了 (The official photos of the band's concert have been coded)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E5%9B%A2%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%98%E6%91%84%E6%89%93%E7%A0%81%E4%BA%86%23) `155.7K 🔥` `-29%`
1. [梅尼耶女友与迪丽热巴合照](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%B0%BC%E8%80%B6%E5%A5%B3%E5%8F%8B%E4%B8%8E%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%90%88%E7%85%A7%23) `143.5K 🔥` `-33%`
1. [法院电话秒挂可能是诉讼套路](https://s.weibo.com/weibo?q=%23%E6%B3%95%E9%99%A2%E7%94%B5%E8%AF%9D%E7%A7%92%E6%8C%82%E5%8F%AF%E8%83%BD%E6%98%AF%E8%AF%89%E8%AE%BC%E5%A5%97%E8%B7%AF%23) `128.1K 🔥` `-41%`
1. [律师称时代少年团涉F1商标争议](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E7%A7%B0%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%B6%89F1%E5%95%86%E6%A0%87%E4%BA%89%E8%AE%AE%23) `125.6K 🔥` `-21%`

Updated at 2026-08-21 17:59:49

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
