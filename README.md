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

1. [为什么冰箱能一直开但空调不能 (Why can the refrigerator be turned on all the time but the air conditioner cannot?)](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E4%BB%80%E4%B9%88%E5%86%B0%E7%AE%B1%E8%83%BD%E4%B8%80%E7%9B%B4%E5%BC%80%E4%BD%86%E7%A9%BA%E8%B0%83%E4%B8%8D%E8%83%BD%23) `1.2M 🔥` `NEW`
1. [我国高端新材料迎来集中突破](https://s.weibo.com/weibo?q=%23%E6%88%91%E5%9B%BD%E9%AB%98%E7%AB%AF%E6%96%B0%E6%9D%90%E6%96%99%E8%BF%8E%E6%9D%A5%E9%9B%86%E4%B8%AD%E7%AA%81%E7%A0%B4%23) `880.4K 🔥` `NEW`
1. [全球第三大富豪易主](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%90%83%E7%AC%AC%E4%B8%89%E5%A4%A7%E5%AF%8C%E8%B1%AA%E6%98%93%E4%B8%BB%23) `874.7K 🔥` `NEW`
1. [小眼睛多平台撤销李荣浩作曲](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%9C%BC%E7%9D%9B%E5%A4%9A%E5%B9%B3%E5%8F%B0%E6%92%A4%E9%94%80%E6%9D%8E%E8%8D%A3%E6%B5%A9%E4%BD%9C%E6%9B%B2%23) `830.2K 🔥` `NEW`
1. [女子山姆40元买披萨吃出108元剪刀](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%B1%B1%E5%A7%8640%E5%85%83%E4%B9%B0%E6%8A%AB%E8%90%A8%E5%90%83%E5%87%BA108%E5%85%83%E5%89%AA%E5%88%80%23) `829.7K 🔥` `NEW`
1. [夏日特调站](https://s.weibo.com/weibo?q=%23%E5%A4%8F%E6%97%A5%E7%89%B9%E8%B0%83%E7%AB%99%23) `593.4K 🔥` `NEW`
1. [独子去世母亲要求继承87个游戏账号](https://s.weibo.com/weibo?q=%23%E7%8B%AC%E5%AD%90%E5%8E%BB%E4%B8%96%E6%AF%8D%E4%BA%B2%E8%A6%81%E6%B1%82%E7%BB%A7%E6%89%BF87%E4%B8%AA%E6%B8%B8%E6%88%8F%E8%B4%A6%E5%8F%B7%23) `575.6K 🔥` `NEW`
1. [1人操控100个账号把旅游搭子骗去新疆](https://s.weibo.com/weibo?q=%231%E4%BA%BA%E6%93%8D%E6%8E%A7100%E4%B8%AA%E8%B4%A6%E5%8F%B7%E6%8A%8A%E6%97%85%E6%B8%B8%E6%90%AD%E5%AD%90%E9%AA%97%E5%8E%BB%E6%96%B0%E7%96%86%23) `431.4K 🔥` `NEW`
1. [海月真言先知皮肤爆料](https://s.weibo.com/weibo?q=%23%E6%B5%B7%E6%9C%88%E7%9C%9F%E8%A8%80%E5%85%88%E7%9F%A5%E7%9A%AE%E8%82%A4%E7%88%86%E6%96%99%23) `428.2K 🔥` `NEW`
1. [原配要求丈夫直播签销毁胚胎意见书](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E9%85%8D%E8%A6%81%E6%B1%82%E4%B8%88%E5%A4%AB%E7%9B%B4%E6%92%AD%E7%AD%BE%E9%94%80%E6%AF%81%E8%83%9A%E8%83%8E%E6%84%8F%E8%A7%81%E4%B9%A6%23) `416.6K 🔥` `NEW`
1. [方圆疑似做了腰腹环吸 (Fangyuan is suspected of having a waist and abdomen ring.)](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%9C%86%E7%96%91%E4%BC%BC%E5%81%9A%E4%BA%86%E8%85%B0%E8%85%B9%E7%8E%AF%E5%90%B8%23) `411.3K 🔥` `NEW`
1. [樊振东转会时吴敬平承诺一定去德国](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E8%BD%AC%E4%BC%9A%E6%97%B6%E5%90%B4%E6%95%AC%E5%B9%B3%E6%89%BF%E8%AF%BA%E4%B8%80%E5%AE%9A%E5%8E%BB%E5%BE%B7%E5%9B%BD%23) `405.1K 🔥` `NEW`
1. [小米澎程低速慢行灯](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8B%E4%BD%8E%E9%80%9F%E6%85%A2%E8%A1%8C%E7%81%AF%23) `398.9K 🔥` `NEW`
1. [严浩翔给正在冲伤口的丁程鑫递纸巾](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E7%BB%99%E6%AD%A3%E5%9C%A8%E5%86%B2%E4%BC%A4%E5%8F%A3%E7%9A%84%E4%B8%81%E7%A8%8B%E9%91%AB%E9%80%92%E7%BA%B8%E5%B7%BE%23) `396.7K 🔥` `NEW`
1. [爷爷不泡茶甜度玄学](https://s.weibo.com/weibo?q=%23%E7%88%B7%E7%88%B7%E4%B8%8D%E6%B3%A1%E8%8C%B6%E7%94%9C%E5%BA%A6%E7%8E%84%E5%AD%A6%23) `387.4K 🔥` `NEW`
1. [A股股王大涨](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E8%82%A1%E7%8E%8B%E5%A4%A7%E6%B6%A8%23) `387.3K 🔥` `NEW`
1. [李昀锐说关晓彤睫毛是蜘蛛腿](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E6%98%80%E9%94%90%E8%AF%B4%E5%85%B3%E6%99%93%E5%BD%A4%E7%9D%AB%E6%AF%9B%E6%98%AF%E8%9C%98%E8%9B%9B%E8%85%BF%23) `386.3K 🔥` `NEW`
1. [婚外胚胎男子称同意财产分割方案](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E7%94%B7%E5%AD%90%E7%A7%B0%E5%90%8C%E6%84%8F%E8%B4%A2%E4%BA%A7%E5%88%86%E5%89%B2%E6%96%B9%E6%A1%88%23) `384.7K 🔥` `NEW`
1. [谁来管管AI漫剧女主的穿搭](https://s.weibo.com/weibo?q=%23%E8%B0%81%E6%9D%A5%E7%AE%A1%E7%AE%A1AI%E6%BC%AB%E5%89%A7%E5%A5%B3%E4%B8%BB%E7%9A%84%E7%A9%BF%E6%90%AD%23) `382.3K 🔥` `NEW`
1. [顾客结账时把钱扔地上服务员霸气回应](https://s.weibo.com/weibo?q=%23%E9%A1%BE%E5%AE%A2%E7%BB%93%E8%B4%A6%E6%97%B6%E6%8A%8A%E9%92%B1%E6%89%94%E5%9C%B0%E4%B8%8A%E6%9C%8D%E5%8A%A1%E5%91%98%E9%9C%B8%E6%B0%94%E5%9B%9E%E5%BA%94%23) `380.4K 🔥` `NEW`
1. [上海全女维修团队培训费引争议 (Training fees for Shanghai’s all-female maintenance team spark controversy)](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E5%85%A8%E5%A5%B3%E7%BB%B4%E4%BF%AE%E5%9B%A2%E9%98%9F%E5%9F%B9%E8%AE%AD%E8%B4%B9%E5%BC%95%E4%BA%89%E8%AE%AE%23) `379.0K 🔥` `NEW`
1. [洞洞鞋真的是脚气培养皿吗](https://s.weibo.com/weibo?q=%23%E6%B4%9E%E6%B4%9E%E9%9E%8B%E7%9C%9F%E7%9A%84%E6%98%AF%E8%84%9A%E6%B0%94%E5%9F%B9%E5%85%BB%E7%9A%BF%E5%90%97%23) `329.4K 🔥` `NEW`
1. [TF四代五公 抢不到票](https://s.weibo.com/weibo?q=%23TF%E5%9B%9B%E4%BB%A3%E4%BA%94%E5%85%AC%20%E6%8A%A2%E4%B8%8D%E5%88%B0%E7%A5%A8%23) `260.2K 🔥` `NEW`
1. [医生呼吁不要让医学后继乏人](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%91%BC%E5%90%81%E4%B8%8D%E8%A6%81%E8%AE%A9%E5%8C%BB%E5%AD%A6%E5%90%8E%E7%BB%A7%E4%B9%8F%E4%BA%BA%23) `246.7K 🔥` `NEW`
1. [樊振东周杰伦乒乓球对打](https://s.weibo.com/weibo?q=%23%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%91%A8%E6%9D%B0%E4%BC%A6%E4%B9%92%E4%B9%93%E7%90%83%E5%AF%B9%E6%89%93%23) `229.0K 🔥` `NEW`
1. [低精力人群出门最爽的一集](https://s.weibo.com/weibo?q=%23%E4%BD%8E%E7%B2%BE%E5%8A%9B%E4%BA%BA%E7%BE%A4%E5%87%BA%E9%97%A8%E6%9C%80%E7%88%BD%E7%9A%84%E4%B8%80%E9%9B%86%23) `226.6K 🔥` `NEW`
1. [aespa新歌MV](https://s.weibo.com/weibo?q=%23aespa%E6%96%B0%E6%AD%8CMV%23) `226.1K 🔥` `NEW`
1. [陈瑶白切黑演技](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%91%B6%E7%99%BD%E5%88%87%E9%BB%91%E6%BC%94%E6%8A%80%23) `225.8K 🔥` `NEW`
1. [真的不能和AI高强度deeptalk](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E7%9A%84%E4%B8%8D%E8%83%BD%E5%92%8CAI%E9%AB%98%E5%BC%BA%E5%BA%A6deeptalk%23) `225.4K 🔥` `NEW`
1. [王安宇粉丝相亲相到了王安宇朋友](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E5%AE%89%E5%AE%87%E7%B2%89%E4%B8%9D%E7%9B%B8%E4%BA%B2%E7%9B%B8%E5%88%B0%E4%BA%86%E7%8E%8B%E5%AE%89%E5%AE%87%E6%9C%8B%E5%8F%8B%23) `225.1K 🔥` `NEW`
1. [香奈儿前员工偷700件奢侈品 (Former Chanel employee stole 700 luxury items)](https://s.weibo.com/weibo?q=%23%E9%A6%99%E5%A5%88%E5%84%BF%E5%89%8D%E5%91%98%E5%B7%A5%E5%81%B7700%E4%BB%B6%E5%A5%A2%E4%BE%88%E5%93%81%23) `225.1K 🔥` `NEW`
1. [小澈模仿张元英](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E6%BE%88%E6%A8%A1%E4%BB%BF%E5%BC%A0%E5%85%83%E8%8B%B1%23) `224.8K 🔥` `NEW`
1. [婚外胚胎案丈夫说是一场误会](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E6%A1%88%E4%B8%88%E5%A4%AB%E8%AF%B4%E6%98%AF%E4%B8%80%E5%9C%BA%E8%AF%AF%E4%BC%9A%23) `224.0K 🔥` `NEW`
1. [宋亚轩手上没有展示位了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E6%89%8B%E4%B8%8A%E6%B2%A1%E6%9C%89%E5%B1%95%E7%A4%BA%E4%BD%8D%E4%BA%86%23) `218.5K 🔥` `NEW`
1. [A股股王大涨超17%](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E8%82%A1%E7%8E%8B%E5%A4%A7%E6%B6%A8%E8%B6%8517%25%23) `205.3K 🔥` `NEW`
1. [医院最难治的就是病人的反骨](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E6%9C%80%E9%9A%BE%E6%B2%BB%E7%9A%84%E5%B0%B1%E6%98%AF%E7%97%85%E4%BA%BA%E7%9A%84%E5%8F%8D%E9%AA%A8%23) `199.1K 🔥` `NEW`
1. [九门尹新月扮演者回应争议](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E5%B0%B9%E6%96%B0%E6%9C%88%E6%89%AE%E6%BC%94%E8%80%85%E5%9B%9E%E5%BA%94%E4%BA%89%E8%AE%AE%23) `195.9K 🔥` `NEW`
1. [中国父母的放手焦虑](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%88%B6%E6%AF%8D%E7%9A%84%E6%94%BE%E6%89%8B%E7%84%A6%E8%99%91%23) `195.7K 🔥` `NEW`
1. [歌手总决赛帮唱](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%E6%80%BB%E5%86%B3%E8%B5%9B%E5%B8%AE%E5%94%B1%23) `1.0M 🔥` `+46%`
1. [丈夫称愿意销毁胚胎患癌妻子回应](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E7%A7%B0%E6%84%BF%E6%84%8F%E9%94%80%E6%AF%81%E8%83%9A%E8%83%8E%E6%82%A3%E7%99%8C%E5%A6%BB%E5%AD%90%E5%9B%9E%E5%BA%94%23) `424.6K 🔥` `+64%`
1. [钟美美称被父亲家暴至今恐惧敲门声 (Chung Meimei said she was domestically abused by her father and still fears the knock on the door)](https://s.weibo.com/weibo?q=%23%E9%92%9F%E7%BE%8E%E7%BE%8E%E7%A7%B0%E8%A2%AB%E7%88%B6%E4%BA%B2%E5%AE%B6%E6%9A%B4%E8%87%B3%E4%BB%8A%E6%81%90%E6%83%A7%E6%95%B2%E9%97%A8%E5%A3%B0%23) `404.2K 🔥`
1. [日本员工拒绝返回商场躲过爆炸](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%91%98%E5%B7%A5%E6%8B%92%E7%BB%9D%E8%BF%94%E5%9B%9E%E5%95%86%E5%9C%BA%E8%BA%B2%E8%BF%87%E7%88%86%E7%82%B8%23) `328.8K 🔥`
1. [终于知道自助小火锅限时的原因了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E7%9F%A5%E9%81%93%E8%87%AA%E5%8A%A9%E5%B0%8F%E7%81%AB%E9%94%85%E9%99%90%E6%97%B6%E7%9A%84%E5%8E%9F%E5%9B%A0%E4%BA%86%23) `315.9K 🔥`
1. [王一博在新西兰还穿大棉袄 (Wang Yibo even wore a large cotton-padded jacket in New Zealand)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%9C%A8%E6%96%B0%E8%A5%BF%E5%85%B0%E8%BF%98%E7%A9%BF%E5%A4%A7%E6%A3%89%E8%A2%84%23) `308.0K 🔥`
1. [终于有人把夏天的感觉形容出来了](https://s.weibo.com/weibo?q=%23%E7%BB%88%E4%BA%8E%E6%9C%89%E4%BA%BA%E6%8A%8A%E5%A4%8F%E5%A4%A9%E7%9A%84%E6%84%9F%E8%A7%89%E5%BD%A2%E5%AE%B9%E5%87%BA%E6%9D%A5%E4%BA%86%23) `240.5K 🔥`
1. [不要抽穷公司的团建奖](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E6%8A%BD%E7%A9%B7%E5%85%AC%E5%8F%B8%E7%9A%84%E5%9B%A2%E5%BB%BA%E5%A5%96%23) `516.9K 🔥` `-57%`
1. [张凌赫卢昱晓 刺棠](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E5%8D%A2%E6%98%B1%E6%99%93%20%E5%88%BA%E6%A3%A0%23) `387.9K 🔥` `-60%`
1. [花开锦绣定档](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%BC%80%E9%94%A6%E7%BB%A3%E5%AE%9A%E6%A1%A3%23) `382.3K 🔥` `-77%`
1. [DeepSeek斩杀线](https://s.weibo.com/weibo?q=%23DeepSeek%E6%96%A9%E6%9D%80%E7%BA%BF%23) `240.7K 🔥` `-73%`
1. [罗正一年花170元146给了苹果 (Luo Zheng spent 170 yuan 146 a year on Apple)](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%AD%A3%E4%B8%80%E5%B9%B4%E8%8A%B1170%E5%85%83146%E7%BB%99%E4%BA%86%E8%8B%B9%E6%9E%9C%23) `240.6K 🔥` `-40%`
1. [9岁女孩性早熟骨骼已接近闭合 (A 9-year-old girl has precocious puberty and her bones are close to closing)](https://s.weibo.com/weibo?q=%239%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%80%A7%E6%97%A9%E7%86%9F%E9%AA%A8%E9%AA%BC%E5%B7%B2%E6%8E%A5%E8%BF%91%E9%97%AD%E5%90%88%23) `206.8K 🔥` `-25%`

Updated at 2026-08-04 15:18:15

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
