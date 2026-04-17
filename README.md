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

1. [看苏超上京东领霸王餐 (Watch Su Chao go to JD.com to receive Overlord meal)](https://s.weibo.com/weibo?q=%23%E7%9C%8B%E8%8B%8F%E8%B6%85%E4%B8%8A%E4%BA%AC%E4%B8%9C%E9%A2%86%E9%9C%B8%E7%8E%8B%E9%A4%90%23) `273.9K 🔥` `NEW`
1. [霍尔木兹海峡开放 (Strait of Hormuz opens)](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E5%BC%80%E6%94%BE%23) `561.5K 🔥` `+103%`
1. [芭乐的籽居然可以一整块掰下来 (The seeds of guava can be broken off in one piece)](https://s.weibo.com/weibo?q=%23%E8%8A%AD%E4%B9%90%E7%9A%84%E7%B1%BD%E5%B1%85%E7%84%B6%E5%8F%AF%E4%BB%A5%E4%B8%80%E6%95%B4%E5%9D%97%E6%8E%B0%E4%B8%8B%E6%9D%A5%23) `408.3K 🔥` `+506%`
1. [中国经济在风浪中稳住了发展底盘](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E5%9C%A8%E9%A3%8E%E6%B5%AA%E4%B8%AD%E7%A8%B3%E4%BD%8F%E4%BA%86%E5%8F%91%E5%B1%95%E5%BA%95%E7%9B%98%23) `333.0K 🔥` `+103%`
1. [氧化菊 泼水节 (Chrysanthemum water splashing festival)](https://s.weibo.com/weibo?q=%23%E6%B0%A7%E5%8C%96%E8%8F%8A%20%E6%B3%BC%E6%B0%B4%E8%8A%82%23) `263.4K 🔥` `+30%`
1. [解放军护卫舰与外舰缠斗20小时](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E6%8A%A4%E5%8D%AB%E8%88%B0%E4%B8%8E%E5%A4%96%E8%88%B0%E7%BC%A0%E6%96%9720%E5%B0%8F%E6%97%B6%23) `240.3K 🔥` `+341%`
1. [雷军达成京沪高速只充一次电](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E8%BE%BE%E6%88%90%E4%BA%AC%E6%B2%AA%E9%AB%98%E9%80%9F%E5%8F%AA%E5%85%85%E4%B8%80%E6%AC%A1%E7%94%B5%23) `193.4K 🔥` `+42%`
1. [麦当劳肯德基 宿敌cp](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E5%BD%93%E5%8A%B3%E8%82%AF%E5%BE%B7%E5%9F%BA%20%E5%AE%BF%E6%95%8Ccp%23) `146.9K 🔥` `+83%`
1. [拼多多美团京东淘天抖音被罚35亿 (Pinduoduo, Meituan, JD.com, Taotian and Douyin were fined 3.5 billion)](https://s.weibo.com/weibo?q=%23%E6%8B%BC%E5%A4%9A%E5%A4%9A%E7%BE%8E%E5%9B%A2%E4%BA%AC%E4%B8%9C%E6%B7%98%E5%A4%A9%E6%8A%96%E9%9F%B3%E8%A2%AB%E7%BD%9A35%E4%BA%BF%23) `143.1K 🔥` `+57%`
1. [换电池小卡扣要13万新能源车主崩溃 (130,000 new energy car owners will collapse when replacing a small battery buckle)](https://s.weibo.com/weibo?q=%23%E6%8D%A2%E7%94%B5%E6%B1%A0%E5%B0%8F%E5%8D%A1%E6%89%A3%E8%A6%8113%E4%B8%87%E6%96%B0%E8%83%BD%E6%BA%90%E8%BD%A6%E4%B8%BB%E5%B4%A9%E6%BA%83%23) `135.7K 🔥` `+116%`
1. [伊朗开放霍尔木兹特朗普发帖说谢谢 (Iran opens Hormuz, Trump posts to say thank you)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%BC%80%E6%94%BE%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E7%89%B9%E6%9C%97%E6%99%AE%E5%8F%91%E5%B8%96%E8%AF%B4%E8%B0%A2%E8%B0%A2%23) `109.2K 🔥` `+106%`
1. [日本叫嚣击沉中国航母](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%8F%AB%E5%9A%A3%E5%87%BB%E6%B2%89%E4%B8%AD%E5%9B%BD%E8%88%AA%E6%AF%8D%23) `108.7K 🔥` `+97%`
1. [女子跳楼被男友拽5分钟后坠亡](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%B7%B3%E6%A5%BC%E8%A2%AB%E7%94%B7%E5%8F%8B%E6%8B%BD5%E5%88%86%E9%92%9F%E5%90%8E%E5%9D%A0%E4%BA%A1%23) `108.6K 🔥` `+97%`
1. [蛋糕品类为何成幽灵外卖重灾区 (Why the cake category has become the hardest hit area for ghost takeaways)](https://s.weibo.com/weibo?q=%23%E8%9B%8B%E7%B3%95%E5%93%81%E7%B1%BB%E4%B8%BA%E4%BD%95%E6%88%90%E5%B9%BD%E7%81%B5%E5%A4%96%E5%8D%96%E9%87%8D%E7%81%BE%E5%8C%BA%23) `108.4K 🔥` `+97%`
1. [小米新SU7续航](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%96%B0SU7%E7%BB%AD%E8%88%AA%23) `108.2K 🔥` `+80%`
1. [东部战区回应日舰过航台湾海峡](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%83%A8%E6%88%98%E5%8C%BA%E5%9B%9E%E5%BA%94%E6%97%A5%E8%88%B0%E8%BF%87%E8%88%AA%E5%8F%B0%E6%B9%BE%E6%B5%B7%E5%B3%A1%23) `107.6K 🔥` `+95%`
1. [黄金 (gold)](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%23) `106.7K 🔥` `+94%`
1. [医生爆料用献血证换血已成常态 (Doctors revealed that using blood donation certificates for blood transfusion has become a common practice)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E7%88%86%E6%96%99%E7%94%A8%E7%8C%AE%E8%A1%80%E8%AF%81%E6%8D%A2%E8%A1%80%E5%B7%B2%E6%88%90%E5%B8%B8%E6%80%81%23) `105.2K 🔥` `+91%`
1. [张雪机车夺得超级杆位赛第二名 (Zhang Xue motorcycle won second place in super pole race)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%A4%BA%E5%BE%97%E8%B6%85%E7%BA%A7%E6%9D%86%E4%BD%8D%E8%B5%9B%E7%AC%AC%E4%BA%8C%E5%90%8D%23) `104.0K 🔥` `+89%`
1. [国家发改委释放五大信号](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E5%8F%91%E6%94%B9%E5%A7%94%E9%87%8A%E6%94%BE%E4%BA%94%E5%A4%A7%E4%BF%A1%E5%8F%B7%23) `103.9K 🔥` `+94%`
1. [李小冉一公第一名 (Li Xiaoran first place)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E4%B8%80%E5%85%AC%E7%AC%AC%E4%B8%80%E5%90%8D%23) `98.4K 🔥` `+88%`
1. [21世纪大君夫人 (21st Century Maharaja’s Wife)](https://s.weibo.com/weibo?q=%2321%E4%B8%96%E7%BA%AA%E5%A4%A7%E5%90%9B%E5%A4%AB%E4%BA%BA%23) `91.1K 🔥` `+65%`
1. [王濛练了那么多年防别人扒拉 (Wang Meng has practiced for so many years to prevent others from bullying him.)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E7%BB%83%E4%BA%86%E9%82%A3%E4%B9%88%E5%A4%9A%E5%B9%B4%E9%98%B2%E5%88%AB%E4%BA%BA%E6%89%92%E6%8B%89%23) `88.5K 🔥` `+106%`
1. [20岁孙女偷偷结婚7旬爷爷落泪 (20-year-old granddaughter gets married secretly, 70-year-old grandfather sheds tears)](https://s.weibo.com/weibo?q=%2320%E5%B2%81%E5%AD%99%E5%A5%B3%E5%81%B7%E5%81%B7%E7%BB%93%E5%A9%9A7%E6%97%AC%E7%88%B7%E7%88%B7%E8%90%BD%E6%B3%AA%23) `80.5K 🔥` `+46%`
1. [医院回应女子同房后失血性休克](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%90%E5%90%8C%E6%88%BF%E5%90%8E%E5%A4%B1%E8%A1%80%E6%80%A7%E4%BC%91%E5%85%8B%23) `78.2K 🔥` `+82%`
1. [雷军到达上海后还有余电 (Lei Jun still had power left after arriving in Shanghai)](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E5%88%B0%E8%BE%BE%E4%B8%8A%E6%B5%B7%E5%90%8E%E8%BF%98%E6%9C%89%E4%BD%99%E7%94%B5%23) `67.2K 🔥` `+54%`
1. [学校组织10元车费去春游男孩下车秒哭 (The school organized a 10-yuan bus fare for a spring outing. The boy cried immediately after getting off the bus.)](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E6%A0%A1%E7%BB%84%E7%BB%8710%E5%85%83%E8%BD%A6%E8%B4%B9%E5%8E%BB%E6%98%A5%E6%B8%B8%E7%94%B7%E5%AD%A9%E4%B8%8B%E8%BD%A6%E7%A7%92%E5%93%AD%23) `67.0K 🔥` `+57%`
1. [豆包型人格](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E5%9E%8B%E4%BA%BA%E6%A0%BC%23) `66.5K 🔥` `+51%`
1. [人生是场巨大的事与愿违 (Life is a huge backfire)](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E7%94%9F%E6%98%AF%E5%9C%BA%E5%B7%A8%E5%A4%A7%E7%9A%84%E4%BA%8B%E4%B8%8E%E6%84%BF%E8%BF%9D%23) `65.9K 🔥` `+50%`
1. [大码女装店让S码模特穿XL样衣](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E7%A0%81%E5%A5%B3%E8%A3%85%E5%BA%97%E8%AE%A9S%E7%A0%81%E6%A8%A1%E7%89%B9%E7%A9%BFXL%E6%A0%B7%E8%A1%A3%23) `64.8K 🔥` `+25%`
1. [杭州滨江通报共用针头采血事件 (Hangzhou Binjiang reports blood collection incident involving shared needles)](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E6%BB%A8%E6%B1%9F%E9%80%9A%E6%8A%A5%E5%85%B1%E7%94%A8%E9%92%88%E5%A4%B4%E9%87%87%E8%A1%80%E4%BA%8B%E4%BB%B6%23) `61.7K 🔥` `+75%`
1. [新西兰军机多次抵近中国周边空域](https://s.weibo.com/weibo?q=%23%E6%96%B0%E8%A5%BF%E5%85%B0%E5%86%9B%E6%9C%BA%E5%A4%9A%E6%AC%A1%E6%8A%B5%E8%BF%91%E4%B8%AD%E5%9B%BD%E5%91%A8%E8%BE%B9%E7%A9%BA%E5%9F%9F%23) `61.5K 🔥` `+67%`
1. [魏晨现身张杰演唱会](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E6%99%A8%E7%8E%B0%E8%BA%AB%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%23) `60.3K 🔥` `+71%`
1. [伊朗对所有商船开放霍尔木兹海峡](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%B9%E6%89%80%E6%9C%89%E5%95%86%E8%88%B9%E5%BC%80%E6%94%BE%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%23) `58.1K 🔥` `+56%`
1. [猝死前10分钟身体什么感觉](https://s.weibo.com/weibo?q=%23%E7%8C%9D%E6%AD%BB%E5%89%8D10%E5%88%86%E9%92%9F%E8%BA%AB%E4%BD%93%E4%BB%80%E4%B9%88%E6%84%9F%E8%A7%89%23) `57.7K 🔥` `+45%`
1. [孙颖莎巨型卡通装饰](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%B7%A8%E5%9E%8B%E5%8D%A1%E9%80%9A%E8%A3%85%E9%A5%B0%23) `57.6K 🔥` `+52%`
1. [刘浩存 没有给代拍好脸色的义务](https://s.weibo.com/weibo?q=%23%E5%88%98%E6%B5%A9%E5%AD%98%20%E6%B2%A1%E6%9C%89%E7%BB%99%E4%BB%A3%E6%8B%8D%E5%A5%BD%E8%84%B8%E8%89%B2%E7%9A%84%E4%B9%89%E5%8A%A1%23) `56.6K 🔥` `+60%`
1. [伊朗开放霍尔木兹油价应声暴跌 (Iran opens up Hormuz, oil prices plummet)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%BC%80%E6%94%BE%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B2%B9%E4%BB%B7%E5%BA%94%E5%A3%B0%E6%9A%B4%E8%B7%8C%23) `55.0K 🔥` `+56%`
1. [许昕真的回国家队了 (Xu Xin really returns to the national team)](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E6%98%95%E7%9C%9F%E7%9A%84%E5%9B%9E%E5%9B%BD%E5%AE%B6%E9%98%9F%E4%BA%86%23) `54.5K 🔥` `+49%`
1. [日自卫队舰艇进入台湾海峡错上加错 (Japanese Self-Defense Force warship enters Taiwan Strait)](https://s.weibo.com/weibo?q=%23%E6%97%A5%E8%87%AA%E5%8D%AB%E9%98%9F%E8%88%B0%E8%89%87%E8%BF%9B%E5%85%A5%E5%8F%B0%E6%B9%BE%E6%B5%B7%E5%B3%A1%E9%94%99%E4%B8%8A%E5%8A%A0%E9%94%99%23) `53.6K 🔥` `+25%`
1. [林肯号航母提供的餐食情况 (Meals provided by the USS Lincoln)](https://s.weibo.com/weibo?q=%23%E6%9E%97%E8%82%AF%E5%8F%B7%E8%88%AA%E6%AF%8D%E6%8F%90%E4%BE%9B%E7%9A%84%E9%A4%90%E9%A3%9F%E6%83%85%E5%86%B5%23) `52.6K 🔥` `+49%`
1. [特朗普称美伊协议关键条款大多谈妥](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E7%BE%8E%E4%BC%8A%E5%8D%8F%E8%AE%AE%E5%85%B3%E9%94%AE%E6%9D%A1%E6%AC%BE%E5%A4%A7%E5%A4%9A%E8%B0%88%E5%A6%A5%23) `52.6K 🔥` `+33%`
1. [在韩骚扰中国女生日籍男子已离境](https://s.weibo.com/weibo?q=%23%E5%9C%A8%E9%9F%A9%E9%AA%9A%E6%89%B0%E4%B8%AD%E5%9B%BD%E5%A5%B3%E7%94%9F%E6%97%A5%E7%B1%8D%E7%94%B7%E5%AD%90%E5%B7%B2%E7%A6%BB%E5%A2%83%23) `52.6K 🔥` `+49%`
1. [张子枫马嘉祺片场碎片 (Fragments from the set of Zhang Zifeng and Ma Jiaqi)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E6%9E%AB%E9%A9%AC%E5%98%89%E7%A5%BA%E7%89%87%E5%9C%BA%E7%A2%8E%E7%89%87%23) `52.6K 🔥` `+83%`
1. [谢娜喊杜海涛唱小声点](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E5%96%8A%E6%9D%9C%E6%B5%B7%E6%B6%9B%E5%94%B1%E5%B0%8F%E5%A3%B0%E7%82%B9%23) `52.6K 🔥` `+49%`
1. [陈紫函夸田曦薇台词功底 (Chen Zihan praises Tian Xiwei’s dialogue skills)](https://s.weibo.com/weibo?q=%23%E9%99%88%E7%B4%AB%E5%87%BD%E5%A4%B8%E7%94%B0%E6%9B%A6%E8%96%87%E5%8F%B0%E8%AF%8D%E5%8A%9F%E5%BA%95%23) `52.6K 🔥` `+49%`
1. [张雪机车荷兰站 (Zhang Xue Locomotive Holland Station)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E8%8D%B7%E5%85%B0%E7%AB%99%23) `52.5K 🔥` `+49%`
1. [张子枫马嘉祺新剧预约破百万](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AD%90%E6%9E%AB%E9%A9%AC%E5%98%89%E7%A5%BA%E6%96%B0%E5%89%A7%E9%A2%84%E7%BA%A6%E7%A0%B4%E7%99%BE%E4%B8%87%23) `52.5K 🔥` `+49%`
1. [摊主因借给学生手机被家长逼到下跪](https://s.weibo.com/weibo?q=%23%E6%91%8A%E4%B8%BB%E5%9B%A0%E5%80%9F%E7%BB%99%E5%AD%A6%E7%94%9F%E6%89%8B%E6%9C%BA%E8%A2%AB%E5%AE%B6%E9%95%BF%E9%80%BC%E5%88%B0%E4%B8%8B%E8%B7%AA%23) `52.5K 🔥` `+83%`
1. [白发或是身体的抗癌警报 (Gray hair may be the body’s anti-cancer alarm)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%8F%91%E6%88%96%E6%98%AF%E8%BA%AB%E4%BD%93%E7%9A%84%E6%8A%97%E7%99%8C%E8%AD%A6%E6%8A%A5%23) `55.2K 🔥`
1. [儿子晒96岁父亲的三无精致生活](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E6%99%9296%E5%B2%81%E7%88%B6%E4%BA%B2%E7%9A%84%E4%B8%89%E6%97%A0%E7%B2%BE%E8%87%B4%E7%94%9F%E6%B4%BB%23) `52.6K 🔥`

Updated at 2026-04-18 06:49:15

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
