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

1. [和热巴共享甄稀美妙时刻 (Share precious and wonderful moments with Reba)](https://s.weibo.com/weibo?q=%23%E5%92%8C%E7%83%AD%E5%B7%B4%E5%85%B1%E4%BA%AB%E7%94%84%E7%A8%80%E7%BE%8E%E5%A6%99%E6%97%B6%E5%88%BB%23) `539.6K 🔥` `NEW`
1. [逐玉陈皮糖二次求婚](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E9%99%88%E7%9A%AE%E7%B3%96%E4%BA%8C%E6%AC%A1%E6%B1%82%E5%A9%9A%23) `217.1K 🔥` `NEW`
1. [曝迪丽热巴换了张小斐前经纪人](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E6%8D%A2%E4%BA%86%E5%BC%A0%E5%B0%8F%E6%96%90%E5%89%8D%E7%BB%8F%E7%BA%AA%E4%BA%BA%23) `125.9K 🔥` `NEW`
1. [孙乐言北京时装周走秀](https://s.weibo.com/weibo?q=%23%E5%AD%99%E4%B9%90%E8%A8%80%E5%8C%97%E4%BA%AC%E6%97%B6%E8%A3%85%E5%91%A8%E8%B5%B0%E7%A7%80%23) `121.7K 🔥` `NEW`
1. [胖东来回应每人限购12个馒头](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E5%9B%9E%E5%BA%94%E6%AF%8F%E4%BA%BA%E9%99%90%E8%B4%AD12%E4%B8%AA%E9%A6%92%E5%A4%B4%23) `117.7K 🔥` `NEW`
1. [男子输液头孢7年第一次过敏休克](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%BE%93%E6%B6%B2%E5%A4%B4%E5%AD%A27%E5%B9%B4%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%BF%87%E6%95%8F%E4%BC%91%E5%85%8B%23) `111.6K 🔥` `NEW`
1. [女子在假装上班公司上班月入七八万](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9C%A8%E5%81%87%E8%A3%85%E4%B8%8A%E7%8F%AD%E5%85%AC%E5%8F%B8%E4%B8%8A%E7%8F%AD%E6%9C%88%E5%85%A5%E4%B8%83%E5%85%AB%E4%B8%87%23) `100.8K 🔥` `NEW`
1. [JDG让二追三AG](https://s.weibo.com/weibo?q=%23JDG%E8%AE%A9%E4%BA%8C%E8%BF%BD%E4%B8%89AG%23) `98.7K 🔥` `NEW`
1. [张予曦毕雯珺 河清海晏](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E4%BA%88%E6%9B%A6%E6%AF%95%E9%9B%AF%E7%8F%BA%20%E6%B2%B3%E6%B8%85%E6%B5%B7%E6%99%8F%23) `90.3K 🔥` `NEW`
1. [女子爱犬走失遭同小区居民宰杀](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%88%B1%E7%8A%AC%E8%B5%B0%E5%A4%B1%E9%81%AD%E5%90%8C%E5%B0%8F%E5%8C%BA%E5%B1%85%E6%B0%91%E5%AE%B0%E6%9D%80%23) `81.6K 🔥` `NEW`
1. [当老公得知宝宝鞋子的价格 (When the husband learned the price of the baby’s shoes)](https://s.weibo.com/weibo?q=%23%E5%BD%93%E8%80%81%E5%85%AC%E5%BE%97%E7%9F%A5%E5%AE%9D%E5%AE%9D%E9%9E%8B%E5%AD%90%E7%9A%84%E4%BB%B7%E6%A0%BC%23) `79.3K 🔥` `NEW`
1. [卡塔尔谴责以色列袭击伊朗天然气设施](https://s.weibo.com/weibo?q=%23%E5%8D%A1%E5%A1%94%E5%B0%94%E8%B0%B4%E8%B4%A3%E4%BB%A5%E8%89%B2%E5%88%97%E8%A2%AD%E5%87%BB%E4%BC%8A%E6%9C%97%E5%A4%A9%E7%84%B6%E6%B0%94%E8%AE%BE%E6%96%BD%23) `78.3K 🔥` `NEW`
1. [周也王玉雯陈星旭又是你们仨](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E7%8E%8B%E7%8E%89%E9%9B%AF%E9%99%88%E6%98%9F%E6%97%AD%E5%8F%88%E6%98%AF%E4%BD%A0%E4%BB%AC%E4%BB%A8%23) `72.6K 🔥` `NEW`
1. [胖东来小方糖戒指重新上架3天售罄](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E5%B0%8F%E6%96%B9%E7%B3%96%E6%88%92%E6%8C%87%E9%87%8D%E6%96%B0%E4%B8%8A%E6%9E%B63%E5%A4%A9%E5%94%AE%E7%BD%84%23) `63.7K 🔥` `NEW`
1. [周杰伦这次不是说说而已了](https://s.weibo.com/weibo?q=%23%E5%91%A8%E6%9D%B0%E4%BC%A6%E8%BF%99%E6%AC%A1%E4%B8%8D%E6%98%AF%E8%AF%B4%E8%AF%B4%E8%80%8C%E5%B7%B2%E4%BA%86%23) `62.9K 🔥` `NEW`
1. [英国夜店脑膜炎疫情扩散至法国](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E5%A4%9C%E5%BA%97%E8%84%91%E8%86%9C%E7%82%8E%E7%96%AB%E6%83%85%E6%89%A9%E6%95%A3%E8%87%B3%E6%B3%95%E5%9B%BD%23) `61.7K 🔥` `NEW`
1. [小米深夜上线三大模型](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%B7%B1%E5%A4%9C%E4%B8%8A%E7%BA%BF%E4%B8%89%E5%A4%A7%E6%A8%A1%E5%9E%8B%23) `61.5K 🔥` `NEW`
1. [成毅年后状态太好了](https://s.weibo.com/weibo?q=%23%E6%88%90%E6%AF%85%E5%B9%B4%E5%90%8E%E7%8A%B6%E6%80%81%E5%A4%AA%E5%A5%BD%E4%BA%86%23) `57.3K 🔥` `NEW`
1. [袁姗姗回应被张维伊喊嫂子](https://s.weibo.com/weibo?q=%23%E8%A2%81%E5%A7%97%E5%A7%97%E5%9B%9E%E5%BA%94%E8%A2%AB%E5%BC%A0%E7%BB%B4%E4%BC%8A%E5%96%8A%E5%AB%82%E5%AD%90%23) `57.1K 🔥` `NEW`
1. [美联储宣布维持利率不变](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%81%94%E5%82%A8%E5%AE%A3%E5%B8%83%E7%BB%B4%E6%8C%81%E5%88%A9%E7%8E%87%E4%B8%8D%E5%8F%98%23) `55.5K 🔥` `NEW`
1. [王腾回应手机进入全面涨价时代 (Wang Teng responded that mobile phones have entered an era of comprehensive price increases)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E8%85%BE%E5%9B%9E%E5%BA%94%E6%89%8B%E6%9C%BA%E8%BF%9B%E5%85%A5%E5%85%A8%E9%9D%A2%E6%B6%A8%E4%BB%B7%E6%97%B6%E4%BB%A3%23) `52.7K 🔥` `NEW`
1. [穿汉服在长江御剑飞行女子发声](https://s.weibo.com/weibo?q=%23%E7%A9%BF%E6%B1%89%E6%9C%8D%E5%9C%A8%E9%95%BF%E6%B1%9F%E5%BE%A1%E5%89%91%E9%A3%9E%E8%A1%8C%E5%A5%B3%E5%AD%90%E5%8F%91%E5%A3%B0%23) `51.5K 🔥` `NEW`
1. [巴萨7比2纽卡斯尔联](https://s.weibo.com/weibo?q=%23%E5%B7%B4%E8%90%A87%E6%AF%942%E7%BA%BD%E5%8D%A1%E6%96%AF%E5%B0%94%E8%81%94%23) `47.8K 🔥` `NEW`
1. [假装上班公司有员工月入七八万 (Pretending to work for a company with employees earning 70,000 to 80,000 yuan a month)](https://s.weibo.com/weibo?q=%23%E5%81%87%E8%A3%85%E4%B8%8A%E7%8F%AD%E5%85%AC%E5%8F%B8%E6%9C%89%E5%91%98%E5%B7%A5%E6%9C%88%E5%85%A5%E4%B8%83%E5%85%AB%E4%B8%87%23) `928.7K 🔥` `+49%`
1. [逐玉 (Zhuyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `679.1K 🔥` `+46%`
1. [新一批重大外资项目要来了 (A new batch of major foreign investment projects are coming)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E4%B8%80%E6%89%B9%E9%87%8D%E5%A4%A7%E5%A4%96%E8%B5%84%E9%A1%B9%E7%9B%AE%E8%A6%81%E6%9D%A5%E4%BA%86%23) `545.4K 🔥` `+53%`
1. [4月1日医保新规落地 (New medical insurance regulations will be implemented on April 1)](https://s.weibo.com/weibo?q=%234%E6%9C%881%E6%97%A5%E5%8C%BB%E4%BF%9D%E6%96%B0%E8%A7%84%E8%90%BD%E5%9C%B0%23) `255.1K 🔥` `+35%`
1. [伊朗发射集束弹头导弹袭击以色列 (Iran launches cluster warhead missiles to attack Israel)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E5%B0%84%E9%9B%86%E6%9D%9F%E5%BC%B9%E5%A4%B4%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%87%BB%E4%BB%A5%E8%89%B2%E5%88%97%23) `206.8K 🔥` `+65%`
1. [网传农业银行发高额贷款短信不实 (Online rumors that Agricultural Bank of China issued a text message for high-value loans are untrue)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E5%86%9C%E4%B8%9A%E9%93%B6%E8%A1%8C%E5%8F%91%E9%AB%98%E9%A2%9D%E8%B4%B7%E6%AC%BE%E7%9F%AD%E4%BF%A1%E4%B8%8D%E5%AE%9E%23) `182.4K 🔥` `+50%`
1. [女子车祸住院429天371天是挂床](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%BD%A6%E7%A5%B8%E4%BD%8F%E9%99%A2429%E5%A4%A9371%E5%A4%A9%E6%98%AF%E6%8C%82%E5%BA%8A%23) `174.8K 🔥` `+45%`
1. [女子网红店等位3200多桌排到崩溃](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%BD%91%E7%BA%A2%E5%BA%97%E7%AD%89%E4%BD%8D3200%E5%A4%9A%E6%A1%8C%E6%8E%92%E5%88%B0%E5%B4%A9%E6%BA%83%23) `130.7K 🔥` `+61%`
1. [男子遭路虎1分钟恶意别停8次后追尾 (Man was rear-ended by Land Rover after it maliciously stopped 8 times in 1 minute)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%81%AD%E8%B7%AF%E8%99%8E1%E5%88%86%E9%92%9F%E6%81%B6%E6%84%8F%E5%88%AB%E5%81%9C8%E6%AC%A1%E5%90%8E%E8%BF%BD%E5%B0%BE%23) `125.1K 🔥` `+54%`
1. [美联储](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%81%94%E5%82%A8%23) `124.6K 🔥` `+54%`
1. [徐若晗 挂脸](https://s.weibo.com/weibo?q=%23%E5%BE%90%E8%8B%A5%E6%99%97%20%E6%8C%82%E8%84%B8%23) `124.5K 🔥` `+55%`
1. [杨威回应杨阳洋成绩不好去香港读书](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%A8%81%E5%9B%9E%E5%BA%94%E6%9D%A8%E9%98%B3%E6%B4%8B%E6%88%90%E7%BB%A9%E4%B8%8D%E5%A5%BD%E5%8E%BB%E9%A6%99%E6%B8%AF%E8%AF%BB%E4%B9%A6%23) `124.1K 🔥` `+54%`
1. [刘冲和迪丽热巴聚餐](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%86%B2%E5%92%8C%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%81%9A%E9%A4%90%23) `123.6K 🔥` `+53%`
1. [赵丽颖被主持人骗到的反应 (Zhao Liying's reaction to being deceived by the host)](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%B8%BD%E9%A2%96%E8%A2%AB%E4%B8%BB%E6%8C%81%E4%BA%BA%E9%AA%97%E5%88%B0%E7%9A%84%E5%8F%8D%E5%BA%94%23) `123.1K 🔥` `+52%`
1. [伊朗总统证实情报部长遇害 (Iran's president confirms intelligence minister killed)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%80%BB%E7%BB%9F%E8%AF%81%E5%AE%9E%E6%83%85%E6%8A%A5%E9%83%A8%E9%95%BF%E9%81%87%E5%AE%B3%23) `122.9K 🔥` `+54%`
1. [代拍说王一博上下班公认最难拍 (The shooting agent said that Wang Yibo’s commute to and from get off work is recognized as the most difficult to shoot)](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E6%8B%8D%E8%AF%B4%E7%8E%8B%E4%B8%80%E5%8D%9A%E4%B8%8A%E4%B8%8B%E7%8F%AD%E5%85%AC%E8%AE%A4%E6%9C%80%E9%9A%BE%E6%8B%8D%23) `122.5K 🔥` `+53%`
1. [金价 (gold price)](https://s.weibo.com/weibo?q=%23%E9%87%91%E4%BB%B7%23) `120.7K 🔥` `+78%`
1. [黄金](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `120.4K 🔥` `+78%`
1. [早期田曦薇 真人bjd (Early Tian Xiwei real person bjd)](https://s.weibo.com/weibo?q=%23%E6%97%A9%E6%9C%9F%E7%94%B0%E6%9B%A6%E8%96%87%20%E7%9C%9F%E4%BA%BAbjd%23) `100.9K 🔥` `+26%`
1. [网友抵制AI演员 (Netizens boycott AI actors)](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E6%8A%B5%E5%88%B6AI%E6%BC%94%E5%91%98%23) `73.2K 🔥` `+66%`
1. [福建一鸭子活吞41只小鸡 (A duck in Fujian swallowed 41 chickens alive)](https://s.weibo.com/weibo?q=%23%E7%A6%8F%E5%BB%BA%E4%B8%80%E9%B8%AD%E5%AD%90%E6%B4%BB%E5%90%9E41%E5%8F%AA%E5%B0%8F%E9%B8%A1%23) `72.8K 🔥` `+26%`
1. [BTS演出强制韩国上班族用年假 (BTS performance forces Korean office workers to use annual leave)](https://s.weibo.com/weibo?q=%23BTS%E6%BC%94%E5%87%BA%E5%BC%BA%E5%88%B6%E9%9F%A9%E5%9B%BD%E4%B8%8A%E7%8F%AD%E6%97%8F%E7%94%A8%E5%B9%B4%E5%81%87%23) `72.1K 🔥` `+44%`
1. [4人距缅边境500米跳车逃生](https://s.weibo.com/weibo?q=%234%E4%BA%BA%E8%B7%9D%E7%BC%85%E8%BE%B9%E5%A2%83500%E7%B1%B3%E8%B7%B3%E8%BD%A6%E9%80%83%E7%94%9F%23) `126.3K 🔥`
1. [推特崩了 (Twitter crashed)](https://s.weibo.com/weibo?q=%23%E6%8E%A8%E7%89%B9%E5%B4%A9%E4%BA%86%23) `126.1K 🔥`
1. [美国特教女老师1天5次性侵男童 (An American female special education teacher sexually assaulted a boy five times a day)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E7%89%B9%E6%95%99%E5%A5%B3%E8%80%81%E5%B8%881%E5%A4%A95%E6%AC%A1%E6%80%A7%E4%BE%B5%E7%94%B7%E7%AB%A5%23) `80.9K 🔥`
1. [库克说李宇春是改变世界的人 (Cook said Li Yuchun was the person who changed the world)](https://s.weibo.com/weibo?q=%23%E5%BA%93%E5%85%8B%E8%AF%B4%E6%9D%8E%E5%AE%87%E6%98%A5%E6%98%AF%E6%94%B9%E5%8F%98%E4%B8%96%E7%95%8C%E7%9A%84%E4%BA%BA%23) `75.6K 🔥`
1. [4S店回应拉黑吃饭超260次男子](https://s.weibo.com/weibo?q=%234S%E5%BA%97%E5%9B%9E%E5%BA%94%E6%8B%89%E9%BB%91%E5%90%83%E9%A5%AD%E8%B6%85260%E6%AC%A1%E7%94%B7%E5%AD%90%23) `53.2K 🔥`
1. [伊说中东三国石油设施成合法打击目标 (Iran says oil facilities in three Middle East countries are legitimate targets)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%AF%B4%E4%B8%AD%E4%B8%9C%E4%B8%89%E5%9B%BD%E7%9F%B3%E6%B2%B9%E8%AE%BE%E6%96%BD%E6%88%90%E5%90%88%E6%B3%95%E6%89%93%E5%87%BB%E7%9B%AE%E6%A0%87%23) `50.3K 🔥`
1. [刘宇宁鞠躬退场直到升降台落下](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E9%9E%A0%E8%BA%AC%E9%80%80%E5%9C%BA%E7%9B%B4%E5%88%B0%E5%8D%87%E9%99%8D%E5%8F%B0%E8%90%BD%E4%B8%8B%23) `61.6K 🔥` `-26%`

Updated at 2026-03-19 07:38:55

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
