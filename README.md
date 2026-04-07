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

1. [特朗普同意停火2周 (Trump agrees to ceasefire for 2 weeks)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%90%8C%E6%84%8F%E5%81%9C%E7%81%AB2%E5%91%A8%23) `743.1K 🔥` `NEW`
1. [伊朗接受停火提议](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%8E%A5%E5%8F%97%E5%81%9C%E7%81%AB%E6%8F%90%E8%AE%AE%23) `697.7K 🔥` `NEW`
1. [皇马1比2拜仁](https://s.weibo.com/weibo?q=%23%E7%9A%87%E9%A9%AC1%E6%AF%942%E6%8B%9C%E4%BB%81%23) `151.2K 🔥` `NEW`
1. [猪八戒扮演者马德华将送别陈丽华](https://s.weibo.com/weibo?q=%23%E7%8C%AA%E5%85%AB%E6%88%92%E6%89%AE%E6%BC%94%E8%80%85%E9%A9%AC%E5%BE%B7%E5%8D%8E%E5%B0%86%E9%80%81%E5%88%AB%E9%99%88%E4%B8%BD%E5%8D%8E%23) `140.6K 🔥` `NEW`
1. [海河乳品致歉](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%B2%B3%E4%B9%B3%E5%93%81%E8%87%B4%E6%AD%89%23) `136.0K 🔥` `NEW`
1. [女子孕22周诞下仅矿泉水瓶重婴儿](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%AD%9522%E5%91%A8%E8%AF%9E%E4%B8%8B%E4%BB%85%E7%9F%BF%E6%B3%89%E6%B0%B4%E7%93%B6%E9%87%8D%E5%A9%B4%E5%84%BF%23) `115.8K 🔥` `NEW`
1. [迟重瑞说不畏惧陈丽华的强](https://s.weibo.com/weibo?q=%23%E8%BF%9F%E9%87%8D%E7%91%9E%E8%AF%B4%E4%B8%8D%E7%95%8F%E6%83%A7%E9%99%88%E4%B8%BD%E5%8D%8E%E7%9A%84%E5%BC%BA%23) `113.7K 🔥` `NEW`
1. [高盛预计金价有望冲击6100美元](https://s.weibo.com/weibo?q=%23%E9%AB%98%E7%9B%9B%E9%A2%84%E8%AE%A1%E9%87%91%E4%BB%B7%E6%9C%89%E6%9C%9B%E5%86%B2%E5%87%BB6100%E7%BE%8E%E5%85%83%23) `82.0K 🔥` `NEW`
1. [泽连斯基向俄方提出能源休战提议](https://s.weibo.com/weibo?q=%23%E6%B3%BD%E8%BF%9E%E6%96%AF%E5%9F%BA%E5%90%91%E4%BF%84%E6%96%B9%E6%8F%90%E5%87%BA%E8%83%BD%E6%BA%90%E4%BC%91%E6%88%98%E6%8F%90%E8%AE%AE%23) `78.0K 🔥` `NEW`
1. [中方称涉伊朗决议草案极不平衡](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E7%A7%B0%E6%B6%89%E4%BC%8A%E6%9C%97%E5%86%B3%E8%AE%AE%E8%8D%89%E6%A1%88%E6%9E%81%E4%B8%8D%E5%B9%B3%E8%A1%A1%23) `77.0K 🔥` `NEW`
1. [李嘉格说美对Angelababy太单一化了 (Li Jiage said beauty is too one-dimensional for Angelababy)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%98%89%E6%A0%BC%E8%AF%B4%E7%BE%8E%E5%AF%B9Angelababy%E5%A4%AA%E5%8D%95%E4%B8%80%E5%8C%96%E4%BA%86%23) `75.1K 🔥` `NEW`
1. [伊朗说伊美谈判4月10日开始](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E8%AF%B4%E4%BC%8A%E7%BE%8E%E8%B0%88%E5%88%A44%E6%9C%8810%E6%97%A5%E5%BC%80%E5%A7%8B%23) `68.9K 🔥` `NEW`
1. [葡萄牙体育0比1阿森纳](https://s.weibo.com/weibo?q=%23%E8%91%A1%E8%90%84%E7%89%99%E4%BD%93%E8%82%B20%E6%AF%941%E9%98%BF%E6%A3%AE%E7%BA%B3%23) `57.6K 🔥` `NEW`
1. [萨摩耶绝育后哭声响彻整个医院](https://s.weibo.com/weibo?q=%23%E8%90%A8%E6%91%A9%E8%80%B6%E7%BB%9D%E8%82%B2%E5%90%8E%E5%93%AD%E5%A3%B0%E5%93%8D%E5%BD%BB%E6%95%B4%E4%B8%AA%E5%8C%BB%E9%99%A2%23) `54.4K 🔥` `NEW`
1. [乘风2026一公小考倒数第一](https://s.weibo.com/weibo?q=%23%E4%B9%98%E9%A3%8E2026%E4%B8%80%E5%85%AC%E5%B0%8F%E8%80%83%E5%80%92%E6%95%B0%E7%AC%AC%E4%B8%80%23) `1.3M 🔥` `+121%`
1. [仅一户报名摇号的房子第二天售罄](https://s.weibo.com/weibo?q=%23%E4%BB%85%E4%B8%80%E6%88%B7%E6%8A%A5%E5%90%8D%E6%91%87%E5%8F%B7%E7%9A%84%E6%88%BF%E5%AD%90%E7%AC%AC%E4%BA%8C%E5%A4%A9%E5%94%AE%E7%BD%84%23) `895.6K 🔥` `+111%`
1. [外国人来中国旅游更火了 (Foreigners traveling to China are becoming more popular)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E4%BA%BA%E6%9D%A5%E4%B8%AD%E5%9B%BD%E6%97%85%E6%B8%B8%E6%9B%B4%E7%81%AB%E4%BA%86%23) `747.3K 🔥` `+124%`
1. [华为乾崑大六座华境S开启预订 (Huawei’s six-seat Huajing S in Qiankun University is now available for pre-order)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91%E5%A4%A7%E5%85%AD%E5%BA%A7%E5%8D%8E%E5%A2%83S%E5%BC%80%E5%90%AF%E9%A2%84%E8%AE%A2%23) `745.3K 🔥` `+379%`
1. [直播涉黄牛奶品牌为中华老字号](https://s.weibo.com/weibo?q=%23%E7%9B%B4%E6%92%AD%E6%B6%89%E9%BB%84%E7%89%9B%E5%A5%B6%E5%93%81%E7%89%8C%E4%B8%BA%E4%B8%AD%E5%8D%8E%E8%80%81%E5%AD%97%E5%8F%B7%23) `581.3K 🔥` `+108%`
1. [上海女子爬树压塌20年樱花树 (Shanghai woman climbs tree and crushes 20-year-old cherry blossom tree)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%A5%B3%E5%AD%90%E7%88%AC%E6%A0%91%E5%8E%8B%E5%A1%8C20%E5%B9%B4%E6%A8%B1%E8%8A%B1%E6%A0%91%23) `212.5K 🔥` `+88%`
1. [把蓝莓当消炎药吃](https://s.weibo.com/weibo?q=%23%E6%8A%8A%E8%93%9D%E8%8E%93%E5%BD%93%E6%B6%88%E7%82%8E%E8%8D%AF%E5%90%83%23) `145.0K 🔥` `+32%`
1. [华晨宇的民宿定价3块钱](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E6%99%A8%E5%AE%87%E7%9A%84%E6%B0%91%E5%AE%BF%E5%AE%9A%E4%BB%B73%E5%9D%97%E9%92%B1%23) `140.5K 🔥` `+90%`
1. [女子称休完产假公司没了 (Woman says her company is gone after maternity leave)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E7%A7%B0%E4%BC%91%E5%AE%8C%E4%BA%A7%E5%81%87%E5%85%AC%E5%8F%B8%E6%B2%A1%E4%BA%86%23) `138.4K 🔥` `+79%`
1. [陈少荣只给江语晨写过歌 (Chen Shaorong only wrote songs for Jiang Yuchen)](https://s.weibo.com/weibo?q=%23%E9%99%88%E5%B0%91%E8%8D%A3%E5%8F%AA%E7%BB%99%E6%B1%9F%E8%AF%AD%E6%99%A8%E5%86%99%E8%BF%87%E6%AD%8C%23) `128.1K 🔥` `+51%`
1. [时隔近一年郭艾伦再向周深道歉](https://s.weibo.com/weibo?q=%23%E6%97%B6%E9%9A%94%E8%BF%91%E4%B8%80%E5%B9%B4%E9%83%AD%E8%89%BE%E4%BC%A6%E5%86%8D%E5%90%91%E5%91%A8%E6%B7%B1%E9%81%93%E6%AD%89%23) `120.4K 🔥` `+72%`
1. [王楚钦称跟樊振东打出了自己的问题 (Wang Chuqin said he had resolved his own issues with Fan Zhendong)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%A7%B0%E8%B7%9F%E6%A8%8A%E6%8C%AF%E4%B8%9C%E6%89%93%E5%87%BA%E4%BA%86%E8%87%AA%E5%B7%B1%E7%9A%84%E9%97%AE%E9%A2%98%23) `119.4K 🔥` `+33%`
1. [央行抛售引发金价地震 (Central bank selling triggers gold price earthquake)](https://s.weibo.com/weibo?q=%23%E5%A4%AE%E8%A1%8C%E6%8A%9B%E5%94%AE%E5%BC%95%E5%8F%91%E9%87%91%E4%BB%B7%E5%9C%B0%E9%9C%87%23) `117.8K 🔥` `+39%`
1. [向太自曝曾多次拆散向佐恋情 (Xiang Tai revealed that he had broken up Xiang Zuo’s relationship many times)](https://s.weibo.com/weibo?q=%23%E5%90%91%E5%A4%AA%E8%87%AA%E6%9B%9D%E6%9B%BE%E5%A4%9A%E6%AC%A1%E6%8B%86%E6%95%A3%E5%90%91%E4%BD%90%E6%81%8B%E6%83%85%23) `117.4K 🔥` `+38%`
1. [女子人肉占车位被司机强行顶开](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BA%BA%E8%82%89%E5%8D%A0%E8%BD%A6%E4%BD%8D%E8%A2%AB%E5%8F%B8%E6%9C%BA%E5%BC%BA%E8%A1%8C%E9%A1%B6%E5%BC%80%23) `93.3K 🔥` `+25%`
1. [辛巴朋友圈吐槽被五次退网 (Simba’s comments in Moments were removed from the network five times)](https://s.weibo.com/weibo?q=%23%E8%BE%9B%E5%B7%B4%E6%9C%8B%E5%8F%8B%E5%9C%88%E5%90%90%E6%A7%BD%E8%A2%AB%E4%BA%94%E6%AC%A1%E9%80%80%E7%BD%91%23) `62.1K 🔥` `+42%`
1. [刘耀文 耳洞](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%20%E8%80%B3%E6%B4%9E%23) `60.7K 🔥` `+24%`
1. [陈丽华曾回应巨额遗产如何分配 (Chen Laiwa once responded to how to distribute the huge inheritance)](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%8D%8E%E6%9B%BE%E5%9B%9E%E5%BA%94%E5%B7%A8%E9%A2%9D%E9%81%97%E4%BA%A7%E5%A6%82%E4%BD%95%E5%88%86%E9%85%8D%23) `57.2K 🔥` `+24%`
1. [开心消消乐](https://s.weibo.com/weibo?q=%23%E5%BC%80%E5%BF%83%E6%B6%88%E6%B6%88%E4%B9%90%23) `54.7K 🔥` `+24%`
1. [iPhone三款新机机模出炉](https://s.weibo.com/weibo?q=%23iPhone%E4%B8%89%E6%AC%BE%E6%96%B0%E6%9C%BA%E6%9C%BA%E6%A8%A1%E5%87%BA%E7%82%89%23) `54.3K 🔥` `+24%`
1. [美绕月飞船1.5亿厕所已瘫痪 (The 150 million toilets of the US spacecraft orbiting the moon are disabled)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%BB%95%E6%9C%88%E9%A3%9E%E8%88%B91.5%E4%BA%BF%E5%8E%95%E6%89%80%E5%B7%B2%E7%98%AB%E7%97%AA%23) `222.7K 🔥`
1. [张雪母亲发声 (Zhang Xue’s mother speaks out)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%AF%8D%E4%BA%B2%E5%8F%91%E5%A3%B0%23) `145.4K 🔥`
1. [身体有慢性炎症可以多吃这些水果 (If you have chronic inflammation in your body, you can eat more of these fruits)](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BD%93%E6%9C%89%E6%85%A2%E6%80%A7%E7%82%8E%E7%97%87%E5%8F%AF%E4%BB%A5%E5%A4%9A%E5%90%83%E8%BF%99%E4%BA%9B%E6%B0%B4%E6%9E%9C%23) `142.0K 🔥`
1. [美以袭击哈尔克岛 (US and Israel attack Khark Island)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BB%A5%E8%A2%AD%E5%87%BB%E5%93%88%E5%B0%94%E5%85%8B%E5%B2%9B%23) `109.7K 🔥`
1. [韩国回应特朗普 (South Korea responds to Trump)](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%9B%9E%E5%BA%94%E7%89%B9%E6%9C%97%E6%99%AE%23) `83.9K 🔥`
1. [网传浪姐一公小考结果](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E6%B5%AA%E5%A7%90%E4%B8%80%E5%85%AC%E5%B0%8F%E8%80%83%E7%BB%93%E6%9E%9C%23) `72.4K 🔥`
1. [张雪推荐网友买国内品牌踏板摩托](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%8E%A8%E8%8D%90%E7%BD%91%E5%8F%8B%E4%B9%B0%E5%9B%BD%E5%86%85%E5%93%81%E7%89%8C%E8%B8%8F%E6%9D%BF%E6%91%A9%E6%89%98%23) `70.9K 🔥`
1. [欧冠联赛 (Champions League)](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A0%E8%81%94%E8%B5%9B%23) `65.2K 🔥`
1. [联合国警告特朗普 (UN warns Trump)](https://s.weibo.com/weibo?q=%23%E8%81%94%E5%90%88%E5%9B%BD%E8%AD%A6%E5%91%8A%E7%89%B9%E6%9C%97%E6%99%AE%23) `62.4K 🔥`
1. [吴慷仁演技](https://s.weibo.com/weibo?q=%23%E5%90%B4%E6%85%B7%E4%BB%81%E6%BC%94%E6%8A%80%23) `57.5K 🔥`
1. [虞书欣跳了进行曲 (Yu Shuxin danced the march)](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E8%B7%B3%E4%BA%86%E8%BF%9B%E8%A1%8C%E6%9B%B2%23) `54.3K 🔥`
1. [曾沛慈热度断层第一 (Zeng Peici ranks first in popularity)](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E6%B2%9B%E6%85%88%E7%83%AD%E5%BA%A6%E6%96%AD%E5%B1%82%E7%AC%AC%E4%B8%80%23) `50.4K 🔥`
1. [伊朗军方回应小女孩粉色导弹请求 (Iranian military responds to little girl's request for pink missiles)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%86%9B%E6%96%B9%E5%9B%9E%E5%BA%94%E5%B0%8F%E5%A5%B3%E5%AD%A9%E7%B2%89%E8%89%B2%E5%AF%BC%E5%BC%B9%E8%AF%B7%E6%B1%82%23) `49.0K 🔥`
1. [伊朗民众组成人链保护发电厂和桥梁](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%B0%91%E4%BC%97%E7%BB%84%E6%88%90%E4%BA%BA%E9%93%BE%E4%BF%9D%E6%8A%A4%E5%8F%91%E7%94%B5%E5%8E%82%E5%92%8C%E6%A1%A5%E6%A2%81%23) `143.8K 🔥` `-56%`
1. [以军空袭伊朗铁路和桥梁 (Israeli air strikes on Iranian railways and bridges)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%86%9B%E7%A9%BA%E8%A2%AD%E4%BC%8A%E6%9C%97%E9%93%81%E8%B7%AF%E5%92%8C%E6%A1%A5%E6%A2%81%23) `79.3K 🔥` `-27%`
1. [伊朗称若局势失控曼德海峡也将关闭](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E7%A7%B0%E8%8B%A5%E5%B1%80%E5%8A%BF%E5%A4%B1%E6%8E%A7%E6%9B%BC%E5%BE%B7%E6%B5%B7%E5%B3%A1%E4%B9%9F%E5%B0%86%E5%85%B3%E9%97%AD%23) `54.4K 🔥` `-84%`

Updated at 2026-04-08 07:39:46

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
