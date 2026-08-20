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

1. [暑期档最出圈电影角色 (The most popular movie roles of the summer season)](https://s.weibo.com/weibo?q=%23%E6%9A%91%E6%9C%9F%E6%A1%A3%E6%9C%80%E5%87%BA%E5%9C%88%E7%94%B5%E5%BD%B1%E8%A7%92%E8%89%B2%23) `631.6K 🔥` `NEW`
1. [房东发现租客怀孕要求其1周搬走](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%9C%E5%8F%91%E7%8E%B0%E7%A7%9F%E5%AE%A2%E6%80%80%E5%AD%95%E8%A6%81%E6%B1%82%E5%85%B61%E5%91%A8%E6%90%AC%E8%B5%B0%23) `593.9K 🔥` `NEW`
1. [合肥外卖店 我上网就是为了看这些](https://s.weibo.com/weibo?q=%23%E5%90%88%E8%82%A5%E5%A4%96%E5%8D%96%E5%BA%97%20%E6%88%91%E4%B8%8A%E7%BD%91%E5%B0%B1%E6%98%AF%E4%B8%BA%E4%BA%86%E7%9C%8B%E8%BF%99%E4%BA%9B%23) `587.4K 🔥` `NEW`
1. [迪丽热巴迪奥惊艳派对380](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%AA%E5%A5%A5%E6%83%8A%E8%89%B3%E6%B4%BE%E5%AF%B9380%23) `467.2K 🔥` `NEW`
1. [1100元买宇树200股一度亏4万多](https://s.weibo.com/weibo?q=%231100%E5%85%83%E4%B9%B0%E5%AE%87%E6%A0%91200%E8%82%A1%E4%B8%80%E5%BA%A6%E4%BA%8F4%E4%B8%87%E5%A4%9A%23) `464.4K 🔥` `NEW`
1. [日本网友家里摆满中国东西](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%BD%91%E5%8F%8B%E5%AE%B6%E9%87%8C%E6%91%86%E6%BB%A1%E4%B8%AD%E5%9B%BD%E4%B8%9C%E8%A5%BF%23) `456.8K 🔥` `NEW`
1. [代孕在我国至少涉及7项罪名](https://s.weibo.com/weibo?q=%23%E4%BB%A3%E5%AD%95%E5%9C%A8%E6%88%91%E5%9B%BD%E8%87%B3%E5%B0%91%E6%B6%89%E5%8F%8A7%E9%A1%B9%E7%BD%AA%E5%90%8D%23) `456.1K 🔥` `NEW`
1. [戚薇吊带绿裙](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%87%E5%90%8A%E5%B8%A6%E7%BB%BF%E8%A3%99%23) `444.3K 🔥` `NEW`
1. [TOP旅途中的高光时刻](https://s.weibo.com/weibo?q=%23TOP%E6%97%85%E9%80%94%E4%B8%AD%E7%9A%84%E9%AB%98%E5%85%89%E6%97%B6%E5%88%BB%23) `437.9K 🔥` `NEW`
1. [迪丽热巴这个镜子放得好妙](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E8%BF%99%E4%B8%AA%E9%95%9C%E5%AD%90%E6%94%BE%E5%BE%97%E5%A5%BD%E5%A6%99%23) `435.0K 🔥` `NEW`
1. [华为PuraXView (HuaweiPuraXView)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BAPuraXView%23) `823.0K 🔥` `+66%`
1. [日本旅游业凉了 (Japan’s tourism industry is in decline)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%97%85%E6%B8%B8%E4%B8%9A%E5%87%89%E4%BA%86%23) `670.4K 🔥` `+50%`
1. [孕妇误服甲醇前曾反复向医生确认](https://s.weibo.com/weibo?q=%23%E5%AD%95%E5%A6%87%E8%AF%AF%E6%9C%8D%E7%94%B2%E9%86%87%E5%89%8D%E6%9B%BE%E5%8F%8D%E5%A4%8D%E5%90%91%E5%8C%BB%E7%94%9F%E7%A1%AE%E8%AE%A4%23) `654.3K 🔥` `+48%`
1. [黑神话钟馗主角脸模说很兴奋](https://s.weibo.com/weibo?q=%23%E9%BB%91%E7%A5%9E%E8%AF%9D%E9%92%9F%E9%A6%97%E4%B8%BB%E8%A7%92%E8%84%B8%E6%A8%A1%E8%AF%B4%E5%BE%88%E5%85%B4%E5%A5%8B%23) `642.9K 🔥` `+78%`
1. [法国一葡萄园发现赤裸烧焦女尸](https://s.weibo.com/weibo?q=%23%E6%B3%95%E5%9B%BD%E4%B8%80%E8%91%A1%E8%90%84%E5%9B%AD%E5%8F%91%E7%8E%B0%E8%B5%A4%E8%A3%B8%E7%83%A7%E7%84%A6%E5%A5%B3%E5%B0%B8%23) `630.8K 🔥` `+48%`
1. [沈腾又忘记扶杨幂了 (Shen Teng forgot to support Yang Mi again)](https://s.weibo.com/weibo?q=%23%E6%B2%88%E8%85%BE%E5%8F%88%E5%BF%98%E8%AE%B0%E6%89%B6%E6%9D%A8%E5%B9%82%E4%BA%86%23) `556.1K 🔥` `+26%`
1. [月薪4000存款20w (Monthly salary 4000, deposit 20w)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA4000%E5%AD%98%E6%AC%BE20w%23) `530.5K 🔥` `+22%`
1. [华为阔直板手机亮相 (Huawei's wide straight phone unveiled)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E9%98%94%E7%9B%B4%E6%9D%BF%E6%89%8B%E6%9C%BA%E4%BA%AE%E7%9B%B8%23) `526.6K 🔥` `+31%`
1. [峰哥把机器人踹瘫痪了](https://s.weibo.com/weibo?q=%23%E5%B3%B0%E5%93%A5%E6%8A%8A%E6%9C%BA%E5%99%A8%E4%BA%BA%E8%B8%B9%E7%98%AB%E7%97%AA%E4%BA%86%23) `513.1K 🔥` `+24%`
1. [美甲贴 性早熟](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E7%94%B2%E8%B4%B4%20%E6%80%A7%E6%97%A9%E7%86%9F%23) `507.8K 🔥` `+22%`
1. [1.2亿农村老人谁来为他们发声](https://s.weibo.com/weibo?q=%231.2%E4%BA%BF%E5%86%9C%E6%9D%91%E8%80%81%E4%BA%BA%E8%B0%81%E6%9D%A5%E4%B8%BA%E4%BB%96%E4%BB%AC%E5%8F%91%E5%A3%B0%23) `494.7K 🔥` `+32%`
1. [官俊臣去英伟达干嘛](https://s.weibo.com/weibo?q=%23%E5%AE%98%E4%BF%8A%E8%87%A3%E5%8E%BB%E8%8B%B1%E4%BC%9F%E8%BE%BE%E5%B9%B2%E5%98%9B%23) `492.2K 🔥` `+24%`
1. [陈都灵好丑的校服好美的脸](https://s.weibo.com/weibo?q=%23%E9%99%88%E9%83%BD%E7%81%B5%E5%A5%BD%E4%B8%91%E7%9A%84%E6%A0%A1%E6%9C%8D%E5%A5%BD%E7%BE%8E%E7%9A%84%E8%84%B8%23) `485.4K 🔥` `+34%`
1. [智界RX由奔驰AMG调校大师调校](https://s.weibo.com/weibo?q=%23%E6%99%BA%E7%95%8CRX%E7%94%B1%E5%A5%94%E9%A9%B0AMG%E8%B0%83%E6%A0%A1%E5%A4%A7%E5%B8%88%E8%B0%83%E6%A0%A1%23) `475.8K 🔥` `+26%`
1. [婆婆背后蛐蛐儿媳被孙子回怼 (The mother-in-law cuckolds the daughter-in-law behind her back, but her grandson retaliates)](https://s.weibo.com/weibo?q=%23%E5%A9%86%E5%A9%86%E8%83%8C%E5%90%8E%E8%9B%90%E8%9B%90%E5%84%BF%E5%AA%B3%E8%A2%AB%E5%AD%99%E5%AD%90%E5%9B%9E%E6%80%BC%23) `470.1K 🔥` `+25%`
1. [维斯塔潘续约 (Verstappen renews contract)](https://s.weibo.com/weibo?q=%23%E7%BB%B4%E6%96%AF%E5%A1%94%E6%BD%98%E7%BB%AD%E7%BA%A6%23) `461.9K 🔥` `+25%`
1. [疑似缅北电诈园区图片曝光 (Pictures of suspected telecom fraud park in northern Myanmar exposed)](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E7%BC%85%E5%8C%97%E7%94%B5%E8%AF%88%E5%9B%AD%E5%8C%BA%E5%9B%BE%E7%89%87%E6%9B%9D%E5%85%89%23) `1.1M 🔥`
1. [余承东称刚刚发布会没讲好](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E7%A7%B0%E5%88%9A%E5%88%9A%E5%8F%91%E5%B8%83%E4%BC%9A%E6%B2%A1%E8%AE%B2%E5%A5%BD%23) `611.4K 🔥`
1. [丁禹兮直播迟到20分钟 (Ding Yuxi was 20 minutes late for the live broadcast)](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E7%9B%B4%E6%92%AD%E8%BF%9F%E5%88%B020%E5%88%86%E9%92%9F%23) `514.5K 🔥`
1. [李响8年3次求婚孙骁骁未果 (Li Xiang proposed to Sun Xiaoxiao three times in 8 years but failed)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%93%8D8%E5%B9%B43%E6%AC%A1%E6%B1%82%E5%A9%9A%E5%AD%99%E9%AA%81%E9%AA%81%E6%9C%AA%E6%9E%9C%23) `510.7K 🔥`
1. [双胞胎上恋综 (Twins in love)](https://s.weibo.com/weibo?q=%23%E5%8F%8C%E8%83%9E%E8%83%8E%E4%B8%8A%E6%81%8B%E7%BB%BC%23) `505.5K 🔥`
1. [全智贤未公开婚纱照 (Jun Ji-hyun's unpublished wedding photos)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E6%99%BA%E8%B4%A4%E6%9C%AA%E5%85%AC%E5%BC%80%E5%A9%9A%E7%BA%B1%E7%85%A7%23) `503.7K 🔥`
1. [男子辱骂女游客为何10多天后才立案](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E8%BE%B1%E9%AA%82%E5%A5%B3%E6%B8%B8%E5%AE%A2%E4%B8%BA%E4%BD%9510%E5%A4%9A%E5%A4%A9%E5%90%8E%E6%89%8D%E7%AB%8B%E6%A1%88%23) `499.7K 🔥`
1. [金鹤龙看迪丽热巴的眼神](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%A4%E9%BE%99%E7%9C%8B%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E7%9A%84%E7%9C%BC%E7%A5%9E%23) `497.2K 🔥`
1. [和思想贫瘠的人聊天有多痛苦 (How painful it is to chat with poor-minded people)](https://s.weibo.com/weibo?q=%23%E5%92%8C%E6%80%9D%E6%83%B3%E8%B4%AB%E7%98%A0%E7%9A%84%E4%BA%BA%E8%81%8A%E5%A4%A9%E6%9C%89%E5%A4%9A%E7%97%9B%E8%8B%A6%23) `490.3K 🔥`
1. [谁懂杨幂出场这几步 (Who knows the steps of Yang Mi’s appearance?)](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%87%82%E6%9D%A8%E5%B9%82%E5%87%BA%E5%9C%BA%E8%BF%99%E5%87%A0%E6%AD%A5%23) `487.1K 🔥`
1. [赵今麦美貌引外网热议](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E4%BB%8A%E9%BA%A6%E7%BE%8E%E8%B2%8C%E5%BC%95%E5%A4%96%E7%BD%91%E7%83%AD%E8%AE%AE%23) `482.6K 🔥`
1. [未来5年医保报销比例定了](https://s.weibo.com/weibo?q=%23%E6%9C%AA%E6%9D%A55%E5%B9%B4%E5%8C%BB%E4%BF%9D%E6%8A%A5%E9%94%80%E6%AF%94%E4%BE%8B%E5%AE%9A%E4%BA%86%23) `481.3K 🔥`
1. [宇树总市值已跌超1500亿](https://s.weibo.com/weibo?q=%23%E5%AE%87%E6%A0%91%E6%80%BB%E5%B8%82%E5%80%BC%E5%B7%B2%E8%B7%8C%E8%B6%851500%E4%BA%BF%23) `477.1K 🔥`
1. [水中拽出60斤大鱼男子称鱼状态不对](https://s.weibo.com/weibo?q=%23%E6%B0%B4%E4%B8%AD%E6%8B%BD%E5%87%BA60%E6%96%A4%E5%A4%A7%E9%B1%BC%E7%94%B7%E5%AD%90%E7%A7%B0%E9%B1%BC%E7%8A%B6%E6%80%81%E4%B8%8D%E5%AF%B9%23) `473.4K 🔥`
1. [余承东称智界RX是最漂亮的L3架构车型](https://s.weibo.com/weibo?q=%23%E4%BD%99%E6%89%BF%E4%B8%9C%E7%A7%B0%E6%99%BA%E7%95%8CRX%E6%98%AF%E6%9C%80%E6%BC%82%E4%BA%AE%E7%9A%84L3%E6%9E%B6%E6%9E%84%E8%BD%A6%E5%9E%8B%23) `459.7K 🔥`
1. [存钱重要还是旅游重要 (Is it more important to save money or travel?)](https://s.weibo.com/weibo?q=%23%E5%AD%98%E9%92%B1%E9%87%8D%E8%A6%81%E8%BF%98%E6%98%AF%E6%97%85%E6%B8%B8%E9%87%8D%E8%A6%81%23) `452.7K 🔥`
1. [问界M6增程四驱版23.98万起售 (Wenjie M6 extended range four-wheel drive version starts at 239,800)](https://s.weibo.com/weibo?q=%23%E9%97%AE%E7%95%8CM6%E5%A2%9E%E7%A8%8B%E5%9B%9B%E9%A9%B1%E7%89%8823.98%E4%B8%87%E8%B5%B7%E5%94%AE%23) `450.1K 🔥`
1. [成都偶遇王橹杰张函瑞](https://s.weibo.com/weibo?q=%23%E6%88%90%E9%83%BD%E5%81%B6%E9%81%87%E7%8E%8B%E6%A9%B9%E6%9D%B0%E5%BC%A0%E5%87%BD%E7%91%9E%23) `446.8K 🔥`
1. [专家分析宇树市值暴跌原因 (Experts analyze the reasons for the plummeting market value of Yushu)](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E5%88%86%E6%9E%90%E5%AE%87%E6%A0%91%E5%B8%82%E5%80%BC%E6%9A%B4%E8%B7%8C%E5%8E%9F%E5%9B%A0%23) `441.7K 🔥`
1. [曾辉一公没人选](https://s.weibo.com/weibo?q=%23%E6%9B%BE%E8%BE%89%E4%B8%80%E5%85%AC%E6%B2%A1%E4%BA%BA%E9%80%89%23) `438.9K 🔥`
1. [第五人格赛事超话](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%BA%94%E4%BA%BA%E6%A0%BC%E8%B5%9B%E4%BA%8B%E8%B6%85%E8%AF%9D%23) `431.3K 🔥`
1. [孕妇产检因医生疏忽误服有毒液体](https://s.weibo.com/weibo?q=%23%E5%AD%95%E5%A6%87%E4%BA%A7%E6%A3%80%E5%9B%A0%E5%8C%BB%E7%94%9F%E7%96%8F%E5%BF%BD%E8%AF%AF%E6%9C%8D%E6%9C%89%E6%AF%92%E6%B6%B2%E4%BD%93%23) `430.0K 🔥`
1. [中非视听之约北京启幕 (China-Africa Audiovisual Agreement kicks off in Beijing)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E9%9D%9E%E8%A7%86%E5%90%AC%E4%B9%8B%E7%BA%A6%E5%8C%97%E4%BA%AC%E5%90%AF%E5%B9%95%23) `673.0K 🔥` `-22%`
1. [连续值了5年夜班 只愿你健健康康 (I have been working night shifts for 5 consecutive years. I just wish you good health.)](https://s.weibo.com/weibo?q=%23%E8%BF%9E%E7%BB%AD%E5%80%BC%E4%BA%865%E5%B9%B4%E5%A4%9C%E7%8F%AD%20%E5%8F%AA%E6%84%BF%E4%BD%A0%E5%81%A5%E5%81%A5%E5%BA%B7%E5%BA%B7%23) `670.6K 🔥` `-78%`
1. [房东赶走怀孕租客称借死不借生 (Landlord evicts pregnant tenant, saying he is risking death rather than life)](https://s.weibo.com/weibo?q=%23%E6%88%BF%E4%B8%9C%E8%B5%B6%E8%B5%B0%E6%80%80%E5%AD%95%E7%A7%9F%E5%AE%A2%E7%A7%B0%E5%80%9F%E6%AD%BB%E4%B8%8D%E5%80%9F%E7%94%9F%23) `571.2K 🔥` `-81%`
1. [原来年薪60万助理是这么干活的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E5%B9%B4%E8%96%AA60%E4%B8%87%E5%8A%A9%E7%90%86%E6%98%AF%E8%BF%99%E4%B9%88%E5%B9%B2%E6%B4%BB%E7%9A%84%23) `551.6K 🔥` `-26%`

Updated at 2026-08-20 19:14:34

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
