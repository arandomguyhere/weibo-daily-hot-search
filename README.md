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

1. [库克不再担任苹果CEO (Cook no longer serves as Apple CEO)](https://s.weibo.com/weibo?q=%23%E5%BA%93%E5%85%8B%E4%B8%8D%E5%86%8D%E6%8B%85%E4%BB%BB%E8%8B%B9%E6%9E%9CCEO%23) `2.3M 🔥` `NEW`
1. [鹿晗工作室](https://s.weibo.com/weibo?q=%23%E9%B9%BF%E6%99%97%E5%B7%A5%E4%BD%9C%E5%AE%A4%23) `218.1K 🔥` `NEW`
1. [李小冉说我50了根本记不住](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E8%AF%B4%E6%88%9150%E4%BA%86%E6%A0%B9%E6%9C%AC%E8%AE%B0%E4%B8%8D%E4%BD%8F%23) `217.9K 🔥` `NEW`
1. [五一航班大面积取消](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E8%88%AA%E7%8F%AD%E5%A4%A7%E9%9D%A2%E7%A7%AF%E5%8F%96%E6%B6%88%23) `217.9K 🔥` `NEW`
1. [2026机器人半马](https://s.weibo.com/weibo?q=%232026%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%8D%8A%E9%A9%AC%23) `217.2K 🔥` `NEW`
1. [原来这些都是无意识的控糖行为](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E4%BA%9B%E9%83%BD%E6%98%AF%E6%97%A0%E6%84%8F%E8%AF%86%E7%9A%84%E6%8E%A7%E7%B3%96%E8%A1%8C%E4%B8%BA%23) `216.9K 🔥` `NEW`
1. [让近视眼更舒服的六个习惯](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E8%BF%91%E8%A7%86%E7%9C%BC%E6%9B%B4%E8%88%92%E6%9C%8D%E7%9A%84%E5%85%AD%E4%B8%AA%E4%B9%A0%E6%83%AF%23) `216.8K 🔥` `NEW`
1. [挪用千万打赏女孩称坐牢也无所谓](https://s.weibo.com/weibo?q=%23%E6%8C%AA%E7%94%A8%E5%8D%83%E4%B8%87%E6%89%93%E8%B5%8F%E5%A5%B3%E5%AD%A9%E7%A7%B0%E5%9D%90%E7%89%A2%E4%B9%9F%E6%97%A0%E6%89%80%E8%B0%93%23) `145.7K 🔥` `NEW`
1. [男童身上被生父女友用牙签扎烂](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%AB%A5%E8%BA%AB%E4%B8%8A%E8%A2%AB%E7%94%9F%E7%88%B6%E5%A5%B3%E5%8F%8B%E7%94%A8%E7%89%99%E7%AD%BE%E6%89%8E%E7%83%82%23) `143.6K 🔥` `NEW`
1. [热巴领衔主演虽然不能同时拥有一切](https://s.weibo.com/weibo?q=%23%E7%83%AD%E5%B7%B4%E9%A2%86%E8%A1%94%E4%B8%BB%E6%BC%94%E8%99%BD%E7%84%B6%E4%B8%8D%E8%83%BD%E5%90%8C%E6%97%B6%E6%8B%A5%E6%9C%89%E4%B8%80%E5%88%87%23) `142.6K 🔥` `NEW`
1. [伊朗专挑周末打脸美国 (Iran chooses weekends to slap the United States in the face)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E4%B8%93%E6%8C%91%E5%91%A8%E6%9C%AB%E6%89%93%E8%84%B8%E7%BE%8E%E5%9B%BD%23) `134.0K 🔥` `NEW`
1. [邓为魏大勋邓凯五四晚会录制路透](https://s.weibo.com/weibo?q=%23%E9%82%93%E4%B8%BA%E9%AD%8F%E5%A4%A7%E5%8B%8B%E9%82%93%E5%87%AF%E4%BA%94%E5%9B%9B%E6%99%9A%E4%BC%9A%E5%BD%95%E5%88%B6%E8%B7%AF%E9%80%8F%23) `112.4K 🔥` `NEW`
1. [deepseek崩了](https://s.weibo.com/weibo?q=%23deepseek%E5%B4%A9%E4%BA%86%23) `98.5K 🔥` `NEW`
1. [日本7.7级地震 (Japan magnitude 7.7 earthquake)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC7.7%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `1.0M 🔥` `+24%`
1. [硬核数据看中国经济动力澎湃 (Hard-core data shows that China’s economic momentum is surging)](https://s.weibo.com/weibo?q=%23%E7%A1%AC%E6%A0%B8%E6%95%B0%E6%8D%AE%E7%9C%8B%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E5%8A%A8%E5%8A%9B%E6%BE%8E%E6%B9%83%23) `731.5K 🔥` `+78%`
1. [19岁女孩挪用1700万当榜一大姐](https://s.weibo.com/weibo?q=%2319%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%8C%AA%E7%94%A81700%E4%B8%87%E5%BD%93%E6%A6%9C%E4%B8%80%E5%A4%A7%E5%A7%90%23) `597.3K 🔥` `+421%`
1. [8岁孩子竟然痛风了](https://s.weibo.com/weibo?q=%238%E5%B2%81%E5%AD%A9%E5%AD%90%E7%AB%9F%E7%84%B6%E7%97%9B%E9%A3%8E%E4%BA%86%23) `456.9K 🔥` `+555%`
1. [安全背后有乾崑 (There is something behind security)](https://s.weibo.com/weibo?q=%23%E5%AE%89%E5%85%A8%E8%83%8C%E5%90%8E%E6%9C%89%E4%B9%BE%E5%B4%91%23) `317.6K 🔥` `+370%`
1. [中方就伊朗向印度船只开火表态](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%B0%B1%E4%BC%8A%E6%9C%97%E5%90%91%E5%8D%B0%E5%BA%A6%E8%88%B9%E5%8F%AA%E5%BC%80%E7%81%AB%E8%A1%A8%E6%80%81%23) `239.3K 🔥` `+132%`
1. [徐洁儿见过李小冉站起来吗](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B4%81%E5%84%BF%E8%A7%81%E8%BF%87%E6%9D%8E%E5%B0%8F%E5%86%89%E7%AB%99%E8%B5%B7%E6%9D%A5%E5%90%97%23) `221.2K 🔥` `+59%`
1. [娃坐了6年电瓶车还不知回家的路](https://s.weibo.com/weibo?q=%23%E5%A8%83%E5%9D%90%E4%BA%866%E5%B9%B4%E7%94%B5%E7%93%B6%E8%BD%A6%E8%BF%98%E4%B8%8D%E7%9F%A5%E5%9B%9E%E5%AE%B6%E7%9A%84%E8%B7%AF%23) `218.4K 🔥` `+52%`
1. [谷爱凌回应主持劳伦斯颁奖典礼](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%9B%9E%E5%BA%94%E4%B8%BB%E6%8C%81%E5%8A%B3%E4%BC%A6%E6%96%AF%E9%A2%81%E5%A5%96%E5%85%B8%E7%A4%BC%23) `218.3K 🔥` `+213%`
1. [爱奇艺股价从46美元跌到1.4美元 (iQIYI stock price fell from US$46 to US$1.4)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E8%82%A1%E4%BB%B7%E4%BB%8E46%E7%BE%8E%E5%85%83%E8%B7%8C%E5%88%B01.4%E7%BE%8E%E5%85%83%23) `218.3K 🔥` `+90%`
1. [姆巴佩喊你补水啦](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%96%8A%E4%BD%A0%E8%A1%A5%E6%B0%B4%E5%95%A6%23) `217.7K 🔥` `+92%`
1. [曝王楚然早就融了AI (It was revealed that Wang Churan had already integrated AI)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E7%8E%8B%E6%A5%9A%E7%84%B6%E6%97%A9%E5%B0%B1%E8%9E%8D%E4%BA%86AI%23) `217.7K 🔥` `+581%`
1. [郭富城买了让女友痛哭流涕的礼物 (Aaron Kwok bought a gift that made his girlfriend cry)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AF%8C%E5%9F%8E%E4%B9%B0%E4%BA%86%E8%AE%A9%E5%A5%B3%E5%8F%8B%E7%97%9B%E5%93%AD%E6%B5%81%E6%B6%95%E7%9A%84%E7%A4%BC%E7%89%A9%23) `217.5K 🔥` `+212%`
1. [大疆Pocket4支持鸿蒙6.1设备直传 (DJI Pocket4 supports direct transmission from Hongmeng 6.1 devices)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%96%86Pocket4%E6%94%AF%E6%8C%81%E9%B8%BF%E8%92%996.1%E8%AE%BE%E5%A4%87%E7%9B%B4%E4%BC%A0%23) `217.4K 🔥` `+87%`
1. [爱奇艺 底线 (iQIYI Bottom Line)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%20%E5%BA%95%E7%BA%BF%23) `217.2K 🔥` `+94%`
1. [虐死男友3岁儿子凶手称忍不住不打 (The murderer who tortured her boyfriend's 3-year-old son to death said he couldn't help but stopped beating him)](https://s.weibo.com/weibo?q=%23%E8%99%90%E6%AD%BB%E7%94%B7%E5%8F%8B3%E5%B2%81%E5%84%BF%E5%AD%90%E5%87%B6%E6%89%8B%E7%A7%B0%E5%BF%8D%E4%B8%8D%E4%BD%8F%E4%B8%8D%E6%89%93%23) `217.0K 🔥` `+90%`
1. [1岁宝宝被单独留车内1小时几近虚脱 (1-year-old baby nearly collapsed after being left alone in car for an hour)](https://s.weibo.com/weibo?q=%231%E5%B2%81%E5%AE%9D%E5%AE%9D%E8%A2%AB%E5%8D%95%E7%8B%AC%E7%95%99%E8%BD%A6%E5%86%851%E5%B0%8F%E6%97%B6%E5%87%A0%E8%BF%91%E8%99%9A%E8%84%B1%23) `216.5K 🔥` `+109%`
1. [各国网民线上嘲讽日本人 (Netizens from various countries ridiculed the Japanese online)](https://s.weibo.com/weibo?q=%23%E5%90%84%E5%9B%BD%E7%BD%91%E6%B0%91%E7%BA%BF%E4%B8%8A%E5%98%B2%E8%AE%BD%E6%97%A5%E6%9C%AC%E4%BA%BA%23) `216.4K 🔥` `+93%`
1. [特朗普威胁停火到期将开炸](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%A8%81%E8%83%81%E5%81%9C%E7%81%AB%E5%88%B0%E6%9C%9F%E5%B0%86%E5%BC%80%E7%82%B8%23) `216.4K 🔥` `+86%`
1. [追王一博把71岁奶奶变成17岁了](https://s.weibo.com/weibo?q=%23%E8%BF%BD%E7%8E%8B%E4%B8%80%E5%8D%9A%E6%8A%8A71%E5%B2%81%E5%A5%B6%E5%A5%B6%E5%8F%98%E6%88%9017%E5%B2%81%E4%BA%86%23) `216.3K 🔥` `+103%`
1. [A股突现重大资产重组新模式](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E7%AA%81%E7%8E%B0%E9%87%8D%E5%A4%A7%E8%B5%84%E4%BA%A7%E9%87%8D%E7%BB%84%E6%96%B0%E6%A8%A1%E5%BC%8F%23) `215.8K 🔥` `+90%`
1. [爱奇艺称AI艺人库仅是合作意愿](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E7%A7%B0AI%E8%89%BA%E4%BA%BA%E5%BA%93%E4%BB%85%E6%98%AF%E5%90%88%E4%BD%9C%E6%84%8F%E6%84%BF%23) `209.6K 🔥` `+68%`
1. [MCN回应女孩挪用1700万打赏主播 (MCN responds to girl misappropriating 17 million to reward anchors)](https://s.weibo.com/weibo?q=%23MCN%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%A9%E6%8C%AA%E7%94%A81700%E4%B8%87%E6%89%93%E8%B5%8F%E4%B8%BB%E6%92%AD%23) `207.9K 🔥` `+84%`
1. [女孩挪用千万打赏主播不愿退钱 (Girl misappropriated tens of millions of dollars to reward anchor and refused to return the money)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%8C%AA%E7%94%A8%E5%8D%83%E4%B8%87%E6%89%93%E8%B5%8F%E4%B8%BB%E6%92%AD%E4%B8%8D%E6%84%BF%E9%80%80%E9%92%B1%23) `184.0K 🔥` `+63%`
1. [天津市血液中心称已报警](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B4%A5%E5%B8%82%E8%A1%80%E6%B6%B2%E4%B8%AD%E5%BF%83%E7%A7%B0%E5%B7%B2%E6%8A%A5%E8%AD%A6%23) `166.7K 🔥` `+61%`
1. [爱奇艺 (iQiyi)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%23) `146.5K 🔥` `+53%`
1. [宝妈拆快递剪断7个月宝宝食指 (Mother cuts off 7-month-old baby's index finger while unpacking package)](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E5%A6%88%E6%8B%86%E5%BF%AB%E9%80%92%E5%89%AA%E6%96%AD7%E4%B8%AA%E6%9C%88%E5%AE%9D%E5%AE%9D%E9%A3%9F%E6%8C%87%23) `143.7K 🔥` `+61%`
1. [爱奇艺顶级IP赚了118亿](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E9%A1%B6%E7%BA%A7IP%E8%B5%9A%E4%BA%86118%E4%BA%BF%23) `138.9K 🔥` `+99%`
1. [观众为何对AI表演集体不买账](https://s.weibo.com/weibo?q=%23%E8%A7%82%E4%BC%97%E4%B8%BA%E4%BD%95%E5%AF%B9AI%E8%A1%A8%E6%BC%94%E9%9B%86%E4%BD%93%E4%B8%8D%E4%B9%B0%E8%B4%A6%23) `133.1K 🔥` `+31%`
1. [东莞一男子把唇上肿瘤当痘痘挤了8年 (A man in Dongguan has been squeezing a tumor on his lip as a pimple for 8 years)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E8%8E%9E%E4%B8%80%E7%94%B7%E5%AD%90%E6%8A%8A%E5%94%87%E4%B8%8A%E8%82%BF%E7%98%A4%E5%BD%93%E7%97%98%E7%97%98%E6%8C%A4%E4%BA%868%E5%B9%B4%23) `130.6K 🔥` `+27%`
1. [幼童被父亲女友虐死前说我爱妈妈](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E7%AB%A5%E8%A2%AB%E7%88%B6%E4%BA%B2%E5%A5%B3%E5%8F%8B%E8%99%90%E6%AD%BB%E5%89%8D%E8%AF%B4%E6%88%91%E7%88%B1%E5%A6%88%E5%A6%88%23) `126.6K 🔥` `+39%`
1. [严浩翔是说唱巅峰对决赛事组](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%98%AF%E8%AF%B4%E5%94%B1%E5%B7%85%E5%B3%B0%E5%AF%B9%E5%86%B3%E8%B5%9B%E4%BA%8B%E7%BB%84%23) `111.2K 🔥` `+59%`
1. [宁德时代股东一口气转让238亿元股票 (Ningde Times shareholders transferred 23.8 billion yuan of shares in one fell swoop)](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E8%82%A1%E4%B8%9C%E4%B8%80%E5%8F%A3%E6%B0%94%E8%BD%AC%E8%AE%A9238%E4%BA%BF%E5%85%83%E8%82%A1%E7%A5%A8%23) `103.1K 🔥` `+48%`
1. [爱奇艺综艺全面夯爆 (iQIYI Variety Shows Are Comprehensive)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E7%BB%BC%E8%89%BA%E5%85%A8%E9%9D%A2%E5%A4%AF%E7%88%86%23) `409.6K 🔥`
1. [田曦薇 想跑路可以直说 (Tian Xiwei, if you want to run away, just say so.)](https://s.weibo.com/weibo?q=%23%E7%94%B0%E6%9B%A6%E8%96%87%20%E6%83%B3%E8%B7%91%E8%B7%AF%E5%8F%AF%E4%BB%A5%E7%9B%B4%E8%AF%B4%23) `216.7K 🔥` `-23%`
1. [叶祖新的脸怎么了 (What happened to Ye Zuxin’s face?)](https://s.weibo.com/weibo?q=%23%E5%8F%B6%E7%A5%96%E6%96%B0%E7%9A%84%E8%84%B8%E6%80%8E%E4%B9%88%E4%BA%86%23) `161.9K 🔥` `-44%`
1. [招财俊宝 SK狐狸](https://s.weibo.com/weibo?q=%23%E6%8B%9B%E8%B4%A2%E4%BF%8A%E5%AE%9D%20SK%E7%8B%90%E7%8B%B8%23) `102.5K 🔥` `-63%`
1. [日本未来一周可能发生同等规模地震 (Japan may experience an earthquake of similar magnitude in the coming week)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%9C%AA%E6%9D%A5%E4%B8%80%E5%91%A8%E5%8F%AF%E8%83%BD%E5%8F%91%E7%94%9F%E5%90%8C%E7%AD%89%E8%A7%84%E6%A8%A1%E5%9C%B0%E9%9C%87%23) `101.2K 🔥` `-31%`

Updated at 2026-04-21 07:54:44

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
