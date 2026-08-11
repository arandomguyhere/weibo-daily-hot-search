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

1. [曝赵一鸣4块牛肉干64元复称仅17元 (It was revealed that Zhao Yiming’s 4 pieces of beef jerky cost 64 yuan and were renamed to only 17 yuan.)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%B5%B5%E4%B8%80%E9%B8%A34%E5%9D%97%E7%89%9B%E8%82%89%E5%B9%B264%E5%85%83%E5%A4%8D%E7%A7%B0%E4%BB%8517%E5%85%83%23) `1.4M 🔥` `NEW`
1. [忙到晕倒炸鸡店员工已结算工资离职](https://s.weibo.com/weibo?q=%23%E5%BF%99%E5%88%B0%E6%99%95%E5%80%92%E7%82%B8%E9%B8%A1%E5%BA%97%E5%91%98%E5%B7%A5%E5%B7%B2%E7%BB%93%E7%AE%97%E5%B7%A5%E8%B5%84%E7%A6%BB%E8%81%8C%23) `861.2K 🔥` `NEW`
1. [请查收这份暴雨天避险指南](https://s.weibo.com/weibo?q=%23%E8%AF%B7%E6%9F%A5%E6%94%B6%E8%BF%99%E4%BB%BD%E6%9A%B4%E9%9B%A8%E5%A4%A9%E9%81%BF%E9%99%A9%E6%8C%87%E5%8D%97%23) `696.2K 🔥` `NEW`
1. [新势力销冠零跑6万级新车A05上市](https://s.weibo.com/weibo?q=%23%E6%96%B0%E5%8A%BF%E5%8A%9B%E9%94%80%E5%86%A0%E9%9B%B6%E8%B7%916%E4%B8%87%E7%BA%A7%E6%96%B0%E8%BD%A6A05%E4%B8%8A%E5%B8%82%23) `637.2K 🔥` `NEW`
1. [樊振东WTT冠军榜位列第二](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9CWTT%E5%86%A0%E5%86%9B%E6%A6%9C%E4%BD%8D%E5%88%97%E7%AC%AC%E4%BA%8C%23) `624.3K 🔥` `NEW`
1. [曝刺棠女主换成杨超越了](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%88%BA%E6%A3%A0%E5%A5%B3%E4%B8%BB%E6%8D%A2%E6%88%90%E6%9D%A8%E8%B6%85%E8%B6%8A%E4%BA%86%23) `520.4K 🔥` `NEW`
1. [建议女生不要在网上过度分享](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A5%B3%E7%94%9F%E4%B8%8D%E8%A6%81%E5%9C%A8%E7%BD%91%E4%B8%8A%E8%BF%87%E5%BA%A6%E5%88%86%E4%BA%AB%23) `509.8K 🔥` `NEW`
1. [黄金商家虚构未成年人卖金视频被罚](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%95%86%E5%AE%B6%E8%99%9A%E6%9E%84%E6%9C%AA%E6%88%90%E5%B9%B4%E4%BA%BA%E5%8D%96%E9%87%91%E8%A7%86%E9%A2%91%E8%A2%AB%E7%BD%9A%23) `481.2K 🔥` `NEW`
1. [龙餐馆豆瓣开分8.4](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%E8%B1%86%E7%93%A3%E5%BC%80%E5%88%868.4%23) `465.1K 🔥` `NEW`
1. [曝卢昱晓不演刺棠进七星彩](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8D%A2%E6%98%B1%E6%99%93%E4%B8%8D%E6%BC%94%E5%88%BA%E6%A3%A0%E8%BF%9B%E4%B8%83%E6%98%9F%E5%BD%A9%23) `445.6K 🔥` `NEW`
1. [恢复生命力只需要一些低成本爱好 (All it takes to regain your vitality is some low-cost hobbies)](https://s.weibo.com/weibo?q=%23%E6%81%A2%E5%A4%8D%E7%94%9F%E5%91%BD%E5%8A%9B%E5%8F%AA%E9%9C%80%E8%A6%81%E4%B8%80%E4%BA%9B%E4%BD%8E%E6%88%90%E6%9C%AC%E7%88%B1%E5%A5%BD%23) `418.8K 🔥` `NEW`
1. [小菜园致歉](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E8%8F%9C%E5%9B%AD%E8%87%B4%E6%AD%89%23) `387.6K 🔥` `NEW`
1. [妻子孕晚期出轨博士后写道歉信](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E5%AD%95%E6%99%9A%E6%9C%9F%E5%87%BA%E8%BD%A8%E5%8D%9A%E5%A3%AB%E5%90%8E%E5%86%99%E9%81%93%E6%AD%89%E4%BF%A1%23) `383.4K 🔥` `NEW`
1. [白鹿的带货能力](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%9A%84%E5%B8%A6%E8%B4%A7%E8%83%BD%E5%8A%9B%23) `375.7K 🔥` `NEW`
1. [男子直播淫秽内容获利0.1元被判刑](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%9B%B4%E6%92%AD%E6%B7%AB%E7%A7%BD%E5%86%85%E5%AE%B9%E8%8E%B7%E5%88%A90.1%E5%85%83%E8%A2%AB%E5%88%A4%E5%88%91%23) `364.4K 🔥` `NEW`
1. [巴旦木公主晒结婚证](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E6%97%A6%E6%9C%A8%E5%85%AC%E4%B8%BB%E6%99%92%E7%BB%93%E5%A9%9A%E8%AF%81%23) `357.2K 🔥` `NEW`
1. [KPL电竞少年结束巴黎之行](https://s.weibo.com/weibo?q=%23KPL%E7%94%B5%E7%AB%9E%E5%B0%91%E5%B9%B4%E7%BB%93%E6%9D%9F%E5%B7%B4%E9%BB%8E%E4%B9%8B%E8%A1%8C%23) `355.3K 🔥` `NEW`
1. [丁程鑫录制好六提前离场](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%E5%BD%95%E5%88%B6%E5%A5%BD%E5%85%AD%E6%8F%90%E5%89%8D%E7%A6%BB%E5%9C%BA%23) `343.7K 🔥` `NEW`
1. [杨洋陈都灵 等风热吻你](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E9%99%88%E9%83%BD%E7%81%B5%20%E7%AD%89%E9%A3%8E%E7%83%AD%E5%90%BB%E4%BD%A0%23) `340.6K 🔥` `NEW`
1. [叙利亚前总统被判死刑](https://s.weibo.com/weibo?q=%23%E5%8F%99%E5%88%A9%E4%BA%9A%E5%89%8D%E6%80%BB%E7%BB%9F%E8%A2%AB%E5%88%A4%E6%AD%BB%E5%88%91%23) `332.0K 🔥` `NEW`
1. [现在的增程车突然能加92了 (Today’s extended-range vehicles can suddenly add 92)](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9A%84%E5%A2%9E%E7%A8%8B%E8%BD%A6%E7%AA%81%E7%84%B6%E8%83%BD%E5%8A%A092%E4%BA%86%23) `328.8K 🔥` `NEW`
1. [台风白海豚](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%23) `327.7K 🔥` `NEW`
1. [哪吒获奖台下嘉宾反应冷淡原因](https://s.weibo.com/weibo?q=%23%E5%93%AA%E5%90%92%E8%8E%B7%E5%A5%96%E5%8F%B0%E4%B8%8B%E5%98%89%E5%AE%BE%E5%8F%8D%E5%BA%94%E5%86%B7%E6%B7%A1%E5%8E%9F%E5%9B%A0%23) `326.9K 🔥` `NEW`
1. [王橹杰陈浚铭虚拟彩排](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E9%99%88%E6%B5%9A%E9%93%AD%E8%99%9A%E6%8B%9F%E5%BD%A9%E6%8E%92%23) `320.6K 🔥` `NEW`
1. [胚胎案妻子遭短信轰炸](https://s.weibo.com/weibo?q=%23%E8%83%9A%E8%83%8E%E6%A1%88%E5%A6%BB%E5%AD%90%E9%81%AD%E7%9F%AD%E4%BF%A1%E8%BD%B0%E7%82%B8%23) `320.3K 🔥` `NEW`
1. [宇树科技中签者发声](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E7%A7%91%E6%8A%80%E4%B8%AD%E7%AD%BE%E8%80%85%E5%8F%91%E5%A3%B0%23) `320.2K 🔥` `NEW`
1. [宁艺卓solo第二套高定](https://s.weibo.com/weibo?q=%23%E5%AE%81%E8%89%BA%E5%8D%93solo%E7%AC%AC%E4%BA%8C%E5%A5%97%E9%AB%98%E5%AE%9A%23) `320.2K 🔥` `NEW`
1. [欢迎来龙餐馆](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E8%BF%8E%E6%9D%A5%E9%BE%99%E9%A4%90%E9%A6%86%23) `317.7K 🔥` `NEW`
1. [男子上班脑出血家属无奈拔管后死亡](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E4%B8%8A%E7%8F%AD%E8%84%91%E5%87%BA%E8%A1%80%E5%AE%B6%E5%B1%9E%E6%97%A0%E5%A5%88%E6%8B%94%E7%AE%A1%E5%90%8E%E6%AD%BB%E4%BA%A1%23) `308.5K 🔥` `NEW`
1. [七星彩](https://s.weibo.com/weibo?q=%23%E4%B8%83%E6%98%9F%E5%BD%A9%23) `286.7K 🔥` `NEW`
1. [哪吒159亿票房为何换不来全体起立 (Why can’t everyone stand up in exchange for Nezha’s 15.9 billion box office?)](https://s.weibo.com/weibo?q=%23%E5%93%AA%E5%90%92159%E4%BA%BF%E7%A5%A8%E6%88%BF%E4%B8%BA%E4%BD%95%E6%8D%A2%E4%B8%8D%E6%9D%A5%E5%85%A8%E4%BD%93%E8%B5%B7%E7%AB%8B%23) `280.3K 🔥` `NEW`
1. [北京暴雨](https://s.weibo.com/weibo?q=%23%E5%8C%97%E4%BA%AC%E6%9A%B4%E9%9B%A8%23) `243.7K 🔥` `NEW`
1. [娜扎上户口的时候名字多打字了](https://s.weibo.com/weibo?q=%23%E5%A8%9C%E6%89%8E%E4%B8%8A%E6%88%B7%E5%8F%A3%E7%9A%84%E6%97%B6%E5%80%99%E5%90%8D%E5%AD%97%E5%A4%9A%E6%89%93%E5%AD%97%E4%BA%86%23) `243.0K 🔥` `NEW`
1. [NBA圣诞大战](https://s.weibo.com/weibo?q=%23NBA%E5%9C%A3%E8%AF%9E%E5%A4%A7%E6%88%98%23) `238.8K 🔥` `NEW`
1. [我听交警的涉事女子道歉赔偿](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%90%AC%E4%BA%A4%E8%AD%A6%E7%9A%84%E6%B6%89%E4%BA%8B%E5%A5%B3%E5%AD%90%E9%81%93%E6%AD%89%E8%B5%94%E5%81%BF%23) `236.4K 🔥` `NEW`
1. [杨幂粤语是跟小糯米学的吗](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E7%B2%A4%E8%AF%AD%E6%98%AF%E8%B7%9F%E5%B0%8F%E7%B3%AF%E7%B1%B3%E5%AD%A6%E7%9A%84%E5%90%97%23) `225.9K 🔥` `NEW`
1. [曝唐探4肖央主演王宝强客串](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%94%90%E6%8E%A24%E8%82%96%E5%A4%AE%E4%B8%BB%E6%BC%94%E7%8E%8B%E5%AE%9D%E5%BC%BA%E5%AE%A2%E4%B8%B2%23) `202.3K 🔥` `NEW`
1. [赵一鸣涉事店铺老板回应](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%80%E9%B8%A3%E6%B6%89%E4%BA%8B%E5%BA%97%E9%93%BA%E8%80%81%E6%9D%BF%E5%9B%9E%E5%BA%94%23) `190.1K 🔥` `NEW`
1. [张婉婷疑似怀三胎了](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%A9%89%E5%A9%B7%E7%96%91%E4%BC%BC%E6%80%80%E4%B8%89%E8%83%8E%E4%BA%86%23) `189.8K 🔥` `NEW`
1. [白鹿直播](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E7%9B%B4%E6%92%AD%23) `186.4K 🔥` `NEW`
1. [夫妻结婚40年都AA制丈夫在家装监控 (The couple has been married for 40 years and the husband has been monitoring the home decorations.)](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E7%BB%93%E5%A9%9A40%E5%B9%B4%E9%83%BDAA%E5%88%B6%E4%B8%88%E5%A4%AB%E5%9C%A8%E5%AE%B6%E8%A3%85%E7%9B%91%E6%8E%A7%23) `177.4K 🔥` `NEW`
1. [加拿大偶遇郑恺苗苗](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E6%8B%BF%E5%A4%A7%E5%81%B6%E9%81%87%E9%83%91%E6%81%BA%E8%8B%97%E8%8B%97%23) `177.1K 🔥` `NEW`
1. [TF四代单人拍立得](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E5%8D%95%E4%BA%BA%E6%8B%8D%E7%AB%8B%E5%BE%97%23) `176.3K 🔥` `NEW`
1. [燃油车为什么卖不动了](https://s.weibo.com/weibo?q=%23%E7%87%83%E6%B2%B9%E8%BD%A6%E4%B8%BA%E4%BB%80%E4%B9%88%E5%8D%96%E4%B8%8D%E5%8A%A8%E4%BA%86%23) `173.2K 🔥` `NEW`
1. [熊黛林双胞胎女儿颜值](https://s.weibo.com/weibo?q=%23%E7%86%8A%E9%BB%9B%E6%9E%97%E5%8F%8C%E8%83%9E%E8%83%8E%E5%A5%B3%E5%84%BF%E9%A2%9C%E5%80%BC%23) `165.4K 🔥` `NEW`
1. [失望性情感隔离](https://s.weibo.com/weibo?q=%23%E5%A4%B1%E6%9C%9B%E6%80%A7%E6%83%85%E6%84%9F%E9%9A%94%E7%A6%BB%23) `160.2K 🔥` `NEW`
1. [左奇函杨博文彩排骨骼谢幕](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E5%A5%87%E5%87%BD%E6%9D%A8%E5%8D%9A%E6%96%87%E5%BD%A9%E6%8E%92%E9%AA%A8%E9%AA%BC%E8%B0%A2%E5%B9%95%23) `151.8K 🔥` `NEW`
1. [我的前半生有五个视帝视后](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%E6%9C%89%E4%BA%94%E4%B8%AA%E8%A7%86%E5%B8%9D%E8%A7%86%E5%90%8E%23) `151.7K 🔥` `NEW`
1. [日本篡改历史被反噬了](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%AF%A1%E6%94%B9%E5%8E%86%E5%8F%B2%E8%A2%AB%E5%8F%8D%E5%99%AC%E4%BA%86%23) `146.5K 🔥` `NEW`
1. [王安宇就在面前打篮球](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E5%B0%B1%E5%9C%A8%E9%9D%A2%E5%89%8D%E6%89%93%E7%AF%AE%E7%90%83%23) `142.0K 🔥` `NEW`
1. [百万网红姜小柔遗体在广州安葬 (The body of Jiang Xiaorou, a millionaire internet celebrity, was buried in Guangzhou)](https://s.weibo.com/weibo?q=%23%E7%99%BE%E4%B8%87%E7%BD%91%E7%BA%A2%E5%A7%9C%E5%B0%8F%E6%9F%94%E9%81%97%E4%BD%93%E5%9C%A8%E5%B9%BF%E5%B7%9E%E5%AE%89%E8%91%AC%23) `136.0K 🔥` `NEW`
1. [海力士重启中国NAND闪存工厂建设](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E5%8A%9B%E5%A3%AB%E9%87%8D%E5%90%AF%E4%B8%AD%E5%9B%BDNAND%E9%97%AA%E5%AD%98%E5%B7%A5%E5%8E%82%E5%BB%BA%E8%AE%BE%23) `130.7K 🔥` `NEW`

Updated at 2026-08-12 00:04:37

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
