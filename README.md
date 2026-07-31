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

1. [三部门向甘肃调拨5000件中央救灾物资 (Three departments allocate 5,000 pieces of central disaster relief materials to Gansu)](https://s.weibo.com/weibo?q=%23%E4%B8%89%E9%83%A8%E9%97%A8%E5%90%91%E7%94%98%E8%82%83%E8%B0%83%E6%8B%A85000%E4%BB%B6%E4%B8%AD%E5%A4%AE%E6%95%91%E7%81%BE%E7%89%A9%E8%B5%84%23) `656.6K 🔥` `NEW`
1. [疑似在北京公交干过的罗马机场员工](https://s.weibo.com/weibo?q=%23%E7%96%91%E4%BC%BC%E5%9C%A8%E5%8C%97%E4%BA%AC%E5%85%AC%E4%BA%A4%E5%B9%B2%E8%BF%87%E7%9A%84%E7%BD%97%E9%A9%AC%E6%9C%BA%E5%9C%BA%E5%91%98%E5%B7%A5%23) `654.6K 🔥` `NEW`
1. [于正回应凤囚凰争议](https://s.weibo.com/weibo?q=%23%E4%BA%8E%E6%AD%A3%E5%9B%9E%E5%BA%94%E5%87%A4%E5%9B%9A%E5%87%B0%E4%BA%89%E8%AE%AE%23) `649.9K 🔥` `NEW`
1. [网传信阳息县闹鬼实系谣言](https://s.weibo.com/weibo?q=%23%E7%BD%91%E4%BC%A0%E4%BF%A1%E9%98%B3%E6%81%AF%E5%8E%BF%E9%97%B9%E9%AC%BC%E5%AE%9E%E7%B3%BB%E8%B0%A3%E8%A8%80%23) `505.3K 🔥` `NEW`
1. [十日终焉](https://s.weibo.com/weibo?q=%23%E5%8D%81%E6%97%A5%E7%BB%88%E7%84%89%23) `365.7K 🔥` `NEW`
1. [韩国女演员去世4年后被安排冥婚](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E5%A5%B3%E6%BC%94%E5%91%98%E5%8E%BB%E4%B8%964%E5%B9%B4%E5%90%8E%E8%A2%AB%E5%AE%89%E6%8E%92%E5%86%A5%E5%A9%9A%23) `244.6K 🔥` `NEW`
1. [行程图](https://s.weibo.com/weibo?q=%23%E8%A1%8C%E7%A8%8B%E5%9B%BE%23) `244.5K 🔥` `NEW`
1. [贵州通天河伴漂服务被指存在擦边](https://s.weibo.com/weibo?q=%23%E8%B4%B5%E5%B7%9E%E9%80%9A%E5%A4%A9%E6%B2%B3%E4%BC%B4%E6%BC%82%E6%9C%8D%E5%8A%A1%E8%A2%AB%E6%8C%87%E5%AD%98%E5%9C%A8%E6%93%A6%E8%BE%B9%23) `244.1K 🔥` `NEW`
1. [公公强奸儿媳案被告方已申请再审](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%85%AC%E5%BC%BA%E5%A5%B8%E5%84%BF%E5%AA%B3%E6%A1%88%E8%A2%AB%E5%91%8A%E6%96%B9%E5%B7%B2%E7%94%B3%E8%AF%B7%E5%86%8D%E5%AE%A1%23) `243.6K 🔥` `NEW`
1. [智力障碍妻子被性侵丈夫曾主动报案](https://s.weibo.com/weibo?q=%23%E6%99%BA%E5%8A%9B%E9%9A%9C%E7%A2%8D%E5%A6%BB%E5%AD%90%E8%A2%AB%E6%80%A7%E4%BE%B5%E4%B8%88%E5%A4%AB%E6%9B%BE%E4%B8%BB%E5%8A%A8%E6%8A%A5%E6%A1%88%23) `243.4K 🔥` `NEW`
1. [婚外试管男子欲按月支付财产给原配 (Man who undergoes extramarital in vitro fertilization wants to pay property to his first wife on a monthly basis)](https://s.weibo.com/weibo?q=%23%E5%A9%9A%E5%A4%96%E8%AF%95%E7%AE%A1%E7%94%B7%E5%AD%90%E6%AC%B2%E6%8C%89%E6%9C%88%E6%94%AF%E4%BB%98%E8%B4%A2%E4%BA%A7%E7%BB%99%E5%8E%9F%E9%85%8D%23) `228.4K 🔥` `NEW`
1. [1988元伴漂服务可选高颜值亲亲抱抱](https://s.weibo.com/weibo?q=%231988%E5%85%83%E4%BC%B4%E6%BC%82%E6%9C%8D%E5%8A%A1%E5%8F%AF%E9%80%89%E9%AB%98%E9%A2%9C%E5%80%BC%E4%BA%B2%E4%BA%B2%E6%8A%B1%E6%8A%B1%23) `227.6K 🔥` `NEW`
1. [花儿与少年8见面会](https://s.weibo.com/weibo?q=%23%E8%8A%B1%E5%84%BF%E4%B8%8E%E5%B0%91%E5%B9%B48%E8%A7%81%E9%9D%A2%E4%BC%9A%23) `227.1K 🔥` `NEW`
1. [内马尔宣布退出巴西国家队](https://s.weibo.com/weibo?q=%23%E5%86%85%E9%A9%AC%E5%B0%94%E5%AE%A3%E5%B8%83%E9%80%80%E5%87%BA%E5%B7%B4%E8%A5%BF%E5%9B%BD%E5%AE%B6%E9%98%9F%23) `222.6K 🔥` `NEW`
1. [强军制胜向未来](https://s.weibo.com/weibo?q=%23%E5%BC%BA%E5%86%9B%E5%88%B6%E8%83%9C%E5%90%91%E6%9C%AA%E6%9D%A5%23) `220.0K 🔥` `NEW`
1. [ai代替谁都代替不了吴谨言](https://s.weibo.com/weibo?q=%23ai%E4%BB%A3%E6%9B%BF%E8%B0%81%E9%83%BD%E4%BB%A3%E6%9B%BF%E4%B8%8D%E4%BA%86%E5%90%B4%E8%B0%A8%E8%A8%80%23) `219.9K 🔥` `NEW`
1. [日本国家情报局正式成立](https://s.weibo.com/weibo?q=%23%E6%97%A5%E6%9C%AC%E5%9B%BD%E5%AE%B6%E6%83%85%E6%8A%A5%E5%B1%80%E6%AD%A3%E5%BC%8F%E6%88%90%E7%AB%8B%23) `166.5K 🔥` `NEW`
1. [有人用两个夏天捡知了壳狂赚130万](https://s.weibo.com/weibo?q=%23%E6%9C%89%E4%BA%BA%E7%94%A8%E4%B8%A4%E4%B8%AA%E5%A4%8F%E5%A4%A9%E6%8D%A1%E7%9F%A5%E4%BA%86%E5%A3%B3%E7%8B%82%E8%B5%9A130%E4%B8%87%23) `165.7K 🔥` `NEW`
1. [吴雅婷 我没有蹭王栎鑫热度](https://s.weibo.com/weibo?q=%23%E5%90%B4%E9%9B%85%E5%A9%B7%20%E6%88%91%E6%B2%A1%E6%9C%89%E8%B9%AD%E7%8E%8B%E6%A0%8E%E9%91%AB%E7%83%AD%E5%BA%A6%23) `165.3K 🔥` `NEW`
1. [阚清子最具幸福感的三张照片](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E6%9C%80%E5%85%B7%E5%B9%B8%E7%A6%8F%E6%84%9F%E7%9A%84%E4%B8%89%E5%BC%A0%E7%85%A7%E7%89%87%23) `164.2K 🔥` `NEW`
1. [中国宣布暂停核试验30周年 (30th anniversary of China’s announcement of moratorium on nuclear testing)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%9B%BD%E5%AE%A3%E5%B8%83%E6%9A%82%E5%81%9C%E6%A0%B8%E8%AF%95%E9%AA%8C30%E5%91%A8%E5%B9%B4%23) `152.9K 🔥` `NEW`
1. [油价或迎年内第10次上涨](https://s.weibo.com/weibo?q=%23%E6%B2%B9%E4%BB%B7%E6%88%96%E8%BF%8E%E5%B9%B4%E5%86%85%E7%AC%AC10%E6%AC%A1%E4%B8%8A%E6%B6%A8%23) `139.6K 🔥` `NEW`
1. [阚清子体重秤数字减少也很幸福](https://s.weibo.com/weibo?q=%23%E9%98%9A%E6%B8%85%E5%AD%90%E4%BD%93%E9%87%8D%E7%A7%A4%E6%95%B0%E5%AD%97%E5%87%8F%E5%B0%91%E4%B9%9F%E5%BE%88%E5%B9%B8%E7%A6%8F%23) `137.4K 🔥` `NEW`
1. [茶卡盐湖一半晚霞一半月光](https://s.weibo.com/weibo?q=%23%E8%8C%B6%E5%8D%A1%E7%9B%90%E6%B9%96%E4%B8%80%E5%8D%8A%E6%99%9A%E9%9C%9E%E4%B8%80%E5%8D%8A%E6%9C%88%E5%85%89%23) `126.6K 🔥` `NEW`
1. [律师解读10月大婴儿就诊后死亡](https://s.weibo.com/weibo?q=%23%E5%BE%8B%E5%B8%88%E8%A7%A3%E8%AF%BB10%E6%9C%88%E5%A4%A7%E5%A9%B4%E5%84%BF%E5%B0%B1%E8%AF%8A%E5%90%8E%E6%AD%BB%E4%BA%A1%23) `125.0K 🔥` `NEW`
1. [亚足联发表声明](https://s.weibo.com/weibo?q=%23%E4%BA%9A%E8%B6%B3%E8%81%94%E5%8F%91%E8%A1%A8%E5%A3%B0%E6%98%8E%23) `111.9K 🔥` `NEW`
1. [罗文任河北省委书记](https://s.weibo.com/weibo?q=%23%E7%BD%97%E6%96%87%E4%BB%BB%E6%B2%B3%E5%8C%97%E7%9C%81%E5%A7%94%E4%B9%A6%E8%AE%B0%23) `110.4K 🔥` `NEW`
1. [美媒评詹姆斯生涯队友一阵](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%AA%92%E8%AF%84%E8%A9%B9%E5%A7%86%E6%96%AF%E7%94%9F%E6%B6%AF%E9%98%9F%E5%8F%8B%E4%B8%80%E9%98%B5%23) `105.2K 🔥` `NEW`
1. [OpenAI模型最高降价80%](https://s.weibo.com/weibo?q=%23OpenAI%E6%A8%A1%E5%9E%8B%E6%9C%80%E9%AB%98%E9%99%8D%E4%BB%B780%25%23) `103.7K 🔥` `NEW`
1. [女子假截图付款被揭穿拒补钱](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%81%87%E6%88%AA%E5%9B%BE%E4%BB%98%E6%AC%BE%E8%A2%AB%E6%8F%AD%E7%A9%BF%E6%8B%92%E8%A1%A5%E9%92%B1%23) `102.6K 🔥` `NEW`
1. [丈夫和第三者胚胎是婚姻耻辱 (Husband and third party embryo is a disgrace to marriage)](https://s.weibo.com/weibo?q=%23%E4%B8%88%E5%A4%AB%E5%92%8C%E7%AC%AC%E4%B8%89%E8%80%85%E8%83%9A%E8%83%8E%E6%98%AF%E5%A9%9A%E5%A7%BB%E8%80%BB%E8%BE%B1%23) `1.2M 🔥` `+676%`
1. [女子做检查时身亡丈夫称麻醉师玩手机](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E5%81%9A%E6%A3%80%E6%9F%A5%E6%97%B6%E8%BA%AB%E4%BA%A1%E4%B8%88%E5%A4%AB%E7%A7%B0%E9%BA%BB%E9%86%89%E5%B8%88%E7%8E%A9%E6%89%8B%E6%9C%BA%23) `849.4K 🔥` `+63%`
1. [医生称多囊卵巢综合征名字害惨女性](https://s.weibo.com/weibo?q=%23%E5%8C%BB%E7%94%9F%E7%A7%B0%E5%A4%9A%E5%9B%8A%E5%8D%B5%E5%B7%A2%E7%BB%BC%E5%90%88%E5%BE%81%E5%90%8D%E5%AD%97%E5%AE%B3%E6%83%A8%E5%A5%B3%E6%80%A7%23) `510.9K 🔥` `+279%`
1. [美国吸毒女子像虫子一样在地上蠕动](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%90%B8%E6%AF%92%E5%A5%B3%E5%AD%90%E5%83%8F%E8%99%AB%E5%AD%90%E4%B8%80%E6%A0%B7%E5%9C%A8%E5%9C%B0%E4%B8%8A%E8%A0%95%E5%8A%A8%23) `490.2K 🔥` `+297%`
1. [显卡全面封仓](https://s.weibo.com/weibo?q=%23%E6%98%BE%E5%8D%A1%E5%85%A8%E9%9D%A2%E5%B0%81%E4%BB%93%23) `244.8K 🔥` `+91%`
1. [宋威龙 热巴姐你好像提前放扇子了](https://s.weibo.com/weibo?q=%23%E5%AE%8B%E5%A8%81%E9%BE%99%20%E7%83%AD%E5%B7%B4%E5%A7%90%E4%BD%A0%E5%A5%BD%E5%83%8F%E6%8F%90%E5%89%8D%E6%94%BE%E6%89%87%E5%AD%90%E4%BA%86%23) `244.0K 🔥` `+78%`
1. [迪丽热巴张碧晨的妆都是金鹤龙化的](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%BC%A0%E7%A2%A7%E6%99%A8%E7%9A%84%E5%A6%86%E9%83%BD%E6%98%AF%E9%87%91%E9%B9%A4%E9%BE%99%E5%8C%96%E7%9A%84%23) `238.7K 🔥` `+53%`
1. [刘耀文瘦成这样](https://s.weibo.com/weibo?q=%23%E5%88%98%E8%80%80%E6%96%87%E7%98%A6%E6%88%90%E8%BF%99%E6%A0%B7%23) `225.4K 🔥` `+61%`
1. [迪丽热巴嘉人CEO合照](https://s.weibo.com/weibo?q=%23%E8%BF%AA%E4%B8%BD%E7%83%AD%E5%B7%B4%E5%98%89%E4%BA%BACEO%E5%90%88%E7%85%A7%23) `166.4K 🔥` `+27%`
1. [建议大家不要活在朋友圈 (I suggest you not to live in the circle of friends)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E5%A4%A7%E5%AE%B6%E4%B8%8D%E8%A6%81%E6%B4%BB%E5%9C%A8%E6%9C%8B%E5%8F%8B%E5%9C%88%23) `164.7K 🔥` `+25%`
1. [男生每天躺玩手机超5小时无法走路](https://s.weibo.com/weibo?q=%23%E7%94%B7%E7%94%9F%E6%AF%8F%E5%A4%A9%E8%BA%BA%E7%8E%A9%E6%89%8B%E6%9C%BA%E8%B6%855%E5%B0%8F%E6%97%B6%E6%97%A0%E6%B3%95%E8%B5%B0%E8%B7%AF%23) `164.3K 🔥` `+87%`
1. [吴谨言曾说墨雨云间是自己的救命稻草 (Wu Jinyan once said that Mo Yuyunjian was his life-saving straw)](https://s.weibo.com/weibo?q=%23%E5%90%B4%E8%B0%A8%E8%A8%80%E6%9B%BE%E8%AF%B4%E5%A2%A8%E9%9B%A8%E4%BA%91%E9%97%B4%E6%98%AF%E8%87%AA%E5%B7%B1%E7%9A%84%E6%95%91%E5%91%BD%E7%A8%BB%E8%8D%89%23) `141.3K 🔥` `+99%`
1. [曝刑警荣誉是宋威龙的首部正剧 (The Detective's Honor is Song Weilong's first major drama)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E5%88%91%E8%AD%A6%E8%8D%A3%E8%AA%89%E6%98%AF%E5%AE%8B%E5%A8%81%E9%BE%99%E7%9A%84%E9%A6%96%E9%83%A8%E6%AD%A3%E5%89%A7%23) `102.7K 🔥` `+57%`
1. [陈伟霆九门老九门出场对比](https://s.weibo.com/weibo?q=%23%E9%99%88%E4%BC%9F%E9%9C%86%E4%B9%9D%E9%97%A8%E8%80%81%E4%B9%9D%E9%97%A8%E5%87%BA%E5%9C%BA%E5%AF%B9%E6%AF%94%23) `219.8K 🔥`
1. [九门爆开](https://s.weibo.com/weibo?q=%23%E4%B9%9D%E9%97%A8%E7%88%86%E5%BC%80%23) `124.8K 🔥`
1. [欧足联决定抵制世界杯 (UEFA decides to boycott World Cup)](https://s.weibo.com/weibo?q=%23%E6%AC%A7%E8%B6%B3%E8%81%94%E5%86%B3%E5%AE%9A%E6%8A%B5%E5%88%B6%E4%B8%96%E7%95%8C%E6%9D%AF%23) `436.2K 🔥` `-59%`
1. [豆包究竟见过多少人的糗事](https://s.weibo.com/weibo?q=%23%E8%B1%86%E5%8C%85%E7%A9%B6%E7%AB%9F%E8%A7%81%E8%BF%87%E5%A4%9A%E5%B0%91%E4%BA%BA%E7%9A%84%E7%B3%97%E4%BA%8B%23) `243.1K 🔥` `-49%`
1. [凤囚凰 古偶烂片史上难以逾越的高峰 (Phoenix Prisoner: An insurmountable peak in the history of bad ancient puppet films)](https://s.weibo.com/weibo?q=%23%E5%87%A4%E5%9B%9A%E5%87%B0%20%E5%8F%A4%E5%81%B6%E7%83%82%E7%89%87%E5%8F%B2%E4%B8%8A%E9%9A%BE%E4%BB%A5%E9%80%BE%E8%B6%8A%E7%9A%84%E9%AB%98%E5%B3%B0%23) `243.0K 🔥` `-58%`
1. [莲子切开里面有个小娃娃](https://s.weibo.com/weibo?q=%23%E8%8E%B2%E5%AD%90%E5%88%87%E5%BC%80%E9%87%8C%E9%9D%A2%E6%9C%89%E4%B8%AA%E5%B0%8F%E5%A8%83%E5%A8%83%23) `166.1K 🔥` `-44%`
1. [小米澎程N90价格 (Xiaomi Pengcheng N90 price)](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%B1%B3%E6%BE%8E%E7%A8%8BN90%E4%BB%B7%E6%A0%BC%23) `149.2K 🔥` `-48%`
1. [你甚至可以看到植物打人](https://s.weibo.com/weibo?q=%23%E4%BD%A0%E7%94%9A%E8%87%B3%E5%8F%AF%E4%BB%A5%E7%9C%8B%E5%88%B0%E6%A4%8D%E7%89%A9%E6%89%93%E4%BA%BA%23) `101.5K 🔥` `-22%`

Updated at 2026-07-31 10:27:32

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
