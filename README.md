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

1. [女子坠亡悬崖秋千开业仅1个多月 (Woman fell to death on cliff, swing opened just over a month ago)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9D%A0%E4%BA%A1%E6%82%AC%E5%B4%96%E7%A7%8B%E5%8D%83%E5%BC%80%E4%B8%9A%E4%BB%851%E4%B8%AA%E5%A4%9A%E6%9C%88%23) `1.2M 🔥` `NEW`
1. [阿森纳晋级欧冠决赛](https://s.weibo.com/weibo?q=%23%E9%98%BF%E6%A3%AE%E7%BA%B3%E6%99%8B%E7%BA%A7%E6%AC%A7%E5%86%A0%E5%86%B3%E8%B5%9B%23) `836.8K 🔥` `NEW`
1. [欧冠](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E5%86%A0%23) `629.0K 🔥` `NEW`
1. [鲁比奥称对伊朗史诗怒火行动结束](https://s.weibo.com/weibo?q=%23%E9%B2%81%E6%AF%94%E5%A5%A5%E7%A7%B0%E5%AF%B9%E4%BC%8A%E6%9C%97%E5%8F%B2%E8%AF%97%E6%80%92%E7%81%AB%E8%A1%8C%E5%8A%A8%E7%BB%93%E6%9D%9F%23) `547.1K 🔥` `NEW`
1. [特朗普称疏导霍尔木兹海峡行动暂停](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E7%96%8F%E5%AF%BC%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E8%A1%8C%E5%8A%A8%E6%9A%82%E5%81%9C%23) `484.3K 🔥` `NEW`
1. [吴宜泽回应50万英镑奖金用途](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%9C%E6%B3%BD%E5%9B%9E%E5%BA%9450%E4%B8%87%E8%8B%B1%E9%95%91%E5%A5%96%E9%87%91%E7%94%A8%E9%80%94%23) `478.5K 🔥` `NEW`
1. [留德学生迷奸女友8次获刑11年](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%BE%B7%E5%AD%A6%E7%94%9F%E8%BF%B7%E5%A5%B8%E5%A5%B3%E5%8F%8B8%E6%AC%A1%E8%8E%B7%E5%88%9111%E5%B9%B4%23) `464.9K 🔥` `NEW`
1. [考试前一天做真题回顾还是太权威了](https://s.weibo.com/weibo?q=%23%E8%80%83%E8%AF%95%E5%89%8D%E4%B8%80%E5%A4%A9%E5%81%9A%E7%9C%9F%E9%A2%98%E5%9B%9E%E9%A1%BE%E8%BF%98%E6%98%AF%E5%A4%AA%E6%9D%83%E5%A8%81%E4%BA%86%23) `447.2K 🔥` `NEW`
1. [女子坠亡悬崖秋千摆弧300米](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%9D%A0%E4%BA%A1%E6%82%AC%E5%B4%96%E7%A7%8B%E5%8D%83%E6%91%86%E5%BC%A7300%E7%B1%B3%23) `445.0K 🔥` `NEW`
1. [伊朗发布向美军舰发射导弹视频](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E5%B8%83%E5%90%91%E7%BE%8E%E5%86%9B%E8%88%B0%E5%8F%91%E5%B0%84%E5%AF%BC%E5%BC%B9%E8%A7%86%E9%A2%91%23) `441.7K 🔥` `NEW`
1. [当新娘同时是婚礼策划师 (When a bride is also a wedding planner)](https://s.weibo.com/weibo?q=%23%E5%BD%93%E6%96%B0%E5%A8%98%E5%90%8C%E6%97%B6%E6%98%AF%E5%A9%9A%E7%A4%BC%E7%AD%96%E5%88%92%E5%B8%88%23) `440.0K 🔥` `NEW`
1. [留守妈妈1拖3自带娃小儿子头摔地](https://s.weibo.com/weibo?q=%23%E7%95%99%E5%AE%88%E5%A6%88%E5%A6%881%E6%8B%963%E8%87%AA%E5%B8%A6%E5%A8%83%E5%B0%8F%E5%84%BF%E5%AD%90%E5%A4%B4%E6%91%94%E5%9C%B0%23) `413.3K 🔥` `NEW`
1. [突然觉得小学老师好厉害](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E8%A7%89%E5%BE%97%E5%B0%8F%E5%AD%A6%E8%80%81%E5%B8%88%E5%A5%BD%E5%8E%89%E5%AE%B3%23) `407.9K 🔥` `NEW`
1. [中印数亿球迷或无法观看下月世界杯](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%8D%B0%E6%95%B0%E4%BA%BF%E7%90%83%E8%BF%B7%E6%88%96%E6%97%A0%E6%B3%95%E8%A7%82%E7%9C%8B%E4%B8%8B%E6%9C%88%E4%B8%96%E7%95%8C%E6%9D%AF%23) `404.8K 🔥` `NEW`
1. [河成云晒和赖冠霖聊天记录](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E6%88%90%E4%BA%91%E6%99%92%E5%92%8C%E8%B5%96%E5%86%A0%E9%9C%96%E8%81%8A%E5%A4%A9%E8%AE%B0%E5%BD%95%23) `400.9K 🔥` `NEW`
1. [地铁自动补位行李箱墙太戳人](https://s.weibo.com/weibo?q=%23%E5%9C%B0%E9%93%81%E8%87%AA%E5%8A%A8%E8%A1%A5%E4%BD%8D%E8%A1%8C%E6%9D%8E%E7%AE%B1%E5%A2%99%E5%A4%AA%E6%88%B3%E4%BA%BA%23) `398.6K 🔥` `NEW`
1. [智慧春耕科技范儿十足](https://s.weibo.com/weibo?q=%23%E6%99%BA%E6%85%A7%E6%98%A5%E8%80%95%E7%A7%91%E6%8A%80%E8%8C%83%E5%84%BF%E5%8D%81%E8%B6%B3%23) `671.5K 🔥` `+64%`
1. [谢娜演唱会上座率](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%8A%E5%BA%A7%E7%8E%87%23) `650.7K 🔥` `+64%`
1. [一定要好好度过你的奥德赛时期](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%9A%E8%A6%81%E5%A5%BD%E5%A5%BD%E5%BA%A6%E8%BF%87%E4%BD%A0%E7%9A%84%E5%A5%A5%E5%BE%B7%E8%B5%9B%E6%97%B6%E6%9C%9F%23) `563.5K 🔥` `+47%`
1. [男友婚前查出乙肝女子父母让分手 (Woman's parents let her break up after her boyfriend was diagnosed with hepatitis B before marriage)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%8F%8B%E5%A9%9A%E5%89%8D%E6%9F%A5%E5%87%BA%E4%B9%99%E8%82%9D%E5%A5%B3%E5%AD%90%E7%88%B6%E6%AF%8D%E8%AE%A9%E5%88%86%E6%89%8B%23) `558.8K 🔥` `+144%`
1. [奔跑吧打假](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E6%89%93%E5%81%87%23) `555.4K 🔥` `+347%`
1. [五一微信数据报告来了 (May Day WeChat data report is here)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%BE%AE%E4%BF%A1%E6%95%B0%E6%8D%AE%E6%8A%A5%E5%91%8A%E6%9D%A5%E4%BA%86%23) `548.5K 🔥` `+686%`
1. [卢昱晓下沉口碑 (Lu Yuxiao’s reputation sinks)](https://s.weibo.com/weibo?q=%23%E5%8D%A2%E6%98%B1%E6%99%93%E4%B8%8B%E6%B2%89%E5%8F%A3%E7%A2%91%23) `541.7K 🔥` `+29%`
1. [中国青年身高涨幅引外网热议 (The height increase of Chinese youth has sparked heated discussion on the Internet)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%9D%92%E5%B9%B4%E8%BA%AB%E9%AB%98%E6%B6%A8%E5%B9%85%E5%BC%95%E5%A4%96%E7%BD%91%E7%83%AD%E8%AE%AE%23) `536.2K 🔥` `+223%`
1. [四川华蓥瀑布秋千事故致1死 (Swing accident at Huaying Falls in Sichuan killed 1)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%8D%8E%E8%93%A5%E7%80%91%E5%B8%83%E7%A7%8B%E5%8D%83%E4%BA%8B%E6%95%85%E8%87%B41%E6%AD%BB%23) `532.7K 🔥` `+56%`
1. [国乒男团9比0横扫澳大利亚](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A29%E6%AF%940%E6%A8%AA%E6%89%AB%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%23) `476.7K 🔥` `+220%`
1. [鸿蒙智行回应副驾折叠争议 (Hongmeng Zhixing responds to the passenger folding controversy)](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%99%E6%99%BA%E8%A1%8C%E5%9B%9E%E5%BA%94%E5%89%AF%E9%A9%BE%E6%8A%98%E5%8F%A0%E4%BA%89%E8%AE%AE%23) `475.2K 🔥` `+181%`
1. [OpenAI或加速手机开发 (OpenAI may accelerate mobile phone development)](https://s.weibo.com/weibo?q=%23OpenAI%E6%88%96%E5%8A%A0%E9%80%9F%E6%89%8B%E6%9C%BA%E5%BC%80%E5%8F%91%23) `472.8K 🔥` `+735%`
1. [贺峻霖 但凡有人尊重一下我呢](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%20%E4%BD%86%E5%87%A1%E6%9C%89%E4%BA%BA%E5%B0%8A%E9%87%8D%E4%B8%80%E4%B8%8B%E6%88%91%E5%91%A2%23) `470.3K 🔥` `+316%`
1. [李嘉诚套现约455亿港元 (Li Ka-shing cashed out approximately HK$45.5 billion)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%98%89%E8%AF%9A%E5%A5%97%E7%8E%B0%E7%BA%A6455%E4%BA%BF%E6%B8%AF%E5%85%83%23) `461.6K 🔥` `+249%`
1. [大哥谢娜 二弟赵丽颖 (Eldest brother Xie Na and second brother Zhao Liying)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%93%A5%E8%B0%A2%E5%A8%9C%20%E4%BA%8C%E5%BC%9F%E8%B5%B5%E4%B8%BD%E9%A2%96%23) `458.2K 🔥` `+195%`
1. [山姆回应多名顾客拿袋子装免费酱料](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E5%9B%9E%E5%BA%94%E5%A4%9A%E5%90%8D%E9%A1%BE%E5%AE%A2%E6%8B%BF%E8%A2%8B%E5%AD%90%E8%A3%85%E5%85%8D%E8%B4%B9%E9%85%B1%E6%96%99%23) `457.6K 🔥` `+186%`
1. [浪姐三公压力最大的是刘雨昕](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%B8%89%E5%85%AC%E5%8E%8B%E5%8A%9B%E6%9C%80%E5%A4%A7%E7%9A%84%E6%98%AF%E5%88%98%E9%9B%A8%E6%98%95%23) `453.5K 🔥` `+548%`
1. [强大到可怕的顶级心态](https://s.weibo.com/weibo?q=%23%E5%BC%BA%E5%A4%A7%E5%88%B0%E5%8F%AF%E6%80%95%E7%9A%84%E9%A1%B6%E7%BA%A7%E5%BF%83%E6%80%81%23) `451.7K 🔥` `+301%`
1. [第一次看小猫掉毛看力竭了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%9C%8B%E5%B0%8F%E7%8C%AB%E6%8E%89%E6%AF%9B%E7%9C%8B%E5%8A%9B%E7%AB%AD%E4%BA%86%23) `450.7K 🔥` `+162%`
1. [金饰价再跌破1400元 (Gold jewelry price falls below 1,400 yuan again)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E5%86%8D%E8%B7%8C%E7%A0%B41400%E5%85%83%23) `434.2K 🔥` `+520%`
1. [夫妻分居20年因改网名矛盾彻底爆发 (After 20 years of separation, the couple's conflict broke out due to changing their online names.)](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E5%88%86%E5%B1%8520%E5%B9%B4%E5%9B%A0%E6%94%B9%E7%BD%91%E5%90%8D%E7%9F%9B%E7%9B%BE%E5%BD%BB%E5%BA%95%E7%88%86%E5%8F%91%23) `432.1K 🔥` `+190%`
1. [父母平分6套房产差12平米儿媳翻脸](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E5%B9%B3%E5%88%866%E5%A5%97%E6%88%BF%E4%BA%A7%E5%B7%AE12%E5%B9%B3%E7%B1%B3%E5%84%BF%E5%AA%B3%E7%BF%BB%E8%84%B8%23) `429.9K 🔥` `+281%`
1. [宋亚轩哭了 (Song Yaxuan cried)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%93%AD%E4%BA%86%23) `426.6K 🔥` `+211%`
1. [浏阳烟花厂爆炸致26死61伤](https://s.weibo.com/weibo?q=%23%E6%B5%8F%E9%98%B3%E7%83%9F%E8%8A%B1%E5%8E%82%E7%88%86%E7%82%B8%E8%87%B426%E6%AD%BB61%E4%BC%A4%23) `425.2K 🔥` `+416%`
1. [四川悬崖秋千事故景区系网红打卡地](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E6%82%AC%E5%B4%96%E7%A7%8B%E5%8D%83%E4%BA%8B%E6%95%85%E6%99%AF%E5%8C%BA%E7%B3%BB%E7%BD%91%E7%BA%A2%E6%89%93%E5%8D%A1%E5%9C%B0%23) `421.2K 🔥` `+481%`
1. [景区称至今未接待到零彩礼免票游客 (The scenic spot said it has not received any tourists with zero gifts and free tickets so far.)](https://s.weibo.com/weibo?q=%23%E6%99%AF%E5%8C%BA%E7%A7%B0%E8%87%B3%E4%BB%8A%E6%9C%AA%E6%8E%A5%E5%BE%85%E5%88%B0%E9%9B%B6%E5%BD%A9%E7%A4%BC%E5%85%8D%E7%A5%A8%E6%B8%B8%E5%AE%A2%23) `418.6K 🔥` `+418%`
1. [王楚钦终于笑了 (Wang Chuqin finally smiled)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%BB%88%E4%BA%8E%E7%AC%91%E4%BA%86%23) `416.9K 🔥` `+258%`
1. [第一次直观地意识到自己有多馋 (For the first time, I intuitively realized how hungry I was)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%9B%B4%E8%A7%82%E5%9C%B0%E6%84%8F%E8%AF%86%E5%88%B0%E8%87%AA%E5%B7%B1%E6%9C%89%E5%A4%9A%E9%A6%8B%23) `415.5K 🔥` `+215%`
1. [黄明昊说大雨也挡不住弟弟们闪闪发光 (Huang Minghao said that even heavy rain cannot stop his brothers from shining brightly)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%98%8E%E6%98%8A%E8%AF%B4%E5%A4%A7%E9%9B%A8%E4%B9%9F%E6%8C%A1%E4%B8%8D%E4%BD%8F%E5%BC%9F%E5%BC%9F%E4%BB%AC%E9%97%AA%E9%97%AA%E5%8F%91%E5%85%89%23) `408.8K 🔥` `+272%`
1. [2名中国游客日本登山食物耗尽](https://s.weibo.com/weibo?q=%232%E5%90%8D%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E6%97%A5%E6%9C%AC%E7%99%BB%E5%B1%B1%E9%A3%9F%E7%89%A9%E8%80%97%E5%B0%BD%23) `403.4K 🔥` `+383%`
1. [白鹿隐藏了和范丞丞的手势舞 (Bai Lu hides the gesture dance with Fan Chengcheng)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BF%E9%9A%90%E8%97%8F%E4%BA%86%E5%92%8C%E8%8C%83%E4%B8%9E%E4%B8%9E%E7%9A%84%E6%89%8B%E5%8A%BF%E8%88%9E%23) `485.4K 🔥`
1. [将男厕临时改为女厕景区获全网点赞](https://s.weibo.com/weibo?q=%23%E5%B0%86%E7%94%B7%E5%8E%95%E4%B8%B4%E6%97%B6%E6%94%B9%E4%B8%BA%E5%A5%B3%E5%8E%95%E6%99%AF%E5%8C%BA%E8%8E%B7%E5%85%A8%E7%BD%91%E7%82%B9%E8%B5%9E%23) `481.5K 🔥`
1. [爸爸去哪儿男孩现状 (Where are we going, daddy? Boy's current situation)](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%8E%BB%E5%93%AA%E5%84%BF%E7%94%B7%E5%AD%A9%E7%8E%B0%E7%8A%B6%23) `438.1K 🔥`
1. [妻子的浪漫旅行 变味 (Wife’s romantic trip turns sour)](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E7%9A%84%E6%B5%AA%E6%BC%AB%E6%97%85%E8%A1%8C%20%E5%8F%98%E5%91%B3%23) `467.1K 🔥` `-32%`

Updated at 2026-05-06 08:04:53

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
