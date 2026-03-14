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

1. [杨幂赵丽颖 白玉兰 (Yang Mi, Zhao Liying, Magnolia)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%B5%B5%E4%B8%BD%E9%A2%96%20%E7%99%BD%E7%8E%89%E5%85%B0%23) `538.0K 🔥` `NEW`
1. [网民压扁玩具车编造事故视频被罚](https://s.weibo.com/weibo?q=%23%E7%BD%91%E6%B0%91%E5%8E%8B%E6%89%81%E7%8E%A9%E5%85%B7%E8%BD%A6%E7%BC%96%E9%80%A0%E4%BA%8B%E6%95%85%E8%A7%86%E9%A2%91%E8%A2%AB%E7%BD%9A%23) `532.5K 🔥` `NEW`
1. [美军对伊石油出口枢纽猛烈空袭](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%86%9B%E5%AF%B9%E4%BC%8A%E7%9F%B3%E6%B2%B9%E5%87%BA%E5%8F%A3%E6%9E%A2%E7%BA%BD%E7%8C%9B%E7%83%88%E7%A9%BA%E8%A2%AD%23) `531.2K 🔥` `NEW`
1. [两米二老外深圳就医视频火出圈](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E7%B1%B3%E4%BA%8C%E8%80%81%E5%A4%96%E6%B7%B1%E5%9C%B3%E5%B0%B1%E5%8C%BB%E8%A7%86%E9%A2%91%E7%81%AB%E5%87%BA%E5%9C%88%23) `149.6K 🔥` `NEW`
1. [特朗普宣布对伊朗哈尔克岛发动空袭](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%AE%A3%E5%B8%83%E5%AF%B9%E4%BC%8A%E6%9C%97%E5%93%88%E5%B0%94%E5%85%8B%E5%B2%9B%E5%8F%91%E5%8A%A8%E7%A9%BA%E8%A2%AD%23) `118.1K 🔥` `NEW`
1. [伊朗向以色列发动最猛烈空袭](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%90%91%E4%BB%A5%E8%89%B2%E5%88%97%E5%8F%91%E5%8A%A8%E6%9C%80%E7%8C%9B%E7%83%88%E7%A9%BA%E8%A2%AD%23) `112.8K 🔥` `NEW`
1. [新能源车高速连跳3次空挡瞬间失速](https://s.weibo.com/weibo?q=%23%E6%96%B0%E8%83%BD%E6%BA%90%E8%BD%A6%E9%AB%98%E9%80%9F%E8%BF%9E%E8%B7%B33%E6%AC%A1%E7%A9%BA%E6%8C%A1%E7%9E%AC%E9%97%B4%E5%A4%B1%E9%80%9F%23) `109.1K 🔥` `NEW`
1. [以色列袭击伊朗高级核科学家](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E8%A2%AD%E5%87%BB%E4%BC%8A%E6%9C%97%E9%AB%98%E7%BA%A7%E6%A0%B8%E7%A7%91%E5%AD%A6%E5%AE%B6%23) `104.3K 🔥` `NEW`
1. [澳洲遇难中国人疑为签证刷工作天数](https://s.weibo.com/weibo?q=%23%E6%BE%B3%E6%B4%B2%E9%81%87%E9%9A%BE%E4%B8%AD%E5%9B%BD%E4%BA%BA%E7%96%91%E4%B8%BA%E7%AD%BE%E8%AF%81%E5%88%B7%E5%B7%A5%E4%BD%9C%E5%A4%A9%E6%95%B0%23) `96.5K 🔥` `NEW`
1. [杭州男生手搓3台机器人保研国科大](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E7%94%B7%E7%94%9F%E6%89%8B%E6%90%933%E5%8F%B0%E6%9C%BA%E5%99%A8%E4%BA%BA%E4%BF%9D%E7%A0%94%E5%9B%BD%E7%A7%91%E5%A4%A7%23) `95.7K 🔥` `NEW`
1. [逐玉崔千金宁死不出卖樊长玉 (Cui Qianjin would rather die than betray Fan Changyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E5%B4%94%E5%8D%83%E9%87%91%E5%AE%81%E6%AD%BB%E4%B8%8D%E5%87%BA%E5%8D%96%E6%A8%8A%E9%95%BF%E7%8E%89%23) `94.3K 🔥` `NEW`
1. [伊拉克声明击落美军加油机](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%8B%89%E5%85%8B%E5%A3%B0%E6%98%8E%E5%87%BB%E8%90%BD%E7%BE%8E%E5%86%9B%E5%8A%A0%E6%B2%B9%E6%9C%BA%23) `94.1K 🔥` `NEW`
1. [GEN上单回应Bin](https://s.weibo.com/weibo?q=%23GEN%E4%B8%8A%E5%8D%95%E5%9B%9E%E5%BA%94Bin%23) `84.3K 🔥` `NEW`
1. [田曦薇骑马这段夯爆了](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E9%AA%91%E9%A9%AC%E8%BF%99%E6%AE%B5%E5%A4%AF%E7%88%86%E4%BA%86%23) `82.4K 🔥` `NEW`
1. [多名配音演员发函要求停止AI侵权](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%90%8D%E9%85%8D%E9%9F%B3%E6%BC%94%E5%91%98%E5%8F%91%E5%87%BD%E8%A6%81%E6%B1%82%E5%81%9C%E6%AD%A2AI%E4%BE%B5%E6%9D%83%23) `78.8K 🔥` `NEW`
1. [告别千元机](https://s.weibo.com/weibo?q=%23%E5%91%8A%E5%88%AB%E5%8D%83%E5%85%83%E6%9C%BA%23) `74.3K 🔥` `NEW`
1. [A股每天4小时交易时间够用吗](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E6%AF%8F%E5%A4%A94%E5%B0%8F%E6%97%B6%E4%BA%A4%E6%98%93%E6%97%B6%E9%97%B4%E5%A4%9F%E7%94%A8%E5%90%97%23) `73.9K 🔥` `NEW`
1. [韩国人喜欢的中文句子](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E4%BA%BA%E5%96%9C%E6%AC%A2%E7%9A%84%E4%B8%AD%E6%96%87%E5%8F%A5%E5%AD%90%23) `71.6K 🔥` `NEW`
1. [省考](https://s.weibo.com/weibo?q=%23%E7%9C%81%E8%80%83%23) `1.1M 🔥` `+770%`
1. [白玉兰视后大年 (White magnolia looks forward to the new year)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E7%8E%89%E5%85%B0%E8%A7%86%E5%90%8E%E5%A4%A7%E5%B9%B4%23) `744.4K 🔥` `+561%`
1. [弟弟的脐带血15年后救了哥哥](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%E7%9A%84%E8%84%90%E5%B8%A6%E8%A1%8015%E5%B9%B4%E5%90%8E%E6%95%91%E4%BA%86%E5%93%A5%E5%93%A5%23) `590.0K 🔥` `+44%`
1. [十五五向你发出奋斗邀请 (The 15th Five-Year Plan sends you an invitation to struggle.)](https://s.weibo.com/weibo?q=%23%E5%8D%81%E4%BA%94%E4%BA%94%E5%90%91%E4%BD%A0%E5%8F%91%E5%87%BA%E5%A5%8B%E6%96%97%E9%82%80%E8%AF%B7%23) `555.8K 🔥` `+37%`
1. [财务离职总经理转错公账23万余元](https://s.weibo.com/weibo?q=%23%E8%B4%A2%E5%8A%A1%E7%A6%BB%E8%81%8C%E6%80%BB%E7%BB%8F%E7%90%86%E8%BD%AC%E9%94%99%E5%85%AC%E8%B4%A623%E4%B8%87%E4%BD%99%E5%85%83%23) `484.9K 🔥` `+591%`
1. [建议完善特殊工作环境劳动者权益 (Suggestions on improving the rights of workers in special working environments)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%AE%8C%E5%96%84%E7%89%B9%E6%AE%8A%E5%B7%A5%E4%BD%9C%E7%8E%AF%E5%A2%83%E5%8A%B3%E5%8A%A8%E8%80%85%E6%9D%83%E7%9B%8A%23) `412.2K 🔥` `+25%`
1. [世界目光聚焦中国两会新举措 (The world focuses on China’s new measures during the two sessions)](https://s.weibo.com/weibo?q=%23%E4%B8%96%E7%95%8C%E7%9B%AE%E5%85%89%E8%81%9A%E7%84%A6%E4%B8%AD%E5%9B%BD%E4%B8%A4%E4%BC%9A%E6%96%B0%E4%B8%BE%E6%8E%AA%23) `384.0K 🔥` `+24%`
1. [第一次见女明星打出溜滑出场](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E5%A5%B3%E6%98%8E%E6%98%9F%E6%89%93%E5%87%BA%E6%BA%9C%E6%BB%91%E5%87%BA%E5%9C%BA%23) `311.1K 🔥` `+62%`
1. [如果一个人的朋友圈特别正常](https://s.weibo.com/weibo?q=%23%E5%A6%82%E6%9E%9C%E4%B8%80%E4%B8%AA%E4%BA%BA%E7%9A%84%E6%9C%8B%E5%8F%8B%E5%9C%88%E7%89%B9%E5%88%AB%E6%AD%A3%E5%B8%B8%23) `276.8K 🔥` `+84%`
1. [田曦薇心疼樊长玉哭了](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%E5%BF%83%E7%96%BC%E6%A8%8A%E9%95%BF%E7%8E%89%E5%93%AD%E4%BA%86%23) `110.7K 🔥` `+42%`
1. [菠萝和凤梨到底啥区别](https://s.weibo.com/weibo?q=%23%E8%8F%A0%E8%90%9D%E5%92%8C%E5%87%A4%E6%A2%A8%E5%88%B0%E5%BA%95%E5%95%A5%E5%8C%BA%E5%88%AB%23) `98.3K 🔥` `+109%`
1. [国家网络安全通报中心通报OpenClaw风险 (National Cybersecurity Notification Center notifies OpenClaw risks)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E7%BD%91%E7%BB%9C%E5%AE%89%E5%85%A8%E9%80%9A%E6%8A%A5%E4%B8%AD%E5%BF%83%E9%80%9A%E6%8A%A5OpenClaw%E9%A3%8E%E9%99%A9%23) `625.7K 🔥`
1. [伊朗30枚超重导弹袭击以色列 (Iran attacks Israel with 30 super-heavy missiles)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%9730%E6%9E%9A%E8%B6%85%E9%87%8D%E5%AF%BC%E5%BC%B9%E8%A2%AD%E5%87%BB%E4%BB%A5%E8%89%B2%E5%88%97%23) `340.3K 🔥`
1. [瞿颖让我笑一天了 (Qu Ying made me laugh all day long)](https://s.weibo.com/weibo?q=%23%E7%9E%BF%E9%A2%96%E8%AE%A9%E6%88%91%E7%AC%91%E4%B8%80%E5%A4%A9%E4%BA%86%23) `177.0K 🔥`
1. [父亲回应女婴出生2天被爷爷丢弃厕所 (Father responds to baby girl being thrown into the toilet by her grandfather 2 days after she was born)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%A9%B4%E5%87%BA%E7%94%9F2%E5%A4%A9%E8%A2%AB%E7%88%B7%E7%88%B7%E4%B8%A2%E5%BC%83%E5%8E%95%E6%89%80%23) `128.9K 🔥`
1. [男一男二男三男四男五 (Male one male two male three male four male five)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E4%B8%80%E7%94%B7%E4%BA%8C%E7%94%B7%E4%B8%89%E7%94%B7%E5%9B%9B%E7%94%B7%E4%BA%94%23) `120.3K 🔥`
1. [呼啸山庄尺度好大 (Wuthering Heights is so big)](https://s.weibo.com/weibo?q=%23%E5%91%BC%E5%95%B8%E5%B1%B1%E5%BA%84%E5%B0%BA%E5%BA%A6%E5%A5%BD%E5%A4%A7%23) `119.2K 🔥`
1. [警方通报19岁男子无证驾驶致1死6伤](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E9%80%9A%E6%8A%A519%E5%B2%81%E7%94%B7%E5%AD%90%E6%97%A0%E8%AF%81%E9%A9%BE%E9%A9%B6%E8%87%B41%E6%AD%BB6%E4%BC%A4%23) `117.5K 🔥`
1. [4种睡眠异常提示肾出问题](https://s.weibo.com/weibo?q=%234%E7%A7%8D%E7%9D%A1%E7%9C%A0%E5%BC%82%E5%B8%B8%E6%8F%90%E7%A4%BA%E8%82%BE%E5%87%BA%E9%97%AE%E9%A2%98%23) `116.0K 🔥`
1. [印度90岁妇人遭4蒙面男子强奸 (90-year-old Indian woman raped by 4 masked men)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A690%E5%B2%81%E5%A6%87%E4%BA%BA%E9%81%AD4%E8%92%99%E9%9D%A2%E7%94%B7%E5%AD%90%E5%BC%BA%E5%A5%B8%23) `114.5K 🔥`
1. [研究称第二次怀孕会继续重塑大脑 (Second pregnancy continues to reshape brain, study says)](https://s.weibo.com/weibo?q=%23%E7%A0%94%E7%A9%B6%E7%A7%B0%E7%AC%AC%E4%BA%8C%E6%AC%A1%E6%80%80%E5%AD%95%E4%BC%9A%E7%BB%A7%E7%BB%AD%E9%87%8D%E5%A1%91%E5%A4%A7%E8%84%91%23) `113.6K 🔥`
1. [32岁女子反复便血半年确诊肠癌](https://s.weibo.com/weibo?q=%2332%E5%B2%81%E5%A5%B3%E5%AD%90%E5%8F%8D%E5%A4%8D%E4%BE%BF%E8%A1%80%E5%8D%8A%E5%B9%B4%E7%A1%AE%E8%AF%8A%E8%82%A0%E7%99%8C%23) `111.6K 🔥`
1. [张颂文硬气回应AI冲击影视行业 (Zhang Songwen responded forcefully to the impact of AI on the film and television industry)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%A2%82%E6%96%87%E7%A1%AC%E6%B0%94%E5%9B%9E%E5%BA%94AI%E5%86%B2%E5%87%BB%E5%BD%B1%E8%A7%86%E8%A1%8C%E4%B8%9A%23) `110.5K 🔥`
1. [2026白玉兰提名名单预测 (2026 Magnolia Nomination List Prediction)](https://s.weibo.com/weibo?q=%232026%E7%99%BD%E7%8E%89%E5%85%B0%E6%8F%90%E5%90%8D%E5%90%8D%E5%8D%95%E9%A2%84%E6%B5%8B%23) `89.8K 🔥`
1. [九尾 这导播是真恶心](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E5%B0%BE%20%E8%BF%99%E5%AF%BC%E6%92%AD%E6%98%AF%E7%9C%9F%E6%81%B6%E5%BF%83%23) `83.4K 🔥`
1. [胖东来 (Fat Dong Lai)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%23) `79.7K 🔥`
1. [逐玉 (Zhuyu)](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%23) `76.8K 🔥`
1. [西安不倒翁小姐姐离职丈夫回应](https://s.weibo.com/weibo?q=%23%E8%A5%BF%E5%AE%89%E4%B8%8D%E5%80%92%E7%BF%81%E5%B0%8F%E5%A7%90%E5%A7%90%E7%A6%BB%E8%81%8C%E4%B8%88%E5%A4%AB%E5%9B%9E%E5%BA%94%23) `199.8K 🔥` `-31%`
1. [男子维权被12315工作人员嘲讽 (A man’s rights defense was ridiculed by 12315 staff)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%BB%B4%E6%9D%83%E8%A2%AB12315%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E5%98%B2%E8%AE%BD%23) `196.3K 🔥` `-46%`
1. [多人反映贷款逾期被银行划走养老金 (Many people reported that their pension funds were withdrawn by banks after their loans were overdue.)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E4%BA%BA%E5%8F%8D%E6%98%A0%E8%B4%B7%E6%AC%BE%E9%80%BE%E6%9C%9F%E8%A2%AB%E9%93%B6%E8%A1%8C%E5%88%92%E8%B5%B0%E5%85%BB%E8%80%81%E9%87%91%23) `138.9K 🔥` `-60%`
1. [伊朗打击中东多国美资金融机构 (Iran cracks down on U.S.-owned financial institutions in Middle East)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%89%93%E5%87%BB%E4%B8%AD%E4%B8%9C%E5%A4%9A%E5%9B%BD%E7%BE%8E%E8%B5%84%E9%87%91%E8%9E%8D%E6%9C%BA%E6%9E%84%23) `95.9K 🔥` `-62%`
1. [以色列总统称特朗普攻击国家主权](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E8%89%B2%E5%88%97%E6%80%BB%E7%BB%9F%E7%A7%B0%E7%89%B9%E6%9C%97%E6%99%AE%E6%94%BB%E5%87%BB%E5%9B%BD%E5%AE%B6%E4%B8%BB%E6%9D%83%23) `83.0K 🔥` `-25%`
1. [呼啸山庄 (Wuthering Heights)](https://s.weibo.com/weibo?q=%23%E5%91%BC%E5%95%B8%E5%B1%B1%E5%BA%84%23) `81.4K 🔥` `-91%`

Updated at 2026-03-14 08:53:08

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
