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

1. [用千问AI订机票真的很智能 (Booking air tickets using Qianwen AI is really smart)](https://s.weibo.com/weibo?q=%23%E7%94%A8%E5%8D%83%E9%97%AEAI%E8%AE%A2%E6%9C%BA%E7%A5%A8%E7%9C%9F%E7%9A%84%E5%BE%88%E6%99%BA%E8%83%BD%23) `663.0K 🔥` `NEW`
1. [演员回应脱掉和服才向观众鞠躬致谢](https://s.weibo.com/weibo?q=%23%E6%BC%94%E5%91%98%E5%9B%9E%E5%BA%94%E8%84%B1%E6%8E%89%E5%92%8C%E6%9C%8D%E6%89%8D%E5%90%91%E8%A7%82%E4%BC%97%E9%9E%A0%E8%BA%AC%E8%87%B4%E8%B0%A2%23) `662.3K 🔥` `NEW`
1. [特朗普称下令击沉霍尔木兹布雷船](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E4%B8%8B%E4%BB%A4%E5%87%BB%E6%B2%89%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E5%B8%83%E9%9B%B7%E8%88%B9%23) `547.0K 🔥` `NEW`
1. [秦昊说外面有人了还要送啊](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E6%98%8A%E8%AF%B4%E5%A4%96%E9%9D%A2%E6%9C%89%E4%BA%BA%E4%BA%86%E8%BF%98%E8%A6%81%E9%80%81%E5%95%8A%23) `525.3K 🔥` `NEW`
1. [尚界汽车法务部上线](https://s.weibo.com/weibo?q=%23%E5%B0%9A%E7%95%8C%E6%B1%BD%E8%BD%A6%E6%B3%95%E5%8A%A1%E9%83%A8%E4%B8%8A%E7%BA%BF%23) `523.4K 🔥` `NEW`
1. [GPT Image2 到底什么是真的](https://s.weibo.com/weibo?q=%23GPT%20Image2%20%E5%88%B0%E5%BA%95%E4%BB%80%E4%B9%88%E6%98%AF%E7%9C%9F%E7%9A%84%23) `502.5K 🔥` `NEW`
1. [孙杨](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%9D%A8%23) `466.2K 🔥` `NEW`
1. [26岁女子穿袜子睡觉睡出千层甲](https://s.weibo.com/weibo?q=%2326%E5%B2%81%E5%A5%B3%E5%AD%90%E7%A9%BF%E8%A2%9C%E5%AD%90%E7%9D%A1%E8%A7%89%E7%9D%A1%E5%87%BA%E5%8D%83%E5%B1%82%E7%94%B2%23) `438.7K 🔥` `NEW`
1. [迪丽热巴千字长文告别白日提灯](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%8D%83%E5%AD%97%E9%95%BF%E6%96%87%E5%91%8A%E5%88%AB%E7%99%BD%E6%97%A5%E6%8F%90%E7%81%AF%23) `278.7K 🔥` `NEW`
1. [刘宇宁曾自曝离婚无娃](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E6%9B%BE%E8%87%AA%E6%9B%9D%E7%A6%BB%E5%A9%9A%E6%97%A0%E5%A8%83%23) `246.0K 🔥` `NEW`
1. [陈丽君晋升副主任 (Chen Lijun promoted to deputy director)](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%B8%BD%E5%90%9B%E6%99%8B%E5%8D%87%E5%89%AF%E4%B8%BB%E4%BB%BB%23) `237.2K 🔥` `NEW`
1. [宋祖儿曾分享极端减肥经历](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E7%A5%96%E5%84%BF%E6%9B%BE%E5%88%86%E4%BA%AB%E6%9E%81%E7%AB%AF%E5%87%8F%E8%82%A5%E7%BB%8F%E5%8E%86%23) `182.0K 🔥` `NEW`
1. [女生拉账单发现爸爸10年转了20多万](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E7%94%9F%E6%8B%89%E8%B4%A6%E5%8D%95%E5%8F%91%E7%8E%B0%E7%88%B8%E7%88%B810%E5%B9%B4%E8%BD%AC%E4%BA%8620%E5%A4%9A%E4%B8%87%23) `179.1K 🔥` `NEW`
1. [岳阳一公园8座雕像被一男子泼红漆](https://s.weibo.com/weibo?q=%23%E5%B2%B3%E9%98%B3%E4%B8%80%E5%85%AC%E5%9B%AD8%E5%BA%A7%E9%9B%95%E5%83%8F%E8%A2%AB%E4%B8%80%E7%94%B7%E5%AD%90%E6%B3%BC%E7%BA%A2%E6%BC%86%23) `176.2K 🔥` `NEW`
1. [金银价格双双跳水](https://s.weibo.com/weibo?q=%23%E9%87%91%E9%93%B6%E4%BB%B7%E6%A0%BC%E5%8F%8C%E5%8F%8C%E8%B7%B3%E6%B0%B4%23) `169.4K 🔥` `NEW`
1. [女歌手因恐飞取消北京巡演](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%AD%8C%E6%89%8B%E5%9B%A0%E6%81%90%E9%A3%9E%E5%8F%96%E6%B6%88%E5%8C%97%E4%BA%AC%E5%B7%A1%E6%BC%94%23) `152.3K 🔥` `NEW`
1. [伊朗发布拦截2艘货轮视频](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%8F%91%E5%B8%83%E6%8B%A6%E6%88%AA2%E8%89%98%E8%B4%A7%E8%BD%AE%E8%A7%86%E9%A2%91%23) `135.9K 🔥` `NEW`
1. [医生称金莎已经接近超高龄产妇](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E7%A7%B0%E9%87%91%E8%8E%8E%E5%B7%B2%E7%BB%8F%E6%8E%A5%E8%BF%91%E8%B6%85%E9%AB%98%E9%BE%84%E4%BA%A7%E5%A6%87%23) `129.9K 🔥` `NEW`
1. [反复造谣迪丽热巴已违法](https://s.weibo.com/weibo?q=%23%E5%8F%8D%E5%A4%8D%E9%80%A0%E8%B0%A3%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%B7%B2%E8%BF%9D%E6%B3%95%23) `126.9K 🔥` `NEW`
1. [司机回应多次打断男乘客搭讪同乘女子](https://s.weibo.com/weibo?q=%23%E5%8F%B8%E6%9C%BA%E5%9B%9E%E5%BA%94%E5%A4%9A%E6%AC%A1%E6%89%93%E6%96%AD%E7%94%B7%E4%B9%98%E5%AE%A2%E6%90%AD%E8%AE%AA%E5%90%8C%E4%B9%98%E5%A5%B3%E5%AD%90%23) `121.9K 🔥` `NEW`
1. [刘宇宁否认与宋祖儿恋情 (Liu Yuning denies romance with Song Zuer)](https://s.weibo.com/weibo?q=%23%E5%88%98%E5%AE%87%E5%AE%81%E5%90%A6%E8%AE%A4%E4%B8%8E%E5%AE%8B%E7%A5%96%E5%84%BF%E6%81%8B%E6%83%85%23) `114.8K 🔥` `NEW`
1. [员工每天早到晚走卷走公司26万](https://s.weibo.com/weibo?q=%23%E5%91%98%E5%B7%A5%E6%AF%8F%E5%A4%A9%E6%97%A9%E5%88%B0%E6%99%9A%E8%B5%B0%E5%8D%B7%E8%B5%B0%E5%85%AC%E5%8F%B826%E4%B8%87%23) `99.3K 🔥` `NEW`
1. [月薪1.6万招人放羊包吃住有WiFi (Recruiting people to herd sheep with a monthly salary of 16,000, including food, accommodation and WiFi.)](https://s.weibo.com/weibo?q=%23%E6%9C%88%E8%96%AA1.6%E4%B8%87%E6%8B%9B%E4%BA%BA%E6%94%BE%E7%BE%8A%E5%8C%85%E5%90%83%E4%BD%8F%E6%9C%89WiFi%23) `1.3M 🔥` `+85%`
1. [华谊兄弟被申请破产重整 (Huayi Brothers was filed for bankruptcy and reorganization)](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E8%B0%8A%E5%85%84%E5%BC%9F%E8%A2%AB%E7%94%B3%E8%AF%B7%E7%A0%B4%E4%BA%A7%E9%87%8D%E6%95%B4%23) `847.9K 🔥` `+264%`
1. [服务业这些领域将迎大改变 (These areas of the service industry will undergo major changes)](https://s.weibo.com/weibo?q=%23%E6%9C%8D%E5%8A%A1%E4%B8%9A%E8%BF%99%E4%BA%9B%E9%A2%86%E5%9F%9F%E5%B0%86%E8%BF%8E%E5%A4%A7%E6%94%B9%E5%8F%98%23) `663.3K 🔥` `+72%`
1. [爱喝无糖饮料的天塌了](https://s.weibo.com/weibo?q=%23%E7%88%B1%E5%96%9D%E6%97%A0%E7%B3%96%E9%A5%AE%E6%96%99%E7%9A%84%E5%A4%A9%E5%A1%8C%E4%BA%86%23) `660.9K 🔥` `+89%`
1. [焕新极氪009新一代旗舰MPV](https://s.weibo.com/weibo?q=%23%E7%84%95%E6%96%B0%E6%9E%81%E6%B0%AA009%E6%96%B0%E4%B8%80%E4%BB%A3%E6%97%97%E8%88%B0MPV%23) `535.9K 🔥` `+864%`
1. [异环公测](https://s.weibo.com/weibo?q=%23%E5%BC%82%E7%8E%AF%E5%85%AC%E6%B5%8B%23) `478.0K 🔥` `+158%`
1. [6岁女童下体流血4年体内发现玩具](https://s.weibo.com/weibo?q=%236%E5%B2%81%E5%A5%B3%E7%AB%A5%E4%B8%8B%E4%BD%93%E6%B5%81%E8%A1%804%E5%B9%B4%E4%BD%93%E5%86%85%E5%8F%91%E7%8E%B0%E7%8E%A9%E5%85%B7%23) `446.3K 🔥` `+114%`
1. [人怎么可以争气成这样](https://s.weibo.com/weibo?q=%23%E4%BA%BA%E6%80%8E%E4%B9%88%E5%8F%AF%E4%BB%A5%E4%BA%89%E6%B0%94%E6%88%90%E8%BF%99%E6%A0%B7%23) `438.0K 🔥` `+42%`
1. [老人挤公交离世家属索赔70万被驳回](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E6%8C%A4%E5%85%AC%E4%BA%A4%E7%A6%BB%E4%B8%96%E5%AE%B6%E5%B1%9E%E7%B4%A2%E8%B5%9470%E4%B8%87%E8%A2%AB%E9%A9%B3%E5%9B%9E%23) `294.3K 🔥` `+27%`
1. [白鹿cos尼克狐尼克你被捕了](https://s.weibo.com/weibo?q=%23%E7%99%BD%E9%B9%BFcos%E5%B0%BC%E5%85%8B%E7%8B%90%E5%B0%BC%E5%85%8B%E4%BD%A0%E8%A2%AB%E6%8D%95%E4%BA%86%23) `288.3K 🔥` `+23%`
1. [崔丽丽连说两遍我不服我不服 (Cui Lili said twice in a row that I am not convinced, I am not convinced.)](https://s.weibo.com/weibo?q=%23%E5%B4%94%E4%B8%BD%E4%B8%BD%E8%BF%9E%E8%AF%B4%E4%B8%A4%E9%81%8D%E6%88%91%E4%B8%8D%E6%9C%8D%E6%88%91%E4%B8%8D%E6%9C%8D%23) `270.6K 🔥` `+21%`
1. [华为乾崑智驾ADS5](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E4%B9%BE%E5%B4%91%E6%99%BA%E9%A9%BEADS5%23) `262.4K 🔥` `+39%`
1. [15斤的小猫把床压塌了 (The 15-pound kitten collapsed the bed)](https://s.weibo.com/weibo?q=%2315%E6%96%A4%E7%9A%84%E5%B0%8F%E7%8C%AB%E6%8A%8A%E5%BA%8A%E5%8E%8B%E5%A1%8C%E4%BA%86%23) `274.8K 🔥`
1. [小米首次登顶全球开源大模型第一 (Xiaomi topped the list of global open source large models for the first time)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E9%A6%96%E6%AC%A1%E7%99%BB%E9%A1%B6%E5%85%A8%E7%90%83%E5%BC%80%E6%BA%90%E5%A4%A7%E6%A8%A1%E5%9E%8B%E7%AC%AC%E4%B8%80%23) `266.7K 🔥`
1. [曝华晨宇演唱会前期投入好几个亿](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%8D%8E%E6%99%A8%E5%AE%87%E6%BC%94%E5%94%B1%E4%BC%9A%E5%89%8D%E6%9C%9F%E6%8A%95%E5%85%A5%E5%A5%BD%E5%87%A0%E4%B8%AA%E4%BA%BF%23) `253.4K 🔥`
1. [陈泽报备](https://s.weibo.com/weibo?q=%23%E9%99%88%E6%B3%BD%E6%8A%A5%E5%A4%87%23) `243.4K 🔥`
1. [女子指甲总长13米涂一次需20瓶指甲油 (A woman's nails are 13 meters long and require 20 bottles of nail polish for one application)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%8C%87%E7%94%B2%E6%80%BB%E9%95%BF13%E7%B1%B3%E6%B6%82%E4%B8%80%E6%AC%A1%E9%9C%8020%E7%93%B6%E6%8C%87%E7%94%B2%E6%B2%B9%23) `222.7K 🔥`
1. [突然发现事缓则圆可能是真的](https://s.weibo.com/weibo?q=%23%E7%AA%81%E7%84%B6%E5%8F%91%E7%8E%B0%E4%BA%8B%E7%BC%93%E5%88%99%E5%9C%86%E5%8F%AF%E8%83%BD%E6%98%AF%E7%9C%9F%E7%9A%84%23) `206.2K 🔥`
1. [国家图书馆推荐书单来了](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E5%9B%BE%E4%B9%A6%E9%A6%86%E6%8E%A8%E8%8D%90%E4%B9%A6%E5%8D%95%E6%9D%A5%E4%BA%86%23) `187.7K 🔥` `-21%`
1. [特朗普称美完全掌控霍尔木兹](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E7%A7%B0%E7%BE%8E%E5%AE%8C%E5%85%A8%E6%8E%8C%E6%8E%A7%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%23) `185.5K 🔥` `-22%`
1. [女子减肥断碳水43天查出糖尿病前期 (Woman cut out carbs for 43 days to lose weight and was diagnosed with prediabetes)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%87%8F%E8%82%A5%E6%96%AD%E7%A2%B3%E6%B0%B443%E5%A4%A9%E6%9F%A5%E5%87%BA%E7%B3%96%E5%B0%BF%E7%97%85%E5%89%8D%E6%9C%9F%23) `173.7K 🔥` `-24%`
1. [警方回应男保安掌掴女司机事件](https://s.weibo.com/weibo?q=%23%E8%AD%A6%E6%96%B9%E5%9B%9E%E5%BA%94%E7%94%B7%E4%BF%9D%E5%AE%89%E6%8E%8C%E6%8E%B4%E5%A5%B3%E5%8F%B8%E6%9C%BA%E4%BA%8B%E4%BB%B6%23) `170.9K 🔥` `-25%`
1. [耳洞上的窝窝 体表唯一迷走神经](https://s.weibo.com/weibo?q=%23%E8%80%B3%E6%B4%9E%E4%B8%8A%E7%9A%84%E7%AA%9D%E7%AA%9D%20%E4%BD%93%E8%A1%A8%E5%94%AF%E4%B8%80%E8%BF%B7%E8%B5%B0%E7%A5%9E%E7%BB%8F%23) `142.4K 🔥` `-34%`
1. [印度大举进口250万吨尿素 (India imports 2.5 million tons of urea on a large scale)](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E5%A4%A7%E4%B8%BE%E8%BF%9B%E5%8F%A3250%E4%B8%87%E5%90%A8%E5%B0%BF%E7%B4%A0%23) `126.9K 🔥` `-74%`
1. [两辈子第一次见](https://s.weibo.com/weibo?q=%23%E4%B8%A4%E8%BE%88%E5%AD%90%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A7%81%23) `119.4K 🔥` `-44%`
1. [男子杀妻抛尸家属称没发现二人不和](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E6%9D%80%E5%A6%BB%E6%8A%9B%E5%B0%B8%E5%AE%B6%E5%B1%9E%E7%A7%B0%E6%B2%A1%E5%8F%91%E7%8E%B0%E4%BA%8C%E4%BA%BA%E4%B8%8D%E5%92%8C%23) `115.9K 🔥` `-47%`
1. [教育部门已介入女生被卖到电诈园案 (The education department has intervened in the case of girls being sold to electronic fraud schools)](https://s.weibo.com/weibo?q=%23%E6%95%99%E8%82%B2%E9%83%A8%E9%97%A8%E5%B7%B2%E4%BB%8B%E5%85%A5%E5%A5%B3%E7%94%9F%E8%A2%AB%E5%8D%96%E5%88%B0%E7%94%B5%E8%AF%88%E5%9B%AD%E6%A1%88%23) `115.1K 🔥` `-47%`
1. [王濛澄清和周洋不是真谈了 (Wang Meng clarified that he and Zhou Yang were not really talking anymore)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%BF%9B%E6%BE%84%E6%B8%85%E5%92%8C%E5%91%A8%E6%B4%8B%E4%B8%8D%E6%98%AF%E7%9C%9F%E8%B0%88%E4%BA%86%23) `108.4K 🔥` `-51%`
1. [外国人震惊中国水果摊老板开门睡觉 (Foreigners shocked after Chinese fruit stall owner slept with his door open)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E4%BA%BA%E9%9C%87%E6%83%8A%E4%B8%AD%E5%9B%BD%E6%B0%B4%E6%9E%9C%E6%91%8A%E8%80%81%E6%9D%BF%E5%BC%80%E9%97%A8%E7%9D%A1%E8%A7%89%23) `107.3K 🔥` `-51%`
1. [外国人称翻译让他知道日本人的肮脏 (Foreigners say translators let them know how dirty Japanese people are)](https://s.weibo.com/weibo?q=%23%E5%A4%96%E5%9B%BD%E4%BA%BA%E7%A7%B0%E7%BF%BB%E8%AF%91%E8%AE%A9%E4%BB%96%E7%9F%A5%E9%81%93%E6%97%A5%E6%9C%AC%E4%BA%BA%E7%9A%84%E8%82%AE%E8%84%8F%23) `104.8K 🔥` `-46%`

Updated at 2026-04-24 08:02:14

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
