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

1. [中国青年身高涨幅引外网热议 (The height increase of Chinese youth has sparked heated discussion on the Internet)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E9%9D%92%E5%B9%B4%E8%BA%AB%E9%AB%98%E6%B6%A8%E5%B9%85%E5%BC%95%E5%A4%96%E7%BD%91%E7%83%AD%E8%AE%AE%23) `165.9K 🔥` `NEW`
1. [林依晨曾回应6点做早餐送公公上班](https://s.weibo.com/weibo?q=%23%E6%9E%97%E4%BE%9D%E6%99%A8%E6%9B%BE%E5%9B%9E%E5%BA%946%E7%82%B9%E5%81%9A%E6%97%A9%E9%A4%90%E9%80%81%E5%85%AC%E5%85%AC%E4%B8%8A%E7%8F%AD%23) `90.8K 🔥` `NEW`
1. [四川悬崖秋千事故景区系网红打卡地](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E6%82%AC%E5%B4%96%E7%A7%8B%E5%8D%83%E4%BA%8B%E6%95%85%E6%99%AF%E5%8C%BA%E7%B3%BB%E7%BD%91%E7%BA%A2%E6%89%93%E5%8D%A1%E5%9C%B0%23) `72.5K 🔥` `NEW`
1. [妻子的浪漫旅行 变味 (Wife’s romantic trip turns sour)](https://s.weibo.com/weibo?q=%23%E5%A6%BB%E5%AD%90%E7%9A%84%E6%B5%AA%E6%BC%AB%E6%97%85%E8%A1%8C%20%E5%8F%98%E5%91%B3%23) `684.8K 🔥` `+189%`
1. [将男厕临时改为女厕景区获全网点赞](https://s.weibo.com/weibo?q=%23%E5%B0%86%E7%94%B7%E5%8E%95%E4%B8%B4%E6%97%B6%E6%94%B9%E4%B8%BA%E5%A5%B3%E5%8E%95%E6%99%AF%E5%8C%BA%E8%8E%B7%E5%85%A8%E7%BD%91%E7%82%B9%E8%B5%9E%23) `489.0K 🔥` `+340%`
1. [智慧春耕科技范儿十足](https://s.weibo.com/weibo?q=%23%E6%99%BA%E6%85%A7%E6%98%A5%E8%80%95%E7%A7%91%E6%8A%80%E8%8C%83%E5%84%BF%E5%8D%81%E8%B6%B3%23) `409.9K 🔥` `+120%`
1. [谢娜演唱会上座率](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E6%BC%94%E5%94%B1%E4%BC%9A%E4%B8%8A%E5%BA%A7%E7%8E%87%23) `397.6K 🔥` `+166%`
1. [一定要好好度过你的奥德赛时期](https://s.weibo.com/weibo?q=%23%E4%B8%80%E5%AE%9A%E8%A6%81%E5%A5%BD%E5%A5%BD%E5%BA%A6%E8%BF%87%E4%BD%A0%E7%9A%84%E5%A5%A5%E5%BE%B7%E8%B5%9B%E6%97%B6%E6%9C%9F%23) `383.2K 🔥` `+21%`
1. [四川华蓥瀑布秋千事故致1死 (Swing accident at Huaying Falls in Sichuan killed 1)](https://s.weibo.com/weibo?q=%23%E5%9B%9B%E5%B7%9D%E5%8D%8E%E8%93%A5%E7%80%91%E5%B8%83%E7%A7%8B%E5%8D%83%E4%BA%8B%E6%95%85%E8%87%B41%E6%AD%BB%23) `341.6K 🔥` `+261%`
1. [男友婚前查出乙肝女子父母让分手 (Woman's parents let her break up after her boyfriend was diagnosed with hepatitis B before marriage)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%8F%8B%E5%A9%9A%E5%89%8D%E6%9F%A5%E5%87%BA%E4%B9%99%E8%82%9D%E5%A5%B3%E5%AD%90%E7%88%B6%E6%AF%8D%E8%AE%A9%E5%88%86%E6%89%8B%23) `228.8K 🔥` `+62%`
1. [第一次看小猫掉毛看力竭了](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%9C%8B%E5%B0%8F%E7%8C%AB%E6%8E%89%E6%AF%9B%E7%9C%8B%E5%8A%9B%E7%AB%AD%E4%BA%86%23) `172.1K 🔥` `+164%`
1. [鸿蒙智行回应副驾折叠争议 (Hongmeng Zhixing responds to the passenger folding controversy)](https://s.weibo.com/weibo?q=%23%E9%B8%BF%E8%92%99%E6%99%BA%E8%A1%8C%E5%9B%9E%E5%BA%94%E5%89%AF%E9%A9%BE%E6%8A%98%E5%8F%A0%E4%BA%89%E8%AE%AE%23) `168.9K 🔥` `+159%`
1. [山姆回应多名顾客拿袋子装免费酱料](https://s.weibo.com/weibo?q=%23%E5%B1%B1%E5%A7%86%E5%9B%9E%E5%BA%94%E5%A4%9A%E5%90%8D%E9%A1%BE%E5%AE%A2%E6%8B%BF%E8%A2%8B%E5%AD%90%E8%A3%85%E5%85%8D%E8%B4%B9%E9%85%B1%E6%96%99%23) `159.8K 🔥` `+77%`
1. [大哥谢娜 二弟赵丽颖 (Eldest brother Xie Na and second brother Zhao Liying)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E5%93%A5%E8%B0%A2%E5%A8%9C%20%E4%BA%8C%E5%BC%9F%E8%B5%B5%E4%B8%BD%E9%A2%96%23) `155.2K 🔥` `+72%`
1. [国乒男团9比0横扫澳大利亚](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E4%B9%92%E7%94%B7%E5%9B%A29%E6%AF%940%E6%A8%AA%E6%89%AB%E6%BE%B3%E5%A4%A7%E5%88%A9%E4%BA%9A%23) `148.8K 🔥` `+66%`
1. [夫妻分居20年因改网名矛盾彻底爆发 (After 20 years of separation, the couple's conflict broke out due to changing their online names.)](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E5%88%86%E5%B1%8520%E5%B9%B4%E5%9B%A0%E6%94%B9%E7%BD%91%E5%90%8D%E7%9F%9B%E7%9B%BE%E5%BD%BB%E5%BA%95%E7%88%86%E5%8F%91%23) `148.8K 🔥` `+121%`
1. [宋亚轩哭了 (Song Yaxuan cried)](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E4%BA%9A%E8%BD%A9%E5%93%AD%E4%BA%86%23) `137.0K 🔥` `+69%`
1. [李嘉诚套现约455亿港元 (Li Ka-shing cashed out approximately HK$45.5 billion)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%98%89%E8%AF%9A%E5%A5%97%E7%8E%B0%E7%BA%A6455%E4%BA%BF%E6%B8%AF%E5%85%83%23) `132.4K 🔥` `+50%`
1. [第一次直观地意识到自己有多馋 (For the first time, I intuitively realized how hungry I was)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%9B%B4%E8%A7%82%E5%9C%B0%E6%84%8F%E8%AF%86%E5%88%B0%E8%87%AA%E5%B7%B1%E6%9C%89%E5%A4%9A%E9%A6%8B%23) `132.1K 🔥` `+45%`
1. [奔跑吧打假](https://s.weibo.com/weibo?q=%23%E5%A5%94%E8%B7%91%E5%90%A7%E6%89%93%E5%81%87%23) `124.4K 🔥` `+78%`
1. [王楚钦终于笑了](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E7%BB%88%E4%BA%8E%E7%AC%91%E4%BA%86%23) `116.4K 🔥` `+79%`
1. [喀什恋歌上新闻联播了](https://s.weibo.com/weibo?q=%23%E5%96%80%E4%BB%80%E6%81%8B%E6%AD%8C%E4%B8%8A%E6%96%B0%E9%97%BB%E8%81%94%E6%92%AD%E4%BA%86%23) `114.7K 🔥` `+77%`
1. [贺峻霖 但凡有人尊重一下我呢](https://s.weibo.com/weibo?q=%23%E8%B4%BA%E5%B3%BB%E9%9C%96%20%E4%BD%86%E5%87%A1%E6%9C%89%E4%BA%BA%E5%B0%8A%E9%87%8D%E4%B8%80%E4%B8%8B%E6%88%91%E5%91%A2%23) `113.0K 🔥` `+75%`
1. [父母平分6套房产差12平米儿媳翻脸](https://s.weibo.com/weibo?q=%23%E7%88%B6%E6%AF%8D%E5%B9%B3%E5%88%866%E5%A5%97%E6%88%BF%E4%BA%A7%E5%B7%AE12%E5%B9%B3%E7%B1%B3%E5%84%BF%E5%AA%B3%E7%BF%BB%E8%84%B8%23) `112.9K 🔥` `+73%`
1. [强大到可怕的顶级心态](https://s.weibo.com/weibo?q=%23%E5%BC%BA%E5%A4%A7%E5%88%B0%E5%8F%AF%E6%80%95%E7%9A%84%E9%A1%B6%E7%BA%A7%E5%BF%83%E6%80%81%23) `112.6K 🔥` `+73%`
1. [黄明昊说大雨也挡不住弟弟们闪闪发光 (Huang Minghao said that even heavy rain cannot stop his brothers from shining brightly)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E6%98%8E%E6%98%8A%E8%AF%B4%E5%A4%A7%E9%9B%A8%E4%B9%9F%E6%8C%A1%E4%B8%8D%E4%BD%8F%E5%BC%9F%E5%BC%9F%E4%BB%AC%E9%97%AA%E9%97%AA%E5%8F%91%E5%85%89%23) `109.8K 🔥` `+63%`
1. [机场提示禁止携带越王勾践剑登机 (Airport prompts that it is prohibited to carry Yue Wang Goujian Sword on board the plane)](https://s.weibo.com/weibo?q=%23%E6%9C%BA%E5%9C%BA%E6%8F%90%E7%A4%BA%E7%A6%81%E6%AD%A2%E6%90%BA%E5%B8%A6%E8%B6%8A%E7%8E%8B%E5%8B%BE%E8%B7%B5%E5%89%91%E7%99%BB%E6%9C%BA%23) `99.5K 🔥` `+53%`
1. [天津一山姆内顾客拿袋子装免费酱料 (Customers at a Tianjin Sam store get bags filled with free sauces)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E6%B4%A5%E4%B8%80%E5%B1%B1%E5%A7%86%E5%86%85%E9%A1%BE%E5%AE%A2%E6%8B%BF%E8%A2%8B%E5%AD%90%E8%A3%85%E5%85%8D%E8%B4%B9%E9%85%B1%E6%96%99%23) `93.3K 🔥` `+44%`
1. [除非白鹿不想录了](https://s.weibo.com/weibo?q=%23%E9%99%A4%E9%9D%9E%E7%99%BD%E9%B9%BF%E4%B8%8D%E6%83%B3%E5%BD%95%E4%BA%86%23) `87.5K 🔥` `+35%`
1. [2名中国游客日本登山食物耗尽](https://s.weibo.com/weibo?q=%232%E5%90%8D%E4%B8%AD%E5%9B%BD%E6%B8%B8%E5%AE%A2%E6%97%A5%E6%9C%AC%E7%99%BB%E5%B1%B1%E9%A3%9F%E7%89%A9%E8%80%97%E5%B0%BD%23) `83.5K 🔥` `+29%`
1. [浏阳烟花厂爆炸致26死61伤](https://s.weibo.com/weibo?q=%23%E6%B5%8F%E9%98%B3%E7%83%9F%E8%8A%B1%E5%8E%82%E7%88%86%E7%82%B8%E8%87%B426%E6%AD%BB61%E4%BC%A4%23) `82.4K 🔥` `+27%`
1. [夫妻住新疆帐篷民宿帐篷突然被人拉开 (The tent of a couple staying in a tent B&B in Xinjiang was suddenly opened)](https://s.weibo.com/weibo?q=%23%E5%A4%AB%E5%A6%BB%E4%BD%8F%E6%96%B0%E7%96%86%E5%B8%90%E7%AF%B7%E6%B0%91%E5%AE%BF%E5%B8%90%E7%AF%B7%E7%AA%81%E7%84%B6%E8%A2%AB%E4%BA%BA%E6%8B%89%E5%BC%80%23) `81.8K 🔥` `+26%`
1. [景区称至今未接待到零彩礼免票游客 (The scenic spot said it has not received any tourists with zero gifts and free tickets so far.)](https://s.weibo.com/weibo?q=%23%E6%99%AF%E5%8C%BA%E7%A7%B0%E8%87%B3%E4%BB%8A%E6%9C%AA%E6%8E%A5%E5%BE%85%E5%88%B0%E9%9B%B6%E5%BD%A9%E7%A4%BC%E5%85%8D%E7%A5%A8%E6%B8%B8%E5%AE%A2%23) `80.8K 🔥` `+24%`
1. [金饰价再跌破1400元 (Gold jewelry price falls below 1,400 yuan again)](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%A5%B0%E4%BB%B7%E5%86%8D%E8%B7%8C%E7%A0%B41400%E5%85%83%23) `70.0K 🔥`
1. [昆明酒店劫持案细节曝光](https://s.weibo.com/weibo?q=%23%E6%98%86%E6%98%8E%E9%85%92%E5%BA%97%E5%8A%AB%E6%8C%81%E6%A1%88%E7%BB%86%E8%8A%82%E6%9B%9D%E5%85%89%23) `70.0K 🔥`
1. [湖南全省烟花爆竹企业全面停产整顿 (Fireworks and firecrackers enterprises in Hunan province have completely suspended production for rectification)](https://s.weibo.com/weibo?q=%23%E6%B9%96%E5%8D%97%E5%85%A8%E7%9C%81%E7%83%9F%E8%8A%B1%E7%88%86%E7%AB%B9%E4%BC%81%E4%B8%9A%E5%85%A8%E9%9D%A2%E5%81%9C%E4%BA%A7%E6%95%B4%E9%A1%BF%23) `70.0K 🔥`
1. [野草莓一斤能卖上百元](https://s.weibo.com/weibo?q=%23%E9%87%8E%E8%8D%89%E8%8E%93%E4%B8%80%E6%96%A4%E8%83%BD%E5%8D%96%E4%B8%8A%E7%99%BE%E5%85%83%23) `69.9K 🔥`
1. [突然顿悟了文人为何偏爱竹](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E9%A1%BF%E6%82%9F%E4%BA%86%E6%96%87%E4%BA%BA%E4%B8%BA%E4%BD%95%E5%81%8F%E7%88%B1%E7%AB%B9%23) `69.9K 🔥`
1. [第一次见爸爸和女儿不熟的 (It’s the first time I’ve met a father who is not familiar with his daughter.)](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%E7%88%B8%E7%88%B8%E5%92%8C%E5%A5%B3%E5%84%BF%E4%B8%8D%E7%86%9F%E7%9A%84%23) `69.9K 🔥`
1. [人和人的关系必然会出现分野 (There will inevitably be differences in the relationship between people)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E5%92%8C%E4%BA%BA%E7%9A%84%E5%85%B3%E7%B3%BB%E5%BF%85%E7%84%B6%E4%BC%9A%E5%87%BA%E7%8E%B0%E5%88%86%E9%87%8E%23) `69.9K 🔥`
1. [时代少年团发型塌了](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%8F%91%E5%9E%8B%E5%A1%8C%E4%BA%86%23) `69.9K 🔥`
1. [穆祉丞发大合照了](https://s.weibo.com/weibo?q=%23%E7%A9%86%E7%A5%89%E4%B8%9E%E5%8F%91%E5%A4%A7%E5%90%88%E7%85%A7%E4%BA%86%23) `69.9K 🔥`
1. [这密室开着灯我都不敢玩](https://s.weibo.com/weibo?q=%23%E8%BF%99%E5%AF%86%E5%AE%A4%E5%BC%80%E7%9D%80%E7%81%AF%E6%88%91%E9%83%BD%E4%B8%8D%E6%95%A2%E7%8E%A9%23) `69.9K 🔥`
1. [斯诺克新王诞生宁波吴宜泽书写传奇](https://s.weibo.com/weibo?q=%23%E6%96%AF%E8%AF%BA%E5%85%8B%E6%96%B0%E7%8E%8B%E8%AF%9E%E7%94%9F%E5%AE%81%E6%B3%A2%E5%90%B4%E5%AE%9C%E6%B3%BD%E4%B9%A6%E5%86%99%E4%BC%A0%E5%A5%87%23) `69.9K 🔥`
1. [丁程鑫 在哥哥心中你永远都没有长大](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A8%8B%E9%91%AB%20%E5%9C%A8%E5%93%A5%E5%93%A5%E5%BF%83%E4%B8%AD%E4%BD%A0%E6%B0%B8%E8%BF%9C%E9%83%BD%E6%B2%A1%E6%9C%89%E9%95%BF%E5%A4%A7%23) `69.8K 🔥`
1. [马龙许昕刘诗雯现场观战国乒](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%BE%99%E8%AE%B8%E6%98%95%E5%88%98%E8%AF%97%E9%9B%AF%E7%8E%B0%E5%9C%BA%E8%A7%82%E6%88%98%E5%9B%BD%E4%B9%92%23) `69.8K 🔥`
1. [小猫还原自己摔伤过程 (Kitten reconstructs the process of his fall)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8C%AB%E8%BF%98%E5%8E%9F%E8%87%AA%E5%B7%B1%E6%91%94%E4%BC%A4%E8%BF%87%E7%A8%8B%23) `69.8K 🔥`
1. [五一微信数据报告来了 (May Day WeChat data report is here)](https://s.weibo.com/weibo?q=%23%E4%BA%94%E4%B8%80%E5%BE%AE%E4%BF%A1%E6%95%B0%E6%8D%AE%E6%8A%A5%E5%91%8A%E6%9D%A5%E4%BA%86%23) `69.8K 🔥`
1. [浪姐三公压力最大的是刘雨昕](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%E4%B8%89%E5%85%AC%E5%8E%8B%E5%8A%9B%E6%9C%80%E5%A4%A7%E7%9A%84%E6%98%AF%E5%88%98%E9%9B%A8%E6%98%95%23) `70.0K 🔥` `-21%`
1. [吴宜泽已开设吴宜泽台球俱乐部](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%AE%9C%E6%B3%BD%E5%B7%B2%E5%BC%80%E8%AE%BE%E5%90%B4%E5%AE%9C%E6%B3%BD%E5%8F%B0%E7%90%83%E4%BF%B1%E4%B9%90%E9%83%A8%23) `69.8K 🔥` `-21%`

Updated at 2026-05-06 07:11:19

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
