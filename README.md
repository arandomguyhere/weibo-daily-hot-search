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

1. [赵丽颖工作室发楚乔传采访 (Zhao Liying's studio releases Chu Qiao biography interview)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E5%B7%A5%E4%BD%9C%E5%AE%A4%E5%8F%91%E6%A5%9A%E4%B9%94%E4%BC%A0%E9%87%87%E8%AE%BF%23) `465.8K 🔥` `NEW`
1. [你是迟来的欢喜婚礼嗑爽了](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E6%98%AF%E8%BF%9F%E6%9D%A5%E7%9A%84%E6%AC%A2%E5%96%9C%E5%A9%9A%E7%A4%BC%E5%97%91%E7%88%BD%E4%BA%86%23) `215.3K 🔥` `NEW`
1. [沈阳妇联正在跟进弃女涉嫌摆拍事件](https://s.weibo.com/weibo?q=%23%E6%B2%88%E9%98%B3%E5%A6%87%E8%81%94%E6%AD%A3%E5%9C%A8%E8%B7%9F%E8%BF%9B%E5%BC%83%E5%A5%B3%E6%B6%89%E5%AB%8C%E6%91%86%E6%8B%8D%E4%BA%8B%E4%BB%B6%23) `156.1K 🔥` `NEW`
1. [莫氏鸡煲公开秘方](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E5%85%AC%E5%BC%80%E7%A7%98%E6%96%B9%23) `153.3K 🔥` `NEW`
1. [曝祯娘传改回家业](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%A5%AF%E5%A8%98%E4%BC%A0%E6%94%B9%E5%9B%9E%E5%AE%B6%E4%B8%9A%23) `143.7K 🔥` `NEW`
1. [特朗普对鲤鱼宣战](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%AF%B9%E9%B2%A4%E9%B1%BC%E5%AE%A3%E6%88%98%23) `141.4K 🔥` `NEW`
1. [统合现有载人和无人探月资源力量](https://s.weibo.com/weibo?q=%23%E7%BB%9F%E5%90%88%E7%8E%B0%E6%9C%89%E8%BD%BD%E4%BA%BA%E5%92%8C%E6%97%A0%E4%BA%BA%E6%8E%A2%E6%9C%88%E8%B5%84%E6%BA%90%E5%8A%9B%E9%87%8F%23) `140.5K 🔥` `NEW`
1. [环保部门称土葬百万奔驰匪夷所思](https://s.weibo.com/weibo?q=%23%E7%8E%AF%E4%BF%9D%E9%83%A8%E9%97%A8%E7%A7%B0%E5%9C%9F%E8%91%AC%E7%99%BE%E4%B8%87%E5%A5%94%E9%A9%B0%E5%8C%AA%E5%A4%B7%E6%89%80%E6%80%9D%23) `135.6K 🔥` `NEW`
1. [永辉超市线上买鱼被指缺斤少两](https://s.weibo.com/weibo?q=%23%E6%B0%B8%E8%BE%89%E8%B6%85%E5%B8%82%E7%BA%BF%E4%B8%8A%E4%B9%B0%E9%B1%BC%E8%A2%AB%E6%8C%87%E7%BC%BA%E6%96%A4%E5%B0%91%E4%B8%A4%23) `128.2K 🔥` `NEW`
1. [原来王楚然早期长这样啊](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E7%8E%8B%E6%A5%9A%E7%84%B6%E6%97%A9%E6%9C%9F%E9%95%BF%E8%BF%99%E6%A0%B7%E5%95%8A%23) `124.6K 🔥` `NEW`
1. [刘诗诗送朴宝剑宝瓶花 (Liu Shishi gave Park Bo Sword and vase of flowers)](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%AF%97%E8%AF%97%E9%80%81%E6%9C%B4%E5%AE%9D%E5%89%91%E5%AE%9D%E7%93%B6%E8%8A%B1%23) `118.7K 🔥` `NEW`
1. [打压遏制中国到了疯狂的程度](https://s.weibo.com/weibo?q=%23%E6%89%93%E5%8E%8B%E9%81%8F%E5%88%B6%E4%B8%AD%E5%9B%BD%E5%88%B0%E4%BA%86%E7%96%AF%E7%8B%82%E7%9A%84%E7%A8%8B%E5%BA%A6%23) `113.1K 🔥` `NEW`
1. [小米食堂说冰淇淋机快冒烟了](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E9%A3%9F%E5%A0%82%E8%AF%B4%E5%86%B0%E6%B7%87%E6%B7%8B%E6%9C%BA%E5%BF%AB%E5%86%92%E7%83%9F%E4%BA%86%23) `89.0K 🔥` `NEW`
1. [发现了辛苦了这句话的最佳回复](https://s.weibo.com/weibo?q=%23%E5%8F%91%E7%8E%B0%E4%BA%86%E8%BE%9B%E8%8B%A6%E4%BA%86%E8%BF%99%E5%8F%A5%E8%AF%9D%E7%9A%84%E6%9C%80%E4%BD%B3%E5%9B%9E%E5%A4%8D%23) `88.9K 🔥` `NEW`
1. [以色列向美国施压](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E5%90%91%E7%BE%8E%E5%9B%BD%E6%96%BD%E5%8E%8B%23) `88.6K 🔥` `NEW`
1. [樊振东的选择理应被尊重](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E7%9A%84%E9%80%89%E6%8B%A9%E7%90%86%E5%BA%94%E8%A2%AB%E5%B0%8A%E9%87%8D%23) `86.0K 🔥` `NEW`
1. [莫氏鸡煲终于放假了](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E6%B0%8F%E9%B8%A1%E7%85%B2%E7%BB%88%E4%BA%8E%E6%94%BE%E5%81%87%E4%BA%86%23) `86.0K 🔥` `NEW`
1. [男子抽蒜苔累到喊话请人上门偷](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%8A%BD%E8%92%9C%E8%8B%94%E7%B4%AF%E5%88%B0%E5%96%8A%E8%AF%9D%E8%AF%B7%E4%BA%BA%E4%B8%8A%E9%97%A8%E5%81%B7%23) `82.9K 🔥` `NEW`
1. [十日终焉固屏弹窗](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E5%9B%BA%E5%B1%8F%E5%BC%B9%E7%AA%97%23) `81.7K 🔥` `NEW`
1. [奔驰客服回应奔驰疑似被当陪葬品](https://s.weibo.com/weibo?q=%23%E5%A5%94%E9%A9%B0%E5%AE%A2%E6%9C%8D%E5%9B%9E%E5%BA%94%E5%A5%94%E9%A9%B0%E7%96%91%E4%BC%BC%E8%A2%AB%E5%BD%93%E9%99%AA%E8%91%AC%E5%93%81%23) `81.2K 🔥` `NEW`
1. [中产家长开始抛弃国际学校了 (Middle-class parents are starting to abandon international schools)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E4%BA%A7%E5%AE%B6%E9%95%BF%E5%BC%80%E5%A7%8B%E6%8A%9B%E5%BC%83%E5%9B%BD%E9%99%85%E5%AD%A6%E6%A0%A1%E4%BA%86%23) `76.4K 🔥` `NEW`
1. [将主板风险警示股票涨跌幅调整为10%](https://s.weibo.com/weibo?q=%23%E5%B0%86%E4%B8%BB%E6%9D%BF%E9%A3%8E%E9%99%A9%E8%AD%A6%E7%A4%BA%E8%82%A1%E7%A5%A8%E6%B6%A8%E8%B7%8C%E5%B9%85%E8%B0%83%E6%95%B4%E4%B8%BA10%25%23) `74.3K 🔥` `NEW`
1. [教资将考AI](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%B5%84%E5%B0%86%E8%80%83AI%23) `73.2K 🔥` `NEW`
1. [孔雪儿邓凯好六借位吻](https://s.weibo.com/weibo?q=%23%E5%AD%94%E9%9B%AA%E5%84%BF%E9%82%93%E5%87%AF%E5%A5%BD%E5%85%AD%E5%80%9F%E4%BD%8D%E5%90%BB%23) `71.1K 🔥` `NEW`
1. [从王者到王者荣耀世界](https://s.weibo.com/weibo?q=%23%E4%BB%8E%E7%8E%8B%E8%80%85%E5%88%B0%E7%8E%8B%E8%80%85%E8%8D%A3%E8%80%80%E4%B8%96%E7%95%8C%23) `69.3K 🔥` `NEW`
1. [官方通报填埋奔驰车祭祀](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E5%A1%AB%E5%9F%8B%E5%A5%94%E9%A9%B0%E8%BD%A6%E7%A5%AD%E7%A5%80%23) `1.1M 🔥` `+739%`
1. [女子睡觉被15斤猫咪压致手腕骨折](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%9D%A1%E8%A7%89%E8%A2%AB15%E6%96%A4%E7%8C%AB%E5%92%AA%E5%8E%8B%E8%87%B4%E6%89%8B%E8%85%95%E9%AA%A8%E6%8A%98%23) `812.6K 🔥` `+463%`
1. [雷军回应小米冰淇淋 (Lei Jun responds to Xiaomi ice cream)](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%9B%9E%E5%BA%94%E5%B0%8F%E7%B1%B3%E5%86%B0%E6%B7%87%E6%B7%8B%23) `260.2K 🔥` `+135%`
1. [浪姐 (Sister Lang)](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%23) `83.0K 🔥` `+30%`
1. [高质量发展中国行](https://s.weibo.com/weibo?q=%23%E9%AB%98%E8%B4%A8%E9%87%8F%E5%8F%91%E5%B1%95%E4%B8%AD%E5%9B%BD%E8%A1%8C%23) `641.2K 🔥`
1. [在全世界偶遇中国符号 (Encountering Chinese symbols around the world)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E5%85%A8%E4%B8%96%E7%95%8C%E5%81%B6%E9%81%87%E4%B8%AD%E5%9B%BD%E7%AC%A6%E5%8F%B7%23) `621.9K 🔥`
1. [李晟十日终焉选角好贴脸](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%99%9F%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E9%80%89%E8%A7%92%E5%A5%BD%E8%B4%B4%E8%84%B8%23) `190.1K 🔥`
1. [我奶的联系人备注](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%A5%B6%E7%9A%84%E8%81%94%E7%B3%BB%E4%BA%BA%E5%A4%87%E6%B3%A8%23) `173.5K 🔥`
1. [十日终焉开机 (Will be launched in ten days)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E5%BC%80%E6%9C%BA%23) `156.0K 🔥`
1. [日本外交蓝皮书降级中日关系 (Japan’s diplomatic blue book downgrades Sino-Japanese relations)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%A4%96%E4%BA%A4%E8%93%9D%E7%9A%AE%E4%B9%A6%E9%99%8D%E7%BA%A7%E4%B8%AD%E6%97%A5%E5%85%B3%E7%B3%BB%23) `154.9K 🔥`
1. [伊朗最高领袖发表最新声明](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%9C%80%E9%AB%98%E9%A2%86%E8%A2%96%E5%8F%91%E8%A1%A8%E6%9C%80%E6%96%B0%E5%A3%B0%E6%98%8E%23) `148.3K 🔥`
1. [宋亚轩回中戏](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%9B%9E%E4%B8%AD%E6%88%8F%23) `89.6K 🔥`
1. [杭州灵隐寺偶遇李现](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E7%81%B5%E9%9A%90%E5%AF%BA%E5%81%B6%E9%81%87%E6%9D%8E%E7%8E%B0%23) `74.8K 🔥`
1. [中方回应日本降级中日关系 (China responds to Japan's downgrade of Sino-Japanese relations)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%9B%9E%E5%BA%94%E6%97%A5%E6%9C%AC%E9%99%8D%E7%BA%A7%E4%B8%AD%E6%97%A5%E5%85%B3%E7%B3%BB%23) `269.4K 🔥` `-75%`
1. [冰湖重生癫剧](https://s.weibo.com/weibo?q=%23%E5%86%B0%E6%B9%96%E9%87%8D%E7%94%9F%E7%99%AB%E5%89%A7%23) `156.9K 🔥` `-26%`
1. [毛晓慧领衔主演十日终焉](https://s.weibo.com/weibo?q=%23%E6%AF%9B%E6%99%93%E6%85%A7%E9%A2%86%E8%A1%94%E4%B8%BB%E6%BC%94%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `154.1K 🔥` `-56%`
1. [小米食堂发布小米冰激凌 (Xiaomi Canteen releases Xiaomi ice cream)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E9%A3%9F%E5%A0%82%E5%8F%91%E5%B8%83%E5%B0%8F%E7%B1%B3%E5%86%B0%E6%BF%80%E5%87%8C%23) `118.5K 🔥` `-85%`
1. [边伯贤离开INB100 (Byun Baekhyun leaves INB100)](https://s.weibo.com/weibo?q=%23%E8%BE%B9%E4%BC%AF%E8%B4%A4%E7%A6%BB%E5%BC%80INB100%23) `106.6K 🔥` `-37%`
1. [痔疮手术9天后死亡医院只赔1万](https://s.weibo.com/weibo?q=%23%E7%97%94%E7%96%AE%E6%89%8B%E6%9C%AF9%E5%A4%A9%E5%90%8E%E6%AD%BB%E4%BA%A1%E5%8C%BB%E9%99%A2%E5%8F%AA%E8%B5%941%E4%B8%87%23) `104.6K 🔥` `-22%`
1. [研究发现血型和疾病的发生有相关性](https://s.weibo.com/weibo?q=%23%E7%A0%94%E7%A9%B6%E5%8F%91%E7%8E%B0%E8%A1%80%E5%9E%8B%E5%92%8C%E7%96%BE%E7%97%85%E7%9A%84%E5%8F%91%E7%94%9F%E6%9C%89%E7%9B%B8%E5%85%B3%E6%80%A7%23) `99.0K 🔥` `-23%`
1. [猪的抑郁症表现行为 (Depression behavior in pigs)](https://s.weibo.com/weibo?q=%23%E7%8C%AA%E7%9A%84%E6%8A%91%E9%83%81%E7%97%87%E8%A1%A8%E7%8E%B0%E8%A1%8C%E4%B8%BA%23) `98.5K 🔥` `-41%`
1. [一蓄电池企业让员工体检前吃排铅药](https://s.weibo.com/weibo?q=%23%E4%B8%80%E8%93%84%E7%94%B5%E6%B1%A0%E4%BC%81%E4%B8%9A%E8%AE%A9%E5%91%98%E5%B7%A5%E4%BD%93%E6%A3%80%E5%89%8D%E5%90%83%E6%8E%92%E9%93%85%E8%8D%AF%23) `88.3K 🔥` `-62%`
1. [肚子总是鼓鼓的可以练这个改善腹压](https://s.weibo.com/weibo?q=%23%E8%82%9A%E5%AD%90%E6%80%BB%E6%98%AF%E9%BC%93%E9%BC%93%E7%9A%84%E5%8F%AF%E4%BB%A5%E7%BB%83%E8%BF%99%E4%B8%AA%E6%94%B9%E5%96%84%E8%85%B9%E5%8E%8B%23) `85.4K 🔥` `-36%`
1. [十日终焉 (End of ten days)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `78.0K 🔥` `-28%`
1. [男子追求女技师被拒举报浴场涉黄](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%BF%BD%E6%B1%82%E5%A5%B3%E6%8A%80%E5%B8%88%E8%A2%AB%E6%8B%92%E4%B8%BE%E6%8A%A5%E6%B5%B4%E5%9C%BA%E6%B6%89%E9%BB%84%23) `73.2K 🔥` `-60%`
1. [胡彦斌说终于有人为我身高发声](https://s.weibo.com/weibo?q=%23%E8%83%A1%E5%BD%A6%E6%96%8C%E8%AF%B4%E7%BB%88%E4%BA%8E%E6%9C%89%E4%BA%BA%E4%B8%BA%E6%88%91%E8%BA%AB%E9%AB%98%E5%8F%91%E5%A3%B0%23) `70.1K 🔥` `-38%`

Updated at 2026-04-10 18:31:39

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
