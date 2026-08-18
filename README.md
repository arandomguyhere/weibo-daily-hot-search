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

1. [京东推出首家医用个护店 (JD.com launches first medical personal care store)](https://s.weibo.com/weibo?q=%23%E4%BA%AC%E4%B8%9C%E6%8E%A8%E5%87%BA%E9%A6%96%E5%AE%B6%E5%8C%BB%E7%94%A8%E4%B8%AA%E6%8A%A4%E5%BA%97%23) `275.8K 🔥` `NEW`
1. [桃黑黑勘误](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E5%8B%98%E8%AF%AF%23) `106.3K 🔥` `NEW`
1. [蓝盈盈和男友刚在一起没多久](https://s.weibo.com/weibo?q=%23%E8%93%9D%E7%9B%88%E7%9B%88%E5%92%8C%E7%94%B7%E5%8F%8B%E5%88%9A%E5%9C%A8%E4%B8%80%E8%B5%B7%E6%B2%A1%E5%A4%9A%E4%B9%85%23) `105.0K 🔥` `NEW`
1. [黄仁勋称失去中国市场美国AI必败](https://s.weibo.com/weibo?q=%23%E9%BB%84%E4%BB%81%E5%8B%8B%E7%A7%B0%E5%A4%B1%E5%8E%BB%E4%B8%AD%E5%9B%BD%E5%B8%82%E5%9C%BA%E7%BE%8E%E5%9B%BDAI%E5%BF%85%E8%B4%A5%23) `104.4K 🔥` `NEW`
1. [菜市场偶遇90岁李明启老师](https://s.weibo.com/weibo?q=%23%E8%8F%9C%E5%B8%82%E5%9C%BA%E5%81%B6%E9%81%8790%E5%B2%81%E6%9D%8E%E6%98%8E%E5%90%AF%E8%80%81%E5%B8%88%23) `103.5K 🔥` `NEW`
1. [伊朗对美将从防御转向全面进攻](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%B9%E7%BE%8E%E5%B0%86%E4%BB%8E%E9%98%B2%E5%BE%A1%E8%BD%AC%E5%90%91%E5%85%A8%E9%9D%A2%E8%BF%9B%E6%94%BB%23) `77.7K 🔥` `NEW`
1. [乔振宇儿子都这么大了](https://s.weibo.com/weibo?q=%23%E4%B9%94%E6%8C%AF%E5%AE%87%E5%84%BF%E5%AD%90%E9%83%BD%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `72.1K 🔥` `NEW`
1. [名校父亲回应劝女儿放弃重点高中](https://s.weibo.com/weibo?q=%23%E5%90%8D%E6%A0%A1%E7%88%B6%E4%BA%B2%E5%9B%9E%E5%BA%94%E5%8A%9D%E5%A5%B3%E5%84%BF%E6%94%BE%E5%BC%83%E9%87%8D%E7%82%B9%E9%AB%98%E4%B8%AD%23) `67.3K 🔥` `NEW`
1. [榴莲价格彻底崩了 (Durian prices have completely collapsed)](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E4%BB%B7%E6%A0%BC%E5%BD%BB%E5%BA%95%E5%B4%A9%E4%BA%86%23) `455.7K 🔥` `+31%`
1. [3孩非亲生案女方当庭承认出轨 (The woman in the 3-child non-biological case admitted cheating in court)](https://s.weibo.com/weibo?q=%233%E5%AD%A9%E9%9D%9E%E4%BA%B2%E7%94%9F%E6%A1%88%E5%A5%B3%E6%96%B9%E5%BD%93%E5%BA%AD%E6%89%BF%E8%AE%A4%E5%87%BA%E8%BD%A8%23) `381.5K 🔥` `+34%`
1. [小狗乖乖坐挖掘机电梯出坑](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E4%B9%96%E4%B9%96%E5%9D%90%E6%8C%96%E6%8E%98%E6%9C%BA%E7%94%B5%E6%A2%AF%E5%87%BA%E5%9D%91%23) `276.6K 🔥` `+86%`
1. [井迪音乐节](https://s.weibo.com/weibo?q=%23%E4%BA%95%E8%BF%AA%E9%9F%B3%E4%B9%90%E8%8A%82%23) `275.7K 🔥` `+64%`
1. [美航母多人精神崩溃想跳海 (Several people on a US aircraft carrier suffered a nervous breakdown and wanted to jump into the sea)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%88%AA%E6%AF%8D%E5%A4%9A%E4%BA%BA%E7%B2%BE%E7%A5%9E%E5%B4%A9%E6%BA%83%E6%83%B3%E8%B7%B3%E6%B5%B7%23) `179.7K 🔥` `+83%`
1. [龙餐馆 删减 (Dragon Restaurant deleted)](https://s.weibo.com/weibo?q=%23%E9%BE%99%E9%A4%90%E9%A6%86%20%E5%88%A0%E5%87%8F%23) `179.3K 🔥` `+421%`
1. [胖东来被房东逼走房东纳税了吗 (Fat Donglai was forced to leave by the landlord. Did the landlord pay taxes?)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E8%A2%AB%E6%88%BF%E4%B8%9C%E9%80%BC%E8%B5%B0%E6%88%BF%E4%B8%9C%E7%BA%B3%E7%A8%8E%E4%BA%86%E5%90%97%23) `175.9K 🔥` `+60%`
1. [女患者称被男医生猥亵揉胸 (Female patient said she was molested and rubbed her breasts by a male doctor)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%82%A3%E8%80%85%E7%A7%B0%E8%A2%AB%E7%94%B7%E5%8C%BB%E7%94%9F%E7%8C%A5%E4%BA%B5%E6%8F%89%E8%83%B8%23) `161.6K 🔥` `+40%`
1. [左奇函回应身体状况](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E5%A5%87%E5%87%BD%E5%9B%9E%E5%BA%94%E8%BA%AB%E4%BD%93%E7%8A%B6%E5%86%B5%23) `137.8K 🔥` `+26%`
1. [蓝盈莹承认恋情](https://s.weibo.com/weibo?q=%23%E8%93%9D%E7%9B%88%E8%8E%B9%E6%89%BF%E8%AE%A4%E6%81%8B%E6%83%85%23) `136.7K 🔥` `+21%`
1. [女子想烫大波浪结果烫成钢丝球](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%83%B3%E7%83%AB%E5%A4%A7%E6%B3%A2%E6%B5%AA%E7%BB%93%E6%9E%9C%E7%83%AB%E6%88%90%E9%92%A2%E4%B8%9D%E7%90%83%23) `136.0K 🔥` `+22%`
1. [郭敬明发百妖谱原始帧 (Guo Jingming released the original frame of the Hundred Demons Spectrum)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E5%8F%91%E7%99%BE%E5%A6%96%E8%B0%B1%E5%8E%9F%E5%A7%8B%E5%B8%A7%23) `133.6K 🔥` `+22%`
1. [越不操心的人越是人生赢家 (The less worried people are, the more successful they are in life.)](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E4%B8%8D%E6%93%8D%E5%BF%83%E7%9A%84%E4%BA%BA%E8%B6%8A%E6%98%AF%E4%BA%BA%E7%94%9F%E8%B5%A2%E5%AE%B6%23) `133.2K 🔥` `+21%`
1. [成功要对自己狠到什么程度 (How hard do you have to be on yourself to succeed?)](https://s.weibo.com/weibo?q=%23%E6%88%90%E5%8A%9F%E8%A6%81%E5%AF%B9%E8%87%AA%E5%B7%B1%E7%8B%A0%E5%88%B0%E4%BB%80%E4%B9%88%E7%A8%8B%E5%BA%A6%23) `94.6K 🔥` `+23%`
1. [建议大家开车一定要专心 (It is recommended that everyone drive attentively)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E5%BC%80%E8%BD%A6%E4%B8%80%E5%AE%9A%E8%A6%81%E4%B8%93%E5%BF%83%23) `87.9K 🔥` `+47%`
1. [公积金用途又变多了 (There are more uses for Provident Funds)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E7%94%A8%E9%80%94%E5%8F%88%E5%8F%98%E5%A4%9A%E4%BA%86%23) `77.4K 🔥` `+29%`
1. [王橹杰说少年时代看不看随便吧 (Wang Lujie said it’s up to you to watch Boyhood or not.)](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E6%A9%B9%E6%9D%B0%E8%AF%B4%E5%B0%91%E5%B9%B4%E6%97%B6%E4%BB%A3%E7%9C%8B%E4%B8%8D%E7%9C%8B%E9%9A%8F%E4%BE%BF%E5%90%A7%23) `76.9K 🔥` `+35%`
1. [张家界偶遇汪涵沈梦辰散步](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E5%AE%B6%E7%95%8C%E5%81%B6%E9%81%87%E6%B1%AA%E6%B6%B5%E6%B2%88%E6%A2%A6%E8%BE%B0%E6%95%A3%E6%AD%A5%23) `74.6K 🔥` `+26%`
1. [被3小孩赞助10.5元的便利店老板回应](https://s.weibo.com/weibo?q=%23%E8%A2%AB3%E5%B0%8F%E5%AD%A9%E8%B5%9E%E5%8A%A910.5%E5%85%83%E7%9A%84%E4%BE%BF%E5%88%A9%E5%BA%97%E8%80%81%E6%9D%BF%E5%9B%9E%E5%BA%94%23) `69.6K 🔥` `+22%`
1. [多方回应女子杭州酒局遭伤害 (Many parties responded to the woman’s injury in a Hangzhou wine shop)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%90%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E9%81%AD%E4%BC%A4%E5%AE%B3%23) `1.2M 🔥`
1. [大批AI博主停更了 (A large number of AI bloggers stopped updating)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E6%89%B9AI%E5%8D%9A%E4%B8%BB%E5%81%9C%E6%9B%B4%E4%BA%86%23) `882.5K 🔥`
1. [前7个月国民经济总体平稳向新向优 (In the first seven months, the national economy has generally been stable and improving.)](https://s.weibo.com/weibo?q=%23%E5%89%8D7%E4%B8%AA%E6%9C%88%E5%9B%BD%E6%B0%91%E7%BB%8F%E6%B5%8E%E6%80%BB%E4%BD%93%E5%B9%B3%E7%A8%B3%E5%90%91%E6%96%B0%E5%90%91%E4%BC%98%23) `706.0K 🔥`
1. [高铁咸猪手男子被拘留 (Man detained on high-speed rail)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%93%81%E5%92%B8%E7%8C%AA%E6%89%8B%E7%94%B7%E5%AD%90%E8%A2%AB%E6%8B%98%E7%95%99%23) `179.9K 🔥`
1. [彭宇案 彭宇确实碰了老人 (Peng Yu case: Peng Yu did touch the old man)](https://s.weibo.com/weibo?q=%23%E5%BD%AD%E5%AE%87%E6%A1%88%20%E5%BD%AD%E5%AE%87%E7%A1%AE%E5%AE%9E%E7%A2%B0%E4%BA%86%E8%80%81%E4%BA%BA%23) `178.2K 🔥`
1. [17岁女孩搭车路过邵阳司机下车失联被锁2小时 (A 17-year-old girl was hitchhiking in Shaoyang. The driver got out of the car and lost contact. She was locked for 2 hours.)](https://s.weibo.com/weibo?q=%2317%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%90%AD%E8%BD%A6%E8%B7%AF%E8%BF%87%E9%82%B5%E9%98%B3%E5%8F%B8%E6%9C%BA%E4%B8%8B%E8%BD%A6%E5%A4%B1%E8%81%94%E8%A2%AB%E9%94%812%E5%B0%8F%E6%97%B6%23) `177.9K 🔥`
1. [曝时代少年团工作人员公费旅游 (Times Youth League staff members travel at public expense)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E5%85%AC%E8%B4%B9%E6%97%85%E6%B8%B8%23) `177.4K 🔥`
1. [桃黑黑 (peach black black)](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%23) `176.6K 🔥`
1. [特朗普将宣布霍尔木兹为美国领土 (Trump to declare Hormuz a US territory)](https://s.weibo.com/weibo?q=%23%E7%89%B9%E6%9C%97%E6%99%AE%E5%B0%86%E5%AE%A3%E5%B8%83%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E4%B8%BA%E7%BE%8E%E5%9B%BD%E9%A2%86%E5%9C%9F%23) `175.8K 🔥`
1. [曹骏 蓝盈莹](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%20%E8%93%9D%E7%9B%88%E8%8E%B9%23) `131.8K 🔥`
1. [杭州涉事招商蛇口高管已被免职 (Executives involved in the Hangzhou Investment and Shekou incident have been removed from their posts)](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E6%B6%89%E4%BA%8B%E6%8B%9B%E5%95%86%E8%9B%87%E5%8F%A3%E9%AB%98%E7%AE%A1%E5%B7%B2%E8%A2%AB%E5%85%8D%E8%81%8C%23) `130.8K 🔥`
1. [东部战区重磅视频](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%83%A8%E6%88%98%E5%8C%BA%E9%87%8D%E7%A3%85%E8%A7%86%E9%A2%91%23) `127.2K 🔥`
1. [Jennie不得不用头发遮挡 (Jennie had to cover it up with her hair)](https://s.weibo.com/weibo?q=%23Jennie%E4%B8%8D%E5%BE%97%E4%B8%8D%E7%94%A8%E5%A4%B4%E5%8F%91%E9%81%AE%E6%8C%A1%23) `114.9K 🔥`
1. [湘潭大学回应弟弟举报哥哥冒名顶替 (Xiangtan University responds to younger brother’s report that older brother is an impostor)](https://s.weibo.com/weibo?q=%23%E6%B9%98%E6%BD%AD%E5%A4%A7%E5%AD%A6%E5%9B%9E%E5%BA%94%E5%BC%9F%E5%BC%9F%E4%B8%BE%E6%8A%A5%E5%93%A5%E5%93%A5%E5%86%92%E5%90%8D%E9%A1%B6%E6%9B%BF%23) `106.6K 🔥`
1. [曝iPhone18ProMax独占可变光圈 (Exclusive variable aperture for iPhone 18 Pro Max revealed)](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhone18ProMax%E7%8B%AC%E5%8D%A0%E5%8F%AF%E5%8F%98%E5%85%89%E5%9C%88%23) `94.2K 🔥`
1. [左奇函 身体状况](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E5%A5%87%E5%87%BD%20%E8%BA%AB%E4%BD%93%E7%8A%B6%E5%86%B5%23) `83.1K 🔥`
1. [学霸父母劝700分女儿读中职或更合适](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E9%9C%B8%E7%88%B6%E6%AF%8D%E5%8A%9D700%E5%88%86%E5%A5%B3%E5%84%BF%E8%AF%BB%E4%B8%AD%E8%81%8C%E6%88%96%E6%9B%B4%E5%90%88%E9%80%82%23) `74.4K 🔥`
1. [让事情低调不是让自己低调 (Keeping things low-key is not keeping yourself low-key)](https://s.weibo.com/weibo?q=%23%E8%AE%A9%E4%BA%8B%E6%83%85%E4%BD%8E%E8%B0%83%E4%B8%8D%E6%98%AF%E8%AE%A9%E8%87%AA%E5%B7%B1%E4%BD%8E%E8%B0%83%23) `69.8K 🔥`
1. [金旼炡委婉表达不喜欢 (Kim Minhyang expresses his dislike tactfully)](https://s.weibo.com/weibo?q=%23%E9%87%91%E6%97%BC%E7%82%A1%E5%A7%94%E5%A9%89%E8%A1%A8%E8%BE%BE%E4%B8%8D%E5%96%9C%E6%AC%A2%23) `68.9K 🔥`
1. [什么样的家庭可以买40万的车 (What kind of family can buy a car worth 400,000?)](https://s.weibo.com/weibo?q=%23%E4%BB%80%E4%B9%88%E6%A0%B7%E7%9A%84%E5%AE%B6%E5%BA%AD%E5%8F%AF%E4%BB%A5%E4%B9%B040%E4%B8%87%E7%9A%84%E8%BD%A6%23) `67.1K 🔥`
1. [只有中国人才能识别的加密暗号 (An encrypted code that only Chinese people can recognize)](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E6%9C%89%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%89%8D%E8%83%BD%E8%AF%86%E5%88%AB%E7%9A%84%E5%8A%A0%E5%AF%86%E6%9A%97%E5%8F%B7%23) `179.0K 🔥` `-27%`
1. [曹骏初舞台人气票数倒挂 (Cao Junchu’s stage popularity votes are upside down)](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E5%88%9D%E8%88%9E%E5%8F%B0%E4%BA%BA%E6%B0%94%E7%A5%A8%E6%95%B0%E5%80%92%E6%8C%82%23) `176.8K 🔥` `-23%`
1. [陈伟霆为九门十年不接军装戏 (William Chan will not take on military uniform dramas for Nine Gates for ten years)](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E4%B8%BA%E4%B9%9D%E9%97%A8%E5%8D%81%E5%B9%B4%E4%B8%8D%E6%8E%A5%E5%86%9B%E8%A3%85%E6%88%8F%23) `87.9K 🔥` `-26%`

Updated at 2026-08-18 08:01:49

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
