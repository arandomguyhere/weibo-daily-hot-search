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

1. [谢娜爆料浪姐录制时厕所门是锁的 (Xie Na revealed that the toilet door was locked when Sister Lang was recording)](https://s.weibo.com/weibo?q=%23%E8%B0%A2%E5%A8%9C%E7%88%86%E6%96%99%E6%B5%AA%E5%A7%90%E5%BD%95%E5%88%B6%E6%97%B6%E5%8E%95%E6%89%80%E9%97%A8%E6%98%AF%E9%94%81%E7%9A%84%23) `398.4K 🔥` `NEW`
1. [黄金大幅暴涨](https://s.weibo.com/weibo?q=%23%E9%BB%84%E9%87%91%E5%A4%A7%E5%B9%85%E6%9A%B4%E6%B6%A8%23) `359.9K 🔥` `NEW`
1. [疑似jisoo哥哥涉嫌猥亵女主播被捕](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BCjisoo%E5%93%A5%E5%93%A5%E6%B6%89%E5%AB%8C%E7%8C%A5%E4%BA%B5%E5%A5%B3%E4%B8%BB%E6%92%AD%E8%A2%AB%E6%8D%95%23) `282.2K 🔥` `NEW`
1. [女孩偷偷领结婚证爷爷得知心痛落泪](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%A9%E5%81%B7%E5%81%B7%E9%A2%86%E7%BB%93%E5%A9%9A%E8%AF%81%E7%88%B7%E7%88%B7%E5%BE%97%E7%9F%A5%E5%BF%83%E7%97%9B%E8%90%BD%E6%B3%AA%23) `233.3K 🔥` `NEW`
1. [女子同房后出血2000ml相当总血量一半](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%90%8C%E6%88%BF%E5%90%8E%E5%87%BA%E8%A1%802000ml%E7%9B%B8%E5%BD%93%E6%80%BB%E8%A1%80%E9%87%8F%E4%B8%80%E5%8D%8A%23) `233.3K 🔥` `NEW`
1. [雷军不建议有司机的大老板买小米](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E4%B8%8D%E5%BB%BA%E8%AE%AE%E6%9C%89%E5%8F%B8%E6%9C%BA%E7%9A%84%E5%A4%A7%E8%80%81%E6%9D%BF%E4%B9%B0%E5%B0%8F%E7%B1%B3%23) `219.8K 🔥` `NEW`
1. [橘子海乐队 华为](https://s.weibo.com/weibo?q=%23%E6%A9%98%E5%AD%90%E6%B5%B7%E4%B9%90%E9%98%9F%20%E5%8D%8E%E4%B8%BA%23) `188.6K 🔥` `NEW`
1. [张杰魏晨台下拥抱](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E6%9D%B0%E9%AD%8F%E6%99%A8%E5%8F%B0%E4%B8%8B%E6%8B%A5%E6%8A%B1%23) `182.0K 🔥` `NEW`
1. [医生回应28岁孕妇确诊肺癌](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E5%9B%9E%E5%BA%9428%E5%B2%81%E5%AD%95%E5%A6%87%E7%A1%AE%E8%AF%8A%E8%82%BA%E7%99%8C%23) `168.1K 🔥` `NEW`
1. [第一个发现这个机位的是天才吧](https://s.weibo.com/weibo?q=%23%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8F%91%E7%8E%B0%E8%BF%99%E4%B8%AA%E6%9C%BA%E4%BD%8D%E7%9A%84%E6%98%AF%E5%A4%A9%E6%89%8D%E5%90%A7%23) `142.4K 🔥` `NEW`
1. [伊朗或因美继续封锁再关闭霍尔木兹 (Iran may close Hormuz again due to continued U.S. blockade)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E6%88%96%E5%9B%A0%E7%BE%8E%E7%BB%A7%E7%BB%AD%E5%B0%81%E9%94%81%E5%86%8D%E5%85%B3%E9%97%AD%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%23) `142.4K 🔥` `NEW`
1. [女子以为吃蓝莓嘴染色一查竟是癌](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E4%BB%A5%E4%B8%BA%E5%90%83%E8%93%9D%E8%8E%93%E5%98%B4%E6%9F%93%E8%89%B2%E4%B8%80%E6%9F%A5%E7%AB%9F%E6%98%AF%E7%99%8C%23) `120.9K 🔥` `NEW`
1. [252.4元蛋糕幽灵店铺拿走122元](https://s.weibo.com/weibo?q=%23252.4%E5%85%83%E8%9B%8B%E7%B3%95%E5%B9%BD%E7%81%B5%E5%BA%97%E9%93%BA%E6%8B%BF%E8%B5%B0122%E5%85%83%23) `89.4K 🔥` `NEW`
1. [女子1比1复刻李小冉心愿便利贴](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%901%E6%AF%941%E5%A4%8D%E5%88%BB%E6%9D%8E%E5%B0%8F%E5%86%89%E5%BF%83%E6%84%BF%E4%BE%BF%E5%88%A9%E8%B4%B4%23) `84.1K 🔥` `NEW`
1. [华为客服回应橘子海乐队指责侵权](https://s.weibo.com/weibo?q=%23%E5%8D%8E%E4%B8%BA%E5%AE%A2%E6%9C%8D%E5%9B%9E%E5%BA%94%E6%A9%98%E5%AD%90%E6%B5%B7%E4%B9%90%E9%98%9F%E6%8C%87%E8%B4%A3%E4%BE%B5%E6%9D%83%23) `83.0K 🔥` `NEW`
1. [解放军护卫舰与外舰缠斗20小时](https://s.weibo.com/weibo?q=%23%E8%A7%A3%E6%94%BE%E5%86%9B%E6%8A%A4%E5%8D%AB%E8%88%B0%E4%B8%8E%E5%A4%96%E8%88%B0%E7%BC%A0%E6%96%9720%E5%B0%8F%E6%97%B6%23) `1.2M 🔥` `+81%`
1. [中国经济在风浪中稳住了发展底盘](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E7%BB%8F%E6%B5%8E%E5%9C%A8%E9%A3%8E%E6%B5%AA%E4%B8%AD%E7%A8%B3%E4%BD%8F%E4%BA%86%E5%8F%91%E5%B1%95%E5%BA%95%E7%9B%98%23) `690.0K 🔥` `+40%`
1. [日本叫嚣击沉中国航母](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%8F%AB%E5%9A%A3%E5%87%BB%E6%B2%89%E4%B8%AD%E5%9B%BD%E8%88%AA%E6%AF%8D%23) `621.4K 🔥` `+27%`
1. [张雪机车夺得超级杆位赛第二名 (Zhang Xue motorcycle won second place in super pole race)](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%AA%E6%9C%BA%E8%BD%A6%E5%A4%BA%E5%BE%97%E8%B6%85%E7%BA%A7%E6%9D%86%E4%BD%8D%E8%B5%9B%E7%AC%AC%E4%BA%8C%E5%90%8D%23) `495.3K 🔥` `+26%`
1. [21世纪大君夫人 (21st Century Maharaja’s Wife)](https://s.weibo.com/weibo?q=%2321%E4%B8%96%E7%BA%AA%E5%A4%A7%E5%90%9B%E5%A4%AB%E4%BA%BA%23) `359.2K 🔥` `+184%`
1. [女子跳楼被男友拽5分钟后坠亡](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E8%B7%B3%E6%A5%BC%E8%A2%AB%E7%94%B7%E5%8F%8B%E6%8B%BD5%E5%88%86%E9%92%9F%E5%90%8E%E5%9D%A0%E4%BA%A1%23) `358.4K 🔥` `+185%`
1. [日舰艇进入台湾海峡被中国军队处置](https://s.weibo.com/weibo?q=%23%E6%97%A5%E8%88%B0%E8%89%87%E8%BF%9B%E5%85%A5%E5%8F%B0%E6%B9%BE%E6%B5%B7%E5%B3%A1%E8%A2%AB%E4%B8%AD%E5%9B%BD%E5%86%9B%E9%98%9F%E5%A4%84%E7%BD%AE%23) `357.5K 🔥` `+357%`
1. [孙怡回应和阚清子关系 (Sun Yi responds to her relationship with Kan Qingzi)](https://s.weibo.com/weibo?q=%23%E5%AD%99%E6%80%A1%E5%9B%9E%E5%BA%94%E5%92%8C%E9%98%9A%E6%B8%85%E5%AD%90%E5%85%B3%E7%B3%BB%23) `356.5K 🔥` `+189%`
1. [医生爆料用献血证换血已成常态 (Doctors revealed that using blood donation certificates for blood transfusion has become a common practice)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E7%88%86%E6%96%99%E7%94%A8%E7%8C%AE%E8%A1%80%E8%AF%81%E6%8D%A2%E8%A1%80%E5%B7%B2%E6%88%90%E5%B8%B8%E6%80%81%23) `355.8K 🔥` `+186%`
1. [Angelababy陈赫拥抱 (Angelababy Chen He hugs)](https://s.weibo.com/weibo?q=%23Angelababy%E9%99%88%E8%B5%AB%E6%8B%A5%E6%8A%B1%23) `355.1K 🔥` `+185%`
1. [东部战区回应日舰过航台湾海峡 (The Eastern Theater Command responds to Japanese ships passing through the Taiwan Strait)](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E9%83%A8%E6%88%98%E5%8C%BA%E5%9B%9E%E5%BA%94%E6%97%A5%E8%88%B0%E8%BF%87%E8%88%AA%E5%8F%B0%E6%B9%BE%E6%B5%B7%E5%B3%A1%23) `353.9K 🔥` `+182%`
1. [朱迅已抗癌20年](https://s.weibo.com/weibo?q=%23%E6%9C%B1%E8%BF%85%E5%B7%B2%E6%8A%97%E7%99%8C20%E5%B9%B4%23) `353.7K 🔥` `+184%`
1. [芭乐的籽居然可以一整块掰下来 (The seeds of guava can be broken off in one piece)](https://s.weibo.com/weibo?q=%23%E8%8A%AD%E4%B9%90%E7%9A%84%E7%B1%BD%E5%B1%85%E7%84%B6%E5%8F%AF%E4%BB%A5%E4%B8%80%E6%95%B4%E5%9D%97%E6%8E%B0%E4%B8%8B%E6%9D%A5%23) `263.9K 🔥` `+113%`
1. [单依纯若捆绑王菲宣传涉嫌违法 (Shan Yichunruo is suspected of breaking the law by tying up Faye Wong for promotion)](https://s.weibo.com/weibo?q=%23%E5%8D%95%E4%BE%9D%E7%BA%AF%E8%8B%A5%E6%8D%86%E7%BB%91%E7%8E%8B%E8%8F%B2%E5%AE%A3%E4%BC%A0%E6%B6%89%E5%AB%8C%E8%BF%9D%E6%B3%95%23) `233.3K 🔥` `+90%`
1. [李小冉一公第一名 (Li Xiaoran first place)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%B0%8F%E5%86%89%E4%B8%80%E5%85%AC%E7%AC%AC%E4%B8%80%E5%90%8D%23) `233.3K 🔥` `+92%`
1. [换电池小卡扣要13万新能源车主崩溃 (130,000 new energy car owners will collapse when replacing a small battery buckle)](https://s.weibo.com/weibo?q=%23%E6%8D%A2%E7%94%B5%E6%B1%A0%E5%B0%8F%E5%8D%A1%E6%89%A3%E8%A6%8113%E4%B8%87%E6%96%B0%E8%83%BD%E6%BA%90%E8%BD%A6%E4%B8%BB%E5%B4%A9%E6%BA%83%23) `232.1K 🔥` `+91%`
1. [伊朗开放霍尔木兹特朗普发帖说谢谢 (Iran opens Hormuz, Trump posts to say thank you)](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%BC%80%E6%94%BE%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E7%89%B9%E6%9C%97%E6%99%AE%E5%8F%91%E5%B8%96%E8%AF%B4%E8%B0%A2%E8%B0%A2%23) `180.9K 🔥` `+48%`
1. [都美竹被强执](https://s.weibo.com/weibo?q=%23%E9%83%BD%E7%BE%8E%E7%AB%B9%E8%A2%AB%E5%BC%BA%E6%89%A7%23) `147.9K 🔥` `+21%`
1. [20岁孙女偷偷结婚7旬爷爷落泪 (20-year-old granddaughter gets married secretly, 70-year-old grandfather sheds tears)](https://s.weibo.com/weibo?q=%2320%E5%B2%81%E5%AD%99%E5%A5%B3%E5%81%B7%E5%81%B7%E7%BB%93%E5%A9%9A7%E6%97%AC%E7%88%B7%E7%88%B7%E8%90%BD%E6%B3%AA%23) `109.1K 🔥` `+37%`
1. [儿子晒96岁父亲的三无精致生活](https://s.weibo.com/weibo?q=%23%E5%84%BF%E5%AD%90%E6%99%9296%E5%B2%81%E7%88%B6%E4%BA%B2%E7%9A%84%E4%B8%89%E6%97%A0%E7%B2%BE%E8%87%B4%E7%94%9F%E6%B4%BB%23) `108.8K 🔥` `+37%`
1. [霍尔木兹海峡开放 (Strait of Hormuz opens)](https://s.weibo.com/weibo?q=%23%E9%9C%8D%E5%B0%94%E6%9C%A8%E5%85%B9%E6%B5%B7%E5%B3%A1%E5%BC%80%E6%94%BE%23) `832.7K 🔥`
1. [氧化菊 泼水节 (Chrysanthemum water splashing festival)](https://s.weibo.com/weibo?q=%23%E6%B0%A7%E5%8C%96%E8%8F%8A%20%E6%B3%BC%E6%B0%B4%E8%8A%82%23) `372.8K 🔥`
1. [雷军达成京沪高速只充一次电](https://s.weibo.com/weibo?q=%23%E9%9B%B7%E5%86%9B%E8%BE%BE%E6%88%90%E4%BA%AC%E6%B2%AA%E9%AB%98%E9%80%9F%E5%8F%AA%E5%85%85%E4%B8%80%E6%AC%A1%E7%94%B5%23) `360.0K 🔥`
1. [小米新SU7续航](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%96%B0SU7%E7%BB%AD%E8%88%AA%23) `135.1K 🔥`
1. [麦当劳肯德基 宿敌cp](https://s.weibo.com/weibo?q=%23%E9%BA%A6%E5%BD%93%E5%8A%B3%E8%82%AF%E5%BE%B7%E5%9F%BA%20%E5%AE%BF%E6%95%8Ccp%23) `116.6K 🔥`
1. [拼多多美团京东淘天抖音被罚35亿 (Pinduoduo, Meituan, JD.com, Taotian and Douyin were fined 3.5 billion)](https://s.weibo.com/weibo?q=%23%E6%8B%BC%E5%A4%9A%E5%A4%9A%E7%BE%8E%E5%9B%A2%E4%BA%AC%E4%B8%9C%E6%B7%98%E5%A4%A9%E6%8A%96%E9%9F%B3%E8%A2%AB%E7%BD%9A35%E4%BA%BF%23) `115.0K 🔥`
1. [猝死前10分钟身体什么感觉](https://s.weibo.com/weibo?q=%23%E7%8C%9D%E6%AD%BB%E5%89%8D10%E5%88%86%E9%92%9F%E8%BA%AB%E4%BD%93%E4%BB%80%E4%B9%88%E6%84%9F%E8%A7%89%23) `109.1K 🔥`
1. [魏晨现身张杰演唱会](https://s.weibo.com/weibo?q=%23%E9%AD%8F%E6%99%A8%E7%8E%B0%E8%BA%AB%E5%BC%A0%E6%9D%B0%E6%BC%94%E5%94%B1%E4%BC%9A%23) `108.2K 🔥`
1. [国家发改委释放五大信号 (The National Development and Reform Commission releases five major signals)](https://s.weibo.com/weibo?q=%23%E5%9B%BD%E5%AE%B6%E5%8F%91%E6%94%B9%E5%A7%94%E9%87%8A%E6%94%BE%E4%BA%94%E5%A4%A7%E4%BF%A1%E5%8F%B7%23) `102.1K 🔥`
1. [王一博85号赛车赛道飞驰](https://s.weibo.com/weibo?q=%23%E7%8E%8B%E4%B8%80%E5%8D%9A85%E5%8F%B7%E8%B5%9B%E8%BD%A6%E8%B5%9B%E9%81%93%E9%A3%9E%E9%A9%B0%23) `98.8K 🔥`
1. [新西兰军机多次抵近中国周边空域 (New Zealand military planes have repeatedly arrived in the airspace surrounding China)](https://s.weibo.com/weibo?q=%23%E6%96%B0%E8%A5%BF%E5%85%B0%E5%86%9B%E6%9C%BA%E5%A4%9A%E6%AC%A1%E6%8A%B5%E8%BF%91%E4%B8%AD%E5%9B%BD%E5%91%A8%E8%BE%B9%E7%A9%BA%E5%9F%9F%23) `96.5K 🔥`
1. [孙颖莎巨型卡通装饰](https://s.weibo.com/weibo?q=%23%E5%AD%99%E9%A2%96%E8%8E%8E%E5%B7%A8%E5%9E%8B%E5%8D%A1%E9%80%9A%E8%A3%85%E9%A5%B0%23) `82.8K 🔥`
1. [医院回应女子同房后失血性休克 (The hospital responded that the woman suffered from hemorrhagic shock after having sex)](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E9%99%A2%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%90%E5%90%8C%E6%88%BF%E5%90%8E%E5%A4%B1%E8%A1%80%E6%80%A7%E4%BC%91%E5%85%8B%23) `86.0K 🔥` `-25%`
1. [白发或是身体的抗癌警报 (Gray hair may be the body’s anti-cancer alarm)](https://s.weibo.com/weibo?q=%23%E7%99%BD%E5%8F%91%E6%88%96%E6%98%AF%E8%BA%AB%E4%BD%93%E7%9A%84%E6%8A%97%E7%99%8C%E8%AD%A6%E6%8A%A5%23) `85.4K 🔥` `-22%`
1. [舒淇说我卸了妆还挺像50岁的 (Shu Qi said that I look like I am 50 years old after taking off my makeup.)](https://s.weibo.com/weibo?q=%23%E8%88%92%E6%B7%87%E8%AF%B4%E6%88%91%E5%8D%B8%E4%BA%86%E5%A6%86%E8%BF%98%E6%8C%BA%E5%83%8F50%E5%B2%81%E7%9A%84%23) `82.7K 🔥` `-27%`

Updated at 2026-04-18 08:05:30

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
