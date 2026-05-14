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

1. [胡歌点赞方太新一代洗碗机 (Hu Ge praises Fotile’s new generation dishwasher)](https://s.weibo.com/weibo?q=%23%E8%83%A1%E6%AD%8C%E7%82%B9%E8%B5%9E%E6%96%B9%E5%A4%AA%E6%96%B0%E4%B8%80%E4%BB%A3%E6%B4%97%E7%A2%97%E6%9C%BA%23) `277.5K 🔥` `NEW`
1. [杨紫来到了董竹君的城市](https://s.weibo.com/weibo?q=%23%E6%9D%A8%E7%B4%AB%E6%9D%A5%E5%88%B0%E4%BA%86%E8%91%A3%E7%AB%B9%E5%90%9B%E7%9A%84%E5%9F%8E%E5%B8%82%23) `82.9K 🔥` `NEW`
1. [中美领导人致辞 (Speeches from Chinese and American leaders)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E7%BE%8E%E9%A2%86%E5%AF%BC%E4%BA%BA%E8%87%B4%E8%BE%9E%23) `470.8K 🔥` `+152%`
1. [国家反诈中心APP 检测AI图](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E5%8F%8D%E8%AF%88%E4%B8%AD%E5%BF%83APP%20%E6%A3%80%E6%B5%8BAI%E5%9B%BE%23) `411.5K 🔥` `+148%`
1. [天坛里的中国古建智慧](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%9D%9B%E9%87%8C%E7%9A%84%E4%B8%AD%E5%9B%BD%E5%8F%A4%E5%BB%BA%E6%99%BA%E6%85%A7%23) `280.7K 🔥` `+169%`
1. [方媛坚持要住男生单人间 (Fang Yuan insisted on staying in a single room for boys)](https://s.weibo.com/weibo?q=%23%E6%96%B9%E5%AA%9B%E5%9D%9A%E6%8C%81%E8%A6%81%E4%BD%8F%E7%94%B7%E7%94%9F%E5%8D%95%E4%BA%BA%E9%97%B4%23) `274.0K 🔥` `+172%`
1. [疑似周也对戛纳火力全开](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E5%91%A8%E4%B9%9F%E5%AF%B9%E6%88%9B%E7%BA%B3%E7%81%AB%E5%8A%9B%E5%85%A8%E5%BC%80%23) `259.0K 🔥` `+166%`
1. [特朗普访华欢迎宴会](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AE%BF%E5%8D%8E%E6%AC%A2%E8%BF%8E%E5%AE%B4%E4%BC%9A%23) `239.5K 🔥` `+220%`
1. [有的猫一看面相就老实巴交](https://s.weibo.com/weibo?q=%23%E6%9C%89%E7%9A%84%E7%8C%AB%E4%B8%80%E7%9C%8B%E9%9D%A2%E7%9B%B8%E5%B0%B1%E8%80%81%E5%AE%9E%E5%B7%B4%E4%BA%A4%23) `212.6K 🔥` `+152%`
1. [英国乒乓球官方称赞孙颖莎人品和球技](https://s.weibo.com/weibo?q=%23%E8%8B%B1%E5%9B%BD%E4%B9%92%E4%B9%93%E7%90%83%E5%AE%98%E6%96%B9%E7%A7%B0%E8%B5%9E%E5%AD%99%E9%A2%96%E8%8E%8E%E4%BA%BA%E5%93%81%E5%92%8C%E7%90%83%E6%8A%80%23) `97.2K 🔥` `+358%`
1. [想减肥可以去KTV吃饭](https://s.weibo.com/weibo?q=%23%E6%83%B3%E5%87%8F%E8%82%A5%E5%8F%AF%E4%BB%A5%E5%8E%BBKTV%E5%90%83%E9%A5%AD%23) `95.8K 🔥` `+104%`
1. [泰兰尼斯被曝千元童鞋成本仅37元](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%85%B0%E5%B0%BC%E6%96%AF%E8%A2%AB%E6%9B%9D%E5%8D%83%E5%85%83%E7%AB%A5%E9%9E%8B%E6%88%90%E6%9C%AC%E4%BB%8537%E5%85%83%23) `86.1K 🔥` `+96%`
1. [徐志胜疯狂暗示方媛不太方便 (Xu Zhisheng wildly hinted that Fang Yuan was inconvenient)](https://s.weibo.com/weibo?q=%23%E5%BE%90%E5%BF%97%E8%83%9C%E7%96%AF%E7%8B%82%E6%9A%97%E7%A4%BA%E6%96%B9%E5%AA%9B%E4%B8%8D%E5%A4%AA%E6%96%B9%E4%BE%BF%23) `85.9K 🔥` `+101%`
1. [女子让全家常年食用无碘盐](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%AE%A9%E5%85%A8%E5%AE%B6%E5%B8%B8%E5%B9%B4%E9%A3%9F%E7%94%A8%E6%97%A0%E7%A2%98%E7%9B%90%23) `85.5K 🔥` `+106%`
1. [马斯克回复360度转圈拍人民大会堂 (Musk replied with a 360-degree circle shot of the Great Hall of the People)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E5%9B%9E%E5%A4%8D360%E5%BA%A6%E8%BD%AC%E5%9C%88%E6%8B%8D%E4%BA%BA%E6%B0%91%E5%A4%A7%E4%BC%9A%E5%A0%82%23) `84.8K 🔥` `+101%`
1. [李现看给阿嬷的情书哭得好狼狈](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E7%8E%B0%E7%9C%8B%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E5%93%AD%E5%BE%97%E5%A5%BD%E7%8B%BC%E7%8B%88%23) `84.2K 🔥` `+110%`
1. [马斯克携幼子现身人民大会堂](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E6%90%BA%E5%B9%BC%E5%AD%90%E7%8E%B0%E8%BA%AB%E4%BA%BA%E6%B0%91%E5%A4%A7%E4%BC%9A%E5%A0%82%23) `83.9K 🔥` `+104%`
1. [复旦大学王德峰教授谈缘起性空](https://s.weibo.com/weibo?q=%23%E5%A4%8D%E6%97%A6%E5%A4%A7%E5%AD%A6%E7%8E%8B%E5%BE%B7%E5%B3%B0%E6%95%99%E6%8E%88%E8%B0%88%E7%BC%98%E8%B5%B7%E6%80%A7%E7%A9%BA%23) `83.4K 🔥` `+308%`
1. [歌手](https://s.weibo.com/weibo?q=%23%E6%AD%8C%E6%89%8B%23) `70.6K 🔥` `+62%`
1. [王一博天高海阔获评年度优秀歌曲](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A%E5%A4%A9%E9%AB%98%E6%B5%B7%E9%98%94%E8%8E%B7%E8%AF%84%E5%B9%B4%E5%BA%A6%E4%BC%98%E7%A7%80%E6%AD%8C%E6%9B%B2%23) `68.2K 🔥` `+151%`
1. [欢迎宴会上强调了什么](https://s.weibo.com/weibo?q=%23%E6%AC%A2%E8%BF%8E%E5%AE%B4%E4%BC%9A%E4%B8%8A%E5%BC%BA%E8%B0%83%E4%BA%86%E4%BB%80%E4%B9%88%23) `66.7K 🔥` `+79%`
1. [睡前做这个动作30秒连续三天都睡得香](https://s.weibo.com/weibo?q=%23%E7%9D%A1%E5%89%8D%E5%81%9A%E8%BF%99%E4%B8%AA%E5%8A%A8%E4%BD%9C30%E7%A7%92%E8%BF%9E%E7%BB%AD%E4%B8%89%E5%A4%A9%E9%83%BD%E7%9D%A1%E5%BE%97%E9%A6%99%23) `65.6K 🔥` `+108%`
1. [10种不舒服是抑郁症躯体化表现 (10 kinds of discomfort are somatic manifestations of depression)](https://s.weibo.com/weibo?q=%2310%E7%A7%8D%E4%B8%8D%E8%88%92%E6%9C%8D%E6%98%AF%E6%8A%91%E9%83%81%E7%97%87%E8%BA%AF%E4%BD%93%E5%8C%96%E8%A1%A8%E7%8E%B0%23) `63.7K 🔥` `+104%`
1. [31岁女子从60斤增到90斤像变个人](https://s.weibo.com/weibo?q=%2331%E5%B2%81%E5%A5%B3%E5%AD%90%E4%BB%8E60%E6%96%A4%E5%A2%9E%E5%88%B090%E6%96%A4%E5%83%8F%E5%8F%98%E4%B8%AA%E4%BA%BA%23) `61.8K 🔥` `+133%`
1. [马斯克谈会晤感受 (Musk talks about his feelings about the meeting)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E6%96%AF%E5%85%8B%E8%B0%88%E4%BC%9A%E6%99%A4%E6%84%9F%E5%8F%97%23) `53.0K 🔥` `+97%`
1. [那英再次加盟歌手 (Na Ying joins the singer again)](https://s.weibo.com/weibo?q=%23%E9%82%A3%E8%8B%B1%E5%86%8D%E6%AC%A1%E5%8A%A0%E7%9B%9F%E6%AD%8C%E6%89%8B%23) `52.1K 🔥` `+39%`
1. [医师回应宝宝头顶九个旋](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E5%B8%88%E5%9B%9E%E5%BA%94%E5%AE%9D%E5%AE%9D%E5%A4%B4%E9%A1%B6%E4%B9%9D%E4%B8%AA%E6%97%8B%23) `52.1K 🔥` `+72%`
1. [值得坚持一生的24个好习惯](https://s.weibo.com/weibo?q=%23%E5%80%BC%E5%BE%97%E5%9D%9A%E6%8C%81%E4%B8%80%E7%94%9F%E7%9A%8424%E4%B8%AA%E5%A5%BD%E4%B9%A0%E6%83%AF%23) `52.1K 🔥` `+69%`
1. [老人焚烧自家田地枯草被顶格罚款 (An old man was fined for burning dead grass in his field)](https://s.weibo.com/weibo?q=%23%E8%80%81%E4%BA%BA%E7%84%9A%E7%83%A7%E8%87%AA%E5%AE%B6%E7%94%B0%E5%9C%B0%E6%9E%AF%E8%8D%89%E8%A2%AB%E9%A1%B6%E6%A0%BC%E7%BD%9A%E6%AC%BE%23) `52.1K 🔥` `+152%`
1. [王楚钦不打球的时候长这样](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A5%9A%E9%92%A6%E4%B8%8D%E6%89%93%E7%90%83%E7%9A%84%E6%97%B6%E5%80%99%E9%95%BF%E8%BF%99%E6%A0%B7%23) `52.0K 🔥` `+146%`
1. [黄仁勋谈中国AI发展](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E8%B0%88%E4%B8%AD%E5%9B%BDAI%E5%8F%91%E5%B1%95%23) `52.0K 🔥` `+87%`
1. [内娱集体宿舍大通铺名场面又来了](https://s.weibo.com/weibo?q=%23%E5%86%85%E5%A8%B1%E9%9B%86%E4%BD%93%E5%AE%BF%E8%88%8D%E5%A4%A7%E9%80%9A%E9%93%BA%E5%90%8D%E5%9C%BA%E9%9D%A2%E5%8F%88%E6%9D%A5%E4%BA%86%23) `52.0K 🔥` `+108%`
1. [多方回应关闭支付功能后被扣184万](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%94%E5%85%B3%E9%97%AD%E6%94%AF%E4%BB%98%E5%8A%9F%E8%83%BD%E5%90%8E%E8%A2%AB%E6%89%A3184%E4%B8%87%23) `52.0K 🔥` `+108%`
1. [妈妈低碘饮食女儿2岁不太会说话 (Mom's 2-year-old daughter eats low iodine diet and can't speak well)](https://s.weibo.com/weibo?q=%23%E5%A6%88%E5%A6%88%E4%BD%8E%E7%A2%98%E9%A5%AE%E9%A3%9F%E5%A5%B3%E5%84%BF2%E5%B2%81%E4%B8%8D%E5%A4%AA%E4%BC%9A%E8%AF%B4%E8%AF%9D%23) `52.0K 🔥` `+108%`
1. [特朗普说美高法门楣刻孔子无比荣幸 (Trump said it was a great honor to have Confucius engraved on the lintel of the US High School)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E8%AF%B4%E7%BE%8E%E9%AB%98%E6%B3%95%E9%97%A8%E6%A5%A3%E5%88%BB%E5%AD%94%E5%AD%90%E6%97%A0%E6%AF%94%E8%8D%A3%E5%B9%B8%23) `52.0K 🔥` `+32%`
1. [张本智和说世界排名不代表一切 (Zhang Benzhihe said that world ranking does not mean everything)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9C%AC%E6%99%BA%E5%92%8C%E8%AF%B4%E4%B8%96%E7%95%8C%E6%8E%92%E5%90%8D%E4%B8%8D%E4%BB%A3%E8%A1%A8%E4%B8%80%E5%88%87%23) `52.0K 🔥` `+109%`
1. [伊能静神吐槽孙杨 (Yi Nengjingshen complained about Sun Yang)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E8%83%BD%E9%9D%99%E7%A5%9E%E5%90%90%E6%A7%BD%E5%AD%99%E6%9D%A8%23) `51.9K 🔥` `+30%`
1. [爸爸当家5嘉宾阵容](https://s.weibo.com/weibo?q=%23%E7%88%B8%E7%88%B8%E5%BD%93%E5%AE%B65%E5%98%89%E5%AE%BE%E9%98%B5%E5%AE%B9%23) `51.9K 🔥` `+154%`
1. [马頔因为心疼李纯去剧组给她做饭 (Ma Di went to the set to cook for Li Chun because he felt sorry for her)](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E9%A0%94%E5%9B%A0%E4%B8%BA%E5%BF%83%E7%96%BC%E6%9D%8E%E7%BA%AF%E5%8E%BB%E5%89%A7%E7%BB%84%E7%BB%99%E5%A5%B9%E5%81%9A%E9%A5%AD%23) `51.9K 🔥` `+154%`
1. [秦岭分水岭事故死者妻子发声 (The wife of the deceased in the Qinling watershed accident speaks out)](https://s.weibo.com/weibo?q=%23%E7%A7%A6%E5%B2%AD%E5%88%86%E6%B0%B4%E5%B2%AD%E4%BA%8B%E6%95%85%E6%AD%BB%E8%80%85%E5%A6%BB%E5%AD%90%E5%8F%91%E5%A3%B0%23) `51.9K 🔥` `+137%`
1. [给阿嬷的情书女主官宣入行](https://s.weibo.com/weibo?q=%23%E7%BB%99%E9%98%BF%E5%AC%B7%E7%9A%84%E6%83%85%E4%B9%A6%E5%A5%B3%E4%B8%BB%E5%AE%98%E5%AE%A3%E5%85%A5%E8%A1%8C%23) `51.9K 🔥` `+144%`
1. [周也戛纳淡紫色纱裙](https://s.weibo.com/weibo?q=%23%E5%91%A8%E4%B9%9F%E6%88%9B%E7%BA%B3%E6%B7%A1%E7%B4%AB%E8%89%B2%E7%BA%B1%E8%A3%99%23) `51.9K 🔥` `+153%`
1. [接张局事业运 (Receive Zhang Bureau’s career luck)](https://s.weibo.com/weibo?q=%23%E6%8E%A5%E5%BC%A0%E5%B1%80%E4%BA%8B%E4%B8%9A%E8%BF%90%23) `51.9K 🔥` `+121%`
1. [男孩幽门螺杆菌阳性治疗4次全失败 (Boy positive for Helicobacter pylori failed all 4 treatments)](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%A9%E5%B9%BD%E9%97%A8%E8%9E%BA%E6%9D%86%E8%8F%8C%E9%98%B3%E6%80%A7%E6%B2%BB%E7%96%974%E6%AC%A1%E5%85%A8%E5%A4%B1%E8%B4%A5%23) `51.8K 🔥` `+128%`
1. [高通总裁安蒙谈中国机遇 (Qualcomm President An Meng talks about opportunities in China)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%80%9A%E6%80%BB%E8%A3%81%E5%AE%89%E8%92%99%E8%B0%88%E4%B8%AD%E5%9B%BD%E6%9C%BA%E9%81%87%23) `51.8K 🔥` `+153%`
1. [男子1万买榴莲付11万几个月才发现](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%901%E4%B8%87%E4%B9%B0%E6%A6%B4%E8%8E%B2%E4%BB%9811%E4%B8%87%E5%87%A0%E4%B8%AA%E6%9C%88%E6%89%8D%E5%8F%91%E7%8E%B0%23) `51.8K 🔥` `+153%`
1. [女子喂宠物猪鼻蛇被咬手肿如气球](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%96%82%E5%AE%A0%E7%89%A9%E7%8C%AA%E9%BC%BB%E8%9B%87%E8%A2%AB%E5%92%AC%E6%89%8B%E8%82%BF%E5%A6%82%E6%B0%94%E7%90%83%23) `51.8K 🔥` `+133%`
1. [全红婵妈妈生病住院 (Quan Hongchan’s mother is sick and hospitalized)](https://s.weibo.com/weibo?q=%23%E5%85%A8%E7%BA%A2%E5%A9%B5%E5%A6%88%E5%A6%88%E7%94%9F%E7%97%85%E4%BD%8F%E9%99%A2%23) `51.8K 🔥` `+62%`
1. [浪姐](https://s.weibo.com/weibo?q=%23%E6%B5%AA%E5%A7%90%23) `51.7K 🔥` `+153%`
1. [构建中美建设性战略稳定关系](https://s.weibo.com/weibo?q=%23%E6%9E%84%E5%BB%BA%E4%B8%AD%E7%BE%8E%E5%BB%BA%E8%AE%BE%E6%80%A7%E6%88%98%E7%95%A5%E7%A8%B3%E5%AE%9A%E5%85%B3%E7%B3%BB%23) `51.7K 🔥` `+153%`
1. [日本男教师对女学生水瓶做不雅动作](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E7%94%B7%E6%95%99%E5%B8%88%E5%AF%B9%E5%A5%B3%E5%AD%A6%E7%94%9F%E6%B0%B4%E7%93%B6%E5%81%9A%E4%B8%8D%E9%9B%85%E5%8A%A8%E4%BD%9C%23) `51.7K 🔥` `+104%`
1. [这一刻有被林肯治愈到 (At this moment, I was healed by Lincoln)](https://s.weibo.com/weibo?q=%23%E8%BF%99%E4%B8%80%E5%88%BB%E6%9C%89%E8%A2%AB%E6%9E%97%E8%82%AF%E6%B2%BB%E6%84%88%E5%88%B0%23) `233.9K 🔥` `-32%`

Updated at 2026-05-15 06:42:36

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
