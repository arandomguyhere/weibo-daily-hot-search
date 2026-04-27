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

1. [豪华MPV标杆第二代腾势D9 36万起 (The second-generation Denza D9, the benchmark luxury MPV, starts at 360,000)](https://s.weibo.com/weibo?q=%23%E8%B1%AA%E5%8D%8EMPV%E6%A0%87%E6%9D%86%E7%AC%AC%E4%BA%8C%E4%BB%A3%E8%85%BE%E5%8A%BFD9%2036%E4%B8%87%E8%B5%B7%23) `277.3K 🔥` `NEW`
1. [姚安坠楼教师已脱离生命危险](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E5%AE%89%E5%9D%A0%E6%A5%BC%E6%95%99%E5%B8%88%E5%B7%B2%E8%84%B1%E7%A6%BB%E7%94%9F%E5%91%BD%E5%8D%B1%E9%99%A9%23) `101.7K 🔥` `NEW`
1. [为啥陆毅嘴唇发紫心脏功能显示正常](https://s.weibo.com/weibo?q=%23%E4%B8%BA%E5%95%A5%E9%99%86%E6%AF%85%E5%98%B4%E5%94%87%E5%8F%91%E7%B4%AB%E5%BF%83%E8%84%8F%E5%8A%9F%E8%83%BD%E6%98%BE%E7%A4%BA%E6%AD%A3%E5%B8%B8%23) `68.7K 🔥` `NEW`
1. [虞书欣直播四十分钟总榜第二](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E7%9B%B4%E6%92%AD%E5%9B%9B%E5%8D%81%E5%88%86%E9%92%9F%E6%80%BB%E6%A6%9C%E7%AC%AC%E4%BA%8C%23) `67.7K 🔥` `NEW`
1. [妇联正在核实孕妇遭丈夫辱骂后引产 (The Women's Federation is verifying that a pregnant woman induced labor after being insulted by her husband)](https://s.weibo.com/weibo?q=%23%E5%A6%87%E8%81%94%E6%AD%A3%E5%9C%A8%E6%A0%B8%E5%AE%9E%E5%AD%95%E5%A6%87%E9%81%AD%E4%B8%88%E5%A4%AB%E8%BE%B1%E9%AA%82%E5%90%8E%E5%BC%95%E4%BA%A7%23) `796.3K 🔥` `+132%`
1. [父亲去世12年银行突然来催债 (Twelve years after my father passed away, the bank suddenly came to collect debts)](https://s.weibo.com/weibo?q=%23%E7%88%B6%E4%BA%B2%E5%8E%BB%E4%B8%9612%E5%B9%B4%E9%93%B6%E8%A1%8C%E7%AA%81%E7%84%B6%E6%9D%A5%E5%82%AC%E5%80%BA%23) `529.0K 🔥` `+113%`
1. [国产开源大模型下载量破100亿次](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%BA%A7%E5%BC%80%E6%BA%90%E5%A4%A7%E6%A8%A1%E5%9E%8B%E4%B8%8B%E8%BD%BD%E9%87%8F%E7%A0%B4100%E4%BA%BF%E6%AC%A1%23) `431.4K 🔥` `+121%`
1. [炸个蛋花居然要6只手](https://s.weibo.com/weibo?q=%23%E7%82%B8%E4%B8%AA%E8%9B%8B%E8%8A%B1%E5%B1%85%E7%84%B6%E8%A6%816%E5%8F%AA%E6%89%8B%23) `204.9K 🔥` `+157%`
1. [浪姐三公小考结果](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%B8%89%E5%85%AC%E5%B0%8F%E8%80%83%E7%BB%93%E6%9E%9C%23) `204.8K 🔥` `+99%`
1. [旅游的三千块钱定律 (The three thousand dollar rule of travel)](https://s.weibo.com/weibo?q=%23%E6%97%85%E6%B8%B8%E7%9A%84%E4%B8%89%E5%8D%83%E5%9D%97%E9%92%B1%E5%AE%9A%E5%BE%8B%23) `198.9K 🔥` `+143%`
1. [佳偶天成 修仙剧](https://s.weibo.com/weibo?q=%23%E4%BD%B3%E5%81%B6%E5%A4%A9%E6%88%90%20%E4%BF%AE%E4%BB%99%E5%89%A7%23) `120.0K 🔥` `+180%`
1. [十日终焉首次外景路透](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%E9%A6%96%E6%AC%A1%E5%A4%96%E6%99%AF%E8%B7%AF%E9%80%8F%23) `117.9K 🔥` `+216%`
1. [被AI骗去毒蛇窝徒步 (I was tricked by AI into hiking in a poisonous snake den)](https://s.weibo.com/weibo?q=%23%E8%A2%ABAI%E9%AA%97%E5%8E%BB%E6%AF%92%E8%9B%87%E7%AA%9D%E5%BE%92%E6%AD%A5%23) `111.2K 🔥` `+89%`
1. [妇联回应孕妇称买水果遭丈夫咒骂](https://s.weibo.com/weibo?q=%23%E5%A6%87%E8%81%94%E5%9B%9E%E5%BA%94%E5%AD%95%E5%A6%87%E7%A7%B0%E4%B9%B0%E6%B0%B4%E6%9E%9C%E9%81%AD%E4%B8%88%E5%A4%AB%E5%92%92%E9%AA%82%23) `108.4K 🔥` `+106%`
1. [桃黑黑腿太粗按到了电源键 (Momoko's black legs are too thick and she pressed the power button)](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E8%85%BF%E5%A4%AA%E7%B2%97%E6%8C%89%E5%88%B0%E4%BA%86%E7%94%B5%E6%BA%90%E9%94%AE%23) `108.3K 🔥` `+112%`
1. [杨幂脸被蒸汽眼罩烫伤了 (Yang Mi's face was burned by steam eye mask)](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E5%B9%82%E8%84%B8%E8%A2%AB%E8%92%B8%E6%B1%BD%E7%9C%BC%E7%BD%A9%E7%83%AB%E4%BC%A4%E4%BA%86%23) `107.0K 🔥` `+294%`
1. [乘客买到高铁08车01C座上车懵了](https://s.weibo.com/weibo?q=%23%E4%B9%98%E5%AE%A2%E4%B9%B0%E5%88%B0%E9%AB%98%E9%93%8108%E8%BD%A601C%E5%BA%A7%E4%B8%8A%E8%BD%A6%E6%87%B5%E4%BA%86%23) `105.8K 🔥` `+109%`
1. [高中生水杯被同学投放异物饮后抽搐 (A high school student convulsed after drinking from a foreign object thrown into his water cup by a classmate)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E4%B8%AD%E7%94%9F%E6%B0%B4%E6%9D%AF%E8%A2%AB%E5%90%8C%E5%AD%A6%E6%8A%95%E6%94%BE%E5%BC%82%E7%89%A9%E9%A5%AE%E5%90%8E%E6%8A%BD%E6%90%90%23) `105.4K 🔥` `+114%`
1. [张凌赫林允吻戏路透 (Zhang Ling He Lin Yun kissing scene Reuters)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%87%8C%E8%B5%AB%E6%9E%97%E5%85%81%E5%90%BB%E6%88%8F%E8%B7%AF%E9%80%8F%23) `103.8K 🔥` `+116%`
1. [高市早苗称要为长期战争做准备 (Takaichi Sanae says to prepare for long-term war)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E5%B8%82%E6%97%A9%E8%8B%97%E7%A7%B0%E8%A6%81%E4%B8%BA%E9%95%BF%E6%9C%9F%E6%88%98%E4%BA%89%E5%81%9A%E5%87%86%E5%A4%87%23) `103.8K 🔥` `+162%`
1. [美依礼芽回应歌手AI海报 (Mei Yiliya responds to singer AI poster)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BE%9D%E7%A4%BC%E8%8A%BD%E5%9B%9E%E5%BA%94%E6%AD%8C%E6%89%8BAI%E6%B5%B7%E6%8A%A5%23) `101.2K 🔥` `+117%`
1. [美伊停火谈判 (US-Iran ceasefire negotiations)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E4%BC%8A%E5%81%9C%E7%81%AB%E8%B0%88%E5%88%A4%23) `97.9K 🔥` `+140%`
1. [以前一万二电脑现在涨到一万八 (Computers that used to cost 12,000 have now increased to 18,000)](https://s.weibo.com/weibo?q=%23%E4%BB%A5%E5%89%8D%E4%B8%80%E4%B8%87%E4%BA%8C%E7%94%B5%E8%84%91%E7%8E%B0%E5%9C%A8%E6%B6%A8%E5%88%B0%E4%B8%80%E4%B8%87%E5%85%AB%23) `80.6K 🔥` `+192%`
1. [身体严重缺觉的7个迹象](https://s.weibo.com/weibo?q=%23%E8%BA%AB%E4%BD%93%E4%B8%A5%E9%87%8D%E7%BC%BA%E8%A7%89%E7%9A%847%E4%B8%AA%E8%BF%B9%E8%B1%A1%23) `78.7K 🔥` `+96%`
1. [日本人不愿相信中国座椅给手机充电 (Japanese don’t want to believe Chinese chairs charge mobile phones)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E4%BA%BA%E4%B8%8D%E6%84%BF%E7%9B%B8%E4%BF%A1%E4%B8%AD%E5%9B%BD%E5%BA%A7%E6%A4%85%E7%BB%99%E6%89%8B%E6%9C%BA%E5%85%85%E7%94%B5%23) `76.8K 🔥` `+90%`
1. [官方通报中学教师坠楼事件](https://s.weibo.com/weibo?q=%23%E5%AE%98%E6%96%B9%E9%80%9A%E6%8A%A5%E4%B8%AD%E5%AD%A6%E6%95%99%E5%B8%88%E5%9D%A0%E6%A5%BC%E4%BA%8B%E4%BB%B6%23) `74.8K 🔥` `+164%`
1. [男子酒后3次布洛芬全身95%溃烂 (After a man drank 3 doses of ibuprofen, 95% of his body was ulcerated)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E9%85%92%E5%90%8E3%E6%AC%A1%E5%B8%83%E6%B4%9B%E8%8A%AC%E5%85%A8%E8%BA%AB95%25%E6%BA%83%E7%83%82%23) `69.9K 🔥` `+69%`
1. [莫德里奇赛季报销](https://s.weibo.com/weibo?q=%23%E8%8E%AB%E5%BE%B7%E9%87%8C%E5%A5%87%E8%B5%9B%E5%AD%A3%E6%8A%A5%E9%94%80%23) `68.2K 🔥` `+83%`
1. [王鹤润妆造](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E9%B9%A4%E6%B6%A6%E5%A6%86%E9%80%A0%23) `68.0K 🔥` `+135%`
1. [女子本想到医院减肥却查出两种癌](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%9C%AC%E6%83%B3%E5%88%B0%E5%8C%BB%E9%99%A2%E5%87%8F%E8%82%A5%E5%8D%B4%E6%9F%A5%E5%87%BA%E4%B8%A4%E7%A7%8D%E7%99%8C%23) `68.0K 🔥` `+83%`
1. [塞尔比摔球杆](https://s.weibo.com/weibo?q=%23%E5%A1%9E%E5%B0%94%E6%AF%94%E6%91%94%E7%90%83%E6%9D%86%23) `67.9K 🔥` `+43%`
1. [存储龙头一季度赚了38亿](https://s.weibo.com/weibo?q=%23%E5%AD%98%E5%82%A8%E9%BE%99%E5%A4%B4%E4%B8%80%E5%AD%A3%E5%BA%A6%E8%B5%9A%E4%BA%8638%E4%BA%BF%23) `67.9K 🔥` `+148%`
1. [疑遭霸凌跳楼教师曾获评教学优质奖 (Teacher who jumped off building after being bullied was awarded Teaching Quality Award)](https://s.weibo.com/weibo?q=%23%E7%96%91%E9%81%AD%E9%9C%B8%E5%87%8C%E8%B7%B3%E6%A5%BC%E6%95%99%E5%B8%88%E6%9B%BE%E8%8E%B7%E8%AF%84%E6%95%99%E5%AD%A6%E4%BC%98%E8%B4%A8%E5%A5%96%23) `67.8K 🔥` `+140%`
1. [女子剖腹产后突发脑梗致双眼失明](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%89%96%E8%85%B9%E4%BA%A7%E5%90%8E%E7%AA%81%E5%8F%91%E8%84%91%E6%A2%97%E8%87%B4%E5%8F%8C%E7%9C%BC%E5%A4%B1%E6%98%8E%23) `67.8K 🔥` `+141%`
1. [骨相美的人适合上镜 (People with beautiful bones are suitable for being photographed)](https://s.weibo.com/weibo?q=%23%E9%AA%A8%E7%9B%B8%E7%BE%8E%E7%9A%84%E4%BA%BA%E9%80%82%E5%90%88%E4%B8%8A%E9%95%9C%23) `67.8K 🔥` `+143%`
1. [酒后吃这些药是玩命](https://s.weibo.com/weibo?q=%23%E9%85%92%E5%90%8E%E5%90%83%E8%BF%99%E4%BA%9B%E8%8D%AF%E6%98%AF%E7%8E%A9%E5%91%BD%23) `67.7K 🔥` `+140%`
1. [婚纱转场一出来我眼睛都睁大了 (As soon as the wedding dress scene came out, my eyes widened.)](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E7%BA%B1%E8%BD%AC%E5%9C%BA%E4%B8%80%E5%87%BA%E6%9D%A5%E6%88%91%E7%9C%BC%E7%9D%9B%E9%83%BD%E7%9D%81%E5%A4%A7%E4%BA%86%23) `67.6K 🔥` `+146%`
1. [吴宜泽vs塞尔比 (Wu Yize vs Selby)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%9C%E6%B3%BDvs%E5%A1%9E%E5%B0%94%E6%AF%94%23) `67.6K 🔥` `+145%`
1. [真正的独居 (real solitude)](https://s.weibo.com/weibo?q=%23%E7%9C%9F%E6%AD%A3%E7%9A%84%E7%8B%AC%E5%B1%85%23) `67.5K 🔥` `+144%`
1. [歌手2026 张碧晨](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B2026%20%E5%BC%A0%E7%A2%A7%E6%99%A8%23) `67.5K 🔥` `+143%`
1. [有金店一口价金饰最低打6折](https://s.weibo.com/weibo?q=%23%E6%9C%89%E9%87%91%E5%BA%97%E4%B8%80%E5%8F%A3%E4%BB%B7%E9%87%91%E9%A5%B0%E6%9C%80%E4%BD%8E%E6%89%936%E6%8A%98%23) `67.4K 🔥` `+140%`
1. [鸿星尔克董事长回应提早下班火出圈](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E6%98%9F%E5%B0%94%E5%85%8B%E8%91%A3%E4%BA%8B%E9%95%BF%E5%9B%9E%E5%BA%94%E6%8F%90%E6%97%A9%E4%B8%8B%E7%8F%AD%E7%81%AB%E5%87%BA%E5%9C%88%23) `67.4K 🔥` `+105%`
1. [姚高员辞去杭州市市长职务 (Yao Gaoyuan resigned as mayor of Hangzhou)](https://s.weibo.com/weibo?q=%23%E5%A7%9A%E9%AB%98%E5%91%98%E8%BE%9E%E5%8E%BB%E6%9D%AD%E5%B7%9E%E5%B8%82%E5%B8%82%E9%95%BF%E8%81%8C%E5%8A%A1%23) `67.3K 🔥` `+34%`
1. [领克900为什么要做这么大的五座](https://s.weibo.com/weibo?q=%23%E9%A2%86%E5%85%8B900%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E5%81%9A%E8%BF%99%E4%B9%88%E5%A4%A7%E7%9A%84%E4%BA%94%E5%BA%A7%23) `67.3K 🔥` `+30%`
1. [辅助驾驶途中司机捡瓶子致1死1伤](https://s.weibo.com/weibo?q=%23%E8%BE%85%E5%8A%A9%E9%A9%BE%E9%A9%B6%E9%80%94%E4%B8%AD%E5%8F%B8%E6%9C%BA%E6%8D%A1%E7%93%B6%E5%AD%90%E8%87%B41%E6%AD%BB1%E4%BC%A4%23) `67.3K 🔥` `+142%`
1. [高铁二等座一排两座却标ABC三座 (The high-speed rail second-class seats are marked with two seats in a row but are labeled ABC with three seats.)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%93%81%E4%BA%8C%E7%AD%89%E5%BA%A7%E4%B8%80%E6%8E%92%E4%B8%A4%E5%BA%A7%E5%8D%B4%E6%A0%87ABC%E4%B8%89%E5%BA%A7%23) `67.2K 🔥` `+147%`
1. [曝LCK放弃ENC](https://s.weibo.com/weibo?q=%23%E6%9B%9DLCK%E6%94%BE%E5%BC%83ENC%23) `67.2K 🔥` `+29%`
1. [多地招艺术生当狱警 (Many places recruit art students as prison guards)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%9C%B0%E6%8B%9B%E8%89%BA%E6%9C%AF%E7%94%9F%E5%BD%93%E7%8B%B1%E8%AD%A6%23) `67.2K 🔥` `+146%`
1. [多家客服回应大头瓶盖疑设计缺陷 (Several customer service staff responded to suspected design defects of large-head bottle caps)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E5%AE%B6%E5%AE%A2%E6%9C%8D%E5%9B%9E%E5%BA%94%E5%A4%A7%E5%A4%B4%E7%93%B6%E7%9B%96%E7%96%91%E8%AE%BE%E8%AE%A1%E7%BC%BA%E9%99%B7%23) `67.1K 🔥` `+145%`
1. [6岁女童确诊癌症不到2年去世 (6-year-old girl dies less than 2 years after diagnosis of cancer)](https://s.weibo.com/weibo?q=%236%E5%B2%81%E5%A5%B3%E7%AB%A5%E7%A1%AE%E8%AF%8A%E7%99%8C%E7%97%87%E4%B8%8D%E5%88%B02%E5%B9%B4%E5%8E%BB%E4%B8%96%23) `67.0K 🔥` `+68%`
1. [王俊凯选出了宇编和世界的主人](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%BF%8A%E5%87%AF%E9%80%89%E5%87%BA%E4%BA%86%E5%AE%87%E7%BC%96%E5%92%8C%E4%B8%96%E7%95%8C%E7%9A%84%E4%B8%BB%E4%BA%BA%23) `67.0K 🔥`

Updated at 2026-04-28 07:10:45

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
