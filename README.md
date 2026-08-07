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

1. [河南三支一扶考试存规模性组织作弊 (There are large-scale organized cheating in Henan's three branches and one support examination)](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%E8%80%83%E8%AF%95%E5%AD%98%E8%A7%84%E6%A8%A1%E6%80%A7%E7%BB%84%E7%BB%87%E4%BD%9C%E5%BC%8A%23) `940.3K 🔥` `NEW`
1. [台风白海豚直奔华东来了](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%E7%99%BD%E6%B5%B7%E8%B1%9A%E7%9B%B4%E5%A5%94%E5%8D%8E%E4%B8%9C%E6%9D%A5%E4%BA%86%23) `745.6K 🔥` `NEW`
1. [网友偶遇樊振东保养汽车](https://s.weibo.com/weibo?q=%23%E7%BD%91%E5%8F%8B%E5%81%B6%E9%81%87%E6%A8%8A%E6%8C%AF%E4%B8%9C%E4%BF%9D%E5%85%BB%E6%B1%BD%E8%BD%A6%23) `736.4K 🔥` `NEW`
1. [时差再大也要等一个好消息](https://s.weibo.com/weibo?q=%23%E6%97%B6%E5%B7%AE%E5%86%8D%E5%A4%A7%E4%B9%9F%E8%A6%81%E7%AD%89%E4%B8%80%E4%B8%AA%E5%A5%BD%E6%B6%88%E6%81%AF%23) `673.1K 🔥` `NEW`
1. [飞机免费退改票真的来了](https://s.weibo.com/weibo?q=%23%E9%A3%9E%E6%9C%BA%E5%85%8D%E8%B4%B9%E9%80%80%E6%94%B9%E7%A5%A8%E7%9C%9F%E7%9A%84%E6%9D%A5%E4%BA%86%23) `633.9K 🔥` `NEW`
1. [笔试前13被淘汰后5进体检](https://s.weibo.com/weibo?q=%23%E7%AC%94%E8%AF%95%E5%89%8D13%E8%A2%AB%E6%B7%98%E6%B1%B0%E5%90%8E5%E8%BF%9B%E4%BD%93%E6%A3%80%23) `596.5K 🔥` `NEW`
1. [马嘉祺演唱会刚结束又工作了](https://s.weibo.com/weibo?q=%23%E9%A9%AC%E5%98%89%E7%A5%BA%E6%BC%94%E5%94%B1%E4%BC%9A%E5%88%9A%E7%BB%93%E6%9D%9F%E5%8F%88%E5%B7%A5%E4%BD%9C%E4%BA%86%23) `500.9K 🔥` `NEW`
1. [大麦全年拦截恶意请求超60亿次](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%BA%A6%E5%85%A8%E5%B9%B4%E6%8B%A6%E6%88%AA%E6%81%B6%E6%84%8F%E8%AF%B7%E6%B1%82%E8%B6%8560%E4%BA%BF%E6%AC%A1%23) `499.4K 🔥` `NEW`
1. [绣春刀3动了](https://s.weibo.com/weibo?q=%23%E7%BB%A3%E6%98%A5%E5%88%803%E5%8A%A8%E4%BA%86%23) `492.3K 🔥` `NEW`
1. [李云泽严重违纪违法](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E4%BA%91%E6%B3%BD%E4%B8%A5%E9%87%8D%E8%BF%9D%E7%BA%AA%E8%BF%9D%E6%B3%95%23) `464.3K 🔥` `NEW`
1. [中山医院陷婚外胚胎风波职工哽咽 (Employees of Zhongshan Hospital choked up due to extramarital embryo scandal)](https://s.weibo.com/weibo?q=%23%E4%B8%AD%E5%B1%B1%E5%8C%BB%E9%99%A2%E9%99%B7%E5%A9%9A%E5%A4%96%E8%83%9A%E8%83%8E%E9%A3%8E%E6%B3%A2%E8%81%8C%E5%B7%A5%E5%93%BD%E5%92%BD%23) `454.2K 🔥` `NEW`
1. [六旬富商婚外生子自称仅存在瑕疵](https://s.weibo.com/weibo?q=%23%E5%85%AD%E6%97%AC%E5%AF%8C%E5%95%86%E5%A9%9A%E5%A4%96%E7%94%9F%E5%AD%90%E8%87%AA%E7%A7%B0%E4%BB%85%E5%AD%98%E5%9C%A8%E7%91%95%E7%96%B5%23) `412.1K 🔥` `NEW`
1. [大麦称打击黄牛寸步不让](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E9%BA%A6%E7%A7%B0%E6%89%93%E5%87%BB%E9%BB%84%E7%89%9B%E5%AF%B8%E6%AD%A5%E4%B8%8D%E8%AE%A9%23) `406.4K 🔥` `NEW`
1. [河南三支一扶考务人员勾结嫌疑人泄题](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%E8%80%83%E5%8A%A1%E4%BA%BA%E5%91%98%E5%8B%BE%E7%BB%93%E5%AB%8C%E7%96%91%E4%BA%BA%E6%B3%84%E9%A2%98%23) `372.3K 🔥` `NEW`
1. [河南三支一扶笔试作弊犯罪细节](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%E7%AC%94%E8%AF%95%E4%BD%9C%E5%BC%8A%E7%8A%AF%E7%BD%AA%E7%BB%86%E8%8A%82%23) `303.8K 🔥` `NEW`
1. [虞书欣影视寒冬无缝进组的含金量](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%BD%B1%E8%A7%86%E5%AF%92%E5%86%AC%E6%97%A0%E7%BC%9D%E8%BF%9B%E7%BB%84%E7%9A%84%E5%90%AB%E9%87%91%E9%87%8F%23) `293.7K 🔥` `NEW`
1. [台风](https://s.weibo.com/weibo?q=%23%E5%8F%B0%E9%A3%8E%23) `281.8K 🔥` `NEW`
1. [Codex做了20个小弟给自己干活](https://s.weibo.com/weibo?q=%23Codex%E5%81%9A%E4%BA%8620%E4%B8%AA%E5%B0%8F%E5%BC%9F%E7%BB%99%E8%87%AA%E5%B7%B1%E5%B9%B2%E6%B4%BB%23) `267.2K 🔥` `NEW`
1. [泸溪河 不追责](https://s.weibo.com/weibo?q=%23%E6%B3%B8%E6%BA%AA%E6%B2%B3%20%E4%B8%8D%E8%BF%BD%E8%B4%A3%23) `262.3K 🔥` `NEW`
1. [宜宾 页岩气开采](https://s.weibo.com/weibo?q=%23%E5%AE%9C%E5%AE%BE%20%E9%A1%B5%E5%B2%A9%E6%B0%94%E5%BC%80%E9%87%87%23) `259.9K 🔥` `NEW`
1. [泰国校园枪击6死23伤 (6 killed, 23 injured in Thailand school shooting)](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%A0%A1%E5%9B%AD%E6%9E%AA%E5%87%BB6%E6%AD%BB23%E4%BC%A4%23) `258.3K 🔥` `NEW`
1. [时代少年团黄牛落网](https://s.weibo.com/weibo?q=%23%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E9%BB%84%E7%89%9B%E8%90%BD%E7%BD%91%23) `255.2K 🔥` `NEW`
1. [河南三支一扶作弊团伙被抓](https://s.weibo.com/weibo?q=%23%E6%B2%B3%E5%8D%97%E4%B8%89%E6%94%AF%E4%B8%80%E6%89%B6%E4%BD%9C%E5%BC%8A%E5%9B%A2%E4%BC%99%E8%A2%AB%E6%8A%93%23) `253.5K 🔥` `NEW`
1. [原来拼豆都是老辈子玩剩下的](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E6%8B%BC%E8%B1%86%E9%83%BD%E6%98%AF%E8%80%81%E8%BE%88%E5%AD%90%E7%8E%A9%E5%89%A9%E4%B8%8B%E7%9A%84%23) `223.7K 🔥` `NEW`
1. [东航提前14天可免费退改签](https://s.weibo.com/weibo?q=%23%E4%B8%9C%E8%88%AA%E6%8F%90%E5%89%8D14%E5%A4%A9%E5%8F%AF%E5%85%8D%E8%B4%B9%E9%80%80%E6%94%B9%E7%AD%BE%23) `204.4K 🔥` `NEW`
1. [最尊重立秋的城市出现了](https://s.weibo.com/weibo?q=%23%E6%9C%80%E5%B0%8A%E9%87%8D%E7%AB%8B%E7%A7%8B%E7%9A%84%E5%9F%8E%E5%B8%82%E5%87%BA%E7%8E%B0%E4%BA%86%23) `1.2M 🔥` `+313%`
1. [虞书欣工作室晒小兰花未公开照](https://s.weibo.com/weibo?q=%23%E8%99%9E%E4%B9%A6%E6%AC%A3%E5%B7%A5%E4%BD%9C%E5%AE%A4%E6%99%92%E5%B0%8F%E5%85%B0%E8%8A%B1%E6%9C%AA%E5%85%AC%E5%BC%80%E7%85%A7%23) `710.0K 🔥` `+117%`
1. [星巴克 秋天第一场商战 (Starbucks first business war in autumn)](https://s.weibo.com/weibo?q=%23%E6%98%9F%E5%B7%B4%E5%85%8B%20%E7%A7%8B%E5%A4%A9%E7%AC%AC%E4%B8%80%E5%9C%BA%E5%95%86%E6%88%98%23) `630.8K 🔥` `+49%`
1. [高速飞来轮胎致车主昏迷爱车独自完成全套救援 (A tire flew in at high speed, causing the car owner to fall into coma. The car completed a complete rescue operation alone)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%80%9F%E9%A3%9E%E6%9D%A5%E8%BD%AE%E8%83%8E%E8%87%B4%E8%BD%A6%E4%B8%BB%E6%98%8F%E8%BF%B7%E7%88%B1%E8%BD%A6%E7%8B%AC%E8%87%AA%E5%AE%8C%E6%88%90%E5%85%A8%E5%A5%97%E6%95%91%E6%8F%B4%23) `616.1K 🔥` `+115%`
1. [吴倩女儿长这么大了](https://s.weibo.com/weibo?q=%23%E5%90%B4%E5%80%A9%E5%A5%B3%E5%84%BF%E9%95%BF%E8%BF%99%E4%B9%88%E5%A4%A7%E4%BA%86%23) `610.3K 🔥` `+126%`
1. [影视寒冬 进组难](https://s.weibo.com/weibo?q=%23%E5%BD%B1%E8%A7%86%E5%AF%92%E5%86%AC%20%E8%BF%9B%E7%BB%84%E9%9A%BE%23) `585.0K 🔥` `+98%`
1. [取消私生子继承权你支持吗](https://s.weibo.com/weibo?q=%23%E5%8F%96%E6%B6%88%E7%A7%81%E7%94%9F%E5%AD%90%E7%BB%A7%E6%89%BF%E6%9D%83%E4%BD%A0%E6%94%AF%E6%8C%81%E5%90%97%23) `583.0K 🔥` `+112%`
1. [清融在线求剧透九门 (Qingrong Online seeks spoilers for Nine Gates)](https://s.weibo.com/weibo?q=%23%E6%B8%85%E8%9E%8D%E5%9C%A8%E7%BA%BF%E6%B1%82%E5%89%A7%E9%80%8F%E4%B9%9D%E9%97%A8%23) `481.2K 🔥` `+42%`
1. [泰国校园枪击已致7死](https://s.weibo.com/weibo?q=%23%E6%B3%B0%E5%9B%BD%E6%A0%A1%E5%9B%AD%E6%9E%AA%E5%87%BB%E5%B7%B2%E8%87%B47%E6%AD%BB%23) `470.5K 🔥` `+64%`
1. [原来这就是抑郁躯体化](https://s.weibo.com/weibo?q=%23%E5%8E%9F%E6%9D%A5%E8%BF%99%E5%B0%B1%E6%98%AF%E6%8A%91%E9%83%81%E8%BA%AF%E4%BD%93%E5%8C%96%23) `446.6K 🔥` `+67%`
1. [女儿卖房定价9000被母亲7500签约](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%84%BF%E5%8D%96%E6%88%BF%E5%AE%9A%E4%BB%B79000%E8%A2%AB%E6%AF%8D%E4%BA%B27500%E7%AD%BE%E7%BA%A6%23) `431.2K 🔥` `+76%`
1. [情侣酒店熟睡遭陌生男闯入站床前](https://s.weibo.com/weibo?q=%23%E6%83%85%E4%BE%A3%E9%85%92%E5%BA%97%E7%86%9F%E7%9D%A1%E9%81%AD%E9%99%8C%E7%94%9F%E7%94%B7%E9%97%AF%E5%85%A5%E7%AB%99%E5%BA%8A%E5%89%8D%23) `387.0K 🔥` `+62%`
1. [戚薇AI短剧 雷霆视角](https://s.weibo.com/weibo?q=%23%E6%88%9A%E8%96%87AI%E7%9F%AD%E5%89%A7%20%E9%9B%B7%E9%9C%86%E8%A7%86%E8%A7%92%23) `373.2K 🔥` `+32%`
1. [建议成立中国稀土出口总公司总部设新疆 (It is recommended to establish China Rare Earth Export Corporation with its headquarters in Xinjiang)](https://s.weibo.com/weibo?q=%23%E5%BB%BA%E8%AE%AE%E6%88%90%E7%AB%8B%E4%B8%AD%E5%9B%BD%E7%A8%80%E5%9C%9F%E5%87%BA%E5%8F%A3%E6%80%BB%E5%85%AC%E5%8F%B8%E6%80%BB%E9%83%A8%E8%AE%BE%E6%96%B0%E7%96%86%23) `372.7K 🔥` `+32%`
1. [韩国被爆性贿赂世预赛裁判](https://s.weibo.com/weibo?q=%23%E9%9F%A9%E5%9B%BD%E8%A2%AB%E7%88%86%E6%80%A7%E8%B4%BF%E8%B5%82%E4%B8%96%E9%A2%84%E8%B5%9B%E8%A3%81%E5%88%A4%23) `347.2K 🔥` `+23%`
1. [立秋第一杯奶茶的受益者出现了](https://s.weibo.com/weibo?q=%23%E7%AB%8B%E7%A7%8B%E7%AC%AC%E4%B8%80%E6%9D%AF%E5%A5%B6%E8%8C%B6%E7%9A%84%E5%8F%97%E7%9B%8A%E8%80%85%E5%87%BA%E7%8E%B0%E4%BA%86%23) `300.7K 🔥` `+38%`
1. [前7个月货物贸易进出口超30万亿元](https://s.weibo.com/weibo?q=%23%E5%89%8D7%E4%B8%AA%E6%9C%88%E8%B4%A7%E7%89%A9%E8%B4%B8%E6%98%93%E8%BF%9B%E5%87%BA%E5%8F%A3%E8%B6%8530%E4%B8%87%E4%BA%BF%E5%85%83%23) `747.6K 🔥`
1. [张雅琪晒中餐厅10图](https://s.weibo.com/weibo?q=%23%E5%BC%A0%E9%9B%85%E7%90%AA%E6%99%92%E4%B8%AD%E9%A4%90%E5%8E%8510%E5%9B%BE%23) `744.1K 🔥`
1. [不要空腹吃龙口粉丝 (Don’t eat Longkou vermicelli on an empty stomach)](https://s.weibo.com/weibo?q=%23%E4%B8%8D%E8%A6%81%E7%A9%BA%E8%85%B9%E5%90%83%E9%BE%99%E5%8F%A3%E7%B2%89%E4%B8%9D%23) `660.1K 🔥`
1. [Mina同学发声 (Mina classmate speaks out)](https://s.weibo.com/weibo?q=%23Mina%E5%90%8C%E5%AD%A6%E5%8F%91%E5%A3%B0%23) `341.8K 🔥`
1. [好演员从不无缝进组](https://s.weibo.com/weibo?q=%23%E5%A5%BD%E6%BC%94%E5%91%98%E4%BB%8E%E4%B8%8D%E6%97%A0%E7%BC%9D%E8%BF%9B%E7%BB%84%23) `320.5K 🔥`
1. [iPhone18Pro系列价格预测](https://s.weibo.com/weibo?q=%23iPhone18Pro%E7%B3%BB%E5%88%97%E4%BB%B7%E6%A0%BC%E9%A2%84%E6%B5%8B%23) `295.7K 🔥`
1. [泸溪河牙冠事件消费者已致歉 (Consumers have apologized for the Luxihe dental crown incident)](https://s.weibo.com/weibo?q=%23%E6%B3%B8%E6%BA%AA%E6%B2%B3%E7%89%99%E5%86%A0%E4%BA%8B%E4%BB%B6%E6%B6%88%E8%B4%B9%E8%80%85%E5%B7%B2%E8%87%B4%E6%AD%89%23) `288.2K 🔥`
1. [客人喜欢张雅琪的菜品介绍](https://s.weibo.com/weibo?q=%23%E5%AE%A2%E4%BA%BA%E5%96%9C%E6%AC%A2%E5%BC%A0%E9%9B%85%E7%90%AA%E7%9A%84%E8%8F%9C%E5%93%81%E4%BB%8B%E7%BB%8D%23) `257.9K 🔥`
1. [提离职被知道要裁员的领导硬留下 (I resigned but was forced to stay by my boss who knew he was going to lay off employees.)](https://s.weibo.com/weibo?q=%23%E6%8F%90%E7%A6%BB%E8%81%8C%E8%A2%AB%E7%9F%A5%E9%81%93%E8%A6%81%E8%A3%81%E5%91%98%E7%9A%84%E9%A2%86%E5%AF%BC%E7%A1%AC%E7%95%99%E4%B8%8B%23) `257.9K 🔥`
1. [南航 西梅汁 (China Southern Airlines prune juice)](https://s.weibo.com/weibo?q=%23%E5%8D%97%E8%88%AA%20%E8%A5%BF%E6%A2%85%E6%B1%81%23) `455.1K 🔥` `-87%`
1. [现在的小学生已经是庞然大物了](https://s.weibo.com/weibo?q=%23%E7%8E%B0%E5%9C%A8%E7%9A%84%E5%B0%8F%E5%AD%A6%E7%94%9F%E5%B7%B2%E7%BB%8F%E6%98%AF%E5%BA%9E%E7%84%B6%E5%A4%A7%E7%89%A9%E4%BA%86%23) `422.1K 🔥` `-41%`

Updated at 2026-08-07 17:42:41

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
