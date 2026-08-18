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

1. [天安门下半旗悼念朱镕基同志 (Flags flown at half-mast in Tiananmen Square to mourn Comrade Zhu Rongji)](https://s.weibo.com/weibo?q=%23%E5%A4%A9%E5%AE%89%E9%97%A8%E4%B8%8B%E5%8D%8A%E6%97%97%E6%82%BC%E5%BF%B5%E6%9C%B1%E9%95%95%E5%9F%BA%E5%90%8C%E5%BF%97%23) `1.1M 🔥` `NEW`
1. [BBA大降价 宝马5系跌至28万](https://s.weibo.com/weibo?q=%23BBA%E5%A4%A7%E9%99%8D%E4%BB%B7%20%E5%AE%9D%E9%A9%AC5%E7%B3%BB%E8%B7%8C%E8%87%B328%E4%B8%87%23) `904.7K 🔥` `NEW`
1. [817稻米狂欢进行时](https://s.weibo.com/weibo?q=%23817%E7%A8%BB%E7%B1%B3%E7%8B%82%E6%AC%A2%E8%BF%9B%E8%A1%8C%E6%97%B6%23) `729.4K 🔥` `NEW`
1. [照烧鳗鱼 死鳗鱼](https://s.weibo.com/weibo?q=%23%E7%85%A7%E7%83%A7%E9%B3%97%E9%B1%BC%20%E6%AD%BB%E9%B3%97%E9%B1%BC%23) `729.4K 🔥` `NEW`
1. [普通人有收入后爱弥补过去的自己](https://s.weibo.com/weibo?q=%23%E6%99%AE%E9%80%9A%E4%BA%BA%E6%9C%89%E6%94%B6%E5%85%A5%E5%90%8E%E7%88%B1%E5%BC%A5%E8%A1%A5%E8%BF%87%E5%8E%BB%E7%9A%84%E8%87%AA%E5%B7%B1%23) `402.6K 🔥` `NEW`
1. [专家称食品配料表越短越好是误区](https://s.weibo.com/weibo?q=%23%E4%B8%93%E5%AE%B6%E7%A7%B0%E9%A3%9F%E5%93%81%E9%85%8D%E6%96%99%E8%A1%A8%E8%B6%8A%E7%9F%AD%E8%B6%8A%E5%A5%BD%E6%98%AF%E8%AF%AF%E5%8C%BA%23) `401.9K 🔥` `NEW`
1. [印度教授发中国街景称被印媒骗惨了](https://s.weibo.com/weibo?q=%23%E5%8D%B0%E5%BA%A6%E6%95%99%E6%8E%88%E5%8F%91%E4%B8%AD%E5%9B%BD%E8%A1%97%E6%99%AF%E7%A7%B0%E8%A2%AB%E5%8D%B0%E5%AA%92%E9%AA%97%E6%83%A8%E4%BA%86%23) `300.6K 🔥` `NEW`
1. [长剧试行边改边播机制](https://s.weibo.com/weibo?q=%23%E9%95%BF%E5%89%A7%E8%AF%95%E8%A1%8C%E8%BE%B9%E6%94%B9%E8%BE%B9%E6%92%AD%E6%9C%BA%E5%88%B6%23) `276.4K 🔥` `NEW`
1. [杭州涉事高管曾是高考状元清华毕业](https://s.weibo.com/weibo?q=%23%E6%9D%AD%E5%B7%9E%E6%B6%89%E4%BA%8B%E9%AB%98%E7%AE%A1%E6%9B%BE%E6%98%AF%E9%AB%98%E8%80%83%E7%8A%B6%E5%85%83%E6%B8%85%E5%8D%8E%E6%AF%95%E4%B8%9A%23) `275.8K 🔥` `NEW`
1. [许家印崩了东北富二代42个亿](https://s.weibo.com/weibo?q=%23%E8%AE%B8%E5%AE%B6%E5%8D%B0%E5%B4%A9%E4%BA%86%E4%B8%9C%E5%8C%97%E5%AF%8C%E4%BA%8C%E4%BB%A342%E4%B8%AA%E4%BA%BF%23) `275.7K 🔥` `NEW`
1. [李嫣几乎看不见唇腭裂修复痕迹 (Li Yan’s cleft lip and palate repair traces are almost invisible)](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E5%AB%A3%E5%87%A0%E4%B9%8E%E7%9C%8B%E4%B8%8D%E8%A7%81%E5%94%87%E8%85%AD%E8%A3%82%E4%BF%AE%E5%A4%8D%E7%97%95%E8%BF%B9%23) `275.1K 🔥` `NEW`
1. [丁禹兮是在培养死士吗](https://s.weibo.com/weibo?q=%23%E4%B8%81%E7%A6%B9%E5%85%AE%E6%98%AF%E5%9C%A8%E5%9F%B9%E5%85%BB%E6%AD%BB%E5%A3%AB%E5%90%97%23) `211.9K 🔥` `NEW`
1. [加强中小学教师医务人员欠薪治理](https://s.weibo.com/weibo?q=%23%E5%8A%A0%E5%BC%BA%E4%B8%AD%E5%B0%8F%E5%AD%A6%E6%95%99%E5%B8%88%E5%8C%BB%E5%8A%A1%E4%BA%BA%E5%91%98%E6%AC%A0%E8%96%AA%E6%B2%BB%E7%90%86%23) `208.5K 🔥` `NEW`
1. [李蠕蠕薛甄珠仿妆神还原](https://s.weibo.com/weibo?q=%23%E6%9D%8E%E8%A0%95%E8%A0%95%E8%96%9B%E7%94%84%E7%8F%A0%E4%BB%BF%E5%A6%86%E7%A5%9E%E8%BF%98%E5%8E%9F%23) `208.4K 🔥` `NEW`
1. [蓝盈莹和男友刚在一起没多久](https://s.weibo.com/weibo?q=%23%E8%93%9D%E7%9B%88%E8%8E%B9%E5%92%8C%E7%94%B7%E5%8F%8B%E5%88%9A%E5%9C%A8%E4%B8%80%E8%B5%B7%E6%B2%A1%E5%A4%9A%E4%B9%85%23) `204.7K 🔥` `NEW`
1. [珍妮巴斯或无法继续担任湖人老板](https://s.weibo.com/weibo?q=%23%E7%8F%8D%E5%A6%AE%E5%B7%B4%E6%96%AF%E6%88%96%E6%97%A0%E6%B3%95%E7%BB%A7%E7%BB%AD%E6%8B%85%E4%BB%BB%E6%B9%96%E4%BA%BA%E8%80%81%E6%9D%BF%23) `152.1K 🔥` `NEW`
1. [赵海峰接受调查](https://s.weibo.com/weibo?q=%23%E8%B5%B5%E6%B5%B7%E5%B3%B0%E6%8E%A5%E5%8F%97%E8%B0%83%E6%9F%A5%23) `147.3K 🔥` `NEW`
1. [男子糖尿病不忌口1年后昏迷进ICU](https://s.weibo.com/weibo?q=%23%E7%94%B7%E5%AD%90%E7%B3%96%E5%B0%BF%E7%97%85%E4%B8%8D%E5%BF%8C%E5%8F%A31%E5%B9%B4%E5%90%8E%E6%98%8F%E8%BF%B7%E8%BF%9BICU%23) `132.2K 🔥` `NEW`
1. [学籍顶替案哥哥称不存在冒名顶替](https://s.weibo.com/weibo?q=%23%E5%AD%A6%E7%B1%8D%E9%A1%B6%E6%9B%BF%E6%A1%88%E5%93%A5%E5%93%A5%E7%A7%B0%E4%B8%8D%E5%AD%98%E5%9C%A8%E5%86%92%E5%90%8D%E9%A1%B6%E6%9B%BF%23) `130.5K 🔥` `NEW`
1. [童装设计 引人触摸](https://s.weibo.com/weibo?q=%23%E7%AB%A5%E8%A3%85%E8%AE%BE%E8%AE%A1%20%E5%BC%95%E4%BA%BA%E8%A7%A6%E6%91%B8%23) `123.7K 🔥` `NEW`
1. [100余名中国人在巴基斯坦被拘 (More than 100 Chinese nationals detained in Pakistan)](https://s.weibo.com/weibo?q=%23100%E4%BD%99%E5%90%8D%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%9C%A8%E5%B7%B4%E5%9F%BA%E6%96%AF%E5%9D%A6%E8%A2%AB%E6%8B%98%23) `120.5K 🔥` `NEW`
1. [醉鹅娘 走私](https://s.weibo.com/weibo?q=%23%E9%86%89%E9%B9%85%E5%A8%98%20%E8%B5%B0%E7%A7%81%23) `115.3K 🔥` `NEW`
1. [公司组织无人岛游玩被罚11万](https://s.weibo.com/weibo?q=%23%E5%85%AC%E5%8F%B8%E7%BB%84%E7%BB%87%E6%97%A0%E4%BA%BA%E5%B2%9B%E6%B8%B8%E7%8E%A9%E8%A2%AB%E7%BD%9A11%E4%B8%87%23) `111.9K 🔥` `NEW`
1. [弟弟举报哥哥案母亲首度露面](https://s.weibo.com/weibo?q=%23%E5%BC%9F%E5%BC%9F%E4%B8%BE%E6%8A%A5%E5%93%A5%E5%93%A5%E6%A1%88%E6%AF%8D%E4%BA%B2%E9%A6%96%E5%BA%A6%E9%9C%B2%E9%9D%A2%23) `110.0K 🔥` `NEW`
1. [美国巨头买了3200辆中国车](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E5%9B%BD%E5%B7%A8%E5%A4%B4%E4%B9%B0%E4%BA%863200%E8%BE%86%E4%B8%AD%E5%9B%BD%E8%BD%A6%23) `106.4K 🔥` `NEW`
1. [曝时代少年团工作人员公费旅游 (Times Youth League staff members travel at public expense)](https://s.weibo.com/weibo?q=%23%E6%9B%9D%E6%97%B6%E4%BB%A3%E5%B0%91%E5%B9%B4%E5%9B%A2%E5%B7%A5%E4%BD%9C%E4%BA%BA%E5%91%98%E5%85%AC%E8%B4%B9%E6%97%85%E6%B8%B8%23) `274.7K 🔥` `+55%`
1. [桃黑黑 (peach black black)](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%23) `274.4K 🔥` `+55%`
1. [17岁女孩搭车路过邵阳司机下车失联被锁2小时 (A 17-year-old girl was hitchhiking in Shaoyang. The driver got out of the car and lost contact. She was locked for 2 hours.)](https://s.weibo.com/weibo?q=%2317%E5%B2%81%E5%A5%B3%E5%AD%A9%E6%90%AD%E8%BD%A6%E8%B7%AF%E8%BF%87%E9%82%B5%E9%98%B3%E5%8F%B8%E6%9C%BA%E4%B8%8B%E8%BD%A6%E5%A4%B1%E8%81%94%E8%A2%AB%E9%94%812%E5%B0%8F%E6%97%B6%23) `274.1K 🔥` `+54%`
1. [女患者称被男医生猥亵揉胸 (Female patient said she was molested and rubbed her breasts by a male doctor)](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E6%82%A3%E8%80%85%E7%A7%B0%E8%A2%AB%E7%94%B7%E5%8C%BB%E7%94%9F%E7%8C%A5%E4%BA%B5%E6%8F%89%E8%83%B8%23) `274.0K 🔥` `+70%`
1. [蓝盈莹承认恋情](https://s.weibo.com/weibo?q=%23%E8%93%9D%E7%9B%88%E8%8E%B9%E6%89%BF%E8%AE%A4%E6%81%8B%E6%83%85%23) `208.0K 🔥` `+52%`
1. [桃黑黑勘误](https://s.weibo.com/weibo?q=%23%E6%A1%83%E9%BB%91%E9%BB%91%E5%8B%98%E8%AF%AF%23) `206.8K 🔥` `+94%`
1. [女子想烫大波浪结果烫成钢丝球](https://s.weibo.com/weibo?q=%23%E5%A5%B3%E5%AD%90%E6%83%B3%E7%83%AB%E5%A4%A7%E6%B3%A2%E6%B5%AA%E7%BB%93%E6%9E%9C%E7%83%AB%E6%88%90%E9%92%A2%E4%B8%9D%E7%90%83%23) `203.9K 🔥` `+50%`
1. [菜市场偶遇90岁李明启老师](https://s.weibo.com/weibo?q=%23%E8%8F%9C%E5%B8%82%E5%9C%BA%E5%81%B6%E9%81%8790%E5%B2%81%E6%9D%8E%E6%98%8E%E5%90%AF%E8%80%81%E5%B8%88%23) `156.1K 🔥` `+51%`
1. [曝iPhone18ProMax独占可变光圈 (Exclusive variable aperture for iPhone 18 Pro Max revealed)](https://s.weibo.com/weibo?q=%23%E6%9B%9DiPhone18ProMax%E7%8B%AC%E5%8D%A0%E5%8F%AF%E5%8F%98%E5%85%89%E5%9C%88%23) `121.6K 🔥` `+29%`
1. [公积金用途又变多了 (There are more uses for Provident Funds)](https://s.weibo.com/weibo?q=%23%E5%85%AC%E7%A7%AF%E9%87%91%E7%94%A8%E9%80%94%E5%8F%88%E5%8F%98%E5%A4%9A%E4%BA%86%23) `111.5K 🔥` `+44%`
1. [伊朗对美将从防御转向全面进攻](https://s.weibo.com/weibo?q=%23%E4%BC%8A%E6%9C%97%E5%AF%B9%E7%BE%8E%E5%B0%86%E4%BB%8E%E9%98%B2%E5%BE%A1%E8%BD%AC%E5%90%91%E5%85%A8%E9%9D%A2%E8%BF%9B%E6%94%BB%23) `106.4K 🔥` `+37%`
1. [前7个月国民经济总体平稳向新向优 (In the first seven months, the national economy has generally been stable and improving.)](https://s.weibo.com/weibo?q=%23%E5%89%8D7%E4%B8%AA%E6%9C%88%E5%9B%BD%E6%B0%91%E7%BB%8F%E6%B5%8E%E6%80%BB%E4%BD%93%E5%B9%B3%E7%A8%B3%E5%90%91%E6%96%B0%E5%90%91%E4%BC%98%23) `768.5K 🔥`
1. [榴莲价格彻底崩了 (Durian prices have completely collapsed)](https://s.weibo.com/weibo?q=%23%E6%A6%B4%E8%8E%B2%E4%BB%B7%E6%A0%BC%E5%BD%BB%E5%BA%95%E5%B4%A9%E4%BA%86%23) `455.3K 🔥`
1. [井迪音乐节 (Jingdi Music Festival)](https://s.weibo.com/weibo?q=%23%E4%BA%95%E8%BF%AA%E9%9F%B3%E4%B9%90%E8%8A%82%23) `276.2K 🔥`
1. [曹骏初舞台人气票数倒挂 (Cao Junchu’s stage popularity votes are upside down)](https://s.weibo.com/weibo?q=%23%E6%9B%B9%E9%AA%8F%E5%88%9D%E8%88%9E%E5%8F%B0%E4%BA%BA%E6%B0%94%E7%A5%A8%E6%95%B0%E5%80%92%E6%8C%82%23) `205.8K 🔥`
1. [美航母多人精神崩溃想跳海 (Several people on a US aircraft carrier suffered a nervous breakdown and wanted to jump into the sea)](https://s.weibo.com/weibo?q=%23%E7%BE%8E%E8%88%AA%E6%AF%8D%E5%A4%9A%E4%BA%BA%E7%B2%BE%E7%A5%9E%E5%B4%A9%E6%BA%83%E6%83%B3%E8%B7%B3%E6%B5%B7%23) `159.1K 🔥`
1. [只有中国人才能识别的加密暗号 (An encrypted code that only Chinese people can recognize)](https://s.weibo.com/weibo?q=%23%E5%8F%AA%E6%9C%89%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%89%8D%E8%83%BD%E8%AF%86%E5%88%AB%E7%9A%84%E5%8A%A0%E5%AF%86%E6%9A%97%E5%8F%B7%23) `154.9K 🔥`
1. [胖东来被房东逼走房东纳税了吗 (Fat Donglai was forced to leave by the landlord. Did the landlord pay taxes?)](https://s.weibo.com/weibo?q=%23%E8%83%96%E4%B8%9C%E6%9D%A5%E8%A2%AB%E6%88%BF%E4%B8%9C%E9%80%BC%E8%B5%B0%E6%88%BF%E4%B8%9C%E7%BA%B3%E7%A8%8E%E4%BA%86%E5%90%97%23) `144.0K 🔥`
1. [左奇函回应身体状况](https://s.weibo.com/weibo?q=%23%E5%B7%A6%E5%A5%87%E5%87%BD%E5%9B%9E%E5%BA%94%E8%BA%AB%E4%BD%93%E7%8A%B6%E5%86%B5%23) `139.4K 🔥`
1. [郭敬明发百妖谱原始帧 (Guo Jingming released the original frame of the Hundred Demons Spectrum)](https://s.weibo.com/weibo?q=%23%E9%83%AD%E6%95%AC%E6%98%8E%E5%8F%91%E7%99%BE%E5%A6%96%E8%B0%B1%E5%8E%9F%E5%A7%8B%E5%B8%A7%23) `109.1K 🔥`
1. [越不操心的人越是人生赢家 (The less worried people are, the more successful they are in life.)](https://s.weibo.com/weibo?q=%23%E8%B6%8A%E4%B8%8D%E6%93%8D%E5%BF%83%E7%9A%84%E4%BA%BA%E8%B6%8A%E6%98%AF%E4%BA%BA%E7%94%9F%E8%B5%A2%E5%AE%B6%23) `107.3K 🔥`
1. [大批AI博主停更了 (A large number of AI bloggers stopped updating)](https://s.weibo.com/weibo?q=%23%E5%A4%A7%E6%89%B9AI%E5%8D%9A%E4%B8%BB%E5%81%9C%E6%9B%B4%E4%BA%86%23) `389.1K 🔥` `-56%`
1. [多方回应女子杭州酒局遭伤害 (Many parties responded to the woman’s injury in a Hangzhou wine shop)](https://s.weibo.com/weibo?q=%23%E5%A4%9A%E6%96%B9%E5%9B%9E%E5%BA%94%E5%A5%B3%E5%AD%90%E6%9D%AD%E5%B7%9E%E9%85%92%E5%B1%80%E9%81%AD%E4%BC%A4%E5%AE%B3%23) `207.4K 🔥` `-83%`
1. [小狗乖乖坐挖掘机电梯出坑](https://s.weibo.com/weibo?q=%23%E5%B0%8F%E7%8B%97%E4%B9%96%E4%B9%96%E5%9D%90%E6%8C%96%E6%8E%98%E6%9C%BA%E7%94%B5%E6%A2%AF%E5%87%BA%E5%9D%91%23) `205.6K 🔥` `-26%`
1. [高铁咸猪手男子被拘留 (Man detained on high-speed rail)](https://s.weibo.com/weibo?q=%23%E9%AB%98%E9%93%81%E5%92%B8%E7%8C%AA%E6%89%8B%E7%94%B7%E5%AD%90%E8%A2%AB%E6%8B%98%E7%95%99%23) `127.7K 🔥` `-29%`

Updated at 2026-08-18 09:45:59

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
