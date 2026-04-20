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

1. [MPV科技车皇智界V9评测首发 (MPV Technology Chehuang Zhijie V9 review first launch)](https://s.weibo.com/weibo?q=%23MPV%E7%A7%91%E6%8A%80%E8%BD%A6%E7%9A%87%E6%99%BA%E7%95%8CV9%E8%AF%84%E6%B5%8B%E9%A6%96%E5%8F%91%23) `194.4K 🔥` `NEW`
1. [姆巴佩喊你补水啦](https://s.weibo.com/weibo?q=%23%E5%A7%86%E5%B7%B4%E4%BD%A9%E5%96%8A%E4%BD%A0%E8%A1%A5%E6%B0%B4%E5%95%A6%23) `113.3K 🔥` `NEW`
1. [8岁孩子竟然痛风了](https://s.weibo.com/weibo?q=%238%E5%B2%81%E5%AD%A9%E5%AD%90%E7%AB%9F%E7%84%B6%E7%97%9B%E9%A3%8E%E4%BA%86%23) `69.8K 🔥` `NEW`
1. [日本7.7级地震 (Japan magnitude 7.7 earthquake)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC7.7%E7%BA%A7%E5%9C%B0%E9%9C%87%23) `835.7K 🔥` `+80%`
1. [爱奇艺综艺全面夯爆 (iQIYI Variety Shows Are Comprehensive)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E7%BB%BC%E8%89%BA%E5%85%A8%E9%9D%A2%E5%A4%AF%E7%88%86%23) `506.4K 🔥` `+113%`
1. [硬核数据看中国经济动力澎湃 (Hard-core data shows that China’s economic momentum is surging)](https://s.weibo.com/weibo?q=%23%E7%A1%AC%E6%A0%B8%E6%95%B0%E6%8D%AE%E7%9C%8B%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E5%8A%A8%E5%8A%9B%E6%BE%8E%E6%B9%83%23) `410.2K 🔥` `+121%`
1. [日本未来一周可能发生同等规模地震 (Japan may experience an earthquake of similar magnitude in the coming week)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E6%9C%AA%E6%9D%A5%E4%B8%80%E5%91%A8%E5%8F%AF%E8%83%BD%E5%8F%91%E7%94%9F%E5%90%8C%E7%AD%89%E8%A7%84%E6%A8%A1%E5%9C%B0%E9%9C%87%23) `147.0K 🔥` `+130%`
1. [娃坐了6年电瓶车还不知回家的路](https://s.weibo.com/weibo?q=%23%E5%A8%83%E5%9D%90%E4%BA%866%E5%B9%B4%E7%94%B5%E7%93%B6%E8%BD%A6%E8%BF%98%E4%B8%8D%E7%9F%A5%E5%9B%9E%E5%AE%B6%E7%9A%84%E8%B7%AF%23) `143.8K 🔥` `+125%`
1. [徐洁儿见过李小冉站起来吗](https://s.weibo.com/weibo?q=%23%E5%BE%90%E6%B4%81%E5%84%BF%E8%A7%81%E8%BF%87%E6%9D%8E%E5%B0%8F%E5%86%89%E7%AB%99%E8%B5%B7%E6%9D%A5%E5%90%97%23) `139.0K 🔥` `+92%`
1. [爱奇艺称AI艺人库仅是合作意愿](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E7%A7%B0AI%E8%89%BA%E4%BA%BA%E5%BA%93%E4%BB%85%E6%98%AF%E5%90%88%E4%BD%9C%E6%84%8F%E6%84%BF%23) `125.0K 🔥` `+95%`
1. [特朗普威胁停火到期将开炸](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%A8%81%E8%83%81%E5%81%9C%E7%81%AB%E5%88%B0%E6%9C%9F%E5%B0%86%E5%BC%80%E7%82%B8%23) `116.1K 🔥` `+199%`
1. [大疆Pocket4支持鸿蒙6.1设备直传 (DJI Pocket4 supports direct transmission from Hongmeng 6.1 devices)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%96%86Pocket4%E6%94%AF%E6%8C%81%E9%B8%BF%E8%92%996.1%E8%AE%BE%E5%A4%87%E7%9B%B4%E4%BC%A0%23) `115.9K 🔥` `+82%`
1. [爱奇艺股价从46美元跌到1.4美元 (iQIYI stock price fell from US$46 to US$1.4)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E8%82%A1%E4%BB%B7%E4%BB%8E46%E7%BE%8E%E5%85%83%E8%B7%8C%E5%88%B01.4%E7%BE%8E%E5%85%83%23) `114.9K 🔥` `+80%`
1. [19岁女孩挪用1700万当榜一大姐](https://s.weibo.com/weibo?q=%2319%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%8C%AA%E7%94%A81700%E4%B8%87%E5%BD%93%E6%A6%9C%E4%B8%80%E5%A4%A7%E5%A7%90%23) `114.7K 🔥` `+80%`
1. [虐死男友3岁儿子凶手称忍不住不打](https://s.weibo.com/weibo?q=%23%E8%99%90%E6%AD%BB%E7%94%B7%E5%8F%8B3%E5%B2%81%E5%84%BF%E5%AD%90%E5%87%B6%E6%89%8B%E7%A7%B0%E5%BF%8D%E4%B8%8D%E4%BD%8F%E4%B8%8D%E6%89%93%23) `114.3K 🔥` `+79%`
1. [A股突现重大资产重组新模式](https://s.weibo.com/weibo?q=%23A%E8%82%A1%E7%AA%81%E7%8E%B0%E9%87%8D%E5%A4%A7%E8%B5%84%E4%BA%A7%E9%87%8D%E7%BB%84%E6%96%B0%E6%A8%A1%E5%BC%8F%23) `113.7K 🔥` `+78%`
1. [MCN回应女孩挪用1700万打赏主播 (MCN responds to girl misappropriating 17 million to reward anchors)](https://s.weibo.com/weibo?q=%23MCN%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%A9%E6%8C%AA%E7%94%A81700%E4%B8%87%E6%89%93%E8%B5%8F%E4%B8%BB%E6%92%AD%23) `112.8K 🔥` `+77%`
1. [女孩挪用千万打赏主播不愿退钱 (Girl misappropriated tens of millions of dollars to reward anchor and refused to return the money)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%8C%AA%E7%94%A8%E5%8D%83%E4%B8%87%E6%89%93%E8%B5%8F%E4%B8%BB%E6%92%AD%E4%B8%8D%E6%84%BF%E9%80%80%E9%92%B1%23) `112.7K 🔥` `+79%`
1. [爱奇艺 底线 (iQIYI Bottom Line)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%20%E5%BA%95%E7%BA%BF%23) `111.9K 🔥` `+76%`
1. [各国网民线上嘲讽日本人 (Netizens from various countries ridiculed the Japanese online)](https://s.weibo.com/weibo?q=%23%E5%90%84%E5%9B%BD%E7%BD%91%E6%B0%91%E7%BA%BF%E4%B8%8A%E5%98%B2%E8%AE%BD%E6%97%A5%E6%9C%AC%E4%BA%BA%23) `111.9K 🔥` `+75%`
1. [长期使用空气炸锅的人都怎么样了](https://s.weibo.com/weibo?q=%23%E9%95%BF%E6%9C%9F%E4%BD%BF%E7%94%A8%E7%A9%BA%E6%B0%94%E7%82%B8%E9%94%85%E7%9A%84%E4%BA%BA%E9%83%BD%E6%80%8E%E4%B9%88%E6%A0%B7%E4%BA%86%23) `105.4K 🔥` `+63%`
1. [1岁宝宝被单独留车内1小时几近虚脱 (1-year-old baby nearly collapsed after being left alone in car for an hour)](https://s.weibo.com/weibo?q=%231%E5%B2%81%E5%AE%9D%E5%AE%9D%E8%A2%AB%E5%8D%95%E7%8B%AC%E7%95%99%E8%BD%A6%E5%86%851%E5%B0%8F%E6%97%B6%E5%87%A0%E8%BF%91%E8%99%9A%E8%84%B1%23) `103.8K 🔥` `+63%`
1. [天津市血液中心称已报警](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B4%A5%E5%B8%82%E8%A1%80%E6%B6%B2%E4%B8%AD%E5%BF%83%E7%A7%B0%E5%B7%B2%E6%8A%A5%E8%AD%A6%23) `103.3K 🔥` `+62%`
1. [中方就伊朗向印度船只开火表态](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E6%96%B9%E5%B0%B1%E4%BC%8A%E6%9C%97%E5%90%91%E5%8D%B0%E5%BA%A6%E8%88%B9%E5%8F%AA%E5%BC%80%E7%81%AB%E8%A1%A8%E6%80%81%23) `103.0K 🔥` `+82%`
1. [东莞一男子把唇上肿瘤当痘痘挤了8年 (A man in Dongguan has been squeezing a tumor on his lip as a pimple for 8 years)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E8%8E%9E%E4%B8%80%E7%94%B7%E5%AD%90%E6%8A%8A%E5%94%87%E4%B8%8A%E8%82%BF%E7%98%A4%E5%BD%93%E7%97%98%E7%97%98%E6%8C%A4%E4%BA%868%E5%B9%B4%23) `102.9K 🔥` `+76%`
1. [观众为何对AI表演集体不买账](https://s.weibo.com/weibo?q=%23%E8%A7%82%E4%BC%97%E4%B8%BA%E4%BD%95%E5%AF%B9AI%E8%A1%A8%E6%BC%94%E9%9B%86%E4%BD%93%E4%B8%8D%E4%B9%B0%E8%B4%A6%23) `101.7K 🔥` `+74%`
1. [爱奇艺 (iQiyi)](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%23) `95.8K 🔥` `+119%`
1. [幼童被父亲女友虐死前说我爱妈妈](https://s.weibo.com/weibo?q=%23%E5%B9%BC%E7%AB%A5%E8%A2%AB%E7%88%B6%E4%BA%B2%E5%A5%B3%E5%8F%8B%E8%99%90%E6%AD%BB%E5%89%8D%E8%AF%B4%E6%88%91%E7%88%B1%E5%A6%88%E5%A6%88%23) `91.3K 🔥` `+169%`
1. [宝妈拆快递剪断7个月宝宝食指 (Mother cuts off 7-month-old baby's index finger while unpacking package)](https://s.weibo.com/weibo?q=%23%E5%AE%9D%E5%A6%88%E6%8B%86%E5%BF%AB%E9%80%92%E5%89%AA%E6%96%AD7%E4%B8%AA%E6%9C%88%E5%AE%9D%E5%AE%9D%E9%A3%9F%E6%8C%87%23) `89.3K 🔥` `+40%`
1. [3岁男童被女友虐死生父要求生母撤诉](https://s.weibo.com/weibo?q=%233%E5%B2%81%E7%94%B7%E7%AB%A5%E8%A2%AB%E5%A5%B3%E5%8F%8B%E8%99%90%E6%AD%BB%E7%94%9F%E7%88%B6%E8%A6%81%E6%B1%82%E7%94%9F%E6%AF%8D%E6%92%A4%E8%AF%89%23) `75.4K 🔥` `+130%`
1. [严浩翔是说唱巅峰对决赛事组](https://s.weibo.com/weibo?q=%23%E4%B8%A5%E6%B5%A9%E7%BF%94%E6%98%AF%E8%AF%B4%E5%94%B1%E5%B7%85%E5%B3%B0%E5%AF%B9%E5%86%B3%E8%B5%9B%E4%BA%8B%E7%BB%84%23) `70.1K 🔥` `+81%`
1. [谷爱凌回应主持劳伦斯颁奖典礼](https://s.weibo.com/weibo?q=%23%E8%B0%B7%E7%88%B1%E5%87%8C%E5%9B%9E%E5%BA%94%E4%B8%BB%E6%8C%81%E5%8A%B3%E4%BC%A6%E6%96%AF%E9%A2%81%E5%A5%96%E5%85%B8%E7%A4%BC%23) `69.8K 🔥` `+95%`
1. [老人打赏花330万却交不起15元电费 (The old man spent 3.3 million in rewards but could not afford the 15 yuan electricity bill)](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E6%89%93%E8%B5%8F%E8%8A%B1330%E4%B8%87%E5%8D%B4%E4%BA%A4%E4%B8%8D%E8%B5%B715%E5%85%83%E7%94%B5%E8%B4%B9%23) `69.8K 🔥` `+85%`
1. [备孕女子花2.3万治HPV最终子宫切除 (Woman trying to get pregnant spends RMB 23,000 on HPV treatment and ends up having hysterectomy)](https://s.weibo.com/weibo?q=%23%E5%A4%87%E5%AD%95%E5%A5%B3%E5%AD%90%E8%8A%B12.3%E4%B8%87%E6%B2%BBHPV%E6%9C%80%E7%BB%88%E5%AD%90%E5%AE%AB%E5%88%87%E9%99%A4%23) `69.8K 🔥` `+92%`
1. [家业](https://s.weibo.com/weibo?q=%23%E5%AE%B6%E4%B8%9A%23) `69.8K 🔥` `+110%`
1. [AI版成何体统逐玉 (What kind of style does the AI ​​version become?)](https://s.weibo.com/weibo?q=%23AI%E7%89%88%E6%88%90%E4%BD%95%E4%BD%93%E7%BB%9F%E9%80%90%E7%8E%89%23) `69.8K 🔥` `+60%`
1. [谢娜今天第一天联排乐队 (Xie Na’s first day of lining up the band today)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E4%BB%8A%E5%A4%A9%E7%AC%AC%E4%B8%80%E5%A4%A9%E8%81%94%E6%8E%92%E4%B9%90%E9%98%9F%23) `69.8K 🔥` `+172%`
1. [在招聘页面放AI聚餐照 (Post AI dinner photos on the recruitment page)](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E6%8B%9B%E8%81%98%E9%A1%B5%E9%9D%A2%E6%94%BEAI%E8%81%9A%E9%A4%90%E7%85%A7%23) `69.8K 🔥` `+76%`
1. [宁德时代股东一口气转让238亿元股票 (Ningde Times shareholders transferred 23.8 billion yuan of shares in one fell swoop)](https://s.weibo.com/weibo?q=%23%E5%AE%81%E5%BE%B7%E6%97%B6%E4%BB%A3%E8%82%A1%E4%B8%9C%E4%B8%80%E5%8F%A3%E6%B0%94%E8%BD%AC%E8%AE%A9238%E4%BA%BF%E5%85%83%E8%82%A1%E7%A5%A8%23) `69.8K 🔥` `+113%`
1. [爱奇艺顶级IP赚了118亿](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BA%E9%A1%B6%E7%BA%A7IP%E8%B5%9A%E4%BA%86118%E4%BA%BF%23) `69.8K 🔥` `+24%`
1. [女孩挪用千万打赏至今还沉迷手机](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E6%8C%AA%E7%94%A8%E5%8D%83%E4%B8%87%E6%89%93%E8%B5%8F%E8%87%B3%E4%BB%8A%E8%BF%98%E6%B2%89%E8%BF%B7%E6%89%8B%E6%9C%BA%23) `69.8K 🔥` `+112%`
1. [遭家暴离婚百万网红带娃搬进毛坯房 (Divorced by domestic violence, a millionaire internet celebrity moves into a rough house with her baby)](https://s.weibo.com/weibo?q=%23%E9%81%AD%E5%AE%B6%E6%9A%B4%E7%A6%BB%E5%A9%9A%E7%99%BE%E4%B8%87%E7%BD%91%E7%BA%A2%E5%B8%A6%E5%A8%83%E6%90%AC%E8%BF%9B%E6%AF%9B%E5%9D%AF%E6%88%BF%23) `69.8K 🔥` `+101%`
1. [爱奇艺top10剧集没有莲花楼](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%A5%87%E8%89%BAtop10%E5%89%A7%E9%9B%86%E6%B2%A1%E6%9C%89%E8%8E%B2%E8%8A%B1%E6%A5%BC%23) `69.8K 🔥` `+172%`
1. [洛阳牡丹开成了调色盘 (Luoyang peonies bloom into a color palette)](https://s.weibo.com/weibo?q=%23%E6%B4%9B%E9%98%B3%E7%89%A1%E4%B8%B9%E5%BC%80%E6%88%90%E4%BA%86%E8%B0%83%E8%89%B2%E7%9B%98%23) `69.8K 🔥` `+79%`
1. [阴阳师](https://s.weibo.com/weibo?q=%23%E9%98%B4%E9%98%B3%E5%B8%88%23) `69.8K 🔥` `+113%`
1. [逐玉的成功在于第三集续看率95%](https://s.weibo.com/weibo?q=%23%E9%80%90%E7%8E%89%E7%9A%84%E6%88%90%E5%8A%9F%E5%9C%A8%E4%BA%8E%E7%AC%AC%E4%B8%89%E9%9B%86%E7%BB%AD%E7%9C%8B%E7%8E%8795%25%23) `69.8K 🔥` `+113%`
1. [持股市值不到7万元成第8大股东 (The stock market value is less than 70,000 yuan, becoming the 8th largest shareholder)](https://s.weibo.com/weibo?q=%23%E6%8C%81%E8%82%A1%E5%B8%82%E5%80%BC%E4%B8%8D%E5%88%B07%E4%B8%87%E5%85%83%E6%88%90%E7%AC%AC8%E5%A4%A7%E8%82%A1%E4%B8%9C%23) `69.7K 🔥` `+112%`
1. [恋与深空](https://s.weibo.com/weibo?q=%23%E6%81%8B%E4%B8%8E%E6%B7%B1%E7%A9%BA%23) `69.7K 🔥` `+112%`
1. [郭富城买了让女友痛哭流涕的礼物 (Aaron Kwok bought a gift that made his girlfriend cry)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E5%AF%8C%E5%9F%8E%E4%B9%B0%E4%BA%86%E8%AE%A9%E5%A5%B3%E5%8F%8B%E7%97%9B%E5%93%AD%E6%B5%81%E6%B6%95%E7%9A%84%E7%A4%BC%E7%89%A9%23) `69.7K 🔥` `+172%`
1. [弟弟去世赔50万5个姐姐起争执 (Five sisters dispute over compensation of NT$500,000 after brother dies)](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%E5%8E%BB%E4%B8%96%E8%B5%9450%E4%B8%875%E4%B8%AA%E5%A7%90%E5%A7%90%E8%B5%B7%E4%BA%89%E6%89%A7%23) `69.8K 🔥`
1. [上海男篮vs辽宁男篮](https://s.weibo.com/weibo?q=%23%E4%B8%8A%E6%B5%B7%E7%94%B7%E7%AF%AEvs%E8%BE%BD%E5%AE%81%E7%94%B7%E7%AF%AE%23) `115.6K 🔥` `-21%`

Updated at 2026-04-21 07:00:13

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
