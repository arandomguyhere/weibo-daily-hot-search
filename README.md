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

1. [富爸爸穷爸爸作者自曝负债12亿美元](https://s.weibo.com/weibo?q=%23%E5%AF%8C%E7%88%B8%E7%88%B8%E7%A9%B7%E7%88%B8%E7%88%B8%E4%BD%9C%E8%80%85%E8%87%AA%E6%9B%9D%E8%B4%9F%E5%80%BA12%E4%BA%BF%E7%BE%8E%E5%85%83%23) `1.1M 🔥` `NEW`
1. [吉隆泥石流遇难21人失联541人](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E6%B3%A5%E7%9F%B3%E6%B5%81%E9%81%87%E9%9A%BE21%E4%BA%BA%E5%A4%B1%E8%81%94541%E4%BA%BA%23) `809.6K 🔥` `NEW`
1. [开局之年看山西](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%B1%80%E4%B9%8B%E5%B9%B4%E7%9C%8B%E5%B1%B1%E8%A5%BF%23) `623.8K 🔥` `NEW`
1. [花少2毛阿敏放现在算虐待老人](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%912%E6%AF%9B%E9%98%BF%E6%95%8F%E6%94%BE%E7%8E%B0%E5%9C%A8%E7%AE%97%E8%99%90%E5%BE%85%E8%80%81%E4%BA%BA%23) `585.7K 🔥` `NEW`
1. [微信新功能专治各种看不见](https://s.weibo.com/weibo?q=%23%E5%BE%AE%E4%BF%A1%E6%96%B0%E5%8A%9F%E8%83%BD%E4%B8%93%E6%B2%BB%E5%90%84%E7%A7%8D%E7%9C%8B%E4%B8%8D%E8%A7%81%23) `476.7K 🔥` `NEW`
1. [HLE让二追三T1](https://s.weibo.com/weibo?q=%23HLE%E8%AE%A9%E4%BA%8C%E8%BF%BD%E4%B8%89T1%23) `328.3K 🔥` `NEW`
1. [理想发布会](https://s.weibo.com/weibo?q=%23%E7%90%86%E6%83%B3%E5%8F%91%E5%B8%83%E4%BC%9A%23) `252.6K 🔥` `NEW`
1. [3899元的戴森牙刷真不坑穷人](https://s.weibo.com/weibo?q=%233899%E5%85%83%E7%9A%84%E6%88%B4%E6%A3%AE%E7%89%99%E5%88%B7%E7%9C%9F%E4%B8%8D%E5%9D%91%E7%A9%B7%E4%BA%BA%23) `252.4K 🔥` `NEW`
1. [花少4开始一个杨幂结束七个杨幂](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%B0%914%E5%BC%80%E5%A7%8B%E4%B8%80%E4%B8%AA%E6%9D%A8%E5%B9%82%E7%BB%93%E6%9D%9F%E4%B8%83%E4%B8%AA%E6%9D%A8%E5%B9%82%23) `251.8K 🔥` `NEW`
1. [韩国电视台公开嫌犯抛尸监控未打码](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E7%94%B5%E8%A7%86%E5%8F%B0%E5%85%AC%E5%BC%80%E5%AB%8C%E7%8A%AF%E6%8A%9B%E5%B0%B8%E7%9B%91%E6%8E%A7%E6%9C%AA%E6%89%93%E7%A0%81%23) `251.3K 🔥` `NEW`
1. [没有性生活也有必要打HPV疫苗](https://s.weibo.com/weibo?q=%23%E6%B2%A1%E6%9C%89%E6%80%A7%E7%94%9F%E6%B4%BB%E4%B9%9F%E6%9C%89%E5%BF%85%E8%A6%81%E6%89%93HPV%E7%96%AB%E8%8B%97%23) `250.9K 🔥` `NEW`
1. [只有花少4搭了一季帐篷](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E6%9C%89%E8%8A%B1%E5%B0%914%E6%90%AD%E4%BA%86%E4%B8%80%E5%AD%A3%E5%B8%90%E7%AF%B7%23) `250.8K 🔥` `NEW`
1. [井柏然Luke国贸下班大片](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6Luke%E5%9B%BD%E8%B4%B8%E4%B8%8B%E7%8F%AD%E5%A4%A7%E7%89%87%23) `250.0K 🔥` `NEW`
1. [中国人14年浴血奋战换来日本投降](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%BA%BA14%E5%B9%B4%E6%B5%B4%E8%A1%80%E5%A5%8B%E6%88%98%E6%8D%A2%E6%9D%A5%E6%97%A5%E6%9C%AC%E6%8A%95%E9%99%8D%23) `249.6K 🔥` `NEW`
1. [孙千不接古偶仙侠剧的原因](https://s.weibo.com/weibo?q=%23%E5%AD%99%E5%8D%83%E4%B8%8D%E6%8E%A5%E5%8F%A4%E5%81%B6%E4%BB%99%E4%BE%A0%E5%89%A7%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `249.2K 🔥` `NEW`
1. [戚薇回应做AI授权是因为缺钱](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%87%E5%9B%9E%E5%BA%94%E5%81%9AAI%E6%8E%88%E6%9D%83%E6%98%AF%E5%9B%A0%E4%B8%BA%E7%BC%BA%E9%92%B1%23) `249.0K 🔥` `NEW`
1. [尼泊尔一栋楼内发现24具遗体](https://s.weibo.com/weibo?q=%23%E5%B0%BC%E6%B3%8A%E5%B0%94%E4%B8%80%E6%A0%8B%E6%A5%BC%E5%86%85%E5%8F%91%E7%8E%B024%E5%85%B7%E9%81%97%E4%BD%93%23) `204.6K 🔥` `NEW`
1. [温州苍南特大暴雨致积涝](https://s.weibo.com/weibo?q=%23%E6%B8%A9%E5%B7%9E%E8%8B%8D%E5%8D%97%E7%89%B9%E5%A4%A7%E6%9A%B4%E9%9B%A8%E8%87%B4%E7%A7%AF%E6%B6%9D%23) `196.1K 🔥` `NEW`
1. [吉隆泥石流灾区发现遗物847件](https://s.weibo.com/weibo?q=%23%E5%90%89%E9%9A%86%E6%B3%A5%E7%9F%B3%E6%B5%81%E7%81%BE%E5%8C%BA%E5%8F%91%E7%8E%B0%E9%81%97%E7%89%A9847%E4%BB%B6%23) `196.0K 🔥` `NEW`
1. [手机涨价以为会疯抢结果询价都没人](https://s.weibo.com/weibo?q=%23%E6%89%8B%E6%9C%BA%E6%B6%A8%E4%BB%B7%E4%BB%A5%E4%B8%BA%E4%BC%9A%E7%96%AF%E6%8A%A2%E7%BB%93%E6%9E%9C%E8%AF%A2%E4%BB%B7%E9%83%BD%E6%B2%A1%E4%BA%BA%23) `195.9K 🔥` `NEW`
1. [突然发现有车之后心态变了](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E6%9C%89%E8%BD%A6%E4%B9%8B%E5%90%8E%E5%BF%83%E6%80%81%E5%8F%98%E4%BA%86%23) `195.6K 🔥` `NEW`
1. [爸爸以为妈妈接住了不料宝宝摔落在地](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E4%BB%A5%E4%B8%BA%E5%A6%88%E5%A6%88%E6%8E%A5%E4%BD%8F%E4%BA%86%E4%B8%8D%E6%96%99%E5%AE%9D%E5%AE%9D%E6%91%94%E8%90%BD%E5%9C%A8%E5%9C%B0%23) `195.3K 🔥` `NEW`
1. [井柏然曾在家里吻别倪妮](https://s.weibo.com/weibo?q=%23%E4%BA%95%E6%9F%8F%E7%84%B6%E6%9B%BE%E5%9C%A8%E5%AE%B6%E9%87%8C%E5%90%BB%E5%88%AB%E5%80%AA%E5%A6%AE%23) `195.1K 🔥` `NEW`
1. [婆婆摔碗控诉儿媳被儿子制止教育](https://s.weibo.com/weibo?q=%23%E5%A9%86%E5%A9%86%E6%91%94%E7%A2%97%E6%8E%A7%E8%AF%89%E5%84%BF%E5%AA%B3%E8%A2%AB%E5%84%BF%E5%AD%90%E5%88%B6%E6%AD%A2%E6%95%99%E8%82%B2%23) `195.1K 🔥` `NEW`
1. [张雪惊讶97岁李锦记掌门人喝冰可乐](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%83%8A%E8%AE%B697%E5%B2%81%E6%9D%8E%E9%94%A6%E8%AE%B0%E6%8E%8C%E9%97%A8%E4%BA%BA%E5%96%9D%E5%86%B0%E5%8F%AF%E4%B9%90%23) `170.5K 🔥` `NEW`
1. [女子喝冰冻可乐瞬间满嘴血](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%96%9D%E5%86%B0%E5%86%BB%E5%8F%AF%E4%B9%90%E7%9E%AC%E9%97%B4%E6%BB%A1%E5%98%B4%E8%A1%80%23) `170.4K 🔥` `NEW`
1. [苹果官方X账号取关库克](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%AE%98%E6%96%B9X%E8%B4%A6%E5%8F%B7%E5%8F%96%E5%85%B3%E5%BA%93%E5%85%8B%23) `165.1K 🔥` `NEW`
1. [果然年轻人开店活人感就是重](https://s.weibo.com/weibo?q=%23%E6%9E%9C%E7%84%B6%E5%B9%B4%E8%BD%BB%E4%BA%BA%E5%BC%80%E5%BA%97%E6%B4%BB%E4%BA%BA%E6%84%9F%E5%B0%B1%E6%98%AF%E9%87%8D%23) `163.6K 🔥` `NEW`
1. [国航CA982航班飞机部件损伤](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E8%88%AACA982%E8%88%AA%E7%8F%AD%E9%A3%9E%E6%9C%BA%E9%83%A8%E4%BB%B6%E6%8D%9F%E4%BC%A4%23) `156.1K 🔥` `NEW`
1. [主人婚礼现场得知2岁边牧离世](https://s.weibo.com/weibo?q=%23%E4%B8%BB%E4%BA%BA%E5%A9%9A%E7%A4%BC%E7%8E%B0%E5%9C%BA%E5%BE%97%E7%9F%A52%E5%B2%81%E8%BE%B9%E7%89%A7%E7%A6%BB%E4%B8%96%23) `153.4K 🔥` `NEW`
1. [韩凶手抛尸时神态异常平静](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%87%B6%E6%89%8B%E6%8A%9B%E5%B0%B8%E6%97%B6%E7%A5%9E%E6%80%81%E5%BC%82%E5%B8%B8%E5%B9%B3%E9%9D%99%23) `153.1K 🔥` `NEW`
1. [杨洋花少2里唯一一次无理要求](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E6%B4%8B%E8%8A%B1%E5%B0%912%E9%87%8C%E5%94%AF%E4%B8%80%E4%B8%80%E6%AC%A1%E6%97%A0%E7%90%86%E8%A6%81%E6%B1%82%23) `151.9K 🔥` `NEW`
1. [官方回应家长提议集资请保洁原因](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E5%9B%9E%E5%BA%94%E5%AE%B6%E9%95%BF%E6%8F%90%E8%AE%AE%E9%9B%86%E8%B5%84%E8%AF%B7%E4%BF%9D%E6%B4%81%E5%8E%9F%E5%9B%A0%23) `151.7K 🔥` `NEW`
1. [虞书欣云之羽三周年碎片](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E4%BA%91%E4%B9%8B%E7%BE%BD%E4%B8%89%E5%91%A8%E5%B9%B4%E7%A2%8E%E7%89%87%23) `143.5K 🔥` `NEW`
1. [普通体检检查这些项目就够了](https://s.weibo.com/weibo?q=%23%E6%99%AE%E9%80%9A%E4%BD%93%E6%A3%80%E6%A3%80%E6%9F%A5%E8%BF%99%E4%BA%9B%E9%A1%B9%E7%9B%AE%E5%B0%B1%E5%A4%9F%E4%BA%86%23) `132.1K 🔥` `NEW`
1. [皇马公然挑战中国人的底线](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%AC%E5%85%AC%E7%84%B6%E6%8C%91%E6%88%98%E4%B8%AD%E5%9B%BD%E4%BA%BA%E7%9A%84%E5%BA%95%E7%BA%BF%23) `131.4K 🔥` `NEW`
1. [苹果官号历来只关注现任CEO](https://s.weibo.com/weibo?q=%23%E8%8B%B9%E6%9E%9C%E5%AE%98%E5%8F%B7%E5%8E%86%E6%9D%A5%E5%8F%AA%E5%85%B3%E6%B3%A8%E7%8E%B0%E4%BB%BBCEO%23) `124.8K 🔥` `NEW`
1. [早春晴朗 奥美](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%20%E5%A5%A5%E7%BE%8E%23) `124.1K 🔥` `NEW`
1. [早春晴朗在外网爆火的原因](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%98%A5%E6%99%B4%E6%9C%97%E5%9C%A8%E5%A4%96%E7%BD%91%E7%88%86%E7%81%AB%E7%9A%84%E5%8E%9F%E5%9B%A0%23) `118.3K 🔥` `NEW`
1. [终于知道什么是沉没成本不参与重大决策了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E4%BB%80%E4%B9%88%E6%98%AF%E6%B2%89%E6%B2%A1%E6%88%90%E6%9C%AC%E4%B8%8D%E5%8F%82%E4%B8%8E%E9%87%8D%E5%A4%A7%E5%86%B3%E7%AD%96%E4%BA%86%23) `112.6K 🔥` `NEW`
1. [李现晒汪苏泷演唱会vlog](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E6%99%92%E6%B1%AA%E8%8B%8F%E6%B3%B7%E6%BC%94%E5%94%B1%E4%BC%9Avlog%23) `110.7K 🔥` `NEW`
1. [王阳新座驾比亚迪海狮08](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%98%B3%E6%96%B0%E5%BA%A7%E9%A9%BE%E6%AF%94%E4%BA%9A%E8%BF%AA%E6%B5%B7%E7%8B%AE08%23) `110.7K 🔥` `NEW`
1. [张真源舌苔一看就没有湿气](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E7%9C%9F%E6%BA%90%E8%88%8C%E8%8B%94%E4%B8%80%E7%9C%8B%E5%B0%B1%E6%B2%A1%E6%9C%89%E6%B9%BF%E6%B0%94%23) `110.6K 🔥` `NEW`
1. [九寨沟偶遇林心如](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%AF%A8%E6%B2%9F%E5%81%B6%E9%81%87%E6%9E%97%E5%BF%83%E5%A6%82%23) `105.1K 🔥` `NEW`
1. [直观感受到长期大量阅读的好处](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E8%A7%82%E6%84%9F%E5%8F%97%E5%88%B0%E9%95%BF%E6%9C%9F%E5%A4%A7%E9%87%8F%E9%98%85%E8%AF%BB%E7%9A%84%E5%A5%BD%E5%A4%84%23) `543.1K 🔥` `-34%`
1. [于适且初洗护发代言人](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E9%80%82%E4%B8%94%E5%88%9D%E6%B4%97%E6%8A%A4%E5%8F%91%E4%BB%A3%E8%A8%80%E4%BA%BA%23) `450.0K 🔥` `-29%`
1. [我的前半生真瓜主来了](https://s.weibo.com/weibo?q=%23%E6%88%91%E7%9A%84%E5%89%8D%E5%8D%8A%E7%94%9F%E7%9C%9F%E7%93%9C%E4%B8%BB%E6%9D%A5%E4%BA%86%23) `201.0K 🔥` `-26%`
1. [花儿与少年2026官宣](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%84%BF%E4%B8%8E%E5%B0%91%E5%B9%B42026%E5%AE%98%E5%AE%A3%23) `192.8K 🔥` `-31%`
1. [教体局介入家长群提议集资请保洁](https://s.weibo.com/weibo?q=%23%E6%95%99%E4%BD%93%E5%B1%80%E4%BB%8B%E5%85%A5%E5%AE%B6%E9%95%BF%E7%BE%A4%E6%8F%90%E8%AE%AE%E9%9B%86%E8%B5%84%E8%AF%B7%E4%BF%9D%E6%B4%81%23) `151.0K 🔥` `-41%`
1. [老年痴呆开始的征兆是爱说这几句话](https://s.weibo.com/weibo?q=%23%E8%80%81%E5%B9%B4%E7%97%B4%E5%91%86%E5%BC%80%E5%A7%8B%E7%9A%84%E5%BE%81%E5%85%86%E6%98%AF%E7%88%B1%E8%AF%B4%E8%BF%99%E5%87%A0%E5%8F%A5%E8%AF%9D%23) `118.8K 🔥` `-52%`
1. [国台办回应周子瑜来内地发展](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%8F%B0%E5%8A%9E%E5%9B%9E%E5%BA%94%E5%91%A8%E5%AD%90%E7%91%9C%E6%9D%A5%E5%86%85%E5%9C%B0%E5%8F%91%E5%B1%95%23) `113.9K 🔥` `-55%`

Updated at 2026-09-02 21:35:34

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
