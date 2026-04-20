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

1. [OPPOFindX9Ultra专业口袋哈苏 (OPPOFindX9Ultra Professional Pocket Hasselblad)](https://s.weibo.com/weibo?q=%23OPPOFindX9Ultra%E4%B8%93%E4%B8%9A%E5%8F%A3%E8%A2%8B%E5%93%88%E8%8B%8F%23) `78.1K 🔥` `NEW`
1. [鸿蒙电脑小艺AI有多强](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%99%E7%94%B5%E8%84%91%E5%B0%8F%E8%89%BAAI%E6%9C%89%E5%A4%9A%E5%BC%BA%23) `76.6K 🔥` `NEW`
1. [丁俊晖世锦赛晋级16强](https://s.weibo.com/weibo?q=%23%E4%B8%81%E4%BF%8A%E6%99%96%E4%B8%96%E9%94%A6%E8%B5%9B%E6%99%8B%E7%BA%A716%E5%BC%BA%23) `32.0K 🔥` `NEW`
1. [女孩打赏主播上千万致父亲濒临破产](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%89%93%E8%B5%8F%E4%B8%BB%E6%92%AD%E4%B8%8A%E5%8D%83%E4%B8%87%E8%87%B4%E7%88%B6%E4%BA%B2%E6%BF%92%E4%B8%B4%E7%A0%B4%E4%BA%A7%23) `32.0K 🔥` `NEW`
1. [娃坐了6年电瓶车还不知回家的路](https://s.weibo.com/weibo?q=%23%E5%A8%83%E5%9D%90%E4%BA%866%E5%B9%B4%E7%94%B5%E7%93%B6%E8%BD%A6%E8%BF%98%E4%B8%8D%E7%9F%A5%E5%9B%9E%E5%AE%B6%E7%9A%84%E8%B7%AF%23) `77.8K 🔥` `+94%`
1. [在招聘页面放AI聚餐照](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E6%8B%9B%E8%81%98%E9%A1%B5%E9%9D%A2%E6%94%BEAI%E8%81%9A%E9%A4%90%E7%85%A7%23) `77.7K 🔥` `+27%`
1. [爱奇艺称AI艺人库仅是合作意愿](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E7%A7%B0AI%E8%89%BA%E4%BA%BA%E5%BA%93%E4%BB%85%E6%98%AF%E5%90%88%E4%BD%9C%E6%84%8F%E6%84%BF%23) `77.5K 🔥` `+27%`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `77.5K 🔥` `+31%`
1. [19岁女孩挪用1700万当榜一大姐](https://s.weibo.com/weibo?q=%2319%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%8C%AA%E7%94%A81700%E4%B8%87%E5%BD%93%E6%A6%9C%E4%B8%80%E5%A4%A7%E5%A7%90%23) `77.3K 🔥` `+31%`
1. [爱奇艺股价从46美元跌到1.4美元 (iQIYI stock price fell from US$46 to US$1.4)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E8%82%A1%E4%BB%B7%E4%BB%8E46%E7%BE%8E%E5%85%83%E8%B7%8C%E5%88%B01.4%E7%BE%8E%E5%85%83%23) `77.1K 🔥` `+30%`
1. [东莞一男子把唇上肿瘤当痘痘挤了8年 (A man in Dongguan has been squeezing a tumor on his lip as a pimple for 8 years)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E8%8E%9E%E4%B8%80%E7%94%B7%E5%AD%90%E6%8A%8A%E5%94%87%E4%B8%8A%E8%82%BF%E7%98%A4%E5%BD%93%E7%97%98%E7%97%98%E6%8C%A4%E4%BA%868%E5%B9%B4%23) `77.0K 🔥` `+30%`
1. [虐死男友3岁儿子凶手称忍不住不打](https://s.weibo.com/weibo?q=%23%E8%99%90%E6%AD%BB%E7%94%B7%E5%8F%8B3%E5%B2%81%E5%84%BF%E5%AD%90%E5%87%B6%E6%89%8B%E7%A7%B0%E5%BF%8D%E4%B8%8D%E4%BD%8F%E4%B8%8D%E6%89%93%23) `76.9K 🔥` `+30%`
1. [宝妈拆快递剪断7个月宝宝食指 (Mother cuts off 7-month-old baby's index finger while unpacking package)](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E5%A6%88%E6%8B%86%E5%BF%AB%E9%80%92%E5%89%AA%E6%96%AD7%E4%B8%AA%E6%9C%88%E5%AE%9D%E5%AE%9D%E9%A3%9F%E6%8C%87%23) `76.5K 🔥` `+30%`
1. [弟弟去世赔50万5个姐姐起争执 (Five sisters dispute over compensation of NT$500,000 after brother dies)](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%E5%8E%BB%E4%B8%96%E8%B5%9450%E4%B8%875%E4%B8%AA%E5%A7%90%E5%A7%90%E8%B5%B7%E4%BA%89%E6%89%A7%23) `44.0K 🔥` `+35%`
1. [日本7.7级地震 (Japan magnitude 7.7 earthquake)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC7.7%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `210.8K 🔥`
1. [中方就伊朗向印度船只开火表态](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%B0%B1%E4%BC%8A%E6%9C%97%E5%90%91%E5%8D%B0%E5%BA%A6%E8%88%B9%E5%8F%AA%E5%BC%80%E7%81%AB%E8%A1%A8%E6%80%81%23) `78.0K 🔥`
1. [MCN回应女孩挪用1700万打赏主播](https://s.weibo.com/weibo?q=%23MCN%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%A9%E6%8C%AA%E7%94%A81700%E4%B8%87%E6%89%93%E8%B5%8F%E4%B8%BB%E6%92%AD%23) `70.1K 🔥`
1. [1岁宝宝被单独留车内1小时几近虚脱 (1-year-old baby nearly collapsed after being left alone in car for an hour)](https://s.weibo.com/weibo?q=%231%E5%B2%81%E5%AE%9D%E5%AE%9D%E8%A2%AB%E5%8D%95%E7%8B%AC%E7%95%99%E8%BD%A6%E5%86%851%E5%B0%8F%E6%97%B6%E5%87%A0%E8%BF%91%E8%99%9A%E8%84%B1%23) `67.0K 🔥`
1. [天津市血液中心称已报警](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B4%A5%E5%B8%82%E8%A1%80%E6%B6%B2%E4%B8%AD%E5%BF%83%E7%A7%B0%E5%B7%B2%E6%8A%A5%E8%AD%A6%23) `64.6K 🔥`
1. [长期使用空气炸锅的人都怎么样了](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E4%BD%BF%E7%94%A8%E7%A9%BA%E6%B0%94%E7%82%B8%E9%94%85%E7%9A%84%E4%BA%BA%E9%83%BD%E6%80%8E%E4%B9%88%E6%A0%B7%E4%BA%86%23) `62.7K 🔥`
1. [A股突现重大资产重组新模式](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E7%AA%81%E7%8E%B0%E9%87%8D%E5%A4%A7%E8%B5%84%E4%BA%A7%E9%87%8D%E7%BB%84%E6%96%B0%E6%A8%A1%E5%BC%8F%23) `62.3K 🔥`
1. [女孩挪用千万打赏主播不愿退钱 (Girl misappropriated tens of millions of dollars to reward anchor and refused to return the money)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%8C%AA%E7%94%A8%E5%8D%83%E4%B8%87%E6%89%93%E8%B5%8F%E4%B8%BB%E6%92%AD%E4%B8%8D%E6%84%BF%E9%80%80%E9%92%B1%23) `52.1K 🔥`
1. [爱奇艺](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%23) `50.8K 🔥`
1. [爱奇艺顶级IP赚了118亿](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E9%A1%B6%E7%BA%A7IP%E8%B5%9A%E4%BA%86118%E4%BA%BF%23) `42.8K 🔥`
1. [老人打赏花330万却交不起15元电费 (The old man spent 3.3 million in rewards but could not afford the 15 yuan electricity bill)](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E6%89%93%E8%B5%8F%E8%8A%B1330%E4%B8%87%E5%8D%B4%E4%BA%A4%E4%B8%8D%E8%B5%B715%E5%85%83%E7%94%B5%E8%B4%B9%23) `41.7K 🔥`
1. [日本未来一周可能发生同等规模地震 (Japan may experience an earthquake of similar magnitude in the coming week)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%9C%AA%E6%9D%A5%E4%B8%80%E5%91%A8%E5%8F%AF%E8%83%BD%E5%8F%91%E7%94%9F%E5%90%8C%E7%AD%89%E8%A7%84%E6%A8%A1%E5%9C%B0%E9%9C%87%23) `34.3K 🔥`
1. [特朗普威胁停火到期将开炸](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%A8%81%E8%83%81%E5%81%9C%E7%81%AB%E5%88%B0%E6%9C%9F%E5%B0%86%E5%BC%80%E7%82%B8%23) `33.7K 🔥`
1. [严浩翔是说唱巅峰对决赛事组](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%98%AF%E8%AF%B4%E5%94%B1%E5%B7%85%E5%B3%B0%E5%AF%B9%E5%86%B3%E8%B5%9B%E4%BA%8B%E7%BB%84%23) `32.1K 🔥`
1. [AI版成何体统逐玉 (What kind of style does the AI ​​version become?)](https://s.weibo.com/weibo?q=%23AI%E7%89%88%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%E9%80%90%E7%8E%89%23) `32.1K 🔥`
1. [阴阳师](https://s.weibo.com/weibo?q=%23%E9%98%B4%E9%98%B3%E5%B8%88%23) `32.1K 🔥`
1. [演员集体辟谣AI授权](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E9%9B%86%E4%BD%93%E8%BE%9F%E8%B0%A3AI%E6%8E%88%E6%9D%83%23) `32.1K 🔥`
1. [3岁男童被女友虐死生父要求生母撤诉](https://s.weibo.com/weibo?q=%233%E5%B2%81%E7%94%B7%E7%AB%A5%E8%A2%AB%E5%A5%B3%E5%8F%8B%E8%99%90%E6%AD%BB%E7%94%9F%E7%88%B6%E8%A6%81%E6%B1%82%E7%94%9F%E6%AF%8D%E6%92%A4%E8%AF%89%23) `32.1K 🔥`
1. [谢娜今天第一天联排乐队 (Xie Na’s first day of lining up the band today)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E4%BB%8A%E5%A4%A9%E7%AC%AC%E4%B8%80%E5%A4%A9%E8%81%94%E6%8E%92%E4%B9%90%E9%98%9F%23) `32.1K 🔥`
1. [实习住8人寝上百人共用4水龙头](https://s.weibo.com/weibo?q=%23%E5%AE%9E%E4%B9%A0%E4%BD%8F8%E4%BA%BA%E5%AF%9D%E4%B8%8A%E7%99%BE%E4%BA%BA%E5%85%B1%E7%94%A84%E6%B0%B4%E9%BE%99%E5%A4%B4%23) `32.1K 🔥`
1. [宁德时代股东一口气转让238亿元股票 (Ningde Times shareholders transferred 23.8 billion yuan of shares in one fell swoop)](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E8%82%A1%E4%B8%9C%E4%B8%80%E5%8F%A3%E6%B0%94%E8%BD%AC%E8%AE%A9238%E4%BA%BF%E5%85%83%E8%82%A1%E7%A5%A8%23) `32.1K 🔥`
1. [轩染给长生发红包 (Xuan Ran gives Chang Sheng a red envelope)](https://s.weibo.com/weibo?q=%23%E8%BD%A9%E6%9F%93%E7%BB%99%E9%95%BF%E7%94%9F%E5%8F%91%E7%BA%A2%E5%8C%85%23) `32.1K 🔥`
1. [爱奇艺top10剧集没有莲花楼](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BAtop10%E5%89%A7%E9%9B%86%E6%B2%A1%E6%9C%89%E8%8E%B2%E8%8A%B1%E6%A5%BC%23) `32.0K 🔥`
1. [家业](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%23) `32.0K 🔥`
1. [AI和机器人先把地拖明白了再说](https://s.weibo.com/weibo?q=%23AI%E5%92%8C%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%85%88%E6%8A%8A%E5%9C%B0%E6%8B%96%E6%98%8E%E7%99%BD%E4%BA%86%E5%86%8D%E8%AF%B4%23) `32.0K 🔥`
1. [丁俊晖回应将对阵赵心童](https://s.weibo.com/weibo?q=%23%E4%B8%81%E4%BF%8A%E6%99%96%E5%9B%9E%E5%BA%94%E5%B0%86%E5%AF%B9%E9%98%B5%E8%B5%B5%E5%BF%83%E7%AB%A5%23) `32.0K 🔥`
1. [爱奇艺综艺全面夯爆 (iQIYI Variety Shows Are Comprehensive)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E7%BB%BC%E8%89%BA%E5%85%A8%E9%9D%A2%E5%A4%AF%E7%88%86%23) `84.7K 🔥` `-25%`
1. [谷雨是春天最诗意的收尾 (Guyu is the most poetic ending of spring)](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E9%9B%A8%E6%98%AF%E6%98%A5%E5%A4%A9%E6%9C%80%E8%AF%97%E6%84%8F%E7%9A%84%E6%94%B6%E5%B0%BE%23) `81.1K 🔥` `-28%`
1. [徐洁儿见过李小冉站起来吗](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B4%81%E5%84%BF%E8%A7%81%E8%BF%87%E6%9D%8E%E5%B0%8F%E5%86%89%E7%AB%99%E8%B5%B7%E6%9D%A5%E5%90%97%23) `78.0K 🔥` `-21%`
1. [各国网民线上嘲讽日本人 (Netizens from various countries ridiculed the Japanese online)](https://s.weibo.com/weibo?q=%23%E5%90%84%E5%9B%BD%E7%BD%91%E6%B0%91%E7%BA%BF%E4%B8%8A%E5%98%B2%E8%AE%BD%E6%97%A5%E6%9C%AC%E4%BA%BA%23) `76.7K 🔥` `-32%`
1. [爱奇艺 底线 (iQIYI Bottom Line)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%20%E5%BA%95%E7%BA%BF%23) `42.8K 🔥` `-27%`
1. [大疆Pocket4支持鸿蒙6.1设备直传 (DJI Pocket4 supports direct transmission from Hongmeng 6.1 devices)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%96%86Pocket4%E6%94%AF%E6%8C%81%E9%B8%BF%E8%92%996.1%E8%AE%BE%E5%A4%87%E7%9B%B4%E4%BC%A0%23) `34.8K 🔥` `-41%`
1. [幼童被父亲女友虐死前说我爱妈妈](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E7%AB%A5%E8%A2%AB%E7%88%B6%E4%BA%B2%E5%A5%B3%E5%8F%8B%E8%99%90%E6%AD%BB%E5%89%8D%E8%AF%B4%E6%88%91%E7%88%B1%E5%A6%88%E5%A6%88%23) `34.5K 🔥` `-36%`
1. [遭家暴离婚百万网红带娃搬进毛坯房](https://s.weibo.com/weibo?q=%23%E9%81%AD%E5%AE%B6%E6%9A%B4%E7%A6%BB%E5%A9%9A%E7%99%BE%E4%B8%87%E7%BD%91%E7%BA%A2%E5%B8%A6%E5%A8%83%E6%90%AC%E8%BF%9B%E6%AF%9B%E5%9D%AF%E6%88%BF%23) `32.4K 🔥` `-24%`
1. [备孕女子花2.3万治HPV最终子宫切除 (Woman trying to get pregnant spends RMB 23,000 on HPV treatment and ends up having hysterectomy)](https://s.weibo.com/weibo?q=%23%E5%A4%87%E5%AD%95%E5%A5%B3%E5%AD%90%E8%8A%B12.3%E4%B8%87%E6%B2%BBHPV%E6%9C%80%E7%BB%88%E5%AD%90%E5%AE%AB%E5%88%87%E9%99%A4%23) `32.3K 🔥` `-22%`
1. [EWC2026英雄联盟预选赛 (EWC2026 League of Legends Qualifiers)](https://s.weibo.com/weibo?q=%23EWC2026%E8%8B%B1%E9%9B%84%E8%81%94%E7%9B%9F%E9%A2%84%E9%80%89%E8%B5%9B%23) `32.0K 🔥` `-78%`
1. [曝王楚然早就融了AI (It was revealed that Wang Churan had already integrated AI)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E6%A5%9A%E7%84%B6%E6%97%A9%E5%B0%B1%E8%9E%8D%E4%BA%86AI%23) `32.0K 🔥` `-89%`

Updated at 2026-04-21 04:24:34

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
