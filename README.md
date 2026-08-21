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

1. [微信 按住转文字 (WeChat press and hold to text)](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%20%E6%8C%89%E4%BD%8F%E8%BD%AC%E6%96%87%E5%AD%97%23) `1.2M 🔥` `NEW`
1. [怪不得金店不许留指甲](https://s.weibo.com/weibo?q=%23%E6%80%AA%E4%B8%8D%E5%BE%97%E9%87%91%E5%BA%97%E4%B8%8D%E8%AE%B8%E7%95%99%E6%8C%87%E7%94%B2%23) `357.2K 🔥` `NEW`
1. [周杰伦以昆凌名义购入豪宅](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E4%BB%A5%E6%98%86%E5%87%8C%E5%90%8D%E4%B9%89%E8%B4%AD%E5%85%A5%E8%B1%AA%E5%AE%85%23) `357.1K 🔥` `NEW`
1. [原来爱真的可以细腻成这样](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%88%B1%E7%9C%9F%E7%9A%84%E5%8F%AF%E4%BB%A5%E7%BB%86%E8%85%BB%E6%88%90%E8%BF%99%E6%A0%B7%23) `354.7K 🔥` `NEW`
1. [张雅琪中餐厅没有宿舍镜头](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E4%B8%AD%E9%A4%90%E5%8E%85%E6%B2%A1%E6%9C%89%E5%AE%BF%E8%88%8D%E9%95%9C%E5%A4%B4%23) `323.9K 🔥` `NEW`
1. [户口 区别待遇](https://s.weibo.com/weibo?q=%23%E6%88%B7%E5%8F%A3%20%E5%8C%BA%E5%88%AB%E5%BE%85%E9%81%87%23) `278.5K 🔥` `NEW`
1. [日本公务人员与情人开房时出席线上会](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%85%AC%E5%8A%A1%E4%BA%BA%E5%91%98%E4%B8%8E%E6%83%85%E4%BA%BA%E5%BC%80%E6%88%BF%E6%97%B6%E5%87%BA%E5%B8%AD%E7%BA%BF%E4%B8%8A%E4%BC%9A%23) `275.0K 🔥` `NEW`
1. [第三代唐成都车展首发亮相](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%89%E4%BB%A3%E5%94%90%E6%88%90%E9%83%BD%E8%BD%A6%E5%B1%95%E9%A6%96%E5%8F%91%E4%BA%AE%E7%9B%B8%23) `193.1K 🔥` `NEW`
1. [王俊凯一句话昆凌天塌了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E4%B8%80%E5%8F%A5%E8%AF%9D%E6%98%86%E5%87%8C%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `183.5K 🔥` `NEW`
1. [刘冲回应安妮海瑟薇封面争议](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%86%B2%E5%9B%9E%E5%BA%94%E5%AE%89%E5%A6%AE%E6%B5%B7%E7%91%9F%E8%96%87%E5%B0%81%E9%9D%A2%E4%BA%89%E8%AE%AE%23) `173.0K 🔥` `NEW`
1. [人类记忆终于有了云备份 (Human memory finally has cloud backup)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%B1%BB%E8%AE%B0%E5%BF%86%E7%BB%88%E4%BA%8E%E6%9C%89%E4%BA%86%E4%BA%91%E5%A4%87%E4%BB%BD%23) `162.7K 🔥` `NEW`
1. [宇树机器人入职理想汽车](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%85%A5%E8%81%8C%E7%90%86%E6%83%B3%E6%B1%BD%E8%BD%A6%23) `158.5K 🔥` `NEW`
1. [45岁的陈冠希48岁的黄晓明](https://s.weibo.com/weibo?q=%2345%E5%B2%81%E7%9A%84%E9%99%88%E5%86%A0%E5%B8%8C48%E5%B2%81%E7%9A%84%E9%BB%84%E6%99%93%E6%98%8E%23) `138.7K 🔥` `NEW`
1. [衣服阴干为什么会臭](https://s.weibo.com/weibo?q=%23%E8%A1%A3%E6%9C%8D%E9%98%B4%E5%B9%B2%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BC%9A%E8%87%AD%23) `123.0K 🔥` `NEW`
1. [烘干机比太阳晒更靠谱吗](https://s.weibo.com/weibo?q=%23%E7%83%98%E5%B9%B2%E6%9C%BA%E6%AF%94%E5%A4%AA%E9%98%B3%E6%99%92%E6%9B%B4%E9%9D%A0%E8%B0%B1%E5%90%97%23) `122.4K 🔥` `NEW`
1. [刘冲呼吁非必要不穿高定](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%86%B2%E5%91%BC%E5%90%81%E9%9D%9E%E5%BF%85%E8%A6%81%E4%B8%8D%E7%A9%BF%E9%AB%98%E5%AE%9A%23) `122.2K 🔥` `NEW`
1. [18岁女护士被师傅侵害男友发声](https://s.weibo.com/weibo?q=%2318%E5%B2%81%E5%A5%B3%E6%8A%A4%E5%A3%AB%E8%A2%AB%E5%B8%88%E5%82%85%E4%BE%B5%E5%AE%B3%E7%94%B7%E5%8F%8B%E5%8F%91%E5%A3%B0%23) `117.7K 🔥` `NEW`
1. [永远尊重教你工作的人](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E8%BF%9C%E5%B0%8A%E9%87%8D%E6%95%99%E4%BD%A0%E5%B7%A5%E4%BD%9C%E7%9A%84%E4%BA%BA%23) `111.9K 🔥` `NEW`
1. [迪丽热巴注意粉丝樱桃纹身](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%B3%A8%E6%84%8F%E7%B2%89%E4%B8%9D%E6%A8%B1%E6%A1%83%E7%BA%B9%E8%BA%AB%23) `100.7K 🔥` `NEW`
1. [2026羽毛球世锦赛](https://s.weibo.com/weibo?q=%232026%E7%BE%BD%E6%AF%9B%E7%90%83%E4%B8%96%E9%94%A6%E8%B5%9B%23) `100.0K 🔥` `NEW`
1. [LV全国多地门店关闭 (LV stores are closed across the country)](https://s.weibo.com/weibo?q=%23LV%E5%85%A8%E5%9B%BD%E5%A4%9A%E5%9C%B0%E9%97%A8%E5%BA%97%E5%85%B3%E9%97%AD%23) `1.1M 🔥` `+38%`
1. [印度驻华大使禁止调侃辱骂印度人 (Indian ambassador to China banned from teasing and insulting Indians)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E9%A9%BB%E5%8D%8E%E5%A4%A7%E4%BD%BF%E7%A6%81%E6%AD%A2%E8%B0%83%E4%BE%83%E8%BE%B1%E9%AA%82%E5%8D%B0%E5%BA%A6%E4%BA%BA%23) `506.1K 🔥` `+133%`
1. [横店长剧在拍仅16部 (There are only 16 Hengdian dramas in production)](https://s.weibo.com/weibo?q=%23%E6%A8%AA%E5%BA%97%E9%95%BF%E5%89%A7%E5%9C%A8%E6%8B%8D%E4%BB%8516%E9%83%A8%23) `428.2K 🔥` `+49%`
1. [结婚一个月离婚拒退50万彩礼](https://s.weibo.com/weibo?q=%23%E7%BB%93%E5%A9%9A%E4%B8%80%E4%B8%AA%E6%9C%88%E7%A6%BB%E5%A9%9A%E6%8B%92%E9%80%8050%E4%B8%87%E5%BD%A9%E7%A4%BC%23) `276.6K 🔥` `+95%`
1. [自驾游国家级攻略来了](https://s.weibo.com/weibo?q=%23%E8%87%AA%E9%A9%BE%E6%B8%B8%E5%9B%BD%E5%AE%B6%E7%BA%A7%E6%94%BB%E7%95%A5%E6%9D%A5%E4%BA%86%23) `666.9K 🔥`
1. [新世代BMW iX3 26.99万起](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%B8%96%E4%BB%A3BMW%20iX3%2026.99%E4%B8%87%E8%B5%B7%23) `662.7K 🔥`
1. [中餐厅给张雅琪配了时钟后期](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%A4%90%E5%8E%85%E7%BB%99%E5%BC%A0%E9%9B%85%E7%90%AA%E9%85%8D%E4%BA%86%E6%97%B6%E9%92%9F%E5%90%8E%E6%9C%9F%23) `659.8K 🔥`
1. [安踏品牌前CEO徐阳离职迁居美国](https://s.weibo.com/weibo?q=%23%E5%AE%89%E8%B8%8F%E5%93%81%E7%89%8C%E5%89%8DCEO%E5%BE%90%E9%98%B3%E7%A6%BB%E8%81%8C%E8%BF%81%E5%B1%85%E7%BE%8E%E5%9B%BD%23) `581.4K 🔥`
1. [加木遭遇严重车祸 (Jiamu suffered a serious car accident)](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%9C%A8%E9%81%AD%E9%81%87%E4%B8%A5%E9%87%8D%E8%BD%A6%E7%A5%B8%23) `402.9K 🔥`
1. [赵丽颖儿子想想7岁身高](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%84%BF%E5%AD%90%E6%83%B3%E6%83%B37%E5%B2%81%E8%BA%AB%E9%AB%98%23) `356.3K 🔥`
1. [时代少年团F1商标相似度](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2F1%E5%95%86%E6%A0%87%E7%9B%B8%E4%BC%BC%E5%BA%A6%23) `305.9K 🔥`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `271.1K 🔥`
1. [律师称时代少年团涉F1商标争议](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E7%A7%B0%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E6%B6%89F1%E5%95%86%E6%A0%87%E4%BA%89%E8%AE%AE%23) `176.6K 🔥`
1. [老爷爷抱两只打架猫咪拍照 (Grandpa takes photos with two fighting cats)](https://s.weibo.com/weibo?q=%23%E8%80%81%E7%88%B7%E7%88%B7%E6%8A%B1%E4%B8%A4%E5%8F%AA%E6%89%93%E6%9E%B6%E7%8C%AB%E5%92%AA%E6%8B%8D%E7%85%A7%23) `176.0K 🔥`
1. [法院电话秒挂可能是诉讼套路](https://s.weibo.com/weibo?q=%23%E6%B3%95%E9%99%A2%E7%94%B5%E8%AF%9D%E7%A7%92%E6%8C%82%E5%8F%AF%E8%83%BD%E6%98%AF%E8%AF%89%E8%AE%BC%E5%A5%97%E8%B7%AF%23) `160.5K 🔥`
1. [问界儿童车售价15800](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8C%E5%84%BF%E7%AB%A5%E8%BD%A6%E5%94%AE%E4%BB%B715800%23) `586.7K 🔥` `-50%`
1. [陈瑶和父母同住两个月没见过面](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E5%92%8C%E7%88%B6%E6%AF%8D%E5%90%8C%E4%BD%8F%E4%B8%A4%E4%B8%AA%E6%9C%88%E6%B2%A1%E8%A7%81%E8%BF%87%E9%9D%A2%23) `520.0K 🔥` `-27%`
1. [癌症疫苗价格](https://s.weibo.com/weibo?q=%23%E7%99%8C%E7%97%87%E7%96%AB%E8%8B%97%E4%BB%B7%E6%A0%BC%23) `457.6K 🔥` `-31%`
1. [现在就出发 (Let's go now)](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E5%B0%B1%E5%87%BA%E5%8F%91%23) `265.7K 🔥` `-58%`
1. [时团演唱会官摄打码了 (The official photos of the band's concert have been coded)](https://s.weibo.com/weibo?q=%23%E6%97%B6%E5%9B%A2%E6%BC%94%E5%94%B1%E4%BC%9A%E5%AE%98%E6%91%84%E6%89%93%E7%A0%81%E4%BA%86%23) `265.5K 🔥` `-23%`
1. [V金九刊三套高定](https://s.weibo.com/weibo?q=%23V%E9%87%91%E4%B9%9D%E5%88%8A%E4%B8%89%E5%A5%97%E9%AB%98%E5%AE%9A%23) `260.2K 🔥` `-25%`
1. [梅尼耶女友与迪丽热巴合照](https://s.weibo.com/weibo?q=%23%E6%A2%85%E5%B0%BC%E8%80%B6%E5%A5%B3%E5%8F%8B%E4%B8%8E%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%90%88%E7%85%A7%23) `257.4K 🔥` `-21%`
1. [LV老花源自中国千年传统纹样](https://s.weibo.com/weibo?q=%23LV%E8%80%81%E8%8A%B1%E6%BA%90%E8%87%AA%E4%B8%AD%E5%9B%BD%E5%8D%83%E5%B9%B4%E4%BC%A0%E7%BB%9F%E7%BA%B9%E6%A0%B7%23) `176.6K 🔥` `-41%`
1. [谢娜沈梦辰主持对比 (Xie Na and Shen Mengchen hosted the comparison)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%B2%88%E6%A2%A6%E8%BE%B0%E4%B8%BB%E6%8C%81%E5%AF%B9%E6%AF%94%23) `144.9K 🔥` `-38%`
1. [北大教授称灵活就业是福利](https://s.weibo.com/weibo?q=%23%E5%8C%97%E5%A4%A7%E6%95%99%E6%8E%88%E7%A7%B0%E7%81%B5%E6%B4%BB%E5%B0%B1%E4%B8%9A%E6%98%AF%E7%A6%8F%E5%88%A9%23) `124.3K 🔥` `-31%`
1. [AI复原84位皇后容貌](https://s.weibo.com/weibo?q=%23AI%E5%A4%8D%E5%8E%9F84%E4%BD%8D%E7%9A%87%E5%90%8E%E5%AE%B9%E8%B2%8C%23) `120.6K 🔥` `-40%`
1. [杨天真曝影视寒冬现状 (Yang Tianzhen reveals the current situation of film and television in the cold winter)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%A4%A9%E7%9C%9F%E6%9B%9D%E5%BD%B1%E8%A7%86%E5%AF%92%E5%86%AC%E7%8E%B0%E7%8A%B6%23) `113.8K 🔥` `-47%`
1. [孕早期胎停大多不是孕妇个人过失](https://s.weibo.com/weibo?q=%23%E5%AD%95%E6%97%A9%E6%9C%9F%E8%83%8E%E5%81%9C%E5%A4%A7%E5%A4%9A%E4%B8%8D%E6%98%AF%E5%AD%95%E5%A6%87%E4%B8%AA%E4%BA%BA%E8%BF%87%E5%A4%B1%23) `112.9K 🔥` `-30%`
1. [印度人袭击疑载有牛肉的卡车致多人丧生](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E4%BA%BA%E8%A2%AD%E5%87%BB%E7%96%91%E8%BD%BD%E6%9C%89%E7%89%9B%E8%82%89%E7%9A%84%E5%8D%A1%E8%BD%A6%E8%87%B4%E5%A4%9A%E4%BA%BA%E4%B8%A7%E7%94%9F%23) `103.8K 🔥` `-34%`
1. [詹姆斯距NBA总收入第一仅差180万](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E8%B7%9DNBA%E6%80%BB%E6%94%B6%E5%85%A5%E7%AC%AC%E4%B8%80%E4%BB%85%E5%B7%AE180%E4%B8%87%23) `100.9K 🔥` `-68%`

Updated at 2026-08-21 16:50:53

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
