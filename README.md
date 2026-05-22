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

1. [女子捡到金项链发现异常立马扔掉 (A woman picked up a gold necklace and threw it away immediately after noticing something strange.)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8D%A1%E5%88%B0%E9%87%91%E9%A1%B9%E9%93%BE%E5%8F%91%E7%8E%B0%E5%BC%82%E5%B8%B8%E7%AB%8B%E9%A9%AC%E6%89%94%E6%8E%89%23) `1.2M 🔥` `NEW`
1. [微信回应只能撤回2分钟内消息](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E5%9B%9E%E5%BA%94%E5%8F%AA%E8%83%BD%E6%92%A4%E5%9B%9E2%E5%88%86%E9%92%9F%E5%86%85%E6%B6%88%E6%81%AF%23) `890.5K 🔥` `NEW`
1. [走近第二十二届文博会](https://s.weibo.com/weibo?q=%23%E8%B5%B0%E8%BF%91%E7%AC%AC%E4%BA%8C%E5%8D%81%E4%BA%8C%E5%B1%8A%E6%96%87%E5%8D%9A%E4%BC%9A%23) `810.7K 🔥` `NEW`
1. [张豆豆喊出我肚子很痛孙杨才停下来](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E8%B1%86%E8%B1%86%E5%96%8A%E5%87%BA%E6%88%91%E8%82%9A%E5%AD%90%E5%BE%88%E7%97%9B%E5%AD%99%E6%9D%A8%E6%89%8D%E5%81%9C%E4%B8%8B%E6%9D%A5%23) `808.5K 🔥` `NEW`
1. [第一次觉得excel好吵](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%89%E5%BE%97excel%E5%A5%BD%E5%90%B5%23) `803.2K 🔥` `NEW`
1. [赵丽颖易烊千玺三搭](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E4%B8%89%E6%90%AD%23) `707.8K 🔥` `NEW`
1. [雷军强烈推荐现在就换手机](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90%E7%8E%B0%E5%9C%A8%E5%B0%B1%E6%8D%A2%E6%89%8B%E6%9C%BA%23) `546.0K 🔥` `NEW`
1. [盛世天下女帝篇定档6月](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E4%B8%96%E5%A4%A9%E4%B8%8B%E5%A5%B3%E5%B8%9D%E7%AF%87%E5%AE%9A%E6%A1%A36%E6%9C%88%23) `443.0K 🔥` `NEW`
1. [学生用AI降论文AIGC率](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E7%94%9F%E7%94%A8AI%E9%99%8D%E8%AE%BA%E6%96%87AIGC%E7%8E%87%23) `439.8K 🔥` `NEW`
1. [雷军直言YU7输给ModelY原因](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E7%9B%B4%E8%A8%80YU7%E8%BE%93%E7%BB%99ModelY%E5%8E%9F%E5%9B%A0%23) `438.4K 🔥` `NEW`
1. [景甜方否认代孕协议 (Jing Tianfang denies surrogacy agreement)](https://s.weibo.com/weibo?q=%23%E6%99%AF%E7%94%9C%E6%96%B9%E5%90%A6%E8%AE%A4%E4%BB%A3%E5%AD%95%E5%8D%8F%E8%AE%AE%23) `431.9K 🔥` `NEW`
1. [澎湖海战](https://s.weibo.com/weibo?q=%23%E6%BE%8E%E6%B9%96%E6%B5%B7%E6%88%98%23) `423.2K 🔥` `NEW`
1. [盛世天下](https://s.weibo.com/weibo?q=%23%E7%9B%9B%E4%B8%96%E5%A4%A9%E4%B8%8B%23) `421.8K 🔥` `NEW`
1. [伊能静大战庾澄庆 宋妍霏大战窦靖童](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E5%A4%A7%E6%88%98%E5%BA%BE%E6%BE%84%E5%BA%86%20%E5%AE%8B%E5%A6%8D%E9%9C%8F%E5%A4%A7%E6%88%98%E7%AA%A6%E9%9D%96%E7%AB%A5%23) `418.3K 🔥` `NEW`
1. [易烊千玺演皇帝](https://s.weibo.com/weibo?q=%23%E6%98%93%E7%83%8A%E5%8D%83%E7%8E%BA%E6%BC%94%E7%9A%87%E5%B8%9D%23) `417.2K 🔥` `NEW`
1. [复旦教授沈奕斐遭家长疯狂举报两月](https://s.weibo.com/weibo?q=%23%E5%A4%8D%E6%97%A6%E6%95%99%E6%8E%88%E6%B2%88%E5%A5%95%E6%96%90%E9%81%AD%E5%AE%B6%E9%95%BF%E7%96%AF%E7%8B%82%E4%B8%BE%E6%8A%A5%E4%B8%A4%E6%9C%88%23) `414.2K 🔥` `NEW`
1. [生命早期营养的进度条又被刷新了](https://s.weibo.com/weibo?q=%23%E7%94%9F%E5%91%BD%E6%97%A9%E6%9C%9F%E8%90%A5%E5%85%BB%E7%9A%84%E8%BF%9B%E5%BA%A6%E6%9D%A1%E5%8F%88%E8%A2%AB%E5%88%B7%E6%96%B0%E4%BA%86%23) `408.0K 🔥` `NEW`
1. [李在明点名批评韩媒炮制涉华假新闻](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%9C%A8%E6%98%8E%E7%82%B9%E5%90%8D%E6%89%B9%E8%AF%84%E9%9F%A9%E5%AA%92%E7%82%AE%E5%88%B6%E6%B6%89%E5%8D%8E%E5%81%87%E6%96%B0%E9%97%BB%23) `401.5K 🔥` `NEW`
1. [汪峰又把人设立住了](https://s.weibo.com/weibo?q=%23%E6%B1%AA%E5%B3%B0%E5%8F%88%E6%8A%8A%E4%BA%BA%E8%AE%BE%E7%AB%8B%E4%BD%8F%E4%BA%86%23) `400.7K 🔥` `NEW`
1. [第一批检测论文AIGC率受害者发声](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%89%B9%E6%A3%80%E6%B5%8B%E8%AE%BA%E6%96%87AIGC%E7%8E%87%E5%8F%97%E5%AE%B3%E8%80%85%E5%8F%91%E5%A3%B0%23) `385.6K 🔥` `NEW`
1. [身上莫名长出的小红点是什么 (What are those little red spots that appear on my body for no apparent reason?)](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%B8%8A%E8%8E%AB%E5%90%8D%E9%95%BF%E5%87%BA%E7%9A%84%E5%B0%8F%E7%BA%A2%E7%82%B9%E6%98%AF%E4%BB%80%E4%B9%88%23) `381.8K 🔥` `NEW`
1. [赵丽颖天下大势乘风而来](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%A4%A9%E4%B8%8B%E5%A4%A7%E5%8A%BF%E4%B9%98%E9%A3%8E%E8%80%8C%E6%9D%A5%23) `381.5K 🔥` `NEW`
1. [肯德基 aespa](https://s.weibo.com/weibo?q=%23%E8%82%AF%E5%BE%B7%E5%9F%BA%20aespa%23) `377.5K 🔥` `NEW`
1. [女子收22万彩礼扔掉结婚证称没结婚](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%94%B622%E4%B8%87%E5%BD%A9%E7%A4%BC%E6%89%94%E6%8E%89%E7%BB%93%E5%A9%9A%E8%AF%81%E7%A7%B0%E6%B2%A1%E7%BB%93%E5%A9%9A%23) `373.7K 🔥` `NEW`
1. [TOP 青岛](https://s.weibo.com/weibo?q=%23TOP%20%E9%9D%92%E5%B2%9B%23) `373.7K 🔥` `NEW`
1. [韩国投资者抄底A股](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%8A%95%E8%B5%84%E8%80%85%E6%8A%84%E5%BA%95A%E8%82%A1%23) `324.5K 🔥` `NEW`
1. [电影澎湖海战定档7月25日](https://s.weibo.com/weibo?q=%23%E7%94%B5%E5%BD%B1%E6%BE%8E%E6%B9%96%E6%B5%B7%E6%88%98%E5%AE%9A%E6%A1%A37%E6%9C%8825%E6%97%A5%23) `293.0K 🔥` `NEW`
1. [第五人格](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%23) `290.3K 🔥` `NEW`
1. [曝刺棠宋祖儿换李宛妲](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%88%BA%E6%A3%A0%E5%AE%8B%E7%A5%96%E5%84%BF%E6%8D%A2%E6%9D%8E%E5%AE%9B%E5%A6%B2%23) `287.1K 🔥` `NEW`
1. [白鹿 年纪大了有点尴尬](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%20%E5%B9%B4%E7%BA%AA%E5%A4%A7%E4%BA%86%E6%9C%89%E7%82%B9%E5%B0%B4%E5%B0%AC%23) `229.0K 🔥` `NEW`
1. [沈奕斐被举报警惕家校零和博弈 (Shen Yifei was reported to be wary of zero-sum game between home and school)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E5%A5%95%E6%96%90%E8%A2%AB%E4%B8%BE%E6%8A%A5%E8%AD%A6%E6%83%95%E5%AE%B6%E6%A0%A1%E9%9B%B6%E5%92%8C%E5%8D%9A%E5%BC%88%23) `213.4K 🔥` `NEW`
1. [曝桃花坞游戏抄袭](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%A1%83%E8%8A%B1%E5%9D%9E%E6%B8%B8%E6%88%8F%E6%8A%84%E8%A2%AD%23) `206.3K 🔥` `NEW`
1. [高空跳伞遇难女子生前说突然让跳伞](https://s.weibo.com/weibo?q=%23%E9%AB%98%E7%A9%BA%E8%B7%B3%E4%BC%9E%E9%81%87%E9%9A%BE%E5%A5%B3%E5%AD%90%E7%94%9F%E5%89%8D%E8%AF%B4%E7%AA%81%E7%84%B6%E8%AE%A9%E8%B7%B3%E4%BC%9E%23) `183.7K 🔥` `NEW`
1. [冉莹颖三个儿子近照](https://s.weibo.com/weibo?q=%23%E5%86%89%E8%8E%B9%E9%A2%96%E4%B8%89%E4%B8%AA%E5%84%BF%E5%AD%90%E8%BF%91%E7%85%A7%23) `183.2K 🔥` `NEW`
1. [朱自清散文AI率超60%](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E8%87%AA%E6%B8%85%E6%95%A3%E6%96%87AI%E7%8E%87%E8%B6%8560%25%23) `182.8K 🔥` `NEW`
1. [女子回收箱投40斤衣物提现遭拒](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9B%9E%E6%94%B6%E7%AE%B1%E6%8A%9540%E6%96%A4%E8%A1%A3%E7%89%A9%E6%8F%90%E7%8E%B0%E9%81%AD%E6%8B%92%23) `182.0K 🔥` `NEW`
1. [周边50公里儿童性侵犯罪记录不靠谱](https://s.weibo.com/weibo?q=%23%E5%91%A8%E8%BE%B950%E5%85%AC%E9%87%8C%E5%84%BF%E7%AB%A5%E6%80%A7%E4%BE%B5%E7%8A%AF%E7%BD%AA%E8%AE%B0%E5%BD%95%E4%B8%8D%E9%9D%A0%E8%B0%B1%23) `181.8K 🔥` `NEW`
1. [尼克斯2比0骑士](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E5%85%8B%E6%96%AF2%E6%AF%940%E9%AA%91%E5%A3%AB%23) `181.2K 🔥` `NEW`
1. [沈梦辰歌手直播冷到发抖](https://s.weibo.com/weibo?q=%23%E6%B2%88%E6%A2%A6%E8%BE%B0%E6%AD%8C%E6%89%8B%E7%9B%B4%E6%92%AD%E5%86%B7%E5%88%B0%E5%8F%91%E6%8A%96%23) `176.7K 🔥` `NEW`
1. [詹姆斯说不会再去重建球队](https://s.weibo.com/weibo?q=%23%E8%A9%B9%E5%A7%86%E6%96%AF%E8%AF%B4%E4%B8%8D%E4%BC%9A%E5%86%8D%E5%8E%BB%E9%87%8D%E5%BB%BA%E7%90%83%E9%98%9F%23) `172.3K 🔥` `NEW`
1. [月薪归妻子丈夫倍感委屈起诉离婚 (The monthly salary goes to the wife, and the husband feels aggrieved and files for divorce)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA%E5%BD%92%E5%A6%BB%E5%AD%90%E4%B8%88%E5%A4%AB%E5%80%8D%E6%84%9F%E5%A7%94%E5%B1%88%E8%B5%B7%E8%AF%89%E7%A6%BB%E5%A9%9A%23) `171.1K 🔥` `NEW`
1. [赵樱子周柯宇售后](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%A8%B1%E5%AD%90%E5%91%A8%E6%9F%AF%E5%AE%87%E5%94%AE%E5%90%8E%23) `154.8K 🔥` `NEW`
1. [永辉超市向王健林等追债超36亿元](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E8%BE%89%E8%B6%85%E5%B8%82%E5%90%91%E7%8E%8B%E5%81%A5%E6%9E%97%E7%AD%89%E8%BF%BD%E5%80%BA%E8%B6%8536%E4%BA%BF%E5%85%83%23) `149.7K 🔥` `NEW`
1. [一定要告诉儿子的青春期生理变化](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%9A%E8%A6%81%E5%91%8A%E8%AF%89%E5%84%BF%E5%AD%90%E7%9A%84%E9%9D%92%E6%98%A5%E6%9C%9F%E7%94%9F%E7%90%86%E5%8F%98%E5%8C%96%23) `146.4K 🔥` `NEW`
1. [韩国服饰品牌抄袭汉服](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E6%9C%8D%E9%A5%B0%E5%93%81%E7%89%8C%E6%8A%84%E8%A2%AD%E6%B1%89%E6%9C%8D%23) `143.7K 🔥` `NEW`
1. [重磅研究成果在英国剑桥发布 (Major research results released in Cambridge, UK)](https://s.weibo.com/weibo?q=%23%E9%87%8D%E7%A3%85%E7%A0%94%E7%A9%B6%E6%88%90%E6%9E%9C%E5%9C%A8%E8%8B%B1%E5%9B%BD%E5%89%91%E6%A1%A5%E5%8F%91%E5%B8%83%23) `809.2K 🔥` `+763%`
1. [用上AI后工作时间反而更长了 (Working hours will be longer after using AI)](https://s.weibo.com/weibo?q=%23%E7%94%A8%E4%B8%8AAI%E5%90%8E%E5%B7%A5%E4%BD%9C%E6%97%B6%E9%97%B4%E5%8F%8D%E8%80%8C%E6%9B%B4%E9%95%BF%E4%BA%86%23) `411.6K 🔥` `+79%`
1. [男子拍到摊贩往西瓜上抹不明液体](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8B%8D%E5%88%B0%E6%91%8A%E8%B4%A9%E5%BE%80%E8%A5%BF%E7%93%9C%E4%B8%8A%E6%8A%B9%E4%B8%8D%E6%98%8E%E6%B6%B2%E4%BD%93%23) `405.4K 🔥` `+76%`
1. [金秀贤从全民唾骂到沉冤得雪](https://s.weibo.com/weibo?q=%23%E9%87%91%E7%A7%80%E8%B4%A4%E4%BB%8E%E5%85%A8%E6%B0%91%E5%94%BE%E9%AA%82%E5%88%B0%E6%B2%89%E5%86%A4%E5%BE%97%E9%9B%AA%23) `141.9K 🔥` `+51%`

Updated at 2026-05-22 12:32:42

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
