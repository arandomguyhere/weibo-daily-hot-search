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

1. [银行能办结婚证了 (Banks can now issue marriage certificates)](https://s.weibo.com/weibo?q=%23%E9%93%B6%E8%A1%8C%E8%83%BD%E5%8A%9E%E7%BB%93%E5%A9%9A%E8%AF%81%E4%BA%86%23) `547.0K 🔥` `NEW`
1. [中国足球小将战平巴萨](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E8%B6%B3%E7%90%83%E5%B0%8F%E5%B0%86%E6%88%98%E5%B9%B3%E5%B7%B4%E8%90%A8%23) `191.9K 🔥` `NEW`
1. [姜潮麦迪娜婚礼葡萄摆成树和瀑布](https://s.weibo.com/weibo?q=%23%E5%A7%9C%E6%BD%AE%E9%BA%A6%E8%BF%AA%E5%A8%9C%E5%A9%9A%E7%A4%BC%E8%91%A1%E8%90%84%E6%91%86%E6%88%90%E6%A0%91%E5%92%8C%E7%80%91%E5%B8%83%23) `181.4K 🔥` `NEW`
1. [女孩中考692分选择中本贯通](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E4%B8%AD%E8%80%83692%E5%88%86%E9%80%89%E6%8B%A9%E4%B8%AD%E6%9C%AC%E8%B4%AF%E9%80%9A%23) `181.1K 🔥` `NEW`
1. [郭德纲造型](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%BE%B7%E7%BA%B2%E9%80%A0%E5%9E%8B%23) `180.8K 🔥` `NEW`
1. [王曼昱蒯曼无缘女双四强](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%9B%BC%E6%98%B1%E8%92%AF%E6%9B%BC%E6%97%A0%E7%BC%98%E5%A5%B3%E5%8F%8C%E5%9B%9B%E5%BC%BA%23) `180.5K 🔥` `NEW`
1. [普京罕见评论俄日关系](https://s.weibo.com/weibo?q=%23%E6%99%AE%E4%BA%AC%E7%BD%95%E8%A7%81%E8%AF%84%E8%AE%BA%E4%BF%84%E6%97%A5%E5%85%B3%E7%B3%BB%23) `180.4K 🔥` `NEW`
1. [原神](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E7%A5%9E%23) `180.2K 🔥` `NEW`
1. [龙餐馆原型人物回应被拍成电影](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%E5%8E%9F%E5%9E%8B%E4%BA%BA%E7%89%A9%E5%9B%9E%E5%BA%94%E8%A2%AB%E6%8B%8D%E6%88%90%E7%94%B5%E5%BD%B1%23) `180.1K 🔥` `NEW`
1. [stew EDG](https://s.weibo.com/weibo?q=%23stew%20EDG%23) `179.3K 🔥` `NEW`
1. [邹市明辟谣 (Zou Shiming refutes rumors)](https://s.weibo.com/weibo?q=%23%E9%82%B9%E5%B8%82%E6%98%8E%E8%BE%9F%E8%B0%A3%23) `1.5M 🔥` `+60%`
1. [胖东来闭店一天整条街都没人出摊 (Fat Donglai closed his shop for one day and no one was out on the street.)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E9%97%AD%E5%BA%97%E4%B8%80%E5%A4%A9%E6%95%B4%E6%9D%A1%E8%A1%97%E9%83%BD%E6%B2%A1%E4%BA%BA%E5%87%BA%E6%91%8A%23) `960.9K 🔥` `+25%`
1. [紧急预拨8000万支持3省抢险救灾 (Emergency allocation of RMB 80 million to support emergency rescue and disaster relief in three provinces)](https://s.weibo.com/weibo?q=%23%E7%B4%A7%E6%80%A5%E9%A2%84%E6%8B%A88000%E4%B8%87%E6%94%AF%E6%8C%813%E7%9C%81%E6%8A%A2%E9%99%A9%E6%95%91%E7%81%BE%23) `676.3K 🔥` `+49%`
1. [田曦薇胡一天吻戏是我能看的吗 (Can I watch Tian Xiwei and Hu Yitian’s kiss scene?)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E8%83%A1%E4%B8%80%E5%A4%A9%E5%90%BB%E6%88%8F%E6%98%AF%E6%88%91%E8%83%BD%E7%9C%8B%E7%9A%84%E5%90%97%23) `313.6K 🔥` `+55%`
1. [古天乐喝古井天天乐 (Louis Koo drinks Gujing Tiantianle)](https://s.weibo.com/weibo?q=%23%E5%8F%A4%E5%A4%A9%E4%B9%90%E5%96%9D%E5%8F%A4%E4%BA%95%E5%A4%A9%E5%A4%A9%E4%B9%90%23) `201.5K 🔥` `+143%`
1. [我人生的存在感和意义](https://s.weibo.com/weibo?q=%23%E6%88%91%E4%BA%BA%E7%94%9F%E7%9A%84%E5%AD%98%E5%9C%A8%E6%84%9F%E5%92%8C%E6%84%8F%E4%B9%89%23) `193.9K 🔥` `+72%`
1. [男子健身房指导女友被要求看结婚证 (Man's gym instructor's girlfriend was asked to see her marriage certificate)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E5%81%A5%E8%BA%AB%E6%88%BF%E6%8C%87%E5%AF%BC%E5%A5%B3%E5%8F%8B%E8%A2%AB%E8%A6%81%E6%B1%82%E7%9C%8B%E7%BB%93%E5%A9%9A%E8%AF%81%23) `181.6K 🔥` `+65%`
1. [王橹杰 化妆师 (Wang Lujie makeup artist)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%20%E5%8C%96%E5%A6%86%E5%B8%88%23) `181.5K 🔥` `+61%`
1. [结婚登记好像也没多大意义](https://s.weibo.com/weibo?q=%23%E7%BB%93%E5%A9%9A%E7%99%BB%E8%AE%B0%E5%A5%BD%E5%83%8F%E4%B9%9F%E6%B2%A1%E5%A4%9A%E5%A4%A7%E6%84%8F%E4%B9%89%23) `181.5K 🔥` `+64%`
1. [胖东来货车轮毂比家里的饭盆还亮](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E8%B4%A7%E8%BD%A6%E8%BD%AE%E6%AF%82%E6%AF%94%E5%AE%B6%E9%87%8C%E7%9A%84%E9%A5%AD%E7%9B%86%E8%BF%98%E4%BA%AE%23) `181.3K 🔥` `+66%`
1. [中国两大芯片巨头业绩超预期](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E4%B8%A4%E5%A4%A7%E8%8A%AF%E7%89%87%E5%B7%A8%E5%A4%B4%E4%B8%9A%E7%BB%A9%E8%B6%85%E9%A2%84%E6%9C%9F%23) `181.1K 🔥` `+62%`
1. [伊拉克人真实评价龙餐馆](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%8B%89%E5%85%8B%E4%BA%BA%E7%9C%9F%E5%AE%9E%E8%AF%84%E4%BB%B7%E9%BE%99%E9%A4%90%E9%A6%86%23) `181.0K 🔥` `+61%`
1. [开推5疑似只剩刘宇宁周柯宇](https://s.weibo.com/weibo?q=%23%E5%BC%80%E6%8E%A85%E7%96%91%E4%BC%BC%E5%8F%AA%E5%89%A9%E5%88%98%E5%AE%87%E5%AE%81%E5%91%A8%E6%9F%AF%E5%AE%87%23) `181.0K 🔥` `+73%`
1. [DeepSeek官网撤公告疑似回滚](https://s.weibo.com/weibo?q=%23DeepSeek%E5%AE%98%E7%BD%91%E6%92%A4%E5%85%AC%E5%91%8A%E7%96%91%E4%BC%BC%E5%9B%9E%E6%BB%9A%23) `180.9K 🔥` `+97%`
1. [小狗交朋友不分物种](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E4%BA%A4%E6%9C%8B%E5%8F%8B%E4%B8%8D%E5%88%86%E7%89%A9%E7%A7%8D%23) `180.8K 🔥` `+71%`
1. [退休236天大姐状态大变样](https://s.weibo.com/weibo?q=%23%E9%80%80%E4%BC%91236%E5%A4%A9%E5%A4%A7%E5%A7%90%E7%8A%B6%E6%80%81%E5%A4%A7%E5%8F%98%E6%A0%B7%23) `180.7K 🔥` `+74%`
1. [第一次见骨瘦如柴的猪 (The first time I saw a scrawny pig)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E9%AA%A8%E7%98%A6%E5%A6%82%E6%9F%B4%E7%9A%84%E7%8C%AA%23) `180.7K 🔥` `+64%`
1. [女子虐待亲生女儿致死后患重度抑郁 (Woman suffered severe depression after abusing her own daughter to death)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%99%90%E5%BE%85%E4%BA%B2%E7%94%9F%E5%A5%B3%E5%84%BF%E8%87%B4%E6%AD%BB%E5%90%8E%E6%82%A3%E9%87%8D%E5%BA%A6%E6%8A%91%E9%83%81%23) `180.6K 🔥` `+66%`
1. [小伙投诉核磁震坏身体影响夫妻生活 (The young man complained that the MRI damaged his body and affected his married life.)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E4%BC%99%E6%8A%95%E8%AF%89%E6%A0%B8%E7%A3%81%E9%9C%87%E5%9D%8F%E8%BA%AB%E4%BD%93%E5%BD%B1%E5%93%8D%E5%A4%AB%E5%A6%BB%E7%94%9F%E6%B4%BB%23) `180.5K 🔥` `+69%`
1. [林厨 下饭酱挂直播间卖 (Chef Lin’s rice sauce is sold in the live broadcast room)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E5%8E%A8%20%E4%B8%8B%E9%A5%AD%E9%85%B1%E6%8C%82%E7%9B%B4%E6%92%AD%E9%97%B4%E5%8D%96%23) `180.3K 🔥` `+71%`
1. [日本把人装进冰箱降温](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%8A%8A%E4%BA%BA%E8%A3%85%E8%BF%9B%E5%86%B0%E7%AE%B1%E9%99%8D%E6%B8%A9%23) `180.3K 🔥` `+78%`
1. [印度牛触电死亡居民殴打变压器泄愤 (Cow electrocuted in India, residents beat transformer to vent anger)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E7%89%9B%E8%A7%A6%E7%94%B5%E6%AD%BB%E4%BA%A1%E5%B1%85%E6%B0%91%E6%AE%B4%E6%89%93%E5%8F%98%E5%8E%8B%E5%99%A8%E6%B3%84%E6%84%A4%23) `180.2K 🔥` `+75%`
1. [广东9月1日起上调最低工资 (Guangdong will raise minimum wage from September 1)](https://s.weibo.com/weibo?q=%23%E5%B9%BF%E4%B8%9C9%E6%9C%881%E6%97%A5%E8%B5%B7%E4%B8%8A%E8%B0%83%E6%9C%80%E4%BD%8E%E5%B7%A5%E8%B5%84%23) `180.1K 🔥` `+73%`
1. [警方称教师户口注销合规无法恢复 (Police say teachers’ account cancellation cannot be restored in compliance with regulations)](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E7%A7%B0%E6%95%99%E5%B8%88%E6%88%B7%E5%8F%A3%E6%B3%A8%E9%94%80%E5%90%88%E8%A7%84%E6%97%A0%E6%B3%95%E6%81%A2%E5%A4%8D%23) `180.0K 🔥` `+72%`
1. [深圳女生一天1500专门劝人别买房 (Shenzhen girl spends 1,500 a day to persuade people not to buy a house)](https://s.weibo.com/weibo?q=%23%E6%B7%B1%E5%9C%B3%E5%A5%B3%E7%94%9F%E4%B8%80%E5%A4%A91500%E4%B8%93%E9%97%A8%E5%8A%9D%E4%BA%BA%E5%88%AB%E4%B9%B0%E6%88%BF%23) `179.9K 🔥` `+66%`
1. [WTT欧洲大满贯瑞典站2026 (WTT European Grand Slam Sweden 2026)](https://s.weibo.com/weibo?q=%23WTT%E6%AC%A7%E6%B4%B2%E5%A4%A7%E6%BB%A1%E8%B4%AF%E7%91%9E%E5%85%B8%E7%AB%992026%23) `179.8K 🔥` `+67%`
1. [母亲报警赶高铁回家24岁儿子已离世 (Mother called the police to catch the high-speed train home and her 24-year-old son has passed away)](https://s.weibo.com/weibo?q=%23%E6%AF%8D%E4%BA%B2%E6%8A%A5%E8%AD%A6%E8%B5%B6%E9%AB%98%E9%93%81%E5%9B%9E%E5%AE%B624%E5%B2%81%E5%84%BF%E5%AD%90%E5%B7%B2%E7%A6%BB%E4%B8%96%23) `179.8K 🔥` `+224%`
1. [鞠婧祎小号安慰粉丝](https://s.weibo.com/weibo?q=%23%E9%9E%A0%E5%A9%A7%E7%A5%8E%E5%B0%8F%E5%8F%B7%E5%AE%89%E6%85%B0%E7%B2%89%E4%B8%9D%23) `179.7K 🔥` `+33%`
1. [好想来回应111.35元零食复称仅64.8元](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E6%83%B3%E6%9D%A5%E5%9B%9E%E5%BA%94111.35%E5%85%83%E9%9B%B6%E9%A3%9F%E5%A4%8D%E7%A7%B0%E4%BB%8564.8%E5%85%83%23) `179.7K 🔥` `+68%`
1. [抓考勤让我大姨来抓就行](https://s.weibo.com/weibo?q=%23%E6%8A%93%E8%80%83%E5%8B%A4%E8%AE%A9%E6%88%91%E5%A4%A7%E5%A7%A8%E6%9D%A5%E6%8A%93%E5%B0%B1%E8%A1%8C%23) `179.6K 🔥` `+78%`
1. [日本强降雨超17万人紧急避难](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%BC%BA%E9%99%8D%E9%9B%A8%E8%B6%8517%E4%B8%87%E4%BA%BA%E7%B4%A7%E6%80%A5%E9%81%BF%E9%9A%BE%23) `179.5K 🔥` `+225%`
1. [白海豚残涡入海后或再度加强 (The remaining white dolphin vortex may intensify again after entering the sea)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E6%B5%B7%E8%B1%9A%E6%AE%8B%E6%B6%A1%E5%85%A5%E6%B5%B7%E5%90%8E%E6%88%96%E5%86%8D%E5%BA%A6%E5%8A%A0%E5%BC%BA%23) `179.4K 🔥` `+61%`
1. [张桂源张函瑞 眼鼻嘴 (Zhang Guiyuan Zhang Hanrui eyes nose mouth)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%A1%82%E6%BA%90%E5%BC%A0%E5%87%BD%E7%91%9E%20%E7%9C%BC%E9%BC%BB%E5%98%B4%23) `179.4K 🔥` `+75%`
1. [魏子宸好帅 (Wei Zichen is so handsome)](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E5%AD%90%E5%AE%B8%E5%A5%BD%E5%B8%85%23) `179.3K 🔥` `+75%`
1. [金鹰奖女主提名 (Golden Eagle Award for Leading Actress Nominated)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%B9%B0%E5%A5%96%E5%A5%B3%E4%B8%BB%E6%8F%90%E5%90%8D%23) `179.2K 🔥` `+86%`
1. [Bin BLG](https://s.weibo.com/weibo?q=%23Bin%20BLG%23) `179.1K 🔥` `+81%`
1. [Whiplash直拍](https://s.weibo.com/weibo?q=%23Whiplash%E7%9B%B4%E6%8B%8D%23) `179.1K 🔥` `+83%`
1. [AI 黎曼猜想](https://s.weibo.com/weibo?q=%23AI%20%E9%BB%8E%E6%9B%BC%E7%8C%9C%E6%83%B3%23) `179.1K 🔥` `+93%`
1. [这3种面包其实是热量刺客 (These 3 types of bread are actually calorie assassins)](https://s.weibo.com/weibo?q=%23%E8%BF%993%E7%A7%8D%E9%9D%A2%E5%8C%85%E5%85%B6%E5%AE%9E%E6%98%AF%E7%83%AD%E9%87%8F%E5%88%BA%E5%AE%A2%23) `277.8K 🔥`
1. [任嘉伦红房子成青岛景点 (Ren Jialun’s red house becomes a tourist attraction in Qingdao)](https://s.weibo.com/weibo?q=%23%E4%BB%BB%E5%98%89%E4%BC%A6%E7%BA%A2%E6%88%BF%E5%AD%90%E6%88%90%E9%9D%92%E5%B2%9B%E6%99%AF%E7%82%B9%23) `181.3K 🔥`
1. [郭麒麟瘦到认不出 (Guo Qilin is so thin that he is unrecognizable)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E9%BA%92%E9%BA%9F%E7%98%A6%E5%88%B0%E8%AE%A4%E4%B8%8D%E5%87%BA%23) `181.2K 🔥` `-21%`

Updated at 2026-08-14 08:00:31

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
